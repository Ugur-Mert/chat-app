import React from "react";

import { useSelector } from "react-redux";

import { Container, Box, Avatar, Grid, Button } from "@mui/material";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

import { verification } from "../../firebase";

export const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  const handleVerify = async () => {
    await verification();
  };

  return (
    <Container maxWidth="sm">
      <Box
        mt={2}
        p={5}
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: 1,
          padding: 3,
          borderRadius: 1,
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          backgroundColor: "#7858A6",
        }}
      >
        <Grid container rowSpacing={3}>
          <Grid
            item
            xs={12}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar src={user.photoURL} alt="avatar" />
          </Grid>

          <Grid container rowSpacing={2} mt={2} textAlign="center">
            <Grid item xs={6}>
              <p>Email: </p>
            </Grid>
            <Grid item xs={6}>
              <p>{user.email}</p>
            </Grid>

            <Grid item xs={6}>
              <p>Name:</p>
            </Grid>
            <Grid item xs={6}>
              <p>{user.displayName}</p>
            </Grid>

            <Grid item xs={12}>
              {user.emailVerified ? (
                <p style={{ color: "green" }}>
                  <VerifiedOutlinedIcon />
                </p>
              ) : (
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleVerify}
                >
                  Verify your Email
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
