precision mediump float;

uniform float uTrans;
uniform vec2 uResolution;

varying vec2 vUv;

void main() {
	vec2 position = (gl_FragCoord.xy * 2.0- uResolution) / min(uResolution.x, uResolution.y);
	float r = abs(sin(position.x * uTrans * 5.0));
	float g = abs(cos(position.y * uTrans * 5.0));
	float b = abs(sin(uTrans));
	gl_FragColor = mix(vec4(r, g, b, 1.0), vec4(1.0 - r, 1.0 - g, b, 1.0), sin(uTrans));
}
