import{S as wl,i as yl,s as Ml,e as n,k as u,w,t as r,M as $l,c as s,d as o,m as f,a as l,x as y,h as i,b as c,F as e,g as _,y as M,q as $,o as k,B as W,v as kl,L as fe}from"../../chunks/vendor-6b77c823.js";import{T as sa}from"../../chunks/Tip-39098574.js";import{D as I}from"../../chunks/Docstring-1088f2fb.js";import{C as ge}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as he}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as ue}from"../../chunks/ExampleCodeBlock-5212b321.js";function Wl(L){let d,v,p,m,b;return m=new ge({props:{code:"",highlighted:""}}),{c(){d=n("p"),v=r("Example:"),p=u(),w(m.$$.fragment)},l(a){d=s(a,"P",{});var h=l(d);v=i(h,"Example:"),h.forEach(o),p=f(a),y(m.$$.fragment,a)},m(a,h){_(a,d,h),e(d,v),_(a,p,h),M(m,a,h),b=!0},p:fe,i(a){b||($(m.$$.fragment,a),b=!0)},o(a){k(m.$$.fragment,a),b=!1},d(a){a&&o(d),a&&o(p),W(m,a)}}}function Ll(L){let d,v,p,m,b;return m=new ge({props:{code:`from transformers import WavLMModel, WavLMConfig

# Initializing a WavLM facebook/wavlm-base-960h style configuration
configuration = WavLMConfig()

# Initializing a model from the facebook/wavlm-base-960h style configuration
model = WavLMModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> WavLMModel, WavLMConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a WavLM facebook/wavlm-base-960h style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = WavLMConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/wavlm-base-960h style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WavLMModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),v=r("Example:"),p=u(),w(m.$$.fragment)},l(a){d=s(a,"P",{});var h=l(d);v=i(h,"Example:"),h.forEach(o),p=f(a),y(m.$$.fragment,a)},m(a,h){_(a,d,h),e(d,v),_(a,p,h),M(m,a,h),b=!0},p:fe,i(a){b||($(m.$$.fragment,a),b=!0)},o(a){k(m.$$.fragment,a),b=!1},d(a){a&&o(d),a&&o(p),W(m,a)}}}function Tl(L){let d,v,p,m,b;return{c(){d=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),m=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=s(a,"P",{});var h=l(d);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(h,"CODE",{});var T=l(p);m=i(T,"Module"),T.forEach(o),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(a,h){_(a,d,h),e(d,v),e(d,p),e(p,m),e(d,b)},d(a){a&&o(d)}}}function Cl(L){let d,v,p,m,b;return m=new ge({props:{code:`from transformers import Wav2Vec2Processor, WavLMModel
import torch
from datasets import load_dataset

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("patrickvonplaten/wavlm-libri-clean-100h-base-plus")
model = WavLMModel.from_pretrained("patrickvonplaten/wavlm-libri-clean-100h-base-plus")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, WavLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/wavlm-libri-clean-100h-base-plus&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WavLMModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/wavlm-libri-clean-100h-base-plus&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">768</span>]`}}),{c(){d=n("p"),v=r("Example:"),p=u(),w(m.$$.fragment)},l(a){d=s(a,"P",{});var h=l(d);v=i(h,"Example:"),h.forEach(o),p=f(a),y(m.$$.fragment,a)},m(a,h){_(a,d,h),e(d,v),_(a,p,h),M(m,a,h),b=!0},p:fe,i(a){b||($(m.$$.fragment,a),b=!0)},o(a){k(m.$$.fragment,a),b=!1},d(a){a&&o(d),a&&o(p),W(m,a)}}}function jl(L){let d,v,p,m,b;return{c(){d=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),m=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=s(a,"P",{});var h=l(d);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(h,"CODE",{});var T=l(p);m=i(T,"Module"),T.forEach(o),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(a,h){_(a,d,h),e(d,v),e(d,p),e(p,m),e(d,b)},d(a){a&&o(d)}}}function Fl(L){let d,v,p,m,b;return m=new ge({props:{code:`from transformers import Wav2Vec2Processor, WavLMForCTC
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("patrickvonplaten/wavlm-libri-clean-100h-base-plus")
model = WavLMForCTC.from_pretrained("patrickvonplaten/wavlm-libri-clean-100h-base-plus")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)
transcription[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, WavLMForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/wavlm-libri-clean-100h-base-plus&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WavLMForCTC.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/wavlm-libri-clean-100h-base-plus&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;mister quilter is the aposle of the middle classes and we are glad to welcome his gospel&#x27;</span>`}}),{c(){d=n("p"),v=r("Example:"),p=u(),w(m.$$.fragment)},l(a){d=s(a,"P",{});var h=l(d);v=i(h,"Example:"),h.forEach(o),p=f(a),y(m.$$.fragment,a)},m(a,h){_(a,d,h),e(d,v),_(a,p,h),M(m,a,h),b=!0},p:fe,i(a){b||($(m.$$.fragment,a),b=!0)},o(a){k(m.$$.fragment,a),b=!1},d(a){a&&o(d),a&&o(p),W(m,a)}}}function xl(L){let d,v;return d=new ge({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">12.51</span>`}}),{c(){w(d.$$.fragment)},l(p){y(d.$$.fragment,p)},m(p,m){M(d,p,m),v=!0},p:fe,i(p){v||($(d.$$.fragment,p),v=!0)},o(p){k(d.$$.fragment,p),v=!1},d(p){W(d,p)}}}function ql(L){let d,v,p,m,b;return{c(){d=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),m=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=s(a,"P",{});var h=l(d);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(h,"CODE",{});var T=l(p);m=i(T,"Module"),T.forEach(o),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(a,h){_(a,d,h),e(d,v),e(d,p),e(p,m),e(d,b)},d(a){a&&o(d)}}}function El(L){let d,v,p,m,b;return m=new ge({props:{code:`from transformers import Wav2Vec2FeatureExtractor, WavLMForSequenceClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("hf-internal-testing/tiny-random-wavlm")
model = WavLMForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-wavlm")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_ids = torch.argmax(logits, dim=-1).item()
predicted_label = model.config.id2label[predicted_class_ids]
predicted_label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, WavLMForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-wavlm&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WavLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-wavlm&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label
<span class="hljs-string">&#x27;no&#x27;</span>`}}),{c(){d=n("p"),v=r("Example:"),p=u(),w(m.$$.fragment)},l(a){d=s(a,"P",{});var h=l(d);v=i(h,"Example:"),h.forEach(o),p=f(a),y(m.$$.fragment,a)},m(a,h){_(a,d,h),e(d,v),_(a,p,h),M(m,a,h),b=!0},p:fe,i(a){b||($(m.$$.fragment,a),b=!0)},o(a){k(m.$$.fragment,a),b=!1},d(a){a&&o(d),a&&o(p),W(m,a)}}}function Pl(L){let d,v;return d=new ge({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.7</span>`}}),{c(){w(d.$$.fragment)},l(p){y(d.$$.fragment,p)},m(p,m){M(d,p,m),v=!0},p:fe,i(p){v||($(d.$$.fragment,p),v=!0)},o(p){k(d.$$.fragment,p),v=!1},d(p){W(d,p)}}}function Sl(L){let d,v,p,m,b;return{c(){d=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),m=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=s(a,"P",{});var h=l(d);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(h,"CODE",{});var T=l(p);m=i(T,"Module"),T.forEach(o),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(a,h){_(a,d,h),e(d,v),e(d,p),e(p,m),e(d,b)},d(a){a&&o(d)}}}function Al(L){let d,v,p,m,b;return m=new ge({props:{code:`from transformers import Wav2Vec2FeatureExtractor, WavLMForAudioFrameClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("microsoft/wavlm-base-plus-sd")
model = WavLMForAudioFrameClassification.from_pretrained("microsoft/wavlm-base-plus-sd")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], return_tensors="pt", sampling_rate=sampling_rate)
with torch.no_grad():
    logits = model(**inputs).logits

probabilities = torch.sigmoid(logits[0])
# labels is a one-hot array of shape (num_frames, num_speakers)
labels = (probabilities > 0.5).long()
labels[0].tolist()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, WavLMForAudioFrameClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/wavlm-base-plus-sd&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WavLMForAudioFrameClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/wavlm-base-plus-sd&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, sampling_rate=sampling_rate)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>probabilities = torch.sigmoid(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># labels is a one-hot array of shape (num_frames, num_speakers)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = (probabilities &gt; <span class="hljs-number">0.5</span>).long()
<span class="hljs-meta">&gt;&gt;&gt; </span>labels[<span class="hljs-number">0</span>].tolist()
[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>]`}}),{c(){d=n("p"),v=r("Example:"),p=u(),w(m.$$.fragment)},l(a){d=s(a,"P",{});var h=l(d);v=i(h,"Example:"),h.forEach(o),p=f(a),y(m.$$.fragment,a)},m(a,h){_(a,d,h),e(d,v),_(a,p,h),M(m,a,h),b=!0},p:fe,i(a){b||($(m.$$.fragment,a),b=!0)},o(a){k(m.$$.fragment,a),b=!1},d(a){a&&o(d),a&&o(p),W(m,a)}}}function zl(L){let d,v,p,m,b;return{c(){d=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),m=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=s(a,"P",{});var h=l(d);v=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(h,"CODE",{});var T=l(p);m=i(T,"Module"),T.forEach(o),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(a,h){_(a,d,h),e(d,v),e(d,p),e(p,m),e(d,b)},d(a){a&&o(d)}}}function Ol(L){let d,v,p,m,b;return m=new ge({props:{code:`from transformers import Wav2Vec2FeatureExtractor, WavLMForXVector
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("microsoft/wavlm-base-plus-sv")
model = WavLMForXVector.from_pretrained("microsoft/wavlm-base-plus-sv")

# audio file is decoded on the fly
inputs = feature_extractor(
    [d["array"] for d in dataset[:2]["audio"]], sampling_rate=sampling_rate, return_tensors="pt", padding=True
)
with torch.no_grad():
    embeddings = model(**inputs).embeddings

embeddings = torch.nn.functional.normalize(embeddings, dim=-1).cpu()

# the resulting embeddings can be used for cosine similarity-based retrieval
cosine_sim = torch.nn.CosineSimilarity(dim=-1)
similarity = cosine_sim(embeddings[0], embeddings[1])
threshold = 0.7  # the optimal threshold is dataset-dependent
if similarity < threshold:
    print("Speakers are not the same!")
round(similarity.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, WavLMForXVector
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/wavlm-base-plus-sv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WavLMForXVector.from_pretrained(<span class="hljs-string">&quot;microsoft/wavlm-base-plus-sv&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(
<span class="hljs-meta">... </span>    [d[<span class="hljs-string">&quot;array&quot;</span>] <span class="hljs-keyword">for</span> d <span class="hljs-keyword">in</span> dataset[:<span class="hljs-number">2</span>][<span class="hljs-string">&quot;audio&quot;</span>]], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    embeddings = model(**inputs).embeddings

<span class="hljs-meta">&gt;&gt;&gt; </span>embeddings = torch.nn.functional.normalize(embeddings, dim=-<span class="hljs-number">1</span>).cpu()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the resulting embeddings can be used for cosine similarity-based retrieval</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>cosine_sim = torch.nn.CosineSimilarity(dim=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>similarity = cosine_sim(embeddings[<span class="hljs-number">0</span>], embeddings[<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>threshold = <span class="hljs-number">0.7</span>  <span class="hljs-comment"># the optimal threshold is dataset-dependent</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">if</span> similarity &lt; threshold:
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Speakers are not the same!&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(similarity.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.97</span>`}}),{c(){d=n("p"),v=r("Example:"),p=u(),w(m.$$.fragment)},l(a){d=s(a,"P",{});var h=l(d);v=i(h,"Example:"),h.forEach(o),p=f(a),y(m.$$.fragment,a)},m(a,h){_(a,d,h),e(d,v),_(a,p,h),M(m,a,h),b=!0},p:fe,i(a){b||($(m.$$.fragment,a),b=!0)},o(a){k(m.$$.fragment,a),b=!1},d(a){a&&o(d),a&&o(p),W(m,a)}}}function Dl(L){let d,v,p,m,b,a,h,T,tn,ra,Z,_e,wo,Ue,on,yo,an,ia,ve,nn,Be,sn,rn,la,Bt,ln,da,Yt,Mo,dn,ca,Ht,cn,pa,X,Ye,pn,Kt,mn,hn,un,He,fn,Rt,gn,_n,vn,$o,bn,ma,be,wn,Ke,yn,Mn,ha,U,$n,Re,kn,Wn,Ze,Ln,Tn,ua,Q,we,ko,Qe,Cn,Wo,jn,fa,x,Je,Fn,J,xn,Zt,qn,En,Ge,Pn,Sn,An,G,zn,Qt,On,Dn,Jt,Vn,Nn,In,ye,Xn,Me,ga,ee,$e,Lo,et,Un,To,Bn,_a,te,tt,Yn,ot,Hn,Co,Kn,Rn,va,oe,ke,jo,at,Zn,Fo,Qn,ba,q,nt,Jn,st,Gn,rt,es,ts,os,it,as,Gt,ns,ss,rs,lt,is,dt,ls,ds,cs,A,ct,ps,ae,ms,eo,hs,us,xo,fs,gs,_s,We,vs,Le,wa,ne,Te,qo,pt,bs,Eo,ws,ya,E,mt,ys,se,Ms,Po,$s,ks,ht,Ws,Ls,Ts,ut,Cs,to,js,Fs,xs,ft,qs,gt,Es,Ps,Ss,P,_t,As,re,zs,oo,Os,Ds,So,Vs,Ns,Is,Ce,Xs,je,Us,Fe,Ma,ie,xe,Ao,vt,Bs,zo,Ys,$a,C,bt,Hs,Oo,Ks,Rs,wt,Zs,yt,Qs,Js,Gs,Mt,er,ao,tr,or,ar,$t,nr,kt,sr,rr,ir,S,Wt,lr,le,dr,no,cr,pr,Do,mr,hr,ur,qe,fr,Ee,gr,Pe,ka,de,Se,Vo,Lt,_r,No,vr,Wa,j,Tt,br,Io,wr,yr,Ct,Mr,jt,$r,kr,Wr,Ft,Lr,so,Tr,Cr,jr,xt,Fr,qt,xr,qr,Er,z,Et,Pr,ce,Sr,ro,Ar,zr,Xo,Or,Dr,Vr,Ae,Nr,ze,La,pe,Oe,Uo,Pt,Ir,Bo,Xr,Ta,F,St,Ur,Yo,Br,Yr,At,Hr,zt,Kr,Rr,Zr,Ot,Qr,io,Jr,Gr,ei,Dt,ti,Vt,oi,ai,ni,O,Nt,si,me,ri,lo,ii,li,Ho,di,ci,pi,De,mi,Ve,Ca;return a=new he({}),Ue=new he({}),Qe=new he({}),Je=new I({props:{name:"class transformers.WavLMConfig",anchor:"transformers.WavLMConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"feat_quantizer_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"num_buckets",val:" = 320"},{name:"max_bucket_distance",val:" = 800"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"num_codevectors_per_group",val:" = 320"},{name:"num_codevector_groups",val:" = 2"},{name:"contrastive_logits_temperature",val:" = 0.1"},{name:"num_negatives",val:" = 100"},{name:"codevector_dim",val:" = 256"},{name:"proj_codevector_dim",val:" = 256"},{name:"diversity_loss_weight",val:" = 0.1"},{name:"ctc_loss_reduction",val:" = 'mean'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"tdnn_dim",val:" = (512, 512, 512, 512, 1500)"},{name:"tdnn_kernel",val:" = (5, 3, 3, 1, 1)"},{name:"tdnn_dilation",val:" = (1, 2, 3, 1, 1)"},{name:"xvector_output_dim",val:" = 512"},{name:"num_ctc_classes",val:" = 80"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"add_adapter",val:" = False"},{name:"adapter_kernel_size",val:" = 3"},{name:"adapter_stride",val:" = 2"},{name:"num_adapter_layers",val:" = 3"},{name:"output_hidden_size",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WavLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the WavLM model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMModel">WavLMModel</a>. Vocabulary size of the model. Defines the different tokens
that can be represented by the <em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMModel">WavLMModel</a>.`,name:"vocab_size"},{anchor:"transformers.WavLMConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.WavLMConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.WavLMConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.WavLMConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.WavLMConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.WavLMConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.WavLMConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.WavLMConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMForCTC">WavLMForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.WavLMConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.WavLMConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.WavLMConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.WavLMConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.WavLMConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.WavLMConfig.feat_quantizer_dropout",description:`<strong>feat_quantizer_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for quantized feature encoder states.`,name:"feat_quantizer_dropout"},{anchor:"transformers.WavLMConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.WavLMConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.WavLMConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 3, 3)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.WavLMConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.WavLMConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.WavLMConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.WavLMConfig.do_stable_layer_norm",description:`<strong>do_stable_layer_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply <em>stable</em> layer norm architecture of the Transformer encoder. <code>do_stable_layer_norm is True</code> corresponds to applying layer norm before the attention layer, whereas <code>do_stable_layer_norm is False</code> corresponds to applying layer norm after the attention layer.`,name:"do_stable_layer_norm"},{anchor:"transformers.WavLMConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature encoder. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech
Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.WavLMConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Propability of each feature vector along the time axis to be chosen as the start of the vector span to be
masked. Approximately <code>mask_time_prob * sequence_length // mask_time_length</code> feature vectors will be masked
along the time axis. This is only relevant if <code>apply_spec_augment is True</code>.`,name:"mask_time_prob"},{anchor:"transformers.WavLMConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.WavLMConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.WavLMConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Propability of each feature vector along the feature axis to be chosen as the start of the vector span to
be masked. Approximately <code>mask_time_prob * hidden_size // mask_time_length</code> feature vectors will be masked
along the time axis. This is only relevant if <code>apply_spec_augment is True</code>.`,name:"mask_feature_prob"},{anchor:"transformers.WavLMConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.WavLMConfig.num_codevectors_per_group",description:`<strong>num_codevectors_per_group</strong> (<code>int</code>, <em>optional</em>, defaults to 320) &#x2014;
Number of entries in each quantization codebook (group).`,name:"num_codevectors_per_group"},{anchor:"transformers.WavLMConfig.num_codevector_groups",description:`<strong>num_codevector_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of codevector groups for product codevector quantization.`,name:"num_codevector_groups"},{anchor:"transformers.WavLMConfig.contrastive_logits_temperature",description:`<strong>contrastive_logits_temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The temperature <em>kappa</em> in the contrastive loss.`,name:"contrastive_logits_temperature"},{anchor:"transformers.WavLMConfig.feat_quantizer_dropout",description:`<strong>feat_quantizer_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for the output of the feature encoder that&#x2019;s used by the quantizer.`,name:"feat_quantizer_dropout"},{anchor:"transformers.WavLMConfig.num_negatives",description:`<strong>num_negatives</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Number of negative samples for the contrastive loss.`,name:"num_negatives"},{anchor:"transformers.WavLMConfig.codevector_dim",description:`<strong>codevector_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the quantized feature vectors.`,name:"codevector_dim"},{anchor:"transformers.WavLMConfig.proj_codevector_dim",description:`<strong>proj_codevector_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the final projection of both the quantized and the transformer features.`,name:"proj_codevector_dim"},{anchor:"transformers.WavLMConfig.diversity_loss_weight",description:`<strong>diversity_loss_weight</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The weight of the codebook diversity loss component.`,name:"diversity_loss_weight"},{anchor:"transformers.WavLMConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;mean&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMForCTC">WavLMForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.WavLMConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMForCTC">WavLMForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.WavLMConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMForSequenceClassification">WavLMForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.WavLMConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"},{anchor:"transformers.WavLMConfig.tdnn_dim",description:`<strong>tdnn_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 1500)</code>) &#x2014;
A tuple of integers defining the number of output channels of each 1D convolutional layer in the <em>TDNN</em>
module of the <em>XVector</em> model. The length of <em>tdnn_dim</em> defines the number of <em>TDNN</em> layers.`,name:"tdnn_dim"},{anchor:"transformers.WavLMConfig.tdnn_kernel",description:`<strong>tdnn_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 3, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_kernel</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_kernel"},{anchor:"transformers.WavLMConfig.tdnn_dilation",description:`<strong>tdnn_dilation</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(1, 2, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the dilation factor of each 1D convolutional layer in <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_dilation</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_dilation"},{anchor:"transformers.WavLMConfig.xvector_output_dim",description:`<strong>xvector_output_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the <em>XVector</em> embedding vectors.`,name:"xvector_output_dim"},{anchor:"transformers.WavLMConfig.add_adapter",description:`<strong>add_adapter</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether a convolutional network should be stacked on top of the Wav2Vec2 Encoder. Can be very useful for
warm-starting Wav2Vec2 for SpeechEncoderDecoder models.`,name:"add_adapter"},{anchor:"transformers.WavLMConfig.adapter_kernel_size",description:`<strong>adapter_kernel_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Kernel size of the convolutional layers in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"adapter_kernel_size"},{anchor:"transformers.WavLMConfig.adapter_stride",description:`<strong>adapter_stride</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Stride of the convolutional layers in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"adapter_stride"},{anchor:"transformers.WavLMConfig.num_adapter_layers",description:`<strong>num_adapter_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Number of convolutional layers that should be used in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"num_adapter_layers"},{anchor:"transformers.WavLMConfig.output_hidden_size",description:`<strong>output_hidden_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Dimensionality of the encoder output layer. If not defined, this defaults to <em>hidden-size</em>. Only relevant
if <code>add_adapter is True</code>.`,name:"output_hidden_size"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/wavlm/configuration_wavlm.py#L32"}}),ye=new ue({props:{anchor:"transformers.WavLMConfig.example",$$slots:{default:[Wl]},$$scope:{ctx:L}}}),Me=new ue({props:{anchor:"transformers.WavLMConfig.example-2",$$slots:{default:[Ll]},$$scope:{ctx:L}}}),et=new he({}),tt=new I({props:{name:"class transformers.models.wavlm.modeling_wavlm.WavLMBaseModelOutput",anchor:"transformers.models.wavlm.modeling_wavlm.WavLMBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"extract_features",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.wavlm.modeling_wavlm.WavLMBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.wavlm.modeling_wavlm.WavLMBaseModelOutput.extract_features",description:`<strong>extract_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, conv_dim[-1])</code>) &#x2014;
Sequence of extracted feature vectors of the last convolutional layer of the model.`,name:"extract_features"},{anchor:"transformers.models.wavlm.modeling_wavlm.WavLMBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.wavlm.modeling_wavlm.WavLMBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/wavlm/modeling_wavlm.py#L84"}}),at=new he({}),nt=new I({props:{name:"class transformers.WavLMModel",anchor:"transformers.WavLMModel",parameters:[{name:"config",val:": WavLMConfig"}],parametersDescription:[{anchor:"transformers.WavLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMConfig">WavLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/wavlm/modeling_wavlm.py#L1188"}}),ct=new I({props:{name:"forward",anchor:"transformers.WavLMModel.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.WavLMModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <code>WavLMProcessor</code> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>WavLMProcessor.__call__</code> for details.`,name:"input_values"},{anchor:"transformers.WavLMModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.WavLMModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.WavLMModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.WavLMModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/wavlm/modeling_wavlm.py#L1274",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.models.wavlm.modeling_wavlm.WavLMBaseModelOutput"
>transformers.models.wavlm.modeling_wavlm.WavLMBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMConfig"
>WavLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>extract_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, conv_dim[-1])</code>) \u2014 Sequence of extracted feature vectors of the last convolutional layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.models.wavlm.modeling_wavlm.WavLMBaseModelOutput"
>transformers.models.wavlm.modeling_wavlm.WavLMBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),We=new sa({props:{$$slots:{default:[Tl]},$$scope:{ctx:L}}}),Le=new ue({props:{anchor:"transformers.WavLMModel.forward.example",$$slots:{default:[Cl]},$$scope:{ctx:L}}}),pt=new he({}),mt=new I({props:{name:"class transformers.WavLMForCTC",anchor:"transformers.WavLMForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.WavLMForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMConfig">WavLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/wavlm/modeling_wavlm.py#L1341"}}),_t=new I({props:{name:"forward",anchor:"transformers.WavLMForCTC.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.WavLMForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <code>WavLMProcessor</code> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>WavLMProcessor.__call__</code> for details.`,name:"input_values"},{anchor:"transformers.WavLMForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.WavLMForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.WavLMForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.WavLMForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.WavLMForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/wavlm/modeling_wavlm.py#L1382",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMConfig"
>WavLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ce=new sa({props:{$$slots:{default:[jl]},$$scope:{ctx:L}}}),je=new ue({props:{anchor:"transformers.WavLMForCTC.forward.example",$$slots:{default:[Fl]},$$scope:{ctx:L}}}),Fe=new ue({props:{anchor:"transformers.WavLMForCTC.forward.example-2",$$slots:{default:[xl]},$$scope:{ctx:L}}}),vt=new he({}),bt=new I({props:{name:"class transformers.WavLMForSequenceClassification",anchor:"transformers.WavLMForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.WavLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMConfig">WavLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/wavlm/modeling_wavlm.py#L1472"}}),Wt=new I({props:{name:"forward",anchor:"transformers.WavLMForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.WavLMForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <code>WavLMProcessor</code> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>WavLMProcessor.__call__</code> for details.`,name:"input_values"},{anchor:"transformers.WavLMForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.WavLMForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.WavLMForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.WavLMForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.WavLMForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/wavlm/modeling_wavlm.py#L1517",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMConfig"
>WavLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qe=new sa({props:{$$slots:{default:[ql]},$$scope:{ctx:L}}}),Ee=new ue({props:{anchor:"transformers.WavLMForSequenceClassification.forward.example",$$slots:{default:[El]},$$scope:{ctx:L}}}),Pe=new ue({props:{anchor:"transformers.WavLMForSequenceClassification.forward.example-2",$$slots:{default:[Pl]},$$scope:{ctx:L}}}),Lt=new he({}),Tt=new I({props:{name:"class transformers.WavLMForAudioFrameClassification",anchor:"transformers.WavLMForAudioFrameClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.WavLMForAudioFrameClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMConfig">WavLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/wavlm/modeling_wavlm.py#L1596"}}),Et=new I({props:{name:"forward",anchor:"transformers.WavLMForAudioFrameClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.WavLMForAudioFrameClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <code>WavLMProcessor</code> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>WavLMProcessor.__call__</code> for details.`,name:"input_values"},{anchor:"transformers.WavLMForAudioFrameClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.WavLMForAudioFrameClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.WavLMForAudioFrameClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.WavLMForAudioFrameClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.WavLMForAudioFrameClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/wavlm/modeling_wavlm.py#L1639",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMConfig"
>WavLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ae=new sa({props:{$$slots:{default:[Sl]},$$scope:{ctx:L}}}),ze=new ue({props:{anchor:"transformers.WavLMForAudioFrameClassification.forward.example",$$slots:{default:[Al]},$$scope:{ctx:L}}}),Pt=new he({}),St=new I({props:{name:"class transformers.WavLMForXVector",anchor:"transformers.WavLMForXVector",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.WavLMForXVector.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMConfig">WavLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/wavlm/modeling_wavlm.py#L1754"}}),Nt=new I({props:{name:"forward",anchor:"transformers.WavLMForXVector.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.WavLMForXVector.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <code>WavLMProcessor</code> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>WavLMProcessor.__call__</code> for details.`,name:"input_values"},{anchor:"transformers.WavLMForXVector.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.WavLMForXVector.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.WavLMForXVector.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.WavLMForXVector.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.WavLMForXVector.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/wavlm/modeling_wavlm.py#L1816",returnDescription:`
<p>A <code>transformers.models.wavlm.modeling_wavlm.XVectorOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMConfig"
>WavLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.xvector_output_dim)</code>) \u2014 Classification hidden states before AMSoftmax.</p>
</li>
<li>
<p><strong>embeddings</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.xvector_output_dim)</code>) \u2014 Utterance embeddings used for vector similarity-based retrieval.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.wavlm.modeling_wavlm.XVectorOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),De=new sa({props:{$$slots:{default:[zl]},$$scope:{ctx:L}}}),Ve=new ue({props:{anchor:"transformers.WavLMForXVector.forward.example",$$slots:{default:[Ol]},$$scope:{ctx:L}}}),{c(){d=n("meta"),v=u(),p=n("h1"),m=n("a"),b=n("span"),w(a.$$.fragment),h=u(),T=n("span"),tn=r("WavLM"),ra=u(),Z=n("h2"),_e=n("a"),wo=n("span"),w(Ue.$$.fragment),on=u(),yo=n("span"),an=r("Overview"),ia=u(),ve=n("p"),nn=r("The WavLM model was proposed in "),Be=n("a"),sn=r("WavLM: Large-Scale Self-Supervised Pre-Training for Full Stack Speech Processing"),rn=r(` by Sanyuan Chen, Chengyi Wang, Zhengyang Chen, Yu Wu, Shujie Liu, Zhuo Chen,
Jinyu Li, Naoyuki Kanda, Takuya Yoshioka, Xiong Xiao, Jian Wu, Long Zhou, Shuo Ren, Yanmin Qian, Yao Qian, Jian Wu,
Michael Zeng, Furu Wei.`),la=u(),Bt=n("p"),ln=r("The abstract from the paper is the following:"),da=u(),Yt=n("p"),Mo=n("em"),dn=r(`Self-supervised learning (SSL) achieves great success in speech recognition, while limited exploration has been
attempted for other speech processing tasks. As speech signal contains multi-faceted information including speaker
identity, paralinguistics, spoken content, etc., learning universal representations for all speech tasks is
challenging. In this paper, we propose a new pre-trained model, WavLM, to solve full-stack downstream speech tasks.
WavLM is built based on the HuBERT framework, with an emphasis on both spoken content modeling and speaker identity
preservation. We first equip the Transformer structure with gated relative position bias to improve its capability on
recognition tasks. For better speaker discrimination, we propose an utterance mixing training strategy, where
additional overlapped utterances are created unsupervisely and incorporated during model training. Lastly, we scale up
the training dataset from 60k hours to 94k hours. WavLM Large achieves state-of-the-art performance on the SUPERB
benchmark, and brings significant improvements for various speech processing tasks on their representative benchmarks.`),ca=u(),Ht=n("p"),cn=r("Tips:"),pa=u(),X=n("ul"),Ye=n("li"),pn=r(`WavLM is a speech model that accepts a float array corresponding to the raw waveform of the speech signal. Please use
`),Kt=n("a"),mn=r("Wav2Vec2Processor"),hn=r(" for the feature extraction."),un=u(),He=n("li"),fn=r(`WavLM model can be fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),Rt=n("a"),gn=r("Wav2Vec2CTCTokenizer"),_n=r("."),vn=u(),$o=n("li"),bn=r("WavLM performs especially well on speaker verification, speaker identification, and speaker diarization tasks."),ma=u(),be=n("p"),wn=r("Relevant checkpoints can be found under "),Ke=n("a"),yn=r("https://huggingface.co/models?other=wavlm"),Mn=r("."),ha=u(),U=n("p"),$n=r("This model was contributed by "),Re=n("a"),kn=r("patrickvonplaten"),Wn=r(`. The Authors\u2019 code can be
found `),Ze=n("a"),Ln=r("here"),Tn=r("."),ua=u(),Q=n("h2"),we=n("a"),ko=n("span"),w(Qe.$$.fragment),Cn=u(),Wo=n("span"),jn=r("WavLMConfig"),fa=u(),x=n("div"),w(Je.$$.fragment),Fn=u(),J=n("p"),xn=r("This is the configuration class to store the configuration of a "),Zt=n("a"),qn=r("WavLMModel"),En=r(`. It is used to instantiate an WavLM
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the WavLM
`),Ge=n("a"),Pn=r("facebook/wavlm-base-960h"),Sn=r(" architecture."),An=u(),G=n("p"),zn=r("Configuration objects inherit from "),Qt=n("a"),On=r("PretrainedConfig"),Dn=r(` and can be used to control the model outputs. Read the
documentation from `),Jt=n("a"),Vn=r("PretrainedConfig"),Nn=r(" for more information."),In=u(),w(ye.$$.fragment),Xn=u(),w(Me.$$.fragment),ga=u(),ee=n("h2"),$e=n("a"),Lo=n("span"),w(et.$$.fragment),Un=u(),To=n("span"),Bn=r("WavLM specific outputs"),_a=u(),te=n("div"),w(tt.$$.fragment),Yn=u(),ot=n("p"),Hn=r("Output type of "),Co=n("code"),Kn=r("WavLMBaseModelOutput"),Rn=r(", with potential hidden states and attentions."),va=u(),oe=n("h2"),ke=n("a"),jo=n("span"),w(at.$$.fragment),Zn=u(),Fo=n("span"),Qn=r("WavLMModel"),ba=u(),q=n("div"),w(nt.$$.fragment),Jn=u(),st=n("p"),Gn=r(`The bare WavLM Model transformer outputting raw hidden-states without any specific head on top.
WavLM was proposed in `),rt=n("a"),es=r(`WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),ts=r(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),os=u(),it=n("p"),as=r("This model inherits from "),Gt=n("a"),ns=r("PreTrainedModel"),ss=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),rs=u(),lt=n("p"),is=r("This model is a PyTorch "),dt=n("a"),ls=r("torch.nn.Module"),ds=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cs=u(),A=n("div"),w(ct.$$.fragment),ps=u(),ae=n("p"),ms=r("The "),eo=n("a"),hs=r("WavLMModel"),us=r(" forward method, overrides the "),xo=n("code"),fs=r("__call__"),gs=r(" special method."),_s=u(),w(We.$$.fragment),vs=u(),w(Le.$$.fragment),wa=u(),ne=n("h2"),Te=n("a"),qo=n("span"),w(pt.$$.fragment),bs=u(),Eo=n("span"),ws=r("WavLMForCTC"),ya=u(),E=n("div"),w(mt.$$.fragment),ys=u(),se=n("p"),Ms=r("WavLM Model with a "),Po=n("code"),$s=r("language modeling"),ks=r(` head on top for Connectionist Temporal Classification (CTC).
WavLM was proposed in `),ht=n("a"),Ws=r(`WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Ls=r(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),Ts=u(),ut=n("p"),Cs=r("This model inherits from "),to=n("a"),js=r("PreTrainedModel"),Fs=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),xs=u(),ft=n("p"),qs=r("This model is a PyTorch "),gt=n("a"),Es=r("torch.nn.Module"),Ps=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ss=u(),P=n("div"),w(_t.$$.fragment),As=u(),re=n("p"),zs=r("The "),oo=n("a"),Os=r("WavLMForCTC"),Ds=r(" forward method, overrides the "),So=n("code"),Vs=r("__call__"),Ns=r(" special method."),Is=u(),w(Ce.$$.fragment),Xs=u(),w(je.$$.fragment),Us=u(),w(Fe.$$.fragment),Ma=u(),ie=n("h2"),xe=n("a"),Ao=n("span"),w(vt.$$.fragment),Bs=u(),zo=n("span"),Ys=r("WavLMForSequenceClassification"),$a=u(),C=n("div"),w(bt.$$.fragment),Hs=u(),Oo=n("p"),Ks=r(`WavLM Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),Rs=u(),wt=n("p"),Zs=r("WavLM was proposed in "),yt=n("a"),Qs=r(`WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Js=r(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),Gs=u(),Mt=n("p"),er=r("This model inherits from "),ao=n("a"),tr=r("PreTrainedModel"),or=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ar=u(),$t=n("p"),nr=r("This model is a PyTorch "),kt=n("a"),sr=r("torch.nn.Module"),rr=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ir=u(),S=n("div"),w(Wt.$$.fragment),lr=u(),le=n("p"),dr=r("The "),no=n("a"),cr=r("WavLMForSequenceClassification"),pr=r(" forward method, overrides the "),Do=n("code"),mr=r("__call__"),hr=r(" special method."),ur=u(),w(qe.$$.fragment),fr=u(),w(Ee.$$.fragment),gr=u(),w(Pe.$$.fragment),ka=u(),de=n("h2"),Se=n("a"),Vo=n("span"),w(Lt.$$.fragment),_r=u(),No=n("span"),vr=r("WavLMForAudioFrameClassification"),Wa=u(),j=n("div"),w(Tt.$$.fragment),br=u(),Io=n("p"),wr=r("WavLM Model with a frame classification head on top for tasks like Speaker Diarization."),yr=u(),Ct=n("p"),Mr=r("WavLM was proposed in "),jt=n("a"),$r=r(`WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),kr=r(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),Wr=u(),Ft=n("p"),Lr=r("This model inherits from "),so=n("a"),Tr=r("PreTrainedModel"),Cr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),jr=u(),xt=n("p"),Fr=r("This model is a PyTorch "),qt=n("a"),xr=r("torch.nn.Module"),qr=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Er=u(),z=n("div"),w(Et.$$.fragment),Pr=u(),ce=n("p"),Sr=r("The "),ro=n("a"),Ar=r("WavLMForAudioFrameClassification"),zr=r(" forward method, overrides the "),Xo=n("code"),Or=r("__call__"),Dr=r(" special method."),Vr=u(),w(Ae.$$.fragment),Nr=u(),w(ze.$$.fragment),La=u(),pe=n("h2"),Oe=n("a"),Uo=n("span"),w(Pt.$$.fragment),Ir=u(),Bo=n("span"),Xr=r("WavLMForXVector"),Ta=u(),F=n("div"),w(St.$$.fragment),Ur=u(),Yo=n("p"),Br=r("WavLM Model with an XVector feature extraction head on top for tasks like Speaker Verification."),Yr=u(),At=n("p"),Hr=r("WavLM was proposed in "),zt=n("a"),Kr=r(`WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Rr=r(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),Zr=u(),Ot=n("p"),Qr=r("This model inherits from "),io=n("a"),Jr=r("PreTrainedModel"),Gr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ei=u(),Dt=n("p"),ti=r("This model is a PyTorch "),Vt=n("a"),oi=r("torch.nn.Module"),ai=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ni=u(),O=n("div"),w(Nt.$$.fragment),si=u(),me=n("p"),ri=r("The "),lo=n("a"),ii=r("WavLMForXVector"),li=r(" forward method, overrides the "),Ho=n("code"),di=r("__call__"),ci=r(" special method."),pi=u(),w(De.$$.fragment),mi=u(),w(Ve.$$.fragment),this.h()},l(t){const g=$l('[data-svelte="svelte-1phssyn"]',document.head);d=s(g,"META",{name:!0,content:!0}),g.forEach(o),v=f(t),p=s(t,"H1",{class:!0});var It=l(p);m=s(It,"A",{id:!0,class:!0,href:!0});var Ko=l(m);b=s(Ko,"SPAN",{});var Ro=l(b);y(a.$$.fragment,Ro),Ro.forEach(o),Ko.forEach(o),h=f(It),T=s(It,"SPAN",{});var Zo=l(T);tn=i(Zo,"WavLM"),Zo.forEach(o),It.forEach(o),ra=f(t),Z=s(t,"H2",{class:!0});var Xt=l(Z);_e=s(Xt,"A",{id:!0,class:!0,href:!0});var Qo=l(_e);wo=s(Qo,"SPAN",{});var Jo=l(wo);y(Ue.$$.fragment,Jo),Jo.forEach(o),Qo.forEach(o),on=f(Xt),yo=s(Xt,"SPAN",{});var Go=l(yo);an=i(Go,"Overview"),Go.forEach(o),Xt.forEach(o),ia=f(t),ve=s(t,"P",{});var Ut=l(ve);nn=i(Ut,"The WavLM model was proposed in "),Be=s(Ut,"A",{href:!0,rel:!0});var ea=l(Be);sn=i(ea,"WavLM: Large-Scale Self-Supervised Pre-Training for Full Stack Speech Processing"),ea.forEach(o),rn=i(Ut,` by Sanyuan Chen, Chengyi Wang, Zhengyang Chen, Yu Wu, Shujie Liu, Zhuo Chen,
Jinyu Li, Naoyuki Kanda, Takuya Yoshioka, Xiong Xiao, Jian Wu, Long Zhou, Shuo Ren, Yanmin Qian, Yao Qian, Jian Wu,
Michael Zeng, Furu Wei.`),Ut.forEach(o),la=f(t),Bt=s(t,"P",{});var ta=l(Bt);ln=i(ta,"The abstract from the paper is the following:"),ta.forEach(o),da=f(t),Yt=s(t,"P",{});var oa=l(Yt);Mo=s(oa,"EM",{});var aa=l(Mo);dn=i(aa,`Self-supervised learning (SSL) achieves great success in speech recognition, while limited exploration has been
attempted for other speech processing tasks. As speech signal contains multi-faceted information including speaker
identity, paralinguistics, spoken content, etc., learning universal representations for all speech tasks is
challenging. In this paper, we propose a new pre-trained model, WavLM, to solve full-stack downstream speech tasks.
WavLM is built based on the HuBERT framework, with an emphasis on both spoken content modeling and speaker identity
preservation. We first equip the Transformer structure with gated relative position bias to improve its capability on
recognition tasks. For better speaker discrimination, we propose an utterance mixing training strategy, where
additional overlapped utterances are created unsupervisely and incorporated during model training. Lastly, we scale up
the training dataset from 60k hours to 94k hours. WavLM Large achieves state-of-the-art performance on the SUPERB
benchmark, and brings significant improvements for various speech processing tasks on their representative benchmarks.`),aa.forEach(o),oa.forEach(o),ca=f(t),Ht=s(t,"P",{});var na=l(Ht);cn=i(na,"Tips:"),na.forEach(o),pa=f(t),X=s(t,"UL",{});var co=l(X);Ye=s(co,"LI",{});var ja=l(Ye);pn=i(ja,`WavLM is a speech model that accepts a float array corresponding to the raw waveform of the speech signal. Please use
`),Kt=s(ja,"A",{href:!0});var hi=l(Kt);mn=i(hi,"Wav2Vec2Processor"),hi.forEach(o),hn=i(ja," for the feature extraction."),ja.forEach(o),un=f(co),He=s(co,"LI",{});var Fa=l(He);fn=i(Fa,`WavLM model can be fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),Rt=s(Fa,"A",{href:!0});var ui=l(Rt);gn=i(ui,"Wav2Vec2CTCTokenizer"),ui.forEach(o),_n=i(Fa,"."),Fa.forEach(o),vn=f(co),$o=s(co,"LI",{});var fi=l($o);bn=i(fi,"WavLM performs especially well on speaker verification, speaker identification, and speaker diarization tasks."),fi.forEach(o),co.forEach(o),ma=f(t),be=s(t,"P",{});var xa=l(be);wn=i(xa,"Relevant checkpoints can be found under "),Ke=s(xa,"A",{href:!0,rel:!0});var gi=l(Ke);yn=i(gi,"https://huggingface.co/models?other=wavlm"),gi.forEach(o),Mn=i(xa,"."),xa.forEach(o),ha=f(t),U=s(t,"P",{});var po=l(U);$n=i(po,"This model was contributed by "),Re=s(po,"A",{href:!0,rel:!0});var _i=l(Re);kn=i(_i,"patrickvonplaten"),_i.forEach(o),Wn=i(po,`. The Authors\u2019 code can be
found `),Ze=s(po,"A",{href:!0,rel:!0});var vi=l(Ze);Ln=i(vi,"here"),vi.forEach(o),Tn=i(po,"."),po.forEach(o),ua=f(t),Q=s(t,"H2",{class:!0});var qa=l(Q);we=s(qa,"A",{id:!0,class:!0,href:!0});var bi=l(we);ko=s(bi,"SPAN",{});var wi=l(ko);y(Qe.$$.fragment,wi),wi.forEach(o),bi.forEach(o),Cn=f(qa),Wo=s(qa,"SPAN",{});var yi=l(Wo);jn=i(yi,"WavLMConfig"),yi.forEach(o),qa.forEach(o),fa=f(t),x=s(t,"DIV",{class:!0});var B=l(x);y(Je.$$.fragment,B),Fn=f(B),J=s(B,"P",{});var mo=l(J);xn=i(mo,"This is the configuration class to store the configuration of a "),Zt=s(mo,"A",{href:!0});var Mi=l(Zt);qn=i(Mi,"WavLMModel"),Mi.forEach(o),En=i(mo,`. It is used to instantiate an WavLM
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the WavLM
`),Ge=s(mo,"A",{href:!0,rel:!0});var $i=l(Ge);Pn=i($i,"facebook/wavlm-base-960h"),$i.forEach(o),Sn=i(mo," architecture."),mo.forEach(o),An=f(B),G=s(B,"P",{});var ho=l(G);zn=i(ho,"Configuration objects inherit from "),Qt=s(ho,"A",{href:!0});var ki=l(Qt);On=i(ki,"PretrainedConfig"),ki.forEach(o),Dn=i(ho,` and can be used to control the model outputs. Read the
documentation from `),Jt=s(ho,"A",{href:!0});var Wi=l(Jt);Vn=i(Wi,"PretrainedConfig"),Wi.forEach(o),Nn=i(ho," for more information."),ho.forEach(o),In=f(B),y(ye.$$.fragment,B),Xn=f(B),y(Me.$$.fragment,B),B.forEach(o),ga=f(t),ee=s(t,"H2",{class:!0});var Ea=l(ee);$e=s(Ea,"A",{id:!0,class:!0,href:!0});var Li=l($e);Lo=s(Li,"SPAN",{});var Ti=l(Lo);y(et.$$.fragment,Ti),Ti.forEach(o),Li.forEach(o),Un=f(Ea),To=s(Ea,"SPAN",{});var Ci=l(To);Bn=i(Ci,"WavLM specific outputs"),Ci.forEach(o),Ea.forEach(o),_a=f(t),te=s(t,"DIV",{class:!0});var Pa=l(te);y(tt.$$.fragment,Pa),Yn=f(Pa),ot=s(Pa,"P",{});var Sa=l(ot);Hn=i(Sa,"Output type of "),Co=s(Sa,"CODE",{});var ji=l(Co);Kn=i(ji,"WavLMBaseModelOutput"),ji.forEach(o),Rn=i(Sa,", with potential hidden states and attentions."),Sa.forEach(o),Pa.forEach(o),va=f(t),oe=s(t,"H2",{class:!0});var Aa=l(oe);ke=s(Aa,"A",{id:!0,class:!0,href:!0});var Fi=l(ke);jo=s(Fi,"SPAN",{});var xi=l(jo);y(at.$$.fragment,xi),xi.forEach(o),Fi.forEach(o),Zn=f(Aa),Fo=s(Aa,"SPAN",{});var qi=l(Fo);Qn=i(qi,"WavLMModel"),qi.forEach(o),Aa.forEach(o),ba=f(t),q=s(t,"DIV",{class:!0});var Y=l(q);y(nt.$$.fragment,Y),Jn=f(Y),st=s(Y,"P",{});var za=l(st);Gn=i(za,`The bare WavLM Model transformer outputting raw hidden-states without any specific head on top.
WavLM was proposed in `),rt=s(za,"A",{href:!0,rel:!0});var Ei=l(rt);es=i(Ei,`WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Ei.forEach(o),ts=i(za,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),za.forEach(o),os=f(Y),it=s(Y,"P",{});var Oa=l(it);as=i(Oa,"This model inherits from "),Gt=s(Oa,"A",{href:!0});var Pi=l(Gt);ns=i(Pi,"PreTrainedModel"),Pi.forEach(o),ss=i(Oa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Oa.forEach(o),rs=f(Y),lt=s(Y,"P",{});var Da=l(lt);is=i(Da,"This model is a PyTorch "),dt=s(Da,"A",{href:!0,rel:!0});var Si=l(dt);ls=i(Si,"torch.nn.Module"),Si.forEach(o),ds=i(Da,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Da.forEach(o),cs=f(Y),A=s(Y,"DIV",{class:!0});var Ne=l(A);y(ct.$$.fragment,Ne),ps=f(Ne),ae=s(Ne,"P",{});var uo=l(ae);ms=i(uo,"The "),eo=s(uo,"A",{href:!0});var Ai=l(eo);hs=i(Ai,"WavLMModel"),Ai.forEach(o),us=i(uo," forward method, overrides the "),xo=s(uo,"CODE",{});var zi=l(xo);fs=i(zi,"__call__"),zi.forEach(o),gs=i(uo," special method."),uo.forEach(o),_s=f(Ne),y(We.$$.fragment,Ne),vs=f(Ne),y(Le.$$.fragment,Ne),Ne.forEach(o),Y.forEach(o),wa=f(t),ne=s(t,"H2",{class:!0});var Va=l(ne);Te=s(Va,"A",{id:!0,class:!0,href:!0});var Oi=l(Te);qo=s(Oi,"SPAN",{});var Di=l(qo);y(pt.$$.fragment,Di),Di.forEach(o),Oi.forEach(o),bs=f(Va),Eo=s(Va,"SPAN",{});var Vi=l(Eo);ws=i(Vi,"WavLMForCTC"),Vi.forEach(o),Va.forEach(o),ya=f(t),E=s(t,"DIV",{class:!0});var H=l(E);y(mt.$$.fragment,H),ys=f(H),se=s(H,"P",{});var fo=l(se);Ms=i(fo,"WavLM Model with a "),Po=s(fo,"CODE",{});var Ni=l(Po);$s=i(Ni,"language modeling"),Ni.forEach(o),ks=i(fo,` head on top for Connectionist Temporal Classification (CTC).
WavLM was proposed in `),ht=s(fo,"A",{href:!0,rel:!0});var Ii=l(ht);Ws=i(Ii,`WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Ii.forEach(o),Ls=i(fo,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),fo.forEach(o),Ts=f(H),ut=s(H,"P",{});var Na=l(ut);Cs=i(Na,"This model inherits from "),to=s(Na,"A",{href:!0});var Xi=l(to);js=i(Xi,"PreTrainedModel"),Xi.forEach(o),Fs=i(Na,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Na.forEach(o),xs=f(H),ft=s(H,"P",{});var Ia=l(ft);qs=i(Ia,"This model is a PyTorch "),gt=s(Ia,"A",{href:!0,rel:!0});var Ui=l(gt);Es=i(Ui,"torch.nn.Module"),Ui.forEach(o),Ps=i(Ia,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ia.forEach(o),Ss=f(H),P=s(H,"DIV",{class:!0});var K=l(P);y(_t.$$.fragment,K),As=f(K),re=s(K,"P",{});var go=l(re);zs=i(go,"The "),oo=s(go,"A",{href:!0});var Bi=l(oo);Os=i(Bi,"WavLMForCTC"),Bi.forEach(o),Ds=i(go," forward method, overrides the "),So=s(go,"CODE",{});var Yi=l(So);Vs=i(Yi,"__call__"),Yi.forEach(o),Ns=i(go," special method."),go.forEach(o),Is=f(K),y(Ce.$$.fragment,K),Xs=f(K),y(je.$$.fragment,K),Us=f(K),y(Fe.$$.fragment,K),K.forEach(o),H.forEach(o),Ma=f(t),ie=s(t,"H2",{class:!0});var Xa=l(ie);xe=s(Xa,"A",{id:!0,class:!0,href:!0});var Hi=l(xe);Ao=s(Hi,"SPAN",{});var Ki=l(Ao);y(vt.$$.fragment,Ki),Ki.forEach(o),Hi.forEach(o),Bs=f(Xa),zo=s(Xa,"SPAN",{});var Ri=l(zo);Ys=i(Ri,"WavLMForSequenceClassification"),Ri.forEach(o),Xa.forEach(o),$a=f(t),C=s(t,"DIV",{class:!0});var D=l(C);y(bt.$$.fragment,D),Hs=f(D),Oo=s(D,"P",{});var Zi=l(Oo);Ks=i(Zi,`WavLM Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),Zi.forEach(o),Rs=f(D),wt=s(D,"P",{});var Ua=l(wt);Zs=i(Ua,"WavLM was proposed in "),yt=s(Ua,"A",{href:!0,rel:!0});var Qi=l(yt);Qs=i(Qi,`WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Qi.forEach(o),Js=i(Ua,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),Ua.forEach(o),Gs=f(D),Mt=s(D,"P",{});var Ba=l(Mt);er=i(Ba,"This model inherits from "),ao=s(Ba,"A",{href:!0});var Ji=l(ao);tr=i(Ji,"PreTrainedModel"),Ji.forEach(o),or=i(Ba,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ba.forEach(o),ar=f(D),$t=s(D,"P",{});var Ya=l($t);nr=i(Ya,"This model is a PyTorch "),kt=s(Ya,"A",{href:!0,rel:!0});var Gi=l(kt);sr=i(Gi,"torch.nn.Module"),Gi.forEach(o),rr=i(Ya,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ya.forEach(o),ir=f(D),S=s(D,"DIV",{class:!0});var R=l(S);y(Wt.$$.fragment,R),lr=f(R),le=s(R,"P",{});var _o=l(le);dr=i(_o,"The "),no=s(_o,"A",{href:!0});var el=l(no);cr=i(el,"WavLMForSequenceClassification"),el.forEach(o),pr=i(_o," forward method, overrides the "),Do=s(_o,"CODE",{});var tl=l(Do);mr=i(tl,"__call__"),tl.forEach(o),hr=i(_o," special method."),_o.forEach(o),ur=f(R),y(qe.$$.fragment,R),fr=f(R),y(Ee.$$.fragment,R),gr=f(R),y(Pe.$$.fragment,R),R.forEach(o),D.forEach(o),ka=f(t),de=s(t,"H2",{class:!0});var Ha=l(de);Se=s(Ha,"A",{id:!0,class:!0,href:!0});var ol=l(Se);Vo=s(ol,"SPAN",{});var al=l(Vo);y(Lt.$$.fragment,al),al.forEach(o),ol.forEach(o),_r=f(Ha),No=s(Ha,"SPAN",{});var nl=l(No);vr=i(nl,"WavLMForAudioFrameClassification"),nl.forEach(o),Ha.forEach(o),Wa=f(t),j=s(t,"DIV",{class:!0});var V=l(j);y(Tt.$$.fragment,V),br=f(V),Io=s(V,"P",{});var sl=l(Io);wr=i(sl,"WavLM Model with a frame classification head on top for tasks like Speaker Diarization."),sl.forEach(o),yr=f(V),Ct=s(V,"P",{});var Ka=l(Ct);Mr=i(Ka,"WavLM was proposed in "),jt=s(Ka,"A",{href:!0,rel:!0});var rl=l(jt);$r=i(rl,`WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),rl.forEach(o),kr=i(Ka,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),Ka.forEach(o),Wr=f(V),Ft=s(V,"P",{});var Ra=l(Ft);Lr=i(Ra,"This model inherits from "),so=s(Ra,"A",{href:!0});var il=l(so);Tr=i(il,"PreTrainedModel"),il.forEach(o),Cr=i(Ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ra.forEach(o),jr=f(V),xt=s(V,"P",{});var Za=l(xt);Fr=i(Za,"This model is a PyTorch "),qt=s(Za,"A",{href:!0,rel:!0});var ll=l(qt);xr=i(ll,"torch.nn.Module"),ll.forEach(o),qr=i(Za,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Za.forEach(o),Er=f(V),z=s(V,"DIV",{class:!0});var Ie=l(z);y(Et.$$.fragment,Ie),Pr=f(Ie),ce=s(Ie,"P",{});var vo=l(ce);Sr=i(vo,"The "),ro=s(vo,"A",{href:!0});var dl=l(ro);Ar=i(dl,"WavLMForAudioFrameClassification"),dl.forEach(o),zr=i(vo," forward method, overrides the "),Xo=s(vo,"CODE",{});var cl=l(Xo);Or=i(cl,"__call__"),cl.forEach(o),Dr=i(vo," special method."),vo.forEach(o),Vr=f(Ie),y(Ae.$$.fragment,Ie),Nr=f(Ie),y(ze.$$.fragment,Ie),Ie.forEach(o),V.forEach(o),La=f(t),pe=s(t,"H2",{class:!0});var Qa=l(pe);Oe=s(Qa,"A",{id:!0,class:!0,href:!0});var pl=l(Oe);Uo=s(pl,"SPAN",{});var ml=l(Uo);y(Pt.$$.fragment,ml),ml.forEach(o),pl.forEach(o),Ir=f(Qa),Bo=s(Qa,"SPAN",{});var hl=l(Bo);Xr=i(hl,"WavLMForXVector"),hl.forEach(o),Qa.forEach(o),Ta=f(t),F=s(t,"DIV",{class:!0});var N=l(F);y(St.$$.fragment,N),Ur=f(N),Yo=s(N,"P",{});var ul=l(Yo);Br=i(ul,"WavLM Model with an XVector feature extraction head on top for tasks like Speaker Verification."),ul.forEach(o),Yr=f(N),At=s(N,"P",{});var Ja=l(At);Hr=i(Ja,"WavLM was proposed in "),zt=s(Ja,"A",{href:!0,rel:!0});var fl=l(zt);Kr=i(fl,`WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),fl.forEach(o),Rr=i(Ja,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),Ja.forEach(o),Zr=f(N),Ot=s(N,"P",{});var Ga=l(Ot);Qr=i(Ga,"This model inherits from "),io=s(Ga,"A",{href:!0});var gl=l(io);Jr=i(gl,"PreTrainedModel"),gl.forEach(o),Gr=i(Ga,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ga.forEach(o),ei=f(N),Dt=s(N,"P",{});var en=l(Dt);ti=i(en,"This model is a PyTorch "),Vt=s(en,"A",{href:!0,rel:!0});var _l=l(Vt);oi=i(_l,"torch.nn.Module"),_l.forEach(o),ai=i(en,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),en.forEach(o),ni=f(N),O=s(N,"DIV",{class:!0});var Xe=l(O);y(Nt.$$.fragment,Xe),si=f(Xe),me=s(Xe,"P",{});var bo=l(me);ri=i(bo,"The "),lo=s(bo,"A",{href:!0});var vl=l(lo);ii=i(vl,"WavLMForXVector"),vl.forEach(o),li=i(bo," forward method, overrides the "),Ho=s(bo,"CODE",{});var bl=l(Ho);di=i(bl,"__call__"),bl.forEach(o),ci=i(bo," special method."),bo.forEach(o),pi=f(Xe),y(De.$$.fragment,Xe),mi=f(Xe),y(Ve.$$.fragment,Xe),Xe.forEach(o),N.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(Vl)),c(m,"id","wavlm"),c(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(m,"href","#wavlm"),c(p,"class","relative group"),c(_e,"id","overview"),c(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_e,"href","#overview"),c(Z,"class","relative group"),c(Be,"href","https://arxiv.org/abs/2110.13900"),c(Be,"rel","nofollow"),c(Kt,"href","/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor"),c(Rt,"href","/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),c(Ke,"href","https://huggingface.co/models?other=wavlm"),c(Ke,"rel","nofollow"),c(Re,"href","https://huggingface.co/patrickvonplaten"),c(Re,"rel","nofollow"),c(Ze,"href","https://github.com/microsoft/unilm/tree/master/wavlm"),c(Ze,"rel","nofollow"),c(we,"id","transformers.WavLMConfig"),c(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(we,"href","#transformers.WavLMConfig"),c(Q,"class","relative group"),c(Zt,"href","/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMModel"),c(Ge,"href","https://huggingface.co/facebook/wavlm-base-960h"),c(Ge,"rel","nofollow"),c(Qt,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Jt,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($e,"id","transformers.models.wavlm.modeling_wavlm.WavLMBaseModelOutput"),c($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($e,"href","#transformers.models.wavlm.modeling_wavlm.WavLMBaseModelOutput"),c(ee,"class","relative group"),c(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ke,"id","transformers.WavLMModel"),c(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ke,"href","#transformers.WavLMModel"),c(oe,"class","relative group"),c(rt,"href","https://arxiv.org/abs/2101.07597"),c(rt,"rel","nofollow"),c(Gt,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),c(dt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(dt,"rel","nofollow"),c(eo,"href","/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMModel"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Te,"id","transformers.WavLMForCTC"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.WavLMForCTC"),c(ne,"class","relative group"),c(ht,"href","https://arxiv.org/abs/2101.07597"),c(ht,"rel","nofollow"),c(to,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),c(gt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(gt,"rel","nofollow"),c(oo,"href","/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMForCTC"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xe,"id","transformers.WavLMForSequenceClassification"),c(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xe,"href","#transformers.WavLMForSequenceClassification"),c(ie,"class","relative group"),c(yt,"href","https://arxiv.org/abs/2101.07597"),c(yt,"rel","nofollow"),c(ao,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),c(kt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(kt,"rel","nofollow"),c(no,"href","/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMForSequenceClassification"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Se,"id","transformers.WavLMForAudioFrameClassification"),c(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Se,"href","#transformers.WavLMForAudioFrameClassification"),c(de,"class","relative group"),c(jt,"href","https://arxiv.org/abs/2101.07597"),c(jt,"rel","nofollow"),c(so,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),c(qt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(qt,"rel","nofollow"),c(ro,"href","/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMForAudioFrameClassification"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Oe,"id","transformers.WavLMForXVector"),c(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oe,"href","#transformers.WavLMForXVector"),c(pe,"class","relative group"),c(zt,"href","https://arxiv.org/abs/2101.07597"),c(zt,"rel","nofollow"),c(io,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),c(Vt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Vt,"rel","nofollow"),c(lo,"href","/docs/transformers/v4.18.0/en/model_doc/wavlm#transformers.WavLMForXVector"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),_(t,v,g),_(t,p,g),e(p,m),e(m,b),M(a,b,null),e(p,h),e(p,T),e(T,tn),_(t,ra,g),_(t,Z,g),e(Z,_e),e(_e,wo),M(Ue,wo,null),e(Z,on),e(Z,yo),e(yo,an),_(t,ia,g),_(t,ve,g),e(ve,nn),e(ve,Be),e(Be,sn),e(ve,rn),_(t,la,g),_(t,Bt,g),e(Bt,ln),_(t,da,g),_(t,Yt,g),e(Yt,Mo),e(Mo,dn),_(t,ca,g),_(t,Ht,g),e(Ht,cn),_(t,pa,g),_(t,X,g),e(X,Ye),e(Ye,pn),e(Ye,Kt),e(Kt,mn),e(Ye,hn),e(X,un),e(X,He),e(He,fn),e(He,Rt),e(Rt,gn),e(He,_n),e(X,vn),e(X,$o),e($o,bn),_(t,ma,g),_(t,be,g),e(be,wn),e(be,Ke),e(Ke,yn),e(be,Mn),_(t,ha,g),_(t,U,g),e(U,$n),e(U,Re),e(Re,kn),e(U,Wn),e(U,Ze),e(Ze,Ln),e(U,Tn),_(t,ua,g),_(t,Q,g),e(Q,we),e(we,ko),M(Qe,ko,null),e(Q,Cn),e(Q,Wo),e(Wo,jn),_(t,fa,g),_(t,x,g),M(Je,x,null),e(x,Fn),e(x,J),e(J,xn),e(J,Zt),e(Zt,qn),e(J,En),e(J,Ge),e(Ge,Pn),e(J,Sn),e(x,An),e(x,G),e(G,zn),e(G,Qt),e(Qt,On),e(G,Dn),e(G,Jt),e(Jt,Vn),e(G,Nn),e(x,In),M(ye,x,null),e(x,Xn),M(Me,x,null),_(t,ga,g),_(t,ee,g),e(ee,$e),e($e,Lo),M(et,Lo,null),e(ee,Un),e(ee,To),e(To,Bn),_(t,_a,g),_(t,te,g),M(tt,te,null),e(te,Yn),e(te,ot),e(ot,Hn),e(ot,Co),e(Co,Kn),e(ot,Rn),_(t,va,g),_(t,oe,g),e(oe,ke),e(ke,jo),M(at,jo,null),e(oe,Zn),e(oe,Fo),e(Fo,Qn),_(t,ba,g),_(t,q,g),M(nt,q,null),e(q,Jn),e(q,st),e(st,Gn),e(st,rt),e(rt,es),e(st,ts),e(q,os),e(q,it),e(it,as),e(it,Gt),e(Gt,ns),e(it,ss),e(q,rs),e(q,lt),e(lt,is),e(lt,dt),e(dt,ls),e(lt,ds),e(q,cs),e(q,A),M(ct,A,null),e(A,ps),e(A,ae),e(ae,ms),e(ae,eo),e(eo,hs),e(ae,us),e(ae,xo),e(xo,fs),e(ae,gs),e(A,_s),M(We,A,null),e(A,vs),M(Le,A,null),_(t,wa,g),_(t,ne,g),e(ne,Te),e(Te,qo),M(pt,qo,null),e(ne,bs),e(ne,Eo),e(Eo,ws),_(t,ya,g),_(t,E,g),M(mt,E,null),e(E,ys),e(E,se),e(se,Ms),e(se,Po),e(Po,$s),e(se,ks),e(se,ht),e(ht,Ws),e(se,Ls),e(E,Ts),e(E,ut),e(ut,Cs),e(ut,to),e(to,js),e(ut,Fs),e(E,xs),e(E,ft),e(ft,qs),e(ft,gt),e(gt,Es),e(ft,Ps),e(E,Ss),e(E,P),M(_t,P,null),e(P,As),e(P,re),e(re,zs),e(re,oo),e(oo,Os),e(re,Ds),e(re,So),e(So,Vs),e(re,Ns),e(P,Is),M(Ce,P,null),e(P,Xs),M(je,P,null),e(P,Us),M(Fe,P,null),_(t,Ma,g),_(t,ie,g),e(ie,xe),e(xe,Ao),M(vt,Ao,null),e(ie,Bs),e(ie,zo),e(zo,Ys),_(t,$a,g),_(t,C,g),M(bt,C,null),e(C,Hs),e(C,Oo),e(Oo,Ks),e(C,Rs),e(C,wt),e(wt,Zs),e(wt,yt),e(yt,Qs),e(wt,Js),e(C,Gs),e(C,Mt),e(Mt,er),e(Mt,ao),e(ao,tr),e(Mt,or),e(C,ar),e(C,$t),e($t,nr),e($t,kt),e(kt,sr),e($t,rr),e(C,ir),e(C,S),M(Wt,S,null),e(S,lr),e(S,le),e(le,dr),e(le,no),e(no,cr),e(le,pr),e(le,Do),e(Do,mr),e(le,hr),e(S,ur),M(qe,S,null),e(S,fr),M(Ee,S,null),e(S,gr),M(Pe,S,null),_(t,ka,g),_(t,de,g),e(de,Se),e(Se,Vo),M(Lt,Vo,null),e(de,_r),e(de,No),e(No,vr),_(t,Wa,g),_(t,j,g),M(Tt,j,null),e(j,br),e(j,Io),e(Io,wr),e(j,yr),e(j,Ct),e(Ct,Mr),e(Ct,jt),e(jt,$r),e(Ct,kr),e(j,Wr),e(j,Ft),e(Ft,Lr),e(Ft,so),e(so,Tr),e(Ft,Cr),e(j,jr),e(j,xt),e(xt,Fr),e(xt,qt),e(qt,xr),e(xt,qr),e(j,Er),e(j,z),M(Et,z,null),e(z,Pr),e(z,ce),e(ce,Sr),e(ce,ro),e(ro,Ar),e(ce,zr),e(ce,Xo),e(Xo,Or),e(ce,Dr),e(z,Vr),M(Ae,z,null),e(z,Nr),M(ze,z,null),_(t,La,g),_(t,pe,g),e(pe,Oe),e(Oe,Uo),M(Pt,Uo,null),e(pe,Ir),e(pe,Bo),e(Bo,Xr),_(t,Ta,g),_(t,F,g),M(St,F,null),e(F,Ur),e(F,Yo),e(Yo,Br),e(F,Yr),e(F,At),e(At,Hr),e(At,zt),e(zt,Kr),e(At,Rr),e(F,Zr),e(F,Ot),e(Ot,Qr),e(Ot,io),e(io,Jr),e(Ot,Gr),e(F,ei),e(F,Dt),e(Dt,ti),e(Dt,Vt),e(Vt,oi),e(Dt,ai),e(F,ni),e(F,O),M(Nt,O,null),e(O,si),e(O,me),e(me,ri),e(me,lo),e(lo,ii),e(me,li),e(me,Ho),e(Ho,di),e(me,ci),e(O,pi),M(De,O,null),e(O,mi),M(Ve,O,null),Ca=!0},p(t,[g]){const It={};g&2&&(It.$$scope={dirty:g,ctx:t}),ye.$set(It);const Ko={};g&2&&(Ko.$$scope={dirty:g,ctx:t}),Me.$set(Ko);const Ro={};g&2&&(Ro.$$scope={dirty:g,ctx:t}),We.$set(Ro);const Zo={};g&2&&(Zo.$$scope={dirty:g,ctx:t}),Le.$set(Zo);const Xt={};g&2&&(Xt.$$scope={dirty:g,ctx:t}),Ce.$set(Xt);const Qo={};g&2&&(Qo.$$scope={dirty:g,ctx:t}),je.$set(Qo);const Jo={};g&2&&(Jo.$$scope={dirty:g,ctx:t}),Fe.$set(Jo);const Go={};g&2&&(Go.$$scope={dirty:g,ctx:t}),qe.$set(Go);const Ut={};g&2&&(Ut.$$scope={dirty:g,ctx:t}),Ee.$set(Ut);const ea={};g&2&&(ea.$$scope={dirty:g,ctx:t}),Pe.$set(ea);const ta={};g&2&&(ta.$$scope={dirty:g,ctx:t}),Ae.$set(ta);const oa={};g&2&&(oa.$$scope={dirty:g,ctx:t}),ze.$set(oa);const aa={};g&2&&(aa.$$scope={dirty:g,ctx:t}),De.$set(aa);const na={};g&2&&(na.$$scope={dirty:g,ctx:t}),Ve.$set(na)},i(t){Ca||($(a.$$.fragment,t),$(Ue.$$.fragment,t),$(Qe.$$.fragment,t),$(Je.$$.fragment,t),$(ye.$$.fragment,t),$(Me.$$.fragment,t),$(et.$$.fragment,t),$(tt.$$.fragment,t),$(at.$$.fragment,t),$(nt.$$.fragment,t),$(ct.$$.fragment,t),$(We.$$.fragment,t),$(Le.$$.fragment,t),$(pt.$$.fragment,t),$(mt.$$.fragment,t),$(_t.$$.fragment,t),$(Ce.$$.fragment,t),$(je.$$.fragment,t),$(Fe.$$.fragment,t),$(vt.$$.fragment,t),$(bt.$$.fragment,t),$(Wt.$$.fragment,t),$(qe.$$.fragment,t),$(Ee.$$.fragment,t),$(Pe.$$.fragment,t),$(Lt.$$.fragment,t),$(Tt.$$.fragment,t),$(Et.$$.fragment,t),$(Ae.$$.fragment,t),$(ze.$$.fragment,t),$(Pt.$$.fragment,t),$(St.$$.fragment,t),$(Nt.$$.fragment,t),$(De.$$.fragment,t),$(Ve.$$.fragment,t),Ca=!0)},o(t){k(a.$$.fragment,t),k(Ue.$$.fragment,t),k(Qe.$$.fragment,t),k(Je.$$.fragment,t),k(ye.$$.fragment,t),k(Me.$$.fragment,t),k(et.$$.fragment,t),k(tt.$$.fragment,t),k(at.$$.fragment,t),k(nt.$$.fragment,t),k(ct.$$.fragment,t),k(We.$$.fragment,t),k(Le.$$.fragment,t),k(pt.$$.fragment,t),k(mt.$$.fragment,t),k(_t.$$.fragment,t),k(Ce.$$.fragment,t),k(je.$$.fragment,t),k(Fe.$$.fragment,t),k(vt.$$.fragment,t),k(bt.$$.fragment,t),k(Wt.$$.fragment,t),k(qe.$$.fragment,t),k(Ee.$$.fragment,t),k(Pe.$$.fragment,t),k(Lt.$$.fragment,t),k(Tt.$$.fragment,t),k(Et.$$.fragment,t),k(Ae.$$.fragment,t),k(ze.$$.fragment,t),k(Pt.$$.fragment,t),k(St.$$.fragment,t),k(Nt.$$.fragment,t),k(De.$$.fragment,t),k(Ve.$$.fragment,t),Ca=!1},d(t){o(d),t&&o(v),t&&o(p),W(a),t&&o(ra),t&&o(Z),W(Ue),t&&o(ia),t&&o(ve),t&&o(la),t&&o(Bt),t&&o(da),t&&o(Yt),t&&o(ca),t&&o(Ht),t&&o(pa),t&&o(X),t&&o(ma),t&&o(be),t&&o(ha),t&&o(U),t&&o(ua),t&&o(Q),W(Qe),t&&o(fa),t&&o(x),W(Je),W(ye),W(Me),t&&o(ga),t&&o(ee),W(et),t&&o(_a),t&&o(te),W(tt),t&&o(va),t&&o(oe),W(at),t&&o(ba),t&&o(q),W(nt),W(ct),W(We),W(Le),t&&o(wa),t&&o(ne),W(pt),t&&o(ya),t&&o(E),W(mt),W(_t),W(Ce),W(je),W(Fe),t&&o(Ma),t&&o(ie),W(vt),t&&o($a),t&&o(C),W(bt),W(Wt),W(qe),W(Ee),W(Pe),t&&o(ka),t&&o(de),W(Lt),t&&o(Wa),t&&o(j),W(Tt),W(Et),W(Ae),W(ze),t&&o(La),t&&o(pe),W(Pt),t&&o(Ta),t&&o(F),W(St),W(Nt),W(De),W(Ve)}}}const Vl={local:"wavlm",sections:[{local:"overview",title:"Overview"},{local:"transformers.WavLMConfig",title:"WavLMConfig"},{local:"transformers.models.wavlm.modeling_wavlm.WavLMBaseModelOutput",title:"WavLM specific outputs"},{local:"transformers.WavLMModel",title:"WavLMModel"},{local:"transformers.WavLMForCTC",title:"WavLMForCTC"},{local:"transformers.WavLMForSequenceClassification",title:"WavLMForSequenceClassification"},{local:"transformers.WavLMForAudioFrameClassification",title:"WavLMForAudioFrameClassification"},{local:"transformers.WavLMForXVector",title:"WavLMForXVector"}],title:"WavLM"};function Nl(L){return kl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Kl extends wl{constructor(d){super();yl(this,d,Nl,Dl,Ml,{})}}export{Kl as default,Vl as metadata};
