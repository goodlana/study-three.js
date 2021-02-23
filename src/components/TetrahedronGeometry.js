import React from 'react';

function TetrahedronGeometry(props) {
  return (
    <mesh {...props}>
      <tetrahedronGeometry args={[1]} />
      <meshStandardMaterial color="#587856" transparent />
    </mesh>
  );
}

export default TetrahedronGeometry;
