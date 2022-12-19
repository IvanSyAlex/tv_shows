import {ITvShow} from "../../store/tvShows/types";
import React, {FC} from "react";
import styles from "./styles.module.css";


const NO_DESCRIPTION = "WE ARE VERY SORRY, NO DESCRIPTION ...";

const InfoTvShow: FC<ITvShow> = ({name, summary, image}) => {
    return(
        <div className={styles.infoTvShow}>
            <h1 className={styles.infoTvShow__name}>{name}</h1>
            <div className={styles.infoTvShow__info}>
                <img
                    className={styles.infoTvShow__img}
                    src={image?.medium}
                />
                <p className={styles.infoTvShow__summary}>{summary ? summary: NO_DESCRIPTION}</p>
                <img alt="" />
            </div>
        </div>
    );
}


export default InfoTvShow;