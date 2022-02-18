import{S as Fn,i as qn,s as zn,e as n,k as c,w,t as r,L as On,c as a,d as o,m as h,a as s,x as v,h as i,b as l,M as Ln,J as t,g as f,y as b,q as S,o as y,B as $}from"../../chunks/vendor-b1433968.js";import{T as jn}from"../../chunks/Tip-c3840994.js";import{D as ot}from"../../chunks/Docstring-ff504c58.js";import{C as Yo}from"../../chunks/CodeBlock-a320dbd7.js";import{I as nt}from"../../chunks/IconCopyLink-7029626d.js";import"../../chunks/CopyButton-f65cb278.js";function Nn(ee){let m,T,p,u,E;return{c(){m=n("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=r("Module"),E=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){m=a(g,"P",{});var _=s(m);T=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(_,"CODE",{});var P=s(p);u=i(P,"Module"),P.forEach(o),E=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(g,_){f(g,m,_),t(m,T),t(m,p),t(p,u),t(m,E)},d(g){g&&o(m)}}}function Dn(ee){let m,T,p,u,E;return{c(){m=n("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=r("Module"),E=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){m=a(g,"P",{});var _=s(m);T=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(_,"CODE",{});var P=s(p);u=i(P,"Module"),P.forEach(o),E=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(g,_){f(g,m,_),t(m,T),t(m,p),t(p,u),t(m,E)},d(g){g&&o(m)}}}function Wn(ee){let m,T,p,u,E,g,_,P,kt,at,q,U,De,te,Mt,We,Pt,st,z,It,oe,At,jt,Ft,rt,$e,qt,it,Te,He,zt,lt,xe,Ot,dt,Ce,ne,Lt,Ee,Nt,Dt,ct,V,Zo,ht,K,Wt,ke,Ht,Bt,ft,A,Ut,ae,Vt,Kt,se,Yt,Zt,mt,O,Y,Be,re,Rt,Ue,Gt,pt,k,ie,Jt,L,Qt,Me,Xt,eo,le,to,oo,no,N,ao,Pe,so,ro,Ie,io,lo,co,de,ut,D,Z,Ve,ce,ho,Ke,fo,gt,I,he,mo,fe,po,me,uo,go,_o,x,pe,wo,W,vo,Ae,bo,So,Ye,yo,$o,To,R,xo,Ze,Co,Eo,ue,_t,H,G,Re,ge,ko,Ge,Mo,wt,M,_e,Po,Je,Io,Ao,we,jo,ve,Fo,qo,zo,C,be,Oo,B,Lo,je,No,Do,Qe,Wo,Ho,Bo,J,Uo,Xe,Vo,Ko,Se,vt;return g=new nt({}),te=new nt({}),re=new nt({}),ie=new ot({props:{name:"class transformers.SwinConfig",anchor:"transformers.SwinConfig",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 4"},{name:"num_channels",val:" = 3"},{name:"embed_dim",val:" = 96"},{name:"depths",val:" = [2, 2, 6, 2]"},{name:"num_heads",val:" = [3, 6, 12, 24]"},{name:"window_size",val:" = 7"},{name:"mlp_ratio",val:" = 4.0"},{name:"qkv_bias",val:" = True"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"drop_path_rate",val:" = 0.1"},{name:"hidden_act",val:" = 'gelu'"},{name:"use_absolute_embeddings",val:" = False"},{name:"patch_norm",val:" = True"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/swin/configuration_swin.py#L29",parametersDescription:[{anchor:"transformers.SwinConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
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
<p>Example &#x2014;`,name:"layer_norm_eps"}]}}),de=new Yo({props:{code:`from transformers import SwinModel, SwinConfig

# Initializing a Swin microsoft/swin-tiny-patch4-window7-224 style configuration
configuration = SwinConfig()

# Initializing a model from the microsoft/swin-tiny-patch4-window7-224 style configuration
model = SwinModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SwinModel, SwinConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Swin microsoft/swin-tiny-patch4-window7-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = SwinConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the microsoft/swin-tiny-patch4-window7-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SwinModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ce=new nt({}),he=new ot({props:{name:"class transformers.SwinModel",anchor:"transformers.SwinModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/swin/modeling_swin.py#L661",parametersDescription:[{anchor:"transformers.SwinModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),pe=new ot({props:{name:"forward",anchor:"transformers.SwinModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/swin/modeling_swin.py#L688",parametersDescription:[{anchor:"transformers.SwinModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/swin#transformers.SwinConfig"
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
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),R=new jn({props:{$$slots:{default:[Nn]},$$scope:{ctx:ee}}}),ue=new Yo({props:{code:`from transformers import AutoFeatureExtractor, SwinModel
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swin-tiny-patch4-window7-224")
model = SwinModel.from_pretrained("microsoft/swin-tiny-patch4-window7-224")

inputs = feature_extractor(images=image, return_tensors="pt")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, SwinModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SwinModel.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ge=new nt({}),_e=new ot({props:{name:"class transformers.SwinForImageClassification",anchor:"transformers.SwinForImageClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/swin/modeling_swin.py#L771",parametersDescription:[{anchor:"transformers.SwinForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),be=new ot({props:{name:"forward",anchor:"transformers.SwinForImageClassification.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/swin/modeling_swin.py#L786",parametersDescription:[{anchor:"transformers.SwinForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SwinForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/swin#transformers.SwinConfig"
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
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),J=new jn({props:{$$slots:{default:[Dn]},$$scope:{ctx:ee}}}),Se=new Yo({props:{code:`from transformers import AutoFeatureExtractor, SwinForImageClassification
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/swin-tiny-patch4-window7-224")
model = SwinForImageClassification.from_pretrained("microsoft/swin-tiny-patch4-window7-224")

inputs = feature_extractor(images=image, return_tensors="pt")
outputs = model(**inputs)
logits = outputs.logits
# model predicts one of the 1000 ImageNet classes
predicted_class_idx = logits.argmax(-1).item()
print("Predicted class:", model.config.id2label[predicted_class_idx]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, SwinForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SwinForImageClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])`}}),{c(){m=n("meta"),T=c(),p=n("h1"),u=n("a"),E=n("span"),w(g.$$.fragment),_=c(),P=n("span"),kt=r("Swin Transformer"),at=c(),q=n("h2"),U=n("a"),De=n("span"),w(te.$$.fragment),Mt=c(),We=n("span"),Pt=r("Overview"),st=c(),z=n("p"),It=r("The Swin Transformer was proposed in "),oe=n("a"),At=r("Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),jt=n("br"),Ft=r(`
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
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),lt=c(),xe=n("p"),Ot=r("Tips:"),dt=c(),Ce=n("ul"),ne=n("li"),Lt=r("One can use the "),Ee=n("a"),Nt=r("AutoFeatureExtractor"),Dt=r(" API to prepare images for the model."),ct=c(),V=n("img"),ht=c(),K=n("small"),Wt=r("Swin Transformer architecture. Taken from the "),ke=n("a"),Ht=r("original paper"),Bt=r("."),ft=c(),A=n("p"),Ut=r("This model was contributed by "),ae=n("a"),Vt=r("novice03"),Kt=r(". The original code can be found "),se=n("a"),Yt=r("here"),Zt=r("."),mt=c(),O=n("h2"),Y=n("a"),Be=n("span"),w(re.$$.fragment),Rt=c(),Ue=n("span"),Gt=r("SwinConfig"),pt=c(),k=n("div"),w(ie.$$.fragment),Jt=c(),L=n("p"),Qt=r("This is the configuration class to store the configuration of a "),Me=n("a"),Xt=r("SwinModel"),eo=r(`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),le=n("a"),to=r("microsoft/swin-tiny-patch4-window7-224"),oo=r(`
architecture.`),no=c(),N=n("p"),ao=r("Configuration objects inherit from "),Pe=n("a"),so=r("PretrainedConfig"),ro=r(` and can be used to control the model outputs. Read the
documentation from `),Ie=n("a"),io=r("PretrainedConfig"),lo=r(" for more information."),co=c(),w(de.$$.fragment),ut=c(),D=n("h2"),Z=n("a"),Ve=n("span"),w(ce.$$.fragment),ho=c(),Ke=n("span"),fo=r("SwinModel"),gt=c(),I=n("div"),w(he.$$.fragment),mo=c(),fe=n("p"),po=r(`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),me=n("a"),uo=r("torch.nn.Module"),go=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_o=c(),x=n("div"),w(pe.$$.fragment),wo=c(),W=n("p"),vo=r("The "),Ae=n("a"),bo=r("SwinModel"),So=r(" forward method, overrides the "),Ye=n("code"),yo=r("__call__"),$o=r(" special method."),To=c(),w(R.$$.fragment),xo=c(),Ze=n("p"),Co=r("Examples:"),Eo=c(),w(ue.$$.fragment),_t=c(),H=n("h2"),G=n("a"),Re=n("span"),w(ge.$$.fragment),ko=c(),Ge=n("span"),Mo=r("SwinForImageClassification"),wt=c(),M=n("div"),w(_e.$$.fragment),Po=c(),Je=n("p"),Io=r(`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Ao=c(),we=n("p"),jo=r("This model is a PyTorch "),ve=n("a"),Fo=r("torch.nn.Module"),qo=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zo=c(),C=n("div"),w(be.$$.fragment),Oo=c(),B=n("p"),Lo=r("The "),je=n("a"),No=r("SwinForImageClassification"),Do=r(" forward method, overrides the "),Qe=n("code"),Wo=r("__call__"),Ho=r(" special method."),Bo=c(),w(J.$$.fragment),Uo=c(),Xe=n("p"),Vo=r("Examples:"),Ko=c(),w(Se.$$.fragment),this.h()},l(e){const d=On('[data-svelte="svelte-1phssyn"]',document.head);m=a(d,"META",{name:!0,content:!0}),d.forEach(o),T=h(e),p=a(e,"H1",{class:!0});var ye=s(p);u=a(ye,"A",{id:!0,class:!0,href:!0});var et=s(u);E=a(et,"SPAN",{});var Ro=s(E);v(g.$$.fragment,Ro),Ro.forEach(o),et.forEach(o),_=h(ye),P=a(ye,"SPAN",{});var Go=s(P);kt=i(Go,"Swin Transformer"),Go.forEach(o),ye.forEach(o),at=h(e),q=a(e,"H2",{class:!0});var bt=s(q);U=a(bt,"A",{id:!0,class:!0,href:!0});var Jo=s(U);De=a(Jo,"SPAN",{});var Qo=s(De);v(te.$$.fragment,Qo),Qo.forEach(o),Jo.forEach(o),Mt=h(bt),We=a(bt,"SPAN",{});var Xo=s(We);Pt=i(Xo,"Overview"),Xo.forEach(o),bt.forEach(o),st=h(e),z=a(e,"P",{});var tt=s(z);It=i(tt,"The Swin Transformer was proposed in "),oe=a(tt,"A",{href:!0,rel:!0});var en=s(oe);At=i(en,"Swin Transformer: Hierarchical Vision Transformer using Shifted Windows"),en.forEach(o),jt=a(tt,"BR",{}),Ft=i(tt,`
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
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.`),nn.forEach(o),on.forEach(o),lt=h(e),xe=a(e,"P",{});var an=s(xe);Ot=i(an,"Tips:"),an.forEach(o),dt=h(e),Ce=a(e,"UL",{});var sn=s(Ce);ne=a(sn,"LI",{});var St=s(ne);Lt=i(St,"One can use the "),Ee=a(St,"A",{href:!0});var rn=s(Ee);Nt=i(rn,"AutoFeatureExtractor"),rn.forEach(o),Dt=i(St," API to prepare images for the model."),St.forEach(o),sn.forEach(o),ct=h(e),V=a(e,"IMG",{src:!0,alt:!0,width:!0}),ht=h(e),K=a(e,"SMALL",{});var yt=s(K);Wt=i(yt,"Swin Transformer architecture. Taken from the "),ke=a(yt,"A",{href:!0});var ln=s(ke);Ht=i(ln,"original paper"),ln.forEach(o),Bt=i(yt,"."),yt.forEach(o),ft=h(e),A=a(e,"P",{});var Fe=s(A);Ut=i(Fe,"This model was contributed by "),ae=a(Fe,"A",{href:!0,rel:!0});var dn=s(ae);Vt=i(dn,"novice03"),dn.forEach(o),Kt=i(Fe,". The original code can be found "),se=a(Fe,"A",{href:!0,rel:!0});var cn=s(se);Yt=i(cn,"here"),cn.forEach(o),Zt=i(Fe,"."),Fe.forEach(o),mt=h(e),O=a(e,"H2",{class:!0});var $t=s(O);Y=a($t,"A",{id:!0,class:!0,href:!0});var hn=s(Y);Be=a(hn,"SPAN",{});var fn=s(Be);v(re.$$.fragment,fn),fn.forEach(o),hn.forEach(o),Rt=h($t),Ue=a($t,"SPAN",{});var mn=s(Ue);Gt=i(mn,"SwinConfig"),mn.forEach(o),$t.forEach(o),pt=h(e),k=a(e,"DIV",{class:!0});var Q=s(k);v(ie.$$.fragment,Q),Jt=h(Q),L=a(Q,"P",{});var qe=s(L);Qt=i(qe,"This is the configuration class to store the configuration of a "),Me=a(qe,"A",{href:!0});var pn=s(Me);Xt=i(pn,"SwinModel"),pn.forEach(o),eo=i(qe,`. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
`),le=a(qe,"A",{href:!0,rel:!0});var un=s(le);to=i(un,"microsoft/swin-tiny-patch4-window7-224"),un.forEach(o),oo=i(qe,`
architecture.`),qe.forEach(o),no=h(Q),N=a(Q,"P",{});var ze=s(N);ao=i(ze,"Configuration objects inherit from "),Pe=a(ze,"A",{href:!0});var gn=s(Pe);so=i(gn,"PretrainedConfig"),gn.forEach(o),ro=i(ze,` and can be used to control the model outputs. Read the
documentation from `),Ie=a(ze,"A",{href:!0});var _n=s(Ie);io=i(_n,"PretrainedConfig"),_n.forEach(o),lo=i(ze," for more information."),ze.forEach(o),co=h(Q),v(de.$$.fragment,Q),Q.forEach(o),ut=h(e),D=a(e,"H2",{class:!0});var Tt=s(D);Z=a(Tt,"A",{id:!0,class:!0,href:!0});var wn=s(Z);Ve=a(wn,"SPAN",{});var vn=s(Ve);v(ce.$$.fragment,vn),vn.forEach(o),wn.forEach(o),ho=h(Tt),Ke=a(Tt,"SPAN",{});var bn=s(Ke);fo=i(bn,"SwinModel"),bn.forEach(o),Tt.forEach(o),gt=h(e),I=a(e,"DIV",{class:!0});var Oe=s(I);v(he.$$.fragment,Oe),mo=h(Oe),fe=a(Oe,"P",{});var xt=s(fe);po=i(xt,`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),me=a(xt,"A",{href:!0,rel:!0});var Sn=s(me);uo=i(Sn,"torch.nn.Module"),Sn.forEach(o),go=i(xt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xt.forEach(o),_o=h(Oe),x=a(Oe,"DIV",{class:!0});var j=s(x);v(pe.$$.fragment,j),wo=h(j),W=a(j,"P",{});var Le=s(W);vo=i(Le,"The "),Ae=a(Le,"A",{href:!0});var yn=s(Ae);bo=i(yn,"SwinModel"),yn.forEach(o),So=i(Le," forward method, overrides the "),Ye=a(Le,"CODE",{});var $n=s(Ye);yo=i($n,"__call__"),$n.forEach(o),$o=i(Le," special method."),Le.forEach(o),To=h(j),v(R.$$.fragment,j),xo=h(j),Ze=a(j,"P",{});var Tn=s(Ze);Co=i(Tn,"Examples:"),Tn.forEach(o),Eo=h(j),v(ue.$$.fragment,j),j.forEach(o),Oe.forEach(o),_t=h(e),H=a(e,"H2",{class:!0});var Ct=s(H);G=a(Ct,"A",{id:!0,class:!0,href:!0});var xn=s(G);Re=a(xn,"SPAN",{});var Cn=s(Re);v(ge.$$.fragment,Cn),Cn.forEach(o),xn.forEach(o),ko=h(Ct),Ge=a(Ct,"SPAN",{});var En=s(Ge);Mo=i(En,"SwinForImageClassification"),En.forEach(o),Ct.forEach(o),wt=h(e),M=a(e,"DIV",{class:!0});var X=s(M);v(_e.$$.fragment,X),Po=h(X),Je=a(X,"P",{});var kn=s(Je);Io=i(kn,`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),kn.forEach(o),Ao=h(X),we=a(X,"P",{});var Et=s(we);jo=i(Et,"This model is a PyTorch "),ve=a(Et,"A",{href:!0,rel:!0});var Mn=s(ve);Fo=i(Mn,"torch.nn.Module"),Mn.forEach(o),qo=i(Et,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Et.forEach(o),zo=h(X),C=a(X,"DIV",{class:!0});var F=s(C);v(be.$$.fragment,F),Oo=h(F),B=a(F,"P",{});var Ne=s(B);Lo=i(Ne,"The "),je=a(Ne,"A",{href:!0});var Pn=s(je);No=i(Pn,"SwinForImageClassification"),Pn.forEach(o),Do=i(Ne," forward method, overrides the "),Qe=a(Ne,"CODE",{});var In=s(Qe);Wo=i(In,"__call__"),In.forEach(o),Ho=i(Ne," special method."),Ne.forEach(o),Bo=h(F),v(J.$$.fragment,F),Uo=h(F),Xe=a(F,"P",{});var An=s(Xe);Vo=i(An,"Examples:"),An.forEach(o),Ko=h(F),v(Se.$$.fragment,F),F.forEach(o),X.forEach(o),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(Hn)),l(u,"id","swin-transformer"),l(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(u,"href","#swin-transformer"),l(p,"class","relative group"),l(U,"id","overview"),l(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(U,"href","#overview"),l(q,"class","relative group"),l(oe,"href","https://arxiv.org/abs/2103.14030"),l(oe,"rel","nofollow"),l(Ee,"href","/docs/transformers/v4.16.2/en/model_doc/auto#transformers.AutoFeatureExtractor"),Ln(V.src,Zo="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/swin_transformer_architecture.png")||l(V,"src",Zo),l(V,"alt","drawing"),l(V,"width","600"),l(ke,"href","https://arxiv.org/abs/2102.03334"),l(ae,"href","https://huggingface.co/novice03%3E"),l(ae,"rel","nofollow"),l(se,"href","https://github.com/microsoft/Swin-Transformer"),l(se,"rel","nofollow"),l(Y,"id","transformers.SwinConfig"),l(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Y,"href","#transformers.SwinConfig"),l(O,"class","relative group"),l(Me,"href","/docs/transformers/v4.16.2/en/model_doc/swin#transformers.SwinModel"),l(le,"href","https://huggingface.co/microsoft/swin-tiny-patch4-window7-224"),l(le,"rel","nofollow"),l(Pe,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),l(Ie,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),l(k,"class","docstring"),l(Z,"id","transformers.SwinModel"),l(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Z,"href","#transformers.SwinModel"),l(D,"class","relative group"),l(me,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(me,"rel","nofollow"),l(Ae,"href","/docs/transformers/v4.16.2/en/model_doc/swin#transformers.SwinModel"),l(x,"class","docstring"),l(I,"class","docstring"),l(G,"id","transformers.SwinForImageClassification"),l(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(G,"href","#transformers.SwinForImageClassification"),l(H,"class","relative group"),l(ve,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ve,"rel","nofollow"),l(je,"href","/docs/transformers/v4.16.2/en/model_doc/swin#transformers.SwinForImageClassification"),l(C,"class","docstring"),l(M,"class","docstring")},m(e,d){t(document.head,m),f(e,T,d),f(e,p,d),t(p,u),t(u,E),b(g,E,null),t(p,_),t(p,P),t(P,kt),f(e,at,d),f(e,q,d),t(q,U),t(U,De),b(te,De,null),t(q,Mt),t(q,We),t(We,Pt),f(e,st,d),f(e,z,d),t(z,It),t(z,oe),t(oe,At),t(z,jt),t(z,Ft),f(e,rt,d),f(e,$e,d),t($e,qt),f(e,it,d),f(e,Te,d),t(Te,He),t(He,zt),f(e,lt,d),f(e,xe,d),t(xe,Ot),f(e,dt,d),f(e,Ce,d),t(Ce,ne),t(ne,Lt),t(ne,Ee),t(Ee,Nt),t(ne,Dt),f(e,ct,d),f(e,V,d),f(e,ht,d),f(e,K,d),t(K,Wt),t(K,ke),t(ke,Ht),t(K,Bt),f(e,ft,d),f(e,A,d),t(A,Ut),t(A,ae),t(ae,Vt),t(A,Kt),t(A,se),t(se,Yt),t(A,Zt),f(e,mt,d),f(e,O,d),t(O,Y),t(Y,Be),b(re,Be,null),t(O,Rt),t(O,Ue),t(Ue,Gt),f(e,pt,d),f(e,k,d),b(ie,k,null),t(k,Jt),t(k,L),t(L,Qt),t(L,Me),t(Me,Xt),t(L,eo),t(L,le),t(le,to),t(L,oo),t(k,no),t(k,N),t(N,ao),t(N,Pe),t(Pe,so),t(N,ro),t(N,Ie),t(Ie,io),t(N,lo),t(k,co),b(de,k,null),f(e,ut,d),f(e,D,d),t(D,Z),t(Z,Ve),b(ce,Ve,null),t(D,ho),t(D,Ke),t(Ke,fo),f(e,gt,d),f(e,I,d),b(he,I,null),t(I,mo),t(I,fe),t(fe,po),t(fe,me),t(me,uo),t(fe,go),t(I,_o),t(I,x),b(pe,x,null),t(x,wo),t(x,W),t(W,vo),t(W,Ae),t(Ae,bo),t(W,So),t(W,Ye),t(Ye,yo),t(W,$o),t(x,To),b(R,x,null),t(x,xo),t(x,Ze),t(Ze,Co),t(x,Eo),b(ue,x,null),f(e,_t,d),f(e,H,d),t(H,G),t(G,Re),b(ge,Re,null),t(H,ko),t(H,Ge),t(Ge,Mo),f(e,wt,d),f(e,M,d),b(_e,M,null),t(M,Po),t(M,Je),t(Je,Io),t(M,Ao),t(M,we),t(we,jo),t(we,ve),t(ve,Fo),t(we,qo),t(M,zo),t(M,C),b(be,C,null),t(C,Oo),t(C,B),t(B,Lo),t(B,je),t(je,No),t(B,Do),t(B,Qe),t(Qe,Wo),t(B,Ho),t(C,Bo),b(J,C,null),t(C,Uo),t(C,Xe),t(Xe,Vo),t(C,Ko),b(Se,C,null),vt=!0},p(e,[d]){const ye={};d&2&&(ye.$$scope={dirty:d,ctx:e}),R.$set(ye);const et={};d&2&&(et.$$scope={dirty:d,ctx:e}),J.$set(et)},i(e){vt||(S(g.$$.fragment,e),S(te.$$.fragment,e),S(re.$$.fragment,e),S(ie.$$.fragment,e),S(de.$$.fragment,e),S(ce.$$.fragment,e),S(he.$$.fragment,e),S(pe.$$.fragment,e),S(R.$$.fragment,e),S(ue.$$.fragment,e),S(ge.$$.fragment,e),S(_e.$$.fragment,e),S(be.$$.fragment,e),S(J.$$.fragment,e),S(Se.$$.fragment,e),vt=!0)},o(e){y(g.$$.fragment,e),y(te.$$.fragment,e),y(re.$$.fragment,e),y(ie.$$.fragment,e),y(de.$$.fragment,e),y(ce.$$.fragment,e),y(he.$$.fragment,e),y(pe.$$.fragment,e),y(R.$$.fragment,e),y(ue.$$.fragment,e),y(ge.$$.fragment,e),y(_e.$$.fragment,e),y(be.$$.fragment,e),y(J.$$.fragment,e),y(Se.$$.fragment,e),vt=!1},d(e){o(m),e&&o(T),e&&o(p),$(g),e&&o(at),e&&o(q),$(te),e&&o(st),e&&o(z),e&&o(rt),e&&o($e),e&&o(it),e&&o(Te),e&&o(lt),e&&o(xe),e&&o(dt),e&&o(Ce),e&&o(ct),e&&o(V),e&&o(ht),e&&o(K),e&&o(ft),e&&o(A),e&&o(mt),e&&o(O),$(re),e&&o(pt),e&&o(k),$(ie),$(de),e&&o(ut),e&&o(D),$(ce),e&&o(gt),e&&o(I),$(he),$(pe),$(R),$(ue),e&&o(_t),e&&o(H),$(ge),e&&o(wt),e&&o(M),$(_e),$(be),$(J),$(Se)}}}const Hn={local:"swin-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.SwinConfig",title:"SwinConfig"},{local:"transformers.SwinModel",title:"SwinModel"},{local:"transformers.SwinForImageClassification",title:"SwinForImageClassification"}],title:"Swin Transformer"};function Bn(ee,m,T){let{fw:p}=m;return ee.$$set=u=>{"fw"in u&&T(0,p=u.fw)},[p]}class Gn extends Fn{constructor(m){super();qn(this,m,Bn,Wn,zn,{fw:0})}}export{Gn as default,Hn as metadata};
