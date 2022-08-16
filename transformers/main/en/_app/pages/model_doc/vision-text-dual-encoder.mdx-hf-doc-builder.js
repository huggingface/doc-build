import{S as Pr,i as Mr,s as zr,e as n,k as c,w as T,t as r,M as Cr,c as a,d as t,m,a as s,x as b,h as i,b as l,G as e,g as _,y as E,q as $,o as j,B as w,v as Fr,L as vs}from"../../chunks/vendor-hf-doc-builder.js";import{T as Dr}from"../../chunks/Tip-hf-doc-builder.js";import{D as R}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ts}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Pt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as xs}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ir(I){let p,v,g,f,x;return f=new Ts({props:{code:`from transformers import ViTConfig, BertConfig, VisionTextDualEncoderConfig, VisionTextDualEncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionTextDualEncoderModel.from_pretrained(<span class="hljs-string">&quot;vit-bert&quot;</span>, config=vision_text_config)`}}),{c(){p=n("p"),v=r("Examples:"),g=c(),T(f.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);v=i(h,"Examples:"),h.forEach(t),g=m(d),b(f.$$.fragment,d)},m(d,h){_(d,p,h),e(p,v),_(d,g,h),E(f,d,h),x=!0},p:vs,i(d){x||($(f.$$.fragment,d),x=!0)},o(d){j(f.$$.fragment,d),x=!1},d(d){d&&t(p),d&&t(g),w(f,d)}}}function Ar(I){let p,v,g,f,x;return{c(){p=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=s(p);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(h,"CODE",{});var S=s(g);f=i(S,"Module"),S.forEach(t),x=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){_(d,p,h),e(p,v),e(p,g),e(g,f),e(p,x)},d(d){d&&t(p)}}}function qr(I){let p,v,g,f,x;return f=new Ts({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){p=n("p"),v=r("Examples:"),g=c(),T(f.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);v=i(h,"Examples:"),h.forEach(t),g=m(d),b(f.$$.fragment,d)},m(d,h){_(d,p,h),e(p,v),_(d,g,h),E(f,d,h),x=!0},p:vs,i(d){x||($(f.$$.fragment,d),x=!0)},o(d){j(f.$$.fragment,d),x=!1},d(d){d&&t(p),d&&t(g),w(f,d)}}}function Lr(I){let p,v,g,f,x;return{c(){p=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=s(p);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(h,"CODE",{});var S=s(g);f=i(S,"Module"),S.forEach(t),x=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){_(d,p,h),e(p,v),e(p,g),e(g,f),e(p,x)},d(d){d&&t(p)}}}function Sr(I){let p,v,g,f,x;return f=new Ts({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){p=n("p"),v=r("Examples:"),g=c(),T(f.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);v=i(h,"Examples:"),h.forEach(t),g=m(d),b(f.$$.fragment,d)},m(d,h){_(d,p,h),e(p,v),_(d,g,h),E(f,d,h),x=!0},p:vs,i(d){x||($(f.$$.fragment,d),x=!0)},o(d){j(f.$$.fragment,d),x=!1},d(d){d&&t(p),d&&t(g),w(f,d)}}}function Nr(I){let p,v,g,f,x,d,h,S,qo,no,U,Y,Mt,_e,Lo,zt,So,ao,k,No,ot,Oo,Bo,Ct,Wo,Ro,nt,Uo,Jo,at,Ho,Zo,st,Go,Xo,Ft,Ko,Qo,rt,Yo,en,it,tn,on,so,ee,nn,xe,an,sn,ro,J,te,It,ve,rn,At,ln,io,M,Te,dn,B,lt,cn,mn,dt,pn,fn,ct,hn,un,gn,H,_n,mt,xn,vn,pt,Tn,bn,En,oe,$n,ne,be,jn,Ee,wn,ft,yn,kn,Vn,ae,$e,Dn,je,Pn,ht,Mn,zn,lo,Z,se,qt,we,Cn,Lt,Fn,co,z,ye,In,St,An,qn,C,ut,Ln,Sn,gt,Nn,On,_t,Bn,Wn,Nt,Rn,Un,xt,Jn,Hn,Zn,re,ke,Gn,Ve,Xn,vt,Kn,Qn,Yn,ie,De,ea,Pe,ta,Tt,oa,na,mo,G,le,Ot,Me,aa,Bt,sa,po,V,ze,ra,Ce,ia,bt,la,da,ca,Fe,ma,Ie,pa,fa,ha,Wt,ua,ga,Ae,_a,Et,xa,va,Ta,qe,ba,Le,Ea,$a,ja,A,Se,wa,X,ya,$t,ka,Va,Rt,Da,Pa,Ma,de,za,ce,fo,K,me,Ut,Ne,Ca,Jt,Fa,ho,y,Oe,Ia,Be,Aa,jt,qa,La,Sa,We,Na,Re,Oa,Ba,Wa,Ht,Ra,Ua,Ue,Ja,wt,Ha,Za,Ga,Je,Xa,He,Ka,Qa,Ya,Zt,es,ts,N,Gt,Ze,os,ns,Xt,Ge,as,ss,Kt,Xe,rs,is,Qt,Ke,ls,ds,q,Qe,cs,Q,ms,yt,ps,fs,Yt,hs,us,gs,pe,_s,fe,uo;return d=new Pt({}),_e=new Pt({}),ve=new Pt({}),Te=new R({props:{name:"class transformers.VisionTextDualEncoderConfig",anchor:"transformers.VisionTextDualEncoderConfig",parameters:[{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionTextDualEncoderConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>) &#x2014;
Dictionary of configuration options that defines text model config.`,name:"text_config_dict"},{anchor:"transformers.VisionTextDualEncoderConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>) &#x2014;
Dictionary of configuration options that defines vison model config.`,name:"vision_config_dict"},{anchor:"transformers.VisionTextDualEncoderConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.VisionTextDualEncoderConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.VisionTextDualEncoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L28"}}),oe=new xs({props:{anchor:"transformers.VisionTextDualEncoderConfig.example",$$slots:{default:[Ir]},$$scope:{ctx:I}}}),be=new R({props:{name:"from_vision_text_configs",anchor:"transformers.VisionTextDualEncoderConfig.from_vision_text_configs",parameters:[{name:"vision_config",val:": PretrainedConfig"},{name:"text_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L105",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"
>VisionTextDualEncoderConfig</a></p>
`}}),$e=new R({props:{name:"to_dict",anchor:"transformers.VisionTextDualEncoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L117",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),we=new Pt({}),ye=new R({props:{name:"class transformers.VisionTextDualEncoderProcessor",anchor:"transformers.VisionTextDualEncoderProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.VisionTextDualEncoderProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.VisionTextDualEncoderProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L23"}}),ke=new R({props:{name:"batch_decode",anchor:"transformers.VisionTextDualEncoderProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L98"}}),De=new R({props:{name:"decode",anchor:"transformers.VisionTextDualEncoderProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L105"}}),Me=new Pt({}),ze=new R({props:{name:"class transformers.VisionTextDualEncoderModel",anchor:"transformers.VisionTextDualEncoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.models.vision_text_dual_encoder.configuration_vision_text_dual_encoder.VisionTextDualEncoderConfig] = None"},{name:"vision_model",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"text_model",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],parametersDescription:[{anchor:"transformers.VisionTextDualEncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/modeling_vision_text_dual_encoder.py#L162"}}),Se=new R({props:{name:"forward",anchor:"transformers.VisionTextDualEncoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"return_loss",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.VisionTextDualEncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),de=new Dr({props:{$$slots:{default:[Ar]},$$scope:{ctx:I}}}),ce=new xs({props:{anchor:"transformers.VisionTextDualEncoderModel.forward.example",$$slots:{default:[qr]},$$scope:{ctx:I}}}),Ne=new Pt({}),Oe=new R({props:{name:"class transformers.FlaxVisionTextDualEncoderModel",anchor:"transformers.FlaxVisionTextDualEncoderModel",parameters:[{name:"config",val:": VisionTextDualEncoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxVisionTextDualEncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig">VisionTextDualEncoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/modeling_flax_vision_text_dual_encoder.py#L219"}}),Qe=new R({props:{name:"__call__",anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),pe=new Dr({props:{$$slots:{default:[Lr]},$$scope:{ctx:I}}}),fe=new xs({props:{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.example",$$slots:{default:[Sr]},$$scope:{ctx:I}}}),{c(){p=n("meta"),v=c(),g=n("h1"),f=n("a"),x=n("span"),T(d.$$.fragment),h=c(),S=n("span"),qo=r("VisionTextDualEncoder"),no=c(),U=n("h2"),Y=n("a"),Mt=n("span"),T(_e.$$.fragment),Lo=c(),zt=n("span"),So=r("Overview"),ao=c(),k=n("p"),No=r("The "),ot=n("a"),Oo=r("VisionTextDualEncoderModel"),Bo=r(` can be used to initialize a vision-text dual encoder model with
any pretrained vision autoencoding model as the vision encoder (`),Ct=n("em"),Wo=r("e.g."),Ro=c(),nt=n("a"),Uo=r("ViT"),Jo=r(", "),at=n("a"),Ho=r("BEiT"),Zo=r(", "),st=n("a"),Go=r("DeiT"),Xo=r(") and any pretrained text autoencoding model as the text encoder ("),Ft=n("em"),Ko=r("e.g."),Qo=c(),rt=n("a"),Yo=r("RoBERTa"),en=r(", "),it=n("a"),tn=r("BERT"),on=r(`). Two projection layers are added on top of both the vision and text encoder to project the output embeddings
to a shared latent space. The projection layers are randomly initialized so the model should be fine-tuned on a
downstream task. This model can be used to align the vision-text embeddings using CLIP like contrastive image-text
training and then can be used for zero-shot vision tasks such image-classification or retrieval.`),so=c(),ee=n("p"),nn=r("In "),xe=n("a"),an=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),sn=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment on
new zero-shot vision tasks such as image classification or retrieval.`),ro=c(),J=n("h2"),te=n("a"),It=n("span"),T(ve.$$.fragment),rn=c(),At=n("span"),ln=r("VisionTextDualEncoderConfig"),io=c(),M=n("div"),T(Te.$$.fragment),dn=c(),B=n("p"),lt=n("a"),cn=r("VisionTextDualEncoderConfig"),mn=r(` is the configuration class to store the configuration of a
`),dt=n("a"),pn=r("VisionTextDualEncoderModel"),fn=r(". It is used to instantiate "),ct=n("a"),hn=r("VisionTextDualEncoderModel"),un=r(` model according to the
specified arguments, defining the text model and vision model configs.`),gn=c(),H=n("p"),_n=r("Configuration objects inherit from "),mt=n("a"),xn=r("PretrainedConfig"),vn=r(` and can be used to control the model outputs. Read the
documentation from `),pt=n("a"),Tn=r("PretrainedConfig"),bn=r(" for more information."),En=c(),T(oe.$$.fragment),$n=c(),ne=n("div"),T(be.$$.fragment),jn=c(),Ee=n("p"),wn=r("Instantiate a "),ft=n("a"),yn=r("VisionTextDualEncoderConfig"),kn=r(` (or a derived class) from text model configuration and vision
model configuration.`),Vn=c(),ae=n("div"),T($e.$$.fragment),Dn=c(),je=n("p"),Pn=r("Serializes this instance to a Python dictionary. Override the default "),ht=n("a"),Mn=r("to_dict()"),zn=r("."),lo=c(),Z=n("h2"),se=n("a"),qt=n("span"),T(we.$$.fragment),Cn=c(),Lt=n("span"),Fn=r("VisionTextDualEncoderProcessor"),co=c(),z=n("div"),T(ye.$$.fragment),In=c(),St=n("p"),An=r(`Constructs a VisionTextDualEncoder processor which wraps a vision feature extractor and a tokenizer into a single
processor.`),qn=c(),C=n("p"),ut=n("a"),Ln=r("VisionTextDualEncoderProcessor"),Sn=r(" offers all the functionalities of "),gt=n("a"),Nn=r("AutoFeatureExtractor"),On=r(` and
`),_t=n("a"),Bn=r("AutoTokenizer"),Wn=r(". See the "),Nt=n("code"),Rn=r("__call__()"),Un=r(` and
`),xt=n("a"),Jn=r("decode()"),Hn=r(" for more information."),Zn=c(),re=n("div"),T(ke.$$.fragment),Gn=c(),Ve=n("p"),Xn=r(`This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s
`),vt=n("a"),Kn=r("batch_decode()"),Qn=r(". Please refer to the docstring of this method for more information."),Yn=c(),ie=n("div"),T(De.$$.fragment),ea=c(),Pe=n("p"),ta=r("This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s "),Tt=n("a"),oa=r("decode()"),na=r(`.
Please refer to the docstring of this method for more information.`),mo=c(),G=n("h2"),le=n("a"),Ot=n("span"),T(Me.$$.fragment),aa=c(),Bt=n("span"),sa=r("VisionTextDualEncoderModel"),po=c(),V=n("div"),T(ze.$$.fragment),ra=c(),Ce=n("p"),ia=r(`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),bt=n("a"),la=r("from_pretrained()"),da=r(` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),ca=c(),Fe=n("p"),ma=r("In "),Ie=n("a"),pa=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),fa=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),ha=c(),Wt=n("p"),ua=r(`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),ga=c(),Ae=n("p"),_a=r("This model inherits from "),Et=n("a"),xa=r("PreTrainedModel"),va=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ta=c(),qe=n("p"),ba=r("This model is also a PyTorch "),Le=n("a"),Ea=r("torch.nn.Module"),$a=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ja=c(),A=n("div"),T(Se.$$.fragment),wa=c(),X=n("p"),ya=r("The "),$t=n("a"),ka=r("VisionTextDualEncoderModel"),Va=r(" forward method, overrides the "),Rt=n("code"),Da=r("__call__"),Pa=r(" special method."),Ma=c(),T(de.$$.fragment),za=c(),T(ce.$$.fragment),fo=c(),K=n("h2"),me=n("a"),Ut=n("span"),T(Ne.$$.fragment),Ca=c(),Jt=n("span"),Fa=r("FlaxVisionTextDualEncoderModel"),ho=c(),y=n("div"),T(Oe.$$.fragment),Ia=c(),Be=n("p"),Aa=r(`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),jt=n("a"),qa=r("from_pretrained()"),La=r(` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Sa=c(),We=n("p"),Na=r("In "),Re=n("a"),Oa=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),Ba=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Wa=c(),Ht=n("p"),Ra=r(`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Ua=c(),Ue=n("p"),Ja=r("This model inherits from "),wt=n("a"),Ha=r("PreTrainedModel"),Za=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ga=c(),Je=n("p"),Xa=r("This model is also a Flax Linen "),He=n("a"),Ka=r("flax.linen.Module"),Qa=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ya=c(),Zt=n("p"),es=r("Finally, this model supports inherent JAX features such as:"),ts=c(),N=n("ul"),Gt=n("li"),Ze=n("a"),os=r("Just-In-Time (JIT) compilation"),ns=c(),Xt=n("li"),Ge=n("a"),as=r("Automatic Differentiation"),ss=c(),Kt=n("li"),Xe=n("a"),rs=r("Vectorization"),is=c(),Qt=n("li"),Ke=n("a"),ls=r("Parallelization"),ds=c(),q=n("div"),T(Qe.$$.fragment),cs=c(),Q=n("p"),ms=r("The "),yt=n("a"),ps=r("FlaxVisionTextDualEncoderModel"),fs=r(" forward method, overrides the "),Yt=n("code"),hs=r("__call__"),us=r(" special method."),gs=c(),T(pe.$$.fragment),_s=c(),T(fe.$$.fragment),this.h()},l(o){const u=Cr('[data-svelte="svelte-1phssyn"]',document.head);p=a(u,"META",{name:!0,content:!0}),u.forEach(t),v=m(o),g=a(o,"H1",{class:!0});var Ye=s(g);f=a(Ye,"A",{id:!0,class:!0,href:!0});var eo=s(f);x=a(eo,"SPAN",{});var to=s(x);b(d.$$.fragment,to),to.forEach(t),eo.forEach(t),h=m(Ye),S=a(Ye,"SPAN",{});var oo=s(S);qo=i(oo,"VisionTextDualEncoder"),oo.forEach(t),Ye.forEach(t),no=m(o),U=a(o,"H2",{class:!0});var et=s(U);Y=a(et,"A",{id:!0,class:!0,href:!0});var bs=s(Y);Mt=a(bs,"SPAN",{});var Es=s(Mt);b(_e.$$.fragment,Es),Es.forEach(t),bs.forEach(t),Lo=m(et),zt=a(et,"SPAN",{});var $s=s(zt);So=i($s,"Overview"),$s.forEach(t),et.forEach(t),ao=m(o),k=a(o,"P",{});var D=s(k);No=i(D,"The "),ot=a(D,"A",{href:!0});var js=s(ot);Oo=i(js,"VisionTextDualEncoderModel"),js.forEach(t),Bo=i(D,` can be used to initialize a vision-text dual encoder model with
any pretrained vision autoencoding model as the vision encoder (`),Ct=a(D,"EM",{});var ws=s(Ct);Wo=i(ws,"e.g."),ws.forEach(t),Ro=m(D),nt=a(D,"A",{href:!0});var ys=s(nt);Uo=i(ys,"ViT"),ys.forEach(t),Jo=i(D,", "),at=a(D,"A",{href:!0});var ks=s(at);Ho=i(ks,"BEiT"),ks.forEach(t),Zo=i(D,", "),st=a(D,"A",{href:!0});var Vs=s(st);Go=i(Vs,"DeiT"),Vs.forEach(t),Xo=i(D,") and any pretrained text autoencoding model as the text encoder ("),Ft=a(D,"EM",{});var Ds=s(Ft);Ko=i(Ds,"e.g."),Ds.forEach(t),Qo=m(D),rt=a(D,"A",{href:!0});var Ps=s(rt);Yo=i(Ps,"RoBERTa"),Ps.forEach(t),en=i(D,", "),it=a(D,"A",{href:!0});var Ms=s(it);tn=i(Ms,"BERT"),Ms.forEach(t),on=i(D,`). Two projection layers are added on top of both the vision and text encoder to project the output embeddings
to a shared latent space. The projection layers are randomly initialized so the model should be fine-tuned on a
downstream task. This model can be used to align the vision-text embeddings using CLIP like contrastive image-text
training and then can be used for zero-shot vision tasks such image-classification or retrieval.`),D.forEach(t),so=m(o),ee=a(o,"P",{});var go=s(ee);nn=i(go,"In "),xe=a(go,"A",{href:!0,rel:!0});var zs=s(xe);an=i(zs,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),zs.forEach(t),sn=i(go,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment on
new zero-shot vision tasks such as image classification or retrieval.`),go.forEach(t),ro=m(o),J=a(o,"H2",{class:!0});var _o=s(J);te=a(_o,"A",{id:!0,class:!0,href:!0});var Cs=s(te);It=a(Cs,"SPAN",{});var Fs=s(It);b(ve.$$.fragment,Fs),Fs.forEach(t),Cs.forEach(t),rn=m(_o),At=a(_o,"SPAN",{});var Is=s(At);ln=i(Is,"VisionTextDualEncoderConfig"),Is.forEach(t),_o.forEach(t),io=m(o),M=a(o,"DIV",{class:!0});var L=s(M);b(Te.$$.fragment,L),dn=m(L),B=a(L,"P",{});var tt=s(B);lt=a(tt,"A",{href:!0});var As=s(lt);cn=i(As,"VisionTextDualEncoderConfig"),As.forEach(t),mn=i(tt,` is the configuration class to store the configuration of a
`),dt=a(tt,"A",{href:!0});var qs=s(dt);pn=i(qs,"VisionTextDualEncoderModel"),qs.forEach(t),fn=i(tt,". It is used to instantiate "),ct=a(tt,"A",{href:!0});var Ls=s(ct);hn=i(Ls,"VisionTextDualEncoderModel"),Ls.forEach(t),un=i(tt,` model according to the
specified arguments, defining the text model and vision model configs.`),tt.forEach(t),gn=m(L),H=a(L,"P",{});var kt=s(H);_n=i(kt,"Configuration objects inherit from "),mt=a(kt,"A",{href:!0});var Ss=s(mt);xn=i(Ss,"PretrainedConfig"),Ss.forEach(t),vn=i(kt,` and can be used to control the model outputs. Read the
documentation from `),pt=a(kt,"A",{href:!0});var Ns=s(pt);Tn=i(Ns,"PretrainedConfig"),Ns.forEach(t),bn=i(kt," for more information."),kt.forEach(t),En=m(L),b(oe.$$.fragment,L),$n=m(L),ne=a(L,"DIV",{class:!0});var xo=s(ne);b(be.$$.fragment,xo),jn=m(xo),Ee=a(xo,"P",{});var vo=s(Ee);wn=i(vo,"Instantiate a "),ft=a(vo,"A",{href:!0});var Os=s(ft);yn=i(Os,"VisionTextDualEncoderConfig"),Os.forEach(t),kn=i(vo,` (or a derived class) from text model configuration and vision
model configuration.`),vo.forEach(t),xo.forEach(t),Vn=m(L),ae=a(L,"DIV",{class:!0});var To=s(ae);b($e.$$.fragment,To),Dn=m(To),je=a(To,"P",{});var bo=s(je);Pn=i(bo,"Serializes this instance to a Python dictionary. Override the default "),ht=a(bo,"A",{href:!0});var Bs=s(ht);Mn=i(Bs,"to_dict()"),Bs.forEach(t),zn=i(bo,"."),bo.forEach(t),To.forEach(t),L.forEach(t),lo=m(o),Z=a(o,"H2",{class:!0});var Eo=s(Z);se=a(Eo,"A",{id:!0,class:!0,href:!0});var Ws=s(se);qt=a(Ws,"SPAN",{});var Rs=s(qt);b(we.$$.fragment,Rs),Rs.forEach(t),Ws.forEach(t),Cn=m(Eo),Lt=a(Eo,"SPAN",{});var Us=s(Lt);Fn=i(Us,"VisionTextDualEncoderProcessor"),Us.forEach(t),Eo.forEach(t),co=m(o),z=a(o,"DIV",{class:!0});var W=s(z);b(ye.$$.fragment,W),In=m(W),St=a(W,"P",{});var Js=s(St);An=i(Js,`Constructs a VisionTextDualEncoder processor which wraps a vision feature extractor and a tokenizer into a single
processor.`),Js.forEach(t),qn=m(W),C=a(W,"P",{});var O=s(C);ut=a(O,"A",{href:!0});var Hs=s(ut);Ln=i(Hs,"VisionTextDualEncoderProcessor"),Hs.forEach(t),Sn=i(O," offers all the functionalities of "),gt=a(O,"A",{href:!0});var Zs=s(gt);Nn=i(Zs,"AutoFeatureExtractor"),Zs.forEach(t),On=i(O,` and
`),_t=a(O,"A",{href:!0});var Gs=s(_t);Bn=i(Gs,"AutoTokenizer"),Gs.forEach(t),Wn=i(O,". See the "),Nt=a(O,"CODE",{});var Xs=s(Nt);Rn=i(Xs,"__call__()"),Xs.forEach(t),Un=i(O,` and
`),xt=a(O,"A",{href:!0});var Ks=s(xt);Jn=i(Ks,"decode()"),Ks.forEach(t),Hn=i(O," for more information."),O.forEach(t),Zn=m(W),re=a(W,"DIV",{class:!0});var $o=s(re);b(ke.$$.fragment,$o),Gn=m($o),Ve=a($o,"P",{});var jo=s(Ve);Xn=i(jo,`This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s
`),vt=a(jo,"A",{href:!0});var Qs=s(vt);Kn=i(Qs,"batch_decode()"),Qs.forEach(t),Qn=i(jo,". Please refer to the docstring of this method for more information."),jo.forEach(t),$o.forEach(t),Yn=m(W),ie=a(W,"DIV",{class:!0});var wo=s(ie);b(De.$$.fragment,wo),ea=m(wo),Pe=a(wo,"P",{});var yo=s(Pe);ta=i(yo,"This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s "),Tt=a(yo,"A",{href:!0});var Ys=s(Tt);oa=i(Ys,"decode()"),Ys.forEach(t),na=i(yo,`.
Please refer to the docstring of this method for more information.`),yo.forEach(t),wo.forEach(t),W.forEach(t),mo=m(o),G=a(o,"H2",{class:!0});var ko=s(G);le=a(ko,"A",{id:!0,class:!0,href:!0});var er=s(le);Ot=a(er,"SPAN",{});var tr=s(Ot);b(Me.$$.fragment,tr),tr.forEach(t),er.forEach(t),aa=m(ko),Bt=a(ko,"SPAN",{});var or=s(Bt);sa=i(or,"VisionTextDualEncoderModel"),or.forEach(t),ko.forEach(t),po=m(o),V=a(o,"DIV",{class:!0});var F=s(V);b(ze.$$.fragment,F),ra=m(F),Ce=a(F,"P",{});var Vo=s(Ce);ia=i(Vo,`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),bt=a(Vo,"A",{href:!0});var nr=s(bt);la=i(nr,"from_pretrained()"),nr.forEach(t),da=i(Vo,` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Vo.forEach(t),ca=m(F),Fe=a(F,"P",{});var Do=s(Fe);ma=i(Do,"In "),Ie=a(Do,"A",{href:!0,rel:!0});var ar=s(Ie);pa=i(ar,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),ar.forEach(t),fa=i(Do,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Do.forEach(t),ha=m(F),Wt=a(F,"P",{});var sr=s(Wt);ua=i(sr,`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),sr.forEach(t),ga=m(F),Ae=a(F,"P",{});var Po=s(Ae);_a=i(Po,"This model inherits from "),Et=a(Po,"A",{href:!0});var rr=s(Et);xa=i(rr,"PreTrainedModel"),rr.forEach(t),va=i(Po,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Po.forEach(t),Ta=m(F),qe=a(F,"P",{});var Mo=s(qe);ba=i(Mo,"This model is also a PyTorch "),Le=a(Mo,"A",{href:!0,rel:!0});var ir=s(Le);Ea=i(ir,"torch.nn.Module"),ir.forEach(t),$a=i(Mo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mo.forEach(t),ja=m(F),A=a(F,"DIV",{class:!0});var he=s(A);b(Se.$$.fragment,he),wa=m(he),X=a(he,"P",{});var Vt=s(X);ya=i(Vt,"The "),$t=a(Vt,"A",{href:!0});var lr=s($t);ka=i(lr,"VisionTextDualEncoderModel"),lr.forEach(t),Va=i(Vt," forward method, overrides the "),Rt=a(Vt,"CODE",{});var dr=s(Rt);Da=i(dr,"__call__"),dr.forEach(t),Pa=i(Vt," special method."),Vt.forEach(t),Ma=m(he),b(de.$$.fragment,he),za=m(he),b(ce.$$.fragment,he),he.forEach(t),F.forEach(t),fo=m(o),K=a(o,"H2",{class:!0});var zo=s(K);me=a(zo,"A",{id:!0,class:!0,href:!0});var cr=s(me);Ut=a(cr,"SPAN",{});var mr=s(Ut);b(Ne.$$.fragment,mr),mr.forEach(t),cr.forEach(t),Ca=m(zo),Jt=a(zo,"SPAN",{});var pr=s(Jt);Fa=i(pr,"FlaxVisionTextDualEncoderModel"),pr.forEach(t),zo.forEach(t),ho=m(o),y=a(o,"DIV",{class:!0});var P=s(y);b(Oe.$$.fragment,P),Ia=m(P),Be=a(P,"P",{});var Co=s(Be);Aa=i(Co,`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),jt=a(Co,"A",{href:!0});var fr=s(jt);qa=i(fr,"from_pretrained()"),fr.forEach(t),La=i(Co,` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Co.forEach(t),Sa=m(P),We=a(P,"P",{});var Fo=s(We);Na=i(Fo,"In "),Re=a(Fo,"A",{href:!0,rel:!0});var hr=s(Re);Oa=i(hr,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),hr.forEach(t),Ba=i(Fo,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Fo.forEach(t),Wa=m(P),Ht=a(P,"P",{});var ur=s(Ht);Ra=i(ur,`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),ur.forEach(t),Ua=m(P),Ue=a(P,"P",{});var Io=s(Ue);Ja=i(Io,"This model inherits from "),wt=a(Io,"A",{href:!0});var gr=s(wt);Ha=i(gr,"PreTrainedModel"),gr.forEach(t),Za=i(Io,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Io.forEach(t),Ga=m(P),Je=a(P,"P",{});var Ao=s(Je);Xa=i(Ao,"This model is also a Flax Linen "),He=a(Ao,"A",{href:!0,rel:!0});var _r=s(He);Ka=i(_r,"flax.linen.Module"),_r.forEach(t),Qa=i(Ao,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ao.forEach(t),Ya=m(P),Zt=a(P,"P",{});var xr=s(Zt);es=i(xr,"Finally, this model supports inherent JAX features such as:"),xr.forEach(t),ts=m(P),N=a(P,"UL",{});var ue=s(N);Gt=a(ue,"LI",{});var vr=s(Gt);Ze=a(vr,"A",{href:!0,rel:!0});var Tr=s(Ze);os=i(Tr,"Just-In-Time (JIT) compilation"),Tr.forEach(t),vr.forEach(t),ns=m(ue),Xt=a(ue,"LI",{});var br=s(Xt);Ge=a(br,"A",{href:!0,rel:!0});var Er=s(Ge);as=i(Er,"Automatic Differentiation"),Er.forEach(t),br.forEach(t),ss=m(ue),Kt=a(ue,"LI",{});var $r=s(Kt);Xe=a($r,"A",{href:!0,rel:!0});var jr=s(Xe);rs=i(jr,"Vectorization"),jr.forEach(t),$r.forEach(t),is=m(ue),Qt=a(ue,"LI",{});var wr=s(Qt);Ke=a(wr,"A",{href:!0,rel:!0});var yr=s(Ke);ls=i(yr,"Parallelization"),yr.forEach(t),wr.forEach(t),ue.forEach(t),ds=m(P),q=a(P,"DIV",{class:!0});var ge=s(q);b(Qe.$$.fragment,ge),cs=m(ge),Q=a(ge,"P",{});var Dt=s(Q);ms=i(Dt,"The "),yt=a(Dt,"A",{href:!0});var kr=s(yt);ps=i(kr,"FlaxVisionTextDualEncoderModel"),kr.forEach(t),fs=i(Dt," forward method, overrides the "),Yt=a(Dt,"CODE",{});var Vr=s(Yt);hs=i(Vr,"__call__"),Vr.forEach(t),us=i(Dt," special method."),Dt.forEach(t),gs=m(ge),b(pe.$$.fragment,ge),_s=m(ge),b(fe.$$.fragment,ge),ge.forEach(t),P.forEach(t),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(Or)),l(f,"id","visiontextdualencoder"),l(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(f,"href","#visiontextdualencoder"),l(g,"class","relative group"),l(Y,"id","overview"),l(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Y,"href","#overview"),l(U,"class","relative group"),l(ot,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(nt,"href","vit"),l(at,"href","beit"),l(st,"href","deit"),l(rt,"href","roberta"),l(it,"href","bert"),l(xe,"href","https://arxiv.org/abs/2111.07991"),l(xe,"rel","nofollow"),l(te,"id","transformers.VisionTextDualEncoderConfig"),l(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(te,"href","#transformers.VisionTextDualEncoderConfig"),l(J,"class","relative group"),l(lt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"),l(dt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(ct,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(mt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(pt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(ft,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"),l(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ht,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig.to_dict"),l(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(se,"id","transformers.VisionTextDualEncoderProcessor"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#transformers.VisionTextDualEncoderProcessor"),l(Z,"class","relative group"),l(ut,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderProcessor"),l(gt,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor"),l(_t,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer"),l(xt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderProcessor.decode"),l(vt,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.batch_decode"),l(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Tt,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.decode"),l(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(le,"id","transformers.VisionTextDualEncoderModel"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.VisionTextDualEncoderModel"),l(G,"class","relative group"),l(bt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Ie,"href","https://arxiv.org/abs/2111.07991"),l(Ie,"rel","nofollow"),l(Et,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Le,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Le,"rel","nofollow"),l($t,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(me,"id","transformers.FlaxVisionTextDualEncoderModel"),l(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(me,"href","#transformers.FlaxVisionTextDualEncoderModel"),l(K,"class","relative group"),l(jt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Re,"href","https://arxiv.org/abs/2111.07991"),l(Re,"rel","nofollow"),l(wt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(He,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(He,"rel","nofollow"),l(Ze,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(Ze,"rel","nofollow"),l(Ge,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(Ge,"rel","nofollow"),l(Xe,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Xe,"rel","nofollow"),l(Ke,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(Ke,"rel","nofollow"),l(yt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.FlaxVisionTextDualEncoderModel"),l(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,u){e(document.head,p),_(o,v,u),_(o,g,u),e(g,f),e(f,x),E(d,x,null),e(g,h),e(g,S),e(S,qo),_(o,no,u),_(o,U,u),e(U,Y),e(Y,Mt),E(_e,Mt,null),e(U,Lo),e(U,zt),e(zt,So),_(o,ao,u),_(o,k,u),e(k,No),e(k,ot),e(ot,Oo),e(k,Bo),e(k,Ct),e(Ct,Wo),e(k,Ro),e(k,nt),e(nt,Uo),e(k,Jo),e(k,at),e(at,Ho),e(k,Zo),e(k,st),e(st,Go),e(k,Xo),e(k,Ft),e(Ft,Ko),e(k,Qo),e(k,rt),e(rt,Yo),e(k,en),e(k,it),e(it,tn),e(k,on),_(o,so,u),_(o,ee,u),e(ee,nn),e(ee,xe),e(xe,an),e(ee,sn),_(o,ro,u),_(o,J,u),e(J,te),e(te,It),E(ve,It,null),e(J,rn),e(J,At),e(At,ln),_(o,io,u),_(o,M,u),E(Te,M,null),e(M,dn),e(M,B),e(B,lt),e(lt,cn),e(B,mn),e(B,dt),e(dt,pn),e(B,fn),e(B,ct),e(ct,hn),e(B,un),e(M,gn),e(M,H),e(H,_n),e(H,mt),e(mt,xn),e(H,vn),e(H,pt),e(pt,Tn),e(H,bn),e(M,En),E(oe,M,null),e(M,$n),e(M,ne),E(be,ne,null),e(ne,jn),e(ne,Ee),e(Ee,wn),e(Ee,ft),e(ft,yn),e(Ee,kn),e(M,Vn),e(M,ae),E($e,ae,null),e(ae,Dn),e(ae,je),e(je,Pn),e(je,ht),e(ht,Mn),e(je,zn),_(o,lo,u),_(o,Z,u),e(Z,se),e(se,qt),E(we,qt,null),e(Z,Cn),e(Z,Lt),e(Lt,Fn),_(o,co,u),_(o,z,u),E(ye,z,null),e(z,In),e(z,St),e(St,An),e(z,qn),e(z,C),e(C,ut),e(ut,Ln),e(C,Sn),e(C,gt),e(gt,Nn),e(C,On),e(C,_t),e(_t,Bn),e(C,Wn),e(C,Nt),e(Nt,Rn),e(C,Un),e(C,xt),e(xt,Jn),e(C,Hn),e(z,Zn),e(z,re),E(ke,re,null),e(re,Gn),e(re,Ve),e(Ve,Xn),e(Ve,vt),e(vt,Kn),e(Ve,Qn),e(z,Yn),e(z,ie),E(De,ie,null),e(ie,ea),e(ie,Pe),e(Pe,ta),e(Pe,Tt),e(Tt,oa),e(Pe,na),_(o,mo,u),_(o,G,u),e(G,le),e(le,Ot),E(Me,Ot,null),e(G,aa),e(G,Bt),e(Bt,sa),_(o,po,u),_(o,V,u),E(ze,V,null),e(V,ra),e(V,Ce),e(Ce,ia),e(Ce,bt),e(bt,la),e(Ce,da),e(V,ca),e(V,Fe),e(Fe,ma),e(Fe,Ie),e(Ie,pa),e(Fe,fa),e(V,ha),e(V,Wt),e(Wt,ua),e(V,ga),e(V,Ae),e(Ae,_a),e(Ae,Et),e(Et,xa),e(Ae,va),e(V,Ta),e(V,qe),e(qe,ba),e(qe,Le),e(Le,Ea),e(qe,$a),e(V,ja),e(V,A),E(Se,A,null),e(A,wa),e(A,X),e(X,ya),e(X,$t),e($t,ka),e(X,Va),e(X,Rt),e(Rt,Da),e(X,Pa),e(A,Ma),E(de,A,null),e(A,za),E(ce,A,null),_(o,fo,u),_(o,K,u),e(K,me),e(me,Ut),E(Ne,Ut,null),e(K,Ca),e(K,Jt),e(Jt,Fa),_(o,ho,u),_(o,y,u),E(Oe,y,null),e(y,Ia),e(y,Be),e(Be,Aa),e(Be,jt),e(jt,qa),e(Be,La),e(y,Sa),e(y,We),e(We,Na),e(We,Re),e(Re,Oa),e(We,Ba),e(y,Wa),e(y,Ht),e(Ht,Ra),e(y,Ua),e(y,Ue),e(Ue,Ja),e(Ue,wt),e(wt,Ha),e(Ue,Za),e(y,Ga),e(y,Je),e(Je,Xa),e(Je,He),e(He,Ka),e(Je,Qa),e(y,Ya),e(y,Zt),e(Zt,es),e(y,ts),e(y,N),e(N,Gt),e(Gt,Ze),e(Ze,os),e(N,ns),e(N,Xt),e(Xt,Ge),e(Ge,as),e(N,ss),e(N,Kt),e(Kt,Xe),e(Xe,rs),e(N,is),e(N,Qt),e(Qt,Ke),e(Ke,ls),e(y,ds),e(y,q),E(Qe,q,null),e(q,cs),e(q,Q),e(Q,ms),e(Q,yt),e(yt,ps),e(Q,fs),e(Q,Yt),e(Yt,hs),e(Q,us),e(q,gs),E(pe,q,null),e(q,_s),E(fe,q,null),uo=!0},p(o,[u]){const Ye={};u&2&&(Ye.$$scope={dirty:u,ctx:o}),oe.$set(Ye);const eo={};u&2&&(eo.$$scope={dirty:u,ctx:o}),de.$set(eo);const to={};u&2&&(to.$$scope={dirty:u,ctx:o}),ce.$set(to);const oo={};u&2&&(oo.$$scope={dirty:u,ctx:o}),pe.$set(oo);const et={};u&2&&(et.$$scope={dirty:u,ctx:o}),fe.$set(et)},i(o){uo||($(d.$$.fragment,o),$(_e.$$.fragment,o),$(ve.$$.fragment,o),$(Te.$$.fragment,o),$(oe.$$.fragment,o),$(be.$$.fragment,o),$($e.$$.fragment,o),$(we.$$.fragment,o),$(ye.$$.fragment,o),$(ke.$$.fragment,o),$(De.$$.fragment,o),$(Me.$$.fragment,o),$(ze.$$.fragment,o),$(Se.$$.fragment,o),$(de.$$.fragment,o),$(ce.$$.fragment,o),$(Ne.$$.fragment,o),$(Oe.$$.fragment,o),$(Qe.$$.fragment,o),$(pe.$$.fragment,o),$(fe.$$.fragment,o),uo=!0)},o(o){j(d.$$.fragment,o),j(_e.$$.fragment,o),j(ve.$$.fragment,o),j(Te.$$.fragment,o),j(oe.$$.fragment,o),j(be.$$.fragment,o),j($e.$$.fragment,o),j(we.$$.fragment,o),j(ye.$$.fragment,o),j(ke.$$.fragment,o),j(De.$$.fragment,o),j(Me.$$.fragment,o),j(ze.$$.fragment,o),j(Se.$$.fragment,o),j(de.$$.fragment,o),j(ce.$$.fragment,o),j(Ne.$$.fragment,o),j(Oe.$$.fragment,o),j(Qe.$$.fragment,o),j(pe.$$.fragment,o),j(fe.$$.fragment,o),uo=!1},d(o){t(p),o&&t(v),o&&t(g),w(d),o&&t(no),o&&t(U),w(_e),o&&t(ao),o&&t(k),o&&t(so),o&&t(ee),o&&t(ro),o&&t(J),w(ve),o&&t(io),o&&t(M),w(Te),w(oe),w(be),w($e),o&&t(lo),o&&t(Z),w(we),o&&t(co),o&&t(z),w(ye),w(ke),w(De),o&&t(mo),o&&t(G),w(Me),o&&t(po),o&&t(V),w(ze),w(Se),w(de),w(ce),o&&t(fo),o&&t(K),w(Ne),o&&t(ho),o&&t(y),w(Oe),w(Qe),w(pe),w(fe)}}}const Or={local:"visiontextdualencoder",sections:[{local:"overview",title:"Overview"},{local:"transformers.VisionTextDualEncoderConfig",title:"VisionTextDualEncoderConfig"},{local:"transformers.VisionTextDualEncoderProcessor",title:"VisionTextDualEncoderProcessor"},{local:"transformers.VisionTextDualEncoderModel",title:"VisionTextDualEncoderModel"},{local:"transformers.FlaxVisionTextDualEncoderModel",title:"FlaxVisionTextDualEncoderModel"}],title:"VisionTextDualEncoder"};function Br(I){return Fr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gr extends Pr{constructor(p){super();Mr(this,p,Br,Nr,zr,{})}}export{Gr as default,Or as metadata};
