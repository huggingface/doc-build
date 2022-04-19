import{S as Nr,i as Or,s as Br,e as n,k as d,w as _,t as r,M as Wr,c as a,d as t,m as c,a as s,x,h as i,b as l,F as e,g as h,y as v,q as T,o as b,B as E,v as Rr}from"../../chunks/vendor-6b77c823.js";import{T as Sr}from"../../chunks/Tip-39098574.js";import{D as U}from"../../chunks/Docstring-17b815d9.js";import{C as ws}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as $t}from"../../chunks/IconCopyLink-7a11ce68.js";function Ur(et){let p,q,g,$,A;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),$=r("Module"),A=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){p=a(y,"P",{});var D=s(p);q=i(D,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(D,"CODE",{});var L=s(g);$=i(L,"Module"),L.forEach(t),A=i(D,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),D.forEach(t)},m(y,D){h(y,p,D),e(p,q),e(p,g),e(g,$),e(p,A)},d(y){y&&t(p)}}}function Jr(et){let p,q,g,$,A;return{c(){p=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),$=r("Module"),A=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){p=a(y,"P",{});var D=s(p);q=i(D,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(D,"CODE",{});var L=s(g);$=i(L,"Module"),L.forEach(t),A=i(D,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),D.forEach(t)},m(y,D){h(y,p,D),e(p,q),e(p,g),e(g,$),e(p,A)},d(y){y&&t(p)}}}function Hr(et){let p,q,g,$,A,y,D,L,Lo,no,J,ee,Pt,he,So,Mt,No,ao,u,Oo,tt,Bo,Wo,zt,Ro,Uo,ot,Jo,Ho,nt,Zo,Go,at,Xo,Ko,Ct,Qo,Yo,st,en,tn,rt,on,nn,so,te,an,fe,sn,rn,ro,H,oe,Ft,ue,ln,It,dn,io,j,ge,cn,O,it,mn,pn,lt,hn,fn,dt,un,gn,_n,Z,xn,ct,vn,Tn,mt,bn,En,yn,At,jn,wn,_e,Vn,ne,xe,kn,ve,Dn,pt,$n,Pn,Mn,ae,Te,zn,be,Cn,ht,Fn,In,lo,G,se,qt,Ee,An,Lt,qn,co,P,ye,Ln,St,Sn,Nn,M,ft,On,Bn,ut,Wn,Rn,gt,Un,Jn,Nt,Hn,Zn,_t,Gn,Xn,Kn,re,je,Qn,we,Yn,xt,ea,ta,oa,ie,Ve,na,ke,aa,vt,sa,ra,mo,X,le,Ot,De,ia,Bt,la,po,w,$e,da,Pe,ca,Tt,ma,pa,ha,Me,fa,ze,ua,ga,_a,Wt,xa,va,Ce,Ta,bt,ba,Ea,ya,Fe,ja,Ie,wa,Va,ka,z,Ae,Da,K,$a,Et,Pa,Ma,Rt,za,Ca,Fa,de,Ia,Ut,Aa,qa,qe,ho,Q,ce,Jt,Le,La,Ht,Sa,fo,f,Se,Na,Ne,Oa,yt,Ba,Wa,Ra,Oe,Ua,Be,Ja,Ha,Za,Zt,Ga,Xa,We,Ka,jt,Qa,Ya,es,Re,ts,Ue,os,ns,as,Gt,ss,rs,S,Xt,Je,is,ls,Kt,He,ds,cs,Qt,Ze,ms,ps,Yt,Ge,hs,fs,C,Xe,us,Y,gs,wt,_s,xs,eo,vs,Ts,bs,me,Es,to,ys,js,Ke,uo;return y=new $t({}),he=new $t({}),ue=new $t({}),ge=new U({props:{name:"class transformers.VisionTextDualEncoderConfig",anchor:"transformers.VisionTextDualEncoderConfig",parameters:[{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionTextDualEncoderConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>) &#x2014;
Dictionary of configuration options that defines text model config.`,name:"text_config_dict"},{anchor:"transformers.VisionTextDualEncoderConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>) &#x2014;
Dictionary of configuration options that defines vison model config.`,name:"vision_config_dict"},{anchor:"transformers.VisionTextDualEncoderConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.VisionTextDualEncoderConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.VisionTextDualEncoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L28"}}),_e=new ws({props:{code:`from transformers import ViTConfig, BertConfig, VisionTextDualEncoderConfig, VisionTextDualEncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionTextDualEncoderModel.from_pretrained(<span class="hljs-string">&quot;vit-bert&quot;</span>, config=vision_text_config)`}}),xe=new U({props:{name:"from_vision_text_configs",anchor:"transformers.VisionTextDualEncoderConfig.from_vision_text_configs",parameters:[{name:"vision_config",val:": PretrainedConfig"},{name:"text_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L105",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"
>VisionTextDualEncoderConfig</a></p>
`}}),Te=new U({props:{name:"to_dict",anchor:"transformers.VisionTextDualEncoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L117",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),Ee=new $t({}),ye=new U({props:{name:"class transformers.VisionTextDualEncoderProcessor",anchor:"transformers.VisionTextDualEncoderProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.VisionTextDualEncoderProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.VisionTextDualEncoderProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L23"}}),je=new U({props:{name:"batch_decode",anchor:"transformers.VisionTextDualEncoderProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L98"}}),Ve=new U({props:{name:"decode",anchor:"transformers.VisionTextDualEncoderProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L105"}}),De=new $t({}),$e=new U({props:{name:"class transformers.VisionTextDualEncoderModel",anchor:"transformers.VisionTextDualEncoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.models.vision_text_dual_encoder.configuration_vision_text_dual_encoder.VisionTextDualEncoderConfig] = None"},{name:"vision_model",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"text_model",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],parametersDescription:[{anchor:"transformers.VisionTextDualEncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/modeling_vision_text_dual_encoder.py#L162"}}),Ae=new U({props:{name:"forward",anchor:"transformers.VisionTextDualEncoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"return_loss",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.VisionTextDualEncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/modeling_vision_text_dual_encoder.py#L294",returnDescription:`
<p>A <code>transformers.models.clip.modeling_clip.CLIPOutput</code> or a tuple of
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
<p><code>transformers.models.clip.modeling_clip.CLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),de=new Sr({props:{$$slots:{default:[Ur]},$$scope:{ctx:et}}}),qe=new ws({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Le=new $t({}),Se=new U({props:{name:"class transformers.FlaxVisionTextDualEncoderModel",anchor:"transformers.FlaxVisionTextDualEncoderModel",parameters:[{name:"config",val:": VisionTextDualEncoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxVisionTextDualEncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig">VisionTextDualEncoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/modeling_flax_vision_text_dual_encoder.py#L219"}}),Xe=new U({props:{name:"__call__",anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/modeling_flax_vision_text_dual_encoder.py#L270",returnDescription:`
<p>A <code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code> or a tuple of
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
<p><code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),me=new Sr({props:{$$slots:{default:[Jr]},$$scope:{ctx:et}}}),Ke=new ws({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){p=n("meta"),q=d(),g=n("h1"),$=n("a"),A=n("span"),_(y.$$.fragment),D=d(),L=n("span"),Lo=r("VisionTextDualEncoder"),no=d(),J=n("h2"),ee=n("a"),Pt=n("span"),_(he.$$.fragment),So=d(),Mt=n("span"),No=r("Overview"),ao=d(),u=n("p"),Oo=r("The "),tt=n("a"),Bo=r("VisionTextDualEncoderModel"),Wo=r(` can be used to initialize a vision-text dual encoder model with
any pretrained vision autoencoding model as the vision encoder (`),zt=n("em"),Ro=r("e.g."),Uo=d(),ot=n("a"),Jo=r("ViT"),Ho=r(", "),nt=n("a"),Zo=r("BEiT"),Go=r(", "),at=n("a"),Xo=r("DeiT"),Ko=r(") and any pretrained text autoencoding model as the text encoder ("),Ct=n("em"),Qo=r("e.g."),Yo=d(),st=n("a"),en=r("RoBERTa"),tn=r(", "),rt=n("a"),on=r("BERT"),nn=r(`). Two projection layers are added on top of both the vision and text encoder to project the output embeddings
to a shared latent space. The projection layers are randomly initialized so the model should be fine-tuned on a
downstream task. This model can be used to align the vision-text embeddings using CLIP like contrastive image-text
training and then can be used for zero-shot vision tasks such image-classification or retrieval.`),so=d(),te=n("p"),an=r("In "),fe=n("a"),sn=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),rn=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment on
new zero-shot vision tasks such as image classification or retrieval.`),ro=d(),H=n("h2"),oe=n("a"),Ft=n("span"),_(ue.$$.fragment),ln=d(),It=n("span"),dn=r("VisionTextDualEncoderConfig"),io=d(),j=n("div"),_(ge.$$.fragment),cn=d(),O=n("p"),it=n("a"),mn=r("VisionTextDualEncoderConfig"),pn=r(` is the configuration class to store the configuration of a
`),lt=n("a"),hn=r("VisionTextDualEncoderModel"),fn=r(". It is used to instantiate "),dt=n("a"),un=r("VisionTextDualEncoderModel"),gn=r(` model according to the
specified arguments, defining the text model and vision model configs.`),_n=d(),Z=n("p"),xn=r("Configuration objects inherit from "),ct=n("a"),vn=r("PretrainedConfig"),Tn=r(` and can be used to control the model outputs. Read the
documentation from `),mt=n("a"),bn=r("PretrainedConfig"),En=r(" for more information."),yn=d(),At=n("p"),jn=r("Examples:"),wn=d(),_(_e.$$.fragment),Vn=d(),ne=n("div"),_(xe.$$.fragment),kn=d(),ve=n("p"),Dn=r("Instantiate a "),pt=n("a"),$n=r("VisionTextDualEncoderConfig"),Pn=r(` (or a derived class) from text model configuration and vision
model configuration.`),Mn=d(),ae=n("div"),_(Te.$$.fragment),zn=d(),be=n("p"),Cn=r("Serializes this instance to a Python dictionary. Override the default "),ht=n("a"),Fn=r("to_dict()"),In=r("."),lo=d(),G=n("h2"),se=n("a"),qt=n("span"),_(Ee.$$.fragment),An=d(),Lt=n("span"),qn=r("VisionTextDualEncoderProcessor"),co=d(),P=n("div"),_(ye.$$.fragment),Ln=d(),St=n("p"),Sn=r(`Constructs a VisionTextDualEncoder processor which wraps a vision feature extractor and a tokenizer into a single
processor.`),Nn=d(),M=n("p"),ft=n("a"),On=r("VisionTextDualEncoderProcessor"),Bn=r(" offers all the functionalities of "),ut=n("a"),Wn=r("AutoFeatureExtractor"),Rn=r(` and
`),gt=n("a"),Un=r("AutoTokenizer"),Jn=r(". See the "),Nt=n("code"),Hn=r("__call__()"),Zn=r(` and
`),_t=n("a"),Gn=r("decode()"),Xn=r(" for more information."),Kn=d(),re=n("div"),_(je.$$.fragment),Qn=d(),we=n("p"),Yn=r(`This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s
`),xt=n("a"),ea=r("batch_decode()"),ta=r(". Please refer to the docstring of this method for more information."),oa=d(),ie=n("div"),_(Ve.$$.fragment),na=d(),ke=n("p"),aa=r("This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s "),vt=n("a"),sa=r("decode()"),ra=r(`.
Please refer to the docstring of this method for more information.`),mo=d(),X=n("h2"),le=n("a"),Ot=n("span"),_(De.$$.fragment),ia=d(),Bt=n("span"),la=r("VisionTextDualEncoderModel"),po=d(),w=n("div"),_($e.$$.fragment),da=d(),Pe=n("p"),ca=r(`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Tt=n("a"),ma=r("from_pretrained()"),pa=r(` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),ha=d(),Me=n("p"),fa=r("In "),ze=n("a"),ua=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),ga=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),_a=d(),Wt=n("p"),xa=r(`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),va=d(),Ce=n("p"),Ta=r("This model inherits from "),bt=n("a"),ba=r("PreTrainedModel"),Ea=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ya=d(),Fe=n("p"),ja=r("This model is also a PyTorch "),Ie=n("a"),wa=r("torch.nn.Module"),Va=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ka=d(),z=n("div"),_(Ae.$$.fragment),Da=d(),K=n("p"),$a=r("The "),Et=n("a"),Pa=r("VisionTextDualEncoderModel"),Ma=r(" forward method, overrides the "),Rt=n("code"),za=r("__call__"),Ca=r(" special method."),Fa=d(),_(de.$$.fragment),Ia=d(),Ut=n("p"),Aa=r("Examples:"),qa=d(),_(qe.$$.fragment),ho=d(),Q=n("h2"),ce=n("a"),Jt=n("span"),_(Le.$$.fragment),La=d(),Ht=n("span"),Sa=r("FlaxVisionTextDualEncoderModel"),fo=d(),f=n("div"),_(Se.$$.fragment),Na=d(),Ne=n("p"),Oa=r(`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),yt=n("a"),Ba=r("from_pretrained()"),Wa=r(` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Ra=d(),Oe=n("p"),Ua=r("In "),Be=n("a"),Ja=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),Ha=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Za=d(),Zt=n("p"),Ga=r(`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Xa=d(),We=n("p"),Ka=r("This model inherits from "),jt=n("a"),Qa=r("PreTrainedModel"),Ya=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),es=d(),Re=n("p"),ts=r("This model is also a Flax Linen "),Ue=n("a"),os=r("flax.linen.Module"),ns=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),as=d(),Gt=n("p"),ss=r("Finally, this model supports inherent JAX features such as:"),rs=d(),S=n("ul"),Xt=n("li"),Je=n("a"),is=r("Just-In-Time (JIT) compilation"),ls=d(),Kt=n("li"),He=n("a"),ds=r("Automatic Differentiation"),cs=d(),Qt=n("li"),Ze=n("a"),ms=r("Vectorization"),ps=d(),Yt=n("li"),Ge=n("a"),hs=r("Parallelization"),fs=d(),C=n("div"),_(Xe.$$.fragment),us=d(),Y=n("p"),gs=r("The "),wt=n("a"),_s=r("FlaxVisionTextDualEncoderModel"),xs=r(" forward method, overrides the "),eo=n("code"),vs=r("__call__"),Ts=r(" special method."),bs=d(),_(me.$$.fragment),Es=d(),to=n("p"),ys=r("Examples:"),js=d(),_(Ke.$$.fragment),this.h()},l(o){const m=Wr('[data-svelte="svelte-1phssyn"]',document.head);p=a(m,"META",{name:!0,content:!0}),m.forEach(t),q=c(o),g=a(o,"H1",{class:!0});var Qe=s(g);$=a(Qe,"A",{id:!0,class:!0,href:!0});var oo=s($);A=a(oo,"SPAN",{});var Vs=s(A);x(y.$$.fragment,Vs),Vs.forEach(t),oo.forEach(t),D=c(Qe),L=a(Qe,"SPAN",{});var ks=s(L);Lo=i(ks,"VisionTextDualEncoder"),ks.forEach(t),Qe.forEach(t),no=c(o),J=a(o,"H2",{class:!0});var go=s(J);ee=a(go,"A",{id:!0,class:!0,href:!0});var Ds=s(ee);Pt=a(Ds,"SPAN",{});var $s=s(Pt);x(he.$$.fragment,$s),$s.forEach(t),Ds.forEach(t),So=c(go),Mt=a(go,"SPAN",{});var Ps=s(Mt);No=i(Ps,"Overview"),Ps.forEach(t),go.forEach(t),ao=c(o),u=a(o,"P",{});var V=s(u);Oo=i(V,"The "),tt=a(V,"A",{href:!0});var Ms=s(tt);Bo=i(Ms,"VisionTextDualEncoderModel"),Ms.forEach(t),Wo=i(V,` can be used to initialize a vision-text dual encoder model with
any pretrained vision autoencoding model as the vision encoder (`),zt=a(V,"EM",{});var zs=s(zt);Ro=i(zs,"e.g."),zs.forEach(t),Uo=c(V),ot=a(V,"A",{href:!0});var Cs=s(ot);Jo=i(Cs,"ViT"),Cs.forEach(t),Ho=i(V,", "),nt=a(V,"A",{href:!0});var Fs=s(nt);Zo=i(Fs,"BEiT"),Fs.forEach(t),Go=i(V,", "),at=a(V,"A",{href:!0});var Is=s(at);Xo=i(Is,"DeiT"),Is.forEach(t),Ko=i(V,") and any pretrained text autoencoding model as the text encoder ("),Ct=a(V,"EM",{});var As=s(Ct);Qo=i(As,"e.g."),As.forEach(t),Yo=c(V),st=a(V,"A",{href:!0});var qs=s(st);en=i(qs,"RoBERTa"),qs.forEach(t),tn=i(V,", "),rt=a(V,"A",{href:!0});var Ls=s(rt);on=i(Ls,"BERT"),Ls.forEach(t),nn=i(V,`). Two projection layers are added on top of both the vision and text encoder to project the output embeddings
to a shared latent space. The projection layers are randomly initialized so the model should be fine-tuned on a
downstream task. This model can be used to align the vision-text embeddings using CLIP like contrastive image-text
training and then can be used for zero-shot vision tasks such image-classification or retrieval.`),V.forEach(t),so=c(o),te=a(o,"P",{});var _o=s(te);an=i(_o,"In "),fe=a(_o,"A",{href:!0,rel:!0});var Ss=s(fe);sn=i(Ss,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),Ss.forEach(t),rn=i(_o,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment on
new zero-shot vision tasks such as image classification or retrieval.`),_o.forEach(t),ro=c(o),H=a(o,"H2",{class:!0});var xo=s(H);oe=a(xo,"A",{id:!0,class:!0,href:!0});var Ns=s(oe);Ft=a(Ns,"SPAN",{});var Os=s(Ft);x(ue.$$.fragment,Os),Os.forEach(t),Ns.forEach(t),ln=c(xo),It=a(xo,"SPAN",{});var Bs=s(It);dn=i(Bs,"VisionTextDualEncoderConfig"),Bs.forEach(t),xo.forEach(t),io=c(o),j=a(o,"DIV",{class:!0});var F=s(j);x(ge.$$.fragment,F),cn=c(F),O=a(F,"P",{});var Ye=s(O);it=a(Ye,"A",{href:!0});var Ws=s(it);mn=i(Ws,"VisionTextDualEncoderConfig"),Ws.forEach(t),pn=i(Ye,` is the configuration class to store the configuration of a
`),lt=a(Ye,"A",{href:!0});var Rs=s(lt);hn=i(Rs,"VisionTextDualEncoderModel"),Rs.forEach(t),fn=i(Ye,". It is used to instantiate "),dt=a(Ye,"A",{href:!0});var Us=s(dt);un=i(Us,"VisionTextDualEncoderModel"),Us.forEach(t),gn=i(Ye,` model according to the
specified arguments, defining the text model and vision model configs.`),Ye.forEach(t),_n=c(F),Z=a(F,"P",{});var Vt=s(Z);xn=i(Vt,"Configuration objects inherit from "),ct=a(Vt,"A",{href:!0});var Js=s(ct);vn=i(Js,"PretrainedConfig"),Js.forEach(t),Tn=i(Vt,` and can be used to control the model outputs. Read the
documentation from `),mt=a(Vt,"A",{href:!0});var Hs=s(mt);bn=i(Hs,"PretrainedConfig"),Hs.forEach(t),En=i(Vt," for more information."),Vt.forEach(t),yn=c(F),At=a(F,"P",{});var Zs=s(At);jn=i(Zs,"Examples:"),Zs.forEach(t),wn=c(F),x(_e.$$.fragment,F),Vn=c(F),ne=a(F,"DIV",{class:!0});var vo=s(ne);x(xe.$$.fragment,vo),kn=c(vo),ve=a(vo,"P",{});var To=s(ve);Dn=i(To,"Instantiate a "),pt=a(To,"A",{href:!0});var Gs=s(pt);$n=i(Gs,"VisionTextDualEncoderConfig"),Gs.forEach(t),Pn=i(To,` (or a derived class) from text model configuration and vision
model configuration.`),To.forEach(t),vo.forEach(t),Mn=c(F),ae=a(F,"DIV",{class:!0});var bo=s(ae);x(Te.$$.fragment,bo),zn=c(bo),be=a(bo,"P",{});var Eo=s(be);Cn=i(Eo,"Serializes this instance to a Python dictionary. Override the default "),ht=a(Eo,"A",{href:!0});var Xs=s(ht);Fn=i(Xs,"to_dict()"),Xs.forEach(t),In=i(Eo,"."),Eo.forEach(t),bo.forEach(t),F.forEach(t),lo=c(o),G=a(o,"H2",{class:!0});var yo=s(G);se=a(yo,"A",{id:!0,class:!0,href:!0});var Ks=s(se);qt=a(Ks,"SPAN",{});var Qs=s(qt);x(Ee.$$.fragment,Qs),Qs.forEach(t),Ks.forEach(t),An=c(yo),Lt=a(yo,"SPAN",{});var Ys=s(Lt);qn=i(Ys,"VisionTextDualEncoderProcessor"),Ys.forEach(t),yo.forEach(t),co=c(o),P=a(o,"DIV",{class:!0});var B=s(P);x(ye.$$.fragment,B),Ln=c(B),St=a(B,"P",{});var er=s(St);Sn=i(er,`Constructs a VisionTextDualEncoder processor which wraps a vision feature extractor and a tokenizer into a single
processor.`),er.forEach(t),Nn=c(B),M=a(B,"P",{});var N=s(M);ft=a(N,"A",{href:!0});var tr=s(ft);On=i(tr,"VisionTextDualEncoderProcessor"),tr.forEach(t),Bn=i(N," offers all the functionalities of "),ut=a(N,"A",{href:!0});var or=s(ut);Wn=i(or,"AutoFeatureExtractor"),or.forEach(t),Rn=i(N,` and
`),gt=a(N,"A",{href:!0});var nr=s(gt);Un=i(nr,"AutoTokenizer"),nr.forEach(t),Jn=i(N,". See the "),Nt=a(N,"CODE",{});var ar=s(Nt);Hn=i(ar,"__call__()"),ar.forEach(t),Zn=i(N,` and
`),_t=a(N,"A",{href:!0});var sr=s(_t);Gn=i(sr,"decode()"),sr.forEach(t),Xn=i(N," for more information."),N.forEach(t),Kn=c(B),re=a(B,"DIV",{class:!0});var jo=s(re);x(je.$$.fragment,jo),Qn=c(jo),we=a(jo,"P",{});var wo=s(we);Yn=i(wo,`This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s
`),xt=a(wo,"A",{href:!0});var rr=s(xt);ea=i(rr,"batch_decode()"),rr.forEach(t),ta=i(wo,". Please refer to the docstring of this method for more information."),wo.forEach(t),jo.forEach(t),oa=c(B),ie=a(B,"DIV",{class:!0});var Vo=s(ie);x(Ve.$$.fragment,Vo),na=c(Vo),ke=a(Vo,"P",{});var ko=s(ke);aa=i(ko,"This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s "),vt=a(ko,"A",{href:!0});var ir=s(vt);sa=i(ir,"decode()"),ir.forEach(t),ra=i(ko,`.
Please refer to the docstring of this method for more information.`),ko.forEach(t),Vo.forEach(t),B.forEach(t),mo=c(o),X=a(o,"H2",{class:!0});var Do=s(X);le=a(Do,"A",{id:!0,class:!0,href:!0});var lr=s(le);Ot=a(lr,"SPAN",{});var dr=s(Ot);x(De.$$.fragment,dr),dr.forEach(t),lr.forEach(t),ia=c(Do),Bt=a(Do,"SPAN",{});var cr=s(Bt);la=i(cr,"VisionTextDualEncoderModel"),cr.forEach(t),Do.forEach(t),po=c(o),w=a(o,"DIV",{class:!0});var I=s(w);x($e.$$.fragment,I),da=c(I),Pe=a(I,"P",{});var $o=s(Pe);ca=i($o,`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Tt=a($o,"A",{href:!0});var mr=s(Tt);ma=i(mr,"from_pretrained()"),mr.forEach(t),pa=i($o,` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),$o.forEach(t),ha=c(I),Me=a(I,"P",{});var Po=s(Me);fa=i(Po,"In "),ze=a(Po,"A",{href:!0,rel:!0});var pr=s(ze);ua=i(pr,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),pr.forEach(t),ga=i(Po,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Po.forEach(t),_a=c(I),Wt=a(I,"P",{});var hr=s(Wt);xa=i(hr,`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),hr.forEach(t),va=c(I),Ce=a(I,"P",{});var Mo=s(Ce);Ta=i(Mo,"This model inherits from "),bt=a(Mo,"A",{href:!0});var fr=s(bt);ba=i(fr,"PreTrainedModel"),fr.forEach(t),Ea=i(Mo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mo.forEach(t),ya=c(I),Fe=a(I,"P",{});var zo=s(Fe);ja=i(zo,"This model is also a PyTorch "),Ie=a(zo,"A",{href:!0,rel:!0});var ur=s(Ie);wa=i(ur,"torch.nn.Module"),ur.forEach(t),Va=i(zo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zo.forEach(t),ka=c(I),z=a(I,"DIV",{class:!0});var W=s(z);x(Ae.$$.fragment,W),Da=c(W),K=a(W,"P",{});var kt=s(K);$a=i(kt,"The "),Et=a(kt,"A",{href:!0});var gr=s(Et);Pa=i(gr,"VisionTextDualEncoderModel"),gr.forEach(t),Ma=i(kt," forward method, overrides the "),Rt=a(kt,"CODE",{});var _r=s(Rt);za=i(_r,"__call__"),_r.forEach(t),Ca=i(kt," special method."),kt.forEach(t),Fa=c(W),x(de.$$.fragment,W),Ia=c(W),Ut=a(W,"P",{});var xr=s(Ut);Aa=i(xr,"Examples:"),xr.forEach(t),qa=c(W),x(qe.$$.fragment,W),W.forEach(t),I.forEach(t),ho=c(o),Q=a(o,"H2",{class:!0});var Co=s(Q);ce=a(Co,"A",{id:!0,class:!0,href:!0});var vr=s(ce);Jt=a(vr,"SPAN",{});var Tr=s(Jt);x(Le.$$.fragment,Tr),Tr.forEach(t),vr.forEach(t),La=c(Co),Ht=a(Co,"SPAN",{});var br=s(Ht);Sa=i(br,"FlaxVisionTextDualEncoderModel"),br.forEach(t),Co.forEach(t),fo=c(o),f=a(o,"DIV",{class:!0});var k=s(f);x(Se.$$.fragment,k),Na=c(k),Ne=a(k,"P",{});var Fo=s(Ne);Oa=i(Fo,`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),yt=a(Fo,"A",{href:!0});var Er=s(yt);Ba=i(Er,"from_pretrained()"),Er.forEach(t),Wa=i(Fo,` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Fo.forEach(t),Ra=c(k),Oe=a(k,"P",{});var Io=s(Oe);Ua=i(Io,"In "),Be=a(Io,"A",{href:!0,rel:!0});var yr=s(Be);Ja=i(yr,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),yr.forEach(t),Ha=i(Io,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Io.forEach(t),Za=c(k),Zt=a(k,"P",{});var jr=s(Zt);Ga=i(jr,`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),jr.forEach(t),Xa=c(k),We=a(k,"P",{});var Ao=s(We);Ka=i(Ao,"This model inherits from "),jt=a(Ao,"A",{href:!0});var wr=s(jt);Qa=i(wr,"PreTrainedModel"),wr.forEach(t),Ya=i(Ao,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ao.forEach(t),es=c(k),Re=a(k,"P",{});var qo=s(Re);ts=i(qo,"This model is also a Flax Linen "),Ue=a(qo,"A",{href:!0,rel:!0});var Vr=s(Ue);os=i(Vr,"flax.linen.Module"),Vr.forEach(t),ns=i(qo,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qo.forEach(t),as=c(k),Gt=a(k,"P",{});var kr=s(Gt);ss=i(kr,"Finally, this model supports inherent JAX features such as:"),kr.forEach(t),rs=c(k),S=a(k,"UL",{});var pe=s(S);Xt=a(pe,"LI",{});var Dr=s(Xt);Je=a(Dr,"A",{href:!0,rel:!0});var $r=s(Je);is=i($r,"Just-In-Time (JIT) compilation"),$r.forEach(t),Dr.forEach(t),ls=c(pe),Kt=a(pe,"LI",{});var Pr=s(Kt);He=a(Pr,"A",{href:!0,rel:!0});var Mr=s(He);ds=i(Mr,"Automatic Differentiation"),Mr.forEach(t),Pr.forEach(t),cs=c(pe),Qt=a(pe,"LI",{});var zr=s(Qt);Ze=a(zr,"A",{href:!0,rel:!0});var Cr=s(Ze);ms=i(Cr,"Vectorization"),Cr.forEach(t),zr.forEach(t),ps=c(pe),Yt=a(pe,"LI",{});var Fr=s(Yt);Ge=a(Fr,"A",{href:!0,rel:!0});var Ir=s(Ge);hs=i(Ir,"Parallelization"),Ir.forEach(t),Fr.forEach(t),pe.forEach(t),fs=c(k),C=a(k,"DIV",{class:!0});var R=s(C);x(Xe.$$.fragment,R),us=c(R),Y=a(R,"P",{});var Dt=s(Y);gs=i(Dt,"The "),wt=a(Dt,"A",{href:!0});var Ar=s(wt);_s=i(Ar,"FlaxVisionTextDualEncoderModel"),Ar.forEach(t),xs=i(Dt," forward method, overrides the "),eo=a(Dt,"CODE",{});var qr=s(eo);vs=i(qr,"__call__"),qr.forEach(t),Ts=i(Dt," special method."),Dt.forEach(t),bs=c(R),x(me.$$.fragment,R),Es=c(R),to=a(R,"P",{});var Lr=s(to);ys=i(Lr,"Examples:"),Lr.forEach(t),js=c(R),x(Ke.$$.fragment,R),R.forEach(t),k.forEach(t),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(Zr)),l($,"id","visiontextdualencoder"),l($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l($,"href","#visiontextdualencoder"),l(g,"class","relative group"),l(ee,"id","overview"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#overview"),l(J,"class","relative group"),l(tt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(ot,"href","vit"),l(nt,"href","beit"),l(at,"href","deit"),l(st,"href","roberta"),l(rt,"href","bert"),l(fe,"href","https://arxiv.org/abs/2111.07991"),l(fe,"rel","nofollow"),l(oe,"id","transformers.VisionTextDualEncoderConfig"),l(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(oe,"href","#transformers.VisionTextDualEncoderConfig"),l(H,"class","relative group"),l(it,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"),l(lt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(dt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(ct,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(mt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(pt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"),l(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ht,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig.to_dict"),l(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(se,"id","transformers.VisionTextDualEncoderProcessor"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#transformers.VisionTextDualEncoderProcessor"),l(G,"class","relative group"),l(ft,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderProcessor"),l(ut,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor"),l(gt,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer"),l(_t,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderProcessor.decode"),l(xt,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.batch_decode"),l(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(vt,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.decode"),l(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(le,"id","transformers.VisionTextDualEncoderModel"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.VisionTextDualEncoderModel"),l(X,"class","relative group"),l(Tt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(ze,"href","https://arxiv.org/abs/2111.07991"),l(ze,"rel","nofollow"),l(bt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Ie,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ie,"rel","nofollow"),l(Et,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ce,"id","transformers.FlaxVisionTextDualEncoderModel"),l(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ce,"href","#transformers.FlaxVisionTextDualEncoderModel"),l(Q,"class","relative group"),l(yt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Be,"href","https://arxiv.org/abs/2111.07991"),l(Be,"rel","nofollow"),l(jt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Ue,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(Ue,"rel","nofollow"),l(Je,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(Je,"rel","nofollow"),l(He,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(He,"rel","nofollow"),l(Ze,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Ze,"rel","nofollow"),l(Ge,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(Ge,"rel","nofollow"),l(wt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.FlaxVisionTextDualEncoderModel"),l(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(f,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,m){e(document.head,p),h(o,q,m),h(o,g,m),e(g,$),e($,A),v(y,A,null),e(g,D),e(g,L),e(L,Lo),h(o,no,m),h(o,J,m),e(J,ee),e(ee,Pt),v(he,Pt,null),e(J,So),e(J,Mt),e(Mt,No),h(o,ao,m),h(o,u,m),e(u,Oo),e(u,tt),e(tt,Bo),e(u,Wo),e(u,zt),e(zt,Ro),e(u,Uo),e(u,ot),e(ot,Jo),e(u,Ho),e(u,nt),e(nt,Zo),e(u,Go),e(u,at),e(at,Xo),e(u,Ko),e(u,Ct),e(Ct,Qo),e(u,Yo),e(u,st),e(st,en),e(u,tn),e(u,rt),e(rt,on),e(u,nn),h(o,so,m),h(o,te,m),e(te,an),e(te,fe),e(fe,sn),e(te,rn),h(o,ro,m),h(o,H,m),e(H,oe),e(oe,Ft),v(ue,Ft,null),e(H,ln),e(H,It),e(It,dn),h(o,io,m),h(o,j,m),v(ge,j,null),e(j,cn),e(j,O),e(O,it),e(it,mn),e(O,pn),e(O,lt),e(lt,hn),e(O,fn),e(O,dt),e(dt,un),e(O,gn),e(j,_n),e(j,Z),e(Z,xn),e(Z,ct),e(ct,vn),e(Z,Tn),e(Z,mt),e(mt,bn),e(Z,En),e(j,yn),e(j,At),e(At,jn),e(j,wn),v(_e,j,null),e(j,Vn),e(j,ne),v(xe,ne,null),e(ne,kn),e(ne,ve),e(ve,Dn),e(ve,pt),e(pt,$n),e(ve,Pn),e(j,Mn),e(j,ae),v(Te,ae,null),e(ae,zn),e(ae,be),e(be,Cn),e(be,ht),e(ht,Fn),e(be,In),h(o,lo,m),h(o,G,m),e(G,se),e(se,qt),v(Ee,qt,null),e(G,An),e(G,Lt),e(Lt,qn),h(o,co,m),h(o,P,m),v(ye,P,null),e(P,Ln),e(P,St),e(St,Sn),e(P,Nn),e(P,M),e(M,ft),e(ft,On),e(M,Bn),e(M,ut),e(ut,Wn),e(M,Rn),e(M,gt),e(gt,Un),e(M,Jn),e(M,Nt),e(Nt,Hn),e(M,Zn),e(M,_t),e(_t,Gn),e(M,Xn),e(P,Kn),e(P,re),v(je,re,null),e(re,Qn),e(re,we),e(we,Yn),e(we,xt),e(xt,ea),e(we,ta),e(P,oa),e(P,ie),v(Ve,ie,null),e(ie,na),e(ie,ke),e(ke,aa),e(ke,vt),e(vt,sa),e(ke,ra),h(o,mo,m),h(o,X,m),e(X,le),e(le,Ot),v(De,Ot,null),e(X,ia),e(X,Bt),e(Bt,la),h(o,po,m),h(o,w,m),v($e,w,null),e(w,da),e(w,Pe),e(Pe,ca),e(Pe,Tt),e(Tt,ma),e(Pe,pa),e(w,ha),e(w,Me),e(Me,fa),e(Me,ze),e(ze,ua),e(Me,ga),e(w,_a),e(w,Wt),e(Wt,xa),e(w,va),e(w,Ce),e(Ce,Ta),e(Ce,bt),e(bt,ba),e(Ce,Ea),e(w,ya),e(w,Fe),e(Fe,ja),e(Fe,Ie),e(Ie,wa),e(Fe,Va),e(w,ka),e(w,z),v(Ae,z,null),e(z,Da),e(z,K),e(K,$a),e(K,Et),e(Et,Pa),e(K,Ma),e(K,Rt),e(Rt,za),e(K,Ca),e(z,Fa),v(de,z,null),e(z,Ia),e(z,Ut),e(Ut,Aa),e(z,qa),v(qe,z,null),h(o,ho,m),h(o,Q,m),e(Q,ce),e(ce,Jt),v(Le,Jt,null),e(Q,La),e(Q,Ht),e(Ht,Sa),h(o,fo,m),h(o,f,m),v(Se,f,null),e(f,Na),e(f,Ne),e(Ne,Oa),e(Ne,yt),e(yt,Ba),e(Ne,Wa),e(f,Ra),e(f,Oe),e(Oe,Ua),e(Oe,Be),e(Be,Ja),e(Oe,Ha),e(f,Za),e(f,Zt),e(Zt,Ga),e(f,Xa),e(f,We),e(We,Ka),e(We,jt),e(jt,Qa),e(We,Ya),e(f,es),e(f,Re),e(Re,ts),e(Re,Ue),e(Ue,os),e(Re,ns),e(f,as),e(f,Gt),e(Gt,ss),e(f,rs),e(f,S),e(S,Xt),e(Xt,Je),e(Je,is),e(S,ls),e(S,Kt),e(Kt,He),e(He,ds),e(S,cs),e(S,Qt),e(Qt,Ze),e(Ze,ms),e(S,ps),e(S,Yt),e(Yt,Ge),e(Ge,hs),e(f,fs),e(f,C),v(Xe,C,null),e(C,us),e(C,Y),e(Y,gs),e(Y,wt),e(wt,_s),e(Y,xs),e(Y,eo),e(eo,vs),e(Y,Ts),e(C,bs),v(me,C,null),e(C,Es),e(C,to),e(to,ys),e(C,js),v(Ke,C,null),uo=!0},p(o,[m]){const Qe={};m&2&&(Qe.$$scope={dirty:m,ctx:o}),de.$set(Qe);const oo={};m&2&&(oo.$$scope={dirty:m,ctx:o}),me.$set(oo)},i(o){uo||(T(y.$$.fragment,o),T(he.$$.fragment,o),T(ue.$$.fragment,o),T(ge.$$.fragment,o),T(_e.$$.fragment,o),T(xe.$$.fragment,o),T(Te.$$.fragment,o),T(Ee.$$.fragment,o),T(ye.$$.fragment,o),T(je.$$.fragment,o),T(Ve.$$.fragment,o),T(De.$$.fragment,o),T($e.$$.fragment,o),T(Ae.$$.fragment,o),T(de.$$.fragment,o),T(qe.$$.fragment,o),T(Le.$$.fragment,o),T(Se.$$.fragment,o),T(Xe.$$.fragment,o),T(me.$$.fragment,o),T(Ke.$$.fragment,o),uo=!0)},o(o){b(y.$$.fragment,o),b(he.$$.fragment,o),b(ue.$$.fragment,o),b(ge.$$.fragment,o),b(_e.$$.fragment,o),b(xe.$$.fragment,o),b(Te.$$.fragment,o),b(Ee.$$.fragment,o),b(ye.$$.fragment,o),b(je.$$.fragment,o),b(Ve.$$.fragment,o),b(De.$$.fragment,o),b($e.$$.fragment,o),b(Ae.$$.fragment,o),b(de.$$.fragment,o),b(qe.$$.fragment,o),b(Le.$$.fragment,o),b(Se.$$.fragment,o),b(Xe.$$.fragment,o),b(me.$$.fragment,o),b(Ke.$$.fragment,o),uo=!1},d(o){t(p),o&&t(q),o&&t(g),E(y),o&&t(no),o&&t(J),E(he),o&&t(ao),o&&t(u),o&&t(so),o&&t(te),o&&t(ro),o&&t(H),E(ue),o&&t(io),o&&t(j),E(ge),E(_e),E(xe),E(Te),o&&t(lo),o&&t(G),E(Ee),o&&t(co),o&&t(P),E(ye),E(je),E(Ve),o&&t(mo),o&&t(X),E(De),o&&t(po),o&&t(w),E($e),E(Ae),E(de),E(qe),o&&t(ho),o&&t(Q),E(Le),o&&t(fo),o&&t(f),E(Se),E(Xe),E(me),E(Ke)}}}const Zr={local:"visiontextdualencoder",sections:[{local:"overview",title:"Overview"},{local:"transformers.VisionTextDualEncoderConfig",title:"VisionTextDualEncoderConfig"},{local:"transformers.VisionTextDualEncoderProcessor",title:"VisionTextDualEncoderProcessor"},{local:"transformers.VisionTextDualEncoderModel",title:"VisionTextDualEncoderModel"},{local:"transformers.FlaxVisionTextDualEncoderModel",title:"FlaxVisionTextDualEncoderModel"}],title:"VisionTextDualEncoder"};function Gr(et){return Rr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ti extends Nr{constructor(p){super();Or(this,p,Gr,Hr,Br,{})}}export{ti as default,Zr as metadata};
