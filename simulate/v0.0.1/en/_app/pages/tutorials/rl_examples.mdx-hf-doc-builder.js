import{S as Pn,i as Cn,s as In,e as n,k as f,w as ie,t as l,M as Nn,c as i,d as t,m as p,a as s,x as oe,h as c,b as h,N as Ge,G as a,g as r,y as se,L as Tn,q as re,o as le,B as ce,v as Rn}from"../../chunks/vendor-hf-doc-builder.js";import{I as fe}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Mn(Pa){let b,He,w,j,pe,M,Pt,he,Ct,Ke,x,It,me,Nt,Tt,Ue,W,Rt,We,m,ue,Mt,kt,ve,St,zt,de,Ot,qt,be,Bt,Gt,we,Ht,De,g,$,ge,k,Kt,_e,Ut,Je,S,Ca,Fe,D,Wt,Qe,u,Ae,Dt,Jt,Ee,Ft,Qt,ye,Vt,Ve,J,Xt,Xe,_,L,je,z,Yt,xe,Zt,Ye,O,Ia,Ze,F,ea,et,P,$e,ta,aa,Le,na,tt,Q,ia,at,A,C,Pe,q,oa,Ce,sa,nt,B,Na,it,V,ra,ot,I,Ie,la,ca,Ne,fa,st,X,pa,rt,E,N,Te,G,ha,Re,ma,lt,H,Ta,ct,Y,ua,ft,v,Me,va,da,ke,ba,wa,Se,ga,pt,Z,_a,ht,y,T,ze,K,Aa,Oe,Ea,mt,U,Ra,ut,ee,ya,vt,R,qe,ja,xa,Be,$a,dt,te,La,bt;return M=new fe({}),k=new fe({}),z=new fe({}),q=new fe({}),G=new fe({}),K=new fe({}),{c(){b=n("meta"),He=f(),w=n("h1"),j=n("a"),pe=n("span"),ie(M.$$.fragment),Pt=f(),he=n("span"),Ct=l("Using \u{1F917} Simulate to learn Agent behaviors with Stable-Baselines3"),Ke=f(),x=n("p"),It=l("We provide several example RL integrations with the Stable-Baselines3 (LINK) library. To install this dependancy use "),me=n("code"),Nt=l("pip install simulate[sb3]"),Tt=l("."),Ue=f(),W=n("p"),Rt=l("Including:"),We=f(),m=n("ul"),ue=n("li"),Mt=l("Learning to navigate in a simple T-Maze"),kt=f(),ve=n("li"),St=l("Collecting objects"),zt=f(),de=n("li"),Ot=l("Navigating in procedurally generated mazes"),qt=f(),be=n("li"),Bt=l("Physical interaction with movable objects"),Gt=f(),we=n("li"),Ht=l("Reward functions based on line of sight observation of objects."),De=f(),g=n("h2"),$=n("a"),ge=n("span"),ie(k.$$.fragment),Kt=f(),_e=n("span"),Ut=l("Learning to navigate in a simple T-Maze"),Je=f(),S=n("img"),Fe=l(`
Example: examples/sb3_basic_maze.py
Objective: Navigate to a spherical object in a simple T-Maze. Upon object collection, the environment resets.
Actors: An EgoCentric Camera Actor (LINK) equipped with a monocular camera
Observation space: 
- An RGB camera of shape (3, 40, 40)  (C, H, W) in uint8 format.
Action space:
- A discrete action space with 3 possible actions
- Turn left 10 degrees
- Turn right 10 degrees
- Move forward
`),D=n("p"),Wt=l("Reward function:"),Qe=f(),u=n("ul"),Ae=n("li"),Dt=l("A dense reward based on improvement in best euclidean distance to the object"),Jt=f(),Ee=n("li"),Ft=l("A sparse reward of +1 when the object is collected"),Qt=f(),ye=n("li"),Vt=l("A timeout penaly of -1 if the agent does not reach the object in 200 time-steps"),Ve=f(),J=n("p"),Xt=l("Parallel: 4 independent instances of the same environment configuration."),Xe=f(),_=n("h2"),L=n("a"),je=n("span"),ie(z.$$.fragment),Yt=f(),xe=n("span"),Zt=l("Collecting objects"),Ye=f(),O=n("img"),Ze=l(`
Example: examples/sb3_collectables.py
Objective: Collect all 20 objects in a large square room.
Actors: An EgoCentric Camera Actor (LINK) equipped with a monocular camera
Observation space: 
- An RGB camera of shape (3, 40, 40)  (C, H, W) in uint8 format.
Action space:
- A discrete action space with 3 possible actions
- Turn left 10 degrees
- Turn right 10 degrees
- Move forward
`),F=n("p"),ea=l("Reward function:"),et=f(),P=n("ul"),$e=n("li"),ta=l("A sparse reward of +1 when an object is collected"),aa=f(),Le=n("li"),na=l("A timeout penaly of -1 if the agent does not reach the object in 500 time-steps"),tt=f(),Q=n("p"),ia=l("Parallel: 4 independent instances of the same environment configuration."),at=f(),A=n("h2"),C=n("a"),Pe=n("span"),ie(q.$$.fragment),oa=f(),Ce=n("span"),sa=l("Navigating in procedurally generated mazes"),nt=f(),B=n("img"),it=l(`
Example: examples/sb3_procgen.py
Objective: Navigate to an object in a 3D maze, when the object is collected the environment resets.
Actors: An EgoCentric Camera Actor (LINK) equipped with a monocular camera
Observation space: 
- An RGB camera of shape (3, 40, 40)  (C, H, W) in uint8 format.
Action space:
- A discrete action space with 3 possible actions
- Turn left 10 degrees
- Turn right 10 degrees
- Move forward
`),V=n("p"),ra=l("Reward function:"),ot=f(),I=n("ul"),Ie=n("li"),la=l("A sparse reward of +1 when the object is reached"),ca=f(),Ne=n("li"),fa=l("A timeout penaly of -1 if the agent does not reach the object in 500 time-steps"),st=f(),X=n("p"),pa=l("Parallel: 4 independent instances of randomly generated environment configurations."),rt=f(),E=n("h2"),N=n("a"),Te=n("span"),ie(G.$$.fragment),ha=f(),Re=n("span"),ma=l("Physical interaction with movable objects"),lt=f(),H=n("img"),ct=l(`
Example: examples/sb3_move_boxes.py
Objective: Push boxes in a room near to each other.
Actors: An EgoCentric Camera Actor (LINK) equipped with a monocular camera
Observation space: 
- An RGB camera of shape (3, 40, 40)  (C, H, W) in uint8 format.
Action space:
- A discrete action space with 3 possible actions
- Turn left 10 degrees
- Turn right 10 degrees
- Move forward
`),Y=n("p"),ua=l("Reward function:"),ft=f(),v=n("ul"),Me=n("li"),va=l("A reward for moving the red and yellow boxes close to eachother"),da=f(),ke=n("li"),ba=l("A reward for moving the green and white boxes close to eachother"),wa=f(),Se=n("li"),ga=l("A timeout penaly of -1 if the agent does not reach the object in 100 time-steps"),pt=f(),Z=n("p"),_a=l("Parallel: 16 independent instances of the same environment configuration."),ht=f(),y=n("h2"),T=n("a"),ze=n("span"),ie(K.$$.fragment),Aa=f(),Oe=n("span"),Ea=l("Reward functions based on line of sight observation of objects."),mt=f(),U=n("img"),ut=l(`
Example: examples/sb3_visual_reward.py
Objective: Move the agent so the box is within the agents its field of view
Actors: An EgoCentric Camera Actor (LINK) equipped with a monocular camera
Observation space: 
- An RGB camera of shape (3, 40, 40)  (C, H, W) in uint8 format.
Action space:
- A discrete action space with 3 possible actions
- Turn left 10 degrees
- Turn right 10 degrees
- Move forward
`),ee=n("p"),ya=l("Reward function:"),vt=f(),R=n("ul"),qe=n("li"),ja=l("A sparse reward for moving the box within a 60 degree fov cone in front of the agent."),xa=f(),Be=n("li"),$a=l("A timeout penaly of -1 if the agent does not reach the object in 100 time-steps"),dt=f(),te=n("p"),La=l("Parallel: 4 independent instances of the same environment configuration."),this.h()},l(e){const o=Nn('[data-svelte="svelte-1phssyn"]',document.head);b=i(o,"META",{name:!0,content:!0}),o.forEach(t),He=p(e),w=i(e,"H1",{class:!0});var wt=s(w);j=i(wt,"A",{id:!0,class:!0,href:!0});var Ma=s(j);pe=i(Ma,"SPAN",{});var ka=s(pe);oe(M.$$.fragment,ka),ka.forEach(t),Ma.forEach(t),Pt=p(wt),he=i(wt,"SPAN",{});var Sa=s(he);Ct=c(Sa,"Using \u{1F917} Simulate to learn Agent behaviors with Stable-Baselines3"),Sa.forEach(t),wt.forEach(t),Ke=p(e),x=i(e,"P",{});var gt=s(x);It=c(gt,"We provide several example RL integrations with the Stable-Baselines3 (LINK) library. To install this dependancy use "),me=i(gt,"CODE",{});var za=s(me);Nt=c(za,"pip install simulate[sb3]"),za.forEach(t),Tt=c(gt,"."),gt.forEach(t),Ue=p(e),W=i(e,"P",{});var Oa=s(W);Rt=c(Oa,"Including:"),Oa.forEach(t),We=p(e),m=i(e,"UL",{});var d=s(m);ue=i(d,"LI",{});var qa=s(ue);Mt=c(qa,"Learning to navigate in a simple T-Maze"),qa.forEach(t),kt=p(d),ve=i(d,"LI",{});var Ba=s(ve);St=c(Ba,"Collecting objects"),Ba.forEach(t),zt=p(d),de=i(d,"LI",{});var Ga=s(de);Ot=c(Ga,"Navigating in procedurally generated mazes"),Ga.forEach(t),qt=p(d),be=i(d,"LI",{});var Ha=s(be);Bt=c(Ha,"Physical interaction with movable objects"),Ha.forEach(t),Gt=p(d),we=i(d,"LI",{});var Ka=s(we);Ht=c(Ka,"Reward functions based on line of sight observation of objects."),Ka.forEach(t),d.forEach(t),De=p(e),g=i(e,"H2",{class:!0});var _t=s(g);$=i(_t,"A",{id:!0,class:!0,href:!0});var Ua=s($);ge=i(Ua,"SPAN",{});var Wa=s(ge);oe(k.$$.fragment,Wa),Wa.forEach(t),Ua.forEach(t),Kt=p(_t),_e=i(_t,"SPAN",{});var Da=s(_e);Ut=c(Da,"Learning to navigate in a simple T-Maze"),Da.forEach(t),_t.forEach(t),Je=p(e),S=i(e,"IMG",{class:!0,src:!0}),Fe=c(e,`
Example: examples/sb3_basic_maze.py
Objective: Navigate to a spherical object in a simple T-Maze. Upon object collection, the environment resets.
Actors: An EgoCentric Camera Actor (LINK) equipped with a monocular camera
Observation space: 
- An RGB camera of shape (3, 40, 40)  (C, H, W) in uint8 format.
Action space:
- A discrete action space with 3 possible actions
- Turn left 10 degrees
- Turn right 10 degrees
- Move forward
`),D=i(e,"P",{});var Ja=s(D);Wt=c(Ja,"Reward function:"),Ja.forEach(t),Qe=p(e),u=i(e,"UL",{});var ae=s(u);Ae=i(ae,"LI",{});var Fa=s(Ae);Dt=c(Fa,"A dense reward based on improvement in best euclidean distance to the object"),Fa.forEach(t),Jt=p(ae),Ee=i(ae,"LI",{});var Qa=s(Ee);Ft=c(Qa,"A sparse reward of +1 when the object is collected"),Qa.forEach(t),Qt=p(ae),ye=i(ae,"LI",{});var Va=s(ye);Vt=c(Va,"A timeout penaly of -1 if the agent does not reach the object in 200 time-steps"),Va.forEach(t),ae.forEach(t),Ve=p(e),J=i(e,"P",{});var Xa=s(J);Xt=c(Xa,"Parallel: 4 independent instances of the same environment configuration."),Xa.forEach(t),Xe=p(e),_=i(e,"H2",{class:!0});var At=s(_);L=i(At,"A",{id:!0,class:!0,href:!0});var Ya=s(L);je=i(Ya,"SPAN",{});var Za=s(je);oe(z.$$.fragment,Za),Za.forEach(t),Ya.forEach(t),Yt=p(At),xe=i(At,"SPAN",{});var en=s(xe);Zt=c(en,"Collecting objects"),en.forEach(t),At.forEach(t),Ye=p(e),O=i(e,"IMG",{class:!0,src:!0}),Ze=c(e,`
Example: examples/sb3_collectables.py
Objective: Collect all 20 objects in a large square room.
Actors: An EgoCentric Camera Actor (LINK) equipped with a monocular camera
Observation space: 
- An RGB camera of shape (3, 40, 40)  (C, H, W) in uint8 format.
Action space:
- A discrete action space with 3 possible actions
- Turn left 10 degrees
- Turn right 10 degrees
- Move forward
`),F=i(e,"P",{});var tn=s(F);ea=c(tn,"Reward function:"),tn.forEach(t),et=p(e),P=i(e,"UL",{});var Et=s(P);$e=i(Et,"LI",{});var an=s($e);ta=c(an,"A sparse reward of +1 when an object is collected"),an.forEach(t),aa=p(Et),Le=i(Et,"LI",{});var nn=s(Le);na=c(nn,"A timeout penaly of -1 if the agent does not reach the object in 500 time-steps"),nn.forEach(t),Et.forEach(t),tt=p(e),Q=i(e,"P",{});var on=s(Q);ia=c(on,"Parallel: 4 independent instances of the same environment configuration."),on.forEach(t),at=p(e),A=i(e,"H2",{class:!0});var yt=s(A);C=i(yt,"A",{id:!0,class:!0,href:!0});var sn=s(C);Pe=i(sn,"SPAN",{});var rn=s(Pe);oe(q.$$.fragment,rn),rn.forEach(t),sn.forEach(t),oa=p(yt),Ce=i(yt,"SPAN",{});var ln=s(Ce);sa=c(ln,"Navigating in procedurally generated mazes"),ln.forEach(t),yt.forEach(t),nt=p(e),B=i(e,"IMG",{class:!0,src:!0}),it=c(e,`
Example: examples/sb3_procgen.py
Objective: Navigate to an object in a 3D maze, when the object is collected the environment resets.
Actors: An EgoCentric Camera Actor (LINK) equipped with a monocular camera
Observation space: 
- An RGB camera of shape (3, 40, 40)  (C, H, W) in uint8 format.
Action space:
- A discrete action space with 3 possible actions
- Turn left 10 degrees
- Turn right 10 degrees
- Move forward
`),V=i(e,"P",{});var cn=s(V);ra=c(cn,"Reward function:"),cn.forEach(t),ot=p(e),I=i(e,"UL",{});var jt=s(I);Ie=i(jt,"LI",{});var fn=s(Ie);la=c(fn,"A sparse reward of +1 when the object is reached"),fn.forEach(t),ca=p(jt),Ne=i(jt,"LI",{});var pn=s(Ne);fa=c(pn,"A timeout penaly of -1 if the agent does not reach the object in 500 time-steps"),pn.forEach(t),jt.forEach(t),st=p(e),X=i(e,"P",{});var hn=s(X);pa=c(hn,"Parallel: 4 independent instances of randomly generated environment configurations."),hn.forEach(t),rt=p(e),E=i(e,"H2",{class:!0});var xt=s(E);N=i(xt,"A",{id:!0,class:!0,href:!0});var mn=s(N);Te=i(mn,"SPAN",{});var un=s(Te);oe(G.$$.fragment,un),un.forEach(t),mn.forEach(t),ha=p(xt),Re=i(xt,"SPAN",{});var vn=s(Re);ma=c(vn,"Physical interaction with movable objects"),vn.forEach(t),xt.forEach(t),lt=p(e),H=i(e,"IMG",{class:!0,src:!0}),ct=c(e,`
Example: examples/sb3_move_boxes.py
Objective: Push boxes in a room near to each other.
Actors: An EgoCentric Camera Actor (LINK) equipped with a monocular camera
Observation space: 
- An RGB camera of shape (3, 40, 40)  (C, H, W) in uint8 format.
Action space:
- A discrete action space with 3 possible actions
- Turn left 10 degrees
- Turn right 10 degrees
- Move forward
`),Y=i(e,"P",{});var dn=s(Y);ua=c(dn,"Reward function:"),dn.forEach(t),ft=p(e),v=i(e,"UL",{});var ne=s(v);Me=i(ne,"LI",{});var bn=s(Me);va=c(bn,"A reward for moving the red and yellow boxes close to eachother"),bn.forEach(t),da=p(ne),ke=i(ne,"LI",{});var wn=s(ke);ba=c(wn,"A reward for moving the green and white boxes close to eachother"),wn.forEach(t),wa=p(ne),Se=i(ne,"LI",{});var gn=s(Se);ga=c(gn,"A timeout penaly of -1 if the agent does not reach the object in 100 time-steps"),gn.forEach(t),ne.forEach(t),pt=p(e),Z=i(e,"P",{});var _n=s(Z);_a=c(_n,"Parallel: 16 independent instances of the same environment configuration."),_n.forEach(t),ht=p(e),y=i(e,"H2",{class:!0});var $t=s(y);T=i($t,"A",{id:!0,class:!0,href:!0});var An=s(T);ze=i(An,"SPAN",{});var En=s(ze);oe(K.$$.fragment,En),En.forEach(t),An.forEach(t),Aa=p($t),Oe=i($t,"SPAN",{});var yn=s(Oe);Ea=c(yn,"Reward functions based on line of sight observation of objects."),yn.forEach(t),$t.forEach(t),mt=p(e),U=i(e,"IMG",{class:!0,src:!0}),ut=c(e,`
Example: examples/sb3_visual_reward.py
Objective: Move the agent so the box is within the agents its field of view
Actors: An EgoCentric Camera Actor (LINK) equipped with a monocular camera
Observation space: 
- An RGB camera of shape (3, 40, 40)  (C, H, W) in uint8 format.
Action space:
- A discrete action space with 3 possible actions
- Turn left 10 degrees
- Turn right 10 degrees
- Move forward
`),ee=i(e,"P",{});var jn=s(ee);ya=c(jn,"Reward function:"),jn.forEach(t),vt=p(e),R=i(e,"UL",{});var Lt=s(R);qe=i(Lt,"LI",{});var xn=s(qe);ja=c(xn,"A sparse reward for moving the box within a 60 degree fov cone in front of the agent."),xn.forEach(t),xa=p(Lt),Be=i(Lt,"LI",{});var $n=s(Be);$a=c($n,"A timeout penaly of -1 if the agent does not reach the object in 100 time-steps"),$n.forEach(t),Lt.forEach(t),dt=p(e),te=i(e,"P",{});var Ln=s(te);La=c(Ln,"Parallel: 4 independent instances of the same environment configuration."),Ln.forEach(t),this.h()},h(){h(b,"name","hf:doc:metadata"),h(b,"content",JSON.stringify(kn)),h(j,"id","using-simulate-to-learn-agent-behaviors-with-stablebaselines3"),h(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(j,"href","#using-simulate-to-learn-agent-behaviors-with-stablebaselines3"),h(w,"class","relative group"),h($,"id","learning-to-navigate-in-a-simple-tmaze"),h($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($,"href","#learning-to-navigate-in-a-simple-tmaze"),h(g,"class","relative group"),h(S,"class","float-left !m-0 !border-0 !dark:border-0 !shadow-none !max-w-lg w-[150px]"),Ge(S.src,Ca="/docs/assets/simulate_sb3_basic_maze.png")||h(S,"src",Ca),h(L,"id","collecting-objects"),h(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(L,"href","#collecting-objects"),h(_,"class","relative group"),h(O,"class","float-left !m-0 !border-0 !dark:border-0 !shadow-none !max-w-lg w-[150px]"),Ge(O.src,Ia="/docs/assets/simulate_sb3_collectables.png")||h(O,"src",Ia),h(C,"id","navigating-in-procedurally-generated-mazes"),h(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(C,"href","#navigating-in-procedurally-generated-mazes"),h(A,"class","relative group"),h(B,"class","float-left !m-0 !border-0 !dark:border-0 !shadow-none !max-w-lg w-[150px]"),Ge(B.src,Na="/docs/assets/simulate_sb3_procgen.png")||h(B,"src",Na),h(N,"id","physical-interaction-with-movable-objects"),h(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(N,"href","#physical-interaction-with-movable-objects"),h(E,"class","relative group"),h(H,"class","float-left !m-0 !border-0 !dark:border-0 !shadow-none !max-w-lg w-[150px]"),Ge(H.src,Ta="/docs/assets/simulate_sb3_move_boxes.png")||h(H,"src",Ta),h(T,"id","reward-functions-based-on-line-of-sight-observation-of-objects"),h(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(T,"href","#reward-functions-based-on-line-of-sight-observation-of-objects"),h(y,"class","relative group"),h(U,"class","float-left !m-0 !border-0 !dark:border-0 !shadow-none !max-w-lg w-[150px]"),Ge(U.src,Ra="/docs/assets/simulate_sb3_see_reward.png")||h(U,"src",Ra)},m(e,o){a(document.head,b),r(e,He,o),r(e,w,o),a(w,j),a(j,pe),se(M,pe,null),a(w,Pt),a(w,he),a(he,Ct),r(e,Ke,o),r(e,x,o),a(x,It),a(x,me),a(me,Nt),a(x,Tt),r(e,Ue,o),r(e,W,o),a(W,Rt),r(e,We,o),r(e,m,o),a(m,ue),a(ue,Mt),a(m,kt),a(m,ve),a(ve,St),a(m,zt),a(m,de),a(de,Ot),a(m,qt),a(m,be),a(be,Bt),a(m,Gt),a(m,we),a(we,Ht),r(e,De,o),r(e,g,o),a(g,$),a($,ge),se(k,ge,null),a(g,Kt),a(g,_e),a(_e,Ut),r(e,Je,o),r(e,S,o),r(e,Fe,o),r(e,D,o),a(D,Wt),r(e,Qe,o),r(e,u,o),a(u,Ae),a(Ae,Dt),a(u,Jt),a(u,Ee),a(Ee,Ft),a(u,Qt),a(u,ye),a(ye,Vt),r(e,Ve,o),r(e,J,o),a(J,Xt),r(e,Xe,o),r(e,_,o),a(_,L),a(L,je),se(z,je,null),a(_,Yt),a(_,xe),a(xe,Zt),r(e,Ye,o),r(e,O,o),r(e,Ze,o),r(e,F,o),a(F,ea),r(e,et,o),r(e,P,o),a(P,$e),a($e,ta),a(P,aa),a(P,Le),a(Le,na),r(e,tt,o),r(e,Q,o),a(Q,ia),r(e,at,o),r(e,A,o),a(A,C),a(C,Pe),se(q,Pe,null),a(A,oa),a(A,Ce),a(Ce,sa),r(e,nt,o),r(e,B,o),r(e,it,o),r(e,V,o),a(V,ra),r(e,ot,o),r(e,I,o),a(I,Ie),a(Ie,la),a(I,ca),a(I,Ne),a(Ne,fa),r(e,st,o),r(e,X,o),a(X,pa),r(e,rt,o),r(e,E,o),a(E,N),a(N,Te),se(G,Te,null),a(E,ha),a(E,Re),a(Re,ma),r(e,lt,o),r(e,H,o),r(e,ct,o),r(e,Y,o),a(Y,ua),r(e,ft,o),r(e,v,o),a(v,Me),a(Me,va),a(v,da),a(v,ke),a(ke,ba),a(v,wa),a(v,Se),a(Se,ga),r(e,pt,o),r(e,Z,o),a(Z,_a),r(e,ht,o),r(e,y,o),a(y,T),a(T,ze),se(K,ze,null),a(y,Aa),a(y,Oe),a(Oe,Ea),r(e,mt,o),r(e,U,o),r(e,ut,o),r(e,ee,o),a(ee,ya),r(e,vt,o),r(e,R,o),a(R,qe),a(qe,ja),a(R,xa),a(R,Be),a(Be,$a),r(e,dt,o),r(e,te,o),a(te,La),bt=!0},p:Tn,i(e){bt||(re(M.$$.fragment,e),re(k.$$.fragment,e),re(z.$$.fragment,e),re(q.$$.fragment,e),re(G.$$.fragment,e),re(K.$$.fragment,e),bt=!0)},o(e){le(M.$$.fragment,e),le(k.$$.fragment,e),le(z.$$.fragment,e),le(q.$$.fragment,e),le(G.$$.fragment,e),le(K.$$.fragment,e),bt=!1},d(e){t(b),e&&t(He),e&&t(w),ce(M),e&&t(Ke),e&&t(x),e&&t(Ue),e&&t(W),e&&t(We),e&&t(m),e&&t(De),e&&t(g),ce(k),e&&t(Je),e&&t(S),e&&t(Fe),e&&t(D),e&&t(Qe),e&&t(u),e&&t(Ve),e&&t(J),e&&t(Xe),e&&t(_),ce(z),e&&t(Ye),e&&t(O),e&&t(Ze),e&&t(F),e&&t(et),e&&t(P),e&&t(tt),e&&t(Q),e&&t(at),e&&t(A),ce(q),e&&t(nt),e&&t(B),e&&t(it),e&&t(V),e&&t(ot),e&&t(I),e&&t(st),e&&t(X),e&&t(rt),e&&t(E),ce(G),e&&t(lt),e&&t(H),e&&t(ct),e&&t(Y),e&&t(ft),e&&t(v),e&&t(pt),e&&t(Z),e&&t(ht),e&&t(y),ce(K),e&&t(mt),e&&t(U),e&&t(ut),e&&t(ee),e&&t(vt),e&&t(R),e&&t(dt),e&&t(te)}}}const kn={local:"using-simulate-to-learn-agent-behaviors-with-stablebaselines3",sections:[{local:"learning-to-navigate-in-a-simple-tmaze",title:"Learning to navigate in a simple T-Maze"},{local:"collecting-objects",title:"Collecting objects"},{local:"navigating-in-procedurally-generated-mazes",title:"Navigating in procedurally generated mazes"},{local:"physical-interaction-with-movable-objects",title:"Physical interaction with movable objects"},{local:"reward-functions-based-on-line-of-sight-observation-of-objects",title:"Reward functions based on line of sight observation of objects."}],title:"Using \u{1F917} Simulate to learn Agent behaviors with Stable-Baselines3"};function Sn(Pa){return Rn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qn extends Pn{constructor(b){super();Cn(this,b,Sn,Mn,In,{})}}export{qn as default,kn as metadata};
