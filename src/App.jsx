// React Imports
import { useEffect, useState } from "react";

// React Redux imports
import { useDispatch } from "react-redux";

// Auth.js from Appwrite
import authService from "./appwrite/auth";

// Auth Slice Methods
import { login, logout } from "./store/authSlice";

// Icon library - Lucide React
import { Loader2 } from "lucide-react";

// Components
import { Header } from "./components";

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

  // Return loader if Loading State is true
  if (loading) return <div className="h-screen w-full bg-white flex items-center justify-center">
    <Loader2 className="text-primary size-8 md:size-10 animate-spin" />
  </div>

  return (
    <div>
      <Header />
    </div>
  )
}
