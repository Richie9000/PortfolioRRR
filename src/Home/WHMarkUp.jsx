import { Canvas } from '@react-three/fiber'
import React from 'react'
import Warehouse from './Warehouse'
import { OrbitControls } from '@react-three/drei'



const WHMarkUp = ({height, width}) => {

  return (
   <div>
    <Canvas style={{ height, width }}>
        <OrbitControls/>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <Warehouse position={[1,-2,-2]} rotation={[Math.PI / 1.8, Math.PI / -2, Math.PI / 2.2 ]} />
    </Canvas>
 

    </div>
  )
}

export default WHMarkUp