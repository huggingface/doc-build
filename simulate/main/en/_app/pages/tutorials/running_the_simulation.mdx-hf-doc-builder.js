import{S as ve,i as $e,s as xe,e as o,k as c,w as I,t as n,M as Ee,c as r,d as e,m as h,a as p,x as M,h as l,b as m,G as a,g as i,y as N,L as ke,q as F,o as Y,B as G,v as qe}from"../../chunks/vendor-hf-doc-builder.js";import{I as Pe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as Z}from"../../chunks/CodeBlock-hf-doc-builder.js";function Se(ne){let f,ss,d,b,L,$,xs,U,Es,es,g,ks,x,qs,Ps,as,A,Ss,ts,E,ns,j,Ts,z,Cs,As,ls,O,Os,is,k,os,R,Rs,rs,u,H,Bs,Ds,J,Is,Ms,K,Ns,Fs,Q,Ys,Gs,ps,q,V,Ls,Us,cs,P,hs,S,W,zs,Hs,us,T,ms,_,Js,X,Ks,Qs,fs,C,ds,w,Vs,B,Ws,Xs,ys,v,Zs,D,se,ee,bs;return $=new Pe({}),E=new Z({props:{code:`import simulate as sm
scene = sm.Scene(engine="Unity")
scene += sm.LightSun()
scene += sm.Box(
    name="floor",
    position=[0, 0, 0],
    bounds=[-10, 10, -0.1, 0, -10, 10],
    material=sm.Material.GRAY75,
)
scene += sm.Box(
    name="cube",
    position=[0, 3, 0],
    scaling=[1, 1, 1],
    material=sm.Material.GRAY50,
    with_rigid_body=True,
)
scene += sm.Camera(name="camera", position=[0, 2, -10])
scene.show()

# Prevent auto-closing when running locally
input("Press enter to continue...")`,highlighted:`import simulate as sm
scene = sm.Scene(<span class="hljs-attribute">engine</span>=<span class="hljs-string">&quot;Unity&quot;</span>)
scene += sm.LightSun()
scene += sm.Box(
    <span class="hljs-attribute">name</span>=<span class="hljs-string">&quot;floor&quot;</span>,
    position=[0, 0, 0],
    bounds=[-10, 10, -0.1, 0, -10, 10],
    <span class="hljs-attribute">material</span>=sm.Material.GRAY75,
)
scene += sm.Box(
    <span class="hljs-attribute">name</span>=<span class="hljs-string">&quot;cube&quot;</span>,
    position=[0, 3, 0],
    scaling=[1, 1, 1],
    <span class="hljs-attribute">material</span>=sm.Material.GRAY50,
    <span class="hljs-attribute">with_rigid_body</span>=<span class="hljs-literal">True</span>,
)
scene += sm.Camera(<span class="hljs-attribute">name</span>=<span class="hljs-string">&quot;camera&quot;</span>, position=[0, 2, -10])
scene.show()

<span class="hljs-comment"># Prevent auto-closing when running locally</span>
input(<span class="hljs-string">&quot;Press enter to continue...&quot;</span>)`}}),k=new Z({props:{code:`for i in range(60):
    event = scene.step()`,highlighted:`<span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">60</span>):
    event = <span class="hljs-built_in">scene</span>.<span class="hljs-keyword">step</span>()`}}),P=new Z({props:{code:`import numpy as np
import matplotlib.pyplot as plt
plt.ion()
_, ax1 = plt.subplots(1, 1)
heights = []
for i in range(60):
    event = scene.step()
    height = event["nodes"]["cube"]["position"][1]
    heights.append(height)
    ax1.clear()
    ax1.set_xlim([0, 60])
    ax1.set_ylim([0, 3])
    ax1.plot(np.arange(len(heights)), heights)
    plt.pause(0.1)`,highlighted:`import numpy as np
import matplotlib<span class="hljs-selector-class">.pyplot</span> as plt
plt<span class="hljs-selector-class">.ion</span>()
_, ax1 = plt<span class="hljs-selector-class">.subplots</span>(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>)
heights = <span class="hljs-selector-attr">[]</span>
<span class="hljs-keyword">for</span> <span class="hljs-selector-tag">i</span> <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">60</span>):
    event = scene<span class="hljs-selector-class">.step</span>()
    <span class="hljs-attribute">height</span> = event[<span class="hljs-string">&quot;nodes&quot;</span>][<span class="hljs-string">&quot;cube&quot;</span>][<span class="hljs-string">&quot;position&quot;</span>][<span class="hljs-number">1</span>]
    heights<span class="hljs-selector-class">.append</span>(<span class="hljs-attribute">height</span>)
    ax1<span class="hljs-selector-class">.clear</span>()
    ax1<span class="hljs-selector-class">.set_xlim</span>(<span class="hljs-selector-attr">[0, 60]</span>)
    ax1<span class="hljs-selector-class">.set_ylim</span>(<span class="hljs-selector-attr">[0, 3]</span>)
    ax1<span class="hljs-selector-class">.plot</span>(np<span class="hljs-selector-class">.arange</span>(<span class="hljs-built_in">len</span>(heights)), heights)
    plt<span class="hljs-selector-class">.pause</span>(<span class="hljs-number">0.1</span>)`}}),T=new Z({props:{code:`plt.ion()
_, ax1 = plt.subplots(1, 1)
for i in range(60):
    event = scene.step()
    im = np.array(event["frames"]["camera"], dtype=np.uint8).transpose(1, 2, 0)
    ax1.clear()
    ax1.imshow(im)
    plt.pause(0.1)`,highlighted:`plt<span class="hljs-selector-class">.ion</span>()
_, ax1 = plt<span class="hljs-selector-class">.subplots</span>(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>)
<span class="hljs-keyword">for</span> <span class="hljs-selector-tag">i</span> <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">60</span>):
    event = scene<span class="hljs-selector-class">.step</span>()
    im = np<span class="hljs-selector-class">.array</span>(event<span class="hljs-selector-attr">[<span class="hljs-string">&quot;frames&quot;</span>]</span><span class="hljs-selector-attr">[<span class="hljs-string">&quot;camera&quot;</span>]</span>, dtype=np.uint8)<span class="hljs-selector-class">.transpose</span>(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">0</span>)
    ax1<span class="hljs-selector-class">.clear</span>()
    ax1<span class="hljs-selector-class">.imshow</span>(im)
    plt<span class="hljs-selector-class">.pause</span>(<span class="hljs-number">0.1</span>)`}}),C=new Z({props:{code:`scene.config.return_nodes = False
scene.config.return_frames = False
scene.show()`,highlighted:`scene<span class="hljs-selector-class">.config</span><span class="hljs-selector-class">.return_nodes</span> = False
scene<span class="hljs-selector-class">.config</span><span class="hljs-selector-class">.return_frames</span> = False
scene<span class="hljs-selector-class">.show</span>()`}}),{c(){f=o("meta"),ss=c(),d=o("h1"),b=o("a"),L=o("span"),I($.$$.fragment),xs=c(),U=o("span"),Es=n("Running the simulation"),es=c(),g=o("p"),ks=n(`This section will describe how to run the physics simulation and collect data.
The code in this section is reflected in `),x=o("a"),qs=n("examples/basic/simple_physics.py"),Ps=n("."),as=c(),A=o("p"),Ss=n("Start by displaying a simple scene with a cube above a plane, viewed by a camera:"),ts=c(),I(E.$$.fragment),ns=c(),j=o("p"),Ts=n("Note that we use the Unity engine backend, which supports physics simulation, as well as specify "),z=o("code"),Cs=n("with_rigid_body=True"),As=n(" on the cube, to enable forces like gravity."),ls=c(),O=o("p"),Os=n("Next, run the simulation for 30 timesteps:"),is=c(),I(k.$$.fragment),os=c(),R=o("p"),Rs=n("You should see the cube falling onto the plane."),rs=c(),u=o("p"),H=o("code"),Bs=n("step()"),Ds=n(` tells the backend to step the simulation forward, and allows keyword arguments to be passed, allowing a wide variety of customizable behavior.
The backend then returns a dictionary of data as an `),J=o("code"),Is=n("event"),Ms=n(". By default, this dictionary contains "),K=o("code"),Ns=n("nodes"),Fs=n(" and "),Q=o("code"),Ys=n("frames"),Gs=n("."),ps=c(),q=o("p"),V=o("code"),Ls=n("nodes"),Us=n(` is a dictionary containing all assets in the scene and their physical parameters such as position, rotation, and velocity.
Try graphing the height of the cube as it falls:`),cs=c(),I(P.$$.fragment),hs=c(),S=o("p"),W=o("code"),zs=n("frames"),Hs=n(` is a dictionary containing the rendering from each camera.
Try modifying the code to display these frames in matplotlib:`),us=c(),I(T.$$.fragment),ms=c(),_=o("p"),Js=n("\u{1F917} Simulate is highly customizable. If you aren\u2019t interested in returning this data, you can modify the scene configuration prior to calling "),X=o("code"),Ks=n("show()"),Qs=n(" to disable it:"),fs=c(),I(C.$$.fragment),ds=c(),w=o("p"),Vs=n("For advanced use, you can extend this functionality using "),B=o("a"),Ws=n("plugins"),Xs=n("."),ys=c(),v=o("p"),Zs=n("In this library, we include an extensive plugin for reinforcement learning. If you are using \u{1F917} Simulate for reinforcement learning, continue with "),D=o("a"),se=n("reinforcement learning how-tos"),ee=n("."),this.h()},l(s){const t=Ee('[data-svelte="svelte-1phssyn"]',document.head);f=r(t,"META",{name:!0,content:!0}),t.forEach(e),ss=h(s),d=r(s,"H1",{class:!0});var gs=p(d);b=r(gs,"A",{id:!0,class:!0,href:!0});var le=p(b);L=r(le,"SPAN",{});var ie=p(L);M($.$$.fragment,ie),ie.forEach(e),le.forEach(e),xs=h(gs),U=r(gs,"SPAN",{});var oe=p(U);Es=l(oe,"Running the simulation"),oe.forEach(e),gs.forEach(e),es=h(s),g=r(s,"P",{});var js=p(g);ks=l(js,`This section will describe how to run the physics simulation and collect data.
The code in this section is reflected in `),x=r(js,"A",{href:!0,rel:!0});var re=p(x);qs=l(re,"examples/basic/simple_physics.py"),re.forEach(e),Ps=l(js,"."),js.forEach(e),as=h(s),A=r(s,"P",{});var pe=p(A);Ss=l(pe,"Start by displaying a simple scene with a cube above a plane, viewed by a camera:"),pe.forEach(e),ts=h(s),M(E.$$.fragment,s),ns=h(s),j=r(s,"P",{});var _s=p(j);Ts=l(_s,"Note that we use the Unity engine backend, which supports physics simulation, as well as specify "),z=r(_s,"CODE",{});var ce=p(z);Cs=l(ce,"with_rigid_body=True"),ce.forEach(e),As=l(_s," on the cube, to enable forces like gravity."),_s.forEach(e),ls=h(s),O=r(s,"P",{});var he=p(O);Os=l(he,"Next, run the simulation for 30 timesteps:"),he.forEach(e),is=h(s),M(k.$$.fragment,s),os=h(s),R=r(s,"P",{});var ue=p(R);Rs=l(ue,"You should see the cube falling onto the plane."),ue.forEach(e),rs=h(s),u=r(s,"P",{});var y=p(u);H=r(y,"CODE",{});var me=p(H);Bs=l(me,"step()"),me.forEach(e),Ds=l(y,` tells the backend to step the simulation forward, and allows keyword arguments to be passed, allowing a wide variety of customizable behavior.
The backend then returns a dictionary of data as an `),J=r(y,"CODE",{});var fe=p(J);Is=l(fe,"event"),fe.forEach(e),Ms=l(y,". By default, this dictionary contains "),K=r(y,"CODE",{});var de=p(K);Ns=l(de,"nodes"),de.forEach(e),Fs=l(y," and "),Q=r(y,"CODE",{});var ye=p(Q);Ys=l(ye,"frames"),ye.forEach(e),Gs=l(y,"."),y.forEach(e),ps=h(s),q=r(s,"P",{});var ae=p(q);V=r(ae,"CODE",{});var be=p(V);Ls=l(be,"nodes"),be.forEach(e),Us=l(ae,` is a dictionary containing all assets in the scene and their physical parameters such as position, rotation, and velocity.
Try graphing the height of the cube as it falls:`),ae.forEach(e),cs=h(s),M(P.$$.fragment,s),hs=h(s),S=r(s,"P",{});var te=p(S);W=r(te,"CODE",{});var ge=p(W);zs=l(ge,"frames"),ge.forEach(e),Hs=l(te,` is a dictionary containing the rendering from each camera.
Try modifying the code to display these frames in matplotlib:`),te.forEach(e),us=h(s),M(T.$$.fragment,s),ms=h(s),_=r(s,"P",{});var ws=p(_);Js=l(ws,"\u{1F917} Simulate is highly customizable. If you aren\u2019t interested in returning this data, you can modify the scene configuration prior to calling "),X=r(ws,"CODE",{});var je=p(X);Ks=l(je,"show()"),je.forEach(e),Qs=l(ws," to disable it:"),ws.forEach(e),fs=h(s),M(C.$$.fragment,s),ds=h(s),w=r(s,"P",{});var vs=p(w);Vs=l(vs,"For advanced use, you can extend this functionality using "),B=r(vs,"A",{href:!0});var _e=p(B);Ws=l(_e,"plugins"),_e.forEach(e),Xs=l(vs,"."),vs.forEach(e),ys=h(s),v=r(s,"P",{});var $s=p(v);Zs=l($s,"In this library, we include an extensive plugin for reinforcement learning. If you are using \u{1F917} Simulate for reinforcement learning, continue with "),D=r($s,"A",{href:!0});var we=p(D);se=l(we,"reinforcement learning how-tos"),we.forEach(e),ee=l($s,"."),$s.forEach(e),this.h()},h(){m(f,"name","hf:doc:metadata"),m(f,"content",JSON.stringify(Te)),m(b,"id","running-the-simulation"),m(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(b,"href","#running-the-simulation"),m(d,"class","relative group"),m(x,"href","https://github.com/huggingface/simulate/blob/main/examples/basic/simple_physics.py"),m(x,"rel","nofollow"),m(B,"href","./howto/plugins"),m(D,"href","../howto/rl")},m(s,t){a(document.head,f),i(s,ss,t),i(s,d,t),a(d,b),a(b,L),N($,L,null),a(d,xs),a(d,U),a(U,Es),i(s,es,t),i(s,g,t),a(g,ks),a(g,x),a(x,qs),a(g,Ps),i(s,as,t),i(s,A,t),a(A,Ss),i(s,ts,t),N(E,s,t),i(s,ns,t),i(s,j,t),a(j,Ts),a(j,z),a(z,Cs),a(j,As),i(s,ls,t),i(s,O,t),a(O,Os),i(s,is,t),N(k,s,t),i(s,os,t),i(s,R,t),a(R,Rs),i(s,rs,t),i(s,u,t),a(u,H),a(H,Bs),a(u,Ds),a(u,J),a(J,Is),a(u,Ms),a(u,K),a(K,Ns),a(u,Fs),a(u,Q),a(Q,Ys),a(u,Gs),i(s,ps,t),i(s,q,t),a(q,V),a(V,Ls),a(q,Us),i(s,cs,t),N(P,s,t),i(s,hs,t),i(s,S,t),a(S,W),a(W,zs),a(S,Hs),i(s,us,t),N(T,s,t),i(s,ms,t),i(s,_,t),a(_,Js),a(_,X),a(X,Ks),a(_,Qs),i(s,fs,t),N(C,s,t),i(s,ds,t),i(s,w,t),a(w,Vs),a(w,B),a(B,Ws),a(w,Xs),i(s,ys,t),i(s,v,t),a(v,Zs),a(v,D),a(D,se),a(v,ee),bs=!0},p:ke,i(s){bs||(F($.$$.fragment,s),F(E.$$.fragment,s),F(k.$$.fragment,s),F(P.$$.fragment,s),F(T.$$.fragment,s),F(C.$$.fragment,s),bs=!0)},o(s){Y($.$$.fragment,s),Y(E.$$.fragment,s),Y(k.$$.fragment,s),Y(P.$$.fragment,s),Y(T.$$.fragment,s),Y(C.$$.fragment,s),bs=!1},d(s){e(f),s&&e(ss),s&&e(d),G($),s&&e(es),s&&e(g),s&&e(as),s&&e(A),s&&e(ts),G(E,s),s&&e(ns),s&&e(j),s&&e(ls),s&&e(O),s&&e(is),G(k,s),s&&e(os),s&&e(R),s&&e(rs),s&&e(u),s&&e(ps),s&&e(q),s&&e(cs),G(P,s),s&&e(hs),s&&e(S),s&&e(us),G(T,s),s&&e(ms),s&&e(_),s&&e(fs),G(C,s),s&&e(ds),s&&e(w),s&&e(ys),s&&e(v)}}}const Te={local:"running-the-simulation",title:"Running the simulation"};function Ce(ne){return qe(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Be extends ve{constructor(f){super();$e(this,f,Ce,Se,xe,{})}}export{Be as default,Te as metadata};
