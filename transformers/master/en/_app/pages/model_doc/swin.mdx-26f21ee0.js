import{S as In,i as qn,s as zn,e as n,k as c,w,t as r,R as Nn,c as a,d as o,m as h,a as s,x as v,h as i,b as l,X as On,F as t,g as f,y as b,q as S,o as y,B as $}from"../../chunks/vendor-9daddcfa.js";import{T as Pn}from"../../chunks/Tip-c0a70391.js";import{D as ot}from"../../chunks/Docstring-ea6f8b76.js";import{C as Ro}from"../../chunks/CodeBlock-37b92346.js";import{I as nt}from"../../chunks/IconCopyLink-a413fd1b.js";import"../../chunks/CopyButton-6099fd9d.js";function Dn(ee){let m,T,p,u,C;return{c(){m=n("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=r("Module"),C=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){m=a(g,"P",{});var _=s(m);T=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(_,"CODE",{});var A=s(p);u=i(A,"Module"),A.forEach(o),C=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(g,_){f(g,m,_),t(m,T),t(m,p),t(p,u),t(m,C)},d(g){g&&o(m)}}}function Ln(ee){let m,T,p,u,C;return{c(){m=n("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=r("Module"),C=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){m=a(g,"P",{});var _=s(m);T=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(_,"CODE",{});var A=s(p);u=i(A,"Module"),A.forEach(o),C=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(g,_){f(g,m,_),t(m,T),t(m,p),t(p,u),t(m,C)},d(g){g&&o(m)}}}function Wn(ee){let m,T,p,u,C,g,_,A,kt,at,q,B,Le,te,jt,We,At,st,z,Mt,oe,Ft,Pt,It,rt,$e,qt,it,Te,He,zt,lt,xe,Nt,dt,Ee,ne,Ot,Ce,Dt,Lt,ct,V,Yo,ht,K,Wt,ke,Ht,Ut,ft,F,Bt,ae,Vt,Kt,se,Rt,Yt,mt,N,R,Ue,re,Zt,Be,Gt,pt,k,ie,Jt,O,Xt,je,Qt,eo,le,to,oo,no,D,ao,Ae,so,ro,Me,io,lo,co,de,ut,L,Y,Ve,ce,ho,Ke,fo,gt,M,he,mo,fe,po,me,uo,go,_o,x,pe,wo,W,vo,Fe,bo,So,Re,yo,$o,To,Z,xo,Ye,Eo,Co,ue,_t,H,G,Ze,ge,ko,Ge,jo,wt,j,_e,Ao,Je,Mo,Fo,we,Po,ve,Io,qo,zo,E,be,No,U,Oo,Pe,Do,Lo,Xe,Wo,Ho,Uo,J,Bo,Qe,Vo,Ko,Se,vt;return g=new nt({}),te=new nt({}),re=new nt({}),ie=new ot({props:{name:"class transformers.SwinConfig",anchor:"transformers.SwinConfig",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 4"},{name:"num_channels",val:" = 3"},{name:"embed_dim",val:" = 96"},{name:"depths",val:" = [2, 2, 6, 2]"},{name:"num_heads",val:" = [3, 6, 12, 24]"},{name:"window_size",val:" = 7"},{name:"mlp_ratio",val:" = 4.0"},{name:"qkv_bias",val:" = True"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"drop_path_rate",val:" = 0.1"},{name:"hidden_act",val:" = 'gelu'"},{name:"use_absolute_embeddings",val:" = False"},{name:"patch_norm",val:" = True"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/swin/configuration_swin.py#L29",parametersDescription:[{anchor:"transformers.SwinConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
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
The epsilon used by the layer normalization layers.</p>
<p>Example &#x2014;`,name:"layer_norm_eps"}]}}),de=new Ro({props:{code:`from transformers import SwinModel, SwinConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ce=new nt({}),he=new ot({props:{name:"class transformers.SwinModel",anchor:"transformers.SwinModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/swin/modeling_swin.py#L671",parametersDescription:[{anchor:"transformers.SwinModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),pe=new ot({props:{name:"forward",anchor:"transformers.SwinModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/swin/modeling_swin.py#L698",parametersDescription:[{anchor:"transformers.SwinModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),Z=new Pn({props:{$$slots:{default:[Dn]},$$scope:{ctx:ee}}}),ue=new Ro({props:{code:`from transformers import AutoFeatureExtractor, SwinModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">49</span>, <span class="hljs-number">768</span>]`}}),ge=new nt({}),_e=new ot({props:{name:"class transformers.SwinForImageClassification",anchor:"transformers.SwinForImageClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/swin/modeling_swin.py#L767",parametersDescription:[{anchor:"transformers.SwinForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),be=new ot({props:{name:"forward",anchor:"transformers.SwinForImageClassification.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/swin/modeling_swin.py#L782",parametersDescription:[{anchor:"transformers.SwinForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),J=new Pn({props:{$$slots:{default:[Ln]},$$scope:{ctx:ee}}}),Se=new Ro({props:{code:`from transformers import AutoFeatureExtractor, SwinForImageClassification
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
<span class="hljs-string">&#x27;tabby, tabby cat&#x27;</span>`}}),{c(){m=n("meta"),T=c(),p=n("h1"),u=n("a"),C=n("span"),w(g.$$.fragment),_=c(),A=n("span"),kt=r("Swin Transformer"),at=c(),q=n("h2"),B=n("a"),Le=n("span"),w(te.$$.fragment),jt=c(),We=n("span"),At=r("Overview"),st=c(),z=n("p"),Mt=r("The Swin Transformer was proposed in "),oe=n("a"),Ft=r("Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),Pt=n("br"),It=r(`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),rt=c(),$e=n("p"),qt=r("The abstract from the paper is the following:"),it=c(),Te=n("p"),He=n("em"),zt=r(`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
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
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),lt=c(),xe=n("p"),Nt=r("Tips:"),dt=c(),Ee=n("ul"),ne=n("li"),Ot=r("One can use the "),Ce=n("a"),Dt=r("AutoFeatureExtractor"),Lt=r(" API to prepare images for the model."),ct=c(),V=n("img"),ht=c(),K=n("small"),Wt=r("Swin Transformer architecture. Taken from the "),ke=n("a"),Ht=r("original paper"),Ut=r("."),ft=c(),F=n("p"),Bt=r("This model was contributed by "),ae=n("a"),Vt=r("novice03"),Kt=r(". The original code can be found "),se=n("a"),Rt=r("here"),Yt=r("."),mt=c(),N=n("h2"),R=n("a"),Ue=n("span"),w(re.$$.fragment),Zt=c(),Be=n("span"),Gt=r("SwinConfig"),pt=c(),k=n("div"),w(ie.$$.fragment),Jt=c(),O=n("p"),Xt=r("This is the configuration class to store the configuration of a "),je=n("a"),Qt=r("SwinModel"),eo=r(`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),le=n("a"),to=r("microsoft/swin-tiny-patch4-window7-224"),oo=r(`
architecture.`),no=c(),D=n("p"),ao=r("Configuration objects inherit from "),Ae=n("a"),so=r("PretrainedConfig"),ro=r(` and can be used to control the model outputs. Read the
documentation from `),Me=n("a"),io=r("PretrainedConfig"),lo=r(" for more information."),co=c(),w(de.$$.fragment),ut=c(),L=n("h2"),Y=n("a"),Ve=n("span"),w(ce.$$.fragment),ho=c(),Ke=n("span"),fo=r("SwinModel"),gt=c(),M=n("div"),w(he.$$.fragment),mo=c(),fe=n("p"),po=r(`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),me=n("a"),uo=r("torch.nn.Module"),go=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_o=c(),x=n("div"),w(pe.$$.fragment),wo=c(),W=n("p"),vo=r("The "),Fe=n("a"),bo=r("SwinModel"),So=r(" forward method, overrides the "),Re=n("code"),yo=r("__call__"),$o=r(" special method."),To=c(),w(Z.$$.fragment),xo=c(),Ye=n("p"),Eo=r("Example:"),Co=c(),w(ue.$$.fragment),_t=c(),H=n("h2"),G=n("a"),Ze=n("span"),w(ge.$$.fragment),ko=c(),Ge=n("span"),jo=r("SwinForImageClassification"),wt=c(),j=n("div"),w(_e.$$.fragment),Ao=c(),Je=n("p"),Mo=r(`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Fo=c(),we=n("p"),Po=r("This model is a PyTorch "),ve=n("a"),Io=r("torch.nn.Module"),qo=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zo=c(),E=n("div"),w(be.$$.fragment),No=c(),U=n("p"),Oo=r("The "),Pe=n("a"),Do=r("SwinForImageClassification"),Lo=r(" forward method, overrides the "),Xe=n("code"),Wo=r("__call__"),Ho=r(" special method."),Uo=c(),w(J.$$.fragment),Bo=c(),Qe=n("p"),Vo=r("Example:"),Ko=c(),w(Se.$$.fragment),this.h()},l(e){const d=Nn('[data-svelte="svelte-1phssyn"]',document.head);m=a(d,"META",{name:!0,content:!0}),d.forEach(o),T=h(e),p=a(e,"H1",{class:!0});var ye=s(p);u=a(ye,"A",{id:!0,class:!0,href:!0});var et=s(u);C=a(et,"SPAN",{});var Zo=s(C);v(g.$$.fragment,Zo),Zo.forEach(o),et.forEach(o),_=h(ye),A=a(ye,"SPAN",{});var Go=s(A);kt=i(Go,"Swin Transformer"),Go.forEach(o),ye.forEach(o),at=h(e),q=a(e,"H2",{class:!0});var bt=s(q);B=a(bt,"A",{id:!0,class:!0,href:!0});var Jo=s(B);Le=a(Jo,"SPAN",{});var Xo=s(Le);v(te.$$.fragment,Xo),Xo.forEach(o),Jo.forEach(o),jt=h(bt),We=a(bt,"SPAN",{});var Qo=s(We);At=i(Qo,"Overview"),Qo.forEach(o),bt.forEach(o),st=h(e),z=a(e,"P",{});var tt=s(z);Mt=i(tt,"The Swin Transformer was proposed in "),oe=a(tt,"A",{href:!0,rel:!0});var en=s(oe);Ft=i(en,"Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),en.forEach(o),Pt=a(tt,"BR",{}),It=i(tt,`
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`),tt.forEach(o),rt=h(e),$e=a(e,"P",{});var tn=s($e);qt=i(tn,"The abstract from the paper is the following:"),tn.forEach(o),it=h(e),Te=a(e,"P",{});var on=s(Te);He=a(on,"EM",{});var nn=s(He);zt=i(nn,`This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
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
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),nn.forEach(o),on.forEach(o),lt=h(e),xe=a(e,"P",{});var an=s(xe);Nt=i(an,"Tips:"),an.forEach(o),dt=h(e),Ee=a(e,"UL",{});var sn=s(Ee);ne=a(sn,"LI",{});var St=s(ne);Ot=i(St,"One can use the "),Ce=a(St,"A",{href:!0});var rn=s(Ce);Dt=i(rn,"AutoFeatureExtractor"),rn.forEach(o),Lt=i(St," API to prepare images for the model."),St.forEach(o),sn.forEach(o),ct=h(e),V=a(e,"IMG",{src:!0,alt:!0,width:!0}),ht=h(e),K=a(e,"SMALL",{});var yt=s(K);Wt=i(yt,"Swin Transformer architecture. Taken from the "),ke=a(yt,"A",{href:!0});var ln=s(ke);Ht=i(ln,"original paper"),ln.forEach(o),Ut=i(yt,"."),yt.forEach(o),ft=h(e),F=a(e,"P",{});var Ie=s(F);Bt=i(Ie,"This model was contributed by "),ae=a(Ie,"A",{href:!0,rel:!0});var dn=s(ae);Vt=i(dn,"novice03"),dn.forEach(o),Kt=i(Ie,". The original code can be found "),se=a(Ie,"A",{href:!0,rel:!0});var cn=s(se);Rt=i(cn,"here"),cn.forEach(o),Yt=i(Ie,"."),Ie.forEach(o),mt=h(e),N=a(e,"H2",{class:!0});var $t=s(N);R=a($t,"A",{id:!0,class:!0,href:!0});var hn=s(R);Ue=a(hn,"SPAN",{});var fn=s(Ue);v(re.$$.fragment,fn),fn.forEach(o),hn.forEach(o),Zt=h($t),Be=a($t,"SPAN",{});var mn=s(Be);Gt=i(mn,"SwinConfig"),mn.forEach(o),$t.forEach(o),pt=h(e),k=a(e,"DIV",{class:!0});var X=s(k);v(ie.$$.fragment,X),Jt=h(X),O=a(X,"P",{});var qe=s(O);Xt=i(qe,"This is the configuration class to store the configuration of a "),je=a(qe,"A",{href:!0});var pn=s(je);Qt=i(pn,"SwinModel"),pn.forEach(o),eo=i(qe,`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),le=a(qe,"A",{href:!0,rel:!0});var un=s(le);to=i(un,"microsoft/swin-tiny-patch4-window7-224"),un.forEach(o),oo=i(qe,`
architecture.`),qe.forEach(o),no=h(X),D=a(X,"P",{});var ze=s(D);ao=i(ze,"Configuration objects inherit from "),Ae=a(ze,"A",{href:!0});var gn=s(Ae);so=i(gn,"PretrainedConfig"),gn.forEach(o),ro=i(ze,` and can be used to control the model outputs. Read the
documentation from `),Me=a(ze,"A",{href:!0});var _n=s(Me);io=i(_n,"PretrainedConfig"),_n.forEach(o),lo=i(ze," for more information."),ze.forEach(o),co=h(X),v(de.$$.fragment,X),X.forEach(o),ut=h(e),L=a(e,"H2",{class:!0});var Tt=s(L);Y=a(Tt,"A",{id:!0,class:!0,href:!0});var wn=s(Y);Ve=a(wn,"SPAN",{});var vn=s(Ve);v(ce.$$.fragment,vn),vn.forEach(o),wn.forEach(o),ho=h(Tt),Ke=a(Tt,"SPAN",{});var bn=s(Ke);fo=i(bn,"SwinModel"),bn.forEach(o),Tt.forEach(o),gt=h(e),M=a(e,"DIV",{class:!0});var Ne=s(M);v(he.$$.fragment,Ne),mo=h(Ne),fe=a(Ne,"P",{});var xt=s(fe);po=i(xt,`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),me=a(xt,"A",{href:!0,rel:!0});var Sn=s(me);uo=i(Sn,"torch.nn.Module"),Sn.forEach(o),go=i(xt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xt.forEach(o),_o=h(Ne),x=a(Ne,"DIV",{class:!0});var P=s(x);v(pe.$$.fragment,P),wo=h(P),W=a(P,"P",{});var Oe=s(W);vo=i(Oe,"The "),Fe=a(Oe,"A",{href:!0});var yn=s(Fe);bo=i(yn,"SwinModel"),yn.forEach(o),So=i(Oe," forward method, overrides the "),Re=a(Oe,"CODE",{});var $n=s(Re);yo=i($n,"__call__"),$n.forEach(o),$o=i(Oe," special method."),Oe.forEach(o),To=h(P),v(Z.$$.fragment,P),xo=h(P),Ye=a(P,"P",{});var Tn=s(Ye);Eo=i(Tn,"Example:"),Tn.forEach(o),Co=h(P),v(ue.$$.fragment,P),P.forEach(o),Ne.forEach(o),_t=h(e),H=a(e,"H2",{class:!0});var Et=s(H);G=a(Et,"A",{id:!0,class:!0,href:!0});var xn=s(G);Ze=a(xn,"SPAN",{});var En=s(Ze);v(ge.$$.fragment,En),En.forEach(o),xn.forEach(o),ko=h(Et),Ge=a(Et,"SPAN",{});var Cn=s(Ge);jo=i(Cn,"SwinForImageClassification"),Cn.forEach(o),Et.forEach(o),wt=h(e),j=a(e,"DIV",{class:!0});var Q=s(j);v(_e.$$.fragment,Q),Ao=h(Q),Je=a(Q,"P",{});var kn=s(Je);Mo=i(kn,`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),kn.forEach(o),Fo=h(Q),we=a(Q,"P",{});var Ct=s(we);Po=i(Ct,"This model is a PyTorch "),ve=a(Ct,"A",{href:!0,rel:!0});var jn=s(ve);Io=i(jn,"torch.nn.Module"),jn.forEach(o),qo=i(Ct,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ct.forEach(o),zo=h(Q),E=a(Q,"DIV",{class:!0});var I=s(E);v(be.$$.fragment,I),No=h(I),U=a(I,"P",{});var De=s(U);Oo=i(De,"The "),Pe=a(De,"A",{href:!0});var An=s(Pe);Do=i(An,"SwinForImageClassification"),An.forEach(o),Lo=i(De," forward method, overrides the "),Xe=a(De,"CODE",{});var Mn=s(Xe);Wo=i(Mn,"__call__"),Mn.forEach(o),Ho=i(De," special method."),De.forEach(o),Uo=h(I),v(J.$$.fragment,I),Bo=h(I),Qe=a(I,"P",{});var Fn=s(Qe);Vo=i(Fn,"Example:"),Fn.forEach(o),Ko=h(I),v(Se.$$.fragment,I),I.forEach(o),Q.forEach(o),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(Hn)),l(u,"id","swin-transformer"),l(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(u,"href","#swin-transformer"),l(p,"class","relative group"),l(B,"id","overview"),l(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(B,"href","#overview"),l(q,"class","relative group"),l(oe,"href","https://arxiv.org/abs/2103.14030"),l(oe,"rel","nofollow"),l(Ce,"href","/docs/transformers/master/en/model_doc/auto#transformers.AutoFeatureExtractor"),On(V.src,Yo="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/swin_transformer_architecture.png")||l(V,"src",Yo),l(V,"alt","drawing"),l(V,"width","600"),l(ke,"href","https://arxiv.org/abs/2102.03334"),l(ae,"href","https://huggingface.co/novice03%3E"),l(ae,"rel","nofollow"),l(se,"href","https://github.com/microsoft/Swin-Transformer"),l(se,"rel","nofollow"),l(R,"id","transformers.SwinConfig"),l(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(R,"href","#transformers.SwinConfig"),l(N,"class","relative group"),l(je,"href","/docs/transformers/master/en/model_doc/swin#transformers.SwinModel"),l(le,"href","https://huggingface.co/microsoft/swin-tiny-patch4-window7-224"),l(le,"rel","nofollow"),l(Ae,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(Me,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(k,"class","docstring"),l(Y,"id","transformers.SwinModel"),l(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Y,"href","#transformers.SwinModel"),l(L,"class","relative group"),l(me,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(me,"rel","nofollow"),l(Fe,"href","/docs/transformers/master/en/model_doc/swin#transformers.SwinModel"),l(x,"class","docstring"),l(M,"class","docstring"),l(G,"id","transformers.SwinForImageClassification"),l(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(G,"href","#transformers.SwinForImageClassification"),l(H,"class","relative group"),l(ve,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ve,"rel","nofollow"),l(Pe,"href","/docs/transformers/master/en/model_doc/swin#transformers.SwinForImageClassification"),l(E,"class","docstring"),l(j,"class","docstring")},m(e,d){t(document.head,m),f(e,T,d),f(e,p,d),t(p,u),t(u,C),b(g,C,null),t(p,_),t(p,A),t(A,kt),f(e,at,d),f(e,q,d),t(q,B),t(B,Le),b(te,Le,null),t(q,jt),t(q,We),t(We,At),f(e,st,d),f(e,z,d),t(z,Mt),t(z,oe),t(oe,Ft),t(z,Pt),t(z,It),f(e,rt,d),f(e,$e,d),t($e,qt),f(e,it,d),f(e,Te,d),t(Te,He),t(He,zt),f(e,lt,d),f(e,xe,d),t(xe,Nt),f(e,dt,d),f(e,Ee,d),t(Ee,ne),t(ne,Ot),t(ne,Ce),t(Ce,Dt),t(ne,Lt),f(e,ct,d),f(e,V,d),f(e,ht,d),f(e,K,d),t(K,Wt),t(K,ke),t(ke,Ht),t(K,Ut),f(e,ft,d),f(e,F,d),t(F,Bt),t(F,ae),t(ae,Vt),t(F,Kt),t(F,se),t(se,Rt),t(F,Yt),f(e,mt,d),f(e,N,d),t(N,R),t(R,Ue),b(re,Ue,null),t(N,Zt),t(N,Be),t(Be,Gt),f(e,pt,d),f(e,k,d),b(ie,k,null),t(k,Jt),t(k,O),t(O,Xt),t(O,je),t(je,Qt),t(O,eo),t(O,le),t(le,to),t(O,oo),t(k,no),t(k,D),t(D,ao),t(D,Ae),t(Ae,so),t(D,ro),t(D,Me),t(Me,io),t(D,lo),t(k,co),b(de,k,null),f(e,ut,d),f(e,L,d),t(L,Y),t(Y,Ve),b(ce,Ve,null),t(L,ho),t(L,Ke),t(Ke,fo),f(e,gt,d),f(e,M,d),b(he,M,null),t(M,mo),t(M,fe),t(fe,po),t(fe,me),t(me,uo),t(fe,go),t(M,_o),t(M,x),b(pe,x,null),t(x,wo),t(x,W),t(W,vo),t(W,Fe),t(Fe,bo),t(W,So),t(W,Re),t(Re,yo),t(W,$o),t(x,To),b(Z,x,null),t(x,xo),t(x,Ye),t(Ye,Eo),t(x,Co),b(ue,x,null),f(e,_t,d),f(e,H,d),t(H,G),t(G,Ze),b(ge,Ze,null),t(H,ko),t(H,Ge),t(Ge,jo),f(e,wt,d),f(e,j,d),b(_e,j,null),t(j,Ao),t(j,Je),t(Je,Mo),t(j,Fo),t(j,we),t(we,Po),t(we,ve),t(ve,Io),t(we,qo),t(j,zo),t(j,E),b(be,E,null),t(E,No),t(E,U),t(U,Oo),t(U,Pe),t(Pe,Do),t(U,Lo),t(U,Xe),t(Xe,Wo),t(U,Ho),t(E,Uo),b(J,E,null),t(E,Bo),t(E,Qe),t(Qe,Vo),t(E,Ko),b(Se,E,null),vt=!0},p(e,[d]){const ye={};d&2&&(ye.$$scope={dirty:d,ctx:e}),Z.$set(ye);const et={};d&2&&(et.$$scope={dirty:d,ctx:e}),J.$set(et)},i(e){vt||(S(g.$$.fragment,e),S(te.$$.fragment,e),S(re.$$.fragment,e),S(ie.$$.fragment,e),S(de.$$.fragment,e),S(ce.$$.fragment,e),S(he.$$.fragment,e),S(pe.$$.fragment,e),S(Z.$$.fragment,e),S(ue.$$.fragment,e),S(ge.$$.fragment,e),S(_e.$$.fragment,e),S(be.$$.fragment,e),S(J.$$.fragment,e),S(Se.$$.fragment,e),vt=!0)},o(e){y(g.$$.fragment,e),y(te.$$.fragment,e),y(re.$$.fragment,e),y(ie.$$.fragment,e),y(de.$$.fragment,e),y(ce.$$.fragment,e),y(he.$$.fragment,e),y(pe.$$.fragment,e),y(Z.$$.fragment,e),y(ue.$$.fragment,e),y(ge.$$.fragment,e),y(_e.$$.fragment,e),y(be.$$.fragment,e),y(J.$$.fragment,e),y(Se.$$.fragment,e),vt=!1},d(e){o(m),e&&o(T),e&&o(p),$(g),e&&o(at),e&&o(q),$(te),e&&o(st),e&&o(z),e&&o(rt),e&&o($e),e&&o(it),e&&o(Te),e&&o(lt),e&&o(xe),e&&o(dt),e&&o(Ee),e&&o(ct),e&&o(V),e&&o(ht),e&&o(K),e&&o(ft),e&&o(F),e&&o(mt),e&&o(N),$(re),e&&o(pt),e&&o(k),$(ie),$(de),e&&o(ut),e&&o(L),$(ce),e&&o(gt),e&&o(M),$(he),$(pe),$(Z),$(ue),e&&o(_t),e&&o(H),$(ge),e&&o(wt),e&&o(j),$(_e),$(be),$(J),$(Se)}}}const Hn={local:"swin-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.SwinConfig",title:"SwinConfig"},{local:"transformers.SwinModel",title:"SwinModel"},{local:"transformers.SwinForImageClassification",title:"SwinForImageClassification"}],title:"Swin Transformer"};function Un(ee,m,T){let{fw:p}=m;return ee.$$set=u=>{"fw"in u&&T(0,p=u.fw)},[p]}class Gn extends In{constructor(m){super();qn(this,m,Un,Wn,zn,{fw:0})}}export{Gn as default,Hn as metadata};
