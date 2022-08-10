import{S as ja,i as Pa,s as za,e as r,k as g,w as $,t as i,M as qa,c as s,d as o,m as h,a,x as b,h as l,b as u,G as e,g as v,y as V,q as y,o as w,B as x,v as Ia,L as vt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Po}from"../../chunks/Tip-hf-doc-builder.js";import{D as O}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Tt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as De}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as _t}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Aa(G){let d,T,m,c,_;return c=new Tt({props:{code:`from transformers import GroupViTTextConfig, GroupViTTextModel

# Initializing a GroupViTTextModel with nvidia/groupvit-gcc-yfcc style configuration
configuration = GroupViTTextConfig()

model = GroupViTTextModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GroupViTTextConfig, GroupViTTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GroupViTTextModel with nvidia/groupvit-gcc-yfcc style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GroupViTTextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTTextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),T=i("Example:"),m=g(),$(c.$$.fragment)},l(n){d=s(n,"P",{});var p=a(d);T=l(p,"Example:"),p.forEach(o),m=h(n),b(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,T),v(n,m,p),V(c,n,p),_=!0},p:vt,i(n){_||(y(c.$$.fragment,n),_=!0)},o(n){w(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(m),x(c,n)}}}function Oa(G){let d,T,m,c,_;return c=new Tt({props:{code:`from transformers import GroupViTVisionConfig, GroupViTVisionModel

# Initializing a GroupViTVisionModel with nvidia/groupvit-gcc-yfcc style configuration
configuration = GroupViTVisionConfig()

model = GroupViTVisionModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GroupViTVisionConfig, GroupViTVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GroupViTVisionModel with nvidia/groupvit-gcc-yfcc style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GroupViTVisionConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTVisionModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),T=i("Example:"),m=g(),$(c.$$.fragment)},l(n){d=s(n,"P",{});var p=a(d);T=l(p,"Example:"),p.forEach(o),m=h(n),b(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,T),v(n,m,p),V(c,n,p),_=!0},p:vt,i(n){_||(y(c.$$.fragment,n),_=!0)},o(n){w(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(m),x(c,n)}}}function La(G){let d,T,m,c,_;return{c(){d=r("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var p=a(d);T=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var k=a(m);c=l(k,"Module"),k.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,T),e(d,m),e(m,c),e(d,_)},d(n){n&&o(d)}}}function Da(G){let d,T,m,c,_;return c=new Tt({props:{code:`from PIL import Image
import requests
from transformers import AutoProcessor, GroupViTModel

model = GroupViTModel.from_pretrained("nvidia/groupvit-gcc-yfcc")
processor = AutoProcessor.from_pretrained("nvidia/groupvit-gcc-yfcc")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(
    text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="pt", padding=True
)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = logits_per_image.softmax(dim=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, GroupViTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=r("p"),T=i("Examples:"),m=g(),$(c.$$.fragment)},l(n){d=s(n,"P",{});var p=a(d);T=l(p,"Examples:"),p.forEach(o),m=h(n),b(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,T),v(n,m,p),V(c,n,p),_=!0},p:vt,i(n){_||(y(c.$$.fragment,n),_=!0)},o(n){w(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(m),x(c,n)}}}function Sa(G){let d,T,m,c,_;return{c(){d=r("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var p=a(d);T=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var k=a(m);c=l(k,"Module"),k.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,T),e(d,m),e(m,c),e(d,_)},d(n){n&&o(d)}}}function Fa(G){let d,T,m,c,_;return c=new Tt({props:{code:`from transformers import CLIPTokenizer, GroupViTModel

model = GroupViTModel.from_pretrained("nvidia/groupvit-gcc-yfcc")
tokenizer = CLIPTokenizer.from_pretrained("nvidia/groupvit-gcc-yfcc")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, GroupViTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=r("p"),T=i("Examples:"),m=g(),$(c.$$.fragment)},l(n){d=s(n,"P",{});var p=a(d);T=l(p,"Examples:"),p.forEach(o),m=h(n),b(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,T),v(n,m,p),V(c,n,p),_=!0},p:vt,i(n){_||(y(c.$$.fragment,n),_=!0)},o(n){w(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(m),x(c,n)}}}function Na(G){let d,T,m,c,_;return{c(){d=r("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var p=a(d);T=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var k=a(m);c=l(k,"Module"),k.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,T),e(d,m),e(m,c),e(d,_)},d(n){n&&o(d)}}}function Wa(G){let d,T,m,c,_;return c=new Tt({props:{code:`from PIL import Image
import requests
from transformers import AutoProcessor, GroupViTModel

model = GroupViTModel.from_pretrained("nvidia/groupvit-gcc-yfcc")
processor = AutoProcessor.from_pretrained("nvidia/groupvit-gcc-yfcc")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

image_features = model.get_image_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, GroupViTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=r("p"),T=i("Examples:"),m=g(),$(c.$$.fragment)},l(n){d=s(n,"P",{});var p=a(d);T=l(p,"Examples:"),p.forEach(o),m=h(n),b(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,T),v(n,m,p),V(c,n,p),_=!0},p:vt,i(n){_||(y(c.$$.fragment,n),_=!0)},o(n){w(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(m),x(c,n)}}}function Ba(G){let d,T,m,c,_;return{c(){d=r("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var p=a(d);T=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var k=a(m);c=l(k,"Module"),k.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,T),e(d,m),e(m,c),e(d,_)},d(n){n&&o(d)}}}function Ha(G){let d,T,m,c,_;return c=new Tt({props:{code:`from transformers import CLIPTokenizer, GroupViTTextModel

tokenizer = CLIPTokenizer.from_pretrained("nvidia/groupvit-gcc-yfcc")
model = GroupViTTextModel.from_pretrained("nvidia/groupvit-gcc-yfcc")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled (EOS token) states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, GroupViTTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTTextModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=r("p"),T=i("Examples:"),m=g(),$(c.$$.fragment)},l(n){d=s(n,"P",{});var p=a(d);T=l(p,"Examples:"),p.forEach(o),m=h(n),b(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,T),v(n,m,p),V(c,n,p),_=!0},p:vt,i(n){_||(y(c.$$.fragment,n),_=!0)},o(n){w(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(m),x(c,n)}}}function Ra(G){let d,T,m,c,_;return{c(){d=r("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var p=a(d);T=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var k=a(m);c=l(k,"Module"),k.forEach(o),_=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,T),e(d,m),e(m,c),e(d,_)},d(n){n&&o(d)}}}function Ua(G){let d,T,m,c,_;return c=new Tt({props:{code:`from PIL import Image
import requests
from transformers import AutoProcessor, GroupViTVisionModel

processor = AutoPProcessor.from_pretrained("nvidia/groupvit-gcc-yfcc")
model = GroupViTVisionModel.from_pretrained("nvidia/groupvit-gcc-yfcc")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled CLS states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, GroupViTVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoPProcessor.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTVisionModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=r("p"),T=i("Examples:"),m=g(),$(c.$$.fragment)},l(n){d=s(n,"P",{});var p=a(d);T=l(p,"Examples:"),p.forEach(o),m=h(n),b(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,T),v(n,m,p),V(c,n,p),_=!0},p:vt,i(n){_||(y(c.$$.fragment,n),_=!0)},o(n){w(c.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(m),x(c,n)}}}function Ja(G){let d,T,m,c,_,n,p,k,un,zo,F,de,Zt,Se,mn,eo,fn,qo,L,gn,Fe,hn,_n,$t,vn,Tn,Io,bt,$n,Ao,Vt,to,bn,Oo,yt,Vn,Lo,pe,N,yn,oo,wn,xn,no,Gn,kn,Mn,W,Cn,Ne,En,jn,We,Pn,zn,Do,D,qn,Be,In,An,He,On,Ln,So,B,ce,ro,Re,Dn,so,Sn,Fo,C,Ue,Fn,ue,wt,Nn,Wn,xt,Bn,Hn,Rn,H,Un,Gt,Jn,Xn,kt,Yn,Kn,Qn,me,Je,Zn,Xe,er,Mt,tr,or,No,R,fe,ao,Ye,nr,io,rr,Wo,E,Ke,sr,U,ar,Ct,ir,lr,Qe,dr,pr,cr,J,ur,Et,mr,fr,jt,gr,hr,_r,ge,Bo,X,he,lo,Ze,vr,po,Tr,Ho,j,et,$r,Y,br,Pt,Vr,yr,tt,wr,xr,Gr,K,kr,zt,Mr,Cr,qt,Er,jr,Pr,_e,Ro,Q,ve,co,ot,zr,uo,qr,Uo,M,nt,Ir,rt,Ar,st,Or,Lr,Dr,P,at,Sr,Z,Fr,It,Nr,Wr,mo,Br,Hr,Rr,Te,Ur,$e,Jr,z,it,Xr,ee,Yr,At,Kr,Qr,fo,Zr,es,ts,be,os,Ve,ns,q,lt,rs,te,ss,Ot,as,is,go,ls,ds,ps,ye,cs,we,Jo,oe,xe,ho,dt,us,_o,ms,Xo,ne,pt,fs,I,ct,gs,re,hs,Lt,_s,vs,vo,Ts,$s,bs,Ge,Vs,ke,Yo,se,Me,To,ut,ys,$o,ws,Ko,ae,mt,xs,A,ft,Gs,ie,ks,Dt,Ms,Cs,bo,Es,js,Ps,Ce,zs,Ee,Qo;return n=new De({}),Se=new De({}),Re=new De({}),Ue=new O({props:{name:"class transformers.GroupViTConfig",anchor:"transformers.GroupViTConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 256"},{name:"projection_intermediate_dim",val:" = 4096"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GroupViTConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTTextConfig">GroupViTTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.GroupViTConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTVisionConfig">GroupViTVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.GroupViTConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.GroupViTConfig.projection_intermediate_dim",description:`<strong>projection_intermediate_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimentionality of intermediate layer of text and vision projection layers.`,name:"projection_intermediate_dim"},{anchor:"transformers.GroupViTConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> parameter. Default is used as per the original GroupViT
implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.GroupViTConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/configuration_groupvit.py#L265"}}),Je=new O({props:{name:"from_text_vision_configs",anchor:"transformers.GroupViTConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": GroupViTTextConfig"},{name:"vision_config",val:": GroupViTVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/configuration_groupvit.py#L322",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTConfig"
>GroupViTConfig</a></p>
`}}),Ye=new De({}),Ke=new O({props:{name:"class transformers.GroupViTTextConfig",anchor:"transformers.GroupViTTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 256"},{name:"intermediate_size",val:" = 1024"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 4"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GroupViTTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
Vocabulary size of the GroupViT text model. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTModel">GroupViTModel</a>.`,name:"vocab_size"},{anchor:"transformers.GroupViTTextConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.GroupViTTextConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.GroupViTTextConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.GroupViTTextConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.GroupViTTextConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 77) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.GroupViTTextConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.GroupViTTextConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.GroupViTTextConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.GroupViTTextConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.GroupViTTextConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GroupViTTextConfig.initializer_factor",description:`<strong>initializer_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/configuration_groupvit.py#L32"}}),ge=new _t({props:{anchor:"transformers.GroupViTTextConfig.example",$$slots:{default:[Aa]},$$scope:{ctx:G}}}),Ze=new De({}),et=new O({props:{name:"class transformers.GroupViTVisionConfig",anchor:"transformers.GroupViTVisionConfig",parameters:[{name:"hidden_size",val:" = 384"},{name:"intermediate_size",val:" = 1536"},{name:"depths",val:" = [6, 3, 3]"},{name:"num_hidden_layers",val:" = 12"},{name:"num_group_tokens",val:" = [64, 8, 0]"},{name:"num_output_groups",val:" = [64, 8, 8]"},{name:"num_attention_heads",val:" = 6"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"hidden_act",val:" = 'gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"assign_eps",val:" = 1.0"},{name:"assign_mlp_ratio",val:" = [0.5, 4]"},{name:"qkv_bias",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GroupViTVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 384) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.GroupViTVisionConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.GroupViTVisionConfig.depths",description:`<strong>depths</strong> (<code>List[int]</code>, <em>optional</em>, defaults to [6, 3, 3]) &#x2014;
The number of layers in each encoder block.`,name:"depths"},{anchor:"transformers.GroupViTVisionConfig.num_group_tokens",description:`<strong>num_group_tokens</strong> (<code>List[int]</code>, <em>optional</em>, defaults to [64, 8, 0]) &#x2014;
The number of group tokens for each stage.`,name:"num_group_tokens"},{anchor:"transformers.GroupViTVisionConfig.num_output_groups",description:`<strong>num_output_groups</strong> (<code>List[int]</code>, <em>optional</em>, defaults to [64, 8, 0]) &#x2014;
The number of output groups for each stage, 0 means no group.`,name:"num_output_groups"},{anchor:"transformers.GroupViTVisionConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.GroupViTVisionConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.GroupViTVisionConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.GroupViTVisionConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.GroupViTVisionConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.GroupViTVisionConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.GroupViTVisionConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.GroupViTVisionConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GroupViTVisionConfig.initializer_factor",description:`<strong>initializer_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/configuration_groupvit.py#L139"}}),_e=new _t({props:{anchor:"transformers.GroupViTVisionConfig.example",$$slots:{default:[Oa]},$$scope:{ctx:G}}}),ot=new De({}),nt=new O({props:{name:"class transformers.GroupViTModel",anchor:"transformers.GroupViTModel",parameters:[{name:"config",val:": GroupViTConfig"}],parametersDescription:[{anchor:"transformers.GroupViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTConfig">GroupViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_groupvit.py#L1324"}}),at=new O({props:{name:"forward",anchor:"transformers.GroupViTModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_segmentation",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GroupViTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GroupViTModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GroupViTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.GroupViTModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.GroupViTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GroupViTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GroupViTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_groupvit.py#L1466",returnDescription:`
<p>A <code>transformers.models.groupvit.modeling_groupvit.GroupViTModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.groupvit.configuration_groupvit.GroupViTConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.</p>
</li>
<li>
<p><strong>logits_per_image</strong> (<code>torch.FloatTensor</code> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</p>
</li>
<li>
<p><strong>logits_per_text</strong> (<code>torch.FloatTensor</code> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</p>
</li>
<li>
<p><strong>segmentation_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels, logits_height, logits_width)</code>) \u2014 Classification scores for each pixel.</p>
<Tip warning={true}>
<p>The logits returned do not necessarily have the same size as the <code>pixel_values</code> passed as inputs. This is
to avoid doing two interpolations and lose some quality when a user needs to resize the logits to the
original image size as post-processing. You should always check your logits shape and resize as needed.</p>
</Tip>
</li>
<li>
<p><strong>text_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTTextModel"
>GroupViTTextModel</a>.</p>
</li>
<li>
<p><strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTVisionModel"
>GroupViTVisionModel</a>.</p>
</li>
<li>
<p><strong>text_model_output</strong> (<code>BaseModelOutputWithPooling</code>) \u2014 The output of the <a
  href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTTextModel"
>GroupViTTextModel</a>.</p>
</li>
<li>
<p><strong>vision_model_output</strong> (<code>BaseModelOutputWithPooling</code>) \u2014 The output of the <a
  href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTVisionModel"
>GroupViTVisionModel</a>.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.groupvit.modeling_groupvit.GroupViTModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Te=new Po({props:{$$slots:{default:[La]},$$scope:{ctx:G}}}),$e=new _t({props:{anchor:"transformers.GroupViTModel.forward.example",$$slots:{default:[Da]},$$scope:{ctx:G}}}),it=new O({props:{name:"get_text_features",anchor:"transformers.GroupViTModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GroupViTModel.get_text_features.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GroupViTModel.get_text_features.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GroupViTModel.get_text_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GroupViTModel.get_text_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GroupViTModel.get_text_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_groupvit.py#L1370",returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTTextModel"
>GroupViTTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),be=new Po({props:{$$slots:{default:[Sa]},$$scope:{ctx:G}}}),Ve=new _t({props:{anchor:"transformers.GroupViTModel.get_text_features.example",$$slots:{default:[Fa]},$$scope:{ctx:G}}}),lt=new O({props:{name:"get_image_features",anchor:"transformers.GroupViTModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.GroupViTModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GroupViTModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GroupViTModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_groupvit.py#L1417",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTVisionModel"
>GroupViTVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),ye=new Po({props:{$$slots:{default:[Na]},$$scope:{ctx:G}}}),we=new _t({props:{anchor:"transformers.GroupViTModel.get_image_features.example",$$slots:{default:[Wa]},$$scope:{ctx:G}}}),dt=new De({}),pt=new O({props:{name:"class transformers.GroupViTTextModel",anchor:"transformers.GroupViTTextModel",parameters:[{name:"config",val:": GroupViTTextConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_groupvit.py#L1160"}}),ct=new O({props:{name:"forward",anchor:"transformers.GroupViTTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GroupViTTextModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GroupViTTextModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GroupViTTextModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GroupViTTextModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GroupViTTextModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_groupvit.py#L1175",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.groupvit.configuration_groupvit.GroupViTTextConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ge=new Po({props:{$$slots:{default:[Ba]},$$scope:{ctx:G}}}),ke=new _t({props:{anchor:"transformers.GroupViTTextModel.forward.example",$$slots:{default:[Ha]},$$scope:{ctx:G}}}),ut=new De({}),mt=new O({props:{name:"class transformers.GroupViTVisionModel",anchor:"transformers.GroupViTVisionModel",parameters:[{name:"config",val:": GroupViTVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_groupvit.py#L1271"}}),ft=new O({props:{name:"forward",anchor:"transformers.GroupViTVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.GroupViTVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GroupViTVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GroupViTVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_groupvit.py#L1284",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.groupvit.configuration_groupvit.GroupViTVisionConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ce=new Po({props:{$$slots:{default:[Ra]},$$scope:{ctx:G}}}),Ee=new _t({props:{anchor:"transformers.GroupViTVisionModel.forward.example",$$slots:{default:[Ua]},$$scope:{ctx:G}}}),{c(){d=r("meta"),T=g(),m=r("h1"),c=r("a"),_=r("span"),$(n.$$.fragment),p=g(),k=r("span"),un=i("GroupViT"),zo=g(),F=r("h2"),de=r("a"),Zt=r("span"),$(Se.$$.fragment),mn=g(),eo=r("span"),fn=i("Overview"),qo=g(),L=r("p"),gn=i("The GroupViT model was proposed in "),Fe=r("a"),hn=i("GroupViT: Semantic Segmentation Emerges from Text Supervision"),_n=i(` by Jiarui Xu, Shalini De Mello, Sifei Liu, Wonmin Byeon, Thomas Breuel, Jan Kautz, Xiaolong Wang.
Inspired by `),$t=r("a"),vn=i("CLIP"),Tn=i(", GroupViT is a vision-language model that can perform zero-shot semantic segmentation on any given vocabulary categories."),Io=g(),bt=r("p"),$n=i("The abstract from the paper is the following:"),Ao=g(),Vt=r("p"),to=r("em"),bn=i("Grouping and recognition are important components of visual scene understanding, e.g., for object detection and semantic segmentation. With end-to-end deep learning systems, grouping of image regions usually happens implicitly via top-down supervision from pixel-level recognition labels. Instead, in this paper, we propose to bring back the grouping mechanism into deep networks, which allows semantic segments to emerge automatically with only text supervision. We propose a hierarchical Grouping Vision Transformer (GroupViT), which goes beyond the regular grid structure representation and learns to group image regions into progressively larger arbitrary-shaped segments. We train GroupViT jointly with a text encoder on a large-scale image-text dataset via contrastive losses. With only text supervision and without any pixel-level annotations, GroupViT learns to group together semantic regions and successfully transfers to the task of semantic segmentation in a zero-shot manner, i.e., without any further fine-tuning. It achieves a zero-shot accuracy of 52.3% mIoU on the PASCAL VOC 2012 and 22.4% mIoU on PASCAL Context datasets, and performs competitively to state-of-the-art transfer-learning methods requiring greater levels of supervision."),Oo=g(),yt=r("p"),Vn=i("Tips:"),Lo=g(),pe=r("ul"),N=r("li"),yn=i("You may specify "),oo=r("code"),wn=i("output_segmentation=True"),xn=i(" in the forward of "),no=r("code"),Gn=i("GroupViTModel"),kn=i(" to get the segmentation logits of input texts."),Mn=g(),W=r("li"),Cn=i("The quickest way to get started with GroupViT is by checking the "),Ne=r("a"),En=i("example notebooks"),jn=i(" (which showcase zero-shot segmentation inference). One can also check out the "),We=r("a"),Pn=i("HuggingFace Spaces demo"),zn=i(" to play with GroupViT."),Do=g(),D=r("p"),qn=i("This model was contributed by "),Be=r("a"),In=i("xvjiarui"),An=i(`.
The original code can be found `),He=r("a"),On=i("here"),Ln=i("."),So=g(),B=r("h2"),ce=r("a"),ro=r("span"),$(Re.$$.fragment),Dn=g(),so=r("span"),Sn=i("GroupViTConfig"),Fo=g(),C=r("div"),$(Ue.$$.fragment),Fn=g(),ue=r("p"),wt=r("a"),Nn=i("GroupViTConfig"),Wn=i(" is the configuration class to store the configuration of a "),xt=r("a"),Bn=i("GroupViTModel"),Hn=i(`. It is used to
instantiate a GroupViT model according to the specified arguments, defining the text model and vision model
configs.`),Rn=g(),H=r("p"),Un=i("Configuration objects inherit from "),Gt=r("a"),Jn=i("PretrainedConfig"),Xn=i(` and can be used to control the model outputs. Read the
documentation from `),kt=r("a"),Yn=i("PretrainedConfig"),Kn=i(" for more information."),Qn=g(),me=r("div"),$(Je.$$.fragment),Zn=g(),Xe=r("p"),er=i("Instantiate a "),Mt=r("a"),tr=i("GroupViTConfig"),or=i(` (or a derived class) from groupvit text model configuration and groupvit
vision model configuration.`),No=g(),R=r("h2"),fe=r("a"),ao=r("span"),$(Ye.$$.fragment),nr=g(),io=r("span"),rr=i("GroupViTTextConfig"),Wo=g(),E=r("div"),$(Ke.$$.fragment),sr=g(),U=r("p"),ar=i("This is the configuration class to store the configuration of a "),Ct=r("a"),ir=i("GroupViTTextModel"),lr=i(`. It is used to instantiate an
GroupViT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GroupViT
`),Qe=r("a"),dr=i("nvidia/groupvit-gcc-yfcc"),pr=i(" architecture."),cr=g(),J=r("p"),ur=i("Configuration objects inherit from "),Et=r("a"),mr=i("PretrainedConfig"),fr=i(` and can be used to control the model outputs. Read the
documentation from `),jt=r("a"),gr=i("PretrainedConfig"),hr=i(" for more information."),_r=g(),$(ge.$$.fragment),Bo=g(),X=r("h2"),he=r("a"),lo=r("span"),$(Ze.$$.fragment),vr=g(),po=r("span"),Tr=i("GroupViTVisionConfig"),Ho=g(),j=r("div"),$(et.$$.fragment),$r=g(),Y=r("p"),br=i("This is the configuration class to store the configuration of a "),Pt=r("a"),Vr=i("GroupViTVisionModel"),yr=i(`. It is used to instantiate
an GroupViT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GroupViT
`),tt=r("a"),wr=i("nvidia/groupvit-gcc-yfcc"),xr=i(" architecture."),Gr=g(),K=r("p"),kr=i("Configuration objects inherit from "),zt=r("a"),Mr=i("PretrainedConfig"),Cr=i(` and can be used to control the model outputs. Read the
documentation from `),qt=r("a"),Er=i("PretrainedConfig"),jr=i(" for more information."),Pr=g(),$(_e.$$.fragment),Ro=g(),Q=r("h2"),ve=r("a"),co=r("span"),$(ot.$$.fragment),zr=g(),uo=r("span"),qr=i("GroupViTModel"),Uo=g(),M=r("div"),$(nt.$$.fragment),Ir=g(),rt=r("p"),Ar=i("This model is a PyTorch "),st=r("a"),Or=i("torch.nn.Module"),Lr=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dr=g(),P=r("div"),$(at.$$.fragment),Sr=g(),Z=r("p"),Fr=i("The "),It=r("a"),Nr=i("GroupViTModel"),Wr=i(" forward method, overrides the "),mo=r("code"),Br=i("__call__"),Hr=i(" special method."),Rr=g(),$(Te.$$.fragment),Ur=g(),$($e.$$.fragment),Jr=g(),z=r("div"),$(it.$$.fragment),Xr=g(),ee=r("p"),Yr=i("The "),At=r("a"),Kr=i("GroupViTModel"),Qr=i(" forward method, overrides the "),fo=r("code"),Zr=i("__call__"),es=i(" special method."),ts=g(),$(be.$$.fragment),os=g(),$(Ve.$$.fragment),ns=g(),q=r("div"),$(lt.$$.fragment),rs=g(),te=r("p"),ss=i("The "),Ot=r("a"),as=i("GroupViTModel"),is=i(" forward method, overrides the "),go=r("code"),ls=i("__call__"),ds=i(" special method."),ps=g(),$(ye.$$.fragment),cs=g(),$(we.$$.fragment),Jo=g(),oe=r("h2"),xe=r("a"),ho=r("span"),$(dt.$$.fragment),us=g(),_o=r("span"),ms=i("GroupViTTextModel"),Xo=g(),ne=r("div"),$(pt.$$.fragment),fs=g(),I=r("div"),$(ct.$$.fragment),gs=g(),re=r("p"),hs=i("The "),Lt=r("a"),_s=i("GroupViTTextModel"),vs=i(" forward method, overrides the "),vo=r("code"),Ts=i("__call__"),$s=i(" special method."),bs=g(),$(Ge.$$.fragment),Vs=g(),$(ke.$$.fragment),Yo=g(),se=r("h2"),Me=r("a"),To=r("span"),$(ut.$$.fragment),ys=g(),$o=r("span"),ws=i("GroupViTVisionModel"),Ko=g(),ae=r("div"),$(mt.$$.fragment),xs=g(),A=r("div"),$(ft.$$.fragment),Gs=g(),ie=r("p"),ks=i("The "),Dt=r("a"),Ms=i("GroupViTVisionModel"),Cs=i(" forward method, overrides the "),bo=r("code"),Es=i("__call__"),js=i(" special method."),Ps=g(),$(Ce.$$.fragment),zs=g(),$(Ee.$$.fragment),this.h()},l(t){const f=qa('[data-svelte="svelte-1phssyn"]',document.head);d=s(f,"META",{name:!0,content:!0}),f.forEach(o),T=h(t),m=s(t,"H1",{class:!0});var gt=a(m);c=s(gt,"A",{id:!0,class:!0,href:!0});var Vo=a(c);_=s(Vo,"SPAN",{});var yo=a(_);b(n.$$.fragment,yo),yo.forEach(o),Vo.forEach(o),p=h(gt),k=s(gt,"SPAN",{});var wo=a(k);un=l(wo,"GroupViT"),wo.forEach(o),gt.forEach(o),zo=h(t),F=s(t,"H2",{class:!0});var ht=a(F);de=s(ht,"A",{id:!0,class:!0,href:!0});var xo=a(de);Zt=s(xo,"SPAN",{});var Go=a(Zt);b(Se.$$.fragment,Go),Go.forEach(o),xo.forEach(o),mn=h(ht),eo=s(ht,"SPAN",{});var ko=a(eo);fn=l(ko,"Overview"),ko.forEach(o),ht.forEach(o),qo=h(t),L=s(t,"P",{});var le=a(L);gn=l(le,"The GroupViT model was proposed in "),Fe=s(le,"A",{href:!0,rel:!0});var Mo=a(Fe);hn=l(Mo,"GroupViT: Semantic Segmentation Emerges from Text Supervision"),Mo.forEach(o),_n=l(le,` by Jiarui Xu, Shalini De Mello, Sifei Liu, Wonmin Byeon, Thomas Breuel, Jan Kautz, Xiaolong Wang.
Inspired by `),$t=s(le,"A",{href:!0});var Co=a($t);vn=l(Co,"CLIP"),Co.forEach(o),Tn=l(le,", GroupViT is a vision-language model that can perform zero-shot semantic segmentation on any given vocabulary categories."),le.forEach(o),Io=h(t),bt=s(t,"P",{});var Eo=a(bt);$n=l(Eo,"The abstract from the paper is the following:"),Eo.forEach(o),Ao=h(t),Vt=s(t,"P",{});var qs=a(Vt);to=s(qs,"EM",{});var Is=a(to);bn=l(Is,"Grouping and recognition are important components of visual scene understanding, e.g., for object detection and semantic segmentation. With end-to-end deep learning systems, grouping of image regions usually happens implicitly via top-down supervision from pixel-level recognition labels. Instead, in this paper, we propose to bring back the grouping mechanism into deep networks, which allows semantic segments to emerge automatically with only text supervision. We propose a hierarchical Grouping Vision Transformer (GroupViT), which goes beyond the regular grid structure representation and learns to group image regions into progressively larger arbitrary-shaped segments. We train GroupViT jointly with a text encoder on a large-scale image-text dataset via contrastive losses. With only text supervision and without any pixel-level annotations, GroupViT learns to group together semantic regions and successfully transfers to the task of semantic segmentation in a zero-shot manner, i.e., without any further fine-tuning. It achieves a zero-shot accuracy of 52.3% mIoU on the PASCAL VOC 2012 and 22.4% mIoU on PASCAL Context datasets, and performs competitively to state-of-the-art transfer-learning methods requiring greater levels of supervision."),Is.forEach(o),qs.forEach(o),Oo=h(t),yt=s(t,"P",{});var As=a(yt);Vn=l(As,"Tips:"),As.forEach(o),Lo=h(t),pe=s(t,"UL",{});var Zo=a(pe);N=s(Zo,"LI",{});var St=a(N);yn=l(St,"You may specify "),oo=s(St,"CODE",{});var Os=a(oo);wn=l(Os,"output_segmentation=True"),Os.forEach(o),xn=l(St," in the forward of "),no=s(St,"CODE",{});var Ls=a(no);Gn=l(Ls,"GroupViTModel"),Ls.forEach(o),kn=l(St," to get the segmentation logits of input texts."),St.forEach(o),Mn=h(Zo),W=s(Zo,"LI",{});var Ft=a(W);Cn=l(Ft,"The quickest way to get started with GroupViT is by checking the "),Ne=s(Ft,"A",{href:!0,rel:!0});var Ds=a(Ne);En=l(Ds,"example notebooks"),Ds.forEach(o),jn=l(Ft," (which showcase zero-shot segmentation inference). One can also check out the "),We=s(Ft,"A",{href:!0,rel:!0});var Ss=a(We);Pn=l(Ss,"HuggingFace Spaces demo"),Ss.forEach(o),zn=l(Ft," to play with GroupViT."),Ft.forEach(o),Zo.forEach(o),Do=h(t),D=s(t,"P",{});var Nt=a(D);qn=l(Nt,"This model was contributed by "),Be=s(Nt,"A",{href:!0,rel:!0});var Fs=a(Be);In=l(Fs,"xvjiarui"),Fs.forEach(o),An=l(Nt,`.
The original code can be found `),He=s(Nt,"A",{href:!0,rel:!0});var Ns=a(He);On=l(Ns,"here"),Ns.forEach(o),Ln=l(Nt,"."),Nt.forEach(o),So=h(t),B=s(t,"H2",{class:!0});var en=a(B);ce=s(en,"A",{id:!0,class:!0,href:!0});var Ws=a(ce);ro=s(Ws,"SPAN",{});var Bs=a(ro);b(Re.$$.fragment,Bs),Bs.forEach(o),Ws.forEach(o),Dn=h(en),so=s(en,"SPAN",{});var Hs=a(so);Sn=l(Hs,"GroupViTConfig"),Hs.forEach(o),en.forEach(o),Fo=h(t),C=s(t,"DIV",{class:!0});var je=a(C);b(Ue.$$.fragment,je),Fn=h(je),ue=s(je,"P",{});var jo=a(ue);wt=s(jo,"A",{href:!0});var Rs=a(wt);Nn=l(Rs,"GroupViTConfig"),Rs.forEach(o),Wn=l(jo," is the configuration class to store the configuration of a "),xt=s(jo,"A",{href:!0});var Us=a(xt);Bn=l(Us,"GroupViTModel"),Us.forEach(o),Hn=l(jo,`. It is used to
instantiate a GroupViT model according to the specified arguments, defining the text model and vision model
configs.`),jo.forEach(o),Rn=h(je),H=s(je,"P",{});var Wt=a(H);Un=l(Wt,"Configuration objects inherit from "),Gt=s(Wt,"A",{href:!0});var Js=a(Gt);Jn=l(Js,"PretrainedConfig"),Js.forEach(o),Xn=l(Wt,` and can be used to control the model outputs. Read the
documentation from `),kt=s(Wt,"A",{href:!0});var Xs=a(kt);Yn=l(Xs,"PretrainedConfig"),Xs.forEach(o),Kn=l(Wt," for more information."),Wt.forEach(o),Qn=h(je),me=s(je,"DIV",{class:!0});var tn=a(me);b(Je.$$.fragment,tn),Zn=h(tn),Xe=s(tn,"P",{});var on=a(Xe);er=l(on,"Instantiate a "),Mt=s(on,"A",{href:!0});var Ys=a(Mt);tr=l(Ys,"GroupViTConfig"),Ys.forEach(o),or=l(on,` (or a derived class) from groupvit text model configuration and groupvit
vision model configuration.`),on.forEach(o),tn.forEach(o),je.forEach(o),No=h(t),R=s(t,"H2",{class:!0});var nn=a(R);fe=s(nn,"A",{id:!0,class:!0,href:!0});var Ks=a(fe);ao=s(Ks,"SPAN",{});var Qs=a(ao);b(Ye.$$.fragment,Qs),Qs.forEach(o),Ks.forEach(o),nr=h(nn),io=s(nn,"SPAN",{});var Zs=a(io);rr=l(Zs,"GroupViTTextConfig"),Zs.forEach(o),nn.forEach(o),Wo=h(t),E=s(t,"DIV",{class:!0});var Pe=a(E);b(Ke.$$.fragment,Pe),sr=h(Pe),U=s(Pe,"P",{});var Bt=a(U);ar=l(Bt,"This is the configuration class to store the configuration of a "),Ct=s(Bt,"A",{href:!0});var ea=a(Ct);ir=l(ea,"GroupViTTextModel"),ea.forEach(o),lr=l(Bt,`. It is used to instantiate an
GroupViT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GroupViT
`),Qe=s(Bt,"A",{href:!0,rel:!0});var ta=a(Qe);dr=l(ta,"nvidia/groupvit-gcc-yfcc"),ta.forEach(o),pr=l(Bt," architecture."),Bt.forEach(o),cr=h(Pe),J=s(Pe,"P",{});var Ht=a(J);ur=l(Ht,"Configuration objects inherit from "),Et=s(Ht,"A",{href:!0});var oa=a(Et);mr=l(oa,"PretrainedConfig"),oa.forEach(o),fr=l(Ht,` and can be used to control the model outputs. Read the
documentation from `),jt=s(Ht,"A",{href:!0});var na=a(jt);gr=l(na,"PretrainedConfig"),na.forEach(o),hr=l(Ht," for more information."),Ht.forEach(o),_r=h(Pe),b(ge.$$.fragment,Pe),Pe.forEach(o),Bo=h(t),X=s(t,"H2",{class:!0});var rn=a(X);he=s(rn,"A",{id:!0,class:!0,href:!0});var ra=a(he);lo=s(ra,"SPAN",{});var sa=a(lo);b(Ze.$$.fragment,sa),sa.forEach(o),ra.forEach(o),vr=h(rn),po=s(rn,"SPAN",{});var aa=a(po);Tr=l(aa,"GroupViTVisionConfig"),aa.forEach(o),rn.forEach(o),Ho=h(t),j=s(t,"DIV",{class:!0});var ze=a(j);b(et.$$.fragment,ze),$r=h(ze),Y=s(ze,"P",{});var Rt=a(Y);br=l(Rt,"This is the configuration class to store the configuration of a "),Pt=s(Rt,"A",{href:!0});var ia=a(Pt);Vr=l(ia,"GroupViTVisionModel"),ia.forEach(o),yr=l(Rt,`. It is used to instantiate
an GroupViT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GroupViT
`),tt=s(Rt,"A",{href:!0,rel:!0});var la=a(tt);wr=l(la,"nvidia/groupvit-gcc-yfcc"),la.forEach(o),xr=l(Rt," architecture."),Rt.forEach(o),Gr=h(ze),K=s(ze,"P",{});var Ut=a(K);kr=l(Ut,"Configuration objects inherit from "),zt=s(Ut,"A",{href:!0});var da=a(zt);Mr=l(da,"PretrainedConfig"),da.forEach(o),Cr=l(Ut,` and can be used to control the model outputs. Read the
documentation from `),qt=s(Ut,"A",{href:!0});var pa=a(qt);Er=l(pa,"PretrainedConfig"),pa.forEach(o),jr=l(Ut," for more information."),Ut.forEach(o),Pr=h(ze),b(_e.$$.fragment,ze),ze.forEach(o),Ro=h(t),Q=s(t,"H2",{class:!0});var sn=a(Q);ve=s(sn,"A",{id:!0,class:!0,href:!0});var ca=a(ve);co=s(ca,"SPAN",{});var ua=a(co);b(ot.$$.fragment,ua),ua.forEach(o),ca.forEach(o),zr=h(sn),uo=s(sn,"SPAN",{});var ma=a(uo);qr=l(ma,"GroupViTModel"),ma.forEach(o),sn.forEach(o),Uo=h(t),M=s(t,"DIV",{class:!0});var S=a(M);b(nt.$$.fragment,S),Ir=h(S),rt=s(S,"P",{});var an=a(rt);Ar=l(an,"This model is a PyTorch "),st=s(an,"A",{href:!0,rel:!0});var fa=a(st);Or=l(fa,"torch.nn.Module"),fa.forEach(o),Lr=l(an,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),an.forEach(o),Dr=h(S),P=s(S,"DIV",{class:!0});var qe=a(P);b(at.$$.fragment,qe),Sr=h(qe),Z=s(qe,"P",{});var Jt=a(Z);Fr=l(Jt,"The "),It=s(Jt,"A",{href:!0});var ga=a(It);Nr=l(ga,"GroupViTModel"),ga.forEach(o),Wr=l(Jt," forward method, overrides the "),mo=s(Jt,"CODE",{});var ha=a(mo);Br=l(ha,"__call__"),ha.forEach(o),Hr=l(Jt," special method."),Jt.forEach(o),Rr=h(qe),b(Te.$$.fragment,qe),Ur=h(qe),b($e.$$.fragment,qe),qe.forEach(o),Jr=h(S),z=s(S,"DIV",{class:!0});var Ie=a(z);b(it.$$.fragment,Ie),Xr=h(Ie),ee=s(Ie,"P",{});var Xt=a(ee);Yr=l(Xt,"The "),At=s(Xt,"A",{href:!0});var _a=a(At);Kr=l(_a,"GroupViTModel"),_a.forEach(o),Qr=l(Xt," forward method, overrides the "),fo=s(Xt,"CODE",{});var va=a(fo);Zr=l(va,"__call__"),va.forEach(o),es=l(Xt," special method."),Xt.forEach(o),ts=h(Ie),b(be.$$.fragment,Ie),os=h(Ie),b(Ve.$$.fragment,Ie),Ie.forEach(o),ns=h(S),q=s(S,"DIV",{class:!0});var Ae=a(q);b(lt.$$.fragment,Ae),rs=h(Ae),te=s(Ae,"P",{});var Yt=a(te);ss=l(Yt,"The "),Ot=s(Yt,"A",{href:!0});var Ta=a(Ot);as=l(Ta,"GroupViTModel"),Ta.forEach(o),is=l(Yt," forward method, overrides the "),go=s(Yt,"CODE",{});var $a=a(go);ls=l($a,"__call__"),$a.forEach(o),ds=l(Yt," special method."),Yt.forEach(o),ps=h(Ae),b(ye.$$.fragment,Ae),cs=h(Ae),b(we.$$.fragment,Ae),Ae.forEach(o),S.forEach(o),Jo=h(t),oe=s(t,"H2",{class:!0});var ln=a(oe);xe=s(ln,"A",{id:!0,class:!0,href:!0});var ba=a(xe);ho=s(ba,"SPAN",{});var Va=a(ho);b(dt.$$.fragment,Va),Va.forEach(o),ba.forEach(o),us=h(ln),_o=s(ln,"SPAN",{});var ya=a(_o);ms=l(ya,"GroupViTTextModel"),ya.forEach(o),ln.forEach(o),Xo=h(t),ne=s(t,"DIV",{class:!0});var dn=a(ne);b(pt.$$.fragment,dn),fs=h(dn),I=s(dn,"DIV",{class:!0});var Oe=a(I);b(ct.$$.fragment,Oe),gs=h(Oe),re=s(Oe,"P",{});var Kt=a(re);hs=l(Kt,"The "),Lt=s(Kt,"A",{href:!0});var wa=a(Lt);_s=l(wa,"GroupViTTextModel"),wa.forEach(o),vs=l(Kt," forward method, overrides the "),vo=s(Kt,"CODE",{});var xa=a(vo);Ts=l(xa,"__call__"),xa.forEach(o),$s=l(Kt," special method."),Kt.forEach(o),bs=h(Oe),b(Ge.$$.fragment,Oe),Vs=h(Oe),b(ke.$$.fragment,Oe),Oe.forEach(o),dn.forEach(o),Yo=h(t),se=s(t,"H2",{class:!0});var pn=a(se);Me=s(pn,"A",{id:!0,class:!0,href:!0});var Ga=a(Me);To=s(Ga,"SPAN",{});var ka=a(To);b(ut.$$.fragment,ka),ka.forEach(o),Ga.forEach(o),ys=h(pn),$o=s(pn,"SPAN",{});var Ma=a($o);ws=l(Ma,"GroupViTVisionModel"),Ma.forEach(o),pn.forEach(o),Ko=h(t),ae=s(t,"DIV",{class:!0});var cn=a(ae);b(mt.$$.fragment,cn),xs=h(cn),A=s(cn,"DIV",{class:!0});var Le=a(A);b(ft.$$.fragment,Le),Gs=h(Le),ie=s(Le,"P",{});var Qt=a(ie);ks=l(Qt,"The "),Dt=s(Qt,"A",{href:!0});var Ca=a(Dt);Ms=l(Ca,"GroupViTVisionModel"),Ca.forEach(o),Cs=l(Qt," forward method, overrides the "),bo=s(Qt,"CODE",{});var Ea=a(bo);Es=l(Ea,"__call__"),Ea.forEach(o),js=l(Qt," special method."),Qt.forEach(o),Ps=h(Le),b(Ce.$$.fragment,Le),zs=h(Le),b(Ee.$$.fragment,Le),Le.forEach(o),cn.forEach(o),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(Xa)),u(c,"id","groupvit"),u(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(c,"href","#groupvit"),u(m,"class","relative group"),u(de,"id","overview"),u(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(de,"href","#overview"),u(F,"class","relative group"),u(Fe,"href","https://arxiv.org/abs/2202.11094"),u(Fe,"rel","nofollow"),u($t,"href","clip"),u(Ne,"href","https://github.com/xvjiarui/GroupViT/blob/main/demo/GroupViT_hf_inference_notebook.ipynb"),u(Ne,"rel","nofollow"),u(We,"href","https://huggingface.co/spaces/xvjiarui/GroupViT"),u(We,"rel","nofollow"),u(Be,"href","https://huggingface.co/xvjiarui"),u(Be,"rel","nofollow"),u(He,"href","https://github.com/NVlabs/GroupViT"),u(He,"rel","nofollow"),u(ce,"id","transformers.GroupViTConfig"),u(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ce,"href","#transformers.GroupViTConfig"),u(B,"class","relative group"),u(wt,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTConfig"),u(xt,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTModel"),u(Gt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(kt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(Mt,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTConfig"),u(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fe,"id","transformers.GroupViTTextConfig"),u(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fe,"href","#transformers.GroupViTTextConfig"),u(R,"class","relative group"),u(Ct,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTTextModel"),u(Qe,"href","https://huggingface.co/nvidia/groupvit-gcc-yfcc"),u(Qe,"rel","nofollow"),u(Et,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(jt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(he,"id","transformers.GroupViTVisionConfig"),u(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(he,"href","#transformers.GroupViTVisionConfig"),u(X,"class","relative group"),u(Pt,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTVisionModel"),u(tt,"href","https://huggingface.co/nvidia/groupvit-gcc-yfcc"),u(tt,"rel","nofollow"),u(zt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(qt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ve,"id","transformers.GroupViTModel"),u(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ve,"href","#transformers.GroupViTModel"),u(Q,"class","relative group"),u(st,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(st,"rel","nofollow"),u(It,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTModel"),u(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(At,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTModel"),u(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ot,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTModel"),u(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xe,"id","transformers.GroupViTTextModel"),u(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xe,"href","#transformers.GroupViTTextModel"),u(oe,"class","relative group"),u(Lt,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTTextModel"),u(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Me,"id","transformers.GroupViTVisionModel"),u(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Me,"href","#transformers.GroupViTVisionModel"),u(se,"class","relative group"),u(Dt,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTVisionModel"),u(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,d),v(t,T,f),v(t,m,f),e(m,c),e(c,_),V(n,_,null),e(m,p),e(m,k),e(k,un),v(t,zo,f),v(t,F,f),e(F,de),e(de,Zt),V(Se,Zt,null),e(F,mn),e(F,eo),e(eo,fn),v(t,qo,f),v(t,L,f),e(L,gn),e(L,Fe),e(Fe,hn),e(L,_n),e(L,$t),e($t,vn),e(L,Tn),v(t,Io,f),v(t,bt,f),e(bt,$n),v(t,Ao,f),v(t,Vt,f),e(Vt,to),e(to,bn),v(t,Oo,f),v(t,yt,f),e(yt,Vn),v(t,Lo,f),v(t,pe,f),e(pe,N),e(N,yn),e(N,oo),e(oo,wn),e(N,xn),e(N,no),e(no,Gn),e(N,kn),e(pe,Mn),e(pe,W),e(W,Cn),e(W,Ne),e(Ne,En),e(W,jn),e(W,We),e(We,Pn),e(W,zn),v(t,Do,f),v(t,D,f),e(D,qn),e(D,Be),e(Be,In),e(D,An),e(D,He),e(He,On),e(D,Ln),v(t,So,f),v(t,B,f),e(B,ce),e(ce,ro),V(Re,ro,null),e(B,Dn),e(B,so),e(so,Sn),v(t,Fo,f),v(t,C,f),V(Ue,C,null),e(C,Fn),e(C,ue),e(ue,wt),e(wt,Nn),e(ue,Wn),e(ue,xt),e(xt,Bn),e(ue,Hn),e(C,Rn),e(C,H),e(H,Un),e(H,Gt),e(Gt,Jn),e(H,Xn),e(H,kt),e(kt,Yn),e(H,Kn),e(C,Qn),e(C,me),V(Je,me,null),e(me,Zn),e(me,Xe),e(Xe,er),e(Xe,Mt),e(Mt,tr),e(Xe,or),v(t,No,f),v(t,R,f),e(R,fe),e(fe,ao),V(Ye,ao,null),e(R,nr),e(R,io),e(io,rr),v(t,Wo,f),v(t,E,f),V(Ke,E,null),e(E,sr),e(E,U),e(U,ar),e(U,Ct),e(Ct,ir),e(U,lr),e(U,Qe),e(Qe,dr),e(U,pr),e(E,cr),e(E,J),e(J,ur),e(J,Et),e(Et,mr),e(J,fr),e(J,jt),e(jt,gr),e(J,hr),e(E,_r),V(ge,E,null),v(t,Bo,f),v(t,X,f),e(X,he),e(he,lo),V(Ze,lo,null),e(X,vr),e(X,po),e(po,Tr),v(t,Ho,f),v(t,j,f),V(et,j,null),e(j,$r),e(j,Y),e(Y,br),e(Y,Pt),e(Pt,Vr),e(Y,yr),e(Y,tt),e(tt,wr),e(Y,xr),e(j,Gr),e(j,K),e(K,kr),e(K,zt),e(zt,Mr),e(K,Cr),e(K,qt),e(qt,Er),e(K,jr),e(j,Pr),V(_e,j,null),v(t,Ro,f),v(t,Q,f),e(Q,ve),e(ve,co),V(ot,co,null),e(Q,zr),e(Q,uo),e(uo,qr),v(t,Uo,f),v(t,M,f),V(nt,M,null),e(M,Ir),e(M,rt),e(rt,Ar),e(rt,st),e(st,Or),e(rt,Lr),e(M,Dr),e(M,P),V(at,P,null),e(P,Sr),e(P,Z),e(Z,Fr),e(Z,It),e(It,Nr),e(Z,Wr),e(Z,mo),e(mo,Br),e(Z,Hr),e(P,Rr),V(Te,P,null),e(P,Ur),V($e,P,null),e(M,Jr),e(M,z),V(it,z,null),e(z,Xr),e(z,ee),e(ee,Yr),e(ee,At),e(At,Kr),e(ee,Qr),e(ee,fo),e(fo,Zr),e(ee,es),e(z,ts),V(be,z,null),e(z,os),V(Ve,z,null),e(M,ns),e(M,q),V(lt,q,null),e(q,rs),e(q,te),e(te,ss),e(te,Ot),e(Ot,as),e(te,is),e(te,go),e(go,ls),e(te,ds),e(q,ps),V(ye,q,null),e(q,cs),V(we,q,null),v(t,Jo,f),v(t,oe,f),e(oe,xe),e(xe,ho),V(dt,ho,null),e(oe,us),e(oe,_o),e(_o,ms),v(t,Xo,f),v(t,ne,f),V(pt,ne,null),e(ne,fs),e(ne,I),V(ct,I,null),e(I,gs),e(I,re),e(re,hs),e(re,Lt),e(Lt,_s),e(re,vs),e(re,vo),e(vo,Ts),e(re,$s),e(I,bs),V(Ge,I,null),e(I,Vs),V(ke,I,null),v(t,Yo,f),v(t,se,f),e(se,Me),e(Me,To),V(ut,To,null),e(se,ys),e(se,$o),e($o,ws),v(t,Ko,f),v(t,ae,f),V(mt,ae,null),e(ae,xs),e(ae,A),V(ft,A,null),e(A,Gs),e(A,ie),e(ie,ks),e(ie,Dt),e(Dt,Ms),e(ie,Cs),e(ie,bo),e(bo,Es),e(ie,js),e(A,Ps),V(Ce,A,null),e(A,zs),V(Ee,A,null),Qo=!0},p(t,[f]){const gt={};f&2&&(gt.$$scope={dirty:f,ctx:t}),ge.$set(gt);const Vo={};f&2&&(Vo.$$scope={dirty:f,ctx:t}),_e.$set(Vo);const yo={};f&2&&(yo.$$scope={dirty:f,ctx:t}),Te.$set(yo);const wo={};f&2&&(wo.$$scope={dirty:f,ctx:t}),$e.$set(wo);const ht={};f&2&&(ht.$$scope={dirty:f,ctx:t}),be.$set(ht);const xo={};f&2&&(xo.$$scope={dirty:f,ctx:t}),Ve.$set(xo);const Go={};f&2&&(Go.$$scope={dirty:f,ctx:t}),ye.$set(Go);const ko={};f&2&&(ko.$$scope={dirty:f,ctx:t}),we.$set(ko);const le={};f&2&&(le.$$scope={dirty:f,ctx:t}),Ge.$set(le);const Mo={};f&2&&(Mo.$$scope={dirty:f,ctx:t}),ke.$set(Mo);const Co={};f&2&&(Co.$$scope={dirty:f,ctx:t}),Ce.$set(Co);const Eo={};f&2&&(Eo.$$scope={dirty:f,ctx:t}),Ee.$set(Eo)},i(t){Qo||(y(n.$$.fragment,t),y(Se.$$.fragment,t),y(Re.$$.fragment,t),y(Ue.$$.fragment,t),y(Je.$$.fragment,t),y(Ye.$$.fragment,t),y(Ke.$$.fragment,t),y(ge.$$.fragment,t),y(Ze.$$.fragment,t),y(et.$$.fragment,t),y(_e.$$.fragment,t),y(ot.$$.fragment,t),y(nt.$$.fragment,t),y(at.$$.fragment,t),y(Te.$$.fragment,t),y($e.$$.fragment,t),y(it.$$.fragment,t),y(be.$$.fragment,t),y(Ve.$$.fragment,t),y(lt.$$.fragment,t),y(ye.$$.fragment,t),y(we.$$.fragment,t),y(dt.$$.fragment,t),y(pt.$$.fragment,t),y(ct.$$.fragment,t),y(Ge.$$.fragment,t),y(ke.$$.fragment,t),y(ut.$$.fragment,t),y(mt.$$.fragment,t),y(ft.$$.fragment,t),y(Ce.$$.fragment,t),y(Ee.$$.fragment,t),Qo=!0)},o(t){w(n.$$.fragment,t),w(Se.$$.fragment,t),w(Re.$$.fragment,t),w(Ue.$$.fragment,t),w(Je.$$.fragment,t),w(Ye.$$.fragment,t),w(Ke.$$.fragment,t),w(ge.$$.fragment,t),w(Ze.$$.fragment,t),w(et.$$.fragment,t),w(_e.$$.fragment,t),w(ot.$$.fragment,t),w(nt.$$.fragment,t),w(at.$$.fragment,t),w(Te.$$.fragment,t),w($e.$$.fragment,t),w(it.$$.fragment,t),w(be.$$.fragment,t),w(Ve.$$.fragment,t),w(lt.$$.fragment,t),w(ye.$$.fragment,t),w(we.$$.fragment,t),w(dt.$$.fragment,t),w(pt.$$.fragment,t),w(ct.$$.fragment,t),w(Ge.$$.fragment,t),w(ke.$$.fragment,t),w(ut.$$.fragment,t),w(mt.$$.fragment,t),w(ft.$$.fragment,t),w(Ce.$$.fragment,t),w(Ee.$$.fragment,t),Qo=!1},d(t){o(d),t&&o(T),t&&o(m),x(n),t&&o(zo),t&&o(F),x(Se),t&&o(qo),t&&o(L),t&&o(Io),t&&o(bt),t&&o(Ao),t&&o(Vt),t&&o(Oo),t&&o(yt),t&&o(Lo),t&&o(pe),t&&o(Do),t&&o(D),t&&o(So),t&&o(B),x(Re),t&&o(Fo),t&&o(C),x(Ue),x(Je),t&&o(No),t&&o(R),x(Ye),t&&o(Wo),t&&o(E),x(Ke),x(ge),t&&o(Bo),t&&o(X),x(Ze),t&&o(Ho),t&&o(j),x(et),x(_e),t&&o(Ro),t&&o(Q),x(ot),t&&o(Uo),t&&o(M),x(nt),x(at),x(Te),x($e),x(it),x(be),x(Ve),x(lt),x(ye),x(we),t&&o(Jo),t&&o(oe),x(dt),t&&o(Xo),t&&o(ne),x(pt),x(ct),x(Ge),x(ke),t&&o(Yo),t&&o(se),x(ut),t&&o(Ko),t&&o(ae),x(mt),x(ft),x(Ce),x(Ee)}}}const Xa={local:"groupvit",sections:[{local:"overview",title:"Overview"},{local:"transformers.GroupViTConfig",title:"GroupViTConfig"},{local:"transformers.GroupViTTextConfig",title:"GroupViTTextConfig"},{local:"transformers.GroupViTVisionConfig",title:"GroupViTVisionConfig"},{local:"transformers.GroupViTModel",title:"GroupViTModel"},{local:"transformers.GroupViTTextModel",title:"GroupViTTextModel"},{local:"transformers.GroupViTVisionModel",title:"GroupViTVisionModel"}],title:"GroupViT"};function Ya(G){return Ia(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ni extends ja{constructor(d){super();Pa(this,d,Ya,Ja,za,{})}}export{ni as default,Xa as metadata};
