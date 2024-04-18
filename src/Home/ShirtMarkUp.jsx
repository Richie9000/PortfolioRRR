import { Canvas } from '@react-three/fiber'
import React from 'react'
import Shirt from './Shirt'
import "./ShirtMarkUp.css"


const ShirtMarkUp = ({height, width}) => {

  return (
   <div>
    <Canvas style={{ height, width }}>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <Shirt />
    </Canvas>
    <div className='container-btn'>

      <div className='btn'>
        <button type="button" className="btn btn-primary">Choose color</button>
      </div>
      <div className='btn'>
        <button type="button" className="btn btn-primary">Choose logo</button>
      </div>
    </div>
    </div>
  )
}

export default ShirtMarkUp