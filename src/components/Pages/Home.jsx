import Carousel from "../Carousel/Carousel";
import Container from "../Container/Container";
import FaQ from "../FaQ/FaQ";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <Container></Container>
            <FaQ></FaQ>
            <Footer></Footer>
        </div>
    );
};

export default Home;