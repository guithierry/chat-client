import { useState, useEffect } from "react";
import useSocket from "../../hooks/useSocket";
import { Connection } from "../../types";
import { Container } from "./styles";

export default function Connecteds() {
    const [connecteds, setConnecteds] = useState<Array<Connection>>([]);
    const { socket } = useSocket();

    useEffect(() => {
        socket.on("connecteds", (props: Array<Connection>) => {
            setConnecteds(props);
        });
    }, [socket]);

    return (
        <Container>
            <h3>online - {connecteds.length}</h3>
            {connecteds?.map(({ user }: Connection) => (
                <div key={user?.googleId}>
                    <img src={user?.imageUrl} alt={user?.name} />
                    <span>{user?.name}</span>
                </div>
            ))}
        </Container>
    );
}
