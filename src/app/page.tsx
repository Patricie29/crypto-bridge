'use client'

import styles from "./style";
import { TokenBridgeGuide, Bridge, Stats, CTA, Footer, Navbar, Hero } from "./components";
import WormholeBridge from "@wormhole-foundation/wormhole-connect";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main>

      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <TokenBridgeGuide />
            <WormholeBridge config={{ "env": "testnet", "mode": "dark", "bridgeDefaults": { "fromNetwork": "goerli", "toNetwork": "basegoerli", "token": "ETH" }, "pageHeader": "" }} />
            <Bridge />
            <CTA />
            <Footer />
          </div>
            <Analytics/>
        </div>
      </div>
    </main>
  );
}
