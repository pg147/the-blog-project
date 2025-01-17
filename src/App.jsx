// React Imports
import { useEffect, useState } from "react"

// React Redux imports
import { useDispatch } from "react-redux";

// Auth.js from Appwrite
import authService from "./appwrite/auth";

// Auth Slice Methods
import { login, logout } from "./store/authSlice";

// Icon library - Lucide React
import { Loader2 } from "lucide-react";

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
  }, []);

  if (loading) return <div className="h-screen w-full bg-white flex items-center justify-center">
    <Loader2 className="text-primary size-6 animate-spin" />
  </div>

  return (
    <div>
      <h1 className="font-medium">Hi from The Blog Project !</h1>
    </div>
  )
}
