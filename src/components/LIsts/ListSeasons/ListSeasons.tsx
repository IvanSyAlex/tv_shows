import {useDispatch, useSelector} from "react-redux";
import {selectSeasons} from "../../../store/seasons/selectors";
import React, {FC, useEffect} from "react";
import {loadSeasons} from "../../../store/seasons/thunks/load-seasons";
import {AppDispatch} from "../../../store/store";
import {ListSeasonsProps} from "./types";
import {ISeason} from "../../../store/seasons/types";
import styles from "./styles.module.css";
import {Link} from "react-router-dom";


const ListSeasons: FC<ListSeasonsProps> = ({id,name}) => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(loadSeasons(id));
    }, [id]);

    const seasons = useSelector(selectSeasons);

    return (
        <div className={styles.listSeasons}>
            {seasons.map((season: ISeason) =>
                <Link to={`/season-page/${season.id}/${name}`}
                    key={season.id}
                    className={styles.listSeasons__element}
                >
                    <h3>сезон</h3>
                    <span className={styles.listSeasons__number}>{season.number}</span>
                </Link>
            )}
        </div>
    );
}


export default ListSeasons;