import { useGLTF } from '@react-three/drei';

const Gondola = ({ position }) => {
  const { scene } = useGLTF('/gondola-model.glb');
  return <primitive object={scene} position={position} />;
};

export default Gondola;
