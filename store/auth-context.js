import React from "react";

const AuthContext = React.createContext({
  Token: () => {},
  settingToken: (value) => {},
  removeToken: () => {},
  setCaseId: (value) => {},
  Case: () => {},
});

export const AuthContextProvider = (props) => {
  const Token = () => {
    var bearerToken = localStorage.getItem("Token");
    return bearerToken;
  };

  const removeToken = () => {
    localStorage.removeItem("isLoggedIn");
  };

  const setBearerToken = (value) => {
    localStorage.setItem("Token", value);
  };
  const setCaseId = (value) => {
    localStorage.setItem("Case", value);
  };

  const Case = () => {
    var CaseId = localStorage.getItem("Case");
    return CaseId;
  };

  return (
    <AuthContext.Provider
      value={{
        Token: Token,
        removeToken: removeToken,
        settingToken: setBearerToken,
        setCaseId: setCaseId,
        Case: Case,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
