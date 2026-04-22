import { useState } from "react";
import { motion } from "framer-motion";

export function Reflection() {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mx-auto mt-16 max-w-xl rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-md">
      <h3 className="font-display text-2xl text-foreground">Leave a reflection</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        What does shared humanity mean to you today?
      </p>
      {submitted ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 italic text-foreground/80"
        >
          “{text}” — thank you for sharing.
        </motion.p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (text.trim()) setSubmitted(true);
          }}
          className="mt-4 flex flex-col gap-3"
        >
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            maxLength={240}
            placeholder="A thought, a memory, a hope…"
            className="w-full resize-none rounded-md border border-border bg-background/60 p-3 text-foreground outline-none transition focus:border-secondary"
          />
          <button
            type="submit"
            className="self-end rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Share
          </button>
        </form>
      )}
    </div>
  );
}