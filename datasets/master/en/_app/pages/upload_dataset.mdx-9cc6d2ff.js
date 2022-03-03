import{S as zl,i as Ml,s as Wl,e as s,k as f,w as h,t as n,M as Vl,c as o,d as e,m as d,a as r,x as c,h as p,b as u,N as Bt,F as a,g as i,y as m,L as Rl,q as v,o as g,B as y}from"../chunks/vendor-e67aec41.js";import{I as V}from"../chunks/IconCopyLink-ffd7f84e.js";import{C as R}from"../chunks/CodeBlock-e2bcf023.js";function Jl(Ja){let E,Pt,_,w,Kt,J,Ya,Qt,Ba,Oe,Lt,Ka,qe,T,Qa,Y,Xa,Za,Fe,D,I,Xt,B,ts,Zt,es,Ge,At,as,Ue,H,K,ss,te,os,ls,rs,ee,is,ze,Q,ae,vo,Me,x,C,se,X,ns,oe,ps,We,Nt,j,us,le,fs,ds,re,hs,cs,Ve,Z,ie,go,Re,tt,ne,ms,Je,et,pe,yo,Ye,at,ue,vs,Be,st,fe,_o,Ke,P,O,de,ot,gs,he,ys,Qe,St,_s,Xe,Tt,lt,ws,ce,$s,Es,Ze,rt,me,wo,ta,$,ve,it,bs,nt,ks,Ds,xs,ge,pt,js,ut,Ps,Ls,As,ye,_e,Ns,ea,ft,we,$o,aa,q,Ss,dt,Ts,Is,sa,L,F,$e,ht,Hs,Ee,Cs,oa,It,Os,la,ct,ra,A,G,be,mt,qs,ke,Fs,ia,b,Gs,Ht,Us,zs,Ct,Ms,Ws,na,Ot,De,Vs,pa,vt,ua,gt,xe,Rs,fa,yt,da,U,Js,je,Ys,Bs,ha,_t,ca,N,z,Pe,wt,Ks,Le,Qs,ma,qt,Xs,va,Ft,Ae,Zs,ga,$t,ya,Et,Ne,to,_a,bt,wa,M,eo,Se,ao,so,$a,Gt,Te,oo,Ea,kt,ba,Dt,Ie,lo,ka,xt,Da,S,W,He,jt,ro,Ce,io,xa,Ut,no,ja,zt,po,Pa,k,uo,Mt,fo,ho,Wt,co,mo,La;return J=new V({}),B=new V({}),X=new V({}),ot=new V({}),ht=new V({}),ct=new R({props:{code:`from datasets import load_dataset
dataset = load_dataset("stevhliu/demo")
dataset`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;stevhliu/demo&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset
DatasetDict({
 train: Dataset({
     features: [<span class="hljs-string">&#x27;id&#x27;</span>, <span class="hljs-string">&#x27;package_name&#x27;</span>, <span class="hljs-string">&#x27;review&#x27;</span>, <span class="hljs-string">&#x27;date&#x27;</span>, <span class="hljs-string">&#x27;star&#x27;</span>, <span class="hljs-string">&#x27;version_id&#x27;</span>],
     num_rows: <span class="hljs-number">5</span>
 })
 test: Dataset({
     features: [<span class="hljs-string">&#x27;id&#x27;</span>, <span class="hljs-string">&#x27;package_name&#x27;</span>, <span class="hljs-string">&#x27;review&#x27;</span>, <span class="hljs-string">&#x27;date&#x27;</span>, <span class="hljs-string">&#x27;star&#x27;</span>, <span class="hljs-string">&#x27;version_id&#x27;</span>],
     num_rows: <span class="hljs-number">5</span>
 })
})`}}),mt=new V({}),vt=new R({props:{code:"huggingface-cli login",highlighted:'huggingface-<span class="hljs-keyword">cli</span> login'}}),yt=new R({props:{code:`from datasets import load_dataset
dataset = load_dataset("stevhliu/demo")
# dataset = dataset.map(...)  # do all your processing here
dataset.push_to_hub("stevhliu/processed_demo")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;stevhliu/demo&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dataset = dataset.map(...)  # do all your processing here</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.push_to_hub(<span class="hljs-string">&quot;stevhliu/processed_demo&quot;</span>)`}}),_t=new R({props:{code:'dataset.push_to_hub("stevhliu/private_processed_demo", private=True)',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.push_to_hub(<span class="hljs-string">&quot;stevhliu/private_processed_demo&quot;</span>, private=<span class="hljs-literal">True</span>)'}}),wt=new V({}),$t=new R({props:{code:"huggingface-cli login",highlighted:'huggingface-<span class="hljs-keyword">cli</span> login'}}),bt=new R({props:{code:`from datasets import load_dataset
dataset = load_dataset("stevhliu/demo", use_auth_token=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;stevhliu/demo&quot;</span>, use_auth_token=<span class="hljs-literal">True</span>)`}}),kt=new R({props:{code:"huggingface-cli login",highlighted:'huggingface-<span class="hljs-keyword">cli</span> login'}}),xt=new R({props:{code:`from datasets import load_dataset
dataset = load_dataset("organization/dataset_name", use_auth_token=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;organization/dataset_name&quot;</span>, use_auth_token=<span class="hljs-literal">True</span>)`}}),jt=new V({}),{c(){E=s("meta"),Pt=f(),_=s("h1"),w=s("a"),Kt=s("span"),h(J.$$.fragment),Ya=f(),Qt=s("span"),Ba=n("Upload a dataset to the Hub"),Oe=f(),Lt=s("p"),Ka=n("In the last section of the tutorials, you will learn how to upload a dataset to the Hugging Face Hub. \u{1F917} Datasets aims to provide the largest collection of datasets that anyone can use to train their models. We welcome all dataset contributions from the NLP community, and we have made it very simple for you to add a dataset. Even if you don\u2019t have a lot of developer experience, you can still contribute!"),qe=f(),T=s("p"),Qa=n("Start by creating a Hugging Face Hub account at "),Y=s("a"),Xa=n("hf.co"),Za=n(" if you don\u2019t have one yet."),Fe=f(),D=s("h2"),I=s("a"),Xt=s("span"),h(B.$$.fragment),ts=f(),Zt=s("span"),es=n("Create a repository"),Ge=f(),At=s("p"),as=n("A repository hosts all your dataset files, including the revision history, making it possible to store more than one dataset version."),Ue=f(),H=s("ol"),K=s("li"),ss=n("Click on your profile and select "),te=s("strong"),os=n("New Dataset"),ls=n(" to create a new dataset repository."),rs=f(),ee=s("li"),is=n("Give your dataset a name, and select whether this is a public or private dataset. A public dataset is visible to anyone, whereas a private dataset can only be viewed by you or members of your organization."),ze=f(),Q=s("div"),ae=s("img"),Me=f(),x=s("h2"),C=s("a"),se=s("span"),h(X.$$.fragment),ns=f(),oe=s("span"),ps=n("Upload your files"),We=f(),Nt=s("ol"),j=s("li"),us=n("Once you have created a repository, navigate to the "),le=s("strong"),fs=n("Files and versions"),ds=n(" tab to add a file. Select "),re=s("strong"),hs=n("Add file"),cs=n(" to upload your dataset files. We currently support the following data formats: CSV, JSON, JSON lines, text, and Parquet."),Ve=f(),Z=s("div"),ie=s("img"),Re=f(),tt=s("ol"),ne=s("li"),ms=n("Drag and drop your dataset files here, and add a brief descriptive commit message."),Je=f(),et=s("div"),pe=s("img"),Ye=f(),at=s("ol"),ue=s("li"),vs=n("Once you have uploaded your dataset files, they are now stored in your dataset repository."),Be=f(),st=s("div"),fe=s("img"),Ke=f(),P=s("h2"),O=s("a"),de=s("span"),h(ot.$$.fragment),gs=f(),he=s("span"),ys=n("Create a Dataset card"),Qe=f(),St=s("p"),_s=n("The last step is to create a Dataset card. The Dataset card is essential for helping users find your dataset and understand how to use it responsibly."),Xe=f(),Tt=s("ol"),lt=s("li"),ws=n("Click on the "),ce=s("strong"),$s=n("Create Dataset Card"),Es=n(" to create a Dataset card."),Ze=f(),rt=s("div"),me=s("img"),ta=f(),$=s("ol"),ve=s("li"),it=s("p"),bs=n("Get a quick start with our Dataset card "),nt=s("a"),ks=n("template"),Ds=n(" to help you fill out all the relevant fields."),xs=f(),ge=s("li"),pt=s("p"),js=n("The Dataset card uses structured tags to help users discover your dataset on the Hub. Use the "),ut=s("a"),Ps=n("online Datasets Tagging application"),Ls=n(" to help you generate the appropriate tags."),As=f(),ye=s("li"),_e=s("p"),Ns=n("Copy the generated tags and paste them at the top of your Dataset card, then commit your changes."),ea=f(),ft=s("div"),we=s("img"),aa=f(),q=s("p"),Ss=n("For a detailed example of what a good Dataset card should look like, refer to the "),dt=s("a"),Ts=n("CNN DailyMail Dataset card"),Is=n("."),sa=f(),L=s("h2"),F=s("a"),$e=s("span"),h(ht.$$.fragment),Hs=f(),Ee=s("span"),Cs=n("Load dataset"),oa=f(),It=s("p"),Os=n("Your dataset can now be loaded by anyone in a single line of code!"),la=f(),h(ct.$$.fragment),ra=f(),A=s("h2"),G=s("a"),be=s("span"),h(mt.$$.fragment),qs=f(),ke=s("span"),Fs=n("Upload from Python"),ia=f(),b=s("p"),Gs=n("To upload a "),Ht=s("a"),Us=n("datasets.DatasetDict"),zs=n(" on the Hugging Face Hub in Python, you can login and use the "),Ct=s("a"),Ms=n("datasets.DatasetDict.push_to_hub()"),Ws=n(" method:"),na=f(),Ot=s("ol"),De=s("li"),Vs=n("Login from the command line:"),pa=f(),h(vt.$$.fragment),ua=f(),gt=s("ol"),xe=s("li"),Rs=n("Upload the dataset:"),fa=f(),h(yt.$$.fragment),da=f(),U=s("p"),Js=n("With the "),je=s("code"),Ys=n("private"),Bs=n(" parameter you can choose whether your dataset is public or private:"),ha=f(),h(_t.$$.fragment),ca=f(),N=s("h2"),z=s("a"),Pe=s("span"),h(wt.$$.fragment),Ks=f(),Le=s("span"),Qs=n("Privacy"),ma=f(),qt=s("p"),Xs=n("If your uploaded dataset is private, only you can access it:"),va=f(),Ft=s("ol"),Ae=s("li"),Zs=n("Login from the command line:"),ga=f(),h($t.$$.fragment),ya=f(),Et=s("ol"),Ne=s("li"),to=n("Load the dataset with your authentication token:"),_a=f(),h(bt.$$.fragment),wa=f(),M=s("p"),eo=n("Similarly, share a private dataset within your organization by uploading a dataset as "),Se=s("strong"),ao=n("Private"),so=n(" to your organization. Then members of the organization can load the dataset like:"),$a=f(),Gt=s("ol"),Te=s("li"),oo=n("Login from the command line:"),Ea=f(),h(kt.$$.fragment),ba=f(),Dt=s("ol"),Ie=s("li"),lo=n("Load the dataset with your authentication token:"),ka=f(),h(xt.$$.fragment),Da=f(),S=s("h2"),W=s("a"),He=s("span"),h(jt.$$.fragment),ro=f(),Ce=s("span"),io=n("What's next?"),xa=f(),Ut=s("p"),no=n("Congratulations, you have completed all of the \u{1F917} Datasets tutorials!"),ja=f(),zt=s("p"),po=n("Throughout these tutorials, you learned the basic steps of using \u{1F917} Datasets. You loaded a dataset from the Hub and learned how to access the information stored inside the dataset. Next, you tokenized the dataset into sequences of integers and formatted it so you can use it with PyTorch or TensorFlow. Then you loaded a metric to evaluate your model\u2019s predictions. Finally, you uploaded a dataset to the Hub without writing a single line of code. This is all you need to get started with \u{1F917} Datasets!"),Pa=f(),k=s("p"),uo=n("Now that you have a solid grasp of what \u{1F917} Datasets can do, you can begin formulating your own questions about how you can use it with your dataset. Please take a look at our "),Mt=s("a"),fo=n("How-to guides"),ho=n(" for more practical help on solving common use-cases, or read our "),Wt=s("a"),co=n("Conceptual guides"),mo=n(" to deepen your understanding about \u{1F917} Datasets."),this.h()},l(t){const l=Vl('[data-svelte="svelte-1phssyn"]',document.head);E=o(l,"META",{name:!0,content:!0}),l.forEach(e),Pt=d(t),_=o(t,"H1",{class:!0});var Aa=r(_);w=o(Aa,"A",{id:!0,class:!0,href:!0});var Eo=r(w);Kt=o(Eo,"SPAN",{});var bo=r(Kt);c(J.$$.fragment,bo),bo.forEach(e),Eo.forEach(e),Ya=d(Aa),Qt=o(Aa,"SPAN",{});var ko=r(Qt);Ba=p(ko,"Upload a dataset to the Hub"),ko.forEach(e),Aa.forEach(e),Oe=d(t),Lt=o(t,"P",{});var Do=r(Lt);Ka=p(Do,"In the last section of the tutorials, you will learn how to upload a dataset to the Hugging Face Hub. \u{1F917} Datasets aims to provide the largest collection of datasets that anyone can use to train their models. We welcome all dataset contributions from the NLP community, and we have made it very simple for you to add a dataset. Even if you don\u2019t have a lot of developer experience, you can still contribute!"),Do.forEach(e),qe=d(t),T=o(t,"P",{});var Na=r(T);Qa=p(Na,"Start by creating a Hugging Face Hub account at "),Y=o(Na,"A",{href:!0,rel:!0});var xo=r(Y);Xa=p(xo,"hf.co"),xo.forEach(e),Za=p(Na," if you don\u2019t have one yet."),Na.forEach(e),Fe=d(t),D=o(t,"H2",{class:!0});var Sa=r(D);I=o(Sa,"A",{id:!0,class:!0,href:!0});var jo=r(I);Xt=o(jo,"SPAN",{});var Po=r(Xt);c(B.$$.fragment,Po),Po.forEach(e),jo.forEach(e),ts=d(Sa),Zt=o(Sa,"SPAN",{});var Lo=r(Zt);es=p(Lo,"Create a repository"),Lo.forEach(e),Sa.forEach(e),Ge=d(t),At=o(t,"P",{});var Ao=r(At);as=p(Ao,"A repository hosts all your dataset files, including the revision history, making it possible to store more than one dataset version."),Ao.forEach(e),Ue=d(t),H=o(t,"OL",{});var Ta=r(H);K=o(Ta,"LI",{});var Ia=r(K);ss=p(Ia,"Click on your profile and select "),te=o(Ia,"STRONG",{});var No=r(te);os=p(No,"New Dataset"),No.forEach(e),ls=p(Ia," to create a new dataset repository."),Ia.forEach(e),rs=d(Ta),ee=o(Ta,"LI",{});var So=r(ee);is=p(So,"Give your dataset a name, and select whether this is a public or private dataset. A public dataset is visible to anyone, whereas a private dataset can only be viewed by you or members of your organization."),So.forEach(e),Ta.forEach(e),ze=d(t),Q=o(t,"DIV",{class:!0});var To=r(Q);ae=o(To,"IMG",{src:!0}),To.forEach(e),Me=d(t),x=o(t,"H2",{class:!0});var Ha=r(x);C=o(Ha,"A",{id:!0,class:!0,href:!0});var Io=r(C);se=o(Io,"SPAN",{});var Ho=r(se);c(X.$$.fragment,Ho),Ho.forEach(e),Io.forEach(e),ns=d(Ha),oe=o(Ha,"SPAN",{});var Co=r(oe);ps=p(Co,"Upload your files"),Co.forEach(e),Ha.forEach(e),We=d(t),Nt=o(t,"OL",{});var Oo=r(Nt);j=o(Oo,"LI",{});var Vt=r(j);us=p(Vt,"Once you have created a repository, navigate to the "),le=o(Vt,"STRONG",{});var qo=r(le);fs=p(qo,"Files and versions"),qo.forEach(e),ds=p(Vt," tab to add a file. Select "),re=o(Vt,"STRONG",{});var Fo=r(re);hs=p(Fo,"Add file"),Fo.forEach(e),cs=p(Vt," to upload your dataset files. We currently support the following data formats: CSV, JSON, JSON lines, text, and Parquet."),Vt.forEach(e),Oo.forEach(e),Ve=d(t),Z=o(t,"DIV",{class:!0});var Go=r(Z);ie=o(Go,"IMG",{src:!0}),Go.forEach(e),Re=d(t),tt=o(t,"OL",{start:!0});var Uo=r(tt);ne=o(Uo,"LI",{});var zo=r(ne);ms=p(zo,"Drag and drop your dataset files here, and add a brief descriptive commit message."),zo.forEach(e),Uo.forEach(e),Je=d(t),et=o(t,"DIV",{class:!0});var Mo=r(et);pe=o(Mo,"IMG",{src:!0}),Mo.forEach(e),Ye=d(t),at=o(t,"OL",{start:!0});var Wo=r(at);ue=o(Wo,"LI",{});var Vo=r(ue);vs=p(Vo,"Once you have uploaded your dataset files, they are now stored in your dataset repository."),Vo.forEach(e),Wo.forEach(e),Be=d(t),st=o(t,"DIV",{class:!0});var Ro=r(st);fe=o(Ro,"IMG",{src:!0}),Ro.forEach(e),Ke=d(t),P=o(t,"H2",{class:!0});var Ca=r(P);O=o(Ca,"A",{id:!0,class:!0,href:!0});var Jo=r(O);de=o(Jo,"SPAN",{});var Yo=r(de);c(ot.$$.fragment,Yo),Yo.forEach(e),Jo.forEach(e),gs=d(Ca),he=o(Ca,"SPAN",{});var Bo=r(he);ys=p(Bo,"Create a Dataset card"),Bo.forEach(e),Ca.forEach(e),Qe=d(t),St=o(t,"P",{});var Ko=r(St);_s=p(Ko,"The last step is to create a Dataset card. The Dataset card is essential for helping users find your dataset and understand how to use it responsibly."),Ko.forEach(e),Xe=d(t),Tt=o(t,"OL",{});var Qo=r(Tt);lt=o(Qo,"LI",{});var Oa=r(lt);ws=p(Oa,"Click on the "),ce=o(Oa,"STRONG",{});var Xo=r(ce);$s=p(Xo,"Create Dataset Card"),Xo.forEach(e),Es=p(Oa," to create a Dataset card."),Oa.forEach(e),Qo.forEach(e),Ze=d(t),rt=o(t,"DIV",{class:!0});var Zo=r(rt);me=o(Zo,"IMG",{src:!0}),Zo.forEach(e),ta=d(t),$=o(t,"OL",{start:!0});var Rt=r($);ve=o(Rt,"LI",{});var tl=r(ve);it=o(tl,"P",{});var qa=r(it);bs=p(qa,"Get a quick start with our Dataset card "),nt=o(qa,"A",{href:!0,rel:!0});var el=r(nt);ks=p(el,"template"),el.forEach(e),Ds=p(qa," to help you fill out all the relevant fields."),qa.forEach(e),tl.forEach(e),xs=d(Rt),ge=o(Rt,"LI",{});var al=r(ge);pt=o(al,"P",{});var Fa=r(pt);js=p(Fa,"The Dataset card uses structured tags to help users discover your dataset on the Hub. Use the "),ut=o(Fa,"A",{href:!0,rel:!0});var sl=r(ut);Ps=p(sl,"online Datasets Tagging application"),sl.forEach(e),Ls=p(Fa," to help you generate the appropriate tags."),Fa.forEach(e),al.forEach(e),As=d(Rt),ye=o(Rt,"LI",{});var ol=r(ye);_e=o(ol,"P",{});var ll=r(_e);Ns=p(ll,"Copy the generated tags and paste them at the top of your Dataset card, then commit your changes."),ll.forEach(e),ol.forEach(e),Rt.forEach(e),ea=d(t),ft=o(t,"DIV",{class:!0});var rl=r(ft);we=o(rl,"IMG",{src:!0}),rl.forEach(e),aa=d(t),q=o(t,"P",{});var Ga=r(q);Ss=p(Ga,"For a detailed example of what a good Dataset card should look like, refer to the "),dt=o(Ga,"A",{href:!0,rel:!0});var il=r(dt);Ts=p(il,"CNN DailyMail Dataset card"),il.forEach(e),Is=p(Ga,"."),Ga.forEach(e),sa=d(t),L=o(t,"H2",{class:!0});var Ua=r(L);F=o(Ua,"A",{id:!0,class:!0,href:!0});var nl=r(F);$e=o(nl,"SPAN",{});var pl=r($e);c(ht.$$.fragment,pl),pl.forEach(e),nl.forEach(e),Hs=d(Ua),Ee=o(Ua,"SPAN",{});var ul=r(Ee);Cs=p(ul,"Load dataset"),ul.forEach(e),Ua.forEach(e),oa=d(t),It=o(t,"P",{});var fl=r(It);Os=p(fl,"Your dataset can now be loaded by anyone in a single line of code!"),fl.forEach(e),la=d(t),c(ct.$$.fragment,t),ra=d(t),A=o(t,"H2",{class:!0});var za=r(A);G=o(za,"A",{id:!0,class:!0,href:!0});var dl=r(G);be=o(dl,"SPAN",{});var hl=r(be);c(mt.$$.fragment,hl),hl.forEach(e),dl.forEach(e),qs=d(za),ke=o(za,"SPAN",{});var cl=r(ke);Fs=p(cl,"Upload from Python"),cl.forEach(e),za.forEach(e),ia=d(t),b=o(t,"P",{});var Jt=r(b);Gs=p(Jt,"To upload a "),Ht=o(Jt,"A",{href:!0});var ml=r(Ht);Us=p(ml,"datasets.DatasetDict"),ml.forEach(e),zs=p(Jt," on the Hugging Face Hub in Python, you can login and use the "),Ct=o(Jt,"A",{href:!0});var vl=r(Ct);Ms=p(vl,"datasets.DatasetDict.push_to_hub()"),vl.forEach(e),Ws=p(Jt," method:"),Jt.forEach(e),na=d(t),Ot=o(t,"OL",{});var gl=r(Ot);De=o(gl,"LI",{});var yl=r(De);Vs=p(yl,"Login from the command line:"),yl.forEach(e),gl.forEach(e),pa=d(t),c(vt.$$.fragment,t),ua=d(t),gt=o(t,"OL",{start:!0});var _l=r(gt);xe=o(_l,"LI",{});var wl=r(xe);Rs=p(wl,"Upload the dataset:"),wl.forEach(e),_l.forEach(e),fa=d(t),c(yt.$$.fragment,t),da=d(t),U=o(t,"P",{});var Ma=r(U);Js=p(Ma,"With the "),je=o(Ma,"CODE",{});var $l=r(je);Ys=p($l,"private"),$l.forEach(e),Bs=p(Ma," parameter you can choose whether your dataset is public or private:"),Ma.forEach(e),ha=d(t),c(_t.$$.fragment,t),ca=d(t),N=o(t,"H2",{class:!0});var Wa=r(N);z=o(Wa,"A",{id:!0,class:!0,href:!0});var El=r(z);Pe=o(El,"SPAN",{});var bl=r(Pe);c(wt.$$.fragment,bl),bl.forEach(e),El.forEach(e),Ks=d(Wa),Le=o(Wa,"SPAN",{});var kl=r(Le);Qs=p(kl,"Privacy"),kl.forEach(e),Wa.forEach(e),ma=d(t),qt=o(t,"P",{});var Dl=r(qt);Xs=p(Dl,"If your uploaded dataset is private, only you can access it:"),Dl.forEach(e),va=d(t),Ft=o(t,"OL",{});var xl=r(Ft);Ae=o(xl,"LI",{});var jl=r(Ae);Zs=p(jl,"Login from the command line:"),jl.forEach(e),xl.forEach(e),ga=d(t),c($t.$$.fragment,t),ya=d(t),Et=o(t,"OL",{start:!0});var Pl=r(Et);Ne=o(Pl,"LI",{});var Ll=r(Ne);to=p(Ll,"Load the dataset with your authentication token:"),Ll.forEach(e),Pl.forEach(e),_a=d(t),c(bt.$$.fragment,t),wa=d(t),M=o(t,"P",{});var Va=r(M);eo=p(Va,"Similarly, share a private dataset within your organization by uploading a dataset as "),Se=o(Va,"STRONG",{});var Al=r(Se);ao=p(Al,"Private"),Al.forEach(e),so=p(Va," to your organization. Then members of the organization can load the dataset like:"),Va.forEach(e),$a=d(t),Gt=o(t,"OL",{});var Nl=r(Gt);Te=o(Nl,"LI",{});var Sl=r(Te);oo=p(Sl,"Login from the command line:"),Sl.forEach(e),Nl.forEach(e),Ea=d(t),c(kt.$$.fragment,t),ba=d(t),Dt=o(t,"OL",{start:!0});var Tl=r(Dt);Ie=o(Tl,"LI",{});var Il=r(Ie);lo=p(Il,"Load the dataset with your authentication token:"),Il.forEach(e),Tl.forEach(e),ka=d(t),c(xt.$$.fragment,t),Da=d(t),S=o(t,"H2",{class:!0});var Ra=r(S);W=o(Ra,"A",{id:!0,class:!0,href:!0});var Hl=r(W);He=o(Hl,"SPAN",{});var Cl=r(He);c(jt.$$.fragment,Cl),Cl.forEach(e),Hl.forEach(e),ro=d(Ra),Ce=o(Ra,"SPAN",{});var Ol=r(Ce);io=p(Ol,"What's next?"),Ol.forEach(e),Ra.forEach(e),xa=d(t),Ut=o(t,"P",{});var ql=r(Ut);no=p(ql,"Congratulations, you have completed all of the \u{1F917} Datasets tutorials!"),ql.forEach(e),ja=d(t),zt=o(t,"P",{});var Fl=r(zt);po=p(Fl,"Throughout these tutorials, you learned the basic steps of using \u{1F917} Datasets. You loaded a dataset from the Hub and learned how to access the information stored inside the dataset. Next, you tokenized the dataset into sequences of integers and formatted it so you can use it with PyTorch or TensorFlow. Then you loaded a metric to evaluate your model\u2019s predictions. Finally, you uploaded a dataset to the Hub without writing a single line of code. This is all you need to get started with \u{1F917} Datasets!"),Fl.forEach(e),Pa=d(t),k=o(t,"P",{});var Yt=r(k);uo=p(Yt,"Now that you have a solid grasp of what \u{1F917} Datasets can do, you can begin formulating your own questions about how you can use it with your dataset. Please take a look at our "),Mt=o(Yt,"A",{href:!0});var Gl=r(Mt);fo=p(Gl,"How-to guides"),Gl.forEach(e),ho=p(Yt," for more practical help on solving common use-cases, or read our "),Wt=o(Yt,"A",{href:!0});var Ul=r(Wt);co=p(Ul,"Conceptual guides"),Ul.forEach(e),mo=p(Yt," to deepen your understanding about \u{1F917} Datasets."),Yt.forEach(e),this.h()},h(){u(E,"name","hf:doc:metadata"),u(E,"content",JSON.stringify(Yl)),u(w,"id","upload-a-dataset-to-the-hub"),u(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(w,"href","#upload-a-dataset-to-the-hub"),u(_,"class","relative group"),u(Y,"href","https://huggingface.co/join"),u(Y,"rel","nofollow"),u(I,"id","create-a-repository"),u(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(I,"href","#create-a-repository"),u(D,"class","relative group"),Bt(ae.src,vo="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/create_repo.png")||u(ae,"src",vo),u(Q,"class","flex justify-center"),u(C,"id","upload-your-files"),u(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(C,"href","#upload-your-files"),u(x,"class","relative group"),Bt(ie.src,go="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/upload_files.png")||u(ie,"src",go),u(Z,"class","flex justify-center"),u(tt,"start","2"),Bt(pe.src,yo="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/commit_files.png")||u(pe,"src",yo),u(et,"class","flex justify-center"),u(at,"start","3"),Bt(fe.src,_o="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/files_stored.png")||u(fe,"src",_o),u(st,"class","flex justify-center"),u(O,"id","create-a-dataset-card"),u(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(O,"href","#create-a-dataset-card"),u(P,"class","relative group"),Bt(me.src,wo="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/dataset_card.png")||u(me,"src",wo),u(rt,"class","flex justify-center"),u(nt,"href","https://raw.githubusercontent.com/huggingface/datasets/master/templates/README.md"),u(nt,"rel","nofollow"),u(ut,"href","https://huggingface.co/spaces/huggingface/datasets-tagging"),u(ut,"rel","nofollow"),u($,"start","2"),Bt(we.src,$o="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/card_tags.png")||u(we,"src",$o),u(ft,"class","flex justify-center"),u(dt,"href","https://huggingface.co/datasets/cnn_dailymail"),u(dt,"rel","nofollow"),u(F,"id","load-dataset"),u(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(F,"href","#load-dataset"),u(L,"class","relative group"),u(G,"id","upload-from-python"),u(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(G,"href","#upload-from-python"),u(A,"class","relative group"),u(Ht,"href","/docs/datasets/master/en/package_reference/main_classes#datasets.DatasetDict"),u(Ct,"href","/docs/datasets/master/en/package_reference/main_classes#datasets.DatasetDict.push_to_hub"),u(gt,"start","2"),u(z,"id","privacy"),u(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(z,"href","#privacy"),u(N,"class","relative group"),u(Et,"start","2"),u(Dt,"start","2"),u(W,"id","whats-next"),u(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(W,"href","#whats-next"),u(S,"class","relative group"),u(Mt,"href","./how_to"),u(Wt,"href","./about_arrow")},m(t,l){a(document.head,E),i(t,Pt,l),i(t,_,l),a(_,w),a(w,Kt),m(J,Kt,null),a(_,Ya),a(_,Qt),a(Qt,Ba),i(t,Oe,l),i(t,Lt,l),a(Lt,Ka),i(t,qe,l),i(t,T,l),a(T,Qa),a(T,Y),a(Y,Xa),a(T,Za),i(t,Fe,l),i(t,D,l),a(D,I),a(I,Xt),m(B,Xt,null),a(D,ts),a(D,Zt),a(Zt,es),i(t,Ge,l),i(t,At,l),a(At,as),i(t,Ue,l),i(t,H,l),a(H,K),a(K,ss),a(K,te),a(te,os),a(K,ls),a(H,rs),a(H,ee),a(ee,is),i(t,ze,l),i(t,Q,l),a(Q,ae),i(t,Me,l),i(t,x,l),a(x,C),a(C,se),m(X,se,null),a(x,ns),a(x,oe),a(oe,ps),i(t,We,l),i(t,Nt,l),a(Nt,j),a(j,us),a(j,le),a(le,fs),a(j,ds),a(j,re),a(re,hs),a(j,cs),i(t,Ve,l),i(t,Z,l),a(Z,ie),i(t,Re,l),i(t,tt,l),a(tt,ne),a(ne,ms),i(t,Je,l),i(t,et,l),a(et,pe),i(t,Ye,l),i(t,at,l),a(at,ue),a(ue,vs),i(t,Be,l),i(t,st,l),a(st,fe),i(t,Ke,l),i(t,P,l),a(P,O),a(O,de),m(ot,de,null),a(P,gs),a(P,he),a(he,ys),i(t,Qe,l),i(t,St,l),a(St,_s),i(t,Xe,l),i(t,Tt,l),a(Tt,lt),a(lt,ws),a(lt,ce),a(ce,$s),a(lt,Es),i(t,Ze,l),i(t,rt,l),a(rt,me),i(t,ta,l),i(t,$,l),a($,ve),a(ve,it),a(it,bs),a(it,nt),a(nt,ks),a(it,Ds),a($,xs),a($,ge),a(ge,pt),a(pt,js),a(pt,ut),a(ut,Ps),a(pt,Ls),a($,As),a($,ye),a(ye,_e),a(_e,Ns),i(t,ea,l),i(t,ft,l),a(ft,we),i(t,aa,l),i(t,q,l),a(q,Ss),a(q,dt),a(dt,Ts),a(q,Is),i(t,sa,l),i(t,L,l),a(L,F),a(F,$e),m(ht,$e,null),a(L,Hs),a(L,Ee),a(Ee,Cs),i(t,oa,l),i(t,It,l),a(It,Os),i(t,la,l),m(ct,t,l),i(t,ra,l),i(t,A,l),a(A,G),a(G,be),m(mt,be,null),a(A,qs),a(A,ke),a(ke,Fs),i(t,ia,l),i(t,b,l),a(b,Gs),a(b,Ht),a(Ht,Us),a(b,zs),a(b,Ct),a(Ct,Ms),a(b,Ws),i(t,na,l),i(t,Ot,l),a(Ot,De),a(De,Vs),i(t,pa,l),m(vt,t,l),i(t,ua,l),i(t,gt,l),a(gt,xe),a(xe,Rs),i(t,fa,l),m(yt,t,l),i(t,da,l),i(t,U,l),a(U,Js),a(U,je),a(je,Ys),a(U,Bs),i(t,ha,l),m(_t,t,l),i(t,ca,l),i(t,N,l),a(N,z),a(z,Pe),m(wt,Pe,null),a(N,Ks),a(N,Le),a(Le,Qs),i(t,ma,l),i(t,qt,l),a(qt,Xs),i(t,va,l),i(t,Ft,l),a(Ft,Ae),a(Ae,Zs),i(t,ga,l),m($t,t,l),i(t,ya,l),i(t,Et,l),a(Et,Ne),a(Ne,to),i(t,_a,l),m(bt,t,l),i(t,wa,l),i(t,M,l),a(M,eo),a(M,Se),a(Se,ao),a(M,so),i(t,$a,l),i(t,Gt,l),a(Gt,Te),a(Te,oo),i(t,Ea,l),m(kt,t,l),i(t,ba,l),i(t,Dt,l),a(Dt,Ie),a(Ie,lo),i(t,ka,l),m(xt,t,l),i(t,Da,l),i(t,S,l),a(S,W),a(W,He),m(jt,He,null),a(S,ro),a(S,Ce),a(Ce,io),i(t,xa,l),i(t,Ut,l),a(Ut,no),i(t,ja,l),i(t,zt,l),a(zt,po),i(t,Pa,l),i(t,k,l),a(k,uo),a(k,Mt),a(Mt,fo),a(k,ho),a(k,Wt),a(Wt,co),a(k,mo),La=!0},p:Rl,i(t){La||(v(J.$$.fragment,t),v(B.$$.fragment,t),v(X.$$.fragment,t),v(ot.$$.fragment,t),v(ht.$$.fragment,t),v(ct.$$.fragment,t),v(mt.$$.fragment,t),v(vt.$$.fragment,t),v(yt.$$.fragment,t),v(_t.$$.fragment,t),v(wt.$$.fragment,t),v($t.$$.fragment,t),v(bt.$$.fragment,t),v(kt.$$.fragment,t),v(xt.$$.fragment,t),v(jt.$$.fragment,t),La=!0)},o(t){g(J.$$.fragment,t),g(B.$$.fragment,t),g(X.$$.fragment,t),g(ot.$$.fragment,t),g(ht.$$.fragment,t),g(ct.$$.fragment,t),g(mt.$$.fragment,t),g(vt.$$.fragment,t),g(yt.$$.fragment,t),g(_t.$$.fragment,t),g(wt.$$.fragment,t),g($t.$$.fragment,t),g(bt.$$.fragment,t),g(kt.$$.fragment,t),g(xt.$$.fragment,t),g(jt.$$.fragment,t),La=!1},d(t){e(E),t&&e(Pt),t&&e(_),y(J),t&&e(Oe),t&&e(Lt),t&&e(qe),t&&e(T),t&&e(Fe),t&&e(D),y(B),t&&e(Ge),t&&e(At),t&&e(Ue),t&&e(H),t&&e(ze),t&&e(Q),t&&e(Me),t&&e(x),y(X),t&&e(We),t&&e(Nt),t&&e(Ve),t&&e(Z),t&&e(Re),t&&e(tt),t&&e(Je),t&&e(et),t&&e(Ye),t&&e(at),t&&e(Be),t&&e(st),t&&e(Ke),t&&e(P),y(ot),t&&e(Qe),t&&e(St),t&&e(Xe),t&&e(Tt),t&&e(Ze),t&&e(rt),t&&e(ta),t&&e($),t&&e(ea),t&&e(ft),t&&e(aa),t&&e(q),t&&e(sa),t&&e(L),y(ht),t&&e(oa),t&&e(It),t&&e(la),y(ct,t),t&&e(ra),t&&e(A),y(mt),t&&e(ia),t&&e(b),t&&e(na),t&&e(Ot),t&&e(pa),y(vt,t),t&&e(ua),t&&e(gt),t&&e(fa),y(yt,t),t&&e(da),t&&e(U),t&&e(ha),y(_t,t),t&&e(ca),t&&e(N),y(wt),t&&e(ma),t&&e(qt),t&&e(va),t&&e(Ft),t&&e(ga),y($t,t),t&&e(ya),t&&e(Et),t&&e(_a),y(bt,t),t&&e(wa),t&&e(M),t&&e($a),t&&e(Gt),t&&e(Ea),y(kt,t),t&&e(ba),t&&e(Dt),t&&e(ka),y(xt,t),t&&e(Da),t&&e(S),y(jt),t&&e(xa),t&&e(Ut),t&&e(ja),t&&e(zt),t&&e(Pa),t&&e(k)}}}const Yl={local:"upload-a-dataset-to-the-hub",sections:[{local:"create-a-repository",title:"Create a repository"},{local:"upload-your-files",title:"Upload your files"},{local:"create-a-dataset-card",title:"Create a Dataset card"},{local:"load-dataset",title:"Load dataset"},{local:"upload-from-python",title:"Upload from Python"},{local:"privacy",title:"Privacy"},{local:"whats-next",title:"What's next?"}],title:"Upload a dataset to the Hub"};function Bl(Ja,E,Pt){let{fw:_}=E;return Ja.$$set=w=>{"fw"in w&&Pt(0,_=w.fw)},[_]}class Zl extends zl{constructor(E){super();Ml(this,E,Bl,Jl,Wl,{fw:0})}}export{Zl as default,Yl as metadata};
