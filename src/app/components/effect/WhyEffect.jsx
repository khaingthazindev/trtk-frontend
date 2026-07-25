'use client';

import {useEffect, useRef, useState} from "react";

function VideoPlayer({src, isPlaying}) {
   const videoRef = useRef(null);

   // wait to finish render (loaded all DOM) if not wait ref will be null
   useEffect(() => {
      if (isPlaying) {
         videoRef.current.pause();
      } else {
         videoRef.current.play();
      }
   }, [isPlaying]);

   return <div>
      <video ref={videoRef}
             src={src}
             width={"30%"}
             muted></video>
   </div>;
}

export default function WhyEffect() {
   const [isPlaying, setIsPlaying] = useState(false);

   const handlePlay = () => {
      setIsPlaying(!isPlaying);
   }
   return (<div>
      <button onClick={handlePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      <VideoPlayer src={"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}
                   isPlaying={isPlaying}/>
   </div>)
}