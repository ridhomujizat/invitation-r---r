import React, { useState, useRef, useEffect } from "react";
import useUIStore from "../store/useUiStore";
import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";

export default function MusicPlayer() {
  const { openCover } = useUIStore((s) => s);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (openCover) {
      audioRef.current?.play();
      setIsPlaying(true);
    } else {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  }, [openCover]);
  return (
    <div className="fixed bottom-20 right-6 z-[99999]">
      <audio ref={audioRef} src="daylight.mp3" />

      <button onClick={handlePlayPause}>
        {isPlaying ? (
          <PauseCircleOutlined style={{ fontSize: "30px" }} />
        ) : (
          <PlayCircleOutlined style={{ fontSize: "30px" }} />
        )}
      </button>
    </div>
  );
}
