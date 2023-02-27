import styled from "styled-components";

export const StyledNavbar = styled.div`
    height: 45px;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #e6e6e6;
    margin-bottom: 20px;
    .navbar {
        max-height: 100%;
        width: 100%;
        max-width: 1000px;
        display: flex;

        .item {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;

            padding: 0 10px;
            border-left: 1px solid grey;
            border-right: 1px solid grey;
            transition: 0.5s;
            cursor: pointer;
            &:hover {
                background-color: #d6d6d6;
            }
        }
    }

    .logo {
        max-height: 100%;
        font-size: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        @media (max-width: 1000px) {
            margin-left: 10px;
        }
    }
`;
