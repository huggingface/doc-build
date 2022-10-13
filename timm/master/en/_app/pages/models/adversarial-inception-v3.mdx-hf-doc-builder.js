import{S as we,i as ve,s as be,e as n,k as m,w as u,t as i,M as je,c as o,d as s,m as c,a as l,x as f,h as p,b as h,G as e,g as r,y as g,L as _e,q as w,o as v,B as b,v as ye}from"../../chunks/vendor-hf-doc-builder.js";import{I as ja}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ra}from"../../chunks/CodeBlock-hf-doc-builder.js";function ke(Ms){let j,_a,_,A,ia,Y,ss,pa,es,ya,d,ha,ts,ns,z,os,ls,Z,rs,is,M,ps,hs,ka,V,ms,$a,P,cs,R,ds,us,xa,y,T,ma,B,fs,ca,gs,Ea,aa,ws,Aa,D,Pa,sa,vs,Ta,J,Sa,ea,bs,Ia,G,qa,ta,js,Ha,F,La,S,_s,da,ys,ks,Na,I,$s,na,xs,Es,Ca,k,q,ua,X,As,fa,Ps,Ya,oa,Ts,za,O,Za,H,Ss,U,Is,qs,Ma,$,L,ga,K,Hs,wa,Ls,Ra,N,Ns,la,Cs,Ys,Ba,x,C,va,W,zs,ba,Zs,Da,Q,Ja;return Y=new ja({}),B=new ja({}),D=new ra({props:{code:`import timm
model = timm.create_model('adv_inception_v3', pretrained=True)
model.eval()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> timm
<span class="hljs-meta">&gt;&gt;&gt; </span>model = timm.create_model(<span class="hljs-string">&#x27;adv_inception_v3&#x27;</span>, pretrained=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">eval</span>()`}}),J=new ra({props:{code:`import urllib
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
<span class="hljs-meta">&gt;&gt;&gt; </span>tensor = transform(img).unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-comment"># transform and add batch dimension</span>`}}),G=new ra({props:{code:`import torch
with torch.no_grad():
    out = model(tensor)
probabilities = torch.nn.functional.softmax(out[0], dim=0)
print(probabilities.shape)
# prints: torch.Size([1000])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    out = model(tensor)
<span class="hljs-meta">&gt;&gt;&gt; </span>probabilities = torch.nn.functional.softmax(out[<span class="hljs-number">0</span>], dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(probabilities.shape)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prints: torch.Size([1000])</span>`}}),F=new ra({props:{code:`# Get imagenet class mappings
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># [(&#x27;Samoyed&#x27;, 0.6425196528434753), (&#x27;Pomeranian&#x27;, 0.04062102362513542), (&#x27;keeshond&#x27;, 0.03186424449086189), (&#x27;white wolf&#x27;, 0.01739676296710968), (&#x27;Eskimo dog&#x27;, 0.011717947199940681)]</span>`}}),X=new ja({}),O=new ra({props:{code:"model = timm.create_model('adv_inception_v3', pretrained=True, num_classes=NUM_FINETUNE_CLASSES)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model = timm.create_model(<span class="hljs-string">&#x27;adv_inception_v3&#x27;</span>, pretrained=<span class="hljs-literal">True</span>, num_classes=NUM_FINETUNE_CLASSES)'}}),K=new ja({}),W=new ja({}),Q=new ra({props:{code:`@article{DBLP:journals/corr/abs-1804-00097,
  author    = {Alexey Kurakin and
               Ian J. Goodfellow and
               Samy Bengio and
               Yinpeng Dong and
               Fangzhou Liao and
               Ming Liang and
               Tianyu Pang and
               Jun Zhu and
               Xiaolin Hu and
               Cihang Xie and
               Jianyu Wang and
               Zhishuai Zhang and
               Zhou Ren and
               Alan L. Yuille and
               Sangxia Huang and
               Yao Zhao and
               Yuzhe Zhao and
               Zhonglin Han and
               Junjiajia Long and
               Yerkebulan Berdibekov and
               Takuya Akiba and
               Seiya Tokui and
               Motoki Abe},
  title     = {Adversarial Attacks and Defences Competition},
  journal   = {CoRR},
  volume    = {abs/1804.00097},
  year      = {2018},
  url       = {http://arxiv.org/abs/1804.00097},
  archivePrefix = {arXiv},
  eprint    = {1804.00097},
  timestamp = {Thu, 31 Oct 2019 16:31:22 +0100},
  biburl    = {https://dblp.org/rec/journals/corr/abs-1804-00097.bib},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}`,highlighted:`<span class="hljs-comment">@article{DBLP:journals/corr/abs-1804-00097,</span>
  author    = {Alexey Kurakin <span class="hljs-keyword">and</span>
               Ian J. Goodfellow <span class="hljs-keyword">and</span>
               Samy Bengio <span class="hljs-keyword">and</span>
               Yinpeng Dong <span class="hljs-keyword">and</span>
               Fangzhou Liao <span class="hljs-keyword">and</span>
               Ming Liang <span class="hljs-keyword">and</span>
               Tianyu Pang <span class="hljs-keyword">and</span>
               Jun Zhu <span class="hljs-keyword">and</span>
               Xiaolin Hu <span class="hljs-keyword">and</span>
               Cihang Xie <span class="hljs-keyword">and</span>
               Jianyu Wang <span class="hljs-keyword">and</span>
               Zhishuai Zhang <span class="hljs-keyword">and</span>
               Zhou Ren <span class="hljs-keyword">and</span>
               Alan L. Yuille <span class="hljs-keyword">and</span>
               Sangxia Huang <span class="hljs-keyword">and</span>
               Yao Zhao <span class="hljs-keyword">and</span>
               Yuzhe Zhao <span class="hljs-keyword">and</span>
               Zhonglin Han <span class="hljs-keyword">and</span>
               Junjiajia Long <span class="hljs-keyword">and</span>
               Yerkebulan Berdibekov <span class="hljs-keyword">and</span>
               Takuya Akiba <span class="hljs-keyword">and</span>
               Seiya Tokui <span class="hljs-keyword">and</span>
               Motoki Abe},
  title     = {Adversarial Attacks <span class="hljs-keyword">and</span> Defences Competition},
  journal   = {CoRR},
  volume    = {abs/<span class="hljs-number">1804</span>.<span class="hljs-number">00097</span>},
  year      = {<span class="hljs-number">2018</span>},
  url       = {http:<span class="hljs-comment">//arxiv.org/abs/1804.00097},</span>
  archivePrefix = {arXiv},
  eprint    = {<span class="hljs-number">1804</span>.<span class="hljs-number">00097</span>},
  timestamp = {Thu, <span class="hljs-number">31</span> Oct <span class="hljs-number">2019</span> <span class="hljs-number">16</span>:<span class="hljs-number">31</span>:<span class="hljs-number">22</span> +<span class="hljs-number">0100</span>},
  biburl    = {https:<span class="hljs-comment">//dblp.org/rec/journals/corr/abs-1804-00097.bib},</span>
  bibsource = {dblp computer science bibliography, https:<span class="hljs-comment">//dblp.org}</span>
}`}}),{c(){j=n("meta"),_a=m(),_=n("h1"),A=n("a"),ia=n("span"),u(Y.$$.fragment),ss=m(),pa=n("span"),es=i("Adversarial Inception v3"),ya=m(),d=n("p"),ha=n("strong"),ts=i("Inception v3"),ns=i(" is a convolutional neural network architecture from the Inception family that makes several improvements including using "),z=n("a"),os=i("Label Smoothing"),ls=i(", Factorized 7 x 7 convolutions, and the use of an "),Z=n("a"),rs=i("auxiliary classifer"),is=i(" to propagate label information lower down the network (along with the use of batch normalization for layers in the sidehead). The key building block is an "),M=n("a"),ps=i("Inception Module"),hs=i("."),ka=m(),V=n("p"),ms=i("This particular model was trained for study of adversarial examples (adversarial training)."),$a=m(),P=n("p"),cs=i("The weights from this model were ported from "),R=n("a"),ds=i("Tensorflow/Models"),us=i("."),xa=m(),y=n("h2"),T=n("a"),ma=n("span"),u(B.$$.fragment),fs=m(),ca=n("span"),gs=i("How do I use this model on an image?"),Ea=m(),aa=n("p"),ws=i("To load a pretrained model:"),Aa=m(),u(D.$$.fragment),Pa=m(),sa=n("p"),vs=i("To load and preprocess the image:"),Ta=m(),u(J.$$.fragment),Sa=m(),ea=n("p"),bs=i("To get the model predictions:"),Ia=m(),u(G.$$.fragment),qa=m(),ta=n("p"),js=i("To get the top-5 predictions class names:"),Ha=m(),u(F.$$.fragment),La=m(),S=n("p"),_s=i("Replace the model name with the variant you want to use, e.g. "),da=n("code"),ys=i("adv_inception_v3"),ks=i(". You can find the IDs in the model summaries at the top of this page."),Na=m(),I=n("p"),$s=i("To extract image features with this model, follow the "),na=n("a"),xs=i("timm feature extraction examples"),Es=i(", just change the name of the model you want to use."),Ca=m(),k=n("h2"),q=n("a"),ua=n("span"),u(X.$$.fragment),As=m(),fa=n("span"),Ps=i("How do I finetune this model?"),Ya=m(),oa=n("p"),Ts=i("You can finetune any of the pre-trained models just by changing the classifier (the last layer)."),za=m(),u(O.$$.fragment),Za=m(),H=n("p"),Ss=i("To finetune on your own dataset, you have to write a training loop or adapt "),U=n("a"),Is=i(`timm\u2019s training
script`),qs=i(" to use your dataset."),Ma=m(),$=n("h2"),L=n("a"),ga=n("span"),u(K.$$.fragment),Hs=m(),wa=n("span"),Ls=i("How do I train this model?"),Ra=m(),N=n("p"),Ns=i("You can follow the "),la=n("a"),Cs=i("timm recipe scripts"),Ys=i(" for training a new model afresh."),Ba=m(),x=n("h2"),C=n("a"),va=n("span"),u(W.$$.fragment),zs=m(),ba=n("span"),Zs=i("Citation"),Da=m(),u(Q.$$.fragment),this.h()},l(a){const t=je('[data-svelte="svelte-1phssyn"]',document.head);j=o(t,"META",{name:!0,content:!0}),t.forEach(s),_a=c(a),_=o(a,"H1",{class:!0});var Ga=l(_);A=o(Ga,"A",{id:!0,class:!0,href:!0});var Rs=l(A);ia=o(Rs,"SPAN",{});var Bs=l(ia);f(Y.$$.fragment,Bs),Bs.forEach(s),Rs.forEach(s),ss=c(Ga),pa=o(Ga,"SPAN",{});var Ds=l(pa);es=p(Ds,"Adversarial Inception v3"),Ds.forEach(s),Ga.forEach(s),ya=c(a),d=o(a,"P",{});var E=l(d);ha=o(E,"STRONG",{});var Js=l(ha);ts=p(Js,"Inception v3"),Js.forEach(s),ns=p(E," is a convolutional neural network architecture from the Inception family that makes several improvements including using "),z=o(E,"A",{href:!0,rel:!0});var Gs=l(z);os=p(Gs,"Label Smoothing"),Gs.forEach(s),ls=p(E,", Factorized 7 x 7 convolutions, and the use of an "),Z=o(E,"A",{href:!0,rel:!0});var Fs=l(Z);rs=p(Fs,"auxiliary classifer"),Fs.forEach(s),is=p(E," to propagate label information lower down the network (along with the use of batch normalization for layers in the sidehead). The key building block is an "),M=o(E,"A",{href:!0,rel:!0});var Xs=l(M);ps=p(Xs,"Inception Module"),Xs.forEach(s),hs=p(E,"."),E.forEach(s),ka=c(a),V=o(a,"P",{});var Os=l(V);ms=p(Os,"This particular model was trained for study of adversarial examples (adversarial training)."),Os.forEach(s),$a=c(a),P=o(a,"P",{});var Fa=l(P);cs=p(Fa,"The weights from this model were ported from "),R=o(Fa,"A",{href:!0,rel:!0});var Us=l(R);ds=p(Us,"Tensorflow/Models"),Us.forEach(s),us=p(Fa,"."),Fa.forEach(s),xa=c(a),y=o(a,"H2",{class:!0});var Xa=l(y);T=o(Xa,"A",{id:!0,class:!0,href:!0});var Ks=l(T);ma=o(Ks,"SPAN",{});var Ws=l(ma);f(B.$$.fragment,Ws),Ws.forEach(s),Ks.forEach(s),fs=c(Xa),ca=o(Xa,"SPAN",{});var Qs=l(ca);gs=p(Qs,"How do I use this model on an image?"),Qs.forEach(s),Xa.forEach(s),Ea=c(a),aa=o(a,"P",{});var Vs=l(aa);ws=p(Vs,"To load a pretrained model:"),Vs.forEach(s),Aa=c(a),f(D.$$.fragment,a),Pa=c(a),sa=o(a,"P",{});var ae=l(sa);vs=p(ae,"To load and preprocess the image:"),ae.forEach(s),Ta=c(a),f(J.$$.fragment,a),Sa=c(a),ea=o(a,"P",{});var se=l(ea);bs=p(se,"To get the model predictions:"),se.forEach(s),Ia=c(a),f(G.$$.fragment,a),qa=c(a),ta=o(a,"P",{});var ee=l(ta);js=p(ee,"To get the top-5 predictions class names:"),ee.forEach(s),Ha=c(a),f(F.$$.fragment,a),La=c(a),S=o(a,"P",{});var Oa=l(S);_s=p(Oa,"Replace the model name with the variant you want to use, e.g. "),da=o(Oa,"CODE",{});var te=l(da);ys=p(te,"adv_inception_v3"),te.forEach(s),ks=p(Oa,". You can find the IDs in the model summaries at the top of this page."),Oa.forEach(s),Na=c(a),I=o(a,"P",{});var Ua=l(I);$s=p(Ua,"To extract image features with this model, follow the "),na=o(Ua,"A",{href:!0});var ne=l(na);xs=p(ne,"timm feature extraction examples"),ne.forEach(s),Es=p(Ua,", just change the name of the model you want to use."),Ua.forEach(s),Ca=c(a),k=o(a,"H2",{class:!0});var Ka=l(k);q=o(Ka,"A",{id:!0,class:!0,href:!0});var oe=l(q);ua=o(oe,"SPAN",{});var le=l(ua);f(X.$$.fragment,le),le.forEach(s),oe.forEach(s),As=c(Ka),fa=o(Ka,"SPAN",{});var re=l(fa);Ps=p(re,"How do I finetune this model?"),re.forEach(s),Ka.forEach(s),Ya=c(a),oa=o(a,"P",{});var ie=l(oa);Ts=p(ie,"You can finetune any of the pre-trained models just by changing the classifier (the last layer)."),ie.forEach(s),za=c(a),f(O.$$.fragment,a),Za=c(a),H=o(a,"P",{});var Wa=l(H);Ss=p(Wa,"To finetune on your own dataset, you have to write a training loop or adapt "),U=o(Wa,"A",{href:!0,rel:!0});var pe=l(U);Is=p(pe,`timm\u2019s training
script`),pe.forEach(s),qs=p(Wa," to use your dataset."),Wa.forEach(s),Ma=c(a),$=o(a,"H2",{class:!0});var Qa=l($);L=o(Qa,"A",{id:!0,class:!0,href:!0});var he=l(L);ga=o(he,"SPAN",{});var me=l(ga);f(K.$$.fragment,me),me.forEach(s),he.forEach(s),Hs=c(Qa),wa=o(Qa,"SPAN",{});var ce=l(wa);Ls=p(ce,"How do I train this model?"),ce.forEach(s),Qa.forEach(s),Ra=c(a),N=o(a,"P",{});var Va=l(N);Ns=p(Va,"You can follow the "),la=o(Va,"A",{href:!0});var de=l(la);Cs=p(de,"timm recipe scripts"),de.forEach(s),Ys=p(Va," for training a new model afresh."),Va.forEach(s),Ba=c(a),x=o(a,"H2",{class:!0});var as=l(x);C=o(as,"A",{id:!0,class:!0,href:!0});var ue=l(C);va=o(ue,"SPAN",{});var fe=l(va);f(W.$$.fragment,fe),fe.forEach(s),ue.forEach(s),zs=c(as),ba=o(as,"SPAN",{});var ge=l(ba);Zs=p(ge,"Citation"),ge.forEach(s),as.forEach(s),Da=c(a),f(Q.$$.fragment,a),this.h()},h(){h(j,"name","hf:doc:metadata"),h(j,"content",JSON.stringify($e)),h(A,"id","adversarial-inception-v3"),h(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(A,"href","#adversarial-inception-v3"),h(_,"class","relative group"),h(z,"href","https://paperswithcode.com/method/label-smoothing"),h(z,"rel","nofollow"),h(Z,"href","https://paperswithcode.com/method/auxiliary-classifier"),h(Z,"rel","nofollow"),h(M,"href","https://paperswithcode.com/method/inception-v3-module"),h(M,"rel","nofollow"),h(R,"href","https://github.com/tensorflow/models"),h(R,"rel","nofollow"),h(T,"id","how-do-i-use-this-model-on-an-image"),h(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(T,"href","#how-do-i-use-this-model-on-an-image"),h(y,"class","relative group"),h(na,"href","../feature_extraction"),h(q,"id","how-do-i-finetune-this-model"),h(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(q,"href","#how-do-i-finetune-this-model"),h(k,"class","relative group"),h(U,"href","https://github.com/rwightman/pytorch-image-models/blob/master/train.py"),h(U,"rel","nofollow"),h(L,"id","how-do-i-train-this-model"),h(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(L,"href","#how-do-i-train-this-model"),h($,"class","relative group"),h(la,"href","../scripts"),h(C,"id","citation"),h(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(C,"href","#citation"),h(x,"class","relative group")},m(a,t){e(document.head,j),r(a,_a,t),r(a,_,t),e(_,A),e(A,ia),g(Y,ia,null),e(_,ss),e(_,pa),e(pa,es),r(a,ya,t),r(a,d,t),e(d,ha),e(ha,ts),e(d,ns),e(d,z),e(z,os),e(d,ls),e(d,Z),e(Z,rs),e(d,is),e(d,M),e(M,ps),e(d,hs),r(a,ka,t),r(a,V,t),e(V,ms),r(a,$a,t),r(a,P,t),e(P,cs),e(P,R),e(R,ds),e(P,us),r(a,xa,t),r(a,y,t),e(y,T),e(T,ma),g(B,ma,null),e(y,fs),e(y,ca),e(ca,gs),r(a,Ea,t),r(a,aa,t),e(aa,ws),r(a,Aa,t),g(D,a,t),r(a,Pa,t),r(a,sa,t),e(sa,vs),r(a,Ta,t),g(J,a,t),r(a,Sa,t),r(a,ea,t),e(ea,bs),r(a,Ia,t),g(G,a,t),r(a,qa,t),r(a,ta,t),e(ta,js),r(a,Ha,t),g(F,a,t),r(a,La,t),r(a,S,t),e(S,_s),e(S,da),e(da,ys),e(S,ks),r(a,Na,t),r(a,I,t),e(I,$s),e(I,na),e(na,xs),e(I,Es),r(a,Ca,t),r(a,k,t),e(k,q),e(q,ua),g(X,ua,null),e(k,As),e(k,fa),e(fa,Ps),r(a,Ya,t),r(a,oa,t),e(oa,Ts),r(a,za,t),g(O,a,t),r(a,Za,t),r(a,H,t),e(H,Ss),e(H,U),e(U,Is),e(H,qs),r(a,Ma,t),r(a,$,t),e($,L),e(L,ga),g(K,ga,null),e($,Hs),e($,wa),e(wa,Ls),r(a,Ra,t),r(a,N,t),e(N,Ns),e(N,la),e(la,Cs),e(N,Ys),r(a,Ba,t),r(a,x,t),e(x,C),e(C,va),g(W,va,null),e(x,zs),e(x,ba),e(ba,Zs),r(a,Da,t),g(Q,a,t),Ja=!0},p:_e,i(a){Ja||(w(Y.$$.fragment,a),w(B.$$.fragment,a),w(D.$$.fragment,a),w(J.$$.fragment,a),w(G.$$.fragment,a),w(F.$$.fragment,a),w(X.$$.fragment,a),w(O.$$.fragment,a),w(K.$$.fragment,a),w(W.$$.fragment,a),w(Q.$$.fragment,a),Ja=!0)},o(a){v(Y.$$.fragment,a),v(B.$$.fragment,a),v(D.$$.fragment,a),v(J.$$.fragment,a),v(G.$$.fragment,a),v(F.$$.fragment,a),v(X.$$.fragment,a),v(O.$$.fragment,a),v(K.$$.fragment,a),v(W.$$.fragment,a),v(Q.$$.fragment,a),Ja=!1},d(a){s(j),a&&s(_a),a&&s(_),b(Y),a&&s(ya),a&&s(d),a&&s(ka),a&&s(V),a&&s($a),a&&s(P),a&&s(xa),a&&s(y),b(B),a&&s(Ea),a&&s(aa),a&&s(Aa),b(D,a),a&&s(Pa),a&&s(sa),a&&s(Ta),b(J,a),a&&s(Sa),a&&s(ea),a&&s(Ia),b(G,a),a&&s(qa),a&&s(ta),a&&s(Ha),b(F,a),a&&s(La),a&&s(S),a&&s(Na),a&&s(I),a&&s(Ca),a&&s(k),b(X),a&&s(Ya),a&&s(oa),a&&s(za),b(O,a),a&&s(Za),a&&s(H),a&&s(Ma),a&&s($),b(K),a&&s(Ra),a&&s(N),a&&s(Ba),a&&s(x),b(W),a&&s(Da),b(Q,a)}}}const $e={local:"adversarial-inception-v3",sections:[{local:"how-do-i-use-this-model-on-an-image",title:"How do I use this model on an image?"},{local:"how-do-i-finetune-this-model",title:"How do I finetune this model?"},{local:"how-do-i-train-this-model",title:"How do I train this model?"},{local:"citation",title:"Citation"}],title:"Adversarial Inception v3"};function xe(Ms){return ye(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Te extends we{constructor(j){super();ve(this,j,xe,ke,be,{})}}export{Te as default,$e as metadata};
