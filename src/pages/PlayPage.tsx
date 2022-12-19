import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {selectEpisodeById} from "../store/episodes/selectors";
import Layout from "../components/Layout/Layout";
import InfoTvShow from "../components/InfoTvShow/InfoTvShow";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import styles from "./styles.module.css";



const PlayPage = () => {
    const {id} = useParams()
    const episode = useSelector((state: RootState) => selectEpisodeById(state, id));
    console.log("episode >>> ", episode);
    return (
        <Layout>
            <InfoTvShow {...episode}/>
            <div className={styles.payPage__player}>
                <VideoPlayer />
            </div>
        </Layout>
    );
}


export default PlayPage;