"use client";

import React from "react";

export function VideoIntro() {
  return (
    <div className="p-8">
      <div className="relative mx-auto mt-20 max-w-6xl overflow-hidden rounded-xl aspect-video">
        {/* Local Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
          src="/Sample Video.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25 rounded-xl"></div>
      </div>
    </div>
  );
}

export default VideoIntro;
