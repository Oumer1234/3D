import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const {progress} = useProgress();
  return (
   <Html>
    <span className="canvas-load"></span>
    <p
      style={{
        fontSize: 105,
        color: '#915EFF',
        frontWeight: 800,
        marginTop: 40,
        
      }}
    >{progress.toFixed(2)}%</p>
   </Html>
  )
}

export default Loader