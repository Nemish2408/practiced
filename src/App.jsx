import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedLayout from "./layout/ProtectedLayout";
import PublicLayout from "./layout/PublicLayout";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";

const App = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<ProtectedLayout />}>
        <Route
          path="/admin"
          element={
            <ProtectedRoutes reqRole="admin">
              <AdminDashboard />
            </ProtectedRoutes>
          }
        />

        <Route 
          path="/user"
          element={
            <ProtectedRoutes reqRole="user">
              <UserDashboard />
            </ProtectedRoutes>
          }  
        />
      </Route>
    </Routes>
  );
};

export default App;
