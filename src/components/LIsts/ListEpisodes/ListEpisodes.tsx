import {FC, useEffect, useState} from "react";
import {ListEpisodesProps} from "./types";
import { useSelector} from "react-redux";
import {selectEpisodes} from "../../../store/episodes/selectors";
import styles from "./styles.module.css";
import ItemListEpisodes from "../../Items/ItemListEpisodes/ItemListEpisodes";


const ListEpisodes: FC<ListEpisodesProps> = ({idSeason}) => {
    const QUANTITY_SLIDE = 5;
    const [count, setCount] = useState<number>(0);
    const episodes = useSelector(selectEpisodes);

    const forward = () => {
        if ((episodes.length - count) < QUANTITY_SLIDE)return;
        setCount(count + 1);
    };

    const back = () => {
        if (!count) return;
        setCount(count - 1);
    };
    
    return (
        <div className={styles.listEpisodes}>
            <div
                className={styles.listEpisodes__arrowLeft}
                onClick={() => back()}
            ></div>
            <div className={styles.listEpisodes__list}>
                {episodes.slice(count, count + QUANTITY_SLIDE).map((episode) =>
                    <ItemListEpisodes key={episode.id} {...episode} />
                )}
            </div>
            <div
                className={styles.listEpisodes__arrowRight}
                onClick={() => forward()}
            ></div>
        </div>

    );
}


export default ListEpisodes;