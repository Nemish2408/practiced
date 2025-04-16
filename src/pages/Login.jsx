import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext'
import { Box, Button, Card, CardContent, Container, Divider, FormGroup, TextField, Typography } from '@mui/material'

const Login = () => {

  const {role, login} = useAuth()
  const navigate = useNavigate();

  const [data, setData] = useState({email: "", password: ""});

  useEffect(() => {
    console.log(role);
    if (role) {
      navigate(role === "admin" ? "/admin" : "/user");
    }
  }, [role, navigate]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (role) => {
    login(role)
  }

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography>
            Login
          </Typography>

          <form onSubmit={(e) => e.preventDefault()}>
          <FormGroup>
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                type="email"
                value={data.email}
                onChange={handleInputChange}
                margin="normal"
                fullWidth
                required
              />
              <TextField
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                value={data.password}
                onChange={handleInputChange}
                margin="normal"
                fullWidth
                required
              />

              <Box sx={{ mt: 3 }}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  fullWidth
                  size="large"
                  onClick={() => handleLogin("admin")}
                  sx={{ mb: 2 }}
                >
                  Login as Admin
                </Button>

                <Divider sx={{ my: 2 }}>OR</Divider>

                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  fullWidth
                  size="large"
                  onClick={() => handleLogin("user")}
                >
                Login as User
                </Button>
              </Box>
            </FormGroup>
          </form>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Login
