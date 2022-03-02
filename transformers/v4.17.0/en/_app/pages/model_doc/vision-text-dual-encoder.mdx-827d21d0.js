import{S as Nr,i as Br,s as Or,e as n,k as d,w as _,t as r,M as Wr,c as s,d as t,m as c,a,x as v,h as i,b as l,F as e,g as h,y as x,q as T,o as E,B as b}from"../../chunks/vendor-4833417e.js";import{T as Sr}from"../../chunks/Tip-fffd6df1.js";import{D as U}from"../../chunks/Docstring-7b52c3d4.js";import{C as ya}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as Vt}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Rr(he){let m,M,f,j,q;return{c(){m=n("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),j=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){m=s(w,"P",{});var $=a(m);M=i($,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s($,"CODE",{});var L=a(f);j=i(L,"Module"),L.forEach(t),q=i($,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),$.forEach(t)},m(w,$){h(w,m,$),e(m,M),e(m,f),e(f,j),e(m,q)},d(w){w&&t(m)}}}function Ur(he){let m,M,f,j,q;return{c(){m=n("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),j=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){m=s(w,"P",{});var $=a(m);M=i($,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s($,"CODE",{});var L=a(f);j=i(L,"Module"),L.forEach(t),q=i($,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),$.forEach(t)},m(w,$){h(w,m,$),e(m,M),e(m,f),e(f,j),e(m,q)},d(w){w&&t(m)}}}function Jr(he){let m,M,f,j,q,w,$,L,Lo,no,J,ee,Dt,fe,So,$t,No,so,g,Bo,tt,Oo,Wo,Pt,Ro,Uo,ot,Jo,Ho,nt,Zo,Go,st,Xo,Ko,Mt,Qo,Yo,at,en,tn,rt,on,nn,ao,te,sn,ue,an,rn,ro,H,oe,zt,ge,ln,Ct,dn,io,y,_e,cn,B,it,pn,mn,lt,hn,fn,dt,un,gn,_n,Z,vn,ct,xn,Tn,pt,En,bn,jn,Ft,wn,yn,ve,kn,ne,xe,Vn,Te,Dn,mt,$n,Pn,Mn,se,Ee,zn,be,Cn,ht,Fn,In,lo,G,ae,It,je,An,At,qn,co,P,we,Ln,qt,Sn,Nn,z,ft,Bn,On,ut,Wn,Rn,gt,Un,Jn,Lt,Hn,Zn,_t,Gn,Xn,Kn,re,ye,Qn,ke,Yn,vt,es,ts,os,ie,Ve,ns,De,ss,xt,as,rs,po,X,le,St,$e,is,Nt,ls,mo,k,Pe,ds,Me,cs,Bt,ps,ms,hs,ze,fs,Ce,us,gs,_s,Ot,vs,xs,Fe,Ts,Tt,Es,bs,js,Ie,ws,Ae,ys,ks,Vs,C,qe,Ds,K,$s,Et,Ps,Ms,Wt,zs,Cs,Fs,de,Is,Rt,As,qs,Le,ho,Q,ce,Ut,Se,Ls,Jt,Ss,fo,u,Ne,Ns,Be,Bs,Ht,Os,Ws,Rs,Oe,Us,We,Js,Hs,Zs,Zt,Gs,Xs,Re,Ks,bt,Qs,Ys,ea,Ue,ta,Je,oa,na,sa,Gt,aa,ra,S,Xt,He,ia,la,Kt,Ze,da,ca,Qt,Ge,pa,ma,Yt,Xe,ha,fa,F,Ke,ua,Y,ga,jt,_a,va,eo,xa,Ta,Ea,pe,ba,to,ja,wa,Qe,uo;return w=new Vt({}),fe=new Vt({}),ge=new Vt({}),_e=new U({props:{name:"class transformers.VisionTextDualEncoderConfig",anchor:"transformers.VisionTextDualEncoderConfig",parameters:[{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L28",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>) &#x2014;
Dictionary of configuration options that defines text model config.`,name:"text_config_dict"},{anchor:"transformers.VisionTextDualEncoderConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>) &#x2014;
Dictionary of configuration options that defines vison model config.`,name:"vision_config_dict"},{anchor:"transformers.VisionTextDualEncoderConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.VisionTextDualEncoderConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.VisionTextDualEncoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}]}}),ve=new ya({props:{codee:`from transformers import ViTConfig, BertConfig, VisionTextDualEncoderConfig, VisionTextDualEncoderModel

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
model = VisionTextDualEncoderModel.from_pretrained("vit-bert", config=vision_text_config),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTConfig, BertConfig, VisionTextDualEncoderConfig, VisionTextDualEncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionTextDualEncoderModel.from_pretrained(<span class="hljs-string">&quot;vit-bert&quot;</span>, config=vision_text_config)`}}),xe=new U({props:{name:"from_vision_text_configs",anchor:"transformers.VisionTextDualEncoderConfig.from_vision_text_configs",parameters:[{name:"vision_config",val:": PretrainedConfig"},{name:"text_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L105",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"
>VisionTextDualEncoderConfig</a></p>
`}}),Ee=new U({props:{name:"to_dict",anchor:"transformers.VisionTextDualEncoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L117",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),je=new Vt({}),we=new U({props:{name:"class transformers.VisionTextDualEncoderProcessor",anchor:"transformers.VisionTextDualEncoderProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L23",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.VisionTextDualEncoderProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/v4.17.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}]}}),ye=new U({props:{name:"batch_decode",anchor:"transformers.VisionTextDualEncoderProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L98"}}),Ve=new U({props:{name:"decode",anchor:"transformers.VisionTextDualEncoderProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L105"}}),$e=new Vt({}),Pe=new U({props:{name:"class transformers.VisionTextDualEncoderModel",anchor:"transformers.VisionTextDualEncoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.models.vision_text_dual_encoder.configuration_vision_text_dual_encoder.VisionTextDualEncoderConfig] = None"},{name:"vision_model",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"text_model",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/vision_text_dual_encoder/modeling_vision_text_dual_encoder.py#L163",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),qe=new U({props:{name:"forward",anchor:"transformers.VisionTextDualEncoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"return_loss",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/vision_text_dual_encoder/modeling_vision_text_dual_encoder.py#L295",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
a feature extractor (e.g. if you use ViT as the encoder, you should use <a href="/docs/transformers/v4.17.0/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>). See
<a href="/docs/transformers/v4.17.0/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VisionTextDualEncoderModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.VisionTextDualEncoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisionTextDualEncoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisionTextDualEncoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_clip.CLIPOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"
>VisionTextDualEncoderConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.
(<code>torch.FloatTensor</code><strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.
(<code>torch.FloatTensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.
<strong>
The output of the <a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.
</strong>
The output of the <a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<ul>
<li>**vision_model_output(<code>BaseModelOutputWithPooling</code>)</li>
</ul>
`}}),de=new Sr({props:{$$slots:{default:[Rr]},$$scope:{ctx:he}}}),Le=new ya({props:{codee:`from PIL import Image
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
probs = logits_per_image.softmax(dim=1)  # we can take the softmax to get the label probabilities,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Se=new Vt({}),Ne=new U({props:{name:"class transformers.FlaxVisionTextDualEncoderModel",anchor:"transformers.FlaxVisionTextDualEncoderModel",parameters:[{name:"config",val:": VisionTextDualEncoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/vision_text_dual_encoder/modeling_flax_vision_text_dual_encoder.py#L219",parametersDescription:[{anchor:"transformers.FlaxVisionTextDualEncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig">VisionTextDualEncoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Ke=new U({props:{name:"__call__",anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/vision_text_dual_encoder/modeling_flax_vision_text_dual_encoder.py#L251",parametersDescription:[{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
a feature extractor (e.g. if you use ViT as the encoder, you should use <a href="/docs/transformers/v4.17.0/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>). See
<a href="/docs/transformers/v4.17.0/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"
>VisionTextDualEncoderConfig</a>) and inputs.</p>
<p>(<code>jnp.ndarray</code><strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.
(<code>jnp.ndarray</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</p>
<ul>
<li><strong>text_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.
<strong>
The output of the <a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.
</strong>
The output of the <a
  href="/docs/transformers/v4.17.0/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<ul>
<li>**vision_model_output(<code>FlaxBaseModelOutputWithPooling</code>)</li>
</ul>
`}}),pe=new Sr({props:{$$slots:{default:[Ur]},$$scope:{ctx:he}}}),Qe=new ya({props:{codee:`from PIL import Image
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
probs = jax.nn.softmax(logits_per_image, axis=1)  # we can take the softmax to get the label probabilities,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){m=n("meta"),M=d(),f=n("h1"),j=n("a"),q=n("span"),_(w.$$.fragment),$=d(),L=n("span"),Lo=r("VisionTextDualEncoder"),no=d(),J=n("h2"),ee=n("a"),Dt=n("span"),_(fe.$$.fragment),So=d(),$t=n("span"),No=r("Overview"),so=d(),g=n("p"),Bo=r("The "),tt=n("a"),Oo=r("VisionTextDualEncoderModel"),Wo=r(` can be used to initialize a vision-text dual encoder model with
any pretrained vision autoencoding model as the vision encoder (`),Pt=n("em"),Ro=r("e.g."),Uo=d(),ot=n("a"),Jo=r("ViT"),Ho=r(", "),nt=n("a"),Zo=r("BEiT"),Go=r(", "),st=n("a"),Xo=r("DeiT"),Ko=r(") and any pretrained text autoencoding model as the text encoder ("),Mt=n("em"),Qo=r("e.g."),Yo=d(),at=n("a"),en=r("RoBERTa"),tn=r(", "),rt=n("a"),on=r("BERT"),nn=r(`). Two projection layers are added on top of both the vision and text encoder to project the output embeddings
to a shared latent space. The projection layers are randomly initialized so the model should be fine-tuned on a
downstream task. This model can be used to align the vision-text embeddings using CLIP like contrastive image-text
training and then can be used for zero-shot vision tasks such image-classification or retrieval.`),ao=d(),te=n("p"),sn=r("In "),ue=n("a"),an=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),rn=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment on
new zero-shot vision tasks such as image classification or retrieval.`),ro=d(),H=n("h2"),oe=n("a"),zt=n("span"),_(ge.$$.fragment),ln=d(),Ct=n("span"),dn=r("VisionTextDualEncoderConfig"),io=d(),y=n("div"),_(_e.$$.fragment),cn=d(),B=n("p"),it=n("a"),pn=r("VisionTextDualEncoderConfig"),mn=r(` is the configuration class to store the configuration of a
`),lt=n("a"),hn=r("VisionTextDualEncoderModel"),fn=r(". It is used to instantiate "),dt=n("a"),un=r("VisionTextDualEncoderModel"),gn=r(` model according to the
specified arguments, defining the text model and vision model configs.`),_n=d(),Z=n("p"),vn=r("Configuration objects inherit from "),ct=n("a"),xn=r("PretrainedConfig"),Tn=r(` and can be used to control the model outputs. Read the
documentation from `),pt=n("a"),En=r("PretrainedConfig"),bn=r(" for more information."),jn=d(),Ft=n("p"),wn=r("Examples:"),yn=d(),_(ve.$$.fragment),kn=d(),ne=n("div"),_(xe.$$.fragment),Vn=d(),Te=n("p"),Dn=r("Instantiate a "),mt=n("a"),$n=r("VisionTextDualEncoderConfig"),Pn=r(` (or a derived class) from text model configuration and vision
model configuration.`),Mn=d(),se=n("div"),_(Ee.$$.fragment),zn=d(),be=n("p"),Cn=r("Serializes this instance to a Python dictionary. Override the default "),ht=n("a"),Fn=r("to_dict()"),In=r("."),lo=d(),G=n("h2"),ae=n("a"),It=n("span"),_(je.$$.fragment),An=d(),At=n("span"),qn=r("VisionTextDualEncoderProcessor"),co=d(),P=n("div"),_(we.$$.fragment),Ln=d(),qt=n("p"),Sn=r(`Constructs a VisionTextDualEncoder processor which wraps a vision feature extractor and a tokenizer into a single
processor.`),Nn=d(),z=n("p"),ft=n("a"),Bn=r("VisionTextDualEncoderProcessor"),On=r(" offers all the functionalities of "),ut=n("a"),Wn=r("AutoFeatureExtractor"),Rn=r(` and
`),gt=n("a"),Un=r("AutoTokenizer"),Jn=r(". See the "),Lt=n("code"),Hn=r("__call__()"),Zn=r(`and
`),_t=n("a"),Gn=r("decode()"),Xn=r(" for more information."),Kn=d(),re=n("div"),_(ye.$$.fragment),Qn=d(),ke=n("p"),Yn=r(`This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s
`),vt=n("a"),es=r("batch_decode()"),ts=r(". Please refer to the docstring of this method for more information."),os=d(),ie=n("div"),_(Ve.$$.fragment),ns=d(),De=n("p"),ss=r("This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s "),xt=n("a"),as=r("decode()"),rs=r(`.
Please refer to the docstring of this method for more information.`),po=d(),X=n("h2"),le=n("a"),St=n("span"),_($e.$$.fragment),is=d(),Nt=n("span"),ls=r("VisionTextDualEncoderModel"),mo=d(),k=n("div"),_(Pe.$$.fragment),ds=d(),Me=n("p"),cs=r(`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Bt=n("code"),ps=r("from_pretrained()"),ms=r(`method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),hs=d(),ze=n("p"),fs=r("In "),Ce=n("a"),us=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),gs=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),_s=d(),Ot=n("p"),vs=r(`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),xs=d(),Fe=n("p"),Ts=r("This model inherits from "),Tt=n("a"),Es=r("PreTrainedModel"),bs=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),js=d(),Ie=n("p"),ws=r("This model is also a PyTorch "),Ae=n("a"),ys=r("torch.nn.Module"),ks=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vs=d(),C=n("div"),_(qe.$$.fragment),Ds=d(),K=n("p"),$s=r("The "),Et=n("a"),Ps=r("VisionTextDualEncoderModel"),Ms=r(" forward method, overrides the "),Wt=n("code"),zs=r("__call__"),Cs=r(" special method."),Fs=d(),_(de.$$.fragment),Is=d(),Rt=n("p"),As=r("Examples:"),qs=d(),_(Le.$$.fragment),ho=d(),Q=n("h2"),ce=n("a"),Ut=n("span"),_(Se.$$.fragment),Ls=d(),Jt=n("span"),Ss=r("FlaxVisionTextDualEncoderModel"),fo=d(),u=n("div"),_(Ne.$$.fragment),Ns=d(),Be=n("p"),Bs=r(`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Ht=n("code"),Os=r("from_pretrained()"),Ws=r(`method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Rs=d(),Oe=n("p"),Us=r("In "),We=n("a"),Js=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),Hs=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Zs=d(),Zt=n("p"),Gs=r(`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Xs=d(),Re=n("p"),Ks=r("This model inherits from "),bt=n("a"),Qs=r("PreTrainedModel"),Ys=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ea=d(),Ue=n("p"),ta=r("This model is also a Flax Linen "),Je=n("a"),oa=r("flax.linen.Module"),na=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),sa=d(),Gt=n("p"),aa=r("Finally, this model supports inherent JAX features such as:"),ra=d(),S=n("ul"),Xt=n("li"),He=n("a"),ia=r("Just-In-Time (JIT) compilation"),la=d(),Kt=n("li"),Ze=n("a"),da=r("Automatic Differentiation"),ca=d(),Qt=n("li"),Ge=n("a"),pa=r("Vectorization"),ma=d(),Yt=n("li"),Xe=n("a"),ha=r("Parallelization"),fa=d(),F=n("div"),_(Ke.$$.fragment),ua=d(),Y=n("p"),ga=r("The "),jt=n("a"),_a=r("FlaxVisionTextDualEncoderModel"),va=r(" forward method, overrides the "),eo=n("code"),xa=r("__call__"),Ta=r(" special method."),Ea=d(),_(pe.$$.fragment),ba=d(),to=n("p"),ja=r("Examples:"),wa=d(),_(Qe.$$.fragment),this.h()},l(o){const p=Wr('[data-svelte="svelte-1phssyn"]',document.head);m=s(p,"META",{name:!0,content:!0}),p.forEach(t),M=c(o),f=s(o,"H1",{class:!0});var Ye=a(f);j=s(Ye,"A",{id:!0,class:!0,href:!0});var oo=a(j);q=s(oo,"SPAN",{});var ka=a(q);v(w.$$.fragment,ka),ka.forEach(t),oo.forEach(t),$=c(Ye),L=s(Ye,"SPAN",{});var Va=a(L);Lo=i(Va,"VisionTextDualEncoder"),Va.forEach(t),Ye.forEach(t),no=c(o),J=s(o,"H2",{class:!0});var go=a(J);ee=s(go,"A",{id:!0,class:!0,href:!0});var Da=a(ee);Dt=s(Da,"SPAN",{});var $a=a(Dt);v(fe.$$.fragment,$a),$a.forEach(t),Da.forEach(t),So=c(go),$t=s(go,"SPAN",{});var Pa=a($t);No=i(Pa,"Overview"),Pa.forEach(t),go.forEach(t),so=c(o),g=s(o,"P",{});var V=a(g);Bo=i(V,"The "),tt=s(V,"A",{href:!0});var Ma=a(tt);Oo=i(Ma,"VisionTextDualEncoderModel"),Ma.forEach(t),Wo=i(V,` can be used to initialize a vision-text dual encoder model with
any pretrained vision autoencoding model as the vision encoder (`),Pt=s(V,"EM",{});var za=a(Pt);Ro=i(za,"e.g."),za.forEach(t),Uo=c(V),ot=s(V,"A",{href:!0});var Ca=a(ot);Jo=i(Ca,"ViT"),Ca.forEach(t),Ho=i(V,", "),nt=s(V,"A",{href:!0});var Fa=a(nt);Zo=i(Fa,"BEiT"),Fa.forEach(t),Go=i(V,", "),st=s(V,"A",{href:!0});var Ia=a(st);Xo=i(Ia,"DeiT"),Ia.forEach(t),Ko=i(V,") and any pretrained text autoencoding model as the text encoder ("),Mt=s(V,"EM",{});var Aa=a(Mt);Qo=i(Aa,"e.g."),Aa.forEach(t),Yo=c(V),at=s(V,"A",{href:!0});var qa=a(at);en=i(qa,"RoBERTa"),qa.forEach(t),tn=i(V,", "),rt=s(V,"A",{href:!0});var La=a(rt);on=i(La,"BERT"),La.forEach(t),nn=i(V,`). Two projection layers are added on top of both the vision and text encoder to project the output embeddings
to a shared latent space. The projection layers are randomly initialized so the model should be fine-tuned on a
downstream task. This model can be used to align the vision-text embeddings using CLIP like contrastive image-text
training and then can be used for zero-shot vision tasks such image-classification or retrieval.`),V.forEach(t),ao=c(o),te=s(o,"P",{});var _o=a(te);sn=i(_o,"In "),ue=s(_o,"A",{href:!0,rel:!0});var Sa=a(ue);an=i(Sa,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),Sa.forEach(t),rn=i(_o,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment on
new zero-shot vision tasks such as image classification or retrieval.`),_o.forEach(t),ro=c(o),H=s(o,"H2",{class:!0});var vo=a(H);oe=s(vo,"A",{id:!0,class:!0,href:!0});var Na=a(oe);zt=s(Na,"SPAN",{});var Ba=a(zt);v(ge.$$.fragment,Ba),Ba.forEach(t),Na.forEach(t),ln=c(vo),Ct=s(vo,"SPAN",{});var Oa=a(Ct);dn=i(Oa,"VisionTextDualEncoderConfig"),Oa.forEach(t),vo.forEach(t),io=c(o),y=s(o,"DIV",{class:!0});var I=a(y);v(_e.$$.fragment,I),cn=c(I),B=s(I,"P",{});var et=a(B);it=s(et,"A",{href:!0});var Wa=a(it);pn=i(Wa,"VisionTextDualEncoderConfig"),Wa.forEach(t),mn=i(et,` is the configuration class to store the configuration of a
`),lt=s(et,"A",{href:!0});var Ra=a(lt);hn=i(Ra,"VisionTextDualEncoderModel"),Ra.forEach(t),fn=i(et,". It is used to instantiate "),dt=s(et,"A",{href:!0});var Ua=a(dt);un=i(Ua,"VisionTextDualEncoderModel"),Ua.forEach(t),gn=i(et,` model according to the
specified arguments, defining the text model and vision model configs.`),et.forEach(t),_n=c(I),Z=s(I,"P",{});var wt=a(Z);vn=i(wt,"Configuration objects inherit from "),ct=s(wt,"A",{href:!0});var Ja=a(ct);xn=i(Ja,"PretrainedConfig"),Ja.forEach(t),Tn=i(wt,` and can be used to control the model outputs. Read the
documentation from `),pt=s(wt,"A",{href:!0});var Ha=a(pt);En=i(Ha,"PretrainedConfig"),Ha.forEach(t),bn=i(wt," for more information."),wt.forEach(t),jn=c(I),Ft=s(I,"P",{});var Za=a(Ft);wn=i(Za,"Examples:"),Za.forEach(t),yn=c(I),v(ve.$$.fragment,I),kn=c(I),ne=s(I,"DIV",{class:!0});var xo=a(ne);v(xe.$$.fragment,xo),Vn=c(xo),Te=s(xo,"P",{});var To=a(Te);Dn=i(To,"Instantiate a "),mt=s(To,"A",{href:!0});var Ga=a(mt);$n=i(Ga,"VisionTextDualEncoderConfig"),Ga.forEach(t),Pn=i(To,` (or a derived class) from text model configuration and vision
model configuration.`),To.forEach(t),xo.forEach(t),Mn=c(I),se=s(I,"DIV",{class:!0});var Eo=a(se);v(Ee.$$.fragment,Eo),zn=c(Eo),be=s(Eo,"P",{});var bo=a(be);Cn=i(bo,"Serializes this instance to a Python dictionary. Override the default "),ht=s(bo,"A",{href:!0});var Xa=a(ht);Fn=i(Xa,"to_dict()"),Xa.forEach(t),In=i(bo,"."),bo.forEach(t),Eo.forEach(t),I.forEach(t),lo=c(o),G=s(o,"H2",{class:!0});var jo=a(G);ae=s(jo,"A",{id:!0,class:!0,href:!0});var Ka=a(ae);It=s(Ka,"SPAN",{});var Qa=a(It);v(je.$$.fragment,Qa),Qa.forEach(t),Ka.forEach(t),An=c(jo),At=s(jo,"SPAN",{});var Ya=a(At);qn=i(Ya,"VisionTextDualEncoderProcessor"),Ya.forEach(t),jo.forEach(t),co=c(o),P=s(o,"DIV",{class:!0});var O=a(P);v(we.$$.fragment,O),Ln=c(O),qt=s(O,"P",{});var er=a(qt);Sn=i(er,`Constructs a VisionTextDualEncoder processor which wraps a vision feature extractor and a tokenizer into a single
processor.`),er.forEach(t),Nn=c(O),z=s(O,"P",{});var N=a(z);ft=s(N,"A",{href:!0});var tr=a(ft);Bn=i(tr,"VisionTextDualEncoderProcessor"),tr.forEach(t),On=i(N," offers all the functionalities of "),ut=s(N,"A",{href:!0});var or=a(ut);Wn=i(or,"AutoFeatureExtractor"),or.forEach(t),Rn=i(N,` and
`),gt=s(N,"A",{href:!0});var nr=a(gt);Un=i(nr,"AutoTokenizer"),nr.forEach(t),Jn=i(N,". See the "),Lt=s(N,"CODE",{});var sr=a(Lt);Hn=i(sr,"__call__()"),sr.forEach(t),Zn=i(N,`and
`),_t=s(N,"A",{href:!0});var ar=a(_t);Gn=i(ar,"decode()"),ar.forEach(t),Xn=i(N," for more information."),N.forEach(t),Kn=c(O),re=s(O,"DIV",{class:!0});var wo=a(re);v(ye.$$.fragment,wo),Qn=c(wo),ke=s(wo,"P",{});var yo=a(ke);Yn=i(yo,`This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s
`),vt=s(yo,"A",{href:!0});var rr=a(vt);es=i(rr,"batch_decode()"),rr.forEach(t),ts=i(yo,". Please refer to the docstring of this method for more information."),yo.forEach(t),wo.forEach(t),os=c(O),ie=s(O,"DIV",{class:!0});var ko=a(ie);v(Ve.$$.fragment,ko),ns=c(ko),De=s(ko,"P",{});var Vo=a(De);ss=i(Vo,"This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s "),xt=s(Vo,"A",{href:!0});var ir=a(xt);as=i(ir,"decode()"),ir.forEach(t),rs=i(Vo,`.
Please refer to the docstring of this method for more information.`),Vo.forEach(t),ko.forEach(t),O.forEach(t),po=c(o),X=s(o,"H2",{class:!0});var Do=a(X);le=s(Do,"A",{id:!0,class:!0,href:!0});var lr=a(le);St=s(lr,"SPAN",{});var dr=a(St);v($e.$$.fragment,dr),dr.forEach(t),lr.forEach(t),is=c(Do),Nt=s(Do,"SPAN",{});var cr=a(Nt);ls=i(cr,"VisionTextDualEncoderModel"),cr.forEach(t),Do.forEach(t),mo=c(o),k=s(o,"DIV",{class:!0});var A=a(k);v(Pe.$$.fragment,A),ds=c(A),Me=s(A,"P",{});var $o=a(Me);cs=i($o,`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Bt=s($o,"CODE",{});var pr=a(Bt);ps=i(pr,"from_pretrained()"),pr.forEach(t),ms=i($o,`method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),$o.forEach(t),hs=c(A),ze=s(A,"P",{});var Po=a(ze);fs=i(Po,"In "),Ce=s(Po,"A",{href:!0,rel:!0});var mr=a(Ce);us=i(mr,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),mr.forEach(t),gs=i(Po,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Po.forEach(t),_s=c(A),Ot=s(A,"P",{});var hr=a(Ot);vs=i(hr,`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),hr.forEach(t),xs=c(A),Fe=s(A,"P",{});var Mo=a(Fe);Ts=i(Mo,"This model inherits from "),Tt=s(Mo,"A",{href:!0});var fr=a(Tt);Es=i(fr,"PreTrainedModel"),fr.forEach(t),bs=i(Mo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mo.forEach(t),js=c(A),Ie=s(A,"P",{});var zo=a(Ie);ws=i(zo,"This model is also a PyTorch "),Ae=s(zo,"A",{href:!0,rel:!0});var ur=a(Ae);ys=i(ur,"torch.nn.Module"),ur.forEach(t),ks=i(zo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zo.forEach(t),Vs=c(A),C=s(A,"DIV",{class:!0});var W=a(C);v(qe.$$.fragment,W),Ds=c(W),K=s(W,"P",{});var yt=a(K);$s=i(yt,"The "),Et=s(yt,"A",{href:!0});var gr=a(Et);Ps=i(gr,"VisionTextDualEncoderModel"),gr.forEach(t),Ms=i(yt," forward method, overrides the "),Wt=s(yt,"CODE",{});var _r=a(Wt);zs=i(_r,"__call__"),_r.forEach(t),Cs=i(yt," special method."),yt.forEach(t),Fs=c(W),v(de.$$.fragment,W),Is=c(W),Rt=s(W,"P",{});var vr=a(Rt);As=i(vr,"Examples:"),vr.forEach(t),qs=c(W),v(Le.$$.fragment,W),W.forEach(t),A.forEach(t),ho=c(o),Q=s(o,"H2",{class:!0});var Co=a(Q);ce=s(Co,"A",{id:!0,class:!0,href:!0});var xr=a(ce);Ut=s(xr,"SPAN",{});var Tr=a(Ut);v(Se.$$.fragment,Tr),Tr.forEach(t),xr.forEach(t),Ls=c(Co),Jt=s(Co,"SPAN",{});var Er=a(Jt);Ss=i(Er,"FlaxVisionTextDualEncoderModel"),Er.forEach(t),Co.forEach(t),fo=c(o),u=s(o,"DIV",{class:!0});var D=a(u);v(Ne.$$.fragment,D),Ns=c(D),Be=s(D,"P",{});var Fo=a(Be);Bs=i(Fo,`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Ht=s(Fo,"CODE",{});var br=a(Ht);Os=i(br,"from_pretrained()"),br.forEach(t),Ws=i(Fo,`method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Fo.forEach(t),Rs=c(D),Oe=s(D,"P",{});var Io=a(Oe);Us=i(Io,"In "),We=s(Io,"A",{href:!0,rel:!0});var jr=a(We);Js=i(jr,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),jr.forEach(t),Hs=i(Io,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Io.forEach(t),Zs=c(D),Zt=s(D,"P",{});var wr=a(Zt);Gs=i(wr,`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),wr.forEach(t),Xs=c(D),Re=s(D,"P",{});var Ao=a(Re);Ks=i(Ao,"This model inherits from "),bt=s(Ao,"A",{href:!0});var yr=a(bt);Qs=i(yr,"PreTrainedModel"),yr.forEach(t),Ys=i(Ao,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ao.forEach(t),ea=c(D),Ue=s(D,"P",{});var qo=a(Ue);ta=i(qo,"This model is also a Flax Linen "),Je=s(qo,"A",{href:!0,rel:!0});var kr=a(Je);oa=i(kr,"flax.linen.Module"),kr.forEach(t),na=i(qo,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qo.forEach(t),sa=c(D),Gt=s(D,"P",{});var Vr=a(Gt);aa=i(Vr,"Finally, this model supports inherent JAX features such as:"),Vr.forEach(t),ra=c(D),S=s(D,"UL",{});var me=a(S);Xt=s(me,"LI",{});var Dr=a(Xt);He=s(Dr,"A",{href:!0,rel:!0});var $r=a(He);ia=i($r,"Just-In-Time (JIT) compilation"),$r.forEach(t),Dr.forEach(t),la=c(me),Kt=s(me,"LI",{});var Pr=a(Kt);Ze=s(Pr,"A",{href:!0,rel:!0});var Mr=a(Ze);da=i(Mr,"Automatic Differentiation"),Mr.forEach(t),Pr.forEach(t),ca=c(me),Qt=s(me,"LI",{});var zr=a(Qt);Ge=s(zr,"A",{href:!0,rel:!0});var Cr=a(Ge);pa=i(Cr,"Vectorization"),Cr.forEach(t),zr.forEach(t),ma=c(me),Yt=s(me,"LI",{});var Fr=a(Yt);Xe=s(Fr,"A",{href:!0,rel:!0});var Ir=a(Xe);ha=i(Ir,"Parallelization"),Ir.forEach(t),Fr.forEach(t),me.forEach(t),fa=c(D),F=s(D,"DIV",{class:!0});var R=a(F);v(Ke.$$.fragment,R),ua=c(R),Y=s(R,"P",{});var kt=a(Y);ga=i(kt,"The "),jt=s(kt,"A",{href:!0});var Ar=a(jt);_a=i(Ar,"FlaxVisionTextDualEncoderModel"),Ar.forEach(t),va=i(kt," forward method, overrides the "),eo=s(kt,"CODE",{});var qr=a(eo);xa=i(qr,"__call__"),qr.forEach(t),Ta=i(kt," special method."),kt.forEach(t),Ea=c(R),v(pe.$$.fragment,R),ba=c(R),to=s(R,"P",{});var Lr=a(to);ja=i(Lr,"Examples:"),Lr.forEach(t),wa=c(R),v(Qe.$$.fragment,R),R.forEach(t),D.forEach(t),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(Hr)),l(j,"id","visiontextdualencoder"),l(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(j,"href","#visiontextdualencoder"),l(f,"class","relative group"),l(ee,"id","overview"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#overview"),l(J,"class","relative group"),l(tt,"href","/docs/transformers/v4.17.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(ot,"href","vit"),l(nt,"href","beit"),l(st,"href","deit"),l(at,"href","roberta"),l(rt,"href","bert"),l(ue,"href","https://arxiv.org/abs/2111.07991"),l(ue,"rel","nofollow"),l(oe,"id","transformers.VisionTextDualEncoderConfig"),l(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(oe,"href","#transformers.VisionTextDualEncoderConfig"),l(H,"class","relative group"),l(it,"href","/docs/transformers/v4.17.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"),l(lt,"href","/docs/transformers/v4.17.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(dt,"href","/docs/transformers/v4.17.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(ct,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig"),l(pt,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig"),l(mt,"href","/docs/transformers/v4.17.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"),l(ne,"class","docstring"),l(ht,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig.to_dict"),l(se,"class","docstring"),l(y,"class","docstring"),l(ae,"id","transformers.VisionTextDualEncoderProcessor"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.VisionTextDualEncoderProcessor"),l(G,"class","relative group"),l(ft,"href","/docs/transformers/v4.17.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderProcessor"),l(ut,"href","/docs/transformers/v4.17.0/en/model_doc/auto#transformers.AutoFeatureExtractor"),l(gt,"href","/docs/transformers/v4.17.0/en/model_doc/auto#transformers.AutoTokenizer"),l(_t,"href","/docs/transformers/v4.17.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderProcessor.decode"),l(vt,"href","/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),l(re,"class","docstring"),l(xt,"href","/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),l(ie,"class","docstring"),l(P,"class","docstring"),l(le,"id","transformers.VisionTextDualEncoderModel"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.VisionTextDualEncoderModel"),l(X,"class","relative group"),l(Ce,"href","https://arxiv.org/abs/2111.07991"),l(Ce,"rel","nofollow"),l(Tt,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),l(Ae,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ae,"rel","nofollow"),l(Et,"href","/docs/transformers/v4.17.0/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(C,"class","docstring"),l(k,"class","docstring"),l(ce,"id","transformers.FlaxVisionTextDualEncoderModel"),l(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ce,"href","#transformers.FlaxVisionTextDualEncoderModel"),l(Q,"class","relative group"),l(We,"href","https://arxiv.org/abs/2111.07991"),l(We,"rel","nofollow"),l(bt,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),l(Je,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(Je,"rel","nofollow"),l(He,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(He,"rel","nofollow"),l(Ze,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(Ze,"rel","nofollow"),l(Ge,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Ge,"rel","nofollow"),l(Xe,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(Xe,"rel","nofollow"),l(jt,"href","/docs/transformers/v4.17.0/en/model_doc/vision-text-dual-encoder#transformers.FlaxVisionTextDualEncoderModel"),l(F,"class","docstring"),l(u,"class","docstring")},m(o,p){e(document.head,m),h(o,M,p),h(o,f,p),e(f,j),e(j,q),x(w,q,null),e(f,$),e(f,L),e(L,Lo),h(o,no,p),h(o,J,p),e(J,ee),e(ee,Dt),x(fe,Dt,null),e(J,So),e(J,$t),e($t,No),h(o,so,p),h(o,g,p),e(g,Bo),e(g,tt),e(tt,Oo),e(g,Wo),e(g,Pt),e(Pt,Ro),e(g,Uo),e(g,ot),e(ot,Jo),e(g,Ho),e(g,nt),e(nt,Zo),e(g,Go),e(g,st),e(st,Xo),e(g,Ko),e(g,Mt),e(Mt,Qo),e(g,Yo),e(g,at),e(at,en),e(g,tn),e(g,rt),e(rt,on),e(g,nn),h(o,ao,p),h(o,te,p),e(te,sn),e(te,ue),e(ue,an),e(te,rn),h(o,ro,p),h(o,H,p),e(H,oe),e(oe,zt),x(ge,zt,null),e(H,ln),e(H,Ct),e(Ct,dn),h(o,io,p),h(o,y,p),x(_e,y,null),e(y,cn),e(y,B),e(B,it),e(it,pn),e(B,mn),e(B,lt),e(lt,hn),e(B,fn),e(B,dt),e(dt,un),e(B,gn),e(y,_n),e(y,Z),e(Z,vn),e(Z,ct),e(ct,xn),e(Z,Tn),e(Z,pt),e(pt,En),e(Z,bn),e(y,jn),e(y,Ft),e(Ft,wn),e(y,yn),x(ve,y,null),e(y,kn),e(y,ne),x(xe,ne,null),e(ne,Vn),e(ne,Te),e(Te,Dn),e(Te,mt),e(mt,$n),e(Te,Pn),e(y,Mn),e(y,se),x(Ee,se,null),e(se,zn),e(se,be),e(be,Cn),e(be,ht),e(ht,Fn),e(be,In),h(o,lo,p),h(o,G,p),e(G,ae),e(ae,It),x(je,It,null),e(G,An),e(G,At),e(At,qn),h(o,co,p),h(o,P,p),x(we,P,null),e(P,Ln),e(P,qt),e(qt,Sn),e(P,Nn),e(P,z),e(z,ft),e(ft,Bn),e(z,On),e(z,ut),e(ut,Wn),e(z,Rn),e(z,gt),e(gt,Un),e(z,Jn),e(z,Lt),e(Lt,Hn),e(z,Zn),e(z,_t),e(_t,Gn),e(z,Xn),e(P,Kn),e(P,re),x(ye,re,null),e(re,Qn),e(re,ke),e(ke,Yn),e(ke,vt),e(vt,es),e(ke,ts),e(P,os),e(P,ie),x(Ve,ie,null),e(ie,ns),e(ie,De),e(De,ss),e(De,xt),e(xt,as),e(De,rs),h(o,po,p),h(o,X,p),e(X,le),e(le,St),x($e,St,null),e(X,is),e(X,Nt),e(Nt,ls),h(o,mo,p),h(o,k,p),x(Pe,k,null),e(k,ds),e(k,Me),e(Me,cs),e(Me,Bt),e(Bt,ps),e(Me,ms),e(k,hs),e(k,ze),e(ze,fs),e(ze,Ce),e(Ce,us),e(ze,gs),e(k,_s),e(k,Ot),e(Ot,vs),e(k,xs),e(k,Fe),e(Fe,Ts),e(Fe,Tt),e(Tt,Es),e(Fe,bs),e(k,js),e(k,Ie),e(Ie,ws),e(Ie,Ae),e(Ae,ys),e(Ie,ks),e(k,Vs),e(k,C),x(qe,C,null),e(C,Ds),e(C,K),e(K,$s),e(K,Et),e(Et,Ps),e(K,Ms),e(K,Wt),e(Wt,zs),e(K,Cs),e(C,Fs),x(de,C,null),e(C,Is),e(C,Rt),e(Rt,As),e(C,qs),x(Le,C,null),h(o,ho,p),h(o,Q,p),e(Q,ce),e(ce,Ut),x(Se,Ut,null),e(Q,Ls),e(Q,Jt),e(Jt,Ss),h(o,fo,p),h(o,u,p),x(Ne,u,null),e(u,Ns),e(u,Be),e(Be,Bs),e(Be,Ht),e(Ht,Os),e(Be,Ws),e(u,Rs),e(u,Oe),e(Oe,Us),e(Oe,We),e(We,Js),e(Oe,Hs),e(u,Zs),e(u,Zt),e(Zt,Gs),e(u,Xs),e(u,Re),e(Re,Ks),e(Re,bt),e(bt,Qs),e(Re,Ys),e(u,ea),e(u,Ue),e(Ue,ta),e(Ue,Je),e(Je,oa),e(Ue,na),e(u,sa),e(u,Gt),e(Gt,aa),e(u,ra),e(u,S),e(S,Xt),e(Xt,He),e(He,ia),e(S,la),e(S,Kt),e(Kt,Ze),e(Ze,da),e(S,ca),e(S,Qt),e(Qt,Ge),e(Ge,pa),e(S,ma),e(S,Yt),e(Yt,Xe),e(Xe,ha),e(u,fa),e(u,F),x(Ke,F,null),e(F,ua),e(F,Y),e(Y,ga),e(Y,jt),e(jt,_a),e(Y,va),e(Y,eo),e(eo,xa),e(Y,Ta),e(F,Ea),x(pe,F,null),e(F,ba),e(F,to),e(to,ja),e(F,wa),x(Qe,F,null),uo=!0},p(o,[p]){const Ye={};p&2&&(Ye.$$scope={dirty:p,ctx:o}),de.$set(Ye);const oo={};p&2&&(oo.$$scope={dirty:p,ctx:o}),pe.$set(oo)},i(o){uo||(T(w.$$.fragment,o),T(fe.$$.fragment,o),T(ge.$$.fragment,o),T(_e.$$.fragment,o),T(ve.$$.fragment,o),T(xe.$$.fragment,o),T(Ee.$$.fragment,o),T(je.$$.fragment,o),T(we.$$.fragment,o),T(ye.$$.fragment,o),T(Ve.$$.fragment,o),T($e.$$.fragment,o),T(Pe.$$.fragment,o),T(qe.$$.fragment,o),T(de.$$.fragment,o),T(Le.$$.fragment,o),T(Se.$$.fragment,o),T(Ne.$$.fragment,o),T(Ke.$$.fragment,o),T(pe.$$.fragment,o),T(Qe.$$.fragment,o),uo=!0)},o(o){E(w.$$.fragment,o),E(fe.$$.fragment,o),E(ge.$$.fragment,o),E(_e.$$.fragment,o),E(ve.$$.fragment,o),E(xe.$$.fragment,o),E(Ee.$$.fragment,o),E(je.$$.fragment,o),E(we.$$.fragment,o),E(ye.$$.fragment,o),E(Ve.$$.fragment,o),E($e.$$.fragment,o),E(Pe.$$.fragment,o),E(qe.$$.fragment,o),E(de.$$.fragment,o),E(Le.$$.fragment,o),E(Se.$$.fragment,o),E(Ne.$$.fragment,o),E(Ke.$$.fragment,o),E(pe.$$.fragment,o),E(Qe.$$.fragment,o),uo=!1},d(o){t(m),o&&t(M),o&&t(f),b(w),o&&t(no),o&&t(J),b(fe),o&&t(so),o&&t(g),o&&t(ao),o&&t(te),o&&t(ro),o&&t(H),b(ge),o&&t(io),o&&t(y),b(_e),b(ve),b(xe),b(Ee),o&&t(lo),o&&t(G),b(je),o&&t(co),o&&t(P),b(we),b(ye),b(Ve),o&&t(po),o&&t(X),b($e),o&&t(mo),o&&t(k),b(Pe),b(qe),b(de),b(Le),o&&t(ho),o&&t(Q),b(Se),o&&t(fo),o&&t(u),b(Ne),b(Ke),b(pe),b(Qe)}}}const Hr={local:"visiontextdualencoder",sections:[{local:"overview",title:"Overview"},{local:"transformers.VisionTextDualEncoderConfig",title:"VisionTextDualEncoderConfig"},{local:"transformers.VisionTextDualEncoderProcessor",title:"VisionTextDualEncoderProcessor"},{local:"transformers.VisionTextDualEncoderModel",title:"VisionTextDualEncoderModel"},{local:"transformers.FlaxVisionTextDualEncoderModel",title:"FlaxVisionTextDualEncoderModel"}],title:"VisionTextDualEncoder"};function Zr(he,m,M){let{fw:f}=m;return he.$$set=j=>{"fw"in j&&M(0,f=j.fw)},[f]}class ti extends Nr{constructor(m){super();Br(this,m,Zr,Jr,Or,{fw:0})}}export{ti as default,Hr as metadata};
