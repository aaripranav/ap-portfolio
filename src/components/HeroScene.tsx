import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Torus, Stars } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.15;
      ref.current.rotation.y += dt * 0.25;
    }
  });
  return (
    <>
      <Icosahedron ref={ref} args={[1.4, 1]}>
        <meshStandardMaterial
          color="#00F5FF"
          emissive="#00F5FF"
          emissiveIntensity={0.6}
          wireframe
        />
      </Icosahedron>
      <Icosahedron args={[1.42, 0]}>
        <meshBasicMaterial color="#7B2EFF" wireframe transparent opacity={0.25} />
      </Icosahedron>
    </>
  );
}

function Rings() {
  const g = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (g.current) {
      g.current.rotation.x += dt * 0.1;
      g.current.rotation.z += dt * 0.05;
    }
  });
  return (
    <group ref={g}>
      {[2.2, 2.7, 3.2].map((r, i) => (
        <Torus key={i} args={[r, 0.005, 8, 128]} rotation={[Math.PI / 2 + i * 0.3, i * 0.5, 0]}>
          <meshBasicMaterial color={i === 1 ? "#7B2EFF" : "#00F5FF"} transparent opacity={0.55} />
        </Torus>
      ))}
    </group>
  );
}

function Orbiters() {
  const orbitRef = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y += dt * 0.16;
      orbitRef.current.rotation.x += dt * 0.04;
    }
  });

  return (
    <group ref={orbitRef}>
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 3) * Math.PI * 2) * 2.55,
            Math.sin((i / 3) * Math.PI * 2) * 0.6,
            Math.sin((i / 3) * Math.PI * 2) * 0.9,
          ]}
        >
          <sphereGeometry args={[0.08, 14, 14]} />
          <meshStandardMaterial
            color={i === 1 ? "#00F5FF" : "#7B2EFF"}
            emissive={i === 1 ? "#00F5FF" : "#7B2EFF"}
            emissiveIntensity={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#00F5FF" />
        <pointLight position={[-5, -3, 2]} intensity={1} color="#7B2EFF" />
        <Float floatIntensity={1.2} rotationIntensity={0.6} speed={1.2}>
          <Core />
        </Float>
        <Rings />
        <Orbiters />
        <Stars radius={50} depth={30} count={1500} factor={2} fade speed={0.5} />
      </Suspense>
    </Canvas>
  );
}
