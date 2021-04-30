import { useCallback, useRef, useState, FormEvent, useEffect } from "react";
import {
    Container,
    NavigationHeader,
    NavigationBody,
    ChannelLink,
    IconChatAlt,
    IconHashtag,
    IconPlus,
    NewChannelModal,
} from "./styles";
import { Channel } from "../../types";
import useAuth from "../../hooks/useAuth";
import useSocket from "../../hooks/useSocket";
import { useToggle, useClickAway, useCss, useBoolean } from "react-use";

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

    const newChannelModalRef = useRef<HTMLDivElement>(null);
    const iconPlusRef = useRef<HTMLDivElement>(null);
    const [isNewChannelModalOpen, toggleNewChannelModal] = useToggle(false);

    useClickAway(iconPlusRef, (event: Event) => {
        if (
            isNewChannelModalOpen &&
            !newChannelModalRef.current?.contains(event.target as Node)
        ) {
            toggleNewChannelModal(false);
        }
    });

    const newChannelRef = useRef<HTMLInputElement>(null);
    const [newChannel, setNewChannel] = useState("");
    const [newChannelError, toggleNewChannelError] = useBoolean(false);

    const handleSubitNewChannel = useCallback(
        (event: FormEvent) => {
            event.preventDefault();

            if (!newChannel || newChannelError) {
                return;
            }

            socket.emit("new_channel", newChannel);

            setNewChannel("");
            toggleNewChannelModal();
        },
        [newChannel, newChannelError, socket, toggleNewChannelModal]
    );

    useEffect(() => {
        if (isNewChannelModalOpen) {
            newChannelRef.current?.focus();
        }

        const channelNames = channels.map((channel) => channel.name);

        if (channelNames.includes(newChannel)) {
            toggleNewChannelError(true);
        } else {
            toggleNewChannelError(false);
        }
    }, [channels, isNewChannelModalOpen, newChannel, toggleNewChannelError]);

    const errorClass = useCss({
        display: `${newChannelError ? "inline" : "none"}`,
        color: "var(--logout)",
    });

    return (
        <Container>
            <NavigationHeader>
                <div>
                    <IconChatAlt />
                    <h2>Channels</h2>
                </div>
                <div ref={iconPlusRef} onClick={toggleNewChannelModal}>
                    <IconPlus />
                </div>
            </NavigationHeader>

            <NewChannelModal
                ref={newChannelModalRef}
                open={isNewChannelModalOpen}
            >
                <form onSubmit={handleSubitNewChannel}>
                    <label
                        htmlFor="channel"
                        style={{
                            color: `${newChannelError ? "var(--logout)" : ""}`,
                        }}
                    >
                        channel name
                        {newChannelError && (
                            <span className={errorClass}>
                                {newChannel} already exists
                            </span>
                        )}
                    </label>
                    <input
                        ref={newChannelRef}
                        type="text"
                        name="channel"
                        id="channel"
                        value={newChannel}
                        onChange={(event) => setNewChannel(event.target.value)}
                        autoComplete="off"
                    />
                    <button
                        type="submit"
                        disabled={!newChannel || newChannelError}
                        className={
                            !newChannel || newChannelError
                                ? "button-disabled"
                                : ""
                        }
                    >
                        Create
                    </button>
                </form>
            </NewChannelModal>

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
