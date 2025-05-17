import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Html, Float, MeshDistortMaterial } from '@react-three/drei'
import { Group, Mesh, Vector3 } from 'three'
import gsap from 'gsap'

const projects = [
  {
    title: 'Project 1',
    description: 'Interactive 3D Web Application',
    color: '#FF6B6B',
    tech: ['React', 'Three.js', 'WebGL']
  },
  {
    title: 'Project 2',
    description: 'AI-Powered Analytics Dashboard',
    color: '#4ECDC4',
    tech: ['Python', 'TensorFlow', 'React']
  },
  {
    title: 'Project 3',
    description: 'Real-time Chat Application',
    color: '#45B7D1',
    tech: ['Node.js', 'Socket.io', 'MongoDB']
  }
]

export function ProjectsGalaxy() {
  const groupRef = useRef<Group>(null)
  const [activeProject, setActiveProject] = useState<number | null>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.3
    }
  })

  return (
    <group ref={groupRef} position={[0, -2, 0]}>
      {projects.map((project, i) => (
        <ProjectCube
          key={project.title}
          project={project}
          index={i}
          total={projects.length}
          isActive={activeProject === i}
          onActivate={() => setActiveProject(i)}
          onDeactivate={() => setActiveProject(null)}
        />
      ))}
    </group>
  )
}

function ProjectCube({ 
  project, 
  index,
  total,
  isActive,
  onActivate,
  onDeactivate
}: { 
  project: { 
    title: string
    description: string
    color: string
    tech: string[]
  }
  index: number
  total: number
  isActive: boolean
  onActivate: () => void
  onDeactivate: () => void
}) {
  const meshRef = useRef<Mesh>(null)
  const radius = 4
  const angle = (index / total) * Math.PI * 2
  const position: [number, number, number] = [
    Math.sin(angle) * radius,
    0,
    Math.cos(angle) * radius
  ]

  useEffect(() => {
    if (meshRef.current) {
      if (isActive) {
        gsap.to(meshRef.current.scale, {
          x: 1.4,
          y: 1.4,
          z: 1.4,
          duration: 0.5,
          ease: 'power3.out'
        })
        gsap.to(meshRef.current.position, {
          y: 1,
          duration: 0.5,
          ease: 'power3.out'
        })
      } else {
        gsap.to(meshRef.current.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.5,
          ease: 'power3.out'
        })
        gsap.to(meshRef.current.position, {
          y: 0,
          duration: 0.5,
          ease: 'power3.out'
        })
      }
    }
  }, [isActive])

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <Box
        ref={meshRef}
        position={position}
        args={[1.5, 1.5, 1.5]}
        onPointerOver={onActivate}
        onPointerOut={onDeactivate}
      >
        <MeshDistortMaterial
          color={project.color}
          speed={3}
          distort={isActive ? 0.6 : 0.2}
          radius={1}
        />
        {isActive && (
          <Html
            position={[0, 2, 0]}
            center
            className="pointer-events-none"
          >
            <div className="bg-white/90 p-4 rounded-lg shadow-xl backdrop-blur-sm w-64 transform scale-75">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Html>
        )}
      </Box>
    </Float>
  )
}
