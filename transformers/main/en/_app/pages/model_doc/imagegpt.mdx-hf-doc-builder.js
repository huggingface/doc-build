import{S as Kd,i as Yd,s as Zd,e as a,k as l,w as b,t as r,M as ec,c as n,d as t,m as d,a as s,x as y,h as i,b as m,N as tc,G as e,g,y as I,q as w,o as P,B as k,v as oc,L as nn}from"../../chunks/vendor-hf-doc-builder.js";import{T as tl}from"../../chunks/Tip-hf-doc-builder.js";import{D as ue}from"../../chunks/Docstring-hf-doc-builder.js";import{C as sn}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as wt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as an}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ac($){let p,v,_,u,T;return u=new sn({props:{code:`from transformers import ImageGPTConfig, ImageGPTModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=a("p"),v=r("Example:"),_=l(),b(u.$$.fragment)},l(c){p=n(c,"P",{});var f=s(p);v=i(f,"Example:"),f.forEach(t),_=d(c),y(u.$$.fragment,c)},m(c,f){g(c,p,f),e(p,v),g(c,_,f),I(u,c,f),T=!0},p:nn,i(c){T||(w(u.$$.fragment,c),T=!0)},o(c){P(u.$$.fragment,c),T=!1},d(c){c&&t(p),c&&t(_),k(u,c)}}}function nc($){let p,v,_,u,T;return{c(){p=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){p=n(c,"P",{});var f=s(p);v=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n(f,"CODE",{});var N=s(_);u=i(N,"Module"),N.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(c,f){g(c,p,f),e(p,v),e(p,_),e(_,u),e(p,T)},d(c){c&&t(p)}}}function sc($){let p,v,_,u,T;return u=new sn({props:{code:`from transformers import ImageGPTFeatureExtractor, ImageGPTModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=a("p"),v=r("Examples:"),_=l(),b(u.$$.fragment)},l(c){p=n(c,"P",{});var f=s(p);v=i(f,"Examples:"),f.forEach(t),_=d(c),y(u.$$.fragment,c)},m(c,f){g(c,p,f),e(p,v),g(c,_,f),I(u,c,f),T=!0},p:nn,i(c){T||(w(u.$$.fragment,c),T=!0)},o(c){P(u.$$.fragment,c),T=!1},d(c){c&&t(p),c&&t(_),k(u,c)}}}function rc($){let p,v,_,u,T;return{c(){p=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){p=n(c,"P",{});var f=s(p);v=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n(f,"CODE",{});var N=s(_);u=i(N,"Module"),N.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(c,f){g(c,p,f),e(p,v),e(p,_),e(_,u),e(p,T)},d(c){c&&t(p)}}}function ic($){let p,v,_,u,T;return u=new sn({props:{code:`from transformers import ImageGPTFeatureExtractor, ImageGPTForCausalImageModeling
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
<span class="hljs-meta">... </span>    ax.imshow(img)`}}),{c(){p=a("p"),v=r("Examples:"),_=l(),b(u.$$.fragment)},l(c){p=n(c,"P",{});var f=s(p);v=i(f,"Examples:"),f.forEach(t),_=d(c),y(u.$$.fragment,c)},m(c,f){g(c,p,f),e(p,v),g(c,_,f),I(u,c,f),T=!0},p:nn,i(c){T||(w(u.$$.fragment,c),T=!0)},o(c){P(u.$$.fragment,c),T=!1},d(c){c&&t(p),c&&t(_),k(u,c)}}}function lc($){let p,v,_,u,T;return{c(){p=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){p=n(c,"P",{});var f=s(p);v=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n(f,"CODE",{});var N=s(_);u=i(N,"Module"),N.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(c,f){g(c,p,f),e(p,v),e(p,_),e(_,u),e(p,T)},d(c){c&&t(p)}}}function dc($){let p,v,_,u,T;return u=new sn({props:{code:`from transformers import ImageGPTFeatureExtractor, ImageGPTForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=a("p"),v=r("Examples:"),_=l(),b(u.$$.fragment)},l(c){p=n(c,"P",{});var f=s(p);v=i(f,"Examples:"),f.forEach(t),_=d(c),y(u.$$.fragment,c)},m(c,f){g(c,p,f),e(p,v),g(c,_,f),I(u,c,f),T=!0},p:nn,i(c){T||(w(u.$$.fragment,c),T=!0)},o(c){P(u.$$.fragment,c),T=!1},d(c){c&&t(p),c&&t(_),k(u,c)}}}function cc($){let p,v,_,u,T,c,f,N,rn,fa,se,fe,Vt,Ne,ln,Ut,dn,_a,_e,cn,Se,mn,pn,Ta,Pt,hn,va,kt,Jt,gn,ba,Te,ol,ya,$t,un,Ia,L,fn,Le,_n,Tn,We,vn,bn,Re,yn,In,wa,Gt,wn,Pa,G,He,Pn,Be,kn,$n,Gn,Ve,xn,xt,En,Cn,Mn,Ue,Fn,Et,qn,zn,jn,Je,Dn,Qt,An,On,Nn,Qe,Sn,Ct,Ln,Wn,Rn,Xt,Hn,ka,ve,Kt,x,Yt,Zt,Bn,Vn,eo,to,Un,Jn,oo,ao,Qn,Xn,no,so,Kn,Yn,ro,io,Zn,es,lo,co,ts,os,E,C,mo,as,ns,po,ss,rs,ho,is,ls,go,ds,cs,uo,ms,ps,fo,hs,gs,M,_o,us,fs,To,_s,Ts,vo,vs,bs,bo,ys,Is,yo,ws,Ps,Io,ks,$s,F,wo,Gs,xs,Po,Es,Cs,ko,Ms,Fs,$o,qs,zs,Go,js,Ds,xo,As,Os,q,Eo,Ns,Ss,Co,Ls,Ws,Mo,Rs,Hs,Fo,Bs,Vs,qo,Us,Js,zo,Qs,Xs,z,jo,Ks,Ys,Do,Zs,er,Ao,tr,or,Oo,ar,nr,No,sr,rr,So,ir,lr,j,Lo,dr,cr,Wo,mr,pr,Ro,hr,gr,Ho,ur,fr,Bo,_r,Tr,Vo,vr,$a,re,be,Uo,Xe,br,Jo,yr,Ga,S,Ke,Ir,ee,wr,Mt,Pr,kr,Qo,$r,Gr,Ye,xr,Er,Cr,ie,Mr,Ft,Fr,qr,qt,zr,jr,Dr,ye,xa,le,Ie,Xo,Ze,Ar,Ko,Or,Ea,te,et,Nr,Yo,Sr,Lr,we,tt,Wr,Zo,Rr,Ca,de,Pe,ea,ot,Hr,ta,Br,Ma,D,at,Vr,oa,Ur,Jr,nt,Qr,zt,Xr,Kr,Yr,st,Zr,rt,ei,ti,oi,W,it,ai,ce,ni,jt,si,ri,aa,ii,li,di,ke,ci,$e,Fa,me,Ge,na,lt,mi,sa,pi,qa,A,dt,hi,ra,gi,ui,ct,fi,Dt,_i,Ti,vi,mt,bi,pt,yi,Ii,wi,R,ht,Pi,pe,ki,At,$i,Gi,ia,xi,Ei,Ci,xe,Mi,Ee,za,he,Ce,la,gt,Fi,da,qi,ja,O,ut,zi,ft,ji,Ot,Di,Ai,Oi,_t,Ni,Nt,Si,Li,Wi,Tt,Ri,vt,Hi,Bi,Vi,H,bt,Ui,ge,Ji,St,Qi,Xi,ca,Ki,Yi,Zi,Me,el,Fe,Da;return c=new wt({}),Ne=new wt({}),Xe=new wt({}),Ke=new ue({props:{name:"class transformers.ImageGPTConfig",anchor:"transformers.ImageGPTConfig",parameters:[{name:"vocab_size",val:" = 513"},{name:"n_positions",val:" = 1024"},{name:"n_embd",val:" = 512"},{name:"n_layer",val:" = 24"},{name:"n_head",val:" = 8"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'quick_gelu'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"scale_attn_weights",val:" = True"},{name:"use_cache",val:" = True"},{name:"tie_word_embeddings",val:" = False"},{name:"scale_attn_by_inverse_layer_idx",val:" = False"},{name:"reorder_and_upcast_attn",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ImageGPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
dot-product/softmax to float() when training with mixed precision.`,name:"reorder_and_upcast_attn"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/imagegpt/configuration_imagegpt.py#L37"}}),ye=new an({props:{anchor:"transformers.ImageGPTConfig.example",$$slots:{default:[ac]},$$scope:{ctx:$}}}),Ze=new wt({}),et=new ue({props:{name:"class transformers.models.imagegpt.image_processing_imagegpt.ImageGPTImageProcessor",anchor:"transformers.models.imagegpt.image_processing_imagegpt.ImageGPTImageProcessor",parameters:[{name:"clusters",val:": typing.Optional[numpy.ndarray] = None"},{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:": bool = True"},{name:"do_color_quantize",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.models.imagegpt.image_processing_imagegpt.ImageGPTImageProcessor.clusters",description:`<strong>clusters</strong> (<code>np.ndarray</code>, <em>optional</em>) &#x2014;
The color clusters to use, as a <code>np.ndarray</code> of shape <code>(n_clusters, 3)</code> when color quantizing. Can be
overriden by <code>clusters</code> in <code>preprocess</code>.`,name:"clusters"},{anchor:"transformers.models.imagegpt.image_processing_imagegpt.ImageGPTImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s dimensions to <code>(size[&quot;height&quot;], size[&quot;width&quot;])</code>. Can be overridden by
<code>do_resize</code> in <code>preprocess</code>.`,name:"do_resize"},{anchor:"transformers.models.imagegpt.image_processing_imagegpt.ImageGPTImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;height&quot; -- 256, &quot;width&quot;: 256}</code>):
Size of the image after resizing. Can be overridden by <code>size</code> in <code>preprocess</code>.`,name:"size"},{anchor:"transformers.models.imagegpt.image_processing_imagegpt.ImageGPTImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BICUBIC</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by <code>resample</code> in <code>preprocess</code>.`,name:"resample"},{anchor:"transformers.models.imagegpt.image_processing_imagegpt.ImageGPTImageProcessor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize the image pixel value to between [-1, 1]. Can be overridden by <code>do_normalize</code> in
<code>preprocess</code>.`,name:"do_normalize"},{anchor:"transformers.models.imagegpt.image_processing_imagegpt.ImageGPTImageProcessor.do_color_quantize",description:`<strong>do_color_quantize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to color quantize the image. Can be overridden by <code>do_color_quantize</code> in <code>preprocess</code>.`,name:"do_color_quantize"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/imagegpt/image_processing_imagegpt.py#L52"}}),tt=new ue({props:{name:"__call__",anchor:"transformers.models.imagegpt.image_processing_imagegpt.ImageGPTImageProcessor.__call__",parameters:[{name:"images",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/image_processing_utils.py#L52"}}),ot=new wt({}),at=new ue({props:{name:"class transformers.ImageGPTModel",anchor:"transformers.ImageGPTModel",parameters:[{name:"config",val:": ImageGPTConfig"}],parametersDescription:[{anchor:"transformers.ImageGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTConfig">ImageGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/imagegpt/modeling_imagegpt.py#L617"}}),it=new ue({props:{name:"forward",anchor:"transformers.ImageGPTModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:": typing.Any"}],parametersDescription:[{anchor:"transformers.ImageGPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/imagegpt#transformers.models.imagegpt.image_processing_imagegpt.ImageGPTImageProcessor">ImageGPTFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">ImageGPTFeatureExtractor.<strong>call</strong>()</a> for
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
`}}),ke=new tl({props:{$$slots:{default:[nc]},$$scope:{ctx:$}}}),$e=new an({props:{anchor:"transformers.ImageGPTModel.forward.example",$$slots:{default:[sc]},$$scope:{ctx:$}}}),lt=new wt({}),dt=new ue({props:{name:"class transformers.ImageGPTForCausalImageModeling",anchor:"transformers.ImageGPTForCausalImageModeling",parameters:[{name:"config",val:": ImageGPTConfig"}],parametersDescription:[{anchor:"transformers.ImageGPTForCausalImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTConfig">ImageGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/imagegpt/modeling_imagegpt.py#L897"}}),ht=new ue({props:{name:"forward",anchor:"transformers.ImageGPTForCausalImageModeling.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:": typing.Any"}],parametersDescription:[{anchor:"transformers.ImageGPTForCausalImageModeling.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/imagegpt#transformers.models.imagegpt.image_processing_imagegpt.ImageGPTImageProcessor">ImageGPTFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">ImageGPTFeatureExtractor.<strong>call</strong>()</a> for
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
`}}),xe=new tl({props:{$$slots:{default:[rc]},$$scope:{ctx:$}}}),Ee=new an({props:{anchor:"transformers.ImageGPTForCausalImageModeling.forward.example",$$slots:{default:[ic]},$$scope:{ctx:$}}}),gt=new wt({}),ut=new ue({props:{name:"class transformers.ImageGPTForImageClassification",anchor:"transformers.ImageGPTForImageClassification",parameters:[{name:"config",val:": ImageGPTConfig"}],parametersDescription:[{anchor:"transformers.ImageGPTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTConfig">ImageGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/imagegpt/modeling_imagegpt.py#L1086"}}),bt=new ue({props:{name:"forward",anchor:"transformers.ImageGPTForImageClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:": typing.Any"}],parametersDescription:[{anchor:"transformers.ImageGPTForImageClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/imagegpt#transformers.models.imagegpt.image_processing_imagegpt.ImageGPTImageProcessor">ImageGPTFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">ImageGPTFeatureExtractor.<strong>call</strong>()</a> for
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
`}}),Me=new tl({props:{$$slots:{default:[lc]},$$scope:{ctx:$}}}),Fe=new an({props:{anchor:"transformers.ImageGPTForImageClassification.forward.example",$$slots:{default:[dc]},$$scope:{ctx:$}}}),{c(){p=a("meta"),v=l(),_=a("h1"),u=a("a"),T=a("span"),b(c.$$.fragment),f=l(),N=a("span"),rn=r("ImageGPT"),fa=l(),se=a("h2"),fe=a("a"),Vt=a("span"),b(Ne.$$.fragment),ln=l(),Ut=a("span"),dn=r("Overview"),_a=l(),_e=a("p"),cn=r("The ImageGPT model was proposed in "),Se=a("a"),mn=r("Generative Pretraining from Pixels"),pn=r(` by Mark
Chen, Alec Radford, Rewon Child, Jeffrey Wu, Heewoo Jun, David Luan, Ilya Sutskever. ImageGPT (iGPT) is a GPT-2-like
model trained to predict the next pixel value, allowing for both unconditional and conditional image generation.`),Ta=l(),Pt=a("p"),hn=r("The abstract from the paper is the following:"),va=l(),kt=a("p"),Jt=a("em"),gn=r(`Inspired by progress in unsupervised representation learning for natural language, we examine whether similar models
can learn useful representations for images. We train a sequence Transformer to auto-regressively predict pixels,
without incorporating knowledge of the 2D input structure. Despite training on low-resolution ImageNet without labels,
we find that a GPT-2 scale model learns strong image representations as measured by linear probing, fine-tuning, and
low-data classification. On CIFAR-10, we achieve 96.3% accuracy with a linear probe, outperforming a supervised Wide
ResNet, and 99.0% accuracy with full fine-tuning, matching the top supervised pre-trained models. We are also
competitive with self-supervised benchmarks on ImageNet when substituting pixels for a VQVAE encoding, achieving 69.0%
top-1 accuracy on a linear probe of our features.`),ba=l(),Te=a("img"),ya=l(),$t=a("small"),un=r("Summary of the approach. Taken from the [original paper](https://cdn.openai.com/papers/Generative_Pretraining_from_Pixels_V2.pdf)."),Ia=l(),L=a("p"),fn=r("This model was contributed by "),Le=a("a"),_n=r("nielsr"),Tn=r(", based on "),We=a("a"),vn=r("this issue"),bn=r(`. The original code can be found
`),Re=a("a"),yn=r("here"),In=r("."),wa=l(),Gt=a("p"),wn=r("Tips:"),Pa=l(),G=a("ul"),He=a("li"),Pn=r(`Demo notebooks for ImageGPT can be found
`),Be=a("a"),kn=r("here"),$n=r("."),Gn=l(),Ve=a("li"),xn=r("ImageGPT is almost exactly the same as "),xt=a("a"),En=r("GPT-2"),Cn=r(`, with the exception that a different activation
function is used (namely \u201Cquick gelu\u201D), and the layer normalization layers don\u2019t mean center the inputs. ImageGPT
also doesn\u2019t have tied input- and output embeddings.`),Mn=l(),Ue=a("li"),Fn=r(`As the time- and memory requirements of the attention mechanism of Transformers scales quadratically in the sequence
length, the authors pre-trained ImageGPT on smaller input resolutions, such as 32x32 and 64x64. However, feeding a
sequence of 32x32x3=3072 tokens from 0..255 into a Transformer is still prohibitively large. Therefore, the authors
applied k-means clustering to the (R,G,B) pixel values with k=512. This way, we only have a 32*32 = 1024-long
sequence, but now of integers in the range 0..511. So we are shrinking the sequence length at the cost of a bigger
embedding matrix. In other words, the vocabulary size of ImageGPT is 512, + 1 for a special \u201Cstart of sentence\u201D (SOS)
token, used at the beginning of every sequence. One can use `),Et=a("a"),qn=r("ImageGPTFeatureExtractor"),zn=r(` to prepare
images for the model.`),jn=l(),Je=a("li"),Dn=r(`Despite being pre-trained entirely unsupervised (i.e. without the use of any labels), ImageGPT produces fairly
performant image features useful for downstream tasks, such as image classification. The authors showed that the
features in the middle of the network are the most performant, and can be used as-is to train a linear model (such as
a sklearn logistic regression model for example). This is also referred to as \u201Clinear probing\u201D. Features can be
easily obtained by first forwarding the image through the model, then specifying `),Qt=a("code"),An=r("output_hidden_states=True"),On=r(`, and
then average-pool the hidden states at whatever layer you like.`),Nn=l(),Qe=a("li"),Sn=r(`Alternatively, one can further fine-tune the entire model on a downstream dataset, similar to BERT. For this, you can
use `),Ct=a("a"),Ln=r("ImageGPTForImageClassification"),Wn=r("."),Rn=l(),Xt=a("li"),Hn=r(`ImageGPT comes in different sizes: there\u2019s ImageGPT-small, ImageGPT-medium and ImageGPT-large. The authors did also
train an XL variant, which they didn\u2019t release. The differences in size are summarized in the following table:`),ka=l(),ve=a("table"),Kt=a("thead"),x=a("tr"),Yt=a("th"),Zt=a("strong"),Bn=r("Model variant"),Vn=l(),eo=a("th"),to=a("strong"),Un=r("Depths"),Jn=l(),oo=a("th"),ao=a("strong"),Qn=r("Hidden sizes"),Xn=l(),no=a("th"),so=a("strong"),Kn=r("Decoder hidden size"),Yn=l(),ro=a("th"),io=a("strong"),Zn=r("Params (M)"),es=l(),lo=a("th"),co=a("strong"),ts=r("ImageNet-1k Top 1"),os=l(),E=a("tbody"),C=a("tr"),mo=a("td"),as=r("MiT-b0"),ns=l(),po=a("td"),ss=r("[2, 2, 2, 2]"),rs=l(),ho=a("td"),is=r("[32, 64, 160, 256]"),ls=l(),go=a("td"),ds=r("256"),cs=l(),uo=a("td"),ms=r("3.7"),ps=l(),fo=a("td"),hs=r("70.5"),gs=l(),M=a("tr"),_o=a("td"),us=r("MiT-b1"),fs=l(),To=a("td"),_s=r("[2, 2, 2, 2]"),Ts=l(),vo=a("td"),vs=r("[64, 128, 320, 512]"),bs=l(),bo=a("td"),ys=r("256"),Is=l(),yo=a("td"),ws=r("14.0"),Ps=l(),Io=a("td"),ks=r("78.7"),$s=l(),F=a("tr"),wo=a("td"),Gs=r("MiT-b2"),xs=l(),Po=a("td"),Es=r("[3, 4, 6, 3]"),Cs=l(),ko=a("td"),Ms=r("[64, 128, 320, 512]"),Fs=l(),$o=a("td"),qs=r("768"),zs=l(),Go=a("td"),js=r("25.4"),Ds=l(),xo=a("td"),As=r("81.6"),Os=l(),q=a("tr"),Eo=a("td"),Ns=r("MiT-b3"),Ss=l(),Co=a("td"),Ls=r("[3, 4, 18, 3]"),Ws=l(),Mo=a("td"),Rs=r("[64, 128, 320, 512]"),Hs=l(),Fo=a("td"),Bs=r("768"),Vs=l(),qo=a("td"),Us=r("45.2"),Js=l(),zo=a("td"),Qs=r("83.1"),Xs=l(),z=a("tr"),jo=a("td"),Ks=r("MiT-b4"),Ys=l(),Do=a("td"),Zs=r("[3, 8, 27, 3]"),er=l(),Ao=a("td"),tr=r("[64, 128, 320, 512]"),or=l(),Oo=a("td"),ar=r("768"),nr=l(),No=a("td"),sr=r("62.6"),rr=l(),So=a("td"),ir=r("83.6"),lr=l(),j=a("tr"),Lo=a("td"),dr=r("MiT-b5"),cr=l(),Wo=a("td"),mr=r("[3, 6, 40, 3]"),pr=l(),Ro=a("td"),hr=r("[64, 128, 320, 512]"),gr=l(),Ho=a("td"),ur=r("768"),fr=l(),Bo=a("td"),_r=r("82.0"),Tr=l(),Vo=a("td"),vr=r("83.8"),$a=l(),re=a("h2"),be=a("a"),Uo=a("span"),b(Xe.$$.fragment),br=l(),Jo=a("span"),yr=r("ImageGPTConfig"),Ga=l(),S=a("div"),b(Ke.$$.fragment),Ir=l(),ee=a("p"),wr=r("This is the configuration class to store the configuration of a "),Mt=a("a"),Pr=r("ImageGPTModel"),kr=r(" or a "),Qo=a("code"),$r=r("TFImageGPTModel"),Gr=r(`. It is
used to instantiate a GPT-2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ImageGPT
`),Ye=a("a"),xr=r("openai/imagegpt-small"),Er=r(" architecture."),Cr=l(),ie=a("p"),Mr=r("Configuration objects inherit from "),Ft=a("a"),Fr=r("PretrainedConfig"),qr=r(` and can be used to control the model outputs. Read the
documentation from `),qt=a("a"),zr=r("PretrainedConfig"),jr=r(" for more information."),Dr=l(),b(ye.$$.fragment),xa=l(),le=a("h2"),Ie=a("a"),Xo=a("span"),b(Ze.$$.fragment),Ar=l(),Ko=a("span"),Or=r("ImageGPTFeatureExtractor"),Ea=l(),te=a("div"),b(et.$$.fragment),Nr=l(),Yo=a("p"),Sr=r(`Constructs a ImageGPT image processor. This image processor can be used to resize images to a smaller resolution
(such as 32x32 or 64x64), normalize them and finally color quantize them to obtain sequences of \u201Cpixel values\u201D
(color clusters).`),Lr=l(),we=a("div"),b(tt.$$.fragment),Wr=l(),Zo=a("p"),Rr=r("Preprocess an image or a batch of images."),Ca=l(),de=a("h2"),Pe=a("a"),ea=a("span"),b(ot.$$.fragment),Hr=l(),ta=a("span"),Br=r("ImageGPTModel"),Ma=l(),D=a("div"),b(at.$$.fragment),Vr=l(),oa=a("p"),Ur=r("The bare ImageGPT Model transformer outputting raw hidden-states without any specific head on top."),Jr=l(),nt=a("p"),Qr=r("This model inherits from "),zt=a("a"),Xr=r("PreTrainedModel"),Kr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yr=l(),st=a("p"),Zr=r("This model is also a PyTorch "),rt=a("a"),ei=r("torch.nn.Module"),ti=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oi=l(),W=a("div"),b(it.$$.fragment),ai=l(),ce=a("p"),ni=r("The "),jt=a("a"),si=r("ImageGPTModel"),ri=r(" forward method, overrides the "),aa=a("code"),ii=r("__call__"),li=r(" special method."),di=l(),b(ke.$$.fragment),ci=l(),b($e.$$.fragment),Fa=l(),me=a("h2"),Ge=a("a"),na=a("span"),b(lt.$$.fragment),mi=l(),sa=a("span"),pi=r("ImageGPTForCausalImageModeling"),qa=l(),A=a("div"),b(dt.$$.fragment),hi=l(),ra=a("p"),gi=r(`The ImageGPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),ui=l(),ct=a("p"),fi=r("This model inherits from "),Dt=a("a"),_i=r("PreTrainedModel"),Ti=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vi=l(),mt=a("p"),bi=r("This model is also a PyTorch "),pt=a("a"),yi=r("torch.nn.Module"),Ii=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wi=l(),R=a("div"),b(ht.$$.fragment),Pi=l(),pe=a("p"),ki=r("The "),At=a("a"),$i=r("ImageGPTForCausalImageModeling"),Gi=r(" forward method, overrides the "),ia=a("code"),xi=r("__call__"),Ei=r(" special method."),Ci=l(),b(xe.$$.fragment),Mi=l(),b(Ee.$$.fragment),za=l(),he=a("h2"),Ce=a("a"),la=a("span"),b(gt.$$.fragment),Fi=l(),da=a("span"),qi=r("ImageGPTForImageClassification"),ja=l(),O=a("div"),b(ut.$$.fragment),zi=l(),ft=a("p"),ji=r(`The ImageGPT Model transformer with an image classification head on top (linear layer).
`),Ot=a("a"),Di=r("ImageGPTForImageClassification"),Ai=r(" average-pools the hidden states in order to do the classification."),Oi=l(),_t=a("p"),Ni=r("This model inherits from "),Nt=a("a"),Si=r("PreTrainedModel"),Li=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wi=l(),Tt=a("p"),Ri=r("This model is also a PyTorch "),vt=a("a"),Hi=r("torch.nn.Module"),Bi=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vi=l(),H=a("div"),b(bt.$$.fragment),Ui=l(),ge=a("p"),Ji=r("The "),St=a("a"),Qi=r("ImageGPTForImageClassification"),Xi=r(" forward method, overrides the "),ca=a("code"),Ki=r("__call__"),Yi=r(" special method."),Zi=l(),b(Me.$$.fragment),el=l(),b(Fe.$$.fragment),this.h()},l(o){const h=ec('[data-svelte="svelte-1phssyn"]',document.head);p=n(h,"META",{name:!0,content:!0}),h.forEach(t),v=d(o),_=n(o,"H1",{class:!0});var yt=s(_);u=n(yt,"A",{id:!0,class:!0,href:!0});var ma=s(u);T=n(ma,"SPAN",{});var pa=s(T);y(c.$$.fragment,pa),pa.forEach(t),ma.forEach(t),f=d(yt),N=n(yt,"SPAN",{});var ha=s(N);rn=i(ha,"ImageGPT"),ha.forEach(t),yt.forEach(t),fa=d(o),se=n(o,"H2",{class:!0});var It=s(se);fe=n(It,"A",{id:!0,class:!0,href:!0});var ga=s(fe);Vt=n(ga,"SPAN",{});var ua=s(Vt);y(Ne.$$.fragment,ua),ua.forEach(t),ga.forEach(t),ln=d(It),Ut=n(It,"SPAN",{});var al=s(Ut);dn=i(al,"Overview"),al.forEach(t),It.forEach(t),_a=d(o),_e=n(o,"P",{});var Aa=s(_e);cn=i(Aa,"The ImageGPT model was proposed in "),Se=n(Aa,"A",{href:!0,rel:!0});var nl=s(Se);mn=i(nl,"Generative Pretraining from Pixels"),nl.forEach(t),pn=i(Aa,` by Mark
Chen, Alec Radford, Rewon Child, Jeffrey Wu, Heewoo Jun, David Luan, Ilya Sutskever. ImageGPT (iGPT) is a GPT-2-like
model trained to predict the next pixel value, allowing for both unconditional and conditional image generation.`),Aa.forEach(t),Ta=d(o),Pt=n(o,"P",{});var sl=s(Pt);hn=i(sl,"The abstract from the paper is the following:"),sl.forEach(t),va=d(o),kt=n(o,"P",{});var rl=s(kt);Jt=n(rl,"EM",{});var il=s(Jt);gn=i(il,`Inspired by progress in unsupervised representation learning for natural language, we examine whether similar models
can learn useful representations for images. We train a sequence Transformer to auto-regressively predict pixels,
without incorporating knowledge of the 2D input structure. Despite training on low-resolution ImageNet without labels,
we find that a GPT-2 scale model learns strong image representations as measured by linear probing, fine-tuning, and
low-data classification. On CIFAR-10, we achieve 96.3% accuracy with a linear probe, outperforming a supervised Wide
ResNet, and 99.0% accuracy with full fine-tuning, matching the top supervised pre-trained models. We are also
competitive with self-supervised benchmarks on ImageNet when substituting pixels for a VQVAE encoding, achieving 69.0%
top-1 accuracy on a linear probe of our features.`),il.forEach(t),rl.forEach(t),ba=d(o),Te=n(o,"IMG",{src:!0,alt:!0,width:!0}),ya=d(o),$t=n(o,"SMALL",{});var ll=s($t);un=i(ll,"Summary of the approach. Taken from the [original paper](https://cdn.openai.com/papers/Generative_Pretraining_from_Pixels_V2.pdf)."),ll.forEach(t),Ia=d(o),L=n(o,"P",{});var qe=s(L);fn=i(qe,"This model was contributed by "),Le=n(qe,"A",{href:!0,rel:!0});var dl=s(Le);_n=i(dl,"nielsr"),dl.forEach(t),Tn=i(qe,", based on "),We=n(qe,"A",{href:!0,rel:!0});var cl=s(We);vn=i(cl,"this issue"),cl.forEach(t),bn=i(qe,`. The original code can be found
`),Re=n(qe,"A",{href:!0,rel:!0});var ml=s(Re);yn=i(ml,"here"),ml.forEach(t),In=i(qe,"."),qe.forEach(t),wa=d(o),Gt=n(o,"P",{});var pl=s(Gt);wn=i(pl,"Tips:"),pl.forEach(t),Pa=d(o),G=n(o,"UL",{});var B=s(G);He=n(B,"LI",{});var Oa=s(He);Pn=i(Oa,`Demo notebooks for ImageGPT can be found
`),Be=n(Oa,"A",{href:!0,rel:!0});var hl=s(Be);kn=i(hl,"here"),hl.forEach(t),$n=i(Oa,"."),Oa.forEach(t),Gn=d(B),Ve=n(B,"LI",{});var Na=s(Ve);xn=i(Na,"ImageGPT is almost exactly the same as "),xt=n(Na,"A",{href:!0});var gl=s(xt);En=i(gl,"GPT-2"),gl.forEach(t),Cn=i(Na,`, with the exception that a different activation
function is used (namely \u201Cquick gelu\u201D), and the layer normalization layers don\u2019t mean center the inputs. ImageGPT
also doesn\u2019t have tied input- and output embeddings.`),Na.forEach(t),Mn=d(B),Ue=n(B,"LI",{});var Sa=s(Ue);Fn=i(Sa,`As the time- and memory requirements of the attention mechanism of Transformers scales quadratically in the sequence
length, the authors pre-trained ImageGPT on smaller input resolutions, such as 32x32 and 64x64. However, feeding a
sequence of 32x32x3=3072 tokens from 0..255 into a Transformer is still prohibitively large. Therefore, the authors
applied k-means clustering to the (R,G,B) pixel values with k=512. This way, we only have a 32*32 = 1024-long
sequence, but now of integers in the range 0..511. So we are shrinking the sequence length at the cost of a bigger
embedding matrix. In other words, the vocabulary size of ImageGPT is 512, + 1 for a special \u201Cstart of sentence\u201D (SOS)
token, used at the beginning of every sequence. One can use `),Et=n(Sa,"A",{href:!0});var ul=s(Et);qn=i(ul,"ImageGPTFeatureExtractor"),ul.forEach(t),zn=i(Sa,` to prepare
images for the model.`),Sa.forEach(t),jn=d(B),Je=n(B,"LI",{});var La=s(Je);Dn=i(La,`Despite being pre-trained entirely unsupervised (i.e. without the use of any labels), ImageGPT produces fairly
performant image features useful for downstream tasks, such as image classification. The authors showed that the
features in the middle of the network are the most performant, and can be used as-is to train a linear model (such as
a sklearn logistic regression model for example). This is also referred to as \u201Clinear probing\u201D. Features can be
easily obtained by first forwarding the image through the model, then specifying `),Qt=n(La,"CODE",{});var fl=s(Qt);An=i(fl,"output_hidden_states=True"),fl.forEach(t),On=i(La,`, and
then average-pool the hidden states at whatever layer you like.`),La.forEach(t),Nn=d(B),Qe=n(B,"LI",{});var Wa=s(Qe);Sn=i(Wa,`Alternatively, one can further fine-tune the entire model on a downstream dataset, similar to BERT. For this, you can
use `),Ct=n(Wa,"A",{href:!0});var _l=s(Ct);Ln=i(_l,"ImageGPTForImageClassification"),_l.forEach(t),Wn=i(Wa,"."),Wa.forEach(t),Rn=d(B),Xt=n(B,"LI",{});var Tl=s(Xt);Hn=i(Tl,`ImageGPT comes in different sizes: there\u2019s ImageGPT-small, ImageGPT-medium and ImageGPT-large. The authors did also
train an XL variant, which they didn\u2019t release. The differences in size are summarized in the following table:`),Tl.forEach(t),B.forEach(t),ka=d(o),ve=n(o,"TABLE",{});var Ra=s(ve);Kt=n(Ra,"THEAD",{});var vl=s(Kt);x=n(vl,"TR",{});var V=s(x);Yt=n(V,"TH",{});var bl=s(Yt);Zt=n(bl,"STRONG",{});var yl=s(Zt);Bn=i(yl,"Model variant"),yl.forEach(t),bl.forEach(t),Vn=d(V),eo=n(V,"TH",{});var Il=s(eo);to=n(Il,"STRONG",{});var wl=s(to);Un=i(wl,"Depths"),wl.forEach(t),Il.forEach(t),Jn=d(V),oo=n(V,"TH",{});var Pl=s(oo);ao=n(Pl,"STRONG",{});var kl=s(ao);Qn=i(kl,"Hidden sizes"),kl.forEach(t),Pl.forEach(t),Xn=d(V),no=n(V,"TH",{});var $l=s(no);so=n($l,"STRONG",{});var Gl=s(so);Kn=i(Gl,"Decoder hidden size"),Gl.forEach(t),$l.forEach(t),Yn=d(V),ro=n(V,"TH",{});var xl=s(ro);io=n(xl,"STRONG",{});var El=s(io);Zn=i(El,"Params (M)"),El.forEach(t),xl.forEach(t),es=d(V),lo=n(V,"TH",{});var Cl=s(lo);co=n(Cl,"STRONG",{});var Ml=s(co);ts=i(Ml,"ImageNet-1k Top 1"),Ml.forEach(t),Cl.forEach(t),V.forEach(t),vl.forEach(t),os=d(Ra),E=n(Ra,"TBODY",{});var U=s(E);C=n(U,"TR",{});var J=s(C);mo=n(J,"TD",{});var Fl=s(mo);as=i(Fl,"MiT-b0"),Fl.forEach(t),ns=d(J),po=n(J,"TD",{});var ql=s(po);ss=i(ql,"[2, 2, 2, 2]"),ql.forEach(t),rs=d(J),ho=n(J,"TD",{});var zl=s(ho);is=i(zl,"[32, 64, 160, 256]"),zl.forEach(t),ls=d(J),go=n(J,"TD",{});var jl=s(go);ds=i(jl,"256"),jl.forEach(t),cs=d(J),uo=n(J,"TD",{});var Dl=s(uo);ms=i(Dl,"3.7"),Dl.forEach(t),ps=d(J),fo=n(J,"TD",{});var Al=s(fo);hs=i(Al,"70.5"),Al.forEach(t),J.forEach(t),gs=d(U),M=n(U,"TR",{});var Q=s(M);_o=n(Q,"TD",{});var Ol=s(_o);us=i(Ol,"MiT-b1"),Ol.forEach(t),fs=d(Q),To=n(Q,"TD",{});var Nl=s(To);_s=i(Nl,"[2, 2, 2, 2]"),Nl.forEach(t),Ts=d(Q),vo=n(Q,"TD",{});var Sl=s(vo);vs=i(Sl,"[64, 128, 320, 512]"),Sl.forEach(t),bs=d(Q),bo=n(Q,"TD",{});var Ll=s(bo);ys=i(Ll,"256"),Ll.forEach(t),Is=d(Q),yo=n(Q,"TD",{});var Wl=s(yo);ws=i(Wl,"14.0"),Wl.forEach(t),Ps=d(Q),Io=n(Q,"TD",{});var Rl=s(Io);ks=i(Rl,"78.7"),Rl.forEach(t),Q.forEach(t),$s=d(U),F=n(U,"TR",{});var X=s(F);wo=n(X,"TD",{});var Hl=s(wo);Gs=i(Hl,"MiT-b2"),Hl.forEach(t),xs=d(X),Po=n(X,"TD",{});var Bl=s(Po);Es=i(Bl,"[3, 4, 6, 3]"),Bl.forEach(t),Cs=d(X),ko=n(X,"TD",{});var Vl=s(ko);Ms=i(Vl,"[64, 128, 320, 512]"),Vl.forEach(t),Fs=d(X),$o=n(X,"TD",{});var Ul=s($o);qs=i(Ul,"768"),Ul.forEach(t),zs=d(X),Go=n(X,"TD",{});var Jl=s(Go);js=i(Jl,"25.4"),Jl.forEach(t),Ds=d(X),xo=n(X,"TD",{});var Ql=s(xo);As=i(Ql,"81.6"),Ql.forEach(t),X.forEach(t),Os=d(U),q=n(U,"TR",{});var K=s(q);Eo=n(K,"TD",{});var Xl=s(Eo);Ns=i(Xl,"MiT-b3"),Xl.forEach(t),Ss=d(K),Co=n(K,"TD",{});var Kl=s(Co);Ls=i(Kl,"[3, 4, 18, 3]"),Kl.forEach(t),Ws=d(K),Mo=n(K,"TD",{});var Yl=s(Mo);Rs=i(Yl,"[64, 128, 320, 512]"),Yl.forEach(t),Hs=d(K),Fo=n(K,"TD",{});var Zl=s(Fo);Bs=i(Zl,"768"),Zl.forEach(t),Vs=d(K),qo=n(K,"TD",{});var ed=s(qo);Us=i(ed,"45.2"),ed.forEach(t),Js=d(K),zo=n(K,"TD",{});var td=s(zo);Qs=i(td,"83.1"),td.forEach(t),K.forEach(t),Xs=d(U),z=n(U,"TR",{});var Y=s(z);jo=n(Y,"TD",{});var od=s(jo);Ks=i(od,"MiT-b4"),od.forEach(t),Ys=d(Y),Do=n(Y,"TD",{});var ad=s(Do);Zs=i(ad,"[3, 8, 27, 3]"),ad.forEach(t),er=d(Y),Ao=n(Y,"TD",{});var nd=s(Ao);tr=i(nd,"[64, 128, 320, 512]"),nd.forEach(t),or=d(Y),Oo=n(Y,"TD",{});var sd=s(Oo);ar=i(sd,"768"),sd.forEach(t),nr=d(Y),No=n(Y,"TD",{});var rd=s(No);sr=i(rd,"62.6"),rd.forEach(t),rr=d(Y),So=n(Y,"TD",{});var id=s(So);ir=i(id,"83.6"),id.forEach(t),Y.forEach(t),lr=d(U),j=n(U,"TR",{});var Z=s(j);Lo=n(Z,"TD",{});var ld=s(Lo);dr=i(ld,"MiT-b5"),ld.forEach(t),cr=d(Z),Wo=n(Z,"TD",{});var dd=s(Wo);mr=i(dd,"[3, 6, 40, 3]"),dd.forEach(t),pr=d(Z),Ro=n(Z,"TD",{});var cd=s(Ro);hr=i(cd,"[64, 128, 320, 512]"),cd.forEach(t),gr=d(Z),Ho=n(Z,"TD",{});var md=s(Ho);ur=i(md,"768"),md.forEach(t),fr=d(Z),Bo=n(Z,"TD",{});var pd=s(Bo);_r=i(pd,"82.0"),pd.forEach(t),Tr=d(Z),Vo=n(Z,"TD",{});var hd=s(Vo);vr=i(hd,"83.8"),hd.forEach(t),Z.forEach(t),U.forEach(t),Ra.forEach(t),$a=d(o),re=n(o,"H2",{class:!0});var Ha=s(re);be=n(Ha,"A",{id:!0,class:!0,href:!0});var gd=s(be);Uo=n(gd,"SPAN",{});var ud=s(Uo);y(Xe.$$.fragment,ud),ud.forEach(t),gd.forEach(t),br=d(Ha),Jo=n(Ha,"SPAN",{});var fd=s(Jo);yr=i(fd,"ImageGPTConfig"),fd.forEach(t),Ha.forEach(t),Ga=d(o),S=n(o,"DIV",{class:!0});var ze=s(S);y(Ke.$$.fragment,ze),Ir=d(ze),ee=n(ze,"P",{});var je=s(ee);wr=i(je,"This is the configuration class to store the configuration of a "),Mt=n(je,"A",{href:!0});var _d=s(Mt);Pr=i(_d,"ImageGPTModel"),_d.forEach(t),kr=i(je," or a "),Qo=n(je,"CODE",{});var Td=s(Qo);$r=i(Td,"TFImageGPTModel"),Td.forEach(t),Gr=i(je,`. It is
used to instantiate a GPT-2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ImageGPT
`),Ye=n(je,"A",{href:!0,rel:!0});var vd=s(Ye);xr=i(vd,"openai/imagegpt-small"),vd.forEach(t),Er=i(je," architecture."),je.forEach(t),Cr=d(ze),ie=n(ze,"P",{});var Lt=s(ie);Mr=i(Lt,"Configuration objects inherit from "),Ft=n(Lt,"A",{href:!0});var bd=s(Ft);Fr=i(bd,"PretrainedConfig"),bd.forEach(t),qr=i(Lt,` and can be used to control the model outputs. Read the
documentation from `),qt=n(Lt,"A",{href:!0});var yd=s(qt);zr=i(yd,"PretrainedConfig"),yd.forEach(t),jr=i(Lt," for more information."),Lt.forEach(t),Dr=d(ze),y(ye.$$.fragment,ze),ze.forEach(t),xa=d(o),le=n(o,"H2",{class:!0});var Ba=s(le);Ie=n(Ba,"A",{id:!0,class:!0,href:!0});var Id=s(Ie);Xo=n(Id,"SPAN",{});var wd=s(Xo);y(Ze.$$.fragment,wd),wd.forEach(t),Id.forEach(t),Ar=d(Ba),Ko=n(Ba,"SPAN",{});var Pd=s(Ko);Or=i(Pd,"ImageGPTFeatureExtractor"),Pd.forEach(t),Ba.forEach(t),Ea=d(o),te=n(o,"DIV",{class:!0});var Wt=s(te);y(et.$$.fragment,Wt),Nr=d(Wt),Yo=n(Wt,"P",{});var kd=s(Yo);Sr=i(kd,`Constructs a ImageGPT image processor. This image processor can be used to resize images to a smaller resolution
(such as 32x32 or 64x64), normalize them and finally color quantize them to obtain sequences of \u201Cpixel values\u201D
(color clusters).`),kd.forEach(t),Lr=d(Wt),we=n(Wt,"DIV",{class:!0});var Va=s(we);y(tt.$$.fragment,Va),Wr=d(Va),Zo=n(Va,"P",{});var $d=s(Zo);Rr=i($d,"Preprocess an image or a batch of images."),$d.forEach(t),Va.forEach(t),Wt.forEach(t),Ca=d(o),de=n(o,"H2",{class:!0});var Ua=s(de);Pe=n(Ua,"A",{id:!0,class:!0,href:!0});var Gd=s(Pe);ea=n(Gd,"SPAN",{});var xd=s(ea);y(ot.$$.fragment,xd),xd.forEach(t),Gd.forEach(t),Hr=d(Ua),ta=n(Ua,"SPAN",{});var Ed=s(ta);Br=i(Ed,"ImageGPTModel"),Ed.forEach(t),Ua.forEach(t),Ma=d(o),D=n(o,"DIV",{class:!0});var oe=s(D);y(at.$$.fragment,oe),Vr=d(oe),oa=n(oe,"P",{});var Cd=s(oa);Ur=i(Cd,"The bare ImageGPT Model transformer outputting raw hidden-states without any specific head on top."),Cd.forEach(t),Jr=d(oe),nt=n(oe,"P",{});var Ja=s(nt);Qr=i(Ja,"This model inherits from "),zt=n(Ja,"A",{href:!0});var Md=s(zt);Xr=i(Md,"PreTrainedModel"),Md.forEach(t),Kr=i(Ja,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ja.forEach(t),Yr=d(oe),st=n(oe,"P",{});var Qa=s(st);Zr=i(Qa,"This model is also a PyTorch "),rt=n(Qa,"A",{href:!0,rel:!0});var Fd=s(rt);ei=i(Fd,"torch.nn.Module"),Fd.forEach(t),ti=i(Qa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qa.forEach(t),oi=d(oe),W=n(oe,"DIV",{class:!0});var De=s(W);y(it.$$.fragment,De),ai=d(De),ce=n(De,"P",{});var Rt=s(ce);ni=i(Rt,"The "),jt=n(Rt,"A",{href:!0});var qd=s(jt);si=i(qd,"ImageGPTModel"),qd.forEach(t),ri=i(Rt," forward method, overrides the "),aa=n(Rt,"CODE",{});var zd=s(aa);ii=i(zd,"__call__"),zd.forEach(t),li=i(Rt," special method."),Rt.forEach(t),di=d(De),y(ke.$$.fragment,De),ci=d(De),y($e.$$.fragment,De),De.forEach(t),oe.forEach(t),Fa=d(o),me=n(o,"H2",{class:!0});var Xa=s(me);Ge=n(Xa,"A",{id:!0,class:!0,href:!0});var jd=s(Ge);na=n(jd,"SPAN",{});var Dd=s(na);y(lt.$$.fragment,Dd),Dd.forEach(t),jd.forEach(t),mi=d(Xa),sa=n(Xa,"SPAN",{});var Ad=s(sa);pi=i(Ad,"ImageGPTForCausalImageModeling"),Ad.forEach(t),Xa.forEach(t),qa=d(o),A=n(o,"DIV",{class:!0});var ae=s(A);y(dt.$$.fragment,ae),hi=d(ae),ra=n(ae,"P",{});var Od=s(ra);gi=i(Od,`The ImageGPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Od.forEach(t),ui=d(ae),ct=n(ae,"P",{});var Ka=s(ct);fi=i(Ka,"This model inherits from "),Dt=n(Ka,"A",{href:!0});var Nd=s(Dt);_i=i(Nd,"PreTrainedModel"),Nd.forEach(t),Ti=i(Ka,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ka.forEach(t),vi=d(ae),mt=n(ae,"P",{});var Ya=s(mt);bi=i(Ya,"This model is also a PyTorch "),pt=n(Ya,"A",{href:!0,rel:!0});var Sd=s(pt);yi=i(Sd,"torch.nn.Module"),Sd.forEach(t),Ii=i(Ya,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ya.forEach(t),wi=d(ae),R=n(ae,"DIV",{class:!0});var Ae=s(R);y(ht.$$.fragment,Ae),Pi=d(Ae),pe=n(Ae,"P",{});var Ht=s(pe);ki=i(Ht,"The "),At=n(Ht,"A",{href:!0});var Ld=s(At);$i=i(Ld,"ImageGPTForCausalImageModeling"),Ld.forEach(t),Gi=i(Ht," forward method, overrides the "),ia=n(Ht,"CODE",{});var Wd=s(ia);xi=i(Wd,"__call__"),Wd.forEach(t),Ei=i(Ht," special method."),Ht.forEach(t),Ci=d(Ae),y(xe.$$.fragment,Ae),Mi=d(Ae),y(Ee.$$.fragment,Ae),Ae.forEach(t),ae.forEach(t),za=d(o),he=n(o,"H2",{class:!0});var Za=s(he);Ce=n(Za,"A",{id:!0,class:!0,href:!0});var Rd=s(Ce);la=n(Rd,"SPAN",{});var Hd=s(la);y(gt.$$.fragment,Hd),Hd.forEach(t),Rd.forEach(t),Fi=d(Za),da=n(Za,"SPAN",{});var Bd=s(da);qi=i(Bd,"ImageGPTForImageClassification"),Bd.forEach(t),Za.forEach(t),ja=d(o),O=n(o,"DIV",{class:!0});var ne=s(O);y(ut.$$.fragment,ne),zi=d(ne),ft=n(ne,"P",{});var en=s(ft);ji=i(en,`The ImageGPT Model transformer with an image classification head on top (linear layer).
`),Ot=n(en,"A",{href:!0});var Vd=s(Ot);Di=i(Vd,"ImageGPTForImageClassification"),Vd.forEach(t),Ai=i(en," average-pools the hidden states in order to do the classification."),en.forEach(t),Oi=d(ne),_t=n(ne,"P",{});var tn=s(_t);Ni=i(tn,"This model inherits from "),Nt=n(tn,"A",{href:!0});var Ud=s(Nt);Si=i(Ud,"PreTrainedModel"),Ud.forEach(t),Li=i(tn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tn.forEach(t),Wi=d(ne),Tt=n(ne,"P",{});var on=s(Tt);Ri=i(on,"This model is also a PyTorch "),vt=n(on,"A",{href:!0,rel:!0});var Jd=s(vt);Hi=i(Jd,"torch.nn.Module"),Jd.forEach(t),Bi=i(on,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),on.forEach(t),Vi=d(ne),H=n(ne,"DIV",{class:!0});var Oe=s(H);y(bt.$$.fragment,Oe),Ui=d(Oe),ge=n(Oe,"P",{});var Bt=s(ge);Ji=i(Bt,"The "),St=n(Bt,"A",{href:!0});var Qd=s(St);Qi=i(Qd,"ImageGPTForImageClassification"),Qd.forEach(t),Xi=i(Bt," forward method, overrides the "),ca=n(Bt,"CODE",{});var Xd=s(ca);Ki=i(Xd,"__call__"),Xd.forEach(t),Yi=i(Bt," special method."),Bt.forEach(t),Zi=d(Oe),y(Me.$$.fragment,Oe),el=d(Oe),y(Fe.$$.fragment,Oe),Oe.forEach(t),ne.forEach(t),this.h()},h(){m(p,"name","hf:doc:metadata"),m(p,"content",JSON.stringify(mc)),m(u,"id","imagegpt"),m(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(u,"href","#imagegpt"),m(_,"class","relative group"),m(fe,"id","overview"),m(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(fe,"href","#overview"),m(se,"class","relative group"),m(Se,"href","https://openai.com/blog/image-gpt"),m(Se,"rel","nofollow"),tc(Te.src,ol="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/imagegpt_architecture.png")||m(Te,"src",ol),m(Te,"alt","drawing"),m(Te,"width","600"),m(Le,"href","https://huggingface.co/nielsr"),m(Le,"rel","nofollow"),m(We,"href","https://github.com/openai/image-gpt/issues/7"),m(We,"rel","nofollow"),m(Re,"href","https://github.com/openai/image-gpt"),m(Re,"rel","nofollow"),m(Be,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/ImageGPT"),m(Be,"rel","nofollow"),m(xt,"href","gpt2"),m(Et,"href","/docs/transformers/main/en/model_doc/imagegpt#transformers.models.imagegpt.image_processing_imagegpt.ImageGPTImageProcessor"),m(Ct,"href","/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTForImageClassification"),m(be,"id","transformers.ImageGPTConfig"),m(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(be,"href","#transformers.ImageGPTConfig"),m(re,"class","relative group"),m(Mt,"href","/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTModel"),m(Ye,"href","https://huggingface.co/openai/imagegpt-small"),m(Ye,"rel","nofollow"),m(Ft,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(qt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ie,"id","transformers.models.imagegpt.image_processing_imagegpt.ImageGPTImageProcessor"),m(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ie,"href","#transformers.models.imagegpt.image_processing_imagegpt.ImageGPTImageProcessor"),m(le,"class","relative group"),m(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Pe,"id","transformers.ImageGPTModel"),m(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Pe,"href","#transformers.ImageGPTModel"),m(de,"class","relative group"),m(zt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(rt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(rt,"rel","nofollow"),m(jt,"href","/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTModel"),m(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ge,"id","transformers.ImageGPTForCausalImageModeling"),m(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ge,"href","#transformers.ImageGPTForCausalImageModeling"),m(me,"class","relative group"),m(Dt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(pt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(pt,"rel","nofollow"),m(At,"href","/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTForCausalImageModeling"),m(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ce,"id","transformers.ImageGPTForImageClassification"),m(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ce,"href","#transformers.ImageGPTForImageClassification"),m(he,"class","relative group"),m(Ot,"href","/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTForImageClassification"),m(Nt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(vt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(vt,"rel","nofollow"),m(St,"href","/docs/transformers/main/en/model_doc/imagegpt#transformers.ImageGPTForImageClassification"),m(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,h){e(document.head,p),g(o,v,h),g(o,_,h),e(_,u),e(u,T),I(c,T,null),e(_,f),e(_,N),e(N,rn),g(o,fa,h),g(o,se,h),e(se,fe),e(fe,Vt),I(Ne,Vt,null),e(se,ln),e(se,Ut),e(Ut,dn),g(o,_a,h),g(o,_e,h),e(_e,cn),e(_e,Se),e(Se,mn),e(_e,pn),g(o,Ta,h),g(o,Pt,h),e(Pt,hn),g(o,va,h),g(o,kt,h),e(kt,Jt),e(Jt,gn),g(o,ba,h),g(o,Te,h),g(o,ya,h),g(o,$t,h),e($t,un),g(o,Ia,h),g(o,L,h),e(L,fn),e(L,Le),e(Le,_n),e(L,Tn),e(L,We),e(We,vn),e(L,bn),e(L,Re),e(Re,yn),e(L,In),g(o,wa,h),g(o,Gt,h),e(Gt,wn),g(o,Pa,h),g(o,G,h),e(G,He),e(He,Pn),e(He,Be),e(Be,kn),e(He,$n),e(G,Gn),e(G,Ve),e(Ve,xn),e(Ve,xt),e(xt,En),e(Ve,Cn),e(G,Mn),e(G,Ue),e(Ue,Fn),e(Ue,Et),e(Et,qn),e(Ue,zn),e(G,jn),e(G,Je),e(Je,Dn),e(Je,Qt),e(Qt,An),e(Je,On),e(G,Nn),e(G,Qe),e(Qe,Sn),e(Qe,Ct),e(Ct,Ln),e(Qe,Wn),e(G,Rn),e(G,Xt),e(Xt,Hn),g(o,ka,h),g(o,ve,h),e(ve,Kt),e(Kt,x),e(x,Yt),e(Yt,Zt),e(Zt,Bn),e(x,Vn),e(x,eo),e(eo,to),e(to,Un),e(x,Jn),e(x,oo),e(oo,ao),e(ao,Qn),e(x,Xn),e(x,no),e(no,so),e(so,Kn),e(x,Yn),e(x,ro),e(ro,io),e(io,Zn),e(x,es),e(x,lo),e(lo,co),e(co,ts),e(ve,os),e(ve,E),e(E,C),e(C,mo),e(mo,as),e(C,ns),e(C,po),e(po,ss),e(C,rs),e(C,ho),e(ho,is),e(C,ls),e(C,go),e(go,ds),e(C,cs),e(C,uo),e(uo,ms),e(C,ps),e(C,fo),e(fo,hs),e(E,gs),e(E,M),e(M,_o),e(_o,us),e(M,fs),e(M,To),e(To,_s),e(M,Ts),e(M,vo),e(vo,vs),e(M,bs),e(M,bo),e(bo,ys),e(M,Is),e(M,yo),e(yo,ws),e(M,Ps),e(M,Io),e(Io,ks),e(E,$s),e(E,F),e(F,wo),e(wo,Gs),e(F,xs),e(F,Po),e(Po,Es),e(F,Cs),e(F,ko),e(ko,Ms),e(F,Fs),e(F,$o),e($o,qs),e(F,zs),e(F,Go),e(Go,js),e(F,Ds),e(F,xo),e(xo,As),e(E,Os),e(E,q),e(q,Eo),e(Eo,Ns),e(q,Ss),e(q,Co),e(Co,Ls),e(q,Ws),e(q,Mo),e(Mo,Rs),e(q,Hs),e(q,Fo),e(Fo,Bs),e(q,Vs),e(q,qo),e(qo,Us),e(q,Js),e(q,zo),e(zo,Qs),e(E,Xs),e(E,z),e(z,jo),e(jo,Ks),e(z,Ys),e(z,Do),e(Do,Zs),e(z,er),e(z,Ao),e(Ao,tr),e(z,or),e(z,Oo),e(Oo,ar),e(z,nr),e(z,No),e(No,sr),e(z,rr),e(z,So),e(So,ir),e(E,lr),e(E,j),e(j,Lo),e(Lo,dr),e(j,cr),e(j,Wo),e(Wo,mr),e(j,pr),e(j,Ro),e(Ro,hr),e(j,gr),e(j,Ho),e(Ho,ur),e(j,fr),e(j,Bo),e(Bo,_r),e(j,Tr),e(j,Vo),e(Vo,vr),g(o,$a,h),g(o,re,h),e(re,be),e(be,Uo),I(Xe,Uo,null),e(re,br),e(re,Jo),e(Jo,yr),g(o,Ga,h),g(o,S,h),I(Ke,S,null),e(S,Ir),e(S,ee),e(ee,wr),e(ee,Mt),e(Mt,Pr),e(ee,kr),e(ee,Qo),e(Qo,$r),e(ee,Gr),e(ee,Ye),e(Ye,xr),e(ee,Er),e(S,Cr),e(S,ie),e(ie,Mr),e(ie,Ft),e(Ft,Fr),e(ie,qr),e(ie,qt),e(qt,zr),e(ie,jr),e(S,Dr),I(ye,S,null),g(o,xa,h),g(o,le,h),e(le,Ie),e(Ie,Xo),I(Ze,Xo,null),e(le,Ar),e(le,Ko),e(Ko,Or),g(o,Ea,h),g(o,te,h),I(et,te,null),e(te,Nr),e(te,Yo),e(Yo,Sr),e(te,Lr),e(te,we),I(tt,we,null),e(we,Wr),e(we,Zo),e(Zo,Rr),g(o,Ca,h),g(o,de,h),e(de,Pe),e(Pe,ea),I(ot,ea,null),e(de,Hr),e(de,ta),e(ta,Br),g(o,Ma,h),g(o,D,h),I(at,D,null),e(D,Vr),e(D,oa),e(oa,Ur),e(D,Jr),e(D,nt),e(nt,Qr),e(nt,zt),e(zt,Xr),e(nt,Kr),e(D,Yr),e(D,st),e(st,Zr),e(st,rt),e(rt,ei),e(st,ti),e(D,oi),e(D,W),I(it,W,null),e(W,ai),e(W,ce),e(ce,ni),e(ce,jt),e(jt,si),e(ce,ri),e(ce,aa),e(aa,ii),e(ce,li),e(W,di),I(ke,W,null),e(W,ci),I($e,W,null),g(o,Fa,h),g(o,me,h),e(me,Ge),e(Ge,na),I(lt,na,null),e(me,mi),e(me,sa),e(sa,pi),g(o,qa,h),g(o,A,h),I(dt,A,null),e(A,hi),e(A,ra),e(ra,gi),e(A,ui),e(A,ct),e(ct,fi),e(ct,Dt),e(Dt,_i),e(ct,Ti),e(A,vi),e(A,mt),e(mt,bi),e(mt,pt),e(pt,yi),e(mt,Ii),e(A,wi),e(A,R),I(ht,R,null),e(R,Pi),e(R,pe),e(pe,ki),e(pe,At),e(At,$i),e(pe,Gi),e(pe,ia),e(ia,xi),e(pe,Ei),e(R,Ci),I(xe,R,null),e(R,Mi),I(Ee,R,null),g(o,za,h),g(o,he,h),e(he,Ce),e(Ce,la),I(gt,la,null),e(he,Fi),e(he,da),e(da,qi),g(o,ja,h),g(o,O,h),I(ut,O,null),e(O,zi),e(O,ft),e(ft,ji),e(ft,Ot),e(Ot,Di),e(ft,Ai),e(O,Oi),e(O,_t),e(_t,Ni),e(_t,Nt),e(Nt,Si),e(_t,Li),e(O,Wi),e(O,Tt),e(Tt,Ri),e(Tt,vt),e(vt,Hi),e(Tt,Bi),e(O,Vi),e(O,H),I(bt,H,null),e(H,Ui),e(H,ge),e(ge,Ji),e(ge,St),e(St,Qi),e(ge,Xi),e(ge,ca),e(ca,Ki),e(ge,Yi),e(H,Zi),I(Me,H,null),e(H,el),I(Fe,H,null),Da=!0},p(o,[h]){const yt={};h&2&&(yt.$$scope={dirty:h,ctx:o}),ye.$set(yt);const ma={};h&2&&(ma.$$scope={dirty:h,ctx:o}),ke.$set(ma);const pa={};h&2&&(pa.$$scope={dirty:h,ctx:o}),$e.$set(pa);const ha={};h&2&&(ha.$$scope={dirty:h,ctx:o}),xe.$set(ha);const It={};h&2&&(It.$$scope={dirty:h,ctx:o}),Ee.$set(It);const ga={};h&2&&(ga.$$scope={dirty:h,ctx:o}),Me.$set(ga);const ua={};h&2&&(ua.$$scope={dirty:h,ctx:o}),Fe.$set(ua)},i(o){Da||(w(c.$$.fragment,o),w(Ne.$$.fragment,o),w(Xe.$$.fragment,o),w(Ke.$$.fragment,o),w(ye.$$.fragment,o),w(Ze.$$.fragment,o),w(et.$$.fragment,o),w(tt.$$.fragment,o),w(ot.$$.fragment,o),w(at.$$.fragment,o),w(it.$$.fragment,o),w(ke.$$.fragment,o),w($e.$$.fragment,o),w(lt.$$.fragment,o),w(dt.$$.fragment,o),w(ht.$$.fragment,o),w(xe.$$.fragment,o),w(Ee.$$.fragment,o),w(gt.$$.fragment,o),w(ut.$$.fragment,o),w(bt.$$.fragment,o),w(Me.$$.fragment,o),w(Fe.$$.fragment,o),Da=!0)},o(o){P(c.$$.fragment,o),P(Ne.$$.fragment,o),P(Xe.$$.fragment,o),P(Ke.$$.fragment,o),P(ye.$$.fragment,o),P(Ze.$$.fragment,o),P(et.$$.fragment,o),P(tt.$$.fragment,o),P(ot.$$.fragment,o),P(at.$$.fragment,o),P(it.$$.fragment,o),P(ke.$$.fragment,o),P($e.$$.fragment,o),P(lt.$$.fragment,o),P(dt.$$.fragment,o),P(ht.$$.fragment,o),P(xe.$$.fragment,o),P(Ee.$$.fragment,o),P(gt.$$.fragment,o),P(ut.$$.fragment,o),P(bt.$$.fragment,o),P(Me.$$.fragment,o),P(Fe.$$.fragment,o),Da=!1},d(o){t(p),o&&t(v),o&&t(_),k(c),o&&t(fa),o&&t(se),k(Ne),o&&t(_a),o&&t(_e),o&&t(Ta),o&&t(Pt),o&&t(va),o&&t(kt),o&&t(ba),o&&t(Te),o&&t(ya),o&&t($t),o&&t(Ia),o&&t(L),o&&t(wa),o&&t(Gt),o&&t(Pa),o&&t(G),o&&t(ka),o&&t(ve),o&&t($a),o&&t(re),k(Xe),o&&t(Ga),o&&t(S),k(Ke),k(ye),o&&t(xa),o&&t(le),k(Ze),o&&t(Ea),o&&t(te),k(et),k(tt),o&&t(Ca),o&&t(de),k(ot),o&&t(Ma),o&&t(D),k(at),k(it),k(ke),k($e),o&&t(Fa),o&&t(me),k(lt),o&&t(qa),o&&t(A),k(dt),k(ht),k(xe),k(Ee),o&&t(za),o&&t(he),k(gt),o&&t(ja),o&&t(O),k(ut),k(bt),k(Me),k(Fe)}}}const mc={local:"imagegpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.ImageGPTConfig",title:"ImageGPTConfig"},{local:"transformers.models.imagegpt.image_processing_imagegpt.ImageGPTImageProcessor",title:"ImageGPTFeatureExtractor"},{local:"transformers.ImageGPTModel",title:"ImageGPTModel"},{local:"transformers.ImageGPTForCausalImageModeling",title:"ImageGPTForCausalImageModeling"},{local:"transformers.ImageGPTForImageClassification",title:"ImageGPTForImageClassification"}],title:"ImageGPT"};function pc($){return oc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vc extends Kd{constructor(p){super();Yd(this,p,pc,cc,Zd,{})}}export{vc as default,mc as metadata};
