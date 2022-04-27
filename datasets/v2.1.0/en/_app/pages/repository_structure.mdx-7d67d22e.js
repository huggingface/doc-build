import{S as Da,i as Oa,s as Ha,e as r,k as f,w as _,t as i,M as Ia,c as l,d as e,m as h,a as n,x as y,h as o,b as c,F as s,g as p,y as $,q as E,o as w,B as g,v as Ca}from"../chunks/vendor-8138ceec.js";import{T as Ga}from"../chunks/Tip-12722dfc.js";import{I as yt}from"../chunks/IconCopyLink-2dd3a6ac.js";import{C as nt}from"../chunks/CodeBlock-fc89709f.js";function Fa(Ut){let u,D;return{c(){u=r("p"),D=i("The following examples use CSV files, but you can use any supported format (text, JSON, JSON Lines, CSV, Parquet).")},l(d){u=l(d,"P",{});var x=n(u);D=o(x,"The following examples use CSV files, but you can use any supported format (text, JSON, JSON Lines, CSV, Parquet)."),x.forEach(e)},m(d,x){p(d,u,x),s(u,D)},d(d){d&&e(u)}}}function Ja(Ut){let u,D,d,x,$t,Y,De,Et,Oe,zt,ot,He,Kt,O,Ie,pt,Ce,Ge,Qt,H,Xt,M,I,wt,W,Fe,gt,Je,Zt,b,Le,xt,qe,Ve,bt,Ye,We,te,A,Be,At,Ue,ze,ft,Ke,Qe,ee,B,se,P,C,jt,U,Xe,St,Ze,ae,G,ts,kt,es,ss,re,F,z,as,Mt,rs,ls,is,K,ns,Pt,os,ps,le,J,fs,Rt,hs,cs,ie,Q,ne,R,L,Nt,X,us,Tt,ds,oe,j,ms,Dt,vs,_s,Ot,ys,$s,pe,Z,fe,m,Es,Ht,ws,gs,It,xs,bs,Ct,As,js,Gt,Ss,ks,he,ht,Ms,ce,tt,ue,N,q,Ft,et,Ps,Jt,Rs,de,v,Ns,Lt,Ts,Ds,qt,Os,Hs,Vt,Is,Cs,Yt,Gs,Fs,me,st,ve,T,V,Wt,at,Js,Bt,Ls,_e,ct,qs,ye,ut,Vs,$e,rt,Ee,dt,Ys,we,lt,ge;return Y=new yt({}),H=new Ga({props:{$$slots:{default:[Fa]},$$scope:{ctx:Ut}}}),W=new yt({}),B=new nt({props:{code:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 train.csv
\u2514\u2500\u2500 test.csv`,highlighted:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 train.<span class="hljs-built_in">csv</span>
\u2514\u2500\u2500 test.<span class="hljs-built_in">csv</span>`}}),U=new yt({}),Q=new nt({props:{code:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u2514\u2500\u2500 data/
    \u251C\u2500\u2500 train.csv
    \u251C\u2500\u2500 test.csv
    \u2514\u2500\u2500 valid.csv`,highlighted:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u2514\u2500\u2500 data/
    \u251C\u2500\u2500 train.<span class="hljs-built_in">csv</span>
    \u251C\u2500\u2500 test.<span class="hljs-built_in">csv</span>
    \u2514\u2500\u2500 valid.<span class="hljs-built_in">csv</span>`}}),X=new yt({}),Z=new nt({props:{code:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 train_0.csv
\u251C\u2500\u2500 train_1.csv
\u251C\u2500\u2500 train_2.csv
\u251C\u2500\u2500 train_3.csv
\u251C\u2500\u2500 test_0.csv
\u2514\u2500\u2500 test_1.csv`,highlighted:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 train_0.<span class="hljs-built_in">csv</span>
\u251C\u2500\u2500 train_1.<span class="hljs-built_in">csv</span>
\u251C\u2500\u2500 train_2.<span class="hljs-built_in">csv</span>
\u251C\u2500\u2500 train_3.<span class="hljs-built_in">csv</span>
\u251C\u2500\u2500 test_0.<span class="hljs-built_in">csv</span>
\u2514\u2500\u2500 test_1.<span class="hljs-built_in">csv</span>`}}),tt=new nt({props:{code:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u2514\u2500\u2500 data/
    \u251C\u2500\u2500 train/
    \u2502   \u251C\u2500\u2500 shard_0.csv
    \u2502   \u251C\u2500\u2500 shard_1.csv
    \u2502   \u251C\u2500\u2500 shard_2.csv
    \u2502   \u2514\u2500\u2500 shard_3.csv
    \u2514\u2500\u2500 test/
        \u251C\u2500\u2500 shard_0.csv
        \u2514\u2500\u2500 shard_1.csv`,highlighted:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u2514\u2500\u2500 data/
    \u251C\u2500\u2500 train/
    \u2502   \u251C\u2500\u2500 shard_0.<span class="hljs-built_in">csv</span>
    \u2502   \u251C\u2500\u2500 shard_1.<span class="hljs-built_in">csv</span>
    \u2502   \u251C\u2500\u2500 shard_2.<span class="hljs-built_in">csv</span>
    \u2502   \u2514\u2500\u2500 shard_3.<span class="hljs-built_in">csv</span>
    \u2514\u2500\u2500 test/
        \u251C\u2500\u2500 shard_0.<span class="hljs-built_in">csv</span>
        \u2514\u2500\u2500 shard_1.<span class="hljs-built_in">csv</span>`}}),et=new yt({}),st=new nt({props:{code:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u2514\u2500\u2500 data/
    \u251C\u2500\u2500 train-00000-of-00003.csv
    \u251C\u2500\u2500 train-00001-of-00003.csv
    \u251C\u2500\u2500 train-00002-of-00003.csv
    \u251C\u2500\u2500 test-00000-of-00001.csv
    \u251C\u2500\u2500 random-00000-of-00003.csv
    \u251C\u2500\u2500 random-00001-of-00003.csv
    \u2514\u2500\u2500 random-00002-of-00003.csv`,highlighted:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u2514\u2500\u2500 data/
    \u251C\u2500\u2500 train<span class="hljs-string">-00000</span>-of<span class="hljs-string">-00003</span>.csv
    \u251C\u2500\u2500 train<span class="hljs-string">-00001</span>-of<span class="hljs-string">-00003</span>.csv
    \u251C\u2500\u2500 train<span class="hljs-string">-00002</span>-of<span class="hljs-string">-00003</span>.csv
    \u251C\u2500\u2500 test<span class="hljs-string">-00000</span>-of<span class="hljs-string">-00001</span>.csv
    \u251C\u2500\u2500 random<span class="hljs-string">-00000</span>-of<span class="hljs-string">-00003</span>.csv
    \u251C\u2500\u2500 random<span class="hljs-string">-00001</span>-of<span class="hljs-string">-00003</span>.csv
    \u2514\u2500\u2500 random<span class="hljs-string">-00002</span>-of<span class="hljs-string">-00003</span>.csv`}}),at=new yt({}),rt=new nt({props:{code:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 en/
\u2502   \u251C\u2500\u2500 train.csv
\u2502   \u2514\u2500\u2500 test.csv
\u2514\u2500\u2500 fr/
    \u251C\u2500\u2500 train.csv
    \u2514\u2500\u2500 test.csv`,highlighted:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 en/
\u2502   \u251C\u2500\u2500 train.<span class="hljs-built_in">csv</span>
\u2502   \u2514\u2500\u2500 test.<span class="hljs-built_in">csv</span>
\u2514\u2500\u2500 fr/
    \u251C\u2500\u2500 train.<span class="hljs-built_in">csv</span>
    \u2514\u2500\u2500 test.<span class="hljs-built_in">csv</span>`}}),lt=new nt({props:{code:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 en/
\u2502   \u251C\u2500\u2500 train/
\u2502   \u2502   \u251C\u2500\u2500 shard_0.csv
\u2502   \u2502   \u2514\u2500\u2500 shard_1.csv
\u2502   \u2514\u2500\u2500 test/
\u2502       \u251C\u2500\u2500 shard_0.csv
\u2502       \u2514\u2500\u2500 shard_1.csv
\u2514\u2500\u2500 fr/
    \u251C\u2500\u2500 train/
    \u2502   \u251C\u2500\u2500 shard_0.csv
    \u2502   \u2514\u2500\u2500 shard_1.csv
    \u2514\u2500\u2500 test/
        \u251C\u2500\u2500 shard_0.csv
        \u2514\u2500\u2500 shard_1.csv`,highlighted:`my_dataset_repository/
\u251C\u2500\u2500 README<span class="hljs-selector-class">.md</span>
\u251C\u2500\u2500 en/
\u2502   \u251C\u2500\u2500 train/
\u2502   \u2502   \u251C\u2500\u2500 shard_0<span class="hljs-selector-class">.csv</span>
\u2502   \u2502   \u2514\u2500\u2500 shard_1<span class="hljs-selector-class">.csv</span>
\u2502   \u2514\u2500\u2500 test/
\u2502       \u251C\u2500\u2500 shard_0<span class="hljs-selector-class">.csv</span>
\u2502       \u2514\u2500\u2500 shard_1<span class="hljs-selector-class">.csv</span>
\u2514\u2500\u2500 fr/
    \u251C\u2500\u2500 train/
    \u2502   \u251C\u2500\u2500 shard_0<span class="hljs-selector-class">.csv</span>
    \u2502   \u2514\u2500\u2500 shard_1<span class="hljs-selector-class">.csv</span>
    \u2514\u2500\u2500 test/
        \u251C\u2500\u2500 shard_0<span class="hljs-selector-class">.csv</span>
        \u2514\u2500\u2500 shard_1.csv`}}),{c(){u=r("meta"),D=f(),d=r("h1"),x=r("a"),$t=r("span"),_(Y.$$.fragment),De=f(),Et=r("span"),Oe=i("Structure your repository"),zt=f(),ot=r("p"),He=i("To host and share your dataset, you can create a dataset repository on the Hugging Face Dataset Hub and upload your data files."),Kt=f(),O=r("p"),Ie=i(`This guide will show you how to structure your dataset repository when you upload it.
A dataset with a supported structure can be loaded automatically with `),pt=r("a"),Ce=i("load_dataset()"),Ge=i(", and it will have a preview on its dataset page on the Hub."),Qt=f(),_(H.$$.fragment),Xt=f(),M=r("h2"),I=r("a"),wt=r("span"),_(W.$$.fragment),Fe=f(),gt=r("span"),Je=i("Main use-case"),Zt=f(),b=r("p"),Le=i("The simplest dataset structure has two files: "),xt=r("em"),qe=i("train.csv"),Ve=i(" and "),bt=r("em"),Ye=i("test.csv"),We=i("."),te=f(),A=r("p"),Be=i("Your repository will also contain a "),At=r("em"),Ue=i("README.md"),ze=i(" file, the "),ft=r("a"),Ke=i("dataset card"),Qe=i(" displayed on your dataset page."),ee=f(),_(B.$$.fragment),se=f(),P=r("h2"),C=r("a"),jt=r("span"),_(U.$$.fragment),Xe=f(),St=r("span"),Ze=i("Splits and file names"),ae=f(),G=r("p"),ts=i(`\u{1F917} Datasets automatically infers the train/validation/test splits of your dataset from the file names.
All the files that contain `),kt=r("strong"),es=i("train"),ss=i(" in their names are considered part of the train split. The same idea applies to the test and validation split:"),re=f(),F=r("ul"),z=r("li"),as=i("All the files that contain "),Mt=r("strong"),rs=i("test"),ls=i(" in their names are considered part of the test split."),is=f(),K=r("li"),ns=i("All the files that contain "),Pt=r("strong"),os=i("valid"),ps=i(" in their names are considered part of the validation split."),le=f(),J=r("p"),fs=i("Here is an example where all the files are placed into a directory named "),Rt=r("em"),hs=i("data"),cs=i(":"),ie=f(),_(Q.$$.fragment),ne=f(),R=r("h2"),L=r("a"),Nt=r("span"),_(X.$$.fragment),us=f(),Tt=r("span"),ds=i("Multiple files per split"),oe=f(),j=r("p"),ms=i(`If one of your splits comprises several files, \u{1F917} Datasets can still infer whether it is the train/validation/ test split from the file name.
For example, if your `),Dt=r("strong"),vs=i("train"),_s=i(" and "),Ot=r("strong"),ys=i("test"),$s=i(" splits span several files:"),pe=f(),_(Z.$$.fragment),fe=f(),m=r("p"),Es=i("Just make sure that all the files of your "),Ht=r("strong"),ws=i("train"),gs=i(" set have "),It=r("strong"),xs=i("train"),bs=i(` in their names (same for test and validation).
It doesn\u2019t matter if you add a prefix or suffix to `),Ct=r("strong"),As=i("train"),js=i(" in the file name (like "),Gt=r("em"),Ss=i("my_train_file_00001.csv"),ks=i(`, for example).
\u{1F917} Datasets can still infer the appropriate split.`),he=f(),ht=r("p"),Ms=i("For convenience, you can also place your data files into different directories. In this case, the split name is inferred from the directory name."),ce=f(),_(tt.$$.fragment),ue=f(),N=r("h2"),q=r("a"),Ft=r("span"),_(et.$$.fragment),Ps=f(),Jt=r("span"),Rs=i("Custom split names"),de=f(),v=r("p"),Ns=i(`If you have other data files in addition to the traditional train/validation/test sets, you must use the following structure.
Follow the file name format exactly for this type of structure: `),Lt=r("em"),Ts=i("data/<split_name>-xxxxx-of-xxxxx.csv"),Ds=i(`.
Here is an example with three splits: `),qt=r("strong"),Os=i("train"),Hs=i(", "),Vt=r("strong"),Is=i("test"),Cs=i(", and "),Yt=r("strong"),Gs=i("random"),Fs=i(":"),me=f(),_(st.$$.fragment),ve=f(),T=r("h2"),V=r("a"),Wt=r("span"),_(at.$$.fragment),Js=f(),Bt=r("span"),Ls=i("Multiple configuration (WIP)"),_e=f(),ct=r("p"),qs=i("You can specify different configurations of your dataset (for example, if a dataset contains different languages) with one directory per configuration."),ye=f(),ut=r("p"),Vs=i("These structures are not supported yet, but are a work in progress:"),$e=f(),_(rt.$$.fragment),Ee=f(),dt=r("p"),Ys=i("Or with one directory per split:"),we=f(),_(lt.$$.fragment),this.h()},l(t){const a=Ia('[data-svelte="svelte-1phssyn"]',document.head);u=l(a,"META",{name:!0,content:!0}),a.forEach(e),D=h(t),d=l(t,"H1",{class:!0});var it=n(d);x=l(it,"A",{id:!0,class:!0,href:!0});var Ws=n(x);$t=l(Ws,"SPAN",{});var Bs=n($t);y(Y.$$.fragment,Bs),Bs.forEach(e),Ws.forEach(e),De=h(it),Et=l(it,"SPAN",{});var Us=n(Et);Oe=o(Us,"Structure your repository"),Us.forEach(e),it.forEach(e),zt=h(t),ot=l(t,"P",{});var zs=n(ot);He=o(zs,"To host and share your dataset, you can create a dataset repository on the Hugging Face Dataset Hub and upload your data files."),zs.forEach(e),Kt=h(t),O=l(t,"P",{});var xe=n(O);Ie=o(xe,`This guide will show you how to structure your dataset repository when you upload it.
A dataset with a supported structure can be loaded automatically with `),pt=l(xe,"A",{href:!0});var Ks=n(pt);Ce=o(Ks,"load_dataset()"),Ks.forEach(e),Ge=o(xe,", and it will have a preview on its dataset page on the Hub."),xe.forEach(e),Qt=h(t),y(H.$$.fragment,t),Xt=h(t),M=l(t,"H2",{class:!0});var be=n(M);I=l(be,"A",{id:!0,class:!0,href:!0});var Qs=n(I);wt=l(Qs,"SPAN",{});var Xs=n(wt);y(W.$$.fragment,Xs),Xs.forEach(e),Qs.forEach(e),Fe=h(be),gt=l(be,"SPAN",{});var Zs=n(gt);Je=o(Zs,"Main use-case"),Zs.forEach(e),be.forEach(e),Zt=h(t),b=l(t,"P",{});var mt=n(b);Le=o(mt,"The simplest dataset structure has two files: "),xt=l(mt,"EM",{});var ta=n(xt);qe=o(ta,"train.csv"),ta.forEach(e),Ve=o(mt," and "),bt=l(mt,"EM",{});var ea=n(bt);Ye=o(ea,"test.csv"),ea.forEach(e),We=o(mt,"."),mt.forEach(e),te=h(t),A=l(t,"P",{});var vt=n(A);Be=o(vt,"Your repository will also contain a "),At=l(vt,"EM",{});var sa=n(At);Ue=o(sa,"README.md"),sa.forEach(e),ze=o(vt," file, the "),ft=l(vt,"A",{href:!0});var aa=n(ft);Ke=o(aa,"dataset card"),aa.forEach(e),Qe=o(vt," displayed on your dataset page."),vt.forEach(e),ee=h(t),y(B.$$.fragment,t),se=h(t),P=l(t,"H2",{class:!0});var Ae=n(P);C=l(Ae,"A",{id:!0,class:!0,href:!0});var ra=n(C);jt=l(ra,"SPAN",{});var la=n(jt);y(U.$$.fragment,la),la.forEach(e),ra.forEach(e),Xe=h(Ae),St=l(Ae,"SPAN",{});var ia=n(St);Ze=o(ia,"Splits and file names"),ia.forEach(e),Ae.forEach(e),ae=h(t),G=l(t,"P",{});var je=n(G);ts=o(je,`\u{1F917} Datasets automatically infers the train/validation/test splits of your dataset from the file names.
All the files that contain `),kt=l(je,"STRONG",{});var na=n(kt);es=o(na,"train"),na.forEach(e),ss=o(je," in their names are considered part of the train split. The same idea applies to the test and validation split:"),je.forEach(e),re=h(t),F=l(t,"UL",{});var Se=n(F);z=l(Se,"LI",{});var ke=n(z);as=o(ke,"All the files that contain "),Mt=l(ke,"STRONG",{});var oa=n(Mt);rs=o(oa,"test"),oa.forEach(e),ls=o(ke," in their names are considered part of the test split."),ke.forEach(e),is=h(Se),K=l(Se,"LI",{});var Me=n(K);ns=o(Me,"All the files that contain "),Pt=l(Me,"STRONG",{});var pa=n(Pt);os=o(pa,"valid"),pa.forEach(e),ps=o(Me," in their names are considered part of the validation split."),Me.forEach(e),Se.forEach(e),le=h(t),J=l(t,"P",{});var Pe=n(J);fs=o(Pe,"Here is an example where all the files are placed into a directory named "),Rt=l(Pe,"EM",{});var fa=n(Rt);hs=o(fa,"data"),fa.forEach(e),cs=o(Pe,":"),Pe.forEach(e),ie=h(t),y(Q.$$.fragment,t),ne=h(t),R=l(t,"H2",{class:!0});var Re=n(R);L=l(Re,"A",{id:!0,class:!0,href:!0});var ha=n(L);Nt=l(ha,"SPAN",{});var ca=n(Nt);y(X.$$.fragment,ca),ca.forEach(e),ha.forEach(e),us=h(Re),Tt=l(Re,"SPAN",{});var ua=n(Tt);ds=o(ua,"Multiple files per split"),ua.forEach(e),Re.forEach(e),oe=h(t),j=l(t,"P",{});var _t=n(j);ms=o(_t,`If one of your splits comprises several files, \u{1F917} Datasets can still infer whether it is the train/validation/ test split from the file name.
For example, if your `),Dt=l(_t,"STRONG",{});var da=n(Dt);vs=o(da,"train"),da.forEach(e),_s=o(_t," and "),Ot=l(_t,"STRONG",{});var ma=n(Ot);ys=o(ma,"test"),ma.forEach(e),$s=o(_t," splits span several files:"),_t.forEach(e),pe=h(t),y(Z.$$.fragment,t),fe=h(t),m=l(t,"P",{});var S=n(m);Es=o(S,"Just make sure that all the files of your "),Ht=l(S,"STRONG",{});var va=n(Ht);ws=o(va,"train"),va.forEach(e),gs=o(S," set have "),It=l(S,"STRONG",{});var _a=n(It);xs=o(_a,"train"),_a.forEach(e),bs=o(S,` in their names (same for test and validation).
It doesn\u2019t matter if you add a prefix or suffix to `),Ct=l(S,"STRONG",{});var ya=n(Ct);As=o(ya,"train"),ya.forEach(e),js=o(S," in the file name (like "),Gt=l(S,"EM",{});var $a=n(Gt);Ss=o($a,"my_train_file_00001.csv"),$a.forEach(e),ks=o(S,`, for example).
\u{1F917} Datasets can still infer the appropriate split.`),S.forEach(e),he=h(t),ht=l(t,"P",{});var Ea=n(ht);Ms=o(Ea,"For convenience, you can also place your data files into different directories. In this case, the split name is inferred from the directory name."),Ea.forEach(e),ce=h(t),y(tt.$$.fragment,t),ue=h(t),N=l(t,"H2",{class:!0});var Ne=n(N);q=l(Ne,"A",{id:!0,class:!0,href:!0});var wa=n(q);Ft=l(wa,"SPAN",{});var ga=n(Ft);y(et.$$.fragment,ga),ga.forEach(e),wa.forEach(e),Ps=h(Ne),Jt=l(Ne,"SPAN",{});var xa=n(Jt);Rs=o(xa,"Custom split names"),xa.forEach(e),Ne.forEach(e),de=h(t),v=l(t,"P",{});var k=n(v);Ns=o(k,`If you have other data files in addition to the traditional train/validation/test sets, you must use the following structure.
Follow the file name format exactly for this type of structure: `),Lt=l(k,"EM",{});var ba=n(Lt);Ts=o(ba,"data/<split_name>-xxxxx-of-xxxxx.csv"),ba.forEach(e),Ds=o(k,`.
Here is an example with three splits: `),qt=l(k,"STRONG",{});var Aa=n(qt);Os=o(Aa,"train"),Aa.forEach(e),Hs=o(k,", "),Vt=l(k,"STRONG",{});var ja=n(Vt);Is=o(ja,"test"),ja.forEach(e),Cs=o(k,", and "),Yt=l(k,"STRONG",{});var Sa=n(Yt);Gs=o(Sa,"random"),Sa.forEach(e),Fs=o(k,":"),k.forEach(e),me=h(t),y(st.$$.fragment,t),ve=h(t),T=l(t,"H2",{class:!0});var Te=n(T);V=l(Te,"A",{id:!0,class:!0,href:!0});var ka=n(V);Wt=l(ka,"SPAN",{});var Ma=n(Wt);y(at.$$.fragment,Ma),Ma.forEach(e),ka.forEach(e),Js=h(Te),Bt=l(Te,"SPAN",{});var Pa=n(Bt);Ls=o(Pa,"Multiple configuration (WIP)"),Pa.forEach(e),Te.forEach(e),_e=h(t),ct=l(t,"P",{});var Ra=n(ct);qs=o(Ra,"You can specify different configurations of your dataset (for example, if a dataset contains different languages) with one directory per configuration."),Ra.forEach(e),ye=h(t),ut=l(t,"P",{});var Na=n(ut);Vs=o(Na,"These structures are not supported yet, but are a work in progress:"),Na.forEach(e),$e=h(t),y(rt.$$.fragment,t),Ee=h(t),dt=l(t,"P",{});var Ta=n(dt);Ys=o(Ta,"Or with one directory per split:"),Ta.forEach(e),we=h(t),y(lt.$$.fragment,t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(La)),c(x,"id","structure-your-repository"),c(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(x,"href","#structure-your-repository"),c(d,"class","relative group"),c(pt,"href","/docs/datasets/v2.1.0/en/package_reference/loading_methods#datasets.load_dataset"),c(I,"id","main-usecase"),c(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(I,"href","#main-usecase"),c(M,"class","relative group"),c(ft,"href","dataset_card.html"),c(C,"id","splits-and-file-names"),c(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(C,"href","#splits-and-file-names"),c(P,"class","relative group"),c(L,"id","multiple-files-per-split"),c(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(L,"href","#multiple-files-per-split"),c(R,"class","relative group"),c(q,"id","custom-split-names"),c(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(q,"href","#custom-split-names"),c(N,"class","relative group"),c(V,"id","multiple-configuration-wip"),c(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(V,"href","#multiple-configuration-wip"),c(T,"class","relative group")},m(t,a){s(document.head,u),p(t,D,a),p(t,d,a),s(d,x),s(x,$t),$(Y,$t,null),s(d,De),s(d,Et),s(Et,Oe),p(t,zt,a),p(t,ot,a),s(ot,He),p(t,Kt,a),p(t,O,a),s(O,Ie),s(O,pt),s(pt,Ce),s(O,Ge),p(t,Qt,a),$(H,t,a),p(t,Xt,a),p(t,M,a),s(M,I),s(I,wt),$(W,wt,null),s(M,Fe),s(M,gt),s(gt,Je),p(t,Zt,a),p(t,b,a),s(b,Le),s(b,xt),s(xt,qe),s(b,Ve),s(b,bt),s(bt,Ye),s(b,We),p(t,te,a),p(t,A,a),s(A,Be),s(A,At),s(At,Ue),s(A,ze),s(A,ft),s(ft,Ke),s(A,Qe),p(t,ee,a),$(B,t,a),p(t,se,a),p(t,P,a),s(P,C),s(C,jt),$(U,jt,null),s(P,Xe),s(P,St),s(St,Ze),p(t,ae,a),p(t,G,a),s(G,ts),s(G,kt),s(kt,es),s(G,ss),p(t,re,a),p(t,F,a),s(F,z),s(z,as),s(z,Mt),s(Mt,rs),s(z,ls),s(F,is),s(F,K),s(K,ns),s(K,Pt),s(Pt,os),s(K,ps),p(t,le,a),p(t,J,a),s(J,fs),s(J,Rt),s(Rt,hs),s(J,cs),p(t,ie,a),$(Q,t,a),p(t,ne,a),p(t,R,a),s(R,L),s(L,Nt),$(X,Nt,null),s(R,us),s(R,Tt),s(Tt,ds),p(t,oe,a),p(t,j,a),s(j,ms),s(j,Dt),s(Dt,vs),s(j,_s),s(j,Ot),s(Ot,ys),s(j,$s),p(t,pe,a),$(Z,t,a),p(t,fe,a),p(t,m,a),s(m,Es),s(m,Ht),s(Ht,ws),s(m,gs),s(m,It),s(It,xs),s(m,bs),s(m,Ct),s(Ct,As),s(m,js),s(m,Gt),s(Gt,Ss),s(m,ks),p(t,he,a),p(t,ht,a),s(ht,Ms),p(t,ce,a),$(tt,t,a),p(t,ue,a),p(t,N,a),s(N,q),s(q,Ft),$(et,Ft,null),s(N,Ps),s(N,Jt),s(Jt,Rs),p(t,de,a),p(t,v,a),s(v,Ns),s(v,Lt),s(Lt,Ts),s(v,Ds),s(v,qt),s(qt,Os),s(v,Hs),s(v,Vt),s(Vt,Is),s(v,Cs),s(v,Yt),s(Yt,Gs),s(v,Fs),p(t,me,a),$(st,t,a),p(t,ve,a),p(t,T,a),s(T,V),s(V,Wt),$(at,Wt,null),s(T,Js),s(T,Bt),s(Bt,Ls),p(t,_e,a),p(t,ct,a),s(ct,qs),p(t,ye,a),p(t,ut,a),s(ut,Vs),p(t,$e,a),$(rt,t,a),p(t,Ee,a),p(t,dt,a),s(dt,Ys),p(t,we,a),$(lt,t,a),ge=!0},p(t,[a]){const it={};a&2&&(it.$$scope={dirty:a,ctx:t}),H.$set(it)},i(t){ge||(E(Y.$$.fragment,t),E(H.$$.fragment,t),E(W.$$.fragment,t),E(B.$$.fragment,t),E(U.$$.fragment,t),E(Q.$$.fragment,t),E(X.$$.fragment,t),E(Z.$$.fragment,t),E(tt.$$.fragment,t),E(et.$$.fragment,t),E(st.$$.fragment,t),E(at.$$.fragment,t),E(rt.$$.fragment,t),E(lt.$$.fragment,t),ge=!0)},o(t){w(Y.$$.fragment,t),w(H.$$.fragment,t),w(W.$$.fragment,t),w(B.$$.fragment,t),w(U.$$.fragment,t),w(Q.$$.fragment,t),w(X.$$.fragment,t),w(Z.$$.fragment,t),w(tt.$$.fragment,t),w(et.$$.fragment,t),w(st.$$.fragment,t),w(at.$$.fragment,t),w(rt.$$.fragment,t),w(lt.$$.fragment,t),ge=!1},d(t){e(u),t&&e(D),t&&e(d),g(Y),t&&e(zt),t&&e(ot),t&&e(Kt),t&&e(O),t&&e(Qt),g(H,t),t&&e(Xt),t&&e(M),g(W),t&&e(Zt),t&&e(b),t&&e(te),t&&e(A),t&&e(ee),g(B,t),t&&e(se),t&&e(P),g(U),t&&e(ae),t&&e(G),t&&e(re),t&&e(F),t&&e(le),t&&e(J),t&&e(ie),g(Q,t),t&&e(ne),t&&e(R),g(X),t&&e(oe),t&&e(j),t&&e(pe),g(Z,t),t&&e(fe),t&&e(m),t&&e(he),t&&e(ht),t&&e(ce),g(tt,t),t&&e(ue),t&&e(N),g(et),t&&e(de),t&&e(v),t&&e(me),g(st,t),t&&e(ve),t&&e(T),g(at),t&&e(_e),t&&e(ct),t&&e(ye),t&&e(ut),t&&e($e),g(rt,t),t&&e(Ee),t&&e(dt),t&&e(we),g(lt,t)}}}const La={local:"structure-your-repository",sections:[{local:"main-usecase",title:"Main use-case"},{local:"splits-and-file-names",title:"Splits and file names"},{local:"multiple-files-per-split",title:"Multiple files per split"},{local:"custom-split-names",title:"Custom split names"},{local:"multiple-configuration-wip",title:"Multiple configuration (WIP)"}],title:"Structure your repository"};function qa(Ut){return Ca(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ua extends Da{constructor(u){super();Oa(this,u,qa,Ja,Ha,{})}}export{Ua as default,La as metadata};
