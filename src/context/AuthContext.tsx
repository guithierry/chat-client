import React, { createContext, useState, useCallback } from "react";
import { GoogleResponse, Connection } from "../types";

interface AuthProviders {
    responseObject: GoogleResponse;
    handleResponseObject(props: GoogleResponse): void;
    connection: Connection;
    handleConnection(props: Connection): void;
}

export const AuthContext = createContext<AuthProviders | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [responseObject, setResponseObject] = useState<GoogleResponse>(
        {} as GoogleResponse
    );

    const handleResponseObject = useCallback((props: GoogleResponse) => {
        setResponseObject(props);
    }, []);

    const [connection, setConnection] = useState({} as Connection);

    const handleConnection = useCallback((props: Connection) => {
        setConnection(props);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                responseObject,
                handleResponseObject,
                connection,
                handleConnection,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
