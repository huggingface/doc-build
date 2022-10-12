import{S as ft,i as gt,s as dt,e as n,k as h,w as u,t as i,M as wt,c as l,d as s,m as c,a as r,x as f,h as p,b as m,G as t,g as o,y as g,L as bt,q as d,o as w,B as b,v as vt}from"../../chunks/vendor-hf-doc-builder.js";import{I as _e}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as J}from"../../chunks/CodeBlock-hf-doc-builder.js";function jt(Rs){let j,$e,_,P,re,C,ss,oe,ts,ye,v,ie,as,ns,L,ls,rs,pe,os,is,xe,$,ps,me,ms,hs,R,cs,ke,y,N,he,G,us,ce,fs,Ee,V,gs,Pe,B,Ne,ee,ds,Se,z,Te,se,ws,He,M,qe,te,bs,Ae,W,Ie,S,vs,ue,js,_s,De,T,$s,ae,ys,xs,Ce,x,H,fe,Y,ks,ge,Es,Le,ne,Ps,Re,U,Ge,q,Ns,O,Ss,Ts,Be,k,A,de,F,Hs,we,qs,ze,I,As,le,Is,Ds,Me,E,D,be,K,Cs,ve,Ls,We,Q,Ye,X,Ue;return C=new _e({}),G=new _e({}),B=new J({props:{code:`import timm
model = timm.create_model('densenet121', pretrained=True)
model.eval()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> timm
<span class="hljs-meta">&gt;&gt;&gt; </span>model = timm.create_model(<span class="hljs-string">&#x27;densenet121&#x27;</span>, pretrained=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">eval</span>()`}}),z=new J({props:{code:`import urllib
from PIL import Image
from timm.data import resolve_data_config
from timm.data.transforms_factory import create_transform

config = resolve_data_config({}, model=model)
transform = create_transform(**config)

url, filename = ("https://github.com/pytorch/hub/raw/master/images/dog.jpg", "dog.jpg")
urllib.request.urlretrieve(url, filename)
img = Image.open(filename).convert('RGB')
tensor = transform(img).unsqueeze(0) # transform and add batch dimension`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> urllib
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> timm.data <span class="hljs-keyword">import</span> resolve_data_config
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> timm.data.transforms_factory <span class="hljs-keyword">import</span> create_transform

<span class="hljs-meta">&gt;&gt;&gt; </span>config = resolve_data_config({}, model=model)
<span class="hljs-meta">&gt;&gt;&gt; </span>transform = create_transform(**config)

<span class="hljs-meta">&gt;&gt;&gt; </span>url, filename = (<span class="hljs-string">&quot;https://github.com/pytorch/hub/raw/master/images/dog.jpg&quot;</span>, <span class="hljs-string">&quot;dog.jpg&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>urllib.request.urlretrieve(url, filename)
<span class="hljs-meta">&gt;&gt;&gt; </span>img = Image.<span class="hljs-built_in">open</span>(filename).convert(<span class="hljs-string">&#x27;RGB&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tensor = transform(img).unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-comment"># transform and add batch dimension</span>`}}),M=new J({props:{code:`import torch
with torch.no_grad():
    out = model(tensor)
probabilities = torch.nn.functional.softmax(out[0], dim=0)
print(probabilities.shape)
# prints: torch.Size([1000])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    out = model(tensor)
<span class="hljs-meta">&gt;&gt;&gt; </span>probabilities = torch.nn.functional.softmax(out[<span class="hljs-number">0</span>], dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(probabilities.shape)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prints: torch.Size([1000])</span>`}}),W=new J({props:{code:`# Get imagenet class mappings
url, filename = ("https://raw.githubusercontent.com/pytorch/hub/master/imagenet_classes.txt", "imagenet_classes.txt")
urllib.request.urlretrieve(url, filename) 
with open("imagenet_classes.txt", "r") as f:
    categories = [s.strip() for s in f.readlines()]

# Print top categories per image
top5_prob, top5_catid = torch.topk(probabilities, 5)
for i in range(top5_prob.size(0)):
    print(categories[top5_catid[i]], top5_prob[i].item())
# prints class names and probabilities like:
# [('Samoyed', 0.6425196528434753), ('Pomeranian', 0.04062102362513542), ('keeshond', 0.03186424449086189), ('white wolf', 0.01739676296710968), ('Eskimo dog', 0.011717947199940681)]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Get imagenet class mappings</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url, filename = (<span class="hljs-string">&quot;https://raw.githubusercontent.com/pytorch/hub/master/imagenet_classes.txt&quot;</span>, <span class="hljs-string">&quot;imagenet_classes.txt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>urllib.request.urlretrieve(url, filename) 
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> <span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;imagenet_classes.txt&quot;</span>, <span class="hljs-string">&quot;r&quot;</span>) <span class="hljs-keyword">as</span> f:
<span class="hljs-meta">... </span>    categories = [s.strip() <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> f.readlines()]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Print top categories per image</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>top5_prob, top5_catid = torch.topk(probabilities, <span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(top5_prob.size(<span class="hljs-number">0</span>)):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(categories[top5_catid[i]], top5_prob[i].item())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prints class names and probabilities like:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># [(&#x27;Samoyed&#x27;, 0.6425196528434753), (&#x27;Pomeranian&#x27;, 0.04062102362513542), (&#x27;keeshond&#x27;, 0.03186424449086189), (&#x27;white wolf&#x27;, 0.01739676296710968), (&#x27;Eskimo dog&#x27;, 0.011717947199940681)]</span>`}}),Y=new _e({}),U=new J({props:{code:"model = timm.create_model('densenet121', pretrained=True, num_classes=NUM_FINETUNE_CLASSES)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model = timm.create_model(<span class="hljs-string">&#x27;densenet121&#x27;</span>, pretrained=<span class="hljs-literal">True</span>, num_classes=NUM_FINETUNE_CLASSES)'}}),F=new _e({}),K=new _e({}),Q=new J({props:{code:`@article{DBLP:journals/corr/HuangLW16a,
  author    = {Gao Huang and
               Zhuang Liu and
               Kilian Q. Weinberger},
  title     = {Densely Connected Convolutional Networks},
  journal   = {CoRR},
  volume    = {abs/1608.06993},
  year      = {2016},
  url       = {http://arxiv.org/abs/1608.06993},
  archivePrefix = {arXiv},
  eprint    = {1608.06993},
  timestamp = {Mon, 10 Sep 2018 15:49:32 +0200},
  biburl    = {https://dblp.org/rec/journals/corr/HuangLW16a.bib},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}`,highlighted:`@article{DBLP:journals<span class="hljs-regexp">/corr/</span>HuangLW16a,
  author    = {Gao Huang and
               Zhuang Liu and
               Kilian Q. Weinberger},
  title     = {Densely Connected Convolutional Networks},
  journal   = {CoRR},
  volume    = {abs/<span class="hljs-number">1608.06993</span>},
  year      = {<span class="hljs-number">2016</span>},
  url       = {http:<span class="hljs-regexp">//</span>arxiv.org<span class="hljs-regexp">/abs/</span><span class="hljs-number">1608.06993</span>},
  archivePrefix = {arXiv},
  eprint    = {<span class="hljs-number">1608.06993</span>},
  timestamp = {Mon, <span class="hljs-number">10</span> Sep <span class="hljs-number">2018</span> <span class="hljs-number">15</span>:<span class="hljs-number">49</span>:<span class="hljs-number">32</span> +<span class="hljs-number">0200</span>},
  biburl    = {https:<span class="hljs-regexp">//</span>dblp.org<span class="hljs-regexp">/rec/</span>journals<span class="hljs-regexp">/corr/</span>HuangLW16a.bib},
  bibsource = {dblp computer science bibliography, https:<span class="hljs-regexp">//</span>dblp.org}
}`}}),X=new J({props:{code:`@misc{rw2019timm,
  author = {Ross Wightman},
  title = {PyTorch Image Models},
  year = {2019},
  publisher = {GitHub},
  journal = {GitHub repository},
  doi = {10.5281/zenodo.4414861},
  howpublished = {\\url{https://github.com/rwightman/pytorch-image-models}}
}`,highlighted:`<span class="language-xml">@misc</span><span class="hljs-template-variable">{rw2019timm,
  author = {Ross Wightman}</span><span class="language-xml">,
  title = </span><span class="hljs-template-variable">{PyTorch Image Models}</span><span class="language-xml">,
  year = </span><span class="hljs-template-variable">{2019}</span><span class="language-xml">,
  publisher = </span><span class="hljs-template-variable">{GitHub}</span><span class="language-xml">,
  journal = </span><span class="hljs-template-variable">{GitHub repository}</span><span class="language-xml">,
  doi = </span><span class="hljs-template-variable">{10.5281/zenodo.4414861}</span><span class="language-xml">,
  howpublished = </span><span class="hljs-template-variable">{\\url{https://github.com/rwightman/pytorch-image-models}</span><span class="language-xml">}
}</span>`}}),{c(){j=n("meta"),$e=h(),_=n("h1"),P=n("a"),re=n("span"),u(C.$$.fragment),ss=h(),oe=n("span"),ts=i("DenseNet"),ye=h(),v=n("p"),ie=n("strong"),as=i("DenseNet"),ns=i(" is a type of convolutional neural network that utilises dense connections between layers, through "),L=n("a"),ls=i("Dense Blocks"),rs=i(", where we connect "),pe=n("em"),os=i("all layers"),is=i(" (with matching feature-map sizes) directly with each other. To preserve the feed-forward nature, each layer obtains additional inputs from all preceding layers and passes on its own feature-maps to all subsequent layers."),xe=h(),$=n("p"),ps=i("The "),me=n("strong"),ms=i("DenseNet Blur"),hs=i(" variant in this collection by Ross Wightman employs "),R=n("a"),cs=i("Blur Pooling"),ke=h(),y=n("h2"),N=n("a"),he=n("span"),u(G.$$.fragment),us=h(),ce=n("span"),fs=i("How do I use this model on an image?"),Ee=h(),V=n("p"),gs=i("To load a pretrained model:"),Pe=h(),u(B.$$.fragment),Ne=h(),ee=n("p"),ds=i("To load and preprocess the image:"),Se=h(),u(z.$$.fragment),Te=h(),se=n("p"),ws=i("To get the model predictions:"),He=h(),u(M.$$.fragment),qe=h(),te=n("p"),bs=i("To get the top-5 predictions class names:"),Ae=h(),u(W.$$.fragment),Ie=h(),S=n("p"),vs=i("Replace the model name with the variant you want to use, e.g. "),ue=n("code"),js=i("densenet121"),_s=i(". You can find the IDs in the model summaries at the top of this page."),De=h(),T=n("p"),$s=i("To extract image features with this model, follow the "),ae=n("a"),ys=i("timm feature extraction examples"),xs=i(", just change the name of the model you want to use."),Ce=h(),x=n("h2"),H=n("a"),fe=n("span"),u(Y.$$.fragment),ks=h(),ge=n("span"),Es=i("How do I finetune this model?"),Le=h(),ne=n("p"),Ps=i("You can finetune any of the pre-trained models just by changing the classifier (the last layer)."),Re=h(),u(U.$$.fragment),Ge=h(),q=n("p"),Ns=i("To finetune on your own dataset, you have to write a training loop or adapt "),O=n("a"),Ss=i(`timm\u2019s training
script`),Ts=i(" to use your dataset."),Be=h(),k=n("h2"),A=n("a"),de=n("span"),u(F.$$.fragment),Hs=h(),we=n("span"),qs=i("How do I train this model?"),ze=h(),I=n("p"),As=i("You can follow the "),le=n("a"),Is=i("timm recipe scripts"),Ds=i(" for training a new model afresh."),Me=h(),E=n("h2"),D=n("a"),be=n("span"),u(K.$$.fragment),Cs=h(),ve=n("span"),Ls=i("Citation"),We=h(),u(Q.$$.fragment),Ye=h(),u(X.$$.fragment),this.h()},l(e){const a=wt('[data-svelte="svelte-1phssyn"]',document.head);j=l(a,"META",{name:!0,content:!0}),a.forEach(s),$e=c(e),_=l(e,"H1",{class:!0});var Oe=r(_);P=l(Oe,"A",{id:!0,class:!0,href:!0});var Gs=r(P);re=l(Gs,"SPAN",{});var Bs=r(re);f(C.$$.fragment,Bs),Bs.forEach(s),Gs.forEach(s),ss=c(Oe),oe=l(Oe,"SPAN",{});var zs=r(oe);ts=p(zs,"DenseNet"),zs.forEach(s),Oe.forEach(s),ye=c(e),v=l(e,"P",{});var Z=r(v);ie=l(Z,"STRONG",{});var Ms=r(ie);as=p(Ms,"DenseNet"),Ms.forEach(s),ns=p(Z," is a type of convolutional neural network that utilises dense connections between layers, through "),L=l(Z,"A",{href:!0,rel:!0});var Ws=r(L);ls=p(Ws,"Dense Blocks"),Ws.forEach(s),rs=p(Z,", where we connect "),pe=l(Z,"EM",{});var Ys=r(pe);os=p(Ys,"all layers"),Ys.forEach(s),is=p(Z," (with matching feature-map sizes) directly with each other. To preserve the feed-forward nature, each layer obtains additional inputs from all preceding layers and passes on its own feature-maps to all subsequent layers."),Z.forEach(s),xe=c(e),$=l(e,"P",{});var je=r($);ps=p(je,"The "),me=l(je,"STRONG",{});var Us=r(me);ms=p(Us,"DenseNet Blur"),Us.forEach(s),hs=p(je," variant in this collection by Ross Wightman employs "),R=l(je,"A",{href:!0,rel:!0});var Os=r(R);cs=p(Os,"Blur Pooling"),Os.forEach(s),je.forEach(s),ke=c(e),y=l(e,"H2",{class:!0});var Fe=r(y);N=l(Fe,"A",{id:!0,class:!0,href:!0});var Fs=r(N);he=l(Fs,"SPAN",{});var Ks=r(he);f(G.$$.fragment,Ks),Ks.forEach(s),Fs.forEach(s),us=c(Fe),ce=l(Fe,"SPAN",{});var Qs=r(ce);fs=p(Qs,"How do I use this model on an image?"),Qs.forEach(s),Fe.forEach(s),Ee=c(e),V=l(e,"P",{});var Xs=r(V);gs=p(Xs,"To load a pretrained model:"),Xs.forEach(s),Pe=c(e),f(B.$$.fragment,e),Ne=c(e),ee=l(e,"P",{});var Zs=r(ee);ds=p(Zs,"To load and preprocess the image:"),Zs.forEach(s),Se=c(e),f(z.$$.fragment,e),Te=c(e),se=l(e,"P",{});var Js=r(se);ws=p(Js,"To get the model predictions:"),Js.forEach(s),He=c(e),f(M.$$.fragment,e),qe=c(e),te=l(e,"P",{});var Vs=r(te);bs=p(Vs,"To get the top-5 predictions class names:"),Vs.forEach(s),Ae=c(e),f(W.$$.fragment,e),Ie=c(e),S=l(e,"P",{});var Ke=r(S);vs=p(Ke,"Replace the model name with the variant you want to use, e.g. "),ue=l(Ke,"CODE",{});var et=r(ue);js=p(et,"densenet121"),et.forEach(s),_s=p(Ke,". You can find the IDs in the model summaries at the top of this page."),Ke.forEach(s),De=c(e),T=l(e,"P",{});var Qe=r(T);$s=p(Qe,"To extract image features with this model, follow the "),ae=l(Qe,"A",{href:!0});var st=r(ae);ys=p(st,"timm feature extraction examples"),st.forEach(s),xs=p(Qe,", just change the name of the model you want to use."),Qe.forEach(s),Ce=c(e),x=l(e,"H2",{class:!0});var Xe=r(x);H=l(Xe,"A",{id:!0,class:!0,href:!0});var tt=r(H);fe=l(tt,"SPAN",{});var at=r(fe);f(Y.$$.fragment,at),at.forEach(s),tt.forEach(s),ks=c(Xe),ge=l(Xe,"SPAN",{});var nt=r(ge);Es=p(nt,"How do I finetune this model?"),nt.forEach(s),Xe.forEach(s),Le=c(e),ne=l(e,"P",{});var lt=r(ne);Ps=p(lt,"You can finetune any of the pre-trained models just by changing the classifier (the last layer)."),lt.forEach(s),Re=c(e),f(U.$$.fragment,e),Ge=c(e),q=l(e,"P",{});var Ze=r(q);Ns=p(Ze,"To finetune on your own dataset, you have to write a training loop or adapt "),O=l(Ze,"A",{href:!0,rel:!0});var rt=r(O);Ss=p(rt,`timm\u2019s training
script`),rt.forEach(s),Ts=p(Ze," to use your dataset."),Ze.forEach(s),Be=c(e),k=l(e,"H2",{class:!0});var Je=r(k);A=l(Je,"A",{id:!0,class:!0,href:!0});var ot=r(A);de=l(ot,"SPAN",{});var it=r(de);f(F.$$.fragment,it),it.forEach(s),ot.forEach(s),Hs=c(Je),we=l(Je,"SPAN",{});var pt=r(we);qs=p(pt,"How do I train this model?"),pt.forEach(s),Je.forEach(s),ze=c(e),I=l(e,"P",{});var Ve=r(I);As=p(Ve,"You can follow the "),le=l(Ve,"A",{href:!0});var mt=r(le);Is=p(mt,"timm recipe scripts"),mt.forEach(s),Ds=p(Ve," for training a new model afresh."),Ve.forEach(s),Me=c(e),E=l(e,"H2",{class:!0});var es=r(E);D=l(es,"A",{id:!0,class:!0,href:!0});var ht=r(D);be=l(ht,"SPAN",{});var ct=r(be);f(K.$$.fragment,ct),ct.forEach(s),ht.forEach(s),Cs=c(es),ve=l(es,"SPAN",{});var ut=r(ve);Ls=p(ut,"Citation"),ut.forEach(s),es.forEach(s),We=c(e),f(Q.$$.fragment,e),Ye=c(e),f(X.$$.fragment,e),this.h()},h(){m(j,"name","hf:doc:metadata"),m(j,"content",JSON.stringify(_t)),m(P,"id","densenet"),m(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(P,"href","#densenet"),m(_,"class","relative group"),m(L,"href","http://www.paperswithcode.com/method/dense-block"),m(L,"rel","nofollow"),m(R,"href","http://www.paperswithcode.com/method/blur-pooling"),m(R,"rel","nofollow"),m(N,"id","how-do-i-use-this-model-on-an-image"),m(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(N,"href","#how-do-i-use-this-model-on-an-image"),m(y,"class","relative group"),m(ae,"href","../feature_extraction"),m(H,"id","how-do-i-finetune-this-model"),m(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(H,"href","#how-do-i-finetune-this-model"),m(x,"class","relative group"),m(O,"href","https://github.com/rwightman/pytorch-image-models/blob/master/train.py"),m(O,"rel","nofollow"),m(A,"id","how-do-i-train-this-model"),m(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(A,"href","#how-do-i-train-this-model"),m(k,"class","relative group"),m(le,"href","../scripts"),m(D,"id","citation"),m(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(D,"href","#citation"),m(E,"class","relative group")},m(e,a){t(document.head,j),o(e,$e,a),o(e,_,a),t(_,P),t(P,re),g(C,re,null),t(_,ss),t(_,oe),t(oe,ts),o(e,ye,a),o(e,v,a),t(v,ie),t(ie,as),t(v,ns),t(v,L),t(L,ls),t(v,rs),t(v,pe),t(pe,os),t(v,is),o(e,xe,a),o(e,$,a),t($,ps),t($,me),t(me,ms),t($,hs),t($,R),t(R,cs),o(e,ke,a),o(e,y,a),t(y,N),t(N,he),g(G,he,null),t(y,us),t(y,ce),t(ce,fs),o(e,Ee,a),o(e,V,a),t(V,gs),o(e,Pe,a),g(B,e,a),o(e,Ne,a),o(e,ee,a),t(ee,ds),o(e,Se,a),g(z,e,a),o(e,Te,a),o(e,se,a),t(se,ws),o(e,He,a),g(M,e,a),o(e,qe,a),o(e,te,a),t(te,bs),o(e,Ae,a),g(W,e,a),o(e,Ie,a),o(e,S,a),t(S,vs),t(S,ue),t(ue,js),t(S,_s),o(e,De,a),o(e,T,a),t(T,$s),t(T,ae),t(ae,ys),t(T,xs),o(e,Ce,a),o(e,x,a),t(x,H),t(H,fe),g(Y,fe,null),t(x,ks),t(x,ge),t(ge,Es),o(e,Le,a),o(e,ne,a),t(ne,Ps),o(e,Re,a),g(U,e,a),o(e,Ge,a),o(e,q,a),t(q,Ns),t(q,O),t(O,Ss),t(q,Ts),o(e,Be,a),o(e,k,a),t(k,A),t(A,de),g(F,de,null),t(k,Hs),t(k,we),t(we,qs),o(e,ze,a),o(e,I,a),t(I,As),t(I,le),t(le,Is),t(I,Ds),o(e,Me,a),o(e,E,a),t(E,D),t(D,be),g(K,be,null),t(E,Cs),t(E,ve),t(ve,Ls),o(e,We,a),g(Q,e,a),o(e,Ye,a),g(X,e,a),Ue=!0},p:bt,i(e){Ue||(d(C.$$.fragment,e),d(G.$$.fragment,e),d(B.$$.fragment,e),d(z.$$.fragment,e),d(M.$$.fragment,e),d(W.$$.fragment,e),d(Y.$$.fragment,e),d(U.$$.fragment,e),d(F.$$.fragment,e),d(K.$$.fragment,e),d(Q.$$.fragment,e),d(X.$$.fragment,e),Ue=!0)},o(e){w(C.$$.fragment,e),w(G.$$.fragment,e),w(B.$$.fragment,e),w(z.$$.fragment,e),w(M.$$.fragment,e),w(W.$$.fragment,e),w(Y.$$.fragment,e),w(U.$$.fragment,e),w(F.$$.fragment,e),w(K.$$.fragment,e),w(Q.$$.fragment,e),w(X.$$.fragment,e),Ue=!1},d(e){s(j),e&&s($e),e&&s(_),b(C),e&&s(ye),e&&s(v),e&&s(xe),e&&s($),e&&s(ke),e&&s(y),b(G),e&&s(Ee),e&&s(V),e&&s(Pe),b(B,e),e&&s(Ne),e&&s(ee),e&&s(Se),b(z,e),e&&s(Te),e&&s(se),e&&s(He),b(M,e),e&&s(qe),e&&s(te),e&&s(Ae),b(W,e),e&&s(Ie),e&&s(S),e&&s(De),e&&s(T),e&&s(Ce),e&&s(x),b(Y),e&&s(Le),e&&s(ne),e&&s(Re),b(U,e),e&&s(Ge),e&&s(q),e&&s(Be),e&&s(k),b(F),e&&s(ze),e&&s(I),e&&s(Me),e&&s(E),b(K),e&&s(We),b(Q,e),e&&s(Ye),b(X,e)}}}const _t={local:"densenet",sections:[{local:"how-do-i-use-this-model-on-an-image",title:"How do I use this model on an image?"},{local:"how-do-i-finetune-this-model",title:"How do I finetune this model?"},{local:"how-do-i-train-this-model",title:"How do I train this model?"},{local:"citation",title:"Citation"}],title:"DenseNet"};function $t(Rs){return vt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Et extends ft{constructor(j){super();gt(this,j,$t,jt,dt,{})}}export{Et as default,_t as metadata};
