import React from 'react';

const DodecahedronGeometry = (props) => {
  return (
    <mesh {...props}>
      <dodecahedronGeometry args={[0.7, 0]} />
      <meshStandardMaterial color="skyblue" transparent />
    </mesh>
  );
};

export default DodecahedronGeometry;
