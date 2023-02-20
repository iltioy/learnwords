import styled from "styled-components";

interface Props {
    bg?: string;
    height?: string;
    styles?: string;
}

export const StyledDropdown = styled.div<Props>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .selectedItem {
        cursor: pointer;
        width: 100%;
    }
    .items {
        position: absolute;
        background-color: ${({ bg }) => (bg ? bg : "#eff1f1")};
        width: 100%;
        top: 100%;
        left: 0;
        z-index: 101;
        .item {
            display: flex;
            justify-content: center;
            align-items: center;
            height: ${({ height }) => (height ? height : "50px")};
            border: 1px solid grey;
            overflow: hidden;
            cursor: pointer;
        }
    }
`;
