import{S as vr,i as kr,s as _r,e as a,k as l,w as u,t as c,M as br,c as n,d as r,m as i,a as o,x as f,h as s,b as d,G as e,g as m,y as v,L as $r,q as k,o as _,B as b,v as yr}from"../../chunks/vendor-hf-doc-builder.js";import{D as w}from"../../chunks/Docstring-hf-doc-builder.js";import{I as Ht}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Tr(Ut){let E,Le,x,B,ge,W,Je,pe,Re,Ce,A,S,me,q,Fe,he,Ke,Be,g,H,Qe,ue,Xe,Ye,G,Ze,fe,et,tt,te,rt,at,O,U,nt,ve,ot,ct,V,j,st,P,lt,ke,it,dt,_e,gt,pt,mt,N,J,ht,R,ut,be,ft,vt,Se,I,z,$e,F,kt,ye,_t,Ge,y,K,bt,D,$t,Te,yt,Tt,we,wt,Et,xt,re,Q,Oe,T,X,At,L,Pt,Ee,It,Dt,xe,Lt,Ct,Bt,ae,Y,Ve,h,Z,St,C,Gt,Ae,Ot,Vt,Pe,Nt,zt,Mt,Ie,Wt,qt,ne,ee,Ne;return W=new Ht({}),q=new Ht({}),H=new w({props:{name:"class accelerate.tracking.GeneralTracker",anchor:"accelerate.tracking.GeneralTracker",parameters:[],source:"https://github.com/huggingface/accelerate/blob/v0.13.2/src/accelerate/tracking.py#L60"}}),U=new w({props:{name:"finish",anchor:"accelerate.tracking.GeneralTracker.finish",parameters:[],source:"https://github.com/huggingface/accelerate/blob/v0.13.2/src/accelerate/tracking.py#L107"}}),j=new w({props:{name:"log",anchor:"accelerate.tracking.GeneralTracker.log",parameters:[{name:"values",val:": dict"},{name:"step",val:": typing.Optional[int]"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"accelerate.tracking.GeneralTracker.log.values",description:`<strong>values</strong> (Dictionary <code>str</code> to <code>str</code>, <code>float</code>, or <code>int</code>) &#x2014;
Values to be logged as key-value pairs. The values need to have type <code>str</code>, <code>float</code>, or <code>int</code>.`,name:"values"},{anchor:"accelerate.tracking.GeneralTracker.log.step",description:`<strong>step</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The run step. If included, the log will be affiliated with this step.`,name:"step"}],source:"https://github.com/huggingface/accelerate/blob/v0.13.2/src/accelerate/tracking.py#L93"}}),J=new w({props:{name:"store_init_configuration",anchor:"accelerate.tracking.GeneralTracker.store_init_configuration",parameters:[{name:"values",val:": dict"}],parametersDescription:[{anchor:"accelerate.tracking.GeneralTracker.store_init_configuration.values",description:`<strong>values</strong> (Dictionary <code>str</code> to <code>bool</code>, <code>str</code>, <code>float</code> or <code>int</code>) &#x2014;
Values to be stored as initial hyperparameters as key-value pairs. The values need to have type <code>bool</code>,
<code>str</code>, <code>float</code>, <code>int</code>, or <code>None</code>.`,name:"values"}],source:"https://github.com/huggingface/accelerate/blob/v0.13.2/src/accelerate/tracking.py#L80"}}),F=new Ht({}),K=new w({props:{name:"class accelerate.tracking.TensorBoardTracker",anchor:"accelerate.tracking.TensorBoardTracker",parameters:[{name:"run_name",val:": str"},{name:"logging_dir",val:": typing.Union[str, os.PathLike, NoneType]"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"accelerate.tracking.TensorBoardTracker.run_name",description:`<strong>run_name</strong> (<code>str</code>) &#x2014;
The name of the experiment run`,name:"run_name"},{anchor:"accelerate.tracking.TensorBoardTracker.logging_dir",description:`<strong>logging_dir</strong> (<code>str</code>, <code>os.PathLike</code>) &#x2014;
Location for TensorBoard logs to be stored.
kwargs &#x2014;
Additional key word arguments passed along to the <code>tensorboard.SummaryWriter.__init__</code> method.`,name:"logging_dir"}],source:"https://github.com/huggingface/accelerate/blob/v0.13.2/src/accelerate/tracking.py#L122"}}),Q=new w({props:{name:"__init__",anchor:"accelerate.tracking.TensorBoardTracker.__init__",parameters:[{name:"run_name",val:": str"},{name:"logging_dir",val:": typing.Union[str, os.PathLike, NoneType]"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/accelerate/blob/v0.13.2/src/accelerate/tracking.py#L138"}}),X=new w({props:{name:"class accelerate.tracking.WandBTracker",anchor:"accelerate.tracking.WandBTracker",parameters:[{name:"run_name",val:": str"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"accelerate.tracking.WandBTracker.run_name",description:`<strong>run_name</strong> (<code>str</code>) &#x2014;
The name of the experiment run.
kwargs &#x2014;
Additional key word arguments passed along to the <code>wandb.init</code> method.`,name:"run_name"}],source:"https://github.com/huggingface/accelerate/blob/v0.13.2/src/accelerate/tracking.py#L206"}}),Y=new w({props:{name:"__init__",anchor:"accelerate.tracking.WandBTracker.__init__",parameters:[{name:"run_name",val:": str"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/accelerate/blob/v0.13.2/src/accelerate/tracking.py#L220"}}),Z=new w({props:{name:"class accelerate.tracking.CometMLTracker",anchor:"accelerate.tracking.CometMLTracker",parameters:[{name:"run_name",val:": str"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"accelerate.tracking.CometMLTracker.run_name",description:`<strong>run_name</strong> (<code>str</code>) &#x2014;
The name of the experiment run.
kwargs &#x2014;
Additional key word arguments passed along to the <code>Experiment.__init__</code> method.`,name:"run_name"}],source:"https://github.com/huggingface/accelerate/blob/v0.13.2/src/accelerate/tracking.py#L268"}}),ee=new w({props:{name:"__init__",anchor:"accelerate.tracking.CometMLTracker.__init__",parameters:[{name:"run_name",val:": str"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/accelerate/blob/v0.13.2/src/accelerate/tracking.py#L284"}}),{c(){E=a("meta"),Le=l(),x=a("h1"),B=a("a"),ge=a("span"),u(W.$$.fragment),Je=l(),pe=a("span"),Re=c("Experiment Tracking"),Ce=l(),A=a("h2"),S=a("a"),me=a("span"),u(q.$$.fragment),Fe=l(),he=a("span"),Ke=c("The Base Tracker Class"),Be=l(),g=a("div"),u(H.$$.fragment),Qe=l(),ue=a("p"),Xe=c("A base Tracker class to be used for all logging integration implementations."),Ye=l(),G=a("p"),Ze=c("Each function should take in "),fe=a("code"),et=c("**kwargs"),tt=c(` that will automatically be passed in from a base dictionary provided to
`),te=a("a"),rt=c("Accelerator"),at=l(),O=a("div"),u(U.$$.fragment),nt=l(),ve=a("p"),ot=c(`Should run any finalizing functions within the tracking API. If the API should not have one, just don\u2019t
overwrite that method.`),ct=l(),V=a("div"),u(j.$$.fragment),st=l(),P=a("p"),lt=c("Logs "),ke=a("code"),it=c("values"),dt=c(" to the current run. Base "),_e=a("code"),gt=c("log"),pt=c(" implementations of a tracking API should go in here, along with\nspecial behavior for the `step parameter."),mt=l(),N=a("div"),u(J.$$.fragment),ht=l(),R=a("p"),ut=c("Logs "),be=a("code"),ft=c("values"),vt=c(` as hyperparameters for the run. Implementations should use the experiment configuration
functionality of a tracking API.`),Se=l(),I=a("h2"),z=a("a"),$e=a("span"),u(F.$$.fragment),kt=l(),ye=a("span"),_t=c("Integrated Trackers"),Ge=l(),y=a("div"),u(K.$$.fragment),bt=l(),D=a("p"),$t=c("A "),Te=a("code"),yt=c("Tracker"),Tt=c(" class that supports "),we=a("code"),wt=c("tensorboard"),Et=c(". Should be initialized at the start of your script."),xt=l(),re=a("div"),u(Q.$$.fragment),Oe=l(),T=a("div"),u(X.$$.fragment),At=l(),L=a("p"),Pt=c("A "),Ee=a("code"),It=c("Tracker"),Dt=c(" class that supports "),xe=a("code"),Lt=c("wandb"),Ct=c(". Should be initialized at the start of your script."),Bt=l(),ae=a("div"),u(Y.$$.fragment),Ve=l(),h=a("div"),u(Z.$$.fragment),St=l(),C=a("p"),Gt=c("A "),Ae=a("code"),Ot=c("Tracker"),Vt=c(" class that supports "),Pe=a("code"),Nt=c("comet_ml"),zt=c(". Should be initialized at the start of your script."),Mt=l(),Ie=a("p"),Wt=c("API keys must be stored in a Comet config file."),qt=l(),ne=a("div"),u(ee.$$.fragment),this.h()},l(t){const p=br('[data-svelte="svelte-1phssyn"]',document.head);E=n(p,"META",{name:!0,content:!0}),p.forEach(r),Le=i(t),x=n(t,"H1",{class:!0});var ze=o(x);B=n(ze,"A",{id:!0,class:!0,href:!0});var jt=o(B);ge=n(jt,"SPAN",{});var Jt=o(ge);f(W.$$.fragment,Jt),Jt.forEach(r),jt.forEach(r),Je=i(ze),pe=n(ze,"SPAN",{});var Rt=o(pe);Re=s(Rt,"Experiment Tracking"),Rt.forEach(r),ze.forEach(r),Ce=i(t),A=n(t,"H2",{class:!0});var Me=o(A);S=n(Me,"A",{id:!0,class:!0,href:!0});var Ft=o(S);me=n(Ft,"SPAN",{});var Kt=o(me);f(q.$$.fragment,Kt),Kt.forEach(r),Ft.forEach(r),Fe=i(Me),he=n(Me,"SPAN",{});var Qt=o(he);Ke=s(Qt,"The Base Tracker Class"),Qt.forEach(r),Me.forEach(r),Be=i(t),g=n(t,"DIV",{class:!0});var $=o(g);f(H.$$.fragment,$),Qe=i($),ue=n($,"P",{});var Xt=o(ue);Xe=s(Xt,"A base Tracker class to be used for all logging integration implementations."),Xt.forEach(r),Ye=i($),G=n($,"P",{});var De=o(G);Ze=s(De,"Each function should take in "),fe=n(De,"CODE",{});var Yt=o(fe);et=s(Yt,"**kwargs"),Yt.forEach(r),tt=s(De,` that will automatically be passed in from a base dictionary provided to
`),te=n(De,"A",{href:!0});var Zt=o(te);rt=s(Zt,"Accelerator"),Zt.forEach(r),De.forEach(r),at=i($),O=n($,"DIV",{class:!0});var We=o(O);f(U.$$.fragment,We),nt=i(We),ve=n(We,"P",{});var er=o(ve);ot=s(er,`Should run any finalizing functions within the tracking API. If the API should not have one, just don\u2019t
overwrite that method.`),er.forEach(r),We.forEach(r),ct=i($),V=n($,"DIV",{class:!0});var qe=o(V);f(j.$$.fragment,qe),st=i(qe),P=n(qe,"P",{});var oe=o(P);lt=s(oe,"Logs "),ke=n(oe,"CODE",{});var tr=o(ke);it=s(tr,"values"),tr.forEach(r),dt=s(oe," to the current run. Base "),_e=n(oe,"CODE",{});var rr=o(_e);gt=s(rr,"log"),rr.forEach(r),pt=s(oe," implementations of a tracking API should go in here, along with\nspecial behavior for the `step parameter."),oe.forEach(r),qe.forEach(r),mt=i($),N=n($,"DIV",{class:!0});var He=o(N);f(J.$$.fragment,He),ht=i(He),R=n(He,"P",{});var Ue=o(R);ut=s(Ue,"Logs "),be=n(Ue,"CODE",{});var ar=o(be);ft=s(ar,"values"),ar.forEach(r),vt=s(Ue,` as hyperparameters for the run. Implementations should use the experiment configuration
functionality of a tracking API.`),Ue.forEach(r),He.forEach(r),$.forEach(r),Se=i(t),I=n(t,"H2",{class:!0});var je=o(I);z=n(je,"A",{id:!0,class:!0,href:!0});var nr=o(z);$e=n(nr,"SPAN",{});var or=o($e);f(F.$$.fragment,or),or.forEach(r),nr.forEach(r),kt=i(je),ye=n(je,"SPAN",{});var cr=o(ye);_t=s(cr,"Integrated Trackers"),cr.forEach(r),je.forEach(r),Ge=i(t),y=n(t,"DIV",{class:!0});var ce=o(y);f(K.$$.fragment,ce),bt=i(ce),D=n(ce,"P",{});var se=o(D);$t=s(se,"A "),Te=n(se,"CODE",{});var sr=o(Te);yt=s(sr,"Tracker"),sr.forEach(r),Tt=s(se," class that supports "),we=n(se,"CODE",{});var lr=o(we);wt=s(lr,"tensorboard"),lr.forEach(r),Et=s(se,". Should be initialized at the start of your script."),se.forEach(r),xt=i(ce),re=n(ce,"DIV",{class:!0});var ir=o(re);f(Q.$$.fragment,ir),ir.forEach(r),ce.forEach(r),Oe=i(t),T=n(t,"DIV",{class:!0});var le=o(T);f(X.$$.fragment,le),At=i(le),L=n(le,"P",{});var ie=o(L);Pt=s(ie,"A "),Ee=n(ie,"CODE",{});var dr=o(Ee);It=s(dr,"Tracker"),dr.forEach(r),Dt=s(ie," class that supports "),xe=n(ie,"CODE",{});var gr=o(xe);Lt=s(gr,"wandb"),gr.forEach(r),Ct=s(ie,". Should be initialized at the start of your script."),ie.forEach(r),Bt=i(le),ae=n(le,"DIV",{class:!0});var pr=o(ae);f(Y.$$.fragment,pr),pr.forEach(r),le.forEach(r),Ve=i(t),h=n(t,"DIV",{class:!0});var M=o(h);f(Z.$$.fragment,M),St=i(M),C=n(M,"P",{});var de=o(C);Gt=s(de,"A "),Ae=n(de,"CODE",{});var mr=o(Ae);Ot=s(mr,"Tracker"),mr.forEach(r),Vt=s(de," class that supports "),Pe=n(de,"CODE",{});var hr=o(Pe);Nt=s(hr,"comet_ml"),hr.forEach(r),zt=s(de,". Should be initialized at the start of your script."),de.forEach(r),Mt=i(M),Ie=n(M,"P",{});var ur=o(Ie);Wt=s(ur,"API keys must be stored in a Comet config file."),ur.forEach(r),qt=i(M),ne=n(M,"DIV",{class:!0});var fr=o(ne);f(ee.$$.fragment,fr),fr.forEach(r),M.forEach(r),this.h()},h(){d(E,"name","hf:doc:metadata"),d(E,"content",JSON.stringify(wr)),d(B,"id","experiment-tracking"),d(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(B,"href","#experiment-tracking"),d(x,"class","relative group"),d(S,"id","accelerate.tracking.GeneralTracker"),d(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(S,"href","#accelerate.tracking.GeneralTracker"),d(A,"class","relative group"),d(te,"href","/docs/accelerate/v0.13.2/en/package_reference/accelerator#accelerate.Accelerator"),d(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(g,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(z,"id","accelerate.tracking.TensorBoardTracker"),d(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(z,"href","#accelerate.tracking.TensorBoardTracker"),d(I,"class","relative group"),d(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,p){e(document.head,E),m(t,Le,p),m(t,x,p),e(x,B),e(B,ge),v(W,ge,null),e(x,Je),e(x,pe),e(pe,Re),m(t,Ce,p),m(t,A,p),e(A,S),e(S,me),v(q,me,null),e(A,Fe),e(A,he),e(he,Ke),m(t,Be,p),m(t,g,p),v(H,g,null),e(g,Qe),e(g,ue),e(ue,Xe),e(g,Ye),e(g,G),e(G,Ze),e(G,fe),e(fe,et),e(G,tt),e(G,te),e(te,rt),e(g,at),e(g,O),v(U,O,null),e(O,nt),e(O,ve),e(ve,ot),e(g,ct),e(g,V),v(j,V,null),e(V,st),e(V,P),e(P,lt),e(P,ke),e(ke,it),e(P,dt),e(P,_e),e(_e,gt),e(P,pt),e(g,mt),e(g,N),v(J,N,null),e(N,ht),e(N,R),e(R,ut),e(R,be),e(be,ft),e(R,vt),m(t,Se,p),m(t,I,p),e(I,z),e(z,$e),v(F,$e,null),e(I,kt),e(I,ye),e(ye,_t),m(t,Ge,p),m(t,y,p),v(K,y,null),e(y,bt),e(y,D),e(D,$t),e(D,Te),e(Te,yt),e(D,Tt),e(D,we),e(we,wt),e(D,Et),e(y,xt),e(y,re),v(Q,re,null),m(t,Oe,p),m(t,T,p),v(X,T,null),e(T,At),e(T,L),e(L,Pt),e(L,Ee),e(Ee,It),e(L,Dt),e(L,xe),e(xe,Lt),e(L,Ct),e(T,Bt),e(T,ae),v(Y,ae,null),m(t,Ve,p),m(t,h,p),v(Z,h,null),e(h,St),e(h,C),e(C,Gt),e(C,Ae),e(Ae,Ot),e(C,Vt),e(C,Pe),e(Pe,Nt),e(C,zt),e(h,Mt),e(h,Ie),e(Ie,Wt),e(h,qt),e(h,ne),v(ee,ne,null),Ne=!0},p:$r,i(t){Ne||(k(W.$$.fragment,t),k(q.$$.fragment,t),k(H.$$.fragment,t),k(U.$$.fragment,t),k(j.$$.fragment,t),k(J.$$.fragment,t),k(F.$$.fragment,t),k(K.$$.fragment,t),k(Q.$$.fragment,t),k(X.$$.fragment,t),k(Y.$$.fragment,t),k(Z.$$.fragment,t),k(ee.$$.fragment,t),Ne=!0)},o(t){_(W.$$.fragment,t),_(q.$$.fragment,t),_(H.$$.fragment,t),_(U.$$.fragment,t),_(j.$$.fragment,t),_(J.$$.fragment,t),_(F.$$.fragment,t),_(K.$$.fragment,t),_(Q.$$.fragment,t),_(X.$$.fragment,t),_(Y.$$.fragment,t),_(Z.$$.fragment,t),_(ee.$$.fragment,t),Ne=!1},d(t){r(E),t&&r(Le),t&&r(x),b(W),t&&r(Ce),t&&r(A),b(q),t&&r(Be),t&&r(g),b(H),b(U),b(j),b(J),t&&r(Se),t&&r(I),b(F),t&&r(Ge),t&&r(y),b(K),b(Q),t&&r(Oe),t&&r(T),b(X),b(Y),t&&r(Ve),t&&r(h),b(Z),b(ee)}}}const wr={local:"experiment-tracking",sections:[{local:"accelerate.tracking.GeneralTracker",title:"The Base Tracker Class"},{local:"accelerate.tracking.TensorBoardTracker",title:"Integrated Trackers"}],title:"Experiment Tracking"};function Er(Ut){return yr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ir extends vr{constructor(E){super();kr(this,E,Er,Tr,_r,{})}}export{Ir as default,wr as metadata};
