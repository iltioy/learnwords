import styled from "styled-components";

interface Props {
    styles?: string;
    width?: string;
    bg?: string;
    color?: string;
}

export const StyledButton = styled.div<Props>`
    button {
        ${({ styles }) => styles};
        width: ${({ width }) => (width ? width : "100px")};
        color: ${({ color }) => (color ? color : null)};
        height: 32px;
        outline: none;
        border: none;
        background-color: #eff1f1;
        font-size: 16px;
        padding: 4px 8px;
        border: 2px solid #d5d5d5;
        background: ${({ bg }) => (bg ? bg : null)};
        border-radius: 5px;
        cursor: pointer;
    }
`;
