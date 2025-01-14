import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

const Cart = ({ targetPosition }) => {
  const [position, setPosition] = useState([0, 0, 0]);

  useFrame(() => {
    setPosition((prev) => [
      prev[0] + (targetPosition[0] - prev[0]) * 0.05,
      prev[1] + (targetPosition[1] - prev[1]) * 0.05,
      prev[2] + (targetPosition[2] - prev[2]) * 0.05,
    ]);
  });

  return (
    <mesh position={position}>
      <boxGeometry args={[1, 0.5, 0.5]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export default Cart;
