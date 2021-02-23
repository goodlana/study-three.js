import React from 'react';
import * as THREE from 'three';

function LatheGemotry(props) {
  const points = [];
  for (let i = 0; i < 3; ++i) {
    points.push(
      new THREE.Vector2(Math.sin(i * 0.2) * 1 + 0.3, (i - 0.5) * 0.8),
    );
  }
  return (
    <mesh {...props}>
      <latheGeometry args={[points]} />
      <meshStandardMaterial color="#246159" transparent />
    </mesh>
  );
}

export default LatheGemotry;
