import React, { createContext, useContext, useEffect,useState } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [role, setRole] = useState(null);
    const tokens = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3NDQxNzUzODksImV4cCI6MTc3NTc5Nzc4OSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20ifQ.477iHLZ7nUPFyQZ4eiFSlhzXmRyzV4gRhZIbgxUDs1k";

    const login = (role) => {
        localStorage.setItem("tokens", JSON.stringify(tokens));
        localStorage.setItem("role", JSON.stringify(role));
        setRole(role);
    };

    const logout = () => {
        localStorage.removeItem("tokens");
        localStorage.removeItem("role");
        setRole(null);
    }

        useEffect(() => {
            const storedTokens = localStorage.getItem("tokens");
            const storedRole = localStorage.getItem("role");
            console.log(storedTokens);
            if (storedTokens && storedRole) {
                // setTokens(JSON.parse(storedTokens));
                setRole(JSON.parse(storedRole));
            }
        }, [role])
    return (
        <AuthContext.Provider value={{ role, tokens, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);