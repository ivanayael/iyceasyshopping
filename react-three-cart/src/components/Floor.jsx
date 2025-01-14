import { useTexture } from '@react-three/drei';

const Floor = () => {
  const texture = useTexture('/floor-texture.jpg');
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Floor;
