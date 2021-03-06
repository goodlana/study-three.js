import React from 'react';

const CylinderGeometry = (props) => {
  return (
    <mesh {...props}>
      <cylinderGeometry args={[0.7, 0.7, 1.5, 12]} />
      <meshStandardMaterial color="lightgreen" transparent />
    </mesh>
  );
};

export default CylinderGeometry;
