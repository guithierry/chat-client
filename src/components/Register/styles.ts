import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--background-one);

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;

        color: white;
        margin-bottom: 35px;
    }
`;
