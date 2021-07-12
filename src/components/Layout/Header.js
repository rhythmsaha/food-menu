import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>Demo Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="A table full of Delicious food" />
            </div>
        </>
    );
};

export default Header;
