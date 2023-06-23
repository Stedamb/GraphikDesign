import {motion} from 'framer-motion';
import { SectionWrapper } from "../hoc";

const Section = () => {
    return (
        <section className='relative w-full h-screen'>
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start justify-center`}>

                <div className='h-full'>
                    <h1 className="space-grotesk text-5xl text-white">
                        Coming soon!
                    </h1>
                    <p className="text-lg text-white w-screen p-6 max-w-3xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel porro quidem atque deserunt aspernatur nihil corporis consectetur harum, iste repudiandae soluta necessitatibus laborum corrupti eius ad omnis nulla ullam maiores!
                    </p>
                    <p className="text-lg text-white w-screen p-6 max-w-3xl mb-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel porro quidem atque deserunt aspernatur nihil corporis consectetur harum, iste repudiandae soluta necessitatibus laborum corrupti eius ad omnis nulla ullam maiores!
                    </p>
                    <a href="#hero" className="bg-black border text-white my-5 p-8 text-xl rounded-full">
                        Go up
                    </a>
                    <div className='grid grid-cols-3 gap-3 min-w-max'>
                        {/* <a href="#fire" className="bg-red-600 text-white my-5 p-8 text-xl rounded-full">
                            
                        </a>
                        <a href="#water" className="bg-blue-600 text-white my-5 p-8 text-xl rounded-full">
                            
                        </a> */}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Section