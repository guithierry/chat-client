import { useCallback } from "react";
import {
    Container,
    NavigationHeader,
    NavigationBody,
    ChannelLink,
    IconChatAlt,
    IconHashtag,
} from "./styles";
import { Channel } from "../../types";
import useAuth from "../../hooks/useAuth";
import useSocket from "../../hooks/useSocket";

export default function Channels({ channels }: { channels: Array<Channel> }) {
    const { connection } = useAuth();
    const { socket } = useSocket();

    const connectChannel = useCallback(
        (channel_id: string) => {
            const old_channel_id = connection.currentChannel?.id;

            socket.emit("connect_channel", channel_id, old_channel_id);
        },
        [connection.currentChannel?.id, socket]
    );

    return (
        <Container>
            <NavigationHeader>
                <IconChatAlt />
                <h2>Channels</h2>
            </NavigationHeader>
            <NavigationBody>
                {channels.map((channel: Channel) => (
                    <ChannelLink
                        key={channel.id}
                        active={channel.id === connection.currentChannel?.id}
                        onClick={() => connectChannel(channel.id)}
                    >
                        <IconHashtag />
                        <h2>{channel.name}</h2>
                    </ChannelLink>
                ))}
            </NavigationBody>
        </Container>
    );
}
