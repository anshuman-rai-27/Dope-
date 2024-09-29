// import  FractalDotGrid  from "@/components/common/faractualgrid"

import FractalDotGrid from "./bg"

function FractalDotGridExample() {
  return (
    <div className="h-[80vh] w-screen absolute -z-10">
      <FractalDotGrid
        dotSize={4}
        dotSpacing={20}
        dotOpacity={0.3}
        waveIntensity={30}
        waveRadius={200}
        dotColor="rgba(100, 100, 255, 1)"
        glowColor="rgba(100, 100, 255, 1)"
        enableNoise={true}
        noiseOpacity={0.03}
        enableMouseGlow={true}
        initialPerformance="medium"
      />
    </div>
  )
}

export default FractalDotGridExample
