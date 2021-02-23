import React from 'react';

function TorusGeometry(props) {
  const radius = 0.5;
  const tubeRadius = 0.3;
  const radialSegments = 3;
  const tubularSegments = 24;
  return (
    <mesh {...props}>
      <torusGeometry
        args={[radius, tubeRadius, radialSegments, tubularSegments]}
      />
      <meshStandardMaterial color="#cae398" transparent />
    </mesh>
  );
}

export default TorusGeometry;
