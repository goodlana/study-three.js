import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import { BoxBufferGeometry } from 'three';

const BoxGeometry = (props) => {
  const mesh = useRef();

  // const [active, setActive] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  // });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[1, 1, 1]}
      // scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      // onClick={(e) => setActive(!active)}
      // onPointerOver={(e) => setHover(true)}
      // onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
      {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} /> */}
      <meshStandardMaterial color={'orange'} attach="material" transparent />
    </mesh>
  );
};

export default BoxGeometry;
