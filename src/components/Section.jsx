import {motion} from 'framer-motion';
import { SectionWrapper } from "../hoc";

const Section = () => {
    return (
        <section className='relative w-full h-screen'>
            <div
                className={`absolute inset-0 top-[100px] max-w-7xl flex flex-row items-start justify-center bg-gray-900`}>

                <div className='bg-gray-900 rounded-full pt-8 pb-3 px-8'>
                    <a href='#cta' className="w-full h-full space-grotesk text-xl text-white">
                        Entra nel metaverso pokèmon
                        <img className='mx-auto mt-3' width="35" height="35" src="https://img.icons8.com/ios/50/FFFFFF/circled-up-right.png" alt="circled-up-right"/>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Section