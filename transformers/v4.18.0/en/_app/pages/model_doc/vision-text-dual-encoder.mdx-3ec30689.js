import{S as Nr,i as Or,s as Br,e as n,k as d,w as _,t as r,M as Wr,c as s,d as t,m as c,a,x as v,h as i,b as l,F as e,g as h,y as x,q as T,o as E,B as b,v as Rr}from"../../chunks/vendor-6b77c823.js";import{T as Sr}from"../../chunks/Tip-39098574.js";import{D as U}from"../../chunks/Docstring-abef54e3.js";import{C as ya}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as $t}from"../../chunks/IconCopyLink-7a11ce68.js";function Ur(et){let m,q,g,$,A;return{c(){m=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),$=r("Module"),A=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(j){m=s(j,"P",{});var D=a(m);q=i(D,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(D,"CODE",{});var L=a(g);$=i(L,"Module"),L.forEach(t),A=i(D,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),D.forEach(t)},m(j,D){h(j,m,D),e(m,q),e(m,g),e(g,$),e(m,A)},d(j){j&&t(m)}}}function Jr(et){let m,q,g,$,A;return{c(){m=n("p"),q=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),$=r("Module"),A=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(j){m=s(j,"P",{});var D=a(m);q=i(D,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(D,"CODE",{});var L=a(g);$=i(L,"Module"),L.forEach(t),A=i(D,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),D.forEach(t)},m(j,D){h(j,m,D),e(m,q),e(m,g),e(g,$),e(m,A)},d(j){j&&t(m)}}}function Hr(et){let m,q,g,$,A,j,D,L,Lo,no,J,ee,Pt,he,So,Mt,No,so,u,Oo,tt,Bo,Wo,zt,Ro,Uo,ot,Jo,Ho,nt,Zo,Go,st,Xo,Ko,Ct,Qo,Yo,at,en,tn,rt,on,nn,ao,te,sn,fe,an,rn,ro,H,oe,Ft,ue,ln,It,dn,io,w,ge,cn,O,it,pn,mn,lt,hn,fn,dt,un,gn,_n,Z,vn,ct,xn,Tn,pt,En,bn,jn,At,wn,yn,_e,kn,ne,ve,Vn,xe,Dn,mt,$n,Pn,Mn,se,Te,zn,Ee,Cn,ht,Fn,In,lo,G,ae,qt,be,An,Lt,qn,co,P,je,Ln,St,Sn,Nn,M,ft,On,Bn,ut,Wn,Rn,gt,Un,Jn,Nt,Hn,Zn,_t,Gn,Xn,Kn,re,we,Qn,ye,Yn,vt,es,ts,os,ie,ke,ns,Ve,ss,xt,as,rs,po,X,le,Ot,De,is,Bt,ls,mo,y,$e,ds,Pe,cs,Tt,ps,ms,hs,Me,fs,ze,us,gs,_s,Wt,vs,xs,Ce,Ts,Et,Es,bs,js,Fe,ws,Ie,ys,ks,Vs,z,Ae,Ds,K,$s,bt,Ps,Ms,Rt,zs,Cs,Fs,de,Is,Ut,As,qs,qe,ho,Q,ce,Jt,Le,Ls,Ht,Ss,fo,f,Se,Ns,Ne,Os,jt,Bs,Ws,Rs,Oe,Us,Be,Js,Hs,Zs,Zt,Gs,Xs,We,Ks,wt,Qs,Ys,ea,Re,ta,Ue,oa,na,sa,Gt,aa,ra,S,Xt,Je,ia,la,Kt,He,da,ca,Qt,Ze,pa,ma,Yt,Ge,ha,fa,C,Xe,ua,Y,ga,yt,_a,va,eo,xa,Ta,Ea,pe,ba,to,ja,wa,Ke,uo;return j=new $t({}),he=new $t({}),ue=new $t({}),ge=new U({props:{name:"class transformers.VisionTextDualEncoderConfig",anchor:"transformers.VisionTextDualEncoderConfig",parameters:[{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L28",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>) &#x2014;
Dictionary of configuration options that defines text model config.`,name:"text_config_dict"},{anchor:"transformers.VisionTextDualEncoderConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>) &#x2014;
Dictionary of configuration options that defines vison model config.`,name:"vision_config_dict"},{anchor:"transformers.VisionTextDualEncoderConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.VisionTextDualEncoderConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.VisionTextDualEncoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}]}}),_e=new ya({props:{code:`from transformers import ViTConfig, BertConfig, VisionTextDualEncoderConfig, VisionTextDualEncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionTextDualEncoderModel.from_pretrained(<span class="hljs-string">&quot;vit-bert&quot;</span>, config=vision_text_config)`}}),ve=new U({props:{name:"from_vision_text_configs",anchor:"transformers.VisionTextDualEncoderConfig.from_vision_text_configs",parameters:[{name:"vision_config",val:": PretrainedConfig"},{name:"text_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L105",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"
>VisionTextDualEncoderConfig</a></p>
`}}),Te=new U({props:{name:"to_dict",anchor:"transformers.VisionTextDualEncoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L117",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),be=new $t({}),je=new U({props:{name:"class transformers.VisionTextDualEncoderProcessor",anchor:"transformers.VisionTextDualEncoderProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L23",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.VisionTextDualEncoderProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}]}}),we=new U({props:{name:"batch_decode",anchor:"transformers.VisionTextDualEncoderProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L98"}}),ke=new U({props:{name:"decode",anchor:"transformers.VisionTextDualEncoderProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L105"}}),De=new $t({}),$e=new U({props:{name:"class transformers.VisionTextDualEncoderModel",anchor:"transformers.VisionTextDualEncoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.models.vision_text_dual_encoder.configuration_vision_text_dual_encoder.VisionTextDualEncoderConfig] = None"},{name:"vision_model",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"text_model",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/vision_text_dual_encoder/modeling_vision_text_dual_encoder.py#L162",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ae=new U({props:{name:"forward",anchor:"transformers.VisionTextDualEncoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"return_loss",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/vision_text_dual_encoder/modeling_vision_text_dual_encoder.py#L294",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
a feature extractor (e.g. if you use ViT as the encoder, you should use <a href="/docs/transformers/v4.18.0/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>). See
<a href="/docs/transformers/v4.18.0/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VisionTextDualEncoderModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.VisionTextDualEncoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisionTextDualEncoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisionTextDualEncoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_clip.CLIPOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"
>VisionTextDualEncoderConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.</li>
<li><strong>logits_per_image:(<code>torch.FloatTensor</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>torch.FloatTensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_clip.CLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),de=new Sr({props:{$$slots:{default:[Ur]},$$scope:{ctx:et}}}),qe=new ya({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Le=new $t({}),Se=new U({props:{name:"class transformers.FlaxVisionTextDualEncoderModel",anchor:"transformers.FlaxVisionTextDualEncoderModel",parameters:[{name:"config",val:": VisionTextDualEncoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/vision_text_dual_encoder/modeling_flax_vision_text_dual_encoder.py#L218",parametersDescription:[{anchor:"transformers.FlaxVisionTextDualEncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig">VisionTextDualEncoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Xe=new U({props:{name:"__call__",anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/vision_text_dual_encoder/modeling_flax_vision_text_dual_encoder.py#L250",parametersDescription:[{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
a feature extractor (e.g. if you use ViT as the encoder, you should use <a href="/docs/transformers/v4.18.0/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>). See
<a href="/docs/transformers/v4.18.0/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"
>VisionTextDualEncoderConfig</a>) and inputs.</p>
<ul>
<li><strong>logits_per_image:(<code>jnp.ndarray</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>jnp.ndarray</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.18.0/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pe=new Sr({props:{$$slots:{default:[Jr]},$$scope:{ctx:et}}}),Ke=new ya({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){m=n("meta"),q=d(),g=n("h1"),$=n("a"),A=n("span"),_(j.$$.fragment),D=d(),L=n("span"),Lo=r("VisionTextDualEncoder"),no=d(),J=n("h2"),ee=n("a"),Pt=n("span"),_(he.$$.fragment),So=d(),Mt=n("span"),No=r("Overview"),so=d(),u=n("p"),Oo=r("The "),tt=n("a"),Bo=r("VisionTextDualEncoderModel"),Wo=r(` can be used to initialize a vision-text dual encoder model with
any pretrained vision autoencoding model as the vision encoder (`),zt=n("em"),Ro=r("e.g."),Uo=d(),ot=n("a"),Jo=r("ViT"),Ho=r(", "),nt=n("a"),Zo=r("BEiT"),Go=r(", "),st=n("a"),Xo=r("DeiT"),Ko=r(") and any pretrained text autoencoding model as the text encoder ("),Ct=n("em"),Qo=r("e.g."),Yo=d(),at=n("a"),en=r("RoBERTa"),tn=r(", "),rt=n("a"),on=r("BERT"),nn=r(`). Two projection layers are added on top of both the vision and text encoder to project the output embeddings
to a shared latent space. The projection layers are randomly initialized so the model should be fine-tuned on a
downstream task. This model can be used to align the vision-text embeddings using CLIP like contrastive image-text
training and then can be used for zero-shot vision tasks such image-classification or retrieval.`),ao=d(),te=n("p"),sn=r("In "),fe=n("a"),an=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),rn=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment on
new zero-shot vision tasks such as image classification or retrieval.`),ro=d(),H=n("h2"),oe=n("a"),Ft=n("span"),_(ue.$$.fragment),ln=d(),It=n("span"),dn=r("VisionTextDualEncoderConfig"),io=d(),w=n("div"),_(ge.$$.fragment),cn=d(),O=n("p"),it=n("a"),pn=r("VisionTextDualEncoderConfig"),mn=r(` is the configuration class to store the configuration of a
`),lt=n("a"),hn=r("VisionTextDualEncoderModel"),fn=r(". It is used to instantiate "),dt=n("a"),un=r("VisionTextDualEncoderModel"),gn=r(` model according to the
specified arguments, defining the text model and vision model configs.`),_n=d(),Z=n("p"),vn=r("Configuration objects inherit from "),ct=n("a"),xn=r("PretrainedConfig"),Tn=r(` and can be used to control the model outputs. Read the
documentation from `),pt=n("a"),En=r("PretrainedConfig"),bn=r(" for more information."),jn=d(),At=n("p"),wn=r("Examples:"),yn=d(),_(_e.$$.fragment),kn=d(),ne=n("div"),_(ve.$$.fragment),Vn=d(),xe=n("p"),Dn=r("Instantiate a "),mt=n("a"),$n=r("VisionTextDualEncoderConfig"),Pn=r(` (or a derived class) from text model configuration and vision
model configuration.`),Mn=d(),se=n("div"),_(Te.$$.fragment),zn=d(),Ee=n("p"),Cn=r("Serializes this instance to a Python dictionary. Override the default "),ht=n("a"),Fn=r("to_dict()"),In=r("."),lo=d(),G=n("h2"),ae=n("a"),qt=n("span"),_(be.$$.fragment),An=d(),Lt=n("span"),qn=r("VisionTextDualEncoderProcessor"),co=d(),P=n("div"),_(je.$$.fragment),Ln=d(),St=n("p"),Sn=r(`Constructs a VisionTextDualEncoder processor which wraps a vision feature extractor and a tokenizer into a single
processor.`),Nn=d(),M=n("p"),ft=n("a"),On=r("VisionTextDualEncoderProcessor"),Bn=r(" offers all the functionalities of "),ut=n("a"),Wn=r("AutoFeatureExtractor"),Rn=r(` and
`),gt=n("a"),Un=r("AutoTokenizer"),Jn=r(". See the "),Nt=n("code"),Hn=r("__call__()"),Zn=r(` and
`),_t=n("a"),Gn=r("decode()"),Xn=r(" for more information."),Kn=d(),re=n("div"),_(we.$$.fragment),Qn=d(),ye=n("p"),Yn=r(`This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s
`),vt=n("a"),es=r("batch_decode()"),ts=r(". Please refer to the docstring of this method for more information."),os=d(),ie=n("div"),_(ke.$$.fragment),ns=d(),Ve=n("p"),ss=r("This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s "),xt=n("a"),as=r("decode()"),rs=r(`.
Please refer to the docstring of this method for more information.`),po=d(),X=n("h2"),le=n("a"),Ot=n("span"),_(De.$$.fragment),is=d(),Bt=n("span"),ls=r("VisionTextDualEncoderModel"),mo=d(),y=n("div"),_($e.$$.fragment),ds=d(),Pe=n("p"),cs=r(`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Tt=n("a"),ps=r("from_pretrained()"),ms=r(` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),hs=d(),Me=n("p"),fs=r("In "),ze=n("a"),us=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),gs=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),_s=d(),Wt=n("p"),vs=r(`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),xs=d(),Ce=n("p"),Ts=r("This model inherits from "),Et=n("a"),Es=r("PreTrainedModel"),bs=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),js=d(),Fe=n("p"),ws=r("This model is also a PyTorch "),Ie=n("a"),ys=r("torch.nn.Module"),ks=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vs=d(),z=n("div"),_(Ae.$$.fragment),Ds=d(),K=n("p"),$s=r("The "),bt=n("a"),Ps=r("VisionTextDualEncoderModel"),Ms=r(" forward method, overrides the "),Rt=n("code"),zs=r("__call__"),Cs=r(" special method."),Fs=d(),_(de.$$.fragment),Is=d(),Ut=n("p"),As=r("Examples:"),qs=d(),_(qe.$$.fragment),ho=d(),Q=n("h2"),ce=n("a"),Jt=n("span"),_(Le.$$.fragment),Ls=d(),Ht=n("span"),Ss=r("FlaxVisionTextDualEncoderModel"),fo=d(),f=n("div"),_(Se.$$.fragment),Ns=d(),Ne=n("p"),Os=r(`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),jt=n("a"),Bs=r("from_pretrained()"),Ws=r(` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Rs=d(),Oe=n("p"),Us=r("In "),Be=n("a"),Js=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),Hs=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Zs=d(),Zt=n("p"),Gs=r(`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Xs=d(),We=n("p"),Ks=r("This model inherits from "),wt=n("a"),Qs=r("PreTrainedModel"),Ys=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ea=d(),Re=n("p"),ta=r("This model is also a Flax Linen "),Ue=n("a"),oa=r("flax.linen.Module"),na=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),sa=d(),Gt=n("p"),aa=r("Finally, this model supports inherent JAX features such as:"),ra=d(),S=n("ul"),Xt=n("li"),Je=n("a"),ia=r("Just-In-Time (JIT) compilation"),la=d(),Kt=n("li"),He=n("a"),da=r("Automatic Differentiation"),ca=d(),Qt=n("li"),Ze=n("a"),pa=r("Vectorization"),ma=d(),Yt=n("li"),Ge=n("a"),ha=r("Parallelization"),fa=d(),C=n("div"),_(Xe.$$.fragment),ua=d(),Y=n("p"),ga=r("The "),yt=n("a"),_a=r("FlaxVisionTextDualEncoderModel"),va=r(" forward method, overrides the "),eo=n("code"),xa=r("__call__"),Ta=r(" special method."),Ea=d(),_(pe.$$.fragment),ba=d(),to=n("p"),ja=r("Examples:"),wa=d(),_(Ke.$$.fragment),this.h()},l(o){const p=Wr('[data-svelte="svelte-1phssyn"]',document.head);m=s(p,"META",{name:!0,content:!0}),p.forEach(t),q=c(o),g=s(o,"H1",{class:!0});var Qe=a(g);$=s(Qe,"A",{id:!0,class:!0,href:!0});var oo=a($);A=s(oo,"SPAN",{});var ka=a(A);v(j.$$.fragment,ka),ka.forEach(t),oo.forEach(t),D=c(Qe),L=s(Qe,"SPAN",{});var Va=a(L);Lo=i(Va,"VisionTextDualEncoder"),Va.forEach(t),Qe.forEach(t),no=c(o),J=s(o,"H2",{class:!0});var go=a(J);ee=s(go,"A",{id:!0,class:!0,href:!0});var Da=a(ee);Pt=s(Da,"SPAN",{});var $a=a(Pt);v(he.$$.fragment,$a),$a.forEach(t),Da.forEach(t),So=c(go),Mt=s(go,"SPAN",{});var Pa=a(Mt);No=i(Pa,"Overview"),Pa.forEach(t),go.forEach(t),so=c(o),u=s(o,"P",{});var k=a(u);Oo=i(k,"The "),tt=s(k,"A",{href:!0});var Ma=a(tt);Bo=i(Ma,"VisionTextDualEncoderModel"),Ma.forEach(t),Wo=i(k,` can be used to initialize a vision-text dual encoder model with
any pretrained vision autoencoding model as the vision encoder (`),zt=s(k,"EM",{});var za=a(zt);Ro=i(za,"e.g."),za.forEach(t),Uo=c(k),ot=s(k,"A",{href:!0});var Ca=a(ot);Jo=i(Ca,"ViT"),Ca.forEach(t),Ho=i(k,", "),nt=s(k,"A",{href:!0});var Fa=a(nt);Zo=i(Fa,"BEiT"),Fa.forEach(t),Go=i(k,", "),st=s(k,"A",{href:!0});var Ia=a(st);Xo=i(Ia,"DeiT"),Ia.forEach(t),Ko=i(k,") and any pretrained text autoencoding model as the text encoder ("),Ct=s(k,"EM",{});var Aa=a(Ct);Qo=i(Aa,"e.g."),Aa.forEach(t),Yo=c(k),at=s(k,"A",{href:!0});var qa=a(at);en=i(qa,"RoBERTa"),qa.forEach(t),tn=i(k,", "),rt=s(k,"A",{href:!0});var La=a(rt);on=i(La,"BERT"),La.forEach(t),nn=i(k,`). Two projection layers are added on top of both the vision and text encoder to project the output embeddings
to a shared latent space. The projection layers are randomly initialized so the model should be fine-tuned on a
downstream task. This model can be used to align the vision-text embeddings using CLIP like contrastive image-text
training and then can be used for zero-shot vision tasks such image-classification or retrieval.`),k.forEach(t),ao=c(o),te=s(o,"P",{});var _o=a(te);sn=i(_o,"In "),fe=s(_o,"A",{href:!0,rel:!0});var Sa=a(fe);an=i(Sa,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),Sa.forEach(t),rn=i(_o,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment on
new zero-shot vision tasks such as image classification or retrieval.`),_o.forEach(t),ro=c(o),H=s(o,"H2",{class:!0});var vo=a(H);oe=s(vo,"A",{id:!0,class:!0,href:!0});var Na=a(oe);Ft=s(Na,"SPAN",{});var Oa=a(Ft);v(ue.$$.fragment,Oa),Oa.forEach(t),Na.forEach(t),ln=c(vo),It=s(vo,"SPAN",{});var Ba=a(It);dn=i(Ba,"VisionTextDualEncoderConfig"),Ba.forEach(t),vo.forEach(t),io=c(o),w=s(o,"DIV",{class:!0});var F=a(w);v(ge.$$.fragment,F),cn=c(F),O=s(F,"P",{});var Ye=a(O);it=s(Ye,"A",{href:!0});var Wa=a(it);pn=i(Wa,"VisionTextDualEncoderConfig"),Wa.forEach(t),mn=i(Ye,` is the configuration class to store the configuration of a
`),lt=s(Ye,"A",{href:!0});var Ra=a(lt);hn=i(Ra,"VisionTextDualEncoderModel"),Ra.forEach(t),fn=i(Ye,". It is used to instantiate "),dt=s(Ye,"A",{href:!0});var Ua=a(dt);un=i(Ua,"VisionTextDualEncoderModel"),Ua.forEach(t),gn=i(Ye,` model according to the
specified arguments, defining the text model and vision model configs.`),Ye.forEach(t),_n=c(F),Z=s(F,"P",{});var kt=a(Z);vn=i(kt,"Configuration objects inherit from "),ct=s(kt,"A",{href:!0});var Ja=a(ct);xn=i(Ja,"PretrainedConfig"),Ja.forEach(t),Tn=i(kt,` and can be used to control the model outputs. Read the
documentation from `),pt=s(kt,"A",{href:!0});var Ha=a(pt);En=i(Ha,"PretrainedConfig"),Ha.forEach(t),bn=i(kt," for more information."),kt.forEach(t),jn=c(F),At=s(F,"P",{});var Za=a(At);wn=i(Za,"Examples:"),Za.forEach(t),yn=c(F),v(_e.$$.fragment,F),kn=c(F),ne=s(F,"DIV",{class:!0});var xo=a(ne);v(ve.$$.fragment,xo),Vn=c(xo),xe=s(xo,"P",{});var To=a(xe);Dn=i(To,"Instantiate a "),mt=s(To,"A",{href:!0});var Ga=a(mt);$n=i(Ga,"VisionTextDualEncoderConfig"),Ga.forEach(t),Pn=i(To,` (or a derived class) from text model configuration and vision
model configuration.`),To.forEach(t),xo.forEach(t),Mn=c(F),se=s(F,"DIV",{class:!0});var Eo=a(se);v(Te.$$.fragment,Eo),zn=c(Eo),Ee=s(Eo,"P",{});var bo=a(Ee);Cn=i(bo,"Serializes this instance to a Python dictionary. Override the default "),ht=s(bo,"A",{href:!0});var Xa=a(ht);Fn=i(Xa,"to_dict()"),Xa.forEach(t),In=i(bo,"."),bo.forEach(t),Eo.forEach(t),F.forEach(t),lo=c(o),G=s(o,"H2",{class:!0});var jo=a(G);ae=s(jo,"A",{id:!0,class:!0,href:!0});var Ka=a(ae);qt=s(Ka,"SPAN",{});var Qa=a(qt);v(be.$$.fragment,Qa),Qa.forEach(t),Ka.forEach(t),An=c(jo),Lt=s(jo,"SPAN",{});var Ya=a(Lt);qn=i(Ya,"VisionTextDualEncoderProcessor"),Ya.forEach(t),jo.forEach(t),co=c(o),P=s(o,"DIV",{class:!0});var B=a(P);v(je.$$.fragment,B),Ln=c(B),St=s(B,"P",{});var er=a(St);Sn=i(er,`Constructs a VisionTextDualEncoder processor which wraps a vision feature extractor and a tokenizer into a single
processor.`),er.forEach(t),Nn=c(B),M=s(B,"P",{});var N=a(M);ft=s(N,"A",{href:!0});var tr=a(ft);On=i(tr,"VisionTextDualEncoderProcessor"),tr.forEach(t),Bn=i(N," offers all the functionalities of "),ut=s(N,"A",{href:!0});var or=a(ut);Wn=i(or,"AutoFeatureExtractor"),or.forEach(t),Rn=i(N,` and
`),gt=s(N,"A",{href:!0});var nr=a(gt);Un=i(nr,"AutoTokenizer"),nr.forEach(t),Jn=i(N,". See the "),Nt=s(N,"CODE",{});var sr=a(Nt);Hn=i(sr,"__call__()"),sr.forEach(t),Zn=i(N,` and
`),_t=s(N,"A",{href:!0});var ar=a(_t);Gn=i(ar,"decode()"),ar.forEach(t),Xn=i(N," for more information."),N.forEach(t),Kn=c(B),re=s(B,"DIV",{class:!0});var wo=a(re);v(we.$$.fragment,wo),Qn=c(wo),ye=s(wo,"P",{});var yo=a(ye);Yn=i(yo,`This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s
`),vt=s(yo,"A",{href:!0});var rr=a(vt);es=i(rr,"batch_decode()"),rr.forEach(t),ts=i(yo,". Please refer to the docstring of this method for more information."),yo.forEach(t),wo.forEach(t),os=c(B),ie=s(B,"DIV",{class:!0});var ko=a(ie);v(ke.$$.fragment,ko),ns=c(ko),Ve=s(ko,"P",{});var Vo=a(Ve);ss=i(Vo,"This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s "),xt=s(Vo,"A",{href:!0});var ir=a(xt);as=i(ir,"decode()"),ir.forEach(t),rs=i(Vo,`.
Please refer to the docstring of this method for more information.`),Vo.forEach(t),ko.forEach(t),B.forEach(t),po=c(o),X=s(o,"H2",{class:!0});var Do=a(X);le=s(Do,"A",{id:!0,class:!0,href:!0});var lr=a(le);Ot=s(lr,"SPAN",{});var dr=a(Ot);v(De.$$.fragment,dr),dr.forEach(t),lr.forEach(t),is=c(Do),Bt=s(Do,"SPAN",{});var cr=a(Bt);ls=i(cr,"VisionTextDualEncoderModel"),cr.forEach(t),Do.forEach(t),mo=c(o),y=s(o,"DIV",{class:!0});var I=a(y);v($e.$$.fragment,I),ds=c(I),Pe=s(I,"P",{});var $o=a(Pe);cs=i($o,`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Tt=s($o,"A",{href:!0});var pr=a(Tt);ps=i(pr,"from_pretrained()"),pr.forEach(t),ms=i($o,` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),$o.forEach(t),hs=c(I),Me=s(I,"P",{});var Po=a(Me);fs=i(Po,"In "),ze=s(Po,"A",{href:!0,rel:!0});var mr=a(ze);us=i(mr,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),mr.forEach(t),gs=i(Po,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Po.forEach(t),_s=c(I),Wt=s(I,"P",{});var hr=a(Wt);vs=i(hr,`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),hr.forEach(t),xs=c(I),Ce=s(I,"P",{});var Mo=a(Ce);Ts=i(Mo,"This model inherits from "),Et=s(Mo,"A",{href:!0});var fr=a(Et);Es=i(fr,"PreTrainedModel"),fr.forEach(t),bs=i(Mo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mo.forEach(t),js=c(I),Fe=s(I,"P",{});var zo=a(Fe);ws=i(zo,"This model is also a PyTorch "),Ie=s(zo,"A",{href:!0,rel:!0});var ur=a(Ie);ys=i(ur,"torch.nn.Module"),ur.forEach(t),ks=i(zo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zo.forEach(t),Vs=c(I),z=s(I,"DIV",{class:!0});var W=a(z);v(Ae.$$.fragment,W),Ds=c(W),K=s(W,"P",{});var Vt=a(K);$s=i(Vt,"The "),bt=s(Vt,"A",{href:!0});var gr=a(bt);Ps=i(gr,"VisionTextDualEncoderModel"),gr.forEach(t),Ms=i(Vt," forward method, overrides the "),Rt=s(Vt,"CODE",{});var _r=a(Rt);zs=i(_r,"__call__"),_r.forEach(t),Cs=i(Vt," special method."),Vt.forEach(t),Fs=c(W),v(de.$$.fragment,W),Is=c(W),Ut=s(W,"P",{});var vr=a(Ut);As=i(vr,"Examples:"),vr.forEach(t),qs=c(W),v(qe.$$.fragment,W),W.forEach(t),I.forEach(t),ho=c(o),Q=s(o,"H2",{class:!0});var Co=a(Q);ce=s(Co,"A",{id:!0,class:!0,href:!0});var xr=a(ce);Jt=s(xr,"SPAN",{});var Tr=a(Jt);v(Le.$$.fragment,Tr),Tr.forEach(t),xr.forEach(t),Ls=c(Co),Ht=s(Co,"SPAN",{});var Er=a(Ht);Ss=i(Er,"FlaxVisionTextDualEncoderModel"),Er.forEach(t),Co.forEach(t),fo=c(o),f=s(o,"DIV",{class:!0});var V=a(f);v(Se.$$.fragment,V),Ns=c(V),Ne=s(V,"P",{});var Fo=a(Ne);Os=i(Fo,`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),jt=s(Fo,"A",{href:!0});var br=a(jt);Bs=i(br,"from_pretrained()"),br.forEach(t),Ws=i(Fo,` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Fo.forEach(t),Rs=c(V),Oe=s(V,"P",{});var Io=a(Oe);Us=i(Io,"In "),Be=s(Io,"A",{href:!0,rel:!0});var jr=a(Be);Js=i(jr,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),jr.forEach(t),Hs=i(Io,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Io.forEach(t),Zs=c(V),Zt=s(V,"P",{});var wr=a(Zt);Gs=i(wr,`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),wr.forEach(t),Xs=c(V),We=s(V,"P",{});var Ao=a(We);Ks=i(Ao,"This model inherits from "),wt=s(Ao,"A",{href:!0});var yr=a(wt);Qs=i(yr,"PreTrainedModel"),yr.forEach(t),Ys=i(Ao,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ao.forEach(t),ea=c(V),Re=s(V,"P",{});var qo=a(Re);ta=i(qo,"This model is also a Flax Linen "),Ue=s(qo,"A",{href:!0,rel:!0});var kr=a(Ue);oa=i(kr,"flax.linen.Module"),kr.forEach(t),na=i(qo,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qo.forEach(t),sa=c(V),Gt=s(V,"P",{});var Vr=a(Gt);aa=i(Vr,"Finally, this model supports inherent JAX features such as:"),Vr.forEach(t),ra=c(V),S=s(V,"UL",{});var me=a(S);Xt=s(me,"LI",{});var Dr=a(Xt);Je=s(Dr,"A",{href:!0,rel:!0});var $r=a(Je);ia=i($r,"Just-In-Time (JIT) compilation"),$r.forEach(t),Dr.forEach(t),la=c(me),Kt=s(me,"LI",{});var Pr=a(Kt);He=s(Pr,"A",{href:!0,rel:!0});var Mr=a(He);da=i(Mr,"Automatic Differentiation"),Mr.forEach(t),Pr.forEach(t),ca=c(me),Qt=s(me,"LI",{});var zr=a(Qt);Ze=s(zr,"A",{href:!0,rel:!0});var Cr=a(Ze);pa=i(Cr,"Vectorization"),Cr.forEach(t),zr.forEach(t),ma=c(me),Yt=s(me,"LI",{});var Fr=a(Yt);Ge=s(Fr,"A",{href:!0,rel:!0});var Ir=a(Ge);ha=i(Ir,"Parallelization"),Ir.forEach(t),Fr.forEach(t),me.forEach(t),fa=c(V),C=s(V,"DIV",{class:!0});var R=a(C);v(Xe.$$.fragment,R),ua=c(R),Y=s(R,"P",{});var Dt=a(Y);ga=i(Dt,"The "),yt=s(Dt,"A",{href:!0});var Ar=a(yt);_a=i(Ar,"FlaxVisionTextDualEncoderModel"),Ar.forEach(t),va=i(Dt," forward method, overrides the "),eo=s(Dt,"CODE",{});var qr=a(eo);xa=i(qr,"__call__"),qr.forEach(t),Ta=i(Dt," special method."),Dt.forEach(t),Ea=c(R),v(pe.$$.fragment,R),ba=c(R),to=s(R,"P",{});var Lr=a(to);ja=i(Lr,"Examples:"),Lr.forEach(t),wa=c(R),v(Ke.$$.fragment,R),R.forEach(t),V.forEach(t),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(Zr)),l($,"id","visiontextdualencoder"),l($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l($,"href","#visiontextdualencoder"),l(g,"class","relative group"),l(ee,"id","overview"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#overview"),l(J,"class","relative group"),l(tt,"href","/docs/transformers/v4.18.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(ot,"href","vit"),l(nt,"href","beit"),l(st,"href","deit"),l(at,"href","roberta"),l(rt,"href","bert"),l(fe,"href","https://arxiv.org/abs/2111.07991"),l(fe,"rel","nofollow"),l(oe,"id","transformers.VisionTextDualEncoderConfig"),l(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(oe,"href","#transformers.VisionTextDualEncoderConfig"),l(H,"class","relative group"),l(it,"href","/docs/transformers/v4.18.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"),l(lt,"href","/docs/transformers/v4.18.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(dt,"href","/docs/transformers/v4.18.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(ct,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),l(pt,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),l(mt,"href","/docs/transformers/v4.18.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"),l(ne,"class","docstring"),l(ht,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig.to_dict"),l(se,"class","docstring"),l(w,"class","docstring"),l(ae,"id","transformers.VisionTextDualEncoderProcessor"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.VisionTextDualEncoderProcessor"),l(G,"class","relative group"),l(ft,"href","/docs/transformers/v4.18.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderProcessor"),l(ut,"href","/docs/transformers/v4.18.0/en/model_doc/auto#transformers.AutoFeatureExtractor"),l(gt,"href","/docs/transformers/v4.18.0/en/model_doc/auto#transformers.AutoTokenizer"),l(_t,"href","/docs/transformers/v4.18.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderProcessor.decode"),l(vt,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.batch_decode"),l(re,"class","docstring"),l(xt,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.decode"),l(ie,"class","docstring"),l(P,"class","docstring"),l(le,"id","transformers.VisionTextDualEncoderModel"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.VisionTextDualEncoderModel"),l(X,"class","relative group"),l(Tt,"href","/docs/transformers/v4.18.0/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(ze,"href","https://arxiv.org/abs/2111.07991"),l(ze,"rel","nofollow"),l(Et,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),l(Ie,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ie,"rel","nofollow"),l(bt,"href","/docs/transformers/v4.18.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(z,"class","docstring"),l(y,"class","docstring"),l(ce,"id","transformers.FlaxVisionTextDualEncoderModel"),l(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ce,"href","#transformers.FlaxVisionTextDualEncoderModel"),l(Q,"class","relative group"),l(jt,"href","/docs/transformers/v4.18.0/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Be,"href","https://arxiv.org/abs/2111.07991"),l(Be,"rel","nofollow"),l(wt,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),l(Ue,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(Ue,"rel","nofollow"),l(Je,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(Je,"rel","nofollow"),l(He,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(He,"rel","nofollow"),l(Ze,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Ze,"rel","nofollow"),l(Ge,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(Ge,"rel","nofollow"),l(yt,"href","/docs/transformers/v4.18.0/en/model_doc/vision-text-dual-encoder#transformers.FlaxVisionTextDualEncoderModel"),l(C,"class","docstring"),l(f,"class","docstring")},m(o,p){e(document.head,m),h(o,q,p),h(o,g,p),e(g,$),e($,A),x(j,A,null),e(g,D),e(g,L),e(L,Lo),h(o,no,p),h(o,J,p),e(J,ee),e(ee,Pt),x(he,Pt,null),e(J,So),e(J,Mt),e(Mt,No),h(o,so,p),h(o,u,p),e(u,Oo),e(u,tt),e(tt,Bo),e(u,Wo),e(u,zt),e(zt,Ro),e(u,Uo),e(u,ot),e(ot,Jo),e(u,Ho),e(u,nt),e(nt,Zo),e(u,Go),e(u,st),e(st,Xo),e(u,Ko),e(u,Ct),e(Ct,Qo),e(u,Yo),e(u,at),e(at,en),e(u,tn),e(u,rt),e(rt,on),e(u,nn),h(o,ao,p),h(o,te,p),e(te,sn),e(te,fe),e(fe,an),e(te,rn),h(o,ro,p),h(o,H,p),e(H,oe),e(oe,Ft),x(ue,Ft,null),e(H,ln),e(H,It),e(It,dn),h(o,io,p),h(o,w,p),x(ge,w,null),e(w,cn),e(w,O),e(O,it),e(it,pn),e(O,mn),e(O,lt),e(lt,hn),e(O,fn),e(O,dt),e(dt,un),e(O,gn),e(w,_n),e(w,Z),e(Z,vn),e(Z,ct),e(ct,xn),e(Z,Tn),e(Z,pt),e(pt,En),e(Z,bn),e(w,jn),e(w,At),e(At,wn),e(w,yn),x(_e,w,null),e(w,kn),e(w,ne),x(ve,ne,null),e(ne,Vn),e(ne,xe),e(xe,Dn),e(xe,mt),e(mt,$n),e(xe,Pn),e(w,Mn),e(w,se),x(Te,se,null),e(se,zn),e(se,Ee),e(Ee,Cn),e(Ee,ht),e(ht,Fn),e(Ee,In),h(o,lo,p),h(o,G,p),e(G,ae),e(ae,qt),x(be,qt,null),e(G,An),e(G,Lt),e(Lt,qn),h(o,co,p),h(o,P,p),x(je,P,null),e(P,Ln),e(P,St),e(St,Sn),e(P,Nn),e(P,M),e(M,ft),e(ft,On),e(M,Bn),e(M,ut),e(ut,Wn),e(M,Rn),e(M,gt),e(gt,Un),e(M,Jn),e(M,Nt),e(Nt,Hn),e(M,Zn),e(M,_t),e(_t,Gn),e(M,Xn),e(P,Kn),e(P,re),x(we,re,null),e(re,Qn),e(re,ye),e(ye,Yn),e(ye,vt),e(vt,es),e(ye,ts),e(P,os),e(P,ie),x(ke,ie,null),e(ie,ns),e(ie,Ve),e(Ve,ss),e(Ve,xt),e(xt,as),e(Ve,rs),h(o,po,p),h(o,X,p),e(X,le),e(le,Ot),x(De,Ot,null),e(X,is),e(X,Bt),e(Bt,ls),h(o,mo,p),h(o,y,p),x($e,y,null),e(y,ds),e(y,Pe),e(Pe,cs),e(Pe,Tt),e(Tt,ps),e(Pe,ms),e(y,hs),e(y,Me),e(Me,fs),e(Me,ze),e(ze,us),e(Me,gs),e(y,_s),e(y,Wt),e(Wt,vs),e(y,xs),e(y,Ce),e(Ce,Ts),e(Ce,Et),e(Et,Es),e(Ce,bs),e(y,js),e(y,Fe),e(Fe,ws),e(Fe,Ie),e(Ie,ys),e(Fe,ks),e(y,Vs),e(y,z),x(Ae,z,null),e(z,Ds),e(z,K),e(K,$s),e(K,bt),e(bt,Ps),e(K,Ms),e(K,Rt),e(Rt,zs),e(K,Cs),e(z,Fs),x(de,z,null),e(z,Is),e(z,Ut),e(Ut,As),e(z,qs),x(qe,z,null),h(o,ho,p),h(o,Q,p),e(Q,ce),e(ce,Jt),x(Le,Jt,null),e(Q,Ls),e(Q,Ht),e(Ht,Ss),h(o,fo,p),h(o,f,p),x(Se,f,null),e(f,Ns),e(f,Ne),e(Ne,Os),e(Ne,jt),e(jt,Bs),e(Ne,Ws),e(f,Rs),e(f,Oe),e(Oe,Us),e(Oe,Be),e(Be,Js),e(Oe,Hs),e(f,Zs),e(f,Zt),e(Zt,Gs),e(f,Xs),e(f,We),e(We,Ks),e(We,wt),e(wt,Qs),e(We,Ys),e(f,ea),e(f,Re),e(Re,ta),e(Re,Ue),e(Ue,oa),e(Re,na),e(f,sa),e(f,Gt),e(Gt,aa),e(f,ra),e(f,S),e(S,Xt),e(Xt,Je),e(Je,ia),e(S,la),e(S,Kt),e(Kt,He),e(He,da),e(S,ca),e(S,Qt),e(Qt,Ze),e(Ze,pa),e(S,ma),e(S,Yt),e(Yt,Ge),e(Ge,ha),e(f,fa),e(f,C),x(Xe,C,null),e(C,ua),e(C,Y),e(Y,ga),e(Y,yt),e(yt,_a),e(Y,va),e(Y,eo),e(eo,xa),e(Y,Ta),e(C,Ea),x(pe,C,null),e(C,ba),e(C,to),e(to,ja),e(C,wa),x(Ke,C,null),uo=!0},p(o,[p]){const Qe={};p&2&&(Qe.$$scope={dirty:p,ctx:o}),de.$set(Qe);const oo={};p&2&&(oo.$$scope={dirty:p,ctx:o}),pe.$set(oo)},i(o){uo||(T(j.$$.fragment,o),T(he.$$.fragment,o),T(ue.$$.fragment,o),T(ge.$$.fragment,o),T(_e.$$.fragment,o),T(ve.$$.fragment,o),T(Te.$$.fragment,o),T(be.$$.fragment,o),T(je.$$.fragment,o),T(we.$$.fragment,o),T(ke.$$.fragment,o),T(De.$$.fragment,o),T($e.$$.fragment,o),T(Ae.$$.fragment,o),T(de.$$.fragment,o),T(qe.$$.fragment,o),T(Le.$$.fragment,o),T(Se.$$.fragment,o),T(Xe.$$.fragment,o),T(pe.$$.fragment,o),T(Ke.$$.fragment,o),uo=!0)},o(o){E(j.$$.fragment,o),E(he.$$.fragment,o),E(ue.$$.fragment,o),E(ge.$$.fragment,o),E(_e.$$.fragment,o),E(ve.$$.fragment,o),E(Te.$$.fragment,o),E(be.$$.fragment,o),E(je.$$.fragment,o),E(we.$$.fragment,o),E(ke.$$.fragment,o),E(De.$$.fragment,o),E($e.$$.fragment,o),E(Ae.$$.fragment,o),E(de.$$.fragment,o),E(qe.$$.fragment,o),E(Le.$$.fragment,o),E(Se.$$.fragment,o),E(Xe.$$.fragment,o),E(pe.$$.fragment,o),E(Ke.$$.fragment,o),uo=!1},d(o){t(m),o&&t(q),o&&t(g),b(j),o&&t(no),o&&t(J),b(he),o&&t(so),o&&t(u),o&&t(ao),o&&t(te),o&&t(ro),o&&t(H),b(ue),o&&t(io),o&&t(w),b(ge),b(_e),b(ve),b(Te),o&&t(lo),o&&t(G),b(be),o&&t(co),o&&t(P),b(je),b(we),b(ke),o&&t(po),o&&t(X),b(De),o&&t(mo),o&&t(y),b($e),b(Ae),b(de),b(qe),o&&t(ho),o&&t(Q),b(Le),o&&t(fo),o&&t(f),b(Se),b(Xe),b(pe),b(Ke)}}}const Zr={local:"visiontextdualencoder",sections:[{local:"overview",title:"Overview"},{local:"transformers.VisionTextDualEncoderConfig",title:"VisionTextDualEncoderConfig"},{local:"transformers.VisionTextDualEncoderProcessor",title:"VisionTextDualEncoderProcessor"},{local:"transformers.VisionTextDualEncoderModel",title:"VisionTextDualEncoderModel"},{local:"transformers.FlaxVisionTextDualEncoderModel",title:"FlaxVisionTextDualEncoderModel"}],title:"VisionTextDualEncoder"};function Gr(et){return Rr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ti extends Nr{constructor(m){super();Or(this,m,Gr,Hr,Br,{})}}export{ti as default,Zr as metadata};
