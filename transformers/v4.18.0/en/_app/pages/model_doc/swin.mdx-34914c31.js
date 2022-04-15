import{S as wa,i as va,s as ba,e as n,k as d,w,t as a,M as Sa,c as s,d as o,m as c,a as i,x as v,h as r,b as l,N as $a,F as e,g as p,y as b,q as S,o as $,B as y,v as ya}from"../../chunks/vendor-6b77c823.js";import{T as vs}from"../../chunks/Tip-39098574.js";import{D as Le}from"../../chunks/Docstring-17b815d9.js";import{C as fo}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as lt}from"../../chunks/IconCopyLink-7a11ce68.js";function Ta(X){let m,k,f,_,x;return{c(){m=n("p"),k=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=a("Module"),x=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){m=s(u,"P",{});var g=i(m);k=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var E=i(f);_=r(E,"Module"),E.forEach(o),x=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){p(u,m,g),e(m,k),e(m,f),e(f,_),e(m,x)},d(u){u&&o(m)}}}function xa(X){let m,k,f,_,x;return{c(){m=n("p"),k=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=a("Module"),x=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){m=s(u,"P",{});var g=i(m);k=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var E=i(f);_=r(E,"Module"),E.forEach(o),x=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){p(u,m,g),e(m,k),e(m,f),e(f,_),e(m,x)},d(u){u&&o(m)}}}function ka(X){let m,k,f,_,x;return{c(){m=n("p"),k=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=a("Module"),x=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){m=s(u,"P",{});var g=i(m);k=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var E=i(f);_=r(E,"Module"),E.forEach(o),x=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){p(u,m,g),e(m,k),e(m,f),e(f,_),e(m,x)},d(u){u&&o(m)}}}function Ma(X){let m,k,f,_,x,u,g,E,uo,Nt,H,ee,dt,pe,go,ct,_o,Lt,W,wo,me,vo,bo,So,Ht,He,$o,Wt,We,ht,yo,Ut,Ue,To,Vt,z,fe,xo,Ve,ko,Mo,Eo,ue,Fo,pt,jo,Co,Io,T,Ao,mt,Po,qo,ft,zo,Oo,ut,Do,No,gt,Lo,Ho,_t,Wo,Uo,wt,Vo,Bo,vt,Ko,Ro,Bt,te,bs,Kt,oe,Yo,Be,Zo,Go,Rt,O,Jo,ge,Qo,Xo,_e,en,tn,Yt,U,ne,bt,we,on,St,nn,Zt,I,ve,sn,V,an,Ke,rn,ln,be,dn,cn,hn,B,pn,Re,mn,fn,Ye,un,gn,_n,Se,Gt,K,se,$t,$e,wn,yt,vn,Jt,P,ye,bn,Te,Sn,xe,$n,yn,Tn,F,ke,xn,R,kn,Ze,Mn,En,Tt,Fn,jn,Cn,ae,In,xt,An,Pn,Me,Qt,Y,re,kt,Ee,qn,Mt,zn,Xt,q,Fe,On,Z,Dn,Et,Nn,Ln,je,Hn,Wn,Un,j,Ce,Vn,G,Bn,Ge,Kn,Rn,Ft,Yn,Zn,Gn,ie,Jn,jt,Qn,Xn,Ie,eo,J,le,Ct,Ae,es,It,ts,to,A,Pe,os,At,ns,ss,qe,as,ze,rs,is,ls,C,Oe,ds,Q,cs,Je,hs,ps,Pt,ms,fs,us,de,gs,qt,_s,ws,De,oo;return u=new lt({}),pe=new lt({}),we=new lt({}),ve=new Le({props:{name:"class transformers.SwinConfig",anchor:"transformers.SwinConfig",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 4"},{name:"num_channels",val:" = 3"},{name:"embed_dim",val:" = 96"},{name:"depths",val:" = [2, 2, 6, 2]"},{name:"num_heads",val:" = [3, 6, 12, 24]"},{name:"window_size",val:" = 7"},{name:"mlp_ratio",val:" = 4.0"},{name:"qkv_bias",val:" = True"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"drop_path_rate",val:" = 0.1"},{name:"hidden_act",val:" = 'gelu'"},{name:"use_absolute_embeddings",val:" = False"},{name:"patch_norm",val:" = True"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"encoder_stride",val:" = 32"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SwinConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
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
<p>Example &#x2014;`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/swin/configuration_swin.py#L29"}}),Se=new fo({props:{code:`from transformers import SwinModel, SwinConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),$e=new lt({}),ye=new Le({props:{name:"class transformers.SwinModel",anchor:"transformers.SwinModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"},{name:"use_mask_token",val:" = False"}],parametersDescription:[{anchor:"transformers.SwinModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/swin/modeling_swin.py#L884"}}),ke=new Le({props:{name:"forward",anchor:"transformers.SwinModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.SwinModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),ae=new vs({props:{$$slots:{default:[Ta]},$$scope:{ctx:X}}}),Me=new fo({props:{code:`from transformers import AutoFeatureExtractor, SwinModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">49</span>, <span class="hljs-number">768</span>]`}}),Ee=new lt({}),Fe=new Le({props:{name:"class transformers.SwinForMaskedImageModeling",anchor:"transformers.SwinForMaskedImageModeling",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/swin/modeling_swin.py#L982"}}),Ce=new Le({props:{name:"forward",anchor:"transformers.SwinForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),ie=new vs({props:{$$slots:{default:[xa]},$$scope:{ctx:X}}}),Ie=new fo({props:{code:`from transformers import AutoFeatureExtractor, SwinForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),Ae=new lt({}),Pe=new Le({props:{name:"class transformers.SwinForImageClassification",anchor:"transformers.SwinForImageClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SwinForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/swin/modeling_swin.py#L1092"}}),Oe=new Le({props:{name:"forward",anchor:"transformers.SwinForImageClassification.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.SwinForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),de=new vs({props:{$$slots:{default:[ka]},$$scope:{ctx:X}}}),De=new fo({props:{code:`from transformers import AutoFeatureExtractor, SwinForImageClassification
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
tabby, tabby cat`}}),{c(){m=n("meta"),k=d(),f=n("h1"),_=n("a"),x=n("span"),w(u.$$.fragment),g=d(),E=n("span"),uo=a("Swin Transformer"),Nt=d(),H=n("h2"),ee=n("a"),dt=n("span"),w(pe.$$.fragment),go=d(),ct=n("span"),_o=a("Overview"),Lt=d(),W=n("p"),wo=a("The Swin Transformer was proposed in "),me=n("a"),vo=a("Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),bo=n("br"),So=a(`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),Ht=d(),He=n("p"),$o=a("The abstract from the paper is the following:"),Wt=d(),We=n("p"),ht=n("em"),yo=a(`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
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
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),Ut=d(),Ue=n("p"),To=a("Tips:"),Vt=d(),z=n("ul"),fe=n("li"),xo=a("One can use the "),Ve=n("a"),ko=a("AutoFeatureExtractor"),Mo=a(" API to prepare images for the model."),Eo=d(),ue=n("li"),Fo=a("Swin pads the inputs supporting any input height and width (if divisible by "),pt=n("code"),jo=a("32"),Co=a(")."),Io=d(),T=n("li"),Ao=a("Swin can be used as a "),mt=n("em"),Po=a("backbone"),qo=a(". When "),ft=n("code"),zo=a("output_hidden_states = True"),Oo=a(", it will output both "),ut=n("code"),Do=a("hidden_states"),No=a(" and "),gt=n("code"),Lo=a("reshaped_hidden_states"),Ho=a(". The "),_t=n("code"),Wo=a("reshaped_hidden_states"),Uo=a(" have a shape of "),wt=n("code"),Vo=a("(batch, num_channels, height, width)"),Bo=a(" rather than "),vt=n("code"),Ko=a("(batch_size, sequence_length, num_channels)"),Ro=a("."),Bt=d(),te=n("img"),Kt=d(),oe=n("small"),Yo=a("Swin Transformer architecture. Taken from the "),Be=n("a"),Zo=a("original paper"),Go=a("."),Rt=d(),O=n("p"),Jo=a("This model was contributed by "),ge=n("a"),Qo=a("novice03"),Xo=a(". The original code can be found "),_e=n("a"),en=a("here"),tn=a("."),Yt=d(),U=n("h2"),ne=n("a"),bt=n("span"),w(we.$$.fragment),on=d(),St=n("span"),nn=a("SwinConfig"),Zt=d(),I=n("div"),w(ve.$$.fragment),sn=d(),V=n("p"),an=a("This is the configuration class to store the configuration of a "),Ke=n("a"),rn=a("SwinModel"),ln=a(`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),be=n("a"),dn=a("microsoft/swin-tiny-patch4-window7-224"),cn=a(`
architecture.`),hn=d(),B=n("p"),pn=a("Configuration objects inherit from "),Re=n("a"),mn=a("PretrainedConfig"),fn=a(` and can be used to control the model outputs. Read the
documentation from `),Ye=n("a"),un=a("PretrainedConfig"),gn=a(" for more information."),_n=d(),w(Se.$$.fragment),Gt=d(),K=n("h2"),se=n("a"),$t=n("span"),w($e.$$.fragment),wn=d(),yt=n("span"),vn=a("SwinModel"),Jt=d(),P=n("div"),w(ye.$$.fragment),bn=d(),Te=n("p"),Sn=a(`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),xe=n("a"),$n=a("torch.nn.Module"),yn=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Tn=d(),F=n("div"),w(ke.$$.fragment),xn=d(),R=n("p"),kn=a("The "),Ze=n("a"),Mn=a("SwinModel"),En=a(" forward method, overrides the "),Tt=n("code"),Fn=a("__call__"),jn=a(" special method."),Cn=d(),w(ae.$$.fragment),In=d(),xt=n("p"),An=a("Example:"),Pn=d(),w(Me.$$.fragment),Qt=d(),Y=n("h2"),re=n("a"),kt=n("span"),w(Ee.$$.fragment),qn=d(),Mt=n("span"),zn=a("SwinForMaskedImageModeling"),Xt=d(),q=n("div"),w(Fe.$$.fragment),On=d(),Z=n("p"),Dn=a("Swin Model with a decoder on top for masked image modeling, as proposed in "),Et=n("code"),Nn=a("SimMIM <https://arxiv.org/abs/2111.09886>"),Ln=a(`__.
This model is a PyTorch `),je=n("a"),Hn=a("torch.nn.Module"),Wn=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Un=d(),j=n("div"),w(Ce.$$.fragment),Vn=d(),G=n("p"),Bn=a("The "),Ge=n("a"),Kn=a("SwinForMaskedImageModeling"),Rn=a(" forward method, overrides the "),Ft=n("code"),Yn=a("__call__"),Zn=a(" special method."),Gn=d(),w(ie.$$.fragment),Jn=d(),jt=n("p"),Qn=a("Examples:"),Xn=d(),w(Ie.$$.fragment),eo=d(),J=n("h2"),le=n("a"),Ct=n("span"),w(Ae.$$.fragment),es=d(),It=n("span"),ts=a("SwinForImageClassification"),to=d(),A=n("div"),w(Pe.$$.fragment),os=d(),At=n("p"),ns=a(`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),ss=d(),qe=n("p"),as=a("This model is a PyTorch "),ze=n("a"),rs=a("torch.nn.Module"),is=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ls=d(),C=n("div"),w(Oe.$$.fragment),ds=d(),Q=n("p"),cs=a("The "),Je=n("a"),hs=a("SwinForImageClassification"),ps=a(" forward method, overrides the "),Pt=n("code"),ms=a("__call__"),fs=a(" special method."),us=d(),w(de.$$.fragment),gs=d(),qt=n("p"),_s=a("Example:"),ws=d(),w(De.$$.fragment),this.h()},l(t){const h=Sa('[data-svelte="svelte-1phssyn"]',document.head);m=s(h,"META",{name:!0,content:!0}),h.forEach(o),k=c(t),f=s(t,"H1",{class:!0});var Ne=i(f);_=s(Ne,"A",{id:!0,class:!0,href:!0});var zt=i(_);x=s(zt,"SPAN",{});var Ot=i(x);v(u.$$.fragment,Ot),Ot.forEach(o),zt.forEach(o),g=c(Ne),E=s(Ne,"SPAN",{});var Ss=i(E);uo=r(Ss,"Swin Transformer"),Ss.forEach(o),Ne.forEach(o),Nt=c(t),H=s(t,"H2",{class:!0});var no=i(H);ee=s(no,"A",{id:!0,class:!0,href:!0});var $s=i(ee);dt=s($s,"SPAN",{});var ys=i(dt);v(pe.$$.fragment,ys),ys.forEach(o),$s.forEach(o),go=c(no),ct=s(no,"SPAN",{});var Ts=i(ct);_o=r(Ts,"Overview"),Ts.forEach(o),no.forEach(o),Lt=c(t),W=s(t,"P",{});var Dt=i(W);wo=r(Dt,"The Swin Transformer was proposed in "),me=s(Dt,"A",{href:!0,rel:!0});var xs=i(me);vo=r(xs,"Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),xs.forEach(o),bo=s(Dt,"BR",{}),So=r(Dt,`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),Dt.forEach(o),Ht=c(t),He=s(t,"P",{});var ks=i(He);$o=r(ks,"The abstract from the paper is the following:"),ks.forEach(o),Wt=c(t),We=s(t,"P",{});var Ms=i(We);ht=s(Ms,"EM",{});var Es=i(ht);yo=r(Es,`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
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
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),Es.forEach(o),Ms.forEach(o),Ut=c(t),Ue=s(t,"P",{});var Fs=i(Ue);To=r(Fs,"Tips:"),Fs.forEach(o),Vt=c(t),z=s(t,"UL",{});var Qe=i(z);fe=s(Qe,"LI",{});var so=i(fe);xo=r(so,"One can use the "),Ve=s(so,"A",{href:!0});var js=i(Ve);ko=r(js,"AutoFeatureExtractor"),js.forEach(o),Mo=r(so," API to prepare images for the model."),so.forEach(o),Eo=c(Qe),ue=s(Qe,"LI",{});var ao=i(ue);Fo=r(ao,"Swin pads the inputs supporting any input height and width (if divisible by "),pt=s(ao,"CODE",{});var Cs=i(pt);jo=r(Cs,"32"),Cs.forEach(o),Co=r(ao,")."),ao.forEach(o),Io=c(Qe),T=s(Qe,"LI",{});var M=i(T);Ao=r(M,"Swin can be used as a "),mt=s(M,"EM",{});var Is=i(mt);Po=r(Is,"backbone"),Is.forEach(o),qo=r(M,". When "),ft=s(M,"CODE",{});var As=i(ft);zo=r(As,"output_hidden_states = True"),As.forEach(o),Oo=r(M,", it will output both "),ut=s(M,"CODE",{});var Ps=i(ut);Do=r(Ps,"hidden_states"),Ps.forEach(o),No=r(M," and "),gt=s(M,"CODE",{});var qs=i(gt);Lo=r(qs,"reshaped_hidden_states"),qs.forEach(o),Ho=r(M,". The "),_t=s(M,"CODE",{});var zs=i(_t);Wo=r(zs,"reshaped_hidden_states"),zs.forEach(o),Uo=r(M," have a shape of "),wt=s(M,"CODE",{});var Os=i(wt);Vo=r(Os,"(batch, num_channels, height, width)"),Os.forEach(o),Bo=r(M," rather than "),vt=s(M,"CODE",{});var Ds=i(vt);Ko=r(Ds,"(batch_size, sequence_length, num_channels)"),Ds.forEach(o),Ro=r(M,"."),M.forEach(o),Qe.forEach(o),Bt=c(t),te=s(t,"IMG",{src:!0,alt:!0,width:!0}),Kt=c(t),oe=s(t,"SMALL",{});var ro=i(oe);Yo=r(ro,"Swin Transformer architecture. Taken from the "),Be=s(ro,"A",{href:!0});var Ns=i(Be);Zo=r(Ns,"original paper"),Ns.forEach(o),Go=r(ro,"."),ro.forEach(o),Rt=c(t),O=s(t,"P",{});var Xe=i(O);Jo=r(Xe,"This model was contributed by "),ge=s(Xe,"A",{href:!0,rel:!0});var Ls=i(ge);Qo=r(Ls,"novice03"),Ls.forEach(o),Xo=r(Xe,". The original code can be found "),_e=s(Xe,"A",{href:!0,rel:!0});var Hs=i(_e);en=r(Hs,"here"),Hs.forEach(o),tn=r(Xe,"."),Xe.forEach(o),Yt=c(t),U=s(t,"H2",{class:!0});var io=i(U);ne=s(io,"A",{id:!0,class:!0,href:!0});var Ws=i(ne);bt=s(Ws,"SPAN",{});var Us=i(bt);v(we.$$.fragment,Us),Us.forEach(o),Ws.forEach(o),on=c(io),St=s(io,"SPAN",{});var Vs=i(St);nn=r(Vs,"SwinConfig"),Vs.forEach(o),io.forEach(o),Zt=c(t),I=s(t,"DIV",{class:!0});var ce=i(I);v(ve.$$.fragment,ce),sn=c(ce),V=s(ce,"P",{});var et=i(V);an=r(et,"This is the configuration class to store the configuration of a "),Ke=s(et,"A",{href:!0});var Bs=i(Ke);rn=r(Bs,"SwinModel"),Bs.forEach(o),ln=r(et,`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),be=s(et,"A",{href:!0,rel:!0});var Ks=i(be);dn=r(Ks,"microsoft/swin-tiny-patch4-window7-224"),Ks.forEach(o),cn=r(et,`
architecture.`),et.forEach(o),hn=c(ce),B=s(ce,"P",{});var tt=i(B);pn=r(tt,"Configuration objects inherit from "),Re=s(tt,"A",{href:!0});var Rs=i(Re);mn=r(Rs,"PretrainedConfig"),Rs.forEach(o),fn=r(tt,` and can be used to control the model outputs. Read the
documentation from `),Ye=s(tt,"A",{href:!0});var Ys=i(Ye);un=r(Ys,"PretrainedConfig"),Ys.forEach(o),gn=r(tt," for more information."),tt.forEach(o),_n=c(ce),v(Se.$$.fragment,ce),ce.forEach(o),Gt=c(t),K=s(t,"H2",{class:!0});var lo=i(K);se=s(lo,"A",{id:!0,class:!0,href:!0});var Zs=i(se);$t=s(Zs,"SPAN",{});var Gs=i($t);v($e.$$.fragment,Gs),Gs.forEach(o),Zs.forEach(o),wn=c(lo),yt=s(lo,"SPAN",{});var Js=i(yt);vn=r(Js,"SwinModel"),Js.forEach(o),lo.forEach(o),Jt=c(t),P=s(t,"DIV",{class:!0});var ot=i(P);v(ye.$$.fragment,ot),bn=c(ot),Te=s(ot,"P",{});var co=i(Te);Sn=r(co,`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),xe=s(co,"A",{href:!0,rel:!0});var Qs=i(xe);$n=r(Qs,"torch.nn.Module"),Qs.forEach(o),yn=r(co,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),co.forEach(o),Tn=c(ot),F=s(ot,"DIV",{class:!0});var D=i(F);v(ke.$$.fragment,D),xn=c(D),R=s(D,"P",{});var nt=i(R);kn=r(nt,"The "),Ze=s(nt,"A",{href:!0});var Xs=i(Ze);Mn=r(Xs,"SwinModel"),Xs.forEach(o),En=r(nt," forward method, overrides the "),Tt=s(nt,"CODE",{});var ea=i(Tt);Fn=r(ea,"__call__"),ea.forEach(o),jn=r(nt," special method."),nt.forEach(o),Cn=c(D),v(ae.$$.fragment,D),In=c(D),xt=s(D,"P",{});var ta=i(xt);An=r(ta,"Example:"),ta.forEach(o),Pn=c(D),v(Me.$$.fragment,D),D.forEach(o),ot.forEach(o),Qt=c(t),Y=s(t,"H2",{class:!0});var ho=i(Y);re=s(ho,"A",{id:!0,class:!0,href:!0});var oa=i(re);kt=s(oa,"SPAN",{});var na=i(kt);v(Ee.$$.fragment,na),na.forEach(o),oa.forEach(o),qn=c(ho),Mt=s(ho,"SPAN",{});var sa=i(Mt);zn=r(sa,"SwinForMaskedImageModeling"),sa.forEach(o),ho.forEach(o),Xt=c(t),q=s(t,"DIV",{class:!0});var st=i(q);v(Fe.$$.fragment,st),On=c(st),Z=s(st,"P",{});var at=i(Z);Dn=r(at,"Swin Model with a decoder on top for masked image modeling, as proposed in "),Et=s(at,"CODE",{});var aa=i(Et);Nn=r(aa,"SimMIM <https://arxiv.org/abs/2111.09886>"),aa.forEach(o),Ln=r(at,`__.
This model is a PyTorch `),je=s(at,"A",{href:!0,rel:!0});var ra=i(je);Hn=r(ra,"torch.nn.Module"),ra.forEach(o),Wn=r(at,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),at.forEach(o),Un=c(st),j=s(st,"DIV",{class:!0});var N=i(j);v(Ce.$$.fragment,N),Vn=c(N),G=s(N,"P",{});var rt=i(G);Bn=r(rt,"The "),Ge=s(rt,"A",{href:!0});var ia=i(Ge);Kn=r(ia,"SwinForMaskedImageModeling"),ia.forEach(o),Rn=r(rt," forward method, overrides the "),Ft=s(rt,"CODE",{});var la=i(Ft);Yn=r(la,"__call__"),la.forEach(o),Zn=r(rt," special method."),rt.forEach(o),Gn=c(N),v(ie.$$.fragment,N),Jn=c(N),jt=s(N,"P",{});var da=i(jt);Qn=r(da,"Examples:"),da.forEach(o),Xn=c(N),v(Ie.$$.fragment,N),N.forEach(o),st.forEach(o),eo=c(t),J=s(t,"H2",{class:!0});var po=i(J);le=s(po,"A",{id:!0,class:!0,href:!0});var ca=i(le);Ct=s(ca,"SPAN",{});var ha=i(Ct);v(Ae.$$.fragment,ha),ha.forEach(o),ca.forEach(o),es=c(po),It=s(po,"SPAN",{});var pa=i(It);ts=r(pa,"SwinForImageClassification"),pa.forEach(o),po.forEach(o),to=c(t),A=s(t,"DIV",{class:!0});var he=i(A);v(Pe.$$.fragment,he),os=c(he),At=s(he,"P",{});var ma=i(At);ns=r(ma,`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),ma.forEach(o),ss=c(he),qe=s(he,"P",{});var mo=i(qe);as=r(mo,"This model is a PyTorch "),ze=s(mo,"A",{href:!0,rel:!0});var fa=i(ze);rs=r(fa,"torch.nn.Module"),fa.forEach(o),is=r(mo,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mo.forEach(o),ls=c(he),C=s(he,"DIV",{class:!0});var L=i(C);v(Oe.$$.fragment,L),ds=c(L),Q=s(L,"P",{});var it=i(Q);cs=r(it,"The "),Je=s(it,"A",{href:!0});var ua=i(Je);hs=r(ua,"SwinForImageClassification"),ua.forEach(o),ps=r(it," forward method, overrides the "),Pt=s(it,"CODE",{});var ga=i(Pt);ms=r(ga,"__call__"),ga.forEach(o),fs=r(it," special method."),it.forEach(o),us=c(L),v(de.$$.fragment,L),gs=c(L),qt=s(L,"P",{});var _a=i(qt);_s=r(_a,"Example:"),_a.forEach(o),ws=c(L),v(De.$$.fragment,L),L.forEach(o),he.forEach(o),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(Ea)),l(_,"id","swin-transformer"),l(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(_,"href","#swin-transformer"),l(f,"class","relative group"),l(ee,"id","overview"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#overview"),l(H,"class","relative group"),l(me,"href","https://arxiv.org/abs/2103.14030"),l(me,"rel","nofollow"),l(Ve,"href","/docs/transformers/v4.18.0/en/model_doc/auto#transformers.AutoFeatureExtractor"),$a(te.src,bs="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/swin_transformer_architecture.png")||l(te,"src",bs),l(te,"alt","drawing"),l(te,"width","600"),l(Be,"href","https://arxiv.org/abs/2102.03334"),l(ge,"href","https://huggingface.co/novice03%3E"),l(ge,"rel","nofollow"),l(_e,"href","https://github.com/microsoft/Swin-Transformer"),l(_e,"rel","nofollow"),l(ne,"id","transformers.SwinConfig"),l(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ne,"href","#transformers.SwinConfig"),l(U,"class","relative group"),l(Ke,"href","/docs/transformers/v4.18.0/en/model_doc/swin#transformers.SwinModel"),l(be,"href","https://huggingface.co/microsoft/swin-tiny-patch4-window7-224"),l(be,"rel","nofollow"),l(Re,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),l(Ye,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),l(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(se,"id","transformers.SwinModel"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#transformers.SwinModel"),l(K,"class","relative group"),l(xe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(xe,"rel","nofollow"),l(Ze,"href","/docs/transformers/v4.18.0/en/model_doc/swin#transformers.SwinModel"),l(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(re,"id","transformers.SwinForMaskedImageModeling"),l(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(re,"href","#transformers.SwinForMaskedImageModeling"),l(Y,"class","relative group"),l(je,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(je,"rel","nofollow"),l(Ge,"href","/docs/transformers/v4.18.0/en/model_doc/swin#transformers.SwinForMaskedImageModeling"),l(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(le,"id","transformers.SwinForImageClassification"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.SwinForImageClassification"),l(J,"class","relative group"),l(ze,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ze,"rel","nofollow"),l(Je,"href","/docs/transformers/v4.18.0/en/model_doc/swin#transformers.SwinForImageClassification"),l(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,h){e(document.head,m),p(t,k,h),p(t,f,h),e(f,_),e(_,x),b(u,x,null),e(f,g),e(f,E),e(E,uo),p(t,Nt,h),p(t,H,h),e(H,ee),e(ee,dt),b(pe,dt,null),e(H,go),e(H,ct),e(ct,_o),p(t,Lt,h),p(t,W,h),e(W,wo),e(W,me),e(me,vo),e(W,bo),e(W,So),p(t,Ht,h),p(t,He,h),e(He,$o),p(t,Wt,h),p(t,We,h),e(We,ht),e(ht,yo),p(t,Ut,h),p(t,Ue,h),e(Ue,To),p(t,Vt,h),p(t,z,h),e(z,fe),e(fe,xo),e(fe,Ve),e(Ve,ko),e(fe,Mo),e(z,Eo),e(z,ue),e(ue,Fo),e(ue,pt),e(pt,jo),e(ue,Co),e(z,Io),e(z,T),e(T,Ao),e(T,mt),e(mt,Po),e(T,qo),e(T,ft),e(ft,zo),e(T,Oo),e(T,ut),e(ut,Do),e(T,No),e(T,gt),e(gt,Lo),e(T,Ho),e(T,_t),e(_t,Wo),e(T,Uo),e(T,wt),e(wt,Vo),e(T,Bo),e(T,vt),e(vt,Ko),e(T,Ro),p(t,Bt,h),p(t,te,h),p(t,Kt,h),p(t,oe,h),e(oe,Yo),e(oe,Be),e(Be,Zo),e(oe,Go),p(t,Rt,h),p(t,O,h),e(O,Jo),e(O,ge),e(ge,Qo),e(O,Xo),e(O,_e),e(_e,en),e(O,tn),p(t,Yt,h),p(t,U,h),e(U,ne),e(ne,bt),b(we,bt,null),e(U,on),e(U,St),e(St,nn),p(t,Zt,h),p(t,I,h),b(ve,I,null),e(I,sn),e(I,V),e(V,an),e(V,Ke),e(Ke,rn),e(V,ln),e(V,be),e(be,dn),e(V,cn),e(I,hn),e(I,B),e(B,pn),e(B,Re),e(Re,mn),e(B,fn),e(B,Ye),e(Ye,un),e(B,gn),e(I,_n),b(Se,I,null),p(t,Gt,h),p(t,K,h),e(K,se),e(se,$t),b($e,$t,null),e(K,wn),e(K,yt),e(yt,vn),p(t,Jt,h),p(t,P,h),b(ye,P,null),e(P,bn),e(P,Te),e(Te,Sn),e(Te,xe),e(xe,$n),e(Te,yn),e(P,Tn),e(P,F),b(ke,F,null),e(F,xn),e(F,R),e(R,kn),e(R,Ze),e(Ze,Mn),e(R,En),e(R,Tt),e(Tt,Fn),e(R,jn),e(F,Cn),b(ae,F,null),e(F,In),e(F,xt),e(xt,An),e(F,Pn),b(Me,F,null),p(t,Qt,h),p(t,Y,h),e(Y,re),e(re,kt),b(Ee,kt,null),e(Y,qn),e(Y,Mt),e(Mt,zn),p(t,Xt,h),p(t,q,h),b(Fe,q,null),e(q,On),e(q,Z),e(Z,Dn),e(Z,Et),e(Et,Nn),e(Z,Ln),e(Z,je),e(je,Hn),e(Z,Wn),e(q,Un),e(q,j),b(Ce,j,null),e(j,Vn),e(j,G),e(G,Bn),e(G,Ge),e(Ge,Kn),e(G,Rn),e(G,Ft),e(Ft,Yn),e(G,Zn),e(j,Gn),b(ie,j,null),e(j,Jn),e(j,jt),e(jt,Qn),e(j,Xn),b(Ie,j,null),p(t,eo,h),p(t,J,h),e(J,le),e(le,Ct),b(Ae,Ct,null),e(J,es),e(J,It),e(It,ts),p(t,to,h),p(t,A,h),b(Pe,A,null),e(A,os),e(A,At),e(At,ns),e(A,ss),e(A,qe),e(qe,as),e(qe,ze),e(ze,rs),e(qe,is),e(A,ls),e(A,C),b(Oe,C,null),e(C,ds),e(C,Q),e(Q,cs),e(Q,Je),e(Je,hs),e(Q,ps),e(Q,Pt),e(Pt,ms),e(Q,fs),e(C,us),b(de,C,null),e(C,gs),e(C,qt),e(qt,_s),e(C,ws),b(De,C,null),oo=!0},p(t,[h]){const Ne={};h&2&&(Ne.$$scope={dirty:h,ctx:t}),ae.$set(Ne);const zt={};h&2&&(zt.$$scope={dirty:h,ctx:t}),ie.$set(zt);const Ot={};h&2&&(Ot.$$scope={dirty:h,ctx:t}),de.$set(Ot)},i(t){oo||(S(u.$$.fragment,t),S(pe.$$.fragment,t),S(we.$$.fragment,t),S(ve.$$.fragment,t),S(Se.$$.fragment,t),S($e.$$.fragment,t),S(ye.$$.fragment,t),S(ke.$$.fragment,t),S(ae.$$.fragment,t),S(Me.$$.fragment,t),S(Ee.$$.fragment,t),S(Fe.$$.fragment,t),S(Ce.$$.fragment,t),S(ie.$$.fragment,t),S(Ie.$$.fragment,t),S(Ae.$$.fragment,t),S(Pe.$$.fragment,t),S(Oe.$$.fragment,t),S(de.$$.fragment,t),S(De.$$.fragment,t),oo=!0)},o(t){$(u.$$.fragment,t),$(pe.$$.fragment,t),$(we.$$.fragment,t),$(ve.$$.fragment,t),$(Se.$$.fragment,t),$($e.$$.fragment,t),$(ye.$$.fragment,t),$(ke.$$.fragment,t),$(ae.$$.fragment,t),$(Me.$$.fragment,t),$(Ee.$$.fragment,t),$(Fe.$$.fragment,t),$(Ce.$$.fragment,t),$(ie.$$.fragment,t),$(Ie.$$.fragment,t),$(Ae.$$.fragment,t),$(Pe.$$.fragment,t),$(Oe.$$.fragment,t),$(de.$$.fragment,t),$(De.$$.fragment,t),oo=!1},d(t){o(m),t&&o(k),t&&o(f),y(u),t&&o(Nt),t&&o(H),y(pe),t&&o(Lt),t&&o(W),t&&o(Ht),t&&o(He),t&&o(Wt),t&&o(We),t&&o(Ut),t&&o(Ue),t&&o(Vt),t&&o(z),t&&o(Bt),t&&o(te),t&&o(Kt),t&&o(oe),t&&o(Rt),t&&o(O),t&&o(Yt),t&&o(U),y(we),t&&o(Zt),t&&o(I),y(ve),y(Se),t&&o(Gt),t&&o(K),y($e),t&&o(Jt),t&&o(P),y(ye),y(ke),y(ae),y(Me),t&&o(Qt),t&&o(Y),y(Ee),t&&o(Xt),t&&o(q),y(Fe),y(Ce),y(ie),y(Ie),t&&o(eo),t&&o(J),y(Ae),t&&o(to),t&&o(A),y(Pe),y(Oe),y(de),y(De)}}}const Ea={local:"swin-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.SwinConfig",title:"SwinConfig"},{local:"transformers.SwinModel",title:"SwinModel"},{local:"transformers.SwinForMaskedImageModeling",title:"SwinForMaskedImageModeling"},{local:"transformers.SwinForImageClassification",title:"SwinForImageClassification"}],title:"Swin Transformer"};function Fa(X){return ya(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qa extends wa{constructor(m){super();va(this,m,Fa,Ma,ba,{})}}export{qa as default,Ea as metadata};
