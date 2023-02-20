import { useEffect, useRef, useState } from "react";
import { StyledDropdown } from "./StyledDropdown.styled";

const items = ["Первая", "Вторая", "Третья"];

interface Props {
    className: string;
    placeholder: string;
    selectedItem: string | null;
    setSelectedItem:
        | React.Dispatch<React.SetStateAction<string | null>>
        | React.Dispatch<React.SetStateAction<string>>;
    bg?: string;
    height?: string;
    styles?: string;
}

const Dropdown: React.FC<Props> = ({
    className,
    placeholder,
    selectedItem,
    setSelectedItem,
    bg,
    height,
    styles,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    // const [selectedItem, setSelectedItem] = useState<string>(placeholder);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handler = (e: any) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(e.target as HTMLDivElement)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handler);

        return () => {
            document.removeEventListener("click", handler);
        };
    });

    return (
        <StyledDropdown
            className={`${className} dropdown`}
            ref={dropdownRef}
            bg={bg}
            height={height}
        >
            <div className="selectedItem" onClick={() => setIsOpen(!isOpen)}>
                {selectedItem ? selectedItem : placeholder}
            </div>
            {isOpen && (
                <div className="items">
                    {items.map((item: string, index: number) => {
                        return (
                            <div
                                className="item"
                                onClick={() => {
                                    setIsOpen(false);
                                    setSelectedItem(item);
                                }}
                                key={index}
                            >
                                {item}
                            </div>
                        );
                    })}
                </div>
            )}
        </StyledDropdown>
    );
};

export default Dropdown;
