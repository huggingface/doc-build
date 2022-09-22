import{S as Da,i as Ba,s as Wa,e as a,k as p,w as b,t as i,M as Ha,c as s,d as o,m as f,a as r,x as T,h as l,b as d,N as Ka,G as t,g as u,y as M,q as $,o as N,B as y,v as Ua,L as ta}from"../../chunks/vendor-hf-doc-builder.js";import{T as La}from"../../chunks/Tip-hf-doc-builder.js";import{D as lt}from"../../chunks/Docstring-hf-doc-builder.js";import{C as oa}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as dt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ea}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ra(V){let c,w,_,h,v;return h=new oa({props:{code:`from transformers import ViTMSNModel, ViTMSNConfig

# Initializing a ViT MSN vit-msn-base style configuration
configuration = ViTConfig()

# Initializing a model from the vit-msn-base style configuration
model = ViTMSNModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTMSNModel, ViTMSNConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViT MSN vit-msn-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ViTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the vit-msn-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTMSNModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),w=i("Example:"),_=p(),b(h.$$.fragment)},l(n){c=s(n,"P",{});var g=r(c);w=l(g,"Example:"),g.forEach(o),_=f(n),T(h.$$.fragment,n)},m(n,g){u(n,c,g),t(c,w),u(n,_,g),M(h,n,g),v=!0},p:ta,i(n){v||($(h.$$.fragment,n),v=!0)},o(n){N(h.$$.fragment,n),v=!1},d(n){n&&o(c),n&&o(_),y(h,n)}}}function Ja(V){let c,w,_,h,v;return{c(){c=a("p"),w=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),h=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){c=s(n,"P",{});var g=r(c);w=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var C=r(_);h=l(C,"Module"),C.forEach(o),v=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(n,g){u(n,c,g),t(c,w),t(c,_),t(_,h),t(c,v)},d(n){n&&o(c)}}}function Ga(V){let c,w,_,h,v;return h=new oa({props:{code:`from transformers import AutoFeatureExtractor, ViTMSNModel
import torch
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = AutoFeatureExtractor.from_pretrained("facebook/vit-msn-small")
model = ViTMSNModel.from_pretrained("facebook/vit-msn-small")
inputs = feature_extractor(images=image, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, ViTMSNModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/vit-msn-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTMSNModel.from_pretrained(<span class="hljs-string">&quot;facebook/vit-msn-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=a("p"),w=i("Examples:"),_=p(),b(h.$$.fragment)},l(n){c=s(n,"P",{});var g=r(c);w=l(g,"Examples:"),g.forEach(o),_=f(n),T(h.$$.fragment,n)},m(n,g){u(n,c,g),t(c,w),u(n,_,g),M(h,n,g),v=!0},p:ta,i(n){v||($(h.$$.fragment,n),v=!0)},o(n){N(h.$$.fragment,n),v=!1},d(n){n&&o(c),n&&o(_),y(h,n)}}}function Qa(V){let c,w,_,h,v;return{c(){c=a("p"),w=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),h=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){c=s(n,"P",{});var g=r(c);w=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(g,"CODE",{});var C=r(_);h=l(C,"Module"),C.forEach(o),v=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(n,g){u(n,c,g),t(c,w),t(c,_),t(_,h),t(c,v)},d(n){n&&o(c)}}}function Xa(V){let c,w,_,h,v;return h=new oa({props:{code:`from transformers import AutoFeatureExtractor, ViTMSNForImageClassification
import torch
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = AutoFeatureExtractor.from_pretrained("facebook/vit-msn-small")
model = ViTMSNForImageClassification.from_pretrained("facebook/vit-msn-small")

inputs = feature_extractor(images=image, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, ViTMSNForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/vit-msn-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTMSNForImageClassification.from_pretrained(<span class="hljs-string">&quot;facebook/vit-msn-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])`}}),{c(){c=a("p"),w=i("Examples:"),_=p(),b(h.$$.fragment)},l(n){c=s(n,"P",{});var g=r(c);w=l(g,"Examples:"),g.forEach(o),_=f(n),T(h.$$.fragment,n)},m(n,g){u(n,c,g),t(c,w),u(n,_,g),M(h,n,g),v=!0},p:ta,i(n){v||($(h.$$.fragment,n),v=!0)},o(n){N(h.$$.fragment,n),v=!1},d(n){n&&o(c),n&&o(_),y(h,n)}}}function Ya(V){let c,w,_,h,v,n,g,C,jt,ct,P,H,Ke,re,It,Ue,Ft,mt,K,At,ie,Pt,qt,ht,ke,zt,pt,Ve,Re,Ot,ft,xe,Lt,ut,F,Je,Dt,Bt,j,Wt,Ee,Ht,Kt,Ce,Ut,Rt,le,Jt,Gt,Qt,Ge,Xt,gt,U,aa,_t,de,Yt,je,Zt,vt,A,eo,ce,to,oo,me,ao,so,wt,q,R,Qe,he,no,Xe,ro,bt,S,pe,io,z,lo,Ie,co,mo,fe,ho,po,fo,O,uo,Fe,go,_o,Ae,vo,wo,bo,J,Tt,L,G,Ye,ue,To,Ze,Mo,Mt,I,ge,$o,_e,No,ve,yo,So,ko,x,we,Vo,D,xo,Pe,Eo,Co,et,jo,Io,Fo,Q,Ao,X,$t,B,Y,tt,be,Po,ot,qo,Nt,k,Te,zo,at,Oo,Lo,Me,Do,$e,Bo,Wo,Ho,E,Ne,Ko,W,Uo,qe,Ro,Jo,st,Go,Qo,Xo,Z,Yo,ee,yt;return n=new dt({}),re=new dt({}),he=new dt({}),pe=new lt({props:{name:"class transformers.ViTMSNConfig",anchor:"transformers.ViTMSNConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-06"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTMSNConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.ViTMSNConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.ViTMSNConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.ViTMSNConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.ViTMSNConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.ViTMSNConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.ViTMSNConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.ViTMSNConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ViTMSNConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-06) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ViTMSNConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.ViTMSNConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.ViTMSNConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.ViTMSNConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit_msn/configuration_vit_msn.py#L30"}}),J=new ea({props:{anchor:"transformers.ViTMSNConfig.example",$$slots:{default:[Ra]},$$scope:{ctx:V}}}),ue=new dt({}),ge=new lt({props:{name:"class transformers.ViTMSNModel",anchor:"transformers.ViTMSNModel",parameters:[{name:"config",val:": ViTMSNConfig"},{name:"use_mask_token",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ViTMSNModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit_msn#transformers.ViTMSNConfig">ViTMSNConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit_msn/modeling_vit_msn.py#L493"}}),we=new lt({props:{name:"forward",anchor:"transformers.ViTMSNModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTMSNModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.ViTMSNModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViTMSNModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViTMSNModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViTMSNModel.forward.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.ViTMSNModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit_msn/modeling_vit_msn.py#L517",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vit_msn#transformers.ViTMSNConfig"
>ViTMSNConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Q=new La({props:{$$slots:{default:[Ja]},$$scope:{ctx:V}}}),X=new ea({props:{anchor:"transformers.ViTMSNModel.forward.example",$$slots:{default:[Ga]},$$scope:{ctx:V}}}),be=new dt({}),Te=new lt({props:{name:"class transformers.ViTMSNForImageClassification",anchor:"transformers.ViTMSNForImageClassification",parameters:[{name:"config",val:": ViTMSNConfig"}],parametersDescription:[{anchor:"transformers.ViTMSNForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit_msn#transformers.ViTMSNConfig">ViTMSNConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit_msn/modeling_vit_msn.py#L599"}}),Ne=new lt({props:{name:"forward",anchor:"transformers.ViTMSNForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTMSNForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.ViTMSNForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViTMSNForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViTMSNForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViTMSNForImageClassification.forward.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.ViTMSNForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit_msn/modeling_vit_msn.py#L612",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vit_msn#transformers.ViTMSNConfig"
>ViTMSNConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each stage) of shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states
(also called feature maps) of the model at the output of each stage.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Z=new La({props:{$$slots:{default:[Qa]},$$scope:{ctx:V}}}),ee=new ea({props:{anchor:"transformers.ViTMSNForImageClassification.forward.example",$$slots:{default:[Xa]},$$scope:{ctx:V}}}),{c(){c=a("meta"),w=p(),_=a("h1"),h=a("a"),v=a("span"),b(n.$$.fragment),g=p(),C=a("span"),jt=i("ViTMSN"),ct=p(),P=a("h2"),H=a("a"),Ke=a("span"),b(re.$$.fragment),It=p(),Ue=a("span"),Ft=i("Overview"),mt=p(),K=a("p"),At=i("The ViTMSN model was proposed in "),ie=a("a"),Pt=i("Masked Siamese Networks for Label-Efficient Learning"),qt=i(` by Mahmoud Assran, Mathilde Caron, Ishan Misra, Piotr Bojanowski, Florian Bordes,
Pascal Vincent, Armand Joulin, Michael Rabbat, Nicolas Ballas. The paper presents a joint-embedding architecture to match the prototypes
of masked patches with that of the unmasked patches. With this setup, their method yields excellent performance in the low-shot and extreme low-shot
regimes.`),ht=p(),ke=a("p"),zt=i("The abstract from the paper is the following:"),pt=p(),Ve=a("p"),Re=a("em"),Ot=i(`We propose Masked Siamese Networks (MSN), a self-supervised learning framework for learning image representations. Our
approach matches the representation of an image view containing randomly masked patches to the representation of the original
unmasked image. This self-supervised pre-training strategy is particularly scalable when applied to Vision Transformers since only the
unmasked patches are processed by the network. As a result, MSNs improve the scalability of joint-embedding architectures,
while producing representations of a high semantic level that perform competitively on low-shot image classification. For instance,
on ImageNet-1K, with only 5,000 annotated images, our base MSN model achieves 72.4% top-1 accuracy,
and with 1% of ImageNet-1K labels, we achieve 75.7% top-1 accuracy, setting a new state-of-the-art for self-supervised learning on this benchmark.`),ft=p(),xe=a("p"),Lt=i("Tips:"),ut=p(),F=a("ul"),Je=a("li"),Dt=i(`MSN (masked siamese networks) is a method for self-supervised pre-training of Vision Transformers (ViTs). The pre-training
objective is to match the prototypes assigned to the unmasked views of the images to that of the masked views of the same images.`),Bt=p(),j=a("li"),Wt=i(`The authors have only released pre-trained weights of the backbone (ImageNet-1k pre-training). So, to use that on your own image classification dataset,
use the `),Ee=a("a"),Ht=i("ViTMSNForImageClassification"),Kt=i(" class which is initialized from "),Ce=a("a"),Ut=i("ViTMSNModel"),Rt=i(`. Follow
`),le=a("a"),Jt=i("this notebook"),Gt=i(" for a detailed tutorial on fine-tuning."),Qt=p(),Ge=a("li"),Xt=i(`MSN is particularly useful in the low-shot and extreme low-shot regimes. Notably, it achieves 75.7% top-1 accuracy with only 1% of ImageNet-1K
labels when fine-tuned.`),gt=p(),U=a("img"),_t=p(),de=a("small"),Yt=i("MSN architecture. Taken from the "),je=a("a"),Zt=i("original paper."),vt=p(),A=a("p"),eo=i("This model was contributed by "),ce=a("a"),to=i("sayakpaul"),oo=i(". The original code can be found "),me=a("a"),ao=i("here"),so=i("."),wt=p(),q=a("h2"),R=a("a"),Qe=a("span"),b(he.$$.fragment),no=p(),Xe=a("span"),ro=i("ViTMSNConfig"),bt=p(),S=a("div"),b(pe.$$.fragment),io=p(),z=a("p"),lo=i("This is the configuration class to store the configuration of a "),Ie=a("a"),co=i("ViTMSNModel"),mo=i(`. It is used to instantiate an ViT
MSN model according to the specified arguments, defining the model architecture. Instantiating a configuration with
the defaults will yield a similar configuration to that of the ViT
`),fe=a("a"),ho=i("facebook/vit_msn_base"),po=i(" architecture."),fo=p(),O=a("p"),uo=i("Configuration objects inherit from "),Fe=a("a"),go=i("PretrainedConfig"),_o=i(` and can be used to control the model outputs. Read the
documentation from `),Ae=a("a"),vo=i("PretrainedConfig"),wo=i(" for more information."),bo=p(),b(J.$$.fragment),Tt=p(),L=a("h2"),G=a("a"),Ye=a("span"),b(ue.$$.fragment),To=p(),Ze=a("span"),Mo=i("ViTMSNModel"),Mt=p(),I=a("div"),b(ge.$$.fragment),$o=p(),_e=a("p"),No=i(`The bare ViTMSN Model outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ve=a("a"),yo=i("torch.nn.Module"),So=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ko=p(),x=a("div"),b(we.$$.fragment),Vo=p(),D=a("p"),xo=i("The "),Pe=a("a"),Eo=i("ViTMSNModel"),Co=i(" forward method, overrides the "),et=a("code"),jo=i("__call__"),Io=i(" special method."),Fo=p(),b(Q.$$.fragment),Ao=p(),b(X.$$.fragment),$t=p(),B=a("h2"),Y=a("a"),tt=a("span"),b(be.$$.fragment),Po=p(),ot=a("span"),qo=i("ViTMSNForImageClassification"),Nt=p(),k=a("div"),b(Te.$$.fragment),zo=p(),at=a("p"),Oo=i("ViTMSN Model with an image classification head on top e.g. for ImageNet."),Lo=p(),Me=a("p"),Do=i("This model is a PyTorch "),$e=a("a"),Bo=i("torch.nn.Module"),Wo=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ho=p(),E=a("div"),b(Ne.$$.fragment),Ko=p(),W=a("p"),Uo=i("The "),qe=a("a"),Ro=i("ViTMSNForImageClassification"),Jo=i(" forward method, overrides the "),st=a("code"),Go=i("__call__"),Qo=i(" special method."),Xo=p(),b(Z.$$.fragment),Yo=p(),b(ee.$$.fragment),this.h()},l(e){const m=Ha('[data-svelte="svelte-1phssyn"]',document.head);c=s(m,"META",{name:!0,content:!0}),m.forEach(o),w=f(e),_=s(e,"H1",{class:!0});var ye=r(_);h=s(ye,"A",{id:!0,class:!0,href:!0});var nt=r(h);v=s(nt,"SPAN",{});var rt=r(v);T(n.$$.fragment,rt),rt.forEach(o),nt.forEach(o),g=f(ye),C=s(ye,"SPAN",{});var it=r(C);jt=l(it,"ViTMSN"),it.forEach(o),ye.forEach(o),ct=f(e),P=s(e,"H2",{class:!0});var Se=r(P);H=s(Se,"A",{id:!0,class:!0,href:!0});var sa=r(H);Ke=s(sa,"SPAN",{});var na=r(Ke);T(re.$$.fragment,na),na.forEach(o),sa.forEach(o),It=f(Se),Ue=s(Se,"SPAN",{});var ra=r(Ue);Ft=l(ra,"Overview"),ra.forEach(o),Se.forEach(o),mt=f(e),K=s(e,"P",{});var St=r(K);At=l(St,"The ViTMSN model was proposed in "),ie=s(St,"A",{href:!0,rel:!0});var ia=r(ie);Pt=l(ia,"Masked Siamese Networks for Label-Efficient Learning"),ia.forEach(o),qt=l(St,` by Mahmoud Assran, Mathilde Caron, Ishan Misra, Piotr Bojanowski, Florian Bordes,
Pascal Vincent, Armand Joulin, Michael Rabbat, Nicolas Ballas. The paper presents a joint-embedding architecture to match the prototypes
of masked patches with that of the unmasked patches. With this setup, their method yields excellent performance in the low-shot and extreme low-shot
regimes.`),St.forEach(o),ht=f(e),ke=s(e,"P",{});var la=r(ke);zt=l(la,"The abstract from the paper is the following:"),la.forEach(o),pt=f(e),Ve=s(e,"P",{});var da=r(Ve);Re=s(da,"EM",{});var ca=r(Re);Ot=l(ca,`We propose Masked Siamese Networks (MSN), a self-supervised learning framework for learning image representations. Our
approach matches the representation of an image view containing randomly masked patches to the representation of the original
unmasked image. This self-supervised pre-training strategy is particularly scalable when applied to Vision Transformers since only the
unmasked patches are processed by the network. As a result, MSNs improve the scalability of joint-embedding architectures,
while producing representations of a high semantic level that perform competitively on low-shot image classification. For instance,
on ImageNet-1K, with only 5,000 annotated images, our base MSN model achieves 72.4% top-1 accuracy,
and with 1% of ImageNet-1K labels, we achieve 75.7% top-1 accuracy, setting a new state-of-the-art for self-supervised learning on this benchmark.`),ca.forEach(o),da.forEach(o),ft=f(e),xe=s(e,"P",{});var ma=r(xe);Lt=l(ma,"Tips:"),ma.forEach(o),ut=f(e),F=s(e,"UL",{});var ze=r(F);Je=s(ze,"LI",{});var ha=r(Je);Dt=l(ha,`MSN (masked siamese networks) is a method for self-supervised pre-training of Vision Transformers (ViTs). The pre-training
objective is to match the prototypes assigned to the unmasked views of the images to that of the masked views of the same images.`),ha.forEach(o),Bt=f(ze),j=s(ze,"LI",{});var te=r(j);Wt=l(te,`The authors have only released pre-trained weights of the backbone (ImageNet-1k pre-training). So, to use that on your own image classification dataset,
use the `),Ee=s(te,"A",{href:!0});var pa=r(Ee);Ht=l(pa,"ViTMSNForImageClassification"),pa.forEach(o),Kt=l(te," class which is initialized from "),Ce=s(te,"A",{href:!0});var fa=r(Ce);Ut=l(fa,"ViTMSNModel"),fa.forEach(o),Rt=l(te,`. Follow
`),le=s(te,"A",{href:!0,rel:!0});var ua=r(le);Jt=l(ua,"this notebook"),ua.forEach(o),Gt=l(te," for a detailed tutorial on fine-tuning."),te.forEach(o),Qt=f(ze),Ge=s(ze,"LI",{});var ga=r(Ge);Xt=l(ga,`MSN is particularly useful in the low-shot and extreme low-shot regimes. Notably, it achieves 75.7% top-1 accuracy with only 1% of ImageNet-1K
labels when fine-tuned.`),ga.forEach(o),ze.forEach(o),gt=f(e),U=s(e,"IMG",{src:!0,alt:!0,width:!0}),_t=f(e),de=s(e,"SMALL",{});var Zo=r(de);Yt=l(Zo,"MSN architecture. Taken from the "),je=s(Zo,"A",{href:!0});var _a=r(je);Zt=l(_a,"original paper."),_a.forEach(o),Zo.forEach(o),vt=f(e),A=s(e,"P",{});var Oe=r(A);eo=l(Oe,"This model was contributed by "),ce=s(Oe,"A",{href:!0,rel:!0});var va=r(ce);to=l(va,"sayakpaul"),va.forEach(o),oo=l(Oe,". The original code can be found "),me=s(Oe,"A",{href:!0,rel:!0});var wa=r(me);ao=l(wa,"here"),wa.forEach(o),so=l(Oe,"."),Oe.forEach(o),wt=f(e),q=s(e,"H2",{class:!0});var kt=r(q);R=s(kt,"A",{id:!0,class:!0,href:!0});var ba=r(R);Qe=s(ba,"SPAN",{});var Ta=r(Qe);T(he.$$.fragment,Ta),Ta.forEach(o),ba.forEach(o),no=f(kt),Xe=s(kt,"SPAN",{});var Ma=r(Xe);ro=l(Ma,"ViTMSNConfig"),Ma.forEach(o),kt.forEach(o),bt=f(e),S=s(e,"DIV",{class:!0});var oe=r(S);T(pe.$$.fragment,oe),io=f(oe),z=s(oe,"P",{});var Le=r(z);lo=l(Le,"This is the configuration class to store the configuration of a "),Ie=s(Le,"A",{href:!0});var $a=r(Ie);co=l($a,"ViTMSNModel"),$a.forEach(o),mo=l(Le,`. It is used to instantiate an ViT
MSN model according to the specified arguments, defining the model architecture. Instantiating a configuration with
the defaults will yield a similar configuration to that of the ViT
`),fe=s(Le,"A",{href:!0,rel:!0});var Na=r(fe);ho=l(Na,"facebook/vit_msn_base"),Na.forEach(o),po=l(Le," architecture."),Le.forEach(o),fo=f(oe),O=s(oe,"P",{});var De=r(O);uo=l(De,"Configuration objects inherit from "),Fe=s(De,"A",{href:!0});var ya=r(Fe);go=l(ya,"PretrainedConfig"),ya.forEach(o),_o=l(De,` and can be used to control the model outputs. Read the
documentation from `),Ae=s(De,"A",{href:!0});var Sa=r(Ae);vo=l(Sa,"PretrainedConfig"),Sa.forEach(o),wo=l(De," for more information."),De.forEach(o),bo=f(oe),T(J.$$.fragment,oe),oe.forEach(o),Tt=f(e),L=s(e,"H2",{class:!0});var Vt=r(L);G=s(Vt,"A",{id:!0,class:!0,href:!0});var ka=r(G);Ye=s(ka,"SPAN",{});var Va=r(Ye);T(ue.$$.fragment,Va),Va.forEach(o),ka.forEach(o),To=f(Vt),Ze=s(Vt,"SPAN",{});var xa=r(Ze);Mo=l(xa,"ViTMSNModel"),xa.forEach(o),Vt.forEach(o),Mt=f(e),I=s(e,"DIV",{class:!0});var Be=r(I);T(ge.$$.fragment,Be),$o=f(Be),_e=s(Be,"P",{});var xt=r(_e);No=l(xt,`The bare ViTMSN Model outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ve=s(xt,"A",{href:!0,rel:!0});var Ea=r(ve);yo=l(Ea,"torch.nn.Module"),Ea.forEach(o),So=l(xt,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xt.forEach(o),ko=f(Be),x=s(Be,"DIV",{class:!0});var ae=r(x);T(we.$$.fragment,ae),Vo=f(ae),D=s(ae,"P",{});var We=r(D);xo=l(We,"The "),Pe=s(We,"A",{href:!0});var Ca=r(Pe);Eo=l(Ca,"ViTMSNModel"),Ca.forEach(o),Co=l(We," forward method, overrides the "),et=s(We,"CODE",{});var ja=r(et);jo=l(ja,"__call__"),ja.forEach(o),Io=l(We," special method."),We.forEach(o),Fo=f(ae),T(Q.$$.fragment,ae),Ao=f(ae),T(X.$$.fragment,ae),ae.forEach(o),Be.forEach(o),$t=f(e),B=s(e,"H2",{class:!0});var Et=r(B);Y=s(Et,"A",{id:!0,class:!0,href:!0});var Ia=r(Y);tt=s(Ia,"SPAN",{});var Fa=r(tt);T(be.$$.fragment,Fa),Fa.forEach(o),Ia.forEach(o),Po=f(Et),ot=s(Et,"SPAN",{});var Aa=r(ot);qo=l(Aa,"ViTMSNForImageClassification"),Aa.forEach(o),Et.forEach(o),Nt=f(e),k=s(e,"DIV",{class:!0});var se=r(k);T(Te.$$.fragment,se),zo=f(se),at=s(se,"P",{});var Pa=r(at);Oo=l(Pa,"ViTMSN Model with an image classification head on top e.g. for ImageNet."),Pa.forEach(o),Lo=f(se),Me=s(se,"P",{});var Ct=r(Me);Do=l(Ct,"This model is a PyTorch "),$e=s(Ct,"A",{href:!0,rel:!0});var qa=r($e);Bo=l(qa,"torch.nn.Module"),qa.forEach(o),Wo=l(Ct,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ct.forEach(o),Ho=f(se),E=s(se,"DIV",{class:!0});var ne=r(E);T(Ne.$$.fragment,ne),Ko=f(ne),W=s(ne,"P",{});var He=r(W);Uo=l(He,"The "),qe=s(He,"A",{href:!0});var za=r(qe);Ro=l(za,"ViTMSNForImageClassification"),za.forEach(o),Jo=l(He," forward method, overrides the "),st=s(He,"CODE",{});var Oa=r(st);Go=l(Oa,"__call__"),Oa.forEach(o),Qo=l(He," special method."),He.forEach(o),Xo=f(ne),T(Z.$$.fragment,ne),Yo=f(ne),T(ee.$$.fragment,ne),ne.forEach(o),se.forEach(o),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(Za)),d(h,"id","vitmsn"),d(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(h,"href","#vitmsn"),d(_,"class","relative group"),d(H,"id","overview"),d(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(H,"href","#overview"),d(P,"class","relative group"),d(ie,"href","https://arxiv.org/abs/2204.07141"),d(ie,"rel","nofollow"),d(Ee,"href","/docs/transformers/main/en/model_doc/vit_msn#transformers.ViTMSNForImageClassification"),d(Ce,"href","/docs/transformers/main/en/model_doc/vit_msn#transformers.ViTMSNModel"),d(le,"href","https://github.com/huggingface/notebooks/blob/main/examples/image_classification.ipynb"),d(le,"rel","nofollow"),Ka(U.src,aa="https://i.ibb.co/W6PQMdC/Screenshot-2022-09-13-at-9-08-40-AM.png")||d(U,"src",aa),d(U,"alt","drawing"),d(U,"width","600"),d(je,"href","https://arxiv.org/abs/2204.07141"),d(ce,"href","https://huggingface.co/sayakpaul"),d(ce,"rel","nofollow"),d(me,"href","https://github.com/facebookresearch/msn"),d(me,"rel","nofollow"),d(R,"id","transformers.ViTMSNConfig"),d(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(R,"href","#transformers.ViTMSNConfig"),d(q,"class","relative group"),d(Ie,"href","/docs/transformers/main/en/model_doc/vit_msn#transformers.ViTMSNModel"),d(fe,"href","https://huggingface.co/facebook/vit_msn_base"),d(fe,"rel","nofollow"),d(Fe,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(Ae,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(G,"id","transformers.ViTMSNModel"),d(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(G,"href","#transformers.ViTMSNModel"),d(L,"class","relative group"),d(ve,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(ve,"rel","nofollow"),d(Pe,"href","/docs/transformers/main/en/model_doc/vit_msn#transformers.ViTMSNModel"),d(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Y,"id","transformers.ViTMSNForImageClassification"),d(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Y,"href","#transformers.ViTMSNForImageClassification"),d(B,"class","relative group"),d($e,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d($e,"rel","nofollow"),d(qe,"href","/docs/transformers/main/en/model_doc/vit_msn#transformers.ViTMSNForImageClassification"),d(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,m){t(document.head,c),u(e,w,m),u(e,_,m),t(_,h),t(h,v),M(n,v,null),t(_,g),t(_,C),t(C,jt),u(e,ct,m),u(e,P,m),t(P,H),t(H,Ke),M(re,Ke,null),t(P,It),t(P,Ue),t(Ue,Ft),u(e,mt,m),u(e,K,m),t(K,At),t(K,ie),t(ie,Pt),t(K,qt),u(e,ht,m),u(e,ke,m),t(ke,zt),u(e,pt,m),u(e,Ve,m),t(Ve,Re),t(Re,Ot),u(e,ft,m),u(e,xe,m),t(xe,Lt),u(e,ut,m),u(e,F,m),t(F,Je),t(Je,Dt),t(F,Bt),t(F,j),t(j,Wt),t(j,Ee),t(Ee,Ht),t(j,Kt),t(j,Ce),t(Ce,Ut),t(j,Rt),t(j,le),t(le,Jt),t(j,Gt),t(F,Qt),t(F,Ge),t(Ge,Xt),u(e,gt,m),u(e,U,m),u(e,_t,m),u(e,de,m),t(de,Yt),t(de,je),t(je,Zt),u(e,vt,m),u(e,A,m),t(A,eo),t(A,ce),t(ce,to),t(A,oo),t(A,me),t(me,ao),t(A,so),u(e,wt,m),u(e,q,m),t(q,R),t(R,Qe),M(he,Qe,null),t(q,no),t(q,Xe),t(Xe,ro),u(e,bt,m),u(e,S,m),M(pe,S,null),t(S,io),t(S,z),t(z,lo),t(z,Ie),t(Ie,co),t(z,mo),t(z,fe),t(fe,ho),t(z,po),t(S,fo),t(S,O),t(O,uo),t(O,Fe),t(Fe,go),t(O,_o),t(O,Ae),t(Ae,vo),t(O,wo),t(S,bo),M(J,S,null),u(e,Tt,m),u(e,L,m),t(L,G),t(G,Ye),M(ue,Ye,null),t(L,To),t(L,Ze),t(Ze,Mo),u(e,Mt,m),u(e,I,m),M(ge,I,null),t(I,$o),t(I,_e),t(_e,No),t(_e,ve),t(ve,yo),t(_e,So),t(I,ko),t(I,x),M(we,x,null),t(x,Vo),t(x,D),t(D,xo),t(D,Pe),t(Pe,Eo),t(D,Co),t(D,et),t(et,jo),t(D,Io),t(x,Fo),M(Q,x,null),t(x,Ao),M(X,x,null),u(e,$t,m),u(e,B,m),t(B,Y),t(Y,tt),M(be,tt,null),t(B,Po),t(B,ot),t(ot,qo),u(e,Nt,m),u(e,k,m),M(Te,k,null),t(k,zo),t(k,at),t(at,Oo),t(k,Lo),t(k,Me),t(Me,Do),t(Me,$e),t($e,Bo),t(Me,Wo),t(k,Ho),t(k,E),M(Ne,E,null),t(E,Ko),t(E,W),t(W,Uo),t(W,qe),t(qe,Ro),t(W,Jo),t(W,st),t(st,Go),t(W,Qo),t(E,Xo),M(Z,E,null),t(E,Yo),M(ee,E,null),yt=!0},p(e,[m]){const ye={};m&2&&(ye.$$scope={dirty:m,ctx:e}),J.$set(ye);const nt={};m&2&&(nt.$$scope={dirty:m,ctx:e}),Q.$set(nt);const rt={};m&2&&(rt.$$scope={dirty:m,ctx:e}),X.$set(rt);const it={};m&2&&(it.$$scope={dirty:m,ctx:e}),Z.$set(it);const Se={};m&2&&(Se.$$scope={dirty:m,ctx:e}),ee.$set(Se)},i(e){yt||($(n.$$.fragment,e),$(re.$$.fragment,e),$(he.$$.fragment,e),$(pe.$$.fragment,e),$(J.$$.fragment,e),$(ue.$$.fragment,e),$(ge.$$.fragment,e),$(we.$$.fragment,e),$(Q.$$.fragment,e),$(X.$$.fragment,e),$(be.$$.fragment,e),$(Te.$$.fragment,e),$(Ne.$$.fragment,e),$(Z.$$.fragment,e),$(ee.$$.fragment,e),yt=!0)},o(e){N(n.$$.fragment,e),N(re.$$.fragment,e),N(he.$$.fragment,e),N(pe.$$.fragment,e),N(J.$$.fragment,e),N(ue.$$.fragment,e),N(ge.$$.fragment,e),N(we.$$.fragment,e),N(Q.$$.fragment,e),N(X.$$.fragment,e),N(be.$$.fragment,e),N(Te.$$.fragment,e),N(Ne.$$.fragment,e),N(Z.$$.fragment,e),N(ee.$$.fragment,e),yt=!1},d(e){o(c),e&&o(w),e&&o(_),y(n),e&&o(ct),e&&o(P),y(re),e&&o(mt),e&&o(K),e&&o(ht),e&&o(ke),e&&o(pt),e&&o(Ve),e&&o(ft),e&&o(xe),e&&o(ut),e&&o(F),e&&o(gt),e&&o(U),e&&o(_t),e&&o(de),e&&o(vt),e&&o(A),e&&o(wt),e&&o(q),y(he),e&&o(bt),e&&o(S),y(pe),y(J),e&&o(Tt),e&&o(L),y(ue),e&&o(Mt),e&&o(I),y(ge),y(we),y(Q),y(X),e&&o($t),e&&o(B),y(be),e&&o(Nt),e&&o(k),y(Te),y(Ne),y(Z),y(ee)}}}const Za={local:"vitmsn",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViTMSNConfig",title:"ViTMSNConfig"},{local:"transformers.ViTMSNModel",title:"ViTMSNModel"},{local:"transformers.ViTMSNForImageClassification",title:"ViTMSNForImageClassification"}],title:"ViTMSN"};function es(V){return Ua(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class is extends Da{constructor(c){super();Ba(this,c,es,Ya,Wa,{})}}export{is as default,Za as metadata};
