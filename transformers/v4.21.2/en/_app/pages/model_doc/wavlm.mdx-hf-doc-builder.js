import{S as Zi,i as Qi,s as Ji,e as r,k as u,w,t as n,M as Gi,c as i,d as o,m as f,a as l,x as y,h as s,b as p,G as e,g as v,y as M,q as $,o as k,B as W,v as el,L as me}from"../../chunks/vendor-hf-doc-builder.js";import{T as Zo}from"../../chunks/Tip-hf-doc-builder.js";import{D as X}from"../../chunks/Docstring-hf-doc-builder.js";import{C as he}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Oe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as pe}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function tl(L){let d,_,c,m,b;return m=new he({props:{code:"",highlighted:""}}),{c(){d=r("p"),_=n("Example:"),c=u(),w(m.$$.fragment)},l(a){d=i(a,"P",{});var h=l(d);_=s(h,"Example:"),h.forEach(o),c=f(a),y(m.$$.fragment,a)},m(a,h){v(a,d,h),e(d,_),v(a,c,h),M(m,a,h),b=!0},p:me,i(a){b||($(m.$$.fragment,a),b=!0)},o(a){k(m.$$.fragment,a),b=!1},d(a){a&&o(d),a&&o(c),W(m,a)}}}function ol(L){let d,_,c,m,b;return m=new he({props:{code:`from transformers import WavLMModel, WavLMConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),_=n("Example:"),c=u(),w(m.$$.fragment)},l(a){d=i(a,"P",{});var h=l(d);_=s(h,"Example:"),h.forEach(o),c=f(a),y(m.$$.fragment,a)},m(a,h){v(a,d,h),e(d,_),v(a,c,h),M(m,a,h),b=!0},p:me,i(a){b||($(m.$$.fragment,a),b=!0)},o(a){k(m.$$.fragment,a),b=!1},d(a){a&&o(d),a&&o(c),W(m,a)}}}function al(L){let d,_,c,m,b;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var h=l(d);_=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(h,"CODE",{});var T=l(c);m=s(T,"Module"),T.forEach(o),b=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(a,h){v(a,d,h),e(d,_),e(d,c),e(c,m),e(d,b)},d(a){a&&o(d)}}}function nl(L){let d,_,c,m,b;return m=new he({props:{code:`from transformers import Wav2Vec2Processor, WavLMModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">768</span>]`}}),{c(){d=r("p"),_=n("Example:"),c=u(),w(m.$$.fragment)},l(a){d=i(a,"P",{});var h=l(d);_=s(h,"Example:"),h.forEach(o),c=f(a),y(m.$$.fragment,a)},m(a,h){v(a,d,h),e(d,_),v(a,c,h),M(m,a,h),b=!0},p:me,i(a){b||($(m.$$.fragment,a),b=!0)},o(a){k(m.$$.fragment,a),b=!1},d(a){a&&o(d),a&&o(c),W(m,a)}}}function sl(L){let d,_,c,m,b;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var h=l(d);_=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(h,"CODE",{});var T=l(c);m=s(T,"Module"),T.forEach(o),b=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(a,h){v(a,d,h),e(d,_),e(d,c),e(c,m),e(d,b)},d(a){a&&o(d)}}}function rl(L){let d,_,c,m,b;return m=new he({props:{code:`from transformers import Wav2Vec2Processor, WavLMForCTC
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
<span class="hljs-string">&#x27;mister quilter is the aposle of the middle classes and we are glad to welcome his gospel&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),c=u(),w(m.$$.fragment)},l(a){d=i(a,"P",{});var h=l(d);_=s(h,"Example:"),h.forEach(o),c=f(a),y(m.$$.fragment,a)},m(a,h){v(a,d,h),e(d,_),v(a,c,h),M(m,a,h),b=!0},p:me,i(a){b||($(m.$$.fragment,a),b=!0)},o(a){k(m.$$.fragment,a),b=!1},d(a){a&&o(d),a&&o(c),W(m,a)}}}function il(L){let d,_;return d=new he({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">12.51</span>`}}),{c(){w(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){M(d,c,m),_=!0},p:me,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){k(d.$$.fragment,c),_=!1},d(c){W(d,c)}}}function ll(L){let d,_,c,m,b;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var h=l(d);_=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(h,"CODE",{});var T=l(c);m=s(T,"Module"),T.forEach(o),b=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(a,h){v(a,d,h),e(d,_),e(d,c),e(c,m),e(d,b)},d(a){a&&o(d)}}}function dl(L){let d,_,c,m,b;return m=new he({props:{code:`from transformers import Wav2Vec2FeatureExtractor, WavLMForSequenceClassification
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
<span class="hljs-string">&#x27;no&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),c=u(),w(m.$$.fragment)},l(a){d=i(a,"P",{});var h=l(d);_=s(h,"Example:"),h.forEach(o),c=f(a),y(m.$$.fragment,a)},m(a,h){v(a,d,h),e(d,_),v(a,c,h),M(m,a,h),b=!0},p:me,i(a){b||($(m.$$.fragment,a),b=!0)},o(a){k(m.$$.fragment,a),b=!1},d(a){a&&o(d),a&&o(c),W(m,a)}}}function cl(L){let d,_;return d=new he({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.7</span>`}}),{c(){w(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){M(d,c,m),_=!0},p:me,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){k(d.$$.fragment,c),_=!1},d(c){W(d,c)}}}function pl(L){let d,_,c,m,b;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var h=l(d);_=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(h,"CODE",{});var T=l(c);m=s(T,"Module"),T.forEach(o),b=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(a,h){v(a,d,h),e(d,_),e(d,c),e(c,m),e(d,b)},d(a){a&&o(d)}}}function ml(L){let d,_,c,m,b;return m=new he({props:{code:`from transformers import Wav2Vec2FeatureExtractor, WavLMForAudioFrameClassification
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
[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>]`}}),{c(){d=r("p"),_=n("Example:"),c=u(),w(m.$$.fragment)},l(a){d=i(a,"P",{});var h=l(d);_=s(h,"Example:"),h.forEach(o),c=f(a),y(m.$$.fragment,a)},m(a,h){v(a,d,h),e(d,_),v(a,c,h),M(m,a,h),b=!0},p:me,i(a){b||($(m.$$.fragment,a),b=!0)},o(a){k(m.$$.fragment,a),b=!1},d(a){a&&o(d),a&&o(c),W(m,a)}}}function hl(L){let d,_,c,m,b;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var h=l(d);_=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(h,"CODE",{});var T=l(c);m=s(T,"Module"),T.forEach(o),b=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(a,h){v(a,d,h),e(d,_),e(d,c),e(c,m),e(d,b)},d(a){a&&o(d)}}}function ul(L){let d,_,c,m,b;return m=new he({props:{code:`from transformers import Wav2Vec2FeatureExtractor, WavLMForXVector
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
<span class="hljs-number">0.97</span>`}}),{c(){d=r("p"),_=n("Example:"),c=u(),w(m.$$.fragment)},l(a){d=i(a,"P",{});var h=l(d);_=s(h,"Example:"),h.forEach(o),c=f(a),y(m.$$.fragment,a)},m(a,h){v(a,d,h),e(d,_),v(a,c,h),M(m,a,h),b=!0},p:me,i(a){b||($(m.$$.fragment,a),b=!0)},o(a){k(m.$$.fragment,a),b=!1},d(a){a&&o(d),a&&o(c),W(m,a)}}}function fl(L){let d,_,c,m,b,a,h,T,Na,Qo,Z,ue,uo,Ne,Xa,fo,Ia,Jo,fe,Ua,Xe,Ya,Ha,Go,Vt,Ka,ea,Ot,go,Ra,ta,Nt,Ba,oa,I,Ie,Za,Xt,Qa,Ja,Ga,Ue,en,It,tn,on,an,_o,nn,aa,ge,sn,Ye,rn,ln,na,U,dn,He,cn,pn,Ke,mn,hn,sa,Q,_e,vo,Re,un,bo,fn,ra,x,Be,gn,J,_n,Ut,vn,bn,Ze,wn,yn,Mn,G,$n,Yt,kn,Wn,Ht,Ln,Tn,Cn,ve,jn,be,ia,ee,we,wo,Qe,Fn,yo,xn,la,q,Je,qn,Ge,En,et,Pn,Sn,An,tt,zn,Kt,Dn,Vn,On,ot,Nn,at,Xn,In,Un,A,nt,Yn,te,Hn,Rt,Kn,Rn,Mo,Bn,Zn,Qn,ye,Jn,Me,da,oe,$e,$o,st,Gn,ko,es,ca,E,rt,ts,ae,os,Wo,as,ns,it,ss,rs,is,lt,ls,Bt,ds,cs,ps,dt,ms,ct,hs,us,fs,P,pt,gs,ne,_s,Zt,vs,bs,Lo,ws,ys,Ms,ke,$s,We,ks,Le,pa,se,Te,To,mt,Ws,Co,Ls,ma,C,ht,Ts,jo,Cs,js,ut,Fs,ft,xs,qs,Es,gt,Ps,Qt,Ss,As,zs,_t,Ds,vt,Vs,Os,Ns,S,bt,Xs,re,Is,Jt,Us,Ys,Fo,Hs,Ks,Rs,Ce,Bs,je,Zs,Fe,ha,ie,xe,xo,wt,Qs,qo,Js,ua,j,yt,Gs,Eo,er,tr,Mt,or,$t,ar,nr,sr,kt,rr,Gt,ir,lr,dr,Wt,cr,Lt,pr,mr,hr,z,Tt,ur,le,fr,eo,gr,_r,Po,vr,br,wr,qe,yr,Ee,fa,de,Pe,So,Ct,Mr,Ao,$r,ga,F,jt,kr,zo,Wr,Lr,Ft,Tr,xt,Cr,jr,Fr,qt,xr,to,qr,Er,Pr,Et,Sr,Pt,Ar,zr,Dr,D,St,Vr,ce,Or,oo,Nr,Xr,Do,Ir,Ur,Yr,Se,Hr,Ae,_a;return a=new Oe({}),Ne=new Oe({}),Re=new Oe({}),Be=new X({props:{name:"class transformers.WavLMConfig",anchor:"transformers.WavLMConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"feat_quantizer_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"num_buckets",val:" = 320"},{name:"max_bucket_distance",val:" = 800"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"num_codevectors_per_group",val:" = 320"},{name:"num_codevector_groups",val:" = 2"},{name:"contrastive_logits_temperature",val:" = 0.1"},{name:"num_negatives",val:" = 100"},{name:"codevector_dim",val:" = 256"},{name:"proj_codevector_dim",val:" = 256"},{name:"diversity_loss_weight",val:" = 0.1"},{name:"ctc_loss_reduction",val:" = 'mean'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"tdnn_dim",val:" = (512, 512, 512, 512, 1500)"},{name:"tdnn_kernel",val:" = (5, 3, 3, 1, 1)"},{name:"tdnn_dilation",val:" = (1, 2, 3, 1, 1)"},{name:"xvector_output_dim",val:" = 512"},{name:"num_ctc_classes",val:" = 80"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"add_adapter",val:" = False"},{name:"adapter_kernel_size",val:" = 3"},{name:"adapter_stride",val:" = 2"},{name:"num_adapter_layers",val:" = 3"},{name:"output_hidden_size",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WavLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the WavLM model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMModel">WavLMModel</a>. Vocabulary size of the model. Defines the different tokens
that can be represented by the <em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMModel">WavLMModel</a>.`,name:"vocab_size"},{anchor:"transformers.WavLMConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.WavLMConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.WavLMConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.WavLMConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.WavLMConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.WavLMConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.WavLMConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.WavLMConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMForCTC">WavLMForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.WavLMConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.WavLMConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.WavLMConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.WavLMConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.WavLMConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.WavLMConfig.feat_quantizer_dropout",description:`<strong>feat_quantizer_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for quantized feature encoder states.`,name:"feat_quantizer_dropout"},{anchor:"transformers.WavLMConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.WavLMConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.WavLMConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 3, 3)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the length of
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
instance of <a href="/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMForCTC">WavLMForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.WavLMConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMForCTC">WavLMForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.WavLMConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMForSequenceClassification">WavLMForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.WavLMConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"},{anchor:"transformers.WavLMConfig.tdnn_dim",description:`<strong>tdnn_dim</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 1500)</code>) &#x2014;
A tuple of integers defining the number of output channels of each 1D convolutional layer in the <em>TDNN</em>
module of the <em>XVector</em> model. The length of <em>tdnn_dim</em> defines the number of <em>TDNN</em> layers.`,name:"tdnn_dim"},{anchor:"transformers.WavLMConfig.tdnn_kernel",description:`<strong>tdnn_kernel</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(5, 3, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_kernel</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_kernel"},{anchor:"transformers.WavLMConfig.tdnn_dilation",description:`<strong>tdnn_dilation</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(1, 2, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the dilation factor of each 1D convolutional layer in <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_dilation</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_dilation"},{anchor:"transformers.WavLMConfig.xvector_output_dim",description:`<strong>xvector_output_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the <em>XVector</em> embedding vectors.`,name:"xvector_output_dim"},{anchor:"transformers.WavLMConfig.add_adapter",description:`<strong>add_adapter</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether a convolutional network should be stacked on top of the Wav2Vec2 Encoder. Can be very useful for
warm-starting Wav2Vec2 for SpeechEncoderDecoder models.`,name:"add_adapter"},{anchor:"transformers.WavLMConfig.adapter_kernel_size",description:`<strong>adapter_kernel_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Kernel size of the convolutional layers in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"adapter_kernel_size"},{anchor:"transformers.WavLMConfig.adapter_stride",description:`<strong>adapter_stride</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Stride of the convolutional layers in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"adapter_stride"},{anchor:"transformers.WavLMConfig.num_adapter_layers",description:`<strong>num_adapter_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Number of convolutional layers that should be used in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"num_adapter_layers"},{anchor:"transformers.WavLMConfig.output_hidden_size",description:`<strong>output_hidden_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Dimensionality of the encoder output layer. If not defined, this defaults to <em>hidden-size</em>. Only relevant
if <code>add_adapter is True</code>.`,name:"output_hidden_size"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/wavlm/configuration_wavlm.py#L32"}}),ve=new pe({props:{anchor:"transformers.WavLMConfig.example",$$slots:{default:[tl]},$$scope:{ctx:L}}}),be=new pe({props:{anchor:"transformers.WavLMConfig.example-2",$$slots:{default:[ol]},$$scope:{ctx:L}}}),Qe=new Oe({}),Je=new X({props:{name:"class transformers.WavLMModel",anchor:"transformers.WavLMModel",parameters:[{name:"config",val:": WavLMConfig"}],parametersDescription:[{anchor:"transformers.WavLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMConfig">WavLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/wavlm/modeling_wavlm.py#L1127"}}),nt=new X({props:{name:"forward",anchor:"transformers.WavLMModel.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.WavLMModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/wavlm/modeling_wavlm.py#L1213",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMConfig"
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
  href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ye=new Zo({props:{$$slots:{default:[al]},$$scope:{ctx:L}}}),Me=new pe({props:{anchor:"transformers.WavLMModel.forward.example",$$slots:{default:[nl]},$$scope:{ctx:L}}}),st=new Oe({}),rt=new X({props:{name:"class transformers.WavLMForCTC",anchor:"transformers.WavLMForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.WavLMForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMConfig">WavLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/wavlm/modeling_wavlm.py#L1280"}}),pt=new X({props:{name:"forward",anchor:"transformers.WavLMForCTC.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.WavLMForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.WavLMForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/wavlm/modeling_wavlm.py#L1321",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ke=new Zo({props:{$$slots:{default:[sl]},$$scope:{ctx:L}}}),We=new pe({props:{anchor:"transformers.WavLMForCTC.forward.example",$$slots:{default:[rl]},$$scope:{ctx:L}}}),Le=new pe({props:{anchor:"transformers.WavLMForCTC.forward.example-2",$$slots:{default:[il]},$$scope:{ctx:L}}}),mt=new Oe({}),ht=new X({props:{name:"class transformers.WavLMForSequenceClassification",anchor:"transformers.WavLMForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.WavLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMConfig">WavLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/wavlm/modeling_wavlm.py#L1411"}}),bt=new X({props:{name:"forward",anchor:"transformers.WavLMForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.WavLMForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.WavLMForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/wavlm/modeling_wavlm.py#L1456",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ce=new Zo({props:{$$slots:{default:[ll]},$$scope:{ctx:L}}}),je=new pe({props:{anchor:"transformers.WavLMForSequenceClassification.forward.example",$$slots:{default:[dl]},$$scope:{ctx:L}}}),Fe=new pe({props:{anchor:"transformers.WavLMForSequenceClassification.forward.example-2",$$slots:{default:[cl]},$$scope:{ctx:L}}}),wt=new Oe({}),yt=new X({props:{name:"class transformers.WavLMForAudioFrameClassification",anchor:"transformers.WavLMForAudioFrameClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.WavLMForAudioFrameClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMConfig">WavLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/wavlm/modeling_wavlm.py#L1535"}}),Tt=new X({props:{name:"forward",anchor:"transformers.WavLMForAudioFrameClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.WavLMForAudioFrameClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.WavLMForAudioFrameClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/wavlm/modeling_wavlm.py#L1579",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qe=new Zo({props:{$$slots:{default:[pl]},$$scope:{ctx:L}}}),Ee=new pe({props:{anchor:"transformers.WavLMForAudioFrameClassification.forward.example",$$slots:{default:[ml]},$$scope:{ctx:L}}}),Ct=new Oe({}),jt=new X({props:{name:"class transformers.WavLMForXVector",anchor:"transformers.WavLMForXVector",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.WavLMForXVector.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMConfig">WavLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/wavlm/modeling_wavlm.py#L1700"}}),St=new X({props:{name:"forward",anchor:"transformers.WavLMForXVector.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.WavLMForXVector.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.WavLMForXVector.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/wavlm/modeling_wavlm.py#L1762",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.XVectorOutput"
>transformers.modeling_outputs.XVectorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMConfig"
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
<p><a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.XVectorOutput"
>transformers.modeling_outputs.XVectorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Se=new Zo({props:{$$slots:{default:[hl]},$$scope:{ctx:L}}}),Ae=new pe({props:{anchor:"transformers.WavLMForXVector.forward.example",$$slots:{default:[ul]},$$scope:{ctx:L}}}),{c(){d=r("meta"),_=u(),c=r("h1"),m=r("a"),b=r("span"),w(a.$$.fragment),h=u(),T=r("span"),Na=n("WavLM"),Qo=u(),Z=r("h2"),ue=r("a"),uo=r("span"),w(Ne.$$.fragment),Xa=u(),fo=r("span"),Ia=n("Overview"),Jo=u(),fe=r("p"),Ua=n("The WavLM model was proposed in "),Xe=r("a"),Ya=n("WavLM: Large-Scale Self-Supervised Pre-Training for Full Stack Speech Processing"),Ha=n(` by Sanyuan Chen, Chengyi Wang, Zhengyang Chen, Yu Wu, Shujie Liu, Zhuo Chen,
Jinyu Li, Naoyuki Kanda, Takuya Yoshioka, Xiong Xiao, Jian Wu, Long Zhou, Shuo Ren, Yanmin Qian, Yao Qian, Jian Wu,
Michael Zeng, Furu Wei.`),Go=u(),Vt=r("p"),Ka=n("The abstract from the paper is the following:"),ea=u(),Ot=r("p"),go=r("em"),Ra=n(`Self-supervised learning (SSL) achieves great success in speech recognition, while limited exploration has been
attempted for other speech processing tasks. As speech signal contains multi-faceted information including speaker
identity, paralinguistics, spoken content, etc., learning universal representations for all speech tasks is
challenging. In this paper, we propose a new pre-trained model, WavLM, to solve full-stack downstream speech tasks.
WavLM is built based on the HuBERT framework, with an emphasis on both spoken content modeling and speaker identity
preservation. We first equip the Transformer structure with gated relative position bias to improve its capability on
recognition tasks. For better speaker discrimination, we propose an utterance mixing training strategy, where
additional overlapped utterances are created unsupervisely and incorporated during model training. Lastly, we scale up
the training dataset from 60k hours to 94k hours. WavLM Large achieves state-of-the-art performance on the SUPERB
benchmark, and brings significant improvements for various speech processing tasks on their representative benchmarks.`),ta=u(),Nt=r("p"),Ba=n("Tips:"),oa=u(),I=r("ul"),Ie=r("li"),Za=n(`WavLM is a speech model that accepts a float array corresponding to the raw waveform of the speech signal. Please use
`),Xt=r("a"),Qa=n("Wav2Vec2Processor"),Ja=n(" for the feature extraction."),Ga=u(),Ue=r("li"),en=n(`WavLM model can be fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),It=r("a"),tn=n("Wav2Vec2CTCTokenizer"),on=n("."),an=u(),_o=r("li"),nn=n("WavLM performs especially well on speaker verification, speaker identification, and speaker diarization tasks."),aa=u(),ge=r("p"),sn=n("Relevant checkpoints can be found under "),Ye=r("a"),rn=n("https://huggingface.co/models?other=wavlm"),ln=n("."),na=u(),U=r("p"),dn=n("This model was contributed by "),He=r("a"),cn=n("patrickvonplaten"),pn=n(`. The Authors\u2019 code can be
found `),Ke=r("a"),mn=n("here"),hn=n("."),sa=u(),Q=r("h2"),_e=r("a"),vo=r("span"),w(Re.$$.fragment),un=u(),bo=r("span"),fn=n("WavLMConfig"),ra=u(),x=r("div"),w(Be.$$.fragment),gn=u(),J=r("p"),_n=n("This is the configuration class to store the configuration of a "),Ut=r("a"),vn=n("WavLMModel"),bn=n(`. It is used to instantiate an WavLM
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the WavLM
`),Ze=r("a"),wn=n("microsoft/wavlm-base"),yn=n(" architecture."),Mn=u(),G=r("p"),$n=n("Configuration objects inherit from "),Yt=r("a"),kn=n("PretrainedConfig"),Wn=n(` and can be used to control the model outputs. Read the
documentation from `),Ht=r("a"),Ln=n("PretrainedConfig"),Tn=n(" for more information."),Cn=u(),w(ve.$$.fragment),jn=u(),w(be.$$.fragment),ia=u(),ee=r("h2"),we=r("a"),wo=r("span"),w(Qe.$$.fragment),Fn=u(),yo=r("span"),xn=n("WavLMModel"),la=u(),q=r("div"),w(Je.$$.fragment),qn=u(),Ge=r("p"),En=n(`The bare WavLM Model transformer outputting raw hidden-states without any specific head on top.
WavLM was proposed in `),et=r("a"),Pn=n(`WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Sn=n(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),An=u(),tt=r("p"),zn=n("This model inherits from "),Kt=r("a"),Dn=n("PreTrainedModel"),Vn=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),On=u(),ot=r("p"),Nn=n("This model is a PyTorch "),at=r("a"),Xn=n("torch.nn.Module"),In=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Un=u(),A=r("div"),w(nt.$$.fragment),Yn=u(),te=r("p"),Hn=n("The "),Rt=r("a"),Kn=n("WavLMModel"),Rn=n(" forward method, overrides the "),Mo=r("code"),Bn=n("__call__"),Zn=n(" special method."),Qn=u(),w(ye.$$.fragment),Jn=u(),w(Me.$$.fragment),da=u(),oe=r("h2"),$e=r("a"),$o=r("span"),w(st.$$.fragment),Gn=u(),ko=r("span"),es=n("WavLMForCTC"),ca=u(),E=r("div"),w(rt.$$.fragment),ts=u(),ae=r("p"),os=n("WavLM Model with a "),Wo=r("code"),as=n("language modeling"),ns=n(` head on top for Connectionist Temporal Classification (CTC).
WavLM was proposed in `),it=r("a"),ss=n(`WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),rs=n(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),is=u(),lt=r("p"),ls=n("This model inherits from "),Bt=r("a"),ds=n("PreTrainedModel"),cs=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ps=u(),dt=r("p"),ms=n("This model is a PyTorch "),ct=r("a"),hs=n("torch.nn.Module"),us=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fs=u(),P=r("div"),w(pt.$$.fragment),gs=u(),ne=r("p"),_s=n("The "),Zt=r("a"),vs=n("WavLMForCTC"),bs=n(" forward method, overrides the "),Lo=r("code"),ws=n("__call__"),ys=n(" special method."),Ms=u(),w(ke.$$.fragment),$s=u(),w(We.$$.fragment),ks=u(),w(Le.$$.fragment),pa=u(),se=r("h2"),Te=r("a"),To=r("span"),w(mt.$$.fragment),Ws=u(),Co=r("span"),Ls=n("WavLMForSequenceClassification"),ma=u(),C=r("div"),w(ht.$$.fragment),Ts=u(),jo=r("p"),Cs=n(`WavLM Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),js=u(),ut=r("p"),Fs=n("WavLM was proposed in "),ft=r("a"),xs=n(`WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),qs=n(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),Es=u(),gt=r("p"),Ps=n("This model inherits from "),Qt=r("a"),Ss=n("PreTrainedModel"),As=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),zs=u(),_t=r("p"),Ds=n("This model is a PyTorch "),vt=r("a"),Vs=n("torch.nn.Module"),Os=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ns=u(),S=r("div"),w(bt.$$.fragment),Xs=u(),re=r("p"),Is=n("The "),Jt=r("a"),Us=n("WavLMForSequenceClassification"),Ys=n(" forward method, overrides the "),Fo=r("code"),Hs=n("__call__"),Ks=n(" special method."),Rs=u(),w(Ce.$$.fragment),Bs=u(),w(je.$$.fragment),Zs=u(),w(Fe.$$.fragment),ha=u(),ie=r("h2"),xe=r("a"),xo=r("span"),w(wt.$$.fragment),Qs=u(),qo=r("span"),Js=n("WavLMForAudioFrameClassification"),ua=u(),j=r("div"),w(yt.$$.fragment),Gs=u(),Eo=r("p"),er=n("WavLM Model with a frame classification head on top for tasks like Speaker Diarization."),tr=u(),Mt=r("p"),or=n("WavLM was proposed in "),$t=r("a"),ar=n(`WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),nr=n(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),sr=u(),kt=r("p"),rr=n("This model inherits from "),Gt=r("a"),ir=n("PreTrainedModel"),lr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),dr=u(),Wt=r("p"),cr=n("This model is a PyTorch "),Lt=r("a"),pr=n("torch.nn.Module"),mr=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),hr=u(),z=r("div"),w(Tt.$$.fragment),ur=u(),le=r("p"),fr=n("The "),eo=r("a"),gr=n("WavLMForAudioFrameClassification"),_r=n(" forward method, overrides the "),Po=r("code"),vr=n("__call__"),br=n(" special method."),wr=u(),w(qe.$$.fragment),yr=u(),w(Ee.$$.fragment),fa=u(),de=r("h2"),Pe=r("a"),So=r("span"),w(Ct.$$.fragment),Mr=u(),Ao=r("span"),$r=n("WavLMForXVector"),ga=u(),F=r("div"),w(jt.$$.fragment),kr=u(),zo=r("p"),Wr=n("WavLM Model with an XVector feature extraction head on top for tasks like Speaker Verification."),Lr=u(),Ft=r("p"),Tr=n("WavLM was proposed in "),xt=r("a"),Cr=n(`WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),jr=n(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),Fr=u(),qt=r("p"),xr=n("This model inherits from "),to=r("a"),qr=n("PreTrainedModel"),Er=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Pr=u(),Et=r("p"),Sr=n("This model is a PyTorch "),Pt=r("a"),Ar=n("torch.nn.Module"),zr=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dr=u(),D=r("div"),w(St.$$.fragment),Vr=u(),ce=r("p"),Or=n("The "),oo=r("a"),Nr=n("WavLMForXVector"),Xr=n(" forward method, overrides the "),Do=r("code"),Ir=n("__call__"),Ur=n(" special method."),Yr=u(),w(Se.$$.fragment),Hr=u(),w(Ae.$$.fragment),this.h()},l(t){const g=Gi('[data-svelte="svelte-1phssyn"]',document.head);d=i(g,"META",{name:!0,content:!0}),g.forEach(o),_=f(t),c=i(t,"H1",{class:!0});var At=l(c);m=i(At,"A",{id:!0,class:!0,href:!0});var Vo=l(m);b=i(Vo,"SPAN",{});var Oo=l(b);y(a.$$.fragment,Oo),Oo.forEach(o),Vo.forEach(o),h=f(At),T=i(At,"SPAN",{});var No=l(T);Na=s(No,"WavLM"),No.forEach(o),At.forEach(o),Qo=f(t),Z=i(t,"H2",{class:!0});var zt=l(Z);ue=i(zt,"A",{id:!0,class:!0,href:!0});var Xo=l(ue);uo=i(Xo,"SPAN",{});var Io=l(uo);y(Ne.$$.fragment,Io),Io.forEach(o),Xo.forEach(o),Xa=f(zt),fo=i(zt,"SPAN",{});var Uo=l(fo);Ia=s(Uo,"Overview"),Uo.forEach(o),zt.forEach(o),Jo=f(t),fe=i(t,"P",{});var Dt=l(fe);Ua=s(Dt,"The WavLM model was proposed in "),Xe=i(Dt,"A",{href:!0,rel:!0});var Yo=l(Xe);Ya=s(Yo,"WavLM: Large-Scale Self-Supervised Pre-Training for Full Stack Speech Processing"),Yo.forEach(o),Ha=s(Dt,` by Sanyuan Chen, Chengyi Wang, Zhengyang Chen, Yu Wu, Shujie Liu, Zhuo Chen,
Jinyu Li, Naoyuki Kanda, Takuya Yoshioka, Xiong Xiao, Jian Wu, Long Zhou, Shuo Ren, Yanmin Qian, Yao Qian, Jian Wu,
Michael Zeng, Furu Wei.`),Dt.forEach(o),Go=f(t),Vt=i(t,"P",{});var Ho=l(Vt);Ka=s(Ho,"The abstract from the paper is the following:"),Ho.forEach(o),ea=f(t),Ot=i(t,"P",{});var Ko=l(Ot);go=i(Ko,"EM",{});var Ro=l(go);Ra=s(Ro,`Self-supervised learning (SSL) achieves great success in speech recognition, while limited exploration has been
attempted for other speech processing tasks. As speech signal contains multi-faceted information including speaker
identity, paralinguistics, spoken content, etc., learning universal representations for all speech tasks is
challenging. In this paper, we propose a new pre-trained model, WavLM, to solve full-stack downstream speech tasks.
WavLM is built based on the HuBERT framework, with an emphasis on both spoken content modeling and speaker identity
preservation. We first equip the Transformer structure with gated relative position bias to improve its capability on
recognition tasks. For better speaker discrimination, we propose an utterance mixing training strategy, where
additional overlapped utterances are created unsupervisely and incorporated during model training. Lastly, we scale up
the training dataset from 60k hours to 94k hours. WavLM Large achieves state-of-the-art performance on the SUPERB
benchmark, and brings significant improvements for various speech processing tasks on their representative benchmarks.`),Ro.forEach(o),Ko.forEach(o),ta=f(t),Nt=i(t,"P",{});var Bo=l(Nt);Ba=s(Bo,"Tips:"),Bo.forEach(o),oa=f(t),I=i(t,"UL",{});var ao=l(I);Ie=i(ao,"LI",{});var va=l(Ie);Za=s(va,`WavLM is a speech model that accepts a float array corresponding to the raw waveform of the speech signal. Please use
`),Xt=i(va,"A",{href:!0});var Kr=l(Xt);Qa=s(Kr,"Wav2Vec2Processor"),Kr.forEach(o),Ja=s(va," for the feature extraction."),va.forEach(o),Ga=f(ao),Ue=i(ao,"LI",{});var ba=l(Ue);en=s(ba,`WavLM model can be fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),It=i(ba,"A",{href:!0});var Rr=l(It);tn=s(Rr,"Wav2Vec2CTCTokenizer"),Rr.forEach(o),on=s(ba,"."),ba.forEach(o),an=f(ao),_o=i(ao,"LI",{});var Br=l(_o);nn=s(Br,"WavLM performs especially well on speaker verification, speaker identification, and speaker diarization tasks."),Br.forEach(o),ao.forEach(o),aa=f(t),ge=i(t,"P",{});var wa=l(ge);sn=s(wa,"Relevant checkpoints can be found under "),Ye=i(wa,"A",{href:!0,rel:!0});var Zr=l(Ye);rn=s(Zr,"https://huggingface.co/models?other=wavlm"),Zr.forEach(o),ln=s(wa,"."),wa.forEach(o),na=f(t),U=i(t,"P",{});var no=l(U);dn=s(no,"This model was contributed by "),He=i(no,"A",{href:!0,rel:!0});var Qr=l(He);cn=s(Qr,"patrickvonplaten"),Qr.forEach(o),pn=s(no,`. The Authors\u2019 code can be
found `),Ke=i(no,"A",{href:!0,rel:!0});var Jr=l(Ke);mn=s(Jr,"here"),Jr.forEach(o),hn=s(no,"."),no.forEach(o),sa=f(t),Q=i(t,"H2",{class:!0});var ya=l(Q);_e=i(ya,"A",{id:!0,class:!0,href:!0});var Gr=l(_e);vo=i(Gr,"SPAN",{});var ei=l(vo);y(Re.$$.fragment,ei),ei.forEach(o),Gr.forEach(o),un=f(ya),bo=i(ya,"SPAN",{});var ti=l(bo);fn=s(ti,"WavLMConfig"),ti.forEach(o),ya.forEach(o),ra=f(t),x=i(t,"DIV",{class:!0});var Y=l(x);y(Be.$$.fragment,Y),gn=f(Y),J=i(Y,"P",{});var so=l(J);_n=s(so,"This is the configuration class to store the configuration of a "),Ut=i(so,"A",{href:!0});var oi=l(Ut);vn=s(oi,"WavLMModel"),oi.forEach(o),bn=s(so,`. It is used to instantiate an WavLM
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the WavLM
`),Ze=i(so,"A",{href:!0,rel:!0});var ai=l(Ze);wn=s(ai,"microsoft/wavlm-base"),ai.forEach(o),yn=s(so," architecture."),so.forEach(o),Mn=f(Y),G=i(Y,"P",{});var ro=l(G);$n=s(ro,"Configuration objects inherit from "),Yt=i(ro,"A",{href:!0});var ni=l(Yt);kn=s(ni,"PretrainedConfig"),ni.forEach(o),Wn=s(ro,` and can be used to control the model outputs. Read the
documentation from `),Ht=i(ro,"A",{href:!0});var si=l(Ht);Ln=s(si,"PretrainedConfig"),si.forEach(o),Tn=s(ro," for more information."),ro.forEach(o),Cn=f(Y),y(ve.$$.fragment,Y),jn=f(Y),y(be.$$.fragment,Y),Y.forEach(o),ia=f(t),ee=i(t,"H2",{class:!0});var Ma=l(ee);we=i(Ma,"A",{id:!0,class:!0,href:!0});var ri=l(we);wo=i(ri,"SPAN",{});var ii=l(wo);y(Qe.$$.fragment,ii),ii.forEach(o),ri.forEach(o),Fn=f(Ma),yo=i(Ma,"SPAN",{});var li=l(yo);xn=s(li,"WavLMModel"),li.forEach(o),Ma.forEach(o),la=f(t),q=i(t,"DIV",{class:!0});var H=l(q);y(Je.$$.fragment,H),qn=f(H),Ge=i(H,"P",{});var $a=l(Ge);En=s($a,`The bare WavLM Model transformer outputting raw hidden-states without any specific head on top.
WavLM was proposed in `),et=i($a,"A",{href:!0,rel:!0});var di=l(et);Pn=s(di,`WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),di.forEach(o),Sn=s($a,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),$a.forEach(o),An=f(H),tt=i(H,"P",{});var ka=l(tt);zn=s(ka,"This model inherits from "),Kt=i(ka,"A",{href:!0});var ci=l(Kt);Dn=s(ci,"PreTrainedModel"),ci.forEach(o),Vn=s(ka,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ka.forEach(o),On=f(H),ot=i(H,"P",{});var Wa=l(ot);Nn=s(Wa,"This model is a PyTorch "),at=i(Wa,"A",{href:!0,rel:!0});var pi=l(at);Xn=s(pi,"torch.nn.Module"),pi.forEach(o),In=s(Wa,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wa.forEach(o),Un=f(H),A=i(H,"DIV",{class:!0});var ze=l(A);y(nt.$$.fragment,ze),Yn=f(ze),te=i(ze,"P",{});var io=l(te);Hn=s(io,"The "),Rt=i(io,"A",{href:!0});var mi=l(Rt);Kn=s(mi,"WavLMModel"),mi.forEach(o),Rn=s(io," forward method, overrides the "),Mo=i(io,"CODE",{});var hi=l(Mo);Bn=s(hi,"__call__"),hi.forEach(o),Zn=s(io," special method."),io.forEach(o),Qn=f(ze),y(ye.$$.fragment,ze),Jn=f(ze),y(Me.$$.fragment,ze),ze.forEach(o),H.forEach(o),da=f(t),oe=i(t,"H2",{class:!0});var La=l(oe);$e=i(La,"A",{id:!0,class:!0,href:!0});var ui=l($e);$o=i(ui,"SPAN",{});var fi=l($o);y(st.$$.fragment,fi),fi.forEach(o),ui.forEach(o),Gn=f(La),ko=i(La,"SPAN",{});var gi=l(ko);es=s(gi,"WavLMForCTC"),gi.forEach(o),La.forEach(o),ca=f(t),E=i(t,"DIV",{class:!0});var K=l(E);y(rt.$$.fragment,K),ts=f(K),ae=i(K,"P",{});var lo=l(ae);os=s(lo,"WavLM Model with a "),Wo=i(lo,"CODE",{});var _i=l(Wo);as=s(_i,"language modeling"),_i.forEach(o),ns=s(lo,` head on top for Connectionist Temporal Classification (CTC).
WavLM was proposed in `),it=i(lo,"A",{href:!0,rel:!0});var vi=l(it);ss=s(vi,`WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),vi.forEach(o),rs=s(lo,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),lo.forEach(o),is=f(K),lt=i(K,"P",{});var Ta=l(lt);ls=s(Ta,"This model inherits from "),Bt=i(Ta,"A",{href:!0});var bi=l(Bt);ds=s(bi,"PreTrainedModel"),bi.forEach(o),cs=s(Ta,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ta.forEach(o),ps=f(K),dt=i(K,"P",{});var Ca=l(dt);ms=s(Ca,"This model is a PyTorch "),ct=i(Ca,"A",{href:!0,rel:!0});var wi=l(ct);hs=s(wi,"torch.nn.Module"),wi.forEach(o),us=s(Ca,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ca.forEach(o),fs=f(K),P=i(K,"DIV",{class:!0});var R=l(P);y(pt.$$.fragment,R),gs=f(R),ne=i(R,"P",{});var co=l(ne);_s=s(co,"The "),Zt=i(co,"A",{href:!0});var yi=l(Zt);vs=s(yi,"WavLMForCTC"),yi.forEach(o),bs=s(co," forward method, overrides the "),Lo=i(co,"CODE",{});var Mi=l(Lo);ws=s(Mi,"__call__"),Mi.forEach(o),ys=s(co," special method."),co.forEach(o),Ms=f(R),y(ke.$$.fragment,R),$s=f(R),y(We.$$.fragment,R),ks=f(R),y(Le.$$.fragment,R),R.forEach(o),K.forEach(o),pa=f(t),se=i(t,"H2",{class:!0});var ja=l(se);Te=i(ja,"A",{id:!0,class:!0,href:!0});var $i=l(Te);To=i($i,"SPAN",{});var ki=l(To);y(mt.$$.fragment,ki),ki.forEach(o),$i.forEach(o),Ws=f(ja),Co=i(ja,"SPAN",{});var Wi=l(Co);Ls=s(Wi,"WavLMForSequenceClassification"),Wi.forEach(o),ja.forEach(o),ma=f(t),C=i(t,"DIV",{class:!0});var V=l(C);y(ht.$$.fragment,V),Ts=f(V),jo=i(V,"P",{});var Li=l(jo);Cs=s(Li,`WavLM Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),Li.forEach(o),js=f(V),ut=i(V,"P",{});var Fa=l(ut);Fs=s(Fa,"WavLM was proposed in "),ft=i(Fa,"A",{href:!0,rel:!0});var Ti=l(ft);xs=s(Ti,`WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Ti.forEach(o),qs=s(Fa,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),Fa.forEach(o),Es=f(V),gt=i(V,"P",{});var xa=l(gt);Ps=s(xa,"This model inherits from "),Qt=i(xa,"A",{href:!0});var Ci=l(Qt);Ss=s(Ci,"PreTrainedModel"),Ci.forEach(o),As=s(xa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),xa.forEach(o),zs=f(V),_t=i(V,"P",{});var qa=l(_t);Ds=s(qa,"This model is a PyTorch "),vt=i(qa,"A",{href:!0,rel:!0});var ji=l(vt);Vs=s(ji,"torch.nn.Module"),ji.forEach(o),Os=s(qa,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),qa.forEach(o),Ns=f(V),S=i(V,"DIV",{class:!0});var B=l(S);y(bt.$$.fragment,B),Xs=f(B),re=i(B,"P",{});var po=l(re);Is=s(po,"The "),Jt=i(po,"A",{href:!0});var Fi=l(Jt);Us=s(Fi,"WavLMForSequenceClassification"),Fi.forEach(o),Ys=s(po," forward method, overrides the "),Fo=i(po,"CODE",{});var xi=l(Fo);Hs=s(xi,"__call__"),xi.forEach(o),Ks=s(po," special method."),po.forEach(o),Rs=f(B),y(Ce.$$.fragment,B),Bs=f(B),y(je.$$.fragment,B),Zs=f(B),y(Fe.$$.fragment,B),B.forEach(o),V.forEach(o),ha=f(t),ie=i(t,"H2",{class:!0});var Ea=l(ie);xe=i(Ea,"A",{id:!0,class:!0,href:!0});var qi=l(xe);xo=i(qi,"SPAN",{});var Ei=l(xo);y(wt.$$.fragment,Ei),Ei.forEach(o),qi.forEach(o),Qs=f(Ea),qo=i(Ea,"SPAN",{});var Pi=l(qo);Js=s(Pi,"WavLMForAudioFrameClassification"),Pi.forEach(o),Ea.forEach(o),ua=f(t),j=i(t,"DIV",{class:!0});var O=l(j);y(yt.$$.fragment,O),Gs=f(O),Eo=i(O,"P",{});var Si=l(Eo);er=s(Si,"WavLM Model with a frame classification head on top for tasks like Speaker Diarization."),Si.forEach(o),tr=f(O),Mt=i(O,"P",{});var Pa=l(Mt);or=s(Pa,"WavLM was proposed in "),$t=i(Pa,"A",{href:!0,rel:!0});var Ai=l($t);ar=s(Ai,`WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Ai.forEach(o),nr=s(Pa,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),Pa.forEach(o),sr=f(O),kt=i(O,"P",{});var Sa=l(kt);rr=s(Sa,"This model inherits from "),Gt=i(Sa,"A",{href:!0});var zi=l(Gt);ir=s(zi,"PreTrainedModel"),zi.forEach(o),lr=s(Sa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Sa.forEach(o),dr=f(O),Wt=i(O,"P",{});var Aa=l(Wt);cr=s(Aa,"This model is a PyTorch "),Lt=i(Aa,"A",{href:!0,rel:!0});var Di=l(Lt);pr=s(Di,"torch.nn.Module"),Di.forEach(o),mr=s(Aa,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Aa.forEach(o),hr=f(O),z=i(O,"DIV",{class:!0});var De=l(z);y(Tt.$$.fragment,De),ur=f(De),le=i(De,"P",{});var mo=l(le);fr=s(mo,"The "),eo=i(mo,"A",{href:!0});var Vi=l(eo);gr=s(Vi,"WavLMForAudioFrameClassification"),Vi.forEach(o),_r=s(mo," forward method, overrides the "),Po=i(mo,"CODE",{});var Oi=l(Po);vr=s(Oi,"__call__"),Oi.forEach(o),br=s(mo," special method."),mo.forEach(o),wr=f(De),y(qe.$$.fragment,De),yr=f(De),y(Ee.$$.fragment,De),De.forEach(o),O.forEach(o),fa=f(t),de=i(t,"H2",{class:!0});var za=l(de);Pe=i(za,"A",{id:!0,class:!0,href:!0});var Ni=l(Pe);So=i(Ni,"SPAN",{});var Xi=l(So);y(Ct.$$.fragment,Xi),Xi.forEach(o),Ni.forEach(o),Mr=f(za),Ao=i(za,"SPAN",{});var Ii=l(Ao);$r=s(Ii,"WavLMForXVector"),Ii.forEach(o),za.forEach(o),ga=f(t),F=i(t,"DIV",{class:!0});var N=l(F);y(jt.$$.fragment,N),kr=f(N),zo=i(N,"P",{});var Ui=l(zo);Wr=s(Ui,"WavLM Model with an XVector feature extraction head on top for tasks like Speaker Verification."),Ui.forEach(o),Lr=f(N),Ft=i(N,"P",{});var Da=l(Ft);Tr=s(Da,"WavLM was proposed in "),xt=i(Da,"A",{href:!0,rel:!0});var Yi=l(xt);Cr=s(Yi,`WavLM: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Yi.forEach(o),jr=s(Da,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),Da.forEach(o),Fr=f(N),qt=i(N,"P",{});var Va=l(qt);xr=s(Va,"This model inherits from "),to=i(Va,"A",{href:!0});var Hi=l(to);qr=s(Hi,"PreTrainedModel"),Hi.forEach(o),Er=s(Va,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Va.forEach(o),Pr=f(N),Et=i(N,"P",{});var Oa=l(Et);Sr=s(Oa,"This model is a PyTorch "),Pt=i(Oa,"A",{href:!0,rel:!0});var Ki=l(Pt);Ar=s(Ki,"torch.nn.Module"),Ki.forEach(o),zr=s(Oa,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Oa.forEach(o),Dr=f(N),D=i(N,"DIV",{class:!0});var Ve=l(D);y(St.$$.fragment,Ve),Vr=f(Ve),ce=i(Ve,"P",{});var ho=l(ce);Or=s(ho,"The "),oo=i(ho,"A",{href:!0});var Ri=l(oo);Nr=s(Ri,"WavLMForXVector"),Ri.forEach(o),Xr=s(ho," forward method, overrides the "),Do=i(ho,"CODE",{});var Bi=l(Do);Ir=s(Bi,"__call__"),Bi.forEach(o),Ur=s(ho," special method."),ho.forEach(o),Yr=f(Ve),y(Se.$$.fragment,Ve),Hr=f(Ve),y(Ae.$$.fragment,Ve),Ve.forEach(o),N.forEach(o),this.h()},h(){p(d,"name","hf:doc:metadata"),p(d,"content",JSON.stringify(gl)),p(m,"id","wavlm"),p(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(m,"href","#wavlm"),p(c,"class","relative group"),p(ue,"id","overview"),p(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ue,"href","#overview"),p(Z,"class","relative group"),p(Xe,"href","https://arxiv.org/abs/2110.13900"),p(Xe,"rel","nofollow"),p(Xt,"href","/docs/transformers/v4.21.2/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor"),p(It,"href","/docs/transformers/v4.21.2/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),p(Ye,"href","https://huggingface.co/models?other=wavlm"),p(Ye,"rel","nofollow"),p(He,"href","https://huggingface.co/patrickvonplaten"),p(He,"rel","nofollow"),p(Ke,"href","https://github.com/microsoft/unilm/tree/master/wavlm"),p(Ke,"rel","nofollow"),p(_e,"id","transformers.WavLMConfig"),p(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(_e,"href","#transformers.WavLMConfig"),p(Q,"class","relative group"),p(Ut,"href","/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMModel"),p(Ze,"href","https://huggingface.co/microsoft/wavlm-base"),p(Ze,"rel","nofollow"),p(Yt,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),p(Ht,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),p(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(we,"id","transformers.WavLMModel"),p(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(we,"href","#transformers.WavLMModel"),p(ee,"class","relative group"),p(et,"href","https://arxiv.org/abs/2101.07597"),p(et,"rel","nofollow"),p(Kt,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),p(at,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(at,"rel","nofollow"),p(Rt,"href","/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMModel"),p(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p($e,"id","transformers.WavLMForCTC"),p($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p($e,"href","#transformers.WavLMForCTC"),p(oe,"class","relative group"),p(it,"href","https://arxiv.org/abs/2101.07597"),p(it,"rel","nofollow"),p(Bt,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),p(ct,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(ct,"rel","nofollow"),p(Zt,"href","/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMForCTC"),p(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Te,"id","transformers.WavLMForSequenceClassification"),p(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Te,"href","#transformers.WavLMForSequenceClassification"),p(se,"class","relative group"),p(ft,"href","https://arxiv.org/abs/2101.07597"),p(ft,"rel","nofollow"),p(Qt,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),p(vt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(vt,"rel","nofollow"),p(Jt,"href","/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMForSequenceClassification"),p(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(xe,"id","transformers.WavLMForAudioFrameClassification"),p(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(xe,"href","#transformers.WavLMForAudioFrameClassification"),p(ie,"class","relative group"),p($t,"href","https://arxiv.org/abs/2101.07597"),p($t,"rel","nofollow"),p(Gt,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),p(Lt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Lt,"rel","nofollow"),p(eo,"href","/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMForAudioFrameClassification"),p(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Pe,"id","transformers.WavLMForXVector"),p(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Pe,"href","#transformers.WavLMForXVector"),p(de,"class","relative group"),p(xt,"href","https://arxiv.org/abs/2101.07597"),p(xt,"rel","nofollow"),p(to,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),p(Pt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Pt,"rel","nofollow"),p(oo,"href","/docs/transformers/v4.21.2/en/model_doc/wavlm#transformers.WavLMForXVector"),p(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),v(t,_,g),v(t,c,g),e(c,m),e(m,b),M(a,b,null),e(c,h),e(c,T),e(T,Na),v(t,Qo,g),v(t,Z,g),e(Z,ue),e(ue,uo),M(Ne,uo,null),e(Z,Xa),e(Z,fo),e(fo,Ia),v(t,Jo,g),v(t,fe,g),e(fe,Ua),e(fe,Xe),e(Xe,Ya),e(fe,Ha),v(t,Go,g),v(t,Vt,g),e(Vt,Ka),v(t,ea,g),v(t,Ot,g),e(Ot,go),e(go,Ra),v(t,ta,g),v(t,Nt,g),e(Nt,Ba),v(t,oa,g),v(t,I,g),e(I,Ie),e(Ie,Za),e(Ie,Xt),e(Xt,Qa),e(Ie,Ja),e(I,Ga),e(I,Ue),e(Ue,en),e(Ue,It),e(It,tn),e(Ue,on),e(I,an),e(I,_o),e(_o,nn),v(t,aa,g),v(t,ge,g),e(ge,sn),e(ge,Ye),e(Ye,rn),e(ge,ln),v(t,na,g),v(t,U,g),e(U,dn),e(U,He),e(He,cn),e(U,pn),e(U,Ke),e(Ke,mn),e(U,hn),v(t,sa,g),v(t,Q,g),e(Q,_e),e(_e,vo),M(Re,vo,null),e(Q,un),e(Q,bo),e(bo,fn),v(t,ra,g),v(t,x,g),M(Be,x,null),e(x,gn),e(x,J),e(J,_n),e(J,Ut),e(Ut,vn),e(J,bn),e(J,Ze),e(Ze,wn),e(J,yn),e(x,Mn),e(x,G),e(G,$n),e(G,Yt),e(Yt,kn),e(G,Wn),e(G,Ht),e(Ht,Ln),e(G,Tn),e(x,Cn),M(ve,x,null),e(x,jn),M(be,x,null),v(t,ia,g),v(t,ee,g),e(ee,we),e(we,wo),M(Qe,wo,null),e(ee,Fn),e(ee,yo),e(yo,xn),v(t,la,g),v(t,q,g),M(Je,q,null),e(q,qn),e(q,Ge),e(Ge,En),e(Ge,et),e(et,Pn),e(Ge,Sn),e(q,An),e(q,tt),e(tt,zn),e(tt,Kt),e(Kt,Dn),e(tt,Vn),e(q,On),e(q,ot),e(ot,Nn),e(ot,at),e(at,Xn),e(ot,In),e(q,Un),e(q,A),M(nt,A,null),e(A,Yn),e(A,te),e(te,Hn),e(te,Rt),e(Rt,Kn),e(te,Rn),e(te,Mo),e(Mo,Bn),e(te,Zn),e(A,Qn),M(ye,A,null),e(A,Jn),M(Me,A,null),v(t,da,g),v(t,oe,g),e(oe,$e),e($e,$o),M(st,$o,null),e(oe,Gn),e(oe,ko),e(ko,es),v(t,ca,g),v(t,E,g),M(rt,E,null),e(E,ts),e(E,ae),e(ae,os),e(ae,Wo),e(Wo,as),e(ae,ns),e(ae,it),e(it,ss),e(ae,rs),e(E,is),e(E,lt),e(lt,ls),e(lt,Bt),e(Bt,ds),e(lt,cs),e(E,ps),e(E,dt),e(dt,ms),e(dt,ct),e(ct,hs),e(dt,us),e(E,fs),e(E,P),M(pt,P,null),e(P,gs),e(P,ne),e(ne,_s),e(ne,Zt),e(Zt,vs),e(ne,bs),e(ne,Lo),e(Lo,ws),e(ne,ys),e(P,Ms),M(ke,P,null),e(P,$s),M(We,P,null),e(P,ks),M(Le,P,null),v(t,pa,g),v(t,se,g),e(se,Te),e(Te,To),M(mt,To,null),e(se,Ws),e(se,Co),e(Co,Ls),v(t,ma,g),v(t,C,g),M(ht,C,null),e(C,Ts),e(C,jo),e(jo,Cs),e(C,js),e(C,ut),e(ut,Fs),e(ut,ft),e(ft,xs),e(ut,qs),e(C,Es),e(C,gt),e(gt,Ps),e(gt,Qt),e(Qt,Ss),e(gt,As),e(C,zs),e(C,_t),e(_t,Ds),e(_t,vt),e(vt,Vs),e(_t,Os),e(C,Ns),e(C,S),M(bt,S,null),e(S,Xs),e(S,re),e(re,Is),e(re,Jt),e(Jt,Us),e(re,Ys),e(re,Fo),e(Fo,Hs),e(re,Ks),e(S,Rs),M(Ce,S,null),e(S,Bs),M(je,S,null),e(S,Zs),M(Fe,S,null),v(t,ha,g),v(t,ie,g),e(ie,xe),e(xe,xo),M(wt,xo,null),e(ie,Qs),e(ie,qo),e(qo,Js),v(t,ua,g),v(t,j,g),M(yt,j,null),e(j,Gs),e(j,Eo),e(Eo,er),e(j,tr),e(j,Mt),e(Mt,or),e(Mt,$t),e($t,ar),e(Mt,nr),e(j,sr),e(j,kt),e(kt,rr),e(kt,Gt),e(Gt,ir),e(kt,lr),e(j,dr),e(j,Wt),e(Wt,cr),e(Wt,Lt),e(Lt,pr),e(Wt,mr),e(j,hr),e(j,z),M(Tt,z,null),e(z,ur),e(z,le),e(le,fr),e(le,eo),e(eo,gr),e(le,_r),e(le,Po),e(Po,vr),e(le,br),e(z,wr),M(qe,z,null),e(z,yr),M(Ee,z,null),v(t,fa,g),v(t,de,g),e(de,Pe),e(Pe,So),M(Ct,So,null),e(de,Mr),e(de,Ao),e(Ao,$r),v(t,ga,g),v(t,F,g),M(jt,F,null),e(F,kr),e(F,zo),e(zo,Wr),e(F,Lr),e(F,Ft),e(Ft,Tr),e(Ft,xt),e(xt,Cr),e(Ft,jr),e(F,Fr),e(F,qt),e(qt,xr),e(qt,to),e(to,qr),e(qt,Er),e(F,Pr),e(F,Et),e(Et,Sr),e(Et,Pt),e(Pt,Ar),e(Et,zr),e(F,Dr),e(F,D),M(St,D,null),e(D,Vr),e(D,ce),e(ce,Or),e(ce,oo),e(oo,Nr),e(ce,Xr),e(ce,Do),e(Do,Ir),e(ce,Ur),e(D,Yr),M(Se,D,null),e(D,Hr),M(Ae,D,null),_a=!0},p(t,[g]){const At={};g&2&&(At.$$scope={dirty:g,ctx:t}),ve.$set(At);const Vo={};g&2&&(Vo.$$scope={dirty:g,ctx:t}),be.$set(Vo);const Oo={};g&2&&(Oo.$$scope={dirty:g,ctx:t}),ye.$set(Oo);const No={};g&2&&(No.$$scope={dirty:g,ctx:t}),Me.$set(No);const zt={};g&2&&(zt.$$scope={dirty:g,ctx:t}),ke.$set(zt);const Xo={};g&2&&(Xo.$$scope={dirty:g,ctx:t}),We.$set(Xo);const Io={};g&2&&(Io.$$scope={dirty:g,ctx:t}),Le.$set(Io);const Uo={};g&2&&(Uo.$$scope={dirty:g,ctx:t}),Ce.$set(Uo);const Dt={};g&2&&(Dt.$$scope={dirty:g,ctx:t}),je.$set(Dt);const Yo={};g&2&&(Yo.$$scope={dirty:g,ctx:t}),Fe.$set(Yo);const Ho={};g&2&&(Ho.$$scope={dirty:g,ctx:t}),qe.$set(Ho);const Ko={};g&2&&(Ko.$$scope={dirty:g,ctx:t}),Ee.$set(Ko);const Ro={};g&2&&(Ro.$$scope={dirty:g,ctx:t}),Se.$set(Ro);const Bo={};g&2&&(Bo.$$scope={dirty:g,ctx:t}),Ae.$set(Bo)},i(t){_a||($(a.$$.fragment,t),$(Ne.$$.fragment,t),$(Re.$$.fragment,t),$(Be.$$.fragment,t),$(ve.$$.fragment,t),$(be.$$.fragment,t),$(Qe.$$.fragment,t),$(Je.$$.fragment,t),$(nt.$$.fragment,t),$(ye.$$.fragment,t),$(Me.$$.fragment,t),$(st.$$.fragment,t),$(rt.$$.fragment,t),$(pt.$$.fragment,t),$(ke.$$.fragment,t),$(We.$$.fragment,t),$(Le.$$.fragment,t),$(mt.$$.fragment,t),$(ht.$$.fragment,t),$(bt.$$.fragment,t),$(Ce.$$.fragment,t),$(je.$$.fragment,t),$(Fe.$$.fragment,t),$(wt.$$.fragment,t),$(yt.$$.fragment,t),$(Tt.$$.fragment,t),$(qe.$$.fragment,t),$(Ee.$$.fragment,t),$(Ct.$$.fragment,t),$(jt.$$.fragment,t),$(St.$$.fragment,t),$(Se.$$.fragment,t),$(Ae.$$.fragment,t),_a=!0)},o(t){k(a.$$.fragment,t),k(Ne.$$.fragment,t),k(Re.$$.fragment,t),k(Be.$$.fragment,t),k(ve.$$.fragment,t),k(be.$$.fragment,t),k(Qe.$$.fragment,t),k(Je.$$.fragment,t),k(nt.$$.fragment,t),k(ye.$$.fragment,t),k(Me.$$.fragment,t),k(st.$$.fragment,t),k(rt.$$.fragment,t),k(pt.$$.fragment,t),k(ke.$$.fragment,t),k(We.$$.fragment,t),k(Le.$$.fragment,t),k(mt.$$.fragment,t),k(ht.$$.fragment,t),k(bt.$$.fragment,t),k(Ce.$$.fragment,t),k(je.$$.fragment,t),k(Fe.$$.fragment,t),k(wt.$$.fragment,t),k(yt.$$.fragment,t),k(Tt.$$.fragment,t),k(qe.$$.fragment,t),k(Ee.$$.fragment,t),k(Ct.$$.fragment,t),k(jt.$$.fragment,t),k(St.$$.fragment,t),k(Se.$$.fragment,t),k(Ae.$$.fragment,t),_a=!1},d(t){o(d),t&&o(_),t&&o(c),W(a),t&&o(Qo),t&&o(Z),W(Ne),t&&o(Jo),t&&o(fe),t&&o(Go),t&&o(Vt),t&&o(ea),t&&o(Ot),t&&o(ta),t&&o(Nt),t&&o(oa),t&&o(I),t&&o(aa),t&&o(ge),t&&o(na),t&&o(U),t&&o(sa),t&&o(Q),W(Re),t&&o(ra),t&&o(x),W(Be),W(ve),W(be),t&&o(ia),t&&o(ee),W(Qe),t&&o(la),t&&o(q),W(Je),W(nt),W(ye),W(Me),t&&o(da),t&&o(oe),W(st),t&&o(ca),t&&o(E),W(rt),W(pt),W(ke),W(We),W(Le),t&&o(pa),t&&o(se),W(mt),t&&o(ma),t&&o(C),W(ht),W(bt),W(Ce),W(je),W(Fe),t&&o(ha),t&&o(ie),W(wt),t&&o(ua),t&&o(j),W(yt),W(Tt),W(qe),W(Ee),t&&o(fa),t&&o(de),W(Ct),t&&o(ga),t&&o(F),W(jt),W(St),W(Se),W(Ae)}}}const gl={local:"wavlm",sections:[{local:"overview",title:"Overview"},{local:"transformers.WavLMConfig",title:"WavLMConfig"},{local:"transformers.WavLMModel",title:"WavLMModel"},{local:"transformers.WavLMForCTC",title:"WavLMForCTC"},{local:"transformers.WavLMForSequenceClassification",title:"WavLMForSequenceClassification"},{local:"transformers.WavLMForAudioFrameClassification",title:"WavLMForAudioFrameClassification"},{local:"transformers.WavLMForXVector",title:"WavLMForXVector"}],title:"WavLM"};function _l(L){return el(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class kl extends Zi{constructor(d){super();Qi(this,d,_l,fl,Ji,{})}}export{kl as default,gl as metadata};
