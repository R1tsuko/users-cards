import { lazy } from "react";
import { Navigate } from "react-router";
import { Route, Routes } from "react-router-dom";

const ProfilePage = lazy(() => import("./profile"));
const UsersPage = lazy(() => import("./users"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/users" element={<UsersPage />} />
      <Route path="/profile/:userId" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/users" />} />
    </Routes>
  );
};
