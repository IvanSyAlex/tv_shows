import React, {FC} from "react";
import styles from './styles.module.css';
import {IItemSearchList} from "./types";


const ItemSearchList: FC<IItemSearchList> = ({name, image,seriesId,handlerOfStateParameters}) => {
    const handleTranslate = () => {
        handlerOfStateParameters(name, seriesId);
    };
    
    return(
        <div className={styles.itemSearchList} onClick={handleTranslate}>
            <div className={styles.itemSearchList__divImg}>
                <img className={styles.itemSearchList__img} src={image} alt={name}/>
            </div>
            <div className={styles.itemSearchList__title}>{name}</div>
        </div>
    );
}

export default ItemSearchList;