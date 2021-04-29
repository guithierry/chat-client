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

    box-shadow: 0 2px 1px -1px var(--background-one);
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
