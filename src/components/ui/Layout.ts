import styled from "styled-components";

export const Layout = styled.div`
    height: 100vh;

    display: grid;
    grid-template-areas:
        "SIDEBAR CHANNELS CHAT CONNECTEDS"
        "SIDEBAR USERDATA CHAT CONNECTEDS";
    grid-template-rows: auto 70px;
    grid-template-columns: 70px 240px auto 240px;

    background-color: var(--background-two);
    color: white;
`;
