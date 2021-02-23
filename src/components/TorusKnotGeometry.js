import React from 'react';

function TorusKnotGeometry(props) {
  const radius = 0.4;
  const tubeRadius = 0.2;
  const radialSegments = 8;
  const tubularSegments = 64;
  const p = 2;
  const q = 3;
  return (
    <mesh {...props}>
      <torusKnotGeometry
        args={[radius, tubeRadius, tubularSegments, radialSegments, p, q]}
      />
      <meshStandardMaterial color="#5040ff" transparent />
    </mesh>
  );
}

export default TorusKnotGeometry;
