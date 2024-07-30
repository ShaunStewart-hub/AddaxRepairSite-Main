"use client";
import { useEffect, useState } from "react";
export default function HorizontalVideoCard(props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex gap-4">
      <div className={" w-[46px] " + props.size}>
        {isClient && (
          <video
            className="h-auto w-full rounded-full hue-rotate-[140deg]"
            autoPlay={props.autoPlay}
            playsInline
            muted
            loop={props.loop}
          >
            <source src={props.src} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="flex items-center justify-center font-semibold text-sm">
        <p>{props.text}</p>
      </div>
    </div>
  );
}
