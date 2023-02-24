import styled from "styled-components";

interface Props {
    height?: string;
}

export const StyledInput = styled.div<Props>`
    width: 100%;

    input {
        display: block;
        margin: auto;
        width: 100%;
        height: ${({ height }) => (height ? height : "37px")};
        padding: 5px 15px;
        border-radius: 5px;
        box-sizing: border-box;
        border: 1px solid black;
        font-size: 16px;
        font-family: inherit;
        color: #212529;
        margin-top: 10px;
    }

    .underlined {
        font-size: 20px;
        border: none;
        border-bottom: 1px solid black;
        outline: none;
        border-radius: 0px;
        padding: 0px;
        height: 37px;
    }
`;
