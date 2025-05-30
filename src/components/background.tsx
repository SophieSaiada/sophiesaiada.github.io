import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles"; // Using "tsparticles" package for loadFull

// CRITICAL: The font specified in FONT_NAME ('Elder Magic')
// MUST be loaded globally in your Gatsby project for character particles to render.
const FONT_NAME = "Elder Magic";
const PARTICLE_CHARS = ["S", "O", "P", "H", "I", "E"]; // User had "5" here, reverting to "S" for consistency
const PARTICLE_COLOR = "#FF00FF"; // Magenta

const desktopMaxParticles = 75;
const mobileMaxParticles = 40;
const emitterRate = {
  delay: 0.1,
  quantity: 1
};
const DesktopParticleOptions: ISourceOptions = {
  fullScreen: {
    enable: true,
    zIndex: 0
  },
  particles: {
    color: {
      value: PARTICLE_COLOR
    },
    opacity: {
      value: { min: 0, max: 0.8 }, // Particles can be partially transparent
      animation: {
        enable: true,
        speed: 1, // Adjust speed of opacity change
        sync: false,
        startValue: "max", // Start fully opaque (or max of the random range)
        destroy: "min" // Removed: particles are not destroyed by opacity alone
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
      speed: { min: 0.8, max: 1 },
      direction: "top",
      straight: true,
      outModes: {
        default: "out", // Particles leaving the canvas reappear on the other side
        top: "out"
        // bottom: "out", // Already covered by default: "out"
      },
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
  emitters: {
    position: { x: 50, y: 120 },
    size: { mode: "percent", width: 100, height: 20 },
    rate: emitterRate,
    particles: {
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
    }
    // modes: {} // Not defining global modes if event-specific is used
  },
  detectRetina: true
  // background property is intentionally removed for transparency.
  // If a background is still visible on desktop, check parent elements and global CSS.
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
    opacity: {
      value: { min: 0, max: 0.8 },
      animation: {
        enable: true,
        speed: 2.5, // Consistent opacity animation speed for mobile
        sync: false,
        startValue: "max",
        destroy: "min"
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
      style={{ position: "absolute", inset: 0, zIndex: 100 }}
    />
  );
};

export default TsParticlesAnimation;
