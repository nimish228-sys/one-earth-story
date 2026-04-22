import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

// Soft ambient drone via WebAudio (no external file needed)
export function AudioToggle() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ gain: GainNode; oscs: OscillatorNode[] } | null>(null);

  useEffect(() => {
    return () => {
      nodesRef.current?.oscs.forEach((o) => o.stop());
      ctxRef.current?.close();
    };
  }, []);

  const toggle = async () => {
    if (!on) {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new Ctx();
      const gain = ctx.createGain();
      gain.gain.value = 0;
      gain.connect(ctx.destination);
      const freqs = [110, 165, 220, 277];
      const oscs = freqs.map((f) => {
        const o = ctx.createOscillator();
        o.type = "sine";
        o.frequency.value = f;
        const g = ctx.createGain();
        g.gain.value = 0.08;
        o.connect(g).connect(gain);
        o.start();
        return o;
      });
      gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 2);
      ctxRef.current = ctx;
      nodesRef.current = { gain, oscs };
      setOn(true);
    } else {
      const ctx = ctxRef.current;
      const nodes = nodesRef.current;
      if (ctx && nodes) {
        nodes.gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1);
        setTimeout(() => {
          nodes.oscs.forEach((o) => o.stop());
          ctx.close();
        }, 1100);
      }
      ctxRef.current = null;
      nodesRef.current = null;
      setOn(false);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={on ? "Mute ambient sound" : "Play ambient sound"}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-foreground/80 text-background backdrop-blur-md transition hover:scale-110 hover:bg-foreground"
    >
      {on ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
    </button>
  );
}