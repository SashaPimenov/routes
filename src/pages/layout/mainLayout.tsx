import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./mainLayout.css";
import { useCookies } from "react-cookie";
export const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["SESSION1"]);

  useEffect(() => {
    if (!cookies.SESSION1) {
      navigate("/auth");
    } else {
      if (location.pathname === "/") {
        navigate("./main", { replace: true });
      }
    }
  }, [location.pathname, navigate]);

  return (
    <div className="main">
      <Outlet />
    </div>
  );
};
