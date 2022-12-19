import {IEpisode} from "../../../store/episodes/types";
import {FC} from "react";
import styles from "./styles.module.css"
import {Link} from "react-router-dom";


const ItemListEpisodes: FC<IEpisode> = (episode) => {
    return(
        <Link to={`/play-page/${episode.id}`} className={styles.itemListEpisodes}>
            <img
                key={episode.id}
                src={episode?.image?.medium}
                className={styles.itemListEpisodes__img}
            />
            <span className={styles.itemListEpisodes__name}>{episode.number}. {episode.name}</span>
        </Link>
    );
}

export default ItemListEpisodes;