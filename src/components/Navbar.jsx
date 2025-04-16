import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const { role, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Token Based Routinhg
          </Typography>
          <div>
            <Link>
              <Button variant="text" color="inherit">
                Home
              </Button>
            </Link>
            {role ? (
              <>
                {role === "admin" && (
                  <Link to="/admin">
                    <Button variant="text" color="inherit">
                      Admin
                    </Button>
                  </Link>
                )}
                <Link to="/user">
                  <Button variant="text" color="inherit">
                    User
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link to='/login'>
                <Button variant="text" color="inherit">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
