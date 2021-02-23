import React from 'react';

function OctahedronGemotry(props) {
  return (
    <mesh {...props}>
      <octahedronGeometry args={[0.7]} />
      <meshStandardMaterial color="yellow" transparent />
    </mesh>
  );
}

export default OctahedronGemotry;
