import Marquee from "react-fast-marquee";
import Carousel from "../Carousel/Carousel";
import Container from "../Container/Container";
import FaQ from "../FaQ/FaQ";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Posts from "./Posts";
import VideoPlayer from "./VideoPlayer";

const Home = () => {
    return (
        <div>
            <Marquee className="text-white py-5 text-xl bg-purple-900">
            Experience Expert Guidance and Insights with Our Free Consultancy Services. Empower Your Success Today!
            </Marquee>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <Container></Container>
            <VideoPlayer></VideoPlayer>
            <Posts></Posts>
            <FaQ></FaQ>
            <Footer></Footer>
        </div>
    );
};

export default Home;