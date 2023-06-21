import {motion} from 'framer-motion';

import { SectionWrapper } from "../hoc";

const Hero = () => {
    return (
        <section className='relative w-full h-screen'>
            <div
                className={`absolute inset-0 top-[100px] max-w-7xl flex flex-row items-start justify-center`}>

                <div>
                    <h1 className="space-grotesk text-3xl">
                        Your next pokémon experience
                    </h1>
                    <button className="bg-gray-900 text-white my-5 p-3 text-xl rounded-full">
                        Choose your starter
                    </button>
                        <div className='grid grid-cols-3 gap-3 min-w-max'>
                            <a href="#fire" className="bg-red-600 text-white my-5 p-8 text-xl rounded-full">
                                
                            </a>
                            <a href="#grass" className="bg-green-500 text-white my-5 p-8 text-xl rounded-full">
                                
                            </a>
                            <a href="#water" className="bg-blue-600 text-white my-5 p-8 text-xl rounded-full">
                                
                            </a>
                        </div>
                </div>
            </div>

        </section>
    )
}

export default Hero