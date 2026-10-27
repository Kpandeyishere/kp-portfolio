
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

/**
 * PHOTO PROJECTS
 * Ordered by aspect-ratio groups:
 * 16:9 landscape → 3:2 landscape → portrait.
 * Numbered filenames retain their original numbers.
 */
export const photoProjects: readonly PhotoProject[] = [
  // LANDSCAPE — 16:9
  {
    id: "ph-02",
    title: "Before After Squid Game 2",
    category: "Photo Edit",
    image: r2Asset("Before After Squid Game2.jpg"),
  },
  {
    id: "ph-03",
    title: "Thumbnail 3",
    category: "Thumbnail Design",
    image: r2Asset("Thumbnail 3.jpg"),
  },
  {
    id: "ph-07",
    title: "Jonathan Gaming Thumbnail 7",
    category: "Thumbnail Design",
    image: r2Asset("Jonathan Gaming Thumbnail7.jpg"),
  },
  {
    id: "ph-08",
    title: "Pinboard Thumbnail 8",
    category: "Thumbnail Design",
    image: r2Asset("Pinboard Thumbnail8.jpg"),
  },
  {
    id: "ph-work-01",
    title: "Creative Work 01",
    category: "Photo Editing",
    image: r2Asset("work-01.jpg"),
  },
  {
    id: "ph-work-04",
    title: "Creative Work 04",
    category: "Photo Editing",
    image: r2Asset("work-04.jpg"),
  },
  {
    id: "ph-work-05",
    title: "Creative Work 05",
    category: "Photo Editing",
    image: r2Asset("work-05.jpg"),
  },
  {
    id: "ph-work-06",
    title: "Creative Work 06",
    category: "Photo Editing",
    image: r2Asset("work-06.jpg"),
  },
  {
    id: "ph-work-07",
    title: "Creative Work 07",
    category: "Photo Editing",
    image: r2Asset("work-07.jpg"),
  },

  // LANDSCAPE — 3:2
  {
    id: "ph-03-bsc",
    title: "BSc Stats Thumbnail 3",
    category: "Thumbnail Design",
    image: r2Asset("Bsc stats thumbnail 3.png"),
  },
  {
    id: "ph-04",
    title: "CM1 Lifetable 4",
    category: "Graphic Design",
    image: r2Asset("CM1 Lifetable 4.png"),
  },

  // PORTRAIT — approximately 2:3
  {
    id: "ph-05-poster",
    title: "Dark Series Poster 5",
    category: "Poster Design",
    image: r2Asset("Dark Series Poster5.jpg"),
  },
  {
    id: "ph-work-03",
    title: "Creative Work 03",
    category: "Photo Manipulation",
    image: r2Asset("work-03.jpg"),
  },

  // PORTRAIT — approximately 0.65–0.75 ratio
  {
    id: "ph-01",
    title: "Aakansha Storybook 1",
    category: "Creative Design",
    image: r2Asset("Aakansha Storybook 1.jpg"),
  },
  {
    id: "ph-06",
    title: "Food Menu 6",
    category: "Graphic Design",
    image: r2Asset("Food Menu6.jpg"),
  },
  {
    id: "ph-self-manipulation",
    title: "Self Manipulation",
    category: "Photo Manipulation",
    image: r2Asset("Self Manipulation .jpg"),
  },
  {
    id: "ph-work-02",
    title: "Creative Work 02",
    category: "Photo Manipulation",
    image: r2Asset("work-02.jpg"),
  },
];

/**
 * VIDEO PROJECTS
 * Named edits first, followed by numbered videos.
 * The showreel remains featured separately above the projects.
 */
export const videoProjects: readonly VideoProject[] = [
  {
    id: "vd-client-gym",
    title: "Client Gym Edit",
    videoSrc: r2Asset("Client Gym Edit.mp4"),
  },
  {
    id: "vd-disappearing",
    title: "Disappearing Edit",
    videoSrc: r2Asset("Disappearing Edit.mp4"),
  },
  {
    id: "vd-01",
    title: "Video 01",
    videoSrc: r2Asset("video-01.mp4"),
  },
  {
    id: "vd-02",
    title: "Video 02",
    videoSrc: r2Asset("video-02.mp4"),
  },
  {
    id: "vd-03",
    title: "Video 03",
    videoSrc: r2Asset("video-03.mp4"),
  },
  {
    id: "vd-04",
    title: "Video 04",
    videoSrc: r2Asset("video04.mp4"),
  },
  {
    id: "vd-05",
    title: "Video 05",
    videoSrc: r2Asset("video-05.mp4"),
  },
  {
    id: "vd-06",
    title: "Video 06",
    videoSrc: r2Asset("video-06.mp4"),
  },
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
