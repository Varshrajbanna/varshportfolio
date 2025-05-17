import { useEffect, useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { Float } from '@react-three/drei'

export function ProfileImage() {
  const texture = useLoader(TextureLoader, '/your-photo.jpg')
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh ref={meshRef} position={[3, 1, 0]}>
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial 
          map={texture}
          transparent
          opacity={0.9}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
    </Float>
  )
}
