import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { usePlane } from '@react-three/cannon'

export default function WHFloor(props) {
  const { nodes, materials } = useGLTF('/floor.glb')

  // Use a separate reference for the physics plane
  const [planeRef] = usePlane(() => ({
    mass: 0,
    rotation: [-Math.PI / 2, 0, 0], // Make the physics plane flat
    position: [8.4, 1.9, 0], // Set the position of the physics plane
    args: [10, 10], // Size of the physics body
    material: {
      restitution: 0.05 // Make the physics plane less bouncy
    }
  }))

  return (
    <group {...props} dispose={null}>
      {/* Physics plane is invisible */}
      <mesh ref={planeRef} visible={false} />

      {/* The visual floor mesh */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.White}
        position={[8.326, 2.5, -20.042]} // Position of the visual floor
        scale={[23.4, 2.5, 0.1]} // Scale of the visual floor
      />
    </group>
  )
}

useGLTF.preload('/floor.glb')
