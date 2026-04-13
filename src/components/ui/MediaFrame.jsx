import { useEffect, useState } from "react";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion.js";

const MediaFrame = ({
  className = "",
  mediaClassName = "",
  imageSrc,
  videoSrc,
  videoType = "video/mp4",
  posterSrc,
  alt = "",
  sizes = "100vw",
  width,
  height,
  videoPreload,
  loading = "lazy",
  priority = false,
  decorative = false,
  objectPosition = "center",
  children,
  ...rest
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [hasVideoError, setHasVideoError] = useState(false);
  const shouldRenderVideo = Boolean(videoSrc && !prefersReducedMotion && !hasVideoError);
  const fallbackSrc = imageSrc ?? posterSrc;
  const imgLoading = priority ? "eager" : loading;
  const fetchPriority = priority ? "high" : "auto";
  const accessibleLabel = decorative ? undefined : alt;
  const resolvedVideoPreload = videoPreload ?? (priority ? "auto" : "metadata");

  useEffect(() => {
    setHasVideoError(false);
  }, [videoSrc, imageSrc, posterSrc]);

  return (
    <div className={className} {...rest}>
      {shouldRenderVideo ? (
        <video
          className={mediaClassName}
          autoPlay
          loop
          muted
          playsInline
          preload={resolvedVideoPreload}
          poster={posterSrc}
          role={decorative ? undefined : "img"}
          aria-hidden={decorative || undefined}
          aria-label={accessibleLabel}
          onError={() => setHasVideoError(true)}
          style={{ objectPosition }}
        >
          <source src={videoSrc} type={videoType} />
        </video>
      ) : fallbackSrc ? (
        <img
          className={mediaClassName}
          src={fallbackSrc}
          alt={decorative ? "" : alt}
          loading={imgLoading}
          decoding="async"
          fetchPriority={fetchPriority}
          sizes={sizes}
          width={width}
          height={height}
          aria-hidden={decorative || undefined}
          style={{ objectPosition }}
        />
      ) : null}

      {children}
    </div>
  );
};

export default MediaFrame;
