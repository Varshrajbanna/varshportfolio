import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Stars,
  Float,
  Text3D,
  ScrollControls,
  Html,
} from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function LoadingScreen() {
  return (
    <Html center>
      <div className="text-white text-xl">Loading 3D Scene...</div>
    </Html>
  )
}

export function Scene() {
  return (
    <div className="h-screen w-full bg-black">
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={<LoadingScreen />}>
          {/* Camera */}
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />

          {/* Environment & Lighting */}
          <Environment preset="night" />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <ambientLight intensity={0.2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
            castShadow
          />

          {/* Scroll-based content */}
          <ScrollControls pages={3} damping={0.1}>
            <group position={[0, 0, -5]}>
              <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <Text3D
                  font="/fonts/helvetiker_bold.typeface.json"
                  size={1}
                  height={0.3}
                  curveSegments={12}
                  bevelEnabled
                  bevelThickness={0.03}
                  bevelSize={0.02}
                  bevelOffset={0}
                  bevelSegments={5}
                >
                  Varshraj Singh
                  <meshStandardMaterial
                    attach="material"
                    color="#4A90E2"
                    emissive="#4A90E2"
                    emissiveIntensity={0.5}
                    metalness={0.8}
                    roughness={0.2}
                  />
                </Text3D>
              </Float>
            </group>
          </ScrollControls>

          {/* Postprocessing effects */}
          <EffectComposer enableNormalPass>
            <Bloom
              intensity={1.5}
              luminanceThreshold={0.9}
              luminanceSmoothing={0.025}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
}
