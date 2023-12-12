import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./mainLayout.css";
export const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("./main", { replace: true });
    }
  }, [location.pathname, navigate]);

  // const token = localStorage.getItem("token");
  // if (!token) {
  //   return <Navigate to={"/auth"} replace />;
  // }

  return (
    <div className="main">
      <Outlet />
    </div>
  );
};
