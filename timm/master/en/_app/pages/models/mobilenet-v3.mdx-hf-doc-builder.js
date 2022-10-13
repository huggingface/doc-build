import{S as la,i as oa,s as ra,e as n,k as m,w as f,t as p,M as ia,c as l,d as s,m as c,a as o,x as d,h,b as i,G as a,g as r,y as g,L as pa,q as w,o as b,B as v,v as ha}from"../../chunks/vendor-hf-doc-builder.js";import{I as we}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ne}from"../../chunks/CodeBlock-hf-doc-builder.js";function ma(Ts){let j,be,_,P,le,H,Fe,oe,Qe,ve,u,re,Xe,Ze,L,Ke,es,R,ss,as,B,ts,ns,je,$,S,ie,V,ls,pe,os,_e,X,rs,$e,z,ye,Z,is,ke,G,xe,K,ps,Ee,Y,Pe,ee,hs,Se,U,Ae,A,ms,he,cs,us,Te,T,fs,se,ds,gs,Ne,y,N,me,D,ws,ce,bs,qe,ae,vs,Ce,W,Ie,q,js,J,_s,$s,Me,k,C,ue,O,ys,fe,ks,He,I,xs,te,Es,Ps,Le,x,M,de,F,Ss,ge,As,Re,Q,Be;return H=new we({}),V=new we({}),z=new ne({props:{code:`import timm
model = timm.create_model('mobilenetv3_large_100', pretrained=True)
model.eval()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> timm
<span class="hljs-meta">&gt;&gt;&gt; </span>model = timm.create_model(<span class="hljs-string">&#x27;mobilenetv3_large_100&#x27;</span>, pretrained=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">eval</span>()`}}),G=new ne({props:{code:`import urllib
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
<span class="hljs-meta">&gt;&gt;&gt; </span>tensor = transform(img).unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-comment"># transform and add batch dimension</span>`}}),Y=new ne({props:{code:`import torch
with torch.no_grad():
    out = model(tensor)
probabilities = torch.nn.functional.softmax(out[0], dim=0)
print(probabilities.shape)
# prints: torch.Size([1000])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    out = model(tensor)
<span class="hljs-meta">&gt;&gt;&gt; </span>probabilities = torch.nn.functional.softmax(out[<span class="hljs-number">0</span>], dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(probabilities.shape)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prints: torch.Size([1000])</span>`}}),U=new ne({props:{code:`# Get imagenet class mappings
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># [(&#x27;Samoyed&#x27;, 0.6425196528434753), (&#x27;Pomeranian&#x27;, 0.04062102362513542), (&#x27;keeshond&#x27;, 0.03186424449086189), (&#x27;white wolf&#x27;, 0.01739676296710968), (&#x27;Eskimo dog&#x27;, 0.011717947199940681)]</span>`}}),D=new we({}),W=new ne({props:{code:"model = timm.create_model('mobilenetv3_large_100', pretrained=True, num_classes=NUM_FINETUNE_CLASSES)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model = timm.create_model(<span class="hljs-string">&#x27;mobilenetv3_large_100&#x27;</span>, pretrained=<span class="hljs-literal">True</span>, num_classes=NUM_FINETUNE_CLASSES)'}}),O=new we({}),F=new we({}),Q=new ne({props:{code:`@article{DBLP:journals/corr/abs-1905-02244,
  author    = {Andrew Howard and
               Mark Sandler and
               Grace Chu and
               Liang{-}Chieh Chen and
               Bo Chen and
               Mingxing Tan and
               Weijun Wang and
               Yukun Zhu and
               Ruoming Pang and
               Vijay Vasudevan and
               Quoc V. Le and
               Hartwig Adam},
  title     = {Searching for MobileNetV3},
  journal   = {CoRR},
  volume    = {abs/1905.02244},
  year      = {2019},
  url       = {http://arxiv.org/abs/1905.02244},
  archivePrefix = {arXiv},
  eprint    = {1905.02244},
  timestamp = {Tue, 12 Jan 2021 15:30:06 +0100},
  biburl    = {https://dblp.org/rec/journals/corr/abs-1905-02244.bib},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}`,highlighted:`<span class="hljs-comment">@article{DBLP:journals/corr/abs-1905-02244,</span>
  author    = {Andrew Howard <span class="hljs-keyword">and</span>
               Mark Sandler <span class="hljs-keyword">and</span>
               Grace Chu <span class="hljs-keyword">and</span>
               Liang{-}Chieh Chen <span class="hljs-keyword">and</span>
               Bo Chen <span class="hljs-keyword">and</span>
               Mingxing Tan <span class="hljs-keyword">and</span>
               Weijun Wang <span class="hljs-keyword">and</span>
               Yukun Zhu <span class="hljs-keyword">and</span>
               Ruoming Pang <span class="hljs-keyword">and</span>
               Vijay Vasudevan <span class="hljs-keyword">and</span>
               Quoc V. Le <span class="hljs-keyword">and</span>
               Hartwig Adam},
  title     = {Searching for MobileNetV3},
  journal   = {CoRR},
  volume    = {abs/<span class="hljs-number">1905</span>.<span class="hljs-number">02244</span>},
  year      = {<span class="hljs-number">2019</span>},
  url       = {http:<span class="hljs-comment">//arxiv.org/abs/1905.02244},</span>
  archivePrefix = {arXiv},
  eprint    = {<span class="hljs-number">1905</span>.<span class="hljs-number">02244</span>},
  timestamp = {Tue, <span class="hljs-number">12</span> Jan <span class="hljs-number">2021</span> <span class="hljs-number">15</span>:<span class="hljs-number">30</span>:<span class="hljs-number">06</span> +<span class="hljs-number">0100</span>},
  biburl    = {https:<span class="hljs-comment">//dblp.org/rec/journals/corr/abs-1905-02244.bib},</span>
  bibsource = {dblp computer science bibliography, https:<span class="hljs-comment">//dblp.org}</span>
}`}}),{c(){j=n("meta"),be=m(),_=n("h1"),P=n("a"),le=n("span"),f(H.$$.fragment),Fe=m(),oe=n("span"),Qe=p("MobileNet v3"),ve=m(),u=n("p"),re=n("strong"),Xe=p("MobileNetV3"),Ze=p(" is a convolutional neural network that is designed for mobile phone CPUs. The network design includes the use of a "),L=n("a"),Ke=p("hard swish activation"),es=p(" and "),R=n("a"),ss=p("squeeze-and-excitation"),as=p(" modules in the "),B=n("a"),ts=p("MBConv blocks"),ns=p("."),je=m(),$=n("h2"),S=n("a"),ie=n("span"),f(V.$$.fragment),ls=m(),pe=n("span"),os=p("How do I use this model on an image?"),_e=m(),X=n("p"),rs=p("To load a pretrained model:"),$e=m(),f(z.$$.fragment),ye=m(),Z=n("p"),is=p("To load and preprocess the image:"),ke=m(),f(G.$$.fragment),xe=m(),K=n("p"),ps=p("To get the model predictions:"),Ee=m(),f(Y.$$.fragment),Pe=m(),ee=n("p"),hs=p("To get the top-5 predictions class names:"),Se=m(),f(U.$$.fragment),Ae=m(),A=n("p"),ms=p("Replace the model name with the variant you want to use, e.g. "),he=n("code"),cs=p("mobilenetv3_large_100"),us=p(". You can find the IDs in the model summaries at the top of this page."),Te=m(),T=n("p"),fs=p("To extract image features with this model, follow the "),se=n("a"),ds=p("timm feature extraction examples"),gs=p(", just change the name of the model you want to use."),Ne=m(),y=n("h2"),N=n("a"),me=n("span"),f(D.$$.fragment),ws=m(),ce=n("span"),bs=p("How do I finetune this model?"),qe=m(),ae=n("p"),vs=p("You can finetune any of the pre-trained models just by changing the classifier (the last layer)."),Ce=m(),f(W.$$.fragment),Ie=m(),q=n("p"),js=p("To finetune on your own dataset, you have to write a training loop or adapt "),J=n("a"),_s=p(`timm\u2019s training
script`),$s=p(" to use your dataset."),Me=m(),k=n("h2"),C=n("a"),ue=n("span"),f(O.$$.fragment),ys=m(),fe=n("span"),ks=p("How do I train this model?"),He=m(),I=n("p"),xs=p("You can follow the "),te=n("a"),Es=p("timm recipe scripts"),Ps=p(" for training a new model afresh."),Le=m(),x=n("h2"),M=n("a"),de=n("span"),f(F.$$.fragment),Ss=m(),ge=n("span"),As=p("Citation"),Re=m(),f(Q.$$.fragment),this.h()},l(e){const t=ia('[data-svelte="svelte-1phssyn"]',document.head);j=l(t,"META",{name:!0,content:!0}),t.forEach(s),be=c(e),_=l(e,"H1",{class:!0});var Ve=o(_);P=l(Ve,"A",{id:!0,class:!0,href:!0});var Ns=o(P);le=l(Ns,"SPAN",{});var qs=o(le);d(H.$$.fragment,qs),qs.forEach(s),Ns.forEach(s),Fe=c(Ve),oe=l(Ve,"SPAN",{});var Cs=o(oe);Qe=h(Cs,"MobileNet v3"),Cs.forEach(s),Ve.forEach(s),ve=c(e),u=l(e,"P",{});var E=o(u);re=l(E,"STRONG",{});var Is=o(re);Xe=h(Is,"MobileNetV3"),Is.forEach(s),Ze=h(E," is a convolutional neural network that is designed for mobile phone CPUs. The network design includes the use of a "),L=l(E,"A",{href:!0,rel:!0});var Ms=o(L);Ke=h(Ms,"hard swish activation"),Ms.forEach(s),es=h(E," and "),R=l(E,"A",{href:!0,rel:!0});var Hs=o(R);ss=h(Hs,"squeeze-and-excitation"),Hs.forEach(s),as=h(E," modules in the "),B=l(E,"A",{href:!0,rel:!0});var Ls=o(B);ts=h(Ls,"MBConv blocks"),Ls.forEach(s),ns=h(E,"."),E.forEach(s),je=c(e),$=l(e,"H2",{class:!0});var ze=o($);S=l(ze,"A",{id:!0,class:!0,href:!0});var Rs=o(S);ie=l(Rs,"SPAN",{});var Bs=o(ie);d(V.$$.fragment,Bs),Bs.forEach(s),Rs.forEach(s),ls=c(ze),pe=l(ze,"SPAN",{});var Vs=o(pe);os=h(Vs,"How do I use this model on an image?"),Vs.forEach(s),ze.forEach(s),_e=c(e),X=l(e,"P",{});var zs=o(X);rs=h(zs,"To load a pretrained model:"),zs.forEach(s),$e=c(e),d(z.$$.fragment,e),ye=c(e),Z=l(e,"P",{});var Gs=o(Z);is=h(Gs,"To load and preprocess the image:"),Gs.forEach(s),ke=c(e),d(G.$$.fragment,e),xe=c(e),K=l(e,"P",{});var Ys=o(K);ps=h(Ys,"To get the model predictions:"),Ys.forEach(s),Ee=c(e),d(Y.$$.fragment,e),Pe=c(e),ee=l(e,"P",{});var Us=o(ee);hs=h(Us,"To get the top-5 predictions class names:"),Us.forEach(s),Se=c(e),d(U.$$.fragment,e),Ae=c(e),A=l(e,"P",{});var Ge=o(A);ms=h(Ge,"Replace the model name with the variant you want to use, e.g. "),he=l(Ge,"CODE",{});var Ds=o(he);cs=h(Ds,"mobilenetv3_large_100"),Ds.forEach(s),us=h(Ge,". You can find the IDs in the model summaries at the top of this page."),Ge.forEach(s),Te=c(e),T=l(e,"P",{});var Ye=o(T);fs=h(Ye,"To extract image features with this model, follow the "),se=l(Ye,"A",{href:!0});var Ws=o(se);ds=h(Ws,"timm feature extraction examples"),Ws.forEach(s),gs=h(Ye,", just change the name of the model you want to use."),Ye.forEach(s),Ne=c(e),y=l(e,"H2",{class:!0});var Ue=o(y);N=l(Ue,"A",{id:!0,class:!0,href:!0});var Js=o(N);me=l(Js,"SPAN",{});var Os=o(me);d(D.$$.fragment,Os),Os.forEach(s),Js.forEach(s),ws=c(Ue),ce=l(Ue,"SPAN",{});var Fs=o(ce);bs=h(Fs,"How do I finetune this model?"),Fs.forEach(s),Ue.forEach(s),qe=c(e),ae=l(e,"P",{});var Qs=o(ae);vs=h(Qs,"You can finetune any of the pre-trained models just by changing the classifier (the last layer)."),Qs.forEach(s),Ce=c(e),d(W.$$.fragment,e),Ie=c(e),q=l(e,"P",{});var De=o(q);js=h(De,"To finetune on your own dataset, you have to write a training loop or adapt "),J=l(De,"A",{href:!0,rel:!0});var Xs=o(J);_s=h(Xs,`timm\u2019s training
script`),Xs.forEach(s),$s=h(De," to use your dataset."),De.forEach(s),Me=c(e),k=l(e,"H2",{class:!0});var We=o(k);C=l(We,"A",{id:!0,class:!0,href:!0});var Zs=o(C);ue=l(Zs,"SPAN",{});var Ks=o(ue);d(O.$$.fragment,Ks),Ks.forEach(s),Zs.forEach(s),ys=c(We),fe=l(We,"SPAN",{});var ea=o(fe);ks=h(ea,"How do I train this model?"),ea.forEach(s),We.forEach(s),He=c(e),I=l(e,"P",{});var Je=o(I);xs=h(Je,"You can follow the "),te=l(Je,"A",{href:!0});var sa=o(te);Es=h(sa,"timm recipe scripts"),sa.forEach(s),Ps=h(Je," for training a new model afresh."),Je.forEach(s),Le=c(e),x=l(e,"H2",{class:!0});var Oe=o(x);M=l(Oe,"A",{id:!0,class:!0,href:!0});var aa=o(M);de=l(aa,"SPAN",{});var ta=o(de);d(F.$$.fragment,ta),ta.forEach(s),aa.forEach(s),Ss=c(Oe),ge=l(Oe,"SPAN",{});var na=o(ge);As=h(na,"Citation"),na.forEach(s),Oe.forEach(s),Re=c(e),d(Q.$$.fragment,e),this.h()},h(){i(j,"name","hf:doc:metadata"),i(j,"content",JSON.stringify(ca)),i(P,"id","mobilenet-v3"),i(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(P,"href","#mobilenet-v3"),i(_,"class","relative group"),i(L,"href","https://paperswithcode.com/method/hard-swish"),i(L,"rel","nofollow"),i(R,"href","https://paperswithcode.com/method/squeeze-and-excitation-block"),i(R,"rel","nofollow"),i(B,"href","https://paperswithcode.com/method/inverted-residual-block"),i(B,"rel","nofollow"),i(S,"id","how-do-i-use-this-model-on-an-image"),i(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(S,"href","#how-do-i-use-this-model-on-an-image"),i($,"class","relative group"),i(se,"href","../feature_extraction"),i(N,"id","how-do-i-finetune-this-model"),i(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(N,"href","#how-do-i-finetune-this-model"),i(y,"class","relative group"),i(J,"href","https://github.com/rwightman/pytorch-image-models/blob/master/train.py"),i(J,"rel","nofollow"),i(C,"id","how-do-i-train-this-model"),i(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(C,"href","#how-do-i-train-this-model"),i(k,"class","relative group"),i(te,"href","../scripts"),i(M,"id","citation"),i(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(M,"href","#citation"),i(x,"class","relative group")},m(e,t){a(document.head,j),r(e,be,t),r(e,_,t),a(_,P),a(P,le),g(H,le,null),a(_,Fe),a(_,oe),a(oe,Qe),r(e,ve,t),r(e,u,t),a(u,re),a(re,Xe),a(u,Ze),a(u,L),a(L,Ke),a(u,es),a(u,R),a(R,ss),a(u,as),a(u,B),a(B,ts),a(u,ns),r(e,je,t),r(e,$,t),a($,S),a(S,ie),g(V,ie,null),a($,ls),a($,pe),a(pe,os),r(e,_e,t),r(e,X,t),a(X,rs),r(e,$e,t),g(z,e,t),r(e,ye,t),r(e,Z,t),a(Z,is),r(e,ke,t),g(G,e,t),r(e,xe,t),r(e,K,t),a(K,ps),r(e,Ee,t),g(Y,e,t),r(e,Pe,t),r(e,ee,t),a(ee,hs),r(e,Se,t),g(U,e,t),r(e,Ae,t),r(e,A,t),a(A,ms),a(A,he),a(he,cs),a(A,us),r(e,Te,t),r(e,T,t),a(T,fs),a(T,se),a(se,ds),a(T,gs),r(e,Ne,t),r(e,y,t),a(y,N),a(N,me),g(D,me,null),a(y,ws),a(y,ce),a(ce,bs),r(e,qe,t),r(e,ae,t),a(ae,vs),r(e,Ce,t),g(W,e,t),r(e,Ie,t),r(e,q,t),a(q,js),a(q,J),a(J,_s),a(q,$s),r(e,Me,t),r(e,k,t),a(k,C),a(C,ue),g(O,ue,null),a(k,ys),a(k,fe),a(fe,ks),r(e,He,t),r(e,I,t),a(I,xs),a(I,te),a(te,Es),a(I,Ps),r(e,Le,t),r(e,x,t),a(x,M),a(M,de),g(F,de,null),a(x,Ss),a(x,ge),a(ge,As),r(e,Re,t),g(Q,e,t),Be=!0},p:pa,i(e){Be||(w(H.$$.fragment,e),w(V.$$.fragment,e),w(z.$$.fragment,e),w(G.$$.fragment,e),w(Y.$$.fragment,e),w(U.$$.fragment,e),w(D.$$.fragment,e),w(W.$$.fragment,e),w(O.$$.fragment,e),w(F.$$.fragment,e),w(Q.$$.fragment,e),Be=!0)},o(e){b(H.$$.fragment,e),b(V.$$.fragment,e),b(z.$$.fragment,e),b(G.$$.fragment,e),b(Y.$$.fragment,e),b(U.$$.fragment,e),b(D.$$.fragment,e),b(W.$$.fragment,e),b(O.$$.fragment,e),b(F.$$.fragment,e),b(Q.$$.fragment,e),Be=!1},d(e){s(j),e&&s(be),e&&s(_),v(H),e&&s(ve),e&&s(u),e&&s(je),e&&s($),v(V),e&&s(_e),e&&s(X),e&&s($e),v(z,e),e&&s(ye),e&&s(Z),e&&s(ke),v(G,e),e&&s(xe),e&&s(K),e&&s(Ee),v(Y,e),e&&s(Pe),e&&s(ee),e&&s(Se),v(U,e),e&&s(Ae),e&&s(A),e&&s(Te),e&&s(T),e&&s(Ne),e&&s(y),v(D),e&&s(qe),e&&s(ae),e&&s(Ce),v(W,e),e&&s(Ie),e&&s(q),e&&s(Me),e&&s(k),v(O),e&&s(He),e&&s(I),e&&s(Le),e&&s(x),v(F),e&&s(Re),v(Q,e)}}}const ca={local:"mobilenet-v3",sections:[{local:"how-do-i-use-this-model-on-an-image",title:"How do I use this model on an image?"},{local:"how-do-i-finetune-this-model",title:"How do I finetune this model?"},{local:"how-do-i-train-this-model",title:"How do I train this model?"},{local:"citation",title:"Citation"}],title:"MobileNet v3"};function ua(Ts){return ha(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class wa extends la{constructor(j){super();oa(this,j,ua,ma,ra,{})}}export{wa as default,ca as metadata};
