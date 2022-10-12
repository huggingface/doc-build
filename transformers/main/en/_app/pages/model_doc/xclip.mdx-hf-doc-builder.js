import{S as Hi,i as Gi,s as Ui,e as s,k as f,w as b,t as i,M as Ji,c as a,d as o,m as h,a as r,x as P,h as l,b as c,N as Ki,G as e,g as _,y as C,q as $,o as I,B as w,v as Zi,L as Et}from"../../chunks/vendor-hf-doc-builder.js";import{T as tn}from"../../chunks/Tip-hf-doc-builder.js";import{D as X}from"../../chunks/Docstring-hf-doc-builder.js";import{C as zt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as me}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Mt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Qi(y){let d,x,g,m,v;return m=new zt({props:{code:`from transformers import XCLIPTextModel, XCLIPTextConfig

# Initializing a XCLIPTextModel with microsoft/xclip-base-patch32 style configuration
configuration = XCLIPTextConfig()

# Initializing a XCLIPTextConfig from the microsoft/xclip-base-patch32 style configuration
model = XCLIPTextModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XCLIPTextModel, XCLIPTextConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a XCLIPTextModel with microsoft/xclip-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = XCLIPTextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a XCLIPTextConfig from the microsoft/xclip-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XCLIPTextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),x=i("Example:"),g=f(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Example:"),p.forEach(o),g=h(n),P(m.$$.fragment,n)},m(n,p){_(n,d,p),e(d,x),_(n,g,p),C(m,n,p),v=!0},p:Et,i(n){v||($(m.$$.fragment,n),v=!0)},o(n){I(m.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(g),w(m,n)}}}function Yi(y){let d,x,g,m,v;return m=new zt({props:{code:`from transformers import XCLIPVisionModel, XCLIPVisionConfig

# Initializing a XCLIPVisionModel with microsoft/xclip-base-patch32 style configuration
configuration = XCLIPVisionConfig()

# Initializing a XCLIPVisionModel model from the microsoft/xclip-base-patch32 style configuration
model = XCLIPVisionModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XCLIPVisionModel, XCLIPVisionConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a XCLIPVisionModel with microsoft/xclip-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = XCLIPVisionConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a XCLIPVisionModel model from the microsoft/xclip-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XCLIPVisionModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),x=i("Example:"),g=f(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Example:"),p.forEach(o),g=h(n),P(m.$$.fragment,n)},m(n,p){_(n,d,p),e(d,x),_(n,g,p),C(m,n,p),v=!0},p:Et,i(n){v||($(m.$$.fragment,n),v=!0)},o(n){I(m.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(g),w(m,n)}}}function el(y){let d,x,g,m,v;return{c(){d=s("p"),x=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(p,"CODE",{});var L=r(g);m=l(L,"Module"),L.forEach(o),v=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){_(n,d,p),e(d,x),e(d,g),e(g,m),e(d,v)},d(n){n&&o(d)}}}function tl(y){let d,x,g,m,v;return m=new zt({props:{code:`from decord import VideoReader, cpu
import torch
import numpy as np

from transformers import AutoProcessor, AutoModel
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
vr = VideoReader(file_path, num_threads=1, ctx=cpu(0))

# sample 16 frames
vr.seek(0)
indices = sample_frame_indices(clip_len=8, frame_sample_rate=1, seg_len=len(vr))
video = vr.get_batch(indices).asnumpy()

processor = AutoProcessor.from_pretrained("microsoft/xclip-base-patch32")
model = AutoModel.from_pretrained("microsoft/xclip-base-patch32")

inputs = processor(
    text=["playing sports", "eating spaghetti", "go shopping"],
    videos=list(video),
    return_tensors="pt",
    padding=True,
)

# forward pass
with torch.no_grad():
    outputs = model(**inputs)

logits_per_video = outputs.logits_per_video  # this is the video-text similarity score
probs = logits_per_video.softmax(dim=1)  # we can take the softmax to get the label probabilities
print(probs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> decord <span class="hljs-keyword">import</span> VideoReader, cpu
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>vr = VideoReader(file_path, num_threads=<span class="hljs-number">1</span>, ctx=cpu(<span class="hljs-number">0</span>))

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># sample 16 frames</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>vr.seek(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>indices = sample_frame_indices(clip_len=<span class="hljs-number">8</span>, frame_sample_rate=<span class="hljs-number">1</span>, seg_len=<span class="hljs-built_in">len</span>(vr))
<span class="hljs-meta">&gt;&gt;&gt; </span>video = vr.get_batch(indices).asnumpy()

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/xclip-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModel.from_pretrained(<span class="hljs-string">&quot;microsoft/xclip-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    text=[<span class="hljs-string">&quot;playing sports&quot;</span>, <span class="hljs-string">&quot;eating spaghetti&quot;</span>, <span class="hljs-string">&quot;go shopping&quot;</span>],
<span class="hljs-meta">... </span>    videos=<span class="hljs-built_in">list</span>(video),
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>    padding=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_video = outputs.logits_per_video  <span class="hljs-comment"># this is the video-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_video.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(probs)
tensor([[<span class="hljs-number">1.9496e-04</span>, <span class="hljs-number">9.9960e-01</span>, <span class="hljs-number">2.0825e-04</span>]])`}}),{c(){d=s("p"),x=i("Examples:"),g=f(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Examples:"),p.forEach(o),g=h(n),P(m.$$.fragment,n)},m(n,p){_(n,d,p),e(d,x),_(n,g,p),C(m,n,p),v=!0},p:Et,i(n){v||($(m.$$.fragment,n),v=!0)},o(n){I(m.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(g),w(m,n)}}}function ol(y){let d,x,g,m,v;return{c(){d=s("p"),x=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(p,"CODE",{});var L=r(g);m=l(L,"Module"),L.forEach(o),v=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){_(n,d,p),e(d,x),e(d,g),e(g,m),e(d,v)},d(n){n&&o(d)}}}function nl(y){let d,x,g,m,v;return m=new zt({props:{code:`from transformers import AutoTokenizer, AutoModel

tokenizer = AutoTokenizer.from_pretrained("microsoft/xclip-base-patch32")
model = AutoModel.from_pretrained("microsoft/xclip-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/xclip-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModel.from_pretrained(<span class="hljs-string">&quot;microsoft/xclip-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),x=i("Examples:"),g=f(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Examples:"),p.forEach(o),g=h(n),P(m.$$.fragment,n)},m(n,p){_(n,d,p),e(d,x),_(n,g,p),C(m,n,p),v=!0},p:Et,i(n){v||($(m.$$.fragment,n),v=!0)},o(n){I(m.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(g),w(m,n)}}}function sl(y){let d,x,g,m,v;return{c(){d=s("p"),x=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(p,"CODE",{});var L=r(g);m=l(L,"Module"),L.forEach(o),v=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){_(n,d,p),e(d,x),e(d,g),e(g,m),e(d,v)},d(n){n&&o(d)}}}function al(y){let d,x,g,m,v;return m=new zt({props:{code:`from decord import VideoReader, cpu
import torch
import numpy as np

from transformers import AutoProcessor, AutoModel
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
vr = VideoReader(file_path, num_threads=1, ctx=cpu(0))

# sample 16 frames
vr.seek(0)
indices = sample_frame_indices(clip_len=8, frame_sample_rate=1, seg_len=len(vr))
video = vr.get_batch(indices).asnumpy()

processor = AutoProcessor.from_pretrained("microsoft/xclip-base-patch32")
model = AutoModel.from_pretrained("microsoft/xclip-base-patch32")

inputs = processor(videos=list(video), return_tensors="pt")

video_features = model.get_video_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> decord <span class="hljs-keyword">import</span> VideoReader, cpu
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>vr = VideoReader(file_path, num_threads=<span class="hljs-number">1</span>, ctx=cpu(<span class="hljs-number">0</span>))

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># sample 16 frames</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>vr.seek(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>indices = sample_frame_indices(clip_len=<span class="hljs-number">8</span>, frame_sample_rate=<span class="hljs-number">1</span>, seg_len=<span class="hljs-built_in">len</span>(vr))
<span class="hljs-meta">&gt;&gt;&gt; </span>video = vr.get_batch(indices).asnumpy()

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/xclip-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModel.from_pretrained(<span class="hljs-string">&quot;microsoft/xclip-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(videos=<span class="hljs-built_in">list</span>(video), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>video_features = model.get_video_features(**inputs)`}}),{c(){d=s("p"),x=i("Examples:"),g=f(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Examples:"),p.forEach(o),g=h(n),P(m.$$.fragment,n)},m(n,p){_(n,d,p),e(d,x),_(n,g,p),C(m,n,p),v=!0},p:Et,i(n){v||($(m.$$.fragment,n),v=!0)},o(n){I(m.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(g),w(m,n)}}}function rl(y){let d,x,g,m,v;return{c(){d=s("p"),x=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(p,"CODE",{});var L=r(g);m=l(L,"Module"),L.forEach(o),v=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){_(n,d,p),e(d,x),e(d,g),e(g,m),e(d,v)},d(n){n&&o(d)}}}function il(y){let d,x,g,m,v;return m=new zt({props:{code:`from transformers import CLIPTokenizer, XCLIPTextModel

model = XCLIPTextModel.from_pretrained("microsoft/xclip-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("microsoft/xclip-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled (EOS token) states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, XCLIPTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = XCLIPTextModel.from_pretrained(<span class="hljs-string">&quot;microsoft/xclip-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/xclip-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),x=i("Examples:"),g=f(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Examples:"),p.forEach(o),g=h(n),P(m.$$.fragment,n)},m(n,p){_(n,d,p),e(d,x),_(n,g,p),C(m,n,p),v=!0},p:Et,i(n){v||($(m.$$.fragment,n),v=!0)},o(n){I(m.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(g),w(m,n)}}}function ll(y){let d,x,g,m,v;return{c(){d=s("p"),x=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(p,"CODE",{});var L=r(g);m=l(L,"Module"),L.forEach(o),v=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){_(n,d,p),e(d,x),e(d,g),e(g,m),e(d,v)},d(n){n&&o(d)}}}function dl(y){let d,x,g,m,v;return m=new zt({props:{code:`from decord import VideoReader, cpu
import torch
import numpy as np

from transformers import AutoProcessor, XCLIPVisionModel
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
vr = VideoReader(file_path, num_threads=1, ctx=cpu(0))

# sample 16 frames
vr.seek(0)
indices = sample_frame_indices(clip_len=8, frame_sample_rate=1, seg_len=len(vr))
video = vr.get_batch(indices).asnumpy()

processor = AutoProcessor.from_pretrained("microsoft/xclip-base-patch32")
model = XCLIPVisionModel.from_pretrained("microsoft/xclip-base-patch32")

pixel_values = processor(videos=list(video), return_tensors="pt").pixel_values

batch_size, num_frames, num_channels, height, width = pixel_values.shape
pixel_values = pixel_values.reshape(-1, num_channels, height, width)

outputs = model(pixel_values)
last_hidden_state = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> decord <span class="hljs-keyword">import</span> VideoReader, cpu
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, XCLIPVisionModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>vr = VideoReader(file_path, num_threads=<span class="hljs-number">1</span>, ctx=cpu(<span class="hljs-number">0</span>))

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># sample 16 frames</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>vr.seek(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>indices = sample_frame_indices(clip_len=<span class="hljs-number">8</span>, frame_sample_rate=<span class="hljs-number">1</span>, seg_len=<span class="hljs-built_in">len</span>(vr))
<span class="hljs-meta">&gt;&gt;&gt; </span>video = vr.get_batch(indices).asnumpy()

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/xclip-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XCLIPVisionModel.from_pretrained(<span class="hljs-string">&quot;microsoft/xclip-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = processor(videos=<span class="hljs-built_in">list</span>(video), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values

<span class="hljs-meta">&gt;&gt;&gt; </span>batch_size, num_frames, num_channels, height, width = pixel_values.shape
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = pixel_values.reshape(-<span class="hljs-number">1</span>, num_channels, height, width)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state`}}),{c(){d=s("p"),x=i("Examples:"),g=f(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Examples:"),p.forEach(o),g=h(n),P(m.$$.fragment,n)},m(n,p){_(n,d,p),e(d,x),_(n,g,p),C(m,n,p),v=!0},p:Et,i(n){v||($(m.$$.fragment,n),v=!0)},o(n){I(m.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(g),w(m,n)}}}function cl(y){let d,x,g,m,v,n,p,L,Hn,on,R,fe,Po,Ge,Gn,Co,Un,nn,S,Jn,Ue,Kn,Zn,qt,Qn,Yn,sn,At,es,an,Vt,$o,ts,rn,Ft,os,ln,he,Je,ns,Ot,ss,as,rs,Ke,is,Ze,ls,ds,dn,ue,Fr,cn,Qe,cs,Dt,ps,pn,N,ms,Ye,fs,hs,et,us,gs,mn,H,ge,Io,tt,_s,wo,vs,fn,T,ot,xs,yo,bs,Ps,k,St,Cs,$s,Nt,Is,ws,Wt,ys,Ls,Lo,Ts,js,Bt,Xs,ks,Ms,_e,nt,Es,st,zs,Rt,qs,As,Vs,ve,at,Fs,rt,Os,Ht,Ds,Ss,hn,G,xe,To,it,Ns,jo,Ws,un,M,lt,Bs,be,Gt,Rs,Hs,Ut,Gs,Us,Js,U,Ks,Jt,Zs,Qs,Kt,Ys,ea,ta,Pe,dt,oa,ct,na,Zt,sa,aa,gn,J,Ce,Xo,pt,ra,ko,ia,_n,E,mt,la,K,da,Qt,ca,pa,ft,ma,fa,ha,Z,ua,Yt,ga,_a,eo,va,xa,ba,$e,vn,Q,Ie,Mo,ht,Pa,Eo,Ca,xn,z,ut,$a,Y,Ia,to,wa,ya,gt,La,Ta,ja,ee,Xa,oo,ka,Ma,no,Ea,za,qa,we,bn,te,ye,zo,_t,Aa,qo,Va,Pn,j,vt,Fa,xt,Oa,bt,Da,Sa,Na,q,Pt,Wa,oe,Ba,so,Ra,Ha,Ao,Ga,Ua,Ja,Le,Ka,Te,Za,A,Ct,Qa,ne,Ya,ao,er,tr,Vo,or,nr,sr,je,ar,Xe,rr,V,$t,ir,se,lr,ro,dr,cr,Fo,pr,mr,fr,ke,hr,Me,Cn,ae,Ee,Oo,It,ur,Do,gr,$n,re,wt,_r,F,yt,vr,ie,xr,io,br,Pr,So,Cr,$r,Ir,ze,wr,qe,In,le,Ae,No,Lt,yr,Wo,Lr,wn,de,Tt,Tr,O,jt,jr,ce,Xr,lo,kr,Mr,Bo,Er,zr,qr,Ve,Ar,Fe,yn;return n=new me({}),Ge=new me({}),tt=new me({}),ot=new X({props:{name:"class transformers.XCLIPProcessor",anchor:"transformers.XCLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.XCLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEFeatureExtractor">VideoMAEFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.XCLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast">CLIPTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/x_clip/processing_x_clip.py#L22"}}),nt=new X({props:{name:"batch_decode",anchor:"transformers.XCLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/x_clip/processing_x_clip.py#L97"}}),at=new X({props:{name:"decode",anchor:"transformers.XCLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/x_clip/processing_x_clip.py#L104"}}),it=new me({}),lt=new X({props:{name:"class transformers.XCLIPConfig",anchor:"transformers.XCLIPConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"prompt_layers",val:" = 2"},{name:"prompt_alpha",val:" = 0.1"},{name:"prompt_hidden_act",val:" = 'quick_gelu'"},{name:"prompt_num_attention_heads",val:" = 8"},{name:"prompt_attention_dropout",val:" = 0.0"},{name:"prompt_projection_dropout",val:" = 0.0"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XCLIPConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPTextConfig">XCLIPTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.XCLIPConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPVisionConfig">XCLIPVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.XCLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.XCLIPConfig.prompt_layers",description:`<strong>prompt_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of layers in the video specific prompt generator.`,name:"prompt_layers"},{anchor:"transformers.XCLIPConfig.prompt_alpha",description:`<strong>prompt_alpha</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Alpha value to use in the video specific prompt generator.`,name:"prompt_alpha"},{anchor:"transformers.XCLIPConfig.prompt_hidden_act",description:`<strong>prompt_hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the video specific prompt generator. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported.`,name:"prompt_hidden_act"},{anchor:"transformers.XCLIPConfig.prompt_num_attention_heads",description:`<strong>prompt_num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads in the cross-attention of the video specific prompt generator.`,name:"prompt_num_attention_heads"},{anchor:"transformers.XCLIPConfig.prompt_attention_dropout",description:`<strong>prompt_attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for the attention layers in the video specific prompt generator.`,name:"prompt_attention_dropout"},{anchor:"transformers.XCLIPConfig.prompt_projection_dropout",description:`<strong>prompt_projection_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for the projection layers in the video specific prompt generator.`,name:"prompt_projection_dropout"},{anchor:"transformers.XCLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> parameter. Default is used as per the original XCLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.XCLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/x_clip/configuration_x_clip.py#L271"}}),dt=new X({props:{name:"from_text_vision_configs",anchor:"transformers.XCLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": XCLIPTextConfig"},{name:"vision_config",val:": XCLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/x_clip/configuration_x_clip.py#L345",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPConfig"
>XCLIPConfig</a></p>
`}}),pt=new me({}),mt=new X({props:{name:"class transformers.XCLIPTextConfig",anchor:"transformers.XCLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XCLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
Vocabulary size of the X-CLIP text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPModel">XCLIPModel</a>.`,name:"vocab_size"},{anchor:"transformers.XCLIPTextConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.XCLIPTextConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.XCLIPTextConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.XCLIPTextConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.XCLIPTextConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 77) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.XCLIPTextConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.XCLIPTextConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.XCLIPTextConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.XCLIPTextConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.XCLIPTextConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.XCLIPTextConfig.initializer_factor",description:`<strong>initializer_factor</strong> (\`float&#x201C;, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/x_clip/configuration_x_clip.py#L32"}}),$e=new Mt({props:{anchor:"transformers.XCLIPTextConfig.example",$$slots:{default:[Qi]},$$scope:{ctx:y}}}),ht=new me({}),ut=new X({props:{name:"class transformers.XCLIPVisionConfig",anchor:"transformers.XCLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"mit_hidden_size",val:" = 512"},{name:"mit_intermediate_size",val:" = 2048"},{name:"mit_num_hidden_layers",val:" = 1"},{name:"mit_num_attention_heads",val:" = 8"},{name:"num_channels",val:" = 3"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"num_frames",val:" = 8"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"drop_path_rate",val:" = 0.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XCLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.XCLIPVisionConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.XCLIPVisionConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.XCLIPVisionConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.XCLIPVisionConfig.mit_hidden_size",description:`<strong>mit_hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the encoder layers of the Multiframe Integration Transformer (MIT).`,name:"mit_hidden_size"},{anchor:"transformers.XCLIPVisionConfig.mit_intermediate_size",description:`<strong>mit_intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Multiframe Integration Transformer
(MIT).`,name:"mit_intermediate_size"},{anchor:"transformers.XCLIPVisionConfig.mit_num_hidden_layers",description:`<strong>mit_num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of hidden layers in the Multiframe Integration Transformer (MIT).`,name:"mit_num_hidden_layers"},{anchor:"transformers.XCLIPVisionConfig.mit_num_attention_heads",description:`<strong>mit_num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Multiframe Integration Transformer (MIT).`,name:"mit_num_attention_heads"},{anchor:"transformers.XCLIPVisionConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.XCLIPVisionConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.XCLIPVisionConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code>, <code>&quot;gelu_new&quot;</code> and \`<code>&quot;quick_gelu&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.XCLIPVisionConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.XCLIPVisionConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.XCLIPVisionConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.XCLIPVisionConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.XCLIPVisionConfig.initializer_factor",description:`<strong>initializer_factor</strong> (\`float&#x201C;, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"},{anchor:"transformers.XCLIPVisionConfig.drop_path_rate",description:`<strong>drop_path_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Stochastic depth rate.`,name:"drop_path_rate"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/x_clip/configuration_x_clip.py#L141"}}),we=new Mt({props:{anchor:"transformers.XCLIPVisionConfig.example",$$slots:{default:[Yi]},$$scope:{ctx:y}}}),_t=new me({}),vt=new X({props:{name:"class transformers.XCLIPModel",anchor:"transformers.XCLIPModel",parameters:[{name:"config",val:": XCLIPConfig"}],parametersDescription:[{anchor:"transformers.XCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPConfig">XCLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/x_clip/modeling_x_clip.py#L1251"}}),Pt=new X({props:{name:"forward",anchor:"transformers.XCLIPModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XCLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XCLIPModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XCLIPModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XCLIPModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.XCLIPModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.XCLIPModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XCLIPModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XCLIPModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/x_clip/modeling_x_clip.py#L1431",returnDescription:`
<p>A <code>transformers.models.x_clip.modeling_x_clip.XCLIPOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.x_clip.configuration_x_clip.XCLIPConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for video-text similarity.</li>
<li><strong>logits_per_video</strong> (<code>torch.FloatTensor</code> of shape <code>(video_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>video_embeds</code> and <code>text_embeds</code>. This represents the video-text
similarity scores.</li>
<li><strong>logits_per_text</strong> (<code>torch.FloatTensor</code> of shape <code>(text_batch_size, video_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>video_embeds</code>. This represents the text-video
similarity scores.</li>
<li><strong>text_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPTextModel"
>XCLIPTextModel</a>.</li>
<li><strong>video_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The video embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPVisionModel"
>XCLIPVisionModel</a>.</li>
<li><strong>text_model_output</strong> (<code>BaseModelOutputWithPooling</code>) \u2014 The output of the <a
  href="/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPTextModel"
>XCLIPTextModel</a>.</li>
<li><strong>vision_model_output</strong> (<code>BaseModelOutputWithPooling</code>) \u2014 The output of the <a
  href="/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPVisionModel"
>XCLIPVisionModel</a>.</li>
<li><strong>mit_output</strong> (<code>BaseModelOutputWithPooling</code>) \u2014 The output of <code>XCLIPMultiframeIntegrationTransformer</code> (MIT for short).</li>
</ul>
`,returnType:`
<p><code>transformers.models.x_clip.modeling_x_clip.XCLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Le=new tn({props:{$$slots:{default:[el]},$$scope:{ctx:y}}}),Te=new Mt({props:{anchor:"transformers.XCLIPModel.forward.example",$$slots:{default:[tl]},$$scope:{ctx:y}}}),Ct=new X({props:{name:"get_text_features",anchor:"transformers.XCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XCLIPModel.get_text_features.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XCLIPModel.get_text_features.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XCLIPModel.get_text_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XCLIPModel.get_text_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XCLIPModel.get_text_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/x_clip/modeling_x_clip.py#L1298",returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPTextModel"
>XCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),je=new tn({props:{$$slots:{default:[ol]},$$scope:{ctx:y}}}),Xe=new Mt({props:{anchor:"transformers.XCLIPModel.get_text_features.example",$$slots:{default:[nl]},$$scope:{ctx:y}}}),$t=new X({props:{name:"get_video_features",anchor:"transformers.XCLIPModel.get_video_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XCLIPModel.get_video_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.XCLIPModel.get_video_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XCLIPModel.get_video_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XCLIPModel.get_video_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/x_clip/modeling_x_clip.py#L1345",returnDescription:`
<p>The video embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPVisionModel"
>XCLIPVisionModel</a> and
<code>XCLIPMultiframeIntegrationTransformer</code>.</p>
`,returnType:`
<p>video_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),ke=new tn({props:{$$slots:{default:[sl]},$$scope:{ctx:y}}}),Me=new Mt({props:{anchor:"transformers.XCLIPModel.get_video_features.example",$$slots:{default:[al]},$$scope:{ctx:y}}}),It=new me({}),wt=new X({props:{name:"class transformers.XCLIPTextModel",anchor:"transformers.XCLIPTextModel",parameters:[{name:"config",val:": XCLIPTextConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/x_clip/modeling_x_clip.py#L821"}}),yt=new X({props:{name:"forward",anchor:"transformers.XCLIPTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XCLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XCLIPTextModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XCLIPTextModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XCLIPTextModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XCLIPTextModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XCLIPTextModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/x_clip/modeling_x_clip.py#L836",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.x_clip.configuration_x_clip.XCLIPTextConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ze=new tn({props:{$$slots:{default:[rl]},$$scope:{ctx:y}}}),qe=new Mt({props:{anchor:"transformers.XCLIPTextModel.forward.example",$$slots:{default:[il]},$$scope:{ctx:y}}}),Lt=new me({}),Tt=new X({props:{name:"class transformers.XCLIPVisionModel",anchor:"transformers.XCLIPVisionModel",parameters:[{name:"config",val:": XCLIPVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/x_clip/modeling_x_clip.py#L1036"}}),jt=new X({props:{name:"forward",anchor:"transformers.XCLIPVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XCLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.XCLIPVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XCLIPVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XCLIPVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/x_clip/modeling_x_clip.py#L1049",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.x_clip.configuration_x_clip.XCLIPVisionConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ve=new tn({props:{$$slots:{default:[ll]},$$scope:{ctx:y}}}),Fe=new Mt({props:{anchor:"transformers.XCLIPVisionModel.forward.example",$$slots:{default:[dl]},$$scope:{ctx:y}}}),{c(){d=s("meta"),x=f(),g=s("h1"),m=s("a"),v=s("span"),b(n.$$.fragment),p=f(),L=s("span"),Hn=i("X-CLIP"),on=f(),R=s("h2"),fe=s("a"),Po=s("span"),b(Ge.$$.fragment),Gn=f(),Co=s("span"),Un=i("Overview"),nn=f(),S=s("p"),Jn=i("The X-CLIP model was proposed in "),Ue=s("a"),Kn=i("Expanding Language-Image Pretrained Models for General Video Recognition"),Zn=i(` by Bolin Ni, Houwen Peng, Minghao Chen, Songyang Zhang, Gaofeng Meng, Jianlong Fu, Shiming Xiang, Haibin Ling.
X-CLIP is a minimal extension of `),qt=s("a"),Qn=i("CLIP"),Yn=i(" for video. The model consists of a text encoder, a cross-frame vision encoder, a multi-frame integration Transformer, and a video-specific prompt generator."),sn=f(),At=s("p"),es=i("The abstract from the paper is the following:"),an=f(),Vt=s("p"),$o=s("em"),ts=i("Contrastive language-image pretraining has shown great success in learning visual-textual joint representation from web-scale data, demonstrating remarkable \u201Czero-shot\u201D generalization ability for various image tasks. However, how to effectively expand such new language-image pretraining methods to video domains is still an open problem. In this work, we present a simple yet effective approach that adapts the pretrained language-image models to video recognition directly, instead of pretraining a new model from scratch. More concretely, to capture the long-range dependencies of frames along the temporal dimension, we propose a cross-frame attention mechanism that explicitly exchanges information across frames. Such module is lightweight and can be plugged into pretrained language-image models seamlessly. Moreover, we propose a video-specific prompting scheme, which leverages video content information for generating discriminative textual prompts. Extensive experiments demonstrate that our approach is effective and can be generalized to different video recognition scenarios. In particular, under fully-supervised settings, our approach achieves a top-1 accuracy of 87.1% on Kinectics-400, while using 12 times fewer FLOPs compared with Swin-L and ViViT-H. In zero-shot experiments, our approach surpasses the current state-of-the-art methods by +7.6% and +14.9% in terms of top-1 accuracy under two popular protocols. In few-shot scenarios, our approach outperforms previous best methods by +32.1% and +23.1% when the labeled data is extremely limited."),rn=f(),Ft=s("p"),os=i("Tips:"),ln=f(),he=s("ul"),Je=s("li"),ns=i("Usage of X-CLIP is identical to "),Ot=s("a"),ss=i("CLIP"),as=i("."),rs=f(),Ke=s("li"),is=i("Demo notebooks for X-CLIP can be found "),Ze=s("a"),ls=i("here"),ds=i("."),dn=f(),ue=s("img"),cn=f(),Qe=s("small"),cs=i("X-CLIP architecture. Taken from the "),Dt=s("a"),ps=i("original paper."),pn=f(),N=s("p"),ms=i("This model was contributed by "),Ye=s("a"),fs=i("nielsr"),hs=i(`.
The original code can be found `),et=s("a"),us=i("here"),gs=i("."),mn=f(),H=s("h2"),ge=s("a"),Io=s("span"),b(tt.$$.fragment),_s=f(),wo=s("span"),vs=i("XCLIPProcessor"),fn=f(),T=s("div"),b(ot.$$.fragment),xs=f(),yo=s("p"),bs=i(`Constructs an X-CLIP processor which wraps a VideoMAE feature extractor and a CLIP tokenizer into a single
processor.`),Ps=f(),k=s("p"),St=s("a"),Cs=i("XCLIPProcessor"),$s=i(" offers all the functionalities of "),Nt=s("a"),Is=i("VideoMAEFeatureExtractor"),ws=i(" and "),Wt=s("a"),ys=i("CLIPTokenizerFast"),Ls=i(`. See
the `),Lo=s("code"),Ts=i("__call__()"),js=i(" and "),Bt=s("a"),Xs=i("decode()"),ks=i(" for more information."),Ms=f(),_e=s("div"),b(nt.$$.fragment),Es=f(),st=s("p"),zs=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Rt=s("a"),qs=i("batch_decode()"),As=i(`. Please
refer to the docstring of this method for more information.`),Vs=f(),ve=s("div"),b(at.$$.fragment),Fs=f(),rt=s("p"),Os=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ht=s("a"),Ds=i("decode()"),Ss=i(`. Please refer to
the docstring of this method for more information.`),hn=f(),G=s("h2"),xe=s("a"),To=s("span"),b(it.$$.fragment),Ns=f(),jo=s("span"),Ws=i("XCLIPConfig"),un=f(),M=s("div"),b(lt.$$.fragment),Bs=f(),be=s("p"),Gt=s("a"),Rs=i("XCLIPConfig"),Hs=i(" is the configuration class to store the configuration of a "),Ut=s("a"),Gs=i("XCLIPModel"),Us=i(`. It is used to
instantiate X-CLIP model according to the specified arguments, defining the text model and vision model configs.`),Js=f(),U=s("p"),Ks=i("Configuration objects inherit from "),Jt=s("a"),Zs=i("PretrainedConfig"),Qs=i(` and can be used to control the model outputs. Read the
documentation from `),Kt=s("a"),Ys=i("PretrainedConfig"),ea=i(" for more information."),ta=f(),Pe=s("div"),b(dt.$$.fragment),oa=f(),ct=s("p"),na=i("Instantiate a "),Zt=s("a"),sa=i("XCLIPConfig"),aa=i(` (or a derived class) from xclip text model configuration and xclip vision model
configuration.`),gn=f(),J=s("h2"),Ce=s("a"),Xo=s("span"),b(pt.$$.fragment),ra=f(),ko=s("span"),ia=i("XCLIPTextConfig"),_n=f(),E=s("div"),b(mt.$$.fragment),la=f(),K=s("p"),da=i("This is the configuration class to store the configuration of a "),Qt=s("a"),ca=i("XCLIPModel"),pa=i(`. It is used to instantiate an X-CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the X-CLIP
`),ft=s("a"),ma=i("microsoft/xclip-base-patch32"),fa=i(" architecture."),ha=f(),Z=s("p"),ua=i("Configuration objects inherit from "),Yt=s("a"),ga=i("PretrainedConfig"),_a=i(` and can be used to control the model outputs. Read the
documentation from `),eo=s("a"),va=i("PretrainedConfig"),xa=i(" for more information."),ba=f(),b($e.$$.fragment),vn=f(),Q=s("h2"),Ie=s("a"),Mo=s("span"),b(ht.$$.fragment),Pa=f(),Eo=s("span"),Ca=i("XCLIPVisionConfig"),xn=f(),z=s("div"),b(ut.$$.fragment),$a=f(),Y=s("p"),Ia=i("This is the configuration class to store the configuration of a "),to=s("a"),wa=i("XCLIPModel"),ya=i(`. It is used to instantiate an X-CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the X-CLIP
`),gt=s("a"),La=i("microsoft/xclip-base-patch32"),Ta=i(" architecture."),ja=f(),ee=s("p"),Xa=i("Configuration objects inherit from "),oo=s("a"),ka=i("PretrainedConfig"),Ma=i(` and can be used to control the model outputs. Read the
documentation from `),no=s("a"),Ea=i("PretrainedConfig"),za=i(" for more information."),qa=f(),b(we.$$.fragment),bn=f(),te=s("h2"),ye=s("a"),zo=s("span"),b(_t.$$.fragment),Aa=f(),qo=s("span"),Va=i("XCLIPModel"),Pn=f(),j=s("div"),b(vt.$$.fragment),Fa=f(),xt=s("p"),Oa=i("This model is a PyTorch "),bt=s("a"),Da=i("torch.nn.Module"),Sa=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Na=f(),q=s("div"),b(Pt.$$.fragment),Wa=f(),oe=s("p"),Ba=i("The "),so=s("a"),Ra=i("XCLIPModel"),Ha=i(" forward method, overrides the "),Ao=s("code"),Ga=i("__call__"),Ua=i(" special method."),Ja=f(),b(Le.$$.fragment),Ka=f(),b(Te.$$.fragment),Za=f(),A=s("div"),b(Ct.$$.fragment),Qa=f(),ne=s("p"),Ya=i("The "),ao=s("a"),er=i("XCLIPModel"),tr=i(" forward method, overrides the "),Vo=s("code"),or=i("__call__"),nr=i(" special method."),sr=f(),b(je.$$.fragment),ar=f(),b(Xe.$$.fragment),rr=f(),V=s("div"),b($t.$$.fragment),ir=f(),se=s("p"),lr=i("The "),ro=s("a"),dr=i("XCLIPModel"),cr=i(" forward method, overrides the "),Fo=s("code"),pr=i("__call__"),mr=i(" special method."),fr=f(),b(ke.$$.fragment),hr=f(),b(Me.$$.fragment),Cn=f(),ae=s("h2"),Ee=s("a"),Oo=s("span"),b(It.$$.fragment),ur=f(),Do=s("span"),gr=i("XCLIPTextModel"),$n=f(),re=s("div"),b(wt.$$.fragment),_r=f(),F=s("div"),b(yt.$$.fragment),vr=f(),ie=s("p"),xr=i("The "),io=s("a"),br=i("XCLIPTextModel"),Pr=i(" forward method, overrides the "),So=s("code"),Cr=i("__call__"),$r=i(" special method."),Ir=f(),b(ze.$$.fragment),wr=f(),b(qe.$$.fragment),In=f(),le=s("h2"),Ae=s("a"),No=s("span"),b(Lt.$$.fragment),yr=f(),Wo=s("span"),Lr=i("XCLIPVisionModel"),wn=f(),de=s("div"),b(Tt.$$.fragment),Tr=f(),O=s("div"),b(jt.$$.fragment),jr=f(),ce=s("p"),Xr=i("The "),lo=s("a"),kr=i("XCLIPVisionModel"),Mr=i(" forward method, overrides the "),Bo=s("code"),Er=i("__call__"),zr=i(" special method."),qr=f(),b(Ve.$$.fragment),Ar=f(),b(Fe.$$.fragment),this.h()},l(t){const u=Ji('[data-svelte="svelte-1phssyn"]',document.head);d=a(u,"META",{name:!0,content:!0}),u.forEach(o),x=h(t),g=a(t,"H1",{class:!0});var Xt=r(g);m=a(Xt,"A",{id:!0,class:!0,href:!0});var Ro=r(m);v=a(Ro,"SPAN",{});var Ho=r(v);P(n.$$.fragment,Ho),Ho.forEach(o),Ro.forEach(o),p=h(Xt),L=a(Xt,"SPAN",{});var Go=r(L);Hn=l(Go,"X-CLIP"),Go.forEach(o),Xt.forEach(o),on=h(t),R=a(t,"H2",{class:!0});var kt=r(R);fe=a(kt,"A",{id:!0,class:!0,href:!0});var Uo=r(fe);Po=a(Uo,"SPAN",{});var Jo=r(Po);P(Ge.$$.fragment,Jo),Jo.forEach(o),Uo.forEach(o),Gn=h(kt),Co=a(kt,"SPAN",{});var Ko=r(Co);Un=l(Ko,"Overview"),Ko.forEach(o),kt.forEach(o),nn=h(t),S=a(t,"P",{});var pe=r(S);Jn=l(pe,"The X-CLIP model was proposed in "),Ue=a(pe,"A",{href:!0,rel:!0});var Zo=r(Ue);Kn=l(Zo,"Expanding Language-Image Pretrained Models for General Video Recognition"),Zo.forEach(o),Zn=l(pe,` by Bolin Ni, Houwen Peng, Minghao Chen, Songyang Zhang, Gaofeng Meng, Jianlong Fu, Shiming Xiang, Haibin Ling.
X-CLIP is a minimal extension of `),qt=a(pe,"A",{href:!0});var Qo=r(qt);Qn=l(Qo,"CLIP"),Qo.forEach(o),Yn=l(pe," for video. The model consists of a text encoder, a cross-frame vision encoder, a multi-frame integration Transformer, and a video-specific prompt generator."),pe.forEach(o),sn=h(t),At=a(t,"P",{});var Yo=r(At);es=l(Yo,"The abstract from the paper is the following:"),Yo.forEach(o),an=h(t),Vt=a(t,"P",{});var Or=r(Vt);$o=a(Or,"EM",{});var Dr=r($o);ts=l(Dr,"Contrastive language-image pretraining has shown great success in learning visual-textual joint representation from web-scale data, demonstrating remarkable \u201Czero-shot\u201D generalization ability for various image tasks. However, how to effectively expand such new language-image pretraining methods to video domains is still an open problem. In this work, we present a simple yet effective approach that adapts the pretrained language-image models to video recognition directly, instead of pretraining a new model from scratch. More concretely, to capture the long-range dependencies of frames along the temporal dimension, we propose a cross-frame attention mechanism that explicitly exchanges information across frames. Such module is lightweight and can be plugged into pretrained language-image models seamlessly. Moreover, we propose a video-specific prompting scheme, which leverages video content information for generating discriminative textual prompts. Extensive experiments demonstrate that our approach is effective and can be generalized to different video recognition scenarios. In particular, under fully-supervised settings, our approach achieves a top-1 accuracy of 87.1% on Kinectics-400, while using 12 times fewer FLOPs compared with Swin-L and ViViT-H. In zero-shot experiments, our approach surpasses the current state-of-the-art methods by +7.6% and +14.9% in terms of top-1 accuracy under two popular protocols. In few-shot scenarios, our approach outperforms previous best methods by +32.1% and +23.1% when the labeled data is extremely limited."),Dr.forEach(o),Or.forEach(o),rn=h(t),Ft=a(t,"P",{});var Sr=r(Ft);os=l(Sr,"Tips:"),Sr.forEach(o),ln=h(t),he=a(t,"UL",{});var Ln=r(he);Je=a(Ln,"LI",{});var Tn=r(Je);ns=l(Tn,"Usage of X-CLIP is identical to "),Ot=a(Tn,"A",{href:!0});var Nr=r(Ot);ss=l(Nr,"CLIP"),Nr.forEach(o),as=l(Tn,"."),Tn.forEach(o),rs=h(Ln),Ke=a(Ln,"LI",{});var jn=r(Ke);is=l(jn,"Demo notebooks for X-CLIP can be found "),Ze=a(jn,"A",{href:!0,rel:!0});var Wr=r(Ze);ls=l(Wr,"here"),Wr.forEach(o),ds=l(jn,"."),jn.forEach(o),Ln.forEach(o),dn=h(t),ue=a(t,"IMG",{src:!0,alt:!0,width:!0}),cn=h(t),Qe=a(t,"SMALL",{});var Vr=r(Qe);cs=l(Vr,"X-CLIP architecture. Taken from the "),Dt=a(Vr,"A",{href:!0});var Br=r(Dt);ps=l(Br,"original paper."),Br.forEach(o),Vr.forEach(o),pn=h(t),N=a(t,"P",{});var co=r(N);ms=l(co,"This model was contributed by "),Ye=a(co,"A",{href:!0,rel:!0});var Rr=r(Ye);fs=l(Rr,"nielsr"),Rr.forEach(o),hs=l(co,`.
The original code can be found `),et=a(co,"A",{href:!0,rel:!0});var Hr=r(et);us=l(Hr,"here"),Hr.forEach(o),gs=l(co,"."),co.forEach(o),mn=h(t),H=a(t,"H2",{class:!0});var Xn=r(H);ge=a(Xn,"A",{id:!0,class:!0,href:!0});var Gr=r(ge);Io=a(Gr,"SPAN",{});var Ur=r(Io);P(tt.$$.fragment,Ur),Ur.forEach(o),Gr.forEach(o),_s=h(Xn),wo=a(Xn,"SPAN",{});var Jr=r(wo);vs=l(Jr,"XCLIPProcessor"),Jr.forEach(o),Xn.forEach(o),fn=h(t),T=a(t,"DIV",{class:!0});var W=r(T);P(ot.$$.fragment,W),xs=h(W),yo=a(W,"P",{});var Kr=r(yo);bs=l(Kr,`Constructs an X-CLIP processor which wraps a VideoMAE feature extractor and a CLIP tokenizer into a single
processor.`),Kr.forEach(o),Ps=h(W),k=a(W,"P",{});var D=r(k);St=a(D,"A",{href:!0});var Zr=r(St);Cs=l(Zr,"XCLIPProcessor"),Zr.forEach(o),$s=l(D," offers all the functionalities of "),Nt=a(D,"A",{href:!0});var Qr=r(Nt);Is=l(Qr,"VideoMAEFeatureExtractor"),Qr.forEach(o),ws=l(D," and "),Wt=a(D,"A",{href:!0});var Yr=r(Wt);ys=l(Yr,"CLIPTokenizerFast"),Yr.forEach(o),Ls=l(D,`. See
the `),Lo=a(D,"CODE",{});var ei=r(Lo);Ts=l(ei,"__call__()"),ei.forEach(o),js=l(D," and "),Bt=a(D,"A",{href:!0});var ti=r(Bt);Xs=l(ti,"decode()"),ti.forEach(o),ks=l(D," for more information."),D.forEach(o),Ms=h(W),_e=a(W,"DIV",{class:!0});var kn=r(_e);P(nt.$$.fragment,kn),Es=h(kn),st=a(kn,"P",{});var Mn=r(st);zs=l(Mn,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Rt=a(Mn,"A",{href:!0});var oi=r(Rt);qs=l(oi,"batch_decode()"),oi.forEach(o),As=l(Mn,`. Please
refer to the docstring of this method for more information.`),Mn.forEach(o),kn.forEach(o),Vs=h(W),ve=a(W,"DIV",{class:!0});var En=r(ve);P(at.$$.fragment,En),Fs=h(En),rt=a(En,"P",{});var zn=r(rt);Os=l(zn,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ht=a(zn,"A",{href:!0});var ni=r(Ht);Ds=l(ni,"decode()"),ni.forEach(o),Ss=l(zn,`. Please refer to
the docstring of this method for more information.`),zn.forEach(o),En.forEach(o),W.forEach(o),hn=h(t),G=a(t,"H2",{class:!0});var qn=r(G);xe=a(qn,"A",{id:!0,class:!0,href:!0});var si=r(xe);To=a(si,"SPAN",{});var ai=r(To);P(it.$$.fragment,ai),ai.forEach(o),si.forEach(o),Ns=h(qn),jo=a(qn,"SPAN",{});var ri=r(jo);Ws=l(ri,"XCLIPConfig"),ri.forEach(o),qn.forEach(o),un=h(t),M=a(t,"DIV",{class:!0});var Oe=r(M);P(lt.$$.fragment,Oe),Bs=h(Oe),be=a(Oe,"P",{});var en=r(be);Gt=a(en,"A",{href:!0});var ii=r(Gt);Rs=l(ii,"XCLIPConfig"),ii.forEach(o),Hs=l(en," is the configuration class to store the configuration of a "),Ut=a(en,"A",{href:!0});var li=r(Ut);Gs=l(li,"XCLIPModel"),li.forEach(o),Us=l(en,`. It is used to
instantiate X-CLIP model according to the specified arguments, defining the text model and vision model configs.`),en.forEach(o),Js=h(Oe),U=a(Oe,"P",{});var po=r(U);Ks=l(po,"Configuration objects inherit from "),Jt=a(po,"A",{href:!0});var di=r(Jt);Zs=l(di,"PretrainedConfig"),di.forEach(o),Qs=l(po,` and can be used to control the model outputs. Read the
documentation from `),Kt=a(po,"A",{href:!0});var ci=r(Kt);Ys=l(ci,"PretrainedConfig"),ci.forEach(o),ea=l(po," for more information."),po.forEach(o),ta=h(Oe),Pe=a(Oe,"DIV",{class:!0});var An=r(Pe);P(dt.$$.fragment,An),oa=h(An),ct=a(An,"P",{});var Vn=r(ct);na=l(Vn,"Instantiate a "),Zt=a(Vn,"A",{href:!0});var pi=r(Zt);sa=l(pi,"XCLIPConfig"),pi.forEach(o),aa=l(Vn,` (or a derived class) from xclip text model configuration and xclip vision model
configuration.`),Vn.forEach(o),An.forEach(o),Oe.forEach(o),gn=h(t),J=a(t,"H2",{class:!0});var Fn=r(J);Ce=a(Fn,"A",{id:!0,class:!0,href:!0});var mi=r(Ce);Xo=a(mi,"SPAN",{});var fi=r(Xo);P(pt.$$.fragment,fi),fi.forEach(o),mi.forEach(o),ra=h(Fn),ko=a(Fn,"SPAN",{});var hi=r(ko);ia=l(hi,"XCLIPTextConfig"),hi.forEach(o),Fn.forEach(o),_n=h(t),E=a(t,"DIV",{class:!0});var De=r(E);P(mt.$$.fragment,De),la=h(De),K=a(De,"P",{});var mo=r(K);da=l(mo,"This is the configuration class to store the configuration of a "),Qt=a(mo,"A",{href:!0});var ui=r(Qt);ca=l(ui,"XCLIPModel"),ui.forEach(o),pa=l(mo,`. It is used to instantiate an X-CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the X-CLIP
`),ft=a(mo,"A",{href:!0,rel:!0});var gi=r(ft);ma=l(gi,"microsoft/xclip-base-patch32"),gi.forEach(o),fa=l(mo," architecture."),mo.forEach(o),ha=h(De),Z=a(De,"P",{});var fo=r(Z);ua=l(fo,"Configuration objects inherit from "),Yt=a(fo,"A",{href:!0});var _i=r(Yt);ga=l(_i,"PretrainedConfig"),_i.forEach(o),_a=l(fo,` and can be used to control the model outputs. Read the
documentation from `),eo=a(fo,"A",{href:!0});var vi=r(eo);va=l(vi,"PretrainedConfig"),vi.forEach(o),xa=l(fo," for more information."),fo.forEach(o),ba=h(De),P($e.$$.fragment,De),De.forEach(o),vn=h(t),Q=a(t,"H2",{class:!0});var On=r(Q);Ie=a(On,"A",{id:!0,class:!0,href:!0});var xi=r(Ie);Mo=a(xi,"SPAN",{});var bi=r(Mo);P(ht.$$.fragment,bi),bi.forEach(o),xi.forEach(o),Pa=h(On),Eo=a(On,"SPAN",{});var Pi=r(Eo);Ca=l(Pi,"XCLIPVisionConfig"),Pi.forEach(o),On.forEach(o),xn=h(t),z=a(t,"DIV",{class:!0});var Se=r(z);P(ut.$$.fragment,Se),$a=h(Se),Y=a(Se,"P",{});var ho=r(Y);Ia=l(ho,"This is the configuration class to store the configuration of a "),to=a(ho,"A",{href:!0});var Ci=r(to);wa=l(Ci,"XCLIPModel"),Ci.forEach(o),ya=l(ho,`. It is used to instantiate an X-CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the X-CLIP
`),gt=a(ho,"A",{href:!0,rel:!0});var $i=r(gt);La=l($i,"microsoft/xclip-base-patch32"),$i.forEach(o),Ta=l(ho," architecture."),ho.forEach(o),ja=h(Se),ee=a(Se,"P",{});var uo=r(ee);Xa=l(uo,"Configuration objects inherit from "),oo=a(uo,"A",{href:!0});var Ii=r(oo);ka=l(Ii,"PretrainedConfig"),Ii.forEach(o),Ma=l(uo,` and can be used to control the model outputs. Read the
documentation from `),no=a(uo,"A",{href:!0});var wi=r(no);Ea=l(wi,"PretrainedConfig"),wi.forEach(o),za=l(uo," for more information."),uo.forEach(o),qa=h(Se),P(we.$$.fragment,Se),Se.forEach(o),bn=h(t),te=a(t,"H2",{class:!0});var Dn=r(te);ye=a(Dn,"A",{id:!0,class:!0,href:!0});var yi=r(ye);zo=a(yi,"SPAN",{});var Li=r(zo);P(_t.$$.fragment,Li),Li.forEach(o),yi.forEach(o),Aa=h(Dn),qo=a(Dn,"SPAN",{});var Ti=r(qo);Va=l(Ti,"XCLIPModel"),Ti.forEach(o),Dn.forEach(o),Pn=h(t),j=a(t,"DIV",{class:!0});var B=r(j);P(vt.$$.fragment,B),Fa=h(B),xt=a(B,"P",{});var Sn=r(xt);Oa=l(Sn,"This model is a PyTorch "),bt=a(Sn,"A",{href:!0,rel:!0});var ji=r(bt);Da=l(ji,"torch.nn.Module"),ji.forEach(o),Sa=l(Sn,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Sn.forEach(o),Na=h(B),q=a(B,"DIV",{class:!0});var Ne=r(q);P(Pt.$$.fragment,Ne),Wa=h(Ne),oe=a(Ne,"P",{});var go=r(oe);Ba=l(go,"The "),so=a(go,"A",{href:!0});var Xi=r(so);Ra=l(Xi,"XCLIPModel"),Xi.forEach(o),Ha=l(go," forward method, overrides the "),Ao=a(go,"CODE",{});var ki=r(Ao);Ga=l(ki,"__call__"),ki.forEach(o),Ua=l(go," special method."),go.forEach(o),Ja=h(Ne),P(Le.$$.fragment,Ne),Ka=h(Ne),P(Te.$$.fragment,Ne),Ne.forEach(o),Za=h(B),A=a(B,"DIV",{class:!0});var We=r(A);P(Ct.$$.fragment,We),Qa=h(We),ne=a(We,"P",{});var _o=r(ne);Ya=l(_o,"The "),ao=a(_o,"A",{href:!0});var Mi=r(ao);er=l(Mi,"XCLIPModel"),Mi.forEach(o),tr=l(_o," forward method, overrides the "),Vo=a(_o,"CODE",{});var Ei=r(Vo);or=l(Ei,"__call__"),Ei.forEach(o),nr=l(_o," special method."),_o.forEach(o),sr=h(We),P(je.$$.fragment,We),ar=h(We),P(Xe.$$.fragment,We),We.forEach(o),rr=h(B),V=a(B,"DIV",{class:!0});var Be=r(V);P($t.$$.fragment,Be),ir=h(Be),se=a(Be,"P",{});var vo=r(se);lr=l(vo,"The "),ro=a(vo,"A",{href:!0});var zi=r(ro);dr=l(zi,"XCLIPModel"),zi.forEach(o),cr=l(vo," forward method, overrides the "),Fo=a(vo,"CODE",{});var qi=r(Fo);pr=l(qi,"__call__"),qi.forEach(o),mr=l(vo," special method."),vo.forEach(o),fr=h(Be),P(ke.$$.fragment,Be),hr=h(Be),P(Me.$$.fragment,Be),Be.forEach(o),B.forEach(o),Cn=h(t),ae=a(t,"H2",{class:!0});var Nn=r(ae);Ee=a(Nn,"A",{id:!0,class:!0,href:!0});var Ai=r(Ee);Oo=a(Ai,"SPAN",{});var Vi=r(Oo);P(It.$$.fragment,Vi),Vi.forEach(o),Ai.forEach(o),ur=h(Nn),Do=a(Nn,"SPAN",{});var Fi=r(Do);gr=l(Fi,"XCLIPTextModel"),Fi.forEach(o),Nn.forEach(o),$n=h(t),re=a(t,"DIV",{class:!0});var Wn=r(re);P(wt.$$.fragment,Wn),_r=h(Wn),F=a(Wn,"DIV",{class:!0});var Re=r(F);P(yt.$$.fragment,Re),vr=h(Re),ie=a(Re,"P",{});var xo=r(ie);xr=l(xo,"The "),io=a(xo,"A",{href:!0});var Oi=r(io);br=l(Oi,"XCLIPTextModel"),Oi.forEach(o),Pr=l(xo," forward method, overrides the "),So=a(xo,"CODE",{});var Di=r(So);Cr=l(Di,"__call__"),Di.forEach(o),$r=l(xo," special method."),xo.forEach(o),Ir=h(Re),P(ze.$$.fragment,Re),wr=h(Re),P(qe.$$.fragment,Re),Re.forEach(o),Wn.forEach(o),In=h(t),le=a(t,"H2",{class:!0});var Bn=r(le);Ae=a(Bn,"A",{id:!0,class:!0,href:!0});var Si=r(Ae);No=a(Si,"SPAN",{});var Ni=r(No);P(Lt.$$.fragment,Ni),Ni.forEach(o),Si.forEach(o),yr=h(Bn),Wo=a(Bn,"SPAN",{});var Wi=r(Wo);Lr=l(Wi,"XCLIPVisionModel"),Wi.forEach(o),Bn.forEach(o),wn=h(t),de=a(t,"DIV",{class:!0});var Rn=r(de);P(Tt.$$.fragment,Rn),Tr=h(Rn),O=a(Rn,"DIV",{class:!0});var He=r(O);P(jt.$$.fragment,He),jr=h(He),ce=a(He,"P",{});var bo=r(ce);Xr=l(bo,"The "),lo=a(bo,"A",{href:!0});var Bi=r(lo);kr=l(Bi,"XCLIPVisionModel"),Bi.forEach(o),Mr=l(bo," forward method, overrides the "),Bo=a(bo,"CODE",{});var Ri=r(Bo);Er=l(Ri,"__call__"),Ri.forEach(o),zr=l(bo," special method."),bo.forEach(o),qr=h(He),P(Ve.$$.fragment,He),Ar=h(He),P(Fe.$$.fragment,He),He.forEach(o),Rn.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(pl)),c(m,"id","xclip"),c(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(m,"href","#xclip"),c(g,"class","relative group"),c(fe,"id","overview"),c(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fe,"href","#overview"),c(R,"class","relative group"),c(Ue,"href","https://arxiv.org/abs/2208.02816"),c(Ue,"rel","nofollow"),c(qt,"href","clip"),c(Ot,"href","clip"),c(Ze,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/X-CLIP"),c(Ze,"rel","nofollow"),Ki(ue.src,Fr="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/model_doc/xclip_architecture.png")||c(ue,"src",Fr),c(ue,"alt","drawing"),c(ue,"width","600"),c(Dt,"href","https://arxiv.org/abs/2208.02816"),c(Ye,"href","https://huggingface.co/nielsr"),c(Ye,"rel","nofollow"),c(et,"href","https://github.com/microsoft/VideoX/tree/master/X-CLIP"),c(et,"rel","nofollow"),c(ge,"id","transformers.XCLIPProcessor"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#transformers.XCLIPProcessor"),c(H,"class","relative group"),c(St,"href","/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPProcessor"),c(Nt,"href","/docs/transformers/main/en/model_doc/videomae#transformers.VideoMAEFeatureExtractor"),c(Wt,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast"),c(Bt,"href","/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPProcessor.decode"),c(Rt,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),c(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ht,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),c(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xe,"id","transformers.XCLIPConfig"),c(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xe,"href","#transformers.XCLIPConfig"),c(G,"class","relative group"),c(Gt,"href","/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPConfig"),c(Ut,"href","/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPModel"),c(Jt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Kt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Zt,"href","/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPConfig"),c(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ce,"id","transformers.XCLIPTextConfig"),c(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ce,"href","#transformers.XCLIPTextConfig"),c(J,"class","relative group"),c(Qt,"href","/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPModel"),c(ft,"href","https://huggingface.co/microsoft/xclip-base-patch32"),c(ft,"rel","nofollow"),c(Yt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(eo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ie,"id","transformers.XCLIPVisionConfig"),c(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ie,"href","#transformers.XCLIPVisionConfig"),c(Q,"class","relative group"),c(to,"href","/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPModel"),c(gt,"href","https://huggingface.co/microsoft/xclip-base-patch32"),c(gt,"rel","nofollow"),c(oo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(no,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ye,"id","transformers.XCLIPModel"),c(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ye,"href","#transformers.XCLIPModel"),c(te,"class","relative group"),c(bt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(bt,"rel","nofollow"),c(so,"href","/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPModel"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ao,"href","/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPModel"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ro,"href","/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPModel"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ee,"id","transformers.XCLIPTextModel"),c(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ee,"href","#transformers.XCLIPTextModel"),c(ae,"class","relative group"),c(io,"href","/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPTextModel"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ae,"id","transformers.XCLIPVisionModel"),c(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ae,"href","#transformers.XCLIPVisionModel"),c(le,"class","relative group"),c(lo,"href","/docs/transformers/main/en/model_doc/xclip#transformers.XCLIPVisionModel"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,d),_(t,x,u),_(t,g,u),e(g,m),e(m,v),C(n,v,null),e(g,p),e(g,L),e(L,Hn),_(t,on,u),_(t,R,u),e(R,fe),e(fe,Po),C(Ge,Po,null),e(R,Gn),e(R,Co),e(Co,Un),_(t,nn,u),_(t,S,u),e(S,Jn),e(S,Ue),e(Ue,Kn),e(S,Zn),e(S,qt),e(qt,Qn),e(S,Yn),_(t,sn,u),_(t,At,u),e(At,es),_(t,an,u),_(t,Vt,u),e(Vt,$o),e($o,ts),_(t,rn,u),_(t,Ft,u),e(Ft,os),_(t,ln,u),_(t,he,u),e(he,Je),e(Je,ns),e(Je,Ot),e(Ot,ss),e(Je,as),e(he,rs),e(he,Ke),e(Ke,is),e(Ke,Ze),e(Ze,ls),e(Ke,ds),_(t,dn,u),_(t,ue,u),_(t,cn,u),_(t,Qe,u),e(Qe,cs),e(Qe,Dt),e(Dt,ps),_(t,pn,u),_(t,N,u),e(N,ms),e(N,Ye),e(Ye,fs),e(N,hs),e(N,et),e(et,us),e(N,gs),_(t,mn,u),_(t,H,u),e(H,ge),e(ge,Io),C(tt,Io,null),e(H,_s),e(H,wo),e(wo,vs),_(t,fn,u),_(t,T,u),C(ot,T,null),e(T,xs),e(T,yo),e(yo,bs),e(T,Ps),e(T,k),e(k,St),e(St,Cs),e(k,$s),e(k,Nt),e(Nt,Is),e(k,ws),e(k,Wt),e(Wt,ys),e(k,Ls),e(k,Lo),e(Lo,Ts),e(k,js),e(k,Bt),e(Bt,Xs),e(k,ks),e(T,Ms),e(T,_e),C(nt,_e,null),e(_e,Es),e(_e,st),e(st,zs),e(st,Rt),e(Rt,qs),e(st,As),e(T,Vs),e(T,ve),C(at,ve,null),e(ve,Fs),e(ve,rt),e(rt,Os),e(rt,Ht),e(Ht,Ds),e(rt,Ss),_(t,hn,u),_(t,G,u),e(G,xe),e(xe,To),C(it,To,null),e(G,Ns),e(G,jo),e(jo,Ws),_(t,un,u),_(t,M,u),C(lt,M,null),e(M,Bs),e(M,be),e(be,Gt),e(Gt,Rs),e(be,Hs),e(be,Ut),e(Ut,Gs),e(be,Us),e(M,Js),e(M,U),e(U,Ks),e(U,Jt),e(Jt,Zs),e(U,Qs),e(U,Kt),e(Kt,Ys),e(U,ea),e(M,ta),e(M,Pe),C(dt,Pe,null),e(Pe,oa),e(Pe,ct),e(ct,na),e(ct,Zt),e(Zt,sa),e(ct,aa),_(t,gn,u),_(t,J,u),e(J,Ce),e(Ce,Xo),C(pt,Xo,null),e(J,ra),e(J,ko),e(ko,ia),_(t,_n,u),_(t,E,u),C(mt,E,null),e(E,la),e(E,K),e(K,da),e(K,Qt),e(Qt,ca),e(K,pa),e(K,ft),e(ft,ma),e(K,fa),e(E,ha),e(E,Z),e(Z,ua),e(Z,Yt),e(Yt,ga),e(Z,_a),e(Z,eo),e(eo,va),e(Z,xa),e(E,ba),C($e,E,null),_(t,vn,u),_(t,Q,u),e(Q,Ie),e(Ie,Mo),C(ht,Mo,null),e(Q,Pa),e(Q,Eo),e(Eo,Ca),_(t,xn,u),_(t,z,u),C(ut,z,null),e(z,$a),e(z,Y),e(Y,Ia),e(Y,to),e(to,wa),e(Y,ya),e(Y,gt),e(gt,La),e(Y,Ta),e(z,ja),e(z,ee),e(ee,Xa),e(ee,oo),e(oo,ka),e(ee,Ma),e(ee,no),e(no,Ea),e(ee,za),e(z,qa),C(we,z,null),_(t,bn,u),_(t,te,u),e(te,ye),e(ye,zo),C(_t,zo,null),e(te,Aa),e(te,qo),e(qo,Va),_(t,Pn,u),_(t,j,u),C(vt,j,null),e(j,Fa),e(j,xt),e(xt,Oa),e(xt,bt),e(bt,Da),e(xt,Sa),e(j,Na),e(j,q),C(Pt,q,null),e(q,Wa),e(q,oe),e(oe,Ba),e(oe,so),e(so,Ra),e(oe,Ha),e(oe,Ao),e(Ao,Ga),e(oe,Ua),e(q,Ja),C(Le,q,null),e(q,Ka),C(Te,q,null),e(j,Za),e(j,A),C(Ct,A,null),e(A,Qa),e(A,ne),e(ne,Ya),e(ne,ao),e(ao,er),e(ne,tr),e(ne,Vo),e(Vo,or),e(ne,nr),e(A,sr),C(je,A,null),e(A,ar),C(Xe,A,null),e(j,rr),e(j,V),C($t,V,null),e(V,ir),e(V,se),e(se,lr),e(se,ro),e(ro,dr),e(se,cr),e(se,Fo),e(Fo,pr),e(se,mr),e(V,fr),C(ke,V,null),e(V,hr),C(Me,V,null),_(t,Cn,u),_(t,ae,u),e(ae,Ee),e(Ee,Oo),C(It,Oo,null),e(ae,ur),e(ae,Do),e(Do,gr),_(t,$n,u),_(t,re,u),C(wt,re,null),e(re,_r),e(re,F),C(yt,F,null),e(F,vr),e(F,ie),e(ie,xr),e(ie,io),e(io,br),e(ie,Pr),e(ie,So),e(So,Cr),e(ie,$r),e(F,Ir),C(ze,F,null),e(F,wr),C(qe,F,null),_(t,In,u),_(t,le,u),e(le,Ae),e(Ae,No),C(Lt,No,null),e(le,yr),e(le,Wo),e(Wo,Lr),_(t,wn,u),_(t,de,u),C(Tt,de,null),e(de,Tr),e(de,O),C(jt,O,null),e(O,jr),e(O,ce),e(ce,Xr),e(ce,lo),e(lo,kr),e(ce,Mr),e(ce,Bo),e(Bo,Er),e(ce,zr),e(O,qr),C(Ve,O,null),e(O,Ar),C(Fe,O,null),yn=!0},p(t,[u]){const Xt={};u&2&&(Xt.$$scope={dirty:u,ctx:t}),$e.$set(Xt);const Ro={};u&2&&(Ro.$$scope={dirty:u,ctx:t}),we.$set(Ro);const Ho={};u&2&&(Ho.$$scope={dirty:u,ctx:t}),Le.$set(Ho);const Go={};u&2&&(Go.$$scope={dirty:u,ctx:t}),Te.$set(Go);const kt={};u&2&&(kt.$$scope={dirty:u,ctx:t}),je.$set(kt);const Uo={};u&2&&(Uo.$$scope={dirty:u,ctx:t}),Xe.$set(Uo);const Jo={};u&2&&(Jo.$$scope={dirty:u,ctx:t}),ke.$set(Jo);const Ko={};u&2&&(Ko.$$scope={dirty:u,ctx:t}),Me.$set(Ko);const pe={};u&2&&(pe.$$scope={dirty:u,ctx:t}),ze.$set(pe);const Zo={};u&2&&(Zo.$$scope={dirty:u,ctx:t}),qe.$set(Zo);const Qo={};u&2&&(Qo.$$scope={dirty:u,ctx:t}),Ve.$set(Qo);const Yo={};u&2&&(Yo.$$scope={dirty:u,ctx:t}),Fe.$set(Yo)},i(t){yn||($(n.$$.fragment,t),$(Ge.$$.fragment,t),$(tt.$$.fragment,t),$(ot.$$.fragment,t),$(nt.$$.fragment,t),$(at.$$.fragment,t),$(it.$$.fragment,t),$(lt.$$.fragment,t),$(dt.$$.fragment,t),$(pt.$$.fragment,t),$(mt.$$.fragment,t),$($e.$$.fragment,t),$(ht.$$.fragment,t),$(ut.$$.fragment,t),$(we.$$.fragment,t),$(_t.$$.fragment,t),$(vt.$$.fragment,t),$(Pt.$$.fragment,t),$(Le.$$.fragment,t),$(Te.$$.fragment,t),$(Ct.$$.fragment,t),$(je.$$.fragment,t),$(Xe.$$.fragment,t),$($t.$$.fragment,t),$(ke.$$.fragment,t),$(Me.$$.fragment,t),$(It.$$.fragment,t),$(wt.$$.fragment,t),$(yt.$$.fragment,t),$(ze.$$.fragment,t),$(qe.$$.fragment,t),$(Lt.$$.fragment,t),$(Tt.$$.fragment,t),$(jt.$$.fragment,t),$(Ve.$$.fragment,t),$(Fe.$$.fragment,t),yn=!0)},o(t){I(n.$$.fragment,t),I(Ge.$$.fragment,t),I(tt.$$.fragment,t),I(ot.$$.fragment,t),I(nt.$$.fragment,t),I(at.$$.fragment,t),I(it.$$.fragment,t),I(lt.$$.fragment,t),I(dt.$$.fragment,t),I(pt.$$.fragment,t),I(mt.$$.fragment,t),I($e.$$.fragment,t),I(ht.$$.fragment,t),I(ut.$$.fragment,t),I(we.$$.fragment,t),I(_t.$$.fragment,t),I(vt.$$.fragment,t),I(Pt.$$.fragment,t),I(Le.$$.fragment,t),I(Te.$$.fragment,t),I(Ct.$$.fragment,t),I(je.$$.fragment,t),I(Xe.$$.fragment,t),I($t.$$.fragment,t),I(ke.$$.fragment,t),I(Me.$$.fragment,t),I(It.$$.fragment,t),I(wt.$$.fragment,t),I(yt.$$.fragment,t),I(ze.$$.fragment,t),I(qe.$$.fragment,t),I(Lt.$$.fragment,t),I(Tt.$$.fragment,t),I(jt.$$.fragment,t),I(Ve.$$.fragment,t),I(Fe.$$.fragment,t),yn=!1},d(t){o(d),t&&o(x),t&&o(g),w(n),t&&o(on),t&&o(R),w(Ge),t&&o(nn),t&&o(S),t&&o(sn),t&&o(At),t&&o(an),t&&o(Vt),t&&o(rn),t&&o(Ft),t&&o(ln),t&&o(he),t&&o(dn),t&&o(ue),t&&o(cn),t&&o(Qe),t&&o(pn),t&&o(N),t&&o(mn),t&&o(H),w(tt),t&&o(fn),t&&o(T),w(ot),w(nt),w(at),t&&o(hn),t&&o(G),w(it),t&&o(un),t&&o(M),w(lt),w(dt),t&&o(gn),t&&o(J),w(pt),t&&o(_n),t&&o(E),w(mt),w($e),t&&o(vn),t&&o(Q),w(ht),t&&o(xn),t&&o(z),w(ut),w(we),t&&o(bn),t&&o(te),w(_t),t&&o(Pn),t&&o(j),w(vt),w(Pt),w(Le),w(Te),w(Ct),w(je),w(Xe),w($t),w(ke),w(Me),t&&o(Cn),t&&o(ae),w(It),t&&o($n),t&&o(re),w(wt),w(yt),w(ze),w(qe),t&&o(In),t&&o(le),w(Lt),t&&o(wn),t&&o(de),w(Tt),w(jt),w(Ve),w(Fe)}}}const pl={local:"xclip",sections:[{local:"overview",title:"Overview"},{local:"transformers.XCLIPProcessor",title:"XCLIPProcessor"},{local:"transformers.XCLIPConfig",title:"XCLIPConfig"},{local:"transformers.XCLIPTextConfig",title:"XCLIPTextConfig"},{local:"transformers.XCLIPVisionConfig",title:"XCLIPVisionConfig"},{local:"transformers.XCLIPModel",title:"XCLIPModel"},{local:"transformers.XCLIPTextModel",title:"XCLIPTextModel"},{local:"transformers.XCLIPVisionModel",title:"XCLIPVisionModel"}],title:"X-CLIP"};function ml(y){return Zi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xl extends Hi{constructor(d){super();Gi(this,d,ml,cl,Ui,{})}}export{xl as default,pl as metadata};
