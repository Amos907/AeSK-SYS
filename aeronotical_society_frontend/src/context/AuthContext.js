import { createContext, useState } from "react";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [authToken, setToken] = useState();
  let [user, setUser] = useState();

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:8000/member/details", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    });

    if (response.ok) {
      const details = await response.json();
      setToken(details.access);
      setUser(details.user);
    }
  };

  let contextData = {
    loginUser: loginUser,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
