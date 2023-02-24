import { StyledInput } from "./StyledInput.styled";

interface Props {
    placeholder?: string;
    label?: string;
    forLabel?: string;
    height?: string;
    value: string | undefined;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    className?: string;
}

const Input: React.FC<Props> = ({
    placeholder,
    label,
    forLabel,
    height,
    value,
    setValue,
    className,
}) => {
    return (
        <StyledInput height={height}>
            <label htmlFor={forLabel}>{label}</label>
            <input
                type="text"
                id={forLabel}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={`${className ? className : ""}`}
            />
        </StyledInput>
    );
};

export default Input;
