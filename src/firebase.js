import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

import toast from "react-hot-toast";

import store from "./store";
import { login as loginHandle, logout as logoutHandle } from "./store/auth";
import { setMessages } from "./store/messages";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();

console.log(auth);

const provider = new GoogleAuthProvider();

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const googleLogin = async () => {
  auth.useDeviceLanguage();
  try {
    const { user } = await signInWithPopup(auth, provider);
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    toast.success("Welcome!");
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

export const update = async (data) => {
  try {
    await updateProfile(auth.currentUser, data);
    toast.success("Profile updated");
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

export const verification = async () => {
  try {
    await sendEmailVerification(auth.currentUser);
    toast.success("Doğrulama epostası gönderildi.");
  } catch (error) {
    toast.error(error.message);
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(
      loginHandle({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        emailVerified: user.emailVerified,
      })
    );

    // Listen to multiple documents in a collection

    onSnapshot(
      query(collection(db, "messages"), orderBy("createdAt")),
      (doc) => {
        store.dispatch(
          setMessages(
            doc.docs.reduce(
              (messages, message) => [
                ...messages,
                {
                  ...message.data(),
                  id: message.id,
                  createdAt: message.createdAt,
                },
              ],
              []
            )
          )
        );
      }
    );
  } else {
    store.dispatch(logoutHandle());
  }
});

export const sendMessage = async (data) => {
  try {
    const messages = await addDoc(collection(db, "messages"), data);
    return messages.id;
  } catch (error) {
    toast.error(error.message);
  }
};

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    toast.success("Reset password e mail sent!");
    return true;
  } catch (error) {
    toast.error("Böyle bir email kayıtlı değildir.");
  }
};

export default app;
