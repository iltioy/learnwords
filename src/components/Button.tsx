import { StyledButton } from "./StyledButton.styled";

interface Props {
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    styles?: string;
    width?: string;
}

const Button: React.FC<Props> = ({ type, children, styles, width }) => {
    return (
        <StyledButton styles={styles} width={width}>
            <button type={type ? type : "button"}>{children}</button>
        </StyledButton>
    );
};

export default Button;
