const R2_BASE_URL =
  "https://pub-6f377ff8bf0241edba33c58598adae5a.r2.dev/kp%20works";

const r2Asset = (filename: string): string =>
  `${R2_BASE_URL}/${encodeURIComponent(filename)}`;

const r2NewAsset = (filename: string): string =>
  `${R2_BASE_URL}/new/${encodeURIComponent(filename)}`;

export const HERO_IMAGE = r2Asset("hero-cinematic.jpg");
export const PORTRAIT_IMAGE = r2Asset("portrait.jpg");
export const SHOWREEL_SRC = r2Asset("Show reel.mp4");
export const SHOWREEL_POSTER = r2NewAsset("Show reel thumbnail.png");

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
    title: "Thumbnail 3",
    category: "Thumbnail Design",
    image: r2Asset("Thumbnail 3.jpg"),
  },
  {
    id: "ph-03",
    title: "Jonathan Gaming Thumbnail",
    category: "Thumbnail Design",
    image: r2Asset("Jonathan Gaming Thumbnail.jpg"),
  },
  {
    id: "ph-04",
    title: "Pinboard Thumbnail",
    category: "Thumbnail Design",
    image: r2Asset("Pinboard Thumbnail.jpg"),
  },
  {
    id: "ph-05",
    title: "BSc Stats Thumbnail",
    category: "Thumbnail Design",
    image: r2Asset("Bsc stats thumbnail 2.png"),
  },
  {
    id: "ph-06",
    title: "CM1 Lifetable",
    category: "Graphic Design",
    image: r2Asset("CM1 Lifetable (2).png"),
  },
  {
    id: "ph-07",
    title: "Dark Series Poster",
    category: "Poster Design",
    image: r2Asset("Dark Series Poster.jpg"),
  },
  {
    id: "ph-08",
    title: "Aakansha Storybook",
    category: "Creative Design",
    image: r2Asset("Aakansha Storybook 2.jpg"),
  },
  {
    id: "ph-09",
    title: "Food Menu",
    category: "Graphic Design",
    image: r2Asset("Food Menu.jpg"),
  },
  {
    id: "ph-10",
    title: "Self Manipulation",
    category: "Photo Manipulation",
    image: r2Asset("Self Manipulation .jpg"),
  },
];

export const videoProjects: readonly VideoProject[] = [
  {
    id: "vd-self-shoot-showreel",
    title: "Self Shoot + Editingl",
    videoSrc: r2Asset("Copy of Self Shoot + Edit.mp4"),
  },
  {
    id: "vd-client-gym",
    title: "Client Gym Edit",
    videoSrc: r2Asset("Client Gym Edit.mp4"),
  },
  {
    id: "vd-client-gym-2",
    title: "Client Gym Edit 2",
    videoSrc: r2Asset("Copy of Client Gym Edit (1).mp4"),
  },
  {
    id: "vd-eyes-masking",
    title: "Eye Masking Edit",
    videoSrc: r2Asset("Copy of Eyes Masking Edit.mp4"),
  },
  {
    id: "vd-self-shoot-edit",
    title: "Self Shoot and Edited",
    videoSrc: r2NewAsset("self shoot and edited.mp4"),
  },
  {
    id: "vd-disappearing",
    title: "Disappearing Edit",
    videoSrc: r2Asset("Disappearing Edit.mp4"),
  },
  {
    id: "vd-rapido",
    title: "Rapido Edit",
    videoSrc: r2Asset("Copy of RAPIDO EDIT12.mp4"),
  },
  {
    id: "vd-alpha-plus",
    title: "Alpha Plus",
    videoSrc: r2Asset("Copy of competitive exams series books timeline.mp4"),
  },
  {
    id: "vd-alpha-plus-1",
    title: "Alpha Plus 1",
    videoSrc: r2Asset("video-01.mp4"),
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

export const CONTACT_URL = "kartikpandeywork@gmail.com";

export const navLinks: readonly { label: string; id: string }[] = [
  { label: "Video Editing", id: "video-works" },
  { label: "Photoshop", id: "photoshop-works" },
  { label: "Contact", id: "contact" },
];