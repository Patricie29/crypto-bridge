import Image from "next/image";
import { bridge } from "../assets";
import styles, { layout } from "../style";

const Bridge = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                What is a cross-chain bridge?
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Cross-chain bridging is a technology that allows the transfer of assets and information between different blockchain networks. This is important because most blockchains operate independently, and without bridges, assets on one blockchain cannot be used or accessed on another. By using a cross-chain bridge, users can, for example, move a cryptocurrency from one blockchain to another.
            </p>

        </div>

        <div className={layout.sectionImg}>
            <Image src={bridge} alt="bridge" className="w-[100%] h-[100%]" />
        </div>
    </section>
);

export default Bridge;