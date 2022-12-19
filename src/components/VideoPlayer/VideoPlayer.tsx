import ReactPlayer from "react-player";
import styles from "./styles.module.css";


const VideoPlayer = () => {
    return(
        <div className={styles.videoPlayer}>
            <ReactPlayer
                className='react-player'
                url = 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
            />
        </div>
    );
}

export default VideoPlayer;