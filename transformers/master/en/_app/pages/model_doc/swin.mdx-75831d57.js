import{S as In,i as An,s as Pn,e as a,k as c,w,t as r,M as qn,c as n,d as o,m as h,a as s,x as v,h as i,b as l,N as zn,F as e,g as m,y as b,q as S,o as $,B as y}from"../../chunks/vendor-4833417e.js";import{T as Da}from"../../chunks/Tip-fffd6df1.js";import{D as ze}from"../../chunks/Docstring-4f315ed9.js";import{C as eo}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as nt}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Nn(O){let p,T,f,_,k;return{c(){p=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){p=n(u,"P",{});var g=s(p);T=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n(g,"CODE",{});var x=s(f);_=i(x,"Module"),x.forEach(o),k=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){m(u,p,g),e(p,T),e(p,f),e(f,_),e(p,k)},d(u){u&&o(p)}}}function On(O){let p,T,f,_,k;return{c(){p=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){p=n(u,"P",{});var g=s(p);T=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n(g,"CODE",{});var x=s(f);_=i(x,"Module"),x.forEach(o),k=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){m(u,p,g),e(p,T),e(p,f),e(f,_),e(p,k)},d(u){u&&o(p)}}}function Dn(O){let p,T,f,_,k;return{c(){p=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){p=n(u,"P",{});var g=s(p);T=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n(g,"CODE",{});var x=s(f);_=i(x,"Module"),x.forEach(o),k=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){m(u,p,g),e(p,T),e(p,f),e(f,_),e(p,k)},d(u){u&&o(p)}}}function Ln(O){let p,T,f,_,k,u,g,x,to,Mt,D,J,st,de,oo,rt,ao,Et,L,no,ce,so,ro,io,jt,Ne,lo,Ft,Oe,it,co,Ct,De,ho,It,Le,he,mo,We,po,fo,At,Q,La,Pt,X,uo,He,go,_o,qt,P,wo,me,vo,bo,pe,So,$o,zt,W,ee,lt,fe,yo,dt,To,Nt,F,ue,ko,H,xo,Ue,Mo,Eo,ge,jo,Fo,Co,U,Io,Be,Ao,Po,Ve,qo,zo,No,_e,Ot,B,te,ct,we,Oo,ht,Do,Dt,I,ve,Lo,be,Wo,Se,Ho,Uo,Bo,M,$e,Vo,V,Ko,Ke,Yo,Zo,mt,Ro,Go,Jo,oe,Qo,pt,Xo,ea,ye,Lt,K,ae,ft,Te,ta,ut,oa,Wt,A,ke,aa,Y,na,gt,sa,ra,xe,ia,la,da,E,Me,ca,Z,ha,Ye,ma,pa,_t,fa,ua,ga,ne,_a,wt,wa,va,Ee,Ht,R,se,vt,je,ba,bt,Sa,Ut,C,Fe,$a,St,ya,Ta,Ce,ka,Ie,xa,Ma,Ea,j,Ae,ja,G,Fa,Ze,Ca,Ia,$t,Aa,Pa,qa,re,za,yt,Na,Oa,Pe,Bt;return u=new nt({}),de=new nt({}),fe=new nt({}),ue=new ze({props:{name:"class transformers.SwinConfig",anchor:"transformers.SwinConfig",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 4"},{name:"num_channels",val:" = 3"},{name:"embed_dim",val:" = 96"},{name:"depths",val:" = [2, 2, 6, 2]"},{name:"num_heads",val:" = [3, 6, 12, 24]"},{name:"window_size",val:" = 7"},{name:"mlp_ratio",val:" = 4.0"},{name:"qkv_bias",val:" = True"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"drop_path_rate",val:" = 0.1"},{name:"hidden_act",val:" = 'gelu'"},{name:"use_absolute_embeddings",val:" = False"},{name:"patch_norm",val:" = True"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"encoder_stride",val:" = 32"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/swin/configuration_swin.py#L29",parametersDescription:[{anchor:"transformers.SwinConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
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
<p>Example &#x2014;`,name:"encoder_stride"}]}}),_e=new eo({props:{code:`from transformers import SwinModel, SwinConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),we=new nt({}),ve=new ze({props:{name:"class transformers.SwinModel",anchor:"transformers.SwinModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"},{name:"use_mask_token",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/swin/modeling_swin.py#L684",parametersDescription:[{anchor:"transformers.SwinModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$e=new ze({props:{name:"forward",anchor:"transformers.SwinModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/swin/modeling_swin.py#L711",parametersDescription:[{anchor:"transformers.SwinModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/master/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.SwinModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SwinModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SwinModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SwinModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),oe=new Da({props:{$$slots:{default:[Nn]},$$scope:{ctx:O}}}),ye=new eo({props:{code:`from transformers import AutoFeatureExtractor, SwinModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">49</span>, <span class="hljs-number">768</span>]`}}),Te=new nt({}),ke=new ze({props:{name:"class transformers.SwinForMaskedImageModeling",anchor:"transformers.SwinForMaskedImageModeling",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/swin/modeling_swin.py#L778",parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Me=new ze({props:{name:"forward",anchor:"transformers.SwinForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/swin/modeling_swin.py#L793",parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/master/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.SwinForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SwinForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SwinForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SwinForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SwinForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),ne=new Da({props:{$$slots:{default:[On]},$$scope:{ctx:O}}}),Ee=new eo({props:{code:`from transformers import AutoFeatureExtractor, SwinForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),je=new nt({}),Fe=new ze({props:{name:"class transformers.SwinForImageClassification",anchor:"transformers.SwinForImageClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/swin/modeling_swin.py#L887",parametersDescription:[{anchor:"transformers.SwinForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ae=new ze({props:{name:"forward",anchor:"transformers.SwinForImageClassification.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/swin/modeling_swin.py#L902",parametersDescription:[{anchor:"transformers.SwinForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/master/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.SwinForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SwinForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SwinForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SwinForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SwinForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),re=new Da({props:{$$slots:{default:[Dn]},$$scope:{ctx:O}}}),Pe=new eo({props:{code:`from transformers import AutoFeatureExtractor, SwinForImageClassification
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
<span class="hljs-string">&#x27;tabby, tabby cat&#x27;</span>`}}),{c(){p=a("meta"),T=c(),f=a("h1"),_=a("a"),k=a("span"),w(u.$$.fragment),g=c(),x=a("span"),to=r("Swin Transformer"),Mt=c(),D=a("h2"),J=a("a"),st=a("span"),w(de.$$.fragment),oo=c(),rt=a("span"),ao=r("Overview"),Et=c(),L=a("p"),no=r("The Swin Transformer was proposed in "),ce=a("a"),so=r("Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),ro=a("br"),io=r(`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),jt=c(),Ne=a("p"),lo=r("The abstract from the paper is the following:"),Ft=c(),Oe=a("p"),it=a("em"),co=r(`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
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
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),Ct=c(),De=a("p"),ho=r("Tips:"),It=c(),Le=a("ul"),he=a("li"),mo=r("One can use the "),We=a("a"),po=r("AutoFeatureExtractor"),fo=r(" API to prepare images for the model."),At=c(),Q=a("img"),Pt=c(),X=a("small"),uo=r("Swin Transformer architecture. Taken from the "),He=a("a"),go=r("original paper"),_o=r("."),qt=c(),P=a("p"),wo=r("This model was contributed by "),me=a("a"),vo=r("novice03"),bo=r(". The original code can be found "),pe=a("a"),So=r("here"),$o=r("."),zt=c(),W=a("h2"),ee=a("a"),lt=a("span"),w(fe.$$.fragment),yo=c(),dt=a("span"),To=r("SwinConfig"),Nt=c(),F=a("div"),w(ue.$$.fragment),ko=c(),H=a("p"),xo=r("This is the configuration class to store the configuration of a "),Ue=a("a"),Mo=r("SwinModel"),Eo=r(`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),ge=a("a"),jo=r("microsoft/swin-tiny-patch4-window7-224"),Fo=r(`
architecture.`),Co=c(),U=a("p"),Io=r("Configuration objects inherit from "),Be=a("a"),Ao=r("PretrainedConfig"),Po=r(` and can be used to control the model outputs. Read the
documentation from `),Ve=a("a"),qo=r("PretrainedConfig"),zo=r(" for more information."),No=c(),w(_e.$$.fragment),Ot=c(),B=a("h2"),te=a("a"),ct=a("span"),w(we.$$.fragment),Oo=c(),ht=a("span"),Do=r("SwinModel"),Dt=c(),I=a("div"),w(ve.$$.fragment),Lo=c(),be=a("p"),Wo=r(`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Se=a("a"),Ho=r("torch.nn.Module"),Uo=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Bo=c(),M=a("div"),w($e.$$.fragment),Vo=c(),V=a("p"),Ko=r("The "),Ke=a("a"),Yo=r("SwinModel"),Zo=r(" forward method, overrides the "),mt=a("code"),Ro=r("__call__"),Go=r(" special method."),Jo=c(),w(oe.$$.fragment),Qo=c(),pt=a("p"),Xo=r("Example:"),ea=c(),w(ye.$$.fragment),Lt=c(),K=a("h2"),ae=a("a"),ft=a("span"),w(Te.$$.fragment),ta=c(),ut=a("span"),oa=r("SwinForMaskedImageModeling"),Wt=c(),A=a("div"),w(ke.$$.fragment),aa=c(),Y=a("p"),na=r("Swin Model with a decoder on top for masked image modeling, as proposed in "),gt=a("code"),sa=r("SimMIM <https://arxiv.org/abs/2111.09886>"),ra=r(`__.
This model is a PyTorch `),xe=a("a"),ia=r("torch.nn.Module"),la=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),da=c(),E=a("div"),w(Me.$$.fragment),ca=c(),Z=a("p"),ha=r("The "),Ye=a("a"),ma=r("SwinForMaskedImageModeling"),pa=r(" forward method, overrides the "),_t=a("code"),fa=r("__call__"),ua=r(" special method."),ga=c(),w(ne.$$.fragment),_a=c(),wt=a("p"),wa=r("Examples:"),va=c(),w(Ee.$$.fragment),Ht=c(),R=a("h2"),se=a("a"),vt=a("span"),w(je.$$.fragment),ba=c(),bt=a("span"),Sa=r("SwinForImageClassification"),Ut=c(),C=a("div"),w(Fe.$$.fragment),$a=c(),St=a("p"),ya=r(`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Ta=c(),Ce=a("p"),ka=r("This model is a PyTorch "),Ie=a("a"),xa=r("torch.nn.Module"),Ma=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ea=c(),j=a("div"),w(Ae.$$.fragment),ja=c(),G=a("p"),Fa=r("The "),Ze=a("a"),Ca=r("SwinForImageClassification"),Ia=r(" forward method, overrides the "),$t=a("code"),Aa=r("__call__"),Pa=r(" special method."),qa=c(),w(re.$$.fragment),za=c(),yt=a("p"),Na=r("Example:"),Oa=c(),w(Pe.$$.fragment),this.h()},l(t){const d=qn('[data-svelte="svelte-1phssyn"]',document.head);p=n(d,"META",{name:!0,content:!0}),d.forEach(o),T=h(t),f=n(t,"H1",{class:!0});var qe=s(f);_=n(qe,"A",{id:!0,class:!0,href:!0});var Tt=s(_);k=n(Tt,"SPAN",{});var kt=s(k);v(u.$$.fragment,kt),kt.forEach(o),Tt.forEach(o),g=h(qe),x=n(qe,"SPAN",{});var Wa=s(x);to=i(Wa,"Swin Transformer"),Wa.forEach(o),qe.forEach(o),Mt=h(t),D=n(t,"H2",{class:!0});var Vt=s(D);J=n(Vt,"A",{id:!0,class:!0,href:!0});var Ha=s(J);st=n(Ha,"SPAN",{});var Ua=s(st);v(de.$$.fragment,Ua),Ua.forEach(o),Ha.forEach(o),oo=h(Vt),rt=n(Vt,"SPAN",{});var Ba=s(rt);ao=i(Ba,"Overview"),Ba.forEach(o),Vt.forEach(o),Et=h(t),L=n(t,"P",{});var xt=s(L);no=i(xt,"The Swin Transformer was proposed in "),ce=n(xt,"A",{href:!0,rel:!0});var Va=s(ce);so=i(Va,"Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),Va.forEach(o),ro=n(xt,"BR",{}),io=i(xt,`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),xt.forEach(o),jt=h(t),Ne=n(t,"P",{});var Ka=s(Ne);lo=i(Ka,"The abstract from the paper is the following:"),Ka.forEach(o),Ft=h(t),Oe=n(t,"P",{});var Ya=s(Oe);it=n(Ya,"EM",{});var Za=s(it);co=i(Za,`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
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
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),Za.forEach(o),Ya.forEach(o),Ct=h(t),De=n(t,"P",{});var Ra=s(De);ho=i(Ra,"Tips:"),Ra.forEach(o),It=h(t),Le=n(t,"UL",{});var Ga=s(Le);he=n(Ga,"LI",{});var Kt=s(he);mo=i(Kt,"One can use the "),We=n(Kt,"A",{href:!0});var Ja=s(We);po=i(Ja,"AutoFeatureExtractor"),Ja.forEach(o),fo=i(Kt," API to prepare images for the model."),Kt.forEach(o),Ga.forEach(o),At=h(t),Q=n(t,"IMG",{src:!0,alt:!0,width:!0}),Pt=h(t),X=n(t,"SMALL",{});var Yt=s(X);uo=i(Yt,"Swin Transformer architecture. Taken from the "),He=n(Yt,"A",{href:!0});var Qa=s(He);go=i(Qa,"original paper"),Qa.forEach(o),_o=i(Yt,"."),Yt.forEach(o),qt=h(t),P=n(t,"P",{});var Re=s(P);wo=i(Re,"This model was contributed by "),me=n(Re,"A",{href:!0,rel:!0});var Xa=s(me);vo=i(Xa,"novice03"),Xa.forEach(o),bo=i(Re,". The original code can be found "),pe=n(Re,"A",{href:!0,rel:!0});var en=s(pe);So=i(en,"here"),en.forEach(o),$o=i(Re,"."),Re.forEach(o),zt=h(t),W=n(t,"H2",{class:!0});var Zt=s(W);ee=n(Zt,"A",{id:!0,class:!0,href:!0});var tn=s(ee);lt=n(tn,"SPAN",{});var on=s(lt);v(fe.$$.fragment,on),on.forEach(o),tn.forEach(o),yo=h(Zt),dt=n(Zt,"SPAN",{});var an=s(dt);To=i(an,"SwinConfig"),an.forEach(o),Zt.forEach(o),Nt=h(t),F=n(t,"DIV",{class:!0});var ie=s(F);v(ue.$$.fragment,ie),ko=h(ie),H=n(ie,"P",{});var Ge=s(H);xo=i(Ge,"This is the configuration class to store the configuration of a "),Ue=n(Ge,"A",{href:!0});var nn=s(Ue);Mo=i(nn,"SwinModel"),nn.forEach(o),Eo=i(Ge,`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),ge=n(Ge,"A",{href:!0,rel:!0});var sn=s(ge);jo=i(sn,"microsoft/swin-tiny-patch4-window7-224"),sn.forEach(o),Fo=i(Ge,`
architecture.`),Ge.forEach(o),Co=h(ie),U=n(ie,"P",{});var Je=s(U);Io=i(Je,"Configuration objects inherit from "),Be=n(Je,"A",{href:!0});var rn=s(Be);Ao=i(rn,"PretrainedConfig"),rn.forEach(o),Po=i(Je,` and can be used to control the model outputs. Read the
documentation from `),Ve=n(Je,"A",{href:!0});var ln=s(Ve);qo=i(ln,"PretrainedConfig"),ln.forEach(o),zo=i(Je," for more information."),Je.forEach(o),No=h(ie),v(_e.$$.fragment,ie),ie.forEach(o),Ot=h(t),B=n(t,"H2",{class:!0});var Rt=s(B);te=n(Rt,"A",{id:!0,class:!0,href:!0});var dn=s(te);ct=n(dn,"SPAN",{});var cn=s(ct);v(we.$$.fragment,cn),cn.forEach(o),dn.forEach(o),Oo=h(Rt),ht=n(Rt,"SPAN",{});var hn=s(ht);Do=i(hn,"SwinModel"),hn.forEach(o),Rt.forEach(o),Dt=h(t),I=n(t,"DIV",{class:!0});var Qe=s(I);v(ve.$$.fragment,Qe),Lo=h(Qe),be=n(Qe,"P",{});var Gt=s(be);Wo=i(Gt,`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Se=n(Gt,"A",{href:!0,rel:!0});var mn=s(Se);Ho=i(mn,"torch.nn.Module"),mn.forEach(o),Uo=i(Gt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gt.forEach(o),Bo=h(Qe),M=n(Qe,"DIV",{class:!0});var q=s(M);v($e.$$.fragment,q),Vo=h(q),V=n(q,"P",{});var Xe=s(V);Ko=i(Xe,"The "),Ke=n(Xe,"A",{href:!0});var pn=s(Ke);Yo=i(pn,"SwinModel"),pn.forEach(o),Zo=i(Xe," forward method, overrides the "),mt=n(Xe,"CODE",{});var fn=s(mt);Ro=i(fn,"__call__"),fn.forEach(o),Go=i(Xe," special method."),Xe.forEach(o),Jo=h(q),v(oe.$$.fragment,q),Qo=h(q),pt=n(q,"P",{});var un=s(pt);Xo=i(un,"Example:"),un.forEach(o),ea=h(q),v(ye.$$.fragment,q),q.forEach(o),Qe.forEach(o),Lt=h(t),K=n(t,"H2",{class:!0});var Jt=s(K);ae=n(Jt,"A",{id:!0,class:!0,href:!0});var gn=s(ae);ft=n(gn,"SPAN",{});var _n=s(ft);v(Te.$$.fragment,_n),_n.forEach(o),gn.forEach(o),ta=h(Jt),ut=n(Jt,"SPAN",{});var wn=s(ut);oa=i(wn,"SwinForMaskedImageModeling"),wn.forEach(o),Jt.forEach(o),Wt=h(t),A=n(t,"DIV",{class:!0});var et=s(A);v(ke.$$.fragment,et),aa=h(et),Y=n(et,"P",{});var tt=s(Y);na=i(tt,"Swin Model with a decoder on top for masked image modeling, as proposed in "),gt=n(tt,"CODE",{});var vn=s(gt);sa=i(vn,"SimMIM <https://arxiv.org/abs/2111.09886>"),vn.forEach(o),ra=i(tt,`__.
This model is a PyTorch `),xe=n(tt,"A",{href:!0,rel:!0});var bn=s(xe);ia=i(bn,"torch.nn.Module"),bn.forEach(o),la=i(tt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),tt.forEach(o),da=h(et),E=n(et,"DIV",{class:!0});var z=s(E);v(Me.$$.fragment,z),ca=h(z),Z=n(z,"P",{});var ot=s(Z);ha=i(ot,"The "),Ye=n(ot,"A",{href:!0});var Sn=s(Ye);ma=i(Sn,"SwinForMaskedImageModeling"),Sn.forEach(o),pa=i(ot," forward method, overrides the "),_t=n(ot,"CODE",{});var $n=s(_t);fa=i($n,"__call__"),$n.forEach(o),ua=i(ot," special method."),ot.forEach(o),ga=h(z),v(ne.$$.fragment,z),_a=h(z),wt=n(z,"P",{});var yn=s(wt);wa=i(yn,"Examples:"),yn.forEach(o),va=h(z),v(Ee.$$.fragment,z),z.forEach(o),et.forEach(o),Ht=h(t),R=n(t,"H2",{class:!0});var Qt=s(R);se=n(Qt,"A",{id:!0,class:!0,href:!0});var Tn=s(se);vt=n(Tn,"SPAN",{});var kn=s(vt);v(je.$$.fragment,kn),kn.forEach(o),Tn.forEach(o),ba=h(Qt),bt=n(Qt,"SPAN",{});var xn=s(bt);Sa=i(xn,"SwinForImageClassification"),xn.forEach(o),Qt.forEach(o),Ut=h(t),C=n(t,"DIV",{class:!0});var le=s(C);v(Fe.$$.fragment,le),$a=h(le),St=n(le,"P",{});var Mn=s(St);ya=i(Mn,`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Mn.forEach(o),Ta=h(le),Ce=n(le,"P",{});var Xt=s(Ce);ka=i(Xt,"This model is a PyTorch "),Ie=n(Xt,"A",{href:!0,rel:!0});var En=s(Ie);xa=i(En,"torch.nn.Module"),En.forEach(o),Ma=i(Xt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xt.forEach(o),Ea=h(le),j=n(le,"DIV",{class:!0});var N=s(j);v(Ae.$$.fragment,N),ja=h(N),G=n(N,"P",{});var at=s(G);Fa=i(at,"The "),Ze=n(at,"A",{href:!0});var jn=s(Ze);Ca=i(jn,"SwinForImageClassification"),jn.forEach(o),Ia=i(at," forward method, overrides the "),$t=n(at,"CODE",{});var Fn=s($t);Aa=i(Fn,"__call__"),Fn.forEach(o),Pa=i(at," special method."),at.forEach(o),qa=h(N),v(re.$$.fragment,N),za=h(N),yt=n(N,"P",{});var Cn=s(yt);Na=i(Cn,"Example:"),Cn.forEach(o),Oa=h(N),v(Pe.$$.fragment,N),N.forEach(o),le.forEach(o),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(Wn)),l(_,"id","swin-transformer"),l(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(_,"href","#swin-transformer"),l(f,"class","relative group"),l(J,"id","overview"),l(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(J,"href","#overview"),l(D,"class","relative group"),l(ce,"href","https://arxiv.org/abs/2103.14030"),l(ce,"rel","nofollow"),l(We,"href","/docs/transformers/master/en/model_doc/auto#transformers.AutoFeatureExtractor"),zn(Q.src,La="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/swin_transformer_architecture.png")||l(Q,"src",La),l(Q,"alt","drawing"),l(Q,"width","600"),l(He,"href","https://arxiv.org/abs/2102.03334"),l(me,"href","https://huggingface.co/novice03%3E"),l(me,"rel","nofollow"),l(pe,"href","https://github.com/microsoft/Swin-Transformer"),l(pe,"rel","nofollow"),l(ee,"id","transformers.SwinConfig"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#transformers.SwinConfig"),l(W,"class","relative group"),l(Ue,"href","/docs/transformers/master/en/model_doc/swin#transformers.SwinModel"),l(ge,"href","https://huggingface.co/microsoft/swin-tiny-patch4-window7-224"),l(ge,"rel","nofollow"),l(Be,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(Ve,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(F,"class","docstring"),l(te,"id","transformers.SwinModel"),l(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(te,"href","#transformers.SwinModel"),l(B,"class","relative group"),l(Se,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Se,"rel","nofollow"),l(Ke,"href","/docs/transformers/master/en/model_doc/swin#transformers.SwinModel"),l(M,"class","docstring"),l(I,"class","docstring"),l(ae,"id","transformers.SwinForMaskedImageModeling"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.SwinForMaskedImageModeling"),l(K,"class","relative group"),l(xe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(xe,"rel","nofollow"),l(Ye,"href","/docs/transformers/master/en/model_doc/swin#transformers.SwinForMaskedImageModeling"),l(E,"class","docstring"),l(A,"class","docstring"),l(se,"id","transformers.SwinForImageClassification"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#transformers.SwinForImageClassification"),l(R,"class","relative group"),l(Ie,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ie,"rel","nofollow"),l(Ze,"href","/docs/transformers/master/en/model_doc/swin#transformers.SwinForImageClassification"),l(j,"class","docstring"),l(C,"class","docstring")},m(t,d){e(document.head,p),m(t,T,d),m(t,f,d),e(f,_),e(_,k),b(u,k,null),e(f,g),e(f,x),e(x,to),m(t,Mt,d),m(t,D,d),e(D,J),e(J,st),b(de,st,null),e(D,oo),e(D,rt),e(rt,ao),m(t,Et,d),m(t,L,d),e(L,no),e(L,ce),e(ce,so),e(L,ro),e(L,io),m(t,jt,d),m(t,Ne,d),e(Ne,lo),m(t,Ft,d),m(t,Oe,d),e(Oe,it),e(it,co),m(t,Ct,d),m(t,De,d),e(De,ho),m(t,It,d),m(t,Le,d),e(Le,he),e(he,mo),e(he,We),e(We,po),e(he,fo),m(t,At,d),m(t,Q,d),m(t,Pt,d),m(t,X,d),e(X,uo),e(X,He),e(He,go),e(X,_o),m(t,qt,d),m(t,P,d),e(P,wo),e(P,me),e(me,vo),e(P,bo),e(P,pe),e(pe,So),e(P,$o),m(t,zt,d),m(t,W,d),e(W,ee),e(ee,lt),b(fe,lt,null),e(W,yo),e(W,dt),e(dt,To),m(t,Nt,d),m(t,F,d),b(ue,F,null),e(F,ko),e(F,H),e(H,xo),e(H,Ue),e(Ue,Mo),e(H,Eo),e(H,ge),e(ge,jo),e(H,Fo),e(F,Co),e(F,U),e(U,Io),e(U,Be),e(Be,Ao),e(U,Po),e(U,Ve),e(Ve,qo),e(U,zo),e(F,No),b(_e,F,null),m(t,Ot,d),m(t,B,d),e(B,te),e(te,ct),b(we,ct,null),e(B,Oo),e(B,ht),e(ht,Do),m(t,Dt,d),m(t,I,d),b(ve,I,null),e(I,Lo),e(I,be),e(be,Wo),e(be,Se),e(Se,Ho),e(be,Uo),e(I,Bo),e(I,M),b($e,M,null),e(M,Vo),e(M,V),e(V,Ko),e(V,Ke),e(Ke,Yo),e(V,Zo),e(V,mt),e(mt,Ro),e(V,Go),e(M,Jo),b(oe,M,null),e(M,Qo),e(M,pt),e(pt,Xo),e(M,ea),b(ye,M,null),m(t,Lt,d),m(t,K,d),e(K,ae),e(ae,ft),b(Te,ft,null),e(K,ta),e(K,ut),e(ut,oa),m(t,Wt,d),m(t,A,d),b(ke,A,null),e(A,aa),e(A,Y),e(Y,na),e(Y,gt),e(gt,sa),e(Y,ra),e(Y,xe),e(xe,ia),e(Y,la),e(A,da),e(A,E),b(Me,E,null),e(E,ca),e(E,Z),e(Z,ha),e(Z,Ye),e(Ye,ma),e(Z,pa),e(Z,_t),e(_t,fa),e(Z,ua),e(E,ga),b(ne,E,null),e(E,_a),e(E,wt),e(wt,wa),e(E,va),b(Ee,E,null),m(t,Ht,d),m(t,R,d),e(R,se),e(se,vt),b(je,vt,null),e(R,ba),e(R,bt),e(bt,Sa),m(t,Ut,d),m(t,C,d),b(Fe,C,null),e(C,$a),e(C,St),e(St,ya),e(C,Ta),e(C,Ce),e(Ce,ka),e(Ce,Ie),e(Ie,xa),e(Ce,Ma),e(C,Ea),e(C,j),b(Ae,j,null),e(j,ja),e(j,G),e(G,Fa),e(G,Ze),e(Ze,Ca),e(G,Ia),e(G,$t),e($t,Aa),e(G,Pa),e(j,qa),b(re,j,null),e(j,za),e(j,yt),e(yt,Na),e(j,Oa),b(Pe,j,null),Bt=!0},p(t,[d]){const qe={};d&2&&(qe.$$scope={dirty:d,ctx:t}),oe.$set(qe);const Tt={};d&2&&(Tt.$$scope={dirty:d,ctx:t}),ne.$set(Tt);const kt={};d&2&&(kt.$$scope={dirty:d,ctx:t}),re.$set(kt)},i(t){Bt||(S(u.$$.fragment,t),S(de.$$.fragment,t),S(fe.$$.fragment,t),S(ue.$$.fragment,t),S(_e.$$.fragment,t),S(we.$$.fragment,t),S(ve.$$.fragment,t),S($e.$$.fragment,t),S(oe.$$.fragment,t),S(ye.$$.fragment,t),S(Te.$$.fragment,t),S(ke.$$.fragment,t),S(Me.$$.fragment,t),S(ne.$$.fragment,t),S(Ee.$$.fragment,t),S(je.$$.fragment,t),S(Fe.$$.fragment,t),S(Ae.$$.fragment,t),S(re.$$.fragment,t),S(Pe.$$.fragment,t),Bt=!0)},o(t){$(u.$$.fragment,t),$(de.$$.fragment,t),$(fe.$$.fragment,t),$(ue.$$.fragment,t),$(_e.$$.fragment,t),$(we.$$.fragment,t),$(ve.$$.fragment,t),$($e.$$.fragment,t),$(oe.$$.fragment,t),$(ye.$$.fragment,t),$(Te.$$.fragment,t),$(ke.$$.fragment,t),$(Me.$$.fragment,t),$(ne.$$.fragment,t),$(Ee.$$.fragment,t),$(je.$$.fragment,t),$(Fe.$$.fragment,t),$(Ae.$$.fragment,t),$(re.$$.fragment,t),$(Pe.$$.fragment,t),Bt=!1},d(t){o(p),t&&o(T),t&&o(f),y(u),t&&o(Mt),t&&o(D),y(de),t&&o(Et),t&&o(L),t&&o(jt),t&&o(Ne),t&&o(Ft),t&&o(Oe),t&&o(Ct),t&&o(De),t&&o(It),t&&o(Le),t&&o(At),t&&o(Q),t&&o(Pt),t&&o(X),t&&o(qt),t&&o(P),t&&o(zt),t&&o(W),y(fe),t&&o(Nt),t&&o(F),y(ue),y(_e),t&&o(Ot),t&&o(B),y(we),t&&o(Dt),t&&o(I),y(ve),y($e),y(oe),y(ye),t&&o(Lt),t&&o(K),y(Te),t&&o(Wt),t&&o(A),y(ke),y(Me),y(ne),y(Ee),t&&o(Ht),t&&o(R),y(je),t&&o(Ut),t&&o(C),y(Fe),y(Ae),y(re),y(Pe)}}}const Wn={local:"swin-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.SwinConfig",title:"SwinConfig"},{local:"transformers.SwinModel",title:"SwinModel"},{local:"transformers.SwinForMaskedImageModeling",title:"SwinForMaskedImageModeling"},{local:"transformers.SwinForImageClassification",title:"SwinForImageClassification"}],title:"Swin Transformer"};function Hn(O,p,T){let{fw:f}=p;return O.$$set=_=>{"fw"in _&&T(0,f=_.fw)},[f]}class Rn extends In{constructor(p){super();An(this,p,Hn,Ln,Pn,{fw:0})}}export{Rn as default,Wn as metadata};
