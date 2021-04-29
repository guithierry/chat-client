import styled from "styled-components";
import { DotsVertical, X } from "../Icons";

export const Container = styled.div`
    grid-area: USERDATA;

    background-color: var(--background-five);

    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const UserPhoto = styled.img`
    width: 40px;
    height: 40px;

    border-radius: 50%;
    background-color: #fff;
`;

export const Data = styled.div`
    width: 125px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Settings = styled.div`
    padding: 3px;
    border-radius: 3px;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    :hover {
        background-color: var(--background-two);
    }
`;

export const IconSettings = styled(DotsVertical)`
    width: 25px;
    height: 25px;
`;

interface UserDataModalProps {
    open?: boolean;
}

export const UserDataModal = styled.div<UserDataModalProps>`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    /* opacity: 0.9; */
    background-color: black;

    display: ${(props) => (props.open ? "flex" : "none")};
    align-items: center;
    justify-content: center;

    > div {
        position: relative;

        padding: 15px;
        background-color: var(--background-one);
        border-radius: 5px;

        width: 500px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        > img {
            margin: auto;
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }
    }
`;

export const CloseWrapper = styled.div`
    position: absolute;

    top: 5px;
    right: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
        text-transform: uppercase;
        font-size: 10px;
        font-weight: bold;
    }
`;

export const CloseButton = styled.button`
    outline: none;
    border: none;
    background: none;
`;

export const IconClose = styled(X)`
    width: 20px;
    height: 20px;

    color: white;

    transition: 0.2s;
    cursor: pointer;

    :hover {
        color: gray;
    }
`;

export const DataModal = styled.div`
    width: 100%;
    margin-top: 30px;
    padding: 5px 10px;
    background-color: var(--background-two);
    border-radius: 3px;

    > div {
        margin: 5px 0;

        > h5 {
            text-transform: uppercase;
            font-size: 12px;
        }
    }
`;

export const Logout = styled.div`
    display: flex;
    justify-content: center;
    width: 150px;

    margin-top: 10px;
    padding: 5px 10px;
    background-color: var(--background-two);
    border-radius: 3px;

    transition: 0.2s ease-in-out;
    cursor: pointer;

    :hover {
        background-color: rgba(240, 71, 71, 0.1);
    }

    > span {
        font-weight: bold;
        color: var(--logout);
    }
`;
