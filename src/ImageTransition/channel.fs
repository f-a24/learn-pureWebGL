precision mediump float;

uniform float uTrans;
uniform sampler2D uTexture0;
uniform sampler2D uTexture1;

varying vec2 vUv;

void main() {
  float r0 = texture2D(uTexture0, vUv + vec2(uTrans, 0.0)).r;
  float g0 = texture2D(uTexture0, vUv ).g;
  float b0 = texture2D(uTexture0, vUv - vec2(uTrans, 0.0)).b;
  vec3 color0 = vec3(r0, g0, b0);

  float r1 = texture2D(uTexture1, vUv + vec2(1.0 - uTrans, 0.0)).r;
  float g1 = texture2D(uTexture1, vUv ).g;
  float b1 = texture2D(uTexture1, vUv - vec2(1.0 - uTrans, 0.0)).b;
  vec3 color1 = vec3(r1, g1, b1);
  
  gl_FragColor = mix(vec4(color0, (1.0 - uTrans)), vec4(color1, 1.0), uTrans);
}
