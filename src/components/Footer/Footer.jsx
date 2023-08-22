import logo from '../../../public/logo1.png'
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer font-semibold class-center text-white bg-gradient-to-r from-indigo-300 to-purple-600  p-10">
                    <div className="mx-auto">
                        <img className="h-20 rounded-full mt-10" src={logo} />
                    </div>
                    <div className="mx-auto">
                        <span className="footer-title">Portfolio</span>
                        <a className="link link-hover">Dola Barai</a>
                        <a className="link link-hover">dolabarai43@gmail.com</a>
                        <a className="link link-hover">Contact: +8801725641804</a>
                        <a className="link link-hover">linkedin.com/in/dola3652/</a>
                        <a className="link link-hover">BSc in CSE at Daffodil International University </a>
                    </div>
                    <div className="mx-auto">
                        <span className="footer-title">Skills</span>
                        <a className="link link-hover">HTML, CSS, JavaScript</a>
                        <a className="link link-hover">Bootstrap, Tailwind CSS</a>
                        <a className="link link-hover">React.js, Express.js, Node.js</a>
                        <a className="link link-hover">Stripe, AirTable, MaterialUI</a>
                        <a className="link link-hover">Firebase, MongoDB, Vercel, Netlify</a>
                    </div>
                    <div className="mx-auto">
                        <span className="footer-title">Projects</span>
                        <a className="link link-hover">https://jingle-mis-project.web.app/</a>
                        <a className="link link-hover">https://twinkle-kids-doll-store.web.app/</a>
                        <a className="link link-hover">https://best-vegans-food.web.app/</a>
                        <a className="link link-hover">https://nexawave-3652.netlify.app/</a>
                        <a className="link link-hover">https://cozy-concha-4e2ba7.netlify.app/</a>
                    </div>

                </div>
                <hr />
                <div>
                    <div className="footer footer-center p-4 bg-gradient-to-r from-indigo-300 to-purple-600 text-base-content">
                        <p className="text-xl text-white font-bold">© Nexa Vision Consults 2023</p>
                    </div>
                </div>
            </footer>
            
        </div>
    );
};

export default Footer;