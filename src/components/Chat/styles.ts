import styled from "styled-components";
import { Hashtag } from "../Icons";

export const Container = styled.div`
    grid-area: CHAT;
    background-color: var(--background-three);
`;

export const ChannelInfo = styled.div`
    z-index: 2;

    padding: 10px;
    height: 50px;

    display: flex;
    align-items: center;

    box-shadow: 0 1px 0 rgba(4, 4, 5, 0.2), 0 1.5px 0 rgba(6, 6, 7, 0.05),
        0 2px 0 rgba(4, 4, 5, 0.05);
`;

export const IconHashtag = styled(Hashtag)`
    width: 30px;
    height: 30px;
`;

export const Form = styled.div`
    height: 70px;
    display: flex;

    > form {
        width: 100%;
        padding: 15px;

        > input {
            width: inherit;
            outline: none;
            border: none;
            border-radius: 8px;
            padding: 11px 15px;
            font-size: 17px;
            color: white;

            background-color: var(--background-input);
        }
    }
`;
