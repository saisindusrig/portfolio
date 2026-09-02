
import { useEffect, useRef } from "react";

interface LogoItem {
  node?: React.ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right";
  logoHeight?: number;
  gap?: number;
  hoverSpeed?: number;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
}

const LogoLoop = ({
  logos,
  speed = 100,
  direction = "left",
  logoHeight = 40,
  gap = 40,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = "#ffffff",
  ariaLabel = "Technology logos",
}: LogoLoopProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const currentSpeedRef = useRef(speed);

  useEffect(() => {
    currentSpeedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const animate = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      const currentSpeed = currentSpeedRef.current;

      if (direction === "left") {
        positionRef.current -= currentSpeed * delta;
      } else {
        positionRef.current += currentSpeed * delta;
      }

      const firstItem = track.children[0] as HTMLElement;

      if (firstItem) {
        const itemWidth = firstItem.offsetWidth + gap;

        if (direction === "left") {
          if (Math.abs(positionRef.current) >= itemWidth) {
            positionRef.current += itemWidth;
            track.appendChild(firstItem);
          }
        } else {
          if (positionRef.current >= itemWidth) {
            positionRef.current -= itemWidth;
            track.insertBefore(
              track.lastElementChild!,
              track.firstElementChild
            );
          }
        }
      }

      track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      lastTimeRef.current = null;
    };
  }, [direction, gap]);

  const handleMouseEnter = () => {
    if (hoverSpeed !== 0) {
      currentSpeedRef.current = hoverSpeed;
    }
  };

  const handleMouseLeave = () => {
    currentSpeedRef.current = speed;
  };

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
    >
      {fadeOut && (
        <>
          <div
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16"
            style={{
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
            }}
          />

          <div
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16"
            style={{
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
            }}
          />
        </>
      )}

      <div
        ref={trackRef}
        className="flex h-full w-max items-center"
        style={{
          gap: `${gap}px`,
          willChange: "transform",
        }}
      >
        {[...logos, ...logos].map((logo, index) => {
          const content = logo.src ? (
            <img
              src={logo.src}
              alt={logo.alt || logo.title || ""}
              style={{
                height: `${logoHeight}px`,
                width: "auto",
              }}
              className="block object-contain"
            />
          ) : (
            <div
              className="flex items-center justify-center"
              style={{
                height: `${logoHeight}px`,
                fontSize: `${logoHeight}px`,
              }}
            >
              {logo.node}
            </div>
          );

          const logoElement = (
            <div
              key={`${logo.title || logo.alt || "logo"}-${index}`}
              title={logo.title}
              className={
                scaleOnHover
                  ? "flex shrink-0 items-center opacity-50 transition-all duration-300 hover:scale-110 hover:opacity-100"
                  : "flex shrink-0 items-center opacity-50"
              }
            >
              {content}
            </div>
          );

          if (logo.href) {
            return (
              <a
                key={`${logo.title || logo.alt || "logo"}-link-${index}`}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                {logoElement}
              </a>
            );
          }

          return logoElement;
        })}
      </div>
    </div>
  );
};

export default LogoLoop;
