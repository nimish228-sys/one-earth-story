import { createFileRoute } from "@tanstack/react-router";
import { Scene } from "@/components/story/Scene";
import { SceneText } from "@/components/story/SceneText";
import { EarthScene } from "@/components/story/EarthScene";
import { UnityScene } from "@/components/story/UnityScene";
import { LandscapeScene } from "@/components/story/LandscapeScene";
import { PeaceWarScene } from "@/components/story/PeaceWarScene";
import { HumanityScene } from "@/components/story/HumanityScene";
import { LoveHateScene } from "@/components/story/LoveHateScene";
import { ConsequenceScene } from "@/components/story/ConsequenceScene";
import { AudioToggle } from "@/components/story/AudioToggle";
import { Reflection } from "@/components/story/Reflection";
import { motion, useScroll } from "framer-motion";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="relative bg-background text-foreground">
      {/* progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 origin-left bg-gradient-to-r from-secondary via-accent to-primary"
        style={{ scaleX: scrollYProgress }}
      />

      <AudioToggle />

      {/* 1. Opening — Earth */}
      <Scene background={<EarthScene />}>
        <SceneText
          tone="dark"
          size="xl"
          lines={[
            "No stranger walks this earth.",
            "No country lies beyond our own.",
          ]}
        />
        <p className="mt-12 text-center text-sm uppercase tracking-[0.3em] text-background/60">
          Scroll to begin
        </p>
      </Scene>

      {/* 2. Unity */}
      <Scene background={<UnityScene />}>
        <SceneText
          size="lg"
          lines={["Beneath every uniform,", "a single body breathes."]}
        />
      </Scene>

      {/* 3. Shared landscapes */}
      <Scene background={<LandscapeScene />}>
        <SceneText
          size="lg"
          lines={[
            "We walk the same hills,",
            "drink from the same rivers,",
            "rest beneath the same sun.",
          ]}
        />
      </Scene>

      {/* 4. Peace vs War split */}
      <Scene background={<PeaceWarScene />}>
        <SceneText
          tone="dark"
          size="lg"
          lines={[
            "Fed by the harvest of peace,",
            "starved by the long winter of war.",
          ]}
        />
      </Scene>

      {/* 5. Common humanity */}
      <Scene background={<HumanityScene />}>
        <SceneText
          size="lg"
          lines={[
            "Hands that build, eyes that wake,",
            "a heart that keeps the same time.",
          ]}
        />
      </Scene>

      {/* 6. Love vs Hate */}
      <Scene background={<LoveHateScene />}>
        <SceneText
          tone="dark"
          size="lg"
          lines={[
            "When we hate, the world dims.",
            "When we love, the light returns.",
          ]}
        />
      </Scene>

      {/* 7. Consequence */}
      <Scene background={<ConsequenceScene />}>
        <SceneText
          tone="dark"
          size="lg"
          lines={[
            "Our fires of dust and rage",
            "wound the very air we share.",
          ]}
        />
      </Scene>

      {/* 8. Conclusion */}
      <Scene background={<EarthScene calm />}>
        <SceneText
          tone="dark"
          size="xl"
          lines={[
            "Remember —",
            "no one is foreign,",
            "no land unknown.",
          ]}
        />
        <Reflection />
        <p className="mt-16 text-center text-xs uppercase tracking-[0.3em] text-background/50">
          One Earth · A visual meditation
        </p>
      </Scene>
    </main>
  );
}
