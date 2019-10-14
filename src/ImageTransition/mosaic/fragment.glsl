precision mediump float;

uniform float uTrans;
uniform sampler2D uTexture0;
uniform sampler2D uTexture1;

varying vec2 vUv;

void main() {
  vec2 uv0 = vUv;
  vec2 uv1 = vUv;
  float moz0 = uTrans * 0.02;
  float moz1 = (1.0 - uTrans) * 0.02;

  if(moz0 > 0.0) {
    uv0 = floor(uv0 / moz0) * moz0 + (moz0 * 0.5);
  }
  if(moz1 > 0.0) {
    uv1 = floor(uv1 / moz1) * moz1 + (moz1 * 0.5);
  }
  vec3 color0 = texture2D(uTexture0, uv0).rgb;
  vec3 color1 = texture2D(uTexture1, uv1).rgb;

  gl_FragColor = mix(vec4(color0, 1.0), vec4(color1, 1.0), uTrans);
}
