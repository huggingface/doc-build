import{S as ss,i as ls,s as ns,e as r,k as p,w as _,t as n,M as is,c as s,d as t,m as u,a as l,x as w,h as i,b as f,G as o,g as h,y as v,q as y,o as $,B as b,v as hs}from"../chunks/vendor-hf-doc-builder.js";import{T as hr}from"../chunks/Tip-hf-doc-builder.js";import{I as qe}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as F}from"../chunks/CodeBlock-hf-doc-builder.js";function fs(M){let c,E;return{c(){c=r("p"),E=n(`You can also provide your token to the functions and methods. This way you don\u2019t need to
store your token anywhere.`)},l(d){c=s(d,"P",{});var m=l(c);E=i(m,`You can also provide your token to the functions and methods. This way you don\u2019t need to
store your token anywhere.`),m.forEach(t)},m(d,m){h(d,c,m),o(c,E)},d(d){d&&t(c)}}}function ps(M){let c,E,d,m,H;return{c(){c=r("p"),E=n(`Once you are logged in, all requests to the Hub will use your access token by default.
If you want to disable implicit use of your token, you should set the
`),d=r("code"),m=n("HF_HUB_DISABLE_IMPLICIT_TOKEN"),H=n(" environment variable.")},l(g){c=s(g,"P",{});var k=l(c);E=i(k,`Once you are logged in, all requests to the Hub will use your access token by default.
If you want to disable implicit use of your token, you should set the
`),d=s(k,"CODE",{});var T=l(d);m=i(T,"HF_HUB_DISABLE_IMPLICIT_TOKEN"),T.forEach(t),H=i(k," environment variable."),k.forEach(t)},m(g,k){h(g,c,k),o(c,E),o(c,d),o(d,m),o(c,H)},d(g){g&&t(c)}}}function us(M){let c,E,d,m,H,g,k,T;return{c(){c=r("p"),E=n(`To create a repository or to push content to the Hub, you must provide a User Access
Token that has the `),d=r("code"),m=n("write"),H=n(` permission. You can choose the permission when creating the
token in your `),g=r("a"),k=n("Settings page"),T=n("."),this.h()},l(C){c=s(C,"P",{});var j=l(c);E=i(j,`To create a repository or to push content to the Hub, you must provide a User Access
Token that has the `),d=s(j,"CODE",{});var P=l(d);m=i(P,"write"),P.forEach(t),H=i(j,` permission. You can choose the permission when creating the
token in your `),g=s(j,"A",{href:!0,rel:!0});var xe=l(g);k=i(xe,"Settings page"),xe.forEach(t),T=i(j,"."),j.forEach(t),this.h()},h(){f(g,"href","https://huggingface.co/settings/tokens"),f(g,"rel","nofollow")},m(C,j){h(C,c,j),o(c,E),o(c,d),o(d,m),o(c,H),o(c,g),o(g,k),o(c,T)},d(C){C&&t(c)}}}function cs(M){let c,E,d,m,H,g,k,T,C,j,P,xe,pe,jo,Po,et,To,Io,Ht,O,R,tt,ue,So,ot,qo,jt,I,xo,at,Co,Oo,rt,Do,No,st,Lo,Uo,Pt,B,Yo,lt,Fo,Mo,Tt,ce,It,Q,Ro,nt,Bo,Qo,St,de,qt,D,W,it,me,Wo,ht,Jo,xt,J,Ko,Ce,Go,zo,Ct,K,Vo,ge,Xo,Zo,Ot,_e,Dt,G,ea,ft,ta,oa,Nt,we,Lt,z,aa,Oe,ra,sa,Ut,N,V,pt,ve,la,ut,na,Yt,S,ia,ye,ha,fa,$e,pa,ua,be,ca,da,Ft,De,ma,Mt,Ee,Rt,X,ga,ct,_a,wa,Bt,ke,Qt,Z,Wt,ee,Jt,L,te,dt,Ae,va,mt,ya,Kt,oe,$a,Ne,ba,Ea,Gt,He,zt,Le,ka,Vt,je,Xt,Ue,Aa,Zt,ae,eo,U,re,gt,Pe,Ha,_t,ja,to,se,Pa,Ye,Ta,Ia,oo,q,wt,Sa,qa,vt,xa,Ca,yt,Oa,ao,Te,ro,le,Da,Fe,Na,La,so,Y,ne,$t,Ie,Ua,bt,Ya,lo,ie,Fa,Et,Ma,Ra,no,A,Me,Re,Ba,Qa,Wa,Be,Qe,Ja,Ka,Ga,We,Je,za,Va,Xa,Ke,Ge,Za,er,tr,ze,Ve,or,ar,io;return g=new qe({}),ue=new qe({}),ce=new F({props:{code:"pip install huggingface_hub",highlighted:"pip install huggingface_hub"}}),de=new F({props:{code:"conda install -c conda-forge huggingface_hub",highlighted:"conda install -c conda-forge huggingface_hub"}}),me=new qe({}),_e=new F({props:{code:`from huggingface_hub import hf_hub_download
hf_hub_download(repo_id="google/pegasus-xsum", filename="config.json")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_download
<span class="hljs-meta">&gt;&gt;&gt; </span>hf_hub_download(repo_id=<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>, filename=<span class="hljs-string">&quot;config.json&quot;</span>)`}}),we=new F({props:{code:`from huggingface_hub import hf_hub_download
hf_hub_download(
    repo_id="google/pegasus-xsum", 
    filename="config.json", 
    revision="4d33b01d79672f27f001f6abade33f22d993b151"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_download
<span class="hljs-meta">&gt;&gt;&gt; </span>hf_hub_download(
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;google/pegasus-xsum&quot;</span>, 
<span class="hljs-meta">... </span>    filename=<span class="hljs-string">&quot;config.json&quot;</span>, 
<span class="hljs-meta">... </span>    revision=<span class="hljs-string">&quot;4d33b01d79672f27f001f6abade33f22d993b151&quot;</span>
<span class="hljs-meta">... </span>)`}}),ve=new qe({}),Ee=new F({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}}),ke=new F({props:{code:`from huggingface_hub import notebook_login
notebook_login()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login
<span class="hljs-meta">&gt;&gt;&gt; </span>notebook_login()`}}),Z=new hr({props:{$$slots:{default:[fs]},$$scope:{ctx:M}}}),ee=new hr({props:{$$slots:{default:[ps]},$$scope:{ctx:M}}}),Ae=new qe({}),He=new F({props:{code:`from huggingface_hub import HfApi
api = HfApi()
api.create_repo(repo_id="super-cool-model")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi
<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()
<span class="hljs-meta">&gt;&gt;&gt; </span>api.create_repo(repo_id=<span class="hljs-string">&quot;super-cool-model&quot;</span>)`}}),je=new F({props:{code:`from huggingface_hub import HfApi
api = HfApi()
api.create_repo(repo_id="super-cool-model", private=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi
<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()
<span class="hljs-meta">&gt;&gt;&gt; </span>api.create_repo(repo_id=<span class="hljs-string">&quot;super-cool-model&quot;</span>, private=<span class="hljs-literal">True</span>)`}}),ae=new hr({props:{$$slots:{default:[us]},$$scope:{ctx:M}}}),Pe=new qe({}),Te=new F({props:{code:`from huggingface_hub import HfApi
api = HfApi()
api.upload_file(path_or_fileobj="/home/lysandre/dummy-test/README.md", 
                path_in_repo="README.md", 
                repo_id="lysandre/test-model",
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi
<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()
<span class="hljs-meta">&gt;&gt;&gt; </span>api.upload_file(path_or_fileobj=<span class="hljs-string">&quot;/home/lysandre/dummy-test/README.md&quot;</span>, 
<span class="hljs-meta">... </span>                path_in_repo=<span class="hljs-string">&quot;README.md&quot;</span>, 
<span class="hljs-meta">... </span>                repo_id=<span class="hljs-string">&quot;lysandre/test-model&quot;</span>,
<span class="hljs-meta">... </span>)`}}),Ie=new qe({}),{c(){c=r("meta"),E=p(),d=r("h1"),m=r("a"),H=r("span"),_(g.$$.fragment),k=p(),T=r("span"),C=n("Quick start"),j=p(),P=r("p"),xe=n("The "),pe=r("a"),jo=n("Hugging Face Hub"),Po=n(` is the go-to place for sharing machine learning
models, demos, datasets, and metrics. `),et=r("code"),To=n("huggingface_hub"),Io=n(` library helps you interact with
the Hub without leaving your development environment. You can create and manage
repositories easily, download and upload files, and get useful model and dataset
metadata from the Hub.`),Ht=p(),O=r("h2"),R=r("a"),tt=r("span"),_(ue.$$.fragment),So=p(),ot=r("span"),qo=n("Install the Hub library"),jt=p(),I=r("p"),xo=n("To get started, you should install the "),at=r("code"),Co=n("huggingface_hub"),Oo=n(` library. You can install the
library with `),rt=r("code"),Do=n("pip"),No=n(" or "),st=r("code"),Lo=n("conda"),Uo=n("."),Pt=p(),B=r("p"),Yo=n("With "),lt=r("code"),Fo=n("pip"),Mo=n(":"),Tt=p(),_(ce.$$.fragment),It=p(),Q=r("p"),Ro=n("With "),nt=r("code"),Bo=n("conda"),Qo=n(":"),St=p(),_(de.$$.fragment),qt=p(),D=r("h2"),W=r("a"),it=r("span"),_(me.$$.fragment),Wo=p(),ht=r("span"),Jo=n("Download files from the Hub"),xt=p(),J=r("p"),Ko=n(`Repositories on the Hub are git version controlled, and users can download a single file
or the whole repository. You can use the `),Ce=r("a"),Go=n("hf_hub_download()"),zo=n(` function to download files.
This function will download and cache a file on your local disk. The next time you need
that file, it will load from your cache, so you don\u2019t need to re-download it.`),Ct=p(),K=r("p"),Vo=n(`You will need the repository id and the filename of the file you want to download. For
example, to download the `),ge=r("a"),Xo=n("Pegasus"),Zo=n(` model
configuration file:`),Ot=p(),_(_e.$$.fragment),Dt=p(),G=r("p"),ea=n("To download a specific version of the file, use the "),ft=r("code"),ta=n("revision"),oa=n(` parameter to specify the
branch name, tag, or commit hash. If you choose to use the commit hash, it must be the
full-length hash instead of the shorter 7-character commit hash:`),Nt=p(),_(we.$$.fragment),Lt=p(),z=r("p"),aa=n("For more details and options, see the API reference for "),Oe=r("a"),ra=n("hf_hub_download()"),sa=n("."),Ut=p(),N=r("h2"),V=r("a"),pt=r("span"),_(ve.$$.fragment),la=p(),ut=r("span"),na=n("Login"),Yt=p(),S=r("p"),ia=n(`In a lot of cases, you must be logged in with a Hugging Face account to interact with
the Hub: download private repos, upload files, create PRs,\u2026
`),ye=r("a"),ha=n("Create an account"),fa=n(` if you don\u2019t already have one, and then sign in
to get your `),$e=r("a"),pa=n("User Access Token"),ua=n(` from
your `),be=r("a"),ca=n("Settings page"),da=n(`. The User Access Token is
used to authenticate your identity to the Hub.`),Ft=p(),De=r("p"),ma=n("Once you have your User Access Token, run the following command in your terminal:"),Mt=p(),_(Ee.$$.fragment),Rt=p(),X=r("p"),ga=n(`Or if you prefer to work from a Jupyter or Colaboratory notebook, then login with
`),ct=r("code"),_a=n("notebook_login()"),wa=n(":"),Bt=p(),_(ke.$$.fragment),Qt=p(),_(Z.$$.fragment),Wt=p(),_(ee.$$.fragment),Jt=p(),L=r("h2"),te=r("a"),dt=r("span"),_(Ae.$$.fragment),va=p(),mt=r("span"),ya=n("Create a repository"),Kt=p(),oe=r("p"),$a=n("Once you\u2019ve registered and logged in, create a repository with the "),Ne=r("a"),ba=n("create_repo()"),Ea=n(`
function:`),Gt=p(),_(He.$$.fragment),zt=p(),Le=r("p"),ka=n("If you want your repository to be private, then:"),Vt=p(),_(je.$$.fragment),Xt=p(),Ue=r("p"),Aa=n("Private repositories will not be visible to anyone except yourself."),Zt=p(),_(ae.$$.fragment),eo=p(),U=r("h2"),re=r("a"),gt=r("span"),_(Pe.$$.fragment),Ha=p(),_t=r("span"),ja=n("Share files to the Hub"),to=p(),se=r("p"),Pa=n("Use the "),Ye=r("a"),Ta=n("upload_file()"),Ia=n(` function to add a file to your newly created repository. You
need to specify:`),oo=p(),q=r("ol"),wt=r("li"),Sa=n("The path of the file to upload."),qa=p(),vt=r("li"),xa=n("The path of the file in the repository."),Ca=p(),yt=r("li"),Oa=n("The repository id of where you want to add the file."),ao=p(),_(Te.$$.fragment),ro=p(),le=r("p"),Da=n("To upload more than one file at a time, take a look at this "),Fe=r("a"),Na=n("guide"),La=n(`
which will introduce you to several methods for uploading files (with or without git).`),so=p(),Y=r("h2"),ne=r("a"),$t=r("span"),_(Ie.$$.fragment),Ua=p(),bt=r("span"),Ya=n("Next steps"),lo=p(),ie=r("p"),Fa=n("The "),Et=r("code"),Ma=n("huggingface_hub"),Ra=n(` library provides an easy way for users to interact with the Hub
with Python. To learn more about how you can manage your files and repositories on the
Hub, we recommend reading our how-to guides for how to:`),no=p(),A=r("ul"),Me=r("li"),Re=r("a"),Ba=n("Create and manage repositories"),Qa=n("."),Wa=p(),Be=r("li"),Qe=r("a"),Ja=n("Download"),Ka=n(" files from the Hub."),Ga=p(),We=r("li"),Je=r("a"),za=n("Upload"),Va=n(" files to the Hub."),Xa=p(),Ke=r("li"),Ge=r("a"),Za=n("Search the Hub"),er=n(" for your desired model or dataset."),tr=p(),ze=r("li"),Ve=r("a"),or=n("Access the Inference API"),ar=n(" for fast inference."),this.h()},l(e){const a=is('[data-svelte="svelte-1phssyn"]',document.head);c=s(a,"META",{name:!0,content:!0}),a.forEach(t),E=u(e),d=s(e,"H1",{class:!0});var Se=l(d);m=s(Se,"A",{id:!0,class:!0,href:!0});var kt=l(m);H=s(kt,"SPAN",{});var At=l(H);w(g.$$.fragment,At),At.forEach(t),kt.forEach(t),k=u(Se),T=s(Se,"SPAN",{});var fr=l(T);C=i(fr,"Quick start"),fr.forEach(t),Se.forEach(t),j=u(e),P=s(e,"P",{});var Xe=l(P);xe=i(Xe,"The "),pe=s(Xe,"A",{href:!0,rel:!0});var pr=l(pe);jo=i(pr,"Hugging Face Hub"),pr.forEach(t),Po=i(Xe,` is the go-to place for sharing machine learning
models, demos, datasets, and metrics. `),et=s(Xe,"CODE",{});var ur=l(et);To=i(ur,"huggingface_hub"),ur.forEach(t),Io=i(Xe,` library helps you interact with
the Hub without leaving your development environment. You can create and manage
repositories easily, download and upload files, and get useful model and dataset
metadata from the Hub.`),Xe.forEach(t),Ht=u(e),O=s(e,"H2",{class:!0});var ho=l(O);R=s(ho,"A",{id:!0,class:!0,href:!0});var cr=l(R);tt=s(cr,"SPAN",{});var dr=l(tt);w(ue.$$.fragment,dr),dr.forEach(t),cr.forEach(t),So=u(ho),ot=s(ho,"SPAN",{});var mr=l(ot);qo=i(mr,"Install the Hub library"),mr.forEach(t),ho.forEach(t),jt=u(e),I=s(e,"P",{});var he=l(I);xo=i(he,"To get started, you should install the "),at=s(he,"CODE",{});var gr=l(at);Co=i(gr,"huggingface_hub"),gr.forEach(t),Oo=i(he,` library. You can install the
library with `),rt=s(he,"CODE",{});var _r=l(rt);Do=i(_r,"pip"),_r.forEach(t),No=i(he," or "),st=s(he,"CODE",{});var wr=l(st);Lo=i(wr,"conda"),wr.forEach(t),Uo=i(he,"."),he.forEach(t),Pt=u(e),B=s(e,"P",{});var fo=l(B);Yo=i(fo,"With "),lt=s(fo,"CODE",{});var vr=l(lt);Fo=i(vr,"pip"),vr.forEach(t),Mo=i(fo,":"),fo.forEach(t),Tt=u(e),w(ce.$$.fragment,e),It=u(e),Q=s(e,"P",{});var po=l(Q);Ro=i(po,"With "),nt=s(po,"CODE",{});var yr=l(nt);Bo=i(yr,"conda"),yr.forEach(t),Qo=i(po,":"),po.forEach(t),St=u(e),w(de.$$.fragment,e),qt=u(e),D=s(e,"H2",{class:!0});var uo=l(D);W=s(uo,"A",{id:!0,class:!0,href:!0});var $r=l(W);it=s($r,"SPAN",{});var br=l(it);w(me.$$.fragment,br),br.forEach(t),$r.forEach(t),Wo=u(uo),ht=s(uo,"SPAN",{});var Er=l(ht);Jo=i(Er,"Download files from the Hub"),Er.forEach(t),uo.forEach(t),xt=u(e),J=s(e,"P",{});var co=l(J);Ko=i(co,`Repositories on the Hub are git version controlled, and users can download a single file
or the whole repository. You can use the `),Ce=s(co,"A",{href:!0});var kr=l(Ce);Go=i(kr,"hf_hub_download()"),kr.forEach(t),zo=i(co,` function to download files.
This function will download and cache a file on your local disk. The next time you need
that file, it will load from your cache, so you don\u2019t need to re-download it.`),co.forEach(t),Ct=u(e),K=s(e,"P",{});var mo=l(K);Vo=i(mo,`You will need the repository id and the filename of the file you want to download. For
example, to download the `),ge=s(mo,"A",{href:!0,rel:!0});var Ar=l(ge);Xo=i(Ar,"Pegasus"),Ar.forEach(t),Zo=i(mo,` model
configuration file:`),mo.forEach(t),Ot=u(e),w(_e.$$.fragment,e),Dt=u(e),G=s(e,"P",{});var go=l(G);ea=i(go,"To download a specific version of the file, use the "),ft=s(go,"CODE",{});var Hr=l(ft);ta=i(Hr,"revision"),Hr.forEach(t),oa=i(go,` parameter to specify the
branch name, tag, or commit hash. If you choose to use the commit hash, it must be the
full-length hash instead of the shorter 7-character commit hash:`),go.forEach(t),Nt=u(e),w(we.$$.fragment,e),Lt=u(e),z=s(e,"P",{});var _o=l(z);aa=i(_o,"For more details and options, see the API reference for "),Oe=s(_o,"A",{href:!0});var jr=l(Oe);ra=i(jr,"hf_hub_download()"),jr.forEach(t),sa=i(_o,"."),_o.forEach(t),Ut=u(e),N=s(e,"H2",{class:!0});var wo=l(N);V=s(wo,"A",{id:!0,class:!0,href:!0});var Pr=l(V);pt=s(Pr,"SPAN",{});var Tr=l(pt);w(ve.$$.fragment,Tr),Tr.forEach(t),Pr.forEach(t),la=u(wo),ut=s(wo,"SPAN",{});var Ir=l(ut);na=i(Ir,"Login"),Ir.forEach(t),wo.forEach(t),Yt=u(e),S=s(e,"P",{});var fe=l(S);ia=i(fe,`In a lot of cases, you must be logged in with a Hugging Face account to interact with
the Hub: download private repos, upload files, create PRs,\u2026
`),ye=s(fe,"A",{href:!0,rel:!0});var Sr=l(ye);ha=i(Sr,"Create an account"),Sr.forEach(t),fa=i(fe,` if you don\u2019t already have one, and then sign in
to get your `),$e=s(fe,"A",{href:!0,rel:!0});var qr=l($e);pa=i(qr,"User Access Token"),qr.forEach(t),ua=i(fe,` from
your `),be=s(fe,"A",{href:!0,rel:!0});var xr=l(be);ca=i(xr,"Settings page"),xr.forEach(t),da=i(fe,`. The User Access Token is
used to authenticate your identity to the Hub.`),fe.forEach(t),Ft=u(e),De=s(e,"P",{});var Cr=l(De);ma=i(Cr,"Once you have your User Access Token, run the following command in your terminal:"),Cr.forEach(t),Mt=u(e),w(Ee.$$.fragment,e),Rt=u(e),X=s(e,"P",{});var vo=l(X);ga=i(vo,`Or if you prefer to work from a Jupyter or Colaboratory notebook, then login with
`),ct=s(vo,"CODE",{});var Or=l(ct);_a=i(Or,"notebook_login()"),Or.forEach(t),wa=i(vo,":"),vo.forEach(t),Bt=u(e),w(ke.$$.fragment,e),Qt=u(e),w(Z.$$.fragment,e),Wt=u(e),w(ee.$$.fragment,e),Jt=u(e),L=s(e,"H2",{class:!0});var yo=l(L);te=s(yo,"A",{id:!0,class:!0,href:!0});var Dr=l(te);dt=s(Dr,"SPAN",{});var Nr=l(dt);w(Ae.$$.fragment,Nr),Nr.forEach(t),Dr.forEach(t),va=u(yo),mt=s(yo,"SPAN",{});var Lr=l(mt);ya=i(Lr,"Create a repository"),Lr.forEach(t),yo.forEach(t),Kt=u(e),oe=s(e,"P",{});var $o=l(oe);$a=i($o,"Once you\u2019ve registered and logged in, create a repository with the "),Ne=s($o,"A",{href:!0});var Ur=l(Ne);ba=i(Ur,"create_repo()"),Ur.forEach(t),Ea=i($o,`
function:`),$o.forEach(t),Gt=u(e),w(He.$$.fragment,e),zt=u(e),Le=s(e,"P",{});var Yr=l(Le);ka=i(Yr,"If you want your repository to be private, then:"),Yr.forEach(t),Vt=u(e),w(je.$$.fragment,e),Xt=u(e),Ue=s(e,"P",{});var Fr=l(Ue);Aa=i(Fr,"Private repositories will not be visible to anyone except yourself."),Fr.forEach(t),Zt=u(e),w(ae.$$.fragment,e),eo=u(e),U=s(e,"H2",{class:!0});var bo=l(U);re=s(bo,"A",{id:!0,class:!0,href:!0});var Mr=l(re);gt=s(Mr,"SPAN",{});var Rr=l(gt);w(Pe.$$.fragment,Rr),Rr.forEach(t),Mr.forEach(t),Ha=u(bo),_t=s(bo,"SPAN",{});var Br=l(_t);ja=i(Br,"Share files to the Hub"),Br.forEach(t),bo.forEach(t),to=u(e),se=s(e,"P",{});var Eo=l(se);Pa=i(Eo,"Use the "),Ye=s(Eo,"A",{href:!0});var Qr=l(Ye);Ta=i(Qr,"upload_file()"),Qr.forEach(t),Ia=i(Eo,` function to add a file to your newly created repository. You
need to specify:`),Eo.forEach(t),oo=u(e),q=s(e,"OL",{});var Ze=l(q);wt=s(Ze,"LI",{});var Wr=l(wt);Sa=i(Wr,"The path of the file to upload."),Wr.forEach(t),qa=u(Ze),vt=s(Ze,"LI",{});var Jr=l(vt);xa=i(Jr,"The path of the file in the repository."),Jr.forEach(t),Ca=u(Ze),yt=s(Ze,"LI",{});var Kr=l(yt);Oa=i(Kr,"The repository id of where you want to add the file."),Kr.forEach(t),Ze.forEach(t),ao=u(e),w(Te.$$.fragment,e),ro=u(e),le=s(e,"P",{});var ko=l(le);Da=i(ko,"To upload more than one file at a time, take a look at this "),Fe=s(ko,"A",{href:!0});var Gr=l(Fe);Na=i(Gr,"guide"),Gr.forEach(t),La=i(ko,`
which will introduce you to several methods for uploading files (with or without git).`),ko.forEach(t),so=u(e),Y=s(e,"H2",{class:!0});var Ao=l(Y);ne=s(Ao,"A",{id:!0,class:!0,href:!0});var zr=l(ne);$t=s(zr,"SPAN",{});var Vr=l($t);w(Ie.$$.fragment,Vr),Vr.forEach(t),zr.forEach(t),Ua=u(Ao),bt=s(Ao,"SPAN",{});var Xr=l(bt);Ya=i(Xr,"Next steps"),Xr.forEach(t),Ao.forEach(t),lo=u(e),ie=s(e,"P",{});var Ho=l(ie);Fa=i(Ho,"The "),Et=s(Ho,"CODE",{});var Zr=l(Et);Ma=i(Zr,"huggingface_hub"),Zr.forEach(t),Ra=i(Ho,` library provides an easy way for users to interact with the Hub
with Python. To learn more about how you can manage your files and repositories on the
Hub, we recommend reading our how-to guides for how to:`),Ho.forEach(t),no=u(e),A=s(e,"UL",{});var x=l(A);Me=s(x,"LI",{});var rr=l(Me);Re=s(rr,"A",{href:!0});var es=l(Re);Ba=i(es,"Create and manage repositories"),es.forEach(t),Qa=i(rr,"."),rr.forEach(t),Wa=u(x),Be=s(x,"LI",{});var sr=l(Be);Qe=s(sr,"A",{href:!0});var ts=l(Qe);Ja=i(ts,"Download"),ts.forEach(t),Ka=i(sr," files from the Hub."),sr.forEach(t),Ga=u(x),We=s(x,"LI",{});var lr=l(We);Je=s(lr,"A",{href:!0});var os=l(Je);za=i(os,"Upload"),os.forEach(t),Va=i(lr," files to the Hub."),lr.forEach(t),Xa=u(x),Ke=s(x,"LI",{});var nr=l(Ke);Ge=s(nr,"A",{href:!0});var as=l(Ge);Za=i(as,"Search the Hub"),as.forEach(t),er=i(nr," for your desired model or dataset."),nr.forEach(t),tr=u(x),ze=s(x,"LI",{});var ir=l(ze);Ve=s(ir,"A",{href:!0});var rs=l(Ve);or=i(rs,"Access the Inference API"),rs.forEach(t),ar=i(ir," for fast inference."),ir.forEach(t),x.forEach(t),this.h()},h(){f(c,"name","hf:doc:metadata"),f(c,"content",JSON.stringify(ds)),f(m,"id","quick-start"),f(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(m,"href","#quick-start"),f(d,"class","relative group"),f(pe,"href","https://hf.co/"),f(pe,"rel","nofollow"),f(R,"id","install-the-hub-library"),f(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(R,"href","#install-the-hub-library"),f(O,"class","relative group"),f(W,"id","download-files-from-the-hub"),f(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(W,"href","#download-files-from-the-hub"),f(D,"class","relative group"),f(Ce,"href","/docs/huggingface_hub/v0.10.0.rc1/en/package_reference/file_download#huggingface_hub.hf_hub_download"),f(ge,"href","https://huggingface.co/google/pegasus-xsum"),f(ge,"rel","nofollow"),f(Oe,"href","/docs/huggingface_hub/v0.10.0.rc1/en/package_reference/file_download#huggingface_hub.hf_hub_download"),f(V,"id","login"),f(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(V,"href","#login"),f(N,"class","relative group"),f(ye,"href","https://hf.co/join"),f(ye,"rel","nofollow"),f($e,"href","https://huggingface.co/docs/hub/security-tokens"),f($e,"rel","nofollow"),f(be,"href","https://huggingface.co/settings/tokens"),f(be,"rel","nofollow"),f(te,"id","create-a-repository"),f(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(te,"href","#create-a-repository"),f(L,"class","relative group"),f(Ne,"href","/docs/huggingface_hub/v0.10.0.rc1/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo"),f(re,"id","share-files-to-the-hub"),f(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(re,"href","#share-files-to-the-hub"),f(U,"class","relative group"),f(Ye,"href","/docs/huggingface_hub/v0.10.0.rc1/en/package_reference/hf_api#huggingface_hub.HfApi.upload_file"),f(Fe,"href","how-to-upstream"),f(ne,"id","next-steps"),f(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ne,"href","#next-steps"),f(Y,"class","relative group"),f(Re,"href","how-to-manage"),f(Qe,"href","how-to-downstream"),f(Je,"href","how-to-upstream"),f(Ge,"href","searching-the-hub"),f(Ve,"href","how-to-inference")},m(e,a){o(document.head,c),h(e,E,a),h(e,d,a),o(d,m),o(m,H),v(g,H,null),o(d,k),o(d,T),o(T,C),h(e,j,a),h(e,P,a),o(P,xe),o(P,pe),o(pe,jo),o(P,Po),o(P,et),o(et,To),o(P,Io),h(e,Ht,a),h(e,O,a),o(O,R),o(R,tt),v(ue,tt,null),o(O,So),o(O,ot),o(ot,qo),h(e,jt,a),h(e,I,a),o(I,xo),o(I,at),o(at,Co),o(I,Oo),o(I,rt),o(rt,Do),o(I,No),o(I,st),o(st,Lo),o(I,Uo),h(e,Pt,a),h(e,B,a),o(B,Yo),o(B,lt),o(lt,Fo),o(B,Mo),h(e,Tt,a),v(ce,e,a),h(e,It,a),h(e,Q,a),o(Q,Ro),o(Q,nt),o(nt,Bo),o(Q,Qo),h(e,St,a),v(de,e,a),h(e,qt,a),h(e,D,a),o(D,W),o(W,it),v(me,it,null),o(D,Wo),o(D,ht),o(ht,Jo),h(e,xt,a),h(e,J,a),o(J,Ko),o(J,Ce),o(Ce,Go),o(J,zo),h(e,Ct,a),h(e,K,a),o(K,Vo),o(K,ge),o(ge,Xo),o(K,Zo),h(e,Ot,a),v(_e,e,a),h(e,Dt,a),h(e,G,a),o(G,ea),o(G,ft),o(ft,ta),o(G,oa),h(e,Nt,a),v(we,e,a),h(e,Lt,a),h(e,z,a),o(z,aa),o(z,Oe),o(Oe,ra),o(z,sa),h(e,Ut,a),h(e,N,a),o(N,V),o(V,pt),v(ve,pt,null),o(N,la),o(N,ut),o(ut,na),h(e,Yt,a),h(e,S,a),o(S,ia),o(S,ye),o(ye,ha),o(S,fa),o(S,$e),o($e,pa),o(S,ua),o(S,be),o(be,ca),o(S,da),h(e,Ft,a),h(e,De,a),o(De,ma),h(e,Mt,a),v(Ee,e,a),h(e,Rt,a),h(e,X,a),o(X,ga),o(X,ct),o(ct,_a),o(X,wa),h(e,Bt,a),v(ke,e,a),h(e,Qt,a),v(Z,e,a),h(e,Wt,a),v(ee,e,a),h(e,Jt,a),h(e,L,a),o(L,te),o(te,dt),v(Ae,dt,null),o(L,va),o(L,mt),o(mt,ya),h(e,Kt,a),h(e,oe,a),o(oe,$a),o(oe,Ne),o(Ne,ba),o(oe,Ea),h(e,Gt,a),v(He,e,a),h(e,zt,a),h(e,Le,a),o(Le,ka),h(e,Vt,a),v(je,e,a),h(e,Xt,a),h(e,Ue,a),o(Ue,Aa),h(e,Zt,a),v(ae,e,a),h(e,eo,a),h(e,U,a),o(U,re),o(re,gt),v(Pe,gt,null),o(U,Ha),o(U,_t),o(_t,ja),h(e,to,a),h(e,se,a),o(se,Pa),o(se,Ye),o(Ye,Ta),o(se,Ia),h(e,oo,a),h(e,q,a),o(q,wt),o(wt,Sa),o(q,qa),o(q,vt),o(vt,xa),o(q,Ca),o(q,yt),o(yt,Oa),h(e,ao,a),v(Te,e,a),h(e,ro,a),h(e,le,a),o(le,Da),o(le,Fe),o(Fe,Na),o(le,La),h(e,so,a),h(e,Y,a),o(Y,ne),o(ne,$t),v(Ie,$t,null),o(Y,Ua),o(Y,bt),o(bt,Ya),h(e,lo,a),h(e,ie,a),o(ie,Fa),o(ie,Et),o(Et,Ma),o(ie,Ra),h(e,no,a),h(e,A,a),o(A,Me),o(Me,Re),o(Re,Ba),o(Me,Qa),o(A,Wa),o(A,Be),o(Be,Qe),o(Qe,Ja),o(Be,Ka),o(A,Ga),o(A,We),o(We,Je),o(Je,za),o(We,Va),o(A,Xa),o(A,Ke),o(Ke,Ge),o(Ge,Za),o(Ke,er),o(A,tr),o(A,ze),o(ze,Ve),o(Ve,or),o(ze,ar),io=!0},p(e,[a]){const Se={};a&2&&(Se.$$scope={dirty:a,ctx:e}),Z.$set(Se);const kt={};a&2&&(kt.$$scope={dirty:a,ctx:e}),ee.$set(kt);const At={};a&2&&(At.$$scope={dirty:a,ctx:e}),ae.$set(At)},i(e){io||(y(g.$$.fragment,e),y(ue.$$.fragment,e),y(ce.$$.fragment,e),y(de.$$.fragment,e),y(me.$$.fragment,e),y(_e.$$.fragment,e),y(we.$$.fragment,e),y(ve.$$.fragment,e),y(Ee.$$.fragment,e),y(ke.$$.fragment,e),y(Z.$$.fragment,e),y(ee.$$.fragment,e),y(Ae.$$.fragment,e),y(He.$$.fragment,e),y(je.$$.fragment,e),y(ae.$$.fragment,e),y(Pe.$$.fragment,e),y(Te.$$.fragment,e),y(Ie.$$.fragment,e),io=!0)},o(e){$(g.$$.fragment,e),$(ue.$$.fragment,e),$(ce.$$.fragment,e),$(de.$$.fragment,e),$(me.$$.fragment,e),$(_e.$$.fragment,e),$(we.$$.fragment,e),$(ve.$$.fragment,e),$(Ee.$$.fragment,e),$(ke.$$.fragment,e),$(Z.$$.fragment,e),$(ee.$$.fragment,e),$(Ae.$$.fragment,e),$(He.$$.fragment,e),$(je.$$.fragment,e),$(ae.$$.fragment,e),$(Pe.$$.fragment,e),$(Te.$$.fragment,e),$(Ie.$$.fragment,e),io=!1},d(e){t(c),e&&t(E),e&&t(d),b(g),e&&t(j),e&&t(P),e&&t(Ht),e&&t(O),b(ue),e&&t(jt),e&&t(I),e&&t(Pt),e&&t(B),e&&t(Tt),b(ce,e),e&&t(It),e&&t(Q),e&&t(St),b(de,e),e&&t(qt),e&&t(D),b(me),e&&t(xt),e&&t(J),e&&t(Ct),e&&t(K),e&&t(Ot),b(_e,e),e&&t(Dt),e&&t(G),e&&t(Nt),b(we,e),e&&t(Lt),e&&t(z),e&&t(Ut),e&&t(N),b(ve),e&&t(Yt),e&&t(S),e&&t(Ft),e&&t(De),e&&t(Mt),b(Ee,e),e&&t(Rt),e&&t(X),e&&t(Bt),b(ke,e),e&&t(Qt),b(Z,e),e&&t(Wt),b(ee,e),e&&t(Jt),e&&t(L),b(Ae),e&&t(Kt),e&&t(oe),e&&t(Gt),b(He,e),e&&t(zt),e&&t(Le),e&&t(Vt),b(je,e),e&&t(Xt),e&&t(Ue),e&&t(Zt),b(ae,e),e&&t(eo),e&&t(U),b(Pe),e&&t(to),e&&t(se),e&&t(oo),e&&t(q),e&&t(ao),b(Te,e),e&&t(ro),e&&t(le),e&&t(so),e&&t(Y),b(Ie),e&&t(lo),e&&t(ie),e&&t(no),e&&t(A)}}}const ds={local:"quick-start",sections:[{local:"install-the-hub-library",title:"Install the Hub library"},{local:"download-files-from-the-hub",title:"Download files from the Hub"},{local:"login",title:"Login"},{local:"create-a-repository",title:"Create a repository"},{local:"share-files-to-the-hub",title:"Share files to the Hub"},{local:"next-steps",title:"Next steps"}],title:"Quick start"};function ms(M){return hs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ys extends ss{constructor(c){super();ls(this,c,ms,cs,ns,{})}}export{ys as default,ds as metadata};
