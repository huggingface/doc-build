import{S as fo,i as uo,s as go,e as a,k as h,w as g,t as o,N as _o,c as l,d as s,m as p,a as i,x as _,h as r,b as n,P as Be,G as t,g as c,y as b,L as bo,q as v,o as w,B as y,v as vo}from"../chunks/vendor-hf-doc-builder.js";import{I as Re}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as ke}from"../chunks/CodeBlock-hf-doc-builder.js";function wo(ml){let k,yt,A,G,ze,Q,bs,Ye,vs,$t,P,Je,ws,ys,Z,$s,Es,Et,j,xs,Ve,js,ks,ee,As,Ps,xt,Ae,Is,jt,$,te,Hs,Pe,qs,Ts,Cs,se,Ss,We,Ls,Os,Ds,ae,Gs,Ie,Ns,Fs,Us,le,Ms,He,Bs,Rs,kt,I,N,Ke,oe,zs,Xe,Ys,At,d,Js,Qe,Vs,Ws,Ze,Ks,Xs,et,Qs,Zs,tt,ea,ta,st,sa,aa,Pt,re,It,F,la,at,oa,ra,Ht,H,qe,cl,ia,Te,hl,qt,q,Ce,pl,na,Se,fl,Tt,T,U,lt,ie,ma,ot,ca,Ct,M,ha,rt,pa,fa,St,ne,Lt,Le,da,Ot,me,Dt,C,B,it,ce,ua,nt,ga,Gt,R,_a,mt,ba,va,Nt,Oe,wa,Ft,he,Ut,z,ya,ct,$a,Ea,Mt,pe,Bt,Y,xa,ht,ja,ka,Rt,fe,zt,S,J,pt,de,Aa,ft,Pa,Yt,f,Ia,dt,Ha,qa,De,Ta,Ca,ue,Sa,La,ut,Oa,Da,Ge,Ga,Na,gt,Fa,Ua,Jt,L,Ne,dl,Ma,Fe,ul,Vt,ge,Wt,O,V,_t,_e,Ba,bt,Ra,Kt,E,be,za,ve,Ya,Ja,Va,we,Wa,ye,Ka,Xa,Qa,D,Za,$e,el,tl,Ee,sl,al,ll,W,xe,ol,rl,je,il,nl,Xt;return Q=new Re({}),oe=new Re({}),re=new ke({props:{code:`import timm

# Loading https://huggingface.co/timm/eca_nfnet_l0
model = timm.create_model("hf_hub:timm/eca_nfnet_l0", pretrained=True)`,highlighted:`<span class="hljs-keyword">import</span> timm

<span class="hljs-comment"># Loading https://huggingface.co/timm/eca_nfnet_l0</span>
model = timm.create_model(<span class="hljs-string">&quot;hf_hub:timm/eca_nfnet_l0&quot;</span>, pretrained=<span class="hljs-literal">True</span>)`}}),ie=new Re({}),ne=new ke({props:{code:`import timm
import torch
from PIL import Image
from timm.data import resolve_data_config
from timm.data.transforms_factory import create_transform

# Load from Hub \u{1F525}
model = timm.create_model(
    'hf_hub:nateraw/resnet50-oxford-iiit-pet',
    pretrained=True
)

# Set model to eval mode for inference
model.eval()

# Create Transform
transform = create_transform(**resolve_data_config(model.pretrained_cfg, model=model))

# Get the labels from the model config
labels = model.pretrained_cfg['labels']
top_k = min(len(labels), 5)

# Use your own image file here...
image = Image.open('boxer.jpg').convert('RGB')

# Process PIL image with transforms and add a batch dimension
x = transform(image).unsqueeze(0)

# Pass inputs to model forward function to get outputs
out = model(x)

# Apply softmax to get predicted probabilities for each class
probabilities = torch.nn.functional.softmax(out[0], dim=0)

# Grab the values and indices of top 5 predicted classes
values, indices = torch.topk(probabilities, top_k)

# Prepare a nice dict of top k predictions
predictions = [
    {"label": labels[i], "score": v.item()}
    for i, v in zip(indices, values)
]
print(predictions)`,highlighted:`<span class="hljs-keyword">import</span> timm
<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-keyword">from</span> timm.data <span class="hljs-keyword">import</span> resolve_data_config
<span class="hljs-keyword">from</span> timm.data.transforms_factory <span class="hljs-keyword">import</span> create_transform

<span class="hljs-comment"># Load from Hub \u{1F525}</span>
model = timm.create_model(
    <span class="hljs-string">&#x27;hf_hub:nateraw/resnet50-oxford-iiit-pet&#x27;</span>,
    pretrained=<span class="hljs-literal">True</span>
)

<span class="hljs-comment"># Set model to eval mode for inference</span>
model.<span class="hljs-built_in">eval</span>()

<span class="hljs-comment"># Create Transform</span>
transform = create_transform(**resolve_data_config(model.pretrained_cfg, model=model))

<span class="hljs-comment"># Get the labels from the model config</span>
labels = model.pretrained_cfg[<span class="hljs-string">&#x27;labels&#x27;</span>]
top_k = <span class="hljs-built_in">min</span>(<span class="hljs-built_in">len</span>(labels), <span class="hljs-number">5</span>)

<span class="hljs-comment"># Use your own image file here...</span>
image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&#x27;boxer.jpg&#x27;</span>).convert(<span class="hljs-string">&#x27;RGB&#x27;</span>)

<span class="hljs-comment"># Process PIL image with transforms and add a batch dimension</span>
x = transform(image).unsqueeze(<span class="hljs-number">0</span>)

<span class="hljs-comment"># Pass inputs to model forward function to get outputs</span>
out = model(x)

<span class="hljs-comment"># Apply softmax to get predicted probabilities for each class</span>
probabilities = torch.nn.functional.softmax(out[<span class="hljs-number">0</span>], dim=<span class="hljs-number">0</span>)

<span class="hljs-comment"># Grab the values and indices of top 5 predicted classes</span>
values, indices = torch.topk(probabilities, top_k)

<span class="hljs-comment"># Prepare a nice dict of top k predictions</span>
predictions = [
    {<span class="hljs-string">&quot;label&quot;</span>: labels[i], <span class="hljs-string">&quot;score&quot;</span>: v.item()}
    <span class="hljs-keyword">for</span> i, v <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(indices, values)
]
<span class="hljs-built_in">print</span>(predictions)`}}),me=new ke({props:{code:`[
    {'label': 'american_pit_bull_terrier', 'score': 0.9999998807907104},
    {'label': 'staffordshire_bull_terrier', 'score': 1.0000000149011612e-07},
    {'label': 'miniature_pinscher', 'score': 1.0000000149011612e-07},
    {'label': 'chihuahua', 'score': 1.0000000149011612e-07},
    {'label': 'beagle', 'score': 1.0000000149011612e-07}
]`,highlighted:`[
    {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;american_pit_bull_terrier&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9999998807907104</span>},
    {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;staffordshire_bull_terrier&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">1.0000000149011612e-07</span>},
    {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;miniature_pinscher&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">1.0000000149011612e-07</span>},
    {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;chihuahua&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">1.0000000149011612e-07</span>},
    {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;beagle&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">1.0000000149011612e-07</span>}
]`}}),ce=new Re({}),he=new ke({props:{code:`python -m pip install huggingface_hub
huggingface-cli login`,highlighted:`python -m pip install huggingface_hub
huggingface-cli login`}}),pe=new ke({props:{code:`from huggingface_hub import notebook_login
notebook_login()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login
notebook_login()`}}),fe=new ke({props:{code:`import timm

# Build or load a model, e.g. timm's pretrained resnet18
model = timm.create_model('resnet18', pretrained=True, num_classes=4)

###########################
# [Fine tune your model...]
###########################

# Push it to the \u{1F917} Hub
timm.models.hub.push_to_hf_hub(
    model,
    'resnet18-random-classifier',
    model_config={'labels': ['a', 'b', 'c', 'd']}
)

# Load your model from the Hub
model_reloaded = timm.create_model(
    'hf_hub:<your-username>/resnet18-random-classifier',
    pretrained=True
)`,highlighted:`<span class="hljs-keyword">import</span> timm

<span class="hljs-comment"># Build or load a model, e.g. timm&#x27;s pretrained resnet18</span>
model = timm.create_model(<span class="hljs-string">&#x27;resnet18&#x27;</span>, pretrained=<span class="hljs-literal">True</span>, num_classes=<span class="hljs-number">4</span>)

<span class="hljs-comment">###########################</span>
<span class="hljs-comment"># [Fine tune your model...]</span>
<span class="hljs-comment">###########################</span>

<span class="hljs-comment"># Push it to the \u{1F917} Hub</span>
timm.models.hub.push_to_hf_hub(
    model,
    <span class="hljs-string">&#x27;resnet18-random-classifier&#x27;</span>,
    model_config={<span class="hljs-string">&#x27;labels&#x27;</span>: [<span class="hljs-string">&#x27;a&#x27;</span>, <span class="hljs-string">&#x27;b&#x27;</span>, <span class="hljs-string">&#x27;c&#x27;</span>, <span class="hljs-string">&#x27;d&#x27;</span>]}
)

<span class="hljs-comment"># Load your model from the Hub</span>
model_reloaded = timm.create_model(
    <span class="hljs-string">&#x27;hf_hub:&lt;your-username&gt;/resnet18-random-classifier&#x27;</span>,
    pretrained=<span class="hljs-literal">True</span>
)`}}),de=new Re({}),ge=new ke({props:{code:`curl https://api-inference.huggingface.co/models/nateraw/timm-resnet50-beans \\
        -X POST \\
        --data-binary '@beans.jpeg' \\
        -H "Authorization: Bearer {$HF_API_TOKEN}"
# [{"label":"angular_leaf_spot","score":0.9845947027206421},{"label":"bean_rust","score":0.01368315052241087},{"label":"healthy","score":0.001722085871733725}]`,highlighted:`curl https://api-inference.huggingface.co/models/nateraw/timm-resnet50-beans \\
        -X POST \\
        --data-binary <span class="hljs-string">&#x27;@beans.jpeg&#x27;</span> \\
        -H <span class="hljs-string">&quot;Authorization: Bearer {<span class="hljs-variable">$HF_API_TOKEN</span>}&quot;</span>
<span class="hljs-comment"># [{&quot;label&quot;:&quot;angular_leaf_spot&quot;,&quot;score&quot;:0.9845947027206421},{&quot;label&quot;:&quot;bean_rust&quot;,&quot;score&quot;:0.01368315052241087},{&quot;label&quot;:&quot;healthy&quot;,&quot;score&quot;:0.001722085871733725}]</span>`}}),_e=new Re({}),{c(){k=a("meta"),yt=h(),A=a("h1"),G=a("a"),ze=a("span"),g(Q.$$.fragment),bs=h(),Ye=a("span"),vs=o("Using timm at Hugging Face"),$t=h(),P=a("p"),Je=a("code"),ws=o("timm"),ys=o(", also known as "),Z=a("a"),$s=o("pytorch-image-models"),Es=o(", is an open-source collection of state-of-the-art PyTorch image models, pretrained weights, and utility scripts for training, inference, and validation."),Et=h(),j=a("p"),xs=o("You can find a number of "),Ve=a("code"),js=o("timm"),ks=o(" models using the filters on the left of the "),ee=a("a"),As=o("models page"),Ps=o("."),xt=h(),Ae=a("p"),Is=o("All models on the Hub come with several useful features:"),jt=h(),$=a("ol"),te=a("li"),Hs=o("An automatically generated model card, which model authors can complete with "),Pe=a("a"),qs=o("information about their model"),Ts=o("."),Cs=h(),se=a("li"),Ss=o("Metadata tags help users discover the relevant "),We=a("code"),Ls=o("timm"),Os=o(" models."),Ds=h(),ae=a("li"),Gs=o("An "),Ie=a("a"),Ns=o("interactive widget"),Fs=o(" you can use to play with the model directly in the browser."),Us=h(),le=a("li"),Ms=o("An "),He=a("a"),Bs=o("Inference API"),Rs=o(" that allows users to make inference requests."),kt=h(),I=a("h2"),N=a("a"),Ke=a("span"),g(oe.$$.fragment),zs=h(),Xe=a("span"),Ys=o("Using existing models from the Hub"),At=h(),d=a("p"),Js=o("Any "),Qe=a("code"),Vs=o("timm"),Ws=o(" model from the Hugging Face Hub can be loaded with a single line of code as long as you have "),Ze=a("code"),Ks=o("timm"),Xs=o(" installed! Once you\u2019ve selected a model from the Hub, pass the model\u2019s ID prefixed with "),et=a("code"),Qs=o("hf_hub:"),Zs=o(" to "),tt=a("code"),ea=o("timm"),ta=o("\u2019s "),st=a("code"),sa=o("create_model"),aa=o(" method to download and instantiate the model."),Pt=h(),g(re.$$.fragment),It=h(),F=a("p"),la=o("If you want to see how to load a specific model, you can click "),at=a("strong"),oa=o("Use in timm"),ra=o(" and you will be given a working snippet to load it!"),Ht=h(),H=a("div"),qe=a("img"),ia=h(),Te=a("img"),qt=h(),q=a("div"),Ce=a("img"),na=h(),Se=a("img"),Tt=h(),T=a("h3"),U=a("a"),lt=a("span"),g(ie.$$.fragment),ma=h(),ot=a("span"),ca=o("Inference"),Ct=h(),M=a("p"),ha=o("The snippet below shows how you can perform inference on a "),rt=a("code"),pa=o("timm"),fa=o(" model loaded from the Hub:"),St=h(),g(ne.$$.fragment),Lt=h(),Le=a("p"),da=o("This should leave you with a list of predictions, like this:"),Ot=h(),g(me.$$.fragment),Dt=h(),C=a("h2"),B=a("a"),it=a("span"),g(ce.$$.fragment),ua=h(),nt=a("span"),ga=o("Sharing your models"),Gt=h(),R=a("p"),_a=o("You can share your "),mt=a("code"),ba=o("timm"),va=o(" models directly to the Hugging Face Hub. This will publish a new version of your model to the Hugging Face Hub, creating a model repo for you if it doesn\u2019t already exist."),Nt=h(),Oe=a("p"),wa=o("Before pushing a model, make sure that you\u2019ve logged in to Hugging Face:"),Ft=h(),g(he.$$.fragment),Ut=h(),z=a("p"),ya=o("Alternatively, if you prefer working from a Jupyter or Colaboratory notebook, once you\u2019ve installed "),ct=a("code"),$a=o("huggingface_hub"),Ea=o(" you can log in with:"),Mt=h(),g(pe.$$.fragment),Bt=h(),Y=a("p"),xa=o("Then, push your model using the "),ht=a("code"),ja=o("push_to_hf_hub"),ka=o(" method:"),Rt=h(),g(fe.$$.fragment),zt=h(),S=a("h2"),J=a("a"),pt=a("span"),g(de.$$.fragment),Aa=h(),ft=a("span"),Pa=o("Inference Widget and API"),Yt=h(),f=a("p"),Ia=o("All "),dt=a("code"),Ha=o("timm"),qa=o(" models on the Hub are automatically equipped with an "),De=a("a"),Ta=o("inference widget"),Ca=o(", pictured below for "),ue=a("a"),Sa=o("nateraw/timm-resnet50-beans"),La=o(". Additionally, "),ut=a("code"),Oa=o("timm"),Da=o(" models are available through the "),Ge=a("a"),Ga=o("Inference API"),Na=o(", which you can access through HTTP with cURL, Python\u2019s "),gt=a("code"),Fa=o("requests"),Ua=o(" library, or your preferred method for making network requests."),Jt=h(),L=a("div"),Ne=a("img"),Ma=h(),Fe=a("img"),Vt=h(),g(ge.$$.fragment),Wt=h(),O=a("h2"),V=a("a"),_t=a("span"),g(_e.$$.fragment),Ba=h(),bt=a("span"),Ra=o("Additional resources"),Kt=h(),E=a("ul"),be=a("li"),za=o("timm (pytorch-image-models) "),ve=a("a"),Ya=o("GitHub Repo"),Ja=o("."),Va=h(),we=a("li"),Wa=o("timm "),ye=a("a"),Ka=o("documentation"),Xa=o("."),Qa=h(),D=a("li"),Za=o("Additional documentation at "),$e=a("a"),el=o("timmdocs"),tl=o(" by "),Ee=a("a"),sl=o("Aman Arora"),al=o("."),ll=h(),W=a("li"),xe=a("a"),ol=o("Getting Started with PyTorch Image Models (timm): A Practitioner\u2019s Guide"),rl=o(" by "),je=a("a"),il=o("Chris Hughes"),nl=o("."),this.h()},l(e){const m=_o('[data-svelte="svelte-1phssyn"]',document.head);k=l(m,"META",{name:!0,content:!0}),m.forEach(s),yt=p(e),A=l(e,"H1",{class:!0});var Qt=i(A);G=l(Qt,"A",{id:!0,class:!0,href:!0});var gl=i(G);ze=l(gl,"SPAN",{});var _l=i(ze);_(Q.$$.fragment,_l),_l.forEach(s),gl.forEach(s),bs=p(Qt),Ye=l(Qt,"SPAN",{});var bl=i(Ye);vs=r(bl,"Using timm at Hugging Face"),bl.forEach(s),Qt.forEach(s),$t=p(e),P=l(e,"P",{});var vt=i(P);Je=l(vt,"CODE",{});var vl=i(Je);ws=r(vl,"timm"),vl.forEach(s),ys=r(vt,", also known as "),Z=l(vt,"A",{href:!0,rel:!0});var wl=i(Z);$s=r(wl,"pytorch-image-models"),wl.forEach(s),Es=r(vt,", is an open-source collection of state-of-the-art PyTorch image models, pretrained weights, and utility scripts for training, inference, and validation."),vt.forEach(s),Et=p(e),j=l(e,"P",{});var Ue=i(j);xs=r(Ue,"You can find a number of "),Ve=l(Ue,"CODE",{});var yl=i(Ve);js=r(yl,"timm"),yl.forEach(s),ks=r(Ue," models using the filters on the left of the "),ee=l(Ue,"A",{href:!0,rel:!0});var $l=i(ee);As=r($l,"models page"),$l.forEach(s),Ps=r(Ue,"."),Ue.forEach(s),xt=p(e),Ae=l(e,"P",{});var El=i(Ae);Is=r(El,"All models on the Hub come with several useful features:"),El.forEach(s),jt=p(e),$=l(e,"OL",{});var K=i($);te=l(K,"LI",{});var Zt=i(te);Hs=r(Zt,"An automatically generated model card, which model authors can complete with "),Pe=l(Zt,"A",{href:!0});var xl=i(Pe);qs=r(xl,"information about their model"),xl.forEach(s),Ts=r(Zt,"."),Zt.forEach(s),Cs=p(K),se=l(K,"LI",{});var es=i(se);Ss=r(es,"Metadata tags help users discover the relevant "),We=l(es,"CODE",{});var jl=i(We);Ls=r(jl,"timm"),jl.forEach(s),Os=r(es," models."),es.forEach(s),Ds=p(K),ae=l(K,"LI",{});var ts=i(ae);Gs=r(ts,"An "),Ie=l(ts,"A",{href:!0});var kl=i(Ie);Ns=r(kl,"interactive widget"),kl.forEach(s),Fs=r(ts," you can use to play with the model directly in the browser."),ts.forEach(s),Us=p(K),le=l(K,"LI",{});var ss=i(le);Ms=r(ss,"An "),He=l(ss,"A",{href:!0});var Al=i(He);Bs=r(Al,"Inference API"),Al.forEach(s),Rs=r(ss," that allows users to make inference requests."),ss.forEach(s),K.forEach(s),kt=p(e),I=l(e,"H2",{class:!0});var as=i(I);N=l(as,"A",{id:!0,class:!0,href:!0});var Pl=i(N);Ke=l(Pl,"SPAN",{});var Il=i(Ke);_(oe.$$.fragment,Il),Il.forEach(s),Pl.forEach(s),zs=p(as),Xe=l(as,"SPAN",{});var Hl=i(Xe);Ys=r(Hl,"Using existing models from the Hub"),Hl.forEach(s),as.forEach(s),At=p(e),d=l(e,"P",{});var x=i(d);Js=r(x,"Any "),Qe=l(x,"CODE",{});var ql=i(Qe);Vs=r(ql,"timm"),ql.forEach(s),Ws=r(x," model from the Hugging Face Hub can be loaded with a single line of code as long as you have "),Ze=l(x,"CODE",{});var Tl=i(Ze);Ks=r(Tl,"timm"),Tl.forEach(s),Xs=r(x," installed! Once you\u2019ve selected a model from the Hub, pass the model\u2019s ID prefixed with "),et=l(x,"CODE",{});var Cl=i(et);Qs=r(Cl,"hf_hub:"),Cl.forEach(s),Zs=r(x," to "),tt=l(x,"CODE",{});var Sl=i(tt);ea=r(Sl,"timm"),Sl.forEach(s),ta=r(x,"\u2019s "),st=l(x,"CODE",{});var Ll=i(st);sa=r(Ll,"create_model"),Ll.forEach(s),aa=r(x," method to download and instantiate the model."),x.forEach(s),Pt=p(e),_(re.$$.fragment,e),It=p(e),F=l(e,"P",{});var ls=i(F);la=r(ls,"If you want to see how to load a specific model, you can click "),at=l(ls,"STRONG",{});var Ol=i(at);oa=r(Ol,"Use in timm"),Ol.forEach(s),ra=r(ls," and you will be given a working snippet to load it!"),ls.forEach(s),Ht=p(e),H=l(e,"DIV",{class:!0});var os=i(H);qe=l(os,"IMG",{class:!0,src:!0}),ia=p(os),Te=l(os,"IMG",{class:!0,src:!0}),os.forEach(s),qt=p(e),q=l(e,"DIV",{class:!0});var rs=i(q);Ce=l(rs,"IMG",{class:!0,src:!0}),na=p(rs),Se=l(rs,"IMG",{class:!0,src:!0}),rs.forEach(s),Tt=p(e),T=l(e,"H3",{class:!0});var is=i(T);U=l(is,"A",{id:!0,class:!0,href:!0});var Dl=i(U);lt=l(Dl,"SPAN",{});var Gl=i(lt);_(ie.$$.fragment,Gl),Gl.forEach(s),Dl.forEach(s),ma=p(is),ot=l(is,"SPAN",{});var Nl=i(ot);ca=r(Nl,"Inference"),Nl.forEach(s),is.forEach(s),Ct=p(e),M=l(e,"P",{});var ns=i(M);ha=r(ns,"The snippet below shows how you can perform inference on a "),rt=l(ns,"CODE",{});var Fl=i(rt);pa=r(Fl,"timm"),Fl.forEach(s),fa=r(ns," model loaded from the Hub:"),ns.forEach(s),St=p(e),_(ne.$$.fragment,e),Lt=p(e),Le=l(e,"P",{});var Ul=i(Le);da=r(Ul,"This should leave you with a list of predictions, like this:"),Ul.forEach(s),Ot=p(e),_(me.$$.fragment,e),Dt=p(e),C=l(e,"H2",{class:!0});var ms=i(C);B=l(ms,"A",{id:!0,class:!0,href:!0});var Ml=i(B);it=l(Ml,"SPAN",{});var Bl=i(it);_(ce.$$.fragment,Bl),Bl.forEach(s),Ml.forEach(s),ua=p(ms),nt=l(ms,"SPAN",{});var Rl=i(nt);ga=r(Rl,"Sharing your models"),Rl.forEach(s),ms.forEach(s),Gt=p(e),R=l(e,"P",{});var cs=i(R);_a=r(cs,"You can share your "),mt=l(cs,"CODE",{});var zl=i(mt);ba=r(zl,"timm"),zl.forEach(s),va=r(cs," models directly to the Hugging Face Hub. This will publish a new version of your model to the Hugging Face Hub, creating a model repo for you if it doesn\u2019t already exist."),cs.forEach(s),Nt=p(e),Oe=l(e,"P",{});var Yl=i(Oe);wa=r(Yl,"Before pushing a model, make sure that you\u2019ve logged in to Hugging Face:"),Yl.forEach(s),Ft=p(e),_(he.$$.fragment,e),Ut=p(e),z=l(e,"P",{});var hs=i(z);ya=r(hs,"Alternatively, if you prefer working from a Jupyter or Colaboratory notebook, once you\u2019ve installed "),ct=l(hs,"CODE",{});var Jl=i(ct);$a=r(Jl,"huggingface_hub"),Jl.forEach(s),Ea=r(hs," you can log in with:"),hs.forEach(s),Mt=p(e),_(pe.$$.fragment,e),Bt=p(e),Y=l(e,"P",{});var ps=i(Y);xa=r(ps,"Then, push your model using the "),ht=l(ps,"CODE",{});var Vl=i(ht);ja=r(Vl,"push_to_hf_hub"),Vl.forEach(s),ka=r(ps," method:"),ps.forEach(s),Rt=p(e),_(fe.$$.fragment,e),zt=p(e),S=l(e,"H2",{class:!0});var fs=i(S);J=l(fs,"A",{id:!0,class:!0,href:!0});var Wl=i(J);pt=l(Wl,"SPAN",{});var Kl=i(pt);_(de.$$.fragment,Kl),Kl.forEach(s),Wl.forEach(s),Aa=p(fs),ft=l(fs,"SPAN",{});var Xl=i(ft);Pa=r(Xl,"Inference Widget and API"),Xl.forEach(s),fs.forEach(s),Yt=p(e),f=l(e,"P",{});var u=i(f);Ia=r(u,"All "),dt=l(u,"CODE",{});var Ql=i(dt);Ha=r(Ql,"timm"),Ql.forEach(s),qa=r(u," models on the Hub are automatically equipped with an "),De=l(u,"A",{href:!0});var Zl=i(De);Ta=r(Zl,"inference widget"),Zl.forEach(s),Ca=r(u,", pictured below for "),ue=l(u,"A",{href:!0,rel:!0});var eo=i(ue);Sa=r(eo,"nateraw/timm-resnet50-beans"),eo.forEach(s),La=r(u,". Additionally, "),ut=l(u,"CODE",{});var to=i(ut);Oa=r(to,"timm"),to.forEach(s),Da=r(u," models are available through the "),Ge=l(u,"A",{href:!0});var so=i(Ge);Ga=r(so,"Inference API"),so.forEach(s),Na=r(u,", which you can access through HTTP with cURL, Python\u2019s "),gt=l(u,"CODE",{});var ao=i(gt);Fa=r(ao,"requests"),ao.forEach(s),Ua=r(u," library, or your preferred method for making network requests."),u.forEach(s),Jt=p(e),L=l(e,"DIV",{class:!0});var ds=i(L);Ne=l(ds,"IMG",{class:!0,src:!0}),Ma=p(ds),Fe=l(ds,"IMG",{class:!0,src:!0}),ds.forEach(s),Vt=p(e),_(ge.$$.fragment,e),Wt=p(e),O=l(e,"H2",{class:!0});var us=i(O);V=l(us,"A",{id:!0,class:!0,href:!0});var lo=i(V);_t=l(lo,"SPAN",{});var oo=i(_t);_(_e.$$.fragment,oo),oo.forEach(s),lo.forEach(s),Ba=p(us),bt=l(us,"SPAN",{});var ro=i(bt);Ra=r(ro,"Additional resources"),ro.forEach(s),us.forEach(s),Kt=p(e),E=l(e,"UL",{});var X=i(E);be=l(X,"LI",{});var gs=i(be);za=r(gs,"timm (pytorch-image-models) "),ve=l(gs,"A",{href:!0,rel:!0});var io=i(ve);Ya=r(io,"GitHub Repo"),io.forEach(s),Ja=r(gs,"."),gs.forEach(s),Va=p(X),we=l(X,"LI",{});var _s=i(we);Wa=r(_s,"timm "),ye=l(_s,"A",{href:!0,rel:!0});var no=i(ye);Ka=r(no,"documentation"),no.forEach(s),Xa=r(_s,"."),_s.forEach(s),Qa=p(X),D=l(X,"LI",{});var Me=i(D);Za=r(Me,"Additional documentation at "),$e=l(Me,"A",{href:!0,rel:!0});var mo=i($e);el=r(mo,"timmdocs"),mo.forEach(s),tl=r(Me," by "),Ee=l(Me,"A",{href:!0,rel:!0});var co=i(Ee);sl=r(co,"Aman Arora"),co.forEach(s),al=r(Me,"."),Me.forEach(s),ll=p(X),W=l(X,"LI",{});var wt=i(W);xe=l(wt,"A",{href:!0,rel:!0});var ho=i(xe);ol=r(ho,"Getting Started with PyTorch Image Models (timm): A Practitioner\u2019s Guide"),ho.forEach(s),rl=r(wt," by "),je=l(wt,"A",{href:!0,rel:!0});var po=i(je);il=r(po,"Chris Hughes"),po.forEach(s),nl=r(wt,"."),wt.forEach(s),X.forEach(s),this.h()},h(){n(k,"name","hf:doc:metadata"),n(k,"content",JSON.stringify(yo)),n(G,"id","using-timm-at-hugging-face"),n(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(G,"href","#using-timm-at-hugging-face"),n(A,"class","relative group"),n(Z,"href","https://github.com/rwightman/pytorch-image-models"),n(Z,"rel","nofollow"),n(ee,"href","https://huggingface.co/models?library=timm&sort=downloads"),n(ee,"rel","nofollow"),n(Pe,"href","./models-cards"),n(Ie,"href","./models-widgets"),n(He,"href","./models-inference"),n(N,"id","using-existing-models-from-the-hub"),n(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(N,"href","#using-existing-models-from-the-hub"),n(I,"class","relative group"),n(qe,"class","block dark:hidden"),Be(qe.src,cl="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/libraries-timm_snippet1.png")||n(qe,"src",cl),n(Te,"class","hidden dark:block"),Be(Te.src,hl="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/libraries-timm_snippet1-dark.png")||n(Te,"src",hl),n(H,"class","flex justify-center"),n(Ce,"class","block dark:hidden"),Be(Ce.src,pl="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/libraries-timm_snippet2.png")||n(Ce,"src",pl),n(Se,"class","hidden dark:block"),Be(Se.src,fl="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/libraries-timm_snippet2-dark.png")||n(Se,"src",fl),n(q,"class","flex justify-center"),n(U,"id","inference"),n(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(U,"href","#inference"),n(T,"class","relative group"),n(B,"id","sharing-your-models"),n(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(B,"href","#sharing-your-models"),n(C,"class","relative group"),n(J,"id","inference-widget-and-api"),n(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(J,"href","#inference-widget-and-api"),n(S,"class","relative group"),n(De,"href","./models-widgets"),n(ue,"href","https://huggingface.co/nateraw/timm-resnet50-beans"),n(ue,"rel","nofollow"),n(Ge,"href","./models-inference"),n(Ne,"class","block dark:hidden"),Be(Ne.src,dl="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/libraries-timm_widget.png")||n(Ne,"src",dl),n(Fe,"class","hidden dark:block"),Be(Fe.src,ul="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/libraries-timm_widget-dark.png")||n(Fe,"src",ul),n(L,"class","flex justify-center"),n(V,"id","additional-resources"),n(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(V,"href","#additional-resources"),n(O,"class","relative group"),n(ve,"href","https://github.com/rwightman/pytorch-image-models"),n(ve,"rel","nofollow"),n(ye,"href","https://rwightman.github.io/pytorch-image-models/"),n(ye,"rel","nofollow"),n($e,"href","https://timm.fast.ai"),n($e,"rel","nofollow"),n(Ee,"href","https://github.com/amaarora"),n(Ee,"rel","nofollow"),n(xe,"href","https://towardsdatascience.com/getting-started-with-pytorch-image-models-timm-a-practitioners-guide-4e77b4bf9055"),n(xe,"rel","nofollow"),n(je,"href","https://github.com/Chris-hughes10"),n(je,"rel","nofollow")},m(e,m){t(document.head,k),c(e,yt,m),c(e,A,m),t(A,G),t(G,ze),b(Q,ze,null),t(A,bs),t(A,Ye),t(Ye,vs),c(e,$t,m),c(e,P,m),t(P,Je),t(Je,ws),t(P,ys),t(P,Z),t(Z,$s),t(P,Es),c(e,Et,m),c(e,j,m),t(j,xs),t(j,Ve),t(Ve,js),t(j,ks),t(j,ee),t(ee,As),t(j,Ps),c(e,xt,m),c(e,Ae,m),t(Ae,Is),c(e,jt,m),c(e,$,m),t($,te),t(te,Hs),t(te,Pe),t(Pe,qs),t(te,Ts),t($,Cs),t($,se),t(se,Ss),t(se,We),t(We,Ls),t(se,Os),t($,Ds),t($,ae),t(ae,Gs),t(ae,Ie),t(Ie,Ns),t(ae,Fs),t($,Us),t($,le),t(le,Ms),t(le,He),t(He,Bs),t(le,Rs),c(e,kt,m),c(e,I,m),t(I,N),t(N,Ke),b(oe,Ke,null),t(I,zs),t(I,Xe),t(Xe,Ys),c(e,At,m),c(e,d,m),t(d,Js),t(d,Qe),t(Qe,Vs),t(d,Ws),t(d,Ze),t(Ze,Ks),t(d,Xs),t(d,et),t(et,Qs),t(d,Zs),t(d,tt),t(tt,ea),t(d,ta),t(d,st),t(st,sa),t(d,aa),c(e,Pt,m),b(re,e,m),c(e,It,m),c(e,F,m),t(F,la),t(F,at),t(at,oa),t(F,ra),c(e,Ht,m),c(e,H,m),t(H,qe),t(H,ia),t(H,Te),c(e,qt,m),c(e,q,m),t(q,Ce),t(q,na),t(q,Se),c(e,Tt,m),c(e,T,m),t(T,U),t(U,lt),b(ie,lt,null),t(T,ma),t(T,ot),t(ot,ca),c(e,Ct,m),c(e,M,m),t(M,ha),t(M,rt),t(rt,pa),t(M,fa),c(e,St,m),b(ne,e,m),c(e,Lt,m),c(e,Le,m),t(Le,da),c(e,Ot,m),b(me,e,m),c(e,Dt,m),c(e,C,m),t(C,B),t(B,it),b(ce,it,null),t(C,ua),t(C,nt),t(nt,ga),c(e,Gt,m),c(e,R,m),t(R,_a),t(R,mt),t(mt,ba),t(R,va),c(e,Nt,m),c(e,Oe,m),t(Oe,wa),c(e,Ft,m),b(he,e,m),c(e,Ut,m),c(e,z,m),t(z,ya),t(z,ct),t(ct,$a),t(z,Ea),c(e,Mt,m),b(pe,e,m),c(e,Bt,m),c(e,Y,m),t(Y,xa),t(Y,ht),t(ht,ja),t(Y,ka),c(e,Rt,m),b(fe,e,m),c(e,zt,m),c(e,S,m),t(S,J),t(J,pt),b(de,pt,null),t(S,Aa),t(S,ft),t(ft,Pa),c(e,Yt,m),c(e,f,m),t(f,Ia),t(f,dt),t(dt,Ha),t(f,qa),t(f,De),t(De,Ta),t(f,Ca),t(f,ue),t(ue,Sa),t(f,La),t(f,ut),t(ut,Oa),t(f,Da),t(f,Ge),t(Ge,Ga),t(f,Na),t(f,gt),t(gt,Fa),t(f,Ua),c(e,Jt,m),c(e,L,m),t(L,Ne),t(L,Ma),t(L,Fe),c(e,Vt,m),b(ge,e,m),c(e,Wt,m),c(e,O,m),t(O,V),t(V,_t),b(_e,_t,null),t(O,Ba),t(O,bt),t(bt,Ra),c(e,Kt,m),c(e,E,m),t(E,be),t(be,za),t(be,ve),t(ve,Ya),t(be,Ja),t(E,Va),t(E,we),t(we,Wa),t(we,ye),t(ye,Ka),t(we,Xa),t(E,Qa),t(E,D),t(D,Za),t(D,$e),t($e,el),t(D,tl),t(D,Ee),t(Ee,sl),t(D,al),t(E,ll),t(E,W),t(W,xe),t(xe,ol),t(W,rl),t(W,je),t(je,il),t(W,nl),Xt=!0},p:bo,i(e){Xt||(v(Q.$$.fragment,e),v(oe.$$.fragment,e),v(re.$$.fragment,e),v(ie.$$.fragment,e),v(ne.$$.fragment,e),v(me.$$.fragment,e),v(ce.$$.fragment,e),v(he.$$.fragment,e),v(pe.$$.fragment,e),v(fe.$$.fragment,e),v(de.$$.fragment,e),v(ge.$$.fragment,e),v(_e.$$.fragment,e),Xt=!0)},o(e){w(Q.$$.fragment,e),w(oe.$$.fragment,e),w(re.$$.fragment,e),w(ie.$$.fragment,e),w(ne.$$.fragment,e),w(me.$$.fragment,e),w(ce.$$.fragment,e),w(he.$$.fragment,e),w(pe.$$.fragment,e),w(fe.$$.fragment,e),w(de.$$.fragment,e),w(ge.$$.fragment,e),w(_e.$$.fragment,e),Xt=!1},d(e){s(k),e&&s(yt),e&&s(A),y(Q),e&&s($t),e&&s(P),e&&s(Et),e&&s(j),e&&s(xt),e&&s(Ae),e&&s(jt),e&&s($),e&&s(kt),e&&s(I),y(oe),e&&s(At),e&&s(d),e&&s(Pt),y(re,e),e&&s(It),e&&s(F),e&&s(Ht),e&&s(H),e&&s(qt),e&&s(q),e&&s(Tt),e&&s(T),y(ie),e&&s(Ct),e&&s(M),e&&s(St),y(ne,e),e&&s(Lt),e&&s(Le),e&&s(Ot),y(me,e),e&&s(Dt),e&&s(C),y(ce),e&&s(Gt),e&&s(R),e&&s(Nt),e&&s(Oe),e&&s(Ft),y(he,e),e&&s(Ut),e&&s(z),e&&s(Mt),y(pe,e),e&&s(Bt),e&&s(Y),e&&s(Rt),y(fe,e),e&&s(zt),e&&s(S),y(de),e&&s(Yt),e&&s(f),e&&s(Jt),e&&s(L),e&&s(Vt),y(ge,e),e&&s(Wt),e&&s(O),y(_e),e&&s(Kt),e&&s(E)}}}const yo={local:"using-timm-at-hugging-face",sections:[{local:"using-existing-models-from-the-hub",sections:[{local:"inference",title:"Inference"}],title:"Using existing models from the Hub"},{local:"sharing-your-models",title:"Sharing your models"},{local:"inference-widget-and-api",title:"Inference Widget and API"},{local:"additional-resources",title:"Additional resources"}],title:"Using timm at Hugging Face"};function $o(ml){return vo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ko extends fo{constructor(k){super();uo(this,k,$o,wo,go,{})}}export{ko as default,yo as metadata};
