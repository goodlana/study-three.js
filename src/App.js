import { Canvas } from 'react-three-fiber';
import BoxGeometry from './components/BoxGeometry';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <Canvas>
      <OrbitControls enableRotate={true} enablePan={false} enableZoom={true} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      {/* BoxGeometry 육면체 */}
      <BoxGeometry />
      {/* CircleGeometry 원(flat circle)*/}
      {/* ConeGeometry 원뿔 */}
      {/* CylinderGeometry 원통(Cylinder) */}
      {/* DodecachedronGeometry 십이면체 */}
      {/* ExtrudeGeometry 사각을 주어 깎아낸 2d 모양 (하트모양)*/}
      {/* IcosahedronGeometry 이십면체 */}
      {/* LatheGemotry 선을 회전 시켜 만든 모양(도자기)*/}
      {/* OctahedronGemotry 팔면체 */}
      {/* ParametricGeometry 2d 격자값을 받아 3D값을 반환하는 함수를 인자로 전달*/}
      {/* PlaneGeometry 2d 평면 (2d plane) */}
      {/* PolyhedronGeometry 다면체 */}
      {/* RingGeometry  중앙이 빈 2D 디스크(disc)*/}
      {/* ShapeGeometry 삼각형으로 이루어진 2d 윤곽선*/}
      {/* SphereGeometry 구(sphere) */}
      {/* TetrahedronGeometry 사면체 */}
      {/* TextGeometry 3d 폰트와 문자열로 만든 3d 텍스트*/}
      {/* TorusGeometry 원환체, 도넛 */}
      {/* TorusKnotGeometry 원환체 매듭*/}
      {/* TubeGeometry 패스를 따라 만들어진 원*/}
      {/* EdgesGeometry 다른 geometry를 받는 헬퍼 객체 */}
      {/* WireframeGeometry 매개변수로 받은 geometry의 모서리 하나당 하나의 선분을 가진 geometry */}
      {/*  */}
    </Canvas>
  );
}

export default App;
