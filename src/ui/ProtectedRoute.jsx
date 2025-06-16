import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const isAuthenticated = !!localStorage.getItem("token");
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      setCheckingAuth(false); // Allow rendering children
    }
  }, [navigate]);

  if (checkingAuth) return null; // or a loader/spinner

  return <>{children}</>;
}

export default ProtectedRoute;
