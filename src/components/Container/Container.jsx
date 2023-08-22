import { useEffect } from 'react'
import c1 from '../../../public/1.png'
import c2 from '../../../public/2.png'
import c3 from '../../../public/3.png'
import c4 from '../../../public/4.png'
import c5 from '../../../public/5.png'
import c6 from '../../../public/6.png'
import 'aos/dist/aos.css'
import Aos from 'aos'

const Container = () => {
    useEffect( () => {
        Aos.init({duration: 2000})
    }, [])
    return (
        <div className="px-20 py-12">
            <div className="text-center pb-12">
                <h3 className="text-3xl font-bold mb-3">OUR <span className="text-purple-600">SERVICES</span></h3>
                <p className="md:text-xl text-slate-600">Forge lasting connections with customers. Our methods enhance <br /> engagement, loyalty, and customer-centric strategies.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-3">
                <div className="">
                    <div className="card card-side bg-white  rounded-none shadow-sm mb-3" data-aos="fade-right">
                        <figure><img className="h-24 w-32 m-3" src={c1} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Strategic Planning</h2>
                            <p>Crafting robust strategies that propel businesses forward.</p>
                        </div>
                    </div>
                    <div className="card card-side bg-white rounded-none shadow-sm mb-3" data-aos="fade-right">
                        <figure><img className="h-24 w-32 m-3" src={c2} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Market Research </h2>
                            <p>Uncover insights that lead to informed decisions and growth.</p>
                        </div>
                    </div>
                    <div className="card card-side bg-white rounded-none shadow-sm mb-3" data-aos="fade-right">
                        <figure><img className="h-24 w-32 m-3" src={c5} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Financial Advisory</h2>
                            <p>Navigating financial landscapes for sustainable success.</p>
                        </div>
                    </div>  
                </div>
                <div className="">
                    <div className="card card-side bg-white  rounded-none shadow-sm mb-3" data-aos="fade-left">
                        <figure><img className="h-24 w-32 m-3" src={c4} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Digital Transformation</h2>
                            <p>Embrace innovation with seamless digital transformations.</p>
                        </div>
                    </div>
                    <div className="card card-side bg-white rounded-none shadow-sm mb-3" data-aos="fade-left">
                        <figure><img className="h-24 w-32 m-3" src={c3} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Innovation Consulting</h2>
                            <p>Cultivating innovation ecosystems for breakthroughs.</p>
                        </div>
                    </div>
                    <div className="card card-side bg-white rounded-none shadow-sm mb-3" data-aos="fade-left">
                        <figure><img className="h-24 w-32 m-3" src={c6} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Leadership Development</h2>
                            <p>Nurturing leadership excellence for organizational growth.</p>
                        </div>
                    </div>  
                </div>
                <div className=''>
                    <img className='h-[470px]' src="https://img.freepik.com/premium-photo/group-business-people-analyzing-financial-documents-view-from-business-team-meeting_665183-4792.jpg?w=360" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Container;