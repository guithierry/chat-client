import { useCallback, useEffect } from "react";
import { useToggle } from "react-use";
import useAuth from "../../hooks/useAuth";
import useSocket from "../../hooks/useSocket";
import { GoogleResponse } from "../../types";
import {
    Container,
    UserPhoto,
    Data,
    Settings,
    IconSettings,
    UserDataModal,
    CloseWrapper,
    CloseButton,
    IconClose,
    DataModal,
    Logout,
} from "./styles";

export default function UserData() {
    const {
        connection: { user },
        handleResponseObject,
    } = useAuth();

    const { socket } = useSocket();

    const [open, toggle] = useToggle(false);

    const handleLogout = useCallback(() => {
        handleResponseObject({} as GoogleResponse);

        socket.disconnect();
    }, [handleResponseObject, socket]);

    useEffect(() => {
        function handleEscPress(event: any) {
            if (event.keyCode === 27) {
                toggle();
            }
        }
        if (open) {
            document.addEventListener("keydown", handleEscPress);
        }

        return () => {
            document.removeEventListener("keydown", handleEscPress);
        };
    }, [open, toggle]);

    return (
        <Container>
            <UserPhoto src={user?.imageUrl} alt={`${user?.name}`} />
            <Data>
                <strong>{user?.name}</strong>
            </Data>
            <Settings onClick={() => toggle()}>
                <IconSettings />
            </Settings>
            <UserDataModal open={open}>
                <div>
                    <CloseWrapper>
                        <CloseButton onClick={() => toggle()}>
                            <IconClose />
                        </CloseButton>
                        <span>esc</span>
                    </CloseWrapper>
                    <img src={user?.imageUrl} alt={user?.name} />

                    <DataModal>
                        <div>
                            <h5>name</h5>
                            <span>{user?.name}</span>
                        </div>
                        <div>
                            <h5>email</h5>
                            <span>{user?.email}</span>
                        </div>
                    </DataModal>

                    <Logout onClick={handleLogout}>
                        <span>Logout</span>
                    </Logout>
                </div>
            </UserDataModal>
        </Container>
    );
}
