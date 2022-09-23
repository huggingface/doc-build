import{S as _s,i as bs,s as vs,e as n,k as h,w as x,t as s,M as xs,c as a,d as o,m as p,a as r,x as w,h as i,b as l,N as ws,G as e,g as _,y as C,q as D,o as y,B as T,v as Cs,L as Qo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Xo}from"../../chunks/Tip-hf-doc-builder.js";import{D as O}from"../../chunks/Docstring-hf-doc-builder.js";import{C as en}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as pt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ko}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ds(j){let c,v,u,m,b;return m=new en({props:{code:`from transformers import ConditionalDetrModel, ConditionalDetrConfig

# Initializing a Conditional DETR microsoft/conditional-detr-resnet-50 style configuration
configuration = ConditionalDetrConfig()

# Initializing a model from the microsoft/conditional-detr-resnet-50 style configuration
model = ConditionalDetrModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConditionalDetrModel, ConditionalDetrConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Conditional DETR microsoft/conditional-detr-resnet-50 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ConditionalDetrConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the microsoft/conditional-detr-resnet-50 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConditionalDetrModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=n("p"),v=s("Examples:"),u=h(),x(m.$$.fragment)},l(d){c=a(d,"P",{});var g=r(c);v=i(g,"Examples:"),g.forEach(o),u=p(d),w(m.$$.fragment,d)},m(d,g){_(d,c,g),e(c,v),_(d,u,g),C(m,d,g),b=!0},p:Qo,i(d){b||(D(m.$$.fragment,d),b=!0)},o(d){y(m.$$.fragment,d),b=!1},d(d){d&&o(c),d&&o(u),T(m,d)}}}function ys(j){let c,v;return{c(){c=n("p"),v=s(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(u){c=a(u,"P",{});var m=r(c);v=i(m,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),m.forEach(o)},m(u,m){_(u,c,m),e(c,v)},d(u){u&&o(c)}}}function Ts(j){let c,v,u,m,b;return{c(){c=n("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){c=a(d,"P",{});var g=r(c);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(g,"CODE",{});var q=r(u);m=i(q,"Module"),q.forEach(o),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(d,g){_(d,c,g),e(c,v),e(c,u),e(u,m),e(c,b)},d(d){d&&o(c)}}}function $s(j){let c,v,u,m,b;return m=new en({props:{code:`from transformers import AutoFeatureExtractor, AutoModel
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/conditional-detr-resnet-50")
model = AutoModel.from_pretrained("microsoft/conditional-detr-resnet-50")

# prepare image for the model
inputs = feature_extractor(images=image, return_tensors="pt")

# forward pass
outputs = model(**inputs)

# the last hidden states are the final query embeddings of the Transformer decoder
# these are of shape (batch_size, num_queries, hidden_size)
last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, AutoModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/conditional-detr-resnet-50&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModel.from_pretrained(<span class="hljs-string">&quot;microsoft/conditional-detr-resnet-50&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare image for the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the last hidden states are the final query embeddings of the Transformer decoder</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># these are of shape (batch_size, num_queries, hidden_size)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">300</span>, <span class="hljs-number">256</span>]`}}),{c(){c=n("p"),v=s("Examples:"),u=h(),x(m.$$.fragment)},l(d){c=a(d,"P",{});var g=r(c);v=i(g,"Examples:"),g.forEach(o),u=p(d),w(m.$$.fragment,d)},m(d,g){_(d,c,g),e(c,v),_(d,u,g),C(m,d,g),b=!0},p:Qo,i(d){b||(D(m.$$.fragment,d),b=!0)},o(d){y(m.$$.fragment,d),b=!1},d(d){d&&o(c),d&&o(u),T(m,d)}}}function js(j){let c,v,u,m,b;return{c(){c=n("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){c=a(d,"P",{});var g=r(c);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(g,"CODE",{});var q=r(u);m=i(q,"Module"),q.forEach(o),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(d,g){_(d,c,g),e(c,v),e(c,u),e(u,m),e(c,b)},d(d){d&&o(c)}}}function Es(j){let c,v,u,m,b;return m=new en({props:{code:`from transformers import AutoFeatureExtractor, AutoModelForObjectDetection
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/conditional-detr-resnet-50")
model = AutoModelForObjectDetection.from_pretrained("microsoft/conditional-detr-resnet-50")

inputs = feature_extractor(images=image, return_tensors="pt")

outputs = model(**inputs)

# convert outputs (bounding boxes and class logits) to COCO API
target_sizes = torch.tensor([image.size[::-1]])
results = feature_extractor.post_process(outputs, target_sizes=target_sizes)[0]
for score, label, box in zip(results["scores"], results["labels"], results["boxes"]):
    box = [round(i, 2) for i in box.tolist()]
    # let's only keep detections with score > 0.5
    if score > 0.5:
        print(
            f"Detected {model.config.id2label[label.item()]} with confidence "
            f"{round(score.item(), 3)} at location {box}"
        )`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, AutoModelForObjectDetection
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/conditional-detr-resnet-50&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForObjectDetection.from_pretrained(<span class="hljs-string">&quot;microsoft/conditional-detr-resnet-50&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># convert outputs (bounding boxes and class logits) to COCO API</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_sizes = torch.tensor([image.size[::-<span class="hljs-number">1</span>]])
<span class="hljs-meta">&gt;&gt;&gt; </span>results = feature_extractor.post_process(outputs, target_sizes=target_sizes)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> score, label, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(results[<span class="hljs-string">&quot;scores&quot;</span>], results[<span class="hljs-string">&quot;labels&quot;</span>], results[<span class="hljs-string">&quot;boxes&quot;</span>]):
<span class="hljs-meta">... </span>    box = [<span class="hljs-built_in">round</span>(i, <span class="hljs-number">2</span>) <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> box.tolist()]
<span class="hljs-meta">... </span>    <span class="hljs-comment"># let&#x27;s only keep detections with score &gt; 0.5</span>
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> score &gt; <span class="hljs-number">0.5</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(
<span class="hljs-meta">... </span>            <span class="hljs-string">f&quot;Detected <span class="hljs-subst">{model.config.id2label[label.item()]}</span> with confidence &quot;</span>
<span class="hljs-meta">... </span>            <span class="hljs-string">f&quot;<span class="hljs-subst">{<span class="hljs-built_in">round</span>(score.item(), <span class="hljs-number">3</span>)}</span> at location <span class="hljs-subst">{box}</span>&quot;</span>
<span class="hljs-meta">... </span>        )
Detected remote <span class="hljs-keyword">with</span> confidence <span class="hljs-number">0.833</span> at location [<span class="hljs-number">38.31</span>, <span class="hljs-number">72.1</span>, <span class="hljs-number">177.63</span>, <span class="hljs-number">118.45</span>]
Detected cat <span class="hljs-keyword">with</span> confidence <span class="hljs-number">0.831</span> at location [<span class="hljs-number">9.2</span>, <span class="hljs-number">51.38</span>, <span class="hljs-number">321.13</span>, <span class="hljs-number">469.0</span>]
Detected cat <span class="hljs-keyword">with</span> confidence <span class="hljs-number">0.804</span> at location [<span class="hljs-number">340.3</span>, <span class="hljs-number">16.85</span>, <span class="hljs-number">642.93</span>, <span class="hljs-number">370.95</span>]
Detected remote <span class="hljs-keyword">with</span> confidence <span class="hljs-number">0.683</span> at location [<span class="hljs-number">334.48</span>, <span class="hljs-number">73.49</span>, <span class="hljs-number">366.37</span>, <span class="hljs-number">190.01</span>]
Detected couch <span class="hljs-keyword">with</span> confidence <span class="hljs-number">0.535</span> at location [<span class="hljs-number">0.52</span>, <span class="hljs-number">1.19</span>, <span class="hljs-number">640.35</span>, <span class="hljs-number">475.1</span>]`}}),{c(){c=n("p"),v=s("Examples:"),u=h(),x(m.$$.fragment)},l(d){c=a(d,"P",{});var g=r(c);v=i(g,"Examples:"),g.forEach(o),u=p(d),w(m.$$.fragment,d)},m(d,g){_(d,c,g),e(c,v),_(d,u,g),C(m,d,g),b=!0},p:Qo,i(d){b||(D(m.$$.fragment,d),b=!0)},o(d){y(m.$$.fragment,d),b=!1},d(d){d&&o(c),d&&o(u),T(m,d)}}}function Fs(j){let c,v,u,m,b;return{c(){c=n("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){c=a(d,"P",{});var g=r(c);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(g,"CODE",{});var q=r(u);m=i(q,"Module"),q.forEach(o),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(d,g){_(d,c,g),e(c,v),e(c,u),e(u,m),e(c,b)},d(d){d&&o(c)}}}function ks(j){let c,v,u,m,b;return m=new en({props:{code:`import io
import requests
from PIL import Image
import torch
import numpy

from transformers import (
    AutoFeatureExtractor,
    ConditionalDetrConfig,
    ConditionalDetrForSegmentation,
)
from transformers.models.conditional_detr.feature_extraction_conditional_detr import rgb_to_id

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/conditional-detr-resnet-50")

# randomly initialize all weights of the model
config = ConditionalDetrConfig()
model = ConditionalDetrForSegmentation(config)

# prepare image for the model
inputs = feature_extractor(images=image, return_tensors="pt")

# forward pass
outputs = model(**inputs)

# use the \`post_process_panoptic\` method of \`ConditionalDetrFeatureExtractor\` to convert to COCO format
processed_sizes = torch.as_tensor(inputs["pixel_values"].shape[-2:]).unsqueeze(0)
result = feature_extractor.post_process_panoptic(outputs, processed_sizes)[0]

# the segmentation is stored in a special-format png
panoptic_seg = Image.open(io.BytesIO(result["png_string"]))
panoptic_seg = numpy.array(panoptic_seg, dtype=numpy.uint8)
# retrieve the ids corresponding to each mask
panoptic_seg_id = rgb_to_id(panoptic_seg)
panoptic_seg_id.shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> io
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoFeatureExtractor,
<span class="hljs-meta">... </span>    ConditionalDetrConfig,
<span class="hljs-meta">... </span>    ConditionalDetrForSegmentation,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.models.conditional_detr.feature_extraction_conditional_detr <span class="hljs-keyword">import</span> rgb_to_id

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/conditional-detr-resnet-50&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># randomly initialize all weights of the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = ConditionalDetrConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConditionalDetrForSegmentation(config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare image for the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use the \`post_process_panoptic\` method of \`ConditionalDetrFeatureExtractor\` to convert to COCO format</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>processed_sizes = torch.as_tensor(inputs[<span class="hljs-string">&quot;pixel_values&quot;</span>].shape[-<span class="hljs-number">2</span>:]).unsqueeze(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>result = feature_extractor.post_process_panoptic(outputs, processed_sizes)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the segmentation is stored in a special-format png</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>panoptic_seg = Image.<span class="hljs-built_in">open</span>(io.BytesIO(result[<span class="hljs-string">&quot;png_string&quot;</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>panoptic_seg = numpy.array(panoptic_seg, dtype=numpy.uint8)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve the ids corresponding to each mask</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>panoptic_seg_id = rgb_to_id(panoptic_seg)
<span class="hljs-meta">&gt;&gt;&gt; </span>panoptic_seg_id.shape
(<span class="hljs-number">800</span>, <span class="hljs-number">1066</span>)`}}),{c(){c=n("p"),v=s("Examples:"),u=h(),x(m.$$.fragment)},l(d){c=a(d,"P",{});var g=r(c);v=i(g,"Examples:"),g.forEach(o),u=p(d),w(m.$$.fragment,d)},m(d,g){_(d,c,g),e(c,v),_(d,u,g),C(m,d,g),b=!0},p:Qo,i(d){b||(D(m.$$.fragment,d),b=!0)},o(d){y(m.$$.fragment,d),b=!1},d(d){d&&o(c),d&&o(u),T(m,d)}}}function zs(j){let c,v,u,m,b,d,g,q,tn,co,H,ee,It,Te,on,At,nn,ho,te,an,$e,rn,sn,po,mt,dn,mo,ft,je,ln,Ee,cn,hn,fo,oe,Cr,uo,ne,pn,ut,mn,fn,go,L,un,Fe,gn,_n,ke,bn,vn,_o,U,ae,Lt,ze,xn,Nt,wn,bo,P,qe,Cn,V,Dn,gt,yn,Tn,Pe,$n,jn,En,B,Fn,_t,kn,zn,bt,qn,Pn,On,re,vo,G,se,St,Oe,Mn,Rt,In,xo,$,Me,An,Wt,Ln,Nn,Ie,Sn,vt,Rn,Wn,Hn,N,Ae,Un,Ht,Vn,Bn,ie,Gn,de,Le,Yn,Ne,Zn,Ut,Jn,Xn,Kn,le,Se,Qn,Re,ea,xt,ta,oa,na,ce,We,aa,He,ra,wt,sa,ia,da,he,Ue,la,Ve,ca,Ct,ha,pa,wo,Y,pe,Vt,Be,ma,Bt,fa,Co,F,Ge,ua,Gt,ga,_a,Ye,ba,Dt,va,xa,wa,Ze,Ca,Je,Da,ya,Ta,M,Xe,$a,Z,ja,yt,Ea,Fa,Yt,ka,za,qa,me,Pa,fe,Do,J,ue,Zt,Ke,Oa,Jt,Ma,yo,k,Qe,Ia,Xt,Aa,La,et,Na,Tt,Sa,Ra,Wa,tt,Ha,ot,Ua,Va,Ba,I,nt,Ga,X,Ya,$t,Za,Ja,Kt,Xa,Ka,Qa,ge,er,_e,To,K,be,Qt,at,tr,eo,or,$o,z,rt,nr,to,ar,rr,st,sr,jt,ir,dr,lr,it,cr,dt,hr,pr,mr,A,lt,fr,Q,ur,Et,gr,_r,oo,br,vr,xr,ve,wr,xe,jo;return d=new pt({}),Te=new pt({}),ze=new pt({}),qe=new O({props:{name:"class transformers.ConditionalDetrConfig",anchor:"transformers.ConditionalDetrConfig",parameters:[{name:"num_channels",val:" = 3"},{name:"num_queries",val:" = 300"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 6"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 8"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 8"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"init_xavier_std",val:" = 1.0"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"auxiliary_loss",val:" = False"},{name:"position_embedding_type",val:" = 'sine'"},{name:"backbone",val:" = 'resnet50'"},{name:"use_pretrained_backbone",val:" = True"},{name:"dilation",val:" = False"},{name:"class_cost",val:" = 2"},{name:"bbox_cost",val:" = 5"},{name:"giou_cost",val:" = 2"},{name:"mask_loss_coefficient",val:" = 1"},{name:"dice_loss_coefficient",val:" = 1"},{name:"cls_loss_coefficient",val:" = 2"},{name:"bbox_loss_coefficient",val:" = 5"},{name:"giou_loss_coefficient",val:" = 2"},{name:"focal_alpha",val:" = 0.25"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ConditionalDetrConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.ConditionalDetrConfig.num_queries",description:`<strong>num_queries</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Number of object queries, i.e. detection slots. This is the maximal number of objects
<a href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrModel">ConditionalDetrModel</a> can detect in a single image. For COCO, we recommend 100 queries.`,name:"num_queries"},{anchor:"transformers.ConditionalDetrConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimension of the layers.`,name:"d_model"},{anchor:"transformers.ConditionalDetrConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.ConditionalDetrConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.ConditionalDetrConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.ConditionalDetrConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.ConditionalDetrConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.ConditionalDetrConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.ConditionalDetrConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.ConditionalDetrConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.ConditionalDetrConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.ConditionalDetrConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.ConditionalDetrConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.ConditionalDetrConfig.init_xavier_std",description:`<strong>init_xavier_std</strong> (<code>float</code>, <em>optional</em>, defaults to 1) &#x2014;
The scaling factor used for the Xavier initialization gain in the HM Attention map module.`,name:"init_xavier_std"},{anchor:"transformers.ConditionalDetrConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"encoder_layerdrop"},{anchor:"transformers.ConditionalDetrConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.ConditionalDetrConfig.auxiliary_loss",description:`<strong>auxiliary_loss</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether auxiliary decoding losses (loss at each decoder layer) are to be used.`,name:"auxiliary_loss"},{anchor:"transformers.ConditionalDetrConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;sine&quot;</code>) &#x2014;
Type of position embeddings to be used on top of the image features. One of <code>&quot;sine&quot;</code> or <code>&quot;learned&quot;</code>.`,name:"position_embedding_type"},{anchor:"transformers.ConditionalDetrConfig.backbone",description:`<strong>backbone</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;resnet50&quot;</code>) &#x2014;
Name of convolutional backbone to use. Supports any convolutional backbone from the timm package. For a
list of all available models, see <a href="https://rwightman.github.io/pytorch-image-models/#load-a-pretrained-model" rel="nofollow">this
page</a>.`,name:"backbone"},{anchor:"transformers.ConditionalDetrConfig.use_pretrained_backbone",description:`<strong>use_pretrained_backbone</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use pretrained weights for the backbone.`,name:"use_pretrained_backbone"},{anchor:"transformers.ConditionalDetrConfig.dilation",description:`<strong>dilation</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to replace stride with dilation in the last convolutional block (DC5).`,name:"dilation"},{anchor:"transformers.ConditionalDetrConfig.class_cost",description:`<strong>class_cost</strong> (<code>float</code>, <em>optional</em>, defaults to 1) &#x2014;
Relative weight of the classification error in the Hungarian matching cost.`,name:"class_cost"},{anchor:"transformers.ConditionalDetrConfig.bbox_cost",description:`<strong>bbox_cost</strong> (<code>float</code>, <em>optional</em>, defaults to 5) &#x2014;
Relative weight of the L1 error of the bounding box coordinates in the Hungarian matching cost.`,name:"bbox_cost"},{anchor:"transformers.ConditionalDetrConfig.giou_cost",description:`<strong>giou_cost</strong> (<code>float</code>, <em>optional</em>, defaults to 2) &#x2014;
Relative weight of the generalized IoU loss of the bounding box in the Hungarian matching cost.`,name:"giou_cost"},{anchor:"transformers.ConditionalDetrConfig.mask_loss_coefficient",description:`<strong>mask_loss_coefficient</strong> (<code>float</code>, <em>optional</em>, defaults to 1) &#x2014;
Relative weight of the Focal loss in the panoptic segmentation loss.`,name:"mask_loss_coefficient"},{anchor:"transformers.ConditionalDetrConfig.dice_loss_coefficient",description:`<strong>dice_loss_coefficient</strong> (<code>float</code>, <em>optional</em>, defaults to 1) &#x2014;
Relative weight of the DICE/F-1 loss in the panoptic segmentation loss.`,name:"dice_loss_coefficient"},{anchor:"transformers.ConditionalDetrConfig.bbox_loss_coefficient",description:`<strong>bbox_loss_coefficient</strong> (<code>float</code>, <em>optional</em>, defaults to 5) &#x2014;
Relative weight of the L1 bounding box loss in the object detection loss.`,name:"bbox_loss_coefficient"},{anchor:"transformers.ConditionalDetrConfig.giou_loss_coefficient",description:`<strong>giou_loss_coefficient</strong> (<code>float</code>, <em>optional</em>, defaults to 2) &#x2014;
Relative weight of the generalized IoU loss in the object detection loss.`,name:"giou_loss_coefficient"},{anchor:"transformers.ConditionalDetrConfig.eos_coefficient",description:`<strong>eos_coefficient</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Relative classification weight of the &#x2018;no-object&#x2019; class in the object detection loss.`,name:"eos_coefficient"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/configuration_conditional_detr.py#L36"}}),re=new Ko({props:{anchor:"transformers.ConditionalDetrConfig.example",$$slots:{default:[Ds]},$$scope:{ctx:j}}}),Oe=new pt({}),Me=new O({props:{name:"class transformers.ConditionalDetrFeatureExtractor",anchor:"transformers.ConditionalDetrFeatureExtractor",parameters:[{name:"format",val:" = 'coco_detection'"},{name:"do_resize",val:" = True"},{name:"size",val:" = 800"},{name:"max_size",val:" = 1333"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ConditionalDetrFeatureExtractor.format",description:`<strong>format</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;coco_detection&quot;</code>) &#x2014;
Data format of the annotations. One of &#x201C;coco_detection&#x201D; or &#x201C;coco_panoptic&#x201D;.`,name:"format"},{anchor:"transformers.ConditionalDetrFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.ConditionalDetrFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>, defaults to 800) &#x2014;
Resize the input to the given size. Only has an effect if <code>do_resize</code> is set to <code>True</code>. If size is a
sequence like <code>(width, height)</code>, output size will be matched to this. If size is an int, smaller edge of
the image will be matched to this number. i.e, if <code>height &gt; width</code>, then image will be rescaled to <code>(size * height / width, size)</code>.`,name:"size"},{anchor:"transformers.ConditionalDetrFeatureExtractor.max_size",description:`<strong>max_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>1333</code>) &#x2014;
The largest size an image dimension can have (otherwise it&#x2019;s capped). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"max_size"},{anchor:"transformers.ConditionalDetrFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.ConditionalDetrFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>int</code>, <em>optional</em>, defaults to <code>[0.485, 0.456, 0.406]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images. Defaults to the ImageNet mean.`,name:"image_mean"},{anchor:"transformers.ConditionalDetrFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>int</code>, <em>optional</em>, defaults to <code>[0.229, 0.224, 0.225]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images. Defaults to the
ImageNet std.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/feature_extraction_conditional_detr.py#L123"}}),Ae=new O({props:{name:"__call__",anchor:"transformers.ConditionalDetrFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"annotations",val:": typing.Union[typing.List[typing.Dict], typing.List[typing.List[typing.Dict]]] = None"},{name:"return_segmentation_masks",val:": typing.Optional[bool] = False"},{name:"masks_path",val:": typing.Optional[pathlib.Path] = None"},{name:"pad_and_return_pixel_mask",val:": typing.Optional[bool] = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ConditionalDetrFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.ConditionalDetrFeatureExtractor.__call__.annotations",description:`<strong>annotations</strong> (<code>Dict</code>, <code>List[Dict]</code>, <em>optional</em>) &#x2014;
The corresponding annotations in COCO format.</p>
<p>In case <a href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrFeatureExtractor">ConditionalDetrFeatureExtractor</a> was initialized with <code>format = &quot;coco_detection&quot;</code>, the
annotations for each image should have the following format: {&#x2018;image_id&#x2019;: int, &#x2018;annotations&#x2019;:
[annotation]}, with the annotations being a list of COCO object annotations.</p>
<p>In case <a href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrFeatureExtractor">ConditionalDetrFeatureExtractor</a> was initialized with <code>format = &quot;coco_panoptic&quot;</code>, the
annotations for each image should have the following format: {&#x2018;image_id&#x2019;: int, &#x2018;file_name&#x2019;: str,
&#x2018;segments_info&#x2019;: [segment_info]} with segments_info being a list of COCO panoptic annotations.`,name:"annotations"},{anchor:"transformers.ConditionalDetrFeatureExtractor.__call__.return_segmentation_masks",description:`<strong>return_segmentation_masks</strong> (<code>Dict</code>, <code>List[Dict]</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to also include instance segmentation masks as part of the labels in case <code>format = &quot;coco_detection&quot;</code>.`,name:"return_segmentation_masks"},{anchor:"transformers.ConditionalDetrFeatureExtractor.__call__.masks_path",description:`<strong>masks_path</strong> (<code>pathlib.Path</code>, <em>optional</em>) &#x2014;
Path to the directory containing the PNG files that store the class-agnostic image segmentations. Only
relevant in case <a href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrFeatureExtractor">ConditionalDetrFeatureExtractor</a> was initialized with <code>format = &quot;coco_panoptic&quot;</code>.`,name:"masks_path"},{anchor:"transformers.ConditionalDetrFeatureExtractor.__call__.pad_and_return_pixel_mask",description:`<strong>pad_and_return_pixel_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to pad images up to the largest image in a batch and create a pixel mask.</p>
<p>If left to the default, will return a pixel mask that is:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).</li>
</ul>`,name:"pad_and_return_pixel_mask"},{anchor:"transformers.ConditionalDetrFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of NumPy arrays. If set to <code>&apos;pt&apos;</code>, return PyTorch <code>torch.Tensor</code>
objects.`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/feature_extraction_conditional_detr.py#L411",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model.</li>
<li><strong>pixel_mask</strong> \u2014 Pixel mask to be fed to a model (when <code>pad_and_return_pixel_mask=True</code> or if
<em>\u201Cpixel_mask\u201D</em> is in <code>self.model_input_names</code>).</li>
<li><strong>labels</strong> \u2014 Optional labels to be fed to a model (when <code>annotations</code> are provided)</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),ie=new Xo({props:{warning:!0,$$slots:{default:[ys]},$$scope:{ctx:j}}}),Le=new O({props:{name:"pad_and_create_pixel_mask",anchor:"transformers.ConditionalDetrFeatureExtractor.pad_and_create_pixel_mask",parameters:[{name:"pixel_values_list",val:": typing.List[ForwardRef('torch.Tensor')]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"}],parametersDescription:[{anchor:"transformers.ConditionalDetrFeatureExtractor.pad_and_create_pixel_mask.pixel_values_list",description:`<strong>pixel_values_list</strong> (<code>List[torch.Tensor]</code>) &#x2014;
List of images (pixel values) to be padded. Each image should be a tensor of shape (C, H, W).`,name:"pixel_values_list"},{anchor:"transformers.ConditionalDetrFeatureExtractor.pad_and_create_pixel_mask.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of NumPy arrays. If set to <code>&apos;pt&apos;</code>, return PyTorch <code>torch.Tensor</code>
objects.`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/feature_extraction_conditional_detr.py#L651",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model.</li>
<li><strong>pixel_mask</strong> \u2014 Pixel mask to be fed to a model (when <code>pad_and_return_pixel_mask=True</code> or if
<em>\u201Cpixel_mask\u201D</em> is in <code>self.model_input_names</code>).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Se=new O({props:{name:"post_process",anchor:"transformers.ConditionalDetrFeatureExtractor.post_process",parameters:[{name:"outputs",val:""},{name:"target_sizes",val:""}],parametersDescription:[{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process.outputs",description:`<strong>outputs</strong> (<code>ConditionalDetrObjectDetectionOutput</code>) &#x2014;
Raw outputs of the model.`,name:"outputs"},{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process.target_sizes",description:`<strong>target_sizes</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Tensor containing the size (h, w) of each image of the batch. For evaluation, this must be the original
image size (before any data augmentation). For visualization, this should be the image size after data
augment, but before padding.`,name:"target_sizes"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/feature_extraction_conditional_detr.py#L695",returnDescription:`
<p>A list of dictionaries, each dictionary containing the scores, labels and boxes for an image
in the batch as predicted by the model.</p>
`,returnType:`
<p><code>List[Dict]</code></p>
`}}),We=new O({props:{name:"post_process_segmentation",anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_segmentation",parameters:[{name:"outputs",val:""},{name:"target_sizes",val:""},{name:"threshold",val:" = 0.9"},{name:"mask_threshold",val:" = 0.5"}],parametersDescription:[{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_segmentation.outputs",description:`<strong>outputs</strong> (<code>ConditionalDetrSegmentationOutput</code>) &#x2014;
Raw outputs of the model.`,name:"outputs"},{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_segmentation.target_sizes",description:`<strong>target_sizes</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, 2)</code> or <code>List[Tuple]</code> of length <code>batch_size</code>) &#x2014;
Torch Tensor (or list) corresponding to the requested final size (h, w) of each prediction.`,name:"target_sizes"},{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_segmentation.threshold",description:`<strong>threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.9) &#x2014;
Threshold to use to filter out queries.`,name:"threshold"},{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_segmentation.mask_threshold",description:`<strong>mask_threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
Threshold to use when turning the predicted masks into binary values.`,name:"mask_threshold"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/feature_extraction_conditional_detr.py#L737",returnDescription:`
<p>A list of dictionaries, each dictionary containing the scores, labels, and masks for an image
in the batch as predicted by the model.</p>
`,returnType:`
<p><code>List[Dict]</code></p>
`}}),Ue=new O({props:{name:"post_process_panoptic",anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_panoptic",parameters:[{name:"outputs",val:""},{name:"processed_sizes",val:""},{name:"target_sizes",val:" = None"},{name:"is_thing_map",val:" = None"},{name:"threshold",val:" = 0.85"}],parametersDescription:[{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_panoptic.outputs",description:`<strong>outputs</strong> (<code>ConditionalDetrSegmentationOutput</code>) &#x2014;
Raw outputs of the model.`,name:"outputs"},{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_panoptic.processed_sizes",description:`<strong>processed_sizes</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, 2)</code> or <code>List[Tuple]</code> of length <code>batch_size</code>) &#x2014;
Torch Tensor (or list) containing the size (h, w) of each image of the batch, i.e. the size after data
augmentation but before batching.`,name:"processed_sizes"},{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_panoptic.target_sizes",description:`<strong>target_sizes</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, 2)</code> or <code>List[Tuple]</code> of length <code>batch_size</code>, <em>optional</em>) &#x2014;
Torch Tensor (or list) corresponding to the requested final size (h, w) of each prediction. If left to
None, it will default to the <code>processed_sizes</code>.`,name:"target_sizes"},{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_panoptic.is_thing_map",description:`<strong>is_thing_map</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, 2)</code>, <em>optional</em>) &#x2014;
Dictionary mapping class indices to either True or False, depending on whether or not they are a thing.
If not set, defaults to the <code>is_thing_map</code> of COCO panoptic.`,name:"is_thing_map"},{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_panoptic.threshold",description:`<strong>threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.85) &#x2014;
Threshold to use to filter out queries.`,name:"threshold"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/feature_extraction_conditional_detr.py#L824",returnDescription:`
<p>A list of dictionaries, each dictionary containing a PNG string and segments_info values for
an image in the batch as predicted by the model.</p>
`,returnType:`
<p><code>List[Dict]</code></p>
`}}),Be=new pt({}),Ge=new O({props:{name:"class transformers.ConditionalDetrModel",anchor:"transformers.ConditionalDetrModel",parameters:[{name:"config",val:": ConditionalDetrConfig"}],parametersDescription:[{anchor:"transformers.ConditionalDetrModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrConfig">ConditionalDetrConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/modeling_conditional_detr.py#L1462"}}),Xe=new O({props:{name:"forward",anchor:"transformers.ConditionalDetrModel.forward",parameters:[{name:"pixel_values",val:""},{name:"pixel_mask",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.ConditionalDetrModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it.</p>
<p>Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrFeatureExtractor">ConditionalDetrFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrFeatureExtractor.__call__">ConditionalDetrFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ConditionalDetrModel.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"pixel_mask"},{anchor:"transformers.ConditionalDetrModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_queries)</code>, <em>optional</em>) &#x2014;
Not used by default. Can be used to mask object queries.`,name:"decoder_attention_mask"},{anchor:"transformers.ConditionalDetrModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.ConditionalDetrModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing the flattened feature map (output of the backbone + projection layer), you
can choose to directly pass a flattened representation of an image.`,name:"inputs_embeds"},{anchor:"transformers.ConditionalDetrModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_queries, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of initializing the queries with a tensor of zeros, you can choose to directly pass an
embedded representation.`,name:"decoder_inputs_embeds"},{anchor:"transformers.ConditionalDetrModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ConditionalDetrModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ConditionalDetrModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/modeling_conditional_detr.py#L1498",returnDescription:`
<p>A <code>transformers.models.conditional_detr.modeling_conditional_detr.ConditionalDetrModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrConfig"
>ConditionalDetrConfig</a>) and inputs.</p>
<ul>
<li><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</li>
<li><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the decoder at the output of each
layer plus the initial embedding outputs.</li>
<li><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights of the decoder, after the attention softmax, used to compute the
weighted average in the self-attention heads.</li>
<li><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax,
used to compute the weighted average in the cross-attention heads.</li>
<li><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</li>
<li><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the encoder at the output of each
layer plus the initial embedding outputs.</li>
<li><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights of the encoder, after the attention softmax, used to compute the
weighted average in the self-attention heads.</li>
<li><strong>intermediate_hidden_states</strong> (<code>torch.FloatTensor</code> of shape <code>(config.decoder_layers, batch_size, sequence_length, hidden_size)</code>, <em>optional</em>, returned when <code>config.auxiliary_loss=True</code>) \u2014 Intermediate decoder activations, i.e. the output of each decoder layer, each of them gone through a
layernorm.</li>
</ul>
`,returnType:`
<p><code>transformers.models.conditional_detr.modeling_conditional_detr.ConditionalDetrModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),me=new Xo({props:{$$slots:{default:[Ts]},$$scope:{ctx:j}}}),fe=new Ko({props:{anchor:"transformers.ConditionalDetrModel.forward.example",$$slots:{default:[$s]},$$scope:{ctx:j}}}),Ke=new pt({}),Qe=new O({props:{name:"class transformers.ConditionalDetrForObjectDetection",anchor:"transformers.ConditionalDetrForObjectDetection",parameters:[{name:"config",val:": ConditionalDetrConfig"}],parametersDescription:[{anchor:"transformers.ConditionalDetrForObjectDetection.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrConfig">ConditionalDetrConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/modeling_conditional_detr.py#L1633"}}),nt=new O({props:{name:"forward",anchor:"transformers.ConditionalDetrForObjectDetection.forward",parameters:[{name:"pixel_values",val:""},{name:"pixel_mask",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.ConditionalDetrForObjectDetection.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it.</p>
<p>Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrFeatureExtractor">ConditionalDetrFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrFeatureExtractor.__call__">ConditionalDetrFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ConditionalDetrForObjectDetection.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"pixel_mask"},{anchor:"transformers.ConditionalDetrForObjectDetection.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_queries)</code>, <em>optional</em>) &#x2014;
Not used by default. Can be used to mask object queries.`,name:"decoder_attention_mask"},{anchor:"transformers.ConditionalDetrForObjectDetection.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.ConditionalDetrForObjectDetection.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing the flattened feature map (output of the backbone + projection layer), you
can choose to directly pass a flattened representation of an image.`,name:"inputs_embeds"},{anchor:"transformers.ConditionalDetrForObjectDetection.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_queries, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of initializing the queries with a tensor of zeros, you can choose to directly pass an
embedded representation.`,name:"decoder_inputs_embeds"},{anchor:"transformers.ConditionalDetrForObjectDetection.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ConditionalDetrForObjectDetection.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ConditionalDetrForObjectDetection.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ConditionalDetrForObjectDetection.forward.labels",description:`<strong>labels</strong> (<code>List[Dict]</code> of len <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the bipartite matching loss. List of dicts, each dictionary containing at least the
following 2 keys: &#x2018;class_labels&#x2019; and &#x2018;boxes&#x2019; (the class labels and bounding boxes of an image in the batch
respectively). The class labels themselves should be a <code>torch.LongTensor</code> of len <code>(number of bounding boxes in the image,)</code> and the boxes a <code>torch.FloatTensor</code> of shape <code>(number of bounding boxes in the image, 4)</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/modeling_conditional_detr.py#L1659",returnDescription:`
<p>A <code>transformers.models.conditional_detr.modeling_conditional_detr.ConditionalDetrObjectDetectionOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrConfig"
>ConditionalDetrConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> are provided)) \u2014 Total loss as a linear combination of a negative log-likehood (cross-entropy) for class prediction and a
bounding box loss. The latter is defined as a linear combination of the L1 loss and the generalized
scale-invariant IoU loss.</li>
<li><strong>loss_dict</strong> (<code>Dict</code>, <em>optional</em>) \u2014 A dictionary containing the individual losses. Useful for logging.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_queries, num_classes + 1)</code>) \u2014 Classification logits (including no-object) for all queries.</li>
<li><strong>pred_boxes</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_queries, 4)</code>) \u2014 Normalized boxes coordinates for all queries, represented as (center_x, center_y, width, height). These
values are normalized in [0, 1], relative to the size of each individual image in the batch (disregarding
possible padding). You can use <a
  href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrFeatureExtractor.post_process"
