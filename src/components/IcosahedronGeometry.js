import React from 'react';

const IcosahedronGeometry = (props) => {
  return (
    <mesh {...props}>
      <icosahedronGeometry args={[0.7, 0]} />
      <meshStandardMaterial color="purple" transparent />
    </mesh>
  );
};

export default IcosahedronGeometry;
