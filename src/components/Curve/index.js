import React from 'react'
import './index.css'

const Curve = (offsetY) => {
  const color = "black";
  let xPosition = -offsetY.offsetY * 2;
  let xTransform = `translate(${xPosition} -900) scale(1.8)`;
  return (
    <svg  class="curveSVG" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3700 700.3">
    <path className="curve" d="M3380,665c-72,21.73-178.8,43.75-299.16,26-138.83-20.48-164.36-74.5-284.08-84-170.05-13.49-191.55,89.73-364.52,90-188.26.29-242.78-121.87-434.91-102-57.45,5.94-117.32,57.76-251.39,88-109,24.59-137.64,11.83-241.34,2-164-15.54-176.81-80.42-316.76-92-221.41-18.31-309.29,134.16-502.79,94-97.17-20.17-97.72-69.48-198.6-94C242.86,533.79,29.79,653.67,0,671v409H3380" 
      transform={xTransform} fill= {color} position="relative"/></svg>
  )
}

export default Curve