>post_process()</a> to retrieve the
unnormalized bounding boxes.</li>
<li><strong>auxiliary_outputs</strong> (<code>list[Dict]</code>, <em>optional</em>) \u2014 Optional, only returned when auxilary losses are activated (i.e. <code>config.auxiliary_loss</code> is set to <code>True</code>)
and labels are provided. It is a list of dictionaries containing the two above keys (<code>logits</code> and
<code>pred_boxes</code>) for each decoder layer.</li>
<li><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</li>
<li><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the decoder at the output of each
layer plus the initial embedding outputs.</li>
<li><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights of the decoder, after the attention softmax, used to compute the
weighted average in the self-attention heads.</li>
<li><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax,
used to compute the weighted average in the cross-attention heads.</li>
<li><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</li>
<li><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the encoder at the output of each
layer plus the initial embedding outputs.</li>
<li><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights of the encoder, after the attention softmax, used to compute the
weighted average in the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>transformers.models.conditional_detr.modeling_conditional_detr.ConditionalDetrObjectDetectionOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ge=new Xo({props:{$$slots:{default:[js]},$$scope:{ctx:j}}}),_e=new Ko({props:{anchor:"transformers.ConditionalDetrForObjectDetection.forward.example",$$slots:{default:[Es]},$$scope:{ctx:j}}}),at=new pt({}),rt=new O({props:{name:"class transformers.ConditionalDetrForSegmentation",anchor:"transformers.ConditionalDetrForSegmentation",parameters:[{name:"config",val:": ConditionalDetrConfig"}],parametersDescription:[{anchor:"transformers.ConditionalDetrForSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrConfig">ConditionalDetrConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/modeling_conditional_detr.py#L1821"}}),lt=new O({props:{name:"forward",anchor:"transformers.ConditionalDetrForSegmentation.forward",parameters:[{name:"pixel_values",val:""},{name:"pixel_mask",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.ConditionalDetrForSegmentation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it.</p>
<p>Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrFeatureExtractor">ConditionalDetrFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrFeatureExtractor.__call__">ConditionalDetrFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ConditionalDetrForSegmentation.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"pixel_mask"},{anchor:"transformers.ConditionalDetrForSegmentation.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_queries)</code>, <em>optional</em>) &#x2014;
Not used by default. Can be used to mask object queries.`,name:"decoder_attention_mask"},{anchor:"transformers.ConditionalDetrForSegmentation.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.ConditionalDetrForSegmentation.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing the flattened feature map (output of the backbone + projection layer), you
can choose to directly pass a flattened representation of an image.`,name:"inputs_embeds"},{anchor:"transformers.ConditionalDetrForSegmentation.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_queries, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of initializing the queries with a tensor of zeros, you can choose to directly pass an
embedded representation.`,name:"decoder_inputs_embeds"},{anchor:"transformers.ConditionalDetrForSegmentation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ConditionalDetrForSegmentation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ConditionalDetrForSegmentation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ConditionalDetrForSegmentation.forward.labels",description:`<strong>labels</strong> (<code>List[Dict]</code> of len <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the bipartite matching loss, DICE/F-1 loss and Focal loss. List of dicts, each
dictionary containing at least the following 3 keys: &#x2018;class_labels&#x2019;, &#x2018;boxes&#x2019; and &#x2018;masks&#x2019; (the class labels,
bounding boxes and segmentation masks of an image in the batch respectively). The class labels themselves
should be a <code>torch.LongTensor</code> of len <code>(number of bounding boxes in the image,)</code>, the boxes a
<code>torch.FloatTensor</code> of shape <code>(number of bounding boxes in the image, 4)</code> and the masks a
<code>torch.FloatTensor</code> of shape <code>(number of bounding boxes in the image, height, width)</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/modeling_conditional_detr.py#L1843",returnDescription:`
<p>A <code>transformers.models.conditional_detr.modeling_conditional_detr.ConditionalDetrSegmentationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrConfig"
>ConditionalDetrConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> are provided)) \u2014 Total loss as a linear combination of a negative log-likehood (cross-entropy) for class prediction and a
bounding box loss. The latter is defined as a linear combination of the L1 loss and the generalized
scale-invariant IoU loss.</li>
<li><strong>loss_dict</strong> (<code>Dict</code>, <em>optional</em>) \u2014 A dictionary containing the individual losses. Useful for logging.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_queries, num_classes + 1)</code>) \u2014 Classification logits (including no-object) for all queries.</li>
<li><strong>pred_boxes</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_queries, 4)</code>) \u2014 Normalized boxes coordinates for all queries, represented as (center_x, center_y, width, height). These
values are normalized in [0, 1], relative to the size of each individual image in the batch (disregarding
possible padding). You can use <a
  href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrFeatureExtractor.post_process"
