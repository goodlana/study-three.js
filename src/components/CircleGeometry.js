import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';

const CircleGeometry = (props) => {
  // useFrame(() => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  // });

  // const [active, setActive] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  // });

  return (
    <mesh {...props}>
      <circleGeometry args={[0.7, 24, 7]} />
      <meshStandardMaterial color="red" transparent />
    </mesh>
  );
};

export default CircleGeometry;
