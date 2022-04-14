import{S as ws,i as vs,s as bs,e as n,k as d,w,t as s,M as Ss,c as a,d as o,m as c,a as i,x as v,h as r,b as l,N as $s,F as e,g as p,y as b,q as S,o as $,B as T,v as Ts}from"../../chunks/vendor-6b77c823.js";import{T as va}from"../../chunks/Tip-39098574.js";import{D as Le}from"../../chunks/Docstring-90e3aa51.js";import{C as fo}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as lt}from"../../chunks/IconCopyLink-7a11ce68.js";function ys(X){let m,x,f,_,k;return{c(){m=n("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){m=a(u,"P",{});var g=i(m);x=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(g,"CODE",{});var E=i(f);_=r(E,"Module"),E.forEach(o),k=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){p(u,m,g),e(m,x),e(m,f),e(f,_),e(m,k)},d(u){u&&o(m)}}}function ks(X){let m,x,f,_,k;return{c(){m=n("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){m=a(u,"P",{});var g=i(m);x=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(g,"CODE",{});var E=i(f);_=r(E,"Module"),E.forEach(o),k=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){p(u,m,g),e(m,x),e(m,f),e(f,_),e(m,k)},d(u){u&&o(m)}}}function xs(X){let m,x,f,_,k;return{c(){m=n("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=s("Module"),k=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){m=a(u,"P",{});var g=i(m);x=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(g,"CODE",{});var E=i(f);_=r(E,"Module"),E.forEach(o),k=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){p(u,m,g),e(m,x),e(m,f),e(f,_),e(m,k)},d(u){u&&o(m)}}}function Ms(X){let m,x,f,_,k,u,g,E,uo,Nt,H,ee,dt,pe,go,ct,_o,Lt,W,wo,me,vo,bo,So,Ht,He,$o,Wt,We,ht,To,Ut,Ue,yo,Vt,z,fe,ko,Ve,xo,Mo,Eo,ue,Fo,pt,jo,Co,Io,y,Ao,mt,Po,qo,ft,zo,Oo,ut,Do,No,gt,Lo,Ho,_t,Wo,Uo,wt,Vo,Bo,vt,Ko,Ro,Bt,te,ba,Kt,oe,Yo,Be,Zo,Go,Rt,O,Jo,ge,Qo,Xo,_e,en,tn,Yt,U,ne,bt,we,on,St,nn,Zt,I,ve,an,V,sn,Ke,rn,ln,be,dn,cn,hn,B,pn,Re,mn,fn,Ye,un,gn,_n,Se,Gt,K,ae,$t,$e,wn,Tt,vn,Jt,P,Te,bn,ye,Sn,ke,$n,Tn,yn,F,xe,kn,R,xn,Ze,Mn,En,yt,Fn,jn,Cn,se,In,kt,An,Pn,Me,Qt,Y,re,xt,Ee,qn,Mt,zn,Xt,q,Fe,On,Z,Dn,Et,Nn,Ln,je,Hn,Wn,Un,j,Ce,Vn,G,Bn,Ge,Kn,Rn,Ft,Yn,Zn,Gn,ie,Jn,jt,Qn,Xn,Ie,eo,J,le,Ct,Ae,ea,It,ta,to,A,Pe,oa,At,na,aa,qe,sa,ze,ra,ia,la,C,Oe,da,Q,ca,Je,ha,pa,Pt,ma,fa,ua,de,ga,qt,_a,wa,De,oo;return u=new lt({}),pe=new lt({}),we=new lt({}),ve=new Le({props:{name:"class transformers.SwinConfig",anchor:"transformers.SwinConfig",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 4"},{name:"num_channels",val:" = 3"},{name:"embed_dim",val:" = 96"},{name:"depths",val:" = [2, 2, 6, 2]"},{name:"num_heads",val:" = [3, 6, 12, 24]"},{name:"window_size",val:" = 7"},{name:"mlp_ratio",val:" = 4.0"},{name:"qkv_bias",val:" = True"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"drop_path_rate",val:" = 0.1"},{name:"hidden_act",val:" = 'gelu'"},{name:"use_absolute_embeddings",val:" = False"},{name:"patch_norm",val:" = True"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"encoder_stride",val:" = 32"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SwinConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
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
<p>Example &#x2014;`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swin/configuration_swin.py#L29"}}),Se=new fo({props:{code:`from transformers import SwinModel, SwinConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),$e=new lt({}),Te=new Le({props:{name:"class transformers.SwinModel",anchor:"transformers.SwinModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"},{name:"use_mask_token",val:" = False"}],parametersDescription:[{anchor:"transformers.SwinModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swin/modeling_swin.py#L885"}}),xe=new Le({props:{name:"forward",anchor:"transformers.SwinModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.SwinModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swin/modeling_swin.py#L912",returnDescription:`
<p>A <code>transformers.models.swin.modeling_swin.SwinModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig"
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
`}}),se=new va({props:{$$slots:{default:[ys]},$$scope:{ctx:X}}}),Me=new fo({props:{code:`from transformers import AutoFeatureExtractor, SwinModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">49</span>, <span class="hljs-number">768</span>]`}}),Ee=new lt({}),Fe=new Le({props:{name:"class transformers.SwinForMaskedImageModeling",anchor:"transformers.SwinForMaskedImageModeling",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swin/modeling_swin.py#L983"}}),Ce=new Le({props:{name:"forward",anchor:"transformers.SwinForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SwinForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swin/modeling_swin.py#L998",returnDescription:`
<p>A <code>transformers.models.swin.modeling_swin.SwinMaskedImageModelingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig"
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
`}}),ie=new va({props:{$$slots:{default:[ks]},$$scope:{ctx:X}}}),Ie=new fo({props:{code:`from transformers import AutoFeatureExtractor, SwinForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),Ae=new lt({}),Pe=new Le({props:{name:"class transformers.SwinForImageClassification",anchor:"transformers.SwinForImageClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SwinForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swin/modeling_swin.py#L1093"}}),Oe=new Le({props:{name:"forward",anchor:"transformers.SwinForImageClassification.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.SwinForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SwinForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/swin/modeling_swin.py#L1108",returnDescription:`
<p>A <code>transformers.models.swin.modeling_swin.SwinImageClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig"
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
`}}),de=new va({props:{$$slots:{default:[xs]},$$scope:{ctx:X}}}),De=new fo({props:{code:`from transformers import AutoFeatureExtractor, SwinForImageClassification
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
tabby, tabby cat`}}),{c(){m=n("meta"),x=d(),f=n("h1"),_=n("a"),k=n("span"),w(u.$$.fragment),g=d(),E=n("span"),uo=s("Swin Transformer"),Nt=d(),H=n("h2"),ee=n("a"),dt=n("span"),w(pe.$$.fragment),go=d(),ct=n("span"),_o=s("Overview"),Lt=d(),W=n("p"),wo=s("The Swin Transformer was proposed in "),me=n("a"),vo=s("Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),bo=n("br"),So=s(`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),Ht=d(),He=n("p"),$o=s("The abstract from the paper is the following:"),Wt=d(),We=n("p"),ht=n("em"),To=s(`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
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
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),Ut=d(),Ue=n("p"),yo=s("Tips:"),Vt=d(),z=n("ul"),fe=n("li"),ko=s("One can use the "),Ve=n("a"),xo=s("AutoFeatureExtractor"),Mo=s(" API to prepare images for the model."),Eo=d(),ue=n("li"),Fo=s("Swin pads the inputs supporting any input height and width (if divisible by "),pt=n("code"),jo=s("32"),Co=s(")."),Io=d(),y=n("li"),Ao=s("Swin can be used as a "),mt=n("em"),Po=s("backbone"),qo=s(". When "),ft=n("code"),zo=s("output_hidden_states = True"),Oo=s(", it will output both "),ut=n("code"),Do=s("hidden_states"),No=s(" and "),gt=n("code"),Lo=s("reshaped_hidden_states"),Ho=s(". The "),_t=n("code"),Wo=s("reshaped_hidden_states"),Uo=s(" have a shape of "),wt=n("code"),Vo=s("(batch, num_channels, height, width)"),Bo=s(" rather than "),vt=n("code"),Ko=s("(batch_size, sequence_length, num_channels)"),Ro=s("."),Bt=d(),te=n("img"),Kt=d(),oe=n("small"),Yo=s("Swin Transformer architecture. Taken from the "),Be=n("a"),Zo=s("original paper"),Go=s("."),Rt=d(),O=n("p"),Jo=s("This model was contributed by "),ge=n("a"),Qo=s("novice03"),Xo=s(". The original code can be found "),_e=n("a"),en=s("here"),tn=s("."),Yt=d(),U=n("h2"),ne=n("a"),bt=n("span"),w(we.$$.fragment),on=d(),St=n("span"),nn=s("SwinConfig"),Zt=d(),I=n("div"),w(ve.$$.fragment),an=d(),V=n("p"),sn=s("This is the configuration class to store the configuration of a "),Ke=n("a"),rn=s("SwinModel"),ln=s(`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),be=n("a"),dn=s("microsoft/swin-tiny-patch4-window7-224"),cn=s(`
architecture.`),hn=d(),B=n("p"),pn=s("Configuration objects inherit from "),Re=n("a"),mn=s("PretrainedConfig"),fn=s(` and can be used to control the model outputs. Read the
documentation from `),Ye=n("a"),un=s("PretrainedConfig"),gn=s(" for more information."),_n=d(),w(Se.$$.fragment),Gt=d(),K=n("h2"),ae=n("a"),$t=n("span"),w($e.$$.fragment),wn=d(),Tt=n("span"),vn=s("SwinModel"),Jt=d(),P=n("div"),w(Te.$$.fragment),bn=d(),ye=n("p"),Sn=s(`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ke=n("a"),$n=s("torch.nn.Module"),Tn=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),yn=d(),F=n("div"),w(xe.$$.fragment),kn=d(),R=n("p"),xn=s("The "),Ze=n("a"),Mn=s("SwinModel"),En=s(" forward method, overrides the "),yt=n("code"),Fn=s("__call__"),jn=s(" special method."),Cn=d(),w(se.$$.fragment),In=d(),kt=n("p"),An=s("Example:"),Pn=d(),w(Me.$$.fragment),Qt=d(),Y=n("h2"),re=n("a"),xt=n("span"),w(Ee.$$.fragment),qn=d(),Mt=n("span"),zn=s("SwinForMaskedImageModeling"),Xt=d(),q=n("div"),w(Fe.$$.fragment),On=d(),Z=n("p"),Dn=s("Swin Model with a decoder on top for masked image modeling, as proposed in "),Et=n("code"),Nn=s("SimMIM <https://arxiv.org/abs/2111.09886>"),Ln=s(`__.
This model is a PyTorch `),je=n("a"),Hn=s("torch.nn.Module"),Wn=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Un=d(),j=n("div"),w(Ce.$$.fragment),Vn=d(),G=n("p"),Bn=s("The "),Ge=n("a"),Kn=s("SwinForMaskedImageModeling"),Rn=s(" forward method, overrides the "),Ft=n("code"),Yn=s("__call__"),Zn=s(" special method."),Gn=d(),w(ie.$$.fragment),Jn=d(),jt=n("p"),Qn=s("Examples:"),Xn=d(),w(Ie.$$.fragment),eo=d(),J=n("h2"),le=n("a"),Ct=n("span"),w(Ae.$$.fragment),ea=d(),It=n("span"),ta=s("SwinForImageClassification"),to=d(),A=n("div"),w(Pe.$$.fragment),oa=d(),At=n("p"),na=s(`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),aa=d(),qe=n("p"),sa=s("This model is a PyTorch "),ze=n("a"),ra=s("torch.nn.Module"),ia=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),la=d(),C=n("div"),w(Oe.$$.fragment),da=d(),Q=n("p"),ca=s("The "),Je=n("a"),ha=s("SwinForImageClassification"),pa=s(" forward method, overrides the "),Pt=n("code"),ma=s("__call__"),fa=s(" special method."),ua=d(),w(de.$$.fragment),ga=d(),qt=n("p"),_a=s("Example:"),wa=d(),w(De.$$.fragment),this.h()},l(t){const h=Ss('[data-svelte="svelte-1phssyn"]',document.head);m=a(h,"META",{name:!0,content:!0}),h.forEach(o),x=c(t),f=a(t,"H1",{class:!0});var Ne=i(f);_=a(Ne,"A",{id:!0,class:!0,href:!0});var zt=i(_);k=a(zt,"SPAN",{});var Ot=i(k);v(u.$$.fragment,Ot),Ot.forEach(o),zt.forEach(o),g=c(Ne),E=a(Ne,"SPAN",{});var Sa=i(E);uo=r(Sa,"Swin Transformer"),Sa.forEach(o),Ne.forEach(o),Nt=c(t),H=a(t,"H2",{class:!0});var no=i(H);ee=a(no,"A",{id:!0,class:!0,href:!0});var $a=i(ee);dt=a($a,"SPAN",{});var Ta=i(dt);v(pe.$$.fragment,Ta),Ta.forEach(o),$a.forEach(o),go=c(no),ct=a(no,"SPAN",{});var ya=i(ct);_o=r(ya,"Overview"),ya.forEach(o),no.forEach(o),Lt=c(t),W=a(t,"P",{});var Dt=i(W);wo=r(Dt,"The Swin Transformer was proposed in "),me=a(Dt,"A",{href:!0,rel:!0});var ka=i(me);vo=r(ka,"Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),ka.forEach(o),bo=a(Dt,"BR",{}),So=r(Dt,`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),Dt.forEach(o),Ht=c(t),He=a(t,"P",{});var xa=i(He);$o=r(xa,"The abstract from the paper is the following:"),xa.forEach(o),Wt=c(t),We=a(t,"P",{});var Ma=i(We);ht=a(Ma,"EM",{});var Ea=i(ht);To=r(Ea,`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
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
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),Ea.forEach(o),Ma.forEach(o),Ut=c(t),Ue=a(t,"P",{});var Fa=i(Ue);yo=r(Fa,"Tips:"),Fa.forEach(o),Vt=c(t),z=a(t,"UL",{});var Qe=i(z);fe=a(Qe,"LI",{});var ao=i(fe);ko=r(ao,"One can use the "),Ve=a(ao,"A",{href:!0});var ja=i(Ve);xo=r(ja,"AutoFeatureExtractor"),ja.forEach(o),Mo=r(ao," API to prepare images for the model."),ao.forEach(o),Eo=c(Qe),ue=a(Qe,"LI",{});var so=i(ue);Fo=r(so,"Swin pads the inputs supporting any input height and width (if divisible by "),pt=a(so,"CODE",{});var Ca=i(pt);jo=r(Ca,"32"),Ca.forEach(o),Co=r(so,")."),so.forEach(o),Io=c(Qe),y=a(Qe,"LI",{});var M=i(y);Ao=r(M,"Swin can be used as a "),mt=a(M,"EM",{});var Ia=i(mt);Po=r(Ia,"backbone"),Ia.forEach(o),qo=r(M,". When "),ft=a(M,"CODE",{});var Aa=i(ft);zo=r(Aa,"output_hidden_states = True"),Aa.forEach(o),Oo=r(M,", it will output both "),ut=a(M,"CODE",{});var Pa=i(ut);Do=r(Pa,"hidden_states"),Pa.forEach(o),No=r(M," and "),gt=a(M,"CODE",{});var qa=i(gt);Lo=r(qa,"reshaped_hidden_states"),qa.forEach(o),Ho=r(M,". The "),_t=a(M,"CODE",{});var za=i(_t);Wo=r(za,"reshaped_hidden_states"),za.forEach(o),Uo=r(M," have a shape of "),wt=a(M,"CODE",{});var Oa=i(wt);Vo=r(Oa,"(batch, num_channels, height, width)"),Oa.forEach(o),Bo=r(M," rather than "),vt=a(M,"CODE",{});var Da=i(vt);Ko=r(Da,"(batch_size, sequence_length, num_channels)"),Da.forEach(o),Ro=r(M,"."),M.forEach(o),Qe.forEach(o),Bt=c(t),te=a(t,"IMG",{src:!0,alt:!0,width:!0}),Kt=c(t),oe=a(t,"SMALL",{});var ro=i(oe);Yo=r(ro,"Swin Transformer architecture. Taken from the "),Be=a(ro,"A",{href:!0});var Na=i(Be);Zo=r(Na,"original paper"),Na.forEach(o),Go=r(ro,"."),ro.forEach(o),Rt=c(t),O=a(t,"P",{});var Xe=i(O);Jo=r(Xe,"This model was contributed by "),ge=a(Xe,"A",{href:!0,rel:!0});var La=i(ge);Qo=r(La,"novice03"),La.forEach(o),Xo=r(Xe,". The original code can be found "),_e=a(Xe,"A",{href:!0,rel:!0});var Ha=i(_e);en=r(Ha,"here"),Ha.forEach(o),tn=r(Xe,"."),Xe.forEach(o),Yt=c(t),U=a(t,"H2",{class:!0});var io=i(U);ne=a(io,"A",{id:!0,class:!0,href:!0});var Wa=i(ne);bt=a(Wa,"SPAN",{});var Ua=i(bt);v(we.$$.fragment,Ua),Ua.forEach(o),Wa.forEach(o),on=c(io),St=a(io,"SPAN",{});var Va=i(St);nn=r(Va,"SwinConfig"),Va.forEach(o),io.forEach(o),Zt=c(t),I=a(t,"DIV",{class:!0});var ce=i(I);v(ve.$$.fragment,ce),an=c(ce),V=a(ce,"P",{});var et=i(V);sn=r(et,"This is the configuration class to store the configuration of a "),Ke=a(et,"A",{href:!0});var Ba=i(Ke);rn=r(Ba,"SwinModel"),Ba.forEach(o),ln=r(et,`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),be=a(et,"A",{href:!0,rel:!0});var Ka=i(be);dn=r(Ka,"microsoft/swin-tiny-patch4-window7-224"),Ka.forEach(o),cn=r(et,`
architecture.`),et.forEach(o),hn=c(ce),B=a(ce,"P",{});var tt=i(B);pn=r(tt,"Configuration objects inherit from "),Re=a(tt,"A",{href:!0});var Ra=i(Re);mn=r(Ra,"PretrainedConfig"),Ra.forEach(o),fn=r(tt,` and can be used to control the model outputs. Read the
documentation from `),Ye=a(tt,"A",{href:!0});var Ya=i(Ye);un=r(Ya,"PretrainedConfig"),Ya.forEach(o),gn=r(tt," for more information."),tt.forEach(o),_n=c(ce),v(Se.$$.fragment,ce),ce.forEach(o),Gt=c(t),K=a(t,"H2",{class:!0});var lo=i(K);ae=a(lo,"A",{id:!0,class:!0,href:!0});var Za=i(ae);$t=a(Za,"SPAN",{});var Ga=i($t);v($e.$$.fragment,Ga),Ga.forEach(o),Za.forEach(o),wn=c(lo),Tt=a(lo,"SPAN",{});var Ja=i(Tt);vn=r(Ja,"SwinModel"),Ja.forEach(o),lo.forEach(o),Jt=c(t),P=a(t,"DIV",{class:!0});var ot=i(P);v(Te.$$.fragment,ot),bn=c(ot),ye=a(ot,"P",{});var co=i(ye);Sn=r(co,`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ke=a(co,"A",{href:!0,rel:!0});var Qa=i(ke);$n=r(Qa,"torch.nn.Module"),Qa.forEach(o),Tn=r(co,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),co.forEach(o),yn=c(ot),F=a(ot,"DIV",{class:!0});var D=i(F);v(xe.$$.fragment,D),kn=c(D),R=a(D,"P",{});var nt=i(R);xn=r(nt,"The "),Ze=a(nt,"A",{href:!0});var Xa=i(Ze);Mn=r(Xa,"SwinModel"),Xa.forEach(o),En=r(nt," forward method, overrides the "),yt=a(nt,"CODE",{});var es=i(yt);Fn=r(es,"__call__"),es.forEach(o),jn=r(nt," special method."),nt.forEach(o),Cn=c(D),v(se.$$.fragment,D),In=c(D),kt=a(D,"P",{});var ts=i(kt);An=r(ts,"Example:"),ts.forEach(o),Pn=c(D),v(Me.$$.fragment,D),D.forEach(o),ot.forEach(o),Qt=c(t),Y=a(t,"H2",{class:!0});var ho=i(Y);re=a(ho,"A",{id:!0,class:!0,href:!0});var os=i(re);xt=a(os,"SPAN",{});var ns=i(xt);v(Ee.$$.fragment,ns),ns.forEach(o),os.forEach(o),qn=c(ho),Mt=a(ho,"SPAN",{});var as=i(Mt);zn=r(as,"SwinForMaskedImageModeling"),as.forEach(o),ho.forEach(o),Xt=c(t),q=a(t,"DIV",{class:!0});var at=i(q);v(Fe.$$.fragment,at),On=c(at),Z=a(at,"P",{});var st=i(Z);Dn=r(st,"Swin Model with a decoder on top for masked image modeling, as proposed in "),Et=a(st,"CODE",{});var ss=i(Et);Nn=r(ss,"SimMIM <https://arxiv.org/abs/2111.09886>"),ss.forEach(o),Ln=r(st,`__.
This model is a PyTorch `),je=a(st,"A",{href:!0,rel:!0});var rs=i(je);Hn=r(rs,"torch.nn.Module"),rs.forEach(o),Wn=r(st,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),st.forEach(o),Un=c(at),j=a(at,"DIV",{class:!0});var N=i(j);v(Ce.$$.fragment,N),Vn=c(N),G=a(N,"P",{});var rt=i(G);Bn=r(rt,"The "),Ge=a(rt,"A",{href:!0});var is=i(Ge);Kn=r(is,"SwinForMaskedImageModeling"),is.forEach(o),Rn=r(rt," forward method, overrides the "),Ft=a(rt,"CODE",{});var ls=i(Ft);Yn=r(ls,"__call__"),ls.forEach(o),Zn=r(rt," special method."),rt.forEach(o),Gn=c(N),v(ie.$$.fragment,N),Jn=c(N),jt=a(N,"P",{});var ds=i(jt);Qn=r(ds,"Examples:"),ds.forEach(o),Xn=c(N),v(Ie.$$.fragment,N),N.forEach(o),at.forEach(o),eo=c(t),J=a(t,"H2",{class:!0});var po=i(J);le=a(po,"A",{id:!0,class:!0,href:!0});var cs=i(le);Ct=a(cs,"SPAN",{});var hs=i(Ct);v(Ae.$$.fragment,hs),hs.forEach(o),cs.forEach(o),ea=c(po),It=a(po,"SPAN",{});var ps=i(It);ta=r(ps,"SwinForImageClassification"),ps.forEach(o),po.forEach(o),to=c(t),A=a(t,"DIV",{class:!0});var he=i(A);v(Pe.$$.fragment,he),oa=c(he),At=a(he,"P",{});var ms=i(At);na=r(ms,`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),ms.forEach(o),aa=c(he),qe=a(he,"P",{});var mo=i(qe);sa=r(mo,"This model is a PyTorch "),ze=a(mo,"A",{href:!0,rel:!0});var fs=i(ze);ra=r(fs,"torch.nn.Module"),fs.forEach(o),ia=r(mo,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mo.forEach(o),la=c(he),C=a(he,"DIV",{class:!0});var L=i(C);v(Oe.$$.fragment,L),da=c(L),Q=a(L,"P",{});var it=i(Q);ca=r(it,"The "),Je=a(it,"A",{href:!0});var us=i(Je);ha=r(us,"SwinForImageClassification"),us.forEach(o),pa=r(it," forward method, overrides the "),Pt=a(it,"CODE",{});var gs=i(Pt);ma=r(gs,"__call__"),gs.forEach(o),fa=r(it," special method."),it.forEach(o),ua=c(L),v(de.$$.fragment,L),ga=c(L),qt=a(L,"P",{});var _s=i(qt);_a=r(_s,"Example:"),_s.forEach(o),wa=c(L),v(De.$$.fragment,L),L.forEach(o),he.forEach(o),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(Es)),l(_,"id","swin-transformer"),l(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(_,"href","#swin-transformer"),l(f,"class","relative group"),l(ee,"id","overview"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#overview"),l(H,"class","relative group"),l(me,"href","https://arxiv.org/abs/2103.14030"),l(me,"rel","nofollow"),l(Ve,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor"),$s(te.src,ba="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/swin_transformer_architecture.png")||l(te,"src",ba),l(te,"alt","drawing"),l(te,"width","600"),l(Be,"href","https://arxiv.org/abs/2102.03334"),l(ge,"href","https://huggingface.co/novice03%3E"),l(ge,"rel","nofollow"),l(_e,"href","https://github.com/microsoft/Swin-Transformer"),l(_e,"rel","nofollow"),l(ne,"id","transformers.SwinConfig"),l(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ne,"href","#transformers.SwinConfig"),l(U,"class","relative group"),l(Ke,"href","/docs/transformers/main/en/model_doc/swin#transformers.SwinModel"),l(be,"href","https://huggingface.co/microsoft/swin-tiny-patch4-window7-224"),l(be,"rel","nofollow"),l(Re,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(Ye,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(I,"class","docstring"),l(ae,"id","transformers.SwinModel"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.SwinModel"),l(K,"class","relative group"),l(ke,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ke,"rel","nofollow"),l(Ze,"href","/docs/transformers/main/en/model_doc/swin#transformers.SwinModel"),l(F,"class","docstring"),l(P,"class","docstring"),l(re,"id","transformers.SwinForMaskedImageModeling"),l(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(re,"href","#transformers.SwinForMaskedImageModeling"),l(Y,"class","relative group"),l(je,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(je,"rel","nofollow"),l(Ge,"href","/docs/transformers/main/en/model_doc/swin#transformers.SwinForMaskedImageModeling"),l(j,"class","docstring"),l(q,"class","docstring"),l(le,"id","transformers.SwinForImageClassification"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.SwinForImageClassification"),l(J,"class","relative group"),l(ze,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ze,"rel","nofollow"),l(Je,"href","/docs/transformers/main/en/model_doc/swin#transformers.SwinForImageClassification"),l(C,"class","docstring"),l(A,"class","docstring")},m(t,h){e(document.head,m),p(t,x,h),p(t,f,h),e(f,_),e(_,k),b(u,k,null),e(f,g),e(f,E),e(E,uo),p(t,Nt,h),p(t,H,h),e(H,ee),e(ee,dt),b(pe,dt,null),e(H,go),e(H,ct),e(ct,_o),p(t,Lt,h),p(t,W,h),e(W,wo),e(W,me),e(me,vo),e(W,bo),e(W,So),p(t,Ht,h),p(t,He,h),e(He,$o),p(t,Wt,h),p(t,We,h),e(We,ht),e(ht,To),p(t,Ut,h),p(t,Ue,h),e(Ue,yo),p(t,Vt,h),p(t,z,h),e(z,fe),e(fe,ko),e(fe,Ve),e(Ve,xo),e(fe,Mo),e(z,Eo),e(z,ue),e(ue,Fo),e(ue,pt),e(pt,jo),e(ue,Co),e(z,Io),e(z,y),e(y,Ao),e(y,mt),e(mt,Po),e(y,qo),e(y,ft),e(ft,zo),e(y,Oo),e(y,ut),e(ut,Do),e(y,No),e(y,gt),e(gt,Lo),e(y,Ho),e(y,_t),e(_t,Wo),e(y,Uo),e(y,wt),e(wt,Vo),e(y,Bo),e(y,vt),e(vt,Ko),e(y,Ro),p(t,Bt,h),p(t,te,h),p(t,Kt,h),p(t,oe,h),e(oe,Yo),e(oe,Be),e(Be,Zo),e(oe,Go),p(t,Rt,h),p(t,O,h),e(O,Jo),e(O,ge),e(ge,Qo),e(O,Xo),e(O,_e),e(_e,en),e(O,tn),p(t,Yt,h),p(t,U,h),e(U,ne),e(ne,bt),b(we,bt,null),e(U,on),e(U,St),e(St,nn),p(t,Zt,h),p(t,I,h),b(ve,I,null),e(I,an),e(I,V),e(V,sn),e(V,Ke),e(Ke,rn),e(V,ln),e(V,be),e(be,dn),e(V,cn),e(I,hn),e(I,B),e(B,pn),e(B,Re),e(Re,mn),e(B,fn),e(B,Ye),e(Ye,un),e(B,gn),e(I,_n),b(Se,I,null),p(t,Gt,h),p(t,K,h),e(K,ae),e(ae,$t),b($e,$t,null),e(K,wn),e(K,Tt),e(Tt,vn),p(t,Jt,h),p(t,P,h),b(Te,P,null),e(P,bn),e(P,ye),e(ye,Sn),e(ye,ke),e(ke,$n),e(ye,Tn),e(P,yn),e(P,F),b(xe,F,null),e(F,kn),e(F,R),e(R,xn),e(R,Ze),e(Ze,Mn),e(R,En),e(R,yt),e(yt,Fn),e(R,jn),e(F,Cn),b(se,F,null),e(F,In),e(F,kt),e(kt,An),e(F,Pn),b(Me,F,null),p(t,Qt,h),p(t,Y,h),e(Y,re),e(re,xt),b(Ee,xt,null),e(Y,qn),e(Y,Mt),e(Mt,zn),p(t,Xt,h),p(t,q,h),b(Fe,q,null),e(q,On),e(q,Z),e(Z,Dn),e(Z,Et),e(Et,Nn),e(Z,Ln),e(Z,je),e(je,Hn),e(Z,Wn),e(q,Un),e(q,j),b(Ce,j,null),e(j,Vn),e(j,G),e(G,Bn),e(G,Ge),e(Ge,Kn),e(G,Rn),e(G,Ft),e(Ft,Yn),e(G,Zn),e(j,Gn),b(ie,j,null),e(j,Jn),e(j,jt),e(jt,Qn),e(j,Xn),b(Ie,j,null),p(t,eo,h),p(t,J,h),e(J,le),e(le,Ct),b(Ae,Ct,null),e(J,ea),e(J,It),e(It,ta),p(t,to,h),p(t,A,h),b(Pe,A,null),e(A,oa),e(A,At),e(At,na),e(A,aa),e(A,qe),e(qe,sa),e(qe,ze),e(ze,ra),e(qe,ia),e(A,la),e(A,C),b(Oe,C,null),e(C,da),e(C,Q),e(Q,ca),e(Q,Je),e(Je,ha),e(Q,pa),e(Q,Pt),e(Pt,ma),e(Q,fa),e(C,ua),b(de,C,null),e(C,ga),e(C,qt),e(qt,_a),e(C,wa),b(De,C,null),oo=!0},p(t,[h]){const Ne={};h&2&&(Ne.$$scope={dirty:h,ctx:t}),se.$set(Ne);const zt={};h&2&&(zt.$$scope={dirty:h,ctx:t}),ie.$set(zt);const Ot={};h&2&&(Ot.$$scope={dirty:h,ctx:t}),de.$set(Ot)},i(t){oo||(S(u.$$.fragment,t),S(pe.$$.fragment,t),S(we.$$.fragment,t),S(ve.$$.fragment,t),S(Se.$$.fragment,t),S($e.$$.fragment,t),S(Te.$$.fragment,t),S(xe.$$.fragment,t),S(se.$$.fragment,t),S(Me.$$.fragment,t),S(Ee.$$.fragment,t),S(Fe.$$.fragment,t),S(Ce.$$.fragment,t),S(ie.$$.fragment,t),S(Ie.$$.fragment,t),S(Ae.$$.fragment,t),S(Pe.$$.fragment,t),S(Oe.$$.fragment,t),S(de.$$.fragment,t),S(De.$$.fragment,t),oo=!0)},o(t){$(u.$$.fragment,t),$(pe.$$.fragment,t),$(we.$$.fragment,t),$(ve.$$.fragment,t),$(Se.$$.fragment,t),$($e.$$.fragment,t),$(Te.$$.fragment,t),$(xe.$$.fragment,t),$(se.$$.fragment,t),$(Me.$$.fragment,t),$(Ee.$$.fragment,t),$(Fe.$$.fragment,t),$(Ce.$$.fragment,t),$(ie.$$.fragment,t),$(Ie.$$.fragment,t),$(Ae.$$.fragment,t),$(Pe.$$.fragment,t),$(Oe.$$.fragment,t),$(de.$$.fragment,t),$(De.$$.fragment,t),oo=!1},d(t){o(m),t&&o(x),t&&o(f),T(u),t&&o(Nt),t&&o(H),T(pe),t&&o(Lt),t&&o(W),t&&o(Ht),t&&o(He),t&&o(Wt),t&&o(We),t&&o(Ut),t&&o(Ue),t&&o(Vt),t&&o(z),t&&o(Bt),t&&o(te),t&&o(Kt),t&&o(oe),t&&o(Rt),t&&o(O),t&&o(Yt),t&&o(U),T(we),t&&o(Zt),t&&o(I),T(ve),T(Se),t&&o(Gt),t&&o(K),T($e),t&&o(Jt),t&&o(P),T(Te),T(xe),T(se),T(Me),t&&o(Qt),t&&o(Y),T(Ee),t&&o(Xt),t&&o(q),T(Fe),T(Ce),T(ie),T(Ie),t&&o(eo),t&&o(J),T(Ae),t&&o(to),t&&o(A),T(Pe),T(Oe),T(de),T(De)}}}const Es={local:"swin-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.SwinConfig",title:"SwinConfig"},{local:"transformers.SwinModel",title:"SwinModel"},{local:"transformers.SwinForMaskedImageModeling",title:"SwinForMaskedImageModeling"},{local:"transformers.SwinForImageClassification",title:"SwinForImageClassification"}],title:"Swin Transformer"};function Fs(X){return Ts(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qs extends ws{constructor(m){super();vs(this,m,Fs,Ms,bs,{})}}export{qs as default,Es as metadata};
