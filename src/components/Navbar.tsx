import { StyledNavbar } from "./StyledNavbar.styled";
import { useNavigate } from "react-router";
import { NavigateFunction } from "react-router";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { Theme } from "../defaultTheme";
import { themes } from "../defaultTheme";

interface Props {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const Navbar: React.FC<Props> = ({ theme, setTheme }) => {
    const navigate: NavigateFunction = useNavigate();
    return (
        <StyledNavbar>
            <div className="navbar">
                <div className="logo noselect" onClick={() => navigate("/")}>
                    Learner
                </div>
                <div
                    className="item"
                    style={{ marginLeft: "auto" }}
                    onClick={() => navigate("/edit")}
                >
                    Редактировать
                </div>
                <div
                    className="item"
                    style={{ borderLeft: "none", borderRight: "none" }}
                    onClick={() => navigate("/add")}
                >
                    Добавить
                </div>

                {theme.name === "light" ? (
                    <div className="switchIconDiv">
                        <BsFillMoonFill
                            className="switchIcon"
                            onClick={() => {
                                setTheme(themes.dark);
                            }}
                        />
                    </div>
                ) : (
                    <div className="switchIconDiv">
                        <BsFillSunFill
                            className="switchIcon"
                            onClick={() => {
                                setTheme(themes.light);
                            }}
                        />
                    </div>
                )}
            </div>
        </StyledNavbar>
    );
};

export default Navbar;
