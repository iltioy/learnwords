import { StyledButton } from "./StyledButton.styled";

interface Props {
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    styles?: string;
    width?: string;
    bg?: string;
    color?: string;
    className?: string;
}

const Button: React.FC<Props> = ({
    type,
    children,
    styles,
    width,
    bg,
    color,
    className,
}) => {
    return (
        <StyledButton
            styles={styles}
            width={width}
            bg={bg}
            color={color}
            className={`${className ? className : ""}`}
        >
            <button type={type ? type : "button"}>{children}</button>
        </StyledButton>
    );
};

export default Button;
