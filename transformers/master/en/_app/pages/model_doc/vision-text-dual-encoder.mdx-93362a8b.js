import{S as Nr,i as Br,s as Or,e as s,k as d,w as _,t as r,R as Wr,c as a,d as t,m as c,a as n,x as v,h as i,b as l,F as e,g as h,y as x,q as T,o as E,B as b}from"../../chunks/vendor-9daddcfa.js";import{T as Sr}from"../../chunks/Tip-c0a70391.js";import{D as U}from"../../chunks/Docstring-ea6f8b76.js";import{C as yn}from"../../chunks/CodeBlock-37b92346.js";import{I as Vt}from"../../chunks/IconCopyLink-a413fd1b.js";import"../../chunks/CopyButton-6099fd9d.js";function Rr(he){let p,M,f,j,q;return{c(){p=s("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),j=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var $=n(p);M=i($,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a($,"CODE",{});var L=n(f);j=i(L,"Module"),L.forEach(t),q=i($,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),$.forEach(t)},m(w,$){h(w,p,$),e(p,M),e(p,f),e(f,j),e(p,q)},d(w){w&&t(p)}}}function Ur(he){let p,M,f,j,q;return{c(){p=s("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),j=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var $=n(p);M=i($,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a($,"CODE",{});var L=n(f);j=i(L,"Module"),L.forEach(t),q=i($,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),$.forEach(t)},m(w,$){h(w,p,$),e(p,M),e(p,f),e(f,j),e(p,q)},d(w){w&&t(p)}}}function Jr(he){let p,M,f,j,q,w,$,L,Lo,so,J,ee,Dt,fe,So,$t,No,ao,g,Bo,tt,Oo,Wo,Pt,Ro,Uo,ot,Jo,Ho,st,Zo,Go,at,Xo,Ko,Mt,Qo,Yo,nt,es,ts,rt,os,ss,no,te,as,ue,ns,rs,ro,H,oe,zt,ge,is,Ct,ls,io,y,_e,ds,B,it,cs,ms,lt,ps,hs,dt,fs,us,gs,Z,_s,ct,vs,xs,mt,Ts,Es,bs,Ft,js,ws,ve,ys,se,xe,ks,Te,Vs,pt,Ds,$s,Ps,ae,Ee,Ms,be,zs,ht,Cs,Fs,lo,G,ne,It,je,Is,At,As,co,P,we,qs,qt,Ls,Ss,z,ft,Ns,Bs,ut,Os,Ws,gt,Rs,Us,Lt,Js,Hs,_t,Zs,Gs,Xs,re,ye,Ks,ke,Qs,vt,Ys,ea,ta,ie,Ve,oa,De,sa,xt,aa,na,mo,X,le,St,$e,ra,Nt,ia,po,k,Pe,la,Me,da,Bt,ca,ma,pa,ze,ha,Ce,fa,ua,ga,Ot,_a,va,Fe,xa,Tt,Ta,Ea,ba,Ie,ja,Ae,wa,ya,ka,C,qe,Va,K,Da,Et,$a,Pa,Wt,Ma,za,Ca,de,Fa,Rt,Ia,Aa,Le,ho,Q,ce,Ut,Se,qa,Jt,La,fo,u,Ne,Sa,Be,Na,Ht,Ba,Oa,Wa,Oe,Ra,We,Ua,Ja,Ha,Zt,Za,Ga,Re,Xa,bt,Ka,Qa,Ya,Ue,en,Je,tn,on,sn,Gt,an,nn,S,Xt,He,rn,ln,Kt,Ze,dn,cn,Qt,Ge,mn,pn,Yt,Xe,hn,fn,F,Ke,un,Y,gn,jt,_n,vn,eo,xn,Tn,En,me,bn,to,jn,wn,Qe,uo;return w=new Vt({}),fe=new Vt({}),ge=new Vt({}),_e=new U({props:{name:"class transformers.VisionTextDualEncoderConfig",anchor:"transformers.VisionTextDualEncoderConfig",parameters:[{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L28",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>) &#x2014;
Dictionary of configuration options that defines text model config.`,name:"text_config_dict"},{anchor:"transformers.VisionTextDualEncoderConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>) &#x2014;
Dictionary of configuration options that defines vison model config.`,name:"vision_config_dict"},{anchor:"transformers.VisionTextDualEncoderConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.VisionTextDualEncoderConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.VisionTextDualEncoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}]}}),ve=new yn({props:{code:`from transformers import ViTConfig, BertConfig, VisionTextDualEncoderConfig, VisionTextDualEncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionTextDualEncoderModel.from_pretrained(<span class="hljs-string">&quot;vit-bert&quot;</span>, config=vision_text_config)`}}),xe=new U({props:{name:"from_vision_text_configs",anchor:"transformers.VisionTextDualEncoderConfig.from_vision_text_configs",parameters:[{name:"vision_config",val:": PretrainedConfig"},{name:"text_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L105",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"
>VisionTextDualEncoderConfig</a></p>
`}}),Ee=new U({props:{name:"to_dict",anchor:"transformers.VisionTextDualEncoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L117",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),je=new Vt({}),we=new U({props:{name:"class transformers.VisionTextDualEncoderProcessor",anchor:"transformers.VisionTextDualEncoderProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L23",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/master/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.VisionTextDualEncoderProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}]}}),ye=new U({props:{name:"batch_decode",anchor:"transformers.VisionTextDualEncoderProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L98"}}),Ve=new U({props:{name:"decode",anchor:"transformers.VisionTextDualEncoderProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L105"}}),$e=new Vt({}),Pe=new U({props:{name:"class transformers.VisionTextDualEncoderModel",anchor:"transformers.VisionTextDualEncoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.models.vision_text_dual_encoder.configuration_vision_text_dual_encoder.VisionTextDualEncoderConfig] = None"},{name:"vision_model",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"text_model",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vision_text_dual_encoder/modeling_vision_text_dual_encoder.py#L163",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),qe=new U({props:{name:"forward",anchor:"transformers.VisionTextDualEncoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"return_loss",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vision_text_dual_encoder/modeling_vision_text_dual_encoder.py#L295",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
a feature extractor (e.g. if you use ViT as the encoder, you should use <a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>). See
<a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VisionTextDualEncoderModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.VisionTextDualEncoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisionTextDualEncoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisionTextDualEncoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_clip.CLIPOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"
>VisionTextDualEncoderConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.
(<code>torch.FloatTensor</code><strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.
(<code>torch.FloatTensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.
<strong>
The output of the <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.
</strong>
The output of the <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<ul>
<li>**vision_model_output(<code>BaseModelOutputWithPooling</code>)</li>
</ul>
`}}),de=new Sr({props:{$$slots:{default:[Rr]},$$scope:{ctx:he}}}),Le=new yn({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Se=new Vt({}),Ne=new U({props:{name:"class transformers.FlaxVisionTextDualEncoderModel",anchor:"transformers.FlaxVisionTextDualEncoderModel",parameters:[{name:"config",val:": VisionTextDualEncoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vision_text_dual_encoder/modeling_flax_vision_text_dual_encoder.py#L219",parametersDescription:[{anchor:"transformers.FlaxVisionTextDualEncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig">VisionTextDualEncoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Ke=new U({props:{name:"__call__",anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/vision_text_dual_encoder/modeling_flax_vision_text_dual_encoder.py#L251",parametersDescription:[{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
a feature extractor (e.g. if you use ViT as the encoder, you should use <a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>). See
<a href="/docs/transformers/master/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"
>VisionTextDualEncoderConfig</a>) and inputs.</p>
<p>(<code>jnp.ndarray</code><strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.
(<code>jnp.ndarray</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</p>
<ul>
<li><strong>text_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/master/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/master/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.
<strong>
The output of the <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.
</strong>
The output of the <a
  href="/docs/transformers/master/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<ul>
<li>**vision_model_output(<code>FlaxBaseModelOutputWithPooling</code>)</li>
</ul>
`}}),me=new Sr({props:{$$slots:{default:[Ur]},$$scope:{ctx:he}}}),Qe=new yn({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){p=s("meta"),M=d(),f=s("h1"),j=s("a"),q=s("span"),_(w.$$.fragment),$=d(),L=s("span"),Lo=r("VisionTextDualEncoder"),so=d(),J=s("h2"),ee=s("a"),Dt=s("span"),_(fe.$$.fragment),So=d(),$t=s("span"),No=r("Overview"),ao=d(),g=s("p"),Bo=r("The "),tt=s("a"),Oo=r("VisionTextDualEncoderModel"),Wo=r(` can be used to initialize a vision-text dual encoder model with
any pretrained vision autoencoding model as the vision encoder (`),Pt=s("em"),Ro=r("e.g."),Uo=d(),ot=s("a"),Jo=r("ViT"),Ho=r(", "),st=s("a"),Zo=r("BEiT"),Go=r(", "),at=s("a"),Xo=r("DeiT"),Ko=r(") and any pretrained text autoencoding model as the text encoder ("),Mt=s("em"),Qo=r("e.g."),Yo=d(),nt=s("a"),es=r("RoBERTa"),ts=r(", "),rt=s("a"),os=r("BERT"),ss=r(`). Two projection layers are added on top of both the vision and text encoder to project the output embeddings
to a shared latent space. The projection layers are randomly initialized so the model should be fine-tuned on a
downstream task. This model can be used to align the vision-text embeddings using CLIP like contrastive image-text
training and then can be used for zero-shot vision tasks such image-classification or retrieval.`),no=d(),te=s("p"),as=r("In "),ue=s("a"),ns=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),rs=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment on
new zero-shot vision tasks such as image classification or retrieval.`),ro=d(),H=s("h2"),oe=s("a"),zt=s("span"),_(ge.$$.fragment),is=d(),Ct=s("span"),ls=r("VisionTextDualEncoderConfig"),io=d(),y=s("div"),_(_e.$$.fragment),ds=d(),B=s("p"),it=s("a"),cs=r("VisionTextDualEncoderConfig"),ms=r(` is the configuration class to store the configuration of a
`),lt=s("a"),ps=r("VisionTextDualEncoderModel"),hs=r(". It is used to instantiate "),dt=s("a"),fs=r("VisionTextDualEncoderModel"),us=r(` model according to the
specified arguments, defining the text model and vision model configs.`),gs=d(),Z=s("p"),_s=r("Configuration objects inherit from "),ct=s("a"),vs=r("PretrainedConfig"),xs=r(` and can be used to control the model outputs. Read the
documentation from `),mt=s("a"),Ts=r("PretrainedConfig"),Es=r(" for more information."),bs=d(),Ft=s("p"),js=r("Examples:"),ws=d(),_(ve.$$.fragment),ys=d(),se=s("div"),_(xe.$$.fragment),ks=d(),Te=s("p"),Vs=r("Instantiate a "),pt=s("a"),Ds=r("VisionTextDualEncoderConfig"),$s=r(` (or a derived class) from text model configuration and vision
model configuration.`),Ps=d(),ae=s("div"),_(Ee.$$.fragment),Ms=d(),be=s("p"),zs=r("Serializes this instance to a Python dictionary. Override the default "),ht=s("a"),Cs=r("to_dict()"),Fs=r("."),lo=d(),G=s("h2"),ne=s("a"),It=s("span"),_(je.$$.fragment),Is=d(),At=s("span"),As=r("VisionTextDualEncoderProcessor"),co=d(),P=s("div"),_(we.$$.fragment),qs=d(),qt=s("p"),Ls=r(`Constructs a VisionTextDualEncoder processor which wraps a vision feature extractor and a tokenizer into a single
processor.`),Ss=d(),z=s("p"),ft=s("a"),Ns=r("VisionTextDualEncoderProcessor"),Bs=r(" offers all the functionalities of "),ut=s("a"),Os=r("AutoFeatureExtractor"),Ws=r(` and
`),gt=s("a"),Rs=r("AutoTokenizer"),Us=r(". See the "),Lt=s("code"),Js=r("__call__()"),Hs=r(`and
`),_t=s("a"),Zs=r("decode()"),Gs=r(" for more information."),Xs=d(),re=s("div"),_(ye.$$.fragment),Ks=d(),ke=s("p"),Qs=r(`This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s
`),vt=s("a"),Ys=r("batch_decode()"),ea=r(". Please refer to the docstring of this method for more information."),ta=d(),ie=s("div"),_(Ve.$$.fragment),oa=d(),De=s("p"),sa=r("This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s "),xt=s("a"),aa=r("decode()"),na=r(`.
Please refer to the docstring of this method for more information.`),mo=d(),X=s("h2"),le=s("a"),St=s("span"),_($e.$$.fragment),ra=d(),Nt=s("span"),ia=r("VisionTextDualEncoderModel"),po=d(),k=s("div"),_(Pe.$$.fragment),la=d(),Me=s("p"),da=r(`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Bt=s("code"),ca=r("from_pretrained()"),ma=r(`method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),pa=d(),ze=s("p"),ha=r("In "),Ce=s("a"),fa=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),ua=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),ga=d(),Ot=s("p"),_a=r(`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),va=d(),Fe=s("p"),xa=r("This model inherits from "),Tt=s("a"),Ta=r("PreTrainedModel"),Ea=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ba=d(),Ie=s("p"),ja=r("This model is also a PyTorch "),Ae=s("a"),wa=r("torch.nn.Module"),ya=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ka=d(),C=s("div"),_(qe.$$.fragment),Va=d(),K=s("p"),Da=r("The "),Et=s("a"),$a=r("VisionTextDualEncoderModel"),Pa=r(" forward method, overrides the "),Wt=s("code"),Ma=r("__call__"),za=r(" special method."),Ca=d(),_(de.$$.fragment),Fa=d(),Rt=s("p"),Ia=r("Examples:"),Aa=d(),_(Le.$$.fragment),ho=d(),Q=s("h2"),ce=s("a"),Ut=s("span"),_(Se.$$.fragment),qa=d(),Jt=s("span"),La=r("FlaxVisionTextDualEncoderModel"),fo=d(),u=s("div"),_(Ne.$$.fragment),Sa=d(),Be=s("p"),Na=r(`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Ht=s("code"),Ba=r("from_pretrained()"),Oa=r(`method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Wa=d(),Oe=s("p"),Ra=r("In "),We=s("a"),Ua=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),Ja=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Ha=d(),Zt=s("p"),Za=r(`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Ga=d(),Re=s("p"),Xa=r("This model inherits from "),bt=s("a"),Ka=r("PreTrainedModel"),Qa=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ya=d(),Ue=s("p"),en=r("This model is also a Flax Linen "),Je=s("a"),tn=r("flax.linen.Module"),on=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),sn=d(),Gt=s("p"),an=r("Finally, this model supports inherent JAX features such as:"),nn=d(),S=s("ul"),Xt=s("li"),He=s("a"),rn=r("Just-In-Time (JIT) compilation"),ln=d(),Kt=s("li"),Ze=s("a"),dn=r("Automatic Differentiation"),cn=d(),Qt=s("li"),Ge=s("a"),mn=r("Vectorization"),pn=d(),Yt=s("li"),Xe=s("a"),hn=r("Parallelization"),fn=d(),F=s("div"),_(Ke.$$.fragment),un=d(),Y=s("p"),gn=r("The "),jt=s("a"),_n=r("FlaxVisionTextDualEncoderModel"),vn=r(" forward method, overrides the "),eo=s("code"),xn=r("__call__"),Tn=r(" special method."),En=d(),_(me.$$.fragment),bn=d(),to=s("p"),jn=r("Examples:"),wn=d(),_(Qe.$$.fragment),this.h()},l(o){const m=Wr('[data-svelte="svelte-1phssyn"]',document.head);p=a(m,"META",{name:!0,content:!0}),m.forEach(t),M=c(o),f=a(o,"H1",{class:!0});var Ye=n(f);j=a(Ye,"A",{id:!0,class:!0,href:!0});var oo=n(j);q=a(oo,"SPAN",{});var kn=n(q);v(w.$$.fragment,kn),kn.forEach(t),oo.forEach(t),$=c(Ye),L=a(Ye,"SPAN",{});var Vn=n(L);Lo=i(Vn,"VisionTextDualEncoder"),Vn.forEach(t),Ye.forEach(t),so=c(o),J=a(o,"H2",{class:!0});var go=n(J);ee=a(go,"A",{id:!0,class:!0,href:!0});var Dn=n(ee);Dt=a(Dn,"SPAN",{});var $n=n(Dt);v(fe.$$.fragment,$n),$n.forEach(t),Dn.forEach(t),So=c(go),$t=a(go,"SPAN",{});var Pn=n($t);No=i(Pn,"Overview"),Pn.forEach(t),go.forEach(t),ao=c(o),g=a(o,"P",{});var V=n(g);Bo=i(V,"The "),tt=a(V,"A",{href:!0});var Mn=n(tt);Oo=i(Mn,"VisionTextDualEncoderModel"),Mn.forEach(t),Wo=i(V,` can be used to initialize a vision-text dual encoder model with
any pretrained vision autoencoding model as the vision encoder (`),Pt=a(V,"EM",{});var zn=n(Pt);Ro=i(zn,"e.g."),zn.forEach(t),Uo=c(V),ot=a(V,"A",{href:!0});var Cn=n(ot);Jo=i(Cn,"ViT"),Cn.forEach(t),Ho=i(V,", "),st=a(V,"A",{href:!0});var Fn=n(st);Zo=i(Fn,"BEiT"),Fn.forEach(t),Go=i(V,", "),at=a(V,"A",{href:!0});var In=n(at);Xo=i(In,"DeiT"),In.forEach(t),Ko=i(V,") and any pretrained text autoencoding model as the text encoder ("),Mt=a(V,"EM",{});var An=n(Mt);Qo=i(An,"e.g."),An.forEach(t),Yo=c(V),nt=a(V,"A",{href:!0});var qn=n(nt);es=i(qn,"RoBERTa"),qn.forEach(t),ts=i(V,", "),rt=a(V,"A",{href:!0});var Ln=n(rt);os=i(Ln,"BERT"),Ln.forEach(t),ss=i(V,`). Two projection layers are added on top of both the vision and text encoder to project the output embeddings
to a shared latent space. The projection layers are randomly initialized so the model should be fine-tuned on a
downstream task. This model can be used to align the vision-text embeddings using CLIP like contrastive image-text
training and then can be used for zero-shot vision tasks such image-classification or retrieval.`),V.forEach(t),no=c(o),te=a(o,"P",{});var _o=n(te);as=i(_o,"In "),ue=a(_o,"A",{href:!0,rel:!0});var Sn=n(ue);ns=i(Sn,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),Sn.forEach(t),rs=i(_o,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment on
new zero-shot vision tasks such as image classification or retrieval.`),_o.forEach(t),ro=c(o),H=a(o,"H2",{class:!0});var vo=n(H);oe=a(vo,"A",{id:!0,class:!0,href:!0});var Nn=n(oe);zt=a(Nn,"SPAN",{});var Bn=n(zt);v(ge.$$.fragment,Bn),Bn.forEach(t),Nn.forEach(t),is=c(vo),Ct=a(vo,"SPAN",{});var On=n(Ct);ls=i(On,"VisionTextDualEncoderConfig"),On.forEach(t),vo.forEach(t),io=c(o),y=a(o,"DIV",{class:!0});var I=n(y);v(_e.$$.fragment,I),ds=c(I),B=a(I,"P",{});var et=n(B);it=a(et,"A",{href:!0});var Wn=n(it);cs=i(Wn,"VisionTextDualEncoderConfig"),Wn.forEach(t),ms=i(et,` is the configuration class to store the configuration of a
`),lt=a(et,"A",{href:!0});var Rn=n(lt);ps=i(Rn,"VisionTextDualEncoderModel"),Rn.forEach(t),hs=i(et,". It is used to instantiate "),dt=a(et,"A",{href:!0});var Un=n(dt);fs=i(Un,"VisionTextDualEncoderModel"),Un.forEach(t),us=i(et,` model according to the
specified arguments, defining the text model and vision model configs.`),et.forEach(t),gs=c(I),Z=a(I,"P",{});var wt=n(Z);_s=i(wt,"Configuration objects inherit from "),ct=a(wt,"A",{href:!0});var Jn=n(ct);vs=i(Jn,"PretrainedConfig"),Jn.forEach(t),xs=i(wt,` and can be used to control the model outputs. Read the
documentation from `),mt=a(wt,"A",{href:!0});var Hn=n(mt);Ts=i(Hn,"PretrainedConfig"),Hn.forEach(t),Es=i(wt," for more information."),wt.forEach(t),bs=c(I),Ft=a(I,"P",{});var Zn=n(Ft);js=i(Zn,"Examples:"),Zn.forEach(t),ws=c(I),v(ve.$$.fragment,I),ys=c(I),se=a(I,"DIV",{class:!0});var xo=n(se);v(xe.$$.fragment,xo),ks=c(xo),Te=a(xo,"P",{});var To=n(Te);Vs=i(To,"Instantiate a "),pt=a(To,"A",{href:!0});var Gn=n(pt);Ds=i(Gn,"VisionTextDualEncoderConfig"),Gn.forEach(t),$s=i(To,` (or a derived class) from text model configuration and vision
model configuration.`),To.forEach(t),xo.forEach(t),Ps=c(I),ae=a(I,"DIV",{class:!0});var Eo=n(ae);v(Ee.$$.fragment,Eo),Ms=c(Eo),be=a(Eo,"P",{});var bo=n(be);zs=i(bo,"Serializes this instance to a Python dictionary. Override the default "),ht=a(bo,"A",{href:!0});var Xn=n(ht);Cs=i(Xn,"to_dict()"),Xn.forEach(t),Fs=i(bo,"."),bo.forEach(t),Eo.forEach(t),I.forEach(t),lo=c(o),G=a(o,"H2",{class:!0});var jo=n(G);ne=a(jo,"A",{id:!0,class:!0,href:!0});var Kn=n(ne);It=a(Kn,"SPAN",{});var Qn=n(It);v(je.$$.fragment,Qn),Qn.forEach(t),Kn.forEach(t),Is=c(jo),At=a(jo,"SPAN",{});var Yn=n(At);As=i(Yn,"VisionTextDualEncoderProcessor"),Yn.forEach(t),jo.forEach(t),co=c(o),P=a(o,"DIV",{class:!0});var O=n(P);v(we.$$.fragment,O),qs=c(O),qt=a(O,"P",{});var er=n(qt);Ls=i(er,`Constructs a VisionTextDualEncoder processor which wraps a vision feature extractor and a tokenizer into a single
processor.`),er.forEach(t),Ss=c(O),z=a(O,"P",{});var N=n(z);ft=a(N,"A",{href:!0});var tr=n(ft);Ns=i(tr,"VisionTextDualEncoderProcessor"),tr.forEach(t),Bs=i(N," offers all the functionalities of "),ut=a(N,"A",{href:!0});var or=n(ut);Os=i(or,"AutoFeatureExtractor"),or.forEach(t),Ws=i(N,` and
`),gt=a(N,"A",{href:!0});var sr=n(gt);Rs=i(sr,"AutoTokenizer"),sr.forEach(t),Us=i(N,". See the "),Lt=a(N,"CODE",{});var ar=n(Lt);Js=i(ar,"__call__()"),ar.forEach(t),Hs=i(N,`and
`),_t=a(N,"A",{href:!0});var nr=n(_t);Zs=i(nr,"decode()"),nr.forEach(t),Gs=i(N," for more information."),N.forEach(t),Xs=c(O),re=a(O,"DIV",{class:!0});var wo=n(re);v(ye.$$.fragment,wo),Ks=c(wo),ke=a(wo,"P",{});var yo=n(ke);Qs=i(yo,`This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s
`),vt=a(yo,"A",{href:!0});var rr=n(vt);Ys=i(rr,"batch_decode()"),rr.forEach(t),ea=i(yo,". Please refer to the docstring of this method for more information."),yo.forEach(t),wo.forEach(t),ta=c(O),ie=a(O,"DIV",{class:!0});var ko=n(ie);v(Ve.$$.fragment,ko),oa=c(ko),De=a(ko,"P",{});var Vo=n(De);sa=i(Vo,"This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s "),xt=a(Vo,"A",{href:!0});var ir=n(xt);aa=i(ir,"decode()"),ir.forEach(t),na=i(Vo,`.
Please refer to the docstring of this method for more information.`),Vo.forEach(t),ko.forEach(t),O.forEach(t),mo=c(o),X=a(o,"H2",{class:!0});var Do=n(X);le=a(Do,"A",{id:!0,class:!0,href:!0});var lr=n(le);St=a(lr,"SPAN",{});var dr=n(St);v($e.$$.fragment,dr),dr.forEach(t),lr.forEach(t),ra=c(Do),Nt=a(Do,"SPAN",{});var cr=n(Nt);ia=i(cr,"VisionTextDualEncoderModel"),cr.forEach(t),Do.forEach(t),po=c(o),k=a(o,"DIV",{class:!0});var A=n(k);v(Pe.$$.fragment,A),la=c(A),Me=a(A,"P",{});var $o=n(Me);da=i($o,`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Bt=a($o,"CODE",{});var mr=n(Bt);ca=i(mr,"from_pretrained()"),mr.forEach(t),ma=i($o,`method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),$o.forEach(t),pa=c(A),ze=a(A,"P",{});var Po=n(ze);ha=i(Po,"In "),Ce=a(Po,"A",{href:!0,rel:!0});var pr=n(Ce);fa=i(pr,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),pr.forEach(t),ua=i(Po,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Po.forEach(t),ga=c(A),Ot=a(A,"P",{});var hr=n(Ot);_a=i(hr,`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),hr.forEach(t),va=c(A),Fe=a(A,"P",{});var Mo=n(Fe);xa=i(Mo,"This model inherits from "),Tt=a(Mo,"A",{href:!0});var fr=n(Tt);Ta=i(fr,"PreTrainedModel"),fr.forEach(t),Ea=i(Mo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mo.forEach(t),ba=c(A),Ie=a(A,"P",{});var zo=n(Ie);ja=i(zo,"This model is also a PyTorch "),Ae=a(zo,"A",{href:!0,rel:!0});var ur=n(Ae);wa=i(ur,"torch.nn.Module"),ur.forEach(t),ya=i(zo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zo.forEach(t),ka=c(A),C=a(A,"DIV",{class:!0});var W=n(C);v(qe.$$.fragment,W),Va=c(W),K=a(W,"P",{});var yt=n(K);Da=i(yt,"The "),Et=a(yt,"A",{href:!0});var gr=n(Et);$a=i(gr,"VisionTextDualEncoderModel"),gr.forEach(t),Pa=i(yt," forward method, overrides the "),Wt=a(yt,"CODE",{});var _r=n(Wt);Ma=i(_r,"__call__"),_r.forEach(t),za=i(yt," special method."),yt.forEach(t),Ca=c(W),v(de.$$.fragment,W),Fa=c(W),Rt=a(W,"P",{});var vr=n(Rt);Ia=i(vr,"Examples:"),vr.forEach(t),Aa=c(W),v(Le.$$.fragment,W),W.forEach(t),A.forEach(t),ho=c(o),Q=a(o,"H2",{class:!0});var Co=n(Q);ce=a(Co,"A",{id:!0,class:!0,href:!0});var xr=n(ce);Ut=a(xr,"SPAN",{});var Tr=n(Ut);v(Se.$$.fragment,Tr),Tr.forEach(t),xr.forEach(t),qa=c(Co),Jt=a(Co,"SPAN",{});var Er=n(Jt);La=i(Er,"FlaxVisionTextDualEncoderModel"),Er.forEach(t),Co.forEach(t),fo=c(o),u=a(o,"DIV",{class:!0});var D=n(u);v(Ne.$$.fragment,D),Sa=c(D),Be=a(D,"P",{});var Fo=n(Be);Na=i(Fo,`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Ht=a(Fo,"CODE",{});var br=n(Ht);Ba=i(br,"from_pretrained()"),br.forEach(t),Oa=i(Fo,`method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Fo.forEach(t),Wa=c(D),Oe=a(D,"P",{});var Io=n(Oe);Ra=i(Io,"In "),We=a(Io,"A",{href:!0,rel:!0});var jr=n(We);Ua=i(jr,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),jr.forEach(t),Ja=i(Io,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Io.forEach(t),Ha=c(D),Zt=a(D,"P",{});var wr=n(Zt);Za=i(wr,`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),wr.forEach(t),Ga=c(D),Re=a(D,"P",{});var Ao=n(Re);Xa=i(Ao,"This model inherits from "),bt=a(Ao,"A",{href:!0});var yr=n(bt);Ka=i(yr,"PreTrainedModel"),yr.forEach(t),Qa=i(Ao,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ao.forEach(t),Ya=c(D),Ue=a(D,"P",{});var qo=n(Ue);en=i(qo,"This model is also a Flax Linen "),Je=a(qo,"A",{href:!0,rel:!0});var kr=n(Je);tn=i(kr,"flax.linen.Module"),kr.forEach(t),on=i(qo,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qo.forEach(t),sn=c(D),Gt=a(D,"P",{});var Vr=n(Gt);an=i(Vr,"Finally, this model supports inherent JAX features such as:"),Vr.forEach(t),nn=c(D),S=a(D,"UL",{});var pe=n(S);Xt=a(pe,"LI",{});var Dr=n(Xt);He=a(Dr,"A",{href:!0,rel:!0});var $r=n(He);rn=i($r,"Just-In-Time (JIT) compilation"),$r.forEach(t),Dr.forEach(t),ln=c(pe),Kt=a(pe,"LI",{});var Pr=n(Kt);Ze=a(Pr,"A",{href:!0,rel:!0});var Mr=n(Ze);dn=i(Mr,"Automatic Differentiation"),Mr.forEach(t),Pr.forEach(t),cn=c(pe),Qt=a(pe,"LI",{});var zr=n(Qt);Ge=a(zr,"A",{href:!0,rel:!0});var Cr=n(Ge);mn=i(Cr,"Vectorization"),Cr.forEach(t),zr.forEach(t),pn=c(pe),Yt=a(pe,"LI",{});var Fr=n(Yt);Xe=a(Fr,"A",{href:!0,rel:!0});var Ir=n(Xe);hn=i(Ir,"Parallelization"),Ir.forEach(t),Fr.forEach(t),pe.forEach(t),fn=c(D),F=a(D,"DIV",{class:!0});var R=n(F);v(Ke.$$.fragment,R),un=c(R),Y=a(R,"P",{});var kt=n(Y);gn=i(kt,"The "),jt=a(kt,"A",{href:!0});var Ar=n(jt);_n=i(Ar,"FlaxVisionTextDualEncoderModel"),Ar.forEach(t),vn=i(kt," forward method, overrides the "),eo=a(kt,"CODE",{});var qr=n(eo);xn=i(qr,"__call__"),qr.forEach(t),Tn=i(kt," special method."),kt.forEach(t),En=c(R),v(me.$$.fragment,R),bn=c(R),to=a(R,"P",{});var Lr=n(to);jn=i(Lr,"Examples:"),Lr.forEach(t),wn=c(R),v(Qe.$$.fragment,R),R.forEach(t),D.forEach(t),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(Hr)),l(j,"id","visiontextdualencoder"),l(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(j,"href","#visiontextdualencoder"),l(f,"class","relative group"),l(ee,"id","overview"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#overview"),l(J,"class","relative group"),l(tt,"href","/docs/transformers/master/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(ot,"href","vit"),l(st,"href","beit"),l(at,"href","deit"),l(nt,"href","roberta"),l(rt,"href","bert"),l(ue,"href","https://arxiv.org/abs/2111.07991"),l(ue,"rel","nofollow"),l(oe,"id","transformers.VisionTextDualEncoderConfig"),l(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(oe,"href","#transformers.VisionTextDualEncoderConfig"),l(H,"class","relative group"),l(it,"href","/docs/transformers/master/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"),l(lt,"href","/docs/transformers/master/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(dt,"href","/docs/transformers/master/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(ct,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(mt,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),l(pt,"href","/docs/transformers/master/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"),l(se,"class","docstring"),l(ht,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig.to_dict"),l(ae,"class","docstring"),l(y,"class","docstring"),l(ne,"id","transformers.VisionTextDualEncoderProcessor"),l(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ne,"href","#transformers.VisionTextDualEncoderProcessor"),l(G,"class","relative group"),l(ft,"href","/docs/transformers/master/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderProcessor"),l(ut,"href","/docs/transformers/master/en/model_doc/auto#transformers.AutoFeatureExtractor"),l(gt,"href","/docs/transformers/master/en/model_doc/auto#transformers.AutoTokenizer"),l(_t,"href","/docs/transformers/master/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderProcessor.decode"),l(vt,"href","/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),l(re,"class","docstring"),l(xt,"href","/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),l(ie,"class","docstring"),l(P,"class","docstring"),l(le,"id","transformers.VisionTextDualEncoderModel"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.VisionTextDualEncoderModel"),l(X,"class","relative group"),l(Ce,"href","https://arxiv.org/abs/2111.07991"),l(Ce,"rel","nofollow"),l(Tt,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),l(Ae,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ae,"rel","nofollow"),l(Et,"href","/docs/transformers/master/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(C,"class","docstring"),l(k,"class","docstring"),l(ce,"id","transformers.FlaxVisionTextDualEncoderModel"),l(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ce,"href","#transformers.FlaxVisionTextDualEncoderModel"),l(Q,"class","relative group"),l(We,"href","https://arxiv.org/abs/2111.07991"),l(We,"rel","nofollow"),l(bt,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),l(Je,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(Je,"rel","nofollow"),l(He,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(He,"rel","nofollow"),l(Ze,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(Ze,"rel","nofollow"),l(Ge,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Ge,"rel","nofollow"),l(Xe,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(Xe,"rel","nofollow"),l(jt,"href","/docs/transformers/master/en/model_doc/vision-text-dual-encoder#transformers.FlaxVisionTextDualEncoderModel"),l(F,"class","docstring"),l(u,"class","docstring")},m(o,m){e(document.head,p),h(o,M,m),h(o,f,m),e(f,j),e(j,q),x(w,q,null),e(f,$),e(f,L),e(L,Lo),h(o,so,m),h(o,J,m),e(J,ee),e(ee,Dt),x(fe,Dt,null),e(J,So),e(J,$t),e($t,No),h(o,ao,m),h(o,g,m),e(g,Bo),e(g,tt),e(tt,Oo),e(g,Wo),e(g,Pt),e(Pt,Ro),e(g,Uo),e(g,ot),e(ot,Jo),e(g,Ho),e(g,st),e(st,Zo),e(g,Go),e(g,at),e(at,Xo),e(g,Ko),e(g,Mt),e(Mt,Qo),e(g,Yo),e(g,nt),e(nt,es),e(g,ts),e(g,rt),e(rt,os),e(g,ss),h(o,no,m),h(o,te,m),e(te,as),e(te,ue),e(ue,ns),e(te,rs),h(o,ro,m),h(o,H,m),e(H,oe),e(oe,zt),x(ge,zt,null),e(H,is),e(H,Ct),e(Ct,ls),h(o,io,m),h(o,y,m),x(_e,y,null),e(y,ds),e(y,B),e(B,it),e(it,cs),e(B,ms),e(B,lt),e(lt,ps),e(B,hs),e(B,dt),e(dt,fs),e(B,us),e(y,gs),e(y,Z),e(Z,_s),e(Z,ct),e(ct,vs),e(Z,xs),e(Z,mt),e(mt,Ts),e(Z,Es),e(y,bs),e(y,Ft),e(Ft,js),e(y,ws),x(ve,y,null),e(y,ys),e(y,se),x(xe,se,null),e(se,ks),e(se,Te),e(Te,Vs),e(Te,pt),e(pt,Ds),e(Te,$s),e(y,Ps),e(y,ae),x(Ee,ae,null),e(ae,Ms),e(ae,be),e(be,zs),e(be,ht),e(ht,Cs),e(be,Fs),h(o,lo,m),h(o,G,m),e(G,ne),e(ne,It),x(je,It,null),e(G,Is),e(G,At),e(At,As),h(o,co,m),h(o,P,m),x(we,P,null),e(P,qs),e(P,qt),e(qt,Ls),e(P,Ss),e(P,z),e(z,ft),e(ft,Ns),e(z,Bs),e(z,ut),e(ut,Os),e(z,Ws),e(z,gt),e(gt,Rs),e(z,Us),e(z,Lt),e(Lt,Js),e(z,Hs),e(z,_t),e(_t,Zs),e(z,Gs),e(P,Xs),e(P,re),x(ye,re,null),e(re,Ks),e(re,ke),e(ke,Qs),e(ke,vt),e(vt,Ys),e(ke,ea),e(P,ta),e(P,ie),x(Ve,ie,null),e(ie,oa),e(ie,De),e(De,sa),e(De,xt),e(xt,aa),e(De,na),h(o,mo,m),h(o,X,m),e(X,le),e(le,St),x($e,St,null),e(X,ra),e(X,Nt),e(Nt,ia),h(o,po,m),h(o,k,m),x(Pe,k,null),e(k,la),e(k,Me),e(Me,da),e(Me,Bt),e(Bt,ca),e(Me,ma),e(k,pa),e(k,ze),e(ze,ha),e(ze,Ce),e(Ce,fa),e(ze,ua),e(k,ga),e(k,Ot),e(Ot,_a),e(k,va),e(k,Fe),e(Fe,xa),e(Fe,Tt),e(Tt,Ta),e(Fe,Ea),e(k,ba),e(k,Ie),e(Ie,ja),e(Ie,Ae),e(Ae,wa),e(Ie,ya),e(k,ka),e(k,C),x(qe,C,null),e(C,Va),e(C,K),e(K,Da),e(K,Et),e(Et,$a),e(K,Pa),e(K,Wt),e(Wt,Ma),e(K,za),e(C,Ca),x(de,C,null),e(C,Fa),e(C,Rt),e(Rt,Ia),e(C,Aa),x(Le,C,null),h(o,ho,m),h(o,Q,m),e(Q,ce),e(ce,Ut),x(Se,Ut,null),e(Q,qa),e(Q,Jt),e(Jt,La),h(o,fo,m),h(o,u,m),x(Ne,u,null),e(u,Sa),e(u,Be),e(Be,Na),e(Be,Ht),e(Ht,Ba),e(Be,Oa),e(u,Wa),e(u,Oe),e(Oe,Ra),e(Oe,We),e(We,Ua),e(Oe,Ja),e(u,Ha),e(u,Zt),e(Zt,Za),e(u,Ga),e(u,Re),e(Re,Xa),e(Re,bt),e(bt,Ka),e(Re,Qa),e(u,Ya),e(u,Ue),e(Ue,en),e(Ue,Je),e(Je,tn),e(Ue,on),e(u,sn),e(u,Gt),e(Gt,an),e(u,nn),e(u,S),e(S,Xt),e(Xt,He),e(He,rn),e(S,ln),e(S,Kt),e(Kt,Ze),e(Ze,dn),e(S,cn),e(S,Qt),e(Qt,Ge),e(Ge,mn),e(S,pn),e(S,Yt),e(Yt,Xe),e(Xe,hn),e(u,fn),e(u,F),x(Ke,F,null),e(F,un),e(F,Y),e(Y,gn),e(Y,jt),e(jt,_n),e(Y,vn),e(Y,eo),e(eo,xn),e(Y,Tn),e(F,En),x(me,F,null),e(F,bn),e(F,to),e(to,jn),e(F,wn),x(Qe,F,null),uo=!0},p(o,[m]){const Ye={};m&2&&(Ye.$$scope={dirty:m,ctx:o}),de.$set(Ye);const oo={};m&2&&(oo.$$scope={dirty:m,ctx:o}),me.$set(oo)},i(o){uo||(T(w.$$.fragment,o),T(fe.$$.fragment,o),T(ge.$$.fragment,o),T(_e.$$.fragment,o),T(ve.$$.fragment,o),T(xe.$$.fragment,o),T(Ee.$$.fragment,o),T(je.$$.fragment,o),T(we.$$.fragment,o),T(ye.$$.fragment,o),T(Ve.$$.fragment,o),T($e.$$.fragment,o),T(Pe.$$.fragment,o),T(qe.$$.fragment,o),T(de.$$.fragment,o),T(Le.$$.fragment,o),T(Se.$$.fragment,o),T(Ne.$$.fragment,o),T(Ke.$$.fragment,o),T(me.$$.fragment,o),T(Qe.$$.fragment,o),uo=!0)},o(o){E(w.$$.fragment,o),E(fe.$$.fragment,o),E(ge.$$.fragment,o),E(_e.$$.fragment,o),E(ve.$$.fragment,o),E(xe.$$.fragment,o),E(Ee.$$.fragment,o),E(je.$$.fragment,o),E(we.$$.fragment,o),E(ye.$$.fragment,o),E(Ve.$$.fragment,o),E($e.$$.fragment,o),E(Pe.$$.fragment,o),E(qe.$$.fragment,o),E(de.$$.fragment,o),E(Le.$$.fragment,o),E(Se.$$.fragment,o),E(Ne.$$.fragment,o),E(Ke.$$.fragment,o),E(me.$$.fragment,o),E(Qe.$$.fragment,o),uo=!1},d(o){t(p),o&&t(M),o&&t(f),b(w),o&&t(so),o&&t(J),b(fe),o&&t(ao),o&&t(g),o&&t(no),o&&t(te),o&&t(ro),o&&t(H),b(ge),o&&t(io),o&&t(y),b(_e),b(ve),b(xe),b(Ee),o&&t(lo),o&&t(G),b(je),o&&t(co),o&&t(P),b(we),b(ye),b(Ve),o&&t(mo),o&&t(X),b($e),o&&t(po),o&&t(k),b(Pe),b(qe),b(de),b(Le),o&&t(ho),o&&t(Q),b(Se),o&&t(fo),o&&t(u),b(Ne),b(Ke),b(me),b(Qe)}}}const Hr={local:"visiontextdualencoder",sections:[{local:"overview",title:"Overview"},{local:"transformers.VisionTextDualEncoderConfig",title:"VisionTextDualEncoderConfig"},{local:"transformers.VisionTextDualEncoderProcessor",title:"VisionTextDualEncoderProcessor"},{local:"transformers.VisionTextDualEncoderModel",title:"VisionTextDualEncoderModel"},{local:"transformers.FlaxVisionTextDualEncoderModel",title:"FlaxVisionTextDualEncoderModel"}],title:"VisionTextDualEncoder"};function Zr(he,p,M){let{fw:f}=p;return he.$$set=j=>{"fw"in j&&M(0,f=j.fw)},[f]}class ti extends Nr{constructor(p){super();Br(this,p,Zr,Jr,Or,{fw:0})}}export{ti as default,Hr as metadata};
