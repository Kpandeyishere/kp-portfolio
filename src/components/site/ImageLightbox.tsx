import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

type ImageLightboxProps = {
  open: boolean;
  onClose: () => void;
  onPrev?: (() => void) | undefined;
  onNext?: (() => void) | undefined;
  image?: string | undefined;
  title?: string | undefined;
  category?: string | undefined;
  description?: string | undefined;
  year?: string | undefined;
  position?: string | undefined;
};

export function ImageLightbox({
  open,
  onClose,
  onPrev,
  onNext,
  image,
  title,
  category,
  description,
  year,
  position,
}: ImageLightboxProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {open && image ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={title ?? "Project image"}
          className="fixed inset-0 z-[60] flex flex-col bg-background/97 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={onClose}
        >
          <div
            className="flex items-center justify-between gap-4 px-5 py-5 md:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="label-xs text-muted-foreground">{position}</p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close image"
              className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex min-h-0 flex-1 items-center justify-center px-4 md:px-16">
            <motion.img
              key={image}
              src={image}
              alt={title ?? ""}
              className="max-h-full w-auto max-w-full object-contain"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div
            className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-end gap-4 px-5 py-6 md:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous artwork"
              className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="min-w-0 text-center">
              <p className="label-xs text-accent">
                {category}
                {year ? ` — ${year}` : ""}
              </p>
              <h3 className="mt-2 truncate font-display text-3xl tracking-wide">{title}</h3>
              {description ? (
                <p className="mx-auto mt-2 hidden max-w-xl text-sm text-muted-foreground sm:block">
                  {description}
                </p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next artwork"
              className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
