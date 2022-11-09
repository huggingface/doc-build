import{S as Ae,i as Ie,s as Oe,e as a,k as i,w as F,t as y,M as ze,c as n,d as t,m as c,a as s,x as q,h as v,b as p,G as o,g as l,y as j,L as Ve,q as k,o as U,B as M,v as Ee}from"../../chunks/vendor-hf-doc-builder.js";import{D as te}from"../../chunks/Docstring-hf-doc-builder.js";import{I as Pe}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Fe(xe){let f,B,h,x,D,C,oe,R,ae,G,T,ne,W,d,A,se,re,I,ie,ce,O,le,H,m,S,me,z,de,pe,_,b,fe,V,he,J,g,N,ge,E,ue,K,u,w,ye,P,ve,Q;return C=new Pe({}),S=new te({props:{name:"class simulate.Camera",anchor:"simulate.Camera",parameters:[{name:"width",val:": int = 256"},{name:"height",val:": int = 256"},{name:"camera_type",val:": str = 'perspective'"},{name:"znear",val:": float = 0.3"},{name:"yfov",val:": typing.Union[float, numpy.ndarray, NoneType] = 60"},{name:"aspect_ratio",val:": typing.Optional[float] = None"},{name:"zfar",val:": typing.Optional[float] = None"},{name:"xmag",val:": typing.Optional[float] = None"},{name:"ymag",val:": typing.Optional[float] = None"},{name:"name",val:": typing.Optional[str] = None"},{name:"sensor_tag",val:": str = 'CameraSensor'"},{name:"position",val:": typing.Optional[typing.List[float]] = None"},{name:"rotation",val:": typing.Optional[typing.List[float]] = None"},{name:"scaling",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"is_actor",val:": bool = False"},{name:"parent",val:": typing.Optional[ForwardRef('Asset')] = None"},{name:"children",val:": typing.Optional[typing.List[ForwardRef('Asset')]] = None"}],parametersDescription:[{anchor:"simulate.Camera.width",description:`<strong>width</strong> (<code>int</code>, <em>optional</em>, defaults to <code>256</code>) &#x2014;
The width of the Camera. Default: 256`,name:"width"},{anchor:"simulate.Camera.height",description:`<strong>height</strong> (<code>int</code>, <em>optional</em>, defaults to <code>256</code>) &#x2014;
The height of the Camera. Default: 256`,name:"height"},{anchor:"simulate.Camera.camera_type",description:`<strong>camera_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>perspective</code>) &#x2014;
The type of camera. Can be one of:
[
&#x201C;perspective&#x201D;,
&#x201C;orthographic&#x201D;
]`,name:"camera_type"},{anchor:"simulate.Camera.znear",description:`<strong>znear</strong> (<code>float</code>, <em>optional</em>, defaults to <code>0.3</code>) &#x2014;
The near clipping plane of the Camera.`,name:"znear"},{anchor:"simulate.Camera.yfov",description:`<strong>yfov</strong> (<code>float</code> or <code>np.ndarray</code>, <em>optional</em>, defaults to <code>60</code>) &#x2014;
The vertical field of view of the Camera in degrees.`,name:"yfov"},{anchor:"simulate.Camera.aspect_ratio",description:`<strong>aspect_ratio</strong> (<code>float</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The aspect ratio of the Camera if needed`,name:"aspect_ratio"},{anchor:"simulate.Camera.zfar",description:`<strong>zfar</strong> (<code>float</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The far clipping plane of the Camera.`,name:"zfar"},{anchor:"simulate.Camera.xmag",description:`<strong>xmag</strong> (<code>float</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The x magnification of the Camera.`,name:"xmag"},{anchor:"simulate.Camera.ymag",description:`<strong>ymag</strong> (<code>float</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The y magnification of the Camera.`,name:"ymag"},{anchor:"simulate.Camera.name",description:`<strong>name</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The name of the Camera.`,name:"name"},{anchor:"simulate.Camera.sensor_tag",description:`<strong>sensor_tag</strong> (<code>str</code>, <em>optional</em>, defaults to <code>CameraSensor</code>) &#x2014;
The tag of the Camera.`,name:"sensor_tag"},{anchor:"simulate.Camera.position",description:`<strong>position</strong> (<code>List[float]</code>, <em>optional</em>, defaults to <code>[0.0, 0.0, 0.0]</code>) &#x2014;
The position of the Camera.`,name:"position"},{anchor:"simulate.Camera.rotation",description:`<strong>rotation</strong> (<code>List[float]</code>, <em>optional</em>, defaults to <code>[0.0, 0.0, 0.0]</code>) &#x2014;
The rotation of the Camera.`,name:"rotation"},{anchor:"simulate.Camera.scaling",description:`<strong>scaling</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>1.0</code>) &#x2014;
The scaling of the Camera.`,name:"scaling"},{anchor:"simulate.Camera.is_actor",description:`<strong>is_actor</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the Camera is an actor.`,name:"is_actor"},{anchor:"simulate.Camera.parent",description:`<strong>parent</strong> (<code>Asset</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The parent of the Camera.`,name:"parent"},{anchor:"simulate.Camera.children",description:`<strong>children</strong> (<code>List[Asset]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The children of the Camera.`,name:"children"}],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/assets/camera.py#L43"}}),b=new te({props:{name:"copy",anchor:"simulate.Camera.copy",parameters:[{name:"with_children",val:": bool = True"},{name:"**kwargs",val:": typing.Any"}],parametersDescription:[{anchor:"simulate.Camera.copy.with_children",description:`<strong>with_children</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to copy the children of the Camera.`,name:"with_children"}],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/assets/camera.py#L152"}}),N=new te({props:{name:"class simulate.StateSensor",anchor:"simulate.StateSensor",parameters:[{name:"target_entity",val:": typing.Optional[typing.Any] = None"},{name:"reference_entity",val:": typing.Optional[typing.Any] = None"},{name:"properties",val:": typing.Union[str, typing.List[str], NoneType] = None"},{name:"sensor_tag",val:": str = 'StateSensor'"},{name:"name",val:": dataclasses.InitVar[typing.Optional[str]] = None"},{name:"position",val:": dataclasses.InitVar[typing.Optional[typing.List[float]]] = <property object at 0x7f1c10812ef0>"},{name:"rotation",val:": dataclasses.InitVar[typing.Optional[typing.List[float]]] = <property object at 0x7f1c10812d60>"},{name:"scaling",val:": dataclasses.InitVar[typing.Union[float, typing.List[float], NoneType]] = <property object at 0x7f1c10812db0>"},{name:"transformation_matrix",val:": dataclasses.InitVar[typing.Optional[typing.List[float]]] = <property object at 0x7f1c10812e00>"},{name:"parent",val:": dataclasses.InitVar[typing.Optional[ForwardRef('Asset')]] = None"},{name:"children",val:": dataclasses.InitVar[typing.Optional[typing.List[ForwardRef('Asset')]]] = None"},{name:"created_from_file",val:": dataclasses.InitVar[typing.Optional[str]] = None"}],parametersDescription:[{anchor:"simulate.StateSensor.target_entity",description:`<strong>target_entity</strong> (<code>Asset</code> or <code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Reference or name of the target Asset in the scene.`,name:"target_entity"},{anchor:"simulate.StateSensor.reference_entity",description:`<strong>reference_entity</strong> (<code>Asset</code> or <code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Reference or name of the reference Asset in the scene.
If no reference is provided we use the world as a reference.`,name:"reference_entity"},{anchor:"simulate.StateSensor.properties",description:`<strong>properties</strong> (<code>str</code> or <code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;distance&quot;]</code>) &#x2014;
List of properties to extract from the sensor. Allowed properties are:
[
&#x201C;position&#x201D;, &#x201C;position.x&#x201D;, &#x201C;position.y&#x201D;, &#x201C;position.z&#x201D;,
&#x201C;velocity&#x201D;, &#x201C;velocity.x&#x201D;, &#x201C;velocity.y&#x201D;, &#x201C;velocity.z&#x201D;,
&#x201C;rotation&#x201D;, &#x201C;rotation.x&#x201D;, &#x201C;rotation.y&#x201D;, &#x201C;rotation.z&#x201D;,
&#x201C;angular_velocity&#x201D;, &#x201C;angular_velocity.x&#x201D;, &#x201C;angular_velocity.y&#x201D;, &#x201C;angular_velocity.z&#x201D;,
&#x201C;distance&#x201D;
]`,name:"properties"},{anchor:"simulate.StateSensor.sensor_tag",description:`<strong>sensor_tag</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;StateSensor&quot;</code>) &#x2014;
Type of sensor. Allowed values are: &#x201C;position&#x201D;, &#x201C;velocity&#x201D;, &#x201C;rotation&#x201D;, &#x201C;angular_velocity&#x201D;, &#x201C;distance&#x201D;.`,name:"sensor_tag"},{anchor:"simulate.StateSensor.name",description:`<strong>name</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Name of the sensor.`,name:"name"},{anchor:"simulate.StateSensor.position",description:`<strong>position</strong> (<code>List[float]</code>, <em>optional</em>, defaults to <code>[0, 0, 0]</code>) &#x2014;
Position of the sensor in the scene.`,name:"position"},{anchor:"simulate.StateSensor.rotation",description:`<strong>rotation</strong> (<code>List[float]</code>, <em>optional</em>, defaults to <code>[0, 0, 0]</code>) &#x2014;
Rotation of the sensor in the scene.`,name:"rotation"},{anchor:"simulate.StateSensor.scaling",description:`<strong>scaling</strong> (<code>List[float]</code>, <em>optional</em>, defaults to <code>[1, 1, 1]</code>) &#x2014;
Scaling of the sensor in the scene.`,name:"scaling"},{anchor:"simulate.StateSensor.transformation_matrix",description:`<strong>transformation_matrix</strong> (<code>List[float]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Transformation matrix of the sensor in the scene.`,name:"transformation_matrix"},{anchor:"simulate.StateSensor.parent",description:`<strong>parent</strong> (<code>Asset</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Parent of the sensor in the scene.`,name:"parent"},{anchor:"simulate.StateSensor.children",description:`<strong>children</strong> (<code>List[Asset]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Children of the sensor in the scene.`,name:"children"},{anchor:"simulate.StateSensor.created_from_file",description:`<strong>created_from_file</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The path to the file from which the sensor was created.`,name:"created_from_file"}],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/assets/sensors.py#L84"}}),w=new te({props:{name:"class simulate.RaycastSensor",anchor:"simulate.RaycastSensor",parameters:[{name:"n_horizontal_rays",val:": int = 1"},{name:"n_vertical_rays",val:": int = 1"},{name:"horizontal_fov",val:": float = 0.0"},{name:"vertical_fov",val:": float = 0.0"},{name:"ray_length",val:": float = 100.0"},{name:"sensor_tag",val:": str = 'RaycastSensor'"},{name:"name",val:": dataclasses.InitVar[typing.Optional[str]] = None"},{name:"position",val:": dataclasses.InitVar[typing.Optional[typing.List[float]]] = <property object at 0x7f1c10816630>"},{name:"rotation",val:": dataclasses.InitVar[typing.Optional[typing.List[float]]] = <property object at 0x7f1c10816900>"},{name:"scaling",val:": dataclasses.InitVar[typing.Union[float, typing.List[float], NoneType]] = <property object at 0x7f1c10816720>"},{name:"transformation_matrix",val:": dataclasses.InitVar[typing.Optional[typing.List[float]]] = <property object at 0x7f1c108166d0>"},{name:"parent",val:": dataclasses.InitVar[typing.Optional[ForwardRef('Asset')]] = None"},{name:"children",val:": dataclasses.InitVar[typing.Optional[typing.List[ForwardRef('Asset')]]] = None"},{name:"created_from_file",val:": dataclasses.InitVar[typing.Optional[str]] = None"}],parametersDescription:[{anchor:"simulate.RaycastSensor.n_horizontal_rays",description:`<strong>n_horizontal_rays</strong> (<code>int</code>, <em>optional</em>, defaults to <code>1</code>) &#x2014;
The number of horizontal rays to cast.`,name:"n_horizontal_rays"},{anchor:"simulate.RaycastSensor.n_vertical_rays",description:`<strong>n_vertical_rays</strong> (<code>int</code>, <em>optional</em>, defaults to <code>1</code>) &#x2014;
The number of vertical rays to cast.`,name:"n_vertical_rays"},{anchor:"simulate.RaycastSensor.horizontal_fov",description:`<strong>horizontal_fov</strong> (<code>float</code>, <em>optional</em>, defaults to <code>0.0</code>) &#x2014;
The horizontal field of view of the sensor.`,name:"horizontal_fov"},{anchor:"simulate.RaycastSensor.vertical_fov",description:`<strong>vertical_fov</strong> (<code>float</code>, <em>optional</em>, defaults to <code>0.0</code>) &#x2014;
The vertical field of view of the sensor.`,name:"vertical_fov"},{anchor:"simulate.RaycastSensor.ray_length",description:`<strong>ray_length</strong> (<code>float</code>, <em>optional</em>, defaults to <code>100.0</code>) &#x2014;
The length of the ray to cast.`,name:"ray_length"},{anchor:"simulate.RaycastSensor.sensor_tag",description:`<strong>sensor_tag</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;RaycastSensor&quot;</code>) &#x2014;
The tag of the sensor.`,name:"sensor_tag"},{anchor:"simulate.RaycastSensor.name",description:`<strong>name</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The name of the sensor.`,name:"name"},{anchor:"simulate.RaycastSensor.position",description:`<strong>position</strong> (<code>List[float]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The position of the sensor in the scene.`,name:"position"},{anchor:"simulate.RaycastSensor.rotation",description:`<strong>rotation</strong> (<code>List[float]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The rotation of the sensor in the scene.`,name:"rotation"},{anchor:"simulate.RaycastSensor.scaling",description:`<strong>scaling</strong> (<code>List[float]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The scaling of the sensor in the scene.`,name:"scaling"},{anchor:"simulate.RaycastSensor.transformation_matrix",description:`<strong>transformation_matrix</strong> (<code>List[float]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The transformation matrix of the sensor in the scene.`,name:"transformation_matrix"},{anchor:"simulate.RaycastSensor.parent",description:`<strong>parent</strong> (<code>Asset</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The parent of the sensor.`,name:"parent"},{anchor:"simulate.RaycastSensor.children",description:`<strong>children</strong> (<code>List[Asset]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The children of the sensor.`,name:"children"},{anchor:"simulate.RaycastSensor.created_from_file",description:`<strong>created_from_file</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The path to the file from which the sensor was created.`,name:"created_from_file"}],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/assets/sensors.py#L352"}}),{c(){f=a("meta"),B=i(),h=a("h1"),x=a("a"),D=a("span"),F(C.$$.fragment),oe=i(),R=a("span"),ae=y("Sensors"),G=i(),T=a("p"),ne=y("Three types of Sensor are provided in Simulate:"),W=i(),d=a("ul"),A=a("li"),se=y("Camera sensors - for RGB observations"),re=i(),I=a("li"),ie=y("State sensors - For measurements of positions & rotations"),ce=i(),O=a("li"),le=y("Raycast sensors - for depth measurements."),H=i(),m=a("div"),F(S.$$.fragment),me=i(),z=a("p"),de=y(`A Camera asset.
This Camera is located at the origin by default and has no rotation.`),pe=i(),_=a("div"),F(b.$$.fragment),fe=i(),V=a("p"),he=y("Make a copy of the Camera with copy of the children attached to the copy."),J=i(),g=a("div"),F(N.$$.fragment),ge=i(),E=a("p"),ue=y("A State sensor: pointer to two assets whose positions/rotations are used to compute an observation"),K=i(),u=a("div"),F(w.$$.fragment),ye=i(),P=a("p"),ve=y("A Raycast sensor: cast a ray to get an observation."),this.h()},l(e){const r=ze('[data-svelte="svelte-1phssyn"]',document.head);f=n(r,"META",{name:!0,content:!0}),r.forEach(t),B=c(e),h=n(e,"H1",{class:!0});var X=s(h);x=n(X,"A",{id:!0,class:!0,href:!0});var _e=s(x);D=n(_e,"SPAN",{});var Ce=s(D);q(C.$$.fragment,Ce),Ce.forEach(t),_e.forEach(t),oe=c(X),R=n(X,"SPAN",{});var Se=s(R);ae=v(Se,"Sensors"),Se.forEach(t),X.forEach(t),G=c(e),T=n(e,"P",{});var be=s(T);ne=v(be,"Three types of Sensor are provided in Simulate:"),be.forEach(t),W=c(e),d=n(e,"UL",{});var L=s(d);A=n(L,"LI",{});var Ne=s(A);se=v(Ne,"Camera sensors - for RGB observations"),Ne.forEach(t),re=c(L),I=n(L,"LI",{});var we=s(I);ie=v(we,"State sensors - For measurements of positions & rotations"),we.forEach(t),ce=c(L),O=n(L,"LI",{});var Te=s(O);le=v(Te,"Raycast sensors - for depth measurements."),Te.forEach(t),L.forEach(t),H=c(e),m=n(e,"DIV",{class:!0});var $=s(m);q(S.$$.fragment,$),me=c($),z=n($,"P",{});var Le=s(z);de=v(Le,`A Camera asset.
This Camera is located at the origin by default and has no rotation.`),Le.forEach(t),pe=c($),_=n($,"DIV",{class:!0});var Y=s(_);q(b.$$.fragment,Y),fe=c(Y),V=n(Y,"P",{});var $e=s(V);he=v($e,"Make a copy of the Camera with copy of the children attached to the copy."),$e.forEach(t),Y.forEach(t),$.forEach(t),J=c(e),g=n(e,"DIV",{class:!0});var Z=s(g);q(N.$$.fragment,Z),ge=c(Z),E=n(Z,"P",{});var De=s(E);ue=v(De,"A State sensor: pointer to two assets whose positions/rotations are used to compute an observation"),De.forEach(t),Z.forEach(t),K=c(e),u=n(e,"DIV",{class:!0});var ee=s(u);q(w.$$.fragment,ee),ye=c(ee),P=n(ee,"P",{});var Re=s(P);ve=v(Re,"A Raycast sensor: cast a ray to get an observation."),Re.forEach(t),ee.forEach(t),this.h()},h(){p(f,"name","hf:doc:metadata"),p(f,"content",JSON.stringify(qe)),p(x,"id","simulate.Camera"),p(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(x,"href","#simulate.Camera"),p(h,"class","relative group"),p(_,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(m,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(g,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,r){o(document.head,f),l(e,B,r),l(e,h,r),o(h,x),o(x,D),j(C,D,null),o(h,oe),o(h,R),o(R,ae),l(e,G,r),l(e,T,r),o(T,ne),l(e,W,r),l(e,d,r),o(d,A),o(A,se),o(d,re),o(d,I),o(I,ie),o(d,ce),o(d,O),o(O,le),l(e,H,r),l(e,m,r),j(S,m,null),o(m,me),o(m,z),o(z,de),o(m,pe),o(m,_),j(b,_,null),o(_,fe),o(_,V),o(V,he),l(e,J,r),l(e,g,r),j(N,g,null),o(g,ge),o(g,E),o(E,ue),l(e,K,r),l(e,u,r),j(w,u,null),o(u,ye),o(u,P),o(P,ve),Q=!0},p:Ve,i(e){Q||(k(C.$$.fragment,e),k(S.$$.fragment,e),k(b.$$.fragment,e),k(N.$$.fragment,e),k(w.$$.fragment,e),Q=!0)},o(e){U(C.$$.fragment,e),U(S.$$.fragment,e),U(b.$$.fragment,e),U(N.$$.fragment,e),U(w.$$.fragment,e),Q=!1},d(e){t(f),e&&t(B),e&&t(h),M(C),e&&t(G),e&&t(T),e&&t(W),e&&t(d),e&&t(H),e&&t(m),M(S),M(b),e&&t(J),e&&t(g),M(N),e&&t(K),e&&t(u),M(w)}}}const qe={local:"simulate.Camera",title:"Sensors"};function je(xe){return Ee(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Be extends Ae{constructor(f){super();Ie(this,f,je,Fe,Oe,{})}}export{Be as default,qe as metadata};
