import {motion} from 'framer-motion';

const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto'>
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

                {/* <div>
                    <h1 className="space-grotesk">
                        Hi there, I'm
                        <span className='space-grotesk font-bold'>Stefano</span>
                    </h1>
                    <p className="mt-2">
                        Full-stack developer with a <span className='italic font-bold'>creative</span> mind
                    </p>
                </div> */}
            </div>

        </section>
    )
}

export default Hero