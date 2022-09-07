import{S as dn,i as ln,s as cn,e as a,k as h,w as b,t as i,M as mn,c as s,d as o,m as f,a as n,x as M,h as d,b as c,N as pn,G as t,g as _,y as A,q as $,o as w,B as V,v as hn,L as xo}from"../../chunks/vendor-hf-doc-builder.js";import{T as wo}from"../../chunks/Tip-hf-doc-builder.js";import{D as Z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as yo}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as He}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Vo}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function fn(x){let l,E,u,p,v;return p=new yo({props:{code:`from transformers import VideoMAEConfig, VideoMAEModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),E=i("Example:"),u=h(),b(p.$$.fragment)},l(r){l=s(r,"P",{});var g=n(l);E=d(g,"Example:"),g.forEach(o),u=f(r),M(p.$$.fragment,r)},m(r,g){_(r,l,g),t(l,E),_(r,u,g),A(p,r,g),v=!0},p:xo,i(r){v||($(p.$$.fragment,r),v=!0)},o(r){w(p.$$.fragment,r),v=!1},d(r){r&&o(l),r&&o(u),V(p,r)}}}function un(x){let l,E;return{c(){l=a("p"),E=i("NumPy arrays are converted to PIL images when resizing, so the most efficient is to pass PIL images.")},l(u){l=s(u,"P",{});var p=n(l);E=d(p,"NumPy arrays are converted to PIL images when resizing, so the most efficient is to pass PIL images."),p.forEach(o)},m(u,p){_(u,l,p),t(l,E)},d(u){u&&o(l)}}}function gn(x){let l,E,u,p,v;return{c(){l=a("p"),E=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),p=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=s(r,"P",{});var g=n(l);E=d(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(g,"CODE",{});var y=n(u);p=d(y,"Module"),y.forEach(o),v=d(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(r,g){_(r,l,g),t(l,E),t(l,u),t(u,p),t(l,v)},d(r){r&&o(l)}}}function _n(x){let l,E,u,p,v;return p=new yo({props:{code:`from decord import VideoReader, cpu
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
[<span class="hljs-number">1</span>, <span class="hljs-number">1568</span>, <span class="hljs-number">768</span>]`}}),{c(){l=a("p"),E=i("Examples:"),u=h(),b(p.$$.fragment)},l(r){l=s(r,"P",{});var g=n(l);E=d(g,"Examples:"),g.forEach(o),u=f(r),M(p.$$.fragment,r)},m(r,g){_(r,l,g),t(l,E),_(r,u,g),A(p,r,g),v=!0},p:xo,i(r){v||($(p.$$.fragment,r),v=!0)},o(r){w(p.$$.fragment,r),v=!1},d(r){r&&o(l),r&&o(u),V(p,r)}}}function vn(x){let l,E,u,p,v;return{c(){l=a("p"),E=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),p=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=s(r,"P",{});var g=n(l);E=d(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(g,"CODE",{});var y=n(u);p=d(y,"Module"),y.forEach(o),v=d(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(r,g){_(r,l,g),t(l,E),t(l,u),t(u,p),t(l,v)},d(r){r&&o(l)}}}function En(x){let l,E,u,p,v;return p=new yo({props:{code:`from transformers import VideoMAEFeatureExtractor, VideoMAEForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){l=a("p"),E=i("Examples:"),u=h(),b(p.$$.fragment)},l(r){l=s(r,"P",{});var g=n(l);E=d(g,"Examples:"),g.forEach(o),u=f(r),M(p.$$.fragment,r)},m(r,g){_(r,l,g),t(l,E),_(r,u,g),A(p,r,g),v=!0},p:xo,i(r){v||($(p.$$.fragment,r),v=!0)},o(r){w(p.$$.fragment,r),v=!1},d(r){r&&o(l),r&&o(u),V(p,r)}}}function bn(x){let l,E,u,p,v;return{c(){l=a("p"),E=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),p=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=s(r,"P",{});var g=n(l);E=d(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(g,"CODE",{});var y=n(u);p=d(y,"Module"),y.forEach(o),v=d(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(r,g){_(r,l,g),t(l,E),t(l,u),t(u,p),t(l,v)},d(r){r&&o(l)}}}function Mn(x){let l,E,u,p,v;return p=new yo({props:{code:`from decord import VideoReader, cpu
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
eating spaghetti`}}),{c(){l=a("p"),E=i("Examples:"),u=h(),b(p.$$.fragment)},l(r){l=s(r,"P",{});var g=n(l);E=d(g,"Examples:"),g.forEach(o),u=f(r),M(p.$$.fragment,r)},m(r,g){_(r,l,g),t(l,E),_(r,u,g),A(p,r,g),v=!0},p:xo,i(r){v||($(p.$$.fragment,r),v=!0)},o(r){w(p.$$.fragment,r),v=!1},d(r){r&&o(l),r&&o(u),V(p,r)}}}function An(x){let l,E,u,p,v,r,g,y,To,Jt,L,X,Mt,Ee,jo,At,ko,Bt,q,Fo,be,Po,Co,Ke,zo,Io,Gt,Ze,qo,Ht,Xe,$t,No,Kt,Ye,So,Zt,Y,Me,Lo,Qe,Do,Oo,Uo,et,tt,Ro,Wo,Xt,Q,vs,Yt,ee,Jo,ot,Bo,Go,Qt,N,Ho,Ae,Ko,Zo,$e,Xo,Yo,eo,D,te,wt,we,Qo,Vt,ea,to,T,Ve,ta,O,oa,at,aa,sa,xe,na,ra,ia,U,da,st,la,ca,nt,ma,pa,ha,oe,oo,R,ae,xt,ye,fa,yt,ua,ao,j,Te,ga,Tt,_a,va,je,Ea,rt,ba,Ma,Aa,S,ke,$a,jt,wa,Va,se,so,W,ne,kt,Fe,xa,Ft,ya,no,C,Pe,Ta,Ce,ja,ze,ka,Fa,Pa,k,Ie,Ca,J,za,it,Ia,qa,Pt,Na,Sa,La,re,Da,ie,ro,B,de,Ct,qe,Oa,zt,Ua,io,z,Ne,Ra,Se,Wa,Le,Ja,Ba,Ga,F,De,Ha,G,Ka,dt,Za,Xa,It,Ya,Qa,es,le,ts,ce,lo,H,me,qt,Oe,os,Nt,as,co,I,Ue,ss,Re,ns,We,rs,is,ds,P,Je,ls,K,cs,lt,ms,ps,St,hs,fs,us,pe,gs,he,mo;return r=new He({}),Ee=new He({}),we=new He({}),Ve=new Z({props:{name:"class transformers.VideoMAEConfig",anchor:"transformers.VideoMAEConfig",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"num_frames",val:" = 16"},{name:"tubelet_size",val:" = 2"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"qkv_bias",val:" = True"},{name:"use_mean_pooling",val:" = True"},{name:"decoder_num_attention_heads",val:" = 6"},{name:"decoder_hidden_size",val:" = 384"},{name:"decoder_num_hidden_layers",val:" = 4"},{name:"decoder_intermediate_size",val:" = 1536"},{name:"norm_pix_loss",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VideoMAEConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
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
Whether to normalize the target patch pixels.`,name:"norm_pix_loss"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/videomae/configuration_videomae.py#L28"}}),oe=new Vo({props:{anchor:"transformers.VideoMAEConfig.example",$$slots:{default:[fn]},$$scope:{ctx:x}}}),ye=new He({}),Te=new Z({props:{name:"class transformers.VideoMAEFeatureExtractor",anchor:"transformers.VideoMAEFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_center_crop",val:" = True"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VideoMAEFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the shorter edge of the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.VideoMAEFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the shorter edge of the input to the given size. Only has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"size"},{anchor:"transformers.VideoMAEFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.VideoMAEFeatureExtractor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to center crop the input to a certain <code>size</code>.`,name:"do_center_crop"},{anchor:"transformers.VideoMAEFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.VideoMAEFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.485, 0.456, 0.406]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.VideoMAEFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.229, 0.224, 0.225]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/videomae/feature_extraction_videomae.py#L30"}}),ke=new Z({props:{name:"__call__",anchor:"transformers.VideoMAEFeatureExtractor.__call__",parameters:[{name:"videos",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VideoMAEFeatureExtractor.__call__.videos",description:`<strong>videos</strong> (<code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>, <code>List[List[PIL.Image.Image]]</code>, <code>List[List[np.ndarrray]]</code>, &#x2014;
<code>List[List[torch.Tensor]]</code>): The video or batch of videos to be prepared. Each video should be a list
of frames, which can be either PIL images or NumPy arrays. In case of NumPy arrays/PyTorch tensors,
each frame should be of shape (H, W, C), where H and W are frame height and width, and C is a number of
channels.`,name:"videos"},{anchor:"transformers.VideoMAEFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/videomae/feature_extraction_videomae.py#L100",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, num_frames,
height, width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),se=new wo({props:{warning:!0,$$slots:{default:[un]},$$scope:{ctx:x}}}),Fe=new He({}),Pe=new Z({props:{name:"class transformers.VideoMAEModel",anchor:"transformers.VideoMAEModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VideoMAEModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEConfig">VideoMAEConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/videomae/modeling_videomae.py#L537"}}),Ie=new Z({props:{name:"forward",anchor:"transformers.VideoMAEModel.forward",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.VideoMAEModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_frames, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEFeatureExtractor">VideoMAEFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEFeatureExtractor.__call__">VideoMAEFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VideoMAEModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),re=new wo({props:{$$slots:{default:[gn]},$$scope:{ctx:x}}}),ie=new Vo({props:{anchor:"transformers.VideoMAEModel.forward.example",$$slots:{default:[_n]},$$scope:{ctx:x}}}),qe=new He({}),Ne=new Z({props:{name:"class transformers.VideoMAEForPreTraining",anchor:"transformers.VideoMAEForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VideoMAEForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEConfig">VideoMAEConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/videomae/modeling_videomae.py#L734"}}),De=new Z({props:{name:"forward",anchor:"transformers.VideoMAEForPreTraining.forward",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:""},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.VideoMAEForPreTraining.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_frames, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEFeatureExtractor">VideoMAEFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEFeatureExtractor.__call__">VideoMAEFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VideoMAEForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),le=new wo({props:{$$slots:{default:[vn]},$$scope:{ctx:x}}}),ce=new Vo({props:{anchor:"transformers.VideoMAEForPreTraining.forward.example",$$slots:{default:[En]},$$scope:{ctx:x}}}),Oe=new He({}),Ue=new Z({props:{name:"class transformers.VideoMAEForVideoClassification",anchor:"transformers.VideoMAEForVideoClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VideoMAEForVideoClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEConfig">VideoMAEConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/videomae/modeling_videomae.py#L905"}}),Je=new Z({props:{name:"forward",anchor:"transformers.VideoMAEForVideoClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.VideoMAEForVideoClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_frames, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEFeatureExtractor">VideoMAEFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEFeatureExtractor.__call__">VideoMAEFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VideoMAEForVideoClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),pe=new wo({props:{$$slots:{default:[bn]},$$scope:{ctx:x}}}),he=new Vo({props:{anchor:"transformers.VideoMAEForVideoClassification.forward.example",$$slots:{default:[Mn]},$$scope:{ctx:x}}}),{c(){l=a("meta"),E=h(),u=a("h1"),p=a("a"),v=a("span"),b(r.$$.fragment),g=h(),y=a("span"),To=i("VideoMAE"),Jt=h(),L=a("h2"),X=a("a"),Mt=a("span"),b(Ee.$$.fragment),jo=h(),At=a("span"),ko=i("Overview"),Bt=h(),q=a("p"),Fo=i("The VideoMAE model was proposed in "),be=a("a"),Po=i("VideoMAE: Masked Autoencoders are Data-Efficient Learners for Self-Supervised Video Pre-Training"),Co=i(` by Zhan Tong, Yibing Song, Jue Wang, Limin Wang.
VideoMAE extends masked auto encoders (`),Ke=a("a"),zo=i("MAE"),Io=i(") to video, claiming state-of-the-art performance on several video classification benchmarks."),Gt=h(),Ze=a("p"),qo=i("The abstract from the paper is the following:"),Ht=h(),Xe=a("p"),$t=a("em"),No=i("Pre-training video transformers on extra large-scale datasets is generally required to achieve premier performance on relatively small datasets. In this paper, we show that video masked autoencoders (VideoMAE) are data-efficient learners for self-supervised video pre-training (SSVP). We are inspired by the recent ImageMAE and propose customized video tube masking and reconstruction. These simple designs turn out to be effective for overcoming information leakage caused by the temporal correlation during video reconstruction. We obtain three important findings on SSVP: (1) An extremely high proportion of masking ratio (i.e., 90% to 95%) still yields favorable performance of VideoMAE. The temporally redundant video content enables higher masking ratio than that of images. (2) VideoMAE achieves impressive results on very small datasets (i.e., around 3k-4k videos) without using any extra data. This is partially ascribed to the challenging task of video reconstruction to enforce high-level structure learning. (3) VideoMAE shows that data quality is more important than data quantity for SSVP. Domain shift between pre-training and target datasets are important issues in SSVP. Notably, our VideoMAE with the vanilla ViT backbone can achieve 83.9% on Kinects-400, 75.3% on Something-Something V2, 90.8% on UCF101, and 61.1% on HMDB51 without using any extra data."),Kt=h(),Ye=a("p"),So=i("Tips:"),Zt=h(),Y=a("ul"),Me=a("li"),Lo=i("One can use "),Qe=a("a"),Do=i("VideoMAEFeatureExtractor"),Oo=i(" to prepare videos for the model. It will resize + normalize all frames of a video for you."),Uo=h(),et=a("li"),tt=a("a"),Ro=i("VideoMAEForPreTraining"),Wo=i(" includes the decoder on top for self-supervised pre-training."),Xt=h(),Q=a("img"),Yt=h(),ee=a("small"),Jo=i("VideoMAE pre-training. Taken from the "),ot=a("a"),Bo=i("original paper"),Go=i("."),Qt=h(),N=a("p"),Ho=i("This model was contributed by "),Ae=a("a"),Ko=i("nielsr"),Zo=i(`.
The original code can be found `),$e=a("a"),Xo=i("here"),Yo=i("."),eo=h(),D=a("h2"),te=a("a"),wt=a("span"),b(we.$$.fragment),Qo=h(),Vt=a("span"),ea=i("VideoMAEConfig"),to=h(),T=a("div"),b(Ve.$$.fragment),ta=h(),O=a("p"),oa=i("This is the configuration class to store the configuration of a "),at=a("a"),aa=i("VideoMAEModel"),sa=i(`. It is used to instantiate a
VideoMAE model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the VideoMAE
`),xe=a("a"),na=i("MCG-NJU/videomae-base"),ra=i(" architecture."),ia=h(),U=a("p"),da=i("Configuration objects inherit from "),st=a("a"),la=i("PretrainedConfig"),ca=i(` and can be used to control the model outputs. Read the
documentation from `),nt=a("a"),ma=i("PretrainedConfig"),pa=i(" for more information."),ha=h(),b(oe.$$.fragment),oo=h(),R=a("h2"),ae=a("a"),xt=a("span"),b(ye.$$.fragment),fa=h(),yt=a("span"),ua=i("VideoMAEFeatureExtractor"),ao=h(),j=a("div"),b(Te.$$.fragment),ga=h(),Tt=a("p"),_a=i("Constructs a VideoMAE feature extractor. This feature extractor can be used to prepare videos for the model."),va=h(),je=a("p"),Ea=i("This feature extractor inherits from "),rt=a("a"),ba=i("FeatureExtractionMixin"),Ma=i(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Aa=h(),S=a("div"),b(ke.$$.fragment),$a=h(),jt=a("p"),wa=i("Main method to prepare for the model one or several video(s)."),Va=h(),b(se.$$.fragment),so=h(),W=a("h2"),ne=a("a"),kt=a("span"),b(Fe.$$.fragment),xa=h(),Ft=a("span"),ya=i("VideoMAEModel"),no=h(),C=a("div"),b(Pe.$$.fragment),Ta=h(),Ce=a("p"),ja=i(`The bare VideoMAE Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ze=a("a"),ka=i("torch.nn.Module"),Fa=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pa=h(),k=a("div"),b(Ie.$$.fragment),Ca=h(),J=a("p"),za=i("The "),it=a("a"),Ia=i("VideoMAEModel"),qa=i(" forward method, overrides the "),Pt=a("code"),Na=i("__call__"),Sa=i(" special method."),La=h(),b(re.$$.fragment),Da=h(),b(ie.$$.fragment),ro=h(),B=a("h2"),de=a("a"),Ct=a("span"),b(qe.$$.fragment),Oa=h(),zt=a("span"),Ua=i("VideoMAEForPreTraining"),io=h(),z=a("div"),b(Ne.$$.fragment),Ra=h(),Se=a("p"),Wa=i(`The VideoMAE Model transformer with the decoder on top for self-supervised pre-training.
This model is a PyTorch `),Le=a("a"),Ja=i("torch.nn.Module"),Ba=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ga=h(),F=a("div"),b(De.$$.fragment),Ha=h(),G=a("p"),Ka=i("The "),dt=a("a"),Za=i("VideoMAEForPreTraining"),Xa=i(" forward method, overrides the "),It=a("code"),Ya=i("__call__"),Qa=i(" special method."),es=h(),b(le.$$.fragment),ts=h(),b(ce.$$.fragment),lo=h(),H=a("h2"),me=a("a"),qt=a("span"),b(Oe.$$.fragment),os=h(),Nt=a("span"),as=i("VideoMAEForVideoClassification"),co=h(),I=a("div"),b(Ue.$$.fragment),ss=h(),Re=a("p"),ns=i(`VideoMAE Model transformer with a video classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.
This model is a PyTorch `),We=a("a"),rs=i("torch.nn.Module"),is=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ds=h(),P=a("div"),b(Je.$$.fragment),ls=h(),K=a("p"),cs=i("The "),lt=a("a"),ms=i("VideoMAEForVideoClassification"),ps=i(" forward method, overrides the "),St=a("code"),hs=i("__call__"),fs=i(" special method."),us=h(),b(pe.$$.fragment),gs=h(),b(he.$$.fragment),this.h()},l(e){const m=mn('[data-svelte="svelte-1phssyn"]',document.head);l=s(m,"META",{name:!0,content:!0}),m.forEach(o),E=f(e),u=s(e,"H1",{class:!0});var Be=n(u);p=s(Be,"A",{id:!0,class:!0,href:!0});var Lt=n(p);v=s(Lt,"SPAN",{});var Dt=n(v);M(r.$$.fragment,Dt),Dt.forEach(o),Lt.forEach(o),g=f(Be),y=s(Be,"SPAN",{});var Ot=n(y);To=d(Ot,"VideoMAE"),Ot.forEach(o),Be.forEach(o),Jt=f(e),L=s(e,"H2",{class:!0});var Ge=n(L);X=s(Ge,"A",{id:!0,class:!0,href:!0});var Ut=n(X);Mt=s(Ut,"SPAN",{});var Rt=n(Mt);M(Ee.$$.fragment,Rt),Rt.forEach(o),Ut.forEach(o),jo=f(Ge),At=s(Ge,"SPAN",{});var Wt=n(At);ko=d(Wt,"Overview"),Wt.forEach(o),Ge.forEach(o),Bt=f(e),q=s(e,"P",{});var ct=n(q);Fo=d(ct,"The VideoMAE model was proposed in "),be=s(ct,"A",{href:!0,rel:!0});var Es=n(be);Po=d(Es,"VideoMAE: Masked Autoencoders are Data-Efficient Learners for Self-Supervised Video Pre-Training"),Es.forEach(o),Co=d(ct,` by Zhan Tong, Yibing Song, Jue Wang, Limin Wang.
VideoMAE extends masked auto encoders (`),Ke=s(ct,"A",{href:!0});var bs=n(Ke);zo=d(bs,"MAE"),bs.forEach(o),Io=d(ct,") to video, claiming state-of-the-art performance on several video classification benchmarks."),ct.forEach(o),Gt=f(e),Ze=s(e,"P",{});var Ms=n(Ze);qo=d(Ms,"The abstract from the paper is the following:"),Ms.forEach(o),Ht=f(e),Xe=s(e,"P",{});var As=n(Xe);$t=s(As,"EM",{});var $s=n($t);No=d($s,"Pre-training video transformers on extra large-scale datasets is generally required to achieve premier performance on relatively small datasets. In this paper, we show that video masked autoencoders (VideoMAE) are data-efficient learners for self-supervised video pre-training (SSVP). We are inspired by the recent ImageMAE and propose customized video tube masking and reconstruction. These simple designs turn out to be effective for overcoming information leakage caused by the temporal correlation during video reconstruction. We obtain three important findings on SSVP: (1) An extremely high proportion of masking ratio (i.e., 90% to 95%) still yields favorable performance of VideoMAE. The temporally redundant video content enables higher masking ratio than that of images. (2) VideoMAE achieves impressive results on very small datasets (i.e., around 3k-4k videos) without using any extra data. This is partially ascribed to the challenging task of video reconstruction to enforce high-level structure learning. (3) VideoMAE shows that data quality is more important than data quantity for SSVP. Domain shift between pre-training and target datasets are important issues in SSVP. Notably, our VideoMAE with the vanilla ViT backbone can achieve 83.9% on Kinects-400, 75.3% on Something-Something V2, 90.8% on UCF101, and 61.1% on HMDB51 without using any extra data."),$s.forEach(o),As.forEach(o),Kt=f(e),Ye=s(e,"P",{});var ws=n(Ye);So=d(ws,"Tips:"),ws.forEach(o),Zt=f(e),Y=s(e,"UL",{});var po=n(Y);Me=s(po,"LI",{});var ho=n(Me);Lo=d(ho,"One can use "),Qe=s(ho,"A",{href:!0});var Vs=n(Qe);Do=d(Vs,"VideoMAEFeatureExtractor"),Vs.forEach(o),Oo=d(ho," to prepare videos for the model. It will resize + normalize all frames of a video for you."),ho.forEach(o),Uo=f(po),et=s(po,"LI",{});var _s=n(et);tt=s(_s,"A",{href:!0});var xs=n(tt);Ro=d(xs,"VideoMAEForPreTraining"),xs.forEach(o),Wo=d(_s," includes the decoder on top for self-supervised pre-training."),_s.forEach(o),po.forEach(o),Xt=f(e),Q=s(e,"IMG",{src:!0,alt:!0,width:!0}),Yt=f(e),ee=s(e,"SMALL",{});var fo=n(ee);Jo=d(fo,"VideoMAE pre-training. Taken from the "),ot=s(fo,"A",{href:!0});var ys=n(ot);Bo=d(ys,"original paper"),ys.forEach(o),Go=d(fo,"."),fo.forEach(o),Qt=f(e),N=s(e,"P",{});var mt=n(N);Ho=d(mt,"This model was contributed by "),Ae=s(mt,"A",{href:!0,rel:!0});var Ts=n(Ae);Ko=d(Ts,"nielsr"),Ts.forEach(o),Zo=d(mt,`.
The original code can be found `),$e=s(mt,"A",{href:!0,rel:!0});var js=n($e);Xo=d(js,"here"),js.forEach(o),Yo=d(mt,"."),mt.forEach(o),eo=f(e),D=s(e,"H2",{class:!0});var uo=n(D);te=s(uo,"A",{id:!0,class:!0,href:!0});var ks=n(te);wt=s(ks,"SPAN",{});var Fs=n(wt);M(we.$$.fragment,Fs),Fs.forEach(o),ks.forEach(o),Qo=f(uo),Vt=s(uo,"SPAN",{});var Ps=n(Vt);ea=d(Ps,"VideoMAEConfig"),Ps.forEach(o),uo.forEach(o),to=f(e),T=s(e,"DIV",{class:!0});var fe=n(T);M(Ve.$$.fragment,fe),ta=f(fe),O=s(fe,"P",{});var pt=n(O);oa=d(pt,"This is the configuration class to store the configuration of a "),at=s(pt,"A",{href:!0});var Cs=n(at);aa=d(Cs,"VideoMAEModel"),Cs.forEach(o),sa=d(pt,`. It is used to instantiate a
VideoMAE model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the VideoMAE
`),xe=s(pt,"A",{href:!0,rel:!0});var zs=n(xe);na=d(zs,"MCG-NJU/videomae-base"),zs.forEach(o),ra=d(pt," architecture."),pt.forEach(o),ia=f(fe),U=s(fe,"P",{});var ht=n(U);da=d(ht,"Configuration objects inherit from "),st=s(ht,"A",{href:!0});var Is=n(st);la=d(Is,"PretrainedConfig"),Is.forEach(o),ca=d(ht,` and can be used to control the model outputs. Read the
documentation from `),nt=s(ht,"A",{href:!0});var qs=n(nt);ma=d(qs,"PretrainedConfig"),qs.forEach(o),pa=d(ht," for more information."),ht.forEach(o),ha=f(fe),M(oe.$$.fragment,fe),fe.forEach(o),oo=f(e),R=s(e,"H2",{class:!0});var go=n(R);ae=s(go,"A",{id:!0,class:!0,href:!0});var Ns=n(ae);xt=s(Ns,"SPAN",{});var Ss=n(xt);M(ye.$$.fragment,Ss),Ss.forEach(o),Ns.forEach(o),fa=f(go),yt=s(go,"SPAN",{});var Ls=n(yt);ua=d(Ls,"VideoMAEFeatureExtractor"),Ls.forEach(o),go.forEach(o),ao=f(e),j=s(e,"DIV",{class:!0});var ue=n(j);M(Te.$$.fragment,ue),ga=f(ue),Tt=s(ue,"P",{});var Ds=n(Tt);_a=d(Ds,"Constructs a VideoMAE feature extractor. This feature extractor can be used to prepare videos for the model."),Ds.forEach(o),va=f(ue),je=s(ue,"P",{});var _o=n(je);Ea=d(_o,"This feature extractor inherits from "),rt=s(_o,"A",{href:!0});var Os=n(rt);ba=d(Os,"FeatureExtractionMixin"),Os.forEach(o),Ma=d(_o,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),_o.forEach(o),Aa=f(ue),S=s(ue,"DIV",{class:!0});var ft=n(S);M(ke.$$.fragment,ft),$a=f(ft),jt=s(ft,"P",{});var Us=n(jt);wa=d(Us,"Main method to prepare for the model one or several video(s)."),Us.forEach(o),Va=f(ft),M(se.$$.fragment,ft),ft.forEach(o),ue.forEach(o),so=f(e),W=s(e,"H2",{class:!0});var vo=n(W);ne=s(vo,"A",{id:!0,class:!0,href:!0});var Rs=n(ne);kt=s(Rs,"SPAN",{});var Ws=n(kt);M(Fe.$$.fragment,Ws),Ws.forEach(o),Rs.forEach(o),xa=f(vo),Ft=s(vo,"SPAN",{});var Js=n(Ft);ya=d(Js,"VideoMAEModel"),Js.forEach(o),vo.forEach(o),no=f(e),C=s(e,"DIV",{class:!0});var ut=n(C);M(Pe.$$.fragment,ut),Ta=f(ut),Ce=s(ut,"P",{});var Eo=n(Ce);ja=d(Eo,`The bare VideoMAE Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ze=s(Eo,"A",{href:!0,rel:!0});var Bs=n(ze);ka=d(Bs,"torch.nn.Module"),Bs.forEach(o),Fa=d(Eo,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Eo.forEach(o),Pa=f(ut),k=s(ut,"DIV",{class:!0});var ge=n(k);M(Ie.$$.fragment,ge),Ca=f(ge),J=s(ge,"P",{});var gt=n(J);za=d(gt,"The "),it=s(gt,"A",{href:!0});var Gs=n(it);Ia=d(Gs,"VideoMAEModel"),Gs.forEach(o),qa=d(gt," forward method, overrides the "),Pt=s(gt,"CODE",{});var Hs=n(Pt);Na=d(Hs,"__call__"),Hs.forEach(o),Sa=d(gt," special method."),gt.forEach(o),La=f(ge),M(re.$$.fragment,ge),Da=f(ge),M(ie.$$.fragment,ge),ge.forEach(o),ut.forEach(o),ro=f(e),B=s(e,"H2",{class:!0});var bo=n(B);de=s(bo,"A",{id:!0,class:!0,href:!0});var Ks=n(de);Ct=s(Ks,"SPAN",{});var Zs=n(Ct);M(qe.$$.fragment,Zs),Zs.forEach(o),Ks.forEach(o),Oa=f(bo),zt=s(bo,"SPAN",{});var Xs=n(zt);Ua=d(Xs,"VideoMAEForPreTraining"),Xs.forEach(o),bo.forEach(o),io=f(e),z=s(e,"DIV",{class:!0});var _t=n(z);M(Ne.$$.fragment,_t),Ra=f(_t),Se=s(_t,"P",{});var Mo=n(Se);Wa=d(Mo,`The VideoMAE Model transformer with the decoder on top for self-supervised pre-training.
This model is a PyTorch `),Le=s(Mo,"A",{href:!0,rel:!0});var Ys=n(Le);Ja=d(Ys,"torch.nn.Module"),Ys.forEach(o),Ba=d(Mo,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Mo.forEach(o),Ga=f(_t),F=s(_t,"DIV",{class:!0});var _e=n(F);M(De.$$.fragment,_e),Ha=f(_e),G=s(_e,"P",{});var vt=n(G);Ka=d(vt,"The "),dt=s(vt,"A",{href:!0});var Qs=n(dt);Za=d(Qs,"VideoMAEForPreTraining"),Qs.forEach(o),Xa=d(vt," forward method, overrides the "),It=s(vt,"CODE",{});var en=n(It);Ya=d(en,"__call__"),en.forEach(o),Qa=d(vt," special method."),vt.forEach(o),es=f(_e),M(le.$$.fragment,_e),ts=f(_e),M(ce.$$.fragment,_e),_e.forEach(o),_t.forEach(o),lo=f(e),H=s(e,"H2",{class:!0});var Ao=n(H);me=s(Ao,"A",{id:!0,class:!0,href:!0});var tn=n(me);qt=s(tn,"SPAN",{});var on=n(qt);M(Oe.$$.fragment,on),on.forEach(o),tn.forEach(o),os=f(Ao),Nt=s(Ao,"SPAN",{});var an=n(Nt);as=d(an,"VideoMAEForVideoClassification"),an.forEach(o),Ao.forEach(o),co=f(e),I=s(e,"DIV",{class:!0});var Et=n(I);M(Ue.$$.fragment,Et),ss=f(Et),Re=s(Et,"P",{});var $o=n(Re);ns=d($o,`VideoMAE Model transformer with a video classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.
This model is a PyTorch `),We=s($o,"A",{href:!0,rel:!0});var sn=n(We);rs=d(sn,"torch.nn.Module"),sn.forEach(o),is=d($o,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$o.forEach(o),ds=f(Et),P=s(Et,"DIV",{class:!0});var ve=n(P);M(Je.$$.fragment,ve),ls=f(ve),K=s(ve,"P",{});var bt=n(K);cs=d(bt,"The "),lt=s(bt,"A",{href:!0});var nn=n(lt);ms=d(nn,"VideoMAEForVideoClassification"),nn.forEach(o),ps=d(bt," forward method, overrides the "),St=s(bt,"CODE",{});var rn=n(St);hs=d(rn,"__call__"),rn.forEach(o),fs=d(bt," special method."),bt.forEach(o),us=f(ve),M(pe.$$.fragment,ve),gs=f(ve),M(he.$$.fragment,ve),ve.forEach(o),Et.forEach(o),this.h()},h(){c(l,"name","hf:doc:metadata"),c(l,"content",JSON.stringify($n)),c(p,"id","videomae"),c(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(p,"href","#videomae"),c(u,"class","relative group"),c(X,"id","overview"),c(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(X,"href","#overview"),c(L,"class","relative group"),c(be,"href","https://arxiv.org/abs/2203.12602"),c(be,"rel","nofollow"),c(Ke,"href","vit_mae"),c(Qe,"href","/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEFeatureExtractor"),c(tt,"href","/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEForPreTraining"),pn(Q.src,vs="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/model_doc/videomae_architecture.jpeg")||c(Q,"src",vs),c(Q,"alt","drawing"),c(Q,"width","600"),c(ot,"href","https://arxiv.org/abs/2203.12602"),c(Ae,"href","https://huggingface.co/nielsr"),c(Ae,"rel","nofollow"),c($e,"href","https://github.com/MCG-NJU/VideoMAE"),c($e,"rel","nofollow"),c(te,"id","transformers.VideoMAEConfig"),c(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(te,"href","#transformers.VideoMAEConfig"),c(D,"class","relative group"),c(at,"href","/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEModel"),c(xe,"href","https://huggingface.co/MCG-NJU/videomae-base"),c(xe,"rel","nofollow"),c(st,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(nt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ae,"id","transformers.VideoMAEFeatureExtractor"),c(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ae,"href","#transformers.VideoMAEFeatureExtractor"),c(R,"class","relative group"),c(rt,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ne,"id","transformers.VideoMAEModel"),c(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ne,"href","#transformers.VideoMAEModel"),c(W,"class","relative group"),c(ze,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ze,"rel","nofollow"),c(it,"href","/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEModel"),c(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(de,"id","transformers.VideoMAEForPreTraining"),c(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(de,"href","#transformers.VideoMAEForPreTraining"),c(B,"class","relative group"),c(Le,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Le,"rel","nofollow"),c(dt,"href","/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEForPreTraining"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(me,"id","transformers.VideoMAEForVideoClassification"),c(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(me,"href","#transformers.VideoMAEForVideoClassification"),c(H,"class","relative group"),c(We,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(We,"rel","nofollow"),c(lt,"href","/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEForVideoClassification"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,m){t(document.head,l),_(e,E,m),_(e,u,m),t(u,p),t(p,v),A(r,v,null),t(u,g),t(u,y),t(y,To),_(e,Jt,m),_(e,L,m),t(L,X),t(X,Mt),A(Ee,Mt,null),t(L,jo),t(L,At),t(At,ko),_(e,Bt,m),_(e,q,m),t(q,Fo),t(q,be),t(be,Po),t(q,Co),t(q,Ke),t(Ke,zo),t(q,Io),_(e,Gt,m),_(e,Ze,m),t(Ze,qo),_(e,Ht,m),_(e,Xe,m),t(Xe,$t),t($t,No),_(e,Kt,m),_(e,Ye,m),t(Ye,So),_(e,Zt,m),_(e,Y,m),t(Y,Me),t(Me,Lo),t(Me,Qe),t(Qe,Do),t(Me,Oo),t(Y,Uo),t(Y,et),t(et,tt),t(tt,Ro),t(et,Wo),_(e,Xt,m),_(e,Q,m),_(e,Yt,m),_(e,ee,m),t(ee,Jo),t(ee,ot),t(ot,Bo),t(ee,Go),_(e,Qt,m),_(e,N,m),t(N,Ho),t(N,Ae),t(Ae,Ko),t(N,Zo),t(N,$e),t($e,Xo),t(N,Yo),_(e,eo,m),_(e,D,m),t(D,te),t(te,wt),A(we,wt,null),t(D,Qo),t(D,Vt),t(Vt,ea),_(e,to,m),_(e,T,m),A(Ve,T,null),t(T,ta),t(T,O),t(O,oa),t(O,at),t(at,aa),t(O,sa),t(O,xe),t(xe,na),t(O,ra),t(T,ia),t(T,U),t(U,da),t(U,st),t(st,la),t(U,ca),t(U,nt),t(nt,ma),t(U,pa),t(T,ha),A(oe,T,null),_(e,oo,m),_(e,R,m),t(R,ae),t(ae,xt),A(ye,xt,null),t(R,fa),t(R,yt),t(yt,ua),_(e,ao,m),_(e,j,m),A(Te,j,null),t(j,ga),t(j,Tt),t(Tt,_a),t(j,va),t(j,je),t(je,Ea),t(je,rt),t(rt,ba),t(je,Ma),t(j,Aa),t(j,S),A(ke,S,null),t(S,$a),t(S,jt),t(jt,wa),t(S,Va),A(se,S,null),_(e,so,m),_(e,W,m),t(W,ne),t(ne,kt),A(Fe,kt,null),t(W,xa),t(W,Ft),t(Ft,ya),_(e,no,m),_(e,C,m),A(Pe,C,null),t(C,Ta),t(C,Ce),t(Ce,ja),t(Ce,ze),t(ze,ka),t(Ce,Fa),t(C,Pa),t(C,k),A(Ie,k,null),t(k,Ca),t(k,J),t(J,za),t(J,it),t(it,Ia),t(J,qa),t(J,Pt),t(Pt,Na),t(J,Sa),t(k,La),A(re,k,null),t(k,Da),A(ie,k,null),_(e,ro,m),_(e,B,m),t(B,de),t(de,Ct),A(qe,Ct,null),t(B,Oa),t(B,zt),t(zt,Ua),_(e,io,m),_(e,z,m),A(Ne,z,null),t(z,Ra),t(z,Se),t(Se,Wa),t(Se,Le),t(Le,Ja),t(Se,Ba),t(z,Ga),t(z,F),A(De,F,null),t(F,Ha),t(F,G),t(G,Ka),t(G,dt),t(dt,Za),t(G,Xa),t(G,It),t(It,Ya),t(G,Qa),t(F,es),A(le,F,null),t(F,ts),A(ce,F,null),_(e,lo,m),_(e,H,m),t(H,me),t(me,qt),A(Oe,qt,null),t(H,os),t(H,Nt),t(Nt,as),_(e,co,m),_(e,I,m),A(Ue,I,null),t(I,ss),t(I,Re),t(Re,ns),t(Re,We),t(We,rs),t(Re,is),t(I,ds),t(I,P),A(Je,P,null),t(P,ls),t(P,K),t(K,cs),t(K,lt),t(lt,ms),t(K,ps),t(K,St),t(St,hs),t(K,fs),t(P,us),A(pe,P,null),t(P,gs),A(he,P,null),mo=!0},p(e,[m]){const Be={};m&2&&(Be.$$scope={dirty:m,ctx:e}),oe.$set(Be);const Lt={};m&2&&(Lt.$$scope={dirty:m,ctx:e}),se.$set(Lt);const Dt={};m&2&&(Dt.$$scope={dirty:m,ctx:e}),re.$set(Dt);const Ot={};m&2&&(Ot.$$scope={dirty:m,ctx:e}),ie.$set(Ot);const Ge={};m&2&&(Ge.$$scope={dirty:m,ctx:e}),le.$set(Ge);const Ut={};m&2&&(Ut.$$scope={dirty:m,ctx:e}),ce.$set(Ut);const Rt={};m&2&&(Rt.$$scope={dirty:m,ctx:e}),pe.$set(Rt);const Wt={};m&2&&(Wt.$$scope={dirty:m,ctx:e}),he.$set(Wt)},i(e){mo||($(r.$$.fragment,e),$(Ee.$$.fragment,e),$(we.$$.fragment,e),$(Ve.$$.fragment,e),$(oe.$$.fragment,e),$(ye.$$.fragment,e),$(Te.$$.fragment,e),$(ke.$$.fragment,e),$(se.$$.fragment,e),$(Fe.$$.fragment,e),$(Pe.$$.fragment,e),$(Ie.$$.fragment,e),$(re.$$.fragment,e),$(ie.$$.fragment,e),$(qe.$$.fragment,e),$(Ne.$$.fragment,e),$(De.$$.fragment,e),$(le.$$.fragment,e),$(ce.$$.fragment,e),$(Oe.$$.fragment,e),$(Ue.$$.fragment,e),$(Je.$$.fragment,e),$(pe.$$.fragment,e),$(he.$$.fragment,e),mo=!0)},o(e){w(r.$$.fragment,e),w(Ee.$$.fragment,e),w(we.$$.fragment,e),w(Ve.$$.fragment,e),w(oe.$$.fragment,e),w(ye.$$.fragment,e),w(Te.$$.fragment,e),w(ke.$$.fragment,e),w(se.$$.fragment,e),w(Fe.$$.fragment,e),w(Pe.$$.fragment,e),w(Ie.$$.fragment,e),w(re.$$.fragment,e),w(ie.$$.fragment,e),w(qe.$$.fragment,e),w(Ne.$$.fragment,e),w(De.$$.fragment,e),w(le.$$.fragment,e),w(ce.$$.fragment,e),w(Oe.$$.fragment,e),w(Ue.$$.fragment,e),w(Je.$$.fragment,e),w(pe.$$.fragment,e),w(he.$$.fragment,e),mo=!1},d(e){o(l),e&&o(E),e&&o(u),V(r),e&&o(Jt),e&&o(L),V(Ee),e&&o(Bt),e&&o(q),e&&o(Gt),e&&o(Ze),e&&o(Ht),e&&o(Xe),e&&o(Kt),e&&o(Ye),e&&o(Zt),e&&o(Y),e&&o(Xt),e&&o(Q),e&&o(Yt),e&&o(ee),e&&o(Qt),e&&o(N),e&&o(eo),e&&o(D),V(we),e&&o(to),e&&o(T),V(Ve),V(oe),e&&o(oo),e&&o(R),V(ye),e&&o(ao),e&&o(j),V(Te),V(ke),V(se),e&&o(so),e&&o(W),V(Fe),e&&o(no),e&&o(C),V(Pe),V(Ie),V(re),V(ie),e&&o(ro),e&&o(B),V(qe),e&&o(io),e&&o(z),V(Ne),V(De),V(le),V(ce),e&&o(lo),e&&o(H),V(Oe),e&&o(co),e&&o(I),V(Ue),V(Je),V(pe),V(he)}}}const $n={local:"videomae",sections:[{local:"overview",title:"Overview"},{local:"transformers.VideoMAEConfig",title:"VideoMAEConfig"},{local:"transformers.VideoMAEFeatureExtractor",title:"VideoMAEFeatureExtractor"},{local:"transformers.VideoMAEModel",title:"VideoMAEModel"},{local:"transformers.VideoMAEForPreTraining",title:"VideoMAEForPreTraining"},{local:"transformers.VideoMAEForVideoClassification",title:"VideoMAEForVideoClassification"}],title:"VideoMAE"};function wn(x){return hn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Fn extends dn{constructor(l){super();ln(this,l,wn,An,cn,{})}}export{Fn as default,$n as metadata};
