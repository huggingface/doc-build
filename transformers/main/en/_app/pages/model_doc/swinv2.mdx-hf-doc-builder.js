import{S as ca,i as pa,s as ma,e as a,k as u,w as b,t as i,M as ha,c as s,d as o,m as g,a as r,x as $,h as l,b as c,G as e,g as _,y as S,q as y,o as T,B as k,v as fa,L as Gt}from"../../chunks/vendor-hf-doc-builder.js";import{T as xn}from"../../chunks/Tip-hf-doc-builder.js";import{D as ze}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Kt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as nt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Rt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ua(x){let d,v,f,p,w;return p=new Kt({props:{code:`from transformers import Swinv2Config, Swinv2Model

# Initializing a Swinv2 microsoft/swinv2_tiny_patch4_windows8_256 style configuration
configuration = Swinv2Config()

# Initializing a model from the microsoft/swinv2_tiny_patch4_windows8_256 style configuration
model = Swinv2Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Swinv2Config, Swinv2Model

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Swinv2 microsoft/swinv2_tiny_patch4_windows8_256 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Swinv2Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the microsoft/swinv2_tiny_patch4_windows8_256 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Swinv2Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),v=i("Example:"),f=u(),b(p.$$.fragment)},l(n){d=s(n,"P",{});var m=r(d);v=l(m,"Example:"),m.forEach(o),f=g(n),$(p.$$.fragment,n)},m(n,m){_(n,d,m),e(d,v),_(n,f,m),S(p,n,m),w=!0},p:Gt,i(n){w||(y(p.$$.fragment,n),w=!0)},o(n){T(p.$$.fragment,n),w=!1},d(n){n&&o(d),n&&o(f),k(p,n)}}}function ga(x){let d,v,f,p,w;return{c(){d=a("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),w=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var m=r(d);v=l(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(m,"CODE",{});var M=r(f);p=l(M,"Module"),M.forEach(o),w=l(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(n,m){_(n,d,m),e(d,v),e(d,f),e(f,p),e(d,w)},d(n){n&&o(d)}}}function _a(x){let d,v,f,p,w;return p=new Kt({props:{code:`from transformers import AutoFeatureExtractor, Swinv2Model
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swinv2-tiny-patch4-window8-256")
model = Swinv2Model.from_pretrained("microsoft/swinv2-tiny-patch4-window8-256")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, Swinv2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swinv2-tiny-patch4-window8-256&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Swinv2Model.from_pretrained(<span class="hljs-string">&quot;microsoft/swinv2-tiny-patch4-window8-256&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">64</span>, <span class="hljs-number">768</span>]`}}),{c(){d=a("p"),v=i("Example:"),f=u(),b(p.$$.fragment)},l(n){d=s(n,"P",{});var m=r(d);v=l(m,"Example:"),m.forEach(o),f=g(n),$(p.$$.fragment,n)},m(n,m){_(n,d,m),e(d,v),_(n,f,m),S(p,n,m),w=!0},p:Gt,i(n){w||(y(p.$$.fragment,n),w=!0)},o(n){T(p.$$.fragment,n),w=!1},d(n){n&&o(d),n&&o(f),k(p,n)}}}function wa(x){let d,v,f,p,w;return{c(){d=a("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),w=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var m=r(d);v=l(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(m,"CODE",{});var M=r(f);p=l(M,"Module"),M.forEach(o),w=l(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(n,m){_(n,d,m),e(d,v),e(d,f),e(f,p),e(d,w)},d(n){n&&o(d)}}}function va(x){let d,v,f,p,w;return p=new Kt({props:{code:`from transformers import AutoFeatureExtractor, Swinv2ForMaskedImageModeling
import torch
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swinv2-tiny-patch4-window8-256")
model = Swinv2ForMaskedImageModeling.from_pretrained("microsoft/swinv2-tiny-patch4-window8-256")

num_patches = (model.config.image_size // model.config.patch_size) ** 2
pixel_values = feature_extractor(images=image, return_tensors="pt").pixel_values
# create random boolean mask of shape (batch_size, num_patches)
bool_masked_pos = torch.randint(low=0, high=2, size=(1, num_patches)).bool()

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss, reconstructed_pixel_values = outputs.loss, outputs.logits
list(reconstructed_pixel_values.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, Swinv2ForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swinv2-tiny-patch4-window8-256&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Swinv2ForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;microsoft/swinv2-tiny-patch4-window8-256&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = torch.randint(low=<span class="hljs-number">0</span>, high=<span class="hljs-number">2</span>, size=(<span class="hljs-number">1</span>, num_patches)).<span class="hljs-built_in">bool</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">256</span>, <span class="hljs-number">256</span>]`}}),{c(){d=a("p"),v=i("Examples:"),f=u(),b(p.$$.fragment)},l(n){d=s(n,"P",{});var m=r(d);v=l(m,"Examples:"),m.forEach(o),f=g(n),$(p.$$.fragment,n)},m(n,m){_(n,d,m),e(d,v),_(n,f,m),S(p,n,m),w=!0},p:Gt,i(n){w||(y(p.$$.fragment,n),w=!0)},o(n){T(p.$$.fragment,n),w=!1},d(n){n&&o(d),n&&o(f),k(p,n)}}}function ba(x){let d,v,f,p,w;return{c(){d=a("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),w=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var m=r(d);v=l(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(m,"CODE",{});var M=r(f);p=l(M,"Module"),M.forEach(o),w=l(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(n,m){_(n,d,m),e(d,v),e(d,f),e(f,p),e(d,w)},d(n){n&&o(d)}}}function $a(x){let d,v,f,p,w;return p=new Kt({props:{code:`from transformers import AutoFeatureExtractor, Swinv2ForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swinv2-tiny-patch4-window8-256")
model = Swinv2ForImageClassification.from_pretrained("microsoft/swinv2-tiny-patch4-window8-256")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, Swinv2ForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swinv2-tiny-patch4-window8-256&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Swinv2ForImageClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/swinv2-tiny-patch4-window8-256&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
Egyptian cat`}}),{c(){d=a("p"),v=i("Example:"),f=u(),b(p.$$.fragment)},l(n){d=s(n,"P",{});var m=r(d);v=l(m,"Example:"),m.forEach(o),f=g(n),$(p.$$.fragment,n)},m(n,m){_(n,d,m),e(d,v),_(n,f,m),S(p,n,m),w=!0},p:Gt,i(n){w||(y(p.$$.fragment,n),w=!0)},o(n){T(p.$$.fragment,n),w=!1},d(n){n&&o(d),n&&o(f),k(p,n)}}}function Sa(x){let d,v,f,p,w,n,m,M,Jt,Tt,z,Y,at,pe,Xt,st,Qt,kt,R,eo,me,to,oo,xt,Oe,no,Mt,Ne,rt,ao,Ft,De,so,Et,Le,he,ro,Ve,io,lo,jt,q,co,fe,po,mo,ue,ho,fo,Ct,O,G,it,ge,uo,lt,go,It,F,_e,_o,N,wo,We,vo,bo,we,$o,So,yo,D,To,He,ko,xo,Ue,Mo,Fo,Eo,K,At,L,J,dt,ve,jo,ct,Co,Pt,A,be,Io,$e,Ao,Se,Po,qo,zo,j,ye,Oo,V,No,Ze,Do,Lo,pt,Vo,Wo,Ho,X,Uo,Q,qt,W,ee,mt,Te,Zo,ht,Bo,zt,P,ke,Yo,H,Ro,xe,Go,Ko,Me,Jo,Xo,Qo,C,Fe,en,U,tn,Be,on,nn,ft,an,sn,rn,te,ln,oe,Ot,Z,ne,ut,Ee,dn,gt,cn,Nt,E,je,pn,_t,mn,hn,Ce,fn,Ie,un,gn,_n,I,Ae,wn,B,vn,Ye,bn,$n,wt,Sn,yn,Tn,ae,kn,se,Dt;return n=new nt({}),pe=new nt({}),ge=new nt({}),_e=new ze({props:{name:"class transformers.Swinv2Config",anchor:"transformers.Swinv2Config",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 4"},{name:"num_channels",val:" = 3"},{name:"embed_dim",val:" = 96"},{name:"depths",val:" = [2, 2, 6, 2]"},{name:"num_heads",val:" = [3, 6, 12, 24]"},{name:"window_size",val:" = 7"},{name:"mlp_ratio",val:" = 4.0"},{name:"qkv_bias",val:" = True"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"drop_path_rate",val:" = 0.1"},{name:"hidden_act",val:" = 'gelu'"},{name:"use_absolute_embeddings",val:" = False"},{name:"patch_norm",val:" = True"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"encoder_stride",val:" = 32"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Swinv2Config.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.Swinv2Config.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.Swinv2Config.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.Swinv2Config.embed_dim",description:`<strong>embed_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 96) &#x2014;
Dimensionality of patch embedding.`,name:"embed_dim"},{anchor:"transformers.Swinv2Config.depths",description:`<strong>depths</strong> (<code>list(int)</code>, <em>optional</em>, defaults to <code>[2, 2, 6, 2]</code>) &#x2014;
Depth of each layer in the Transformer encoder.`,name:"depths"},{anchor:"transformers.Swinv2Config.num_heads",description:`<strong>num_heads</strong> (<code>list(int)</code>, <em>optional</em>, defaults to <code>[3, 6, 12, 24]</code>) &#x2014;
Number of attention heads in each layer of the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.Swinv2Config.window_size",description:`<strong>window_size</strong> (<code>int</code>, <em>optional</em>, defaults to 7) &#x2014;
Size of windows.`,name:"window_size"},{anchor:"transformers.Swinv2Config.mlp_ratio",description:`<strong>mlp_ratio</strong> (<code>float</code>, <em>optional</em>, defaults to 4.0) &#x2014;
Ratio of MLP hidden dimensionality to embedding dimensionality.`,name:"mlp_ratio"},{anchor:"transformers.Swinv2Config.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not a learnable bias should be added to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.Swinv2Config.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for all fully connected layers in the embeddings and encoder.`,name:"hidden_dropout_prob"},{anchor:"transformers.Swinv2Config.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.Swinv2Config.drop_path_rate",description:`<strong>drop_path_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Stochastic depth rate.`,name:"drop_path_rate"},{anchor:"transformers.Swinv2Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder. If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>,
<code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.Swinv2Config.use_absolute_embeddings",description:`<strong>use_absolute_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add absolute position embeddings to the patch embeddings.`,name:"use_absolute_embeddings"},{anchor:"transformers.Swinv2Config.patch_norm",description:`<strong>patch_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to add layer normalization after patch embedding.`,name:"patch_norm"},{anchor:"transformers.Swinv2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.Swinv2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.Swinv2Config.encoder_stride",description:`<strong>encoder_stride</strong> (<code>int</code>, <code>optional</code>, defaults to 32) &#x2014;
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swinv2/configuration_swinv2.py#L30"}}),K=new Rt({props:{anchor:"transformers.Swinv2Config.example",$$slots:{default:[ua]},$$scope:{ctx:x}}}),ve=new nt({}),be=new ze({props:{name:"class transformers.Swinv2Model",anchor:"transformers.Swinv2Model",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"},{name:"use_mask_token",val:" = False"}],parametersDescription:[{anchor:"transformers.Swinv2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/swinv2#transformers.Swinv2Config">Swinv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swinv2/modeling_swinv2.py#L995"}}),ye=new ze({props:{name:"forward",anchor:"transformers.Swinv2Model.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Swinv2Model.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.Swinv2Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Swinv2Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Swinv2Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Swinv2Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swinv2/modeling_swinv2.py#L1022",returnDescription:`
<p>A <code>transformers.models.swinv2.modeling_swinv2.Swinv2ModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/swinv2#transformers.Swinv2Config"
>Swinv2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>, <em>optional</em>, returned when <code>add_pooling_layer=True</code> is passed) \u2014 Average pooling of the last layer hidden-state.</p>
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
<p><code>transformers.models.swinv2.modeling_swinv2.Swinv2ModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),X=new xn({props:{$$slots:{default:[ga]},$$scope:{ctx:x}}}),Q=new Rt({props:{anchor:"transformers.Swinv2Model.forward.example",$$slots:{default:[_a]},$$scope:{ctx:x}}}),Te=new nt({}),ke=new ze({props:{name:"class transformers.Swinv2ForMaskedImageModeling",anchor:"transformers.Swinv2ForMaskedImageModeling",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Swinv2ForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/swinv2#transformers.Swinv2Config">Swinv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swinv2/modeling_swinv2.py#L1095"}}),Fe=new ze({props:{name:"forward",anchor:"transformers.Swinv2ForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swinv2/modeling_swinv2.py#L1112",returnDescription:`
<p>A <code>transformers.models.swinv2.modeling_swinv2.Swinv2MaskedImageModelingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/swinv2#transformers.Swinv2Config"
>Swinv2Config</a>) and inputs.</p>
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
<p><code>transformers.models.swinv2.modeling_swinv2.Swinv2MaskedImageModelingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),te=new xn({props:{$$slots:{default:[wa]},$$scope:{ctx:x}}}),oe=new Rt({props:{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.example",$$slots:{default:[va]},$$scope:{ctx:x}}}),Ee=new nt({}),je=new ze({props:{name:"class transformers.Swinv2ForImageClassification",anchor:"transformers.Swinv2ForImageClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Swinv2ForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/swinv2#transformers.Swinv2Config">Swinv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swinv2/modeling_swinv2.py#L1207"}}),Ae=new ze({props:{name:"forward",anchor:"transformers.Swinv2ForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Swinv2ForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.Swinv2ForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Swinv2ForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Swinv2ForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Swinv2ForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Swinv2ForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swinv2/modeling_swinv2.py#L1222",returnDescription:`
<p>A <code>transformers.models.swinv2.modeling_swinv2.Swinv2ImageClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/swinv2#transformers.Swinv2Config"
>Swinv2Config</a>) and inputs.</p>
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
<p><code>transformers.models.swinv2.modeling_swinv2.Swinv2ImageClassifierOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ae=new xn({props:{$$slots:{default:[ba]},$$scope:{ctx:x}}}),se=new Rt({props:{anchor:"transformers.Swinv2ForImageClassification.forward.example",$$slots:{default:[$a]},$$scope:{ctx:x}}}),{c(){d=a("meta"),v=u(),f=a("h1"),p=a("a"),w=a("span"),b(n.$$.fragment),m=u(),M=a("span"),Jt=i("Swin Transformer V2"),Tt=u(),z=a("h2"),Y=a("a"),at=a("span"),b(pe.$$.fragment),Xt=u(),st=a("span"),Qt=i("Overview"),kt=u(),R=a("p"),eo=i("The Swin Transformer V2 model was proposed in "),me=a("a"),to=i("Swin Transformer V2: Scaling Up Capacity and Resolution"),oo=i(" by Ze Liu, Han Hu, Yutong Lin, Zhuliang Yao, Zhenda Xie, Yixuan Wei, Jia Ning, Yue Cao, Zheng Zhang, Li Dong, Furu Wei, Baining Guo."),xt=u(),Oe=a("p"),no=i("The abstract from the paper is the following:"),Mt=u(),Ne=a("p"),rt=a("em"),ao=i("Large-scale NLP models have been shown to significantly improve the performance on language tasks with no signs of saturation. They also demonstrate amazing few-shot capabilities like that of human beings. This paper aims to explore large-scale models in computer vision. We tackle three major issues in training and application of large vision models, including training instability, resolution gaps between pre-training and fine-tuning, and hunger on labelled data. Three main techniques are proposed: 1) a residual-post-norm method combined with cosine attention to improve training stability; 2) A log-spaced continuous position bias method to effectively transfer models pre-trained using low-resolution images to downstream tasks with high-resolution inputs; 3) A self-supervised pre-training method, SimMIM, to reduce the needs of vast labeled images. Through these techniques, this paper successfully trained a 3 billion-parameter Swin Transformer V2 model, which is the largest dense vision model to date, and makes it capable of training with images of up to 1,536\xD71,536 resolution. It set new performance records on 4 representative vision tasks, including ImageNet-V2 image classification, COCO object detection, ADE20K semantic segmentation, and Kinetics-400 video action classification. Also note our training is much more efficient than that in Google\u2019s billion-level visual models, which consumes 40 times less labelled data and 40 times less training time."),Ft=u(),De=a("p"),so=i("Tips:"),Et=u(),Le=a("ul"),he=a("li"),ro=i("One can use the "),Ve=a("a"),io=i("AutoFeatureExtractor"),lo=i(" API to prepare images for the model."),jt=u(),q=a("p"),co=i("This model was contributed by "),fe=a("a"),po=i("nandwalritik"),mo=i(`.
The original code can be found `),ue=a("a"),ho=i("here"),fo=i("."),Ct=u(),O=a("h2"),G=a("a"),it=a("span"),b(ge.$$.fragment),uo=u(),lt=a("span"),go=i("Swinv2Config"),It=u(),F=a("div"),b(_e.$$.fragment),_o=u(),N=a("p"),wo=i("This is the configuration class to store the configuration of a "),We=a("a"),vo=i("Swinv2Model"),bo=i(`. It is used to instantiate a Swin
Transformer v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Swin Transformer v2
`),we=a("a"),$o=i("microsoft/swinv2_tiny_patch4_windows8_256"),So=i(`
architecture.`),yo=u(),D=a("p"),To=i("Configuration objects inherit from "),He=a("a"),ko=i("PretrainedConfig"),xo=i(` and can be used to control the model outputs. Read the
documentation from `),Ue=a("a"),Mo=i("PretrainedConfig"),Fo=i(" for more information."),Eo=u(),b(K.$$.fragment),At=u(),L=a("h2"),J=a("a"),dt=a("span"),b(ve.$$.fragment),jo=u(),ct=a("span"),Co=i("Swinv2Model"),Pt=u(),A=a("div"),b(be.$$.fragment),Io=u(),$e=a("p"),Ao=i(`The bare Swinv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Se=a("a"),Po=i("torch.nn.Module"),qo=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zo=u(),j=a("div"),b(ye.$$.fragment),Oo=u(),V=a("p"),No=i("The "),Ze=a("a"),Do=i("Swinv2Model"),Lo=i(" forward method, overrides the "),pt=a("code"),Vo=i("__call__"),Wo=i(" special method."),Ho=u(),b(X.$$.fragment),Uo=u(),b(Q.$$.fragment),qt=u(),W=a("h2"),ee=a("a"),mt=a("span"),b(Te.$$.fragment),Zo=u(),ht=a("span"),Bo=i("Swinv2ForMaskedImageModeling"),zt=u(),P=a("div"),b(ke.$$.fragment),Yo=u(),H=a("p"),Ro=i("Swinv2 Model with a decoder on top for masked image modeling, as proposed in "),xe=a("a"),Go=i("SimMIM"),Ko=i(`.
This model is a PyTorch `),Me=a("a"),Jo=i("torch.nn.Module"),Xo=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qo=u(),C=a("div"),b(Fe.$$.fragment),en=u(),U=a("p"),tn=i("The "),Be=a("a"),on=i("Swinv2ForMaskedImageModeling"),nn=i(" forward method, overrides the "),ft=a("code"),an=i("__call__"),sn=i(" special method."),rn=u(),b(te.$$.fragment),ln=u(),b(oe.$$.fragment),Ot=u(),Z=a("h2"),ne=a("a"),ut=a("span"),b(Ee.$$.fragment),dn=u(),gt=a("span"),cn=i("Swinv2ForImageClassification"),Nt=u(),E=a("div"),b(je.$$.fragment),pn=u(),_t=a("p"),mn=i(`Swinv2 Model transformer with an image classification head on top (a linear layer on top of the final hidden state
of the [CLS] token) e.g. for ImageNet.`),hn=u(),Ce=a("p"),fn=i("This model is a PyTorch "),Ie=a("a"),un=i("torch.nn.Module"),gn=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_n=u(),I=a("div"),b(Ae.$$.fragment),wn=u(),B=a("p"),vn=i("The "),Ye=a("a"),bn=i("Swinv2ForImageClassification"),$n=i(" forward method, overrides the "),wt=a("code"),Sn=i("__call__"),yn=i(" special method."),Tn=u(),b(ae.$$.fragment),kn=u(),b(se.$$.fragment),this.h()},l(t){const h=ha('[data-svelte="svelte-1phssyn"]',document.head);d=s(h,"META",{name:!0,content:!0}),h.forEach(o),v=g(t),f=s(t,"H1",{class:!0});var Pe=r(f);p=s(Pe,"A",{id:!0,class:!0,href:!0});var vt=r(p);w=s(vt,"SPAN",{});var bt=r(w);$(n.$$.fragment,bt),bt.forEach(o),vt.forEach(o),m=g(Pe),M=s(Pe,"SPAN",{});var $t=r(M);Jt=l($t,"Swin Transformer V2"),$t.forEach(o),Pe.forEach(o),Tt=g(t),z=s(t,"H2",{class:!0});var qe=r(z);Y=s(qe,"A",{id:!0,class:!0,href:!0});var St=r(Y);at=s(St,"SPAN",{});var yt=r(at);$(pe.$$.fragment,yt),yt.forEach(o),St.forEach(o),Xt=g(qe),st=s(qe,"SPAN",{});var Mn=r(st);Qt=l(Mn,"Overview"),Mn.forEach(o),qe.forEach(o),kt=g(t),R=s(t,"P",{});var Lt=r(R);eo=l(Lt,"The Swin Transformer V2 model was proposed in "),me=s(Lt,"A",{href:!0,rel:!0});var Fn=r(me);to=l(Fn,"Swin Transformer V2: Scaling Up Capacity and Resolution"),Fn.forEach(o),oo=l(Lt," by Ze Liu, Han Hu, Yutong Lin, Zhuliang Yao, Zhenda Xie, Yixuan Wei, Jia Ning, Yue Cao, Zheng Zhang, Li Dong, Furu Wei, Baining Guo."),Lt.forEach(o),xt=g(t),Oe=s(t,"P",{});var En=r(Oe);no=l(En,"The abstract from the paper is the following:"),En.forEach(o),Mt=g(t),Ne=s(t,"P",{});var jn=r(Ne);rt=s(jn,"EM",{});var Cn=r(rt);ao=l(Cn,"Large-scale NLP models have been shown to significantly improve the performance on language tasks with no signs of saturation. They also demonstrate amazing few-shot capabilities like that of human beings. This paper aims to explore large-scale models in computer vision. We tackle three major issues in training and application of large vision models, including training instability, resolution gaps between pre-training and fine-tuning, and hunger on labelled data. Three main techniques are proposed: 1) a residual-post-norm method combined with cosine attention to improve training stability; 2) A log-spaced continuous position bias method to effectively transfer models pre-trained using low-resolution images to downstream tasks with high-resolution inputs; 3) A self-supervised pre-training method, SimMIM, to reduce the needs of vast labeled images. Through these techniques, this paper successfully trained a 3 billion-parameter Swin Transformer V2 model, which is the largest dense vision model to date, and makes it capable of training with images of up to 1,536\xD71,536 resolution. It set new performance records on 4 representative vision tasks, including ImageNet-V2 image classification, COCO object detection, ADE20K semantic segmentation, and Kinetics-400 video action classification. Also note our training is much more efficient than that in Google\u2019s billion-level visual models, which consumes 40 times less labelled data and 40 times less training time."),Cn.forEach(o),jn.forEach(o),Ft=g(t),De=s(t,"P",{});var In=r(De);so=l(In,"Tips:"),In.forEach(o),Et=g(t),Le=s(t,"UL",{});var An=r(Le);he=s(An,"LI",{});var Vt=r(he);ro=l(Vt,"One can use the "),Ve=s(Vt,"A",{href:!0});var Pn=r(Ve);io=l(Pn,"AutoFeatureExtractor"),Pn.forEach(o),lo=l(Vt," API to prepare images for the model."),Vt.forEach(o),An.forEach(o),jt=g(t),q=s(t,"P",{});var Re=r(q);co=l(Re,"This model was contributed by "),fe=s(Re,"A",{href:!0,rel:!0});var qn=r(fe);po=l(qn,"nandwalritik"),qn.forEach(o),mo=l(Re,`.
The original code can be found `),ue=s(Re,"A",{href:!0,rel:!0});var zn=r(ue);ho=l(zn,"here"),zn.forEach(o),fo=l(Re,"."),Re.forEach(o),Ct=g(t),O=s(t,"H2",{class:!0});var Wt=r(O);G=s(Wt,"A",{id:!0,class:!0,href:!0});var On=r(G);it=s(On,"SPAN",{});var Nn=r(it);$(ge.$$.fragment,Nn),Nn.forEach(o),On.forEach(o),uo=g(Wt),lt=s(Wt,"SPAN",{});var Dn=r(lt);go=l(Dn,"Swinv2Config"),Dn.forEach(o),Wt.forEach(o),It=g(t),F=s(t,"DIV",{class:!0});var re=r(F);$(_e.$$.fragment,re),_o=g(re),N=s(re,"P",{});var Ge=r(N);wo=l(Ge,"This is the configuration class to store the configuration of a "),We=s(Ge,"A",{href:!0});var Ln=r(We);vo=l(Ln,"Swinv2Model"),Ln.forEach(o),bo=l(Ge,`. It is used to instantiate a Swin
Transformer v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Swin Transformer v2
`),we=s(Ge,"A",{href:!0,rel:!0});var Vn=r(we);$o=l(Vn,"microsoft/swinv2_tiny_patch4_windows8_256"),Vn.forEach(o),So=l(Ge,`
architecture.`),Ge.forEach(o),yo=g(re),D=s(re,"P",{});var Ke=r(D);To=l(Ke,"Configuration objects inherit from "),He=s(Ke,"A",{href:!0});var Wn=r(He);ko=l(Wn,"PretrainedConfig"),Wn.forEach(o),xo=l(Ke,` and can be used to control the model outputs. Read the
documentation from `),Ue=s(Ke,"A",{href:!0});var Hn=r(Ue);Mo=l(Hn,"PretrainedConfig"),Hn.forEach(o),Fo=l(Ke," for more information."),Ke.forEach(o),Eo=g(re),$(K.$$.fragment,re),re.forEach(o),At=g(t),L=s(t,"H2",{class:!0});var Ht=r(L);J=s(Ht,"A",{id:!0,class:!0,href:!0});var Un=r(J);dt=s(Un,"SPAN",{});var Zn=r(dt);$(ve.$$.fragment,Zn),Zn.forEach(o),Un.forEach(o),jo=g(Ht),ct=s(Ht,"SPAN",{});var Bn=r(ct);Co=l(Bn,"Swinv2Model"),Bn.forEach(o),Ht.forEach(o),Pt=g(t),A=s(t,"DIV",{class:!0});var Je=r(A);$(be.$$.fragment,Je),Io=g(Je),$e=s(Je,"P",{});var Ut=r($e);Ao=l(Ut,`The bare Swinv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Se=s(Ut,"A",{href:!0,rel:!0});var Yn=r(Se);Po=l(Yn,"torch.nn.Module"),Yn.forEach(o),qo=l(Ut,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ut.forEach(o),zo=g(Je),j=s(Je,"DIV",{class:!0});var ie=r(j);$(ye.$$.fragment,ie),Oo=g(ie),V=s(ie,"P",{});var Xe=r(V);No=l(Xe,"The "),Ze=s(Xe,"A",{href:!0});var Rn=r(Ze);Do=l(Rn,"Swinv2Model"),Rn.forEach(o),Lo=l(Xe," forward method, overrides the "),pt=s(Xe,"CODE",{});var Gn=r(pt);Vo=l(Gn,"__call__"),Gn.forEach(o),Wo=l(Xe," special method."),Xe.forEach(o),Ho=g(ie),$(X.$$.fragment,ie),Uo=g(ie),$(Q.$$.fragment,ie),ie.forEach(o),Je.forEach(o),qt=g(t),W=s(t,"H2",{class:!0});var Zt=r(W);ee=s(Zt,"A",{id:!0,class:!0,href:!0});var Kn=r(ee);mt=s(Kn,"SPAN",{});var Jn=r(mt);$(Te.$$.fragment,Jn),Jn.forEach(o),Kn.forEach(o),Zo=g(Zt),ht=s(Zt,"SPAN",{});var Xn=r(ht);Bo=l(Xn,"Swinv2ForMaskedImageModeling"),Xn.forEach(o),Zt.forEach(o),zt=g(t),P=s(t,"DIV",{class:!0});var Qe=r(P);$(ke.$$.fragment,Qe),Yo=g(Qe),H=s(Qe,"P",{});var et=r(H);Ro=l(et,"Swinv2 Model with a decoder on top for masked image modeling, as proposed in "),xe=s(et,"A",{href:!0,rel:!0});var Qn=r(xe);Go=l(Qn,"SimMIM"),Qn.forEach(o),Ko=l(et,`.
This model is a PyTorch `),Me=s(et,"A",{href:!0,rel:!0});var ea=r(Me);Jo=l(ea,"torch.nn.Module"),ea.forEach(o),Xo=l(et,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),et.forEach(o),Qo=g(Qe),C=s(Qe,"DIV",{class:!0});var le=r(C);$(Fe.$$.fragment,le),en=g(le),U=s(le,"P",{});var tt=r(U);tn=l(tt,"The "),Be=s(tt,"A",{href:!0});var ta=r(Be);on=l(ta,"Swinv2ForMaskedImageModeling"),ta.forEach(o),nn=l(tt," forward method, overrides the "),ft=s(tt,"CODE",{});var oa=r(ft);an=l(oa,"__call__"),oa.forEach(o),sn=l(tt," special method."),tt.forEach(o),rn=g(le),$(te.$$.fragment,le),ln=g(le),$(oe.$$.fragment,le),le.forEach(o),Qe.forEach(o),Ot=g(t),Z=s(t,"H2",{class:!0});var Bt=r(Z);ne=s(Bt,"A",{id:!0,class:!0,href:!0});var na=r(ne);ut=s(na,"SPAN",{});var aa=r(ut);$(Ee.$$.fragment,aa),aa.forEach(o),na.forEach(o),dn=g(Bt),gt=s(Bt,"SPAN",{});var sa=r(gt);cn=l(sa,"Swinv2ForImageClassification"),sa.forEach(o),Bt.forEach(o),Nt=g(t),E=s(t,"DIV",{class:!0});var de=r(E);$(je.$$.fragment,de),pn=g(de),_t=s(de,"P",{});var ra=r(_t);mn=l(ra,`Swinv2 Model transformer with an image classification head on top (a linear layer on top of the final hidden state
of the [CLS] token) e.g. for ImageNet.`),ra.forEach(o),hn=g(de),Ce=s(de,"P",{});var Yt=r(Ce);fn=l(Yt,"This model is a PyTorch "),Ie=s(Yt,"A",{href:!0,rel:!0});var ia=r(Ie);un=l(ia,"torch.nn.Module"),ia.forEach(o),gn=l(Yt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yt.forEach(o),_n=g(de),I=s(de,"DIV",{class:!0});var ce=r(I);$(Ae.$$.fragment,ce),wn=g(ce),B=s(ce,"P",{});var ot=r(B);vn=l(ot,"The "),Ye=s(ot,"A",{href:!0});var la=r(Ye);bn=l(la,"Swinv2ForImageClassification"),la.forEach(o),$n=l(ot," forward method, overrides the "),wt=s(ot,"CODE",{});var da=r(wt);Sn=l(da,"__call__"),da.forEach(o),yn=l(ot," special method."),ot.forEach(o),Tn=g(ce),$(ae.$$.fragment,ce),kn=g(ce),$(se.$$.fragment,ce),ce.forEach(o),de.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(ya)),c(p,"id","swin-transformer-v2"),c(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(p,"href","#swin-transformer-v2"),c(f,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(z,"class","relative group"),c(me,"href","https://arxiv.org/abs/2111.09883"),c(me,"rel","nofollow"),c(Ve,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor"),c(fe,"href","https://huggingface.co/nandwalritik"),c(fe,"rel","nofollow"),c(ue,"href","https://github.com/microsoft/Swin-Transformer"),c(ue,"rel","nofollow"),c(G,"id","transformers.Swinv2Config"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#transformers.Swinv2Config"),c(O,"class","relative group"),c(We,"href","/docs/transformers/main/en/model_doc/swinv2#transformers.Swinv2Model"),c(we,"href","https://huggingface.co/microsoft/swinv2_tiny_patch4_windows8_256"),c(we,"rel","nofollow"),c(He,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ue,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(J,"id","transformers.Swinv2Model"),c(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(J,"href","#transformers.Swinv2Model"),c(L,"class","relative group"),c(Se,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Se,"rel","nofollow"),c(Ze,"href","/docs/transformers/main/en/model_doc/swinv2#transformers.Swinv2Model"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ee,"id","transformers.Swinv2ForMaskedImageModeling"),c(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ee,"href","#transformers.Swinv2ForMaskedImageModeling"),c(W,"class","relative group"),c(xe,"href","https://arxiv.org/abs/2111.09886"),c(xe,"rel","nofollow"),c(Me,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Me,"rel","nofollow"),c(Be,"href","/docs/transformers/main/en/model_doc/swinv2#transformers.Swinv2ForMaskedImageModeling"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ne,"id","transformers.Swinv2ForImageClassification"),c(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ne,"href","#transformers.Swinv2ForImageClassification"),c(Z,"class","relative group"),c(Ie,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ie,"rel","nofollow"),c(Ye,"href","/docs/transformers/main/en/model_doc/swinv2#transformers.Swinv2ForImageClassification"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,h){e(document.head,d),_(t,v,h),_(t,f,h),e(f,p),e(p,w),S(n,w,null),e(f,m),e(f,M),e(M,Jt),_(t,Tt,h),_(t,z,h),e(z,Y),e(Y,at),S(pe,at,null),e(z,Xt),e(z,st),e(st,Qt),_(t,kt,h),_(t,R,h),e(R,eo),e(R,me),e(me,to),e(R,oo),_(t,xt,h),_(t,Oe,h),e(Oe,no),_(t,Mt,h),_(t,Ne,h),e(Ne,rt),e(rt,ao),_(t,Ft,h),_(t,De,h),e(De,so),_(t,Et,h),_(t,Le,h),e(Le,he),e(he,ro),e(he,Ve),e(Ve,io),e(he,lo),_(t,jt,h),_(t,q,h),e(q,co),e(q,fe),e(fe,po),e(q,mo),e(q,ue),e(ue,ho),e(q,fo),_(t,Ct,h),_(t,O,h),e(O,G),e(G,it),S(ge,it,null),e(O,uo),e(O,lt),e(lt,go),_(t,It,h),_(t,F,h),S(_e,F,null),e(F,_o),e(F,N),e(N,wo),e(N,We),e(We,vo),e(N,bo),e(N,we),e(we,$o),e(N,So),e(F,yo),e(F,D),e(D,To),e(D,He),e(He,ko),e(D,xo),e(D,Ue),e(Ue,Mo),e(D,Fo),e(F,Eo),S(K,F,null),_(t,At,h),_(t,L,h),e(L,J),e(J,dt),S(ve,dt,null),e(L,jo),e(L,ct),e(ct,Co),_(t,Pt,h),_(t,A,h),S(be,A,null),e(A,Io),e(A,$e),e($e,Ao),e($e,Se),e(Se,Po),e($e,qo),e(A,zo),e(A,j),S(ye,j,null),e(j,Oo),e(j,V),e(V,No),e(V,Ze),e(Ze,Do),e(V,Lo),e(V,pt),e(pt,Vo),e(V,Wo),e(j,Ho),S(X,j,null),e(j,Uo),S(Q,j,null),_(t,qt,h),_(t,W,h),e(W,ee),e(ee,mt),S(Te,mt,null),e(W,Zo),e(W,ht),e(ht,Bo),_(t,zt,h),_(t,P,h),S(ke,P,null),e(P,Yo),e(P,H),e(H,Ro),e(H,xe),e(xe,Go),e(H,Ko),e(H,Me),e(Me,Jo),e(H,Xo),e(P,Qo),e(P,C),S(Fe,C,null),e(C,en),e(C,U),e(U,tn),e(U,Be),e(Be,on),e(U,nn),e(U,ft),e(ft,an),e(U,sn),e(C,rn),S(te,C,null),e(C,ln),S(oe,C,null),_(t,Ot,h),_(t,Z,h),e(Z,ne),e(ne,ut),S(Ee,ut,null),e(Z,dn),e(Z,gt),e(gt,cn),_(t,Nt,h),_(t,E,h),S(je,E,null),e(E,pn),e(E,_t),e(_t,mn),e(E,hn),e(E,Ce),e(Ce,fn),e(Ce,Ie),e(Ie,un),e(Ce,gn),e(E,_n),e(E,I),S(Ae,I,null),e(I,wn),e(I,B),e(B,vn),e(B,Ye),e(Ye,bn),e(B,$n),e(B,wt),e(wt,Sn),e(B,yn),e(I,Tn),S(ae,I,null),e(I,kn),S(se,I,null),Dt=!0},p(t,[h]){const Pe={};h&2&&(Pe.$$scope={dirty:h,ctx:t}),K.$set(Pe);const vt={};h&2&&(vt.$$scope={dirty:h,ctx:t}),X.$set(vt);const bt={};h&2&&(bt.$$scope={dirty:h,ctx:t}),Q.$set(bt);const $t={};h&2&&($t.$$scope={dirty:h,ctx:t}),te.$set($t);const qe={};h&2&&(qe.$$scope={dirty:h,ctx:t}),oe.$set(qe);const St={};h&2&&(St.$$scope={dirty:h,ctx:t}),ae.$set(St);const yt={};h&2&&(yt.$$scope={dirty:h,ctx:t}),se.$set(yt)},i(t){Dt||(y(n.$$.fragment,t),y(pe.$$.fragment,t),y(ge.$$.fragment,t),y(_e.$$.fragment,t),y(K.$$.fragment,t),y(ve.$$.fragment,t),y(be.$$.fragment,t),y(ye.$$.fragment,t),y(X.$$.fragment,t),y(Q.$$.fragment,t),y(Te.$$.fragment,t),y(ke.$$.fragment,t),y(Fe.$$.fragment,t),y(te.$$.fragment,t),y(oe.$$.fragment,t),y(Ee.$$.fragment,t),y(je.$$.fragment,t),y(Ae.$$.fragment,t),y(ae.$$.fragment,t),y(se.$$.fragment,t),Dt=!0)},o(t){T(n.$$.fragment,t),T(pe.$$.fragment,t),T(ge.$$.fragment,t),T(_e.$$.fragment,t),T(K.$$.fragment,t),T(ve.$$.fragment,t),T(be.$$.fragment,t),T(ye.$$.fragment,t),T(X.$$.fragment,t),T(Q.$$.fragment,t),T(Te.$$.fragment,t),T(ke.$$.fragment,t),T(Fe.$$.fragment,t),T(te.$$.fragment,t),T(oe.$$.fragment,t),T(Ee.$$.fragment,t),T(je.$$.fragment,t),T(Ae.$$.fragment,t),T(ae.$$.fragment,t),T(se.$$.fragment,t),Dt=!1},d(t){o(d),t&&o(v),t&&o(f),k(n),t&&o(Tt),t&&o(z),k(pe),t&&o(kt),t&&o(R),t&&o(xt),t&&o(Oe),t&&o(Mt),t&&o(Ne),t&&o(Ft),t&&o(De),t&&o(Et),t&&o(Le),t&&o(jt),t&&o(q),t&&o(Ct),t&&o(O),k(ge),t&&o(It),t&&o(F),k(_e),k(K),t&&o(At),t&&o(L),k(ve),t&&o(Pt),t&&o(A),k(be),k(ye),k(X),k(Q),t&&o(qt),t&&o(W),k(Te),t&&o(zt),t&&o(P),k(ke),k(Fe),k(te),k(oe),t&&o(Ot),t&&o(Z),k(Ee),t&&o(Nt),t&&o(E),k(je),k(Ae),k(ae),k(se)}}}const ya={local:"swin-transformer-v2",sections:[{local:"overview",title:"Overview"},{local:"transformers.Swinv2Config",title:"Swinv2Config"},{local:"transformers.Swinv2Model",title:"Swinv2Model"},{local:"transformers.Swinv2ForMaskedImageModeling",title:"Swinv2ForMaskedImageModeling"},{local:"transformers.Swinv2ForImageClassification",title:"Swinv2ForImageClassification"}],title:"Swin Transformer V2"};function Ta(x){return fa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ca extends ca{constructor(d){super();pa(this,d,Ta,Sa,ma,{})}}export{Ca as default,ya as metadata};
