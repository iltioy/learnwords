import styled from "styled-components";

export const StyledAdd = styled.div`
    width: 80%;
    margin: auto;

    .optionsDiv {
        width: 100%;
        margin-top: 24px;
    }

    button {
        background-color: ${({ theme }) => theme.addBackground};
        color: ${({ theme }) => theme.color};
        border: 1px solid grey;
    }

    .options {
        display: grid;
        gap: 20px;
        grid-template-columns: 1fr 1fr;
        margin-top: 20px;
    }
    .options .option {
        font-size: 20px;
        display: flex;
        padding: 20px;
        border: 1px solid rgb(122, 121, 121);
        border-radius: 5px;
    }
    @media (max-width: 1000px) {
        .options .option {
            font-size: 16px;
        }
    } /*# sourceMappingURL=edit.css.map */
`;
