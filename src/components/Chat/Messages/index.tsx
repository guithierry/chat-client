import { useState, useEffect, useRef } from "react";
import useAuth from "../../../hooks/useAuth";
import useSocket from "../../../hooks/useSocket";
import { Message } from "../../../types";
import { Container } from "./styles";
import { format, getDate } from "date-fns";

export default function Messages() {
    const [messages, setMessages] = useState<Array<Message>>([]);
    const { socket } = useSocket();
    const {
        connection: { currentChannel },
    } = useAuth();

    useEffect(() => {
        socket.on("channel_message", (props: Array<Message>) => {
            setMessages(props);
        });
    }, [socket]);

    useEffect(() => {
        socket.on("new_message", (props: Array<Message>) => {
            setMessages(props);
        });
    }, [currentChannel?.id, messages, socket]);

    const messagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ref = messagesRef.current;

        if (ref) {
            ref.scrollTop = ref.scrollHeight;
        }
    }, [messagesRef, messages]);

    return (
        <Container ref={messagesRef}>
            {console.log(messages)}
            {messages.map(({ id, user, date, content }) => {
                const today = new Date(Date.now()).getDate();
                const dateDay = getDate(new Date(date));

                let dateFormated = format(new Date(date), "dd-MM-yyyy");

                if (dateDay === today) {
                    dateFormated = `Today at ${format(
                        new Date(date),
                        "k:m a"
                    )}`;
                }

                return (
                    <div key={id}>
                        <img src={`${user.imageUrl}`} alt={user.name} />
                        <div>
                            <h5>
                                <span>{user.name}</span>
                                <span>{dateFormated}</span>
                            </h5>
                            <div>{content}</div>
                        </div>
                    </div>
                );
            })}
        </Container>
    );
}
