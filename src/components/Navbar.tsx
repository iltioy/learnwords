import { StyledNavbar } from "./StyledNavbar.styled";
import { useNavigate } from "react-router";
import { NavigateFunction } from "react-router";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { Theme } from "../defaultTheme";
import { themes } from "../defaultTheme";

interface Props {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
    setIsDownloadModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const windowInnetWidth = window.innerWidth;

const Navbar: React.FC<Props> = ({ theme, setTheme, setIsDownloadModal }) => {
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
                    onClick={() => setIsDownloadModal(true)}
                >
                    Загрузить
                </div>

                <div
                    className={`item ${windowInnetWidth < 920 ? "hidden" : ""}`}
                    style={{ borderLeft: "none" }}
                    onClick={() => navigate("/edit")}
                >
                    Редактировать
                </div>
                <div
                    className={`item ${windowInnetWidth < 920 ? "hidden" : ""}`}
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
                                localStorage.setItem("theme", "dark");
                            }}
                        />
                    </div>
                ) : (
                    <div className="switchIconDiv">
                        <BsFillSunFill
                            className="switchIcon"
                            onClick={() => {
                                setTheme(themes.light);
                                localStorage.setItem("theme", "light");
                            }}
                        />
                    </div>
                )}
            </div>
        </StyledNavbar>
    );
};

export default Navbar;
