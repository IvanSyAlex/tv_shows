import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {selectEpisodeById, selectEpisodes} from "../store/episodes/selectors";
import Layout from "../components/Layout/Layout";
import InfoTvShow from "../components/InfoTvShow/InfoTvShow";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import styles from "./styles.module.css";


const PlayPage = () => {
    const {id} = useParams()
    const episode = useSelector((state: RootState) => selectEpisodeById(state, id));
    const episodes = useSelector(selectEpisodes);
    const numberEpisode = episodes.findIndex((obj) => {
        return obj.id === Number(id)
    });
    const nextIdEpisode = (episodes.length - 1) > numberEpisode ? episodes[numberEpisode + 1].id : episodes[numberEpisode].id;
    const previousIdEpisode = numberEpisode > 0 ? episodes[numberEpisode - 1].id : episodes[numberEpisode].id


    console.log("episode >>> ", episode);
    console.log("episodes >>> ", episodes);
    console.log("numberEpisode >>> ", numberEpisode);
    console.log("previousIdEpisode >>> ", previousIdEpisode);
    console.log("nextIdEpisode >>> ", nextIdEpisode);


    return (
        <Layout>
            <InfoTvShow {...episode}/>
            <div className={styles.playPage__player}>
                <VideoPlayer/>
            </div>
            <div className={styles.playPage__buttonPanel}>

                {numberEpisode > 0 &&
                    <Link
                        to={`/play-page/${previousIdEpisode}`}
                        className={styles.playPage__link}
                    >
                        <h3>Предыдущий эпизод</h3>
                    </Link>
                }
                {numberEpisode < (episodes.length - 1) &&
                    <Link
                        to={`/play-page/${nextIdEpisode}`}
                        className={styles.playPage__link}
                    >
                        <h3>Следующий эпизод</h3>
                    </Link>
                }
            </div>
        </Layout>
    );
}


export default PlayPage;