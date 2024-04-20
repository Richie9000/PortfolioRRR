import React, { useState } from 'react'
import * as THREE from 'three';
import { Html } from '@react-three/drei';
import { Canvas, useThree, useLoader, useFrame } from '@react-three/fiber';
import { Popconfirm } from 'antd';
import { useMediaQuery } from "@uidotdev/usehooks";


const store = [
  { linkname: 'Studio', displayname:"Living", color: 'lightpink', position: [10, 0, -20], url: '/living.jpg', link: 1,  description: {
    english: "Fully fitted and equipped open kitchen, 2 bedrooms Approximately 8 feet inside the front door, the small hallway entrance opened into the living room.",
    spanish: "Cocina abierta totalmente equipada, 2 dormitorios. Aproximadamente a 8 pies de la puerta principal, la pequeña entrada del pasillo se abre a la sala de estar."
  },planURL: "/planliving.jpg" },
  { linkname: 'Master Bedroom', displayname:"Studio",color: 'lightblue', position: [10, 0, 0], url: '/living3.jpg', link: 2, description: {
    english: "Studio includes various amenities, ennjoy playing the piano, the small hallway entrance opened into the living room.",
    spanish: "El studio incluye varias amenidades, disfruta de tocar el piano en el ambiente principal."
  }, planURL: "/planliving.jpg" },
  { linkname: "Bedroom", displayname:"Master Bedroom", color: "lightgreen", position: [10, 0, 20], url: "/bedroom.jpg", link: 3, description: {
    english: "Upstairs, you find the master bedroom, a large terrace and access to the pool via a pretty stone walkway.",
    spanish: "En el segundo piso se encuentra la recamara principal, una terraza con acceso a la piscina a traves de un camino de rocas."
  }, planURL: "/planliving.jpg" },
  { linkname: "Living", displayname:"Bedroom", color: "lightpurple", position: [10, 0, 10], url: "/bedroom2.jpg", link: 0, description: "The master bedroom has an en suite bathroom, dressing room and access to the terrace.", planURL: "/planliving.jpg"},
];


export default function Portals({language}) {
  const [which, set] = useState(0);
  const { link, linkname, displayname, description, planURL, ...props } = store[which];
  const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url));

  return (
    <>
     
        <Dome  linkname={linkname} onClick={() => set(link)} {...props} texture={maps[which]} />
      
      <SceneInfo  displayname={displayname} description={description} planURL={planURL} language={language}/>
    </>
  );
}
function Dome({ linkname, position, texture, onClick }) {
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
            title="Next Room?"
            onConfirm={onClick}
            okText="Yes"
            cancelText="No"
          >
            <a href="#" style={{ color: 'black' }}>
              {linkname}
            </a>
          </Popconfirm>
        </Html>
      </mesh>
    </group>
  );
}

function SceneInfo({ displayname, description, planURL, language }) {
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
        padding: isMobile ? '10px' : '25px',
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
          marginTop: isMobile ? "25vh" : "1vh"
        }}
      >
        {planURL && (
          <img
            src={planURL}
            alt={`${planURL} plan`}
            style={{
              width: isMobile ? '80%' : '100%',
              height: isMobile ? 'auto' : 'auto',
              marginBottom: isMobile ? '10px' : '0',
            }}
          />
        )}
        <h2 style={{ fontSize: isMobile ? '1.2rem' : 'inherit' }}>{displayname}</h2>
        <p style={{ marginTop: "5vh", lineHeight: isMobile ? '1.4' : '1.8', fontSize: isMobile ? '0.9rem' : 'inherit' }}>
          {language === 'english' ? description.english : description.spanish}
        </p>
      </div>
    </Html>
  );
}