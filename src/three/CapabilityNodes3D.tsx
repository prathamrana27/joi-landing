import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AdaptiveDpr, Line, Sparkles } from "@react-three/drei";
import * as THREE from "three";

type SceneProps = {
  reducedMotion: boolean;
};

function NodeNetwork({ reducedMotion }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  const nodes = useMemo(
    () =>
      Array.from({ length: 9 }).map((_, i) => {
        const angle = (i / 9) * Math.PI * 2;
        return new THREE.Vector3(Math.cos(angle) * 1.85, ((i % 3) - 1) * 0.65, Math.sin(angle) * 1.85);
      }),
    [],
  );

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * (reducedMotion ? 0.09 : 0.22);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pointer.y * 0.22,
      0.06,
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      -pointer.x * 0.2,
      0.06,
    );
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * (reducedMotion ? 0.04 : 0.1);
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <octahedronGeometry args={[0.54, 2]} />
        <meshStandardMaterial
          color="#9eeede"
          emissive="#39ceb0"
          emissiveIntensity={0.8}
          roughness={0.16}
          metalness={0.42}
        />
      </mesh>

      {nodes.map((node, index) => (
        <group key={`node-${index}`}>
          <mesh position={node.toArray()}>
            <sphereGeometry args={[0.16, 24, 24]} />
            <meshStandardMaterial
              color="#f6c788"
              emissive="#f2a14f"
              emissiveIntensity={0.9}
              metalness={0.24}
              roughness={0.2}
            />
          </mesh>
          <Line
            points={[
              [0, 0, 0],
              [node.x, node.y, node.z],
            ]}
            color="#73d9c4"
            lineWidth={1}
            transparent
            opacity={0.7}
          />
        </group>
      ))}
    </group>
  );
}

function CapabilityNodes3D({ reducedMotion }: SceneProps) {
  return (
    <div className="network-scene">
      <Canvas
        dpr={[1, reducedMotion ? 1.1 : 1.75]}
        camera={{ position: [0, 0, 5.2], fov: 48 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        {!reducedMotion && <AdaptiveDpr pixelated />}
        <ambientLight intensity={0.65} />
        <pointLight position={[3.5, 2, 2]} intensity={1.6} color="#65e8c7" />
        <pointLight position={[-2.5, -1.5, 1]} intensity={1.05} color="#f3aa63" />
        <NodeNetwork reducedMotion={reducedMotion} />
        <Sparkles
          count={reducedMotion ? 18 : 60}
          scale={5}
          size={2.4}
          speed={reducedMotion ? 0.24 : 0.45}
          color="#85dcca"
        />
      </Canvas>
    </div>
  );
}

export default CapabilityNodes3D;
