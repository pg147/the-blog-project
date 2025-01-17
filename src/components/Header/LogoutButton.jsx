// React Redux imports
import { useDispatch } from "react-redux";

// Auth Store function
import { logout } from "../../store/authSlice.js";

export default function LogoutButton() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <button
            onClick={handleLogout}
            className={`h-fit w-fit px-4 py-2 md:px-6 md:py-2.5 border border-primary text-primary hover:bg-primary/10 font-medium rounded-lg transition-colors ease-in-out duration-300`}
        >
            Log out
        </button>
    )
}
