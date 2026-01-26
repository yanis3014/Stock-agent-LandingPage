"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine, ISourceOptions } from "tsparticles-engine";

export default function AiParticleSphere() {
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component only renders on client to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Initialize particles engine with slim bundle
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Advanced particle configuration for living sphere effect
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      background: {
        color: "transparent",
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            width: 500,
            height: 500,
          },
        },
        color: {
          value: ["#00FF94", "#00BFFF", "#ffffff"],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: { min: 0.1, max: 0.8 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        size: {
          value: { min: 1, max: 3 },
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        links: {
          enable: false,
        },
      },
      emitters: [
        {
          position: {
            x: 50,
            y: 50,
          },
          rate: {
            delay: 0.1,
            quantity: 2,
          },
          size: {
            width: 0,
            height: 0,
          },
          particles: {
            move: {
              speed: 1.5,
              outModes: {
                default: "destroy",
              },
            },
            life: {
              duration: {
                value: 8,
              },
              count: 1,
            },
          },
        },
      ],
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      detectRetina: true,
    }) as any,
    []
  );

  // Don't render particles during SSR to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className="relative w-[500px] h-[500px] flex items-center justify-center">
        {/* Background glow layer - luminous halo */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 255, 148, 0.15) 0%, rgba(0, 191, 255, 0.1) 30%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Secondary glow for depth */}
        <div
          className="absolute inset-[50px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 255, 148, 0.25) 0%, rgba(0, 191, 255, 0.15) 40%, transparent 60%)",
            filter: "blur(40px)",
          }}
        />
        {/* Central energy core - subtle pulsing */}
        <div
          className="absolute inset-[200px] rounded-full animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 255, 148, 0.3) 0%, transparent 70%)",
            filter: "blur(20px)",
            animationDuration: "3s",
          }}
        />
      </div>
    );
  }

  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      {/* Background glow layer - luminous halo */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 255, 148, 0.15) 0%, rgba(0, 191, 255, 0.1) 30%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Secondary glow for depth */}
      <div
        className="absolute inset-[50px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 255, 148, 0.25) 0%, rgba(0, 191, 255, 0.15) 40%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      {/* Particle system container */}
      <div className="absolute inset-0">
        <Particles
          id="ai-particle-sphere"
          init={particlesInit}
          options={options}
          className="w-full h-full"
        />
      </div>

      {/* Central energy core - subtle pulsing */}
      <div
        className="absolute inset-[200px] rounded-full animate-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 255, 148, 0.3) 0%, transparent 70%)",
          filter: "blur(20px)",
          animationDuration: "3s",
        }}
      />
    </div>
  );
}
