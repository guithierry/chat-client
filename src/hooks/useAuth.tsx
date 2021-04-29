import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used with AuthContext.");
    }

    const {
        responseObject,
        handleResponseObject,
        connection,
        handleConnection,
    } = context;

    return {
        responseObject,
        handleResponseObject,
        connection,
        handleConnection,
    };
}
