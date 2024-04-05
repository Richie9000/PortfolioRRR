import React from 'react'
import { Canvas } from '@react-three/fiber'
import House from './House'

const HouseMarkUp = () => {
  return (
    <Canvas style={{ height: "80vh"}}>
    <ambientLight intensity={0.1} />
    <directionalLight color="red" position={[0, 0, 5]} />
   <House position={[1,-2,-2]} rotation={[Math.PI / 1.8, Math.PI / -2, Math.PI / 2.2 ]} />
  </Canvas>
  )
}

export default HouseMarkUp