import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useFileHandler, useInputValidation } from "6pp";
import { usernameValidator } from "../utils/validators";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation("");

  const avatar = useFileHandler("single");

  const handleSignUp = (e) => {
    e.preventDefault();
  };
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <Container
      component={"main"}
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <Grid container>
        {/* Left Side Image with App Name */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4350176/pexels-photo-4350176.jpeg?auto=compress&cs=tinysrgb&w=600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            Chat-window
          </Typography>
        </Grid>
        {/* Right Side Form */}
        <Grid
          item
          xs={12}
          md={6} // Half width on medium screens and up
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f7f7f7", // Light background for form
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              maxWidth: 400, // Limit the form width for better readability
              backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background
            }}
          >
            {isLogin ? (
              <>
                <Typography variant="h5">Login</Typography>
                <form
                  style={{
                    width: "100%",
                    marginTop: "1rem",
                  }}
                  onSubmit={handleLogin}
                >
                  <TextField
                    required
                    fullWidth
                    label="Username"
                    margin="normal"
                    variant="outlined"
                    value={username.value}
                    onChange={username.changeHandler}
                  />
                  <TextField
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    value={password.value}
                    onChange={password.changeHandler}
                  />
                  <Button
                    sx={{
                      mt: 2,
                      mb: 1,
                      height: "3rem",
                      fontWeight: "bold",
                    }}
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    Login
                  </Button>
                  <Typography textAlign={"center"}>OR</Typography>
                  <Button
                    variant="text"
                    color="secondary"
                    fullWidth
                    onClick={toggleLogin}
                  >
                    SIGN UP INSTEAD
                  </Button>
                </form>
              </>
            ) : (
              <>
                <Typography variant="h5" align="center" gutterBottom>
                  Sign Up
                </Typography>
                <form
                  style={{
                    width: "100%",
                    marginTop: "1rem",
                  }}
                  onSubmit={handleSignUp}
                >
                  <Stack
                    position={"relative"}
                    width={"8rem"}
                    margin={"auto"}
                    sx={{ mb: 0 }}
                  >
                    <Avatar
                      sx={{
                        width: "7rem",
                        height: "7rem",
                        objectFit: "contain",
                      }}
                      src={avatar.preview}
                    />

                    <IconButton
                      sx={{
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                        color: "white",
                        bgcolor: "rgba(0,0,0,0.5)",
                        ":hover": {
                          bgcolor: "rgba(0,0,0,0.7)",
                        },
                      }}
                      component="label"
                    >
                      <>
                        <CameraAltIcon />
                        <VisuallyHiddenInput
                          type="file"
                          onChange={avatar.changeHandler}
                        />
                      </>
                    </IconButton>
                  </Stack>
                  {avatar.error && (
                    <Typography
                      m={"1rem"}
                      width={"fit-content"}
                      display={"block"}
                      color="error"
                      variant="caption"
                    >
                      {avatar.error}
                    </Typography>
                  )}
                  <TextField
                    required
                    fullWidth
                    label="Name"
                    size="small"
                    margin="normal"
                    variant="outlined"
                    value={name.value}
                    onChange={name.changeHandler}
                  />
                  <TextField
                    required
                    fullWidth
                    label="Bio"
                    margin="normal"
                    size="small"
                    variant="outlined"
                    value={bio.value}
                    onChange={bio.changeHandler}
                  />
                  <TextField
                    required
                    fullWidth
                    label="Username"
                    margin="normal"
                    size="small"
                    variant="outlined"
                    value={username.value}
                    onChange={username.changeHandler}
                  />

                  {username.error && (
                    <Typography color="error" variant="caption">
                      {username.error}
                    </Typography>
                  )}
                  <TextField
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    size="small"
                    margin="normal"
                    variant="outlined"
                    value={password.value}
                    onChange={password.changeHandler}
                  />

                  <Button
                    sx={{
                      mt: 1,
                      mb: 1,
                      height: "2rem",
                      fontWeight: "bold",
                    }}
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    Sign Up
                  </Button>
                  <Typography textAlign={"center"}>OR</Typography>
                  <Button
                    variant="text"
                    color="secondary"
                    fullWidth
                    onClick={toggleLogin}
                  >
                    LOGIN INSTEAD
                  </Button>
                </form>
              </>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
