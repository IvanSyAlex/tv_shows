import Header from "../Header/Header";
import {FC} from "react";
import styles from "./styles.module.css";


const Layout: FC<any>= ({children}) => {
    return (
        <div className={styles.layout}>
            <h1 className={styles.layout__title}>Поиск с использованием TVMAZE API </h1>
            <Header/>
            <div>{children}</div>
        </div>
    );
}


export default Layout;