import{S as pe,i as he,s as me,e as n,k as m,w as d,t as i,M as ce,c as l,d as a,m as c,a as r,x as u,h as p,b as h,G as e,g as o,y as f,L as de,q as g,o as v,B as w,v as ue}from"../../chunks/vendor-hf-doc-builder.js";import{I as ws}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ns}from"../../chunks/CodeBlock-hf-doc-builder.js";function fe(Ha){let b,bs,j,x,ls,R,Vs,os,sa,js,_,rs,aa,ea,C,ta,na,_s,K,la,ys,A,oa,Y,ra,ia,$s,y,P,is,Z,pa,ps,ha,ks,W,ma,Es,M,xs,Q,ca,As,z,Ps,V,da,Ts,B,Is,ss,ua,Ss,D,Ns,T,fa,hs,ga,va,qs,I,wa,as,ba,ja,Hs,$,S,ms,J,_a,cs,ya,Ls,es,$a,Rs,G,Cs,N,ka,X,Ea,xa,Ys,k,q,ds,O,Aa,us,Pa,Zs,H,Ta,ts,Ia,Sa,Ms,E,L,fs,U,Na,gs,qa,zs,F,Bs;return R=new ws({}),Z=new ws({}),M=new ns({props:{code:`import timm
model = timm.create_model('ens_adv_inception_resnet_v2', pretrained=True)
model.eval()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> timm
<span class="hljs-meta">&gt;&gt;&gt; </span>model = timm.create_model(<span class="hljs-string">&#x27;ens_adv_inception_resnet_v2&#x27;</span>, pretrained=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">eval</span>()`}}),z=new ns({props:{code:`import urllib
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
<span class="hljs-meta">&gt;&gt;&gt; </span>tensor = transform(img).unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-comment"># transform and add batch dimension</span>`}}),B=new ns({props:{code:`import torch
with torch.no_grad():
    out = model(tensor)
probabilities = torch.nn.functional.softmax(out[0], dim=0)
print(probabilities.shape)
# prints: torch.Size([1000])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    out = model(tensor)
<span class="hljs-meta">&gt;&gt;&gt; </span>probabilities = torch.nn.functional.softmax(out[<span class="hljs-number">0</span>], dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(probabilities.shape)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prints: torch.Size([1000])</span>`}}),D=new ns({props:{code:`# Get imagenet class mappings
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># [(&#x27;Samoyed&#x27;, 0.6425196528434753), (&#x27;Pomeranian&#x27;, 0.04062102362513542), (&#x27;keeshond&#x27;, 0.03186424449086189), (&#x27;white wolf&#x27;, 0.01739676296710968), (&#x27;Eskimo dog&#x27;, 0.011717947199940681)]</span>`}}),J=new ws({}),G=new ns({props:{code:"model = timm.create_model('ens_adv_inception_resnet_v2', pretrained=True, num_classes=NUM_FINETUNE_CLASSES)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model = timm.create_model(<span class="hljs-string">&#x27;ens_adv_inception_resnet_v2&#x27;</span>, pretrained=<span class="hljs-literal">True</span>, num_classes=NUM_FINETUNE_CLASSES)'}}),O=new ws({}),U=new ws({}),F=new ns({props:{code:`@article{DBLP:journals/corr/abs-1804-00097,
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
}`}}),{c(){b=n("meta"),bs=m(),j=n("h1"),x=n("a"),ls=n("span"),d(R.$$.fragment),Vs=m(),os=n("span"),sa=i("# Ensemble Adversarial Inception ResNet v2"),js=m(),_=n("p"),rs=n("strong"),aa=i("Inception-ResNet-v2"),ea=i(" is a convolutional neural architecture that builds on the Inception family of architectures but incorporates "),C=n("a"),ta=i("residual connections"),na=i(" (replacing the filter concatenation stage of the Inception architecture)."),_s=m(),K=n("p"),la=i("This particular model was trained for study of adversarial examples (adversarial training)."),ys=m(),A=n("p"),oa=i("The weights from this model were ported from "),Y=n("a"),ra=i("Tensorflow/Models"),ia=i("."),$s=m(),y=n("h2"),P=n("a"),is=n("span"),d(Z.$$.fragment),pa=m(),ps=n("span"),ha=i("How do I use this model on an image?"),ks=m(),W=n("p"),ma=i("To load a pretrained model:"),Es=m(),d(M.$$.fragment),xs=m(),Q=n("p"),ca=i("To load and preprocess the image:"),As=m(),d(z.$$.fragment),Ps=m(),V=n("p"),da=i("To get the model predictions:"),Ts=m(),d(B.$$.fragment),Is=m(),ss=n("p"),ua=i("To get the top-5 predictions class names:"),Ss=m(),d(D.$$.fragment),Ns=m(),T=n("p"),fa=i("Replace the model name with the variant you want to use, e.g. "),hs=n("code"),ga=i("ens_adv_inception_resnet_v2"),va=i(". You can find the IDs in the model summaries at the top of this page."),qs=m(),I=n("p"),wa=i("To extract image features with this model, follow the "),as=n("a"),ba=i("timm feature extraction examples"),ja=i(", just change the name of the model you want to use."),Hs=m(),$=n("h2"),S=n("a"),ms=n("span"),d(J.$$.fragment),_a=m(),cs=n("span"),ya=i("How do I finetune this model?"),Ls=m(),es=n("p"),$a=i("You can finetune any of the pre-trained models just by changing the classifier (the last layer)."),Rs=m(),d(G.$$.fragment),Cs=m(),N=n("p"),ka=i("To finetune on your own dataset, you have to write a training loop or adapt "),X=n("a"),Ea=i(`timm\u2019s training
script`),xa=i(" to use your dataset."),Ys=m(),k=n("h2"),q=n("a"),ds=n("span"),d(O.$$.fragment),Aa=m(),us=n("span"),Pa=i("How do I train this model?"),Zs=m(),H=n("p"),Ta=i("You can follow the "),ts=n("a"),Ia=i("timm recipe scripts"),Sa=i(" for training a new model afresh."),Ms=m(),E=n("h2"),L=n("a"),fs=n("span"),d(U.$$.fragment),Na=m(),gs=n("span"),qa=i("Citation"),zs=m(),d(F.$$.fragment),this.h()},l(s){const t=ce('[data-svelte="svelte-1phssyn"]',document.head);b=l(t,"META",{name:!0,content:!0}),t.forEach(a),bs=c(s),j=l(s,"H1",{class:!0});var Ds=r(j);x=l(Ds,"A",{id:!0,class:!0,href:!0});var La=r(x);ls=l(La,"SPAN",{});var Ra=r(ls);u(R.$$.fragment,Ra),Ra.forEach(a),La.forEach(a),Vs=c(Ds),os=l(Ds,"SPAN",{});var Ca=r(os);sa=p(Ca,"# Ensemble Adversarial Inception ResNet v2"),Ca.forEach(a),Ds.forEach(a),js=c(s),_=l(s,"P",{});var vs=r(_);rs=l(vs,"STRONG",{});var Ya=r(rs);aa=p(Ya,"Inception-ResNet-v2"),Ya.forEach(a),ea=p(vs," is a convolutional neural architecture that builds on the Inception family of architectures but incorporates "),C=l(vs,"A",{href:!0,rel:!0});var Za=r(C);ta=p(Za,"residual connections"),Za.forEach(a),na=p(vs," (replacing the filter concatenation stage of the Inception architecture)."),vs.forEach(a),_s=c(s),K=l(s,"P",{});var Ma=r(K);la=p(Ma,"This particular model was trained for study of adversarial examples (adversarial training)."),Ma.forEach(a),ys=c(s),A=l(s,"P",{});var Js=r(A);oa=p(Js,"The weights from this model were ported from "),Y=l(Js,"A",{href:!0,rel:!0});var za=r(Y);ra=p(za,"Tensorflow/Models"),za.forEach(a),ia=p(Js,"."),Js.forEach(a),$s=c(s),y=l(s,"H2",{class:!0});var Gs=r(y);P=l(Gs,"A",{id:!0,class:!0,href:!0});var Ba=r(P);is=l(Ba,"SPAN",{});var Da=r(is);u(Z.$$.fragment,Da),Da.forEach(a),Ba.forEach(a),pa=c(Gs),ps=l(Gs,"SPAN",{});var Ja=r(ps);ha=p(Ja,"How do I use this model on an image?"),Ja.forEach(a),Gs.forEach(a),ks=c(s),W=l(s,"P",{});var Ga=r(W);ma=p(Ga,"To load a pretrained model:"),Ga.forEach(a),Es=c(s),u(M.$$.fragment,s),xs=c(s),Q=l(s,"P",{});var Xa=r(Q);ca=p(Xa,"To load and preprocess the image:"),Xa.forEach(a),As=c(s),u(z.$$.fragment,s),Ps=c(s),V=l(s,"P",{});var Oa=r(V);da=p(Oa,"To get the model predictions:"),Oa.forEach(a),Ts=c(s),u(B.$$.fragment,s),Is=c(s),ss=l(s,"P",{});var Ua=r(ss);ua=p(Ua,"To get the top-5 predictions class names:"),Ua.forEach(a),Ss=c(s),u(D.$$.fragment,s),Ns=c(s),T=l(s,"P",{});var Xs=r(T);fa=p(Xs,"Replace the model name with the variant you want to use, e.g. "),hs=l(Xs,"CODE",{});var Fa=r(hs);ga=p(Fa,"ens_adv_inception_resnet_v2"),Fa.forEach(a),va=p(Xs,". You can find the IDs in the model summaries at the top of this page."),Xs.forEach(a),qs=c(s),I=l(s,"P",{});var Os=r(I);wa=p(Os,"To extract image features with this model, follow the "),as=l(Os,"A",{href:!0});var Ka=r(as);ba=p(Ka,"timm feature extraction examples"),Ka.forEach(a),ja=p(Os,", just change the name of the model you want to use."),Os.forEach(a),Hs=c(s),$=l(s,"H2",{class:!0});var Us=r($);S=l(Us,"A",{id:!0,class:!0,href:!0});var Wa=r(S);ms=l(Wa,"SPAN",{});var Qa=r(ms);u(J.$$.fragment,Qa),Qa.forEach(a),Wa.forEach(a),_a=c(Us),cs=l(Us,"SPAN",{});var Va=r(cs);ya=p(Va,"How do I finetune this model?"),Va.forEach(a),Us.forEach(a),Ls=c(s),es=l(s,"P",{});var se=r(es);$a=p(se,"You can finetune any of the pre-trained models just by changing the classifier (the last layer)."),se.forEach(a),Rs=c(s),u(G.$$.fragment,s),Cs=c(s),N=l(s,"P",{});var Fs=r(N);ka=p(Fs,"To finetune on your own dataset, you have to write a training loop or adapt "),X=l(Fs,"A",{href:!0,rel:!0});var ae=r(X);Ea=p(ae,`timm\u2019s training
script`),ae.forEach(a),xa=p(Fs," to use your dataset."),Fs.forEach(a),Ys=c(s),k=l(s,"H2",{class:!0});var Ks=r(k);q=l(Ks,"A",{id:!0,class:!0,href:!0});var ee=r(q);ds=l(ee,"SPAN",{});var te=r(ds);u(O.$$.fragment,te),te.forEach(a),ee.forEach(a),Aa=c(Ks),us=l(Ks,"SPAN",{});var ne=r(us);Pa=p(ne,"How do I train this model?"),ne.forEach(a),Ks.forEach(a),Zs=c(s),H=l(s,"P",{});var Ws=r(H);Ta=p(Ws,"You can follow the "),ts=l(Ws,"A",{href:!0});var le=r(ts);Ia=p(le,"timm recipe scripts"),le.forEach(a),Sa=p(Ws," for training a new model afresh."),Ws.forEach(a),Ms=c(s),E=l(s,"H2",{class:!0});var Qs=r(E);L=l(Qs,"A",{id:!0,class:!0,href:!0});var oe=r(L);fs=l(oe,"SPAN",{});var re=r(fs);u(U.$$.fragment,re),re.forEach(a),oe.forEach(a),Na=c(Qs),gs=l(Qs,"SPAN",{});var ie=r(gs);qa=p(ie,"Citation"),ie.forEach(a),Qs.forEach(a),zs=c(s),u(F.$$.fragment,s),this.h()},h(){h(b,"name","hf:doc:metadata"),h(b,"content",JSON.stringify(ge)),h(x,"id","ensemble-adversarial-inception-resnet-v2"),h(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(x,"href","#ensemble-adversarial-inception-resnet-v2"),h(j,"class","relative group"),h(C,"href","https://paperswithcode.com/method/residual-connection"),h(C,"rel","nofollow"),h(Y,"href","https://github.com/tensorflow/models"),h(Y,"rel","nofollow"),h(P,"id","how-do-i-use-this-model-on-an-image"),h(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(P,"href","#how-do-i-use-this-model-on-an-image"),h(y,"class","relative group"),h(as,"href","../feature_extraction"),h(S,"id","how-do-i-finetune-this-model"),h(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(S,"href","#how-do-i-finetune-this-model"),h($,"class","relative group"),h(X,"href","https://github.com/rwightman/pytorch-image-models/blob/master/train.py"),h(X,"rel","nofollow"),h(q,"id","how-do-i-train-this-model"),h(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(q,"href","#how-do-i-train-this-model"),h(k,"class","relative group"),h(ts,"href","../scripts"),h(L,"id","citation"),h(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(L,"href","#citation"),h(E,"class","relative group")},m(s,t){e(document.head,b),o(s,bs,t),o(s,j,t),e(j,x),e(x,ls),f(R,ls,null),e(j,Vs),e(j,os),e(os,sa),o(s,js,t),o(s,_,t),e(_,rs),e(rs,aa),e(_,ea),e(_,C),e(C,ta),e(_,na),o(s,_s,t),o(s,K,t),e(K,la),o(s,ys,t),o(s,A,t),e(A,oa),e(A,Y),e(Y,ra),e(A,ia),o(s,$s,t),o(s,y,t),e(y,P),e(P,is),f(Z,is,null),e(y,pa),e(y,ps),e(ps,ha),o(s,ks,t),o(s,W,t),e(W,ma),o(s,Es,t),f(M,s,t),o(s,xs,t),o(s,Q,t),e(Q,ca),o(s,As,t),f(z,s,t),o(s,Ps,t),o(s,V,t),e(V,da),o(s,Ts,t),f(B,s,t),o(s,Is,t),o(s,ss,t),e(ss,ua),o(s,Ss,t),f(D,s,t),o(s,Ns,t),o(s,T,t),e(T,fa),e(T,hs),e(hs,ga),e(T,va),o(s,qs,t),o(s,I,t),e(I,wa),e(I,as),e(as,ba),e(I,ja),o(s,Hs,t),o(s,$,t),e($,S),e(S,ms),f(J,ms,null),e($,_a),e($,cs),e(cs,ya),o(s,Ls,t),o(s,es,t),e(es,$a),o(s,Rs,t),f(G,s,t),o(s,Cs,t),o(s,N,t),e(N,ka),e(N,X),e(X,Ea),e(N,xa),o(s,Ys,t),o(s,k,t),e(k,q),e(q,ds),f(O,ds,null),e(k,Aa),e(k,us),e(us,Pa),o(s,Zs,t),o(s,H,t),e(H,Ta),e(H,ts),e(ts,Ia),e(H,Sa),o(s,Ms,t),o(s,E,t),e(E,L),e(L,fs),f(U,fs,null),e(E,Na),e(E,gs),e(gs,qa),o(s,zs,t),f(F,s,t),Bs=!0},p:de,i(s){Bs||(g(R.$$.fragment,s),g(Z.$$.fragment,s),g(M.$$.fragment,s),g(z.$$.fragment,s),g(B.$$.fragment,s),g(D.$$.fragment,s),g(J.$$.fragment,s),g(G.$$.fragment,s),g(O.$$.fragment,s),g(U.$$.fragment,s),g(F.$$.fragment,s),Bs=!0)},o(s){v(R.$$.fragment,s),v(Z.$$.fragment,s),v(M.$$.fragment,s),v(z.$$.fragment,s),v(B.$$.fragment,s),v(D.$$.fragment,s),v(J.$$.fragment,s),v(G.$$.fragment,s),v(O.$$.fragment,s),v(U.$$.fragment,s),v(F.$$.fragment,s),Bs=!1},d(s){a(b),s&&a(bs),s&&a(j),w(R),s&&a(js),s&&a(_),s&&a(_s),s&&a(K),s&&a(ys),s&&a(A),s&&a($s),s&&a(y),w(Z),s&&a(ks),s&&a(W),s&&a(Es),w(M,s),s&&a(xs),s&&a(Q),s&&a(As),w(z,s),s&&a(Ps),s&&a(V),s&&a(Ts),w(B,s),s&&a(Is),s&&a(ss),s&&a(Ss),w(D,s),s&&a(Ns),s&&a(T),s&&a(qs),s&&a(I),s&&a(Hs),s&&a($),w(J),s&&a(Ls),s&&a(es),s&&a(Rs),w(G,s),s&&a(Cs),s&&a(N),s&&a(Ys),s&&a(k),w(O),s&&a(Zs),s&&a(H),s&&a(Ms),s&&a(E),w(U),s&&a(zs),w(F,s)}}}const ge={local:"ensemble-adversarial-inception-resnet-v2",sections:[{local:"how-do-i-use-this-model-on-an-image",title:"How do I use this model on an image?"},{local:"how-do-i-finetune-this-model",title:"How do I finetune this model?"},{local:"how-do-i-train-this-model",title:"How do I train this model?"},{local:"citation",title:"Citation"}],title:"# Ensemble Adversarial Inception ResNet v2"};function ve(Ha){return ue(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class _e extends pe{constructor(b){super();he(this,b,ve,fe,me,{})}}export{_e as default,ge as metadata};
