import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "User Admin",
    email: "admin@gmail.com",
    auth: true,
  });

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const login = ({ email, password }) => {
    if (email === "admin@gmail.com" && password === "123456") {
      setUser({
        name: "User Admin",
        email: "admin@gmail.com",
        auth: true,
      });
      navigate("/");
    } else {
      setErrors({
        message: "Verifique sus datos",
      });
    }
  };

  const logout = async () => {
    setUser(null);
  };

  const getUser = () => {
    if (user?.auth) {
      setUser({
        name: "User Admin",
        email: "admin@gmail.com",
        auth: true,
      });
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  return (
    <AuthContext.Provider value={{ user, getUser, errors, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
