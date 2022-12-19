import {Link} from "react-router-dom";
import styles from "./styles.module.css";

const Header = () => {
    return(
        <header className={styles.header}>
            <Link to="/"  className={styles.header__link}>Поиск</Link>
        </header>
    );
}

export default Header;