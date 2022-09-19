import{S as cr,i as fr,s as pr,e as s,k as m,w as $,t as l,M as gr,c as r,d as o,m as u,a as n,x as v,h as i,b as c,G as e,g as _,y,q as N,o as T,B as R,v as hr,L as Jt}from"../../chunks/vendor-hf-doc-builder.js";import{T as xo}from"../../chunks/Tip-hf-doc-builder.js";import{D as X}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Qt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ze}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Kt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function mr(x){let d,b,h,p,w;return p=new Qt({props:{code:`from transformers import RegNetConfig, RegNetModel

# Initializing a RegNet regnet-y-40 style configuration
configuration = RegNetConfig()
# Initializing a model from the regnet-y-40 style configuration
model = RegNetModel(configuration)
# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RegNetConfig, RegNetModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a RegNet regnet-y-40 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = RegNetConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the regnet-y-40 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RegNetModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=l("Example:"),h=m(),$(p.$$.fragment)},l(a){d=r(a,"P",{});var f=n(d);b=i(f,"Example:"),f.forEach(o),h=u(a),v(p.$$.fragment,a)},m(a,f){_(a,d,f),e(d,b),_(a,h,f),y(p,a,f),w=!0},p:Jt,i(a){w||(N(p.$$.fragment,a),w=!0)},o(a){T(p.$$.fragment,a),w=!1},d(a){a&&o(d),a&&o(h),R(p,a)}}}function ur(x){let d,b,h,p,w;return{c(){d=s("p"),b=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=l("Module"),w=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var f=n(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(f,"CODE",{});var F=n(h);p=i(F,"Module"),F.forEach(o),w=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(a,f){_(a,d,f),e(d,b),e(d,h),e(h,p),e(d,w)},d(a){a&&o(d)}}}function _r(x){let d,b,h,p,w;return p=new Qt({props:{code:`from transformers import AutoFeatureExtractor, RegNetModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("facebook/regnet-y-040")
model = RegNetModel.from_pretrained("facebook/regnet-y-040")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, RegNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/regnet-y-040&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RegNetModel.from_pretrained(<span class="hljs-string">&quot;facebook/regnet-y-040&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">1088</span>, <span class="hljs-number">7</span>, <span class="hljs-number">7</span>]`}}),{c(){d=s("p"),b=l("Example:"),h=m(),$(p.$$.fragment)},l(a){d=r(a,"P",{});var f=n(d);b=i(f,"Example:"),f.forEach(o),h=u(a),v(p.$$.fragment,a)},m(a,f){_(a,d,f),e(d,b),_(a,h,f),y(p,a,f),w=!0},p:Jt,i(a){w||(N(p.$$.fragment,a),w=!0)},o(a){T(p.$$.fragment,a),w=!1},d(a){a&&o(d),a&&o(h),R(p,a)}}}function wr(x){let d,b,h,p,w;return{c(){d=s("p"),b=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=l("Module"),w=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var f=n(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(f,"CODE",{});var F=n(h);p=i(F,"Module"),F.forEach(o),w=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(a,f){_(a,d,f),e(d,b),e(d,h),e(h,p),e(d,w)},d(a){a&&o(d)}}}function br(x){let d,b,h,p,w;return p=new Qt({props:{code:`from transformers import AutoFeatureExtractor, RegNetForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("facebook/regnet-y-040")
model = RegNetForImageClassification.from_pretrained("facebook/regnet-y-040")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, RegNetForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/regnet-y-040&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RegNetForImageClassification.from_pretrained(<span class="hljs-string">&quot;facebook/regnet-y-040&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tabby, tabby cat`}}),{c(){d=s("p"),b=l("Example:"),h=m(),$(p.$$.fragment)},l(a){d=r(a,"P",{});var f=n(d);b=i(f,"Example:"),f.forEach(o),h=u(a),v(p.$$.fragment,a)},m(a,f){_(a,d,f),e(d,b),_(a,h,f),y(p,a,f),w=!0},p:Jt,i(a){w||(N(p.$$.fragment,a),w=!0)},o(a){T(p.$$.fragment,a),w=!1},d(a){a&&o(d),a&&o(h),R(p,a)}}}function $r(x){let d,b,h,p,w;return{c(){d=s("p"),b=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=l("Module"),w=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var f=n(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(f,"CODE",{});var F=n(h);p=i(F,"Module"),F.forEach(o),w=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(a,f){_(a,d,f),e(d,b),e(d,h),e(h,p),e(d,w)},d(a){a&&o(d)}}}function vr(x){let d,b,h,p,w;return p=new Qt({props:{code:`from transformers import AutoFeatureExtractor, TFRegNetModel
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("facebook/regnet-y-040")
model = TFRegNetModel.from_pretrained("facebook/regnet-y-040")

inputs = feature_extractor(image, return_tensors="tf")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, TFRegNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/regnet-y-040&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRegNetModel.from_pretrained(<span class="hljs-string">&quot;facebook/regnet-y-040&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">1088</span>, <span class="hljs-number">7</span>, <span class="hljs-number">7</span>]`}}),{c(){d=s("p"),b=l("Example:"),h=m(),$(p.$$.fragment)},l(a){d=r(a,"P",{});var f=n(d);b=i(f,"Example:"),f.forEach(o),h=u(a),v(p.$$.fragment,a)},m(a,f){_(a,d,f),e(d,b),_(a,h,f),y(p,a,f),w=!0},p:Jt,i(a){w||(N(p.$$.fragment,a),w=!0)},o(a){T(p.$$.fragment,a),w=!1},d(a){a&&o(d),a&&o(h),R(p,a)}}}function yr(x){let d,b,h,p,w;return{c(){d=s("p"),b=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=l("Module"),w=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=r(a,"P",{});var f=n(d);b=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(f,"CODE",{});var F=n(h);p=i(F,"Module"),F.forEach(o),w=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(a,f){_(a,d,f),e(d,b),e(d,h),e(h,p),e(d,w)},d(a){a&&o(d)}}}function Nr(x){let d,b,h,p,w;return p=new Qt({props:{code:`from transformers import AutoFeatureExtractor, TFRegNetForImageClassification
import tensorflow as tf
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("facebook/regnet-y-040")
model = TFRegNetForImageClassification.from_pretrained("facebook/regnet-y-040")

inputs = feature_extractor(image, return_tensors="tf")
logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = int(tf.math.argmax(logits, axis=-1))
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, TFRegNetForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/regnet-y-040&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRegNetForImageClassification.from_pretrained(<span class="hljs-string">&quot;facebook/regnet-y-040&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tabby, tabby cat`}}),{c(){d=s("p"),b=l("Example:"),h=m(),$(p.$$.fragment)},l(a){d=r(a,"P",{});var f=n(d);b=i(f,"Example:"),f.forEach(o),h=u(a),v(p.$$.fragment,a)},m(a,f){_(a,d,f),e(d,b),_(a,h,f),y(p,a,f),w=!0},p:Jt,i(a){w||(N(p.$$.fragment,a),w=!0)},o(a){T(p.$$.fragment,a),w=!1},d(a){a&&o(d),a&&o(h),R(p,a)}}}function Tr(x){let d,b,h,p,w,a,f,F,Fo,Xt,D,Y,vt,ye,Eo,yt,ko,Yt,Z,jo,Ne,Co,Ao,Zt,et,Mo,eo,tt,Io,to,ot,Nt,Po,oo,at,qo,ao,ee,Te,zo,st,Oo,Do,So,te,Lo,Re,Wo,Uo,xe,Ho,so,E,Vo,Fe,Bo,Go,Ee,Ko,Jo,ke,Qo,Xo,je,Yo,Zo,ro,S,oe,Tt,Ce,ea,Rt,ta,no,k,Ae,oa,L,aa,rt,sa,ra,Me,na,la,ia,W,da,nt,ca,fa,lt,pa,ga,ha,ae,lo,U,se,xt,Ie,ma,Ft,ua,io,P,Pe,_a,qe,wa,ze,ba,$a,va,C,Oe,ya,H,Na,it,Ta,Ra,Et,xa,Fa,Ea,re,ka,ne,co,V,le,kt,De,ja,jt,Ca,fo,j,Se,Aa,Ct,Ma,Ia,Le,Pa,We,qa,za,Oa,A,Ue,Da,B,Sa,dt,La,Wa,At,Ua,Ha,Va,ie,Ba,de,po,G,ce,Mt,He,Ga,It,Ka,go,q,Ve,Ja,Pt,Qa,Xa,M,Be,Ya,K,Za,ct,es,ts,qt,os,as,ss,fe,rs,pe,ho,J,ge,zt,Ge,ns,Ot,ls,mo,z,Ke,is,Dt,ds,cs,I,Je,fs,Q,ps,ft,gs,hs,St,ms,us,_s,he,ws,me,uo;return a=new Ze({}),ye=new Ze({}),Ce=new Ze({}),Ae=new X({props:{name:"class transformers.RegNetConfig",anchor:"transformers.RegNetConfig",parameters:[{name:"num_channels",val:" = 3"},{name:"embedding_size",val:" = 32"},{name:"hidden_sizes",val:" = [128, 192, 512, 1088]"},{name:"depths",val:" = [2, 6, 12, 2]"},{name:"groups_width",val:" = 64"},{name:"layer_type",val:" = 'y'"},{name:"hidden_act",val:" = 'relu'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RegNetConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.RegNetConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Dimensionality (hidden size) for the embedding layer.`,name:"embedding_size"},{anchor:"transformers.RegNetConfig.hidden_sizes",description:`<strong>hidden_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[256, 512, 1024, 2048]</code>) &#x2014;
Dimensionality (hidden size) at each stage.`,name:"hidden_sizes"},{anchor:"transformers.RegNetConfig.depths",description:`<strong>depths</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 4, 6, 3]</code>) &#x2014;
Depth (number of layers) for each stage.`,name:"depths"},{anchor:"transformers.RegNetConfig.layer_type",description:`<strong>layer_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;y&quot;</code>) &#x2014;
The layer to use, it can be either <code>&quot;x&quot; or </code>&#x201C;y&#x201D;<code>. An </code>x<code>layer is a ResNet&apos;s BottleNeck layer with</code>reduction<code>fixed to</code>1<code>. While a </code>y<code>layer is a</code>x\` but with squeeze and excitation. Please refer to the
paper for a detailed explanation of how these layers were constructed.`,name:"layer_type"},{anchor:"transformers.RegNetConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
The non-linear activation function in each block. If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code>
are supported.`,name:"hidden_act"},{anchor:"transformers.RegNetConfig.downsample_in_first_stage",description:`<strong>downsample_in_first_stage</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, the first stage will downsample the inputs using a <code>stride</code> of 2.`,name:"downsample_in_first_stage"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/regnet/configuration_regnet.py#L28"}}),ae=new Kt({props:{anchor:"transformers.RegNetConfig.example",$$slots:{default:[mr]},$$scope:{ctx:x}}}),Ie=new Ze({}),Pe=new X({props:{name:"class transformers.RegNetModel",anchor:"transformers.RegNetModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RegNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/regnet#transformers.RegNetConfig">RegNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/regnet/modeling_regnet.py#L332"}}),Oe=new X({props:{name:"forward",anchor:"transformers.RegNetModel.forward",parameters:[{name:"pixel_values",val:": Tensor"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RegNetModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.RegNetModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RegNetModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/regnet/modeling_regnet.py#L342",returnDescription:`
<p>A <code>transformers.modeling_outputs.BaseModelOutputWithPoolingAndNoAttention</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/regnet#transformers.RegNetConfig"
>RegNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state after a pooling operation on the spatial dimensions.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, num_channels, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_outputs.BaseModelOutputWithPoolingAndNoAttention</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),re=new xo({props:{$$slots:{default:[ur]},$$scope:{ctx:x}}}),ne=new Kt({props:{anchor:"transformers.RegNetModel.forward.example",$$slots:{default:[_r]},$$scope:{ctx:x}}}),De=new Ze({}),Se=new X({props:{name:"class transformers.RegNetForImageClassification",anchor:"transformers.RegNetForImageClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RegNetForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/regnet#transformers.RegNetConfig">RegNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/regnet/modeling_regnet.py#L387"}}),Ue=new X({props:{name:"forward",anchor:"transformers.RegNetForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RegNetForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.RegNetForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RegNetForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RegNetForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/regnet/modeling_regnet.py#L400",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutputWithNoAttention"
>transformers.modeling_outputs.ImageClassifierOutputWithNoAttention</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/regnet#transformers.RegNetConfig"
>RegNetConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each stage) of shape <code>(batch_size, num_channels, height, width)</code>. Hidden-states (also
called feature maps) of the model at the output of each stage.</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutputWithNoAttention"
>transformers.modeling_outputs.ImageClassifierOutputWithNoAttention</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ie=new xo({props:{$$slots:{default:[wr]},$$scope:{ctx:x}}}),de=new Kt({props:{anchor:"transformers.RegNetForImageClassification.forward.example",$$slots:{default:[br]},$$scope:{ctx:x}}}),He=new Ze({}),Ve=new X({props:{name:"class transformers.TFRegNetModel",anchor:"transformers.TFRegNetModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRegNetModel.This",description:`<strong>This</strong> model is a Tensorflow &#x2014;
[tf.keras.layers.Layer](https &#x2014;//<a href="http://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer" rel="nofollow">www.tensorflow.org/api_docs/python/tf/keras/layers/Layer</a>) sub-class. Use it as a`,name:"This"},{anchor:"transformers.TFRegNetModel.regular",description:`<strong>regular</strong> Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and &#x2014;
behavior. &#x2014;
config (<a href="/docs/transformers/main/en/model_doc/regnet#transformers.RegNetConfig">RegNetConfig</a>): Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"regular"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/regnet/modeling_tf_regnet.py#L406"}}),Be=new X({props:{name:"call",anchor:"transformers.TFRegNetModel.call",parameters:[{name:"pixel_values",val:": Tensor"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFRegNetModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.TFRegNetModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFRegNetModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/regnet/modeling_tf_regnet.py#L411",returnDescription:`
<p>A <code>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndNoAttention</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/regnet#transformers.RegNetConfig"
>RegNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state after a pooling operation on the spatial dimensions.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings, if the model has an embedding layer, + one for
the output of each layer) of shape <code>(batch_size, num_channels, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndNoAttention</code> or <code>tuple(tf.Tensor)</code></p>
`}}),fe=new xo({props:{$$slots:{default:[$r]},$$scope:{ctx:x}}}),pe=new Kt({props:{anchor:"transformers.TFRegNetModel.call.example",$$slots:{default:[vr]},$$scope:{ctx:x}}}),Ge=new Ze({}),Ke=new X({props:{name:"class transformers.TFRegNetForImageClassification",anchor:"transformers.TFRegNetForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRegNetForImageClassification.This",description:`<strong>This</strong> model is a Tensorflow &#x2014;
[tf.keras.layers.Layer](https &#x2014;//<a href="http://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer" rel="nofollow">www.tensorflow.org/api_docs/python/tf/keras/layers/Layer</a>) sub-class. Use it as a`,name:"This"},{anchor:"transformers.TFRegNetForImageClassification.regular",description:`<strong>regular</strong> Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and &#x2014;
behavior. &#x2014;
config (<a href="/docs/transformers/main/en/model_doc/regnet#transformers.RegNetConfig">RegNetConfig</a>): Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"regular"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/regnet/modeling_tf_regnet.py#L466"}}),Je=new X({props:{name:"call",anchor:"transformers.TFRegNetForImageClassification.call",parameters:[{name:"pixel_values",val:": Tensor = None"},{name:"labels",val:": Tensor = None"},{name:"output_hidden_states",val:": bool = None"},{name:"return_dict",val:": bool = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFRegNetForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.TFRegNetForImageClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFRegNetForImageClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFRegNetForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/regnet/modeling_tf_regnet.py#L477",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/regnet#transformers.RegNetConfig"
>RegNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),he=new xo({props:{$$slots:{default:[yr]},$$scope:{ctx:x}}}),me=new Kt({props:{anchor:"transformers.TFRegNetForImageClassification.call.example",$$slots:{default:[Nr]},$$scope:{ctx:x}}}),{c(){d=s("meta"),b=m(),h=s("h1"),p=s("a"),w=s("span"),$(a.$$.fragment),f=m(),F=s("span"),Fo=l("RegNet"),Xt=m(),D=s("h2"),Y=s("a"),vt=s("span"),$(ye.$$.fragment),Eo=m(),yt=s("span"),ko=l("Overview"),Yt=m(),Z=s("p"),jo=l("The RegNet model was proposed in "),Ne=s("a"),Co=l("Designing Network Design Spaces"),Ao=l(" by Ilija Radosavovic, Raj Prateek Kosaraju, Ross Girshick, Kaiming He, Piotr Doll\xE1r."),Zt=m(),et=s("p"),Mo=l("The authors design search spaces to perform Neural Architecture Search (NAS). They first start from a high dimensional search space and iteratively reduce the search space by empirically applying constraints based on the best-performing models sampled by the current search space."),eo=m(),tt=s("p"),Io=l("The abstract from the paper is the following:"),to=m(),ot=s("p"),Nt=s("em"),Po=l("In this work, we present a new network design paradigm. Our goal is to help advance the understanding of network design and discover design principles that generalize across settings. Instead of focusing on designing individual network instances, we design network design spaces that parametrize populations of networks. The overall process is analogous to classic manual design of networks, but elevated to the design space level. Using our methodology we explore the structure aspect of network design and arrive at a low-dimensional design space consisting of simple, regular networks that we call RegNet. The core insight of the RegNet parametrization is surprisingly simple: widths and depths of good networks can be explained by a quantized linear function. We analyze the RegNet design space and arrive at interesting findings that do not match the current practice of network design. The RegNet design space provides simple and fast networks that work well across a wide range of flop regimes. Under comparable training settings and flops, the RegNet models outperform the popular EfficientNet models while being up to 5x faster on GPUs."),oo=m(),at=s("p"),qo=l("Tips:"),ao=m(),ee=s("ul"),Te=s("li"),zo=l("One can use "),st=s("a"),Oo=l("AutoFeatureExtractor"),Do=l(" to prepare images for the model."),So=m(),te=s("li"),Lo=l("The huge 10B model from "),Re=s("a"),Wo=l("Self-supervised Pretraining of Visual Features in the Wild"),Uo=l(", trained on one billion Instagram images, is available on the "),xe=s("a"),Ho=l("hub"),so=m(),E=s("p"),Vo=l("This model was contributed by "),Fe=s("a"),Bo=l("Francesco"),Go=l(`. The TensorFlow version of the model
was contributed by `),Ee=s("a"),Ko=l("sayakpaul"),Jo=l(" and "),ke=s("a"),Qo=l("ariG23498"),Xo=l(`.
The original code can be found `),je=s("a"),Yo=l("here"),Zo=l("."),ro=m(),S=s("h2"),oe=s("a"),Tt=s("span"),$(Ce.$$.fragment),ea=m(),Rt=s("span"),ta=l("RegNetConfig"),no=m(),k=s("div"),$(Ae.$$.fragment),oa=m(),L=s("p"),aa=l("This is the configuration class to store the configuration of a "),rt=s("a"),sa=l("RegNetModel"),ra=l(`. It is used to instantiate a RegNet
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the RegNet
`),Me=s("a"),na=l("facebook/regnet-y-040"),la=l(" architecture."),ia=m(),W=s("p"),da=l("Configuration objects inherit from "),nt=s("a"),ca=l("PretrainedConfig"),fa=l(` and can be used to control the model outputs. Read the
documentation from `),lt=s("a"),pa=l("PretrainedConfig"),ga=l(" for more information."),ha=m(),$(ae.$$.fragment),lo=m(),U=s("h2"),se=s("a"),xt=s("span"),$(Ie.$$.fragment),ma=m(),Ft=s("span"),ua=l("RegNetModel"),io=m(),P=s("div"),$(Pe.$$.fragment),_a=m(),qe=s("p"),wa=l(`The bare RegNet model outputting raw features without any specific head on top.
This model is a PyTorch `),ze=s("a"),ba=l("torch.nn.Module"),$a=l(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),va=m(),C=s("div"),$(Oe.$$.fragment),ya=m(),H=s("p"),Na=l("The "),it=s("a"),Ta=l("RegNetModel"),Ra=l(" forward method, overrides the "),Et=s("code"),xa=l("__call__"),Fa=l(" special method."),Ea=m(),$(re.$$.fragment),ka=m(),$(ne.$$.fragment),co=m(),V=s("h2"),le=s("a"),kt=s("span"),$(De.$$.fragment),ja=m(),jt=s("span"),Ca=l("RegNetForImageClassification"),fo=m(),j=s("div"),$(Se.$$.fragment),Aa=m(),Ct=s("p"),Ma=l(`RegNet Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),Ia=m(),Le=s("p"),Pa=l("This model is a PyTorch "),We=s("a"),qa=l("torch.nn.Module"),za=l(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Oa=m(),A=s("div"),$(Ue.$$.fragment),Da=m(),B=s("p"),Sa=l("The "),dt=s("a"),La=l("RegNetForImageClassification"),Wa=l(" forward method, overrides the "),At=s("code"),Ua=l("__call__"),Ha=l(" special method."),Va=m(),$(ie.$$.fragment),Ba=m(),$(de.$$.fragment),po=m(),G=s("h2"),ce=s("a"),Mt=s("span"),$(He.$$.fragment),Ga=m(),It=s("span"),Ka=l("TFRegNetModel"),go=m(),q=s("div"),$(Ve.$$.fragment),Ja=m(),Pt=s("p"),Qa=l("The bare RegNet model outputting raw features without any specific head on top."),Xa=m(),M=s("div"),$(Be.$$.fragment),Ya=m(),K=s("p"),Za=l("The "),ct=s("a"),es=l("TFRegNetModel"),ts=l(" forward method, overrides the "),qt=s("code"),os=l("__call__"),as=l(" special method."),ss=m(),$(fe.$$.fragment),rs=m(),$(pe.$$.fragment),ho=m(),J=s("h2"),ge=s("a"),zt=s("span"),$(Ge.$$.fragment),ns=m(),Ot=s("span"),ls=l("TFRegNetForImageClassification"),mo=m(),z=s("div"),$(Ke.$$.fragment),is=m(),Dt=s("p"),ds=l(`RegNet Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),cs=m(),I=s("div"),$(Je.$$.fragment),fs=m(),Q=s("p"),ps=l("The "),ft=s("a"),gs=l("TFRegNetForImageClassification"),hs=l(" forward method, overrides the "),St=s("code"),ms=l("__call__"),us=l(" special method."),_s=m(),$(he.$$.fragment),ws=m(),$(me.$$.fragment),this.h()},l(t){const g=gr('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(o),b=u(t),h=r(t,"H1",{class:!0});var Qe=n(h);p=r(Qe,"A",{id:!0,class:!0,href:!0});var Lt=n(p);w=r(Lt,"SPAN",{});var Wt=n(w);v(a.$$.fragment,Wt),Wt.forEach(o),Lt.forEach(o),f=u(Qe),F=r(Qe,"SPAN",{});var Ut=n(F);Fo=i(Ut,"RegNet"),Ut.forEach(o),Qe.forEach(o),Xt=u(t),D=r(t,"H2",{class:!0});var Xe=n(D);Y=r(Xe,"A",{id:!0,class:!0,href:!0});var Ht=n(Y);vt=r(Ht,"SPAN",{});var Vt=n(vt);v(ye.$$.fragment,Vt),Vt.forEach(o),Ht.forEach(o),Eo=u(Xe),yt=r(Xe,"SPAN",{});var Bt=n(yt);ko=i(Bt,"Overview"),Bt.forEach(o),Xe.forEach(o),Yt=u(t),Z=r(t,"P",{});var Ye=n(Z);jo=i(Ye,"The RegNet model was proposed in "),Ne=r(Ye,"A",{href:!0,rel:!0});var bs=n(Ne);Co=i(bs,"Designing Network Design Spaces"),bs.forEach(o),Ao=i(Ye," by Ilija Radosavovic, Raj Prateek Kosaraju, Ross Girshick, Kaiming He, Piotr Doll\xE1r."),Ye.forEach(o),Zt=u(t),et=r(t,"P",{});var $s=n(et);Mo=i($s,"The authors design search spaces to perform Neural Architecture Search (NAS). They first start from a high dimensional search space and iteratively reduce the search space by empirically applying constraints based on the best-performing models sampled by the current search space."),$s.forEach(o),eo=u(t),tt=r(t,"P",{});var vs=n(tt);Io=i(vs,"The abstract from the paper is the following:"),vs.forEach(o),to=u(t),ot=r(t,"P",{});var ys=n(ot);Nt=r(ys,"EM",{});var Ns=n(Nt);Po=i(Ns,"In this work, we present a new network design paradigm. Our goal is to help advance the understanding of network design and discover design principles that generalize across settings. Instead of focusing on designing individual network instances, we design network design spaces that parametrize populations of networks. The overall process is analogous to classic manual design of networks, but elevated to the design space level. Using our methodology we explore the structure aspect of network design and arrive at a low-dimensional design space consisting of simple, regular networks that we call RegNet. The core insight of the RegNet parametrization is surprisingly simple: widths and depths of good networks can be explained by a quantized linear function. We analyze the RegNet design space and arrive at interesting findings that do not match the current practice of network design. The RegNet design space provides simple and fast networks that work well across a wide range of flop regimes. Under comparable training settings and flops, the RegNet models outperform the popular EfficientNet models while being up to 5x faster on GPUs."),Ns.forEach(o),ys.forEach(o),oo=u(t),at=r(t,"P",{});var Ts=n(at);qo=i(Ts,"Tips:"),Ts.forEach(o),ao=u(t),ee=r(t,"UL",{});var _o=n(ee);Te=r(_o,"LI",{});var wo=n(Te);zo=i(wo,"One can use "),st=r(wo,"A",{href:!0});var Rs=n(st);Oo=i(Rs,"AutoFeatureExtractor"),Rs.forEach(o),Do=i(wo," to prepare images for the model."),wo.forEach(o),So=u(_o),te=r(_o,"LI",{});var Gt=n(te);Lo=i(Gt,"The huge 10B model from "),Re=r(Gt,"A",{href:!0,rel:!0});var xs=n(Re);Wo=i(xs,"Self-supervised Pretraining of Visual Features in the Wild"),xs.forEach(o),Uo=i(Gt,", trained on one billion Instagram images, is available on the "),xe=r(Gt,"A",{href:!0,rel:!0});var Fs=n(xe);Ho=i(Fs,"hub"),Fs.forEach(o),Gt.forEach(o),_o.forEach(o),so=u(t),E=r(t,"P",{});var O=n(E);Vo=i(O,"This model was contributed by "),Fe=r(O,"A",{href:!0,rel:!0});var Es=n(Fe);Bo=i(Es,"Francesco"),Es.forEach(o),Go=i(O,`. The TensorFlow version of the model
was contributed by `),Ee=r(O,"A",{href:!0,rel:!0});var ks=n(Ee);Ko=i(ks,"sayakpaul"),ks.forEach(o),Jo=i(O," and "),ke=r(O,"A",{href:!0,rel:!0});var js=n(ke);Qo=i(js,"ariG23498"),js.forEach(o),Xo=i(O,`.
The original code can be found `),je=r(O,"A",{href:!0,rel:!0});var Cs=n(je);Yo=i(Cs,"here"),Cs.forEach(o),Zo=i(O,"."),O.forEach(o),ro=u(t),S=r(t,"H2",{class:!0});var bo=n(S);oe=r(bo,"A",{id:!0,class:!0,href:!0});var As=n(oe);Tt=r(As,"SPAN",{});var Ms=n(Tt);v(Ce.$$.fragment,Ms),Ms.forEach(o),As.forEach(o),ea=u(bo),Rt=r(bo,"SPAN",{});var Is=n(Rt);ta=i(Is,"RegNetConfig"),Is.forEach(o),bo.forEach(o),no=u(t),k=r(t,"DIV",{class:!0});var ue=n(k);v(Ae.$$.fragment,ue),oa=u(ue),L=r(ue,"P",{});var pt=n(L);aa=i(pt,"This is the configuration class to store the configuration of a "),rt=r(pt,"A",{href:!0});var Ps=n(rt);sa=i(Ps,"RegNetModel"),Ps.forEach(o),ra=i(pt,`. It is used to instantiate a RegNet
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the RegNet
`),Me=r(pt,"A",{href:!0,rel:!0});var qs=n(Me);na=i(qs,"facebook/regnet-y-040"),qs.forEach(o),la=i(pt," architecture."),pt.forEach(o),ia=u(ue),W=r(ue,"P",{});var gt=n(W);da=i(gt,"Configuration objects inherit from "),nt=r(gt,"A",{href:!0});var zs=n(nt);ca=i(zs,"PretrainedConfig"),zs.forEach(o),fa=i(gt,` and can be used to control the model outputs. Read the
documentation from `),lt=r(gt,"A",{href:!0});var Os=n(lt);pa=i(Os,"PretrainedConfig"),Os.forEach(o),ga=i(gt," for more information."),gt.forEach(o),ha=u(ue),v(ae.$$.fragment,ue),ue.forEach(o),lo=u(t),U=r(t,"H2",{class:!0});var $o=n(U);se=r($o,"A",{id:!0,class:!0,href:!0});var Ds=n(se);xt=r(Ds,"SPAN",{});var Ss=n(xt);v(Ie.$$.fragment,Ss),Ss.forEach(o),Ds.forEach(o),ma=u($o),Ft=r($o,"SPAN",{});var Ls=n(Ft);ua=i(Ls,"RegNetModel"),Ls.forEach(o),$o.forEach(o),io=u(t),P=r(t,"DIV",{class:!0});var ht=n(P);v(Pe.$$.fragment,ht),_a=u(ht),qe=r(ht,"P",{});var vo=n(qe);wa=i(vo,`The bare RegNet model outputting raw features without any specific head on top.
This model is a PyTorch `),ze=r(vo,"A",{href:!0,rel:!0});var Ws=n(ze);ba=i(Ws,"torch.nn.Module"),Ws.forEach(o),$a=i(vo,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),vo.forEach(o),va=u(ht),C=r(ht,"DIV",{class:!0});var _e=n(C);v(Oe.$$.fragment,_e),ya=u(_e),H=r(_e,"P",{});var mt=n(H);Na=i(mt,"The "),it=r(mt,"A",{href:!0});var Us=n(it);Ta=i(Us,"RegNetModel"),Us.forEach(o),Ra=i(mt," forward method, overrides the "),Et=r(mt,"CODE",{});var Hs=n(Et);xa=i(Hs,"__call__"),Hs.forEach(o),Fa=i(mt," special method."),mt.forEach(o),Ea=u(_e),v(re.$$.fragment,_e),ka=u(_e),v(ne.$$.fragment,_e),_e.forEach(o),ht.forEach(o),co=u(t),V=r(t,"H2",{class:!0});var yo=n(V);le=r(yo,"A",{id:!0,class:!0,href:!0});var Vs=n(le);kt=r(Vs,"SPAN",{});var Bs=n(kt);v(De.$$.fragment,Bs),Bs.forEach(o),Vs.forEach(o),ja=u(yo),jt=r(yo,"SPAN",{});var Gs=n(jt);Ca=i(Gs,"RegNetForImageClassification"),Gs.forEach(o),yo.forEach(o),fo=u(t),j=r(t,"DIV",{class:!0});var we=n(j);v(Se.$$.fragment,we),Aa=u(we),Ct=r(we,"P",{});var Ks=n(Ct);Ma=i(Ks,`RegNet Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),Ks.forEach(o),Ia=u(we),Le=r(we,"P",{});var No=n(Le);Pa=i(No,"This model is a PyTorch "),We=r(No,"A",{href:!0,rel:!0});var Js=n(We);qa=i(Js,"torch.nn.Module"),Js.forEach(o),za=i(No,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),No.forEach(o),Oa=u(we),A=r(we,"DIV",{class:!0});var be=n(A);v(Ue.$$.fragment,be),Da=u(be),B=r(be,"P",{});var ut=n(B);Sa=i(ut,"The "),dt=r(ut,"A",{href:!0});var Qs=n(dt);La=i(Qs,"RegNetForImageClassification"),Qs.forEach(o),Wa=i(ut," forward method, overrides the "),At=r(ut,"CODE",{});var Xs=n(At);Ua=i(Xs,"__call__"),Xs.forEach(o),Ha=i(ut," special method."),ut.forEach(o),Va=u(be),v(ie.$$.fragment,be),Ba=u(be),v(de.$$.fragment,be),be.forEach(o),we.forEach(o),po=u(t),G=r(t,"H2",{class:!0});var To=n(G);ce=r(To,"A",{id:!0,class:!0,href:!0});var Ys=n(ce);Mt=r(Ys,"SPAN",{});var Zs=n(Mt);v(He.$$.fragment,Zs),Zs.forEach(o),Ys.forEach(o),Ga=u(To),It=r(To,"SPAN",{});var er=n(It);Ka=i(er,"TFRegNetModel"),er.forEach(o),To.forEach(o),go=u(t),q=r(t,"DIV",{class:!0});var _t=n(q);v(Ve.$$.fragment,_t),Ja=u(_t),Pt=r(_t,"P",{});var tr=n(Pt);Qa=i(tr,"The bare RegNet model outputting raw features without any specific head on top."),tr.forEach(o),Xa=u(_t),M=r(_t,"DIV",{class:!0});var $e=n(M);v(Be.$$.fragment,$e),Ya=u($e),K=r($e,"P",{});var wt=n(K);Za=i(wt,"The "),ct=r(wt,"A",{href:!0});var or=n(ct);es=i(or,"TFRegNetModel"),or.forEach(o),ts=i(wt," forward method, overrides the "),qt=r(wt,"CODE",{});var ar=n(qt);os=i(ar,"__call__"),ar.forEach(o),as=i(wt," special method."),wt.forEach(o),ss=u($e),v(fe.$$.fragment,$e),rs=u($e),v(pe.$$.fragment,$e),$e.forEach(o),_t.forEach(o),ho=u(t),J=r(t,"H2",{class:!0});var Ro=n(J);ge=r(Ro,"A",{id:!0,class:!0,href:!0});var sr=n(ge);zt=r(sr,"SPAN",{});var rr=n(zt);v(Ge.$$.fragment,rr),rr.forEach(o),sr.forEach(o),ns=u(Ro),Ot=r(Ro,"SPAN",{});var nr=n(Ot);ls=i(nr,"TFRegNetForImageClassification"),nr.forEach(o),Ro.forEach(o),mo=u(t),z=r(t,"DIV",{class:!0});var bt=n(z);v(Ke.$$.fragment,bt),is=u(bt),Dt=r(bt,"P",{});var lr=n(Dt);ds=i(lr,`RegNet Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),lr.forEach(o),cs=u(bt),I=r(bt,"DIV",{class:!0});var ve=n(I);v(Je.$$.fragment,ve),fs=u(ve),Q=r(ve,"P",{});var $t=n(Q);ps=i($t,"The "),ft=r($t,"A",{href:!0});var ir=n(ft);gs=i(ir,"TFRegNetForImageClassification"),ir.forEach(o),hs=i($t," forward method, overrides the "),St=r($t,"CODE",{});var dr=n(St);ms=i(dr,"__call__"),dr.forEach(o),us=i($t," special method."),$t.forEach(o),_s=u(ve),v(he.$$.fragment,ve),ws=u(ve),v(me.$$.fragment,ve),ve.forEach(o),bt.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(Rr)),c(p,"id","regnet"),c(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(p,"href","#regnet"),c(h,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(D,"class","relative group"),c(Ne,"href","https://arxiv.org/abs/2003.13678"),c(Ne,"rel","nofollow"),c(st,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor"),c(Re,"href","https://arxiv.org/abs/2103.01988"),c(Re,"rel","nofollow"),c(xe,"href","https://huggingface.co/facebook/regnet-y-10b-seer"),c(xe,"rel","nofollow"),c(Fe,"href","https://huggingface.co/Francesco"),c(Fe,"rel","nofollow"),c(Ee,"href","https://huggingface.com/sayakpaul"),c(Ee,"rel","nofollow"),c(ke,"href","https://huggingface.com/ariG23498"),c(ke,"rel","nofollow"),c(je,"href","https://github.com/facebookresearch/pycls"),c(je,"rel","nofollow"),c(oe,"id","transformers.RegNetConfig"),c(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oe,"href","#transformers.RegNetConfig"),c(S,"class","relative group"),c(rt,"href","/docs/transformers/main/en/model_doc/regnet#transformers.RegNetModel"),c(Me,"href","https://huggingface.co/facebook/regnet-y-040"),c(Me,"rel","nofollow"),c(nt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(lt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(se,"id","transformers.RegNetModel"),c(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(se,"href","#transformers.RegNetModel"),c(U,"class","relative group"),c(ze,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ze,"rel","nofollow"),c(it,"href","/docs/transformers/main/en/model_doc/regnet#transformers.RegNetModel"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(le,"id","transformers.RegNetForImageClassification"),c(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(le,"href","#transformers.RegNetForImageClassification"),c(V,"class","relative group"),c(We,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(We,"rel","nofollow"),c(dt,"href","/docs/transformers/main/en/model_doc/regnet#transformers.RegNetForImageClassification"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ce,"id","transformers.TFRegNetModel"),c(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ce,"href","#transformers.TFRegNetModel"),c(G,"class","relative group"),c(ct,"href","/docs/transformers/main/en/model_doc/regnet#transformers.TFRegNetModel"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ge,"id","transformers.TFRegNetForImageClassification"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#transformers.TFRegNetForImageClassification"),c(J,"class","relative group"),c(ft,"href","/docs/transformers/main/en/model_doc/regnet#transformers.TFRegNetForImageClassification"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),_(t,b,g),_(t,h,g),e(h,p),e(p,w),y(a,w,null),e(h,f),e(h,F),e(F,Fo),_(t,Xt,g),_(t,D,g),e(D,Y),e(Y,vt),y(ye,vt,null),e(D,Eo),e(D,yt),e(yt,ko),_(t,Yt,g),_(t,Z,g),e(Z,jo),e(Z,Ne),e(Ne,Co),e(Z,Ao),_(t,Zt,g),_(t,et,g),e(et,Mo),_(t,eo,g),_(t,tt,g),e(tt,Io),_(t,to,g),_(t,ot,g),e(ot,Nt),e(Nt,Po),_(t,oo,g),_(t,at,g),e(at,qo),_(t,ao,g),_(t,ee,g),e(ee,Te),e(Te,zo),e(Te,st),e(st,Oo),e(Te,Do),e(ee,So),e(ee,te),e(te,Lo),e(te,Re),e(Re,Wo),e(te,Uo),e(te,xe),e(xe,Ho),_(t,so,g),_(t,E,g),e(E,Vo),e(E,Fe),e(Fe,Bo),e(E,Go),e(E,Ee),e(Ee,Ko),e(E,Jo),e(E,ke),e(ke,Qo),e(E,Xo),e(E,je),e(je,Yo),e(E,Zo),_(t,ro,g),_(t,S,g),e(S,oe),e(oe,Tt),y(Ce,Tt,null),e(S,ea),e(S,Rt),e(Rt,ta),_(t,no,g),_(t,k,g),y(Ae,k,null),e(k,oa),e(k,L),e(L,aa),e(L,rt),e(rt,sa),e(L,ra),e(L,Me),e(Me,na),e(L,la),e(k,ia),e(k,W),e(W,da),e(W,nt),e(nt,ca),e(W,fa),e(W,lt),e(lt,pa),e(W,ga),e(k,ha),y(ae,k,null),_(t,lo,g),_(t,U,g),e(U,se),e(se,xt),y(Ie,xt,null),e(U,ma),e(U,Ft),e(Ft,ua),_(t,io,g),_(t,P,g),y(Pe,P,null),e(P,_a),e(P,qe),e(qe,wa),e(qe,ze),e(ze,ba),e(qe,$a),e(P,va),e(P,C),y(Oe,C,null),e(C,ya),e(C,H),e(H,Na),e(H,it),e(it,Ta),e(H,Ra),e(H,Et),e(Et,xa),e(H,Fa),e(C,Ea),y(re,C,null),e(C,ka),y(ne,C,null),_(t,co,g),_(t,V,g),e(V,le),e(le,kt),y(De,kt,null),e(V,ja),e(V,jt),e(jt,Ca),_(t,fo,g),_(t,j,g),y(Se,j,null),e(j,Aa),e(j,Ct),e(Ct,Ma),e(j,Ia),e(j,Le),e(Le,Pa),e(Le,We),e(We,qa),e(Le,za),e(j,Oa),e(j,A),y(Ue,A,null),e(A,Da),e(A,B),e(B,Sa),e(B,dt),e(dt,La),e(B,Wa),e(B,At),e(At,Ua),e(B,Ha),e(A,Va),y(ie,A,null),e(A,Ba),y(de,A,null),_(t,po,g),_(t,G,g),e(G,ce),e(ce,Mt),y(He,Mt,null),e(G,Ga),e(G,It),e(It,Ka),_(t,go,g),_(t,q,g),y(Ve,q,null),e(q,Ja),e(q,Pt),e(Pt,Qa),e(q,Xa),e(q,M),y(Be,M,null),e(M,Ya),e(M,K),e(K,Za),e(K,ct),e(ct,es),e(K,ts),e(K,qt),e(qt,os),e(K,as),e(M,ss),y(fe,M,null),e(M,rs),y(pe,M,null),_(t,ho,g),_(t,J,g),e(J,ge),e(ge,zt),y(Ge,zt,null),e(J,ns),e(J,Ot),e(Ot,ls),_(t,mo,g),_(t,z,g),y(Ke,z,null),e(z,is),e(z,Dt),e(Dt,ds),e(z,cs),e(z,I),y(Je,I,null),e(I,fs),e(I,Q),e(Q,ps),e(Q,ft),e(ft,gs),e(Q,hs),e(Q,St),e(St,ms),e(Q,us),e(I,_s),y(he,I,null),e(I,ws),y(me,I,null),uo=!0},p(t,[g]){const Qe={};g&2&&(Qe.$$scope={dirty:g,ctx:t}),ae.$set(Qe);const Lt={};g&2&&(Lt.$$scope={dirty:g,ctx:t}),re.$set(Lt);const Wt={};g&2&&(Wt.$$scope={dirty:g,ctx:t}),ne.$set(Wt);const Ut={};g&2&&(Ut.$$scope={dirty:g,ctx:t}),ie.$set(Ut);const Xe={};g&2&&(Xe.$$scope={dirty:g,ctx:t}),de.$set(Xe);const Ht={};g&2&&(Ht.$$scope={dirty:g,ctx:t}),fe.$set(Ht);const Vt={};g&2&&(Vt.$$scope={dirty:g,ctx:t}),pe.$set(Vt);const Bt={};g&2&&(Bt.$$scope={dirty:g,ctx:t}),he.$set(Bt);const Ye={};g&2&&(Ye.$$scope={dirty:g,ctx:t}),me.$set(Ye)},i(t){uo||(N(a.$$.fragment,t),N(ye.$$.fragment,t),N(Ce.$$.fragment,t),N(Ae.$$.fragment,t),N(ae.$$.fragment,t),N(Ie.$$.fragment,t),N(Pe.$$.fragment,t),N(Oe.$$.fragment,t),N(re.$$.fragment,t),N(ne.$$.fragment,t),N(De.$$.fragment,t),N(Se.$$.fragment,t),N(Ue.$$.fragment,t),N(ie.$$.fragment,t),N(de.$$.fragment,t),N(He.$$.fragment,t),N(Ve.$$.fragment,t),N(Be.$$.fragment,t),N(fe.$$.fragment,t),N(pe.$$.fragment,t),N(Ge.$$.fragment,t),N(Ke.$$.fragment,t),N(Je.$$.fragment,t),N(he.$$.fragment,t),N(me.$$.fragment,t),uo=!0)},o(t){T(a.$$.fragment,t),T(ye.$$.fragment,t),T(Ce.$$.fragment,t),T(Ae.$$.fragment,t),T(ae.$$.fragment,t),T(Ie.$$.fragment,t),T(Pe.$$.fragment,t),T(Oe.$$.fragment,t),T(re.$$.fragment,t),T(ne.$$.fragment,t),T(De.$$.fragment,t),T(Se.$$.fragment,t),T(Ue.$$.fragment,t),T(ie.$$.fragment,t),T(de.$$.fragment,t),T(He.$$.fragment,t),T(Ve.$$.fragment,t),T(Be.$$.fragment,t),T(fe.$$.fragment,t),T(pe.$$.fragment,t),T(Ge.$$.fragment,t),T(Ke.$$.fragment,t),T(Je.$$.fragment,t),T(he.$$.fragment,t),T(me.$$.fragment,t),uo=!1},d(t){o(d),t&&o(b),t&&o(h),R(a),t&&o(Xt),t&&o(D),R(ye),t&&o(Yt),t&&o(Z),t&&o(Zt),t&&o(et),t&&o(eo),t&&o(tt),t&&o(to),t&&o(ot),t&&o(oo),t&&o(at),t&&o(ao),t&&o(ee),t&&o(so),t&&o(E),t&&o(ro),t&&o(S),R(Ce),t&&o(no),t&&o(k),R(Ae),R(ae),t&&o(lo),t&&o(U),R(Ie),t&&o(io),t&&o(P),R(Pe),R(Oe),R(re),R(ne),t&&o(co),t&&o(V),R(De),t&&o(fo),t&&o(j),R(Se),R(Ue),R(ie),R(de),t&&o(po),t&&o(G),R(He),t&&o(go),t&&o(q),R(Ve),R(Be),R(fe),R(pe),t&&o(ho),t&&o(J),R(Ge),t&&o(mo),t&&o(z),R(Ke),R(Je),R(he),R(me)}}}const Rr={local:"regnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.RegNetConfig",title:"RegNetConfig"},{local:"transformers.RegNetModel",title:"RegNetModel"},{local:"transformers.RegNetForImageClassification",title:"RegNetForImageClassification"},{local:"transformers.TFRegNetModel",title:"TFRegNetModel"},{local:"transformers.TFRegNetForImageClassification",title:"TFRegNetForImageClassification"}],title:"RegNet"};function xr(x){return hr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Mr extends cr{constructor(d){super();fr(this,d,xr,Tr,pr,{})}}export{Mr as default,Rr as metadata};
