import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';

const BoxGeometry = (props) => {
  const mesh = useRef();
  // const [active, setActive] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
      <meshStandardMaterial color={'orange'} attach="material" transparent />
    </mesh>
  );
};

export default BoxGeometry;
