import Image from "next/image";
import { steps } from "../constants";
import styles, { layout } from "../style";

const StepsCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== steps.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimOrange`}>
            <Image src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                {content}
            </p>
        </div>
    </div>
);

const TokenBridgeGuide = () => (
    <section id="bridge" className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Start Bridging Your Tokens Now
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Follow These Simple Steps to Bridge Your Tokens Safely on Our Platform
            </p>
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
            {steps.map((feature, index) => (
                <StepsCard key={feature.id} {...feature} index={index} />
            ))}
        </div>
    </section>
);

export default TokenBridgeGuide;