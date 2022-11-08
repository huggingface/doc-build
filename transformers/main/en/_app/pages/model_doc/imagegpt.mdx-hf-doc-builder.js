import{S as kc,i as $c,s as Gc,e as a,k as l,w as b,t as r,M as xc,c as n,d as t,m as d,a as s,x as y,h as i,b as m,N as Ec,G as e,g,y as I,q as P,o as w,B as k,v as zc,L as yn}from"../../chunks/vendor-hf-doc-builder.js";import{T as wl}from"../../chunks/Tip-hf-doc-builder.js";import{D as ae}from"../../chunks/Docstring-hf-doc-builder.js";import{C as In}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as We}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as bn}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Cc($){let p,v,_,u,T;return u=new In({props:{code:`from transformers import ImageGPTConfig, ImageGPTModel

# Initializing a ImageGPT configuration
configuration = ImageGPTConfig()

# Initializing a model (with random weights) from the configuration
model = ImageGPTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ImageGPTConfig, ImageGPTModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ImageGPT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ImageGPTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ImageGPTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=a("p"),v=r("Example:"),_=l(),b(u.$$.fragment)},l(c){p=n(c,"P",{});var f=s(p);v=i(f,"Example:"),f.forEach(t),_=d(c),y(u.$$.fragment,c)},m(c,f){g(c,p,f),e(p,v),g(c,_,f),I(u,c,f),T=!0},p:yn,i(c){T||(P(u.$$.fragment,c),T=!0)},o(c){w(u.$$.fragment,c),T=!1},d(c){c&&t(p),c&&t(_),k(u,c)}}}function qc($){let p,v,_,u,T;return{c(){p=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){p=n(c,"P",{});var f=s(p);v=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n(f,"CODE",{});var O=s(_);u=i(O,"Module"),O.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(c,f){g(c,p,f),e(p,v),e(p,_),e(_,u),e(p,T)},d(c){c&&t(p)}}}function Mc($){let p,v,_,u,T;return u=new In({props:{code:`from transformers import ImageGPTFeatureExtractor, ImageGPTModel
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ImageGPTFeatureExtractor.from_pretrained("openai/imagegpt-small")
model = ImageGPTModel.from_pretrained("openai/imagegpt-small")

inputs = feature_extractor(images=image, return_tensors="pt")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ImageGPTFeatureExtractor, ImageGPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ImageGPTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;openai/imagegpt-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ImageGPTModel.from_pretrained(<span class="hljs-string">&quot;openai/imagegpt-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=a("p"),v=r("Examples:"),_=l(),b(u.$$.fragment)},l(c){p=n(c,"P",{});var f=s(p);v=i(f,"Examples:"),f.forEach(t),_=d(c),y(u.$$.fragment,c)},m(c,f){g(c,p,f),e(p,v),g(c,_,f),I(u,c,f),T=!0},p:yn,i(c){T||(P(u.$$.fragment,c),T=!0)},o(c){w(u.$$.fragment,c),T=!1},d(c){c&&t(p),c&&t(_),k(u,c)}}}function Fc($){let p,v,_,u,T;return{c(){p=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){p=n(c,"P",{});var f=s(p);v=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n(f,"CODE",{});var O=s(_);u=i(O,"Module"),O.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(c,f){g(c,p,f),e(p,v),e(p,_),e(_,u),e(p,T)},d(c){c&&t(p)}}}function jc($){let p,v,_,u,T;return u=new In({props:{code:`from transformers import ImageGPTFeatureExtractor, ImageGPTForCausalImageModeling
import torch
import matplotlib.pyplot as plt
import numpy as np

feature_extractor = ImageGPTFeatureExtractor.from_pretrained("openai/imagegpt-small")
model = ImageGPTForCausalImageModeling.from_pretrained("openai/imagegpt-small")
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

# unconditional generation of 8 images
batch_size = 8
context = torch.full((batch_size, 1), model.config.vocab_size - 1)  # initialize with SOS token
context = torch.tensor(context).to(device)
output = model.generate(
    input_ids=context, max_length=model.config.n_positions + 1, temperature=1.0, do_sample=True, top_k=40
)

clusters = feature_extractor.clusters
height = feature_extractor.size["height"]
width = feature_extractor.size["width"]

samples = output[:, 1:].cpu().detach().numpy()
samples_img = [
    np.reshape(np.rint(127.5 * (clusters[s] + 1.0)), [height, width, 3]).astype(np.uint8) for s in samples
]  # convert color cluster tokens back to pixels
f, axes = plt.subplots(1, batch_size, dpi=300)

for img, ax in zip(samples_img, axes):
    ax.axis("off")
    ax.imshow(img)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ImageGPTFeatureExtractor, ImageGPTForCausalImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> matplotlib.pyplot <span class="hljs-keyword">as</span> plt
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ImageGPTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;openai/imagegpt-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ImageGPTForCausalImageModeling.from_pretrained(<span class="hljs-string">&quot;openai/imagegpt-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>device = torch.device(<span class="hljs-string">&quot;cuda&quot;</span> <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> <span class="hljs-string">&quot;cpu&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.to(device)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># unconditional generation of 8 images</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>batch_size = <span class="hljs-number">8</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>context = torch.full((batch_size, <span class="hljs-number">1</span>), model.config.vocab_size - <span class="hljs-number">1</span>)  <span class="hljs-comment"># initialize with SOS token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>context = torch.tensor(context).to(device)
<span class="hljs-meta">&gt;&gt;&gt; </span>output = model.generate(
<span class="hljs-meta">... </span>    input_ids=context, max_length=model.config.n_positions + <span class="hljs-number">1</span>, temperature=<span class="hljs-number">1.0</span>, do_sample=<span class="hljs-literal">True</span>, top_k=<span class="hljs-number">40</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>clusters = feature_extractor.clusters
<span class="hljs-meta">&gt;&gt;&gt; </span>height = feature_extractor.size[<span class="hljs-string">&quot;height&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>width = feature_extractor.size[<span class="hljs-string">&quot;width&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>samples = output[:, <span class="hljs-number">1</span>:].cpu().detach().numpy()
<span class="hljs-meta">&gt;&gt;&gt; </span>samples_img = [
<span class="hljs-meta">... </span>    np.reshape(np.rint(<span class="hljs-number">127.5</span> * (clusters[s] + <span class="hljs-number">1.0</span>)), [height, width, <span class="hljs-number">3</span>]).astype(np.uint8) <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> samples
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># convert color cluster tokens back to pixels</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>f, axes = plt.subplots(<span class="hljs-number">1</span>, batch_size, dpi=<span class="hljs-number">300</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> img, ax <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(samples_img, axes):
<span class="hljs-meta">... </span>    ax.axis(<span class="hljs-string">&quot;off&quot;</span>)
<span class="hljs-meta">... </span>    ax.imshow(img)`}}),{c(){p=a("p"),v=r("Examples:"),_=l(),b(u.$$.fragment)},l(c){p=n(c,"P",{});var f=s(p);v=i(f,"Examples:"),f.forEach(t),_=d(c),y(u.$$.fragment,c)},m(c,f){g(c,p,f),e(p,v),g(c,_,f),I(u,c,f),T=!0},p:yn,i(c){T||(P(u.$$.fragment,c),T=!0)},o(c){w(u.$$.fragment,c),T=!1},d(c){c&&t(p),c&&t(_),k(u,c)}}}function Dc($){let p,v,_,u,T;return{c(){p=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){p=n(c,"P",{});var f=s(p);v=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n(f,"CODE",{});var O=s(_);u=i(O,"Module"),O.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(c,f){g(c,p,f),e(p,v),e(p,_),e(_,u),e(p,T)},d(c){c&&t(p)}}}function Ac($){let p,v,_,u,T;return u=new In({props:{code:`from transformers import ImageGPTFeatureExtractor, ImageGPTForImageClassification
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ImageGPTFeatureExtractor.from_pretrained("openai/imagegpt-small")
model = ImageGPTForImageClassification.from_pretrained("openai/imagegpt-small")

inputs = feature_extractor(images=image, return_tensors="pt")
outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ImageGPTFeatureExtractor, ImageGPTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ImageGPTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;openai/imagegpt-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ImageGPTForImageClassification.from_pretrained(<span class="hljs-string">&quot;openai/imagegpt-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=a("p"),v=r("Examples:"),_=l(),b(u.$$.fragment)},l(c){p=n(c,"P",{});var f=s(p);v=i(f,"Examples:"),f.forEach(t),_=d(c),y(u.$$.fragment,c)},m(c,f){g(c,p,f),e(p,v),g(c,_,f),I(u,c,f),T=!0},p:yn,i(c){T||(P(u.$$.fragment,c),T=!0)},o(c){w(u.$$.fragment,c),T=!1},d(c){c&&t(p),c&&t(_),k(u,c)}}}function Nc($){let p,v,_,u,T,c,f,O,Pn,xa,ie,Te,eo,He,wn,to,kn,Ea,ve,$n,Be,Gn,xn,za,Ct,En,Ca,qt,oo,zn,qa,be,kl,Ma,Mt,Cn,Fa,S,qn,Ve,Mn,Fn,Ue,jn,Dn,Je,An,Nn,ja,Ft,On,Da,G,Xe,Ln,Ye,Sn,Rn,Wn,Qe,Hn,jt,Bn,Vn,Un,Ke,Jn,Dt,Xn,Yn,Qn,Ze,Kn,ao,Zn,es,ts,et,os,At,as,ns,ss,no,rs,Aa,ye,so,x,ro,io,is,ls,lo,co,ds,cs,mo,po,ms,ps,ho,go,hs,gs,uo,fo,us,fs,_o,To,_s,Ts,E,z,vo,vs,bs,bo,ys,Is,yo,Ps,ws,Io,ks,$s,Po,Gs,xs,wo,Es,zs,C,ko,Cs,qs,$o,Ms,Fs,Go,js,Ds,xo,As,Ns,Eo,Os,Ls,zo,Ss,Rs,q,Co,Ws,Hs,qo,Bs,Vs,Mo,Us,Js,Fo,Xs,Ys,jo,Qs,Ks,Do,Zs,er,M,Ao,tr,or,No,ar,nr,Oo,sr,rr,Lo,ir,lr,So,dr,cr,Ro,mr,pr,F,Wo,hr,gr,Ho,ur,fr,Bo,_r,Tr,Vo,vr,br,Uo,yr,Ir,Jo,Pr,wr,j,Xo,kr,$r,Yo,Gr,xr,Qo,Er,zr,Ko,Cr,qr,Zo,Mr,Fr,ea,jr,Na,le,Ie,ta,tt,Dr,oa,Ar,Oa,L,ot,Nr,ee,Or,Nt,Lr,Sr,aa,Rr,Wr,at,Hr,Br,Vr,de,Ur,Ot,Jr,Xr,Lt,Yr,Qr,Kr,Pe,La,ce,we,na,nt,Zr,sa,ei,Sa,te,st,ti,ra,oi,ai,ke,rt,ni,ia,si,Ra,me,$e,la,it,ri,da,ii,Wa,oe,lt,li,ca,di,ci,Ge,dt,mi,ma,pi,Ha,pe,xe,pa,ct,hi,ha,gi,Ba,D,mt,ui,ga,fi,_i,pt,Ti,St,vi,bi,yi,ht,Ii,gt,Pi,wi,ki,R,ut,$i,he,Gi,Rt,xi,Ei,ua,zi,Ci,qi,Ee,Mi,ze,Va,ge,Ce,fa,ft,Fi,_a,ji,Ua,A,_t,Di,Ta,Ai,Ni,Tt,Oi,Wt,Li,Si,Ri,vt,Wi,bt,Hi,Bi,Vi,W,yt,Ui,ue,Ji,Ht,Xi,Yi,va,Qi,Ki,Zi,qe,el,Me,Ja,fe,Fe,ba,It,tl,ya,ol,Xa,N,Pt,al,wt,nl,Bt,sl,rl,il,kt,ll,Vt,dl,cl,ml,$t,pl,Gt,hl,gl,ul,H,xt,fl,_e,_l,Ut,Tl,vl,Ia,bl,yl,Il,je,Pl,De,Ya;return c=new We({}),He=new We({}),tt=new We({}),ot=new ae({props:{name:"class transformers.ImageGPTConfig",anchor:"transformers.ImageGPTConfig",parameters:[{name:"vocab_size",val:" = 513"},{name:"n_positions",val:" = 1024"},{name:"n_embd",val:" = 512"},{name:"n_layer",val:" = 24"},{name:"n_head",val:" = 8"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'quick_gelu'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"scale_attn_weights",val:" = True"},{name:"use_cache",val:" = True"},{name:"tie_word_embeddings",val:" = False"},{name:"scale_attn_by_inverse_layer_idx",val:" = False"},{name:"reorder_and_upcast_attn",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ImageGPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTModel">ImageGPTModel</a> or <code>TFImageGPTModel</code>.`,name:"vocab_size"},{anchor:"transformers.ImageGPTConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 32*32) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.ImageGPTConfig.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.ImageGPTConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.ImageGPTConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.ImageGPTConfig.n_inner",description:`<strong>n_inner</strong> (<code>int</code>, <em>optional</em>, defaults to None) &#x2014;
Dimensionality of the inner feed-forward layers. <code>None</code> will set it to 4 times n_embd`,name:"n_inner"},{anchor:"transformers.ImageGPTConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
Activation function (can be one of the activation functions defined in src/transformers/activations.py).
Defaults to &#x201C;quick_gelu&#x201D;.`,name:"activation_function"},{anchor:"transformers.ImageGPTConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.ImageGPTConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.ImageGPTConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.ImageGPTConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.ImageGPTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ImageGPTConfig.scale_attn_weights",description:`<strong>scale_attn_weights</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale attention weights by dividing by sqrt(hidden_size)..`,name:"scale_attn_weights"},{anchor:"transformers.ImageGPTConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.ImageGPTConfig.scale_attn_by_inverse_layer_idx",description:`<strong>scale_attn_by_inverse_layer_idx</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to additionally scale attention weights by <code>1 / layer_idx + 1</code>.`,name:"scale_attn_by_inverse_layer_idx"},{anchor:"transformers.ImageGPTConfig.reorder_and_upcast_attn",description:`<strong>reorder_and_upcast_attn</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to scale keys (K) prior to computing attention (dot-product) and upcast attention
dot-product/softmax to float() when training with mixed precision.`,name:"reorder_and_upcast_attn"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/imagegpt/configuration_imagegpt.py#L37"}}),Pe=new bn({props:{anchor:"transformers.ImageGPTConfig.example",$$slots:{default:[Cc]},$$scope:{ctx:$}}}),nt=new We({}),st=new ae({props:{name:"class transformers.ImageGPTImageProcessor",anchor:"transformers.ImageGPTImageProcessor",parameters:[{name:"clusters",val:": typing.Optional[numpy.ndarray] = None"},{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:": bool = True"},{name:"do_color_quantize",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ImageGPTImageProcessor.clusters",description:`<strong>clusters</strong> (<code>np.ndarray</code>, <em>optional</em>) &#x2014;
The color clusters to use, as a <code>np.ndarray</code> of shape <code>(n_clusters, 3)</code> when color quantizing. Can be
overriden by <code>clusters</code> in <code>preprocess</code>.`,name:"clusters"},{anchor:"transformers.ImageGPTImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s dimensions to <code>(size[&quot;height&quot;], size[&quot;width&quot;])</code>. Can be overridden by
<code>do_resize</code> in <code>preprocess</code>.`,name:"do_resize"},{anchor:"transformers.ImageGPTImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;height&quot; -- 256, &quot;width&quot;: 256}</code>):
Size of the image after resizing. Can be overridden by <code>size</code> in <code>preprocess</code>.`,name:"size"},{anchor:"transformers.ImageGPTImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BICUBIC</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by <code>resample</code> in <code>preprocess</code>.`,name:"resample"},{anchor:"transformers.ImageGPTImageProcessor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize the image pixel value to between [-1, 1]. Can be overridden by <code>do_normalize</code> in
<code>preprocess</code>.`,name:"do_normalize"},{anchor:"transformers.ImageGPTImageProcessor.do_color_quantize",description:`<strong>do_color_quantize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to color quantize the image. Can be overridden by <code>do_color_quantize</code> in <code>preprocess</code>.`,name:"do_color_quantize"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/imagegpt/image_processing_imagegpt.py#L52"}}),rt=new ae({props:{name:"__call__",anchor:"transformers.ImageGPTImageProcessor.__call__",parameters:[{name:"images",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/image_processing_utils.py#L435"}}),it=new We({}),lt=new ae({props:{name:"class transformers.ImageGPTImageProcessor",anchor:"transformers.ImageGPTImageProcessor",parameters:[{name:"clusters",val:": typing.Optional[numpy.ndarray] = None"},{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:": bool = True"},{name:"do_color_quantize",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ImageGPTImageProcessor.clusters",description:`<strong>clusters</strong> (<code>np.ndarray</code>, <em>optional</em>) &#x2014;
The color clusters to use, as a <code>np.ndarray</code> of shape <code>(n_clusters, 3)</code> when color quantizing. Can be
overriden by <code>clusters</code> in <code>preprocess</code>.`,name:"clusters"},{anchor:"transformers.ImageGPTImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s dimensions to <code>(size[&quot;height&quot;], size[&quot;width&quot;])</code>. Can be overridden by
<code>do_resize</code> in <code>preprocess</code>.`,name:"do_resize"},{anchor:"transformers.ImageGPTImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;height&quot; -- 256, &quot;width&quot;: 256}</code>):
Size of the image after resizing. Can be overridden by <code>size</code> in <code>preprocess</code>.`,name:"size"},{anchor:"transformers.ImageGPTImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BICUBIC</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by <code>resample</code> in <code>preprocess</code>.`,name:"resample"},{anchor:"transformers.ImageGPTImageProcessor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize the image pixel value to between [-1, 1]. Can be overridden by <code>do_normalize</code> in
<code>preprocess</code>.`,name:"do_normalize"},{anchor:"transformers.ImageGPTImageProcessor.do_color_quantize",description:`<strong>do_color_quantize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to color quantize the image. Can be overridden by <code>do_color_quantize</code> in <code>preprocess</code>.`,name:"do_color_quantize"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/imagegpt/image_processing_imagegpt.py#L52"}}),dt=new ae({props:{name:"preprocess",anchor:"transformers.ImageGPTImageProcessor.preprocess",parameters:[{name:"images",val:": typing.Union[ForwardRef('PIL.Image.Image'), numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[ForwardRef('PIL.Image.Image')], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"do_resize",val:": bool = None"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = None"},{name:"do_normalize",val:": bool = None"},{name:"do_color_quantize",val:": typing.Optional[bool] = None"},{name:"clusters",val:": typing.Union[int, typing.List[int], NoneType] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"data_format",val:": typing.Union[str, transformers.image_utils.ChannelDimension, NoneType] = <ChannelDimension.FIRST: 'channels_first'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ImageGPTImageProcessor.preprocess.images",description:`<strong>images</strong> (<code>ImageInput</code>) &#x2014;
Image to preprocess.`,name:"images"},{anchor:"transformers.ImageGPTImageProcessor.preprocess.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_resize</code>) &#x2014;
Whether to resize the image.`,name:"do_resize"},{anchor:"transformers.ImageGPTImageProcessor.preprocess.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>self.size</code>) &#x2014;
Size of the image after resizing.`,name:"size"},{anchor:"transformers.ImageGPTImageProcessor.preprocess.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>self.resample</code>) &#x2014;
Resampling filter to use if resizing the image. This can be one of the enum <code>PILImageResampling</code>, Only
has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ImageGPTImageProcessor.preprocess.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_normalize</code>) &#x2014;
Whether to normalize the image`,name:"do_normalize"},{anchor:"transformers.ImageGPTImageProcessor.preprocess.do_color_quantize",description:`<strong>do_color_quantize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_color_quantize</code>) &#x2014;
Whether to color quantize the image.`,name:"do_color_quantize"},{anchor:"transformers.ImageGPTImageProcessor.preprocess.clusters",description:`<strong>clusters</strong> (<code>np.ndarray</code>, <em>optional</em>, defaults to <code>self.clusters</code>) &#x2014;
Clusters used to quantize the image of shape <code>(n_clusters, 3)</code>. Only has an effect if
<code>do_color_quantize</code> is set to <code>True</code>.`,name:"clusters"},{anchor:"transformers.ImageGPTImageProcessor.preprocess.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <code>TensorType</code>, <em>optional</em>) &#x2014;
The type of tensors to return. Can be one of:<ul>
<li>Unset: Return a list of <code>np.ndarray</code>.</li>
<li><code>TensorType.TENSORFLOW</code> or <code>&apos;tf&apos;</code>: Return a batch of type <code>tf.Tensor</code>.</li>
<li><code>TensorType.PYTORCH</code> or <code>&apos;pt&apos;</code>: Return a batch of type <code>torch.Tensor</code>.</li>
<li><code>TensorType.NUMPY</code> or <code>&apos;np&apos;</code>: Return a batch of type <code>np.ndarray</code>.</li>
<li><code>TensorType.JAX</code> or <code>&apos;jax&apos;</code>: Return a batch of type <code>jax.numpy.ndarray</code>.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.ImageGPTImageProcessor.preprocess.data_format",description:`<strong>data_format</strong> (<code>ChannelDimension</code> or <code>str</code>, <em>optional</em>, defaults to <code>ChannelDimension.FIRST</code>) &#x2014;
The channel dimension format for the output image. Can be one of:<ul>
<li><code>ChannelDimension.FIRST</code>: image in (num_channels, height, width) format.</li>
<li><code>ChannelDimension.LAST</code>: image in (height, width, num_channels) format.
Only has an effect if <code>do_color_quantize</code> is set to <code>False</code>.</li>
</ul>`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/imagegpt/image_processing_imagegpt.py#L145"}}),ct=new We({}),mt=new ae({props:{name:"class transformers.ImageGPTModel",anchor:"transformers.ImageGPTModel",parameters:[{name:"config",val:": ImageGPTConfig"}],parametersDescription:[{anchor:"transformers.ImageGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTConfig">ImageGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/imagegpt/modeling_imagegpt.py#L617"}}),ut=new ae({props:{name:"forward",anchor:"transformers.ImageGPTModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:": typing.Any"}],parametersDescription:[{anchor:"transformers.ImageGPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTImageProcessor">ImageGPTFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">ImageGPTFeatureExtractor.<strong>call</strong>()</a> for
details.`,name:"input_ids"},{anchor:"transformers.ImageGPTModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.ImageGPTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ImageGPTModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ImageGPTModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ImageGPTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ImageGPTModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.ImageGPTModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.ImageGPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ImageGPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ImageGPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ImageGPTModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/imagegpt/modeling_imagegpt.py#L652",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTConfig"
>ImageGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ee=new wl({props:{$$slots:{default:[qc]},$$scope:{ctx:$}}}),ze=new bn({props:{anchor:"transformers.ImageGPTModel.forward.example",$$slots:{default:[Mc]},$$scope:{ctx:$}}}),ft=new We({}),_t=new ae({props:{name:"class transformers.ImageGPTForCausalImageModeling",anchor:"transformers.ImageGPTForCausalImageModeling",parameters:[{name:"config",val:": ImageGPTConfig"}],parametersDescription:[{anchor:"transformers.ImageGPTForCausalImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTConfig">ImageGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/imagegpt/modeling_imagegpt.py#L897"}}),yt=new ae({props:{name:"forward",anchor:"transformers.ImageGPTForCausalImageModeling.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:": typing.Any"}],parametersDescription:[{anchor:"transformers.ImageGPTForCausalImageModeling.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTImageProcessor">ImageGPTFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">ImageGPTFeatureExtractor.<strong>call</strong>()</a> for
details.`,name:"input_ids"},{anchor:"transformers.ImageGPTForCausalImageModeling.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.ImageGPTForCausalImageModeling.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ImageGPTForCausalImageModeling.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ImageGPTForCausalImageModeling.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ImageGPTForCausalImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ImageGPTForCausalImageModeling.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.ImageGPTForCausalImageModeling.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.ImageGPTForCausalImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ImageGPTForCausalImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ImageGPTForCausalImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ImageGPTForCausalImageModeling.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/imagegpt/modeling_imagegpt.py#L945",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTConfig"
>ImageGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qe=new wl({props:{$$slots:{default:[Fc]},$$scope:{ctx:$}}}),Me=new bn({props:{anchor:"transformers.ImageGPTForCausalImageModeling.forward.example",$$slots:{default:[jc]},$$scope:{ctx:$}}}),It=new We({}),Pt=new ae({props:{name:"class transformers.ImageGPTForImageClassification",anchor:"transformers.ImageGPTForImageClassification",parameters:[{name:"config",val:": ImageGPTConfig"}],parametersDescription:[{anchor:"transformers.ImageGPTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTConfig">ImageGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/imagegpt/modeling_imagegpt.py#L1086"}}),xt=new ae({props:{name:"forward",anchor:"transformers.ImageGPTForImageClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:": typing.Any"}],parametersDescription:[{anchor:"transformers.ImageGPTForImageClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTImageProcessor">ImageGPTFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">ImageGPTFeatureExtractor.<strong>call</strong>()</a> for
details.`,name:"input_ids"},{anchor:"transformers.ImageGPTForImageClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.ImageGPTForImageClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ImageGPTForImageClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ImageGPTForImageClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ImageGPTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ImageGPTForImageClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.ImageGPTForImageClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.ImageGPTForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ImageGPTForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ImageGPTForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ImageGPTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/imagegpt/modeling_imagegpt.py#L1098",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTConfig"
>ImageGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>)</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
<p><code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),je=new wl({props:{$$slots:{default:[Dc]},$$scope:{ctx:$}}}),De=new bn({props:{anchor:"transformers.ImageGPTForImageClassification.forward.example",$$slots:{default:[Ac]},$$scope:{ctx:$}}}),{c(){p=a("meta"),v=l(),_=a("h1"),u=a("a"),T=a("span"),b(c.$$.fragment),f=l(),O=a("span"),Pn=r("ImageGPT"),xa=l(),ie=a("h2"),Te=a("a"),eo=a("span"),b(He.$$.fragment),wn=l(),to=a("span"),kn=r("Overview"),Ea=l(),ve=a("p"),$n=r("The ImageGPT model was proposed in "),Be=a("a"),Gn=r("Generative Pretraining from Pixels"),xn=r(` by Mark
Chen, Alec Radford, Rewon Child, Jeffrey Wu, Heewoo Jun, David Luan, Ilya Sutskever. ImageGPT (iGPT) is a GPT-2-like
model trained to predict the next pixel value, allowing for both unconditional and conditional image generation.`),za=l(),Ct=a("p"),En=r("The abstract from the paper is the following:"),Ca=l(),qt=a("p"),oo=a("em"),zn=r(`Inspired by progress in unsupervised representation learning for natural language, we examine whether similar models
can learn useful representations for images. We train a sequence Transformer to auto-regressively predict pixels,
without incorporating knowledge of the 2D input structure. Despite training on low-resolution ImageNet without labels,
we find that a GPT-2 scale model learns strong image representations as measured by linear probing, fine-tuning, and
low-data classification. On CIFAR-10, we achieve 96.3% accuracy with a linear probe, outperforming a supervised Wide
ResNet, and 99.0% accuracy with full fine-tuning, matching the top supervised pre-trained models. We are also
competitive with self-supervised benchmarks on ImageNet when substituting pixels for a VQVAE encoding, achieving 69.0%
top-1 accuracy on a linear probe of our features.`),qa=l(),be=a("img"),Ma=l(),Mt=a("small"),Cn=r("Summary of the approach. Taken from the [original paper](https://cdn.openai.com/papers/Generative_Pretraining_from_Pixels_V2.pdf)."),Fa=l(),S=a("p"),qn=r("This model was contributed by "),Ve=a("a"),Mn=r("nielsr"),Fn=r(", based on "),Ue=a("a"),jn=r("this issue"),Dn=r(`. The original code can be found
`),Je=a("a"),An=r("here"),Nn=r("."),ja=l(),Ft=a("p"),On=r("Tips:"),Da=l(),G=a("ul"),Xe=a("li"),Ln=r(`Demo notebooks for ImageGPT can be found
`),Ye=a("a"),Sn=r("here"),Rn=r("."),Wn=l(),Qe=a("li"),Hn=r("ImageGPT is almost exactly the same as "),jt=a("a"),Bn=r("GPT-2"),Vn=r(`, with the exception that a different activation
function is used (namely \u201Cquick gelu\u201D), and the layer normalization layers don\u2019t mean center the inputs. ImageGPT
also doesn\u2019t have tied input- and output embeddings.`),Un=l(),Ke=a("li"),Jn=r(`As the time- and memory requirements of the attention mechanism of Transformers scales quadratically in the sequence
length, the authors pre-trained ImageGPT on smaller input resolutions, such as 32x32 and 64x64. However, feeding a
sequence of 32x32x3=3072 tokens from 0..255 into a Transformer is still prohibitively large. Therefore, the authors
applied k-means clustering to the (R,G,B) pixel values with k=512. This way, we only have a 32*32 = 1024-long
sequence, but now of integers in the range 0..511. So we are shrinking the sequence length at the cost of a bigger
embedding matrix. In other words, the vocabulary size of ImageGPT is 512, + 1 for a special \u201Cstart of sentence\u201D (SOS)
token, used at the beginning of every sequence. One can use `),Dt=a("a"),Xn=r("ImageGPTFeatureExtractor"),Yn=r(` to prepare
images for the model.`),Qn=l(),Ze=a("li"),Kn=r(`Despite being pre-trained entirely unsupervised (i.e. without the use of any labels), ImageGPT produces fairly
performant image features useful for downstream tasks, such as image classification. The authors showed that the
features in the middle of the network are the most performant, and can be used as-is to train a linear model (such as
a sklearn logistic regression model for example). This is also referred to as \u201Clinear probing\u201D. Features can be
easily obtained by first forwarding the image through the model, then specifying `),ao=a("code"),Zn=r("output_hidden_states=True"),es=r(`, and
then average-pool the hidden states at whatever layer you like.`),ts=l(),et=a("li"),os=r(`Alternatively, one can further fine-tune the entire model on a downstream dataset, similar to BERT. For this, you can
use `),At=a("a"),as=r("ImageGPTForImageClassification"),ns=r("."),ss=l(),no=a("li"),rs=r(`ImageGPT comes in different sizes: there\u2019s ImageGPT-small, ImageGPT-medium and ImageGPT-large. The authors did also
train an XL variant, which they didn\u2019t release. The differences in size are summarized in the following table:`),Aa=l(),ye=a("table"),so=a("thead"),x=a("tr"),ro=a("th"),io=a("strong"),is=r("Model variant"),ls=l(),lo=a("th"),co=a("strong"),ds=r("Depths"),cs=l(),mo=a("th"),po=a("strong"),ms=r("Hidden sizes"),ps=l(),ho=a("th"),go=a("strong"),hs=r("Decoder hidden size"),gs=l(),uo=a("th"),fo=a("strong"),us=r("Params (M)"),fs=l(),_o=a("th"),To=a("strong"),_s=r("ImageNet-1k Top 1"),Ts=l(),E=a("tbody"),z=a("tr"),vo=a("td"),vs=r("MiT-b0"),bs=l(),bo=a("td"),ys=r("[2, 2, 2, 2]"),Is=l(),yo=a("td"),Ps=r("[32, 64, 160, 256]"),ws=l(),Io=a("td"),ks=r("256"),$s=l(),Po=a("td"),Gs=r("3.7"),xs=l(),wo=a("td"),Es=r("70.5"),zs=l(),C=a("tr"),ko=a("td"),Cs=r("MiT-b1"),qs=l(),$o=a("td"),Ms=r("[2, 2, 2, 2]"),Fs=l(),Go=a("td"),js=r("[64, 128, 320, 512]"),Ds=l(),xo=a("td"),As=r("256"),Ns=l(),Eo=a("td"),Os=r("14.0"),Ls=l(),zo=a("td"),Ss=r("78.7"),Rs=l(),q=a("tr"),Co=a("td"),Ws=r("MiT-b2"),Hs=l(),qo=a("td"),Bs=r("[3, 4, 6, 3]"),Vs=l(),Mo=a("td"),Us=r("[64, 128, 320, 512]"),Js=l(),Fo=a("td"),Xs=r("768"),Ys=l(),jo=a("td"),Qs=r("25.4"),Ks=l(),Do=a("td"),Zs=r("81.6"),er=l(),M=a("tr"),Ao=a("td"),tr=r("MiT-b3"),or=l(),No=a("td"),ar=r("[3, 4, 18, 3]"),nr=l(),Oo=a("td"),sr=r("[64, 128, 320, 512]"),rr=l(),Lo=a("td"),ir=r("768"),lr=l(),So=a("td"),dr=r("45.2"),cr=l(),Ro=a("td"),mr=r("83.1"),pr=l(),F=a("tr"),Wo=a("td"),hr=r("MiT-b4"),gr=l(),Ho=a("td"),ur=r("[3, 8, 27, 3]"),fr=l(),Bo=a("td"),_r=r("[64, 128, 320, 512]"),Tr=l(),Vo=a("td"),vr=r("768"),br=l(),Uo=a("td"),yr=r("62.6"),Ir=l(),Jo=a("td"),Pr=r("83.6"),wr=l(),j=a("tr"),Xo=a("td"),kr=r("MiT-b5"),$r=l(),Yo=a("td"),Gr=r("[3, 6, 40, 3]"),xr=l(),Qo=a("td"),Er=r("[64, 128, 320, 512]"),zr=l(),Ko=a("td"),Cr=r("768"),qr=l(),Zo=a("td"),Mr=r("82.0"),Fr=l(),ea=a("td"),jr=r("83.8"),Na=l(),le=a("h2"),Ie=a("a"),ta=a("span"),b(tt.$$.fragment),Dr=l(),oa=a("span"),Ar=r("ImageGPTConfig"),Oa=l(),L=a("div"),b(ot.$$.fragment),Nr=l(),ee=a("p"),Or=r("This is the configuration class to store the configuration of a "),Nt=a("a"),Lr=r("ImageGPTModel"),Sr=r(" or a "),aa=a("code"),Rr=r("TFImageGPTModel"),Wr=r(`. It is
used to instantiate a GPT-2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ImageGPT
`),at=a("a"),Hr=r("openai/imagegpt-small"),Br=r(" architecture."),Vr=l(),de=a("p"),Ur=r("Configuration objects inherit from "),Ot=a("a"),Jr=r("PretrainedConfig"),Xr=r(` and can be used to control the model outputs. Read the
documentation from `),Lt=a("a"),Yr=r("PretrainedConfig"),Qr=r(" for more information."),Kr=l(),b(Pe.$$.fragment),La=l(),ce=a("h2"),we=a("a"),na=a("span"),b(nt.$$.fragment),Zr=l(),sa=a("span"),ei=r("ImageGPTFeatureExtractor"),Sa=l(),te=a("div"),b(st.$$.fragment),ti=l(),ra=a("p"),oi=r(`Constructs a ImageGPT image processor. This image processor can be used to resize images to a smaller resolution
(such as 32x32 or 64x64), normalize them and finally color quantize them to obtain sequences of \u201Cpixel values\u201D
(color clusters).`),ai=l(),ke=a("div"),b(rt.$$.fragment),ni=l(),ia=a("p"),si=r("Preprocess an image or a batch of images."),Ra=l(),me=a("h2"),$e=a("a"),la=a("span"),b(it.$$.fragment),ri=l(),da=a("span"),ii=r("ImageGPTImageProcessor"),Wa=l(),oe=a("div"),b(lt.$$.fragment),li=l(),ca=a("p"),di=r(`Constructs a ImageGPT image processor. This image processor can be used to resize images to a smaller resolution
(such as 32x32 or 64x64), normalize them and finally color quantize them to obtain sequences of \u201Cpixel values\u201D
(color clusters).`),ci=l(),Ge=a("div"),b(dt.$$.fragment),mi=l(),ma=a("p"),pi=r("Preprocess an image or batch of images."),Ha=l(),pe=a("h2"),xe=a("a"),pa=a("span"),b(ct.$$.fragment),hi=l(),ha=a("span"),gi=r("ImageGPTModel"),Ba=l(),D=a("div"),b(mt.$$.fragment),ui=l(),ga=a("p"),fi=r("The bare ImageGPT Model transformer outputting raw hidden-states without any specific head on top."),_i=l(),pt=a("p"),Ti=r("This model inherits from "),St=a("a"),vi=r("PreTrainedModel"),bi=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yi=l(),ht=a("p"),Ii=r("This model is also a PyTorch "),gt=a("a"),Pi=r("torch.nn.Module"),wi=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ki=l(),R=a("div"),b(ut.$$.fragment),$i=l(),he=a("p"),Gi=r("The "),Rt=a("a"),xi=r("ImageGPTModel"),Ei=r(" forward method, overrides the "),ua=a("code"),zi=r("__call__"),Ci=r(" special method."),qi=l(),b(Ee.$$.fragment),Mi=l(),b(ze.$$.fragment),Va=l(),ge=a("h2"),Ce=a("a"),fa=a("span"),b(ft.$$.fragment),Fi=l(),_a=a("span"),ji=r("ImageGPTForCausalImageModeling"),Ua=l(),A=a("div"),b(_t.$$.fragment),Di=l(),Ta=a("p"),Ai=r(`The ImageGPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Ni=l(),Tt=a("p"),Oi=r("This model inherits from "),Wt=a("a"),Li=r("PreTrainedModel"),Si=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ri=l(),vt=a("p"),Wi=r("This model is also a PyTorch "),bt=a("a"),Hi=r("torch.nn.Module"),Bi=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vi=l(),W=a("div"),b(yt.$$.fragment),Ui=l(),ue=a("p"),Ji=r("The "),Ht=a("a"),Xi=r("ImageGPTForCausalImageModeling"),Yi=r(" forward method, overrides the "),va=a("code"),Qi=r("__call__"),Ki=r(" special method."),Zi=l(),b(qe.$$.fragment),el=l(),b(Me.$$.fragment),Ja=l(),fe=a("h2"),Fe=a("a"),ba=a("span"),b(It.$$.fragment),tl=l(),ya=a("span"),ol=r("ImageGPTForImageClassification"),Xa=l(),N=a("div"),b(Pt.$$.fragment),al=l(),wt=a("p"),nl=r(`The ImageGPT Model transformer with an image classification head on top (linear layer).
`),Bt=a("a"),sl=r("ImageGPTForImageClassification"),rl=r(" average-pools the hidden states in order to do the classification."),il=l(),kt=a("p"),ll=r("This model inherits from "),Vt=a("a"),dl=r("PreTrainedModel"),cl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ml=l(),$t=a("p"),pl=r("This model is also a PyTorch "),Gt=a("a"),hl=r("torch.nn.Module"),gl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ul=l(),H=a("div"),b(xt.$$.fragment),fl=l(),_e=a("p"),_l=r("The "),Ut=a("a"),Tl=r("ImageGPTForImageClassification"),vl=r(" forward method, overrides the "),Ia=a("code"),bl=r("__call__"),yl=r(" special method."),Il=l(),b(je.$$.fragment),Pl=l(),b(De.$$.fragment),this.h()},l(o){const h=xc('[data-svelte="svelte-1phssyn"]',document.head);p=n(h,"META",{name:!0,content:!0}),h.forEach(t),v=d(o),_=n(o,"H1",{class:!0});var Et=s(_);u=n(Et,"A",{id:!0,class:!0,href:!0});var Pa=s(u);T=n(Pa,"SPAN",{});var wa=s(T);y(c.$$.fragment,wa),wa.forEach(t),Pa.forEach(t),f=d(Et),O=n(Et,"SPAN",{});var ka=s(O);Pn=i(ka,"ImageGPT"),ka.forEach(t),Et.forEach(t),xa=d(o),ie=n(o,"H2",{class:!0});var zt=s(ie);Te=n(zt,"A",{id:!0,class:!0,href:!0});var $a=s(Te);eo=n($a,"SPAN",{});var Ga=s(eo);y(He.$$.fragment,Ga),Ga.forEach(t),$a.forEach(t),wn=d(zt),to=n(zt,"SPAN",{});var $l=s(to);kn=i($l,"Overview"),$l.forEach(t),zt.forEach(t),Ea=d(o),ve=n(o,"P",{});var Qa=s(ve);$n=i(Qa,"The ImageGPT model was proposed in "),Be=n(Qa,"A",{href:!0,rel:!0});var Gl=s(Be);Gn=i(Gl,"Generative Pretraining from Pixels"),Gl.forEach(t),xn=i(Qa,` by Mark
Chen, Alec Radford, Rewon Child, Jeffrey Wu, Heewoo Jun, David Luan, Ilya Sutskever. ImageGPT (iGPT) is a GPT-2-like
model trained to predict the next pixel value, allowing for both unconditional and conditional image generation.`),Qa.forEach(t),za=d(o),Ct=n(o,"P",{});var xl=s(Ct);En=i(xl,"The abstract from the paper is the following:"),xl.forEach(t),Ca=d(o),qt=n(o,"P",{});var El=s(qt);oo=n(El,"EM",{});var zl=s(oo);zn=i(zl,`Inspired by progress in unsupervised representation learning for natural language, we examine whether similar models
can learn useful representations for images. We train a sequence Transformer to auto-regressively predict pixels,
without incorporating knowledge of the 2D input structure. Despite training on low-resolution ImageNet without labels,
we find that a GPT-2 scale model learns strong image representations as measured by linear probing, fine-tuning, and
low-data classification. On CIFAR-10, we achieve 96.3% accuracy with a linear probe, outperforming a supervised Wide
ResNet, and 99.0% accuracy with full fine-tuning, matching the top supervised pre-trained models. We are also
competitive with self-supervised benchmarks on ImageNet when substituting pixels for a VQVAE encoding, achieving 69.0%
top-1 accuracy on a linear probe of our features.`),zl.forEach(t),El.forEach(t),qa=d(o),be=n(o,"IMG",{src:!0,alt:!0,width:!0}),Ma=d(o),Mt=n(o,"SMALL",{});var Cl=s(Mt);Cn=i(Cl,"Summary of the approach. Taken from the [original paper](https://cdn.openai.com/papers/Generative_Pretraining_from_Pixels_V2.pdf)."),Cl.forEach(t),Fa=d(o),S=n(o,"P",{});var Ae=s(S);qn=i(Ae,"This model was contributed by "),Ve=n(Ae,"A",{href:!0,rel:!0});var ql=s(Ve);Mn=i(ql,"nielsr"),ql.forEach(t),Fn=i(Ae,", based on "),Ue=n(Ae,"A",{href:!0,rel:!0});var Ml=s(Ue);jn=i(Ml,"this issue"),Ml.forEach(t),Dn=i(Ae,`. The original code can be found
`),Je=n(Ae,"A",{href:!0,rel:!0});var Fl=s(Je);An=i(Fl,"here"),Fl.forEach(t),Nn=i(Ae,"."),Ae.forEach(t),ja=d(o),Ft=n(o,"P",{});var jl=s(Ft);On=i(jl,"Tips:"),jl.forEach(t),Da=d(o),G=n(o,"UL",{});var B=s(G);Xe=n(B,"LI",{});var Ka=s(Xe);Ln=i(Ka,`Demo notebooks for ImageGPT can be found
`),Ye=n(Ka,"A",{href:!0,rel:!0});var Dl=s(Ye);Sn=i(Dl,"here"),Dl.forEach(t),Rn=i(Ka,"."),Ka.forEach(t),Wn=d(B),Qe=n(B,"LI",{});var Za=s(Qe);Hn=i(Za,"ImageGPT is almost exactly the same as "),jt=n(Za,"A",{href:!0});var Al=s(jt);Bn=i(Al,"GPT-2"),Al.forEach(t),Vn=i(Za,`, with the exception that a different activation
function is used (namely \u201Cquick gelu\u201D), and the layer normalization layers don\u2019t mean center the inputs. ImageGPT
also doesn\u2019t have tied input- and output embeddings.`),Za.forEach(t),Un=d(B),Ke=n(B,"LI",{});var en=s(Ke);Jn=i(en,`As the time- and memory requirements of the attention mechanism of Transformers scales quadratically in the sequence
length, the authors pre-trained ImageGPT on smaller input resolutions, such as 32x32 and 64x64. However, feeding a
sequence of 32x32x3=3072 tokens from 0..255 into a Transformer is still prohibitively large. Therefore, the authors
applied k-means clustering to the (R,G,B) pixel values with k=512. This way, we only have a 32*32 = 1024-long
sequence, but now of integers in the range 0..511. So we are shrinking the sequence length at the cost of a bigger
embedding matrix. In other words, the vocabulary size of ImageGPT is 512, + 1 for a special \u201Cstart of sentence\u201D (SOS)
token, used at the beginning of every sequence. One can use `),Dt=n(en,"A",{href:!0});var Nl=s(Dt);Xn=i(Nl,"ImageGPTFeatureExtractor"),Nl.forEach(t),Yn=i(en,` to prepare
images for the model.`),en.forEach(t),Qn=d(B),Ze=n(B,"LI",{});var tn=s(Ze);Kn=i(tn,`Despite being pre-trained entirely unsupervised (i.e. without the use of any labels), ImageGPT produces fairly
performant image features useful for downstream tasks, such as image classification. The authors showed that the
features in the middle of the network are the most performant, and can be used as-is to train a linear model (such as
a sklearn logistic regression model for example). This is also referred to as \u201Clinear probing\u201D. Features can be
easily obtained by first forwarding the image through the model, then specifying `),ao=n(tn,"CODE",{});var Ol=s(ao);Zn=i(Ol,"output_hidden_states=True"),Ol.forEach(t),es=i(tn,`, and
then average-pool the hidden states at whatever layer you like.`),tn.forEach(t),ts=d(B),et=n(B,"LI",{});var on=s(et);os=i(on,`Alternatively, one can further fine-tune the entire model on a downstream dataset, similar to BERT. For this, you can
use `),At=n(on,"A",{href:!0});var Ll=s(At);as=i(Ll,"ImageGPTForImageClassification"),Ll.forEach(t),ns=i(on,"."),on.forEach(t),ss=d(B),no=n(B,"LI",{});var Sl=s(no);rs=i(Sl,`ImageGPT comes in different sizes: there\u2019s ImageGPT-small, ImageGPT-medium and ImageGPT-large. The authors did also
train an XL variant, which they didn\u2019t release. The differences in size are summarized in the following table:`),Sl.forEach(t),B.forEach(t),Aa=d(o),ye=n(o,"TABLE",{});var an=s(ye);so=n(an,"THEAD",{});var Rl=s(so);x=n(Rl,"TR",{});var V=s(x);ro=n(V,"TH",{});var Wl=s(ro);io=n(Wl,"STRONG",{});var Hl=s(io);is=i(Hl,"Model variant"),Hl.forEach(t),Wl.forEach(t),ls=d(V),lo=n(V,"TH",{});var Bl=s(lo);co=n(Bl,"STRONG",{});var Vl=s(co);ds=i(Vl,"Depths"),Vl.forEach(t),Bl.forEach(t),cs=d(V),mo=n(V,"TH",{});var Ul=s(mo);po=n(Ul,"STRONG",{});var Jl=s(po);ms=i(Jl,"Hidden sizes"),Jl.forEach(t),Ul.forEach(t),ps=d(V),ho=n(V,"TH",{});var Xl=s(ho);go=n(Xl,"STRONG",{});var Yl=s(go);hs=i(Yl,"Decoder hidden size"),Yl.forEach(t),Xl.forEach(t),gs=d(V),uo=n(V,"TH",{});var Ql=s(uo);fo=n(Ql,"STRONG",{});var Kl=s(fo);us=i(Kl,"Params (M)"),Kl.forEach(t),Ql.forEach(t),fs=d(V),_o=n(V,"TH",{});var Zl=s(_o);To=n(Zl,"STRONG",{});var ed=s(To);_s=i(ed,"ImageNet-1k Top 1"),ed.forEach(t),Zl.forEach(t),V.forEach(t),Rl.forEach(t),Ts=d(an),E=n(an,"TBODY",{});var U=s(E);z=n(U,"TR",{});var J=s(z);vo=n(J,"TD",{});var td=s(vo);vs=i(td,"MiT-b0"),td.forEach(t),bs=d(J),bo=n(J,"TD",{});var od=s(bo);ys=i(od,"[2, 2, 2, 2]"),od.forEach(t),Is=d(J),yo=n(J,"TD",{});var ad=s(yo);Ps=i(ad,"[32, 64, 160, 256]"),ad.forEach(t),ws=d(J),Io=n(J,"TD",{});var nd=s(Io);ks=i(nd,"256"),nd.forEach(t),$s=d(J),Po=n(J,"TD",{});var sd=s(Po);Gs=i(sd,"3.7"),sd.forEach(t),xs=d(J),wo=n(J,"TD",{});var rd=s(wo);Es=i(rd,"70.5"),rd.forEach(t),J.forEach(t),zs=d(U),C=n(U,"TR",{});var X=s(C);ko=n(X,"TD",{});var id=s(ko);Cs=i(id,"MiT-b1"),id.forEach(t),qs=d(X),$o=n(X,"TD",{});var ld=s($o);Ms=i(ld,"[2, 2, 2, 2]"),ld.forEach(t),Fs=d(X),Go=n(X,"TD",{});var dd=s(Go);js=i(dd,"[64, 128, 320, 512]"),dd.forEach(t),Ds=d(X),xo=n(X,"TD",{});var cd=s(xo);As=i(cd,"256"),cd.forEach(t),Ns=d(X),Eo=n(X,"TD",{});var md=s(Eo);Os=i(md,"14.0"),md.forEach(t),Ls=d(X),zo=n(X,"TD",{});var pd=s(zo);Ss=i(pd,"78.7"),pd.forEach(t),X.forEach(t),Rs=d(U),q=n(U,"TR",{});var Y=s(q);Co=n(Y,"TD",{});var hd=s(Co);Ws=i(hd,"MiT-b2"),hd.forEach(t),Hs=d(Y),qo=n(Y,"TD",{});var gd=s(qo);Bs=i(gd,"[3, 4, 6, 3]"),gd.forEach(t),Vs=d(Y),Mo=n(Y,"TD",{});var ud=s(Mo);Us=i(ud,"[64, 128, 320, 512]"),ud.forEach(t),Js=d(Y),Fo=n(Y,"TD",{});var fd=s(Fo);Xs=i(fd,"768"),fd.forEach(t),Ys=d(Y),jo=n(Y,"TD",{});var _d=s(jo);Qs=i(_d,"25.4"),_d.forEach(t),Ks=d(Y),Do=n(Y,"TD",{});var Td=s(Do);Zs=i(Td,"81.6"),Td.forEach(t),Y.forEach(t),er=d(U),M=n(U,"TR",{});var Q=s(M);Ao=n(Q,"TD",{});var vd=s(Ao);tr=i(vd,"MiT-b3"),vd.forEach(t),or=d(Q),No=n(Q,"TD",{});var bd=s(No);ar=i(bd,"[3, 4, 18, 3]"),bd.forEach(t),nr=d(Q),Oo=n(Q,"TD",{});var yd=s(Oo);sr=i(yd,"[64, 128, 320, 512]"),yd.forEach(t),rr=d(Q),Lo=n(Q,"TD",{});var Id=s(Lo);ir=i(Id,"768"),Id.forEach(t),lr=d(Q),So=n(Q,"TD",{});var Pd=s(So);dr=i(Pd,"45.2"),Pd.forEach(t),cr=d(Q),Ro=n(Q,"TD",{});var wd=s(Ro);mr=i(wd,"83.1"),wd.forEach(t),Q.forEach(t),pr=d(U),F=n(U,"TR",{});var K=s(F);Wo=n(K,"TD",{});var kd=s(Wo);hr=i(kd,"MiT-b4"),kd.forEach(t),gr=d(K),Ho=n(K,"TD",{});var $d=s(Ho);ur=i($d,"[3, 8, 27, 3]"),$d.forEach(t),fr=d(K),Bo=n(K,"TD",{});var Gd=s(Bo);_r=i(Gd,"[64, 128, 320, 512]"),Gd.forEach(t),Tr=d(K),Vo=n(K,"TD",{});var xd=s(Vo);vr=i(xd,"768"),xd.forEach(t),br=d(K),Uo=n(K,"TD",{});var Ed=s(Uo);yr=i(Ed,"62.6"),Ed.forEach(t),Ir=d(K),Jo=n(K,"TD",{});var zd=s(Jo);Pr=i(zd,"83.6"),zd.forEach(t),K.forEach(t),wr=d(U),j=n(U,"TR",{});var Z=s(j);Xo=n(Z,"TD",{});var Cd=s(Xo);kr=i(Cd,"MiT-b5"),Cd.forEach(t),$r=d(Z),Yo=n(Z,"TD",{});var qd=s(Yo);Gr=i(qd,"[3, 6, 40, 3]"),qd.forEach(t),xr=d(Z),Qo=n(Z,"TD",{});var Md=s(Qo);Er=i(Md,"[64, 128, 320, 512]"),Md.forEach(t),zr=d(Z),Ko=n(Z,"TD",{});var Fd=s(Ko);Cr=i(Fd,"768"),Fd.forEach(t),qr=d(Z),Zo=n(Z,"TD",{});var jd=s(Zo);Mr=i(jd,"82.0"),jd.forEach(t),Fr=d(Z),ea=n(Z,"TD",{});var Dd=s(ea);jr=i(Dd,"83.8"),Dd.forEach(t),Z.forEach(t),U.forEach(t),an.forEach(t),Na=d(o),le=n(o,"H2",{class:!0});var nn=s(le);Ie=n(nn,"A",{id:!0,class:!0,href:!0});var Ad=s(Ie);ta=n(Ad,"SPAN",{});var Nd=s(ta);y(tt.$$.fragment,Nd),Nd.forEach(t),Ad.forEach(t),Dr=d(nn),oa=n(nn,"SPAN",{});var Od=s(oa);Ar=i(Od,"ImageGPTConfig"),Od.forEach(t),nn.forEach(t),Oa=d(o),L=n(o,"DIV",{class:!0});var Ne=s(L);y(ot.$$.fragment,Ne),Nr=d(Ne),ee=n(Ne,"P",{});var Oe=s(ee);Or=i(Oe,"This is the configuration class to store the configuration of a "),Nt=n(Oe,"A",{href:!0});var Ld=s(Nt);Lr=i(Ld,"ImageGPTModel"),Ld.forEach(t),Sr=i(Oe," or a "),aa=n(Oe,"CODE",{});var Sd=s(aa);Rr=i(Sd,"TFImageGPTModel"),Sd.forEach(t),Wr=i(Oe,`. It is
used to instantiate a GPT-2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ImageGPT
`),at=n(Oe,"A",{href:!0,rel:!0});var Rd=s(at);Hr=i(Rd,"openai/imagegpt-small"),Rd.forEach(t),Br=i(Oe," architecture."),Oe.forEach(t),Vr=d(Ne),de=n(Ne,"P",{});var Jt=s(de);Ur=i(Jt,"Configuration objects inherit from "),Ot=n(Jt,"A",{href:!0});var Wd=s(Ot);Jr=i(Wd,"PretrainedConfig"),Wd.forEach(t),Xr=i(Jt,` and can be used to control the model outputs. Read the
documentation from `),Lt=n(Jt,"A",{href:!0});var Hd=s(Lt);Yr=i(Hd,"PretrainedConfig"),Hd.forEach(t),Qr=i(Jt," for more information."),Jt.forEach(t),Kr=d(Ne),y(Pe.$$.fragment,Ne),Ne.forEach(t),La=d(o),ce=n(o,"H2",{class:!0});var sn=s(ce);we=n(sn,"A",{id:!0,class:!0,href:!0});var Bd=s(we);na=n(Bd,"SPAN",{});var Vd=s(na);y(nt.$$.fragment,Vd),Vd.forEach(t),Bd.forEach(t),Zr=d(sn),sa=n(sn,"SPAN",{});var Ud=s(sa);ei=i(Ud,"ImageGPTFeatureExtractor"),Ud.forEach(t),sn.forEach(t),Sa=d(o),te=n(o,"DIV",{class:!0});var Xt=s(te);y(st.$$.fragment,Xt),ti=d(Xt),ra=n(Xt,"P",{});var Jd=s(ra);oi=i(Jd,`Constructs a ImageGPT image processor. This image processor can be used to resize images to a smaller resolution
(such as 32x32 or 64x64), normalize them and finally color quantize them to obtain sequences of \u201Cpixel values\u201D
(color clusters).`),Jd.forEach(t),ai=d(Xt),ke=n(Xt,"DIV",{class:!0});var rn=s(ke);y(rt.$$.fragment,rn),ni=d(rn),ia=n(rn,"P",{});var Xd=s(ia);si=i(Xd,"Preprocess an image or a batch of images."),Xd.forEach(t),rn.forEach(t),Xt.forEach(t),Ra=d(o),me=n(o,"H2",{class:!0});var ln=s(me);$e=n(ln,"A",{id:!0,class:!0,href:!0});var Yd=s($e);la=n(Yd,"SPAN",{});var Qd=s(la);y(it.$$.fragment,Qd),Qd.forEach(t),Yd.forEach(t),ri=d(ln),da=n(ln,"SPAN",{});var Kd=s(da);ii=i(Kd,"ImageGPTImageProcessor"),Kd.forEach(t),ln.forEach(t),Wa=d(o),oe=n(o,"DIV",{class:!0});var Yt=s(oe);y(lt.$$.fragment,Yt),li=d(Yt),ca=n(Yt,"P",{});var Zd=s(ca);di=i(Zd,`Constructs a ImageGPT image processor. This image processor can be used to resize images to a smaller resolution
(such as 32x32 or 64x64), normalize them and finally color quantize them to obtain sequences of \u201Cpixel values\u201D
(color clusters).`),Zd.forEach(t),ci=d(Yt),Ge=n(Yt,"DIV",{class:!0});var dn=s(Ge);y(dt.$$.fragment,dn),mi=d(dn),ma=n(dn,"P",{});var ec=s(ma);pi=i(ec,"Preprocess an image or batch of images."),ec.forEach(t),dn.forEach(t),Yt.forEach(t),Ha=d(o),pe=n(o,"H2",{class:!0});var cn=s(pe);xe=n(cn,"A",{id:!0,class:!0,href:!0});var tc=s(xe);pa=n(tc,"SPAN",{});var oc=s(pa);y(ct.$$.fragment,oc),oc.forEach(t),tc.forEach(t),hi=d(cn),ha=n(cn,"SPAN",{});var ac=s(ha);gi=i(ac,"ImageGPTModel"),ac.forEach(t),cn.forEach(t),Ba=d(o),D=n(o,"DIV",{class:!0});var ne=s(D);y(mt.$$.fragment,ne),ui=d(ne),ga=n(ne,"P",{});var nc=s(ga);fi=i(nc,"The bare ImageGPT Model transformer outputting raw hidden-states without any specific head on top."),nc.forEach(t),_i=d(ne),pt=n(ne,"P",{});var mn=s(pt);Ti=i(mn,"This model inherits from "),St=n(mn,"A",{href:!0});var sc=s(St);vi=i(sc,"PreTrainedModel"),sc.forEach(t),bi=i(mn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mn.forEach(t),yi=d(ne),ht=n(ne,"P",{});var pn=s(ht);Ii=i(pn,"This model is also a PyTorch "),gt=n(pn,"A",{href:!0,rel:!0});var rc=s(gt);Pi=i(rc,"torch.nn.Module"),rc.forEach(t),wi=i(pn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pn.forEach(t),ki=d(ne),R=n(ne,"DIV",{class:!0});var Le=s(R);y(ut.$$.fragment,Le),$i=d(Le),he=n(Le,"P",{});var Qt=s(he);Gi=i(Qt,"The "),Rt=n(Qt,"A",{href:!0});var ic=s(Rt);xi=i(ic,"ImageGPTModel"),ic.forEach(t),Ei=i(Qt," forward method, overrides the "),ua=n(Qt,"CODE",{});var lc=s(ua);zi=i(lc,"__call__"),lc.forEach(t),Ci=i(Qt," special method."),Qt.forEach(t),qi=d(Le),y(Ee.$$.fragment,Le),Mi=d(Le),y(ze.$$.fragment,Le),Le.forEach(t),ne.forEach(t),Va=d(o),ge=n(o,"H2",{class:!0});var hn=s(ge);Ce=n(hn,"A",{id:!0,class:!0,href:!0});var dc=s(Ce);fa=n(dc,"SPAN",{});var cc=s(fa);y(ft.$$.fragment,cc),cc.forEach(t),dc.forEach(t),Fi=d(hn),_a=n(hn,"SPAN",{});var mc=s(_a);ji=i(mc,"ImageGPTForCausalImageModeling"),mc.forEach(t),hn.forEach(t),Ua=d(o),A=n(o,"DIV",{class:!0});var se=s(A);y(_t.$$.fragment,se),Di=d(se),Ta=n(se,"P",{});var pc=s(Ta);Ai=i(pc,`The ImageGPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),pc.forEach(t),Ni=d(se),Tt=n(se,"P",{});var gn=s(Tt);Oi=i(gn,"This model inherits from "),Wt=n(gn,"A",{href:!0});var hc=s(Wt);Li=i(hc,"PreTrainedModel"),hc.forEach(t),Si=i(gn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gn.forEach(t),Ri=d(se),vt=n(se,"P",{});var un=s(vt);Wi=i(un,"This model is also a PyTorch "),bt=n(un,"A",{href:!0,rel:!0});var gc=s(bt);Hi=i(gc,"torch.nn.Module"),gc.forEach(t),Bi=i(un,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),un.forEach(t),Vi=d(se),W=n(se,"DIV",{class:!0});var Se=s(W);y(yt.$$.fragment,Se),Ui=d(Se),ue=n(Se,"P",{});var Kt=s(ue);Ji=i(Kt,"The "),Ht=n(Kt,"A",{href:!0});var uc=s(Ht);Xi=i(uc,"ImageGPTForCausalImageModeling"),uc.forEach(t),Yi=i(Kt," forward method, overrides the "),va=n(Kt,"CODE",{});var fc=s(va);Qi=i(fc,"__call__"),fc.forEach(t),Ki=i(Kt," special method."),Kt.forEach(t),Zi=d(Se),y(qe.$$.fragment,Se),el=d(Se),y(Me.$$.fragment,Se),Se.forEach(t),se.forEach(t),Ja=d(o),fe=n(o,"H2",{class:!0});var fn=s(fe);Fe=n(fn,"A",{id:!0,class:!0,href:!0});var _c=s(Fe);ba=n(_c,"SPAN",{});var Tc=s(ba);y(It.$$.fragment,Tc),Tc.forEach(t),_c.forEach(t),tl=d(fn),ya=n(fn,"SPAN",{});var vc=s(ya);ol=i(vc,"ImageGPTForImageClassification"),vc.forEach(t),fn.forEach(t),Xa=d(o),N=n(o,"DIV",{class:!0});var re=s(N);y(Pt.$$.fragment,re),al=d(re),wt=n(re,"P",{});var _n=s(wt);nl=i(_n,`The ImageGPT Model transformer with an image classification head on top (linear layer).
`),Bt=n(_n,"A",{href:!0});var bc=s(Bt);sl=i(bc,"ImageGPTForImageClassification"),bc.forEach(t),rl=i(_n," average-pools the hidden states in order to do the classification."),_n.forEach(t),il=d(re),kt=n(re,"P",{});var Tn=s(kt);ll=i(Tn,"This model inherits from "),Vt=n(Tn,"A",{href:!0});var yc=s(Vt);dl=i(yc,"PreTrainedModel"),yc.forEach(t),cl=i(Tn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tn.forEach(t),ml=d(re),$t=n(re,"P",{});var vn=s($t);pl=i(vn,"This model is also a PyTorch "),Gt=n(vn,"A",{href:!0,rel:!0});var Ic=s(Gt);hl=i(Ic,"torch.nn.Module"),Ic.forEach(t),gl=i(vn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vn.forEach(t),ul=d(re),H=n(re,"DIV",{class:!0});var Re=s(H);y(xt.$$.fragment,Re),fl=d(Re),_e=n(Re,"P",{});var Zt=s(_e);_l=i(Zt,"The "),Ut=n(Zt,"A",{href:!0});var Pc=s(Ut);Tl=i(Pc,"ImageGPTForImageClassification"),Pc.forEach(t),vl=i(Zt," forward method, overrides the "),Ia=n(Zt,"CODE",{});var wc=s(Ia);bl=i(wc,"__call__"),wc.forEach(t),yl=i(Zt," special method."),Zt.forEach(t),Il=d(Re),y(je.$$.fragment,Re),Pl=d(Re),y(De.$$.fragment,Re),Re.forEach(t),re.forEach(t),this.h()},h(){m(p,"name","hf:doc:metadata"),m(p,"content",JSON.stringify(Oc)),m(u,"id","imagegpt"),m(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(u,"href","#imagegpt"),m(_,"class","relative group"),m(Te,"id","overview"),m(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Te,"href","#overview"),m(ie,"class","relative group"),m(Be,"href","https://openai.com/blog/image-gpt"),m(Be,"rel","nofollow"),Ec(be.src,kl="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/imagegpt_architecture.png")||m(be,"src",kl),m(be,"alt","drawing"),m(be,"width","600"),m(Ve,"href","https://huggingface.co/nielsr"),m(Ve,"rel","nofollow"),m(Ue,"href","https://github.com/openai/image-gpt/issues/7"),m(Ue,"rel","nofollow"),m(Je,"href","https://github.com/openai/image-gpt"),m(Je,"rel","nofollow"),m(Ye,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/ImageGPT"),m(Ye,"rel","nofollow"),m(jt,"href","gpt2"),m(Dt,"href","/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTImageProcessor"),m(At,"href","/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTForImageClassification"),m(Ie,"id","transformers.ImageGPTConfig"),m(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ie,"href","#transformers.ImageGPTConfig"),m(le,"class","relative group"),m(Nt,"href","/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTModel"),m(at,"href","https://huggingface.co/openai/imagegpt-small"),m(at,"rel","nofollow"),m(Ot,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Lt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(we,"id","transformers.ImageGPTImageProcessor"),m(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(we,"href","#transformers.ImageGPTImageProcessor"),m(ce,"class","relative group"),m(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($e,"id","transformers.ImageGPTImageProcessor"),m($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m($e,"href","#transformers.ImageGPTImageProcessor"),m(me,"class","relative group"),m(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xe,"id","transformers.ImageGPTModel"),m(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(xe,"href","#transformers.ImageGPTModel"),m(pe,"class","relative group"),m(St,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(gt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(gt,"rel","nofollow"),m(Rt,"href","/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTModel"),m(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ce,"id","transformers.ImageGPTForCausalImageModeling"),m(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ce,"href","#transformers.ImageGPTForCausalImageModeling"),m(ge,"class","relative group"),m(Wt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(bt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(bt,"rel","nofollow"),m(Ht,"href","/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTForCausalImageModeling"),m(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Fe,"id","transformers.ImageGPTForImageClassification"),m(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Fe,"href","#transformers.ImageGPTForImageClassification"),m(fe,"class","relative group"),m(Bt,"href","/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTForImageClassification"),m(Vt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Gt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Gt,"rel","nofollow"),m(Ut,"href","/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTForImageClassification"),m(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,h){e(document.head,p),g(o,v,h),g(o,_,h),e(_,u),e(u,T),I(c,T,null),e(_,f),e(_,O),e(O,Pn),g(o,xa,h),g(o,ie,h),e(ie,Te),e(Te,eo),I(He,eo,null),e(ie,wn),e(ie,to),e(to,kn),g(o,Ea,h),g(o,ve,h),e(ve,$n),e(ve,Be),e(Be,Gn),e(ve,xn),g(o,za,h),g(o,Ct,h),e(Ct,En),g(o,Ca,h),g(o,qt,h),e(qt,oo),e(oo,zn),g(o,qa,h),g(o,be,h),g(o,Ma,h),g(o,Mt,h),e(Mt,Cn),g(o,Fa,h),g(o,S,h),e(S,qn),e(S,Ve),e(Ve,Mn),e(S,Fn),e(S,Ue),e(Ue,jn),e(S,Dn),e(S,Je),e(Je,An),e(S,Nn),g(o,ja,h),g(o,Ft,h),e(Ft,On),g(o,Da,h),g(o,G,h),e(G,Xe),e(Xe,Ln),e(Xe,Ye),e(Ye,Sn),e(Xe,Rn),e(G,Wn),e(G,Qe),e(Qe,Hn),e(Qe,jt),e(jt,Bn),e(Qe,Vn),e(G,Un),e(G,Ke),e(Ke,Jn),e(Ke,Dt),e(Dt,Xn),e(Ke,Yn),e(G,Qn),e(G,Ze),e(Ze,Kn),e(Ze,ao),e(ao,Zn),e(Ze,es),e(G,ts),e(G,et),e(et,os),e(et,At),e(At,as),e(et,ns),e(G,ss),e(G,no),e(no,rs),g(o,Aa,h),g(o,ye,h),e(ye,so),e(so,x),e(x,ro),e(ro,io),e(io,is),e(x,ls),e(x,lo),e(lo,co),e(co,ds),e(x,cs),e(x,mo),e(mo,po),e(po,ms),e(x,ps),e(x,ho),e(ho,go),e(go,hs),e(x,gs),e(x,uo),e(uo,fo),e(fo,us),e(x,fs),e(x,_o),e(_o,To),e(To,_s),e(ye,Ts),e(ye,E),e(E,z),e(z,vo),e(vo,vs),e(z,bs),e(z,bo),e(bo,ys),e(z,Is),e(z,yo),e(yo,Ps),e(z,ws),e(z,Io),e(Io,ks),e(z,$s),e(z,Po),e(Po,Gs),e(z,xs),e(z,wo),e(wo,Es),e(E,zs),e(E,C),e(C,ko),e(ko,Cs),e(C,qs),e(C,$o),e($o,Ms),e(C,Fs),e(C,Go),e(Go,js),e(C,Ds),e(C,xo),e(xo,As),e(C,Ns),e(C,Eo),e(Eo,Os),e(C,Ls),e(C,zo),e(zo,Ss),e(E,Rs),e(E,q),e(q,Co),e(Co,Ws),e(q,Hs),e(q,qo),e(qo,Bs),e(q,Vs),e(q,Mo),e(Mo,Us),e(q,Js),e(q,Fo),e(Fo,Xs),e(q,Ys),e(q,jo),e(jo,Qs),e(q,Ks),e(q,Do),e(Do,Zs),e(E,er),e(E,M),e(M,Ao),e(Ao,tr),e(M,or),e(M,No),e(No,ar),e(M,nr),e(M,Oo),e(Oo,sr),e(M,rr),e(M,Lo),e(Lo,ir),e(M,lr),e(M,So),e(So,dr),e(M,cr),e(M,Ro),e(Ro,mr),e(E,pr),e(E,F),e(F,Wo),e(Wo,hr),e(F,gr),e(F,Ho),e(Ho,ur),e(F,fr),e(F,Bo),e(Bo,_r),e(F,Tr),e(F,Vo),e(Vo,vr),e(F,br),e(F,Uo),e(Uo,yr),e(F,Ir),e(F,Jo),e(Jo,Pr),e(E,wr),e(E,j),e(j,Xo),e(Xo,kr),e(j,$r),e(j,Yo),e(Yo,Gr),e(j,xr),e(j,Qo),e(Qo,Er),e(j,zr),e(j,Ko),e(Ko,Cr),e(j,qr),e(j,Zo),e(Zo,Mr),e(j,Fr),e(j,ea),e(ea,jr),g(o,Na,h),g(o,le,h),e(le,Ie),e(Ie,ta),I(tt,ta,null),e(le,Dr),e(le,oa),e(oa,Ar),g(o,Oa,h),g(o,L,h),I(ot,L,null),e(L,Nr),e(L,ee),e(ee,Or),e(ee,Nt),e(Nt,Lr),e(ee,Sr),e(ee,aa),e(aa,Rr),e(ee,Wr),e(ee,at),e(at,Hr),e(ee,Br),e(L,Vr),e(L,de),e(de,Ur),e(de,Ot),e(Ot,Jr),e(de,Xr),e(de,Lt),e(Lt,Yr),e(de,Qr),e(L,Kr),I(Pe,L,null),g(o,La,h),g(o,ce,h),e(ce,we),e(we,na),I(nt,na,null),e(ce,Zr),e(ce,sa),e(sa,ei),g(o,Sa,h),g(o,te,h),I(st,te,null),e(te,ti),e(te,ra),e(ra,oi),e(te,ai),e(te,ke),I(rt,ke,null),e(ke,ni),e(ke,ia),e(ia,si),g(o,Ra,h),g(o,me,h),e(me,$e),e($e,la),I(it,la,null),e(me,ri),e(me,da),e(da,ii),g(o,Wa,h),g(o,oe,h),I(lt,oe,null),e(oe,li),e(oe,ca),e(ca,di),e(oe,ci),e(oe,Ge),I(dt,Ge,null),e(Ge,mi),e(Ge,ma),e(ma,pi),g(o,Ha,h),g(o,pe,h),e(pe,xe),e(xe,pa),I(ct,pa,null),e(pe,hi),e(pe,ha),e(ha,gi),g(o,Ba,h),g(o,D,h),I(mt,D,null),e(D,ui),e(D,ga),e(ga,fi),e(D,_i),e(D,pt),e(pt,Ti),e(pt,St),e(St,vi),e(pt,bi),e(D,yi),e(D,ht),e(ht,Ii),e(ht,gt),e(gt,Pi),e(ht,wi),e(D,ki),e(D,R),I(ut,R,null),e(R,$i),e(R,he),e(he,Gi),e(he,Rt),e(Rt,xi),e(he,Ei),e(he,ua),e(ua,zi),e(he,Ci),e(R,qi),I(Ee,R,null),e(R,Mi),I(ze,R,null),g(o,Va,h),g(o,ge,h),e(ge,Ce),e(Ce,fa),I(ft,fa,null),e(ge,Fi),e(ge,_a),e(_a,ji),g(o,Ua,h),g(o,A,h),I(_t,A,null),e(A,Di),e(A,Ta),e(Ta,Ai),e(A,Ni),e(A,Tt),e(Tt,Oi),e(Tt,Wt),e(Wt,Li),e(Tt,Si),e(A,Ri),e(A,vt),e(vt,Wi),e(vt,bt),e(bt,Hi),e(vt,Bi),e(A,Vi),e(A,W),I(yt,W,null),e(W,Ui),e(W,ue),e(ue,Ji),e(ue,Ht),e(Ht,Xi),e(ue,Yi),e(ue,va),e(va,Qi),e(ue,Ki),e(W,Zi),I(qe,W,null),e(W,el),I(Me,W,null),g(o,Ja,h),g(o,fe,h),e(fe,Fe),e(Fe,ba),I(It,ba,null),e(fe,tl),e(fe,ya),e(ya,ol),g(o,Xa,h),g(o,N,h),I(Pt,N,null),e(N,al),e(N,wt),e(wt,nl),e(wt,Bt),e(Bt,sl),e(wt,rl),e(N,il),e(N,kt),e(kt,ll),e(kt,Vt),e(Vt,dl),e(kt,cl),e(N,ml),e(N,$t),e($t,pl),e($t,Gt),e(Gt,hl),e($t,gl),e(N,ul),e(N,H),I(xt,H,null),e(H,fl),e(H,_e),e(_e,_l),e(_e,Ut),e(Ut,Tl),e(_e,vl),e(_e,Ia),e(Ia,bl),e(_e,yl),e(H,Il),I(je,H,null),e(H,Pl),I(De,H,null),Ya=!0},p(o,[h]){const Et={};h&2&&(Et.$$scope={dirty:h,ctx:o}),Pe.$set(Et);const Pa={};h&2&&(Pa.$$scope={dirty:h,ctx:o}),Ee.$set(Pa);const wa={};h&2&&(wa.$$scope={dirty:h,ctx:o}),ze.$set(wa);const ka={};h&2&&(ka.$$scope={dirty:h,ctx:o}),qe.$set(ka);const zt={};h&2&&(zt.$$scope={dirty:h,ctx:o}),Me.$set(zt);const $a={};h&2&&($a.$$scope={dirty:h,ctx:o}),je.$set($a);const Ga={};h&2&&(Ga.$$scope={dirty:h,ctx:o}),De.$set(Ga)},i(o){Ya||(P(c.$$.fragment,o),P(He.$$.fragment,o),P(tt.$$.fragment,o),P(ot.$$.fragment,o),P(Pe.$$.fragment,o),P(nt.$$.fragment,o),P(st.$$.fragment,o),P(rt.$$.fragment,o),P(it.$$.fragment,o),P(lt.$$.fragment,o),P(dt.$$.fragment,o),P(ct.$$.fragment,o),P(mt.$$.fragment,o),P(ut.$$.fragment,o),P(Ee.$$.fragment,o),P(ze.$$.fragment,o),P(ft.$$.fragment,o),P(_t.$$.fragment,o),P(yt.$$.fragment,o),P(qe.$$.fragment,o),P(Me.$$.fragment,o),P(It.$$.fragment,o),P(Pt.$$.fragment,o),P(xt.$$.fragment,o),P(je.$$.fragment,o),P(De.$$.fragment,o),Ya=!0)},o(o){w(c.$$.fragment,o),w(He.$$.fragment,o),w(tt.$$.fragment,o),w(ot.$$.fragment,o),w(Pe.$$.fragment,o),w(nt.$$.fragment,o),w(st.$$.fragment,o),w(rt.$$.fragment,o),w(it.$$.fragment,o),w(lt.$$.fragment,o),w(dt.$$.fragment,o),w(ct.$$.fragment,o),w(mt.$$.fragment,o),w(ut.$$.fragment,o),w(Ee.$$.fragment,o),w(ze.$$.fragment,o),w(ft.$$.fragment,o),w(_t.$$.fragment,o),w(yt.$$.fragment,o),w(qe.$$.fragment,o),w(Me.$$.fragment,o),w(It.$$.fragment,o),w(Pt.$$.fragment,o),w(xt.$$.fragment,o),w(je.$$.fragment,o),w(De.$$.fragment,o),Ya=!1},d(o){t(p),o&&t(v),o&&t(_),k(c),o&&t(xa),o&&t(ie),k(He),o&&t(Ea),o&&t(ve),o&&t(za),o&&t(Ct),o&&t(Ca),o&&t(qt),o&&t(qa),o&&t(be),o&&t(Ma),o&&t(Mt),o&&t(Fa),o&&t(S),o&&t(ja),o&&t(Ft),o&&t(Da),o&&t(G),o&&t(Aa),o&&t(ye),o&&t(Na),o&&t(le),k(tt),o&&t(Oa),o&&t(L),k(ot),k(Pe),o&&t(La),o&&t(ce),k(nt),o&&t(Sa),o&&t(te),k(st),k(rt),o&&t(Ra),o&&t(me),k(it),o&&t(Wa),o&&t(oe),k(lt),k(dt),o&&t(Ha),o&&t(pe),k(ct),o&&t(Ba),o&&t(D),k(mt),k(ut),k(Ee),k(ze),o&&t(Va),o&&t(ge),k(ft),o&&t(Ua),o&&t(A),k(_t),k(yt),k(qe),k(Me),o&&t(Ja),o&&t(fe),k(It),o&&t(Xa),o&&t(N),k(Pt),k(xt),k(je),k(De)}}}const Oc={local:"imagegpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.ImageGPTConfig",title:"ImageGPTConfig"},{local:"transformers.ImageGPTImageProcessor",title:"ImageGPTFeatureExtractor"},{local:"transformers.ImageGPTImageProcessor",title:"ImageGPTImageProcessor"},{local:"transformers.ImageGPTModel",title:"ImageGPTModel"},{local:"transformers.ImageGPTForCausalImageModeling",title:"ImageGPTForCausalImageModeling"},{local:"transformers.ImageGPTForImageClassification",title:"ImageGPTForImageClassification"}],title:"ImageGPT"};function Lc($){return zc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Uc extends kc{constructor(p){super();$c(this,p,Lc,Nc,Gc,{})}}export{Uc as default,Oc as metadata};
