
import React from 'react'
import { fadeIn } from "../variants";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, PerspectiveCamera, } from "@react-three/drei";
import Room from "../components/Room"

function Test() {
  return (
    <div
    variants={fadeIn("left", 0.5)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.3 }}
    className="flex flex-1 items-center w-[100%] h-[70vh]"
  >
    <Canvas >
      <Stage environment="city" >
      <PerspectiveCamera makeDefault position={[2,6, 20]}/>
      <Room/>
      </Stage>
      <OrbitControls enableZoom={false} minDistance={15} />
    </Canvas>
  </div>
  )
}

export default Test

