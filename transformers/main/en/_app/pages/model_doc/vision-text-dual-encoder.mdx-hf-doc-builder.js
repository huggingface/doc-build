import{S as Pr,i as Mr,s as zr,e as n,k as c,w as T,t as r,M as Cr,c as s,d as t,m,a,x as b,h as i,b as l,G as e,g as _,y as E,q as $,o as w,B as j,v as Ir,L as xa}from"../../chunks/vendor-hf-doc-builder.js";import{T as Dr}from"../../chunks/Tip-hf-doc-builder.js";import{D as R}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ta}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Pt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as va}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ar(A){let p,x,g,f,v;return f=new Ta({props:{code:`from transformers import ViTConfig, BertConfig, VisionTextDualEncoderConfig, VisionTextDualEncoderModel

# Initializing a BERT and ViT configuration
config_vision = ViTConfig()
config_text = BertConfig()

config = VisionTextDualEncoderConfig.from_vision_text_configs(config_vision, config_text, projection_dim=512)

# Initializing a BERT and ViT model (with random weights)
model = VisionTextDualEncoderModel(config=config)

# Accessing the model configuration
config_vision = model.config.vision_config
config_text = model.config.text_config

# Saving the model, including its configuration
model.save_pretrained("vit-bert")

# loading model and config from pretrained folder
vision_text_config = VisionTextDualEncoderConfig.from_pretrained("vit-bert")
model = VisionTextDualEncoderModel.from_pretrained("vit-bert", config=vision_text_config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTConfig, BertConfig, VisionTextDualEncoderConfig, VisionTextDualEncoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BERT and ViT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_vision = ViTConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_text = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = VisionTextDualEncoderConfig.from_vision_text_configs(config_vision, config_text, projection_dim=<span class="hljs-number">512</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BERT and ViT model (with random weights)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionTextDualEncoderModel(config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_vision = model.config.vision_config
<span class="hljs-meta">&gt;&gt;&gt; </span>config_text = model.config.text_config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Saving the model, including its configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;vit-bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading model and config from pretrained folder</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>vision_text_config = VisionTextDualEncoderConfig.from_pretrained(<span class="hljs-string">&quot;vit-bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionTextDualEncoderModel.from_pretrained(<span class="hljs-string">&quot;vit-bert&quot;</span>, config=vision_text_config)`}}),{c(){p=n("p"),x=r("Examples:"),g=c(),T(f.$$.fragment)},l(d){p=s(d,"P",{});var h=a(p);x=i(h,"Examples:"),h.forEach(t),g=m(d),b(f.$$.fragment,d)},m(d,h){_(d,p,h),e(p,x),_(d,g,h),E(f,d,h),v=!0},p:xa,i(d){v||($(f.$$.fragment,d),v=!0)},o(d){w(f.$$.fragment,d),v=!1},d(d){d&&t(p),d&&t(g),j(f,d)}}}function Fr(A){let p,x,g,f,v;return{c(){p=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=s(d,"P",{});var h=a(p);x=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(h,"CODE",{});var S=a(g);f=i(S,"Module"),S.forEach(t),v=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){_(d,p,h),e(p,x),e(p,g),e(g,f),e(p,v)},d(d){d&&t(p)}}}function qr(A){let p,x,g,f,v;return f=new Ta({props:{code:`from PIL import Image
import requests
from transformers import (
    VisionTextDualEncoderModel,
    VisionTextDualEncoderProcessor,
    ViTImageProcessor,
    BertTokenizer,
)

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
image_processor = ViTImageProcessor.from_pretrained("google/vit-base-patch16-224")
processor = VisionTextDualEncoderProcessor(image_processor, tokenizer)
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
<span class="hljs-meta">... </span>    ViTImageProcessor,
<span class="hljs-meta">... </span>    BertTokenizer,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image_processor = ViTImageProcessor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = VisionTextDualEncoderProcessor(image_processor, tokenizer)
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){p=n("p"),x=r("Examples:"),g=c(),T(f.$$.fragment)},l(d){p=s(d,"P",{});var h=a(p);x=i(h,"Examples:"),h.forEach(t),g=m(d),b(f.$$.fragment,d)},m(d,h){_(d,p,h),e(p,x),_(d,g,h),E(f,d,h),v=!0},p:xa,i(d){v||($(f.$$.fragment,d),v=!0)},o(d){w(f.$$.fragment,d),v=!1},d(d){d&&t(p),d&&t(g),j(f,d)}}}function Lr(A){let p,x,g,f,v;return{c(){p=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=s(d,"P",{});var h=a(p);x=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(h,"CODE",{});var S=a(g);f=i(S,"Module"),S.forEach(t),v=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){_(d,p,h),e(p,x),e(p,g),e(g,f),e(p,v)},d(d){d&&t(p)}}}function Sr(A){let p,x,g,f,v;return f=new Ta({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){p=n("p"),x=r("Examples:"),g=c(),T(f.$$.fragment)},l(d){p=s(d,"P",{});var h=a(p);x=i(h,"Examples:"),h.forEach(t),g=m(d),b(f.$$.fragment,d)},m(d,h){_(d,p,h),e(p,x),_(d,g,h),E(f,d,h),v=!0},p:xa,i(d){v||($(f.$$.fragment,d),v=!0)},o(d){w(f.$$.fragment,d),v=!1},d(d){d&&t(p),d&&t(g),j(f,d)}}}function Nr(A){let p,x,g,f,v,d,h,S,qo,no,U,Y,Mt,_e,Lo,zt,So,so,k,No,ot,Bo,Oo,Ct,Wo,Ro,nt,Uo,Jo,st,Ho,Zo,at,Go,Xo,It,Ko,Qo,rt,Yo,en,it,tn,on,ao,ee,nn,ve,sn,an,ro,J,te,At,xe,rn,Ft,ln,io,M,Te,dn,O,lt,cn,mn,dt,pn,fn,ct,hn,un,gn,H,_n,mt,vn,xn,pt,Tn,bn,En,oe,$n,ne,be,wn,Ee,jn,ft,yn,kn,Vn,se,$e,Dn,we,Pn,ht,Mn,zn,lo,Z,ae,qt,je,Cn,Lt,In,co,z,ye,An,St,Fn,qn,C,ut,Ln,Sn,gt,Nn,Bn,_t,On,Wn,Nt,Rn,Un,vt,Jn,Hn,Zn,re,ke,Gn,Ve,Xn,xt,Kn,Qn,Yn,ie,De,es,Pe,ts,Tt,os,ns,mo,G,le,Bt,Me,ss,Ot,as,po,V,ze,rs,Ce,is,bt,ls,ds,cs,Ie,ms,Ae,ps,fs,hs,Wt,us,gs,Fe,_s,Et,vs,xs,Ts,qe,bs,Le,Es,$s,ws,F,Se,js,X,ys,$t,ks,Vs,Rt,Ds,Ps,Ms,de,zs,ce,fo,K,me,Ut,Ne,Cs,Jt,Is,ho,y,Be,As,Oe,Fs,wt,qs,Ls,Ss,We,Ns,Re,Bs,Os,Ws,Ht,Rs,Us,Ue,Js,jt,Hs,Zs,Gs,Je,Xs,He,Ks,Qs,Ys,Zt,ea,ta,N,Gt,Ze,oa,na,Xt,Ge,sa,aa,Kt,Xe,ra,ia,Qt,Ke,la,da,q,Qe,ca,Q,ma,yt,pa,fa,Yt,ha,ua,ga,pe,_a,fe,uo;return d=new Pt({}),_e=new Pt({}),xe=new Pt({}),Te=new R({props:{name:"class transformers.VisionTextDualEncoderConfig",anchor:"transformers.VisionTextDualEncoderConfig",parameters:[{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionTextDualEncoderConfig.text_config",description:`<strong>text_config</strong> (<code>dict</code>) &#x2014;
Dictionary of configuration options that defines text model config.`,name:"text_config"},{anchor:"transformers.VisionTextDualEncoderConfig.vision_config",description:`<strong>vision_config</strong> (<code>dict</code>) &#x2014;
Dictionary of configuration options that defines vison model config.`,name:"vision_config"},{anchor:"transformers.VisionTextDualEncoderConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.VisionTextDualEncoderConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.VisionTextDualEncoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L28"}}),oe=new va({props:{anchor:"transformers.VisionTextDualEncoderConfig.example",$$slots:{default:[Ar]},$$scope:{ctx:A}}}),be=new R({props:{name:"from_vision_text_configs",anchor:"transformers.VisionTextDualEncoderConfig.from_vision_text_configs",parameters:[{name:"vision_config",val:": PretrainedConfig"},{name:"text_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L105",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"
>VisionTextDualEncoderConfig</a></p>
`}}),$e=new R({props:{name:"to_dict",anchor:"transformers.VisionTextDualEncoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L117",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),je=new Pt({}),ye=new R({props:{name:"class transformers.VisionTextDualEncoderProcessor",anchor:"transformers.VisionTextDualEncoderProcessor",parameters:[{name:"image_processor",val:" = None"},{name:"tokenizer",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionTextDualEncoderProcessor.image_processor",description:`<strong>image_processor</strong> (<a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>) &#x2014;
The image processor is a required input.`,name:"image_processor"},{anchor:"transformers.VisionTextDualEncoderProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L25"}}),ke=new R({props:{name:"batch_decode",anchor:"transformers.VisionTextDualEncoderProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L115"}}),De=new R({props:{name:"decode",anchor:"transformers.VisionTextDualEncoderProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L122"}}),Me=new Pt({}),ze=new R({props:{name:"class transformers.VisionTextDualEncoderModel",anchor:"transformers.VisionTextDualEncoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.models.vision_text_dual_encoder.configuration_vision_text_dual_encoder.VisionTextDualEncoderConfig] = None"},{name:"vision_model",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"text_model",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],parametersDescription:[{anchor:"transformers.VisionTextDualEncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vision_text_dual_encoder/modeling_vision_text_dual_encoder.py#L162"}}),Se=new R({props:{name:"forward",anchor:"transformers.VisionTextDualEncoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"return_loss",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.VisionTextDualEncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
an image processor (e.g. if you use ViT as the encoder, you should use <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTImageProcessor">ViTImageProcessor</a>). See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">ViTImageProcessor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VisionTextDualEncoderModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
`}}),de=new Dr({props:{$$slots:{default:[Fr]},$$scope:{ctx:A}}}),ce=new va({props:{anchor:"transformers.VisionTextDualEncoderModel.forward.example",$$slots:{default:[qr]},$$scope:{ctx:A}}}),Ne=new Pt({}),Be=new R({props:{name:"class transformers.FlaxVisionTextDualEncoderModel",anchor:"transformers.FlaxVisionTextDualEncoderModel",parameters:[{name:"config",val:": VisionTextDualEncoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxVisionTextDualEncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig">VisionTextDualEncoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
a feature extractor (e.g. if you use ViT as the encoder, you should use <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTImageProcessor">ViTFeatureExtractor</a>). See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
`}}),pe=new Dr({props:{$$slots:{default:[Lr]},$$scope:{ctx:A}}}),fe=new va({props:{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.example",$$slots:{default:[Sr]},$$scope:{ctx:A}}}),{c(){p=n("meta"),x=c(),g=n("h1"),f=n("a"),v=n("span"),T(d.$$.fragment),h=c(),S=n("span"),qo=r("VisionTextDualEncoder"),no=c(),U=n("h2"),Y=n("a"),Mt=n("span"),T(_e.$$.fragment),Lo=c(),zt=n("span"),So=r("Overview"),so=c(),k=n("p"),No=r("The "),ot=n("a"),Bo=r("VisionTextDualEncoderModel"),Oo=r(` can be used to initialize a vision-text dual encoder model with
any pretrained vision autoencoding model as the vision encoder (`),Ct=n("em"),Wo=r("e.g."),Ro=c(),nt=n("a"),Uo=r("ViT"),Jo=r(", "),st=n("a"),Ho=r("BEiT"),Zo=r(", "),at=n("a"),Go=r("DeiT"),Xo=r(") and any pretrained text autoencoding model as the text encoder ("),It=n("em"),Ko=r("e.g."),Qo=c(),rt=n("a"),Yo=r("RoBERTa"),en=r(", "),it=n("a"),tn=r("BERT"),on=r(`). Two projection layers are added on top of both the vision and text encoder to project the output embeddings
to a shared latent space. The projection layers are randomly initialized so the model should be fine-tuned on a
downstream task. This model can be used to align the vision-text embeddings using CLIP like contrastive image-text
training and then can be used for zero-shot vision tasks such image-classification or retrieval.`),ao=c(),ee=n("p"),nn=r("In "),ve=n("a"),sn=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),an=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvement on
new zero-shot vision tasks such as image classification or retrieval.`),ro=c(),J=n("h2"),te=n("a"),At=n("span"),T(xe.$$.fragment),rn=c(),Ft=n("span"),ln=r("VisionTextDualEncoderConfig"),io=c(),M=n("div"),T(Te.$$.fragment),dn=c(),O=n("p"),lt=n("a"),cn=r("VisionTextDualEncoderConfig"),mn=r(` is the configuration class to store the configuration of a
`),dt=n("a"),pn=r("VisionTextDualEncoderModel"),fn=r(". It is used to instantiate "),ct=n("a"),hn=r("VisionTextDualEncoderModel"),un=r(` model according to the
specified arguments, defining the text model and vision model configs.`),gn=c(),H=n("p"),_n=r("Configuration objects inherit from "),mt=n("a"),vn=r("PretrainedConfig"),xn=r(` and can be used to control the model outputs. Read the
documentation from `),pt=n("a"),Tn=r("PretrainedConfig"),bn=r(" for more information."),En=c(),T(oe.$$.fragment),$n=c(),ne=n("div"),T(be.$$.fragment),wn=c(),Ee=n("p"),jn=r("Instantiate a "),ft=n("a"),yn=r("VisionTextDualEncoderConfig"),kn=r(` (or a derived class) from text model configuration and vision
model configuration.`),Vn=c(),se=n("div"),T($e.$$.fragment),Dn=c(),we=n("p"),Pn=r("Serializes this instance to a Python dictionary. Override the default "),ht=n("a"),Mn=r("to_dict()"),zn=r("."),lo=c(),Z=n("h2"),ae=n("a"),qt=n("span"),T(je.$$.fragment),Cn=c(),Lt=n("span"),In=r("VisionTextDualEncoderProcessor"),co=c(),z=n("div"),T(ye.$$.fragment),An=c(),St=n("p"),Fn=r(`Constructs a VisionTextDualEncoder processor which wraps an image processor and a tokenizer into a single
processor.`),qn=c(),C=n("p"),ut=n("a"),Ln=r("VisionTextDualEncoderProcessor"),Sn=r(" offers all the functionalities of "),gt=n("a"),Nn=r("AutoImageProcessor"),Bn=r(" and "),_t=n("a"),On=r("AutoTokenizer"),Wn=r(`.
See the `),Nt=n("code"),Rn=r("__call__()"),Un=r(" and "),vt=n("a"),Jn=r("decode()"),Hn=r(` for more
information.`),Zn=c(),re=n("div"),T(ke.$$.fragment),Gn=c(),Ve=n("p"),Xn=r(`This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s
`),xt=n("a"),Kn=r("batch_decode()"),Qn=r(". Please refer to the docstring of this method for more information."),Yn=c(),ie=n("div"),T(De.$$.fragment),es=c(),Pe=n("p"),ts=r("This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s "),Tt=n("a"),os=r("decode()"),ns=r(`.
Please refer to the docstring of this method for more information.`),mo=c(),G=n("h2"),le=n("a"),Bt=n("span"),T(Me.$$.fragment),ss=c(),Ot=n("span"),as=r("VisionTextDualEncoderModel"),po=c(),V=n("div"),T(ze.$$.fragment),rs=c(),Ce=n("p"),is=r(`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),bt=n("a"),ls=r("from_pretrained()"),ds=r(` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),cs=c(),Ie=n("p"),ms=r("In "),Ae=n("a"),ps=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),fs=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),hs=c(),Wt=n("p"),us=r(`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),gs=c(),Fe=n("p"),_s=r("This model inherits from "),Et=n("a"),vs=r("PreTrainedModel"),xs=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ts=c(),qe=n("p"),bs=r("This model is also a PyTorch "),Le=n("a"),Es=r("torch.nn.Module"),$s=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ws=c(),F=n("div"),T(Se.$$.fragment),js=c(),X=n("p"),ys=r("The "),$t=n("a"),ks=r("VisionTextDualEncoderModel"),Vs=r(" forward method, overrides the "),Rt=n("code"),Ds=r("__call__"),Ps=r(" special method."),Ms=c(),T(de.$$.fragment),zs=c(),T(ce.$$.fragment),fo=c(),K=n("h2"),me=n("a"),Ut=n("span"),T(Ne.$$.fragment),Cs=c(),Jt=n("span"),Is=r("FlaxVisionTextDualEncoderModel"),ho=c(),y=n("div"),T(Be.$$.fragment),As=c(),Oe=n("p"),Fs=r(`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),wt=n("a"),qs=r("from_pretrained()"),Ls=r(` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Ss=c(),We=n("p"),Ns=r("In "),Re=n("a"),Bs=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),Os=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Ws=c(),Ht=n("p"),Rs=r(`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Us=c(),Ue=n("p"),Js=r("This model inherits from "),jt=n("a"),Hs=r("PreTrainedModel"),Zs=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gs=c(),Je=n("p"),Xs=r("This model is also a Flax Linen "),He=n("a"),Ks=r("flax.linen.Module"),Qs=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ys=c(),Zt=n("p"),ea=r("Finally, this model supports inherent JAX features such as:"),ta=c(),N=n("ul"),Gt=n("li"),Ze=n("a"),oa=r("Just-In-Time (JIT) compilation"),na=c(),Xt=n("li"),Ge=n("a"),sa=r("Automatic Differentiation"),aa=c(),Kt=n("li"),Xe=n("a"),ra=r("Vectorization"),ia=c(),Qt=n("li"),Ke=n("a"),la=r("Parallelization"),da=c(),q=n("div"),T(Qe.$$.fragment),ca=c(),Q=n("p"),ma=r("The "),yt=n("a"),pa=r("FlaxVisionTextDualEncoderModel"),fa=r(" forward method, overrides the "),Yt=n("code"),ha=r("__call__"),ua=r(" special method."),ga=c(),T(pe.$$.fragment),_a=c(),T(fe.$$.fragment),this.h()},l(o){const u=Cr('[data-svelte="svelte-1phssyn"]',document.head);p=s(u,"META",{name:!0,content:!0}),u.forEach(t),x=m(o),g=s(o,"H1",{class:!0});var Ye=a(g);f=s(Ye,"A",{id:!0,class:!0,href:!0});var eo=a(f);v=s(eo,"SPAN",{});var to=a(v);b(d.$$.fragment,to),to.forEach(t),eo.forEach(t),h=m(Ye),S=s(Ye,"SPAN",{});var oo=a(S);qo=i(oo,"VisionTextDualEncoder"),oo.forEach(t),Ye.forEach(t),no=m(o),U=s(o,"H2",{class:!0});var et=a(U);Y=s(et,"A",{id:!0,class:!0,href:!0});var ba=a(Y);Mt=s(ba,"SPAN",{});var Ea=a(Mt);b(_e.$$.fragment,Ea),Ea.forEach(t),ba.forEach(t),Lo=m(et),zt=s(et,"SPAN",{});var $a=a(zt);So=i($a,"Overview"),$a.forEach(t),et.forEach(t),so=m(o),k=s(o,"P",{});var D=a(k);No=i(D,"The "),ot=s(D,"A",{href:!0});var wa=a(ot);Bo=i(wa,"VisionTextDualEncoderModel"),wa.forEach(t),Oo=i(D,` can be used to initialize a vision-text dual encoder model with
any pretrained vision autoencoding model as the vision encoder (`),Ct=s(D,"EM",{});var ja=a(Ct);Wo=i(ja,"e.g."),ja.forEach(t),Ro=m(D),nt=s(D,"A",{href:!0});var ya=a(nt);Uo=i(ya,"ViT"),ya.forEach(t),Jo=i(D,", "),st=s(D,"A",{href:!0});var ka=a(st);Ho=i(ka,"BEiT"),ka.forEach(t),Zo=i(D,", "),at=s(D,"A",{href:!0});var Va=a(at);Go=i(Va,"DeiT"),Va.forEach(t),Xo=i(D,") and any pretrained text autoencoding model as the text encoder ("),It=s(D,"EM",{});var Da=a(It);Ko=i(Da,"e.g."),Da.forEach(t),Qo=m(D),rt=s(D,"A",{href:!0});var Pa=a(rt);Yo=i(Pa,"RoBERTa"),Pa.forEach(t),en=i(D,", "),it=s(D,"A",{href:!0});var Ma=a(it);tn=i(Ma,"BERT"),Ma.forEach(t),on=i(D,`). Two projection layers are added on top of both the vision and text encoder to project the output embeddings
to a shared latent space. The projection layers are randomly initialized so the model should be fine-tuned on a
downstream task. This model can be used to align the vision-text embeddings using CLIP like contrastive image-text
training and then can be used for zero-shot vision tasks such image-classification or retrieval.`),D.forEach(t),ao=m(o),ee=s(o,"P",{});var go=a(ee);nn=i(go,"In "),ve=s(go,"A",{href:!0,rel:!0});var za=a(ve);sn=i(za,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),za.forEach(t),an=i(go,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvement on
new zero-shot vision tasks such as image classification or retrieval.`),go.forEach(t),ro=m(o),J=s(o,"H2",{class:!0});var _o=a(J);te=s(_o,"A",{id:!0,class:!0,href:!0});var Ca=a(te);At=s(Ca,"SPAN",{});var Ia=a(At);b(xe.$$.fragment,Ia),Ia.forEach(t),Ca.forEach(t),rn=m(_o),Ft=s(_o,"SPAN",{});var Aa=a(Ft);ln=i(Aa,"VisionTextDualEncoderConfig"),Aa.forEach(t),_o.forEach(t),io=m(o),M=s(o,"DIV",{class:!0});var L=a(M);b(Te.$$.fragment,L),dn=m(L),O=s(L,"P",{});var tt=a(O);lt=s(tt,"A",{href:!0});var Fa=a(lt);cn=i(Fa,"VisionTextDualEncoderConfig"),Fa.forEach(t),mn=i(tt,` is the configuration class to store the configuration of a
`),dt=s(tt,"A",{href:!0});var qa=a(dt);pn=i(qa,"VisionTextDualEncoderModel"),qa.forEach(t),fn=i(tt,". It is used to instantiate "),ct=s(tt,"A",{href:!0});var La=a(ct);hn=i(La,"VisionTextDualEncoderModel"),La.forEach(t),un=i(tt,` model according to the
specified arguments, defining the text model and vision model configs.`),tt.forEach(t),gn=m(L),H=s(L,"P",{});var kt=a(H);_n=i(kt,"Configuration objects inherit from "),mt=s(kt,"A",{href:!0});var Sa=a(mt);vn=i(Sa,"PretrainedConfig"),Sa.forEach(t),xn=i(kt,` and can be used to control the model outputs. Read the
documentation from `),pt=s(kt,"A",{href:!0});var Na=a(pt);Tn=i(Na,"PretrainedConfig"),Na.forEach(t),bn=i(kt," for more information."),kt.forEach(t),En=m(L),b(oe.$$.fragment,L),$n=m(L),ne=s(L,"DIV",{class:!0});var vo=a(ne);b(be.$$.fragment,vo),wn=m(vo),Ee=s(vo,"P",{});var xo=a(Ee);jn=i(xo,"Instantiate a "),ft=s(xo,"A",{href:!0});var Ba=a(ft);yn=i(Ba,"VisionTextDualEncoderConfig"),Ba.forEach(t),kn=i(xo,` (or a derived class) from text model configuration and vision
model configuration.`),xo.forEach(t),vo.forEach(t),Vn=m(L),se=s(L,"DIV",{class:!0});var To=a(se);b($e.$$.fragment,To),Dn=m(To),we=s(To,"P",{});var bo=a(we);Pn=i(bo,"Serializes this instance to a Python dictionary. Override the default "),ht=s(bo,"A",{href:!0});var Oa=a(ht);Mn=i(Oa,"to_dict()"),Oa.forEach(t),zn=i(bo,"."),bo.forEach(t),To.forEach(t),L.forEach(t),lo=m(o),Z=s(o,"H2",{class:!0});var Eo=a(Z);ae=s(Eo,"A",{id:!0,class:!0,href:!0});var Wa=a(ae);qt=s(Wa,"SPAN",{});var Ra=a(qt);b(je.$$.fragment,Ra),Ra.forEach(t),Wa.forEach(t),Cn=m(Eo),Lt=s(Eo,"SPAN",{});var Ua=a(Lt);In=i(Ua,"VisionTextDualEncoderProcessor"),Ua.forEach(t),Eo.forEach(t),co=m(o),z=s(o,"DIV",{class:!0});var W=a(z);b(ye.$$.fragment,W),An=m(W),St=s(W,"P",{});var Ja=a(St);Fn=i(Ja,`Constructs a VisionTextDualEncoder processor which wraps an image processor and a tokenizer into a single
processor.`),Ja.forEach(t),qn=m(W),C=s(W,"P",{});var B=a(C);ut=s(B,"A",{href:!0});var Ha=a(ut);Ln=i(Ha,"VisionTextDualEncoderProcessor"),Ha.forEach(t),Sn=i(B," offers all the functionalities of "),gt=s(B,"A",{href:!0});var Za=a(gt);Nn=i(Za,"AutoImageProcessor"),Za.forEach(t),Bn=i(B," and "),_t=s(B,"A",{href:!0});var Ga=a(_t);On=i(Ga,"AutoTokenizer"),Ga.forEach(t),Wn=i(B,`.
See the `),Nt=s(B,"CODE",{});var Xa=a(Nt);Rn=i(Xa,"__call__()"),Xa.forEach(t),Un=i(B," and "),vt=s(B,"A",{href:!0});var Ka=a(vt);Jn=i(Ka,"decode()"),Ka.forEach(t),Hn=i(B,` for more
information.`),B.forEach(t),Zn=m(W),re=s(W,"DIV",{class:!0});var $o=a(re);b(ke.$$.fragment,$o),Gn=m($o),Ve=s($o,"P",{});var wo=a(Ve);Xn=i(wo,`This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s
`),xt=s(wo,"A",{href:!0});var Qa=a(xt);Kn=i(Qa,"batch_decode()"),Qa.forEach(t),Qn=i(wo,". Please refer to the docstring of this method for more information."),wo.forEach(t),$o.forEach(t),Yn=m(W),ie=s(W,"DIV",{class:!0});var jo=a(ie);b(De.$$.fragment,jo),es=m(jo),Pe=s(jo,"P",{});var yo=a(Pe);ts=i(yo,"This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s "),Tt=s(yo,"A",{href:!0});var Ya=a(Tt);os=i(Ya,"decode()"),Ya.forEach(t),ns=i(yo,`.
Please refer to the docstring of this method for more information.`),yo.forEach(t),jo.forEach(t),W.forEach(t),mo=m(o),G=s(o,"H2",{class:!0});var ko=a(G);le=s(ko,"A",{id:!0,class:!0,href:!0});var er=a(le);Bt=s(er,"SPAN",{});var tr=a(Bt);b(Me.$$.fragment,tr),tr.forEach(t),er.forEach(t),ss=m(ko),Ot=s(ko,"SPAN",{});var or=a(Ot);as=i(or,"VisionTextDualEncoderModel"),or.forEach(t),ko.forEach(t),po=m(o),V=s(o,"DIV",{class:!0});var I=a(V);b(ze.$$.fragment,I),rs=m(I),Ce=s(I,"P",{});var Vo=a(Ce);is=i(Vo,`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),bt=s(Vo,"A",{href:!0});var nr=a(bt);ls=i(nr,"from_pretrained()"),nr.forEach(t),ds=i(Vo,` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Vo.forEach(t),cs=m(I),Ie=s(I,"P",{});var Do=a(Ie);ms=i(Do,"In "),Ae=s(Do,"A",{href:!0,rel:!0});var sr=a(Ae);ps=i(sr,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),sr.forEach(t),fs=i(Do,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Do.forEach(t),hs=m(I),Wt=s(I,"P",{});var ar=a(Wt);us=i(ar,`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),ar.forEach(t),gs=m(I),Fe=s(I,"P",{});var Po=a(Fe);_s=i(Po,"This model inherits from "),Et=s(Po,"A",{href:!0});var rr=a(Et);vs=i(rr,"PreTrainedModel"),rr.forEach(t),xs=i(Po,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Po.forEach(t),Ts=m(I),qe=s(I,"P",{});var Mo=a(qe);bs=i(Mo,"This model is also a PyTorch "),Le=s(Mo,"A",{href:!0,rel:!0});var ir=a(Le);Es=i(ir,"torch.nn.Module"),ir.forEach(t),$s=i(Mo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mo.forEach(t),ws=m(I),F=s(I,"DIV",{class:!0});var he=a(F);b(Se.$$.fragment,he),js=m(he),X=s(he,"P",{});var Vt=a(X);ys=i(Vt,"The "),$t=s(Vt,"A",{href:!0});var lr=a($t);ks=i(lr,"VisionTextDualEncoderModel"),lr.forEach(t),Vs=i(Vt," forward method, overrides the "),Rt=s(Vt,"CODE",{});var dr=a(Rt);Ds=i(dr,"__call__"),dr.forEach(t),Ps=i(Vt," special method."),Vt.forEach(t),Ms=m(he),b(de.$$.fragment,he),zs=m(he),b(ce.$$.fragment,he),he.forEach(t),I.forEach(t),fo=m(o),K=s(o,"H2",{class:!0});var zo=a(K);me=s(zo,"A",{id:!0,class:!0,href:!0});var cr=a(me);Ut=s(cr,"SPAN",{});var mr=a(Ut);b(Ne.$$.fragment,mr),mr.forEach(t),cr.forEach(t),Cs=m(zo),Jt=s(zo,"SPAN",{});var pr=a(Jt);Is=i(pr,"FlaxVisionTextDualEncoderModel"),pr.forEach(t),zo.forEach(t),ho=m(o),y=s(o,"DIV",{class:!0});var P=a(y);b(Be.$$.fragment,P),As=m(P),Oe=s(P,"P",{});var Co=a(Oe);Fs=i(Co,`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),wt=s(Co,"A",{href:!0});var fr=a(wt);qs=i(fr,"from_pretrained()"),fr.forEach(t),Ls=i(Co,` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Co.forEach(t),Ss=m(P),We=s(P,"P",{});var Io=a(We);Ns=i(Io,"In "),Re=s(Io,"A",{href:!0,rel:!0});var hr=a(Re);Bs=i(hr,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),hr.forEach(t),Os=i(Io,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Io.forEach(t),Ws=m(P),Ht=s(P,"P",{});var ur=a(Ht);Rs=i(ur,`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),ur.forEach(t),Us=m(P),Ue=s(P,"P",{});var Ao=a(Ue);Js=i(Ao,"This model inherits from "),jt=s(Ao,"A",{href:!0});var gr=a(jt);Hs=i(gr,"PreTrainedModel"),gr.forEach(t),Zs=i(Ao,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ao.forEach(t),Gs=m(P),Je=s(P,"P",{});var Fo=a(Je);Xs=i(Fo,"This model is also a Flax Linen "),He=s(Fo,"A",{href:!0,rel:!0});var _r=a(He);Ks=i(_r,"flax.linen.Module"),_r.forEach(t),Qs=i(Fo,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fo.forEach(t),Ys=m(P),Zt=s(P,"P",{});var vr=a(Zt);ea=i(vr,"Finally, this model supports inherent JAX features such as:"),vr.forEach(t),ta=m(P),N=s(P,"UL",{});var ue=a(N);Gt=s(ue,"LI",{});var xr=a(Gt);Ze=s(xr,"A",{href:!0,rel:!0});var Tr=a(Ze);oa=i(Tr,"Just-In-Time (JIT) compilation"),Tr.forEach(t),xr.forEach(t),na=m(ue),Xt=s(ue,"LI",{});var br=a(Xt);Ge=s(br,"A",{href:!0,rel:!0});var Er=a(Ge);sa=i(Er,"Automatic Differentiation"),Er.forEach(t),br.forEach(t),aa=m(ue),Kt=s(ue,"LI",{});var $r=a(Kt);Xe=s($r,"A",{href:!0,rel:!0});var wr=a(Xe);ra=i(wr,"Vectorization"),wr.forEach(t),$r.forEach(t),ia=m(ue),Qt=s(ue,"LI",{});var jr=a(Qt);Ke=s(jr,"A",{href:!0,rel:!0});var yr=a(Ke);la=i(yr,"Parallelization"),yr.forEach(t),jr.forEach(t),ue.forEach(t),da=m(P),q=s(P,"DIV",{class:!0});var ge=a(q);b(Qe.$$.fragment,ge),ca=m(ge),Q=s(ge,"P",{});var Dt=a(Q);ma=i(Dt,"The "),yt=s(Dt,"A",{href:!0});var kr=a(yt);pa=i(kr,"FlaxVisionTextDualEncoderModel"),kr.forEach(t),fa=i(Dt," forward method, overrides the "),Yt=s(Dt,"CODE",{});var Vr=a(Yt);ha=i(Vr,"__call__"),Vr.forEach(t),ua=i(Dt," special method."),Dt.forEach(t),ga=m(ge),b(pe.$$.fragment,ge),_a=m(ge),b(fe.$$.fragment,ge),ge.forEach(t),P.forEach(t),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(Br)),l(f,"id","visiontextdualencoder"),l(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(f,"href","#visiontextdualencoder"),l(g,"class","relative group"),l(Y,"id","overview"),l(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Y,"href","#overview"),l(U,"class","relative group"),l(ot,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(nt,"href","vit"),l(st,"href","beit"),l(at,"href","deit"),l(rt,"href","roberta"),l(it,"href","bert"),l(ve,"href","https://arxiv.org/abs/2111.07991"),l(ve,"rel","nofollow"),l(te,"id","transformers.VisionTextDualEncoderConfig"),l(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(te,"href","#transformers.VisionTextDualEncoderConfig"),l(J,"class","relative group"),l(lt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"),l(dt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(ct,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(mt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(pt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(ft,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"),l(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ht,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig.to_dict"),l(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ae,"id","transformers.VisionTextDualEncoderProcessor"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.VisionTextDualEncoderProcessor"),l(Z,"class","relative group"),l(ut,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderProcessor"),l(gt,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoImageProcessor"),l(_t,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer"),l(vt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderProcessor.decode"),l(xt,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),l(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Tt,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),l(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(le,"id","transformers.VisionTextDualEncoderModel"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.VisionTextDualEncoderModel"),l(G,"class","relative group"),l(bt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Ae,"href","https://arxiv.org/abs/2111.07991"),l(Ae,"rel","nofollow"),l(Et,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Le,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Le,"rel","nofollow"),l($t,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(me,"id","transformers.FlaxVisionTextDualEncoderModel"),l(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(me,"href","#transformers.FlaxVisionTextDualEncoderModel"),l(K,"class","relative group"),l(wt,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Re,"href","https://arxiv.org/abs/2111.07991"),l(Re,"rel","nofollow"),l(jt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(He,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(He,"rel","nofollow"),l(Ze,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(Ze,"rel","nofollow"),l(Ge,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(Ge,"rel","nofollow"),l(Xe,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Xe,"rel","nofollow"),l(Ke,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(Ke,"rel","nofollow"),l(yt,"href","/docs/transformers/main/en/model_doc/vision-text-dual-encoder#transformers.FlaxVisionTextDualEncoderModel"),l(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,u){e(document.head,p),_(o,x,u),_(o,g,u),e(g,f),e(f,v),E(d,v,null),e(g,h),e(g,S),e(S,qo),_(o,no,u),_(o,U,u),e(U,Y),e(Y,Mt),E(_e,Mt,null),e(U,Lo),e(U,zt),e(zt,So),_(o,so,u),_(o,k,u),e(k,No),e(k,ot),e(ot,Bo),e(k,Oo),e(k,Ct),e(Ct,Wo),e(k,Ro),e(k,nt),e(nt,Uo),e(k,Jo),e(k,st),e(st,Ho),e(k,Zo),e(k,at),e(at,Go),e(k,Xo),e(k,It),e(It,Ko),e(k,Qo),e(k,rt),e(rt,Yo),e(k,en),e(k,it),e(it,tn),e(k,on),_(o,ao,u),_(o,ee,u),e(ee,nn),e(ee,ve),e(ve,sn),e(ee,an),_(o,ro,u),_(o,J,u),e(J,te),e(te,At),E(xe,At,null),e(J,rn),e(J,Ft),e(Ft,ln),_(o,io,u),_(o,M,u),E(Te,M,null),e(M,dn),e(M,O),e(O,lt),e(lt,cn),e(O,mn),e(O,dt),e(dt,pn),e(O,fn),e(O,ct),e(ct,hn),e(O,un),e(M,gn),e(M,H),e(H,_n),e(H,mt),e(mt,vn),e(H,xn),e(H,pt),e(pt,Tn),e(H,bn),e(M,En),E(oe,M,null),e(M,$n),e(M,ne),E(be,ne,null),e(ne,wn),e(ne,Ee),e(Ee,jn),e(Ee,ft),e(ft,yn),e(Ee,kn),e(M,Vn),e(M,se),E($e,se,null),e(se,Dn),e(se,we),e(we,Pn),e(we,ht),e(ht,Mn),e(we,zn),_(o,lo,u),_(o,Z,u),e(Z,ae),e(ae,qt),E(je,qt,null),e(Z,Cn),e(Z,Lt),e(Lt,In),_(o,co,u),_(o,z,u),E(ye,z,null),e(z,An),e(z,St),e(St,Fn),e(z,qn),e(z,C),e(C,ut),e(ut,Ln),e(C,Sn),e(C,gt),e(gt,Nn),e(C,Bn),e(C,_t),e(_t,On),e(C,Wn),e(C,Nt),e(Nt,Rn),e(C,Un),e(C,vt),e(vt,Jn),e(C,Hn),e(z,Zn),e(z,re),E(ke,re,null),e(re,Gn),e(re,Ve),e(Ve,Xn),e(Ve,xt),e(xt,Kn),e(Ve,Qn),e(z,Yn),e(z,ie),E(De,ie,null),e(ie,es),e(ie,Pe),e(Pe,ts),e(Pe,Tt),e(Tt,os),e(Pe,ns),_(o,mo,u),_(o,G,u),e(G,le),e(le,Bt),E(Me,Bt,null),e(G,ss),e(G,Ot),e(Ot,as),_(o,po,u),_(o,V,u),E(ze,V,null),e(V,rs),e(V,Ce),e(Ce,is),e(Ce,bt),e(bt,ls),e(Ce,ds),e(V,cs),e(V,Ie),e(Ie,ms),e(Ie,Ae),e(Ae,ps),e(Ie,fs),e(V,hs),e(V,Wt),e(Wt,us),e(V,gs),e(V,Fe),e(Fe,_s),e(Fe,Et),e(Et,vs),e(Fe,xs),e(V,Ts),e(V,qe),e(qe,bs),e(qe,Le),e(Le,Es),e(qe,$s),e(V,ws),e(V,F),E(Se,F,null),e(F,js),e(F,X),e(X,ys),e(X,$t),e($t,ks),e(X,Vs),e(X,Rt),e(Rt,Ds),e(X,Ps),e(F,Ms),E(de,F,null),e(F,zs),E(ce,F,null),_(o,fo,u),_(o,K,u),e(K,me),e(me,Ut),E(Ne,Ut,null),e(K,Cs),e(K,Jt),e(Jt,Is),_(o,ho,u),_(o,y,u),E(Be,y,null),e(y,As),e(y,Oe),e(Oe,Fs),e(Oe,wt),e(wt,qs),e(Oe,Ls),e(y,Ss),e(y,We),e(We,Ns),e(We,Re),e(Re,Bs),e(We,Os),e(y,Ws),e(y,Ht),e(Ht,Rs),e(y,Us),e(y,Ue),e(Ue,Js),e(Ue,jt),e(jt,Hs),e(Ue,Zs),e(y,Gs),e(y,Je),e(Je,Xs),e(Je,He),e(He,Ks),e(Je,Qs),e(y,Ys),e(y,Zt),e(Zt,ea),e(y,ta),e(y,N),e(N,Gt),e(Gt,Ze),e(Ze,oa),e(N,na),e(N,Xt),e(Xt,Ge),e(Ge,sa),e(N,aa),e(N,Kt),e(Kt,Xe),e(Xe,ra),e(N,ia),e(N,Qt),e(Qt,Ke),e(Ke,la),e(y,da),e(y,q),E(Qe,q,null),e(q,ca),e(q,Q),e(Q,ma),e(Q,yt),e(yt,pa),e(Q,fa),e(Q,Yt),e(Yt,ha),e(Q,ua),e(q,ga),E(pe,q,null),e(q,_a),E(fe,q,null),uo=!0},p(o,[u]){const Ye={};u&2&&(Ye.$$scope={dirty:u,ctx:o}),oe.$set(Ye);const eo={};u&2&&(eo.$$scope={dirty:u,ctx:o}),de.$set(eo);const to={};u&2&&(to.$$scope={dirty:u,ctx:o}),ce.$set(to);const oo={};u&2&&(oo.$$scope={dirty:u,ctx:o}),pe.$set(oo);const et={};u&2&&(et.$$scope={dirty:u,ctx:o}),fe.$set(et)},i(o){uo||($(d.$$.fragment,o),$(_e.$$.fragment,o),$(xe.$$.fragment,o),$(Te.$$.fragment,o),$(oe.$$.fragment,o),$(be.$$.fragment,o),$($e.$$.fragment,o),$(je.$$.fragment,o),$(ye.$$.fragment,o),$(ke.$$.fragment,o),$(De.$$.fragment,o),$(Me.$$.fragment,o),$(ze.$$.fragment,o),$(Se.$$.fragment,o),$(de.$$.fragment,o),$(ce.$$.fragment,o),$(Ne.$$.fragment,o),$(Be.$$.fragment,o),$(Qe.$$.fragment,o),$(pe.$$.fragment,o),$(fe.$$.fragment,o),uo=!0)},o(o){w(d.$$.fragment,o),w(_e.$$.fragment,o),w(xe.$$.fragment,o),w(Te.$$.fragment,o),w(oe.$$.fragment,o),w(be.$$.fragment,o),w($e.$$.fragment,o),w(je.$$.fragment,o),w(ye.$$.fragment,o),w(ke.$$.fragment,o),w(De.$$.fragment,o),w(Me.$$.fragment,o),w(ze.$$.fragment,o),w(Se.$$.fragment,o),w(de.$$.fragment,o),w(ce.$$.fragment,o),w(Ne.$$.fragment,o),w(Be.$$.fragment,o),w(Qe.$$.fragment,o),w(pe.$$.fragment,o),w(fe.$$.fragment,o),uo=!1},d(o){t(p),o&&t(x),o&&t(g),j(d),o&&t(no),o&&t(U),j(_e),o&&t(so),o&&t(k),o&&t(ao),o&&t(ee),o&&t(ro),o&&t(J),j(xe),o&&t(io),o&&t(M),j(Te),j(oe),j(be),j($e),o&&t(lo),o&&t(Z),j(je),o&&t(co),o&&t(z),j(ye),j(ke),j(De),o&&t(mo),o&&t(G),j(Me),o&&t(po),o&&t(V),j(ze),j(Se),j(de),j(ce),o&&t(fo),o&&t(K),j(Ne),o&&t(ho),o&&t(y),j(Be),j(Qe),j(pe),j(fe)}}}const Br={local:"visiontextdualencoder",sections:[{local:"overview",title:"Overview"},{local:"transformers.VisionTextDualEncoderConfig",title:"VisionTextDualEncoderConfig"},{local:"transformers.VisionTextDualEncoderProcessor",title:"VisionTextDualEncoderProcessor"},{local:"transformers.VisionTextDualEncoderModel",title:"VisionTextDualEncoderModel"},{local:"transformers.FlaxVisionTextDualEncoderModel",title:"FlaxVisionTextDualEncoderModel"}],title:"VisionTextDualEncoder"};function Or(A){return Ir(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gr extends Pr{constructor(p){super();Mr(this,p,Or,Nr,zr,{})}}export{Gr as default,Br as metadata};
