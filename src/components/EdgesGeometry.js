import React from 'react';

const EdgesGeometry = (props) => {
  return (
    <mesh {...props}>
      <edgesGeometry args={[0.7, 0.7, 1.5, 12]} />
      <meshStandardMaterial color="lightgreen" transparent />
    </mesh>
  );
};

export default EdgesGeometry;
