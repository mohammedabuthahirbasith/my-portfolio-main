import { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
    console.log("Particles loaded");
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="particle-bg"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "connect",
              parallax: {
                enable: true,
                force: 80,
                smooth: 15
              }
            },
            resize: true,
          },
          modes: {
            connect: {
              distance: 200,
              links: {
                opacity: 0.3,
              },
              radius: 120
            },
            repulse: {
              distance: 200,
              duration: 0.4,
              speed: 1
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 0.5,
            triangles: {
              enable: false
            }
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
              bottom: "out",
              left: "out",
              right: "out",
              top: "out"
            },
            random: false,
            speed: 1.8,
            straight: false,
            trail: {
              enable: true,
              length: 3,
              fillColor: "#000000"
            },
            attract: {
              enable: true,
              rotateX: 1200,
              rotateY: 1500
            }
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 100,
          },
          opacity: {
            value: 0.4,
            animation: {
              enable: true,
              speed: 0.8,
              minimumValue: 0.1,
              sync: false
            }
          },
          shape: {
            type: "circle",
            options: {
              circle: {
                blur: 1,
                fill: true
              }
            }
          },
          size: {
            value: { min: 0.8, max: 2 },
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 0.1,
              sync: false
            }
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 0.8
            }
          }
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
