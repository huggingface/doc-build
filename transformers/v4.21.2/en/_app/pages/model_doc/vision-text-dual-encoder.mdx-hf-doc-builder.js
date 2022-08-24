import{S as Pr,i as Mr,s as zr,e as n,k as c,w as T,t as r,M as Cr,c as s,d as t,m as p,a,x as b,h as i,b as l,G as e,g as _,y as E,q as $,o as j,B as w,v as Fr,L as xa}from"../../chunks/vendor-hf-doc-builder.js";import{T as Dr}from"../../chunks/Tip-hf-doc-builder.js";import{D as R}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ta}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Pt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as va}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ir(I){let m,x,g,f,v;return f=new Ta({props:{code:`from transformers import ViTConfig, BertConfig, VisionTextDualEncoderConfig, VisionTextDualEncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionTextDualEncoderModel.from_pretrained(<span class="hljs-string">&quot;vit-bert&quot;</span>, config=vision_text_config)`}}),{c(){m=n("p"),x=r("Examples:"),g=c(),T(f.$$.fragment)},l(d){m=s(d,"P",{});var h=a(m);x=i(h,"Examples:"),h.forEach(t),g=p(d),b(f.$$.fragment,d)},m(d,h){_(d,m,h),e(m,x),_(d,g,h),E(f,d,h),v=!0},p:xa,i(d){v||($(f.$$.fragment,d),v=!0)},o(d){j(f.$$.fragment,d),v=!1},d(d){d&&t(m),d&&t(g),w(f,d)}}}function Ar(I){let m,x,g,f,v;return{c(){m=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){m=s(d,"P",{});var h=a(m);x=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(h,"CODE",{});var S=a(g);f=i(S,"Module"),S.forEach(t),v=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){_(d,m,h),e(m,x),e(m,g),e(g,f),e(m,v)},d(d){d&&t(m)}}}function qr(I){let m,x,g,f,v;return f=new Ta({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){m=n("p"),x=r("Examples:"),g=c(),T(f.$$.fragment)},l(d){m=s(d,"P",{});var h=a(m);x=i(h,"Examples:"),h.forEach(t),g=p(d),b(f.$$.fragment,d)},m(d,h){_(d,m,h),e(m,x),_(d,g,h),E(f,d,h),v=!0},p:xa,i(d){v||($(f.$$.fragment,d),v=!0)},o(d){j(f.$$.fragment,d),v=!1},d(d){d&&t(m),d&&t(g),w(f,d)}}}function Lr(I){let m,x,g,f,v;return{c(){m=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){m=s(d,"P",{});var h=a(m);x=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(h,"CODE",{});var S=a(g);f=i(S,"Module"),S.forEach(t),v=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){_(d,m,h),e(m,x),e(m,g),e(g,f),e(m,v)},d(d){d&&t(m)}}}function Sr(I){let m,x,g,f,v;return f=new Ta({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){m=n("p"),x=r("Examples:"),g=c(),T(f.$$.fragment)},l(d){m=s(d,"P",{});var h=a(m);x=i(h,"Examples:"),h.forEach(t),g=p(d),b(f.$$.fragment,d)},m(d,h){_(d,m,h),e(m,x),_(d,g,h),E(f,d,h),v=!0},p:xa,i(d){v||($(f.$$.fragment,d),v=!0)},o(d){j(f.$$.fragment,d),v=!1},d(d){d&&t(m),d&&t(g),w(f,d)}}}function Nr(I){let m,x,g,f,v,d,h,S,qo,no,U,Y,Mt,_e,Lo,zt,So,so,k,No,ot,Oo,Bo,Ct,Wo,Ro,nt,Uo,Jo,st,Ho,Zo,at,Go,Xo,Ft,Ko,Qo,rt,Yo,en,it,tn,on,ao,ee,nn,ve,sn,an,ro,J,te,It,xe,rn,At,ln,io,M,Te,dn,B,lt,cn,pn,dt,mn,fn,ct,hn,un,gn,H,_n,pt,vn,xn,mt,Tn,bn,En,oe,$n,ne,be,jn,Ee,wn,ft,yn,kn,Vn,se,$e,Dn,je,Pn,ht,Mn,zn,lo,Z,ae,qt,we,Cn,Lt,Fn,co,z,ye,In,St,An,qn,C,ut,Ln,Sn,gt,Nn,On,_t,Bn,Wn,Nt,Rn,Un,vt,Jn,Hn,Zn,re,ke,Gn,Ve,Xn,xt,Kn,Qn,Yn,ie,De,es,Pe,ts,Tt,os,ns,po,G,le,Ot,Me,ss,Bt,as,mo,V,ze,rs,Ce,is,bt,ls,ds,cs,Fe,ps,Ie,ms,fs,hs,Wt,us,gs,Ae,_s,Et,vs,xs,Ts,qe,bs,Le,Es,$s,js,A,Se,ws,X,ys,$t,ks,Vs,Rt,Ds,Ps,Ms,de,zs,ce,fo,K,pe,Ut,Ne,Cs,Jt,Fs,ho,y,Oe,Is,Be,As,jt,qs,Ls,Ss,We,Ns,Re,Os,Bs,Ws,Ht,Rs,Us,Ue,Js,wt,Hs,Zs,Gs,Je,Xs,He,Ks,Qs,Ys,Zt,ea,ta,N,Gt,Ze,oa,na,Xt,Ge,sa,aa,Kt,Xe,ra,ia,Qt,Ke,la,da,q,Qe,ca,Q,pa,yt,ma,fa,Yt,ha,ua,ga,me,_a,fe,uo;return d=new Pt({}),_e=new Pt({}),xe=new Pt({}),Te=new R({props:{name:"class transformers.VisionTextDualEncoderConfig",anchor:"transformers.VisionTextDualEncoderConfig",parameters:[{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionTextDualEncoderConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>) &#x2014;
Dictionary of configuration options that defines text model config.`,name:"text_config_dict"},{anchor:"transformers.VisionTextDualEncoderConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>) &#x2014;
Dictionary of configuration options that defines vison model config.`,name:"vision_config_dict"},{anchor:"transformers.VisionTextDualEncoderConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.VisionTextDualEncoderConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.VisionTextDualEncoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L28"}}),oe=new va({props:{anchor:"transformers.VisionTextDualEncoderConfig.example",$$slots:{default:[Ir]},$$scope:{ctx:I}}}),be=new R({props:{name:"from_vision_text_configs",anchor:"transformers.VisionTextDualEncoderConfig.from_vision_text_configs",parameters:[{name:"vision_config",val:": PretrainedConfig"},{name:"text_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L105",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.2/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"
>VisionTextDualEncoderConfig</a></p>
`}}),$e=new R({props:{name:"to_dict",anchor:"transformers.VisionTextDualEncoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_text_dual_encoder/configuration_vision_text_dual_encoder.py#L117",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),we=new Pt({}),ye=new R({props:{name:"class transformers.VisionTextDualEncoderProcessor",anchor:"transformers.VisionTextDualEncoderProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.VisionTextDualEncoderProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.VisionTextDualEncoderProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L23"}}),ke=new R({props:{name:"batch_decode",anchor:"transformers.VisionTextDualEncoderProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L98"}}),De=new R({props:{name:"decode",anchor:"transformers.VisionTextDualEncoderProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_text_dual_encoder/processing_vision_text_dual_encoder.py#L105"}}),Me=new Pt({}),ze=new R({props:{name:"class transformers.VisionTextDualEncoderModel",anchor:"transformers.VisionTextDualEncoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.models.vision_text_dual_encoder.configuration_vision_text_dual_encoder.VisionTextDualEncoderConfig] = None"},{name:"vision_model",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"text_model",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],parametersDescription:[{anchor:"transformers.VisionTextDualEncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_text_dual_encoder/modeling_vision_text_dual_encoder.py#L162"}}),Se=new R({props:{name:"forward",anchor:"transformers.VisionTextDualEncoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"pixel_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"return_loss",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.VisionTextDualEncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
a feature extractor (e.g. if you use ViT as the encoder, you should use <a href="/docs/transformers/v4.21.2/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>). See
<a href="/docs/transformers/v4.21.2/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VisionTextDualEncoderModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.VisionTextDualEncoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisionTextDualEncoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisionTextDualEncoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_text_dual_encoder/modeling_vision_text_dual_encoder.py#L294",returnDescription:`
<p>A <code>transformers.models.clip.modeling_clip.CLIPOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"
>VisionTextDualEncoderConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.</li>
<li><strong>logits_per_image:(<code>torch.FloatTensor</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>torch.FloatTensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.21.2/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.21.2/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.21.2/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.21.2/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_clip.CLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),de=new Dr({props:{$$slots:{default:[Ar]},$$scope:{ctx:I}}}),ce=new va({props:{anchor:"transformers.VisionTextDualEncoderModel.forward.example",$$slots:{default:[qr]},$$scope:{ctx:I}}}),Ne=new Pt({}),Oe=new R({props:{name:"class transformers.FlaxVisionTextDualEncoderModel",anchor:"transformers.FlaxVisionTextDualEncoderModel",parameters:[{name:"config",val:": VisionTextDualEncoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxVisionTextDualEncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig">VisionTextDualEncoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_text_dual_encoder/modeling_flax_vision_text_dual_encoder.py#L219"}}),Qe=new R({props:{name:"__call__",anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
a feature extractor (e.g. if you use ViT as the encoder, you should use <a href="/docs/transformers/v4.21.2/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>). See
<a href="/docs/transformers/v4.21.2/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/vision_text_dual_encoder/modeling_flax_vision_text_dual_encoder.py#L270",returnDescription:`
<p>A <code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"
>VisionTextDualEncoderConfig</a>) and inputs.</p>
<ul>
<li><strong>logits_per_image:(<code>jnp.ndarray</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>jnp.ndarray</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/v4.21.2/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/v4.21.2/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.21.2/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.21.2/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),me=new Dr({props:{$$slots:{default:[Lr]},$$scope:{ctx:I}}}),fe=new va({props:{anchor:"transformers.FlaxVisionTextDualEncoderModel.__call__.example",$$slots:{default:[Sr]},$$scope:{ctx:I}}}),{c(){m=n("meta"),x=c(),g=n("h1"),f=n("a"),v=n("span"),T(d.$$.fragment),h=c(),S=n("span"),qo=r("VisionTextDualEncoder"),no=c(),U=n("h2"),Y=n("a"),Mt=n("span"),T(_e.$$.fragment),Lo=c(),zt=n("span"),So=r("Overview"),so=c(),k=n("p"),No=r("The "),ot=n("a"),Oo=r("VisionTextDualEncoderModel"),Bo=r(` can be used to initialize a vision-text dual encoder model with
any pretrained vision autoencoding model as the vision encoder (`),Ct=n("em"),Wo=r("e.g."),Ro=c(),nt=n("a"),Uo=r("ViT"),Jo=r(", "),st=n("a"),Ho=r("BEiT"),Zo=r(", "),at=n("a"),Go=r("DeiT"),Xo=r(") and any pretrained text autoencoding model as the text encoder ("),Ft=n("em"),Ko=r("e.g."),Qo=c(),rt=n("a"),Yo=r("RoBERTa"),en=r(", "),it=n("a"),tn=r("BERT"),on=r(`). Two projection layers are added on top of both the vision and text encoder to project the output embeddings
to a shared latent space. The projection layers are randomly initialized so the model should be fine-tuned on a
downstream task. This model can be used to align the vision-text embeddings using CLIP like contrastive image-text
training and then can be used for zero-shot vision tasks such image-classification or retrieval.`),ao=c(),ee=n("p"),nn=r("In "),ve=n("a"),sn=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),an=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment on
new zero-shot vision tasks such as image classification or retrieval.`),ro=c(),J=n("h2"),te=n("a"),It=n("span"),T(xe.$$.fragment),rn=c(),At=n("span"),ln=r("VisionTextDualEncoderConfig"),io=c(),M=n("div"),T(Te.$$.fragment),dn=c(),B=n("p"),lt=n("a"),cn=r("VisionTextDualEncoderConfig"),pn=r(` is the configuration class to store the configuration of a
`),dt=n("a"),mn=r("VisionTextDualEncoderModel"),fn=r(". It is used to instantiate "),ct=n("a"),hn=r("VisionTextDualEncoderModel"),un=r(` model according to the
specified arguments, defining the text model and vision model configs.`),gn=c(),H=n("p"),_n=r("Configuration objects inherit from "),pt=n("a"),vn=r("PretrainedConfig"),xn=r(` and can be used to control the model outputs. Read the
documentation from `),mt=n("a"),Tn=r("PretrainedConfig"),bn=r(" for more information."),En=c(),T(oe.$$.fragment),$n=c(),ne=n("div"),T(be.$$.fragment),jn=c(),Ee=n("p"),wn=r("Instantiate a "),ft=n("a"),yn=r("VisionTextDualEncoderConfig"),kn=r(` (or a derived class) from text model configuration and vision
model configuration.`),Vn=c(),se=n("div"),T($e.$$.fragment),Dn=c(),je=n("p"),Pn=r("Serializes this instance to a Python dictionary. Override the default "),ht=n("a"),Mn=r("to_dict()"),zn=r("."),lo=c(),Z=n("h2"),ae=n("a"),qt=n("span"),T(we.$$.fragment),Cn=c(),Lt=n("span"),Fn=r("VisionTextDualEncoderProcessor"),co=c(),z=n("div"),T(ye.$$.fragment),In=c(),St=n("p"),An=r(`Constructs a VisionTextDualEncoder processor which wraps a vision feature extractor and a tokenizer into a single
processor.`),qn=c(),C=n("p"),ut=n("a"),Ln=r("VisionTextDualEncoderProcessor"),Sn=r(" offers all the functionalities of "),gt=n("a"),Nn=r("AutoFeatureExtractor"),On=r(` and
`),_t=n("a"),Bn=r("AutoTokenizer"),Wn=r(". See the "),Nt=n("code"),Rn=r("__call__()"),Un=r(` and
`),vt=n("a"),Jn=r("decode()"),Hn=r(" for more information."),Zn=c(),re=n("div"),T(ke.$$.fragment),Gn=c(),Ve=n("p"),Xn=r(`This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s
`),xt=n("a"),Kn=r("batch_decode()"),Qn=r(". Please refer to the docstring of this method for more information."),Yn=c(),ie=n("div"),T(De.$$.fragment),es=c(),Pe=n("p"),ts=r("This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s "),Tt=n("a"),os=r("decode()"),ns=r(`.
Please refer to the docstring of this method for more information.`),po=c(),G=n("h2"),le=n("a"),Ot=n("span"),T(Me.$$.fragment),ss=c(),Bt=n("span"),as=r("VisionTextDualEncoderModel"),mo=c(),V=n("div"),T(ze.$$.fragment),rs=c(),Ce=n("p"),is=r(`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),bt=n("a"),ls=r("from_pretrained()"),ds=r(` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),cs=c(),Fe=n("p"),ps=r("In "),Ie=n("a"),ms=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),fs=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),hs=c(),Wt=n("p"),us=r(`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),gs=c(),Ae=n("p"),_s=r("This model inherits from "),Et=n("a"),vs=r("PreTrainedModel"),xs=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ts=c(),qe=n("p"),bs=r("This model is also a PyTorch "),Le=n("a"),Es=r("torch.nn.Module"),$s=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),js=c(),A=n("div"),T(Se.$$.fragment),ws=c(),X=n("p"),ys=r("The "),$t=n("a"),ks=r("VisionTextDualEncoderModel"),Vs=r(" forward method, overrides the "),Rt=n("code"),Ds=r("__call__"),Ps=r(" special method."),Ms=c(),T(de.$$.fragment),zs=c(),T(ce.$$.fragment),fo=c(),K=n("h2"),pe=n("a"),Ut=n("span"),T(Ne.$$.fragment),Cs=c(),Jt=n("span"),Fs=r("FlaxVisionTextDualEncoderModel"),ho=c(),y=n("div"),T(Oe.$$.fragment),Is=c(),Be=n("p"),As=r(`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),jt=n("a"),qs=r("from_pretrained()"),Ls=r(` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Ss=c(),We=n("p"),Ns=r("In "),Re=n("a"),Os=r("LiT: Zero-Shot Transfer with Locked-image Text Tuning"),Bs=r(` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Ws=c(),Ht=n("p"),Rs=r(`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Us=c(),Ue=n("p"),Js=r("This model inherits from "),wt=n("a"),Hs=r("PreTrainedModel"),Zs=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gs=c(),Je=n("p"),Xs=r("This model is also a Flax Linen "),He=n("a"),Ks=r("flax.linen.Module"),Qs=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ys=c(),Zt=n("p"),ea=r("Finally, this model supports inherent JAX features such as:"),ta=c(),N=n("ul"),Gt=n("li"),Ze=n("a"),oa=r("Just-In-Time (JIT) compilation"),na=c(),Xt=n("li"),Ge=n("a"),sa=r("Automatic Differentiation"),aa=c(),Kt=n("li"),Xe=n("a"),ra=r("Vectorization"),ia=c(),Qt=n("li"),Ke=n("a"),la=r("Parallelization"),da=c(),q=n("div"),T(Qe.$$.fragment),ca=c(),Q=n("p"),pa=r("The "),yt=n("a"),ma=r("FlaxVisionTextDualEncoderModel"),fa=r(" forward method, overrides the "),Yt=n("code"),ha=r("__call__"),ua=r(" special method."),ga=c(),T(me.$$.fragment),_a=c(),T(fe.$$.fragment),this.h()},l(o){const u=Cr('[data-svelte="svelte-1phssyn"]',document.head);m=s(u,"META",{name:!0,content:!0}),u.forEach(t),x=p(o),g=s(o,"H1",{class:!0});var Ye=a(g);f=s(Ye,"A",{id:!0,class:!0,href:!0});var eo=a(f);v=s(eo,"SPAN",{});var to=a(v);b(d.$$.fragment,to),to.forEach(t),eo.forEach(t),h=p(Ye),S=s(Ye,"SPAN",{});var oo=a(S);qo=i(oo,"VisionTextDualEncoder"),oo.forEach(t),Ye.forEach(t),no=p(o),U=s(o,"H2",{class:!0});var et=a(U);Y=s(et,"A",{id:!0,class:!0,href:!0});var ba=a(Y);Mt=s(ba,"SPAN",{});var Ea=a(Mt);b(_e.$$.fragment,Ea),Ea.forEach(t),ba.forEach(t),Lo=p(et),zt=s(et,"SPAN",{});var $a=a(zt);So=i($a,"Overview"),$a.forEach(t),et.forEach(t),so=p(o),k=s(o,"P",{});var D=a(k);No=i(D,"The "),ot=s(D,"A",{href:!0});var ja=a(ot);Oo=i(ja,"VisionTextDualEncoderModel"),ja.forEach(t),Bo=i(D,` can be used to initialize a vision-text dual encoder model with
any pretrained vision autoencoding model as the vision encoder (`),Ct=s(D,"EM",{});var wa=a(Ct);Wo=i(wa,"e.g."),wa.forEach(t),Ro=p(D),nt=s(D,"A",{href:!0});var ya=a(nt);Uo=i(ya,"ViT"),ya.forEach(t),Jo=i(D,", "),st=s(D,"A",{href:!0});var ka=a(st);Ho=i(ka,"BEiT"),ka.forEach(t),Zo=i(D,", "),at=s(D,"A",{href:!0});var Va=a(at);Go=i(Va,"DeiT"),Va.forEach(t),Xo=i(D,") and any pretrained text autoencoding model as the text encoder ("),Ft=s(D,"EM",{});var Da=a(Ft);Ko=i(Da,"e.g."),Da.forEach(t),Qo=p(D),rt=s(D,"A",{href:!0});var Pa=a(rt);Yo=i(Pa,"RoBERTa"),Pa.forEach(t),en=i(D,", "),it=s(D,"A",{href:!0});var Ma=a(it);tn=i(Ma,"BERT"),Ma.forEach(t),on=i(D,`). Two projection layers are added on top of both the vision and text encoder to project the output embeddings
to a shared latent space. The projection layers are randomly initialized so the model should be fine-tuned on a
downstream task. This model can be used to align the vision-text embeddings using CLIP like contrastive image-text
training and then can be used for zero-shot vision tasks such image-classification or retrieval.`),D.forEach(t),ao=p(o),ee=s(o,"P",{});var go=a(ee);nn=i(go,"In "),ve=s(go,"A",{href:!0,rel:!0});var za=a(ve);sn=i(za,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),za.forEach(t),an=i(go,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment on
new zero-shot vision tasks such as image classification or retrieval.`),go.forEach(t),ro=p(o),J=s(o,"H2",{class:!0});var _o=a(J);te=s(_o,"A",{id:!0,class:!0,href:!0});var Ca=a(te);It=s(Ca,"SPAN",{});var Fa=a(It);b(xe.$$.fragment,Fa),Fa.forEach(t),Ca.forEach(t),rn=p(_o),At=s(_o,"SPAN",{});var Ia=a(At);ln=i(Ia,"VisionTextDualEncoderConfig"),Ia.forEach(t),_o.forEach(t),io=p(o),M=s(o,"DIV",{class:!0});var L=a(M);b(Te.$$.fragment,L),dn=p(L),B=s(L,"P",{});var tt=a(B);lt=s(tt,"A",{href:!0});var Aa=a(lt);cn=i(Aa,"VisionTextDualEncoderConfig"),Aa.forEach(t),pn=i(tt,` is the configuration class to store the configuration of a
`),dt=s(tt,"A",{href:!0});var qa=a(dt);mn=i(qa,"VisionTextDualEncoderModel"),qa.forEach(t),fn=i(tt,". It is used to instantiate "),ct=s(tt,"A",{href:!0});var La=a(ct);hn=i(La,"VisionTextDualEncoderModel"),La.forEach(t),un=i(tt,` model according to the
specified arguments, defining the text model and vision model configs.`),tt.forEach(t),gn=p(L),H=s(L,"P",{});var kt=a(H);_n=i(kt,"Configuration objects inherit from "),pt=s(kt,"A",{href:!0});var Sa=a(pt);vn=i(Sa,"PretrainedConfig"),Sa.forEach(t),xn=i(kt,` and can be used to control the model outputs. Read the
documentation from `),mt=s(kt,"A",{href:!0});var Na=a(mt);Tn=i(Na,"PretrainedConfig"),Na.forEach(t),bn=i(kt," for more information."),kt.forEach(t),En=p(L),b(oe.$$.fragment,L),$n=p(L),ne=s(L,"DIV",{class:!0});var vo=a(ne);b(be.$$.fragment,vo),jn=p(vo),Ee=s(vo,"P",{});var xo=a(Ee);wn=i(xo,"Instantiate a "),ft=s(xo,"A",{href:!0});var Oa=a(ft);yn=i(Oa,"VisionTextDualEncoderConfig"),Oa.forEach(t),kn=i(xo,` (or a derived class) from text model configuration and vision
model configuration.`),xo.forEach(t),vo.forEach(t),Vn=p(L),se=s(L,"DIV",{class:!0});var To=a(se);b($e.$$.fragment,To),Dn=p(To),je=s(To,"P",{});var bo=a(je);Pn=i(bo,"Serializes this instance to a Python dictionary. Override the default "),ht=s(bo,"A",{href:!0});var Ba=a(ht);Mn=i(Ba,"to_dict()"),Ba.forEach(t),zn=i(bo,"."),bo.forEach(t),To.forEach(t),L.forEach(t),lo=p(o),Z=s(o,"H2",{class:!0});var Eo=a(Z);ae=s(Eo,"A",{id:!0,class:!0,href:!0});var Wa=a(ae);qt=s(Wa,"SPAN",{});var Ra=a(qt);b(we.$$.fragment,Ra),Ra.forEach(t),Wa.forEach(t),Cn=p(Eo),Lt=s(Eo,"SPAN",{});var Ua=a(Lt);Fn=i(Ua,"VisionTextDualEncoderProcessor"),Ua.forEach(t),Eo.forEach(t),co=p(o),z=s(o,"DIV",{class:!0});var W=a(z);b(ye.$$.fragment,W),In=p(W),St=s(W,"P",{});var Ja=a(St);An=i(Ja,`Constructs a VisionTextDualEncoder processor which wraps a vision feature extractor and a tokenizer into a single
processor.`),Ja.forEach(t),qn=p(W),C=s(W,"P",{});var O=a(C);ut=s(O,"A",{href:!0});var Ha=a(ut);Ln=i(Ha,"VisionTextDualEncoderProcessor"),Ha.forEach(t),Sn=i(O," offers all the functionalities of "),gt=s(O,"A",{href:!0});var Za=a(gt);Nn=i(Za,"AutoFeatureExtractor"),Za.forEach(t),On=i(O,` and
`),_t=s(O,"A",{href:!0});var Ga=a(_t);Bn=i(Ga,"AutoTokenizer"),Ga.forEach(t),Wn=i(O,". See the "),Nt=s(O,"CODE",{});var Xa=a(Nt);Rn=i(Xa,"__call__()"),Xa.forEach(t),Un=i(O,` and
`),vt=s(O,"A",{href:!0});var Ka=a(vt);Jn=i(Ka,"decode()"),Ka.forEach(t),Hn=i(O," for more information."),O.forEach(t),Zn=p(W),re=s(W,"DIV",{class:!0});var $o=a(re);b(ke.$$.fragment,$o),Gn=p($o),Ve=s($o,"P",{});var jo=a(Ve);Xn=i(jo,`This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s
`),xt=s(jo,"A",{href:!0});var Qa=a(xt);Kn=i(Qa,"batch_decode()"),Qa.forEach(t),Qn=i(jo,". Please refer to the docstring of this method for more information."),jo.forEach(t),$o.forEach(t),Yn=p(W),ie=s(W,"DIV",{class:!0});var wo=a(ie);b(De.$$.fragment,wo),es=p(wo),Pe=s(wo,"P",{});var yo=a(Pe);ts=i(yo,"This method forwards all its arguments to VisionTextDualEncoderTokenizer\u2019s "),Tt=s(yo,"A",{href:!0});var Ya=a(Tt);os=i(Ya,"decode()"),Ya.forEach(t),ns=i(yo,`.
Please refer to the docstring of this method for more information.`),yo.forEach(t),wo.forEach(t),W.forEach(t),po=p(o),G=s(o,"H2",{class:!0});var ko=a(G);le=s(ko,"A",{id:!0,class:!0,href:!0});var er=a(le);Ot=s(er,"SPAN",{});var tr=a(Ot);b(Me.$$.fragment,tr),tr.forEach(t),er.forEach(t),ss=p(ko),Bt=s(ko,"SPAN",{});var or=a(Bt);as=i(or,"VisionTextDualEncoderModel"),or.forEach(t),ko.forEach(t),mo=p(o),V=s(o,"DIV",{class:!0});var F=a(V);b(ze.$$.fragment,F),rs=p(F),Ce=s(F,"P",{});var Vo=a(Ce);is=i(Vo,`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),bt=s(Vo,"A",{href:!0});var nr=a(bt);ls=i(nr,"from_pretrained()"),nr.forEach(t),ds=i(Vo,` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Vo.forEach(t),cs=p(F),Fe=s(F,"P",{});var Do=a(Fe);ps=i(Do,"In "),Ie=s(Do,"A",{href:!0,rel:!0});var sr=a(Ie);ms=i(sr,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),sr.forEach(t),fs=i(Do,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Do.forEach(t),hs=p(F),Wt=s(F,"P",{});var ar=a(Wt);us=i(ar,`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),ar.forEach(t),gs=p(F),Ae=s(F,"P",{});var Po=a(Ae);_s=i(Po,"This model inherits from "),Et=s(Po,"A",{href:!0});var rr=a(Et);vs=i(rr,"PreTrainedModel"),rr.forEach(t),xs=i(Po,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Po.forEach(t),Ts=p(F),qe=s(F,"P",{});var Mo=a(qe);bs=i(Mo,"This model is also a PyTorch "),Le=s(Mo,"A",{href:!0,rel:!0});var ir=a(Le);Es=i(ir,"torch.nn.Module"),ir.forEach(t),$s=i(Mo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mo.forEach(t),js=p(F),A=s(F,"DIV",{class:!0});var he=a(A);b(Se.$$.fragment,he),ws=p(he),X=s(he,"P",{});var Vt=a(X);ys=i(Vt,"The "),$t=s(Vt,"A",{href:!0});var lr=a($t);ks=i(lr,"VisionTextDualEncoderModel"),lr.forEach(t),Vs=i(Vt," forward method, overrides the "),Rt=s(Vt,"CODE",{});var dr=a(Rt);Ds=i(dr,"__call__"),dr.forEach(t),Ps=i(Vt," special method."),Vt.forEach(t),Ms=p(he),b(de.$$.fragment,he),zs=p(he),b(ce.$$.fragment,he),he.forEach(t),F.forEach(t),fo=p(o),K=s(o,"H2",{class:!0});var zo=a(K);pe=s(zo,"A",{id:!0,class:!0,href:!0});var cr=a(pe);Ut=s(cr,"SPAN",{});var pr=a(Ut);b(Ne.$$.fragment,pr),pr.forEach(t),cr.forEach(t),Cs=p(zo),Jt=s(zo,"SPAN",{});var mr=a(Jt);Fs=i(mr,"FlaxVisionTextDualEncoderModel"),mr.forEach(t),zo.forEach(t),ho=p(o),y=s(o,"DIV",{class:!0});var P=a(y);b(Oe.$$.fragment,P),Is=p(P),Be=s(P,"P",{});var Co=a(Be);As=i(Co,`This class can be used to initialize a vision-text dual encoder model with any pretrained vision autoencoding model
as the vision encoder and any pretrained text model as the text encoder. The vision and text encoders are loaded
via the `),jt=s(Co,"A",{href:!0});var fr=a(jt);qs=i(fr,"from_pretrained()"),fr.forEach(t),Ls=i(Co,` method. The projection layers are automatically added to the model and
should be fine-tuned on a downstream task, like contrastive image-text modeling.`),Co.forEach(t),Ss=p(P),We=s(P,"P",{});var Fo=a(We);Ns=i(Fo,"In "),Re=s(Fo,"A",{href:!0,rel:!0});var hr=a(Re);Os=i(hr,"LiT: Zero-Shot Transfer with Locked-image Text Tuning"),hr.forEach(t),Bs=i(Fo,` it is shown how
leveraging pre-trained (locked/frozen) image and text model for contrastive learning yields significant improvment
on new zero-shot vision tasks such as image classification or retrieval.`),Fo.forEach(t),Ws=p(P),Ht=s(P,"P",{});var ur=a(Ht);Rs=i(ur,`After such a Vision-Text-Dual-Encoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),ur.forEach(t),Us=p(P),Ue=s(P,"P",{});var Io=a(Ue);Js=i(Io,"This model inherits from "),wt=s(Io,"A",{href:!0});var gr=a(wt);Hs=i(gr,"PreTrainedModel"),gr.forEach(t),Zs=i(Io,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Io.forEach(t),Gs=p(P),Je=s(P,"P",{});var Ao=a(Je);Xs=i(Ao,"This model is also a Flax Linen "),He=s(Ao,"A",{href:!0,rel:!0});var _r=a(He);Ks=i(_r,"flax.linen.Module"),_r.forEach(t),Qs=i(Ao,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ao.forEach(t),Ys=p(P),Zt=s(P,"P",{});var vr=a(Zt);ea=i(vr,"Finally, this model supports inherent JAX features such as:"),vr.forEach(t),ta=p(P),N=s(P,"UL",{});var ue=a(N);Gt=s(ue,"LI",{});var xr=a(Gt);Ze=s(xr,"A",{href:!0,rel:!0});var Tr=a(Ze);oa=i(Tr,"Just-In-Time (JIT) compilation"),Tr.forEach(t),xr.forEach(t),na=p(ue),Xt=s(ue,"LI",{});var br=a(Xt);Ge=s(br,"A",{href:!0,rel:!0});var Er=a(Ge);sa=i(Er,"Automatic Differentiation"),Er.forEach(t),br.forEach(t),aa=p(ue),Kt=s(ue,"LI",{});var $r=a(Kt);Xe=s($r,"A",{href:!0,rel:!0});var jr=a(Xe);ra=i(jr,"Vectorization"),jr.forEach(t),$r.forEach(t),ia=p(ue),Qt=s(ue,"LI",{});var wr=a(Qt);Ke=s(wr,"A",{href:!0,rel:!0});var yr=a(Ke);la=i(yr,"Parallelization"),yr.forEach(t),wr.forEach(t),ue.forEach(t),da=p(P),q=s(P,"DIV",{class:!0});var ge=a(q);b(Qe.$$.fragment,ge),ca=p(ge),Q=s(ge,"P",{});var Dt=a(Q);pa=i(Dt,"The "),yt=s(Dt,"A",{href:!0});var kr=a(yt);ma=i(kr,"FlaxVisionTextDualEncoderModel"),kr.forEach(t),fa=i(Dt," forward method, overrides the "),Yt=s(Dt,"CODE",{});var Vr=a(Yt);ha=i(Vr,"__call__"),Vr.forEach(t),ua=i(Dt," special method."),Dt.forEach(t),ga=p(ge),b(me.$$.fragment,ge),_a=p(ge),b(fe.$$.fragment,ge),ge.forEach(t),P.forEach(t),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(Or)),l(f,"id","visiontextdualencoder"),l(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(f,"href","#visiontextdualencoder"),l(g,"class","relative group"),l(Y,"id","overview"),l(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Y,"href","#overview"),l(U,"class","relative group"),l(ot,"href","/docs/transformers/v4.21.2/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(nt,"href","vit"),l(st,"href","beit"),l(at,"href","deit"),l(rt,"href","roberta"),l(it,"href","bert"),l(ve,"href","https://arxiv.org/abs/2111.07991"),l(ve,"rel","nofollow"),l(te,"id","transformers.VisionTextDualEncoderConfig"),l(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(te,"href","#transformers.VisionTextDualEncoderConfig"),l(J,"class","relative group"),l(lt,"href","/docs/transformers/v4.21.2/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"),l(dt,"href","/docs/transformers/v4.21.2/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(ct,"href","/docs/transformers/v4.21.2/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(pt,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),l(mt,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),l(ft,"href","/docs/transformers/v4.21.2/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderConfig"),l(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ht,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig.to_dict"),l(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ae,"id","transformers.VisionTextDualEncoderProcessor"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.VisionTextDualEncoderProcessor"),l(Z,"class","relative group"),l(ut,"href","/docs/transformers/v4.21.2/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderProcessor"),l(gt,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.AutoFeatureExtractor"),l(_t,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.AutoTokenizer"),l(vt,"href","/docs/transformers/v4.21.2/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderProcessor.decode"),l(xt,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.batch_decode"),l(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Tt,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.decode"),l(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(le,"id","transformers.VisionTextDualEncoderModel"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.VisionTextDualEncoderModel"),l(G,"class","relative group"),l(bt,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Ie,"href","https://arxiv.org/abs/2111.07991"),l(Ie,"rel","nofollow"),l(Et,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),l(Le,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Le,"rel","nofollow"),l($t,"href","/docs/transformers/v4.21.2/en/model_doc/vision-text-dual-encoder#transformers.VisionTextDualEncoderModel"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(pe,"id","transformers.FlaxVisionTextDualEncoderModel"),l(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(pe,"href","#transformers.FlaxVisionTextDualEncoderModel"),l(K,"class","relative group"),l(jt,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Re,"href","https://arxiv.org/abs/2111.07991"),l(Re,"rel","nofollow"),l(wt,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),l(He,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(He,"rel","nofollow"),l(Ze,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(Ze,"rel","nofollow"),l(Ge,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(Ge,"rel","nofollow"),l(Xe,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Xe,"rel","nofollow"),l(Ke,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(Ke,"rel","nofollow"),l(yt,"href","/docs/transformers/v4.21.2/en/model_doc/vision-text-dual-encoder#transformers.FlaxVisionTextDualEncoderModel"),l(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,u){e(document.head,m),_(o,x,u),_(o,g,u),e(g,f),e(f,v),E(d,v,null),e(g,h),e(g,S),e(S,qo),_(o,no,u),_(o,U,u),e(U,Y),e(Y,Mt),E(_e,Mt,null),e(U,Lo),e(U,zt),e(zt,So),_(o,so,u),_(o,k,u),e(k,No),e(k,ot),e(ot,Oo),e(k,Bo),e(k,Ct),e(Ct,Wo),e(k,Ro),e(k,nt),e(nt,Uo),e(k,Jo),e(k,st),e(st,Ho),e(k,Zo),e(k,at),e(at,Go),e(k,Xo),e(k,Ft),e(Ft,Ko),e(k,Qo),e(k,rt),e(rt,Yo),e(k,en),e(k,it),e(it,tn),e(k,on),_(o,ao,u),_(o,ee,u),e(ee,nn),e(ee,ve),e(ve,sn),e(ee,an),_(o,ro,u),_(o,J,u),e(J,te),e(te,It),E(xe,It,null),e(J,rn),e(J,At),e(At,ln),_(o,io,u),_(o,M,u),E(Te,M,null),e(M,dn),e(M,B),e(B,lt),e(lt,cn),e(B,pn),e(B,dt),e(dt,mn),e(B,fn),e(B,ct),e(ct,hn),e(B,un),e(M,gn),e(M,H),e(H,_n),e(H,pt),e(pt,vn),e(H,xn),e(H,mt),e(mt,Tn),e(H,bn),e(M,En),E(oe,M,null),e(M,$n),e(M,ne),E(be,ne,null),e(ne,jn),e(ne,Ee),e(Ee,wn),e(Ee,ft),e(ft,yn),e(Ee,kn),e(M,Vn),e(M,se),E($e,se,null),e(se,Dn),e(se,je),e(je,Pn),e(je,ht),e(ht,Mn),e(je,zn),_(o,lo,u),_(o,Z,u),e(Z,ae),e(ae,qt),E(we,qt,null),e(Z,Cn),e(Z,Lt),e(Lt,Fn),_(o,co,u),_(o,z,u),E(ye,z,null),e(z,In),e(z,St),e(St,An),e(z,qn),e(z,C),e(C,ut),e(ut,Ln),e(C,Sn),e(C,gt),e(gt,Nn),e(C,On),e(C,_t),e(_t,Bn),e(C,Wn),e(C,Nt),e(Nt,Rn),e(C,Un),e(C,vt),e(vt,Jn),e(C,Hn),e(z,Zn),e(z,re),E(ke,re,null),e(re,Gn),e(re,Ve),e(Ve,Xn),e(Ve,xt),e(xt,Kn),e(Ve,Qn),e(z,Yn),e(z,ie),E(De,ie,null),e(ie,es),e(ie,Pe),e(Pe,ts),e(Pe,Tt),e(Tt,os),e(Pe,ns),_(o,po,u),_(o,G,u),e(G,le),e(le,Ot),E(Me,Ot,null),e(G,ss),e(G,Bt),e(Bt,as),_(o,mo,u),_(o,V,u),E(ze,V,null),e(V,rs),e(V,Ce),e(Ce,is),e(Ce,bt),e(bt,ls),e(Ce,ds),e(V,cs),e(V,Fe),e(Fe,ps),e(Fe,Ie),e(Ie,ms),e(Fe,fs),e(V,hs),e(V,Wt),e(Wt,us),e(V,gs),e(V,Ae),e(Ae,_s),e(Ae,Et),e(Et,vs),e(Ae,xs),e(V,Ts),e(V,qe),e(qe,bs),e(qe,Le),e(Le,Es),e(qe,$s),e(V,js),e(V,A),E(Se,A,null),e(A,ws),e(A,X),e(X,ys),e(X,$t),e($t,ks),e(X,Vs),e(X,Rt),e(Rt,Ds),e(X,Ps),e(A,Ms),E(de,A,null),e(A,zs),E(ce,A,null),_(o,fo,u),_(o,K,u),e(K,pe),e(pe,Ut),E(Ne,Ut,null),e(K,Cs),e(K,Jt),e(Jt,Fs),_(o,ho,u),_(o,y,u),E(Oe,y,null),e(y,Is),e(y,Be),e(Be,As),e(Be,jt),e(jt,qs),e(Be,Ls),e(y,Ss),e(y,We),e(We,Ns),e(We,Re),e(Re,Os),e(We,Bs),e(y,Ws),e(y,Ht),e(Ht,Rs),e(y,Us),e(y,Ue),e(Ue,Js),e(Ue,wt),e(wt,Hs),e(Ue,Zs),e(y,Gs),e(y,Je),e(Je,Xs),e(Je,He),e(He,Ks),e(Je,Qs),e(y,Ys),e(y,Zt),e(Zt,ea),e(y,ta),e(y,N),e(N,Gt),e(Gt,Ze),e(Ze,oa),e(N,na),e(N,Xt),e(Xt,Ge),e(Ge,sa),e(N,aa),e(N,Kt),e(Kt,Xe),e(Xe,ra),e(N,ia),e(N,Qt),e(Qt,Ke),e(Ke,la),e(y,da),e(y,q),E(Qe,q,null),e(q,ca),e(q,Q),e(Q,pa),e(Q,yt),e(yt,ma),e(Q,fa),e(Q,Yt),e(Yt,ha),e(Q,ua),e(q,ga),E(me,q,null),e(q,_a),E(fe,q,null),uo=!0},p(o,[u]){const Ye={};u&2&&(Ye.$$scope={dirty:u,ctx:o}),oe.$set(Ye);const eo={};u&2&&(eo.$$scope={dirty:u,ctx:o}),de.$set(eo);const to={};u&2&&(to.$$scope={dirty:u,ctx:o}),ce.$set(to);const oo={};u&2&&(oo.$$scope={dirty:u,ctx:o}),me.$set(oo);const et={};u&2&&(et.$$scope={dirty:u,ctx:o}),fe.$set(et)},i(o){uo||($(d.$$.fragment,o),$(_e.$$.fragment,o),$(xe.$$.fragment,o),$(Te.$$.fragment,o),$(oe.$$.fragment,o),$(be.$$.fragment,o),$($e.$$.fragment,o),$(we.$$.fragment,o),$(ye.$$.fragment,o),$(ke.$$.fragment,o),$(De.$$.fragment,o),$(Me.$$.fragment,o),$(ze.$$.fragment,o),$(Se.$$.fragment,o),$(de.$$.fragment,o),$(ce.$$.fragment,o),$(Ne.$$.fragment,o),$(Oe.$$.fragment,o),$(Qe.$$.fragment,o),$(me.$$.fragment,o),$(fe.$$.fragment,o),uo=!0)},o(o){j(d.$$.fragment,o),j(_e.$$.fragment,o),j(xe.$$.fragment,o),j(Te.$$.fragment,o),j(oe.$$.fragment,o),j(be.$$.fragment,o),j($e.$$.fragment,o),j(we.$$.fragment,o),j(ye.$$.fragment,o),j(ke.$$.fragment,o),j(De.$$.fragment,o),j(Me.$$.fragment,o),j(ze.$$.fragment,o),j(Se.$$.fragment,o),j(de.$$.fragment,o),j(ce.$$.fragment,o),j(Ne.$$.fragment,o),j(Oe.$$.fragment,o),j(Qe.$$.fragment,o),j(me.$$.fragment,o),j(fe.$$.fragment,o),uo=!1},d(o){t(m),o&&t(x),o&&t(g),w(d),o&&t(no),o&&t(U),w(_e),o&&t(so),o&&t(k),o&&t(ao),o&&t(ee),o&&t(ro),o&&t(J),w(xe),o&&t(io),o&&t(M),w(Te),w(oe),w(be),w($e),o&&t(lo),o&&t(Z),w(we),o&&t(co),o&&t(z),w(ye),w(ke),w(De),o&&t(po),o&&t(G),w(Me),o&&t(mo),o&&t(V),w(ze),w(Se),w(de),w(ce),o&&t(fo),o&&t(K),w(Ne),o&&t(ho),o&&t(y),w(Oe),w(Qe),w(me),w(fe)}}}const Or={local:"visiontextdualencoder",sections:[{local:"overview",title:"Overview"},{local:"transformers.VisionTextDualEncoderConfig",title:"VisionTextDualEncoderConfig"},{local:"transformers.VisionTextDualEncoderProcessor",title:"VisionTextDualEncoderProcessor"},{local:"transformers.VisionTextDualEncoderModel",title:"VisionTextDualEncoderModel"},{local:"transformers.FlaxVisionTextDualEncoderModel",title:"FlaxVisionTextDualEncoderModel"}],title:"VisionTextDualEncoder"};function Br(I){return Fr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gr extends Pr{constructor(m){super();Mr(this,m,Br,Nr,zr,{})}}export{Gr as default,Or as metadata};
