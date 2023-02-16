import styled from "styled-components";

export const StyledDropdown = styled.div`
    position: relative;

    .selectedItem {
        cursor: pointer;
    }
    .items {
        position: absolute;
        background-color: #eff1f1;
        width: 100%;
        top: 100%;
        z-index: 101;
        .item {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            border: 1px solid grey;
            overflow: hidden;
            cursor: pointer;
        }
    }
`;
