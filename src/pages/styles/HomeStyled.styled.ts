import styled from "styled-components";

export const StyledHome = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    row-gap: 20px;
    align-items: center;
    align-items: start;
    max-width: 100%;

    @media (max-width: 920px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .outlineDiv {
        font-size: 24px;
        border: 1px solid grey;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
        cursor: pointer;
        background-color: ${({ theme }) => theme.addBackground};

        .settingsHeader {
            margin-left: 15px;
        }

        .settingsLink {
            text-decoration: none;
            outline: none;
            color: ${({ theme }) => theme.color};
            margin-left: 15px;
        }
    }

    .filters {
        grid-template-columns: 1fr 1fr;
    }

    .mainLearner {
        height: 100%;

        display: flex;
        align-items: center;

        @media (max-width: 1000px) {
            justify-content: center;
            width: 95%;
            margin: 0 auto;
        }
    }

    .mainButtons {
        height: 100%;

        @media (max-width: 1000px) {
            width: 95%;
            margin: 0 auto;
        }

        display: flex;
        justify-content: center;

        .mainButtonsInner {
            width: 100%;
            @media (max-width: 1000px) {
                max-width: 100%;
                width: 100%;
            }
        }
    }

    .mainLearnerOuter {
        border: 1px solid grey;
        border-radius: 5px;
        padding: 10px;
        width: 400px;
        max-width: 100%;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme.addBackground};

        .checkBoxRepeat {
            display: flex;
            margin-top: auto;
            margin-bottom: 10px;
            .checkBox {
                margin-top: 8px;
            }
        }
        .checkboxHeader {
            font-size: 20px;
        }

        .tipDiv {
            font-size: 16px;
        }

        .mainLearnerInner {
            display: flex;
            flex-direction: column;
            width: 350px;
            height: 375px;
            .headerDiv {
                font-size: 22px;
                margin-bottom: 7px;
                margin-bottom: 20px;
            }
            .wordDiv {
                font-size: 20px;
                word-wrap: break-word;
                max-height: 48px;
                overflow: hidden;
                margin-bottom: 7px;
            }

            .leranButton {
                margin-top: 10px;
                margin-left: -1px;
            }

            .learnSkipButton {
                button {
                    width: 110px;
                    margin-top: 10px;
                    margin-left: 10px;
                }
            }

            .correct {
                background-color: rgb(27, 190, 27);
                color: white;
                padding: 5px;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 70px;
                font-size: 18px;
                margin-top: 10px;
                margin-left: 1;
            }

            .incorrect {
                background-color: rgb(254, 46, 46);
                color: white;
                padding: 5px;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 75px;
                font-size: 18px;
                margin-top: 10px;
            }
        }
    }
`;
