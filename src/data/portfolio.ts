
const R2_BASE_URL =
  "https://pub-6f377ff8bf0241edba33c58598adae5a.r2.dev/kp%20works";

const r2Asset = (filename: string): string =>
  `${R2_BASE_URL}/${encodeURIComponent(filename)}`;

export const HERO_IMAGE = r2Asset("hero-cinematic.jpg");
export const PORTRAIT_IMAGE = r2Asset("portrait.jpg");
export const SHOWREEL_SRC = r2Asset("Show reel.mp4");
export const SHOWREEL_POSTER = HERO_IMAGE;

export type PhotoProject = {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly image: string;
};

export type VideoProject = {
  readonly id: string;
  readonly title: string;
  readonly videoSrc: string;
};

export const photoProjects: readonly PhotoProject[] = [
  {
    id: "ph-01",
    title: "Before After Squid Game",
    category: "Photo Edit",
    image: r2Asset("Before After Squid Game.jpg"),
  },
  {
    id: "ph-02",
    title: "Self Manipulation",
    category: "Photo Manipulation",
    image: r2Asset("Self Manipulation .jpg"),
  },
  {
    id: "ph-03",
    title: "Dark Series Poster",
    category: "Poster Design",
    image: r2Asset("Dark Series Poster.jpg"),
  },
  {
    id: "ph-04",
    title: "Thumbnail 3",
    category: "Thumbnail Design",
    image: r2Asset("Thumbnail 3.jpg"),
  },
  {
    id: "ph-05",
    title: "Pinboard Thumbnail",
    category: "Thumbnail Design",
    image: r2Asset("Pinboard Thumbnail.jpg"),
  },
  {
    id: "ph-06",
    title: "Jonathan Gaming Thumbnail",
    category: "Thumbnail Design",
    image: r2Asset("Jonathan Gaming Thumbnail.jpg"),
  },
];

export const videoProjects: readonly VideoProject[] = [
  { id: "vd-01", title: "Video 01", videoSrc: r2Asset("video-01.mp4") },
  { id: "vd-02", title: "Video 02", videoSrc: r2Asset("video-02.mp4") },
  { id: "vd-03", title: "Video 03", videoSrc: r2Asset("video-03.mp4") },
  { id: "vd-04", title: "Video 04", videoSrc: r2Asset("video04.mp4") },
  { id: "vd-05", title: "Video 05", videoSrc: r2Asset("video-05.mp4") },
  { id: "vd-06", title: "Video 06", videoSrc: r2Asset("video-06.mp4") },
];

export const disciplines: readonly string[] = [
  "Video Editing",
  "Photo Editing",
  "Motion Graphics",
  "Colour Grading",
  "Photo Manipulation",
  "Visual Storytelling",
];

export const tools: readonly string[] = [
  "Adobe Photoshop",
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "Adobe Lightroom",
];

export const expertise: readonly string[] = [
  "Photoshop",
  "Premiere Pro",
  "After Effects",
  "Colour Grading",
  "Photo Manipulation",
  "Motion Graphics",
  "Visual Storytelling",
];

export const processSteps: readonly {
  step: string;
  title: string;
  body: string;
}[] = [
  {
    step: "01",
    title: "Understand",
    body: "Understand the idea, audience and visual direction.",
  },
  {
    step: "02",
    title: "Create",
    body: "Build the visual language and first edit.",
  },
  {
    step: "03",
    title: "Refine",
    body: "Polish timing, color, transitions and details.",
  },
  {
    step: "04",
    title: "Deliver",
    body: "Deliver the final polished visual.",
  },
];

export const CONTACT_URL = "https://kphere.carrd.co/#";

export const navLinks: readonly { label: string; id: string }[] = [
  { label: "Video Editing", id: "video-works" },
  { label: "Photoshop", id: "photoshop-works" },
  { label: "Contact", id: "contact" },
];
