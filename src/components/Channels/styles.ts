import styled from "styled-components";
import { ChatAlt, Hashtag } from "../Icons";

export const Container = styled.div`
    grid-area: CHANNELS;

    padding: 10px 2px 0 8px;

    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--background-one);
        border-radius: 4px;
    }
`;

export const NavigationHeader = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;

    > h2 {
        text-transform: uppercase;
        font-size: 13px;
        margin-left: 5px;
    }
`;

export const NavigationBody = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 0;
`;

interface ChannelLinkProps {
    active?: boolean;
}

export const ChannelLink = styled.div<ChannelLinkProps>`
    display: flex;
    align-items: center;
    padding: 4px 6px;
    margin: 2px 0;
    border-radius: 3px;

    transition: 0.2s ease-in-out;
    cursor: pointer;

    background-color: ${(props) =>
        props.active ? "var(--background-four)" : ""};

    :hover {
        background-color: ${(props) =>
            !props.active && "var(--background-three)"};
    }

    > h2 {
        font-size: 16px;
        font-weight: 600;
        margin-left: 5px;
    }
`;

export const IconChatAlt = styled(ChatAlt)`
    width: 17px;
    height: 17px;
`;

export const IconHashtag = styled(Hashtag)`
    width: 16px;
    height: 16px;
`;
