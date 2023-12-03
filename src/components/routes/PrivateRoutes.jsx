import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  if (loading) {
    return (
      <div className=" max-w-screen-xl mx-auto">
        <div className="flex flex-col m-8 rounded shadow-md w-full animate-pulse">
          <div className="h-48 rounded-t dark:bg-gray-700"></div>
          <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
            <div className="w-full h-6 rounded dark:bg-gray-700"></div>
            <div className="w-full h-6 rounded dark:bg-gray-700"></div>
            <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return (
    <>
      <Navigate to="/login"></Navigate>
    </>
  );
};

export default PrivateRoutes;
