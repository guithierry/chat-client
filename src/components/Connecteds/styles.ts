import styled from "styled-components";

export const Container = styled.div`
    grid-area: CONNECTEDS;
    padding: 10px;

    background-color: var(--background-one);

    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--background-two);
        border-radius: 4px;
    }

    > h3 {
        font-size: 13px;
        color: gray;

        text-transform: uppercase;
    }

    > div {
        margin: 8px 0;
        display: flex;
        align-items: center;

        > img {
            margin-right: 5px;
            width: 40px;
            height: 40px;

            border-radius: 50%;
        }

        > span {
            width: 165px;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;
