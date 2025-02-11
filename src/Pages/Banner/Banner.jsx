

const Banner = () => {
    return (
        <div className="px-5 bg-[#EDEDED] h-full">
            <div className="flex md:flex-row flex-col-reverse justify-between w-full">
                {/* text */}
                <div className="md:w-1/2 bg-[#F4F4F4] pl-5">
                    <h1 className="text-xl md:text-3xl lg:text-5xl font-bold px-5 pt-10 lg:leading-[5vw]">Creating The Future of Software Technology</h1>

                    <div className="border-t-4 mt-5 lg:mt-[250px] md:h-[280px] overflow-y-hidden flex">
                        <div className="w-1/2 border-r-4">
                            <h3 className="pb-10 text-lg lg:text-2xl pt-8">
                                We are a software company facilitating businesses to establish an online presence and thrive.
                            </h3>

                            <div className="border-t-4 py-5">
                                <button className="rounded-full bg-blue-500 text-white px-8 py-2 ">About Us</button>
                            </div>
                        </div>

                        <div className="w-1/2 flex items-center pt-40 lg:pt-52 pl-10 lg:pl-20">
                            <p>See open <br />Position</p>
                        </div>
                    </div>

                </div>


                <div className="md:w-1/2 relative group overflow-hidden">
                    {/* Image */}
                    <img
                        src="https://ollyo.com/wp-content/uploads/2024/09/hero-image.webp"
                        alt="office-image"
                        className="w-full h-auto transition-all duration-1000 ease-in-out group-hover:blur-sm"
                    />

                    {/* Overlay Text */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-1000 text-white text-2xl font-bold bg-black/20">
                        Hello
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;