  import { Canvas } from '@react-three/fiber'
  import React from 'react'
  import Warehouse from './Warehouse'
import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import { Physics } from '@react-three/cannon'


  const WHMarkUp= ()=> {
    return (
    <div style={{}}>
      <Canvas style={{background: "blue", width:"50vw", height: "80vh"}}>
        <OrbitControls />
        <directionalLight color="white" position={[10, 10, 5]} intensity={1} castShadow />
        <OrthographicCamera makeDefault position={[-30, 20, 20]} zoom={13} near={0.1} far={1000} />
        <Physics>

        <Warehouse />
        </Physics>
        
      </Canvas>
      </div>
    )
  }

  export default WHMarkUp