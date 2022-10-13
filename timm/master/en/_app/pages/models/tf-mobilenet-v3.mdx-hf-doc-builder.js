import{S as ft,i as ut,s as dt,e as n,k as m,w as u,t as p,M as gt,c as o,d as s,m as c,a as l,x as d,h,b as i,G as t,g as r,y as g,L as wt,q as w,o as b,B as v,v as bt}from"../../chunks/vendor-hf-doc-builder.js";import{I as ve}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as le}from"../../chunks/CodeBlock-hf-doc-builder.js";function vt(Ls){let _,_e,j,P,re,L,Ke,ie,es,je,f,pe,ss,ts,R,as,ns,B,os,ls,V,rs,is,$e,T,ps,z,hs,ms,ye,$,A,he,G,cs,me,fs,ke,K,us,xe,Y,Ee,ee,ds,Pe,U,Te,se,gs,Ae,D,Se,te,ws,Ne,W,qe,S,bs,ce,vs,_s,Ce,N,js,ae,$s,ys,Ie,y,q,fe,J,ks,ue,xs,Me,ne,Es,He,O,Le,C,Ps,F,Ts,As,Re,k,I,de,Q,Ss,ge,Ns,Be,M,qs,oe,Cs,Is,Ve,x,H,we,X,Ms,be,Hs,ze,Z,Ge;return L=new ve({}),G=new ve({}),Y=new le({props:{code:`import timm
model = timm.create_model('tf_mobilenetv3_large_075', pretrained=True)
model.eval()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> timm
<span class="hljs-meta">&gt;&gt;&gt; </span>model = timm.create_model(<span class="hljs-string">&#x27;tf_mobilenetv3_large_075&#x27;</span>, pretrained=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">eval</span>()`}}),U=new le({props:{code:`import urllib
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
<span class="hljs-meta">&gt;&gt;&gt; </span>tensor = transform(img).unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-comment"># transform and add batch dimension</span>`}}),D=new le({props:{code:`import torch
with torch.no_grad():
    out = model(tensor)
probabilities = torch.nn.functional.softmax(out[0], dim=0)
print(probabilities.shape)
# prints: torch.Size([1000])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    out = model(tensor)
<span class="hljs-meta">&gt;&gt;&gt; </span>probabilities = torch.nn.functional.softmax(out[<span class="hljs-number">0</span>], dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(probabilities.shape)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prints: torch.Size([1000])</span>`}}),W=new le({props:{code:`# Get imagenet class mappings
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># [(&#x27;Samoyed&#x27;, 0.6425196528434753), (&#x27;Pomeranian&#x27;, 0.04062102362513542), (&#x27;keeshond&#x27;, 0.03186424449086189), (&#x27;white wolf&#x27;, 0.01739676296710968), (&#x27;Eskimo dog&#x27;, 0.011717947199940681)]</span>`}}),J=new ve({}),O=new le({props:{code:"model = timm.create_model('tf_mobilenetv3_large_075', pretrained=True, num_classes=NUM_FINETUNE_CLASSES)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model = timm.create_model(<span class="hljs-string">&#x27;tf_mobilenetv3_large_075&#x27;</span>, pretrained=<span class="hljs-literal">True</span>, num_classes=NUM_FINETUNE_CLASSES)'}}),Q=new ve({}),X=new ve({}),Z=new le({props:{code:`@article{DBLP:journals/corr/abs-1905-02244,
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
}`}}),{c(){_=n("meta"),_e=m(),j=n("h1"),P=n("a"),re=n("span"),u(L.$$.fragment),Ke=m(),ie=n("span"),es=p("(Tensorflow) MobileNet v3"),je=m(),f=n("p"),pe=n("strong"),ss=p("MobileNetV3"),ts=p(" is a convolutional neural network that is designed for mobile phone CPUs. The network design includes the use of a "),R=n("a"),as=p("hard swish activation"),ns=p(" and "),B=n("a"),os=p("squeeze-and-excitation"),ls=p(" modules in the "),V=n("a"),rs=p("MBConv blocks"),is=p("."),$e=m(),T=n("p"),ps=p("The weights from this model were ported from "),z=n("a"),hs=p("Tensorflow/Models"),ms=p("."),ye=m(),$=n("h2"),A=n("a"),he=n("span"),u(G.$$.fragment),cs=m(),me=n("span"),fs=p("How do I use this model on an image?"),ke=m(),K=n("p"),us=p("To load a pretrained model:"),xe=m(),u(Y.$$.fragment),Ee=m(),ee=n("p"),ds=p("To load and preprocess the image:"),Pe=m(),u(U.$$.fragment),Te=m(),se=n("p"),gs=p("To get the model predictions:"),Ae=m(),u(D.$$.fragment),Se=m(),te=n("p"),ws=p("To get the top-5 predictions class names:"),Ne=m(),u(W.$$.fragment),qe=m(),S=n("p"),bs=p("Replace the model name with the variant you want to use, e.g. "),ce=n("code"),vs=p("tf_mobilenetv3_large_075"),_s=p(". You can find the IDs in the model summaries at the top of this page."),Ce=m(),N=n("p"),js=p("To extract image features with this model, follow the "),ae=n("a"),$s=p("timm feature extraction examples"),ys=p(", just change the name of the model you want to use."),Ie=m(),y=n("h2"),q=n("a"),fe=n("span"),u(J.$$.fragment),ks=m(),ue=n("span"),xs=p("How do I finetune this model?"),Me=m(),ne=n("p"),Es=p("You can finetune any of the pre-trained models just by changing the classifier (the last layer)."),He=m(),u(O.$$.fragment),Le=m(),C=n("p"),Ps=p("To finetune on your own dataset, you have to write a training loop or adapt "),F=n("a"),Ts=p(`timm\u2019s training
script`),As=p(" to use your dataset."),Re=m(),k=n("h2"),I=n("a"),de=n("span"),u(Q.$$.fragment),Ss=m(),ge=n("span"),Ns=p("How do I train this model?"),Be=m(),M=n("p"),qs=p("You can follow the "),oe=n("a"),Cs=p("timm recipe scripts"),Is=p(" for training a new model afresh."),Ve=m(),x=n("h2"),H=n("a"),we=n("span"),u(X.$$.fragment),Ms=m(),be=n("span"),Hs=p("Citation"),ze=m(),u(Z.$$.fragment),this.h()},l(e){const a=gt('[data-svelte="svelte-1phssyn"]',document.head);_=o(a,"META",{name:!0,content:!0}),a.forEach(s),_e=c(e),j=o(e,"H1",{class:!0});var Ye=l(j);P=o(Ye,"A",{id:!0,class:!0,href:!0});var Rs=l(P);re=o(Rs,"SPAN",{});var Bs=l(re);d(L.$$.fragment,Bs),Bs.forEach(s),Rs.forEach(s),Ke=c(Ye),ie=o(Ye,"SPAN",{});var Vs=l(ie);es=h(Vs,"(Tensorflow) MobileNet v3"),Vs.forEach(s),Ye.forEach(s),je=c(e),f=o(e,"P",{});var E=l(f);pe=o(E,"STRONG",{});var zs=l(pe);ss=h(zs,"MobileNetV3"),zs.forEach(s),ts=h(E," is a convolutional neural network that is designed for mobile phone CPUs. The network design includes the use of a "),R=o(E,"A",{href:!0,rel:!0});var Gs=l(R);as=h(Gs,"hard swish activation"),Gs.forEach(s),ns=h(E," and "),B=o(E,"A",{href:!0,rel:!0});var Ys=l(B);os=h(Ys,"squeeze-and-excitation"),Ys.forEach(s),ls=h(E," modules in the "),V=o(E,"A",{href:!0,rel:!0});var Us=l(V);rs=h(Us,"MBConv blocks"),Us.forEach(s),is=h(E,"."),E.forEach(s),$e=c(e),T=o(e,"P",{});var Ue=l(T);ps=h(Ue,"The weights from this model were ported from "),z=o(Ue,"A",{href:!0,rel:!0});var Ds=l(z);hs=h(Ds,"Tensorflow/Models"),Ds.forEach(s),ms=h(Ue,"."),Ue.forEach(s),ye=c(e),$=o(e,"H2",{class:!0});var De=l($);A=o(De,"A",{id:!0,class:!0,href:!0});var Ws=l(A);he=o(Ws,"SPAN",{});var Js=l(he);d(G.$$.fragment,Js),Js.forEach(s),Ws.forEach(s),cs=c(De),me=o(De,"SPAN",{});var Os=l(me);fs=h(Os,"How do I use this model on an image?"),Os.forEach(s),De.forEach(s),ke=c(e),K=o(e,"P",{});var Fs=l(K);us=h(Fs,"To load a pretrained model:"),Fs.forEach(s),xe=c(e),d(Y.$$.fragment,e),Ee=c(e),ee=o(e,"P",{});var Qs=l(ee);ds=h(Qs,"To load and preprocess the image:"),Qs.forEach(s),Pe=c(e),d(U.$$.fragment,e),Te=c(e),se=o(e,"P",{});var Xs=l(se);gs=h(Xs,"To get the model predictions:"),Xs.forEach(s),Ae=c(e),d(D.$$.fragment,e),Se=c(e),te=o(e,"P",{});var Zs=l(te);ws=h(Zs,"To get the top-5 predictions class names:"),Zs.forEach(s),Ne=c(e),d(W.$$.fragment,e),qe=c(e),S=o(e,"P",{});var We=l(S);bs=h(We,"Replace the model name with the variant you want to use, e.g. "),ce=o(We,"CODE",{});var Ks=l(ce);vs=h(Ks,"tf_mobilenetv3_large_075"),Ks.forEach(s),_s=h(We,". You can find the IDs in the model summaries at the top of this page."),We.forEach(s),Ce=c(e),N=o(e,"P",{});var Je=l(N);js=h(Je,"To extract image features with this model, follow the "),ae=o(Je,"A",{href:!0});var et=l(ae);$s=h(et,"timm feature extraction examples"),et.forEach(s),ys=h(Je,", just change the name of the model you want to use."),Je.forEach(s),Ie=c(e),y=o(e,"H2",{class:!0});var Oe=l(y);q=o(Oe,"A",{id:!0,class:!0,href:!0});var st=l(q);fe=o(st,"SPAN",{});var tt=l(fe);d(J.$$.fragment,tt),tt.forEach(s),st.forEach(s),ks=c(Oe),ue=o(Oe,"SPAN",{});var at=l(ue);xs=h(at,"How do I finetune this model?"),at.forEach(s),Oe.forEach(s),Me=c(e),ne=o(e,"P",{});var nt=l(ne);Es=h(nt,"You can finetune any of the pre-trained models just by changing the classifier (the last layer)."),nt.forEach(s),He=c(e),d(O.$$.fragment,e),Le=c(e),C=o(e,"P",{});var Fe=l(C);Ps=h(Fe,"To finetune on your own dataset, you have to write a training loop or adapt "),F=o(Fe,"A",{href:!0,rel:!0});var ot=l(F);Ts=h(ot,`timm\u2019s training
script`),ot.forEach(s),As=h(Fe," to use your dataset."),Fe.forEach(s),Re=c(e),k=o(e,"H2",{class:!0});var Qe=l(k);I=o(Qe,"A",{id:!0,class:!0,href:!0});var lt=l(I);de=o(lt,"SPAN",{});var rt=l(de);d(Q.$$.fragment,rt),rt.forEach(s),lt.forEach(s),Ss=c(Qe),ge=o(Qe,"SPAN",{});var it=l(ge);Ns=h(it,"How do I train this model?"),it.forEach(s),Qe.forEach(s),Be=c(e),M=o(e,"P",{});var Xe=l(M);qs=h(Xe,"You can follow the "),oe=o(Xe,"A",{href:!0});var pt=l(oe);Cs=h(pt,"timm recipe scripts"),pt.forEach(s),Is=h(Xe," for training a new model afresh."),Xe.forEach(s),Ve=c(e),x=o(e,"H2",{class:!0});var Ze=l(x);H=o(Ze,"A",{id:!0,class:!0,href:!0});var ht=l(H);we=o(ht,"SPAN",{});var mt=l(we);d(X.$$.fragment,mt),mt.forEach(s),ht.forEach(s),Ms=c(Ze),be=o(Ze,"SPAN",{});var ct=l(be);Hs=h(ct,"Citation"),ct.forEach(s),Ze.forEach(s),ze=c(e),d(Z.$$.fragment,e),this.h()},h(){i(_,"name","hf:doc:metadata"),i(_,"content",JSON.stringify(_t)),i(P,"id","tensorflow-mobilenet-v3"),i(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(P,"href","#tensorflow-mobilenet-v3"),i(j,"class","relative group"),i(R,"href","https://paperswithcode.com/method/hard-swish"),i(R,"rel","nofollow"),i(B,"href","https://paperswithcode.com/method/squeeze-and-excitation-block"),i(B,"rel","nofollow"),i(V,"href","https://paperswithcode.com/method/inverted-residual-block"),i(V,"rel","nofollow"),i(z,"href","https://github.com/tensorflow/models"),i(z,"rel","nofollow"),i(A,"id","how-do-i-use-this-model-on-an-image"),i(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(A,"href","#how-do-i-use-this-model-on-an-image"),i($,"class","relative group"),i(ae,"href","../feature_extraction"),i(q,"id","how-do-i-finetune-this-model"),i(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(q,"href","#how-do-i-finetune-this-model"),i(y,"class","relative group"),i(F,"href","https://github.com/rwightman/pytorch-image-models/blob/master/train.py"),i(F,"rel","nofollow"),i(I,"id","how-do-i-train-this-model"),i(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(I,"href","#how-do-i-train-this-model"),i(k,"class","relative group"),i(oe,"href","../scripts"),i(H,"id","citation"),i(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(H,"href","#citation"),i(x,"class","relative group")},m(e,a){t(document.head,_),r(e,_e,a),r(e,j,a),t(j,P),t(P,re),g(L,re,null),t(j,Ke),t(j,ie),t(ie,es),r(e,je,a),r(e,f,a),t(f,pe),t(pe,ss),t(f,ts),t(f,R),t(R,as),t(f,ns),t(f,B),t(B,os),t(f,ls),t(f,V),t(V,rs),t(f,is),r(e,$e,a),r(e,T,a),t(T,ps),t(T,z),t(z,hs),t(T,ms),r(e,ye,a),r(e,$,a),t($,A),t(A,he),g(G,he,null),t($,cs),t($,me),t(me,fs),r(e,ke,a),r(e,K,a),t(K,us),r(e,xe,a),g(Y,e,a),r(e,Ee,a),r(e,ee,a),t(ee,ds),r(e,Pe,a),g(U,e,a),r(e,Te,a),r(e,se,a),t(se,gs),r(e,Ae,a),g(D,e,a),r(e,Se,a),r(e,te,a),t(te,ws),r(e,Ne,a),g(W,e,a),r(e,qe,a),r(e,S,a),t(S,bs),t(S,ce),t(ce,vs),t(S,_s),r(e,Ce,a),r(e,N,a),t(N,js),t(N,ae),t(ae,$s),t(N,ys),r(e,Ie,a),r(e,y,a),t(y,q),t(q,fe),g(J,fe,null),t(y,ks),t(y,ue),t(ue,xs),r(e,Me,a),r(e,ne,a),t(ne,Es),r(e,He,a),g(O,e,a),r(e,Le,a),r(e,C,a),t(C,Ps),t(C,F),t(F,Ts),t(C,As),r(e,Re,a),r(e,k,a),t(k,I),t(I,de),g(Q,de,null),t(k,Ss),t(k,ge),t(ge,Ns),r(e,Be,a),r(e,M,a),t(M,qs),t(M,oe),t(oe,Cs),t(M,Is),r(e,Ve,a),r(e,x,a),t(x,H),t(H,we),g(X,we,null),t(x,Ms),t(x,be),t(be,Hs),r(e,ze,a),g(Z,e,a),Ge=!0},p:wt,i(e){Ge||(w(L.$$.fragment,e),w(G.$$.fragment,e),w(Y.$$.fragment,e),w(U.$$.fragment,e),w(D.$$.fragment,e),w(W.$$.fragment,e),w(J.$$.fragment,e),w(O.$$.fragment,e),w(Q.$$.fragment,e),w(X.$$.fragment,e),w(Z.$$.fragment,e),Ge=!0)},o(e){b(L.$$.fragment,e),b(G.$$.fragment,e),b(Y.$$.fragment,e),b(U.$$.fragment,e),b(D.$$.fragment,e),b(W.$$.fragment,e),b(J.$$.fragment,e),b(O.$$.fragment,e),b(Q.$$.fragment,e),b(X.$$.fragment,e),b(Z.$$.fragment,e),Ge=!1},d(e){s(_),e&&s(_e),e&&s(j),v(L),e&&s(je),e&&s(f),e&&s($e),e&&s(T),e&&s(ye),e&&s($),v(G),e&&s(ke),e&&s(K),e&&s(xe),v(Y,e),e&&s(Ee),e&&s(ee),e&&s(Pe),v(U,e),e&&s(Te),e&&s(se),e&&s(Ae),v(D,e),e&&s(Se),e&&s(te),e&&s(Ne),v(W,e),e&&s(qe),e&&s(S),e&&s(Ce),e&&s(N),e&&s(Ie),e&&s(y),v(J),e&&s(Me),e&&s(ne),e&&s(He),v(O,e),e&&s(Le),e&&s(C),e&&s(Re),e&&s(k),v(Q),e&&s(Be),e&&s(M),e&&s(Ve),e&&s(x),v(X),e&&s(ze),v(Z,e)}}}const _t={local:"tensorflow-mobilenet-v3",sections:[{local:"how-do-i-use-this-model-on-an-image",title:"How do I use this model on an image?"},{local:"how-do-i-finetune-this-model",title:"How do I finetune this model?"},{local:"how-do-i-train-this-model",title:"How do I train this model?"},{local:"citation",title:"Citation"}],title:"(Tensorflow) MobileNet v3"};function jt(Ls){return bt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xt extends ft{constructor(_){super();ut(this,_,jt,vt,dt,{})}}export{xt as default,_t as metadata};
