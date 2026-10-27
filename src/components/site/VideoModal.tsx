import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

type VideoModalProps = {
  open: boolean;
  onClose: () => void;
  src: string;
  poster?: string | undefined;
  title: string;
  meta?: string | undefined;
};

export function VideoModal({ open, onClose, src, poster, title, meta }: VideoModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-background/95 px-4 py-16 backdrop-blur-md sm:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <X className="h-5 w-5" />
          </button>

          <motion.div
            className="my-auto w-full max-w-5xl"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex w-full items-center justify-center overflow-hidden border border-border bg-black">
              <video
                key={src}
                className="block h-auto max-h-[calc(100dvh-12rem)] w-full object-contain"
                style={{ aspectRatio: "auto" }}
                src={src}
                poster={poster}
                controls
                autoPlay
                playsInline
              />
            </div>

            <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-2xl tracking-wide">{title}</h3>
              {meta ? <p className="label-xs text-muted-foreground">{meta}</p> : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
