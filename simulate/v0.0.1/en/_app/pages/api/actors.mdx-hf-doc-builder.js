import{S as Ft,i as Mt,s as Tt,e as n,k as s,w as gt,t as m,M as qt,c as o,d as a,m as i,a as r,x as ut,h as p,b as x,G as t,g as A,y as vt,L as Bt,q as yt,o as _t,B as xt,v as Vt}from"../../chunks/vendor-hf-doc-builder.js";import{D as Dt}from"../../chunks/Docstring-hf-doc-builder.js";import{I as Xt}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Yt(At){let h,q,d,v,C,w,G,S,H,B,l,b,J,O,j,z,R,K,Q,g,I,W,tt,P,et,at,U,nt,V,c,E,ot,k,rt,st,D,it,lt,u,F,ct,mt,M,pt,ft,T,ht,X,$,dt,Y;return w=new Xt({}),b=new Dt({props:{name:"class simulate.SimpleActor",anchor:"simulate.SimpleActor",parameters:[{name:"name",val:": typing.Optional[str] = None"},{name:"position",val:": typing.Optional[typing.List[float]] = None"},{name:"rotation",val:": typing.Optional[typing.List[float]] = None"},{name:"scaling",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"transformation_matrix",val:": typing.Optional[numpy.ndarray] = None"},{name:"material",val:": typing.Optional[simulate.assets.material.Material] = None"},{name:"parent",val:": typing.Optional[ForwardRef('Asset')] = None"},{name:"children",val:": typing.Union[ForwardRef('Asset'), typing.List[ForwardRef('Asset')], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"simulate.SimpleActor.name",description:`<strong>name</strong> (<code>str</code>) &#x2014;
position &#x2014; length 3 list of the position of the agent, defaults to (0,0,0)
rotation &#x2014; length 3 list of the rotation of the agent, defaults to (0,0,0)
scaling &#x2014;
transformation_matrix &#x2014;
parent &#x2014;
children &#x2014;`,name:"name"}],source:"https://github.com/huggingface/simulate/blob/v0.0.1/src/simulate/assets/actors.py#L30"}}),E=new Dt({props:{name:"class simulate.EgocentricCameraActor",anchor:"simulate.EgocentricCameraActor",parameters:[{name:"mass",val:": float = 1.0"},{name:"name",val:": typing.Optional[str] = None"},{name:"position",val:": typing.Optional[typing.List[float]] = None"},{name:"rotation",val:": typing.Optional[typing.List[float]] = None"},{name:"scaling",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"camera_height",val:": int = 40"},{name:"camera_width",val:": int = 40"},{name:"camera_tag",val:": typing.Optional[str] = 'CameraSensor'"},{name:"transformation_matrix",val:": typing.Optional[numpy.ndarray] = None"},{name:"material",val:": typing.Optional[simulate.assets.material.Material] = None"},{name:"parent",val:": typing.Optional[ForwardRef('Asset')] = None"},{name:"children",val:": typing.Union[ForwardRef('Asset'), typing.List[ForwardRef('Asset')], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"simulate.EgocentricCameraActor.mass",description:"<strong>mass</strong> (<code>float</code>, Optional) &#x2014;",name:"mass"},{anchor:"simulate.EgocentricCameraActor.name",description:`<strong>name</strong> (<code>str</code>) &#x2014;
position &#x2014; length 3 list of the position of the agent, defaults to (0,0,0)
rotation &#x2014; length 3 list of the rotation of the agent, defaults to (0,0,0)
scaling &#x2014;
camera_height &#x2014; pixel height of first-person camera observations
camera_width &#x2014; pixel width of first-person camera observations
transformation_matrix &#x2014;
parent &#x2014;
children &#x2014;`,name:"name"}],source:"https://github.com/huggingface/simulate/blob/v0.0.1/src/simulate/assets/actors.py#L122"}}),{c(){h=n("meta"),q=s(),d=n("h1"),v=n("a"),C=n("span"),gt(w.$$.fragment),G=s(),S=n("span"),H=m("Actors"),B=s(),l=n("div"),gt(b.$$.fragment),J=s(),O=n("p"),j=m("Creates a bare-bones RL agent in the scene."),z=s(),R=n("p"),K=m("A SimpleActor is a sphere asset with:"),Q=s(),g=n("ul"),I=n("li"),W=m("basic XYZ positional control (continuous),"),tt=s(),P=n("li"),et=m("mass of 1 (default)"),at=s(),U=n("li"),nt=m("no attached Camera"),V=s(),c=n("div"),gt(E.$$.fragment),ot=s(),k=n("p"),rt=m("Create an Egocentric RL Actor in the Scene \u2014 essentially a basic first-person agent."),st=s(),D=n("p"),it=m("An egocentric actor is a capsule asset with:"),lt=s(),u=n("ul"),F=n("li"),ct=m("a Camera as a child asset for observation device"),mt=s(),M=n("li"),pt=m("a RigidBodyComponent component with a mass of 1.0"),ft=s(),T=n("li"),ht=m("a discrete actuator"),X=s(),$=n("p"),dt=m("Under construction \u{1F6A7}."),this.h()},l(e){const f=qt('[data-svelte="svelte-1phssyn"]',document.head);h=o(f,"META",{name:!0,content:!0}),f.forEach(a),q=i(e),d=o(e,"H1",{class:!0});var Z=r(d);v=o(Z,"A",{id:!0,class:!0,href:!0});var wt=r(v);C=o(wt,"SPAN",{});var bt=r(C);ut(w.$$.fragment,bt),bt.forEach(a),wt.forEach(a),G=i(Z),S=o(Z,"SPAN",{});var Et=r(S);H=p(Et,"Actors"),Et.forEach(a),Z.forEach(a),B=i(e),l=o(e,"DIV",{class:!0});var y=r(l);ut(b.$$.fragment,y),J=i(y),O=o(y,"P",{});var $t=r(O);j=p($t,"Creates a bare-bones RL agent in the scene."),$t.forEach(a),z=i(y),R=o(y,"P",{});var Lt=r(R);K=p(Lt,"A SimpleActor is a sphere asset with:"),Lt.forEach(a),Q=i(y),g=o(y,"UL",{});var L=r(g);I=o(L,"LI",{});var Nt=r(I);W=p(Nt,"basic XYZ positional control (continuous),"),Nt.forEach(a),tt=i(L),P=o(L,"LI",{});var Ct=r(P);et=p(Ct,"mass of 1 (default)"),Ct.forEach(a),at=i(L),U=o(L,"LI",{});var St=r(U);nt=p(St,"no attached Camera"),St.forEach(a),L.forEach(a),y.forEach(a),V=i(e),c=o(e,"DIV",{class:!0});var _=r(c);ut(E.$$.fragment,_),ot=i(_),k=o(_,"P",{});var Ot=r(k);rt=p(Ot,"Create an Egocentric RL Actor in the Scene \u2014 essentially a basic first-person agent."),Ot.forEach(a),st=i(_),D=o(_,"P",{});var Rt=r(D);it=p(Rt,"An egocentric actor is a capsule asset with:"),Rt.forEach(a),lt=i(_),u=o(_,"UL",{});var N=r(u);F=o(N,"LI",{});var It=r(F);ct=p(It,"a Camera as a child asset for observation device"),It.forEach(a),mt=i(N),M=o(N,"LI",{});var Pt=r(M);pt=p(Pt,"a RigidBodyComponent component with a mass of 1.0"),Pt.forEach(a),ft=i(N),T=o(N,"LI",{});var Ut=r(T);ht=p(Ut,"a discrete actuator"),Ut.forEach(a),N.forEach(a),_.forEach(a),X=i(e),$=o(e,"P",{});var kt=r($);dt=p(kt,"Under construction \u{1F6A7}."),kt.forEach(a),this.h()},h(){x(h,"name","hf:doc:metadata"),x(h,"content",JSON.stringify(Zt)),x(v,"id","simulate.SimpleActor"),x(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),x(v,"href","#simulate.SimpleActor"),x(d,"class","relative group"),x(l,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),x(c,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,f){t(document.head,h),A(e,q,f),A(e,d,f),t(d,v),t(v,C),vt(w,C,null),t(d,G),t(d,S),t(S,H),A(e,B,f),A(e,l,f),vt(b,l,null),t(l,J),t(l,O),t(O,j),t(l,z),t(l,R),t(R,K),t(l,Q),t(l,g),t(g,I),t(I,W),t(g,tt),t(g,P),t(P,et),t(g,at),t(g,U),t(U,nt),A(e,V,f),A(e,c,f),vt(E,c,null),t(c,ot),t(c,k),t(k,rt),t(c,st),t(c,D),t(D,it),t(c,lt),t(c,u),t(u,F),t(F,ct),t(u,mt),t(u,M),t(M,pt),t(u,ft),t(u,T),t(T,ht),A(e,X,f),A(e,$,f),t($,dt),Y=!0},p:Bt,i(e){Y||(yt(w.$$.fragment,e),yt(b.$$.fragment,e),yt(E.$$.fragment,e),Y=!0)},o(e){_t(w.$$.fragment,e),_t(b.$$.fragment,e),_t(E.$$.fragment,e),Y=!1},d(e){a(h),e&&a(q),e&&a(d),xt(w),e&&a(B),e&&a(l),xt(b),e&&a(V),e&&a(c),xt(E),e&&a(X),e&&a($)}}}const Zt={local:"simulate.SimpleActor",title:"Actors"};function Gt(At){return Vt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class zt extends Ft{constructor(h){super();Mt(this,h,Gt,Yt,Tt,{})}}export{zt as default,Zt as metadata};
