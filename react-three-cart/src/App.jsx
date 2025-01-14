import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Gondola from './components/Gondola';
import Cart from './components/Cart';
import Floor from './components/Floor';

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls />

      {/* Piso */}
      <Floor />

      {/* Góndolas */}
      <Gondola position={[-3, 0, -5]} />
      <Gondola position={[0, 0, -5]} />
      <Gondola position={[3, 0, -5]} />

      {/* Carrito */}
      <Cart targetPosition={[0, 0, -5]} />
    </Canvas>
  );
}

export default App;
