import styled from "styled-components";

interface Props {
    height?: string;
}

export const StyledModal = styled.div<Props>`
    position: fixed;
    height: ${({ height }) => (height ? height : "400px")};
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
        overflow: auto;
    }

    .downloadContent {
        width: 325px;
        border-radius: 5px;
        background-color: #1a1919;
    }

    .content::-webkit-scrollbar {
        display: none;
    }

    .preshow {
        width: 100%;
    }

    .saveDownloadButtons {
        display: flex;
        flex-direction: row;
        width: 325px;
        padding: 20px 0;

        .cancelButton {
            margin-left: 30px;
        }
    }

    .dowanloadTitle {
        margin: 10px 0;
        display: flex;
        align-items: center;
        font-size: 20px;
        cursor: pointer;

        font-weight: 500;
    }

    .listItems {
        padding: 0 10px;
    }

    .downloadItem {
        display: flex;
        flex-direction: row;
        width: 100%;
        overflow: hidden;
        padding: 3px 0 3px 5px;

        .firstWord {
            width: 50%;
            overflow: hidden;
        }

        .secondWord {
            margin-left: 10px;
            width: 45%;
            overflow: hidden;
        }
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

    .categoryEdit {
        font-size: 20px;
        font-weight: 100;
        margin-top: 7px;
    }

    .createCategoryButton {
        margin-top: 5px;
    }

    .downloadButtons {
        margin-top: auto;
        margin-bottom: 30px;
        display: flex;
        flex-direction: row;

        .getButton {
            margin-left: 40px;
        }
    }

    .downloadInput {
        margin-top: 15px;
    }
`;
