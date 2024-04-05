import React from 'react'
import Portals from './ThreeSixty'
import { BreakpointProvider } from 'react-socks';
import { Canvas } from '@react-three/fiber';
import { Preload, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

const ThreeSixtyMarkUp = () => {
  return (
    <BreakpointProvider>
    
    <Canvas style={{ height: "100vh", overflow: "hidden" }} frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
      <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5} />
      <Suspense fallback={null}>
        <Preload all />
        <Portals />
      </Suspense>
    </Canvas>
    </BreakpointProvider>
    )
}

export default ThreeSixtyMarkUp