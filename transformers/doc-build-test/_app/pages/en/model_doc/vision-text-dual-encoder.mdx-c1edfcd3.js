import{S as Nr,i as Br,s as Or,e as s,k as d,w as _,t as r,L as Wr,c as n,d as t,m as c,a,x as v,h as i,b as l,J as e,g as h,y as x,q as T,o as b,B as E}from"../../../chunks/vendor-9e2b328e.js";import{T as Sr}from"../../../chunks/Tip-76f97a76.js";import{D as U}from"../../../chunks/Docstring-50fd6873.js";import{C as ya}from"../../../chunks/CodeBlock-b9ff96e9.js";import{I as Vt}from"../../../chunks/IconCopyLink-fd0e58fd.js";import"../../../chunks/CopyButton-4b97cbf7.js";function Rr(he){let m,M,u,j,q;return{c(){m=s("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),j=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){m=n(w,"P",{});var $=a(m);M=i($,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n($,"CODE",{});var L=a(u);j=i(L,"Module"),L.forEach(t),q=i($,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),$.forEach(t)},m(w,$){h(w,m,$),e(m,M),e(m,u),e(u,j),e(m,q)},d(w){w&&t(m)}}}function Ur(he){let m,M,u,j,q;return{c(){m=s("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),j=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){m=n(w,"P",{});var $=a(m);M=i($,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n($,"CODE",{});var L=a(u);j=i(L,"Module"),L.forEach(t),q=i($,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),$.forEach(t)},m(w,$){h(w,m,$),e(m,M),e(m,u),e(u,j),e(m,q)},d(w){w&&t(m)}}}function Jr(he){let m,M,u,j,q,w,$,L,Lo,so,J,ee,Dt,ue,So,$t,No,no,g,Bo,tt,Oo,Wo,Pt,Ro,Uo,ot,Jo,Ho,st,Zo,Go,nt,Xo,Ko,Mt,Qo,Yo,at,es,ts,rt,os,ss,ao,te,ns,fe,as,rs,ro,H,oe,zt,ge,is,Ct,ls,io,y,_e,ds,B,it,cs,ps,lt,ms,hs,dt,us,fs,gs,Z,_s,ct,vs,xs,pt,Ts,bs,Es,Ft,js,ws,ve,ys,se,xe,ks,Te,Vs,mt,Ds,$s,Ps,ne,be,Ms,Ee,zs,ht,Cs,Fs,lo,G,ae,It,je,Is,At,As,co,P,we,qs,qt,Ls,Ss,z,ut,Ns,Bs,ft,Os,Ws,gt,Rs,Us,Lt,Js,Hs,_t,Zs,Gs,Xs,re,ye,Ks,ke,Qs,vt,Ys,en,tn,ie,Ve,on,De,sn,xt,nn,an,po,X,le,St,$e,rn,Nt,ln,mo,k,Pe,dn,Me,cn,Bt,pn,mn,hn,ze,un,Ce,fn,gn,_n,Ot,vn,xn,Fe,Tn,Tt,bn,En,jn,Ie,wn,Ae,yn,kn,Vn,C,qe,Dn,K,$n,bt,Pn,Mn,Wt,zn,Cn,Fn,de,In,Rt,An,qn,Le,ho,Q,ce,Ut,Se,Ln,Jt,Sn,uo,f,Ne,Nn,Be,Bn,Ht,On,Wn,Rn,Oe,Un,We,Jn,Hn,Zn,Zt,Gn,Xn,Re,Kn,Et,Qn,Yn,ea,Ue,ta,Je,oa,sa,na,Gt,aa,ra,S,Xt,He,ia,la,Kt,Ze,da,ca,Qt,Ge,pa,ma,Yt,Xe,ha,ua,F,Ke,fa,Y,ga,jt,_a,va,eo,xa,Ta,ba,pe,Ea,to,ja,wa,Qe,fo;return w=new Vt({}),ue=new Vt({}),ge=new Vt({}),_e=new U({props:{name:"class transformers.VisionTextDualEncoderConfig",anchor:"transformers.VisionTextDualEncoderConfig",parameters:[{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L28",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>) &#x2014;
Dictionary of configuration options that defines text model config.`,name:"text_config_dict"},{anchor:"transformers.VisionTextDualEncoderConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>) &#x2014;
Dictionary of configuration options that defines vison model config.`,name:"vision_config_dict"},{anchor:"transformers.VisionTextDualEncoderConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.VisionTextDualEncoderConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.VisionTextDualEncoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}]}}),ve=new ya({props:{code:`from transformers import ViTConfig, BertConfig, VisionTextDualEncoderConfig, VisionTextDualEncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionTextDualEncoderModel.from_pretrained(<span class="hljs-string">&quot;vit-bert&quot;</span>, config=vision_text_config)`}}),xe=new U({props:{name:"from\\_vision\\_text\\_configs",anchor:"transformers.VisionTextDualEncoderConfig.from_vision_text_configs",parameters:[{name:"vision_config",val:": PretrainedConfig"},{name:"text_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L105",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/doc-build-test/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"
>VisionTextDualEncoderConfig</a></p>
`}}),be=new U({props:{name:"to\\_dict",anchor:"transformers.VisionTextDualEncoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L117",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),je=new Vt({}),we=new U({props:{name:"class transformers.VisionTextDualEncoderProcessor",anchor:"transformers.VisionTextDualEncoderProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L23",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/doc-build-test/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.VisionTextDualEncoderProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/doc-build-test/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}]}}),ye=new U({props:{name:"batch\\_decode",anchor:"transformers.VisionTextDualEncoderProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L98"}}),Ve=new U({props:{name:"decode",anchor:"transformers.VisionTextDualEncoderProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L105"}}),$e=new Vt({}),Pe=new U({props:{name:"class transformers.VisionTextDualEncoderModel",anchor:"transformers.VisionTextDualEncoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.models.vision_text_dual_encoder.configuration_vision_text_dual_encoder.VisionTextDualEncoderConfig] = None"},{name:"vision_model",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"text_model",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/vision_text_dual_encoder/modeling_vision_text_dual_encoder.py#L163",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/doc-build-test/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),qe=new U({props:{name:"forward",anchor:"transformers.VisionTextDualEncoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"return_loss",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/vision_text_dual_encoder/modeling_vision_text_dual_encoder.py#L295",parametersDescription:[{anchor:"transformers.VisionTextDualEncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
a feature extractor (e.g. if you use ViT as the encoder, you should use <a href="/docs/transformers/doc-build-test/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>). See
<a href="/docs/transformers/doc-build-test/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VisionTextDualEncoderModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.VisionTextDualEncoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisionTextDualEncoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisionTextDualEncoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_clip.CLIPOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/doc-build-test/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"
>VisionTextDualEncoderConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.</li>
<li><strong>logits_per_image:(<code>torch.FloatTensor</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>torch.FloatTensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/doc-build-test/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/doc-build-test/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/doc-build-test/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/doc-build-test/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_clip.CLIPOutput</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),de=new Sr({props:{$$slots:{default:[Rr]},$$scope:{ctx:he}}}),Le=new ya({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Se=new Vt({}),Ne=new U({props:{name:"class transformers.FlaxVisionTextDualEncoderModel",anchor:"transformers.FlaxVisionTextDualEncoderModel",parameters:[{name:"config",val:": VisionTextDualEncoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/vision_text_dual_encoder/modeling_flax_vision_text_dual_encoder.py#L219",parametersDescription:[{anchor:"transformers.FlaxVisionTextDualEncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/doc-build-test/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig">VisionTextDualEncoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Ke=new U({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/vision_text_dual_encoder/modeling_flax_vision_text_dual_encoder.py#L251",parametersDescription:[{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
a feature extractor (e.g. if you use ViT as the encoder, you should use <a href="/docs/transformers/doc-build-test/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>). See
<a href="/docs/transformers/doc-build-test/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/doc-build-test/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"
>VisionTextDualEncoderConfig</a>) and inputs.</p>
<ul>
<li><strong>logits_per_image:(<code>jnp.ndarray</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>jnp.ndarray</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/doc-build-test/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/doc-build-test/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/doc-build-test/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/doc-build-test/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),pe=new Sr({props:{$$slots:{default:[Ur]},$$scope:{ctx:he}}}),Qe=new ya({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){m=s("meta"),M=d(),u=s("h1"),j=s("a"),q=s("span"),_(w.$$.fragment),$=d(),L=s("span"),Lo=r("VisionTextDualEncoder"),so=d(),J=s("h2"),ee=s("a"),Dt=s("span"),_(ue.$$.fragment),So=d(),$t=s("span"),No=r("Overview"),no=d(),g=s("p"),Bo=r("The "),tt=s("a"),Oo=r("VisionTextDualEncoderModel"),Wo=r(` can be used to initialize a vision-text dual encoder model with
any pretrained vision autoencoding model as the vision encoder (`),Pt=s("em"),Ro=r("e.g."),Uo=d(),ot=s("a"),Jo=r("ViT"),Ho=r(", "),st=s("a"),Zo=r("BEiT"),Go=r(", "),nt=s("a"),Xo=r("DeiT"),Ko=r(") and any pretrained text autoencoding model as the text encoder ("),Mt=s("em"),Qo=r("e.g."),Yo=d(),at=s("a"),es=r("RoBERTa"),ts=r(", "),rt=s("a"),os=r("BERT"),ss=r(`). Two projection layers are added on top of both the vision and text encoder to project the output embeddings
to a shared latent space. The projection layers are randomly initialized so the model should be fine-tuned on a
downstream task. This model can be used to align the vision-text embeddings using CLIP like contrastive image-text
training and then can be used for zero-shot vision tasks such image-classification or retrieval.`),ao=d(),te=s("p"),ns=r("In "),fe=s("a"),as=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),rs=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment on
new zero-shot vision tasks such as image classification or retrieval.`),ro=d(),H=s("h2"),oe=s("a"),zt=s("span"),_(ge.$$.fragment),is=d(),Ct=s("span"),ls=r("VisionTextDualEncoderConfig"),io=d(),y=s("div"),_(_e.$$.fragment),ds=d(),B=s("p"),it=s("a"),cs=r("VisionTextDualEncoderConfig"),ps=r(` is the configuration class to store the configuration of a
`),lt=s("a"),ms=r("VisionTextDualEncoderModel"),hs=r(". It is used to instantiate "),dt=s("a"),us=r("VisionTextDualEncoderModel"),fs=r(` model according to the
specified arguments, defining the text model and vision model configs.`),gs=d(),Z=s("p"),_s=r("Configuration objects inherit from "),ct=s("a"),vs=r("PretrainedConfig"),xs=r(` and can be used to control the model outputs. Read the
documentation from `),pt=s("a"),Ts=r("PretrainedConfig"),bs=r(" for more information."),Es=d(),Ft=s("p"),js=r("Examples:"),ws=d(),_(ve.$$.fragment),ys=d(),se=s("div"),_(xe.$$.fragment),ks=d(),Te=s("p"),Vs=r("Instantiate a "),mt=s("a"),Ds=r("VisionTextDualEncoderConfig"),$s=r(` (or a derived class) from text model configuration and vision
model configuration.`),Ps=d(),ne=s("div"),_(be.$$.fragment),Ms=d(),Ee=s("p"),zs=r("Serializes this instance to a Python dictionary. Override the default "),ht=s("a"),Cs=r("to_dict()"),Fs=r("."),lo=d(),G=s("h2"),ae=s("a"),It=s("span"),_(je.$$.fragment),Is=d(),At=s("span"),As=r("VisionTextDualEncoderProcessor"),co=d(),P=s("div"),_(we.$$.fragment),qs=d(),qt=s("p"),Ls=r(`Constructs a VisionTextDualEncoder processor which wraps a vision feature extractor and a tokenizer into a single
processor.`),Ss=d(),z=s("p"),ut=s("a"),Ns=r("VisionTextDualEncoderProcessor"),Bs=r(" offers all the functionalities of "),ft=s("a"),Os=r("AutoFeatureExtractor"),Ws=r(` and
`),gt=s("a"),Rs=r("AutoTokenizer"),Us=r(". See the "),Lt=s("code"),Js=r("__call__()"),Hs=r(`and
`),_t=s("a"),Zs=r("decode()"),Gs=r(" for more information."),Xs=d(),re=s("div"),_(ye.$$.fragment),Ks=d(),ke=s("p"),Qs=r(`This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s
`),vt=s("a"),Ys=r("batch_decode()"),en=r(". Please refer to the docstring of this method for more information."),tn=d(),ie=s("div"),_(Ve.$$.fragment),on=d(),De=s("p"),sn=r("This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s "),xt=s("a"),nn=r("decode()"),an=r(`.
Please refer to the docstring of this method for more information.`),po=d(),X=s("h2"),le=s("a"),St=s("span"),_($e.$$.fragment),rn=d(),Nt=s("span"),ln=r("VisionTextDualEncoderModel"),mo=d(),k=s("div"),_(Pe.$$.fragment),dn=d(),Me=s("p"),cn=r(`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Bt=s("code"),pn=r("from_pretrained()"),mn=r(`method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),hn=d(),ze=s("p"),un=r("In "),Ce=s("a"),fn=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),gn=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),_n=d(),Ot=s("p"),vn=r(`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),xn=d(),Fe=s("p"),Tn=r("This model inherits from "),Tt=s("a"),bn=r("PreTrainedModel"),En=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jn=d(),Ie=s("p"),wn=r("This model is also a PyTorch "),Ae=s("a"),yn=r("torch.nn.Module"),kn=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vn=d(),C=s("div"),_(qe.$$.fragment),Dn=d(),K=s("p"),$n=r("The "),bt=s("a"),Pn=r("VisionTextDualEncoderModel"),Mn=r(" forward method, overrides the "),Wt=s("code"),zn=r("__call__"),Cn=r(" special method."),Fn=d(),_(de.$$.fragment),In=d(),Rt=s("p"),An=r("Examples:"),qn=d(),_(Le.$$.fragment),ho=d(),Q=s("h2"),ce=s("a"),Ut=s("span"),_(Se.$$.fragment),Ln=d(),Jt=s("span"),Sn=r("FlaxVisionTextDualEncoderModel"),uo=d(),f=s("div"),_(Ne.$$.fragment),Nn=d(),Be=s("p"),Bn=r(`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Ht=s("code"),On=r("from_pretrained()"),Wn=r(`method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Rn=d(),Oe=s("p"),Un=r("In "),We=s("a"),Jn=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),Hn=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Zn=d(),Zt=s("p"),Gn=r(`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Xn=d(),Re=s("p"),Kn=r("This model inherits from "),Et=s("a"),Qn=r("PreTrainedModel"),Yn=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ea=d(),Ue=s("p"),ta=r("This model is also a Flax Linen "),Je=s("a"),oa=r("flax.linen.Module"),sa=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),na=d(),Gt=s("p"),aa=r("Finally, this model supports inherent JAX features such as:"),ra=d(),S=s("ul"),Xt=s("li"),He=s("a"),ia=r("Just-In-Time (JIT) compilation"),la=d(),Kt=s("li"),Ze=s("a"),da=r("Automatic Differentiation"),ca=d(),Qt=s("li"),Ge=s("a"),pa=r("Vectorization"),ma=d(),Yt=s("li"),Xe=s("a"),ha=r("Parallelization"),ua=d(),F=s("div"),_(Ke.$$.fragment),fa=d(),Y=s("p"),ga=r("The "),jt=s("a"),_a=r("FlaxVisionTextDualEncoderModel"),va=r(" forward method, overrides the "),eo=s("code"),xa=r("__call__"),Ta=r(" special method."),ba=d(),_(pe.$$.fragment),Ea=d(),to=s("p"),ja=r("Examples:"),wa=d(),_(Qe.$$.fragment),this.h()},l(o){const p=Wr('[data-svelte="svelte-1phssyn"]',document.head);m=n(p,"META",{name:!0,content:!0}),p.forEach(t),M=c(o),u=n(o,"H1",{class:!0});var Ye=a(u);j=n(Ye,"A",{id:!0,class:!0,href:!0});var oo=a(j);q=n(oo,"SPAN",{});var ka=a(q);v(w.$$.fragment,ka),ka.forEach(t),oo.forEach(t),$=c(Ye),L=n(Ye,"SPAN",{});var Va=a(L);Lo=i(Va,"VisionTextDualEncoder"),Va.forEach(t),Ye.forEach(t),so=c(o),J=n(o,"H2",{class:!0});var go=a(J);ee=n(go,"A",{id:!0,class:!0,href:!0});var Da=a(ee);Dt=n(Da,"SPAN",{});var $a=a(Dt);v(ue.$$.fragment,$a),$a.forEach(t),Da.forEach(t),So=c(go),$t=n(go,"SPAN",{});var Pa=a($t);No=i(Pa,"Overview"),Pa.forEach(t),go.forEach(t),no=c(o),g=n(o,"P",{});var V=a(g);Bo=i(V,"The "),tt=n(V,"A",{href:!0});var Ma=a(tt);Oo=i(Ma,"VisionTextDualEncoderModel"),Ma.forEach(t),Wo=i(V,` can be used to initialize a vision-text dual encoder model with
any pretrained vision autoencoding model as the vision encoder (`),Pt=n(V,"EM",{});var za=a(Pt);Ro=i(za,"e.g."),za.forEach(t),Uo=c(V),ot=n(V,"A",{href:!0});var Ca=a(ot);Jo=i(Ca,"ViT"),Ca.forEach(t),Ho=i(V,", "),st=n(V,"A",{href:!0});var Fa=a(st);Zo=i(Fa,"BEiT"),Fa.forEach(t),Go=i(V,", "),nt=n(V,"A",{href:!0});var Ia=a(nt);Xo=i(Ia,"DeiT"),Ia.forEach(t),Ko=i(V,") and any pretrained text autoencoding model as the text encoder ("),Mt=n(V,"EM",{});var Aa=a(Mt);Qo=i(Aa,"e.g."),Aa.forEach(t),Yo=c(V),at=n(V,"A",{href:!0});var qa=a(at);es=i(qa,"RoBERTa"),qa.forEach(t),ts=i(V,", "),rt=n(V,"A",{href:!0});var La=a(rt);os=i(La,"BERT"),La.forEach(t),ss=i(V,`). Two projection layers are added on top of both the vision and text encoder to project the output embeddings
to a shared latent space. The projection layers are randomly initialized so the model should be fine-tuned on a
downstream task. This model can be used to align the vision-text embeddings using CLIP like contrastive image-text
training and then can be used for zero-shot vision tasks such image-classification or retrieval.`),V.forEach(t),ao=c(o),te=n(o,"P",{});var _o=a(te);ns=i(_o,"In "),fe=n(_o,"A",{href:!0,rel:!0});var Sa=a(fe);as=i(Sa,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),Sa.forEach(t),rs=i(_o,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment on
new zero-shot vision tasks such as image classification or retrieval.`),_o.forEach(t),ro=c(o),H=n(o,"H2",{class:!0});var vo=a(H);oe=n(vo,"A",{id:!0,class:!0,href:!0});var Na=a(oe);zt=n(Na,"SPAN",{});var Ba=a(zt);v(ge.$$.fragment,Ba),Ba.forEach(t),Na.forEach(t),is=c(vo),Ct=n(vo,"SPAN",{});var Oa=a(Ct);ls=i(Oa,"VisionTextDualEncoderConfig"),Oa.forEach(t),vo.forEach(t),io=c(o),y=n(o,"DIV",{class:!0});var I=a(y);v(_e.$$.fragment,I),ds=c(I),B=n(I,"P",{});var et=a(B);it=n(et,"A",{href:!0});var Wa=a(it);cs=i(Wa,"VisionTextDualEncoderConfig"),Wa.forEach(t),ps=i(et,` is the configuration class to store the configuration of a
`),lt=n(et,"A",{href:!0});var Ra=a(lt);ms=i(Ra,"VisionTextDualEncoderModel"),Ra.forEach(t),hs=i(et,". It is used to instantiate "),dt=n(et,"A",{href:!0});var Ua=a(dt);us=i(Ua,"VisionTextDualEncoderModel"),Ua.forEach(t),fs=i(et,` model according to the
specified arguments, defining the text model and vision model configs.`),et.forEach(t),gs=c(I),Z=n(I,"P",{});var wt=a(Z);_s=i(wt,"Configuration objects inherit from "),ct=n(wt,"A",{href:!0});var Ja=a(ct);vs=i(Ja,"PretrainedConfig"),Ja.forEach(t),xs=i(wt,` and can be used to control the model outputs. Read the
documentation from `),pt=n(wt,"A",{href:!0});var Ha=a(pt);Ts=i(Ha,"PretrainedConfig"),Ha.forEach(t),bs=i(wt," for more information."),wt.forEach(t),Es=c(I),Ft=n(I,"P",{});var Za=a(Ft);js=i(Za,"Examples:"),Za.forEach(t),ws=c(I),v(ve.$$.fragment,I),ys=c(I),se=n(I,"DIV",{class:!0});var xo=a(se);v(xe.$$.fragment,xo),ks=c(xo),Te=n(xo,"P",{});var To=a(Te);Vs=i(To,"Instantiate a "),mt=n(To,"A",{href:!0});var Ga=a(mt);Ds=i(Ga,"VisionTextDualEncoderConfig"),Ga.forEach(t),$s=i(To,` (or a derived class) from text model configuration and vision
model configuration.`),To.forEach(t),xo.forEach(t),Ps=c(I),ne=n(I,"DIV",{class:!0});var bo=a(ne);v(be.$$.fragment,bo),Ms=c(bo),Ee=n(bo,"P",{});var Eo=a(Ee);zs=i(Eo,"Serializes this instance to a Python dictionary. Override the default "),ht=n(Eo,"A",{href:!0});var Xa=a(ht);Cs=i(Xa,"to_dict()"),Xa.forEach(t),Fs=i(Eo,"."),Eo.forEach(t),bo.forEach(t),I.forEach(t),lo=c(o),G=n(o,"H2",{class:!0});var jo=a(G);ae=n(jo,"A",{id:!0,class:!0,href:!0});var Ka=a(ae);It=n(Ka,"SPAN",{});var Qa=a(It);v(je.$$.fragment,Qa),Qa.forEach(t),Ka.forEach(t),Is=c(jo),At=n(jo,"SPAN",{});var Ya=a(At);As=i(Ya,"VisionTextDualEncoderProcessor"),Ya.forEach(t),jo.forEach(t),co=c(o),P=n(o,"DIV",{class:!0});var O=a(P);v(we.$$.fragment,O),qs=c(O),qt=n(O,"P",{});var er=a(qt);Ls=i(er,`Constructs a VisionTextDualEncoder processor which wraps a vision feature extractor and a tokenizer into a single
processor.`),er.forEach(t),Ss=c(O),z=n(O,"P",{});var N=a(z);ut=n(N,"A",{href:!0});var tr=a(ut);Ns=i(tr,"VisionTextDualEncoderProcessor"),tr.forEach(t),Bs=i(N," offers all the functionalities of "),ft=n(N,"A",{href:!0});var or=a(ft);Os=i(or,"AutoFeatureExtractor"),or.forEach(t),Ws=i(N,` and
`),gt=n(N,"A",{href:!0});var sr=a(gt);Rs=i(sr,"AutoTokenizer"),sr.forEach(t),Us=i(N,". See the "),Lt=n(N,"CODE",{});var nr=a(Lt);Js=i(nr,"__call__()"),nr.forEach(t),Hs=i(N,`and
`),_t=n(N,"A",{href:!0});var ar=a(_t);Zs=i(ar,"decode()"),ar.forEach(t),Gs=i(N," for more information."),N.forEach(t),Xs=c(O),re=n(O,"DIV",{class:!0});var wo=a(re);v(ye.$$.fragment,wo),Ks=c(wo),ke=n(wo,"P",{});var yo=a(ke);Qs=i(yo,`This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s
`),vt=n(yo,"A",{href:!0});var rr=a(vt);Ys=i(rr,"batch_decode()"),rr.forEach(t),en=i(yo,". Please refer to the docstring of this method for more information."),yo.forEach(t),wo.forEach(t),tn=c(O),ie=n(O,"DIV",{class:!0});var ko=a(ie);v(Ve.$$.fragment,ko),on=c(ko),De=n(ko,"P",{});var Vo=a(De);sn=i(Vo,"This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s "),xt=n(Vo,"A",{href:!0});var ir=a(xt);nn=i(ir,"decode()"),ir.forEach(t),an=i(Vo,`.
Please refer to the docstring of this method for more information.`),Vo.forEach(t),ko.forEach(t),O.forEach(t),po=c(o),X=n(o,"H2",{class:!0});var Do=a(X);le=n(Do,"A",{id:!0,class:!0,href:!0});var lr=a(le);St=n(lr,"SPAN",{});var dr=a(St);v($e.$$.fragment,dr),dr.forEach(t),lr.forEach(t),rn=c(Do),Nt=n(Do,"SPAN",{});var cr=a(Nt);ln=i(cr,"VisionTextDualEncoderModel"),cr.forEach(t),Do.forEach(t),mo=c(o),k=n(o,"DIV",{class:!0});var A=a(k);v(Pe.$$.fragment,A),dn=c(A),Me=n(A,"P",{});var $o=a(Me);cn=i($o,`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Bt=n($o,"CODE",{});var pr=a(Bt);pn=i(pr,"from_pretrained()"),pr.forEach(t),mn=i($o,`method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),$o.forEach(t),hn=c(A),ze=n(A,"P",{});var Po=a(ze);un=i(Po,"In "),Ce=n(Po,"A",{href:!0,rel:!0});var mr=a(Ce);fn=i(mr,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),mr.forEach(t),gn=i(Po,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Po.forEach(t),_n=c(A),Ot=n(A,"P",{});var hr=a(Ot);vn=i(hr,`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),hr.forEach(t),xn=c(A),Fe=n(A,"P",{});var Mo=a(Fe);Tn=i(Mo,"This model inherits from "),Tt=n(Mo,"A",{href:!0});var ur=a(Tt);bn=i(ur,"PreTrainedModel"),ur.forEach(t),En=i(Mo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mo.forEach(t),jn=c(A),Ie=n(A,"P",{});var zo=a(Ie);wn=i(zo,"This model is also a PyTorch "),Ae=n(zo,"A",{href:!0,rel:!0});var fr=a(Ae);yn=i(fr,"torch.nn.Module"),fr.forEach(t),kn=i(zo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zo.forEach(t),Vn=c(A),C=n(A,"DIV",{class:!0});var W=a(C);v(qe.$$.fragment,W),Dn=c(W),K=n(W,"P",{});var yt=a(K);$n=i(yt,"The "),bt=n(yt,"A",{href:!0});var gr=a(bt);Pn=i(gr,"VisionTextDualEncoderModel"),gr.forEach(t),Mn=i(yt," forward method, overrides the "),Wt=n(yt,"CODE",{});var _r=a(Wt);zn=i(_r,"__call__"),_r.forEach(t),Cn=i(yt," special method."),yt.forEach(t),Fn=c(W),v(de.$$.fragment,W),In=c(W),Rt=n(W,"P",{});var vr=a(Rt);An=i(vr,"Examples:"),vr.forEach(t),qn=c(W),v(Le.$$.fragment,W),W.forEach(t),A.forEach(t),ho=c(o),Q=n(o,"H2",{class:!0});var Co=a(Q);ce=n(Co,"A",{id:!0,class:!0,href:!0});var xr=a(ce);Ut=n(xr,"SPAN",{});var Tr=a(Ut);v(Se.$$.fragment,Tr),Tr.forEach(t),xr.forEach(t),Ln=c(Co),Jt=n(Co,"SPAN",{});var br=a(Jt);Sn=i(br,"FlaxVisionTextDualEncoderModel"),br.forEach(t),Co.forEach(t),uo=c(o),f=n(o,"DIV",{class:!0});var D=a(f);v(Ne.$$.fragment,D),Nn=c(D),Be=n(D,"P",{});var Fo=a(Be);Bn=i(Fo,`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),Ht=n(Fo,"CODE",{});var Er=a(Ht);On=i(Er,"from_pretrained()"),Er.forEach(t),Wn=i(Fo,`method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Fo.forEach(t),Rn=c(D),Oe=n(D,"P",{});var Io=a(Oe);Un=i(Io,"In "),We=n(Io,"A",{href:!0,rel:!0});var jr=a(We);Jn=i(jr,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),jr.forEach(t),Hn=i(Io,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Io.forEach(t),Zn=c(D),Zt=n(D,"P",{});var wr=a(Zt);Gn=i(wr,`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),wr.forEach(t),Xn=c(D),Re=n(D,"P",{});var Ao=a(Re);Kn=i(Ao,"This model inherits from "),Et=n(Ao,"A",{href:!0});var yr=a(Et);Qn=i(yr,"PreTrainedModel"),yr.forEach(t),Yn=i(Ao,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ao.forEach(t),ea=c(D),Ue=n(D,"P",{});var qo=a(Ue);ta=i(qo,"This model is also a Flax Linen "),Je=n(qo,"A",{href:!0,rel:!0});var kr=a(Je);oa=i(kr,"flax.linen.Module"),kr.forEach(t),sa=i(qo,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qo.forEach(t),na=c(D),Gt=n(D,"P",{});var Vr=a(Gt);aa=i(Vr,"Finally, this model supports inherent JAX features such as:"),Vr.forEach(t),ra=c(D),S=n(D,"UL",{});var me=a(S);Xt=n(me,"LI",{});var Dr=a(Xt);He=n(Dr,"A",{href:!0,rel:!0});var $r=a(He);ia=i($r,"Just-In-Time (JIT) compilation"),$r.forEach(t),Dr.forEach(t),la=c(me),Kt=n(me,"LI",{});var Pr=a(Kt);Ze=n(Pr,"A",{href:!0,rel:!0});var Mr=a(Ze);da=i(Mr,"Automatic Differentiation"),Mr.forEach(t),Pr.forEach(t),ca=c(me),Qt=n(me,"LI",{});var zr=a(Qt);Ge=n(zr,"A",{href:!0,rel:!0});var Cr=a(Ge);pa=i(Cr,"Vectorization"),Cr.forEach(t),zr.forEach(t),ma=c(me),Yt=n(me,"LI",{});var Fr=a(Yt);Xe=n(Fr,"A",{href:!0,rel:!0});var Ir=a(Xe);ha=i(Ir,"Parallelization"),Ir.forEach(t),Fr.forEach(t),me.forEach(t),ua=c(D),F=n(D,"DIV",{class:!0});var R=a(F);v(Ke.$$.fragment,R),fa=c(R),Y=n(R,"P",{});var kt=a(Y);ga=i(kt,"The "),jt=n(kt,"A",{href:!0});var Ar=a(jt);_a=i(Ar,"FlaxVisionTextDualEncoderModel"),Ar.forEach(t),va=i(kt," forward method, overrides the "),eo=n(kt,"CODE",{});var qr=a(eo);xa=i(qr,"__call__"),qr.forEach(t),Ta=i(kt," special method."),kt.forEach(t),ba=c(R),v(pe.$$.fragment,R),Ea=c(R),to=n(R,"P",{});var Lr=a(to);ja=i(Lr,"Examples:"),Lr.forEach(t),wa=c(R),v(Qe.$$.fragment,R),R.forEach(t),D.forEach(t),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(Hr)),l(j,"id","visiontextdualencoder"),l(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(j,"href","#visiontextdualencoder"),l(u,"class","relative group"),l(ee,"id","overview"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#overview"),l(J,"class","relative group"),l(tt,"href","/docs/transformers/doc-build-test/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(ot,"href","vit"),l(st,"href","beit"),l(nt,"href","deit"),l(at,"href","roberta"),l(rt,"href","bert"),l(fe,"href","https://arxiv.org/abs/2111.07991"),l(fe,"rel","nofollow"),l(oe,"id","transformers.VisionTextDualEncoderConfig"),l(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(oe,"href","#transformers.VisionTextDualEncoderConfig"),l(H,"class","relative group"),l(it,"href","/docs/transformers/doc-build-test/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"),l(lt,"href","/docs/transformers/doc-build-test/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(dt,"href","/docs/transformers/doc-build-test/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(ct,"href","/docs/transformers/doc-build-test/en/main_classes/configuration#transformers.PretrainedConfig"),l(pt,"href","/docs/transformers/doc-build-test/en/main_classes/configuration#transformers.PretrainedConfig"),l(mt,"href","/docs/transformers/doc-build-test/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"),l(se,"class","docstring"),l(ht,"href","/docs/transformers/doc-build-test/en/main_classes/configuration#transformers.PretrainedConfig.to_dict"),l(ne,"class","docstring"),l(y,"class","docstring"),l(ae,"id","transformers.VisionTextDualEncoderProcessor"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.VisionTextDualEncoderProcessor"),l(G,"class","relative group"),l(ut,"href","/docs/transformers/doc-build-test/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderProcessor"),l(ft,"href","/docs/transformers/doc-build-test/en/model_doc/auto#transformers.AutoFeatureExtractor"),l(gt,"href","/docs/transformers/doc-build-test/en/model_doc/auto#transformers.AutoTokenizer"),l(_t,"href","/docs/transformers/doc-build-test/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderProcessor.decode"),l(vt,"href","/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),l(re,"class","docstring"),l(xt,"href","/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),l(ie,"class","docstring"),l(P,"class","docstring"),l(le,"id","transformers.VisionTextDualEncoderModel"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.VisionTextDualEncoderModel"),l(X,"class","relative group"),l(Ce,"href","https://arxiv.org/abs/2111.07991"),l(Ce,"rel","nofollow"),l(Tt,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel"),l(Ae,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ae,"rel","nofollow"),l(bt,"href","/docs/transformers/doc-build-test/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(C,"class","docstring"),l(k,"class","docstring"),l(ce,"id","transformers.FlaxVisionTextDualEncoderModel"),l(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ce,"href","#transformers.FlaxVisionTextDualEncoderModel"),l(Q,"class","relative group"),l(We,"href","https://arxiv.org/abs/2111.07991"),l(We,"rel","nofollow"),l(Et,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel"),l(Je,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(Je,"rel","nofollow"),l(He,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(He,"rel","nofollow"),l(Ze,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(Ze,"rel","nofollow"),l(Ge,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Ge,"rel","nofollow"),l(Xe,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(Xe,"rel","nofollow"),l(jt,"href","/docs/transformers/doc-build-test/en/model_doc/vision-text-dual-encoder#transformers.FlaxVisionTextDualEncoderModel"),l(F,"class","docstring"),l(f,"class","docstring")},m(o,p){e(document.head,m),h(o,M,p),h(o,u,p),e(u,j),e(j,q),x(w,q,null),e(u,$),e(u,L),e(L,Lo),h(o,so,p),h(o,J,p),e(J,ee),e(ee,Dt),x(ue,Dt,null),e(J,So),e(J,$t),e($t,No),h(o,no,p),h(o,g,p),e(g,Bo),e(g,tt),e(tt,Oo),e(g,Wo),e(g,Pt),e(Pt,Ro),e(g,Uo),e(g,ot),e(ot,Jo),e(g,Ho),e(g,st),e(st,Zo),e(g,Go),e(g,nt),e(nt,Xo),e(g,Ko),e(g,Mt),e(Mt,Qo),e(g,Yo),e(g,at),e(at,es),e(g,ts),e(g,rt),e(rt,os),e(g,ss),h(o,ao,p),h(o,te,p),e(te,ns),e(te,fe),e(fe,as),e(te,rs),h(o,ro,p),h(o,H,p),e(H,oe),e(oe,zt),x(ge,zt,null),e(H,is),e(H,Ct),e(Ct,ls),h(o,io,p),h(o,y,p),x(_e,y,null),e(y,ds),e(y,B),e(B,it),e(it,cs),e(B,ps),e(B,lt),e(lt,ms),e(B,hs),e(B,dt),e(dt,us),e(B,fs),e(y,gs),e(y,Z),e(Z,_s),e(Z,ct),e(ct,vs),e(Z,xs),e(Z,pt),e(pt,Ts),e(Z,bs),e(y,Es),e(y,Ft),e(Ft,js),e(y,ws),x(ve,y,null),e(y,ys),e(y,se),x(xe,se,null),e(se,ks),e(se,Te),e(Te,Vs),e(Te,mt),e(mt,Ds),e(Te,$s),e(y,Ps),e(y,ne),x(be,ne,null),e(ne,Ms),e(ne,Ee),e(Ee,zs),e(Ee,ht),e(ht,Cs),e(Ee,Fs),h(o,lo,p),h(o,G,p),e(G,ae),e(ae,It),x(je,It,null),e(G,Is),e(G,At),e(At,As),h(o,co,p),h(o,P,p),x(we,P,null),e(P,qs),e(P,qt),e(qt,Ls),e(P,Ss),e(P,z),e(z,ut),e(ut,Ns),e(z,Bs),e(z,ft),e(ft,Os),e(z,Ws),e(z,gt),e(gt,Rs),e(z,Us),e(z,Lt),e(Lt,Js),e(z,Hs),e(z,_t),e(_t,Zs),e(z,Gs),e(P,Xs),e(P,re),x(ye,re,null),e(re,Ks),e(re,ke),e(ke,Qs),e(ke,vt),e(vt,Ys),e(ke,en),e(P,tn),e(P,ie),x(Ve,ie,null),e(ie,on),e(ie,De),e(De,sn),e(De,xt),e(xt,nn),e(De,an),h(o,po,p),h(o,X,p),e(X,le),e(le,St),x($e,St,null),e(X,rn),e(X,Nt),e(Nt,ln),h(o,mo,p),h(o,k,p),x(Pe,k,null),e(k,dn),e(k,Me),e(Me,cn),e(Me,Bt),e(Bt,pn),e(Me,mn),e(k,hn),e(k,ze),e(ze,un),e(ze,Ce),e(Ce,fn),e(ze,gn),e(k,_n),e(k,Ot),e(Ot,vn),e(k,xn),e(k,Fe),e(Fe,Tn),e(Fe,Tt),e(Tt,bn),e(Fe,En),e(k,jn),e(k,Ie),e(Ie,wn),e(Ie,Ae),e(Ae,yn),e(Ie,kn),e(k,Vn),e(k,C),x(qe,C,null),e(C,Dn),e(C,K),e(K,$n),e(K,bt),e(bt,Pn),e(K,Mn),e(K,Wt),e(Wt,zn),e(K,Cn),e(C,Fn),x(de,C,null),e(C,In),e(C,Rt),e(Rt,An),e(C,qn),x(Le,C,null),h(o,ho,p),h(o,Q,p),e(Q,ce),e(ce,Ut),x(Se,Ut,null),e(Q,Ln),e(Q,Jt),e(Jt,Sn),h(o,uo,p),h(o,f,p),x(Ne,f,null),e(f,Nn),e(f,Be),e(Be,Bn),e(Be,Ht),e(Ht,On),e(Be,Wn),e(f,Rn),e(f,Oe),e(Oe,Un),e(Oe,We),e(We,Jn),e(Oe,Hn),e(f,Zn),e(f,Zt),e(Zt,Gn),e(f,Xn),e(f,Re),e(Re,Kn),e(Re,Et),e(Et,Qn),e(Re,Yn),e(f,ea),e(f,Ue),e(Ue,ta),e(Ue,Je),e(Je,oa),e(Ue,sa),e(f,na),e(f,Gt),e(Gt,aa),e(f,ra),e(f,S),e(S,Xt),e(Xt,He),e(He,ia),e(S,la),e(S,Kt),e(Kt,Ze),e(Ze,da),e(S,ca),e(S,Qt),e(Qt,Ge),e(Ge,pa),e(S,ma),e(S,Yt),e(Yt,Xe),e(Xe,ha),e(f,ua),e(f,F),x(Ke,F,null),e(F,fa),e(F,Y),e(Y,ga),e(Y,jt),e(jt,_a),e(Y,va),e(Y,eo),e(eo,xa),e(Y,Ta),e(F,ba),x(pe,F,null),e(F,Ea),e(F,to),e(to,ja),e(F,wa),x(Qe,F,null),fo=!0},p(o,[p]){const Ye={};p&2&&(Ye.$$scope={dirty:p,ctx:o}),de.$set(Ye);const oo={};p&2&&(oo.$$scope={dirty:p,ctx:o}),pe.$set(oo)},i(o){fo||(T(w.$$.fragment,o),T(ue.$$.fragment,o),T(ge.$$.fragment,o),T(_e.$$.fragment,o),T(ve.$$.fragment,o),T(xe.$$.fragment,o),T(be.$$.fragment,o),T(je.$$.fragment,o),T(we.$$.fragment,o),T(ye.$$.fragment,o),T(Ve.$$.fragment,o),T($e.$$.fragment,o),T(Pe.$$.fragment,o),T(qe.$$.fragment,o),T(de.$$.fragment,o),T(Le.$$.fragment,o),T(Se.$$.fragment,o),T(Ne.$$.fragment,o),T(Ke.$$.fragment,o),T(pe.$$.fragment,o),T(Qe.$$.fragment,o),fo=!0)},o(o){b(w.$$.fragment,o),b(ue.$$.fragment,o),b(ge.$$.fragment,o),b(_e.$$.fragment,o),b(ve.$$.fragment,o),b(xe.$$.fragment,o),b(be.$$.fragment,o),b(je.$$.fragment,o),b(we.$$.fragment,o),b(ye.$$.fragment,o),b(Ve.$$.fragment,o),b($e.$$.fragment,o),b(Pe.$$.fragment,o),b(qe.$$.fragment,o),b(de.$$.fragment,o),b(Le.$$.fragment,o),b(Se.$$.fragment,o),b(Ne.$$.fragment,o),b(Ke.$$.fragment,o),b(pe.$$.fragment,o),b(Qe.$$.fragment,o),fo=!1},d(o){t(m),o&&t(M),o&&t(u),E(w),o&&t(so),o&&t(J),E(ue),o&&t(no),o&&t(g),o&&t(ao),o&&t(te),o&&t(ro),o&&t(H),E(ge),o&&t(io),o&&t(y),E(_e),E(ve),E(xe),E(be),o&&t(lo),o&&t(G),E(je),o&&t(co),o&&t(P),E(we),E(ye),E(Ve),o&&t(po),o&&t(X),E($e),o&&t(mo),o&&t(k),E(Pe),E(qe),E(de),E(Le),o&&t(ho),o&&t(Q),E(Se),o&&t(uo),o&&t(f),E(Ne),E(Ke),E(pe),E(Qe)}}}const Hr={local:"visiontextdualencoder",sections:[{local:"overview",title:"Overview"},{local:"transformers.VisionTextDualEncoderConfig",title:"VisionTextDualEncoderConfig"},{local:"transformers.VisionTextDualEncoderProcessor",title:"VisionTextDualEncoderProcessor"},{local:"transformers.VisionTextDualEncoderModel",title:"VisionTextDualEncoderModel"},{local:"transformers.FlaxVisionTextDualEncoderModel",title:"FlaxVisionTextDualEncoderModel"}],title:"VisionTextDualEncoder"};function Zr(he,m,M){let{fw:u}=m;return he.$$set=j=>{"fw"in j&&M(0,u=j.fw)},[u]}class ti extends Nr{constructor(m){super();Br(this,m,Zr,Jr,Or,{fw:0})}}export{ti as default,Hr as metadata};
