import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import Images from "@/assets/images";
import { Videos } from "@/assets/video";

const Video = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  /* Once someone hits pause themselves, scrolling away and back must not start
     it up again — the scroll trigger only drives a reel the viewer has not
     taken control of. Kept in a ref: nothing renders off it. */
  const pausedByUserRef = useRef(false);

  const inView = useInView(sectionRef, { amount: 0.5 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!inView) {
      video.pause();
      return;
    }

    if (pausedByUserRef.current) return;

    /* Muted + playsInline satisfies autoplay policy, but the promise still
       rejects if the browser refuses or a pause interrupts the play. The UI
       falls back to the play button on its own, so swallow it. */
    video.play().catch(() => {});
  }, [inView]);

  const handlePlay = async () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      pausedByUserRef.current = false;
      await videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      pausedByUserRef.current = true;
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="md:h-screen h-[50vh] relative bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url('${Images.pattern}'), url('${Images.media}')`,
      }}
    >
      <motion.div
        className="bg-blur lg:w-[70%] w-[90%] h-[70%] center-absolute relative overflow-hidden"
        animate={{
          backdropFilter: isPlaying ? "blur(0px)" : "blur(12px)",
        }}
        style={{
          WebkitBackdropFilter: isPlaying ? "blur(0px)" : "blur(12px)",
        }}
        transition={{
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {/* VIDEO */}
        <motion.video
          ref={videoRef}
          src={Videos.AutodocHolding}
          muted
          playsInline
          loop
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isPlaying ? 1 : 0,
            scale: isPlaying ? 1 : 1.05,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* VIDEO OVERLAY */}
        <motion.div
          className="absolute inset-0 bg-black/20 pointer-events-none"
          animate={{
            opacity: isPlaying ? 0 : 1,
          }}
          transition={{
            duration: 0.8,
          }}
        />

        {/* PLAY SHOWREEL TOP */}
        <motion.div
          className="showreel-circle"
          animate={{
            opacity: isPlaying ? 0 : 1,
            scale: isPlaying ? 0.8 : 1,
            rotate: isPlaying ? -20 : 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{
            pointerEvents: isPlaying ? "none" : "auto",
          }}
        >
          <svg viewBox="0 0 300 300">
            <defs>
              <path
                id="showreelPathTop"
                d="M 150,150
                m -115,0
                a 115,115 0 1,1 230,0
                a 115,115 0 1,1 -230,0"
              />
            </defs>

            <text>
              <textPath
                className="font-mono text-[20px]"
                href="#showreelPathTop"
              >
                PLAY SHOWREEL
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* PLAY SHOWREEL BOTTOM */}
        <motion.div
          className="showreel-circle-bottom"
          animate={{
            opacity: isPlaying ? 0 : 1,
            scale: isPlaying ? 0.8 : 1,
            rotate: isPlaying ? 20 : 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.05,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{
            pointerEvents: isPlaying ? "none" : "auto",
          }}
        >
          <svg viewBox="0 0 300 300">
            <defs>
              <path
                id="showreelPathBottom"
                d="M 150,150
                m -115,0
                a 115,115 0 1,1 230,0
                a 115,115 0 1,1 -230,0"
              />
            </defs>

            <text>
              <textPath
                className="font-mono text-[20px]"
                href="#showreelPathBottom"
              >
                PLAY SHOWREEL
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* PLAY / PAUSE */}
        <motion.button
          type="button"
          onClick={handlePlay}
          className="center-absolute translate-x-[-50%]! translate-y-[-50%]! rounded-full bg-white10 w-15 h-15 flex items-center justify-center cursor-pointer z-10"
          animate={{
            scale: isPlaying ? 0.9 : 1,
          }}
          whileHover={{
            scale: isPlaying ? 1 : 1.08,
          }}
          whileTap={{
            scale: 0.9,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {isPlaying ? (
            <div className="flex gap-1">
              <span className="w-1.5 h-5 bg-white rounded-full" />
              <span className="w-1.5 h-5 bg-white rounded-full" />
            </div>
          ) : (
            <img src={Images.play} alt="Play" />
          )}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Video;
