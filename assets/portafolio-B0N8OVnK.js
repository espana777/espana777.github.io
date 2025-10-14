import{e as k,P as B,C as G,am as Z,r as f,q as _,an as z,ao as ee,ap as te,aq as ae,ar as ne,S as oe,W as re,as as ie,A as se,o as le,M as ce,at as y,c as de,au as ue,av as me,aw as pe,b as fe}from"./three.module-ylx_xh4P.js";/* empty css                */import{O as he}from"./OrbitControls-DzwGvri-.js";import{d as H}from"./dispose-AKGI8BeD.js";class C extends k{constructor(a,e={}){super(a),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new B;const n=this,U=e.color!==void 0?new G(e.color):new G(8355711),E=e.textureWidth||512,S=e.textureHeight||512,N=e.clipBias||0,h=e.shader||C.ReflectorShader,X=e.multisample!==void 0?e.multisample:4,m=new Z,d=new f,p=new f,T=new f,x=new _,R=new f(0,0,-1),l=new z,w=new f,A=new f,g=new z,v=new _,r=this.camera,P=new ee(E,S,{samples:X,type:te}),W=new ae({name:h.name!==void 0?h.name:"unspecified",uniforms:ne.clone(h.uniforms),fragmentShader:h.fragmentShader,vertexShader:h.vertexShader});W.uniforms.tDiffuse.value=P.texture,W.uniforms.color.value=U,W.uniforms.textureMatrix.value=v,this.material=W,this.onBeforeRender=function(o,J,b){if(p.setFromMatrixPosition(n.matrixWorld),T.setFromMatrixPosition(b.matrixWorld),x.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(x),w.subVectors(p,T),w.dot(d)>0===!0&&this.forceUpdate===!1)return;w.reflect(d).negate(),w.add(p),x.extractRotation(b.matrixWorld),R.set(0,0,-1),R.applyMatrix4(x),R.add(T),A.subVectors(p,R),A.reflect(d).negate(),A.add(p),r.position.copy(w),r.up.set(0,1,0),r.up.applyMatrix4(x),r.up.reflect(d),r.lookAt(A),r.far=b.far,r.updateMatrixWorld(),r.projectionMatrix.copy(b.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(r.projectionMatrix),v.multiply(r.matrixWorldInverse),v.multiply(n.matrixWorld),m.setFromNormalAndCoplanarPoint(d,p),m.applyMatrix4(r.matrixWorldInverse),l.set(m.normal.x,m.normal.y,m.normal.z,m.constant);const s=r.projectionMatrix;g.x=(Math.sign(l.x)+s.elements[8])/s.elements[0],g.y=(Math.sign(l.y)+s.elements[9])/s.elements[5],g.z=-1,g.w=(1+s.elements[10])/s.elements[14],l.multiplyScalar(2/l.dot(g)),s.elements[2]=l.x,s.elements[6]=l.y,s.elements[10]=l.z+1-N,s.elements[14]=l.w,n.visible=!1;const K=o.getRenderTarget(),Q=o.xr.enabled,Y=o.shadowMap.autoUpdate;o.xr.enabled=!1,o.shadowMap.autoUpdate=!1,o.setRenderTarget(P),o.state.buffers.depth.setMask(!0),o.autoClear===!1&&o.clear(),o.render(J,r),o.xr.enabled=Q,o.shadowMap.autoUpdate=Y,o.setRenderTarget(K);const I=b.viewport;I!==void 0&&o.state.viewport(I),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return P},this.dispose=function(){P.dispose(),n.material.dispose()}}}C.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const i=new oe;i.background=new G(2105376);const M=new B(75,window.innerWidth/window.innerHeight,.1,100);M.position.set(10,15,40);const xe=document.getElementById("portafolio-canvas"),u=new re({canvas:xe,antialias:!0});function V(){const t=document.querySelector(".canvas-container"),a=t.clientWidth,e=t.clientHeight;u.setSize(a,e),M.aspect=a/e,M.updateProjectionMatrix()}V();window.addEventListener("resize",V);u.shadowMap.enabled=!0;u.shadowMap.type=ie;const F=new he(M,u.domElement);F.enableDamping=!0;F.maxDistance=20;F.minDistance=40;const we=new se(4210752,5);i.add(we);const c=new le(16777215,400);c.position.set(0,10,20);c.castShadow=!0;i.add(c);const ge=new ce({color:"blue"}),q=[new y(3,3,15,32),new y(3,3,8,32),new y(3,3,15,32),new y(3,3,15,32),new y(3,3,13,32)];q.forEach(t=>t.translate(0,t.parameters.height/2,0));const ve=[-10,-3,5,13,20],be=q.map((t,a)=>{const e=new k(t,ge);return e.position.set(ve[a],0,0),e.castShadow=!0,i.add(e),e}),ye=new de(50,50),D=new C(ye,{clipBias:.003,textureWidth:window.innerWidth*window.devicePixelRatio,textureHeight:window.innerHeight*window.devicePixelRatio,color:8947848});D.rotation.x=-Math.PI/2;D.position.y=0;i.add(D);function L(t,a="white"){const e=document.createElement("canvas"),n=e.getContext("2d");e.width=256,e.height=128,n.fillStyle="rgba(0,0,0,0)",n.fillRect(0,0,e.width,e.height),n.fillStyle=a,n.font="28px Arial",n.textAlign="center",n.fillText(t,e.width/2,e.height/2+10);const U=new ue(e),E=new me({map:U,transparent:!0}),S=new pe(E);return S.scale.set(6,3,1),S}function Me(t){return t<10?"red":t<15?"yellow":"lime"}const Se=["GRÁFICA 1","GRÁFICA 2","GRÁFICA 3","GRÁFICA 4","GRÁFICA 5"],O=[15,8,15,15,13];be.forEach((t,a)=>{const e=Me(O[a]),n=L(`${Se[a]}: ${O[a]}`,e);n.position.set(t.position.x,t.geometry.parameters.height+2,t.position.z),i.add(n)});const j=L("Gráfico de Volúmenes - DATUSA","cyan");j.scale.set(20,5,1);j.position.set(2,12,0);i.add(j);const Re=[{text:"Bajo (<10)",color:"red"},{text:"Medio (10-14)",color:"yellow"},{text:"Alto (15+)",color:"lime"}];Re.forEach((t,a)=>{const e=L(t.text,t.color);e.scale.set(10,3,1),e.position.set(28,5+a*4,0),i.add(e)});const Ae=new fe;function $(){requestAnimationFrame($),F.update();const t=Ae.getElapsedTime(),a=25,e=2;c.position.x=a*Math.cos(t*e),c.position.z=a*Math.sin(t*e),c.position.y=20,c.target.position.set(5,5,0),c.target.updateMatrixWorld(),u.render(i,M)}$();document.querySelectorAll("nav a").forEach(t=>{t.addEventListener("click",()=>{H(i,u)})});window.addEventListener("beforeunload",()=>H(i,u));
