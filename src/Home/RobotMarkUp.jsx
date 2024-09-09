import React from 'react'
import { Robot } from './Robot'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const RobotMarkUp = ({height, width}) => {
  return (
    <div>
    <Canvas style={{ height, width }}>
     <OrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <Robot position={[0, -1, 2]} />
    </Canvas>
 
    </div>
  )
}

export default RobotMarkUp