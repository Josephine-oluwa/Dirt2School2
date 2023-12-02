import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const AdminRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const admin = useSelector((state: any) => state.admin);
  return <div>{admin ? <div>{children}</div> : <Navigate to="/signin" />}</div>;
};

export default AdminRoute;
