import video from '../../../src/assets/video.mp4'

const VideoPlayer = () => {
    return (
        <div className='md:mx-80 mt-20'>
            <video controls width="1000" height="360">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;