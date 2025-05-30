import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles"; // Using "tsparticles" package for loadFull

// CRITICAL: The font specified in FONT_NAME ('Elder Magic')
// MUST be loaded globally in your Gatsby project for character particles to render.
const FONT_NAME = "Elder Magic"; // Corrected font name
const PARTICLE_CHARS = ["5", "O", "P", "H", "I", "E",];
const PARTICLE_COLOR = "#FF00FF"; // Magenta

const desktopMaxParticles = 75;
const mobileMaxParticles = 40;

const DesktopParticleOptions: ISourceOptions = {
  fullScreen: {
    enable: true,
    zIndex: 0
  },
  particles: {
    number: {
      value: desktopMaxParticles,
      density: {
        enable: false
      }
    },
    color: {
      value: PARTICLE_COLOR
    },
    shape: {
      type: "char",
      options: {
        char: {
          value: PARTICLE_CHARS,
          font: FONT_NAME,
          style: "",
          weight: "400",
          fill: true
        }
      }
    },
    opacity: {
      value: { min: 0.1, max: 0.8 }, // Particles can be partially transparent
      animation: {
        enable: true,
        speed: 1, // Adjust speed of opacity change
        sync: false,
        startValue: "max" // Start fully opaque (or max of the random range)
        // destroy: "min" // Removed: particles are not destroyed by opacity alone
      }
    },
    size: {
      value: { min: 16, max: 26 },
      animation: {
        enable: true,
        speed: 2,
        sync: false
      }
    },
    move: {
      enable: true,
      speed: { min: 0.3, max: 1 },
      direction: "top",
      straight: true,
      outModes: {
        default: "out", // Particles leaving the canvas reappear on the other side
        top: "out"
        // bottom: "out", // Already covered by default: "out"
      },
      warp: true, // Enable particles to warp from one edge to another
      trail: {
        enable: true,
        fill: { color: "#000000" },
        length: 5
      }
    },
    stroke: {
      width: 1,
      color: {
        value: PARTICLE_COLOR,
        animation: {
          enable: true,
          speed: 20,
          sync: true
        }
      }
    }
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        parallax: {
          enable: true,
          force: 600,
          smooth: 150
        }
      }
    },
  },
  detectRetina: true
  // background property is intentionally removed for transparency
};

const MobileParticleOptions: ISourceOptions = {
  ...DesktopParticleOptions,
  particles: {
    ...DesktopParticleOptions.particles!,
    number: {
      value: mobileMaxParticles,
      density: {
        enable: false
      }
    },
    shape: {
      type: "char",
      options: {
        char: {
          value: PARTICLE_CHARS,
          font: FONT_NAME,
          style: "",
          weight: "400",
          fill: true
        }
      }
    },
    opacity: {
      value: { min: 0.1, max: 0.8 }, // Consistent opacity settings
      animation: {
        enable: true,
        speed: 1,
        sync: false,
        startValue: "max"
        // destroy: "min" // Removed
      }
    },
    size: {
      value: { min: 12, max: 20 },
      animation: {
        ...DesktopParticleOptions.particles!.size!.animation!
      }
    },
    move: {
      ...DesktopParticleOptions.particles!.move!,
      trail: {
        enable: false
      }
    },
    stroke: {
      ...DesktopParticleOptions.particles!.stroke!,
      width: 0
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: false
      }
    },
    modes: {}
  }
};

const TsParticlesAnimation: React.FC = () => {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
    }
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
      console.log("tsParticles FULL engine initialized successfully.");
    });
  }, []);

  const options = useMemo(() => {
    if (!init) return undefined;

    const currentOptions = isMobile
      ? MobileParticleOptions
      : DesktopParticleOptions;
    console.log("Using tsParticles options:", currentOptions);
    return currentOptions;
  }, [init, isMobile]);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("tsParticles container loaded:", container);
  };

  if (!init || !options) {
    console.log(
      "tsParticles: Waiting for init or options. Init:",
      init,
      "Options defined:",
      !!options
    );
    return null;
  }

  console.log("tsParticles: Rendering Particles component.");
  return (
    <Particles
      id="tsparticles"
      options={options}
      particlesLoaded={particlesLoaded}
      // Removed className that included pointer-events-none
      // Apply styling via style prop or ensure parent allows pointer events if needed
      style={{ position: "absolute", inset: 0, zIndex: 100 }}
    />
  );
};

export default TsParticlesAnimation;
