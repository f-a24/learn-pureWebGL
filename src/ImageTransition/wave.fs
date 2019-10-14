precision mediump float;

uniform float uTrans;
uniform sampler2D uTexture0;
uniform sampler2D uTexture1;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  float trans0 = uTrans;
  float trans1 = 1.0 - uTrans;

  float t0 = trans0 * 6.0;
  float t1 = trans1 * 6.0;
  float amount0 = trans0 * 0.2;
  float amount1 = trans1 * 0.2;

  vec2 uvOffset0 = vec2(cos(uv.y * 20.0 + t0), sin(uv.x * 10.0 - t0)) * amount0;
  vec2 uvOffset1 = vec2(cos(uv.y * 20.0 + t1), sin(uv.x * 10.0 - t1)) * amount1;
  vec3 color0 = texture2D(uTexture0, uv + uvOffset0).rgb;
  vec3 color1 = texture2D(uTexture1, uv + uvOffset1).rgb;

  gl_FragColor = mix(vec4(color0, 1.0), vec4(color1, 1.0), uTrans);
}
