import { Canvas } from '@react-three/fiber'
import React from 'react'
import Warehouse from './Warehouse'
import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/cannon'

const WHMarkUp = ({height, width}) => {
  return (
   <div>
    <Canvas style={{ height, width }}>
        <OrbitControls/>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <Physics>
        <Warehouse scale={.1} position={[,-2,-2]} rotation={[Math.PI / 2.4, Math.PI / -2, Math.PI / 2.2 ]} />
      </Physics>
    </Canvas>
    </div>
  )
}

export default WHMarkUp