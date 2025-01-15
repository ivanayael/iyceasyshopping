import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// Componente para cargar y renderizar un modelo GLB
function Model({ url, position }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} position={position} />;
}

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Modelo 1 */}
        <Model url="/models/cart-model.glb" position={[-1.5, 0, 0]} />

        {/* Modelo 2 */}
        <Model url="/models/gondola-model.glb" position={[1.5, 0, 0]} />

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;

// Nota: Recuerda colocar los archivos product1.glb y product2.glb dentro de la carpeta public/models.
