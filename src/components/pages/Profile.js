import React from "react";

import { useSelector } from "react-redux";

import { Container, Box, Avatar, Grid, Button } from "@mui/material";

export const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Container maxWidth="sm">
      <Box mt={2} p={5} sx={{ bgcolor: "text.secondary", flexGrow: 1 }}>
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

          <Grid
            container
            rowSpacing={2}
            mt={2}
            textAlign="center"
            style={{ color: "white" }}
          >
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
            <Grid item xs={6}>
              <p>Phone Number:</p>
            </Grid>
            <Grid item xs={6}>
              <p>{user.phoneNumber}</p>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="success">
                Verify your Email
              </Button>
            </Grid>
          </Grid>

          {/* <Grid
            xs={6}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6} mt={3} container direction="row">
              <p>Email: </p>
            </Grid>
            <Grid item xs={6} container direction="row">
              <p>{user.email}</p>
            </Grid>
          </Grid>
          <Grid xs={6} direction="column">
            <Grid item xs={6} mt={3} container direction="row">
              <p>Email: </p>
            </Grid>
            <Grid item xs={6} container direction="row">
              <p>{user.email}</p>
            </Grid>
          </Grid> */}
        </Grid>
        <p>{user.displayName}</p>
      </Box>
    </Container>
  );
};
