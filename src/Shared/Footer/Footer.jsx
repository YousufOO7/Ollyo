
const Footer = () => {
    return (
        <div>
            <footer className="bg-white text-black py-10 border-t">
                <div className="px-6">
                    <div className="flex md:flex-row flex-col justify-between">
                        <div>
                            {/* Logo */}
                            <div className="">
                                <h2 className="text-2xl font-semibold mb-5 md:mb-0">Ollyo</h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:flex gap-16 lg:gap-32">
                            {/* Products */}
                            <div className="">
                                <h3 className="text-lg font-semibold mb-4">Products</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:underline">JoomShaper</a></li>
                                    <li><a href="#" className="hover:underline">Themeum</a></li>
                                    <li><a href="#" className="hover:underline">Droip</a></li>
                                    <li><a href="#" className="hover:underline">IcoFont</a></li>
                                </ul>
                            </div>

                            {/* Company */}
                            <div className="">
                                <h3 className="text-lg font-semibold mb-4">Company</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:underline">About</a></li>
                                    <li><a href="#" className="hover:underline">Careers</a></li>
                                    <li><a href="#" className="hover:underline">Contact</a></li>
                                </ul>
                            </div>

                            {/* Resources */}
                            <div className="">
                                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:underline">Blog</a></li>
                                    <li><a href="#" className="hover:underline">Press</a></li>
                                    <li><a href="#" className="hover:underline">Brand</a></li>
                                </ul>
                            </div>

                            {/* Connect */}
                            <div className="">
                                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:underline">Facebook</a></li>
                                    <li><a href="#" className="hover:underline">LinkedIn</a></li>
                                    <li><a href="#" className="hover:underline">X (Twitter)</a></li>
                                    <li><a href="#" className="hover:underline">YouTube</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border-t-[1px] my-5"></div>
                    <div className="md:flex justify-between items-center">
                        <div className="copyright">
                            © 2025 Ollyo. All rights reserved.
                        </div>

                        <div className="md:flex items-center gap-2">
                            <p>Privacy Policy <span className="ml-2">|</span></p>
                            <p>Terms of Service</p>
                           <div>
                            <img src="https://i.ibb.co.com/LzbQmSTZ/Screenshot-2025-02-12-184106.png" alt="" />
                           </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;