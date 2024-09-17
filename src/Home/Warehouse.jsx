/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from '@react-three/cannon'

export default function Warehouse(props) {
  const { nodes, materials } = useGLTF('/warehouse.glb')

  const [boxOne] = useBox(() => ({ 
    mass: 1, // 0 mass makes it static
    position: [31.716, 2.5, 0],
    rotation: [0, 0, -Math.PI / 2],
    args: [20, 1, 2.5] // size of the physics body
  }))

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall1.geometry}
        material={nodes.Wall1.material}
        position={[31.716, 2.5, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.5, 1, 20]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall2.geometry}
        material={nodes.Wall2.material}
        position={[-15.037, 2.5, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.5, 1, 20]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall3.geometry}
        material={nodes.Wall3.material}
        position={[8.311, 2.5, -20]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[2.5, 1, 23.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall4.geometry}
        material={nodes.Wall4.material}
        position={[8.51, 2.5, 20]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[2.5, 1, 23.382]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={nodes.Floor.material}
        position={[8.363, 1, 0]}
        scale={[23.394, 0.25, 20]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall1001.geometry}
        material={nodes.Wall1001.material}
        position={[-2.472, 2.031, 15.009]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.8, 1, 5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall1002.geometry}
        material={nodes.Wall1002.material}
        position={[9.987, 2.5, 5.418]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.5, 1, 5.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall4001.geometry}
        material={nodes.Wall4001.material}
        position={[-1.465, 2.5, -0.11]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[2.5, 1, 13.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall4002.geometry}
        material={nodes.Wall4002.material}
        position={[25.629, 2.228, 7.265]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[1, 1, 6.15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[18.415, 3.2, -15.552]}
        scale={[0.06, 2, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[18.415, 3.2, -11.336]}
        scale={[0.06, 2, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[18.415, 3.2, -6.966]}
        scale={[0.06, 2, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={nodes.Cube023.material}
        position={[-4.827, 3.2, -5.326]}
        scale={[0.036, 1.2, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={nodes.Cube024.material}
        position={[-4.827, 3.2, -12.783]}
        scale={[0.036, 1.2, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[-30.958, 1.969, -17.722]}
        scale={[1.349, 1.253, 1.253]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[-21.486, 0.822, -17.714]}
        scale={[1, 0.234, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[-22.649, 2.361, -17.723]}
        scale={[7, 1.4, 1.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[-16.709, 0.5, -18.55]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[-17.959, 0.5, -18.55]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={nodes.Cylinder002.material}
        position={[-24.702, 0.5, -18.55]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={nodes.Cylinder003.material}
        position={[-26.209, 0.5, -18.55]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={nodes.Cylinder004.material}
        position={[-31.346, 0.5, -18.55]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={nodes.Cylinder005.material}
        position={[-31.346, 0.5, -16.884]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={nodes.Cylinder006.material}
        position={[-26.209, 0.5, -16.884]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={nodes.Cylinder007.material}
        position={[-24.702, 0.5, -16.884]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={nodes.Cylinder008.material}
        position={[-17.959, 0.5, -16.884]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={nodes.Cylinder009.material}
        position={[-16.709, 0.5, -16.884]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[-29.638, 2.349, -17.71]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.342, 1.255, 1.255]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[-12.125, 2.474, -17.786]}
        scale={[0.9, 1.05, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
        position={[18.365, 3.457, -14.347]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.15, 0.1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={nodes.Cube008.material}
        position={[22.493, 1.237, -14.347]}
        scale={[6, 0.1, 0.15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={nodes.Cube009.material}
        position={[16.81, 3.457, -14.347]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[2.15, 0.1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={nodes.Cube010.material}
        position={[17.597, 5.527, -14.347]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.8, 0.1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={nodes.Cube011.material}
        position={[17.706, 1.745, -14.869]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.55, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={nodes.Cube013.material}
        position={[15.217, 2.191, -18.716]}
        scale={[2.65, 0.1, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={nodes.Cube014.material}
        position={[17.245, 2.191, -16.402]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1.75, 0.1, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={nodes.Cube018.material}
        position={[16.746, 1.745, -14.869]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.55, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={nodes.Cube019.material}
        position={[16.746, 1.745, -16.985]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.55, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={nodes.Cube020.material}
        position={[17.706, 1.745, -16.985]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.55, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={nodes.Cube012.material}
        position={[0.614, 2.191, -16.69]}
        scale={[2.65, 0.1, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={nodes.Cube015.material}
        position={[2.687, 2.191, -13.576]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[2.65, 0.1, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={nodes.Cube016.material}
        position={[1.673, 2.191, -10.425]}
        scale={[1.628, 0.1, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={nodes.Cube017.material}
        position={[0.614, 2.191, -3.086]}
        scale={[2.65, 0.1, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={nodes.Cube021.material}
        position={[2.687, 2.191, -6.237]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[2.65, 0.1, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={nodes.Cube022.material}
        position={[1.673, 2.191, -9.35]}
        scale={[1.628, 0.1, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube084.geometry}
        material={nodes.Cube084.material}
        position={[29.958, 2.191, 14.68]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[4.1, 0.1, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube085.geometry}
        material={nodes.Cube085.material}
        position={[25.795, 2.191, 18.044]}
        scale={[3.5, 0.1, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube086.geometry}
        material={nodes.Cube086.material}
        position={[18.88, 2.191, 18.044]}
        scale={[3.5, 0.1, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube087.geometry}
        material={nodes.Cube087.material}
        position={[12, 2.191, 18.044]}
        scale={[3.5, 0.1, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube088.geometry}
        material={nodes.Cube088.material}
        position={[5.629, 2.191, 15.317]}
        rotation={[0, -0.795, 0]}
        scale={[3.5, 0.1, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={nodes.Cube025.material}
        position={[-10.547, 1.742, 6.4]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={nodes.Cube026.material}
        position={[-9.283, 1.742, 6.4]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={nodes.Cube027.material}
        position={[-6.578, 1.742, 6.4]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={nodes.Cube028.material}
        position={[-7.843, 1.742, 6.4]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={nodes.Cube029.material}
        position={[-7.843, 1.742, 4.627]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube030.geometry}
        material={nodes.Cube030.material}
        position={[-16.056, 1.767, -17.825]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={nodes.Cube031.material}
        position={[-9.283, 1.742, 4.627]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={nodes.Cube032.material}
        position={[-10.547, 1.742, 4.627]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={nodes.Cube033.material}
        position={[-7.843, 1.742, 8.708]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        material={nodes.Cube034.material}
        position={[-6.578, 1.742, 8.708]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={nodes.Cube035.material}
        position={[-9.283, 1.742, 8.708]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036.geometry}
        material={nodes.Cube036.material}
        position={[-10.547, 1.742, 8.708]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube037.geometry}
        material={nodes.Cube037.material}
        position={[-10.553, 2.656, 8.732]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038.geometry}
        material={nodes.Cube038.material}
        position={[-9.279, 2.656, 8.722]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube039.geometry}
        material={nodes.Cube039.material}
        position={[-6.572, 2.656, 8.685]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube040.geometry}
        material={nodes.Cube040.material}
        position={[-7.856, 2.656, 8.704]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube041.geometry}
        material={nodes.Cube041.material}
        position={[-10.548, 2.656, 4.643]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube042.geometry}
        material={nodes.Cube042.material}
        position={[-9.279, 2.656, 4.651]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube043.geometry}
        material={nodes.Cube043.material}
        position={[-1.342, 4.043, -6.184]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube044.geometry}
        material={nodes.Cube044.material}
        position={[-2.061, 4.043, -6.163]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube045.geometry}
        material={nodes.Cube045.material}
        position={[-7.837, 2.656, 6.436]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube046.geometry}
        material={nodes.Cube046.material}
        position={[-6.572, 2.656, 6.436]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube047.geometry}
        material={nodes.Cube047.material}
        position={[-9.298, 2.656, 6.436]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube048.geometry}
        material={nodes.Cube048.material}
        position={[-10.524, 2.656, 6.436]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube049.geometry}
        material={nodes.Cube049.material}
        position={[-0.208, 4.043, -6.184]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube050.geometry}
        material={nodes.Cube050.material}
        position={[-0.208, 2.743, -6.184]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube051.geometry}
        material={nodes.Cube051.material}
        position={[-1.701, 2.743, -6.184]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube052.geometry}
        material={nodes.Cube052.material}
        position={[-3.088, 2.743, -6.184]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube053.geometry}
        material={nodes.Cube053.material}
        position={[-2.419, 2.743, -6.184]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube054.geometry}
        material={nodes.Cube054.material}
        position={[-0.062, 4.043, -13.413]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube055.geometry}
        material={nodes.Cube055.material}
        position={[-0.963, 2.961, -6.163]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube056.geometry}
        material={nodes.Cube056.material}
        position={[-3.008, 4.043, -6.163]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube075.geometry}
        material={nodes.Cube075.material}
        position={[20.577, 2.868, 7.739]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube076.geometry}
        material={nodes.Cube076.material}
        position={[21.522, 2.868, 7.739]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube077.geometry}
        material={nodes.Cube077.material}
        position={[23.494, 2.868, 7.739]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube078.geometry}
        material={nodes.Cube078.material}
        position={[22.55, 2.868, 7.739]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube079.geometry}
        material={nodes.Cube079.material}
        position={[26.417, 2.868, 7.739]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube080.geometry}
        material={nodes.Cube080.material}
        position={[27.362, 2.868, 7.739]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube081.geometry}
        material={nodes.Cube081.material}
        position={[25.39, 2.868, 7.739]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube082.geometry}
        material={nodes.Cube082.material}
        position={[24.445, 2.868, 7.739]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube089.geometry}
        material={nodes.Cube089.material}
        position={[4.412, 2.656, 6.436]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube090.geometry}
        material={nodes.Cube090.material}
        position={[5.638, 2.656, 6.436]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube092.geometry}
        material={nodes.Cube092.material}
        position={[4.383, 2.656, 8.732]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube093.geometry}
        material={nodes.Cube093.material}
        position={[4.389, 1.742, 8.708]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube094.geometry}
        material={nodes.Cube094.material}
        position={[5.653, 1.742, 8.708]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube095.geometry}
        material={nodes.Cube095.material}
        position={[8.358, 1.742, 8.708]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube096.geometry}
        material={nodes.Cube096.material}
        position={[7.093, 1.742, 8.708]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube097.geometry}
        material={nodes.Cube097.material}
        position={[7.093, 1.742, 6.4]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube098.geometry}
        material={nodes.Cube098.material}
        position={[8.358, 1.742, 6.4]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube099.geometry}
        material={nodes.Cube099.material}
        position={[5.653, 1.742, 6.4]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube100.geometry}
        material={nodes.Cube100.material}
        position={[4.389, 1.742, 6.4]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube091.geometry}
        material={nodes.Cube091.material}
        position={[23.639, 1.849, 2.809]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube101.geometry}
        material={nodes.Cube101.material}
        position={[22.264, 1.849, 2.809]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube102.geometry}
        material={nodes.Cube102.material}
        position={[25.073, 1.849, 2.809]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube103.geometry}
        material={nodes.Cube103.material}
        position={[26.312, 1.849, 2.809]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube104.geometry}
        material={nodes.Cube104.material}
        position={[22.269, 2.491, 2.801]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube105.geometry}
        material={nodes.Cube105.material}
        position={[22.269, 2.491, 1.183]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube106.geometry}
        material={nodes.Cube106.material}
        position={[22.264, 1.849, 1.191]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube107.geometry}
        material={nodes.Cube107.material}
        position={[23.646, 1.849, 1.191]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube108.geometry}
        material={nodes.Cube108.material}
        position={[23.652, 2.491, 1.183]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube109.geometry}
        material={nodes.Cube109.material}
        position={[25.062, 2.491, 1.183]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube110.geometry}
        material={nodes.Cube110.material}
        position={[25.057, 1.849, 1.191]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube111.geometry}
        material={nodes.Cube111.material}
        position={[26.444, 1.849, 1.191]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube112.geometry}
        material={nodes.Cube112.material}
        position={[26.449, 2.491, 1.183]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube113.geometry}
        material={nodes.Cube113.material}
        position={[23.652, 1.702, -1.998]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube114.geometry}
        material={nodes.Cube114.material}
        position={[23.652, 2.205, -1.998]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube115.geometry}
        material={nodes.Cube115.material}
        position={[23.652, 3.214, -1.998]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube116.geometry}
        material={nodes.Cube116.material}
        position={[23.652, 2.711, -1.998]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube117.geometry}
        material={nodes.Cube117.material}
        position={[7.049, 2.656, 6.436]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube118.geometry}
        material={nodes.Cube118.material}
        position={[7.049, 2.656, 8.714]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube119.geometry}
        material={nodes.Cube119.material}
        position={[22.264, 1.849, -0.508]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube120.geometry}
        material={nodes.Cube120.material}
        position={[22.269, 2.491, -0.516]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube121.geometry}
        material={nodes.Cube121.material}
        position={[23.653, 2.491, -0.516]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube122.geometry}
        material={nodes.Cube122.material}
        position={[23.648, 1.849, -0.508]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube123.geometry}
        material={nodes.Cube123.material}
        position={[25.073, 1.849, -0.503]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube124.geometry}
        material={nodes.Cube124.material}
        position={[22.208, 2.711, -1.998]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube125.geometry}
        material={nodes.Cube125.material}
        position={[22.208, 2.205, -1.998]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube126.geometry}
        material={nodes.Cube126.material}
        position={[22.208, 1.702, -1.998]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube127.geometry}
        material={nodes.Cube127.material}
        position={[26.422, 1.849, -0.503]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube128.geometry}
        material={nodes.Cube128.material}
        position={[25.073, 1.849, -2.013]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube129.geometry}
        material={nodes.Cube129.material}
        position={[26.492, 1.702, -1.998]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube130.geometry}
        material={nodes.Cube130.material}
        position={[19.07, 4.939, -16.471]}
        scale={[0.25, 0.125, 0.25]}
      />
      <mesh
      ref={boxOne}
        castShadow
        receiveShadow
        geometry={nodes.Cube131.geometry}
        material={nodes.Cube131.material}
        position={[19.065, 10.228, -12.361]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube132.geometry}
        material={nodes.Cube132.material}
        position={[20.139, 4.254, -16.471]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube133.geometry}
        material={nodes.Cube133.material}
        position={[21.057, 4.254, -16.471]}
        scale={[0.125, 0.25, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube134.geometry}
        material={nodes.Cube134.material}
        position={[21.618, 4.254, -16.471]}
        scale={[0.125, 0.25, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube135.geometry}
        material={nodes.Cube135.material}
        position={[19.421, 2.255, -16.471]}
        scale={[0.125, 0.25, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube136.geometry}
        material={nodes.Cube136.material}
        position={[18.861, 2.255, -16.471]}
        scale={[0.125, 0.25, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube137.geometry}
        material={nodes.Cube137.material}
        position={[19.065, 4.406, -16.463]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube057.geometry}
        material={nodes.Cube057.material}
        position={[22.278, 1.357, -2.029]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube058.geometry}
        material={nodes.Cube058.material}
        position={[23.628, 1.357, -2.029]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube059.geometry}
        material={nodes.Cube059.material}
        position={[26.411, 1.357, -2.029]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube060.geometry}
        material={nodes.Cube060.material}
        position={[25.061, 1.357, -2.029]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube061.geometry}
        material={nodes.Cube061.material}
        position={[25.061, 1.357, -0.495]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube062.geometry}
        material={nodes.Cube062.material}
        position={[26.411, 1.357, -0.495]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube063.geometry}
        material={nodes.Cube063.material}
        position={[23.628, 1.357, -0.495]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube064.geometry}
        material={nodes.Cube064.material}
        position={[22.278, 1.357, -0.495]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube065.geometry}
        material={nodes.Cube065.material}
        position={[22.278, 1.357, 1.182]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube066.geometry}
        material={nodes.Cube066.material}
        position={[23.628, 1.357, 1.182]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube067.geometry}
        material={nodes.Cube067.material}
        position={[26.411, 1.357, 1.182]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube068.geometry}
        material={nodes.Cube068.material}
        position={[25.061, 1.357, 1.182]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube069.geometry}
        material={nodes.Cube069.material}
        position={[25.061, 1.357, 2.774]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube070.geometry}
        material={nodes.Cube070.material}
        position={[26.411, 1.357, 2.774]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube071.geometry}
        material={nodes.Cube071.material}
        position={[23.628, 1.357, 2.774]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube072.geometry}
        material={nodes.Cube072.material}
        position={[22.278, 1.357, 2.774]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.1, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube073.geometry}
        material={nodes.Cube073.material}
        position={[25.615, 1.717, 8.399]}
        scale={[6, 0.5, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube074.geometry}
        material={nodes.Cube074.material}
        position={[25.615, 2.372, 7.728]}
        scale={[6, 0.25, 0.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube083.geometry}
        material={nodes.Cube083.material}
        position={[26.257, 4.523, 13.82]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.05, 0.4, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={nodes.Cylinder010.material}
        position={[26.254, 3.751, 13.982]}
        scale={[0.183, 0.593, 0.183]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube138.geometry}
        material={nodes.Cube138.material}
        position={[26.261, 2.218, 13.641]}
        scale={[1, 1, 0.55]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube139.geometry}
        material={nodes.Cube139.material}
        position={[22.944, 2.218, 13.641]}
        scale={[1, 1, 0.55]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube140.geometry}
        material={nodes.Cube140.material}
        position={[22.939, 4.523, 13.82]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.05, 0.4, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube141.geometry}
        material={nodes.Cube141.material}
        position={[19.596, 4.523, 13.82]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.05, 0.4, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube142.geometry}
        material={nodes.Cube142.material}
        position={[19.6, 2.218, 13.641]}
        scale={[1, 1, 0.55]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={nodes.Cylinder011.material}
        position={[22.936, 3.751, 13.982]}
        scale={[0.183, 0.593, 0.183]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={nodes.Cylinder012.material}
        position={[19.593, 3.751, 13.982]}
        scale={[0.183, 0.593, 0.183]}
      />
    </group>
  )
}

useGLTF.preload('/warehouse.glb')