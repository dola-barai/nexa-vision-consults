import Tilt from 'react-parallax-tilt';

const Posts = () => {
    return (
        <div>

            <div className='mx-auto bgImageP py-12'>
            <div className="text-center pb-12">
                <h3 className="text-3xl font-bold mb-3">OUR <span className="text-purple-600">POSTS</span></h3>
                <p className="md:text-xl text-slate-600">Forge lasting connections with customers. Our methods enhance <br /> engagement, loyalty, and customer-centric strategies.</p>
            </div>
                <div className='grid grid-cols-1 mx-16 md:grid-cols-3 gap-4 '>
                    {/* First */}
                    <div>
                        <div className="card w-96 lg:mx-8" onClick={() => window.my_modal_3.showModal()}>
                            <Tilt
                                className="tilt-img"
                                tiltMaxAngleX={20}
                                tiltMaxAngleY={20}
                                perspective={900}
                                scale={1}
                                transitionSpeed={200}
                                gyroscope={true}
                            >
                                <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                                    <div className="h-max w-48 md:w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                        <img
                                            src="https://img.freepik.com/free-photo/businessman-showing-changes-report_1098-3504.jpg?w=740&t=st=1692728366~exp=1692728966~hmac=a923a0b96b58c5fed171d6ccb9551441d45771b8167b49b2f0316fb38d1038cb"
                                            alt=""
                                            className="w-full object-cover object-top rounded-lg"
                                        />
                                    </div>
                                </div>

                            </Tilt>

                            <div className="card-body">
                                
                                <p className='md:text-xl font-semibold  hover:text-purple-500'>Navigating Business Challenges: Strategies for Effective Risk Management</p>
                            </div>
                        </div>

                        <dialog id="my_modal_3" className="modal">
                            <form method="dialog" className="modal-box bg-purple-700 max-w-2xl">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-orange-600">✕</button>
                                <div className=" lg:card-side bg-purple-700">
                                    <figure><img className='rounded-xl' src="https://img.freepik.com/free-photo/businessman-showing-changes-report_1098-3504.jpg?w=740&t=st=1692728366~exp=1692728966~hmac=a923a0b96b58c5fed171d6ccb9551441d45771b8167b49b2f0316fb38d1038cb" /></figure>
                                    <div className="card-body">
                                        <p className='text-xl font-semibold text-white'>Navigating Business Challenges: Strategies for Effective Risk Management</p>
                                        
                                        <div className=' py-3'>
                                            <h1 className='text-white text-xl font-semibold'>Details</h1>
                                            <h2 className='text-white text-justify py-3'> Explore the importance of risk management in business, along with practical tips and strategies to identify, assess, and mitigate risks for sustainable growth.</h2>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </dialog>
                    </div>
                    {/* Second */}
                    <div>
                        <div className="card w-96 lg:mx-8" onClick={() => window.my_modal_2.showModal()}>
                            <Tilt
                                className="tilt-img"
                                tiltMaxAngleX={20}
                                tiltMaxAngleY={20}
                                perspective={900}
                                scale={1}
                                transitionSpeed={200}
                                gyroscope={true}
                            >
                                <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                                    <div className="h-max w-48 md:w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                        <img
                                            src="https://img.freepik.com/premium-photo/business-team-is-discussing-business-issues_252847-33584.jpg?w=740"
                                            alt=""
                                            className="w-full object-cover object-top rounded-lg"
                                        />
                                    </div>
                                </div>
                            </Tilt>

                            <div className="card-body">
                                
                                <p className='md:text-xl font-semibold hover:text-purple-500'>Digital Transformation: Reshaping Industries and Enhancing Customer Experiences</p>
                            </div>
                        </div>
                        {/* You can open the modal using ID.showModal() method */}

                        <dialog id="my_modal_2" className="modal">
                            <form method="dialog" className="modal-box bg-purple-700 max-w-2xl">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-orange-600">✕</button>
                                <div className=" lg:card-side bg-purple-700">
                                    <figure><img className='rounded-xl' src="https://img.freepik.com/premium-photo/business-team-is-discussing-business-issues_252847-33584.jpg?w=740" alt="Album" /></figure>
                                    <div className="card-body">
                                        <p className='text-xl font-semibold text-white'>Digital Transformation: Reshaping Industries and Enhancing Customer Experiences</p>
                                        
                            
                                        <div className=' py-3'>
                                            <h1 className='text-white text-xl font-semibold'>Details</h1>
                                            <h2 className='text-white text-justify py-3'>Delve into the world of digital transformation, uncovering its impact on industries, customer expectations, and how businesses can successfully embrace digital advancements.</h2>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </dialog>
                    </div>
                    {/* Third */}
                    <div>
                        <div className="card w-96 lg:mx-8" onClick={() => window.my_modal_1.showModal()}>
                            <Tilt
                                className="tilt-img"
                                tiltMaxAngleX={20}
                                tiltMaxAngleY={20}
                                perspective={900}
                                scale={1}
                                transitionSpeed={200}
                                gyroscope={true}
                            >
                                <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                                    <div className="h-max w-48 md:w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                        <img
                                            src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15870.jpg?w=740&t=st=1692728401~exp=1692729001~hmac=f9d226c47f44083dcd7a6bf5570e9b82c5853f826ba74d82f04a7c2490948c29"
                                            alt=""
                                            className="w-full object-cover object-top rounded-lg"
                                        />
                                    </div>
                                </div>
                            </Tilt>

                            <div className="card-body">
                                
                                <p className='md:text-xl font-semibold  hover:text-purple-500'>Mastering the Art of Effective Leadership: Traits and Techniques for Success</p>
                            </div>
                        </div>
                        {/* You can open the modal using ID.showModal() method */}

                        <dialog id="my_modal_1" className="modal">
                            <form method="dialog" className="modal-box bg-purple-700 max-w-2xl">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-orange-600">✕</button>
                                <div className=" lg:card-side bg-purple-700">
                                    <figure><img className='rounded-xl' src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15870.jpg?w=740&t=st=1692728401~exp=1692729001~hmac=f9d226c47f44083dcd7a6bf5570e9b82c5853f826ba74d82f04a7c2490948c29" alt="Album" /></figure>
                                    <div className="card-body">
                                        <p className='text-xl font-semibold text-white'>Mastering the Art of Effective Leadership: Traits and Techniques for Success</p>

                                        <div className=' py-3'>
                                            <h1 className='text-white text-xl font-semibold'>Details</h1>
                                            <h2 className='text-white text-justify py-3'>Discover the essential qualities of a successful leader, along with proven leadership techniques and insights to inspire and guide teams towards excellence.</h2>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;