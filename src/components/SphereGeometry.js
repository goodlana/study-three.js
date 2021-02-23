import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

function SphereGeometry(props) {
  // const [active, setActive] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  const radius = 0.7;
  const widthSegments = 15;
  const heightSegments = 8;
  const phiStart = Math.PI * 0.25;
  const phiLength = Math.PI * 1.5;
  const thetaStart = Math.PI * 0.25;
  const thetaLength = Math.PI * 0.5;
  return (
    <mesh {...props}>
      <sphereGeometry
        args={[
          radius,
          widthSegments,
          heightSegments,
          phiStart,
          phiLength,
          thetaStart,
          thetaLength,
        ]}
      />
      <meshStandardMaterial color="#e70aff" transparent />
    </mesh>
  );
}

export default SphereGeometry;
