import {useState, useRef, Suspense} from "react";
import { SectionWrapper } from "../hoc";
import {Canvas, useFrame} from "@react-three/fiber";
import {Points, PointMaterial, Preload, useGLTF, OrbitControls} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(200), {radius: 12}));

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
                    color='#bbb'
                    size={0.08}
                    sizeAttenuation={true}
                    depthWrite={false}/>
            </Points>
        </group>
    );
};

const Voxel = () => {
    const mesh = useRef();
    const voxel = useGLTF("./Pikachu2.gltf");

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
            <primitive
                object={voxel.scene}
                scale={0.1}
                position={[0,-2.5,0]}
                rotation={[0, 2.5, 0]}
            />
        </mesh>
    )

}

const CallToAction = () => {
    return (
        <div className="w-screen h-screen flex bg-gray-900 absolute left-0">
            <div className='w-full'>
                <Canvas camera={{
                    position: [0, 0, 5]
                }}>
                    <Suspense fallback={null}>
                        <OrbitControls
                            enableZoom={false}
                            // maxPolarAngle={Math.PI / 2}
                            // minPolarAngle={Math.PI / 2}
                            />
                    {/* <Voxel/> */}
                    <Stars/>
                    </Suspense>

                    <Preload all/>
                </Canvas>
            </div>

        </div>
    );
};

export default SectionWrapper(CallToAction, "cta");
