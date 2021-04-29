import { useState, useMemo } from "react";
import useAuth from "../hooks/useAuth";
import io from "socket.io-client";
import { SocketContext } from "../context/SocketContext";
import { Layout } from "./ui/Layout";
import Channels from "./Channels";
import UserData from "./UserData";
import Chat from "./Chat";
import Connecteds from "./Connecteds";
import { Connection, Channel } from "../types";

export default function Dashboard() {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL as string;

    const {
        responseObject: { profileObj },
    } = useAuth();
    const { handleConnection } = useAuth();
    const [channels, setChannels] = useState<Array<Channel>>([]);

    const socket = useMemo(() => {
        return io(SERVER_URL, {
            query: {
                profileObject: JSON.stringify(profileObj),
            },
        });
    }, [SERVER_URL, profileObj]);

    socket.on("channels", (channels: Array<Channel>) => {
        setChannels(channels);
    });

    socket.on("connection", (connection: Connection) => {
        handleConnection(connection);
    });

    return (
        <SocketContext.Provider value={{ socket }}>
            <Layout>
                <div
                    style={{
                        gridArea: "SIDEBAR",
                        backgroundColor: "var(--background-one)",
                    }}
                />
                <Channels channels={channels} />
                <UserData />
                <Chat />
                <Connecteds />
            </Layout>
        </SocketContext.Provider>
    );
}
