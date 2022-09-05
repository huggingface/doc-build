import{S as Mc,i as Ac,s as zc,e as n,k as f,w,t as r,M as Sc,c as s,d as t,m as p,a as i,x as C,h as a,b as d,G as e,g as _,y,q as k,o as $,B as T,v as Oc,L as ye}from"../../chunks/vendor-hf-doc-builder.js";import{T as Nt}from"../../chunks/Tip-hf-doc-builder.js";import{D as z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ke}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ee}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ce}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Dc(V){let c,v,m,u,b;return u=new ke({props:{code:`from transformers import Wav2Vec2ConformerModel, Wav2Vec2ConformerConfig

# Initializing a Wav2Vec2Conformer facebook/wav2vec2-conformer-large-rel-pos style configuration
configuration = Wav2Vec2ConformerConfig()

# Initializing a model from the facebook/wav2vec2-conformer-large-rel-pos style configuration
model = Wav2Vec2ConformerModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2ConformerModel, Wav2Vec2ConformerConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Wav2Vec2Conformer facebook/wav2vec2-conformer-large-rel-pos style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Wav2Vec2ConformerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/wav2vec2-conformer-large-rel-pos style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ConformerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=n("p"),v=r("Example:"),m=f(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=i(c);v=a(h,"Example:"),h.forEach(t),m=p(l),C(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,m,h),y(u,l,h),b=!0},p:ye,i(l){b||(k(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(m),T(u,l)}}}function Lc(V){let c,v,m,u,b;return{c(){c=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),u=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=i(c);v=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var W=i(m);u=a(W,"Module"),W.forEach(t),b=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,m),e(m,u),e(c,b)},d(l){l&&t(c)}}}function Nc(V){let c,v,m,u,b;return u=new ke({props:{code:`from transformers import Wav2Vec2Processor, Wav2Vec2ConformerModel
import torch
from datasets import load_dataset

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-conformer-rope-large-960h-ft")
model = Wav2Vec2ConformerModel.from_pretrained("facebook/wav2vec2-conformer-rope-large-960h-ft")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, Wav2Vec2ConformerModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-conformer-rope-large-960h-ft&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ConformerModel.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-conformer-rope-large-960h-ft&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">1024</span>]`}}),{c(){c=n("p"),v=r("Example:"),m=f(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=i(c);v=a(h,"Example:"),h.forEach(t),m=p(l),C(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,m,h),y(u,l,h),b=!0},p:ye,i(l){b||(k(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(m),T(u,l)}}}function Ic(V){let c,v,m,u,b;return{c(){c=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),u=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=i(c);v=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var W=i(m);u=a(W,"Module"),W.forEach(t),b=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,m),e(m,u),e(c,b)},d(l){l&&t(c)}}}function Xc(V){let c,v,m,u,b;return u=new ke({props:{code:`from transformers import Wav2Vec2Processor, Wav2Vec2ConformerForCTC
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-conformer-rope-large-960h-ft")
model = Wav2Vec2ConformerForCTC.from_pretrained("facebook/wav2vec2-conformer-rope-large-960h-ft")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)
transcription[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, Wav2Vec2ConformerForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-conformer-rope-large-960h-ft&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ConformerForCTC.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-conformer-rope-large-960h-ft&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>`}}),{c(){c=n("p"),v=r("Example:"),m=f(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=i(c);v=a(h,"Example:"),h.forEach(t),m=p(l),C(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,m,h),y(u,l,h),b=!0},p:ye,i(l){b||(k(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(m),T(u,l)}}}function Bc(V){let c,v;return c=new ke({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">64.21</span>`}}),{c(){w(c.$$.fragment)},l(m){C(c.$$.fragment,m)},m(m,u){y(c,m,u),v=!0},p:ye,i(m){v||(k(c.$$.fragment,m),v=!0)},o(m){$(c.$$.fragment,m),v=!1},d(m){T(c,m)}}}function Hc(V){let c,v,m,u,b;return{c(){c=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),u=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=i(c);v=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var W=i(m);u=a(W,"Module"),W.forEach(t),b=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,m),e(m,u),e(c,b)},d(l){l&&t(c)}}}function Rc(V){let c,v,m,u,b;return u=new ke({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ConformerForSequenceClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("hf-internal-testing/wav2vec2-conformer-seq-class")
model = Wav2Vec2ConformerForSequenceClassification.from_pretrained("hf-internal-testing/wav2vec2-conformer-seq-class")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_ids = torch.argmax(logits, dim=-1).item()
predicted_label = model.config.id2label[predicted_class_ids]
predicted_label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, Wav2Vec2ConformerForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/wav2vec2-conformer-seq-class&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ConformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/wav2vec2-conformer-seq-class&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){c=n("p"),v=r("Example:"),m=f(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=i(c);v=a(h,"Example:"),h.forEach(t),m=p(l),C(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,m,h),y(u,l,h),b=!0},p:ye,i(l){b||(k(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(m),T(u,l)}}}function Uc(V){let c,v;return c=new ke({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.68</span>`}}),{c(){w(c.$$.fragment)},l(m){C(c.$$.fragment,m)},m(m,u){y(c,m,u),v=!0},p:ye,i(m){v||(k(c.$$.fragment,m),v=!0)},o(m){$(c.$$.fragment,m),v=!1},d(m){T(c,m)}}}function Zc(V){let c,v,m,u,b;return{c(){c=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),u=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=i(c);v=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var W=i(m);u=a(W,"Module"),W.forEach(t),b=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,m),e(m,u),e(c,b)},d(l){l&&t(c)}}}function Qc(V){let c,v,m,u,b;return u=new ke({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ConformerForAudioFrameClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("hf-internal-testing/wav2vec2-conformer-frame-class")
model = Wav2Vec2ConformerForAudioFrameClassification.from_pretrained("hf-internal-testing/wav2vec2-conformer-frame-class")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], return_tensors="pt", sampling_rate=sampling_rate)
with torch.no_grad():
    logits = model(**inputs).logits

probabilities = torch.sigmoid(logits[0])
# labels is a one-hot array of shape (num_frames, num_speakers)
labels = (probabilities > 0.5).long()
labels[0].tolist()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, Wav2Vec2ConformerForAudioFrameClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/wav2vec2-conformer-frame-class&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ConformerForAudioFrameClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/wav2vec2-conformer-frame-class&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, sampling_rate=sampling_rate)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>probabilities = torch.sigmoid(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># labels is a one-hot array of shape (num_frames, num_speakers)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = (probabilities &gt; <span class="hljs-number">0.5</span>).long()
<span class="hljs-meta">&gt;&gt;&gt; </span>labels[<span class="hljs-number">0</span>].tolist()
[<span class="hljs-number">1</span>, <span class="hljs-number">0</span>]`}}),{c(){c=n("p"),v=r("Example:"),m=f(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=i(c);v=a(h,"Example:"),h.forEach(t),m=p(l),C(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,m,h),y(u,l,h),b=!0},p:ye,i(l){b||(k(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(m),T(u,l)}}}function Kc(V){let c,v,m,u,b;return{c(){c=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),u=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=i(c);v=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var W=i(m);u=a(W,"Module"),W.forEach(t),b=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,m),e(m,u),e(c,b)},d(l){l&&t(c)}}}function Gc(V){let c,v,m,u,b;return u=new ke({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ConformerForXVector
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("hf-internal-testing/wav2vec2-conformer-xvector")
model = Wav2Vec2ConformerForXVector.from_pretrained("hf-internal-testing/wav2vec2-conformer-xvector")

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
round(similarity.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, Wav2Vec2ConformerForXVector
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/wav2vec2-conformer-xvector&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ConformerForXVector.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/wav2vec2-conformer-xvector&quot;</span>)

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
<span class="hljs-number">1.0</span>`}}),{c(){c=n("p"),v=r("Example:"),m=f(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=i(c);v=a(h,"Example:"),h.forEach(t),m=p(l),C(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,m,h),y(u,l,h),b=!0},p:ye,i(l){b||(k(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(m),T(u,l)}}}function Jc(V){let c,v,m,u,b;return{c(){c=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),u=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=i(c);v=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var W=i(m);u=a(W,"Module"),W.forEach(t),b=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,m),e(m,u),e(c,b)},d(l){l&&t(c)}}}function Yc(V){let c,v,m,u,b;return u=new ke({props:{code:`import torch
from transformers import AutoFeatureExtractor, Wav2Vec2ConformerForPreTraining
from transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer import _compute_mask_indices
from datasets import load_dataset

feature_extractor = AutoFeatureExtractor.from_pretrained("facebook/wav2vec2-conformer-rel-pos-large")
model = Wav2Vec2ConformerForPreTraining.from_pretrained("facebook/wav2vec2-conformer-rel-pos-large")

ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
input_values = feature_extractor(ds[0]["audio"]["array"], return_tensors="pt").input_values  # Batch size 1

# compute masked indices
batch_size, raw_sequence_length = input_values.shape
sequence_length = model._get_feat_extract_output_lengths(raw_sequence_length)
mask_time_indices = _compute_mask_indices((batch_size, sequence_length), mask_prob=0.2, mask_length=2)
mask_time_indices = torch.tensor(mask_time_indices, device=input_values.device, dtype=torch.long)

with torch.no_grad():
    outputs = model(input_values, mask_time_indices=mask_time_indices)

# compute cosine similarity between predicted (=projected_states) and target (=projected_quantized_states)
cosine_sim = torch.cosine_similarity(outputs.projected_states, outputs.projected_quantized_states, dim=-1)

# show that cosine similarity is much higher than random
cosine_sim[mask_time_indices.to(torch.bool)].mean() > 0.5

# for contrastive loss training model should be put into train mode
model = model.train()
loss = model(input_values, mask_time_indices=mask_time_indices).loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, Wav2Vec2ConformerForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer <span class="hljs-keyword">import</span> _compute_mask_indices
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-conformer-rel-pos-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ConformerForPreTraining.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-conformer-rel-pos-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = feature_extractor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute masked indices</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>batch_size, raw_sequence_length = input_values.shape
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_length = model._get_feat_extract_output_lengths(raw_sequence_length)
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_time_indices = _compute_mask_indices((batch_size, sequence_length), mask_prob=<span class="hljs-number">0.2</span>, mask_length=<span class="hljs-number">2</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_time_indices = torch.tensor(mask_time_indices, device=input_values.device, dtype=torch.long)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(input_values, mask_time_indices=mask_time_indices)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute cosine similarity between predicted (=projected_states) and target (=projected_quantized_states)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>cosine_sim = torch.cosine_similarity(outputs.projected_states, outputs.projected_quantized_states, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># show that cosine similarity is much higher than random</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>cosine_sim[mask_time_indices.to(torch.<span class="hljs-built_in">bool</span>)].mean() &gt; <span class="hljs-number">0.5</span>
tensor(<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># for contrastive loss training model should be put into train mode</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = model.train()
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, mask_time_indices=mask_time_indices).loss`}}),{c(){c=n("p"),v=r("Example:"),m=f(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=i(c);v=a(h,"Example:"),h.forEach(t),m=p(l),C(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,m,h),y(u,l,h),b=!0},p:ye,i(l){b||(k(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(m),T(u,l)}}}function ed(V){let c,v,m,u,b,l,h,W,Fa,Er,oe,$e,It,to,xa,Xt,qa,Pr,Te,Ea,ro,Pa,Ma,Mr,ft,Aa,Ar,Ve,za,ao,Sa,Oa,zr,pt,Da,Sr,O,R,La,Bt,Na,Ia,Ht,Xa,Ba,no,Ha,Ra,Ua,Rt,Za,Qa,Ut,Ka,Ga,so,Ja,Zt,Ya,en,Or,Z,on,io,tn,rn,lo,an,nn,Dr,te,We,Qt,co,sn,Kt,ln,Lr,S,mo,cn,re,dn,ht,mn,fn,fo,pn,hn,un,ae,gn,ut,_n,vn,gt,bn,wn,Cn,je,Nr,ne,Fe,Gt,po,yn,Jt,kn,Ir,se,ho,$n,uo,Tn,_t,Vn,Wn,Xr,ie,xe,Yt,go,jn,er,Fn,Br,q,_o,xn,vo,qn,bo,En,Pn,Mn,wo,An,vt,zn,Sn,On,Co,Dn,yo,Ln,Nn,In,D,ko,Xn,le,Bn,bt,Hn,Rn,or,Un,Zn,Qn,qe,Kn,Ee,Hr,ce,Pe,tr,$o,Gn,rr,Jn,Rr,E,To,Yn,de,es,ar,os,ts,Vo,rs,as,ns,Wo,ss,wt,is,ls,cs,jo,ds,Fo,ms,fs,ps,M,xo,hs,me,us,Ct,gs,_s,nr,vs,bs,ws,Me,Cs,Ae,ys,ze,Ur,fe,Se,sr,qo,ks,ir,$s,Zr,j,Eo,Ts,lr,Vs,Ws,Po,js,Mo,Fs,xs,qs,Ao,Es,yt,Ps,Ms,As,zo,zs,So,Ss,Os,Ds,A,Oo,Ls,pe,Ns,kt,Is,Xs,cr,Bs,Hs,Rs,Oe,Us,De,Zs,Le,Qr,he,Ne,dr,Do,Qs,mr,Ks,Kr,F,Lo,Gs,fr,Js,Ys,No,ei,Io,oi,ti,ri,Xo,ai,$t,ni,si,ii,Bo,li,Ho,ci,di,mi,L,Ro,fi,ue,pi,Tt,hi,ui,pr,gi,_i,vi,Ie,bi,Xe,Gr,ge,Be,hr,Uo,wi,ur,Ci,Jr,x,Zo,yi,gr,ki,$i,Qo,Ti,Ko,Vi,Wi,ji,Go,Fi,Vt,xi,qi,Ei,Jo,Pi,Yo,Mi,Ai,zi,N,et,Si,_e,Oi,Wt,Di,Li,_r,Ni,Ii,Xi,He,Bi,Re,Yr,ve,Ue,vr,ot,Hi,br,Ri,ea,P,tt,Ui,be,Zi,wr,Qi,Ki,rt,Gi,Ji,Yi,at,el,jt,ol,tl,rl,nt,al,st,nl,sl,il,I,it,ll,we,cl,Ft,dl,ml,Cr,fl,pl,hl,Ze,ul,Qe,oa;return l=new ee({}),to=new ee({}),co=new ee({}),mo=new z({props:{name:"class transformers.Wav2Vec2ConformerConfig",anchor:"transformers.Wav2Vec2ConformerConfig",parameters:[{name:"vocab_size",val:" = None"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"feat_quantizer_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"num_codevectors_per_group",val:" = 320"},{name:"num_codevector_groups",val:" = 2"},{name:"contrastive_logits_temperature",val:" = 0.1"},{name:"num_negatives",val:" = 100"},{name:"codevector_dim",val:" = 256"},{name:"proj_codevector_dim",val:" = 256"},{name:"diversity_loss_weight",val:" = 0.1"},{name:"ctc_loss_reduction",val:" = 'sum'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"tdnn_dim",val:" = (512, 512, 512, 512, 1500)"},{name:"tdnn_kernel",val:" = (5, 3, 3, 1, 1)"},{name:"tdnn_dilation",val:" = (1, 2, 3, 1, 1)"},{name:"xvector_output_dim",val:" = 512"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"add_adapter",val:" = False"},{name:"adapter_kernel_size",val:" = 3"},{name:"adapter_stride",val:" = 2"},{name:"num_adapter_layers",val:" = 3"},{name:"output_hidden_size",val:" = None"},{name:"position_embeddings_type",val:" = 'relative'"},{name:"rotary_embedding_base",val:" = 10000"},{name:"max_source_positions",val:" = 5000"},{name:"conv_depthwise_kernel_size",val:" = 31"},{name:"conformer_conv_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Vocabulary size of the Wav2Vec2Conformer model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerModel">Wav2Vec2ConformerModel</a>. Vocabulary size of the
model. Defines the different tokens that can be represented by the <em>inputs_ids</em> passed to the forward
method of <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerModel">Wav2Vec2ConformerModel</a>.`,name:"vocab_size"},{anchor:"transformers.Wav2Vec2ConformerConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.Wav2Vec2ConformerConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.Wav2Vec2ConformerConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.Wav2Vec2ConformerConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.Wav2Vec2ConformerConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.Wav2Vec2ConformerConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.Wav2Vec2ConformerConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.Wav2Vec2ConformerConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForCTC">Wav2Vec2ConformerForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.Wav2Vec2ConformerConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.Wav2Vec2ConformerConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.Wav2Vec2ConformerConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.Wav2Vec2ConformerConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.Wav2Vec2ConformerConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.Wav2Vec2ConformerConfig.feat_quantizer_dropout",description:`<strong>feat_quantizer_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for quantized feature encoder states.`,name:"feat_quantizer_dropout"},{anchor:"transformers.Wav2Vec2ConformerConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.Wav2Vec2ConformerConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.Wav2Vec2ConformerConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 3, 3)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.Wav2Vec2ConformerConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.Wav2Vec2ConformerConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.Wav2Vec2ConformerConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.Wav2Vec2ConformerConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature encoder. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech
Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.Wav2Vec2ConformerConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask_time_prob<em>len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, </em>mask_time_prob<em> should be \`prob_vector_start</em>mask_time_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is True\`.`,name:"mask_time_prob"},{anchor:"transformers.Wav2Vec2ConformerConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.Wav2Vec2ConformerConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.Wav2Vec2ConformerConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask_feature_prob<em>len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, </em>mask_feature_prob<em> should be \`prob_vector_start</em>mask_feature_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is
True\`.`,name:"mask_feature_prob"},{anchor:"transformers.Wav2Vec2ConformerConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.Wav2Vec2ConformerConfig.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.Wav2Vec2ConformerConfig.num_codevectors_per_group",description:`<strong>num_codevectors_per_group</strong> (<code>int</code>, <em>optional</em>, defaults to 320) &#x2014;
Number of entries in each quantization codebook (group).`,name:"num_codevectors_per_group"},{anchor:"transformers.Wav2Vec2ConformerConfig.num_codevector_groups",description:`<strong>num_codevector_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of codevector groups for product codevector quantization.`,name:"num_codevector_groups"},{anchor:"transformers.Wav2Vec2ConformerConfig.contrastive_logits_temperature",description:`<strong>contrastive_logits_temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The temperature <em>kappa</em> in the contrastive loss.`,name:"contrastive_logits_temperature"},{anchor:"transformers.Wav2Vec2ConformerConfig.feat_quantizer_dropout",description:`<strong>feat_quantizer_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for the output of the feature encoder that&#x2019;s used by the quantizer.`,name:"feat_quantizer_dropout"},{anchor:"transformers.Wav2Vec2ConformerConfig.num_negatives",description:`<strong>num_negatives</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Number of negative samples for the contrastive loss.`,name:"num_negatives"},{anchor:"transformers.Wav2Vec2ConformerConfig.codevector_dim",description:`<strong>codevector_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the quantized feature vectors.`,name:"codevector_dim"},{anchor:"transformers.Wav2Vec2ConformerConfig.proj_codevector_dim",description:`<strong>proj_codevector_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the final projection of both the quantized and the transformer features.`,name:"proj_codevector_dim"},{anchor:"transformers.Wav2Vec2ConformerConfig.diversity_loss_weight",description:`<strong>diversity_loss_weight</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The weight of the codebook diversity loss component.`,name:"diversity_loss_weight"},{anchor:"transformers.Wav2Vec2ConformerConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;sum&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForCTC">Wav2Vec2ConformerForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.Wav2Vec2ConformerConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForCTC">Wav2Vec2ConformerForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.Wav2Vec2ConformerConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForSequenceClassification">Wav2Vec2ConformerForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.Wav2Vec2ConformerConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"},{anchor:"transformers.Wav2Vec2ConformerConfig.tdnn_dim",description:`<strong>tdnn_dim</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 1500)</code>) &#x2014;
A tuple of integers defining the number of output channels of each 1D convolutional layer in the <em>TDNN</em>
module of the <em>XVector</em> model. The length of <em>tdnn_dim</em> defines the number of <em>TDNN</em> layers.`,name:"tdnn_dim"},{anchor:"transformers.Wav2Vec2ConformerConfig.tdnn_kernel",description:`<strong>tdnn_kernel</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(5, 3, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_kernel</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_kernel"},{anchor:"transformers.Wav2Vec2ConformerConfig.tdnn_dilation",description:`<strong>tdnn_dilation</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(1, 2, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the dilation factor of each 1D convolutional layer in <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_dilation</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_dilation"},{anchor:"transformers.Wav2Vec2ConformerConfig.xvector_output_dim",description:`<strong>xvector_output_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the <em>XVector</em> embedding vectors.`,name:"xvector_output_dim"},{anchor:"transformers.Wav2Vec2ConformerConfig.add_adapter",description:`<strong>add_adapter</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether a convolutional network should be stacked on top of the Wav2Vec2Conformer Encoder. Can be very
useful for warm-starting Wav2Vec2Conformer for SpeechEncoderDecoder models.`,name:"add_adapter"},{anchor:"transformers.Wav2Vec2ConformerConfig.adapter_kernel_size",description:`<strong>adapter_kernel_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Kernel size of the convolutional layers in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"adapter_kernel_size"},{anchor:"transformers.Wav2Vec2ConformerConfig.adapter_stride",description:`<strong>adapter_stride</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Stride of the convolutional layers in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"adapter_stride"},{anchor:"transformers.Wav2Vec2ConformerConfig.num_adapter_layers",description:`<strong>num_adapter_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Number of convolutional layers that should be used in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"num_adapter_layers"},{anchor:"transformers.Wav2Vec2ConformerConfig.output_hidden_size",description:`<strong>output_hidden_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Dimensionality of the encoder output layer. If not defined, this defaults to <em>hidden-size</em>. Only relevant
if <code>add_adapter is True</code>.`,name:"output_hidden_size"},{anchor:"transformers.Wav2Vec2ConformerConfig.position_embeddings_type",description:`<strong>position_embeddings_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;relative&quot;</code>) &#x2014;
Can be specified to <code>relative</code> or <code>rotary</code> for relative or rotary position embeddings respectively. If left
<code>None</code> no relative position embedding is applied.`,name:"position_embeddings_type"},{anchor:"transformers.Wav2Vec2ConformerConfig.rotary_embedding_base",description:`<strong>rotary_embedding_base</strong> (<code>int</code>, <em>optional</em>, defaults to 10000) &#x2014;
If <code>&quot;rotary&quot;</code> position embeddings are used, defines the size of the embedding base.`,name:"rotary_embedding_base"},{anchor:"transformers.Wav2Vec2ConformerConfig.max_source_positions",description:`<strong>max_source_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 5000) &#x2014;
if <code>&quot;relative&quot;</code> position embeddings are used, defines the maximum source input positions.`,name:"max_source_positions"},{anchor:"transformers.Wav2Vec2ConformerConfig.conv_depthwise_kernel_size",description:`<strong>conv_depthwise_kernel_size</strong> (<code>int</code>, defaults to 31) &#x2014;
Kernel size of convolutional depthwise 1D layer in Conformer blocks.`,name:"conv_depthwise_kernel_size"},{anchor:"transformers.Wav2Vec2ConformerConfig.conformer_conv_dropout",description:`<strong>conformer_conv_dropout</strong> (<code>float</code>, defaults to 0.1) &#x2014;
The dropout probability for all convolutional layers in Conformer blocks.`,name:"conformer_conv_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/wav2vec2_conformer/configuration_wav2vec2_conformer.py#L33"}}),je=new Ce({props:{anchor:"transformers.Wav2Vec2ConformerConfig.example",$$slots:{default:[Dc]},$$scope:{ctx:V}}}),po=new ee({}),ho=new z({props:{name:"class transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput",anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"projected_states",val:": FloatTensor = None"},{name:"projected_quantized_states",val:": FloatTensor = None"},{name:"codevector_perplexity",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"contrastive_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"diversity_loss",val:": typing.Optional[torch.FloatTensor] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the contrastive loss (L_m) and the diversity loss (L_d) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official
paper</a> . (classification) loss.`,name:"loss"},{anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput.projected_states",description:`<strong>projected_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) &#x2014;
Hidden-states of the model projected to <em>config.proj_codevector_dim</em> that can be used to predict the masked
projected quantized states.`,name:"projected_states"},{anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput.projected_quantized_states",description:`<strong>projected_quantized_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) &#x2014;
Quantized extracted feature vectors projected to <em>config.proj_codevector_dim</em> representing the positive
target vectors for contrastive loss.`,name:"projected_quantized_states"},{anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"},{anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput.contrastive_loss",description:`<strong>contrastive_loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
The contrastive loss (L_m) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official paper</a> .`,name:"contrastive_loss"},{anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput.diversity_loss",description:`<strong>diversity_loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
The diversity loss (L_d) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official paper</a> .`,name:"diversity_loss"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L90"}}),go=new ee({}),_o=new z({props:{name:"class transformers.Wav2Vec2ConformerModel",anchor:"transformers.Wav2Vec2ConformerModel",parameters:[{name:"config",val:": Wav2Vec2ConformerConfig"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig">Wav2Vec2ConformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1252"}}),ko=new z({props:{name:"forward",anchor:"transformers.Wav2Vec2ConformerModel.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ConformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-conformer-large-rel-pos" rel="nofollow">wav2vec2_conformer-base</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ConformerModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ConformerModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ConformerModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1325",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig"
>Wav2Vec2ConformerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qe=new Nt({props:{$$slots:{default:[Lc]},$$scope:{ctx:V}}}),Ee=new Ce({props:{anchor:"transformers.Wav2Vec2ConformerModel.forward.example",$$slots:{default:[Nc]},$$scope:{ctx:V}}}),$o=new ee({}),To=new z({props:{name:"class transformers.Wav2Vec2ConformerForCTC",anchor:"transformers.Wav2Vec2ConformerForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig">Wav2Vec2ConformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1598"}}),xo=new z({props:{name:"forward",anchor:"transformers.Wav2Vec2ConformerForCTC.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ConformerForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-conformer-large-rel-pos" rel="nofollow">wav2vec2_conformer-base</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ConformerForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ConformerForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ConformerForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ConformerForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1629",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig"
>Wav2Vec2ConformerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Me=new Nt({props:{$$slots:{default:[Ic]},$$scope:{ctx:V}}}),Ae=new Ce({props:{anchor:"transformers.Wav2Vec2ConformerForCTC.forward.example",$$slots:{default:[Xc]},$$scope:{ctx:V}}}),ze=new Ce({props:{anchor:"transformers.Wav2Vec2ConformerForCTC.forward.example-2",$$slots:{default:[Bc]},$$scope:{ctx:V}}}),qo=new ee({}),Eo=new z({props:{name:"class transformers.Wav2Vec2ConformerForSequenceClassification",anchor:"transformers.Wav2Vec2ConformerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig">Wav2Vec2ConformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1719"}}),Oo=new z({props:{name:"forward",anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-conformer-large-rel-pos" rel="nofollow">wav2vec2_conformer-base</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1755",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig"
>Wav2Vec2ConformerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oe=new Nt({props:{$$slots:{default:[Hc]},$$scope:{ctx:V}}}),De=new Ce({props:{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward.example",$$slots:{default:[Rc]},$$scope:{ctx:V}}}),Le=new Ce({props:{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward.example-2",$$slots:{default:[Uc]},$$scope:{ctx:V}}}),Do=new ee({}),Lo=new z({props:{name:"class transformers.Wav2Vec2ConformerForAudioFrameClassification",anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig">Wav2Vec2ConformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1834"}}),Ro=new z({props:{name:"forward",anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-conformer-large-rel-pos" rel="nofollow">wav2vec2_conformer-base</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1870",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig"
>Wav2Vec2ConformerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ie=new Nt({props:{$$slots:{default:[Zc]},$$scope:{ctx:V}}}),Xe=new Ce({props:{anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.forward.example",$$slots:{default:[Qc]},$$scope:{ctx:V}}}),Uo=new ee({}),Zo=new z({props:{name:"class transformers.Wav2Vec2ConformerForXVector",anchor:"transformers.Wav2Vec2ConformerForXVector",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForXVector.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig">Wav2Vec2ConformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1991"}}),et=new z({props:{name:"forward",anchor:"transformers.Wav2Vec2ConformerForXVector.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForXVector.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ConformerForXVector.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-conformer-large-rel-pos" rel="nofollow">wav2vec2_conformer-base</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ConformerForXVector.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ConformerForXVector.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ConformerForXVector.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ConformerForXVector.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L2044",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.XVectorOutput"
>transformers.modeling_outputs.XVectorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig"
>Wav2Vec2ConformerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.XVectorOutput"
>transformers.modeling_outputs.XVectorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),He=new Nt({props:{$$slots:{default:[Kc]},$$scope:{ctx:V}}}),Re=new Ce({props:{anchor:"transformers.Wav2Vec2ConformerForXVector.forward.example",$$slots:{default:[Gc]},$$scope:{ctx:V}}}),ot=new ee({}),tt=new z({props:{name:"class transformers.Wav2Vec2ConformerForPreTraining",anchor:"transformers.Wav2Vec2ConformerForPreTraining",parameters:[{name:"config",val:": Wav2Vec2ConformerConfig"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig">Wav2Vec2ConformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1391"}}),it=new z({props:{name:"forward",anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.BoolTensor] = None"},{name:"sampled_negative_indices",val:": typing.Optional[torch.BoolTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-conformer-large-rel-pos" rel="nofollow">wav2vec2_conformer-base</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward.mask_time_indices",description:`<strong>mask_time_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices to mask extracted features for contrastive loss. When in training mode, model learns to predict
masked extracted features in <em>config.proj_codevector_dim</em> space.`,name:"mask_time_indices"},{anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward.sampled_negative_indices",description:`<strong>sampled_negative_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length, num_negatives)</code>, <em>optional</em>) &#x2014;
Indices indicating which quantized target vectors are used as negative sampled vectors in contrastive loss.
Required input for pre-training.`,name:"sampled_negative_indices"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1444",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput"
>transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig"
>Wav2Vec2ConformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the contrastive loss (L_m) and the diversity loss (L_d) as stated in the <a
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
<li>
<p><strong>contrastive_loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 The contrastive loss (L_m) as stated in the <a
  href="https://arxiv.org/pdf/2006.11477.pdf"
  rel="nofollow"
>official paper</a> .</p>
</li>
<li>
<p><strong>diversity_loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 The diversity loss (L_d) as stated in the <a
  href="https://arxiv.org/pdf/2006.11477.pdf"
  rel="nofollow"
>official paper</a> .</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput"
>transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ze=new Nt({props:{$$slots:{default:[Jc]},$$scope:{ctx:V}}}),Qe=new Ce({props:{anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward.example",$$slots:{default:[Yc]},$$scope:{ctx:V}}}),{c(){c=n("meta"),v=f(),m=n("h1"),u=n("a"),b=n("span"),w(l.$$.fragment),h=f(),W=n("span"),Fa=r("Wav2Vec2-Conformer"),Er=f(),oe=n("h2"),$e=n("a"),It=n("span"),w(to.$$.fragment),xa=f(),Xt=n("span"),qa=r("Overview"),Pr=f(),Te=n("p"),Ea=r("The Wav2Vec2-Conformer was added to an updated version of "),ro=n("a"),Pa=r("fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),Ma=r(" by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Sravya Popuri, Dmytro Okhonko, Juan Pino."),Mr=f(),ft=n("p"),Aa=r("The official results of the model can be found in Table 3 and Table 4 of the paper."),Ar=f(),Ve=n("p"),za=r("The Wav2Vec2-Conformer weights were released by the Meta AI team within the "),ao=n("a"),Sa=r("Fairseq library"),Oa=r("."),zr=f(),pt=n("p"),Da=r("Tips:"),Sr=f(),O=n("ul"),R=n("li"),La=r("Wav2Vec2-Conformer follows the same architecture as Wav2Vec2, but replaces the "),Bt=n("em"),Na=r("Attention"),Ia=r("-block with a "),Ht=n("em"),Xa=r("Conformer"),Ba=r(`-block
as introduced in `),no=n("a"),Ha=r("Conformer: Convolution-augmented Transformer for Speech Recognition"),Ra=r("."),Ua=f(),Rt=n("li"),Za=r(`For the same number of layers, Wav2Vec2-Conformer requires more parameters than Wav2Vec2, but also yields
an improved word error rate.`),Qa=f(),Ut=n("li"),Ka=r("Wav2Vec2-Conformer uses the same tokenizer and feature extractor as Wav2Vec2."),Ga=f(),so=n("li"),Ja=r(`Wav2Vec2-Conformer can use either no relative position embeddings, Transformer-XL-like position embeddings, or
rotary position embeddings by setting the correct `),Zt=n("code"),Ya=r("config.position_embeddings_type"),en=r("."),Or=f(),Z=n("p"),on=r("This model was contributed by "),io=n("a"),tn=r("patrickvonplaten"),rn=r(`.
The original code can be found `),lo=n("a"),an=r("here"),nn=r("."),Dr=f(),te=n("h2"),We=n("a"),Qt=n("span"),w(co.$$.fragment),sn=f(),Kt=n("span"),ln=r("Wav2Vec2ConformerConfig"),Lr=f(),S=n("div"),w(mo.$$.fragment),cn=f(),re=n("p"),dn=r("This is the configuration class to store the configuration of a "),ht=n("a"),mn=r("Wav2Vec2ConformerModel"),fn=r(`. It is used to
instantiate an Wav2Vec2Conformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Wav2Vec2Conformer
`),fo=n("a"),pn=r("facebook/wav2vec2-conformer-large-rel-pos"),hn=r(`
architecture.`),un=f(),ae=n("p"),gn=r("Configuration objects inherit from "),ut=n("a"),_n=r("PretrainedConfig"),vn=r(` and can be used to control the model outputs. Read the
documentation from `),gt=n("a"),bn=r("PretrainedConfig"),wn=r(" for more information."),Cn=f(),w(je.$$.fragment),Nr=f(),ne=n("h2"),Fe=n("a"),Gt=n("span"),w(po.$$.fragment),yn=f(),Jt=n("span"),kn=r("Wav2Vec2Conformer specific outputs"),Ir=f(),se=n("div"),w(ho.$$.fragment),$n=f(),uo=n("p"),Tn=r("Output type of "),_t=n("a"),Vn=r("Wav2Vec2ConformerForPreTraining"),Wn=r(", with potential hidden states and attentions."),Xr=f(),ie=n("h2"),xe=n("a"),Yt=n("span"),w(go.$$.fragment),jn=f(),er=n("span"),Fn=r("Wav2Vec2ConformerModel"),Br=f(),q=n("div"),w(_o.$$.fragment),xn=f(),vo=n("p"),qn=r(`The bare Wav2Vec2Conformer Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2Conformer was proposed in `),bo=n("a"),En=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Pn=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Mn=f(),wo=n("p"),An=r("This model inherits from "),vt=n("a"),zn=r("PreTrainedModel"),Sn=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),On=f(),Co=n("p"),Dn=r("This model is a PyTorch "),yo=n("a"),Ln=r("nn.Module"),Nn=r(` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),In=f(),D=n("div"),w(ko.$$.fragment),Xn=f(),le=n("p"),Bn=r("The "),bt=n("a"),Hn=r("Wav2Vec2ConformerModel"),Rn=r(" forward method, overrides the "),or=n("code"),Un=r("__call__"),Zn=r(" special method."),Qn=f(),w(qe.$$.fragment),Kn=f(),w(Ee.$$.fragment),Hr=f(),ce=n("h2"),Pe=n("a"),tr=n("span"),w($o.$$.fragment),Gn=f(),rr=n("span"),Jn=r("Wav2Vec2ConformerForCTC"),Rr=f(),E=n("div"),w(To.$$.fragment),Yn=f(),de=n("p"),es=r("Wav2Vec2Conformer Model with a "),ar=n("code"),os=r("language modeling"),ts=r(` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2Conformer was proposed in `),Vo=n("a"),rs=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),as=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),ns=f(),Wo=n("p"),ss=r("This model inherits from "),wt=n("a"),is=r("PreTrainedModel"),ls=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),cs=f(),jo=n("p"),ds=r("This model is a PyTorch "),Fo=n("a"),ms=r("nn.Module"),fs=r(` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),ps=f(),M=n("div"),w(xo.$$.fragment),hs=f(),me=n("p"),us=r("The "),Ct=n("a"),gs=r("Wav2Vec2ConformerForCTC"),_s=r(" forward method, overrides the "),nr=n("code"),vs=r("__call__"),bs=r(" special method."),ws=f(),w(Me.$$.fragment),Cs=f(),w(Ae.$$.fragment),ys=f(),w(ze.$$.fragment),Ur=f(),fe=n("h2"),Se=n("a"),sr=n("span"),w(qo.$$.fragment),ks=f(),ir=n("span"),$s=r("Wav2Vec2ConformerForSequenceClassification"),Zr=f(),j=n("div"),w(Eo.$$.fragment),Ts=f(),lr=n("p"),Vs=r(`Wav2Vec2Conformer Model with a sequence classification head on top (a linear layer over the pooled output) for
tasks like SUPERB Keyword Spotting.`),Ws=f(),Po=n("p"),js=r("Wav2Vec2Conformer was proposed in "),Mo=n("a"),Fs=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),xs=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),qs=f(),Ao=n("p"),Es=r("This model inherits from "),yt=n("a"),Ps=r("PreTrainedModel"),Ms=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),As=f(),zo=n("p"),zs=r("This model is a PyTorch "),So=n("a"),Ss=r("nn.Module"),Os=r(` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),Ds=f(),A=n("div"),w(Oo.$$.fragment),Ls=f(),pe=n("p"),Ns=r("The "),kt=n("a"),Is=r("Wav2Vec2ConformerForSequenceClassification"),Xs=r(" forward method, overrides the "),cr=n("code"),Bs=r("__call__"),Hs=r(" special method."),Rs=f(),w(Oe.$$.fragment),Us=f(),w(De.$$.fragment),Zs=f(),w(Le.$$.fragment),Qr=f(),he=n("h2"),Ne=n("a"),dr=n("span"),w(Do.$$.fragment),Qs=f(),mr=n("span"),Ks=r("Wav2Vec2ConformerForAudioFrameClassification"),Kr=f(),F=n("div"),w(Lo.$$.fragment),Gs=f(),fr=n("p"),Js=r("Wav2Vec2Conformer Model with a frame classification head on top for tasks like Speaker Diarization."),Ys=f(),No=n("p"),ei=r("Wav2Vec2Conformer was proposed in "),Io=n("a"),oi=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),ti=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),ri=f(),Xo=n("p"),ai=r("This model inherits from "),$t=n("a"),ni=r("PreTrainedModel"),si=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ii=f(),Bo=n("p"),li=r("This model is a PyTorch "),Ho=n("a"),ci=r("nn.Module"),di=r(` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),mi=f(),L=n("div"),w(Ro.$$.fragment),fi=f(),ue=n("p"),pi=r("The "),Tt=n("a"),hi=r("Wav2Vec2ConformerForAudioFrameClassification"),ui=r(" forward method, overrides the "),pr=n("code"),gi=r("__call__"),_i=r(" special method."),vi=f(),w(Ie.$$.fragment),bi=f(),w(Xe.$$.fragment),Gr=f(),ge=n("h2"),Be=n("a"),hr=n("span"),w(Uo.$$.fragment),wi=f(),ur=n("span"),Ci=r("Wav2Vec2ConformerForXVector"),Jr=f(),x=n("div"),w(Zo.$$.fragment),yi=f(),gr=n("p"),ki=r("Wav2Vec2Conformer Model with an XVector feature extraction head on top for tasks like Speaker Verification."),$i=f(),Qo=n("p"),Ti=r("Wav2Vec2Conformer was proposed in "),Ko=n("a"),Vi=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Wi=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),ji=f(),Go=n("p"),Fi=r("This model inherits from "),Vt=n("a"),xi=r("PreTrainedModel"),qi=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ei=f(),Jo=n("p"),Pi=r("This model is a PyTorch "),Yo=n("a"),Mi=r("nn.Module"),Ai=r(` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),zi=f(),N=n("div"),w(et.$$.fragment),Si=f(),_e=n("p"),Oi=r("The "),Wt=n("a"),Di=r("Wav2Vec2ConformerForXVector"),Li=r(" forward method, overrides the "),_r=n("code"),Ni=r("__call__"),Ii=r(" special method."),Xi=f(),w(He.$$.fragment),Bi=f(),w(Re.$$.fragment),Yr=f(),ve=n("h2"),Ue=n("a"),vr=n("span"),w(ot.$$.fragment),Hi=f(),br=n("span"),Ri=r("Wav2Vec2ConformerForPreTraining"),ea=f(),P=n("div"),w(tt.$$.fragment),Ui=f(),be=n("p"),Zi=r("Wav2Vec2Conformer Model with a quantizer and "),wr=n("code"),Qi=r("VQ"),Ki=r(` head on top.
Wav2Vec2Conformer was proposed in `),rt=n("a"),Gi=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Ji=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Yi=f(),at=n("p"),el=r("This model inherits from "),jt=n("a"),ol=r("PreTrainedModel"),tl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),rl=f(),nt=n("p"),al=r("This model is a PyTorch "),st=n("a"),nl=r("nn.Module"),sl=r(` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),il=f(),I=n("div"),w(it.$$.fragment),ll=f(),we=n("p"),cl=r("The "),Ft=n("a"),dl=r("Wav2Vec2ConformerForPreTraining"),ml=r(" forward method, overrides the "),Cr=n("code"),fl=r("__call__"),pl=r(" special method."),hl=f(),w(Ze.$$.fragment),ul=f(),w(Qe.$$.fragment),this.h()},l(o){const g=Sc('[data-svelte="svelte-1phssyn"]',document.head);c=s(g,"META",{name:!0,content:!0}),g.forEach(t),v=p(o),m=s(o,"H1",{class:!0});var lt=i(m);u=s(lt,"A",{id:!0,class:!0,href:!0});var yr=i(u);b=s(yr,"SPAN",{});var kr=i(b);C(l.$$.fragment,kr),kr.forEach(t),yr.forEach(t),h=p(lt),W=s(lt,"SPAN",{});var $r=i(W);Fa=a($r,"Wav2Vec2-Conformer"),$r.forEach(t),lt.forEach(t),Er=p(o),oe=s(o,"H2",{class:!0});var ct=i(oe);$e=s(ct,"A",{id:!0,class:!0,href:!0});var Tr=i($e);It=s(Tr,"SPAN",{});var Vr=i(It);C(to.$$.fragment,Vr),Vr.forEach(t),Tr.forEach(t),xa=p(ct),Xt=s(ct,"SPAN",{});var Wr=i(Xt);qa=a(Wr,"Overview"),Wr.forEach(t),ct.forEach(t),Pr=p(o),Te=s(o,"P",{});var dt=i(Te);Ea=a(dt,"The Wav2Vec2-Conformer was added to an updated version of "),ro=s(dt,"A",{href:!0,rel:!0});var jr=i(ro);Pa=a(jr,"fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),jr.forEach(t),Ma=a(dt," by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Sravya Popuri, Dmytro Okhonko, Juan Pino."),dt.forEach(t),Mr=p(o),ft=s(o,"P",{});var Fr=i(ft);Aa=a(Fr,"The official results of the model can be found in Table 3 and Table 4 of the paper."),Fr.forEach(t),Ar=p(o),Ve=s(o,"P",{});var mt=i(Ve);za=a(mt,"The Wav2Vec2-Conformer weights were released by the Meta AI team within the "),ao=s(mt,"A",{href:!0,rel:!0});var xr=i(ao);Sa=a(xr,"Fairseq library"),xr.forEach(t),Oa=a(mt,"."),mt.forEach(t),zr=p(o),pt=s(o,"P",{});var qr=i(pt);Da=a(qr,"Tips:"),qr.forEach(t),Sr=p(o),O=s(o,"UL",{});var U=i(O);R=s(U,"LI",{});var Ke=i(R);La=a(Ke,"Wav2Vec2-Conformer follows the same architecture as Wav2Vec2, but replaces the "),Bt=s(Ke,"EM",{});var gl=i(Bt);Na=a(gl,"Attention"),gl.forEach(t),Ia=a(Ke,"-block with a "),Ht=s(Ke,"EM",{});var _l=i(Ht);Xa=a(_l,"Conformer"),_l.forEach(t),Ba=a(Ke,`-block
as introduced in `),no=s(Ke,"A",{href:!0,rel:!0});var vl=i(no);Ha=a(vl,"Conformer: Convolution-augmented Transformer for Speech Recognition"),vl.forEach(t),Ra=a(Ke,"."),Ke.forEach(t),Ua=p(U),Rt=s(U,"LI",{});var bl=i(Rt);Za=a(bl,`For the same number of layers, Wav2Vec2-Conformer requires more parameters than Wav2Vec2, but also yields
an improved word error rate.`),bl.forEach(t),Qa=p(U),Ut=s(U,"LI",{});var wl=i(Ut);Ka=a(wl,"Wav2Vec2-Conformer uses the same tokenizer and feature extractor as Wav2Vec2."),wl.forEach(t),Ga=p(U),so=s(U,"LI",{});var ta=i(so);Ja=a(ta,`Wav2Vec2-Conformer can use either no relative position embeddings, Transformer-XL-like position embeddings, or
rotary position embeddings by setting the correct `),Zt=s(ta,"CODE",{});var Cl=i(Zt);Ya=a(Cl,"config.position_embeddings_type"),Cl.forEach(t),en=a(ta,"."),ta.forEach(t),U.forEach(t),Or=p(o),Z=s(o,"P",{});var xt=i(Z);on=a(xt,"This model was contributed by "),io=s(xt,"A",{href:!0,rel:!0});var yl=i(io);tn=a(yl,"patrickvonplaten"),yl.forEach(t),rn=a(xt,`.
The original code can be found `),lo=s(xt,"A",{href:!0,rel:!0});var kl=i(lo);an=a(kl,"here"),kl.forEach(t),nn=a(xt,"."),xt.forEach(t),Dr=p(o),te=s(o,"H2",{class:!0});var ra=i(te);We=s(ra,"A",{id:!0,class:!0,href:!0});var $l=i(We);Qt=s($l,"SPAN",{});var Tl=i(Qt);C(co.$$.fragment,Tl),Tl.forEach(t),$l.forEach(t),sn=p(ra),Kt=s(ra,"SPAN",{});var Vl=i(Kt);ln=a(Vl,"Wav2Vec2ConformerConfig"),Vl.forEach(t),ra.forEach(t),Lr=p(o),S=s(o,"DIV",{class:!0});var Ge=i(S);C(mo.$$.fragment,Ge),cn=p(Ge),re=s(Ge,"P",{});var qt=i(re);dn=a(qt,"This is the configuration class to store the configuration of a "),ht=s(qt,"A",{href:!0});var Wl=i(ht);mn=a(Wl,"Wav2Vec2ConformerModel"),Wl.forEach(t),fn=a(qt,`. It is used to
instantiate an Wav2Vec2Conformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Wav2Vec2Conformer
`),fo=s(qt,"A",{href:!0,rel:!0});var jl=i(fo);pn=a(jl,"facebook/wav2vec2-conformer-large-rel-pos"),jl.forEach(t),hn=a(qt,`
architecture.`),qt.forEach(t),un=p(Ge),ae=s(Ge,"P",{});var Et=i(ae);gn=a(Et,"Configuration objects inherit from "),ut=s(Et,"A",{href:!0});var Fl=i(ut);_n=a(Fl,"PretrainedConfig"),Fl.forEach(t),vn=a(Et,` and can be used to control the model outputs. Read the
documentation from `),gt=s(Et,"A",{href:!0});var xl=i(gt);bn=a(xl,"PretrainedConfig"),xl.forEach(t),wn=a(Et," for more information."),Et.forEach(t),Cn=p(Ge),C(je.$$.fragment,Ge),Ge.forEach(t),Nr=p(o),ne=s(o,"H2",{class:!0});var aa=i(ne);Fe=s(aa,"A",{id:!0,class:!0,href:!0});var ql=i(Fe);Gt=s(ql,"SPAN",{});var El=i(Gt);C(po.$$.fragment,El),El.forEach(t),ql.forEach(t),yn=p(aa),Jt=s(aa,"SPAN",{});var Pl=i(Jt);kn=a(Pl,"Wav2Vec2Conformer specific outputs"),Pl.forEach(t),aa.forEach(t),Ir=p(o),se=s(o,"DIV",{class:!0});var na=i(se);C(ho.$$.fragment,na),$n=p(na),uo=s(na,"P",{});var sa=i(uo);Tn=a(sa,"Output type of "),_t=s(sa,"A",{href:!0});var Ml=i(_t);Vn=a(Ml,"Wav2Vec2ConformerForPreTraining"),Ml.forEach(t),Wn=a(sa,", with potential hidden states and attentions."),sa.forEach(t),na.forEach(t),Xr=p(o),ie=s(o,"H2",{class:!0});var ia=i(ie);xe=s(ia,"A",{id:!0,class:!0,href:!0});var Al=i(xe);Yt=s(Al,"SPAN",{});var zl=i(Yt);C(go.$$.fragment,zl),zl.forEach(t),Al.forEach(t),jn=p(ia),er=s(ia,"SPAN",{});var Sl=i(er);Fn=a(Sl,"Wav2Vec2ConformerModel"),Sl.forEach(t),ia.forEach(t),Br=p(o),q=s(o,"DIV",{class:!0});var Q=i(q);C(_o.$$.fragment,Q),xn=p(Q),vo=s(Q,"P",{});var la=i(vo);qn=a(la,`The bare Wav2Vec2Conformer Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2Conformer was proposed in `),bo=s(la,"A",{href:!0,rel:!0});var Ol=i(bo);En=a(Ol,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Ol.forEach(t),Pn=a(la,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),la.forEach(t),Mn=p(Q),wo=s(Q,"P",{});var ca=i(wo);An=a(ca,"This model inherits from "),vt=s(ca,"A",{href:!0});var Dl=i(vt);zn=a(Dl,"PreTrainedModel"),Dl.forEach(t),Sn=a(ca,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ca.forEach(t),On=p(Q),Co=s(Q,"P",{});var da=i(Co);Dn=a(da,"This model is a PyTorch "),yo=s(da,"A",{href:!0,rel:!0});var Ll=i(yo);Ln=a(Ll,"nn.Module"),Ll.forEach(t),Nn=a(da,` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),da.forEach(t),In=p(Q),D=s(Q,"DIV",{class:!0});var Je=i(D);C(ko.$$.fragment,Je),Xn=p(Je),le=s(Je,"P",{});var Pt=i(le);Bn=a(Pt,"The "),bt=s(Pt,"A",{href:!0});var Nl=i(bt);Hn=a(Nl,"Wav2Vec2ConformerModel"),Nl.forEach(t),Rn=a(Pt," forward method, overrides the "),or=s(Pt,"CODE",{});var Il=i(or);Un=a(Il,"__call__"),Il.forEach(t),Zn=a(Pt," special method."),Pt.forEach(t),Qn=p(Je),C(qe.$$.fragment,Je),Kn=p(Je),C(Ee.$$.fragment,Je),Je.forEach(t),Q.forEach(t),Hr=p(o),ce=s(o,"H2",{class:!0});var ma=i(ce);Pe=s(ma,"A",{id:!0,class:!0,href:!0});var Xl=i(Pe);tr=s(Xl,"SPAN",{});var Bl=i(tr);C($o.$$.fragment,Bl),Bl.forEach(t),Xl.forEach(t),Gn=p(ma),rr=s(ma,"SPAN",{});var Hl=i(rr);Jn=a(Hl,"Wav2Vec2ConformerForCTC"),Hl.forEach(t),ma.forEach(t),Rr=p(o),E=s(o,"DIV",{class:!0});var K=i(E);C(To.$$.fragment,K),Yn=p(K),de=s(K,"P",{});var Mt=i(de);es=a(Mt,"Wav2Vec2Conformer Model with a "),ar=s(Mt,"CODE",{});var Rl=i(ar);os=a(Rl,"language modeling"),Rl.forEach(t),ts=a(Mt,` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2Conformer was proposed in `),Vo=s(Mt,"A",{href:!0,rel:!0});var Ul=i(Vo);rs=a(Ul,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Ul.forEach(t),as=a(Mt,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Mt.forEach(t),ns=p(K),Wo=s(K,"P",{});var fa=i(Wo);ss=a(fa,"This model inherits from "),wt=s(fa,"A",{href:!0});var Zl=i(wt);is=a(Zl,"PreTrainedModel"),Zl.forEach(t),ls=a(fa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),fa.forEach(t),cs=p(K),jo=s(K,"P",{});var pa=i(jo);ds=a(pa,"This model is a PyTorch "),Fo=s(pa,"A",{href:!0,rel:!0});var Ql=i(Fo);ms=a(Ql,"nn.Module"),Ql.forEach(t),fs=a(pa,` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),pa.forEach(t),ps=p(K),M=s(K,"DIV",{class:!0});var G=i(M);C(xo.$$.fragment,G),hs=p(G),me=s(G,"P",{});var At=i(me);us=a(At,"The "),Ct=s(At,"A",{href:!0});var Kl=i(Ct);gs=a(Kl,"Wav2Vec2ConformerForCTC"),Kl.forEach(t),_s=a(At," forward method, overrides the "),nr=s(At,"CODE",{});var Gl=i(nr);vs=a(Gl,"__call__"),Gl.forEach(t),bs=a(At," special method."),At.forEach(t),ws=p(G),C(Me.$$.fragment,G),Cs=p(G),C(Ae.$$.fragment,G),ys=p(G),C(ze.$$.fragment,G),G.forEach(t),K.forEach(t),Ur=p(o),fe=s(o,"H2",{class:!0});var ha=i(fe);Se=s(ha,"A",{id:!0,class:!0,href:!0});var Jl=i(Se);sr=s(Jl,"SPAN",{});var Yl=i(sr);C(qo.$$.fragment,Yl),Yl.forEach(t),Jl.forEach(t),ks=p(ha),ir=s(ha,"SPAN",{});var ec=i(ir);$s=a(ec,"Wav2Vec2ConformerForSequenceClassification"),ec.forEach(t),ha.forEach(t),Zr=p(o),j=s(o,"DIV",{class:!0});var X=i(j);C(Eo.$$.fragment,X),Ts=p(X),lr=s(X,"P",{});var oc=i(lr);Vs=a(oc,`Wav2Vec2Conformer Model with a sequence classification head on top (a linear layer over the pooled output) for
tasks like SUPERB Keyword Spotting.`),oc.forEach(t),Ws=p(X),Po=s(X,"P",{});var ua=i(Po);js=a(ua,"Wav2Vec2Conformer was proposed in "),Mo=s(ua,"A",{href:!0,rel:!0});var tc=i(Mo);Fs=a(tc,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),tc.forEach(t),xs=a(ua,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),ua.forEach(t),qs=p(X),Ao=s(X,"P",{});var ga=i(Ao);Es=a(ga,"This model inherits from "),yt=s(ga,"A",{href:!0});var rc=i(yt);Ps=a(rc,"PreTrainedModel"),rc.forEach(t),Ms=a(ga,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ga.forEach(t),As=p(X),zo=s(X,"P",{});var _a=i(zo);zs=a(_a,"This model is a PyTorch "),So=s(_a,"A",{href:!0,rel:!0});var ac=i(So);Ss=a(ac,"nn.Module"),ac.forEach(t),Os=a(_a,` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),_a.forEach(t),Ds=p(X),A=s(X,"DIV",{class:!0});var J=i(A);C(Oo.$$.fragment,J),Ls=p(J),pe=s(J,"P",{});var zt=i(pe);Ns=a(zt,"The "),kt=s(zt,"A",{href:!0});var nc=i(kt);Is=a(nc,"Wav2Vec2ConformerForSequenceClassification"),nc.forEach(t),Xs=a(zt," forward method, overrides the "),cr=s(zt,"CODE",{});var sc=i(cr);Bs=a(sc,"__call__"),sc.forEach(t),Hs=a(zt," special method."),zt.forEach(t),Rs=p(J),C(Oe.$$.fragment,J),Us=p(J),C(De.$$.fragment,J),Zs=p(J),C(Le.$$.fragment,J),J.forEach(t),X.forEach(t),Qr=p(o),he=s(o,"H2",{class:!0});var va=i(he);Ne=s(va,"A",{id:!0,class:!0,href:!0});var ic=i(Ne);dr=s(ic,"SPAN",{});var lc=i(dr);C(Do.$$.fragment,lc),lc.forEach(t),ic.forEach(t),Qs=p(va),mr=s(va,"SPAN",{});var cc=i(mr);Ks=a(cc,"Wav2Vec2ConformerForAudioFrameClassification"),cc.forEach(t),va.forEach(t),Kr=p(o),F=s(o,"DIV",{class:!0});var B=i(F);C(Lo.$$.fragment,B),Gs=p(B),fr=s(B,"P",{});var dc=i(fr);Js=a(dc,"Wav2Vec2Conformer Model with a frame classification head on top for tasks like Speaker Diarization."),dc.forEach(t),Ys=p(B),No=s(B,"P",{});var ba=i(No);ei=a(ba,"Wav2Vec2Conformer was proposed in "),Io=s(ba,"A",{href:!0,rel:!0});var mc=i(Io);oi=a(mc,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),mc.forEach(t),ti=a(ba,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),ba.forEach(t),ri=p(B),Xo=s(B,"P",{});var wa=i(Xo);ai=a(wa,"This model inherits from "),$t=s(wa,"A",{href:!0});var fc=i($t);ni=a(fc,"PreTrainedModel"),fc.forEach(t),si=a(wa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),wa.forEach(t),ii=p(B),Bo=s(B,"P",{});var Ca=i(Bo);li=a(Ca,"This model is a PyTorch "),Ho=s(Ca,"A",{href:!0,rel:!0});var pc=i(Ho);ci=a(pc,"nn.Module"),pc.forEach(t),di=a(Ca,` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),Ca.forEach(t),mi=p(B),L=s(B,"DIV",{class:!0});var Ye=i(L);C(Ro.$$.fragment,Ye),fi=p(Ye),ue=s(Ye,"P",{});var St=i(ue);pi=a(St,"The "),Tt=s(St,"A",{href:!0});var hc=i(Tt);hi=a(hc,"Wav2Vec2ConformerForAudioFrameClassification"),hc.forEach(t),ui=a(St," forward method, overrides the "),pr=s(St,"CODE",{});var uc=i(pr);gi=a(uc,"__call__"),uc.forEach(t),_i=a(St," special method."),St.forEach(t),vi=p(Ye),C(Ie.$$.fragment,Ye),bi=p(Ye),C(Xe.$$.fragment,Ye),Ye.forEach(t),B.forEach(t),Gr=p(o),ge=s(o,"H2",{class:!0});var ya=i(ge);Be=s(ya,"A",{id:!0,class:!0,href:!0});var gc=i(Be);hr=s(gc,"SPAN",{});var _c=i(hr);C(Uo.$$.fragment,_c),_c.forEach(t),gc.forEach(t),wi=p(ya),ur=s(ya,"SPAN",{});var vc=i(ur);Ci=a(vc,"Wav2Vec2ConformerForXVector"),vc.forEach(t),ya.forEach(t),Jr=p(o),x=s(o,"DIV",{class:!0});var H=i(x);C(Zo.$$.fragment,H),yi=p(H),gr=s(H,"P",{});var bc=i(gr);ki=a(bc,"Wav2Vec2Conformer Model with an XVector feature extraction head on top for tasks like Speaker Verification."),bc.forEach(t),$i=p(H),Qo=s(H,"P",{});var ka=i(Qo);Ti=a(ka,"Wav2Vec2Conformer was proposed in "),Ko=s(ka,"A",{href:!0,rel:!0});var wc=i(Ko);Vi=a(wc,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),wc.forEach(t),Wi=a(ka,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),ka.forEach(t),ji=p(H),Go=s(H,"P",{});var $a=i(Go);Fi=a($a,"This model inherits from "),Vt=s($a,"A",{href:!0});var Cc=i(Vt);xi=a(Cc,"PreTrainedModel"),Cc.forEach(t),qi=a($a,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),$a.forEach(t),Ei=p(H),Jo=s(H,"P",{});var Ta=i(Jo);Pi=a(Ta,"This model is a PyTorch "),Yo=s(Ta,"A",{href:!0,rel:!0});var yc=i(Yo);Mi=a(yc,"nn.Module"),yc.forEach(t),Ai=a(Ta,` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),Ta.forEach(t),zi=p(H),N=s(H,"DIV",{class:!0});var eo=i(N);C(et.$$.fragment,eo),Si=p(eo),_e=s(eo,"P",{});var Ot=i(_e);Oi=a(Ot,"The "),Wt=s(Ot,"A",{href:!0});var kc=i(Wt);Di=a(kc,"Wav2Vec2ConformerForXVector"),kc.forEach(t),Li=a(Ot," forward method, overrides the "),_r=s(Ot,"CODE",{});var $c=i(_r);Ni=a($c,"__call__"),$c.forEach(t),Ii=a(Ot," special method."),Ot.forEach(t),Xi=p(eo),C(He.$$.fragment,eo),Bi=p(eo),C(Re.$$.fragment,eo),eo.forEach(t),H.forEach(t),Yr=p(o),ve=s(o,"H2",{class:!0});var Va=i(ve);Ue=s(Va,"A",{id:!0,class:!0,href:!0});var Tc=i(Ue);vr=s(Tc,"SPAN",{});var Vc=i(vr);C(ot.$$.fragment,Vc),Vc.forEach(t),Tc.forEach(t),Hi=p(Va),br=s(Va,"SPAN",{});var Wc=i(br);Ri=a(Wc,"Wav2Vec2ConformerForPreTraining"),Wc.forEach(t),Va.forEach(t),ea=p(o),P=s(o,"DIV",{class:!0});var Y=i(P);C(tt.$$.fragment,Y),Ui=p(Y),be=s(Y,"P",{});var Dt=i(be);Zi=a(Dt,"Wav2Vec2Conformer Model with a quantizer and "),wr=s(Dt,"CODE",{});var jc=i(wr);Qi=a(jc,"VQ"),jc.forEach(t),Ki=a(Dt,` head on top.
Wav2Vec2Conformer was proposed in `),rt=s(Dt,"A",{href:!0,rel:!0});var Fc=i(rt);Gi=a(Fc,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Fc.forEach(t),Ji=a(Dt,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Dt.forEach(t),Yi=p(Y),at=s(Y,"P",{});var Wa=i(at);el=a(Wa,"This model inherits from "),jt=s(Wa,"A",{href:!0});var xc=i(jt);ol=a(xc,"PreTrainedModel"),xc.forEach(t),tl=a(Wa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Wa.forEach(t),rl=p(Y),nt=s(Y,"P",{});var ja=i(nt);al=a(ja,"This model is a PyTorch "),st=s(ja,"A",{href:!0,rel:!0});var qc=i(st);nl=a(qc,"nn.Module"),qc.forEach(t),sl=a(ja,` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),ja.forEach(t),il=p(Y),I=s(Y,"DIV",{class:!0});var oo=i(I);C(it.$$.fragment,oo),ll=p(oo),we=s(oo,"P",{});var Lt=i(we);cl=a(Lt,"The "),Ft=s(Lt,"A",{href:!0});var Ec=i(Ft);dl=a(Ec,"Wav2Vec2ConformerForPreTraining"),Ec.forEach(t),ml=a(Lt," forward method, overrides the "),Cr=s(Lt,"CODE",{});var Pc=i(Cr);fl=a(Pc,"__call__"),Pc.forEach(t),pl=a(Lt," special method."),Lt.forEach(t),hl=p(oo),C(Ze.$$.fragment,oo),ul=p(oo),C(Qe.$$.fragment,oo),oo.forEach(t),Y.forEach(t),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(od)),d(u,"id","wav2vec2conformer"),d(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(u,"href","#wav2vec2conformer"),d(m,"class","relative group"),d($e,"id","overview"),d($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d($e,"href","#overview"),d(oe,"class","relative group"),d(ro,"href","https://arxiv.org/abs/2010.05171"),d(ro,"rel","nofollow"),d(ao,"href","https://github.com/pytorch/fairseq/blob/main/examples/wav2vec/README.md#pre-trained-models"),d(ao,"rel","nofollow"),d(no,"href","https://arxiv.org/abs/2005.08100"),d(no,"rel","nofollow"),d(io,"href","https://huggingface.co/patrickvonplaten"),d(io,"rel","nofollow"),d(lo,"href","https://github.com/pytorch/fairseq/tree/main/examples/wav2vec"),d(lo,"rel","nofollow"),d(We,"id","transformers.Wav2Vec2ConformerConfig"),d(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(We,"href","#transformers.Wav2Vec2ConformerConfig"),d(te,"class","relative group"),d(ht,"href","/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerModel"),d(fo,"href","https://huggingface.co/facebook/wav2vec2-conformer-large-rel-pos"),d(fo,"rel","nofollow"),d(ut,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),d(gt,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),d(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Fe,"id","transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput"),d(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Fe,"href","#transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput"),d(ne,"class","relative group"),d(_t,"href","/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForPreTraining"),d(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(xe,"id","transformers.Wav2Vec2ConformerModel"),d(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(xe,"href","#transformers.Wav2Vec2ConformerModel"),d(ie,"class","relative group"),d(bo,"href","https://arxiv.org/abs/2006.11477"),d(bo,"rel","nofollow"),d(vt,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),d(yo,"href","https://pytorch.org/docs/stable/nn.html#nn.Module"),d(yo,"rel","nofollow"),d(bt,"href","/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerModel"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Pe,"id","transformers.Wav2Vec2ConformerForCTC"),d(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Pe,"href","#transformers.Wav2Vec2ConformerForCTC"),d(ce,"class","relative group"),d(Vo,"href","https://arxiv.org/abs/2006.11477"),d(Vo,"rel","nofollow"),d(wt,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),d(Fo,"href","https://pytorch.org/docs/stable/nn.html#nn.Module"),d(Fo,"rel","nofollow"),d(Ct,"href","/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForCTC"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Se,"id","transformers.Wav2Vec2ConformerForSequenceClassification"),d(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Se,"href","#transformers.Wav2Vec2ConformerForSequenceClassification"),d(fe,"class","relative group"),d(Mo,"href","https://arxiv.org/abs/2006.11477"),d(Mo,"rel","nofollow"),d(yt,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),d(So,"href","https://pytorch.org/docs/stable/nn.html#nn.Module"),d(So,"rel","nofollow"),d(kt,"href","/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForSequenceClassification"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ne,"id","transformers.Wav2Vec2ConformerForAudioFrameClassification"),d(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ne,"href","#transformers.Wav2Vec2ConformerForAudioFrameClassification"),d(he,"class","relative group"),d(Io,"href","https://arxiv.org/abs/2006.11477"),d(Io,"rel","nofollow"),d($t,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),d(Ho,"href","https://pytorch.org/docs/stable/nn.html#nn.Module"),d(Ho,"rel","nofollow"),d(Tt,"href","/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForAudioFrameClassification"),d(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Be,"id","transformers.Wav2Vec2ConformerForXVector"),d(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Be,"href","#transformers.Wav2Vec2ConformerForXVector"),d(ge,"class","relative group"),d(Ko,"href","https://arxiv.org/abs/2006.11477"),d(Ko,"rel","nofollow"),d(Vt,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),d(Yo,"href","https://pytorch.org/docs/stable/nn.html#nn.Module"),d(Yo,"rel","nofollow"),d(Wt,"href","/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForXVector"),d(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ue,"id","transformers.Wav2Vec2ConformerForPreTraining"),d(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ue,"href","#transformers.Wav2Vec2ConformerForPreTraining"),d(ve,"class","relative group"),d(rt,"href","https://arxiv.org/abs/2006.11477"),d(rt,"rel","nofollow"),d(jt,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),d(st,"href","https://pytorch.org/docs/stable/nn.html#nn.Module"),d(st,"rel","nofollow"),d(Ft,"href","/docs/transformers/v4.21.3/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForPreTraining"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,c),_(o,v,g),_(o,m,g),e(m,u),e(u,b),y(l,b,null),e(m,h),e(m,W),e(W,Fa),_(o,Er,g),_(o,oe,g),e(oe,$e),e($e,It),y(to,It,null),e(oe,xa),e(oe,Xt),e(Xt,qa),_(o,Pr,g),_(o,Te,g),e(Te,Ea),e(Te,ro),e(ro,Pa),e(Te,Ma),_(o,Mr,g),_(o,ft,g),e(ft,Aa),_(o,Ar,g),_(o,Ve,g),e(Ve,za),e(Ve,ao),e(ao,Sa),e(Ve,Oa),_(o,zr,g),_(o,pt,g),e(pt,Da),_(o,Sr,g),_(o,O,g),e(O,R),e(R,La),e(R,Bt),e(Bt,Na),e(R,Ia),e(R,Ht),e(Ht,Xa),e(R,Ba),e(R,no),e(no,Ha),e(R,Ra),e(O,Ua),e(O,Rt),e(Rt,Za),e(O,Qa),e(O,Ut),e(Ut,Ka),e(O,Ga),e(O,so),e(so,Ja),e(so,Zt),e(Zt,Ya),e(so,en),_(o,Or,g),_(o,Z,g),e(Z,on),e(Z,io),e(io,tn),e(Z,rn),e(Z,lo),e(lo,an),e(Z,nn),_(o,Dr,g),_(o,te,g),e(te,We),e(We,Qt),y(co,Qt,null),e(te,sn),e(te,Kt),e(Kt,ln),_(o,Lr,g),_(o,S,g),y(mo,S,null),e(S,cn),e(S,re),e(re,dn),e(re,ht),e(ht,mn),e(re,fn),e(re,fo),e(fo,pn),e(re,hn),e(S,un),e(S,ae),e(ae,gn),e(ae,ut),e(ut,_n),e(ae,vn),e(ae,gt),e(gt,bn),e(ae,wn),e(S,Cn),y(je,S,null),_(o,Nr,g),_(o,ne,g),e(ne,Fe),e(Fe,Gt),y(po,Gt,null),e(ne,yn),e(ne,Jt),e(Jt,kn),_(o,Ir,g),_(o,se,g),y(ho,se,null),e(se,$n),e(se,uo),e(uo,Tn),e(uo,_t),e(_t,Vn),e(uo,Wn),_(o,Xr,g),_(o,ie,g),e(ie,xe),e(xe,Yt),y(go,Yt,null),e(ie,jn),e(ie,er),e(er,Fn),_(o,Br,g),_(o,q,g),y(_o,q,null),e(q,xn),e(q,vo),e(vo,qn),e(vo,bo),e(bo,En),e(vo,Pn),e(q,Mn),e(q,wo),e(wo,An),e(wo,vt),e(vt,zn),e(wo,Sn),e(q,On),e(q,Co),e(Co,Dn),e(Co,yo),e(yo,Ln),e(Co,Nn),e(q,In),e(q,D),y(ko,D,null),e(D,Xn),e(D,le),e(le,Bn),e(le,bt),e(bt,Hn),e(le,Rn),e(le,or),e(or,Un),e(le,Zn),e(D,Qn),y(qe,D,null),e(D,Kn),y(Ee,D,null),_(o,Hr,g),_(o,ce,g),e(ce,Pe),e(Pe,tr),y($o,tr,null),e(ce,Gn),e(ce,rr),e(rr,Jn),_(o,Rr,g),_(o,E,g),y(To,E,null),e(E,Yn),e(E,de),e(de,es),e(de,ar),e(ar,os),e(de,ts),e(de,Vo),e(Vo,rs),e(de,as),e(E,ns),e(E,Wo),e(Wo,ss),e(Wo,wt),e(wt,is),e(Wo,ls),e(E,cs),e(E,jo),e(jo,ds),e(jo,Fo),e(Fo,ms),e(jo,fs),e(E,ps),e(E,M),y(xo,M,null),e(M,hs),e(M,me),e(me,us),e(me,Ct),e(Ct,gs),e(me,_s),e(me,nr),e(nr,vs),e(me,bs),e(M,ws),y(Me,M,null),e(M,Cs),y(Ae,M,null),e(M,ys),y(ze,M,null),_(o,Ur,g),_(o,fe,g),e(fe,Se),e(Se,sr),y(qo,sr,null),e(fe,ks),e(fe,ir),e(ir,$s),_(o,Zr,g),_(o,j,g),y(Eo,j,null),e(j,Ts),e(j,lr),e(lr,Vs),e(j,Ws),e(j,Po),e(Po,js),e(Po,Mo),e(Mo,Fs),e(Po,xs),e(j,qs),e(j,Ao),e(Ao,Es),e(Ao,yt),e(yt,Ps),e(Ao,Ms),e(j,As),e(j,zo),e(zo,zs),e(zo,So),e(So,Ss),e(zo,Os),e(j,Ds),e(j,A),y(Oo,A,null),e(A,Ls),e(A,pe),e(pe,Ns),e(pe,kt),e(kt,Is),e(pe,Xs),e(pe,cr),e(cr,Bs),e(pe,Hs),e(A,Rs),y(Oe,A,null),e(A,Us),y(De,A,null),e(A,Zs),y(Le,A,null),_(o,Qr,g),_(o,he,g),e(he,Ne),e(Ne,dr),y(Do,dr,null),e(he,Qs),e(he,mr),e(mr,Ks),_(o,Kr,g),_(o,F,g),y(Lo,F,null),e(F,Gs),e(F,fr),e(fr,Js),e(F,Ys),e(F,No),e(No,ei),e(No,Io),e(Io,oi),e(No,ti),e(F,ri),e(F,Xo),e(Xo,ai),e(Xo,$t),e($t,ni),e(Xo,si),e(F,ii),e(F,Bo),e(Bo,li),e(Bo,Ho),e(Ho,ci),e(Bo,di),e(F,mi),e(F,L),y(Ro,L,null),e(L,fi),e(L,ue),e(ue,pi),e(ue,Tt),e(Tt,hi),e(ue,ui),e(ue,pr),e(pr,gi),e(ue,_i),e(L,vi),y(Ie,L,null),e(L,bi),y(Xe,L,null),_(o,Gr,g),_(o,ge,g),e(ge,Be),e(Be,hr),y(Uo,hr,null),e(ge,wi),e(ge,ur),e(ur,Ci),_(o,Jr,g),_(o,x,g),y(Zo,x,null),e(x,yi),e(x,gr),e(gr,ki),e(x,$i),e(x,Qo),e(Qo,Ti),e(Qo,Ko),e(Ko,Vi),e(Qo,Wi),e(x,ji),e(x,Go),e(Go,Fi),e(Go,Vt),e(Vt,xi),e(Go,qi),e(x,Ei),e(x,Jo),e(Jo,Pi),e(Jo,Yo),e(Yo,Mi),e(Jo,Ai),e(x,zi),e(x,N),y(et,N,null),e(N,Si),e(N,_e),e(_e,Oi),e(_e,Wt),e(Wt,Di),e(_e,Li),e(_e,_r),e(_r,Ni),e(_e,Ii),e(N,Xi),y(He,N,null),e(N,Bi),y(Re,N,null),_(o,Yr,g),_(o,ve,g),e(ve,Ue),e(Ue,vr),y(ot,vr,null),e(ve,Hi),e(ve,br),e(br,Ri),_(o,ea,g),_(o,P,g),y(tt,P,null),e(P,Ui),e(P,be),e(be,Zi),e(be,wr),e(wr,Qi),e(be,Ki),e(be,rt),e(rt,Gi),e(be,Ji),e(P,Yi),e(P,at),e(at,el),e(at,jt),e(jt,ol),e(at,tl),e(P,rl),e(P,nt),e(nt,al),e(nt,st),e(st,nl),e(nt,sl),e(P,il),e(P,I),y(it,I,null),e(I,ll),e(I,we),e(we,cl),e(we,Ft),e(Ft,dl),e(we,ml),e(we,Cr),e(Cr,fl),e(we,pl),e(I,hl),y(Ze,I,null),e(I,ul),y(Qe,I,null),oa=!0},p(o,[g]){const lt={};g&2&&(lt.$$scope={dirty:g,ctx:o}),je.$set(lt);const yr={};g&2&&(yr.$$scope={dirty:g,ctx:o}),qe.$set(yr);const kr={};g&2&&(kr.$$scope={dirty:g,ctx:o}),Ee.$set(kr);const $r={};g&2&&($r.$$scope={dirty:g,ctx:o}),Me.$set($r);const ct={};g&2&&(ct.$$scope={dirty:g,ctx:o}),Ae.$set(ct);const Tr={};g&2&&(Tr.$$scope={dirty:g,ctx:o}),ze.$set(Tr);const Vr={};g&2&&(Vr.$$scope={dirty:g,ctx:o}),Oe.$set(Vr);const Wr={};g&2&&(Wr.$$scope={dirty:g,ctx:o}),De.$set(Wr);const dt={};g&2&&(dt.$$scope={dirty:g,ctx:o}),Le.$set(dt);const jr={};g&2&&(jr.$$scope={dirty:g,ctx:o}),Ie.$set(jr);const Fr={};g&2&&(Fr.$$scope={dirty:g,ctx:o}),Xe.$set(Fr);const mt={};g&2&&(mt.$$scope={dirty:g,ctx:o}),He.$set(mt);const xr={};g&2&&(xr.$$scope={dirty:g,ctx:o}),Re.$set(xr);const qr={};g&2&&(qr.$$scope={dirty:g,ctx:o}),Ze.$set(qr);const U={};g&2&&(U.$$scope={dirty:g,ctx:o}),Qe.$set(U)},i(o){oa||(k(l.$$.fragment,o),k(to.$$.fragment,o),k(co.$$.fragment,o),k(mo.$$.fragment,o),k(je.$$.fragment,o),k(po.$$.fragment,o),k(ho.$$.fragment,o),k(go.$$.fragment,o),k(_o.$$.fragment,o),k(ko.$$.fragment,o),k(qe.$$.fragment,o),k(Ee.$$.fragment,o),k($o.$$.fragment,o),k(To.$$.fragment,o),k(xo.$$.fragment,o),k(Me.$$.fragment,o),k(Ae.$$.fragment,o),k(ze.$$.fragment,o),k(qo.$$.fragment,o),k(Eo.$$.fragment,o),k(Oo.$$.fragment,o),k(Oe.$$.fragment,o),k(De.$$.fragment,o),k(Le.$$.fragment,o),k(Do.$$.fragment,o),k(Lo.$$.fragment,o),k(Ro.$$.fragment,o),k(Ie.$$.fragment,o),k(Xe.$$.fragment,o),k(Uo.$$.fragment,o),k(Zo.$$.fragment,o),k(et.$$.fragment,o),k(He.$$.fragment,o),k(Re.$$.fragment,o),k(ot.$$.fragment,o),k(tt.$$.fragment,o),k(it.$$.fragment,o),k(Ze.$$.fragment,o),k(Qe.$$.fragment,o),oa=!0)},o(o){$(l.$$.fragment,o),$(to.$$.fragment,o),$(co.$$.fragment,o),$(mo.$$.fragment,o),$(je.$$.fragment,o),$(po.$$.fragment,o),$(ho.$$.fragment,o),$(go.$$.fragment,o),$(_o.$$.fragment,o),$(ko.$$.fragment,o),$(qe.$$.fragment,o),$(Ee.$$.fragment,o),$($o.$$.fragment,o),$(To.$$.fragment,o),$(xo.$$.fragment,o),$(Me.$$.fragment,o),$(Ae.$$.fragment,o),$(ze.$$.fragment,o),$(qo.$$.fragment,o),$(Eo.$$.fragment,o),$(Oo.$$.fragment,o),$(Oe.$$.fragment,o),$(De.$$.fragment,o),$(Le.$$.fragment,o),$(Do.$$.fragment,o),$(Lo.$$.fragment,o),$(Ro.$$.fragment,o),$(Ie.$$.fragment,o),$(Xe.$$.fragment,o),$(Uo.$$.fragment,o),$(Zo.$$.fragment,o),$(et.$$.fragment,o),$(He.$$.fragment,o),$(Re.$$.fragment,o),$(ot.$$.fragment,o),$(tt.$$.fragment,o),$(it.$$.fragment,o),$(Ze.$$.fragment,o),$(Qe.$$.fragment,o),oa=!1},d(o){t(c),o&&t(v),o&&t(m),T(l),o&&t(Er),o&&t(oe),T(to),o&&t(Pr),o&&t(Te),o&&t(Mr),o&&t(ft),o&&t(Ar),o&&t(Ve),o&&t(zr),o&&t(pt),o&&t(Sr),o&&t(O),o&&t(Or),o&&t(Z),o&&t(Dr),o&&t(te),T(co),o&&t(Lr),o&&t(S),T(mo),T(je),o&&t(Nr),o&&t(ne),T(po),o&&t(Ir),o&&t(se),T(ho),o&&t(Xr),o&&t(ie),T(go),o&&t(Br),o&&t(q),T(_o),T(ko),T(qe),T(Ee),o&&t(Hr),o&&t(ce),T($o),o&&t(Rr),o&&t(E),T(To),T(xo),T(Me),T(Ae),T(ze),o&&t(Ur),o&&t(fe),T(qo),o&&t(Zr),o&&t(j),T(Eo),T(Oo),T(Oe),T(De),T(Le),o&&t(Qr),o&&t(he),T(Do),o&&t(Kr),o&&t(F),T(Lo),T(Ro),T(Ie),T(Xe),o&&t(Gr),o&&t(ge),T(Uo),o&&t(Jr),o&&t(x),T(Zo),T(et),T(He),T(Re),o&&t(Yr),o&&t(ve),T(ot),o&&t(ea),o&&t(P),T(tt),T(it),T(Ze),T(Qe)}}}const od={local:"wav2vec2conformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.Wav2Vec2ConformerConfig",title:"Wav2Vec2ConformerConfig"},{local:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput",title:"Wav2Vec2Conformer specific outputs"},{local:"transformers.Wav2Vec2ConformerModel",title:"Wav2Vec2ConformerModel"},{local:"transformers.Wav2Vec2ConformerForCTC",title:"Wav2Vec2ConformerForCTC"},{local:"transformers.Wav2Vec2ConformerForSequenceClassification",title:"Wav2Vec2ConformerForSequenceClassification"},{local:"transformers.Wav2Vec2ConformerForAudioFrameClassification",title:"Wav2Vec2ConformerForAudioFrameClassification"},{local:"transformers.Wav2Vec2ConformerForXVector",title:"Wav2Vec2ConformerForXVector"},{local:"transformers.Wav2Vec2ConformerForPreTraining",title:"Wav2Vec2ConformerForPreTraining"}],title:"Wav2Vec2-Conformer"};function td(V){return Oc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class cd extends Mc{constructor(c){super();Ac(this,c,td,ed,zc,{})}}export{cd as default,od as metadata};
