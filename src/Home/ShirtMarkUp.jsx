import { Canvas } from '@react-three/fiber'
import React from 'react'
import Shirt from './Shirt'


const ShirtMarkUp = ({height}) => {
  return (
   <Canvas style={{height}}>
     <ambientLight intensity={0.1} />
     <directionalLight color="red" position={[0, 0, 5]} />
    <Shirt />
   </Canvas>
  )
}

export default ShirtMarkUp