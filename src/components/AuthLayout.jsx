// React imports
import { useState, useEffect } from "react"

// React Router DOM
import { useNavigate } from "react-router-dom";

// React Redux
import { useSelector } from "react-redux"

// Loader component
import Loader from "./Loader";

export default function Protected({ children, authentication = true }) {
    const [loading, setLoading] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    useEffect(() => {
        // Optimize it later
        if (authentication && authStatus !== authentication) {
            navigate("/login");
        } else if (!authentication && authStatus !== authentication) {
            navigate("/");
        }

        setLoading(false);
    }, [authStatus, authentication, navigate])

    return loading ? <Loader /> : { children };
}
