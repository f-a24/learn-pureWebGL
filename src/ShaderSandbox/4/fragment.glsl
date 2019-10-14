precision mediump float;

uniform float uTrans;
uniform vec2 uResolution;

varying vec2 vUv;

void main() {
	vec2 position = (gl_FragCoord.xy * 2.0- uResolution) / min(uResolution.x, uResolution.y);
	float r0 = 1.0 / abs(sin(uTrans)) * abs(sin(length(position)));
	float g0 = 1.0 / abs(cos(uTrans)) * abs(cos(length(position)));
	float b = abs(sin(uTrans));
	float r1 = abs(sin(position.x * uTrans));
	float g1 = abs(cos(position.y * uTrans));
	gl_FragColor = mix(vec4(r0, g0, b, 1.0), vec4(r1, g1, b, 1.0), sin(uTrans));
}