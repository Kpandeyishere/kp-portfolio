import { Play } from "lucide-react";

type PlaySize = "sm" | "md" | "lg";

const SIZES: Record<PlaySize, string> = {
  sm: "h-12 w-12",
  md: "h-16 w-16 md:h-20 md:w-20",
  lg: "h-20 w-20 md:h-28 md:w-28",
};

const ICONS: Record<PlaySize, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5 md:h-6 md:w-6",
  lg: "h-6 w-6 md:h-8 md:w-8",
};

export function PlayButton({ size = "md" }: { size?: PlaySize }) {
  return (
    <span
      aria-hidden="true"
      className={`${SIZES[size]} flex items-center justify-center rounded-full border border-foreground/50 bg-background/25 backdrop-blur-sm transition-all duration-500 ease-out group-hover:scale-110 group-hover:border-accent group-hover:bg-accent/15`}
    >
      <Play
        className={`${ICONS[size]} translate-x-px fill-current text-foreground transition-transform duration-500 group-hover:translate-x-1 group-hover:text-accent`}
      />
    </span>
  );
}