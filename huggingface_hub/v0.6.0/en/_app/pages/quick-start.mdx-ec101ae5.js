import{S as Kl,i as Vl,s as Xl,e as a,k as f,w as d,t as n,M as Zl,c as l,d as t,m as p,a as r,x as m,h as i,b as u,F as o,g as h,y as g,q as _,o as y,B as w,v as er}from"../chunks/vendor-a09ded63.js";import{T as tr}from"../chunks/Tip-27a54654.js";import{I as Me}from"../chunks/IconCopyLink-3f5556be.js";import{C}from"../chunks/CodeBlock-879da7fe.js";function or(gt){let c,D;return{c(){c=a("p"),D=n(`You can also provide your token to our functions and methods. This way you don\u2019t need to
store your token anywhere.`)},l(v){c=l(v,"P",{});var $=r(c);D=i($,`You can also provide your token to our functions and methods. This way you don\u2019t need to
store your token anywhere.`),$.forEach(t)},m(v,$){h(v,c,$),o(c,D)},d(v){v&&t(c)}}}function ar(gt){let c,D,v,$,Qe,Z,mo,We,go,_t,k,_o,ee,yo,wo,Je,vo,bo,yt,T,L,Be,te,$o,ze,Eo,wt,E,ko,Ge,Ao,Ho,Ke,jo,Po,Ve,To,xo,vt,N,qo,Xe,Io,So,bt,oe,$t,O,Co,Ze,Do,Lo,Et,ae,kt,x,U,et,le,No,tt,Oo,At,Y,Uo,ve,Yo,Fo,Ht,F,Ro,re,Mo,Qo,jt,se,Pt,R,Wo,ot,Jo,Bo,Tt,ne,xt,M,zo,be,Go,Ko,qt,q,Q,at,ie,Vo,lt,Xo,It,A,Zo,he,ea,ta,fe,oa,aa,St,W,Ct,$e,rt,la,Dt,pe,Lt,J,ra,st,sa,na,Nt,ue,Ot,ce,nt,ia,Ut,B,ha,Ee,fa,pa,Yt,de,Ft,ke,ua,Rt,me,Mt,Ae,ca,Qt,I,z,it,ge,da,ht,ma,Wt,G,ga,He,_a,ya,Jt,H,ft,wa,va,pt,ba,$a,ut,Ea,Bt,_e,zt,j,ka,je,Aa,Ha,Pe,ja,Pa,Gt,S,K,ct,ye,Ta,dt,xa,Kt,V,qa,mt,Ia,Sa,Vt,b,Te,xe,Ca,Da,La,qe,Ie,Na,Oa,Ua,Se,Ce,Ya,Fa,Ra,De,Le,Ma,Qa,Wa,Ne,Oe,Ja,Ba,Xt;return Z=new Me({}),te=new Me({}),oe=new C({props:{code:"pip install huggingface_hub",highlighted:"pip install huggingface_hub"}}),ae=new C({props:{code:"conda install -c conda-forge huggingface_hub",highlighted:"conda install -c conda-forge huggingface_hub"}}),le=new Me({}),se=new C({props:{code:`from huggingface_hub import hf_hub_download
hf_hub_download(repo_id="google/pegasus-xsum", filename="config.json")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_download
<span class="hljs-meta">&gt;&gt;&gt; </span>hf_hub_download(repo_id=<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>, filename=<span class="hljs-string">&quot;config.json&quot;</span>)`}}),ne=new C({props:{code:`from huggingface_hub import hf_hub_download
hf_hub_download(
    repo_id="google/pegasus-xsum", 
    filename="config.json", 
    revision="4d33b01d79672f27f001f6abade33f22d993b151"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_download
<span class="hljs-meta">&gt;&gt;&gt; </span>hf_hub_download(
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>, 
<span class="hljs-meta">... </span>    filename=<span class="hljs-string">&quot;config.json&quot;</span>, 
<span class="hljs-meta">... </span>    revision=<span class="hljs-string">&quot;4d33b01d79672f27f001f6abade33f22d993b151&quot;</span>
<span class="hljs-meta">... </span>)`}}),ie=new Me({}),W=new tr({props:{$$slots:{default:[or]},$$scope:{ctx:gt}}}),pe=new C({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}}),ue=new C({props:{code:`from huggingface_hub import notebook_login
notebook_login()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login
<span class="hljs-meta">&gt;&gt;&gt; </span>notebook_login()`}}),de=new C({props:{code:`from huggingface_hub import HfApi
api = HfApi()
api.create_repo(repo_id="super-cool-model")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi
<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()
<span class="hljs-meta">&gt;&gt;&gt; </span>api.create_repo(repo_id=<span class="hljs-string">&quot;super-cool-model&quot;</span>)`}}),me=new C({props:{code:`from huggingface_hub import HfApi
api = HfApi()
api.create_repo(repo_id="super-cool-model", private=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi
<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()
<span class="hljs-meta">&gt;&gt;&gt; </span>api.create_repo(repo_id=<span class="hljs-string">&quot;super-cool-model&quot;</span>, private=<span class="hljs-literal">True</span>)`}}),ge=new Me({}),_e=new C({props:{code:`from huggingface_hub import HfApi
api = HfApi()
api.upload_file(path_or_fileobj="/home/lysandre/dummy-test/README.md", 
                path_in_repo="README.md", 
                repo_id="lysandre/test-model",
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi
<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()
<span class="hljs-meta">&gt;&gt;&gt; </span>api.upload_file(path_or_fileobj=<span class="hljs-string">&quot;/home/lysandre/dummy-test/README.md&quot;</span>, 
<span class="hljs-meta">... </span>                path_in_repo=<span class="hljs-string">&quot;README.md&quot;</span>, 
<span class="hljs-meta">... </span>                repo_id=<span class="hljs-string">&quot;lysandre/test-model&quot;</span>,
<span class="hljs-meta">... </span>)`}}),ye=new Me({}),{c(){c=a("meta"),D=f(),v=a("h1"),$=a("a"),Qe=a("span"),d(Z.$$.fragment),mo=f(),We=a("span"),go=n("Quick start"),_t=f(),k=a("p"),_o=n("The "),ee=a("a"),yo=n("Hugging Face Hub"),wo=n(` is the go-to place for sharing machine learning
models, demos, datasets, and metrics. `),Je=a("code"),vo=n("huggingface_hub"),bo=n(` library helps you interact with
the Hub without leaving your development environment. You can create and manage
repositories easily, download and upload files, and get useful model and dataset
metadata from the Hub.`),yt=f(),T=a("h2"),L=a("a"),Be=a("span"),d(te.$$.fragment),$o=f(),ze=a("span"),Eo=n("Install the Hub library"),wt=f(),E=a("p"),ko=n("To get started, you should install the "),Ge=a("code"),Ao=n("huggingface_hub"),Ho=n(` library. You can install the
library with `),Ke=a("code"),jo=n("pip"),Po=n(" or "),Ve=a("code"),To=n("conda"),xo=n("."),vt=f(),N=a("p"),qo=n("With "),Xe=a("code"),Io=n("pip"),So=n(":"),bt=f(),d(oe.$$.fragment),$t=f(),O=a("p"),Co=n("With "),Ze=a("code"),Do=n("conda"),Lo=n(":"),Et=f(),d(ae.$$.fragment),kt=f(),x=a("h2"),U=a("a"),et=a("span"),d(le.$$.fragment),No=f(),tt=a("span"),Oo=n("Download files from the Hub"),At=f(),Y=a("p"),Uo=n(`Repositories on the Hub are git version controlled, and users can download a single file
or the whole repository. You can use the `),ve=a("a"),Yo=n("hf_hub_download()"),Fo=n(` function to download files.
This function will download and cache a file on your local disk. The next time you need
that file, it will load from your cache, so you don\u2019t need to re-download it.`),Ht=f(),F=a("p"),Ro=n(`You will need the repository id and the filename of the file you want to download. For
example, to download the `),re=a("a"),Mo=n("Pegasus"),Qo=n(` model
configuration file:`),jt=f(),d(se.$$.fragment),Pt=f(),R=a("p"),Wo=n("To download a specific version of the file, use the "),ot=a("code"),Jo=n("revision"),Bo=n(` parameter to specify the
branch name, tag, or commit hash. If you choose to use the commit hash, it must be the
full-length hash instead of the shorter 7-character commit hash:`),Tt=f(),d(ne.$$.fragment),xt=f(),M=a("p"),zo=n("For more details and options, see the API reference for "),be=a("a"),Go=n("hf_hub_download()"),Ko=n("."),qt=f(),q=a("h2"),Q=a("a"),at=a("span"),d(ie.$$.fragment),Vo=f(),lt=a("span"),Xo=n("Create a repository"),It=f(),A=a("p"),Zo=n("To create and share files to the Hub, you need to have a Hugging Face account. "),he=a("a"),ea=n(`Create
an account`),ta=n(` if you don\u2019t already have one, and then sign in to find
your `),fe=a("a"),oa=n("User Access Token"),aa=n(` in
your Settings. The User Access Token is used to authenticate your identity to the Hub.`),St=f(),d(W.$$.fragment),Ct=f(),$e=a("ol"),rt=a("li"),la=n("Log in to your Hugging Face account with the following command:"),Dt=f(),d(pe.$$.fragment),Lt=f(),J=a("p"),ra=n(`Or if you prefer to work from a Jupyter or Colaboratory notebook, then login with
`),st=a("code"),sa=n("notebook_login()"),na=n(":"),Nt=f(),d(ue.$$.fragment),Ot=f(),ce=a("ol"),nt=a("li"),ia=n("Enter your User Access Token to authenticate your identity to the Hub."),Ut=f(),B=a("p"),ha=n("After you\u2019ve created an account, create a repository with the "),Ee=a("a"),fa=n("create_repo()"),pa=n(" function:"),Yt=f(),d(de.$$.fragment),Ft=f(),ke=a("p"),ua=n("If you want your repository to be private, then:"),Rt=f(),d(me.$$.fragment),Mt=f(),Ae=a("p"),ca=n("Private repositories will not be visible to anyone except yourself."),Qt=f(),I=a("h2"),z=a("a"),it=a("span"),d(ge.$$.fragment),da=f(),ht=a("span"),ma=n("Share files to the Hub"),Wt=f(),G=a("p"),ga=n("Use the "),He=a("a"),_a=n("upload_file()"),ya=n(` function to add a file to your newly created repository. You
need to specify:`),Jt=f(),H=a("ol"),ft=a("li"),wa=n("The path of the file to upload."),va=f(),pt=a("li"),ba=n("The path of the file in the repository."),$a=f(),ut=a("li"),Ea=n("The repository id of where you want to add the file."),Bt=f(),d(_e.$$.fragment),zt=f(),j=a("p"),ka=n("To upload more than one file at a time, take a look at this "),je=a("a"),Aa=n("guide"),Ha=n(`
which will introduce you to the `),Pe=a("a"),ja=n("Repository"),Pa=n(` class and other methods for uploading
files.`),Gt=f(),S=a("h2"),K=a("a"),ct=a("span"),d(ye.$$.fragment),Ta=f(),dt=a("span"),xa=n("Next steps"),Kt=f(),V=a("p"),qa=n("The "),mt=a("code"),Ia=n("huggingface_hub"),Sa=n(` library provides an easy way for users to interact with the Hub
with Python. To learn more about how you can manage your files and repositories on the
Hub, we recommend reading our how-to guides for how to:`),Vt=f(),b=a("ul"),Te=a("li"),xe=a("a"),Ca=n("Create and manage repositories"),Da=n("."),La=f(),qe=a("li"),Ie=a("a"),Na=n("Download"),Oa=n(" files from the Hub."),Ua=f(),Se=a("li"),Ce=a("a"),Ya=n("Upload"),Fa=n(" files to the Hub."),Ra=f(),De=a("li"),Le=a("a"),Ma=n("Search the Hub"),Qa=n(" for your desired model or dataset."),Wa=f(),Ne=a("li"),Oe=a("a"),Ja=n("Access the Inference API"),Ba=n(" for fast inference."),this.h()},l(e){const s=Zl('[data-svelte="svelte-1phssyn"]',document.head);c=l(s,"META",{name:!0,content:!0}),s.forEach(t),D=p(e),v=l(e,"H1",{class:!0});var we=r(v);$=l(we,"A",{id:!0,class:!0,href:!0});var Za=r($);Qe=l(Za,"SPAN",{});var el=r(Qe);m(Z.$$.fragment,el),el.forEach(t),Za.forEach(t),mo=p(we),We=l(we,"SPAN",{});var tl=r(We);go=i(tl,"Quick start"),tl.forEach(t),we.forEach(t),_t=p(e),k=l(e,"P",{});var Ue=r(k);_o=i(Ue,"The "),ee=l(Ue,"A",{href:!0,rel:!0});var ol=r(ee);yo=i(ol,"Hugging Face Hub"),ol.forEach(t),wo=i(Ue,` is the go-to place for sharing machine learning
models, demos, datasets, and metrics. `),Je=l(Ue,"CODE",{});var al=r(Je);vo=i(al,"huggingface_hub"),al.forEach(t),bo=i(Ue,` library helps you interact with
the Hub without leaving your development environment. You can create and manage
repositories easily, download and upload files, and get useful model and dataset
metadata from the Hub.`),Ue.forEach(t),yt=p(e),T=l(e,"H2",{class:!0});var Zt=r(T);L=l(Zt,"A",{id:!0,class:!0,href:!0});var ll=r(L);Be=l(ll,"SPAN",{});var rl=r(Be);m(te.$$.fragment,rl),rl.forEach(t),ll.forEach(t),$o=p(Zt),ze=l(Zt,"SPAN",{});var sl=r(ze);Eo=i(sl,"Install the Hub library"),sl.forEach(t),Zt.forEach(t),wt=p(e),E=l(e,"P",{});var X=r(E);ko=i(X,"To get started, you should install the "),Ge=l(X,"CODE",{});var nl=r(Ge);Ao=i(nl,"huggingface_hub"),nl.forEach(t),Ho=i(X,` library. You can install the
library with `),Ke=l(X,"CODE",{});var il=r(Ke);jo=i(il,"pip"),il.forEach(t),Po=i(X," or "),Ve=l(X,"CODE",{});var hl=r(Ve);To=i(hl,"conda"),hl.forEach(t),xo=i(X,"."),X.forEach(t),vt=p(e),N=l(e,"P",{});var eo=r(N);qo=i(eo,"With "),Xe=l(eo,"CODE",{});var fl=r(Xe);Io=i(fl,"pip"),fl.forEach(t),So=i(eo,":"),eo.forEach(t),bt=p(e),m(oe.$$.fragment,e),$t=p(e),O=l(e,"P",{});var to=r(O);Co=i(to,"With "),Ze=l(to,"CODE",{});var pl=r(Ze);Do=i(pl,"conda"),pl.forEach(t),Lo=i(to,":"),to.forEach(t),Et=p(e),m(ae.$$.fragment,e),kt=p(e),x=l(e,"H2",{class:!0});var oo=r(x);U=l(oo,"A",{id:!0,class:!0,href:!0});var ul=r(U);et=l(ul,"SPAN",{});var cl=r(et);m(le.$$.fragment,cl),cl.forEach(t),ul.forEach(t),No=p(oo),tt=l(oo,"SPAN",{});var dl=r(tt);Oo=i(dl,"Download files from the Hub"),dl.forEach(t),oo.forEach(t),At=p(e),Y=l(e,"P",{});var ao=r(Y);Uo=i(ao,`Repositories on the Hub are git version controlled, and users can download a single file
or the whole repository. You can use the `),ve=l(ao,"A",{href:!0});var ml=r(ve);Yo=i(ml,"hf_hub_download()"),ml.forEach(t),Fo=i(ao,` function to download files.
This function will download and cache a file on your local disk. The next time you need
that file, it will load from your cache, so you don\u2019t need to re-download it.`),ao.forEach(t),Ht=p(e),F=l(e,"P",{});var lo=r(F);Ro=i(lo,`You will need the repository id and the filename of the file you want to download. For
example, to download the `),re=l(lo,"A",{href:!0,rel:!0});var gl=r(re);Mo=i(gl,"Pegasus"),gl.forEach(t),Qo=i(lo,` model
configuration file:`),lo.forEach(t),jt=p(e),m(se.$$.fragment,e),Pt=p(e),R=l(e,"P",{});var ro=r(R);Wo=i(ro,"To download a specific version of the file, use the "),ot=l(ro,"CODE",{});var _l=r(ot);Jo=i(_l,"revision"),_l.forEach(t),Bo=i(ro,` parameter to specify the
branch name, tag, or commit hash. If you choose to use the commit hash, it must be the
full-length hash instead of the shorter 7-character commit hash:`),ro.forEach(t),Tt=p(e),m(ne.$$.fragment,e),xt=p(e),M=l(e,"P",{});var so=r(M);zo=i(so,"For more details and options, see the API reference for "),be=l(so,"A",{href:!0});var yl=r(be);Go=i(yl,"hf_hub_download()"),yl.forEach(t),Ko=i(so,"."),so.forEach(t),qt=p(e),q=l(e,"H2",{class:!0});var no=r(q);Q=l(no,"A",{id:!0,class:!0,href:!0});var wl=r(Q);at=l(wl,"SPAN",{});var vl=r(at);m(ie.$$.fragment,vl),vl.forEach(t),wl.forEach(t),Vo=p(no),lt=l(no,"SPAN",{});var bl=r(lt);Xo=i(bl,"Create a repository"),bl.forEach(t),no.forEach(t),It=p(e),A=l(e,"P",{});var Ye=r(A);Zo=i(Ye,"To create and share files to the Hub, you need to have a Hugging Face account. "),he=l(Ye,"A",{href:!0,rel:!0});var $l=r(he);ea=i($l,`Create
an account`),$l.forEach(t),ta=i(Ye,` if you don\u2019t already have one, and then sign in to find
your `),fe=l(Ye,"A",{href:!0,rel:!0});var El=r(fe);oa=i(El,"User Access Token"),El.forEach(t),aa=i(Ye,` in
your Settings. The User Access Token is used to authenticate your identity to the Hub.`),Ye.forEach(t),St=p(e),m(W.$$.fragment,e),Ct=p(e),$e=l(e,"OL",{});var kl=r($e);rt=l(kl,"LI",{});var Al=r(rt);la=i(Al,"Log in to your Hugging Face account with the following command:"),Al.forEach(t),kl.forEach(t),Dt=p(e),m(pe.$$.fragment,e),Lt=p(e),J=l(e,"P",{});var io=r(J);ra=i(io,`Or if you prefer to work from a Jupyter or Colaboratory notebook, then login with
`),st=l(io,"CODE",{});var Hl=r(st);sa=i(Hl,"notebook_login()"),Hl.forEach(t),na=i(io,":"),io.forEach(t),Nt=p(e),m(ue.$$.fragment,e),Ot=p(e),ce=l(e,"OL",{start:!0});var jl=r(ce);nt=l(jl,"LI",{});var Pl=r(nt);ia=i(Pl,"Enter your User Access Token to authenticate your identity to the Hub."),Pl.forEach(t),jl.forEach(t),Ut=p(e),B=l(e,"P",{});var ho=r(B);ha=i(ho,"After you\u2019ve created an account, create a repository with the "),Ee=l(ho,"A",{href:!0});var Tl=r(Ee);fa=i(Tl,"create_repo()"),Tl.forEach(t),pa=i(ho," function:"),ho.forEach(t),Yt=p(e),m(de.$$.fragment,e),Ft=p(e),ke=l(e,"P",{});var xl=r(ke);ua=i(xl,"If you want your repository to be private, then:"),xl.forEach(t),Rt=p(e),m(me.$$.fragment,e),Mt=p(e),Ae=l(e,"P",{});var ql=r(Ae);ca=i(ql,"Private repositories will not be visible to anyone except yourself."),ql.forEach(t),Qt=p(e),I=l(e,"H2",{class:!0});var fo=r(I);z=l(fo,"A",{id:!0,class:!0,href:!0});var Il=r(z);it=l(Il,"SPAN",{});var Sl=r(it);m(ge.$$.fragment,Sl),Sl.forEach(t),Il.forEach(t),da=p(fo),ht=l(fo,"SPAN",{});var Cl=r(ht);ma=i(Cl,"Share files to the Hub"),Cl.forEach(t),fo.forEach(t),Wt=p(e),G=l(e,"P",{});var po=r(G);ga=i(po,"Use the "),He=l(po,"A",{href:!0});var Dl=r(He);_a=i(Dl,"upload_file()"),Dl.forEach(t),ya=i(po,` function to add a file to your newly created repository. You
need to specify:`),po.forEach(t),Jt=p(e),H=l(e,"OL",{});var Fe=r(H);ft=l(Fe,"LI",{});var Ll=r(ft);wa=i(Ll,"The path of the file to upload."),Ll.forEach(t),va=p(Fe),pt=l(Fe,"LI",{});var Nl=r(pt);ba=i(Nl,"The path of the file in the repository."),Nl.forEach(t),$a=p(Fe),ut=l(Fe,"LI",{});var Ol=r(ut);Ea=i(Ol,"The repository id of where you want to add the file."),Ol.forEach(t),Fe.forEach(t),Bt=p(e),m(_e.$$.fragment,e),zt=p(e),j=l(e,"P",{});var Re=r(j);ka=i(Re,"To upload more than one file at a time, take a look at this "),je=l(Re,"A",{href:!0});var Ul=r(je);Aa=i(Ul,"guide"),Ul.forEach(t),Ha=i(Re,`
which will introduce you to the `),Pe=l(Re,"A",{href:!0});var Yl=r(Pe);ja=i(Yl,"Repository"),Yl.forEach(t),Pa=i(Re,` class and other methods for uploading
files.`),Re.forEach(t),Gt=p(e),S=l(e,"H2",{class:!0});var uo=r(S);K=l(uo,"A",{id:!0,class:!0,href:!0});var Fl=r(K);ct=l(Fl,"SPAN",{});var Rl=r(ct);m(ye.$$.fragment,Rl),Rl.forEach(t),Fl.forEach(t),Ta=p(uo),dt=l(uo,"SPAN",{});var Ml=r(dt);xa=i(Ml,"Next steps"),Ml.forEach(t),uo.forEach(t),Kt=p(e),V=l(e,"P",{});var co=r(V);qa=i(co,"The "),mt=l(co,"CODE",{});var Ql=r(mt);Ia=i(Ql,"huggingface_hub"),Ql.forEach(t),Sa=i(co,` library provides an easy way for users to interact with the Hub
with Python. To learn more about how you can manage your files and repositories on the
Hub, we recommend reading our how-to guides for how to:`),co.forEach(t),Vt=p(e),b=l(e,"UL",{});var P=r(b);Te=l(P,"LI",{});var za=r(Te);xe=l(za,"A",{href:!0});var Wl=r(xe);Ca=i(Wl,"Create and manage repositories"),Wl.forEach(t),Da=i(za,"."),za.forEach(t),La=p(P),qe=l(P,"LI",{});var Ga=r(qe);Ie=l(Ga,"A",{href:!0});var Jl=r(Ie);Na=i(Jl,"Download"),Jl.forEach(t),Oa=i(Ga," files from the Hub."),Ga.forEach(t),Ua=p(P),Se=l(P,"LI",{});var Ka=r(Se);Ce=l(Ka,"A",{href:!0});var Bl=r(Ce);Ya=i(Bl,"Upload"),Bl.forEach(t),Fa=i(Ka," files to the Hub."),Ka.forEach(t),Ra=p(P),De=l(P,"LI",{});var Va=r(De);Le=l(Va,"A",{href:!0});var zl=r(Le);Ma=i(zl,"Search the Hub"),zl.forEach(t),Qa=i(Va," for your desired model or dataset."),Va.forEach(t),Wa=p(P),Ne=l(P,"LI",{});var Xa=r(Ne);Oe=l(Xa,"A",{href:!0});var Gl=r(Oe);Ja=i(Gl,"Access the Inference API"),Gl.forEach(t),Ba=i(Xa," for fast inference."),Xa.forEach(t),P.forEach(t),this.h()},h(){u(c,"name","hf:doc:metadata"),u(c,"content",JSON.stringify(lr)),u($,"id","quick-start"),u($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($,"href","#quick-start"),u(v,"class","relative group"),u(ee,"href","https://hf.co/"),u(ee,"rel","nofollow"),u(L,"id","install-the-hub-library"),u(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(L,"href","#install-the-hub-library"),u(T,"class","relative group"),u(U,"id","download-files-from-the-hub"),u(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(U,"href","#download-files-from-the-hub"),u(x,"class","relative group"),u(ve,"href","/docs/huggingface_hub/v0.6.0/en/package_reference/file_download#huggingface_hub.hf_hub_download"),u(re,"href","https://huggingface.co/google/pegasus-xsum"),u(re,"rel","nofollow"),u(be,"href","/docs/huggingface_hub/v0.6.0/en/package_reference/file_download#huggingface_hub.hf_hub_download"),u(Q,"id","create-a-repository"),u(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Q,"href","#create-a-repository"),u(q,"class","relative group"),u(he,"href","https://hf.co/join"),u(he,"rel","nofollow"),u(fe,"href","https://huggingface.co/docs/hub/security#user-access-tokens"),u(fe,"rel","nofollow"),u(ce,"start","2"),u(Ee,"href","/docs/huggingface_hub/v0.6.0/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo"),u(z,"id","share-files-to-the-hub"),u(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(z,"href","#share-files-to-the-hub"),u(I,"class","relative group"),u(He,"href","/docs/huggingface_hub/v0.6.0/en/package_reference/hf_api#huggingface_hub.HfApi.upload_file"),u(je,"href","how-to-upstream"),u(Pe,"href","/docs/huggingface_hub/v0.6.0/en/package_reference/repository#huggingface_hub.Repository"),u(K,"id","next-steps"),u(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(K,"href","#next-steps"),u(S,"class","relative group"),u(xe,"href","how-to-manage"),u(Ie,"href","how-to-downstream"),u(Ce,"href","how-to-upstream"),u(Le,"href","searching-the-hub"),u(Oe,"href","how-to-inference")},m(e,s){o(document.head,c),h(e,D,s),h(e,v,s),o(v,$),o($,Qe),g(Z,Qe,null),o(v,mo),o(v,We),o(We,go),h(e,_t,s),h(e,k,s),o(k,_o),o(k,ee),o(ee,yo),o(k,wo),o(k,Je),o(Je,vo),o(k,bo),h(e,yt,s),h(e,T,s),o(T,L),o(L,Be),g(te,Be,null),o(T,$o),o(T,ze),o(ze,Eo),h(e,wt,s),h(e,E,s),o(E,ko),o(E,Ge),o(Ge,Ao),o(E,Ho),o(E,Ke),o(Ke,jo),o(E,Po),o(E,Ve),o(Ve,To),o(E,xo),h(e,vt,s),h(e,N,s),o(N,qo),o(N,Xe),o(Xe,Io),o(N,So),h(e,bt,s),g(oe,e,s),h(e,$t,s),h(e,O,s),o(O,Co),o(O,Ze),o(Ze,Do),o(O,Lo),h(e,Et,s),g(ae,e,s),h(e,kt,s),h(e,x,s),o(x,U),o(U,et),g(le,et,null),o(x,No),o(x,tt),o(tt,Oo),h(e,At,s),h(e,Y,s),o(Y,Uo),o(Y,ve),o(ve,Yo),o(Y,Fo),h(e,Ht,s),h(e,F,s),o(F,Ro),o(F,re),o(re,Mo),o(F,Qo),h(e,jt,s),g(se,e,s),h(e,Pt,s),h(e,R,s),o(R,Wo),o(R,ot),o(ot,Jo),o(R,Bo),h(e,Tt,s),g(ne,e,s),h(e,xt,s),h(e,M,s),o(M,zo),o(M,be),o(be,Go),o(M,Ko),h(e,qt,s),h(e,q,s),o(q,Q),o(Q,at),g(ie,at,null),o(q,Vo),o(q,lt),o(lt,Xo),h(e,It,s),h(e,A,s),o(A,Zo),o(A,he),o(he,ea),o(A,ta),o(A,fe),o(fe,oa),o(A,aa),h(e,St,s),g(W,e,s),h(e,Ct,s),h(e,$e,s),o($e,rt),o(rt,la),h(e,Dt,s),g(pe,e,s),h(e,Lt,s),h(e,J,s),o(J,ra),o(J,st),o(st,sa),o(J,na),h(e,Nt,s),g(ue,e,s),h(e,Ot,s),h(e,ce,s),o(ce,nt),o(nt,ia),h(e,Ut,s),h(e,B,s),o(B,ha),o(B,Ee),o(Ee,fa),o(B,pa),h(e,Yt,s),g(de,e,s),h(e,Ft,s),h(e,ke,s),o(ke,ua),h(e,Rt,s),g(me,e,s),h(e,Mt,s),h(e,Ae,s),o(Ae,ca),h(e,Qt,s),h(e,I,s),o(I,z),o(z,it),g(ge,it,null),o(I,da),o(I,ht),o(ht,ma),h(e,Wt,s),h(e,G,s),o(G,ga),o(G,He),o(He,_a),o(G,ya),h(e,Jt,s),h(e,H,s),o(H,ft),o(ft,wa),o(H,va),o(H,pt),o(pt,ba),o(H,$a),o(H,ut),o(ut,Ea),h(e,Bt,s),g(_e,e,s),h(e,zt,s),h(e,j,s),o(j,ka),o(j,je),o(je,Aa),o(j,Ha),o(j,Pe),o(Pe,ja),o(j,Pa),h(e,Gt,s),h(e,S,s),o(S,K),o(K,ct),g(ye,ct,null),o(S,Ta),o(S,dt),o(dt,xa),h(e,Kt,s),h(e,V,s),o(V,qa),o(V,mt),o(mt,Ia),o(V,Sa),h(e,Vt,s),h(e,b,s),o(b,Te),o(Te,xe),o(xe,Ca),o(Te,Da),o(b,La),o(b,qe),o(qe,Ie),o(Ie,Na),o(qe,Oa),o(b,Ua),o(b,Se),o(Se,Ce),o(Ce,Ya),o(Se,Fa),o(b,Ra),o(b,De),o(De,Le),o(Le,Ma),o(De,Qa),o(b,Wa),o(b,Ne),o(Ne,Oe),o(Oe,Ja),o(Ne,Ba),Xt=!0},p(e,[s]){const we={};s&2&&(we.$$scope={dirty:s,ctx:e}),W.$set(we)},i(e){Xt||(_(Z.$$.fragment,e),_(te.$$.fragment,e),_(oe.$$.fragment,e),_(ae.$$.fragment,e),_(le.$$.fragment,e),_(se.$$.fragment,e),_(ne.$$.fragment,e),_(ie.$$.fragment,e),_(W.$$.fragment,e),_(pe.$$.fragment,e),_(ue.$$.fragment,e),_(de.$$.fragment,e),_(me.$$.fragment,e),_(ge.$$.fragment,e),_(_e.$$.fragment,e),_(ye.$$.fragment,e),Xt=!0)},o(e){y(Z.$$.fragment,e),y(te.$$.fragment,e),y(oe.$$.fragment,e),y(ae.$$.fragment,e),y(le.$$.fragment,e),y(se.$$.fragment,e),y(ne.$$.fragment,e),y(ie.$$.fragment,e),y(W.$$.fragment,e),y(pe.$$.fragment,e),y(ue.$$.fragment,e),y(de.$$.fragment,e),y(me.$$.fragment,e),y(ge.$$.fragment,e),y(_e.$$.fragment,e),y(ye.$$.fragment,e),Xt=!1},d(e){t(c),e&&t(D),e&&t(v),w(Z),e&&t(_t),e&&t(k),e&&t(yt),e&&t(T),w(te),e&&t(wt),e&&t(E),e&&t(vt),e&&t(N),e&&t(bt),w(oe,e),e&&t($t),e&&t(O),e&&t(Et),w(ae,e),e&&t(kt),e&&t(x),w(le),e&&t(At),e&&t(Y),e&&t(Ht),e&&t(F),e&&t(jt),w(se,e),e&&t(Pt),e&&t(R),e&&t(Tt),w(ne,e),e&&t(xt),e&&t(M),e&&t(qt),e&&t(q),w(ie),e&&t(It),e&&t(A),e&&t(St),w(W,e),e&&t(Ct),e&&t($e),e&&t(Dt),w(pe,e),e&&t(Lt),e&&t(J),e&&t(Nt),w(ue,e),e&&t(Ot),e&&t(ce),e&&t(Ut),e&&t(B),e&&t(Yt),w(de,e),e&&t(Ft),e&&t(ke),e&&t(Rt),w(me,e),e&&t(Mt),e&&t(Ae),e&&t(Qt),e&&t(I),w(ge),e&&t(Wt),e&&t(G),e&&t(Jt),e&&t(H),e&&t(Bt),w(_e,e),e&&t(zt),e&&t(j),e&&t(Gt),e&&t(S),w(ye),e&&t(Kt),e&&t(V),e&&t(Vt),e&&t(b)}}}const lr={local:"quick-start",sections:[{local:"install-the-hub-library",title:"Install the Hub library"},{local:"download-files-from-the-hub",title:"Download files from the Hub"},{local:"create-a-repository",title:"Create a repository"},{local:"share-files-to-the-hub",title:"Share files to the Hub"},{local:"next-steps",title:"Next steps"}],title:"Quick start"};function rr(gt){return er(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fr extends Kl{constructor(c){super();Vl(this,c,rr,ar,Xl,{})}}export{fr as default,lr as metadata};
