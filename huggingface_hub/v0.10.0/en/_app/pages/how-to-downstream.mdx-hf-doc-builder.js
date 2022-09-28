import{S as dn,i as pn,s as cn,e as s,k as h,w,t,M as un,c as l,d as o,m as d,a as i,x as m,h as n,b as p,T as hn,G as a,g as f,y as g,L as _n,q as v,o as b,B as y,v as wn}from"../chunks/vendor-hf-doc-builder.js";import{I as Fa}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as J}from"../chunks/CodeBlock-hf-doc-builder.js";function mn(_t){let q,ea,P,T,qe,B,Ga,Pe,Wa,aa,L,Ja,De,Ba,Ya,oa,I,Ae,Va,za,Ce,Ka,ta,D,N,He,Y,Qa,Oe,Xa,na,U,Za,le,eo,ao,sa,re,oo,la,$,to,Se,no,so,Te,lo,ro,ra,V,ia,A,ie,wt,io,fe,mt,fa,he,fo,ha,z,da,de,ho,pa,K,ca,E,po,Le,co,uo,Ie,_o,wo,ua,Q,_a,C,R,Ne,X,mo,Ue,go,wa,k,vo,pe,bo,yo,ce,$o,Eo,ma,H,M,Re,Z,ko,Me,jo,ga,O,ue,xo,qo,_e,Po,Do,va,we,Ao,ba,ee,ya,S,me,Co,Ho,Fe,Oo,So,$a,ae,Ea,j,To,ge,Lo,Io,ve,No,Uo,ka,c,Ro,be,Mo,Fo,Ge,Go,Wo,We,Jo,Bo,Je,Yo,Vo,Be,zo,Ko,ja,x,Qo,oe,Xo,Zo,te,Ye,et,at,xa,F,ot,Ve,tt,nt,qa,ne,Pa,u,st,ze,lt,rt,Ke,it,ft,Qe,ht,dt,Da,se,Aa,G,pt,ye,ct,ut,Ca;return B=new Fa({}),Y=new Fa({}),V=new J({props:{code:`from huggingface_hub import hf_hub_download
hf_hub_download(repo_id="lysandre/arxiv-nlp", filename="config.json")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_download
<span class="hljs-meta">&gt;&gt;&gt; </span>hf_hub_download(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, filename=<span class="hljs-string">&quot;config.json&quot;</span>)
<span class="hljs-string">&#x27;/root/.cache/huggingface/hub/models--lysandre--arxiv-nlp/snapshots/894a9adde21d9a3e3843e6d5aeaaf01875c7fade/config.json&#x27;</span>`}}),z=new J({props:{code:`hf_hub_download(
   repo_id="lysandre/arxiv-nlp",
   filename="config.json",
   revision="877b84a8f93f2d619faa2a6e514a32beef88ab0a",
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>hf_hub_download(
<span class="hljs-meta">... </span>   repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>,
<span class="hljs-meta">... </span>   filename=<span class="hljs-string">&quot;config.json&quot;</span>,
<span class="hljs-meta">... </span>   revision=<span class="hljs-string">&quot;877b84a8f93f2d619faa2a6e514a32beef88ab0a&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-string">&#x27;/root/.cache/huggingface/hub/models--lysandre--arxiv-nlp/snapshots/877b84a8f93f2d619faa2a6e514a32beef88ab0a/config.json&#x27;</span>`}}),K=new J({props:{code:'hf_hub_download(repo_id="lysandre/arxiv-nlp", filename="config.json", revision="main")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>hf_hub_download(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, filename=<span class="hljs-string">&quot;config.json&quot;</span>, revision=<span class="hljs-string">&quot;main&quot;</span>)'}}),Q=new J({props:{code:'hf_hub_download(repo_id="lysandre/arxiv-nlp", filename="config.json", revision="v1.0")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>hf_hub_download(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, filename=<span class="hljs-string">&quot;config.json&quot;</span>, revision=<span class="hljs-string">&quot;v1.0&quot;</span>)'}}),X=new Fa({}),Z=new Fa({}),ee=new J({props:{code:`from huggingface_hub import snapshot_download
snapshot_download(repo_id="lysandre/arxiv-nlp")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> snapshot_download
<span class="hljs-meta">&gt;&gt;&gt; </span>snapshot_download(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>)
<span class="hljs-string">&#x27;/home/lysandre/.cache/huggingface/hub/lysandre__arxiv-nlp.894a9adde21d9a3e3843e6d5aeaaf01875c7fade&#x27;</span>`}}),ae=new J({props:{code:`from huggingface_hub import snapshot_download
snapshot_download(repo_id="lysandre/arxiv-nlp", revision="main")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> snapshot_download
<span class="hljs-meta">&gt;&gt;&gt; </span>snapshot_download(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, revision=<span class="hljs-string">&quot;main&quot;</span>)`}}),ne=new J({props:{code:`from huggingface_hub import snapshot_download
snapshot_download(repo_id="lysandre/arxiv-nlp", allow_patterns="*.json")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> snapshot_download
<span class="hljs-meta">&gt;&gt;&gt; </span>snapshot_download(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, allow_patterns=<span class="hljs-string">&quot;*.json&quot;</span>)`}}),se=new J({props:{code:`from huggingface_hub import snapshot_download
snapshot_download(repo_id="lysandre/arxiv-nlp", ignore_patterns=["*.msgpack", "*.h5"])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> snapshot_download
<span class="hljs-meta">&gt;&gt;&gt; </span>snapshot_download(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, ignore_patterns=[<span class="hljs-string">&quot;*.msgpack&quot;</span>, <span class="hljs-string">&quot;*.h5&quot;</span>])`}}),{c(){q=s("meta"),ea=h(),P=s("h1"),T=s("a"),qe=s("span"),w(B.$$.fragment),Ga=h(),Pe=s("span"),Wa=t("Download files from the Hub"),aa=h(),L=s("p"),Ja=t("The "),De=s("code"),Ba=t("huggingface_hub"),Ya=t(` library provides functions to download files from the repositories
stored on the Hub. You can use these functions independently or integrate them into your
own library, making it more convenient for your users to interact with the Hub. This
guide will show you how to:`),oa=h(),I=s("ul"),Ae=s("li"),Va=t("Download and store a file from the Hub."),za=h(),Ce=s("li"),Ka=t("Download all the files in a repository."),ta=h(),D=s("h2"),N=s("a"),He=s("span"),w(Y.$$.fragment),Qa=h(),Oe=s("span"),Xa=t("Download and store a file from the Hub"),na=h(),U=s("p"),Za=t("The "),le=s("a"),eo=t("hf_hub_download()"),ao=t(" function is the main function for downloading files from the Hub."),sa=h(),re=s("p"),oo=t("It downloads the remote file, stores it on disk (in a version-aware way), and returns its local file path."),la=h(),$=s("p"),to=t("Use the "),Se=s("code"),no=t("repo_id"),so=t(" and "),Te=s("code"),lo=t("filename"),ro=t(" parameters to specify which file to download:"),ra=h(),w(V.$$.fragment),ia=h(),A=s("div"),ie=s("img"),io=h(),fe=s("img"),fa=h(),he=s("p"),fo=t(`Specify a particular file version by providing the file revision, which can be the
branch name, a tag, or a commit hash. When using the commit hash, it must be the
full-length hash instead of a 7-character commit hash:`),ha=h(),w(z.$$.fragment),da=h(),de=s("p"),ho=t("To specify a file revision with the branch name:"),pa=h(),w(K.$$.fragment),ca=h(),E=s("p"),po=t("To specify a file revision with a tag identifier. For example, if you want "),Le=s("code"),co=t("v1.0"),uo=t(` of the
`),Ie=s("code"),_o=t("config.json"),wo=t(" file:"),ua=h(),w(Q.$$.fragment),_a=h(),C=s("h2"),R=s("a"),Ne=s("span"),w(X.$$.fragment),mo=h(),Ue=s("span"),go=t("Construct a download URL"),wa=h(),k=s("p"),vo=t("In case you want to construct the URL used to download a file from a repo, you can use "),pe=s("a"),bo=t("hf_hub_url()"),yo=t(` which returns a URL.
Note that it is used internally by `),ce=s("a"),$o=t("hf_hub_download()"),Eo=t("."),ma=h(),H=s("h2"),M=s("a"),Re=s("span"),w(Z.$$.fragment),ko=h(),Me=s("span"),jo=t("Download an entire repository"),ga=h(),O=s("p"),ue=s("a"),xo=t("snapshot_download()"),qo=t(` downloads an entire repository at a given revision. Like
`),_e=s("a"),Po=t("hf_hub_download()"),Do=t(", all downloaded files are cached on your local disk."),va=h(),we=s("p"),Ao=t("Download a whole repository as shown in the following:"),ba=h(),w(ee.$$.fragment),ya=h(),S=s("p"),me=s("a"),Co=t("snapshot_download()"),Ho=t(` downloads the latest revision by default. If you want a specific
repository revision, use the `),Fe=s("code"),Oo=t("revision"),So=t(" parameter:"),$a=h(),w(ae.$$.fragment),Ea=h(),j=s("p"),To=t("In general, it is usually better to download files with "),ge=s("a"),Lo=t("hf_hub_download()"),Io=t(` - if you
already know the file names you need.
`),ve=s("a"),No=t("snapshot_download()"),Uo=t(" is helpful when you are unaware of which files to download."),ka=h(),c=s("p"),Ro=t(`However, you don\u2019t always want to download the contents of an entire repository with
`),be=s("a"),Mo=t("snapshot_download()"),Fo=t(`. Even if you don\u2019t know the file name, you can download specific
files if you know the file type with `),Ge=s("code"),Go=t("allow_patterns"),Wo=t(" and "),We=s("code"),Jo=t("ignore_patterns"),Bo=t(`. Use the
`),Je=s("code"),Yo=t("allow_patterns"),Vo=t(" and "),Be=s("code"),zo=t("ignore_patterns"),Ko=t(` arguments to specify which files to download. These
parameters accept either a single pattern or a list of patterns.`),ja=h(),x=s("p"),Qo=t(`Patterns are Standard Wildcards (globbing patterns) as documented
`),oe=s("a"),Xo=t("here"),Zo=t(`. The pattern
matching is based on `),te=s("a"),Ye=s("code"),et=t("fnmatch"),at=t("."),xa=h(),F=s("p"),ot=t("For example, you can use "),Ve=s("code"),tt=t("allow_patterns"),nt=t(" to only download JSON configuration files:"),qa=h(),w(ne.$$.fragment),Pa=h(),u=s("p"),st=t("On the other hand, "),ze=s("code"),lt=t("ignore_patterns"),rt=t(` can exclude certain files from being downloaded. The
following example ignores the `),Ke=s("code"),it=t(".msgpack"),ft=t(" and "),Qe=s("code"),ht=t(".h5"),dt=t(" file extensions:"),Da=h(),w(se.$$.fragment),Aa=h(),G=s("p"),pt=t(`Passing a pattern can be especially useful when repositories contain files that are never
expected to be downloaded by `),ye=s("a"),ct=t("snapshot_download()"),ut=t("."),this.h()},l(e){const r=un('[data-svelte="svelte-1phssyn"]',document.head);q=l(r,"META",{name:!0,content:!0}),r.forEach(o),ea=d(e),P=l(e,"H1",{class:!0});var Ha=i(P);T=l(Ha,"A",{id:!0,class:!0,href:!0});var gt=i(T);qe=l(gt,"SPAN",{});var vt=i(qe);m(B.$$.fragment,vt),vt.forEach(o),gt.forEach(o),Ga=d(Ha),Pe=l(Ha,"SPAN",{});var bt=i(Pe);Wa=n(bt,"Download files from the Hub"),bt.forEach(o),Ha.forEach(o),aa=d(e),L=l(e,"P",{});var Oa=i(L);Ja=n(Oa,"The "),De=l(Oa,"CODE",{});var yt=i(De);Ba=n(yt,"huggingface_hub"),yt.forEach(o),Ya=n(Oa,` library provides functions to download files from the repositories
stored on the Hub. You can use these functions independently or integrate them into your
own library, making it more convenient for your users to interact with the Hub. This
guide will show you how to:`),Oa.forEach(o),oa=d(e),I=l(e,"UL",{});var Sa=i(I);Ae=l(Sa,"LI",{});var $t=i(Ae);Va=n($t,"Download and store a file from the Hub."),$t.forEach(o),za=d(Sa),Ce=l(Sa,"LI",{});var Et=i(Ce);Ka=n(Et,"Download all the files in a repository."),Et.forEach(o),Sa.forEach(o),ta=d(e),D=l(e,"H2",{class:!0});var Ta=i(D);N=l(Ta,"A",{id:!0,class:!0,href:!0});var kt=i(N);He=l(kt,"SPAN",{});var jt=i(He);m(Y.$$.fragment,jt),jt.forEach(o),kt.forEach(o),Qa=d(Ta),Oe=l(Ta,"SPAN",{});var xt=i(Oe);Xa=n(xt,"Download and store a file from the Hub"),xt.forEach(o),Ta.forEach(o),na=d(e),U=l(e,"P",{});var La=i(U);Za=n(La,"The "),le=l(La,"A",{href:!0});var qt=i(le);eo=n(qt,"hf_hub_download()"),qt.forEach(o),ao=n(La," function is the main function for downloading files from the Hub."),La.forEach(o),sa=d(e),re=l(e,"P",{});var Pt=i(re);oo=n(Pt,"It downloads the remote file, stores it on disk (in a version-aware way), and returns its local file path."),Pt.forEach(o),la=d(e),$=l(e,"P",{});var $e=i($);to=n($e,"Use the "),Se=l($e,"CODE",{});var Dt=i(Se);no=n(Dt,"repo_id"),Dt.forEach(o),so=n($e," and "),Te=l($e,"CODE",{});var At=i(Te);lo=n(At,"filename"),At.forEach(o),ro=n($e," parameters to specify which file to download:"),$e.forEach(o),ra=d(e),m(V.$$.fragment,e),ia=d(e),A=l(e,"DIV",{class:!0});var Ia=i(A);ie=l(Ia,"IMG",{class:!0,src:!0}),io=d(Ia),fe=l(Ia,"IMG",{class:!0,src:!0}),Ia.forEach(o),fa=d(e),he=l(e,"P",{});var Ct=i(he);fo=n(Ct,`Specify a particular file version by providing the file revision, which can be the
branch name, a tag, or a commit hash. When using the commit hash, it must be the
full-length hash instead of a 7-character commit hash:`),Ct.forEach(o),ha=d(e),m(z.$$.fragment,e),da=d(e),de=l(e,"P",{});var Ht=i(de);ho=n(Ht,"To specify a file revision with the branch name:"),Ht.forEach(o),pa=d(e),m(K.$$.fragment,e),ca=d(e),E=l(e,"P",{});var Ee=i(E);po=n(Ee,"To specify a file revision with a tag identifier. For example, if you want "),Le=l(Ee,"CODE",{});var Ot=i(Le);co=n(Ot,"v1.0"),Ot.forEach(o),uo=n(Ee,` of the
`),Ie=l(Ee,"CODE",{});var St=i(Ie);_o=n(St,"config.json"),St.forEach(o),wo=n(Ee," file:"),Ee.forEach(o),ua=d(e),m(Q.$$.fragment,e),_a=d(e),C=l(e,"H2",{class:!0});var Na=i(C);R=l(Na,"A",{id:!0,class:!0,href:!0});var Tt=i(R);Ne=l(Tt,"SPAN",{});var Lt=i(Ne);m(X.$$.fragment,Lt),Lt.forEach(o),Tt.forEach(o),mo=d(Na),Ue=l(Na,"SPAN",{});var It=i(Ue);go=n(It,"Construct a download URL"),It.forEach(o),Na.forEach(o),wa=d(e),k=l(e,"P",{});var ke=i(k);vo=n(ke,"In case you want to construct the URL used to download a file from a repo, you can use "),pe=l(ke,"A",{href:!0});var Nt=i(pe);bo=n(Nt,"hf_hub_url()"),Nt.forEach(o),yo=n(ke,` which returns a URL.
Note that it is used internally by `),ce=l(ke,"A",{href:!0});var Ut=i(ce);$o=n(Ut,"hf_hub_download()"),Ut.forEach(o),Eo=n(ke,"."),ke.forEach(o),ma=d(e),H=l(e,"H2",{class:!0});var Ua=i(H);M=l(Ua,"A",{id:!0,class:!0,href:!0});var Rt=i(M);Re=l(Rt,"SPAN",{});var Mt=i(Re);m(Z.$$.fragment,Mt),Mt.forEach(o),Rt.forEach(o),ko=d(Ua),Me=l(Ua,"SPAN",{});var Ft=i(Me);jo=n(Ft,"Download an entire repository"),Ft.forEach(o),Ua.forEach(o),ga=d(e),O=l(e,"P",{});var Xe=i(O);ue=l(Xe,"A",{href:!0});var Gt=i(ue);xo=n(Gt,"snapshot_download()"),Gt.forEach(o),qo=n(Xe,` downloads an entire repository at a given revision. Like
`),_e=l(Xe,"A",{href:!0});var Wt=i(_e);Po=n(Wt,"hf_hub_download()"),Wt.forEach(o),Do=n(Xe,", all downloaded files are cached on your local disk."),Xe.forEach(o),va=d(e),we=l(e,"P",{});var Jt=i(we);Ao=n(Jt,"Download a whole repository as shown in the following:"),Jt.forEach(o),ba=d(e),m(ee.$$.fragment,e),ya=d(e),S=l(e,"P",{});var Ze=i(S);me=l(Ze,"A",{href:!0});var Bt=i(me);Co=n(Bt,"snapshot_download()"),Bt.forEach(o),Ho=n(Ze,` downloads the latest revision by default. If you want a specific
repository revision, use the `),Fe=l(Ze,"CODE",{});var Yt=i(Fe);Oo=n(Yt,"revision"),Yt.forEach(o),So=n(Ze," parameter:"),Ze.forEach(o),$a=d(e),m(ae.$$.fragment,e),Ea=d(e),j=l(e,"P",{});var je=i(j);To=n(je,"In general, it is usually better to download files with "),ge=l(je,"A",{href:!0});var Vt=i(ge);Lo=n(Vt,"hf_hub_download()"),Vt.forEach(o),Io=n(je,` - if you
already know the file names you need.
`),ve=l(je,"A",{href:!0});var zt=i(ve);No=n(zt,"snapshot_download()"),zt.forEach(o),Uo=n(je," is helpful when you are unaware of which files to download."),je.forEach(o),ka=d(e),c=l(e,"P",{});var _=i(c);Ro=n(_,`However, you don\u2019t always want to download the contents of an entire repository with
`),be=l(_,"A",{href:!0});var Kt=i(be);Mo=n(Kt,"snapshot_download()"),Kt.forEach(o),Fo=n(_,`. Even if you don\u2019t know the file name, you can download specific
files if you know the file type with `),Ge=l(_,"CODE",{});var Qt=i(Ge);Go=n(Qt,"allow_patterns"),Qt.forEach(o),Wo=n(_," and "),We=l(_,"CODE",{});var Xt=i(We);Jo=n(Xt,"ignore_patterns"),Xt.forEach(o),Bo=n(_,`. Use the
`),Je=l(_,"CODE",{});var Zt=i(Je);Yo=n(Zt,"allow_patterns"),Zt.forEach(o),Vo=n(_," and "),Be=l(_,"CODE",{});var en=i(Be);zo=n(en,"ignore_patterns"),en.forEach(o),Ko=n(_,` arguments to specify which files to download. These
parameters accept either a single pattern or a list of patterns.`),_.forEach(o),ja=d(e),x=l(e,"P",{});var xe=i(x);Qo=n(xe,`Patterns are Standard Wildcards (globbing patterns) as documented
`),oe=l(xe,"A",{href:!0,rel:!0});var an=i(oe);Xo=n(an,"here"),an.forEach(o),Zo=n(xe,`. The pattern
matching is based on `),te=l(xe,"A",{href:!0,rel:!0});var on=i(te);Ye=l(on,"CODE",{});var tn=i(Ye);et=n(tn,"fnmatch"),tn.forEach(o),on.forEach(o),at=n(xe,"."),xe.forEach(o),xa=d(e),F=l(e,"P",{});var Ra=i(F);ot=n(Ra,"For example, you can use "),Ve=l(Ra,"CODE",{});var nn=i(Ve);tt=n(nn,"allow_patterns"),nn.forEach(o),nt=n(Ra," to only download JSON configuration files:"),Ra.forEach(o),qa=d(e),m(ne.$$.fragment,e),Pa=d(e),u=l(e,"P",{});var W=i(u);st=n(W,"On the other hand, "),ze=l(W,"CODE",{});var sn=i(ze);lt=n(sn,"ignore_patterns"),sn.forEach(o),rt=n(W,` can exclude certain files from being downloaded. The
following example ignores the `),Ke=l(W,"CODE",{});var ln=i(Ke);it=n(ln,".msgpack"),ln.forEach(o),ft=n(W," and "),Qe=l(W,"CODE",{});var rn=i(Qe);ht=n(rn,".h5"),rn.forEach(o),dt=n(W," file extensions:"),W.forEach(o),Da=d(e),m(se.$$.fragment,e),Aa=d(e),G=l(e,"P",{});var Ma=i(G);pt=n(Ma,`Passing a pattern can be especially useful when repositories contain files that are never
expected to be downloaded by `),ye=l(Ma,"A",{href:!0});var fn=i(ye);ct=n(fn,"snapshot_download()"),fn.forEach(o),ut=n(Ma,"."),Ma.forEach(o),this.h()},h(){p(q,"name","hf:doc:metadata"),p(q,"content",JSON.stringify(gn)),p(T,"id","download-files-from-the-hub"),p(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(T,"href","#download-files-from-the-hub"),p(P,"class","relative group"),p(N,"id","download-and-store-a-file-from-the-hub"),p(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(N,"href","#download-and-store-a-file-from-the-hub"),p(D,"class","relative group"),p(le,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/file_download#huggingface_hub.hf_hub_download"),p(ie,"class","block dark:hidden"),hn(ie.src,wt="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/repo.png")||p(ie,"src",wt),p(fe,"class","hidden dark:block"),hn(fe.src,mt="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/repo-dark.png")||p(fe,"src",mt),p(A,"class","flex justify-center"),p(R,"id","construct-a-download-url"),p(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(R,"href","#construct-a-download-url"),p(C,"class","relative group"),p(pe,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/file_download#huggingface_hub.hf_hub_url"),p(ce,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/file_download#huggingface_hub.hf_hub_download"),p(M,"id","download-an-entire-repository"),p(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(M,"href","#download-an-entire-repository"),p(H,"class","relative group"),p(ue,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/file_download#huggingface_hub.snapshot_download"),p(_e,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/file_download#huggingface_hub.hf_hub_download"),p(me,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/file_download#huggingface_hub.snapshot_download"),p(ge,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/file_download#huggingface_hub.hf_hub_download"),p(ve,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/file_download#huggingface_hub.snapshot_download"),p(be,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/file_download#huggingface_hub.snapshot_download"),p(oe,"href","https://tldp.org/LDP/GNU-Linux-Tools-Summary/html/x11655.htm"),p(oe,"rel","nofollow"),p(te,"href","https://docs.python.org/3/library/fnmatch.html"),p(te,"rel","nofollow"),p(ye,"href","/docs/huggingface_hub/v0.10.0/en/package_reference/file_download#huggingface_hub.snapshot_download")},m(e,r){a(document.head,q),f(e,ea,r),f(e,P,r),a(P,T),a(T,qe),g(B,qe,null),a(P,Ga),a(P,Pe),a(Pe,Wa),f(e,aa,r),f(e,L,r),a(L,Ja),a(L,De),a(De,Ba),a(L,Ya),f(e,oa,r),f(e,I,r),a(I,Ae),a(Ae,Va),a(I,za),a(I,Ce),a(Ce,Ka),f(e,ta,r),f(e,D,r),a(D,N),a(N,He),g(Y,He,null),a(D,Qa),a(D,Oe),a(Oe,Xa),f(e,na,r),f(e,U,r),a(U,Za),a(U,le),a(le,eo),a(U,ao),f(e,sa,r),f(e,re,r),a(re,oo),f(e,la,r),f(e,$,r),a($,to),a($,Se),a(Se,no),a($,so),a($,Te),a(Te,lo),a($,ro),f(e,ra,r),g(V,e,r),f(e,ia,r),f(e,A,r),a(A,ie),a(A,io),a(A,fe),f(e,fa,r),f(e,he,r),a(he,fo),f(e,ha,r),g(z,e,r),f(e,da,r),f(e,de,r),a(de,ho),f(e,pa,r),g(K,e,r),f(e,ca,r),f(e,E,r),a(E,po),a(E,Le),a(Le,co),a(E,uo),a(E,Ie),a(Ie,_o),a(E,wo),f(e,ua,r),g(Q,e,r),f(e,_a,r),f(e,C,r),a(C,R),a(R,Ne),g(X,Ne,null),a(C,mo),a(C,Ue),a(Ue,go),f(e,wa,r),f(e,k,r),a(k,vo),a(k,pe),a(pe,bo),a(k,yo),a(k,ce),a(ce,$o),a(k,Eo),f(e,ma,r),f(e,H,r),a(H,M),a(M,Re),g(Z,Re,null),a(H,ko),a(H,Me),a(Me,jo),f(e,ga,r),f(e,O,r),a(O,ue),a(ue,xo),a(O,qo),a(O,_e),a(_e,Po),a(O,Do),f(e,va,r),f(e,we,r),a(we,Ao),f(e,ba,r),g(ee,e,r),f(e,ya,r),f(e,S,r),a(S,me),a(me,Co),a(S,Ho),a(S,Fe),a(Fe,Oo),a(S,So),f(e,$a,r),g(ae,e,r),f(e,Ea,r),f(e,j,r),a(j,To),a(j,ge),a(ge,Lo),a(j,Io),a(j,ve),a(ve,No),a(j,Uo),f(e,ka,r),f(e,c,r),a(c,Ro),a(c,be),a(be,Mo),a(c,Fo),a(c,Ge),a(Ge,Go),a(c,Wo),a(c,We),a(We,Jo),a(c,Bo),a(c,Je),a(Je,Yo),a(c,Vo),a(c,Be),a(Be,zo),a(c,Ko),f(e,ja,r),f(e,x,r),a(x,Qo),a(x,oe),a(oe,Xo),a(x,Zo),a(x,te),a(te,Ye),a(Ye,et),a(x,at),f(e,xa,r),f(e,F,r),a(F,ot),a(F,Ve),a(Ve,tt),a(F,nt),f(e,qa,r),g(ne,e,r),f(e,Pa,r),f(e,u,r),a(u,st),a(u,ze),a(ze,lt),a(u,rt),a(u,Ke),a(Ke,it),a(u,ft),a(u,Qe),a(Qe,ht),a(u,dt),f(e,Da,r),g(se,e,r),f(e,Aa,r),f(e,G,r),a(G,pt),a(G,ye),a(ye,ct),a(G,ut),Ca=!0},p:_n,i(e){Ca||(v(B.$$.fragment,e),v(Y.$$.fragment,e),v(V.$$.fragment,e),v(z.$$.fragment,e),v(K.$$.fragment,e),v(Q.$$.fragment,e),v(X.$$.fragment,e),v(Z.$$.fragment,e),v(ee.$$.fragment,e),v(ae.$$.fragment,e),v(ne.$$.fragment,e),v(se.$$.fragment,e),Ca=!0)},o(e){b(B.$$.fragment,e),b(Y.$$.fragment,e),b(V.$$.fragment,e),b(z.$$.fragment,e),b(K.$$.fragment,e),b(Q.$$.fragment,e),b(X.$$.fragment,e),b(Z.$$.fragment,e),b(ee.$$.fragment,e),b(ae.$$.fragment,e),b(ne.$$.fragment,e),b(se.$$.fragment,e),Ca=!1},d(e){o(q),e&&o(ea),e&&o(P),y(B),e&&o(aa),e&&o(L),e&&o(oa),e&&o(I),e&&o(ta),e&&o(D),y(Y),e&&o(na),e&&o(U),e&&o(sa),e&&o(re),e&&o(la),e&&o($),e&&o(ra),y(V,e),e&&o(ia),e&&o(A),e&&o(fa),e&&o(he),e&&o(ha),y(z,e),e&&o(da),e&&o(de),e&&o(pa),y(K,e),e&&o(ca),e&&o(E),e&&o(ua),y(Q,e),e&&o(_a),e&&o(C),y(X),e&&o(wa),e&&o(k),e&&o(ma),e&&o(H),y(Z),e&&o(ga),e&&o(O),e&&o(va),e&&o(we),e&&o(ba),y(ee,e),e&&o(ya),e&&o(S),e&&o($a),y(ae,e),e&&o(Ea),e&&o(j),e&&o(ka),e&&o(c),e&&o(ja),e&&o(x),e&&o(xa),e&&o(F),e&&o(qa),y(ne,e),e&&o(Pa),e&&o(u),e&&o(Da),y(se,e),e&&o(Aa),e&&o(G)}}}const gn={local:"download-files-from-the-hub",sections:[{local:"download-and-store-a-file-from-the-hub",title:"Download and store a file from the Hub"},{local:"construct-a-download-url",title:"Construct a download URL"},{local:"download-an-entire-repository",title:"Download an entire repository"}],title:"Download files from the Hub"};function vn(_t){return wn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class En extends dn{constructor(q){super();pn(this,q,vn,mn,cn,{})}}export{En as default,gn as metadata};
