const FaQ = () => {
    return (
        <div className="mx-20 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <img className="" src="https://www.nexleo.consulting/wp-content/uploads/2021/09/consulting.gif" alt="" />
                </div>
                <div>
                     <p className="text-yellow-600 italic mb-3">FAQs</p>
                     <h3 className="text-3xl font-bold mb-3">FREQUENTLY ASKED <span className="text-purple-600">QUESTIONS</span></h3>
                    <div tabIndex={0} className="collapse collapse-arrow">
                        <div className="collapse-title text-left font-medium">
                        What industries do you specialize in?
                        </div>
                        <div className="collapse-content ">
                            <p className="text-left">We have expertise in a wide range of industries, including technology, finance, healthcare, and more. Our consultants are well-versed in various sectors, allowing us to provide tailored solutions to meet your specific industry needs.</p>
                        </div>
                    </div>
                    <hr />
                    <div tabIndex={0} className="collapse collapse-arrow">
                        <div className="collapse-title text-left font-medium">
                        How can your services benefit my business?
                        </div>
                        <div className="collapse-content">
                            <p className="text-left">Our services are designed to provide your business with a competitive edge. By leveraging our strategic insights and industry knowledge, you can expect improved operational efficiency, increased profitability, and sustainable growth. We collaborate closely with you to ensure our solutions align with your business goals.</p>
                        </div>
                    </div>
                    <hr />
                    <div tabIndex={0} className="collapse collapse-arrow">
                        <div className="collapse-title text-left font-medium">
                        DDo you offer customized consulting packages?
                        </div>
                        <div className="collapse-content">
                            <p className="text-left">Absolutely. We understand that every business has unique challenges and goals. Our consulting services are flexible and can be tailored to address your specific needs. We work closely with you to design solutions that fit your organization size, industry, and objectives.</p>
                        </div>
                    </div>
                    <hr />
                    <div tabIndex={0} className="collapse collapse-arrow">
                        <div className="collapse-title text-left font-medium">
                        What is the consulting process like?
                        </div>
                        <div className="collapse-content">
                            <p className="text-left">Our consulting process follows a well-defined path to ensure effective outcomes. It involves comprehensive analysis, collaborative strategy formulation, meticulous implementation, and continuous monitoring. We believe in a transparent and communicative approach to keep you informed at every stage.</p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default FaQ;