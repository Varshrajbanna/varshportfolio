import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Float, Trail } from '@react-three/drei'
import { Group, Vector3 } from 'three'
import gsap from 'gsap'

const skills = [
  { name: 'Node.js', color: '#83CD29' },
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#007ACC' },
  { name: 'Python', color: '#FFD43B' },
  { name: 'Three.js', color: '#049EF4' },
  { name: 'Express.js', color: '#000000' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'MongoDB', color: '#47A248' },
]

export function FloatingSkills() {
  const groupRef = useRef<Group>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.2
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {skills.map((skill, i) => (
        <SkillObject
          key={skill.name}
          skill={skill}
          index={i}
          total={skills.length}
          isHovered={hoveredSkill === skill.name}
          onHover={() => setHoveredSkill(skill.name)}
          onUnhover={() => setHoveredSkill(null)}
        />
      ))}
    </group>
  )
}

function SkillObject({ 
  skill, 
  index, 
  total, 
  isHovered,
  onHover,
  onUnhover 
}: {
  skill: { name: string; color: string }
  index: number
  total: number
  isHovered: boolean
  onHover: () => void
  onUnhover: () => void
}) {
  const meshRef = useRef<any>(null)
  const radius = 5
  const angle = (index / total) * Math.PI * 2
  const x = Math.cos(angle) * radius
  const z = Math.sin(angle) * radius
  const y = Math.sin(index * 0.5) * 2

  useEffect(() => {
    if (meshRef.current && isHovered) {
      gsap.to(meshRef.current.position, {
        y: y + 0.5,
        duration: 0.3,
        ease: 'power2.out'
      })
      gsap.to(meshRef.current.scale, {
        x: 1.2,
        y: 1.2,
        z: 1.2,
        duration: 0.3,
        ease: 'power2.out'
      })
    } else if (meshRef.current) {
      gsap.to(meshRef.current.position, {
        y,
        duration: 0.3,
        ease: 'power2.out'
      })
      gsap.to(meshRef.current.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }, [isHovered, y])

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <Trail
        width={1}
        length={8}
        color={skill.color}
        attenuation={(t) => t * t}
      >
        <Text
          ref={meshRef}
          position={[x, y, z]}
          fontSize={0.4}
          color={skill.color}
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
          onPointerOver={onHover}
          onPointerOut={onUnhover}
        >
          {skill.name}
        </Text>
      </Trail>
    </Float>
  )
}
