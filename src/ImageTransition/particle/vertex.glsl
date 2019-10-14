precision mediump float;

attribute vec4 position;
attribute vec4 color;

uniform vec2 uWindow;
uniform vec2 uTrans;
uniform float uAngle;

varying vec4 vColor;

vec2 rotate(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, -s, s, c);
	return m * v;
}

void main() {
    vec2 trasformedPos = rotate(vec2(position.x, position.z), uAngle);
    vec3 newPosition = vec3(trasformedPos.x, position.y, trasformedPos.y);
    float scale = max(1.0 - newPosition.z / 1800., 0.01);
    gl_Position = vec4( (newPosition.x * scale + uTrans.x) / uWindow.x , (newPosition.y * scale + uTrans.y) /uWindow.y , 0.0, 1.0);
	gl_PointSize = 3. * scale;

	vColor = color;
}
