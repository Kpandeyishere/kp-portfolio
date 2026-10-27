import { useRef, useState } from "react";
import {
  photoProjects,
  videoProjects,
  type PhotoProject,
  type VideoProject,
} from "@/data/portfolio";
import { PlayButton } from "./PlayButton";
import { ImageLightbox } from "./ImageLightbox";
import { VideoModal } from "./VideoModal";
import { MediaReveal, Reveal } from "./Reveal";

function VideoFrame({ project }: { project: VideoProject }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [previewing, setPreviewing] = useState(false);

  const start = (): void => {
    if (!window.matchMedia("(hover: hover)").matches) return;

    setPreviewing(true);
    const video = ref.current;
    if (video) {
      void video.play().catch(() => undefined);
    }
  };

  const stop = (): void => {
    setPreviewing(false);
    const video = ref.current;
    if (video) {
      video.pause();
      try {
        video.currentTime = 0;
      } catch {
        // Metadata may not be ready yet.
      }
    }
  };

  return (
    <span
      onMouseEnter={start}
      onMouseLeave={stop}
      className="relative block aspect-video w-full overflow-hidden bg-black"
    >
      <video
        ref={ref}
        src={project.videoSrc}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-contain"
      />
      <span
        aria-hidden="true"
        className={`absolute inset-0 transition-colors duration-500 ${
          previewing ? "bg-transparent" : "bg-background/10 group-hover:bg-transparent"
        }`}
      />
      <span className="absolute bottom-4 left-4">
        <PlayButton size="sm" />
      </span>
    </span>
  );
}

function VideoTile({
  project,
  index,
  onOpen,
}: {
  project: VideoProject;
  index: number;
  onOpen: () => void;
}) {
  return (
    <MediaReveal delay={(index % 2) * 0.08}>
      <button
        type="button"
        data-cursor="play"
        onClick={onOpen}
        className="group block w-full text-left"
        aria-label={`Play ${project.title}`}
      >
        <VideoFrame project={project} />
        <span className="mt-3 flex items-baseline justify-between gap-4">
          <span className="font-display text-2xl tracking-wide">{project.title}</span>
          <span className="label-xs text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
        </span>
      </button>
    </MediaReveal>
  );
}

function PhotoTile({
  project,
  index,
  onOpen,
}: {
  project: PhotoProject;
  index: number;
  onOpen: () => void;
}) {
  return (
    <MediaReveal delay={(index % 2) * 0.08}>
      <button
        type="button"
        data-cursor="view"
        onClick={onOpen}
        className="group block w-full text-left"
        aria-label={`View ${project.title}`}
      >
        <span className="relative block aspect-video w-full overflow-hidden bg-card">
          <img
            src={project.image}
            alt={`${project.title} — ${project.category}`}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </span>
        <span className="mt-3 flex items-baseline justify-between gap-4">
          <span className="font-display text-xl tracking-wide">{project.title}</span>
          <span className="label-xs shrink-0 text-muted-foreground">{project.category}</span>
        </span>
      </button>
    </MediaReveal>
  );
}

function GroupHeader({ number, title, count }: { number: string; title: string; count: string }) {
  return (
    <Reveal className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4">
      <div className="flex items-baseline gap-4">
        <span className="label-xs text-accent">{number}</span>
        <h2 className="font-display text-4xl tracking-wide sm:text-5xl">{title}</h2>
      </div>
      <p className="label-xs text-muted-foreground">{count}</p>
    </Reveal>
  );
}

export function SelectedWork() {
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);
  const [video, setVideo] = useState<VideoProject | null>(null);

  const photo = photoIndex === null ? undefined : photoProjects[photoIndex];

  const step = (direction: 1 | -1): void =>
    setPhotoIndex((index) =>
      index === null ? index : (index + direction + photoProjects.length) % photoProjects.length,
    );

  return (
    <section id="work" className="relative border-t border-border px-5 py-20 md:px-10 md:py-28">
      <section id="video-works" className="scroll-mt-24">
        <GroupHeader
          number="01"
          title="Video Editing Works"
          count={`${String(videoProjects.length).padStart(2, "0")} videos`}
        />
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {videoProjects.map((project, index) => (
            <VideoTile
              key={project.id}
              project={project}
              index={index}
              onOpen={() => setVideo(project)}
            />
          ))}
        </div>
      </section>

      <section id="photoshop-works" className="mt-20 scroll-mt-24 md:mt-28">
        <GroupHeader
          number="02"
          title="Photoshop Works"
          count={`${String(photoProjects.length).padStart(2, "0")} artworks`}
        />
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {photoProjects.map((project, index) => (
            <PhotoTile
              key={project.id}
              project={project}
              index={index}
              onOpen={() => setPhotoIndex(index)}
            />
          ))}
        </div>
      </section>

      <ImageLightbox
        open={photo !== undefined}
        onClose={() => setPhotoIndex(null)}
        onPrev={() => step(-1)}
        onNext={() => step(1)}
        image={photo?.image}
        title={photo?.title}
        category={photo?.category}
        position={photoIndex === null ? undefined : `${photoIndex + 1} / ${photoProjects.length}`}
      />

      <VideoModal
        open={video !== null}
        onClose={() => setVideo(null)}
        src={video?.videoSrc ?? ""}
        title={video?.title ?? ""}
      />
    </section>
  );
}
