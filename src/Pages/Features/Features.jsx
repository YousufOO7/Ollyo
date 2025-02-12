import axios from "axios";
import { useEffect, useState } from "react";

const Features = () => {

    const [features, setFeatures] = useState([]);

    useEffect(() => {
        axios.get('./features.json')
            .then(res => {
                setFeatures(res.data)
            })
    }, [])

    return (
        <div className="my-10  w-full px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                {
                   features.map(feature => (
                    <div key={feature.id} className="relative border group p-[2px] rounded-xl h-[340px]">
                        {/* RGB Animated Border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                
                        {/* Content Container */}
                        <div className="relative bg-white rounded-xl p-6 h-full">
                            {/* Icon */}
                            <div className="text-3xl my-4">
                                <img src={feature.image} alt="" />
                            </div>
                
                            {/* Title */}
                            <h2 className="text-[22px] font-semibold text-black mt-10">
                                {feature.title}
                            </h2>
                
                            {/* Description */}
                            <p className="mt-6 text-black text-lg font-normal">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))
                
                }
            </div>
        </div>
    );
};

export default Features;