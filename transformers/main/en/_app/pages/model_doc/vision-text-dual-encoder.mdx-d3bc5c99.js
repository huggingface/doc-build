import{S as Nr,i as Br,s as Or,e as n,k as d,w as _,t as r,M as Wr,c as a,d as t,m as c,a as s,x as v,h as i,b as l,F as e,g as h,y as x,q as T,o as E,B as b}from"../../chunks/vendor-4833417e.js";import{T as Sr}from"../../chunks/Tip-fffd6df1.js";import{D as U}from"../../chunks/Docstring-4f315ed9.js";import{C as ys}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as Vt}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Rr(he){let p,M,f,j,q;return{c(){p=n("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),j=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var $=s(p);M=i($,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a($,"CODE",{});var L=s(f);j=i(L,"Module"),L.forEach(t),q=i($,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),$.forEach(t)},m(w,$){h(w,p,$),e(p,M),e(p,f),e(f,j),e(p,q)},d(w){w&&t(p)}}}function Ur(he){let p,M,f,j,q;return{c(){p=n("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),j=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var $=s(p);M=i($,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a($,"CODE",{});var L=s(f);j=i(L,"Module"),L.forEach(t),q=i($,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),$.forEach(t)},m(w,$){h(w,p,$),e(p,M),e(p,f),e(f,j),e(p,q)},d(w){w&&t(p)}}}function Jr(he){let p,M,f,j,q,w,$,L,Lo,no,J,ee,Dt,fe,So,$t,No,ao,g,Bo,tt,Oo,Wo,Pt,Ro,Uo,ot,Jo,Ho,nt,Zo,Go,at,Xo,Ko,Mt,Qo,Yo,st,en,tn,rt,on,nn,so,te,an,ue,sn,rn,ro,H,oe,zt,ge,ln,Ct,dn,io,y,_e,cn,B,it,mn,pn,lt,hn,fn,dt,un,gn,_n,Z,vn,ct,xn,Tn,mt,En,bn,jn,Ft,wn,yn,ve,kn,ne,xe,Vn,Te,Dn,pt,$n,Pn,Mn,ae,Ee,zn,be,Cn,ht,Fn,In,lo,G,se,It,je,An,At,qn,co,P,we,Ln,qt,Sn,Nn,z,ft,Bn,On,ut,Wn,Rn,gt,Un,Jn,Lt,Hn,Zn,_t,Gn,Xn,Kn,re,ye,Qn,ke,Yn,vt,ea,ta,oa,ie,Ve,na,De,aa,xt,sa,ra,mo,X,le,St,$e,ia,Nt,la,po,k,Pe,da,Me,ca,Bt,ma,pa,ha,ze,fa,Ce,ua,ga,_a,Ot,va,xa,Fe,Ta,Tt,Ea,ba,ja,Ie,wa,Ae,ya,ka,Va,C,qe,Da,K,$a,Et,Pa,Ma,Wt,za,Ca,Fa,de,Ia,Rt,Aa,qa,Le,ho,Q,ce,Ut,Se,La,Jt,Sa,fo,u,Ne,Na,Be,Ba,Ht,Oa,Wa,Ra,Oe,Ua,We,Ja,Ha,Za,Zt,Ga,Xa,Re,Ka,bt,Qa,Ya,es,Ue,ts,Je,os,ns,as,Gt,ss,rs,S,Xt,He,is,ls,Kt,Ze,ds,cs,Qt,Ge,ms,ps,Yt,Xe,hs,fs,F,Ke,us,Y,gs,jt,_s,vs,eo,xs,Ts,Es,me,bs,to,js,ws,Qe,uo;return w=new Vt({}),fe=new Vt({}),ge=new Vt({}),_e=new U({props:{name:"class transformers.VisionTextDualEncoderConfig",anchor:"transformers.VisionTextDualEncoderConfig",parameters:[{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L28",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>) &#x2014;
Dictionary of configuration options that defines text model config.`,name:"text_config_dict"},{anchor:"transformers.VisionTextDualEncoderConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>) &#x2014;
Dictionary of configuration options that defines vison model config.`,name:"vision_config_dict"},{anchor:"transformers.VisionTextDualEncoderConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.VisionTextDualEncoderConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.VisionTextDualEncoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}]}}),ve=new ys({props:{code:`from transformers import ViTConfig, BertConfig, VisionTextDualEncoderConfig, VisionTextDualEncoderModel

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
`}}),Ee=new U({props:{name:"to_dict",anchor:"transformers.VisionTextDualEncoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L117",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),je=new Vt({}),we=new U({props:{name:"class transformers.VisionTextDualEncoderProcessor",anchor:"transformers.VisionTextDualEncoderProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L23",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.VisionTextDualEncoderProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}]}}),ye=new U({props:{name:"batch_decode",anchor:"transformers.VisionTextDualEncoderProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L98"}}),Ve=new U({props:{name:"decode",anchor:"transformers.VisionTextDualEncoderProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L105"}}),$e=new Vt({}),Pe=new U({props:{name:"class transformers.VisionTextDualEncoderModel",anchor:"transformers.VisionTextDualEncoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.models.vision_text_dual_encoder.configuration_vision_text_dual_encoder.VisionTextDualEncoderConfig] = None"},{name:"vision_model",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"text_model",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/modeling_vision_text_dual_encoder.py#L163",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),qe=new U({props:{name:"forward",anchor:"transformers.VisionTextDualEncoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"return_loss",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/modeling_vision_text_dual_encoder.py#L295",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),de=new Sr({props:{$$slots:{default:[Rr]},$$scope:{ctx:he}}}),Le=new ys({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Se=new Vt({}),Ne=new U({props:{name:"class transformers.FlaxVisionTextDualEncoderModel",anchor:"transformers.FlaxVisionTextDualEncoderModel",parameters:[{name:"config",val:": VisionTextDualEncoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/modeling_flax_vision_text_dual_encoder.py#L219",parametersDescription:[{anchor:"transformers.FlaxVisionTextDualEncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig">VisionTextDualEncoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Ke=new U({props:{name:"__call__",anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/modeling_flax_vision_text_dual_encoder.py#L251",parametersDescription:[{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),me=new Sr({props:{$$slots:{default:[Ur]},$$scope:{ctx:he}}}),Qe=new ys({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){p=n("meta"),M=d(),f=n("h1"),j=n("a"),q=n("span"),_(w.$$.fragment),$=d(),L=n("span"),Lo=r("VisionTextDualEncoder"),no=d(),J=n("h2"),ee=n("a"),Dt=n("span"),_(fe.$$.fragment),So=d(),$t=n("span"),No=r("Overview"),ao=d(),g=n("p"),Bo=r("The "),tt=n("a"),Oo=r("VisionTextDualEncoderModel"),Wo=r(` can be used to initialize a vision-text dual encoder model with
any pretrained vision autoencoding model as the vision encoder (`),Pt=n("em"),Ro=r("e.g."),Uo=d(),ot=n("a"),Jo=r("ViT"),Ho=r(", "),nt=n("a"),Zo=r("BEiT"),Go=r(", "),at=n("a"),Xo=r("DeiT"),Ko=r(") and any pretrained text autoencoding model as the text encoder ("),Mt=n("em"),Qo=r("e.g."),Yo=d(),st=n("a"),en=r("RoBERTa"),tn=r(", "),rt=n("a"),on=r("BERT"),nn=r(`). Two projection layers are added on top of both the vision and text encoder to project the output embeddings
to a shared latent space. The projection layers are randomly initialized so the model should be fine-tuned on a
downstream task. This model can be used to align the vision-text embeddings using CLIP like contrastive image-text
training and then can be used for zero-shot vision tasks such image-classification or retrieval.`),so=d(),te=n("p"),an=r("In "),ue=n("a"),sn=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),rn=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment on
new zero-shot vision tasks such as image classification or retrieval.`),ro=d(),H=n("h2"),oe=n("a"),zt=n("span"),_(ge.$$.fragment),ln=d(),Ct=n("span"),dn=r("VisionTextDualEncoderConfig"),io=d(),y=n("div"),_(_e.$$.fragment),cn=d(),B=n("p"),it=n("a"),mn=r("VisionTextDualEncoderConfig"),pn=r(` is the configuration class to store the configuration of a
`),lt=n("a"),hn=r("VisionTextDualEncoderModel"),fn=r(". It is used to instantiate "),dt=n("a"),un=r("VisionTextDualEncoderModel"),gn=r(` model according to the
specified arguments, defining the text model and vision model configs.`),_n=d(),Z=n("p"),vn=r("Configuration objects inherit from "),ct=n("a"),xn=r("PretrainedConfig"),Tn=r(` and can be used to control the model outputs. Read the
documentation from `),mt=n("a"),En=r("PretrainedConfig"),bn=r(" for more information."),jn=d(),Ft=n("p"),wn=r("Examples:"),yn=d(),_(ve.$$.fragment),kn=d(),ne=n("div"),_(xe.$$.fragment),Vn=d(),Te=n("p"),Dn=r("Instantiate a "),pt=n("a"),$n=r("VisionTextDualEncoderConfig"),Pn=r(` (or a derived class) from text model configuration and vision
model configuration.`),Mn=d(),ae=n("div"),_(Ee.$$.fragment),zn=d(),be=n("p"),Cn=r("Serializes this instance to a Python dictionary. Override the default "),ht=n("a"),Fn=r("to_dict()"),In=r("."),lo=d(),G=n("h2"),se=n("a"),It=n("span"),_(je.$$.fragment),An=d(),At=n("span"),qn=r("VisionTextDualEncoderProcessor"),co=d(),P=n("div"),_(we.$$.fragment),Ln=d(),qt=n("p"),Sn=r(`Constructs a VisionTextDualEncoder processor which wraps a vision feature extractor and a tokenizer into a single
processor.`),Nn=d(),z=n("p"),ft=n("a"),Bn=r("VisionTextDualEncoderProcessor"),On=r(" offers all the functionalities of "),ut=n("a"),Wn=r("AutoFeatureExtractor"),Rn=r(` and
`),gt=n("a"),Un=r("AutoTokenizer"),Jn=r(". See the "),Lt=n("code"),Hn=r("__call__()"),Zn=r(`and
`),_t=n("a"),Gn=r("decode()"),Xn=r(" for more information."),Kn=d(),re=n("div"),_(ye.$$.fragment),Qn=d(),ke=n("p"),Yn=r(`This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s
`),vt=n("a"),ea=r("batch_decode()"),ta=r(". Please refer to the docstring of this method for more information."),oa=d(),ie=n("div"),_(Ve.$$.fragment),na=d(),De=n("p"),aa=r("This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s "),xt=n("a"),sa=r("decode()"),ra=r(`.
Please refer to the docstring of this method for more information.`),mo=d(),X=n("h2"),le=n("a"),St=n("span"),_($e.$$.fragment),ia=d(),Nt=n("span"),la=r("VisionTextDualEncoderModel"),po=d(),k=n("div"),_(Pe.$$.fragment),da=d(),Me=n("p"),ca=r(`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Bt=n("code"),ma=r("from_pretrained()"),pa=r(`method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),ha=d(),ze=n("p"),fa=r("In "),Ce=n("a"),ua=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),ga=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),_a=d(),Ot=n("p"),va=r(`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),xa=d(),Fe=n("p"),Ta=r("This model inherits from "),Tt=n("a"),Ea=r("PreTrainedModel"),ba=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ja=d(),Ie=n("p"),wa=r("This model is also a PyTorch "),Ae=n("a"),ya=r("torch.nn.Module"),ka=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Va=d(),C=n("div"),_(qe.$$.fragment),Da=d(),K=n("p"),$a=r("The "),Et=n("a"),Pa=r("VisionTextDualEncoderModel"),Ma=r(" forward method, overrides the "),Wt=n("code"),za=r("__call__"),Ca=r(" special method."),Fa=d(),_(de.$$.fragment),Ia=d(),Rt=n("p"),Aa=r("Examples:"),qa=d(),_(Le.$$.fragment),ho=d(),Q=n("h2"),ce=n("a"),Ut=n("span"),_(Se.$$.fragment),La=d(),Jt=n("span"),Sa=r("FlaxVisionTextDualEncoderModel"),fo=d(),u=n("div"),_(Ne.$$.fragment),Na=d(),Be=n("p"),Ba=r(`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Ht=n("code"),Oa=r("from_pretrained()"),Wa=r(`method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Ra=d(),Oe=n("p"),Ua=r("In "),We=n("a"),Ja=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),Ha=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Za=d(),Zt=n("p"),Ga=r(`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Xa=d(),Re=n("p"),Ka=r("This model inherits from "),bt=n("a"),Qa=r("PreTrainedModel"),Ya=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),es=d(),Ue=n("p"),ts=r("This model is also a Flax Linen "),Je=n("a"),os=r("flax.linen.Module"),ns=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),as=d(),Gt=n("p"),ss=r("Finally, this model supports inherent JAX features such as:"),rs=d(),S=n("ul"),Xt=n("li"),He=n("a"),is=r("Just-In-Time (JIT) compilation"),ls=d(),Kt=n("li"),Ze=n("a"),ds=r("Automatic Differentiation"),cs=d(),Qt=n("li"),Ge=n("a"),ms=r("Vectorization"),ps=d(),Yt=n("li"),Xe=n("a"),hs=r("Parallelization"),fs=d(),F=n("div"),_(Ke.$$.fragment),us=d(),Y=n("p"),gs=r("The "),jt=n("a"),_s=r("FlaxVisionTextDualEncoderModel"),vs=r(" forward method, overrides the "),eo=n("code"),xs=r("__call__"),Ts=r(" special method."),Es=d(),_(me.$$.fragment),bs=d(),to=n("p"),js=r("Examples:"),ws=d(),_(Qe.$$.fragment),this.h()},l(o){const m=Wr('[data-svelte="svelte-1phssyn"]',document.head);p=a(m,"META",{name:!0,content:!0}),m.forEach(t),M=c(o),f=a(o,"H1",{class:!0});var Ye=s(f);j=a(Ye,"A",{id:!0,class:!0,href:!0});var oo=s(j);q=a(oo,"SPAN",{});var ks=s(q);v(w.$$.fragment,ks),ks.forEach(t),oo.forEach(t),$=c(Ye),L=a(Ye,"SPAN",{});var Vs=s(L);Lo=i(Vs,"VisionTextDualEncoder"),Vs.forEach(t),Ye.forEach(t),no=c(o),J=a(o,"H2",{class:!0});var go=s(J);ee=a(go,"A",{id:!0,class:!0,href:!0});var Ds=s(ee);Dt=a(Ds,"SPAN",{});var $s=s(Dt);v(fe.$$.fragment,$s),$s.forEach(t),Ds.forEach(t),So=c(go),$t=a(go,"SPAN",{});var Ps=s($t);No=i(Ps,"Overview"),Ps.forEach(t),go.forEach(t),ao=c(o),g=a(o,"P",{});var V=s(g);Bo=i(V,"The "),tt=a(V,"A",{href:!0});var Ms=s(tt);Oo=i(Ms,"VisionTextDualEncoderModel"),Ms.forEach(t),Wo=i(V,` can be used to initialize a vision-text dual encoder model with
any pretrained vision autoencoding model as the vision encoder (`),Pt=a(V,"EM",{});var zs=s(Pt);Ro=i(zs,"e.g."),zs.forEach(t),Uo=c(V),ot=a(V,"A",{href:!0});var Cs=s(ot);Jo=i(Cs,"ViT"),Cs.forEach(t),Ho=i(V,", "),nt=a(V,"A",{href:!0});var Fs=s(nt);Zo=i(Fs,"BEiT"),Fs.forEach(t),Go=i(V,", "),at=a(V,"A",{href:!0});var Is=s(at);Xo=i(Is,"DeiT"),Is.forEach(t),Ko=i(V,") and any pretrained text autoencoding model as the text encoder ("),Mt=a(V,"EM",{});var As=s(Mt);Qo=i(As,"e.g."),As.forEach(t),Yo=c(V),st=a(V,"A",{href:!0});var qs=s(st);en=i(qs,"RoBERTa"),qs.forEach(t),tn=i(V,", "),rt=a(V,"A",{href:!0});var Ls=s(rt);on=i(Ls,"BERT"),Ls.forEach(t),nn=i(V,`). Two projection layers are added on top of both the vision and text encoder to project the output embeddings
to a shared latent space. The projection layers are randomly initialized so the model should be fine-tuned on a
downstream task. This model can be used to align the vision-text embeddings using CLIP like contrastive image-text
training and then can be used for zero-shot vision tasks such image-classification or retrieval.`),V.forEach(t),so=c(o),te=a(o,"P",{});var _o=s(te);an=i(_o,"In "),ue=a(_o,"A",{href:!0,rel:!0});var Ss=s(ue);sn=i(Ss,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),Ss.forEach(t),rn=i(_o,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment on
new zero-shot vision tasks such as image classification or retrieval.`),_o.forEach(t),ro=c(o),H=a(o,"H2",{class:!0});var vo=s(H);oe=a(vo,"A",{id:!0,class:!0,href:!0});var Ns=s(oe);zt=a(Ns,"SPAN",{});var Bs=s(zt);v(ge.$$.fragment,Bs),Bs.forEach(t),Ns.forEach(t),ln=c(vo),Ct=a(vo,"SPAN",{});var Os=s(Ct);dn=i(Os,"VisionTextDualEncoderConfig"),Os.forEach(t),vo.forEach(t),io=c(o),y=a(o,"DIV",{class:!0});var I=s(y);v(_e.$$.fragment,I),cn=c(I),B=a(I,"P",{});var et=s(B);it=a(et,"A",{href:!0});var Ws=s(it);mn=i(Ws,"VisionTextDualEncoderConfig"),Ws.forEach(t),pn=i(et,` is the configuration class to store the configuration of a
`),lt=a(et,"A",{href:!0});var Rs=s(lt);hn=i(Rs,"VisionTextDualEncoderModel"),Rs.forEach(t),fn=i(et,". It is used to instantiate "),dt=a(et,"A",{href:!0});var Us=s(dt);un=i(Us,"VisionTextDualEncoderModel"),Us.forEach(t),gn=i(et,` model according to the
specified arguments, defining the text model and vision model configs.`),et.forEach(t),_n=c(I),Z=a(I,"P",{});var wt=s(Z);vn=i(wt,"Configuration objects inherit from "),ct=a(wt,"A",{href:!0});var Js=s(ct);xn=i(Js,"PretrainedConfig"),Js.forEach(t),Tn=i(wt,` and can be used to control the model outputs. Read the
documentation from `),mt=a(wt,"A",{href:!0});var Hs=s(mt);En=i(Hs,"PretrainedConfig"),Hs.forEach(t),bn=i(wt," for more information."),wt.forEach(t),jn=c(I),Ft=a(I,"P",{});var Zs=s(Ft);wn=i(Zs,"Examples:"),Zs.forEach(t),yn=c(I),v(ve.$$.fragment,I),kn=c(I),ne=a(I,"DIV",{class:!0});var xo=s(ne);v(xe.$$.fragment,xo),Vn=c(xo),Te=a(xo,"P",{});var To=s(Te);Dn=i(To,"Instantiate a "),pt=a(To,"A",{href:!0});var Gs=s(pt);$n=i(Gs,"VisionTextDualEncoderConfig"),Gs.forEach(t),Pn=i(To,` (or a derived class) from text model configuration and vision
model configuration.`),To.forEach(t),xo.forEach(t),Mn=c(I),ae=a(I,"DIV",{class:!0});var Eo=s(ae);v(Ee.$$.fragment,Eo),zn=c(Eo),be=a(Eo,"P",{});var bo=s(be);Cn=i(bo,"Serializes this instance to a Python dictionary. Override the default "),ht=a(bo,"A",{href:!0});var Xs=s(ht);Fn=i(Xs,"to_dict()"),Xs.forEach(t),In=i(bo,"."),bo.forEach(t),Eo.forEach(t),I.forEach(t),lo=c(o),G=a(o,"H2",{class:!0});var jo=s(G);se=a(jo,"A",{id:!0,class:!0,href:!0});var Ks=s(se);It=a(Ks,"SPAN",{});var Qs=s(It);v(je.$$.fragment,Qs),Qs.forEach(t),Ks.forEach(t),An=c(jo),At=a(jo,"SPAN",{});var Ys=s(At);qn=i(Ys,"VisionTextDualEncoderProcessor"),Ys.forEach(t),jo.forEach(t),co=c(o),P=a(o,"DIV",{class:!0});var O=s(P);v(we.$$.fragment,O),Ln=c(O),qt=a(O,"P",{});var er=s(qt);Sn=i(er,`Constructs a VisionTextDualEncoder processor which wraps a vision feature extractor and a tokenizer into a single
processor.`),er.forEach(t),Nn=c(O),z=a(O,"P",{});var N=s(z);ft=a(N,"A",{href:!0});var tr=s(ft);Bn=i(tr,"VisionTextDualEncoderProcessor"),tr.forEach(t),On=i(N," offers all the functionalities of "),ut=a(N,"A",{href:!0});var or=s(ut);Wn=i(or,"AutoFeatureExtractor"),or.forEach(t),Rn=i(N,` and
`),gt=a(N,"A",{href:!0});var nr=s(gt);Un=i(nr,"AutoTokenizer"),nr.forEach(t),Jn=i(N,". See the "),Lt=a(N,"CODE",{});var ar=s(Lt);Hn=i(ar,"__call__()"),ar.forEach(t),Zn=i(N,`and
`),_t=a(N,"A",{href:!0});var sr=s(_t);Gn=i(sr,"decode()"),sr.forEach(t),Xn=i(N," for more information."),N.forEach(t),Kn=c(O),re=a(O,"DIV",{class:!0});var wo=s(re);v(ye.$$.fragment,wo),Qn=c(wo),ke=a(wo,"P",{});var yo=s(ke);Yn=i(yo,`This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s
`),vt=a(yo,"A",{href:!0});var rr=s(vt);ea=i(rr,"batch_decode()"),rr.forEach(t),ta=i(yo,". Please refer to the docstring of this method for more information."),yo.forEach(t),wo.forEach(t),oa=c(O),ie=a(O,"DIV",{class:!0});var ko=s(ie);v(Ve.$$.fragment,ko),na=c(ko),De=a(ko,"P",{});var Vo=s(De);aa=i(Vo,"This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s "),xt=a(Vo,"A",{href:!0});var ir=s(xt);sa=i(ir,"decode()"),ir.forEach(t),ra=i(Vo,`.
Please refer to the docstring of this method for more information.`),Vo.forEach(t),ko.forEach(t),O.forEach(t),mo=c(o),X=a(o,"H2",{class:!0});var Do=s(X);le=a(Do,"A",{id:!0,class:!0,href:!0});var lr=s(le);St=a(lr,"SPAN",{});var dr=s(St);v($e.$$.fragment,dr),dr.forEach(t),lr.forEach(t),ia=c(Do),Nt=a(Do,"SPAN",{});var cr=s(Nt);la=i(cr,"VisionTextDualEncoderModel"),cr.forEach(t),Do.forEach(t),po=c(o),k=a(o,"DIV",{class:!0});var A=s(k);v(Pe.$$.fragment,A),da=c(A),Me=a(A,"P",{});var $o=s(Me);ca=i($o,`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Bt=a($o,"CODE",{});var mr=s(Bt);ma=i(mr,"from_pretrained()"),mr.forEach(t),pa=i($o,`method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),$o.forEach(t),ha=c(A),ze=a(A,"P",{});var Po=s(ze);fa=i(Po,"In "),Ce=a(Po,"A",{href:!0,rel:!0});var pr=s(Ce);ua=i(pr,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),pr.forEach(t),ga=i(Po,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Po.forEach(t),_a=c(A),Ot=a(A,"P",{});var hr=s(Ot);va=i(hr,`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),hr.forEach(t),xa=c(A),Fe=a(A,"P",{});var Mo=s(Fe);Ta=i(Mo,"This model inherits from "),Tt=a(Mo,"A",{href:!0});var fr=s(Tt);Ea=i(fr,"PreTrainedModel"),fr.forEach(t),ba=i(Mo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mo.forEach(t),ja=c(A),Ie=a(A,"P",{});var zo=s(Ie);wa=i(zo,"This model is also a PyTorch "),Ae=a(zo,"A",{href:!0,rel:!0});var ur=s(Ae);ya=i(ur,"torch.nn.Module"),ur.forEach(t),ka=i(zo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zo.forEach(t),Va=c(A),C=a(A,"DIV",{class:!0});var W=s(C);v(qe.$$.fragment,W),Da=c(W),K=a(W,"P",{});var yt=s(K);$a=i(yt,"The "),Et=a(yt,"A",{href:!0});var gr=s(Et);Pa=i(gr,"VisionTextDualEncoderModel"),gr.forEach(t),Ma=i(yt," forward method, overrides the "),Wt=a(yt,"CODE",{});var _r=s(Wt);za=i(_r,"__call__"),_r.forEach(t),Ca=i(yt," special method."),yt.forEach(t),Fa=c(W),v(de.$$.fragment,W),Ia=c(W),Rt=a(W,"P",{});var vr=s(Rt);Aa=i(vr,"Examples:"),vr.forEach(t),qa=c(W),v(Le.$$.fragment,W),W.forEach(t),A.forEach(t),ho=c(o),Q=a(o,"H2",{class:!0});var Co=s(Q);ce=a(Co,"A",{id:!0,class:!0,href:!0});var xr=s(ce);Ut=a(xr,"SPAN",{});var Tr=s(Ut);v(Se.$$.fragment,Tr),Tr.forEach(t),xr.forEach(t),La=c(Co),Jt=a(Co,"SPAN",{});var Er=s(Jt);Sa=i(Er,"FlaxVisionTextDualEncoderModel"),Er.forEach(t),Co.forEach(t),fo=c(o),u=a(o,"DIV",{class:!0});var D=s(u);v(Ne.$$.fragment,D),Na=c(D),Be=a(D,"P",{});var Fo=s(Be);Ba=i(Fo,`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Ht=a(Fo,"CODE",{});var br=s(Ht);Oa=i(br,"from_pretrained()"),br.forEach(t),Wa=i(Fo,`method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Fo.forEach(t),Ra=c(D),Oe=a(D,"P",{});var Io=s(Oe);Ua=i(Io,"In "),We=a(Io,"A",{href:!0,rel:!0});var jr=s(We);Ja=i(jr,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),jr.forEach(t),Ha=i(Io,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Io.forEach(t),Za=c(D),Zt=a(D,"P",{});var wr=s(Zt);Ga=i(wr,`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),wr.forEach(t),Xa=c(D),Re=a(D,"P",{});var Ao=s(Re);Ka=i(Ao,"This model inherits from "),bt=a(Ao,"A",{href:!0});var yr=s(bt);Qa=i(yr,"PreTrainedModel"),yr.forEach(t),Ya=i(Ao,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ao.forEach(t),es=c(D),Ue=a(D,"P",{});var qo=s(Ue);ts=i(qo,"This model is also a Flax Linen "),Je=a(qo,"A",{href:!0,rel:!0});var kr=s(Je);os=i(kr,"flax.linen.Module"),kr.forEach(t),ns=i(qo,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qo.forEach(t),as=c(D),Gt=a(D,"P",{});var Vr=s(Gt);ss=i(Vr,"Finally, this model supports inherent JAX features such as:"),Vr.forEach(t),rs=c(D),S=a(D,"UL",{});var pe=s(S);Xt=a(pe,"LI",{});var Dr=s(Xt);He=a(Dr,"A",{href:!0,rel:!0});var $r=s(He);is=i($r,"Just-In-Time (JIT) compilation"),$r.forEach(t),Dr.forEach(t),ls=c(pe),Kt=a(pe,"LI",{});var Pr=s(Kt);Ze=a(Pr,"A",{href:!0,rel:!0});var Mr=s(Ze);ds=i(Mr,"Automatic Differentiation"),Mr.forEach(t),Pr.forEach(t),cs=c(pe),Qt=a(pe,"LI",{});var zr=s(Qt);Ge=a(zr,"A",{href:!0,rel:!0});var Cr=s(Ge);ms=i(Cr,"Vectorization"),Cr.forEach(t),zr.forEach(t),ps=c(pe),Yt=a(pe,"LI",{});var Fr=s(Yt);Xe=a(Fr,"A",{href:!0,rel:!0});var Ir=s(Xe);hs=i(Ir,"Parallelization"),Ir.forEach(t),Fr.forEach(t),pe.forEach(t),fs=c(D),F=a(D,"DIV",{class:!0});var R=s(F);v(Ke.$$.fragment,R),us=c(R),Y=a(R,"P",{});var kt=s(Y);gs=i(kt,"The "),jt=a(kt,"A",{href:!0});var Ar=s(jt);_s=i(Ar,"FlaxVisionTextDualEncoderModel"),Ar.forEach(t),vs=i(kt," forward method, overrides the "),eo=a(kt,"CODE",{});var qr=s(eo);xs=i(qr,"__call__"),qr.forEach(t),Ts=i(kt," special method."),kt.forEach(t),Es=c(R),v(me.$$.fragment,R),bs=c(R),to=a(R,"P",{});var Lr=s(to);js=i(Lr,"Examples:"),Lr.forEach(t),ws=c(R),v(Qe.$$.fragment,R),R.forEach(t),D.forEach(t),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(Hr)),l(j,"id","visiontextdualencoder"),l(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(j,"href","#visiontextdualencoder"),l(f,"class","relative group"),l(ee,"id","overview"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#overview"),l(J,"class","relative group"),l(tt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(ot,"href","vit"),l(nt,"href","beit"),l(at,"href","deit"),l(st,"href","roberta"),l(rt,"href","bert"),l(ue,"href","https://arxiv.org/abs/2111.07991"),l(ue,"rel","nofollow"),l(oe,"id","transformers.VisionTextDualEncoderConfig"),l(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(oe,"href","#transformers.VisionTextDualEncoderConfig"),l(H,"class","relative group"),l(it,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"),l(lt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(dt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(ct,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(mt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(pt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"),l(ne,"class","docstring"),l(ht,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig.to_dict"),l(ae,"class","docstring"),l(y,"class","docstring"),l(se,"id","transformers.VisionTextDualEncoderProcessor"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#transformers.VisionTextDualEncoderProcessor"),l(G,"class","relative group"),l(ft,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderProcessor"),l(ut,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor"),l(gt,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer"),l(_t,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderProcessor.decode"),l(vt,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),l(re,"class","docstring"),l(xt,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),l(ie,"class","docstring"),l(P,"class","docstring"),l(le,"id","transformers.VisionTextDualEncoderModel"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.VisionTextDualEncoderModel"),l(X,"class","relative group"),l(Ce,"href","https://arxiv.org/abs/2111.07991"),l(Ce,"rel","nofollow"),l(Tt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Ae,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ae,"rel","nofollow"),l(Et,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(C,"class","docstring"),l(k,"class","docstring"),l(ce,"id","transformers.FlaxVisionTextDualEncoderModel"),l(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ce,"href","#transformers.FlaxVisionTextDualEncoderModel"),l(Q,"class","relative group"),l(We,"href","https://arxiv.org/abs/2111.07991"),l(We,"rel","nofollow"),l(bt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Je,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(Je,"rel","nofollow"),l(He,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(He,"rel","nofollow"),l(Ze,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(Ze,"rel","nofollow"),l(Ge,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Ge,"rel","nofollow"),l(Xe,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(Xe,"rel","nofollow"),l(jt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.FlaxVisionTextDualEncoderModel"),l(F,"class","docstring"),l(u,"class","docstring")},m(o,m){e(document.head,p),h(o,M,m),h(o,f,m),e(f,j),e(j,q),x(w,q,null),e(f,$),e(f,L),e(L,Lo),h(o,no,m),h(o,J,m),e(J,ee),e(ee,Dt),x(fe,Dt,null),e(J,So),e(J,$t),e($t,No),h(o,ao,m),h(o,g,m),e(g,Bo),e(g,tt),e(tt,Oo),e(g,Wo),e(g,Pt),e(Pt,Ro),e(g,Uo),e(g,ot),e(ot,Jo),e(g,Ho),e(g,nt),e(nt,Zo),e(g,Go),e(g,at),e(at,Xo),e(g,Ko),e(g,Mt),e(Mt,Qo),e(g,Yo),e(g,st),e(st,en),e(g,tn),e(g,rt),e(rt,on),e(g,nn),h(o,so,m),h(o,te,m),e(te,an),e(te,ue),e(ue,sn),e(te,rn),h(o,ro,m),h(o,H,m),e(H,oe),e(oe,zt),x(ge,zt,null),e(H,ln),e(H,Ct),e(Ct,dn),h(o,io,m),h(o,y,m),x(_e,y,null),e(y,cn),e(y,B),e(B,it),e(it,mn),e(B,pn),e(B,lt),e(lt,hn),e(B,fn),e(B,dt),e(dt,un),e(B,gn),e(y,_n),e(y,Z),e(Z,vn),e(Z,ct),e(ct,xn),e(Z,Tn),e(Z,mt),e(mt,En),e(Z,bn),e(y,jn),e(y,Ft),e(Ft,wn),e(y,yn),x(ve,y,null),e(y,kn),e(y,ne),x(xe,ne,null),e(ne,Vn),e(ne,Te),e(Te,Dn),e(Te,pt),e(pt,$n),e(Te,Pn),e(y,Mn),e(y,ae),x(Ee,ae,null),e(ae,zn),e(ae,be),e(be,Cn),e(be,ht),e(ht,Fn),e(be,In),h(o,lo,m),h(o,G,m),e(G,se),e(se,It),x(je,It,null),e(G,An),e(G,At),e(At,qn),h(o,co,m),h(o,P,m),x(we,P,null),e(P,Ln),e(P,qt),e(qt,Sn),e(P,Nn),e(P,z),e(z,ft),e(ft,Bn),e(z,On),e(z,ut),e(ut,Wn),e(z,Rn),e(z,gt),e(gt,Un),e(z,Jn),e(z,Lt),e(Lt,Hn),e(z,Zn),e(z,_t),e(_t,Gn),e(z,Xn),e(P,Kn),e(P,re),x(ye,re,null),e(re,Qn),e(re,ke),e(ke,Yn),e(ke,vt),e(vt,ea),e(ke,ta),e(P,oa),e(P,ie),x(Ve,ie,null),e(ie,na),e(ie,De),e(De,aa),e(De,xt),e(xt,sa),e(De,ra),h(o,mo,m),h(o,X,m),e(X,le),e(le,St),x($e,St,null),e(X,ia),e(X,Nt),e(Nt,la),h(o,po,m),h(o,k,m),x(Pe,k,null),e(k,da),e(k,Me),e(Me,ca),e(Me,Bt),e(Bt,ma),e(Me,pa),e(k,ha),e(k,ze),e(ze,fa),e(ze,Ce),e(Ce,ua),e(ze,ga),e(k,_a),e(k,Ot),e(Ot,va),e(k,xa),e(k,Fe),e(Fe,Ta),e(Fe,Tt),e(Tt,Ea),e(Fe,ba),e(k,ja),e(k,Ie),e(Ie,wa),e(Ie,Ae),e(Ae,ya),e(Ie,ka),e(k,Va),e(k,C),x(qe,C,null),e(C,Da),e(C,K),e(K,$a),e(K,Et),e(Et,Pa),e(K,Ma),e(K,Wt),e(Wt,za),e(K,Ca),e(C,Fa),x(de,C,null),e(C,Ia),e(C,Rt),e(Rt,Aa),e(C,qa),x(Le,C,null),h(o,ho,m),h(o,Q,m),e(Q,ce),e(ce,Ut),x(Se,Ut,null),e(Q,La),e(Q,Jt),e(Jt,Sa),h(o,fo,m),h(o,u,m),x(Ne,u,null),e(u,Na),e(u,Be),e(Be,Ba),e(Be,Ht),e(Ht,Oa),e(Be,Wa),e(u,Ra),e(u,Oe),e(Oe,Ua),e(Oe,We),e(We,Ja),e(Oe,Ha),e(u,Za),e(u,Zt),e(Zt,Ga),e(u,Xa),e(u,Re),e(Re,Ka),e(Re,bt),e(bt,Qa),e(Re,Ya),e(u,es),e(u,Ue),e(Ue,ts),e(Ue,Je),e(Je,os),e(Ue,ns),e(u,as),e(u,Gt),e(Gt,ss),e(u,rs),e(u,S),e(S,Xt),e(Xt,He),e(He,is),e(S,ls),e(S,Kt),e(Kt,Ze),e(Ze,ds),e(S,cs),e(S,Qt),e(Qt,Ge),e(Ge,ms),e(S,ps),e(S,Yt),e(Yt,Xe),e(Xe,hs),e(u,fs),e(u,F),x(Ke,F,null),e(F,us),e(F,Y),e(Y,gs),e(Y,jt),e(jt,_s),e(Y,vs),e(Y,eo),e(eo,xs),e(Y,Ts),e(F,Es),x(me,F,null),e(F,bs),e(F,to),e(to,js),e(F,ws),x(Qe,F,null),uo=!0},p(o,[m]){const Ye={};m&2&&(Ye.$$scope={dirty:m,ctx:o}),de.$set(Ye);const oo={};m&2&&(oo.$$scope={dirty:m,ctx:o}),me.$set(oo)},i(o){uo||(T(w.$$.fragment,o),T(fe.$$.fragment,o),T(ge.$$.fragment,o),T(_e.$$.fragment,o),T(ve.$$.fragment,o),T(xe.$$.fragment,o),T(Ee.$$.fragment,o),T(je.$$.fragment,o),T(we.$$.fragment,o),T(ye.$$.fragment,o),T(Ve.$$.fragment,o),T($e.$$.fragment,o),T(Pe.$$.fragment,o),T(qe.$$.fragment,o),T(de.$$.fragment,o),T(Le.$$.fragment,o),T(Se.$$.fragment,o),T(Ne.$$.fragment,o),T(Ke.$$.fragment,o),T(me.$$.fragment,o),T(Qe.$$.fragment,o),uo=!0)},o(o){E(w.$$.fragment,o),E(fe.$$.fragment,o),E(ge.$$.fragment,o),E(_e.$$.fragment,o),E(ve.$$.fragment,o),E(xe.$$.fragment,o),E(Ee.$$.fragment,o),E(je.$$.fragment,o),E(we.$$.fragment,o),E(ye.$$.fragment,o),E(Ve.$$.fragment,o),E($e.$$.fragment,o),E(Pe.$$.fragment,o),E(qe.$$.fragment,o),E(de.$$.fragment,o),E(Le.$$.fragment,o),E(Se.$$.fragment,o),E(Ne.$$.fragment,o),E(Ke.$$.fragment,o),E(me.$$.fragment,o),E(Qe.$$.fragment,o),uo=!1},d(o){t(p),o&&t(M),o&&t(f),b(w),o&&t(no),o&&t(J),b(fe),o&&t(ao),o&&t(g),o&&t(so),o&&t(te),o&&t(ro),o&&t(H),b(ge),o&&t(io),o&&t(y),b(_e),b(ve),b(xe),b(Ee),o&&t(lo),o&&t(G),b(je),o&&t(co),o&&t(P),b(we),b(ye),b(Ve),o&&t(mo),o&&t(X),b($e),o&&t(po),o&&t(k),b(Pe),b(qe),b(de),b(Le),o&&t(ho),o&&t(Q),b(Se),o&&t(fo),o&&t(u),b(Ne),b(Ke),b(me),b(Qe)}}}const Hr={local:"visiontextdualencoder",sections:[{local:"overview",title:"Overview"},{local:"transformers.VisionTextDualEncoderConfig",title:"VisionTextDualEncoderConfig"},{local:"transformers.VisionTextDualEncoderProcessor",title:"VisionTextDualEncoderProcessor"},{local:"transformers.VisionTextDualEncoderModel",title:"VisionTextDualEncoderModel"},{local:"transformers.FlaxVisionTextDualEncoderModel",title:"FlaxVisionTextDualEncoderModel"}],title:"VisionTextDualEncoder"};function Zr(he,p,M){let{fw:f}=p;return he.$$set=j=>{"fw"in j&&M(0,f=j.fw)},[f]}class ti extends Nr{constructor(p){super();Br(this,p,Zr,Jr,Or,{fw:0})}}export{ti as default,Hr as metadata};
