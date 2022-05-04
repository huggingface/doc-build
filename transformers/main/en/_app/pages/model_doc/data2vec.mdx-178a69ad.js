import{S as HT,i as RT,s as QT,e as r,k as u,w,t as n,M as GT,c as i,d as t,m as f,a as l,x as k,h as s,b as m,F as e,g as b,y as T,q as $,o as y,B as V,v as XT,L as j}from"../../chunks/vendor-6b77c823.js";import{T as S}from"../../chunks/Tip-39098574.js";import{D as C}from"../../chunks/Docstring-1088f2fb.js";import{C as E}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as q}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as M}from"../../chunks/ExampleCodeBlock-5212b321.js";function UT(x){let d,g,c,h,v;return h=new E({props:{code:`from transformers import Data2VecTextModel, Data2VecTextConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=n("Examples:"),c=u(),w(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Examples:"),p.forEach(t),c=f(a),k(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),T(h,a,p),v=!0},p:j,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){y(h.$$.fragment,a),v=!1},d(a){a&&t(d),a&&t(c),V(h,a)}}}function JT(x){let d,g,c,h,v;return h=new E({props:{code:`from transformers import Data2VecAudioModel, Data2VecAudioConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=n("Example:"),c=u(),w(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(t),c=f(a),k(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),T(h,a,p),v=!0},p:j,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){y(h.$$.fragment,a),v=!1},d(a){a&&t(d),a&&t(c),V(h,a)}}}function KT(x){let d,g,c,h,v;return h=new E({props:{code:`from transformers import Data2VecVisionModel, Data2VecVisionConfig

# Initializing a Data2VecVision data2vec_vision-base-patch16-224-in22k style configuration
configuration = Data2VecVisionConfig()

# Initializing a model from the data2vec_vision-base-patch16-224-in22k style configuration
model = Data2VecVisionModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Data2VecVisionModel, Data2VecVisionConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Data2VecVision data2vec_vision-base-patch16-224-in22k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Data2VecVisionConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the data2vec_vision-base-patch16-224-in22k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecVisionModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=n("Example:"),c=u(),w(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(t),c=f(a),k(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),T(h,a,p),v=!0},p:j,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){y(h.$$.fragment,a),v=!1},d(a){a&&t(d),a&&t(c),V(h,a)}}}function YT(x){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var D=l(c);h=s(D,"Module"),D.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&t(d)}}}function ZT(x){let d,g,c,h,v;return h=new E({props:{code:`from transformers import Wav2Vec2Processor, Data2VecAudioModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">768</span>]`}}),{c(){d=r("p"),g=n("Example:"),c=u(),w(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(t),c=f(a),k(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),T(h,a,p),v=!0},p:j,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){y(h.$$.fragment,a),v=!1},d(a){a&&t(d),a&&t(c),V(h,a)}}}function e$(x){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var D=l(c);h=s(D,"Module"),D.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&t(d)}}}function t$(x){let d,g,c,h,v;return h=new E({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Data2VecAudioForAudioFrameClassification
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
[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]`}}),{c(){d=r("p"),g=n("Example:"),c=u(),w(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(t),c=f(a),k(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),T(h,a,p),v=!0},p:j,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){y(h.$$.fragment,a),v=!1},d(a){a&&t(d),a&&t(c),V(h,a)}}}function o$(x){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var D=l(c);h=s(D,"Module"),D.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&t(d)}}}function a$(x){let d,g,c,h,v;return h=new E({props:{code:`from transformers import Wav2Vec2Processor, Data2VecAudioForCTC
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
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>`}}),{c(){d=r("p"),g=n("Example:"),c=u(),w(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(t),c=f(a),k(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),T(h,a,p),v=!0},p:j,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){y(h.$$.fragment,a),v=!1},d(a){a&&t(d),a&&t(c),V(h,a)}}}function n$(x){let d,g;return d=new E({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">66.95</span>`}}),{c(){w(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,h){T(d,c,h),g=!0},p:j,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){y(d.$$.fragment,c),g=!1},d(c){V(d,c)}}}function s$(x){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var D=l(c);h=s(D,"Module"),D.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&t(d)}}}function r$(x){let d,g,c,h,v;return h=new E({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Data2VecAudioForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),g=n("Example:"),c=u(),w(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(t),c=f(a),k(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),T(h,a,p),v=!0},p:j,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){y(h.$$.fragment,a),v=!1},d(a){a&&t(d),a&&t(c),V(h,a)}}}function i$(x){let d,g;return d=new E({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){w(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,h){T(d,c,h),g=!0},p:j,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){y(d.$$.fragment,c),g=!1},d(c){V(d,c)}}}function l$(x){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var D=l(c);h=s(D,"Module"),D.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&t(d)}}}function d$(x){let d,g,c,h,v;return h=new E({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Data2VecAudioForXVector
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
<span class="hljs-number">1.0</span>`}}),{c(){d=r("p"),g=n("Example:"),c=u(),w(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(t),c=f(a),k(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),T(h,a,p),v=!0},p:j,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){y(h.$$.fragment,a),v=!1},d(a){a&&t(d),a&&t(c),V(h,a)}}}function c$(x){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var D=l(c);h=s(D,"Module"),D.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&t(d)}}}function p$(x){let d,g,c,h,v;return h=new E({props:{code:`from transformers import RobertaTokenizer, Data2VecTextModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=u(),w(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(t),c=f(a),k(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),T(h,a,p),v=!0},p:j,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){y(h.$$.fragment,a),v=!1},d(a){a&&t(d),a&&t(c),V(h,a)}}}function h$(x){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var D=l(c);h=s(D,"Module"),D.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&t(d)}}}function m$(x){let d,g,c,h,v;return h=new E({props:{code:`from transformers import Data2VecTextTokenizer, Data2VecTextForCausalLM, Data2VecTextConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=u(),w(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(t),c=f(a),k(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),T(h,a,p),v=!0},p:j,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){y(h.$$.fragment,a),v=!1},d(a){a&&t(d),a&&t(c),V(h,a)}}}function u$(x){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var D=l(c);h=s(D,"Module"),D.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&t(d)}}}function f$(x){let d,g,c,h,v;return h=new E({props:{code:`from transformers import RobertaTokenizer, Data2VecTextForMaskedLM
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
`}}),{c(){d=r("p"),g=n("Example:"),c=u(),w(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(t),c=f(a),k(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),T(h,a,p),v=!0},p:j,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){y(h.$$.fragment,a),v=!1},d(a){a&&t(d),a&&t(c),V(h,a)}}}function g$(x){let d,g;return d=new E({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,h){T(d,c,h),g=!0},p:j,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){y(d.$$.fragment,c),g=!1},d(c){V(d,c)}}}function _$(x){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var D=l(c);h=s(D,"Module"),D.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&t(d)}}}function v$(x){let d,g,c,h,v;return h=new E({props:{code:`import torch
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
`}}),{c(){d=r("p"),g=n("Example of single-label classification:"),c=u(),w(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example of single-label classification:"),p.forEach(t),c=f(a),k(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),T(h,a,p),v=!0},p:j,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){y(h.$$.fragment,a),v=!1},d(a){a&&t(d),a&&t(c),V(h,a)}}}function b$(x){let d,g;return d=new E({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){w(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,h){T(d,c,h),g=!0},p:j,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){y(d.$$.fragment,c),g=!1},d(c){V(d,c)}}}function w$(x){let d,g,c,h,v;return h=new E({props:{code:`import torch
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
`}}),{c(){d=r("p"),g=n("Example of multi-label classification:"),c=u(),w(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example of multi-label classification:"),p.forEach(t),c=f(a),k(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),T(h,a,p),v=!0},p:j,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){y(h.$$.fragment,a),v=!1},d(a){a&&t(d),a&&t(c),V(h,a)}}}function k$(x){let d,g;return d=new E({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = Data2VecTextForSequenceClassification.from_pretrained(
    "facebook/data2vec-text-base", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,h){T(d,c,h),g=!0},p:j,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){y(d.$$.fragment,c),g=!1},d(c){V(d,c)}}}function T$(x){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var D=l(c);h=s(D,"Module"),D.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&t(d)}}}function $$(x){let d,g,c,h,v;return h=new E({props:{code:`from transformers import RobertaTokenizer, Data2VecTextForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=u(),w(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(t),c=f(a),k(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),T(h,a,p),v=!0},p:j,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){y(h.$$.fragment,a),v=!1},d(a){a&&t(d),a&&t(c),V(h,a)}}}function y$(x){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var D=l(c);h=s(D,"Module"),D.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&t(d)}}}function V$(x){let d,g,c,h,v;return h=new E({props:{code:`from transformers import RobertaTokenizer, Data2VecTextForTokenClassification
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
`}}),{c(){d=r("p"),g=n("Example:"),c=u(),w(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(t),c=f(a),k(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),T(h,a,p),v=!0},p:j,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){y(h.$$.fragment,a),v=!1},d(a){a&&t(d),a&&t(c),V(h,a)}}}function x$(x){let d,g;return d=new E({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,h){T(d,c,h),g=!0},p:j,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){y(d.$$.fragment,c),g=!1},d(c){V(d,c)}}}function D$(x){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var D=l(c);h=s(D,"Module"),D.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&t(d)}}}function F$(x){let d,g,c,h,v;return h=new E({props:{code:`from transformers import RobertaTokenizer, Data2VecTextForQuestionAnswering
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
`}}),{c(){d=r("p"),g=n("Example:"),c=u(),w(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(t),c=f(a),k(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),T(h,a,p),v=!0},p:j,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){y(h.$$.fragment,a),v=!1},d(a){a&&t(d),a&&t(c),V(h,a)}}}function C$(x){let d,g;return d=new E({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,h){T(d,c,h),g=!0},p:j,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){y(d.$$.fragment,c),g=!1},d(c){V(d,c)}}}function A$(x){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var D=l(c);h=s(D,"Module"),D.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&t(d)}}}function M$(x){let d,g,c,h,v;return h=new E({props:{code:`from transformers import BeitFeatureExtractor, Data2VecVisionModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = BeitFeatureExtractor.from_pretrained("facebook/data2vec-vision-base")
model = Data2VecVisionModel.from_pretrained("facebook/data2vec-vision-base")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitFeatureExtractor, Data2VecVisionModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = BeitFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecVisionModel.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){d=r("p"),g=n("Example:"),c=u(),w(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(t),c=f(a),k(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),T(h,a,p),v=!0},p:j,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){y(h.$$.fragment,a),v=!1},d(a){a&&t(d),a&&t(c),V(h,a)}}}function j$(x){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var D=l(c);h=s(D,"Module"),D.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&t(d)}}}function E$(x){let d,g,c,h,v;return h=new E({props:{code:`from transformers import BeitFeatureExtractor, Data2VecVisionForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = BeitFeatureExtractor.from_pretrained("facebook/data2vec-vision-base-ft1k")
model = Data2VecVisionForImageClassification.from_pretrained("facebook/data2vec-vision-base-ft1k")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitFeatureExtractor, Data2VecVisionForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = BeitFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base-ft1k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecVisionForImageClassification.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base-ft1k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
remote control, remote`}}),{c(){d=r("p"),g=n("Example:"),c=u(),w(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(t),c=f(a),k(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),T(h,a,p),v=!0},p:j,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){y(h.$$.fragment,a),v=!1},d(a){a&&t(d),a&&t(c),V(h,a)}}}function q$(x){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var D=l(c);h=s(D,"Module"),D.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&t(d)}}}function z$(x){let d,g,c,h,v;return h=new E({props:{code:`from transformers import AutoFeatureExtractor, Data2VecVisionForSemanticSegmentation
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = AutoFeatureExtractor.from_pretrained("facebook/data2vec-vision-base")
model = Data2VecVisionForSemanticSegmentation.from_pretrained("facebook/data2vec-vision-base")

inputs = feature_extractor(images=image, return_tensors="pt")
outputs = model(**inputs)
# logits are of shape (batch_size, num_labels, height, width)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, Data2VecVisionForSemanticSegmentation
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecVisionForSemanticSegmentation.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># logits are of shape (batch_size, num_labels, height, width)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Examples:"),c=u(),w(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Examples:"),p.forEach(t),c=f(a),k(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),T(h,a,p),v=!0},p:j,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){y(h.$$.fragment,a),v=!1},d(a){a&&t(d),a&&t(c),V(h,a)}}}function P$(x){let d,g,c,h,v,a,p,D,Oe,re,A,Y,N,ee,We,O,Be,ve;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=u(),h=r("ul"),v=r("li"),a=n("having all inputs as keyword arguments (like PyTorch models), or"),p=u(),D=r("li"),Oe=n("having all inputs as a list, tuple or dict in the first positional arguments."),re=u(),A=r("p"),Y=n("This second option is useful when using "),N=r("code"),ee=n("tf.keras.Model.fit"),We=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r("code"),Be=n("model(inputs)"),ve=n(".")},l(F){d=i(F,"P",{});var z=l(d);g=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),c=f(F),h=i(F,"UL",{});var W=l(h);v=i(W,"LI",{});var dt=l(v);a=s(dt,"having all inputs as keyword arguments (like PyTorch models), or"),dt.forEach(t),p=f(W),D=i(W,"LI",{});var ct=l(D);Oe=s(ct,"having all inputs as a list, tuple or dict in the first positional arguments."),ct.forEach(t),W.forEach(t),re=f(F),A=i(F,"P",{});var L=l(A);Y=s(L,"This second option is useful when using "),N=i(L,"CODE",{});var be=l(N);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),We=s(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=i(L,"CODE",{});var pt=l(O);Be=s(pt,"model(inputs)"),pt.forEach(t),ve=s(L,"."),L.forEach(t)},m(F,z){b(F,d,z),e(d,g),b(F,c,z),b(F,h,z),e(h,v),e(v,a),e(h,p),e(h,D),e(D,Oe),b(F,re,z),b(F,A,z),e(A,Y),e(A,N),e(N,ee),e(A,We),e(A,O),e(O,Be),e(A,ve)},d(F){F&&t(d),F&&t(c),F&&t(h),F&&t(re),F&&t(A)}}}function S$(x){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var D=l(c);h=s(D,"Module"),D.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&t(d)}}}function L$(x){let d,g,c,h,v;return h=new E({props:{code:`from transformers import BeitFeatureExtractor, TFData2VecVisionModel
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = BeitFeatureExtractor.from_pretrained("facebook/data2vec-vision-base")
model = TFData2VecVisionModel.from_pretrained("facebook/data2vec-vision-base")

inputs = feature_extractor(image, return_tensors="tf")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitFeatureExtractor, TFData2VecVisionModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = BeitFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFData2VecVisionModel.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){d=r("p"),g=n("Example:"),c=u(),w(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(t),c=f(a),k(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),T(h,a,p),v=!0},p:j,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){y(h.$$.fragment,a),v=!1},d(a){a&&t(d),a&&t(c),V(h,a)}}}function I$(x){let d,g,c,h,v,a,p,D,Oe,re,A,Y,N,ee,We,O,Be,ve;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=u(),h=r("ul"),v=r("li"),a=n("having all inputs as keyword arguments (like PyTorch models), or"),p=u(),D=r("li"),Oe=n("having all inputs as a list, tuple or dict in the first positional arguments."),re=u(),A=r("p"),Y=n("This second option is useful when using "),N=r("code"),ee=n("tf.keras.Model.fit"),We=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r("code"),Be=n("model(inputs)"),ve=n(".")},l(F){d=i(F,"P",{});var z=l(d);g=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),c=f(F),h=i(F,"UL",{});var W=l(h);v=i(W,"LI",{});var dt=l(v);a=s(dt,"having all inputs as keyword arguments (like PyTorch models), or"),dt.forEach(t),p=f(W),D=i(W,"LI",{});var ct=l(D);Oe=s(ct,"having all inputs as a list, tuple or dict in the first positional arguments."),ct.forEach(t),W.forEach(t),re=f(F),A=i(F,"P",{});var L=l(A);Y=s(L,"This second option is useful when using "),N=i(L,"CODE",{});var be=l(N);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),We=s(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=i(L,"CODE",{});var pt=l(O);Be=s(pt,"model(inputs)"),pt.forEach(t),ve=s(L,"."),L.forEach(t)},m(F,z){b(F,d,z),e(d,g),b(F,c,z),b(F,h,z),e(h,v),e(v,a),e(h,p),e(h,D),e(D,Oe),b(F,re,z),b(F,A,z),e(A,Y),e(A,N),e(N,ee),e(A,We),e(A,O),e(O,Be),e(A,ve)},d(F){F&&t(d),F&&t(c),F&&t(h),F&&t(re),F&&t(A)}}}function N$(x){let d,g,c,h,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(p,"CODE",{});var D=l(c);h=s(D,"Module"),D.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(a,p){b(a,d,p),e(d,g),e(d,c),e(c,h),e(d,v)},d(a){a&&t(d)}}}function O$(x){let d,g,c,h,v;return h=new E({props:{code:`from transformers import BeitFeatureExtractor, TFData2VecVisionForImageClassification
import tensorflow as tf
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = BeitFeatureExtractor.from_pretrained("facebook/data2vec-vision-base-ft1k")
model = TFData2VecVisionForImageClassification.from_pretrained("facebook/data2vec-vision-base-ft1k")

inputs = feature_extractor(image, return_tensors="tf")
logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = int(tf.math.argmax(logits, axis=-1))
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitFeatureExtractor, TFData2VecVisionForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = BeitFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base-ft1k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFData2VecVisionForImageClassification.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base-ft1k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
remote control, remote`}}),{c(){d=r("p"),g=n("Example:"),c=u(),w(h.$$.fragment)},l(a){d=i(a,"P",{});var p=l(d);g=s(p,"Example:"),p.forEach(t),c=f(a),k(h.$$.fragment,a)},m(a,p){b(a,d,p),e(d,g),b(a,c,p),T(h,a,p),v=!0},p:j,i(a){v||($(h.$$.fragment,a),v=!0)},o(a){y(h.$$.fragment,a),v=!1},d(a){a&&t(d),a&&t(c),V(h,a)}}}function W$(x){let d,g,c,h,v,a,p,D,Oe,re,A,Y,N,ee,We,O,Be,ve,F,z,W,dt,ct,L,be,pt,Wd,Tr,Ea,Ip,qa,Np,Op,Bd,$r,Wp,Hd,we,Li,Bp,Hp,za,Rp,yr,Qp,Gp,Xp,Pa,Up,Vr,Jp,Kp,Yp,Sa,Zp,xr,eh,th,Rd,ke,oh,La,ah,nh,Ia,sh,rh,Na,ih,lh,Qd,Ye,dh,Oa,ch,ph,Wa,hh,mh,Gd,ht,so,Ii,Ba,uh,Ni,fh,Xd,ue,Ha,gh,He,_h,Dr,vh,bh,Fr,wh,kh,Ra,Th,$h,yh,mt,Vh,Cr,xh,Dh,Ar,Fh,Ch,Ah,ro,Ud,ut,io,Oi,Qa,Mh,Wi,jh,Jd,fe,Ga,Eh,ft,qh,Mr,zh,Ph,Xa,Sh,Lh,Ih,gt,Nh,jr,Oh,Wh,Er,Bh,Hh,Rh,lo,Kd,_t,co,Bi,Ua,Qh,Hi,Gh,Yd,Re,Ja,Xh,vt,Uh,qr,Jh,Kh,Ka,Yh,Zh,em,po,Zd,bt,ho,Ri,Ya,tm,Qi,om,ec,te,Za,am,en,nm,tn,sm,rm,im,on,lm,zr,dm,cm,pm,an,hm,nn,mm,um,fm,Te,sn,gm,wt,_m,Pr,vm,bm,Gi,wm,km,Tm,mo,$m,uo,tc,kt,fo,Xi,rn,ym,Ui,Vm,oc,B,ln,xm,Ji,Dm,Fm,dn,Cm,cn,Am,Mm,jm,pn,Em,Sr,qm,zm,Pm,hn,Sm,mn,Lm,Im,Nm,$e,un,Om,Tt,Wm,Lr,Bm,Hm,Ki,Rm,Qm,Gm,go,Xm,_o,ac,$t,vo,Yi,fn,Um,Zi,Jm,nc,oe,gn,Km,yt,Ym,el,Zm,eu,_n,tu,ou,au,vn,nu,Ir,su,ru,iu,bn,lu,wn,du,cu,pu,ie,kn,hu,Vt,mu,Nr,uu,fu,tl,gu,_u,vu,bo,bu,wo,wu,ko,sc,xt,To,ol,Tn,ku,al,Tu,rc,H,$n,$u,nl,yu,Vu,yn,xu,Vn,Du,Fu,Cu,xn,Au,Or,Mu,ju,Eu,Dn,qu,Fn,zu,Pu,Su,le,Cn,Lu,Dt,Iu,Wr,Nu,Ou,sl,Wu,Bu,Hu,$o,Ru,yo,Qu,Vo,ic,Ft,xo,rl,An,Gu,il,Xu,lc,R,Mn,Uu,ll,Ju,Ku,jn,Yu,En,Zu,ef,tf,qn,of,Br,af,nf,sf,zn,rf,Pn,lf,df,cf,ye,Sn,pf,Ct,hf,Hr,mf,uf,dl,ff,gf,_f,Do,vf,Fo,dc,At,Co,cl,Ln,bf,pl,wf,cc,P,In,kf,Nn,Tf,On,$f,yf,Vf,Wn,xf,Rr,Df,Ff,Cf,Bn,Af,Hn,Mf,jf,Ef,Rn,qf,hl,zf,Pf,Sf,Q,Lf,ml,If,Nf,ul,Of,Wf,fl,Bf,Hf,gl,Rf,Qf,_l,Gf,Xf,vl,Uf,Jf,Kf,Ao,Yf,bl,Zf,eg,Qn,tg,og,Ve,Gn,ag,Mt,ng,Qr,sg,rg,wl,ig,lg,dg,Mo,cg,jo,pc,jt,Eo,kl,Xn,pg,Tl,hg,hc,ae,Un,mg,Et,ug,$l,fg,gg,Jn,_g,vg,bg,Kn,wg,Gr,kg,Tg,$g,Yn,yg,Zn,Vg,xg,Dg,xe,es,Fg,qt,Cg,Xr,Ag,Mg,yl,jg,Eg,qg,qo,zg,zo,mc,zt,Po,Vl,ts,Pg,xl,Sg,uc,ne,os,Lg,Pt,Ig,Dl,Ng,Og,as,Wg,Bg,Hg,ns,Rg,Ur,Qg,Gg,Xg,ss,Ug,rs,Jg,Kg,Yg,de,is,Zg,St,e_,Jr,t_,o_,Fl,a_,n_,s_,So,r_,Lo,i_,Io,fc,Lt,No,Cl,ls,l_,Al,d_,gc,G,ds,c_,Ml,p_,h_,cs,m_,ps,u_,f_,g_,hs,__,Kr,v_,b_,w_,ms,k_,us,T_,$_,y_,I,fs,V_,It,x_,Yr,D_,F_,jl,C_,A_,M_,Oo,j_,Wo,E_,Bo,q_,Ho,z_,Ro,_c,Nt,Qo,El,gs,P_,ql,S_,vc,X,_s,L_,zl,I_,N_,vs,O_,bs,W_,B_,H_,ws,R_,Zr,Q_,G_,X_,ks,U_,Ts,J_,K_,Y_,De,$s,Z_,Ot,e2,ei,t2,o2,Pl,a2,n2,s2,Go,r2,Xo,bc,Wt,Uo,Sl,ys,i2,Ll,l2,wc,U,Vs,d2,Il,c2,p2,xs,h2,Ds,m2,u2,f2,Fs,g2,ti,_2,v2,b2,Cs,w2,As,k2,T2,$2,ce,Ms,y2,Bt,V2,oi,x2,D2,Nl,F2,C2,A2,Jo,M2,Ko,j2,Yo,kc,Ht,Zo,Ol,js,E2,Wl,q2,Tc,J,Es,z2,Rt,P2,Bl,S2,L2,Hl,I2,N2,O2,qs,W2,zs,B2,H2,R2,Ps,Q2,ai,G2,X2,U2,Ss,J2,Ls,K2,Y2,Z2,pe,Is,ev,Qt,tv,ni,ov,av,Rl,nv,sv,rv,ea,iv,ta,lv,oa,$c,Gt,aa,Ql,Ns,dv,Gl,cv,yc,Qe,Os,pv,Ws,hv,Bs,mv,uv,fv,Fe,Hs,gv,Xt,_v,si,vv,bv,Xl,wv,kv,Tv,na,$v,sa,Vc,Ut,ra,Ul,Rs,yv,Jl,Vv,xc,ge,Qs,xv,Kl,Dv,Fv,Gs,Cv,Xs,Av,Mv,jv,Ce,Us,Ev,Jt,qv,ri,zv,Pv,Yl,Sv,Lv,Iv,ia,Nv,la,Dc,Kt,da,Zl,Js,Ov,ed,Wv,Fc,_e,Ks,Bv,td,Hv,Rv,Ys,Qv,Zs,Gv,Xv,Uv,Ae,er,Jv,Yt,Kv,ii,Yv,Zv,od,eb,tb,ob,ca,ab,pa,Cc,Zt,ha,ad,tr,nb,nd,sb,Ac,se,or,rb,ar,ib,li,lb,db,cb,nr,pb,sr,hb,mb,ub,ma,fb,Me,rr,gb,eo,_b,di,vb,bb,sd,wb,kb,Tb,ua,$b,fa,Mc,to,ga,rd,ir,yb,id,Vb,jc,K,lr,xb,ld,Db,Fb,dr,Cb,ci,Ab,Mb,jb,cr,Eb,pr,qb,zb,Pb,_a,Sb,je,hr,Lb,oo,Ib,pi,Nb,Ob,dd,Wb,Bb,Hb,va,Rb,ba,Ec;return a=new q({}),ee=new q({}),Ba=new q({}),Ha=new C({props:{name:"class transformers.Data2VecTextConfig",anchor:"transformers.Data2VecTextConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Data2VecTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/configuration_data2vec_text.py#L31"}}),ro=new M({props:{anchor:"transformers.Data2VecTextConfig.example",$$slots:{default:[UT]},$$scope:{ctx:x}}}),Qa=new q({}),Ga=new C({props:{name:"class transformers.Data2VecAudioConfig",anchor:"transformers.Data2VecAudioConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"conv_pos_kernel_size",val:" = 19"},{name:"num_conv_pos_embeddings",val:" = 5"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"ctc_loss_reduction",val:" = 'sum'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"tdnn_dim",val:" = (512, 512, 512, 512, 1500)"},{name:"tdnn_kernel",val:" = (5, 3, 3, 1, 1)"},{name:"tdnn_dilation",val:" = (1, 2, 3, 1, 1)"},{name:"xvector_output_dim",val:" = 512"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"add_adapter",val:" = False"},{name:"adapter_kernel_size",val:" = 3"},{name:"adapter_stride",val:" = 2"},{name:"num_adapter_layers",val:" = 3"},{name:"output_hidden_size",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Data2VecAudioConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the Data2VecAudio model. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioModel">Data2VecAudioModel</a> or <code>TFData2VecAudioModel</code>. Vocabulary size
of the model. Defines the different tokens that can be represented by the <em>inputs_ids</em> passed to the
forward method of <a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioModel">Data2VecAudioModel</a>.`,name:"vocab_size"},{anchor:"transformers.Data2VecAudioConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.Data2VecAudioConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.Data2VecAudioConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.Data2VecAudioConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.Data2VecAudioConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.Data2VecAudioConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.Data2VecAudioConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.Data2VecAudioConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioForCTC">Data2VecAudioForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.Data2VecAudioConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
instance of <a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioForCTC">Data2VecAudioForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.Data2VecAudioConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioForCTC">Data2VecAudioForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.Data2VecAudioConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioForSequenceClassification">Data2VecAudioForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.Data2VecAudioConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
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
if <code>add_adapter is True</code>.`,name:"output_hidden_size"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/configuration_data2vec_audio.py#L31"}}),lo=new M({props:{anchor:"transformers.Data2VecAudioConfig.example",$$slots:{default:[JT]},$$scope:{ctx:x}}}),Ua=new q({}),Ja=new C({props:{name:"class transformers.Data2VecVisionConfig",anchor:"transformers.Data2VecVisionConfig",parameters:[{name:"vocab_size",val:" = 8192"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"use_mask_token",val:" = False"},{name:"use_absolute_position_embeddings",val:" = False"},{name:"use_relative_position_bias",val:" = False"},{name:"use_shared_relative_position_bias",val:" = False"},{name:"layer_scale_init_value",val:" = 0.1"},{name:"drop_path_rate",val:" = 0.1"},{name:"use_mean_pooling",val:" = True"},{name:"out_indices",val:" = [3, 5, 7, 11]"},{name:"pool_scales",val:" = [1, 2, 3, 6]"},{name:"use_auxiliary_head",val:" = True"},{name:"auxiliary_loss_weight",val:" = 0.4"},{name:"auxiliary_channels",val:" = 256"},{name:"auxiliary_num_convs",val:" = 1"},{name:"auxiliary_concat_input",val:" = False"},{name:"semantic_loss_ignore_index",val:" = 255"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Data2VecVisionConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 8092) &#x2014;
Vocabulary size of the Data2VecVision model. Defines the number of different image tokens that can be used
during pre-training.`,name:"vocab_size"},{anchor:"transformers.Data2VecVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.Data2VecVisionConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.Data2VecVisionConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.Data2VecVisionConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.Data2VecVisionConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.Data2VecVisionConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.Data2VecVisionConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.Data2VecVisionConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.Data2VecVisionConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.Data2VecVisionConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.Data2VecVisionConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.Data2VecVisionConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.Data2VecVisionConfig.use_mask_token",description:`<strong>use_mask_token</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a mask token for masked image modeling.`,name:"use_mask_token"},{anchor:"transformers.Data2VecVisionConfig.use_absolute_position_embeddings",description:`<strong>use_absolute_position_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use BERT-style absolute position embeddings.`,name:"use_absolute_position_embeddings"},{anchor:"transformers.Data2VecVisionConfig.use_relative_position_bias",description:`<strong>use_relative_position_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use T5-style relative position embeddings in the self-attention layers.`,name:"use_relative_position_bias"},{anchor:"transformers.Data2VecVisionConfig.use_shared_relative_position_bias",description:`<strong>use_shared_relative_position_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use the same relative position embeddings across all self-attention layers of the Transformer.`,name:"use_shared_relative_position_bias"},{anchor:"transformers.Data2VecVisionConfig.layer_scale_init_value",description:`<strong>layer_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Scale to use in the self-attention layers. 0.1 for base, 1e-5 for large. Set 0 to disable layer scale.`,name:"layer_scale_init_value"},{anchor:"transformers.Data2VecVisionConfig.drop_path_rate",description:`<strong>drop_path_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Stochastic depth rate per sample (when applied in the main path of residual layers).`,name:"drop_path_rate"},{anchor:"transformers.Data2VecVisionConfig.use_mean_pooling",description:`<strong>use_mean_pooling</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to mean pool the final hidden states of the patches instead of using the final hidden state of the
CLS token, before applying the classification head.`,name:"use_mean_pooling"},{anchor:"transformers.Data2VecVisionConfig.out_indices",description:`<strong>out_indices</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 5, 7, 11]</code>) &#x2014;
Indices of the feature maps to use for semantic segmentation.`,name:"out_indices"},{anchor:"transformers.Data2VecVisionConfig.pool_scales",description:`<strong>pool_scales</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>[1, 2, 3, 6]</code>) &#x2014;
Pooling scales used in Pooling Pyramid Module applied on the last feature map.`,name:"pool_scales"},{anchor:"transformers.Data2VecVisionConfig.use_auxiliary_head",description:`<strong>use_auxiliary_head</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use an auxiliary head during training.`,name:"use_auxiliary_head"},{anchor:"transformers.Data2VecVisionConfig.auxiliary_loss_weight",description:`<strong>auxiliary_loss_weight</strong> (<code>float</code>, <em>optional</em>, defaults to 0.4) &#x2014;
Weight of the cross-entropy loss of the auxiliary head.`,name:"auxiliary_loss_weight"},{anchor:"transformers.Data2VecVisionConfig.auxiliary_channels",description:`<strong>auxiliary_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Number of channels to use in the auxiliary head.`,name:"auxiliary_channels"},{anchor:"transformers.Data2VecVisionConfig.auxiliary_num_convs",description:`<strong>auxiliary_num_convs</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of convolutional layers to use in the auxiliary head.`,name:"auxiliary_num_convs"},{anchor:"transformers.Data2VecVisionConfig.auxiliary_concat_input",description:`<strong>auxiliary_concat_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to concatenate the output of the auxiliary head with the input before the classification layer.`,name:"auxiliary_concat_input"},{anchor:"transformers.Data2VecVisionConfig.semantic_loss_ignore_index",description:`<strong>semantic_loss_ignore_index</strong> (<code>int</code>, <em>optional</em>, defaults to 255) &#x2014;
The index that is ignored by the loss function of the semantic segmentation model.`,name:"semantic_loss_ignore_index"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/configuration_data2vec_vision.py#L33"}}),po=new M({props:{anchor:"transformers.Data2VecVisionConfig.example",$$slots:{default:[KT]},$$scope:{ctx:x}}}),Ya=new q({}),Za=new C({props:{name:"class transformers.Data2VecAudioModel",anchor:"transformers.Data2VecAudioModel",parameters:[{name:"config",val:": Data2VecAudioConfig"}],parametersDescription:[{anchor:"transformers.Data2VecAudioModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioConfig">Data2VecAudioConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_audio.py#L898"}}),sn=new C({props:{name:"forward",anchor:"transformers.Data2VecAudioModel.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Data2VecAudioModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Data2VecAudioModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_audio.py#L969",returnDescription:`
<p>A <code>transformers.models.data2vec.modeling_data2vec_audio.Data2VecAudioBaseModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioConfig"
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
`}}),mo=new S({props:{$$slots:{default:[YT]},$$scope:{ctx:x}}}),uo=new M({props:{anchor:"transformers.Data2VecAudioModel.forward.example",$$slots:{default:[ZT]},$$scope:{ctx:x}}}),rn=new q({}),ln=new C({props:{name:"class transformers.Data2VecAudioForAudioFrameClassification",anchor:"transformers.Data2VecAudioForAudioFrameClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecAudioForAudioFrameClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioConfig">Data2VecAudioConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1291"}}),un=new C({props:{name:"forward",anchor:"transformers.Data2VecAudioForAudioFrameClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Data2VecAudioForAudioFrameClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Data2VecAudioForAudioFrameClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecAudioForAudioFrameClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1334",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),go=new S({props:{$$slots:{default:[e$]},$$scope:{ctx:x}}}),_o=new M({props:{anchor:"transformers.Data2VecAudioForAudioFrameClassification.forward.example",$$slots:{default:[t$]},$$scope:{ctx:x}}}),fn=new q({}),gn=new C({props:{name:"class transformers.Data2VecAudioForCTC",anchor:"transformers.Data2VecAudioForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecAudioForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioConfig">Data2VecAudioConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1036"}}),kn=new C({props:{name:"forward",anchor:"transformers.Data2VecAudioForCTC.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Data2VecAudioForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Data2VecAudioForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecAudioForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1077",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bo=new S({props:{$$slots:{default:[o$]},$$scope:{ctx:x}}}),wo=new M({props:{anchor:"transformers.Data2VecAudioForCTC.forward.example",$$slots:{default:[a$]},$$scope:{ctx:x}}}),ko=new M({props:{anchor:"transformers.Data2VecAudioForCTC.forward.example-2",$$slots:{default:[n$]},$$scope:{ctx:x}}}),Tn=new q({}),$n=new C({props:{name:"class transformers.Data2VecAudioForSequenceClassification",anchor:"transformers.Data2VecAudioForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecAudioForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioConfig">Data2VecAudioConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1167"}}),Cn=new C({props:{name:"forward",anchor:"transformers.Data2VecAudioForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Data2VecAudioForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Data2VecAudioForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecAudioForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1212",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$o=new S({props:{$$slots:{default:[s$]},$$scope:{ctx:x}}}),yo=new M({props:{anchor:"transformers.Data2VecAudioForSequenceClassification.forward.example",$$slots:{default:[r$]},$$scope:{ctx:x}}}),Vo=new M({props:{anchor:"transformers.Data2VecAudioForSequenceClassification.forward.example-2",$$slots:{default:[i$]},$$scope:{ctx:x}}}),An=new q({}),Mn=new C({props:{name:"class transformers.Data2VecAudioForXVector",anchor:"transformers.Data2VecAudioForXVector",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecAudioForXVector.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioConfig">Data2VecAudioConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1449"}}),Sn=new C({props:{name:"forward",anchor:"transformers.Data2VecAudioForXVector.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Data2VecAudioForXVector.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Data2VecAudioForXVector.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecAudioForXVector.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1511",returnDescription:`
<p>A <code>transformers.models.data2vec.modeling_data2vec_audio.XVectorOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioConfig"
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
`}}),Do=new S({props:{$$slots:{default:[l$]},$$scope:{ctx:x}}}),Fo=new M({props:{anchor:"transformers.Data2VecAudioForXVector.forward.example",$$slots:{default:[d$]},$$scope:{ctx:x}}}),Ln=new q({}),In=new C({props:{name:"class transformers.Data2VecTextModel",anchor:"transformers.Data2VecTextModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.Data2VecTextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextConfig">Data2VecTextConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L696"}}),Gn=new C({props:{name:"forward",anchor:"transformers.Data2VecTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Data2VecTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecTextModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L740",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mo=new S({props:{$$slots:{default:[c$]},$$scope:{ctx:x}}}),jo=new M({props:{anchor:"transformers.Data2VecTextModel.forward.example",$$slots:{default:[p$]},$$scope:{ctx:x}}}),Xn=new q({}),Un=new C({props:{name:"class transformers.Data2VecTextForCausalLM",anchor:"transformers.Data2VecTextForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecTextForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextConfig">Data2VecTextConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L881"}}),es=new C({props:{name:"forward",anchor:"transformers.Data2VecTextForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Data2VecTextForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecTextForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L907",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qo=new S({props:{$$slots:{default:[h$]},$$scope:{ctx:x}}}),zo=new M({props:{anchor:"transformers.Data2VecTextForCausalLM.forward.example",$$slots:{default:[m$]},$$scope:{ctx:x}}}),ts=new q({}),os=new C({props:{name:"class transformers.Data2VecTextForMaskedLM",anchor:"transformers.Data2VecTextForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecTextForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextConfig">Data2VecTextConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L1033"}}),is=new C({props:{name:"forward",anchor:"transformers.Data2VecTextForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Data2VecTextForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L1062",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),So=new S({props:{$$slots:{default:[u$]},$$scope:{ctx:x}}}),Lo=new M({props:{anchor:"transformers.Data2VecTextForMaskedLM.forward.example",$$slots:{default:[f$]},$$scope:{ctx:x}}}),Io=new M({props:{anchor:"transformers.Data2VecTextForMaskedLM.forward.example-2",$$slots:{default:[g$]},$$scope:{ctx:x}}}),ls=new q({}),ds=new C({props:{name:"class transformers.Data2VecTextForSequenceClassification",anchor:"transformers.Data2VecTextForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecTextForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextConfig">Data2VecTextConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L1163"}}),fs=new C({props:{name:"forward",anchor:"transformers.Data2VecTextForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Data2VecTextForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecTextForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L1177",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new S({props:{$$slots:{default:[_$]},$$scope:{ctx:x}}}),Wo=new M({props:{anchor:"transformers.Data2VecTextForSequenceClassification.forward.example",$$slots:{default:[v$]},$$scope:{ctx:x}}}),Bo=new M({props:{anchor:"transformers.Data2VecTextForSequenceClassification.forward.example-2",$$slots:{default:[b$]},$$scope:{ctx:x}}}),Ho=new M({props:{anchor:"transformers.Data2VecTextForSequenceClassification.forward.example-3",$$slots:{default:[w$]},$$scope:{ctx:x}}}),Ro=new M({props:{anchor:"transformers.Data2VecTextForSequenceClassification.forward.example-4",$$slots:{default:[k$]},$$scope:{ctx:x}}}),gs=new q({}),_s=new C({props:{name:"class transformers.Data2VecTextForMultipleChoice",anchor:"transformers.Data2VecTextForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecTextForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextConfig">Data2VecTextConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L1261"}}),$s=new C({props:{name:"forward",anchor:"transformers.Data2VecTextForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Data2VecTextForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecTextForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L1274",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Go=new S({props:{$$slots:{default:[T$]},$$scope:{ctx:x}}}),Xo=new M({props:{anchor:"transformers.Data2VecTextForMultipleChoice.forward.example",$$slots:{default:[$$]},$$scope:{ctx:x}}}),ys=new q({}),Vs=new C({props:{name:"class transformers.Data2VecTextForTokenClassification",anchor:"transformers.Data2VecTextForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecTextForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextConfig">Data2VecTextConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L1356"}}),Ms=new C({props:{name:"forward",anchor:"transformers.Data2VecTextForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Data2VecTextForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecTextForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L1374",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jo=new S({props:{$$slots:{default:[y$]},$$scope:{ctx:x}}}),Ko=new M({props:{anchor:"transformers.Data2VecTextForTokenClassification.forward.example",$$slots:{default:[V$]},$$scope:{ctx:x}}}),Yo=new M({props:{anchor:"transformers.Data2VecTextForTokenClassification.forward.example-2",$$slots:{default:[x$]},$$scope:{ctx:x}}}),js=new q({}),Es=new C({props:{name:"class transformers.Data2VecTextForQuestionAnswering",anchor:"transformers.Data2VecTextForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecTextForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextConfig">Data2VecTextConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L1464"}}),Is=new C({props:{name:"forward",anchor:"transformers.Data2VecTextForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L1478",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ea=new S({props:{$$slots:{default:[D$]},$$scope:{ctx:x}}}),ta=new M({props:{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.example",$$slots:{default:[F$]},$$scope:{ctx:x}}}),oa=new M({props:{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.example-2",$$slots:{default:[C$]},$$scope:{ctx:x}}}),Ns=new q({}),Os=new C({props:{name:"class transformers.Data2VecVisionModel",anchor:"transformers.Data2VecVisionModel",parameters:[{name:"config",val:": Data2VecVisionConfig"},{name:"add_pooling_layer",val:": bool = False"}],parametersDescription:[{anchor:"transformers.Data2VecVisionModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecVisionConfig">Data2VecVisionConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_vision.py#L646"}}),Hs=new C({props:{name:"forward",anchor:"transformers.Data2VecVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Data2VecVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.Data2VecVisionModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Data2VecVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_vision.py#L673",returnDescription:`
<p>A <code>transformers.models.data2vec.modeling_data2vec_vision.Data2VecVisionModelOutputWithPooling</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecVisionConfig"
>Data2VecVisionConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.</p>
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
<p><code>transformers.models.data2vec.modeling_data2vec_vision.Data2VecVisionModelOutputWithPooling</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),na=new S({props:{$$slots:{default:[A$]},$$scope:{ctx:x}}}),sa=new M({props:{anchor:"transformers.Data2VecVisionModel.forward.example",$$slots:{default:[M$]},$$scope:{ctx:x}}}),Rs=new q({}),Qs=new C({props:{name:"class transformers.Data2VecVisionForImageClassification",anchor:"transformers.Data2VecVisionForImageClassification",parameters:[{name:"config",val:": Data2VecVisionConfig"}],parametersDescription:[{anchor:"transformers.Data2VecVisionForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecVisionConfig">Data2VecVisionConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_vision.py#L760"}}),Us=new C({props:{name:"forward",anchor:"transformers.Data2VecVisionForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Data2VecVisionForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.Data2VecVisionForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Data2VecVisionForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecVisionForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecVisionForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecVisionForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_vision.py#L773",returnDescription:`
<p>A <code>transformers.modeling_outputs.ImageClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecVisionConfig"
>Data2VecVisionConfig</a>) and inputs.</p>
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
<p><code>transformers.modeling_outputs.ImageClassifierOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ia=new S({props:{$$slots:{default:[j$]},$$scope:{ctx:x}}}),la=new M({props:{anchor:"transformers.Data2VecVisionForImageClassification.forward.example",$$slots:{default:[E$]},$$scope:{ctx:x}}}),Js=new q({}),Ks=new C({props:{name:"class transformers.Data2VecVisionForSemanticSegmentation",anchor:"transformers.Data2VecVisionForSemanticSegmentation",parameters:[{name:"config",val:": Data2VecVisionConfig"}],parametersDescription:[{anchor:"transformers.Data2VecVisionForSemanticSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecVisionConfig">Data2VecVisionConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_vision.py#L1078"}}),er=new C({props:{name:"forward",anchor:"transformers.Data2VecVisionForSemanticSegmentation.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Data2VecVisionForSemanticSegmentation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.Data2VecVisionForSemanticSegmentation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Data2VecVisionForSemanticSegmentation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecVisionForSemanticSegmentation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecVisionForSemanticSegmentation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecVisionForSemanticSegmentation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth semantic segmentation maps for computing the loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code>, a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_vision.py#L1122",returnDescription:`
<p>A <code>transformers.modeling_outputs.SemanticSegmenterOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecVisionConfig"
>Data2VecVisionConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels, logits_height, logits_width)</code>) \u2014 Classification scores for each pixel.</p>
<Tip warning={true}>
<p>The logits returned do not necessarily have the same size as the <code>pixel_values</code> passed as inputs. This is
to avoid doing two interpolations and lose some quality when a user needs to resize the logits to the
original image size as post-processing. You should always check your logits shape and resize as needed.</p>
</Tip>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, patch_size, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_outputs.SemanticSegmenterOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ca=new S({props:{$$slots:{default:[q$]},$$scope:{ctx:x}}}),pa=new M({props:{anchor:"transformers.Data2VecVisionForSemanticSegmentation.forward.example",$$slots:{default:[z$]},$$scope:{ctx:x}}}),tr=new q({}),or=new C({props:{name:"class transformers.TFData2VecVisionModel",anchor:"transformers.TFData2VecVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFData2VecVisionModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecVisionConfig">Data2VecVisionConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_tf_data2vec_vision.py#L863"}}),ma=new S({props:{$$slots:{default:[P$]},$$scope:{ctx:x}}}),rr=new C({props:{name:"call",anchor:"transformers.TFData2VecVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bool_masked_pos",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFData2VecVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFData2VecVisionModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFData2VecVisionModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFData2VecVisionModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFData2VecVisionModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFData2VecVisionModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_tf_data2vec_vision.py#L875",returnDescription:`
<p>A <code>transformers.models.data2vec.modeling_tf_data2vec_vision.TFData2VecVisionModelOutputWithPooling</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecVisionConfig"
>Data2VecVisionConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.data2vec.modeling_tf_data2vec_vision.TFData2VecVisionModelOutputWithPooling</code> or <code>tuple(tf.Tensor)</code></p>
`}}),ua=new S({props:{$$slots:{default:[S$]},$$scope:{ctx:x}}}),fa=new M({props:{anchor:"transformers.TFData2VecVisionModel.call.example",$$slots:{default:[L$]},$$scope:{ctx:x}}}),ir=new q({}),lr=new C({props:{name:"class transformers.TFData2VecVisionForImageClassification",anchor:"transformers.TFData2VecVisionForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFData2VecVisionForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecVisionConfig">Data2VecVisionConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_tf_data2vec_vision.py#L916"}}),_a=new S({props:{$$slots:{default:[I$]},$$scope:{ctx:x}}}),hr=new C({props:{name:"call",anchor:"transformers.TFData2VecVisionForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFData2VecVisionForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor">BeitFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFData2VecVisionForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFData2VecVisionForImageClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFData2VecVisionForImageClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFData2VecVisionForImageClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFData2VecVisionForImageClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFData2VecVisionForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/data2vec/modeling_tf_data2vec_vision.py#L930",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecVisionConfig"
>Data2VecVisionConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),va=new S({props:{$$slots:{default:[N$]},$$scope:{ctx:x}}}),ba=new M({props:{anchor:"transformers.TFData2VecVisionForImageClassification.call.example",$$slots:{default:[O$]},$$scope:{ctx:x}}}),{c(){d=r("meta"),g=u(),c=r("h1"),h=r("a"),v=r("span"),w(a.$$.fragment),p=u(),D=r("span"),Oe=n("Data2Vec"),re=u(),A=r("h2"),Y=r("a"),N=r("span"),w(ee.$$.fragment),We=u(),O=r("span"),Be=n("Overview"),ve=u(),F=r("p"),z=n("The Data2Vec model was proposed in "),W=r("a"),dt=n("data2vec: A General Framework for Self-supervised Learning in Speech, Vision and Language"),ct=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and Michael Auli.
Data2Vec proposes a unified framework for self-supervised learning across different data modalities - text, audio and images.
Importantly, predicted targets for pre-training are contextualized latent representations of the inputs, rather than modality-specific, context-independent targets.`),L=u(),be=r("p"),pt=n("The abstract from the paper is the following:"),Wd=u(),Tr=r("p"),Ea=r("em"),Ip=n(`While the general idea of self-supervised learning is identical across modalities, the actual algorithms and
objectives differ widely because they were developed with a single modality in mind. To get us closer to general
self-supervised learning, we present data2vec, a framework that uses the same learning method for either speech,
NLP or computer vision. The core idea is to predict latent representations of the full input data based on a
masked view of the input in a selfdistillation setup using a standard Transformer architecture.
Instead of predicting modality-specific targets such as words, visual tokens or units of human speech which
are local in nature, data2vec predicts contextualized latent representations that contain information from
the entire input. Experiments on the major benchmarks of speech recognition, image classification, and
natural language understanding demonstrate a new state of the art or competitive performance to predominant approaches.
Models and code are available at `),qa=r("a"),Np=n("www.github.com/pytorch/fairseq/tree/master/examples/data2vec"),Op=n("."),Bd=u(),$r=r("p"),Wp=n("Tips:"),Hd=u(),we=r("ul"),Li=r("li"),Bp=n("Data2VecAudio, Data2VecText, and Data2VecVision have all been trained using the same self-supervised learning method."),Hp=u(),za=r("li"),Rp=n("For Data2VecAudio, preprocessing is identical to "),yr=r("a"),Qp=n("Wav2Vec2Model"),Gp=n(", including feature extraction"),Xp=u(),Pa=r("li"),Up=n("For Data2VecText, preprocessing is identical to "),Vr=r("a"),Jp=n("RobertaModel"),Kp=n(", including tokenization."),Yp=u(),Sa=r("li"),Zp=n("For Data2VecVision, preprocessing is identical to "),xr=r("a"),eh=n("BeitModel"),th=n(", including feature extraction."),Rd=u(),ke=r("p"),oh=n("This model was contributed by "),La=r("a"),ah=n("edugp"),nh=n(" and "),Ia=r("a"),sh=n("patrickvonplaten"),rh=n(`.
`),Na=r("a"),ih=n("sayakpaul"),lh=n(" contributed Data2Vec for vision in TensorFlow."),Qd=u(),Ye=r("p"),dh=n("The original code (for NLP and Speech) can be found "),Oa=r("a"),ch=n("here"),ph=n(`.
The original code for vision can be found `),Wa=r("a"),hh=n("here"),mh=n("."),Gd=u(),ht=r("h2"),so=r("a"),Ii=r("span"),w(Ba.$$.fragment),uh=u(),Ni=r("span"),fh=n("Data2VecTextConfig"),Xd=u(),ue=r("div"),w(Ha.$$.fragment),gh=u(),He=r("p"),_h=n("This is the configuration class to store the configuration of a "),Dr=r("a"),vh=n("Data2VecTextModel"),bh=n(" and "),Fr=r("a"),wh=n("Data2VecTextModel"),kh=n(`. It
is used to instantiate a Data2VecText model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Data2VecText
`),Ra=r("a"),Th=n("facebook/data2vec-text-base"),$h=n(" architecture."),yh=u(),mt=r("p"),Vh=n("Configuration objects inherit from "),Cr=r("a"),xh=n("PretrainedConfig"),Dh=n(` and can be used to control the model outputs. Read the
documentation from `),Ar=r("a"),Fh=n("PretrainedConfig"),Ch=n(" for more information."),Ah=u(),w(ro.$$.fragment),Ud=u(),ut=r("h2"),io=r("a"),Oi=r("span"),w(Qa.$$.fragment),Mh=u(),Wi=r("span"),jh=n("Data2VecAudioConfig"),Jd=u(),fe=r("div"),w(Ga.$$.fragment),Eh=u(),ft=r("p"),qh=n("This is the configuration class to store the configuration of a "),Mr=r("a"),zh=n("Data2VecAudioModel"),Ph=n(`. It is used to instantiate
an Data2VecAudio model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Data2VecAudio
`),Xa=r("a"),Sh=n("facebook/data2vec-audio-base-960h"),Lh=n(" architecture."),Ih=u(),gt=r("p"),Nh=n("Configuration objects inherit from "),jr=r("a"),Oh=n("PretrainedConfig"),Wh=n(` and can be used to control the model outputs. Read the
documentation from `),Er=r("a"),Bh=n("PretrainedConfig"),Hh=n(" for more information."),Rh=u(),w(lo.$$.fragment),Kd=u(),_t=r("h2"),co=r("a"),Bi=r("span"),w(Ua.$$.fragment),Qh=u(),Hi=r("span"),Gh=n("Data2VecVisionConfig"),Yd=u(),Re=r("div"),w(Ja.$$.fragment),Xh=u(),vt=r("p"),Uh=n("This is the configuration class to store the configuration of a "),qr=r("a"),Jh=n("Data2VecVisionModel"),Kh=n(`. It is used to instantiate
an Data2VecVision model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Data2VecVision
`),Ka=r("a"),Yh=n("facebook/data2vec-vision-base"),Zh=n(" architecture."),em=u(),w(po.$$.fragment),Zd=u(),bt=r("h2"),ho=r("a"),Ri=r("span"),w(Ya.$$.fragment),tm=u(),Qi=r("span"),om=n("Data2VecAudioModel"),ec=u(),te=r("div"),w(Za.$$.fragment),am=u(),en=r("p"),nm=n(`The bare Data2VecAudio Model transformer outputting raw hidden-states without any specific head on top.
Data2VecAudio was proposed in `),tn=r("a"),sm=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),rm=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),im=u(),on=r("p"),lm=n("This model inherits from "),zr=r("a"),dm=n("PreTrainedModel"),cm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),pm=u(),an=r("p"),hm=n("This model is a PyTorch "),nn=r("a"),mm=n("torch.nn.Module"),um=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fm=u(),Te=r("div"),w(sn.$$.fragment),gm=u(),wt=r("p"),_m=n("The "),Pr=r("a"),vm=n("Data2VecAudioModel"),bm=n(" forward method, overrides the "),Gi=r("code"),wm=n("__call__"),km=n(" special method."),Tm=u(),w(mo.$$.fragment),$m=u(),w(uo.$$.fragment),tc=u(),kt=r("h2"),fo=r("a"),Xi=r("span"),w(rn.$$.fragment),ym=u(),Ui=r("span"),Vm=n("Data2VecAudioForAudioFrameClassification"),oc=u(),B=r("div"),w(ln.$$.fragment),xm=u(),Ji=r("p"),Dm=n("Data2VecAudio Model with a frame classification head on top for tasks like Speaker Diarization."),Fm=u(),dn=r("p"),Cm=n("Data2VecAudio was proposed in "),cn=r("a"),Am=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),Mm=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),jm=u(),pn=r("p"),Em=n("This model inherits from "),Sr=r("a"),qm=n("PreTrainedModel"),zm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Pm=u(),hn=r("p"),Sm=n("This model is a PyTorch "),mn=r("a"),Lm=n("torch.nn.Module"),Im=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Nm=u(),$e=r("div"),w(un.$$.fragment),Om=u(),Tt=r("p"),Wm=n("The "),Lr=r("a"),Bm=n("Data2VecAudioForAudioFrameClassification"),Hm=n(" forward method, overrides the "),Ki=r("code"),Rm=n("__call__"),Qm=n(" special method."),Gm=u(),w(go.$$.fragment),Xm=u(),w(_o.$$.fragment),ac=u(),$t=r("h2"),vo=r("a"),Yi=r("span"),w(fn.$$.fragment),Um=u(),Zi=r("span"),Jm=n("Data2VecAudioForCTC"),nc=u(),oe=r("div"),w(gn.$$.fragment),Km=u(),yt=r("p"),Ym=n("Data2VecAudio Model with a "),el=r("code"),Zm=n("language modeling"),eu=n(` head on top for Connectionist Temporal Classification (CTC).
Data2VecAudio was proposed in `),_n=r("a"),tu=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),ou=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),au=u(),vn=r("p"),nu=n("This model inherits from "),Ir=r("a"),su=n("PreTrainedModel"),ru=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),iu=u(),bn=r("p"),lu=n("This model is a PyTorch "),wn=r("a"),du=n("torch.nn.Module"),cu=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pu=u(),ie=r("div"),w(kn.$$.fragment),hu=u(),Vt=r("p"),mu=n("The "),Nr=r("a"),uu=n("Data2VecAudioForCTC"),fu=n(" forward method, overrides the "),tl=r("code"),gu=n("__call__"),_u=n(" special method."),vu=u(),w(bo.$$.fragment),bu=u(),w(wo.$$.fragment),wu=u(),w(ko.$$.fragment),sc=u(),xt=r("h2"),To=r("a"),ol=r("span"),w(Tn.$$.fragment),ku=u(),al=r("span"),Tu=n("Data2VecAudioForSequenceClassification"),rc=u(),H=r("div"),w($n.$$.fragment),$u=u(),nl=r("p"),yu=n(`Data2VecAudio Model with a sequence classification head on top (a linear layer over the pooled output) for tasks
like SUPERB Keyword Spotting.`),Vu=u(),yn=r("p"),xu=n("Data2VecAudio was proposed in "),Vn=r("a"),Du=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),Fu=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),Cu=u(),xn=r("p"),Au=n("This model inherits from "),Or=r("a"),Mu=n("PreTrainedModel"),ju=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Eu=u(),Dn=r("p"),qu=n("This model is a PyTorch "),Fn=r("a"),zu=n("torch.nn.Module"),Pu=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Su=u(),le=r("div"),w(Cn.$$.fragment),Lu=u(),Dt=r("p"),Iu=n("The "),Wr=r("a"),Nu=n("Data2VecAudioForSequenceClassification"),Ou=n(" forward method, overrides the "),sl=r("code"),Wu=n("__call__"),Bu=n(" special method."),Hu=u(),w($o.$$.fragment),Ru=u(),w(yo.$$.fragment),Qu=u(),w(Vo.$$.fragment),ic=u(),Ft=r("h2"),xo=r("a"),rl=r("span"),w(An.$$.fragment),Gu=u(),il=r("span"),Xu=n("Data2VecAudioForXVector"),lc=u(),R=r("div"),w(Mn.$$.fragment),Uu=u(),ll=r("p"),Ju=n("Data2VecAudio Model with an XVector feature extraction head on top for tasks like Speaker Verification."),Ku=u(),jn=r("p"),Yu=n("Data2VecAudio was proposed in "),En=r("a"),Zu=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),ef=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),tf=u(),qn=r("p"),of=n("This model inherits from "),Br=r("a"),af=n("PreTrainedModel"),nf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),sf=u(),zn=r("p"),rf=n("This model is a PyTorch "),Pn=r("a"),lf=n("torch.nn.Module"),df=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cf=u(),ye=r("div"),w(Sn.$$.fragment),pf=u(),Ct=r("p"),hf=n("The "),Hr=r("a"),mf=n("Data2VecAudioForXVector"),uf=n(" forward method, overrides the "),dl=r("code"),ff=n("__call__"),gf=n(" special method."),_f=u(),w(Do.$$.fragment),vf=u(),w(Fo.$$.fragment),dc=u(),At=r("h2"),Co=r("a"),cl=r("span"),w(Ln.$$.fragment),bf=u(),pl=r("span"),wf=n("Data2VecTextModel"),cc=u(),P=r("div"),w(In.$$.fragment),kf=u(),Nn=r("p"),Tf=n(`The bare Data2VecText Model for text transformer outputting raw hidden-states without any specific head on top.
Data2VecText was proposed in `),On=r("a"),$f=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),yf=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),Vf=u(),Wn=r("p"),xf=n("This model inherits from "),Rr=r("a"),Df=n("PreTrainedModel"),Ff=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cf=u(),Bn=r("p"),Af=n("This model is also a PyTorch "),Hn=r("a"),Mf=n("torch.nn.Module"),jf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ef=u(),Rn=r("p"),qf=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),hl=r("em"),zf=n(`Attention is
all you need`),Pf=n(`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),Sf=u(),Q=r("p"),Lf=n("To behave as an decoder the model needs to be initialized with the "),ml=r("code"),If=n("is_decoder"),Nf=n(` argument of the configuration set
to `),ul=r("code"),Of=n("True"),Wf=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),fl=r("code"),Bf=n("is_decoder"),Hf=n(` argument and
`),gl=r("code"),Rf=n("add_cross_attention"),Qf=n(" set to "),_l=r("code"),Gf=n("True"),Xf=n("; an "),vl=r("code"),Uf=n("encoder_hidden_states"),Jf=n(" is then expected as an input to the forward pass."),Kf=u(),Ao=r("p"),Yf=n(".. _"),bl=r("em"),Zf=n("Attention is all you need"),eg=n(": "),Qn=r("a"),tg=n("https://arxiv.org/abs/1706.03762"),og=u(),Ve=r("div"),w(Gn.$$.fragment),ag=u(),Mt=r("p"),ng=n("The "),Qr=r("a"),sg=n("Data2VecTextModel"),rg=n(" forward method, overrides the "),wl=r("code"),ig=n("__call__"),lg=n(" special method."),dg=u(),w(Mo.$$.fragment),cg=u(),w(jo.$$.fragment),pc=u(),jt=r("h2"),Eo=r("a"),kl=r("span"),w(Xn.$$.fragment),pg=u(),Tl=r("span"),hg=n("Data2VecTextForCausalLM"),hc=u(),ae=r("div"),w(Un.$$.fragment),mg=u(),Et=r("p"),ug=n("Data2VecText Model with a "),$l=r("code"),fg=n("language modeling"),gg=n(` head on top for CLM fine-tuning.
Data2VecText was proposed in `),Jn=r("a"),_g=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),vg=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),bg=u(),Kn=r("p"),wg=n("This model inherits from "),Gr=r("a"),kg=n("PreTrainedModel"),Tg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$g=u(),Yn=r("p"),yg=n("This model is also a PyTorch "),Zn=r("a"),Vg=n("torch.nn.Module"),xg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dg=u(),xe=r("div"),w(es.$$.fragment),Fg=u(),qt=r("p"),Cg=n("The "),Xr=r("a"),Ag=n("Data2VecTextForCausalLM"),Mg=n(" forward method, overrides the "),yl=r("code"),jg=n("__call__"),Eg=n(" special method."),qg=u(),w(qo.$$.fragment),zg=u(),w(zo.$$.fragment),mc=u(),zt=r("h2"),Po=r("a"),Vl=r("span"),w(ts.$$.fragment),Pg=u(),xl=r("span"),Sg=n("Data2VecTextForMaskedLM"),uc=u(),ne=r("div"),w(os.$$.fragment),Lg=u(),Pt=r("p"),Ig=n("data2vec Model with a "),Dl=r("code"),Ng=n("language modeling"),Og=n(` head on top.
Data2VecText was proposed in `),as=r("a"),Wg=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),Bg=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),Hg=u(),ns=r("p"),Rg=n("This model inherits from "),Ur=r("a"),Qg=n("PreTrainedModel"),Gg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xg=u(),ss=r("p"),Ug=n("This model is also a PyTorch "),rs=r("a"),Jg=n("torch.nn.Module"),Kg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yg=u(),de=r("div"),w(is.$$.fragment),Zg=u(),St=r("p"),e_=n("The "),Jr=r("a"),t_=n("Data2VecTextForMaskedLM"),o_=n(" forward method, overrides the "),Fl=r("code"),a_=n("__call__"),n_=n(" special method."),s_=u(),w(So.$$.fragment),r_=u(),w(Lo.$$.fragment),i_=u(),w(Io.$$.fragment),fc=u(),Lt=r("h2"),No=r("a"),Cl=r("span"),w(ls.$$.fragment),l_=u(),Al=r("span"),d_=n("Data2VecTextForSequenceClassification"),gc=u(),G=r("div"),w(ds.$$.fragment),c_=u(),Ml=r("p"),p_=n(`Data2VecText Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),h_=u(),cs=r("p"),m_=n("Data2VecText was proposed in "),ps=r("a"),u_=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),f_=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),g_=u(),hs=r("p"),__=n("This model inherits from "),Kr=r("a"),v_=n("PreTrainedModel"),b_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),w_=u(),ms=r("p"),k_=n("This model is also a PyTorch "),us=r("a"),T_=n("torch.nn.Module"),$_=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),y_=u(),I=r("div"),w(fs.$$.fragment),V_=u(),It=r("p"),x_=n("The "),Yr=r("a"),D_=n("Data2VecTextForSequenceClassification"),F_=n(" forward method, overrides the "),jl=r("code"),C_=n("__call__"),A_=n(" special method."),M_=u(),w(Oo.$$.fragment),j_=u(),w(Wo.$$.fragment),E_=u(),w(Bo.$$.fragment),q_=u(),w(Ho.$$.fragment),z_=u(),w(Ro.$$.fragment),_c=u(),Nt=r("h2"),Qo=r("a"),El=r("span"),w(gs.$$.fragment),P_=u(),ql=r("span"),S_=n("Data2VecTextForMultipleChoice"),vc=u(),X=r("div"),w(_s.$$.fragment),L_=u(),zl=r("p"),I_=n(`Data2VecText Model with a multiple choice classification head on top (a linear layer on top of the pooled output
and a softmax) e.g. for RocStories/SWAG tasks.`),N_=u(),vs=r("p"),O_=n("Data2VecText was proposed in "),bs=r("a"),W_=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),B_=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),H_=u(),ws=r("p"),R_=n("This model inherits from "),Zr=r("a"),Q_=n("PreTrainedModel"),G_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),X_=u(),ks=r("p"),U_=n("This model is also a PyTorch "),Ts=r("a"),J_=n("torch.nn.Module"),K_=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Y_=u(),De=r("div"),w($s.$$.fragment),Z_=u(),Ot=r("p"),e2=n("The "),ei=r("a"),t2=n("Data2VecTextForMultipleChoice"),o2=n(" forward method, overrides the "),Pl=r("code"),a2=n("__call__"),n2=n(" special method."),s2=u(),w(Go.$$.fragment),r2=u(),w(Xo.$$.fragment),bc=u(),Wt=r("h2"),Uo=r("a"),Sl=r("span"),w(ys.$$.fragment),i2=u(),Ll=r("span"),l2=n("Data2VecTextForTokenClassification"),wc=u(),U=r("div"),w(Vs.$$.fragment),d2=u(),Il=r("p"),c2=n(`Data2VecText Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),p2=u(),xs=r("p"),h2=n("Data2VecText was proposed in "),Ds=r("a"),m2=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),u2=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),f2=u(),Fs=r("p"),g2=n("This model inherits from "),ti=r("a"),_2=n("PreTrainedModel"),v2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),b2=u(),Cs=r("p"),w2=n("This model is also a PyTorch "),As=r("a"),k2=n("torch.nn.Module"),T2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$2=u(),ce=r("div"),w(Ms.$$.fragment),y2=u(),Bt=r("p"),V2=n("The "),oi=r("a"),x2=n("Data2VecTextForTokenClassification"),D2=n(" forward method, overrides the "),Nl=r("code"),F2=n("__call__"),C2=n(" special method."),A2=u(),w(Jo.$$.fragment),M2=u(),w(Ko.$$.fragment),j2=u(),w(Yo.$$.fragment),kc=u(),Ht=r("h2"),Zo=r("a"),Ol=r("span"),w(js.$$.fragment),E2=u(),Wl=r("span"),q2=n("Data2VecTextForQuestionAnswering"),Tc=u(),J=r("div"),w(Es.$$.fragment),z2=u(),Rt=r("p"),P2=n(`Data2VecText Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Bl=r("code"),S2=n("span start logits"),L2=n(" and "),Hl=r("code"),I2=n("span end logits"),N2=n(")."),O2=u(),qs=r("p"),W2=n("Data2VecText was proposed in "),zs=r("a"),B2=n(`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),H2=n(` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),R2=u(),Ps=r("p"),Q2=n("This model inherits from "),ai=r("a"),G2=n("PreTrainedModel"),X2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),U2=u(),Ss=r("p"),J2=n("This model is also a PyTorch "),Ls=r("a"),K2=n("torch.nn.Module"),Y2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Z2=u(),pe=r("div"),w(Is.$$.fragment),ev=u(),Qt=r("p"),tv=n("The "),ni=r("a"),ov=n("Data2VecTextForQuestionAnswering"),av=n(" forward method, overrides the "),Rl=r("code"),nv=n("__call__"),sv=n(" special method."),rv=u(),w(ea.$$.fragment),iv=u(),w(ta.$$.fragment),lv=u(),w(oa.$$.fragment),$c=u(),Gt=r("h2"),aa=r("a"),Ql=r("span"),w(Ns.$$.fragment),dv=u(),Gl=r("span"),cv=n("Data2VecVisionModel"),yc=u(),Qe=r("div"),w(Os.$$.fragment),pv=u(),Ws=r("p"),hv=n(`The bare Data2VecVision Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Bs=r("a"),mv=n("torch.nn.Module"),uv=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fv=u(),Fe=r("div"),w(Hs.$$.fragment),gv=u(),Xt=r("p"),_v=n("The "),si=r("a"),vv=n("Data2VecVisionModel"),bv=n(" forward method, overrides the "),Xl=r("code"),wv=n("__call__"),kv=n(" special method."),Tv=u(),w(na.$$.fragment),$v=u(),w(sa.$$.fragment),Vc=u(),Ut=r("h2"),ra=r("a"),Ul=r("span"),w(Rs.$$.fragment),yv=u(),Jl=r("span"),Vv=n("Data2VecVisionForImageClassification"),xc=u(),ge=r("div"),w(Qs.$$.fragment),xv=u(),Kl=r("p"),Dv=n(`Data2VecVision Model transformer with an image classification head on top (a linear layer on top of the average of
the final hidden states of the patch tokens) e.g. for ImageNet.`),Fv=u(),Gs=r("p"),Cv=n("This model is a PyTorch "),Xs=r("a"),Av=n("torch.nn.Module"),Mv=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jv=u(),Ce=r("div"),w(Us.$$.fragment),Ev=u(),Jt=r("p"),qv=n("The "),ri=r("a"),zv=n("Data2VecVisionForImageClassification"),Pv=n(" forward method, overrides the "),Yl=r("code"),Sv=n("__call__"),Lv=n(" special method."),Iv=u(),w(ia.$$.fragment),Nv=u(),w(la.$$.fragment),Dc=u(),Kt=r("h2"),da=r("a"),Zl=r("span"),w(Js.$$.fragment),Ov=u(),ed=r("span"),Wv=n("Data2VecVisionForSemanticSegmentation"),Fc=u(),_e=r("div"),w(Ks.$$.fragment),Bv=u(),td=r("p"),Hv=n("Data2VecVision Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),Rv=u(),Ys=r("p"),Qv=n("This model is a PyTorch "),Zs=r("a"),Gv=n("torch.nn.Module"),Xv=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Uv=u(),Ae=r("div"),w(er.$$.fragment),Jv=u(),Yt=r("p"),Kv=n("The "),ii=r("a"),Yv=n("Data2VecVisionForSemanticSegmentation"),Zv=n(" forward method, overrides the "),od=r("code"),eb=n("__call__"),tb=n(" special method."),ob=u(),w(ca.$$.fragment),ab=u(),w(pa.$$.fragment),Cc=u(),Zt=r("h2"),ha=r("a"),ad=r("span"),w(tr.$$.fragment),nb=u(),nd=r("span"),sb=n("TFData2VecVisionModel"),Ac=u(),se=r("div"),w(or.$$.fragment),rb=u(),ar=r("p"),ib=n(`The bare Data2VecVision Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),li=r("a"),lb=n("TFPreTrainedModel"),db=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.).`),cb=u(),nr=r("p"),pb=n("This model is also a "),sr=r("a"),hb=n("tf.keras.Model"),mb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ub=u(),w(ma.$$.fragment),fb=u(),Me=r("div"),w(rr.$$.fragment),gb=u(),eo=r("p"),_b=n("The "),di=r("a"),vb=n("TFData2VecVisionModel"),bb=n(" forward method, overrides the "),sd=r("code"),wb=n("__call__"),kb=n(" special method."),Tb=u(),w(ua.$$.fragment),$b=u(),w(fa.$$.fragment),Mc=u(),to=r("h2"),ga=r("a"),rd=r("span"),w(ir.$$.fragment),yb=u(),id=r("span"),Vb=n("TFData2VecVisionForImageClassification"),jc=u(),K=r("div"),w(lr.$$.fragment),xb=u(),ld=r("p"),Db=n(`Data2VecVision Model transformer with an image classification head on top (a linear layer on top of the average of
the final hidden states of the patch tokens) e.g. for ImageNet.`),Fb=u(),dr=r("p"),Cb=n("This model inherits from "),ci=r("a"),Ab=n("TFPreTrainedModel"),Mb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.).`),jb=u(),cr=r("p"),Eb=n("This model is also a "),pr=r("a"),qb=n("tf.keras.Model"),zb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pb=u(),w(_a.$$.fragment),Sb=u(),je=r("div"),w(hr.$$.fragment),Lb=u(),oo=r("p"),Ib=n("The "),pi=r("a"),Nb=n("TFData2VecVisionForImageClassification"),Ob=n(" forward method, overrides the "),dd=r("code"),Wb=n("__call__"),Bb=n(" special method."),Hb=u(),w(va.$$.fragment),Rb=u(),w(ba.$$.fragment),this.h()},l(o){const _=GT('[data-svelte="svelte-1phssyn"]',document.head);d=i(_,"META",{name:!0,content:!0}),_.forEach(t),g=f(o),c=i(o,"H1",{class:!0});var mr=l(c);h=i(mr,"A",{id:!0,class:!0,href:!0});var cd=l(h);v=i(cd,"SPAN",{});var pd=l(v);k(a.$$.fragment,pd),pd.forEach(t),cd.forEach(t),p=f(mr),D=i(mr,"SPAN",{});var hd=l(D);Oe=s(hd,"Data2Vec"),hd.forEach(t),mr.forEach(t),re=f(o),A=i(o,"H2",{class:!0});var ur=l(A);Y=i(ur,"A",{id:!0,class:!0,href:!0});var md=l(Y);N=i(md,"SPAN",{});var ud=l(N);k(ee.$$.fragment,ud),ud.forEach(t),md.forEach(t),We=f(ur),O=i(ur,"SPAN",{});var fd=l(O);Be=s(fd,"Overview"),fd.forEach(t),ur.forEach(t),ve=f(o),F=i(o,"P",{});var fr=l(F);z=s(fr,"The Data2Vec model was proposed in "),W=i(fr,"A",{href:!0,rel:!0});var gd=l(W);dt=s(gd,"data2vec: A General Framework for Self-supervised Learning in Speech, Vision and Language"),gd.forEach(t),ct=s(fr,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and Michael Auli.
Data2Vec proposes a unified framework for self-supervised learning across different data modalities - text, audio and images.
Importantly, predicted targets for pre-training are contextualized latent representations of the inputs, rather than modality-specific, context-independent targets.`),fr.forEach(t),L=f(o),be=i(o,"P",{});var _d=l(be);pt=s(_d,"The abstract from the paper is the following:"),_d.forEach(t),Wd=f(o),Tr=i(o,"P",{});var vd=l(Tr);Ea=i(vd,"EM",{});var gr=l(Ea);Ip=s(gr,`While the general idea of self-supervised learning is identical across modalities, the actual algorithms and
objectives differ widely because they were developed with a single modality in mind. To get us closer to general
self-supervised learning, we present data2vec, a framework that uses the same learning method for either speech,
NLP or computer vision. The core idea is to predict latent representations of the full input data based on a
masked view of the input in a selfdistillation setup using a standard Transformer architecture.
Instead of predicting modality-specific targets such as words, visual tokens or units of human speech which
are local in nature, data2vec predicts contextualized latent representations that contain information from
the entire input. Experiments on the major benchmarks of speech recognition, image classification, and
natural language understanding demonstrate a new state of the art or competitive performance to predominant approaches.
Models and code are available at `),qa=i(gr,"A",{href:!0,rel:!0});var bd=l(qa);Np=s(bd,"www.github.com/pytorch/fairseq/tree/master/examples/data2vec"),bd.forEach(t),Op=s(gr,"."),gr.forEach(t),vd.forEach(t),Bd=f(o),$r=i(o,"P",{});var wd=l($r);Wp=s(wd,"Tips:"),wd.forEach(t),Hd=f(o),we=i(o,"UL",{});var Ge=l(we);Li=i(Ge,"LI",{});var kd=l(Li);Bp=s(kd,"Data2VecAudio, Data2VecText, and Data2VecVision have all been trained using the same self-supervised learning method."),kd.forEach(t),Hp=f(Ge),za=i(Ge,"LI",{});var _r=l(za);Rp=s(_r,"For Data2VecAudio, preprocessing is identical to "),yr=i(_r,"A",{href:!0});var Td=l(yr);Qp=s(Td,"Wav2Vec2Model"),Td.forEach(t),Gp=s(_r,", including feature extraction"),_r.forEach(t),Xp=f(Ge),Pa=i(Ge,"LI",{});var vr=l(Pa);Up=s(vr,"For Data2VecText, preprocessing is identical to "),Vr=i(vr,"A",{href:!0});var $d=l(Vr);Jp=s($d,"RobertaModel"),$d.forEach(t),Kp=s(vr,", including tokenization."),vr.forEach(t),Yp=f(Ge),Sa=i(Ge,"LI",{});var br=l(Sa);Zp=s(br,"For Data2VecVision, preprocessing is identical to "),xr=i(br,"A",{href:!0});var yd=l(xr);eh=s(yd,"BeitModel"),yd.forEach(t),th=s(br,", including feature extraction."),br.forEach(t),Ge.forEach(t),Rd=f(o),ke=i(o,"P",{});var Xe=l(ke);oh=s(Xe,"This model was contributed by "),La=i(Xe,"A",{href:!0,rel:!0});var Vd=l(La);ah=s(Vd,"edugp"),Vd.forEach(t),nh=s(Xe," and "),Ia=i(Xe,"A",{href:!0,rel:!0});var xd=l(Ia);sh=s(xd,"patrickvonplaten"),xd.forEach(t),rh=s(Xe,`.
`),Na=i(Xe,"A",{href:!0,rel:!0});var Dd=l(Na);ih=s(Dd,"sayakpaul"),Dd.forEach(t),lh=s(Xe," contributed Data2Vec for vision in TensorFlow."),Xe.forEach(t),Qd=f(o),Ye=i(o,"P",{});var ao=l(Ye);dh=s(ao,"The original code (for NLP and Speech) can be found "),Oa=i(ao,"A",{href:!0,rel:!0});var Fd=l(Oa);ch=s(Fd,"here"),Fd.forEach(t),ph=s(ao,`.
The original code for vision can be found `),Wa=i(ao,"A",{href:!0,rel:!0});var Cd=l(Wa);hh=s(Cd,"here"),Cd.forEach(t),mh=s(ao,"."),ao.forEach(t),Gd=f(o),ht=i(o,"H2",{class:!0});var wr=l(ht);so=i(wr,"A",{id:!0,class:!0,href:!0});var Ad=l(so);Ii=i(Ad,"SPAN",{});var Md=l(Ii);k(Ba.$$.fragment,Md),Md.forEach(t),Ad.forEach(t),uh=f(wr),Ni=i(wr,"SPAN",{});var jd=l(Ni);fh=s(jd,"Data2VecTextConfig"),jd.forEach(t),wr.forEach(t),Xd=f(o),ue=i(o,"DIV",{class:!0});var Ue=l(ue);k(Ha.$$.fragment,Ue),gh=f(Ue),He=i(Ue,"P",{});var Je=l(He);_h=s(Je,"This is the configuration class to store the configuration of a "),Dr=i(Je,"A",{href:!0});var Ed=l(Dr);vh=s(Ed,"Data2VecTextModel"),Ed.forEach(t),bh=s(Je," and "),Fr=i(Je,"A",{href:!0});var qd=l(Fr);wh=s(qd,"Data2VecTextModel"),qd.forEach(t),kh=s(Je,`. It
is used to instantiate a Data2VecText model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Data2VecText
`),Ra=i(Je,"A",{href:!0,rel:!0});var zd=l(Ra);Th=s(zd,"facebook/data2vec-text-base"),zd.forEach(t),$h=s(Je," architecture."),Je.forEach(t),yh=f(Ue),mt=i(Ue,"P",{});var no=l(mt);Vh=s(no,"Configuration objects inherit from "),Cr=i(no,"A",{href:!0});var Pd=l(Cr);xh=s(Pd,"PretrainedConfig"),Pd.forEach(t),Dh=s(no,` and can be used to control the model outputs. Read the
documentation from `),Ar=i(no,"A",{href:!0});var Sd=l(Ar);Fh=s(Sd,"PretrainedConfig"),Sd.forEach(t),Ch=s(no," for more information."),no.forEach(t),Ah=f(Ue),k(ro.$$.fragment,Ue),Ue.forEach(t),Ud=f(o),ut=i(o,"H2",{class:!0});var kr=l(ut);io=i(kr,"A",{id:!0,class:!0,href:!0});var Ld=l(io);Oi=i(Ld,"SPAN",{});var Id=l(Oi);k(Qa.$$.fragment,Id),Id.forEach(t),Ld.forEach(t),Mh=f(kr),Wi=i(kr,"SPAN",{});var Nd=l(Wi);jh=s(Nd,"Data2VecAudioConfig"),Nd.forEach(t),kr.forEach(t),Jd=f(o),fe=i(o,"DIV",{class:!0});var Ke=l(fe);k(Ga.$$.fragment,Ke),Eh=f(Ke),ft=i(Ke,"P",{});var hi=l(ft);qh=s(hi,"This is the configuration class to store the configuration of a "),Mr=i(hi,"A",{href:!0});var Qb=l(Mr);zh=s(Qb,"Data2VecAudioModel"),Qb.forEach(t),Ph=s(hi,`. It is used to instantiate
an Data2VecAudio model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Data2VecAudio
`),Xa=i(hi,"A",{href:!0,rel:!0});var Gb=l(Xa);Sh=s(Gb,"facebook/data2vec-audio-base-960h"),Gb.forEach(t),Lh=s(hi," architecture."),hi.forEach(t),Ih=f(Ke),gt=i(Ke,"P",{});var mi=l(gt);Nh=s(mi,"Configuration objects inherit from "),jr=i(mi,"A",{href:!0});var Xb=l(jr);Oh=s(Xb,"PretrainedConfig"),Xb.forEach(t),Wh=s(mi,` and can be used to control the model outputs. Read the
documentation from `),Er=i(mi,"A",{href:!0});var Ub=l(Er);Bh=s(Ub,"PretrainedConfig"),Ub.forEach(t),Hh=s(mi," for more information."),mi.forEach(t),Rh=f(Ke),k(lo.$$.fragment,Ke),Ke.forEach(t),Kd=f(o),_t=i(o,"H2",{class:!0});var qc=l(_t);co=i(qc,"A",{id:!0,class:!0,href:!0});var Jb=l(co);Bi=i(Jb,"SPAN",{});var Kb=l(Bi);k(Ua.$$.fragment,Kb),Kb.forEach(t),Jb.forEach(t),Qh=f(qc),Hi=i(qc,"SPAN",{});var Yb=l(Hi);Gh=s(Yb,"Data2VecVisionConfig"),Yb.forEach(t),qc.forEach(t),Yd=f(o),Re=i(o,"DIV",{class:!0});var ui=l(Re);k(Ja.$$.fragment,ui),Xh=f(ui),vt=i(ui,"P",{});var fi=l(vt);Uh=s(fi,"This is the configuration class to store the configuration of a "),qr=i(fi,"A",{href:!0});var Zb=l(qr);Jh=s(Zb,"Data2VecVisionModel"),Zb.forEach(t),Kh=s(fi,`. It is used to instantiate
an Data2VecVision model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Data2VecVision
`),Ka=i(fi,"A",{href:!0,rel:!0});var ew=l(Ka);Yh=s(ew,"facebook/data2vec-vision-base"),ew.forEach(t),Zh=s(fi," architecture."),fi.forEach(t),em=f(ui),k(po.$$.fragment,ui),ui.forEach(t),Zd=f(o),bt=i(o,"H2",{class:!0});var zc=l(bt);ho=i(zc,"A",{id:!0,class:!0,href:!0});var tw=l(ho);Ri=i(tw,"SPAN",{});var ow=l(Ri);k(Ya.$$.fragment,ow),ow.forEach(t),tw.forEach(t),tm=f(zc),Qi=i(zc,"SPAN",{});var aw=l(Qi);om=s(aw,"Data2VecAudioModel"),aw.forEach(t),zc.forEach(t),ec=f(o),te=i(o,"DIV",{class:!0});var Ze=l(te);k(Za.$$.fragment,Ze),am=f(Ze),en=i(Ze,"P",{});var Pc=l(en);nm=s(Pc,`The bare Data2VecAudio Model transformer outputting raw hidden-states without any specific head on top.
Data2VecAudio was proposed in `),tn=i(Pc,"A",{href:!0,rel:!0});var nw=l(tn);sm=s(nw,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),nw.forEach(t),rm=s(Pc,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),Pc.forEach(t),im=f(Ze),on=i(Ze,"P",{});var Sc=l(on);lm=s(Sc,"This model inherits from "),zr=i(Sc,"A",{href:!0});var sw=l(zr);dm=s(sw,"PreTrainedModel"),sw.forEach(t),cm=s(Sc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Sc.forEach(t),pm=f(Ze),an=i(Ze,"P",{});var Lc=l(an);hm=s(Lc,"This model is a PyTorch "),nn=i(Lc,"A",{href:!0,rel:!0});var rw=l(nn);mm=s(rw,"torch.nn.Module"),rw.forEach(t),um=s(Lc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Lc.forEach(t),fm=f(Ze),Te=i(Ze,"DIV",{class:!0});var wa=l(Te);k(sn.$$.fragment,wa),gm=f(wa),wt=i(wa,"P",{});var gi=l(wt);_m=s(gi,"The "),Pr=i(gi,"A",{href:!0});var iw=l(Pr);vm=s(iw,"Data2VecAudioModel"),iw.forEach(t),bm=s(gi," forward method, overrides the "),Gi=i(gi,"CODE",{});var lw=l(Gi);wm=s(lw,"__call__"),lw.forEach(t),km=s(gi," special method."),gi.forEach(t),Tm=f(wa),k(mo.$$.fragment,wa),$m=f(wa),k(uo.$$.fragment,wa),wa.forEach(t),Ze.forEach(t),tc=f(o),kt=i(o,"H2",{class:!0});var Ic=l(kt);fo=i(Ic,"A",{id:!0,class:!0,href:!0});var dw=l(fo);Xi=i(dw,"SPAN",{});var cw=l(Xi);k(rn.$$.fragment,cw),cw.forEach(t),dw.forEach(t),ym=f(Ic),Ui=i(Ic,"SPAN",{});var pw=l(Ui);Vm=s(pw,"Data2VecAudioForAudioFrameClassification"),pw.forEach(t),Ic.forEach(t),oc=f(o),B=i(o,"DIV",{class:!0});var Ee=l(B);k(ln.$$.fragment,Ee),xm=f(Ee),Ji=i(Ee,"P",{});var hw=l(Ji);Dm=s(hw,"Data2VecAudio Model with a frame classification head on top for tasks like Speaker Diarization."),hw.forEach(t),Fm=f(Ee),dn=i(Ee,"P",{});var Nc=l(dn);Cm=s(Nc,"Data2VecAudio was proposed in "),cn=i(Nc,"A",{href:!0,rel:!0});var mw=l(cn);Am=s(mw,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),mw.forEach(t),Mm=s(Nc,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),Nc.forEach(t),jm=f(Ee),pn=i(Ee,"P",{});var Oc=l(pn);Em=s(Oc,"This model inherits from "),Sr=i(Oc,"A",{href:!0});var uw=l(Sr);qm=s(uw,"PreTrainedModel"),uw.forEach(t),zm=s(Oc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Oc.forEach(t),Pm=f(Ee),hn=i(Ee,"P",{});var Wc=l(hn);Sm=s(Wc,"This model is a PyTorch "),mn=i(Wc,"A",{href:!0,rel:!0});var fw=l(mn);Lm=s(fw,"torch.nn.Module"),fw.forEach(t),Im=s(Wc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wc.forEach(t),Nm=f(Ee),$e=i(Ee,"DIV",{class:!0});var ka=l($e);k(un.$$.fragment,ka),Om=f(ka),Tt=i(ka,"P",{});var _i=l(Tt);Wm=s(_i,"The "),Lr=i(_i,"A",{href:!0});var gw=l(Lr);Bm=s(gw,"Data2VecAudioForAudioFrameClassification"),gw.forEach(t),Hm=s(_i," forward method, overrides the "),Ki=i(_i,"CODE",{});var _w=l(Ki);Rm=s(_w,"__call__"),_w.forEach(t),Qm=s(_i," special method."),_i.forEach(t),Gm=f(ka),k(go.$$.fragment,ka),Xm=f(ka),k(_o.$$.fragment,ka),ka.forEach(t),Ee.forEach(t),ac=f(o),$t=i(o,"H2",{class:!0});var Bc=l($t);vo=i(Bc,"A",{id:!0,class:!0,href:!0});var vw=l(vo);Yi=i(vw,"SPAN",{});var bw=l(Yi);k(fn.$$.fragment,bw),bw.forEach(t),vw.forEach(t),Um=f(Bc),Zi=i(Bc,"SPAN",{});var ww=l(Zi);Jm=s(ww,"Data2VecAudioForCTC"),ww.forEach(t),Bc.forEach(t),nc=f(o),oe=i(o,"DIV",{class:!0});var et=l(oe);k(gn.$$.fragment,et),Km=f(et),yt=i(et,"P",{});var vi=l(yt);Ym=s(vi,"Data2VecAudio Model with a "),el=i(vi,"CODE",{});var kw=l(el);Zm=s(kw,"language modeling"),kw.forEach(t),eu=s(vi,` head on top for Connectionist Temporal Classification (CTC).
Data2VecAudio was proposed in `),_n=i(vi,"A",{href:!0,rel:!0});var Tw=l(_n);tu=s(Tw,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),Tw.forEach(t),ou=s(vi,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),vi.forEach(t),au=f(et),vn=i(et,"P",{});var Hc=l(vn);nu=s(Hc,"This model inherits from "),Ir=i(Hc,"A",{href:!0});var $w=l(Ir);su=s($w,"PreTrainedModel"),$w.forEach(t),ru=s(Hc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Hc.forEach(t),iu=f(et),bn=i(et,"P",{});var Rc=l(bn);lu=s(Rc,"This model is a PyTorch "),wn=i(Rc,"A",{href:!0,rel:!0});var yw=l(wn);du=s(yw,"torch.nn.Module"),yw.forEach(t),cu=s(Rc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Rc.forEach(t),pu=f(et),ie=i(et,"DIV",{class:!0});var tt=l(ie);k(kn.$$.fragment,tt),hu=f(tt),Vt=i(tt,"P",{});var bi=l(Vt);mu=s(bi,"The "),Nr=i(bi,"A",{href:!0});var Vw=l(Nr);uu=s(Vw,"Data2VecAudioForCTC"),Vw.forEach(t),fu=s(bi," forward method, overrides the "),tl=i(bi,"CODE",{});var xw=l(tl);gu=s(xw,"__call__"),xw.forEach(t),_u=s(bi," special method."),bi.forEach(t),vu=f(tt),k(bo.$$.fragment,tt),bu=f(tt),k(wo.$$.fragment,tt),wu=f(tt),k(ko.$$.fragment,tt),tt.forEach(t),et.forEach(t),sc=f(o),xt=i(o,"H2",{class:!0});var Qc=l(xt);To=i(Qc,"A",{id:!0,class:!0,href:!0});var Dw=l(To);ol=i(Dw,"SPAN",{});var Fw=l(ol);k(Tn.$$.fragment,Fw),Fw.forEach(t),Dw.forEach(t),ku=f(Qc),al=i(Qc,"SPAN",{});var Cw=l(al);Tu=s(Cw,"Data2VecAudioForSequenceClassification"),Cw.forEach(t),Qc.forEach(t),rc=f(o),H=i(o,"DIV",{class:!0});var qe=l(H);k($n.$$.fragment,qe),$u=f(qe),nl=i(qe,"P",{});var Aw=l(nl);yu=s(Aw,`Data2VecAudio Model with a sequence classification head on top (a linear layer over the pooled output) for tasks
like SUPERB Keyword Spotting.`),Aw.forEach(t),Vu=f(qe),yn=i(qe,"P",{});var Gc=l(yn);xu=s(Gc,"Data2VecAudio was proposed in "),Vn=i(Gc,"A",{href:!0,rel:!0});var Mw=l(Vn);Du=s(Mw,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),Mw.forEach(t),Fu=s(Gc,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),Gc.forEach(t),Cu=f(qe),xn=i(qe,"P",{});var Xc=l(xn);Au=s(Xc,"This model inherits from "),Or=i(Xc,"A",{href:!0});var jw=l(Or);Mu=s(jw,"PreTrainedModel"),jw.forEach(t),ju=s(Xc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Xc.forEach(t),Eu=f(qe),Dn=i(qe,"P",{});var Uc=l(Dn);qu=s(Uc,"This model is a PyTorch "),Fn=i(Uc,"A",{href:!0,rel:!0});var Ew=l(Fn);zu=s(Ew,"torch.nn.Module"),Ew.forEach(t),Pu=s(Uc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Uc.forEach(t),Su=f(qe),le=i(qe,"DIV",{class:!0});var ot=l(le);k(Cn.$$.fragment,ot),Lu=f(ot),Dt=i(ot,"P",{});var wi=l(Dt);Iu=s(wi,"The "),Wr=i(wi,"A",{href:!0});var qw=l(Wr);Nu=s(qw,"Data2VecAudioForSequenceClassification"),qw.forEach(t),Ou=s(wi," forward method, overrides the "),sl=i(wi,"CODE",{});var zw=l(sl);Wu=s(zw,"__call__"),zw.forEach(t),Bu=s(wi," special method."),wi.forEach(t),Hu=f(ot),k($o.$$.fragment,ot),Ru=f(ot),k(yo.$$.fragment,ot),Qu=f(ot),k(Vo.$$.fragment,ot),ot.forEach(t),qe.forEach(t),ic=f(o),Ft=i(o,"H2",{class:!0});var Jc=l(Ft);xo=i(Jc,"A",{id:!0,class:!0,href:!0});var Pw=l(xo);rl=i(Pw,"SPAN",{});var Sw=l(rl);k(An.$$.fragment,Sw),Sw.forEach(t),Pw.forEach(t),Gu=f(Jc),il=i(Jc,"SPAN",{});var Lw=l(il);Xu=s(Lw,"Data2VecAudioForXVector"),Lw.forEach(t),Jc.forEach(t),lc=f(o),R=i(o,"DIV",{class:!0});var ze=l(R);k(Mn.$$.fragment,ze),Uu=f(ze),ll=i(ze,"P",{});var Iw=l(ll);Ju=s(Iw,"Data2VecAudio Model with an XVector feature extraction head on top for tasks like Speaker Verification."),Iw.forEach(t),Ku=f(ze),jn=i(ze,"P",{});var Kc=l(jn);Yu=s(Kc,"Data2VecAudio was proposed in "),En=i(Kc,"A",{href:!0,rel:!0});var Nw=l(En);Zu=s(Nw,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),Nw.forEach(t),ef=s(Kc,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),Kc.forEach(t),tf=f(ze),qn=i(ze,"P",{});var Yc=l(qn);of=s(Yc,"This model inherits from "),Br=i(Yc,"A",{href:!0});var Ow=l(Br);af=s(Ow,"PreTrainedModel"),Ow.forEach(t),nf=s(Yc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Yc.forEach(t),sf=f(ze),zn=i(ze,"P",{});var Zc=l(zn);rf=s(Zc,"This model is a PyTorch "),Pn=i(Zc,"A",{href:!0,rel:!0});var Ww=l(Pn);lf=s(Ww,"torch.nn.Module"),Ww.forEach(t),df=s(Zc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zc.forEach(t),cf=f(ze),ye=i(ze,"DIV",{class:!0});var Ta=l(ye);k(Sn.$$.fragment,Ta),pf=f(Ta),Ct=i(Ta,"P",{});var ki=l(Ct);hf=s(ki,"The "),Hr=i(ki,"A",{href:!0});var Bw=l(Hr);mf=s(Bw,"Data2VecAudioForXVector"),Bw.forEach(t),uf=s(ki," forward method, overrides the "),dl=i(ki,"CODE",{});var Hw=l(dl);ff=s(Hw,"__call__"),Hw.forEach(t),gf=s(ki," special method."),ki.forEach(t),_f=f(Ta),k(Do.$$.fragment,Ta),vf=f(Ta),k(Fo.$$.fragment,Ta),Ta.forEach(t),ze.forEach(t),dc=f(o),At=i(o,"H2",{class:!0});var ep=l(At);Co=i(ep,"A",{id:!0,class:!0,href:!0});var Rw=l(Co);cl=i(Rw,"SPAN",{});var Qw=l(cl);k(Ln.$$.fragment,Qw),Qw.forEach(t),Rw.forEach(t),bf=f(ep),pl=i(ep,"SPAN",{});var Gw=l(pl);wf=s(Gw,"Data2VecTextModel"),Gw.forEach(t),ep.forEach(t),cc=f(o),P=i(o,"DIV",{class:!0});var Z=l(P);k(In.$$.fragment,Z),kf=f(Z),Nn=i(Z,"P",{});var tp=l(Nn);Tf=s(tp,`The bare Data2VecText Model for text transformer outputting raw hidden-states without any specific head on top.
Data2VecText was proposed in `),On=i(tp,"A",{href:!0,rel:!0});var Xw=l(On);$f=s(Xw,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),Xw.forEach(t),yf=s(tp,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),tp.forEach(t),Vf=f(Z),Wn=i(Z,"P",{});var op=l(Wn);xf=s(op,"This model inherits from "),Rr=i(op,"A",{href:!0});var Uw=l(Rr);Df=s(Uw,"PreTrainedModel"),Uw.forEach(t),Ff=s(op,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),op.forEach(t),Cf=f(Z),Bn=i(Z,"P",{});var ap=l(Bn);Af=s(ap,"This model is also a PyTorch "),Hn=i(ap,"A",{href:!0,rel:!0});var Jw=l(Hn);Mf=s(Jw,"torch.nn.Module"),Jw.forEach(t),jf=s(ap,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ap.forEach(t),Ef=f(Z),Rn=i(Z,"P",{});var np=l(Rn);qf=s(np,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),hl=i(np,"EM",{});var Kw=l(hl);zf=s(Kw,`Attention is
all you need`),Kw.forEach(t),Pf=s(np,`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),np.forEach(t),Sf=f(Z),Q=i(Z,"P",{});var he=l(Q);Lf=s(he,"To behave as an decoder the model needs to be initialized with the "),ml=i(he,"CODE",{});var Yw=l(ml);If=s(Yw,"is_decoder"),Yw.forEach(t),Nf=s(he,` argument of the configuration set
to `),ul=i(he,"CODE",{});var Zw=l(ul);Of=s(Zw,"True"),Zw.forEach(t),Wf=s(he,". To be used in a Seq2Seq model, the model needs to initialized with both "),fl=i(he,"CODE",{});var ek=l(fl);Bf=s(ek,"is_decoder"),ek.forEach(t),Hf=s(he,` argument and
`),gl=i(he,"CODE",{});var tk=l(gl);Rf=s(tk,"add_cross_attention"),tk.forEach(t),Qf=s(he," set to "),_l=i(he,"CODE",{});var ok=l(_l);Gf=s(ok,"True"),ok.forEach(t),Xf=s(he,"; an "),vl=i(he,"CODE",{});var ak=l(vl);Uf=s(ak,"encoder_hidden_states"),ak.forEach(t),Jf=s(he," is then expected as an input to the forward pass."),he.forEach(t),Kf=f(Z),Ao=i(Z,"P",{});var Od=l(Ao);Yf=s(Od,".. _"),bl=i(Od,"EM",{});var nk=l(bl);Zf=s(nk,"Attention is all you need"),nk.forEach(t),eg=s(Od,": "),Qn=i(Od,"A",{href:!0,rel:!0});var sk=l(Qn);tg=s(sk,"https://arxiv.org/abs/1706.03762"),sk.forEach(t),Od.forEach(t),og=f(Z),Ve=i(Z,"DIV",{class:!0});var $a=l(Ve);k(Gn.$$.fragment,$a),ag=f($a),Mt=i($a,"P",{});var Ti=l(Mt);ng=s(Ti,"The "),Qr=i(Ti,"A",{href:!0});var rk=l(Qr);sg=s(rk,"Data2VecTextModel"),rk.forEach(t),rg=s(Ti," forward method, overrides the "),wl=i(Ti,"CODE",{});var ik=l(wl);ig=s(ik,"__call__"),ik.forEach(t),lg=s(Ti," special method."),Ti.forEach(t),dg=f($a),k(Mo.$$.fragment,$a),cg=f($a),k(jo.$$.fragment,$a),$a.forEach(t),Z.forEach(t),pc=f(o),jt=i(o,"H2",{class:!0});var sp=l(jt);Eo=i(sp,"A",{id:!0,class:!0,href:!0});var lk=l(Eo);kl=i(lk,"SPAN",{});var dk=l(kl);k(Xn.$$.fragment,dk),dk.forEach(t),lk.forEach(t),pg=f(sp),Tl=i(sp,"SPAN",{});var ck=l(Tl);hg=s(ck,"Data2VecTextForCausalLM"),ck.forEach(t),sp.forEach(t),hc=f(o),ae=i(o,"DIV",{class:!0});var at=l(ae);k(Un.$$.fragment,at),mg=f(at),Et=i(at,"P",{});var $i=l(Et);ug=s($i,"Data2VecText Model with a "),$l=i($i,"CODE",{});var pk=l($l);fg=s(pk,"language modeling"),pk.forEach(t),gg=s($i,` head on top for CLM fine-tuning.
Data2VecText was proposed in `),Jn=i($i,"A",{href:!0,rel:!0});var hk=l(Jn);_g=s(hk,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),hk.forEach(t),vg=s($i,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),$i.forEach(t),bg=f(at),Kn=i(at,"P",{});var rp=l(Kn);wg=s(rp,"This model inherits from "),Gr=i(rp,"A",{href:!0});var mk=l(Gr);kg=s(mk,"PreTrainedModel"),mk.forEach(t),Tg=s(rp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rp.forEach(t),$g=f(at),Yn=i(at,"P",{});var ip=l(Yn);yg=s(ip,"This model is also a PyTorch "),Zn=i(ip,"A",{href:!0,rel:!0});var uk=l(Zn);Vg=s(uk,"torch.nn.Module"),uk.forEach(t),xg=s(ip,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ip.forEach(t),Dg=f(at),xe=i(at,"DIV",{class:!0});var ya=l(xe);k(es.$$.fragment,ya),Fg=f(ya),qt=i(ya,"P",{});var yi=l(qt);Cg=s(yi,"The "),Xr=i(yi,"A",{href:!0});var fk=l(Xr);Ag=s(fk,"Data2VecTextForCausalLM"),fk.forEach(t),Mg=s(yi," forward method, overrides the "),yl=i(yi,"CODE",{});var gk=l(yl);jg=s(gk,"__call__"),gk.forEach(t),Eg=s(yi," special method."),yi.forEach(t),qg=f(ya),k(qo.$$.fragment,ya),zg=f(ya),k(zo.$$.fragment,ya),ya.forEach(t),at.forEach(t),mc=f(o),zt=i(o,"H2",{class:!0});var lp=l(zt);Po=i(lp,"A",{id:!0,class:!0,href:!0});var _k=l(Po);Vl=i(_k,"SPAN",{});var vk=l(Vl);k(ts.$$.fragment,vk),vk.forEach(t),_k.forEach(t),Pg=f(lp),xl=i(lp,"SPAN",{});var bk=l(xl);Sg=s(bk,"Data2VecTextForMaskedLM"),bk.forEach(t),lp.forEach(t),uc=f(o),ne=i(o,"DIV",{class:!0});var nt=l(ne);k(os.$$.fragment,nt),Lg=f(nt),Pt=i(nt,"P",{});var Vi=l(Pt);Ig=s(Vi,"data2vec Model with a "),Dl=i(Vi,"CODE",{});var wk=l(Dl);Ng=s(wk,"language modeling"),wk.forEach(t),Og=s(Vi,` head on top.
Data2VecText was proposed in `),as=i(Vi,"A",{href:!0,rel:!0});var kk=l(as);Wg=s(kk,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),kk.forEach(t),Bg=s(Vi,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),Vi.forEach(t),Hg=f(nt),ns=i(nt,"P",{});var dp=l(ns);Rg=s(dp,"This model inherits from "),Ur=i(dp,"A",{href:!0});var Tk=l(Ur);Qg=s(Tk,"PreTrainedModel"),Tk.forEach(t),Gg=s(dp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dp.forEach(t),Xg=f(nt),ss=i(nt,"P",{});var cp=l(ss);Ug=s(cp,"This model is also a PyTorch "),rs=i(cp,"A",{href:!0,rel:!0});var $k=l(rs);Jg=s($k,"torch.nn.Module"),$k.forEach(t),Kg=s(cp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cp.forEach(t),Yg=f(nt),de=i(nt,"DIV",{class:!0});var st=l(de);k(is.$$.fragment,st),Zg=f(st),St=i(st,"P",{});var xi=l(St);e_=s(xi,"The "),Jr=i(xi,"A",{href:!0});var yk=l(Jr);t_=s(yk,"Data2VecTextForMaskedLM"),yk.forEach(t),o_=s(xi," forward method, overrides the "),Fl=i(xi,"CODE",{});var Vk=l(Fl);a_=s(Vk,"__call__"),Vk.forEach(t),n_=s(xi," special method."),xi.forEach(t),s_=f(st),k(So.$$.fragment,st),r_=f(st),k(Lo.$$.fragment,st),i_=f(st),k(Io.$$.fragment,st),st.forEach(t),nt.forEach(t),fc=f(o),Lt=i(o,"H2",{class:!0});var pp=l(Lt);No=i(pp,"A",{id:!0,class:!0,href:!0});var xk=l(No);Cl=i(xk,"SPAN",{});var Dk=l(Cl);k(ls.$$.fragment,Dk),Dk.forEach(t),xk.forEach(t),l_=f(pp),Al=i(pp,"SPAN",{});var Fk=l(Al);d_=s(Fk,"Data2VecTextForSequenceClassification"),Fk.forEach(t),pp.forEach(t),gc=f(o),G=i(o,"DIV",{class:!0});var Pe=l(G);k(ds.$$.fragment,Pe),c_=f(Pe),Ml=i(Pe,"P",{});var Ck=l(Ml);p_=s(Ck,`Data2VecText Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ck.forEach(t),h_=f(Pe),cs=i(Pe,"P",{});var hp=l(cs);m_=s(hp,"Data2VecText was proposed in "),ps=i(hp,"A",{href:!0,rel:!0});var Ak=l(ps);u_=s(Ak,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),Ak.forEach(t),f_=s(hp,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),hp.forEach(t),g_=f(Pe),hs=i(Pe,"P",{});var mp=l(hs);__=s(mp,"This model inherits from "),Kr=i(mp,"A",{href:!0});var Mk=l(Kr);v_=s(Mk,"PreTrainedModel"),Mk.forEach(t),b_=s(mp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mp.forEach(t),w_=f(Pe),ms=i(Pe,"P",{});var up=l(ms);k_=s(up,"This model is also a PyTorch "),us=i(up,"A",{href:!0,rel:!0});var jk=l(us);T_=s(jk,"torch.nn.Module"),jk.forEach(t),$_=s(up,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),up.forEach(t),y_=f(Pe),I=i(Pe,"DIV",{class:!0});var me=l(I);k(fs.$$.fragment,me),V_=f(me),It=i(me,"P",{});var Di=l(It);x_=s(Di,"The "),Yr=i(Di,"A",{href:!0});var Ek=l(Yr);D_=s(Ek,"Data2VecTextForSequenceClassification"),Ek.forEach(t),F_=s(Di," forward method, overrides the "),jl=i(Di,"CODE",{});var qk=l(jl);C_=s(qk,"__call__"),qk.forEach(t),A_=s(Di," special method."),Di.forEach(t),M_=f(me),k(Oo.$$.fragment,me),j_=f(me),k(Wo.$$.fragment,me),E_=f(me),k(Bo.$$.fragment,me),q_=f(me),k(Ho.$$.fragment,me),z_=f(me),k(Ro.$$.fragment,me),me.forEach(t),Pe.forEach(t),_c=f(o),Nt=i(o,"H2",{class:!0});var fp=l(Nt);Qo=i(fp,"A",{id:!0,class:!0,href:!0});var zk=l(Qo);El=i(zk,"SPAN",{});var Pk=l(El);k(gs.$$.fragment,Pk),Pk.forEach(t),zk.forEach(t),P_=f(fp),ql=i(fp,"SPAN",{});var Sk=l(ql);S_=s(Sk,"Data2VecTextForMultipleChoice"),Sk.forEach(t),fp.forEach(t),vc=f(o),X=i(o,"DIV",{class:!0});var Se=l(X);k(_s.$$.fragment,Se),L_=f(Se),zl=i(Se,"P",{});var Lk=l(zl);I_=s(Lk,`Data2VecText Model with a multiple choice classification head on top (a linear layer on top of the pooled output
and a softmax) e.g. for RocStories/SWAG tasks.`),Lk.forEach(t),N_=f(Se),vs=i(Se,"P",{});var gp=l(vs);O_=s(gp,"Data2VecText was proposed in "),bs=i(gp,"A",{href:!0,rel:!0});var Ik=l(bs);W_=s(Ik,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),Ik.forEach(t),B_=s(gp,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),gp.forEach(t),H_=f(Se),ws=i(Se,"P",{});var _p=l(ws);R_=s(_p,"This model inherits from "),Zr=i(_p,"A",{href:!0});var Nk=l(Zr);Q_=s(Nk,"PreTrainedModel"),Nk.forEach(t),G_=s(_p,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_p.forEach(t),X_=f(Se),ks=i(Se,"P",{});var vp=l(ks);U_=s(vp,"This model is also a PyTorch "),Ts=i(vp,"A",{href:!0,rel:!0});var Ok=l(Ts);J_=s(Ok,"torch.nn.Module"),Ok.forEach(t),K_=s(vp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vp.forEach(t),Y_=f(Se),De=i(Se,"DIV",{class:!0});var Va=l(De);k($s.$$.fragment,Va),Z_=f(Va),Ot=i(Va,"P",{});var Fi=l(Ot);e2=s(Fi,"The "),ei=i(Fi,"A",{href:!0});var Wk=l(ei);t2=s(Wk,"Data2VecTextForMultipleChoice"),Wk.forEach(t),o2=s(Fi," forward method, overrides the "),Pl=i(Fi,"CODE",{});var Bk=l(Pl);a2=s(Bk,"__call__"),Bk.forEach(t),n2=s(Fi," special method."),Fi.forEach(t),s2=f(Va),k(Go.$$.fragment,Va),r2=f(Va),k(Xo.$$.fragment,Va),Va.forEach(t),Se.forEach(t),bc=f(o),Wt=i(o,"H2",{class:!0});var bp=l(Wt);Uo=i(bp,"A",{id:!0,class:!0,href:!0});var Hk=l(Uo);Sl=i(Hk,"SPAN",{});var Rk=l(Sl);k(ys.$$.fragment,Rk),Rk.forEach(t),Hk.forEach(t),i2=f(bp),Ll=i(bp,"SPAN",{});var Qk=l(Ll);l2=s(Qk,"Data2VecTextForTokenClassification"),Qk.forEach(t),bp.forEach(t),wc=f(o),U=i(o,"DIV",{class:!0});var Le=l(U);k(Vs.$$.fragment,Le),d2=f(Le),Il=i(Le,"P",{});var Gk=l(Il);c2=s(Gk,`Data2VecText Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Gk.forEach(t),p2=f(Le),xs=i(Le,"P",{});var wp=l(xs);h2=s(wp,"Data2VecText was proposed in "),Ds=i(wp,"A",{href:!0,rel:!0});var Xk=l(Ds);m2=s(Xk,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),Xk.forEach(t),u2=s(wp,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),wp.forEach(t),f2=f(Le),Fs=i(Le,"P",{});var kp=l(Fs);g2=s(kp,"This model inherits from "),ti=i(kp,"A",{href:!0});var Uk=l(ti);_2=s(Uk,"PreTrainedModel"),Uk.forEach(t),v2=s(kp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kp.forEach(t),b2=f(Le),Cs=i(Le,"P",{});var Tp=l(Cs);w2=s(Tp,"This model is also a PyTorch "),As=i(Tp,"A",{href:!0,rel:!0});var Jk=l(As);k2=s(Jk,"torch.nn.Module"),Jk.forEach(t),T2=s(Tp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tp.forEach(t),$2=f(Le),ce=i(Le,"DIV",{class:!0});var rt=l(ce);k(Ms.$$.fragment,rt),y2=f(rt),Bt=i(rt,"P",{});var Ci=l(Bt);V2=s(Ci,"The "),oi=i(Ci,"A",{href:!0});var Kk=l(oi);x2=s(Kk,"Data2VecTextForTokenClassification"),Kk.forEach(t),D2=s(Ci," forward method, overrides the "),Nl=i(Ci,"CODE",{});var Yk=l(Nl);F2=s(Yk,"__call__"),Yk.forEach(t),C2=s(Ci," special method."),Ci.forEach(t),A2=f(rt),k(Jo.$$.fragment,rt),M2=f(rt),k(Ko.$$.fragment,rt),j2=f(rt),k(Yo.$$.fragment,rt),rt.forEach(t),Le.forEach(t),kc=f(o),Ht=i(o,"H2",{class:!0});var $p=l(Ht);Zo=i($p,"A",{id:!0,class:!0,href:!0});var Zk=l(Zo);Ol=i(Zk,"SPAN",{});var eT=l(Ol);k(js.$$.fragment,eT),eT.forEach(t),Zk.forEach(t),E2=f($p),Wl=i($p,"SPAN",{});var tT=l(Wl);q2=s(tT,"Data2VecTextForQuestionAnswering"),tT.forEach(t),$p.forEach(t),Tc=f(o),J=i(o,"DIV",{class:!0});var Ie=l(J);k(Es.$$.fragment,Ie),z2=f(Ie),Rt=i(Ie,"P",{});var Ai=l(Rt);P2=s(Ai,`Data2VecText Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Bl=i(Ai,"CODE",{});var oT=l(Bl);S2=s(oT,"span start logits"),oT.forEach(t),L2=s(Ai," and "),Hl=i(Ai,"CODE",{});var aT=l(Hl);I2=s(aT,"span end logits"),aT.forEach(t),N2=s(Ai,")."),Ai.forEach(t),O2=f(Ie),qs=i(Ie,"P",{});var yp=l(qs);W2=s(yp,"Data2VecText was proposed in "),zs=i(yp,"A",{href:!0,rel:!0});var nT=l(zs);B2=s(nT,`data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language`),nT.forEach(t),H2=s(yp,` by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`),yp.forEach(t),R2=f(Ie),Ps=i(Ie,"P",{});var Vp=l(Ps);Q2=s(Vp,"This model inherits from "),ai=i(Vp,"A",{href:!0});var sT=l(ai);G2=s(sT,"PreTrainedModel"),sT.forEach(t),X2=s(Vp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vp.forEach(t),U2=f(Ie),Ss=i(Ie,"P",{});var xp=l(Ss);J2=s(xp,"This model is also a PyTorch "),Ls=i(xp,"A",{href:!0,rel:!0});var rT=l(Ls);K2=s(rT,"torch.nn.Module"),rT.forEach(t),Y2=s(xp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xp.forEach(t),Z2=f(Ie),pe=i(Ie,"DIV",{class:!0});var it=l(pe);k(Is.$$.fragment,it),ev=f(it),Qt=i(it,"P",{});var Mi=l(Qt);tv=s(Mi,"The "),ni=i(Mi,"A",{href:!0});var iT=l(ni);ov=s(iT,"Data2VecTextForQuestionAnswering"),iT.forEach(t),av=s(Mi," forward method, overrides the "),Rl=i(Mi,"CODE",{});var lT=l(Rl);nv=s(lT,"__call__"),lT.forEach(t),sv=s(Mi," special method."),Mi.forEach(t),rv=f(it),k(ea.$$.fragment,it),iv=f(it),k(ta.$$.fragment,it),lv=f(it),k(oa.$$.fragment,it),it.forEach(t),Ie.forEach(t),$c=f(o),Gt=i(o,"H2",{class:!0});var Dp=l(Gt);aa=i(Dp,"A",{id:!0,class:!0,href:!0});var dT=l(aa);Ql=i(dT,"SPAN",{});var cT=l(Ql);k(Ns.$$.fragment,cT),cT.forEach(t),dT.forEach(t),dv=f(Dp),Gl=i(Dp,"SPAN",{});var pT=l(Gl);cv=s(pT,"Data2VecVisionModel"),pT.forEach(t),Dp.forEach(t),yc=f(o),Qe=i(o,"DIV",{class:!0});var ji=l(Qe);k(Os.$$.fragment,ji),pv=f(ji),Ws=i(ji,"P",{});var Fp=l(Ws);hv=s(Fp,`The bare Data2VecVision Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Bs=i(Fp,"A",{href:!0,rel:!0});var hT=l(Bs);mv=s(hT,"torch.nn.Module"),hT.forEach(t),uv=s(Fp,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fp.forEach(t),fv=f(ji),Fe=i(ji,"DIV",{class:!0});var xa=l(Fe);k(Hs.$$.fragment,xa),gv=f(xa),Xt=i(xa,"P",{});var Ei=l(Xt);_v=s(Ei,"The "),si=i(Ei,"A",{href:!0});var mT=l(si);vv=s(mT,"Data2VecVisionModel"),mT.forEach(t),bv=s(Ei," forward method, overrides the "),Xl=i(Ei,"CODE",{});var uT=l(Xl);wv=s(uT,"__call__"),uT.forEach(t),kv=s(Ei," special method."),Ei.forEach(t),Tv=f(xa),k(na.$$.fragment,xa),$v=f(xa),k(sa.$$.fragment,xa),xa.forEach(t),ji.forEach(t),Vc=f(o),Ut=i(o,"H2",{class:!0});var Cp=l(Ut);ra=i(Cp,"A",{id:!0,class:!0,href:!0});var fT=l(ra);Ul=i(fT,"SPAN",{});var gT=l(Ul);k(Rs.$$.fragment,gT),gT.forEach(t),fT.forEach(t),yv=f(Cp),Jl=i(Cp,"SPAN",{});var _T=l(Jl);Vv=s(_T,"Data2VecVisionForImageClassification"),_T.forEach(t),Cp.forEach(t),xc=f(o),ge=i(o,"DIV",{class:!0});var Da=l(ge);k(Qs.$$.fragment,Da),xv=f(Da),Kl=i(Da,"P",{});var vT=l(Kl);Dv=s(vT,`Data2VecVision Model transformer with an image classification head on top (a linear layer on top of the average of
the final hidden states of the patch tokens) e.g. for ImageNet.`),vT.forEach(t),Fv=f(Da),Gs=i(Da,"P",{});var Ap=l(Gs);Cv=s(Ap,"This model is a PyTorch "),Xs=i(Ap,"A",{href:!0,rel:!0});var bT=l(Xs);Av=s(bT,"torch.nn.Module"),bT.forEach(t),Mv=s(Ap,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ap.forEach(t),jv=f(Da),Ce=i(Da,"DIV",{class:!0});var Fa=l(Ce);k(Us.$$.fragment,Fa),Ev=f(Fa),Jt=i(Fa,"P",{});var qi=l(Jt);qv=s(qi,"The "),ri=i(qi,"A",{href:!0});var wT=l(ri);zv=s(wT,"Data2VecVisionForImageClassification"),wT.forEach(t),Pv=s(qi," forward method, overrides the "),Yl=i(qi,"CODE",{});var kT=l(Yl);Sv=s(kT,"__call__"),kT.forEach(t),Lv=s(qi," special method."),qi.forEach(t),Iv=f(Fa),k(ia.$$.fragment,Fa),Nv=f(Fa),k(la.$$.fragment,Fa),Fa.forEach(t),Da.forEach(t),Dc=f(o),Kt=i(o,"H2",{class:!0});var Mp=l(Kt);da=i(Mp,"A",{id:!0,class:!0,href:!0});var TT=l(da);Zl=i(TT,"SPAN",{});var $T=l(Zl);k(Js.$$.fragment,$T),$T.forEach(t),TT.forEach(t),Ov=f(Mp),ed=i(Mp,"SPAN",{});var yT=l(ed);Wv=s(yT,"Data2VecVisionForSemanticSegmentation"),yT.forEach(t),Mp.forEach(t),Fc=f(o),_e=i(o,"DIV",{class:!0});var Ca=l(_e);k(Ks.$$.fragment,Ca),Bv=f(Ca),td=i(Ca,"P",{});var VT=l(td);Hv=s(VT,"Data2VecVision Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),VT.forEach(t),Rv=f(Ca),Ys=i(Ca,"P",{});var jp=l(Ys);Qv=s(jp,"This model is a PyTorch "),Zs=i(jp,"A",{href:!0,rel:!0});var xT=l(Zs);Gv=s(xT,"torch.nn.Module"),xT.forEach(t),Xv=s(jp,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jp.forEach(t),Uv=f(Ca),Ae=i(Ca,"DIV",{class:!0});var Aa=l(Ae);k(er.$$.fragment,Aa),Jv=f(Aa),Yt=i(Aa,"P",{});var zi=l(Yt);Kv=s(zi,"The "),ii=i(zi,"A",{href:!0});var DT=l(ii);Yv=s(DT,"Data2VecVisionForSemanticSegmentation"),DT.forEach(t),Zv=s(zi," forward method, overrides the "),od=i(zi,"CODE",{});var FT=l(od);eb=s(FT,"__call__"),FT.forEach(t),tb=s(zi," special method."),zi.forEach(t),ob=f(Aa),k(ca.$$.fragment,Aa),ab=f(Aa),k(pa.$$.fragment,Aa),Aa.forEach(t),Ca.forEach(t),Cc=f(o),Zt=i(o,"H2",{class:!0});var Ep=l(Zt);ha=i(Ep,"A",{id:!0,class:!0,href:!0});var CT=l(ha);ad=i(CT,"SPAN",{});var AT=l(ad);k(tr.$$.fragment,AT),AT.forEach(t),CT.forEach(t),nb=f(Ep),nd=i(Ep,"SPAN",{});var MT=l(nd);sb=s(MT,"TFData2VecVisionModel"),MT.forEach(t),Ep.forEach(t),Ac=f(o),se=i(o,"DIV",{class:!0});var lt=l(se);k(or.$$.fragment,lt),rb=f(lt),ar=i(lt,"P",{});var qp=l(ar);ib=s(qp,`The bare Data2VecVision Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),li=i(qp,"A",{href:!0});var jT=l(li);lb=s(jT,"TFPreTrainedModel"),jT.forEach(t),db=s(qp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.).`),qp.forEach(t),cb=f(lt),nr=i(lt,"P",{});var zp=l(nr);pb=s(zp,"This model is also a "),sr=i(zp,"A",{href:!0,rel:!0});var ET=l(sr);hb=s(ET,"tf.keras.Model"),ET.forEach(t),mb=s(zp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zp.forEach(t),ub=f(lt),k(ma.$$.fragment,lt),fb=f(lt),Me=i(lt,"DIV",{class:!0});var Ma=l(Me);k(rr.$$.fragment,Ma),gb=f(Ma),eo=i(Ma,"P",{});var Pi=l(eo);_b=s(Pi,"The "),di=i(Pi,"A",{href:!0});var qT=l(di);vb=s(qT,"TFData2VecVisionModel"),qT.forEach(t),bb=s(Pi," forward method, overrides the "),sd=i(Pi,"CODE",{});var zT=l(sd);wb=s(zT,"__call__"),zT.forEach(t),kb=s(Pi," special method."),Pi.forEach(t),Tb=f(Ma),k(ua.$$.fragment,Ma),$b=f(Ma),k(fa.$$.fragment,Ma),Ma.forEach(t),lt.forEach(t),Mc=f(o),to=i(o,"H2",{class:!0});var Pp=l(to);ga=i(Pp,"A",{id:!0,class:!0,href:!0});var PT=l(ga);rd=i(PT,"SPAN",{});var ST=l(rd);k(ir.$$.fragment,ST),ST.forEach(t),PT.forEach(t),yb=f(Pp),id=i(Pp,"SPAN",{});var LT=l(id);Vb=s(LT,"TFData2VecVisionForImageClassification"),LT.forEach(t),Pp.forEach(t),jc=f(o),K=i(o,"DIV",{class:!0});var Ne=l(K);k(lr.$$.fragment,Ne),xb=f(Ne),ld=i(Ne,"P",{});var IT=l(ld);Db=s(IT,`Data2VecVision Model transformer with an image classification head on top (a linear layer on top of the average of
the final hidden states of the patch tokens) e.g. for ImageNet.`),IT.forEach(t),Fb=f(Ne),dr=i(Ne,"P",{});var Sp=l(dr);Cb=s(Sp,"This model inherits from "),ci=i(Sp,"A",{href:!0});var NT=l(ci);Ab=s(NT,"TFPreTrainedModel"),NT.forEach(t),Mb=s(Sp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.).`),Sp.forEach(t),jb=f(Ne),cr=i(Ne,"P",{});var Lp=l(cr);Eb=s(Lp,"This model is also a "),pr=i(Lp,"A",{href:!0,rel:!0});var OT=l(pr);qb=s(OT,"tf.keras.Model"),OT.forEach(t),zb=s(Lp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lp.forEach(t),Pb=f(Ne),k(_a.$$.fragment,Ne),Sb=f(Ne),je=i(Ne,"DIV",{class:!0});var ja=l(je);k(hr.$$.fragment,ja),Lb=f(ja),oo=i(ja,"P",{});var Si=l(oo);Ib=s(Si,"The "),pi=i(Si,"A",{href:!0});var WT=l(pi);Nb=s(WT,"TFData2VecVisionForImageClassification"),WT.forEach(t),Ob=s(Si," forward method, overrides the "),dd=i(Si,"CODE",{});var BT=l(dd);Wb=s(BT,"__call__"),BT.forEach(t),Bb=s(Si," special method."),Si.forEach(t),Hb=f(ja),k(va.$$.fragment,ja),Rb=f(ja),k(ba.$$.fragment,ja),ja.forEach(t),Ne.forEach(t),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(B$)),m(h,"id","data2vec"),m(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(h,"href","#data2vec"),m(c,"class","relative group"),m(Y,"id","overview"),m(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Y,"href","#overview"),m(A,"class","relative group"),m(W,"href","https://arxiv.org/pdf/2202.03555"),m(W,"rel","nofollow"),m(qa,"href","http://www.github.com/pytorch/fairseq/tree/master/examples/data2vec"),m(qa,"rel","nofollow"),m(yr,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Model"),m(Vr,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaModel"),m(xr,"href","/docs/transformers/main/en/model_doc/beit#transformers.BeitModel"),m(La,"href","https://huggingface.co/edugp"),m(La,"rel","nofollow"),m(Ia,"href","https://huggingface.co/patrickvonplaten"),m(Ia,"rel","nofollow"),m(Na,"href","https://github.com/sayakpaul"),m(Na,"rel","nofollow"),m(Oa,"href","https://github.com/pytorch/fairseq/tree/main/examples/data2vec"),m(Oa,"rel","nofollow"),m(Wa,"href","https://github.com/facebookresearch/data2vec_vision/tree/main/beit"),m(Wa,"rel","nofollow"),m(so,"id","transformers.Data2VecTextConfig"),m(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(so,"href","#transformers.Data2VecTextConfig"),m(ht,"class","relative group"),m(Dr,"href","/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextModel"),m(Fr,"href","/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextModel"),m(Ra,"href","https://huggingface.co/facebook/data2vec-text-base"),m(Ra,"rel","nofollow"),m(Cr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Ar,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(io,"id","transformers.Data2VecAudioConfig"),m(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(io,"href","#transformers.Data2VecAudioConfig"),m(ut,"class","relative group"),m(Mr,"href","/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioModel"),m(Xa,"href","https://huggingface.co/facebook/data2vec-audio-base-960h"),m(Xa,"rel","nofollow"),m(jr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Er,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(co,"id","transformers.Data2VecVisionConfig"),m(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(co,"href","#transformers.Data2VecVisionConfig"),m(_t,"class","relative group"),m(qr,"href","/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecVisionModel"),m(Ka,"href","https://huggingface.co/facebook/data2vec-vision-base"),m(Ka,"rel","nofollow"),m(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ho,"id","transformers.Data2VecAudioModel"),m(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ho,"href","#transformers.Data2VecAudioModel"),m(bt,"class","relative group"),m(tn,"href","https://arxiv.org/pdf/2202.03555"),m(tn,"rel","nofollow"),m(zr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(nn,"rel","nofollow"),m(Pr,"href","/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioModel"),m(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fo,"id","transformers.Data2VecAudioForAudioFrameClassification"),m(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(fo,"href","#transformers.Data2VecAudioForAudioFrameClassification"),m(kt,"class","relative group"),m(cn,"href","https://arxiv.org/pdf/2202.03555"),m(cn,"rel","nofollow"),m(Sr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(mn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(mn,"rel","nofollow"),m(Lr,"href","/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioForAudioFrameClassification"),m($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(vo,"id","transformers.Data2VecAudioForCTC"),m(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(vo,"href","#transformers.Data2VecAudioForCTC"),m($t,"class","relative group"),m(_n,"href","https://arxiv.org/pdf/2202.03555"),m(_n,"rel","nofollow"),m(Ir,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(wn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(wn,"rel","nofollow"),m(Nr,"href","/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioForCTC"),m(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(To,"id","transformers.Data2VecAudioForSequenceClassification"),m(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(To,"href","#transformers.Data2VecAudioForSequenceClassification"),m(xt,"class","relative group"),m(Vn,"href","https://arxiv.org/pdf/2202.03555"),m(Vn,"rel","nofollow"),m(Or,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Fn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Fn,"rel","nofollow"),m(Wr,"href","/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioForSequenceClassification"),m(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xo,"id","transformers.Data2VecAudioForXVector"),m(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(xo,"href","#transformers.Data2VecAudioForXVector"),m(Ft,"class","relative group"),m(En,"href","https://arxiv.org/pdf/2202.03555"),m(En,"rel","nofollow"),m(Br,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Pn,"rel","nofollow"),m(Hr,"href","/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecAudioForXVector"),m(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Co,"id","transformers.Data2VecTextModel"),m(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Co,"href","#transformers.Data2VecTextModel"),m(At,"class","relative group"),m(On,"href","https://arxiv.org/pdf/2202.03555"),m(On,"rel","nofollow"),m(Rr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Hn,"rel","nofollow"),m(Qn,"href","https://arxiv.org/abs/1706.03762"),m(Qn,"rel","nofollow"),m(Qr,"href","/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextModel"),m(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Eo,"id","transformers.Data2VecTextForCausalLM"),m(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Eo,"href","#transformers.Data2VecTextForCausalLM"),m(jt,"class","relative group"),m(Jn,"href","https://arxiv.org/pdf/2202.03555"),m(Jn,"rel","nofollow"),m(Gr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Zn,"rel","nofollow"),m(Xr,"href","/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextForCausalLM"),m(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Po,"id","transformers.Data2VecTextForMaskedLM"),m(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Po,"href","#transformers.Data2VecTextForMaskedLM"),m(zt,"class","relative group"),m(as,"href","https://arxiv.org/pdf/2202.03555"),m(as,"rel","nofollow"),m(Ur,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(rs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(rs,"rel","nofollow"),m(Jr,"href","/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextForMaskedLM"),m(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(No,"id","transformers.Data2VecTextForSequenceClassification"),m(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(No,"href","#transformers.Data2VecTextForSequenceClassification"),m(Lt,"class","relative group"),m(ps,"href","https://arxiv.org/pdf/2202.03555"),m(ps,"rel","nofollow"),m(Kr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(us,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(us,"rel","nofollow"),m(Yr,"href","/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextForSequenceClassification"),m(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qo,"id","transformers.Data2VecTextForMultipleChoice"),m(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Qo,"href","#transformers.Data2VecTextForMultipleChoice"),m(Nt,"class","relative group"),m(bs,"href","https://arxiv.org/pdf/2202.03555"),m(bs,"rel","nofollow"),m(Zr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Ts,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ts,"rel","nofollow"),m(ei,"href","/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextForMultipleChoice"),m(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Uo,"id","transformers.Data2VecTextForTokenClassification"),m(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Uo,"href","#transformers.Data2VecTextForTokenClassification"),m(Wt,"class","relative group"),m(Ds,"href","https://arxiv.org/pdf/2202.03555"),m(Ds,"rel","nofollow"),m(ti,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(As,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(As,"rel","nofollow"),m(oi,"href","/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextForTokenClassification"),m(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Zo,"id","transformers.Data2VecTextForQuestionAnswering"),m(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Zo,"href","#transformers.Data2VecTextForQuestionAnswering"),m(Ht,"class","relative group"),m(zs,"href","https://arxiv.org/pdf/2202.03555"),m(zs,"rel","nofollow"),m(ai,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ls,"rel","nofollow"),m(ni,"href","/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecTextForQuestionAnswering"),m(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(aa,"id","transformers.Data2VecVisionModel"),m(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(aa,"href","#transformers.Data2VecVisionModel"),m(Gt,"class","relative group"),m(Bs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Bs,"rel","nofollow"),m(si,"href","/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecVisionModel"),m(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ra,"id","transformers.Data2VecVisionForImageClassification"),m(ra,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ra,"href","#transformers.Data2VecVisionForImageClassification"),m(Ut,"class","relative group"),m(Xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Xs,"rel","nofollow"),m(ri,"href","/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecVisionForImageClassification"),m(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(da,"id","transformers.Data2VecVisionForSemanticSegmentation"),m(da,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(da,"href","#transformers.Data2VecVisionForSemanticSegmentation"),m(Kt,"class","relative group"),m(Zs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Zs,"rel","nofollow"),m(ii,"href","/docs/transformers/main/en/model_doc/data2vec#transformers.Data2VecVisionForSemanticSegmentation"),m(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ha,"id","transformers.TFData2VecVisionModel"),m(ha,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ha,"href","#transformers.TFData2VecVisionModel"),m(Zt,"class","relative group"),m(li,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(sr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(sr,"rel","nofollow"),m(di,"href","/docs/transformers/main/en/model_doc/data2vec#transformers.TFData2VecVisionModel"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ga,"id","transformers.TFData2VecVisionForImageClassification"),m(ga,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ga,"href","#transformers.TFData2VecVisionForImageClassification"),m(to,"class","relative group"),m(ci,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(pr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(pr,"rel","nofollow"),m(pi,"href","/docs/transformers/main/en/model_doc/data2vec#transformers.TFData2VecVisionForImageClassification"),m(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,d),b(o,g,_),b(o,c,_),e(c,h),e(h,v),T(a,v,null),e(c,p),e(c,D),e(D,Oe),b(o,re,_),b(o,A,_),e(A,Y),e(Y,N),T(ee,N,null),e(A,We),e(A,O),e(O,Be),b(o,ve,_),b(o,F,_),e(F,z),e(F,W),e(W,dt),e(F,ct),b(o,L,_),b(o,be,_),e(be,pt),b(o,Wd,_),b(o,Tr,_),e(Tr,Ea),e(Ea,Ip),e(Ea,qa),e(qa,Np),e(Ea,Op),b(o,Bd,_),b(o,$r,_),e($r,Wp),b(o,Hd,_),b(o,we,_),e(we,Li),e(Li,Bp),e(we,Hp),e(we,za),e(za,Rp),e(za,yr),e(yr,Qp),e(za,Gp),e(we,Xp),e(we,Pa),e(Pa,Up),e(Pa,Vr),e(Vr,Jp),e(Pa,Kp),e(we,Yp),e(we,Sa),e(Sa,Zp),e(Sa,xr),e(xr,eh),e(Sa,th),b(o,Rd,_),b(o,ke,_),e(ke,oh),e(ke,La),e(La,ah),e(ke,nh),e(ke,Ia),e(Ia,sh),e(ke,rh),e(ke,Na),e(Na,ih),e(ke,lh),b(o,Qd,_),b(o,Ye,_),e(Ye,dh),e(Ye,Oa),e(Oa,ch),e(Ye,ph),e(Ye,Wa),e(Wa,hh),e(Ye,mh),b(o,Gd,_),b(o,ht,_),e(ht,so),e(so,Ii),T(Ba,Ii,null),e(ht,uh),e(ht,Ni),e(Ni,fh),b(o,Xd,_),b(o,ue,_),T(Ha,ue,null),e(ue,gh),e(ue,He),e(He,_h),e(He,Dr),e(Dr,vh),e(He,bh),e(He,Fr),e(Fr,wh),e(He,kh),e(He,Ra),e(Ra,Th),e(He,$h),e(ue,yh),e(ue,mt),e(mt,Vh),e(mt,Cr),e(Cr,xh),e(mt,Dh),e(mt,Ar),e(Ar,Fh),e(mt,Ch),e(ue,Ah),T(ro,ue,null),b(o,Ud,_),b(o,ut,_),e(ut,io),e(io,Oi),T(Qa,Oi,null),e(ut,Mh),e(ut,Wi),e(Wi,jh),b(o,Jd,_),b(o,fe,_),T(Ga,fe,null),e(fe,Eh),e(fe,ft),e(ft,qh),e(ft,Mr),e(Mr,zh),e(ft,Ph),e(ft,Xa),e(Xa,Sh),e(ft,Lh),e(fe,Ih),e(fe,gt),e(gt,Nh),e(gt,jr),e(jr,Oh),e(gt,Wh),e(gt,Er),e(Er,Bh),e(gt,Hh),e(fe,Rh),T(lo,fe,null),b(o,Kd,_),b(o,_t,_),e(_t,co),e(co,Bi),T(Ua,Bi,null),e(_t,Qh),e(_t,Hi),e(Hi,Gh),b(o,Yd,_),b(o,Re,_),T(Ja,Re,null),e(Re,Xh),e(Re,vt),e(vt,Uh),e(vt,qr),e(qr,Jh),e(vt,Kh),e(vt,Ka),e(Ka,Yh),e(vt,Zh),e(Re,em),T(po,Re,null),b(o,Zd,_),b(o,bt,_),e(bt,ho),e(ho,Ri),T(Ya,Ri,null),e(bt,tm),e(bt,Qi),e(Qi,om),b(o,ec,_),b(o,te,_),T(Za,te,null),e(te,am),e(te,en),e(en,nm),e(en,tn),e(tn,sm),e(en,rm),e(te,im),e(te,on),e(on,lm),e(on,zr),e(zr,dm),e(on,cm),e(te,pm),e(te,an),e(an,hm),e(an,nn),e(nn,mm),e(an,um),e(te,fm),e(te,Te),T(sn,Te,null),e(Te,gm),e(Te,wt),e(wt,_m),e(wt,Pr),e(Pr,vm),e(wt,bm),e(wt,Gi),e(Gi,wm),e(wt,km),e(Te,Tm),T(mo,Te,null),e(Te,$m),T(uo,Te,null),b(o,tc,_),b(o,kt,_),e(kt,fo),e(fo,Xi),T(rn,Xi,null),e(kt,ym),e(kt,Ui),e(Ui,Vm),b(o,oc,_),b(o,B,_),T(ln,B,null),e(B,xm),e(B,Ji),e(Ji,Dm),e(B,Fm),e(B,dn),e(dn,Cm),e(dn,cn),e(cn,Am),e(dn,Mm),e(B,jm),e(B,pn),e(pn,Em),e(pn,Sr),e(Sr,qm),e(pn,zm),e(B,Pm),e(B,hn),e(hn,Sm),e(hn,mn),e(mn,Lm),e(hn,Im),e(B,Nm),e(B,$e),T(un,$e,null),e($e,Om),e($e,Tt),e(Tt,Wm),e(Tt,Lr),e(Lr,Bm),e(Tt,Hm),e(Tt,Ki),e(Ki,Rm),e(Tt,Qm),e($e,Gm),T(go,$e,null),e($e,Xm),T(_o,$e,null),b(o,ac,_),b(o,$t,_),e($t,vo),e(vo,Yi),T(fn,Yi,null),e($t,Um),e($t,Zi),e(Zi,Jm),b(o,nc,_),b(o,oe,_),T(gn,oe,null),e(oe,Km),e(oe,yt),e(yt,Ym),e(yt,el),e(el,Zm),e(yt,eu),e(yt,_n),e(_n,tu),e(yt,ou),e(oe,au),e(oe,vn),e(vn,nu),e(vn,Ir),e(Ir,su),e(vn,ru),e(oe,iu),e(oe,bn),e(bn,lu),e(bn,wn),e(wn,du),e(bn,cu),e(oe,pu),e(oe,ie),T(kn,ie,null),e(ie,hu),e(ie,Vt),e(Vt,mu),e(Vt,Nr),e(Nr,uu),e(Vt,fu),e(Vt,tl),e(tl,gu),e(Vt,_u),e(ie,vu),T(bo,ie,null),e(ie,bu),T(wo,ie,null),e(ie,wu),T(ko,ie,null),b(o,sc,_),b(o,xt,_),e(xt,To),e(To,ol),T(Tn,ol,null),e(xt,ku),e(xt,al),e(al,Tu),b(o,rc,_),b(o,H,_),T($n,H,null),e(H,$u),e(H,nl),e(nl,yu),e(H,Vu),e(H,yn),e(yn,xu),e(yn,Vn),e(Vn,Du),e(yn,Fu),e(H,Cu),e(H,xn),e(xn,Au),e(xn,Or),e(Or,Mu),e(xn,ju),e(H,Eu),e(H,Dn),e(Dn,qu),e(Dn,Fn),e(Fn,zu),e(Dn,Pu),e(H,Su),e(H,le),T(Cn,le,null),e(le,Lu),e(le,Dt),e(Dt,Iu),e(Dt,Wr),e(Wr,Nu),e(Dt,Ou),e(Dt,sl),e(sl,Wu),e(Dt,Bu),e(le,Hu),T($o,le,null),e(le,Ru),T(yo,le,null),e(le,Qu),T(Vo,le,null),b(o,ic,_),b(o,Ft,_),e(Ft,xo),e(xo,rl),T(An,rl,null),e(Ft,Gu),e(Ft,il),e(il,Xu),b(o,lc,_),b(o,R,_),T(Mn,R,null),e(R,Uu),e(R,ll),e(ll,Ju),e(R,Ku),e(R,jn),e(jn,Yu),e(jn,En),e(En,Zu),e(jn,ef),e(R,tf),e(R,qn),e(qn,of),e(qn,Br),e(Br,af),e(qn,nf),e(R,sf),e(R,zn),e(zn,rf),e(zn,Pn),e(Pn,lf),e(zn,df),e(R,cf),e(R,ye),T(Sn,ye,null),e(ye,pf),e(ye,Ct),e(Ct,hf),e(Ct,Hr),e(Hr,mf),e(Ct,uf),e(Ct,dl),e(dl,ff),e(Ct,gf),e(ye,_f),T(Do,ye,null),e(ye,vf),T(Fo,ye,null),b(o,dc,_),b(o,At,_),e(At,Co),e(Co,cl),T(Ln,cl,null),e(At,bf),e(At,pl),e(pl,wf),b(o,cc,_),b(o,P,_),T(In,P,null),e(P,kf),e(P,Nn),e(Nn,Tf),e(Nn,On),e(On,$f),e(Nn,yf),e(P,Vf),e(P,Wn),e(Wn,xf),e(Wn,Rr),e(Rr,Df),e(Wn,Ff),e(P,Cf),e(P,Bn),e(Bn,Af),e(Bn,Hn),e(Hn,Mf),e(Bn,jf),e(P,Ef),e(P,Rn),e(Rn,qf),e(Rn,hl),e(hl,zf),e(Rn,Pf),e(P,Sf),e(P,Q),e(Q,Lf),e(Q,ml),e(ml,If),e(Q,Nf),e(Q,ul),e(ul,Of),e(Q,Wf),e(Q,fl),e(fl,Bf),e(Q,Hf),e(Q,gl),e(gl,Rf),e(Q,Qf),e(Q,_l),e(_l,Gf),e(Q,Xf),e(Q,vl),e(vl,Uf),e(Q,Jf),e(P,Kf),e(P,Ao),e(Ao,Yf),e(Ao,bl),e(bl,Zf),e(Ao,eg),e(Ao,Qn),e(Qn,tg),e(P,og),e(P,Ve),T(Gn,Ve,null),e(Ve,ag),e(Ve,Mt),e(Mt,ng),e(Mt,Qr),e(Qr,sg),e(Mt,rg),e(Mt,wl),e(wl,ig),e(Mt,lg),e(Ve,dg),T(Mo,Ve,null),e(Ve,cg),T(jo,Ve,null),b(o,pc,_),b(o,jt,_),e(jt,Eo),e(Eo,kl),T(Xn,kl,null),e(jt,pg),e(jt,Tl),e(Tl,hg),b(o,hc,_),b(o,ae,_),T(Un,ae,null),e(ae,mg),e(ae,Et),e(Et,ug),e(Et,$l),e($l,fg),e(Et,gg),e(Et,Jn),e(Jn,_g),e(Et,vg),e(ae,bg),e(ae,Kn),e(Kn,wg),e(Kn,Gr),e(Gr,kg),e(Kn,Tg),e(ae,$g),e(ae,Yn),e(Yn,yg),e(Yn,Zn),e(Zn,Vg),e(Yn,xg),e(ae,Dg),e(ae,xe),T(es,xe,null),e(xe,Fg),e(xe,qt),e(qt,Cg),e(qt,Xr),e(Xr,Ag),e(qt,Mg),e(qt,yl),e(yl,jg),e(qt,Eg),e(xe,qg),T(qo,xe,null),e(xe,zg),T(zo,xe,null),b(o,mc,_),b(o,zt,_),e(zt,Po),e(Po,Vl),T(ts,Vl,null),e(zt,Pg),e(zt,xl),e(xl,Sg),b(o,uc,_),b(o,ne,_),T(os,ne,null),e(ne,Lg),e(ne,Pt),e(Pt,Ig),e(Pt,Dl),e(Dl,Ng),e(Pt,Og),e(Pt,as),e(as,Wg),e(Pt,Bg),e(ne,Hg),e(ne,ns),e(ns,Rg),e(ns,Ur),e(Ur,Qg),e(ns,Gg),e(ne,Xg),e(ne,ss),e(ss,Ug),e(ss,rs),e(rs,Jg),e(ss,Kg),e(ne,Yg),e(ne,de),T(is,de,null),e(de,Zg),e(de,St),e(St,e_),e(St,Jr),e(Jr,t_),e(St,o_),e(St,Fl),e(Fl,a_),e(St,n_),e(de,s_),T(So,de,null),e(de,r_),T(Lo,de,null),e(de,i_),T(Io,de,null),b(o,fc,_),b(o,Lt,_),e(Lt,No),e(No,Cl),T(ls,Cl,null),e(Lt,l_),e(Lt,Al),e(Al,d_),b(o,gc,_),b(o,G,_),T(ds,G,null),e(G,c_),e(G,Ml),e(Ml,p_),e(G,h_),e(G,cs),e(cs,m_),e(cs,ps),e(ps,u_),e(cs,f_),e(G,g_),e(G,hs),e(hs,__),e(hs,Kr),e(Kr,v_),e(hs,b_),e(G,w_),e(G,ms),e(ms,k_),e(ms,us),e(us,T_),e(ms,$_),e(G,y_),e(G,I),T(fs,I,null),e(I,V_),e(I,It),e(It,x_),e(It,Yr),e(Yr,D_),e(It,F_),e(It,jl),e(jl,C_),e(It,A_),e(I,M_),T(Oo,I,null),e(I,j_),T(Wo,I,null),e(I,E_),T(Bo,I,null),e(I,q_),T(Ho,I,null),e(I,z_),T(Ro,I,null),b(o,_c,_),b(o,Nt,_),e(Nt,Qo),e(Qo,El),T(gs,El,null),e(Nt,P_),e(Nt,ql),e(ql,S_),b(o,vc,_),b(o,X,_),T(_s,X,null),e(X,L_),e(X,zl),e(zl,I_),e(X,N_),e(X,vs),e(vs,O_),e(vs,bs),e(bs,W_),e(vs,B_),e(X,H_),e(X,ws),e(ws,R_),e(ws,Zr),e(Zr,Q_),e(ws,G_),e(X,X_),e(X,ks),e(ks,U_),e(ks,Ts),e(Ts,J_),e(ks,K_),e(X,Y_),e(X,De),T($s,De,null),e(De,Z_),e(De,Ot),e(Ot,e2),e(Ot,ei),e(ei,t2),e(Ot,o2),e(Ot,Pl),e(Pl,a2),e(Ot,n2),e(De,s2),T(Go,De,null),e(De,r2),T(Xo,De,null),b(o,bc,_),b(o,Wt,_),e(Wt,Uo),e(Uo,Sl),T(ys,Sl,null),e(Wt,i2),e(Wt,Ll),e(Ll,l2),b(o,wc,_),b(o,U,_),T(Vs,U,null),e(U,d2),e(U,Il),e(Il,c2),e(U,p2),e(U,xs),e(xs,h2),e(xs,Ds),e(Ds,m2),e(xs,u2),e(U,f2),e(U,Fs),e(Fs,g2),e(Fs,ti),e(ti,_2),e(Fs,v2),e(U,b2),e(U,Cs),e(Cs,w2),e(Cs,As),e(As,k2),e(Cs,T2),e(U,$2),e(U,ce),T(Ms,ce,null),e(ce,y2),e(ce,Bt),e(Bt,V2),e(Bt,oi),e(oi,x2),e(Bt,D2),e(Bt,Nl),e(Nl,F2),e(Bt,C2),e(ce,A2),T(Jo,ce,null),e(ce,M2),T(Ko,ce,null),e(ce,j2),T(Yo,ce,null),b(o,kc,_),b(o,Ht,_),e(Ht,Zo),e(Zo,Ol),T(js,Ol,null),e(Ht,E2),e(Ht,Wl),e(Wl,q2),b(o,Tc,_),b(o,J,_),T(Es,J,null),e(J,z2),e(J,Rt),e(Rt,P2),e(Rt,Bl),e(Bl,S2),e(Rt,L2),e(Rt,Hl),e(Hl,I2),e(Rt,N2),e(J,O2),e(J,qs),e(qs,W2),e(qs,zs),e(zs,B2),e(qs,H2),e(J,R2),e(J,Ps),e(Ps,Q2),e(Ps,ai),e(ai,G2),e(Ps,X2),e(J,U2),e(J,Ss),e(Ss,J2),e(Ss,Ls),e(Ls,K2),e(Ss,Y2),e(J,Z2),e(J,pe),T(Is,pe,null),e(pe,ev),e(pe,Qt),e(Qt,tv),e(Qt,ni),e(ni,ov),e(Qt,av),e(Qt,Rl),e(Rl,nv),e(Qt,sv),e(pe,rv),T(ea,pe,null),e(pe,iv),T(ta,pe,null),e(pe,lv),T(oa,pe,null),b(o,$c,_),b(o,Gt,_),e(Gt,aa),e(aa,Ql),T(Ns,Ql,null),e(Gt,dv),e(Gt,Gl),e(Gl,cv),b(o,yc,_),b(o,Qe,_),T(Os,Qe,null),e(Qe,pv),e(Qe,Ws),e(Ws,hv),e(Ws,Bs),e(Bs,mv),e(Ws,uv),e(Qe,fv),e(Qe,Fe),T(Hs,Fe,null),e(Fe,gv),e(Fe,Xt),e(Xt,_v),e(Xt,si),e(si,vv),e(Xt,bv),e(Xt,Xl),e(Xl,wv),e(Xt,kv),e(Fe,Tv),T(na,Fe,null),e(Fe,$v),T(sa,Fe,null),b(o,Vc,_),b(o,Ut,_),e(Ut,ra),e(ra,Ul),T(Rs,Ul,null),e(Ut,yv),e(Ut,Jl),e(Jl,Vv),b(o,xc,_),b(o,ge,_),T(Qs,ge,null),e(ge,xv),e(ge,Kl),e(Kl,Dv),e(ge,Fv),e(ge,Gs),e(Gs,Cv),e(Gs,Xs),e(Xs,Av),e(Gs,Mv),e(ge,jv),e(ge,Ce),T(Us,Ce,null),e(Ce,Ev),e(Ce,Jt),e(Jt,qv),e(Jt,ri),e(ri,zv),e(Jt,Pv),e(Jt,Yl),e(Yl,Sv),e(Jt,Lv),e(Ce,Iv),T(ia,Ce,null),e(Ce,Nv),T(la,Ce,null),b(o,Dc,_),b(o,Kt,_),e(Kt,da),e(da,Zl),T(Js,Zl,null),e(Kt,Ov),e(Kt,ed),e(ed,Wv),b(o,Fc,_),b(o,_e,_),T(Ks,_e,null),e(_e,Bv),e(_e,td),e(td,Hv),e(_e,Rv),e(_e,Ys),e(Ys,Qv),e(Ys,Zs),e(Zs,Gv),e(Ys,Xv),e(_e,Uv),e(_e,Ae),T(er,Ae,null),e(Ae,Jv),e(Ae,Yt),e(Yt,Kv),e(Yt,ii),e(ii,Yv),e(Yt,Zv),e(Yt,od),e(od,eb),e(Yt,tb),e(Ae,ob),T(ca,Ae,null),e(Ae,ab),T(pa,Ae,null),b(o,Cc,_),b(o,Zt,_),e(Zt,ha),e(ha,ad),T(tr,ad,null),e(Zt,nb),e(Zt,nd),e(nd,sb),b(o,Ac,_),b(o,se,_),T(or,se,null),e(se,rb),e(se,ar),e(ar,ib),e(ar,li),e(li,lb),e(ar,db),e(se,cb),e(se,nr),e(nr,pb),e(nr,sr),e(sr,hb),e(nr,mb),e(se,ub),T(ma,se,null),e(se,fb),e(se,Me),T(rr,Me,null),e(Me,gb),e(Me,eo),e(eo,_b),e(eo,di),e(di,vb),e(eo,bb),e(eo,sd),e(sd,wb),e(eo,kb),e(Me,Tb),T(ua,Me,null),e(Me,$b),T(fa,Me,null),b(o,Mc,_),b(o,to,_),e(to,ga),e(ga,rd),T(ir,rd,null),e(to,yb),e(to,id),e(id,Vb),b(o,jc,_),b(o,K,_),T(lr,K,null),e(K,xb),e(K,ld),e(ld,Db),e(K,Fb),e(K,dr),e(dr,Cb),e(dr,ci),e(ci,Ab),e(dr,Mb),e(K,jb),e(K,cr),e(cr,Eb),e(cr,pr),e(pr,qb),e(cr,zb),e(K,Pb),T(_a,K,null),e(K,Sb),e(K,je),T(hr,je,null),e(je,Lb),e(je,oo),e(oo,Ib),e(oo,pi),e(pi,Nb),e(oo,Ob),e(oo,dd),e(dd,Wb),e(oo,Bb),e(je,Hb),T(va,je,null),e(je,Rb),T(ba,je,null),Ec=!0},p(o,[_]){const mr={};_&2&&(mr.$$scope={dirty:_,ctx:o}),ro.$set(mr);const cd={};_&2&&(cd.$$scope={dirty:_,ctx:o}),lo.$set(cd);const pd={};_&2&&(pd.$$scope={dirty:_,ctx:o}),po.$set(pd);const hd={};_&2&&(hd.$$scope={dirty:_,ctx:o}),mo.$set(hd);const ur={};_&2&&(ur.$$scope={dirty:_,ctx:o}),uo.$set(ur);const md={};_&2&&(md.$$scope={dirty:_,ctx:o}),go.$set(md);const ud={};_&2&&(ud.$$scope={dirty:_,ctx:o}),_o.$set(ud);const fd={};_&2&&(fd.$$scope={dirty:_,ctx:o}),bo.$set(fd);const fr={};_&2&&(fr.$$scope={dirty:_,ctx:o}),wo.$set(fr);const gd={};_&2&&(gd.$$scope={dirty:_,ctx:o}),ko.$set(gd);const _d={};_&2&&(_d.$$scope={dirty:_,ctx:o}),$o.$set(_d);const vd={};_&2&&(vd.$$scope={dirty:_,ctx:o}),yo.$set(vd);const gr={};_&2&&(gr.$$scope={dirty:_,ctx:o}),Vo.$set(gr);const bd={};_&2&&(bd.$$scope={dirty:_,ctx:o}),Do.$set(bd);const wd={};_&2&&(wd.$$scope={dirty:_,ctx:o}),Fo.$set(wd);const Ge={};_&2&&(Ge.$$scope={dirty:_,ctx:o}),Mo.$set(Ge);const kd={};_&2&&(kd.$$scope={dirty:_,ctx:o}),jo.$set(kd);const _r={};_&2&&(_r.$$scope={dirty:_,ctx:o}),qo.$set(_r);const Td={};_&2&&(Td.$$scope={dirty:_,ctx:o}),zo.$set(Td);const vr={};_&2&&(vr.$$scope={dirty:_,ctx:o}),So.$set(vr);const $d={};_&2&&($d.$$scope={dirty:_,ctx:o}),Lo.$set($d);const br={};_&2&&(br.$$scope={dirty:_,ctx:o}),Io.$set(br);const yd={};_&2&&(yd.$$scope={dirty:_,ctx:o}),Oo.$set(yd);const Xe={};_&2&&(Xe.$$scope={dirty:_,ctx:o}),Wo.$set(Xe);const Vd={};_&2&&(Vd.$$scope={dirty:_,ctx:o}),Bo.$set(Vd);const xd={};_&2&&(xd.$$scope={dirty:_,ctx:o}),Ho.$set(xd);const Dd={};_&2&&(Dd.$$scope={dirty:_,ctx:o}),Ro.$set(Dd);const ao={};_&2&&(ao.$$scope={dirty:_,ctx:o}),Go.$set(ao);const Fd={};_&2&&(Fd.$$scope={dirty:_,ctx:o}),Xo.$set(Fd);const Cd={};_&2&&(Cd.$$scope={dirty:_,ctx:o}),Jo.$set(Cd);const wr={};_&2&&(wr.$$scope={dirty:_,ctx:o}),Ko.$set(wr);const Ad={};_&2&&(Ad.$$scope={dirty:_,ctx:o}),Yo.$set(Ad);const Md={};_&2&&(Md.$$scope={dirty:_,ctx:o}),ea.$set(Md);const jd={};_&2&&(jd.$$scope={dirty:_,ctx:o}),ta.$set(jd);const Ue={};_&2&&(Ue.$$scope={dirty:_,ctx:o}),oa.$set(Ue);const Je={};_&2&&(Je.$$scope={dirty:_,ctx:o}),na.$set(Je);const Ed={};_&2&&(Ed.$$scope={dirty:_,ctx:o}),sa.$set(Ed);const qd={};_&2&&(qd.$$scope={dirty:_,ctx:o}),ia.$set(qd);const zd={};_&2&&(zd.$$scope={dirty:_,ctx:o}),la.$set(zd);const no={};_&2&&(no.$$scope={dirty:_,ctx:o}),ca.$set(no);const Pd={};_&2&&(Pd.$$scope={dirty:_,ctx:o}),pa.$set(Pd);const Sd={};_&2&&(Sd.$$scope={dirty:_,ctx:o}),ma.$set(Sd);const kr={};_&2&&(kr.$$scope={dirty:_,ctx:o}),ua.$set(kr);const Ld={};_&2&&(Ld.$$scope={dirty:_,ctx:o}),fa.$set(Ld);const Id={};_&2&&(Id.$$scope={dirty:_,ctx:o}),_a.$set(Id);const Nd={};_&2&&(Nd.$$scope={dirty:_,ctx:o}),va.$set(Nd);const Ke={};_&2&&(Ke.$$scope={dirty:_,ctx:o}),ba.$set(Ke)},i(o){Ec||($(a.$$.fragment,o),$(ee.$$.fragment,o),$(Ba.$$.fragment,o),$(Ha.$$.fragment,o),$(ro.$$.fragment,o),$(Qa.$$.fragment,o),$(Ga.$$.fragment,o),$(lo.$$.fragment,o),$(Ua.$$.fragment,o),$(Ja.$$.fragment,o),$(po.$$.fragment,o),$(Ya.$$.fragment,o),$(Za.$$.fragment,o),$(sn.$$.fragment,o),$(mo.$$.fragment,o),$(uo.$$.fragment,o),$(rn.$$.fragment,o),$(ln.$$.fragment,o),$(un.$$.fragment,o),$(go.$$.fragment,o),$(_o.$$.fragment,o),$(fn.$$.fragment,o),$(gn.$$.fragment,o),$(kn.$$.fragment,o),$(bo.$$.fragment,o),$(wo.$$.fragment,o),$(ko.$$.fragment,o),$(Tn.$$.fragment,o),$($n.$$.fragment,o),$(Cn.$$.fragment,o),$($o.$$.fragment,o),$(yo.$$.fragment,o),$(Vo.$$.fragment,o),$(An.$$.fragment,o),$(Mn.$$.fragment,o),$(Sn.$$.fragment,o),$(Do.$$.fragment,o),$(Fo.$$.fragment,o),$(Ln.$$.fragment,o),$(In.$$.fragment,o),$(Gn.$$.fragment,o),$(Mo.$$.fragment,o),$(jo.$$.fragment,o),$(Xn.$$.fragment,o),$(Un.$$.fragment,o),$(es.$$.fragment,o),$(qo.$$.fragment,o),$(zo.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(is.$$.fragment,o),$(So.$$.fragment,o),$(Lo.$$.fragment,o),$(Io.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(fs.$$.fragment,o),$(Oo.$$.fragment,o),$(Wo.$$.fragment,o),$(Bo.$$.fragment,o),$(Ho.$$.fragment,o),$(Ro.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$($s.$$.fragment,o),$(Go.$$.fragment,o),$(Xo.$$.fragment,o),$(ys.$$.fragment,o),$(Vs.$$.fragment,o),$(Ms.$$.fragment,o),$(Jo.$$.fragment,o),$(Ko.$$.fragment,o),$(Yo.$$.fragment,o),$(js.$$.fragment,o),$(Es.$$.fragment,o),$(Is.$$.fragment,o),$(ea.$$.fragment,o),$(ta.$$.fragment,o),$(oa.$$.fragment,o),$(Ns.$$.fragment,o),$(Os.$$.fragment,o),$(Hs.$$.fragment,o),$(na.$$.fragment,o),$(sa.$$.fragment,o),$(Rs.$$.fragment,o),$(Qs.$$.fragment,o),$(Us.$$.fragment,o),$(ia.$$.fragment,o),$(la.$$.fragment,o),$(Js.$$.fragment,o),$(Ks.$$.fragment,o),$(er.$$.fragment,o),$(ca.$$.fragment,o),$(pa.$$.fragment,o),$(tr.$$.fragment,o),$(or.$$.fragment,o),$(ma.$$.fragment,o),$(rr.$$.fragment,o),$(ua.$$.fragment,o),$(fa.$$.fragment,o),$(ir.$$.fragment,o),$(lr.$$.fragment,o),$(_a.$$.fragment,o),$(hr.$$.fragment,o),$(va.$$.fragment,o),$(ba.$$.fragment,o),Ec=!0)},o(o){y(a.$$.fragment,o),y(ee.$$.fragment,o),y(Ba.$$.fragment,o),y(Ha.$$.fragment,o),y(ro.$$.fragment,o),y(Qa.$$.fragment,o),y(Ga.$$.fragment,o),y(lo.$$.fragment,o),y(Ua.$$.fragment,o),y(Ja.$$.fragment,o),y(po.$$.fragment,o),y(Ya.$$.fragment,o),y(Za.$$.fragment,o),y(sn.$$.fragment,o),y(mo.$$.fragment,o),y(uo.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),y(un.$$.fragment,o),y(go.$$.fragment,o),y(_o.$$.fragment,o),y(fn.$$.fragment,o),y(gn.$$.fragment,o),y(kn.$$.fragment,o),y(bo.$$.fragment,o),y(wo.$$.fragment,o),y(ko.$$.fragment,o),y(Tn.$$.fragment,o),y($n.$$.fragment,o),y(Cn.$$.fragment,o),y($o.$$.fragment,o),y(yo.$$.fragment,o),y(Vo.$$.fragment,o),y(An.$$.fragment,o),y(Mn.$$.fragment,o),y(Sn.$$.fragment,o),y(Do.$$.fragment,o),y(Fo.$$.fragment,o),y(Ln.$$.fragment,o),y(In.$$.fragment,o),y(Gn.$$.fragment,o),y(Mo.$$.fragment,o),y(jo.$$.fragment,o),y(Xn.$$.fragment,o),y(Un.$$.fragment,o),y(es.$$.fragment,o),y(qo.$$.fragment,o),y(zo.$$.fragment,o),y(ts.$$.fragment,o),y(os.$$.fragment,o),y(is.$$.fragment,o),y(So.$$.fragment,o),y(Lo.$$.fragment,o),y(Io.$$.fragment,o),y(ls.$$.fragment,o),y(ds.$$.fragment,o),y(fs.$$.fragment,o),y(Oo.$$.fragment,o),y(Wo.$$.fragment,o),y(Bo.$$.fragment,o),y(Ho.$$.fragment,o),y(Ro.$$.fragment,o),y(gs.$$.fragment,o),y(_s.$$.fragment,o),y($s.$$.fragment,o),y(Go.$$.fragment,o),y(Xo.$$.fragment,o),y(ys.$$.fragment,o),y(Vs.$$.fragment,o),y(Ms.$$.fragment,o),y(Jo.$$.fragment,o),y(Ko.$$.fragment,o),y(Yo.$$.fragment,o),y(js.$$.fragment,o),y(Es.$$.fragment,o),y(Is.$$.fragment,o),y(ea.$$.fragment,o),y(ta.$$.fragment,o),y(oa.$$.fragment,o),y(Ns.$$.fragment,o),y(Os.$$.fragment,o),y(Hs.$$.fragment,o),y(na.$$.fragment,o),y(sa.$$.fragment,o),y(Rs.$$.fragment,o),y(Qs.$$.fragment,o),y(Us.$$.fragment,o),y(ia.$$.fragment,o),y(la.$$.fragment,o),y(Js.$$.fragment,o),y(Ks.$$.fragment,o),y(er.$$.fragment,o),y(ca.$$.fragment,o),y(pa.$$.fragment,o),y(tr.$$.fragment,o),y(or.$$.fragment,o),y(ma.$$.fragment,o),y(rr.$$.fragment,o),y(ua.$$.fragment,o),y(fa.$$.fragment,o),y(ir.$$.fragment,o),y(lr.$$.fragment,o),y(_a.$$.fragment,o),y(hr.$$.fragment,o),y(va.$$.fragment,o),y(ba.$$.fragment,o),Ec=!1},d(o){t(d),o&&t(g),o&&t(c),V(a),o&&t(re),o&&t(A),V(ee),o&&t(ve),o&&t(F),o&&t(L),o&&t(be),o&&t(Wd),o&&t(Tr),o&&t(Bd),o&&t($r),o&&t(Hd),o&&t(we),o&&t(Rd),o&&t(ke),o&&t(Qd),o&&t(Ye),o&&t(Gd),o&&t(ht),V(Ba),o&&t(Xd),o&&t(ue),V(Ha),V(ro),o&&t(Ud),o&&t(ut),V(Qa),o&&t(Jd),o&&t(fe),V(Ga),V(lo),o&&t(Kd),o&&t(_t),V(Ua),o&&t(Yd),o&&t(Re),V(Ja),V(po),o&&t(Zd),o&&t(bt),V(Ya),o&&t(ec),o&&t(te),V(Za),V(sn),V(mo),V(uo),o&&t(tc),o&&t(kt),V(rn),o&&t(oc),o&&t(B),V(ln),V(un),V(go),V(_o),o&&t(ac),o&&t($t),V(fn),o&&t(nc),o&&t(oe),V(gn),V(kn),V(bo),V(wo),V(ko),o&&t(sc),o&&t(xt),V(Tn),o&&t(rc),o&&t(H),V($n),V(Cn),V($o),V(yo),V(Vo),o&&t(ic),o&&t(Ft),V(An),o&&t(lc),o&&t(R),V(Mn),V(Sn),V(Do),V(Fo),o&&t(dc),o&&t(At),V(Ln),o&&t(cc),o&&t(P),V(In),V(Gn),V(Mo),V(jo),o&&t(pc),o&&t(jt),V(Xn),o&&t(hc),o&&t(ae),V(Un),V(es),V(qo),V(zo),o&&t(mc),o&&t(zt),V(ts),o&&t(uc),o&&t(ne),V(os),V(is),V(So),V(Lo),V(Io),o&&t(fc),o&&t(Lt),V(ls),o&&t(gc),o&&t(G),V(ds),V(fs),V(Oo),V(Wo),V(Bo),V(Ho),V(Ro),o&&t(_c),o&&t(Nt),V(gs),o&&t(vc),o&&t(X),V(_s),V($s),V(Go),V(Xo),o&&t(bc),o&&t(Wt),V(ys),o&&t(wc),o&&t(U),V(Vs),V(Ms),V(Jo),V(Ko),V(Yo),o&&t(kc),o&&t(Ht),V(js),o&&t(Tc),o&&t(J),V(Es),V(Is),V(ea),V(ta),V(oa),o&&t($c),o&&t(Gt),V(Ns),o&&t(yc),o&&t(Qe),V(Os),V(Hs),V(na),V(sa),o&&t(Vc),o&&t(Ut),V(Rs),o&&t(xc),o&&t(ge),V(Qs),V(Us),V(ia),V(la),o&&t(Dc),o&&t(Kt),V(Js),o&&t(Fc),o&&t(_e),V(Ks),V(er),V(ca),V(pa),o&&t(Cc),o&&t(Zt),V(tr),o&&t(Ac),o&&t(se),V(or),V(ma),V(rr),V(ua),V(fa),o&&t(Mc),o&&t(to),V(ir),o&&t(jc),o&&t(K),V(lr),V(_a),V(hr),V(va),V(ba)}}}const B$={local:"data2vec",sections:[{local:"overview",title:"Overview"},{local:"transformers.Data2VecTextConfig",title:"Data2VecTextConfig"},{local:"transformers.Data2VecAudioConfig",title:"Data2VecAudioConfig"},{local:"transformers.Data2VecVisionConfig",title:"Data2VecVisionConfig"},{local:"transformers.Data2VecAudioModel",title:"Data2VecAudioModel"},{local:"transformers.Data2VecAudioForAudioFrameClassification",title:"Data2VecAudioForAudioFrameClassification"},{local:"transformers.Data2VecAudioForCTC",title:"Data2VecAudioForCTC"},{local:"transformers.Data2VecAudioForSequenceClassification",title:"Data2VecAudioForSequenceClassification"},{local:"transformers.Data2VecAudioForXVector",title:"Data2VecAudioForXVector"},{local:"transformers.Data2VecTextModel",title:"Data2VecTextModel"},{local:"transformers.Data2VecTextForCausalLM",title:"Data2VecTextForCausalLM"},{local:"transformers.Data2VecTextForMaskedLM",title:"Data2VecTextForMaskedLM"},{local:"transformers.Data2VecTextForSequenceClassification",title:"Data2VecTextForSequenceClassification"},{local:"transformers.Data2VecTextForMultipleChoice",title:"Data2VecTextForMultipleChoice"},{local:"transformers.Data2VecTextForTokenClassification",title:"Data2VecTextForTokenClassification"},{local:"transformers.Data2VecTextForQuestionAnswering",title:"Data2VecTextForQuestionAnswering"},{local:"transformers.Data2VecVisionModel",title:"Data2VecVisionModel"},{local:"transformers.Data2VecVisionForImageClassification",title:"Data2VecVisionForImageClassification"},{local:"transformers.Data2VecVisionForSemanticSegmentation",title:"Data2VecVisionForSemanticSegmentation"},{local:"transformers.TFData2VecVisionModel",title:"TFData2VecVisionModel"},{local:"transformers.TFData2VecVisionForImageClassification",title:"TFData2VecVisionForImageClassification"}],title:"Data2Vec"};function H$(x){return XT(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class K$ extends HT{constructor(d){super();RT(this,d,H$,W$,QT,{})}}export{K$ as default,B$ as metadata};
