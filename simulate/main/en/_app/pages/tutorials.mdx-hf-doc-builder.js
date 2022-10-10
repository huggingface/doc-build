import{S as Dt,i as Rt,s as Ot,e as o,k as f,w as be,t as n,M as qt,c as r,d as a,m as c,a as l,x as xe,h as i,b as u,G as t,g as h,y as Ee,q as ke,o as $e,B as Se,v as Ct}from"../chunks/vendor-hf-doc-builder.js";import{T as It}from"../chunks/Tip-hf-doc-builder.js";import{I as ht}from"../chunks/IconCopyLink-hf-doc-builder.js";function Nt(te){let d;return{c(){d=n("The examples only cover the basic skills you need to use \u{1F917} Simulate. There are many other useful functionalities and applications that aren't discussed here, we will expand on these in upcoming releases.")},l(m){d=i(m,"The examples only cover the basic skills you need to use \u{1F917} Simulate. There are many other useful functionalities and applications that aren't discussed here, we will expand on these in upcoming releases.")},m(m,p){h(m,d,p)},d(m){m&&a(d)}}}function Ht(te){let d,m,p,b,B,L,Ae,G,Le,ae,x,Pe,P,Te,De,oe,y,E,j,T,Re,F,Oe,re,k,le,v,qe,W,Ce,Ie,J,Ne,He,ne,w,D,Me,z,Ue,Ye,Be,N,K,Ge,je,Fe,g,Q,We,Je,V,ze,Ke,X,Qe,Ve,ie,$,Xe,R,Ze,et,se,_,S,Z,O,tt,ee,at,he,H,ot,ue,A,rt,q,lt,nt,fe,ce,de,M,it,pe;return L=new ht({}),T=new ht({}),k=new It({props:{$$slots:{default:[Nt]},$$scope:{ctx:te}}}),O=new ht({}),{c(){d=o("meta"),m=f(),p=o("h1"),b=o("a"),B=o("span"),be(L.$$.fragment),Ae=f(),G=o("span"),Le=n("Overview"),ae=f(),x=o("p"),Pe=n("Welcome to the \u{1F917} Simulate tutorials! These beginner-friendly tutorials will guide you through the fundamentals of working with \u{1F917} Simulate. You\u2019ll load and prepare an environment for training with your Deep RL framework of choice. Along the way, you\u2019ll learn how to define and load different Assets, Sensors and Actuators, watch an RL Agent interact with and see what\u2019s inside your environment and share a dataset to the "),P=o("a"),Te=n("Hub"),De=n("."),oe=f(),y=o("h2"),E=o("a"),j=o("span"),be(T.$$.fragment),Re=f(),F=o("span"),Oe=n("Examples"),re=n(`

The examples assume some basic knowledge of Python, Deep Reinforcement Learning and a Deep RL framework like [Stable Baselines 3](https://stable-baselines3.readthedocs.io/en/master/).
If you're already familiar with these, feel free to check out the [quickstart](./quickstart) to see what you can do with \u{1F917} Simulate. If you want to learn more about Deep Reinforcement Learning, check of the \u{1F917} [Deep RL course](https://github.com/huggingface/deep-rl-class#the-hugging-face-deep-reinforcement-learning-class-).
`),be(k.$$.fragment),le=f(),v=o("p"),qe=n(`To make it easy to run the examples, most of them will download an engine build from the hub.
You can change this in many examples by specifying a `),W=o("code"),Ce=n("build_exe"),Ie=n(` at runtime, e.g. if you are adding a new backend feature!
Here are the three cases for `),J=o("code"),Ne=n("build_exe"),He=n(" at runtime:"),ne=f(),w=o("ol"),D=o("li"),Me=n("(default) "),z=o("code"),Ue=n('--build_exe=""'),Ye=n(": download appropriate executable from the hub and run. This will cache a version for you to re-run!"),Be=f(),N=o("li"),K=o("code"),Ge=n("--build_exe=/local/path/"),je=n(": run a local development version of an executable."),Fe=f(),g=o("li"),Q=o("code"),We=n("--build_exe=debug"),Je=n(": run the example in the engine editor (requires installation). This can also be triggered when "),V=o("code"),ze=n("build_exe"),Ke=n(" is set to "),X=o("code"),Qe=n("None"),Ve=n(" in the example."),ie=f(),$=o("p"),Xe=n("If you have any questions about \u{1F917} Simulate, feel free to join and ask the community on our "),R=o("a"),Ze=n("forum"),et=n("."),se=f(),_=o("h2"),S=o("a"),Z=o("span"),be(O.$$.fragment),tt=f(),ee=o("span"),at=n("Advanced Usage"),he=f(),H=o("p"),ot=n("This section is for users looking to gain speed, run more advanced simulations, or use tools that are recently added."),ue=f(),A=o("p"),rt=n("For example, these include how to achieve high throughput training with Map Pools, the "),q=o("a"),lt=n("sample-factory"),nt=n(" RL framework and running Simulate on a GCP instance."),fe=f(),ce=o("hr"),de=f(),M=o("p"),it=n("Let\u2019s get started! \u{1F3C1}"),this.h()},l(e){const s=qt('[data-svelte="svelte-1phssyn"]',document.head);d=r(s,"META",{name:!0,content:!0}),s.forEach(a),m=c(e),p=r(e,"H1",{class:!0});var C=l(p);b=r(C,"A",{id:!0,class:!0,href:!0});var ut=l(b);B=r(ut,"SPAN",{});var ft=l(B);xe(L.$$.fragment,ft),ft.forEach(a),ut.forEach(a),Ae=c(C),G=r(C,"SPAN",{});var ct=l(G);Le=i(ct,"Overview"),ct.forEach(a),C.forEach(a),ae=c(e),x=r(e,"P",{});var me=l(x);Pe=i(me,"Welcome to the \u{1F917} Simulate tutorials! These beginner-friendly tutorials will guide you through the fundamentals of working with \u{1F917} Simulate. You\u2019ll load and prepare an environment for training with your Deep RL framework of choice. Along the way, you\u2019ll learn how to define and load different Assets, Sensors and Actuators, watch an RL Agent interact with and see what\u2019s inside your environment and share a dataset to the "),P=r(me,"A",{href:!0,rel:!0});var dt=l(P);Te=i(dt,"Hub"),dt.forEach(a),De=i(me,"."),me.forEach(a),oe=c(e),y=r(e,"H2",{class:!0});var ve=l(y);E=r(ve,"A",{id:!0,class:!0,href:!0});var pt=l(E);j=r(pt,"SPAN",{});var mt=l(j);xe(T.$$.fragment,mt),mt.forEach(a),pt.forEach(a),Re=c(ve),F=r(ve,"SPAN",{});var vt=l(F);Oe=i(vt,"Examples"),vt.forEach(a),ve.forEach(a),re=i(e,`

The examples assume some basic knowledge of Python, Deep Reinforcement Learning and a Deep RL framework like [Stable Baselines 3](https://stable-baselines3.readthedocs.io/en/master/).
If you're already familiar with these, feel free to check out the [quickstart](./quickstart) to see what you can do with \u{1F917} Simulate. If you want to learn more about Deep Reinforcement Learning, check of the \u{1F917} [Deep RL course](https://github.com/huggingface/deep-rl-class#the-hugging-face-deep-reinforcement-learning-class-).
`),xe(k.$$.fragment,e),le=c(e),v=r(e,"P",{});var U=l(v);qe=i(U,`To make it easy to run the examples, most of them will download an engine build from the hub.
You can change this in many examples by specifying a `),W=r(U,"CODE",{});var wt=l(W);Ce=i(wt,"build_exe"),wt.forEach(a),Ie=i(U,` at runtime, e.g. if you are adding a new backend feature!
Here are the three cases for `),J=r(U,"CODE",{});var gt=l(J);Ne=i(gt,"build_exe"),gt.forEach(a),He=i(U," at runtime:"),U.forEach(a),ne=c(e),w=r(e,"OL",{});var Y=l(w);D=r(Y,"LI",{});var we=l(D);Me=i(we,"(default) "),z=r(we,"CODE",{});var yt=l(z);Ue=i(yt,'--build_exe=""'),yt.forEach(a),Ye=i(we,": download appropriate executable from the hub and run. This will cache a version for you to re-run!"),we.forEach(a),Be=c(Y),N=r(Y,"LI",{});var st=l(N);K=r(st,"CODE",{});var _t=l(K);Ge=i(_t,"--build_exe=/local/path/"),_t.forEach(a),je=i(st,": run a local development version of an executable."),st.forEach(a),Fe=c(Y),g=r(Y,"LI",{});var I=l(g);Q=r(I,"CODE",{});var bt=l(Q);We=i(bt,"--build_exe=debug"),bt.forEach(a),Je=i(I,": run the example in the engine editor (requires installation). This can also be triggered when "),V=r(I,"CODE",{});var xt=l(V);ze=i(xt,"build_exe"),xt.forEach(a),Ke=i(I," is set to "),X=r(I,"CODE",{});var Et=l(X);Qe=i(Et,"None"),Et.forEach(a),Ve=i(I," in the example."),I.forEach(a),Y.forEach(a),ie=c(e),$=r(e,"P",{});var ge=l($);Xe=i(ge,"If you have any questions about \u{1F917} Simulate, feel free to join and ask the community on our "),R=r(ge,"A",{href:!0,rel:!0});var kt=l(R);Ze=i(kt,"forum"),kt.forEach(a),et=i(ge,"."),ge.forEach(a),se=c(e),_=r(e,"H2",{class:!0});var ye=l(_);S=r(ye,"A",{id:!0,class:!0,href:!0});var $t=l(S);Z=r($t,"SPAN",{});var St=l(Z);xe(O.$$.fragment,St),St.forEach(a),$t.forEach(a),tt=c(ye),ee=r(ye,"SPAN",{});var At=l(ee);at=i(At,"Advanced Usage"),At.forEach(a),ye.forEach(a),he=c(e),H=r(e,"P",{});var Lt=l(H);ot=i(Lt,"This section is for users looking to gain speed, run more advanced simulations, or use tools that are recently added."),Lt.forEach(a),ue=c(e),A=r(e,"P",{});var _e=l(A);rt=i(_e,"For example, these include how to achieve high throughput training with Map Pools, the "),q=r(_e,"A",{href:!0,rel:!0});var Pt=l(q);lt=i(Pt,"sample-factory"),Pt.forEach(a),nt=i(_e," RL framework and running Simulate on a GCP instance."),_e.forEach(a),fe=c(e),ce=r(e,"HR",{}),de=c(e),M=r(e,"P",{});var Tt=l(M);it=i(Tt,"Let\u2019s get started! \u{1F3C1}"),Tt.forEach(a),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(Mt)),u(b,"id","overview"),u(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(b,"href","#overview"),u(p,"class","relative group"),u(P,"href","https://huggingface.co/Spaces"),u(P,"rel","nofollow"),u(E,"id","examples"),u(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(E,"href","#examples"),u(y,"class","relative group"),u(R,"href","https://discuss.huggingface.co/c/simulate/10"),u(R,"rel","nofollow"),u(S,"id","advanced-usage"),u(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(S,"href","#advanced-usage"),u(_,"class","relative group"),u(q,"href","https://alex-petrenko.github.io/sample-factory/"),u(q,"rel","nofollow")},m(e,s){t(document.head,d),h(e,m,s),h(e,p,s),t(p,b),t(b,B),Ee(L,B,null),t(p,Ae),t(p,G),t(G,Le),h(e,ae,s),h(e,x,s),t(x,Pe),t(x,P),t(P,Te),t(x,De),h(e,oe,s),h(e,y,s),t(y,E),t(E,j),Ee(T,j,null),t(y,Re),t(y,F),t(F,Oe),h(e,re,s),Ee(k,e,s),h(e,le,s),h(e,v,s),t(v,qe),t(v,W),t(W,Ce),t(v,Ie),t(v,J),t(J,Ne),t(v,He),h(e,ne,s),h(e,w,s),t(w,D),t(D,Me),t(D,z),t(z,Ue),t(D,Ye),t(w,Be),t(w,N),t(N,K),t(K,Ge),t(N,je),t(w,Fe),t(w,g),t(g,Q),t(Q,We),t(g,Je),t(g,V),t(V,ze),t(g,Ke),t(g,X),t(X,Qe),t(g,Ve),h(e,ie,s),h(e,$,s),t($,Xe),t($,R),t(R,Ze),t($,et),h(e,se,s),h(e,_,s),t(_,S),t(S,Z),Ee(O,Z,null),t(_,tt),t(_,ee),t(ee,at),h(e,he,s),h(e,H,s),t(H,ot),h(e,ue,s),h(e,A,s),t(A,rt),t(A,q),t(q,lt),t(A,nt),h(e,fe,s),h(e,ce,s),h(e,de,s),h(e,M,s),t(M,it),pe=!0},p(e,[s]){const C={};s&2&&(C.$$scope={dirty:s,ctx:e}),k.$set(C)},i(e){pe||(ke(L.$$.fragment,e),ke(T.$$.fragment,e),ke(k.$$.fragment,e),ke(O.$$.fragment,e),pe=!0)},o(e){$e(L.$$.fragment,e),$e(T.$$.fragment,e),$e(k.$$.fragment,e),$e(O.$$.fragment,e),pe=!1},d(e){a(d),e&&a(m),e&&a(p),Se(L),e&&a(ae),e&&a(x),e&&a(oe),e&&a(y),Se(T),e&&a(re),Se(k,e),e&&a(le),e&&a(v),e&&a(ne),e&&a(w),e&&a(ie),e&&a($),e&&a(se),e&&a(_),Se(O),e&&a(he),e&&a(H),e&&a(ue),e&&a(A),e&&a(fe),e&&a(ce),e&&a(de),e&&a(M)}}}const Mt={local:"overview",sections:[{local:"examples",title:"Examples"},{local:"advanced-usage",title:"Advanced Usage"}],title:"Overview"};function Ut(te){return Ct(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class jt extends Dt{constructor(d){super();Rt(this,d,Ut,Ht,Ot,{})}}export{jt as default,Mt as metadata};
