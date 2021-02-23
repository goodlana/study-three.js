import React from 'react';

const PolyhedronGeometry = (props) => {
  const verticesOfCube = [
    -1,
    -1,
    -1,
    1,
    -1,
    -1,
    1,
    1,
    -1,
    -1,
    1,
    -1,
    -1,
    -1,
    1,
    1,
    -1,
    1,
    1,
    1,
    1,
    -1,
    1,
    1,
  ];
  const indicesOfFaces = [
    2,
    1,
    0,
    0,
    3,
    2,
    0,
    4,
    7,
    7,
    3,
    0,
    0,
    1,
    5,
    5,
    4,
    0,
    1,
    2,
    6,
    6,
    5,
    1,
    2,
    3,
    7,
    7,
    6,
    2,
    4,
    5,
    6,
    6,
    7,
    4,
  ];
  return (
    <mesh {...props}>
      <polyhedronGeometry args={[verticesOfCube, indicesOfFaces, 0.7, 2]} />
      <meshStandardMaterial color="#15e6ca" transparent />
    </mesh>
  );
};

export default PolyhedronGeometry;
