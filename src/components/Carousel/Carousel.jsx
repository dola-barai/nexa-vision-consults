import Aos from "aos";
import { useEffect } from "react";

const Carousel = () => {
    useEffect( () => {
        Aos.init({duration: 2000})
    }, [])
    return (
        <div className='carousel'>
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/businessman-showing-changes-report_1098-3504.jpg?w=740&t=st=1692728366~exp=1692728966~hmac=a923a0b96b58c5fed171d6ccb9551441d45771b8167b49b2f0316fb38d1038cb")` }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="hero-content text-left text-neutral-content">
                        <div className="" data-aos="fade-left">
                            <h1 className="mb-5 md:text-7xl font-semibold font-serif">Navigating <span className="text-purple-600">Business</span> <br /> Success Together</h1>
                            <p className="md:text-xl">Unlock your business true potential with tailored strategies and expert guidance.</p>
                            <div className="mt-4">
                                <button className="btn bg-white text-purple-600 hover:bg-purple-600 hover:text-white me-3 hover:border-purple-600">Read More</button>
                                <button className="btn bg-purple-600 text-white hover:text-purple-600  border-purple-600">Register Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle bg-transparent">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-transparent">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/business-team-is-discussing-business-issues_252847-33584.jpg?w=740')` }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="" data-aos="fade-left">
                            <h1 className="mb-5 md:text-7xl font-semibold font-serif">Unlocking Your <br /> <span className="text-purple-600">Business</span> Potential</h1>
                            <p className="md:text-xl">Partner with us to navigate the complexities of modern business and achieve remarkable success.</p>
                            <div className="mt-4">
                                <button className="btn bg-white text-purple-600 hover:bg-purple-600 hover:text-white me-3 hover:border-purple-600">Read More</button>
                                <button className="btn bg-purple-600 text-white hover:text-purple-600  border-purple-600">Register Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-transparent">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-transparent">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15870.jpg?w=740&t=st=1692728401~exp=1692729001~hmac=f9d226c47f44083dcd7a6bf5570e9b82c5853f826ba74d82f04a7c2490948c29")` }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="hero-content text-left text-neutral-content">
                        <div className="" data-aos="fade-left">
                            <h1 className="mb-5 md:text-7xl font-semibold font-serif">Your Success <br /> Our <span className="text-purple-600">Expertise</span></h1>
                            <p className="md:text-xl">Align your vision with our expertise to drive your business towards excellence and innovation.</p>
                            <div className="mt-4">
                                <button className="btn bg-white text-purple-600 hover:bg-purple-600 hover:text-white me-3 hover:border-purple-600">Read More</button>
                                <button className="btn bg-purple-600 text-white hover:text-purple-600  border-purple-600">Register Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-transparent">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-transparent">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;