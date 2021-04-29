export interface Channel {
    id: string;
    name: string;
    messages: Array<Message>;
    isDefault: boolean;
    isDirect: boolean;
}

export interface Message {
    user: ProfileObject;
    content: string;
    date: number | string;
}

export interface Connection {
    socket_id: string;
    user: ProfileObject;
    currentChannel: Channel;
}

export interface ProfileObject {
    googleId: string;
    email: string;
    name: string;
    imageUrl: string;
}

export interface TokenObject {
    id_token: string;
    expires_at: number;
    expires_in: number;
}

export interface GoogleResponse {
    tokenObj: TokenObject;
    profileObj: ProfileObject;
}
