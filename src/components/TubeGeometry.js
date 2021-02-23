import React from 'react';
import * as THREE from 'three';

class CustomSinCurve extends THREE.Curve {
  constructor(scale) {
    super();
    this.scale = scale;
  }
  getPoint(t) {
    const tx = t * 3 - 1.5;
    const ty = Math.sin(2 * Math.PI * t);
    const tz = 0;
    return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
  }
}
function TubeGeometry(props) {
  const path = new CustomSinCurve(0.6);
  const tubularSegments = 20;
  const radius = 0.2;
  const radialSegments = 8;
  const closed = false;

  return (
    <mesh {...props}>
      <tubeGeometry
        args={[path, tubularSegments, radius, radialSegments, closed]}
      />
      <meshStandardMaterial color="#6795a1" transparent />
    </mesh>
  );
}

export default TubeGeometry;
