import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppData } from "../context/AppContext"

const ProtectedRoute = () => {
    const { isAuth, user, loading } = useAppData();
    const loaction = useLocation();

    if (loading) return null;

    if (!isAuth) {
        return <Navigate to={"/login"} replace />;

    }
    const hasRole = user?.role !== undefined && user?.role !== null;

    if (!hasRole && loaction.pathname !== "/select-role") {
        return <Navigate to={"/select-role"} replace />
    }
    if (hasRole && loaction.pathname === "/select-role") {
        return <Navigate to={"/"} replace />
    }
    return <Outlet />

}
export default ProtectedRoute;