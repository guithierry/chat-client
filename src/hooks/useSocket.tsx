import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

export default function useSocket() {
    const context = useContext(SocketContext);

    if (!context) {
        throw new Error("useSocket must be used with SocketContext.");
    }

    const { socket } = context;

    return { socket };
}
