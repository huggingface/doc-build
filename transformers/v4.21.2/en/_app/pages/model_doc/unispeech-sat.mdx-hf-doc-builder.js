import{S as bc,i as wc,s as yc,e as s,k as m,w as b,t as n,M as $c,c as r,d as o,m as f,a as l,x as w,h as a,b as d,G as e,g as _,y,q as $,o as k,B as T,v as kc,L as we}from"../../chunks/vendor-hf-doc-builder.js";import{T as Do}from"../../chunks/Tip-hf-doc-builder.js";import{D as z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ye}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as G}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as be}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Tc(U){let c,v,p,u,S;return u=new ye({props:{code:`from transformers import UniSpeechSatModel, UniSpeechSatConfig

# Initializing a UniSpeechSat microsoft/unispeech-sat-base-100h-libri-ft style configuration
configuration = UniSpeechSatConfig()

# Initializing a model from the microsoft/unispeech-sat-base-100h-libri-ft style configuration
model = UniSpeechSatModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> UniSpeechSatModel, UniSpeechSatConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a UniSpeechSat microsoft/unispeech-sat-base-100h-libri-ft style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = UniSpeechSatConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the microsoft/unispeech-sat-base-100h-libri-ft style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechSatModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=s("p"),v=n("Example:"),p=m(),b(u.$$.fragment)},l(i){c=r(i,"P",{});var h=l(c);v=a(h,"Example:"),h.forEach(o),p=f(i),w(u.$$.fragment,i)},m(i,h){_(i,c,h),e(c,v),_(i,p,h),y(u,i,h),S=!0},p:we,i(i){S||($(u.$$.fragment,i),S=!0)},o(i){k(u.$$.fragment,i),S=!1},d(i){i&&o(c),i&&o(p),T(u,i)}}}function Uc(U){let c,v,p,u,S;return{c(){c=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),u=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=r(i,"P",{});var h=l(c);v=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(h,"CODE",{});var F=l(p);u=a(F,"Module"),F.forEach(o),S=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(i,h){_(i,c,h),e(c,v),e(c,p),e(p,u),e(c,S)},d(i){i&&o(c)}}}function Fc(U){let c,v,p,u,S;return u=new ye({props:{code:`from transformers import Wav2Vec2Processor, UniSpeechSatModel
import torch
from datasets import load_dataset

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("microsoft/unispeech-sat-base-100h-libri-ft")
model = UniSpeechSatModel.from_pretrained("microsoft/unispeech-sat-base-100h-libri-ft")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, UniSpeechSatModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base-100h-libri-ft&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechSatModel.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base-100h-libri-ft&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">768</span>]`}}),{c(){c=s("p"),v=n("Example:"),p=m(),b(u.$$.fragment)},l(i){c=r(i,"P",{});var h=l(c);v=a(h,"Example:"),h.forEach(o),p=f(i),w(u.$$.fragment,i)},m(i,h){_(i,c,h),e(c,v),_(i,p,h),y(u,i,h),S=!0},p:we,i(i){S||($(u.$$.fragment,i),S=!0)},o(i){k(u.$$.fragment,i),S=!1},d(i){i&&o(c),i&&o(p),T(u,i)}}}function xc(U){let c,v,p,u,S;return{c(){c=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),u=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=r(i,"P",{});var h=l(c);v=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(h,"CODE",{});var F=l(p);u=a(F,"Module"),F.forEach(o),S=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(i,h){_(i,c,h),e(c,v),e(c,p),e(p,u),e(c,S)},d(i){i&&o(c)}}}function Cc(U){let c,v,p,u,S;return u=new ye({props:{code:`from transformers import Wav2Vec2Processor, UniSpeechSatForCTC
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("microsoft/unispeech-sat-base-100h-libri-ft")
model = UniSpeechSatForCTC.from_pretrained("microsoft/unispeech-sat-base-100h-libri-ft")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)
transcription[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, UniSpeechSatForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base-100h-libri-ft&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechSatForCTC.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base-100h-libri-ft&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;MISTER QUILDER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>`}}),{c(){c=s("p"),v=n("Example:"),p=m(),b(u.$$.fragment)},l(i){c=r(i,"P",{});var h=l(c);v=a(h,"Example:"),h.forEach(o),p=f(i),w(u.$$.fragment,i)},m(i,h){_(i,c,h),e(c,v),_(i,p,h),y(u,i,h),S=!0},p:we,i(i){S||($(u.$$.fragment,i),S=!0)},o(i){k(u.$$.fragment,i),S=!1},d(i){i&&o(c),i&&o(p),T(u,i)}}}function jc(U){let c,v;return c=new ye({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">39.88</span>`}}),{c(){b(c.$$.fragment)},l(p){w(c.$$.fragment,p)},m(p,u){y(c,p,u),v=!0},p:we,i(p){v||($(c.$$.fragment,p),v=!0)},o(p){k(c.$$.fragment,p),v=!1},d(p){T(c,p)}}}function qc(U){let c,v,p,u,S;return{c(){c=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),u=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=r(i,"P",{});var h=l(c);v=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(h,"CODE",{});var F=l(p);u=a(F,"Module"),F.forEach(o),S=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(i,h){_(i,c,h),e(c,v),e(c,p),e(p,u),e(c,S)},d(i){i&&o(c)}}}function Ec(U){let c,v,p,u,S;return u=new ye({props:{code:`from transformers import Wav2Vec2FeatureExtractor, UniSpeechSatForSequenceClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("hf-internal-testing/tiny-random-unispeech-sat")
model = UniSpeechSatForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-unispeech-sat")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_ids = torch.argmax(logits, dim=-1).item()
predicted_label = model.config.id2label[predicted_class_ids]
predicted_label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, UniSpeechSatForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-unispeech-sat&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechSatForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-unispeech-sat&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){c=s("p"),v=n("Example:"),p=m(),b(u.$$.fragment)},l(i){c=r(i,"P",{});var h=l(c);v=a(h,"Example:"),h.forEach(o),p=f(i),w(u.$$.fragment,i)},m(i,h){_(i,c,h),e(c,v),_(i,p,h),y(u,i,h),S=!0},p:we,i(i){S||($(u.$$.fragment,i),S=!0)},o(i){k(u.$$.fragment,i),S=!1},d(i){i&&o(c),i&&o(p),T(u,i)}}}function Pc(U){let c,v;return c=new ye({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.71</span>`}}),{c(){b(c.$$.fragment)},l(p){w(c.$$.fragment,p)},m(p,u){y(c,p,u),v=!0},p:we,i(p){v||($(c.$$.fragment,p),v=!0)},o(p){k(c.$$.fragment,p),v=!1},d(p){T(c,p)}}}function Ac(U){let c,v,p,u,S;return{c(){c=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),u=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=r(i,"P",{});var h=l(c);v=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(h,"CODE",{});var F=l(p);u=a(F,"Module"),F.forEach(o),S=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(i,h){_(i,c,h),e(c,v),e(c,p),e(p,u),e(c,S)},d(i){i&&o(c)}}}function Mc(U){let c,v,p,u,S;return u=new ye({props:{code:`from transformers import Wav2Vec2FeatureExtractor, UniSpeechSatForAudioFrameClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("microsoft/unispeech-sat-base-plus-sd")
model = UniSpeechSatForAudioFrameClassification.from_pretrained("microsoft/unispeech-sat-base-plus-sd")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], return_tensors="pt", sampling_rate=sampling_rate)
with torch.no_grad():
    logits = model(**inputs).logits

probabilities = torch.sigmoid(logits[0])
# labels is a one-hot array of shape (num_frames, num_speakers)
labels = (probabilities > 0.5).long()
labels[0].tolist()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, UniSpeechSatForAudioFrameClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base-plus-sd&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechSatForAudioFrameClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base-plus-sd&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, sampling_rate=sampling_rate)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>probabilities = torch.sigmoid(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># labels is a one-hot array of shape (num_frames, num_speakers)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = (probabilities &gt; <span class="hljs-number">0.5</span>).long()
<span class="hljs-meta">&gt;&gt;&gt; </span>labels[<span class="hljs-number">0</span>].tolist()
[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>]`}}),{c(){c=s("p"),v=n("Example:"),p=m(),b(u.$$.fragment)},l(i){c=r(i,"P",{});var h=l(c);v=a(h,"Example:"),h.forEach(o),p=f(i),w(u.$$.fragment,i)},m(i,h){_(i,c,h),e(c,v),_(i,p,h),y(u,i,h),S=!0},p:we,i(i){S||($(u.$$.fragment,i),S=!0)},o(i){k(u.$$.fragment,i),S=!1},d(i){i&&o(c),i&&o(p),T(u,i)}}}function zc(U){let c,v,p,u,S;return{c(){c=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),u=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=r(i,"P",{});var h=l(c);v=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(h,"CODE",{});var F=l(p);u=a(F,"Module"),F.forEach(o),S=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(i,h){_(i,c,h),e(c,v),e(c,p),e(p,u),e(c,S)},d(i){i&&o(c)}}}function Oc(U){let c,v,p,u,S;return u=new ye({props:{code:`from transformers import Wav2Vec2FeatureExtractor, UniSpeechSatForXVector
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("microsoft/unispeech-sat-base-plus-sv")
model = UniSpeechSatForXVector.from_pretrained("microsoft/unispeech-sat-base-plus-sv")

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
round(similarity.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, UniSpeechSatForXVector
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base-plus-sv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechSatForXVector.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base-plus-sv&quot;</span>)

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
<span class="hljs-number">0.97</span>`}}),{c(){c=s("p"),v=n("Example:"),p=m(),b(u.$$.fragment)},l(i){c=r(i,"P",{});var h=l(c);v=a(h,"Example:"),h.forEach(o),p=f(i),w(u.$$.fragment,i)},m(i,h){_(i,c,h),e(c,v),_(i,p,h),y(u,i,h),S=!0},p:we,i(i){S||($(u.$$.fragment,i),S=!0)},o(i){k(u.$$.fragment,i),S=!1},d(i){i&&o(c),i&&o(p),T(u,i)}}}function Dc(U){let c,v,p,u,S;return{c(){c=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),u=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){c=r(i,"P",{});var h=l(c);v=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(h,"CODE",{});var F=l(p);u=a(F,"Module"),F.forEach(o),S=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(i,h){_(i,c,h),e(c,v),e(c,p),e(p,u),e(c,S)},d(i){i&&o(c)}}}function Lc(U){let c,v,p,u,S;return u=new ye({props:{code:`import torch
from transformers import Wav2Vec2FeatureExtractor, UniSpeechSatForPreTraining
from transformers.models.unispeech_sat.modeling_unispeech_sat import _compute_mask_indices

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("microsoft/unispeech-sat-base")
model = UniSpeechSatForPreTraining.from_pretrained("microsoft/unispeech-sat-base")
# TODO: Add full pretraining example`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, UniSpeechSatForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.models.unispeech_sat.modeling_unispeech_sat <span class="hljs-keyword">import</span> _compute_mask_indices

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechSatForPreTraining.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># <span class="hljs-doctag">TODO:</span> Add full pretraining example</span>`}}),{c(){c=s("p"),v=n("Example:"),p=m(),b(u.$$.fragment)},l(i){c=r(i,"P",{});var h=l(c);v=a(h,"Example:"),h.forEach(o),p=f(i),w(u.$$.fragment,i)},m(i,h){_(i,c,h),e(c,v),_(i,p,h),y(u,i,h),S=!0},p:we,i(i){S||($(u.$$.fragment,i),S=!0)},o(i){k(u.$$.fragment,i),S=!1},d(i){i&&o(c),i&&o(p),T(u,i)}}}function Vc(U){let c,v,p,u,S,i,h,F,Fa,Cn,K,$e,Lo,Ke,xa,Vo,Ca,jn,ke,ja,et,qa,Ea,qn,ro,Pa,En,io,No,Aa,Pn,lo,Ma,An,X,tt,za,co,Oa,Da,La,ot,Va,po,Na,Wa,Ia,Wo,Ha,Mn,B,Xa,nt,Ba,Ra,at,Za,Qa,zn,ee,Te,Io,st,Ya,Ho,Ja,On,O,rt,Ga,te,Ka,ho,es,ts,it,os,ns,as,oe,ss,mo,rs,is,fo,ls,cs,ds,Ue,Dn,ne,Fe,Xo,lt,ps,Bo,hs,Ln,ae,ct,ms,dt,fs,Ro,us,gs,Vn,se,xe,Zo,pt,_s,Qo,vs,Nn,q,ht,Ss,mt,bs,ft,ws,ys,$s,ut,ks,uo,Ts,Us,Fs,gt,xs,_t,Cs,js,qs,D,vt,Es,re,Ps,go,As,Ms,Yo,zs,Os,Ds,Ce,Ls,je,Wn,ie,qe,Jo,St,Vs,Go,Ns,In,E,bt,Ws,le,Is,Ko,Hs,Xs,wt,Bs,Rs,Zs,yt,Qs,_o,Ys,Js,Gs,$t,Ks,kt,er,tr,or,A,Tt,nr,ce,ar,vo,sr,rr,en,ir,lr,cr,Ee,dr,Pe,pr,Ae,Hn,de,Me,tn,Ut,hr,on,mr,Xn,x,Ft,fr,nn,ur,gr,xt,_r,Ct,vr,Sr,br,jt,wr,So,yr,$r,kr,qt,Tr,Et,Ur,Fr,xr,M,Pt,Cr,pe,jr,bo,qr,Er,an,Pr,Ar,Mr,ze,zr,Oe,Or,De,Bn,he,Le,sn,At,Dr,rn,Lr,Rn,C,Mt,Vr,ln,Nr,Wr,zt,Ir,Ot,Hr,Xr,Br,Dt,Rr,wo,Zr,Qr,Yr,Lt,Jr,Vt,Gr,Kr,ei,L,Nt,ti,me,oi,yo,ni,ai,cn,si,ri,ii,Ve,li,Ne,Zn,fe,We,dn,Wt,ci,pn,di,Qn,j,It,pi,hn,hi,mi,Ht,fi,Xt,ui,gi,_i,Bt,vi,$o,Si,bi,wi,Rt,yi,Zt,$i,ki,Ti,V,Qt,Ui,ue,Fi,ko,xi,Ci,mn,ji,qi,Ei,Ie,Pi,He,Yn,ge,Xe,fn,Yt,Ai,un,Mi,Jn,P,Jt,zi,_e,Oi,gn,Di,Li,Gt,Vi,Ni,Wi,Kt,Ii,To,Hi,Xi,Bi,eo,Ri,to,Zi,Qi,Yi,N,oo,Ji,ve,Gi,Uo,Ki,el,_n,tl,ol,nl,Be,al,Re,Gn;return i=new G({}),Ke=new G({}),st=new G({}),rt=new z({props:{name:"class transformers.UniSpeechSatConfig",anchor:"transformers.UniSpeechSatConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"feat_quantizer_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"num_codevectors_per_group",val:" = 320"},{name:"num_codevector_groups",val:" = 2"},{name:"contrastive_logits_temperature",val:" = 0.1"},{name:"num_negatives",val:" = 100"},{name:"codevector_dim",val:" = 256"},{name:"proj_codevector_dim",val:" = 256"},{name:"diversity_loss_weight",val:" = 0.1"},{name:"ctc_loss_reduction",val:" = 'mean'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"tdnn_dim",val:" = (512, 512, 512, 512, 1500)"},{name:"tdnn_kernel",val:" = (5, 3, 3, 1, 1)"},{name:"tdnn_dilation",val:" = (1, 2, 3, 1, 1)"},{name:"xvector_output_dim",val:" = 512"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"num_clusters",val:" = 504"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechSatConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the UniSpeechSat model. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatModel">UniSpeechSatModel</a>. Vocabulary size of the model. Defines the
different tokens that can be represented by the <em>inputs_ids</em> passed to the forward method of
<a href="/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatModel">UniSpeechSatModel</a>.`,name:"vocab_size"},{anchor:"transformers.UniSpeechSatConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.UniSpeechSatConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.UniSpeechSatConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.UniSpeechSatConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.UniSpeechSatConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.UniSpeechSatConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.UniSpeechSatConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.UniSpeechSatConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatForCTC">UniSpeechSatForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.UniSpeechSatConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.UniSpeechSatConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.UniSpeechSatConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.UniSpeechSatConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.UniSpeechSatConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.UniSpeechSatConfig.feat_quantizer_dropout",description:`<strong>feat_quantizer_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for quantized feature encoder states.`,name:"feat_quantizer_dropout"},{anchor:"transformers.UniSpeechSatConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.UniSpeechSatConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.UniSpeechSatConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 3, 3)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.UniSpeechSatConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.UniSpeechSatConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.UniSpeechSatConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.UniSpeechSatConfig.do_stable_layer_norm",description:`<strong>do_stable_layer_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply <em>stable</em> layer norm architecture of the Transformer encoder. <code>do_stable_layer_norm is True</code> corresponds to applying layer norm before the attention layer, whereas <code>do_stable_layer_norm is False</code> corresponds to applying layer norm after the attention layer.`,name:"do_stable_layer_norm"},{anchor:"transformers.UniSpeechSatConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature encoder. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech
Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.UniSpeechSatConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask_time_prob<em>len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, </em>mask_time_prob<em> should be \`prob_vector_start</em>mask_time_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is True\`.`,name:"mask_time_prob"},{anchor:"transformers.UniSpeechSatConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.UniSpeechSatConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.UniSpeechSatConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask_feature_prob<em>len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, </em>mask_feature_prob<em> should be \`prob_vector_start</em>mask_feature_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is
True\`.`,name:"mask_feature_prob"},{anchor:"transformers.UniSpeechSatConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.UniSpeechSatConfig.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.UniSpeechSatConfig.num_codevectors_per_group",description:`<strong>num_codevectors_per_group</strong> (<code>int</code>, <em>optional</em>, defaults to 320) &#x2014;
Number of entries in each quantization codebook (group).`,name:"num_codevectors_per_group"},{anchor:"transformers.UniSpeechSatConfig.num_codevector_groups",description:`<strong>num_codevector_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of codevector groups for product codevector quantization.`,name:"num_codevector_groups"},{anchor:"transformers.UniSpeechSatConfig.contrastive_logits_temperature",description:`<strong>contrastive_logits_temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The temperature <em>kappa</em> in the contrastive loss.`,name:"contrastive_logits_temperature"},{anchor:"transformers.UniSpeechSatConfig.feat_quantizer_dropout",description:`<strong>feat_quantizer_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for the output of the feature encoder that&#x2019;s used by the quantizer.`,name:"feat_quantizer_dropout"},{anchor:"transformers.UniSpeechSatConfig.num_negatives",description:`<strong>num_negatives</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Number of negative samples for the contrastive loss.`,name:"num_negatives"},{anchor:"transformers.UniSpeechSatConfig.codevector_dim",description:`<strong>codevector_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the quantized feature vectors.`,name:"codevector_dim"},{anchor:"transformers.UniSpeechSatConfig.proj_codevector_dim",description:`<strong>proj_codevector_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the final projection of both the quantized and the transformer features.`,name:"proj_codevector_dim"},{anchor:"transformers.UniSpeechSatConfig.diversity_loss_weight",description:`<strong>diversity_loss_weight</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The weight of the codebook diversity loss component.`,name:"diversity_loss_weight"},{anchor:"transformers.UniSpeechSatConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;mean&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatForCTC">UniSpeechSatForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.UniSpeechSatConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatForCTC">UniSpeechSatForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.UniSpeechSatConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatForSequenceClassification">UniSpeechSatForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.UniSpeechSatConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"},{anchor:"transformers.UniSpeechSatConfig.tdnn_dim",description:`<strong>tdnn_dim</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 1500)</code>) &#x2014;
A tuple of integers defining the number of output channels of each 1D convolutional layer in the <em>TDNN</em>
module of the <em>XVector</em> model. The length of <em>tdnn_dim</em> defines the number of <em>TDNN</em> layers.`,name:"tdnn_dim"},{anchor:"transformers.UniSpeechSatConfig.tdnn_kernel",description:`<strong>tdnn_kernel</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(5, 3, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_kernel</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_kernel"},{anchor:"transformers.UniSpeechSatConfig.tdnn_dilation",description:`<strong>tdnn_dilation</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(1, 2, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the dilation factor of each 1D convolutional layer in <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_dilation</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_dilation"},{anchor:"transformers.UniSpeechSatConfig.xvector_output_dim",description:`<strong>xvector_output_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the <em>XVector</em> embedding vectors.`,name:"xvector_output_dim"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/unispeech_sat/configuration_unispeech_sat.py#L34"}}),Ue=new be({props:{anchor:"transformers.UniSpeechSatConfig.example",$$slots:{default:[Tc]},$$scope:{ctx:U}}}),lt=new G({}),ct=new z({props:{name:"class transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput",anchor:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"projected_states",val:": FloatTensor = None"},{name:"projected_quantized_states",val:": FloatTensor = None"},{name:"codevector_perplexity",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when model is in train mode, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the contrastive loss (L_m) and the diversity loss (L_d) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official
paper</a> . (classification) loss.`,name:"loss"},{anchor:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput.projected_states",description:`<strong>projected_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) &#x2014;
Hidden-states of the model projected to <em>config.proj_codevector_dim</em> that can be used to predict the masked
projected quantized states.`,name:"projected_states"},{anchor:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput.projected_quantized_states",description:`<strong>projected_quantized_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) &#x2014;
Quantized extracted feature vectors projected to <em>config.proj_codevector_dim</em> representing the positive
target vectors for contrastive loss.`,name:"projected_quantized_states"},{anchor:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L88"}}),pt=new G({}),ht=new z({props:{name:"class transformers.UniSpeechSatModel",anchor:"transformers.UniSpeechSatModel",parameters:[{name:"config",val:": UniSpeechSatConfig"}],parametersDescription:[{anchor:"transformers.UniSpeechSatModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig">UniSpeechSatConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1083"}}),vt=new z({props:{name:"forward",anchor:"transformers.UniSpeechSatModel.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.UniSpeechSatModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <code>UniSpeechSatProcessor</code> should be used for
padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>UniSpeechSatProcessor.__call__</code>
for details.`,name:"input_values"},{anchor:"transformers.UniSpeechSatModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/microsoft/unispeech-sat-base-100h-libri-ft" rel="nofollow">microsoft/unispeech-sat-base-100h-libri-ft</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.UniSpeechSatModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UniSpeechSatModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UniSpeechSatModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1147",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig"
>UniSpeechSatConfig</a>) and inputs.</p>
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
`}}),Ce=new Do({props:{$$slots:{default:[Uc]},$$scope:{ctx:U}}}),je=new be({props:{anchor:"transformers.UniSpeechSatModel.forward.example",$$slots:{default:[Fc]},$$scope:{ctx:U}}}),St=new G({}),bt=new z({props:{name:"class transformers.UniSpeechSatForCTC",anchor:"transformers.UniSpeechSatForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechSatForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig">UniSpeechSatConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1347"}}),Tt=new z({props:{name:"forward",anchor:"transformers.UniSpeechSatForCTC.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.UniSpeechSatForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <code>UniSpeechSatProcessor</code> should be used for
padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>UniSpeechSatProcessor.__call__</code>
for details.`,name:"input_values"},{anchor:"transformers.UniSpeechSatForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/microsoft/unispeech-sat-base-100h-libri-ft" rel="nofollow">microsoft/unispeech-sat-base-100h-libri-ft</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.UniSpeechSatForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UniSpeechSatForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UniSpeechSatForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UniSpeechSatForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1388",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig"
>UniSpeechSatConfig</a>) and inputs.</p>
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
`}}),Ee=new Do({props:{$$slots:{default:[xc]},$$scope:{ctx:U}}}),Pe=new be({props:{anchor:"transformers.UniSpeechSatForCTC.forward.example",$$slots:{default:[Cc]},$$scope:{ctx:U}}}),Ae=new be({props:{anchor:"transformers.UniSpeechSatForCTC.forward.example-2",$$slots:{default:[jc]},$$scope:{ctx:U}}}),Ut=new G({}),Ft=new z({props:{name:"class transformers.UniSpeechSatForSequenceClassification",anchor:"transformers.UniSpeechSatForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechSatForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig">UniSpeechSatConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1478"}}),Pt=new z({props:{name:"forward",anchor:"transformers.UniSpeechSatForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.UniSpeechSatForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <code>UniSpeechSatProcessor</code> should be used for
padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>UniSpeechSatProcessor.__call__</code>
for details.`,name:"input_values"},{anchor:"transformers.UniSpeechSatForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/microsoft/unispeech-sat-base-100h-libri-ft" rel="nofollow">microsoft/unispeech-sat-base-100h-libri-ft</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.UniSpeechSatForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UniSpeechSatForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UniSpeechSatForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UniSpeechSatForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1523",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig"
>UniSpeechSatConfig</a>) and inputs.</p>
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
`}}),ze=new Do({props:{$$slots:{default:[qc]},$$scope:{ctx:U}}}),Oe=new be({props:{anchor:"transformers.UniSpeechSatForSequenceClassification.forward.example",$$slots:{default:[Ec]},$$scope:{ctx:U}}}),De=new be({props:{anchor:"transformers.UniSpeechSatForSequenceClassification.forward.example-2",$$slots:{default:[Pc]},$$scope:{ctx:U}}}),At=new G({}),Mt=new z({props:{name:"class transformers.UniSpeechSatForAudioFrameClassification",anchor:"transformers.UniSpeechSatForAudioFrameClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechSatForAudioFrameClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig">UniSpeechSatConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1602"}}),Nt=new z({props:{name:"forward",anchor:"transformers.UniSpeechSatForAudioFrameClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.UniSpeechSatForAudioFrameClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <code>UniSpeechSatProcessor</code> should be used for
padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>UniSpeechSatProcessor.__call__</code>
for details.`,name:"input_values"},{anchor:"transformers.UniSpeechSatForAudioFrameClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/microsoft/unispeech-sat-base-100h-libri-ft" rel="nofollow">microsoft/unispeech-sat-base-100h-libri-ft</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.UniSpeechSatForAudioFrameClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UniSpeechSatForAudioFrameClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UniSpeechSatForAudioFrameClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UniSpeechSatForAudioFrameClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1647",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig"
>UniSpeechSatConfig</a>) and inputs.</p>
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
`}}),Ve=new Do({props:{$$slots:{default:[Ac]},$$scope:{ctx:U}}}),Ne=new be({props:{anchor:"transformers.UniSpeechSatForAudioFrameClassification.forward.example",$$slots:{default:[Mc]},$$scope:{ctx:U}}}),Wt=new G({}),It=new z({props:{name:"class transformers.UniSpeechSatForXVector",anchor:"transformers.UniSpeechSatForXVector",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechSatForXVector.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig">UniSpeechSatConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1768"}}),Qt=new z({props:{name:"forward",anchor:"transformers.UniSpeechSatForXVector.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.UniSpeechSatForXVector.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <code>UniSpeechSatProcessor</code> should be used for
padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>UniSpeechSatProcessor.__call__</code>
for details.`,name:"input_values"},{anchor:"transformers.UniSpeechSatForXVector.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/microsoft/unispeech-sat-base-100h-libri-ft" rel="nofollow">microsoft/unispeech-sat-base-100h-libri-ft</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.UniSpeechSatForXVector.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UniSpeechSatForXVector.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UniSpeechSatForXVector.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UniSpeechSatForXVector.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1830",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.XVectorOutput"
>transformers.modeling_outputs.XVectorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig"
>UniSpeechSatConfig</a>) and inputs.</p>
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
`}}),Ie=new Do({props:{$$slots:{default:[zc]},$$scope:{ctx:U}}}),He=new be({props:{anchor:"transformers.UniSpeechSatForXVector.forward.example",$$slots:{default:[Oc]},$$scope:{ctx:U}}}),Yt=new G({}),Jt=new z({props:{name:"class transformers.UniSpeechSatForPreTraining",anchor:"transformers.UniSpeechSatForPreTraining",parameters:[{name:"config",val:": UniSpeechSatConfig"}],parametersDescription:[{anchor:"transformers.UniSpeechSatForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig">UniSpeechSatConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1205"}}),oo=new z({props:{name:"forward",anchor:"transformers.UniSpeechSatForPreTraining.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.UniSpeechSatForPreTraining.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <code>UniSpeechSatProcessor</code> should be used for
padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>UniSpeechSatProcessor.__call__</code>
for details.`,name:"input_values"},{anchor:"transformers.UniSpeechSatForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/microsoft/unispeech-sat-base-100h-libri-ft" rel="nofollow">microsoft/unispeech-sat-base-100h-libri-ft</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.UniSpeechSatForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UniSpeechSatForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UniSpeechSatForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1273",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput"
>transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig"
>UniSpeechSatConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when model is in train mode, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the contrastive loss (L_m) and the diversity loss (L_d) as stated in the <a
  href="https://arxiv.org/pdf/2006.11477.pdf"
  rel="nofollow"
>official
paper</a> . (classification) loss.</p>
</li>
<li>
<p><strong>projected_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) \u2014 Hidden-states of the model projected to <em>config.proj_codevector_dim</em> that can be used to predict the masked
projected quantized states.</p>
</li>
<li>
<p><strong>projected_quantized_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) \u2014 Quantized extracted feature vectors projected to <em>config.proj_codevector_dim</em> representing the positive
target vectors for contrastive loss.</p>
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
  href="/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput"
>transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Be=new Do({props:{$$slots:{default:[Dc]},$$scope:{ctx:U}}}),Re=new be({props:{anchor:"transformers.UniSpeechSatForPreTraining.forward.example",$$slots:{default:[Lc]},$$scope:{ctx:U}}}),{c(){c=s("meta"),v=m(),p=s("h1"),u=s("a"),S=s("span"),b(i.$$.fragment),h=m(),F=s("span"),Fa=n("UniSpeech-SAT"),Cn=m(),K=s("h2"),$e=s("a"),Lo=s("span"),b(Ke.$$.fragment),xa=m(),Vo=s("span"),Ca=n("Overview"),jn=m(),ke=s("p"),ja=n("The UniSpeech-SAT model was proposed in "),et=s("a"),qa=n(`UniSpeech-SAT: Universal Speech Representation Learning with Speaker Aware
Pre-Training`),Ea=n(` by Sanyuan Chen, Yu Wu, Chengyi Wang, Zhengyang Chen, Zhuo Chen,
Shujie Liu, Jian Wu, Yao Qian, Furu Wei, Jinyu Li, Xiangzhan Yu .`),qn=m(),ro=s("p"),Pa=n("The abstract from the paper is the following:"),En=m(),io=s("p"),No=s("em"),Aa=n(`Self-supervised learning (SSL) is a long-standing goal for speech processing, since it utilizes large-scale unlabeled
data and avoids extensive human labeling. Recent years witness great successes in applying self-supervised learning in
speech recognition, while limited exploration was attempted in applying SSL for modeling speaker characteristics. In
this paper, we aim to improve the existing SSL framework for speaker representation learning. Two methods are
introduced for enhancing the unsupervised speaker information extraction. First, we apply the multi-task learning to
the current SSL framework, where we integrate the utterance-wise contrastive loss with the SSL objective function.
Second, for better speaker discrimination, we propose an utterance mixing strategy for data augmentation, where
additional overlapped utterances are created unsupervisely and incorporate during training. We integrate the proposed
methods into the HuBERT framework. Experiment results on SUPERB benchmark show that the proposed system achieves
state-of-the-art performance in universal representation learning, especially for speaker identification oriented
tasks. An ablation study is performed verifying the efficacy of each proposed method. Finally, we scale up training
dataset to 94 thousand hours public audio data and achieve further performance improvement in all SUPERB tasks.`),Pn=m(),lo=s("p"),Ma=n("Tips:"),An=m(),X=s("ul"),tt=s("li"),za=n(`UniSpeechSat is a speech model that accepts a float array corresponding to the raw waveform of the speech signal.
Please use `),co=s("a"),Oa=n("Wav2Vec2Processor"),Da=n(" for the feature extraction."),La=m(),ot=s("li"),Va=n(`UniSpeechSat model can be fine-tuned using connectionist temporal classification (CTC) so the model output has to be
decoded using `),po=s("a"),Na=n("Wav2Vec2CTCTokenizer"),Wa=n("."),Ia=m(),Wo=s("li"),Ha=n("UniSpeechSat performs especially well on speaker verification, speaker identification, and speaker diarization tasks."),Mn=m(),B=s("p"),Xa=n("This model was contributed by "),nt=s("a"),Ba=n("patrickvonplaten"),Ra=n(`. The Authors\u2019 code can be
found `),at=s("a"),Za=n("here"),Qa=n("."),zn=m(),ee=s("h2"),Te=s("a"),Io=s("span"),b(st.$$.fragment),Ya=m(),Ho=s("span"),Ja=n("UniSpeechSatConfig"),On=m(),O=s("div"),b(rt.$$.fragment),Ga=m(),te=s("p"),Ka=n("This is the configuration class to store the configuration of a "),ho=s("a"),es=n("UniSpeechSatModel"),ts=n(`. It is used to instantiate an
UniSpeechSat model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the UniSpeechSat
`),it=s("a"),os=n("microsoft/unispeech-sat-base-100h-libri-ft"),ns=n(`
architecture.`),as=m(),oe=s("p"),ss=n("Configuration objects inherit from "),mo=s("a"),rs=n("PretrainedConfig"),is=n(` and can be used to control the model outputs. Read the
documentation from `),fo=s("a"),ls=n("PretrainedConfig"),cs=n(" for more information."),ds=m(),b(Ue.$$.fragment),Dn=m(),ne=s("h2"),Fe=s("a"),Xo=s("span"),b(lt.$$.fragment),ps=m(),Bo=s("span"),hs=n("UniSpeechSat specific outputs"),Ln=m(),ae=s("div"),b(ct.$$.fragment),ms=m(),dt=s("p"),fs=n("Output type of "),Ro=s("code"),us=n("UniSpeechSatForPreTrainingOutput"),gs=n(", with potential hidden states and attentions."),Vn=m(),se=s("h2"),xe=s("a"),Zo=s("span"),b(pt.$$.fragment),_s=m(),Qo=s("span"),vs=n("UniSpeechSatModel"),Nn=m(),q=s("div"),b(ht.$$.fragment),Ss=m(),mt=s("p"),bs=n(`The bare UniSpeechSat Model transformer outputting raw hidden-states without any specific head on top.
UniSpeechSat was proposed in `),ft=s("a"),ws=n(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),ys=n(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),$s=m(),ut=s("p"),ks=n("This model inherits from "),uo=s("a"),Ts=n("PreTrainedModel"),Us=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Fs=m(),gt=s("p"),xs=n("This model is a PyTorch "),_t=s("a"),Cs=n("torch.nn.Module"),js=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),qs=m(),D=s("div"),b(vt.$$.fragment),Es=m(),re=s("p"),Ps=n("The "),go=s("a"),As=n("UniSpeechSatModel"),Ms=n(" forward method, overrides the "),Yo=s("code"),zs=n("__call__"),Os=n(" special method."),Ds=m(),b(Ce.$$.fragment),Ls=m(),b(je.$$.fragment),Wn=m(),ie=s("h2"),qe=s("a"),Jo=s("span"),b(St.$$.fragment),Vs=m(),Go=s("span"),Ns=n("UniSpeechSatForCTC"),In=m(),E=s("div"),b(bt.$$.fragment),Ws=m(),le=s("p"),Is=n("UniSpeechSat Model with a "),Ko=s("code"),Hs=n("language modeling"),Xs=n(` head on top for Connectionist Temporal Classification (CTC).
UniSpeechSat was proposed in `),wt=s("a"),Bs=n(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Rs=n(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Zs=m(),yt=s("p"),Qs=n("This model inherits from "),_o=s("a"),Ys=n("PreTrainedModel"),Js=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Gs=m(),$t=s("p"),Ks=n("This model is a PyTorch "),kt=s("a"),er=n("torch.nn.Module"),tr=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),or=m(),A=s("div"),b(Tt.$$.fragment),nr=m(),ce=s("p"),ar=n("The "),vo=s("a"),sr=n("UniSpeechSatForCTC"),rr=n(" forward method, overrides the "),en=s("code"),ir=n("__call__"),lr=n(" special method."),cr=m(),b(Ee.$$.fragment),dr=m(),b(Pe.$$.fragment),pr=m(),b(Ae.$$.fragment),Hn=m(),de=s("h2"),Me=s("a"),tn=s("span"),b(Ut.$$.fragment),hr=m(),on=s("span"),mr=n("UniSpeechSatForSequenceClassification"),Xn=m(),x=s("div"),b(Ft.$$.fragment),fr=m(),nn=s("p"),ur=n(`UniSpeechSat Model with a sequence classification head on top (a linear layer over the pooled output) for tasks
like SUPERB Keyword Spotting.`),gr=m(),xt=s("p"),_r=n("UniSpeechSat was proposed in "),Ct=s("a"),vr=n(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Sr=n(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),br=m(),jt=s("p"),wr=n("This model inherits from "),So=s("a"),yr=n("PreTrainedModel"),$r=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),kr=m(),qt=s("p"),Tr=n("This model is a PyTorch "),Et=s("a"),Ur=n("torch.nn.Module"),Fr=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xr=m(),M=s("div"),b(Pt.$$.fragment),Cr=m(),pe=s("p"),jr=n("The "),bo=s("a"),qr=n("UniSpeechSatForSequenceClassification"),Er=n(" forward method, overrides the "),an=s("code"),Pr=n("__call__"),Ar=n(" special method."),Mr=m(),b(ze.$$.fragment),zr=m(),b(Oe.$$.fragment),Or=m(),b(De.$$.fragment),Bn=m(),he=s("h2"),Le=s("a"),sn=s("span"),b(At.$$.fragment),Dr=m(),rn=s("span"),Lr=n("UniSpeechSatForAudioFrameClassification"),Rn=m(),C=s("div"),b(Mt.$$.fragment),Vr=m(),ln=s("p"),Nr=n("UniSpeech-SAT Model with a frame classification head on top for tasks like Speaker Diarization."),Wr=m(),zt=s("p"),Ir=n("UniSpeechSat was proposed in "),Ot=s("a"),Hr=n(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Xr=n(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Br=m(),Dt=s("p"),Rr=n("This model inherits from "),wo=s("a"),Zr=n("PreTrainedModel"),Qr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Yr=m(),Lt=s("p"),Jr=n("This model is a PyTorch "),Vt=s("a"),Gr=n("torch.nn.Module"),Kr=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ei=m(),L=s("div"),b(Nt.$$.fragment),ti=m(),me=s("p"),oi=n("The "),yo=s("a"),ni=n("UniSpeechSatForAudioFrameClassification"),ai=n(" forward method, overrides the "),cn=s("code"),si=n("__call__"),ri=n(" special method."),ii=m(),b(Ve.$$.fragment),li=m(),b(Ne.$$.fragment),Zn=m(),fe=s("h2"),We=s("a"),dn=s("span"),b(Wt.$$.fragment),ci=m(),pn=s("span"),di=n("UniSpeechSatForXVector"),Qn=m(),j=s("div"),b(It.$$.fragment),pi=m(),hn=s("p"),hi=n("UniSpeech-SAT Model with an XVector feature extraction head on top for tasks like Speaker Verification."),mi=m(),Ht=s("p"),fi=n("UniSpeechSat was proposed in "),Xt=s("a"),ui=n(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),gi=n(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),_i=m(),Bt=s("p"),vi=n("This model inherits from "),$o=s("a"),Si=n("PreTrainedModel"),bi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),wi=m(),Rt=s("p"),yi=n("This model is a PyTorch "),Zt=s("a"),$i=n("torch.nn.Module"),ki=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ti=m(),V=s("div"),b(Qt.$$.fragment),Ui=m(),ue=s("p"),Fi=n("The "),ko=s("a"),xi=n("UniSpeechSatForXVector"),Ci=n(" forward method, overrides the "),mn=s("code"),ji=n("__call__"),qi=n(" special method."),Ei=m(),b(Ie.$$.fragment),Pi=m(),b(He.$$.fragment),Yn=m(),ge=s("h2"),Xe=s("a"),fn=s("span"),b(Yt.$$.fragment),Ai=m(),un=s("span"),Mi=n("UniSpeechSatForPreTraining"),Jn=m(),P=s("div"),b(Jt.$$.fragment),zi=m(),_e=s("p"),Oi=n("UniSpeechSat Model with a quantizer and "),gn=s("code"),Di=n("VQ"),Li=n(` head on top.
UniSpeechSat was proposed in `),Gt=s("a"),Vi=n(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Ni=n(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Wi=m(),Kt=s("p"),Ii=n("This model inherits from "),To=s("a"),Hi=n("PreTrainedModel"),Xi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Bi=m(),eo=s("p"),Ri=n("This model is a PyTorch "),to=s("a"),Zi=n("torch.nn.Module"),Qi=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yi=m(),N=s("div"),b(oo.$$.fragment),Ji=m(),ve=s("p"),Gi=n("The "),Uo=s("a"),Ki=n("UniSpeechSatForPreTraining"),el=n(" forward method, overrides the "),_n=s("code"),tl=n("__call__"),ol=n(" special method."),nl=m(),b(Be.$$.fragment),al=m(),b(Re.$$.fragment),this.h()},l(t){const g=$c('[data-svelte="svelte-1phssyn"]',document.head);c=r(g,"META",{name:!0,content:!0}),g.forEach(o),v=f(t),p=r(t,"H1",{class:!0});var no=l(p);u=r(no,"A",{id:!0,class:!0,href:!0});var vn=l(u);S=r(vn,"SPAN",{});var Sn=l(S);w(i.$$.fragment,Sn),Sn.forEach(o),vn.forEach(o),h=f(no),F=r(no,"SPAN",{});var bn=l(F);Fa=a(bn,"UniSpeech-SAT"),bn.forEach(o),no.forEach(o),Cn=f(t),K=r(t,"H2",{class:!0});var ao=l(K);$e=r(ao,"A",{id:!0,class:!0,href:!0});var wn=l($e);Lo=r(wn,"SPAN",{});var yn=l(Lo);w(Ke.$$.fragment,yn),yn.forEach(o),wn.forEach(o),xa=f(ao),Vo=r(ao,"SPAN",{});var $n=l(Vo);Ca=a($n,"Overview"),$n.forEach(o),ao.forEach(o),jn=f(t),ke=r(t,"P",{});var so=l(ke);ja=a(so,"The UniSpeech-SAT model was proposed in "),et=r(so,"A",{href:!0,rel:!0});var kn=l(et);qa=a(kn,`UniSpeech-SAT: Universal Speech Representation Learning with Speaker Aware
Pre-Training`),kn.forEach(o),Ea=a(so,` by Sanyuan Chen, Yu Wu, Chengyi Wang, Zhengyang Chen, Zhuo Chen,
Shujie Liu, Jian Wu, Yao Qian, Furu Wei, Jinyu Li, Xiangzhan Yu .`),so.forEach(o),qn=f(t),ro=r(t,"P",{});var Tn=l(ro);Pa=a(Tn,"The abstract from the paper is the following:"),Tn.forEach(o),En=f(t),io=r(t,"P",{});var Un=l(io);No=r(Un,"EM",{});var Fn=l(No);Aa=a(Fn,`Self-supervised learning (SSL) is a long-standing goal for speech processing, since it utilizes large-scale unlabeled
data and avoids extensive human labeling. Recent years witness great successes in applying self-supervised learning in
speech recognition, while limited exploration was attempted in applying SSL for modeling speaker characteristics. In
this paper, we aim to improve the existing SSL framework for speaker representation learning. Two methods are
introduced for enhancing the unsupervised speaker information extraction. First, we apply the multi-task learning to
the current SSL framework, where we integrate the utterance-wise contrastive loss with the SSL objective function.
Second, for better speaker discrimination, we propose an utterance mixing strategy for data augmentation, where
additional overlapped utterances are created unsupervisely and incorporate during training. We integrate the proposed
methods into the HuBERT framework. Experiment results on SUPERB benchmark show that the proposed system achieves
state-of-the-art performance in universal representation learning, especially for speaker identification oriented
tasks. An ablation study is performed verifying the efficacy of each proposed method. Finally, we scale up training
dataset to 94 thousand hours public audio data and achieve further performance improvement in all SUPERB tasks.`),Fn.forEach(o),Un.forEach(o),Pn=f(t),lo=r(t,"P",{});var xn=l(lo);Ma=a(xn,"Tips:"),xn.forEach(o),An=f(t),X=r(t,"UL",{});var Se=l(X);tt=r(Se,"LI",{});var Kn=l(tt);za=a(Kn,`UniSpeechSat is a speech model that accepts a float array corresponding to the raw waveform of the speech signal.
Please use `),co=r(Kn,"A",{href:!0});var sl=l(co);Oa=a(sl,"Wav2Vec2Processor"),sl.forEach(o),Da=a(Kn," for the feature extraction."),Kn.forEach(o),La=f(Se),ot=r(Se,"LI",{});var ea=l(ot);Va=a(ea,`UniSpeechSat model can be fine-tuned using connectionist temporal classification (CTC) so the model output has to be
decoded using `),po=r(ea,"A",{href:!0});var rl=l(po);Na=a(rl,"Wav2Vec2CTCTokenizer"),rl.forEach(o),Wa=a(ea,"."),ea.forEach(o),Ia=f(Se),Wo=r(Se,"LI",{});var il=l(Wo);Ha=a(il,"UniSpeechSat performs especially well on speaker verification, speaker identification, and speaker diarization tasks."),il.forEach(o),Se.forEach(o),Mn=f(t),B=r(t,"P",{});var Fo=l(B);Xa=a(Fo,"This model was contributed by "),nt=r(Fo,"A",{href:!0,rel:!0});var ll=l(nt);Ba=a(ll,"patrickvonplaten"),ll.forEach(o),Ra=a(Fo,`. The Authors\u2019 code can be
found `),at=r(Fo,"A",{href:!0,rel:!0});var cl=l(at);Za=a(cl,"here"),cl.forEach(o),Qa=a(Fo,"."),Fo.forEach(o),zn=f(t),ee=r(t,"H2",{class:!0});var ta=l(ee);Te=r(ta,"A",{id:!0,class:!0,href:!0});var dl=l(Te);Io=r(dl,"SPAN",{});var pl=l(Io);w(st.$$.fragment,pl),pl.forEach(o),dl.forEach(o),Ya=f(ta),Ho=r(ta,"SPAN",{});var hl=l(Ho);Ja=a(hl,"UniSpeechSatConfig"),hl.forEach(o),ta.forEach(o),On=f(t),O=r(t,"DIV",{class:!0});var Ze=l(O);w(rt.$$.fragment,Ze),Ga=f(Ze),te=r(Ze,"P",{});var xo=l(te);Ka=a(xo,"This is the configuration class to store the configuration of a "),ho=r(xo,"A",{href:!0});var ml=l(ho);es=a(ml,"UniSpeechSatModel"),ml.forEach(o),ts=a(xo,`. It is used to instantiate an
UniSpeechSat model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the UniSpeechSat
`),it=r(xo,"A",{href:!0,rel:!0});var fl=l(it);os=a(fl,"microsoft/unispeech-sat-base-100h-libri-ft"),fl.forEach(o),ns=a(xo,`
architecture.`),xo.forEach(o),as=f(Ze),oe=r(Ze,"P",{});var Co=l(oe);ss=a(Co,"Configuration objects inherit from "),mo=r(Co,"A",{href:!0});var ul=l(mo);rs=a(ul,"PretrainedConfig"),ul.forEach(o),is=a(Co,` and can be used to control the model outputs. Read the
documentation from `),fo=r(Co,"A",{href:!0});var gl=l(fo);ls=a(gl,"PretrainedConfig"),gl.forEach(o),cs=a(Co," for more information."),Co.forEach(o),ds=f(Ze),w(Ue.$$.fragment,Ze),Ze.forEach(o),Dn=f(t),ne=r(t,"H2",{class:!0});var oa=l(ne);Fe=r(oa,"A",{id:!0,class:!0,href:!0});var _l=l(Fe);Xo=r(_l,"SPAN",{});var vl=l(Xo);w(lt.$$.fragment,vl),vl.forEach(o),_l.forEach(o),ps=f(oa),Bo=r(oa,"SPAN",{});var Sl=l(Bo);hs=a(Sl,"UniSpeechSat specific outputs"),Sl.forEach(o),oa.forEach(o),Ln=f(t),ae=r(t,"DIV",{class:!0});var na=l(ae);w(ct.$$.fragment,na),ms=f(na),dt=r(na,"P",{});var aa=l(dt);fs=a(aa,"Output type of "),Ro=r(aa,"CODE",{});var bl=l(Ro);us=a(bl,"UniSpeechSatForPreTrainingOutput"),bl.forEach(o),gs=a(aa,", with potential hidden states and attentions."),aa.forEach(o),na.forEach(o),Vn=f(t),se=r(t,"H2",{class:!0});var sa=l(se);xe=r(sa,"A",{id:!0,class:!0,href:!0});var wl=l(xe);Zo=r(wl,"SPAN",{});var yl=l(Zo);w(pt.$$.fragment,yl),yl.forEach(o),wl.forEach(o),_s=f(sa),Qo=r(sa,"SPAN",{});var $l=l(Qo);vs=a($l,"UniSpeechSatModel"),$l.forEach(o),sa.forEach(o),Nn=f(t),q=r(t,"DIV",{class:!0});var R=l(q);w(ht.$$.fragment,R),Ss=f(R),mt=r(R,"P",{});var ra=l(mt);bs=a(ra,`The bare UniSpeechSat Model transformer outputting raw hidden-states without any specific head on top.
UniSpeechSat was proposed in `),ft=r(ra,"A",{href:!0,rel:!0});var kl=l(ft);ws=a(kl,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),kl.forEach(o),ys=a(ra,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),ra.forEach(o),$s=f(R),ut=r(R,"P",{});var ia=l(ut);ks=a(ia,"This model inherits from "),uo=r(ia,"A",{href:!0});var Tl=l(uo);Ts=a(Tl,"PreTrainedModel"),Tl.forEach(o),Us=a(ia,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ia.forEach(o),Fs=f(R),gt=r(R,"P",{});var la=l(gt);xs=a(la,"This model is a PyTorch "),_t=r(la,"A",{href:!0,rel:!0});var Ul=l(_t);Cs=a(Ul,"torch.nn.Module"),Ul.forEach(o),js=a(la,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),la.forEach(o),qs=f(R),D=r(R,"DIV",{class:!0});var Qe=l(D);w(vt.$$.fragment,Qe),Es=f(Qe),re=r(Qe,"P",{});var jo=l(re);Ps=a(jo,"The "),go=r(jo,"A",{href:!0});var Fl=l(go);As=a(Fl,"UniSpeechSatModel"),Fl.forEach(o),Ms=a(jo," forward method, overrides the "),Yo=r(jo,"CODE",{});var xl=l(Yo);zs=a(xl,"__call__"),xl.forEach(o),Os=a(jo," special method."),jo.forEach(o),Ds=f(Qe),w(Ce.$$.fragment,Qe),Ls=f(Qe),w(je.$$.fragment,Qe),Qe.forEach(o),R.forEach(o),Wn=f(t),ie=r(t,"H2",{class:!0});var ca=l(ie);qe=r(ca,"A",{id:!0,class:!0,href:!0});var Cl=l(qe);Jo=r(Cl,"SPAN",{});var jl=l(Jo);w(St.$$.fragment,jl),jl.forEach(o),Cl.forEach(o),Vs=f(ca),Go=r(ca,"SPAN",{});var ql=l(Go);Ns=a(ql,"UniSpeechSatForCTC"),ql.forEach(o),ca.forEach(o),In=f(t),E=r(t,"DIV",{class:!0});var Z=l(E);w(bt.$$.fragment,Z),Ws=f(Z),le=r(Z,"P",{});var qo=l(le);Is=a(qo,"UniSpeechSat Model with a "),Ko=r(qo,"CODE",{});var El=l(Ko);Hs=a(El,"language modeling"),El.forEach(o),Xs=a(qo,` head on top for Connectionist Temporal Classification (CTC).
UniSpeechSat was proposed in `),wt=r(qo,"A",{href:!0,rel:!0});var Pl=l(wt);Bs=a(Pl,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Pl.forEach(o),Rs=a(qo,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),qo.forEach(o),Zs=f(Z),yt=r(Z,"P",{});var da=l(yt);Qs=a(da,"This model inherits from "),_o=r(da,"A",{href:!0});var Al=l(_o);Ys=a(Al,"PreTrainedModel"),Al.forEach(o),Js=a(da,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),da.forEach(o),Gs=f(Z),$t=r(Z,"P",{});var pa=l($t);Ks=a(pa,"This model is a PyTorch "),kt=r(pa,"A",{href:!0,rel:!0});var Ml=l(kt);er=a(Ml,"torch.nn.Module"),Ml.forEach(o),tr=a(pa,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pa.forEach(o),or=f(Z),A=r(Z,"DIV",{class:!0});var Q=l(A);w(Tt.$$.fragment,Q),nr=f(Q),ce=r(Q,"P",{});var Eo=l(ce);ar=a(Eo,"The "),vo=r(Eo,"A",{href:!0});var zl=l(vo);sr=a(zl,"UniSpeechSatForCTC"),zl.forEach(o),rr=a(Eo," forward method, overrides the "),en=r(Eo,"CODE",{});var Ol=l(en);ir=a(Ol,"__call__"),Ol.forEach(o),lr=a(Eo," special method."),Eo.forEach(o),cr=f(Q),w(Ee.$$.fragment,Q),dr=f(Q),w(Pe.$$.fragment,Q),pr=f(Q),w(Ae.$$.fragment,Q),Q.forEach(o),Z.forEach(o),Hn=f(t),de=r(t,"H2",{class:!0});var ha=l(de);Me=r(ha,"A",{id:!0,class:!0,href:!0});var Dl=l(Me);tn=r(Dl,"SPAN",{});var Ll=l(tn);w(Ut.$$.fragment,Ll),Ll.forEach(o),Dl.forEach(o),hr=f(ha),on=r(ha,"SPAN",{});var Vl=l(on);mr=a(Vl,"UniSpeechSatForSequenceClassification"),Vl.forEach(o),ha.forEach(o),Xn=f(t),x=r(t,"DIV",{class:!0});var W=l(x);w(Ft.$$.fragment,W),fr=f(W),nn=r(W,"P",{});var Nl=l(nn);ur=a(Nl,`UniSpeechSat Model with a sequence classification head on top (a linear layer over the pooled output) for tasks
like SUPERB Keyword Spotting.`),Nl.forEach(o),gr=f(W),xt=r(W,"P",{});var ma=l(xt);_r=a(ma,"UniSpeechSat was proposed in "),Ct=r(ma,"A",{href:!0,rel:!0});var Wl=l(Ct);vr=a(Wl,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Wl.forEach(o),Sr=a(ma,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),ma.forEach(o),br=f(W),jt=r(W,"P",{});var fa=l(jt);wr=a(fa,"This model inherits from "),So=r(fa,"A",{href:!0});var Il=l(So);yr=a(Il,"PreTrainedModel"),Il.forEach(o),$r=a(fa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),fa.forEach(o),kr=f(W),qt=r(W,"P",{});var ua=l(qt);Tr=a(ua,"This model is a PyTorch "),Et=r(ua,"A",{href:!0,rel:!0});var Hl=l(Et);Ur=a(Hl,"torch.nn.Module"),Hl.forEach(o),Fr=a(ua,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ua.forEach(o),xr=f(W),M=r(W,"DIV",{class:!0});var Y=l(M);w(Pt.$$.fragment,Y),Cr=f(Y),pe=r(Y,"P",{});var Po=l(pe);jr=a(Po,"The "),bo=r(Po,"A",{href:!0});var Xl=l(bo);qr=a(Xl,"UniSpeechSatForSequenceClassification"),Xl.forEach(o),Er=a(Po," forward method, overrides the "),an=r(Po,"CODE",{});var Bl=l(an);Pr=a(Bl,"__call__"),Bl.forEach(o),Ar=a(Po," special method."),Po.forEach(o),Mr=f(Y),w(ze.$$.fragment,Y),zr=f(Y),w(Oe.$$.fragment,Y),Or=f(Y),w(De.$$.fragment,Y),Y.forEach(o),W.forEach(o),Bn=f(t),he=r(t,"H2",{class:!0});var ga=l(he);Le=r(ga,"A",{id:!0,class:!0,href:!0});var Rl=l(Le);sn=r(Rl,"SPAN",{});var Zl=l(sn);w(At.$$.fragment,Zl),Zl.forEach(o),Rl.forEach(o),Dr=f(ga),rn=r(ga,"SPAN",{});var Ql=l(rn);Lr=a(Ql,"UniSpeechSatForAudioFrameClassification"),Ql.forEach(o),ga.forEach(o),Rn=f(t),C=r(t,"DIV",{class:!0});var I=l(C);w(Mt.$$.fragment,I),Vr=f(I),ln=r(I,"P",{});var Yl=l(ln);Nr=a(Yl,"UniSpeech-SAT Model with a frame classification head on top for tasks like Speaker Diarization."),Yl.forEach(o),Wr=f(I),zt=r(I,"P",{});var _a=l(zt);Ir=a(_a,"UniSpeechSat was proposed in "),Ot=r(_a,"A",{href:!0,rel:!0});var Jl=l(Ot);Hr=a(Jl,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Jl.forEach(o),Xr=a(_a,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),_a.forEach(o),Br=f(I),Dt=r(I,"P",{});var va=l(Dt);Rr=a(va,"This model inherits from "),wo=r(va,"A",{href:!0});var Gl=l(wo);Zr=a(Gl,"PreTrainedModel"),Gl.forEach(o),Qr=a(va,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),va.forEach(o),Yr=f(I),Lt=r(I,"P",{});var Sa=l(Lt);Jr=a(Sa,"This model is a PyTorch "),Vt=r(Sa,"A",{href:!0,rel:!0});var Kl=l(Vt);Gr=a(Kl,"torch.nn.Module"),Kl.forEach(o),Kr=a(Sa,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Sa.forEach(o),ei=f(I),L=r(I,"DIV",{class:!0});var Ye=l(L);w(Nt.$$.fragment,Ye),ti=f(Ye),me=r(Ye,"P",{});var Ao=l(me);oi=a(Ao,"The "),yo=r(Ao,"A",{href:!0});var ec=l(yo);ni=a(ec,"UniSpeechSatForAudioFrameClassification"),ec.forEach(o),ai=a(Ao," forward method, overrides the "),cn=r(Ao,"CODE",{});var tc=l(cn);si=a(tc,"__call__"),tc.forEach(o),ri=a(Ao," special method."),Ao.forEach(o),ii=f(Ye),w(Ve.$$.fragment,Ye),li=f(Ye),w(Ne.$$.fragment,Ye),Ye.forEach(o),I.forEach(o),Zn=f(t),fe=r(t,"H2",{class:!0});var ba=l(fe);We=r(ba,"A",{id:!0,class:!0,href:!0});var oc=l(We);dn=r(oc,"SPAN",{});var nc=l(dn);w(Wt.$$.fragment,nc),nc.forEach(o),oc.forEach(o),ci=f(ba),pn=r(ba,"SPAN",{});var ac=l(pn);di=a(ac,"UniSpeechSatForXVector"),ac.forEach(o),ba.forEach(o),Qn=f(t),j=r(t,"DIV",{class:!0});var H=l(j);w(It.$$.fragment,H),pi=f(H),hn=r(H,"P",{});var sc=l(hn);hi=a(sc,"UniSpeech-SAT Model with an XVector feature extraction head on top for tasks like Speaker Verification."),sc.forEach(o),mi=f(H),Ht=r(H,"P",{});var wa=l(Ht);fi=a(wa,"UniSpeechSat was proposed in "),Xt=r(wa,"A",{href:!0,rel:!0});var rc=l(Xt);ui=a(rc,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),rc.forEach(o),gi=a(wa,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),wa.forEach(o),_i=f(H),Bt=r(H,"P",{});var ya=l(Bt);vi=a(ya,"This model inherits from "),$o=r(ya,"A",{href:!0});var ic=l($o);Si=a(ic,"PreTrainedModel"),ic.forEach(o),bi=a(ya,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ya.forEach(o),wi=f(H),Rt=r(H,"P",{});var $a=l(Rt);yi=a($a,"This model is a PyTorch "),Zt=r($a,"A",{href:!0,rel:!0});var lc=l(Zt);$i=a(lc,"torch.nn.Module"),lc.forEach(o),ki=a($a,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$a.forEach(o),Ti=f(H),V=r(H,"DIV",{class:!0});var Je=l(V);w(Qt.$$.fragment,Je),Ui=f(Je),ue=r(Je,"P",{});var Mo=l(ue);Fi=a(Mo,"The "),ko=r(Mo,"A",{href:!0});var cc=l(ko);xi=a(cc,"UniSpeechSatForXVector"),cc.forEach(o),Ci=a(Mo," forward method, overrides the "),mn=r(Mo,"CODE",{});var dc=l(mn);ji=a(dc,"__call__"),dc.forEach(o),qi=a(Mo," special method."),Mo.forEach(o),Ei=f(Je),w(Ie.$$.fragment,Je),Pi=f(Je),w(He.$$.fragment,Je),Je.forEach(o),H.forEach(o),Yn=f(t),ge=r(t,"H2",{class:!0});var ka=l(ge);Xe=r(ka,"A",{id:!0,class:!0,href:!0});var pc=l(Xe);fn=r(pc,"SPAN",{});var hc=l(fn);w(Yt.$$.fragment,hc),hc.forEach(o),pc.forEach(o),Ai=f(ka),un=r(ka,"SPAN",{});var mc=l(un);Mi=a(mc,"UniSpeechSatForPreTraining"),mc.forEach(o),ka.forEach(o),Jn=f(t),P=r(t,"DIV",{class:!0});var J=l(P);w(Jt.$$.fragment,J),zi=f(J),_e=r(J,"P",{});var zo=l(_e);Oi=a(zo,"UniSpeechSat Model with a quantizer and "),gn=r(zo,"CODE",{});var fc=l(gn);Di=a(fc,"VQ"),fc.forEach(o),Li=a(zo,` head on top.
UniSpeechSat was proposed in `),Gt=r(zo,"A",{href:!0,rel:!0});var uc=l(Gt);Vi=a(uc,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),uc.forEach(o),Ni=a(zo,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),zo.forEach(o),Wi=f(J),Kt=r(J,"P",{});var Ta=l(Kt);Ii=a(Ta,"This model inherits from "),To=r(Ta,"A",{href:!0});var gc=l(To);Hi=a(gc,"PreTrainedModel"),gc.forEach(o),Xi=a(Ta,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ta.forEach(o),Bi=f(J),eo=r(J,"P",{});var Ua=l(eo);Ri=a(Ua,"This model is a PyTorch "),to=r(Ua,"A",{href:!0,rel:!0});var _c=l(to);Zi=a(_c,"torch.nn.Module"),_c.forEach(o),Qi=a(Ua,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ua.forEach(o),Yi=f(J),N=r(J,"DIV",{class:!0});var Ge=l(N);w(oo.$$.fragment,Ge),Ji=f(Ge),ve=r(Ge,"P",{});var Oo=l(ve);Gi=a(Oo,"The "),Uo=r(Oo,"A",{href:!0});var vc=l(Uo);Ki=a(vc,"UniSpeechSatForPreTraining"),vc.forEach(o),el=a(Oo," forward method, overrides the "),_n=r(Oo,"CODE",{});var Sc=l(_n);tl=a(Sc,"__call__"),Sc.forEach(o),ol=a(Oo," special method."),Oo.forEach(o),nl=f(Ge),w(Be.$$.fragment,Ge),al=f(Ge),w(Re.$$.fragment,Ge),Ge.forEach(o),J.forEach(o),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(Nc)),d(u,"id","unispeechsat"),d(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(u,"href","#unispeechsat"),d(p,"class","relative group"),d($e,"id","overview"),d($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d($e,"href","#overview"),d(K,"class","relative group"),d(et,"href","https://arxiv.org/abs/2110.05752"),d(et,"rel","nofollow"),d(co,"href","/docs/transformers/v4.21.2/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor"),d(po,"href","/docs/transformers/v4.21.2/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),d(nt,"href","https://huggingface.co/patrickvonplaten"),d(nt,"rel","nofollow"),d(at,"href","https://github.com/microsoft/UniSpeech/tree/main/UniSpeech-SAT"),d(at,"rel","nofollow"),d(Te,"id","transformers.UniSpeechSatConfig"),d(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Te,"href","#transformers.UniSpeechSatConfig"),d(ee,"class","relative group"),d(ho,"href","/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatModel"),d(it,"href","https://huggingface.co/microsoft/unispeech-sat-base-100h-libri-ft"),d(it,"rel","nofollow"),d(mo,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),d(fo,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),d(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Fe,"id","transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput"),d(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Fe,"href","#transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput"),d(ne,"class","relative group"),d(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(xe,"id","transformers.UniSpeechSatModel"),d(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(xe,"href","#transformers.UniSpeechSatModel"),d(se,"class","relative group"),d(ft,"href","https://arxiv.org/abs/2006.11477"),d(ft,"rel","nofollow"),d(uo,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),d(_t,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(_t,"rel","nofollow"),d(go,"href","/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatModel"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(qe,"id","transformers.UniSpeechSatForCTC"),d(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(qe,"href","#transformers.UniSpeechSatForCTC"),d(ie,"class","relative group"),d(wt,"href","https://arxiv.org/abs/2006.11477"),d(wt,"rel","nofollow"),d(_o,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),d(kt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(kt,"rel","nofollow"),d(vo,"href","/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatForCTC"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Me,"id","transformers.UniSpeechSatForSequenceClassification"),d(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Me,"href","#transformers.UniSpeechSatForSequenceClassification"),d(de,"class","relative group"),d(Ct,"href","https://arxiv.org/abs/2006.11477"),d(Ct,"rel","nofollow"),d(So,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),d(Et,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Et,"rel","nofollow"),d(bo,"href","/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatForSequenceClassification"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Le,"id","transformers.UniSpeechSatForAudioFrameClassification"),d(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Le,"href","#transformers.UniSpeechSatForAudioFrameClassification"),d(he,"class","relative group"),d(Ot,"href","https://arxiv.org/abs/2006.11477"),d(Ot,"rel","nofollow"),d(wo,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),d(Vt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Vt,"rel","nofollow"),d(yo,"href","/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatForAudioFrameClassification"),d(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(We,"id","transformers.UniSpeechSatForXVector"),d(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(We,"href","#transformers.UniSpeechSatForXVector"),d(fe,"class","relative group"),d(Xt,"href","https://arxiv.org/abs/2006.11477"),d(Xt,"rel","nofollow"),d($o,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),d(Zt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Zt,"rel","nofollow"),d(ko,"href","/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatForXVector"),d(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Xe,"id","transformers.UniSpeechSatForPreTraining"),d(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Xe,"href","#transformers.UniSpeechSatForPreTraining"),d(ge,"class","relative group"),d(Gt,"href","https://arxiv.org/abs/2006.11477"),d(Gt,"rel","nofollow"),d(To,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),d(to,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(to,"rel","nofollow"),d(Uo,"href","/docs/transformers/v4.21.2/en/model_doc/unispeech-sat#transformers.UniSpeechSatForPreTraining"),d(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,c),_(t,v,g),_(t,p,g),e(p,u),e(u,S),y(i,S,null),e(p,h),e(p,F),e(F,Fa),_(t,Cn,g),_(t,K,g),e(K,$e),e($e,Lo),y(Ke,Lo,null),e(K,xa),e(K,Vo),e(Vo,Ca),_(t,jn,g),_(t,ke,g),e(ke,ja),e(ke,et),e(et,qa),e(ke,Ea),_(t,qn,g),_(t,ro,g),e(ro,Pa),_(t,En,g),_(t,io,g),e(io,No),e(No,Aa),_(t,Pn,g),_(t,lo,g),e(lo,Ma),_(t,An,g),_(t,X,g),e(X,tt),e(tt,za),e(tt,co),e(co,Oa),e(tt,Da),e(X,La),e(X,ot),e(ot,Va),e(ot,po),e(po,Na),e(ot,Wa),e(X,Ia),e(X,Wo),e(Wo,Ha),_(t,Mn,g),_(t,B,g),e(B,Xa),e(B,nt),e(nt,Ba),e(B,Ra),e(B,at),e(at,Za),e(B,Qa),_(t,zn,g),_(t,ee,g),e(ee,Te),e(Te,Io),y(st,Io,null),e(ee,Ya),e(ee,Ho),e(Ho,Ja),_(t,On,g),_(t,O,g),y(rt,O,null),e(O,Ga),e(O,te),e(te,Ka),e(te,ho),e(ho,es),e(te,ts),e(te,it),e(it,os),e(te,ns),e(O,as),e(O,oe),e(oe,ss),e(oe,mo),e(mo,rs),e(oe,is),e(oe,fo),e(fo,ls),e(oe,cs),e(O,ds),y(Ue,O,null),_(t,Dn,g),_(t,ne,g),e(ne,Fe),e(Fe,Xo),y(lt,Xo,null),e(ne,ps),e(ne,Bo),e(Bo,hs),_(t,Ln,g),_(t,ae,g),y(ct,ae,null),e(ae,ms),e(ae,dt),e(dt,fs),e(dt,Ro),e(Ro,us),e(dt,gs),_(t,Vn,g),_(t,se,g),e(se,xe),e(xe,Zo),y(pt,Zo,null),e(se,_s),e(se,Qo),e(Qo,vs),_(t,Nn,g),_(t,q,g),y(ht,q,null),e(q,Ss),e(q,mt),e(mt,bs),e(mt,ft),e(ft,ws),e(mt,ys),e(q,$s),e(q,ut),e(ut,ks),e(ut,uo),e(uo,Ts),e(ut,Us),e(q,Fs),e(q,gt),e(gt,xs),e(gt,_t),e(_t,Cs),e(gt,js),e(q,qs),e(q,D),y(vt,D,null),e(D,Es),e(D,re),e(re,Ps),e(re,go),e(go,As),e(re,Ms),e(re,Yo),e(Yo,zs),e(re,Os),e(D,Ds),y(Ce,D,null),e(D,Ls),y(je,D,null),_(t,Wn,g),_(t,ie,g),e(ie,qe),e(qe,Jo),y(St,Jo,null),e(ie,Vs),e(ie,Go),e(Go,Ns),_(t,In,g),_(t,E,g),y(bt,E,null),e(E,Ws),e(E,le),e(le,Is),e(le,Ko),e(Ko,Hs),e(le,Xs),e(le,wt),e(wt,Bs),e(le,Rs),e(E,Zs),e(E,yt),e(yt,Qs),e(yt,_o),e(_o,Ys),e(yt,Js),e(E,Gs),e(E,$t),e($t,Ks),e($t,kt),e(kt,er),e($t,tr),e(E,or),e(E,A),y(Tt,A,null),e(A,nr),e(A,ce),e(ce,ar),e(ce,vo),e(vo,sr),e(ce,rr),e(ce,en),e(en,ir),e(ce,lr),e(A,cr),y(Ee,A,null),e(A,dr),y(Pe,A,null),e(A,pr),y(Ae,A,null),_(t,Hn,g),_(t,de,g),e(de,Me),e(Me,tn),y(Ut,tn,null),e(de,hr),e(de,on),e(on,mr),_(t,Xn,g),_(t,x,g),y(Ft,x,null),e(x,fr),e(x,nn),e(nn,ur),e(x,gr),e(x,xt),e(xt,_r),e(xt,Ct),e(Ct,vr),e(xt,Sr),e(x,br),e(x,jt),e(jt,wr),e(jt,So),e(So,yr),e(jt,$r),e(x,kr),e(x,qt),e(qt,Tr),e(qt,Et),e(Et,Ur),e(qt,Fr),e(x,xr),e(x,M),y(Pt,M,null),e(M,Cr),e(M,pe),e(pe,jr),e(pe,bo),e(bo,qr),e(pe,Er),e(pe,an),e(an,Pr),e(pe,Ar),e(M,Mr),y(ze,M,null),e(M,zr),y(Oe,M,null),e(M,Or),y(De,M,null),_(t,Bn,g),_(t,he,g),e(he,Le),e(Le,sn),y(At,sn,null),e(he,Dr),e(he,rn),e(rn,Lr),_(t,Rn,g),_(t,C,g),y(Mt,C,null),e(C,Vr),e(C,ln),e(ln,Nr),e(C,Wr),e(C,zt),e(zt,Ir),e(zt,Ot),e(Ot,Hr),e(zt,Xr),e(C,Br),e(C,Dt),e(Dt,Rr),e(Dt,wo),e(wo,Zr),e(Dt,Qr),e(C,Yr),e(C,Lt),e(Lt,Jr),e(Lt,Vt),e(Vt,Gr),e(Lt,Kr),e(C,ei),e(C,L),y(Nt,L,null),e(L,ti),e(L,me),e(me,oi),e(me,yo),e(yo,ni),e(me,ai),e(me,cn),e(cn,si),e(me,ri),e(L,ii),y(Ve,L,null),e(L,li),y(Ne,L,null),_(t,Zn,g),_(t,fe,g),e(fe,We),e(We,dn),y(Wt,dn,null),e(fe,ci),e(fe,pn),e(pn,di),_(t,Qn,g),_(t,j,g),y(It,j,null),e(j,pi),e(j,hn),e(hn,hi),e(j,mi),e(j,Ht),e(Ht,fi),e(Ht,Xt),e(Xt,ui),e(Ht,gi),e(j,_i),e(j,Bt),e(Bt,vi),e(Bt,$o),e($o,Si),e(Bt,bi),e(j,wi),e(j,Rt),e(Rt,yi),e(Rt,Zt),e(Zt,$i),e(Rt,ki),e(j,Ti),e(j,V),y(Qt,V,null),e(V,Ui),e(V,ue),e(ue,Fi),e(ue,ko),e(ko,xi),e(ue,Ci),e(ue,mn),e(mn,ji),e(ue,qi),e(V,Ei),y(Ie,V,null),e(V,Pi),y(He,V,null),_(t,Yn,g),_(t,ge,g),e(ge,Xe),e(Xe,fn),y(Yt,fn,null),e(ge,Ai),e(ge,un),e(un,Mi),_(t,Jn,g),_(t,P,g),y(Jt,P,null),e(P,zi),e(P,_e),e(_e,Oi),e(_e,gn),e(gn,Di),e(_e,Li),e(_e,Gt),e(Gt,Vi),e(_e,Ni),e(P,Wi),e(P,Kt),e(Kt,Ii),e(Kt,To),e(To,Hi),e(Kt,Xi),e(P,Bi),e(P,eo),e(eo,Ri),e(eo,to),e(to,Zi),e(eo,Qi),e(P,Yi),e(P,N),y(oo,N,null),e(N,Ji),e(N,ve),e(ve,Gi),e(ve,Uo),e(Uo,Ki),e(ve,el),e(ve,_n),e(_n,tl),e(ve,ol),e(N,nl),y(Be,N,null),e(N,al),y(Re,N,null),Gn=!0},p(t,[g]){const no={};g&2&&(no.$$scope={dirty:g,ctx:t}),Ue.$set(no);const vn={};g&2&&(vn.$$scope={dirty:g,ctx:t}),Ce.$set(vn);const Sn={};g&2&&(Sn.$$scope={dirty:g,ctx:t}),je.$set(Sn);const bn={};g&2&&(bn.$$scope={dirty:g,ctx:t}),Ee.$set(bn);const ao={};g&2&&(ao.$$scope={dirty:g,ctx:t}),Pe.$set(ao);const wn={};g&2&&(wn.$$scope={dirty:g,ctx:t}),Ae.$set(wn);const yn={};g&2&&(yn.$$scope={dirty:g,ctx:t}),ze.$set(yn);const $n={};g&2&&($n.$$scope={dirty:g,ctx:t}),Oe.$set($n);const so={};g&2&&(so.$$scope={dirty:g,ctx:t}),De.$set(so);const kn={};g&2&&(kn.$$scope={dirty:g,ctx:t}),Ve.$set(kn);const Tn={};g&2&&(Tn.$$scope={dirty:g,ctx:t}),Ne.$set(Tn);const Un={};g&2&&(Un.$$scope={dirty:g,ctx:t}),Ie.$set(Un);const Fn={};g&2&&(Fn.$$scope={dirty:g,ctx:t}),He.$set(Fn);const xn={};g&2&&(xn.$$scope={dirty:g,ctx:t}),Be.$set(xn);const Se={};g&2&&(Se.$$scope={dirty:g,ctx:t}),Re.$set(Se)},i(t){Gn||($(i.$$.fragment,t),$(Ke.$$.fragment,t),$(st.$$.fragment,t),$(rt.$$.fragment,t),$(Ue.$$.fragment,t),$(lt.$$.fragment,t),$(ct.$$.fragment,t),$(pt.$$.fragment,t),$(ht.$$.fragment,t),$(vt.$$.fragment,t),$(Ce.$$.fragment,t),$(je.$$.fragment,t),$(St.$$.fragment,t),$(bt.$$.fragment,t),$(Tt.$$.fragment,t),$(Ee.$$.fragment,t),$(Pe.$$.fragment,t),$(Ae.$$.fragment,t),$(Ut.$$.fragment,t),$(Ft.$$.fragment,t),$(Pt.$$.fragment,t),$(ze.$$.fragment,t),$(Oe.$$.fragment,t),$(De.$$.fragment,t),$(At.$$.fragment,t),$(Mt.$$.fragment,t),$(Nt.$$.fragment,t),$(Ve.$$.fragment,t),$(Ne.$$.fragment,t),$(Wt.$$.fragment,t),$(It.$$.fragment,t),$(Qt.$$.fragment,t),$(Ie.$$.fragment,t),$(He.$$.fragment,t),$(Yt.$$.fragment,t),$(Jt.$$.fragment,t),$(oo.$$.fragment,t),$(Be.$$.fragment,t),$(Re.$$.fragment,t),Gn=!0)},o(t){k(i.$$.fragment,t),k(Ke.$$.fragment,t),k(st.$$.fragment,t),k(rt.$$.fragment,t),k(Ue.$$.fragment,t),k(lt.$$.fragment,t),k(ct.$$.fragment,t),k(pt.$$.fragment,t),k(ht.$$.fragment,t),k(vt.$$.fragment,t),k(Ce.$$.fragment,t),k(je.$$.fragment,t),k(St.$$.fragment,t),k(bt.$$.fragment,t),k(Tt.$$.fragment,t),k(Ee.$$.fragment,t),k(Pe.$$.fragment,t),k(Ae.$$.fragment,t),k(Ut.$$.fragment,t),k(Ft.$$.fragment,t),k(Pt.$$.fragment,t),k(ze.$$.fragment,t),k(Oe.$$.fragment,t),k(De.$$.fragment,t),k(At.$$.fragment,t),k(Mt.$$.fragment,t),k(Nt.$$.fragment,t),k(Ve.$$.fragment,t),k(Ne.$$.fragment,t),k(Wt.$$.fragment,t),k(It.$$.fragment,t),k(Qt.$$.fragment,t),k(Ie.$$.fragment,t),k(He.$$.fragment,t),k(Yt.$$.fragment,t),k(Jt.$$.fragment,t),k(oo.$$.fragment,t),k(Be.$$.fragment,t),k(Re.$$.fragment,t),Gn=!1},d(t){o(c),t&&o(v),t&&o(p),T(i),t&&o(Cn),t&&o(K),T(Ke),t&&o(jn),t&&o(ke),t&&o(qn),t&&o(ro),t&&o(En),t&&o(io),t&&o(Pn),t&&o(lo),t&&o(An),t&&o(X),t&&o(Mn),t&&o(B),t&&o(zn),t&&o(ee),T(st),t&&o(On),t&&o(O),T(rt),T(Ue),t&&o(Dn),t&&o(ne),T(lt),t&&o(Ln),t&&o(ae),T(ct),t&&o(Vn),t&&o(se),T(pt),t&&o(Nn),t&&o(q),T(ht),T(vt),T(Ce),T(je),t&&o(Wn),t&&o(ie),T(St),t&&o(In),t&&o(E),T(bt),T(Tt),T(Ee),T(Pe),T(Ae),t&&o(Hn),t&&o(de),T(Ut),t&&o(Xn),t&&o(x),T(Ft),T(Pt),T(ze),T(Oe),T(De),t&&o(Bn),t&&o(he),T(At),t&&o(Rn),t&&o(C),T(Mt),T(Nt),T(Ve),T(Ne),t&&o(Zn),t&&o(fe),T(Wt),t&&o(Qn),t&&o(j),T(It),T(Qt),T(Ie),T(He),t&&o(Yn),t&&o(ge),T(Yt),t&&o(Jn),t&&o(P),T(Jt),T(oo),T(Be),T(Re)}}}const Nc={local:"unispeechsat",sections:[{local:"overview",title:"Overview"},{local:"transformers.UniSpeechSatConfig",title:"UniSpeechSatConfig"},{local:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput",title:"UniSpeechSat specific outputs"},{local:"transformers.UniSpeechSatModel",title:"UniSpeechSatModel"},{local:"transformers.UniSpeechSatForCTC",title:"UniSpeechSatForCTC"},{local:"transformers.UniSpeechSatForSequenceClassification",title:"UniSpeechSatForSequenceClassification"},{local:"transformers.UniSpeechSatForAudioFrameClassification",title:"UniSpeechSatForAudioFrameClassification"},{local:"transformers.UniSpeechSatForXVector",title:"UniSpeechSatForXVector"},{local:"transformers.UniSpeechSatForPreTraining",title:"UniSpeechSatForPreTraining"}],title:"UniSpeech-SAT"};function Wc(U){return kc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Qc extends bc{constructor(c){super();wc(this,c,Wc,Vc,yc,{})}}export{Qc as default,Nc as metadata};
