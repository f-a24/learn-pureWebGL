precision mediump float;

uniform float uTrans;
uniform sampler2D uTexture0;
uniform sampler2D uTexture1;
uniform sampler2D uDisp;

varying vec2 vUv;

float parabola( float x, float k ) {
  return pow( 4. * x * ( 1. - x ), k );
}

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

		// uniform float time;
		// uniform float progress;
		// uniform float width;
		// uniform float scaleX;
		// uniform float scaleY;
		// uniform float transition;
		// uniform float radius;
		// uniform float swipe;
		// uniform sampler2D texture1;
		// uniform sampler2D texture2;
		// uniform sampler2D displacement;
		// uniform vec4 resolution;
		// varying vec2 vUv;
		// varying vec4 vPosition;

		  // float dt = parabola(progress, 1.);
		  // vec4 noise = texture2D(displacement, fract(vUv+time*0.04));
		  // float prog = progress*0.66 + noise.g * 0.04;
		  // float circ = 1. - smoothstep(-width, 0.0, radius * distance(start*aspect, uv*aspect) - prog*(1.+width));
		  // float intpl = pow(abs(circ), 1.);
		  // vec4 t1 = texture2D( texture1, (uv - 0.5) * (1.0 - intpl) + 0.5 ) ;
		  // vec4 t2 = texture2D( texture2, (uv - 0.5) * intpl + 0.5 );
		  // gl_FragColor = mix( t1, t2, intpl );
}
