import{S as Ec,i as Pc,s as Ac,e as s,k as h,w as b,t as n,M as Mc,c as r,d as o,m,a as i,x as w,h as a,b as d,F as e,g as _,y,q as $,o as k,B as T,v as zc,L as ye}from"../../chunks/vendor-6b77c823.js";import{T as No}from"../../chunks/Tip-39098574.js";import{D as A}from"../../chunks/Docstring-1088f2fb.js";import{C as $e}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as G}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as we}from"../../chunks/ExampleCodeBlock-5212b321.js";function Oc(U){let c,v,p,f,S;return f=new $e({props:{code:`from transformers import UniSpeechSatModel, UniSpeechSatConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=s("p"),v=n("Example:"),p=h(),b(f.$$.fragment)},l(l){c=r(l,"P",{});var u=i(c);v=a(u,"Example:"),u.forEach(o),p=m(l),w(f.$$.fragment,l)},m(l,u){_(l,c,u),e(c,v),_(l,p,u),y(f,l,u),S=!0},p:ye,i(l){S||($(f.$$.fragment,l),S=!0)},o(l){k(f.$$.fragment,l),S=!1},d(l){l&&o(c),l&&o(p),T(f,l)}}}function Dc(U){let c,v,p,f,S;return{c(){c=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),f=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var u=i(c);v=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(u,"CODE",{});var F=i(p);f=a(F,"Module"),F.forEach(o),S=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){_(l,c,u),e(c,v),e(c,p),e(p,f),e(c,S)},d(l){l&&o(c)}}}function Lc(U){let c,v,p,f,S;return f=new $e({props:{code:`from transformers import Wav2Vec2Processor, UniSpeechSatModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">768</span>]`}}),{c(){c=s("p"),v=n("Example:"),p=h(),b(f.$$.fragment)},l(l){c=r(l,"P",{});var u=i(c);v=a(u,"Example:"),u.forEach(o),p=m(l),w(f.$$.fragment,l)},m(l,u){_(l,c,u),e(c,v),_(l,p,u),y(f,l,u),S=!0},p:ye,i(l){S||($(f.$$.fragment,l),S=!0)},o(l){k(f.$$.fragment,l),S=!1},d(l){l&&o(c),l&&o(p),T(f,l)}}}function Vc(U){let c,v,p,f,S;return{c(){c=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),f=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var u=i(c);v=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(u,"CODE",{});var F=i(p);f=a(F,"Module"),F.forEach(o),S=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){_(l,c,u),e(c,v),e(c,p),e(p,f),e(c,S)},d(l){l&&o(c)}}}function Nc(U){let c,v,p,f,S;return f=new $e({props:{code:`from transformers import Wav2Vec2Processor, UniSpeechSatForCTC
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
<span class="hljs-string">&#x27;MISTER QUILDER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>`}}),{c(){c=s("p"),v=n("Example:"),p=h(),b(f.$$.fragment)},l(l){c=r(l,"P",{});var u=i(c);v=a(u,"Example:"),u.forEach(o),p=m(l),w(f.$$.fragment,l)},m(l,u){_(l,c,u),e(c,v),_(l,p,u),y(f,l,u),S=!0},p:ye,i(l){S||($(f.$$.fragment,l),S=!0)},o(l){k(f.$$.fragment,l),S=!1},d(l){l&&o(c),l&&o(p),T(f,l)}}}function Wc(U){let c,v;return c=new $e({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">39.88</span>`}}),{c(){b(c.$$.fragment)},l(p){w(c.$$.fragment,p)},m(p,f){y(c,p,f),v=!0},p:ye,i(p){v||($(c.$$.fragment,p),v=!0)},o(p){k(c.$$.fragment,p),v=!1},d(p){T(c,p)}}}function Ic(U){let c,v,p,f,S;return{c(){c=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),f=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var u=i(c);v=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(u,"CODE",{});var F=i(p);f=a(F,"Module"),F.forEach(o),S=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){_(l,c,u),e(c,v),e(c,p),e(p,f),e(c,S)},d(l){l&&o(c)}}}function Bc(U){let c,v,p,f,S;return f=new $e({props:{code:`from transformers import Wav2Vec2FeatureExtractor, UniSpeechSatForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){c=s("p"),v=n("Example:"),p=h(),b(f.$$.fragment)},l(l){c=r(l,"P",{});var u=i(c);v=a(u,"Example:"),u.forEach(o),p=m(l),w(f.$$.fragment,l)},m(l,u){_(l,c,u),e(c,v),_(l,p,u),y(f,l,u),S=!0},p:ye,i(l){S||($(f.$$.fragment,l),S=!0)},o(l){k(f.$$.fragment,l),S=!1},d(l){l&&o(c),l&&o(p),T(f,l)}}}function Hc(U){let c,v;return c=new $e({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.71</span>`}}),{c(){b(c.$$.fragment)},l(p){w(c.$$.fragment,p)},m(p,f){y(c,p,f),v=!0},p:ye,i(p){v||($(c.$$.fragment,p),v=!0)},o(p){k(c.$$.fragment,p),v=!1},d(p){T(c,p)}}}function Xc(U){let c,v,p,f,S;return{c(){c=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),f=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var u=i(c);v=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(u,"CODE",{});var F=i(p);f=a(F,"Module"),F.forEach(o),S=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){_(l,c,u),e(c,v),e(c,p),e(p,f),e(c,S)},d(l){l&&o(c)}}}function Rc(U){let c,v,p,f,S;return f=new $e({props:{code:`from transformers import Wav2Vec2FeatureExtractor, UniSpeechSatForAudioFrameClassification
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
[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>]`}}),{c(){c=s("p"),v=n("Example:"),p=h(),b(f.$$.fragment)},l(l){c=r(l,"P",{});var u=i(c);v=a(u,"Example:"),u.forEach(o),p=m(l),w(f.$$.fragment,l)},m(l,u){_(l,c,u),e(c,v),_(l,p,u),y(f,l,u),S=!0},p:ye,i(l){S||($(f.$$.fragment,l),S=!0)},o(l){k(f.$$.fragment,l),S=!1},d(l){l&&o(c),l&&o(p),T(f,l)}}}function Zc(U){let c,v,p,f,S;return{c(){c=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),f=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var u=i(c);v=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(u,"CODE",{});var F=i(p);f=a(F,"Module"),F.forEach(o),S=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){_(l,c,u),e(c,v),e(c,p),e(p,f),e(c,S)},d(l){l&&o(c)}}}function Qc(U){let c,v,p,f,S;return f=new $e({props:{code:`from transformers import Wav2Vec2FeatureExtractor, UniSpeechSatForXVector
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
<span class="hljs-number">0.97</span>`}}),{c(){c=s("p"),v=n("Example:"),p=h(),b(f.$$.fragment)},l(l){c=r(l,"P",{});var u=i(c);v=a(u,"Example:"),u.forEach(o),p=m(l),w(f.$$.fragment,l)},m(l,u){_(l,c,u),e(c,v),_(l,p,u),y(f,l,u),S=!0},p:ye,i(l){S||($(f.$$.fragment,l),S=!0)},o(l){k(f.$$.fragment,l),S=!1},d(l){l&&o(c),l&&o(p),T(f,l)}}}function Yc(U){let c,v,p,f,S;return{c(){c=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),f=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var u=i(c);v=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r(u,"CODE",{});var F=i(p);f=a(F,"Module"),F.forEach(o),S=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){_(l,c,u),e(c,v),e(c,p),e(p,f),e(c,S)},d(l){l&&o(c)}}}function Jc(U){let c,v,p,f,S;return f=new $e({props:{code:`import torch
from transformers import Wav2Vec2FeatureExtractor, UniSpeechSatForPreTraining
from transformers.models.unispeech_sat.modeling_unispeech_sat import _compute_mask_indices

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("microsoft/unispeech-sat-base")
model = UniSpeechSatForPreTraining.from_pretrained("microsoft/unispeech-sat-base")
# TODO: Add full pretraining example`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, UniSpeechSatForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.models.unispeech_sat.modeling_unispeech_sat <span class="hljs-keyword">import</span> _compute_mask_indices

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechSatForPreTraining.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-sat-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># <span class="hljs-doctag">TODO:</span> Add full pretraining example</span>`}}),{c(){c=s("p"),v=n("Example:"),p=h(),b(f.$$.fragment)},l(l){c=r(l,"P",{});var u=i(c);v=a(u,"Example:"),u.forEach(o),p=m(l),w(f.$$.fragment,l)},m(l,u){_(l,c,u),e(c,v),_(l,p,u),y(f,l,u),S=!0},p:ye,i(l){S||($(f.$$.fragment,l),S=!0)},o(l){k(f.$$.fragment,l),S=!1},d(l){l&&o(c),l&&o(p),T(f,l)}}}function Gc(U){let c,v,p,f,S,l,u,F,Aa,Pn,K,ke,Wo,et,Ma,Io,za,An,Te,Oa,tt,Da,La,Mn,co,Va,zn,po,Bo,Na,On,ho,Wa,Dn,H,ot,Ia,mo,Ba,Ha,Xa,nt,Ra,uo,Za,Qa,Ya,Ho,Ja,Ln,X,Ga,at,Ka,es,st,ts,os,Vn,ee,Ue,Xo,rt,ns,Ro,as,Nn,O,it,ss,te,rs,fo,is,ls,lt,cs,ds,ps,oe,hs,go,ms,us,_o,fs,gs,_s,Fe,Wn,ne,xe,Zo,ct,vs,Qo,Ss,In,ae,dt,bs,pt,ws,Yo,ys,$s,Bn,se,ht,ks,mt,Ts,Jo,Us,Fs,Hn,re,Ce,Go,ut,xs,Ko,Cs,Xn,q,ft,js,gt,qs,_t,Es,Ps,As,vt,Ms,vo,zs,Os,Ds,St,Ls,bt,Vs,Ns,Ws,D,wt,Is,ie,Bs,So,Hs,Xs,en,Rs,Zs,Qs,je,Ys,qe,Rn,le,Ee,tn,yt,Js,on,Gs,Zn,E,$t,Ks,ce,er,nn,tr,or,kt,nr,ar,sr,Tt,rr,bo,ir,lr,cr,Ut,dr,Ft,pr,hr,mr,M,xt,ur,de,fr,wo,gr,_r,an,vr,Sr,br,Pe,wr,Ae,yr,Me,Qn,pe,ze,sn,Ct,$r,rn,kr,Yn,x,jt,Tr,ln,Ur,Fr,qt,xr,Et,Cr,jr,qr,Pt,Er,yo,Pr,Ar,Mr,At,zr,Mt,Or,Dr,Lr,z,zt,Vr,he,Nr,$o,Wr,Ir,cn,Br,Hr,Xr,Oe,Rr,De,Zr,Le,Jn,me,Ve,dn,Ot,Qr,pn,Yr,Gn,C,Dt,Jr,hn,Gr,Kr,Lt,ei,Vt,ti,oi,ni,Nt,ai,ko,si,ri,ii,Wt,li,It,ci,di,pi,L,Bt,hi,ue,mi,To,ui,fi,mn,gi,_i,vi,Ne,Si,We,Kn,fe,Ie,un,Ht,bi,fn,wi,ea,j,Xt,yi,gn,$i,ki,Rt,Ti,Zt,Ui,Fi,xi,Qt,Ci,Uo,ji,qi,Ei,Yt,Pi,Jt,Ai,Mi,zi,V,Gt,Oi,ge,Di,Fo,Li,Vi,_n,Ni,Wi,Ii,Be,Bi,He,ta,_e,Xe,vn,Kt,Hi,Sn,Xi,oa,P,eo,Ri,ve,Zi,bn,Qi,Yi,to,Ji,Gi,Ki,oo,el,xo,tl,ol,nl,no,al,ao,sl,rl,il,N,so,ll,Se,cl,Co,dl,pl,wn,hl,ml,ul,Re,fl,Ze,na;return l=new G({}),et=new G({}),rt=new G({}),it=new A({props:{name:"class transformers.UniSpeechSatConfig",anchor:"transformers.UniSpeechSatConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"feat_quantizer_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"num_codevectors_per_group",val:" = 320"},{name:"num_codevector_groups",val:" = 2"},{name:"contrastive_logits_temperature",val:" = 0.1"},{name:"num_negatives",val:" = 100"},{name:"codevector_dim",val:" = 256"},{name:"proj_codevector_dim",val:" = 256"},{name:"diversity_loss_weight",val:" = 0.1"},{name:"ctc_loss_reduction",val:" = 'mean'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"tdnn_dim",val:" = (512, 512, 512, 512, 1500)"},{name:"tdnn_kernel",val:" = (5, 3, 3, 1, 1)"},{name:"tdnn_dilation",val:" = (1, 2, 3, 1, 1)"},{name:"xvector_output_dim",val:" = 512"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"num_clusters",val:" = 504"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechSatConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the UniSpeechSat model. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatModel">UniSpeechSatModel</a>. Vocabulary size of the model. Defines the
different tokens that can be represented by the <em>inputs_ids</em> passed to the forward method of
<a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatModel">UniSpeechSatModel</a>.`,name:"vocab_size"},{anchor:"transformers.UniSpeechSatConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.UniSpeechSatConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.UniSpeechSatConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.UniSpeechSatConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.UniSpeechSatConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.UniSpeechSatConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.UniSpeechSatConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.UniSpeechSatConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatForCTC">UniSpeechSatForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.UniSpeechSatConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.UniSpeechSatConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.UniSpeechSatConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.UniSpeechSatConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.UniSpeechSatConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.UniSpeechSatConfig.feat_quantizer_dropout",description:`<strong>feat_quantizer_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for quantized feature encoder states.`,name:"feat_quantizer_dropout"},{anchor:"transformers.UniSpeechSatConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.UniSpeechSatConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.UniSpeechSatConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 3, 3)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the the length of
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
instance of <a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatForCTC">UniSpeechSatForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.UniSpeechSatConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatForCTC">UniSpeechSatForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.UniSpeechSatConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatForSequenceClassification">UniSpeechSatForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.UniSpeechSatConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"},{anchor:"transformers.UniSpeechSatConfig.tdnn_dim",description:`<strong>tdnn_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 1500)</code>) &#x2014;
A tuple of integers defining the number of output channels of each 1D convolutional layer in the <em>TDNN</em>
module of the <em>XVector</em> model. The length of <em>tdnn_dim</em> defines the number of <em>TDNN</em> layers.`,name:"tdnn_dim"},{anchor:"transformers.UniSpeechSatConfig.tdnn_kernel",description:`<strong>tdnn_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 3, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_kernel</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_kernel"},{anchor:"transformers.UniSpeechSatConfig.tdnn_dilation",description:`<strong>tdnn_dilation</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(1, 2, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the dilation factor of each 1D convolutional layer in <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_dilation</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_dilation"},{anchor:"transformers.UniSpeechSatConfig.xvector_output_dim",description:`<strong>xvector_output_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the <em>XVector</em> embedding vectors.`,name:"xvector_output_dim"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/unispeech_sat/configuration_unispeech_sat.py#L32"}}),Fe=new we({props:{anchor:"transformers.UniSpeechSatConfig.example",$$slots:{default:[Oc]},$$scope:{ctx:U}}}),ct=new G({}),dt=new A({props:{name:"class transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatBaseModelOutput",anchor:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"extract_features",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatBaseModelOutput.extract_features",description:`<strong>extract_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, conv_dim[-1])</code>) &#x2014;
Sequence of extracted feature vectors of the last convolutional layer of the model.`,name:"extract_features"},{anchor:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L81"}}),ht=new A({props:{name:"class transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput",anchor:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"projected_states",val:": FloatTensor = None"},{name:"projected_quantized_states",val:": FloatTensor = None"},{name:"codevector_perplexity",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when model is in train mode, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L110"}}),ut=new G({}),ft=new A({props:{name:"class transformers.UniSpeechSatModel",anchor:"transformers.UniSpeechSatModel",parameters:[{name:"config",val:": UniSpeechSatConfig"}],parametersDescription:[{anchor:"transformers.UniSpeechSatModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig">UniSpeechSatConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1129"}}),wt=new A({props:{name:"forward",anchor:"transformers.UniSpeechSatModel.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.UniSpeechSatModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1193",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatBaseModelOutput"
>transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig"
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
  href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatBaseModelOutput"
>transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),je=new No({props:{$$slots:{default:[Dc]},$$scope:{ctx:U}}}),qe=new we({props:{anchor:"transformers.UniSpeechSatModel.forward.example",$$slots:{default:[Lc]},$$scope:{ctx:U}}}),yt=new G({}),$t=new A({props:{name:"class transformers.UniSpeechSatForCTC",anchor:"transformers.UniSpeechSatForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechSatForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig">UniSpeechSatConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1393"}}),xt=new A({props:{name:"forward",anchor:"transformers.UniSpeechSatForCTC.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.UniSpeechSatForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UniSpeechSatForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1434",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pe=new No({props:{$$slots:{default:[Vc]},$$scope:{ctx:U}}}),Ae=new we({props:{anchor:"transformers.UniSpeechSatForCTC.forward.example",$$slots:{default:[Nc]},$$scope:{ctx:U}}}),Me=new we({props:{anchor:"transformers.UniSpeechSatForCTC.forward.example-2",$$slots:{default:[Wc]},$$scope:{ctx:U}}}),Ct=new G({}),jt=new A({props:{name:"class transformers.UniSpeechSatForSequenceClassification",anchor:"transformers.UniSpeechSatForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechSatForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig">UniSpeechSatConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1524"}}),zt=new A({props:{name:"forward",anchor:"transformers.UniSpeechSatForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.UniSpeechSatForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UniSpeechSatForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1569",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oe=new No({props:{$$slots:{default:[Ic]},$$scope:{ctx:U}}}),De=new we({props:{anchor:"transformers.UniSpeechSatForSequenceClassification.forward.example",$$slots:{default:[Bc]},$$scope:{ctx:U}}}),Le=new we({props:{anchor:"transformers.UniSpeechSatForSequenceClassification.forward.example-2",$$slots:{default:[Hc]},$$scope:{ctx:U}}}),Ot=new G({}),Dt=new A({props:{name:"class transformers.UniSpeechSatForAudioFrameClassification",anchor:"transformers.UniSpeechSatForAudioFrameClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechSatForAudioFrameClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig">UniSpeechSatConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1648"}}),Bt=new A({props:{name:"forward",anchor:"transformers.UniSpeechSatForAudioFrameClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.UniSpeechSatForAudioFrameClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UniSpeechSatForAudioFrameClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1691",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ne=new No({props:{$$slots:{default:[Xc]},$$scope:{ctx:U}}}),We=new we({props:{anchor:"transformers.UniSpeechSatForAudioFrameClassification.forward.example",$$slots:{default:[Rc]},$$scope:{ctx:U}}}),Ht=new G({}),Xt=new A({props:{name:"class transformers.UniSpeechSatForXVector",anchor:"transformers.UniSpeechSatForXVector",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechSatForXVector.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig">UniSpeechSatConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1806"}}),Gt=new A({props:{name:"forward",anchor:"transformers.UniSpeechSatForXVector.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.UniSpeechSatForXVector.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UniSpeechSatForXVector.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1868",returnDescription:`
<p>A <code>transformers.models.unispeech_sat.modeling_unispeech_sat.XVectorOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig"
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
<p><code>transformers.models.unispeech_sat.modeling_unispeech_sat.XVectorOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Be=new No({props:{$$slots:{default:[Zc]},$$scope:{ctx:U}}}),He=new we({props:{anchor:"transformers.UniSpeechSatForXVector.forward.example",$$slots:{default:[Qc]},$$scope:{ctx:U}}}),Kt=new G({}),eo=new A({props:{name:"class transformers.UniSpeechSatForPreTraining",anchor:"transformers.UniSpeechSatForPreTraining",parameters:[{name:"config",val:": UniSpeechSatConfig"}],parametersDescription:[{anchor:"transformers.UniSpeechSatForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig">UniSpeechSatConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1251"}}),so=new A({props:{name:"forward",anchor:"transformers.UniSpeechSatForPreTraining.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.UniSpeechSatForPreTraining.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/unispeech_sat/modeling_unispeech_sat.py#L1319",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput"
>transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatConfig"
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
  href="/docs/transformers/main/en/model_doc/unispeech-sat#transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput"
>transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Re=new No({props:{$$slots:{default:[Yc]},$$scope:{ctx:U}}}),Ze=new we({props:{anchor:"transformers.UniSpeechSatForPreTraining.forward.example",$$slots:{default:[Jc]},$$scope:{ctx:U}}}),{c(){c=s("meta"),v=h(),p=s("h1"),f=s("a"),S=s("span"),b(l.$$.fragment),u=h(),F=s("span"),Aa=n("UniSpeech-SAT"),Pn=h(),K=s("h2"),ke=s("a"),Wo=s("span"),b(et.$$.fragment),Ma=h(),Io=s("span"),za=n("Overview"),An=h(),Te=s("p"),Oa=n("The UniSpeech-SAT model was proposed in "),tt=s("a"),Da=n(`UniSpeech-SAT: Universal Speech Representation Learning with Speaker Aware
Pre-Training`),La=n(` by Sanyuan Chen, Yu Wu, Chengyi Wang, Zhengyang Chen, Zhuo Chen,
Shujie Liu, Jian Wu, Yao Qian, Furu Wei, Jinyu Li, Xiangzhan Yu .`),Mn=h(),co=s("p"),Va=n("The abstract from the paper is the following:"),zn=h(),po=s("p"),Bo=s("em"),Na=n(`Self-supervised learning (SSL) is a long-standing goal for speech processing, since it utilizes large-scale unlabeled
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
dataset to 94 thousand hours public audio data and achieve further performance improvement in all SUPERB tasks.`),On=h(),ho=s("p"),Wa=n("Tips:"),Dn=h(),H=s("ul"),ot=s("li"),Ia=n(`UniSpeechSat is a speech model that accepts a float array corresponding to the raw waveform of the speech signal.
Please use `),mo=s("a"),Ba=n("Wav2Vec2Processor"),Ha=n(" for the feature extraction."),Xa=h(),nt=s("li"),Ra=n(`UniSpeechSat model can be fine-tuned using connectionist temporal classification (CTC) so the model output has to be
decoded using `),uo=s("a"),Za=n("Wav2Vec2CTCTokenizer"),Qa=n("."),Ya=h(),Ho=s("li"),Ja=n("UniSpeechSat performs especially well on speaker verification, speaker identification, and speaker diarization tasks."),Ln=h(),X=s("p"),Ga=n("This model was contributed by "),at=s("a"),Ka=n("patrickvonplaten"),es=n(`. The Authors\u2019 code can be
found `),st=s("a"),ts=n("here"),os=n("."),Vn=h(),ee=s("h2"),Ue=s("a"),Xo=s("span"),b(rt.$$.fragment),ns=h(),Ro=s("span"),as=n("UniSpeechSatConfig"),Nn=h(),O=s("div"),b(it.$$.fragment),ss=h(),te=s("p"),rs=n("This is the configuration class to store the configuration of a "),fo=s("a"),is=n("UniSpeechSatModel"),ls=n(`. It is used to instantiate an
UniSpeechSat model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the UniSpeechSat
`),lt=s("a"),cs=n("microsoft/unispeech-sat-base-100h-libri-ft"),ds=n(`
architecture.`),ps=h(),oe=s("p"),hs=n("Configuration objects inherit from "),go=s("a"),ms=n("PretrainedConfig"),us=n(` and can be used to control the model outputs. Read the
documentation from `),_o=s("a"),fs=n("PretrainedConfig"),gs=n(" for more information."),_s=h(),b(Fe.$$.fragment),Wn=h(),ne=s("h2"),xe=s("a"),Zo=s("span"),b(ct.$$.fragment),vs=h(),Qo=s("span"),Ss=n("UniSpeechSat specific outputs"),In=h(),ae=s("div"),b(dt.$$.fragment),bs=h(),pt=s("p"),ws=n("Output type of "),Yo=s("code"),ys=n("UniSpeechSatBaseModelOutput"),$s=n(", with potential hidden states and attentions."),Bn=h(),se=s("div"),b(ht.$$.fragment),ks=h(),mt=s("p"),Ts=n("Output type of "),Jo=s("code"),Us=n("UniSpeechSatForPreTrainingOutput"),Fs=n(", with potential hidden states and attentions."),Hn=h(),re=s("h2"),Ce=s("a"),Go=s("span"),b(ut.$$.fragment),xs=h(),Ko=s("span"),Cs=n("UniSpeechSatModel"),Xn=h(),q=s("div"),b(ft.$$.fragment),js=h(),gt=s("p"),qs=n(`The bare UniSpeechSat Model transformer outputting raw hidden-states without any specific head on top.
UniSpeechSat was proposed in `),_t=s("a"),Es=n(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Ps=n(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),As=h(),vt=s("p"),Ms=n("This model inherits from "),vo=s("a"),zs=n("PreTrainedModel"),Os=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ds=h(),St=s("p"),Ls=n("This model is a PyTorch "),bt=s("a"),Vs=n("torch.nn.Module"),Ns=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ws=h(),D=s("div"),b(wt.$$.fragment),Is=h(),ie=s("p"),Bs=n("The "),So=s("a"),Hs=n("UniSpeechSatModel"),Xs=n(" forward method, overrides the "),en=s("code"),Rs=n("__call__"),Zs=n(" special method."),Qs=h(),b(je.$$.fragment),Ys=h(),b(qe.$$.fragment),Rn=h(),le=s("h2"),Ee=s("a"),tn=s("span"),b(yt.$$.fragment),Js=h(),on=s("span"),Gs=n("UniSpeechSatForCTC"),Zn=h(),E=s("div"),b($t.$$.fragment),Ks=h(),ce=s("p"),er=n("UniSpeechSat Model with a "),nn=s("code"),tr=n("language modeling"),or=n(` head on top for Connectionist Temporal Classification (CTC).
UniSpeechSat was proposed in `),kt=s("a"),nr=n(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),ar=n(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),sr=h(),Tt=s("p"),rr=n("This model inherits from "),bo=s("a"),ir=n("PreTrainedModel"),lr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),cr=h(),Ut=s("p"),dr=n("This model is a PyTorch "),Ft=s("a"),pr=n("torch.nn.Module"),hr=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mr=h(),M=s("div"),b(xt.$$.fragment),ur=h(),de=s("p"),fr=n("The "),wo=s("a"),gr=n("UniSpeechSatForCTC"),_r=n(" forward method, overrides the "),an=s("code"),vr=n("__call__"),Sr=n(" special method."),br=h(),b(Pe.$$.fragment),wr=h(),b(Ae.$$.fragment),yr=h(),b(Me.$$.fragment),Qn=h(),pe=s("h2"),ze=s("a"),sn=s("span"),b(Ct.$$.fragment),$r=h(),rn=s("span"),kr=n("UniSpeechSatForSequenceClassification"),Yn=h(),x=s("div"),b(jt.$$.fragment),Tr=h(),ln=s("p"),Ur=n(`UniSpeechSat Model with a sequence classification head on top (a linear layer over the pooled output) for tasks
like SUPERB Keyword Spotting.`),Fr=h(),qt=s("p"),xr=n("UniSpeechSat was proposed in "),Et=s("a"),Cr=n(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),jr=n(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),qr=h(),Pt=s("p"),Er=n("This model inherits from "),yo=s("a"),Pr=n("PreTrainedModel"),Ar=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Mr=h(),At=s("p"),zr=n("This model is a PyTorch "),Mt=s("a"),Or=n("torch.nn.Module"),Dr=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Lr=h(),z=s("div"),b(zt.$$.fragment),Vr=h(),he=s("p"),Nr=n("The "),$o=s("a"),Wr=n("UniSpeechSatForSequenceClassification"),Ir=n(" forward method, overrides the "),cn=s("code"),Br=n("__call__"),Hr=n(" special method."),Xr=h(),b(Oe.$$.fragment),Rr=h(),b(De.$$.fragment),Zr=h(),b(Le.$$.fragment),Jn=h(),me=s("h2"),Ve=s("a"),dn=s("span"),b(Ot.$$.fragment),Qr=h(),pn=s("span"),Yr=n("UniSpeechSatForAudioFrameClassification"),Gn=h(),C=s("div"),b(Dt.$$.fragment),Jr=h(),hn=s("p"),Gr=n("UniSpeech-SAT Model with a frame classification head on top for tasks like Speaker Diarization."),Kr=h(),Lt=s("p"),ei=n("UniSpeechSat was proposed in "),Vt=s("a"),ti=n(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),oi=n(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),ni=h(),Nt=s("p"),ai=n("This model inherits from "),ko=s("a"),si=n("PreTrainedModel"),ri=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ii=h(),Wt=s("p"),li=n("This model is a PyTorch "),It=s("a"),ci=n("torch.nn.Module"),di=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pi=h(),L=s("div"),b(Bt.$$.fragment),hi=h(),ue=s("p"),mi=n("The "),To=s("a"),ui=n("UniSpeechSatForAudioFrameClassification"),fi=n(" forward method, overrides the "),mn=s("code"),gi=n("__call__"),_i=n(" special method."),vi=h(),b(Ne.$$.fragment),Si=h(),b(We.$$.fragment),Kn=h(),fe=s("h2"),Ie=s("a"),un=s("span"),b(Ht.$$.fragment),bi=h(),fn=s("span"),wi=n("UniSpeechSatForXVector"),ea=h(),j=s("div"),b(Xt.$$.fragment),yi=h(),gn=s("p"),$i=n("UniSpeech-SAT Model with an XVector feature extraction head on top for tasks like Speaker Verification."),ki=h(),Rt=s("p"),Ti=n("UniSpeechSat was proposed in "),Zt=s("a"),Ui=n(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Fi=n(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),xi=h(),Qt=s("p"),Ci=n("This model inherits from "),Uo=s("a"),ji=n("PreTrainedModel"),qi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ei=h(),Yt=s("p"),Pi=n("This model is a PyTorch "),Jt=s("a"),Ai=n("torch.nn.Module"),Mi=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zi=h(),V=s("div"),b(Gt.$$.fragment),Oi=h(),ge=s("p"),Di=n("The "),Fo=s("a"),Li=n("UniSpeechSatForXVector"),Vi=n(" forward method, overrides the "),_n=s("code"),Ni=n("__call__"),Wi=n(" special method."),Ii=h(),b(Be.$$.fragment),Bi=h(),b(He.$$.fragment),ta=h(),_e=s("h2"),Xe=s("a"),vn=s("span"),b(Kt.$$.fragment),Hi=h(),Sn=s("span"),Xi=n("UniSpeechSatForPreTraining"),oa=h(),P=s("div"),b(eo.$$.fragment),Ri=h(),ve=s("p"),Zi=n("UniSpeechSat Model with a quantizer and "),bn=s("code"),Qi=n("VQ"),Yi=n(` head on top.
UniSpeechSat was proposed in `),to=s("a"),Ji=n(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Gi=n(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Ki=h(),oo=s("p"),el=n("This model inherits from "),xo=s("a"),tl=n("PreTrainedModel"),ol=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),nl=h(),no=s("p"),al=n("This model is a PyTorch "),ao=s("a"),sl=n("torch.nn.Module"),rl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),il=h(),N=s("div"),b(so.$$.fragment),ll=h(),Se=s("p"),cl=n("The "),Co=s("a"),dl=n("UniSpeechSatForPreTraining"),pl=n(" forward method, overrides the "),wn=s("code"),hl=n("__call__"),ml=n(" special method."),ul=h(),b(Re.$$.fragment),fl=h(),b(Ze.$$.fragment),this.h()},l(t){const g=Mc('[data-svelte="svelte-1phssyn"]',document.head);c=r(g,"META",{name:!0,content:!0}),g.forEach(o),v=m(t),p=r(t,"H1",{class:!0});var ro=i(p);f=r(ro,"A",{id:!0,class:!0,href:!0});var yn=i(f);S=r(yn,"SPAN",{});var $n=i(S);w(l.$$.fragment,$n),$n.forEach(o),yn.forEach(o),u=m(ro),F=r(ro,"SPAN",{});var kn=i(F);Aa=a(kn,"UniSpeech-SAT"),kn.forEach(o),ro.forEach(o),Pn=m(t),K=r(t,"H2",{class:!0});var io=i(K);ke=r(io,"A",{id:!0,class:!0,href:!0});var Tn=i(ke);Wo=r(Tn,"SPAN",{});var Un=i(Wo);w(et.$$.fragment,Un),Un.forEach(o),Tn.forEach(o),Ma=m(io),Io=r(io,"SPAN",{});var Fn=i(Io);za=a(Fn,"Overview"),Fn.forEach(o),io.forEach(o),An=m(t),Te=r(t,"P",{});var lo=i(Te);Oa=a(lo,"The UniSpeech-SAT model was proposed in "),tt=r(lo,"A",{href:!0,rel:!0});var xn=i(tt);Da=a(xn,`UniSpeech-SAT: Universal Speech Representation Learning with Speaker Aware
Pre-Training`),xn.forEach(o),La=a(lo,` by Sanyuan Chen, Yu Wu, Chengyi Wang, Zhengyang Chen, Zhuo Chen,
Shujie Liu, Jian Wu, Yao Qian, Furu Wei, Jinyu Li, Xiangzhan Yu .`),lo.forEach(o),Mn=m(t),co=r(t,"P",{});var Cn=i(co);Va=a(Cn,"The abstract from the paper is the following:"),Cn.forEach(o),zn=m(t),po=r(t,"P",{});var jn=i(po);Bo=r(jn,"EM",{});var qn=i(Bo);Na=a(qn,`Self-supervised learning (SSL) is a long-standing goal for speech processing, since it utilizes large-scale unlabeled
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
dataset to 94 thousand hours public audio data and achieve further performance improvement in all SUPERB tasks.`),qn.forEach(o),jn.forEach(o),On=m(t),ho=r(t,"P",{});var En=i(ho);Wa=a(En,"Tips:"),En.forEach(o),Dn=m(t),H=r(t,"UL",{});var be=i(H);ot=r(be,"LI",{});var aa=i(ot);Ia=a(aa,`UniSpeechSat is a speech model that accepts a float array corresponding to the raw waveform of the speech signal.
Please use `),mo=r(aa,"A",{href:!0});var gl=i(mo);Ba=a(gl,"Wav2Vec2Processor"),gl.forEach(o),Ha=a(aa," for the feature extraction."),aa.forEach(o),Xa=m(be),nt=r(be,"LI",{});var sa=i(nt);Ra=a(sa,`UniSpeechSat model can be fine-tuned using connectionist temporal classification (CTC) so the model output has to be
decoded using `),uo=r(sa,"A",{href:!0});var _l=i(uo);Za=a(_l,"Wav2Vec2CTCTokenizer"),_l.forEach(o),Qa=a(sa,"."),sa.forEach(o),Ya=m(be),Ho=r(be,"LI",{});var vl=i(Ho);Ja=a(vl,"UniSpeechSat performs especially well on speaker verification, speaker identification, and speaker diarization tasks."),vl.forEach(o),be.forEach(o),Ln=m(t),X=r(t,"P",{});var jo=i(X);Ga=a(jo,"This model was contributed by "),at=r(jo,"A",{href:!0,rel:!0});var Sl=i(at);Ka=a(Sl,"patrickvonplaten"),Sl.forEach(o),es=a(jo,`. The Authors\u2019 code can be
found `),st=r(jo,"A",{href:!0,rel:!0});var bl=i(st);ts=a(bl,"here"),bl.forEach(o),os=a(jo,"."),jo.forEach(o),Vn=m(t),ee=r(t,"H2",{class:!0});var ra=i(ee);Ue=r(ra,"A",{id:!0,class:!0,href:!0});var wl=i(Ue);Xo=r(wl,"SPAN",{});var yl=i(Xo);w(rt.$$.fragment,yl),yl.forEach(o),wl.forEach(o),ns=m(ra),Ro=r(ra,"SPAN",{});var $l=i(Ro);as=a($l,"UniSpeechSatConfig"),$l.forEach(o),ra.forEach(o),Nn=m(t),O=r(t,"DIV",{class:!0});var Qe=i(O);w(it.$$.fragment,Qe),ss=m(Qe),te=r(Qe,"P",{});var qo=i(te);rs=a(qo,"This is the configuration class to store the configuration of a "),fo=r(qo,"A",{href:!0});var kl=i(fo);is=a(kl,"UniSpeechSatModel"),kl.forEach(o),ls=a(qo,`. It is used to instantiate an
UniSpeechSat model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the UniSpeechSat
`),lt=r(qo,"A",{href:!0,rel:!0});var Tl=i(lt);cs=a(Tl,"microsoft/unispeech-sat-base-100h-libri-ft"),Tl.forEach(o),ds=a(qo,`
architecture.`),qo.forEach(o),ps=m(Qe),oe=r(Qe,"P",{});var Eo=i(oe);hs=a(Eo,"Configuration objects inherit from "),go=r(Eo,"A",{href:!0});var Ul=i(go);ms=a(Ul,"PretrainedConfig"),Ul.forEach(o),us=a(Eo,` and can be used to control the model outputs. Read the
documentation from `),_o=r(Eo,"A",{href:!0});var Fl=i(_o);fs=a(Fl,"PretrainedConfig"),Fl.forEach(o),gs=a(Eo," for more information."),Eo.forEach(o),_s=m(Qe),w(Fe.$$.fragment,Qe),Qe.forEach(o),Wn=m(t),ne=r(t,"H2",{class:!0});var ia=i(ne);xe=r(ia,"A",{id:!0,class:!0,href:!0});var xl=i(xe);Zo=r(xl,"SPAN",{});var Cl=i(Zo);w(ct.$$.fragment,Cl),Cl.forEach(o),xl.forEach(o),vs=m(ia),Qo=r(ia,"SPAN",{});var jl=i(Qo);Ss=a(jl,"UniSpeechSat specific outputs"),jl.forEach(o),ia.forEach(o),In=m(t),ae=r(t,"DIV",{class:!0});var la=i(ae);w(dt.$$.fragment,la),bs=m(la),pt=r(la,"P",{});var ca=i(pt);ws=a(ca,"Output type of "),Yo=r(ca,"CODE",{});var ql=i(Yo);ys=a(ql,"UniSpeechSatBaseModelOutput"),ql.forEach(o),$s=a(ca,", with potential hidden states and attentions."),ca.forEach(o),la.forEach(o),Bn=m(t),se=r(t,"DIV",{class:!0});var da=i(se);w(ht.$$.fragment,da),ks=m(da),mt=r(da,"P",{});var pa=i(mt);Ts=a(pa,"Output type of "),Jo=r(pa,"CODE",{});var El=i(Jo);Us=a(El,"UniSpeechSatForPreTrainingOutput"),El.forEach(o),Fs=a(pa,", with potential hidden states and attentions."),pa.forEach(o),da.forEach(o),Hn=m(t),re=r(t,"H2",{class:!0});var ha=i(re);Ce=r(ha,"A",{id:!0,class:!0,href:!0});var Pl=i(Ce);Go=r(Pl,"SPAN",{});var Al=i(Go);w(ut.$$.fragment,Al),Al.forEach(o),Pl.forEach(o),xs=m(ha),Ko=r(ha,"SPAN",{});var Ml=i(Ko);Cs=a(Ml,"UniSpeechSatModel"),Ml.forEach(o),ha.forEach(o),Xn=m(t),q=r(t,"DIV",{class:!0});var R=i(q);w(ft.$$.fragment,R),js=m(R),gt=r(R,"P",{});var ma=i(gt);qs=a(ma,`The bare UniSpeechSat Model transformer outputting raw hidden-states without any specific head on top.
UniSpeechSat was proposed in `),_t=r(ma,"A",{href:!0,rel:!0});var zl=i(_t);Es=a(zl,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),zl.forEach(o),Ps=a(ma,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),ma.forEach(o),As=m(R),vt=r(R,"P",{});var ua=i(vt);Ms=a(ua,"This model inherits from "),vo=r(ua,"A",{href:!0});var Ol=i(vo);zs=a(Ol,"PreTrainedModel"),Ol.forEach(o),Os=a(ua,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ua.forEach(o),Ds=m(R),St=r(R,"P",{});var fa=i(St);Ls=a(fa,"This model is a PyTorch "),bt=r(fa,"A",{href:!0,rel:!0});var Dl=i(bt);Vs=a(Dl,"torch.nn.Module"),Dl.forEach(o),Ns=a(fa,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fa.forEach(o),Ws=m(R),D=r(R,"DIV",{class:!0});var Ye=i(D);w(wt.$$.fragment,Ye),Is=m(Ye),ie=r(Ye,"P",{});var Po=i(ie);Bs=a(Po,"The "),So=r(Po,"A",{href:!0});var Ll=i(So);Hs=a(Ll,"UniSpeechSatModel"),Ll.forEach(o),Xs=a(Po," forward method, overrides the "),en=r(Po,"CODE",{});var Vl=i(en);Rs=a(Vl,"__call__"),Vl.forEach(o),Zs=a(Po," special method."),Po.forEach(o),Qs=m(Ye),w(je.$$.fragment,Ye),Ys=m(Ye),w(qe.$$.fragment,Ye),Ye.forEach(o),R.forEach(o),Rn=m(t),le=r(t,"H2",{class:!0});var ga=i(le);Ee=r(ga,"A",{id:!0,class:!0,href:!0});var Nl=i(Ee);tn=r(Nl,"SPAN",{});var Wl=i(tn);w(yt.$$.fragment,Wl),Wl.forEach(o),Nl.forEach(o),Js=m(ga),on=r(ga,"SPAN",{});var Il=i(on);Gs=a(Il,"UniSpeechSatForCTC"),Il.forEach(o),ga.forEach(o),Zn=m(t),E=r(t,"DIV",{class:!0});var Z=i(E);w($t.$$.fragment,Z),Ks=m(Z),ce=r(Z,"P",{});var Ao=i(ce);er=a(Ao,"UniSpeechSat Model with a "),nn=r(Ao,"CODE",{});var Bl=i(nn);tr=a(Bl,"language modeling"),Bl.forEach(o),or=a(Ao,` head on top for Connectionist Temporal Classification (CTC).
UniSpeechSat was proposed in `),kt=r(Ao,"A",{href:!0,rel:!0});var Hl=i(kt);nr=a(Hl,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Hl.forEach(o),ar=a(Ao,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Ao.forEach(o),sr=m(Z),Tt=r(Z,"P",{});var _a=i(Tt);rr=a(_a,"This model inherits from "),bo=r(_a,"A",{href:!0});var Xl=i(bo);ir=a(Xl,"PreTrainedModel"),Xl.forEach(o),lr=a(_a,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),_a.forEach(o),cr=m(Z),Ut=r(Z,"P",{});var va=i(Ut);dr=a(va,"This model is a PyTorch "),Ft=r(va,"A",{href:!0,rel:!0});var Rl=i(Ft);pr=a(Rl,"torch.nn.Module"),Rl.forEach(o),hr=a(va,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),va.forEach(o),mr=m(Z),M=r(Z,"DIV",{class:!0});var Q=i(M);w(xt.$$.fragment,Q),ur=m(Q),de=r(Q,"P",{});var Mo=i(de);fr=a(Mo,"The "),wo=r(Mo,"A",{href:!0});var Zl=i(wo);gr=a(Zl,"UniSpeechSatForCTC"),Zl.forEach(o),_r=a(Mo," forward method, overrides the "),an=r(Mo,"CODE",{});var Ql=i(an);vr=a(Ql,"__call__"),Ql.forEach(o),Sr=a(Mo," special method."),Mo.forEach(o),br=m(Q),w(Pe.$$.fragment,Q),wr=m(Q),w(Ae.$$.fragment,Q),yr=m(Q),w(Me.$$.fragment,Q),Q.forEach(o),Z.forEach(o),Qn=m(t),pe=r(t,"H2",{class:!0});var Sa=i(pe);ze=r(Sa,"A",{id:!0,class:!0,href:!0});var Yl=i(ze);sn=r(Yl,"SPAN",{});var Jl=i(sn);w(Ct.$$.fragment,Jl),Jl.forEach(o),Yl.forEach(o),$r=m(Sa),rn=r(Sa,"SPAN",{});var Gl=i(rn);kr=a(Gl,"UniSpeechSatForSequenceClassification"),Gl.forEach(o),Sa.forEach(o),Yn=m(t),x=r(t,"DIV",{class:!0});var W=i(x);w(jt.$$.fragment,W),Tr=m(W),ln=r(W,"P",{});var Kl=i(ln);Ur=a(Kl,`UniSpeechSat Model with a sequence classification head on top (a linear layer over the pooled output) for tasks
like SUPERB Keyword Spotting.`),Kl.forEach(o),Fr=m(W),qt=r(W,"P",{});var ba=i(qt);xr=a(ba,"UniSpeechSat was proposed in "),Et=r(ba,"A",{href:!0,rel:!0});var ec=i(Et);Cr=a(ec,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),ec.forEach(o),jr=a(ba,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),ba.forEach(o),qr=m(W),Pt=r(W,"P",{});var wa=i(Pt);Er=a(wa,"This model inherits from "),yo=r(wa,"A",{href:!0});var tc=i(yo);Pr=a(tc,"PreTrainedModel"),tc.forEach(o),Ar=a(wa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),wa.forEach(o),Mr=m(W),At=r(W,"P",{});var ya=i(At);zr=a(ya,"This model is a PyTorch "),Mt=r(ya,"A",{href:!0,rel:!0});var oc=i(Mt);Or=a(oc,"torch.nn.Module"),oc.forEach(o),Dr=a(ya,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ya.forEach(o),Lr=m(W),z=r(W,"DIV",{class:!0});var Y=i(z);w(zt.$$.fragment,Y),Vr=m(Y),he=r(Y,"P",{});var zo=i(he);Nr=a(zo,"The "),$o=r(zo,"A",{href:!0});var nc=i($o);Wr=a(nc,"UniSpeechSatForSequenceClassification"),nc.forEach(o),Ir=a(zo," forward method, overrides the "),cn=r(zo,"CODE",{});var ac=i(cn);Br=a(ac,"__call__"),ac.forEach(o),Hr=a(zo," special method."),zo.forEach(o),Xr=m(Y),w(Oe.$$.fragment,Y),Rr=m(Y),w(De.$$.fragment,Y),Zr=m(Y),w(Le.$$.fragment,Y),Y.forEach(o),W.forEach(o),Jn=m(t),me=r(t,"H2",{class:!0});var $a=i(me);Ve=r($a,"A",{id:!0,class:!0,href:!0});var sc=i(Ve);dn=r(sc,"SPAN",{});var rc=i(dn);w(Ot.$$.fragment,rc),rc.forEach(o),sc.forEach(o),Qr=m($a),pn=r($a,"SPAN",{});var ic=i(pn);Yr=a(ic,"UniSpeechSatForAudioFrameClassification"),ic.forEach(o),$a.forEach(o),Gn=m(t),C=r(t,"DIV",{class:!0});var I=i(C);w(Dt.$$.fragment,I),Jr=m(I),hn=r(I,"P",{});var lc=i(hn);Gr=a(lc,"UniSpeech-SAT Model with a frame classification head on top for tasks like Speaker Diarization."),lc.forEach(o),Kr=m(I),Lt=r(I,"P",{});var ka=i(Lt);ei=a(ka,"UniSpeechSat was proposed in "),Vt=r(ka,"A",{href:!0,rel:!0});var cc=i(Vt);ti=a(cc,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),cc.forEach(o),oi=a(ka,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),ka.forEach(o),ni=m(I),Nt=r(I,"P",{});var Ta=i(Nt);ai=a(Ta,"This model inherits from "),ko=r(Ta,"A",{href:!0});var dc=i(ko);si=a(dc,"PreTrainedModel"),dc.forEach(o),ri=a(Ta,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ta.forEach(o),ii=m(I),Wt=r(I,"P",{});var Ua=i(Wt);li=a(Ua,"This model is a PyTorch "),It=r(Ua,"A",{href:!0,rel:!0});var pc=i(It);ci=a(pc,"torch.nn.Module"),pc.forEach(o),di=a(Ua,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ua.forEach(o),pi=m(I),L=r(I,"DIV",{class:!0});var Je=i(L);w(Bt.$$.fragment,Je),hi=m(Je),ue=r(Je,"P",{});var Oo=i(ue);mi=a(Oo,"The "),To=r(Oo,"A",{href:!0});var hc=i(To);ui=a(hc,"UniSpeechSatForAudioFrameClassification"),hc.forEach(o),fi=a(Oo," forward method, overrides the "),mn=r(Oo,"CODE",{});var mc=i(mn);gi=a(mc,"__call__"),mc.forEach(o),_i=a(Oo," special method."),Oo.forEach(o),vi=m(Je),w(Ne.$$.fragment,Je),Si=m(Je),w(We.$$.fragment,Je),Je.forEach(o),I.forEach(o),Kn=m(t),fe=r(t,"H2",{class:!0});var Fa=i(fe);Ie=r(Fa,"A",{id:!0,class:!0,href:!0});var uc=i(Ie);un=r(uc,"SPAN",{});var fc=i(un);w(Ht.$$.fragment,fc),fc.forEach(o),uc.forEach(o),bi=m(Fa),fn=r(Fa,"SPAN",{});var gc=i(fn);wi=a(gc,"UniSpeechSatForXVector"),gc.forEach(o),Fa.forEach(o),ea=m(t),j=r(t,"DIV",{class:!0});var B=i(j);w(Xt.$$.fragment,B),yi=m(B),gn=r(B,"P",{});var _c=i(gn);$i=a(_c,"UniSpeech-SAT Model with an XVector feature extraction head on top for tasks like Speaker Verification."),_c.forEach(o),ki=m(B),Rt=r(B,"P",{});var xa=i(Rt);Ti=a(xa,"UniSpeechSat was proposed in "),Zt=r(xa,"A",{href:!0,rel:!0});var vc=i(Zt);Ui=a(vc,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),vc.forEach(o),Fi=a(xa,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),xa.forEach(o),xi=m(B),Qt=r(B,"P",{});var Ca=i(Qt);Ci=a(Ca,"This model inherits from "),Uo=r(Ca,"A",{href:!0});var Sc=i(Uo);ji=a(Sc,"PreTrainedModel"),Sc.forEach(o),qi=a(Ca,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ca.forEach(o),Ei=m(B),Yt=r(B,"P",{});var ja=i(Yt);Pi=a(ja,"This model is a PyTorch "),Jt=r(ja,"A",{href:!0,rel:!0});var bc=i(Jt);Ai=a(bc,"torch.nn.Module"),bc.forEach(o),Mi=a(ja,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ja.forEach(o),zi=m(B),V=r(B,"DIV",{class:!0});var Ge=i(V);w(Gt.$$.fragment,Ge),Oi=m(Ge),ge=r(Ge,"P",{});var Do=i(ge);Di=a(Do,"The "),Fo=r(Do,"A",{href:!0});var wc=i(Fo);Li=a(wc,"UniSpeechSatForXVector"),wc.forEach(o),Vi=a(Do," forward method, overrides the "),_n=r(Do,"CODE",{});var yc=i(_n);Ni=a(yc,"__call__"),yc.forEach(o),Wi=a(Do," special method."),Do.forEach(o),Ii=m(Ge),w(Be.$$.fragment,Ge),Bi=m(Ge),w(He.$$.fragment,Ge),Ge.forEach(o),B.forEach(o),ta=m(t),_e=r(t,"H2",{class:!0});var qa=i(_e);Xe=r(qa,"A",{id:!0,class:!0,href:!0});var $c=i(Xe);vn=r($c,"SPAN",{});var kc=i(vn);w(Kt.$$.fragment,kc),kc.forEach(o),$c.forEach(o),Hi=m(qa),Sn=r(qa,"SPAN",{});var Tc=i(Sn);Xi=a(Tc,"UniSpeechSatForPreTraining"),Tc.forEach(o),qa.forEach(o),oa=m(t),P=r(t,"DIV",{class:!0});var J=i(P);w(eo.$$.fragment,J),Ri=m(J),ve=r(J,"P",{});var Lo=i(ve);Zi=a(Lo,"UniSpeechSat Model with a quantizer and "),bn=r(Lo,"CODE",{});var Uc=i(bn);Qi=a(Uc,"VQ"),Uc.forEach(o),Yi=a(Lo,` head on top.
UniSpeechSat was proposed in `),to=r(Lo,"A",{href:!0,rel:!0});var Fc=i(to);Ji=a(Fc,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Fc.forEach(o),Gi=a(Lo,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Lo.forEach(o),Ki=m(J),oo=r(J,"P",{});var Ea=i(oo);el=a(Ea,"This model inherits from "),xo=r(Ea,"A",{href:!0});var xc=i(xo);tl=a(xc,"PreTrainedModel"),xc.forEach(o),ol=a(Ea,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ea.forEach(o),nl=m(J),no=r(J,"P",{});var Pa=i(no);al=a(Pa,"This model is a PyTorch "),ao=r(Pa,"A",{href:!0,rel:!0});var Cc=i(ao);sl=a(Cc,"torch.nn.Module"),Cc.forEach(o),rl=a(Pa,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pa.forEach(o),il=m(J),N=r(J,"DIV",{class:!0});var Ke=i(N);w(so.$$.fragment,Ke),ll=m(Ke),Se=r(Ke,"P",{});var Vo=i(Se);cl=a(Vo,"The "),Co=r(Vo,"A",{href:!0});var jc=i(Co);dl=a(jc,"UniSpeechSatForPreTraining"),jc.forEach(o),pl=a(Vo," forward method, overrides the "),wn=r(Vo,"CODE",{});var qc=i(wn);hl=a(qc,"__call__"),qc.forEach(o),ml=a(Vo," special method."),Vo.forEach(o),ul=m(Ke),w(Re.$$.fragment,Ke),fl=m(Ke),w(Ze.$$.fragment,Ke),Ke.forEach(o),J.forEach(o),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(Kc)),d(f,"id","unispeechsat"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#unispeechsat"),d(p,"class","relative group"),d(ke,"id","overview"),d(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ke,"href","#overview"),d(K,"class","relative group"),d(tt,"href","https://arxiv.org/abs/2110.05752"),d(tt,"rel","nofollow"),d(mo,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor"),d(uo,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),d(at,"href","https://huggingface.co/patrickvonplaten"),d(at,"rel","nofollow"),d(st,"href","https://github.com/microsoft/UniSpeech/tree/main/UniSpeech-SAT"),d(st,"rel","nofollow"),d(Ue,"id","transformers.UniSpeechSatConfig"),d(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ue,"href","#transformers.UniSpeechSatConfig"),d(ee,"class","relative group"),d(fo,"href","/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatModel"),d(lt,"href","https://huggingface.co/microsoft/unispeech-sat-base-100h-libri-ft"),d(lt,"rel","nofollow"),d(go,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(_o,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(xe,"id","transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatBaseModelOutput"),d(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(xe,"href","#transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatBaseModelOutput"),d(ne,"class","relative group"),d(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ce,"id","transformers.UniSpeechSatModel"),d(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ce,"href","#transformers.UniSpeechSatModel"),d(re,"class","relative group"),d(_t,"href","https://arxiv.org/abs/2006.11477"),d(_t,"rel","nofollow"),d(vo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(bt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(bt,"rel","nofollow"),d(So,"href","/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatModel"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ee,"id","transformers.UniSpeechSatForCTC"),d(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ee,"href","#transformers.UniSpeechSatForCTC"),d(le,"class","relative group"),d(kt,"href","https://arxiv.org/abs/2006.11477"),d(kt,"rel","nofollow"),d(bo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(Ft,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ft,"rel","nofollow"),d(wo,"href","/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatForCTC"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ze,"id","transformers.UniSpeechSatForSequenceClassification"),d(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ze,"href","#transformers.UniSpeechSatForSequenceClassification"),d(pe,"class","relative group"),d(Et,"href","https://arxiv.org/abs/2006.11477"),d(Et,"rel","nofollow"),d(yo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(Mt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Mt,"rel","nofollow"),d($o,"href","/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatForSequenceClassification"),d(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ve,"id","transformers.UniSpeechSatForAudioFrameClassification"),d(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ve,"href","#transformers.UniSpeechSatForAudioFrameClassification"),d(me,"class","relative group"),d(Vt,"href","https://arxiv.org/abs/2006.11477"),d(Vt,"rel","nofollow"),d(ko,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(It,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(It,"rel","nofollow"),d(To,"href","/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatForAudioFrameClassification"),d(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ie,"id","transformers.UniSpeechSatForXVector"),d(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ie,"href","#transformers.UniSpeechSatForXVector"),d(fe,"class","relative group"),d(Zt,"href","https://arxiv.org/abs/2006.11477"),d(Zt,"rel","nofollow"),d(Uo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(Jt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Jt,"rel","nofollow"),d(Fo,"href","/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatForXVector"),d(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Xe,"id","transformers.UniSpeechSatForPreTraining"),d(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Xe,"href","#transformers.UniSpeechSatForPreTraining"),d(_e,"class","relative group"),d(to,"href","https://arxiv.org/abs/2006.11477"),d(to,"rel","nofollow"),d(xo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(ao,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(ao,"rel","nofollow"),d(Co,"href","/docs/transformers/main/en/model_doc/unispeech-sat#transformers.UniSpeechSatForPreTraining"),d(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,c),_(t,v,g),_(t,p,g),e(p,f),e(f,S),y(l,S,null),e(p,u),e(p,F),e(F,Aa),_(t,Pn,g),_(t,K,g),e(K,ke),e(ke,Wo),y(et,Wo,null),e(K,Ma),e(K,Io),e(Io,za),_(t,An,g),_(t,Te,g),e(Te,Oa),e(Te,tt),e(tt,Da),e(Te,La),_(t,Mn,g),_(t,co,g),e(co,Va),_(t,zn,g),_(t,po,g),e(po,Bo),e(Bo,Na),_(t,On,g),_(t,ho,g),e(ho,Wa),_(t,Dn,g),_(t,H,g),e(H,ot),e(ot,Ia),e(ot,mo),e(mo,Ba),e(ot,Ha),e(H,Xa),e(H,nt),e(nt,Ra),e(nt,uo),e(uo,Za),e(nt,Qa),e(H,Ya),e(H,Ho),e(Ho,Ja),_(t,Ln,g),_(t,X,g),e(X,Ga),e(X,at),e(at,Ka),e(X,es),e(X,st),e(st,ts),e(X,os),_(t,Vn,g),_(t,ee,g),e(ee,Ue),e(Ue,Xo),y(rt,Xo,null),e(ee,ns),e(ee,Ro),e(Ro,as),_(t,Nn,g),_(t,O,g),y(it,O,null),e(O,ss),e(O,te),e(te,rs),e(te,fo),e(fo,is),e(te,ls),e(te,lt),e(lt,cs),e(te,ds),e(O,ps),e(O,oe),e(oe,hs),e(oe,go),e(go,ms),e(oe,us),e(oe,_o),e(_o,fs),e(oe,gs),e(O,_s),y(Fe,O,null),_(t,Wn,g),_(t,ne,g),e(ne,xe),e(xe,Zo),y(ct,Zo,null),e(ne,vs),e(ne,Qo),e(Qo,Ss),_(t,In,g),_(t,ae,g),y(dt,ae,null),e(ae,bs),e(ae,pt),e(pt,ws),e(pt,Yo),e(Yo,ys),e(pt,$s),_(t,Bn,g),_(t,se,g),y(ht,se,null),e(se,ks),e(se,mt),e(mt,Ts),e(mt,Jo),e(Jo,Us),e(mt,Fs),_(t,Hn,g),_(t,re,g),e(re,Ce),e(Ce,Go),y(ut,Go,null),e(re,xs),e(re,Ko),e(Ko,Cs),_(t,Xn,g),_(t,q,g),y(ft,q,null),e(q,js),e(q,gt),e(gt,qs),e(gt,_t),e(_t,Es),e(gt,Ps),e(q,As),e(q,vt),e(vt,Ms),e(vt,vo),e(vo,zs),e(vt,Os),e(q,Ds),e(q,St),e(St,Ls),e(St,bt),e(bt,Vs),e(St,Ns),e(q,Ws),e(q,D),y(wt,D,null),e(D,Is),e(D,ie),e(ie,Bs),e(ie,So),e(So,Hs),e(ie,Xs),e(ie,en),e(en,Rs),e(ie,Zs),e(D,Qs),y(je,D,null),e(D,Ys),y(qe,D,null),_(t,Rn,g),_(t,le,g),e(le,Ee),e(Ee,tn),y(yt,tn,null),e(le,Js),e(le,on),e(on,Gs),_(t,Zn,g),_(t,E,g),y($t,E,null),e(E,Ks),e(E,ce),e(ce,er),e(ce,nn),e(nn,tr),e(ce,or),e(ce,kt),e(kt,nr),e(ce,ar),e(E,sr),e(E,Tt),e(Tt,rr),e(Tt,bo),e(bo,ir),e(Tt,lr),e(E,cr),e(E,Ut),e(Ut,dr),e(Ut,Ft),e(Ft,pr),e(Ut,hr),e(E,mr),e(E,M),y(xt,M,null),e(M,ur),e(M,de),e(de,fr),e(de,wo),e(wo,gr),e(de,_r),e(de,an),e(an,vr),e(de,Sr),e(M,br),y(Pe,M,null),e(M,wr),y(Ae,M,null),e(M,yr),y(Me,M,null),_(t,Qn,g),_(t,pe,g),e(pe,ze),e(ze,sn),y(Ct,sn,null),e(pe,$r),e(pe,rn),e(rn,kr),_(t,Yn,g),_(t,x,g),y(jt,x,null),e(x,Tr),e(x,ln),e(ln,Ur),e(x,Fr),e(x,qt),e(qt,xr),e(qt,Et),e(Et,Cr),e(qt,jr),e(x,qr),e(x,Pt),e(Pt,Er),e(Pt,yo),e(yo,Pr),e(Pt,Ar),e(x,Mr),e(x,At),e(At,zr),e(At,Mt),e(Mt,Or),e(At,Dr),e(x,Lr),e(x,z),y(zt,z,null),e(z,Vr),e(z,he),e(he,Nr),e(he,$o),e($o,Wr),e(he,Ir),e(he,cn),e(cn,Br),e(he,Hr),e(z,Xr),y(Oe,z,null),e(z,Rr),y(De,z,null),e(z,Zr),y(Le,z,null),_(t,Jn,g),_(t,me,g),e(me,Ve),e(Ve,dn),y(Ot,dn,null),e(me,Qr),e(me,pn),e(pn,Yr),_(t,Gn,g),_(t,C,g),y(Dt,C,null),e(C,Jr),e(C,hn),e(hn,Gr),e(C,Kr),e(C,Lt),e(Lt,ei),e(Lt,Vt),e(Vt,ti),e(Lt,oi),e(C,ni),e(C,Nt),e(Nt,ai),e(Nt,ko),e(ko,si),e(Nt,ri),e(C,ii),e(C,Wt),e(Wt,li),e(Wt,It),e(It,ci),e(Wt,di),e(C,pi),e(C,L),y(Bt,L,null),e(L,hi),e(L,ue),e(ue,mi),e(ue,To),e(To,ui),e(ue,fi),e(ue,mn),e(mn,gi),e(ue,_i),e(L,vi),y(Ne,L,null),e(L,Si),y(We,L,null),_(t,Kn,g),_(t,fe,g),e(fe,Ie),e(Ie,un),y(Ht,un,null),e(fe,bi),e(fe,fn),e(fn,wi),_(t,ea,g),_(t,j,g),y(Xt,j,null),e(j,yi),e(j,gn),e(gn,$i),e(j,ki),e(j,Rt),e(Rt,Ti),e(Rt,Zt),e(Zt,Ui),e(Rt,Fi),e(j,xi),e(j,Qt),e(Qt,Ci),e(Qt,Uo),e(Uo,ji),e(Qt,qi),e(j,Ei),e(j,Yt),e(Yt,Pi),e(Yt,Jt),e(Jt,Ai),e(Yt,Mi),e(j,zi),e(j,V),y(Gt,V,null),e(V,Oi),e(V,ge),e(ge,Di),e(ge,Fo),e(Fo,Li),e(ge,Vi),e(ge,_n),e(_n,Ni),e(ge,Wi),e(V,Ii),y(Be,V,null),e(V,Bi),y(He,V,null),_(t,ta,g),_(t,_e,g),e(_e,Xe),e(Xe,vn),y(Kt,vn,null),e(_e,Hi),e(_e,Sn),e(Sn,Xi),_(t,oa,g),_(t,P,g),y(eo,P,null),e(P,Ri),e(P,ve),e(ve,Zi),e(ve,bn),e(bn,Qi),e(ve,Yi),e(ve,to),e(to,Ji),e(ve,Gi),e(P,Ki),e(P,oo),e(oo,el),e(oo,xo),e(xo,tl),e(oo,ol),e(P,nl),e(P,no),e(no,al),e(no,ao),e(ao,sl),e(no,rl),e(P,il),e(P,N),y(so,N,null),e(N,ll),e(N,Se),e(Se,cl),e(Se,Co),e(Co,dl),e(Se,pl),e(Se,wn),e(wn,hl),e(Se,ml),e(N,ul),y(Re,N,null),e(N,fl),y(Ze,N,null),na=!0},p(t,[g]){const ro={};g&2&&(ro.$$scope={dirty:g,ctx:t}),Fe.$set(ro);const yn={};g&2&&(yn.$$scope={dirty:g,ctx:t}),je.$set(yn);const $n={};g&2&&($n.$$scope={dirty:g,ctx:t}),qe.$set($n);const kn={};g&2&&(kn.$$scope={dirty:g,ctx:t}),Pe.$set(kn);const io={};g&2&&(io.$$scope={dirty:g,ctx:t}),Ae.$set(io);const Tn={};g&2&&(Tn.$$scope={dirty:g,ctx:t}),Me.$set(Tn);const Un={};g&2&&(Un.$$scope={dirty:g,ctx:t}),Oe.$set(Un);const Fn={};g&2&&(Fn.$$scope={dirty:g,ctx:t}),De.$set(Fn);const lo={};g&2&&(lo.$$scope={dirty:g,ctx:t}),Le.$set(lo);const xn={};g&2&&(xn.$$scope={dirty:g,ctx:t}),Ne.$set(xn);const Cn={};g&2&&(Cn.$$scope={dirty:g,ctx:t}),We.$set(Cn);const jn={};g&2&&(jn.$$scope={dirty:g,ctx:t}),Be.$set(jn);const qn={};g&2&&(qn.$$scope={dirty:g,ctx:t}),He.$set(qn);const En={};g&2&&(En.$$scope={dirty:g,ctx:t}),Re.$set(En);const be={};g&2&&(be.$$scope={dirty:g,ctx:t}),Ze.$set(be)},i(t){na||($(l.$$.fragment,t),$(et.$$.fragment,t),$(rt.$$.fragment,t),$(it.$$.fragment,t),$(Fe.$$.fragment,t),$(ct.$$.fragment,t),$(dt.$$.fragment,t),$(ht.$$.fragment,t),$(ut.$$.fragment,t),$(ft.$$.fragment,t),$(wt.$$.fragment,t),$(je.$$.fragment,t),$(qe.$$.fragment,t),$(yt.$$.fragment,t),$($t.$$.fragment,t),$(xt.$$.fragment,t),$(Pe.$$.fragment,t),$(Ae.$$.fragment,t),$(Me.$$.fragment,t),$(Ct.$$.fragment,t),$(jt.$$.fragment,t),$(zt.$$.fragment,t),$(Oe.$$.fragment,t),$(De.$$.fragment,t),$(Le.$$.fragment,t),$(Ot.$$.fragment,t),$(Dt.$$.fragment,t),$(Bt.$$.fragment,t),$(Ne.$$.fragment,t),$(We.$$.fragment,t),$(Ht.$$.fragment,t),$(Xt.$$.fragment,t),$(Gt.$$.fragment,t),$(Be.$$.fragment,t),$(He.$$.fragment,t),$(Kt.$$.fragment,t),$(eo.$$.fragment,t),$(so.$$.fragment,t),$(Re.$$.fragment,t),$(Ze.$$.fragment,t),na=!0)},o(t){k(l.$$.fragment,t),k(et.$$.fragment,t),k(rt.$$.fragment,t),k(it.$$.fragment,t),k(Fe.$$.fragment,t),k(ct.$$.fragment,t),k(dt.$$.fragment,t),k(ht.$$.fragment,t),k(ut.$$.fragment,t),k(ft.$$.fragment,t),k(wt.$$.fragment,t),k(je.$$.fragment,t),k(qe.$$.fragment,t),k(yt.$$.fragment,t),k($t.$$.fragment,t),k(xt.$$.fragment,t),k(Pe.$$.fragment,t),k(Ae.$$.fragment,t),k(Me.$$.fragment,t),k(Ct.$$.fragment,t),k(jt.$$.fragment,t),k(zt.$$.fragment,t),k(Oe.$$.fragment,t),k(De.$$.fragment,t),k(Le.$$.fragment,t),k(Ot.$$.fragment,t),k(Dt.$$.fragment,t),k(Bt.$$.fragment,t),k(Ne.$$.fragment,t),k(We.$$.fragment,t),k(Ht.$$.fragment,t),k(Xt.$$.fragment,t),k(Gt.$$.fragment,t),k(Be.$$.fragment,t),k(He.$$.fragment,t),k(Kt.$$.fragment,t),k(eo.$$.fragment,t),k(so.$$.fragment,t),k(Re.$$.fragment,t),k(Ze.$$.fragment,t),na=!1},d(t){o(c),t&&o(v),t&&o(p),T(l),t&&o(Pn),t&&o(K),T(et),t&&o(An),t&&o(Te),t&&o(Mn),t&&o(co),t&&o(zn),t&&o(po),t&&o(On),t&&o(ho),t&&o(Dn),t&&o(H),t&&o(Ln),t&&o(X),t&&o(Vn),t&&o(ee),T(rt),t&&o(Nn),t&&o(O),T(it),T(Fe),t&&o(Wn),t&&o(ne),T(ct),t&&o(In),t&&o(ae),T(dt),t&&o(Bn),t&&o(se),T(ht),t&&o(Hn),t&&o(re),T(ut),t&&o(Xn),t&&o(q),T(ft),T(wt),T(je),T(qe),t&&o(Rn),t&&o(le),T(yt),t&&o(Zn),t&&o(E),T($t),T(xt),T(Pe),T(Ae),T(Me),t&&o(Qn),t&&o(pe),T(Ct),t&&o(Yn),t&&o(x),T(jt),T(zt),T(Oe),T(De),T(Le),t&&o(Jn),t&&o(me),T(Ot),t&&o(Gn),t&&o(C),T(Dt),T(Bt),T(Ne),T(We),t&&o(Kn),t&&o(fe),T(Ht),t&&o(ea),t&&o(j),T(Xt),T(Gt),T(Be),T(He),t&&o(ta),t&&o(_e),T(Kt),t&&o(oa),t&&o(P),T(eo),T(so),T(Re),T(Ze)}}}const Kc={local:"unispeechsat",sections:[{local:"overview",title:"Overview"},{local:"transformers.UniSpeechSatConfig",title:"UniSpeechSatConfig"},{local:"transformers.models.unispeech_sat.modeling_unispeech_sat.UniSpeechSatBaseModelOutput",title:"UniSpeechSat specific outputs"},{local:"transformers.UniSpeechSatModel",title:"UniSpeechSatModel"},{local:"transformers.UniSpeechSatForCTC",title:"UniSpeechSatForCTC"},{local:"transformers.UniSpeechSatForSequenceClassification",title:"UniSpeechSatForSequenceClassification"},{local:"transformers.UniSpeechSatForAudioFrameClassification",title:"UniSpeechSatForAudioFrameClassification"},{local:"transformers.UniSpeechSatForXVector",title:"UniSpeechSatForXVector"},{local:"transformers.UniSpeechSatForPreTraining",title:"UniSpeechSatForPreTraining"}],title:"UniSpeech-SAT"};function ed(U){return zc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class id extends Ec{constructor(c){super();Pc(this,c,ed,Gc,Ac,{})}}export{id as default,Kc as metadata};
