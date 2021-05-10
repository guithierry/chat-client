import styled from "styled-components";
import { ChatAlt, Hashtag, Plus } from "../Icons";

export const Container = styled.div`
    grid-area: CHANNELS;

    /* padding: 10px 2px 0 8px; */
`;

export const NavigationHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-top: 15px; */

    padding: 14px 14px;
    padding-left: 8px;

    box-shadow: 0 1px 0 rgba(4, 4, 5, 0.2), 0 1.5px 0 rgba(6, 6, 7, 0.05),
        0 2px 0 rgba(4, 4, 5, 0.05);

    > div {
        display: flex;
        align-items: center;

        > h2 {
            text-transform: uppercase;
            font-size: 13px;
            margin-left: 5px;
        }
    }

    > div:last-child {
        cursor: pointer;
    }

    position: relative;
`;

export const IconPlus = styled(Plus)`
    width: 22px;
    height: 22px;
`;

interface NewChannelModalProps {
    open?: boolean;
}

export const NewChannelModal = styled.div<NewChannelModalProps>`
    position: absolute;
    top: 40px;
    left: 280px;

    display: ${(props) => (props.open ? "inline" : "none")};

    background-color: var(--background-two);
    border-radius: 3px;
    border: 1px solid transparent;
    border-color: var(--background-one);

    width: 300px;

    /* width: auto; */
    padding: 15px 10px;

    > form {
        display: flex;
        flex-direction: column;

        > label {
            text-transform: uppercase;
            font-size: 11px;
            font-weight: bold;
            margin-bottom: 5px;

            > span {
                /* text-transform: lowercase; */
                font-size: 12px;
                font-weight: 300;
                font-style: italic;

                :before {
                    content: " - ";
                }
            }
        }

        > input,
        button {
            outline: none;
            border: none;
            border-radius: 3px;
        }

        > input {
            padding: 5px;
            background-color: var(--background-input);
            font-size: 15px;
            color: white;
        }

        > button {
            padding: 3px;
            margin-top: 7px;
            background-color: #3ca374;

            font-size: 14px;
            font-weight: bold;
            color: white;

            transition: 0.2s ease-in-out;
            cursor: pointer;
            :hover {
                opacity: 0.9;
            }
        }

        .button-disabled {
            opacity: 0.5;
            cursor: not-allowed;

            :hover {
                opacity: 0.5;
            }
        }
    }
`;

export const NavigationBody = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 0;
    padding-left: 8px;
    padding-right: 2px;

    height: calc(100vh - 70px - 60px);

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
