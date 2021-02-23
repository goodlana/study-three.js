import React from 'react';

function TextGeometry(props) {
  const text = 'love';
  return (
    <mesh {...props}>
      <textGeometry
        args={[
          text,
          {
            // font: font,
            size: 3,
            height: 0.2,
            curveSegments: 17,
            bevelEnabled: true,
            bevelThickness: 0.15,
            bevelSize: 0.24,
            bevelSegments: 5,
          },
        ]}
      />
      <meshStandardMaterial color="#587856" transparent />
    </mesh>
  );
}

export default TextGeometry;
