import{S as gs,i as _s,s as vs,e as s,k as u,w as b,t as i,M as ws,c as a,d as o,m as g,a as r,x as $,h as l,b as p,G as e,g as _,y,q as S,o as T,B as k,v as bs,L as eo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Xt}from"../../chunks/Tip-hf-doc-builder.js";import{D as De}from"../../chunks/Docstring-hf-doc-builder.js";import{C as to}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as st}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Qt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function $s(x){let d,w,m,h,v;return h=new to({props:{code:`from transformers import Swinv2Config, Swinv2Model

# Initializing a Swinv2 microsoft/swinv2_tiny_patch4_windows8_256 style configuration
configuration = Swinv2Config()

# Initializing a model (with random weights) from the microsoft/swinv2_tiny_patch4_windows8_256 style configuration
model = Swinv2Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Swinv2Config, Swinv2Model

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Swinv2 microsoft/swinv2_tiny_patch4_windows8_256 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Swinv2Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the microsoft/swinv2_tiny_patch4_windows8_256 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Swinv2Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),w=i("Example:"),m=u(),b(h.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);w=l(c,"Example:"),c.forEach(o),m=g(n),$(h.$$.fragment,n)},m(n,c){_(n,d,c),e(d,w),_(n,m,c),y(h,n,c),v=!0},p:eo,i(n){v||(S(h.$$.fragment,n),v=!0)},o(n){T(h.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(m),k(h,n)}}}function ys(x){let d,w,m,h,v;return{c(){d=s("p"),w=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),h=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);w=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(c,"CODE",{});var M=r(m);h=l(M,"Module"),M.forEach(o),v=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){_(n,d,c),e(d,w),e(d,m),e(m,h),e(d,v)},d(n){n&&o(d)}}}function Ss(x){let d,w,m,h,v;return h=new to({props:{code:`from transformers import AutoFeatureExtractor, Swinv2Model
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
[<span class="hljs-number">1</span>, <span class="hljs-number">64</span>, <span class="hljs-number">768</span>]`}}),{c(){d=s("p"),w=i("Example:"),m=u(),b(h.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);w=l(c,"Example:"),c.forEach(o),m=g(n),$(h.$$.fragment,n)},m(n,c){_(n,d,c),e(d,w),_(n,m,c),y(h,n,c),v=!0},p:eo,i(n){v||(S(h.$$.fragment,n),v=!0)},o(n){T(h.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(m),k(h,n)}}}function Ts(x){let d,w,m,h,v;return{c(){d=s("p"),w=i("Note that we provide a script to pre-train this model on custom data in our "),m=s("a"),h=i(`examples
directory`),v=i("."),this.h()},l(n){d=a(n,"P",{});var c=r(d);w=l(c,"Note that we provide a script to pre-train this model on custom data in our "),m=a(c,"A",{href:!0,rel:!0});var M=r(m);h=l(M,`examples
directory`),M.forEach(o),v=l(c,"."),c.forEach(o),this.h()},h(){p(m,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/image-pretraining"),p(m,"rel","nofollow")},m(n,c){_(n,d,c),e(d,w),e(d,m),e(m,h),e(d,v)},d(n){n&&o(d)}}}function ks(x){let d,w,m,h,v;return{c(){d=s("p"),w=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),h=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);w=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(c,"CODE",{});var M=r(m);h=l(M,"Module"),M.forEach(o),v=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){_(n,d,c),e(d,w),e(d,m),e(m,h),e(d,v)},d(n){n&&o(d)}}}function xs(x){let d,w,m,h,v;return h=new to({props:{code:`from transformers import AutoFeatureExtractor, Swinv2ForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">256</span>, <span class="hljs-number">256</span>]`}}),{c(){d=s("p"),w=i("Examples:"),m=u(),b(h.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);w=l(c,"Examples:"),c.forEach(o),m=g(n),$(h.$$.fragment,n)},m(n,c){_(n,d,c),e(d,w),_(n,m,c),y(h,n,c),v=!0},p:eo,i(n){v||(S(h.$$.fragment,n),v=!0)},o(n){T(h.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(m),k(h,n)}}}function Ms(x){let d,w,m,h,v;return{c(){d=s("p"),w=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),h=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);w=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(c,"CODE",{});var M=r(m);h=l(M,"Module"),M.forEach(o),v=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){_(n,d,c),e(d,w),e(d,m),e(m,h),e(d,v)},d(n){n&&o(d)}}}function Es(x){let d,w,m,h,v;return h=new to({props:{code:`from transformers import AutoFeatureExtractor, Swinv2ForImageClassification
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
Egyptian cat`}}),{c(){d=s("p"),w=i("Example:"),m=u(),b(h.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);w=l(c,"Example:"),c.forEach(o),m=g(n),$(h.$$.fragment,n)},m(n,c){_(n,d,c),e(d,w),_(n,m,c),y(h,n,c),v=!0},p:eo,i(n){v||(S(h.$$.fragment,n),v=!0)},o(n){T(h.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(m),k(h,n)}}}function Fs(x){let d,w,m,h,v,n,c,M,oo,xt,O,Y,at,he,no,rt,so,Mt,R,ao,me,ro,io,Et,Le,lo,Ft,Ve,it,co,jt,We,po,Ct,He,fe,ho,Ue,mo,fo,It,q,uo,ue,go,_o,ge,vo,wo,At,N,G,lt,_e,bo,dt,$o,Pt,F,ve,yo,D,So,Ze,To,ko,we,xo,Mo,Eo,L,Fo,Be,jo,Co,Ye,Io,Ao,Po,K,qt,V,J,ct,be,qo,pt,zo,zt,P,$e,Oo,ye,No,Se,Do,Lo,Vo,C,Te,Wo,W,Ho,Re,Uo,Zo,ht,Bo,Yo,Ro,X,Go,Q,Ot,H,ee,mt,ke,Ko,ft,Jo,Nt,E,xe,Xo,Me,Qo,Ee,en,tn,on,te,nn,Fe,sn,je,an,rn,ln,I,Ce,dn,U,cn,Ge,pn,hn,ut,mn,fn,un,oe,gn,ne,Dt,Z,se,gt,Ie,_n,_t,vn,Lt,j,Ae,wn,vt,bn,$n,Pe,yn,qe,Sn,Tn,kn,A,ze,xn,B,Mn,Ke,En,Fn,wt,jn,Cn,In,ae,An,re,Vt;return n=new st({}),he=new st({}),_e=new st({}),ve=new De({props:{name:"class transformers.Swinv2Config",anchor:"transformers.Swinv2Config",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 4"},{name:"num_channels",val:" = 3"},{name:"embed_dim",val:" = 96"},{name:"depths",val:" = [2, 2, 6, 2]"},{name:"num_heads",val:" = [3, 6, 12, 24]"},{name:"window_size",val:" = 7"},{name:"mlp_ratio",val:" = 4.0"},{name:"qkv_bias",val:" = True"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"drop_path_rate",val:" = 0.1"},{name:"hidden_act",val:" = 'gelu'"},{name:"use_absolute_embeddings",val:" = False"},{name:"patch_norm",val:" = True"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"encoder_stride",val:" = 32"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Swinv2Config.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
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
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/swinv2/configuration_swinv2.py#L30"}}),K=new Qt({props:{anchor:"transformers.Swinv2Config.example",$$slots:{default:[$s]},$$scope:{ctx:x}}}),be=new st({}),$e=new De({props:{name:"class transformers.Swinv2Model",anchor:"transformers.Swinv2Model",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"},{name:"use_mask_token",val:" = False"}],parametersDescription:[{anchor:"transformers.Swinv2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/swinv2#transformers.Swinv2Config">Swinv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/swinv2/modeling_swinv2.py#L995"}}),Te=new De({props:{name:"forward",anchor:"transformers.Swinv2Model.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Swinv2Model.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/swinv2/modeling_swinv2.py#L1022",returnDescription:`
<p>A <code>transformers.models.swinv2.modeling_swinv2.Swinv2ModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/swinv2#transformers.Swinv2Config"
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
`}}),X=new Xt({props:{$$slots:{default:[ys]},$$scope:{ctx:x}}}),Q=new Qt({props:{anchor:"transformers.Swinv2Model.forward.example",$$slots:{default:[Ss]},$$scope:{ctx:x}}}),ke=new st({}),xe=new De({props:{name:"class transformers.Swinv2ForMaskedImageModeling",anchor:"transformers.Swinv2ForMaskedImageModeling",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Swinv2ForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/swinv2#transformers.Swinv2Config">Swinv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/swinv2/modeling_swinv2.py#L1103"}}),te=new Xt({props:{$$slots:{default:[Ts]},$$scope:{ctx:x}}}),Ce=new De({props:{name:"forward",anchor:"transformers.Swinv2ForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/swinv2/modeling_swinv2.py#L1120",returnDescription:`
<p>A <code>transformers.models.swinv2.modeling_swinv2.Swinv2MaskedImageModelingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/swinv2#transformers.Swinv2Config"
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
`}}),oe=new Xt({props:{$$slots:{default:[ks]},$$scope:{ctx:x}}}),ne=new Qt({props:{anchor:"transformers.Swinv2ForMaskedImageModeling.forward.example",$$slots:{default:[xs]},$$scope:{ctx:x}}}),Ie=new st({}),Ae=new De({props:{name:"class transformers.Swinv2ForImageClassification",anchor:"transformers.Swinv2ForImageClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Swinv2ForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/swinv2#transformers.Swinv2Config">Swinv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/swinv2/modeling_swinv2.py#L1215"}}),ze=new De({props:{name:"forward",anchor:"transformers.Swinv2ForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Swinv2ForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Swinv2ForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/swinv2/modeling_swinv2.py#L1230",returnDescription:`
<p>A <code>transformers.models.swinv2.modeling_swinv2.Swinv2ImageClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/swinv2#transformers.Swinv2Config"
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
`}}),ae=new Xt({props:{$$slots:{default:[Ms]},$$scope:{ctx:x}}}),re=new Qt({props:{anchor:"transformers.Swinv2ForImageClassification.forward.example",$$slots:{default:[Es]},$$scope:{ctx:x}}}),{c(){d=s("meta"),w=u(),m=s("h1"),h=s("a"),v=s("span"),b(n.$$.fragment),c=u(),M=s("span"),oo=i("Swin Transformer V2"),xt=u(),O=s("h2"),Y=s("a"),at=s("span"),b(he.$$.fragment),no=u(),rt=s("span"),so=i("Overview"),Mt=u(),R=s("p"),ao=i("The Swin Transformer V2 model was proposed in "),me=s("a"),ro=i("Swin Transformer V2: Scaling Up Capacity and Resolution"),io=i(" by Ze Liu, Han Hu, Yutong Lin, Zhuliang Yao, Zhenda Xie, Yixuan Wei, Jia Ning, Yue Cao, Zheng Zhang, Li Dong, Furu Wei, Baining Guo."),Et=u(),Le=s("p"),lo=i("The abstract from the paper is the following:"),Ft=u(),Ve=s("p"),it=s("em"),co=i("Large-scale NLP models have been shown to significantly improve the performance on language tasks with no signs of saturation. They also demonstrate amazing few-shot capabilities like that of human beings. This paper aims to explore large-scale models in computer vision. We tackle three major issues in training and application of large vision models, including training instability, resolution gaps between pre-training and fine-tuning, and hunger on labelled data. Three main techniques are proposed: 1) a residual-post-norm method combined with cosine attention to improve training stability; 2) A log-spaced continuous position bias method to effectively transfer models pre-trained using low-resolution images to downstream tasks with high-resolution inputs; 3) A self-supervised pre-training method, SimMIM, to reduce the needs of vast labeled images. Through these techniques, this paper successfully trained a 3 billion-parameter Swin Transformer V2 model, which is the largest dense vision model to date, and makes it capable of training with images of up to 1,536\xD71,536 resolution. It set new performance records on 4 representative vision tasks, including ImageNet-V2 image classification, COCO object detection, ADE20K semantic segmentation, and Kinetics-400 video action classification. Also note our training is much more efficient than that in Google\u2019s billion-level visual models, which consumes 40 times less labelled data and 40 times less training time."),jt=u(),We=s("p"),po=i("Tips:"),Ct=u(),He=s("ul"),fe=s("li"),ho=i("One can use the "),Ue=s("a"),mo=i("AutoFeatureExtractor"),fo=i(" API to prepare images for the model."),It=u(),q=s("p"),uo=i("This model was contributed by "),ue=s("a"),go=i("nandwalritik"),_o=i(`.
The original code can be found `),ge=s("a"),vo=i("here"),wo=i("."),At=u(),N=s("h2"),G=s("a"),lt=s("span"),b(_e.$$.fragment),bo=u(),dt=s("span"),$o=i("Swinv2Config"),Pt=u(),F=s("div"),b(ve.$$.fragment),yo=u(),D=s("p"),So=i("This is the configuration class to store the configuration of a "),Ze=s("a"),To=i("Swinv2Model"),ko=i(`. It is used to instantiate a Swin
Transformer v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Swin Transformer v2
`),we=s("a"),xo=i("microsoft/swinv2_tiny_patch4_windows8_256"),Mo=i(`
architecture.`),Eo=u(),L=s("p"),Fo=i("Configuration objects inherit from "),Be=s("a"),jo=i("PretrainedConfig"),Co=i(` and can be used to control the model outputs. Read the
documentation from `),Ye=s("a"),Io=i("PretrainedConfig"),Ao=i(" for more information."),Po=u(),b(K.$$.fragment),qt=u(),V=s("h2"),J=s("a"),ct=s("span"),b(be.$$.fragment),qo=u(),pt=s("span"),zo=i("Swinv2Model"),zt=u(),P=s("div"),b($e.$$.fragment),Oo=u(),ye=s("p"),No=i(`The bare Swinv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Se=s("a"),Do=i("torch.nn.Module"),Lo=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vo=u(),C=s("div"),b(Te.$$.fragment),Wo=u(),W=s("p"),Ho=i("The "),Re=s("a"),Uo=i("Swinv2Model"),Zo=i(" forward method, overrides the "),ht=s("code"),Bo=i("__call__"),Yo=i(" special method."),Ro=u(),b(X.$$.fragment),Go=u(),b(Q.$$.fragment),Ot=u(),H=s("h2"),ee=s("a"),mt=s("span"),b(ke.$$.fragment),Ko=u(),ft=s("span"),Jo=i("Swinv2ForMaskedImageModeling"),Nt=u(),E=s("div"),b(xe.$$.fragment),Xo=u(),Me=s("p"),Qo=i(`Swinv2 Model with a decoder on top for masked image modeling, as proposed in
`),Ee=s("a"),en=i("SimMIM"),tn=i("."),on=u(),b(te.$$.fragment),nn=u(),Fe=s("p"),sn=i("This model is a PyTorch "),je=s("a"),an=i("torch.nn.Module"),rn=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ln=u(),I=s("div"),b(Ce.$$.fragment),dn=u(),U=s("p"),cn=i("The "),Ge=s("a"),pn=i("Swinv2ForMaskedImageModeling"),hn=i(" forward method, overrides the "),ut=s("code"),mn=i("__call__"),fn=i(" special method."),un=u(),b(oe.$$.fragment),gn=u(),b(ne.$$.fragment),Dt=u(),Z=s("h2"),se=s("a"),gt=s("span"),b(Ie.$$.fragment),_n=u(),_t=s("span"),vn=i("Swinv2ForImageClassification"),Lt=u(),j=s("div"),b(Ae.$$.fragment),wn=u(),vt=s("p"),bn=i(`Swinv2 Model transformer with an image classification head on top (a linear layer on top of the final hidden state
of the [CLS] token) e.g. for ImageNet.`),$n=u(),Pe=s("p"),yn=i("This model is a PyTorch "),qe=s("a"),Sn=i("torch.nn.Module"),Tn=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kn=u(),A=s("div"),b(ze.$$.fragment),xn=u(),B=s("p"),Mn=i("The "),Ke=s("a"),En=i("Swinv2ForImageClassification"),Fn=i(" forward method, overrides the "),wt=s("code"),jn=i("__call__"),Cn=i(" special method."),In=u(),b(ae.$$.fragment),An=u(),b(re.$$.fragment),this.h()},l(t){const f=ws('[data-svelte="svelte-1phssyn"]',document.head);d=a(f,"META",{name:!0,content:!0}),f.forEach(o),w=g(t),m=a(t,"H1",{class:!0});var Oe=r(m);h=a(Oe,"A",{id:!0,class:!0,href:!0});var bt=r(h);v=a(bt,"SPAN",{});var $t=r(v);$(n.$$.fragment,$t),$t.forEach(o),bt.forEach(o),c=g(Oe),M=a(Oe,"SPAN",{});var yt=r(M);oo=l(yt,"Swin Transformer V2"),yt.forEach(o),Oe.forEach(o),xt=g(t),O=a(t,"H2",{class:!0});var Ne=r(O);Y=a(Ne,"A",{id:!0,class:!0,href:!0});var St=r(Y);at=a(St,"SPAN",{});var Tt=r(at);$(he.$$.fragment,Tt),Tt.forEach(o),St.forEach(o),no=g(Ne),rt=a(Ne,"SPAN",{});var kt=r(rt);so=l(kt,"Overview"),kt.forEach(o),Ne.forEach(o),Mt=g(t),R=a(t,"P",{});var Wt=r(R);ao=l(Wt,"The Swin Transformer V2 model was proposed in "),me=a(Wt,"A",{href:!0,rel:!0});var Pn=r(me);ro=l(Pn,"Swin Transformer V2: Scaling Up Capacity and Resolution"),Pn.forEach(o),io=l(Wt," by Ze Liu, Han Hu, Yutong Lin, Zhuliang Yao, Zhenda Xie, Yixuan Wei, Jia Ning, Yue Cao, Zheng Zhang, Li Dong, Furu Wei, Baining Guo."),Wt.forEach(o),Et=g(t),Le=a(t,"P",{});var qn=r(Le);lo=l(qn,"The abstract from the paper is the following:"),qn.forEach(o),Ft=g(t),Ve=a(t,"P",{});var zn=r(Ve);it=a(zn,"EM",{});var On=r(it);co=l(On,"Large-scale NLP models have been shown to significantly improve the performance on language tasks with no signs of saturation. They also demonstrate amazing few-shot capabilities like that of human beings. This paper aims to explore large-scale models in computer vision. We tackle three major issues in training and application of large vision models, including training instability, resolution gaps between pre-training and fine-tuning, and hunger on labelled data. Three main techniques are proposed: 1) a residual-post-norm method combined with cosine attention to improve training stability; 2) A log-spaced continuous position bias method to effectively transfer models pre-trained using low-resolution images to downstream tasks with high-resolution inputs; 3) A self-supervised pre-training method, SimMIM, to reduce the needs of vast labeled images. Through these techniques, this paper successfully trained a 3 billion-parameter Swin Transformer V2 model, which is the largest dense vision model to date, and makes it capable of training with images of up to 1,536\xD71,536 resolution. It set new performance records on 4 representative vision tasks, including ImageNet-V2 image classification, COCO object detection, ADE20K semantic segmentation, and Kinetics-400 video action classification. Also note our training is much more efficient than that in Google\u2019s billion-level visual models, which consumes 40 times less labelled data and 40 times less training time."),On.forEach(o),zn.forEach(o),jt=g(t),We=a(t,"P",{});var Nn=r(We);po=l(Nn,"Tips:"),Nn.forEach(o),Ct=g(t),He=a(t,"UL",{});var Dn=r(He);fe=a(Dn,"LI",{});var Ht=r(fe);ho=l(Ht,"One can use the "),Ue=a(Ht,"A",{href:!0});var Ln=r(Ue);mo=l(Ln,"AutoFeatureExtractor"),Ln.forEach(o),fo=l(Ht," API to prepare images for the model."),Ht.forEach(o),Dn.forEach(o),It=g(t),q=a(t,"P",{});var Je=r(q);uo=l(Je,"This model was contributed by "),ue=a(Je,"A",{href:!0,rel:!0});var Vn=r(ue);go=l(Vn,"nandwalritik"),Vn.forEach(o),_o=l(Je,`.
The original code can be found `),ge=a(Je,"A",{href:!0,rel:!0});var Wn=r(ge);vo=l(Wn,"here"),Wn.forEach(o),wo=l(Je,"."),Je.forEach(o),At=g(t),N=a(t,"H2",{class:!0});var Ut=r(N);G=a(Ut,"A",{id:!0,class:!0,href:!0});var Hn=r(G);lt=a(Hn,"SPAN",{});var Un=r(lt);$(_e.$$.fragment,Un),Un.forEach(o),Hn.forEach(o),bo=g(Ut),dt=a(Ut,"SPAN",{});var Zn=r(dt);$o=l(Zn,"Swinv2Config"),Zn.forEach(o),Ut.forEach(o),Pt=g(t),F=a(t,"DIV",{class:!0});var ie=r(F);$(ve.$$.fragment,ie),yo=g(ie),D=a(ie,"P",{});var Xe=r(D);So=l(Xe,"This is the configuration class to store the configuration of a "),Ze=a(Xe,"A",{href:!0});var Bn=r(Ze);To=l(Bn,"Swinv2Model"),Bn.forEach(o),ko=l(Xe,`. It is used to instantiate a Swin
Transformer v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Swin Transformer v2
`),we=a(Xe,"A",{href:!0,rel:!0});var Yn=r(we);xo=l(Yn,"microsoft/swinv2_tiny_patch4_windows8_256"),Yn.forEach(o),Mo=l(Xe,`
architecture.`),Xe.forEach(o),Eo=g(ie),L=a(ie,"P",{});var Qe=r(L);Fo=l(Qe,"Configuration objects inherit from "),Be=a(Qe,"A",{href:!0});var Rn=r(Be);jo=l(Rn,"PretrainedConfig"),Rn.forEach(o),Co=l(Qe,` and can be used to control the model outputs. Read the
documentation from `),Ye=a(Qe,"A",{href:!0});var Gn=r(Ye);Io=l(Gn,"PretrainedConfig"),Gn.forEach(o),Ao=l(Qe," for more information."),Qe.forEach(o),Po=g(ie),$(K.$$.fragment,ie),ie.forEach(o),qt=g(t),V=a(t,"H2",{class:!0});var Zt=r(V);J=a(Zt,"A",{id:!0,class:!0,href:!0});var Kn=r(J);ct=a(Kn,"SPAN",{});var Jn=r(ct);$(be.$$.fragment,Jn),Jn.forEach(o),Kn.forEach(o),qo=g(Zt),pt=a(Zt,"SPAN",{});var Xn=r(pt);zo=l(Xn,"Swinv2Model"),Xn.forEach(o),Zt.forEach(o),zt=g(t),P=a(t,"DIV",{class:!0});var et=r(P);$($e.$$.fragment,et),Oo=g(et),ye=a(et,"P",{});var Bt=r(ye);No=l(Bt,`The bare Swinv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Se=a(Bt,"A",{href:!0,rel:!0});var Qn=r(Se);Do=l(Qn,"torch.nn.Module"),Qn.forEach(o),Lo=l(Bt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Bt.forEach(o),Vo=g(et),C=a(et,"DIV",{class:!0});var le=r(C);$(Te.$$.fragment,le),Wo=g(le),W=a(le,"P",{});var tt=r(W);Ho=l(tt,"The "),Re=a(tt,"A",{href:!0});var es=r(Re);Uo=l(es,"Swinv2Model"),es.forEach(o),Zo=l(tt," forward method, overrides the "),ht=a(tt,"CODE",{});var ts=r(ht);Bo=l(ts,"__call__"),ts.forEach(o),Yo=l(tt," special method."),tt.forEach(o),Ro=g(le),$(X.$$.fragment,le),Go=g(le),$(Q.$$.fragment,le),le.forEach(o),et.forEach(o),Ot=g(t),H=a(t,"H2",{class:!0});var Yt=r(H);ee=a(Yt,"A",{id:!0,class:!0,href:!0});var os=r(ee);mt=a(os,"SPAN",{});var ns=r(mt);$(ke.$$.fragment,ns),ns.forEach(o),os.forEach(o),Ko=g(Yt),ft=a(Yt,"SPAN",{});var ss=r(ft);Jo=l(ss,"Swinv2ForMaskedImageModeling"),ss.forEach(o),Yt.forEach(o),Nt=g(t),E=a(t,"DIV",{class:!0});var z=r(E);$(xe.$$.fragment,z),Xo=g(z),Me=a(z,"P",{});var Rt=r(Me);Qo=l(Rt,`Swinv2 Model with a decoder on top for masked image modeling, as proposed in
`),Ee=a(Rt,"A",{href:!0,rel:!0});var as=r(Ee);en=l(as,"SimMIM"),as.forEach(o),tn=l(Rt,"."),Rt.forEach(o),on=g(z),$(te.$$.fragment,z),nn=g(z),Fe=a(z,"P",{});var Gt=r(Fe);sn=l(Gt,"This model is a PyTorch "),je=a(Gt,"A",{href:!0,rel:!0});var rs=r(je);an=l(rs,"torch.nn.Module"),rs.forEach(o),rn=l(Gt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gt.forEach(o),ln=g(z),I=a(z,"DIV",{class:!0});var de=r(I);$(Ce.$$.fragment,de),dn=g(de),U=a(de,"P",{});var ot=r(U);cn=l(ot,"The "),Ge=a(ot,"A",{href:!0});var is=r(Ge);pn=l(is,"Swinv2ForMaskedImageModeling"),is.forEach(o),hn=l(ot," forward method, overrides the "),ut=a(ot,"CODE",{});var ls=r(ut);mn=l(ls,"__call__"),ls.forEach(o),fn=l(ot," special method."),ot.forEach(o),un=g(de),$(oe.$$.fragment,de),gn=g(de),$(ne.$$.fragment,de),de.forEach(o),z.forEach(o),Dt=g(t),Z=a(t,"H2",{class:!0});var Kt=r(Z);se=a(Kt,"A",{id:!0,class:!0,href:!0});var ds=r(se);gt=a(ds,"SPAN",{});var cs=r(gt);$(Ie.$$.fragment,cs),cs.forEach(o),ds.forEach(o),_n=g(Kt),_t=a(Kt,"SPAN",{});var ps=r(_t);vn=l(ps,"Swinv2ForImageClassification"),ps.forEach(o),Kt.forEach(o),Lt=g(t),j=a(t,"DIV",{class:!0});var ce=r(j);$(Ae.$$.fragment,ce),wn=g(ce),vt=a(ce,"P",{});var hs=r(vt);bn=l(hs,`Swinv2 Model transformer with an image classification head on top (a linear layer on top of the final hidden state
of the [CLS] token) e.g. for ImageNet.`),hs.forEach(o),$n=g(ce),Pe=a(ce,"P",{});var Jt=r(Pe);yn=l(Jt,"This model is a PyTorch "),qe=a(Jt,"A",{href:!0,rel:!0});var ms=r(qe);Sn=l(ms,"torch.nn.Module"),ms.forEach(o),Tn=l(Jt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Jt.forEach(o),kn=g(ce),A=a(ce,"DIV",{class:!0});var pe=r(A);$(ze.$$.fragment,pe),xn=g(pe),B=a(pe,"P",{});var nt=r(B);Mn=l(nt,"The "),Ke=a(nt,"A",{href:!0});var fs=r(Ke);En=l(fs,"Swinv2ForImageClassification"),fs.forEach(o),Fn=l(nt," forward method, overrides the "),wt=a(nt,"CODE",{});var us=r(wt);jn=l(us,"__call__"),us.forEach(o),Cn=l(nt," special method."),nt.forEach(o),In=g(pe),$(ae.$$.fragment,pe),An=g(pe),$(re.$$.fragment,pe),pe.forEach(o),ce.forEach(o),this.h()},h(){p(d,"name","hf:doc:metadata"),p(d,"content",JSON.stringify(js)),p(h,"id","swin-transformer-v2"),p(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(h,"href","#swin-transformer-v2"),p(m,"class","relative group"),p(Y,"id","overview"),p(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Y,"href","#overview"),p(O,"class","relative group"),p(me,"href","https://arxiv.org/abs/2111.09883"),p(me,"rel","nofollow"),p(Ue,"href","/docs/transformers/v4.24.0/en/model_doc/auto#transformers.AutoFeatureExtractor"),p(ue,"href","https://huggingface.co/nandwalritik"),p(ue,"rel","nofollow"),p(ge,"href","https://github.com/microsoft/Swin-Transformer"),p(ge,"rel","nofollow"),p(G,"id","transformers.Swinv2Config"),p(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(G,"href","#transformers.Swinv2Config"),p(N,"class","relative group"),p(Ze,"href","/docs/transformers/v4.24.0/en/model_doc/swinv2#transformers.Swinv2Model"),p(we,"href","https://huggingface.co/microsoft/swinv2_tiny_patch4_windows8_256"),p(we,"rel","nofollow"),p(Be,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),p(Ye,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),p(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(J,"id","transformers.Swinv2Model"),p(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(J,"href","#transformers.Swinv2Model"),p(V,"class","relative group"),p(Se,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Se,"rel","nofollow"),p(Re,"href","/docs/transformers/v4.24.0/en/model_doc/swinv2#transformers.Swinv2Model"),p(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ee,"id","transformers.Swinv2ForMaskedImageModeling"),p(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ee,"href","#transformers.Swinv2ForMaskedImageModeling"),p(H,"class","relative group"),p(Ee,"href","https://arxiv.org/abs/2111.09886"),p(Ee,"rel","nofollow"),p(je,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(je,"rel","nofollow"),p(Ge,"href","/docs/transformers/v4.24.0/en/model_doc/swinv2#transformers.Swinv2ForMaskedImageModeling"),p(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(se,"id","transformers.Swinv2ForImageClassification"),p(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(se,"href","#transformers.Swinv2ForImageClassification"),p(Z,"class","relative group"),p(qe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(qe,"rel","nofollow"),p(Ke,"href","/docs/transformers/v4.24.0/en/model_doc/swinv2#transformers.Swinv2ForImageClassification"),p(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,d),_(t,w,f),_(t,m,f),e(m,h),e(h,v),y(n,v,null),e(m,c),e(m,M),e(M,oo),_(t,xt,f),_(t,O,f),e(O,Y),e(Y,at),y(he,at,null),e(O,no),e(O,rt),e(rt,so),_(t,Mt,f),_(t,R,f),e(R,ao),e(R,me),e(me,ro),e(R,io),_(t,Et,f),_(t,Le,f),e(Le,lo),_(t,Ft,f),_(t,Ve,f),e(Ve,it),e(it,co),_(t,jt,f),_(t,We,f),e(We,po),_(t,Ct,f),_(t,He,f),e(He,fe),e(fe,ho),e(fe,Ue),e(Ue,mo),e(fe,fo),_(t,It,f),_(t,q,f),e(q,uo),e(q,ue),e(ue,go),e(q,_o),e(q,ge),e(ge,vo),e(q,wo),_(t,At,f),_(t,N,f),e(N,G),e(G,lt),y(_e,lt,null),e(N,bo),e(N,dt),e(dt,$o),_(t,Pt,f),_(t,F,f),y(ve,F,null),e(F,yo),e(F,D),e(D,So),e(D,Ze),e(Ze,To),e(D,ko),e(D,we),e(we,xo),e(D,Mo),e(F,Eo),e(F,L),e(L,Fo),e(L,Be),e(Be,jo),e(L,Co),e(L,Ye),e(Ye,Io),e(L,Ao),e(F,Po),y(K,F,null),_(t,qt,f),_(t,V,f),e(V,J),e(J,ct),y(be,ct,null),e(V,qo),e(V,pt),e(pt,zo),_(t,zt,f),_(t,P,f),y($e,P,null),e(P,Oo),e(P,ye),e(ye,No),e(ye,Se),e(Se,Do),e(ye,Lo),e(P,Vo),e(P,C),y(Te,C,null),e(C,Wo),e(C,W),e(W,Ho),e(W,Re),e(Re,Uo),e(W,Zo),e(W,ht),e(ht,Bo),e(W,Yo),e(C,Ro),y(X,C,null),e(C,Go),y(Q,C,null),_(t,Ot,f),_(t,H,f),e(H,ee),e(ee,mt),y(ke,mt,null),e(H,Ko),e(H,ft),e(ft,Jo),_(t,Nt,f),_(t,E,f),y(xe,E,null),e(E,Xo),e(E,Me),e(Me,Qo),e(Me,Ee),e(Ee,en),e(Me,tn),e(E,on),y(te,E,null),e(E,nn),e(E,Fe),e(Fe,sn),e(Fe,je),e(je,an),e(Fe,rn),e(E,ln),e(E,I),y(Ce,I,null),e(I,dn),e(I,U),e(U,cn),e(U,Ge),e(Ge,pn),e(U,hn),e(U,ut),e(ut,mn),e(U,fn),e(I,un),y(oe,I,null),e(I,gn),y(ne,I,null),_(t,Dt,f),_(t,Z,f),e(Z,se),e(se,gt),y(Ie,gt,null),e(Z,_n),e(Z,_t),e(_t,vn),_(t,Lt,f),_(t,j,f),y(Ae,j,null),e(j,wn),e(j,vt),e(vt,bn),e(j,$n),e(j,Pe),e(Pe,yn),e(Pe,qe),e(qe,Sn),e(Pe,Tn),e(j,kn),e(j,A),y(ze,A,null),e(A,xn),e(A,B),e(B,Mn),e(B,Ke),e(Ke,En),e(B,Fn),e(B,wt),e(wt,jn),e(B,Cn),e(A,In),y(ae,A,null),e(A,An),y(re,A,null),Vt=!0},p(t,[f]){const Oe={};f&2&&(Oe.$$scope={dirty:f,ctx:t}),K.$set(Oe);const bt={};f&2&&(bt.$$scope={dirty:f,ctx:t}),X.$set(bt);const $t={};f&2&&($t.$$scope={dirty:f,ctx:t}),Q.$set($t);const yt={};f&2&&(yt.$$scope={dirty:f,ctx:t}),te.$set(yt);const Ne={};f&2&&(Ne.$$scope={dirty:f,ctx:t}),oe.$set(Ne);const St={};f&2&&(St.$$scope={dirty:f,ctx:t}),ne.$set(St);const Tt={};f&2&&(Tt.$$scope={dirty:f,ctx:t}),ae.$set(Tt);const kt={};f&2&&(kt.$$scope={dirty:f,ctx:t}),re.$set(kt)},i(t){Vt||(S(n.$$.fragment,t),S(he.$$.fragment,t),S(_e.$$.fragment,t),S(ve.$$.fragment,t),S(K.$$.fragment,t),S(be.$$.fragment,t),S($e.$$.fragment,t),S(Te.$$.fragment,t),S(X.$$.fragment,t),S(Q.$$.fragment,t),S(ke.$$.fragment,t),S(xe.$$.fragment,t),S(te.$$.fragment,t),S(Ce.$$.fragment,t),S(oe.$$.fragment,t),S(ne.$$.fragment,t),S(Ie.$$.fragment,t),S(Ae.$$.fragment,t),S(ze.$$.fragment,t),S(ae.$$.fragment,t),S(re.$$.fragment,t),Vt=!0)},o(t){T(n.$$.fragment,t),T(he.$$.fragment,t),T(_e.$$.fragment,t),T(ve.$$.fragment,t),T(K.$$.fragment,t),T(be.$$.fragment,t),T($e.$$.fragment,t),T(Te.$$.fragment,t),T(X.$$.fragment,t),T(Q.$$.fragment,t),T(ke.$$.fragment,t),T(xe.$$.fragment,t),T(te.$$.fragment,t),T(Ce.$$.fragment,t),T(oe.$$.fragment,t),T(ne.$$.fragment,t),T(Ie.$$.fragment,t),T(Ae.$$.fragment,t),T(ze.$$.fragment,t),T(ae.$$.fragment,t),T(re.$$.fragment,t),Vt=!1},d(t){o(d),t&&o(w),t&&o(m),k(n),t&&o(xt),t&&o(O),k(he),t&&o(Mt),t&&o(R),t&&o(Et),t&&o(Le),t&&o(Ft),t&&o(Ve),t&&o(jt),t&&o(We),t&&o(Ct),t&&o(He),t&&o(It),t&&o(q),t&&o(At),t&&o(N),k(_e),t&&o(Pt),t&&o(F),k(ve),k(K),t&&o(qt),t&&o(V),k(be),t&&o(zt),t&&o(P),k($e),k(Te),k(X),k(Q),t&&o(Ot),t&&o(H),k(ke),t&&o(Nt),t&&o(E),k(xe),k(te),k(Ce),k(oe),k(ne),t&&o(Dt),t&&o(Z),k(Ie),t&&o(Lt),t&&o(j),k(Ae),k(ze),k(ae),k(re)}}}const js={local:"swin-transformer-v2",sections:[{local:"overview",title:"Overview"},{local:"transformers.Swinv2Config",title:"Swinv2Config"},{local:"transformers.Swinv2Model",title:"Swinv2Model"},{local:"transformers.Swinv2ForMaskedImageModeling",title:"Swinv2ForMaskedImageModeling"},{local:"transformers.Swinv2ForImageClassification",title:"Swinv2ForImageClassification"}],title:"Swin Transformer V2"};function Cs(x){return bs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ns extends gs{constructor(d){super();_s(this,d,Cs,Fs,vs,{})}}export{Ns as default,js as metadata};
