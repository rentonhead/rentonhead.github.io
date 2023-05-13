import React, { useRef } from "react";
import { OrbitControls, PerspectiveCamera, RenderTexture,Text } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";


const Cube = () => {
    const textRef = useRef()
    useFrame(state=>(textRef.current.position.x = Math.sin(state.clock.elapsedTime) *2))
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[1, 0,5]} />
          <color attach="background" args={["pink"]} />
          <Text ref={textRef} fontSize={3} color="#555">
            hello!
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
