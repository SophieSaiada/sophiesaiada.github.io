import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles"; // Using "tsparticles" package for loadFull

const FONT_NAME = "Elder Magic";
const PARTICLE_CHARS = ["5", "O", "P", "H", "I", "E"]; // five looks better than S in this font
const PARTICLE_COLOR = "#FF00FF"; // Magenta

const COUNT = 50;
const DENSITY = {
  density: {
    enable: true,
    width: 1920,
    height: 1080
  },
  limit: {
    mode: "delete",
    value: 0
  }
} as const;

const getParticleOptions = (isMobile: boolean): ISourceOptions => ({
  autoPlay: true,
  clear: true,
  defaultThemes: {},
  delay: 0,
  fullScreen: {
    enable: false
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  particles: {
    bounce: {
      horizontal: {
        value: 1
      },
      vertical: {
        value: 1
      }
    },
    collisions: {
      absorb: {
        speed: 2
      },
      bounce: {
        horizontal: {
          value: 1
        },
        vertical: {
          value: 1
        }
      },
      enable: false,
      maxSpeed: 50,
      mode: "bounce",
      overlap: {
        enable: true,
        retries: 0
      }
    },
    color: {
      value: PARTICLE_COLOR
    },
    effect: {
      close: true,
      fill: true,
      options: {},
      type: []
    },
    groups: {
      z7500: {
        number: {
          ...DENSITY,
          value: Math.round((COUNT / 5) * 1)
        },
        zIndex: {
          value: 30
        }
      },
      z2500: {
        number: {
          ...DENSITY,
          value: Math.round((COUNT / 5) * 3)
        },
        zIndex: {
          value: 20
        }
      },
      z1000: {
        number: {
          ...DENSITY,
          value: Math.round((COUNT / 5) * 1)
        },
        zIndex: {
          value: 10
        }
      }
    },
    move: {
      angle: {
        offset: 0,
        value: 10
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 3000,
          y: 3000
        }
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0
      },
      decay: 0,
      distance: {},
      direction: "top",
      drift: 0,
      enable: true,
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out"
      },
      random: false,
      size: false,
      speed: 0.75,
      spin: {
        acceleration: 0,
        enable: false
      },
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fill: {}
      },
      vibrate: false,
      warp: false
    },
    number: {
      ...DENSITY,
      value: COUNT
    },
    opacity: {
      value: { min: 0.7, max: 1 },
      animation: {
        count: 0,
        enable: true,
        speed: { min: 0.2, max: 0.5 },
        decay: 0,
        delay: 0,
        sync: false,
        mode: "random",
        destroy: "none"
      }
    },
    reduceDuplicates: false,
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
    shadow: {
      enable: true,
      blur: 20,
      color: {
        value: PARTICLE_COLOR
      },
      offset: {
        x: 0,
        y: 0
      }
    },
    size: {
      value: isMobile ? { min: 12, max: 20 } : { min: 16, max: 26 },
      animation: {
        enable: true,
        speed: 1,
        sync: false
      }
    },
    zIndex: {
      value: 5,
      opacityRate: 0.5,
      sizeRate: 1,
      velocityRate: 1
    },
    destroy: {
      bounds: {},
      mode: "none",
      split: {
        count: 1,
        factor: {
          value: 3
        },
        rate: {
          value: {
            min: 4,
            max: 9
          }
        },
        sizeOffset: true,
        particles: {}
      }
    },
    wobble: {
      distance: 5,
      enable: true,
      speed: {
        angle: 1,
        move: 1
      }
    },
    life: {
      count: 0,
      delay: {
        value: 0,
        sync: false
      },
      duration: {
        value: 0,
        sync: false
      }
    },
    rotate: {
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        decay: 0,
        sync: false
      },
      direction: "clockwise",
      path: false
    }
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  smooth: false,
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true
    }
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: !isMobile,
        parallax: {
          enable: true,
          force: 800,
          smooth: 250
        }
      }
    }
  }
});

const TsParticlesAnimation = ({ id }: { id: string }) => {
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
    });
  }, []);

  const options = useMemo(() => {
    if (!init) return undefined;
    return getParticleOptions(isMobile);
  }, [init, isMobile]);

  if (!init || !options) {
    return null;
  }

  return (
    <Particles
      id={id}
      options={options}
      className="absolute inset-0 -bottom-40"
    />
  );
};

export default TsParticlesAnimation;
