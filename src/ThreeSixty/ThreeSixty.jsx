import React, { useState } from 'react'
import * as THREE from 'three';
import { Html } from '@react-three/drei';
import { Canvas, useThree, useLoader, useFrame } from '@react-three/fiber';
import { Popconfirm } from 'antd';
import { useMediaQuery } from "@uidotdev/usehooks";


const store = [
  { name: 'Living', color: 'lightpink', position: [10, 0, -20], url: '/living.jpg', link: 1, description: "Fully fitted and equipped open kitchen, 2 bedrooms Approximately 8 feet inside the front door, the small hallway entrance opened into the living room.", planURL: "/planliving.jpg" },
  { name: 'Bedroom', color: 'lightblue', position: [10, 0, 0], url: '/living3.jpg', link: 2, description: "Enjoy playing the piano, the small hallway entrance opened into the living room.", planURL: "/planliving.jpg" },
  { name: "Bedroom 2", color: "lightgreen", position: [10, 0, 20], url: "/bedroom.jpg", link: 3, description: "Upstairs, you find the master bedroom, a large solarium and access to the pool via a pretty stone walkway.", planURL: "/planliving.jpg" },
  { name: "Living", color: "lightpurple", position: [10, 0, 10], url: "/bedroom2.jpg", link: 0, description: "The master bedroom has an en suite bathroom, dressing room and access to the terrace.", planURL: "/planliving.jpg"},
];

export default function Portals() {
  const [which, set] = useState(0);
  const { link, name, description, planURL, ...props } = store[which];
  const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url));

  return (
    <>
     
        <Dome name={name} onClick={() => set(link)} {...props} texture={maps[which]} />
      
      <SceneInfo  name={name} description={description} planURL={planURL} />
    </>
  );
}
function Dome({ name, position, texture, onClick }) {
  return (
    <group>
      <mesh>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
      <mesh position={position}>
        <boxGeometry args={[2.25, 2, 2]} />
        <meshBasicMaterial color="white" />
        <Html position={[position[0] - .1, position[1] + 1.2, position[2] - 1.4]}>
          <Popconfirm
            title="Are you sure you want to leave?"
            onConfirm={onClick}
            okText="Yes"
            cancelText="No"
          >
            <a href="#" style={{ color: 'black' }}>
              {name}
            </a>
          </Popconfirm>
        </Html>
      </mesh>
    </group>
  );
}


function SceneInfo({ name, description, planURL }) {
  const { viewport } = useThree();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Html
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        position: 'absolute',
        left: isMobile ? '0' : '-44vw',
        width: isMobile ? '90vw' : '10vw',
        padding: isMobile ? '0px' : '25px',
        height: isMobile ? 'auto' : '95vh',

        top: isMobile ? '-42vh' : 'auto',
        opacity: 1,
      }}
      position={[0, 0, 0]}
      center
    >
      <div
        style={{
          textAlign: 'center',
          padding: isMobile ? '5px' : '10px',
          borderRadius: '5px',
          opacity: 1,
        }}
      >
        {!isMobile && <img src={planURL} alt={`${planURL} plan`} style={{ width: '100%' }} />}
        <h2 style={{ fontSize: isMobile ? '1.2rem' : 'inherit' }}>{name}</h2>
        <p style={{ lineHeight: isMobile ? '1.4' : '1.8', fontSize: isMobile ? '0.9rem' : 'inherit' }}>{description}</p>
        {!isMobile && (
          <a href="#" style={{ color: 'black' }}>
            {name}
          </a>
        )}
      </div>
    </Html>
  );
}
