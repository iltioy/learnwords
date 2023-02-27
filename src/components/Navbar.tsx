import { StyledNavbar } from "./StyledNavbar.styled";
import { useNavigate } from "react-router";
import { NavigateFunction } from "react-router";

const Navbar = () => {
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
            </div>
        </StyledNavbar>
    );
};

export default Navbar;
