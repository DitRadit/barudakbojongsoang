import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import HomeHitModel from "./HitModel";
import React from "react";
import img2 from '../../images/Group 25.png';

const HomeModelContainer = () => {
  return (
    <>    
     <ARButton
  className="!relative !bg-transparent"
  sessionInit={{
    requiredFeatures: ["hit-test"],
  }}
>
  <img src={img2} alt="AR Button" className="w-full h-full object-contain" />
</ARButton>

  
      <Canvas
        camera={{ position: [0, 0, 5] }}
        gl={{ alpha: true }} 
      >
        <XR>
          <ambientLight intensity={0.5} />
          <HomeHitModel />
        </XR>
      </Canvas>
    </>
  );
};

export default HomeModelContainer;