>post_process()</a> to retrieve the
unnormalized bounding boxes.</li>
<li><strong>pred_masks</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_queries, height/4, width/4)</code>) \u2014 Segmentation masks logits for all queries. See also
<a
  href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrFeatureExtractor.post_process_segmentation"
>post_process_segmentation()</a> or
<a
  href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrFeatureExtractor.post_process_panoptic"
>post_process_panoptic()</a> to evaluate instance and panoptic segmentation
masks respectively.</li>
<li><strong>auxiliary_outputs</strong> (<code>list[Dict]</code>, <em>optional</em>) \u2014 Optional, only returned when auxiliary losses are activated (i.e. <code>config.auxiliary_loss</code> is set to <code>True</code>)
and labels are provided. It is a list of dictionaries containing the two above keys (<code>logits</code> and
<code>pred_boxes</code>) for each decoder layer.</li>
<li><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</li>
<li><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the decoder at the output of each
layer plus the initial embedding outputs.</li>
<li><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights of the decoder, after the attention softmax, used to compute the
weighted average in the self-attention heads.</li>
<li><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax,
used to compute the weighted average in the cross-attention heads.</li>
<li><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</li>
<li><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the encoder at the output of each
layer plus the initial embedding outputs.</li>
<li><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights of the encoder, after the attention softmax, used to compute the
weighted average in the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>transformers.models.conditional_detr.modeling_conditional_detr.ConditionalDetrSegmentationOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ve=new Xo({props:{$$slots:{default:[Fs]},$$scope:{ctx:j}}}),xe=new Ko({props:{anchor:"transformers.ConditionalDetrForSegmentation.forward.example",$$slots:{default:[ks]},$$scope:{ctx:j}}}),{c(){c=n("meta"),v=h(),u=n("h1"),m=n("a"),b=n("span"),x(d.$$.fragment),g=h(),q=n("span"),tn=s("Conditional DETR"),co=h(),H=n("h2"),ee=n("a"),It=n("span"),x(Te.$$.fragment),on=h(),At=n("span"),nn=s("Overview"),ho=h(),te=n("p"),an=s("The Conditional DETR model was proposed in "),$e=n("a"),rn=s("Conditional DETR for Fast Training Convergence"),sn=s(" by Depu Meng, Xiaokang Chen, Zejia Fan, Gang Zeng, Houqiang Li, Yuhui Yuan, Lei Sun, Jingdong Wang. Conditional DETR presents a conditional cross-attention mechanism for fast DETR training. Conditional DETR converges 6.7\xD7 to 10\xD7 faster than DETR."),po=h(),mt=n("p"),dn=s("The abstract from the paper is the following:"),mo=h(),ft=n("p"),je=n("em"),ln=s("The recently-developed DETR approach applies the transformer encoder and decoder architecture to object detection and achieves promising performance. In this paper, we handle the critical issue, slow training convergence, and present a conditional cross-attention mechanism for fast DETR training. Our approach is motivated by that the cross-attention in DETR relies highly on the content embeddings for localizing the four extremities and predicting the box, which increases the need for high-quality content embeddings and thus the training difficulty. Our approach, named conditional DETR, learns a conditional spatial query from the decoder embedding for decoder multi-head cross-attention. The benefit is that through the conditional spatial query, each cross-attention head is able to attend to a band containing a distinct region, e.g., one object extremity or a region inside the object box. This narrows down the spatial range for localizing the distinct regions for object classification and box regression, thus relaxing the dependence on the content embeddings and easing the training. Empirical results show that conditional DETR converges 6.7\xD7 faster for the backbones R50 and R101 and 10\xD7 faster for stronger backbones DC5-R50 and DC5-R101. Code is available at "),Ee=n("a"),cn=s("https://github.com/Atten4Vis/ConditionalDETR"),hn=s("."),fo=h(),oe=n("img"),uo=h(),ne=n("small"),pn=s("Conditional DETR shows much faster convergence compared to the original DETR. Taken from the "),ut=n("a"),mn=s("original paper"),fn=s("."),go=h(),L=n("p"),un=s("This model was contributed by "),Fe=n("a"),gn=s("DepuMeng"),_n=s(". The original code can be found "),ke=n("a"),bn=s("here"),vn=s("."),_o=h(),U=n("h2"),ae=n("a"),Lt=n("span"),x(ze.$$.fragment),xn=h(),Nt=n("span"),wn=s("ConditionalDetrConfig"),bo=h(),P=n("div"),x(qe.$$.fragment),Cn=h(),V=n("p"),Dn=s("This is the configuration class to store the configuration of a "),gt=n("a"),yn=s("ConditionalDetrModel"),Tn=s(`. It is used to instantiate
a Conditional DETR model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Conditional DETR
`),Pe=n("a"),$n=s("microsoft/conditional-detr-resnet-50"),jn=s(" architecture."),En=h(),B=n("p"),Fn=s("Configuration objects inherit from "),_t=n("a"),kn=s("PretrainedConfig"),zn=s(` and can be used to control the model outputs. Read the
documentation from `),bt=n("a"),qn=s("PretrainedConfig"),Pn=s(" for more information."),On=h(),x(re.$$.fragment),vo=h(),G=n("h2"),se=n("a"),St=n("span"),x(Oe.$$.fragment),Mn=h(),Rt=n("span"),In=s("ConditionalDetrFeatureExtractor"),xo=h(),$=n("div"),x(Me.$$.fragment),An=h(),Wt=n("p"),Ln=s("Constructs a Conditional DETR feature extractor."),Nn=h(),Ie=n("p"),Sn=s("This feature extractor inherits from "),vt=n("a"),Rn=s("FeatureExtractionMixin"),Wn=s(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Hn=h(),N=n("div"),x(Ae.$$.fragment),Un=h(),Ht=n("p"),Vn=s(`Main method to prepare for the model one or several image(s) and optional annotations. Images are by default
padded up to the largest image in a batch, and a pixel mask is created that indicates which pixels are
real/which are padding.`),Bn=h(),x(ie.$$.fragment),Gn=h(),de=n("div"),x(Le.$$.fragment),Yn=h(),Ne=n("p"),Zn=s("Pad images up to the largest image in a batch and create a corresponding "),Ut=n("code"),Jn=s("pixel_mask"),Xn=s("."),Kn=h(),le=n("div"),x(Se.$$.fragment),Qn=h(),Re=n("p"),ea=s("Converts the output of "),xt=n("a"),ta=s("ConditionalDetrForObjectDetection"),oa=s(` into the format expected by the COCO api. Only
supports PyTorch.`),na=h(),ce=n("div"),x(We.$$.fragment),aa=h(),He=n("p"),ra=s("Converts the output of "),wt=n("a"),sa=s("ConditionalDetrForSegmentation"),ia=s(` into image segmentation predictions. Only supports
PyTorch.`),da=h(),he=n("div"),x(Ue.$$.fragment),la=h(),Ve=n("p"),ca=s("Converts the output of "),Ct=n("a"),ha=s("ConditionalDetrForSegmentation"),pa=s(` into actual panoptic predictions. Only supports
PyTorch.`),wo=h(),Y=n("h2"),pe=n("a"),Vt=n("span"),x(Be.$$.fragment),ma=h(),Bt=n("span"),fa=s("ConditionalDetrModel"),Co=h(),F=n("div"),x(Ge.$$.fragment),ua=h(),Gt=n("p"),ga=s(`The bare Conditional DETR Model (consisting of a backbone and encoder-decoder Transformer) outputting raw
hidden-states without any specific head on top.`),_a=h(),Ye=n("p"),ba=s("This model inherits from "),Dt=n("a"),va=s("PreTrainedModel"),xa=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wa=h(),Ze=n("p"),Ca=s("This model is also a PyTorch "),Je=n("a"),Da=s("torch.nn.Module"),ya=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ta=h(),M=n("div"),x(Xe.$$.fragment),$a=h(),Z=n("p"),ja=s("The "),yt=n("a"),Ea=s("ConditionalDetrModel"),Fa=s(" forward method, overrides the "),Yt=n("code"),ka=s("__call__"),za=s(" special method."),qa=h(),x(me.$$.fragment),Pa=h(),x(fe.$$.fragment),Do=h(),J=n("h2"),ue=n("a"),Zt=n("span"),x(Ke.$$.fragment),Oa=h(),Jt=n("span"),Ma=s("ConditionalDetrForObjectDetection"),yo=h(),k=n("div"),x(Qe.$$.fragment),Ia=h(),Xt=n("p"),Aa=s(`CONDITIONAL_DETR Model (consisting of a backbone and encoder-decoder Transformer) with object detection heads on
top, for tasks such as COCO detection.`),La=h(),et=n("p"),Na=s("This model inherits from "),Tt=n("a"),Sa=s("PreTrainedModel"),Ra=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wa=h(),tt=n("p"),Ha=s("This model is also a PyTorch "),ot=n("a"),Ua=s("torch.nn.Module"),Va=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ba=h(),I=n("div"),x(nt.$$.fragment),Ga=h(),X=n("p"),Ya=s("The "),$t=n("a"),Za=s("ConditionalDetrForObjectDetection"),Ja=s(" forward method, overrides the "),Kt=n("code"),Xa=s("__call__"),Ka=s(" special method."),Qa=h(),x(ge.$$.fragment),er=h(),x(_e.$$.fragment),To=h(),K=n("h2"),be=n("a"),Qt=n("span"),x(at.$$.fragment),tr=h(),eo=n("span"),or=s("ConditionalDetrForSegmentation"),$o=h(),z=n("div"),x(rt.$$.fragment),nr=h(),to=n("p"),ar=s(`CONDITIONAL_DETR Model (consisting of a backbone and encoder-decoder Transformer) with a segmentation head on top,
for tasks such as COCO panoptic.`),rr=h(),st=n("p"),sr=s("This model inherits from "),jt=n("a"),ir=s("PreTrainedModel"),dr=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lr=h(),it=n("p"),cr=s("This model is also a PyTorch "),dt=n("a"),hr=s("torch.nn.Module"),pr=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mr=h(),A=n("div"),x(lt.$$.fragment),fr=h(),Q=n("p"),ur=s("The "),Et=n("a"),gr=s("ConditionalDetrForSegmentation"),_r=s(" forward method, overrides the "),oo=n("code"),br=s("__call__"),vr=s(" special method."),xr=h(),x(ve.$$.fragment),wr=h(),x(xe.$$.fragment),this.h()},l(t){const f=xs('[data-svelte="svelte-1phssyn"]',document.head);c=a(f,"META",{name:!0,content:!0}),f.forEach(o),v=p(t),u=a(t,"H1",{class:!0});var ct=r(u);m=a(ct,"A",{id:!0,class:!0,href:!0});var no=r(m);b=a(no,"SPAN",{});var ao=r(b);w(d.$$.fragment,ao),ao.forEach(o),no.forEach(o),g=p(ct),q=a(ct,"SPAN",{});var ro=r(q);tn=i(ro,"Conditional DETR"),ro.forEach(o),ct.forEach(o),co=p(t),H=a(t,"H2",{class:!0});var ht=r(H);ee=a(ht,"A",{id:!0,class:!0,href:!0});var so=r(ee);It=a(so,"SPAN",{});var io=r(It);w(Te.$$.fragment,io),io.forEach(o),so.forEach(o),on=p(ht),At=a(ht,"SPAN",{});var lo=r(At);nn=i(lo,"Overview"),lo.forEach(o),ht.forEach(o),ho=p(t),te=a(t,"P",{});var Eo=r(te);an=i(Eo,"The Conditional DETR model was proposed in "),$e=a(Eo,"A",{href:!0,rel:!0});var Dr=r($e);rn=i(Dr,"Conditional DETR for Fast Training Convergence"),Dr.forEach(o),sn=i(Eo," by Depu Meng, Xiaokang Chen, Zejia Fan, Gang Zeng, Houqiang Li, Yuhui Yuan, Lei Sun, Jingdong Wang. Conditional DETR presents a conditional cross-attention mechanism for fast DETR training. Conditional DETR converges 6.7\xD7 to 10\xD7 faster than DETR."),Eo.forEach(o),po=p(t),mt=a(t,"P",{});var yr=r(mt);dn=i(yr,"The abstract from the paper is the following:"),yr.forEach(o),mo=p(t),ft=a(t,"P",{});var Tr=r(ft);je=a(Tr,"EM",{});var Fo=r(je);ln=i(Fo,"The recently-developed DETR approach applies the transformer encoder and decoder architecture to object detection and achieves promising performance. In this paper, we handle the critical issue, slow training convergence, and present a conditional cross-attention mechanism for fast DETR training. Our approach is motivated by that the cross-attention in DETR relies highly on the content embeddings for localizing the four extremities and predicting the box, which increases the need for high-quality content embeddings and thus the training difficulty. Our approach, named conditional DETR, learns a conditional spatial query from the decoder embedding for decoder multi-head cross-attention. The benefit is that through the conditional spatial query, each cross-attention head is able to attend to a band containing a distinct region, e.g., one object extremity or a region inside the object box. This narrows down the spatial range for localizing the distinct regions for object classification and box regression, thus relaxing the dependence on the content embeddings and easing the training. Empirical results show that conditional DETR converges 6.7\xD7 faster for the backbones R50 and R101 and 10\xD7 faster for stronger backbones DC5-R50 and DC5-R101. Code is available at "),Ee=a(Fo,"A",{href:!0,rel:!0});var $r=r(Ee);cn=i($r,"https://github.com/Atten4Vis/ConditionalDETR"),$r.forEach(o),hn=i(Fo,"."),Fo.forEach(o),Tr.forEach(o),fo=p(t),oe=a(t,"IMG",{src:!0,alt:!0,width:!0}),uo=p(t),ne=a(t,"SMALL",{});var ko=r(ne);pn=i(ko,"Conditional DETR shows much faster convergence compared to the original DETR. Taken from the "),ut=a(ko,"A",{href:!0});var jr=r(ut);mn=i(jr,"original paper"),jr.forEach(o),fn=i(ko,"."),ko.forEach(o),go=p(t),L=a(t,"P",{});var Ft=r(L);un=i(Ft,"This model was contributed by "),Fe=a(Ft,"A",{href:!0,rel:!0});var Er=r(Fe);gn=i(Er,"DepuMeng"),Er.forEach(o),_n=i(Ft,". The original code can be found "),ke=a(Ft,"A",{href:!0,rel:!0});var Fr=r(ke);bn=i(Fr,"here"),Fr.forEach(o),vn=i(Ft,"."),Ft.forEach(o),_o=p(t),U=a(t,"H2",{class:!0});var zo=r(U);ae=a(zo,"A",{id:!0,class:!0,href:!0});var kr=r(ae);Lt=a(kr,"SPAN",{});var zr=r(Lt);w(ze.$$.fragment,zr),zr.forEach(o),kr.forEach(o),xn=p(zo),Nt=a(zo,"SPAN",{});var qr=r(Nt);wn=i(qr,"ConditionalDetrConfig"),qr.forEach(o),zo.forEach(o),bo=p(t),P=a(t,"DIV",{class:!0});var we=r(P);w(qe.$$.fragment,we),Cn=p(we),V=a(we,"P",{});var kt=r(V);Dn=i(kt,"This is the configuration class to store the configuration of a "),gt=a(kt,"A",{href:!0});var Pr=r(gt);yn=i(Pr,"ConditionalDetrModel"),Pr.forEach(o),Tn=i(kt,`. It is used to instantiate
a Conditional DETR model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Conditional DETR
`),Pe=a(kt,"A",{href:!0,rel:!0});var Or=r(Pe);$n=i(Or,"microsoft/conditional-detr-resnet-50"),Or.forEach(o),jn=i(kt," architecture."),kt.forEach(o),En=p(we),B=a(we,"P",{});var zt=r(B);Fn=i(zt,"Configuration objects inherit from "),_t=a(zt,"A",{href:!0});var Mr=r(_t);kn=i(Mr,"PretrainedConfig"),Mr.forEach(o),zn=i(zt,` and can be used to control the model outputs. Read the
documentation from `),bt=a(zt,"A",{href:!0});var Ir=r(bt);qn=i(Ir,"PretrainedConfig"),Ir.forEach(o),Pn=i(zt," for more information."),zt.forEach(o),On=p(we),w(re.$$.fragment,we),we.forEach(o),vo=p(t),G=a(t,"H2",{class:!0});var qo=r(G);se=a(qo,"A",{id:!0,class:!0,href:!0});var Ar=r(se);St=a(Ar,"SPAN",{});var Lr=r(St);w(Oe.$$.fragment,Lr),Lr.forEach(o),Ar.forEach(o),Mn=p(qo),Rt=a(qo,"SPAN",{});var Nr=r(Rt);In=i(Nr,"ConditionalDetrFeatureExtractor"),Nr.forEach(o),qo.forEach(o),xo=p(t),$=a(t,"DIV",{class:!0});var E=r($);w(Me.$$.fragment,E),An=p(E),Wt=a(E,"P",{});var Sr=r(Wt);Ln=i(Sr,"Constructs a Conditional DETR feature extractor."),Sr.forEach(o),Nn=p(E),Ie=a(E,"P",{});var Po=r(Ie);Sn=i(Po,"This feature extractor inherits from "),vt=a(Po,"A",{href:!0});var Rr=r(vt);Rn=i(Rr,"FeatureExtractionMixin"),Rr.forEach(o),Wn=i(Po,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Po.forEach(o),Hn=p(E),N=a(E,"DIV",{class:!0});var qt=r(N);w(Ae.$$.fragment,qt),Un=p(qt),Ht=a(qt,"P",{});var Wr=r(Ht);Vn=i(Wr,`Main method to prepare for the model one or several image(s) and optional annotations. Images are by default
padded up to the largest image in a batch, and a pixel mask is created that indicates which pixels are
real/which are padding.`),Wr.forEach(o),Bn=p(qt),w(ie.$$.fragment,qt),qt.forEach(o),Gn=p(E),de=a(E,"DIV",{class:!0});var Oo=r(de);w(Le.$$.fragment,Oo),Yn=p(Oo),Ne=a(Oo,"P",{});var Mo=r(Ne);Zn=i(Mo,"Pad images up to the largest image in a batch and create a corresponding "),Ut=a(Mo,"CODE",{});var Hr=r(Ut);Jn=i(Hr,"pixel_mask"),Hr.forEach(o),Xn=i(Mo,"."),Mo.forEach(o),Oo.forEach(o),Kn=p(E),le=a(E,"DIV",{class:!0});var Io=r(le);w(Se.$$.fragment,Io),Qn=p(Io),Re=a(Io,"P",{});var Ao=r(Re);ea=i(Ao,"Converts the output of "),xt=a(Ao,"A",{href:!0});var Ur=r(xt);ta=i(Ur,"ConditionalDetrForObjectDetection"),Ur.forEach(o),oa=i(Ao,` into the format expected by the COCO api. Only
supports PyTorch.`),Ao.forEach(o),Io.forEach(o),na=p(E),ce=a(E,"DIV",{class:!0});var Lo=r(ce);w(We.$$.fragment,Lo),aa=p(Lo),He=a(Lo,"P",{});var No=r(He);ra=i(No,"Converts the output of "),wt=a(No,"A",{href:!0});var Vr=r(wt);sa=i(Vr,"ConditionalDetrForSegmentation"),Vr.forEach(o),ia=i(No,` into image segmentation predictions. Only supports
PyTorch.`),No.forEach(o),Lo.forEach(o),da=p(E),he=a(E,"DIV",{class:!0});var So=r(he);w(Ue.$$.fragment,So),la=p(So),Ve=a(So,"P",{});var Ro=r(Ve);ca=i(Ro,"Converts the output of "),Ct=a(Ro,"A",{href:!0});var Br=r(Ct);ha=i(Br,"ConditionalDetrForSegmentation"),Br.forEach(o),pa=i(Ro,` into actual panoptic predictions. Only supports
PyTorch.`),Ro.forEach(o),So.forEach(o),E.forEach(o),wo=p(t),Y=a(t,"H2",{class:!0});var Wo=r(Y);pe=a(Wo,"A",{id:!0,class:!0,href:!0});var Gr=r(pe);Vt=a(Gr,"SPAN",{});var Yr=r(Vt);w(Be.$$.fragment,Yr),Yr.forEach(o),Gr.forEach(o),ma=p(Wo),Bt=a(Wo,"SPAN",{});var Zr=r(Bt);fa=i(Zr,"ConditionalDetrModel"),Zr.forEach(o),Wo.forEach(o),Co=p(t),F=a(t,"DIV",{class:!0});var S=r(F);w(Ge.$$.fragment,S),ua=p(S),Gt=a(S,"P",{});var Jr=r(Gt);ga=i(Jr,`The bare Conditional DETR Model (consisting of a backbone and encoder-decoder Transformer) outputting raw
hidden-states without any specific head on top.`),Jr.forEach(o),_a=p(S),Ye=a(S,"P",{});var Ho=r(Ye);ba=i(Ho,"This model inherits from "),Dt=a(Ho,"A",{href:!0});var Xr=r(Dt);va=i(Xr,"PreTrainedModel"),Xr.forEach(o),xa=i(Ho,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ho.forEach(o),wa=p(S),Ze=a(S,"P",{});var Uo=r(Ze);Ca=i(Uo,"This model is also a PyTorch "),Je=a(Uo,"A",{href:!0,rel:!0});var Kr=r(Je);Da=i(Kr,"torch.nn.Module"),Kr.forEach(o),ya=i(Uo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uo.forEach(o),Ta=p(S),M=a(S,"DIV",{class:!0});var Ce=r(M);w(Xe.$$.fragment,Ce),$a=p(Ce),Z=a(Ce,"P",{});var Pt=r(Z);ja=i(Pt,"The "),yt=a(Pt,"A",{href:!0});var Qr=r(yt);Ea=i(Qr,"ConditionalDetrModel"),Qr.forEach(o),Fa=i(Pt," forward method, overrides the "),Yt=a(Pt,"CODE",{});var es=r(Yt);ka=i(es,"__call__"),es.forEach(o),za=i(Pt," special method."),Pt.forEach(o),qa=p(Ce),w(me.$$.fragment,Ce),Pa=p(Ce),w(fe.$$.fragment,Ce),Ce.forEach(o),S.forEach(o),Do=p(t),J=a(t,"H2",{class:!0});var Vo=r(J);ue=a(Vo,"A",{id:!0,class:!0,href:!0});var ts=r(ue);Zt=a(ts,"SPAN",{});var os=r(Zt);w(Ke.$$.fragment,os),os.forEach(o),ts.forEach(o),Oa=p(Vo),Jt=a(Vo,"SPAN",{});var ns=r(Jt);Ma=i(ns,"ConditionalDetrForObjectDetection"),ns.forEach(o),Vo.forEach(o),yo=p(t),k=a(t,"DIV",{class:!0});var R=r(k);w(Qe.$$.fragment,R),Ia=p(R),Xt=a(R,"P",{});var as=r(Xt);Aa=i(as,`CONDITIONAL_DETR Model (consisting of a backbone and encoder-decoder Transformer) with object detection heads on
top, for tasks such as COCO detection.`),as.forEach(o),La=p(R),et=a(R,"P",{});var Bo=r(et);Na=i(Bo,"This model inherits from "),Tt=a(Bo,"A",{href:!0});var rs=r(Tt);Sa=i(rs,"PreTrainedModel"),rs.forEach(o),Ra=i(Bo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bo.forEach(o),Wa=p(R),tt=a(R,"P",{});var Go=r(tt);Ha=i(Go,"This model is also a PyTorch "),ot=a(Go,"A",{href:!0,rel:!0});var ss=r(ot);Ua=i(ss,"torch.nn.Module"),ss.forEach(o),Va=i(Go,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Go.forEach(o),Ba=p(R),I=a(R,"DIV",{class:!0});var De=r(I);w(nt.$$.fragment,De),Ga=p(De),X=a(De,"P",{});var Ot=r(X);Ya=i(Ot,"The "),$t=a(Ot,"A",{href:!0});var is=r($t);Za=i(is,"ConditionalDetrForObjectDetection"),is.forEach(o),Ja=i(Ot," forward method, overrides the "),Kt=a(Ot,"CODE",{});var ds=r(Kt);Xa=i(ds,"__call__"),ds.forEach(o),Ka=i(Ot," special method."),Ot.forEach(o),Qa=p(De),w(ge.$$.fragment,De),er=p(De),w(_e.$$.fragment,De),De.forEach(o),R.forEach(o),To=p(t),K=a(t,"H2",{class:!0});var Yo=r(K);be=a(Yo,"A",{id:!0,class:!0,href:!0});var ls=r(be);Qt=a(ls,"SPAN",{});var cs=r(Qt);w(at.$$.fragment,cs),cs.forEach(o),ls.forEach(o),tr=p(Yo),eo=a(Yo,"SPAN",{});var hs=r(eo);or=i(hs,"ConditionalDetrForSegmentation"),hs.forEach(o),Yo.forEach(o),$o=p(t),z=a(t,"DIV",{class:!0});var W=r(z);w(rt.$$.fragment,W),nr=p(W),to=a(W,"P",{});var ps=r(to);ar=i(ps,`CONDITIONAL_DETR Model (consisting of a backbone and encoder-decoder Transformer) with a segmentation head on top,
for tasks such as COCO panoptic.`),ps.forEach(o),rr=p(W),st=a(W,"P",{});var Zo=r(st);sr=i(Zo,"This model inherits from "),jt=a(Zo,"A",{href:!0});var ms=r(jt);ir=i(ms,"PreTrainedModel"),ms.forEach(o),dr=i(Zo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zo.forEach(o),lr=p(W),it=a(W,"P",{});var Jo=r(it);cr=i(Jo,"This model is also a PyTorch "),dt=a(Jo,"A",{href:!0,rel:!0});var fs=r(dt);hr=i(fs,"torch.nn.Module"),fs.forEach(o),pr=i(Jo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jo.forEach(o),mr=p(W),A=a(W,"DIV",{class:!0});var ye=r(A);w(lt.$$.fragment,ye),fr=p(ye),Q=a(ye,"P",{});var Mt=r(Q);ur=i(Mt,"The "),Et=a(Mt,"A",{href:!0});var us=r(Et);gr=i(us,"ConditionalDetrForSegmentation"),us.forEach(o),_r=i(Mt," forward method, overrides the "),oo=a(Mt,"CODE",{});var gs=r(oo);br=i(gs,"__call__"),gs.forEach(o),vr=i(Mt," special method."),Mt.forEach(o),xr=p(ye),w(ve.$$.fragment,ye),wr=p(ye),w(xe.$$.fragment,ye),ye.forEach(o),W.forEach(o),this.h()},h(){l(c,"name","hf:doc:metadata"),l(c,"content",JSON.stringify(qs)),l(m,"id","conditional-detr"),l(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(m,"href","#conditional-detr"),l(u,"class","relative group"),l(ee,"id","overview"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#overview"),l(H,"class","relative group"),l($e,"href","https://arxiv.org/abs/2108.06152"),l($e,"rel","nofollow"),l(Ee,"href","https://github.com/Atten4Vis/ConditionalDETR"),l(Ee,"rel","nofollow"),ws(oe.src,Cr="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/model_doc/conditional_detr_curve.jpg")||l(oe,"src",Cr),l(oe,"alt","drawing"),l(oe,"width","600"),l(ut,"href","https://arxiv.org/abs/2108.06152"),l(Fe,"href","https://huggingface.co/DepuMeng"),l(Fe,"rel","nofollow"),l(ke,"href","https://github.com/Atten4Vis/ConditionalDETR"),l(ke,"rel","nofollow"),l(ae,"id","transformers.ConditionalDetrConfig"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.ConditionalDetrConfig"),l(U,"class","relative group"),l(gt,"href","/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrModel"),l(Pe,"href","https://huggingface.co/microsoft/conditional-detr-resnet-50"),l(Pe,"rel","nofollow"),l(_t,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(bt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(se,"id","transformers.ConditionalDetrFeatureExtractor"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#transformers.ConditionalDetrFeatureExtractor"),l(G,"class","relative group"),l(vt,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(xt,"href","/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrForObjectDetection"),l(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(wt,"href","/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrForSegmentation"),l(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ct,"href","/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrForSegmentation"),l(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(pe,"id","transformers.ConditionalDetrModel"),l(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(pe,"href","#transformers.ConditionalDetrModel"),l(Y,"class","relative group"),l(Dt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Je,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Je,"rel","nofollow"),l(yt,"href","/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrModel"),l(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ue,"id","transformers.ConditionalDetrForObjectDetection"),l(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ue,"href","#transformers.ConditionalDetrForObjectDetection"),l(J,"class","relative group"),l(Tt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(ot,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ot,"rel","nofollow"),l($t,"href","/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrForObjectDetection"),l(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(be,"id","transformers.ConditionalDetrForSegmentation"),l(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(be,"href","#transformers.ConditionalDetrForSegmentation"),l(K,"class","relative group"),l(jt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(dt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(dt,"rel","nofollow"),l(Et,"href","/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrForSegmentation"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,c),_(t,v,f),_(t,u,f),e(u,m),e(m,b),C(d,b,null),e(u,g),e(u,q),e(q,tn),_(t,co,f),_(t,H,f),e(H,ee),e(ee,It),C(Te,It,null),e(H,on),e(H,At),e(At,nn),_(t,ho,f),_(t,te,f),e(te,an),e(te,$e),e($e,rn),e(te,sn),_(t,po,f),_(t,mt,f),e(mt,dn),_(t,mo,f),_(t,ft,f),e(ft,je),e(je,ln),e(je,Ee),e(Ee,cn),e(je,hn),_(t,fo,f),_(t,oe,f),_(t,uo,f),_(t,ne,f),e(ne,pn),e(ne,ut),e(ut,mn),e(ne,fn),_(t,go,f),_(t,L,f),e(L,un),e(L,Fe),e(Fe,gn),e(L,_n),e(L,ke),e(ke,bn),e(L,vn),_(t,_o,f),_(t,U,f),e(U,ae),e(ae,Lt),C(ze,Lt,null),e(U,xn),e(U,Nt),e(Nt,wn),_(t,bo,f),_(t,P,f),C(qe,P,null),e(P,Cn),e(P,V),e(V,Dn),e(V,gt),e(gt,yn),e(V,Tn),e(V,Pe),e(Pe,$n),e(V,jn),e(P,En),e(P,B),e(B,Fn),e(B,_t),e(_t,kn),e(B,zn),e(B,bt),e(bt,qn),e(B,Pn),e(P,On),C(re,P,null),_(t,vo,f),_(t,G,f),e(G,se),e(se,St),C(Oe,St,null),e(G,Mn),e(G,Rt),e(Rt,In),_(t,xo,f),_(t,$,f),C(Me,$,null),e($,An),e($,Wt),e(Wt,Ln),e($,Nn),e($,Ie),e(Ie,Sn),e(Ie,vt),e(vt,Rn),e(Ie,Wn),e($,Hn),e($,N),C(Ae,N,null),e(N,Un),e(N,Ht),e(Ht,Vn),e(N,Bn),C(ie,N,null),e($,Gn),e($,de),C(Le,de,null),e(de,Yn),e(de,Ne),e(Ne,Zn),e(Ne,Ut),e(Ut,Jn),e(Ne,Xn),e($,Kn),e($,le),C(Se,le,null),e(le,Qn),e(le,Re),e(Re,ea),e(Re,xt),e(xt,ta),e(Re,oa),e($,na),e($,ce),C(We,ce,null),e(ce,aa),e(ce,He),e(He,ra),e(He,wt),e(wt,sa),e(He,ia),e($,da),e($,he),C(Ue,he,null),e(he,la),e(he,Ve),e(Ve,ca),e(Ve,Ct),e(Ct,ha),e(Ve,pa),_(t,wo,f),_(t,Y,f),e(Y,pe),e(pe,Vt),C(Be,Vt,null),e(Y,ma),e(Y,Bt),e(Bt,fa),_(t,Co,f),_(t,F,f),C(Ge,F,null),e(F,ua),e(F,Gt),e(Gt,ga),e(F,_a),e(F,Ye),e(Ye,ba),e(Ye,Dt),e(Dt,va),e(Ye,xa),e(F,wa),e(F,Ze),e(Ze,Ca),e(Ze,Je),e(Je,Da),e(Ze,ya),e(F,Ta),e(F,M),C(Xe,M,null),e(M,$a),e(M,Z),e(Z,ja),e(Z,yt),e(yt,Ea),e(Z,Fa),e(Z,Yt),e(Yt,ka),e(Z,za),e(M,qa),C(me,M,null),e(M,Pa),C(fe,M,null),_(t,Do,f),_(t,J,f),e(J,ue),e(ue,Zt),C(Ke,Zt,null),e(J,Oa),e(J,Jt),e(Jt,Ma),_(t,yo,f),_(t,k,f),C(Qe,k,null),e(k,Ia),e(k,Xt),e(Xt,Aa),e(k,La),e(k,et),e(et,Na),e(et,Tt),e(Tt,Sa),e(et,Ra),e(k,Wa),e(k,tt),e(tt,Ha),e(tt,ot),e(ot,Ua),e(tt,Va),e(k,Ba),e(k,I),C(nt,I,null),e(I,Ga),e(I,X),e(X,Ya),e(X,$t),e($t,Za),e(X,Ja),e(X,Kt),e(Kt,Xa),e(X,Ka),e(I,Qa),C(ge,I,null),e(I,er),C(_e,I,null),_(t,To,f),_(t,K,f),e(K,be),e(be,Qt),C(at,Qt,null),e(K,tr),e(K,eo),e(eo,or),_(t,$o,f),_(t,z,f),C(rt,z,null),e(z,nr),e(z,to),e(to,ar),e(z,rr),e(z,st),e(st,sr),e(st,jt),e(jt,ir),e(st,dr),e(z,lr),e(z,it),e(it,cr),e(it,dt),e(dt,hr),e(it,pr),e(z,mr),e(z,A),C(lt,A,null),e(A,fr),e(A,Q),e(Q,ur),e(Q,Et),e(Et,gr),e(Q,_r),e(Q,oo),e(oo,br),e(Q,vr),e(A,xr),C(ve,A,null),e(A,wr),C(xe,A,null),jo=!0},p(t,[f]){const ct={};f&2&&(ct.$$scope={dirty:f,ctx:t}),re.$set(ct);const no={};f&2&&(no.$$scope={dirty:f,ctx:t}),ie.$set(no);const ao={};f&2&&(ao.$$scope={dirty:f,ctx:t}),me.$set(ao);const ro={};f&2&&(ro.$$scope={dirty:f,ctx:t}),fe.$set(ro);const ht={};f&2&&(ht.$$scope={dirty:f,ctx:t}),ge.$set(ht);const so={};f&2&&(so.$$scope={dirty:f,ctx:t}),_e.$set(so);const io={};f&2&&(io.$$scope={dirty:f,ctx:t}),ve.$set(io);const lo={};f&2&&(lo.$$scope={dirty:f,ctx:t}),xe.$set(lo)},i(t){jo||(D(d.$$.fragment,t),D(Te.$$.fragment,t),D(ze.$$.fragment,t),D(qe.$$.fragment,t),D(re.$$.fragment,t),D(Oe.$$.fragment,t),D(Me.$$.fragment,t),D(Ae.$$.fragment,t),D(ie.$$.fragment,t),D(Le.$$.fragment,t),D(Se.$$.fragment,t),D(We.$$.fragment,t),D(Ue.$$.fragment,t),D(Be.$$.fragment,t),D(Ge.$$.fragment,t),D(Xe.$$.fragment,t),D(me.$$.fragment,t),D(fe.$$.fragment,t),D(Ke.$$.fragment,t),D(Qe.$$.fragment,t),D(nt.$$.fragment,t),D(ge.$$.fragment,t),D(_e.$$.fragment,t),D(at.$$.fragment,t),D(rt.$$.fragment,t),D(lt.$$.fragment,t),D(ve.$$.fragment,t),D(xe.$$.fragment,t),jo=!0)},o(t){y(d.$$.fragment,t),y(Te.$$.fragment,t),y(ze.$$.fragment,t),y(qe.$$.fragment,t),y(re.$$.fragment,t),y(Oe.$$.fragment,t),y(Me.$$.fragment,t),y(Ae.$$.fragment,t),y(ie.$$.fragment,t),y(Le.$$.fragment,t),y(Se.$$.fragment,t),y(We.$$.fragment,t),y(Ue.$$.fragment,t),y(Be.$$.fragment,t),y(Ge.$$.fragment,t),y(Xe.$$.fragment,t),y(me.$$.fragment,t),y(fe.$$.fragment,t),y(Ke.$$.fragment,t),y(Qe.$$.fragment,t),y(nt.$$.fragment,t),y(ge.$$.fragment,t),y(_e.$$.fragment,t),y(at.$$.fragment,t),y(rt.$$.fragment,t),y(lt.$$.fragment,t),y(ve.$$.fragment,t),y(xe.$$.fragment,t),jo=!1},d(t){o(c),t&&o(v),t&&o(u),T(d),t&&o(co),t&&o(H),T(Te),t&&o(ho),t&&o(te),t&&o(po),t&&o(mt),t&&o(mo),t&&o(ft),t&&o(fo),t&&o(oe),t&&o(uo),t&&o(ne),t&&o(go),t&&o(L),t&&o(_o),t&&o(U),T(ze),t&&o(bo),t&&o(P),T(qe),T(re),t&&o(vo),t&&o(G),T(Oe),t&&o(xo),t&&o($),T(Me),T(Ae),T(ie),T(Le),T(Se),T(We),T(Ue),t&&o(wo),t&&o(Y),T(Be),t&&o(Co),t&&o(F),T(Ge),T(Xe),T(me),T(fe),t&&o(Do),t&&o(J),T(Ke),t&&o(yo),t&&o(k),T(Qe),T(nt),T(ge),T(_e),t&&o(To),t&&o(K),T(at),t&&o($o),t&&o(z),T(rt),T(lt),T(ve),T(xe)}}}const qs={local:"conditional-detr",sections:[{local:"overview",title:"Overview"},{local:"transformers.ConditionalDetrConfig",title:"ConditionalDetrConfig"},{local:"transformers.ConditionalDetrFeatureExtractor",title:"ConditionalDetrFeatureExtractor"},{local:"transformers.ConditionalDetrModel",title:"ConditionalDetrModel"},{local:"transformers.ConditionalDetrForObjectDetection",title:"ConditionalDetrForObjectDetection"},{local:"transformers.ConditionalDetrForSegmentation",title:"ConditionalDetrForSegmentation"}],title:"Conditional DETR"};function Ps(j){return Cs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ss extends _s{constructor(c){super();bs(this,c,Ps,zs,vs,{})}}export{Ss as default,qs as metadata};
