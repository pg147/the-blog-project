// React Imports
import { useEffect, useState } from "react";

// React Redux imports
import { useDispatch } from "react-redux";

// Outlet
import { Outlet } from "react-router-dom";

// Auth.js from Appwrite
import authService from "./appwrite/auth";

// Auth Slice Methods
import { login, logout } from "./store/authSlice";

// Components
import { Header } from "./components";

// Loader
import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // Verifying if user is logged in
    authService.getUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else dispatch(logout());
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [dispatch]);

  // Return loader if Loading State is true
  if (loading) return <Loader />

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
