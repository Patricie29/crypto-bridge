import styles from "../style";
import { main } from "../assets";
import Image from "next/image";

const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        Bridging <br className="sm:block hidden" />{" "}
                        <span className="text-gradient">Basics</span>{" "}
                    </h1>
                </div>

                <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                    for Everyone.
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Explore the world of blockchain bridges safely on our testnet platform. Here, you can practice and understand bridging technologies without the need for real money. This is the perfect place to learn, experiment, and become confident in your blockchain knowledge.
                </p>
            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <Image src={main} alt="main" className="w-[100%] h-[100%] relative z-[5]" />

                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 orange__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 yellow__gradient" />
                {/* gradient end */}
            </div>
        </section>
    );
};

export default Hero;