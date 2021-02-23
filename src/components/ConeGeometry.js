import React from 'react';

const ConeGeometry = (props) => {
  return (
    <mesh {...props}>
      <coneGeometry args={[0.7, 1.5, 16]} />
      <meshStandardMaterial color="lightgray" transparent />
    </mesh>
  );
};

export default ConeGeometry;
