import styled from "styled-components";

export const Container = styled.div`
    padding: 0 15px;
    margin-right: 5px;
    height: calc(100vh - 50px - 70px);

    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--background-one);
        border-radius: 4px;
    }

    display: flex;
    flex-direction: column;

    > div {
        margin: 10px 0;

        display: flex;

        > img {
            width: 45px;
            height: 45px;

            border-radius: 50%;
            margin-right: 10px;
        }

        > div {
            display: flex;
            flex-direction: column;

            > h5 {
                font-size: 14px;

                > span:first-child {
                    line-height: 1.375rem;
                }

                > span:last-child {
                    margin-left: 10px;
                    font-weight: 200;
                    color: gray;
                }
            }

            > div {
                width: 700px;
                overflow-wrap: break-word;
            }
        }
    }
`;
