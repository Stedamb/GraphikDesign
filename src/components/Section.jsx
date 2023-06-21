import {motion} from 'framer-motion';
import { SectionWrapper } from "../hoc";

const Section = () => {
    return (
        <section className='relative w-full h-screen'>
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start justify-center bg-gray-900`}>

                <div className='bg-gray-900 rounded-full p-8'>
                    <a href='#cta' className="w-full h-full space-grotesk text-2xl text-white">
                        Entra nel metaverso pokèmon
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Section