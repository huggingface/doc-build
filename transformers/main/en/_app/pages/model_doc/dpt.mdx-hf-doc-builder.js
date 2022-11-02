import{S as Ws,i as Rs,s as Us,e as s,k as p,w as b,t as i,M as Bs,c as n,d as o,m as h,a as r,x as P,h as l,b as d,N as Hs,G as t,g as _,y as w,q as $,o as D,B as y,v as Ks,L as fo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Xa}from"../../chunks/Tip-hf-doc-builder.js";import{D as N}from"../../chunks/Docstring-hf-doc-builder.js";import{C as uo}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ge}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ho}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Gs(x){let c,T,g,f,v;return f=new uo({props:{code:`from transformers import DPTModel, DPTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=s("p"),T=i("Example:"),g=p(),b(f.$$.fragment)},l(a){c=n(a,"P",{});var u=r(c);T=l(u,"Example:"),u.forEach(o),g=h(a),P(f.$$.fragment,a)},m(a,u){_(a,c,u),t(c,T),_(a,g,u),w(f,a,u),v=!0},p:fo,i(a){v||($(f.$$.fragment,a),v=!0)},o(a){D(f.$$.fragment,a),v=!1},d(a){a&&o(c),a&&o(g),y(f,a)}}}function Ys(x){let c,T,g,f,v;return{c(){c=s("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){c=n(a,"P",{});var u=r(c);T=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(u,"CODE",{});var E=r(g);f=l(E,"Module"),E.forEach(o),v=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(a,u){_(a,c,u),t(c,T),t(c,g),t(g,f),t(c,v)},d(a){a&&o(c)}}}function Js(x){let c,T,g,f,v;return f=new uo({props:{code:`from transformers import DPTFeatureExtractor, DPTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">577</span>, <span class="hljs-number">1024</span>]`}}),{c(){c=s("p"),T=i("Example:"),g=p(),b(f.$$.fragment)},l(a){c=n(a,"P",{});var u=r(c);T=l(u,"Example:"),u.forEach(o),g=h(a),P(f.$$.fragment,a)},m(a,u){_(a,c,u),t(c,T),_(a,g,u),w(f,a,u),v=!0},p:fo,i(a){v||($(f.$$.fragment,a),v=!0)},o(a){D(f.$$.fragment,a),v=!1},d(a){a&&o(c),a&&o(g),y(f,a)}}}function Qs(x){let c,T,g,f,v;return{c(){c=s("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){c=n(a,"P",{});var u=r(c);T=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(u,"CODE",{});var E=r(g);f=l(E,"Module"),E.forEach(o),v=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(a,u){_(a,c,u),t(c,T),t(c,g),t(g,f),t(c,v)},d(a){a&&o(c)}}}function Xs(x){let c,T,g,f,v;return f=new uo({props:{code:`from transformers import DPTFeatureExtractor, DPTForDepthEstimation
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
<span class="hljs-meta">&gt;&gt;&gt; </span>depth = Image.fromarray(formatted)`}}),{c(){c=s("p"),T=i("Examples:"),g=p(),b(f.$$.fragment)},l(a){c=n(a,"P",{});var u=r(c);T=l(u,"Examples:"),u.forEach(o),g=h(a),P(f.$$.fragment,a)},m(a,u){_(a,c,u),t(c,T),_(a,g,u),w(f,a,u),v=!0},p:fo,i(a){v||($(f.$$.fragment,a),v=!0)},o(a){D(f.$$.fragment,a),v=!1},d(a){a&&o(c),a&&o(g),y(f,a)}}}function Zs(x){let c,T,g,f,v;return{c(){c=s("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){c=n(a,"P",{});var u=r(c);T=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(u,"CODE",{});var E=r(g);f=l(E,"Module"),E.forEach(o),v=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(a,u){_(a,c,u),t(c,T),t(c,g),t(g,f),t(c,v)},d(a){a&&o(c)}}}function en(x){let c,T,g,f,v;return f=new uo({props:{code:`from transformers import DPTFeatureExtractor, DPTForSemanticSegmentation
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=s("p"),T=i("Examples:"),g=p(),b(f.$$.fragment)},l(a){c=n(a,"P",{});var u=r(c);T=l(u,"Examples:"),u.forEach(o),g=h(a),P(f.$$.fragment,a)},m(a,u){_(a,c,u),t(c,T),_(a,g,u),w(f,a,u),v=!0},p:fo,i(a){v||($(f.$$.fragment,a),v=!0)},o(a){D(f.$$.fragment,a),v=!1},d(a){a&&o(c),a&&o(g),y(f,a)}}}function tn(x){let c,T,g,f,v,a,u,E,go,Nt,L,J,ht,Te,_o,ft,vo,Lt,q,To,be,bo,Po,Ye,wo,$o,Vt,Je,Do,Ot,Qe,ut,yo,Wt,Q,Za,Rt,X,xo,Pe,Eo,ko,Ut,A,jo,we,Fo,zo,$e,Io,So,Bt,V,Z,gt,De,Co,_t,Mo,Ht,k,ye,qo,O,Ao,Xe,No,Lo,xe,Vo,Oo,Wo,W,Ro,Ze,Uo,Bo,et,Ho,Ko,Go,ee,Kt,R,te,vt,Ee,Yo,Tt,Jo,Gt,j,ke,Qo,bt,Xo,Zo,oe,je,ea,Pt,ta,oa,tt,Fe,Yt,U,ae,wt,ze,aa,$t,sa,Jt,M,Ie,na,Se,ra,Ce,ia,la,da,I,Me,ca,B,ma,ot,pa,ha,Dt,fa,ua,ga,se,_a,ne,Qt,H,re,yt,qe,va,xt,Ta,Xt,F,Ae,ba,Et,Pa,wa,Ne,$a,Le,Da,ya,xa,S,Ve,Ea,K,ka,at,ja,Fa,kt,za,Ia,Sa,ie,Ca,le,Zt,G,de,jt,Oe,Ma,Ft,qa,eo,z,We,Aa,zt,Na,La,Re,Va,Ue,Oa,Wa,Ra,C,Be,Ua,Y,Ba,st,Ha,Ka,It,Ga,Ya,Ja,ce,Qa,me,to;return a=new Ge({}),Te=new Ge({}),De=new Ge({}),ye=new N({props:{name:"class transformers.DPTConfig",anchor:"transformers.DPTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"image_size",val:" = 384"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"backbone_out_indices",val:" = [2, 5, 8, 11]"},{name:"readout_type",val:" = 'project'"},{name:"reassemble_factors",val:" = [4, 2, 1, 0.5]"},{name:"neck_hidden_sizes",val:" = [96, 192, 384, 768]"},{name:"fusion_hidden_size",val:" = 256"},{name:"head_in_index",val:" = -1"},{name:"use_batch_norm_in_fusion_residual",val:" = False"},{name:"use_auxiliary_head",val:" = True"},{name:"auxiliary_loss_weight",val:" = 0.4"},{name:"semantic_loss_ignore_index",val:" = 255"},{name:"semantic_classifier_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DPTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The dropout ratio for the semantic classification head.`,name:"semantic_classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/configuration_dpt.py#L29"}}),ee=new ho({props:{anchor:"transformers.DPTConfig.example",$$slots:{default:[Gs]},$$scope:{ctx:x}}}),Ee=new Ge({}),ke=new N({props:{name:"class transformers.models.dpt.image_processing_dpt.DPTImageProcessor",anchor:"transformers.models.dpt.image_processing_dpt.DPTImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BILINEAR: 2>"},{name:"keep_aspect_ratio",val:": bool = False"},{name:"ensure_multiple_of",val:": int = 1"},{name:"do_rescale",val:": bool = True"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.models.dpt.image_processing_dpt.DPTImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions. Can be overidden by <code>do_resize</code> in <code>preprocess</code>.`,name:"do_resize"},{anchor:"transformers.models.dpt.image_processing_dpt.DPTImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;height&quot; -- 384, &quot;width&quot;: 384}</code>):
Size of the image after resizing. Can be overidden by <code>size</code> in <code>preprocess</code>.`,name:"size"},{anchor:"transformers.models.dpt.image_processing_dpt.DPTImageProcessor.keep_aspect_ratio",description:`<strong>keep_aspect_ratio</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, the image is resized to the largest possible size such that the aspect ratio is preserved. Can
be overidden by <code>keep_aspect_ratio</code> in <code>preprocess</code>.`,name:"keep_aspect_ratio"},{anchor:"transformers.models.dpt.image_processing_dpt.DPTImageProcessor.ensure_multiple_of",description:`<strong>ensure_multiple_of</strong> (<code>int</code>, <em>optional</em>, defaults to <code>1</code>) &#x2014;
If <code>do_resize</code> is <code>True</code>, the image is resized to a size that is a multiple of this value. Can be overidden
by <code>ensure_multiple_of</code> in <code>preprocess</code>.`,name:"ensure_multiple_of"},{anchor:"transformers.models.dpt.image_processing_dpt.DPTImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BILINEAR</code>) &#x2014;
Defines the resampling filter to use if resizing the image. Can be overidden by <code>resample</code> in <code>preprocess</code>.`,name:"resample"},{anchor:"transformers.models.dpt.image_processing_dpt.DPTImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to rescale the image by the specified scale <code>rescale_factor</code>. Can be overidden by <code>do_rescale</code> in
<code>preprocess</code>.`,name:"do_rescale"},{anchor:"transformers.models.dpt.image_processing_dpt.DPTImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>int</code> or <code>float</code>, <em>optional</em>, defaults to <code>1/255</code>) &#x2014;
Scale factor to use if rescaling the image. Can be overidden by <code>rescale_factor</code> in <code>preprocess</code>.`,name:"rescale_factor"},{anchor:"transformers.models.dpt.image_processing_dpt.DPTImageProcessor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize the image. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code>
method.`,name:"do_normalize"},{anchor:"transformers.models.dpt.image_processing_dpt.DPTImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.models.dpt.image_processing_dpt.DPTImageProcessor.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/image_processing_dpt.py#L91"}}),je=new N({props:{name:"__call__",anchor:"transformers.models.dpt.image_processing_dpt.DPTImageProcessor.__call__",parameters:[{name:"images",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/image_processing_utils.py#L52"}}),Fe=new N({props:{name:"post_process_semantic_segmentation",anchor:"transformers.models.dpt.image_processing_dpt.DPTImageProcessor.post_process_semantic_segmentation",parameters:[{name:"outputs",val:""},{name:"target_sizes",val:": typing.List[typing.Tuple] = None"}],parametersDescription:[{anchor:"transformers.models.dpt.image_processing_dpt.DPTImageProcessor.post_process_semantic_segmentation.Converts",description:`<strong>Converts</strong> the output of <a href="/docs/transformers/main/en/model_doc/dpt#transformers.DPTForSemanticSegmentation">DPTForSemanticSegmentation</a> into semantic segmentation maps. Only supports PyTorch. &#x2014;
outputs (<a href="/docs/transformers/main/en/model_doc/dpt#transformers.DPTForSemanticSegmentation">DPTForSemanticSegmentation</a>):
Raw outputs of the model.
target_sizes (<code>List[Tuple]</code> of length <code>batch_size</code>, <em>optional</em>):
List of tuples corresponding to the requested final size (height, width) of each prediction. If unset,
predictions will not be resized.`,name:"Converts"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/image_processing_dpt.py#L345",returnDescription:`
<p><code>List[torch.Tensor]</code> of length <code>batch_size</code>, where each item is a semantic
segmentation map of shape (height, width) corresponding to the target_sizes entry (if <code>target_sizes</code> is
specified). Each entry of each <code>torch.Tensor</code> correspond to a semantic class id.</p>
`,returnType:`
<p>semantic_segmentation</p>
`}}),ze=new Ge({}),Ie=new N({props:{name:"class transformers.DPTModel",anchor:"transformers.DPTModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.DPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/modeling_dpt.py#L678"}}),Me=new N({props:{name:"forward",anchor:"transformers.DPTModel.forward",parameters:[{name:"pixel_values",val:""},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DPTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.models.vit.image_processing_vit.ViTImageProcessor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DPTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),se=new Xa({props:{$$slots:{default:[Ys]},$$scope:{ctx:x}}}),ne=new ho({props:{anchor:"transformers.DPTModel.forward.example",$$slots:{default:[Js]},$$scope:{ctx:x}}}),qe=new Ge({}),Ae=new N({props:{name:"class transformers.DPTForDepthEstimation",anchor:"transformers.DPTForDepthEstimation",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DPTForDepthEstimation.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/modeling_dpt.py#L859"}}),Ve=new N({props:{name:"forward",anchor:"transformers.DPTForDepthEstimation.forward",parameters:[{name:"pixel_values",val:""},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DPTForDepthEstimation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.models.vit.image_processing_vit.ViTImageProcessor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DPTForDepthEstimation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),ie=new Xa({props:{$$slots:{default:[Qs]},$$scope:{ctx:x}}}),le=new ho({props:{anchor:"transformers.DPTForDepthEstimation.forward.example",$$slots:{default:[Xs]},$$scope:{ctx:x}}}),Oe=new Ge({}),We=new N({props:{name:"class transformers.DPTForSemanticSegmentation",anchor:"transformers.DPTForSemanticSegmentation",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DPTForSemanticSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/modeling_dpt.py#L1019"}}),Be=new N({props:{name:"forward",anchor:"transformers.DPTForSemanticSegmentation.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DPTForSemanticSegmentation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.models.vit.image_processing_vit.ViTImageProcessor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DPTForSemanticSegmentation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),ce=new Xa({props:{$$slots:{default:[Zs]},$$scope:{ctx:x}}}),me=new ho({props:{anchor:"transformers.DPTForSemanticSegmentation.forward.example",$$slots:{default:[en]},$$scope:{ctx:x}}}),{c(){c=s("meta"),T=p(),g=s("h1"),f=s("a"),v=s("span"),b(a.$$.fragment),u=p(),E=s("span"),go=i("DPT"),Nt=p(),L=s("h2"),J=s("a"),ht=s("span"),b(Te.$$.fragment),_o=p(),ft=s("span"),vo=i("Overview"),Lt=p(),q=s("p"),To=i("The DPT model was proposed in "),be=s("a"),bo=i("Vision Transformers for Dense Prediction"),Po=i(` by Ren\xE9 Ranftl, Alexey Bochkovskiy, Vladlen Koltun.
DPT is a model that leverages the `),Ye=s("a"),wo=i("Vision Transformer (ViT)"),$o=i(" as backbone for dense prediction tasks like semantic segmentation and depth estimation."),Vt=p(),Je=s("p"),Do=i("The abstract from the paper is the following:"),Ot=p(),Qe=s("p"),ut=s("em"),yo=i("We introduce dense vision transformers, an architecture that leverages vision transformers in place of convolutional networks as a backbone for dense prediction tasks. We assemble tokens from various stages of the vision transformer into image-like representations at various resolutions and progressively combine them into full-resolution predictions using a convolutional decoder. The transformer backbone processes representations at a constant and relatively high resolution and has a global receptive field at every stage. These properties allow the dense vision transformer to provide finer-grained and more globally coherent predictions when compared to fully-convolutional networks. Our experiments show that this architecture yields substantial improvements on dense prediction tasks, especially when a large amount of training data is available. For monocular depth estimation, we observe an improvement of up to 28% in relative performance when compared to a state-of-the-art fully-convolutional network. When applied to semantic segmentation, dense vision transformers set a new state of the art on ADE20K with 49.02% mIoU. We further show that the architecture can be fine-tuned on smaller datasets such as NYUv2, KITTI, and Pascal Context where it also sets the new state of the art."),Wt=p(),Q=s("img"),Rt=p(),X=s("small"),xo=i("DPT architecture. Taken from the "),Pe=s("a"),Eo=i("original paper"),ko=i("."),Ut=p(),A=s("p"),jo=i("This model was contributed by "),we=s("a"),Fo=i("nielsr"),zo=i(". The original code can be found "),$e=s("a"),Io=i("here"),So=i("."),Bt=p(),V=s("h2"),Z=s("a"),gt=s("span"),b(De.$$.fragment),Co=p(),_t=s("span"),Mo=i("DPTConfig"),Ht=p(),k=s("div"),b(ye.$$.fragment),qo=p(),O=s("p"),Ao=i("This is the configuration class to store the configuration of a "),Xe=s("a"),No=i("DPTModel"),Lo=i(`. It is used to instantiate an DPT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DPT
`),xe=s("a"),Vo=i("Intel/dpt-large"),Oo=i(" architecture."),Wo=p(),W=s("p"),Ro=i("Configuration objects inherit from "),Ze=s("a"),Uo=i("PretrainedConfig"),Bo=i(` and can be used to control the model outputs. Read the
documentation from `),et=s("a"),Ho=i("PretrainedConfig"),Ko=i(" for more information."),Go=p(),b(ee.$$.fragment),Kt=p(),R=s("h2"),te=s("a"),vt=s("span"),b(Ee.$$.fragment),Yo=p(),Tt=s("span"),Jo=i("DPTFeatureExtractor"),Gt=p(),j=s("div"),b(ke.$$.fragment),Qo=p(),bt=s("p"),Xo=i("Constructs a DPT image processor."),Zo=p(),oe=s("div"),b(je.$$.fragment),ea=p(),Pt=s("p"),ta=i("Preprocess an image or a batch of images."),oa=p(),tt=s("div"),b(Fe.$$.fragment),Yt=p(),U=s("h2"),ae=s("a"),wt=s("span"),b(ze.$$.fragment),aa=p(),$t=s("span"),sa=i("DPTModel"),Jt=p(),M=s("div"),b(Ie.$$.fragment),na=p(),Se=s("p"),ra=i(`The bare DPT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ce=s("a"),ia=i("torch.nn.Module"),la=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),da=p(),I=s("div"),b(Me.$$.fragment),ca=p(),B=s("p"),ma=i("The "),ot=s("a"),pa=i("DPTModel"),ha=i(" forward method, overrides the "),Dt=s("code"),fa=i("__call__"),ua=i(" special method."),ga=p(),b(se.$$.fragment),_a=p(),b(ne.$$.fragment),Qt=p(),H=s("h2"),re=s("a"),yt=s("span"),b(qe.$$.fragment),va=p(),xt=s("span"),Ta=i("DPTForDepthEstimation"),Xt=p(),F=s("div"),b(Ae.$$.fragment),ba=p(),Et=s("p"),Pa=i("DPT Model with a depth estimation head on top (consisting of 3 convolutional layers) e.g. for KITTI, NYUv2."),wa=p(),Ne=s("p"),$a=i("This model is a PyTorch "),Le=s("a"),Da=i("torch.nn.Module"),ya=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xa=p(),S=s("div"),b(Ve.$$.fragment),Ea=p(),K=s("p"),ka=i("The "),at=s("a"),ja=i("DPTForDepthEstimation"),Fa=i(" forward method, overrides the "),kt=s("code"),za=i("__call__"),Ia=i(" special method."),Sa=p(),b(ie.$$.fragment),Ca=p(),b(le.$$.fragment),Zt=p(),G=s("h2"),de=s("a"),jt=s("span"),b(Oe.$$.fragment),Ma=p(),Ft=s("span"),qa=i("DPTForSemanticSegmentation"),eo=p(),z=s("div"),b(We.$$.fragment),Aa=p(),zt=s("p"),Na=i("DPT Model with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),La=p(),Re=s("p"),Va=i("This model is a PyTorch "),Ue=s("a"),Oa=i("torch.nn.Module"),Wa=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ra=p(),C=s("div"),b(Be.$$.fragment),Ua=p(),Y=s("p"),Ba=i("The "),st=s("a"),Ha=i("DPTForSemanticSegmentation"),Ka=i(" forward method, overrides the "),It=s("code"),Ga=i("__call__"),Ya=i(" special method."),Ja=p(),b(ce.$$.fragment),Qa=p(),b(me.$$.fragment),this.h()},l(e){const m=Bs('[data-svelte="svelte-1phssyn"]',document.head);c=n(m,"META",{name:!0,content:!0}),m.forEach(o),T=h(e),g=n(e,"H1",{class:!0});var He=r(g);f=n(He,"A",{id:!0,class:!0,href:!0});var St=r(f);v=n(St,"SPAN",{});var Ct=r(v);P(a.$$.fragment,Ct),Ct.forEach(o),St.forEach(o),u=h(He),E=n(He,"SPAN",{});var Mt=r(E);go=l(Mt,"DPT"),Mt.forEach(o),He.forEach(o),Nt=h(e),L=n(e,"H2",{class:!0});var Ke=r(L);J=n(Ke,"A",{id:!0,class:!0,href:!0});var qt=r(J);ht=n(qt,"SPAN",{});var At=r(ht);P(Te.$$.fragment,At),At.forEach(o),qt.forEach(o),_o=h(Ke),ft=n(Ke,"SPAN",{});var es=r(ft);vo=l(es,"Overview"),es.forEach(o),Ke.forEach(o),Lt=h(e),q=n(e,"P",{});var nt=r(q);To=l(nt,"The DPT model was proposed in "),be=n(nt,"A",{href:!0,rel:!0});var ts=r(be);bo=l(ts,"Vision Transformers for Dense Prediction"),ts.forEach(o),Po=l(nt,` by Ren\xE9 Ranftl, Alexey Bochkovskiy, Vladlen Koltun.
DPT is a model that leverages the `),Ye=n(nt,"A",{href:!0});var os=r(Ye);wo=l(os,"Vision Transformer (ViT)"),os.forEach(o),$o=l(nt," as backbone for dense prediction tasks like semantic segmentation and depth estimation."),nt.forEach(o),Vt=h(e),Je=n(e,"P",{});var as=r(Je);Do=l(as,"The abstract from the paper is the following:"),as.forEach(o),Ot=h(e),Qe=n(e,"P",{});var ss=r(Qe);ut=n(ss,"EM",{});var ns=r(ut);yo=l(ns,"We introduce dense vision transformers, an architecture that leverages vision transformers in place of convolutional networks as a backbone for dense prediction tasks. We assemble tokens from various stages of the vision transformer into image-like representations at various resolutions and progressively combine them into full-resolution predictions using a convolutional decoder. The transformer backbone processes representations at a constant and relatively high resolution and has a global receptive field at every stage. These properties allow the dense vision transformer to provide finer-grained and more globally coherent predictions when compared to fully-convolutional networks. Our experiments show that this architecture yields substantial improvements on dense prediction tasks, especially when a large amount of training data is available. For monocular depth estimation, we observe an improvement of up to 28% in relative performance when compared to a state-of-the-art fully-convolutional network. When applied to semantic segmentation, dense vision transformers set a new state of the art on ADE20K with 49.02% mIoU. We further show that the architecture can be fine-tuned on smaller datasets such as NYUv2, KITTI, and Pascal Context where it also sets the new state of the art."),ns.forEach(o),ss.forEach(o),Wt=h(e),Q=n(e,"IMG",{src:!0,alt:!0,width:!0}),Rt=h(e),X=n(e,"SMALL",{});var oo=r(X);xo=l(oo,"DPT architecture. Taken from the "),Pe=n(oo,"A",{href:!0,target:!0});var rs=r(Pe);Eo=l(rs,"original paper"),rs.forEach(o),ko=l(oo,"."),oo.forEach(o),Ut=h(e),A=n(e,"P",{});var rt=r(A);jo=l(rt,"This model was contributed by "),we=n(rt,"A",{href:!0,rel:!0});var is=r(we);Fo=l(is,"nielsr"),is.forEach(o),zo=l(rt,". The original code can be found "),$e=n(rt,"A",{href:!0,rel:!0});var ls=r($e);Io=l(ls,"here"),ls.forEach(o),So=l(rt,"."),rt.forEach(o),Bt=h(e),V=n(e,"H2",{class:!0});var ao=r(V);Z=n(ao,"A",{id:!0,class:!0,href:!0});var ds=r(Z);gt=n(ds,"SPAN",{});var cs=r(gt);P(De.$$.fragment,cs),cs.forEach(o),ds.forEach(o),Co=h(ao),_t=n(ao,"SPAN",{});var ms=r(_t);Mo=l(ms,"DPTConfig"),ms.forEach(o),ao.forEach(o),Ht=h(e),k=n(e,"DIV",{class:!0});var pe=r(k);P(ye.$$.fragment,pe),qo=h(pe),O=n(pe,"P",{});var it=r(O);Ao=l(it,"This is the configuration class to store the configuration of a "),Xe=n(it,"A",{href:!0});var ps=r(Xe);No=l(ps,"DPTModel"),ps.forEach(o),Lo=l(it,`. It is used to instantiate an DPT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DPT
`),xe=n(it,"A",{href:!0,rel:!0});var hs=r(xe);Vo=l(hs,"Intel/dpt-large"),hs.forEach(o),Oo=l(it," architecture."),it.forEach(o),Wo=h(pe),W=n(pe,"P",{});var lt=r(W);Ro=l(lt,"Configuration objects inherit from "),Ze=n(lt,"A",{href:!0});var fs=r(Ze);Uo=l(fs,"PretrainedConfig"),fs.forEach(o),Bo=l(lt,` and can be used to control the model outputs. Read the
documentation from `),et=n(lt,"A",{href:!0});var us=r(et);Ho=l(us,"PretrainedConfig"),us.forEach(o),Ko=l(lt," for more information."),lt.forEach(o),Go=h(pe),P(ee.$$.fragment,pe),pe.forEach(o),Kt=h(e),R=n(e,"H2",{class:!0});var so=r(R);te=n(so,"A",{id:!0,class:!0,href:!0});var gs=r(te);vt=n(gs,"SPAN",{});var _s=r(vt);P(Ee.$$.fragment,_s),_s.forEach(o),gs.forEach(o),Yo=h(so),Tt=n(so,"SPAN",{});var vs=r(Tt);Jo=l(vs,"DPTFeatureExtractor"),vs.forEach(o),so.forEach(o),Gt=h(e),j=n(e,"DIV",{class:!0});var he=r(j);P(ke.$$.fragment,he),Qo=h(he),bt=n(he,"P",{});var Ts=r(bt);Xo=l(Ts,"Constructs a DPT image processor."),Ts.forEach(o),Zo=h(he),oe=n(he,"DIV",{class:!0});var no=r(oe);P(je.$$.fragment,no),ea=h(no),Pt=n(no,"P",{});var bs=r(Pt);ta=l(bs,"Preprocess an image or a batch of images."),bs.forEach(o),no.forEach(o),oa=h(he),tt=n(he,"DIV",{class:!0});var Ps=r(tt);P(Fe.$$.fragment,Ps),Ps.forEach(o),he.forEach(o),Yt=h(e),U=n(e,"H2",{class:!0});var ro=r(U);ae=n(ro,"A",{id:!0,class:!0,href:!0});var ws=r(ae);wt=n(ws,"SPAN",{});var $s=r(wt);P(ze.$$.fragment,$s),$s.forEach(o),ws.forEach(o),aa=h(ro),$t=n(ro,"SPAN",{});var Ds=r($t);sa=l(Ds,"DPTModel"),Ds.forEach(o),ro.forEach(o),Jt=h(e),M=n(e,"DIV",{class:!0});var dt=r(M);P(Ie.$$.fragment,dt),na=h(dt),Se=n(dt,"P",{});var io=r(Se);ra=l(io,`The bare DPT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ce=n(io,"A",{href:!0,rel:!0});var ys=r(Ce);ia=l(ys,"torch.nn.Module"),ys.forEach(o),la=l(io,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),io.forEach(o),da=h(dt),I=n(dt,"DIV",{class:!0});var fe=r(I);P(Me.$$.fragment,fe),ca=h(fe),B=n(fe,"P",{});var ct=r(B);ma=l(ct,"The "),ot=n(ct,"A",{href:!0});var xs=r(ot);pa=l(xs,"DPTModel"),xs.forEach(o),ha=l(ct," forward method, overrides the "),Dt=n(ct,"CODE",{});var Es=r(Dt);fa=l(Es,"__call__"),Es.forEach(o),ua=l(ct," special method."),ct.forEach(o),ga=h(fe),P(se.$$.fragment,fe),_a=h(fe),P(ne.$$.fragment,fe),fe.forEach(o),dt.forEach(o),Qt=h(e),H=n(e,"H2",{class:!0});var lo=r(H);re=n(lo,"A",{id:!0,class:!0,href:!0});var ks=r(re);yt=n(ks,"SPAN",{});var js=r(yt);P(qe.$$.fragment,js),js.forEach(o),ks.forEach(o),va=h(lo),xt=n(lo,"SPAN",{});var Fs=r(xt);Ta=l(Fs,"DPTForDepthEstimation"),Fs.forEach(o),lo.forEach(o),Xt=h(e),F=n(e,"DIV",{class:!0});var ue=r(F);P(Ae.$$.fragment,ue),ba=h(ue),Et=n(ue,"P",{});var zs=r(Et);Pa=l(zs,"DPT Model with a depth estimation head on top (consisting of 3 convolutional layers) e.g. for KITTI, NYUv2."),zs.forEach(o),wa=h(ue),Ne=n(ue,"P",{});var co=r(Ne);$a=l(co,"This model is a PyTorch "),Le=n(co,"A",{href:!0,rel:!0});var Is=r(Le);Da=l(Is,"torch.nn.Module"),Is.forEach(o),ya=l(co,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),co.forEach(o),xa=h(ue),S=n(ue,"DIV",{class:!0});var ge=r(S);P(Ve.$$.fragment,ge),Ea=h(ge),K=n(ge,"P",{});var mt=r(K);ka=l(mt,"The "),at=n(mt,"A",{href:!0});var Ss=r(at);ja=l(Ss,"DPTForDepthEstimation"),Ss.forEach(o),Fa=l(mt," forward method, overrides the "),kt=n(mt,"CODE",{});var Cs=r(kt);za=l(Cs,"__call__"),Cs.forEach(o),Ia=l(mt," special method."),mt.forEach(o),Sa=h(ge),P(ie.$$.fragment,ge),Ca=h(ge),P(le.$$.fragment,ge),ge.forEach(o),ue.forEach(o),Zt=h(e),G=n(e,"H2",{class:!0});var mo=r(G);de=n(mo,"A",{id:!0,class:!0,href:!0});var Ms=r(de);jt=n(Ms,"SPAN",{});var qs=r(jt);P(Oe.$$.fragment,qs),qs.forEach(o),Ms.forEach(o),Ma=h(mo),Ft=n(mo,"SPAN",{});var As=r(Ft);qa=l(As,"DPTForSemanticSegmentation"),As.forEach(o),mo.forEach(o),eo=h(e),z=n(e,"DIV",{class:!0});var _e=r(z);P(We.$$.fragment,_e),Aa=h(_e),zt=n(_e,"P",{});var Ns=r(zt);Na=l(Ns,"DPT Model with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),Ns.forEach(o),La=h(_e),Re=n(_e,"P",{});var po=r(Re);Va=l(po,"This model is a PyTorch "),Ue=n(po,"A",{href:!0,rel:!0});var Ls=r(Ue);Oa=l(Ls,"torch.nn.Module"),Ls.forEach(o),Wa=l(po,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),po.forEach(o),Ra=h(_e),C=n(_e,"DIV",{class:!0});var ve=r(C);P(Be.$$.fragment,ve),Ua=h(ve),Y=n(ve,"P",{});var pt=r(Y);Ba=l(pt,"The "),st=n(pt,"A",{href:!0});var Vs=r(st);Ha=l(Vs,"DPTForSemanticSegmentation"),Vs.forEach(o),Ka=l(pt," forward method, overrides the "),It=n(pt,"CODE",{});var Os=r(It);Ga=l(Os,"__call__"),Os.forEach(o),Ya=l(pt," special method."),pt.forEach(o),Ja=h(ve),P(ce.$$.fragment,ve),Qa=h(ve),P(me.$$.fragment,ve),ve.forEach(o),_e.forEach(o),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(on)),d(f,"id","dpt"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#dpt"),d(g,"class","relative group"),d(J,"id","overview"),d(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(J,"href","#overview"),d(L,"class","relative group"),d(be,"href","https://arxiv.org/abs/2103.13413"),d(be,"rel","nofollow"),d(Ye,"href","vit"),Hs(Q.src,Za="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/dpt_architecture.jpg")||d(Q,"src",Za),d(Q,"alt","drawing"),d(Q,"width","600"),d(Pe,"href","https://arxiv.org/abs/2103.13413"),d(Pe,"target","_blank"),d(we,"href","https://huggingface.co/nielsr"),d(we,"rel","nofollow"),d($e,"href","https://github.com/isl-org/DPT"),d($e,"rel","nofollow"),d(Z,"id","transformers.DPTConfig"),d(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Z,"href","#transformers.DPTConfig"),d(V,"class","relative group"),d(Xe,"href","/docs/transformers/main/en/model_doc/dpt#transformers.DPTModel"),d(xe,"href","https://huggingface.co/Intel/dpt-large"),d(xe,"rel","nofollow"),d(Ze,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(et,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(te,"id","transformers.models.dpt.image_processing_dpt.DPTImageProcessor"),d(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(te,"href","#transformers.models.dpt.image_processing_dpt.DPTImageProcessor"),d(R,"class","relative group"),d(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ae,"id","transformers.DPTModel"),d(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ae,"href","#transformers.DPTModel"),d(U,"class","relative group"),d(Ce,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ce,"rel","nofollow"),d(ot,"href","/docs/transformers/main/en/model_doc/dpt#transformers.DPTModel"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(re,"id","transformers.DPTForDepthEstimation"),d(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(re,"href","#transformers.DPTForDepthEstimation"),d(H,"class","relative group"),d(Le,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Le,"rel","nofollow"),d(at,"href","/docs/transformers/main/en/model_doc/dpt#transformers.DPTForDepthEstimation"),d(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(de,"id","transformers.DPTForSemanticSegmentation"),d(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(de,"href","#transformers.DPTForSemanticSegmentation"),d(G,"class","relative group"),d(Ue,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ue,"rel","nofollow"),d(st,"href","/docs/transformers/main/en/model_doc/dpt#transformers.DPTForSemanticSegmentation"),d(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,m){t(document.head,c),_(e,T,m),_(e,g,m),t(g,f),t(f,v),w(a,v,null),t(g,u),t(g,E),t(E,go),_(e,Nt,m),_(e,L,m),t(L,J),t(J,ht),w(Te,ht,null),t(L,_o),t(L,ft),t(ft,vo),_(e,Lt,m),_(e,q,m),t(q,To),t(q,be),t(be,bo),t(q,Po),t(q,Ye),t(Ye,wo),t(q,$o),_(e,Vt,m),_(e,Je,m),t(Je,Do),_(e,Ot,m),_(e,Qe,m),t(Qe,ut),t(ut,yo),_(e,Wt,m),_(e,Q,m),_(e,Rt,m),_(e,X,m),t(X,xo),t(X,Pe),t(Pe,Eo),t(X,ko),_(e,Ut,m),_(e,A,m),t(A,jo),t(A,we),t(we,Fo),t(A,zo),t(A,$e),t($e,Io),t(A,So),_(e,Bt,m),_(e,V,m),t(V,Z),t(Z,gt),w(De,gt,null),t(V,Co),t(V,_t),t(_t,Mo),_(e,Ht,m),_(e,k,m),w(ye,k,null),t(k,qo),t(k,O),t(O,Ao),t(O,Xe),t(Xe,No),t(O,Lo),t(O,xe),t(xe,Vo),t(O,Oo),t(k,Wo),t(k,W),t(W,Ro),t(W,Ze),t(Ze,Uo),t(W,Bo),t(W,et),t(et,Ho),t(W,Ko),t(k,Go),w(ee,k,null),_(e,Kt,m),_(e,R,m),t(R,te),t(te,vt),w(Ee,vt,null),t(R,Yo),t(R,Tt),t(Tt,Jo),_(e,Gt,m),_(e,j,m),w(ke,j,null),t(j,Qo),t(j,bt),t(bt,Xo),t(j,Zo),t(j,oe),w(je,oe,null),t(oe,ea),t(oe,Pt),t(Pt,ta),t(j,oa),t(j,tt),w(Fe,tt,null),_(e,Yt,m),_(e,U,m),t(U,ae),t(ae,wt),w(ze,wt,null),t(U,aa),t(U,$t),t($t,sa),_(e,Jt,m),_(e,M,m),w(Ie,M,null),t(M,na),t(M,Se),t(Se,ra),t(Se,Ce),t(Ce,ia),t(Se,la),t(M,da),t(M,I),w(Me,I,null),t(I,ca),t(I,B),t(B,ma),t(B,ot),t(ot,pa),t(B,ha),t(B,Dt),t(Dt,fa),t(B,ua),t(I,ga),w(se,I,null),t(I,_a),w(ne,I,null),_(e,Qt,m),_(e,H,m),t(H,re),t(re,yt),w(qe,yt,null),t(H,va),t(H,xt),t(xt,Ta),_(e,Xt,m),_(e,F,m),w(Ae,F,null),t(F,ba),t(F,Et),t(Et,Pa),t(F,wa),t(F,Ne),t(Ne,$a),t(Ne,Le),t(Le,Da),t(Ne,ya),t(F,xa),t(F,S),w(Ve,S,null),t(S,Ea),t(S,K),t(K,ka),t(K,at),t(at,ja),t(K,Fa),t(K,kt),t(kt,za),t(K,Ia),t(S,Sa),w(ie,S,null),t(S,Ca),w(le,S,null),_(e,Zt,m),_(e,G,m),t(G,de),t(de,jt),w(Oe,jt,null),t(G,Ma),t(G,Ft),t(Ft,qa),_(e,eo,m),_(e,z,m),w(We,z,null),t(z,Aa),t(z,zt),t(zt,Na),t(z,La),t(z,Re),t(Re,Va),t(Re,Ue),t(Ue,Oa),t(Re,Wa),t(z,Ra),t(z,C),w(Be,C,null),t(C,Ua),t(C,Y),t(Y,Ba),t(Y,st),t(st,Ha),t(Y,Ka),t(Y,It),t(It,Ga),t(Y,Ya),t(C,Ja),w(ce,C,null),t(C,Qa),w(me,C,null),to=!0},p(e,[m]){const He={};m&2&&(He.$$scope={dirty:m,ctx:e}),ee.$set(He);const St={};m&2&&(St.$$scope={dirty:m,ctx:e}),se.$set(St);const Ct={};m&2&&(Ct.$$scope={dirty:m,ctx:e}),ne.$set(Ct);const Mt={};m&2&&(Mt.$$scope={dirty:m,ctx:e}),ie.$set(Mt);const Ke={};m&2&&(Ke.$$scope={dirty:m,ctx:e}),le.$set(Ke);const qt={};m&2&&(qt.$$scope={dirty:m,ctx:e}),ce.$set(qt);const At={};m&2&&(At.$$scope={dirty:m,ctx:e}),me.$set(At)},i(e){to||($(a.$$.fragment,e),$(Te.$$.fragment,e),$(De.$$.fragment,e),$(ye.$$.fragment,e),$(ee.$$.fragment,e),$(Ee.$$.fragment,e),$(ke.$$.fragment,e),$(je.$$.fragment,e),$(Fe.$$.fragment,e),$(ze.$$.fragment,e),$(Ie.$$.fragment,e),$(Me.$$.fragment,e),$(se.$$.fragment,e),$(ne.$$.fragment,e),$(qe.$$.fragment,e),$(Ae.$$.fragment,e),$(Ve.$$.fragment,e),$(ie.$$.fragment,e),$(le.$$.fragment,e),$(Oe.$$.fragment,e),$(We.$$.fragment,e),$(Be.$$.fragment,e),$(ce.$$.fragment,e),$(me.$$.fragment,e),to=!0)},o(e){D(a.$$.fragment,e),D(Te.$$.fragment,e),D(De.$$.fragment,e),D(ye.$$.fragment,e),D(ee.$$.fragment,e),D(Ee.$$.fragment,e),D(ke.$$.fragment,e),D(je.$$.fragment,e),D(Fe.$$.fragment,e),D(ze.$$.fragment,e),D(Ie.$$.fragment,e),D(Me.$$.fragment,e),D(se.$$.fragment,e),D(ne.$$.fragment,e),D(qe.$$.fragment,e),D(Ae.$$.fragment,e),D(Ve.$$.fragment,e),D(ie.$$.fragment,e),D(le.$$.fragment,e),D(Oe.$$.fragment,e),D(We.$$.fragment,e),D(Be.$$.fragment,e),D(ce.$$.fragment,e),D(me.$$.fragment,e),to=!1},d(e){o(c),e&&o(T),e&&o(g),y(a),e&&o(Nt),e&&o(L),y(Te),e&&o(Lt),e&&o(q),e&&o(Vt),e&&o(Je),e&&o(Ot),e&&o(Qe),e&&o(Wt),e&&o(Q),e&&o(Rt),e&&o(X),e&&o(Ut),e&&o(A),e&&o(Bt),e&&o(V),y(De),e&&o(Ht),e&&o(k),y(ye),y(ee),e&&o(Kt),e&&o(R),y(Ee),e&&o(Gt),e&&o(j),y(ke),y(je),y(Fe),e&&o(Yt),e&&o(U),y(ze),e&&o(Jt),e&&o(M),y(Ie),y(Me),y(se),y(ne),e&&o(Qt),e&&o(H),y(qe),e&&o(Xt),e&&o(F),y(Ae),y(Ve),y(ie),y(le),e&&o(Zt),e&&o(G),y(Oe),e&&o(eo),e&&o(z),y(We),y(Be),y(ce),y(me)}}}const on={local:"dpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.DPTConfig",title:"DPTConfig"},{local:"transformers.models.dpt.image_processing_dpt.DPTImageProcessor",title:"DPTFeatureExtractor"},{local:"transformers.DPTModel",title:"DPTModel"},{local:"transformers.DPTForDepthEstimation",title:"DPTForDepthEstimation"},{local:"transformers.DPTForSemanticSegmentation",title:"DPTForSemanticSegmentation"}],title:"DPT"};function an(x){return Ks(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class mn extends Ws{constructor(c){super();Rs(this,c,an,tn,Us,{})}}export{mn as default,on as metadata};
