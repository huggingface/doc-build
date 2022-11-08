import{S as bs,i as Ps,s as Ds,e as r,k as m,w as b,t as i,M as ys,c as a,d as o,m as p,a as s,x as P,h as l,b as d,N as ws,G as t,g,y as D,q as y,o as w,B as $,v as $s,L as jo}from"../../chunks/vendor-hf-doc-builder.js";import{T as wa}from"../../chunks/Tip-hf-doc-builder.js";import{D as C}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Co}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as we}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Fo}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function xs(x){let c,v,_,f,T;return f=new Co({props:{code:`from transformers import DPTModel, DPTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=r("p"),v=i("Example:"),_=m(),b(f.$$.fragment)},l(n){c=a(n,"P",{});var u=s(c);v=l(u,"Example:"),u.forEach(o),_=p(n),P(f.$$.fragment,n)},m(n,u){g(n,c,u),t(c,v),g(n,_,u),D(f,n,u),T=!0},p:jo,i(n){T||(y(f.$$.fragment,n),T=!0)},o(n){w(f.$$.fragment,n),T=!1},d(n){n&&o(c),n&&o(_),$(f,n)}}}function Es(x){let c,v,_,f,T;return{c(){c=r("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r("code"),f=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){c=a(n,"P",{});var u=s(c);v=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(u,"CODE",{});var E=s(_);f=l(E,"Module"),E.forEach(o),T=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(n,u){g(n,c,u),t(c,v),t(c,_),t(_,f),t(c,T)},d(n){n&&o(c)}}}function zs(x){let c,v,_,f,T;return f=new Co({props:{code:`from transformers import DPTFeatureExtractor, DPTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">577</span>, <span class="hljs-number">1024</span>]`}}),{c(){c=r("p"),v=i("Example:"),_=m(),b(f.$$.fragment)},l(n){c=a(n,"P",{});var u=s(c);v=l(u,"Example:"),u.forEach(o),_=p(n),P(f.$$.fragment,n)},m(n,u){g(n,c,u),t(c,v),g(n,_,u),D(f,n,u),T=!0},p:jo,i(n){T||(y(f.$$.fragment,n),T=!0)},o(n){w(f.$$.fragment,n),T=!1},d(n){n&&o(c),n&&o(_),$(f,n)}}}function ks(x){let c,v,_,f,T;return{c(){c=r("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r("code"),f=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){c=a(n,"P",{});var u=s(c);v=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(u,"CODE",{});var E=s(_);f=l(E,"Module"),E.forEach(o),T=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(n,u){g(n,c,u),t(c,v),t(c,_),t(_,f),t(c,T)},d(n){n&&o(c)}}}function Is(x){let c,v,_,f,T;return f=new Co({props:{code:`from transformers import DPTFeatureExtractor, DPTForDepthEstimation
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
<span class="hljs-meta">&gt;&gt;&gt; </span>depth = Image.fromarray(formatted)`}}),{c(){c=r("p"),v=i("Examples:"),_=m(),b(f.$$.fragment)},l(n){c=a(n,"P",{});var u=s(c);v=l(u,"Examples:"),u.forEach(o),_=p(n),P(f.$$.fragment,n)},m(n,u){g(n,c,u),t(c,v),g(n,_,u),D(f,n,u),T=!0},p:jo,i(n){T||(y(f.$$.fragment,n),T=!0)},o(n){w(f.$$.fragment,n),T=!1},d(n){n&&o(c),n&&o(_),$(f,n)}}}function Fs(x){let c,v,_,f,T;return{c(){c=r("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r("code"),f=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){c=a(n,"P",{});var u=s(c);v=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(u,"CODE",{});var E=s(_);f=l(E,"Module"),E.forEach(o),T=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(n,u){g(n,c,u),t(c,v),t(c,_),t(_,f),t(c,T)},d(n){n&&o(c)}}}function js(x){let c,v,_,f,T;return f=new Co({props:{code:`from transformers import DPTFeatureExtractor, DPTForSemanticSegmentation
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=r("p"),v=i("Examples:"),_=m(),b(f.$$.fragment)},l(n){c=a(n,"P",{});var u=s(c);v=l(u,"Examples:"),u.forEach(o),_=p(n),P(f.$$.fragment,n)},m(n,u){g(n,c,u),t(c,v),g(n,_,u),D(f,n,u),T=!0},p:jo,i(n){T||(y(f.$$.fragment,n),T=!0)},o(n){w(f.$$.fragment,n),T=!1},d(n){n&&o(c),n&&o(_),$(f,n)}}}function Cs(x){let c,v,_,f,T,n,u,E,So,Qt,R,Q,yt,$e,Mo,wt,qo,Zt,N,Ao,xe,No,Lo,at,Ro,Vo,eo,st,Oo,to,nt,$t,Wo,oo,Z,$a,ro,ee,Uo,Ee,Bo,Ho,ao,L,Go,ze,Ko,Yo,ke,Jo,Xo,so,V,te,xt,Ie,Qo,Et,Zo,no,z,Fe,er,O,tr,it,or,rr,je,ar,sr,nr,W,ir,lt,lr,dr,dt,cr,mr,pr,oe,io,U,re,zt,Ce,hr,kt,fr,lo,k,Se,ur,It,gr,_r,ae,Me,Tr,Ft,vr,br,ct,qe,co,B,se,jt,Ae,Pr,Ct,Dr,mo,I,Ne,yr,St,wr,$r,ne,Le,xr,Mt,Er,zr,mt,Re,po,H,ie,qt,Ve,kr,At,Ir,ho,A,Oe,Fr,We,jr,Ue,Cr,Sr,Mr,S,Be,qr,G,Ar,pt,Nr,Lr,Nt,Rr,Vr,Or,le,Wr,de,fo,K,ce,Lt,He,Ur,Rt,Br,uo,F,Ge,Hr,Vt,Gr,Kr,Ke,Yr,Ye,Jr,Xr,Qr,M,Je,Zr,Y,ea,ht,ta,oa,Ot,ra,aa,sa,me,na,pe,go,J,he,Wt,Xe,ia,Ut,la,_o,j,Qe,da,Bt,ca,ma,Ze,pa,et,ha,fa,ua,q,tt,ga,X,_a,ft,Ta,va,Ht,ba,Pa,Da,fe,ya,ue,To;return n=new we({}),$e=new we({}),Ie=new we({}),Fe=new C({props:{name:"class transformers.DPTConfig",anchor:"transformers.DPTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"image_size",val:" = 384"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"backbone_out_indices",val:" = [2, 5, 8, 11]"},{name:"readout_type",val:" = 'project'"},{name:"reassemble_factors",val:" = [4, 2, 1, 0.5]"},{name:"neck_hidden_sizes",val:" = [96, 192, 384, 768]"},{name:"fusion_hidden_size",val:" = 256"},{name:"head_in_index",val:" = -1"},{name:"use_batch_norm_in_fusion_residual",val:" = False"},{name:"use_auxiliary_head",val:" = True"},{name:"auxiliary_loss_weight",val:" = 0.4"},{name:"semantic_loss_ignore_index",val:" = 255"},{name:"semantic_classifier_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DPTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The dropout ratio for the semantic classification head.`,name:"semantic_classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/configuration_dpt.py#L29"}}),oe=new Fo({props:{anchor:"transformers.DPTConfig.example",$$slots:{default:[xs]},$$scope:{ctx:x}}}),Ce=new we({}),Se=new C({props:{name:"class transformers.DPTImageProcessor",anchor:"transformers.DPTImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BILINEAR: 2>"},{name:"keep_aspect_ratio",val:": bool = False"},{name:"ensure_multiple_of",val:": int = 1"},{name:"do_rescale",val:": bool = True"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DPTImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions. Can be overidden by <code>do_resize</code> in <code>preprocess</code>.`,name:"do_resize"},{anchor:"transformers.DPTImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;height&quot; -- 384, &quot;width&quot;: 384}</code>):
Size of the image after resizing. Can be overidden by <code>size</code> in <code>preprocess</code>.`,name:"size"},{anchor:"transformers.DPTImageProcessor.keep_aspect_ratio",description:`<strong>keep_aspect_ratio</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, the image is resized to the largest possible size such that the aspect ratio is preserved. Can
be overidden by <code>keep_aspect_ratio</code> in <code>preprocess</code>.`,name:"keep_aspect_ratio"},{anchor:"transformers.DPTImageProcessor.ensure_multiple_of",description:`<strong>ensure_multiple_of</strong> (<code>int</code>, <em>optional</em>, defaults to <code>1</code>) &#x2014;
If <code>do_resize</code> is <code>True</code>, the image is resized to a size that is a multiple of this value. Can be overidden
by <code>ensure_multiple_of</code> in <code>preprocess</code>.`,name:"ensure_multiple_of"},{anchor:"transformers.DPTImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BILINEAR</code>) &#x2014;
Defines the resampling filter to use if resizing the image. Can be overidden by <code>resample</code> in <code>preprocess</code>.`,name:"resample"},{anchor:"transformers.DPTImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to rescale the image by the specified scale <code>rescale_factor</code>. Can be overidden by <code>do_rescale</code> in
<code>preprocess</code>.`,name:"do_rescale"},{anchor:"transformers.DPTImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>int</code> or <code>float</code>, <em>optional</em>, defaults to <code>1/255</code>) &#x2014;
Scale factor to use if rescaling the image. Can be overidden by <code>rescale_factor</code> in <code>preprocess</code>.`,name:"rescale_factor"},{anchor:"transformers.DPTImageProcessor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize the image. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code>
method.`,name:"do_normalize"},{anchor:"transformers.DPTImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.DPTImageProcessor.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/image_processing_dpt.py#L91"}}),Me=new C({props:{name:"__call__",anchor:"transformers.DPTImageProcessor.__call__",parameters:[{name:"images",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/image_processing_utils.py#L435"}}),qe=new C({props:{name:"post_process_semantic_segmentation",anchor:"transformers.DPTImageProcessor.post_process_semantic_segmentation",parameters:[{name:"outputs",val:""},{name:"target_sizes",val:": typing.List[typing.Tuple] = None"}],parametersDescription:[{anchor:"transformers.DPTImageProcessor.post_process_semantic_segmentation.Converts",description:`<strong>Converts</strong> the output of <a href="/docs/transformers/main/en/model_doc/dpt#transformers.DPTForSemanticSegmentation">DPTForSemanticSegmentation</a> into semantic segmentation maps. Only supports PyTorch. &#x2014;
outputs (<a href="/docs/transformers/main/en/model_doc/dpt#transformers.DPTForSemanticSegmentation">DPTForSemanticSegmentation</a>):
Raw outputs of the model.
target_sizes (<code>List[Tuple]</code> of length <code>batch_size</code>, <em>optional</em>):
List of tuples corresponding to the requested final size (height, width) of each prediction. If unset,
predictions will not be resized.`,name:"Converts"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/image_processing_dpt.py#L346",returnDescription:`
<p><code>List[torch.Tensor]</code> of length <code>batch_size</code>, where each item is a semantic
segmentation map of shape (height, width) corresponding to the target_sizes entry (if <code>target_sizes</code> is
specified). Each entry of each <code>torch.Tensor</code> correspond to a semantic class id.</p>
`,returnType:`
<p>semantic_segmentation</p>
`}}),Ae=new we({}),Ne=new C({props:{name:"class transformers.DPTImageProcessor",anchor:"transformers.DPTImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BILINEAR: 2>"},{name:"keep_aspect_ratio",val:": bool = False"},{name:"ensure_multiple_of",val:": int = 1"},{name:"do_rescale",val:": bool = True"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DPTImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions. Can be overidden by <code>do_resize</code> in <code>preprocess</code>.`,name:"do_resize"},{anchor:"transformers.DPTImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;height&quot; -- 384, &quot;width&quot;: 384}</code>):
Size of the image after resizing. Can be overidden by <code>size</code> in <code>preprocess</code>.`,name:"size"},{anchor:"transformers.DPTImageProcessor.keep_aspect_ratio",description:`<strong>keep_aspect_ratio</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, the image is resized to the largest possible size such that the aspect ratio is preserved. Can
be overidden by <code>keep_aspect_ratio</code> in <code>preprocess</code>.`,name:"keep_aspect_ratio"},{anchor:"transformers.DPTImageProcessor.ensure_multiple_of",description:`<strong>ensure_multiple_of</strong> (<code>int</code>, <em>optional</em>, defaults to <code>1</code>) &#x2014;
If <code>do_resize</code> is <code>True</code>, the image is resized to a size that is a multiple of this value. Can be overidden
by <code>ensure_multiple_of</code> in <code>preprocess</code>.`,name:"ensure_multiple_of"},{anchor:"transformers.DPTImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BILINEAR</code>) &#x2014;
Defines the resampling filter to use if resizing the image. Can be overidden by <code>resample</code> in <code>preprocess</code>.`,name:"resample"},{anchor:"transformers.DPTImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to rescale the image by the specified scale <code>rescale_factor</code>. Can be overidden by <code>do_rescale</code> in
<code>preprocess</code>.`,name:"do_rescale"},{anchor:"transformers.DPTImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>int</code> or <code>float</code>, <em>optional</em>, defaults to <code>1/255</code>) &#x2014;
Scale factor to use if rescaling the image. Can be overidden by <code>rescale_factor</code> in <code>preprocess</code>.`,name:"rescale_factor"},{anchor:"transformers.DPTImageProcessor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize the image. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code>
method.`,name:"do_normalize"},{anchor:"transformers.DPTImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.DPTImageProcessor.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/image_processing_dpt.py#L91"}}),Le=new C({props:{name:"preprocess",anchor:"transformers.DPTImageProcessor.preprocess",parameters:[{name:"images",val:": typing.Union[ForwardRef('PIL.Image.Image'), numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[ForwardRef('PIL.Image.Image')], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"do_resize",val:": bool = None"},{name:"size",val:": int = None"},{name:"keep_aspect_ratio",val:": bool = None"},{name:"ensure_multiple_of",val:": int = None"},{name:"resample",val:": Resampling = None"},{name:"do_rescale",val:": bool = None"},{name:"rescale_factor",val:": float = None"},{name:"do_normalize",val:": bool = None"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"data_format",val:": ChannelDimension = <ChannelDimension.FIRST: 'channels_first'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DPTImageProcessor.preprocess.images",description:`<strong>images</strong> (<code>ImageInput</code>) &#x2014;
Image to preprocess.`,name:"images"},{anchor:"transformers.DPTImageProcessor.preprocess.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_resize</code>) &#x2014;
Whether to resize the image.`,name:"do_resize"},{anchor:"transformers.DPTImageProcessor.preprocess.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>self.size</code>) &#x2014;
Size of the image after reszing. If <code>keep_aspect_ratio</code> is <code>True</code>, the image is resized to the largest
possible size such that the aspect ratio is preserved. If <code>ensure_multiple_of</code> is set, the image is
resized to a size that is a multiple of this value.`,name:"size"},{anchor:"transformers.DPTImageProcessor.preprocess.keep_aspect_ratio",description:`<strong>keep_aspect_ratio</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.keep_aspect_ratio</code>) &#x2014;
Whether to keep the aspect ratio of the image. If False, the image will be resized to (size, size). If
True, the image will be resized to keep the aspect ratio and the size will be the maximum possible.`,name:"keep_aspect_ratio"},{anchor:"transformers.DPTImageProcessor.preprocess.ensure_multiple_of",description:`<strong>ensure_multiple_of</strong> (<code>int</code>, <em>optional</em>, defaults to <code>self.ensure_multiple_of</code>) &#x2014;
Ensure that the image size is a multiple of this value.`,name:"ensure_multiple_of"},{anchor:"transformers.DPTImageProcessor.preprocess.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>self.resample</code>) &#x2014;
Resampling filter to use if resizing the image. This can be one of the enum <code>PILImageResampling</code>, Only
has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.DPTImageProcessor.preprocess.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_rescale</code>) &#x2014;
Whether to rescale the image values between [0 - 1].`,name:"do_rescale"},{anchor:"transformers.DPTImageProcessor.preprocess.rescale_factor",description:`<strong>rescale_factor</strong> (<code>float</code>, <em>optional</em>, defaults to <code>self.rescale_factor</code>) &#x2014;
Rescale factor to rescale the image by if <code>do_rescale</code> is set to <code>True</code>.`,name:"rescale_factor"},{anchor:"transformers.DPTImageProcessor.preprocess.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_normalize</code>) &#x2014;
Whether to normalize the image.`,name:"do_normalize"},{anchor:"transformers.DPTImageProcessor.preprocess.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>self.image_mean</code>) &#x2014;
Image mean.`,name:"image_mean"},{anchor:"transformers.DPTImageProcessor.preprocess.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>self.image_std</code>) &#x2014;
Image standard deviation.`,name:"image_std"},{anchor:"transformers.DPTImageProcessor.preprocess.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <code>TensorType</code>, <em>optional</em>) &#x2014;
The type of tensors to return. Can be one of:<ul>
<li>Unset: Return a list of <code>np.ndarray</code>.</li>
<li><code>TensorType.TENSORFLOW</code> or <code>&apos;tf&apos;</code>: Return a batch of type <code>tf.Tensor</code>.</li>
<li><code>TensorType.PYTORCH</code> or <code>&apos;pt&apos;</code>: Return a batch of type <code>torch.Tensor</code>.</li>
<li><code>TensorType.NUMPY</code> or <code>&apos;np&apos;</code>: Return a batch of type <code>np.ndarray</code>.</li>
<li><code>TensorType.JAX</code> or <code>&apos;jax&apos;</code>: Return a batch of type <code>jax.numpy.ndarray</code>.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.DPTImageProcessor.preprocess.data_format",description:`<strong>data_format</strong> (<code>ChannelDimension</code> or <code>str</code>, <em>optional</em>, defaults to <code>ChannelDimension.FIRST</code>) &#x2014;
The channel dimension format for the output image. Can be one of:<ul>
<li><code>ChannelDimension.FIRST</code>: image in (num_channels, height, width) format.</li>
<li><code>ChannelDimension.LAST</code>: image in (height, width, num_channels) format.</li>
</ul>`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/image_processing_dpt.py#L240"}}),Re=new C({props:{name:"post_process_semantic_segmentation",anchor:"transformers.DPTImageProcessor.post_process_semantic_segmentation",parameters:[{name:"outputs",val:""},{name:"target_sizes",val:": typing.List[typing.Tuple] = None"}],parametersDescription:[{anchor:"transformers.DPTImageProcessor.post_process_semantic_segmentation.Converts",description:`<strong>Converts</strong> the output of <a href="/docs/transformers/main/en/model_doc/dpt#transformers.DPTForSemanticSegmentation">DPTForSemanticSegmentation</a> into semantic segmentation maps. Only supports PyTorch. &#x2014;
outputs (<a href="/docs/transformers/main/en/model_doc/dpt#transformers.DPTForSemanticSegmentation">DPTForSemanticSegmentation</a>):
Raw outputs of the model.
target_sizes (<code>List[Tuple]</code> of length <code>batch_size</code>, <em>optional</em>):
List of tuples corresponding to the requested final size (height, width) of each prediction. If unset,
predictions will not be resized.`,name:"Converts"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/image_processing_dpt.py#L346",returnDescription:`
<p><code>List[torch.Tensor]</code> of length <code>batch_size</code>, where each item is a semantic
segmentation map of shape (height, width) corresponding to the target_sizes entry (if <code>target_sizes</code> is
specified). Each entry of each <code>torch.Tensor</code> correspond to a semantic class id.</p>
`,returnType:`
<p>semantic_segmentation</p>
`}}),Ve=new we({}),Oe=new C({props:{name:"class transformers.DPTModel",anchor:"transformers.DPTModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.DPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/modeling_dpt.py#L678"}}),Be=new C({props:{name:"forward",anchor:"transformers.DPTModel.forward",parameters:[{name:"pixel_values",val:""},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DPTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTImageProcessor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DPTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/modeling_dpt.py#L704",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/dpt#transformers.DPTConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),le=new wa({props:{$$slots:{default:[Es]},$$scope:{ctx:x}}}),de=new Fo({props:{anchor:"transformers.DPTModel.forward.example",$$slots:{default:[zs]},$$scope:{ctx:x}}}),He=new we({}),Ge=new C({props:{name:"class transformers.DPTForDepthEstimation",anchor:"transformers.DPTForDepthEstimation",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DPTForDepthEstimation.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/modeling_dpt.py#L859"}}),Je=new C({props:{name:"forward",anchor:"transformers.DPTForDepthEstimation.forward",parameters:[{name:"pixel_values",val:""},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DPTForDepthEstimation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTImageProcessor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DPTForDepthEstimation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DPTForDepthEstimation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DPTForDepthEstimation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DPTForDepthEstimation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DPTForDepthEstimation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth depth estimation maps for computing the loss.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/modeling_dpt.py#L874",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.DepthEstimatorOutput"
>transformers.modeling_outputs.DepthEstimatorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/dpt#transformers.DPTConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.DepthEstimatorOutput"
>transformers.modeling_outputs.DepthEstimatorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),me=new wa({props:{$$slots:{default:[ks]},$$scope:{ctx:x}}}),pe=new Fo({props:{anchor:"transformers.DPTForDepthEstimation.forward.example",$$slots:{default:[Is]},$$scope:{ctx:x}}}),Xe=new we({}),Qe=new C({props:{name:"class transformers.DPTForSemanticSegmentation",anchor:"transformers.DPTForSemanticSegmentation",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DPTForSemanticSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/modeling_dpt.py#L1019"}}),tt=new C({props:{name:"forward",anchor:"transformers.DPTForSemanticSegmentation.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DPTForSemanticSegmentation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTImageProcessor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DPTForSemanticSegmentation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DPTForSemanticSegmentation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DPTForSemanticSegmentation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DPTForSemanticSegmentation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DPTForSemanticSegmentation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth semantic segmentation maps for computing the loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code>, a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/modeling_dpt.py#L1035",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SemanticSegmenterOutput"
>transformers.modeling_outputs.SemanticSegmenterOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/dpt#transformers.DPTConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SemanticSegmenterOutput"
>transformers.modeling_outputs.SemanticSegmenterOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fe=new wa({props:{$$slots:{default:[Fs]},$$scope:{ctx:x}}}),ue=new Fo({props:{anchor:"transformers.DPTForSemanticSegmentation.forward.example",$$slots:{default:[js]},$$scope:{ctx:x}}}),{c(){c=r("meta"),v=m(),_=r("h1"),f=r("a"),T=r("span"),b(n.$$.fragment),u=m(),E=r("span"),So=i("DPT"),Qt=m(),R=r("h2"),Q=r("a"),yt=r("span"),b($e.$$.fragment),Mo=m(),wt=r("span"),qo=i("Overview"),Zt=m(),N=r("p"),Ao=i("The DPT model was proposed in "),xe=r("a"),No=i("Vision Transformers for Dense Prediction"),Lo=i(` by Ren\xE9 Ranftl, Alexey Bochkovskiy, Vladlen Koltun.
DPT is a model that leverages the `),at=r("a"),Ro=i("Vision Transformer (ViT)"),Vo=i(" as backbone for dense prediction tasks like semantic segmentation and depth estimation."),eo=m(),st=r("p"),Oo=i("The abstract from the paper is the following:"),to=m(),nt=r("p"),$t=r("em"),Wo=i("We introduce dense vision transformers, an architecture that leverages vision transformers in place of convolutional networks as a backbone for dense prediction tasks. We assemble tokens from various stages of the vision transformer into image-like representations at various resolutions and progressively combine them into full-resolution predictions using a convolutional decoder. The transformer backbone processes representations at a constant and relatively high resolution and has a global receptive field at every stage. These properties allow the dense vision transformer to provide finer-grained and more globally coherent predictions when compared to fully-convolutional networks. Our experiments show that this architecture yields substantial improvements on dense prediction tasks, especially when a large amount of training data is available. For monocular depth estimation, we observe an improvement of up to 28% in relative performance when compared to a state-of-the-art fully-convolutional network. When applied to semantic segmentation, dense vision transformers set a new state of the art on ADE20K with 49.02% mIoU. We further show that the architecture can be fine-tuned on smaller datasets such as NYUv2, KITTI, and Pascal Context where it also sets the new state of the art."),oo=m(),Z=r("img"),ro=m(),ee=r("small"),Uo=i("DPT architecture. Taken from the "),Ee=r("a"),Bo=i("original paper"),Ho=i("."),ao=m(),L=r("p"),Go=i("This model was contributed by "),ze=r("a"),Ko=i("nielsr"),Yo=i(". The original code can be found "),ke=r("a"),Jo=i("here"),Xo=i("."),so=m(),V=r("h2"),te=r("a"),xt=r("span"),b(Ie.$$.fragment),Qo=m(),Et=r("span"),Zo=i("DPTConfig"),no=m(),z=r("div"),b(Fe.$$.fragment),er=m(),O=r("p"),tr=i("This is the configuration class to store the configuration of a "),it=r("a"),or=i("DPTModel"),rr=i(`. It is used to instantiate an DPT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DPT
`),je=r("a"),ar=i("Intel/dpt-large"),sr=i(" architecture."),nr=m(),W=r("p"),ir=i("Configuration objects inherit from "),lt=r("a"),lr=i("PretrainedConfig"),dr=i(` and can be used to control the model outputs. Read the
documentation from `),dt=r("a"),cr=i("PretrainedConfig"),mr=i(" for more information."),pr=m(),b(oe.$$.fragment),io=m(),U=r("h2"),re=r("a"),zt=r("span"),b(Ce.$$.fragment),hr=m(),kt=r("span"),fr=i("DPTFeatureExtractor"),lo=m(),k=r("div"),b(Se.$$.fragment),ur=m(),It=r("p"),gr=i("Constructs a DPT image processor."),_r=m(),ae=r("div"),b(Me.$$.fragment),Tr=m(),Ft=r("p"),vr=i("Preprocess an image or a batch of images."),br=m(),ct=r("div"),b(qe.$$.fragment),co=m(),B=r("h2"),se=r("a"),jt=r("span"),b(Ae.$$.fragment),Pr=m(),Ct=r("span"),Dr=i("DPTImageProcessor"),mo=m(),I=r("div"),b(Ne.$$.fragment),yr=m(),St=r("p"),wr=i("Constructs a DPT image processor."),$r=m(),ne=r("div"),b(Le.$$.fragment),xr=m(),Mt=r("p"),Er=i("Preprocess an image or batch of images."),zr=m(),mt=r("div"),b(Re.$$.fragment),po=m(),H=r("h2"),ie=r("a"),qt=r("span"),b(Ve.$$.fragment),kr=m(),At=r("span"),Ir=i("DPTModel"),ho=m(),A=r("div"),b(Oe.$$.fragment),Fr=m(),We=r("p"),jr=i(`The bare DPT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ue=r("a"),Cr=i("torch.nn.Module"),Sr=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Mr=m(),S=r("div"),b(Be.$$.fragment),qr=m(),G=r("p"),Ar=i("The "),pt=r("a"),Nr=i("DPTModel"),Lr=i(" forward method, overrides the "),Nt=r("code"),Rr=i("__call__"),Vr=i(" special method."),Or=m(),b(le.$$.fragment),Wr=m(),b(de.$$.fragment),fo=m(),K=r("h2"),ce=r("a"),Lt=r("span"),b(He.$$.fragment),Ur=m(),Rt=r("span"),Br=i("DPTForDepthEstimation"),uo=m(),F=r("div"),b(Ge.$$.fragment),Hr=m(),Vt=r("p"),Gr=i("DPT Model with a depth estimation head on top (consisting of 3 convolutional layers) e.g. for KITTI, NYUv2."),Kr=m(),Ke=r("p"),Yr=i("This model is a PyTorch "),Ye=r("a"),Jr=i("torch.nn.Module"),Xr=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qr=m(),M=r("div"),b(Je.$$.fragment),Zr=m(),Y=r("p"),ea=i("The "),ht=r("a"),ta=i("DPTForDepthEstimation"),oa=i(" forward method, overrides the "),Ot=r("code"),ra=i("__call__"),aa=i(" special method."),sa=m(),b(me.$$.fragment),na=m(),b(pe.$$.fragment),go=m(),J=r("h2"),he=r("a"),Wt=r("span"),b(Xe.$$.fragment),ia=m(),Ut=r("span"),la=i("DPTForSemanticSegmentation"),_o=m(),j=r("div"),b(Qe.$$.fragment),da=m(),Bt=r("p"),ca=i("DPT Model with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),ma=m(),Ze=r("p"),pa=i("This model is a PyTorch "),et=r("a"),ha=i("torch.nn.Module"),fa=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ua=m(),q=r("div"),b(tt.$$.fragment),ga=m(),X=r("p"),_a=i("The "),ft=r("a"),Ta=i("DPTForSemanticSegmentation"),va=i(" forward method, overrides the "),Ht=r("code"),ba=i("__call__"),Pa=i(" special method."),Da=m(),b(fe.$$.fragment),ya=m(),b(ue.$$.fragment),this.h()},l(e){const h=ys('[data-svelte="svelte-1phssyn"]',document.head);c=a(h,"META",{name:!0,content:!0}),h.forEach(o),v=p(e),_=a(e,"H1",{class:!0});var ot=s(_);f=a(ot,"A",{id:!0,class:!0,href:!0});var Gt=s(f);T=a(Gt,"SPAN",{});var Kt=s(T);P(n.$$.fragment,Kt),Kt.forEach(o),Gt.forEach(o),u=p(ot),E=a(ot,"SPAN",{});var Yt=s(E);So=l(Yt,"DPT"),Yt.forEach(o),ot.forEach(o),Qt=p(e),R=a(e,"H2",{class:!0});var rt=s(R);Q=a(rt,"A",{id:!0,class:!0,href:!0});var Jt=s(Q);yt=a(Jt,"SPAN",{});var Xt=s(yt);P($e.$$.fragment,Xt),Xt.forEach(o),Jt.forEach(o),Mo=p(rt),wt=a(rt,"SPAN",{});var xa=s(wt);qo=l(xa,"Overview"),xa.forEach(o),rt.forEach(o),Zt=p(e),N=a(e,"P",{});var ut=s(N);Ao=l(ut,"The DPT model was proposed in "),xe=a(ut,"A",{href:!0,rel:!0});var Ea=s(xe);No=l(Ea,"Vision Transformers for Dense Prediction"),Ea.forEach(o),Lo=l(ut,` by Ren\xE9 Ranftl, Alexey Bochkovskiy, Vladlen Koltun.
DPT is a model that leverages the `),at=a(ut,"A",{href:!0});var za=s(at);Ro=l(za,"Vision Transformer (ViT)"),za.forEach(o),Vo=l(ut," as backbone for dense prediction tasks like semantic segmentation and depth estimation."),ut.forEach(o),eo=p(e),st=a(e,"P",{});var ka=s(st);Oo=l(ka,"The abstract from the paper is the following:"),ka.forEach(o),to=p(e),nt=a(e,"P",{});var Ia=s(nt);$t=a(Ia,"EM",{});var Fa=s($t);Wo=l(Fa,"We introduce dense vision transformers, an architecture that leverages vision transformers in place of convolutional networks as a backbone for dense prediction tasks. We assemble tokens from various stages of the vision transformer into image-like representations at various resolutions and progressively combine them into full-resolution predictions using a convolutional decoder. The transformer backbone processes representations at a constant and relatively high resolution and has a global receptive field at every stage. These properties allow the dense vision transformer to provide finer-grained and more globally coherent predictions when compared to fully-convolutional networks. Our experiments show that this architecture yields substantial improvements on dense prediction tasks, especially when a large amount of training data is available. For monocular depth estimation, we observe an improvement of up to 28% in relative performance when compared to a state-of-the-art fully-convolutional network. When applied to semantic segmentation, dense vision transformers set a new state of the art on ADE20K with 49.02% mIoU. We further show that the architecture can be fine-tuned on smaller datasets such as NYUv2, KITTI, and Pascal Context where it also sets the new state of the art."),Fa.forEach(o),Ia.forEach(o),oo=p(e),Z=a(e,"IMG",{src:!0,alt:!0,width:!0}),ro=p(e),ee=a(e,"SMALL",{});var vo=s(ee);Uo=l(vo,"DPT architecture. Taken from the "),Ee=a(vo,"A",{href:!0,target:!0});var ja=s(Ee);Bo=l(ja,"original paper"),ja.forEach(o),Ho=l(vo,"."),vo.forEach(o),ao=p(e),L=a(e,"P",{});var gt=s(L);Go=l(gt,"This model was contributed by "),ze=a(gt,"A",{href:!0,rel:!0});var Ca=s(ze);Ko=l(Ca,"nielsr"),Ca.forEach(o),Yo=l(gt,". The original code can be found "),ke=a(gt,"A",{href:!0,rel:!0});var Sa=s(ke);Jo=l(Sa,"here"),Sa.forEach(o),Xo=l(gt,"."),gt.forEach(o),so=p(e),V=a(e,"H2",{class:!0});var bo=s(V);te=a(bo,"A",{id:!0,class:!0,href:!0});var Ma=s(te);xt=a(Ma,"SPAN",{});var qa=s(xt);P(Ie.$$.fragment,qa),qa.forEach(o),Ma.forEach(o),Qo=p(bo),Et=a(bo,"SPAN",{});var Aa=s(Et);Zo=l(Aa,"DPTConfig"),Aa.forEach(o),bo.forEach(o),no=p(e),z=a(e,"DIV",{class:!0});var ge=s(z);P(Fe.$$.fragment,ge),er=p(ge),O=a(ge,"P",{});var _t=s(O);tr=l(_t,"This is the configuration class to store the configuration of a "),it=a(_t,"A",{href:!0});var Na=s(it);or=l(Na,"DPTModel"),Na.forEach(o),rr=l(_t,`. It is used to instantiate an DPT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DPT
`),je=a(_t,"A",{href:!0,rel:!0});var La=s(je);ar=l(La,"Intel/dpt-large"),La.forEach(o),sr=l(_t," architecture."),_t.forEach(o),nr=p(ge),W=a(ge,"P",{});var Tt=s(W);ir=l(Tt,"Configuration objects inherit from "),lt=a(Tt,"A",{href:!0});var Ra=s(lt);lr=l(Ra,"PretrainedConfig"),Ra.forEach(o),dr=l(Tt,` and can be used to control the model outputs. Read the
documentation from `),dt=a(Tt,"A",{href:!0});var Va=s(dt);cr=l(Va,"PretrainedConfig"),Va.forEach(o),mr=l(Tt," for more information."),Tt.forEach(o),pr=p(ge),P(oe.$$.fragment,ge),ge.forEach(o),io=p(e),U=a(e,"H2",{class:!0});var Po=s(U);re=a(Po,"A",{id:!0,class:!0,href:!0});var Oa=s(re);zt=a(Oa,"SPAN",{});var Wa=s(zt);P(Ce.$$.fragment,Wa),Wa.forEach(o),Oa.forEach(o),hr=p(Po),kt=a(Po,"SPAN",{});var Ua=s(kt);fr=l(Ua,"DPTFeatureExtractor"),Ua.forEach(o),Po.forEach(o),lo=p(e),k=a(e,"DIV",{class:!0});var _e=s(k);P(Se.$$.fragment,_e),ur=p(_e),It=a(_e,"P",{});var Ba=s(It);gr=l(Ba,"Constructs a DPT image processor."),Ba.forEach(o),_r=p(_e),ae=a(_e,"DIV",{class:!0});var Do=s(ae);P(Me.$$.fragment,Do),Tr=p(Do),Ft=a(Do,"P",{});var Ha=s(Ft);vr=l(Ha,"Preprocess an image or a batch of images."),Ha.forEach(o),Do.forEach(o),br=p(_e),ct=a(_e,"DIV",{class:!0});var Ga=s(ct);P(qe.$$.fragment,Ga),Ga.forEach(o),_e.forEach(o),co=p(e),B=a(e,"H2",{class:!0});var yo=s(B);se=a(yo,"A",{id:!0,class:!0,href:!0});var Ka=s(se);jt=a(Ka,"SPAN",{});var Ya=s(jt);P(Ae.$$.fragment,Ya),Ya.forEach(o),Ka.forEach(o),Pr=p(yo),Ct=a(yo,"SPAN",{});var Ja=s(Ct);Dr=l(Ja,"DPTImageProcessor"),Ja.forEach(o),yo.forEach(o),mo=p(e),I=a(e,"DIV",{class:!0});var Te=s(I);P(Ne.$$.fragment,Te),yr=p(Te),St=a(Te,"P",{});var Xa=s(St);wr=l(Xa,"Constructs a DPT image processor."),Xa.forEach(o),$r=p(Te),ne=a(Te,"DIV",{class:!0});var wo=s(ne);P(Le.$$.fragment,wo),xr=p(wo),Mt=a(wo,"P",{});var Qa=s(Mt);Er=l(Qa,"Preprocess an image or batch of images."),Qa.forEach(o),wo.forEach(o),zr=p(Te),mt=a(Te,"DIV",{class:!0});var Za=s(mt);P(Re.$$.fragment,Za),Za.forEach(o),Te.forEach(o),po=p(e),H=a(e,"H2",{class:!0});var $o=s(H);ie=a($o,"A",{id:!0,class:!0,href:!0});var es=s(ie);qt=a(es,"SPAN",{});var ts=s(qt);P(Ve.$$.fragment,ts),ts.forEach(o),es.forEach(o),kr=p($o),At=a($o,"SPAN",{});var os=s(At);Ir=l(os,"DPTModel"),os.forEach(o),$o.forEach(o),ho=p(e),A=a(e,"DIV",{class:!0});var vt=s(A);P(Oe.$$.fragment,vt),Fr=p(vt),We=a(vt,"P",{});var xo=s(We);jr=l(xo,`The bare DPT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ue=a(xo,"A",{href:!0,rel:!0});var rs=s(Ue);Cr=l(rs,"torch.nn.Module"),rs.forEach(o),Sr=l(xo,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xo.forEach(o),Mr=p(vt),S=a(vt,"DIV",{class:!0});var ve=s(S);P(Be.$$.fragment,ve),qr=p(ve),G=a(ve,"P",{});var bt=s(G);Ar=l(bt,"The "),pt=a(bt,"A",{href:!0});var as=s(pt);Nr=l(as,"DPTModel"),as.forEach(o),Lr=l(bt," forward method, overrides the "),Nt=a(bt,"CODE",{});var ss=s(Nt);Rr=l(ss,"__call__"),ss.forEach(o),Vr=l(bt," special method."),bt.forEach(o),Or=p(ve),P(le.$$.fragment,ve),Wr=p(ve),P(de.$$.fragment,ve),ve.forEach(o),vt.forEach(o),fo=p(e),K=a(e,"H2",{class:!0});var Eo=s(K);ce=a(Eo,"A",{id:!0,class:!0,href:!0});var ns=s(ce);Lt=a(ns,"SPAN",{});var is=s(Lt);P(He.$$.fragment,is),is.forEach(o),ns.forEach(o),Ur=p(Eo),Rt=a(Eo,"SPAN",{});var ls=s(Rt);Br=l(ls,"DPTForDepthEstimation"),ls.forEach(o),Eo.forEach(o),uo=p(e),F=a(e,"DIV",{class:!0});var be=s(F);P(Ge.$$.fragment,be),Hr=p(be),Vt=a(be,"P",{});var ds=s(Vt);Gr=l(ds,"DPT Model with a depth estimation head on top (consisting of 3 convolutional layers) e.g. for KITTI, NYUv2."),ds.forEach(o),Kr=p(be),Ke=a(be,"P",{});var zo=s(Ke);Yr=l(zo,"This model is a PyTorch "),Ye=a(zo,"A",{href:!0,rel:!0});var cs=s(Ye);Jr=l(cs,"torch.nn.Module"),cs.forEach(o),Xr=l(zo,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zo.forEach(o),Qr=p(be),M=a(be,"DIV",{class:!0});var Pe=s(M);P(Je.$$.fragment,Pe),Zr=p(Pe),Y=a(Pe,"P",{});var Pt=s(Y);ea=l(Pt,"The "),ht=a(Pt,"A",{href:!0});var ms=s(ht);ta=l(ms,"DPTForDepthEstimation"),ms.forEach(o),oa=l(Pt," forward method, overrides the "),Ot=a(Pt,"CODE",{});var ps=s(Ot);ra=l(ps,"__call__"),ps.forEach(o),aa=l(Pt," special method."),Pt.forEach(o),sa=p(Pe),P(me.$$.fragment,Pe),na=p(Pe),P(pe.$$.fragment,Pe),Pe.forEach(o),be.forEach(o),go=p(e),J=a(e,"H2",{class:!0});var ko=s(J);he=a(ko,"A",{id:!0,class:!0,href:!0});var hs=s(he);Wt=a(hs,"SPAN",{});var fs=s(Wt);P(Xe.$$.fragment,fs),fs.forEach(o),hs.forEach(o),ia=p(ko),Ut=a(ko,"SPAN",{});var us=s(Ut);la=l(us,"DPTForSemanticSegmentation"),us.forEach(o),ko.forEach(o),_o=p(e),j=a(e,"DIV",{class:!0});var De=s(j);P(Qe.$$.fragment,De),da=p(De),Bt=a(De,"P",{});var gs=s(Bt);ca=l(gs,"DPT Model with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),gs.forEach(o),ma=p(De),Ze=a(De,"P",{});var Io=s(Ze);pa=l(Io,"This model is a PyTorch "),et=a(Io,"A",{href:!0,rel:!0});var _s=s(et);ha=l(_s,"torch.nn.Module"),_s.forEach(o),fa=l(Io,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Io.forEach(o),ua=p(De),q=a(De,"DIV",{class:!0});var ye=s(q);P(tt.$$.fragment,ye),ga=p(ye),X=a(ye,"P",{});var Dt=s(X);_a=l(Dt,"The "),ft=a(Dt,"A",{href:!0});var Ts=s(ft);Ta=l(Ts,"DPTForSemanticSegmentation"),Ts.forEach(o),va=l(Dt," forward method, overrides the "),Ht=a(Dt,"CODE",{});var vs=s(Ht);ba=l(vs,"__call__"),vs.forEach(o),Pa=l(Dt," special method."),Dt.forEach(o),Da=p(ye),P(fe.$$.fragment,ye),ya=p(ye),P(ue.$$.fragment,ye),ye.forEach(o),De.forEach(o),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(Ss)),d(f,"id","dpt"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#dpt"),d(_,"class","relative group"),d(Q,"id","overview"),d(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Q,"href","#overview"),d(R,"class","relative group"),d(xe,"href","https://arxiv.org/abs/2103.13413"),d(xe,"rel","nofollow"),d(at,"href","vit"),ws(Z.src,$a="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/dpt_architecture.jpg")||d(Z,"src",$a),d(Z,"alt","drawing"),d(Z,"width","600"),d(Ee,"href","https://arxiv.org/abs/2103.13413"),d(Ee,"target","_blank"),d(ze,"href","https://huggingface.co/nielsr"),d(ze,"rel","nofollow"),d(ke,"href","https://github.com/isl-org/DPT"),d(ke,"rel","nofollow"),d(te,"id","transformers.DPTConfig"),d(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(te,"href","#transformers.DPTConfig"),d(V,"class","relative group"),d(it,"href","/docs/transformers/main/en/model_doc/dpt#transformers.DPTModel"),d(je,"href","https://huggingface.co/Intel/dpt-large"),d(je,"rel","nofollow"),d(lt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(dt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(re,"id","transformers.DPTImageProcessor"),d(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(re,"href","#transformers.DPTImageProcessor"),d(U,"class","relative group"),d(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(se,"id","transformers.DPTImageProcessor"),d(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(se,"href","#transformers.DPTImageProcessor"),d(B,"class","relative group"),d(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ie,"id","transformers.DPTModel"),d(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ie,"href","#transformers.DPTModel"),d(H,"class","relative group"),d(Ue,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ue,"rel","nofollow"),d(pt,"href","/docs/transformers/main/en/model_doc/dpt#transformers.DPTModel"),d(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ce,"id","transformers.DPTForDepthEstimation"),d(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ce,"href","#transformers.DPTForDepthEstimation"),d(K,"class","relative group"),d(Ye,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ye,"rel","nofollow"),d(ht,"href","/docs/transformers/main/en/model_doc/dpt#transformers.DPTForDepthEstimation"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(he,"id","transformers.DPTForSemanticSegmentation"),d(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(he,"href","#transformers.DPTForSemanticSegmentation"),d(J,"class","relative group"),d(et,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(et,"rel","nofollow"),d(ft,"href","/docs/transformers/main/en/model_doc/dpt#transformers.DPTForSemanticSegmentation"),d(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,h){t(document.head,c),g(e,v,h),g(e,_,h),t(_,f),t(f,T),D(n,T,null),t(_,u),t(_,E),t(E,So),g(e,Qt,h),g(e,R,h),t(R,Q),t(Q,yt),D($e,yt,null),t(R,Mo),t(R,wt),t(wt,qo),g(e,Zt,h),g(e,N,h),t(N,Ao),t(N,xe),t(xe,No),t(N,Lo),t(N,at),t(at,Ro),t(N,Vo),g(e,eo,h),g(e,st,h),t(st,Oo),g(e,to,h),g(e,nt,h),t(nt,$t),t($t,Wo),g(e,oo,h),g(e,Z,h),g(e,ro,h),g(e,ee,h),t(ee,Uo),t(ee,Ee),t(Ee,Bo),t(ee,Ho),g(e,ao,h),g(e,L,h),t(L,Go),t(L,ze),t(ze,Ko),t(L,Yo),t(L,ke),t(ke,Jo),t(L,Xo),g(e,so,h),g(e,V,h),t(V,te),t(te,xt),D(Ie,xt,null),t(V,Qo),t(V,Et),t(Et,Zo),g(e,no,h),g(e,z,h),D(Fe,z,null),t(z,er),t(z,O),t(O,tr),t(O,it),t(it,or),t(O,rr),t(O,je),t(je,ar),t(O,sr),t(z,nr),t(z,W),t(W,ir),t(W,lt),t(lt,lr),t(W,dr),t(W,dt),t(dt,cr),t(W,mr),t(z,pr),D(oe,z,null),g(e,io,h),g(e,U,h),t(U,re),t(re,zt),D(Ce,zt,null),t(U,hr),t(U,kt),t(kt,fr),g(e,lo,h),g(e,k,h),D(Se,k,null),t(k,ur),t(k,It),t(It,gr),t(k,_r),t(k,ae),D(Me,ae,null),t(ae,Tr),t(ae,Ft),t(Ft,vr),t(k,br),t(k,ct),D(qe,ct,null),g(e,co,h),g(e,B,h),t(B,se),t(se,jt),D(Ae,jt,null),t(B,Pr),t(B,Ct),t(Ct,Dr),g(e,mo,h),g(e,I,h),D(Ne,I,null),t(I,yr),t(I,St),t(St,wr),t(I,$r),t(I,ne),D(Le,ne,null),t(ne,xr),t(ne,Mt),t(Mt,Er),t(I,zr),t(I,mt),D(Re,mt,null),g(e,po,h),g(e,H,h),t(H,ie),t(ie,qt),D(Ve,qt,null),t(H,kr),t(H,At),t(At,Ir),g(e,ho,h),g(e,A,h),D(Oe,A,null),t(A,Fr),t(A,We),t(We,jr),t(We,Ue),t(Ue,Cr),t(We,Sr),t(A,Mr),t(A,S),D(Be,S,null),t(S,qr),t(S,G),t(G,Ar),t(G,pt),t(pt,Nr),t(G,Lr),t(G,Nt),t(Nt,Rr),t(G,Vr),t(S,Or),D(le,S,null),t(S,Wr),D(de,S,null),g(e,fo,h),g(e,K,h),t(K,ce),t(ce,Lt),D(He,Lt,null),t(K,Ur),t(K,Rt),t(Rt,Br),g(e,uo,h),g(e,F,h),D(Ge,F,null),t(F,Hr),t(F,Vt),t(Vt,Gr),t(F,Kr),t(F,Ke),t(Ke,Yr),t(Ke,Ye),t(Ye,Jr),t(Ke,Xr),t(F,Qr),t(F,M),D(Je,M,null),t(M,Zr),t(M,Y),t(Y,ea),t(Y,ht),t(ht,ta),t(Y,oa),t(Y,Ot),t(Ot,ra),t(Y,aa),t(M,sa),D(me,M,null),t(M,na),D(pe,M,null),g(e,go,h),g(e,J,h),t(J,he),t(he,Wt),D(Xe,Wt,null),t(J,ia),t(J,Ut),t(Ut,la),g(e,_o,h),g(e,j,h),D(Qe,j,null),t(j,da),t(j,Bt),t(Bt,ca),t(j,ma),t(j,Ze),t(Ze,pa),t(Ze,et),t(et,ha),t(Ze,fa),t(j,ua),t(j,q),D(tt,q,null),t(q,ga),t(q,X),t(X,_a),t(X,ft),t(ft,Ta),t(X,va),t(X,Ht),t(Ht,ba),t(X,Pa),t(q,Da),D(fe,q,null),t(q,ya),D(ue,q,null),To=!0},p(e,[h]){const ot={};h&2&&(ot.$$scope={dirty:h,ctx:e}),oe.$set(ot);const Gt={};h&2&&(Gt.$$scope={dirty:h,ctx:e}),le.$set(Gt);const Kt={};h&2&&(Kt.$$scope={dirty:h,ctx:e}),de.$set(Kt);const Yt={};h&2&&(Yt.$$scope={dirty:h,ctx:e}),me.$set(Yt);const rt={};h&2&&(rt.$$scope={dirty:h,ctx:e}),pe.$set(rt);const Jt={};h&2&&(Jt.$$scope={dirty:h,ctx:e}),fe.$set(Jt);const Xt={};h&2&&(Xt.$$scope={dirty:h,ctx:e}),ue.$set(Xt)},i(e){To||(y(n.$$.fragment,e),y($e.$$.fragment,e),y(Ie.$$.fragment,e),y(Fe.$$.fragment,e),y(oe.$$.fragment,e),y(Ce.$$.fragment,e),y(Se.$$.fragment,e),y(Me.$$.fragment,e),y(qe.$$.fragment,e),y(Ae.$$.fragment,e),y(Ne.$$.fragment,e),y(Le.$$.fragment,e),y(Re.$$.fragment,e),y(Ve.$$.fragment,e),y(Oe.$$.fragment,e),y(Be.$$.fragment,e),y(le.$$.fragment,e),y(de.$$.fragment,e),y(He.$$.fragment,e),y(Ge.$$.fragment,e),y(Je.$$.fragment,e),y(me.$$.fragment,e),y(pe.$$.fragment,e),y(Xe.$$.fragment,e),y(Qe.$$.fragment,e),y(tt.$$.fragment,e),y(fe.$$.fragment,e),y(ue.$$.fragment,e),To=!0)},o(e){w(n.$$.fragment,e),w($e.$$.fragment,e),w(Ie.$$.fragment,e),w(Fe.$$.fragment,e),w(oe.$$.fragment,e),w(Ce.$$.fragment,e),w(Se.$$.fragment,e),w(Me.$$.fragment,e),w(qe.$$.fragment,e),w(Ae.$$.fragment,e),w(Ne.$$.fragment,e),w(Le.$$.fragment,e),w(Re.$$.fragment,e),w(Ve.$$.fragment,e),w(Oe.$$.fragment,e),w(Be.$$.fragment,e),w(le.$$.fragment,e),w(de.$$.fragment,e),w(He.$$.fragment,e),w(Ge.$$.fragment,e),w(Je.$$.fragment,e),w(me.$$.fragment,e),w(pe.$$.fragment,e),w(Xe.$$.fragment,e),w(Qe.$$.fragment,e),w(tt.$$.fragment,e),w(fe.$$.fragment,e),w(ue.$$.fragment,e),To=!1},d(e){o(c),e&&o(v),e&&o(_),$(n),e&&o(Qt),e&&o(R),$($e),e&&o(Zt),e&&o(N),e&&o(eo),e&&o(st),e&&o(to),e&&o(nt),e&&o(oo),e&&o(Z),e&&o(ro),e&&o(ee),e&&o(ao),e&&o(L),e&&o(so),e&&o(V),$(Ie),e&&o(no),e&&o(z),$(Fe),$(oe),e&&o(io),e&&o(U),$(Ce),e&&o(lo),e&&o(k),$(Se),$(Me),$(qe),e&&o(co),e&&o(B),$(Ae),e&&o(mo),e&&o(I),$(Ne),$(Le),$(Re),e&&o(po),e&&o(H),$(Ve),e&&o(ho),e&&o(A),$(Oe),$(Be),$(le),$(de),e&&o(fo),e&&o(K),$(He),e&&o(uo),e&&o(F),$(Ge),$(Je),$(me),$(pe),e&&o(go),e&&o(J),$(Xe),e&&o(_o),e&&o(j),$(Qe),$(tt),$(fe),$(ue)}}}const Ss={local:"dpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.DPTConfig",title:"DPTConfig"},{local:"transformers.DPTImageProcessor",title:"DPTFeatureExtractor"},{local:"transformers.DPTImageProcessor",title:"DPTImageProcessor"},{local:"transformers.DPTModel",title:"DPTModel"},{local:"transformers.DPTForDepthEstimation",title:"DPTForDepthEstimation"},{local:"transformers.DPTForSemanticSegmentation",title:"DPTForSemanticSegmentation"}],title:"DPT"};function Ms(x){return $s(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Os extends bs{constructor(c){super();Ps(this,c,Ms,Cs,Ds,{})}}export{Os as default,Ss as metadata};
