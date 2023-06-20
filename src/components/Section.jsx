import {motion} from 'framer-motion';

const Section = () => {
    return (
        <section className='relative w-full h-screen'>
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start justify-center`}>

                <div>
                    <h1 className="space-grotesk text-5xl text-white">
                        Your next pokémon experience
                    </h1>
                </div>
            </div>

        </section>
    )
}

export default Section