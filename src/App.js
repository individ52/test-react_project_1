import AppRoutes from "./components/AppRoutes";
import Navbar from "./components/UI/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context";
import { useEffect, useState } from "react";
function App() {
  const [isAuth, setAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log("in App")
    if (localStorage.getItem("auth")) {
      setAuth(true);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setAuth,
      isLoading
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
