precision mediump float;

uniform float uTrans;
uniform sampler2D uTexture0;
uniform sampler2D uTexture1;

varying vec2 vUv;

const float tFrag = 1.0 / 512.0;
const float nFrag = 1.0 / 30.0;
const vec2  centerOffset = vec2(256.0, 256.0);

float rnd(vec3 scale, float seed){
    return fract(sin(dot(gl_FragCoord.stp + seed, scale)) * 43758.5453 + seed);
}

void main() {
  vec3  destColor0 = vec3(0.0);
  vec3  destColor1 = vec3(0.0);
  float random = rnd(vec3(12.9898, 78.233, 151.7182), 0.0);
  vec2  fc = vec2(gl_FragCoord.s, 512.0 - gl_FragCoord.t);
  vec2  fcc = fc - centerOffset;
  float totalWeight = 0.0;

  for(float i = 0.0; i <= 30.0; i++){
      float percent = (i + random) * nFrag;
      float weight = percent - percent * percent;
      vec2  t0 = fc - fcc * percent * uTrans * 30.0 * nFrag;
      vec2  t1 = fc - fcc * percent * (1.0 - uTrans) * 30.0 * nFrag;
      destColor0 += texture2D(uTexture0, t0 * tFrag).rgb * weight;
      destColor1 += texture2D(uTexture1, t1 * tFrag).rgb * weight;
      totalWeight += weight;
  }
  gl_FragColor = mix(vec4(destColor0 / totalWeight, (1.0 - uTrans)), vec4(destColor1 / totalWeight, 1.0), uTrans);
}
