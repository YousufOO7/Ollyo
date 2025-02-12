
const Ollyo = () => {
    return (
        <div className="mt-20 mb-10 w-full">
            <div className="container flex md:flex-row flex-col  justify-between">
                <div className="name md:w-1/2">
                    <h1 className="text-5xl lg:text-6xl mb-10 md:mb-0 px-8">Who is Ollyo</h1>
                </div>
                <div className="text md:w-1/2">
                    <p className="text-xl lg:text-3xl lg:leading-[3vw] px-5 md:px-0">
                        We transform web solutions with our innovative and future-proof software products, empowering businesses to thrive and scale in the ever-evolving digital landscape.
                    </p>
                </div>
            </div>


            <div
                className="hero h-screen md:h-[600px] my-10 bg-fixed"
                style={{
                    backgroundImage: `url('https://ollyo.com/wp-content/uploads/2024/05/home-group-meeting-1536x1024.webp')`,
                }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="text-white">
                    <div className='max-w-[1000px]'>
                        <section className='flex gap-5 px-4'>
                            <div className='flex-1'>
                                <img src="https://ollyo.com/wp-content/uploads/2024/04/home-office-lobby-1536x825.webp" className='h-32 md:h-64 w-full' alt="" />
                            </div>
                            <div className='flex-1'>
                                <h3 className="mb-1 md:text-2xl font-bold">March 20, 2023</h3>
                                <h3 className="mb-1 md:text-2xl font-bold">why is Ollyo?</h3>
                                <p className="mb-3 text-xs md:text-sm">
                                We bring together a team of experts with the latest technologies to build high-quality software solutions for businesses.
                                </p>
                                <button className=" py-2 px-5 rounded-lg border-0 border-b-2 border-white uppercase">Read more</button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Ollyo;