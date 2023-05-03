import {useState, useRef, Suspense} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import {Points, PointMaterial, Preload} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), {radius: 1.2}));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[
            0, 0, Math.PI / 4
        ]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color='#000000'
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}/>
            </Points>
        </group>
    );
};
const Sphere = () => {
    const mesh = useRef();

    useFrame(() => {
        if (!mesh.current) {
            return;
        }

        mesh.current.rotation.x += 0.000;
        mesh.current.rotation.y += 0.001;
    });

    return (
        <mesh ref={mesh} position={[0, 0, 0]}>
            <hemisphereLight intensity={0.75} groundColor='white'/>
            <spotLight
                position={[20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}/>
            {/* <pointLight intensity={2}/> */}
            <sphereGeometry  args={[1, 32]}/>
            <meshStandardMaterial color='green' wireframe/>
            {/* 477998 */}
        </mesh>
    )

}

const StarsCanvas = () => {
    return (
        <div className='w-full h-screen absolute inset-0 z-[-1]'>
            <Canvas camera={{
                position: [0, 0, 1]
            }}>
                <Suspense fallback={null}>
                    <Stars/>
                    {/* <Sphere/> */}
                </Suspense>

                <Preload all/>
            </Canvas>
        </div>
    );
};

export default StarsCanvas;
