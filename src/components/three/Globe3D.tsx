import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { DEFAULT_LOCATION } from '@/data/constants';

// Globe markers — geographic coordinates converted to 3D positions
const MARKERS = [
  { lat: DEFAULT_LOCATION.lat, lng: DEFAULT_LOCATION.lng, label: DEFAULT_LOCATION.name },
  { lat: 35.68, lng: 139.65, label: 'Tokyo' },
  { lat: 64.15, lng: -21.94, label: 'Reykjavik' },
  { lat: -3.47, lng: -62.22, label: 'Amazon' },
  { lat: 47.92, lng: 106.9, label: 'Ulaanbaatar' },
  { lat: 31.63, lng: -7.99, label: 'Marrakech' },
  { lat: 40.71, lng: -74.01, label: 'New York' },
  { lat: 51.51, lng: -0.13, label: 'London' },
];

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

// Wireframe globe with latitude/longitude grid lines
function GlobeMesh() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  // Latitude lines
  const latLines = useMemo(() => {
    const lines: THREE.BufferGeometry[] = [];
    for (let lat = -60; lat <= 60; lat += 30) {
      const points: THREE.Vector3[] = [];
      for (let lng = 0; lng <= 360; lng += 2) {
        points.push(latLngToVector3(lat, lng, 1));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      lines.push(geo);
    }
    return lines;
  }, []);

  // Longitude lines
  const lngLines = useMemo(() => {
    const lines: THREE.BufferGeometry[] = [];
    for (let lng = 0; lng < 360; lng += 30) {
      const points: THREE.Vector3[] = [];
      for (let lat = -90; lat <= 90; lat += 2) {
        points.push(latLngToVector3(lat, lng, 1));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      lines.push(geo);
    }
    return lines;
  }, []);

  return (
    <group ref={groupRef}>
      {/* Solid dark sphere */}
      <mesh>
        <sphereGeometry args={[0.98, 64, 64]} />
        <meshBasicMaterial color="#0A1020" />
      </mesh>

      {/* Latitude grid */}
      {latLines.map((geo, i) => (
        <lineSegments key={`lat-${i}`} geometry={geo}>
          <lineBasicMaterial color="#22d3ee" transparent opacity={0.15} />
        </lineSegments>
      ))}

      {/* Longitude grid */}
      {lngLines.map((geo, i) => (
        <lineSegments key={`lng-${i}`} geometry={geo}>
          <lineBasicMaterial color="#22d3ee" transparent opacity={0.15} />
        </lineSegments>
      ))}

      {/* Equator — brighter */}
      <mesh>
        <torusGeometry args={[1, 0.003, 8, 128]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.3} />
      </mesh>

      {/* Markers */}
      {MARKERS.map((m, i) => {
        const pos = latLngToVector3(m.lat, m.lng, 1.01);
        return (
          <group key={i} position={[pos.x, pos.y, pos.z]}>
            <mesh>
              <sphereGeometry args={[0.018, 12, 12]} />
              <meshBasicMaterial color="#22d3ee" />
            </mesh>
            {/* Glow ring */}
            <mesh>
              <ringGeometry args={[0.025, 0.04, 24]} />
              <meshBasicMaterial color="#22d3ee" transparent opacity={0.4} side={THREE.DoubleSide} />
            </mesh>
          </group>
        );
      })}

      {/* Atmosphere glow */}
      <mesh scale={1.06}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.04} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

export function Globe3D({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 2.8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <GlobeMesh />
      </Canvas>
    </div>
  );
}
