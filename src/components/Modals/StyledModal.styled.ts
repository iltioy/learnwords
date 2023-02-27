import styled from "styled-components";

export const StyledModal = styled.div`
    position: fixed;
    height: 400px;
    width: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    z-index: 104;
    border: 1px solid #bdbdbd;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.addBackground};

    .option {
        width: 100%;
        border: 1px solid ${({ theme }) => theme.border};
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.addBackground};
        text-align: center;
    }

    .content {
        display: flex;

        flex-direction: column;
        gap: 8px;
        width: 300px;
        height: 350px;
    }

    .ddLabel {
        margin-bottom: 8px;
    }

    .saveButton {
        margin-top: auto;
        button {
            background-color: ${({ theme }) => theme.add2Background};
            color: ${({ theme }) => theme.color};
            border: 1px solid grey;
        }
    }

    .checkBoxDiv {
        display: flex;
        align-items: center;
    }

    #checkBox {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15px;
        height: 15px;
        margin-top: 6px;
    }

    .content {
        display: flex;

        flex-direction: column;
        gap: 8px;
        width: 300px;
        height: 350px;
    }

    .categoryEdit {
        font-size: 20px;
        margin-top: 7px;
    }

    .createCategoryButton {
        margin-top: 5px;
    }
`;
