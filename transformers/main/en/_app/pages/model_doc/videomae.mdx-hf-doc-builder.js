import{S as $r,i as wr,s as xr,e as a,k as p,w as E,t as i,M as Tr,c as s,d as t,m as h,a as r,x as M,h as d,b as l,N as Pr,G as o,g as f,y as A,q as y,o as V,B as $,v as jr,L as Nt}from"../../chunks/vendor-hf-doc-builder.js";import{T as js}from"../../chunks/Tip-hf-doc-builder.js";import{D as q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as qt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Me}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ft}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function zr(w){let c,b,_,g,v;return g=new qt({props:{code:`from transformers import VideoMAEConfig, VideoMAEModel

# Initializing a VideoMAE videomae-base style configuration
configuration = VideoMAEConfig()

# Randomly initializing a model from the configuration
model = VideoMAEModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VideoMAEConfig, VideoMAEModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a VideoMAE videomae-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = VideoMAEConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Randomly initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VideoMAEModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),b=i("Example:"),_=p(),E(g.$$.fragment)},l(n){c=s(n,"P",{});var u=r(c);b=d(u,"Example:"),u.forEach(t),_=h(n),M(g.$$.fragment,n)},m(n,u){f(n,c,u),o(c,b),f(n,_,u),A(g,n,u),v=!0},p:Nt,i(n){v||(y(g.$$.fragment,n),v=!0)},o(n){V(g.$$.fragment,n),v=!1},d(n){n&&t(c),n&&t(_),$(g,n)}}}function kr(w){let c,b,_,g,v;return{c(){c=a("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),g=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){c=s(n,"P",{});var u=r(c);b=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(u,"CODE",{});var x=r(_);g=d(x,"Module"),x.forEach(t),v=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){f(n,c,u),o(c,b),o(c,_),o(_,g),o(c,v)},d(n){n&&t(c)}}}function Cr(w){let c,b,_,g,v;return g=new qt({props:{code:`from decord import VideoReader, cpu
import numpy as np

from transformers import VideoMAEFeatureExtractor, VideoMAEModel
from huggingface_hub import hf_hub_download


def sample_frame_indices(clip_len, frame_sample_rate, seg_len):
    converted_len = int(clip_len * frame_sample_rate)
    end_idx = np.random.randint(converted_len, seg_len)
    start_idx = end_idx - converted_len
    indices = np.linspace(start_idx, end_idx, num=clip_len)
    indices = np.clip(indices, start_idx, end_idx - 1).astype(np.int64)
    return indices


# video clip consists of 300 frames (10 seconds at 30 FPS)
file_path = hf_hub_download(
    repo_id="nielsr/video-demo", filename="eating_spaghetti.mp4", repo_type="dataset"
)
videoreader = VideoReader(file_path, num_threads=1, ctx=cpu(0))

# sample 16 frames
videoreader.seek(0)
indices = sample_frame_indices(clip_len=16, frame_sample_rate=4, seg_len=len(videoreader))
video = videoreader.get_batch(indices).asnumpy()

feature_extractor = VideoMAEFeatureExtractor.from_pretrained("MCG-NJU/videomae-base")
model = VideoMAEModel.from_pretrained("MCG-NJU/videomae-base")

# prepare video for the model
inputs = feature_extractor(list(video), return_tensors="pt")

# forward pass
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> decord <span class="hljs-keyword">import</span> VideoReader, cpu
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VideoMAEFeatureExtractor, VideoMAEModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_download


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">sample_frame_indices</span>(<span class="hljs-params">clip_len, frame_sample_rate, seg_len</span>):
<span class="hljs-meta">... </span>    converted_len = <span class="hljs-built_in">int</span>(clip_len * frame_sample_rate)
<span class="hljs-meta">... </span>    end_idx = np.random.randint(converted_len, seg_len)
<span class="hljs-meta">... </span>    start_idx = end_idx - converted_len
<span class="hljs-meta">... </span>    indices = np.linspace(start_idx, end_idx, num=clip_len)
<span class="hljs-meta">... </span>    indices = np.clip(indices, start_idx, end_idx - <span class="hljs-number">1</span>).astype(np.int64)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> indices


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># video clip consists of 300 frames (10 seconds at 30 FPS)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>file_path = hf_hub_download(
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;nielsr/video-demo&quot;</span>, filename=<span class="hljs-string">&quot;eating_spaghetti.mp4&quot;</span>, repo_type=<span class="hljs-string">&quot;dataset&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>videoreader = VideoReader(file_path, num_threads=<span class="hljs-number">1</span>, ctx=cpu(<span class="hljs-number">0</span>))

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># sample 16 frames</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>videoreader.seek(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>indices = sample_frame_indices(clip_len=<span class="hljs-number">16</span>, frame_sample_rate=<span class="hljs-number">4</span>, seg_len=<span class="hljs-built_in">len</span>(videoreader))
<span class="hljs-meta">&gt;&gt;&gt; </span>video = videoreader.get_batch(indices).asnumpy()

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = VideoMAEFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;MCG-NJU/videomae-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VideoMAEModel.from_pretrained(<span class="hljs-string">&quot;MCG-NJU/videomae-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare video for the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(<span class="hljs-built_in">list</span>(video), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">1568</span>, <span class="hljs-number">768</span>]`}}),{c(){c=a("p"),b=i("Examples:"),_=p(),E(g.$$.fragment)},l(n){c=s(n,"P",{});var u=r(c);b=d(u,"Examples:"),u.forEach(t),_=h(n),M(g.$$.fragment,n)},m(n,u){f(n,c,u),o(c,b),f(n,_,u),A(g,n,u),v=!0},p:Nt,i(n){v||(y(g.$$.fragment,n),v=!0)},o(n){V(g.$$.fragment,n),v=!1},d(n){n&&t(c),n&&t(_),$(g,n)}}}function Ir(w){let c,b,_,g,v;return{c(){c=a("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),g=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){c=s(n,"P",{});var u=r(c);b=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(u,"CODE",{});var x=r(_);g=d(x,"Module"),x.forEach(t),v=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){f(n,c,u),o(c,b),o(c,_),o(_,g),o(c,v)},d(n){n&&t(c)}}}function Fr(w){let c,b,_,g,v;return g=new qt({props:{code:`from transformers import VideoMAEFeatureExtractor, VideoMAEForPreTraining
import numpy as np
import torch

num_frames = 16
video = list(np.random.randn(16, 3, 224, 224))

feature_extractor = VideoMAEFeatureExtractor.from_pretrained("MCG-NJU/videomae-base")
model = VideoMAEForPreTraining.from_pretrained("MCG-NJU/videomae-base")

pixel_values = feature_extractor(video, return_tensors="pt").pixel_values

num_patches_per_frame = (model.config.image_size // model.config.patch_size) ** 2
seq_length = (num_frames // model.config.tubelet_size) * num_patches_per_frame
bool_masked_pos = torch.randint(0, 2, (1, seq_length)).bool()

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss = outputs.loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VideoMAEFeatureExtractor, VideoMAEForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>num_frames = <span class="hljs-number">16</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>video = <span class="hljs-built_in">list</span>(np.random.randn(<span class="hljs-number">16</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>))

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = VideoMAEFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;MCG-NJU/videomae-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VideoMAEForPreTraining.from_pretrained(<span class="hljs-string">&quot;MCG-NJU/videomae-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(video, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches_per_frame = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_length = (num_frames // model.config.tubelet_size) * num_patches_per_frame
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = torch.randint(<span class="hljs-number">0</span>, <span class="hljs-number">2</span>, (<span class="hljs-number">1</span>, seq_length)).<span class="hljs-built_in">bool</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){c=a("p"),b=i("Examples:"),_=p(),E(g.$$.fragment)},l(n){c=s(n,"P",{});var u=r(c);b=d(u,"Examples:"),u.forEach(t),_=h(n),M(g.$$.fragment,n)},m(n,u){f(n,c,u),o(c,b),f(n,_,u),A(g,n,u),v=!0},p:Nt,i(n){v||(y(g.$$.fragment,n),v=!0)},o(n){V(g.$$.fragment,n),v=!1},d(n){n&&t(c),n&&t(_),$(g,n)}}}function Nr(w){let c,b,_,g,v;return{c(){c=a("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),g=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){c=s(n,"P",{});var u=r(c);b=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(u,"CODE",{});var x=r(_);g=d(x,"Module"),x.forEach(t),v=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){f(n,c,u),o(c,b),o(c,_),o(_,g),o(c,v)},d(n){n&&t(c)}}}function qr(w){let c,b,_,g,v;return g=new qt({props:{code:`from decord import VideoReader, cpu
import torch
import numpy as np

from transformers import VideoMAEFeatureExtractor, VideoMAEForVideoClassification
from huggingface_hub import hf_hub_download

np.random.seed(0)


def sample_frame_indices(clip_len, frame_sample_rate, seg_len):
    converted_len = int(clip_len * frame_sample_rate)
    end_idx = np.random.randint(converted_len, seg_len)
    start_idx = end_idx - converted_len
    indices = np.linspace(start_idx, end_idx, num=clip_len)
    indices = np.clip(indices, start_idx, end_idx - 1).astype(np.int64)
    return indices


# video clip consists of 300 frames (10 seconds at 30 FPS)
file_path = hf_hub_download(
    repo_id="nielsr/video-demo", filename="eating_spaghetti.mp4", repo_type="dataset"
)
videoreader = VideoReader(file_path, num_threads=1, ctx=cpu(0))

# sample 16 frames
videoreader.seek(0)
indices = sample_frame_indices(clip_len=16, frame_sample_rate=4, seg_len=len(videoreader))
video = videoreader.get_batch(indices).asnumpy()

feature_extractor = VideoMAEFeatureExtractor.from_pretrained("MCG-NJU/videomae-base-finetuned-kinetics")
model = VideoMAEForVideoClassification.from_pretrained("MCG-NJU/videomae-base-finetuned-kinetics")

inputs = feature_extractor(list(video), return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)
    logits = outputs.logits

# model predicts one of the 400 Kinetics-400 classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> decord <span class="hljs-keyword">import</span> VideoReader, cpu
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VideoMAEFeatureExtractor, VideoMAEForVideoClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_download

<span class="hljs-meta">&gt;&gt;&gt; </span>np.random.seed(<span class="hljs-number">0</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">sample_frame_indices</span>(<span class="hljs-params">clip_len, frame_sample_rate, seg_len</span>):
<span class="hljs-meta">... </span>    converted_len = <span class="hljs-built_in">int</span>(clip_len * frame_sample_rate)
<span class="hljs-meta">... </span>    end_idx = np.random.randint(converted_len, seg_len)
<span class="hljs-meta">... </span>    start_idx = end_idx - converted_len
<span class="hljs-meta">... </span>    indices = np.linspace(start_idx, end_idx, num=clip_len)
<span class="hljs-meta">... </span>    indices = np.clip(indices, start_idx, end_idx - <span class="hljs-number">1</span>).astype(np.int64)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> indices


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># video clip consists of 300 frames (10 seconds at 30 FPS)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>file_path = hf_hub_download(
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;nielsr/video-demo&quot;</span>, filename=<span class="hljs-string">&quot;eating_spaghetti.mp4&quot;</span>, repo_type=<span class="hljs-string">&quot;dataset&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>videoreader = VideoReader(file_path, num_threads=<span class="hljs-number">1</span>, ctx=cpu(<span class="hljs-number">0</span>))

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># sample 16 frames</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>videoreader.seek(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>indices = sample_frame_indices(clip_len=<span class="hljs-number">16</span>, frame_sample_rate=<span class="hljs-number">4</span>, seg_len=<span class="hljs-built_in">len</span>(videoreader))
<span class="hljs-meta">&gt;&gt;&gt; </span>video = videoreader.get_batch(indices).asnumpy()

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = VideoMAEFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;MCG-NJU/videomae-base-finetuned-kinetics&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VideoMAEForVideoClassification.from_pretrained(<span class="hljs-string">&quot;MCG-NJU/videomae-base-finetuned-kinetics&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(<span class="hljs-built_in">list</span>(video), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)
<span class="hljs-meta">... </span>    logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 400 Kinetics-400 classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
eating spaghetti`}}),{c(){c=a("p"),b=i("Examples:"),_=p(),E(g.$$.fragment)},l(n){c=s(n,"P",{});var u=r(c);b=d(u,"Examples:"),u.forEach(t),_=h(n),M(g.$$.fragment,n)},m(n,u){f(n,c,u),o(c,b),f(n,_,u),A(g,n,u),v=!0},p:Nt,i(n){v||(y(g.$$.fragment,n),v=!0)},o(n){V(g.$$.fragment,n),v=!1},d(n){n&&t(c),n&&t(_),$(g,n)}}}function Sr(w){let c,b,_,g,v,n,u,x,St,Qo,L,X,wo,Ae,Dt,xo,Lt,et,S,Rt,ye,Ut,Ot,Qe,Wt,Gt,ot,eo,Jt,tt,oo,To,Ht,at,to,Bt,st,Q,Ve,Kt,ao,Yt,Zt,Xt,so,ro,Qt,ea,rt,ee,zs,nt,oe,oa,no,ta,aa,it,D,sa,$e,ra,na,we,ia,da,dt,R,te,Po,xe,la,jo,ca,lt,T,Te,ma,U,pa,io,ha,fa,Pe,ga,ua,_a,O,va,lo,ba,Ea,co,Ma,Aa,ya,ae,ct,W,se,zo,je,Va,ko,$a,mt,k,ze,wa,Co,xa,Ta,re,ke,Pa,Io,ja,pt,G,ne,Fo,Ce,za,No,ka,ht,C,Ie,Ca,qo,Ia,Fa,ie,Fe,Na,So,qa,ft,J,de,Do,Ne,Sa,Lo,Da,gt,I,qe,La,Se,Ra,De,Ua,Oa,Wa,P,Le,Ga,H,Ja,mo,Ha,Ba,Ro,Ka,Ya,Za,le,Xa,ce,ut,B,me,Uo,Re,Qa,Oo,es,_t,F,Ue,os,Oe,ts,We,as,ss,rs,j,Ge,ns,K,is,po,ds,ls,Wo,cs,ms,ps,pe,hs,he,vt,Y,fe,Go,Je,fs,Jo,gs,bt,N,He,us,Be,_s,Ke,vs,bs,Es,z,Ye,Ms,Z,As,ho,ys,Vs,Ho,$s,ws,xs,ge,Ts,ue,Et;return n=new Me({}),Ae=new Me({}),xe=new Me({}),Te=new q({props:{name:"class transformers.VideoMAEConfig",anchor:"transformers.VideoMAEConfig",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"num_frames",val:" = 16"},{name:"tubelet_size",val:" = 2"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"qkv_bias",val:" = True"},{name:"use_mean_pooling",val:" = True"},{name:"decoder_num_attention_heads",val:" = 6"},{name:"decoder_hidden_size",val:" = 384"},{name:"decoder_num_hidden_layers",val:" = 4"},{name:"decoder_intermediate_size",val:" = 1536"},{name:"norm_pix_loss",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VideoMAEConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.VideoMAEConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.VideoMAEConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.VideoMAEConfig.num_frames",description:`<strong>num_frames</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
The number of frames in each video.`,name:"num_frames"},{anchor:"transformers.VideoMAEConfig.tubelet_size",description:`<strong>tubelet_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The number of tubelets.`,name:"tubelet_size"},{anchor:"transformers.VideoMAEConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.VideoMAEConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.VideoMAEConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.VideoMAEConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.VideoMAEConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.VideoMAEConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.VideoMAEConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.VideoMAEConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.VideoMAEConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.VideoMAEConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.VideoMAEConfig.use_mean_pooling",description:`<strong>use_mean_pooling</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to mean pool the final hidden states instead of using the final hidden state of the [CLS] token.`,name:"use_mean_pooling"},{anchor:"transformers.VideoMAEConfig.decoder_num_attention_heads",description:`<strong>decoder_num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of attention heads for each attention layer in the decoder.`,name:"decoder_num_attention_heads"},{anchor:"transformers.VideoMAEConfig.decoder_hidden_size",description:`<strong>decoder_hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 384) &#x2014;
Dimensionality of the decoder.`,name:"decoder_hidden_size"},{anchor:"transformers.VideoMAEConfig.decoder_num_hidden_layers",description:`<strong>decoder_num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of hidden layers in the decoder.`,name:"decoder_num_hidden_layers"},{anchor:"transformers.VideoMAEConfig.decoder_intermediate_size",description:`<strong>decoder_intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the decoder.`,name:"decoder_intermediate_size"},{anchor:"transformers.VideoMAEConfig.norm_pix_loss",description:`<strong>norm_pix_loss</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize the target patch pixels.`,name:"norm_pix_loss"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/videomae/configuration_videomae.py#L28"}}),ae=new Ft({props:{anchor:"transformers.VideoMAEConfig.example",$$slots:{default:[zr]},$$scope:{ctx:w}}}),je=new Me({}),ze=new q({props:{name:"class transformers.VideoMAEImageProcessor",anchor:"transformers.VideoMAEImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BILINEAR: 2>"},{name:"do_center_crop",val:": bool = True"},{name:"crop_size",val:": typing.Dict[str, int] = None"},{name:"do_rescale",val:": bool = True"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VideoMAEImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to the specified <code>size</code>. Can be overridden by the
<code>do_resize</code> parameter in the <code>preprocess</code> method.`,name:"do_resize"},{anchor:"transformers.VideoMAEImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;shortest_edge&quot; -- 224}</code>):
Size of the output image after resizing. The shortest edge of the image will be resized to
<code>size[&quot;shortest_edge&quot;]</code> while maintaining the aspect ratio of the original image. Can be overriden by
<code>size</code> in the <code>preprocess</code> method.`,name:"size"},{anchor:"transformers.VideoMAEImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BILINEAR</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by the <code>resample</code> parameter in the
<code>preprocess</code> method.`,name:"resample"},{anchor:"transformers.VideoMAEImageProcessor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to center crop the image to the specified <code>crop_size</code>. Can be overridden by the <code>do_center_crop</code>
parameter in the <code>preprocess</code> method.`,name:"do_center_crop"},{anchor:"transformers.VideoMAEImageProcessor.crop_size",description:`<strong>crop_size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>{&quot;height&quot; -- 224, &quot;width&quot;: 224}</code>):
Size of the image after applying the center crop. Can be overridden by the <code>crop_size</code> parameter in the
<code>preprocess</code> method.`,name:"crop_size"},{anchor:"transformers.VideoMAEImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to rescale the image by the specified scale <code>rescale_factor</code>. Can be overridden by the <code>do_rescale</code>
parameter in the <code>preprocess</code> method.`,name:"do_rescale"},{anchor:"transformers.VideoMAEImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>int</code> or <code>float</code>, <em>optional</em>, defaults to <code>1/255</code>) &#x2014;
Defines the scale factor to use if rescaling the image. Can be overridden by the <code>rescale_factor</code> parameter
in the <code>preprocess</code> method.`,name:"rescale_factor"},{anchor:"transformers.VideoMAEImageProcessor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize the image. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code>
method.`,name:"do_normalize"},{anchor:"transformers.VideoMAEImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.VideoMAEImageProcessor.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/videomae/image_processing_videomae.py#L66"}}),ke=new q({props:{name:"__call__",anchor:"transformers.VideoMAEImageProcessor.__call__",parameters:[{name:"images",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/image_processing_utils.py#L435"}}),Ce=new Me({}),Ie=new q({props:{name:"class transformers.VideoMAEImageProcessor",anchor:"transformers.VideoMAEImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BILINEAR: 2>"},{name:"do_center_crop",val:": bool = True"},{name:"crop_size",val:": typing.Dict[str, int] = None"},{name:"do_rescale",val:": bool = True"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VideoMAEImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to the specified <code>size</code>. Can be overridden by the
<code>do_resize</code> parameter in the <code>preprocess</code> method.`,name:"do_resize"},{anchor:"transformers.VideoMAEImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;shortest_edge&quot; -- 224}</code>):
Size of the output image after resizing. The shortest edge of the image will be resized to
<code>size[&quot;shortest_edge&quot;]</code> while maintaining the aspect ratio of the original image. Can be overriden by
<code>size</code> in the <code>preprocess</code> method.`,name:"size"},{anchor:"transformers.VideoMAEImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BILINEAR</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by the <code>resample</code> parameter in the
<code>preprocess</code> method.`,name:"resample"},{anchor:"transformers.VideoMAEImageProcessor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to center crop the image to the specified <code>crop_size</code>. Can be overridden by the <code>do_center_crop</code>
parameter in the <code>preprocess</code> method.`,name:"do_center_crop"},{anchor:"transformers.VideoMAEImageProcessor.crop_size",description:`<strong>crop_size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>{&quot;height&quot; -- 224, &quot;width&quot;: 224}</code>):
Size of the image after applying the center crop. Can be overridden by the <code>crop_size</code> parameter in the
<code>preprocess</code> method.`,name:"crop_size"},{anchor:"transformers.VideoMAEImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to rescale the image by the specified scale <code>rescale_factor</code>. Can be overridden by the <code>do_rescale</code>
parameter in the <code>preprocess</code> method.`,name:"do_rescale"},{anchor:"transformers.VideoMAEImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>int</code> or <code>float</code>, <em>optional</em>, defaults to <code>1/255</code>) &#x2014;
Defines the scale factor to use if rescaling the image. Can be overridden by the <code>rescale_factor</code> parameter
in the <code>preprocess</code> method.`,name:"rescale_factor"},{anchor:"transformers.VideoMAEImageProcessor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize the image. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code>
method.`,name:"do_normalize"},{anchor:"transformers.VideoMAEImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.VideoMAEImageProcessor.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/videomae/image_processing_videomae.py#L66"}}),Fe=new q({props:{name:"preprocess",anchor:"transformers.VideoMAEImageProcessor.preprocess",parameters:[{name:"videos",val:": typing.Union[ForwardRef('PIL.Image.Image'), numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[ForwardRef('PIL.Image.Image')], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"do_resize",val:": bool = None"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = None"},{name:"do_center_crop",val:": bool = None"},{name:"crop_size",val:": typing.Dict[str, int] = None"},{name:"do_rescale",val:": bool = None"},{name:"rescale_factor",val:": float = None"},{name:"do_normalize",val:": bool = None"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"data_format",val:": ChannelDimension = <ChannelDimension.FIRST: 'channels_first'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VideoMAEImageProcessor.preprocess.images",description:`<strong>images</strong> (<code>ImageInput</code>) &#x2014;
Image to preprocess.`,name:"images"},{anchor:"transformers.VideoMAEImageProcessor.preprocess.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_resize</code>) &#x2014;
Whether to resize the image.`,name:"do_resize"},{anchor:"transformers.VideoMAEImageProcessor.preprocess.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>self.size</code>) &#x2014;
Size of the image after applying resize.`,name:"size"},{anchor:"transformers.VideoMAEImageProcessor.preprocess.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>self.resample</code>) &#x2014;
Resampling filter to use if resizing the image. This can be one of the enum <code>PILImageResampling</code>, Only
has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.VideoMAEImageProcessor.preprocess.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_centre_crop</code>) &#x2014;
Whether to centre crop the image.`,name:"do_center_crop"},{anchor:"transformers.VideoMAEImageProcessor.preprocess.crop_size",description:`<strong>crop_size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>self.crop_size</code>) &#x2014;
Size of the image after applying the centre crop.`,name:"crop_size"},{anchor:"transformers.VideoMAEImageProcessor.preprocess.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_rescale</code>) &#x2014;
Whether to rescale the image values between [0 - 1].`,name:"do_rescale"},{anchor:"transformers.VideoMAEImageProcessor.preprocess.rescale_factor",description:`<strong>rescale_factor</strong> (<code>float</code>, <em>optional</em>, defaults to <code>self.rescale_factor</code>) &#x2014;
Rescale factor to rescale the image by if <code>do_rescale</code> is set to <code>True</code>.`,name:"rescale_factor"},{anchor:"transformers.VideoMAEImageProcessor.preprocess.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_normalize</code>) &#x2014;
Whether to normalize the image.`,name:"do_normalize"},{anchor:"transformers.VideoMAEImageProcessor.preprocess.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>self.image_mean</code>) &#x2014;
Image mean.`,name:"image_mean"},{anchor:"transformers.VideoMAEImageProcessor.preprocess.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>self.image_std</code>) &#x2014;
Image standard deviation.`,name:"image_std"},{anchor:"transformers.VideoMAEImageProcessor.preprocess.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <code>TensorType</code>, <em>optional</em>) &#x2014;
The type of tensors to return. Can be one of:<ul>
<li>Unset: Return a list of <code>np.ndarray</code>.</li>
<li><code>TensorType.TENSORFLOW</code> or <code>&apos;tf&apos;</code>: Return a batch of type <code>tf.Tensor</code>.</li>
<li><code>TensorType.PYTORCH</code> or <code>&apos;pt&apos;</code>: Return a batch of type <code>torch.Tensor</code>.</li>
<li><code>TensorType.NUMPY</code> or <code>&apos;np&apos;</code>: Return a batch of type <code>np.ndarray</code>.</li>
<li><code>TensorType.JAX</code> or <code>&apos;jax&apos;</code>: Return a batch of type <code>jax.numpy.ndarray</code>.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.VideoMAEImageProcessor.preprocess.data_format",description:`<strong>data_format</strong> (<code>ChannelDimension</code> or <code>str</code>, <em>optional</em>, defaults to <code>ChannelDimension.FIRST</code>) &#x2014;
The channel dimension format for the output image. Can be one of:<ul>
<li><code>ChannelDimension.FIRST</code>: image in (num_channels, height, width) format.</li>
<li><code>ChannelDimension.LAST</code>: image in (height, width, num_channels) format.</li>
<li>Unset: Use the inferred channel dimension format of the input image.</li>
</ul>`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/videomae/image_processing_videomae.py#L282"}}),Ne=new Me({}),qe=new q({props:{name:"class transformers.VideoMAEModel",anchor:"transformers.VideoMAEModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VideoMAEModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEConfig">VideoMAEConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/videomae/modeling_videomae.py#L537"}}),Le=new q({props:{name:"forward",anchor:"transformers.VideoMAEModel.forward",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.VideoMAEModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_frames, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEImageProcessor">VideoMAEFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">VideoMAEFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VideoMAEModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VideoMAEModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VideoMAEModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VideoMAEModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/videomae/modeling_videomae.py#L564",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEConfig"
>VideoMAEConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),le=new js({props:{$$slots:{default:[kr]},$$scope:{ctx:w}}}),ce=new Ft({props:{anchor:"transformers.VideoMAEModel.forward.example",$$slots:{default:[Cr]},$$scope:{ctx:w}}}),Re=new Me({}),Ue=new q({props:{name:"class transformers.VideoMAEForPreTraining",anchor:"transformers.VideoMAEForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VideoMAEForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEConfig">VideoMAEConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/videomae/modeling_videomae.py#L734"}}),Ge=new q({props:{name:"forward",anchor:"transformers.VideoMAEForPreTraining.forward",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:""},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.VideoMAEForPreTraining.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_frames, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEImageProcessor">VideoMAEFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">VideoMAEFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VideoMAEForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VideoMAEForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VideoMAEForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VideoMAEForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/videomae/modeling_videomae.py#L752",returnDescription:`
<p>A <code>transformers.models.videomae.modeling_videomae.VideoMAEForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEConfig"
>VideoMAEConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Pixel reconstruction loss.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, patch_size ** 2 * num_channels)</code>) \u2014 Pixel reconstruction logits.</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>transformers.models.videomae.modeling_videomae.VideoMAEForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pe=new js({props:{$$slots:{default:[Ir]},$$scope:{ctx:w}}}),he=new Ft({props:{anchor:"transformers.VideoMAEForPreTraining.forward.example",$$slots:{default:[Fr]},$$scope:{ctx:w}}}),Je=new Me({}),He=new q({props:{name:"class transformers.VideoMAEForVideoClassification",anchor:"transformers.VideoMAEForVideoClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VideoMAEForVideoClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEConfig">VideoMAEConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/videomae/modeling_videomae.py#L905"}}),Ye=new q({props:{name:"forward",anchor:"transformers.VideoMAEForVideoClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.VideoMAEForVideoClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_frames, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEImageProcessor">VideoMAEFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">VideoMAEFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VideoMAEForVideoClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VideoMAEForVideoClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VideoMAEForVideoClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VideoMAEForVideoClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VideoMAEForVideoClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/videomae/modeling_videomae.py#L919",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEConfig"
>VideoMAEConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each stage) of shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states
(also called feature maps) of the model at the output of each stage.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ge=new js({props:{$$slots:{default:[Nr]},$$scope:{ctx:w}}}),ue=new Ft({props:{anchor:"transformers.VideoMAEForVideoClassification.forward.example",$$slots:{default:[qr]},$$scope:{ctx:w}}}),{c(){c=a("meta"),b=p(),_=a("h1"),g=a("a"),v=a("span"),E(n.$$.fragment),u=p(),x=a("span"),St=i("VideoMAE"),Qo=p(),L=a("h2"),X=a("a"),wo=a("span"),E(Ae.$$.fragment),Dt=p(),xo=a("span"),Lt=i("Overview"),et=p(),S=a("p"),Rt=i("The VideoMAE model was proposed in "),ye=a("a"),Ut=i("VideoMAE: Masked Autoencoders are Data-Efficient Learners for Self-Supervised Video Pre-Training"),Ot=i(` by Zhan Tong, Yibing Song, Jue Wang, Limin Wang.
VideoMAE extends masked auto encoders (`),Qe=a("a"),Wt=i("MAE"),Gt=i(") to video, claiming state-of-the-art performance on several video classification benchmarks."),ot=p(),eo=a("p"),Jt=i("The abstract from the paper is the following:"),tt=p(),oo=a("p"),To=a("em"),Ht=i("Pre-training video transformers on extra large-scale datasets is generally required to achieve premier performance on relatively small datasets. In this paper, we show that video masked autoencoders (VideoMAE) are data-efficient learners for self-supervised video pre-training (SSVP). We are inspired by the recent ImageMAE and propose customized video tube masking and reconstruction. These simple designs turn out to be effective for overcoming information leakage caused by the temporal correlation during video reconstruction. We obtain three important findings on SSVP: (1) An extremely high proportion of masking ratio (i.e., 90% to 95%) still yields favorable performance of VideoMAE. The temporally redundant video content enables higher masking ratio than that of images. (2) VideoMAE achieves impressive results on very small datasets (i.e., around 3k-4k videos) without using any extra data. This is partially ascribed to the challenging task of video reconstruction to enforce high-level structure learning. (3) VideoMAE shows that data quality is more important than data quantity for SSVP. Domain shift between pre-training and target datasets are important issues in SSVP. Notably, our VideoMAE with the vanilla ViT backbone can achieve 83.9% on Kinects-400, 75.3% on Something-Something V2, 90.8% on UCF101, and 61.1% on HMDB51 without using any extra data."),at=p(),to=a("p"),Bt=i("Tips:"),st=p(),Q=a("ul"),Ve=a("li"),Kt=i("One can use "),ao=a("a"),Yt=i("VideoMAEFeatureExtractor"),Zt=i(" to prepare videos for the model. It will resize + normalize all frames of a video for you."),Xt=p(),so=a("li"),ro=a("a"),Qt=i("VideoMAEForPreTraining"),ea=i(" includes the decoder on top for self-supervised pre-training."),rt=p(),ee=a("img"),nt=p(),oe=a("small"),oa=i("VideoMAE pre-training. Taken from the "),no=a("a"),ta=i("original paper"),aa=i("."),it=p(),D=a("p"),sa=i("This model was contributed by "),$e=a("a"),ra=i("nielsr"),na=i(`.
The original code can be found `),we=a("a"),ia=i("here"),da=i("."),dt=p(),R=a("h2"),te=a("a"),Po=a("span"),E(xe.$$.fragment),la=p(),jo=a("span"),ca=i("VideoMAEConfig"),lt=p(),T=a("div"),E(Te.$$.fragment),ma=p(),U=a("p"),pa=i("This is the configuration class to store the configuration of a "),io=a("a"),ha=i("VideoMAEModel"),fa=i(`. It is used to instantiate a
VideoMAE model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the VideoMAE
`),Pe=a("a"),ga=i("MCG-NJU/videomae-base"),ua=i(" architecture."),_a=p(),O=a("p"),va=i("Configuration objects inherit from "),lo=a("a"),ba=i("PretrainedConfig"),Ea=i(` and can be used to control the model outputs. Read the
documentation from `),co=a("a"),Ma=i("PretrainedConfig"),Aa=i(" for more information."),ya=p(),E(ae.$$.fragment),ct=p(),W=a("h2"),se=a("a"),zo=a("span"),E(je.$$.fragment),Va=p(),ko=a("span"),$a=i("VideoMAEFeatureExtractor"),mt=p(),k=a("div"),E(ze.$$.fragment),wa=p(),Co=a("p"),xa=i("Constructs a VideoMAE image processor."),Ta=p(),re=a("div"),E(ke.$$.fragment),Pa=p(),Io=a("p"),ja=i("Preprocess an image or a batch of images."),pt=p(),G=a("h2"),ne=a("a"),Fo=a("span"),E(Ce.$$.fragment),za=p(),No=a("span"),ka=i("VideoMAEImageProcessor"),ht=p(),C=a("div"),E(Ie.$$.fragment),Ca=p(),qo=a("p"),Ia=i("Constructs a VideoMAE image processor."),Fa=p(),ie=a("div"),E(Fe.$$.fragment),Na=p(),So=a("p"),qa=i("Preprocess an image or batch of images."),ft=p(),J=a("h2"),de=a("a"),Do=a("span"),E(Ne.$$.fragment),Sa=p(),Lo=a("span"),Da=i("VideoMAEModel"),gt=p(),I=a("div"),E(qe.$$.fragment),La=p(),Se=a("p"),Ra=i(`The bare VideoMAE Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),De=a("a"),Ua=i("torch.nn.Module"),Oa=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wa=p(),P=a("div"),E(Le.$$.fragment),Ga=p(),H=a("p"),Ja=i("The "),mo=a("a"),Ha=i("VideoMAEModel"),Ba=i(" forward method, overrides the "),Ro=a("code"),Ka=i("__call__"),Ya=i(" special method."),Za=p(),E(le.$$.fragment),Xa=p(),E(ce.$$.fragment),ut=p(),B=a("h2"),me=a("a"),Uo=a("span"),E(Re.$$.fragment),Qa=p(),Oo=a("span"),es=i("VideoMAEForPreTraining"),_t=p(),F=a("div"),E(Ue.$$.fragment),os=p(),Oe=a("p"),ts=i(`The VideoMAE Model transformer with the decoder on top for self-supervised pre-training.
This model is a PyTorch `),We=a("a"),as=i("torch.nn.Module"),ss=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),rs=p(),j=a("div"),E(Ge.$$.fragment),ns=p(),K=a("p"),is=i("The "),po=a("a"),ds=i("VideoMAEForPreTraining"),ls=i(" forward method, overrides the "),Wo=a("code"),cs=i("__call__"),ms=i(" special method."),ps=p(),E(pe.$$.fragment),hs=p(),E(he.$$.fragment),vt=p(),Y=a("h2"),fe=a("a"),Go=a("span"),E(Je.$$.fragment),fs=p(),Jo=a("span"),gs=i("VideoMAEForVideoClassification"),bt=p(),N=a("div"),E(He.$$.fragment),us=p(),Be=a("p"),_s=i(`VideoMAE Model transformer with a video classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.
This model is a PyTorch `),Ke=a("a"),vs=i("torch.nn.Module"),bs=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Es=p(),z=a("div"),E(Ye.$$.fragment),Ms=p(),Z=a("p"),As=i("The "),ho=a("a"),ys=i("VideoMAEForVideoClassification"),Vs=i(" forward method, overrides the "),Ho=a("code"),$s=i("__call__"),ws=i(" special method."),xs=p(),E(ge.$$.fragment),Ts=p(),E(ue.$$.fragment),this.h()},l(e){const m=Tr('[data-svelte="svelte-1phssyn"]',document.head);c=s(m,"META",{name:!0,content:!0}),m.forEach(t),b=h(e),_=s(e,"H1",{class:!0});var Ze=r(_);g=s(Ze,"A",{id:!0,class:!0,href:!0});var Bo=r(g);v=s(Bo,"SPAN",{});var Ko=r(v);M(n.$$.fragment,Ko),Ko.forEach(t),Bo.forEach(t),u=h(Ze),x=s(Ze,"SPAN",{});var Yo=r(x);St=d(Yo,"VideoMAE"),Yo.forEach(t),Ze.forEach(t),Qo=h(e),L=s(e,"H2",{class:!0});var Xe=r(L);X=s(Xe,"A",{id:!0,class:!0,href:!0});var Zo=r(X);wo=s(Zo,"SPAN",{});var Xo=r(wo);M(Ae.$$.fragment,Xo),Xo.forEach(t),Zo.forEach(t),Dt=h(Xe),xo=s(Xe,"SPAN",{});var ks=r(xo);Lt=d(ks,"Overview"),ks.forEach(t),Xe.forEach(t),et=h(e),S=s(e,"P",{});var fo=r(S);Rt=d(fo,"The VideoMAE model was proposed in "),ye=s(fo,"A",{href:!0,rel:!0});var Cs=r(ye);Ut=d(Cs,"VideoMAE: Masked Autoencoders are Data-Efficient Learners for Self-Supervised Video Pre-Training"),Cs.forEach(t),Ot=d(fo,` by Zhan Tong, Yibing Song, Jue Wang, Limin Wang.
VideoMAE extends masked auto encoders (`),Qe=s(fo,"A",{href:!0});var Is=r(Qe);Wt=d(Is,"MAE"),Is.forEach(t),Gt=d(fo,") to video, claiming state-of-the-art performance on several video classification benchmarks."),fo.forEach(t),ot=h(e),eo=s(e,"P",{});var Fs=r(eo);Jt=d(Fs,"The abstract from the paper is the following:"),Fs.forEach(t),tt=h(e),oo=s(e,"P",{});var Ns=r(oo);To=s(Ns,"EM",{});var qs=r(To);Ht=d(qs,"Pre-training video transformers on extra large-scale datasets is generally required to achieve premier performance on relatively small datasets. In this paper, we show that video masked autoencoders (VideoMAE) are data-efficient learners for self-supervised video pre-training (SSVP). We are inspired by the recent ImageMAE and propose customized video tube masking and reconstruction. These simple designs turn out to be effective for overcoming information leakage caused by the temporal correlation during video reconstruction. We obtain three important findings on SSVP: (1) An extremely high proportion of masking ratio (i.e., 90% to 95%) still yields favorable performance of VideoMAE. The temporally redundant video content enables higher masking ratio than that of images. (2) VideoMAE achieves impressive results on very small datasets (i.e., around 3k-4k videos) without using any extra data. This is partially ascribed to the challenging task of video reconstruction to enforce high-level structure learning. (3) VideoMAE shows that data quality is more important than data quantity for SSVP. Domain shift between pre-training and target datasets are important issues in SSVP. Notably, our VideoMAE with the vanilla ViT backbone can achieve 83.9% on Kinects-400, 75.3% on Something-Something V2, 90.8% on UCF101, and 61.1% on HMDB51 without using any extra data."),qs.forEach(t),Ns.forEach(t),at=h(e),to=s(e,"P",{});var Ss=r(to);Bt=d(Ss,"Tips:"),Ss.forEach(t),st=h(e),Q=s(e,"UL",{});var Mt=r(Q);Ve=s(Mt,"LI",{});var At=r(Ve);Kt=d(At,"One can use "),ao=s(At,"A",{href:!0});var Ds=r(ao);Yt=d(Ds,"VideoMAEFeatureExtractor"),Ds.forEach(t),Zt=d(At," to prepare videos for the model. It will resize + normalize all frames of a video for you."),At.forEach(t),Xt=h(Mt),so=s(Mt,"LI",{});var Ps=r(so);ro=s(Ps,"A",{href:!0});var Ls=r(ro);Qt=d(Ls,"VideoMAEForPreTraining"),Ls.forEach(t),ea=d(Ps," includes the decoder on top for self-supervised pre-training."),Ps.forEach(t),Mt.forEach(t),rt=h(e),ee=s(e,"IMG",{src:!0,alt:!0,width:!0}),nt=h(e),oe=s(e,"SMALL",{});var yt=r(oe);oa=d(yt,"VideoMAE pre-training. Taken from the "),no=s(yt,"A",{href:!0});var Rs=r(no);ta=d(Rs,"original paper"),Rs.forEach(t),aa=d(yt,"."),yt.forEach(t),it=h(e),D=s(e,"P",{});var go=r(D);sa=d(go,"This model was contributed by "),$e=s(go,"A",{href:!0,rel:!0});var Us=r($e);ra=d(Us,"nielsr"),Us.forEach(t),na=d(go,`.
The original code can be found `),we=s(go,"A",{href:!0,rel:!0});var Os=r(we);ia=d(Os,"here"),Os.forEach(t),da=d(go,"."),go.forEach(t),dt=h(e),R=s(e,"H2",{class:!0});var Vt=r(R);te=s(Vt,"A",{id:!0,class:!0,href:!0});var Ws=r(te);Po=s(Ws,"SPAN",{});var Gs=r(Po);M(xe.$$.fragment,Gs),Gs.forEach(t),Ws.forEach(t),la=h(Vt),jo=s(Vt,"SPAN",{});var Js=r(jo);ca=d(Js,"VideoMAEConfig"),Js.forEach(t),Vt.forEach(t),lt=h(e),T=s(e,"DIV",{class:!0});var _e=r(T);M(Te.$$.fragment,_e),ma=h(_e),U=s(_e,"P",{});var uo=r(U);pa=d(uo,"This is the configuration class to store the configuration of a "),io=s(uo,"A",{href:!0});var Hs=r(io);ha=d(Hs,"VideoMAEModel"),Hs.forEach(t),fa=d(uo,`. It is used to instantiate a
VideoMAE model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the VideoMAE
`),Pe=s(uo,"A",{href:!0,rel:!0});var Bs=r(Pe);ga=d(Bs,"MCG-NJU/videomae-base"),Bs.forEach(t),ua=d(uo," architecture."),uo.forEach(t),_a=h(_e),O=s(_e,"P",{});var _o=r(O);va=d(_o,"Configuration objects inherit from "),lo=s(_o,"A",{href:!0});var Ks=r(lo);ba=d(Ks,"PretrainedConfig"),Ks.forEach(t),Ea=d(_o,` and can be used to control the model outputs. Read the
documentation from `),co=s(_o,"A",{href:!0});var Ys=r(co);Ma=d(Ys,"PretrainedConfig"),Ys.forEach(t),Aa=d(_o," for more information."),_o.forEach(t),ya=h(_e),M(ae.$$.fragment,_e),_e.forEach(t),ct=h(e),W=s(e,"H2",{class:!0});var $t=r(W);se=s($t,"A",{id:!0,class:!0,href:!0});var Zs=r(se);zo=s(Zs,"SPAN",{});var Xs=r(zo);M(je.$$.fragment,Xs),Xs.forEach(t),Zs.forEach(t),Va=h($t),ko=s($t,"SPAN",{});var Qs=r(ko);$a=d(Qs,"VideoMAEFeatureExtractor"),Qs.forEach(t),$t.forEach(t),mt=h(e),k=s(e,"DIV",{class:!0});var vo=r(k);M(ze.$$.fragment,vo),wa=h(vo),Co=s(vo,"P",{});var er=r(Co);xa=d(er,"Constructs a VideoMAE image processor."),er.forEach(t),Ta=h(vo),re=s(vo,"DIV",{class:!0});var wt=r(re);M(ke.$$.fragment,wt),Pa=h(wt),Io=s(wt,"P",{});var or=r(Io);ja=d(or,"Preprocess an image or a batch of images."),or.forEach(t),wt.forEach(t),vo.forEach(t),pt=h(e),G=s(e,"H2",{class:!0});var xt=r(G);ne=s(xt,"A",{id:!0,class:!0,href:!0});var tr=r(ne);Fo=s(tr,"SPAN",{});var ar=r(Fo);M(Ce.$$.fragment,ar),ar.forEach(t),tr.forEach(t),za=h(xt),No=s(xt,"SPAN",{});var sr=r(No);ka=d(sr,"VideoMAEImageProcessor"),sr.forEach(t),xt.forEach(t),ht=h(e),C=s(e,"DIV",{class:!0});var bo=r(C);M(Ie.$$.fragment,bo),Ca=h(bo),qo=s(bo,"P",{});var rr=r(qo);Ia=d(rr,"Constructs a VideoMAE image processor."),rr.forEach(t),Fa=h(bo),ie=s(bo,"DIV",{class:!0});var Tt=r(ie);M(Fe.$$.fragment,Tt),Na=h(Tt),So=s(Tt,"P",{});var nr=r(So);qa=d(nr,"Preprocess an image or batch of images."),nr.forEach(t),Tt.forEach(t),bo.forEach(t),ft=h(e),J=s(e,"H2",{class:!0});var Pt=r(J);de=s(Pt,"A",{id:!0,class:!0,href:!0});var ir=r(de);Do=s(ir,"SPAN",{});var dr=r(Do);M(Ne.$$.fragment,dr),dr.forEach(t),ir.forEach(t),Sa=h(Pt),Lo=s(Pt,"SPAN",{});var lr=r(Lo);Da=d(lr,"VideoMAEModel"),lr.forEach(t),Pt.forEach(t),gt=h(e),I=s(e,"DIV",{class:!0});var Eo=r(I);M(qe.$$.fragment,Eo),La=h(Eo),Se=s(Eo,"P",{});var jt=r(Se);Ra=d(jt,`The bare VideoMAE Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),De=s(jt,"A",{href:!0,rel:!0});var cr=r(De);Ua=d(cr,"torch.nn.Module"),cr.forEach(t),Oa=d(jt,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jt.forEach(t),Wa=h(Eo),P=s(Eo,"DIV",{class:!0});var ve=r(P);M(Le.$$.fragment,ve),Ga=h(ve),H=s(ve,"P",{});var Mo=r(H);Ja=d(Mo,"The "),mo=s(Mo,"A",{href:!0});var mr=r(mo);Ha=d(mr,"VideoMAEModel"),mr.forEach(t),Ba=d(Mo," forward method, overrides the "),Ro=s(Mo,"CODE",{});var pr=r(Ro);Ka=d(pr,"__call__"),pr.forEach(t),Ya=d(Mo," special method."),Mo.forEach(t),Za=h(ve),M(le.$$.fragment,ve),Xa=h(ve),M(ce.$$.fragment,ve),ve.forEach(t),Eo.forEach(t),ut=h(e),B=s(e,"H2",{class:!0});var zt=r(B);me=s(zt,"A",{id:!0,class:!0,href:!0});var hr=r(me);Uo=s(hr,"SPAN",{});var fr=r(Uo);M(Re.$$.fragment,fr),fr.forEach(t),hr.forEach(t),Qa=h(zt),Oo=s(zt,"SPAN",{});var gr=r(Oo);es=d(gr,"VideoMAEForPreTraining"),gr.forEach(t),zt.forEach(t),_t=h(e),F=s(e,"DIV",{class:!0});var Ao=r(F);M(Ue.$$.fragment,Ao),os=h(Ao),Oe=s(Ao,"P",{});var kt=r(Oe);ts=d(kt,`The VideoMAE Model transformer with the decoder on top for self-supervised pre-training.
This model is a PyTorch `),We=s(kt,"A",{href:!0,rel:!0});var ur=r(We);as=d(ur,"torch.nn.Module"),ur.forEach(t),ss=d(kt,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kt.forEach(t),rs=h(Ao),j=s(Ao,"DIV",{class:!0});var be=r(j);M(Ge.$$.fragment,be),ns=h(be),K=s(be,"P",{});var yo=r(K);is=d(yo,"The "),po=s(yo,"A",{href:!0});var _r=r(po);ds=d(_r,"VideoMAEForPreTraining"),_r.forEach(t),ls=d(yo," forward method, overrides the "),Wo=s(yo,"CODE",{});var vr=r(Wo);cs=d(vr,"__call__"),vr.forEach(t),ms=d(yo," special method."),yo.forEach(t),ps=h(be),M(pe.$$.fragment,be),hs=h(be),M(he.$$.fragment,be),be.forEach(t),Ao.forEach(t),vt=h(e),Y=s(e,"H2",{class:!0});var Ct=r(Y);fe=s(Ct,"A",{id:!0,class:!0,href:!0});var br=r(fe);Go=s(br,"SPAN",{});var Er=r(Go);M(Je.$$.fragment,Er),Er.forEach(t),br.forEach(t),fs=h(Ct),Jo=s(Ct,"SPAN",{});var Mr=r(Jo);gs=d(Mr,"VideoMAEForVideoClassification"),Mr.forEach(t),Ct.forEach(t),bt=h(e),N=s(e,"DIV",{class:!0});var Vo=r(N);M(He.$$.fragment,Vo),us=h(Vo),Be=s(Vo,"P",{});var It=r(Be);_s=d(It,`VideoMAE Model transformer with a video classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.
This model is a PyTorch `),Ke=s(It,"A",{href:!0,rel:!0});var Ar=r(Ke);vs=d(Ar,"torch.nn.Module"),Ar.forEach(t),bs=d(It,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),It.forEach(t),Es=h(Vo),z=s(Vo,"DIV",{class:!0});var Ee=r(z);M(Ye.$$.fragment,Ee),Ms=h(Ee),Z=s(Ee,"P",{});var $o=r(Z);As=d($o,"The "),ho=s($o,"A",{href:!0});var yr=r(ho);ys=d(yr,"VideoMAEForVideoClassification"),yr.forEach(t),Vs=d($o," forward method, overrides the "),Ho=s($o,"CODE",{});var Vr=r(Ho);$s=d(Vr,"__call__"),Vr.forEach(t),ws=d($o," special method."),$o.forEach(t),xs=h(Ee),M(ge.$$.fragment,Ee),Ts=h(Ee),M(ue.$$.fragment,Ee),Ee.forEach(t),Vo.forEach(t),this.h()},h(){l(c,"name","hf:doc:metadata"),l(c,"content",JSON.stringify(Dr)),l(g,"id","videomae"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#videomae"),l(_,"class","relative group"),l(X,"id","overview"),l(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(X,"href","#overview"),l(L,"class","relative group"),l(ye,"href","https://arxiv.org/abs/2203.12602"),l(ye,"rel","nofollow"),l(Qe,"href","vit_mae"),l(ao,"href","/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEImageProcessor"),l(ro,"href","/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEForPreTraining"),Pr(ee.src,zs="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/model_doc/videomae_architecture.jpeg")||l(ee,"src",zs),l(ee,"alt","drawing"),l(ee,"width","600"),l(no,"href","https://arxiv.org/abs/2203.12602"),l($e,"href","https://huggingface.co/nielsr"),l($e,"rel","nofollow"),l(we,"href","https://github.com/MCG-NJU/VideoMAE"),l(we,"rel","nofollow"),l(te,"id","transformers.VideoMAEConfig"),l(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(te,"href","#transformers.VideoMAEConfig"),l(R,"class","relative group"),l(io,"href","/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEModel"),l(Pe,"href","https://huggingface.co/MCG-NJU/videomae-base"),l(Pe,"rel","nofollow"),l(lo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(co,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(se,"id","transformers.VideoMAEImageProcessor"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#transformers.VideoMAEImageProcessor"),l(W,"class","relative group"),l(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ne,"id","transformers.VideoMAEImageProcessor"),l(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ne,"href","#transformers.VideoMAEImageProcessor"),l(G,"class","relative group"),l(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(de,"id","transformers.VideoMAEModel"),l(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(de,"href","#transformers.VideoMAEModel"),l(J,"class","relative group"),l(De,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(De,"rel","nofollow"),l(mo,"href","/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEModel"),l(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(me,"id","transformers.VideoMAEForPreTraining"),l(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(me,"href","#transformers.VideoMAEForPreTraining"),l(B,"class","relative group"),l(We,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(We,"rel","nofollow"),l(po,"href","/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEForPreTraining"),l(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(fe,"id","transformers.VideoMAEForVideoClassification"),l(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(fe,"href","#transformers.VideoMAEForVideoClassification"),l(Y,"class","relative group"),l(Ke,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ke,"rel","nofollow"),l(ho,"href","/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEForVideoClassification"),l(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,m){o(document.head,c),f(e,b,m),f(e,_,m),o(_,g),o(g,v),A(n,v,null),o(_,u),o(_,x),o(x,St),f(e,Qo,m),f(e,L,m),o(L,X),o(X,wo),A(Ae,wo,null),o(L,Dt),o(L,xo),o(xo,Lt),f(e,et,m),f(e,S,m),o(S,Rt),o(S,ye),o(ye,Ut),o(S,Ot),o(S,Qe),o(Qe,Wt),o(S,Gt),f(e,ot,m),f(e,eo,m),o(eo,Jt),f(e,tt,m),f(e,oo,m),o(oo,To),o(To,Ht),f(e,at,m),f(e,to,m),o(to,Bt),f(e,st,m),f(e,Q,m),o(Q,Ve),o(Ve,Kt),o(Ve,ao),o(ao,Yt),o(Ve,Zt),o(Q,Xt),o(Q,so),o(so,ro),o(ro,Qt),o(so,ea),f(e,rt,m),f(e,ee,m),f(e,nt,m),f(e,oe,m),o(oe,oa),o(oe,no),o(no,ta),o(oe,aa),f(e,it,m),f(e,D,m),o(D,sa),o(D,$e),o($e,ra),o(D,na),o(D,we),o(we,ia),o(D,da),f(e,dt,m),f(e,R,m),o(R,te),o(te,Po),A(xe,Po,null),o(R,la),o(R,jo),o(jo,ca),f(e,lt,m),f(e,T,m),A(Te,T,null),o(T,ma),o(T,U),o(U,pa),o(U,io),o(io,ha),o(U,fa),o(U,Pe),o(Pe,ga),o(U,ua),o(T,_a),o(T,O),o(O,va),o(O,lo),o(lo,ba),o(O,Ea),o(O,co),o(co,Ma),o(O,Aa),o(T,ya),A(ae,T,null),f(e,ct,m),f(e,W,m),o(W,se),o(se,zo),A(je,zo,null),o(W,Va),o(W,ko),o(ko,$a),f(e,mt,m),f(e,k,m),A(ze,k,null),o(k,wa),o(k,Co),o(Co,xa),o(k,Ta),o(k,re),A(ke,re,null),o(re,Pa),o(re,Io),o(Io,ja),f(e,pt,m),f(e,G,m),o(G,ne),o(ne,Fo),A(Ce,Fo,null),o(G,za),o(G,No),o(No,ka),f(e,ht,m),f(e,C,m),A(Ie,C,null),o(C,Ca),o(C,qo),o(qo,Ia),o(C,Fa),o(C,ie),A(Fe,ie,null),o(ie,Na),o(ie,So),o(So,qa),f(e,ft,m),f(e,J,m),o(J,de),o(de,Do),A(Ne,Do,null),o(J,Sa),o(J,Lo),o(Lo,Da),f(e,gt,m),f(e,I,m),A(qe,I,null),o(I,La),o(I,Se),o(Se,Ra),o(Se,De),o(De,Ua),o(Se,Oa),o(I,Wa),o(I,P),A(Le,P,null),o(P,Ga),o(P,H),o(H,Ja),o(H,mo),o(mo,Ha),o(H,Ba),o(H,Ro),o(Ro,Ka),o(H,Ya),o(P,Za),A(le,P,null),o(P,Xa),A(ce,P,null),f(e,ut,m),f(e,B,m),o(B,me),o(me,Uo),A(Re,Uo,null),o(B,Qa),o(B,Oo),o(Oo,es),f(e,_t,m),f(e,F,m),A(Ue,F,null),o(F,os),o(F,Oe),o(Oe,ts),o(Oe,We),o(We,as),o(Oe,ss),o(F,rs),o(F,j),A(Ge,j,null),o(j,ns),o(j,K),o(K,is),o(K,po),o(po,ds),o(K,ls),o(K,Wo),o(Wo,cs),o(K,ms),o(j,ps),A(pe,j,null),o(j,hs),A(he,j,null),f(e,vt,m),f(e,Y,m),o(Y,fe),o(fe,Go),A(Je,Go,null),o(Y,fs),o(Y,Jo),o(Jo,gs),f(e,bt,m),f(e,N,m),A(He,N,null),o(N,us),o(N,Be),o(Be,_s),o(Be,Ke),o(Ke,vs),o(Be,bs),o(N,Es),o(N,z),A(Ye,z,null),o(z,Ms),o(z,Z),o(Z,As),o(Z,ho),o(ho,ys),o(Z,Vs),o(Z,Ho),o(Ho,$s),o(Z,ws),o(z,xs),A(ge,z,null),o(z,Ts),A(ue,z,null),Et=!0},p(e,[m]){const Ze={};m&2&&(Ze.$$scope={dirty:m,ctx:e}),ae.$set(Ze);const Bo={};m&2&&(Bo.$$scope={dirty:m,ctx:e}),le.$set(Bo);const Ko={};m&2&&(Ko.$$scope={dirty:m,ctx:e}),ce.$set(Ko);const Yo={};m&2&&(Yo.$$scope={dirty:m,ctx:e}),pe.$set(Yo);const Xe={};m&2&&(Xe.$$scope={dirty:m,ctx:e}),he.$set(Xe);const Zo={};m&2&&(Zo.$$scope={dirty:m,ctx:e}),ge.$set(Zo);const Xo={};m&2&&(Xo.$$scope={dirty:m,ctx:e}),ue.$set(Xo)},i(e){Et||(y(n.$$.fragment,e),y(Ae.$$.fragment,e),y(xe.$$.fragment,e),y(Te.$$.fragment,e),y(ae.$$.fragment,e),y(je.$$.fragment,e),y(ze.$$.fragment,e),y(ke.$$.fragment,e),y(Ce.$$.fragment,e),y(Ie.$$.fragment,e),y(Fe.$$.fragment,e),y(Ne.$$.fragment,e),y(qe.$$.fragment,e),y(Le.$$.fragment,e),y(le.$$.fragment,e),y(ce.$$.fragment,e),y(Re.$$.fragment,e),y(Ue.$$.fragment,e),y(Ge.$$.fragment,e),y(pe.$$.fragment,e),y(he.$$.fragment,e),y(Je.$$.fragment,e),y(He.$$.fragment,e),y(Ye.$$.fragment,e),y(ge.$$.fragment,e),y(ue.$$.fragment,e),Et=!0)},o(e){V(n.$$.fragment,e),V(Ae.$$.fragment,e),V(xe.$$.fragment,e),V(Te.$$.fragment,e),V(ae.$$.fragment,e),V(je.$$.fragment,e),V(ze.$$.fragment,e),V(ke.$$.fragment,e),V(Ce.$$.fragment,e),V(Ie.$$.fragment,e),V(Fe.$$.fragment,e),V(Ne.$$.fragment,e),V(qe.$$.fragment,e),V(Le.$$.fragment,e),V(le.$$.fragment,e),V(ce.$$.fragment,e),V(Re.$$.fragment,e),V(Ue.$$.fragment,e),V(Ge.$$.fragment,e),V(pe.$$.fragment,e),V(he.$$.fragment,e),V(Je.$$.fragment,e),V(He.$$.fragment,e),V(Ye.$$.fragment,e),V(ge.$$.fragment,e),V(ue.$$.fragment,e),Et=!1},d(e){t(c),e&&t(b),e&&t(_),$(n),e&&t(Qo),e&&t(L),$(Ae),e&&t(et),e&&t(S),e&&t(ot),e&&t(eo),e&&t(tt),e&&t(oo),e&&t(at),e&&t(to),e&&t(st),e&&t(Q),e&&t(rt),e&&t(ee),e&&t(nt),e&&t(oe),e&&t(it),e&&t(D),e&&t(dt),e&&t(R),$(xe),e&&t(lt),e&&t(T),$(Te),$(ae),e&&t(ct),e&&t(W),$(je),e&&t(mt),e&&t(k),$(ze),$(ke),e&&t(pt),e&&t(G),$(Ce),e&&t(ht),e&&t(C),$(Ie),$(Fe),e&&t(ft),e&&t(J),$(Ne),e&&t(gt),e&&t(I),$(qe),$(Le),$(le),$(ce),e&&t(ut),e&&t(B),$(Re),e&&t(_t),e&&t(F),$(Ue),$(Ge),$(pe),$(he),e&&t(vt),e&&t(Y),$(Je),e&&t(bt),e&&t(N),$(He),$(Ye),$(ge),$(ue)}}}const Dr={local:"videomae",sections:[{local:"overview",title:"Overview"},{local:"transformers.VideoMAEConfig",title:"VideoMAEConfig"},{local:"transformers.VideoMAEImageProcessor",title:"VideoMAEFeatureExtractor"},{local:"transformers.VideoMAEImageProcessor",title:"VideoMAEImageProcessor"},{local:"transformers.VideoMAEModel",title:"VideoMAEModel"},{local:"transformers.VideoMAEForPreTraining",title:"VideoMAEForPreTraining"},{local:"transformers.VideoMAEForVideoClassification",title:"VideoMAEForVideoClassification"}],title:"VideoMAE"};function Lr(w){return jr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Hr extends $r{constructor(c){super();wr(this,c,Lr,Sr,xr,{})}}export{Hr as default,Dr as metadata};
