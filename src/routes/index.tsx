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
import { type ReactNode } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

/**
 * Editorial section: illustration above, then chapter label + headline + subtitle.
 * Used for the calm "page-like" scenes that match the reference layout.
 */
function ChapterSection({
  illustration,
  chapter,
  headline,
  subtitle,
}: {
  illustration: ReactNode;
  chapter: string;
  headline: string[];
  subtitle?: string;
}) {
  return (
    <section className="relative w-full bg-background py-24 md:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6">
        <div className="relative mb-12 h-64 w-full md:h-80">{illustration}</div>
        <SceneText chapter={chapter} headline={headline} subtitle={subtitle} />
      </div>
    </section>
  );
}

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

      {/* I. ONE WORLD — Opening Earth (full-bleed cinematic) */}
      <Scene background={<EarthScene />}>
        <SceneText
          tone="dark"
          chapter="I. One World"
          headline={["No stranger walks this earth,", "no country lies beyond our own."]}
          subtitle="A meditation on what we share — air, soil, sky, and the quiet weight of being human together."
        />
        <p className="mt-12 text-center text-xs uppercase tracking-[0.3em] text-background/60">
          Scroll to begin
        </p>
      </Scene>

      {/* II. ONE BODY — editorial */}
      <ChapterSection
        illustration={<UnityScene />}
        chapter="II. One Body"
        headline={["Beneath all uniforms,", "a single body breathes."]}
        subtitle="Like ours: the same warmth in the chest, the same breath drawn from the same wide air."
      />

      {/* III. ONE EARTH — editorial */}
      <ChapterSection
        illustration={<LandscapeScene />}
        chapter="III. One Earth"
        headline={["They, too, are aware of sun and air and water,", "fed by peaceful harvests."]}
        subtitle="The same hills hold our footsteps. The same rivers carry us forward."
      />

      {/* IV. PEACE & WAR — full-bleed split */}
      <Scene background={<PeaceWarScene />}>
        <SceneText
          tone="dark"
          chapter="IV. Peace & War"
          headline={["Fed by the harvest of peace,", "starved by the long winter of war."]}
          subtitle="Two seasons of one human story — and we choose, every day, which to plant."
        />
      </Scene>

      {/* V. ONE HEART — editorial */}
      <ChapterSection
        illustration={<HumanityScene />}
        chapter="V. One Heart"
        headline={["Hands that build, eyes that wake,", "a heart that keeps the same time."]}
        subtitle="Strip away the language, the borders, the names — and the body answers in the same simple rhythm."
      />

      {/* VI. LOVE & HATE — full-bleed transition */}
      <Scene background={<LoveHateScene />}>
        <SceneText
          tone="dark"
          chapter="VI. Love & Hate"
          headline={["When we hate,", "the world dims."]}
          subtitle="When we love, the light returns — to the room, to the street, to the country we have not yet visited."
        />
      </Scene>

      {/* VII. CONSEQUENCE — full-bleed dark */}
      <Scene background={<ConsequenceScene />}>
        <SceneText
          tone="dark"
          chapter="VII. Consequence"
          headline={["Our fires of dust and rage", "wound the very air we share."]}
          subtitle="The smoke does not stop at any border. Neither does the grief."
        />
      </Scene>

      {/* VIII. REMEMBER — closing Earth + reflection */}
      <Scene background={<EarthScene calm />}>
        <SceneText
          tone="dark"
          chapter="VIII. Remember"
          headline={["No one is foreign.", "No land unknown."]}
          subtitle="Carry this back into the day. Look once at a stranger and see, instead, a neighbor you had not yet met."
        />
        <Reflection />
        <p className="mt-16 text-center text-xs uppercase tracking-[0.3em] text-background/50">
          One Earth · A visual meditation
        </p>
      </Scene>
    </main>
  );
}
