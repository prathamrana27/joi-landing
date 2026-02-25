import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AdaptiveDpr, Sparkles } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

function HeroCore({ reducedMotion }: { reducedMotion: boolean }) {
  const coreRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  const shards = useMemo(
    () =>
      Array.from({ length: reducedMotion ? 18 : 42 }).map((_, index) => ({
        radius: 1.8 + (index % 5) * 0.17,
        angle: (index / 42) * Math.PI * 2,
        y: ((index % 7) - 3.5) * 0.18,
      })),
    [reducedMotion],
  );

  useFrame((state, delta) => {
    if (!coreRef.current || !ringRef.current) return;

    coreRef.current.rotation.y += delta * (reducedMotion ? 0.06 : 0.12);
    coreRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.16;
    coreRef.current.position.y = 1.35 + Math.sin(state.clock.elapsedTime * 0.44) * 0.12;

    ringRef.current.rotation.z -= delta * (reducedMotion ? 0.09 : 0.21);
    ringRef.current.rotation.y += delta * 0.08;
  });

  return (
    <group ref={coreRef}>
      <mesh position={[0, 0, -0.4]}>
        <icosahedronGeometry args={[0.96, 3]} />
        <meshPhysicalMaterial
          color="#7de7cf"
          emissive="#3aceb1"
          emissiveIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.11}
          roughness={0.1}
          metalness={0.3}
        />
      </mesh>

      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.4]}>
        <torusGeometry args={[1.55, 0.02, 24, 180]} />
        <meshStandardMaterial color="#f6bf7a" emissive="#f4a052" emissiveIntensity={2.2} />
      </mesh>

      {shards.map((item, index) => (
        <mesh
          key={`bg-shard-${index}`}
          position={[
            Math.cos(item.angle) * item.radius,
            item.y,
            Math.sin(item.angle) * item.radius - 0.4,
          ]}
          rotation={[item.angle, 0, item.angle * 0.33]}
        >
          <boxGeometry args={[0.08, 0.28, 0.08]} />
          <meshStandardMaterial color="#90b7ff" emissive="#709cff" emissiveIntensity={0.9} />
        </mesh>
      ))}
    </group>
  );
}

function FooterNodes({ reducedMotion }: { reducedMotion: boolean }) {
  const networkRef = useRef<THREE.Group>(null);

  const nodes = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        return {
          x: Math.cos(a) * 2.7,
          y: -2.9 + ((i % 3) - 1) * 0.28,
          z: Math.sin(a) * 1.2 - 1.6,
        };
      }),
    [],
  );

  useFrame((state, delta) => {
    if (!networkRef.current) return;
    networkRef.current.rotation.y += delta * (reducedMotion ? 0.03 : 0.08);
    networkRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.28;
  });

  return (
    <group ref={networkRef}>
      {nodes.map((node, index) => (
        <mesh key={`footer-node-${index}`} position={[node.x, node.y, node.z]}>
          <sphereGeometry args={[0.14, 22, 22]} />
          <meshStandardMaterial color="#9aeede" emissive="#42d3b3" emissiveIntensity={0.78} />
        </mesh>
      ))}
    </group>
  );
}

function GlobalBackground3D() {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <div className="global-3d-bg" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 46 }}
        dpr={[1, reducedMotion ? 1.2 : 1.8]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        {!reducedMotion && <AdaptiveDpr pixelated />}
        <fog attach="fog" args={["#050b13", 7, 21]} />
        <ambientLight intensity={0.44} />
        <directionalLight position={[2, 3, 1]} intensity={1.08} color="#6ee3ca" />
        <pointLight position={[-2.3, 1.8, 2]} intensity={0.95} color="#7faeff" />
        <pointLight position={[1.5, -2.2, 0.5]} intensity={0.8} color="#f2a45a" />
        <HeroCore reducedMotion={reducedMotion} />
        <FooterNodes reducedMotion={reducedMotion} />
        <Sparkles
          count={reducedMotion ? 40 : 140}
          scale={14}
          size={1.9}
          speed={reducedMotion ? 0.12 : 0.35}
          color="#7fdfcc"
        />
      </Canvas>
      <div className="global-bg-vignette" />
    </div>
  );
}

export default GlobalBackground3D;
