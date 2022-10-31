import{S as Fs,i as ks,s as zs,e as n,k as m,w as x,t as s,M as qs,c as a,d as o,m as h,a as r,x as w,h as i,b as l,N as Ps,G as e,g as _,y as C,q as D,o as y,B as T,v as Os,L as rn}from"../../chunks/vendor-hf-doc-builder.js";import{T as nn}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as sn}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ut}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as an}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function As(E){let c,v,u,p,b;return p=new sn({props:{code:`from transformers import ConditionalDetrConfig, ConditionalDetrModel

# Initializing a Conditional DETR microsoft/conditional-detr-resnet-50 style configuration
configuration = ConditionalDetrConfig()

# Initializing a model (with random weights) from the microsoft/conditional-detr-resnet-50 style configuration
model = ConditionalDetrModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConditionalDetrConfig, ConditionalDetrModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Conditional DETR microsoft/conditional-detr-resnet-50 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ConditionalDetrConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the microsoft/conditional-detr-resnet-50 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConditionalDetrModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=n("p"),v=s("Examples:"),u=m(),x(p.$$.fragment)},l(d){c=a(d,"P",{});var g=r(c);v=i(g,"Examples:"),g.forEach(o),u=h(d),w(p.$$.fragment,d)},m(d,g){_(d,c,g),e(c,v),_(d,u,g),C(p,d,g),b=!0},p:rn,i(d){b||(D(p.$$.fragment,d),b=!0)},o(d){y(p.$$.fragment,d),b=!1},d(d){d&&o(c),d&&o(u),T(p,d)}}}function Ms(E){let c,v;return{c(){c=n("p"),v=s(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(u){c=a(u,"P",{});var p=r(c);v=i(p,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),p.forEach(o)},m(u,p){_(u,c,p),e(c,v)},d(u){u&&o(c)}}}function Is(E){let c,v,u,p,b;return{c(){c=n("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),p=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){c=a(d,"P",{});var g=r(c);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(g,"CODE",{});var q=r(u);p=i(q,"Module"),q.forEach(o),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(d,g){_(d,c,g),e(c,v),e(c,u),e(u,p),e(c,b)},d(d){d&&o(c)}}}function Ls(E){let c,v,u,p,b;return p=new sn({props:{code:`from transformers import AutoFeatureExtractor, AutoModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">300</span>, <span class="hljs-number">256</span>]`}}),{c(){c=n("p"),v=s("Examples:"),u=m(),x(p.$$.fragment)},l(d){c=a(d,"P",{});var g=r(c);v=i(g,"Examples:"),g.forEach(o),u=h(d),w(p.$$.fragment,d)},m(d,g){_(d,c,g),e(c,v),_(d,u,g),C(p,d,g),b=!0},p:rn,i(d){b||(D(p.$$.fragment,d),b=!0)},o(d){y(p.$$.fragment,d),b=!1},d(d){d&&o(c),d&&o(u),T(p,d)}}}function Ss(E){let c,v,u,p,b;return{c(){c=n("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),p=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){c=a(d,"P",{});var g=r(c);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(g,"CODE",{});var q=r(u);p=i(q,"Module"),q.forEach(o),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(d,g){_(d,c,g),e(c,v),e(c,u),e(u,p),e(c,b)},d(d){d&&o(c)}}}function Ns(E){let c,v,u,p,b;return p=new sn({props:{code:`from transformers import AutoFeatureExtractor, AutoModelForObjectDetection
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
results = feature_extractor.post_process_object_detection(
    outputs, threshold=0.5, target_sizes=target_sizes
)[0]
for score, label, box in zip(results["scores"], results["labels"], results["boxes"]):
    box = [round(i, 2) for i in box.tolist()]
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
<span class="hljs-meta">&gt;&gt;&gt; </span>results = feature_extractor.post_process_object_detection(
<span class="hljs-meta">... </span>    outputs, threshold=<span class="hljs-number">0.5</span>, target_sizes=target_sizes
<span class="hljs-meta">... </span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> score, label, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(results[<span class="hljs-string">&quot;scores&quot;</span>], results[<span class="hljs-string">&quot;labels&quot;</span>], results[<span class="hljs-string">&quot;boxes&quot;</span>]):
<span class="hljs-meta">... </span>    box = [<span class="hljs-built_in">round</span>(i, <span class="hljs-number">2</span>) <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> box.tolist()]
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(
<span class="hljs-meta">... </span>        <span class="hljs-string">f&quot;Detected <span class="hljs-subst">{model.config.id2label[label.item()]}</span> with confidence &quot;</span>
<span class="hljs-meta">... </span>        <span class="hljs-string">f&quot;<span class="hljs-subst">{<span class="hljs-built_in">round</span>(score.item(), <span class="hljs-number">3</span>)}</span> at location <span class="hljs-subst">{box}</span>&quot;</span>
<span class="hljs-meta">... </span>    )
Detected remote <span class="hljs-keyword">with</span> confidence <span class="hljs-number">0.833</span> at location [<span class="hljs-number">38.31</span>, <span class="hljs-number">72.1</span>, <span class="hljs-number">177.63</span>, <span class="hljs-number">118.45</span>]
Detected cat <span class="hljs-keyword">with</span> confidence <span class="hljs-number">0.831</span> at location [<span class="hljs-number">9.2</span>, <span class="hljs-number">51.38</span>, <span class="hljs-number">321.13</span>, <span class="hljs-number">469.0</span>]
Detected cat <span class="hljs-keyword">with</span> confidence <span class="hljs-number">0.804</span> at location [<span class="hljs-number">340.3</span>, <span class="hljs-number">16.85</span>, <span class="hljs-number">642.93</span>, <span class="hljs-number">370.95</span>]
Detected remote <span class="hljs-keyword">with</span> confidence <span class="hljs-number">0.683</span> at location [<span class="hljs-number">334.48</span>, <span class="hljs-number">73.49</span>, <span class="hljs-number">366.37</span>, <span class="hljs-number">190.01</span>]
Detected couch <span class="hljs-keyword">with</span> confidence <span class="hljs-number">0.535</span> at location [<span class="hljs-number">0.52</span>, <span class="hljs-number">1.19</span>, <span class="hljs-number">640.35</span>, <span class="hljs-number">475.1</span>]`}}),{c(){c=n("p"),v=s("Examples:"),u=m(),x(p.$$.fragment)},l(d){c=a(d,"P",{});var g=r(c);v=i(g,"Examples:"),g.forEach(o),u=h(d),w(p.$$.fragment,d)},m(d,g){_(d,c,g),e(c,v),_(d,u,g),C(p,d,g),b=!0},p:rn,i(d){b||(D(p.$$.fragment,d),b=!0)},o(d){y(p.$$.fragment,d),b=!1},d(d){d&&o(c),d&&o(u),T(p,d)}}}function Rs(E){let c,v,u,p,b;return{c(){c=n("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),p=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){c=a(d,"P",{});var g=r(c);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(g,"CODE",{});var q=r(u);p=i(q,"Module"),q.forEach(o),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(d,g){_(d,c,g),e(c,v),e(c,u),e(u,p),e(c,b)},d(d){d&&o(c)}}}function Us(E){let c,v,u,p,b;return p=new sn({props:{code:`import io
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

# Use the \`post_process_panoptic_segmentation\` method of \`ConditionalDetrFeatureExtractor\` to retrieve post-processed panoptic segmentation maps
# Segmentation results are returned as a list of dictionaries
result = feature_extractor.post_process_panoptic_segmentation(outputs, target_sizes=[(300, 500)])
# A tensor of shape (height, width) where each value denotes a segment id, filled with -1 if no segment is found
panoptic_seg = result[0]["segmentation"]
# Get prediction score and segment_id to class_id mapping of each segment
panoptic_segments_info = result[0]["segments_info"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> io
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

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Use the \`post_process_panoptic_segmentation\` method of \`ConditionalDetrFeatureExtractor\` to retrieve post-processed panoptic segmentation maps</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Segmentation results are returned as a list of dictionaries</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>result = feature_extractor.post_process_panoptic_segmentation(outputs, target_sizes=[(<span class="hljs-number">300</span>, <span class="hljs-number">500</span>)])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># A tensor of shape (height, width) where each value denotes a segment id, filled with -1 if no segment is found</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>panoptic_seg = result[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;segmentation&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Get prediction score and segment_id to class_id mapping of each segment</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>panoptic_segments_info = result[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;segments_info&quot;</span>]`}}),{c(){c=n("p"),v=s("Examples:"),u=m(),x(p.$$.fragment)},l(d){c=a(d,"P",{});var g=r(c);v=i(g,"Examples:"),g.forEach(o),u=h(d),w(p.$$.fragment,d)},m(d,g){_(d,c,g),e(c,v),_(d,u,g),C(p,d,g),b=!0},p:rn,i(d){b||(D(p.$$.fragment,d),b=!0)},o(d){y(p.$$.fragment,d),b=!1},d(d){d&&o(c),d&&o(u),T(p,d)}}}function Ws(E){let c,v,u,p,b,d,g,q,dn,fo,W,ee,Nt,$e,ln,Rt,cn,uo,te,mn,Ee,hn,pn,go,gt,fn,_o,_t,je,un,Fe,gn,_n,bo,oe,Pr,vo,ne,bn,bt,vn,xn,xo,L,wn,ke,Cn,Dn,ze,yn,Tn,wo,H,ae,Ut,qe,$n,Wt,En,Co,O,Pe,jn,V,Fn,vt,kn,zn,Oe,qn,Pn,On,B,An,xt,Mn,In,wt,Ln,Sn,Nn,re,Do,G,se,Ht,Ae,Rn,Vt,Un,yo,$,Me,Wn,Bt,Hn,Vn,Ie,Bn,Ct,Gn,Yn,Zn,S,Le,Jn,Gt,Xn,Kn,ie,Qn,de,Se,ea,Ne,ta,Yt,oa,na,aa,le,Re,ra,Ue,sa,Dt,ia,da,la,ce,We,ca,He,ma,yt,ha,pa,fa,me,Ve,ua,Be,ga,Tt,_a,ba,va,he,Ge,xa,Ye,wa,$t,Ca,Da,To,Y,pe,Zt,Ze,ya,Jt,Ta,$o,F,Je,$a,Xt,Ea,ja,Xe,Fa,Et,ka,za,qa,Ke,Pa,Qe,Oa,Aa,Ma,A,et,Ia,Z,La,jt,Sa,Na,Kt,Ra,Ua,Wa,fe,Ha,ue,Eo,J,ge,Qt,tt,Va,eo,Ba,jo,k,ot,Ga,to,Ya,Za,nt,Ja,Ft,Xa,Ka,Qa,at,er,rt,tr,or,nr,M,st,ar,X,rr,kt,sr,ir,oo,dr,lr,cr,_e,mr,be,Fo,K,ve,no,it,hr,ao,pr,ko,z,dt,fr,ro,ur,gr,lt,_r,zt,br,vr,xr,ct,wr,mt,Cr,Dr,yr,I,ht,Tr,Q,$r,qt,Er,jr,so,Fr,kr,zr,xe,qr,we,zo;return d=new ut({}),$e=new ut({}),qe=new ut({}),Pe=new P({props:{name:"class transformers.ConditionalDetrConfig",anchor:"transformers.ConditionalDetrConfig",parameters:[{name:"num_channels",val:" = 3"},{name:"num_queries",val:" = 300"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 6"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 8"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 8"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"init_xavier_std",val:" = 1.0"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"auxiliary_loss",val:" = False"},{name:"position_embedding_type",val:" = 'sine'"},{name:"backbone",val:" = 'resnet50'"},{name:"use_pretrained_backbone",val:" = True"},{name:"dilation",val:" = False"},{name:"class_cost",val:" = 2"},{name:"bbox_cost",val:" = 5"},{name:"giou_cost",val:" = 2"},{name:"mask_loss_coefficient",val:" = 1"},{name:"dice_loss_coefficient",val:" = 1"},{name:"cls_loss_coefficient",val:" = 2"},{name:"bbox_loss_coefficient",val:" = 5"},{name:"giou_loss_coefficient",val:" = 2"},{name:"focal_alpha",val:" = 0.25"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ConditionalDetrConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
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
Relative classification weight of the &#x2018;no-object&#x2019; class in the object detection loss.`,name:"eos_coefficient"},{anchor:"transformers.ConditionalDetrConfig.focal_alpha",description:`<strong>focal_alpha</strong> (<code>float</code>, <em>optional</em>, defaults to 0.25) &#x2014;
Alpha parameter in the focal loss.`,name:"focal_alpha"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/configuration_conditional_detr.py#L36"}}),re=new an({props:{anchor:"transformers.ConditionalDetrConfig.example",$$slots:{default:[As]},$$scope:{ctx:E}}}),Ae=new ut({}),Me=new P({props:{name:"class transformers.ConditionalDetrFeatureExtractor",anchor:"transformers.ConditionalDetrFeatureExtractor",parameters:[{name:"format",val:" = 'coco_detection'"},{name:"do_resize",val:" = True"},{name:"size",val:" = 800"},{name:"max_size",val:" = 1333"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ConditionalDetrFeatureExtractor.format",description:`<strong>format</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;coco_detection&quot;</code>) &#x2014;
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
ImageNet std.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/feature_extraction_conditional_detr.py#L258"}}),Le=new P({props:{name:"__call__",anchor:"transformers.ConditionalDetrFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"annotations",val:": typing.Union[typing.List[typing.Dict], typing.List[typing.List[typing.Dict]]] = None"},{name:"return_segmentation_masks",val:": typing.Optional[bool] = False"},{name:"masks_path",val:": typing.Optional[pathlib.Path] = None"},{name:"pad_and_return_pixel_mask",val:": typing.Optional[bool] = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ConditionalDetrFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
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
objects.`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/feature_extraction_conditional_detr.py#L545",returnDescription:`
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
`}}),ie=new nn({props:{warning:!0,$$slots:{default:[Ms]},$$scope:{ctx:E}}}),Se=new P({props:{name:"pad_and_create_pixel_mask",anchor:"transformers.ConditionalDetrFeatureExtractor.pad_and_create_pixel_mask",parameters:[{name:"pixel_values_list",val:": typing.List[ForwardRef('torch.Tensor')]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"}],parametersDescription:[{anchor:"transformers.ConditionalDetrFeatureExtractor.pad_and_create_pixel_mask.pixel_values_list",description:`<strong>pixel_values_list</strong> (<code>List[torch.Tensor]</code>) &#x2014;
List of images (pixel values) to be padded. Each image should be a tensor of shape (C, H, W).`,name:"pixel_values_list"},{anchor:"transformers.ConditionalDetrFeatureExtractor.pad_and_create_pixel_mask.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of NumPy arrays. If set to <code>&apos;pt&apos;</code>, return PyTorch <code>torch.Tensor</code>
objects.`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/feature_extraction_conditional_detr.py#L785",returnDescription:`
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
`}}),Re=new P({props:{name:"post_process_object_detection",anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_object_detection",parameters:[{name:"outputs",val:""},{name:"threshold",val:": float = 0.5"},{name:"target_sizes",val:": typing.Union[transformers.utils.generic.TensorType, typing.List[typing.Tuple]] = None"}],parametersDescription:[{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_object_detection.outputs",description:`<strong>outputs</strong> (<code>DetrObjectDetectionOutput</code>) &#x2014;
Raw outputs of the model.`,name:"outputs"},{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_object_detection.threshold",description:`<strong>threshold</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Score threshold to keep object detection predictions.`,name:"threshold"},{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_object_detection.target_sizes",description:`<strong>target_sizes</strong> (<code>torch.Tensor</code> or <code>List[Tuple[int, int]]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Tensor of shape <code>(batch_size, 2)</code> or list of tuples (<code>Tuple[int, int]</code>) containing the target size
(height, width) of each image in the batch. If left to None, predictions will not be resized.`,name:"target_sizes"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/feature_extraction_conditional_detr.py#L873",returnDescription:`
<p>A list of dictionaries, each dictionary containing the scores, labels and boxes for an image
in the batch as predicted by the model.</p>
`,returnType:`
<p><code>List[Dict]</code></p>
`}}),We=new P({props:{name:"post_process_instance_segmentation",anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_instance_segmentation",parameters:[{name:"outputs",val:""},{name:"threshold",val:": float = 0.5"},{name:"mask_threshold",val:": float = 0.5"},{name:"overlap_mask_area_threshold",val:": float = 0.8"},{name:"target_sizes",val:": typing.Union[typing.List[typing.Tuple[int, int]], NoneType] = None"},{name:"return_coco_annotation",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_instance_segmentation.outputs",description:`<strong>outputs</strong> (<a href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrForSegmentation">ConditionalDetrForSegmentation</a>) &#x2014;
Raw outputs of the model.`,name:"outputs"},{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_instance_segmentation.threshold",description:`<strong>threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
The probability score threshold to keep predicted instance masks.`,name:"threshold"},{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_instance_segmentation.mask_threshold",description:`<strong>mask_threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
Threshold to use when turning the predicted masks into binary values.`,name:"mask_threshold"},{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_instance_segmentation.overlap_mask_area_threshold",description:`<strong>overlap_mask_area_threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.8) &#x2014;
The overlap mask area threshold to merge or discard small disconnected parts within each binary
instance mask.`,name:"overlap_mask_area_threshold"},{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_instance_segmentation.target_sizes",description:`<strong>target_sizes</strong> (<code>List[Tuple]</code>, <em>optional</em>) &#x2014;
List of length (batch_size), where each list item (<code>Tuple[int, int]]</code>) corresponds to the requested
final size (height, width) of each prediction. If left to None, predictions will not be resized.`,name:"target_sizes"},{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_instance_segmentation.return_coco_annotation",description:`<strong>return_coco_annotation</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Defaults to <code>False</code>. If set to <code>True</code>, segmentation maps are returned in COCO run-length encoding (RLE)
format.`,name:"return_coco_annotation"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/feature_extraction_conditional_detr.py#L978",returnDescription:`
<p>A list of dictionaries, one per image, each dictionary containing two keys:</p>
<ul>
<li><strong>segmentation</strong> \u2014 A tensor of shape <code>(height, width)</code> where each pixel represents a <code>segment_id</code> or
<code>List[List]</code> run-length encoding (RLE) of the segmentation map if return_coco_annotation is set to
<code>True</code>. Set to <code>None</code> if no mask if found above <code>threshold</code>.</li>
<li><strong>segments_info</strong> \u2014 A dictionary that contains additional information on each segment.<ul>
<li><strong>id</strong> \u2014 An integer representing the <code>segment_id</code>.</li>
<li><strong>label_id</strong> \u2014 An integer representing the label / semantic class id corresponding to <code>segment_id</code>.</li>
<li><strong>score</strong> \u2014 Prediction score of segment with <code>segment_id</code>.</li>
</ul></li>
</ul>
`,returnType:`
<p><code>List[Dict]</code></p>
`}}),Ve=new P({props:{name:"post_process_semantic_segmentation",anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_semantic_segmentation",parameters:[{name:"outputs",val:""},{name:"target_sizes",val:": typing.List[typing.Tuple[int, int]] = None"}],parametersDescription:[{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_semantic_segmentation.outputs",description:`<strong>outputs</strong> (<a href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrForSegmentation">ConditionalDetrForSegmentation</a>) &#x2014;
Raw outputs of the model.`,name:"outputs"},{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_semantic_segmentation.target_sizes",description:`<strong>target_sizes</strong> (<code>List[Tuple[int, int]]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
A list of tuples (<code>Tuple[int, int]</code>) containing the target size (height, width) of each image in the
batch. If left to None, predictions will not be resized.`,name:"target_sizes"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/feature_extraction_conditional_detr.py#L928",returnDescription:`
<p>A list of length <code>batch_size</code>, where each item is a semantic segmentation map of shape (height, width)
corresponding to the target_sizes entry (if <code>target_sizes</code> is specified). Each entry of each
<code>torch.Tensor</code> correspond to a semantic class id.</p>
`,returnType:`
<p><code>List[torch.Tensor]</code></p>
`}}),Ge=new P({props:{name:"post_process_panoptic_segmentation",anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_panoptic_segmentation",parameters:[{name:"outputs",val:""},{name:"threshold",val:": float = 0.5"},{name:"mask_threshold",val:": float = 0.5"},{name:"overlap_mask_area_threshold",val:": float = 0.8"},{name:"label_ids_to_fuse",val:": typing.Optional[typing.Set[int]] = None"},{name:"target_sizes",val:": typing.Union[typing.List[typing.Tuple[int, int]], NoneType] = None"}],parametersDescription:[{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_panoptic_segmentation.outputs",description:`<strong>outputs</strong> (<a href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrForSegmentation">ConditionalDetrForSegmentation</a>) &#x2014;
The outputs from <a href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrForSegmentation">ConditionalDetrForSegmentation</a>.`,name:"outputs"},{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_panoptic_segmentation.threshold",description:`<strong>threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
The probability score threshold to keep predicted instance masks.`,name:"threshold"},{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_panoptic_segmentation.mask_threshold",description:`<strong>mask_threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
Threshold to use when turning the predicted masks into binary values.`,name:"mask_threshold"},{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_panoptic_segmentation.overlap_mask_area_threshold",description:`<strong>overlap_mask_area_threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.8) &#x2014;
The overlap mask area threshold to merge or discard small disconnected parts within each binary
instance mask.`,name:"overlap_mask_area_threshold"},{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_panoptic_segmentation.label_ids_to_fuse",description:`<strong>label_ids_to_fuse</strong> (<code>Set[int]</code>, <em>optional</em>) &#x2014;
The labels in this state will have all their instances be fused together. For instance we could say
there can only be one sky in an image, but several persons, so the label ID for sky would be in that
set, but not the one for person.`,name:"label_ids_to_fuse"},{anchor:"transformers.ConditionalDetrFeatureExtractor.post_process_panoptic_segmentation.target_sizes",description:`<strong>target_sizes</strong> (<code>List[Tuple]</code>, <em>optional</em>) &#x2014;
List of length (batch_size), where each list item (<code>Tuple[int, int]]</code>) corresponds to the requested
final size (height, width) of each prediction in batch. If left to None, predictions will not be
resized.`,name:"target_sizes"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/feature_extraction_conditional_detr.py#L1064",returnDescription:`
<p>A list of dictionaries, one per image, each dictionary containing two keys:</p>
<ul>
<li><strong>segmentation</strong> \u2014 a tensor of shape <code>(height, width)</code> where each pixel represents a <code>segment_id</code> or
<code>None</code> if no mask if found above <code>threshold</code>. If <code>target_sizes</code> is specified, segmentation is resized to
the corresponding <code>target_sizes</code> entry.</li>
<li><strong>segments_info</strong> \u2014 A dictionary that contains additional information on each segment.<ul>
<li><strong>id</strong> \u2014 an integer representing the <code>segment_id</code>.</li>
<li><strong>label_id</strong> \u2014 An integer representing the label / semantic class id corresponding to <code>segment_id</code>.</li>
<li><strong>was_fused</strong> \u2014 a boolean, <code>True</code> if <code>label_id</code> was in <code>label_ids_to_fuse</code>, <code>False</code> otherwise.
Multiple instances of the same class / label were fused and assigned a single <code>segment_id</code>.</li>
<li><strong>score</strong> \u2014 Prediction score of segment with <code>segment_id</code>.</li>
</ul></li>
</ul>
`,returnType:`
<p><code>List[Dict]</code></p>
`}}),Ze=new ut({}),Je=new P({props:{name:"class transformers.ConditionalDetrModel",anchor:"transformers.ConditionalDetrModel",parameters:[{name:"config",val:": ConditionalDetrConfig"}],parametersDescription:[{anchor:"transformers.ConditionalDetrModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrConfig">ConditionalDetrConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/modeling_conditional_detr.py#L1462"}}),et=new P({props:{name:"forward",anchor:"transformers.ConditionalDetrModel.forward",parameters:[{name:"pixel_values",val:""},{name:"pixel_mask",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.ConditionalDetrModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),fe=new nn({props:{$$slots:{default:[Is]},$$scope:{ctx:E}}}),ue=new an({props:{anchor:"transformers.ConditionalDetrModel.forward.example",$$slots:{default:[Ls]},$$scope:{ctx:E}}}),tt=new ut({}),ot=new P({props:{name:"class transformers.ConditionalDetrForObjectDetection",anchor:"transformers.ConditionalDetrForObjectDetection",parameters:[{name:"config",val:": ConditionalDetrConfig"}],parametersDescription:[{anchor:"transformers.ConditionalDetrForObjectDetection.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrConfig">ConditionalDetrConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/modeling_conditional_detr.py#L1633"}}),st=new P({props:{name:"forward",anchor:"transformers.ConditionalDetrForObjectDetection.forward",parameters:[{name:"pixel_values",val:""},{name:"pixel_mask",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.ConditionalDetrForObjectDetection.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
  href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrFeatureExtractor.post_process_object_detection"
>post_process_object_detection()</a> to
retrieve the unnormalized bounding boxes.</li>
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
`}}),_e=new nn({props:{$$slots:{default:[Ss]},$$scope:{ctx:E}}}),be=new an({props:{anchor:"transformers.ConditionalDetrForObjectDetection.forward.example",$$slots:{default:[Ns]},$$scope:{ctx:E}}}),it=new ut({}),dt=new P({props:{name:"class transformers.ConditionalDetrForSegmentation",anchor:"transformers.ConditionalDetrForSegmentation",parameters:[{name:"config",val:": ConditionalDetrConfig"}],parametersDescription:[{anchor:"transformers.ConditionalDetrForSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrConfig">ConditionalDetrConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/conditional_detr/modeling_conditional_detr.py#L1821"}}),ht=new P({props:{name:"forward",anchor:"transformers.ConditionalDetrForSegmentation.forward",parameters:[{name:"pixel_values",val:""},{name:"pixel_mask",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.ConditionalDetrForSegmentation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
  href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrFeatureExtractor.post_process_object_detection"
>post_process_object_detection()</a> to
retrieve the unnormalized bounding boxes.</li>
<li><strong>pred_masks</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_queries, height/4, width/4)</code>) \u2014 Segmentation masks logits for all queries. See also
<a
  href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrFeatureExtractor.post_process_semantic_segmentation"
>post_process_semantic_segmentation()</a> or
<a
  href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrFeatureExtractor.post_process_instance_segmentation"
>post_process_instance_segmentation()</a>
<a
  href="/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrFeatureExtractor.post_process_panoptic_segmentation"
>post_process_panoptic_segmentation()</a> to evaluate semantic, instance and
panoptic segmentation masks respectively.</li>
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
`}}),xe=new nn({props:{$$slots:{default:[Rs]},$$scope:{ctx:E}}}),we=new an({props:{anchor:"transformers.ConditionalDetrForSegmentation.forward.example",$$slots:{default:[Us]},$$scope:{ctx:E}}}),{c(){c=n("meta"),v=m(),u=n("h1"),p=n("a"),b=n("span"),x(d.$$.fragment),g=m(),q=n("span"),dn=s("Conditional DETR"),fo=m(),W=n("h2"),ee=n("a"),Nt=n("span"),x($e.$$.fragment),ln=m(),Rt=n("span"),cn=s("Overview"),uo=m(),te=n("p"),mn=s("The Conditional DETR model was proposed in "),Ee=n("a"),hn=s("Conditional DETR for Fast Training Convergence"),pn=s(" by Depu Meng, Xiaokang Chen, Zejia Fan, Gang Zeng, Houqiang Li, Yuhui Yuan, Lei Sun, Jingdong Wang. Conditional DETR presents a conditional cross-attention mechanism for fast DETR training. Conditional DETR converges 6.7\xD7 to 10\xD7 faster than DETR."),go=m(),gt=n("p"),fn=s("The abstract from the paper is the following:"),_o=m(),_t=n("p"),je=n("em"),un=s("The recently-developed DETR approach applies the transformer encoder and decoder architecture to object detection and achieves promising performance. In this paper, we handle the critical issue, slow training convergence, and present a conditional cross-attention mechanism for fast DETR training. Our approach is motivated by that the cross-attention in DETR relies highly on the content embeddings for localizing the four extremities and predicting the box, which increases the need for high-quality content embeddings and thus the training difficulty. Our approach, named conditional DETR, learns a conditional spatial query from the decoder embedding for decoder multi-head cross-attention. The benefit is that through the conditional spatial query, each cross-attention head is able to attend to a band containing a distinct region, e.g., one object extremity or a region inside the object box. This narrows down the spatial range for localizing the distinct regions for object classification and box regression, thus relaxing the dependence on the content embeddings and easing the training. Empirical results show that conditional DETR converges 6.7\xD7 faster for the backbones R50 and R101 and 10\xD7 faster for stronger backbones DC5-R50 and DC5-R101. Code is available at "),Fe=n("a"),gn=s("https://github.com/Atten4Vis/ConditionalDETR"),_n=s("."),bo=m(),oe=n("img"),vo=m(),ne=n("small"),bn=s("Conditional DETR shows much faster convergence compared to the original DETR. Taken from the "),bt=n("a"),vn=s("original paper"),xn=s("."),xo=m(),L=n("p"),wn=s("This model was contributed by "),ke=n("a"),Cn=s("DepuMeng"),Dn=s(". The original code can be found "),ze=n("a"),yn=s("here"),Tn=s("."),wo=m(),H=n("h2"),ae=n("a"),Ut=n("span"),x(qe.$$.fragment),$n=m(),Wt=n("span"),En=s("ConditionalDetrConfig"),Co=m(),O=n("div"),x(Pe.$$.fragment),jn=m(),V=n("p"),Fn=s("This is the configuration class to store the configuration of a "),vt=n("a"),kn=s("ConditionalDetrModel"),zn=s(`. It is used to instantiate
a Conditional DETR model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Conditional DETR
`),Oe=n("a"),qn=s("microsoft/conditional-detr-resnet-50"),Pn=s(" architecture."),On=m(),B=n("p"),An=s("Configuration objects inherit from "),xt=n("a"),Mn=s("PretrainedConfig"),In=s(` and can be used to control the model outputs. Read the
documentation from `),wt=n("a"),Ln=s("PretrainedConfig"),Sn=s(" for more information."),Nn=m(),x(re.$$.fragment),Do=m(),G=n("h2"),se=n("a"),Ht=n("span"),x(Ae.$$.fragment),Rn=m(),Vt=n("span"),Un=s("ConditionalDetrFeatureExtractor"),yo=m(),$=n("div"),x(Me.$$.fragment),Wn=m(),Bt=n("p"),Hn=s("Constructs a Conditional DETR feature extractor."),Vn=m(),Ie=n("p"),Bn=s("This feature extractor inherits from "),Ct=n("a"),Gn=s("FeatureExtractionMixin"),Yn=s(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Zn=m(),S=n("div"),x(Le.$$.fragment),Jn=m(),Gt=n("p"),Xn=s(`Main method to prepare for the model one or several image(s) and optional annotations. Images are by default
padded up to the largest image in a batch, and a pixel mask is created that indicates which pixels are
real/which are padding.`),Kn=m(),x(ie.$$.fragment),Qn=m(),de=n("div"),x(Se.$$.fragment),ea=m(),Ne=n("p"),ta=s("Pad images up to the largest image in a batch and create a corresponding "),Yt=n("code"),oa=s("pixel_mask"),na=s("."),aa=m(),le=n("div"),x(Re.$$.fragment),ra=m(),Ue=n("p"),sa=s("Converts the output of "),Dt=n("a"),ia=s("ConditionalDetrForObjectDetection"),da=s(` into the format expected by the COCO api. Only
supports PyTorch.`),la=m(),ce=n("div"),x(We.$$.fragment),ca=m(),He=n("p"),ma=s("Converts the output of "),yt=n("a"),ha=s("ConditionalDetrForSegmentation"),pa=s(` into instance segmentation predictions. Only supports
PyTorch.`),fa=m(),me=n("div"),x(Ve.$$.fragment),ua=m(),Be=n("p"),ga=s("Converts the output of "),Tt=n("a"),_a=s("ConditionalDetrForSegmentation"),ba=s(` into semantic segmentation maps. Only supports
PyTorch.`),va=m(),he=n("div"),x(Ge.$$.fragment),xa=m(),Ye=n("p"),wa=s("Converts the output of "),$t=n("a"),Ca=s("ConditionalDetrForSegmentation"),Da=s(` into image panoptic segmentation predictions. Only
supports PyTorch.`),To=m(),Y=n("h2"),pe=n("a"),Zt=n("span"),x(Ze.$$.fragment),ya=m(),Jt=n("span"),Ta=s("ConditionalDetrModel"),$o=m(),F=n("div"),x(Je.$$.fragment),$a=m(),Xt=n("p"),Ea=s(`The bare Conditional DETR Model (consisting of a backbone and encoder-decoder Transformer) outputting raw
hidden-states without any specific head on top.`),ja=m(),Xe=n("p"),Fa=s("This model inherits from "),Et=n("a"),ka=s("PreTrainedModel"),za=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qa=m(),Ke=n("p"),Pa=s("This model is also a PyTorch "),Qe=n("a"),Oa=s("torch.nn.Module"),Aa=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ma=m(),A=n("div"),x(et.$$.fragment),Ia=m(),Z=n("p"),La=s("The "),jt=n("a"),Sa=s("ConditionalDetrModel"),Na=s(" forward method, overrides the "),Kt=n("code"),Ra=s("__call__"),Ua=s(" special method."),Wa=m(),x(fe.$$.fragment),Ha=m(),x(ue.$$.fragment),Eo=m(),J=n("h2"),ge=n("a"),Qt=n("span"),x(tt.$$.fragment),Va=m(),eo=n("span"),Ba=s("ConditionalDetrForObjectDetection"),jo=m(),k=n("div"),x(ot.$$.fragment),Ga=m(),to=n("p"),Ya=s(`CONDITIONAL_DETR Model (consisting of a backbone and encoder-decoder Transformer) with object detection heads on
top, for tasks such as COCO detection.`),Za=m(),nt=n("p"),Ja=s("This model inherits from "),Ft=n("a"),Xa=s("PreTrainedModel"),Ka=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qa=m(),at=n("p"),er=s("This model is also a PyTorch "),rt=n("a"),tr=s("torch.nn.Module"),or=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nr=m(),M=n("div"),x(st.$$.fragment),ar=m(),X=n("p"),rr=s("The "),kt=n("a"),sr=s("ConditionalDetrForObjectDetection"),ir=s(" forward method, overrides the "),oo=n("code"),dr=s("__call__"),lr=s(" special method."),cr=m(),x(_e.$$.fragment),mr=m(),x(be.$$.fragment),Fo=m(),K=n("h2"),ve=n("a"),no=n("span"),x(it.$$.fragment),hr=m(),ao=n("span"),pr=s("ConditionalDetrForSegmentation"),ko=m(),z=n("div"),x(dt.$$.fragment),fr=m(),ro=n("p"),ur=s(`CONDITIONAL_DETR Model (consisting of a backbone and encoder-decoder Transformer) with a segmentation head on top,
for tasks such as COCO panoptic.`),gr=m(),lt=n("p"),_r=s("This model inherits from "),zt=n("a"),br=s("PreTrainedModel"),vr=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xr=m(),ct=n("p"),wr=s("This model is also a PyTorch "),mt=n("a"),Cr=s("torch.nn.Module"),Dr=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yr=m(),I=n("div"),x(ht.$$.fragment),Tr=m(),Q=n("p"),$r=s("The "),qt=n("a"),Er=s("ConditionalDetrForSegmentation"),jr=s(" forward method, overrides the "),so=n("code"),Fr=s("__call__"),kr=s(" special method."),zr=m(),x(xe.$$.fragment),qr=m(),x(we.$$.fragment),this.h()},l(t){const f=qs('[data-svelte="svelte-1phssyn"]',document.head);c=a(f,"META",{name:!0,content:!0}),f.forEach(o),v=h(t),u=a(t,"H1",{class:!0});var pt=r(u);p=a(pt,"A",{id:!0,class:!0,href:!0});var io=r(p);b=a(io,"SPAN",{});var lo=r(b);w(d.$$.fragment,lo),lo.forEach(o),io.forEach(o),g=h(pt),q=a(pt,"SPAN",{});var co=r(q);dn=i(co,"Conditional DETR"),co.forEach(o),pt.forEach(o),fo=h(t),W=a(t,"H2",{class:!0});var ft=r(W);ee=a(ft,"A",{id:!0,class:!0,href:!0});var mo=r(ee);Nt=a(mo,"SPAN",{});var ho=r(Nt);w($e.$$.fragment,ho),ho.forEach(o),mo.forEach(o),ln=h(ft),Rt=a(ft,"SPAN",{});var po=r(Rt);cn=i(po,"Overview"),po.forEach(o),ft.forEach(o),uo=h(t),te=a(t,"P",{});var qo=r(te);mn=i(qo,"The Conditional DETR model was proposed in "),Ee=a(qo,"A",{href:!0,rel:!0});var Or=r(Ee);hn=i(Or,"Conditional DETR for Fast Training Convergence"),Or.forEach(o),pn=i(qo," by Depu Meng, Xiaokang Chen, Zejia Fan, Gang Zeng, Houqiang Li, Yuhui Yuan, Lei Sun, Jingdong Wang. Conditional DETR presents a conditional cross-attention mechanism for fast DETR training. Conditional DETR converges 6.7\xD7 to 10\xD7 faster than DETR."),qo.forEach(o),go=h(t),gt=a(t,"P",{});var Ar=r(gt);fn=i(Ar,"The abstract from the paper is the following:"),Ar.forEach(o),_o=h(t),_t=a(t,"P",{});var Mr=r(_t);je=a(Mr,"EM",{});var Po=r(je);un=i(Po,"The recently-developed DETR approach applies the transformer encoder and decoder architecture to object detection and achieves promising performance. In this paper, we handle the critical issue, slow training convergence, and present a conditional cross-attention mechanism for fast DETR training. Our approach is motivated by that the cross-attention in DETR relies highly on the content embeddings for localizing the four extremities and predicting the box, which increases the need for high-quality content embeddings and thus the training difficulty. Our approach, named conditional DETR, learns a conditional spatial query from the decoder embedding for decoder multi-head cross-attention. The benefit is that through the conditional spatial query, each cross-attention head is able to attend to a band containing a distinct region, e.g., one object extremity or a region inside the object box. This narrows down the spatial range for localizing the distinct regions for object classification and box regression, thus relaxing the dependence on the content embeddings and easing the training. Empirical results show that conditional DETR converges 6.7\xD7 faster for the backbones R50 and R101 and 10\xD7 faster for stronger backbones DC5-R50 and DC5-R101. Code is available at "),Fe=a(Po,"A",{href:!0,rel:!0});var Ir=r(Fe);gn=i(Ir,"https://github.com/Atten4Vis/ConditionalDETR"),Ir.forEach(o),_n=i(Po,"."),Po.forEach(o),Mr.forEach(o),bo=h(t),oe=a(t,"IMG",{src:!0,alt:!0,width:!0}),vo=h(t),ne=a(t,"SMALL",{});var Oo=r(ne);bn=i(Oo,"Conditional DETR shows much faster convergence compared to the original DETR. Taken from the "),bt=a(Oo,"A",{href:!0});var Lr=r(bt);vn=i(Lr,"original paper"),Lr.forEach(o),xn=i(Oo,"."),Oo.forEach(o),xo=h(t),L=a(t,"P",{});var Pt=r(L);wn=i(Pt,"This model was contributed by "),ke=a(Pt,"A",{href:!0,rel:!0});var Sr=r(ke);Cn=i(Sr,"DepuMeng"),Sr.forEach(o),Dn=i(Pt,". The original code can be found "),ze=a(Pt,"A",{href:!0,rel:!0});var Nr=r(ze);yn=i(Nr,"here"),Nr.forEach(o),Tn=i(Pt,"."),Pt.forEach(o),wo=h(t),H=a(t,"H2",{class:!0});var Ao=r(H);ae=a(Ao,"A",{id:!0,class:!0,href:!0});var Rr=r(ae);Ut=a(Rr,"SPAN",{});var Ur=r(Ut);w(qe.$$.fragment,Ur),Ur.forEach(o),Rr.forEach(o),$n=h(Ao),Wt=a(Ao,"SPAN",{});var Wr=r(Wt);En=i(Wr,"ConditionalDetrConfig"),Wr.forEach(o),Ao.forEach(o),Co=h(t),O=a(t,"DIV",{class:!0});var Ce=r(O);w(Pe.$$.fragment,Ce),jn=h(Ce),V=a(Ce,"P",{});var Ot=r(V);Fn=i(Ot,"This is the configuration class to store the configuration of a "),vt=a(Ot,"A",{href:!0});var Hr=r(vt);kn=i(Hr,"ConditionalDetrModel"),Hr.forEach(o),zn=i(Ot,`. It is used to instantiate
a Conditional DETR model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Conditional DETR
`),Oe=a(Ot,"A",{href:!0,rel:!0});var Vr=r(Oe);qn=i(Vr,"microsoft/conditional-detr-resnet-50"),Vr.forEach(o),Pn=i(Ot," architecture."),Ot.forEach(o),On=h(Ce),B=a(Ce,"P",{});var At=r(B);An=i(At,"Configuration objects inherit from "),xt=a(At,"A",{href:!0});var Br=r(xt);Mn=i(Br,"PretrainedConfig"),Br.forEach(o),In=i(At,` and can be used to control the model outputs. Read the
documentation from `),wt=a(At,"A",{href:!0});var Gr=r(wt);Ln=i(Gr,"PretrainedConfig"),Gr.forEach(o),Sn=i(At," for more information."),At.forEach(o),Nn=h(Ce),w(re.$$.fragment,Ce),Ce.forEach(o),Do=h(t),G=a(t,"H2",{class:!0});var Mo=r(G);se=a(Mo,"A",{id:!0,class:!0,href:!0});var Yr=r(se);Ht=a(Yr,"SPAN",{});var Zr=r(Ht);w(Ae.$$.fragment,Zr),Zr.forEach(o),Yr.forEach(o),Rn=h(Mo),Vt=a(Mo,"SPAN",{});var Jr=r(Vt);Un=i(Jr,"ConditionalDetrFeatureExtractor"),Jr.forEach(o),Mo.forEach(o),yo=h(t),$=a(t,"DIV",{class:!0});var j=r($);w(Me.$$.fragment,j),Wn=h(j),Bt=a(j,"P",{});var Xr=r(Bt);Hn=i(Xr,"Constructs a Conditional DETR feature extractor."),Xr.forEach(o),Vn=h(j),Ie=a(j,"P",{});var Io=r(Ie);Bn=i(Io,"This feature extractor inherits from "),Ct=a(Io,"A",{href:!0});var Kr=r(Ct);Gn=i(Kr,"FeatureExtractionMixin"),Kr.forEach(o),Yn=i(Io,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Io.forEach(o),Zn=h(j),S=a(j,"DIV",{class:!0});var Mt=r(S);w(Le.$$.fragment,Mt),Jn=h(Mt),Gt=a(Mt,"P",{});var Qr=r(Gt);Xn=i(Qr,`Main method to prepare for the model one or several image(s) and optional annotations. Images are by default
padded up to the largest image in a batch, and a pixel mask is created that indicates which pixels are
real/which are padding.`),Qr.forEach(o),Kn=h(Mt),w(ie.$$.fragment,Mt),Mt.forEach(o),Qn=h(j),de=a(j,"DIV",{class:!0});var Lo=r(de);w(Se.$$.fragment,Lo),ea=h(Lo),Ne=a(Lo,"P",{});var So=r(Ne);ta=i(So,"Pad images up to the largest image in a batch and create a corresponding "),Yt=a(So,"CODE",{});var es=r(Yt);oa=i(es,"pixel_mask"),es.forEach(o),na=i(So,"."),So.forEach(o),Lo.forEach(o),aa=h(j),le=a(j,"DIV",{class:!0});var No=r(le);w(Re.$$.fragment,No),ra=h(No),Ue=a(No,"P",{});var Ro=r(Ue);sa=i(Ro,"Converts the output of "),Dt=a(Ro,"A",{href:!0});var ts=r(Dt);ia=i(ts,"ConditionalDetrForObjectDetection"),ts.forEach(o),da=i(Ro,` into the format expected by the COCO api. Only
supports PyTorch.`),Ro.forEach(o),No.forEach(o),la=h(j),ce=a(j,"DIV",{class:!0});var Uo=r(ce);w(We.$$.fragment,Uo),ca=h(Uo),He=a(Uo,"P",{});var Wo=r(He);ma=i(Wo,"Converts the output of "),yt=a(Wo,"A",{href:!0});var os=r(yt);ha=i(os,"ConditionalDetrForSegmentation"),os.forEach(o),pa=i(Wo,` into instance segmentation predictions. Only supports
PyTorch.`),Wo.forEach(o),Uo.forEach(o),fa=h(j),me=a(j,"DIV",{class:!0});var Ho=r(me);w(Ve.$$.fragment,Ho),ua=h(Ho),Be=a(Ho,"P",{});var Vo=r(Be);ga=i(Vo,"Converts the output of "),Tt=a(Vo,"A",{href:!0});var ns=r(Tt);_a=i(ns,"ConditionalDetrForSegmentation"),ns.forEach(o),ba=i(Vo,` into semantic segmentation maps. Only supports
PyTorch.`),Vo.forEach(o),Ho.forEach(o),va=h(j),he=a(j,"DIV",{class:!0});var Bo=r(he);w(Ge.$$.fragment,Bo),xa=h(Bo),Ye=a(Bo,"P",{});var Go=r(Ye);wa=i(Go,"Converts the output of "),$t=a(Go,"A",{href:!0});var as=r($t);Ca=i(as,"ConditionalDetrForSegmentation"),as.forEach(o),Da=i(Go,` into image panoptic segmentation predictions. Only
supports PyTorch.`),Go.forEach(o),Bo.forEach(o),j.forEach(o),To=h(t),Y=a(t,"H2",{class:!0});var Yo=r(Y);pe=a(Yo,"A",{id:!0,class:!0,href:!0});var rs=r(pe);Zt=a(rs,"SPAN",{});var ss=r(Zt);w(Ze.$$.fragment,ss),ss.forEach(o),rs.forEach(o),ya=h(Yo),Jt=a(Yo,"SPAN",{});var is=r(Jt);Ta=i(is,"ConditionalDetrModel"),is.forEach(o),Yo.forEach(o),$o=h(t),F=a(t,"DIV",{class:!0});var N=r(F);w(Je.$$.fragment,N),$a=h(N),Xt=a(N,"P",{});var ds=r(Xt);Ea=i(ds,`The bare Conditional DETR Model (consisting of a backbone and encoder-decoder Transformer) outputting raw
hidden-states without any specific head on top.`),ds.forEach(o),ja=h(N),Xe=a(N,"P",{});var Zo=r(Xe);Fa=i(Zo,"This model inherits from "),Et=a(Zo,"A",{href:!0});var ls=r(Et);ka=i(ls,"PreTrainedModel"),ls.forEach(o),za=i(Zo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zo.forEach(o),qa=h(N),Ke=a(N,"P",{});var Jo=r(Ke);Pa=i(Jo,"This model is also a PyTorch "),Qe=a(Jo,"A",{href:!0,rel:!0});var cs=r(Qe);Oa=i(cs,"torch.nn.Module"),cs.forEach(o),Aa=i(Jo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jo.forEach(o),Ma=h(N),A=a(N,"DIV",{class:!0});var De=r(A);w(et.$$.fragment,De),Ia=h(De),Z=a(De,"P",{});var It=r(Z);La=i(It,"The "),jt=a(It,"A",{href:!0});var ms=r(jt);Sa=i(ms,"ConditionalDetrModel"),ms.forEach(o),Na=i(It," forward method, overrides the "),Kt=a(It,"CODE",{});var hs=r(Kt);Ra=i(hs,"__call__"),hs.forEach(o),Ua=i(It," special method."),It.forEach(o),Wa=h(De),w(fe.$$.fragment,De),Ha=h(De),w(ue.$$.fragment,De),De.forEach(o),N.forEach(o),Eo=h(t),J=a(t,"H2",{class:!0});var Xo=r(J);ge=a(Xo,"A",{id:!0,class:!0,href:!0});var ps=r(ge);Qt=a(ps,"SPAN",{});var fs=r(Qt);w(tt.$$.fragment,fs),fs.forEach(o),ps.forEach(o),Va=h(Xo),eo=a(Xo,"SPAN",{});var us=r(eo);Ba=i(us,"ConditionalDetrForObjectDetection"),us.forEach(o),Xo.forEach(o),jo=h(t),k=a(t,"DIV",{class:!0});var R=r(k);w(ot.$$.fragment,R),Ga=h(R),to=a(R,"P",{});var gs=r(to);Ya=i(gs,`CONDITIONAL_DETR Model (consisting of a backbone and encoder-decoder Transformer) with object detection heads on
top, for tasks such as COCO detection.`),gs.forEach(o),Za=h(R),nt=a(R,"P",{});var Ko=r(nt);Ja=i(Ko,"This model inherits from "),Ft=a(Ko,"A",{href:!0});var _s=r(Ft);Xa=i(_s,"PreTrainedModel"),_s.forEach(o),Ka=i(Ko,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ko.forEach(o),Qa=h(R),at=a(R,"P",{});var Qo=r(at);er=i(Qo,"This model is also a PyTorch "),rt=a(Qo,"A",{href:!0,rel:!0});var bs=r(rt);tr=i(bs,"torch.nn.Module"),bs.forEach(o),or=i(Qo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qo.forEach(o),nr=h(R),M=a(R,"DIV",{class:!0});var ye=r(M);w(st.$$.fragment,ye),ar=h(ye),X=a(ye,"P",{});var Lt=r(X);rr=i(Lt,"The "),kt=a(Lt,"A",{href:!0});var vs=r(kt);sr=i(vs,"ConditionalDetrForObjectDetection"),vs.forEach(o),ir=i(Lt," forward method, overrides the "),oo=a(Lt,"CODE",{});var xs=r(oo);dr=i(xs,"__call__"),xs.forEach(o),lr=i(Lt," special method."),Lt.forEach(o),cr=h(ye),w(_e.$$.fragment,ye),mr=h(ye),w(be.$$.fragment,ye),ye.forEach(o),R.forEach(o),Fo=h(t),K=a(t,"H2",{class:!0});var en=r(K);ve=a(en,"A",{id:!0,class:!0,href:!0});var ws=r(ve);no=a(ws,"SPAN",{});var Cs=r(no);w(it.$$.fragment,Cs),Cs.forEach(o),ws.forEach(o),hr=h(en),ao=a(en,"SPAN",{});var Ds=r(ao);pr=i(Ds,"ConditionalDetrForSegmentation"),Ds.forEach(o),en.forEach(o),ko=h(t),z=a(t,"DIV",{class:!0});var U=r(z);w(dt.$$.fragment,U),fr=h(U),ro=a(U,"P",{});var ys=r(ro);ur=i(ys,`CONDITIONAL_DETR Model (consisting of a backbone and encoder-decoder Transformer) with a segmentation head on top,
for tasks such as COCO panoptic.`),ys.forEach(o),gr=h(U),lt=a(U,"P",{});var tn=r(lt);_r=i(tn,"This model inherits from "),zt=a(tn,"A",{href:!0});var Ts=r(zt);br=i(Ts,"PreTrainedModel"),Ts.forEach(o),vr=i(tn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tn.forEach(o),xr=h(U),ct=a(U,"P",{});var on=r(ct);wr=i(on,"This model is also a PyTorch "),mt=a(on,"A",{href:!0,rel:!0});var $s=r(mt);Cr=i($s,"torch.nn.Module"),$s.forEach(o),Dr=i(on,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),on.forEach(o),yr=h(U),I=a(U,"DIV",{class:!0});var Te=r(I);w(ht.$$.fragment,Te),Tr=h(Te),Q=a(Te,"P",{});var St=r(Q);$r=i(St,"The "),qt=a(St,"A",{href:!0});var Es=r(qt);Er=i(Es,"ConditionalDetrForSegmentation"),Es.forEach(o),jr=i(St," forward method, overrides the "),so=a(St,"CODE",{});var js=r(so);Fr=i(js,"__call__"),js.forEach(o),kr=i(St," special method."),St.forEach(o),zr=h(Te),w(xe.$$.fragment,Te),qr=h(Te),w(we.$$.fragment,Te),Te.forEach(o),U.forEach(o),this.h()},h(){l(c,"name","hf:doc:metadata"),l(c,"content",JSON.stringify(Hs)),l(p,"id","conditional-detr"),l(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(p,"href","#conditional-detr"),l(u,"class","relative group"),l(ee,"id","overview"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#overview"),l(W,"class","relative group"),l(Ee,"href","https://arxiv.org/abs/2108.06152"),l(Ee,"rel","nofollow"),l(Fe,"href","https://github.com/Atten4Vis/ConditionalDETR"),l(Fe,"rel","nofollow"),Ps(oe.src,Pr="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/model_doc/conditional_detr_curve.jpg")||l(oe,"src",Pr),l(oe,"alt","drawing"),l(oe,"width","600"),l(bt,"href","https://arxiv.org/abs/2108.06152"),l(ke,"href","https://huggingface.co/DepuMeng"),l(ke,"rel","nofollow"),l(ze,"href","https://github.com/Atten4Vis/ConditionalDETR"),l(ze,"rel","nofollow"),l(ae,"id","transformers.ConditionalDetrConfig"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.ConditionalDetrConfig"),l(H,"class","relative group"),l(vt,"href","/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrModel"),l(Oe,"href","https://huggingface.co/microsoft/conditional-detr-resnet-50"),l(Oe,"rel","nofollow"),l(xt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(wt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(se,"id","transformers.ConditionalDetrFeatureExtractor"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#transformers.ConditionalDetrFeatureExtractor"),l(G,"class","relative group"),l(Ct,"href","/docs/transformers/main/en/internal/image_processing_utils#transformers.FeatureExtractionMixin"),l(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Dt,"href","/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrForObjectDetection"),l(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(yt,"href","/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrForSegmentation"),l(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Tt,"href","/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrForSegmentation"),l(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l($t,"href","/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrForSegmentation"),l(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(pe,"id","transformers.ConditionalDetrModel"),l(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(pe,"href","#transformers.ConditionalDetrModel"),l(Y,"class","relative group"),l(Et,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Qe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Qe,"rel","nofollow"),l(jt,"href","/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrModel"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ge,"id","transformers.ConditionalDetrForObjectDetection"),l(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ge,"href","#transformers.ConditionalDetrForObjectDetection"),l(J,"class","relative group"),l(Ft,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(rt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(rt,"rel","nofollow"),l(kt,"href","/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrForObjectDetection"),l(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ve,"id","transformers.ConditionalDetrForSegmentation"),l(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ve,"href","#transformers.ConditionalDetrForSegmentation"),l(K,"class","relative group"),l(zt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(mt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(mt,"rel","nofollow"),l(qt,"href","/docs/transformers/main/en/model_doc/conditional_detr#transformers.ConditionalDetrForSegmentation"),l(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,c),_(t,v,f),_(t,u,f),e(u,p),e(p,b),C(d,b,null),e(u,g),e(u,q),e(q,dn),_(t,fo,f),_(t,W,f),e(W,ee),e(ee,Nt),C($e,Nt,null),e(W,ln),e(W,Rt),e(Rt,cn),_(t,uo,f),_(t,te,f),e(te,mn),e(te,Ee),e(Ee,hn),e(te,pn),_(t,go,f),_(t,gt,f),e(gt,fn),_(t,_o,f),_(t,_t,f),e(_t,je),e(je,un),e(je,Fe),e(Fe,gn),e(je,_n),_(t,bo,f),_(t,oe,f),_(t,vo,f),_(t,ne,f),e(ne,bn),e(ne,bt),e(bt,vn),e(ne,xn),_(t,xo,f),_(t,L,f),e(L,wn),e(L,ke),e(ke,Cn),e(L,Dn),e(L,ze),e(ze,yn),e(L,Tn),_(t,wo,f),_(t,H,f),e(H,ae),e(ae,Ut),C(qe,Ut,null),e(H,$n),e(H,Wt),e(Wt,En),_(t,Co,f),_(t,O,f),C(Pe,O,null),e(O,jn),e(O,V),e(V,Fn),e(V,vt),e(vt,kn),e(V,zn),e(V,Oe),e(Oe,qn),e(V,Pn),e(O,On),e(O,B),e(B,An),e(B,xt),e(xt,Mn),e(B,In),e(B,wt),e(wt,Ln),e(B,Sn),e(O,Nn),C(re,O,null),_(t,Do,f),_(t,G,f),e(G,se),e(se,Ht),C(Ae,Ht,null),e(G,Rn),e(G,Vt),e(Vt,Un),_(t,yo,f),_(t,$,f),C(Me,$,null),e($,Wn),e($,Bt),e(Bt,Hn),e($,Vn),e($,Ie),e(Ie,Bn),e(Ie,Ct),e(Ct,Gn),e(Ie,Yn),e($,Zn),e($,S),C(Le,S,null),e(S,Jn),e(S,Gt),e(Gt,Xn),e(S,Kn),C(ie,S,null),e($,Qn),e($,de),C(Se,de,null),e(de,ea),e(de,Ne),e(Ne,ta),e(Ne,Yt),e(Yt,oa),e(Ne,na),e($,aa),e($,le),C(Re,le,null),e(le,ra),e(le,Ue),e(Ue,sa),e(Ue,Dt),e(Dt,ia),e(Ue,da),e($,la),e($,ce),C(We,ce,null),e(ce,ca),e(ce,He),e(He,ma),e(He,yt),e(yt,ha),e(He,pa),e($,fa),e($,me),C(Ve,me,null),e(me,ua),e(me,Be),e(Be,ga),e(Be,Tt),e(Tt,_a),e(Be,ba),e($,va),e($,he),C(Ge,he,null),e(he,xa),e(he,Ye),e(Ye,wa),e(Ye,$t),e($t,Ca),e(Ye,Da),_(t,To,f),_(t,Y,f),e(Y,pe),e(pe,Zt),C(Ze,Zt,null),e(Y,ya),e(Y,Jt),e(Jt,Ta),_(t,$o,f),_(t,F,f),C(Je,F,null),e(F,$a),e(F,Xt),e(Xt,Ea),e(F,ja),e(F,Xe),e(Xe,Fa),e(Xe,Et),e(Et,ka),e(Xe,za),e(F,qa),e(F,Ke),e(Ke,Pa),e(Ke,Qe),e(Qe,Oa),e(Ke,Aa),e(F,Ma),e(F,A),C(et,A,null),e(A,Ia),e(A,Z),e(Z,La),e(Z,jt),e(jt,Sa),e(Z,Na),e(Z,Kt),e(Kt,Ra),e(Z,Ua),e(A,Wa),C(fe,A,null),e(A,Ha),C(ue,A,null),_(t,Eo,f),_(t,J,f),e(J,ge),e(ge,Qt),C(tt,Qt,null),e(J,Va),e(J,eo),e(eo,Ba),_(t,jo,f),_(t,k,f),C(ot,k,null),e(k,Ga),e(k,to),e(to,Ya),e(k,Za),e(k,nt),e(nt,Ja),e(nt,Ft),e(Ft,Xa),e(nt,Ka),e(k,Qa),e(k,at),e(at,er),e(at,rt),e(rt,tr),e(at,or),e(k,nr),e(k,M),C(st,M,null),e(M,ar),e(M,X),e(X,rr),e(X,kt),e(kt,sr),e(X,ir),e(X,oo),e(oo,dr),e(X,lr),e(M,cr),C(_e,M,null),e(M,mr),C(be,M,null),_(t,Fo,f),_(t,K,f),e(K,ve),e(ve,no),C(it,no,null),e(K,hr),e(K,ao),e(ao,pr),_(t,ko,f),_(t,z,f),C(dt,z,null),e(z,fr),e(z,ro),e(ro,ur),e(z,gr),e(z,lt),e(lt,_r),e(lt,zt),e(zt,br),e(lt,vr),e(z,xr),e(z,ct),e(ct,wr),e(ct,mt),e(mt,Cr),e(ct,Dr),e(z,yr),e(z,I),C(ht,I,null),e(I,Tr),e(I,Q),e(Q,$r),e(Q,qt),e(qt,Er),e(Q,jr),e(Q,so),e(so,Fr),e(Q,kr),e(I,zr),C(xe,I,null),e(I,qr),C(we,I,null),zo=!0},p(t,[f]){const pt={};f&2&&(pt.$$scope={dirty:f,ctx:t}),re.$set(pt);const io={};f&2&&(io.$$scope={dirty:f,ctx:t}),ie.$set(io);const lo={};f&2&&(lo.$$scope={dirty:f,ctx:t}),fe.$set(lo);const co={};f&2&&(co.$$scope={dirty:f,ctx:t}),ue.$set(co);const ft={};f&2&&(ft.$$scope={dirty:f,ctx:t}),_e.$set(ft);const mo={};f&2&&(mo.$$scope={dirty:f,ctx:t}),be.$set(mo);const ho={};f&2&&(ho.$$scope={dirty:f,ctx:t}),xe.$set(ho);const po={};f&2&&(po.$$scope={dirty:f,ctx:t}),we.$set(po)},i(t){zo||(D(d.$$.fragment,t),D($e.$$.fragment,t),D(qe.$$.fragment,t),D(Pe.$$.fragment,t),D(re.$$.fragment,t),D(Ae.$$.fragment,t),D(Me.$$.fragment,t),D(Le.$$.fragment,t),D(ie.$$.fragment,t),D(Se.$$.fragment,t),D(Re.$$.fragment,t),D(We.$$.fragment,t),D(Ve.$$.fragment,t),D(Ge.$$.fragment,t),D(Ze.$$.fragment,t),D(Je.$$.fragment,t),D(et.$$.fragment,t),D(fe.$$.fragment,t),D(ue.$$.fragment,t),D(tt.$$.fragment,t),D(ot.$$.fragment,t),D(st.$$.fragment,t),D(_e.$$.fragment,t),D(be.$$.fragment,t),D(it.$$.fragment,t),D(dt.$$.fragment,t),D(ht.$$.fragment,t),D(xe.$$.fragment,t),D(we.$$.fragment,t),zo=!0)},o(t){y(d.$$.fragment,t),y($e.$$.fragment,t),y(qe.$$.fragment,t),y(Pe.$$.fragment,t),y(re.$$.fragment,t),y(Ae.$$.fragment,t),y(Me.$$.fragment,t),y(Le.$$.fragment,t),y(ie.$$.fragment,t),y(Se.$$.fragment,t),y(Re.$$.fragment,t),y(We.$$.fragment,t),y(Ve.$$.fragment,t),y(Ge.$$.fragment,t),y(Ze.$$.fragment,t),y(Je.$$.fragment,t),y(et.$$.fragment,t),y(fe.$$.fragment,t),y(ue.$$.fragment,t),y(tt.$$.fragment,t),y(ot.$$.fragment,t),y(st.$$.fragment,t),y(_e.$$.fragment,t),y(be.$$.fragment,t),y(it.$$.fragment,t),y(dt.$$.fragment,t),y(ht.$$.fragment,t),y(xe.$$.fragment,t),y(we.$$.fragment,t),zo=!1},d(t){o(c),t&&o(v),t&&o(u),T(d),t&&o(fo),t&&o(W),T($e),t&&o(uo),t&&o(te),t&&o(go),t&&o(gt),t&&o(_o),t&&o(_t),t&&o(bo),t&&o(oe),t&&o(vo),t&&o(ne),t&&o(xo),t&&o(L),t&&o(wo),t&&o(H),T(qe),t&&o(Co),t&&o(O),T(Pe),T(re),t&&o(Do),t&&o(G),T(Ae),t&&o(yo),t&&o($),T(Me),T(Le),T(ie),T(Se),T(Re),T(We),T(Ve),T(Ge),t&&o(To),t&&o(Y),T(Ze),t&&o($o),t&&o(F),T(Je),T(et),T(fe),T(ue),t&&o(Eo),t&&o(J),T(tt),t&&o(jo),t&&o(k),T(ot),T(st),T(_e),T(be),t&&o(Fo),t&&o(K),T(it),t&&o(ko),t&&o(z),T(dt),T(ht),T(xe),T(we)}}}const Hs={local:"conditional-detr",sections:[{local:"overview",title:"Overview"},{local:"transformers.ConditionalDetrConfig",title:"ConditionalDetrConfig"},{local:"transformers.ConditionalDetrFeatureExtractor",title:"ConditionalDetrFeatureExtractor"},{local:"transformers.ConditionalDetrModel",title:"ConditionalDetrModel"},{local:"transformers.ConditionalDetrForObjectDetection",title:"ConditionalDetrForObjectDetection"},{local:"transformers.ConditionalDetrForSegmentation",title:"ConditionalDetrForSegmentation"}],title:"Conditional DETR"};function Vs(E){return Os(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ks extends Fs{constructor(c){super();ks(this,c,Vs,Ws,zs,{})}}export{Ks as default,Hs as metadata};
