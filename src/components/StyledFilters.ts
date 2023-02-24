import styled from "styled-components";

interface Props {
    areFiltersShowed: boolean;
}

export const StyledFilters = styled.div<Props>`
    display: ${({ areFiltersShowed }) =>
        areFiltersShowed ? "grid" : "none"} !important;

    border: 1px solid grey;
    margin-top: 5px;
    border-radius: 5px;
    padding: 15px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px;
    row-gap: 30px;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
    }

    .filter {
        width: 200px;
        margin-left: 10px;

        @media (max-width: 600px) {
            width: 170px;
        }

        .filterHeader {
            font-size: 25px;
            margin-bottom: 7px;

            @media (max-width: 600px) {
                font-size: 18px;
            }
        }

        .filterOption {
            border: 1px solid grey;
            display: flex;
            text-align: center;
            height: 30px;
            border-radius: 5px;
        }

        .filterAdd {
            cursor: pointer;
            display: flex;
            align-items: center;
            color: blue;
            margin-top: 4px;

            &:hover {
                text-decoration: underline;
            }
        }

        .checkBoxFilter {
            display: flex;
            max-height: 100px;
            margin-bottom: 0;
            justify-content: center;
            align-items: flex-start;

            .checkBox {
                height: 20px;
                margin-top: 9px;

                @media (max-width: 600px) {
                    margin-top: 3px;
                }
            }
        }
    }
`;
