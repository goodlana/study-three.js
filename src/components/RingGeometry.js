import React from 'react';

function RingGeometry(props) {
  const innerRadius = 0.15;
  const outerRadius = 0.7;

  const thetaSegments = 18;

  const phiSegments = 2;

  const thetaStart = Math.PI * 0.25;

  const thetaLength = Math.PI * 1.5;
  return (
    <mesh {...props}>
      <ringGeometry
        args={[
          innerRadius,
          outerRadius,
          thetaSegments,
          phiSegments,
          thetaStart,
          thetaLength,
        ]}
      />
      <meshStandardMaterial color="#8a7e62" transparent />
    </mesh>
  );
}

export default RingGeometry;
