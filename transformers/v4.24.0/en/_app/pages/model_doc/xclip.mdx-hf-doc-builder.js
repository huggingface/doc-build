import{S as Ki,i as Zi,s as Qi,e as s,k as f,w as b,t as i,M as Yi,c as a,d as o,m as h,a as r,x as P,h as l,b as c,N as el,G as e,g as _,y as C,q as $,o as I,B as w,v as tl,L as qt}from"../../chunks/vendor-hf-doc-builder.js";import{T as on}from"../../chunks/Tip-hf-doc-builder.js";import{D as X}from"../../chunks/Docstring-hf-doc-builder.js";import{C as At}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as fe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as zt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ol(y){let d,x,g,m,v;return m=new At({props:{code:`from transformers import XCLIPTextModel, XCLIPTextConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),x=i("Example:"),g=f(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Example:"),p.forEach(o),g=h(n),P(m.$$.fragment,n)},m(n,p){_(n,d,p),e(d,x),_(n,g,p),C(m,n,p),v=!0},p:qt,i(n){v||($(m.$$.fragment,n),v=!0)},o(n){I(m.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(g),w(m,n)}}}function nl(y){let d,x,g,m,v;return m=new At({props:{code:`from transformers import XCLIPVisionModel, XCLIPVisionConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),x=i("Example:"),g=f(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Example:"),p.forEach(o),g=h(n),P(m.$$.fragment,n)},m(n,p){_(n,d,p),e(d,x),_(n,g,p),C(m,n,p),v=!0},p:qt,i(n){v||($(m.$$.fragment,n),v=!0)},o(n){I(m.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(g),w(m,n)}}}function sl(y){let d,x,g,m,v;return{c(){d=s("p"),x=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(p,"CODE",{});var L=r(g);m=l(L,"Module"),L.forEach(o),v=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){_(n,d,p),e(d,x),e(d,g),e(g,m),e(d,v)},d(n){n&&o(d)}}}function al(y){let d,x,g,m,v;return m=new At({props:{code:`from decord import VideoReader, cpu
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
tensor([[<span class="hljs-number">1.9496e-04</span>, <span class="hljs-number">9.9960e-01</span>, <span class="hljs-number">2.0825e-04</span>]])`}}),{c(){d=s("p"),x=i("Examples:"),g=f(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Examples:"),p.forEach(o),g=h(n),P(m.$$.fragment,n)},m(n,p){_(n,d,p),e(d,x),_(n,g,p),C(m,n,p),v=!0},p:qt,i(n){v||($(m.$$.fragment,n),v=!0)},o(n){I(m.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(g),w(m,n)}}}function rl(y){let d,x,g,m,v;return{c(){d=s("p"),x=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(p,"CODE",{});var L=r(g);m=l(L,"Module"),L.forEach(o),v=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){_(n,d,p),e(d,x),e(d,g),e(g,m),e(d,v)},d(n){n&&o(d)}}}function il(y){let d,x,g,m,v;return m=new At({props:{code:`from transformers import AutoTokenizer, AutoModel

tokenizer = AutoTokenizer.from_pretrained("microsoft/xclip-base-patch32")
model = AutoModel.from_pretrained("microsoft/xclip-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/xclip-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModel.from_pretrained(<span class="hljs-string">&quot;microsoft/xclip-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),x=i("Examples:"),g=f(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Examples:"),p.forEach(o),g=h(n),P(m.$$.fragment,n)},m(n,p){_(n,d,p),e(d,x),_(n,g,p),C(m,n,p),v=!0},p:qt,i(n){v||($(m.$$.fragment,n),v=!0)},o(n){I(m.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(g),w(m,n)}}}function ll(y){let d,x,g,m,v;return{c(){d=s("p"),x=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(p,"CODE",{});var L=r(g);m=l(L,"Module"),L.forEach(o),v=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){_(n,d,p),e(d,x),e(d,g),e(g,m),e(d,v)},d(n){n&&o(d)}}}function dl(y){let d,x,g,m,v;return m=new At({props:{code:`from decord import VideoReader, cpu
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

<span class="hljs-meta">&gt;&gt;&gt; </span>video_features = model.get_video_features(**inputs)`}}),{c(){d=s("p"),x=i("Examples:"),g=f(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Examples:"),p.forEach(o),g=h(n),P(m.$$.fragment,n)},m(n,p){_(n,d,p),e(d,x),_(n,g,p),C(m,n,p),v=!0},p:qt,i(n){v||($(m.$$.fragment,n),v=!0)},o(n){I(m.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(g),w(m,n)}}}function cl(y){let d,x,g,m,v;return{c(){d=s("p"),x=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(p,"CODE",{});var L=r(g);m=l(L,"Module"),L.forEach(o),v=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){_(n,d,p),e(d,x),e(d,g),e(g,m),e(d,v)},d(n){n&&o(d)}}}function pl(y){let d,x,g,m,v;return m=new At({props:{code:`from transformers import CLIPTokenizer, XCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),x=i("Examples:"),g=f(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Examples:"),p.forEach(o),g=h(n),P(m.$$.fragment,n)},m(n,p){_(n,d,p),e(d,x),_(n,g,p),C(m,n,p),v=!0},p:qt,i(n){v||($(m.$$.fragment,n),v=!0)},o(n){I(m.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(g),w(m,n)}}}function ml(y){let d,x,g,m,v;return{c(){d=s("p"),x=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),m=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(p,"CODE",{});var L=r(g);m=l(L,"Module"),L.forEach(o),v=l(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){_(n,d,p),e(d,x),e(d,g),e(g,m),e(d,v)},d(n){n&&o(d)}}}function fl(y){let d,x,g,m,v;return m=new At({props:{code:`from decord import VideoReader, cpu
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state`}}),{c(){d=s("p"),x=i("Examples:"),g=f(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var p=r(d);x=l(p,"Examples:"),p.forEach(o),g=h(n),P(m.$$.fragment,n)},m(n,p){_(n,d,p),e(d,x),_(n,g,p),C(m,n,p),v=!0},p:qt,i(n){v||($(m.$$.fragment,n),v=!0)},o(n){I(m.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(g),w(m,n)}}}function hl(y){let d,x,g,m,v,n,p,L,Gn,nn,H,he,$o,Ge,Un,Io,Jn,sn,S,Kn,Ue,Zn,Qn,Vt,Yn,es,an,Ft,ts,rn,Ot,wo,os,ln,Dt,ns,dn,ue,Je,ss,St,as,rs,is,Ke,ls,Ze,ds,cs,cn,ge,Sr,pn,Qe,ps,Nt,ms,mn,N,fs,Ye,hs,us,et,gs,_s,fn,G,_e,yo,tt,vs,Lo,xs,hn,T,ot,bs,To,Ps,Cs,k,Wt,$s,Is,Bt,ws,ys,Rt,Ls,Ts,jo,js,Xs,Ht,ks,Ms,Es,ve,nt,zs,st,qs,Gt,As,Vs,Fs,xe,at,Os,rt,Ds,Ut,Ss,Ns,un,U,be,Xo,it,Ws,ko,Bs,gn,M,lt,Rs,W,Jt,Hs,Gs,Kt,Us,Js,dt,Ks,Zs,Qs,J,Ys,Zt,ea,ta,Qt,oa,na,sa,Pe,ct,aa,pt,ra,Yt,ia,la,_n,K,Ce,Mo,mt,da,Eo,ca,vn,E,ft,pa,Z,ma,eo,fa,ha,ht,ua,ga,_a,Q,va,to,xa,ba,oo,Pa,Ca,$a,$e,xn,Y,Ie,zo,ut,Ia,qo,wa,bn,z,gt,ya,ee,La,no,Ta,ja,_t,Xa,ka,Ma,te,Ea,so,za,qa,ao,Aa,Va,Fa,we,Pn,oe,ye,Ao,vt,Oa,Vo,Da,Cn,j,xt,Sa,bt,Na,Pt,Wa,Ba,Ra,q,Ct,Ha,ne,Ga,ro,Ua,Ja,Fo,Ka,Za,Qa,Le,Ya,Te,er,A,$t,tr,se,or,io,nr,sr,Oo,ar,rr,ir,je,lr,Xe,dr,V,It,cr,ae,pr,lo,mr,fr,Do,hr,ur,gr,ke,_r,Me,$n,re,Ee,So,wt,vr,No,xr,In,ie,yt,br,F,Lt,Pr,le,Cr,co,$r,Ir,Wo,wr,yr,Lr,ze,Tr,qe,wn,de,Ae,Bo,Tt,jr,Ro,Xr,yn,ce,jt,kr,O,Xt,Mr,pe,Er,po,zr,qr,Ho,Ar,Vr,Fr,Ve,Or,Fe,Ln;return n=new fe({}),Ge=new fe({}),tt=new fe({}),ot=new X({props:{name:"class transformers.XCLIPProcessor",anchor:"transformers.XCLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.XCLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/videomae#transformers.VideoMAEFeatureExtractor">VideoMAEFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.XCLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPTokenizerFast">CLIPTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/x_clip/processing_x_clip.py#L22"}}),nt=new X({props:{name:"batch_decode",anchor:"transformers.XCLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/x_clip/processing_x_clip.py#L97"}}),at=new X({props:{name:"decode",anchor:"transformers.XCLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/x_clip/processing_x_clip.py#L104"}}),it=new fe({}),lt=new X({props:{name:"class transformers.XCLIPConfig",anchor:"transformers.XCLIPConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"prompt_layers",val:" = 2"},{name:"prompt_alpha",val:" = 0.1"},{name:"prompt_hidden_act",val:" = 'quick_gelu'"},{name:"prompt_num_attention_heads",val:" = 8"},{name:"prompt_attention_dropout",val:" = 0.0"},{name:"prompt_projection_dropout",val:" = 0.0"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XCLIPConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPTextConfig">XCLIPTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.XCLIPConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPVisionConfig">XCLIPVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.XCLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.XCLIPConfig.prompt_layers",description:`<strong>prompt_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of layers in the video specific prompt generator.`,name:"prompt_layers"},{anchor:"transformers.XCLIPConfig.prompt_alpha",description:`<strong>prompt_alpha</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Alpha value to use in the video specific prompt generator.`,name:"prompt_alpha"},{anchor:"transformers.XCLIPConfig.prompt_hidden_act",description:`<strong>prompt_hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the video specific prompt generator. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported.`,name:"prompt_hidden_act"},{anchor:"transformers.XCLIPConfig.prompt_num_attention_heads",description:`<strong>prompt_num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads in the cross-attention of the video specific prompt generator.`,name:"prompt_num_attention_heads"},{anchor:"transformers.XCLIPConfig.prompt_attention_dropout",description:`<strong>prompt_attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for the attention layers in the video specific prompt generator.`,name:"prompt_attention_dropout"},{anchor:"transformers.XCLIPConfig.prompt_projection_dropout",description:`<strong>prompt_projection_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for the projection layers in the video specific prompt generator.`,name:"prompt_projection_dropout"},{anchor:"transformers.XCLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> parameter. Default is used as per the original XCLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.XCLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/x_clip/configuration_x_clip.py#L271"}}),ct=new X({props:{name:"from_text_vision_configs",anchor:"transformers.XCLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": XCLIPTextConfig"},{name:"vision_config",val:": XCLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/x_clip/configuration_x_clip.py#L347",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPConfig"
>XCLIPConfig</a></p>
`}}),mt=new fe({}),ft=new X({props:{name:"class transformers.XCLIPTextConfig",anchor:"transformers.XCLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XCLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
Vocabulary size of the X-CLIP text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPModel">XCLIPModel</a>.`,name:"vocab_size"},{anchor:"transformers.XCLIPTextConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/x_clip/configuration_x_clip.py#L32"}}),$e=new zt({props:{anchor:"transformers.XCLIPTextConfig.example",$$slots:{default:[ol]},$$scope:{ctx:y}}}),ut=new fe({}),gt=new X({props:{name:"class transformers.XCLIPVisionConfig",anchor:"transformers.XCLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"mit_hidden_size",val:" = 512"},{name:"mit_intermediate_size",val:" = 2048"},{name:"mit_num_hidden_layers",val:" = 1"},{name:"mit_num_attention_heads",val:" = 8"},{name:"num_channels",val:" = 3"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"num_frames",val:" = 8"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"drop_path_rate",val:" = 0.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XCLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
Stochastic depth rate.`,name:"drop_path_rate"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/x_clip/configuration_x_clip.py#L141"}}),we=new zt({props:{anchor:"transformers.XCLIPVisionConfig.example",$$slots:{default:[nl]},$$scope:{ctx:y}}}),vt=new fe({}),xt=new X({props:{name:"class transformers.XCLIPModel",anchor:"transformers.XCLIPModel",parameters:[{name:"config",val:": XCLIPConfig"}],parametersDescription:[{anchor:"transformers.XCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPConfig">XCLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/x_clip/modeling_x_clip.py#L1251"}}),Ct=new X({props:{name:"forward",anchor:"transformers.XCLIPModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XCLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.XCLIPModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.XCLIPModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XCLIPModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XCLIPModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/x_clip/modeling_x_clip.py#L1431",returnDescription:`
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
  href="/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPTextModel"
>XCLIPTextModel</a>.</li>
<li><strong>video_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The video embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPVisionModel"
>XCLIPVisionModel</a>.</li>
<li><strong>text_model_output</strong> (<code>BaseModelOutputWithPooling</code>) \u2014 The output of the <a
  href="/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPTextModel"
>XCLIPTextModel</a>.</li>
<li><strong>vision_model_output</strong> (<code>BaseModelOutputWithPooling</code>) \u2014 The output of the <a
  href="/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPVisionModel"
>XCLIPVisionModel</a>.</li>
<li><strong>mit_output</strong> (<code>BaseModelOutputWithPooling</code>) \u2014 The output of <code>XCLIPMultiframeIntegrationTransformer</code> (MIT for short).</li>
</ul>
`,returnType:`
<p><code>transformers.models.x_clip.modeling_x_clip.XCLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Le=new on({props:{$$slots:{default:[sl]},$$scope:{ctx:y}}}),Te=new zt({props:{anchor:"transformers.XCLIPModel.forward.example",$$slots:{default:[al]},$$scope:{ctx:y}}}),$t=new X({props:{name:"get_text_features",anchor:"transformers.XCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/x_clip/modeling_x_clip.py#L1298",returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPTextModel"
>XCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),je=new on({props:{$$slots:{default:[rl]},$$scope:{ctx:y}}}),Xe=new zt({props:{anchor:"transformers.XCLIPModel.get_text_features.example",$$slots:{default:[il]},$$scope:{ctx:y}}}),It=new X({props:{name:"get_video_features",anchor:"transformers.XCLIPModel.get_video_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XCLIPModel.get_video_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.XCLIPModel.get_video_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XCLIPModel.get_video_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XCLIPModel.get_video_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/x_clip/modeling_x_clip.py#L1345",returnDescription:`
<p>The video embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPVisionModel"
>XCLIPVisionModel</a> and
<code>XCLIPMultiframeIntegrationTransformer</code>.</p>
`,returnType:`
<p>video_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),ke=new on({props:{$$slots:{default:[ll]},$$scope:{ctx:y}}}),Me=new zt({props:{anchor:"transformers.XCLIPModel.get_video_features.example",$$slots:{default:[dl]},$$scope:{ctx:y}}}),wt=new fe({}),yt=new X({props:{name:"class transformers.XCLIPTextModel",anchor:"transformers.XCLIPTextModel",parameters:[{name:"config",val:": XCLIPTextConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/x_clip/modeling_x_clip.py#L821"}}),Lt=new X({props:{name:"forward",anchor:"transformers.XCLIPTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XCLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/x_clip/modeling_x_clip.py#L836",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ze=new on({props:{$$slots:{default:[cl]},$$scope:{ctx:y}}}),qe=new zt({props:{anchor:"transformers.XCLIPTextModel.forward.example",$$slots:{default:[pl]},$$scope:{ctx:y}}}),Tt=new fe({}),jt=new X({props:{name:"class transformers.XCLIPVisionModel",anchor:"transformers.XCLIPVisionModel",parameters:[{name:"config",val:": XCLIPVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/x_clip/modeling_x_clip.py#L1036"}}),Xt=new X({props:{name:"forward",anchor:"transformers.XCLIPVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XCLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.XCLIPVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XCLIPVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XCLIPVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/x_clip/modeling_x_clip.py#L1049",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ve=new on({props:{$$slots:{default:[ml]},$$scope:{ctx:y}}}),Fe=new zt({props:{anchor:"transformers.XCLIPVisionModel.forward.example",$$slots:{default:[fl]},$$scope:{ctx:y}}}),{c(){d=s("meta"),x=f(),g=s("h1"),m=s("a"),v=s("span"),b(n.$$.fragment),p=f(),L=s("span"),Gn=i("X-CLIP"),nn=f(),H=s("h2"),he=s("a"),$o=s("span"),b(Ge.$$.fragment),Un=f(),Io=s("span"),Jn=i("Overview"),sn=f(),S=s("p"),Kn=i("The X-CLIP model was proposed in "),Ue=s("a"),Zn=i("Expanding Language-Image Pretrained Models for General Video Recognition"),Qn=i(` by Bolin Ni, Houwen Peng, Minghao Chen, Songyang Zhang, Gaofeng Meng, Jianlong Fu, Shiming Xiang, Haibin Ling.
X-CLIP is a minimal extension of `),Vt=s("a"),Yn=i("CLIP"),es=i(" for video. The model consists of a text encoder, a cross-frame vision encoder, a multi-frame integration Transformer, and a video-specific prompt generator."),an=f(),Ft=s("p"),ts=i("The abstract from the paper is the following:"),rn=f(),Ot=s("p"),wo=s("em"),os=i("Contrastive language-image pretraining has shown great success in learning visual-textual joint representation from web-scale data, demonstrating remarkable \u201Czero-shot\u201D generalization ability for various image tasks. However, how to effectively expand such new language-image pretraining methods to video domains is still an open problem. In this work, we present a simple yet effective approach that adapts the pretrained language-image models to video recognition directly, instead of pretraining a new model from scratch. More concretely, to capture the long-range dependencies of frames along the temporal dimension, we propose a cross-frame attention mechanism that explicitly exchanges information across frames. Such module is lightweight and can be plugged into pretrained language-image models seamlessly. Moreover, we propose a video-specific prompting scheme, which leverages video content information for generating discriminative textual prompts. Extensive experiments demonstrate that our approach is effective and can be generalized to different video recognition scenarios. In particular, under fully-supervised settings, our approach achieves a top-1 accuracy of 87.1% on Kinectics-400, while using 12 times fewer FLOPs compared with Swin-L and ViViT-H. In zero-shot experiments, our approach surpasses the current state-of-the-art methods by +7.6% and +14.9% in terms of top-1 accuracy under two popular protocols. In few-shot scenarios, our approach outperforms previous best methods by +32.1% and +23.1% when the labeled data is extremely limited."),ln=f(),Dt=s("p"),ns=i("Tips:"),dn=f(),ue=s("ul"),Je=s("li"),ss=i("Usage of X-CLIP is identical to "),St=s("a"),as=i("CLIP"),rs=i("."),is=f(),Ke=s("li"),ls=i("Demo notebooks for X-CLIP can be found "),Ze=s("a"),ds=i("here"),cs=i("."),cn=f(),ge=s("img"),pn=f(),Qe=s("small"),ps=i("X-CLIP architecture. Taken from the "),Nt=s("a"),ms=i("original paper."),mn=f(),N=s("p"),fs=i("This model was contributed by "),Ye=s("a"),hs=i("nielsr"),us=i(`.
The original code can be found `),et=s("a"),gs=i("here"),_s=i("."),fn=f(),G=s("h2"),_e=s("a"),yo=s("span"),b(tt.$$.fragment),vs=f(),Lo=s("span"),xs=i("XCLIPProcessor"),hn=f(),T=s("div"),b(ot.$$.fragment),bs=f(),To=s("p"),Ps=i(`Constructs an X-CLIP processor which wraps a VideoMAE feature extractor and a CLIP tokenizer into a single
processor.`),Cs=f(),k=s("p"),Wt=s("a"),$s=i("XCLIPProcessor"),Is=i(" offers all the functionalities of "),Bt=s("a"),ws=i("VideoMAEFeatureExtractor"),ys=i(" and "),Rt=s("a"),Ls=i("CLIPTokenizerFast"),Ts=i(`. See
the `),jo=s("code"),js=i("__call__()"),Xs=i(" and "),Ht=s("a"),ks=i("decode()"),Ms=i(" for more information."),Es=f(),ve=s("div"),b(nt.$$.fragment),zs=f(),st=s("p"),qs=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Gt=s("a"),As=i("batch_decode()"),Vs=i(`. Please
refer to the docstring of this method for more information.`),Fs=f(),xe=s("div"),b(at.$$.fragment),Os=f(),rt=s("p"),Ds=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ut=s("a"),Ss=i("decode()"),Ns=i(`. Please refer to
the docstring of this method for more information.`),un=f(),U=s("h2"),be=s("a"),Xo=s("span"),b(it.$$.fragment),Ws=f(),ko=s("span"),Bs=i("XCLIPConfig"),gn=f(),M=s("div"),b(lt.$$.fragment),Rs=f(),W=s("p"),Jt=s("a"),Hs=i("XCLIPConfig"),Gs=i(" is the configuration class to store the configuration of a "),Kt=s("a"),Us=i("XCLIPModel"),Js=i(`. It is used to
instantiate X-CLIP model according to the specified arguments, defining the text model and vision model configs.
Instantiating a configuration with the defaults will yield a similar configuration to that of the X-CLIP
`),dt=s("a"),Ks=i("microsoft/xclip-base-patch32"),Zs=i(" architecture."),Qs=f(),J=s("p"),Ys=i("Configuration objects inherit from "),Zt=s("a"),ea=i("PretrainedConfig"),ta=i(` and can be used to control the model outputs. Read the
documentation from `),Qt=s("a"),oa=i("PretrainedConfig"),na=i(" for more information."),sa=f(),Pe=s("div"),b(ct.$$.fragment),aa=f(),pt=s("p"),ra=i("Instantiate a "),Yt=s("a"),ia=i("XCLIPConfig"),la=i(` (or a derived class) from xclip text model configuration and xclip vision model
configuration.`),_n=f(),K=s("h2"),Ce=s("a"),Mo=s("span"),b(mt.$$.fragment),da=f(),Eo=s("span"),ca=i("XCLIPTextConfig"),vn=f(),E=s("div"),b(ft.$$.fragment),pa=f(),Z=s("p"),ma=i("This is the configuration class to store the configuration of a "),eo=s("a"),fa=i("XCLIPModel"),ha=i(`. It is used to instantiate an X-CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the X-CLIP
`),ht=s("a"),ua=i("microsoft/xclip-base-patch32"),ga=i(" architecture."),_a=f(),Q=s("p"),va=i("Configuration objects inherit from "),to=s("a"),xa=i("PretrainedConfig"),ba=i(` and can be used to control the model outputs. Read the
documentation from `),oo=s("a"),Pa=i("PretrainedConfig"),Ca=i(" for more information."),$a=f(),b($e.$$.fragment),xn=f(),Y=s("h2"),Ie=s("a"),zo=s("span"),b(ut.$$.fragment),Ia=f(),qo=s("span"),wa=i("XCLIPVisionConfig"),bn=f(),z=s("div"),b(gt.$$.fragment),ya=f(),ee=s("p"),La=i("This is the configuration class to store the configuration of a "),no=s("a"),Ta=i("XCLIPModel"),ja=i(`. It is used to instantiate an X-CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the X-CLIP
`),_t=s("a"),Xa=i("microsoft/xclip-base-patch32"),ka=i(" architecture."),Ma=f(),te=s("p"),Ea=i("Configuration objects inherit from "),so=s("a"),za=i("PretrainedConfig"),qa=i(` and can be used to control the model outputs. Read the
documentation from `),ao=s("a"),Aa=i("PretrainedConfig"),Va=i(" for more information."),Fa=f(),b(we.$$.fragment),Pn=f(),oe=s("h2"),ye=s("a"),Ao=s("span"),b(vt.$$.fragment),Oa=f(),Vo=s("span"),Da=i("XCLIPModel"),Cn=f(),j=s("div"),b(xt.$$.fragment),Sa=f(),bt=s("p"),Na=i("This model is a PyTorch "),Pt=s("a"),Wa=i("torch.nn.Module"),Ba=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ra=f(),q=s("div"),b(Ct.$$.fragment),Ha=f(),ne=s("p"),Ga=i("The "),ro=s("a"),Ua=i("XCLIPModel"),Ja=i(" forward method, overrides the "),Fo=s("code"),Ka=i("__call__"),Za=i(" special method."),Qa=f(),b(Le.$$.fragment),Ya=f(),b(Te.$$.fragment),er=f(),A=s("div"),b($t.$$.fragment),tr=f(),se=s("p"),or=i("The "),io=s("a"),nr=i("XCLIPModel"),sr=i(" forward method, overrides the "),Oo=s("code"),ar=i("__call__"),rr=i(" special method."),ir=f(),b(je.$$.fragment),lr=f(),b(Xe.$$.fragment),dr=f(),V=s("div"),b(It.$$.fragment),cr=f(),ae=s("p"),pr=i("The "),lo=s("a"),mr=i("XCLIPModel"),fr=i(" forward method, overrides the "),Do=s("code"),hr=i("__call__"),ur=i(" special method."),gr=f(),b(ke.$$.fragment),_r=f(),b(Me.$$.fragment),$n=f(),re=s("h2"),Ee=s("a"),So=s("span"),b(wt.$$.fragment),vr=f(),No=s("span"),xr=i("XCLIPTextModel"),In=f(),ie=s("div"),b(yt.$$.fragment),br=f(),F=s("div"),b(Lt.$$.fragment),Pr=f(),le=s("p"),Cr=i("The "),co=s("a"),$r=i("XCLIPTextModel"),Ir=i(" forward method, overrides the "),Wo=s("code"),wr=i("__call__"),yr=i(" special method."),Lr=f(),b(ze.$$.fragment),Tr=f(),b(qe.$$.fragment),wn=f(),de=s("h2"),Ae=s("a"),Bo=s("span"),b(Tt.$$.fragment),jr=f(),Ro=s("span"),Xr=i("XCLIPVisionModel"),yn=f(),ce=s("div"),b(jt.$$.fragment),kr=f(),O=s("div"),b(Xt.$$.fragment),Mr=f(),pe=s("p"),Er=i("The "),po=s("a"),zr=i("XCLIPVisionModel"),qr=i(" forward method, overrides the "),Ho=s("code"),Ar=i("__call__"),Vr=i(" special method."),Fr=f(),b(Ve.$$.fragment),Or=f(),b(Fe.$$.fragment),this.h()},l(t){const u=Yi('[data-svelte="svelte-1phssyn"]',document.head);d=a(u,"META",{name:!0,content:!0}),u.forEach(o),x=h(t),g=a(t,"H1",{class:!0});var kt=r(g);m=a(kt,"A",{id:!0,class:!0,href:!0});var Go=r(m);v=a(Go,"SPAN",{});var Uo=r(v);P(n.$$.fragment,Uo),Uo.forEach(o),Go.forEach(o),p=h(kt),L=a(kt,"SPAN",{});var Jo=r(L);Gn=l(Jo,"X-CLIP"),Jo.forEach(o),kt.forEach(o),nn=h(t),H=a(t,"H2",{class:!0});var Mt=r(H);he=a(Mt,"A",{id:!0,class:!0,href:!0});var Ko=r(he);$o=a(Ko,"SPAN",{});var Zo=r($o);P(Ge.$$.fragment,Zo),Zo.forEach(o),Ko.forEach(o),Un=h(Mt),Io=a(Mt,"SPAN",{});var Qo=r(Io);Jn=l(Qo,"Overview"),Qo.forEach(o),Mt.forEach(o),sn=h(t),S=a(t,"P",{});var me=r(S);Kn=l(me,"The X-CLIP model was proposed in "),Ue=a(me,"A",{href:!0,rel:!0});var Yo=r(Ue);Zn=l(Yo,"Expanding Language-Image Pretrained Models for General Video Recognition"),Yo.forEach(o),Qn=l(me,` by Bolin Ni, Houwen Peng, Minghao Chen, Songyang Zhang, Gaofeng Meng, Jianlong Fu, Shiming Xiang, Haibin Ling.
X-CLIP is a minimal extension of `),Vt=a(me,"A",{href:!0});var en=r(Vt);Yn=l(en,"CLIP"),en.forEach(o),es=l(me," for video. The model consists of a text encoder, a cross-frame vision encoder, a multi-frame integration Transformer, and a video-specific prompt generator."),me.forEach(o),an=h(t),Ft=a(t,"P",{});var tn=r(Ft);ts=l(tn,"The abstract from the paper is the following:"),tn.forEach(o),rn=h(t),Ot=a(t,"P",{});var Nr=r(Ot);wo=a(Nr,"EM",{});var Wr=r(wo);os=l(Wr,"Contrastive language-image pretraining has shown great success in learning visual-textual joint representation from web-scale data, demonstrating remarkable \u201Czero-shot\u201D generalization ability for various image tasks. However, how to effectively expand such new language-image pretraining methods to video domains is still an open problem. In this work, we present a simple yet effective approach that adapts the pretrained language-image models to video recognition directly, instead of pretraining a new model from scratch. More concretely, to capture the long-range dependencies of frames along the temporal dimension, we propose a cross-frame attention mechanism that explicitly exchanges information across frames. Such module is lightweight and can be plugged into pretrained language-image models seamlessly. Moreover, we propose a video-specific prompting scheme, which leverages video content information for generating discriminative textual prompts. Extensive experiments demonstrate that our approach is effective and can be generalized to different video recognition scenarios. In particular, under fully-supervised settings, our approach achieves a top-1 accuracy of 87.1% on Kinectics-400, while using 12 times fewer FLOPs compared with Swin-L and ViViT-H. In zero-shot experiments, our approach surpasses the current state-of-the-art methods by +7.6% and +14.9% in terms of top-1 accuracy under two popular protocols. In few-shot scenarios, our approach outperforms previous best methods by +32.1% and +23.1% when the labeled data is extremely limited."),Wr.forEach(o),Nr.forEach(o),ln=h(t),Dt=a(t,"P",{});var Br=r(Dt);ns=l(Br,"Tips:"),Br.forEach(o),dn=h(t),ue=a(t,"UL",{});var Tn=r(ue);Je=a(Tn,"LI",{});var jn=r(Je);ss=l(jn,"Usage of X-CLIP is identical to "),St=a(jn,"A",{href:!0});var Rr=r(St);as=l(Rr,"CLIP"),Rr.forEach(o),rs=l(jn,"."),jn.forEach(o),is=h(Tn),Ke=a(Tn,"LI",{});var Xn=r(Ke);ls=l(Xn,"Demo notebooks for X-CLIP can be found "),Ze=a(Xn,"A",{href:!0,rel:!0});var Hr=r(Ze);ds=l(Hr,"here"),Hr.forEach(o),cs=l(Xn,"."),Xn.forEach(o),Tn.forEach(o),cn=h(t),ge=a(t,"IMG",{src:!0,alt:!0,width:!0}),pn=h(t),Qe=a(t,"SMALL",{});var Dr=r(Qe);ps=l(Dr,"X-CLIP architecture. Taken from the "),Nt=a(Dr,"A",{href:!0});var Gr=r(Nt);ms=l(Gr,"original paper."),Gr.forEach(o),Dr.forEach(o),mn=h(t),N=a(t,"P",{});var mo=r(N);fs=l(mo,"This model was contributed by "),Ye=a(mo,"A",{href:!0,rel:!0});var Ur=r(Ye);hs=l(Ur,"nielsr"),Ur.forEach(o),us=l(mo,`.
The original code can be found `),et=a(mo,"A",{href:!0,rel:!0});var Jr=r(et);gs=l(Jr,"here"),Jr.forEach(o),_s=l(mo,"."),mo.forEach(o),fn=h(t),G=a(t,"H2",{class:!0});var kn=r(G);_e=a(kn,"A",{id:!0,class:!0,href:!0});var Kr=r(_e);yo=a(Kr,"SPAN",{});var Zr=r(yo);P(tt.$$.fragment,Zr),Zr.forEach(o),Kr.forEach(o),vs=h(kn),Lo=a(kn,"SPAN",{});var Qr=r(Lo);xs=l(Qr,"XCLIPProcessor"),Qr.forEach(o),kn.forEach(o),hn=h(t),T=a(t,"DIV",{class:!0});var B=r(T);P(ot.$$.fragment,B),bs=h(B),To=a(B,"P",{});var Yr=r(To);Ps=l(Yr,`Constructs an X-CLIP processor which wraps a VideoMAE feature extractor and a CLIP tokenizer into a single
processor.`),Yr.forEach(o),Cs=h(B),k=a(B,"P",{});var D=r(k);Wt=a(D,"A",{href:!0});var ei=r(Wt);$s=l(ei,"XCLIPProcessor"),ei.forEach(o),Is=l(D," offers all the functionalities of "),Bt=a(D,"A",{href:!0});var ti=r(Bt);ws=l(ti,"VideoMAEFeatureExtractor"),ti.forEach(o),ys=l(D," and "),Rt=a(D,"A",{href:!0});var oi=r(Rt);Ls=l(oi,"CLIPTokenizerFast"),oi.forEach(o),Ts=l(D,`. See
the `),jo=a(D,"CODE",{});var ni=r(jo);js=l(ni,"__call__()"),ni.forEach(o),Xs=l(D," and "),Ht=a(D,"A",{href:!0});var si=r(Ht);ks=l(si,"decode()"),si.forEach(o),Ms=l(D," for more information."),D.forEach(o),Es=h(B),ve=a(B,"DIV",{class:!0});var Mn=r(ve);P(nt.$$.fragment,Mn),zs=h(Mn),st=a(Mn,"P",{});var En=r(st);qs=l(En,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Gt=a(En,"A",{href:!0});var ai=r(Gt);As=l(ai,"batch_decode()"),ai.forEach(o),Vs=l(En,`. Please
refer to the docstring of this method for more information.`),En.forEach(o),Mn.forEach(o),Fs=h(B),xe=a(B,"DIV",{class:!0});var zn=r(xe);P(at.$$.fragment,zn),Os=h(zn),rt=a(zn,"P",{});var qn=r(rt);Ds=l(qn,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ut=a(qn,"A",{href:!0});var ri=r(Ut);Ss=l(ri,"decode()"),ri.forEach(o),Ns=l(qn,`. Please refer to
the docstring of this method for more information.`),qn.forEach(o),zn.forEach(o),B.forEach(o),un=h(t),U=a(t,"H2",{class:!0});var An=r(U);be=a(An,"A",{id:!0,class:!0,href:!0});var ii=r(be);Xo=a(ii,"SPAN",{});var li=r(Xo);P(it.$$.fragment,li),li.forEach(o),ii.forEach(o),Ws=h(An),ko=a(An,"SPAN",{});var di=r(ko);Bs=l(di,"XCLIPConfig"),di.forEach(o),An.forEach(o),gn=h(t),M=a(t,"DIV",{class:!0});var Oe=r(M);P(lt.$$.fragment,Oe),Rs=h(Oe),W=a(Oe,"P",{});var Et=r(W);Jt=a(Et,"A",{href:!0});var ci=r(Jt);Hs=l(ci,"XCLIPConfig"),ci.forEach(o),Gs=l(Et," is the configuration class to store the configuration of a "),Kt=a(Et,"A",{href:!0});var pi=r(Kt);Us=l(pi,"XCLIPModel"),pi.forEach(o),Js=l(Et,`. It is used to
instantiate X-CLIP model according to the specified arguments, defining the text model and vision model configs.
Instantiating a configuration with the defaults will yield a similar configuration to that of the X-CLIP
`),dt=a(Et,"A",{href:!0,rel:!0});var mi=r(dt);Ks=l(mi,"microsoft/xclip-base-patch32"),mi.forEach(o),Zs=l(Et," architecture."),Et.forEach(o),Qs=h(Oe),J=a(Oe,"P",{});var fo=r(J);Ys=l(fo,"Configuration objects inherit from "),Zt=a(fo,"A",{href:!0});var fi=r(Zt);ea=l(fi,"PretrainedConfig"),fi.forEach(o),ta=l(fo,` and can be used to control the model outputs. Read the
documentation from `),Qt=a(fo,"A",{href:!0});var hi=r(Qt);oa=l(hi,"PretrainedConfig"),hi.forEach(o),na=l(fo," for more information."),fo.forEach(o),sa=h(Oe),Pe=a(Oe,"DIV",{class:!0});var Vn=r(Pe);P(ct.$$.fragment,Vn),aa=h(Vn),pt=a(Vn,"P",{});var Fn=r(pt);ra=l(Fn,"Instantiate a "),Yt=a(Fn,"A",{href:!0});var ui=r(Yt);ia=l(ui,"XCLIPConfig"),ui.forEach(o),la=l(Fn,` (or a derived class) from xclip text model configuration and xclip vision model
configuration.`),Fn.forEach(o),Vn.forEach(o),Oe.forEach(o),_n=h(t),K=a(t,"H2",{class:!0});var On=r(K);Ce=a(On,"A",{id:!0,class:!0,href:!0});var gi=r(Ce);Mo=a(gi,"SPAN",{});var _i=r(Mo);P(mt.$$.fragment,_i),_i.forEach(o),gi.forEach(o),da=h(On),Eo=a(On,"SPAN",{});var vi=r(Eo);ca=l(vi,"XCLIPTextConfig"),vi.forEach(o),On.forEach(o),vn=h(t),E=a(t,"DIV",{class:!0});var De=r(E);P(ft.$$.fragment,De),pa=h(De),Z=a(De,"P",{});var ho=r(Z);ma=l(ho,"This is the configuration class to store the configuration of a "),eo=a(ho,"A",{href:!0});var xi=r(eo);fa=l(xi,"XCLIPModel"),xi.forEach(o),ha=l(ho,`. It is used to instantiate an X-CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the X-CLIP
`),ht=a(ho,"A",{href:!0,rel:!0});var bi=r(ht);ua=l(bi,"microsoft/xclip-base-patch32"),bi.forEach(o),ga=l(ho," architecture."),ho.forEach(o),_a=h(De),Q=a(De,"P",{});var uo=r(Q);va=l(uo,"Configuration objects inherit from "),to=a(uo,"A",{href:!0});var Pi=r(to);xa=l(Pi,"PretrainedConfig"),Pi.forEach(o),ba=l(uo,` and can be used to control the model outputs. Read the
documentation from `),oo=a(uo,"A",{href:!0});var Ci=r(oo);Pa=l(Ci,"PretrainedConfig"),Ci.forEach(o),Ca=l(uo," for more information."),uo.forEach(o),$a=h(De),P($e.$$.fragment,De),De.forEach(o),xn=h(t),Y=a(t,"H2",{class:!0});var Dn=r(Y);Ie=a(Dn,"A",{id:!0,class:!0,href:!0});var $i=r(Ie);zo=a($i,"SPAN",{});var Ii=r(zo);P(ut.$$.fragment,Ii),Ii.forEach(o),$i.forEach(o),Ia=h(Dn),qo=a(Dn,"SPAN",{});var wi=r(qo);wa=l(wi,"XCLIPVisionConfig"),wi.forEach(o),Dn.forEach(o),bn=h(t),z=a(t,"DIV",{class:!0});var Se=r(z);P(gt.$$.fragment,Se),ya=h(Se),ee=a(Se,"P",{});var go=r(ee);La=l(go,"This is the configuration class to store the configuration of a "),no=a(go,"A",{href:!0});var yi=r(no);Ta=l(yi,"XCLIPModel"),yi.forEach(o),ja=l(go,`. It is used to instantiate an X-CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the X-CLIP
`),_t=a(go,"A",{href:!0,rel:!0});var Li=r(_t);Xa=l(Li,"microsoft/xclip-base-patch32"),Li.forEach(o),ka=l(go," architecture."),go.forEach(o),Ma=h(Se),te=a(Se,"P",{});var _o=r(te);Ea=l(_o,"Configuration objects inherit from "),so=a(_o,"A",{href:!0});var Ti=r(so);za=l(Ti,"PretrainedConfig"),Ti.forEach(o),qa=l(_o,` and can be used to control the model outputs. Read the
documentation from `),ao=a(_o,"A",{href:!0});var ji=r(ao);Aa=l(ji,"PretrainedConfig"),ji.forEach(o),Va=l(_o," for more information."),_o.forEach(o),Fa=h(Se),P(we.$$.fragment,Se),Se.forEach(o),Pn=h(t),oe=a(t,"H2",{class:!0});var Sn=r(oe);ye=a(Sn,"A",{id:!0,class:!0,href:!0});var Xi=r(ye);Ao=a(Xi,"SPAN",{});var ki=r(Ao);P(vt.$$.fragment,ki),ki.forEach(o),Xi.forEach(o),Oa=h(Sn),Vo=a(Sn,"SPAN",{});var Mi=r(Vo);Da=l(Mi,"XCLIPModel"),Mi.forEach(o),Sn.forEach(o),Cn=h(t),j=a(t,"DIV",{class:!0});var R=r(j);P(xt.$$.fragment,R),Sa=h(R),bt=a(R,"P",{});var Nn=r(bt);Na=l(Nn,"This model is a PyTorch "),Pt=a(Nn,"A",{href:!0,rel:!0});var Ei=r(Pt);Wa=l(Ei,"torch.nn.Module"),Ei.forEach(o),Ba=l(Nn,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Nn.forEach(o),Ra=h(R),q=a(R,"DIV",{class:!0});var Ne=r(q);P(Ct.$$.fragment,Ne),Ha=h(Ne),ne=a(Ne,"P",{});var vo=r(ne);Ga=l(vo,"The "),ro=a(vo,"A",{href:!0});var zi=r(ro);Ua=l(zi,"XCLIPModel"),zi.forEach(o),Ja=l(vo," forward method, overrides the "),Fo=a(vo,"CODE",{});var qi=r(Fo);Ka=l(qi,"__call__"),qi.forEach(o),Za=l(vo," special method."),vo.forEach(o),Qa=h(Ne),P(Le.$$.fragment,Ne),Ya=h(Ne),P(Te.$$.fragment,Ne),Ne.forEach(o),er=h(R),A=a(R,"DIV",{class:!0});var We=r(A);P($t.$$.fragment,We),tr=h(We),se=a(We,"P",{});var xo=r(se);or=l(xo,"The "),io=a(xo,"A",{href:!0});var Ai=r(io);nr=l(Ai,"XCLIPModel"),Ai.forEach(o),sr=l(xo," forward method, overrides the "),Oo=a(xo,"CODE",{});var Vi=r(Oo);ar=l(Vi,"__call__"),Vi.forEach(o),rr=l(xo," special method."),xo.forEach(o),ir=h(We),P(je.$$.fragment,We),lr=h(We),P(Xe.$$.fragment,We),We.forEach(o),dr=h(R),V=a(R,"DIV",{class:!0});var Be=r(V);P(It.$$.fragment,Be),cr=h(Be),ae=a(Be,"P",{});var bo=r(ae);pr=l(bo,"The "),lo=a(bo,"A",{href:!0});var Fi=r(lo);mr=l(Fi,"XCLIPModel"),Fi.forEach(o),fr=l(bo," forward method, overrides the "),Do=a(bo,"CODE",{});var Oi=r(Do);hr=l(Oi,"__call__"),Oi.forEach(o),ur=l(bo," special method."),bo.forEach(o),gr=h(Be),P(ke.$$.fragment,Be),_r=h(Be),P(Me.$$.fragment,Be),Be.forEach(o),R.forEach(o),$n=h(t),re=a(t,"H2",{class:!0});var Wn=r(re);Ee=a(Wn,"A",{id:!0,class:!0,href:!0});var Di=r(Ee);So=a(Di,"SPAN",{});var Si=r(So);P(wt.$$.fragment,Si),Si.forEach(o),Di.forEach(o),vr=h(Wn),No=a(Wn,"SPAN",{});var Ni=r(No);xr=l(Ni,"XCLIPTextModel"),Ni.forEach(o),Wn.forEach(o),In=h(t),ie=a(t,"DIV",{class:!0});var Bn=r(ie);P(yt.$$.fragment,Bn),br=h(Bn),F=a(Bn,"DIV",{class:!0});var Re=r(F);P(Lt.$$.fragment,Re),Pr=h(Re),le=a(Re,"P",{});var Po=r(le);Cr=l(Po,"The "),co=a(Po,"A",{href:!0});var Wi=r(co);$r=l(Wi,"XCLIPTextModel"),Wi.forEach(o),Ir=l(Po," forward method, overrides the "),Wo=a(Po,"CODE",{});var Bi=r(Wo);wr=l(Bi,"__call__"),Bi.forEach(o),yr=l(Po," special method."),Po.forEach(o),Lr=h(Re),P(ze.$$.fragment,Re),Tr=h(Re),P(qe.$$.fragment,Re),Re.forEach(o),Bn.forEach(o),wn=h(t),de=a(t,"H2",{class:!0});var Rn=r(de);Ae=a(Rn,"A",{id:!0,class:!0,href:!0});var Ri=r(Ae);Bo=a(Ri,"SPAN",{});var Hi=r(Bo);P(Tt.$$.fragment,Hi),Hi.forEach(o),Ri.forEach(o),jr=h(Rn),Ro=a(Rn,"SPAN",{});var Gi=r(Ro);Xr=l(Gi,"XCLIPVisionModel"),Gi.forEach(o),Rn.forEach(o),yn=h(t),ce=a(t,"DIV",{class:!0});var Hn=r(ce);P(jt.$$.fragment,Hn),kr=h(Hn),O=a(Hn,"DIV",{class:!0});var He=r(O);P(Xt.$$.fragment,He),Mr=h(He),pe=a(He,"P",{});var Co=r(pe);Er=l(Co,"The "),po=a(Co,"A",{href:!0});var Ui=r(po);zr=l(Ui,"XCLIPVisionModel"),Ui.forEach(o),qr=l(Co," forward method, overrides the "),Ho=a(Co,"CODE",{});var Ji=r(Ho);Ar=l(Ji,"__call__"),Ji.forEach(o),Vr=l(Co," special method."),Co.forEach(o),Fr=h(He),P(Ve.$$.fragment,He),Or=h(He),P(Fe.$$.fragment,He),He.forEach(o),Hn.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(ul)),c(m,"id","xclip"),c(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(m,"href","#xclip"),c(g,"class","relative group"),c(he,"id","overview"),c(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(he,"href","#overview"),c(H,"class","relative group"),c(Ue,"href","https://arxiv.org/abs/2208.02816"),c(Ue,"rel","nofollow"),c(Vt,"href","clip"),c(St,"href","clip"),c(Ze,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/X-CLIP"),c(Ze,"rel","nofollow"),el(ge.src,Sr="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/model_doc/xclip_architecture.png")||c(ge,"src",Sr),c(ge,"alt","drawing"),c(ge,"width","600"),c(Nt,"href","https://arxiv.org/abs/2208.02816"),c(Ye,"href","https://huggingface.co/nielsr"),c(Ye,"rel","nofollow"),c(et,"href","https://github.com/microsoft/VideoX/tree/master/X-CLIP"),c(et,"rel","nofollow"),c(_e,"id","transformers.XCLIPProcessor"),c(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_e,"href","#transformers.XCLIPProcessor"),c(G,"class","relative group"),c(Wt,"href","/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPProcessor"),c(Bt,"href","/docs/transformers/v4.24.0/en/model_doc/videomae#transformers.VideoMAEFeatureExtractor"),c(Rt,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPTokenizerFast"),c(Ht,"href","/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPProcessor.decode"),c(Gt,"href","/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),c(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ut,"href","/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),c(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(be,"id","transformers.XCLIPConfig"),c(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(be,"href","#transformers.XCLIPConfig"),c(U,"class","relative group"),c(Jt,"href","/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPConfig"),c(Kt,"href","/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPModel"),c(dt,"href","https://huggingface.co/microsoft/xclip-base-patch32"),c(dt,"rel","nofollow"),c(Zt,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Qt,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Yt,"href","/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPConfig"),c(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ce,"id","transformers.XCLIPTextConfig"),c(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ce,"href","#transformers.XCLIPTextConfig"),c(K,"class","relative group"),c(eo,"href","/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPModel"),c(ht,"href","https://huggingface.co/microsoft/xclip-base-patch32"),c(ht,"rel","nofollow"),c(to,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(oo,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ie,"id","transformers.XCLIPVisionConfig"),c(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ie,"href","#transformers.XCLIPVisionConfig"),c(Y,"class","relative group"),c(no,"href","/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPModel"),c(_t,"href","https://huggingface.co/microsoft/xclip-base-patch32"),c(_t,"rel","nofollow"),c(so,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(ao,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ye,"id","transformers.XCLIPModel"),c(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ye,"href","#transformers.XCLIPModel"),c(oe,"class","relative group"),c(Pt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Pt,"rel","nofollow"),c(ro,"href","/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPModel"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(io,"href","/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPModel"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(lo,"href","/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPModel"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ee,"id","transformers.XCLIPTextModel"),c(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ee,"href","#transformers.XCLIPTextModel"),c(re,"class","relative group"),c(co,"href","/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPTextModel"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ae,"id","transformers.XCLIPVisionModel"),c(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ae,"href","#transformers.XCLIPVisionModel"),c(de,"class","relative group"),c(po,"href","/docs/transformers/v4.24.0/en/model_doc/xclip#transformers.XCLIPVisionModel"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,d),_(t,x,u),_(t,g,u),e(g,m),e(m,v),C(n,v,null),e(g,p),e(g,L),e(L,Gn),_(t,nn,u),_(t,H,u),e(H,he),e(he,$o),C(Ge,$o,null),e(H,Un),e(H,Io),e(Io,Jn),_(t,sn,u),_(t,S,u),e(S,Kn),e(S,Ue),e(Ue,Zn),e(S,Qn),e(S,Vt),e(Vt,Yn),e(S,es),_(t,an,u),_(t,Ft,u),e(Ft,ts),_(t,rn,u),_(t,Ot,u),e(Ot,wo),e(wo,os),_(t,ln,u),_(t,Dt,u),e(Dt,ns),_(t,dn,u),_(t,ue,u),e(ue,Je),e(Je,ss),e(Je,St),e(St,as),e(Je,rs),e(ue,is),e(ue,Ke),e(Ke,ls),e(Ke,Ze),e(Ze,ds),e(Ke,cs),_(t,cn,u),_(t,ge,u),_(t,pn,u),_(t,Qe,u),e(Qe,ps),e(Qe,Nt),e(Nt,ms),_(t,mn,u),_(t,N,u),e(N,fs),e(N,Ye),e(Ye,hs),e(N,us),e(N,et),e(et,gs),e(N,_s),_(t,fn,u),_(t,G,u),e(G,_e),e(_e,yo),C(tt,yo,null),e(G,vs),e(G,Lo),e(Lo,xs),_(t,hn,u),_(t,T,u),C(ot,T,null),e(T,bs),e(T,To),e(To,Ps),e(T,Cs),e(T,k),e(k,Wt),e(Wt,$s),e(k,Is),e(k,Bt),e(Bt,ws),e(k,ys),e(k,Rt),e(Rt,Ls),e(k,Ts),e(k,jo),e(jo,js),e(k,Xs),e(k,Ht),e(Ht,ks),e(k,Ms),e(T,Es),e(T,ve),C(nt,ve,null),e(ve,zs),e(ve,st),e(st,qs),e(st,Gt),e(Gt,As),e(st,Vs),e(T,Fs),e(T,xe),C(at,xe,null),e(xe,Os),e(xe,rt),e(rt,Ds),e(rt,Ut),e(Ut,Ss),e(rt,Ns),_(t,un,u),_(t,U,u),e(U,be),e(be,Xo),C(it,Xo,null),e(U,Ws),e(U,ko),e(ko,Bs),_(t,gn,u),_(t,M,u),C(lt,M,null),e(M,Rs),e(M,W),e(W,Jt),e(Jt,Hs),e(W,Gs),e(W,Kt),e(Kt,Us),e(W,Js),e(W,dt),e(dt,Ks),e(W,Zs),e(M,Qs),e(M,J),e(J,Ys),e(J,Zt),e(Zt,ea),e(J,ta),e(J,Qt),e(Qt,oa),e(J,na),e(M,sa),e(M,Pe),C(ct,Pe,null),e(Pe,aa),e(Pe,pt),e(pt,ra),e(pt,Yt),e(Yt,ia),e(pt,la),_(t,_n,u),_(t,K,u),e(K,Ce),e(Ce,Mo),C(mt,Mo,null),e(K,da),e(K,Eo),e(Eo,ca),_(t,vn,u),_(t,E,u),C(ft,E,null),e(E,pa),e(E,Z),e(Z,ma),e(Z,eo),e(eo,fa),e(Z,ha),e(Z,ht),e(ht,ua),e(Z,ga),e(E,_a),e(E,Q),e(Q,va),e(Q,to),e(to,xa),e(Q,ba),e(Q,oo),e(oo,Pa),e(Q,Ca),e(E,$a),C($e,E,null),_(t,xn,u),_(t,Y,u),e(Y,Ie),e(Ie,zo),C(ut,zo,null),e(Y,Ia),e(Y,qo),e(qo,wa),_(t,bn,u),_(t,z,u),C(gt,z,null),e(z,ya),e(z,ee),e(ee,La),e(ee,no),e(no,Ta),e(ee,ja),e(ee,_t),e(_t,Xa),e(ee,ka),e(z,Ma),e(z,te),e(te,Ea),e(te,so),e(so,za),e(te,qa),e(te,ao),e(ao,Aa),e(te,Va),e(z,Fa),C(we,z,null),_(t,Pn,u),_(t,oe,u),e(oe,ye),e(ye,Ao),C(vt,Ao,null),e(oe,Oa),e(oe,Vo),e(Vo,Da),_(t,Cn,u),_(t,j,u),C(xt,j,null),e(j,Sa),e(j,bt),e(bt,Na),e(bt,Pt),e(Pt,Wa),e(bt,Ba),e(j,Ra),e(j,q),C(Ct,q,null),e(q,Ha),e(q,ne),e(ne,Ga),e(ne,ro),e(ro,Ua),e(ne,Ja),e(ne,Fo),e(Fo,Ka),e(ne,Za),e(q,Qa),C(Le,q,null),e(q,Ya),C(Te,q,null),e(j,er),e(j,A),C($t,A,null),e(A,tr),e(A,se),e(se,or),e(se,io),e(io,nr),e(se,sr),e(se,Oo),e(Oo,ar),e(se,rr),e(A,ir),C(je,A,null),e(A,lr),C(Xe,A,null),e(j,dr),e(j,V),C(It,V,null),e(V,cr),e(V,ae),e(ae,pr),e(ae,lo),e(lo,mr),e(ae,fr),e(ae,Do),e(Do,hr),e(ae,ur),e(V,gr),C(ke,V,null),e(V,_r),C(Me,V,null),_(t,$n,u),_(t,re,u),e(re,Ee),e(Ee,So),C(wt,So,null),e(re,vr),e(re,No),e(No,xr),_(t,In,u),_(t,ie,u),C(yt,ie,null),e(ie,br),e(ie,F),C(Lt,F,null),e(F,Pr),e(F,le),e(le,Cr),e(le,co),e(co,$r),e(le,Ir),e(le,Wo),e(Wo,wr),e(le,yr),e(F,Lr),C(ze,F,null),e(F,Tr),C(qe,F,null),_(t,wn,u),_(t,de,u),e(de,Ae),e(Ae,Bo),C(Tt,Bo,null),e(de,jr),e(de,Ro),e(Ro,Xr),_(t,yn,u),_(t,ce,u),C(jt,ce,null),e(ce,kr),e(ce,O),C(Xt,O,null),e(O,Mr),e(O,pe),e(pe,Er),e(pe,po),e(po,zr),e(pe,qr),e(pe,Ho),e(Ho,Ar),e(pe,Vr),e(O,Fr),C(Ve,O,null),e(O,Or),C(Fe,O,null),Ln=!0},p(t,[u]){const kt={};u&2&&(kt.$$scope={dirty:u,ctx:t}),$e.$set(kt);const Go={};u&2&&(Go.$$scope={dirty:u,ctx:t}),we.$set(Go);const Uo={};u&2&&(Uo.$$scope={dirty:u,ctx:t}),Le.$set(Uo);const Jo={};u&2&&(Jo.$$scope={dirty:u,ctx:t}),Te.$set(Jo);const Mt={};u&2&&(Mt.$$scope={dirty:u,ctx:t}),je.$set(Mt);const Ko={};u&2&&(Ko.$$scope={dirty:u,ctx:t}),Xe.$set(Ko);const Zo={};u&2&&(Zo.$$scope={dirty:u,ctx:t}),ke.$set(Zo);const Qo={};u&2&&(Qo.$$scope={dirty:u,ctx:t}),Me.$set(Qo);const me={};u&2&&(me.$$scope={dirty:u,ctx:t}),ze.$set(me);const Yo={};u&2&&(Yo.$$scope={dirty:u,ctx:t}),qe.$set(Yo);const en={};u&2&&(en.$$scope={dirty:u,ctx:t}),Ve.$set(en);const tn={};u&2&&(tn.$$scope={dirty:u,ctx:t}),Fe.$set(tn)},i(t){Ln||($(n.$$.fragment,t),$(Ge.$$.fragment,t),$(tt.$$.fragment,t),$(ot.$$.fragment,t),$(nt.$$.fragment,t),$(at.$$.fragment,t),$(it.$$.fragment,t),$(lt.$$.fragment,t),$(ct.$$.fragment,t),$(mt.$$.fragment,t),$(ft.$$.fragment,t),$($e.$$.fragment,t),$(ut.$$.fragment,t),$(gt.$$.fragment,t),$(we.$$.fragment,t),$(vt.$$.fragment,t),$(xt.$$.fragment,t),$(Ct.$$.fragment,t),$(Le.$$.fragment,t),$(Te.$$.fragment,t),$($t.$$.fragment,t),$(je.$$.fragment,t),$(Xe.$$.fragment,t),$(It.$$.fragment,t),$(ke.$$.fragment,t),$(Me.$$.fragment,t),$(wt.$$.fragment,t),$(yt.$$.fragment,t),$(Lt.$$.fragment,t),$(ze.$$.fragment,t),$(qe.$$.fragment,t),$(Tt.$$.fragment,t),$(jt.$$.fragment,t),$(Xt.$$.fragment,t),$(Ve.$$.fragment,t),$(Fe.$$.fragment,t),Ln=!0)},o(t){I(n.$$.fragment,t),I(Ge.$$.fragment,t),I(tt.$$.fragment,t),I(ot.$$.fragment,t),I(nt.$$.fragment,t),I(at.$$.fragment,t),I(it.$$.fragment,t),I(lt.$$.fragment,t),I(ct.$$.fragment,t),I(mt.$$.fragment,t),I(ft.$$.fragment,t),I($e.$$.fragment,t),I(ut.$$.fragment,t),I(gt.$$.fragment,t),I(we.$$.fragment,t),I(vt.$$.fragment,t),I(xt.$$.fragment,t),I(Ct.$$.fragment,t),I(Le.$$.fragment,t),I(Te.$$.fragment,t),I($t.$$.fragment,t),I(je.$$.fragment,t),I(Xe.$$.fragment,t),I(It.$$.fragment,t),I(ke.$$.fragment,t),I(Me.$$.fragment,t),I(wt.$$.fragment,t),I(yt.$$.fragment,t),I(Lt.$$.fragment,t),I(ze.$$.fragment,t),I(qe.$$.fragment,t),I(Tt.$$.fragment,t),I(jt.$$.fragment,t),I(Xt.$$.fragment,t),I(Ve.$$.fragment,t),I(Fe.$$.fragment,t),Ln=!1},d(t){o(d),t&&o(x),t&&o(g),w(n),t&&o(nn),t&&o(H),w(Ge),t&&o(sn),t&&o(S),t&&o(an),t&&o(Ft),t&&o(rn),t&&o(Ot),t&&o(ln),t&&o(Dt),t&&o(dn),t&&o(ue),t&&o(cn),t&&o(ge),t&&o(pn),t&&o(Qe),t&&o(mn),t&&o(N),t&&o(fn),t&&o(G),w(tt),t&&o(hn),t&&o(T),w(ot),w(nt),w(at),t&&o(un),t&&o(U),w(it),t&&o(gn),t&&o(M),w(lt),w(ct),t&&o(_n),t&&o(K),w(mt),t&&o(vn),t&&o(E),w(ft),w($e),t&&o(xn),t&&o(Y),w(ut),t&&o(bn),t&&o(z),w(gt),w(we),t&&o(Pn),t&&o(oe),w(vt),t&&o(Cn),t&&o(j),w(xt),w(Ct),w(Le),w(Te),w($t),w(je),w(Xe),w(It),w(ke),w(Me),t&&o($n),t&&o(re),w(wt),t&&o(In),t&&o(ie),w(yt),w(Lt),w(ze),w(qe),t&&o(wn),t&&o(de),w(Tt),t&&o(yn),t&&o(ce),w(jt),w(Xt),w(Ve),w(Fe)}}}const ul={local:"xclip",sections:[{local:"overview",title:"Overview"},{local:"transformers.XCLIPProcessor",title:"XCLIPProcessor"},{local:"transformers.XCLIPConfig",title:"XCLIPConfig"},{local:"transformers.XCLIPTextConfig",title:"XCLIPTextConfig"},{local:"transformers.XCLIPVisionConfig",title:"XCLIPVisionConfig"},{local:"transformers.XCLIPModel",title:"XCLIPModel"},{local:"transformers.XCLIPTextModel",title:"XCLIPTextModel"},{local:"transformers.XCLIPVisionModel",title:"XCLIPVisionModel"}],title:"X-CLIP"};function gl(y){return tl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class $l extends Ki{constructor(d){super();Zi(this,d,gl,hl,Qi,{})}}export{$l as default,ul as metadata};
