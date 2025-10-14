import{S as s,C as d,P as m,W as c,c as l,aq as w,d as v,e as u,b as h}from"./three.module-ylx_xh4P.js";import{O as p}from"./OrbitControls-DzwGvri-.js";const o=new s;o.background=new d("#3243FF");const e=new m(75,innerWidth/innerHeight,.1,1e3);e.position.set(0,3,6);e.lookAt(0,0,0);const n=new c({antialias:!0});n.setSize(innerWidth,innerHeight);document.body.appendChild(n.domElement);const i=new p(e,n.domElement);i.enableDamping=!0;i.maxDistance=10;i.minDistance=5;const t=new l(6,6,100,100);t.rotateX(-Math.PI/2);const a={uTime:{value:0}},g=new w({uniforms:a,vertexShader:`
      uniform float uTime;
      varying vec3 vColor;
      void main() {
        vec3 newPosition = position;
        newPosition.y = sin(position.x * 2.0 + uTime) * 0.5 +
                        cos(position.z * 2.0 + uTime * 1.5) * 0.3;
        vColor = vec3(0.5 + newPosition.y, 0.3 + abs(newPosition.y), 1.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `,fragmentShader:`
      varying vec3 vColor;
      void main() {
        gl_FragColor = vec4(vColor, 1.0);
      }
    `,side:v,wireframe:!1}),C=new u(t,g);o.add(C);let P=new h;function r(){requestAnimationFrame(r),a.uTime.value=P.getElapsedTime(),i.update(),n.render(o,e)}r();window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)});
