import{S as sn,i as ln,s as dn,e as r,k as h,w as b,t as i,M as cn,c as a,d as o,m as f,a as s,x as w,h as l,b as c,N as pn,G as e,g as _,y as P,q as $,o as y,B as D,v as mn,L as yo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Po}from"../../chunks/Tip-hf-doc-builder.js";import{D as O}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Do}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ze}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as $o}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function hn(x){let d,T,u,p,v;return p=new Do({props:{code:`from transformers import DPTModel, DPTConfig

# Initializing a DPT dpt-large style configuration
configuration = DPTConfig()

# Initializing a model from the dpt-large style configuration
model = DPTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DPTModel, DPTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DPT dpt-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DPTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the dpt-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DPTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),T=i("Example:"),u=h(),b(p.$$.fragment)},l(n){d=a(n,"P",{});var g=s(d);T=l(g,"Example:"),g.forEach(o),u=f(n),w(p.$$.fragment,n)},m(n,g){_(n,d,g),e(d,T),_(n,u,g),P(p,n,g),v=!0},p:yo,i(n){v||($(p.$$.fragment,n),v=!0)},o(n){y(p.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(u),D(p,n)}}}function fn(x){let d,T;return{c(){d=r("p"),T=i(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(u){d=a(u,"P",{});var p=s(d);T=l(p,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),p.forEach(o)},m(u,p){_(u,d,p),e(d,T)},d(u){u&&o(d)}}}function un(x){let d,T,u,p,v;return{c(){d=r("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),p=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var g=s(d);T=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(g,"CODE",{});var k=s(u);p=l(k,"Module"),k.forEach(o),v=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(n,g){_(n,d,g),e(d,T),e(d,u),e(u,p),e(d,v)},d(n){n&&o(d)}}}function gn(x){let d,T,u,p,v;return p=new Do({props:{code:`from transformers import DPTFeatureExtractor, DPTModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = DPTFeatureExtractor.from_pretrained("Intel/dpt-large")
model = DPTModel.from_pretrained("Intel/dpt-large")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DPTFeatureExtractor, DPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DPTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;Intel/dpt-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DPTModel.from_pretrained(<span class="hljs-string">&quot;Intel/dpt-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">577</span>, <span class="hljs-number">1024</span>]`}}),{c(){d=r("p"),T=i("Example:"),u=h(),b(p.$$.fragment)},l(n){d=a(n,"P",{});var g=s(d);T=l(g,"Example:"),g.forEach(o),u=f(n),w(p.$$.fragment,n)},m(n,g){_(n,d,g),e(d,T),_(n,u,g),P(p,n,g),v=!0},p:yo,i(n){v||($(p.$$.fragment,n),v=!0)},o(n){y(p.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(u),D(p,n)}}}function _n(x){let d,T,u,p,v;return{c(){d=r("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),p=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var g=s(d);T=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(g,"CODE",{});var k=s(u);p=l(k,"Module"),k.forEach(o),v=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(n,g){_(n,d,g),e(d,T),e(d,u),e(u,p),e(d,v)},d(n){n&&o(d)}}}function vn(x){let d,T,u,p,v;return p=new Do({props:{code:`from transformers import DPTFeatureExtractor, DPTForDepthEstimation
import torch
import numpy as np
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = DPTFeatureExtractor.from_pretrained("Intel/dpt-large")
model = DPTForDepthEstimation.from_pretrained("Intel/dpt-large")

# prepare image for the model
inputs = feature_extractor(images=image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)
    predicted_depth = outputs.predicted_depth

# interpolate to original size
prediction = torch.nn.functional.interpolate(
    predicted_depth.unsqueeze(1),
    size=image.size[::-1],
    mode="bicubic",
    align_corners=False,
)

# visualize the prediction
output = prediction.squeeze().cpu().numpy()
formatted = (output * 255 / np.max(output)).astype("uint8")
depth = Image.fromarray(formatted)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DPTFeatureExtractor, DPTForDepthEstimation
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DPTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;Intel/dpt-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DPTForDepthEstimation.from_pretrained(<span class="hljs-string">&quot;Intel/dpt-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare image for the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)
<span class="hljs-meta">... </span>    predicted_depth = outputs.predicted_depth

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># interpolate to original size</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction = torch.nn.functional.interpolate(
<span class="hljs-meta">... </span>    predicted_depth.unsqueeze(<span class="hljs-number">1</span>),
<span class="hljs-meta">... </span>    size=image.size[::-<span class="hljs-number">1</span>],
<span class="hljs-meta">... </span>    mode=<span class="hljs-string">&quot;bicubic&quot;</span>,
<span class="hljs-meta">... </span>    align_corners=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># visualize the prediction</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>output = prediction.squeeze().cpu().numpy()
<span class="hljs-meta">&gt;&gt;&gt; </span>formatted = (output * <span class="hljs-number">255</span> / np.<span class="hljs-built_in">max</span>(output)).astype(<span class="hljs-string">&quot;uint8&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>depth = Image.fromarray(formatted)`}}),{c(){d=r("p"),T=i("Examples:"),u=h(),b(p.$$.fragment)},l(n){d=a(n,"P",{});var g=s(d);T=l(g,"Examples:"),g.forEach(o),u=f(n),w(p.$$.fragment,n)},m(n,g){_(n,d,g),e(d,T),_(n,u,g),P(p,n,g),v=!0},p:yo,i(n){v||($(p.$$.fragment,n),v=!0)},o(n){y(p.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(u),D(p,n)}}}function Tn(x){let d,T,u,p,v;return{c(){d=r("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),p=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var g=s(d);T=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(g,"CODE",{});var k=s(u);p=l(k,"Module"),k.forEach(o),v=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(n,g){_(n,d,g),e(d,T),e(d,u),e(u,p),e(d,v)},d(n){n&&o(d)}}}function bn(x){let d,T,u,p,v;return p=new Do({props:{code:`from transformers import DPTFeatureExtractor, DPTForSemanticSegmentation
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = DPTFeatureExtractor.from_pretrained("Intel/dpt-large-ade")
model = DPTForSemanticSegmentation.from_pretrained("Intel/dpt-large-ade")

inputs = feature_extractor(images=image, return_tensors="pt")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DPTFeatureExtractor, DPTForSemanticSegmentation
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DPTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;Intel/dpt-large-ade&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DPTForSemanticSegmentation.from_pretrained(<span class="hljs-string">&quot;Intel/dpt-large-ade&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),T=i("Examples:"),u=h(),b(p.$$.fragment)},l(n){d=a(n,"P",{});var g=s(d);T=l(g,"Examples:"),g.forEach(o),u=f(n),w(p.$$.fragment,n)},m(n,g){_(n,d,g),e(d,T),_(n,u,g),P(p,n,g),v=!0},p:yo,i(n){v||($(p.$$.fragment,n),v=!0)},o(n){y(p.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(u),D(p,n)}}}function wn(x){let d,T,u,p,v,n,g,k,xo,Ut,V,Z,Tt,we,Eo,bt,ko,Ht,q,Fo,Pe,jo,zo,Qe,Io,So,Kt,et,Co,Gt,tt,wt,Mo,Yt,Q,_a,Jt,ee,qo,$e,Ao,Lo,Xt,A,No,ye,Oo,Vo,De,Wo,Ro,Zt,W,te,Pt,xe,Bo,$t,Uo,Qt,F,Ee,Ho,R,Ko,ot,Go,Yo,ke,Jo,Xo,Zo,B,Qo,rt,er,tr,at,or,rr,ar,oe,eo,U,re,yt,Fe,nr,Dt,sr,to,E,je,ir,xt,lr,dr,ze,cr,nt,pr,mr,hr,L,Ie,fr,Et,ur,gr,ae,_r,ne,Se,vr,Ce,Tr,st,br,wr,oo,H,se,kt,Me,Pr,Ft,$r,ro,M,qe,yr,Ae,Dr,Le,xr,Er,kr,I,Ne,Fr,K,jr,it,zr,Ir,jt,Sr,Cr,Mr,ie,qr,le,ao,G,de,zt,Oe,Ar,It,Lr,no,j,Ve,Nr,St,Or,Vr,We,Wr,Re,Rr,Br,Ur,S,Be,Hr,Y,Kr,lt,Gr,Yr,Ct,Jr,Xr,Zr,ce,Qr,pe,so,J,me,Mt,Ue,ea,qt,ta,io,z,He,oa,At,ra,aa,Ke,na,Ge,sa,ia,la,C,Ye,da,X,ca,dt,pa,ma,Lt,ha,fa,ua,he,ga,fe,lo;return n=new Ze({}),we=new Ze({}),xe=new Ze({}),Ee=new O({props:{name:"class transformers.DPTConfig",anchor:"transformers.DPTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"image_size",val:" = 384"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"backbone_out_indices",val:" = [2, 5, 8, 11]"},{name:"readout_type",val:" = 'project'"},{name:"reassemble_factors",val:" = [4, 2, 1, 0.5]"},{name:"neck_hidden_sizes",val:" = [96, 192, 384, 768]"},{name:"fusion_hidden_size",val:" = 256"},{name:"head_in_index",val:" = -1"},{name:"use_batch_norm_in_fusion_residual",val:" = False"},{name:"use_auxiliary_head",val:" = True"},{name:"auxiliary_loss_weight",val:" = 0.4"},{name:"semantic_loss_ignore_index",val:" = 255"},{name:"semantic_classifier_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DPTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.DPTConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.DPTConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.DPTConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.DPTConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.DPTConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.DPTConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DPTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DPTConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DPTConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 384) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.DPTConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.DPTConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.DPTConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.DPTConfig.backbone_out_indices",description:`<strong>backbone_out_indices</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[2, 5, 8, 11]</code>) &#x2014;
Indices of the intermediate hidden states to use from backbone.`,name:"backbone_out_indices"},{anchor:"transformers.DPTConfig.readout_type",description:`<strong>readout_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;project&quot;</code>) &#x2014;
The readout type to use when processing the readout token (CLS token) of the intermediate hidden states of
the ViT backbone. Can be one of [<code>&quot;ignore&quot;</code>, <code>&quot;add&quot;</code>, <code>&quot;project&quot;</code>].</p>
<ul>
<li>&#x201C;ignore&#x201D; simply ignores the CLS token.</li>
<li>&#x201C;add&#x201D; passes the information from the CLS token to all other tokens by adding the representations.</li>
<li>&#x201C;project&#x201D; passes information to the other tokens by concatenating the readout to all other tokens before
projecting the
representation to the original feature dimension D using a linear layer followed by a GELU non-linearity.</li>
</ul>`,name:"readout_type"},{anchor:"transformers.DPTConfig.reassemble_factors",description:`<strong>reassemble_factors</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[4, 2, 1, 0.5]</code>) &#x2014;
The up/downsampling factors of the reassemble layers.`,name:"reassemble_factors"},{anchor:"transformers.DPTConfig.neck_hidden_sizes",description:`<strong>neck_hidden_sizes</strong> (<code>List[str]</code>, <em>optional</em>, defaults to [96, 192, 384, 768]) &#x2014;
The hidden sizes to project to for the feature maps of the backbone.`,name:"neck_hidden_sizes"},{anchor:"transformers.DPTConfig.fusion_hidden_size",description:`<strong>fusion_hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The number of channels before fusion.`,name:"fusion_hidden_size"},{anchor:"transformers.DPTConfig.head_in_index",description:`<strong>head_in_index</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The index of the features to use in the heads.`,name:"head_in_index"},{anchor:"transformers.DPTConfig.use_batch_norm_in_fusion_residual",description:`<strong>use_batch_norm_in_fusion_residual</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use batch normalization in the pre-activate residual units of the fusion blocks.`,name:"use_batch_norm_in_fusion_residual"},{anchor:"transformers.DPTConfig.use_auxiliary_head",description:`<strong>use_auxiliary_head</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use an auxiliary head during training.`,name:"use_auxiliary_head"},{anchor:"transformers.DPTConfig.auxiliary_loss_weight",description:`<strong>auxiliary_loss_weight</strong> (<code>float</code>, <em>optional</em>, defaults to 0.4) &#x2014;
Weight of the cross-entropy loss of the auxiliary head.`,name:"auxiliary_loss_weight"},{anchor:"transformers.DPTConfig.semantic_loss_ignore_index",description:`<strong>semantic_loss_ignore_index</strong> (<code>int</code>, <em>optional</em>, defaults to 255) &#x2014;
The index that is ignored by the loss function of the semantic segmentation model.`,name:"semantic_loss_ignore_index"},{anchor:"transformers.DPTConfig.semantic_classifier_dropout",description:`<strong>semantic_classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the semantic classification head.`,name:"semantic_classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/dpt/configuration_dpt.py#L29"}}),oe=new $o({props:{anchor:"transformers.DPTConfig.example",$$slots:{default:[hn]},$$scope:{ctx:x}}}),Fe=new Ze({}),je=new O({props:{name:"class transformers.DPTFeatureExtractor",anchor:"transformers.DPTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 384"},{name:"keep_aspect_ratio",val:" = False"},{name:"ensure_multiple_of",val:" = 1"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DPTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.DPTFeatureExtractor.size",description:`<strong>size</strong> (&#x2018;int&#x2019; or <code>Tuple(int)</code>, <em>optional</em>, defaults to 384) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.DPTFeatureExtractor.ensure_multiple_of",description:`<strong>ensure_multiple_of</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Ensure that the input is resized to a multiple of this value. Only has an effect if <code>do_resize</code> is set to
<code>True</code>.`,name:"ensure_multiple_of"},{anchor:"transformers.DPTFeatureExtractor.keep_aspect_ratio",description:`<strong>keep_aspect_ratio</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to keep the aspect ratio of the input. Only has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"keep_aspect_ratio"},{anchor:"transformers.DPTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.DPTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.DPTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.DPTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/dpt/feature_extraction_dpt.py#L39"}}),Ie=new O({props:{name:"__call__",anchor:"transformers.DPTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DPTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.DPTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.23.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/dpt/feature_extraction_dpt.py#L135",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.23.0/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),ae=new Po({props:{warning:!0,$$slots:{default:[fn]},$$scope:{ctx:x}}}),Se=new O({props:{name:"post_process_semantic_segmentation",anchor:"transformers.DPTFeatureExtractor.post_process_semantic_segmentation",parameters:[{name:"outputs",val:""},{name:"target_sizes",val:": typing.List[typing.Tuple] = None"}],parametersDescription:[{anchor:"transformers.DPTFeatureExtractor.post_process_semantic_segmentation.outputs",description:`<strong>outputs</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/dpt#transformers.DPTForSemanticSegmentation">DPTForSemanticSegmentation</a>) &#x2014;
Raw outputs of the model.`,name:"outputs"},{anchor:"transformers.DPTFeatureExtractor.post_process_semantic_segmentation.target_sizes",description:`<strong>target_sizes</strong> (<code>List[Tuple]</code> of length <code>batch_size</code>, <em>optional</em>) &#x2014;
List of tuples corresponding to the requested final size (height, width) of each prediction. If left to
None, predictions will not be resized.`,name:"target_sizes"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/dpt/feature_extraction_dpt.py#L206",returnDescription:`
<p><code>List[torch.Tensor]</code> of length <code>batch_size</code>, where each item is a semantic
segmentation map of shape (height, width) corresponding to the target_sizes entry (if <code>target_sizes</code> is
specified). Each entry of each <code>torch.Tensor</code> correspond to a semantic class id.</p>
`,returnType:`
<p>semantic_segmentation</p>
`}}),Me=new Ze({}),qe=new O({props:{name:"class transformers.DPTModel",anchor:"transformers.DPTModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.DPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/dpt/modeling_dpt.py#L678"}}),Ne=new O({props:{name:"forward",anchor:"transformers.DPTModel.forward",parameters:[{name:"pixel_values",val:""},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DPTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.23.0/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DPTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/dpt/modeling_dpt.py#L704",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/dpt#transformers.DPTConfig"
>DPTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ie=new Po({props:{$$slots:{default:[un]},$$scope:{ctx:x}}}),le=new $o({props:{anchor:"transformers.DPTModel.forward.example",$$slots:{default:[gn]},$$scope:{ctx:x}}}),Oe=new Ze({}),Ve=new O({props:{name:"class transformers.DPTForDepthEstimation",anchor:"transformers.DPTForDepthEstimation",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DPTForDepthEstimation.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/dpt/modeling_dpt.py#L859"}}),Be=new O({props:{name:"forward",anchor:"transformers.DPTForDepthEstimation.forward",parameters:[{name:"pixel_values",val:""},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DPTForDepthEstimation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.23.0/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DPTForDepthEstimation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DPTForDepthEstimation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DPTForDepthEstimation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DPTForDepthEstimation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DPTForDepthEstimation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth depth estimation maps for computing the loss.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/dpt/modeling_dpt.py#L874",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.DepthEstimatorOutput"
>transformers.modeling_outputs.DepthEstimatorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/dpt#transformers.DPTConfig"
>DPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>predicted_depth</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, height, width)</code>) \u2014 Predicted depth for each pixel.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, num_channels, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.DepthEstimatorOutput"
>transformers.modeling_outputs.DepthEstimatorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ce=new Po({props:{$$slots:{default:[_n]},$$scope:{ctx:x}}}),pe=new $o({props:{anchor:"transformers.DPTForDepthEstimation.forward.example",$$slots:{default:[vn]},$$scope:{ctx:x}}}),Ue=new Ze({}),He=new O({props:{name:"class transformers.DPTForSemanticSegmentation",anchor:"transformers.DPTForSemanticSegmentation",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DPTForSemanticSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/dpt/modeling_dpt.py#L1019"}}),Ye=new O({props:{name:"forward",anchor:"transformers.DPTForSemanticSegmentation.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DPTForSemanticSegmentation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.23.0/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DPTForSemanticSegmentation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DPTForSemanticSegmentation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DPTForSemanticSegmentation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DPTForSemanticSegmentation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DPTForSemanticSegmentation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth semantic segmentation maps for computing the loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code>, a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/dpt/modeling_dpt.py#L1035",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.SemanticSegmenterOutput"
>transformers.modeling_outputs.SemanticSegmenterOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/dpt#transformers.DPTConfig"
>DPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels, logits_height, logits_width)</code>) \u2014 Classification scores for each pixel.</p>
<Tip warning={true}>
<p>The logits returned do not necessarily have the same size as the <code>pixel_values</code> passed as inputs. This is
to avoid doing two interpolations and lose some quality when a user needs to resize the logits to the
original image size as post-processing. You should always check your logits shape and resize as needed.</p>
</Tip>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, patch_size, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.SemanticSegmenterOutput"
>transformers.modeling_outputs.SemanticSegmenterOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),he=new Po({props:{$$slots:{default:[Tn]},$$scope:{ctx:x}}}),fe=new $o({props:{anchor:"transformers.DPTForSemanticSegmentation.forward.example",$$slots:{default:[bn]},$$scope:{ctx:x}}}),{c(){d=r("meta"),T=h(),u=r("h1"),p=r("a"),v=r("span"),b(n.$$.fragment),g=h(),k=r("span"),xo=i("DPT"),Ut=h(),V=r("h2"),Z=r("a"),Tt=r("span"),b(we.$$.fragment),Eo=h(),bt=r("span"),ko=i("Overview"),Ht=h(),q=r("p"),Fo=i("The DPT model was proposed in "),Pe=r("a"),jo=i("Vision Transformers for Dense Prediction"),zo=i(` by Ren\xE9 Ranftl, Alexey Bochkovskiy, Vladlen Koltun.
DPT is a model that leverages the `),Qe=r("a"),Io=i("Vision Transformer (ViT)"),So=i(" as backbone for dense prediction tasks like semantic segmentation and depth estimation."),Kt=h(),et=r("p"),Co=i("The abstract from the paper is the following:"),Gt=h(),tt=r("p"),wt=r("em"),Mo=i("We introduce dense vision transformers, an architecture that leverages vision transformers in place of convolutional networks as a backbone for dense prediction tasks. We assemble tokens from various stages of the vision transformer into image-like representations at various resolutions and progressively combine them into full-resolution predictions using a convolutional decoder. The transformer backbone processes representations at a constant and relatively high resolution and has a global receptive field at every stage. These properties allow the dense vision transformer to provide finer-grained and more globally coherent predictions when compared to fully-convolutional networks. Our experiments show that this architecture yields substantial improvements on dense prediction tasks, especially when a large amount of training data is available. For monocular depth estimation, we observe an improvement of up to 28% in relative performance when compared to a state-of-the-art fully-convolutional network. When applied to semantic segmentation, dense vision transformers set a new state of the art on ADE20K with 49.02% mIoU. We further show that the architecture can be fine-tuned on smaller datasets such as NYUv2, KITTI, and Pascal Context where it also sets the new state of the art."),Yt=h(),Q=r("img"),Jt=h(),ee=r("small"),qo=i("DPT architecture. Taken from the "),$e=r("a"),Ao=i("original paper"),Lo=i("."),Xt=h(),A=r("p"),No=i("This model was contributed by "),ye=r("a"),Oo=i("nielsr"),Vo=i(". The original code can be found "),De=r("a"),Wo=i("here"),Ro=i("."),Zt=h(),W=r("h2"),te=r("a"),Pt=r("span"),b(xe.$$.fragment),Bo=h(),$t=r("span"),Uo=i("DPTConfig"),Qt=h(),F=r("div"),b(Ee.$$.fragment),Ho=h(),R=r("p"),Ko=i("This is the configuration class to store the configuration of a "),ot=r("a"),Go=i("DPTModel"),Yo=i(`. It is used to instantiate an DPT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DPT
`),ke=r("a"),Jo=i("Intel/dpt-large"),Xo=i(" architecture."),Zo=h(),B=r("p"),Qo=i("Configuration objects inherit from "),rt=r("a"),er=i("PretrainedConfig"),tr=i(` and can be used to control the model outputs. Read the
documentation from `),at=r("a"),or=i("PretrainedConfig"),rr=i(" for more information."),ar=h(),b(oe.$$.fragment),eo=h(),U=r("h2"),re=r("a"),yt=r("span"),b(Fe.$$.fragment),nr=h(),Dt=r("span"),sr=i("DPTFeatureExtractor"),to=h(),E=r("div"),b(je.$$.fragment),ir=h(),xt=r("p"),lr=i("Constructs a DPT feature extractor."),dr=h(),ze=r("p"),cr=i("This feature extractor inherits from "),nt=r("a"),pr=i("FeatureExtractionMixin"),mr=i(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),hr=h(),L=r("div"),b(Ie.$$.fragment),fr=h(),Et=r("p"),ur=i("Main method to prepare for the model one or several image(s)."),gr=h(),b(ae.$$.fragment),_r=h(),ne=r("div"),b(Se.$$.fragment),vr=h(),Ce=r("p"),Tr=i("Converts the output of "),st=r("a"),br=i("DPTForSemanticSegmentation"),wr=i(" into semantic segmentation maps. Only supports PyTorch."),oo=h(),H=r("h2"),se=r("a"),kt=r("span"),b(Me.$$.fragment),Pr=h(),Ft=r("span"),$r=i("DPTModel"),ro=h(),M=r("div"),b(qe.$$.fragment),yr=h(),Ae=r("p"),Dr=i(`The bare DPT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Le=r("a"),xr=i("torch.nn.Module"),Er=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kr=h(),I=r("div"),b(Ne.$$.fragment),Fr=h(),K=r("p"),jr=i("The "),it=r("a"),zr=i("DPTModel"),Ir=i(" forward method, overrides the "),jt=r("code"),Sr=i("__call__"),Cr=i(" special method."),Mr=h(),b(ie.$$.fragment),qr=h(),b(le.$$.fragment),ao=h(),G=r("h2"),de=r("a"),zt=r("span"),b(Oe.$$.fragment),Ar=h(),It=r("span"),Lr=i("DPTForDepthEstimation"),no=h(),j=r("div"),b(Ve.$$.fragment),Nr=h(),St=r("p"),Or=i("DPT Model with a depth estimation head on top (consisting of 3 convolutional layers) e.g. for KITTI, NYUv2."),Vr=h(),We=r("p"),Wr=i("This model is a PyTorch "),Re=r("a"),Rr=i("torch.nn.Module"),Br=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ur=h(),S=r("div"),b(Be.$$.fragment),Hr=h(),Y=r("p"),Kr=i("The "),lt=r("a"),Gr=i("DPTForDepthEstimation"),Yr=i(" forward method, overrides the "),Ct=r("code"),Jr=i("__call__"),Xr=i(" special method."),Zr=h(),b(ce.$$.fragment),Qr=h(),b(pe.$$.fragment),so=h(),J=r("h2"),me=r("a"),Mt=r("span"),b(Ue.$$.fragment),ea=h(),qt=r("span"),ta=i("DPTForSemanticSegmentation"),io=h(),z=r("div"),b(He.$$.fragment),oa=h(),At=r("p"),ra=i("DPT Model with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),aa=h(),Ke=r("p"),na=i("This model is a PyTorch "),Ge=r("a"),sa=i("torch.nn.Module"),ia=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),la=h(),C=r("div"),b(Ye.$$.fragment),da=h(),X=r("p"),ca=i("The "),dt=r("a"),pa=i("DPTForSemanticSegmentation"),ma=i(" forward method, overrides the "),Lt=r("code"),ha=i("__call__"),fa=i(" special method."),ua=h(),b(he.$$.fragment),ga=h(),b(fe.$$.fragment),this.h()},l(t){const m=cn('[data-svelte="svelte-1phssyn"]',document.head);d=a(m,"META",{name:!0,content:!0}),m.forEach(o),T=f(t),u=a(t,"H1",{class:!0});var Je=s(u);p=a(Je,"A",{id:!0,class:!0,href:!0});var Nt=s(p);v=a(Nt,"SPAN",{});var Ot=s(v);w(n.$$.fragment,Ot),Ot.forEach(o),Nt.forEach(o),g=f(Je),k=a(Je,"SPAN",{});var Vt=s(k);xo=l(Vt,"DPT"),Vt.forEach(o),Je.forEach(o),Ut=f(t),V=a(t,"H2",{class:!0});var Xe=s(V);Z=a(Xe,"A",{id:!0,class:!0,href:!0});var Wt=s(Z);Tt=a(Wt,"SPAN",{});var Rt=s(Tt);w(we.$$.fragment,Rt),Rt.forEach(o),Wt.forEach(o),Eo=f(Xe),bt=a(Xe,"SPAN",{});var Bt=s(bt);ko=l(Bt,"Overview"),Bt.forEach(o),Xe.forEach(o),Ht=f(t),q=a(t,"P",{});var ct=s(q);Fo=l(ct,"The DPT model was proposed in "),Pe=a(ct,"A",{href:!0,rel:!0});var va=s(Pe);jo=l(va,"Vision Transformers for Dense Prediction"),va.forEach(o),zo=l(ct,` by Ren\xE9 Ranftl, Alexey Bochkovskiy, Vladlen Koltun.
DPT is a model that leverages the `),Qe=a(ct,"A",{href:!0});var Ta=s(Qe);Io=l(Ta,"Vision Transformer (ViT)"),Ta.forEach(o),So=l(ct," as backbone for dense prediction tasks like semantic segmentation and depth estimation."),ct.forEach(o),Kt=f(t),et=a(t,"P",{});var ba=s(et);Co=l(ba,"The abstract from the paper is the following:"),ba.forEach(o),Gt=f(t),tt=a(t,"P",{});var wa=s(tt);wt=a(wa,"EM",{});var Pa=s(wt);Mo=l(Pa,"We introduce dense vision transformers, an architecture that leverages vision transformers in place of convolutional networks as a backbone for dense prediction tasks. We assemble tokens from various stages of the vision transformer into image-like representations at various resolutions and progressively combine them into full-resolution predictions using a convolutional decoder. The transformer backbone processes representations at a constant and relatively high resolution and has a global receptive field at every stage. These properties allow the dense vision transformer to provide finer-grained and more globally coherent predictions when compared to fully-convolutional networks. Our experiments show that this architecture yields substantial improvements on dense prediction tasks, especially when a large amount of training data is available. For monocular depth estimation, we observe an improvement of up to 28% in relative performance when compared to a state-of-the-art fully-convolutional network. When applied to semantic segmentation, dense vision transformers set a new state of the art on ADE20K with 49.02% mIoU. We further show that the architecture can be fine-tuned on smaller datasets such as NYUv2, KITTI, and Pascal Context where it also sets the new state of the art."),Pa.forEach(o),wa.forEach(o),Yt=f(t),Q=a(t,"IMG",{src:!0,alt:!0,width:!0}),Jt=f(t),ee=a(t,"SMALL",{});var co=s(ee);qo=l(co,"DPT architecture. Taken from the "),$e=a(co,"A",{href:!0,target:!0});var $a=s($e);Ao=l($a,"original paper"),$a.forEach(o),Lo=l(co,"."),co.forEach(o),Xt=f(t),A=a(t,"P",{});var pt=s(A);No=l(pt,"This model was contributed by "),ye=a(pt,"A",{href:!0,rel:!0});var ya=s(ye);Oo=l(ya,"nielsr"),ya.forEach(o),Vo=l(pt,". The original code can be found "),De=a(pt,"A",{href:!0,rel:!0});var Da=s(De);Wo=l(Da,"here"),Da.forEach(o),Ro=l(pt,"."),pt.forEach(o),Zt=f(t),W=a(t,"H2",{class:!0});var po=s(W);te=a(po,"A",{id:!0,class:!0,href:!0});var xa=s(te);Pt=a(xa,"SPAN",{});var Ea=s(Pt);w(xe.$$.fragment,Ea),Ea.forEach(o),xa.forEach(o),Bo=f(po),$t=a(po,"SPAN",{});var ka=s($t);Uo=l(ka,"DPTConfig"),ka.forEach(o),po.forEach(o),Qt=f(t),F=a(t,"DIV",{class:!0});var ue=s(F);w(Ee.$$.fragment,ue),Ho=f(ue),R=a(ue,"P",{});var mt=s(R);Ko=l(mt,"This is the configuration class to store the configuration of a "),ot=a(mt,"A",{href:!0});var Fa=s(ot);Go=l(Fa,"DPTModel"),Fa.forEach(o),Yo=l(mt,`. It is used to instantiate an DPT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DPT
`),ke=a(mt,"A",{href:!0,rel:!0});var ja=s(ke);Jo=l(ja,"Intel/dpt-large"),ja.forEach(o),Xo=l(mt," architecture."),mt.forEach(o),Zo=f(ue),B=a(ue,"P",{});var ht=s(B);Qo=l(ht,"Configuration objects inherit from "),rt=a(ht,"A",{href:!0});var za=s(rt);er=l(za,"PretrainedConfig"),za.forEach(o),tr=l(ht,` and can be used to control the model outputs. Read the
documentation from `),at=a(ht,"A",{href:!0});var Ia=s(at);or=l(Ia,"PretrainedConfig"),Ia.forEach(o),rr=l(ht," for more information."),ht.forEach(o),ar=f(ue),w(oe.$$.fragment,ue),ue.forEach(o),eo=f(t),U=a(t,"H2",{class:!0});var mo=s(U);re=a(mo,"A",{id:!0,class:!0,href:!0});var Sa=s(re);yt=a(Sa,"SPAN",{});var Ca=s(yt);w(Fe.$$.fragment,Ca),Ca.forEach(o),Sa.forEach(o),nr=f(mo),Dt=a(mo,"SPAN",{});var Ma=s(Dt);sr=l(Ma,"DPTFeatureExtractor"),Ma.forEach(o),mo.forEach(o),to=f(t),E=a(t,"DIV",{class:!0});var N=s(E);w(je.$$.fragment,N),ir=f(N),xt=a(N,"P",{});var qa=s(xt);lr=l(qa,"Constructs a DPT feature extractor."),qa.forEach(o),dr=f(N),ze=a(N,"P",{});var ho=s(ze);cr=l(ho,"This feature extractor inherits from "),nt=a(ho,"A",{href:!0});var Aa=s(nt);pr=l(Aa,"FeatureExtractionMixin"),Aa.forEach(o),mr=l(ho,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),ho.forEach(o),hr=f(N),L=a(N,"DIV",{class:!0});var ft=s(L);w(Ie.$$.fragment,ft),fr=f(ft),Et=a(ft,"P",{});var La=s(Et);ur=l(La,"Main method to prepare for the model one or several image(s)."),La.forEach(o),gr=f(ft),w(ae.$$.fragment,ft),ft.forEach(o),_r=f(N),ne=a(N,"DIV",{class:!0});var fo=s(ne);w(Se.$$.fragment,fo),vr=f(fo),Ce=a(fo,"P",{});var uo=s(Ce);Tr=l(uo,"Converts the output of "),st=a(uo,"A",{href:!0});var Na=s(st);br=l(Na,"DPTForSemanticSegmentation"),Na.forEach(o),wr=l(uo," into semantic segmentation maps. Only supports PyTorch."),uo.forEach(o),fo.forEach(o),N.forEach(o),oo=f(t),H=a(t,"H2",{class:!0});var go=s(H);se=a(go,"A",{id:!0,class:!0,href:!0});var Oa=s(se);kt=a(Oa,"SPAN",{});var Va=s(kt);w(Me.$$.fragment,Va),Va.forEach(o),Oa.forEach(o),Pr=f(go),Ft=a(go,"SPAN",{});var Wa=s(Ft);$r=l(Wa,"DPTModel"),Wa.forEach(o),go.forEach(o),ro=f(t),M=a(t,"DIV",{class:!0});var ut=s(M);w(qe.$$.fragment,ut),yr=f(ut),Ae=a(ut,"P",{});var _o=s(Ae);Dr=l(_o,`The bare DPT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Le=a(_o,"A",{href:!0,rel:!0});var Ra=s(Le);xr=l(Ra,"torch.nn.Module"),Ra.forEach(o),Er=l(_o,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_o.forEach(o),kr=f(ut),I=a(ut,"DIV",{class:!0});var ge=s(I);w(Ne.$$.fragment,ge),Fr=f(ge),K=a(ge,"P",{});var gt=s(K);jr=l(gt,"The "),it=a(gt,"A",{href:!0});var Ba=s(it);zr=l(Ba,"DPTModel"),Ba.forEach(o),Ir=l(gt," forward method, overrides the "),jt=a(gt,"CODE",{});var Ua=s(jt);Sr=l(Ua,"__call__"),Ua.forEach(o),Cr=l(gt," special method."),gt.forEach(o),Mr=f(ge),w(ie.$$.fragment,ge),qr=f(ge),w(le.$$.fragment,ge),ge.forEach(o),ut.forEach(o),ao=f(t),G=a(t,"H2",{class:!0});var vo=s(G);de=a(vo,"A",{id:!0,class:!0,href:!0});var Ha=s(de);zt=a(Ha,"SPAN",{});var Ka=s(zt);w(Oe.$$.fragment,Ka),Ka.forEach(o),Ha.forEach(o),Ar=f(vo),It=a(vo,"SPAN",{});var Ga=s(It);Lr=l(Ga,"DPTForDepthEstimation"),Ga.forEach(o),vo.forEach(o),no=f(t),j=a(t,"DIV",{class:!0});var _e=s(j);w(Ve.$$.fragment,_e),Nr=f(_e),St=a(_e,"P",{});var Ya=s(St);Or=l(Ya,"DPT Model with a depth estimation head on top (consisting of 3 convolutional layers) e.g. for KITTI, NYUv2."),Ya.forEach(o),Vr=f(_e),We=a(_e,"P",{});var To=s(We);Wr=l(To,"This model is a PyTorch "),Re=a(To,"A",{href:!0,rel:!0});var Ja=s(Re);Rr=l(Ja,"torch.nn.Module"),Ja.forEach(o),Br=l(To,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),To.forEach(o),Ur=f(_e),S=a(_e,"DIV",{class:!0});var ve=s(S);w(Be.$$.fragment,ve),Hr=f(ve),Y=a(ve,"P",{});var _t=s(Y);Kr=l(_t,"The "),lt=a(_t,"A",{href:!0});var Xa=s(lt);Gr=l(Xa,"DPTForDepthEstimation"),Xa.forEach(o),Yr=l(_t," forward method, overrides the "),Ct=a(_t,"CODE",{});var Za=s(Ct);Jr=l(Za,"__call__"),Za.forEach(o),Xr=l(_t," special method."),_t.forEach(o),Zr=f(ve),w(ce.$$.fragment,ve),Qr=f(ve),w(pe.$$.fragment,ve),ve.forEach(o),_e.forEach(o),so=f(t),J=a(t,"H2",{class:!0});var bo=s(J);me=a(bo,"A",{id:!0,class:!0,href:!0});var Qa=s(me);Mt=a(Qa,"SPAN",{});var en=s(Mt);w(Ue.$$.fragment,en),en.forEach(o),Qa.forEach(o),ea=f(bo),qt=a(bo,"SPAN",{});var tn=s(qt);ta=l(tn,"DPTForSemanticSegmentation"),tn.forEach(o),bo.forEach(o),io=f(t),z=a(t,"DIV",{class:!0});var Te=s(z);w(He.$$.fragment,Te),oa=f(Te),At=a(Te,"P",{});var on=s(At);ra=l(on,"DPT Model with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),on.forEach(o),aa=f(Te),Ke=a(Te,"P",{});var wo=s(Ke);na=l(wo,"This model is a PyTorch "),Ge=a(wo,"A",{href:!0,rel:!0});var rn=s(Ge);sa=l(rn,"torch.nn.Module"),rn.forEach(o),ia=l(wo,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wo.forEach(o),la=f(Te),C=a(Te,"DIV",{class:!0});var be=s(C);w(Ye.$$.fragment,be),da=f(be),X=a(be,"P",{});var vt=s(X);ca=l(vt,"The "),dt=a(vt,"A",{href:!0});var an=s(dt);pa=l(an,"DPTForSemanticSegmentation"),an.forEach(o),ma=l(vt," forward method, overrides the "),Lt=a(vt,"CODE",{});var nn=s(Lt);ha=l(nn,"__call__"),nn.forEach(o),fa=l(vt," special method."),vt.forEach(o),ua=f(be),w(he.$$.fragment,be),ga=f(be),w(fe.$$.fragment,be),be.forEach(o),Te.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(Pn)),c(p,"id","dpt"),c(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(p,"href","#dpt"),c(u,"class","relative group"),c(Z,"id","overview"),c(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Z,"href","#overview"),c(V,"class","relative group"),c(Pe,"href","https://arxiv.org/abs/2103.13413"),c(Pe,"rel","nofollow"),c(Qe,"href","vit"),pn(Q.src,_a="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/dpt_architecture.jpg")||c(Q,"src",_a),c(Q,"alt","drawing"),c(Q,"width","600"),c($e,"href","https://arxiv.org/abs/2103.13413"),c($e,"target","_blank"),c(ye,"href","https://huggingface.co/nielsr"),c(ye,"rel","nofollow"),c(De,"href","https://github.com/isl-org/DPT"),c(De,"rel","nofollow"),c(te,"id","transformers.DPTConfig"),c(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(te,"href","#transformers.DPTConfig"),c(W,"class","relative group"),c(ot,"href","/docs/transformers/v4.23.0/en/model_doc/dpt#transformers.DPTModel"),c(ke,"href","https://huggingface.co/Intel/dpt-large"),c(ke,"rel","nofollow"),c(rt,"href","/docs/transformers/v4.23.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(at,"href","/docs/transformers/v4.23.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(re,"id","transformers.DPTFeatureExtractor"),c(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(re,"href","#transformers.DPTFeatureExtractor"),c(U,"class","relative group"),c(nt,"href","/docs/transformers/v4.23.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(st,"href","/docs/transformers/v4.23.0/en/model_doc/dpt#transformers.DPTForSemanticSegmentation"),c(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(se,"id","transformers.DPTModel"),c(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(se,"href","#transformers.DPTModel"),c(H,"class","relative group"),c(Le,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Le,"rel","nofollow"),c(it,"href","/docs/transformers/v4.23.0/en/model_doc/dpt#transformers.DPTModel"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(de,"id","transformers.DPTForDepthEstimation"),c(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(de,"href","#transformers.DPTForDepthEstimation"),c(G,"class","relative group"),c(Re,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Re,"rel","nofollow"),c(lt,"href","/docs/transformers/v4.23.0/en/model_doc/dpt#transformers.DPTForDepthEstimation"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(me,"id","transformers.DPTForSemanticSegmentation"),c(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(me,"href","#transformers.DPTForSemanticSegmentation"),c(J,"class","relative group"),c(Ge,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ge,"rel","nofollow"),c(dt,"href","/docs/transformers/v4.23.0/en/model_doc/dpt#transformers.DPTForSemanticSegmentation"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,m){e(document.head,d),_(t,T,m),_(t,u,m),e(u,p),e(p,v),P(n,v,null),e(u,g),e(u,k),e(k,xo),_(t,Ut,m),_(t,V,m),e(V,Z),e(Z,Tt),P(we,Tt,null),e(V,Eo),e(V,bt),e(bt,ko),_(t,Ht,m),_(t,q,m),e(q,Fo),e(q,Pe),e(Pe,jo),e(q,zo),e(q,Qe),e(Qe,Io),e(q,So),_(t,Kt,m),_(t,et,m),e(et,Co),_(t,Gt,m),_(t,tt,m),e(tt,wt),e(wt,Mo),_(t,Yt,m),_(t,Q,m),_(t,Jt,m),_(t,ee,m),e(ee,qo),e(ee,$e),e($e,Ao),e(ee,Lo),_(t,Xt,m),_(t,A,m),e(A,No),e(A,ye),e(ye,Oo),e(A,Vo),e(A,De),e(De,Wo),e(A,Ro),_(t,Zt,m),_(t,W,m),e(W,te),e(te,Pt),P(xe,Pt,null),e(W,Bo),e(W,$t),e($t,Uo),_(t,Qt,m),_(t,F,m),P(Ee,F,null),e(F,Ho),e(F,R),e(R,Ko),e(R,ot),e(ot,Go),e(R,Yo),e(R,ke),e(ke,Jo),e(R,Xo),e(F,Zo),e(F,B),e(B,Qo),e(B,rt),e(rt,er),e(B,tr),e(B,at),e(at,or),e(B,rr),e(F,ar),P(oe,F,null),_(t,eo,m),_(t,U,m),e(U,re),e(re,yt),P(Fe,yt,null),e(U,nr),e(U,Dt),e(Dt,sr),_(t,to,m),_(t,E,m),P(je,E,null),e(E,ir),e(E,xt),e(xt,lr),e(E,dr),e(E,ze),e(ze,cr),e(ze,nt),e(nt,pr),e(ze,mr),e(E,hr),e(E,L),P(Ie,L,null),e(L,fr),e(L,Et),e(Et,ur),e(L,gr),P(ae,L,null),e(E,_r),e(E,ne),P(Se,ne,null),e(ne,vr),e(ne,Ce),e(Ce,Tr),e(Ce,st),e(st,br),e(Ce,wr),_(t,oo,m),_(t,H,m),e(H,se),e(se,kt),P(Me,kt,null),e(H,Pr),e(H,Ft),e(Ft,$r),_(t,ro,m),_(t,M,m),P(qe,M,null),e(M,yr),e(M,Ae),e(Ae,Dr),e(Ae,Le),e(Le,xr),e(Ae,Er),e(M,kr),e(M,I),P(Ne,I,null),e(I,Fr),e(I,K),e(K,jr),e(K,it),e(it,zr),e(K,Ir),e(K,jt),e(jt,Sr),e(K,Cr),e(I,Mr),P(ie,I,null),e(I,qr),P(le,I,null),_(t,ao,m),_(t,G,m),e(G,de),e(de,zt),P(Oe,zt,null),e(G,Ar),e(G,It),e(It,Lr),_(t,no,m),_(t,j,m),P(Ve,j,null),e(j,Nr),e(j,St),e(St,Or),e(j,Vr),e(j,We),e(We,Wr),e(We,Re),e(Re,Rr),e(We,Br),e(j,Ur),e(j,S),P(Be,S,null),e(S,Hr),e(S,Y),e(Y,Kr),e(Y,lt),e(lt,Gr),e(Y,Yr),e(Y,Ct),e(Ct,Jr),e(Y,Xr),e(S,Zr),P(ce,S,null),e(S,Qr),P(pe,S,null),_(t,so,m),_(t,J,m),e(J,me),e(me,Mt),P(Ue,Mt,null),e(J,ea),e(J,qt),e(qt,ta),_(t,io,m),_(t,z,m),P(He,z,null),e(z,oa),e(z,At),e(At,ra),e(z,aa),e(z,Ke),e(Ke,na),e(Ke,Ge),e(Ge,sa),e(Ke,ia),e(z,la),e(z,C),P(Ye,C,null),e(C,da),e(C,X),e(X,ca),e(X,dt),e(dt,pa),e(X,ma),e(X,Lt),e(Lt,ha),e(X,fa),e(C,ua),P(he,C,null),e(C,ga),P(fe,C,null),lo=!0},p(t,[m]){const Je={};m&2&&(Je.$$scope={dirty:m,ctx:t}),oe.$set(Je);const Nt={};m&2&&(Nt.$$scope={dirty:m,ctx:t}),ae.$set(Nt);const Ot={};m&2&&(Ot.$$scope={dirty:m,ctx:t}),ie.$set(Ot);const Vt={};m&2&&(Vt.$$scope={dirty:m,ctx:t}),le.$set(Vt);const Xe={};m&2&&(Xe.$$scope={dirty:m,ctx:t}),ce.$set(Xe);const Wt={};m&2&&(Wt.$$scope={dirty:m,ctx:t}),pe.$set(Wt);const Rt={};m&2&&(Rt.$$scope={dirty:m,ctx:t}),he.$set(Rt);const Bt={};m&2&&(Bt.$$scope={dirty:m,ctx:t}),fe.$set(Bt)},i(t){lo||($(n.$$.fragment,t),$(we.$$.fragment,t),$(xe.$$.fragment,t),$(Ee.$$.fragment,t),$(oe.$$.fragment,t),$(Fe.$$.fragment,t),$(je.$$.fragment,t),$(Ie.$$.fragment,t),$(ae.$$.fragment,t),$(Se.$$.fragment,t),$(Me.$$.fragment,t),$(qe.$$.fragment,t),$(Ne.$$.fragment,t),$(ie.$$.fragment,t),$(le.$$.fragment,t),$(Oe.$$.fragment,t),$(Ve.$$.fragment,t),$(Be.$$.fragment,t),$(ce.$$.fragment,t),$(pe.$$.fragment,t),$(Ue.$$.fragment,t),$(He.$$.fragment,t),$(Ye.$$.fragment,t),$(he.$$.fragment,t),$(fe.$$.fragment,t),lo=!0)},o(t){y(n.$$.fragment,t),y(we.$$.fragment,t),y(xe.$$.fragment,t),y(Ee.$$.fragment,t),y(oe.$$.fragment,t),y(Fe.$$.fragment,t),y(je.$$.fragment,t),y(Ie.$$.fragment,t),y(ae.$$.fragment,t),y(Se.$$.fragment,t),y(Me.$$.fragment,t),y(qe.$$.fragment,t),y(Ne.$$.fragment,t),y(ie.$$.fragment,t),y(le.$$.fragment,t),y(Oe.$$.fragment,t),y(Ve.$$.fragment,t),y(Be.$$.fragment,t),y(ce.$$.fragment,t),y(pe.$$.fragment,t),y(Ue.$$.fragment,t),y(He.$$.fragment,t),y(Ye.$$.fragment,t),y(he.$$.fragment,t),y(fe.$$.fragment,t),lo=!1},d(t){o(d),t&&o(T),t&&o(u),D(n),t&&o(Ut),t&&o(V),D(we),t&&o(Ht),t&&o(q),t&&o(Kt),t&&o(et),t&&o(Gt),t&&o(tt),t&&o(Yt),t&&o(Q),t&&o(Jt),t&&o(ee),t&&o(Xt),t&&o(A),t&&o(Zt),t&&o(W),D(xe),t&&o(Qt),t&&o(F),D(Ee),D(oe),t&&o(eo),t&&o(U),D(Fe),t&&o(to),t&&o(E),D(je),D(Ie),D(ae),D(Se),t&&o(oo),t&&o(H),D(Me),t&&o(ro),t&&o(M),D(qe),D(Ne),D(ie),D(le),t&&o(ao),t&&o(G),D(Oe),t&&o(no),t&&o(j),D(Ve),D(Be),D(ce),D(pe),t&&o(so),t&&o(J),D(Ue),t&&o(io),t&&o(z),D(He),D(Ye),D(he),D(fe)}}}const Pn={local:"dpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.DPTConfig",title:"DPTConfig"},{local:"transformers.DPTFeatureExtractor",title:"DPTFeatureExtractor"},{local:"transformers.DPTModel",title:"DPTModel"},{local:"transformers.DPTForDepthEstimation",title:"DPTForDepthEstimation"},{local:"transformers.DPTForSemanticSegmentation",title:"DPTForSemanticSegmentation"}],title:"DPT"};function $n(x){return mn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class jn extends sn{constructor(d){super();ln(this,d,$n,wn,dn,{})}}export{jn as default,Pn as metadata};
