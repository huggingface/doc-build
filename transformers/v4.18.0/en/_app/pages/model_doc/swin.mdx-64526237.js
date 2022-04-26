import{S as la,i as da,s as ca,e as n,k as m,w as b,t as a,M as ha,c as s,d as o,m as f,a as i,x as $,h as r,b as c,N as pa,F as e,g as _,y as S,q as T,o as y,B as x,v as ma,L as uo}from"../../chunks/vendor-6b77c823.js";import{T as us}from"../../chunks/Tip-39098574.js";import{D as He}from"../../chunks/Docstring-1088f2fb.js";import{C as go}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as dt}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as fo}from"../../chunks/ExampleCodeBlock-5212b321.js";function fa(M){let d,w;return d=new go({props:{code:`from transformers import SwinModel, SwinConfig

# Initializing a Swin microsoft/swin-tiny-patch4-window7-224 style configuration
configuration = SwinConfig()

# Initializing a model from the microsoft/swin-tiny-patch4-window7-224 style configuration
model = SwinModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SwinModel, SwinConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Swin microsoft/swin-tiny-patch4-window7-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = SwinConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the microsoft/swin-tiny-patch4-window7-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SwinModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){b(d.$$.fragment)},l(p){$(d.$$.fragment,p)},m(p,u){S(d,p,u),w=!0},p:uo,i(p){w||(T(d.$$.fragment,p),w=!0)},o(p){y(d.$$.fragment,p),w=!1},d(p){x(d,p)}}}function ua(M){let d,w,p,u,v;return{c(){d=n("p"),w=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=i(d);w=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(g,"CODE",{});var F=i(p);u=r(F,"Module"),F.forEach(o),v=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(l,g){_(l,d,g),e(d,w),e(d,p),e(p,u),e(d,v)},d(l){l&&o(d)}}}function ga(M){let d,w,p,u,v;return u=new go({props:{code:`from transformers import AutoFeatureExtractor, SwinModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swin-tiny-patch4-window7-224")
model = SwinModel.from_pretrained("microsoft/swin-tiny-patch4-window7-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, SwinModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SwinModel.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">49</span>, <span class="hljs-number">768</span>]`}}),{c(){d=n("p"),w=a("Example:"),p=m(),b(u.$$.fragment)},l(l){d=s(l,"P",{});var g=i(d);w=r(g,"Example:"),g.forEach(o),p=f(l),$(u.$$.fragment,l)},m(l,g){_(l,d,g),e(d,w),_(l,p,g),S(u,l,g),v=!0},p:uo,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){y(u.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(p),x(u,l)}}}function _a(M){let d,w,p,u,v;return{c(){d=n("p"),w=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=i(d);w=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(g,"CODE",{});var F=i(p);u=r(F,"Module"),F.forEach(o),v=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(l,g){_(l,d,g),e(d,w),e(d,p),e(p,u),e(d,v)},d(l){l&&o(d)}}}function wa(M){let d,w,p,u,v;return u=new go({props:{code:`from transformers import AutoFeatureExtractor, SwinForMaskedImageModeling
import torch
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swin-tiny-patch4-window7-224")
model = SwinForMaskedImageModeling.from_pretrained("microsoft/swin-tiny-patch4-window7-224")

num_patches = (model.config.image_size // model.config.patch_size) ** 2
pixel_values = feature_extractor(images=image, return_tensors="pt").pixel_values
# create random boolean mask of shape (batch_size, num_patches)
bool_masked_pos = torch.randint(low=0, high=2, size=(1, num_patches)).bool()

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss, reconstructed_pixel_values = outputs.loss, outputs.logits
list(reconstructed_pixel_values.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, SwinForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SwinForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = torch.randint(low=<span class="hljs-number">0</span>, high=<span class="hljs-number">2</span>, size=(<span class="hljs-number">1</span>, num_patches)).<span class="hljs-built_in">bool</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=n("p"),w=a("Examples:"),p=m(),b(u.$$.fragment)},l(l){d=s(l,"P",{});var g=i(d);w=r(g,"Examples:"),g.forEach(o),p=f(l),$(u.$$.fragment,l)},m(l,g){_(l,d,g),e(d,w),_(l,p,g),S(u,l,g),v=!0},p:uo,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){y(u.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(p),x(u,l)}}}function va(M){let d,w,p,u,v;return{c(){d=n("p"),w=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=i(d);w=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(g,"CODE",{});var F=i(p);u=r(F,"Module"),F.forEach(o),v=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(l,g){_(l,d,g),e(d,w),e(d,p),e(p,u),e(d,v)},d(l){l&&o(d)}}}function ba(M){let d,w,p,u,v;return u=new go({props:{code:`from transformers import AutoFeatureExtractor, SwinForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swin-tiny-patch4-window7-224")
model = SwinForImageClassification.from_pretrained("microsoft/swin-tiny-patch4-window7-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, SwinForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SwinForImageClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tabby, tabby cat`}}),{c(){d=n("p"),w=a("Example:"),p=m(),b(u.$$.fragment)},l(l){d=s(l,"P",{});var g=i(d);w=r(g,"Example:"),g.forEach(o),p=f(l),$(u.$$.fragment,l)},m(l,g){_(l,d,g),e(d,w),_(l,p,g),S(u,l,g),v=!0},p:uo,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){y(u.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(p),x(u,l)}}}function $a(M){let d,w,p,u,v,l,g,F,_o,Lt,N,J,ct,ge,wo,ht,vo,Ht,L,bo,_e,$o,So,To,Wt,We,yo,Ut,Ue,pt,xo,Vt,Ve,ko,Bt,O,we,Mo,Be,Eo,Fo,Co,ve,jo,mt,Io,Ao,Po,k,qo,ft,zo,Oo,ut,Do,No,gt,Lo,Ho,_t,Wo,Uo,wt,Vo,Bo,vt,Ko,Ro,bt,Yo,Zo,Kt,Q,gs,Rt,X,Go,Ke,Jo,Qo,Yt,D,Xo,be,en,tn,$e,on,nn,Zt,H,ee,$t,Se,sn,St,an,Gt,C,Te,rn,W,ln,Re,dn,cn,ye,hn,pn,mn,U,fn,Ye,un,gn,Ze,_n,wn,vn,te,Jt,V,oe,Tt,xe,bn,yt,$n,Qt,q,ke,Sn,Me,Tn,Ee,yn,xn,kn,I,Fe,Mn,B,En,Ge,Fn,Cn,xt,jn,In,An,ne,Pn,se,Xt,K,ae,kt,Ce,qn,Mt,zn,eo,z,je,On,R,Dn,Et,Nn,Ln,Ie,Hn,Wn,Un,A,Ae,Vn,Y,Bn,Je,Kn,Rn,Ft,Yn,Zn,Gn,re,Jn,ie,to,Z,le,Ct,Pe,Qn,jt,Xn,oo,j,qe,es,It,ts,os,ze,ns,Oe,ss,as,rs,P,De,is,G,ls,Qe,ds,cs,At,hs,ps,ms,de,fs,ce,no;return l=new dt({}),ge=new dt({}),Se=new dt({}),Te=new He({props:{name:"class transformers.SwinConfig",anchor:"transformers.SwinConfig",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 4"},{name:"num_channels",val:" = 3"},{name:"embed_dim",val:" = 96"},{name:"depths",val:" = [2, 2, 6, 2]"},{name:"num_heads",val:" = [3, 6, 12, 24]"},{name:"window_size",val:" = 7"},{name:"mlp_ratio",val:" = 4.0"},{name:"qkv_bias",val:" = True"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"drop_path_rate",val:" = 0.1"},{name:"hidden_act",val:" = 'gelu'"},{name:"use_absolute_embeddings",val:" = False"},{name:"patch_norm",val:" = True"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"encoder_stride",val:" = 32"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SwinConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.SwinConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.SwinConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.SwinConfig.embed_dim",description:`<strong>embed_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 96) &#x2014;
Dimensionality of patch embedding.`,name:"embed_dim"},{anchor:"transformers.SwinConfig.depths",description:`<strong>depths</strong> (<code>list(int)</code>, <em>optional</em>, defaults to [2, 2, 6, 2]) &#x2014;
Depth of each layer in the Transformer encoder.`,name:"depths"},{anchor:"transformers.SwinConfig.num_heads",description:`<strong>num_heads</strong> (<code>list(int)</code>, <em>optional</em>, defaults to [3, 6, 12, 24]) &#x2014;
Number of attention heads in each layer of the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.SwinConfig.window_size",description:`<strong>window_size</strong> (<code>int</code>, <em>optional</em>, defaults to 7) &#x2014;
Size of windows.`,name:"window_size"},{anchor:"transformers.SwinConfig.mlp_ratio",description:`<strong>mlp_ratio</strong> (<code>float</code>, <em>optional</em>, defaults to 4.0) &#x2014;
Ratio of MLP hidden dimensionality to embedding dimensionality.`,name:"mlp_ratio"},{anchor:"transformers.SwinConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to True) &#x2014;
Whether or not a learnable bias should be added to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.SwinConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for all fully connected layers in the embeddings and encoder.`,name:"hidden_dropout_prob"},{anchor:"transformers.SwinConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.SwinConfig.drop_path_rate",description:`<strong>drop_path_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Stochastic depth rate.`,name:"drop_path_rate"},{anchor:"transformers.SwinConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder. If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>,
<code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.SwinConfig.use_absolute_embeddings",description:`<strong>use_absolute_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to False) &#x2014;
Whether or not to add absolute position embeddings to the patch embeddings.`,name:"use_absolute_embeddings"},{anchor:"transformers.SwinConfig.patch_norm",description:`<strong>patch_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to True) &#x2014;
Whether or not to add layer normalization after patch embedding.`,name:"patch_norm"},{anchor:"transformers.SwinConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.SwinConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.SwinConfig.encoder_stride",description:`<strong>encoder_stride</strong> (<code>int</code>, <code>optional</code>, defaults to 32) &#x2014;
Factor to increase the spatial resolution by in the decoder head for masked image modeling.</p>
<p>Example &#x2014;`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/swin/configuration_swin.py#L29"}}),te=new fo({props:{anchor:"transformers.SwinConfig.example",$$slots:{default:[fa]},$$scope:{ctx:M}}}),xe=new dt({}),ke=new He({props:{name:"class transformers.SwinModel",anchor:"transformers.SwinModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"},{name:"use_mask_token",val:" = False"}],parametersDescription:[{anchor:"transformers.SwinModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/swin/modeling_swin.py#L884"}}),Fe=new He({props:{name:"forward",anchor:"transformers.SwinModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.SwinModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.SwinModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SwinModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SwinModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SwinModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/swin/modeling_swin.py#L911",returnDescription:`
<p>A <code>transformers.models.swin.modeling_swin.SwinModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Average pooling of the last layer hidden-state.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.swin.modeling_swin.SwinModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ne=new us({props:{$$slots:{default:[ua]},$$scope:{ctx:M}}}),se=new fo({props:{anchor:"transformers.SwinModel.forward.example",$$slots:{default:[ga]},$$scope:{ctx:M}}}),Ce=new dt({}),je=new He({props:{name:"class transformers.SwinForMaskedImageModeling",anchor:"transformers.SwinForMaskedImageModeling",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/swin/modeling_swin.py#L982"}}),Ae=new He({props:{name:"forward",anchor:"transformers.SwinForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.SwinForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SwinForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SwinForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SwinForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SwinForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/swin/modeling_swin.py#L997",returnDescription:`
<p>A <code>transformers.models.swin.modeling_swin.SwinMaskedImageModelingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>bool_masked_pos</code> is provided) \u2014 Masked image modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) \u2014 Reconstructed pixel values.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.swin.modeling_swin.SwinMaskedImageModelingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),re=new us({props:{$$slots:{default:[_a]},$$scope:{ctx:M}}}),ie=new fo({props:{anchor:"transformers.SwinForMaskedImageModeling.forward.example",$$slots:{default:[wa]},$$scope:{ctx:M}}}),Pe=new dt({}),qe=new He({props:{name:"class transformers.SwinForImageClassification",anchor:"transformers.SwinForImageClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SwinForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/swin/modeling_swin.py#L1092"}}),De=new He({props:{name:"forward",anchor:"transformers.SwinForImageClassification.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.SwinForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.SwinForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SwinForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SwinForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SwinForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SwinForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/swin/modeling_swin.py#L1107",returnDescription:`
<p>A <code>transformers.models.swin.modeling_swin.SwinImageClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.swin.modeling_swin.SwinImageClassifierOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),de=new us({props:{$$slots:{default:[va]},$$scope:{ctx:M}}}),ce=new fo({props:{anchor:"transformers.SwinForImageClassification.forward.example",$$slots:{default:[ba]},$$scope:{ctx:M}}}),{c(){d=n("meta"),w=m(),p=n("h1"),u=n("a"),v=n("span"),b(l.$$.fragment),g=m(),F=n("span"),_o=a("Swin Transformer"),Lt=m(),N=n("h2"),J=n("a"),ct=n("span"),b(ge.$$.fragment),wo=m(),ht=n("span"),vo=a("Overview"),Ht=m(),L=n("p"),bo=a("The Swin Transformer was proposed in "),_e=n("a"),$o=a("Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),So=n("br"),To=a(`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),Wt=m(),We=n("p"),yo=a("The abstract from the paper is the following:"),Ut=m(),Ue=n("p"),pt=n("em"),xo=a(`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
for computer vision. Challenges in adapting Transformer from language to vision arise from differences between the two domains,
such as large variations in the scale of visual entities and the high resolution of pixels in images compared to words in text.
To address these differences, we propose a hierarchical Transformer whose representation is computed with \\bold{S}hifted
\\bold{win}dows. The shifted windowing scheme brings greater efficiency by limiting self-attention computation to non-overlapping
local windows while also allowing for cross-window connection. This hierarchical architecture has the flexibility to model at
various scales and has linear computational complexity with respect to image size. These qualities of Swin Transformer make it
compatible with a broad range of vision tasks, including image classification (87.3 top-1 accuracy on ImageNet-1K) and dense
prediction tasks such as object detection (58.7 box AP and 51.1 mask AP on COCO test-dev) and semantic segmentation
(53.5 mIoU on ADE20K val). Its performance surpasses the previous state-of-the-art by a large margin of +2.7 box AP and
+2.6 mask AP on COCO, and +3.2 mIoU on ADE20K, demonstrating the potential of Transformer-based models as vision backbones.
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),Vt=m(),Ve=n("p"),ko=a("Tips:"),Bt=m(),O=n("ul"),we=n("li"),Mo=a("One can use the "),Be=n("a"),Eo=a("AutoFeatureExtractor"),Fo=a(" API to prepare images for the model."),Co=m(),ve=n("li"),jo=a("Swin pads the inputs supporting any input height and width (if divisible by "),mt=n("code"),Io=a("32"),Ao=a(")."),Po=m(),k=n("li"),qo=a("Swin can be used as a "),ft=n("em"),zo=a("backbone"),Oo=a(". When "),ut=n("code"),Do=a("output_hidden_states = True"),No=a(", it will output both "),gt=n("code"),Lo=a("hidden_states"),Ho=a(" and "),_t=n("code"),Wo=a("reshaped_hidden_states"),Uo=a(". The "),wt=n("code"),Vo=a("reshaped_hidden_states"),Bo=a(" have a shape of "),vt=n("code"),Ko=a("(batch, num_channels, height, width)"),Ro=a(" rather than "),bt=n("code"),Yo=a("(batch_size, sequence_length, num_channels)"),Zo=a("."),Kt=m(),Q=n("img"),Rt=m(),X=n("small"),Go=a("Swin Transformer architecture. Taken from the "),Ke=n("a"),Jo=a("original paper"),Qo=a("."),Yt=m(),D=n("p"),Xo=a("This model was contributed by "),be=n("a"),en=a("novice03"),tn=a(". The original code can be found "),$e=n("a"),on=a("here"),nn=a("."),Zt=m(),H=n("h2"),ee=n("a"),$t=n("span"),b(Se.$$.fragment),sn=m(),St=n("span"),an=a("SwinConfig"),Gt=m(),C=n("div"),b(Te.$$.fragment),rn=m(),W=n("p"),ln=a("This is the configuration class to store the configuration of a "),Re=n("a"),dn=a("SwinModel"),cn=a(`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),ye=n("a"),hn=a("microsoft/swin-tiny-patch4-window7-224"),pn=a(`
architecture.`),mn=m(),U=n("p"),fn=a("Configuration objects inherit from "),Ye=n("a"),un=a("PretrainedConfig"),gn=a(` and can be used to control the model outputs. Read the
documentation from `),Ze=n("a"),_n=a("PretrainedConfig"),wn=a(" for more information."),vn=m(),b(te.$$.fragment),Jt=m(),V=n("h2"),oe=n("a"),Tt=n("span"),b(xe.$$.fragment),bn=m(),yt=n("span"),$n=a("SwinModel"),Qt=m(),q=n("div"),b(ke.$$.fragment),Sn=m(),Me=n("p"),Tn=a(`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ee=n("a"),yn=a("torch.nn.Module"),xn=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kn=m(),I=n("div"),b(Fe.$$.fragment),Mn=m(),B=n("p"),En=a("The "),Ge=n("a"),Fn=a("SwinModel"),Cn=a(" forward method, overrides the "),xt=n("code"),jn=a("__call__"),In=a(" special method."),An=m(),b(ne.$$.fragment),Pn=m(),b(se.$$.fragment),Xt=m(),K=n("h2"),ae=n("a"),kt=n("span"),b(Ce.$$.fragment),qn=m(),Mt=n("span"),zn=a("SwinForMaskedImageModeling"),eo=m(),z=n("div"),b(je.$$.fragment),On=m(),R=n("p"),Dn=a("Swin Model with a decoder on top for masked image modeling, as proposed in "),Et=n("code"),Nn=a("SimMIM <https://arxiv.org/abs/2111.09886>"),Ln=a(`__.
This model is a PyTorch `),Ie=n("a"),Hn=a("torch.nn.Module"),Wn=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Un=m(),A=n("div"),b(Ae.$$.fragment),Vn=m(),Y=n("p"),Bn=a("The "),Je=n("a"),Kn=a("SwinForMaskedImageModeling"),Rn=a(" forward method, overrides the "),Ft=n("code"),Yn=a("__call__"),Zn=a(" special method."),Gn=m(),b(re.$$.fragment),Jn=m(),b(ie.$$.fragment),to=m(),Z=n("h2"),le=n("a"),Ct=n("span"),b(Pe.$$.fragment),Qn=m(),jt=n("span"),Xn=a("SwinForImageClassification"),oo=m(),j=n("div"),b(qe.$$.fragment),es=m(),It=n("p"),ts=a(`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),os=m(),ze=n("p"),ns=a("This model is a PyTorch "),Oe=n("a"),ss=a("torch.nn.Module"),as=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),rs=m(),P=n("div"),b(De.$$.fragment),is=m(),G=n("p"),ls=a("The "),Qe=n("a"),ds=a("SwinForImageClassification"),cs=a(" forward method, overrides the "),At=n("code"),hs=a("__call__"),ps=a(" special method."),ms=m(),b(de.$$.fragment),fs=m(),b(ce.$$.fragment),this.h()},l(t){const h=ha('[data-svelte="svelte-1phssyn"]',document.head);d=s(h,"META",{name:!0,content:!0}),h.forEach(o),w=f(t),p=s(t,"H1",{class:!0});var Ne=i(p);u=s(Ne,"A",{id:!0,class:!0,href:!0});var Pt=i(u);v=s(Pt,"SPAN",{});var qt=i(v);$(l.$$.fragment,qt),qt.forEach(o),Pt.forEach(o),g=f(Ne),F=s(Ne,"SPAN",{});var zt=i(F);_o=r(zt,"Swin Transformer"),zt.forEach(o),Ne.forEach(o),Lt=f(t),N=s(t,"H2",{class:!0});var Le=i(N);J=s(Le,"A",{id:!0,class:!0,href:!0});var Ot=i(J);ct=s(Ot,"SPAN",{});var Dt=i(ct);$(ge.$$.fragment,Dt),Dt.forEach(o),Ot.forEach(o),wo=f(Le),ht=s(Le,"SPAN",{});var _s=i(ht);vo=r(_s,"Overview"),_s.forEach(o),Le.forEach(o),Ht=f(t),L=s(t,"P",{});var Nt=i(L);bo=r(Nt,"The Swin Transformer was proposed in "),_e=s(Nt,"A",{href:!0,rel:!0});var ws=i(_e);$o=r(ws,"Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),ws.forEach(o),So=s(Nt,"BR",{}),To=r(Nt,`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),Nt.forEach(o),Wt=f(t),We=s(t,"P",{});var vs=i(We);yo=r(vs,"The abstract from the paper is the following:"),vs.forEach(o),Ut=f(t),Ue=s(t,"P",{});var bs=i(Ue);pt=s(bs,"EM",{});var $s=i(pt);xo=r($s,`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
for computer vision. Challenges in adapting Transformer from language to vision arise from differences between the two domains,
such as large variations in the scale of visual entities and the high resolution of pixels in images compared to words in text.
To address these differences, we propose a hierarchical Transformer whose representation is computed with \\bold{S}hifted
\\bold{win}dows. The shifted windowing scheme brings greater efficiency by limiting self-attention computation to non-overlapping
local windows while also allowing for cross-window connection. This hierarchical architecture has the flexibility to model at
various scales and has linear computational complexity with respect to image size. These qualities of Swin Transformer make it
compatible with a broad range of vision tasks, including image classification (87.3 top-1 accuracy on ImageNet-1K) and dense
prediction tasks such as object detection (58.7 box AP and 51.1 mask AP on COCO test-dev) and semantic segmentation
(53.5 mIoU on ADE20K val). Its performance surpasses the previous state-of-the-art by a large margin of +2.7 box AP and
+2.6 mask AP on COCO, and +3.2 mIoU on ADE20K, demonstrating the potential of Transformer-based models as vision backbones.
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),$s.forEach(o),bs.forEach(o),Vt=f(t),Ve=s(t,"P",{});var Ss=i(Ve);ko=r(Ss,"Tips:"),Ss.forEach(o),Bt=f(t),O=s(t,"UL",{});var Xe=i(O);we=s(Xe,"LI",{});var so=i(we);Mo=r(so,"One can use the "),Be=s(so,"A",{href:!0});var Ts=i(Be);Eo=r(Ts,"AutoFeatureExtractor"),Ts.forEach(o),Fo=r(so," API to prepare images for the model."),so.forEach(o),Co=f(Xe),ve=s(Xe,"LI",{});var ao=i(ve);jo=r(ao,"Swin pads the inputs supporting any input height and width (if divisible by "),mt=s(ao,"CODE",{});var ys=i(mt);Io=r(ys,"32"),ys.forEach(o),Ao=r(ao,")."),ao.forEach(o),Po=f(Xe),k=s(Xe,"LI",{});var E=i(k);qo=r(E,"Swin can be used as a "),ft=s(E,"EM",{});var xs=i(ft);zo=r(xs,"backbone"),xs.forEach(o),Oo=r(E,". When "),ut=s(E,"CODE",{});var ks=i(ut);Do=r(ks,"output_hidden_states = True"),ks.forEach(o),No=r(E,", it will output both "),gt=s(E,"CODE",{});var Ms=i(gt);Lo=r(Ms,"hidden_states"),Ms.forEach(o),Ho=r(E," and "),_t=s(E,"CODE",{});var Es=i(_t);Wo=r(Es,"reshaped_hidden_states"),Es.forEach(o),Uo=r(E,". The "),wt=s(E,"CODE",{});var Fs=i(wt);Vo=r(Fs,"reshaped_hidden_states"),Fs.forEach(o),Bo=r(E," have a shape of "),vt=s(E,"CODE",{});var Cs=i(vt);Ko=r(Cs,"(batch, num_channels, height, width)"),Cs.forEach(o),Ro=r(E," rather than "),bt=s(E,"CODE",{});var js=i(bt);Yo=r(js,"(batch_size, sequence_length, num_channels)"),js.forEach(o),Zo=r(E,"."),E.forEach(o),Xe.forEach(o),Kt=f(t),Q=s(t,"IMG",{src:!0,alt:!0,width:!0}),Rt=f(t),X=s(t,"SMALL",{});var ro=i(X);Go=r(ro,"Swin Transformer architecture. Taken from the "),Ke=s(ro,"A",{href:!0});var Is=i(Ke);Jo=r(Is,"original paper"),Is.forEach(o),Qo=r(ro,"."),ro.forEach(o),Yt=f(t),D=s(t,"P",{});var et=i(D);Xo=r(et,"This model was contributed by "),be=s(et,"A",{href:!0,rel:!0});var As=i(be);en=r(As,"novice03"),As.forEach(o),tn=r(et,". The original code can be found "),$e=s(et,"A",{href:!0,rel:!0});var Ps=i($e);on=r(Ps,"here"),Ps.forEach(o),nn=r(et,"."),et.forEach(o),Zt=f(t),H=s(t,"H2",{class:!0});var io=i(H);ee=s(io,"A",{id:!0,class:!0,href:!0});var qs=i(ee);$t=s(qs,"SPAN",{});var zs=i($t);$(Se.$$.fragment,zs),zs.forEach(o),qs.forEach(o),sn=f(io),St=s(io,"SPAN",{});var Os=i(St);an=r(Os,"SwinConfig"),Os.forEach(o),io.forEach(o),Gt=f(t),C=s(t,"DIV",{class:!0});var he=i(C);$(Te.$$.fragment,he),rn=f(he),W=s(he,"P",{});var tt=i(W);ln=r(tt,"This is the configuration class to store the configuration of a "),Re=s(tt,"A",{href:!0});var Ds=i(Re);dn=r(Ds,"SwinModel"),Ds.forEach(o),cn=r(tt,`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),ye=s(tt,"A",{href:!0,rel:!0});var Ns=i(ye);hn=r(Ns,"microsoft/swin-tiny-patch4-window7-224"),Ns.forEach(o),pn=r(tt,`
architecture.`),tt.forEach(o),mn=f(he),U=s(he,"P",{});var ot=i(U);fn=r(ot,"Configuration objects inherit from "),Ye=s(ot,"A",{href:!0});var Ls=i(Ye);un=r(Ls,"PretrainedConfig"),Ls.forEach(o),gn=r(ot,` and can be used to control the model outputs. Read the
documentation from `),Ze=s(ot,"A",{href:!0});var Hs=i(Ze);_n=r(Hs,"PretrainedConfig"),Hs.forEach(o),wn=r(ot," for more information."),ot.forEach(o),vn=f(he),$(te.$$.fragment,he),he.forEach(o),Jt=f(t),V=s(t,"H2",{class:!0});var lo=i(V);oe=s(lo,"A",{id:!0,class:!0,href:!0});var Ws=i(oe);Tt=s(Ws,"SPAN",{});var Us=i(Tt);$(xe.$$.fragment,Us),Us.forEach(o),Ws.forEach(o),bn=f(lo),yt=s(lo,"SPAN",{});var Vs=i(yt);$n=r(Vs,"SwinModel"),Vs.forEach(o),lo.forEach(o),Qt=f(t),q=s(t,"DIV",{class:!0});var nt=i(q);$(ke.$$.fragment,nt),Sn=f(nt),Me=s(nt,"P",{});var co=i(Me);Tn=r(co,`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ee=s(co,"A",{href:!0,rel:!0});var Bs=i(Ee);yn=r(Bs,"torch.nn.Module"),Bs.forEach(o),xn=r(co,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),co.forEach(o),kn=f(nt),I=s(nt,"DIV",{class:!0});var pe=i(I);$(Fe.$$.fragment,pe),Mn=f(pe),B=s(pe,"P",{});var st=i(B);En=r(st,"The "),Ge=s(st,"A",{href:!0});var Ks=i(Ge);Fn=r(Ks,"SwinModel"),Ks.forEach(o),Cn=r(st," forward method, overrides the "),xt=s(st,"CODE",{});var Rs=i(xt);jn=r(Rs,"__call__"),Rs.forEach(o),In=r(st," special method."),st.forEach(o),An=f(pe),$(ne.$$.fragment,pe),Pn=f(pe),$(se.$$.fragment,pe),pe.forEach(o),nt.forEach(o),Xt=f(t),K=s(t,"H2",{class:!0});var ho=i(K);ae=s(ho,"A",{id:!0,class:!0,href:!0});var Ys=i(ae);kt=s(Ys,"SPAN",{});var Zs=i(kt);$(Ce.$$.fragment,Zs),Zs.forEach(o),Ys.forEach(o),qn=f(ho),Mt=s(ho,"SPAN",{});var Gs=i(Mt);zn=r(Gs,"SwinForMaskedImageModeling"),Gs.forEach(o),ho.forEach(o),eo=f(t),z=s(t,"DIV",{class:!0});var at=i(z);$(je.$$.fragment,at),On=f(at),R=s(at,"P",{});var rt=i(R);Dn=r(rt,"Swin Model with a decoder on top for masked image modeling, as proposed in "),Et=s(rt,"CODE",{});var Js=i(Et);Nn=r(Js,"SimMIM <https://arxiv.org/abs/2111.09886>"),Js.forEach(o),Ln=r(rt,`__.
This model is a PyTorch `),Ie=s(rt,"A",{href:!0,rel:!0});var Qs=i(Ie);Hn=r(Qs,"torch.nn.Module"),Qs.forEach(o),Wn=r(rt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),rt.forEach(o),Un=f(at),A=s(at,"DIV",{class:!0});var me=i(A);$(Ae.$$.fragment,me),Vn=f(me),Y=s(me,"P",{});var it=i(Y);Bn=r(it,"The "),Je=s(it,"A",{href:!0});var Xs=i(Je);Kn=r(Xs,"SwinForMaskedImageModeling"),Xs.forEach(o),Rn=r(it," forward method, overrides the "),Ft=s(it,"CODE",{});var ea=i(Ft);Yn=r(ea,"__call__"),ea.forEach(o),Zn=r(it," special method."),it.forEach(o),Gn=f(me),$(re.$$.fragment,me),Jn=f(me),$(ie.$$.fragment,me),me.forEach(o),at.forEach(o),to=f(t),Z=s(t,"H2",{class:!0});var po=i(Z);le=s(po,"A",{id:!0,class:!0,href:!0});var ta=i(le);Ct=s(ta,"SPAN",{});var oa=i(Ct);$(Pe.$$.fragment,oa),oa.forEach(o),ta.forEach(o),Qn=f(po),jt=s(po,"SPAN",{});var na=i(jt);Xn=r(na,"SwinForImageClassification"),na.forEach(o),po.forEach(o),oo=f(t),j=s(t,"DIV",{class:!0});var fe=i(j);$(qe.$$.fragment,fe),es=f(fe),It=s(fe,"P",{});var sa=i(It);ts=r(sa,`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),sa.forEach(o),os=f(fe),ze=s(fe,"P",{});var mo=i(ze);ns=r(mo,"This model is a PyTorch "),Oe=s(mo,"A",{href:!0,rel:!0});var aa=i(Oe);ss=r(aa,"torch.nn.Module"),aa.forEach(o),as=r(mo,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mo.forEach(o),rs=f(fe),P=s(fe,"DIV",{class:!0});var ue=i(P);$(De.$$.fragment,ue),is=f(ue),G=s(ue,"P",{});var lt=i(G);ls=r(lt,"The "),Qe=s(lt,"A",{href:!0});var ra=i(Qe);ds=r(ra,"SwinForImageClassification"),ra.forEach(o),cs=r(lt," forward method, overrides the "),At=s(lt,"CODE",{});var ia=i(At);hs=r(ia,"__call__"),ia.forEach(o),ps=r(lt," special method."),lt.forEach(o),ms=f(ue),$(de.$$.fragment,ue),fs=f(ue),$(ce.$$.fragment,ue),ue.forEach(o),fe.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(Sa)),c(u,"id","swin-transformer"),c(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(u,"href","#swin-transformer"),c(p,"class","relative group"),c(J,"id","overview"),c(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(J,"href","#overview"),c(N,"class","relative group"),c(_e,"href","https://arxiv.org/abs/2103.14030"),c(_e,"rel","nofollow"),c(Be,"href","/docs/transformers/v4.18.0/en/model_doc/auto#transformers.AutoFeatureExtractor"),pa(Q.src,gs="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/swin_transformer_architecture.png")||c(Q,"src",gs),c(Q,"alt","drawing"),c(Q,"width","600"),c(Ke,"href","https://arxiv.org/abs/2102.03334"),c(be,"href","https://huggingface.co/novice03%3E"),c(be,"rel","nofollow"),c($e,"href","https://github.com/microsoft/Swin-Transformer"),c($e,"rel","nofollow"),c(ee,"id","transformers.SwinConfig"),c(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ee,"href","#transformers.SwinConfig"),c(H,"class","relative group"),c(Re,"href","/docs/transformers/v4.18.0/en/model_doc/swin#transformers.SwinModel"),c(ye,"href","https://huggingface.co/microsoft/swin-tiny-patch4-window7-224"),c(ye,"rel","nofollow"),c(Ye,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ze,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(oe,"id","transformers.SwinModel"),c(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oe,"href","#transformers.SwinModel"),c(V,"class","relative group"),c(Ee,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ee,"rel","nofollow"),c(Ge,"href","/docs/transformers/v4.18.0/en/model_doc/swin#transformers.SwinModel"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ae,"id","transformers.SwinForMaskedImageModeling"),c(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ae,"href","#transformers.SwinForMaskedImageModeling"),c(K,"class","relative group"),c(Ie,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ie,"rel","nofollow"),c(Je,"href","/docs/transformers/v4.18.0/en/model_doc/swin#transformers.SwinForMaskedImageModeling"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(le,"id","transformers.SwinForImageClassification"),c(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(le,"href","#transformers.SwinForImageClassification"),c(Z,"class","relative group"),c(Oe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Oe,"rel","nofollow"),c(Qe,"href","/docs/transformers/v4.18.0/en/model_doc/swin#transformers.SwinForImageClassification"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,h){e(document.head,d),_(t,w,h),_(t,p,h),e(p,u),e(u,v),S(l,v,null),e(p,g),e(p,F),e(F,_o),_(t,Lt,h),_(t,N,h),e(N,J),e(J,ct),S(ge,ct,null),e(N,wo),e(N,ht),e(ht,vo),_(t,Ht,h),_(t,L,h),e(L,bo),e(L,_e),e(_e,$o),e(L,So),e(L,To),_(t,Wt,h),_(t,We,h),e(We,yo),_(t,Ut,h),_(t,Ue,h),e(Ue,pt),e(pt,xo),_(t,Vt,h),_(t,Ve,h),e(Ve,ko),_(t,Bt,h),_(t,O,h),e(O,we),e(we,Mo),e(we,Be),e(Be,Eo),e(we,Fo),e(O,Co),e(O,ve),e(ve,jo),e(ve,mt),e(mt,Io),e(ve,Ao),e(O,Po),e(O,k),e(k,qo),e(k,ft),e(ft,zo),e(k,Oo),e(k,ut),e(ut,Do),e(k,No),e(k,gt),e(gt,Lo),e(k,Ho),e(k,_t),e(_t,Wo),e(k,Uo),e(k,wt),e(wt,Vo),e(k,Bo),e(k,vt),e(vt,Ko),e(k,Ro),e(k,bt),e(bt,Yo),e(k,Zo),_(t,Kt,h),_(t,Q,h),_(t,Rt,h),_(t,X,h),e(X,Go),e(X,Ke),e(Ke,Jo),e(X,Qo),_(t,Yt,h),_(t,D,h),e(D,Xo),e(D,be),e(be,en),e(D,tn),e(D,$e),e($e,on),e(D,nn),_(t,Zt,h),_(t,H,h),e(H,ee),e(ee,$t),S(Se,$t,null),e(H,sn),e(H,St),e(St,an),_(t,Gt,h),_(t,C,h),S(Te,C,null),e(C,rn),e(C,W),e(W,ln),e(W,Re),e(Re,dn),e(W,cn),e(W,ye),e(ye,hn),e(W,pn),e(C,mn),e(C,U),e(U,fn),e(U,Ye),e(Ye,un),e(U,gn),e(U,Ze),e(Ze,_n),e(U,wn),e(C,vn),S(te,C,null),_(t,Jt,h),_(t,V,h),e(V,oe),e(oe,Tt),S(xe,Tt,null),e(V,bn),e(V,yt),e(yt,$n),_(t,Qt,h),_(t,q,h),S(ke,q,null),e(q,Sn),e(q,Me),e(Me,Tn),e(Me,Ee),e(Ee,yn),e(Me,xn),e(q,kn),e(q,I),S(Fe,I,null),e(I,Mn),e(I,B),e(B,En),e(B,Ge),e(Ge,Fn),e(B,Cn),e(B,xt),e(xt,jn),e(B,In),e(I,An),S(ne,I,null),e(I,Pn),S(se,I,null),_(t,Xt,h),_(t,K,h),e(K,ae),e(ae,kt),S(Ce,kt,null),e(K,qn),e(K,Mt),e(Mt,zn),_(t,eo,h),_(t,z,h),S(je,z,null),e(z,On),e(z,R),e(R,Dn),e(R,Et),e(Et,Nn),e(R,Ln),e(R,Ie),e(Ie,Hn),e(R,Wn),e(z,Un),e(z,A),S(Ae,A,null),e(A,Vn),e(A,Y),e(Y,Bn),e(Y,Je),e(Je,Kn),e(Y,Rn),e(Y,Ft),e(Ft,Yn),e(Y,Zn),e(A,Gn),S(re,A,null),e(A,Jn),S(ie,A,null),_(t,to,h),_(t,Z,h),e(Z,le),e(le,Ct),S(Pe,Ct,null),e(Z,Qn),e(Z,jt),e(jt,Xn),_(t,oo,h),_(t,j,h),S(qe,j,null),e(j,es),e(j,It),e(It,ts),e(j,os),e(j,ze),e(ze,ns),e(ze,Oe),e(Oe,ss),e(ze,as),e(j,rs),e(j,P),S(De,P,null),e(P,is),e(P,G),e(G,ls),e(G,Qe),e(Qe,ds),e(G,cs),e(G,At),e(At,hs),e(G,ps),e(P,ms),S(de,P,null),e(P,fs),S(ce,P,null),no=!0},p(t,[h]){const Ne={};h&2&&(Ne.$$scope={dirty:h,ctx:t}),te.$set(Ne);const Pt={};h&2&&(Pt.$$scope={dirty:h,ctx:t}),ne.$set(Pt);const qt={};h&2&&(qt.$$scope={dirty:h,ctx:t}),se.$set(qt);const zt={};h&2&&(zt.$$scope={dirty:h,ctx:t}),re.$set(zt);const Le={};h&2&&(Le.$$scope={dirty:h,ctx:t}),ie.$set(Le);const Ot={};h&2&&(Ot.$$scope={dirty:h,ctx:t}),de.$set(Ot);const Dt={};h&2&&(Dt.$$scope={dirty:h,ctx:t}),ce.$set(Dt)},i(t){no||(T(l.$$.fragment,t),T(ge.$$.fragment,t),T(Se.$$.fragment,t),T(Te.$$.fragment,t),T(te.$$.fragment,t),T(xe.$$.fragment,t),T(ke.$$.fragment,t),T(Fe.$$.fragment,t),T(ne.$$.fragment,t),T(se.$$.fragment,t),T(Ce.$$.fragment,t),T(je.$$.fragment,t),T(Ae.$$.fragment,t),T(re.$$.fragment,t),T(ie.$$.fragment,t),T(Pe.$$.fragment,t),T(qe.$$.fragment,t),T(De.$$.fragment,t),T(de.$$.fragment,t),T(ce.$$.fragment,t),no=!0)},o(t){y(l.$$.fragment,t),y(ge.$$.fragment,t),y(Se.$$.fragment,t),y(Te.$$.fragment,t),y(te.$$.fragment,t),y(xe.$$.fragment,t),y(ke.$$.fragment,t),y(Fe.$$.fragment,t),y(ne.$$.fragment,t),y(se.$$.fragment,t),y(Ce.$$.fragment,t),y(je.$$.fragment,t),y(Ae.$$.fragment,t),y(re.$$.fragment,t),y(ie.$$.fragment,t),y(Pe.$$.fragment,t),y(qe.$$.fragment,t),y(De.$$.fragment,t),y(de.$$.fragment,t),y(ce.$$.fragment,t),no=!1},d(t){o(d),t&&o(w),t&&o(p),x(l),t&&o(Lt),t&&o(N),x(ge),t&&o(Ht),t&&o(L),t&&o(Wt),t&&o(We),t&&o(Ut),t&&o(Ue),t&&o(Vt),t&&o(Ve),t&&o(Bt),t&&o(O),t&&o(Kt),t&&o(Q),t&&o(Rt),t&&o(X),t&&o(Yt),t&&o(D),t&&o(Zt),t&&o(H),x(Se),t&&o(Gt),t&&o(C),x(Te),x(te),t&&o(Jt),t&&o(V),x(xe),t&&o(Qt),t&&o(q),x(ke),x(Fe),x(ne),x(se),t&&o(Xt),t&&o(K),x(Ce),t&&o(eo),t&&o(z),x(je),x(Ae),x(re),x(ie),t&&o(to),t&&o(Z),x(Pe),t&&o(oo),t&&o(j),x(qe),x(De),x(de),x(ce)}}}const Sa={local:"swin-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.SwinConfig",title:"SwinConfig"},{local:"transformers.SwinModel",title:"SwinModel"},{local:"transformers.SwinForMaskedImageModeling",title:"SwinForMaskedImageModeling"},{local:"transformers.SwinForImageClassification",title:"SwinForImageClassification"}],title:"Swin Transformer"};function Ta(M){return ma(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ca extends la{constructor(d){super();da(this,d,Ta,$a,ca,{})}}export{Ca as default,Sa as metadata};
