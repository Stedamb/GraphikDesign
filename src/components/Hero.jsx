import {motion} from 'framer-motion';

import { SectionWrapper } from "../hoc";

const Hero = () => {
    return (
        <section className='relative w-full h-screen'>
            <div className={`absolute inset-0 top-[80px] max-w-7xl flex flex-row items-start justify-center`}>
                <div>
                    {/* <h1 className="space-grotesk text-3xl">
                        Your next Pokémon experience
                    </h1>
                    <div className="bg-gray-900 text-white my-5 p-3 text-md rounded-full">
                        Choose your starter
                    </div>
                    <div className='grid grid-cols-3 gap-3 min-w-max'>
                        <a href="#fire" className="bg-red-600 text-white my-5 p-2 text-xl rounded-full">
                        <img width="50" height="50" src="https://img.icons8.com/ios/50/circled-up-right-2.png" alt="circled-up-right-2"/>
                        </a>
                        <a href="#grass" className="bg-green-500 text-white my-5 p-2 text-xl rounded-full">
                        <img width="50" height="50" src="https://img.icons8.com/ios/50/circled-up-right-2.png" alt="circled-up-right-2"/>
                        </a>
                        <a href="#water" className="bg-blue-600 text-white my-5 p-2 text-xl rounded-full">
                        <img width="50" height="50" src="https://img.icons8.com/ios/50/circled-up-right-2.png" alt="circled-up-right-2"/>
                        </a>
                    </div> */}
                </div>
            </div>

        </section>
    )
}

export default Hero