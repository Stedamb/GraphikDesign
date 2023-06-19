import {motion} from 'framer-motion';

const Hero = () => {
    return (
        <section className='relative w-full h-screen'>
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start justify-center`}>

                <div>
                    <h1 className="space-grotesk h-1">
                        Your next pokémon experience
                    </h1>
                </div>
            </div>

        </section>
    )
}

export default Hero