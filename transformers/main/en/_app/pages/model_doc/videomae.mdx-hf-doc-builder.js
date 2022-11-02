import{S as Zs,i as Qs,s as Xs,e as s,k as p,w as E,t as i,M as en,c as n,d as t,m as h,a as r,x as M,h as d,b as l,N as on,G as o,g,y as A,q as $,o as w,B as V,v as tn,L as Et}from"../../chunks/vendor-hf-doc-builder.js";import{T as is}from"../../chunks/Tip-hf-doc-builder.js";import{D as K}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Mt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ge}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as bt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function an(y){let c,b,_,f,v;return f=new Mt({props:{code:`from transformers import VideoMAEConfig, VideoMAEModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=s("p"),b=i("Example:"),_=p(),E(f.$$.fragment)},l(a){c=n(a,"P",{});var u=r(c);b=d(u,"Example:"),u.forEach(t),_=h(a),M(f.$$.fragment,a)},m(a,u){g(a,c,u),o(c,b),g(a,_,u),A(f,a,u),v=!0},p:Et,i(a){v||($(f.$$.fragment,a),v=!0)},o(a){w(f.$$.fragment,a),v=!1},d(a){a&&t(c),a&&t(_),V(f,a)}}}function sn(y){let c,b,_,f,v;return{c(){c=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){c=n(a,"P",{});var u=r(c);b=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n(u,"CODE",{});var x=r(_);f=d(x,"Module"),x.forEach(t),v=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(a,u){g(a,c,u),o(c,b),o(c,_),o(_,f),o(c,v)},d(a){a&&t(c)}}}function nn(y){let c,b,_,f,v;return f=new Mt({props:{code:`from decord import VideoReader, cpu
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
[<span class="hljs-number">1</span>, <span class="hljs-number">1568</span>, <span class="hljs-number">768</span>]`}}),{c(){c=s("p"),b=i("Examples:"),_=p(),E(f.$$.fragment)},l(a){c=n(a,"P",{});var u=r(c);b=d(u,"Examples:"),u.forEach(t),_=h(a),M(f.$$.fragment,a)},m(a,u){g(a,c,u),o(c,b),g(a,_,u),A(f,a,u),v=!0},p:Et,i(a){v||($(f.$$.fragment,a),v=!0)},o(a){w(f.$$.fragment,a),v=!1},d(a){a&&t(c),a&&t(_),V(f,a)}}}function rn(y){let c,b,_,f,v;return{c(){c=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){c=n(a,"P",{});var u=r(c);b=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n(u,"CODE",{});var x=r(_);f=d(x,"Module"),x.forEach(t),v=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(a,u){g(a,c,u),o(c,b),o(c,_),o(_,f),o(c,v)},d(a){a&&t(c)}}}function dn(y){let c,b,_,f,v;return f=new Mt({props:{code:`from transformers import VideoMAEFeatureExtractor, VideoMAEForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){c=s("p"),b=i("Examples:"),_=p(),E(f.$$.fragment)},l(a){c=n(a,"P",{});var u=r(c);b=d(u,"Examples:"),u.forEach(t),_=h(a),M(f.$$.fragment,a)},m(a,u){g(a,c,u),o(c,b),g(a,_,u),A(f,a,u),v=!0},p:Et,i(a){v||($(f.$$.fragment,a),v=!0)},o(a){w(f.$$.fragment,a),v=!1},d(a){a&&t(c),a&&t(_),V(f,a)}}}function ln(y){let c,b,_,f,v;return{c(){c=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){c=n(a,"P",{});var u=r(c);b=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n(u,"CODE",{});var x=r(_);f=d(x,"Module"),x.forEach(t),v=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(a,u){g(a,c,u),o(c,b),o(c,_),o(_,f),o(c,v)},d(a){a&&t(c)}}}function cn(y){let c,b,_,f,v;return f=new Mt({props:{code:`from decord import VideoReader, cpu
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
eating spaghetti`}}),{c(){c=s("p"),b=i("Examples:"),_=p(),E(f.$$.fragment)},l(a){c=n(a,"P",{});var u=r(c);b=d(u,"Examples:"),u.forEach(t),_=h(a),M(f.$$.fragment,a)},m(a,u){g(a,c,u),o(c,b),g(a,_,u),A(f,a,u),v=!0},p:Et,i(a){v||($(f.$$.fragment,a),v=!0)},o(a){w(f.$$.fragment,a),v=!1},d(a){a&&t(c),a&&t(_),V(f,a)}}}function mn(y){let c,b,_,f,v,a,u,x,At,Oo,N,Y,vo,_e,$t,bo,wt,Uo,I,Vt,ve,yt,xt,Je,Tt,jt,Wo,He,kt,Ro,Be,Eo,Pt,Go,Ke,Ct,Jo,Z,be,Ft,Ye,zt,qt,It,Ze,Qe,St,Nt,Ho,Q,ds,Bo,X,Dt,Xe,Lt,Ot,Ko,S,Ut,Ee,Wt,Rt,Me,Gt,Jt,Yo,D,ee,Mo,Ae,Ht,Ao,Bt,Zo,T,$e,Kt,L,Yt,eo,Zt,Qt,we,Xt,ea,oa,O,ta,oo,aa,sa,to,na,ra,ia,oe,Qo,U,te,$o,Ve,da,wo,la,Xo,C,ye,ca,Vo,ma,pa,ae,xe,ha,yo,fa,et,W,se,xo,Te,ua,To,ga,ot,F,je,_a,ke,va,Pe,ba,Ea,Ma,j,Ce,Aa,R,$a,ao,wa,Va,jo,ya,xa,Ta,ne,ja,re,tt,G,ie,ko,Fe,ka,Po,Pa,at,z,ze,Ca,qe,Fa,Ie,za,qa,Ia,k,Se,Sa,J,Na,so,Da,La,Co,Oa,Ua,Wa,de,Ra,le,st,H,ce,Fo,Ne,Ga,zo,Ja,nt,q,De,Ha,Le,Ba,Oe,Ka,Ya,Za,P,Ue,Qa,B,Xa,no,es,os,qo,ts,as,ss,me,ns,pe,rt;return a=new Ge({}),_e=new Ge({}),Ae=new Ge({}),$e=new K({props:{name:"class transformers.VideoMAEConfig",anchor:"transformers.VideoMAEConfig",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"num_frames",val:" = 16"},{name:"tubelet_size",val:" = 2"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"qkv_bias",val:" = True"},{name:"use_mean_pooling",val:" = True"},{name:"decoder_num_attention_heads",val:" = 6"},{name:"decoder_hidden_size",val:" = 384"},{name:"decoder_num_hidden_layers",val:" = 4"},{name:"decoder_intermediate_size",val:" = 1536"},{name:"norm_pix_loss",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VideoMAEConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
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
Whether to normalize the target patch pixels.`,name:"norm_pix_loss"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/videomae/configuration_videomae.py#L28"}}),oe=new bt({props:{anchor:"transformers.VideoMAEConfig.example",$$slots:{default:[an]},$$scope:{ctx:y}}}),Ve=new Ge({}),ye=new K({props:{name:"class transformers.models.videomae.image_processing_videomae.VideoMAEImageProcessor",anchor:"transformers.models.videomae.image_processing_videomae.VideoMAEImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BILINEAR: 2>"},{name:"do_center_crop",val:": bool = True"},{name:"crop_size",val:": typing.Dict[str, int] = None"},{name:"do_rescale",val:": bool = True"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.models.videomae.image_processing_videomae.VideoMAEImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to the specified <code>size</code>. Can be overridden by the
<code>do_resize</code> parameter in the <code>preprocess</code> method.`,name:"do_resize"},{anchor:"transformers.models.videomae.image_processing_videomae.VideoMAEImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;shortest_edge&quot; -- 224}</code>):
Size of the output image after resizing. The shortest edge of the image will be resized to
<code>size[&quot;shortest_edge&quot;]</code> while maintaining the aspect ratio of the original image. Can be overriden by
<code>size</code> in the <code>preprocess</code> method.`,name:"size"},{anchor:"transformers.models.videomae.image_processing_videomae.VideoMAEImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BILINEAR</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by the <code>resample</code> parameter in the
<code>preprocess</code> method.`,name:"resample"},{anchor:"transformers.models.videomae.image_processing_videomae.VideoMAEImageProcessor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to center crop the image to the specified <code>crop_size</code>. Can be overridden by the <code>do_center_crop</code>
parameter in the <code>preprocess</code> method.`,name:"do_center_crop"},{anchor:"transformers.models.videomae.image_processing_videomae.VideoMAEImageProcessor.crop_size",description:`<strong>crop_size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>{&quot;height&quot; -- 224, &quot;width&quot;: 224}</code>):
Size of the image after applying the center crop. Can be overridden by the <code>crop_size</code> parameter in the
<code>preprocess</code> method.`,name:"crop_size"},{anchor:"transformers.models.videomae.image_processing_videomae.VideoMAEImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to rescale the image by the specified scale <code>rescale_factor</code>. Can be overridden by the <code>do_rescale</code>
parameter in the <code>preprocess</code> method.`,name:"do_rescale"},{anchor:"transformers.models.videomae.image_processing_videomae.VideoMAEImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>int</code> or <code>float</code>, <em>optional</em>, defaults to <code>1/255</code>) &#x2014;
Defines the scale factor to use if rescaling the image. Can be overridden by the <code>rescale_factor</code> parameter
in the <code>preprocess</code> method.`,name:"rescale_factor"},{anchor:"transformers.models.videomae.image_processing_videomae.VideoMAEImageProcessor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize the image. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code>
method.`,name:"do_normalize"},{anchor:"transformers.models.videomae.image_processing_videomae.VideoMAEImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.models.videomae.image_processing_videomae.VideoMAEImageProcessor.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/videomae/image_processing_videomae.py#L66"}}),xe=new K({props:{name:"__call__",anchor:"transformers.models.videomae.image_processing_videomae.VideoMAEImageProcessor.__call__",parameters:[{name:"images",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/image_processing_utils.py#L52"}}),Te=new Ge({}),je=new K({props:{name:"class transformers.VideoMAEModel",anchor:"transformers.VideoMAEModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VideoMAEModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEConfig">VideoMAEConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/videomae/modeling_videomae.py#L537"}}),Ce=new K({props:{name:"forward",anchor:"transformers.VideoMAEModel.forward",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.VideoMAEModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_frames, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/videomae#transformers.models.videomae.image_processing_videomae.VideoMAEImageProcessor">VideoMAEFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">VideoMAEFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VideoMAEModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),ne=new is({props:{$$slots:{default:[sn]},$$scope:{ctx:y}}}),re=new bt({props:{anchor:"transformers.VideoMAEModel.forward.example",$$slots:{default:[nn]},$$scope:{ctx:y}}}),Fe=new Ge({}),ze=new K({props:{name:"class transformers.VideoMAEForPreTraining",anchor:"transformers.VideoMAEForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VideoMAEForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEConfig">VideoMAEConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/videomae/modeling_videomae.py#L734"}}),Se=new K({props:{name:"forward",anchor:"transformers.VideoMAEForPreTraining.forward",parameters:[{name:"pixel_values",val:""},{name:"bool_masked_pos",val:""},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.VideoMAEForPreTraining.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_frames, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/videomae#transformers.models.videomae.image_processing_videomae.VideoMAEImageProcessor">VideoMAEFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">VideoMAEFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VideoMAEForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),de=new is({props:{$$slots:{default:[rn]},$$scope:{ctx:y}}}),le=new bt({props:{anchor:"transformers.VideoMAEForPreTraining.forward.example",$$slots:{default:[dn]},$$scope:{ctx:y}}}),Ne=new Ge({}),De=new K({props:{name:"class transformers.VideoMAEForVideoClassification",anchor:"transformers.VideoMAEForVideoClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VideoMAEForVideoClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEConfig">VideoMAEConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/videomae/modeling_videomae.py#L905"}}),Ue=new K({props:{name:"forward",anchor:"transformers.VideoMAEForVideoClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.VideoMAEForVideoClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_frames, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/videomae#transformers.models.videomae.image_processing_videomae.VideoMAEImageProcessor">VideoMAEFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">VideoMAEFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VideoMAEForVideoClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),me=new is({props:{$$slots:{default:[ln]},$$scope:{ctx:y}}}),pe=new bt({props:{anchor:"transformers.VideoMAEForVideoClassification.forward.example",$$slots:{default:[cn]},$$scope:{ctx:y}}}),{c(){c=s("meta"),b=p(),_=s("h1"),f=s("a"),v=s("span"),E(a.$$.fragment),u=p(),x=s("span"),At=i("VideoMAE"),Oo=p(),N=s("h2"),Y=s("a"),vo=s("span"),E(_e.$$.fragment),$t=p(),bo=s("span"),wt=i("Overview"),Uo=p(),I=s("p"),Vt=i("The VideoMAE model was proposed in "),ve=s("a"),yt=i("VideoMAE: Masked Autoencoders are Data-Efficient Learners for Self-Supervised Video Pre-Training"),xt=i(` by Zhan Tong, Yibing Song, Jue Wang, Limin Wang.
VideoMAE extends masked auto encoders (`),Je=s("a"),Tt=i("MAE"),jt=i(") to video, claiming state-of-the-art performance on several video classification benchmarks."),Wo=p(),He=s("p"),kt=i("The abstract from the paper is the following:"),Ro=p(),Be=s("p"),Eo=s("em"),Pt=i("Pre-training video transformers on extra large-scale datasets is generally required to achieve premier performance on relatively small datasets. In this paper, we show that video masked autoencoders (VideoMAE) are data-efficient learners for self-supervised video pre-training (SSVP). We are inspired by the recent ImageMAE and propose customized video tube masking and reconstruction. These simple designs turn out to be effective for overcoming information leakage caused by the temporal correlation during video reconstruction. We obtain three important findings on SSVP: (1) An extremely high proportion of masking ratio (i.e., 90% to 95%) still yields favorable performance of VideoMAE. The temporally redundant video content enables higher masking ratio than that of images. (2) VideoMAE achieves impressive results on very small datasets (i.e., around 3k-4k videos) without using any extra data. This is partially ascribed to the challenging task of video reconstruction to enforce high-level structure learning. (3) VideoMAE shows that data quality is more important than data quantity for SSVP. Domain shift between pre-training and target datasets are important issues in SSVP. Notably, our VideoMAE with the vanilla ViT backbone can achieve 83.9% on Kinects-400, 75.3% on Something-Something V2, 90.8% on UCF101, and 61.1% on HMDB51 without using any extra data."),Go=p(),Ke=s("p"),Ct=i("Tips:"),Jo=p(),Z=s("ul"),be=s("li"),Ft=i("One can use "),Ye=s("a"),zt=i("VideoMAEFeatureExtractor"),qt=i(" to prepare videos for the model. It will resize + normalize all frames of a video for you."),It=p(),Ze=s("li"),Qe=s("a"),St=i("VideoMAEForPreTraining"),Nt=i(" includes the decoder on top for self-supervised pre-training."),Ho=p(),Q=s("img"),Bo=p(),X=s("small"),Dt=i("VideoMAE pre-training. Taken from the "),Xe=s("a"),Lt=i("original paper"),Ot=i("."),Ko=p(),S=s("p"),Ut=i("This model was contributed by "),Ee=s("a"),Wt=i("nielsr"),Rt=i(`.
The original code can be found `),Me=s("a"),Gt=i("here"),Jt=i("."),Yo=p(),D=s("h2"),ee=s("a"),Mo=s("span"),E(Ae.$$.fragment),Ht=p(),Ao=s("span"),Bt=i("VideoMAEConfig"),Zo=p(),T=s("div"),E($e.$$.fragment),Kt=p(),L=s("p"),Yt=i("This is the configuration class to store the configuration of a "),eo=s("a"),Zt=i("VideoMAEModel"),Qt=i(`. It is used to instantiate a
VideoMAE model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the VideoMAE
`),we=s("a"),Xt=i("MCG-NJU/videomae-base"),ea=i(" architecture."),oa=p(),O=s("p"),ta=i("Configuration objects inherit from "),oo=s("a"),aa=i("PretrainedConfig"),sa=i(` and can be used to control the model outputs. Read the
documentation from `),to=s("a"),na=i("PretrainedConfig"),ra=i(" for more information."),ia=p(),E(oe.$$.fragment),Qo=p(),U=s("h2"),te=s("a"),$o=s("span"),E(Ve.$$.fragment),da=p(),wo=s("span"),la=i("VideoMAEFeatureExtractor"),Xo=p(),C=s("div"),E(ye.$$.fragment),ca=p(),Vo=s("p"),ma=i("Constructs a VideoMAE image processor."),pa=p(),ae=s("div"),E(xe.$$.fragment),ha=p(),yo=s("p"),fa=i("Preprocess an image or a batch of images."),et=p(),W=s("h2"),se=s("a"),xo=s("span"),E(Te.$$.fragment),ua=p(),To=s("span"),ga=i("VideoMAEModel"),ot=p(),F=s("div"),E(je.$$.fragment),_a=p(),ke=s("p"),va=i(`The bare VideoMAE Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Pe=s("a"),ba=i("torch.nn.Module"),Ea=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ma=p(),j=s("div"),E(Ce.$$.fragment),Aa=p(),R=s("p"),$a=i("The "),ao=s("a"),wa=i("VideoMAEModel"),Va=i(" forward method, overrides the "),jo=s("code"),ya=i("__call__"),xa=i(" special method."),Ta=p(),E(ne.$$.fragment),ja=p(),E(re.$$.fragment),tt=p(),G=s("h2"),ie=s("a"),ko=s("span"),E(Fe.$$.fragment),ka=p(),Po=s("span"),Pa=i("VideoMAEForPreTraining"),at=p(),z=s("div"),E(ze.$$.fragment),Ca=p(),qe=s("p"),Fa=i(`The VideoMAE Model transformer with the decoder on top for self-supervised pre-training.
This model is a PyTorch `),Ie=s("a"),za=i("torch.nn.Module"),qa=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ia=p(),k=s("div"),E(Se.$$.fragment),Sa=p(),J=s("p"),Na=i("The "),so=s("a"),Da=i("VideoMAEForPreTraining"),La=i(" forward method, overrides the "),Co=s("code"),Oa=i("__call__"),Ua=i(" special method."),Wa=p(),E(de.$$.fragment),Ra=p(),E(le.$$.fragment),st=p(),H=s("h2"),ce=s("a"),Fo=s("span"),E(Ne.$$.fragment),Ga=p(),zo=s("span"),Ja=i("VideoMAEForVideoClassification"),nt=p(),q=s("div"),E(De.$$.fragment),Ha=p(),Le=s("p"),Ba=i(`VideoMAE Model transformer with a video classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.
This model is a PyTorch `),Oe=s("a"),Ka=i("torch.nn.Module"),Ya=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Za=p(),P=s("div"),E(Ue.$$.fragment),Qa=p(),B=s("p"),Xa=i("The "),no=s("a"),es=i("VideoMAEForVideoClassification"),os=i(" forward method, overrides the "),qo=s("code"),ts=i("__call__"),as=i(" special method."),ss=p(),E(me.$$.fragment),ns=p(),E(pe.$$.fragment),this.h()},l(e){const m=en('[data-svelte="svelte-1phssyn"]',document.head);c=n(m,"META",{name:!0,content:!0}),m.forEach(t),b=h(e),_=n(e,"H1",{class:!0});var We=r(_);f=n(We,"A",{id:!0,class:!0,href:!0});var Io=r(f);v=n(Io,"SPAN",{});var So=r(v);M(a.$$.fragment,So),So.forEach(t),Io.forEach(t),u=h(We),x=n(We,"SPAN",{});var No=r(x);At=d(No,"VideoMAE"),No.forEach(t),We.forEach(t),Oo=h(e),N=n(e,"H2",{class:!0});var Re=r(N);Y=n(Re,"A",{id:!0,class:!0,href:!0});var Do=r(Y);vo=n(Do,"SPAN",{});var Lo=r(vo);M(_e.$$.fragment,Lo),Lo.forEach(t),Do.forEach(t),$t=h(Re),bo=n(Re,"SPAN",{});var ls=r(bo);wt=d(ls,"Overview"),ls.forEach(t),Re.forEach(t),Uo=h(e),I=n(e,"P",{});var ro=r(I);Vt=d(ro,"The VideoMAE model was proposed in "),ve=n(ro,"A",{href:!0,rel:!0});var cs=r(ve);yt=d(cs,"VideoMAE: Masked Autoencoders are Data-Efficient Learners for Self-Supervised Video Pre-Training"),cs.forEach(t),xt=d(ro,` by Zhan Tong, Yibing Song, Jue Wang, Limin Wang.
VideoMAE extends masked auto encoders (`),Je=n(ro,"A",{href:!0});var ms=r(Je);Tt=d(ms,"MAE"),ms.forEach(t),jt=d(ro,") to video, claiming state-of-the-art performance on several video classification benchmarks."),ro.forEach(t),Wo=h(e),He=n(e,"P",{});var ps=r(He);kt=d(ps,"The abstract from the paper is the following:"),ps.forEach(t),Ro=h(e),Be=n(e,"P",{});var hs=r(Be);Eo=n(hs,"EM",{});var fs=r(Eo);Pt=d(fs,"Pre-training video transformers on extra large-scale datasets is generally required to achieve premier performance on relatively small datasets. In this paper, we show that video masked autoencoders (VideoMAE) are data-efficient learners for self-supervised video pre-training (SSVP). We are inspired by the recent ImageMAE and propose customized video tube masking and reconstruction. These simple designs turn out to be effective for overcoming information leakage caused by the temporal correlation during video reconstruction. We obtain three important findings on SSVP: (1) An extremely high proportion of masking ratio (i.e., 90% to 95%) still yields favorable performance of VideoMAE. The temporally redundant video content enables higher masking ratio than that of images. (2) VideoMAE achieves impressive results on very small datasets (i.e., around 3k-4k videos) without using any extra data. This is partially ascribed to the challenging task of video reconstruction to enforce high-level structure learning. (3) VideoMAE shows that data quality is more important than data quantity for SSVP. Domain shift between pre-training and target datasets are important issues in SSVP. Notably, our VideoMAE with the vanilla ViT backbone can achieve 83.9% on Kinects-400, 75.3% on Something-Something V2, 90.8% on UCF101, and 61.1% on HMDB51 without using any extra data."),fs.forEach(t),hs.forEach(t),Go=h(e),Ke=n(e,"P",{});var us=r(Ke);Ct=d(us,"Tips:"),us.forEach(t),Jo=h(e),Z=n(e,"UL",{});var it=r(Z);be=n(it,"LI",{});var dt=r(be);Ft=d(dt,"One can use "),Ye=n(dt,"A",{href:!0});var gs=r(Ye);zt=d(gs,"VideoMAEFeatureExtractor"),gs.forEach(t),qt=d(dt," to prepare videos for the model. It will resize + normalize all frames of a video for you."),dt.forEach(t),It=h(it),Ze=n(it,"LI",{});var rs=r(Ze);Qe=n(rs,"A",{href:!0});var _s=r(Qe);St=d(_s,"VideoMAEForPreTraining"),_s.forEach(t),Nt=d(rs," includes the decoder on top for self-supervised pre-training."),rs.forEach(t),it.forEach(t),Ho=h(e),Q=n(e,"IMG",{src:!0,alt:!0,width:!0}),Bo=h(e),X=n(e,"SMALL",{});var lt=r(X);Dt=d(lt,"VideoMAE pre-training. Taken from the "),Xe=n(lt,"A",{href:!0});var vs=r(Xe);Lt=d(vs,"original paper"),vs.forEach(t),Ot=d(lt,"."),lt.forEach(t),Ko=h(e),S=n(e,"P",{});var io=r(S);Ut=d(io,"This model was contributed by "),Ee=n(io,"A",{href:!0,rel:!0});var bs=r(Ee);Wt=d(bs,"nielsr"),bs.forEach(t),Rt=d(io,`.
The original code can be found `),Me=n(io,"A",{href:!0,rel:!0});var Es=r(Me);Gt=d(Es,"here"),Es.forEach(t),Jt=d(io,"."),io.forEach(t),Yo=h(e),D=n(e,"H2",{class:!0});var ct=r(D);ee=n(ct,"A",{id:!0,class:!0,href:!0});var Ms=r(ee);Mo=n(Ms,"SPAN",{});var As=r(Mo);M(Ae.$$.fragment,As),As.forEach(t),Ms.forEach(t),Ht=h(ct),Ao=n(ct,"SPAN",{});var $s=r(Ao);Bt=d($s,"VideoMAEConfig"),$s.forEach(t),ct.forEach(t),Zo=h(e),T=n(e,"DIV",{class:!0});var he=r(T);M($e.$$.fragment,he),Kt=h(he),L=n(he,"P",{});var lo=r(L);Yt=d(lo,"This is the configuration class to store the configuration of a "),eo=n(lo,"A",{href:!0});var ws=r(eo);Zt=d(ws,"VideoMAEModel"),ws.forEach(t),Qt=d(lo,`. It is used to instantiate a
VideoMAE model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the VideoMAE
`),we=n(lo,"A",{href:!0,rel:!0});var Vs=r(we);Xt=d(Vs,"MCG-NJU/videomae-base"),Vs.forEach(t),ea=d(lo," architecture."),lo.forEach(t),oa=h(he),O=n(he,"P",{});var co=r(O);ta=d(co,"Configuration objects inherit from "),oo=n(co,"A",{href:!0});var ys=r(oo);aa=d(ys,"PretrainedConfig"),ys.forEach(t),sa=d(co,` and can be used to control the model outputs. Read the
documentation from `),to=n(co,"A",{href:!0});var xs=r(to);na=d(xs,"PretrainedConfig"),xs.forEach(t),ra=d(co," for more information."),co.forEach(t),ia=h(he),M(oe.$$.fragment,he),he.forEach(t),Qo=h(e),U=n(e,"H2",{class:!0});var mt=r(U);te=n(mt,"A",{id:!0,class:!0,href:!0});var Ts=r(te);$o=n(Ts,"SPAN",{});var js=r($o);M(Ve.$$.fragment,js),js.forEach(t),Ts.forEach(t),da=h(mt),wo=n(mt,"SPAN",{});var ks=r(wo);la=d(ks,"VideoMAEFeatureExtractor"),ks.forEach(t),mt.forEach(t),Xo=h(e),C=n(e,"DIV",{class:!0});var mo=r(C);M(ye.$$.fragment,mo),ca=h(mo),Vo=n(mo,"P",{});var Ps=r(Vo);ma=d(Ps,"Constructs a VideoMAE image processor."),Ps.forEach(t),pa=h(mo),ae=n(mo,"DIV",{class:!0});var pt=r(ae);M(xe.$$.fragment,pt),ha=h(pt),yo=n(pt,"P",{});var Cs=r(yo);fa=d(Cs,"Preprocess an image or a batch of images."),Cs.forEach(t),pt.forEach(t),mo.forEach(t),et=h(e),W=n(e,"H2",{class:!0});var ht=r(W);se=n(ht,"A",{id:!0,class:!0,href:!0});var Fs=r(se);xo=n(Fs,"SPAN",{});var zs=r(xo);M(Te.$$.fragment,zs),zs.forEach(t),Fs.forEach(t),ua=h(ht),To=n(ht,"SPAN",{});var qs=r(To);ga=d(qs,"VideoMAEModel"),qs.forEach(t),ht.forEach(t),ot=h(e),F=n(e,"DIV",{class:!0});var po=r(F);M(je.$$.fragment,po),_a=h(po),ke=n(po,"P",{});var ft=r(ke);va=d(ft,`The bare VideoMAE Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Pe=n(ft,"A",{href:!0,rel:!0});var Is=r(Pe);ba=d(Is,"torch.nn.Module"),Is.forEach(t),Ea=d(ft,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ft.forEach(t),Ma=h(po),j=n(po,"DIV",{class:!0});var fe=r(j);M(Ce.$$.fragment,fe),Aa=h(fe),R=n(fe,"P",{});var ho=r(R);$a=d(ho,"The "),ao=n(ho,"A",{href:!0});var Ss=r(ao);wa=d(Ss,"VideoMAEModel"),Ss.forEach(t),Va=d(ho," forward method, overrides the "),jo=n(ho,"CODE",{});var Ns=r(jo);ya=d(Ns,"__call__"),Ns.forEach(t),xa=d(ho," special method."),ho.forEach(t),Ta=h(fe),M(ne.$$.fragment,fe),ja=h(fe),M(re.$$.fragment,fe),fe.forEach(t),po.forEach(t),tt=h(e),G=n(e,"H2",{class:!0});var ut=r(G);ie=n(ut,"A",{id:!0,class:!0,href:!0});var Ds=r(ie);ko=n(Ds,"SPAN",{});var Ls=r(ko);M(Fe.$$.fragment,Ls),Ls.forEach(t),Ds.forEach(t),ka=h(ut),Po=n(ut,"SPAN",{});var Os=r(Po);Pa=d(Os,"VideoMAEForPreTraining"),Os.forEach(t),ut.forEach(t),at=h(e),z=n(e,"DIV",{class:!0});var fo=r(z);M(ze.$$.fragment,fo),Ca=h(fo),qe=n(fo,"P",{});var gt=r(qe);Fa=d(gt,`The VideoMAE Model transformer with the decoder on top for self-supervised pre-training.
This model is a PyTorch `),Ie=n(gt,"A",{href:!0,rel:!0});var Us=r(Ie);za=d(Us,"torch.nn.Module"),Us.forEach(t),qa=d(gt,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),gt.forEach(t),Ia=h(fo),k=n(fo,"DIV",{class:!0});var ue=r(k);M(Se.$$.fragment,ue),Sa=h(ue),J=n(ue,"P",{});var uo=r(J);Na=d(uo,"The "),so=n(uo,"A",{href:!0});var Ws=r(so);Da=d(Ws,"VideoMAEForPreTraining"),Ws.forEach(t),La=d(uo," forward method, overrides the "),Co=n(uo,"CODE",{});var Rs=r(Co);Oa=d(Rs,"__call__"),Rs.forEach(t),Ua=d(uo," special method."),uo.forEach(t),Wa=h(ue),M(de.$$.fragment,ue),Ra=h(ue),M(le.$$.fragment,ue),ue.forEach(t),fo.forEach(t),st=h(e),H=n(e,"H2",{class:!0});var _t=r(H);ce=n(_t,"A",{id:!0,class:!0,href:!0});var Gs=r(ce);Fo=n(Gs,"SPAN",{});var Js=r(Fo);M(Ne.$$.fragment,Js),Js.forEach(t),Gs.forEach(t),Ga=h(_t),zo=n(_t,"SPAN",{});var Hs=r(zo);Ja=d(Hs,"VideoMAEForVideoClassification"),Hs.forEach(t),_t.forEach(t),nt=h(e),q=n(e,"DIV",{class:!0});var go=r(q);M(De.$$.fragment,go),Ha=h(go),Le=n(go,"P",{});var vt=r(Le);Ba=d(vt,`VideoMAE Model transformer with a video classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.
This model is a PyTorch `),Oe=n(vt,"A",{href:!0,rel:!0});var Bs=r(Oe);Ka=d(Bs,"torch.nn.Module"),Bs.forEach(t),Ya=d(vt,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),vt.forEach(t),Za=h(go),P=n(go,"DIV",{class:!0});var ge=r(P);M(Ue.$$.fragment,ge),Qa=h(ge),B=n(ge,"P",{});var _o=r(B);Xa=d(_o,"The "),no=n(_o,"A",{href:!0});var Ks=r(no);es=d(Ks,"VideoMAEForVideoClassification"),Ks.forEach(t),os=d(_o," forward method, overrides the "),qo=n(_o,"CODE",{});var Ys=r(qo);ts=d(Ys,"__call__"),Ys.forEach(t),as=d(_o," special method."),_o.forEach(t),ss=h(ge),M(me.$$.fragment,ge),ns=h(ge),M(pe.$$.fragment,ge),ge.forEach(t),go.forEach(t),this.h()},h(){l(c,"name","hf:doc:metadata"),l(c,"content",JSON.stringify(pn)),l(f,"id","videomae"),l(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(f,"href","#videomae"),l(_,"class","relative group"),l(Y,"id","overview"),l(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Y,"href","#overview"),l(N,"class","relative group"),l(ve,"href","https://arxiv.org/abs/2203.12602"),l(ve,"rel","nofollow"),l(Je,"href","vit_mae"),l(Ye,"href","/docs/transformers/main/en/model_doc/videomae#transformers.models.videomae.image_processing_videomae.VideoMAEImageProcessor"),l(Qe,"href","/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEForPreTraining"),on(Q.src,ds="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/model_doc/videomae_architecture.jpeg")||l(Q,"src",ds),l(Q,"alt","drawing"),l(Q,"width","600"),l(Xe,"href","https://arxiv.org/abs/2203.12602"),l(Ee,"href","https://huggingface.co/nielsr"),l(Ee,"rel","nofollow"),l(Me,"href","https://github.com/MCG-NJU/VideoMAE"),l(Me,"rel","nofollow"),l(ee,"id","transformers.VideoMAEConfig"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#transformers.VideoMAEConfig"),l(D,"class","relative group"),l(eo,"href","/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEModel"),l(we,"href","https://huggingface.co/MCG-NJU/videomae-base"),l(we,"rel","nofollow"),l(oo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(to,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(te,"id","transformers.models.videomae.image_processing_videomae.VideoMAEImageProcessor"),l(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(te,"href","#transformers.models.videomae.image_processing_videomae.VideoMAEImageProcessor"),l(U,"class","relative group"),l(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(se,"id","transformers.VideoMAEModel"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#transformers.VideoMAEModel"),l(W,"class","relative group"),l(Pe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Pe,"rel","nofollow"),l(ao,"href","/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEModel"),l(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ie,"id","transformers.VideoMAEForPreTraining"),l(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ie,"href","#transformers.VideoMAEForPreTraining"),l(G,"class","relative group"),l(Ie,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ie,"rel","nofollow"),l(so,"href","/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEForPreTraining"),l(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ce,"id","transformers.VideoMAEForVideoClassification"),l(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ce,"href","#transformers.VideoMAEForVideoClassification"),l(H,"class","relative group"),l(Oe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Oe,"rel","nofollow"),l(no,"href","/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEForVideoClassification"),l(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,m){o(document.head,c),g(e,b,m),g(e,_,m),o(_,f),o(f,v),A(a,v,null),o(_,u),o(_,x),o(x,At),g(e,Oo,m),g(e,N,m),o(N,Y),o(Y,vo),A(_e,vo,null),o(N,$t),o(N,bo),o(bo,wt),g(e,Uo,m),g(e,I,m),o(I,Vt),o(I,ve),o(ve,yt),o(I,xt),o(I,Je),o(Je,Tt),o(I,jt),g(e,Wo,m),g(e,He,m),o(He,kt),g(e,Ro,m),g(e,Be,m),o(Be,Eo),o(Eo,Pt),g(e,Go,m),g(e,Ke,m),o(Ke,Ct),g(e,Jo,m),g(e,Z,m),o(Z,be),o(be,Ft),o(be,Ye),o(Ye,zt),o(be,qt),o(Z,It),o(Z,Ze),o(Ze,Qe),o(Qe,St),o(Ze,Nt),g(e,Ho,m),g(e,Q,m),g(e,Bo,m),g(e,X,m),o(X,Dt),o(X,Xe),o(Xe,Lt),o(X,Ot),g(e,Ko,m),g(e,S,m),o(S,Ut),o(S,Ee),o(Ee,Wt),o(S,Rt),o(S,Me),o(Me,Gt),o(S,Jt),g(e,Yo,m),g(e,D,m),o(D,ee),o(ee,Mo),A(Ae,Mo,null),o(D,Ht),o(D,Ao),o(Ao,Bt),g(e,Zo,m),g(e,T,m),A($e,T,null),o(T,Kt),o(T,L),o(L,Yt),o(L,eo),o(eo,Zt),o(L,Qt),o(L,we),o(we,Xt),o(L,ea),o(T,oa),o(T,O),o(O,ta),o(O,oo),o(oo,aa),o(O,sa),o(O,to),o(to,na),o(O,ra),o(T,ia),A(oe,T,null),g(e,Qo,m),g(e,U,m),o(U,te),o(te,$o),A(Ve,$o,null),o(U,da),o(U,wo),o(wo,la),g(e,Xo,m),g(e,C,m),A(ye,C,null),o(C,ca),o(C,Vo),o(Vo,ma),o(C,pa),o(C,ae),A(xe,ae,null),o(ae,ha),o(ae,yo),o(yo,fa),g(e,et,m),g(e,W,m),o(W,se),o(se,xo),A(Te,xo,null),o(W,ua),o(W,To),o(To,ga),g(e,ot,m),g(e,F,m),A(je,F,null),o(F,_a),o(F,ke),o(ke,va),o(ke,Pe),o(Pe,ba),o(ke,Ea),o(F,Ma),o(F,j),A(Ce,j,null),o(j,Aa),o(j,R),o(R,$a),o(R,ao),o(ao,wa),o(R,Va),o(R,jo),o(jo,ya),o(R,xa),o(j,Ta),A(ne,j,null),o(j,ja),A(re,j,null),g(e,tt,m),g(e,G,m),o(G,ie),o(ie,ko),A(Fe,ko,null),o(G,ka),o(G,Po),o(Po,Pa),g(e,at,m),g(e,z,m),A(ze,z,null),o(z,Ca),o(z,qe),o(qe,Fa),o(qe,Ie),o(Ie,za),o(qe,qa),o(z,Ia),o(z,k),A(Se,k,null),o(k,Sa),o(k,J),o(J,Na),o(J,so),o(so,Da),o(J,La),o(J,Co),o(Co,Oa),o(J,Ua),o(k,Wa),A(de,k,null),o(k,Ra),A(le,k,null),g(e,st,m),g(e,H,m),o(H,ce),o(ce,Fo),A(Ne,Fo,null),o(H,Ga),o(H,zo),o(zo,Ja),g(e,nt,m),g(e,q,m),A(De,q,null),o(q,Ha),o(q,Le),o(Le,Ba),o(Le,Oe),o(Oe,Ka),o(Le,Ya),o(q,Za),o(q,P),A(Ue,P,null),o(P,Qa),o(P,B),o(B,Xa),o(B,no),o(no,es),o(B,os),o(B,qo),o(qo,ts),o(B,as),o(P,ss),A(me,P,null),o(P,ns),A(pe,P,null),rt=!0},p(e,[m]){const We={};m&2&&(We.$$scope={dirty:m,ctx:e}),oe.$set(We);const Io={};m&2&&(Io.$$scope={dirty:m,ctx:e}),ne.$set(Io);const So={};m&2&&(So.$$scope={dirty:m,ctx:e}),re.$set(So);const No={};m&2&&(No.$$scope={dirty:m,ctx:e}),de.$set(No);const Re={};m&2&&(Re.$$scope={dirty:m,ctx:e}),le.$set(Re);const Do={};m&2&&(Do.$$scope={dirty:m,ctx:e}),me.$set(Do);const Lo={};m&2&&(Lo.$$scope={dirty:m,ctx:e}),pe.$set(Lo)},i(e){rt||($(a.$$.fragment,e),$(_e.$$.fragment,e),$(Ae.$$.fragment,e),$($e.$$.fragment,e),$(oe.$$.fragment,e),$(Ve.$$.fragment,e),$(ye.$$.fragment,e),$(xe.$$.fragment,e),$(Te.$$.fragment,e),$(je.$$.fragment,e),$(Ce.$$.fragment,e),$(ne.$$.fragment,e),$(re.$$.fragment,e),$(Fe.$$.fragment,e),$(ze.$$.fragment,e),$(Se.$$.fragment,e),$(de.$$.fragment,e),$(le.$$.fragment,e),$(Ne.$$.fragment,e),$(De.$$.fragment,e),$(Ue.$$.fragment,e),$(me.$$.fragment,e),$(pe.$$.fragment,e),rt=!0)},o(e){w(a.$$.fragment,e),w(_e.$$.fragment,e),w(Ae.$$.fragment,e),w($e.$$.fragment,e),w(oe.$$.fragment,e),w(Ve.$$.fragment,e),w(ye.$$.fragment,e),w(xe.$$.fragment,e),w(Te.$$.fragment,e),w(je.$$.fragment,e),w(Ce.$$.fragment,e),w(ne.$$.fragment,e),w(re.$$.fragment,e),w(Fe.$$.fragment,e),w(ze.$$.fragment,e),w(Se.$$.fragment,e),w(de.$$.fragment,e),w(le.$$.fragment,e),w(Ne.$$.fragment,e),w(De.$$.fragment,e),w(Ue.$$.fragment,e),w(me.$$.fragment,e),w(pe.$$.fragment,e),rt=!1},d(e){t(c),e&&t(b),e&&t(_),V(a),e&&t(Oo),e&&t(N),V(_e),e&&t(Uo),e&&t(I),e&&t(Wo),e&&t(He),e&&t(Ro),e&&t(Be),e&&t(Go),e&&t(Ke),e&&t(Jo),e&&t(Z),e&&t(Ho),e&&t(Q),e&&t(Bo),e&&t(X),e&&t(Ko),e&&t(S),e&&t(Yo),e&&t(D),V(Ae),e&&t(Zo),e&&t(T),V($e),V(oe),e&&t(Qo),e&&t(U),V(Ve),e&&t(Xo),e&&t(C),V(ye),V(xe),e&&t(et),e&&t(W),V(Te),e&&t(ot),e&&t(F),V(je),V(Ce),V(ne),V(re),e&&t(tt),e&&t(G),V(Fe),e&&t(at),e&&t(z),V(ze),V(Se),V(de),V(le),e&&t(st),e&&t(H),V(Ne),e&&t(nt),e&&t(q),V(De),V(Ue),V(me),V(pe)}}}const pn={local:"videomae",sections:[{local:"overview",title:"Overview"},{local:"transformers.VideoMAEConfig",title:"VideoMAEConfig"},{local:"transformers.models.videomae.image_processing_videomae.VideoMAEImageProcessor",title:"VideoMAEFeatureExtractor"},{local:"transformers.VideoMAEModel",title:"VideoMAEModel"},{local:"transformers.VideoMAEForPreTraining",title:"VideoMAEForPreTraining"},{local:"transformers.VideoMAEForVideoClassification",title:"VideoMAEForVideoClassification"}],title:"VideoMAE"};function hn(y){return tn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class En extends Zs{constructor(c){super();Qs(this,c,hn,mn,Xs,{})}}export{En as default,pn as metadata};
