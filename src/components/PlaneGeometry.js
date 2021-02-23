import React from 'react';

function PlaneGeometry(props) {
  return (
    <mesh {...props}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial color="#7097cf" transparent />
    </mesh>
  );
}

export default PlaneGeometry;
