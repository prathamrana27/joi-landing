import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AdaptiveDpr, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

type SceneProps = {
  reducedMotion: boolean;
};

function CoreOrb({ reducedMotion }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const shardGroupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  const shardData = useMemo(
    () =>
      Array.from({ length: reducedMotion ? 12 : 26 }).map((_, index) => ({
        radius: 1.7 + (index % 4) * 0.2,
        angle: (index / 26) * Math.PI * 2,
        y: ((index % 6) - 2.5) * 0.26,
        rotX: (index % 5) * 0.36,
        rotY: (index % 7) * 0.22,
      })),
    [reducedMotion],
  );

  useFrame((state, delta) => {
    if (!groupRef.current || !shardGroupRef.current) return;
    const elapsed = state.clock.elapsedTime;

    groupRef.current.rotation.y += delta * (reducedMotion ? 0.08 : 0.16);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pointer.y * 0.2,
      0.06,
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      pointer.x * 0.18,
      0.06,
    );
    groupRef.current.position.y = Math.sin(elapsed * 0.8) * (reducedMotion ? 0.05 : 0.12);

    shardGroupRef.current.rotation.y -= delta * (reducedMotion ? 0.1 : 0.28);
    shardGroupRef.current.rotation.x = Math.sin(elapsed * 0.4) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <Float speed={reducedMotion ? 0.3 : 0.8} rotationIntensity={0.35} floatIntensity={0.5}>
        <mesh castShadow receiveShadow>
          <icosahedronGeometry args={[1, 3]} />
          <meshPhysicalMaterial
            color="#95edd9"
            emissive="#2ad3b0"
            emissiveIntensity={1.1}
            roughness={0.08}
            metalness={0.3}
            clearcoat={1}
            clearcoatRoughness={0.12}
          />
        </mesh>
        <mesh scale={1.28}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#8de7d3"
            emissive="#1f9f8a"
            emissiveIntensity={0.65}
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>
      </Float>

      <mesh rotation={[Math.PI / 2, 0, 0]} scale={1.9}>
        <torusGeometry args={[1, 0.022, 24, 160]} />
        <meshStandardMaterial emissive="#f6a652" emissiveIntensity={2.6} color="#fbd18a" />
      </mesh>

      <group ref={shardGroupRef}>
        {shardData.map((shard, index) => (
          <mesh
            key={`shard-${index}`}
            position={[
              Math.cos(shard.angle) * shard.radius,
              shard.y,
              Math.sin(shard.angle) * shard.radius,
            ]}
            rotation={[shard.rotX, shard.rotY, 0]}
          >
            <boxGeometry args={[0.09, 0.34, 0.09]} />
            <meshStandardMaterial
              color="#a5bff8"
              emissive="#7aa1ff"
              emissiveIntensity={1.05}
              metalness={0.55}
              roughness={0.22}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function Hero3D({ reducedMotion }: SceneProps) {
  return (
    <div className="hero-scene">
      <Canvas
        dpr={[1, reducedMotion ? 1.1 : 1.8]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        {!reducedMotion && <AdaptiveDpr pixelated />}
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 2]} intensity={1.5} color="#f8ba7a" />
        <pointLight position={[-3, -2, -1]} intensity={1.2} color="#61e6c9" />
        <CoreOrb reducedMotion={reducedMotion} />
        <Sparkles
          count={reducedMotion ? 20 : 80}
          scale={6}
          size={2}
          speed={reducedMotion ? 0.2 : 0.55}
          color="#81e4d0"
        />
      </Canvas>
    </div>
  );
}

export default Hero3D;
