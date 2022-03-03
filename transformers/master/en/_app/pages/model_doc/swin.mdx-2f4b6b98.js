import{S as Ia,i as Aa,s as Pa,e as n,k as c,w,t as r,M as qa,c as a,d as o,m as h,a as s,x as v,h as i,b as l,N as za,F as e,g as m,y as b,q as S,o as $,B as y}from"../../chunks/vendor-4833417e.js";import{T as Ln}from"../../chunks/Tip-fffd6df1.js";import{D as ze}from"../../chunks/Docstring-7b52c3d4.js";import{C as eo}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as at}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Na(O){let f,T,p,_,k;return{c(){f=n("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),_=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){f=a(u,"P",{});var g=s(f);T=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(g,"CODE",{});var M=s(p);_=i(M,"Module"),M.forEach(o),k=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){m(u,f,g),e(f,T),e(f,p),e(p,_),e(f,k)},d(u){u&&o(f)}}}function Oa(O){let f,T,p,_,k;return{c(){f=n("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),_=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){f=a(u,"P",{});var g=s(f);T=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(g,"CODE",{});var M=s(p);_=i(M,"Module"),M.forEach(o),k=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){m(u,f,g),e(f,T),e(f,p),e(p,_),e(f,k)},d(u){u&&o(f)}}}function Da(O){let f,T,p,_,k;return{c(){f=n("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),_=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){f=a(u,"P",{});var g=s(f);T=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(g,"CODE",{});var M=s(p);_=i(M,"Module"),M.forEach(o),k=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(u,g){m(u,f,g),e(f,T),e(f,p),e(p,_),e(f,k)},d(u){u&&o(f)}}}function La(O){let f,T,p,_,k,u,g,M,to,xt,D,J,st,de,oo,rt,no,Et,L,ao,ce,so,ro,io,Ft,Ne,lo,Ct,Oe,it,co,jt,De,ho,It,Le,he,mo,We,fo,po,At,Q,Wn,Pt,X,uo,He,go,_o,qt,P,wo,me,vo,bo,fe,So,$o,zt,W,ee,lt,pe,yo,dt,To,Nt,C,ue,ko,H,Mo,Ue,xo,Eo,ge,Fo,Co,jo,U,Io,Be,Ao,Po,Ve,qo,zo,No,_e,Ot,B,te,ct,we,Oo,ht,Do,Dt,I,ve,Lo,be,Wo,Se,Ho,Uo,Bo,x,$e,Vo,V,Ko,Ke,Yo,Zo,mt,Ro,Go,Jo,oe,Qo,ft,Xo,en,ye,Lt,K,ne,pt,Te,tn,ut,on,Wt,A,ke,nn,Y,an,gt,sn,rn,Me,ln,dn,cn,E,xe,hn,Z,mn,Ye,fn,pn,_t,un,gn,_n,ae,wn,wt,vn,bn,Ee,Ht,R,se,vt,Fe,Sn,bt,$n,Ut,j,Ce,yn,St,Tn,kn,je,Mn,Ie,xn,En,Fn,F,Ae,Cn,G,jn,Ze,In,An,$t,Pn,qn,zn,re,Nn,yt,On,Dn,Pe,Bt;return u=new at({}),de=new at({}),pe=new at({}),ue=new ze({props:{name:"class transformers.SwinConfig",anchor:"transformers.SwinConfig",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 4"},{name:"num_channels",val:" = 3"},{name:"embed_dim",val:" = 96"},{name:"depths",val:" = [2, 2, 6, 2]"},{name:"num_heads",val:" = [3, 6, 12, 24]"},{name:"window_size",val:" = 7"},{name:"mlp_ratio",val:" = 4.0"},{name:"qkv_bias",val:" = True"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"drop_path_rate",val:" = 0.1"},{name:"hidden_act",val:" = 'gelu'"},{name:"use_absolute_embeddings",val:" = False"},{name:"patch_norm",val:" = True"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"encoder_stride",val:" = 32"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/swin/configuration_swin.py#L29",parametersDescription:[{anchor:"transformers.SwinConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),we=new at({}),ve=new ze({props:{name:"class transformers.SwinModel",anchor:"transformers.SwinModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"},{name:"use_mask_token",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/swin/modeling_swin.py#L684",parametersDescription:[{anchor:"transformers.SwinModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
`}}),oe=new Ln({props:{$$slots:{default:[Na]},$$scope:{ctx:O}}}),ye=new eo({props:{code:`from transformers import AutoFeatureExtractor, SwinModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">49</span>, <span class="hljs-number">768</span>]`}}),Te=new at({}),ke=new ze({props:{name:"class transformers.SwinForMaskedImageModeling",anchor:"transformers.SwinForMaskedImageModeling",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/swin/modeling_swin.py#L778",parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),xe=new ze({props:{name:"forward",anchor:"transformers.SwinForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/swin/modeling_swin.py#L793",parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),ae=new Ln({props:{$$slots:{default:[Oa]},$$scope:{ctx:O}}}),Ee=new eo({props:{code:`from transformers import AutoFeatureExtractor, SwinForMaskedImageModeling
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swin-tiny-patch4-window7-224")
model = SwinForMaskedImageModeling.from_pretrained("microsoft/swin-tiny-patch4-window7-224")

inputs = feature_extractor(images=image, return_tensors="pt")

outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, SwinForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SwinForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Fe=new at({}),Ce=new ze({props:{name:"class transformers.SwinForImageClassification",anchor:"transformers.SwinForImageClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/swin/modeling_swin.py#L881",parametersDescription:[{anchor:"transformers.SwinForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ae=new ze({props:{name:"forward",anchor:"transformers.SwinForImageClassification.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/swin/modeling_swin.py#L896",parametersDescription:[{anchor:"transformers.SwinForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),re=new Ln({props:{$$slots:{default:[Da]},$$scope:{ctx:O}}}),Pe=new eo({props:{code:`from transformers import AutoFeatureExtractor, SwinForImageClassification
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
<span class="hljs-string">&#x27;tabby, tabby cat&#x27;</span>`}}),{c(){f=n("meta"),T=c(),p=n("h1"),_=n("a"),k=n("span"),w(u.$$.fragment),g=c(),M=n("span"),to=r("Swin Transformer"),xt=c(),D=n("h2"),J=n("a"),st=n("span"),w(de.$$.fragment),oo=c(),rt=n("span"),no=r("Overview"),Et=c(),L=n("p"),ao=r("The Swin Transformer was proposed in "),ce=n("a"),so=r("Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),ro=n("br"),io=r(`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),Ft=c(),Ne=n("p"),lo=r("The abstract from the paper is the following:"),Ct=c(),Oe=n("p"),it=n("em"),co=r(`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
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
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),jt=c(),De=n("p"),ho=r("Tips:"),It=c(),Le=n("ul"),he=n("li"),mo=r("One can use the "),We=n("a"),fo=r("AutoFeatureExtractor"),po=r(" API to prepare images for the model."),At=c(),Q=n("img"),Pt=c(),X=n("small"),uo=r("Swin Transformer architecture. Taken from the "),He=n("a"),go=r("original paper"),_o=r("."),qt=c(),P=n("p"),wo=r("This model was contributed by "),me=n("a"),vo=r("novice03"),bo=r(". The original code can be found "),fe=n("a"),So=r("here"),$o=r("."),zt=c(),W=n("h2"),ee=n("a"),lt=n("span"),w(pe.$$.fragment),yo=c(),dt=n("span"),To=r("SwinConfig"),Nt=c(),C=n("div"),w(ue.$$.fragment),ko=c(),H=n("p"),Mo=r("This is the configuration class to store the configuration of a "),Ue=n("a"),xo=r("SwinModel"),Eo=r(`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),ge=n("a"),Fo=r("microsoft/swin-tiny-patch4-window7-224"),Co=r(`
architecture.`),jo=c(),U=n("p"),Io=r("Configuration objects inherit from "),Be=n("a"),Ao=r("PretrainedConfig"),Po=r(` and can be used to control the model outputs. Read the
documentation from `),Ve=n("a"),qo=r("PretrainedConfig"),zo=r(" for more information."),No=c(),w(_e.$$.fragment),Ot=c(),B=n("h2"),te=n("a"),ct=n("span"),w(we.$$.fragment),Oo=c(),ht=n("span"),Do=r("SwinModel"),Dt=c(),I=n("div"),w(ve.$$.fragment),Lo=c(),be=n("p"),Wo=r(`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Se=n("a"),Ho=r("torch.nn.Module"),Uo=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Bo=c(),x=n("div"),w($e.$$.fragment),Vo=c(),V=n("p"),Ko=r("The "),Ke=n("a"),Yo=r("SwinModel"),Zo=r(" forward method, overrides the "),mt=n("code"),Ro=r("__call__"),Go=r(" special method."),Jo=c(),w(oe.$$.fragment),Qo=c(),ft=n("p"),Xo=r("Example:"),en=c(),w(ye.$$.fragment),Lt=c(),K=n("h2"),ne=n("a"),pt=n("span"),w(Te.$$.fragment),tn=c(),ut=n("span"),on=r("SwinForMaskedImageModeling"),Wt=c(),A=n("div"),w(ke.$$.fragment),nn=c(),Y=n("p"),an=r("Swin Model with a decoder on top for masked image modeling, as proposed in "),gt=n("code"),sn=r("SimMIM <https://arxiv.org/abs/2111.09886>"),rn=r(`__.
This model is a PyTorch `),Me=n("a"),ln=r("torch.nn.Module"),dn=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cn=c(),E=n("div"),w(xe.$$.fragment),hn=c(),Z=n("p"),mn=r("The "),Ye=n("a"),fn=r("SwinForMaskedImageModeling"),pn=r(" forward method, overrides the "),_t=n("code"),un=r("__call__"),gn=r(" special method."),_n=c(),w(ae.$$.fragment),wn=c(),wt=n("p"),vn=r("Examples:"),bn=c(),w(Ee.$$.fragment),Ht=c(),R=n("h2"),se=n("a"),vt=n("span"),w(Fe.$$.fragment),Sn=c(),bt=n("span"),$n=r("SwinForImageClassification"),Ut=c(),j=n("div"),w(Ce.$$.fragment),yn=c(),St=n("p"),Tn=r(`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),kn=c(),je=n("p"),Mn=r("This model is a PyTorch "),Ie=n("a"),xn=r("torch.nn.Module"),En=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fn=c(),F=n("div"),w(Ae.$$.fragment),Cn=c(),G=n("p"),jn=r("The "),Ze=n("a"),In=r("SwinForImageClassification"),An=r(" forward method, overrides the "),$t=n("code"),Pn=r("__call__"),qn=r(" special method."),zn=c(),w(re.$$.fragment),Nn=c(),yt=n("p"),On=r("Example:"),Dn=c(),w(Pe.$$.fragment),this.h()},l(t){const d=qa('[data-svelte="svelte-1phssyn"]',document.head);f=a(d,"META",{name:!0,content:!0}),d.forEach(o),T=h(t),p=a(t,"H1",{class:!0});var qe=s(p);_=a(qe,"A",{id:!0,class:!0,href:!0});var Tt=s(_);k=a(Tt,"SPAN",{});var kt=s(k);v(u.$$.fragment,kt),kt.forEach(o),Tt.forEach(o),g=h(qe),M=a(qe,"SPAN",{});var Hn=s(M);to=i(Hn,"Swin Transformer"),Hn.forEach(o),qe.forEach(o),xt=h(t),D=a(t,"H2",{class:!0});var Vt=s(D);J=a(Vt,"A",{id:!0,class:!0,href:!0});var Un=s(J);st=a(Un,"SPAN",{});var Bn=s(st);v(de.$$.fragment,Bn),Bn.forEach(o),Un.forEach(o),oo=h(Vt),rt=a(Vt,"SPAN",{});var Vn=s(rt);no=i(Vn,"Overview"),Vn.forEach(o),Vt.forEach(o),Et=h(t),L=a(t,"P",{});var Mt=s(L);ao=i(Mt,"The Swin Transformer was proposed in "),ce=a(Mt,"A",{href:!0,rel:!0});var Kn=s(ce);so=i(Kn,"Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),Kn.forEach(o),ro=a(Mt,"BR",{}),io=i(Mt,`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),Mt.forEach(o),Ft=h(t),Ne=a(t,"P",{});var Yn=s(Ne);lo=i(Yn,"The abstract from the paper is the following:"),Yn.forEach(o),Ct=h(t),Oe=a(t,"P",{});var Zn=s(Oe);it=a(Zn,"EM",{});var Rn=s(it);co=i(Rn,`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
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
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),Rn.forEach(o),Zn.forEach(o),jt=h(t),De=a(t,"P",{});var Gn=s(De);ho=i(Gn,"Tips:"),Gn.forEach(o),It=h(t),Le=a(t,"UL",{});var Jn=s(Le);he=a(Jn,"LI",{});var Kt=s(he);mo=i(Kt,"One can use the "),We=a(Kt,"A",{href:!0});var Qn=s(We);fo=i(Qn,"AutoFeatureExtractor"),Qn.forEach(o),po=i(Kt," API to prepare images for the model."),Kt.forEach(o),Jn.forEach(o),At=h(t),Q=a(t,"IMG",{src:!0,alt:!0,width:!0}),Pt=h(t),X=a(t,"SMALL",{});var Yt=s(X);uo=i(Yt,"Swin Transformer architecture. Taken from the "),He=a(Yt,"A",{href:!0});var Xn=s(He);go=i(Xn,"original paper"),Xn.forEach(o),_o=i(Yt,"."),Yt.forEach(o),qt=h(t),P=a(t,"P",{});var Re=s(P);wo=i(Re,"This model was contributed by "),me=a(Re,"A",{href:!0,rel:!0});var ea=s(me);vo=i(ea,"novice03"),ea.forEach(o),bo=i(Re,". The original code can be found "),fe=a(Re,"A",{href:!0,rel:!0});var ta=s(fe);So=i(ta,"here"),ta.forEach(o),$o=i(Re,"."),Re.forEach(o),zt=h(t),W=a(t,"H2",{class:!0});var Zt=s(W);ee=a(Zt,"A",{id:!0,class:!0,href:!0});var oa=s(ee);lt=a(oa,"SPAN",{});var na=s(lt);v(pe.$$.fragment,na),na.forEach(o),oa.forEach(o),yo=h(Zt),dt=a(Zt,"SPAN",{});var aa=s(dt);To=i(aa,"SwinConfig"),aa.forEach(o),Zt.forEach(o),Nt=h(t),C=a(t,"DIV",{class:!0});var ie=s(C);v(ue.$$.fragment,ie),ko=h(ie),H=a(ie,"P",{});var Ge=s(H);Mo=i(Ge,"This is the configuration class to store the configuration of a "),Ue=a(Ge,"A",{href:!0});var sa=s(Ue);xo=i(sa,"SwinModel"),sa.forEach(o),Eo=i(Ge,`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),ge=a(Ge,"A",{href:!0,rel:!0});var ra=s(ge);Fo=i(ra,"microsoft/swin-tiny-patch4-window7-224"),ra.forEach(o),Co=i(Ge,`
architecture.`),Ge.forEach(o),jo=h(ie),U=a(ie,"P",{});var Je=s(U);Io=i(Je,"Configuration objects inherit from "),Be=a(Je,"A",{href:!0});var ia=s(Be);Ao=i(ia,"PretrainedConfig"),ia.forEach(o),Po=i(Je,` and can be used to control the model outputs. Read the
documentation from `),Ve=a(Je,"A",{href:!0});var la=s(Ve);qo=i(la,"PretrainedConfig"),la.forEach(o),zo=i(Je," for more information."),Je.forEach(o),No=h(ie),v(_e.$$.fragment,ie),ie.forEach(o),Ot=h(t),B=a(t,"H2",{class:!0});var Rt=s(B);te=a(Rt,"A",{id:!0,class:!0,href:!0});var da=s(te);ct=a(da,"SPAN",{});var ca=s(ct);v(we.$$.fragment,ca),ca.forEach(o),da.forEach(o),Oo=h(Rt),ht=a(Rt,"SPAN",{});var ha=s(ht);Do=i(ha,"SwinModel"),ha.forEach(o),Rt.forEach(o),Dt=h(t),I=a(t,"DIV",{class:!0});var Qe=s(I);v(ve.$$.fragment,Qe),Lo=h(Qe),be=a(Qe,"P",{});var Gt=s(be);Wo=i(Gt,`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Se=a(Gt,"A",{href:!0,rel:!0});var ma=s(Se);Ho=i(ma,"torch.nn.Module"),ma.forEach(o),Uo=i(Gt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gt.forEach(o),Bo=h(Qe),x=a(Qe,"DIV",{class:!0});var q=s(x);v($e.$$.fragment,q),Vo=h(q),V=a(q,"P",{});var Xe=s(V);Ko=i(Xe,"The "),Ke=a(Xe,"A",{href:!0});var fa=s(Ke);Yo=i(fa,"SwinModel"),fa.forEach(o),Zo=i(Xe," forward method, overrides the "),mt=a(Xe,"CODE",{});var pa=s(mt);Ro=i(pa,"__call__"),pa.forEach(o),Go=i(Xe," special method."),Xe.forEach(o),Jo=h(q),v(oe.$$.fragment,q),Qo=h(q),ft=a(q,"P",{});var ua=s(ft);Xo=i(ua,"Example:"),ua.forEach(o),en=h(q),v(ye.$$.fragment,q),q.forEach(o),Qe.forEach(o),Lt=h(t),K=a(t,"H2",{class:!0});var Jt=s(K);ne=a(Jt,"A",{id:!0,class:!0,href:!0});var ga=s(ne);pt=a(ga,"SPAN",{});var _a=s(pt);v(Te.$$.fragment,_a),_a.forEach(o),ga.forEach(o),tn=h(Jt),ut=a(Jt,"SPAN",{});var wa=s(ut);on=i(wa,"SwinForMaskedImageModeling"),wa.forEach(o),Jt.forEach(o),Wt=h(t),A=a(t,"DIV",{class:!0});var et=s(A);v(ke.$$.fragment,et),nn=h(et),Y=a(et,"P",{});var tt=s(Y);an=i(tt,"Swin Model with a decoder on top for masked image modeling, as proposed in "),gt=a(tt,"CODE",{});var va=s(gt);sn=i(va,"SimMIM <https://arxiv.org/abs/2111.09886>"),va.forEach(o),rn=i(tt,`__.
This model is a PyTorch `),Me=a(tt,"A",{href:!0,rel:!0});var ba=s(Me);ln=i(ba,"torch.nn.Module"),ba.forEach(o),dn=i(tt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),tt.forEach(o),cn=h(et),E=a(et,"DIV",{class:!0});var z=s(E);v(xe.$$.fragment,z),hn=h(z),Z=a(z,"P",{});var ot=s(Z);mn=i(ot,"The "),Ye=a(ot,"A",{href:!0});var Sa=s(Ye);fn=i(Sa,"SwinForMaskedImageModeling"),Sa.forEach(o),pn=i(ot," forward method, overrides the "),_t=a(ot,"CODE",{});var $a=s(_t);un=i($a,"__call__"),$a.forEach(o),gn=i(ot," special method."),ot.forEach(o),_n=h(z),v(ae.$$.fragment,z),wn=h(z),wt=a(z,"P",{});var ya=s(wt);vn=i(ya,"Examples:"),ya.forEach(o),bn=h(z),v(Ee.$$.fragment,z),z.forEach(o),et.forEach(o),Ht=h(t),R=a(t,"H2",{class:!0});var Qt=s(R);se=a(Qt,"A",{id:!0,class:!0,href:!0});var Ta=s(se);vt=a(Ta,"SPAN",{});var ka=s(vt);v(Fe.$$.fragment,ka),ka.forEach(o),Ta.forEach(o),Sn=h(Qt),bt=a(Qt,"SPAN",{});var Ma=s(bt);$n=i(Ma,"SwinForImageClassification"),Ma.forEach(o),Qt.forEach(o),Ut=h(t),j=a(t,"DIV",{class:!0});var le=s(j);v(Ce.$$.fragment,le),yn=h(le),St=a(le,"P",{});var xa=s(St);Tn=i(xa,`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),xa.forEach(o),kn=h(le),je=a(le,"P",{});var Xt=s(je);Mn=i(Xt,"This model is a PyTorch "),Ie=a(Xt,"A",{href:!0,rel:!0});var Ea=s(Ie);xn=i(Ea,"torch.nn.Module"),Ea.forEach(o),En=i(Xt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xt.forEach(o),Fn=h(le),F=a(le,"DIV",{class:!0});var N=s(F);v(Ae.$$.fragment,N),Cn=h(N),G=a(N,"P",{});var nt=s(G);jn=i(nt,"The "),Ze=a(nt,"A",{href:!0});var Fa=s(Ze);In=i(Fa,"SwinForImageClassification"),Fa.forEach(o),An=i(nt," forward method, overrides the "),$t=a(nt,"CODE",{});var Ca=s($t);Pn=i(Ca,"__call__"),Ca.forEach(o),qn=i(nt," special method."),nt.forEach(o),zn=h(N),v(re.$$.fragment,N),Nn=h(N),yt=a(N,"P",{});var ja=s(yt);On=i(ja,"Example:"),ja.forEach(o),Dn=h(N),v(Pe.$$.fragment,N),N.forEach(o),le.forEach(o),this.h()},h(){l(f,"name","hf:doc:metadata"),l(f,"content",JSON.stringify(Wa)),l(_,"id","swin-transformer"),l(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(_,"href","#swin-transformer"),l(p,"class","relative group"),l(J,"id","overview"),l(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(J,"href","#overview"),l(D,"class","relative group"),l(ce,"href","https://arxiv.org/abs/2103.14030"),l(ce,"rel","nofollow"),l(We,"href","/docs/transformers/master/en/model_doc/auto#transformers.AutoFeatureExtractor"),za(Q.src,Wn="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/swin_transformer_architecture.png")||l(Q,"src",Wn),l(Q,"alt","drawing"),l(Q,"width","600"),l(He,"href","https://arxiv.org/abs/2102.03334"),l(me,"href","https://huggingface.co/novice03%3E"),l(me,"rel","nofollow"),l(fe,"href","https://github.com/microsoft/Swin-Transformer"),l(fe,"rel","nofollow"),l(ee,"id","transformers.SwinConfig"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#transformers.SwinConfig"),l(W,"class","relative group"),l(Ue,"href","/docs/transformers/master/en/model_doc/swin#transformers.SwinModel"),l(ge,"href","https://huggingface.co/microsoft/swin-tiny-patch4-window7-224"),l(ge,"rel","nofollow"),l(Be,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(Ve,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(C,"class","docstring"),l(te,"id","transformers.SwinModel"),l(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(te,"href","#transformers.SwinModel"),l(B,"class","relative group"),l(Se,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Se,"rel","nofollow"),l(Ke,"href","/docs/transformers/master/en/model_doc/swin#transformers.SwinModel"),l(x,"class","docstring"),l(I,"class","docstring"),l(ne,"id","transformers.SwinForMaskedImageModeling"),l(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ne,"href","#transformers.SwinForMaskedImageModeling"),l(K,"class","relative group"),l(Me,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Me,"rel","nofollow"),l(Ye,"href","/docs/transformers/master/en/model_doc/swin#transformers.SwinForMaskedImageModeling"),l(E,"class","docstring"),l(A,"class","docstring"),l(se,"id","transformers.SwinForImageClassification"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#transformers.SwinForImageClassification"),l(R,"class","relative group"),l(Ie,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ie,"rel","nofollow"),l(Ze,"href","/docs/transformers/master/en/model_doc/swin#transformers.SwinForImageClassification"),l(F,"class","docstring"),l(j,"class","docstring")},m(t,d){e(document.head,f),m(t,T,d),m(t,p,d),e(p,_),e(_,k),b(u,k,null),e(p,g),e(p,M),e(M,to),m(t,xt,d),m(t,D,d),e(D,J),e(J,st),b(de,st,null),e(D,oo),e(D,rt),e(rt,no),m(t,Et,d),m(t,L,d),e(L,ao),e(L,ce),e(ce,so),e(L,ro),e(L,io),m(t,Ft,d),m(t,Ne,d),e(Ne,lo),m(t,Ct,d),m(t,Oe,d),e(Oe,it),e(it,co),m(t,jt,d),m(t,De,d),e(De,ho),m(t,It,d),m(t,Le,d),e(Le,he),e(he,mo),e(he,We),e(We,fo),e(he,po),m(t,At,d),m(t,Q,d),m(t,Pt,d),m(t,X,d),e(X,uo),e(X,He),e(He,go),e(X,_o),m(t,qt,d),m(t,P,d),e(P,wo),e(P,me),e(me,vo),e(P,bo),e(P,fe),e(fe,So),e(P,$o),m(t,zt,d),m(t,W,d),e(W,ee),e(ee,lt),b(pe,lt,null),e(W,yo),e(W,dt),e(dt,To),m(t,Nt,d),m(t,C,d),b(ue,C,null),e(C,ko),e(C,H),e(H,Mo),e(H,Ue),e(Ue,xo),e(H,Eo),e(H,ge),e(ge,Fo),e(H,Co),e(C,jo),e(C,U),e(U,Io),e(U,Be),e(Be,Ao),e(U,Po),e(U,Ve),e(Ve,qo),e(U,zo),e(C,No),b(_e,C,null),m(t,Ot,d),m(t,B,d),e(B,te),e(te,ct),b(we,ct,null),e(B,Oo),e(B,ht),e(ht,Do),m(t,Dt,d),m(t,I,d),b(ve,I,null),e(I,Lo),e(I,be),e(be,Wo),e(be,Se),e(Se,Ho),e(be,Uo),e(I,Bo),e(I,x),b($e,x,null),e(x,Vo),e(x,V),e(V,Ko),e(V,Ke),e(Ke,Yo),e(V,Zo),e(V,mt),e(mt,Ro),e(V,Go),e(x,Jo),b(oe,x,null),e(x,Qo),e(x,ft),e(ft,Xo),e(x,en),b(ye,x,null),m(t,Lt,d),m(t,K,d),e(K,ne),e(ne,pt),b(Te,pt,null),e(K,tn),e(K,ut),e(ut,on),m(t,Wt,d),m(t,A,d),b(ke,A,null),e(A,nn),e(A,Y),e(Y,an),e(Y,gt),e(gt,sn),e(Y,rn),e(Y,Me),e(Me,ln),e(Y,dn),e(A,cn),e(A,E),b(xe,E,null),e(E,hn),e(E,Z),e(Z,mn),e(Z,Ye),e(Ye,fn),e(Z,pn),e(Z,_t),e(_t,un),e(Z,gn),e(E,_n),b(ae,E,null),e(E,wn),e(E,wt),e(wt,vn),e(E,bn),b(Ee,E,null),m(t,Ht,d),m(t,R,d),e(R,se),e(se,vt),b(Fe,vt,null),e(R,Sn),e(R,bt),e(bt,$n),m(t,Ut,d),m(t,j,d),b(Ce,j,null),e(j,yn),e(j,St),e(St,Tn),e(j,kn),e(j,je),e(je,Mn),e(je,Ie),e(Ie,xn),e(je,En),e(j,Fn),e(j,F),b(Ae,F,null),e(F,Cn),e(F,G),e(G,jn),e(G,Ze),e(Ze,In),e(G,An),e(G,$t),e($t,Pn),e(G,qn),e(F,zn),b(re,F,null),e(F,Nn),e(F,yt),e(yt,On),e(F,Dn),b(Pe,F,null),Bt=!0},p(t,[d]){const qe={};d&2&&(qe.$$scope={dirty:d,ctx:t}),oe.$set(qe);const Tt={};d&2&&(Tt.$$scope={dirty:d,ctx:t}),ae.$set(Tt);const kt={};d&2&&(kt.$$scope={dirty:d,ctx:t}),re.$set(kt)},i(t){Bt||(S(u.$$.fragment,t),S(de.$$.fragment,t),S(pe.$$.fragment,t),S(ue.$$.fragment,t),S(_e.$$.fragment,t),S(we.$$.fragment,t),S(ve.$$.fragment,t),S($e.$$.fragment,t),S(oe.$$.fragment,t),S(ye.$$.fragment,t),S(Te.$$.fragment,t),S(ke.$$.fragment,t),S(xe.$$.fragment,t),S(ae.$$.fragment,t),S(Ee.$$.fragment,t),S(Fe.$$.fragment,t),S(Ce.$$.fragment,t),S(Ae.$$.fragment,t),S(re.$$.fragment,t),S(Pe.$$.fragment,t),Bt=!0)},o(t){$(u.$$.fragment,t),$(de.$$.fragment,t),$(pe.$$.fragment,t),$(ue.$$.fragment,t),$(_e.$$.fragment,t),$(we.$$.fragment,t),$(ve.$$.fragment,t),$($e.$$.fragment,t),$(oe.$$.fragment,t),$(ye.$$.fragment,t),$(Te.$$.fragment,t),$(ke.$$.fragment,t),$(xe.$$.fragment,t),$(ae.$$.fragment,t),$(Ee.$$.fragment,t),$(Fe.$$.fragment,t),$(Ce.$$.fragment,t),$(Ae.$$.fragment,t),$(re.$$.fragment,t),$(Pe.$$.fragment,t),Bt=!1},d(t){o(f),t&&o(T),t&&o(p),y(u),t&&o(xt),t&&o(D),y(de),t&&o(Et),t&&o(L),t&&o(Ft),t&&o(Ne),t&&o(Ct),t&&o(Oe),t&&o(jt),t&&o(De),t&&o(It),t&&o(Le),t&&o(At),t&&o(Q),t&&o(Pt),t&&o(X),t&&o(qt),t&&o(P),t&&o(zt),t&&o(W),y(pe),t&&o(Nt),t&&o(C),y(ue),y(_e),t&&o(Ot),t&&o(B),y(we),t&&o(Dt),t&&o(I),y(ve),y($e),y(oe),y(ye),t&&o(Lt),t&&o(K),y(Te),t&&o(Wt),t&&o(A),y(ke),y(xe),y(ae),y(Ee),t&&o(Ht),t&&o(R),y(Fe),t&&o(Ut),t&&o(j),y(Ce),y(Ae),y(re),y(Pe)}}}const Wa={local:"swin-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.SwinConfig",title:"SwinConfig"},{local:"transformers.SwinModel",title:"SwinModel"},{local:"transformers.SwinForMaskedImageModeling",title:"SwinForMaskedImageModeling"},{local:"transformers.SwinForImageClassification",title:"SwinForImageClassification"}],title:"Swin Transformer"};function Ha(O,f,T){let{fw:p}=f;return O.$$set=_=>{"fw"in _&&T(0,p=_.fw)},[p]}class Ra extends Ia{constructor(f){super();Aa(this,f,Ha,La,Pa,{fw:0})}}export{Ra as default,Wa as metadata};
