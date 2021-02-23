import { Canvas, useFrame } from 'react-three-fiber';
import BoxGeometry from './components/BoxGeometry';
import { OrbitControls } from '@react-three/drei';
import CircleGeometry from './components/CircleGeometry';
import SphereGeometry from './components/SphereGeometry';
import ConeGeometry from './components/ConeGeometry';
import CylinderGeometry from './components/CylinderGeometry';
import ExtrudeGeometry from './components/ExtrudeGeometry';
import DodecahedronGeometry from './components/DodecachedronGeometry';
import IcosahedronGeometry from './components/IcosahedronGeometry';
import OctahedronGemotry from './components/OctahedronGemotry';
import PolyhedronGeometry from './components/PolyhedronGeometry';
import LatheGemotry from './components/LatheGemotry';
import ParametricGeometry from './components/ParametricGeometry';
import PlaneGeometry from './components/PlaneGeometry';
import RingGeometry from './components/RingGeometry';
import ShapeGeometry from './components/ShapeGeometry';
import TetrahedronGeometry from './components/TetrahedronGeometry';
import TorusGeometry from './components/TorusGeometry';
import TorusKnotGeometry from './components/TorusKnotGeometry';
import TubeGeometry from './components/TubeGeometry';
import TextGeometry from './components/TextGeometry';

function Content({ children }) {
  // const ref = useRef();

  // useFrame(() => {
  //   ref.current.rotation.x = ref.current.rotation.y += 0.005;
  // });

  // return <group ref={ref}>{children}</group>;
  return <group>{children}</group>;
}

function App() {
  return (
    <Canvas>
      <OrbitControls enableRotate={true} enablePan={false} enableZoom={true} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 3, 5]} angle={-3} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Content>
        {/* BoxGeometry 육면체 */}
        <BoxGeometry position={[-3, 3, -3]} />
        {/* CircleGeometry 원(flat circle)*/}
        <CircleGeometry position={[-1, 3, -3]} />
        {/* ConeGeometry 원뿔 */}
        <ConeGeometry position={[1, 3, -3]} />
        {/* CylinderGeometry 원통(Cylinder) */}
        <CylinderGeometry position={[3, 3, -3]} />
        {/* DodecahedronGeometry 십이면체 */}
        <DodecahedronGeometry position={[5, 3, -3]} />
        {/* ExtrudeGeometry 사각을 주어 깎아낸 2d 모양 (하트모양)*/}
        {/* <ExtrudeGeometry
          position={[1, 3, -10]}
          bevelEnabled
          amount={0.5}
          bevelSegments={0.5}
          steps={2}
          bevelSize={0.1}
          bevelThickness={1}
        /> */}
        {/* IcosahedronGeometry 이십면체 */}
        <IcosahedronGeometry position={[-3, 1, -3]} />
        {/* LatheGemotry 선을 회전 시켜 만든 모양(도자기)*/}
        <LatheGemotry position={[-5, 1, -3]} />
        {/* OctahedronGemotry 팔면체 */}
        <OctahedronGemotry position={[-1, 1, -3]} />
        {/* ParametricGeometry 2d 격자값을 받아 3D값을 반환하는 함수를 인자로 전달*/}
        <ParametricGeometry position={[0, -10, 0]} />
        {/* PlaneGeometry 2d 평면 (2d plane) */}
        <PlaneGeometry position={[1, 1, -3]} />
        {/* PolyhedronGeometry 다면체 */}
        <PolyhedronGeometry position={[3, 1, -3]} />
        {/* RingGeometry  중앙이 빈 2D 디스크(disc)*/}
        <RingGeometry position={[5, 1, -3]} />
        {/* ShapeGeometry 삼각형으로 이루어진 2d 윤곽선*/}
        <ShapeGeometry position={[5, -5, -10]} />
        {/* SphereGeometry 구(sphere) */}
        <SphereGeometry position={[-3, -1, -3]} />
        {/* TetrahedronGeometry 사면체 */}
        <TetrahedronGeometry position={[-1, -1, -3]} />
        {/* TextGeometry 3d 폰트와 문자열로 만든 3d 텍스트*/}
        <TextGeometry />
        {/* TorusGeometry 원환체, 도넛 */}
        <TorusGeometry position={[1, -1, -3]} />
        {/* TorusKnotGeometry 원환체 매듭*/}
        <TorusKnotGeometry position={[3, -1, -3]} />
        {/* TubeGeometry 패스를 따라 만들어진 원*/}
        <TubeGeometry position={[5, -1, -3]} />
      </Content>
    </Canvas>
  );
}

export default App;
