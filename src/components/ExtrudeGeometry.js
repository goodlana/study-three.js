import React, { useMemo } from 'react';
import * as THREE from 'three';

function ExtrudeGeometry(props) {
  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    const x = 0;
    const y = 0;
    shape.moveTo(x + 2.5, y + 5);
    shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
    shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
    shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
    shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
    shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
    shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);
    return shape;
  }, []);

  return (
    <mesh>
      <extrudeGeometry attach="geometry" args={[shape, props]} />
      <meshStandardMaterial color="lightgreen" transparent />
    </mesh>
  );
}

export default ExtrudeGeometry;
