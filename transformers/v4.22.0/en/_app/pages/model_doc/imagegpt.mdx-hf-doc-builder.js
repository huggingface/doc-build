import{S as ic,i as lc,s as dc,e as a,k as l,w as b,t as r,M as cc,c as n,d as t,m as d,a as s,x as y,h as i,b as m,N as mc,G as e,g as u,y as I,q as w,o as P,B as k,v as pc,L as mn}from"../../chunks/vendor-hf-doc-builder.js";import{T as dn}from"../../chunks/Tip-hf-doc-builder.js";import{D as fe}from"../../chunks/Docstring-hf-doc-builder.js";import{C as pn}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as $t}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as cn}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function hc($){let p,T,f,g,v;return g=new pn({props:{code:`from transformers import ImageGPTModel, ImageGPTConfig

# Initializing a ImageGPT configuration
configuration = ImageGPTConfig()

# Initializing a model from the configuration
model = ImageGPTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ImageGPTModel, ImageGPTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ImageGPT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ImageGPTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ImageGPTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=a("p"),T=r("Example:"),f=l(),b(g.$$.fragment)},l(c){p=n(c,"P",{});var _=s(p);T=i(_,"Example:"),_.forEach(t),f=d(c),y(g.$$.fragment,c)},m(c,_){u(c,p,_),e(p,T),u(c,f,_),I(g,c,_),v=!0},p:mn,i(c){v||(w(g.$$.fragment,c),v=!0)},o(c){P(g.$$.fragment,c),v=!1},d(c){c&&t(p),c&&t(f),k(g,c)}}}function gc($){let p,T;return{c(){p=a("p"),T=r(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(f){p=n(f,"P",{});var g=s(p);T=i(g,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),g.forEach(t)},m(f,g){u(f,p,g),e(p,T)},d(f){f&&t(p)}}}function uc($){let p,T,f,g,v;return{c(){p=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){p=n(c,"P",{});var _=s(p);T=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n(_,"CODE",{});var O=s(f);g=i(O,"Module"),O.forEach(t),v=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(c,_){u(c,p,_),e(p,T),e(p,f),e(f,g),e(p,v)},d(c){c&&t(p)}}}function fc($){let p,T,f,g,v;return g=new pn({props:{code:`from transformers import ImageGPTFeatureExtractor, ImageGPTModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=a("p"),T=r("Examples:"),f=l(),b(g.$$.fragment)},l(c){p=n(c,"P",{});var _=s(p);T=i(_,"Examples:"),_.forEach(t),f=d(c),y(g.$$.fragment,c)},m(c,_){u(c,p,_),e(p,T),u(c,f,_),I(g,c,_),v=!0},p:mn,i(c){v||(w(g.$$.fragment,c),v=!0)},o(c){P(g.$$.fragment,c),v=!1},d(c){c&&t(p),c&&t(f),k(g,c)}}}function _c($){let p,T,f,g,v;return{c(){p=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){p=n(c,"P",{});var _=s(p);T=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n(_,"CODE",{});var O=s(f);g=i(O,"Module"),O.forEach(t),v=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(c,_){u(c,p,_),e(p,T),e(p,f),e(f,g),e(p,v)},d(c){c&&t(p)}}}function vc($){let p,T,f,g,v;return g=new pn({props:{code:`from transformers import ImageGPTFeatureExtractor, ImageGPTForCausalImageModeling
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
n_px = feature_extractor.size

samples = output[:, 1:].cpu().detach().numpy()
samples_img = [
    np.reshape(np.rint(127.5 * (clusters[s] + 1.0)), [n_px, n_px, 3]).astype(np.uint8) for s in samples
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
<span class="hljs-meta">&gt;&gt;&gt; </span>n_px = feature_extractor.size

<span class="hljs-meta">&gt;&gt;&gt; </span>samples = output[:, <span class="hljs-number">1</span>:].cpu().detach().numpy()
<span class="hljs-meta">&gt;&gt;&gt; </span>samples_img = [
<span class="hljs-meta">... </span>    np.reshape(np.rint(<span class="hljs-number">127.5</span> * (clusters[s] + <span class="hljs-number">1.0</span>)), [n_px, n_px, <span class="hljs-number">3</span>]).astype(np.uint8) <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> samples
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># convert color cluster tokens back to pixels</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>f, axes = plt.subplots(<span class="hljs-number">1</span>, batch_size, dpi=<span class="hljs-number">300</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> img, ax <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(samples_img, axes):
<span class="hljs-meta">... </span>    ax.axis(<span class="hljs-string">&quot;off&quot;</span>)
<span class="hljs-meta">... </span>    ax.imshow(img)`}}),{c(){p=a("p"),T=r("Examples:"),f=l(),b(g.$$.fragment)},l(c){p=n(c,"P",{});var _=s(p);T=i(_,"Examples:"),_.forEach(t),f=d(c),y(g.$$.fragment,c)},m(c,_){u(c,p,_),e(p,T),u(c,f,_),I(g,c,_),v=!0},p:mn,i(c){v||(w(g.$$.fragment,c),v=!0)},o(c){P(g.$$.fragment,c),v=!1},d(c){c&&t(p),c&&t(f),k(g,c)}}}function Tc($){let p,T,f,g,v;return{c(){p=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){p=n(c,"P",{});var _=s(p);T=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n(_,"CODE",{});var O=s(f);g=i(O,"Module"),O.forEach(t),v=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(c,_){u(c,p,_),e(p,T),e(p,f),e(f,g),e(p,v)},d(c){c&&t(p)}}}function bc($){let p,T,f,g,v;return g=new pn({props:{code:`from transformers import ImageGPTFeatureExtractor, ImageGPTForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=a("p"),T=r("Examples:"),f=l(),b(g.$$.fragment)},l(c){p=n(c,"P",{});var _=s(p);T=i(_,"Examples:"),_.forEach(t),f=d(c),y(g.$$.fragment,c)},m(c,_){u(c,p,_),e(p,T),u(c,f,_),I(g,c,_),v=!0},p:mn,i(c){v||(w(g.$$.fragment,c),v=!0)},o(c){P(g.$$.fragment,c),v=!1},d(c){c&&t(p),c&&t(f),k(g,c)}}}function yc($){let p,T,f,g,v,c,_,O,hn,ya,re,_e,Qt,Se,gn,Kt,un,Ia,ve,fn,We,_n,vn,wa,xt,Tn,Pa,Gt,Yt,bn,ka,Te,pl,$a,Et,yn,xa,W,In,Re,wn,Pn,Be,kn,$n,He,xn,Gn,Ga,Ct,En,Ea,x,Ve,Cn,Ue,Fn,Mn,zn,Je,jn,Ft,qn,An,Dn,Xe,Nn,Mt,On,Ln,Sn,Qe,Wn,Zt,Rn,Bn,Hn,Ke,Vn,zt,Un,Jn,Xn,eo,Qn,Ca,be,to,G,oo,ao,Kn,Yn,no,so,Zn,es,ro,io,ts,os,lo,co,as,ns,mo,po,ss,rs,ho,go,is,ls,E,C,uo,ds,cs,fo,ms,ps,_o,hs,gs,vo,us,fs,To,_s,vs,bo,Ts,bs,F,yo,ys,Is,Io,ws,Ps,wo,ks,$s,Po,xs,Gs,ko,Es,Cs,$o,Fs,Ms,M,xo,zs,js,Go,qs,As,Eo,Ds,Ns,Co,Os,Ls,Fo,Ss,Ws,Mo,Rs,Bs,z,zo,Hs,Vs,jo,Us,Js,qo,Xs,Qs,Ao,Ks,Ys,Do,Zs,er,No,tr,or,j,Oo,ar,nr,Lo,sr,rr,So,ir,lr,Wo,dr,cr,Ro,mr,pr,Bo,hr,gr,q,Ho,ur,fr,Vo,_r,vr,Uo,Tr,br,Jo,yr,Ir,Xo,wr,Pr,Qo,kr,Fa,ie,ye,Ko,Ye,$r,Yo,xr,Ma,L,Ze,Gr,te,Er,jt,Cr,Fr,Zo,Mr,zr,et,jr,qr,Ar,le,Dr,qt,Nr,Or,At,Lr,Sr,Wr,Ie,za,de,we,ea,tt,Rr,ta,Br,ja,S,ot,Hr,oa,Vr,Ur,at,Jr,Dt,Xr,Qr,Kr,oe,nt,Yr,aa,Zr,ei,Pe,qa,ce,ke,na,st,ti,sa,oi,Aa,A,rt,ai,ra,ni,si,it,ri,Nt,ii,li,di,lt,ci,dt,mi,pi,hi,R,ct,gi,me,ui,Ot,fi,_i,ia,vi,Ti,bi,$e,yi,xe,Da,pe,Ge,la,mt,Ii,da,wi,Na,D,pt,Pi,ca,ki,$i,ht,xi,Lt,Gi,Ei,Ci,gt,Fi,ut,Mi,zi,ji,B,ft,qi,he,Ai,St,Di,Ni,ma,Oi,Li,Si,Ee,Wi,Ce,Oa,ge,Fe,pa,_t,Ri,ha,Bi,La,N,vt,Hi,Tt,Vi,Wt,Ui,Ji,Xi,bt,Qi,Rt,Ki,Yi,Zi,yt,el,It,tl,ol,al,H,wt,nl,ue,sl,Bt,rl,il,ga,ll,dl,cl,Me,ml,ze,Sa;return c=new $t({}),Se=new $t({}),Ye=new $t({}),Ze=new fe({props:{name:"class transformers.ImageGPTConfig",anchor:"transformers.ImageGPTConfig",parameters:[{name:"vocab_size",val:" = 513"},{name:"n_positions",val:" = 1024"},{name:"n_embd",val:" = 512"},{name:"n_layer",val:" = 24"},{name:"n_head",val:" = 8"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'quick_gelu'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"scale_attn_weights",val:" = True"},{name:"use_cache",val:" = True"},{name:"tie_word_embeddings",val:" = False"},{name:"scale_attn_by_inverse_layer_idx",val:" = False"},{name:"reorder_and_upcast_attn",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ImageGPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.0/en/model_doc/imagegpt#transformers.ImageGPTModel">ImageGPTModel</a> or <code>TFImageGPTModel</code>.`,name:"vocab_size"},{anchor:"transformers.ImageGPTConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 32*32) &#x2014;
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
dot-product/softmax to float() when training with mixed precision.`,name:"reorder_and_upcast_attn"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/imagegpt/configuration_imagegpt.py#L30"}}),Ie=new cn({props:{anchor:"transformers.ImageGPTConfig.example",$$slots:{default:[hc]},$$scope:{ctx:$}}}),tt=new $t({}),ot=new fe({props:{name:"class transformers.ImageGPTFeatureExtractor",anchor:"transformers.ImageGPTFeatureExtractor",parameters:[{name:"clusters",val:""},{name:"do_resize",val:" = True"},{name:"size",val:" = 32"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ImageGPTFeatureExtractor.clusters",description:`<strong>clusters</strong> (<code>np.ndarray</code>) &#x2014;
The color clusters to use, as a <code>np.ndarray</code> of shape <code>(n_clusters, 3)</code>.`,name:"clusters"},{anchor:"transformers.ImageGPTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.ImageGPTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 32) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.ImageGPTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ImageGPTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input to the range between -1 and +1.`,name:"do_normalize"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/imagegpt/feature_extraction_imagegpt.py#L45"}}),nt=new fe({props:{name:"__call__",anchor:"transformers.ImageGPTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ImageGPTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.ImageGPTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.22.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/imagegpt/feature_extraction_imagegpt.py#L96",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>input_ids</strong> \u2014 Input IDs to be fed to a model, of shape <code>(batch_size, height * width)</code>.</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.0/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Pe=new dn({props:{warning:!0,$$slots:{default:[gc]},$$scope:{ctx:$}}}),st=new $t({}),rt=new fe({props:{name:"class transformers.ImageGPTModel",anchor:"transformers.ImageGPTModel",parameters:[{name:"config",val:": ImageGPTConfig"}],parametersDescription:[{anchor:"transformers.ImageGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/imagegpt#transformers.ImageGPTConfig">ImageGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/imagegpt/modeling_imagegpt.py#L634"}}),ct=new fe({props:{name:"forward",anchor:"transformers.ImageGPTModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:": typing.Any"}],parametersDescription:[{anchor:"transformers.ImageGPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/imagegpt#transformers.ImageGPTFeatureExtractor">ImageGPTFeatureExtractor</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/imagegpt#transformers.ImageGPTFeatureExtractor.__call__">ImageGPTFeatureExtractor.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ImageGPTModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/imagegpt/modeling_imagegpt.py#L669",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/imagegpt#transformers.ImageGPTConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$e=new dn({props:{$$slots:{default:[uc]},$$scope:{ctx:$}}}),xe=new cn({props:{anchor:"transformers.ImageGPTModel.forward.example",$$slots:{default:[fc]},$$scope:{ctx:$}}}),mt=new $t({}),pt=new fe({props:{name:"class transformers.ImageGPTForCausalImageModeling",anchor:"transformers.ImageGPTForCausalImageModeling",parameters:[{name:"config",val:": ImageGPTConfig"}],parametersDescription:[{anchor:"transformers.ImageGPTForCausalImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/imagegpt#transformers.ImageGPTConfig">ImageGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/imagegpt/modeling_imagegpt.py#L914"}}),ft=new fe({props:{name:"forward",anchor:"transformers.ImageGPTForCausalImageModeling.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:": typing.Any"}],parametersDescription:[{anchor:"transformers.ImageGPTForCausalImageModeling.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/imagegpt#transformers.ImageGPTFeatureExtractor">ImageGPTFeatureExtractor</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/imagegpt#transformers.ImageGPTFeatureExtractor.__call__">ImageGPTFeatureExtractor.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ImageGPTForCausalImageModeling.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/imagegpt/modeling_imagegpt.py#L962",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/imagegpt#transformers.ImageGPTConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ee=new dn({props:{$$slots:{default:[_c]},$$scope:{ctx:$}}}),Ce=new cn({props:{anchor:"transformers.ImageGPTForCausalImageModeling.forward.example",$$slots:{default:[vc]},$$scope:{ctx:$}}}),_t=new $t({}),vt=new fe({props:{name:"class transformers.ImageGPTForImageClassification",anchor:"transformers.ImageGPTForImageClassification",parameters:[{name:"config",val:": ImageGPTConfig"}],parametersDescription:[{anchor:"transformers.ImageGPTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/imagegpt#transformers.ImageGPTConfig">ImageGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/imagegpt/modeling_imagegpt.py#L1102"}}),wt=new fe({props:{name:"forward",anchor:"transformers.ImageGPTForImageClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:": typing.Any"}],parametersDescription:[{anchor:"transformers.ImageGPTForImageClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/imagegpt#transformers.ImageGPTFeatureExtractor">ImageGPTFeatureExtractor</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/imagegpt#transformers.ImageGPTFeatureExtractor.__call__">ImageGPTFeatureExtractor.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ImageGPTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/imagegpt/modeling_imagegpt.py#L1114",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/imagegpt#transformers.ImageGPTConfig"
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
`}}),Me=new dn({props:{$$slots:{default:[Tc]},$$scope:{ctx:$}}}),ze=new cn({props:{anchor:"transformers.ImageGPTForImageClassification.forward.example",$$slots:{default:[bc]},$$scope:{ctx:$}}}),{c(){p=a("meta"),T=l(),f=a("h1"),g=a("a"),v=a("span"),b(c.$$.fragment),_=l(),O=a("span"),hn=r("ImageGPT"),ya=l(),re=a("h2"),_e=a("a"),Qt=a("span"),b(Se.$$.fragment),gn=l(),Kt=a("span"),un=r("Overview"),Ia=l(),ve=a("p"),fn=r("The ImageGPT model was proposed in "),We=a("a"),_n=r("Generative Pretraining from Pixels"),vn=r(` by Mark
Chen, Alec Radford, Rewon Child, Jeffrey Wu, Heewoo Jun, David Luan, Ilya Sutskever. ImageGPT (iGPT) is a GPT-2-like
model trained to predict the next pixel value, allowing for both unconditional and conditional image generation.`),wa=l(),xt=a("p"),Tn=r("The abstract from the paper is the following:"),Pa=l(),Gt=a("p"),Yt=a("em"),bn=r(`Inspired by progress in unsupervised representation learning for natural language, we examine whether similar models
can learn useful representations for images. We train a sequence Transformer to auto-regressively predict pixels,
without incorporating knowledge of the 2D input structure. Despite training on low-resolution ImageNet without labels,
we find that a GPT-2 scale model learns strong image representations as measured by linear probing, fine-tuning, and
low-data classification. On CIFAR-10, we achieve 96.3% accuracy with a linear probe, outperforming a supervised Wide
ResNet, and 99.0% accuracy with full fine-tuning, matching the top supervised pre-trained models. We are also
competitive with self-supervised benchmarks on ImageNet when substituting pixels for a VQVAE encoding, achieving 69.0%
top-1 accuracy on a linear probe of our features.`),ka=l(),Te=a("img"),$a=l(),Et=a("small"),yn=r("Summary of the approach. Taken from the [original paper](https://cdn.openai.com/papers/Generative_Pretraining_from_Pixels_V2.pdf)."),xa=l(),W=a("p"),In=r("This model was contributed by "),Re=a("a"),wn=r("nielsr"),Pn=r(", based on "),Be=a("a"),kn=r("this issue"),$n=r(`. The original code can be found
`),He=a("a"),xn=r("here"),Gn=r("."),Ga=l(),Ct=a("p"),En=r("Tips:"),Ea=l(),x=a("ul"),Ve=a("li"),Cn=r(`Demo notebooks for ImageGPT can be found
`),Ue=a("a"),Fn=r("here"),Mn=r("."),zn=l(),Je=a("li"),jn=r("ImageGPT is almost exactly the same as "),Ft=a("a"),qn=r("GPT-2"),An=r(`, with the exception that a different activation
function is used (namely \u201Cquick gelu\u201D), and the layer normalization layers don\u2019t mean center the inputs. ImageGPT
also doesn\u2019t have tied input- and output embeddings.`),Dn=l(),Xe=a("li"),Nn=r(`As the time- and memory requirements of the attention mechanism of Transformers scales quadratically in the sequence
length, the authors pre-trained ImageGPT on smaller input resolutions, such as 32x32 and 64x64. However, feeding a
sequence of 32x32x3=3072 tokens from 0..255 into a Transformer is still prohibitively large. Therefore, the authors
applied k-means clustering to the (R,G,B) pixel values with k=512. This way, we only have a 32*32 = 1024-long
sequence, but now of integers in the range 0..511. So we are shrinking the sequence length at the cost of a bigger
embedding matrix. In other words, the vocabulary size of ImageGPT is 512, + 1 for a special \u201Cstart of sentence\u201D (SOS)
token, used at the beginning of every sequence. One can use `),Mt=a("a"),On=r("ImageGPTFeatureExtractor"),Ln=r(` to prepare
images for the model.`),Sn=l(),Qe=a("li"),Wn=r(`Despite being pre-trained entirely unsupervised (i.e. without the use of any labels), ImageGPT produces fairly
performant image features useful for downstream tasks, such as image classification. The authors showed that the
features in the middle of the network are the most performant, and can be used as-is to train a linear model (such as
a sklearn logistic regression model for example). This is also referred to as \u201Clinear probing\u201D. Features can be
easily obtained by first forwarding the image through the model, then specifying `),Zt=a("code"),Rn=r("output_hidden_states=True"),Bn=r(`, and
then average-pool the hidden states at whatever layer you like.`),Hn=l(),Ke=a("li"),Vn=r(`Alternatively, one can further fine-tune the entire model on a downstream dataset, similar to BERT. For this, you can
use `),zt=a("a"),Un=r("ImageGPTForImageClassification"),Jn=r("."),Xn=l(),eo=a("li"),Qn=r(`ImageGPT comes in different sizes: there\u2019s ImageGPT-small, ImageGPT-medium and ImageGPT-large. The authors did also
train an XL variant, which they didn\u2019t release. The differences in size are summarized in the following table:`),Ca=l(),be=a("table"),to=a("thead"),G=a("tr"),oo=a("th"),ao=a("strong"),Kn=r("Model variant"),Yn=l(),no=a("th"),so=a("strong"),Zn=r("Depths"),es=l(),ro=a("th"),io=a("strong"),ts=r("Hidden sizes"),os=l(),lo=a("th"),co=a("strong"),as=r("Decoder hidden size"),ns=l(),mo=a("th"),po=a("strong"),ss=r("Params (M)"),rs=l(),ho=a("th"),go=a("strong"),is=r("ImageNet-1k Top 1"),ls=l(),E=a("tbody"),C=a("tr"),uo=a("td"),ds=r("MiT-b0"),cs=l(),fo=a("td"),ms=r("[2, 2, 2, 2]"),ps=l(),_o=a("td"),hs=r("[32, 64, 160, 256]"),gs=l(),vo=a("td"),us=r("256"),fs=l(),To=a("td"),_s=r("3.7"),vs=l(),bo=a("td"),Ts=r("70.5"),bs=l(),F=a("tr"),yo=a("td"),ys=r("MiT-b1"),Is=l(),Io=a("td"),ws=r("[2, 2, 2, 2]"),Ps=l(),wo=a("td"),ks=r("[64, 128, 320, 512]"),$s=l(),Po=a("td"),xs=r("256"),Gs=l(),ko=a("td"),Es=r("14.0"),Cs=l(),$o=a("td"),Fs=r("78.7"),Ms=l(),M=a("tr"),xo=a("td"),zs=r("MiT-b2"),js=l(),Go=a("td"),qs=r("[3, 4, 6, 3]"),As=l(),Eo=a("td"),Ds=r("[64, 128, 320, 512]"),Ns=l(),Co=a("td"),Os=r("768"),Ls=l(),Fo=a("td"),Ss=r("25.4"),Ws=l(),Mo=a("td"),Rs=r("81.6"),Bs=l(),z=a("tr"),zo=a("td"),Hs=r("MiT-b3"),Vs=l(),jo=a("td"),Us=r("[3, 4, 18, 3]"),Js=l(),qo=a("td"),Xs=r("[64, 128, 320, 512]"),Qs=l(),Ao=a("td"),Ks=r("768"),Ys=l(),Do=a("td"),Zs=r("45.2"),er=l(),No=a("td"),tr=r("83.1"),or=l(),j=a("tr"),Oo=a("td"),ar=r("MiT-b4"),nr=l(),Lo=a("td"),sr=r("[3, 8, 27, 3]"),rr=l(),So=a("td"),ir=r("[64, 128, 320, 512]"),lr=l(),Wo=a("td"),dr=r("768"),cr=l(),Ro=a("td"),mr=r("62.6"),pr=l(),Bo=a("td"),hr=r("83.6"),gr=l(),q=a("tr"),Ho=a("td"),ur=r("MiT-b5"),fr=l(),Vo=a("td"),_r=r("[3, 6, 40, 3]"),vr=l(),Uo=a("td"),Tr=r("[64, 128, 320, 512]"),br=l(),Jo=a("td"),yr=r("768"),Ir=l(),Xo=a("td"),wr=r("82.0"),Pr=l(),Qo=a("td"),kr=r("83.8"),Fa=l(),ie=a("h2"),ye=a("a"),Ko=a("span"),b(Ye.$$.fragment),$r=l(),Yo=a("span"),xr=r("ImageGPTConfig"),Ma=l(),L=a("div"),b(Ze.$$.fragment),Gr=l(),te=a("p"),Er=r("This is the configuration class to store the configuration of a "),jt=a("a"),Cr=r("ImageGPTModel"),Fr=r(" or a "),Zo=a("code"),Mr=r("TFImageGPTModel"),zr=r(`. It is
used to instantiate a GPT-2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ImageGPT
`),et=a("a"),jr=r("openai/imagegpt-small"),qr=r(" architecture."),Ar=l(),le=a("p"),Dr=r("Configuration objects inherit from "),qt=a("a"),Nr=r("PretrainedConfig"),Or=r(` and can be used to control the model outputs. Read the
documentation from `),At=a("a"),Lr=r("PretrainedConfig"),Sr=r(" for more information."),Wr=l(),b(Ie.$$.fragment),za=l(),de=a("h2"),we=a("a"),ea=a("span"),b(tt.$$.fragment),Rr=l(),ta=a("span"),Br=r("ImageGPTFeatureExtractor"),ja=l(),S=a("div"),b(ot.$$.fragment),Hr=l(),oa=a("p"),Vr=r(`Constructs an ImageGPT feature extractor. This feature extractor can be used to resize images to a smaller
resolution (such as 32x32 or 64x64), normalize them and finally color quantize them to obtain sequences of \u201Cpixel
values\u201D (color clusters).`),Ur=l(),at=a("p"),Jr=r("This feature extractor inherits from "),Dt=a("a"),Xr=r("FeatureExtractionMixin"),Qr=r(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Kr=l(),oe=a("div"),b(nt.$$.fragment),Yr=l(),aa=a("p"),Zr=r("Main method to prepare for the model one or several image(s)."),ei=l(),b(Pe.$$.fragment),qa=l(),ce=a("h2"),ke=a("a"),na=a("span"),b(st.$$.fragment),ti=l(),sa=a("span"),oi=r("ImageGPTModel"),Aa=l(),A=a("div"),b(rt.$$.fragment),ai=l(),ra=a("p"),ni=r("The bare ImageGPT Model transformer outputting raw hidden-states without any specific head on top."),si=l(),it=a("p"),ri=r("This model inherits from "),Nt=a("a"),ii=r("PreTrainedModel"),li=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),di=l(),lt=a("p"),ci=r("This model is also a PyTorch "),dt=a("a"),mi=r("torch.nn.Module"),pi=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hi=l(),R=a("div"),b(ct.$$.fragment),gi=l(),me=a("p"),ui=r("The "),Ot=a("a"),fi=r("ImageGPTModel"),_i=r(" forward method, overrides the "),ia=a("code"),vi=r("__call__"),Ti=r(" special method."),bi=l(),b($e.$$.fragment),yi=l(),b(xe.$$.fragment),Da=l(),pe=a("h2"),Ge=a("a"),la=a("span"),b(mt.$$.fragment),Ii=l(),da=a("span"),wi=r("ImageGPTForCausalImageModeling"),Na=l(),D=a("div"),b(pt.$$.fragment),Pi=l(),ca=a("p"),ki=r(`The ImageGPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),$i=l(),ht=a("p"),xi=r("This model inherits from "),Lt=a("a"),Gi=r("PreTrainedModel"),Ei=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ci=l(),gt=a("p"),Fi=r("This model is also a PyTorch "),ut=a("a"),Mi=r("torch.nn.Module"),zi=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ji=l(),B=a("div"),b(ft.$$.fragment),qi=l(),he=a("p"),Ai=r("The "),St=a("a"),Di=r("ImageGPTForCausalImageModeling"),Ni=r(" forward method, overrides the "),ma=a("code"),Oi=r("__call__"),Li=r(" special method."),Si=l(),b(Ee.$$.fragment),Wi=l(),b(Ce.$$.fragment),Oa=l(),ge=a("h2"),Fe=a("a"),pa=a("span"),b(_t.$$.fragment),Ri=l(),ha=a("span"),Bi=r("ImageGPTForImageClassification"),La=l(),N=a("div"),b(vt.$$.fragment),Hi=l(),Tt=a("p"),Vi=r(`The ImageGPT Model transformer with an image classification head on top (linear layer).
`),Wt=a("a"),Ui=r("ImageGPTForImageClassification"),Ji=r(" average-pools the hidden states in order to do the classification."),Xi=l(),bt=a("p"),Qi=r("This model inherits from "),Rt=a("a"),Ki=r("PreTrainedModel"),Yi=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zi=l(),yt=a("p"),el=r("This model is also a PyTorch "),It=a("a"),tl=r("torch.nn.Module"),ol=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),al=l(),H=a("div"),b(wt.$$.fragment),nl=l(),ue=a("p"),sl=r("The "),Bt=a("a"),rl=r("ImageGPTForImageClassification"),il=r(" forward method, overrides the "),ga=a("code"),ll=r("__call__"),dl=r(" special method."),cl=l(),b(Me.$$.fragment),ml=l(),b(ze.$$.fragment),this.h()},l(o){const h=cc('[data-svelte="svelte-1phssyn"]',document.head);p=n(h,"META",{name:!0,content:!0}),h.forEach(t),T=d(o),f=n(o,"H1",{class:!0});var Pt=s(f);g=n(Pt,"A",{id:!0,class:!0,href:!0});var ua=s(g);v=n(ua,"SPAN",{});var fa=s(v);y(c.$$.fragment,fa),fa.forEach(t),ua.forEach(t),_=d(Pt),O=n(Pt,"SPAN",{});var _a=s(O);hn=i(_a,"ImageGPT"),_a.forEach(t),Pt.forEach(t),ya=d(o),re=n(o,"H2",{class:!0});var kt=s(re);_e=n(kt,"A",{id:!0,class:!0,href:!0});var va=s(_e);Qt=n(va,"SPAN",{});var Ta=s(Qt);y(Se.$$.fragment,Ta),Ta.forEach(t),va.forEach(t),gn=d(kt),Kt=n(kt,"SPAN",{});var ba=s(Kt);un=i(ba,"Overview"),ba.forEach(t),kt.forEach(t),Ia=d(o),ve=n(o,"P",{});var Wa=s(ve);fn=i(Wa,"The ImageGPT model was proposed in "),We=n(Wa,"A",{href:!0,rel:!0});var hl=s(We);_n=i(hl,"Generative Pretraining from Pixels"),hl.forEach(t),vn=i(Wa,` by Mark
Chen, Alec Radford, Rewon Child, Jeffrey Wu, Heewoo Jun, David Luan, Ilya Sutskever. ImageGPT (iGPT) is a GPT-2-like
model trained to predict the next pixel value, allowing for both unconditional and conditional image generation.`),Wa.forEach(t),wa=d(o),xt=n(o,"P",{});var gl=s(xt);Tn=i(gl,"The abstract from the paper is the following:"),gl.forEach(t),Pa=d(o),Gt=n(o,"P",{});var ul=s(Gt);Yt=n(ul,"EM",{});var fl=s(Yt);bn=i(fl,`Inspired by progress in unsupervised representation learning for natural language, we examine whether similar models
can learn useful representations for images. We train a sequence Transformer to auto-regressively predict pixels,
without incorporating knowledge of the 2D input structure. Despite training on low-resolution ImageNet without labels,
we find that a GPT-2 scale model learns strong image representations as measured by linear probing, fine-tuning, and
low-data classification. On CIFAR-10, we achieve 96.3% accuracy with a linear probe, outperforming a supervised Wide
ResNet, and 99.0% accuracy with full fine-tuning, matching the top supervised pre-trained models. We are also
competitive with self-supervised benchmarks on ImageNet when substituting pixels for a VQVAE encoding, achieving 69.0%
top-1 accuracy on a linear probe of our features.`),fl.forEach(t),ul.forEach(t),ka=d(o),Te=n(o,"IMG",{src:!0,alt:!0,width:!0}),$a=d(o),Et=n(o,"SMALL",{});var _l=s(Et);yn=i(_l,"Summary of the approach. Taken from the [original paper](https://cdn.openai.com/papers/Generative_Pretraining_from_Pixels_V2.pdf)."),_l.forEach(t),xa=d(o),W=n(o,"P",{});var je=s(W);In=i(je,"This model was contributed by "),Re=n(je,"A",{href:!0,rel:!0});var vl=s(Re);wn=i(vl,"nielsr"),vl.forEach(t),Pn=i(je,", based on "),Be=n(je,"A",{href:!0,rel:!0});var Tl=s(Be);kn=i(Tl,"this issue"),Tl.forEach(t),$n=i(je,`. The original code can be found
`),He=n(je,"A",{href:!0,rel:!0});var bl=s(He);xn=i(bl,"here"),bl.forEach(t),Gn=i(je,"."),je.forEach(t),Ga=d(o),Ct=n(o,"P",{});var yl=s(Ct);En=i(yl,"Tips:"),yl.forEach(t),Ea=d(o),x=n(o,"UL",{});var V=s(x);Ve=n(V,"LI",{});var Ra=s(Ve);Cn=i(Ra,`Demo notebooks for ImageGPT can be found
`),Ue=n(Ra,"A",{href:!0,rel:!0});var Il=s(Ue);Fn=i(Il,"here"),Il.forEach(t),Mn=i(Ra,"."),Ra.forEach(t),zn=d(V),Je=n(V,"LI",{});var Ba=s(Je);jn=i(Ba,"ImageGPT is almost exactly the same as "),Ft=n(Ba,"A",{href:!0});var wl=s(Ft);qn=i(wl,"GPT-2"),wl.forEach(t),An=i(Ba,`, with the exception that a different activation
function is used (namely \u201Cquick gelu\u201D), and the layer normalization layers don\u2019t mean center the inputs. ImageGPT
also doesn\u2019t have tied input- and output embeddings.`),Ba.forEach(t),Dn=d(V),Xe=n(V,"LI",{});var Ha=s(Xe);Nn=i(Ha,`As the time- and memory requirements of the attention mechanism of Transformers scales quadratically in the sequence
length, the authors pre-trained ImageGPT on smaller input resolutions, such as 32x32 and 64x64. However, feeding a
sequence of 32x32x3=3072 tokens from 0..255 into a Transformer is still prohibitively large. Therefore, the authors
applied k-means clustering to the (R,G,B) pixel values with k=512. This way, we only have a 32*32 = 1024-long
sequence, but now of integers in the range 0..511. So we are shrinking the sequence length at the cost of a bigger
embedding matrix. In other words, the vocabulary size of ImageGPT is 512, + 1 for a special \u201Cstart of sentence\u201D (SOS)
token, used at the beginning of every sequence. One can use `),Mt=n(Ha,"A",{href:!0});var Pl=s(Mt);On=i(Pl,"ImageGPTFeatureExtractor"),Pl.forEach(t),Ln=i(Ha,` to prepare
images for the model.`),Ha.forEach(t),Sn=d(V),Qe=n(V,"LI",{});var Va=s(Qe);Wn=i(Va,`Despite being pre-trained entirely unsupervised (i.e. without the use of any labels), ImageGPT produces fairly
performant image features useful for downstream tasks, such as image classification. The authors showed that the
features in the middle of the network are the most performant, and can be used as-is to train a linear model (such as
a sklearn logistic regression model for example). This is also referred to as \u201Clinear probing\u201D. Features can be
easily obtained by first forwarding the image through the model, then specifying `),Zt=n(Va,"CODE",{});var kl=s(Zt);Rn=i(kl,"output_hidden_states=True"),kl.forEach(t),Bn=i(Va,`, and
then average-pool the hidden states at whatever layer you like.`),Va.forEach(t),Hn=d(V),Ke=n(V,"LI",{});var Ua=s(Ke);Vn=i(Ua,`Alternatively, one can further fine-tune the entire model on a downstream dataset, similar to BERT. For this, you can
use `),zt=n(Ua,"A",{href:!0});var $l=s(zt);Un=i($l,"ImageGPTForImageClassification"),$l.forEach(t),Jn=i(Ua,"."),Ua.forEach(t),Xn=d(V),eo=n(V,"LI",{});var xl=s(eo);Qn=i(xl,`ImageGPT comes in different sizes: there\u2019s ImageGPT-small, ImageGPT-medium and ImageGPT-large. The authors did also
train an XL variant, which they didn\u2019t release. The differences in size are summarized in the following table:`),xl.forEach(t),V.forEach(t),Ca=d(o),be=n(o,"TABLE",{});var Ja=s(be);to=n(Ja,"THEAD",{});var Gl=s(to);G=n(Gl,"TR",{});var U=s(G);oo=n(U,"TH",{});var El=s(oo);ao=n(El,"STRONG",{});var Cl=s(ao);Kn=i(Cl,"Model variant"),Cl.forEach(t),El.forEach(t),Yn=d(U),no=n(U,"TH",{});var Fl=s(no);so=n(Fl,"STRONG",{});var Ml=s(so);Zn=i(Ml,"Depths"),Ml.forEach(t),Fl.forEach(t),es=d(U),ro=n(U,"TH",{});var zl=s(ro);io=n(zl,"STRONG",{});var jl=s(io);ts=i(jl,"Hidden sizes"),jl.forEach(t),zl.forEach(t),os=d(U),lo=n(U,"TH",{});var ql=s(lo);co=n(ql,"STRONG",{});var Al=s(co);as=i(Al,"Decoder hidden size"),Al.forEach(t),ql.forEach(t),ns=d(U),mo=n(U,"TH",{});var Dl=s(mo);po=n(Dl,"STRONG",{});var Nl=s(po);ss=i(Nl,"Params (M)"),Nl.forEach(t),Dl.forEach(t),rs=d(U),ho=n(U,"TH",{});var Ol=s(ho);go=n(Ol,"STRONG",{});var Ll=s(go);is=i(Ll,"ImageNet-1k Top 1"),Ll.forEach(t),Ol.forEach(t),U.forEach(t),Gl.forEach(t),ls=d(Ja),E=n(Ja,"TBODY",{});var J=s(E);C=n(J,"TR",{});var X=s(C);uo=n(X,"TD",{});var Sl=s(uo);ds=i(Sl,"MiT-b0"),Sl.forEach(t),cs=d(X),fo=n(X,"TD",{});var Wl=s(fo);ms=i(Wl,"[2, 2, 2, 2]"),Wl.forEach(t),ps=d(X),_o=n(X,"TD",{});var Rl=s(_o);hs=i(Rl,"[32, 64, 160, 256]"),Rl.forEach(t),gs=d(X),vo=n(X,"TD",{});var Bl=s(vo);us=i(Bl,"256"),Bl.forEach(t),fs=d(X),To=n(X,"TD",{});var Hl=s(To);_s=i(Hl,"3.7"),Hl.forEach(t),vs=d(X),bo=n(X,"TD",{});var Vl=s(bo);Ts=i(Vl,"70.5"),Vl.forEach(t),X.forEach(t),bs=d(J),F=n(J,"TR",{});var Q=s(F);yo=n(Q,"TD",{});var Ul=s(yo);ys=i(Ul,"MiT-b1"),Ul.forEach(t),Is=d(Q),Io=n(Q,"TD",{});var Jl=s(Io);ws=i(Jl,"[2, 2, 2, 2]"),Jl.forEach(t),Ps=d(Q),wo=n(Q,"TD",{});var Xl=s(wo);ks=i(Xl,"[64, 128, 320, 512]"),Xl.forEach(t),$s=d(Q),Po=n(Q,"TD",{});var Ql=s(Po);xs=i(Ql,"256"),Ql.forEach(t),Gs=d(Q),ko=n(Q,"TD",{});var Kl=s(ko);Es=i(Kl,"14.0"),Kl.forEach(t),Cs=d(Q),$o=n(Q,"TD",{});var Yl=s($o);Fs=i(Yl,"78.7"),Yl.forEach(t),Q.forEach(t),Ms=d(J),M=n(J,"TR",{});var K=s(M);xo=n(K,"TD",{});var Zl=s(xo);zs=i(Zl,"MiT-b2"),Zl.forEach(t),js=d(K),Go=n(K,"TD",{});var ed=s(Go);qs=i(ed,"[3, 4, 6, 3]"),ed.forEach(t),As=d(K),Eo=n(K,"TD",{});var td=s(Eo);Ds=i(td,"[64, 128, 320, 512]"),td.forEach(t),Ns=d(K),Co=n(K,"TD",{});var od=s(Co);Os=i(od,"768"),od.forEach(t),Ls=d(K),Fo=n(K,"TD",{});var ad=s(Fo);Ss=i(ad,"25.4"),ad.forEach(t),Ws=d(K),Mo=n(K,"TD",{});var nd=s(Mo);Rs=i(nd,"81.6"),nd.forEach(t),K.forEach(t),Bs=d(J),z=n(J,"TR",{});var Y=s(z);zo=n(Y,"TD",{});var sd=s(zo);Hs=i(sd,"MiT-b3"),sd.forEach(t),Vs=d(Y),jo=n(Y,"TD",{});var rd=s(jo);Us=i(rd,"[3, 4, 18, 3]"),rd.forEach(t),Js=d(Y),qo=n(Y,"TD",{});var id=s(qo);Xs=i(id,"[64, 128, 320, 512]"),id.forEach(t),Qs=d(Y),Ao=n(Y,"TD",{});var ld=s(Ao);Ks=i(ld,"768"),ld.forEach(t),Ys=d(Y),Do=n(Y,"TD",{});var dd=s(Do);Zs=i(dd,"45.2"),dd.forEach(t),er=d(Y),No=n(Y,"TD",{});var cd=s(No);tr=i(cd,"83.1"),cd.forEach(t),Y.forEach(t),or=d(J),j=n(J,"TR",{});var Z=s(j);Oo=n(Z,"TD",{});var md=s(Oo);ar=i(md,"MiT-b4"),md.forEach(t),nr=d(Z),Lo=n(Z,"TD",{});var pd=s(Lo);sr=i(pd,"[3, 8, 27, 3]"),pd.forEach(t),rr=d(Z),So=n(Z,"TD",{});var hd=s(So);ir=i(hd,"[64, 128, 320, 512]"),hd.forEach(t),lr=d(Z),Wo=n(Z,"TD",{});var gd=s(Wo);dr=i(gd,"768"),gd.forEach(t),cr=d(Z),Ro=n(Z,"TD",{});var ud=s(Ro);mr=i(ud,"62.6"),ud.forEach(t),pr=d(Z),Bo=n(Z,"TD",{});var fd=s(Bo);hr=i(fd,"83.6"),fd.forEach(t),Z.forEach(t),gr=d(J),q=n(J,"TR",{});var ee=s(q);Ho=n(ee,"TD",{});var _d=s(Ho);ur=i(_d,"MiT-b5"),_d.forEach(t),fr=d(ee),Vo=n(ee,"TD",{});var vd=s(Vo);_r=i(vd,"[3, 6, 40, 3]"),vd.forEach(t),vr=d(ee),Uo=n(ee,"TD",{});var Td=s(Uo);Tr=i(Td,"[64, 128, 320, 512]"),Td.forEach(t),br=d(ee),Jo=n(ee,"TD",{});var bd=s(Jo);yr=i(bd,"768"),bd.forEach(t),Ir=d(ee),Xo=n(ee,"TD",{});var yd=s(Xo);wr=i(yd,"82.0"),yd.forEach(t),Pr=d(ee),Qo=n(ee,"TD",{});var Id=s(Qo);kr=i(Id,"83.8"),Id.forEach(t),ee.forEach(t),J.forEach(t),Ja.forEach(t),Fa=d(o),ie=n(o,"H2",{class:!0});var Xa=s(ie);ye=n(Xa,"A",{id:!0,class:!0,href:!0});var wd=s(ye);Ko=n(wd,"SPAN",{});var Pd=s(Ko);y(Ye.$$.fragment,Pd),Pd.forEach(t),wd.forEach(t),$r=d(Xa),Yo=n(Xa,"SPAN",{});var kd=s(Yo);xr=i(kd,"ImageGPTConfig"),kd.forEach(t),Xa.forEach(t),Ma=d(o),L=n(o,"DIV",{class:!0});var qe=s(L);y(Ze.$$.fragment,qe),Gr=d(qe),te=n(qe,"P",{});var Ae=s(te);Er=i(Ae,"This is the configuration class to store the configuration of a "),jt=n(Ae,"A",{href:!0});var $d=s(jt);Cr=i($d,"ImageGPTModel"),$d.forEach(t),Fr=i(Ae," or a "),Zo=n(Ae,"CODE",{});var xd=s(Zo);Mr=i(xd,"TFImageGPTModel"),xd.forEach(t),zr=i(Ae,`. It is
used to instantiate a GPT-2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ImageGPT
`),et=n(Ae,"A",{href:!0,rel:!0});var Gd=s(et);jr=i(Gd,"openai/imagegpt-small"),Gd.forEach(t),qr=i(Ae," architecture."),Ae.forEach(t),Ar=d(qe),le=n(qe,"P",{});var Ht=s(le);Dr=i(Ht,"Configuration objects inherit from "),qt=n(Ht,"A",{href:!0});var Ed=s(qt);Nr=i(Ed,"PretrainedConfig"),Ed.forEach(t),Or=i(Ht,` and can be used to control the model outputs. Read the
documentation from `),At=n(Ht,"A",{href:!0});var Cd=s(At);Lr=i(Cd,"PretrainedConfig"),Cd.forEach(t),Sr=i(Ht," for more information."),Ht.forEach(t),Wr=d(qe),y(Ie.$$.fragment,qe),qe.forEach(t),za=d(o),de=n(o,"H2",{class:!0});var Qa=s(de);we=n(Qa,"A",{id:!0,class:!0,href:!0});var Fd=s(we);ea=n(Fd,"SPAN",{});var Md=s(ea);y(tt.$$.fragment,Md),Md.forEach(t),Fd.forEach(t),Rr=d(Qa),ta=n(Qa,"SPAN",{});var zd=s(ta);Br=i(zd,"ImageGPTFeatureExtractor"),zd.forEach(t),Qa.forEach(t),ja=d(o),S=n(o,"DIV",{class:!0});var De=s(S);y(ot.$$.fragment,De),Hr=d(De),oa=n(De,"P",{});var jd=s(oa);Vr=i(jd,`Constructs an ImageGPT feature extractor. This feature extractor can be used to resize images to a smaller
resolution (such as 32x32 or 64x64), normalize them and finally color quantize them to obtain sequences of \u201Cpixel
values\u201D (color clusters).`),jd.forEach(t),Ur=d(De),at=n(De,"P",{});var Ka=s(at);Jr=i(Ka,"This feature extractor inherits from "),Dt=n(Ka,"A",{href:!0});var qd=s(Dt);Xr=i(qd,"FeatureExtractionMixin"),qd.forEach(t),Qr=i(Ka,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ka.forEach(t),Kr=d(De),oe=n(De,"DIV",{class:!0});var Vt=s(oe);y(nt.$$.fragment,Vt),Yr=d(Vt),aa=n(Vt,"P",{});var Ad=s(aa);Zr=i(Ad,"Main method to prepare for the model one or several image(s)."),Ad.forEach(t),ei=d(Vt),y(Pe.$$.fragment,Vt),Vt.forEach(t),De.forEach(t),qa=d(o),ce=n(o,"H2",{class:!0});var Ya=s(ce);ke=n(Ya,"A",{id:!0,class:!0,href:!0});var Dd=s(ke);na=n(Dd,"SPAN",{});var Nd=s(na);y(st.$$.fragment,Nd),Nd.forEach(t),Dd.forEach(t),ti=d(Ya),sa=n(Ya,"SPAN",{});var Od=s(sa);oi=i(Od,"ImageGPTModel"),Od.forEach(t),Ya.forEach(t),Aa=d(o),A=n(o,"DIV",{class:!0});var ae=s(A);y(rt.$$.fragment,ae),ai=d(ae),ra=n(ae,"P",{});var Ld=s(ra);ni=i(Ld,"The bare ImageGPT Model transformer outputting raw hidden-states without any specific head on top."),Ld.forEach(t),si=d(ae),it=n(ae,"P",{});var Za=s(it);ri=i(Za,"This model inherits from "),Nt=n(Za,"A",{href:!0});var Sd=s(Nt);ii=i(Sd,"PreTrainedModel"),Sd.forEach(t),li=i(Za,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Za.forEach(t),di=d(ae),lt=n(ae,"P",{});var en=s(lt);ci=i(en,"This model is also a PyTorch "),dt=n(en,"A",{href:!0,rel:!0});var Wd=s(dt);mi=i(Wd,"torch.nn.Module"),Wd.forEach(t),pi=i(en,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),en.forEach(t),hi=d(ae),R=n(ae,"DIV",{class:!0});var Ne=s(R);y(ct.$$.fragment,Ne),gi=d(Ne),me=n(Ne,"P",{});var Ut=s(me);ui=i(Ut,"The "),Ot=n(Ut,"A",{href:!0});var Rd=s(Ot);fi=i(Rd,"ImageGPTModel"),Rd.forEach(t),_i=i(Ut," forward method, overrides the "),ia=n(Ut,"CODE",{});var Bd=s(ia);vi=i(Bd,"__call__"),Bd.forEach(t),Ti=i(Ut," special method."),Ut.forEach(t),bi=d(Ne),y($e.$$.fragment,Ne),yi=d(Ne),y(xe.$$.fragment,Ne),Ne.forEach(t),ae.forEach(t),Da=d(o),pe=n(o,"H2",{class:!0});var tn=s(pe);Ge=n(tn,"A",{id:!0,class:!0,href:!0});var Hd=s(Ge);la=n(Hd,"SPAN",{});var Vd=s(la);y(mt.$$.fragment,Vd),Vd.forEach(t),Hd.forEach(t),Ii=d(tn),da=n(tn,"SPAN",{});var Ud=s(da);wi=i(Ud,"ImageGPTForCausalImageModeling"),Ud.forEach(t),tn.forEach(t),Na=d(o),D=n(o,"DIV",{class:!0});var ne=s(D);y(pt.$$.fragment,ne),Pi=d(ne),ca=n(ne,"P",{});var Jd=s(ca);ki=i(Jd,`The ImageGPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Jd.forEach(t),$i=d(ne),ht=n(ne,"P",{});var on=s(ht);xi=i(on,"This model inherits from "),Lt=n(on,"A",{href:!0});var Xd=s(Lt);Gi=i(Xd,"PreTrainedModel"),Xd.forEach(t),Ei=i(on,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),on.forEach(t),Ci=d(ne),gt=n(ne,"P",{});var an=s(gt);Fi=i(an,"This model is also a PyTorch "),ut=n(an,"A",{href:!0,rel:!0});var Qd=s(ut);Mi=i(Qd,"torch.nn.Module"),Qd.forEach(t),zi=i(an,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),an.forEach(t),ji=d(ne),B=n(ne,"DIV",{class:!0});var Oe=s(B);y(ft.$$.fragment,Oe),qi=d(Oe),he=n(Oe,"P",{});var Jt=s(he);Ai=i(Jt,"The "),St=n(Jt,"A",{href:!0});var Kd=s(St);Di=i(Kd,"ImageGPTForCausalImageModeling"),Kd.forEach(t),Ni=i(Jt," forward method, overrides the "),ma=n(Jt,"CODE",{});var Yd=s(ma);Oi=i(Yd,"__call__"),Yd.forEach(t),Li=i(Jt," special method."),Jt.forEach(t),Si=d(Oe),y(Ee.$$.fragment,Oe),Wi=d(Oe),y(Ce.$$.fragment,Oe),Oe.forEach(t),ne.forEach(t),Oa=d(o),ge=n(o,"H2",{class:!0});var nn=s(ge);Fe=n(nn,"A",{id:!0,class:!0,href:!0});var Zd=s(Fe);pa=n(Zd,"SPAN",{});var ec=s(pa);y(_t.$$.fragment,ec),ec.forEach(t),Zd.forEach(t),Ri=d(nn),ha=n(nn,"SPAN",{});var tc=s(ha);Bi=i(tc,"ImageGPTForImageClassification"),tc.forEach(t),nn.forEach(t),La=d(o),N=n(o,"DIV",{class:!0});var se=s(N);y(vt.$$.fragment,se),Hi=d(se),Tt=n(se,"P",{});var sn=s(Tt);Vi=i(sn,`The ImageGPT Model transformer with an image classification head on top (linear layer).
`),Wt=n(sn,"A",{href:!0});var oc=s(Wt);Ui=i(oc,"ImageGPTForImageClassification"),oc.forEach(t),Ji=i(sn," average-pools the hidden states in order to do the classification."),sn.forEach(t),Xi=d(se),bt=n(se,"P",{});var rn=s(bt);Qi=i(rn,"This model inherits from "),Rt=n(rn,"A",{href:!0});var ac=s(Rt);Ki=i(ac,"PreTrainedModel"),ac.forEach(t),Yi=i(rn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rn.forEach(t),Zi=d(se),yt=n(se,"P",{});var ln=s(yt);el=i(ln,"This model is also a PyTorch "),It=n(ln,"A",{href:!0,rel:!0});var nc=s(It);tl=i(nc,"torch.nn.Module"),nc.forEach(t),ol=i(ln,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ln.forEach(t),al=d(se),H=n(se,"DIV",{class:!0});var Le=s(H);y(wt.$$.fragment,Le),nl=d(Le),ue=n(Le,"P",{});var Xt=s(ue);sl=i(Xt,"The "),Bt=n(Xt,"A",{href:!0});var sc=s(Bt);rl=i(sc,"ImageGPTForImageClassification"),sc.forEach(t),il=i(Xt," forward method, overrides the "),ga=n(Xt,"CODE",{});var rc=s(ga);ll=i(rc,"__call__"),rc.forEach(t),dl=i(Xt," special method."),Xt.forEach(t),cl=d(Le),y(Me.$$.fragment,Le),ml=d(Le),y(ze.$$.fragment,Le),Le.forEach(t),se.forEach(t),this.h()},h(){m(p,"name","hf:doc:metadata"),m(p,"content",JSON.stringify(Ic)),m(g,"id","imagegpt"),m(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(g,"href","#imagegpt"),m(f,"class","relative group"),m(_e,"id","overview"),m(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(_e,"href","#overview"),m(re,"class","relative group"),m(We,"href","https://openai.com/blog/image-gpt"),m(We,"rel","nofollow"),mc(Te.src,pl="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/imagegpt_architecture.png")||m(Te,"src",pl),m(Te,"alt","drawing"),m(Te,"width","600"),m(Re,"href","https://huggingface.co/nielsr"),m(Re,"rel","nofollow"),m(Be,"href","https://github.com/openai/image-gpt/issues/7"),m(Be,"rel","nofollow"),m(He,"href","https://github.com/openai/image-gpt"),m(He,"rel","nofollow"),m(Ue,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/ImageGPT"),m(Ue,"rel","nofollow"),m(Ft,"href","gpt2"),m(Mt,"href","/docs/transformers/v4.22.0/en/model_doc/imagegpt#transformers.ImageGPTFeatureExtractor"),m(zt,"href","/docs/transformers/v4.22.0/en/model_doc/imagegpt#transformers.ImageGPTForImageClassification"),m(ye,"id","transformers.ImageGPTConfig"),m(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ye,"href","#transformers.ImageGPTConfig"),m(ie,"class","relative group"),m(jt,"href","/docs/transformers/v4.22.0/en/model_doc/imagegpt#transformers.ImageGPTModel"),m(et,"href","https://huggingface.co/openai/imagegpt-small"),m(et,"rel","nofollow"),m(qt,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),m(At,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),m(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(we,"id","transformers.ImageGPTFeatureExtractor"),m(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(we,"href","#transformers.ImageGPTFeatureExtractor"),m(de,"class","relative group"),m(Dt,"href","/docs/transformers/v4.22.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),m(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ke,"id","transformers.ImageGPTModel"),m(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ke,"href","#transformers.ImageGPTModel"),m(ce,"class","relative group"),m(Nt,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),m(dt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(dt,"rel","nofollow"),m(Ot,"href","/docs/transformers/v4.22.0/en/model_doc/imagegpt#transformers.ImageGPTModel"),m(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ge,"id","transformers.ImageGPTForCausalImageModeling"),m(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ge,"href","#transformers.ImageGPTForCausalImageModeling"),m(pe,"class","relative group"),m(Lt,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),m(ut,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(ut,"rel","nofollow"),m(St,"href","/docs/transformers/v4.22.0/en/model_doc/imagegpt#transformers.ImageGPTForCausalImageModeling"),m(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Fe,"id","transformers.ImageGPTForImageClassification"),m(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Fe,"href","#transformers.ImageGPTForImageClassification"),m(ge,"class","relative group"),m(Wt,"href","/docs/transformers/v4.22.0/en/model_doc/imagegpt#transformers.ImageGPTForImageClassification"),m(Rt,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),m(It,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(It,"rel","nofollow"),m(Bt,"href","/docs/transformers/v4.22.0/en/model_doc/imagegpt#transformers.ImageGPTForImageClassification"),m(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,h){e(document.head,p),u(o,T,h),u(o,f,h),e(f,g),e(g,v),I(c,v,null),e(f,_),e(f,O),e(O,hn),u(o,ya,h),u(o,re,h),e(re,_e),e(_e,Qt),I(Se,Qt,null),e(re,gn),e(re,Kt),e(Kt,un),u(o,Ia,h),u(o,ve,h),e(ve,fn),e(ve,We),e(We,_n),e(ve,vn),u(o,wa,h),u(o,xt,h),e(xt,Tn),u(o,Pa,h),u(o,Gt,h),e(Gt,Yt),e(Yt,bn),u(o,ka,h),u(o,Te,h),u(o,$a,h),u(o,Et,h),e(Et,yn),u(o,xa,h),u(o,W,h),e(W,In),e(W,Re),e(Re,wn),e(W,Pn),e(W,Be),e(Be,kn),e(W,$n),e(W,He),e(He,xn),e(W,Gn),u(o,Ga,h),u(o,Ct,h),e(Ct,En),u(o,Ea,h),u(o,x,h),e(x,Ve),e(Ve,Cn),e(Ve,Ue),e(Ue,Fn),e(Ve,Mn),e(x,zn),e(x,Je),e(Je,jn),e(Je,Ft),e(Ft,qn),e(Je,An),e(x,Dn),e(x,Xe),e(Xe,Nn),e(Xe,Mt),e(Mt,On),e(Xe,Ln),e(x,Sn),e(x,Qe),e(Qe,Wn),e(Qe,Zt),e(Zt,Rn),e(Qe,Bn),e(x,Hn),e(x,Ke),e(Ke,Vn),e(Ke,zt),e(zt,Un),e(Ke,Jn),e(x,Xn),e(x,eo),e(eo,Qn),u(o,Ca,h),u(o,be,h),e(be,to),e(to,G),e(G,oo),e(oo,ao),e(ao,Kn),e(G,Yn),e(G,no),e(no,so),e(so,Zn),e(G,es),e(G,ro),e(ro,io),e(io,ts),e(G,os),e(G,lo),e(lo,co),e(co,as),e(G,ns),e(G,mo),e(mo,po),e(po,ss),e(G,rs),e(G,ho),e(ho,go),e(go,is),e(be,ls),e(be,E),e(E,C),e(C,uo),e(uo,ds),e(C,cs),e(C,fo),e(fo,ms),e(C,ps),e(C,_o),e(_o,hs),e(C,gs),e(C,vo),e(vo,us),e(C,fs),e(C,To),e(To,_s),e(C,vs),e(C,bo),e(bo,Ts),e(E,bs),e(E,F),e(F,yo),e(yo,ys),e(F,Is),e(F,Io),e(Io,ws),e(F,Ps),e(F,wo),e(wo,ks),e(F,$s),e(F,Po),e(Po,xs),e(F,Gs),e(F,ko),e(ko,Es),e(F,Cs),e(F,$o),e($o,Fs),e(E,Ms),e(E,M),e(M,xo),e(xo,zs),e(M,js),e(M,Go),e(Go,qs),e(M,As),e(M,Eo),e(Eo,Ds),e(M,Ns),e(M,Co),e(Co,Os),e(M,Ls),e(M,Fo),e(Fo,Ss),e(M,Ws),e(M,Mo),e(Mo,Rs),e(E,Bs),e(E,z),e(z,zo),e(zo,Hs),e(z,Vs),e(z,jo),e(jo,Us),e(z,Js),e(z,qo),e(qo,Xs),e(z,Qs),e(z,Ao),e(Ao,Ks),e(z,Ys),e(z,Do),e(Do,Zs),e(z,er),e(z,No),e(No,tr),e(E,or),e(E,j),e(j,Oo),e(Oo,ar),e(j,nr),e(j,Lo),e(Lo,sr),e(j,rr),e(j,So),e(So,ir),e(j,lr),e(j,Wo),e(Wo,dr),e(j,cr),e(j,Ro),e(Ro,mr),e(j,pr),e(j,Bo),e(Bo,hr),e(E,gr),e(E,q),e(q,Ho),e(Ho,ur),e(q,fr),e(q,Vo),e(Vo,_r),e(q,vr),e(q,Uo),e(Uo,Tr),e(q,br),e(q,Jo),e(Jo,yr),e(q,Ir),e(q,Xo),e(Xo,wr),e(q,Pr),e(q,Qo),e(Qo,kr),u(o,Fa,h),u(o,ie,h),e(ie,ye),e(ye,Ko),I(Ye,Ko,null),e(ie,$r),e(ie,Yo),e(Yo,xr),u(o,Ma,h),u(o,L,h),I(Ze,L,null),e(L,Gr),e(L,te),e(te,Er),e(te,jt),e(jt,Cr),e(te,Fr),e(te,Zo),e(Zo,Mr),e(te,zr),e(te,et),e(et,jr),e(te,qr),e(L,Ar),e(L,le),e(le,Dr),e(le,qt),e(qt,Nr),e(le,Or),e(le,At),e(At,Lr),e(le,Sr),e(L,Wr),I(Ie,L,null),u(o,za,h),u(o,de,h),e(de,we),e(we,ea),I(tt,ea,null),e(de,Rr),e(de,ta),e(ta,Br),u(o,ja,h),u(o,S,h),I(ot,S,null),e(S,Hr),e(S,oa),e(oa,Vr),e(S,Ur),e(S,at),e(at,Jr),e(at,Dt),e(Dt,Xr),e(at,Qr),e(S,Kr),e(S,oe),I(nt,oe,null),e(oe,Yr),e(oe,aa),e(aa,Zr),e(oe,ei),I(Pe,oe,null),u(o,qa,h),u(o,ce,h),e(ce,ke),e(ke,na),I(st,na,null),e(ce,ti),e(ce,sa),e(sa,oi),u(o,Aa,h),u(o,A,h),I(rt,A,null),e(A,ai),e(A,ra),e(ra,ni),e(A,si),e(A,it),e(it,ri),e(it,Nt),e(Nt,ii),e(it,li),e(A,di),e(A,lt),e(lt,ci),e(lt,dt),e(dt,mi),e(lt,pi),e(A,hi),e(A,R),I(ct,R,null),e(R,gi),e(R,me),e(me,ui),e(me,Ot),e(Ot,fi),e(me,_i),e(me,ia),e(ia,vi),e(me,Ti),e(R,bi),I($e,R,null),e(R,yi),I(xe,R,null),u(o,Da,h),u(o,pe,h),e(pe,Ge),e(Ge,la),I(mt,la,null),e(pe,Ii),e(pe,da),e(da,wi),u(o,Na,h),u(o,D,h),I(pt,D,null),e(D,Pi),e(D,ca),e(ca,ki),e(D,$i),e(D,ht),e(ht,xi),e(ht,Lt),e(Lt,Gi),e(ht,Ei),e(D,Ci),e(D,gt),e(gt,Fi),e(gt,ut),e(ut,Mi),e(gt,zi),e(D,ji),e(D,B),I(ft,B,null),e(B,qi),e(B,he),e(he,Ai),e(he,St),e(St,Di),e(he,Ni),e(he,ma),e(ma,Oi),e(he,Li),e(B,Si),I(Ee,B,null),e(B,Wi),I(Ce,B,null),u(o,Oa,h),u(o,ge,h),e(ge,Fe),e(Fe,pa),I(_t,pa,null),e(ge,Ri),e(ge,ha),e(ha,Bi),u(o,La,h),u(o,N,h),I(vt,N,null),e(N,Hi),e(N,Tt),e(Tt,Vi),e(Tt,Wt),e(Wt,Ui),e(Tt,Ji),e(N,Xi),e(N,bt),e(bt,Qi),e(bt,Rt),e(Rt,Ki),e(bt,Yi),e(N,Zi),e(N,yt),e(yt,el),e(yt,It),e(It,tl),e(yt,ol),e(N,al),e(N,H),I(wt,H,null),e(H,nl),e(H,ue),e(ue,sl),e(ue,Bt),e(Bt,rl),e(ue,il),e(ue,ga),e(ga,ll),e(ue,dl),e(H,cl),I(Me,H,null),e(H,ml),I(ze,H,null),Sa=!0},p(o,[h]){const Pt={};h&2&&(Pt.$$scope={dirty:h,ctx:o}),Ie.$set(Pt);const ua={};h&2&&(ua.$$scope={dirty:h,ctx:o}),Pe.$set(ua);const fa={};h&2&&(fa.$$scope={dirty:h,ctx:o}),$e.$set(fa);const _a={};h&2&&(_a.$$scope={dirty:h,ctx:o}),xe.$set(_a);const kt={};h&2&&(kt.$$scope={dirty:h,ctx:o}),Ee.$set(kt);const va={};h&2&&(va.$$scope={dirty:h,ctx:o}),Ce.$set(va);const Ta={};h&2&&(Ta.$$scope={dirty:h,ctx:o}),Me.$set(Ta);const ba={};h&2&&(ba.$$scope={dirty:h,ctx:o}),ze.$set(ba)},i(o){Sa||(w(c.$$.fragment,o),w(Se.$$.fragment,o),w(Ye.$$.fragment,o),w(Ze.$$.fragment,o),w(Ie.$$.fragment,o),w(tt.$$.fragment,o),w(ot.$$.fragment,o),w(nt.$$.fragment,o),w(Pe.$$.fragment,o),w(st.$$.fragment,o),w(rt.$$.fragment,o),w(ct.$$.fragment,o),w($e.$$.fragment,o),w(xe.$$.fragment,o),w(mt.$$.fragment,o),w(pt.$$.fragment,o),w(ft.$$.fragment,o),w(Ee.$$.fragment,o),w(Ce.$$.fragment,o),w(_t.$$.fragment,o),w(vt.$$.fragment,o),w(wt.$$.fragment,o),w(Me.$$.fragment,o),w(ze.$$.fragment,o),Sa=!0)},o(o){P(c.$$.fragment,o),P(Se.$$.fragment,o),P(Ye.$$.fragment,o),P(Ze.$$.fragment,o),P(Ie.$$.fragment,o),P(tt.$$.fragment,o),P(ot.$$.fragment,o),P(nt.$$.fragment,o),P(Pe.$$.fragment,o),P(st.$$.fragment,o),P(rt.$$.fragment,o),P(ct.$$.fragment,o),P($e.$$.fragment,o),P(xe.$$.fragment,o),P(mt.$$.fragment,o),P(pt.$$.fragment,o),P(ft.$$.fragment,o),P(Ee.$$.fragment,o),P(Ce.$$.fragment,o),P(_t.$$.fragment,o),P(vt.$$.fragment,o),P(wt.$$.fragment,o),P(Me.$$.fragment,o),P(ze.$$.fragment,o),Sa=!1},d(o){t(p),o&&t(T),o&&t(f),k(c),o&&t(ya),o&&t(re),k(Se),o&&t(Ia),o&&t(ve),o&&t(wa),o&&t(xt),o&&t(Pa),o&&t(Gt),o&&t(ka),o&&t(Te),o&&t($a),o&&t(Et),o&&t(xa),o&&t(W),o&&t(Ga),o&&t(Ct),o&&t(Ea),o&&t(x),o&&t(Ca),o&&t(be),o&&t(Fa),o&&t(ie),k(Ye),o&&t(Ma),o&&t(L),k(Ze),k(Ie),o&&t(za),o&&t(de),k(tt),o&&t(ja),o&&t(S),k(ot),k(nt),k(Pe),o&&t(qa),o&&t(ce),k(st),o&&t(Aa),o&&t(A),k(rt),k(ct),k($e),k(xe),o&&t(Da),o&&t(pe),k(mt),o&&t(Na),o&&t(D),k(pt),k(ft),k(Ee),k(Ce),o&&t(Oa),o&&t(ge),k(_t),o&&t(La),o&&t(N),k(vt),k(wt),k(Me),k(ze)}}}const Ic={local:"imagegpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.ImageGPTConfig",title:"ImageGPTConfig"},{local:"transformers.ImageGPTFeatureExtractor",title:"ImageGPTFeatureExtractor"},{local:"transformers.ImageGPTModel",title:"ImageGPTModel"},{local:"transformers.ImageGPTForCausalImageModeling",title:"ImageGPTForCausalImageModeling"},{local:"transformers.ImageGPTForImageClassification",title:"ImageGPTForImageClassification"}],title:"ImageGPT"};function wc($){return pc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Cc extends ic{constructor(p){super();lc(this,p,wc,yc,dc,{})}}export{Cc as default,Ic as metadata};
