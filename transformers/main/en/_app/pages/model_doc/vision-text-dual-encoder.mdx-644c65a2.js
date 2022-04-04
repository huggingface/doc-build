import{S as Nr,i as Or,s as Br,e as n,k as d,w as _,t as r,M as Wr,c as a,d as t,m as c,a as s,x as v,h as i,b as l,F as e,g as h,y as x,q as T,o as E,B as b,v as Rr}from"../../chunks/vendor-6b77c823.js";import{T as Sr}from"../../chunks/Tip-39098574.js";import{D as U}from"../../chunks/Docstring-abef54e3.js";import{C as ys}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as $t}from"../../chunks/IconCopyLink-7a11ce68.js";function Ur(et){let p,q,g,$,A;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),$=r("Module"),A=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(j){p=a(j,"P",{});var D=s(p);q=i(D,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(D,"CODE",{});var L=s(g);$=i(L,"Module"),L.forEach(t),A=i(D,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),D.forEach(t)},m(j,D){h(j,p,D),e(p,q),e(p,g),e(g,$),e(p,A)},d(j){j&&t(p)}}}function Jr(et){let p,q,g,$,A;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),$=r("Module"),A=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(j){p=a(j,"P",{});var D=s(p);q=i(D,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(D,"CODE",{});var L=s(g);$=i(L,"Module"),L.forEach(t),A=i(D,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),D.forEach(t)},m(j,D){h(j,p,D),e(p,q),e(p,g),e(g,$),e(p,A)},d(j){j&&t(p)}}}function Hr(et){let p,q,g,$,A,j,D,L,Lo,no,J,ee,Pt,he,So,Mt,No,ao,u,Oo,tt,Bo,Wo,zt,Ro,Uo,ot,Jo,Ho,nt,Zo,Go,at,Xo,Ko,Ct,Qo,Yo,st,en,tn,rt,on,nn,so,te,an,fe,sn,rn,ro,H,oe,Ft,ue,ln,It,dn,io,w,ge,cn,O,it,mn,pn,lt,hn,fn,dt,un,gn,_n,Z,vn,ct,xn,Tn,mt,En,bn,jn,At,wn,yn,_e,kn,ne,ve,Vn,xe,Dn,pt,$n,Pn,Mn,ae,Te,zn,Ee,Cn,ht,Fn,In,lo,G,se,qt,be,An,Lt,qn,co,P,je,Ln,St,Sn,Nn,M,ft,On,Bn,ut,Wn,Rn,gt,Un,Jn,Nt,Hn,Zn,_t,Gn,Xn,Kn,re,we,Qn,ye,Yn,vt,ea,ta,oa,ie,ke,na,Ve,aa,xt,sa,ra,mo,X,le,Ot,De,ia,Bt,la,po,y,$e,da,Pe,ca,Tt,ma,pa,ha,Me,fa,ze,ua,ga,_a,Wt,va,xa,Ce,Ta,Et,Ea,ba,ja,Fe,wa,Ie,ya,ka,Va,z,Ae,Da,K,$a,bt,Pa,Ma,Rt,za,Ca,Fa,de,Ia,Ut,Aa,qa,qe,ho,Q,ce,Jt,Le,La,Ht,Sa,fo,f,Se,Na,Ne,Oa,jt,Ba,Wa,Ra,Oe,Ua,Be,Ja,Ha,Za,Zt,Ga,Xa,We,Ka,wt,Qa,Ya,es,Re,ts,Ue,os,ns,as,Gt,ss,rs,S,Xt,Je,is,ls,Kt,He,ds,cs,Qt,Ze,ms,ps,Yt,Ge,hs,fs,C,Xe,us,Y,gs,yt,_s,vs,eo,xs,Ts,Es,me,bs,to,js,ws,Ke,uo;return j=new $t({}),he=new $t({}),ue=new $t({}),ge=new U({props:{name:"class transformers.VisionTextDualEncoderConfig",anchor:"transformers.VisionTextDualEncoderConfig",parameters:[{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L28",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>) &#x2014;
Dictionary of configuration options that defines text model config.`,name:"text_config_dict"},{anchor:"transformers.VisionTextDualEncoderConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>) &#x2014;
Dictionary of configuration options that defines vison model config.`,name:"vision_config_dict"},{anchor:"transformers.VisionTextDualEncoderConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.VisionTextDualEncoderConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.VisionTextDualEncoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}]}}),_e=new ys({props:{code:`from transformers import ViTConfig, BertConfig, VisionTextDualEncoderConfig, VisionTextDualEncoderModel

# Initializing a BERT and ViT configuration
config_vision = ViTConfig()
config_text = BertConfig()

config = VisionTextDualEncoderConfig.from_vision_text_configs(config_vision, config_text, projection_dim=512)

# Initializing a BERT and ViT model
model = VisionTextDualEncoderModel(config=config)

# Accessing the model configuration
config_vision = model.config.vision_config
config_text = model.config.text_config

# Saving the model, including its configuration
model.save_pretrained("my-model")

# loading model and config from pretrained folder
vision_text_config = VisionTextDualEncoderConfig.from_pretrained("vit-bert")
model = VisionTextDualEncoderModel.from_pretrained("vit-bert", config=vision_text_config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTConfig, BertConfig, VisionTextDualEncoderConfig, VisionTextDualEncoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BERT and ViT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_vision = ViTConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_text = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = VisionTextDualEncoderConfig.from_vision_text_configs(config_vision, config_text, projection_dim=<span class="hljs-number">512</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BERT and ViT model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionTextDualEncoderModel(config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_vision = model.config.vision_config
<span class="hljs-meta">&gt;&gt;&gt; </span>config_text = model.config.text_config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Saving the model, including its configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading model and config from pretrained folder</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>vision_text_config = VisionTextDualEncoderConfig.from_pretrained(<span class="hljs-string">&quot;vit-bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionTextDualEncoderModel.from_pretrained(<span class="hljs-string">&quot;vit-bert&quot;</span>, config=vision_text_config)`}}),ve=new U({props:{name:"from_vision_text_configs",anchor:"transformers.VisionTextDualEncoderConfig.from_vision_text_configs",parameters:[{name:"vision_config",val:": PretrainedConfig"},{name:"text_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L105",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"
>VisionTextDualEncoderConfig</a></p>
`}}),Te=new U({props:{name:"to_dict",anchor:"transformers.VisionTextDualEncoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L117",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),be=new $t({}),je=new U({props:{name:"class transformers.VisionTextDualEncoderProcessor",anchor:"transformers.VisionTextDualEncoderProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L23",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.VisionTextDualEncoderProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}]}}),we=new U({props:{name:"batch_decode",anchor:"transformers.VisionTextDualEncoderProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L98"}}),ke=new U({props:{name:"decode",anchor:"transformers.VisionTextDualEncoderProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L105"}}),De=new $t({}),$e=new U({props:{name:"class transformers.VisionTextDualEncoderModel",anchor:"transformers.VisionTextDualEncoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.models.vision_text_dual_encoder.configuration_vision_text_dual_encoder.VisionTextDualEncoderConfig] = None"},{name:"vision_model",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"text_model",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/modeling_vision_text_dual_encoder.py#L162",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ae=new U({props:{name:"forward",anchor:"transformers.VisionTextDualEncoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"return_loss",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/modeling_vision_text_dual_encoder.py#L294",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.VisionTextDualEncoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.VisionTextDualEncoderModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.VisionTextDualEncoderModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
a feature extractor (e.g. if you use ViT as the encoder, you should use <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>). See
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VisionTextDualEncoderModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.VisionTextDualEncoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisionTextDualEncoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisionTextDualEncoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_clip.CLIPOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"
>VisionTextDualEncoderConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.</li>
<li><strong>logits_per_image:(<code>torch.FloatTensor</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>torch.FloatTensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_clip.CLIPOutput</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),de=new Sr({props:{$$slots:{default:[Ur]},$$scope:{ctx:et}}}),qe=new ys({props:{code:`from PIL import Image
import requests
from transformers import (
    VisionTextDualEncoderModel,
    VisionTextDualEncoderProcessor,
    ViTFeatureExtractor,
    BertTokenizer,
)

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
processor = VisionTextDualEncoderProcessor(feature_extractor, tokenizer)
model = VisionTextDualEncoderModel.from_vision_text_pretrained(
    "google/vit-base-patch16-224", "bert-base-uncased"
)

# contrastive training
urls = [
    "http://images.cocodataset.org/val2017/000000039769.jpg",
    "https://farm3.staticflickr.com/2674/5850229113_4fe05d5265_z.jpg",
]
images = [Image.open(requests.get(url, stream=True).raw) for url in urls]
inputs = processor(
    text=["a photo of a cat", "a photo of a dog"], images=images, return_tensors="pt", padding=True
)
outputs = model(
    input_ids=inputs.input_ids,
    attention_mask=inputs.attention_mask,
    pixel_values=inputs.pixel_values,
    return_loss=True,
)
loss, logits_per_image = outputs.loss, outputs.logits_per_image  # this is the image-text similarity score

# save and load from pretrained
model.save_pretrained("vit-bert")
model = VisionTextDualEncoderModel.from_pretrained("vit-bert")

# inference
outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = logits_per_image.softmax(dim=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    VisionTextDualEncoderModel,
<span class="hljs-meta">... </span>    VisionTextDualEncoderProcessor,
<span class="hljs-meta">... </span>    ViTFeatureExtractor,
<span class="hljs-meta">... </span>    BertTokenizer,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = VisionTextDualEncoderProcessor(feature_extractor, tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionTextDualEncoderModel.from_vision_text_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># contrastive training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>urls = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;https://farm3.staticflickr.com/2674/5850229113_4fe05d5265_z.jpg&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>images = [Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw) <span class="hljs-keyword">for</span> url <span class="hljs-keyword">in</span> urls]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=images, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=inputs.input_ids,
<span class="hljs-meta">... </span>    attention_mask=inputs.attention_mask,
<span class="hljs-meta">... </span>    pixel_values=inputs.pixel_values,
<span class="hljs-meta">... </span>    return_loss=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits_per_image = outputs.loss, outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># save and load from pretrained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;vit-bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionTextDualEncoderModel.from_pretrained(<span class="hljs-string">&quot;vit-bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Le=new $t({}),Se=new U({props:{name:"class transformers.FlaxVisionTextDualEncoderModel",anchor:"transformers.FlaxVisionTextDualEncoderModel",parameters:[{name:"config",val:": VisionTextDualEncoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/modeling_flax_vision_text_dual_encoder.py#L218",parametersDescription:[{anchor:"transformers.FlaxVisionTextDualEncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig">VisionTextDualEncoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Xe=new U({props:{name:"__call__",anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/modeling_flax_vision_text_dual_encoder.py#L250",parametersDescription:[{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
a feature extractor (e.g. if you use ViT as the encoder, you should use <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>). See
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"
>VisionTextDualEncoderConfig</a>) and inputs.</p>
<ul>
<li><strong>logits_per_image:(<code>jnp.ndarray</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>jnp.ndarray</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),me=new Sr({props:{$$slots:{default:[Jr]},$$scope:{ctx:et}}}),Ke=new ys({props:{code:`from PIL import Image
import requests
import jax
from transformers import (
    FlaxVisionTextDualEncoderModel,
    VisionTextDualEncoderProcessor,
    ViTFeatureExtractor,
    BertTokenizer,
)

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
processor = VisionTextDualEncoderProcessor(feature_extractor, tokenizer)
model = FlaxVisionTextDualEncoderModel.from_vision_text_pretrained(
    "google/vit-base-patch16-224", "bert-base-uncased"
)

# contrastive training
urls = [
    "http://images.cocodataset.org/val2017/000000039769.jpg",
    "https://farm3.staticflickr.com/2674/5850229113_4fe05d5265_z.jpg",
]
images = [Image.open(requests.get(url, stream=True).raw) for url in urls]
inputs = processor(
    text=["a photo of a cat", "a photo of a dog"], images=images, return_tensors="np", padding=True
)
outputs = model(
    input_ids=inputs.input_ids,
    attention_mask=inputs.attention_mask,
    pixel_values=inputs.pixel_values,
)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score

# save and load from pretrained
model.save_pretrained("vit-bert")
model = FlaxVisionTextDualEncoderModel.from_pretrained("vit-bert")

# inference
outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = jax.nn.softmax(logits_per_image, axis=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    FlaxVisionTextDualEncoderModel,
<span class="hljs-meta">... </span>    VisionTextDualEncoderProcessor,
<span class="hljs-meta">... </span>    ViTFeatureExtractor,
<span class="hljs-meta">... </span>    BertTokenizer,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = VisionTextDualEncoderProcessor(feature_extractor, tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxVisionTextDualEncoderModel.from_vision_text_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># contrastive training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>urls = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;https://farm3.staticflickr.com/2674/5850229113_4fe05d5265_z.jpg&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>images = [Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw) <span class="hljs-keyword">for</span> url <span class="hljs-keyword">in</span> urls]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=images, return_tensors=<span class="hljs-string">&quot;np&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=inputs.input_ids,
<span class="hljs-meta">... </span>    attention_mask=inputs.attention_mask,
<span class="hljs-meta">... </span>    pixel_values=inputs.pixel_values,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># save and load from pretrained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;vit-bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxVisionTextDualEncoderModel.from_pretrained(<span class="hljs-string">&quot;vit-bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){p=n("meta"),q=d(),g=n("h1"),$=n("a"),A=n("span"),_(j.$$.fragment),D=d(),L=n("span"),Lo=r("VisionTextDualEncoder"),no=d(),J=n("h2"),ee=n("a"),Pt=n("span"),_(he.$$.fragment),So=d(),Mt=n("span"),No=r("Overview"),ao=d(),u=n("p"),Oo=r("The "),tt=n("a"),Bo=r("VisionTextDualEncoderModel"),Wo=r(` can be used to initialize a vision-text dual encoder model with
any pretrained vision autoencoding model as the vision encoder (`),zt=n("em"),Ro=r("e.g."),Uo=d(),ot=n("a"),Jo=r("ViT"),Ho=r(", "),nt=n("a"),Zo=r("BEiT"),Go=r(", "),at=n("a"),Xo=r("DeiT"),Ko=r(") and any pretrained text autoencoding model as the text encoder ("),Ct=n("em"),Qo=r("e.g."),Yo=d(),st=n("a"),en=r("RoBERTa"),tn=r(", "),rt=n("a"),on=r("BERT"),nn=r(`). Two projection layers are added on top of both the vision and text encoder to project the output embeddings
to a shared latent space. The projection layers are randomly initialized so the model should be fine-tuned on a
downstream task. This model can be used to align the vision-text embeddings using CLIP like contrastive image-text
training and then can be used for zero-shot vision tasks such image-classification or retrieval.`),so=d(),te=n("p"),an=r("In "),fe=n("a"),sn=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),rn=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment on
new zero-shot vision tasks such as image classification or retrieval.`),ro=d(),H=n("h2"),oe=n("a"),Ft=n("span"),_(ue.$$.fragment),ln=d(),It=n("span"),dn=r("VisionTextDualEncoderConfig"),io=d(),w=n("div"),_(ge.$$.fragment),cn=d(),O=n("p"),it=n("a"),mn=r("VisionTextDualEncoderConfig"),pn=r(` is the configuration class to store the configuration of a
`),lt=n("a"),hn=r("VisionTextDualEncoderModel"),fn=r(". It is used to instantiate "),dt=n("a"),un=r("VisionTextDualEncoderModel"),gn=r(` model according to the
specified arguments, defining the text model and vision model configs.`),_n=d(),Z=n("p"),vn=r("Configuration objects inherit from "),ct=n("a"),xn=r("PretrainedConfig"),Tn=r(` and can be used to control the model outputs. Read the
documentation from `),mt=n("a"),En=r("PretrainedConfig"),bn=r(" for more information."),jn=d(),At=n("p"),wn=r("Examples:"),yn=d(),_(_e.$$.fragment),kn=d(),ne=n("div"),_(ve.$$.fragment),Vn=d(),xe=n("p"),Dn=r("Instantiate a "),pt=n("a"),$n=r("VisionTextDualEncoderConfig"),Pn=r(` (or a derived class) from text model configuration and vision
model configuration.`),Mn=d(),ae=n("div"),_(Te.$$.fragment),zn=d(),Ee=n("p"),Cn=r("Serializes this instance to a Python dictionary. Override the default "),ht=n("a"),Fn=r("to_dict()"),In=r("."),lo=d(),G=n("h2"),se=n("a"),qt=n("span"),_(be.$$.fragment),An=d(),Lt=n("span"),qn=r("VisionTextDualEncoderProcessor"),co=d(),P=n("div"),_(je.$$.fragment),Ln=d(),St=n("p"),Sn=r(`Constructs a VisionTextDualEncoder processor which wraps a vision feature extractor and a tokenizer into a single
processor.`),Nn=d(),M=n("p"),ft=n("a"),On=r("VisionTextDualEncoderProcessor"),Bn=r(" offers all the functionalities of "),ut=n("a"),Wn=r("AutoFeatureExtractor"),Rn=r(` and
`),gt=n("a"),Un=r("AutoTokenizer"),Jn=r(". See the "),Nt=n("code"),Hn=r("__call__()"),Zn=r(`and
`),_t=n("a"),Gn=r("decode()"),Xn=r(" for more information."),Kn=d(),re=n("div"),_(we.$$.fragment),Qn=d(),ye=n("p"),Yn=r(`This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s
`),vt=n("a"),ea=r("batch_decode()"),ta=r(". Please refer to the docstring of this method for more information."),oa=d(),ie=n("div"),_(ke.$$.fragment),na=d(),Ve=n("p"),aa=r("This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s "),xt=n("a"),sa=r("decode()"),ra=r(`.
Please refer to the docstring of this method for more information.`),mo=d(),X=n("h2"),le=n("a"),Ot=n("span"),_(De.$$.fragment),ia=d(),Bt=n("span"),la=r("VisionTextDualEncoderModel"),po=d(),y=n("div"),_($e.$$.fragment),da=d(),Pe=n("p"),ca=r(`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Tt=n("a"),ma=r("from_pretrained()"),pa=r(` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),ha=d(),Me=n("p"),fa=r("In "),ze=n("a"),ua=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),ga=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),_a=d(),Wt=n("p"),va=r(`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),xa=d(),Ce=n("p"),Ta=r("This model inherits from "),Et=n("a"),Ea=r("PreTrainedModel"),ba=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ja=d(),Fe=n("p"),wa=r("This model is also a PyTorch "),Ie=n("a"),ya=r("torch.nn.Module"),ka=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Va=d(),z=n("div"),_(Ae.$$.fragment),Da=d(),K=n("p"),$a=r("The "),bt=n("a"),Pa=r("VisionTextDualEncoderModel"),Ma=r(" forward method, overrides the "),Rt=n("code"),za=r("__call__"),Ca=r(" special method."),Fa=d(),_(de.$$.fragment),Ia=d(),Ut=n("p"),Aa=r("Examples:"),qa=d(),_(qe.$$.fragment),ho=d(),Q=n("h2"),ce=n("a"),Jt=n("span"),_(Le.$$.fragment),La=d(),Ht=n("span"),Sa=r("FlaxVisionTextDualEncoderModel"),fo=d(),f=n("div"),_(Se.$$.fragment),Na=d(),Ne=n("p"),Oa=r(`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),jt=n("a"),Ba=r("from_pretrained()"),Wa=r(` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Ra=d(),Oe=n("p"),Ua=r("In "),Be=n("a"),Ja=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),Ha=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Za=d(),Zt=n("p"),Ga=r(`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Xa=d(),We=n("p"),Ka=r("This model inherits from "),wt=n("a"),Qa=r("PreTrainedModel"),Ya=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),es=d(),Re=n("p"),ts=r("This model is also a Flax Linen "),Ue=n("a"),os=r("flax.linen.Module"),ns=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),as=d(),Gt=n("p"),ss=r("Finally, this model supports inherent JAX features such as:"),rs=d(),S=n("ul"),Xt=n("li"),Je=n("a"),is=r("Just-In-Time (JIT) compilation"),ls=d(),Kt=n("li"),He=n("a"),ds=r("Automatic Differentiation"),cs=d(),Qt=n("li"),Ze=n("a"),ms=r("Vectorization"),ps=d(),Yt=n("li"),Ge=n("a"),hs=r("Parallelization"),fs=d(),C=n("div"),_(Xe.$$.fragment),us=d(),Y=n("p"),gs=r("The "),yt=n("a"),_s=r("FlaxVisionTextDualEncoderModel"),vs=r(" forward method, overrides the "),eo=n("code"),xs=r("__call__"),Ts=r(" special method."),Es=d(),_(me.$$.fragment),bs=d(),to=n("p"),js=r("Examples:"),ws=d(),_(Ke.$$.fragment),this.h()},l(o){const m=Wr('[data-svelte="svelte-1phssyn"]',document.head);p=a(m,"META",{name:!0,content:!0}),m.forEach(t),q=c(o),g=a(o,"H1",{class:!0});var Qe=s(g);$=a(Qe,"A",{id:!0,class:!0,href:!0});var oo=s($);A=a(oo,"SPAN",{});var ks=s(A);v(j.$$.fragment,ks),ks.forEach(t),oo.forEach(t),D=c(Qe),L=a(Qe,"SPAN",{});var Vs=s(L);Lo=i(Vs,"VisionTextDualEncoder"),Vs.forEach(t),Qe.forEach(t),no=c(o),J=a(o,"H2",{class:!0});var go=s(J);ee=a(go,"A",{id:!0,class:!0,href:!0});var Ds=s(ee);Pt=a(Ds,"SPAN",{});var $s=s(Pt);v(he.$$.fragment,$s),$s.forEach(t),Ds.forEach(t),So=c(go),Mt=a(go,"SPAN",{});var Ps=s(Mt);No=i(Ps,"Overview"),Ps.forEach(t),go.forEach(t),ao=c(o),u=a(o,"P",{});var k=s(u);Oo=i(k,"The "),tt=a(k,"A",{href:!0});var Ms=s(tt);Bo=i(Ms,"VisionTextDualEncoderModel"),Ms.forEach(t),Wo=i(k,` can be used to initialize a vision-text dual encoder model with
any pretrained vision autoencoding model as the vision encoder (`),zt=a(k,"EM",{});var zs=s(zt);Ro=i(zs,"e.g."),zs.forEach(t),Uo=c(k),ot=a(k,"A",{href:!0});var Cs=s(ot);Jo=i(Cs,"ViT"),Cs.forEach(t),Ho=i(k,", "),nt=a(k,"A",{href:!0});var Fs=s(nt);Zo=i(Fs,"BEiT"),Fs.forEach(t),Go=i(k,", "),at=a(k,"A",{href:!0});var Is=s(at);Xo=i(Is,"DeiT"),Is.forEach(t),Ko=i(k,") and any pretrained text autoencoding model as the text encoder ("),Ct=a(k,"EM",{});var As=s(Ct);Qo=i(As,"e.g."),As.forEach(t),Yo=c(k),st=a(k,"A",{href:!0});var qs=s(st);en=i(qs,"RoBERTa"),qs.forEach(t),tn=i(k,", "),rt=a(k,"A",{href:!0});var Ls=s(rt);on=i(Ls,"BERT"),Ls.forEach(t),nn=i(k,`). Two projection layers are added on top of both the vision and text encoder to project the output embeddings
to a shared latent space. The projection layers are randomly initialized so the model should be fine-tuned on a
downstream task. This model can be used to align the vision-text embeddings using CLIP like contrastive image-text
training and then can be used for zero-shot vision tasks such image-classification or retrieval.`),k.forEach(t),so=c(o),te=a(o,"P",{});var _o=s(te);an=i(_o,"In "),fe=a(_o,"A",{href:!0,rel:!0});var Ss=s(fe);sn=i(Ss,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),Ss.forEach(t),rn=i(_o,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment on
new zero-shot vision tasks such as image classification or retrieval.`),_o.forEach(t),ro=c(o),H=a(o,"H2",{class:!0});var vo=s(H);oe=a(vo,"A",{id:!0,class:!0,href:!0});var Ns=s(oe);Ft=a(Ns,"SPAN",{});var Os=s(Ft);v(ue.$$.fragment,Os),Os.forEach(t),Ns.forEach(t),ln=c(vo),It=a(vo,"SPAN",{});var Bs=s(It);dn=i(Bs,"VisionTextDualEncoderConfig"),Bs.forEach(t),vo.forEach(t),io=c(o),w=a(o,"DIV",{class:!0});var F=s(w);v(ge.$$.fragment,F),cn=c(F),O=a(F,"P",{});var Ye=s(O);it=a(Ye,"A",{href:!0});var Ws=s(it);mn=i(Ws,"VisionTextDualEncoderConfig"),Ws.forEach(t),pn=i(Ye,` is the configuration class to store the configuration of a
`),lt=a(Ye,"A",{href:!0});var Rs=s(lt);hn=i(Rs,"VisionTextDualEncoderModel"),Rs.forEach(t),fn=i(Ye,". It is used to instantiate "),dt=a(Ye,"A",{href:!0});var Us=s(dt);un=i(Us,"VisionTextDualEncoderModel"),Us.forEach(t),gn=i(Ye,` model according to the
specified arguments, defining the text model and vision model configs.`),Ye.forEach(t),_n=c(F),Z=a(F,"P",{});var kt=s(Z);vn=i(kt,"Configuration objects inherit from "),ct=a(kt,"A",{href:!0});var Js=s(ct);xn=i(Js,"PretrainedConfig"),Js.forEach(t),Tn=i(kt,` and can be used to control the model outputs. Read the
documentation from `),mt=a(kt,"A",{href:!0});var Hs=s(mt);En=i(Hs,"PretrainedConfig"),Hs.forEach(t),bn=i(kt," for more information."),kt.forEach(t),jn=c(F),At=a(F,"P",{});var Zs=s(At);wn=i(Zs,"Examples:"),Zs.forEach(t),yn=c(F),v(_e.$$.fragment,F),kn=c(F),ne=a(F,"DIV",{class:!0});var xo=s(ne);v(ve.$$.fragment,xo),Vn=c(xo),xe=a(xo,"P",{});var To=s(xe);Dn=i(To,"Instantiate a "),pt=a(To,"A",{href:!0});var Gs=s(pt);$n=i(Gs,"VisionTextDualEncoderConfig"),Gs.forEach(t),Pn=i(To,` (or a derived class) from text model configuration and vision
model configuration.`),To.forEach(t),xo.forEach(t),Mn=c(F),ae=a(F,"DIV",{class:!0});var Eo=s(ae);v(Te.$$.fragment,Eo),zn=c(Eo),Ee=a(Eo,"P",{});var bo=s(Ee);Cn=i(bo,"Serializes this instance to a Python dictionary. Override the default "),ht=a(bo,"A",{href:!0});var Xs=s(ht);Fn=i(Xs,"to_dict()"),Xs.forEach(t),In=i(bo,"."),bo.forEach(t),Eo.forEach(t),F.forEach(t),lo=c(o),G=a(o,"H2",{class:!0});var jo=s(G);se=a(jo,"A",{id:!0,class:!0,href:!0});var Ks=s(se);qt=a(Ks,"SPAN",{});var Qs=s(qt);v(be.$$.fragment,Qs),Qs.forEach(t),Ks.forEach(t),An=c(jo),Lt=a(jo,"SPAN",{});var Ys=s(Lt);qn=i(Ys,"VisionTextDualEncoderProcessor"),Ys.forEach(t),jo.forEach(t),co=c(o),P=a(o,"DIV",{class:!0});var B=s(P);v(je.$$.fragment,B),Ln=c(B),St=a(B,"P",{});var er=s(St);Sn=i(er,`Constructs a VisionTextDualEncoder processor which wraps a vision feature extractor and a tokenizer into a single
processor.`),er.forEach(t),Nn=c(B),M=a(B,"P",{});var N=s(M);ft=a(N,"A",{href:!0});var tr=s(ft);On=i(tr,"VisionTextDualEncoderProcessor"),tr.forEach(t),Bn=i(N," offers all the functionalities of "),ut=a(N,"A",{href:!0});var or=s(ut);Wn=i(or,"AutoFeatureExtractor"),or.forEach(t),Rn=i(N,` and
`),gt=a(N,"A",{href:!0});var nr=s(gt);Un=i(nr,"AutoTokenizer"),nr.forEach(t),Jn=i(N,". See the "),Nt=a(N,"CODE",{});var ar=s(Nt);Hn=i(ar,"__call__()"),ar.forEach(t),Zn=i(N,`and
`),_t=a(N,"A",{href:!0});var sr=s(_t);Gn=i(sr,"decode()"),sr.forEach(t),Xn=i(N," for more information."),N.forEach(t),Kn=c(B),re=a(B,"DIV",{class:!0});var wo=s(re);v(we.$$.fragment,wo),Qn=c(wo),ye=a(wo,"P",{});var yo=s(ye);Yn=i(yo,`This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s
`),vt=a(yo,"A",{href:!0});var rr=s(vt);ea=i(rr,"batch_decode()"),rr.forEach(t),ta=i(yo,". Please refer to the docstring of this method for more information."),yo.forEach(t),wo.forEach(t),oa=c(B),ie=a(B,"DIV",{class:!0});var ko=s(ie);v(ke.$$.fragment,ko),na=c(ko),Ve=a(ko,"P",{});var Vo=s(Ve);aa=i(Vo,"This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s "),xt=a(Vo,"A",{href:!0});var ir=s(xt);sa=i(ir,"decode()"),ir.forEach(t),ra=i(Vo,`.
Please refer to the docstring of this method for more information.`),Vo.forEach(t),ko.forEach(t),B.forEach(t),mo=c(o),X=a(o,"H2",{class:!0});var Do=s(X);le=a(Do,"A",{id:!0,class:!0,href:!0});var lr=s(le);Ot=a(lr,"SPAN",{});var dr=s(Ot);v(De.$$.fragment,dr),dr.forEach(t),lr.forEach(t),ia=c(Do),Bt=a(Do,"SPAN",{});var cr=s(Bt);la=i(cr,"VisionTextDualEncoderModel"),cr.forEach(t),Do.forEach(t),po=c(o),y=a(o,"DIV",{class:!0});var I=s(y);v($e.$$.fragment,I),da=c(I),Pe=a(I,"P",{});var $o=s(Pe);ca=i($o,`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Tt=a($o,"A",{href:!0});var mr=s(Tt);ma=i(mr,"from_pretrained()"),mr.forEach(t),pa=i($o,` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),$o.forEach(t),ha=c(I),Me=a(I,"P",{});var Po=s(Me);fa=i(Po,"In "),ze=a(Po,"A",{href:!0,rel:!0});var pr=s(ze);ua=i(pr,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),pr.forEach(t),ga=i(Po,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Po.forEach(t),_a=c(I),Wt=a(I,"P",{});var hr=s(Wt);va=i(hr,`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),hr.forEach(t),xa=c(I),Ce=a(I,"P",{});var Mo=s(Ce);Ta=i(Mo,"This model inherits from "),Et=a(Mo,"A",{href:!0});var fr=s(Et);Ea=i(fr,"PreTrainedModel"),fr.forEach(t),ba=i(Mo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mo.forEach(t),ja=c(I),Fe=a(I,"P",{});var zo=s(Fe);wa=i(zo,"This model is also a PyTorch "),Ie=a(zo,"A",{href:!0,rel:!0});var ur=s(Ie);ya=i(ur,"torch.nn.Module"),ur.forEach(t),ka=i(zo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zo.forEach(t),Va=c(I),z=a(I,"DIV",{class:!0});var W=s(z);v(Ae.$$.fragment,W),Da=c(W),K=a(W,"P",{});var Vt=s(K);$a=i(Vt,"The "),bt=a(Vt,"A",{href:!0});var gr=s(bt);Pa=i(gr,"VisionTextDualEncoderModel"),gr.forEach(t),Ma=i(Vt," forward method, overrides the "),Rt=a(Vt,"CODE",{});var _r=s(Rt);za=i(_r,"__call__"),_r.forEach(t),Ca=i(Vt," special method."),Vt.forEach(t),Fa=c(W),v(de.$$.fragment,W),Ia=c(W),Ut=a(W,"P",{});var vr=s(Ut);Aa=i(vr,"Examples:"),vr.forEach(t),qa=c(W),v(qe.$$.fragment,W),W.forEach(t),I.forEach(t),ho=c(o),Q=a(o,"H2",{class:!0});var Co=s(Q);ce=a(Co,"A",{id:!0,class:!0,href:!0});var xr=s(ce);Jt=a(xr,"SPAN",{});var Tr=s(Jt);v(Le.$$.fragment,Tr),Tr.forEach(t),xr.forEach(t),La=c(Co),Ht=a(Co,"SPAN",{});var Er=s(Ht);Sa=i(Er,"FlaxVisionTextDualEncoderModel"),Er.forEach(t),Co.forEach(t),fo=c(o),f=a(o,"DIV",{class:!0});var V=s(f);v(Se.$$.fragment,V),Na=c(V),Ne=a(V,"P",{});var Fo=s(Ne);Oa=i(Fo,`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),jt=a(Fo,"A",{href:!0});var br=s(jt);Ba=i(br,"from_pretrained()"),br.forEach(t),Wa=i(Fo,` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Fo.forEach(t),Ra=c(V),Oe=a(V,"P",{});var Io=s(Oe);Ua=i(Io,"In "),Be=a(Io,"A",{href:!0,rel:!0});var jr=s(Be);Ja=i(jr,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),jr.forEach(t),Ha=i(Io,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Io.forEach(t),Za=c(V),Zt=a(V,"P",{});var wr=s(Zt);Ga=i(wr,`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),wr.forEach(t),Xa=c(V),We=a(V,"P",{});var Ao=s(We);Ka=i(Ao,"This model inherits from "),wt=a(Ao,"A",{href:!0});var yr=s(wt);Qa=i(yr,"PreTrainedModel"),yr.forEach(t),Ya=i(Ao,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ao.forEach(t),es=c(V),Re=a(V,"P",{});var qo=s(Re);ts=i(qo,"This model is also a Flax Linen "),Ue=a(qo,"A",{href:!0,rel:!0});var kr=s(Ue);os=i(kr,"flax.linen.Module"),kr.forEach(t),ns=i(qo,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qo.forEach(t),as=c(V),Gt=a(V,"P",{});var Vr=s(Gt);ss=i(Vr,"Finally, this model supports inherent JAX features such as:"),Vr.forEach(t),rs=c(V),S=a(V,"UL",{});var pe=s(S);Xt=a(pe,"LI",{});var Dr=s(Xt);Je=a(Dr,"A",{href:!0,rel:!0});var $r=s(Je);is=i($r,"Just-In-Time (JIT) compilation"),$r.forEach(t),Dr.forEach(t),ls=c(pe),Kt=a(pe,"LI",{});var Pr=s(Kt);He=a(Pr,"A",{href:!0,rel:!0});var Mr=s(He);ds=i(Mr,"Automatic Differentiation"),Mr.forEach(t),Pr.forEach(t),cs=c(pe),Qt=a(pe,"LI",{});var zr=s(Qt);Ze=a(zr,"A",{href:!0,rel:!0});var Cr=s(Ze);ms=i(Cr,"Vectorization"),Cr.forEach(t),zr.forEach(t),ps=c(pe),Yt=a(pe,"LI",{});var Fr=s(Yt);Ge=a(Fr,"A",{href:!0,rel:!0});var Ir=s(Ge);hs=i(Ir,"Parallelization"),Ir.forEach(t),Fr.forEach(t),pe.forEach(t),fs=c(V),C=a(V,"DIV",{class:!0});var R=s(C);v(Xe.$$.fragment,R),us=c(R),Y=a(R,"P",{});var Dt=s(Y);gs=i(Dt,"The "),yt=a(Dt,"A",{href:!0});var Ar=s(yt);_s=i(Ar,"FlaxVisionTextDualEncoderModel"),Ar.forEach(t),vs=i(Dt," forward method, overrides the "),eo=a(Dt,"CODE",{});var qr=s(eo);xs=i(qr,"__call__"),qr.forEach(t),Ts=i(Dt," special method."),Dt.forEach(t),Es=c(R),v(me.$$.fragment,R),bs=c(R),to=a(R,"P",{});var Lr=s(to);js=i(Lr,"Examples:"),Lr.forEach(t),ws=c(R),v(Ke.$$.fragment,R),R.forEach(t),V.forEach(t),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(Zr)),l($,"id","visiontextdualencoder"),l($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l($,"href","#visiontextdualencoder"),l(g,"class","relative group"),l(ee,"id","overview"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#overview"),l(J,"class","relative group"),l(tt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(ot,"href","vit"),l(nt,"href","beit"),l(at,"href","deit"),l(st,"href","roberta"),l(rt,"href","bert"),l(fe,"href","https://arxiv.org/abs/2111.07991"),l(fe,"rel","nofollow"),l(oe,"id","transformers.VisionTextDualEncoderConfig"),l(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(oe,"href","#transformers.VisionTextDualEncoderConfig"),l(H,"class","relative group"),l(it,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"),l(lt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(dt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(ct,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(mt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(pt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"),l(ne,"class","docstring"),l(ht,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig.to_dict"),l(ae,"class","docstring"),l(w,"class","docstring"),l(se,"id","transformers.VisionTextDualEncoderProcessor"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#transformers.VisionTextDualEncoderProcessor"),l(G,"class","relative group"),l(ft,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderProcessor"),l(ut,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor"),l(gt,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer"),l(_t,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderProcessor.decode"),l(vt,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.batch_decode"),l(re,"class","docstring"),l(xt,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.decode"),l(ie,"class","docstring"),l(P,"class","docstring"),l(le,"id","transformers.VisionTextDualEncoderModel"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.VisionTextDualEncoderModel"),l(X,"class","relative group"),l(Tt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(ze,"href","https://arxiv.org/abs/2111.07991"),l(ze,"rel","nofollow"),l(Et,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Ie,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ie,"rel","nofollow"),l(bt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(z,"class","docstring"),l(y,"class","docstring"),l(ce,"id","transformers.FlaxVisionTextDualEncoderModel"),l(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ce,"href","#transformers.FlaxVisionTextDualEncoderModel"),l(Q,"class","relative group"),l(jt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Be,"href","https://arxiv.org/abs/2111.07991"),l(Be,"rel","nofollow"),l(wt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Ue,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(Ue,"rel","nofollow"),l(Je,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(Je,"rel","nofollow"),l(He,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(He,"rel","nofollow"),l(Ze,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Ze,"rel","nofollow"),l(Ge,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(Ge,"rel","nofollow"),l(yt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.FlaxVisionTextDualEncoderModel"),l(C,"class","docstring"),l(f,"class","docstring")},m(o,m){e(document.head,p),h(o,q,m),h(o,g,m),e(g,$),e($,A),x(j,A,null),e(g,D),e(g,L),e(L,Lo),h(o,no,m),h(o,J,m),e(J,ee),e(ee,Pt),x(he,Pt,null),e(J,So),e(J,Mt),e(Mt,No),h(o,ao,m),h(o,u,m),e(u,Oo),e(u,tt),e(tt,Bo),e(u,Wo),e(u,zt),e(zt,Ro),e(u,Uo),e(u,ot),e(ot,Jo),e(u,Ho),e(u,nt),e(nt,Zo),e(u,Go),e(u,at),e(at,Xo),e(u,Ko),e(u,Ct),e(Ct,Qo),e(u,Yo),e(u,st),e(st,en),e(u,tn),e(u,rt),e(rt,on),e(u,nn),h(o,so,m),h(o,te,m),e(te,an),e(te,fe),e(fe,sn),e(te,rn),h(o,ro,m),h(o,H,m),e(H,oe),e(oe,Ft),x(ue,Ft,null),e(H,ln),e(H,It),e(It,dn),h(o,io,m),h(o,w,m),x(ge,w,null),e(w,cn),e(w,O),e(O,it),e(it,mn),e(O,pn),e(O,lt),e(lt,hn),e(O,fn),e(O,dt),e(dt,un),e(O,gn),e(w,_n),e(w,Z),e(Z,vn),e(Z,ct),e(ct,xn),e(Z,Tn),e(Z,mt),e(mt,En),e(Z,bn),e(w,jn),e(w,At),e(At,wn),e(w,yn),x(_e,w,null),e(w,kn),e(w,ne),x(ve,ne,null),e(ne,Vn),e(ne,xe),e(xe,Dn),e(xe,pt),e(pt,$n),e(xe,Pn),e(w,Mn),e(w,ae),x(Te,ae,null),e(ae,zn),e(ae,Ee),e(Ee,Cn),e(Ee,ht),e(ht,Fn),e(Ee,In),h(o,lo,m),h(o,G,m),e(G,se),e(se,qt),x(be,qt,null),e(G,An),e(G,Lt),e(Lt,qn),h(o,co,m),h(o,P,m),x(je,P,null),e(P,Ln),e(P,St),e(St,Sn),e(P,Nn),e(P,M),e(M,ft),e(ft,On),e(M,Bn),e(M,ut),e(ut,Wn),e(M,Rn),e(M,gt),e(gt,Un),e(M,Jn),e(M,Nt),e(Nt,Hn),e(M,Zn),e(M,_t),e(_t,Gn),e(M,Xn),e(P,Kn),e(P,re),x(we,re,null),e(re,Qn),e(re,ye),e(ye,Yn),e(ye,vt),e(vt,ea),e(ye,ta),e(P,oa),e(P,ie),x(ke,ie,null),e(ie,na),e(ie,Ve),e(Ve,aa),e(Ve,xt),e(xt,sa),e(Ve,ra),h(o,mo,m),h(o,X,m),e(X,le),e(le,Ot),x(De,Ot,null),e(X,ia),e(X,Bt),e(Bt,la),h(o,po,m),h(o,y,m),x($e,y,null),e(y,da),e(y,Pe),e(Pe,ca),e(Pe,Tt),e(Tt,ma),e(Pe,pa),e(y,ha),e(y,Me),e(Me,fa),e(Me,ze),e(ze,ua),e(Me,ga),e(y,_a),e(y,Wt),e(Wt,va),e(y,xa),e(y,Ce),e(Ce,Ta),e(Ce,Et),e(Et,Ea),e(Ce,ba),e(y,ja),e(y,Fe),e(Fe,wa),e(Fe,Ie),e(Ie,ya),e(Fe,ka),e(y,Va),e(y,z),x(Ae,z,null),e(z,Da),e(z,K),e(K,$a),e(K,bt),e(bt,Pa),e(K,Ma),e(K,Rt),e(Rt,za),e(K,Ca),e(z,Fa),x(de,z,null),e(z,Ia),e(z,Ut),e(Ut,Aa),e(z,qa),x(qe,z,null),h(o,ho,m),h(o,Q,m),e(Q,ce),e(ce,Jt),x(Le,Jt,null),e(Q,La),e(Q,Ht),e(Ht,Sa),h(o,fo,m),h(o,f,m),x(Se,f,null),e(f,Na),e(f,Ne),e(Ne,Oa),e(Ne,jt),e(jt,Ba),e(Ne,Wa),e(f,Ra),e(f,Oe),e(Oe,Ua),e(Oe,Be),e(Be,Ja),e(Oe,Ha),e(f,Za),e(f,Zt),e(Zt,Ga),e(f,Xa),e(f,We),e(We,Ka),e(We,wt),e(wt,Qa),e(We,Ya),e(f,es),e(f,Re),e(Re,ts),e(Re,Ue),e(Ue,os),e(Re,ns),e(f,as),e(f,Gt),e(Gt,ss),e(f,rs),e(f,S),e(S,Xt),e(Xt,Je),e(Je,is),e(S,ls),e(S,Kt),e(Kt,He),e(He,ds),e(S,cs),e(S,Qt),e(Qt,Ze),e(Ze,ms),e(S,ps),e(S,Yt),e(Yt,Ge),e(Ge,hs),e(f,fs),e(f,C),x(Xe,C,null),e(C,us),e(C,Y),e(Y,gs),e(Y,yt),e(yt,_s),e(Y,vs),e(Y,eo),e(eo,xs),e(Y,Ts),e(C,Es),x(me,C,null),e(C,bs),e(C,to),e(to,js),e(C,ws),x(Ke,C,null),uo=!0},p(o,[m]){const Qe={};m&2&&(Qe.$$scope={dirty:m,ctx:o}),de.$set(Qe);const oo={};m&2&&(oo.$$scope={dirty:m,ctx:o}),me.$set(oo)},i(o){uo||(T(j.$$.fragment,o),T(he.$$.fragment,o),T(ue.$$.fragment,o),T(ge.$$.fragment,o),T(_e.$$.fragment,o),T(ve.$$.fragment,o),T(Te.$$.fragment,o),T(be.$$.fragment,o),T(je.$$.fragment,o),T(we.$$.fragment,o),T(ke.$$.fragment,o),T(De.$$.fragment,o),T($e.$$.fragment,o),T(Ae.$$.fragment,o),T(de.$$.fragment,o),T(qe.$$.fragment,o),T(Le.$$.fragment,o),T(Se.$$.fragment,o),T(Xe.$$.fragment,o),T(me.$$.fragment,o),T(Ke.$$.fragment,o),uo=!0)},o(o){E(j.$$.fragment,o),E(he.$$.fragment,o),E(ue.$$.fragment,o),E(ge.$$.fragment,o),E(_e.$$.fragment,o),E(ve.$$.fragment,o),E(Te.$$.fragment,o),E(be.$$.fragment,o),E(je.$$.fragment,o),E(we.$$.fragment,o),E(ke.$$.fragment,o),E(De.$$.fragment,o),E($e.$$.fragment,o),E(Ae.$$.fragment,o),E(de.$$.fragment,o),E(qe.$$.fragment,o),E(Le.$$.fragment,o),E(Se.$$.fragment,o),E(Xe.$$.fragment,o),E(me.$$.fragment,o),E(Ke.$$.fragment,o),uo=!1},d(o){t(p),o&&t(q),o&&t(g),b(j),o&&t(no),o&&t(J),b(he),o&&t(ao),o&&t(u),o&&t(so),o&&t(te),o&&t(ro),o&&t(H),b(ue),o&&t(io),o&&t(w),b(ge),b(_e),b(ve),b(Te),o&&t(lo),o&&t(G),b(be),o&&t(co),o&&t(P),b(je),b(we),b(ke),o&&t(mo),o&&t(X),b(De),o&&t(po),o&&t(y),b($e),b(Ae),b(de),b(qe),o&&t(ho),o&&t(Q),b(Le),o&&t(fo),o&&t(f),b(Se),b(Xe),b(me),b(Ke)}}}const Zr={local:"visiontextdualencoder",sections:[{local:"overview",title:"Overview"},{local:"transformers.VisionTextDualEncoderConfig",title:"VisionTextDualEncoderConfig"},{local:"transformers.VisionTextDualEncoderProcessor",title:"VisionTextDualEncoderProcessor"},{local:"transformers.VisionTextDualEncoderModel",title:"VisionTextDualEncoderModel"},{local:"transformers.FlaxVisionTextDualEncoderModel",title:"FlaxVisionTextDualEncoderModel"}],title:"VisionTextDualEncoder"};function Gr(et){return Rr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ti extends Nr{constructor(p){super();Or(this,p,Gr,Hr,Br,{})}}export{ti as default,Zr as metadata};
