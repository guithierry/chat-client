import { FormEvent, useState, useCallback } from "react";
import { Container, ChannelInfo, IconHashtag, Form } from "./styles";
import useAuth from "../../hooks/useAuth";
import useSocket from "../../hooks/useSocket";
import Messages from "./Messages";
import { Message } from "../../types";

export default function Chat() {
    const [message, setMessage] = useState("");

    const { connection } = useAuth();
    const { socket } = useSocket();

    const handleMessage = useCallback(
        (event: FormEvent) => {
            event.preventDefault();

            if (!message) {
                return;
            }

            const channel_id = connection.currentChannel?.id;

            const body_message: Message = {
                user: connection?.user,
                content: message,
                date: Date.now(),
            };

            socket.emit("new_message", channel_id, body_message);

            setMessage("");
        },
        [message, connection.currentChannel?.id, connection?.user, socket]
    );

    return (
        <Container>
            <ChannelInfo>
                <IconHashtag />
                <h3>{connection.currentChannel?.name}</h3>
            </ChannelInfo>

            <Messages />

            <Form>
                <form onSubmit={handleMessage}>
                    <input
                        type="text"
                        name="message"
                        id="message"
                        placeholder={`Message #${connection.currentChannel?.name}`}
                        autoComplete="off"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                    />
                </form>
            </Form>
        </Container>
    );
}
