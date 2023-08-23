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
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="sm:px-32 md:px-24 py-20">
            <div className="text-center pb-12">
                <h3 className="text-3xl font-bold mb-3">OUR <span className="text-purple-600">SERVICES</span></h3>
                <p className="md:text-xl text-slate-600">Forge lasting connections with customers. Our methods enhance <br /> engagement, loyalty, and customer-centric strategies.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div className="card w-56 bg-base-100 shadow-xl rounded-t-full rounded-b-full hover:bg-purple-600 hover:text-white ">
                    <figure className="px-8 pt-8">
                        <img src={c1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title mb-2">Strategic Planning</h2>
                        <p className='my-2'>Crafting robust strategies that propel businesses forward. Uncover insights that lead to informed decisions and growth.</p>
                        <div className="card-actions mt-3">
                            <button className="btn btn-circle bg-slate-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg></button>
                        </div>
                    </div>
                </div>
                <div className="card w-56 bg-base-100 shadow-xl rounded-t-full rounded-b-full hover:bg-purple-600 hover:text-white">
                    <figure className="px-8 pt-8">
                        <img src={c2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title mb-2">Market Research</h2>
                        <p className='my-2'>Uncover insights that lead to informed decisions and growth. Navigating financial landscapes for sustainable success.</p>
                        <div className="card-actions mt-3">
                            <button className="btn btn-circle bg-slate-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg></button>
                        </div>
                    </div>
                </div>
                <div className="card w-56 bg-base-100 shadow-xl rounded-t-full rounded-b-full hover:bg-purple-600 hover:text-white">
                    <figure className="px-8 pt-8">
                        <img src={c3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title mb-2">Financial Advisory</h2>
                        <p className='my-2'>Navigating financial landscapes for sustainable success. Uncover insights that lead to informed decisions and growth.</p>
                        <div className="card-actions mt-3">
                            <button className="btn btn-circle bg-slate-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg></button>
                        </div>
                    </div>
                </div>
                <div className="card w-56 bg-base-100 shadow-xl rounded-t-full rounded-b-full hover:bg-purple-600 hover:text-white">
                    <figure className="px-8 pt-8">
                        <img src={c4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title mb-2">Digital Transformation</h2>
                        <p className='my-2'>Embrace innovation with seamless digital transformations. Uncover insights that lead to informed decisions and growth.</p>
                        <div className="card-actions mt-3">
                            <button className="btn btn-circle bg-slate-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg></button>
                        </div>
                    </div>
                </div>
                <div className="card w-56 bg-base-100 shadow-xl rounded-t-full rounded-b-full hover:bg-purple-600 hover:text-white">
                    <figure className="px-8 pt-8">
                        <img src={c5} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title mb-2">Innovation Consulting</h2>
                        <p className='my-2'>Cultivating innovation ecosystems for breakthroughs. Embrace innovation with seamless digital transformations.</p>
                        <div className="card-actions mt-3">
                            <button className="btn btn-circle bg-slate-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg></button>
                        </div>
                    </div>
                </div>
                <div className="card w-56 bg-base-100 shadow-xl rounded-t-full rounded-b-full hover:bg-purple-600 hover:text-white">
                    <figure className="px-8 pt-8">
                        <img src={c1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title mb-2">Buisness Strategy</h2>
                        <p className='my-2'>Embrace innovation with seamless digital transformations. Uncover insights that lead to informed decisions and growth.</p>
                        <div className="card-actions mt-3">
                            <button className="btn btn-circle bg-slate-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg></button>
                        </div>
                    </div>
                </div>
                <div className="card w-56 bg-base-100 shadow-xl rounded-t-full rounded-b-full hover:bg-purple-600 hover:text-white">
                    <figure className="px-8 pt-8">
                        <img src={c6} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title mb-2">online Consultancy</h2>
                        <p className='my-2'>Embrace innovation with seamless digital transformations. Uncover insights that lead to informed decisions and growth.</p>
                        <div className="card-actions mt-3">
                            <button className="btn btn-circle bg-slate-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg></button>
                        </div>
                    </div>
                </div>
                <div className="card w-56 bg-base-100 shadow-xl rounded-t-full rounded-b-full hover:bg-purple-600 hover:text-white">
                    <figure className="px-8 pt-8">
                        <img src={c1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title mb-2">Leadership Development</h2>
                        <p className='my-2'>Embrace innovation with seamless digital transformations. Uncover insights that lead to informed decisions and growth.</p>
                        <div className="card-actions mt-3">
                            <button className="btn btn-circle bg-slate-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container;