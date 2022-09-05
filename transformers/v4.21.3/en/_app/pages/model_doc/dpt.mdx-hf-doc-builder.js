import{S as Ga,i as Ya,s as Ja,e as a,k as h,w as b,t as i,M as Xa,c as n,d as o,m as f,a as s,x as w,h as l,b as c,N as Za,G as e,g as _,y as P,q as $,o as y,B as D,v as Qa,L as vo}from"../../chunks/vendor-hf-doc-builder.js";import{T as go}from"../../chunks/Tip-hf-doc-builder.js";import{D as J}from"../../chunks/Docstring-hf-doc-builder.js";import{C as To}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ye}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as _o}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function en(x){let d,T,u,p,v;return p=new To({props:{code:`from transformers import DPTModel, DPTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),T=i("Example:"),u=h(),b(p.$$.fragment)},l(r){d=n(r,"P",{});var g=s(d);T=l(g,"Example:"),g.forEach(o),u=f(r),w(p.$$.fragment,r)},m(r,g){_(r,d,g),e(d,T),_(r,u,g),P(p,r,g),v=!0},p:vo,i(r){v||($(p.$$.fragment,r),v=!0)},o(r){y(p.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(u),D(p,r)}}}function tn(x){let d,T;return{c(){d=a("p"),T=i(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(u){d=n(u,"P",{});var p=s(d);T=l(p,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),p.forEach(o)},m(u,p){_(u,d,p),e(d,T)},d(u){u&&o(d)}}}function on(x){let d,T,u,p,v;return{c(){d=a("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),p=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=n(r,"P",{});var g=s(d);T=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(g,"CODE",{});var E=s(u);p=l(E,"Module"),E.forEach(o),v=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(r,g){_(r,d,g),e(d,T),e(d,u),e(u,p),e(d,v)},d(r){r&&o(d)}}}function rn(x){let d,T,u,p,v;return p=new To({props:{code:`from transformers import DPTFeatureExtractor, DPTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">577</span>, <span class="hljs-number">1024</span>]`}}),{c(){d=a("p"),T=i("Example:"),u=h(),b(p.$$.fragment)},l(r){d=n(r,"P",{});var g=s(d);T=l(g,"Example:"),g.forEach(o),u=f(r),w(p.$$.fragment,r)},m(r,g){_(r,d,g),e(d,T),_(r,u,g),P(p,r,g),v=!0},p:vo,i(r){v||($(p.$$.fragment,r),v=!0)},o(r){y(p.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(u),D(p,r)}}}function an(x){let d,T,u,p,v;return{c(){d=a("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),p=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=n(r,"P",{});var g=s(d);T=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(g,"CODE",{});var E=s(u);p=l(E,"Module"),E.forEach(o),v=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(r,g){_(r,d,g),e(d,T),e(d,u),e(u,p),e(d,v)},d(r){r&&o(d)}}}function nn(x){let d,T,u,p,v;return p=new To({props:{code:`from transformers import DPTFeatureExtractor, DPTForDepthEstimation
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
<span class="hljs-meta">&gt;&gt;&gt; </span>depth = Image.fromarray(formatted)`}}),{c(){d=a("p"),T=i("Examples:"),u=h(),b(p.$$.fragment)},l(r){d=n(r,"P",{});var g=s(d);T=l(g,"Examples:"),g.forEach(o),u=f(r),w(p.$$.fragment,r)},m(r,g){_(r,d,g),e(d,T),_(r,u,g),P(p,r,g),v=!0},p:vo,i(r){v||($(p.$$.fragment,r),v=!0)},o(r){y(p.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(u),D(p,r)}}}function sn(x){let d,T,u,p,v;return{c(){d=a("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),p=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=n(r,"P",{});var g=s(d);T=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(g,"CODE",{});var E=s(u);p=l(E,"Module"),E.forEach(o),v=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(r,g){_(r,d,g),e(d,T),e(d,u),e(u,p),e(d,v)},d(r){r&&o(d)}}}function ln(x){let d,T,u,p,v;return p=new To({props:{code:`from transformers import DPTFeatureExtractor, DPTForSemanticSegmentation
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),T=i("Examples:"),u=h(),b(p.$$.fragment)},l(r){d=n(r,"P",{});var g=s(d);T=l(g,"Examples:"),g.forEach(o),u=f(r),w(p.$$.fragment,r)},m(r,g){_(r,d,g),e(d,T),_(r,u,g),P(p,r,g),v=!0},p:vo,i(r){v||($(p.$$.fragment,r),v=!0)},o(r){y(p.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(u),D(p,r)}}}function dn(x){let d,T,u,p,v,r,g,E,bo,Vt,N,X,ut,be,wo,gt,Po,Wt,q,$o,we,yo,Do,Je,xo,Eo,Bt,Xe,ko,Rt,Ze,_t,Fo,Ut,Z,sa,Ht,Q,jo,Pe,zo,Io,Kt,A,Co,$e,Mo,So,ye,qo,Ao,Gt,O,ee,vt,De,Lo,Tt,No,Yt,k,xe,Oo,V,Vo,Qe,Wo,Bo,Ee,Ro,Uo,Ho,W,Ko,et,Go,Yo,tt,Jo,Xo,Zo,te,Jt,B,oe,bt,ke,Qo,wt,er,Xt,F,Fe,tr,Pt,or,rr,je,ar,ot,nr,sr,ir,L,ze,lr,$t,dr,cr,re,Zt,R,ae,yt,Ie,pr,Dt,mr,Qt,S,Ce,hr,Me,fr,Se,ur,gr,_r,I,qe,vr,U,Tr,rt,br,wr,xt,Pr,$r,yr,ne,Dr,se,eo,H,ie,Et,Ae,xr,kt,Er,to,j,Le,kr,Ft,Fr,jr,Ne,zr,Oe,Ir,Cr,Mr,C,Ve,Sr,K,qr,at,Ar,Lr,jt,Nr,Or,Vr,le,Wr,de,oo,G,ce,zt,We,Br,It,Rr,ro,z,Be,Ur,Ct,Hr,Kr,Re,Gr,Ue,Yr,Jr,Xr,M,He,Zr,Y,Qr,nt,ea,ta,Mt,oa,ra,aa,pe,na,me,ao;return r=new Ye({}),be=new Ye({}),De=new Ye({}),xe=new J({props:{name:"class transformers.DPTConfig",anchor:"transformers.DPTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"image_size",val:" = 384"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"backbone_out_indices",val:" = [2, 5, 8, 11]"},{name:"readout_type",val:" = 'project'"},{name:"reassemble_factors",val:" = [4, 2, 1, 0.5]"},{name:"neck_hidden_sizes",val:" = [96, 192, 384, 768]"},{name:"fusion_hidden_size",val:" = 256"},{name:"head_in_index",val:" = -1"},{name:"use_batch_norm_in_fusion_residual",val:" = False"},{name:"use_auxiliary_head",val:" = True"},{name:"auxiliary_loss_weight",val:" = 0.4"},{name:"semantic_loss_ignore_index",val:" = 255"},{name:"semantic_classifier_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DPTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The dropout ratio for the semantic classification head.`,name:"semantic_classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/dpt/configuration_dpt.py#L29"}}),te=new _o({props:{anchor:"transformers.DPTConfig.example",$$slots:{default:[en]},$$scope:{ctx:x}}}),ke=new Ye({}),Fe=new J({props:{name:"class transformers.DPTFeatureExtractor",anchor:"transformers.DPTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 384"},{name:"keep_aspect_ratio",val:" = False"},{name:"ensure_multiple_of",val:" = 1"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DPTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/dpt/feature_extraction_dpt.py#L37"}}),ze=new J({props:{name:"__call__",anchor:"transformers.DPTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DPTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.DPTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.21.3/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/dpt/feature_extraction_dpt.py#L133",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.3/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),re=new go({props:{warning:!0,$$slots:{default:[tn]},$$scope:{ctx:x}}}),Ie=new Ye({}),Ce=new J({props:{name:"class transformers.DPTModel",anchor:"transformers.DPTModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.DPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/dpt/modeling_dpt.py#L678"}}),qe=new J({props:{name:"forward",anchor:"transformers.DPTModel.forward",parameters:[{name:"pixel_values",val:""},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DPTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.21.3/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DPTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/dpt/modeling_dpt.py#L704",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/dpt#transformers.DPTConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ne=new go({props:{$$slots:{default:[on]},$$scope:{ctx:x}}}),se=new _o({props:{anchor:"transformers.DPTModel.forward.example",$$slots:{default:[rn]},$$scope:{ctx:x}}}),Ae=new Ye({}),Le=new J({props:{name:"class transformers.DPTForDepthEstimation",anchor:"transformers.DPTForDepthEstimation",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DPTForDepthEstimation.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/dpt/modeling_dpt.py#L859"}}),Ve=new J({props:{name:"forward",anchor:"transformers.DPTForDepthEstimation.forward",parameters:[{name:"pixel_values",val:""},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DPTForDepthEstimation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.21.3/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DPTForDepthEstimation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DPTForDepthEstimation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DPTForDepthEstimation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DPTForDepthEstimation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DPTForDepthEstimation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth depth estimation maps for computing the loss.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/dpt/modeling_dpt.py#L874",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.DepthEstimatorOutput"
>transformers.modeling_outputs.DepthEstimatorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/dpt#transformers.DPTConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.DepthEstimatorOutput"
>transformers.modeling_outputs.DepthEstimatorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),le=new go({props:{$$slots:{default:[an]},$$scope:{ctx:x}}}),de=new _o({props:{anchor:"transformers.DPTForDepthEstimation.forward.example",$$slots:{default:[nn]},$$scope:{ctx:x}}}),We=new Ye({}),Be=new J({props:{name:"class transformers.DPTForSemanticSegmentation",anchor:"transformers.DPTForSemanticSegmentation",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DPTForSemanticSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/dpt/modeling_dpt.py#L1019"}}),He=new J({props:{name:"forward",anchor:"transformers.DPTForSemanticSegmentation.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DPTForSemanticSegmentation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.21.3/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DPTForSemanticSegmentation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DPTForSemanticSegmentation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DPTForSemanticSegmentation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DPTForSemanticSegmentation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DPTForSemanticSegmentation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth semantic segmentation maps for computing the loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code>, a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/dpt/modeling_dpt.py#L1035",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.SemanticSegmenterOutput"
>transformers.modeling_outputs.SemanticSegmenterOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/dpt#transformers.DPTConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.SemanticSegmenterOutput"
>transformers.modeling_outputs.SemanticSegmenterOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pe=new go({props:{$$slots:{default:[sn]},$$scope:{ctx:x}}}),me=new _o({props:{anchor:"transformers.DPTForSemanticSegmentation.forward.example",$$slots:{default:[ln]},$$scope:{ctx:x}}}),{c(){d=a("meta"),T=h(),u=a("h1"),p=a("a"),v=a("span"),b(r.$$.fragment),g=h(),E=a("span"),bo=i("DPT"),Vt=h(),N=a("h2"),X=a("a"),ut=a("span"),b(be.$$.fragment),wo=h(),gt=a("span"),Po=i("Overview"),Wt=h(),q=a("p"),$o=i("The DPT model was proposed in "),we=a("a"),yo=i("Vision Transformers for Dense Prediction"),Do=i(` by Ren\xE9 Ranftl, Alexey Bochkovskiy, Vladlen Koltun.
DPT is a model that leverages the `),Je=a("a"),xo=i("Vision Transformer (ViT)"),Eo=i(" as backbone for dense prediction tasks like semantic segmentation and depth estimation."),Bt=h(),Xe=a("p"),ko=i("The abstract from the paper is the following:"),Rt=h(),Ze=a("p"),_t=a("em"),Fo=i("We introduce dense vision transformers, an architecture that leverages vision transformers in place of convolutional networks as a backbone for dense prediction tasks. We assemble tokens from various stages of the vision transformer into image-like representations at various resolutions and progressively combine them into full-resolution predictions using a convolutional decoder. The transformer backbone processes representations at a constant and relatively high resolution and has a global receptive field at every stage. These properties allow the dense vision transformer to provide finer-grained and more globally coherent predictions when compared to fully-convolutional networks. Our experiments show that this architecture yields substantial improvements on dense prediction tasks, especially when a large amount of training data is available. For monocular depth estimation, we observe an improvement of up to 28% in relative performance when compared to a state-of-the-art fully-convolutional network. When applied to semantic segmentation, dense vision transformers set a new state of the art on ADE20K with 49.02% mIoU. We further show that the architecture can be fine-tuned on smaller datasets such as NYUv2, KITTI, and Pascal Context where it also sets the new state of the art."),Ut=h(),Z=a("img"),Ht=h(),Q=a("small"),jo=i("DPT architecture. Taken from the "),Pe=a("a"),zo=i("original paper"),Io=i("."),Kt=h(),A=a("p"),Co=i("This model was contributed by "),$e=a("a"),Mo=i("nielsr"),So=i(". The original code can be found "),ye=a("a"),qo=i("here"),Ao=i("."),Gt=h(),O=a("h2"),ee=a("a"),vt=a("span"),b(De.$$.fragment),Lo=h(),Tt=a("span"),No=i("DPTConfig"),Yt=h(),k=a("div"),b(xe.$$.fragment),Oo=h(),V=a("p"),Vo=i("This is the configuration class to store the configuration of a "),Qe=a("a"),Wo=i("DPTModel"),Bo=i(`. It is used to instantiate an DPT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DPT
`),Ee=a("a"),Ro=i("Intel/dpt-large"),Uo=i(" architecture."),Ho=h(),W=a("p"),Ko=i("Configuration objects inherit from "),et=a("a"),Go=i("PretrainedConfig"),Yo=i(` and can be used to control the model outputs. Read the
documentation from `),tt=a("a"),Jo=i("PretrainedConfig"),Xo=i(" for more information."),Zo=h(),b(te.$$.fragment),Jt=h(),B=a("h2"),oe=a("a"),bt=a("span"),b(ke.$$.fragment),Qo=h(),wt=a("span"),er=i("DPTFeatureExtractor"),Xt=h(),F=a("div"),b(Fe.$$.fragment),tr=h(),Pt=a("p"),or=i("Constructs a DPT feature extractor."),rr=h(),je=a("p"),ar=i("This feature extractor inherits from "),ot=a("a"),nr=i("FeatureExtractionMixin"),sr=i(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),ir=h(),L=a("div"),b(ze.$$.fragment),lr=h(),$t=a("p"),dr=i("Main method to prepare for the model one or several image(s)."),cr=h(),b(re.$$.fragment),Zt=h(),R=a("h2"),ae=a("a"),yt=a("span"),b(Ie.$$.fragment),pr=h(),Dt=a("span"),mr=i("DPTModel"),Qt=h(),S=a("div"),b(Ce.$$.fragment),hr=h(),Me=a("p"),fr=i(`The bare DPT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Se=a("a"),ur=i("torch.nn.Module"),gr=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_r=h(),I=a("div"),b(qe.$$.fragment),vr=h(),U=a("p"),Tr=i("The "),rt=a("a"),br=i("DPTModel"),wr=i(" forward method, overrides the "),xt=a("code"),Pr=i("__call__"),$r=i(" special method."),yr=h(),b(ne.$$.fragment),Dr=h(),b(se.$$.fragment),eo=h(),H=a("h2"),ie=a("a"),Et=a("span"),b(Ae.$$.fragment),xr=h(),kt=a("span"),Er=i("DPTForDepthEstimation"),to=h(),j=a("div"),b(Le.$$.fragment),kr=h(),Ft=a("p"),Fr=i("DPT Model with a depth estimation head on top (consisting of 3 convolutional layers) e.g. for KITTI, NYUv2."),jr=h(),Ne=a("p"),zr=i("This model is a PyTorch "),Oe=a("a"),Ir=i("torch.nn.Module"),Cr=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Mr=h(),C=a("div"),b(Ve.$$.fragment),Sr=h(),K=a("p"),qr=i("The "),at=a("a"),Ar=i("DPTForDepthEstimation"),Lr=i(" forward method, overrides the "),jt=a("code"),Nr=i("__call__"),Or=i(" special method."),Vr=h(),b(le.$$.fragment),Wr=h(),b(de.$$.fragment),oo=h(),G=a("h2"),ce=a("a"),zt=a("span"),b(We.$$.fragment),Br=h(),It=a("span"),Rr=i("DPTForSemanticSegmentation"),ro=h(),z=a("div"),b(Be.$$.fragment),Ur=h(),Ct=a("p"),Hr=i("DPT Model with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),Kr=h(),Re=a("p"),Gr=i("This model is a PyTorch "),Ue=a("a"),Yr=i("torch.nn.Module"),Jr=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xr=h(),M=a("div"),b(He.$$.fragment),Zr=h(),Y=a("p"),Qr=i("The "),nt=a("a"),ea=i("DPTForSemanticSegmentation"),ta=i(" forward method, overrides the "),Mt=a("code"),oa=i("__call__"),ra=i(" special method."),aa=h(),b(pe.$$.fragment),na=h(),b(me.$$.fragment),this.h()},l(t){const m=Xa('[data-svelte="svelte-1phssyn"]',document.head);d=n(m,"META",{name:!0,content:!0}),m.forEach(o),T=f(t),u=n(t,"H1",{class:!0});var Ke=s(u);p=n(Ke,"A",{id:!0,class:!0,href:!0});var St=s(p);v=n(St,"SPAN",{});var qt=s(v);w(r.$$.fragment,qt),qt.forEach(o),St.forEach(o),g=f(Ke),E=n(Ke,"SPAN",{});var At=s(E);bo=l(At,"DPT"),At.forEach(o),Ke.forEach(o),Vt=f(t),N=n(t,"H2",{class:!0});var Ge=s(N);X=n(Ge,"A",{id:!0,class:!0,href:!0});var Lt=s(X);ut=n(Lt,"SPAN",{});var Nt=s(ut);w(be.$$.fragment,Nt),Nt.forEach(o),Lt.forEach(o),wo=f(Ge),gt=n(Ge,"SPAN",{});var Ot=s(gt);Po=l(Ot,"Overview"),Ot.forEach(o),Ge.forEach(o),Wt=f(t),q=n(t,"P",{});var st=s(q);$o=l(st,"The DPT model was proposed in "),we=n(st,"A",{href:!0,rel:!0});var ia=s(we);yo=l(ia,"Vision Transformers for Dense Prediction"),ia.forEach(o),Do=l(st,` by Ren\xE9 Ranftl, Alexey Bochkovskiy, Vladlen Koltun.
DPT is a model that leverages the `),Je=n(st,"A",{href:!0});var la=s(Je);xo=l(la,"Vision Transformer (ViT)"),la.forEach(o),Eo=l(st," as backbone for dense prediction tasks like semantic segmentation and depth estimation."),st.forEach(o),Bt=f(t),Xe=n(t,"P",{});var da=s(Xe);ko=l(da,"The abstract from the paper is the following:"),da.forEach(o),Rt=f(t),Ze=n(t,"P",{});var ca=s(Ze);_t=n(ca,"EM",{});var pa=s(_t);Fo=l(pa,"We introduce dense vision transformers, an architecture that leverages vision transformers in place of convolutional networks as a backbone for dense prediction tasks. We assemble tokens from various stages of the vision transformer into image-like representations at various resolutions and progressively combine them into full-resolution predictions using a convolutional decoder. The transformer backbone processes representations at a constant and relatively high resolution and has a global receptive field at every stage. These properties allow the dense vision transformer to provide finer-grained and more globally coherent predictions when compared to fully-convolutional networks. Our experiments show that this architecture yields substantial improvements on dense prediction tasks, especially when a large amount of training data is available. For monocular depth estimation, we observe an improvement of up to 28% in relative performance when compared to a state-of-the-art fully-convolutional network. When applied to semantic segmentation, dense vision transformers set a new state of the art on ADE20K with 49.02% mIoU. We further show that the architecture can be fine-tuned on smaller datasets such as NYUv2, KITTI, and Pascal Context where it also sets the new state of the art."),pa.forEach(o),ca.forEach(o),Ut=f(t),Z=n(t,"IMG",{src:!0,alt:!0,width:!0}),Ht=f(t),Q=n(t,"SMALL",{});var no=s(Q);jo=l(no,"DPT architecture. Taken from the "),Pe=n(no,"A",{href:!0,target:!0});var ma=s(Pe);zo=l(ma,"original paper"),ma.forEach(o),Io=l(no,"."),no.forEach(o),Kt=f(t),A=n(t,"P",{});var it=s(A);Co=l(it,"This model was contributed by "),$e=n(it,"A",{href:!0,rel:!0});var ha=s($e);Mo=l(ha,"nielsr"),ha.forEach(o),So=l(it,". The original code can be found "),ye=n(it,"A",{href:!0,rel:!0});var fa=s(ye);qo=l(fa,"here"),fa.forEach(o),Ao=l(it,"."),it.forEach(o),Gt=f(t),O=n(t,"H2",{class:!0});var so=s(O);ee=n(so,"A",{id:!0,class:!0,href:!0});var ua=s(ee);vt=n(ua,"SPAN",{});var ga=s(vt);w(De.$$.fragment,ga),ga.forEach(o),ua.forEach(o),Lo=f(so),Tt=n(so,"SPAN",{});var _a=s(Tt);No=l(_a,"DPTConfig"),_a.forEach(o),so.forEach(o),Yt=f(t),k=n(t,"DIV",{class:!0});var he=s(k);w(xe.$$.fragment,he),Oo=f(he),V=n(he,"P",{});var lt=s(V);Vo=l(lt,"This is the configuration class to store the configuration of a "),Qe=n(lt,"A",{href:!0});var va=s(Qe);Wo=l(va,"DPTModel"),va.forEach(o),Bo=l(lt,`. It is used to instantiate an DPT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DPT
`),Ee=n(lt,"A",{href:!0,rel:!0});var Ta=s(Ee);Ro=l(Ta,"Intel/dpt-large"),Ta.forEach(o),Uo=l(lt," architecture."),lt.forEach(o),Ho=f(he),W=n(he,"P",{});var dt=s(W);Ko=l(dt,"Configuration objects inherit from "),et=n(dt,"A",{href:!0});var ba=s(et);Go=l(ba,"PretrainedConfig"),ba.forEach(o),Yo=l(dt,` and can be used to control the model outputs. Read the
documentation from `),tt=n(dt,"A",{href:!0});var wa=s(tt);Jo=l(wa,"PretrainedConfig"),wa.forEach(o),Xo=l(dt," for more information."),dt.forEach(o),Zo=f(he),w(te.$$.fragment,he),he.forEach(o),Jt=f(t),B=n(t,"H2",{class:!0});var io=s(B);oe=n(io,"A",{id:!0,class:!0,href:!0});var Pa=s(oe);bt=n(Pa,"SPAN",{});var $a=s(bt);w(ke.$$.fragment,$a),$a.forEach(o),Pa.forEach(o),Qo=f(io),wt=n(io,"SPAN",{});var ya=s(wt);er=l(ya,"DPTFeatureExtractor"),ya.forEach(o),io.forEach(o),Xt=f(t),F=n(t,"DIV",{class:!0});var fe=s(F);w(Fe.$$.fragment,fe),tr=f(fe),Pt=n(fe,"P",{});var Da=s(Pt);or=l(Da,"Constructs a DPT feature extractor."),Da.forEach(o),rr=f(fe),je=n(fe,"P",{});var lo=s(je);ar=l(lo,"This feature extractor inherits from "),ot=n(lo,"A",{href:!0});var xa=s(ot);nr=l(xa,"FeatureExtractionMixin"),xa.forEach(o),sr=l(lo,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),lo.forEach(o),ir=f(fe),L=n(fe,"DIV",{class:!0});var ct=s(L);w(ze.$$.fragment,ct),lr=f(ct),$t=n(ct,"P",{});var Ea=s($t);dr=l(Ea,"Main method to prepare for the model one or several image(s)."),Ea.forEach(o),cr=f(ct),w(re.$$.fragment,ct),ct.forEach(o),fe.forEach(o),Zt=f(t),R=n(t,"H2",{class:!0});var co=s(R);ae=n(co,"A",{id:!0,class:!0,href:!0});var ka=s(ae);yt=n(ka,"SPAN",{});var Fa=s(yt);w(Ie.$$.fragment,Fa),Fa.forEach(o),ka.forEach(o),pr=f(co),Dt=n(co,"SPAN",{});var ja=s(Dt);mr=l(ja,"DPTModel"),ja.forEach(o),co.forEach(o),Qt=f(t),S=n(t,"DIV",{class:!0});var pt=s(S);w(Ce.$$.fragment,pt),hr=f(pt),Me=n(pt,"P",{});var po=s(Me);fr=l(po,`The bare DPT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Se=n(po,"A",{href:!0,rel:!0});var za=s(Se);ur=l(za,"torch.nn.Module"),za.forEach(o),gr=l(po,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),po.forEach(o),_r=f(pt),I=n(pt,"DIV",{class:!0});var ue=s(I);w(qe.$$.fragment,ue),vr=f(ue),U=n(ue,"P",{});var mt=s(U);Tr=l(mt,"The "),rt=n(mt,"A",{href:!0});var Ia=s(rt);br=l(Ia,"DPTModel"),Ia.forEach(o),wr=l(mt," forward method, overrides the "),xt=n(mt,"CODE",{});var Ca=s(xt);Pr=l(Ca,"__call__"),Ca.forEach(o),$r=l(mt," special method."),mt.forEach(o),yr=f(ue),w(ne.$$.fragment,ue),Dr=f(ue),w(se.$$.fragment,ue),ue.forEach(o),pt.forEach(o),eo=f(t),H=n(t,"H2",{class:!0});var mo=s(H);ie=n(mo,"A",{id:!0,class:!0,href:!0});var Ma=s(ie);Et=n(Ma,"SPAN",{});var Sa=s(Et);w(Ae.$$.fragment,Sa),Sa.forEach(o),Ma.forEach(o),xr=f(mo),kt=n(mo,"SPAN",{});var qa=s(kt);Er=l(qa,"DPTForDepthEstimation"),qa.forEach(o),mo.forEach(o),to=f(t),j=n(t,"DIV",{class:!0});var ge=s(j);w(Le.$$.fragment,ge),kr=f(ge),Ft=n(ge,"P",{});var Aa=s(Ft);Fr=l(Aa,"DPT Model with a depth estimation head on top (consisting of 3 convolutional layers) e.g. for KITTI, NYUv2."),Aa.forEach(o),jr=f(ge),Ne=n(ge,"P",{});var ho=s(Ne);zr=l(ho,"This model is a PyTorch "),Oe=n(ho,"A",{href:!0,rel:!0});var La=s(Oe);Ir=l(La,"torch.nn.Module"),La.forEach(o),Cr=l(ho,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ho.forEach(o),Mr=f(ge),C=n(ge,"DIV",{class:!0});var _e=s(C);w(Ve.$$.fragment,_e),Sr=f(_e),K=n(_e,"P",{});var ht=s(K);qr=l(ht,"The "),at=n(ht,"A",{href:!0});var Na=s(at);Ar=l(Na,"DPTForDepthEstimation"),Na.forEach(o),Lr=l(ht," forward method, overrides the "),jt=n(ht,"CODE",{});var Oa=s(jt);Nr=l(Oa,"__call__"),Oa.forEach(o),Or=l(ht," special method."),ht.forEach(o),Vr=f(_e),w(le.$$.fragment,_e),Wr=f(_e),w(de.$$.fragment,_e),_e.forEach(o),ge.forEach(o),oo=f(t),G=n(t,"H2",{class:!0});var fo=s(G);ce=n(fo,"A",{id:!0,class:!0,href:!0});var Va=s(ce);zt=n(Va,"SPAN",{});var Wa=s(zt);w(We.$$.fragment,Wa),Wa.forEach(o),Va.forEach(o),Br=f(fo),It=n(fo,"SPAN",{});var Ba=s(It);Rr=l(Ba,"DPTForSemanticSegmentation"),Ba.forEach(o),fo.forEach(o),ro=f(t),z=n(t,"DIV",{class:!0});var ve=s(z);w(Be.$$.fragment,ve),Ur=f(ve),Ct=n(ve,"P",{});var Ra=s(Ct);Hr=l(Ra,"DPT Model with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),Ra.forEach(o),Kr=f(ve),Re=n(ve,"P",{});var uo=s(Re);Gr=l(uo,"This model is a PyTorch "),Ue=n(uo,"A",{href:!0,rel:!0});var Ua=s(Ue);Yr=l(Ua,"torch.nn.Module"),Ua.forEach(o),Jr=l(uo,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),uo.forEach(o),Xr=f(ve),M=n(ve,"DIV",{class:!0});var Te=s(M);w(He.$$.fragment,Te),Zr=f(Te),Y=n(Te,"P",{});var ft=s(Y);Qr=l(ft,"The "),nt=n(ft,"A",{href:!0});var Ha=s(nt);ea=l(Ha,"DPTForSemanticSegmentation"),Ha.forEach(o),ta=l(ft," forward method, overrides the "),Mt=n(ft,"CODE",{});var Ka=s(Mt);oa=l(Ka,"__call__"),Ka.forEach(o),ra=l(ft," special method."),ft.forEach(o),aa=f(Te),w(pe.$$.fragment,Te),na=f(Te),w(me.$$.fragment,Te),Te.forEach(o),ve.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(cn)),c(p,"id","dpt"),c(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(p,"href","#dpt"),c(u,"class","relative group"),c(X,"id","overview"),c(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(X,"href","#overview"),c(N,"class","relative group"),c(we,"href","https://arxiv.org/abs/2103.13413"),c(we,"rel","nofollow"),c(Je,"href","vit"),Za(Z.src,sa="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/dpt_architecture.jpg")||c(Z,"src",sa),c(Z,"alt","drawing"),c(Z,"width","600"),c(Pe,"href","https://arxiv.org/abs/2103.13413"),c(Pe,"target","_blank"),c($e,"href","https://huggingface.co/nielsr"),c($e,"rel","nofollow"),c(ye,"href","https://github.com/isl-org/DPT"),c(ye,"rel","nofollow"),c(ee,"id","transformers.DPTConfig"),c(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ee,"href","#transformers.DPTConfig"),c(O,"class","relative group"),c(Qe,"href","/docs/transformers/v4.21.3/en/model_doc/dpt#transformers.DPTModel"),c(Ee,"href","https://huggingface.co/Intel/dpt-large"),c(Ee,"rel","nofollow"),c(et,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),c(tt,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),c(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(oe,"id","transformers.DPTFeatureExtractor"),c(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oe,"href","#transformers.DPTFeatureExtractor"),c(B,"class","relative group"),c(ot,"href","/docs/transformers/v4.21.3/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ae,"id","transformers.DPTModel"),c(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ae,"href","#transformers.DPTModel"),c(R,"class","relative group"),c(Se,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Se,"rel","nofollow"),c(rt,"href","/docs/transformers/v4.21.3/en/model_doc/dpt#transformers.DPTModel"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ie,"id","transformers.DPTForDepthEstimation"),c(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ie,"href","#transformers.DPTForDepthEstimation"),c(H,"class","relative group"),c(Oe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Oe,"rel","nofollow"),c(at,"href","/docs/transformers/v4.21.3/en/model_doc/dpt#transformers.DPTForDepthEstimation"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ce,"id","transformers.DPTForSemanticSegmentation"),c(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ce,"href","#transformers.DPTForSemanticSegmentation"),c(G,"class","relative group"),c(Ue,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ue,"rel","nofollow"),c(nt,"href","/docs/transformers/v4.21.3/en/model_doc/dpt#transformers.DPTForSemanticSegmentation"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,m){e(document.head,d),_(t,T,m),_(t,u,m),e(u,p),e(p,v),P(r,v,null),e(u,g),e(u,E),e(E,bo),_(t,Vt,m),_(t,N,m),e(N,X),e(X,ut),P(be,ut,null),e(N,wo),e(N,gt),e(gt,Po),_(t,Wt,m),_(t,q,m),e(q,$o),e(q,we),e(we,yo),e(q,Do),e(q,Je),e(Je,xo),e(q,Eo),_(t,Bt,m),_(t,Xe,m),e(Xe,ko),_(t,Rt,m),_(t,Ze,m),e(Ze,_t),e(_t,Fo),_(t,Ut,m),_(t,Z,m),_(t,Ht,m),_(t,Q,m),e(Q,jo),e(Q,Pe),e(Pe,zo),e(Q,Io),_(t,Kt,m),_(t,A,m),e(A,Co),e(A,$e),e($e,Mo),e(A,So),e(A,ye),e(ye,qo),e(A,Ao),_(t,Gt,m),_(t,O,m),e(O,ee),e(ee,vt),P(De,vt,null),e(O,Lo),e(O,Tt),e(Tt,No),_(t,Yt,m),_(t,k,m),P(xe,k,null),e(k,Oo),e(k,V),e(V,Vo),e(V,Qe),e(Qe,Wo),e(V,Bo),e(V,Ee),e(Ee,Ro),e(V,Uo),e(k,Ho),e(k,W),e(W,Ko),e(W,et),e(et,Go),e(W,Yo),e(W,tt),e(tt,Jo),e(W,Xo),e(k,Zo),P(te,k,null),_(t,Jt,m),_(t,B,m),e(B,oe),e(oe,bt),P(ke,bt,null),e(B,Qo),e(B,wt),e(wt,er),_(t,Xt,m),_(t,F,m),P(Fe,F,null),e(F,tr),e(F,Pt),e(Pt,or),e(F,rr),e(F,je),e(je,ar),e(je,ot),e(ot,nr),e(je,sr),e(F,ir),e(F,L),P(ze,L,null),e(L,lr),e(L,$t),e($t,dr),e(L,cr),P(re,L,null),_(t,Zt,m),_(t,R,m),e(R,ae),e(ae,yt),P(Ie,yt,null),e(R,pr),e(R,Dt),e(Dt,mr),_(t,Qt,m),_(t,S,m),P(Ce,S,null),e(S,hr),e(S,Me),e(Me,fr),e(Me,Se),e(Se,ur),e(Me,gr),e(S,_r),e(S,I),P(qe,I,null),e(I,vr),e(I,U),e(U,Tr),e(U,rt),e(rt,br),e(U,wr),e(U,xt),e(xt,Pr),e(U,$r),e(I,yr),P(ne,I,null),e(I,Dr),P(se,I,null),_(t,eo,m),_(t,H,m),e(H,ie),e(ie,Et),P(Ae,Et,null),e(H,xr),e(H,kt),e(kt,Er),_(t,to,m),_(t,j,m),P(Le,j,null),e(j,kr),e(j,Ft),e(Ft,Fr),e(j,jr),e(j,Ne),e(Ne,zr),e(Ne,Oe),e(Oe,Ir),e(Ne,Cr),e(j,Mr),e(j,C),P(Ve,C,null),e(C,Sr),e(C,K),e(K,qr),e(K,at),e(at,Ar),e(K,Lr),e(K,jt),e(jt,Nr),e(K,Or),e(C,Vr),P(le,C,null),e(C,Wr),P(de,C,null),_(t,oo,m),_(t,G,m),e(G,ce),e(ce,zt),P(We,zt,null),e(G,Br),e(G,It),e(It,Rr),_(t,ro,m),_(t,z,m),P(Be,z,null),e(z,Ur),e(z,Ct),e(Ct,Hr),e(z,Kr),e(z,Re),e(Re,Gr),e(Re,Ue),e(Ue,Yr),e(Re,Jr),e(z,Xr),e(z,M),P(He,M,null),e(M,Zr),e(M,Y),e(Y,Qr),e(Y,nt),e(nt,ea),e(Y,ta),e(Y,Mt),e(Mt,oa),e(Y,ra),e(M,aa),P(pe,M,null),e(M,na),P(me,M,null),ao=!0},p(t,[m]){const Ke={};m&2&&(Ke.$$scope={dirty:m,ctx:t}),te.$set(Ke);const St={};m&2&&(St.$$scope={dirty:m,ctx:t}),re.$set(St);const qt={};m&2&&(qt.$$scope={dirty:m,ctx:t}),ne.$set(qt);const At={};m&2&&(At.$$scope={dirty:m,ctx:t}),se.$set(At);const Ge={};m&2&&(Ge.$$scope={dirty:m,ctx:t}),le.$set(Ge);const Lt={};m&2&&(Lt.$$scope={dirty:m,ctx:t}),de.$set(Lt);const Nt={};m&2&&(Nt.$$scope={dirty:m,ctx:t}),pe.$set(Nt);const Ot={};m&2&&(Ot.$$scope={dirty:m,ctx:t}),me.$set(Ot)},i(t){ao||($(r.$$.fragment,t),$(be.$$.fragment,t),$(De.$$.fragment,t),$(xe.$$.fragment,t),$(te.$$.fragment,t),$(ke.$$.fragment,t),$(Fe.$$.fragment,t),$(ze.$$.fragment,t),$(re.$$.fragment,t),$(Ie.$$.fragment,t),$(Ce.$$.fragment,t),$(qe.$$.fragment,t),$(ne.$$.fragment,t),$(se.$$.fragment,t),$(Ae.$$.fragment,t),$(Le.$$.fragment,t),$(Ve.$$.fragment,t),$(le.$$.fragment,t),$(de.$$.fragment,t),$(We.$$.fragment,t),$(Be.$$.fragment,t),$(He.$$.fragment,t),$(pe.$$.fragment,t),$(me.$$.fragment,t),ao=!0)},o(t){y(r.$$.fragment,t),y(be.$$.fragment,t),y(De.$$.fragment,t),y(xe.$$.fragment,t),y(te.$$.fragment,t),y(ke.$$.fragment,t),y(Fe.$$.fragment,t),y(ze.$$.fragment,t),y(re.$$.fragment,t),y(Ie.$$.fragment,t),y(Ce.$$.fragment,t),y(qe.$$.fragment,t),y(ne.$$.fragment,t),y(se.$$.fragment,t),y(Ae.$$.fragment,t),y(Le.$$.fragment,t),y(Ve.$$.fragment,t),y(le.$$.fragment,t),y(de.$$.fragment,t),y(We.$$.fragment,t),y(Be.$$.fragment,t),y(He.$$.fragment,t),y(pe.$$.fragment,t),y(me.$$.fragment,t),ao=!1},d(t){o(d),t&&o(T),t&&o(u),D(r),t&&o(Vt),t&&o(N),D(be),t&&o(Wt),t&&o(q),t&&o(Bt),t&&o(Xe),t&&o(Rt),t&&o(Ze),t&&o(Ut),t&&o(Z),t&&o(Ht),t&&o(Q),t&&o(Kt),t&&o(A),t&&o(Gt),t&&o(O),D(De),t&&o(Yt),t&&o(k),D(xe),D(te),t&&o(Jt),t&&o(B),D(ke),t&&o(Xt),t&&o(F),D(Fe),D(ze),D(re),t&&o(Zt),t&&o(R),D(Ie),t&&o(Qt),t&&o(S),D(Ce),D(qe),D(ne),D(se),t&&o(eo),t&&o(H),D(Ae),t&&o(to),t&&o(j),D(Le),D(Ve),D(le),D(de),t&&o(oo),t&&o(G),D(We),t&&o(ro),t&&o(z),D(Be),D(He),D(pe),D(me)}}}const cn={local:"dpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.DPTConfig",title:"DPTConfig"},{local:"transformers.DPTFeatureExtractor",title:"DPTFeatureExtractor"},{local:"transformers.DPTModel",title:"DPTModel"},{local:"transformers.DPTForDepthEstimation",title:"DPTForDepthEstimation"},{local:"transformers.DPTForSemanticSegmentation",title:"DPTForSemanticSegmentation"}],title:"DPT"};function pn(x){return Qa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vn extends Ga{constructor(d){super();Ya(this,d,pn,dn,Ja,{})}}export{vn as default,cn as metadata};
