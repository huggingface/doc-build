import{S as J_,i as K_,s as Y_,e as r,k as m,w as k,t as n,M as Z_,c as i,d as o,m as f,a as l,x as T,h as s,b as u,F as e,g as b,y as w,q as $,o as x,B as y,v as e2,L as C}from"../../chunks/vendor-6b77c823.js";import{T as ge}from"../../chunks/Tip-39098574.js";import{D as A}from"../../chunks/Docstring-1088f2fb.js";import{C as M}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as B}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as F}from"../../chunks/ExampleCodeBlock-5212b321.js";function t2(D){let d,g,c,h,v;return h=new M({props:{code:`from transformers import Data2VecTextModel, Data2VecTextConfig

# Initializing a Data2VecText facebook/data2vec-text-base style configuration
configuration = Data2VecTextConfig()

# Initializing a model from the facebook/data2vec-text-base style configuration
model = Data2VecTextModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Data2VecTextModel, Data2VecTextConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Data2VecText facebook/data2vec-text-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Data2VecTextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/data2vec-text-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=n("Examples:"),c=m(),k(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Examples:"),p.forEach(o),c=f(a),T(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),w(h,a,p),v=!0},p:C,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){x(h.$$.fragment,a),v=!1},d(a){a&&o(d),a&&o(c),y(h,a)}}}function o2(D){let d,g,c,h,v;return h=new M({props:{code:`from transformers import Data2VecAudioModel, Data2VecAudioConfig

# Initializing a Data2VecAudio facebook/data2vec-audio-base-960h style configuration
configuration = Data2VecAudioConfig()

# Initializing a model from the facebook/data2vec-audio-base-960h style configuration
model = Data2VecAudioModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Data2VecAudioModel, Data2VecAudioConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Data2VecAudio facebook/data2vec-audio-base-960h style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Data2VecAudioConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/data2vec-audio-base-960h style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecAudioModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=n("Example:"),c=m(),k(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(o),c=f(a),T(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),w(h,a,p),v=!0},p:C,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){x(h.$$.fragment,a),v=!1},d(a){a&&o(d),a&&o(c),y(h,a)}}}function a2(D){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var V=l(c);h=s(V,"Module"),V.forEach(o),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&o(d)}}}function n2(D){let d,g,c,h,v;return h=new M({props:{code:`from transformers import Wav2Vec2Processor, Data2VecAudioModel
import torch
from datasets import load_dataset

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("facebook/data2vec-audio-base-960h")
model = Data2VecAudioModel.from_pretrained("facebook/data2vec-audio-base-960h")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, Data2VecAudioModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-audio-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecAudioModel.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-audio-base-960h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">768</span>]`}}),{c(){d=r("p"),g=n("Example:"),c=m(),k(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(o),c=f(a),T(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),w(h,a,p),v=!0},p:C,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){x(h.$$.fragment,a),v=!1},d(a){a&&o(d),a&&o(c),y(h,a)}}}function s2(D){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var V=l(c);h=s(V,"Module"),V.forEach(o),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&o(d)}}}function r2(D){let d,g,c,h,v;return h=new M({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Data2VecAudioForAudioFrameClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("hf-internal-testing/tiny-random-data2vec-audio-frame")
model = Data2VecAudioForAudioFrameClassification.from_pretrained("hf-internal-testing/tiny-random-data2vec-audio-frame")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], return_tensors="pt", sampling_rate=sampling_rate)
with torch.no_grad():
    logits = model(**inputs).logits

probabilities = torch.sigmoid(logits[0])
# labels is a one-hot array of shape (num_frames, num_speakers)
labels = (probabilities > 0.5).long()
labels[0].tolist()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, Data2VecAudioForAudioFrameClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-data2vec-audio-frame&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecAudioForAudioFrameClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-data2vec-audio-frame&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, sampling_rate=sampling_rate)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>probabilities = torch.sigmoid(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># labels is a one-hot array of shape (num_frames, num_speakers)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = (probabilities &gt; <span class="hljs-number">0.5</span>).long()
<span class="hljs-meta">&gt;&gt;&gt; </span>labels[<span class="hljs-number">0</span>].tolist()
[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]`}}),{c(){d=r("p"),g=n("Example:"),c=m(),k(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(o),c=f(a),T(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),w(h,a,p),v=!0},p:C,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){x(h.$$.fragment,a),v=!1},d(a){a&&o(d),a&&o(c),y(h,a)}}}function i2(D){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var V=l(c);h=s(V,"Module"),V.forEach(o),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&o(d)}}}function l2(D){let d,g,c,h,v;return h=new M({props:{code:`from transformers import Wav2Vec2Processor, Data2VecAudioForCTC
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("facebook/data2vec-audio-base-960h")
model = Data2VecAudioForCTC.from_pretrained("facebook/data2vec-audio-base-960h")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)
transcription[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, Data2VecAudioForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-audio-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecAudioForCTC.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-audio-base-960h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>`}}),{c(){d=r("p"),g=n("Example:"),c=m(),k(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(o),c=f(a),T(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),w(h,a,p),v=!0},p:C,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){x(h.$$.fragment,a),v=!1},d(a){a&&o(d),a&&o(c),y(h,a)}}}function d2(D){let d,g;return d=new M({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">66.95</span>`}}),{c(){k(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,h){w(d,c,h),g=!0},p:C,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){x(d.$$.fragment,c),g=!1},d(c){y(d,c)}}}function c2(D){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var V=l(c);h=s(V,"Module"),V.forEach(o),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&o(d)}}}function p2(D){let d,g,c,h,v;return h=new M({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Data2VecAudioForSequenceClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("hf-internal-testing/tiny-random-data2vec-seq-class")
model = Data2VecAudioForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-data2vec-seq-class")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_ids = torch.argmax(logits, dim=-1).item()
predicted_label = model.config.id2label[predicted_class_ids]
predicted_label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, Data2VecAudioForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-data2vec-seq-class&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecAudioForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-data2vec-seq-class&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),g=n("Example:"),c=m(),k(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(o),c=f(a),T(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),w(h,a,p),v=!0},p:C,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){x(h.$$.fragment,a),v=!1},d(a){a&&o(d),a&&o(c),y(h,a)}}}function h2(D){let d,g;return d=new M({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){k(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,h){w(d,c,h),g=!0},p:C,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){x(d.$$.fragment,c),g=!1},d(c){y(d,c)}}}function u2(D){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var V=l(c);h=s(V,"Module"),V.forEach(o),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&o(d)}}}function m2(D){let d,g,c,h,v;return h=new M({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Data2VecAudioForXVector
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("hf-internal-testing/tiny-random-data2vec-xvector")
model = Data2VecAudioForXVector.from_pretrained("hf-internal-testing/tiny-random-data2vec-xvector")

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
round(similarity.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, Data2VecAudioForXVector
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-data2vec-xvector&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecAudioForXVector.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-data2vec-xvector&quot;</span>)

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
<span class="hljs-number">1.0</span>`}}),{c(){d=r("p"),g=n("Example:"),c=m(),k(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(o),c=f(a),T(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),w(h,a,p),v=!0},p:C,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){x(h.$$.fragment,a),v=!1},d(a){a&&o(d),a&&o(c),y(h,a)}}}function f2(D){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var V=l(c);h=s(V,"Module"),V.forEach(o),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&o(d)}}}function g2(D){let d,g,c,h,v;return h=new M({props:{code:`from transformers import RobertaTokenizer, Data2VecTextModel
import torch

tokenizer = RobertaTokenizer.from_pretrained("facebook/data2vec-text-base")
model = Data2VecTextModel.from_pretrained("facebook/data2vec-text-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, Data2VecTextModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextModel.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=m(),k(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(o),c=f(a),T(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),w(h,a,p),v=!0},p:C,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){x(h.$$.fragment,a),v=!1},d(a){a&&o(d),a&&o(c),y(h,a)}}}function _2(D){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var V=l(c);h=s(V,"Module"),V.forEach(o),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&o(d)}}}function v2(D){let d,g,c,h,v;return h=new M({props:{code:`from transformers import Data2VecTextTokenizer, Data2VecTextForCausalLM, Data2VecTextConfig
import torch

tokenizer = Data2VecTextTokenizer.from_pretrained("facebook/data2vec-text-base")
config = Data2VecTextConfig.from_pretrained("data2vec-base")
config.is_decoder = True
model = Data2VecTextForCausalLM.from_pretrained("data2vec-base", config=config)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Data2VecTextTokenizer, Data2VecTextForCausalLM, Data2VecTextConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = Data2VecTextTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = Data2VecTextConfig.from_pretrained(<span class="hljs-string">&quot;data2vec-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextForCausalLM.from_pretrained(<span class="hljs-string">&quot;data2vec-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=m(),k(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(o),c=f(a),T(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),w(h,a,p),v=!0},p:C,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){x(h.$$.fragment,a),v=!1},d(a){a&&o(d),a&&o(c),y(h,a)}}}function b2(D){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var V=l(c);h=s(V,"Module"),V.forEach(o),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&o(d)}}}function k2(D){let d,g,c,h,v;return h=new M({props:{code:`from transformers import RobertaTokenizer, Data2VecTextForMaskedLM
import torch

tokenizer = RobertaTokenizer.from_pretrained("facebook/data2vec-text-base")
model = Data2VecTextForMaskedLM.from_pretrained("facebook/data2vec-text-base")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, Data2VecTextForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextForMaskedLM.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),k(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(o),c=f(a),T(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),w(h,a,p),v=!0},p:C,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){x(h.$$.fragment,a),v=!1},d(a){a&&o(d),a&&o(c),y(h,a)}}}function T2(D){let d,g;return d=new M({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,h){w(d,c,h),g=!0},p:C,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){x(d.$$.fragment,c),g=!1},d(c){y(d,c)}}}function w2(D){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var V=l(c);h=s(V,"Module"),V.forEach(o),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&o(d)}}}function $2(D){let d,g,c,h,v;return h=new M({props:{code:`import torch
from transformers import RobertaTokenizer, Data2VecTextForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("facebook/data2vec-text-base")
model = Data2VecTextForSequenceClassification.from_pretrained("facebook/data2vec-text-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, Data2VecTextForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=n("Example of single-label classification:"),c=m(),k(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example of single-label classification:"),p.forEach(o),c=f(a),T(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),w(h,a,p),v=!0},p:C,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){x(h.$$.fragment,a),v=!1},d(a){a&&o(d),a&&o(c),y(h,a)}}}function x2(D){let d,g;return d=new M({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = Data2VecTextForSequenceClassification.from_pretrained("facebook/data2vec-text-base", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,h){w(d,c,h),g=!0},p:C,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){x(d.$$.fragment,c),g=!1},d(c){y(d,c)}}}function y2(D){let d,g,c,h,v;return h=new M({props:{code:`import torch
from transformers import RobertaTokenizer, Data2VecTextForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("facebook/data2vec-text-base")
model = Data2VecTextForSequenceClassification.from_pretrained("facebook/data2vec-text-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, Data2VecTextForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=n("Example of multi-label classification:"),c=m(),k(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example of multi-label classification:"),p.forEach(o),c=f(a),T(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),w(h,a,p),v=!0},p:C,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){x(h.$$.fragment,a),v=!1},d(a){a&&o(d),a&&o(c),y(h,a)}}}function D2(D){let d,g;return d=new M({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = Data2VecTextForSequenceClassification.from_pretrained("facebook/data2vec-text-base", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,h){w(d,c,h),g=!0},p:C,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){x(d.$$.fragment,c),g=!1},d(c){y(d,c)}}}function V2(D){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var V=l(c);h=s(V,"Module"),V.forEach(o),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&o(d)}}}function A2(D){let d,g,c,h,v;return h=new M({props:{code:`from transformers import RobertaTokenizer, Data2VecTextForMultipleChoice
import torch

tokenizer = RobertaTokenizer.from_pretrained("facebook/data2vec-text-base")
model = Data2VecTextForMultipleChoice.from_pretrained("facebook/data2vec-text-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, Data2VecTextForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=m(),k(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(o),c=f(a),T(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),w(h,a,p),v=!0},p:C,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){x(h.$$.fragment,a),v=!1},d(a){a&&o(d),a&&o(c),y(h,a)}}}function F2(D){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var V=l(c);h=s(V,"Module"),V.forEach(o),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&o(d)}}}function C2(D){let d,g,c,h,v;return h=new M({props:{code:`from transformers import RobertaTokenizer, Data2VecTextForTokenClassification
import torch

tokenizer = RobertaTokenizer.from_pretrained("facebook/data2vec-text-base")
model = Data2VecTextForTokenClassification.from_pretrained("facebook/data2vec-text-base")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="pt"
)

with torch.no_grad():
    logits = model(**inputs).logits

predicted_token_class_ids = logits.argmax(-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t.item()] for t in predicted_token_class_ids[0]]
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, Data2VecTextForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextForTokenClassification.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = logits.argmax(-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t.item()] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),k(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(o),c=f(a),T(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),w(h,a,p),v=!0},p:C,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){x(h.$$.fragment,a),v=!1},d(a){a&&o(d),a&&o(c),y(h,a)}}}function M2(D){let d,g;return d=new M({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,h){w(d,c,h),g=!0},p:C,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){x(d.$$.fragment,c),g=!1},d(c){y(d,c)}}}function j2(D){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var V=l(c);h=s(V,"Module"),V.forEach(o),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&o(d)}}}function q2(D){let d,g,c,h,v;return h=new M({props:{code:`from transformers import RobertaTokenizer, Data2VecTextForQuestionAnswering
import torch

tokenizer = RobertaTokenizer.from_pretrained("facebook/data2vec-text-base")
model = Data2VecTextForQuestionAnswering.from_pretrained("facebook/data2vec-text-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, Data2VecTextForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),k(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(o),c=f(a),T(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),w(h,a,p),v=!0},p:C,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){x(h.$$.fragment,a),v=!1},d(a){a&&o(d),a&&o(c),y(h,a)}}}function z2(D){let d,g;return d=new M({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,h){w(d,c,h),g=!0},p:C,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){x(d.$$.fragment,c),g=!1},d(c){y(d,c)}}}function E2(D){let d,g,c,h,v,a,p,V,Cl,oi,Ce,ht,ys,_o,Ml,Ds,jl,ai,ut,ql,vo,zl,El,ni,yn,Pl,si,Dn,bo,Sl,ko,Ll,Nl,ri,Vn,Ol,ii,An,To,Wl,Fn,Il,Bl,li,ke,Hl,wo,Rl,Ql,$o,Gl,Xl,di,Me,mt,Vs,xo,Ul,As,Jl,ci,te,yo,Kl,_e,Yl,Cn,Zl,ed,Mn,td,od,Do,ad,nd,sd,je,rd,jn,id,ld,qn,dd,cd,pd,ft,pi,qe,gt,Fs,Vo,hd,Cs,ud,hi,oe,Ao,md,ze,fd,zn,gd,_d,Fo,vd,bd,kd,Ee,Td,En,wd,$d,Pn,xd,yd,Dd,_t,ui,Pe,vt,Ms,Co,Vd,js,Ad,mi,H,Mo,Fd,jo,Cd,qo,Md,jd,qd,zo,zd,Sn,Ed,Pd,Sd,Eo,Ld,Po,Nd,Od,Wd,ae,So,Id,Se,Bd,Ln,Hd,Rd,qs,Qd,Gd,Xd,bt,Ud,kt,fi,Le,Tt,zs,Lo,Jd,Es,Kd,gi,z,No,Yd,Ps,Zd,ec,Oo,tc,Wo,oc,ac,nc,Io,sc,Nn,rc,ic,lc,Bo,dc,Ho,cc,pc,hc,ne,Ro,uc,Ne,mc,On,fc,gc,Ss,_c,vc,bc,wt,kc,$t,_i,Oe,xt,Ls,Qo,Tc,Ns,wc,vi,R,Go,$c,We,xc,Os,yc,Dc,Xo,Vc,Ac,Fc,Uo,Cc,Wn,Mc,jc,qc,Jo,zc,Ko,Ec,Pc,Sc,X,Yo,Lc,Ie,Nc,In,Oc,Wc,Ws,Ic,Bc,Hc,yt,Rc,Dt,Qc,Vt,bi,Be,At,Is,Zo,Gc,Bs,Xc,ki,E,ea,Uc,Hs,Jc,Kc,ta,Yc,oa,Zc,ep,tp,aa,op,Bn,ap,np,sp,na,rp,sa,ip,lp,dp,U,ra,cp,He,pp,Hn,hp,up,Rs,mp,fp,gp,Ft,_p,Ct,vp,Mt,Ti,Re,jt,Qs,ia,bp,Gs,kp,wi,P,la,Tp,Xs,wp,$p,da,xp,ca,yp,Dp,Vp,pa,Ap,Rn,Fp,Cp,Mp,ha,jp,ua,qp,zp,Ep,se,ma,Pp,Qe,Sp,Qn,Lp,Np,Us,Op,Wp,Ip,qt,Bp,zt,$i,Ge,Et,Js,fa,Hp,Ks,Rp,xi,j,ga,Qp,_a,Gp,va,Xp,Up,Jp,ba,Kp,Gn,Yp,Zp,eh,ka,th,Ta,oh,ah,nh,wa,sh,Ys,rh,ih,lh,S,dh,Zs,ch,ph,er,hh,uh,tr,mh,fh,or,gh,_h,ar,vh,bh,nr,kh,Th,wh,Pt,$h,sr,xh,yh,$a,Dh,Vh,re,xa,Ah,Xe,Fh,Xn,Ch,Mh,rr,jh,qh,zh,St,Eh,Lt,yi,Ue,Nt,ir,ya,Ph,lr,Sh,Di,Q,Da,Lh,Je,Nh,dr,Oh,Wh,Va,Ih,Bh,Hh,Aa,Rh,Un,Qh,Gh,Xh,Fa,Uh,Ca,Jh,Kh,Yh,ie,Ma,Zh,Ke,eu,Jn,tu,ou,cr,au,nu,su,Ot,ru,Wt,Vi,Ye,It,pr,ja,iu,hr,lu,Ai,G,qa,du,Ze,cu,ur,pu,hu,za,uu,mu,fu,Ea,gu,Kn,_u,vu,bu,Pa,ku,Sa,Tu,wu,$u,J,La,xu,et,yu,Yn,Du,Vu,mr,Au,Fu,Cu,Bt,Mu,Ht,ju,Rt,Fi,tt,Qt,fr,Na,qu,gr,zu,Ci,L,Oa,Eu,_r,Pu,Su,Wa,Lu,Ia,Nu,Ou,Wu,Ba,Iu,Zn,Bu,Hu,Ru,Ha,Qu,Ra,Gu,Xu,Uu,q,Qa,Ju,ot,Ku,es,Yu,Zu,vr,em,tm,om,Gt,am,Xt,nm,Ut,sm,Jt,rm,Kt,Mi,at,Yt,br,Ga,im,kr,lm,ji,N,Xa,dm,Tr,cm,pm,Ua,hm,Ja,um,mm,fm,Ka,gm,ts,_m,vm,bm,Ya,km,Za,Tm,wm,$m,le,en,xm,nt,ym,os,Dm,Vm,wr,Am,Fm,Cm,Zt,Mm,eo,qi,st,to,$r,tn,jm,xr,qm,zi,O,on,zm,yr,Em,Pm,an,Sm,nn,Lm,Nm,Om,sn,Wm,as,Im,Bm,Hm,rn,Rm,ln,Qm,Gm,Xm,K,dn,Um,rt,Jm,ns,Km,Ym,Dr,Zm,ef,tf,oo,of,ao,af,no,Ei,it,so,Vr,cn,nf,Ar,sf,Pi,W,pn,rf,lt,lf,Fr,df,cf,Cr,pf,hf,uf,hn,mf,un,ff,gf,_f,mn,vf,ss,bf,kf,Tf,fn,wf,gn,$f,xf,yf,Y,_n,Df,dt,Vf,rs,Af,Ff,Mr,Cf,Mf,jf,ro,qf,io,zf,lo,Si;return a=new B({}),_o=new B({}),xo=new B({}),yo=new A({props:{name:"class transformers.Data2VecTextConfig",anchor:"transformers.Data2VecTextConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Data2VecTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DATA2VEC model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <code>Data2VecModel</code>.`,name:"vocab_size"},{anchor:"transformers.Data2VecTextConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.Data2VecTextConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.Data2VecTextConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.Data2VecTextConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.Data2VecTextConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.Data2VecTextConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.Data2VecTextConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.Data2VecTextConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.Data2VecTextConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <code>Data2VecModel</code>.`,name:"type_vocab_size"},{anchor:"transformers.Data2VecTextConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.Data2VecTextConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.Data2VecTextConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.Data2VecTextConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.Data2VecTextConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/configuration_data2vec_text.py#L31"}}),ft=new F({props:{anchor:"transformers.Data2VecTextConfig.example",$$slots:{default:[t2]},$$scope:{ctx:D}}}),Vo=new B({}),Ao=new A({props:{name:"class transformers.Data2VecAudioConfig",anchor:"transformers.Data2VecAudioConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"conv_pos_kernel_size",val:" = 19"},{name:"num_conv_pos_embeddings",val:" = 5"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"ctc_loss_reduction",val:" = 'sum'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"tdnn_dim",val:" = (512, 512, 512, 512, 1500)"},{name:"tdnn_kernel",val:" = (5, 3, 3, 1, 1)"},{name:"tdnn_dilation",val:" = (1, 2, 3, 1, 1)"},{name:"xvector_output_dim",val:" = 512"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"add_adapter",val:" = False"},{name:"adapter_kernel_size",val:" = 3"},{name:"adapter_stride",val:" = 2"},{name:"num_adapter_layers",val:" = 3"},{name:"output_hidden_size",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Data2VecAudioConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the Data2VecAudio model. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioModel">Data2VecAudioModel</a> or <code>TFData2VecAudioModel</code>. Vocabulary size
of the model. Defines the different tokens that can be represented by the <em>inputs_ids</em> passed to the
forward method of <a href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioModel">Data2VecAudioModel</a>.`,name:"vocab_size"},{anchor:"transformers.Data2VecAudioConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.Data2VecAudioConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.Data2VecAudioConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.Data2VecAudioConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.Data2VecAudioConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.Data2VecAudioConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.Data2VecAudioConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.Data2VecAudioConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioForCTC">Data2VecAudioForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.Data2VecAudioConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.Data2VecAudioConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.Data2VecAudioConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.Data2VecAudioConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.Data2VecAudioConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.Data2VecAudioConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.Data2VecAudioConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 3, 3)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.Data2VecAudioConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.Data2VecAudioConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.Data2VecAudioConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.Data2VecAudioConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask_time_prob<em>len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, </em>mask_time_prob<em> should be \`prob_vector_start</em>mask_time_length\`. Note that overlap may decrease the`,name:"mask_time_prob"},{anchor:"transformers.Data2VecAudioConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.Data2VecAudioConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.Data2VecAudioConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask_feature_prob<em>len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, </em>mask_feature_prob<em> should be \`prob_vector_start</em>mask_feature_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is
True\`.`,name:"mask_feature_prob"},{anchor:"transformers.Data2VecAudioConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.Data2VecAudioConfig.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.Data2VecAudioConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;sum&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioForCTC">Data2VecAudioForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.Data2VecAudioConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioForCTC">Data2VecAudioForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.Data2VecAudioConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioForSequenceClassification">Data2VecAudioForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.Data2VecAudioConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"},{anchor:"transformers.Data2VecAudioConfig.tdnn_dim",description:`<strong>tdnn_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 1500)</code>) &#x2014;
A tuple of integers defining the number of output channels of each 1D convolutional layer in the <em>TDNN</em>
module of the <em>XVector</em> model. The length of <em>tdnn_dim</em> defines the number of <em>TDNN</em> layers.`,name:"tdnn_dim"},{anchor:"transformers.Data2VecAudioConfig.tdnn_kernel",description:`<strong>tdnn_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 3, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_kernel</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_kernel"},{anchor:"transformers.Data2VecAudioConfig.tdnn_dilation",description:`<strong>tdnn_dilation</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(1, 2, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the dilation factor of each 1D convolutional layer in <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_dilation</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_dilation"},{anchor:"transformers.Data2VecAudioConfig.xvector_output_dim",description:`<strong>xvector_output_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the <em>XVector</em> embedding vectors.`,name:"xvector_output_dim"},{anchor:"transformers.Data2VecAudioConfig.add_adapter",description:`<strong>add_adapter</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether a convolutional network should be stacked on top of the Data2VecAudio Encoder. Can be very useful
for warm-starting Data2VecAudio for SpeechEncoderDecoder models.`,name:"add_adapter"},{anchor:"transformers.Data2VecAudioConfig.adapter_kernel_size",description:`<strong>adapter_kernel_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Kernel size of the convolutional layers in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"adapter_kernel_size"},{anchor:"transformers.Data2VecAudioConfig.adapter_stride",description:`<strong>adapter_stride</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Stride of the convolutional layers in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"adapter_stride"},{anchor:"transformers.Data2VecAudioConfig.num_adapter_layers",description:`<strong>num_adapter_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Number of convolutional layers that should be used in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"num_adapter_layers"},{anchor:"transformers.Data2VecAudioConfig.output_hidden_size",description:`<strong>output_hidden_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Dimensionality of the encoder output layer. If not defined, this defaults to <em>hidden-size</em>. Only relevant
if <code>add_adapter is True</code>.`,name:"output_hidden_size"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/configuration_data2vec_audio.py#L31"}}),_t=new F({props:{anchor:"transformers.Data2VecAudioConfig.example",$$slots:{default:[o2]},$$scope:{ctx:D}}}),Co=new B({}),Mo=new A({props:{name:"class transformers.Data2VecAudioModel",anchor:"transformers.Data2VecAudioModel",parameters:[{name:"config",val:": Data2VecAudioConfig"}],parametersDescription:[{anchor:"transformers.Data2VecAudioModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioConfig">Data2VecAudioConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_audio.py#L898"}}),So=new A({props:{name:"forward",anchor:"transformers.Data2VecAudioModel.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Data2VecAudioModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Data2VecAudioModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/data2vec-audio-base-960h" rel="nofollow">data2vec-audio-base</a>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Data2VecAudioModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecAudioModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecAudioModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_audio.py#L969",returnDescription:`
<p>A <code>transformers.models.data2vec.modeling_data2vec_audio.Data2VecAudioBaseModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioConfig"
>Data2VecAudioConfig</a>) and inputs.</p>
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
<p><code>transformers.models.data2vec.modeling_data2vec_audio.Data2VecAudioBaseModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bt=new ge({props:{$$slots:{default:[a2]},$$scope:{ctx:D}}}),kt=new F({props:{anchor:"transformers.Data2VecAudioModel.forward.example",$$slots:{default:[n2]},$$scope:{ctx:D}}}),Lo=new B({}),No=new A({props:{name:"class transformers.Data2VecAudioForAudioFrameClassification",anchor:"transformers.Data2VecAudioForAudioFrameClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecAudioForAudioFrameClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioConfig">Data2VecAudioConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1291"}}),Ro=new A({props:{name:"forward",anchor:"transformers.Data2VecAudioForAudioFrameClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Data2VecAudioForAudioFrameClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Data2VecAudioForAudioFrameClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/data2vec-audio-base-960h" rel="nofollow">data2vec-audio-base</a>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Data2VecAudioForAudioFrameClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecAudioForAudioFrameClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecAudioForAudioFrameClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecAudioForAudioFrameClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1334",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioConfig"
>Data2VecAudioConfig</a>) and inputs.</p>
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
`}}),wt=new ge({props:{$$slots:{default:[s2]},$$scope:{ctx:D}}}),$t=new F({props:{anchor:"transformers.Data2VecAudioForAudioFrameClassification.forward.example",$$slots:{default:[r2]},$$scope:{ctx:D}}}),Qo=new B({}),Go=new A({props:{name:"class transformers.Data2VecAudioForCTC",anchor:"transformers.Data2VecAudioForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecAudioForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioConfig">Data2VecAudioConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1036"}}),Yo=new A({props:{name:"forward",anchor:"transformers.Data2VecAudioForCTC.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Data2VecAudioForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Data2VecAudioForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/data2vec-audio-base-960h" rel="nofollow">data2vec-audio-base</a>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Data2VecAudioForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecAudioForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecAudioForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecAudioForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1077",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioConfig"
>Data2VecAudioConfig</a>) and inputs.</p>
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
`}}),yt=new ge({props:{$$slots:{default:[i2]},$$scope:{ctx:D}}}),Dt=new F({props:{anchor:"transformers.Data2VecAudioForCTC.forward.example",$$slots:{default:[l2]},$$scope:{ctx:D}}}),Vt=new F({props:{anchor:"transformers.Data2VecAudioForCTC.forward.example-2",$$slots:{default:[d2]},$$scope:{ctx:D}}}),Zo=new B({}),ea=new A({props:{name:"class transformers.Data2VecAudioForSequenceClassification",anchor:"transformers.Data2VecAudioForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecAudioForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioConfig">Data2VecAudioConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1167"}}),ra=new A({props:{name:"forward",anchor:"transformers.Data2VecAudioForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Data2VecAudioForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Data2VecAudioForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/data2vec-audio-base-960h" rel="nofollow">data2vec-audio-base</a>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Data2VecAudioForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecAudioForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecAudioForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecAudioForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1212",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioConfig"
>Data2VecAudioConfig</a>) and inputs.</p>
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
`}}),Ft=new ge({props:{$$slots:{default:[c2]},$$scope:{ctx:D}}}),Ct=new F({props:{anchor:"transformers.Data2VecAudioForSequenceClassification.forward.example",$$slots:{default:[p2]},$$scope:{ctx:D}}}),Mt=new F({props:{anchor:"transformers.Data2VecAudioForSequenceClassification.forward.example-2",$$slots:{default:[h2]},$$scope:{ctx:D}}}),ia=new B({}),la=new A({props:{name:"class transformers.Data2VecAudioForXVector",anchor:"transformers.Data2VecAudioForXVector",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecAudioForXVector.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioConfig">Data2VecAudioConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1449"}}),ma=new A({props:{name:"forward",anchor:"transformers.Data2VecAudioForXVector.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Data2VecAudioForXVector.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Data2VecAudioForXVector.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/data2vec-audio-base-960h" rel="nofollow">data2vec-audio-base</a>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Data2VecAudioForXVector.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecAudioForXVector.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecAudioForXVector.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecAudioForXVector.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1511",returnDescription:`
<p>A <code>transformers.models.data2vec.modeling_data2vec_audio.XVectorOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioConfig"
>Data2VecAudioConfig</a>) and inputs.</p>
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
<p><code>transformers.models.data2vec.modeling_data2vec_audio.XVectorOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qt=new ge({props:{$$slots:{default:[u2]},$$scope:{ctx:D}}}),zt=new F({props:{anchor:"transformers.Data2VecAudioForXVector.forward.example",$$slots:{default:[m2]},$$scope:{ctx:D}}}),fa=new B({}),ga=new A({props:{name:"class transformers.Data2VecTextModel",anchor:"transformers.Data2VecTextModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.Data2VecTextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextConfig">Data2VecTextConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_text.py#L700"}}),xa=new A({props:{name:"forward",anchor:"transformers.Data2VecTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Data2VecTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.Data2VecTextModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Data2VecTextModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.Data2VecTextModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.Data2VecTextModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Data2VecTextModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.Data2VecTextModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecTextModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecTextModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecTextModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.Data2VecTextModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.Data2VecTextModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.Data2VecTextModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_text.py#L744",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextConfig"
>Data2VecTextConfig</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),St=new ge({props:{$$slots:{default:[f2]},$$scope:{ctx:D}}}),Lt=new F({props:{anchor:"transformers.Data2VecTextModel.forward.example",$$slots:{default:[g2]},$$scope:{ctx:D}}}),ya=new B({}),Da=new A({props:{name:"class transformers.Data2VecTextForCausalLM",anchor:"transformers.Data2VecTextForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecTextForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextConfig">Data2VecTextConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_text.py#L885"}}),Ma=new A({props:{name:"forward",anchor:"transformers.Data2VecTextForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Data2VecTextForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.Data2VecTextForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Data2VecTextForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.Data2VecTextForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.Data2VecTextForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Data2VecTextForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.Data2VecTextForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecTextForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecTextForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecTextForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.Data2VecTextForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.Data2VecTextForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.Data2VecTextForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.Data2VecTextForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_text.py#L911",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextConfig"
>Data2VecTextConfig</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ot=new ge({props:{$$slots:{default:[_2]},$$scope:{ctx:D}}}),Wt=new F({props:{anchor:"transformers.Data2VecTextForCausalLM.forward.example",$$slots:{default:[v2]},$$scope:{ctx:D}}}),ja=new B({}),qa=new A({props:{name:"class transformers.Data2VecTextForMaskedLM",anchor:"transformers.Data2VecTextForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecTextForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextConfig">Data2VecTextConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_text.py#L1037"}}),La=new A({props:{name:"forward",anchor:"transformers.Data2VecTextForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Data2VecTextForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_text.py#L1066",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextConfig"
>Data2VecTextConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bt=new ge({props:{$$slots:{default:[b2]},$$scope:{ctx:D}}}),Ht=new F({props:{anchor:"transformers.Data2VecTextForMaskedLM.forward.example",$$slots:{default:[k2]},$$scope:{ctx:D}}}),Rt=new F({props:{anchor:"transformers.Data2VecTextForMaskedLM.forward.example-2",$$slots:{default:[T2]},$$scope:{ctx:D}}}),Na=new B({}),Oa=new A({props:{name:"class transformers.Data2VecTextForSequenceClassification",anchor:"transformers.Data2VecTextForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecTextForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextConfig">Data2VecTextConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_text.py#L1167"}}),Qa=new A({props:{name:"forward",anchor:"transformers.Data2VecTextForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Data2VecTextForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.Data2VecTextForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Data2VecTextForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.Data2VecTextForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.Data2VecTextForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Data2VecTextForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.Data2VecTextForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecTextForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecTextForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecTextForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_text.py#L1181",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextConfig"
>Data2VecTextConfig</a>) and inputs.</p>
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
`}}),Gt=new ge({props:{$$slots:{default:[w2]},$$scope:{ctx:D}}}),Xt=new F({props:{anchor:"transformers.Data2VecTextForSequenceClassification.forward.example",$$slots:{default:[$2]},$$scope:{ctx:D}}}),Ut=new F({props:{anchor:"transformers.Data2VecTextForSequenceClassification.forward.example-2",$$slots:{default:[x2]},$$scope:{ctx:D}}}),Jt=new F({props:{anchor:"transformers.Data2VecTextForSequenceClassification.forward.example-3",$$slots:{default:[y2]},$$scope:{ctx:D}}}),Kt=new F({props:{anchor:"transformers.Data2VecTextForSequenceClassification.forward.example-4",$$slots:{default:[D2]},$$scope:{ctx:D}}}),Ga=new B({}),Xa=new A({props:{name:"class transformers.Data2VecTextForMultipleChoice",anchor:"transformers.Data2VecTextForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecTextForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextConfig">Data2VecTextConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_text.py#L1265"}}),en=new A({props:{name:"forward",anchor:"transformers.Data2VecTextForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Data2VecTextForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.Data2VecTextForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Data2VecTextForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.Data2VecTextForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.Data2VecTextForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Data2VecTextForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.Data2VecTextForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecTextForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecTextForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecTextForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_text.py#L1278",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextConfig"
>Data2VecTextConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zt=new ge({props:{$$slots:{default:[V2]},$$scope:{ctx:D}}}),eo=new F({props:{anchor:"transformers.Data2VecTextForMultipleChoice.forward.example",$$slots:{default:[A2]},$$scope:{ctx:D}}}),tn=new B({}),on=new A({props:{name:"class transformers.Data2VecTextForTokenClassification",anchor:"transformers.Data2VecTextForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecTextForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextConfig">Data2VecTextConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_text.py#L1360"}}),dn=new A({props:{name:"forward",anchor:"transformers.Data2VecTextForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Data2VecTextForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.Data2VecTextForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Data2VecTextForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.Data2VecTextForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.Data2VecTextForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Data2VecTextForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.Data2VecTextForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecTextForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecTextForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecTextForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_text.py#L1378",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextConfig"
>Data2VecTextConfig</a>) and inputs.</p>
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
`}}),oo=new ge({props:{$$slots:{default:[F2]},$$scope:{ctx:D}}}),ao=new F({props:{anchor:"transformers.Data2VecTextForTokenClassification.forward.example",$$slots:{default:[C2]},$$scope:{ctx:D}}}),no=new F({props:{anchor:"transformers.Data2VecTextForTokenClassification.forward.example-2",$$slots:{default:[M2]},$$scope:{ctx:D}}}),cn=new B({}),pn=new A({props:{name:"class transformers.Data2VecTextForQuestionAnswering",anchor:"transformers.Data2VecTextForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecTextForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextConfig">Data2VecTextConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_text.py#L1468"}}),_n=new A({props:{name:"forward",anchor:"transformers.Data2VecTextForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/data2vec/modeling_data2vec_text.py#L1482",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextConfig"
>Data2VecTextConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new ge({props:{$$slots:{default:[j2]},$$scope:{ctx:D}}}),io=new F({props:{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.example",$$slots:{default:[q2]},$$scope:{ctx:D}}}),lo=new F({props:{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.example-2",$$slots:{default:[z2]},$$scope:{ctx:D}}}),{c(){d=r("meta"),g=m(),c=r("h1"),h=r("a"),v=r("span"),k(a.$$.fragment),p=m(),V=r("span"),Cl=n("Data2Vec"),oi=m(),Ce=r("h2"),ht=r("a"),ys=r("span"),k(_o.$$.fragment),Ml=m(),Ds=r("span"),jl=n("Overview"),ai=m(),ut=r("p"),ql=n("The Data2Vec model was proposed in "),vo=r("a"),zl=n("data2vec: A General Framework for Self-supervised Learning in Speech, Vision and Language"),El=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and Michael Auli.
Data2Vec proposes a unified framework for self-supervised learning across different data modalities - text, audio and images.
Importantly, predicted targets for pre-training are contextualized latent representations of the inputs, rather than modality-specific, context-independent targets.`),ni=m(),yn=r("p"),Pl=n("The abstract from the paper is the following:"),si=m(),Dn=r("p"),bo=r("em"),Sl=n(`While the general idea of self-supervised learning is identical across modalities, the actual algorithms and
objectives differ widely because they were developed with a single modality in mind. To get us closer to general
self-supervised learning, we present data2vec, a framework that uses the same learning method for either speech,
NLP or computer vision. The core idea is to predict latent representations of the full input data based on a
masked view of the input in a selfdistillation setup using a standard Transformer architecture.
Instead of predicting modality-specific targets such as words, visual tokens or units of human speech which
are local in nature, data2vec predicts contextualized latent representations that contain information from
the entire input. Experiments on the major benchmarks of speech recognition, image classification, and
natural language understanding demonstrate a new state of the art or competitive performance to predominant approaches.
Models and code are available at `),ko=r("a"),Ll=n("www.github.com/pytorch/fairseq/tree/master/examples/data2vec"),Nl=n("."),ri=m(),Vn=r("p"),Ol=n("Tips:"),ii=m(),An=r("ul"),To=r("li"),Wl=n(`Both Data2VecAudio and Data2VecText have been trained using the same self-supervised learning method.
In the case of Data2VecAudio, preprocessing is identical to `),Fn=r("a"),Il=n("RobertaModel"),Bl=n(", including tokenization."),li=m(),ke=r("p"),Hl=n("This model was contributed by "),wo=r("a"),Rl=n("edugp"),Ql=n(`.
The original code can be found `),$o=r("a"),Gl=n("here"),Xl=n("."),di=m(),Me=r("h2"),mt=r("a"),Vs=r("span"),k(xo.$$.fragment),Ul=m(),As=r("span"),Jl=n("Data2VecTextConfig"),ci=m(),te=r("div"),k(yo.$$.fragment),Kl=m(),_e=r("p"),Yl=n("This is the configuration class to store the configuration of a "),Cn=r("a"),Zl=n("Data2VecTextModel"),ed=n(" and "),Mn=r("a"),td=n("Data2VecTextModel"),od=n(`. It
is used to instantiate a Data2VecText model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Data2VecText
`),Do=r("a"),ad=n("facebook/data2vec-text-base"),nd=n(" architecture."),sd=m(),je=r("p"),rd=n("Configuration objects inherit from "),jn=r("a"),id=n("PretrainedConfig"),ld=n(` and can be used to control the model outputs. Read the
documentation from `),qn=r("a"),dd=n("PretrainedConfig"),cd=n(" for more information."),pd=m(),k(ft.$$.fragment),pi=m(),qe=r("h2"),gt=r("a"),Fs=r("span"),k(Vo.$$.fragment),hd=m(),Cs=r("span"),ud=n("Data2VecAudioConfig"),hi=m(),oe=r("div"),k(Ao.$$.fragment),md=m(),ze=r("p"),fd=n("This is the configuration class to store the configuration of a "),zn=r("a"),gd=n("Data2VecAudioModel"),_d=n(`. It is used to instantiate
an Data2VecAudio model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Data2VecAudio
`),Fo=r("a"),vd=n("facebook/data2vec-audio-base-960h"),bd=n(" architecture."),kd=m(),Ee=r("p"),Td=n("Configuration objects inherit from "),En=r("a"),wd=n("PretrainedConfig"),$d=n(` and can be used to control the model outputs. Read the
documentation from `),Pn=r("a"),xd=n("PretrainedConfig"),yd=n(" for more information."),Dd=m(),k(_t.$$.fragment),ui=m(),Pe=r("h2"),vt=r("a"),Ms=r("span"),k(Co.$$.fragment),Vd=m(),js=r("span"),Ad=n("Data2VecAudioModel"),mi=m(),H=r("div"),k(Mo.$$.fragment),Fd=m(),jo=r("p"),Cd=n(`The bare Data2VecAudio Model transformer outputting raw hidden-states without any specific head on top.
Data2VecAudio was proposed in `),qo=r("a"),Md=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),jd=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),qd=m(),zo=r("p"),zd=n("This model inherits from "),Sn=r("a"),Ed=n("PreTrainedModel"),Pd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Sd=m(),Eo=r("p"),Ld=n("This model is a PyTorch "),Po=r("a"),Nd=n("torch.nn.Module"),Od=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wd=m(),ae=r("div"),k(So.$$.fragment),Id=m(),Se=r("p"),Bd=n("The "),Ln=r("a"),Hd=n("Data2VecAudioModel"),Rd=n(" forward method, overrides the "),qs=r("code"),Qd=n("__call__"),Gd=n(" special method."),Xd=m(),k(bt.$$.fragment),Ud=m(),k(kt.$$.fragment),fi=m(),Le=r("h2"),Tt=r("a"),zs=r("span"),k(Lo.$$.fragment),Jd=m(),Es=r("span"),Kd=n("Data2VecAudioForAudioFrameClassification"),gi=m(),z=r("div"),k(No.$$.fragment),Yd=m(),Ps=r("p"),Zd=n("Data2VecAudio Model with a frame classification head on top for tasks like Speaker Diarization."),ec=m(),Oo=r("p"),tc=n("Data2VecAudio was proposed in "),Wo=r("a"),oc=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),ac=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),nc=m(),Io=r("p"),sc=n("This model inherits from "),Nn=r("a"),rc=n("PreTrainedModel"),ic=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),lc=m(),Bo=r("p"),dc=n("This model is a PyTorch "),Ho=r("a"),cc=n("torch.nn.Module"),pc=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),hc=m(),ne=r("div"),k(Ro.$$.fragment),uc=m(),Ne=r("p"),mc=n("The "),On=r("a"),fc=n("Data2VecAudioForAudioFrameClassification"),gc=n(" forward method, overrides the "),Ss=r("code"),_c=n("__call__"),vc=n(" special method."),bc=m(),k(wt.$$.fragment),kc=m(),k($t.$$.fragment),_i=m(),Oe=r("h2"),xt=r("a"),Ls=r("span"),k(Qo.$$.fragment),Tc=m(),Ns=r("span"),wc=n("Data2VecAudioForCTC"),vi=m(),R=r("div"),k(Go.$$.fragment),$c=m(),We=r("p"),xc=n("Data2VecAudio Model with a "),Os=r("code"),yc=n("language modeling"),Dc=n(` head on top for Connectionist Temporal Classification (CTC).
Data2VecAudio was proposed in `),Xo=r("a"),Vc=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),Ac=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),Fc=m(),Uo=r("p"),Cc=n("This model inherits from "),Wn=r("a"),Mc=n("PreTrainedModel"),jc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),qc=m(),Jo=r("p"),zc=n("This model is a PyTorch "),Ko=r("a"),Ec=n("torch.nn.Module"),Pc=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Sc=m(),X=r("div"),k(Yo.$$.fragment),Lc=m(),Ie=r("p"),Nc=n("The "),In=r("a"),Oc=n("Data2VecAudioForCTC"),Wc=n(" forward method, overrides the "),Ws=r("code"),Ic=n("__call__"),Bc=n(" special method."),Hc=m(),k(yt.$$.fragment),Rc=m(),k(Dt.$$.fragment),Qc=m(),k(Vt.$$.fragment),bi=m(),Be=r("h2"),At=r("a"),Is=r("span"),k(Zo.$$.fragment),Gc=m(),Bs=r("span"),Xc=n("Data2VecAudioForSequenceClassification"),ki=m(),E=r("div"),k(ea.$$.fragment),Uc=m(),Hs=r("p"),Jc=n(`Data2VecAudio Model with a sequence classification head on top (a linear layer over the pooled output) for tasks
like SUPERB Keyword Spotting.`),Kc=m(),ta=r("p"),Yc=n("Data2VecAudio was proposed in "),oa=r("a"),Zc=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),ep=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),tp=m(),aa=r("p"),op=n("This model inherits from "),Bn=r("a"),ap=n("PreTrainedModel"),np=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),sp=m(),na=r("p"),rp=n("This model is a PyTorch "),sa=r("a"),ip=n("torch.nn.Module"),lp=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dp=m(),U=r("div"),k(ra.$$.fragment),cp=m(),He=r("p"),pp=n("The "),Hn=r("a"),hp=n("Data2VecAudioForSequenceClassification"),up=n(" forward method, overrides the "),Rs=r("code"),mp=n("__call__"),fp=n(" special method."),gp=m(),k(Ft.$$.fragment),_p=m(),k(Ct.$$.fragment),vp=m(),k(Mt.$$.fragment),Ti=m(),Re=r("h2"),jt=r("a"),Qs=r("span"),k(ia.$$.fragment),bp=m(),Gs=r("span"),kp=n("Data2VecAudioForXVector"),wi=m(),P=r("div"),k(la.$$.fragment),Tp=m(),Xs=r("p"),wp=n("Data2VecAudio Model with an XVector feature extraction head on top for tasks like Speaker Verification."),$p=m(),da=r("p"),xp=n("Data2VecAudio was proposed in "),ca=r("a"),yp=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),Dp=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),Vp=m(),pa=r("p"),Ap=n("This model inherits from "),Rn=r("a"),Fp=n("PreTrainedModel"),Cp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Mp=m(),ha=r("p"),jp=n("This model is a PyTorch "),ua=r("a"),qp=n("torch.nn.Module"),zp=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ep=m(),se=r("div"),k(ma.$$.fragment),Pp=m(),Qe=r("p"),Sp=n("The "),Qn=r("a"),Lp=n("Data2VecAudioForXVector"),Np=n(" forward method, overrides the "),Us=r("code"),Op=n("__call__"),Wp=n(" special method."),Ip=m(),k(qt.$$.fragment),Bp=m(),k(zt.$$.fragment),$i=m(),Ge=r("h2"),Et=r("a"),Js=r("span"),k(fa.$$.fragment),Hp=m(),Ks=r("span"),Rp=n("Data2VecTextModel"),xi=m(),j=r("div"),k(ga.$$.fragment),Qp=m(),_a=r("p"),Gp=n(`The bare Data2VecText Model for text transformer outputting raw hidden-states without any specific head on top.
Data2VecText was proposed in `),va=r("a"),Xp=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),Up=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),Jp=m(),ba=r("p"),Kp=n("This model inherits from "),Gn=r("a"),Yp=n("PreTrainedModel"),Zp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eh=m(),ka=r("p"),th=n("This model is also a PyTorch "),Ta=r("a"),oh=n("torch.nn.Module"),ah=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nh=m(),wa=r("p"),sh=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Ys=r("em"),rh=n(`Attention is
all you need`),ih=n(`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),lh=m(),S=r("p"),dh=n("To behave as an decoder the model needs to be initialized with the "),Zs=r("code"),ch=n("is_decoder"),ph=n(` argument of the configuration set
to `),er=r("code"),hh=n("True"),uh=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),tr=r("code"),mh=n("is_decoder"),fh=n(` argument and
`),or=r("code"),gh=n("add_cross_attention"),_h=n(" set to "),ar=r("code"),vh=n("True"),bh=n("; an "),nr=r("code"),kh=n("encoder_hidden_states"),Th=n(" is then expected as an input to the forward pass."),wh=m(),Pt=r("p"),$h=n(".. _"),sr=r("em"),xh=n("Attention is all you need"),yh=n(": "),$a=r("a"),Dh=n("https://arxiv.org/abs/1706.03762"),Vh=m(),re=r("div"),k(xa.$$.fragment),Ah=m(),Xe=r("p"),Fh=n("The "),Xn=r("a"),Ch=n("Data2VecTextModel"),Mh=n(" forward method, overrides the "),rr=r("code"),jh=n("__call__"),qh=n(" special method."),zh=m(),k(St.$$.fragment),Eh=m(),k(Lt.$$.fragment),yi=m(),Ue=r("h2"),Nt=r("a"),ir=r("span"),k(ya.$$.fragment),Ph=m(),lr=r("span"),Sh=n("Data2VecTextForCausalLM"),Di=m(),Q=r("div"),k(Da.$$.fragment),Lh=m(),Je=r("p"),Nh=n("Data2VecText Model with a "),dr=r("code"),Oh=n("language modeling"),Wh=n(` head on top for CLM fine-tuning.
Data2VecText was proposed in `),Va=r("a"),Ih=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),Bh=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),Hh=m(),Aa=r("p"),Rh=n("This model inherits from "),Un=r("a"),Qh=n("PreTrainedModel"),Gh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xh=m(),Fa=r("p"),Uh=n("This model is also a PyTorch "),Ca=r("a"),Jh=n("torch.nn.Module"),Kh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yh=m(),ie=r("div"),k(Ma.$$.fragment),Zh=m(),Ke=r("p"),eu=n("The "),Jn=r("a"),tu=n("Data2VecTextForCausalLM"),ou=n(" forward method, overrides the "),cr=r("code"),au=n("__call__"),nu=n(" special method."),su=m(),k(Ot.$$.fragment),ru=m(),k(Wt.$$.fragment),Vi=m(),Ye=r("h2"),It=r("a"),pr=r("span"),k(ja.$$.fragment),iu=m(),hr=r("span"),lu=n("Data2VecTextForMaskedLM"),Ai=m(),G=r("div"),k(qa.$$.fragment),du=m(),Ze=r("p"),cu=n("data2vec Model with a "),ur=r("code"),pu=n("language modeling"),hu=n(` head on top.
Data2VecText was proposed in `),za=r("a"),uu=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),mu=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),fu=m(),Ea=r("p"),gu=n("This model inherits from "),Kn=r("a"),_u=n("PreTrainedModel"),vu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bu=m(),Pa=r("p"),ku=n("This model is also a PyTorch "),Sa=r("a"),Tu=n("torch.nn.Module"),wu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$u=m(),J=r("div"),k(La.$$.fragment),xu=m(),et=r("p"),yu=n("The "),Yn=r("a"),Du=n("Data2VecTextForMaskedLM"),Vu=n(" forward method, overrides the "),mr=r("code"),Au=n("__call__"),Fu=n(" special method."),Cu=m(),k(Bt.$$.fragment),Mu=m(),k(Ht.$$.fragment),ju=m(),k(Rt.$$.fragment),Fi=m(),tt=r("h2"),Qt=r("a"),fr=r("span"),k(Na.$$.fragment),qu=m(),gr=r("span"),zu=n("Data2VecTextForSequenceClassification"),Ci=m(),L=r("div"),k(Oa.$$.fragment),Eu=m(),_r=r("p"),Pu=n(`Data2VecText Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Su=m(),Wa=r("p"),Lu=n("Data2VecText was proposed in "),Ia=r("a"),Nu=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),Ou=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),Wu=m(),Ba=r("p"),Iu=n("This model inherits from "),Zn=r("a"),Bu=n("PreTrainedModel"),Hu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ru=m(),Ha=r("p"),Qu=n("This model is also a PyTorch "),Ra=r("a"),Gu=n("torch.nn.Module"),Xu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uu=m(),q=r("div"),k(Qa.$$.fragment),Ju=m(),ot=r("p"),Ku=n("The "),es=r("a"),Yu=n("Data2VecTextForSequenceClassification"),Zu=n(" forward method, overrides the "),vr=r("code"),em=n("__call__"),tm=n(" special method."),om=m(),k(Gt.$$.fragment),am=m(),k(Xt.$$.fragment),nm=m(),k(Ut.$$.fragment),sm=m(),k(Jt.$$.fragment),rm=m(),k(Kt.$$.fragment),Mi=m(),at=r("h2"),Yt=r("a"),br=r("span"),k(Ga.$$.fragment),im=m(),kr=r("span"),lm=n("Data2VecTextForMultipleChoice"),ji=m(),N=r("div"),k(Xa.$$.fragment),dm=m(),Tr=r("p"),cm=n(`Data2VecText Model with a multiple choice classification head on top (a linear layer on top of the pooled output
and a softmax) e.g. for RocStories/SWAG tasks.`),pm=m(),Ua=r("p"),hm=n("Data2VecText was proposed in "),Ja=r("a"),um=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),mm=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),fm=m(),Ka=r("p"),gm=n("This model inherits from "),ts=r("a"),_m=n("PreTrainedModel"),vm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bm=m(),Ya=r("p"),km=n("This model is also a PyTorch "),Za=r("a"),Tm=n("torch.nn.Module"),wm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$m=m(),le=r("div"),k(en.$$.fragment),xm=m(),nt=r("p"),ym=n("The "),os=r("a"),Dm=n("Data2VecTextForMultipleChoice"),Vm=n(" forward method, overrides the "),wr=r("code"),Am=n("__call__"),Fm=n(" special method."),Cm=m(),k(Zt.$$.fragment),Mm=m(),k(eo.$$.fragment),qi=m(),st=r("h2"),to=r("a"),$r=r("span"),k(tn.$$.fragment),jm=m(),xr=r("span"),qm=n("Data2VecTextForTokenClassification"),zi=m(),O=r("div"),k(on.$$.fragment),zm=m(),yr=r("p"),Em=n(`Data2VecText Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Pm=m(),an=r("p"),Sm=n("Data2VecText was proposed in "),nn=r("a"),Lm=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),Nm=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),Om=m(),sn=r("p"),Wm=n("This model inherits from "),as=r("a"),Im=n("PreTrainedModel"),Bm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hm=m(),rn=r("p"),Rm=n("This model is also a PyTorch "),ln=r("a"),Qm=n("torch.nn.Module"),Gm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xm=m(),K=r("div"),k(dn.$$.fragment),Um=m(),rt=r("p"),Jm=n("The "),ns=r("a"),Km=n("Data2VecTextForTokenClassification"),Ym=n(" forward method, overrides the "),Dr=r("code"),Zm=n("__call__"),ef=n(" special method."),tf=m(),k(oo.$$.fragment),of=m(),k(ao.$$.fragment),af=m(),k(no.$$.fragment),Ei=m(),it=r("h2"),so=r("a"),Vr=r("span"),k(cn.$$.fragment),nf=m(),Ar=r("span"),sf=n("Data2VecTextForQuestionAnswering"),Pi=m(),W=r("div"),k(pn.$$.fragment),rf=m(),lt=r("p"),lf=n(`Data2VecText Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Fr=r("code"),df=n("span start logits"),cf=n(" and "),Cr=r("code"),pf=n("span end logits"),hf=n(")."),uf=m(),hn=r("p"),mf=n("Data2VecText was proposed in "),un=r("a"),ff=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),gf=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),_f=m(),mn=r("p"),vf=n("This model inherits from "),ss=r("a"),bf=n("PreTrainedModel"),kf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tf=m(),fn=r("p"),wf=n("This model is also a PyTorch "),gn=r("a"),$f=n("torch.nn.Module"),xf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yf=m(),Y=r("div"),k(_n.$$.fragment),Df=m(),dt=r("p"),Vf=n("The "),rs=r("a"),Af=n("Data2VecTextForQuestionAnswering"),Ff=n(" forward method, overrides the "),Mr=r("code"),Cf=n("__call__"),Mf=n(" special method."),jf=m(),k(ro.$$.fragment),qf=m(),k(io.$$.fragment),zf=m(),k(lo.$$.fragment),this.h()},l(t){const _=Z_('[data-svelte="svelte-1phssyn"]',document.head);d=i(_,"META",{name:!0,content:!0}),_.forEach(o),g=f(t),c=i(t,"H1",{class:!0});var vn=l(c);h=i(vn,"A",{id:!0,class:!0,href:!0});var jr=l(h);v=i(jr,"SPAN",{});var qr=l(v);T(a.$$.fragment,qr),qr.forEach(o),jr.forEach(o),p=f(vn),V=i(vn,"SPAN",{});var zr=l(V);Cl=s(zr,"Data2Vec"),zr.forEach(o),vn.forEach(o),oi=f(t),Ce=i(t,"H2",{class:!0});var bn=l(Ce);ht=i(bn,"A",{id:!0,class:!0,href:!0});var Er=l(ht);ys=i(Er,"SPAN",{});var Pr=l(ys);T(_o.$$.fragment,Pr),Pr.forEach(o),Er.forEach(o),Ml=f(bn),Ds=i(bn,"SPAN",{});var Sr=l(Ds);jl=s(Sr,"Overview"),Sr.forEach(o),bn.forEach(o),ai=f(t),ut=i(t,"P",{});var kn=l(ut);ql=s(kn,"The Data2Vec model was proposed in "),vo=i(kn,"A",{href:!0,rel:!0});var Lr=l(vo);zl=s(Lr,"data2vec: A General Framework for Self-supervised Learning in Speech, Vision and Language"),Lr.forEach(o),El=s(kn,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and Michael Auli.
Data2Vec proposes a unified framework for self-supervised learning across different data modalities - text, audio and images.
Importantly, predicted targets for pre-training are contextualized latent representations of the inputs, rather than modality-specific, context-independent targets.`),kn.forEach(o),ni=f(t),yn=i(t,"P",{});var Nr=l(yn);Pl=s(Nr,"The abstract from the paper is the following:"),Nr.forEach(o),si=f(t),Dn=i(t,"P",{});var Or=l(Dn);bo=i(Or,"EM",{});var Tn=l(bo);Sl=s(Tn,`While the general idea of self-supervised learning is identical across modalities, the actual algorithms and
objectives differ widely because they were developed with a single modality in mind. To get us closer to general
self-supervised learning, we present data2vec, a framework that uses the same learning method for either speech,
NLP or computer vision. The core idea is to predict latent representations of the full input data based on a
masked view of the input in a selfdistillation setup using a standard Transformer architecture.
Instead of predicting modality-specific targets such as words, visual tokens or units of human speech which
are local in nature, data2vec predicts contextualized latent representations that contain information from
the entire input. Experiments on the major benchmarks of speech recognition, image classification, and
natural language understanding demonstrate a new state of the art or competitive performance to predominant approaches.
Models and code are available at `),ko=i(Tn,"A",{href:!0,rel:!0});var Wr=l(ko);Ll=s(Wr,"www.github.com/pytorch/fairseq/tree/master/examples/data2vec"),Wr.forEach(o),Nl=s(Tn,"."),Tn.forEach(o),Or.forEach(o),ri=f(t),Vn=i(t,"P",{});var Ir=l(Vn);Ol=s(Ir,"Tips:"),Ir.forEach(o),ii=f(t),An=i(t,"UL",{});var Br=l(An);To=i(Br,"LI",{});var wn=l(To);Wl=s(wn,`Both Data2VecAudio and Data2VecText have been trained using the same self-supervised learning method.
In the case of Data2VecAudio, preprocessing is identical to `),Fn=i(wn,"A",{href:!0});var Hr=l(Fn);Il=s(Hr,"RobertaModel"),Hr.forEach(o),Bl=s(wn,", including tokenization."),wn.forEach(o),Br.forEach(o),li=f(t),ke=i(t,"P",{});var ct=l(ke);Hl=s(ct,"This model was contributed by "),wo=i(ct,"A",{href:!0,rel:!0});var Rr=l(wo);Rl=s(Rr,"edugp"),Rr.forEach(o),Ql=s(ct,`.
The original code can be found `),$o=i(ct,"A",{href:!0,rel:!0});var Qr=l($o);Gl=s(Qr,"here"),Qr.forEach(o),Xl=s(ct,"."),ct.forEach(o),di=f(t),Me=i(t,"H2",{class:!0});var $n=l(Me);mt=i($n,"A",{id:!0,class:!0,href:!0});var Gr=l(mt);Vs=i(Gr,"SPAN",{});var Xr=l(Vs);T(xo.$$.fragment,Xr),Xr.forEach(o),Gr.forEach(o),Ul=f($n),As=i($n,"SPAN",{});var Ur=l(As);Jl=s(Ur,"Data2VecTextConfig"),Ur.forEach(o),$n.forEach(o),ci=f(t),te=i(t,"DIV",{class:!0});var ve=l(te);T(yo.$$.fragment,ve),Kl=f(ve),_e=i(ve,"P",{});var be=l(_e);Yl=s(be,"This is the configuration class to store the configuration of a "),Cn=i(be,"A",{href:!0});var Jr=l(Cn);Zl=s(Jr,"Data2VecTextModel"),Jr.forEach(o),ed=s(be," and "),Mn=i(be,"A",{href:!0});var Kr=l(Mn);td=s(Kr,"Data2VecTextModel"),Kr.forEach(o),od=s(be,`. It
is used to instantiate a Data2VecText model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Data2VecText
`),Do=i(be,"A",{href:!0,rel:!0});var Yr=l(Do);ad=s(Yr,"facebook/data2vec-text-base"),Yr.forEach(o),nd=s(be," architecture."),be.forEach(o),sd=f(ve),je=i(ve,"P",{});var pt=l(je);rd=s(pt,"Configuration objects inherit from "),jn=i(pt,"A",{href:!0});var Zr=l(jn);id=s(Zr,"PretrainedConfig"),Zr.forEach(o),ld=s(pt,` and can be used to control the model outputs. Read the
documentation from `),qn=i(pt,"A",{href:!0});var ei=l(qn);dd=s(ei,"PretrainedConfig"),ei.forEach(o),cd=s(pt," for more information."),pt.forEach(o),pd=f(ve),T(ft.$$.fragment,ve),ve.forEach(o),pi=f(t),qe=i(t,"H2",{class:!0});var xn=l(qe);gt=i(xn,"A",{id:!0,class:!0,href:!0});var Ef=l(gt);Fs=i(Ef,"SPAN",{});var Pf=l(Fs);T(Vo.$$.fragment,Pf),Pf.forEach(o),Ef.forEach(o),hd=f(xn),Cs=i(xn,"SPAN",{});var Sf=l(Cs);ud=s(Sf,"Data2VecAudioConfig"),Sf.forEach(o),xn.forEach(o),hi=f(t),oe=i(t,"DIV",{class:!0});var co=l(oe);T(Ao.$$.fragment,co),md=f(co),ze=i(co,"P",{});var is=l(ze);fd=s(is,"This is the configuration class to store the configuration of a "),zn=i(is,"A",{href:!0});var Lf=l(zn);gd=s(Lf,"Data2VecAudioModel"),Lf.forEach(o),_d=s(is,`. It is used to instantiate
an Data2VecAudio model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Data2VecAudio
`),Fo=i(is,"A",{href:!0,rel:!0});var Nf=l(Fo);vd=s(Nf,"facebook/data2vec-audio-base-960h"),Nf.forEach(o),bd=s(is," architecture."),is.forEach(o),kd=f(co),Ee=i(co,"P",{});var ls=l(Ee);Td=s(ls,"Configuration objects inherit from "),En=i(ls,"A",{href:!0});var Of=l(En);wd=s(Of,"PretrainedConfig"),Of.forEach(o),$d=s(ls,` and can be used to control the model outputs. Read the
documentation from `),Pn=i(ls,"A",{href:!0});var Wf=l(Pn);xd=s(Wf,"PretrainedConfig"),Wf.forEach(o),yd=s(ls," for more information."),ls.forEach(o),Dd=f(co),T(_t.$$.fragment,co),co.forEach(o),ui=f(t),Pe=i(t,"H2",{class:!0});var Li=l(Pe);vt=i(Li,"A",{id:!0,class:!0,href:!0});var If=l(vt);Ms=i(If,"SPAN",{});var Bf=l(Ms);T(Co.$$.fragment,Bf),Bf.forEach(o),If.forEach(o),Vd=f(Li),js=i(Li,"SPAN",{});var Hf=l(js);Ad=s(Hf,"Data2VecAudioModel"),Hf.forEach(o),Li.forEach(o),mi=f(t),H=i(t,"DIV",{class:!0});var Te=l(H);T(Mo.$$.fragment,Te),Fd=f(Te),jo=i(Te,"P",{});var Ni=l(jo);Cd=s(Ni,`The bare Data2VecAudio Model transformer outputting raw hidden-states without any specific head on top.
Data2VecAudio was proposed in `),qo=i(Ni,"A",{href:!0,rel:!0});var Rf=l(qo);Md=s(Rf,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),Rf.forEach(o),jd=s(Ni,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),Ni.forEach(o),qd=f(Te),zo=i(Te,"P",{});var Oi=l(zo);zd=s(Oi,"This model inherits from "),Sn=i(Oi,"A",{href:!0});var Qf=l(Sn);Ed=s(Qf,"PreTrainedModel"),Qf.forEach(o),Pd=s(Oi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Oi.forEach(o),Sd=f(Te),Eo=i(Te,"P",{});var Wi=l(Eo);Ld=s(Wi,"This model is a PyTorch "),Po=i(Wi,"A",{href:!0,rel:!0});var Gf=l(Po);Nd=s(Gf,"torch.nn.Module"),Gf.forEach(o),Od=s(Wi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wi.forEach(o),Wd=f(Te),ae=i(Te,"DIV",{class:!0});var po=l(ae);T(So.$$.fragment,po),Id=f(po),Se=i(po,"P",{});var ds=l(Se);Bd=s(ds,"The "),Ln=i(ds,"A",{href:!0});var Xf=l(Ln);Hd=s(Xf,"Data2VecAudioModel"),Xf.forEach(o),Rd=s(ds," forward method, overrides the "),qs=i(ds,"CODE",{});var Uf=l(qs);Qd=s(Uf,"__call__"),Uf.forEach(o),Gd=s(ds," special method."),ds.forEach(o),Xd=f(po),T(bt.$$.fragment,po),Ud=f(po),T(kt.$$.fragment,po),po.forEach(o),Te.forEach(o),fi=f(t),Le=i(t,"H2",{class:!0});var Ii=l(Le);Tt=i(Ii,"A",{id:!0,class:!0,href:!0});var Jf=l(Tt);zs=i(Jf,"SPAN",{});var Kf=l(zs);T(Lo.$$.fragment,Kf),Kf.forEach(o),Jf.forEach(o),Jd=f(Ii),Es=i(Ii,"SPAN",{});var Yf=l(Es);Kd=s(Yf,"Data2VecAudioForAudioFrameClassification"),Yf.forEach(o),Ii.forEach(o),gi=f(t),z=i(t,"DIV",{class:!0});var de=l(z);T(No.$$.fragment,de),Yd=f(de),Ps=i(de,"P",{});var Zf=l(Ps);Zd=s(Zf,"Data2VecAudio Model with a frame classification head on top for tasks like Speaker Diarization."),Zf.forEach(o),ec=f(de),Oo=i(de,"P",{});var Bi=l(Oo);tc=s(Bi,"Data2VecAudio was proposed in "),Wo=i(Bi,"A",{href:!0,rel:!0});var eg=l(Wo);oc=s(eg,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),eg.forEach(o),ac=s(Bi,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),Bi.forEach(o),nc=f(de),Io=i(de,"P",{});var Hi=l(Io);sc=s(Hi,"This model inherits from "),Nn=i(Hi,"A",{href:!0});var tg=l(Nn);rc=s(tg,"PreTrainedModel"),tg.forEach(o),ic=s(Hi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Hi.forEach(o),lc=f(de),Bo=i(de,"P",{});var Ri=l(Bo);dc=s(Ri,"This model is a PyTorch "),Ho=i(Ri,"A",{href:!0,rel:!0});var og=l(Ho);cc=s(og,"torch.nn.Module"),og.forEach(o),pc=s(Ri,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ri.forEach(o),hc=f(de),ne=i(de,"DIV",{class:!0});var ho=l(ne);T(Ro.$$.fragment,ho),uc=f(ho),Ne=i(ho,"P",{});var cs=l(Ne);mc=s(cs,"The "),On=i(cs,"A",{href:!0});var ag=l(On);fc=s(ag,"Data2VecAudioForAudioFrameClassification"),ag.forEach(o),gc=s(cs," forward method, overrides the "),Ss=i(cs,"CODE",{});var ng=l(Ss);_c=s(ng,"__call__"),ng.forEach(o),vc=s(cs," special method."),cs.forEach(o),bc=f(ho),T(wt.$$.fragment,ho),kc=f(ho),T($t.$$.fragment,ho),ho.forEach(o),de.forEach(o),_i=f(t),Oe=i(t,"H2",{class:!0});var Qi=l(Oe);xt=i(Qi,"A",{id:!0,class:!0,href:!0});var sg=l(xt);Ls=i(sg,"SPAN",{});var rg=l(Ls);T(Qo.$$.fragment,rg),rg.forEach(o),sg.forEach(o),Tc=f(Qi),Ns=i(Qi,"SPAN",{});var ig=l(Ns);wc=s(ig,"Data2VecAudioForCTC"),ig.forEach(o),Qi.forEach(o),vi=f(t),R=i(t,"DIV",{class:!0});var we=l(R);T(Go.$$.fragment,we),$c=f(we),We=i(we,"P",{});var ps=l(We);xc=s(ps,"Data2VecAudio Model with a "),Os=i(ps,"CODE",{});var lg=l(Os);yc=s(lg,"language modeling"),lg.forEach(o),Dc=s(ps,` head on top for Connectionist Temporal Classification (CTC).
Data2VecAudio was proposed in `),Xo=i(ps,"A",{href:!0,rel:!0});var dg=l(Xo);Vc=s(dg,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),dg.forEach(o),Ac=s(ps,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),ps.forEach(o),Fc=f(we),Uo=i(we,"P",{});var Gi=l(Uo);Cc=s(Gi,"This model inherits from "),Wn=i(Gi,"A",{href:!0});var cg=l(Wn);Mc=s(cg,"PreTrainedModel"),cg.forEach(o),jc=s(Gi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Gi.forEach(o),qc=f(we),Jo=i(we,"P",{});var Xi=l(Jo);zc=s(Xi,"This model is a PyTorch "),Ko=i(Xi,"A",{href:!0,rel:!0});var pg=l(Ko);Ec=s(pg,"torch.nn.Module"),pg.forEach(o),Pc=s(Xi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xi.forEach(o),Sc=f(we),X=i(we,"DIV",{class:!0});var $e=l(X);T(Yo.$$.fragment,$e),Lc=f($e),Ie=i($e,"P",{});var hs=l(Ie);Nc=s(hs,"The "),In=i(hs,"A",{href:!0});var hg=l(In);Oc=s(hg,"Data2VecAudioForCTC"),hg.forEach(o),Wc=s(hs," forward method, overrides the "),Ws=i(hs,"CODE",{});var ug=l(Ws);Ic=s(ug,"__call__"),ug.forEach(o),Bc=s(hs," special method."),hs.forEach(o),Hc=f($e),T(yt.$$.fragment,$e),Rc=f($e),T(Dt.$$.fragment,$e),Qc=f($e),T(Vt.$$.fragment,$e),$e.forEach(o),we.forEach(o),bi=f(t),Be=i(t,"H2",{class:!0});var Ui=l(Be);At=i(Ui,"A",{id:!0,class:!0,href:!0});var mg=l(At);Is=i(mg,"SPAN",{});var fg=l(Is);T(Zo.$$.fragment,fg),fg.forEach(o),mg.forEach(o),Gc=f(Ui),Bs=i(Ui,"SPAN",{});var gg=l(Bs);Xc=s(gg,"Data2VecAudioForSequenceClassification"),gg.forEach(o),Ui.forEach(o),ki=f(t),E=i(t,"DIV",{class:!0});var ce=l(E);T(ea.$$.fragment,ce),Uc=f(ce),Hs=i(ce,"P",{});var _g=l(Hs);Jc=s(_g,`Data2VecAudio Model with a sequence classification head on top (a linear layer over the pooled output) for tasks
like SUPERB Keyword Spotting.`),_g.forEach(o),Kc=f(ce),ta=i(ce,"P",{});var Ji=l(ta);Yc=s(Ji,"Data2VecAudio was proposed in "),oa=i(Ji,"A",{href:!0,rel:!0});var vg=l(oa);Zc=s(vg,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),vg.forEach(o),ep=s(Ji,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),Ji.forEach(o),tp=f(ce),aa=i(ce,"P",{});var Ki=l(aa);op=s(Ki,"This model inherits from "),Bn=i(Ki,"A",{href:!0});var bg=l(Bn);ap=s(bg,"PreTrainedModel"),bg.forEach(o),np=s(Ki,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ki.forEach(o),sp=f(ce),na=i(ce,"P",{});var Yi=l(na);rp=s(Yi,"This model is a PyTorch "),sa=i(Yi,"A",{href:!0,rel:!0});var kg=l(sa);ip=s(kg,"torch.nn.Module"),kg.forEach(o),lp=s(Yi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yi.forEach(o),dp=f(ce),U=i(ce,"DIV",{class:!0});var xe=l(U);T(ra.$$.fragment,xe),cp=f(xe),He=i(xe,"P",{});var us=l(He);pp=s(us,"The "),Hn=i(us,"A",{href:!0});var Tg=l(Hn);hp=s(Tg,"Data2VecAudioForSequenceClassification"),Tg.forEach(o),up=s(us," forward method, overrides the "),Rs=i(us,"CODE",{});var wg=l(Rs);mp=s(wg,"__call__"),wg.forEach(o),fp=s(us," special method."),us.forEach(o),gp=f(xe),T(Ft.$$.fragment,xe),_p=f(xe),T(Ct.$$.fragment,xe),vp=f(xe),T(Mt.$$.fragment,xe),xe.forEach(o),ce.forEach(o),Ti=f(t),Re=i(t,"H2",{class:!0});var Zi=l(Re);jt=i(Zi,"A",{id:!0,class:!0,href:!0});var $g=l(jt);Qs=i($g,"SPAN",{});var xg=l(Qs);T(ia.$$.fragment,xg),xg.forEach(o),$g.forEach(o),bp=f(Zi),Gs=i(Zi,"SPAN",{});var yg=l(Gs);kp=s(yg,"Data2VecAudioForXVector"),yg.forEach(o),Zi.forEach(o),wi=f(t),P=i(t,"DIV",{class:!0});var pe=l(P);T(la.$$.fragment,pe),Tp=f(pe),Xs=i(pe,"P",{});var Dg=l(Xs);wp=s(Dg,"Data2VecAudio Model with an XVector feature extraction head on top for tasks like Speaker Verification."),Dg.forEach(o),$p=f(pe),da=i(pe,"P",{});var el=l(da);xp=s(el,"Data2VecAudio was proposed in "),ca=i(el,"A",{href:!0,rel:!0});var Vg=l(ca);yp=s(Vg,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),Vg.forEach(o),Dp=s(el,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),el.forEach(o),Vp=f(pe),pa=i(pe,"P",{});var tl=l(pa);Ap=s(tl,"This model inherits from "),Rn=i(tl,"A",{href:!0});var Ag=l(Rn);Fp=s(Ag,"PreTrainedModel"),Ag.forEach(o),Cp=s(tl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),tl.forEach(o),Mp=f(pe),ha=i(pe,"P",{});var ol=l(ha);jp=s(ol,"This model is a PyTorch "),ua=i(ol,"A",{href:!0,rel:!0});var Fg=l(ua);qp=s(Fg,"torch.nn.Module"),Fg.forEach(o),zp=s(ol,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ol.forEach(o),Ep=f(pe),se=i(pe,"DIV",{class:!0});var uo=l(se);T(ma.$$.fragment,uo),Pp=f(uo),Qe=i(uo,"P",{});var ms=l(Qe);Sp=s(ms,"The "),Qn=i(ms,"A",{href:!0});var Cg=l(Qn);Lp=s(Cg,"Data2VecAudioForXVector"),Cg.forEach(o),Np=s(ms," forward method, overrides the "),Us=i(ms,"CODE",{});var Mg=l(Us);Op=s(Mg,"__call__"),Mg.forEach(o),Wp=s(ms," special method."),ms.forEach(o),Ip=f(uo),T(qt.$$.fragment,uo),Bp=f(uo),T(zt.$$.fragment,uo),uo.forEach(o),pe.forEach(o),$i=f(t),Ge=i(t,"H2",{class:!0});var al=l(Ge);Et=i(al,"A",{id:!0,class:!0,href:!0});var jg=l(Et);Js=i(jg,"SPAN",{});var qg=l(Js);T(fa.$$.fragment,qg),qg.forEach(o),jg.forEach(o),Hp=f(al),Ks=i(al,"SPAN",{});var zg=l(Ks);Rp=s(zg,"Data2VecTextModel"),zg.forEach(o),al.forEach(o),xi=f(t),j=i(t,"DIV",{class:!0});var I=l(j);T(ga.$$.fragment,I),Qp=f(I),_a=i(I,"P",{});var nl=l(_a);Gp=s(nl,`The bare Data2VecText Model for text transformer outputting raw hidden-states without any specific head on top.
Data2VecText was proposed in `),va=i(nl,"A",{href:!0,rel:!0});var Eg=l(va);Xp=s(Eg,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),Eg.forEach(o),Up=s(nl,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),nl.forEach(o),Jp=f(I),ba=i(I,"P",{});var sl=l(ba);Kp=s(sl,"This model inherits from "),Gn=i(sl,"A",{href:!0});var Pg=l(Gn);Yp=s(Pg,"PreTrainedModel"),Pg.forEach(o),Zp=s(sl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sl.forEach(o),eh=f(I),ka=i(I,"P",{});var rl=l(ka);th=s(rl,"This model is also a PyTorch "),Ta=i(rl,"A",{href:!0,rel:!0});var Sg=l(Ta);oh=s(Sg,"torch.nn.Module"),Sg.forEach(o),ah=s(rl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rl.forEach(o),nh=f(I),wa=i(I,"P",{});var il=l(wa);sh=s(il,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Ys=i(il,"EM",{});var Lg=l(Ys);rh=s(Lg,`Attention is
all you need`),Lg.forEach(o),ih=s(il,`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),il.forEach(o),lh=f(I),S=i(I,"P",{});var Z=l(S);dh=s(Z,"To behave as an decoder the model needs to be initialized with the "),Zs=i(Z,"CODE",{});var Ng=l(Zs);ch=s(Ng,"is_decoder"),Ng.forEach(o),ph=s(Z,` argument of the configuration set
to `),er=i(Z,"CODE",{});var Og=l(er);hh=s(Og,"True"),Og.forEach(o),uh=s(Z,". To be used in a Seq2Seq model, the model needs to initialized with both "),tr=i(Z,"CODE",{});var Wg=l(tr);mh=s(Wg,"is_decoder"),Wg.forEach(o),fh=s(Z,` argument and
`),or=i(Z,"CODE",{});var Ig=l(or);gh=s(Ig,"add_cross_attention"),Ig.forEach(o),_h=s(Z," set to "),ar=i(Z,"CODE",{});var Bg=l(ar);vh=s(Bg,"True"),Bg.forEach(o),bh=s(Z,"; an "),nr=i(Z,"CODE",{});var Hg=l(nr);kh=s(Hg,"encoder_hidden_states"),Hg.forEach(o),Th=s(Z," is then expected as an input to the forward pass."),Z.forEach(o),wh=f(I),Pt=i(I,"P",{});var ti=l(Pt);$h=s(ti,".. _"),sr=i(ti,"EM",{});var Rg=l(sr);xh=s(Rg,"Attention is all you need"),Rg.forEach(o),yh=s(ti,": "),$a=i(ti,"A",{href:!0,rel:!0});var Qg=l($a);Dh=s(Qg,"https://arxiv.org/abs/1706.03762"),Qg.forEach(o),ti.forEach(o),Vh=f(I),re=i(I,"DIV",{class:!0});var mo=l(re);T(xa.$$.fragment,mo),Ah=f(mo),Xe=i(mo,"P",{});var fs=l(Xe);Fh=s(fs,"The "),Xn=i(fs,"A",{href:!0});var Gg=l(Xn);Ch=s(Gg,"Data2VecTextModel"),Gg.forEach(o),Mh=s(fs," forward method, overrides the "),rr=i(fs,"CODE",{});var Xg=l(rr);jh=s(Xg,"__call__"),Xg.forEach(o),qh=s(fs," special method."),fs.forEach(o),zh=f(mo),T(St.$$.fragment,mo),Eh=f(mo),T(Lt.$$.fragment,mo),mo.forEach(o),I.forEach(o),yi=f(t),Ue=i(t,"H2",{class:!0});var ll=l(Ue);Nt=i(ll,"A",{id:!0,class:!0,href:!0});var Ug=l(Nt);ir=i(Ug,"SPAN",{});var Jg=l(ir);T(ya.$$.fragment,Jg),Jg.forEach(o),Ug.forEach(o),Ph=f(ll),lr=i(ll,"SPAN",{});var Kg=l(lr);Sh=s(Kg,"Data2VecTextForCausalLM"),Kg.forEach(o),ll.forEach(o),Di=f(t),Q=i(t,"DIV",{class:!0});var ye=l(Q);T(Da.$$.fragment,ye),Lh=f(ye),Je=i(ye,"P",{});var gs=l(Je);Nh=s(gs,"Data2VecText Model with a "),dr=i(gs,"CODE",{});var Yg=l(dr);Oh=s(Yg,"language modeling"),Yg.forEach(o),Wh=s(gs,` head on top for CLM fine-tuning.
Data2VecText was proposed in `),Va=i(gs,"A",{href:!0,rel:!0});var Zg=l(Va);Ih=s(Zg,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),Zg.forEach(o),Bh=s(gs,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),gs.forEach(o),Hh=f(ye),Aa=i(ye,"P",{});var dl=l(Aa);Rh=s(dl,"This model inherits from "),Un=i(dl,"A",{href:!0});var e_=l(Un);Qh=s(e_,"PreTrainedModel"),e_.forEach(o),Gh=s(dl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dl.forEach(o),Xh=f(ye),Fa=i(ye,"P",{});var cl=l(Fa);Uh=s(cl,"This model is also a PyTorch "),Ca=i(cl,"A",{href:!0,rel:!0});var t_=l(Ca);Jh=s(t_,"torch.nn.Module"),t_.forEach(o),Kh=s(cl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cl.forEach(o),Yh=f(ye),ie=i(ye,"DIV",{class:!0});var fo=l(ie);T(Ma.$$.fragment,fo),Zh=f(fo),Ke=i(fo,"P",{});var _s=l(Ke);eu=s(_s,"The "),Jn=i(_s,"A",{href:!0});var o_=l(Jn);tu=s(o_,"Data2VecTextForCausalLM"),o_.forEach(o),ou=s(_s," forward method, overrides the "),cr=i(_s,"CODE",{});var a_=l(cr);au=s(a_,"__call__"),a_.forEach(o),nu=s(_s," special method."),_s.forEach(o),su=f(fo),T(Ot.$$.fragment,fo),ru=f(fo),T(Wt.$$.fragment,fo),fo.forEach(o),ye.forEach(o),Vi=f(t),Ye=i(t,"H2",{class:!0});var pl=l(Ye);It=i(pl,"A",{id:!0,class:!0,href:!0});var n_=l(It);pr=i(n_,"SPAN",{});var s_=l(pr);T(ja.$$.fragment,s_),s_.forEach(o),n_.forEach(o),iu=f(pl),hr=i(pl,"SPAN",{});var r_=l(hr);lu=s(r_,"Data2VecTextForMaskedLM"),r_.forEach(o),pl.forEach(o),Ai=f(t),G=i(t,"DIV",{class:!0});var De=l(G);T(qa.$$.fragment,De),du=f(De),Ze=i(De,"P",{});var vs=l(Ze);cu=s(vs,"data2vec Model with a "),ur=i(vs,"CODE",{});var i_=l(ur);pu=s(i_,"language modeling"),i_.forEach(o),hu=s(vs,` head on top.
Data2VecText was proposed in `),za=i(vs,"A",{href:!0,rel:!0});var l_=l(za);uu=s(l_,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),l_.forEach(o),mu=s(vs,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),vs.forEach(o),fu=f(De),Ea=i(De,"P",{});var hl=l(Ea);gu=s(hl,"This model inherits from "),Kn=i(hl,"A",{href:!0});var d_=l(Kn);_u=s(d_,"PreTrainedModel"),d_.forEach(o),vu=s(hl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hl.forEach(o),bu=f(De),Pa=i(De,"P",{});var ul=l(Pa);ku=s(ul,"This model is also a PyTorch "),Sa=i(ul,"A",{href:!0,rel:!0});var c_=l(Sa);Tu=s(c_,"torch.nn.Module"),c_.forEach(o),wu=s(ul,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ul.forEach(o),$u=f(De),J=i(De,"DIV",{class:!0});var Ve=l(J);T(La.$$.fragment,Ve),xu=f(Ve),et=i(Ve,"P",{});var bs=l(et);yu=s(bs,"The "),Yn=i(bs,"A",{href:!0});var p_=l(Yn);Du=s(p_,"Data2VecTextForMaskedLM"),p_.forEach(o),Vu=s(bs," forward method, overrides the "),mr=i(bs,"CODE",{});var h_=l(mr);Au=s(h_,"__call__"),h_.forEach(o),Fu=s(bs," special method."),bs.forEach(o),Cu=f(Ve),T(Bt.$$.fragment,Ve),Mu=f(Ve),T(Ht.$$.fragment,Ve),ju=f(Ve),T(Rt.$$.fragment,Ve),Ve.forEach(o),De.forEach(o),Fi=f(t),tt=i(t,"H2",{class:!0});var ml=l(tt);Qt=i(ml,"A",{id:!0,class:!0,href:!0});var u_=l(Qt);fr=i(u_,"SPAN",{});var m_=l(fr);T(Na.$$.fragment,m_),m_.forEach(o),u_.forEach(o),qu=f(ml),gr=i(ml,"SPAN",{});var f_=l(gr);zu=s(f_,"Data2VecTextForSequenceClassification"),f_.forEach(o),ml.forEach(o),Ci=f(t),L=i(t,"DIV",{class:!0});var he=l(L);T(Oa.$$.fragment,he),Eu=f(he),_r=i(he,"P",{});var g_=l(_r);Pu=s(g_,`Data2VecText Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),g_.forEach(o),Su=f(he),Wa=i(he,"P",{});var fl=l(Wa);Lu=s(fl,"Data2VecText was proposed in "),Ia=i(fl,"A",{href:!0,rel:!0});var __=l(Ia);Nu=s(__,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),__.forEach(o),Ou=s(fl,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),fl.forEach(o),Wu=f(he),Ba=i(he,"P",{});var gl=l(Ba);Iu=s(gl,"This model inherits from "),Zn=i(gl,"A",{href:!0});var v_=l(Zn);Bu=s(v_,"PreTrainedModel"),v_.forEach(o),Hu=s(gl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gl.forEach(o),Ru=f(he),Ha=i(he,"P",{});var _l=l(Ha);Qu=s(_l,"This model is also a PyTorch "),Ra=i(_l,"A",{href:!0,rel:!0});var b_=l(Ra);Gu=s(b_,"torch.nn.Module"),b_.forEach(o),Xu=s(_l,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_l.forEach(o),Uu=f(he),q=i(he,"DIV",{class:!0});var ee=l(q);T(Qa.$$.fragment,ee),Ju=f(ee),ot=i(ee,"P",{});var ks=l(ot);Ku=s(ks,"The "),es=i(ks,"A",{href:!0});var k_=l(es);Yu=s(k_,"Data2VecTextForSequenceClassification"),k_.forEach(o),Zu=s(ks," forward method, overrides the "),vr=i(ks,"CODE",{});var T_=l(vr);em=s(T_,"__call__"),T_.forEach(o),tm=s(ks," special method."),ks.forEach(o),om=f(ee),T(Gt.$$.fragment,ee),am=f(ee),T(Xt.$$.fragment,ee),nm=f(ee),T(Ut.$$.fragment,ee),sm=f(ee),T(Jt.$$.fragment,ee),rm=f(ee),T(Kt.$$.fragment,ee),ee.forEach(o),he.forEach(o),Mi=f(t),at=i(t,"H2",{class:!0});var vl=l(at);Yt=i(vl,"A",{id:!0,class:!0,href:!0});var w_=l(Yt);br=i(w_,"SPAN",{});var $_=l(br);T(Ga.$$.fragment,$_),$_.forEach(o),w_.forEach(o),im=f(vl),kr=i(vl,"SPAN",{});var x_=l(kr);lm=s(x_,"Data2VecTextForMultipleChoice"),x_.forEach(o),vl.forEach(o),ji=f(t),N=i(t,"DIV",{class:!0});var ue=l(N);T(Xa.$$.fragment,ue),dm=f(ue),Tr=i(ue,"P",{});var y_=l(Tr);cm=s(y_,`Data2VecText Model with a multiple choice classification head on top (a linear layer on top of the pooled output
and a softmax) e.g. for RocStories/SWAG tasks.`),y_.forEach(o),pm=f(ue),Ua=i(ue,"P",{});var bl=l(Ua);hm=s(bl,"Data2VecText was proposed in "),Ja=i(bl,"A",{href:!0,rel:!0});var D_=l(Ja);um=s(D_,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),D_.forEach(o),mm=s(bl,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),bl.forEach(o),fm=f(ue),Ka=i(ue,"P",{});var kl=l(Ka);gm=s(kl,"This model inherits from "),ts=i(kl,"A",{href:!0});var V_=l(ts);_m=s(V_,"PreTrainedModel"),V_.forEach(o),vm=s(kl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kl.forEach(o),bm=f(ue),Ya=i(ue,"P",{});var Tl=l(Ya);km=s(Tl,"This model is also a PyTorch "),Za=i(Tl,"A",{href:!0,rel:!0});var A_=l(Za);Tm=s(A_,"torch.nn.Module"),A_.forEach(o),wm=s(Tl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tl.forEach(o),$m=f(ue),le=i(ue,"DIV",{class:!0});var go=l(le);T(en.$$.fragment,go),xm=f(go),nt=i(go,"P",{});var Ts=l(nt);ym=s(Ts,"The "),os=i(Ts,"A",{href:!0});var F_=l(os);Dm=s(F_,"Data2VecTextForMultipleChoice"),F_.forEach(o),Vm=s(Ts," forward method, overrides the "),wr=i(Ts,"CODE",{});var C_=l(wr);Am=s(C_,"__call__"),C_.forEach(o),Fm=s(Ts," special method."),Ts.forEach(o),Cm=f(go),T(Zt.$$.fragment,go),Mm=f(go),T(eo.$$.fragment,go),go.forEach(o),ue.forEach(o),qi=f(t),st=i(t,"H2",{class:!0});var wl=l(st);to=i(wl,"A",{id:!0,class:!0,href:!0});var M_=l(to);$r=i(M_,"SPAN",{});var j_=l($r);T(tn.$$.fragment,j_),j_.forEach(o),M_.forEach(o),jm=f(wl),xr=i(wl,"SPAN",{});var q_=l(xr);qm=s(q_,"Data2VecTextForTokenClassification"),q_.forEach(o),wl.forEach(o),zi=f(t),O=i(t,"DIV",{class:!0});var me=l(O);T(on.$$.fragment,me),zm=f(me),yr=i(me,"P",{});var z_=l(yr);Em=s(z_,`Data2VecText Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),z_.forEach(o),Pm=f(me),an=i(me,"P",{});var $l=l(an);Sm=s($l,"Data2VecText was proposed in "),nn=i($l,"A",{href:!0,rel:!0});var E_=l(nn);Lm=s(E_,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),E_.forEach(o),Nm=s($l,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),$l.forEach(o),Om=f(me),sn=i(me,"P",{});var xl=l(sn);Wm=s(xl,"This model inherits from "),as=i(xl,"A",{href:!0});var P_=l(as);Im=s(P_,"PreTrainedModel"),P_.forEach(o),Bm=s(xl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xl.forEach(o),Hm=f(me),rn=i(me,"P",{});var yl=l(rn);Rm=s(yl,"This model is also a PyTorch "),ln=i(yl,"A",{href:!0,rel:!0});var S_=l(ln);Qm=s(S_,"torch.nn.Module"),S_.forEach(o),Gm=s(yl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yl.forEach(o),Xm=f(me),K=i(me,"DIV",{class:!0});var Ae=l(K);T(dn.$$.fragment,Ae),Um=f(Ae),rt=i(Ae,"P",{});var ws=l(rt);Jm=s(ws,"The "),ns=i(ws,"A",{href:!0});var L_=l(ns);Km=s(L_,"Data2VecTextForTokenClassification"),L_.forEach(o),Ym=s(ws," forward method, overrides the "),Dr=i(ws,"CODE",{});var N_=l(Dr);Zm=s(N_,"__call__"),N_.forEach(o),ef=s(ws," special method."),ws.forEach(o),tf=f(Ae),T(oo.$$.fragment,Ae),of=f(Ae),T(ao.$$.fragment,Ae),af=f(Ae),T(no.$$.fragment,Ae),Ae.forEach(o),me.forEach(o),Ei=f(t),it=i(t,"H2",{class:!0});var Dl=l(it);so=i(Dl,"A",{id:!0,class:!0,href:!0});var O_=l(so);Vr=i(O_,"SPAN",{});var W_=l(Vr);T(cn.$$.fragment,W_),W_.forEach(o),O_.forEach(o),nf=f(Dl),Ar=i(Dl,"SPAN",{});var I_=l(Ar);sf=s(I_,"Data2VecTextForQuestionAnswering"),I_.forEach(o),Dl.forEach(o),Pi=f(t),W=i(t,"DIV",{class:!0});var fe=l(W);T(pn.$$.fragment,fe),rf=f(fe),lt=i(fe,"P",{});var $s=l(lt);lf=s($s,`Data2VecText Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Fr=i($s,"CODE",{});var B_=l(Fr);df=s(B_,"span start logits"),B_.forEach(o),cf=s($s," and "),Cr=i($s,"CODE",{});var H_=l(Cr);pf=s(H_,"span end logits"),H_.forEach(o),hf=s($s,")."),$s.forEach(o),uf=f(fe),hn=i(fe,"P",{});var Vl=l(hn);mf=s(Vl,"Data2VecText was proposed in "),un=i(Vl,"A",{href:!0,rel:!0});var R_=l(un);ff=s(R_,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),R_.forEach(o),gf=s(Vl,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),Vl.forEach(o),_f=f(fe),mn=i(fe,"P",{});var Al=l(mn);vf=s(Al,"This model inherits from "),ss=i(Al,"A",{href:!0});var Q_=l(ss);bf=s(Q_,"PreTrainedModel"),Q_.forEach(o),kf=s(Al,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Al.forEach(o),Tf=f(fe),fn=i(fe,"P",{});var Fl=l(fn);wf=s(Fl,"This model is also a PyTorch "),gn=i(Fl,"A",{href:!0,rel:!0});var G_=l(gn);$f=s(G_,"torch.nn.Module"),G_.forEach(o),xf=s(Fl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fl.forEach(o),yf=f(fe),Y=i(fe,"DIV",{class:!0});var Fe=l(Y);T(_n.$$.fragment,Fe),Df=f(Fe),dt=i(Fe,"P",{});var xs=l(dt);Vf=s(xs,"The "),rs=i(xs,"A",{href:!0});var X_=l(rs);Af=s(X_,"Data2VecTextForQuestionAnswering"),X_.forEach(o),Ff=s(xs," forward method, overrides the "),Mr=i(xs,"CODE",{});var U_=l(Mr);Cf=s(U_,"__call__"),U_.forEach(o),Mf=s(xs," special method."),xs.forEach(o),jf=f(Fe),T(ro.$$.fragment,Fe),qf=f(Fe),T(io.$$.fragment,Fe),zf=f(Fe),T(lo.$$.fragment,Fe),Fe.forEach(o),fe.forEach(o),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(P2)),u(h,"id","data2vec"),u(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(h,"href","#data2vec"),u(c,"class","relative group"),u(ht,"id","overview"),u(ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ht,"href","#overview"),u(Ce,"class","relative group"),u(vo,"href","https://arxiv.org/pdf/2202.03555"),u(vo,"rel","nofollow"),u(ko,"href","http://www.github.com/pytorch/fairseq/tree/master/examples/data2vec"),u(ko,"rel","nofollow"),u(Fn,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaModel"),u(wo,"href","https://huggingface.co/edugp"),u(wo,"rel","nofollow"),u($o,"href","https://github.com/pytorch/fairseq/tree/main/examples/data2vec"),u($o,"rel","nofollow"),u(mt,"id","transformers.Data2VecTextConfig"),u(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mt,"href","#transformers.Data2VecTextConfig"),u(Me,"class","relative group"),u(Cn,"href","/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextModel"),u(Mn,"href","/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextModel"),u(Do,"href","https://huggingface.co/facebook/data2vec-text-base"),u(Do,"rel","nofollow"),u(jn,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(qn,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gt,"id","transformers.Data2VecAudioConfig"),u(gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(gt,"href","#transformers.Data2VecAudioConfig"),u(qe,"class","relative group"),u(zn,"href","/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioModel"),u(Fo,"href","https://huggingface.co/facebook/data2vec-audio-base-960h"),u(Fo,"rel","nofollow"),u(En,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(Pn,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vt,"id","transformers.Data2VecAudioModel"),u(vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(vt,"href","#transformers.Data2VecAudioModel"),u(Pe,"class","relative group"),u(qo,"href","https://arxiv.org/pdf/2202.03555"),u(qo,"rel","nofollow"),u(Sn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),u(Po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Po,"rel","nofollow"),u(Ln,"href","/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioModel"),u(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tt,"id","transformers.Data2VecAudioForAudioFrameClassification"),u(Tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Tt,"href","#transformers.Data2VecAudioForAudioFrameClassification"),u(Le,"class","relative group"),u(Wo,"href","https://arxiv.org/pdf/2202.03555"),u(Wo,"rel","nofollow"),u(Nn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),u(Ho,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ho,"rel","nofollow"),u(On,"href","/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioForAudioFrameClassification"),u(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xt,"id","transformers.Data2VecAudioForCTC"),u(xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xt,"href","#transformers.Data2VecAudioForCTC"),u(Oe,"class","relative group"),u(Xo,"href","https://arxiv.org/pdf/2202.03555"),u(Xo,"rel","nofollow"),u(Wn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),u(Ko,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ko,"rel","nofollow"),u(In,"href","/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioForCTC"),u(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(At,"id","transformers.Data2VecAudioForSequenceClassification"),u(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(At,"href","#transformers.Data2VecAudioForSequenceClassification"),u(Be,"class","relative group"),u(oa,"href","https://arxiv.org/pdf/2202.03555"),u(oa,"rel","nofollow"),u(Bn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),u(sa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(sa,"rel","nofollow"),u(Hn,"href","/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioForSequenceClassification"),u(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jt,"id","transformers.Data2VecAudioForXVector"),u(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jt,"href","#transformers.Data2VecAudioForXVector"),u(Re,"class","relative group"),u(ca,"href","https://arxiv.org/pdf/2202.03555"),u(ca,"rel","nofollow"),u(Rn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),u(ua,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ua,"rel","nofollow"),u(Qn,"href","/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecAudioForXVector"),u(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Et,"id","transformers.Data2VecTextModel"),u(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Et,"href","#transformers.Data2VecTextModel"),u(Ge,"class","relative group"),u(va,"href","https://arxiv.org/pdf/2202.03555"),u(va,"rel","nofollow"),u(Gn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),u(Ta,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ta,"rel","nofollow"),u($a,"href","https://arxiv.org/abs/1706.03762"),u($a,"rel","nofollow"),u(Xn,"href","/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextModel"),u(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nt,"id","transformers.Data2VecTextForCausalLM"),u(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Nt,"href","#transformers.Data2VecTextForCausalLM"),u(Ue,"class","relative group"),u(Va,"href","https://arxiv.org/pdf/2202.03555"),u(Va,"rel","nofollow"),u(Un,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),u(Ca,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ca,"rel","nofollow"),u(Jn,"href","/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextForCausalLM"),u(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(It,"id","transformers.Data2VecTextForMaskedLM"),u(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(It,"href","#transformers.Data2VecTextForMaskedLM"),u(Ye,"class","relative group"),u(za,"href","https://arxiv.org/pdf/2202.03555"),u(za,"rel","nofollow"),u(Kn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),u(Sa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Sa,"rel","nofollow"),u(Yn,"href","/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextForMaskedLM"),u(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qt,"id","transformers.Data2VecTextForSequenceClassification"),u(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qt,"href","#transformers.Data2VecTextForSequenceClassification"),u(tt,"class","relative group"),u(Ia,"href","https://arxiv.org/pdf/2202.03555"),u(Ia,"rel","nofollow"),u(Zn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),u(Ra,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ra,"rel","nofollow"),u(es,"href","/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextForSequenceClassification"),u(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yt,"id","transformers.Data2VecTextForMultipleChoice"),u(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Yt,"href","#transformers.Data2VecTextForMultipleChoice"),u(at,"class","relative group"),u(Ja,"href","https://arxiv.org/pdf/2202.03555"),u(Ja,"rel","nofollow"),u(ts,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),u(Za,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Za,"rel","nofollow"),u(os,"href","/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextForMultipleChoice"),u(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(to,"id","transformers.Data2VecTextForTokenClassification"),u(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(to,"href","#transformers.Data2VecTextForTokenClassification"),u(st,"class","relative group"),u(nn,"href","https://arxiv.org/pdf/2202.03555"),u(nn,"rel","nofollow"),u(as,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),u(ln,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ln,"rel","nofollow"),u(ns,"href","/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextForTokenClassification"),u(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(so,"id","transformers.Data2VecTextForQuestionAnswering"),u(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(so,"href","#transformers.Data2VecTextForQuestionAnswering"),u(it,"class","relative group"),u(un,"href","https://arxiv.org/pdf/2202.03555"),u(un,"rel","nofollow"),u(ss,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),u(gn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(gn,"rel","nofollow"),u(rs,"href","/docs/transformers/v4.18.0/en/model_doc/data2vec#transformers.Data2VecTextForQuestionAnswering"),u(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,_){e(document.head,d),b(t,g,_),b(t,c,_),e(c,h),e(h,v),w(a,v,null),e(c,p),e(c,V),e(V,Cl),b(t,oi,_),b(t,Ce,_),e(Ce,ht),e(ht,ys),w(_o,ys,null),e(Ce,Ml),e(Ce,Ds),e(Ds,jl),b(t,ai,_),b(t,ut,_),e(ut,ql),e(ut,vo),e(vo,zl),e(ut,El),b(t,ni,_),b(t,yn,_),e(yn,Pl),b(t,si,_),b(t,Dn,_),e(Dn,bo),e(bo,Sl),e(bo,ko),e(ko,Ll),e(bo,Nl),b(t,ri,_),b(t,Vn,_),e(Vn,Ol),b(t,ii,_),b(t,An,_),e(An,To),e(To,Wl),e(To,Fn),e(Fn,Il),e(To,Bl),b(t,li,_),b(t,ke,_),e(ke,Hl),e(ke,wo),e(wo,Rl),e(ke,Ql),e(ke,$o),e($o,Gl),e(ke,Xl),b(t,di,_),b(t,Me,_),e(Me,mt),e(mt,Vs),w(xo,Vs,null),e(Me,Ul),e(Me,As),e(As,Jl),b(t,ci,_),b(t,te,_),w(yo,te,null),e(te,Kl),e(te,_e),e(_e,Yl),e(_e,Cn),e(Cn,Zl),e(_e,ed),e(_e,Mn),e(Mn,td),e(_e,od),e(_e,Do),e(Do,ad),e(_e,nd),e(te,sd),e(te,je),e(je,rd),e(je,jn),e(jn,id),e(je,ld),e(je,qn),e(qn,dd),e(je,cd),e(te,pd),w(ft,te,null),b(t,pi,_),b(t,qe,_),e(qe,gt),e(gt,Fs),w(Vo,Fs,null),e(qe,hd),e(qe,Cs),e(Cs,ud),b(t,hi,_),b(t,oe,_),w(Ao,oe,null),e(oe,md),e(oe,ze),e(ze,fd),e(ze,zn),e(zn,gd),e(ze,_d),e(ze,Fo),e(Fo,vd),e(ze,bd),e(oe,kd),e(oe,Ee),e(Ee,Td),e(Ee,En),e(En,wd),e(Ee,$d),e(Ee,Pn),e(Pn,xd),e(Ee,yd),e(oe,Dd),w(_t,oe,null),b(t,ui,_),b(t,Pe,_),e(Pe,vt),e(vt,Ms),w(Co,Ms,null),e(Pe,Vd),e(Pe,js),e(js,Ad),b(t,mi,_),b(t,H,_),w(Mo,H,null),e(H,Fd),e(H,jo),e(jo,Cd),e(jo,qo),e(qo,Md),e(jo,jd),e(H,qd),e(H,zo),e(zo,zd),e(zo,Sn),e(Sn,Ed),e(zo,Pd),e(H,Sd),e(H,Eo),e(Eo,Ld),e(Eo,Po),e(Po,Nd),e(Eo,Od),e(H,Wd),e(H,ae),w(So,ae,null),e(ae,Id),e(ae,Se),e(Se,Bd),e(Se,Ln),e(Ln,Hd),e(Se,Rd),e(Se,qs),e(qs,Qd),e(Se,Gd),e(ae,Xd),w(bt,ae,null),e(ae,Ud),w(kt,ae,null),b(t,fi,_),b(t,Le,_),e(Le,Tt),e(Tt,zs),w(Lo,zs,null),e(Le,Jd),e(Le,Es),e(Es,Kd),b(t,gi,_),b(t,z,_),w(No,z,null),e(z,Yd),e(z,Ps),e(Ps,Zd),e(z,ec),e(z,Oo),e(Oo,tc),e(Oo,Wo),e(Wo,oc),e(Oo,ac),e(z,nc),e(z,Io),e(Io,sc),e(Io,Nn),e(Nn,rc),e(Io,ic),e(z,lc),e(z,Bo),e(Bo,dc),e(Bo,Ho),e(Ho,cc),e(Bo,pc),e(z,hc),e(z,ne),w(Ro,ne,null),e(ne,uc),e(ne,Ne),e(Ne,mc),e(Ne,On),e(On,fc),e(Ne,gc),e(Ne,Ss),e(Ss,_c),e(Ne,vc),e(ne,bc),w(wt,ne,null),e(ne,kc),w($t,ne,null),b(t,_i,_),b(t,Oe,_),e(Oe,xt),e(xt,Ls),w(Qo,Ls,null),e(Oe,Tc),e(Oe,Ns),e(Ns,wc),b(t,vi,_),b(t,R,_),w(Go,R,null),e(R,$c),e(R,We),e(We,xc),e(We,Os),e(Os,yc),e(We,Dc),e(We,Xo),e(Xo,Vc),e(We,Ac),e(R,Fc),e(R,Uo),e(Uo,Cc),e(Uo,Wn),e(Wn,Mc),e(Uo,jc),e(R,qc),e(R,Jo),e(Jo,zc),e(Jo,Ko),e(Ko,Ec),e(Jo,Pc),e(R,Sc),e(R,X),w(Yo,X,null),e(X,Lc),e(X,Ie),e(Ie,Nc),e(Ie,In),e(In,Oc),e(Ie,Wc),e(Ie,Ws),e(Ws,Ic),e(Ie,Bc),e(X,Hc),w(yt,X,null),e(X,Rc),w(Dt,X,null),e(X,Qc),w(Vt,X,null),b(t,bi,_),b(t,Be,_),e(Be,At),e(At,Is),w(Zo,Is,null),e(Be,Gc),e(Be,Bs),e(Bs,Xc),b(t,ki,_),b(t,E,_),w(ea,E,null),e(E,Uc),e(E,Hs),e(Hs,Jc),e(E,Kc),e(E,ta),e(ta,Yc),e(ta,oa),e(oa,Zc),e(ta,ep),e(E,tp),e(E,aa),e(aa,op),e(aa,Bn),e(Bn,ap),e(aa,np),e(E,sp),e(E,na),e(na,rp),e(na,sa),e(sa,ip),e(na,lp),e(E,dp),e(E,U),w(ra,U,null),e(U,cp),e(U,He),e(He,pp),e(He,Hn),e(Hn,hp),e(He,up),e(He,Rs),e(Rs,mp),e(He,fp),e(U,gp),w(Ft,U,null),e(U,_p),w(Ct,U,null),e(U,vp),w(Mt,U,null),b(t,Ti,_),b(t,Re,_),e(Re,jt),e(jt,Qs),w(ia,Qs,null),e(Re,bp),e(Re,Gs),e(Gs,kp),b(t,wi,_),b(t,P,_),w(la,P,null),e(P,Tp),e(P,Xs),e(Xs,wp),e(P,$p),e(P,da),e(da,xp),e(da,ca),e(ca,yp),e(da,Dp),e(P,Vp),e(P,pa),e(pa,Ap),e(pa,Rn),e(Rn,Fp),e(pa,Cp),e(P,Mp),e(P,ha),e(ha,jp),e(ha,ua),e(ua,qp),e(ha,zp),e(P,Ep),e(P,se),w(ma,se,null),e(se,Pp),e(se,Qe),e(Qe,Sp),e(Qe,Qn),e(Qn,Lp),e(Qe,Np),e(Qe,Us),e(Us,Op),e(Qe,Wp),e(se,Ip),w(qt,se,null),e(se,Bp),w(zt,se,null),b(t,$i,_),b(t,Ge,_),e(Ge,Et),e(Et,Js),w(fa,Js,null),e(Ge,Hp),e(Ge,Ks),e(Ks,Rp),b(t,xi,_),b(t,j,_),w(ga,j,null),e(j,Qp),e(j,_a),e(_a,Gp),e(_a,va),e(va,Xp),e(_a,Up),e(j,Jp),e(j,ba),e(ba,Kp),e(ba,Gn),e(Gn,Yp),e(ba,Zp),e(j,eh),e(j,ka),e(ka,th),e(ka,Ta),e(Ta,oh),e(ka,ah),e(j,nh),e(j,wa),e(wa,sh),e(wa,Ys),e(Ys,rh),e(wa,ih),e(j,lh),e(j,S),e(S,dh),e(S,Zs),e(Zs,ch),e(S,ph),e(S,er),e(er,hh),e(S,uh),e(S,tr),e(tr,mh),e(S,fh),e(S,or),e(or,gh),e(S,_h),e(S,ar),e(ar,vh),e(S,bh),e(S,nr),e(nr,kh),e(S,Th),e(j,wh),e(j,Pt),e(Pt,$h),e(Pt,sr),e(sr,xh),e(Pt,yh),e(Pt,$a),e($a,Dh),e(j,Vh),e(j,re),w(xa,re,null),e(re,Ah),e(re,Xe),e(Xe,Fh),e(Xe,Xn),e(Xn,Ch),e(Xe,Mh),e(Xe,rr),e(rr,jh),e(Xe,qh),e(re,zh),w(St,re,null),e(re,Eh),w(Lt,re,null),b(t,yi,_),b(t,Ue,_),e(Ue,Nt),e(Nt,ir),w(ya,ir,null),e(Ue,Ph),e(Ue,lr),e(lr,Sh),b(t,Di,_),b(t,Q,_),w(Da,Q,null),e(Q,Lh),e(Q,Je),e(Je,Nh),e(Je,dr),e(dr,Oh),e(Je,Wh),e(Je,Va),e(Va,Ih),e(Je,Bh),e(Q,Hh),e(Q,Aa),e(Aa,Rh),e(Aa,Un),e(Un,Qh),e(Aa,Gh),e(Q,Xh),e(Q,Fa),e(Fa,Uh),e(Fa,Ca),e(Ca,Jh),e(Fa,Kh),e(Q,Yh),e(Q,ie),w(Ma,ie,null),e(ie,Zh),e(ie,Ke),e(Ke,eu),e(Ke,Jn),e(Jn,tu),e(Ke,ou),e(Ke,cr),e(cr,au),e(Ke,nu),e(ie,su),w(Ot,ie,null),e(ie,ru),w(Wt,ie,null),b(t,Vi,_),b(t,Ye,_),e(Ye,It),e(It,pr),w(ja,pr,null),e(Ye,iu),e(Ye,hr),e(hr,lu),b(t,Ai,_),b(t,G,_),w(qa,G,null),e(G,du),e(G,Ze),e(Ze,cu),e(Ze,ur),e(ur,pu),e(Ze,hu),e(Ze,za),e(za,uu),e(Ze,mu),e(G,fu),e(G,Ea),e(Ea,gu),e(Ea,Kn),e(Kn,_u),e(Ea,vu),e(G,bu),e(G,Pa),e(Pa,ku),e(Pa,Sa),e(Sa,Tu),e(Pa,wu),e(G,$u),e(G,J),w(La,J,null),e(J,xu),e(J,et),e(et,yu),e(et,Yn),e(Yn,Du),e(et,Vu),e(et,mr),e(mr,Au),e(et,Fu),e(J,Cu),w(Bt,J,null),e(J,Mu),w(Ht,J,null),e(J,ju),w(Rt,J,null),b(t,Fi,_),b(t,tt,_),e(tt,Qt),e(Qt,fr),w(Na,fr,null),e(tt,qu),e(tt,gr),e(gr,zu),b(t,Ci,_),b(t,L,_),w(Oa,L,null),e(L,Eu),e(L,_r),e(_r,Pu),e(L,Su),e(L,Wa),e(Wa,Lu),e(Wa,Ia),e(Ia,Nu),e(Wa,Ou),e(L,Wu),e(L,Ba),e(Ba,Iu),e(Ba,Zn),e(Zn,Bu),e(Ba,Hu),e(L,Ru),e(L,Ha),e(Ha,Qu),e(Ha,Ra),e(Ra,Gu),e(Ha,Xu),e(L,Uu),e(L,q),w(Qa,q,null),e(q,Ju),e(q,ot),e(ot,Ku),e(ot,es),e(es,Yu),e(ot,Zu),e(ot,vr),e(vr,em),e(ot,tm),e(q,om),w(Gt,q,null),e(q,am),w(Xt,q,null),e(q,nm),w(Ut,q,null),e(q,sm),w(Jt,q,null),e(q,rm),w(Kt,q,null),b(t,Mi,_),b(t,at,_),e(at,Yt),e(Yt,br),w(Ga,br,null),e(at,im),e(at,kr),e(kr,lm),b(t,ji,_),b(t,N,_),w(Xa,N,null),e(N,dm),e(N,Tr),e(Tr,cm),e(N,pm),e(N,Ua),e(Ua,hm),e(Ua,Ja),e(Ja,um),e(Ua,mm),e(N,fm),e(N,Ka),e(Ka,gm),e(Ka,ts),e(ts,_m),e(Ka,vm),e(N,bm),e(N,Ya),e(Ya,km),e(Ya,Za),e(Za,Tm),e(Ya,wm),e(N,$m),e(N,le),w(en,le,null),e(le,xm),e(le,nt),e(nt,ym),e(nt,os),e(os,Dm),e(nt,Vm),e(nt,wr),e(wr,Am),e(nt,Fm),e(le,Cm),w(Zt,le,null),e(le,Mm),w(eo,le,null),b(t,qi,_),b(t,st,_),e(st,to),e(to,$r),w(tn,$r,null),e(st,jm),e(st,xr),e(xr,qm),b(t,zi,_),b(t,O,_),w(on,O,null),e(O,zm),e(O,yr),e(yr,Em),e(O,Pm),e(O,an),e(an,Sm),e(an,nn),e(nn,Lm),e(an,Nm),e(O,Om),e(O,sn),e(sn,Wm),e(sn,as),e(as,Im),e(sn,Bm),e(O,Hm),e(O,rn),e(rn,Rm),e(rn,ln),e(ln,Qm),e(rn,Gm),e(O,Xm),e(O,K),w(dn,K,null),e(K,Um),e(K,rt),e(rt,Jm),e(rt,ns),e(ns,Km),e(rt,Ym),e(rt,Dr),e(Dr,Zm),e(rt,ef),e(K,tf),w(oo,K,null),e(K,of),w(ao,K,null),e(K,af),w(no,K,null),b(t,Ei,_),b(t,it,_),e(it,so),e(so,Vr),w(cn,Vr,null),e(it,nf),e(it,Ar),e(Ar,sf),b(t,Pi,_),b(t,W,_),w(pn,W,null),e(W,rf),e(W,lt),e(lt,lf),e(lt,Fr),e(Fr,df),e(lt,cf),e(lt,Cr),e(Cr,pf),e(lt,hf),e(W,uf),e(W,hn),e(hn,mf),e(hn,un),e(un,ff),e(hn,gf),e(W,_f),e(W,mn),e(mn,vf),e(mn,ss),e(ss,bf),e(mn,kf),e(W,Tf),e(W,fn),e(fn,wf),e(fn,gn),e(gn,$f),e(fn,xf),e(W,yf),e(W,Y),w(_n,Y,null),e(Y,Df),e(Y,dt),e(dt,Vf),e(dt,rs),e(rs,Af),e(dt,Ff),e(dt,Mr),e(Mr,Cf),e(dt,Mf),e(Y,jf),w(ro,Y,null),e(Y,qf),w(io,Y,null),e(Y,zf),w(lo,Y,null),Si=!0},p(t,[_]){const vn={};_&2&&(vn.$$scope={dirty:_,ctx:t}),ft.$set(vn);const jr={};_&2&&(jr.$$scope={dirty:_,ctx:t}),_t.$set(jr);const qr={};_&2&&(qr.$$scope={dirty:_,ctx:t}),bt.$set(qr);const zr={};_&2&&(zr.$$scope={dirty:_,ctx:t}),kt.$set(zr);const bn={};_&2&&(bn.$$scope={dirty:_,ctx:t}),wt.$set(bn);const Er={};_&2&&(Er.$$scope={dirty:_,ctx:t}),$t.$set(Er);const Pr={};_&2&&(Pr.$$scope={dirty:_,ctx:t}),yt.$set(Pr);const Sr={};_&2&&(Sr.$$scope={dirty:_,ctx:t}),Dt.$set(Sr);const kn={};_&2&&(kn.$$scope={dirty:_,ctx:t}),Vt.$set(kn);const Lr={};_&2&&(Lr.$$scope={dirty:_,ctx:t}),Ft.$set(Lr);const Nr={};_&2&&(Nr.$$scope={dirty:_,ctx:t}),Ct.$set(Nr);const Or={};_&2&&(Or.$$scope={dirty:_,ctx:t}),Mt.$set(Or);const Tn={};_&2&&(Tn.$$scope={dirty:_,ctx:t}),qt.$set(Tn);const Wr={};_&2&&(Wr.$$scope={dirty:_,ctx:t}),zt.$set(Wr);const Ir={};_&2&&(Ir.$$scope={dirty:_,ctx:t}),St.$set(Ir);const Br={};_&2&&(Br.$$scope={dirty:_,ctx:t}),Lt.$set(Br);const wn={};_&2&&(wn.$$scope={dirty:_,ctx:t}),Ot.$set(wn);const Hr={};_&2&&(Hr.$$scope={dirty:_,ctx:t}),Wt.$set(Hr);const ct={};_&2&&(ct.$$scope={dirty:_,ctx:t}),Bt.$set(ct);const Rr={};_&2&&(Rr.$$scope={dirty:_,ctx:t}),Ht.$set(Rr);const Qr={};_&2&&(Qr.$$scope={dirty:_,ctx:t}),Rt.$set(Qr);const $n={};_&2&&($n.$$scope={dirty:_,ctx:t}),Gt.$set($n);const Gr={};_&2&&(Gr.$$scope={dirty:_,ctx:t}),Xt.$set(Gr);const Xr={};_&2&&(Xr.$$scope={dirty:_,ctx:t}),Ut.$set(Xr);const Ur={};_&2&&(Ur.$$scope={dirty:_,ctx:t}),Jt.$set(Ur);const ve={};_&2&&(ve.$$scope={dirty:_,ctx:t}),Kt.$set(ve);const be={};_&2&&(be.$$scope={dirty:_,ctx:t}),Zt.$set(be);const Jr={};_&2&&(Jr.$$scope={dirty:_,ctx:t}),eo.$set(Jr);const Kr={};_&2&&(Kr.$$scope={dirty:_,ctx:t}),oo.$set(Kr);const Yr={};_&2&&(Yr.$$scope={dirty:_,ctx:t}),ao.$set(Yr);const pt={};_&2&&(pt.$$scope={dirty:_,ctx:t}),no.$set(pt);const Zr={};_&2&&(Zr.$$scope={dirty:_,ctx:t}),ro.$set(Zr);const ei={};_&2&&(ei.$$scope={dirty:_,ctx:t}),io.$set(ei);const xn={};_&2&&(xn.$$scope={dirty:_,ctx:t}),lo.$set(xn)},i(t){Si||($(a.$$.fragment,t),$(_o.$$.fragment,t),$(xo.$$.fragment,t),$(yo.$$.fragment,t),$(ft.$$.fragment,t),$(Vo.$$.fragment,t),$(Ao.$$.fragment,t),$(_t.$$.fragment,t),$(Co.$$.fragment,t),$(Mo.$$.fragment,t),$(So.$$.fragment,t),$(bt.$$.fragment,t),$(kt.$$.fragment,t),$(Lo.$$.fragment,t),$(No.$$.fragment,t),$(Ro.$$.fragment,t),$(wt.$$.fragment,t),$($t.$$.fragment,t),$(Qo.$$.fragment,t),$(Go.$$.fragment,t),$(Yo.$$.fragment,t),$(yt.$$.fragment,t),$(Dt.$$.fragment,t),$(Vt.$$.fragment,t),$(Zo.$$.fragment,t),$(ea.$$.fragment,t),$(ra.$$.fragment,t),$(Ft.$$.fragment,t),$(Ct.$$.fragment,t),$(Mt.$$.fragment,t),$(ia.$$.fragment,t),$(la.$$.fragment,t),$(ma.$$.fragment,t),$(qt.$$.fragment,t),$(zt.$$.fragment,t),$(fa.$$.fragment,t),$(ga.$$.fragment,t),$(xa.$$.fragment,t),$(St.$$.fragment,t),$(Lt.$$.fragment,t),$(ya.$$.fragment,t),$(Da.$$.fragment,t),$(Ma.$$.fragment,t),$(Ot.$$.fragment,t),$(Wt.$$.fragment,t),$(ja.$$.fragment,t),$(qa.$$.fragment,t),$(La.$$.fragment,t),$(Bt.$$.fragment,t),$(Ht.$$.fragment,t),$(Rt.$$.fragment,t),$(Na.$$.fragment,t),$(Oa.$$.fragment,t),$(Qa.$$.fragment,t),$(Gt.$$.fragment,t),$(Xt.$$.fragment,t),$(Ut.$$.fragment,t),$(Jt.$$.fragment,t),$(Kt.$$.fragment,t),$(Ga.$$.fragment,t),$(Xa.$$.fragment,t),$(en.$$.fragment,t),$(Zt.$$.fragment,t),$(eo.$$.fragment,t),$(tn.$$.fragment,t),$(on.$$.fragment,t),$(dn.$$.fragment,t),$(oo.$$.fragment,t),$(ao.$$.fragment,t),$(no.$$.fragment,t),$(cn.$$.fragment,t),$(pn.$$.fragment,t),$(_n.$$.fragment,t),$(ro.$$.fragment,t),$(io.$$.fragment,t),$(lo.$$.fragment,t),Si=!0)},o(t){x(a.$$.fragment,t),x(_o.$$.fragment,t),x(xo.$$.fragment,t),x(yo.$$.fragment,t),x(ft.$$.fragment,t),x(Vo.$$.fragment,t),x(Ao.$$.fragment,t),x(_t.$$.fragment,t),x(Co.$$.fragment,t),x(Mo.$$.fragment,t),x(So.$$.fragment,t),x(bt.$$.fragment,t),x(kt.$$.fragment,t),x(Lo.$$.fragment,t),x(No.$$.fragment,t),x(Ro.$$.fragment,t),x(wt.$$.fragment,t),x($t.$$.fragment,t),x(Qo.$$.fragment,t),x(Go.$$.fragment,t),x(Yo.$$.fragment,t),x(yt.$$.fragment,t),x(Dt.$$.fragment,t),x(Vt.$$.fragment,t),x(Zo.$$.fragment,t),x(ea.$$.fragment,t),x(ra.$$.fragment,t),x(Ft.$$.fragment,t),x(Ct.$$.fragment,t),x(Mt.$$.fragment,t),x(ia.$$.fragment,t),x(la.$$.fragment,t),x(ma.$$.fragment,t),x(qt.$$.fragment,t),x(zt.$$.fragment,t),x(fa.$$.fragment,t),x(ga.$$.fragment,t),x(xa.$$.fragment,t),x(St.$$.fragment,t),x(Lt.$$.fragment,t),x(ya.$$.fragment,t),x(Da.$$.fragment,t),x(Ma.$$.fragment,t),x(Ot.$$.fragment,t),x(Wt.$$.fragment,t),x(ja.$$.fragment,t),x(qa.$$.fragment,t),x(La.$$.fragment,t),x(Bt.$$.fragment,t),x(Ht.$$.fragment,t),x(Rt.$$.fragment,t),x(Na.$$.fragment,t),x(Oa.$$.fragment,t),x(Qa.$$.fragment,t),x(Gt.$$.fragment,t),x(Xt.$$.fragment,t),x(Ut.$$.fragment,t),x(Jt.$$.fragment,t),x(Kt.$$.fragment,t),x(Ga.$$.fragment,t),x(Xa.$$.fragment,t),x(en.$$.fragment,t),x(Zt.$$.fragment,t),x(eo.$$.fragment,t),x(tn.$$.fragment,t),x(on.$$.fragment,t),x(dn.$$.fragment,t),x(oo.$$.fragment,t),x(ao.$$.fragment,t),x(no.$$.fragment,t),x(cn.$$.fragment,t),x(pn.$$.fragment,t),x(_n.$$.fragment,t),x(ro.$$.fragment,t),x(io.$$.fragment,t),x(lo.$$.fragment,t),Si=!1},d(t){o(d),t&&o(g),t&&o(c),y(a),t&&o(oi),t&&o(Ce),y(_o),t&&o(ai),t&&o(ut),t&&o(ni),t&&o(yn),t&&o(si),t&&o(Dn),t&&o(ri),t&&o(Vn),t&&o(ii),t&&o(An),t&&o(li),t&&o(ke),t&&o(di),t&&o(Me),y(xo),t&&o(ci),t&&o(te),y(yo),y(ft),t&&o(pi),t&&o(qe),y(Vo),t&&o(hi),t&&o(oe),y(Ao),y(_t),t&&o(ui),t&&o(Pe),y(Co),t&&o(mi),t&&o(H),y(Mo),y(So),y(bt),y(kt),t&&o(fi),t&&o(Le),y(Lo),t&&o(gi),t&&o(z),y(No),y(Ro),y(wt),y($t),t&&o(_i),t&&o(Oe),y(Qo),t&&o(vi),t&&o(R),y(Go),y(Yo),y(yt),y(Dt),y(Vt),t&&o(bi),t&&o(Be),y(Zo),t&&o(ki),t&&o(E),y(ea),y(ra),y(Ft),y(Ct),y(Mt),t&&o(Ti),t&&o(Re),y(ia),t&&o(wi),t&&o(P),y(la),y(ma),y(qt),y(zt),t&&o($i),t&&o(Ge),y(fa),t&&o(xi),t&&o(j),y(ga),y(xa),y(St),y(Lt),t&&o(yi),t&&o(Ue),y(ya),t&&o(Di),t&&o(Q),y(Da),y(Ma),y(Ot),y(Wt),t&&o(Vi),t&&o(Ye),y(ja),t&&o(Ai),t&&o(G),y(qa),y(La),y(Bt),y(Ht),y(Rt),t&&o(Fi),t&&o(tt),y(Na),t&&o(Ci),t&&o(L),y(Oa),y(Qa),y(Gt),y(Xt),y(Ut),y(Jt),y(Kt),t&&o(Mi),t&&o(at),y(Ga),t&&o(ji),t&&o(N),y(Xa),y(en),y(Zt),y(eo),t&&o(qi),t&&o(st),y(tn),t&&o(zi),t&&o(O),y(on),y(dn),y(oo),y(ao),y(no),t&&o(Ei),t&&o(it),y(cn),t&&o(Pi),t&&o(W),y(pn),y(_n),y(ro),y(io),y(lo)}}}const P2={local:"data2vec",sections:[{local:"overview",title:"Overview"},{local:"transformers.Data2VecTextConfig",title:"Data2VecTextConfig"},{local:"transformers.Data2VecAudioConfig",title:"Data2VecAudioConfig"},{local:"transformers.Data2VecAudioModel",title:"Data2VecAudioModel"},{local:"transformers.Data2VecAudioForAudioFrameClassification",title:"Data2VecAudioForAudioFrameClassification"},{local:"transformers.Data2VecAudioForCTC",title:"Data2VecAudioForCTC"},{local:"transformers.Data2VecAudioForSequenceClassification",title:"Data2VecAudioForSequenceClassification"},{local:"transformers.Data2VecAudioForXVector",title:"Data2VecAudioForXVector"},{local:"transformers.Data2VecTextModel",title:"Data2VecTextModel"},{local:"transformers.Data2VecTextForCausalLM",title:"Data2VecTextForCausalLM"},{local:"transformers.Data2VecTextForMaskedLM",title:"Data2VecTextForMaskedLM"},{local:"transformers.Data2VecTextForSequenceClassification",title:"Data2VecTextForSequenceClassification"},{local:"transformers.Data2VecTextForMultipleChoice",title:"Data2VecTextForMultipleChoice"},{local:"transformers.Data2VecTextForTokenClassification",title:"Data2VecTextForTokenClassification"},{local:"transformers.Data2VecTextForQuestionAnswering",title:"Data2VecTextForQuestionAnswering"}],title:"Data2Vec"};function S2(D){return e2(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class H2 extends J_{constructor(d){super();K_(this,d,S2,E2,Y_,{})}}export{H2 as default,P2 as metadata};
