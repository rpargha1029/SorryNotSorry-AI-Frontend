import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      setUser({
        authenticated: true,
      });
    } else {
      setUser(null);
    }

    setLoading(false);
  }, [token]);

  // ==========================
  // Login
  // ==========================

  const login = (jwt) => {
    localStorage.setItem("token", jwt);

    setToken(jwt);

    setUser({
      authenticated: true,
    });
  };

  // ==========================
  // Logout
  // ==========================

  const logout = () => {
    localStorage.removeItem("token");

    setToken(null);

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ==========================
// Custom Hook
// ==========================

export function useAuth() {
  return useContext(AuthContext);
}