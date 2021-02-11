import Particles from "react-tsparticles";
import React from "react";
import { config } from "./particleConfig";

export const ParticlesBackground = () => {
  return (
    <div >
      <Particles
        style={{position: 'fixed', maxWidth: '100%', height: '100%', zIndex: -2, top: 0, bottom: 0, right: 0, left:0}}
        id="tsparticles"
        options={config}
      />
    </div>
  );
};
