import{S as At,i as Et,s as kt,e as i,k as m,w as Qe,t as s,M as Pt,c as r,d as a,m as u,a as n,x as Ye,h as o,b as c,G as t,g as d,y as Je,L as Tt,q as Ke,o as Ve,B as Xe,v as $t}from"../chunks/vendor-hf-doc-builder.js";import{I as Ze}from"../chunks/IconCopyLink-hf-doc-builder.js";function xt(et){let b,K,y,g,H,T,me,j,ue,V,A,fe,D,pe,ve,X,_,E,F,$,be,B,ye,W,_e,Z,k,we,S,ge,Ae,ee,f,Ee,U,ke,Pe,L,Te,$e,te,w,P,q,x,xe,z,Me,ae,h,De,Q,Be,Se,Y,Ue,Le,M,Ge,Ce,J,Ne,Oe,ie,G,Ie,se,p,Re,C,He,je,N,Fe,We,re,O,qe,oe;return T=new Ze({}),$=new Ze({}),x=new Ze({}),{c(){b=i("meta"),K=m(),y=i("h1"),g=i("a"),H=i("span"),Qe(T.$$.fragment),me=m(),j=i("span"),ue=s("All about metrics"),V=m(),A=i("p"),fe=s("\u{1F917} Datasets provides access to a wide range of NLP metrics. You can load metrics associated with benchmark datasets like GLUE or SQuAD, and complex metrics like BLEURT or BERTScore, with a single command: "),D=i("a"),pe=s("load_metric()"),ve=s(". Once you\u2019ve loaded a metric, easily compute and evaluate a model\u2019s performance."),X=m(),_=i("h2"),E=i("a"),F=i("span"),Qe($.$$.fragment),be=m(),B=i("span"),ye=s("ELI5: "),W=i("code"),_e=s("load_metric"),Z=m(),k=i("p"),we=s("Loading a dataset and loading a metric share many similarities. This was an intentional design choice because we wanted to create a simple and unified experience. When you call "),S=i("a"),ge=s("load_metric()"),Ae=s(", the metric loading script is downloaded and imported from GitHub (if it hasn\u2019t already been downloaded before). It contains information about the metric such as it\u2019s citation, homepage, and description."),ee=m(),f=i("p"),Ee=s("The metric loading script will instantiate and return a "),U=i("a"),ke=s("Metric"),Pe=s(" object. This stores the predictions and references, which you need to compute the metric values. The "),L=i("a"),Te=s("Metric"),$e=s(" object is stored as an Apache Arrow table. As a result, the predictions and references are stored directly on disk with memory-mapping. This enables \u{1F917} Datasets to do a lazy computation of the metric, and makes it easier to gather all the predictions in a distributed setting."),te=m(),w=i("h2"),P=i("a"),q=i("span"),Qe(x.$$.fragment),xe=m(),z=i("span"),Me=s("Distributed evaluation"),ae=m(),h=i("p"),De=s("Computing metrics in a distributed environment can be tricky. Metric evaluation is executed in separate Python processes, or nodes, on different subsets of a dataset. Typically, when a metric score is additive ("),Q=i("code"),Be=s("f(AuB) = f(A) + f(B)"),Se=s("), you can use distributed reduce operations to gather the scores for each subset of the dataset. But when a metric is non-additive ("),Y=i("code"),Ue=s("f(AuB) \u2260 f(A) + f(B)"),Le=s("), it\u2019s not that simple. For example, you can\u2019t take the sum of the "),M=i("a"),Ge=s("F1"),Ce=s(" scores of each data subset as your "),J=i("strong"),Ne=s("final metric"),Oe=s("."),ie=m(),G=i("p"),Ie=s("A common way to overcome this issue is to fallback on single process evaluation. The metrics are evaluated on a single GPU, which becomes inefficient."),se=m(),p=i("p"),Re=s("\u{1F917} Datasets solves this issue by only computing the final metric on the first node. The predictions and references are computed and provided to the metric separately for each node. These are temporarily stored in an Apache Arrow table, avoiding cluttering the GPU or CPU memory. When you are ready to "),C=i("a"),He=s("Metric.compute()"),je=s(" the final metric, the first node is able to access the predictions and references stored on all the other nodes. Once it has gathered all the predictions and references, "),N=i("a"),Fe=s("Metric.compute()"),We=s(" will perform the final metric evaluation."),re=m(),O=i("p"),qe=s("This solution allows \u{1F917} Datasets to perform distributed predictions, which is important for evaluation speed in distributed settings. At the same time, you can also use complex non-additive metrics without wasting valuable GPU or CPU memory."),this.h()},l(e){const l=Pt('[data-svelte="svelte-1phssyn"]',document.head);b=r(l,"META",{name:!0,content:!0}),l.forEach(a),K=u(e),y=r(e,"H1",{class:!0});var ne=n(y);g=r(ne,"A",{id:!0,class:!0,href:!0});var tt=n(g);H=r(tt,"SPAN",{});var at=n(H);Ye(T.$$.fragment,at),at.forEach(a),tt.forEach(a),me=u(ne),j=r(ne,"SPAN",{});var it=n(j);ue=o(it,"All about metrics"),it.forEach(a),ne.forEach(a),V=u(e),A=r(e,"P",{});var le=n(A);fe=o(le,"\u{1F917} Datasets provides access to a wide range of NLP metrics. You can load metrics associated with benchmark datasets like GLUE or SQuAD, and complex metrics like BLEURT or BERTScore, with a single command: "),D=r(le,"A",{href:!0});var st=n(D);pe=o(st,"load_metric()"),st.forEach(a),ve=o(le,". Once you\u2019ve loaded a metric, easily compute and evaluate a model\u2019s performance."),le.forEach(a),X=u(e),_=r(e,"H2",{class:!0});var ce=n(_);E=r(ce,"A",{id:!0,class:!0,href:!0});var rt=n(E);F=r(rt,"SPAN",{});var ot=n(F);Ye($.$$.fragment,ot),ot.forEach(a),rt.forEach(a),be=u(ce),B=r(ce,"SPAN",{});var ze=n(B);ye=o(ze,"ELI5: "),W=r(ze,"CODE",{});var nt=n(W);_e=o(nt,"load_metric"),nt.forEach(a),ze.forEach(a),ce.forEach(a),Z=u(e),k=r(e,"P",{});var de=n(k);we=o(de,"Loading a dataset and loading a metric share many similarities. This was an intentional design choice because we wanted to create a simple and unified experience. When you call "),S=r(de,"A",{href:!0});var lt=n(S);ge=o(lt,"load_metric()"),lt.forEach(a),Ae=o(de,", the metric loading script is downloaded and imported from GitHub (if it hasn\u2019t already been downloaded before). It contains information about the metric such as it\u2019s citation, homepage, and description."),de.forEach(a),ee=u(e),f=r(e,"P",{});var I=n(f);Ee=o(I,"The metric loading script will instantiate and return a "),U=r(I,"A",{href:!0});var ct=n(U);ke=o(ct,"Metric"),ct.forEach(a),Pe=o(I," object. This stores the predictions and references, which you need to compute the metric values. The "),L=r(I,"A",{href:!0});var dt=n(L);Te=o(dt,"Metric"),dt.forEach(a),$e=o(I," object is stored as an Apache Arrow table. As a result, the predictions and references are stored directly on disk with memory-mapping. This enables \u{1F917} Datasets to do a lazy computation of the metric, and makes it easier to gather all the predictions in a distributed setting."),I.forEach(a),te=u(e),w=r(e,"H2",{class:!0});var he=n(w);P=r(he,"A",{id:!0,class:!0,href:!0});var ht=n(P);q=r(ht,"SPAN",{});var mt=n(q);Ye(x.$$.fragment,mt),mt.forEach(a),ht.forEach(a),xe=u(he),z=r(he,"SPAN",{});var ut=n(z);Me=o(ut,"Distributed evaluation"),ut.forEach(a),he.forEach(a),ae=u(e),h=r(e,"P",{});var v=n(h);De=o(v,"Computing metrics in a distributed environment can be tricky. Metric evaluation is executed in separate Python processes, or nodes, on different subsets of a dataset. Typically, when a metric score is additive ("),Q=r(v,"CODE",{});var ft=n(Q);Be=o(ft,"f(AuB) = f(A) + f(B)"),ft.forEach(a),Se=o(v,"), you can use distributed reduce operations to gather the scores for each subset of the dataset. But when a metric is non-additive ("),Y=r(v,"CODE",{});var pt=n(Y);Ue=o(pt,"f(AuB) \u2260 f(A) + f(B)"),pt.forEach(a),Le=o(v,"), it\u2019s not that simple. For example, you can\u2019t take the sum of the "),M=r(v,"A",{href:!0,rel:!0});var vt=n(M);Ge=o(vt,"F1"),vt.forEach(a),Ce=o(v," scores of each data subset as your "),J=r(v,"STRONG",{});var bt=n(J);Ne=o(bt,"final metric"),bt.forEach(a),Oe=o(v,"."),v.forEach(a),ie=u(e),G=r(e,"P",{});var yt=n(G);Ie=o(yt,"A common way to overcome this issue is to fallback on single process evaluation. The metrics are evaluated on a single GPU, which becomes inefficient."),yt.forEach(a),se=u(e),p=r(e,"P",{});var R=n(p);Re=o(R,"\u{1F917} Datasets solves this issue by only computing the final metric on the first node. The predictions and references are computed and provided to the metric separately for each node. These are temporarily stored in an Apache Arrow table, avoiding cluttering the GPU or CPU memory. When you are ready to "),C=r(R,"A",{href:!0});var _t=n(C);He=o(_t,"Metric.compute()"),_t.forEach(a),je=o(R," the final metric, the first node is able to access the predictions and references stored on all the other nodes. Once it has gathered all the predictions and references, "),N=r(R,"A",{href:!0});var wt=n(N);Fe=o(wt,"Metric.compute()"),wt.forEach(a),We=o(R," will perform the final metric evaluation."),R.forEach(a),re=u(e),O=r(e,"P",{});var gt=n(O);qe=o(gt,"This solution allows \u{1F917} Datasets to perform distributed predictions, which is important for evaluation speed in distributed settings. At the same time, you can also use complex non-additive metrics without wasting valuable GPU or CPU memory."),gt.forEach(a),this.h()},h(){c(b,"name","hf:doc:metadata"),c(b,"content",JSON.stringify(Mt)),c(g,"id","all-about-metrics"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#all-about-metrics"),c(y,"class","relative group"),c(D,"href","/docs/datasets/master/en/package_reference/loading_methods#datasets.load_metric"),c(E,"id","eli5-loadmetric"),c(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(E,"href","#eli5-loadmetric"),c(_,"class","relative group"),c(S,"href","/docs/datasets/master/en/package_reference/loading_methods#datasets.load_metric"),c(U,"href","/docs/datasets/master/en/package_reference/main_classes#datasets.Metric"),c(L,"href","/docs/datasets/master/en/package_reference/main_classes#datasets.Metric"),c(P,"id","distributed-evaluation"),c(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(P,"href","#distributed-evaluation"),c(w,"class","relative group"),c(M,"href","https://huggingface.co/metrics/f1"),c(M,"rel","nofollow"),c(C,"href","/docs/datasets/master/en/package_reference/main_classes#datasets.Metric.compute"),c(N,"href","/docs/datasets/master/en/package_reference/main_classes#datasets.Metric.compute")},m(e,l){t(document.head,b),d(e,K,l),d(e,y,l),t(y,g),t(g,H),Je(T,H,null),t(y,me),t(y,j),t(j,ue),d(e,V,l),d(e,A,l),t(A,fe),t(A,D),t(D,pe),t(A,ve),d(e,X,l),d(e,_,l),t(_,E),t(E,F),Je($,F,null),t(_,be),t(_,B),t(B,ye),t(B,W),t(W,_e),d(e,Z,l),d(e,k,l),t(k,we),t(k,S),t(S,ge),t(k,Ae),d(e,ee,l),d(e,f,l),t(f,Ee),t(f,U),t(U,ke),t(f,Pe),t(f,L),t(L,Te),t(f,$e),d(e,te,l),d(e,w,l),t(w,P),t(P,q),Je(x,q,null),t(w,xe),t(w,z),t(z,Me),d(e,ae,l),d(e,h,l),t(h,De),t(h,Q),t(Q,Be),t(h,Se),t(h,Y),t(Y,Ue),t(h,Le),t(h,M),t(M,Ge),t(h,Ce),t(h,J),t(J,Ne),t(h,Oe),d(e,ie,l),d(e,G,l),t(G,Ie),d(e,se,l),d(e,p,l),t(p,Re),t(p,C),t(C,He),t(p,je),t(p,N),t(N,Fe),t(p,We),d(e,re,l),d(e,O,l),t(O,qe),oe=!0},p:Tt,i(e){oe||(Ke(T.$$.fragment,e),Ke($.$$.fragment,e),Ke(x.$$.fragment,e),oe=!0)},o(e){Ve(T.$$.fragment,e),Ve($.$$.fragment,e),Ve(x.$$.fragment,e),oe=!1},d(e){a(b),e&&a(K),e&&a(y),Xe(T),e&&a(V),e&&a(A),e&&a(X),e&&a(_),Xe($),e&&a(Z),e&&a(k),e&&a(ee),e&&a(f),e&&a(te),e&&a(w),Xe(x),e&&a(ae),e&&a(h),e&&a(ie),e&&a(G),e&&a(se),e&&a(p),e&&a(re),e&&a(O)}}}const Mt={local:"all-about-metrics",sections:[{local:"eli5-loadmetric",title:"ELI5: `load_metric`"},{local:"distributed-evaluation",title:"Distributed evaluation"}],title:"All about metrics"};function Dt(et){return $t(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ut extends At{constructor(b){super();Et(this,b,Dt,xt,kt,{})}}export{Ut as default,Mt as metadata};
