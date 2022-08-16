import{S as Kk,i as Qk,s as Yk,e as a,k as d,w,t as r,M as eT,c as s,d as t,m as p,a as n,x as y,h as i,b as m,G as e,g as _,y as k,q as T,o as $,B as x,v as tT,L as fe}from"../../chunks/vendor-hf-doc-builder.js";import{T as me}from"../../chunks/Tip-hf-doc-builder.js";import{D as F}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ue}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Y}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as he}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function oT(W){let c,b,f,h,v;return h=new ue({props:{code:`from transformers import Wav2Vec2Model, Wav2Vec2Config

# Initializing a Wav2Vec2 facebook/wav2vec2-base-960h style configuration
configuration = Wav2Vec2Config()

# Initializing a model from the facebook/wav2vec2-base-960h style configuration
model = Wav2Vec2Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Model, Wav2Vec2Config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Wav2Vec2 facebook/wav2vec2-base-960h style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Wav2Vec2Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/wav2vec2-base-960h style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function aT(W){let c,b,f,h,v;return h=new ue({props:{code:`# Let's see how to retrieve time steps for a model
from transformers import AutoTokenizer, AutoFeatureExtractor, AutoModelForCTC
from datasets import load_dataset
import datasets
import torch

# import model, feature extractor, tokenizer
model = AutoModelForCTC.from_pretrained("facebook/wav2vec2-base-960h")
tokenizer = AutoTokenizer.from_pretrained("facebook/wav2vec2-base-960h")
feature_extractor = AutoFeatureExtractor.from_pretrained("facebook/wav2vec2-base-960h")

# load first sample of English common_voice
dataset = load_dataset("common_voice", "en", split="train", streaming=True)
dataset = dataset.cast_column("audio", datasets.Audio(sampling_rate=16_000))
dataset_iter = iter(dataset)
sample = next(dataset_iter)

# forward sample through model to get greedily predicted transcription ids
input_values = feature_extractor(sample["audio"]["array"], return_tensors="pt").input_values
logits = model(input_values).logits[0]
pred_ids = torch.argmax(logits, axis=-1)

# retrieve word stamps (analogous commands for \`output_char_offsets\`)
outputs = tokenizer.decode(pred_ids, output_word_offsets=True)
# compute \`time_offset\` in seconds as product of downsampling ratio and sampling_rate
time_offset = model.config.inputs_to_logits_ratio / feature_extractor.sampling_rate

word_offsets = [
    {
        "word": d["word"],
        "start_time": round(d["start_offset"] * time_offset, 2),
        "end_time": round(d["end_offset"] * time_offset, 2),
    }
    for d in outputs.word_offsets
]
# compare word offsets with audio \`common_voice_en_100038.mp3\` online on the dataset viewer:
# https://huggingface.co/datasets/common_voice/viewer/en/train
word_offsets[:3]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Let&#x27;s see how to retrieve time steps for a model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoFeatureExtractor, AutoModelForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> datasets
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># import model, feature extractor, tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCTC.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load first sample of English common_voice</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;common_voice&quot;</span>, <span class="hljs-string">&quot;en&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>, streaming=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.cast_column(<span class="hljs-string">&quot;audio&quot;</span>, datasets.Audio(sampling_rate=<span class="hljs-number">16_000</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset_iter = <span class="hljs-built_in">iter</span>(dataset)
<span class="hljs-meta">&gt;&gt;&gt; </span>sample = <span class="hljs-built_in">next</span>(dataset_iter)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward sample through model to get greedily predicted transcription ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = feature_extractor(sample[<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_values).logits[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>pred_ids = torch.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve word stamps (analogous commands for \`output_char_offsets\`)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = tokenizer.decode(pred_ids, output_word_offsets=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute \`time_offset\` in seconds as product of downsampling ratio and sampling_rate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>time_offset = model.config.inputs_to_logits_ratio / feature_extractor.sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>word_offsets = [
<span class="hljs-meta">... </span>    {
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;word&quot;</span>: d[<span class="hljs-string">&quot;word&quot;</span>],
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;start_time&quot;</span>: <span class="hljs-built_in">round</span>(d[<span class="hljs-string">&quot;start_offset&quot;</span>] * time_offset, <span class="hljs-number">2</span>),
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;end_time&quot;</span>: <span class="hljs-built_in">round</span>(d[<span class="hljs-string">&quot;end_offset&quot;</span>] * time_offset, <span class="hljs-number">2</span>),
<span class="hljs-meta">... </span>    }
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> d <span class="hljs-keyword">in</span> outputs.word_offsets
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compare word offsets with audio \`common_voice_en_100038.mp3\` online on the dataset viewer:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># https://huggingface.co/datasets/common_voice/viewer/en/train</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>word_offsets[:<span class="hljs-number">3</span>]
[{<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;WHY&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.42</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.54</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;DOES&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.64</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.9</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;MILISANDRA&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">2.26</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">2.9</span>}]`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function sT(W){let c,b,f,h,v,l,u,j;return{c(){c=a("p"),b=r("This class method is simply calling "),f=a("a"),h=r("save_pretrained()"),v=r(` and
`),l=a("code"),u=r("save_pretrained"),j=r(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(L){c=s(L,"P",{});var P=n(c);b=i(P,"This class method is simply calling "),f=s(P,"A",{href:!0});var C=n(f);h=i(C,"save_pretrained()"),C.forEach(t),v=i(P,` and
`),l=s(P,"CODE",{});var M=n(l);u=i(M,"save_pretrained"),M.forEach(t),j=i(P,`. Please refer to the docstrings of the methods
above for more information.`),P.forEach(t),this.h()},h(){m(f,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(L,P){_(L,c,P),e(c,b),e(c,f),e(f,h),e(c,v),e(c,l),e(l,u),e(c,j)},d(L){L&&t(c)}}}function nT(W){let c,b,f,h,v,l,u,j,L,P,C,M,A,H;return{c(){c=a("p"),b=r(`This class method is simply calling Wav2Vec2FeatureExtractor\u2019s
`),f=a("a"),h=r("from_pretrained()"),v=r(`, Wav2Vec2CTCTokenizer\u2019s
`),l=a("code"),u=r("from_pretrained"),j=r(`, and
`),L=a("code"),P=r("pyctcdecode.BeamSearchDecoderCTC.load_from_hf_hub"),C=r("."),M=d(),A=a("p"),H=r("Please refer to the docstrings of the methods above for more information."),this.h()},l(D){c=s(D,"P",{});var q=n(c);b=i(q,`This class method is simply calling Wav2Vec2FeatureExtractor\u2019s
`),f=s(q,"A",{href:!0});var je=n(f);h=i(je,"from_pretrained()"),je.forEach(t),v=i(q,`, Wav2Vec2CTCTokenizer\u2019s
`),l=s(q,"CODE",{});var ge=n(l);u=i(ge,"from_pretrained"),ge.forEach(t),j=i(q,`, and
`),L=s(q,"CODE",{});var I=n(L);P=i(I,"pyctcdecode.BeamSearchDecoderCTC.load_from_hf_hub"),I.forEach(t),C=i(q,"."),q.forEach(t),M=p(D),A=s(D,"P",{});var U=n(A);H=i(U,"Please refer to the docstrings of the methods above for more information."),U.forEach(t),this.h()},h(){m(f,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(D,q){_(D,c,q),e(c,b),e(c,f),e(f,h),e(c,v),e(c,l),e(l,u),e(c,j),e(c,L),e(L,P),e(c,C),_(D,M,q),_(D,A,q),e(A,H)},d(D){D&&t(c),D&&t(M),D&&t(A)}}}function rT(W){let c,b;return{c(){c=a("p"),b=r("This function makes use of Python\u2019s multiprocessing.")},l(f){c=s(f,"P",{});var h=n(c);b=i(h,"This function makes use of Python\u2019s multiprocessing."),h.forEach(t)},m(f,h){_(f,c,h),e(c,b)},d(f){f&&t(c)}}}function iT(W){let c,b,f,h,v;return h=new ue({props:{code:`# Let's see how to retrieve time steps for a model
from transformers import AutoTokenizer, AutoProcessor, AutoModelForCTC
from datasets import load_dataset
import datasets
import torch

# import model, feature extractor, tokenizer
model = AutoModelForCTC.from_pretrained("patrickvonplaten/wav2vec2-base-100h-with-lm")
processor = AutoProcessor.from_pretrained("patrickvonplaten/wav2vec2-base-100h-with-lm")

# load first sample of English common_voice
dataset = load_dataset("common_voice", "en", split="train", streaming=True)
dataset = dataset.cast_column("audio", datasets.Audio(sampling_rate=16_000))
dataset_iter = iter(dataset)
sample = next(dataset_iter)

# forward sample through model to get greedily predicted transcription ids
input_values = processor(sample["audio"]["array"], return_tensors="pt").input_values
with torch.no_grad():
    logits = model(input_values).logits[0].cpu().numpy()

# retrieve word stamps (analogous commands for \`output_char_offsets\`)
outputs = processor.decode(logits, output_word_offsets=True)
# compute \`time_offset\` in seconds as product of downsampling ratio and sampling_rate
time_offset = model.config.inputs_to_logits_ratio / processor.feature_extractor.sampling_rate

word_offsets = [
    {
        "word": d["word"],
        "start_time": round(d["start_offset"] * time_offset, 2),
        "end_time": round(d["end_offset"] * time_offset, 2),
    }
    for d in outputs.word_offsets
]
# compare word offsets with audio \`common_voice_en_100038.mp3\` online on the dataset viewer:
# https://huggingface.co/datasets/common_voice/viewer/en/train
word_offsets[:4]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Let&#x27;s see how to retrieve time steps for a model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoProcessor, AutoModelForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> datasets
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># import model, feature extractor, tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCTC.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/wav2vec2-base-100h-with-lm&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/wav2vec2-base-100h-with-lm&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load first sample of English common_voice</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;common_voice&quot;</span>, <span class="hljs-string">&quot;en&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>, streaming=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.cast_column(<span class="hljs-string">&quot;audio&quot;</span>, datasets.Audio(sampling_rate=<span class="hljs-number">16_000</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset_iter = <span class="hljs-built_in">iter</span>(dataset)
<span class="hljs-meta">&gt;&gt;&gt; </span>sample = <span class="hljs-built_in">next</span>(dataset_iter)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward sample through model to get greedily predicted transcription ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(sample[<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(input_values).logits[<span class="hljs-number">0</span>].cpu().numpy()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve word stamps (analogous commands for \`output_char_offsets\`)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = processor.decode(logits, output_word_offsets=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute \`time_offset\` in seconds as product of downsampling ratio and sampling_rate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>time_offset = model.config.inputs_to_logits_ratio / processor.feature_extractor.sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>word_offsets = [
<span class="hljs-meta">... </span>    {
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;word&quot;</span>: d[<span class="hljs-string">&quot;word&quot;</span>],
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;start_time&quot;</span>: <span class="hljs-built_in">round</span>(d[<span class="hljs-string">&quot;start_offset&quot;</span>] * time_offset, <span class="hljs-number">2</span>),
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;end_time&quot;</span>: <span class="hljs-built_in">round</span>(d[<span class="hljs-string">&quot;end_offset&quot;</span>] * time_offset, <span class="hljs-number">2</span>),
<span class="hljs-meta">... </span>    }
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> d <span class="hljs-keyword">in</span> outputs.word_offsets
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compare word offsets with audio \`common_voice_en_100038.mp3\` online on the dataset viewer:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># https://huggingface.co/datasets/common_voice/viewer/en/train</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>word_offsets[:<span class="hljs-number">4</span>]
[{<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;WHY&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.42</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.54</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;DOES&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.64</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.88</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;A&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">2.12</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">2.14</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;MILE&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">2.26</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">2.46</span>}]`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function lT(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function cT(W){let c,b,f,h,v;return h=new ue({props:{code:`from transformers import Wav2Vec2Processor, Wav2Vec2Model
import torch
from datasets import load_dataset

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-base-960h")
model = Wav2Vec2Model.from_pretrained("facebook/wav2vec2-base-960h")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, Wav2Vec2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2Model.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">768</span>]`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function dT(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function pT(W){let c,b,f,h,v;return h=new ue({props:{code:`from transformers import Wav2Vec2Processor, Wav2Vec2ForCTC
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-base-960h")
model = Wav2Vec2ForCTC.from_pretrained("facebook/wav2vec2-base-960h")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)
transcription[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, Wav2Vec2ForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ForCTC.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function mT(W){let c,b;return c=new ue({props:{code:`inputs["labels"] = processor(text=dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(text=dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">53.48</span>`}}),{c(){w(c.$$.fragment)},l(f){y(c.$$.fragment,f)},m(f,h){k(c,f,h),b=!0},p:fe,i(f){b||(T(c.$$.fragment,f),b=!0)},o(f){$(c.$$.fragment,f),b=!1},d(f){x(c,f)}}}function hT(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function fT(W){let c,b,f,h,v;return h=new ue({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ForSequenceClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("superb/wav2vec2-base-superb-ks")
model = Wav2Vec2ForSequenceClassification.from_pretrained("superb/wav2vec2-base-superb-ks")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_ids = torch.argmax(logits, dim=-1).item()
predicted_label = model.config.id2label[predicted_class_ids]
predicted_label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, Wav2Vec2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;superb/wav2vec2-base-superb-ks&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;superb/wav2vec2-base-superb-ks&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label
<span class="hljs-string">&#x27;_unknown_&#x27;</span>`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function uT(W){let c,b;return c=new ue({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">6.54</span>`}}),{c(){w(c.$$.fragment)},l(f){y(c.$$.fragment,f)},m(f,h){k(c,f,h),b=!0},p:fe,i(f){b||(T(c.$$.fragment,f),b=!0)},o(f){$(c.$$.fragment,f),b=!1},d(f){x(c,f)}}}function gT(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function _T(W){let c,b,f,h,v;return h=new ue({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ForAudioFrameClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("anton-l/wav2vec2-base-superb-sd")
model = Wav2Vec2ForAudioFrameClassification.from_pretrained("anton-l/wav2vec2-base-superb-sd")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], return_tensors="pt", sampling_rate=sampling_rate)
with torch.no_grad():
    logits = model(**inputs).logits

probabilities = torch.sigmoid(logits[0])
# labels is a one-hot array of shape (num_frames, num_speakers)
labels = (probabilities > 0.5).long()
labels[0].tolist()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, Wav2Vec2ForAudioFrameClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;anton-l/wav2vec2-base-superb-sd&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ForAudioFrameClassification.from_pretrained(<span class="hljs-string">&quot;anton-l/wav2vec2-base-superb-sd&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, sampling_rate=sampling_rate)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>probabilities = torch.sigmoid(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># labels is a one-hot array of shape (num_frames, num_speakers)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = (probabilities &gt; <span class="hljs-number">0.5</span>).long()
<span class="hljs-meta">&gt;&gt;&gt; </span>labels[<span class="hljs-number">0</span>].tolist()
[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>]`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function vT(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function bT(W){let c,b,f,h,v;return h=new ue({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ForXVector
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("anton-l/wav2vec2-base-superb-sv")
model = Wav2Vec2ForXVector.from_pretrained("anton-l/wav2vec2-base-superb-sv")

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
round(similarity.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, Wav2Vec2ForXVector
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;anton-l/wav2vec2-base-superb-sv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ForXVector.from_pretrained(<span class="hljs-string">&quot;anton-l/wav2vec2-base-superb-sv&quot;</span>)

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
<span class="hljs-number">0.98</span>`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function wT(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function yT(W){let c,b,f,h,v;return h=new ue({props:{code:`import torch
from transformers import AutoFeatureExtractor, Wav2Vec2ForPreTraining
from transformers.models.wav2vec2.modeling_wav2vec2 import _compute_mask_indices
from datasets import load_dataset

feature_extractor = AutoFeatureExtractor.from_pretrained("facebook/wav2vec2-base")
model = Wav2Vec2ForPreTraining.from_pretrained("facebook/wav2vec2-base")

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, Wav2Vec2ForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.models.wav2vec2.modeling_wav2vec2 <span class="hljs-keyword">import</span> _compute_mask_indices
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ForPreTraining.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, mask_time_indices=mask_time_indices).loss`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function kT(W){let c,b,f,h,v,l,u,j,L,P,C,M,A,H,D,q,je,ge,I,U,_e,Se,z,N,Fe,ve,He,Ce,te,lt,Re,O,ct,ce,de,Ne,be,dt,we,oe,Ee,ye,pt;return{c(){c=a("p"),b=r("TF 2.0 models accepts two formats as inputs:"),f=d(),h=a("ul"),v=a("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=d(),j=a("li"),L=r("having all inputs as a list, tuple or dict in the first positional arguments."),P=d(),C=a("p"),M=r("This second option is useful when using "),A=a("code"),H=r("tf.keras.Model.fit"),D=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),q=a("code"),je=r("model(inputs)"),ge=r("."),I=d(),U=a("p"),_e=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Se=d(),z=a("ul"),N=a("li"),Fe=r("a single Tensor with "),ve=a("code"),He=r("input_values"),Ce=r(" only and nothing else: "),te=a("code"),lt=r("model(inputs_ids)"),Re=d(),O=a("li"),ct=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ce=a("code"),de=r("model([input_values, attention_mask])"),Ne=r(" or "),be=a("code"),dt=r("model([input_values, attention_mask, token_type_ids])"),we=d(),oe=a("li"),Ee=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),pt=r('model({"input_values": input_values, "token_type_ids": token_type_ids})')},l(V){c=s(V,"P",{});var E=n(c);b=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),f=p(V),h=s(V,"UL",{});var Ie=n(h);v=s(Ie,"LI",{});var Be=n(v);l=i(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),u=p(Ie),j=s(Ie,"LI",{});var Mt=n(j);L=i(Mt,"having all inputs as a list, tuple or dict in the first positional arguments."),Mt.forEach(t),Ie.forEach(t),P=p(V),C=s(V,"P",{});var ae=n(C);M=i(ae,"This second option is useful when using "),A=s(ae,"CODE",{});var $t=n(A);H=i($t,"tf.keras.Model.fit"),$t.forEach(t),D=i(ae,` method which currently requires having all the
tensors in the first argument of the model call function: `),q=s(ae,"CODE",{});var ke=n(q);je=i(ke,"model(inputs)"),ke.forEach(t),ge=i(ae,"."),ae.forEach(t),I=p(V),U=s(V,"P",{});var qe=n(U);_e=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Se=p(V),z=s(V,"UL",{});var R=n(z);N=s(R,"LI",{});var X=n(N);Fe=i(X,"a single Tensor with "),ve=s(X,"CODE",{});var At=n(ve);He=i(At,"input_values"),At.forEach(t),Ce=i(X," only and nothing else: "),te=s(X,"CODE",{});var mt=n(te);lt=i(mt,"model(inputs_ids)"),mt.forEach(t),X.forEach(t),Re=p(R),O=s(R,"LI",{});var Te=n(O);ct=i(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ce=s(Te,"CODE",{});var xt=n(ce);de=i(xt,"model([input_values, attention_mask])"),xt.forEach(t),Ne=i(Te," or "),be=s(Te,"CODE",{});var G=n(be);dt=i(G,"model([input_values, attention_mask, token_type_ids])"),G.forEach(t),Te.forEach(t),we=p(R),oe=s(R,"LI",{});var $e=n(oe);Ee=i($e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s($e,"CODE",{});var Ot=n(ye);pt=i(Ot,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),Ot.forEach(t),$e.forEach(t),R.forEach(t)},m(V,E){_(V,c,E),e(c,b),_(V,f,E),_(V,h,E),e(h,v),e(v,l),e(h,u),e(h,j),e(j,L),_(V,P,E),_(V,C,E),e(C,M),e(C,A),e(A,H),e(C,D),e(C,q),e(q,je),e(C,ge),_(V,I,E),_(V,U,E),e(U,_e),_(V,Se,E),_(V,z,E),e(z,N),e(N,Fe),e(N,ve),e(ve,He),e(N,Ce),e(N,te),e(te,lt),e(z,Re),e(z,O),e(O,ct),e(O,ce),e(ce,de),e(O,Ne),e(O,be),e(be,dt),e(z,we),e(z,oe),e(oe,Ee),e(oe,ye),e(ye,pt)},d(V){V&&t(c),V&&t(f),V&&t(h),V&&t(P),V&&t(C),V&&t(I),V&&t(U),V&&t(Se),V&&t(z)}}}function TT(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function $T(W){let c,b,f,h,v;return h=new ue({props:{code:`from transformers import Wav2Vec2Processor, TFWav2Vec2Model
from datasets import load_dataset
import soundfile as sf

processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-base-960h")
model = TFWav2Vec2Model.from_pretrained("facebook/wav2vec2-base-960h")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

input_values = processor(ds["speech"][0], return_tensors="tf").input_values  # Batch size 1
hidden_states = model(input_values).last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, TFWav2Vec2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFWav2Vec2Model.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function xT(W){let c,b,f,h,v,l,u,j,L,P,C,M,A,H,D,q,je,ge,I,U,_e,Se,z,N,Fe,ve,He,Ce,te,lt,Re,O,ct,ce,de,Ne,be,dt,we,oe,Ee,ye,pt;return{c(){c=a("p"),b=r("TF 2.0 models accepts two formats as inputs:"),f=d(),h=a("ul"),v=a("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=d(),j=a("li"),L=r("having all inputs as a list, tuple or dict in the first positional arguments."),P=d(),C=a("p"),M=r("This second option is useful when using "),A=a("code"),H=r("tf.keras.Model.fit"),D=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),q=a("code"),je=r("model(inputs)"),ge=r("."),I=d(),U=a("p"),_e=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Se=d(),z=a("ul"),N=a("li"),Fe=r("a single Tensor with "),ve=a("code"),He=r("input_values"),Ce=r(" only and nothing else: "),te=a("code"),lt=r("model(inputs_ids)"),Re=d(),O=a("li"),ct=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ce=a("code"),de=r("model([input_values, attention_mask])"),Ne=r(" or "),be=a("code"),dt=r("model([input_values, attention_mask, token_type_ids])"),we=d(),oe=a("li"),Ee=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),pt=r('model({"input_values": input_values, "token_type_ids": token_type_ids})')},l(V){c=s(V,"P",{});var E=n(c);b=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),f=p(V),h=s(V,"UL",{});var Ie=n(h);v=s(Ie,"LI",{});var Be=n(v);l=i(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),u=p(Ie),j=s(Ie,"LI",{});var Mt=n(j);L=i(Mt,"having all inputs as a list, tuple or dict in the first positional arguments."),Mt.forEach(t),Ie.forEach(t),P=p(V),C=s(V,"P",{});var ae=n(C);M=i(ae,"This second option is useful when using "),A=s(ae,"CODE",{});var $t=n(A);H=i($t,"tf.keras.Model.fit"),$t.forEach(t),D=i(ae,` method which currently requires having all the
tensors in the first argument of the model call function: `),q=s(ae,"CODE",{});var ke=n(q);je=i(ke,"model(inputs)"),ke.forEach(t),ge=i(ae,"."),ae.forEach(t),I=p(V),U=s(V,"P",{});var qe=n(U);_e=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Se=p(V),z=s(V,"UL",{});var R=n(z);N=s(R,"LI",{});var X=n(N);Fe=i(X,"a single Tensor with "),ve=s(X,"CODE",{});var At=n(ve);He=i(At,"input_values"),At.forEach(t),Ce=i(X," only and nothing else: "),te=s(X,"CODE",{});var mt=n(te);lt=i(mt,"model(inputs_ids)"),mt.forEach(t),X.forEach(t),Re=p(R),O=s(R,"LI",{});var Te=n(O);ct=i(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ce=s(Te,"CODE",{});var xt=n(ce);de=i(xt,"model([input_values, attention_mask])"),xt.forEach(t),Ne=i(Te," or "),be=s(Te,"CODE",{});var G=n(be);dt=i(G,"model([input_values, attention_mask, token_type_ids])"),G.forEach(t),Te.forEach(t),we=p(R),oe=s(R,"LI",{});var $e=n(oe);Ee=i($e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s($e,"CODE",{});var Ot=n(ye);pt=i(Ot,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),Ot.forEach(t),$e.forEach(t),R.forEach(t)},m(V,E){_(V,c,E),e(c,b),_(V,f,E),_(V,h,E),e(h,v),e(v,l),e(h,u),e(h,j),e(j,L),_(V,P,E),_(V,C,E),e(C,M),e(C,A),e(A,H),e(C,D),e(C,q),e(q,je),e(C,ge),_(V,I,E),_(V,U,E),e(U,_e),_(V,Se,E),_(V,z,E),e(z,N),e(N,Fe),e(N,ve),e(ve,He),e(N,Ce),e(N,te),e(te,lt),e(z,Re),e(z,O),e(O,ct),e(O,ce),e(ce,de),e(O,Ne),e(O,be),e(be,dt),e(z,we),e(z,oe),e(oe,Ee),e(oe,ye),e(ye,pt)},d(V){V&&t(c),V&&t(f),V&&t(h),V&&t(P),V&&t(C),V&&t(I),V&&t(U),V&&t(Se),V&&t(z)}}}function WT(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function VT(W){let c,b,f,h,v;return h=new ue({props:{code:`import tensorflow as tf
from transformers import Wav2Vec2Processor, TFWav2Vec2ForCTC
from datasets import load_dataset
import soundfile as sf

processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-base-960h")
model = TFWav2Vec2ForCTC.from_pretrained("facebook/wav2vec2-base-960h")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

input_values = processor(ds["speech"][0], return_tensors="tf").input_values  # Batch size 1
logits = model(input_values).logits
predicted_ids = tf.argmax(logits, axis=-1)

transcription = processor.decode(predicted_ids[0])

# compute loss
target_transcription = "A MAN SAID TO THE UNIVERSE SIR I EXIST"

# Pass transcription as \`text\` to encode labels
labels = processor(text=transcription, return_tensors="tf").input_ids

loss = model(input_values, labels=labels).loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, TFWav2Vec2ForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFWav2Vec2ForCTC.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_values).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = tf.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.decode(predicted_ids[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_transcription = <span class="hljs-string">&quot;A MAN SAID TO THE UNIVERSE SIR I EXIST&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Pass transcription as \`text\` to encode labels</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = processor(text=transcription, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, labels=labels).loss`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function jT(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function FT(W){let c,b,f,h,v;return h=new ue({props:{code:`from transformers import Wav2Vec2Processor, FlaxWav2Vec2Model
from datasets import load_dataset
import soundfile as sf

processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-large-lv60")
model = FlaxWav2Vec2Model.from_pretrained("facebook/wav2vec2-large-lv60")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

input_values = processor(
    ds["speech"][0], sampling_rate=16_000, return_tensors="np"
).input_values  # Batch size 1
hidden_states = model(input_values).last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, FlaxWav2Vec2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-large-lv60&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxWav2Vec2Model.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-large-lv60&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(
<span class="hljs-meta">... </span>    ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], sampling_rate=<span class="hljs-number">16_000</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>
<span class="hljs-meta">... </span>).input_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function CT(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function ET(W){let c,b,f,h,v;return h=new ue({props:{code:`import jax.numpy as jnp
from transformers import Wav2Vec2Processor, FlaxWav2Vec2ForCTC
from datasets import load_dataset
import soundfile as sf

processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-large-960h-lv60")
model = FlaxWav2Vec2ForCTC.from_pretrained("facebook/wav2vec2-large-960h-lv60")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

input_values = processor(
    ds["speech"][0], sampling_rate=16_000, return_tensors="np"
).input_values  # Batch size 1
logits = model(input_values).logits
predicted_ids = jnp.argmax(logits, axis=-1)

transcription = processor.decode(predicted_ids[0])
# should give:  "A MAN SAID TO THE UNIVERSE SIR I EXIST"`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, FlaxWav2Vec2ForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-large-960h-lv60&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxWav2Vec2ForCTC.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-large-960h-lv60&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(
<span class="hljs-meta">... </span>    ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], sampling_rate=<span class="hljs-number">16_000</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>
<span class="hljs-meta">... </span>).input_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_values).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = jnp.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.decode(predicted_ids[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># should give:  &quot;A MAN SAID TO THE UNIVERSE SIR I EXIST&quot;</span>`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function qT(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function PT(W){let c,b,f,h,v;return h=new ue({props:{code:`import optax
import numpy as np
import jax.numpy as jnp
from transformers import Wav2Vec2FeatureExtractor, FlaxWav2Vec2ForPreTraining
from transformers.models.wav2vec2.modeling_flax_wav2vec2 import _compute_mask_indices
from datasets import load_dataset
import soundfile as sf

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("facebook/wav2vec2-large-lv60")
model = FlaxWav2Vec2ForPreTraining.from_pretrained("facebook/wav2vec2-large-lv60")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

input_values = feature_extractor(ds["speech"][0], return_tensors="np").input_values  # Batch size 1

# compute masked indices
batch_size, raw_sequence_length = input_values.shape
sequence_length = model._get_feat_extract_output_lengths(raw_sequence_length)
mask_time_indices = _compute_mask_indices((batch_size, sequence_length), mask_prob=0.2, mask_length=2)

outputs = model(input_values, mask_time_indices=mask_time_indices)

# compute cosine similarity between predicted (=projected_states) and target (=projected_quantized_states)
cosine_sim = optax.cosine_similarity(outputs.projected_states, outputs.projected_quantized_states)

# show that cosine similarity is much higher than random
assert np.asarray(cosine_sim)[mask_time_indices].mean() > 0.5`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> optax
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, FlaxWav2Vec2ForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.models.wav2vec2.modeling_flax_wav2vec2 <span class="hljs-keyword">import</span> _compute_mask_indices
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-large-lv60&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxWav2Vec2ForPreTraining.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-large-lv60&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = feature_extractor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_values  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute masked indices</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>batch_size, raw_sequence_length = input_values.shape
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_length = model._get_feat_extract_output_lengths(raw_sequence_length)
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_time_indices = _compute_mask_indices((batch_size, sequence_length), mask_prob=<span class="hljs-number">0.2</span>, mask_length=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_values, mask_time_indices=mask_time_indices)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute cosine similarity between predicted (=projected_states) and target (=projected_quantized_states)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>cosine_sim = optax.cosine_similarity(outputs.projected_states, outputs.projected_quantized_states)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># show that cosine similarity is much higher than random</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> np.asarray(cosine_sim)[mask_time_indices].mean() &gt; <span class="hljs-number">0.5</span>`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function zT(W){let c,b,f,h,v,l,u,j,L,P,C,M,A,H,D,q,je,ge,I,U,_e,Se,z,N,Fe,ve,He,Ce,te,lt,Re,O,ct,ce,de,Ne,be,dt,we,oe,Ee,ye,pt,V,E,Ie,Be,Mt,ae,$t,ke,qe,R,X,At,mt,Te,xt,G,$e,Ot,Lt,Jp,Ar,Zp,Kp,Ra,Qp,Yp,em,Dt,tm,Or,om,am,Lr,sm,nm,rm,To,Qc,St,$o,Ui,Xa,im,Hi,lm,Yc,J,Ga,cm,Ri,dm,pm,Ja,mm,Dr,hm,fm,um,xo,Za,gm,Xi,_m,vm,Sr,Ka,bm,Xe,Qa,wm,Gi,ym,km,Ya,Tm,Ji,$m,xm,Wm,Wo,Vm,Vo,es,jm,Zi,Fm,ed,Nt,jo,Ki,ts,Cm,Qi,Em,td,Ue,os,qm,Yi,Pm,zm,as,Mm,Nr,Am,Om,Lm,Fo,ss,Dm,el,Sm,od,It,Co,tl,ns,Nm,ol,Im,ad,S,rs,Bm,al,Um,Hm,Pe,Ir,Rm,Xm,Br,Gm,Jm,Ur,Zm,Km,is,sl,Qm,Ym,eh,Hr,th,oh,ah,Eo,ls,sh,ht,nh,cs,nl,rh,ih,lh,rl,ch,dh,ds,il,ph,mh,hh,fh,qo,ps,uh,ft,gh,Rr,_h,vh,ll,bh,wh,Xr,yh,kh,Th,Gr,ms,$h,Wt,hs,xh,fs,Wh,Jr,Vh,jh,Fh,Po,Ch,zo,us,Eh,gs,qh,Zr,Ph,zh,Mh,Mo,_s,Ah,vs,Oh,Kr,Lh,Dh,sd,Bt,Ao,cl,bs,Sh,dl,Nh,nd,B,ws,Ih,pl,Bh,Uh,Oo,ys,Hh,ut,Rh,ks,ml,Xh,Gh,Jh,hl,Zh,Kh,Ts,fl,Qh,Yh,ef,tf,Lo,$s,of,gt,af,Qr,sf,nf,ul,rf,lf,Yr,cf,df,pf,Vt,xs,mf,Ws,hf,ei,ff,uf,gf,Do,_f,ti,Vs,vf,jt,js,bf,gl,wf,yf,So,kf,Ft,Fs,Tf,_l,$f,xf,No,rd,Ut,Io,vl,Cs,Wf,bl,Vf,id,Ht,Es,jf,qs,Ff,wl,Cf,Ef,ld,Rt,Ps,qf,yl,Pf,cd,Xt,zs,zf,Ms,Mf,oi,Af,Of,dd,_t,As,Lf,Os,Df,kl,Sf,Nf,If,Bo,Ls,Bf,Tl,Uf,pd,vt,Ds,Hf,Ss,Rf,$l,Xf,Gf,Jf,Uo,Ns,Zf,xl,Kf,md,Gt,Ho,Wl,Is,Qf,Vl,Yf,hd,xe,Bs,eu,Us,tu,Hs,ou,au,su,Rs,nu,ai,ru,iu,lu,Xs,cu,Gs,du,pu,mu,Ge,Js,hu,Jt,fu,si,uu,gu,jl,_u,vu,bu,Ro,wu,Xo,fd,Zt,Go,Fl,Zs,yu,Cl,ku,ud,We,Ks,Tu,Kt,$u,El,xu,Wu,Qs,Vu,ju,Fu,Ys,Cu,ni,Eu,qu,Pu,en,zu,tn,Mu,Au,Ou,ze,on,Lu,Qt,Du,ri,Su,Nu,ql,Iu,Bu,Uu,Jo,Hu,Zo,Ru,Ko,gd,Yt,Qo,Pl,an,Xu,zl,Gu,_d,se,sn,Ju,Ml,Zu,Ku,nn,Qu,rn,Yu,eg,tg,ln,og,ii,ag,sg,ng,cn,rg,dn,ig,lg,cg,Me,pn,dg,eo,pg,li,mg,hg,Al,fg,ug,gg,Yo,_g,ea,vg,ta,vd,to,oa,Ol,mn,bg,Ll,wg,bd,ne,hn,yg,Dl,kg,Tg,fn,$g,un,xg,Wg,Vg,gn,jg,ci,Fg,Cg,Eg,_n,qg,vn,Pg,zg,Mg,Je,bn,Ag,oo,Og,di,Lg,Dg,Sl,Sg,Ng,Ig,aa,Bg,sa,wd,ao,na,Nl,wn,Ug,Il,Hg,yd,re,yn,Rg,Bl,Xg,Gg,kn,Jg,Tn,Zg,Kg,Qg,$n,Yg,pi,e_,t_,o_,xn,a_,Wn,s_,n_,r_,Ze,Vn,i_,so,l_,mi,c_,d_,Ul,p_,m_,h_,ra,f_,ia,kd,no,la,Hl,jn,u_,Rl,g_,Td,Ve,Fn,__,ro,v_,Xl,b_,w_,Cn,y_,k_,T_,En,$_,hi,x_,W_,V_,qn,j_,Pn,F_,C_,E_,Ke,zn,q_,io,P_,fi,z_,M_,Gl,A_,O_,L_,ca,D_,da,$d,lo,pa,Jl,Mn,S_,Zl,N_,xd,ie,An,I_,Kl,B_,U_,On,H_,ui,R_,X_,G_,Ln,J_,Dn,Z_,K_,Q_,ma,Y_,Qe,Sn,ev,co,tv,gi,ov,av,Ql,sv,nv,rv,ha,iv,fa,Wd,po,ua,Yl,Nn,lv,ec,cv,Vd,le,In,dv,Bn,pv,tc,mv,hv,fv,Un,uv,_i,gv,_v,vv,Hn,bv,Rn,wv,yv,kv,ga,Tv,Ye,Xn,$v,mo,xv,vi,Wv,Vv,oc,jv,Fv,Cv,_a,Ev,va,jd,ho,ba,ac,Gn,qv,sc,Pv,Fd,Z,Jn,zv,Zn,Mv,Kn,Av,Ov,Lv,Qn,Dv,bi,Sv,Nv,Iv,Yn,Bv,er,Uv,Hv,Rv,nc,Xv,Gv,bt,rc,tr,Jv,Zv,ic,or,Kv,Qv,lc,ar,Yv,e2,cc,sr,t2,o2,et,nr,a2,fo,s2,dc,n2,r2,pc,i2,l2,c2,wa,d2,ya,Cd,uo,ka,mc,rr,p2,hc,m2,Ed,K,ir,h2,go,f2,fc,u2,g2,lr,_2,v2,b2,cr,w2,wi,y2,k2,T2,dr,$2,pr,x2,W2,V2,uc,j2,F2,wt,gc,mr,C2,E2,_c,hr,q2,P2,vc,fr,z2,M2,bc,ur,A2,O2,tt,gr,L2,_o,D2,wc,S2,N2,yc,I2,B2,U2,Ta,H2,$a,qd,vo,xa,kc,_r,R2,Tc,X2,Pd,Q,vr,G2,bo,J2,$c,Z2,K2,br,Q2,Y2,eb,wr,tb,yi,ob,ab,sb,yr,nb,kr,rb,ib,lb,xc,cb,db,yt,Wc,Tr,pb,mb,Vc,$r,hb,fb,jc,xr,ub,gb,Fc,Wr,_b,vb,ot,Vr,bb,wo,wb,ki,yb,kb,Cc,Tb,$b,xb,Wa,Wb,Va,zd;return l=new Y({}),H=new Y({}),X=new Y({}),$e=new F({props:{name:"class transformers.Wav2Vec2Config",anchor:"transformers.Wav2Vec2Config",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"feat_quantizer_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"num_codevectors_per_group",val:" = 320"},{name:"num_codevector_groups",val:" = 2"},{name:"contrastive_logits_temperature",val:" = 0.1"},{name:"num_negatives",val:" = 100"},{name:"codevector_dim",val:" = 256"},{name:"proj_codevector_dim",val:" = 256"},{name:"diversity_loss_weight",val:" = 0.1"},{name:"ctc_loss_reduction",val:" = 'sum'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"tdnn_dim",val:" = (512, 512, 512, 512, 1500)"},{name:"tdnn_kernel",val:" = (5, 3, 3, 1, 1)"},{name:"tdnn_dilation",val:" = (1, 2, 3, 1, 1)"},{name:"xvector_output_dim",val:" = 512"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"add_adapter",val:" = False"},{name:"adapter_kernel_size",val:" = 3"},{name:"adapter_stride",val:" = 2"},{name:"num_adapter_layers",val:" = 3"},{name:"output_hidden_size",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the Wav2Vec2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Model">Wav2Vec2Model</a> or <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.TFWav2Vec2Model">TFWav2Vec2Model</a>. Vocabulary size of the
model. Defines the different tokens that can be represented by the <em>inputs_ids</em> passed to the forward
method of <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Model">Wav2Vec2Model</a>.`,name:"vocab_size"},{anchor:"transformers.Wav2Vec2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.Wav2Vec2Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.Wav2Vec2Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.Wav2Vec2Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.Wav2Vec2Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.Wav2Vec2Config.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.Wav2Vec2Config.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.Wav2Vec2Config.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC">Wav2Vec2ForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.Wav2Vec2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.Wav2Vec2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.Wav2Vec2Config.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.Wav2Vec2Config.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.Wav2Vec2Config.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.Wav2Vec2Config.feat_quantizer_dropout",description:`<strong>feat_quantizer_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for quantized feature encoder states.`,name:"feat_quantizer_dropout"},{anchor:"transformers.Wav2Vec2Config.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.Wav2Vec2Config.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.Wav2Vec2Config.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 3, 3)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.Wav2Vec2Config.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.Wav2Vec2Config.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.Wav2Vec2Config.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.Wav2Vec2Config.do_stable_layer_norm",description:`<strong>do_stable_layer_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply <em>stable</em> layer norm architecture of the Transformer encoder. <code>do_stable_layer_norm is True</code> corresponds to applying layer norm before the attention layer, whereas <code>do_stable_layer_norm is False</code> corresponds to applying layer norm after the attention layer.`,name:"do_stable_layer_norm"},{anchor:"transformers.Wav2Vec2Config.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature encoder. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech
Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.Wav2Vec2Config.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask_time_prob<em>len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, </em>mask_time_prob<em> should be \`prob_vector_start</em>mask_time_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is True\`.`,name:"mask_time_prob"},{anchor:"transformers.Wav2Vec2Config.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.Wav2Vec2Config.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.Wav2Vec2Config.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask_feature_prob<em>len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, </em>mask_feature_prob<em> should be \`prob_vector_start</em>mask_feature_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is
True\`.`,name:"mask_feature_prob"},{anchor:"transformers.Wav2Vec2Config.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.Wav2Vec2Config.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.Wav2Vec2Config.num_codevectors_per_group",description:`<strong>num_codevectors_per_group</strong> (<code>int</code>, <em>optional</em>, defaults to 320) &#x2014;
Number of entries in each quantization codebook (group).`,name:"num_codevectors_per_group"},{anchor:"transformers.Wav2Vec2Config.num_codevector_groups",description:`<strong>num_codevector_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of codevector groups for product codevector quantization.`,name:"num_codevector_groups"},{anchor:"transformers.Wav2Vec2Config.contrastive_logits_temperature",description:`<strong>contrastive_logits_temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The temperature <em>kappa</em> in the contrastive loss.`,name:"contrastive_logits_temperature"},{anchor:"transformers.Wav2Vec2Config.feat_quantizer_dropout",description:`<strong>feat_quantizer_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for the output of the feature encoder that&#x2019;s used by the quantizer.`,name:"feat_quantizer_dropout"},{anchor:"transformers.Wav2Vec2Config.num_negatives",description:`<strong>num_negatives</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Number of negative samples for the contrastive loss.`,name:"num_negatives"},{anchor:"transformers.Wav2Vec2Config.codevector_dim",description:`<strong>codevector_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the quantized feature vectors.`,name:"codevector_dim"},{anchor:"transformers.Wav2Vec2Config.proj_codevector_dim",description:`<strong>proj_codevector_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the final projection of both the quantized and the transformer features.`,name:"proj_codevector_dim"},{anchor:"transformers.Wav2Vec2Config.diversity_loss_weight",description:`<strong>diversity_loss_weight</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The weight of the codebook diversity loss component.`,name:"diversity_loss_weight"},{anchor:"transformers.Wav2Vec2Config.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;sum&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC">Wav2Vec2ForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.Wav2Vec2Config.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC">Wav2Vec2ForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.Wav2Vec2Config.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ForSequenceClassification">Wav2Vec2ForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.Wav2Vec2Config.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"},{anchor:"transformers.Wav2Vec2Config.tdnn_dim",description:`<strong>tdnn_dim</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 1500)</code>) &#x2014;
A tuple of integers defining the number of output channels of each 1D convolutional layer in the <em>TDNN</em>
module of the <em>XVector</em> model. The length of <em>tdnn_dim</em> defines the number of <em>TDNN</em> layers.`,name:"tdnn_dim"},{anchor:"transformers.Wav2Vec2Config.tdnn_kernel",description:`<strong>tdnn_kernel</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(5, 3, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_kernel</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_kernel"},{anchor:"transformers.Wav2Vec2Config.tdnn_dilation",description:`<strong>tdnn_dilation</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(1, 2, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the dilation factor of each 1D convolutional layer in <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_dilation</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_dilation"},{anchor:"transformers.Wav2Vec2Config.xvector_output_dim",description:`<strong>xvector_output_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the <em>XVector</em> embedding vectors.`,name:"xvector_output_dim"},{anchor:"transformers.Wav2Vec2Config.add_adapter",description:`<strong>add_adapter</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether a convolutional network should be stacked on top of the Wav2Vec2 Encoder. Can be very useful for
warm-starting Wav2Vec2 for SpeechEncoderDecoder models.`,name:"add_adapter"},{anchor:"transformers.Wav2Vec2Config.adapter_kernel_size",description:`<strong>adapter_kernel_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Kernel size of the convolutional layers in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"adapter_kernel_size"},{anchor:"transformers.Wav2Vec2Config.adapter_stride",description:`<strong>adapter_stride</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Stride of the convolutional layers in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"adapter_stride"},{anchor:"transformers.Wav2Vec2Config.num_adapter_layers",description:`<strong>num_adapter_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Number of convolutional layers that should be used in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"num_adapter_layers"},{anchor:"transformers.Wav2Vec2Config.output_hidden_size",description:`<strong>output_hidden_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Dimensionality of the encoder output layer. If not defined, this defaults to <em>hidden-size</em>. Only relevant
if <code>add_adapter is True</code>.`,name:"output_hidden_size"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/configuration_wav2vec2.py#L32"}}),To=new he({props:{anchor:"transformers.Wav2Vec2Config.example",$$slots:{default:[oT]},$$scope:{ctx:W}}}),Xa=new Y({}),Ga=new F({props:{name:"class transformers.Wav2Vec2CTCTokenizer",anchor:"transformers.Wav2Vec2CTCTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"word_delimiter_token",val:" = '|'"},{name:"replace_word_delimiter_char",val:" = ' '"},{name:"do_lower_case",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.Wav2Vec2CTCTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.word_delimiter_token",description:`<strong>word_delimiter_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;|&quot;</code>) &#x2014;
The token used for defining the end of a word.`,name:"word_delimiter_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to accept lowercase input and lowercase the output when decoding.</p>
<p>**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"do_lower_case"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L127"}}),Za=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2CTCTokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"text_target",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair_target",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_pair"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.text_target",description:`<strong>text_target</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded as target texts. Each sequence can be a string or a
list of strings (pretokenized string). If the sequences are provided as list of strings (pretokenized),
you must set <code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_target"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.text_pair_target",description:`<strong>text_pair_target</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded as target texts. Each sequence can be a string or a
list of strings (pretokenized string). If the sequences are provided as list of strings (pretokenized),
you must set <code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_pair_target"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2401",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> \u2014 List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>token_type_ids</strong> \u2014 List of token type ids to be fed to a model (when <code>return_token_type_ids=True</code> or
if <em>\u201Ctoken_type_ids\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>attention_mask</strong> \u2014 List of indices specifying which tokens should be attended to by the model (when
<code>return_attention_mask=True</code> or if <em>\u201Cattention_mask\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>overflowing_tokens</strong> \u2014 List of overflowing tokens sequences (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>num_truncated_tokens</strong> \u2014 Number of tokens truncated (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>special_tokens_mask</strong> \u2014 List of 0s and 1s, with 1 specifying added special tokens and 0 specifying
regular sequence tokens (when <code>add_special_tokens=True</code> and <code>return_special_tokens_mask=True</code>).</p>
</li>
<li>
<p><strong>length</strong> \u2014 The length of the inputs (when <code>return_length=True</code>)</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),Ka=new F({props:{name:"save_vocabulary",anchor:"transformers.Wav2Vec2CTCTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L597"}}),Qa=new F({props:{name:"decode",anchor:"transformers.Wav2Vec2CTCTokenizer.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"output_char_offsets",val:": bool = False"},{name:"output_word_offsets",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.output_char_offsets",description:`<strong>output_char_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output character offsets. Character offsets can be used in combination with the
sampling rate and model downsampling rate to compute the time-stamps of transcribed characters.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the example of <code>decode</code> to better
understand how to make use of <code>output_word_offsets</code>.</p>

					</div>`,name:"output_char_offsets"},{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.output_word_offsets",description:`<strong>output_word_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output word offsets. Word offsets can be used in combination with the sampling rate
and model downsampling rate to compute the time-stamps of transcribed words.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the example of <code>decode</code> to better
understand how to make use of <code>output_word_offsets</code>.</p>

					</div>`,name:"output_word_offsets"},{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L490",returnDescription:`
<p>The list of decoded
sentences. Will be a <code>Wav2Vec2CTCTokenizerOutput</code> when
<code>output_char_offsets == True</code> or <code>output_word_offsets == True</code>.</p>
`,returnType:`
<p><code>str</code> or <code>Wav2Vec2CTCTokenizerOutput</code></p>
`}}),Wo=new he({props:{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.example",$$slots:{default:[aT]},$$scope:{ctx:W}}}),es=new F({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"output_char_offsets",val:": bool = False"},{name:"output_word_offsets",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.output_char_offsets",description:`<strong>output_char_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output character offsets. Character offsets can be used in combination with the
sampling rate and model downsampling rate to compute the time-stamps of transcribed characters.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the Example of <code>decode</code> to better
understand how to make use of <code>output_word_offsets</code>.
<code>batch_decode</code> works the same way with batched output.</p>

					</div>`,name:"output_char_offsets"},{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.output_word_offsets",description:`<strong>output_word_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output word offsets. Word offsets can be used in combination with the sampling rate
and model downsampling rate to compute the time-stamps of transcribed words.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the Example of <code>decode</code> to better
understand how to make use of <code>output_word_offsets</code>.
<code>batch_decode</code> works the same way with batched output.</p>

					</div>`,name:"output_word_offsets"},{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L420",returnDescription:`
<p>The list of decoded
sentences. Will be a <code>Wav2Vec2CTCTokenizerOutput</code> when
<code>output_char_offsets == True</code> or <code>output_word_offsets == True</code>.</p>
`,returnType:`
<p><code>List[str]</code> or <code>Wav2Vec2CTCTokenizerOutput</code></p>
`}}),ts=new Y({}),os=new F({props:{name:"class transformers.Wav2Vec2FeatureExtractor",anchor:"transformers.Wav2Vec2FeatureExtractor",parameters:[{name:"feature_size",val:" = 1"},{name:"sampling_rate",val:" = 16000"},{name:"padding_value",val:" = 0.0"},{name:"return_attention_mask",val:" = False"},{name:"do_normalize",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2FeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 1) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.Wav2Vec2FeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.Wav2Vec2FeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values.`,name:"padding_value"},{anchor:"transformers.Wav2Vec2FeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to zero-mean unit-variance normalize the input. Normalizing can help to significantly
improve the performance for some models, <em>e.g.</em>,
<a href="https://huggingface.co/models?search=lv60" rel="nofollow">wav2vec2-lv60</a>.`,name:"do_normalize"},{anchor:"transformers.Wav2Vec2FeatureExtractor.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor.__call__"><strong>call</strong>()</a> should return <code>attention_mask</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Wav2Vec2 models that have set <code>config.feat_extract_norm == &quot;group&quot;</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, have <strong>not</strong> been trained using
<code>attention_mask</code>. For such models, <code>input_values</code> should simply be padded with 0 and no <code>attention_mask</code>
should be passed.</p>
<p>For Wav2Vec2 models that have set <code>config.feat_extract_norm == &quot;layer&quot;</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-large-960h-lv60-self" rel="nofollow">wav2vec2-lv60</a>, <code>attention_mask</code> should be
passed for batched inference.</p>

					</div>`,name:"return_attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/feature_extraction_wav2vec2.py#L31"}}),ss=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2FeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"truncation",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
The sequence or batch of sequences to be padded. Each sequence can be a numpy array, a list of float
values, a list of numpy arrays or a list of list of float values.`,name:"raw_speech"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Select a strategy to pad the returned sequences (according to the model&#x2019;s padding side and padding
index) among:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of the returned list and optionally padding length (see above).`,name:"max_length"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>) &#x2014;
Activates truncation to cut input sequences longer than <em>max_length</em> to <em>max_length</em>.`,name:"truncation"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value.</p>
<p>This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability</p>
<blockquote>
<p>= 7.5 (Volta), or on TPUs which benefit from having sequence lengths be a multiple of 128.</p>
</blockquote>`,name:"pad_to_multiple_of"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific feature_extractor&#x2019;s default.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Wav2Vec2 models that have set <code>config.feat_extract_norm == &quot;group&quot;</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, have <strong>not</strong> been trained using
<code>attention_mask</code>. For such models, <code>input_values</code> should simply be padded with 0 and no
<code>attention_mask</code> should be passed.</p>
<p>For Wav2Vec2 models that have set <code>config.feat_extract_norm == &quot;layer&quot;</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-large-960h-lv60-self" rel="nofollow">wav2vec2-lv60</a>, <code>attention_mask</code> should
be passed for batched inference.</p>

					</div>`,name:"return_attention_mask"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>raw_speech</code> input was sampled. It is strongly recommended to pass
<code>sampling_rate</code> at the forward call to prevent silent errors.`,name:"sampling_rate"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.padding_value",description:"<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;",name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/feature_extraction_wav2vec2.py#L102"}}),ns=new Y({}),rs=new F({props:{name:"class transformers.Wav2Vec2Processor",anchor:"transformers.Wav2Vec2Processor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>Wav2Vec2FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor">Wav2Vec2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Wav2Vec2Processor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
An instance of <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/processing_wav2vec2.py#L26"}}),ls=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2Processor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/processing_wav2vec2.py#L67"}}),ps=new F({props:{name:"pad",anchor:"transformers.Wav2Vec2Processor.pad",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/processing_wav2vec2.py#L104"}}),ms=new F({props:{name:"from_pretrained",anchor:"transformers.Wav2Vec2Processor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/processing_wav2vec2.py#L48"}}),hs=new F({props:{name:"save_pretrained",anchor:"transformers.Wav2Vec2Processor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2Processor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.Wav2Vec2Processor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it. You can specify the
repository you want to push to with <code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).
kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/main/en/main_classes/model#transformers.utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L94"}}),Po=new me({props:{$$slots:{default:[sT]},$$scope:{ctx:W}}}),us=new F({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2Processor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/processing_wav2vec2.py#L134"}}),_s=new F({props:{name:"decode",anchor:"transformers.Wav2Vec2Processor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/processing_wav2vec2.py#L141"}}),bs=new Y({}),ws=new F({props:{name:"class transformers.Wav2Vec2ProcessorWithLM",anchor:"transformers.Wav2Vec2ProcessorWithLM",parameters:[{name:"feature_extractor",val:": FeatureExtractionMixin"},{name:"tokenizer",val:": PreTrainedTokenizerBase"},{name:"decoder",val:": BeamSearchDecoderCTC"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor">Wav2Vec2FeatureExtractor</a>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor">Wav2Vec2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer">Wav2Vec2CTCTokenizer</a>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer">Wav2Vec2CTCTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decoder",description:`<strong>decoder</strong> (<code>pyctcdecode.BeamSearchDecoderCTC</code>) &#x2014;
An instance of <code>pyctcdecode.BeamSearchDecoderCTC</code>. The decoder is a required input.`,name:"decoder"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L64"}}),ys=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2ProcessorWithLM.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L211"}}),$s=new F({props:{name:"pad",anchor:"transformers.Wav2Vec2ProcessorWithLM.pad",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L249"}}),xs=new F({props:{name:"from_pretrained",anchor:"transformers.Wav2Vec2ProcessorWithLM.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both <a href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor">SequenceFeatureExtractor</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a></li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L109"}}),Do=new me({props:{$$slots:{default:[nT]},$$scope:{ctx:W}}}),Vs=new F({props:{name:"save_pretrained",anchor:"transformers.Wav2Vec2ProcessorWithLM.save_pretrained",parameters:[{name:"save_directory",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L105"}}),js=new F({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode",parameters:[{name:"logits",val:": ndarray"},{name:"num_processes",val:": typing.Optional[int] = None"},{name:"beam_width",val:": typing.Optional[int] = None"},{name:"beam_prune_logp",val:": typing.Optional[float] = None"},{name:"token_min_logp",val:": typing.Optional[float] = None"},{name:"hotwords",val:": typing.Optional[typing.Iterable[str]] = None"},{name:"hotword_weight",val:": typing.Optional[float] = None"},{name:"alpha",val:": typing.Optional[float] = None"},{name:"beta",val:": typing.Optional[float] = None"},{name:"unk_score_offset",val:": typing.Optional[float] = None"},{name:"lm_score_boundary",val:": typing.Optional[bool] = None"},{name:"output_word_offsets",val:": bool = False"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.logits",description:`<strong>logits</strong> (<code>np.ndarray</code>) &#x2014;
The logits output vector of the model representing the log probabilities for each token.`,name:"logits"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.num_processes",description:`<strong>num_processes</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of processes on which the function should be parallelized over. Defaults to the number of
available CPUs.`,name:"num_processes"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.beam_width",description:`<strong>beam_width</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum number of beams at each step in decoding. Defaults to pyctcdecode&#x2019;s DEFAULT_BEAM_WIDTH.`,name:"beam_width"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.beam_prune_logp",description:`<strong>beam_prune_logp</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Beams that are much worse than best beam will be pruned Defaults to pyctcdecode&#x2019;s DEFAULT_PRUNE_LOGP.`,name:"beam_prune_logp"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.token_min_logp",description:`<strong>token_min_logp</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Tokens below this logp are skipped unless they are argmax of frame Defaults to pyctcdecode&#x2019;s
DEFAULT_MIN_TOKEN_LOGP.`,name:"token_min_logp"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.hotwords",description:`<strong>hotwords</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
List of words with extra importance, can be OOV for LM`,name:"hotwords"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.hotword_weight",description:`<strong>hotword_weight</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Weight factor for hotword importance Defaults to pyctcdecode&#x2019;s DEFAULT_HOTWORD_WEIGHT.`,name:"hotword_weight"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.alpha",description:`<strong>alpha</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Weight for language model during shallow fusion`,name:"alpha"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.beta",description:`<strong>beta</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Weight for length score adjustment of during scoring`,name:"beta"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.unk_score_offset",description:`<strong>unk_score_offset</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Amount of log score offset for unknown tokens`,name:"unk_score_offset"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.lm_score_boundary",description:`<strong>lm_score_boundary</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to have kenlm respect boundaries when scoring`,name:"lm_score_boundary"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.output_word_offsets",description:`<strong>output_word_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output word offsets. Word offsets can be used in combination with the sampling rate
and model downsampling rate to compute the time-stamps of transcribed words.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the Example of <code>decode</code> to
better understand how to make use of <code>output_word_offsets</code>.
<code>batch_decode</code> works the same way with batched
output.</p>

					</div>`,name:"output_word_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L280",returnDescription:`
<p><code>Wav2Vec2DecoderWithLMOutput</code> or <code>tuple</code>.</p>
`}}),So=new me({props:{$$slots:{default:[rT]},$$scope:{ctx:W}}}),Fs=new F({props:{name:"decode",anchor:"transformers.Wav2Vec2ProcessorWithLM.decode",parameters:[{name:"logits",val:": ndarray"},{name:"beam_width",val:": typing.Optional[int] = None"},{name:"beam_prune_logp",val:": typing.Optional[float] = None"},{name:"token_min_logp",val:": typing.Optional[float] = None"},{name:"hotwords",val:": typing.Optional[typing.Iterable[str]] = None"},{name:"hotword_weight",val:": typing.Optional[float] = None"},{name:"alpha",val:": typing.Optional[float] = None"},{name:"beta",val:": typing.Optional[float] = None"},{name:"unk_score_offset",val:": typing.Optional[float] = None"},{name:"lm_score_boundary",val:": typing.Optional[bool] = None"},{name:"output_word_offsets",val:": bool = False"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.logits",description:`<strong>logits</strong> (<code>np.ndarray</code>) &#x2014;
The logits output vector of the model representing the log probabilities for each token.`,name:"logits"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.beam_width",description:`<strong>beam_width</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum number of beams at each step in decoding. Defaults to pyctcdecode&#x2019;s DEFAULT_BEAM_WIDTH.`,name:"beam_width"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.beam_prune_logp",description:`<strong>beam_prune_logp</strong> (<code>int</code>, <em>optional</em>) &#x2014;
A threshold to prune beams with log-probs less than best_beam_logp + beam_prune_logp. The value should
be &lt;= 0. Defaults to pyctcdecode&#x2019;s DEFAULT_PRUNE_LOGP.`,name:"beam_prune_logp"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.token_min_logp",description:`<strong>token_min_logp</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Tokens with log-probs below token_min_logp are skipped unless they are have the maximum log-prob for an
utterance. Defaults to pyctcdecode&#x2019;s DEFAULT_MIN_TOKEN_LOGP.`,name:"token_min_logp"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.hotwords",description:`<strong>hotwords</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
List of words with extra importance which can be missing from the LM&#x2019;s vocabulary, e.g. [&#x201C;huggingface&#x201D;]`,name:"hotwords"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.hotword_weight",description:`<strong>hotword_weight</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Weight multiplier that boosts hotword scores. Defaults to pyctcdecode&#x2019;s DEFAULT_HOTWORD_WEIGHT.`,name:"hotword_weight"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.alpha",description:`<strong>alpha</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Weight for language model during shallow fusion`,name:"alpha"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.beta",description:`<strong>beta</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Weight for length score adjustment of during scoring`,name:"beta"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.unk_score_offset",description:`<strong>unk_score_offset</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Amount of log score offset for unknown tokens`,name:"unk_score_offset"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.lm_score_boundary",description:`<strong>lm_score_boundary</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to have kenlm respect boundaries when scoring`,name:"lm_score_boundary"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.output_word_offsets",description:`<strong>output_word_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output word offsets. Word offsets can be used in combination with the sampling rate
and model downsampling rate to compute the time-stamps of transcribed words.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the example of <code>decode</code> to
better understand how to make use of <code>output_word_offsets</code>.</p>

					</div>`,name:"output_word_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L397",returnDescription:`
<p><code>Wav2Vec2DecoderWithLMOutput</code> or <code>tuple</code>.</p>
`}}),No=new he({props:{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.example",$$slots:{default:[iT]},$$scope:{ctx:W}}}),Cs=new Y({}),Es=new F({props:{name:"class transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput",anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput",parameters:[{name:"text",val:": typing.Union[typing.List[str], str]"},{name:"logit_score",val:": typing.Union[typing.List[float], float] = None"},{name:"lm_score",val:": typing.Union[typing.List[float], float] = None"},{name:"word_offsets",val:": typing.Union[typing.List[typing.List[typing.Dict[str, typing.Union[int, str]]]], typing.List[typing.Dict[str, typing.Union[int, str]]]] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.text",description:`<strong>text</strong> (list of <code>str</code> or <code>str</code>) &#x2014;
Decoded logits in text from. Usually the speech transcription.`,name:"text"},{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.logit_score",description:`<strong>logit_score</strong> (list of <code>float</code> or <code>float</code>) &#x2014;
Total logit score of the beam associated with produced text.`,name:"logit_score"},{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.lm_score",description:`<strong>lm_score</strong> (list of <code>float</code>) &#x2014;
Fused lm_score of the beam associated with produced text.`,name:"lm_score"},{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.word_offsets",description:`<strong>word_offsets</strong> (list of <code>List[Dict[str, Union[int, str]]]</code> or <code>List[Dict[str, Union[int, str]]]</code>) &#x2014;
Offsets of the decoded words. In combination with sampling rate and model downsampling rate word offsets
can be used to compute time stamps for each word.`,name:"word_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L42"}}),Ps=new F({props:{name:"class transformers.modeling_outputs.Wav2Vec2BaseModelOutput",anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"extract_features",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput.extract_features",description:`<strong>extract_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, conv_dim[-1])</code>) &#x2014;
Sequence of extracted feature vectors of the last convolutional layer of the model.`,name:"extract_features"},{anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/modeling_outputs.py#L976"}}),zs=new F({props:{name:"class transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput",anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"projected_states",val:": FloatTensor = None"},{name:"projected_quantized_states",val:": FloatTensor = None"},{name:"codevector_perplexity",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"contrastive_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"diversity_loss",val:": typing.Optional[torch.FloatTensor] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the contrastive loss (L_m) and the diversity loss (L_d) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official
paper</a> . (classification) loss.`,name:"loss"},{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput.projected_states",description:`<strong>projected_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) &#x2014;
Hidden-states of the model projected to <em>config.proj_codevector_dim</em> that can be used to predict the masked
projected quantized states.`,name:"projected_states"},{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput.projected_quantized_states",description:`<strong>projected_quantized_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) &#x2014;
Quantized extracted feature vectors projected to <em>config.proj_codevector_dim</em> representing the positive
target vectors for contrastive loss.`,name:"projected_quantized_states"},{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"},{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput.contrastive_loss",description:`<strong>contrastive_loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
The contrastive loss (L_m) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official paper</a> .`,name:"contrastive_loss"},{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput.diversity_loss",description:`<strong>diversity_loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
The diversity loss (L_d) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official paper</a> .`,name:"diversity_loss"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L94"}}),As=new F({props:{name:"class transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput",parameters:[{name:"last_hidden_state",val:": ndarray = None"},{name:"extract_features",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.extract_features",description:`<strong>extract_features</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, last_conv_dim)</code>) &#x2014;
Sequence of extracted feature vectors of the last convolutional layer of the model with <code>last_conv_dim</code>
being the dimension of the last convolutional layer.`,name:"extract_features"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L46"}}),Ls=new F({props:{name:"replace",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/flax/struct.py#L108"}}),Ds=new F({props:{name:"class transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput",parameters:[{name:"projected_states",val:": ndarray = None"},{name:"projected_quantized_states",val:": ndarray = None"},{name:"codevector_perplexity",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when model is in train mode, <code>jnp.ndarray</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the contrastive loss (L_m) and the diversity loss (L_d) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official
paper</a> . (classification) loss.`,name:"loss"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput.projected_states",description:`<strong>projected_states</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) &#x2014;
Hidden-states of the model projected to <em>config.proj_codevector_dim</em> that can be used to predict the masked
projected quantized states.`,name:"projected_states"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput.projected_quantized_states",description:`<strong>projected_quantized_states</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) &#x2014;
Quantized extracted feature vectors projected to <em>config.proj_codevector_dim</em> representing the positive
target vectors for contrastive loss.`,name:"projected_quantized_states"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L76"}}),Ns=new F({props:{name:"replace",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/flax/struct.py#L108"}}),Is=new Y({}),Bs=new F({props:{name:"class transformers.Wav2Vec2Model",anchor:"transformers.Wav2Vec2Model",parameters:[{name:"config",val:": Wav2Vec2Config"}],parametersDescription:[{anchor:"transformers.Wav2Vec2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1182"}}),Js=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2Model.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2Model.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, <code>attention_mask</code> should <strong>not</strong> be
passed to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly
different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1268",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
>Wav2Vec2Config</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new me({props:{$$slots:{default:[lT]},$$scope:{ctx:W}}}),Xo=new he({props:{anchor:"transformers.Wav2Vec2Model.forward.example",$$slots:{default:[cT]},$$scope:{ctx:W}}}),Zs=new Y({}),Ks=new F({props:{name:"class transformers.Wav2Vec2ForCTC",anchor:"transformers.Wav2Vec2ForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1591"}}),on=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForCTC.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, <code>attention_mask</code> should <strong>not</strong> be
passed to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly
different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1632",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
>Wav2Vec2Config</a>) and inputs.</p>
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
`}}),Jo=new me({props:{$$slots:{default:[dT]},$$scope:{ctx:W}}}),Zo=new he({props:{anchor:"transformers.Wav2Vec2ForCTC.forward.example",$$slots:{default:[pT]},$$scope:{ctx:W}}}),Ko=new he({props:{anchor:"transformers.Wav2Vec2ForCTC.forward.example-2",$$slots:{default:[mT]},$$scope:{ctx:W}}}),an=new Y({}),sn=new F({props:{name:"class transformers.Wav2Vec2ForSequenceClassification",anchor:"transformers.Wav2Vec2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1721"}}),pn=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, <code>attention_mask</code> should <strong>not</strong> be
passed to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly
different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1766",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
>Wav2Vec2Config</a>) and inputs.</p>
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
`}}),Yo=new me({props:{$$slots:{default:[hT]},$$scope:{ctx:W}}}),ea=new he({props:{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.example",$$slots:{default:[fT]},$$scope:{ctx:W}}}),ta=new he({props:{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.example-2",$$slots:{default:[uT]},$$scope:{ctx:W}}}),mn=new Y({}),hn=new F({props:{name:"class transformers.Wav2Vec2ForAudioFrameClassification",anchor:"transformers.Wav2Vec2ForAudioFrameClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1844"}}),bn=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, <code>attention_mask</code> should <strong>not</strong> be
passed to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly
different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1888",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
>Wav2Vec2Config</a>) and inputs.</p>
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
`}}),aa=new me({props:{$$slots:{default:[gT]},$$scope:{ctx:W}}}),sa=new he({props:{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.example",$$slots:{default:[_T]},$$scope:{ctx:W}}}),wn=new Y({}),yn=new F({props:{name:"class transformers.Wav2Vec2ForXVector",anchor:"transformers.Wav2Vec2ForXVector",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForXVector.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L2006"}}),Vn=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForXVector.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForXVector.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForXVector.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, <code>attention_mask</code> should <strong>not</strong> be
passed to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly
different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ForXVector.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ForXVector.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ForXVector.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForXVector.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L2068",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.XVectorOutput"
>transformers.modeling_outputs.XVectorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
>Wav2Vec2Config</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.XVectorOutput"
>transformers.modeling_outputs.XVectorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ra=new me({props:{$$slots:{default:[vT]},$$scope:{ctx:W}}}),ia=new he({props:{anchor:"transformers.Wav2Vec2ForXVector.forward.example",$$slots:{default:[bT]},$$scope:{ctx:W}}}),jn=new Y({}),Fn=new F({props:{name:"class transformers.Wav2Vec2ForPreTraining",anchor:"transformers.Wav2Vec2ForPreTraining",parameters:[{name:"config",val:": Wav2Vec2Config"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1331"}}),zn=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForPreTraining.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.BoolTensor] = None"},{name:"sampled_negative_indices",val:": typing.Optional[torch.BoolTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForPreTraining.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, <code>attention_mask</code> should <strong>not</strong> be
passed to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly
different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForPreTraining.forward.mask_time_indices",description:`<strong>mask_time_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices to mask extracted features for contrastive loss. When in training mode, model learns to predict
masked extracted features in <em>config.proj_codevector_dim</em> space.`,name:"mask_time_indices"},{anchor:"transformers.Wav2Vec2ForPreTraining.forward.sampled_negative_indices",description:`<strong>sampled_negative_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length, num_negatives)</code>, <em>optional</em>) &#x2014;
Indices indicating which quantized target vectors are used as negative sampled vectors in contrastive loss.
Required input for pre-training.`,name:"sampled_negative_indices"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1392",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput"
>transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
>Wav2Vec2Config</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput"
>transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ca=new me({props:{$$slots:{default:[wT]},$$scope:{ctx:W}}}),da=new he({props:{anchor:"transformers.Wav2Vec2ForPreTraining.forward.example",$$slots:{default:[yT]},$$scope:{ctx:W}}}),Mn=new Y({}),An=new F({props:{name:"class transformers.TFWav2Vec2Model",anchor:"transformers.TFWav2Vec2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWav2Vec2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1468"}}),ma=new me({props:{$$slots:{default:[kT]},$$scope:{ctx:W}}}),Sn=new F({props:{name:"call",anchor:"transformers.TFWav2Vec2Model.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFWav2Vec2Model.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_values"},{anchor:"transformers.TFWav2Vec2Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFWav2Vec2Model.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFWav2Vec2Model.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFWav2Vec2Model.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFWav2Vec2Model.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_values</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_values</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFWav2Vec2Model.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFWav2Vec2Model.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFWav2Vec2Model.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFWav2Vec2Model.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1474",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
>Wav2Vec2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ha=new me({props:{$$slots:{default:[TT]},$$scope:{ctx:W}}}),fa=new he({props:{anchor:"transformers.TFWav2Vec2Model.call.example",$$slots:{default:[$T]},$$scope:{ctx:W}}}),Nn=new Y({}),In=new F({props:{name:"class transformers.TFWav2Vec2ForCTC",anchor:"transformers.TFWav2Vec2ForCTC",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWav2Vec2ForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1571"}}),ga=new me({props:{$$slots:{default:[xT]},$$scope:{ctx:W}}}),Xn=new F({props:{name:"call",anchor:"transformers.TFWav2Vec2ForCTC.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFWav2Vec2ForCTC.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_values"},{anchor:"transformers.TFWav2Vec2ForCTC.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFWav2Vec2ForCTC.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFWav2Vec2ForCTC.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFWav2Vec2ForCTC.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFWav2Vec2ForCTC.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_values</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_values</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFWav2Vec2ForCTC.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFWav2Vec2ForCTC.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFWav2Vec2ForCTC.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFWav2Vec2ForCTC.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFWav2Vec2ForCTC.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_values</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked),
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1598",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
>Wav2Vec2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),_a=new me({props:{$$slots:{default:[WT]},$$scope:{ctx:W}}}),va=new he({props:{anchor:"transformers.TFWav2Vec2ForCTC.call.example",$$slots:{default:[VT]},$$scope:{ctx:W}}}),Gn=new Y({}),Jn=new F({props:{name:"class transformers.FlaxWav2Vec2Model",anchor:"transformers.FlaxWav2Vec2Model",parameters:[{name:"config",val:": Wav2Vec2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1024)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWav2Vec2Model.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1058"}}),nr=new F({props:{name:"__call__",anchor:"transformers.FlaxWav2Vec2Model.__call__",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2Model.__call__.input_values",description:`<strong>input_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>jnp.ndarray</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.FlaxWav2Vec2Model.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a> .. warning:: <code>attention_mask</code> should only be passed
if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor
has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, <code>attention_mask</code> should <strong>not</strong> be
passed to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly
different results depending on whether <code>input_values</code> is padded or not.`,name:"attention_mask"},{anchor:"transformers.FlaxWav2Vec2Model.__call__.mask_time_indices",description:`<strong>mask_time_indices</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices to mask extracted features for contrastive loss. When in training mode, model learns to predict
masked extracted features in <em>config.proj_codevector_dim</em> space.`,name:"mask_time_indices"},{anchor:"transformers.FlaxWav2Vec2Model.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxWav2Vec2Model.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxWav2Vec2Model.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L890",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput"
>transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.wav2vec2.configuration_wav2vec2.Wav2Vec2Config'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>extract_features</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, last_conv_dim)</code>) \u2014 Sequence of extracted feature vectors of the last convolutional layer of the model with <code>last_conv_dim</code>
being the dimension of the last convolutional layer.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput"
>transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wa=new me({props:{$$slots:{default:[jT]},$$scope:{ctx:W}}}),ya=new he({props:{anchor:"transformers.FlaxWav2Vec2Model.__call__.example",$$slots:{default:[FT]},$$scope:{ctx:W}}}),rr=new Y({}),ir=new F({props:{name:"class transformers.FlaxWav2Vec2ForCTC",anchor:"transformers.FlaxWav2Vec2ForCTC",parameters:[{name:"config",val:": Wav2Vec2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1024)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWav2Vec2ForCTC.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1176"}}),gr=new F({props:{name:"__call__",anchor:"transformers.FlaxWav2Vec2ForCTC.__call__",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.input_values",description:`<strong>input_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>jnp.ndarray</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a> .. warning:: <code>attention_mask</code> should only be passed
if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor
has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, <code>attention_mask</code> should <strong>not</strong> be
passed to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly
different results depending on whether <code>input_values</code> is padded or not.`,name:"attention_mask"},{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.mask_time_indices",description:`<strong>mask_time_indices</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices to mask extracted features for contrastive loss. When in training mode, model learns to predict
masked extracted features in <em>config.proj_codevector_dim</em> space.`,name:"mask_time_indices"},{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L890",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.wav2vec2.configuration_wav2vec2.Wav2Vec2Config'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ta=new me({props:{$$slots:{default:[CT]},$$scope:{ctx:W}}}),$a=new he({props:{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.example",$$slots:{default:[ET]},$$scope:{ctx:W}}}),_r=new Y({}),vr=new F({props:{name:"class transformers.FlaxWav2Vec2ForPreTraining",anchor:"transformers.FlaxWav2Vec2ForPreTraining",parameters:[{name:"config",val:": Wav2Vec2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1024)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWav2Vec2ForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1322"}}),Vr=new F({props:{name:"__call__",anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"gumbel_temperature",val:": int = 1"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"gumbel_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.input_values",description:`<strong>input_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>jnp.ndarray</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a> .. warning:: <code>attention_mask</code> should only be passed
if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor
has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, <code>attention_mask</code> should <strong>not</strong> be
passed to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should
simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly
different results depending on whether <code>input_values</code> is padded or not.`,name:"attention_mask"},{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.mask_time_indices",description:`<strong>mask_time_indices</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices to mask extracted features for contrastive loss. When in training mode, model learns to predict
masked extracted features in <em>config.proj_codevector_dim</em> space.`,name:"mask_time_indices"},{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1325",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput"
>transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.wav2vec2.configuration_wav2vec2.Wav2Vec2Config'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when model is in train mode, <code>jnp.ndarray</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the contrastive loss (L_m) and the diversity loss (L_d) as stated in the <a
  href="https://arxiv.org/pdf/2006.11477.pdf"
  rel="nofollow"
>official
paper</a> . (classification) loss.</p>
</li>
<li>
<p><strong>projected_states</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) \u2014 Hidden-states of the model projected to <em>config.proj_codevector_dim</em> that can be used to predict the masked
projected quantized states.</p>
</li>
<li>
<p><strong>projected_quantized_states</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) \u2014 Quantized extracted feature vectors projected to <em>config.proj_codevector_dim</em> representing the positive
target vectors for contrastive loss.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput"
>transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wa=new me({props:{$$slots:{default:[qT]},$$scope:{ctx:W}}}),Va=new he({props:{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.example",$$slots:{default:[PT]},$$scope:{ctx:W}}}),{c(){c=a("meta"),b=d(),f=a("h1"),h=a("a"),v=a("span"),w(l.$$.fragment),u=d(),j=a("span"),L=r("Wav2Vec2"),P=d(),C=a("h2"),M=a("a"),A=a("span"),w(H.$$.fragment),D=d(),q=a("span"),je=r("Overview"),ge=d(),I=a("p"),U=r("The Wav2Vec2 model was proposed in "),_e=a("a"),Se=r("wav2vec 2.0: A Framework for Self-Supervised Learning of Speech Representations"),z=r(" by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael Auli."),N=d(),Fe=a("p"),ve=r("The abstract from the paper is the following:"),He=d(),Ce=a("p"),te=a("em"),lt=r(`We show for the first time that learning powerful representations from speech audio alone followed by fine-tuning on
transcribed speech can outperform the best semi-supervised methods while being conceptually simpler. wav2vec 2.0 masks
the speech input in the latent space and solves a contrastive task defined over a quantization of the latent
representations which are jointly learned. Experiments using all labeled data of Librispeech achieve 1.8/3.3 WER on the
clean/other test sets. When lowering the amount of labeled data to one hour, wav2vec 2.0 outperforms the previous state
of the art on the 100 hour subset while using 100 times less labeled data. Using just ten minutes of labeled data and
pre-training on 53k hours of unlabeled data still achieves 4.8/8.2 WER. This demonstrates the feasibility of speech
recognition with limited amounts of labeled data.`),Re=d(),O=a("p"),ct=r("Tips:"),ce=d(),de=a("ul"),Ne=a("li"),be=r("Wav2Vec2 is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),dt=d(),we=a("li"),oe=r(`Wav2Vec2 model was trained using connectionist temporal classification (CTC) so the model output has to be decoded
using `),Ee=a("a"),ye=r("Wav2Vec2CTCTokenizer"),pt=r("."),V=d(),E=a("p"),Ie=r("This model was contributed by "),Be=a("a"),Mt=r("patrickvonplaten"),ae=r("."),$t=d(),ke=a("h2"),qe=a("a"),R=a("span"),w(X.$$.fragment),At=d(),mt=a("span"),Te=r("Wav2Vec2Config"),xt=d(),G=a("div"),w($e.$$.fragment),Ot=d(),Lt=a("p"),Jp=r("This is the configuration class to store the configuration of a "),Ar=a("a"),Zp=r("Wav2Vec2Model"),Kp=r(`. It is used to instantiate an
Wav2Vec2 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Wav2Vec2
`),Ra=a("a"),Qp=r("facebook/wav2vec2-base-960h"),Yp=r(" architecture."),em=d(),Dt=a("p"),tm=r("Configuration objects inherit from "),Or=a("a"),om=r("PretrainedConfig"),am=r(` and can be used to control the model outputs. Read the
documentation from `),Lr=a("a"),sm=r("PretrainedConfig"),nm=r(" for more information."),rm=d(),w(To.$$.fragment),Qc=d(),St=a("h2"),$o=a("a"),Ui=a("span"),w(Xa.$$.fragment),im=d(),Hi=a("span"),lm=r("Wav2Vec2CTCTokenizer"),Yc=d(),J=a("div"),w(Ga.$$.fragment),cm=d(),Ri=a("p"),dm=r("Constructs a Wav2Vec2CTC tokenizer."),pm=d(),Ja=a("p"),mm=r("This tokenizer inherits from "),Dr=a("a"),hm=r("PreTrainedTokenizer"),fm=r(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),um=d(),xo=a("div"),w(Za.$$.fragment),gm=d(),Xi=a("p"),_m=r(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),vm=d(),Sr=a("div"),w(Ka.$$.fragment),bm=d(),Xe=a("div"),w(Qa.$$.fragment),wm=d(),Gi=a("p"),ym=r(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),km=d(),Ya=a("p"),Tm=r("Similar to doing "),Ji=a("code"),$m=r("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),xm=r("."),Wm=d(),w(Wo.$$.fragment),Vm=d(),Vo=a("div"),w(es.$$.fragment),jm=d(),Zi=a("p"),Fm=r("Convert a list of lists of token ids into a list of strings by calling decode."),ed=d(),Nt=a("h2"),jo=a("a"),Ki=a("span"),w(ts.$$.fragment),Cm=d(),Qi=a("span"),Em=r("Wav2Vec2FeatureExtractor"),td=d(),Ue=a("div"),w(os.$$.fragment),qm=d(),Yi=a("p"),Pm=r("Constructs a Wav2Vec2 feature extractor."),zm=d(),as=a("p"),Mm=r("This feature extractor inherits from "),Nr=a("a"),Am=r("SequenceFeatureExtractor"),Om=r(` which contains
most of the main methods. Users should refer to this superclass for more information regarding those methods.`),Lm=d(),Fo=a("div"),w(ss.$$.fragment),Dm=d(),el=a("p"),Sm=r("Main method to featurize and prepare for the model one or several sequence(s). sequences."),od=d(),It=a("h2"),Co=a("a"),tl=a("span"),w(ns.$$.fragment),Nm=d(),ol=a("span"),Im=r("Wav2Vec2Processor"),ad=d(),S=a("div"),w(rs.$$.fragment),Bm=d(),al=a("p"),Um=r(`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor and a Wav2Vec2 CTC tokenizer into a single
processor.`),Hm=d(),Pe=a("p"),Ir=a("a"),Rm=r("Wav2Vec2Processor"),Xm=r(" offers all the functionalities of "),Br=a("a"),Gm=r("Wav2Vec2FeatureExtractor"),Jm=r(" and "),Ur=a("a"),Zm=r("PreTrainedTokenizer"),Km=r(`.
See the docstring of `),is=a("a"),sl=a("strong"),Qm=r("call"),Ym=r("()"),eh=r(" and "),Hr=a("a"),th=r("decode()"),oh=r(" for more information."),ah=d(),Eo=a("div"),w(ls.$$.fragment),sh=d(),ht=a("p"),nh=r(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),cs=a("a"),nl=a("strong"),rh=r("call"),ih=r("()"),lh=r(` and returns its output. If used in the context
`),rl=a("code"),ch=r("as_target_processor()"),dh=r(` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),ds=a("a"),il=a("strong"),ph=r("call"),mh=r("()"),hh=r(". Please refer to the docstring of the above two methods for more information."),fh=d(),qo=a("div"),w(ps.$$.fragment),uh=d(),ft=a("p"),gh=r(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),Rr=a("a"),_h=r("pad()"),vh=r(` and returns its output. If used in the context
`),ll=a("code"),bh=r("as_target_processor()"),wh=r(` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),Xr=a("a"),yh=r("pad()"),kh=r(". Please refer to the docstring of the above two methods for more information."),Th=d(),Gr=a("div"),w(ms.$$.fragment),$h=d(),Wt=a("div"),w(hs.$$.fragment),xh=d(),fs=a("p"),Wh=r(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Jr=a("a"),Vh=r("from_pretrained()"),jh=r(" method."),Fh=d(),w(Po.$$.fragment),Ch=d(),zo=a("div"),w(us.$$.fragment),Eh=d(),gs=a("p"),qh=r("This method forwards all its arguments to PreTrainedTokenizer\u2019s "),Zr=a("a"),Ph=r("batch_decode()"),zh=r(`. Please
refer to the docstring of this method for more information.`),Mh=d(),Mo=a("div"),w(_s.$$.fragment),Ah=d(),vs=a("p"),Oh=r("This method forwards all its arguments to PreTrainedTokenizer\u2019s "),Kr=a("a"),Lh=r("decode()"),Dh=r(`. Please refer
to the docstring of this method for more information.`),sd=d(),Bt=a("h2"),Ao=a("a"),cl=a("span"),w(bs.$$.fragment),Sh=d(),dl=a("span"),Nh=r("Wav2Vec2ProcessorWithLM"),nd=d(),B=a("div"),w(ws.$$.fragment),Ih=d(),pl=a("p"),Bh=r(`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor, a Wav2Vec2 CTC tokenizer and a decoder
with language model support into a single processor for language model boosted speech recognition decoding.`),Uh=d(),Oo=a("div"),w(ys.$$.fragment),Hh=d(),ut=a("p"),Rh=r(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),ks=a("a"),ml=a("strong"),Xh=r("call"),Gh=r("()"),Jh=r(` and returns its output. If used in the context
`),hl=a("code"),Zh=r("as_target_processor()"),Kh=r(` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),Ts=a("a"),fl=a("strong"),Qh=r("call"),Yh=r("()"),ef=r(`. Please refer to the docstring of the above two
methods for more information.`),tf=d(),Lo=a("div"),w($s.$$.fragment),of=d(),gt=a("p"),af=r(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),Qr=a("a"),sf=r("pad()"),nf=r(` and returns its output. If used in the context
`),ul=a("code"),rf=r("as_target_processor()"),lf=r(` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),Yr=a("a"),cf=r("pad()"),df=r(`. Please refer to the docstring of the above two methods
for more information.`),pf=d(),Vt=a("div"),w(xs.$$.fragment),mf=d(),Ws=a("p"),hf=r("Instantiate a "),ei=a("a"),ff=r("Wav2Vec2ProcessorWithLM"),uf=r(" from a pretrained Wav2Vec2 processor."),gf=d(),w(Do.$$.fragment),_f=d(),ti=a("div"),w(Vs.$$.fragment),vf=d(),jt=a("div"),w(js.$$.fragment),bf=d(),gl=a("p"),wf=r("Batch decode output logits to audio transcription with language model support."),yf=d(),w(So.$$.fragment),kf=d(),Ft=a("div"),w(Fs.$$.fragment),Tf=d(),_l=a("p"),$f=r("Decode output logits to audio transcription with language model support."),xf=d(),w(No.$$.fragment),rd=d(),Ut=a("h2"),Io=a("a"),vl=a("span"),w(Cs.$$.fragment),Wf=d(),bl=a("span"),Vf=r("Wav2Vec2 specific outputs"),id=d(),Ht=a("div"),w(Es.$$.fragment),jf=d(),qs=a("p"),Ff=r("Output type of "),wl=a("code"),Cf=r("Wav2Vec2DecoderWithLM"),Ef=r(", with transcription."),ld=d(),Rt=a("div"),w(Ps.$$.fragment),qf=d(),yl=a("p"),Pf=r("Base class for models that have been trained with the Wav2Vec2 loss objective."),cd=d(),Xt=a("div"),w(zs.$$.fragment),zf=d(),Ms=a("p"),Mf=r("Output type of "),oi=a("a"),Af=r("Wav2Vec2ForPreTraining"),Of=r(", with potential hidden states and attentions."),dd=d(),_t=a("div"),w(As.$$.fragment),Lf=d(),Os=a("p"),Df=r("Output type of "),kl=a("code"),Sf=r("FlaxWav2Vec2BaseModelOutput"),Nf=r(", with potential hidden states and attentions."),If=d(),Bo=a("div"),w(Ls.$$.fragment),Bf=d(),Tl=a("p"),Uf=r("\u201CReturns a new object replacing the specified fields with new values."),pd=d(),vt=a("div"),w(Ds.$$.fragment),Hf=d(),Ss=a("p"),Rf=r("Output type of "),$l=a("code"),Xf=r("FlaxWav2Vec2ForPreTrainingOutput"),Gf=r(", with potential hidden states and attentions."),Jf=d(),Uo=a("div"),w(Ns.$$.fragment),Zf=d(),xl=a("p"),Kf=r("\u201CReturns a new object replacing the specified fields with new values."),md=d(),Gt=a("h2"),Ho=a("a"),Wl=a("span"),w(Is.$$.fragment),Qf=d(),Vl=a("span"),Yf=r("Wav2Vec2Model"),hd=d(),xe=a("div"),w(Bs.$$.fragment),eu=d(),Us=a("p"),tu=r(`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),Hs=a("a"),ou=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),au=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),su=d(),Rs=a("p"),nu=r("This model inherits from "),ai=a("a"),ru=r("PreTrainedModel"),iu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),lu=d(),Xs=a("p"),cu=r("This model is a PyTorch "),Gs=a("a"),du=r("torch.nn.Module"),pu=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mu=d(),Ge=a("div"),w(Js.$$.fragment),hu=d(),Jt=a("p"),fu=r("The "),si=a("a"),uu=r("Wav2Vec2Model"),gu=r(" forward method, overrides the "),jl=a("code"),_u=r("__call__"),vu=r(" special method."),bu=d(),w(Ro.$$.fragment),wu=d(),w(Xo.$$.fragment),fd=d(),Zt=a("h2"),Go=a("a"),Fl=a("span"),w(Zs.$$.fragment),yu=d(),Cl=a("span"),ku=r("Wav2Vec2ForCTC"),ud=d(),We=a("div"),w(Ks.$$.fragment),Tu=d(),Kt=a("p"),$u=r("Wav2Vec2 Model with a "),El=a("code"),xu=r("language modeling"),Wu=r(` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),Qs=a("a"),Vu=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),ju=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Fu=d(),Ys=a("p"),Cu=r("This model inherits from "),ni=a("a"),Eu=r("PreTrainedModel"),qu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Pu=d(),en=a("p"),zu=r("This model is a PyTorch "),tn=a("a"),Mu=r("torch.nn.Module"),Au=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ou=d(),ze=a("div"),w(on.$$.fragment),Lu=d(),Qt=a("p"),Du=r("The "),ri=a("a"),Su=r("Wav2Vec2ForCTC"),Nu=r(" forward method, overrides the "),ql=a("code"),Iu=r("__call__"),Bu=r(" special method."),Uu=d(),w(Jo.$$.fragment),Hu=d(),w(Zo.$$.fragment),Ru=d(),w(Ko.$$.fragment),gd=d(),Yt=a("h2"),Qo=a("a"),Pl=a("span"),w(an.$$.fragment),Xu=d(),zl=a("span"),Gu=r("Wav2Vec2ForSequenceClassification"),_d=d(),se=a("div"),w(sn.$$.fragment),Ju=d(),Ml=a("p"),Zu=r(`Wav2Vec2 Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),Ku=d(),nn=a("p"),Qu=r("Wav2Vec2 was proposed in "),rn=a("a"),Yu=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),eg=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),tg=d(),ln=a("p"),og=r("This model inherits from "),ii=a("a"),ag=r("PreTrainedModel"),sg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ng=d(),cn=a("p"),rg=r("This model is a PyTorch "),dn=a("a"),ig=r("torch.nn.Module"),lg=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cg=d(),Me=a("div"),w(pn.$$.fragment),dg=d(),eo=a("p"),pg=r("The "),li=a("a"),mg=r("Wav2Vec2ForSequenceClassification"),hg=r(" forward method, overrides the "),Al=a("code"),fg=r("__call__"),ug=r(" special method."),gg=d(),w(Yo.$$.fragment),_g=d(),w(ea.$$.fragment),vg=d(),w(ta.$$.fragment),vd=d(),to=a("h2"),oa=a("a"),Ol=a("span"),w(mn.$$.fragment),bg=d(),Ll=a("span"),wg=r("Wav2Vec2ForAudioFrameClassification"),bd=d(),ne=a("div"),w(hn.$$.fragment),yg=d(),Dl=a("p"),kg=r("Wav2Vec2 Model with a frame classification head on top for tasks like Speaker Diarization."),Tg=d(),fn=a("p"),$g=r("Wav2Vec2 was proposed in "),un=a("a"),xg=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Wg=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Vg=d(),gn=a("p"),jg=r("This model inherits from "),ci=a("a"),Fg=r("PreTrainedModel"),Cg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Eg=d(),_n=a("p"),qg=r("This model is a PyTorch "),vn=a("a"),Pg=r("torch.nn.Module"),zg=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Mg=d(),Je=a("div"),w(bn.$$.fragment),Ag=d(),oo=a("p"),Og=r("The "),di=a("a"),Lg=r("Wav2Vec2ForAudioFrameClassification"),Dg=r(" forward method, overrides the "),Sl=a("code"),Sg=r("__call__"),Ng=r(" special method."),Ig=d(),w(aa.$$.fragment),Bg=d(),w(sa.$$.fragment),wd=d(),ao=a("h2"),na=a("a"),Nl=a("span"),w(wn.$$.fragment),Ug=d(),Il=a("span"),Hg=r("Wav2Vec2ForXVector"),yd=d(),re=a("div"),w(yn.$$.fragment),Rg=d(),Bl=a("p"),Xg=r("Wav2Vec2 Model with an XVector feature extraction head on top for tasks like Speaker Verification."),Gg=d(),kn=a("p"),Jg=r("Wav2Vec2 was proposed in "),Tn=a("a"),Zg=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Kg=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Qg=d(),$n=a("p"),Yg=r("This model inherits from "),pi=a("a"),e_=r("PreTrainedModel"),t_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),o_=d(),xn=a("p"),a_=r("This model is a PyTorch "),Wn=a("a"),s_=r("torch.nn.Module"),n_=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),r_=d(),Ze=a("div"),w(Vn.$$.fragment),i_=d(),so=a("p"),l_=r("The "),mi=a("a"),c_=r("Wav2Vec2ForXVector"),d_=r(" forward method, overrides the "),Ul=a("code"),p_=r("__call__"),m_=r(" special method."),h_=d(),w(ra.$$.fragment),f_=d(),w(ia.$$.fragment),kd=d(),no=a("h2"),la=a("a"),Hl=a("span"),w(jn.$$.fragment),u_=d(),Rl=a("span"),g_=r("Wav2Vec2ForPreTraining"),Td=d(),Ve=a("div"),w(Fn.$$.fragment),__=d(),ro=a("p"),v_=r("Wav2Vec2 Model with a quantizer and "),Xl=a("code"),b_=r("VQ"),w_=r(` head on top.
Wav2Vec2 was proposed in `),Cn=a("a"),y_=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),k_=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),T_=d(),En=a("p"),$_=r("This model inherits from "),hi=a("a"),x_=r("PreTrainedModel"),W_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),V_=d(),qn=a("p"),j_=r("This model is a PyTorch "),Pn=a("a"),F_=r("torch.nn.Module"),C_=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),E_=d(),Ke=a("div"),w(zn.$$.fragment),q_=d(),io=a("p"),P_=r("The "),fi=a("a"),z_=r("Wav2Vec2ForPreTraining"),M_=r(" forward method, overrides the "),Gl=a("code"),A_=r("__call__"),O_=r(" special method."),L_=d(),w(ca.$$.fragment),D_=d(),w(da.$$.fragment),$d=d(),lo=a("h2"),pa=a("a"),Jl=a("span"),w(Mn.$$.fragment),S_=d(),Zl=a("span"),N_=r("TFWav2Vec2Model"),xd=d(),ie=a("div"),w(An.$$.fragment),I_=d(),Kl=a("p"),B_=r("The bare TFWav2Vec2 Model transformer outputing raw hidden-states without any specific head on top."),U_=d(),On=a("p"),H_=r("This model inherits from "),ui=a("a"),R_=r("TFPreTrainedModel"),X_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),G_=d(),Ln=a("p"),J_=r("This model is also a "),Dn=a("a"),Z_=r("tf.keras.Model"),K_=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Q_=d(),w(ma.$$.fragment),Y_=d(),Qe=a("div"),w(Sn.$$.fragment),ev=d(),co=a("p"),tv=r("The "),gi=a("a"),ov=r("TFWav2Vec2Model"),av=r(" forward method, overrides the "),Ql=a("code"),sv=r("__call__"),nv=r(" special method."),rv=d(),w(ha.$$.fragment),iv=d(),w(fa.$$.fragment),Wd=d(),po=a("h2"),ua=a("a"),Yl=a("span"),w(Nn.$$.fragment),lv=d(),ec=a("span"),cv=r("TFWav2Vec2ForCTC"),Vd=d(),le=a("div"),w(In.$$.fragment),dv=d(),Bn=a("p"),pv=r("TFWav2Vec2 Model with a "),tc=a("code"),mv=r("language modeling"),hv=r(" head on top for Connectionist Temporal Classification (CTC)."),fv=d(),Un=a("p"),uv=r("This model inherits from "),_i=a("a"),gv=r("TFPreTrainedModel"),_v=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vv=d(),Hn=a("p"),bv=r("This model is also a "),Rn=a("a"),wv=r("tf.keras.Model"),yv=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kv=d(),w(ga.$$.fragment),Tv=d(),Ye=a("div"),w(Xn.$$.fragment),$v=d(),mo=a("p"),xv=r("The "),vi=a("a"),Wv=r("TFWav2Vec2ForCTC"),Vv=r(" forward method, overrides the "),oc=a("code"),jv=r("__call__"),Fv=r(" special method."),Cv=d(),w(_a.$$.fragment),Ev=d(),w(va.$$.fragment),jd=d(),ho=a("h2"),ba=a("a"),ac=a("span"),w(Gn.$$.fragment),qv=d(),sc=a("span"),Pv=r("FlaxWav2Vec2Model"),Fd=d(),Z=a("div"),w(Jn.$$.fragment),zv=d(),Zn=a("p"),Mv=r(`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),Kn=a("a"),Av=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Ov=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Lv=d(),Qn=a("p"),Dv=r("This model inherits from "),bi=a("a"),Sv=r("FlaxPreTrainedModel"),Nv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Iv=d(),Yn=a("p"),Bv=r(`This model is also a Flax Linen
`),er=a("a"),Uv=r("flax.nn.Module"),Hv=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Rv=d(),nc=a("p"),Xv=r("Finally, this model supports inherent JAX features such as:"),Gv=d(),bt=a("ul"),rc=a("li"),tr=a("a"),Jv=r("Just-In-Time (JIT) compilation"),Zv=d(),ic=a("li"),or=a("a"),Kv=r("Automatic Differentiation"),Qv=d(),lc=a("li"),ar=a("a"),Yv=r("Vectorization"),e2=d(),cc=a("li"),sr=a("a"),t2=r("Parallelization"),o2=d(),et=a("div"),w(nr.$$.fragment),a2=d(),fo=a("p"),s2=r("The "),dc=a("code"),n2=r("FlaxWav2Vec2PreTrainedModel"),r2=r(" forward method, overrides the "),pc=a("code"),i2=r("__call__"),l2=r(" special method."),c2=d(),w(wa.$$.fragment),d2=d(),w(ya.$$.fragment),Cd=d(),uo=a("h2"),ka=a("a"),mc=a("span"),w(rr.$$.fragment),p2=d(),hc=a("span"),m2=r("FlaxWav2Vec2ForCTC"),Ed=d(),K=a("div"),w(ir.$$.fragment),h2=d(),go=a("p"),f2=r("Wav2Vec2 Model with a "),fc=a("code"),u2=r("language modeling"),g2=r(` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),lr=a("a"),_2=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),v2=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),b2=d(),cr=a("p"),w2=r("This model inherits from "),wi=a("a"),y2=r("FlaxPreTrainedModel"),k2=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),T2=d(),dr=a("p"),$2=r(`This model is also a Flax Linen
`),pr=a("a"),x2=r("flax.nn.Module"),W2=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),V2=d(),uc=a("p"),j2=r("Finally, this model supports inherent JAX features such as:"),F2=d(),wt=a("ul"),gc=a("li"),mr=a("a"),C2=r("Just-In-Time (JIT) compilation"),E2=d(),_c=a("li"),hr=a("a"),q2=r("Automatic Differentiation"),P2=d(),vc=a("li"),fr=a("a"),z2=r("Vectorization"),M2=d(),bc=a("li"),ur=a("a"),A2=r("Parallelization"),O2=d(),tt=a("div"),w(gr.$$.fragment),L2=d(),_o=a("p"),D2=r("The "),wc=a("code"),S2=r("FlaxWav2Vec2PreTrainedModel"),N2=r(" forward method, overrides the "),yc=a("code"),I2=r("__call__"),B2=r(" special method."),U2=d(),w(Ta.$$.fragment),H2=d(),w($a.$$.fragment),qd=d(),vo=a("h2"),xa=a("a"),kc=a("span"),w(_r.$$.fragment),R2=d(),Tc=a("span"),X2=r("FlaxWav2Vec2ForPreTraining"),Pd=d(),Q=a("div"),w(vr.$$.fragment),G2=d(),bo=a("p"),J2=r("Wav2Vec2 Model with a quantizer and "),$c=a("code"),Z2=r("VQ"),K2=r(` head on top.
Wav2Vec2 was proposed in `),br=a("a"),Q2=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Y2=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),eb=d(),wr=a("p"),tb=r("This model inherits from "),yi=a("a"),ob=r("FlaxPreTrainedModel"),ab=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sb=d(),yr=a("p"),nb=r(`This model is also a Flax Linen
`),kr=a("a"),rb=r("flax.nn.Module"),ib=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),lb=d(),xc=a("p"),cb=r("Finally, this model supports inherent JAX features such as:"),db=d(),yt=a("ul"),Wc=a("li"),Tr=a("a"),pb=r("Just-In-Time (JIT) compilation"),mb=d(),Vc=a("li"),$r=a("a"),hb=r("Automatic Differentiation"),fb=d(),jc=a("li"),xr=a("a"),ub=r("Vectorization"),gb=d(),Fc=a("li"),Wr=a("a"),_b=r("Parallelization"),vb=d(),ot=a("div"),w(Vr.$$.fragment),bb=d(),wo=a("p"),wb=r("The "),ki=a("a"),yb=r("FlaxWav2Vec2ForPreTraining"),kb=r(" forward method, overrides the "),Cc=a("code"),Tb=r("__call__"),$b=r(" special method."),xb=d(),w(Wa.$$.fragment),Wb=d(),w(Va.$$.fragment),this.h()},l(o){const g=eT('[data-svelte="svelte-1phssyn"]',document.head);c=s(g,"META",{name:!0,content:!0}),g.forEach(t),b=p(o),f=s(o,"H1",{class:!0});var jr=n(f);h=s(jr,"A",{id:!0,class:!0,href:!0});var Ec=n(h);v=s(Ec,"SPAN",{});var qc=n(v);y(l.$$.fragment,qc),qc.forEach(t),Ec.forEach(t),u=p(jr),j=s(jr,"SPAN",{});var Pc=n(j);L=i(Pc,"Wav2Vec2"),Pc.forEach(t),jr.forEach(t),P=p(o),C=s(o,"H2",{class:!0});var Fr=n(C);M=s(Fr,"A",{id:!0,class:!0,href:!0});var zc=n(M);A=s(zc,"SPAN",{});var Mc=n(A);y(H.$$.fragment,Mc),Mc.forEach(t),zc.forEach(t),D=p(Fr),q=s(Fr,"SPAN",{});var Ac=n(q);je=i(Ac,"Overview"),Ac.forEach(t),Fr.forEach(t),ge=p(o),I=s(o,"P",{});var Cr=n(I);U=i(Cr,"The Wav2Vec2 model was proposed in "),_e=s(Cr,"A",{href:!0,rel:!0});var Oc=n(_e);Se=i(Oc,"wav2vec 2.0: A Framework for Self-Supervised Learning of Speech Representations"),Oc.forEach(t),z=i(Cr," by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael Auli."),Cr.forEach(t),N=p(o),Fe=s(o,"P",{});var Lc=n(Fe);ve=i(Lc,"The abstract from the paper is the following:"),Lc.forEach(t),He=p(o),Ce=s(o,"P",{});var Dc=n(Ce);te=s(Dc,"EM",{});var Sc=n(te);lt=i(Sc,`We show for the first time that learning powerful representations from speech audio alone followed by fine-tuning on
transcribed speech can outperform the best semi-supervised methods while being conceptually simpler. wav2vec 2.0 masks
the speech input in the latent space and solves a contrastive task defined over a quantization of the latent
representations which are jointly learned. Experiments using all labeled data of Librispeech achieve 1.8/3.3 WER on the
clean/other test sets. When lowering the amount of labeled data to one hour, wav2vec 2.0 outperforms the previous state
of the art on the 100 hour subset while using 100 times less labeled data. Using just ten minutes of labeled data and
pre-training on 53k hours of unlabeled data still achieves 4.8/8.2 WER. This demonstrates the feasibility of speech
recognition with limited amounts of labeled data.`),Sc.forEach(t),Dc.forEach(t),Re=p(o),O=s(o,"P",{});var Nc=n(O);ct=i(Nc,"Tips:"),Nc.forEach(t),ce=p(o),de=s(o,"UL",{});var Er=n(de);Ne=s(Er,"LI",{});var Ic=n(Ne);be=i(Ic,"Wav2Vec2 is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),Ic.forEach(t),dt=p(Er),we=s(Er,"LI",{});var qr=n(we);oe=i(qr,`Wav2Vec2 model was trained using connectionist temporal classification (CTC) so the model output has to be decoded
using `),Ee=s(qr,"A",{href:!0});var Bc=n(Ee);ye=i(Bc,"Wav2Vec2CTCTokenizer"),Bc.forEach(t),pt=i(qr,"."),qr.forEach(t),Er.forEach(t),V=p(o),E=s(o,"P",{});var Pr=n(E);Ie=i(Pr,"This model was contributed by "),Be=s(Pr,"A",{href:!0,rel:!0});var Uc=n(Be);Mt=i(Uc,"patrickvonplaten"),Uc.forEach(t),ae=i(Pr,"."),Pr.forEach(t),$t=p(o),ke=s(o,"H2",{class:!0});var zr=n(ke);qe=s(zr,"A",{id:!0,class:!0,href:!0});var Hc=n(qe);R=s(Hc,"SPAN",{});var Rc=n(R);y(X.$$.fragment,Rc),Rc.forEach(t),Hc.forEach(t),At=p(zr),mt=s(zr,"SPAN",{});var Xc=n(mt);Te=i(Xc,"Wav2Vec2Config"),Xc.forEach(t),zr.forEach(t),xt=p(o),G=s(o,"DIV",{class:!0});var kt=n(G);y($e.$$.fragment,kt),Ot=p(kt),Lt=s(kt,"P",{});var yo=n(Lt);Jp=i(yo,"This is the configuration class to store the configuration of a "),Ar=s(yo,"A",{href:!0});var Gc=n(Ar);Zp=i(Gc,"Wav2Vec2Model"),Gc.forEach(t),Kp=i(yo,`. It is used to instantiate an
Wav2Vec2 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Wav2Vec2
`),Ra=s(yo,"A",{href:!0,rel:!0});var Jc=n(Ra);Qp=i(Jc,"facebook/wav2vec2-base-960h"),Jc.forEach(t),Yp=i(yo," architecture."),yo.forEach(t),em=p(kt),Dt=s(kt,"P",{});var ko=n(Dt);tm=i(ko,"Configuration objects inherit from "),Or=s(ko,"A",{href:!0});var Zc=n(Or);om=i(Zc,"PretrainedConfig"),Zc.forEach(t),am=i(ko,` and can be used to control the model outputs. Read the
documentation from `),Lr=s(ko,"A",{href:!0});var Kc=n(Lr);sm=i(Kc,"PretrainedConfig"),Kc.forEach(t),nm=i(ko," for more information."),ko.forEach(t),rm=p(kt),y(To.$$.fragment,kt),kt.forEach(t),Qc=p(o),St=s(o,"H2",{class:!0});var Mr=n(St);$o=s(Mr,"A",{id:!0,class:!0,href:!0});var qb=n($o);Ui=s(qb,"SPAN",{});var Pb=n(Ui);y(Xa.$$.fragment,Pb),Pb.forEach(t),qb.forEach(t),im=p(Mr),Hi=s(Mr,"SPAN",{});var zb=n(Hi);lm=i(zb,"Wav2Vec2CTCTokenizer"),zb.forEach(t),Mr.forEach(t),Yc=p(o),J=s(o,"DIV",{class:!0});var Ae=n(J);y(Ga.$$.fragment,Ae),cm=p(Ae),Ri=s(Ae,"P",{});var Mb=n(Ri);dm=i(Mb,"Constructs a Wav2Vec2CTC tokenizer."),Mb.forEach(t),pm=p(Ae),Ja=s(Ae,"P",{});var Md=n(Ja);mm=i(Md,"This tokenizer inherits from "),Dr=s(Md,"A",{href:!0});var Ab=n(Dr);hm=i(Ab,"PreTrainedTokenizer"),Ab.forEach(t),fm=i(Md,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),Md.forEach(t),um=p(Ae),xo=s(Ae,"DIV",{class:!0});var Ad=n(xo);y(Za.$$.fragment,Ad),gm=p(Ad),Xi=s(Ad,"P",{});var Ob=n(Xi);_m=i(Ob,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),Ob.forEach(t),Ad.forEach(t),vm=p(Ae),Sr=s(Ae,"DIV",{class:!0});var Lb=n(Sr);y(Ka.$$.fragment,Lb),Lb.forEach(t),bm=p(Ae),Xe=s(Ae,"DIV",{class:!0});var ja=n(Xe);y(Qa.$$.fragment,ja),wm=p(ja),Gi=s(ja,"P",{});var Db=n(Gi);ym=i(Db,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),Db.forEach(t),km=p(ja),Ya=s(ja,"P",{});var Od=n(Ya);Tm=i(Od,"Similar to doing "),Ji=s(Od,"CODE",{});var Sb=n(Ji);$m=i(Sb,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Sb.forEach(t),xm=i(Od,"."),Od.forEach(t),Wm=p(ja),y(Wo.$$.fragment,ja),ja.forEach(t),Vm=p(Ae),Vo=s(Ae,"DIV",{class:!0});var Ld=n(Vo);y(es.$$.fragment,Ld),jm=p(Ld),Zi=s(Ld,"P",{});var Nb=n(Zi);Fm=i(Nb,"Convert a list of lists of token ids into a list of strings by calling decode."),Nb.forEach(t),Ld.forEach(t),Ae.forEach(t),ed=p(o),Nt=s(o,"H2",{class:!0});var Dd=n(Nt);jo=s(Dd,"A",{id:!0,class:!0,href:!0});var Ib=n(jo);Ki=s(Ib,"SPAN",{});var Bb=n(Ki);y(ts.$$.fragment,Bb),Bb.forEach(t),Ib.forEach(t),Cm=p(Dd),Qi=s(Dd,"SPAN",{});var Ub=n(Qi);Em=i(Ub,"Wav2Vec2FeatureExtractor"),Ub.forEach(t),Dd.forEach(t),td=p(o),Ue=s(o,"DIV",{class:!0});var Fa=n(Ue);y(os.$$.fragment,Fa),qm=p(Fa),Yi=s(Fa,"P",{});var Hb=n(Yi);Pm=i(Hb,"Constructs a Wav2Vec2 feature extractor."),Hb.forEach(t),zm=p(Fa),as=s(Fa,"P",{});var Sd=n(as);Mm=i(Sd,"This feature extractor inherits from "),Nr=s(Sd,"A",{href:!0});var Rb=n(Nr);Am=i(Rb,"SequenceFeatureExtractor"),Rb.forEach(t),Om=i(Sd,` which contains
most of the main methods. Users should refer to this superclass for more information regarding those methods.`),Sd.forEach(t),Lm=p(Fa),Fo=s(Fa,"DIV",{class:!0});var Nd=n(Fo);y(ss.$$.fragment,Nd),Dm=p(Nd),el=s(Nd,"P",{});var Xb=n(el);Sm=i(Xb,"Main method to featurize and prepare for the model one or several sequence(s). sequences."),Xb.forEach(t),Nd.forEach(t),Fa.forEach(t),od=p(o),It=s(o,"H2",{class:!0});var Id=n(It);Co=s(Id,"A",{id:!0,class:!0,href:!0});var Gb=n(Co);tl=s(Gb,"SPAN",{});var Jb=n(tl);y(ns.$$.fragment,Jb),Jb.forEach(t),Gb.forEach(t),Nm=p(Id),ol=s(Id,"SPAN",{});var Zb=n(ol);Im=i(Zb,"Wav2Vec2Processor"),Zb.forEach(t),Id.forEach(t),ad=p(o),S=s(o,"DIV",{class:!0});var ee=n(S);y(rs.$$.fragment,ee),Bm=p(ee),al=s(ee,"P",{});var Kb=n(al);Um=i(Kb,`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor and a Wav2Vec2 CTC tokenizer into a single
processor.`),Kb.forEach(t),Hm=p(ee),Pe=s(ee,"P",{});var Tt=n(Pe);Ir=s(Tt,"A",{href:!0});var Qb=n(Ir);Rm=i(Qb,"Wav2Vec2Processor"),Qb.forEach(t),Xm=i(Tt," offers all the functionalities of "),Br=s(Tt,"A",{href:!0});var Yb=n(Br);Gm=i(Yb,"Wav2Vec2FeatureExtractor"),Yb.forEach(t),Jm=i(Tt," and "),Ur=s(Tt,"A",{href:!0});var ew=n(Ur);Zm=i(ew,"PreTrainedTokenizer"),ew.forEach(t),Km=i(Tt,`.
See the docstring of `),is=s(Tt,"A",{href:!0});var Vb=n(is);sl=s(Vb,"STRONG",{});var tw=n(sl);Qm=i(tw,"call"),tw.forEach(t),Ym=i(Vb,"()"),Vb.forEach(t),eh=i(Tt," and "),Hr=s(Tt,"A",{href:!0});var ow=n(Hr);th=i(ow,"decode()"),ow.forEach(t),oh=i(Tt," for more information."),Tt.forEach(t),ah=p(ee),Eo=s(ee,"DIV",{class:!0});var Bd=n(Eo);y(ls.$$.fragment,Bd),sh=p(Bd),ht=s(Bd,"P",{});var Ca=n(ht);nh=i(Ca,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),cs=s(Ca,"A",{href:!0});var jb=n(cs);nl=s(jb,"STRONG",{});var aw=n(nl);rh=i(aw,"call"),aw.forEach(t),ih=i(jb,"()"),jb.forEach(t),lh=i(Ca,` and returns its output. If used in the context
`),rl=s(Ca,"CODE",{});var sw=n(rl);ch=i(sw,"as_target_processor()"),sw.forEach(t),dh=i(Ca,` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),ds=s(Ca,"A",{href:!0});var Fb=n(ds);il=s(Fb,"STRONG",{});var nw=n(il);ph=i(nw,"call"),nw.forEach(t),mh=i(Fb,"()"),Fb.forEach(t),hh=i(Ca,". Please refer to the docstring of the above two methods for more information."),Ca.forEach(t),Bd.forEach(t),fh=p(ee),qo=s(ee,"DIV",{class:!0});var Ud=n(qo);y(ps.$$.fragment,Ud),uh=p(Ud),ft=s(Ud,"P",{});var Ea=n(ft);gh=i(Ea,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),Rr=s(Ea,"A",{href:!0});var rw=n(Rr);_h=i(rw,"pad()"),rw.forEach(t),vh=i(Ea,` and returns its output. If used in the context
`),ll=s(Ea,"CODE",{});var iw=n(ll);bh=i(iw,"as_target_processor()"),iw.forEach(t),wh=i(Ea,` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),Xr=s(Ea,"A",{href:!0});var lw=n(Xr);yh=i(lw,"pad()"),lw.forEach(t),kh=i(Ea,". Please refer to the docstring of the above two methods for more information."),Ea.forEach(t),Ud.forEach(t),Th=p(ee),Gr=s(ee,"DIV",{class:!0});var cw=n(Gr);y(ms.$$.fragment,cw),cw.forEach(t),$h=p(ee),Wt=s(ee,"DIV",{class:!0});var Ti=n(Wt);y(hs.$$.fragment,Ti),xh=p(Ti),fs=s(Ti,"P",{});var Hd=n(fs);Wh=i(Hd,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Jr=s(Hd,"A",{href:!0});var dw=n(Jr);Vh=i(dw,"from_pretrained()"),dw.forEach(t),jh=i(Hd," method."),Hd.forEach(t),Fh=p(Ti),y(Po.$$.fragment,Ti),Ti.forEach(t),Ch=p(ee),zo=s(ee,"DIV",{class:!0});var Rd=n(zo);y(us.$$.fragment,Rd),Eh=p(Rd),gs=s(Rd,"P",{});var Xd=n(gs);qh=i(Xd,"This method forwards all its arguments to PreTrainedTokenizer\u2019s "),Zr=s(Xd,"A",{href:!0});var pw=n(Zr);Ph=i(pw,"batch_decode()"),pw.forEach(t),zh=i(Xd,`. Please
refer to the docstring of this method for more information.`),Xd.forEach(t),Rd.forEach(t),Mh=p(ee),Mo=s(ee,"DIV",{class:!0});var Gd=n(Mo);y(_s.$$.fragment,Gd),Ah=p(Gd),vs=s(Gd,"P",{});var Jd=n(vs);Oh=i(Jd,"This method forwards all its arguments to PreTrainedTokenizer\u2019s "),Kr=s(Jd,"A",{href:!0});var mw=n(Kr);Lh=i(mw,"decode()"),mw.forEach(t),Dh=i(Jd,`. Please refer
to the docstring of this method for more information.`),Jd.forEach(t),Gd.forEach(t),ee.forEach(t),sd=p(o),Bt=s(o,"H2",{class:!0});var Zd=n(Bt);Ao=s(Zd,"A",{id:!0,class:!0,href:!0});var hw=n(Ao);cl=s(hw,"SPAN",{});var fw=n(cl);y(bs.$$.fragment,fw),fw.forEach(t),hw.forEach(t),Sh=p(Zd),dl=s(Zd,"SPAN",{});var uw=n(dl);Nh=i(uw,"Wav2Vec2ProcessorWithLM"),uw.forEach(t),Zd.forEach(t),nd=p(o),B=s(o,"DIV",{class:!0});var pe=n(B);y(ws.$$.fragment,pe),Ih=p(pe),pl=s(pe,"P",{});var gw=n(pl);Bh=i(gw,`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor, a Wav2Vec2 CTC tokenizer and a decoder
with language model support into a single processor for language model boosted speech recognition decoding.`),gw.forEach(t),Uh=p(pe),Oo=s(pe,"DIV",{class:!0});var Kd=n(Oo);y(ys.$$.fragment,Kd),Hh=p(Kd),ut=s(Kd,"P",{});var qa=n(ut);Rh=i(qa,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),ks=s(qa,"A",{href:!0});var Cb=n(ks);ml=s(Cb,"STRONG",{});var _w=n(ml);Xh=i(_w,"call"),_w.forEach(t),Gh=i(Cb,"()"),Cb.forEach(t),Jh=i(qa,` and returns its output. If used in the context
`),hl=s(qa,"CODE",{});var vw=n(hl);Zh=i(vw,"as_target_processor()"),vw.forEach(t),Kh=i(qa,` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),Ts=s(qa,"A",{href:!0});var Eb=n(Ts);fl=s(Eb,"STRONG",{});var bw=n(fl);Qh=i(bw,"call"),bw.forEach(t),Yh=i(Eb,"()"),Eb.forEach(t),ef=i(qa,`. Please refer to the docstring of the above two
methods for more information.`),qa.forEach(t),Kd.forEach(t),tf=p(pe),Lo=s(pe,"DIV",{class:!0});var Qd=n(Lo);y($s.$$.fragment,Qd),of=p(Qd),gt=s(Qd,"P",{});var Pa=n(gt);af=i(Pa,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),Qr=s(Pa,"A",{href:!0});var ww=n(Qr);sf=i(ww,"pad()"),ww.forEach(t),nf=i(Pa,` and returns its output. If used in the context
`),ul=s(Pa,"CODE",{});var yw=n(ul);rf=i(yw,"as_target_processor()"),yw.forEach(t),lf=i(Pa,` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),Yr=s(Pa,"A",{href:!0});var kw=n(Yr);cf=i(kw,"pad()"),kw.forEach(t),df=i(Pa,`. Please refer to the docstring of the above two methods
for more information.`),Pa.forEach(t),Qd.forEach(t),pf=p(pe),Vt=s(pe,"DIV",{class:!0});var $i=n(Vt);y(xs.$$.fragment,$i),mf=p($i),Ws=s($i,"P",{});var Yd=n(Ws);hf=i(Yd,"Instantiate a "),ei=s(Yd,"A",{href:!0});var Tw=n(ei);ff=i(Tw,"Wav2Vec2ProcessorWithLM"),Tw.forEach(t),uf=i(Yd," from a pretrained Wav2Vec2 processor."),Yd.forEach(t),gf=p($i),y(Do.$$.fragment,$i),$i.forEach(t),_f=p(pe),ti=s(pe,"DIV",{class:!0});var $w=n(ti);y(Vs.$$.fragment,$w),$w.forEach(t),vf=p(pe),jt=s(pe,"DIV",{class:!0});var xi=n(jt);y(js.$$.fragment,xi),bf=p(xi),gl=s(xi,"P",{});var xw=n(gl);wf=i(xw,"Batch decode output logits to audio transcription with language model support."),xw.forEach(t),yf=p(xi),y(So.$$.fragment,xi),xi.forEach(t),kf=p(pe),Ft=s(pe,"DIV",{class:!0});var Wi=n(Ft);y(Fs.$$.fragment,Wi),Tf=p(Wi),_l=s(Wi,"P",{});var Ww=n(_l);$f=i(Ww,"Decode output logits to audio transcription with language model support."),Ww.forEach(t),xf=p(Wi),y(No.$$.fragment,Wi),Wi.forEach(t),pe.forEach(t),rd=p(o),Ut=s(o,"H2",{class:!0});var ep=n(Ut);Io=s(ep,"A",{id:!0,class:!0,href:!0});var Vw=n(Io);vl=s(Vw,"SPAN",{});var jw=n(vl);y(Cs.$$.fragment,jw),jw.forEach(t),Vw.forEach(t),Wf=p(ep),bl=s(ep,"SPAN",{});var Fw=n(bl);Vf=i(Fw,"Wav2Vec2 specific outputs"),Fw.forEach(t),ep.forEach(t),id=p(o),Ht=s(o,"DIV",{class:!0});var tp=n(Ht);y(Es.$$.fragment,tp),jf=p(tp),qs=s(tp,"P",{});var op=n(qs);Ff=i(op,"Output type of "),wl=s(op,"CODE",{});var Cw=n(wl);Cf=i(Cw,"Wav2Vec2DecoderWithLM"),Cw.forEach(t),Ef=i(op,", with transcription."),op.forEach(t),tp.forEach(t),ld=p(o),Rt=s(o,"DIV",{class:!0});var ap=n(Rt);y(Ps.$$.fragment,ap),qf=p(ap),yl=s(ap,"P",{});var Ew=n(yl);Pf=i(Ew,"Base class for models that have been trained with the Wav2Vec2 loss objective."),Ew.forEach(t),ap.forEach(t),cd=p(o),Xt=s(o,"DIV",{class:!0});var sp=n(Xt);y(zs.$$.fragment,sp),zf=p(sp),Ms=s(sp,"P",{});var np=n(Ms);Mf=i(np,"Output type of "),oi=s(np,"A",{href:!0});var qw=n(oi);Af=i(qw,"Wav2Vec2ForPreTraining"),qw.forEach(t),Of=i(np,", with potential hidden states and attentions."),np.forEach(t),sp.forEach(t),dd=p(o),_t=s(o,"DIV",{class:!0});var Vi=n(_t);y(As.$$.fragment,Vi),Lf=p(Vi),Os=s(Vi,"P",{});var rp=n(Os);Df=i(rp,"Output type of "),kl=s(rp,"CODE",{});var Pw=n(kl);Sf=i(Pw,"FlaxWav2Vec2BaseModelOutput"),Pw.forEach(t),Nf=i(rp,", with potential hidden states and attentions."),rp.forEach(t),If=p(Vi),Bo=s(Vi,"DIV",{class:!0});var ip=n(Bo);y(Ls.$$.fragment,ip),Bf=p(ip),Tl=s(ip,"P",{});var zw=n(Tl);Uf=i(zw,"\u201CReturns a new object replacing the specified fields with new values."),zw.forEach(t),ip.forEach(t),Vi.forEach(t),pd=p(o),vt=s(o,"DIV",{class:!0});var ji=n(vt);y(Ds.$$.fragment,ji),Hf=p(ji),Ss=s(ji,"P",{});var lp=n(Ss);Rf=i(lp,"Output type of "),$l=s(lp,"CODE",{});var Mw=n($l);Xf=i(Mw,"FlaxWav2Vec2ForPreTrainingOutput"),Mw.forEach(t),Gf=i(lp,", with potential hidden states and attentions."),lp.forEach(t),Jf=p(ji),Uo=s(ji,"DIV",{class:!0});var cp=n(Uo);y(Ns.$$.fragment,cp),Zf=p(cp),xl=s(cp,"P",{});var Aw=n(xl);Kf=i(Aw,"\u201CReturns a new object replacing the specified fields with new values."),Aw.forEach(t),cp.forEach(t),ji.forEach(t),md=p(o),Gt=s(o,"H2",{class:!0});var dp=n(Gt);Ho=s(dp,"A",{id:!0,class:!0,href:!0});var Ow=n(Ho);Wl=s(Ow,"SPAN",{});var Lw=n(Wl);y(Is.$$.fragment,Lw),Lw.forEach(t),Ow.forEach(t),Qf=p(dp),Vl=s(dp,"SPAN",{});var Dw=n(Vl);Yf=i(Dw,"Wav2Vec2Model"),Dw.forEach(t),dp.forEach(t),hd=p(o),xe=s(o,"DIV",{class:!0});var Ct=n(xe);y(Bs.$$.fragment,Ct),eu=p(Ct),Us=s(Ct,"P",{});var pp=n(Us);tu=i(pp,`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),Hs=s(pp,"A",{href:!0,rel:!0});var Sw=n(Hs);ou=i(Sw,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Sw.forEach(t),au=i(pp,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),pp.forEach(t),su=p(Ct),Rs=s(Ct,"P",{});var mp=n(Rs);nu=i(mp,"This model inherits from "),ai=s(mp,"A",{href:!0});var Nw=n(ai);ru=i(Nw,"PreTrainedModel"),Nw.forEach(t),iu=i(mp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),mp.forEach(t),lu=p(Ct),Xs=s(Ct,"P",{});var hp=n(Xs);cu=i(hp,"This model is a PyTorch "),Gs=s(hp,"A",{href:!0,rel:!0});var Iw=n(Gs);du=i(Iw,"torch.nn.Module"),Iw.forEach(t),pu=i(hp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),hp.forEach(t),mu=p(Ct),Ge=s(Ct,"DIV",{class:!0});var za=n(Ge);y(Js.$$.fragment,za),hu=p(za),Jt=s(za,"P",{});var Fi=n(Jt);fu=i(Fi,"The "),si=s(Fi,"A",{href:!0});var Bw=n(si);uu=i(Bw,"Wav2Vec2Model"),Bw.forEach(t),gu=i(Fi," forward method, overrides the "),jl=s(Fi,"CODE",{});var Uw=n(jl);_u=i(Uw,"__call__"),Uw.forEach(t),vu=i(Fi," special method."),Fi.forEach(t),bu=p(za),y(Ro.$$.fragment,za),wu=p(za),y(Xo.$$.fragment,za),za.forEach(t),Ct.forEach(t),fd=p(o),Zt=s(o,"H2",{class:!0});var fp=n(Zt);Go=s(fp,"A",{id:!0,class:!0,href:!0});var Hw=n(Go);Fl=s(Hw,"SPAN",{});var Rw=n(Fl);y(Zs.$$.fragment,Rw),Rw.forEach(t),Hw.forEach(t),yu=p(fp),Cl=s(fp,"SPAN",{});var Xw=n(Cl);ku=i(Xw,"Wav2Vec2ForCTC"),Xw.forEach(t),fp.forEach(t),ud=p(o),We=s(o,"DIV",{class:!0});var Et=n(We);y(Ks.$$.fragment,Et),Tu=p(Et),Kt=s(Et,"P",{});var Ci=n(Kt);$u=i(Ci,"Wav2Vec2 Model with a "),El=s(Ci,"CODE",{});var Gw=n(El);xu=i(Gw,"language modeling"),Gw.forEach(t),Wu=i(Ci,` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),Qs=s(Ci,"A",{href:!0,rel:!0});var Jw=n(Qs);Vu=i(Jw,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Jw.forEach(t),ju=i(Ci,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Ci.forEach(t),Fu=p(Et),Ys=s(Et,"P",{});var up=n(Ys);Cu=i(up,"This model inherits from "),ni=s(up,"A",{href:!0});var Zw=n(ni);Eu=i(Zw,"PreTrainedModel"),Zw.forEach(t),qu=i(up,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),up.forEach(t),Pu=p(Et),en=s(Et,"P",{});var gp=n(en);zu=i(gp,"This model is a PyTorch "),tn=s(gp,"A",{href:!0,rel:!0});var Kw=n(tn);Mu=i(Kw,"torch.nn.Module"),Kw.forEach(t),Au=i(gp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),gp.forEach(t),Ou=p(Et),ze=s(Et,"DIV",{class:!0});var qt=n(ze);y(on.$$.fragment,qt),Lu=p(qt),Qt=s(qt,"P",{});var Ei=n(Qt);Du=i(Ei,"The "),ri=s(Ei,"A",{href:!0});var Qw=n(ri);Su=i(Qw,"Wav2Vec2ForCTC"),Qw.forEach(t),Nu=i(Ei," forward method, overrides the "),ql=s(Ei,"CODE",{});var Yw=n(ql);Iu=i(Yw,"__call__"),Yw.forEach(t),Bu=i(Ei," special method."),Ei.forEach(t),Uu=p(qt),y(Jo.$$.fragment,qt),Hu=p(qt),y(Zo.$$.fragment,qt),Ru=p(qt),y(Ko.$$.fragment,qt),qt.forEach(t),Et.forEach(t),gd=p(o),Yt=s(o,"H2",{class:!0});var _p=n(Yt);Qo=s(_p,"A",{id:!0,class:!0,href:!0});var ey=n(Qo);Pl=s(ey,"SPAN",{});var ty=n(Pl);y(an.$$.fragment,ty),ty.forEach(t),ey.forEach(t),Xu=p(_p),zl=s(_p,"SPAN",{});var oy=n(zl);Gu=i(oy,"Wav2Vec2ForSequenceClassification"),oy.forEach(t),_p.forEach(t),_d=p(o),se=s(o,"DIV",{class:!0});var at=n(se);y(sn.$$.fragment,at),Ju=p(at),Ml=s(at,"P",{});var ay=n(Ml);Zu=i(ay,`Wav2Vec2 Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),ay.forEach(t),Ku=p(at),nn=s(at,"P",{});var vp=n(nn);Qu=i(vp,"Wav2Vec2 was proposed in "),rn=s(vp,"A",{href:!0,rel:!0});var sy=n(rn);Yu=i(sy,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),sy.forEach(t),eg=i(vp,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),vp.forEach(t),tg=p(at),ln=s(at,"P",{});var bp=n(ln);og=i(bp,"This model inherits from "),ii=s(bp,"A",{href:!0});var ny=n(ii);ag=i(ny,"PreTrainedModel"),ny.forEach(t),sg=i(bp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),bp.forEach(t),ng=p(at),cn=s(at,"P",{});var wp=n(cn);rg=i(wp,"This model is a PyTorch "),dn=s(wp,"A",{href:!0,rel:!0});var ry=n(dn);ig=i(ry,"torch.nn.Module"),ry.forEach(t),lg=i(wp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wp.forEach(t),cg=p(at),Me=s(at,"DIV",{class:!0});var Pt=n(Me);y(pn.$$.fragment,Pt),dg=p(Pt),eo=s(Pt,"P",{});var qi=n(eo);pg=i(qi,"The "),li=s(qi,"A",{href:!0});var iy=n(li);mg=i(iy,"Wav2Vec2ForSequenceClassification"),iy.forEach(t),hg=i(qi," forward method, overrides the "),Al=s(qi,"CODE",{});var ly=n(Al);fg=i(ly,"__call__"),ly.forEach(t),ug=i(qi," special method."),qi.forEach(t),gg=p(Pt),y(Yo.$$.fragment,Pt),_g=p(Pt),y(ea.$$.fragment,Pt),vg=p(Pt),y(ta.$$.fragment,Pt),Pt.forEach(t),at.forEach(t),vd=p(o),to=s(o,"H2",{class:!0});var yp=n(to);oa=s(yp,"A",{id:!0,class:!0,href:!0});var cy=n(oa);Ol=s(cy,"SPAN",{});var dy=n(Ol);y(mn.$$.fragment,dy),dy.forEach(t),cy.forEach(t),bg=p(yp),Ll=s(yp,"SPAN",{});var py=n(Ll);wg=i(py,"Wav2Vec2ForAudioFrameClassification"),py.forEach(t),yp.forEach(t),bd=p(o),ne=s(o,"DIV",{class:!0});var st=n(ne);y(hn.$$.fragment,st),yg=p(st),Dl=s(st,"P",{});var my=n(Dl);kg=i(my,"Wav2Vec2 Model with a frame classification head on top for tasks like Speaker Diarization."),my.forEach(t),Tg=p(st),fn=s(st,"P",{});var kp=n(fn);$g=i(kp,"Wav2Vec2 was proposed in "),un=s(kp,"A",{href:!0,rel:!0});var hy=n(un);xg=i(hy,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),hy.forEach(t),Wg=i(kp,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),kp.forEach(t),Vg=p(st),gn=s(st,"P",{});var Tp=n(gn);jg=i(Tp,"This model inherits from "),ci=s(Tp,"A",{href:!0});var fy=n(ci);Fg=i(fy,"PreTrainedModel"),fy.forEach(t),Cg=i(Tp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Tp.forEach(t),Eg=p(st),_n=s(st,"P",{});var $p=n(_n);qg=i($p,"This model is a PyTorch "),vn=s($p,"A",{href:!0,rel:!0});var uy=n(vn);Pg=i(uy,"torch.nn.Module"),uy.forEach(t),zg=i($p,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$p.forEach(t),Mg=p(st),Je=s(st,"DIV",{class:!0});var Ma=n(Je);y(bn.$$.fragment,Ma),Ag=p(Ma),oo=s(Ma,"P",{});var Pi=n(oo);Og=i(Pi,"The "),di=s(Pi,"A",{href:!0});var gy=n(di);Lg=i(gy,"Wav2Vec2ForAudioFrameClassification"),gy.forEach(t),Dg=i(Pi," forward method, overrides the "),Sl=s(Pi,"CODE",{});var _y=n(Sl);Sg=i(_y,"__call__"),_y.forEach(t),Ng=i(Pi," special method."),Pi.forEach(t),Ig=p(Ma),y(aa.$$.fragment,Ma),Bg=p(Ma),y(sa.$$.fragment,Ma),Ma.forEach(t),st.forEach(t),wd=p(o),ao=s(o,"H2",{class:!0});var xp=n(ao);na=s(xp,"A",{id:!0,class:!0,href:!0});var vy=n(na);Nl=s(vy,"SPAN",{});var by=n(Nl);y(wn.$$.fragment,by),by.forEach(t),vy.forEach(t),Ug=p(xp),Il=s(xp,"SPAN",{});var wy=n(Il);Hg=i(wy,"Wav2Vec2ForXVector"),wy.forEach(t),xp.forEach(t),yd=p(o),re=s(o,"DIV",{class:!0});var nt=n(re);y(yn.$$.fragment,nt),Rg=p(nt),Bl=s(nt,"P",{});var yy=n(Bl);Xg=i(yy,"Wav2Vec2 Model with an XVector feature extraction head on top for tasks like Speaker Verification."),yy.forEach(t),Gg=p(nt),kn=s(nt,"P",{});var Wp=n(kn);Jg=i(Wp,"Wav2Vec2 was proposed in "),Tn=s(Wp,"A",{href:!0,rel:!0});var ky=n(Tn);Zg=i(ky,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),ky.forEach(t),Kg=i(Wp,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Wp.forEach(t),Qg=p(nt),$n=s(nt,"P",{});var Vp=n($n);Yg=i(Vp,"This model inherits from "),pi=s(Vp,"A",{href:!0});var Ty=n(pi);e_=i(Ty,"PreTrainedModel"),Ty.forEach(t),t_=i(Vp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Vp.forEach(t),o_=p(nt),xn=s(nt,"P",{});var jp=n(xn);a_=i(jp,"This model is a PyTorch "),Wn=s(jp,"A",{href:!0,rel:!0});var $y=n(Wn);s_=i($y,"torch.nn.Module"),$y.forEach(t),n_=i(jp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jp.forEach(t),r_=p(nt),Ze=s(nt,"DIV",{class:!0});var Aa=n(Ze);y(Vn.$$.fragment,Aa),i_=p(Aa),so=s(Aa,"P",{});var zi=n(so);l_=i(zi,"The "),mi=s(zi,"A",{href:!0});var xy=n(mi);c_=i(xy,"Wav2Vec2ForXVector"),xy.forEach(t),d_=i(zi," forward method, overrides the "),Ul=s(zi,"CODE",{});var Wy=n(Ul);p_=i(Wy,"__call__"),Wy.forEach(t),m_=i(zi," special method."),zi.forEach(t),h_=p(Aa),y(ra.$$.fragment,Aa),f_=p(Aa),y(ia.$$.fragment,Aa),Aa.forEach(t),nt.forEach(t),kd=p(o),no=s(o,"H2",{class:!0});var Fp=n(no);la=s(Fp,"A",{id:!0,class:!0,href:!0});var Vy=n(la);Hl=s(Vy,"SPAN",{});var jy=n(Hl);y(jn.$$.fragment,jy),jy.forEach(t),Vy.forEach(t),u_=p(Fp),Rl=s(Fp,"SPAN",{});var Fy=n(Rl);g_=i(Fy,"Wav2Vec2ForPreTraining"),Fy.forEach(t),Fp.forEach(t),Td=p(o),Ve=s(o,"DIV",{class:!0});var zt=n(Ve);y(Fn.$$.fragment,zt),__=p(zt),ro=s(zt,"P",{});var Mi=n(ro);v_=i(Mi,"Wav2Vec2 Model with a quantizer and "),Xl=s(Mi,"CODE",{});var Cy=n(Xl);b_=i(Cy,"VQ"),Cy.forEach(t),w_=i(Mi,` head on top.
Wav2Vec2 was proposed in `),Cn=s(Mi,"A",{href:!0,rel:!0});var Ey=n(Cn);y_=i(Ey,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Ey.forEach(t),k_=i(Mi,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Mi.forEach(t),T_=p(zt),En=s(zt,"P",{});var Cp=n(En);$_=i(Cp,"This model inherits from "),hi=s(Cp,"A",{href:!0});var qy=n(hi);x_=i(qy,"PreTrainedModel"),qy.forEach(t),W_=i(Cp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Cp.forEach(t),V_=p(zt),qn=s(zt,"P",{});var Ep=n(qn);j_=i(Ep,"This model is a PyTorch "),Pn=s(Ep,"A",{href:!0,rel:!0});var Py=n(Pn);F_=i(Py,"torch.nn.Module"),Py.forEach(t),C_=i(Ep,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ep.forEach(t),E_=p(zt),Ke=s(zt,"DIV",{class:!0});var Oa=n(Ke);y(zn.$$.fragment,Oa),q_=p(Oa),io=s(Oa,"P",{});var Ai=n(io);P_=i(Ai,"The "),fi=s(Ai,"A",{href:!0});var zy=n(fi);z_=i(zy,"Wav2Vec2ForPreTraining"),zy.forEach(t),M_=i(Ai," forward method, overrides the "),Gl=s(Ai,"CODE",{});var My=n(Gl);A_=i(My,"__call__"),My.forEach(t),O_=i(Ai," special method."),Ai.forEach(t),L_=p(Oa),y(ca.$$.fragment,Oa),D_=p(Oa),y(da.$$.fragment,Oa),Oa.forEach(t),zt.forEach(t),$d=p(o),lo=s(o,"H2",{class:!0});var qp=n(lo);pa=s(qp,"A",{id:!0,class:!0,href:!0});var Ay=n(pa);Jl=s(Ay,"SPAN",{});var Oy=n(Jl);y(Mn.$$.fragment,Oy),Oy.forEach(t),Ay.forEach(t),S_=p(qp),Zl=s(qp,"SPAN",{});var Ly=n(Zl);N_=i(Ly,"TFWav2Vec2Model"),Ly.forEach(t),qp.forEach(t),xd=p(o),ie=s(o,"DIV",{class:!0});var rt=n(ie);y(An.$$.fragment,rt),I_=p(rt),Kl=s(rt,"P",{});var Dy=n(Kl);B_=i(Dy,"The bare TFWav2Vec2 Model transformer outputing raw hidden-states without any specific head on top."),Dy.forEach(t),U_=p(rt),On=s(rt,"P",{});var Pp=n(On);H_=i(Pp,"This model inherits from "),ui=s(Pp,"A",{href:!0});var Sy=n(ui);R_=i(Sy,"TFPreTrainedModel"),Sy.forEach(t),X_=i(Pp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pp.forEach(t),G_=p(rt),Ln=s(rt,"P",{});var zp=n(Ln);J_=i(zp,"This model is also a "),Dn=s(zp,"A",{href:!0,rel:!0});var Ny=n(Dn);Z_=i(Ny,"tf.keras.Model"),Ny.forEach(t),K_=i(zp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zp.forEach(t),Q_=p(rt),y(ma.$$.fragment,rt),Y_=p(rt),Qe=s(rt,"DIV",{class:!0});var La=n(Qe);y(Sn.$$.fragment,La),ev=p(La),co=s(La,"P",{});var Oi=n(co);tv=i(Oi,"The "),gi=s(Oi,"A",{href:!0});var Iy=n(gi);ov=i(Iy,"TFWav2Vec2Model"),Iy.forEach(t),av=i(Oi," forward method, overrides the "),Ql=s(Oi,"CODE",{});var By=n(Ql);sv=i(By,"__call__"),By.forEach(t),nv=i(Oi," special method."),Oi.forEach(t),rv=p(La),y(ha.$$.fragment,La),iv=p(La),y(fa.$$.fragment,La),La.forEach(t),rt.forEach(t),Wd=p(o),po=s(o,"H2",{class:!0});var Mp=n(po);ua=s(Mp,"A",{id:!0,class:!0,href:!0});var Uy=n(ua);Yl=s(Uy,"SPAN",{});var Hy=n(Yl);y(Nn.$$.fragment,Hy),Hy.forEach(t),Uy.forEach(t),lv=p(Mp),ec=s(Mp,"SPAN",{});var Ry=n(ec);cv=i(Ry,"TFWav2Vec2ForCTC"),Ry.forEach(t),Mp.forEach(t),Vd=p(o),le=s(o,"DIV",{class:!0});var it=n(le);y(In.$$.fragment,it),dv=p(it),Bn=s(it,"P",{});var Ap=n(Bn);pv=i(Ap,"TFWav2Vec2 Model with a "),tc=s(Ap,"CODE",{});var Xy=n(tc);mv=i(Xy,"language modeling"),Xy.forEach(t),hv=i(Ap," head on top for Connectionist Temporal Classification (CTC)."),Ap.forEach(t),fv=p(it),Un=s(it,"P",{});var Op=n(Un);uv=i(Op,"This model inherits from "),_i=s(Op,"A",{href:!0});var Gy=n(_i);gv=i(Gy,"TFPreTrainedModel"),Gy.forEach(t),_v=i(Op,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Op.forEach(t),vv=p(it),Hn=s(it,"P",{});var Lp=n(Hn);bv=i(Lp,"This model is also a "),Rn=s(Lp,"A",{href:!0,rel:!0});var Jy=n(Rn);wv=i(Jy,"tf.keras.Model"),Jy.forEach(t),yv=i(Lp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lp.forEach(t),kv=p(it),y(ga.$$.fragment,it),Tv=p(it),Ye=s(it,"DIV",{class:!0});var Da=n(Ye);y(Xn.$$.fragment,Da),$v=p(Da),mo=s(Da,"P",{});var Li=n(mo);xv=i(Li,"The "),vi=s(Li,"A",{href:!0});var Zy=n(vi);Wv=i(Zy,"TFWav2Vec2ForCTC"),Zy.forEach(t),Vv=i(Li," forward method, overrides the "),oc=s(Li,"CODE",{});var Ky=n(oc);jv=i(Ky,"__call__"),Ky.forEach(t),Fv=i(Li," special method."),Li.forEach(t),Cv=p(Da),y(_a.$$.fragment,Da),Ev=p(Da),y(va.$$.fragment,Da),Da.forEach(t),it.forEach(t),jd=p(o),ho=s(o,"H2",{class:!0});var Dp=n(ho);ba=s(Dp,"A",{id:!0,class:!0,href:!0});var Qy=n(ba);ac=s(Qy,"SPAN",{});var Yy=n(ac);y(Gn.$$.fragment,Yy),Yy.forEach(t),Qy.forEach(t),qv=p(Dp),sc=s(Dp,"SPAN",{});var ek=n(sc);Pv=i(ek,"FlaxWav2Vec2Model"),ek.forEach(t),Dp.forEach(t),Fd=p(o),Z=s(o,"DIV",{class:!0});var Oe=n(Z);y(Jn.$$.fragment,Oe),zv=p(Oe),Zn=s(Oe,"P",{});var Sp=n(Zn);Mv=i(Sp,`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),Kn=s(Sp,"A",{href:!0,rel:!0});var tk=n(Kn);Av=i(tk,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),tk.forEach(t),Ov=i(Sp,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Sp.forEach(t),Lv=p(Oe),Qn=s(Oe,"P",{});var Np=n(Qn);Dv=i(Np,"This model inherits from "),bi=s(Np,"A",{href:!0});var ok=n(bi);Sv=i(ok,"FlaxPreTrainedModel"),ok.forEach(t),Nv=i(Np,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Np.forEach(t),Iv=p(Oe),Yn=s(Oe,"P",{});var Ip=n(Yn);Bv=i(Ip,`This model is also a Flax Linen
`),er=s(Ip,"A",{href:!0,rel:!0});var ak=n(er);Uv=i(ak,"flax.nn.Module"),ak.forEach(t),Hv=i(Ip,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ip.forEach(t),Rv=p(Oe),nc=s(Oe,"P",{});var sk=n(nc);Xv=i(sk,"Finally, this model supports inherent JAX features such as:"),sk.forEach(t),Gv=p(Oe),bt=s(Oe,"UL",{});var Sa=n(bt);rc=s(Sa,"LI",{});var nk=n(rc);tr=s(nk,"A",{href:!0,rel:!0});var rk=n(tr);Jv=i(rk,"Just-In-Time (JIT) compilation"),rk.forEach(t),nk.forEach(t),Zv=p(Sa),ic=s(Sa,"LI",{});var ik=n(ic);or=s(ik,"A",{href:!0,rel:!0});var lk=n(or);Kv=i(lk,"Automatic Differentiation"),lk.forEach(t),ik.forEach(t),Qv=p(Sa),lc=s(Sa,"LI",{});var ck=n(lc);ar=s(ck,"A",{href:!0,rel:!0});var dk=n(ar);Yv=i(dk,"Vectorization"),dk.forEach(t),ck.forEach(t),e2=p(Sa),cc=s(Sa,"LI",{});var pk=n(cc);sr=s(pk,"A",{href:!0,rel:!0});var mk=n(sr);t2=i(mk,"Parallelization"),mk.forEach(t),pk.forEach(t),Sa.forEach(t),o2=p(Oe),et=s(Oe,"DIV",{class:!0});var Na=n(et);y(nr.$$.fragment,Na),a2=p(Na),fo=s(Na,"P",{});var Di=n(fo);s2=i(Di,"The "),dc=s(Di,"CODE",{});var hk=n(dc);n2=i(hk,"FlaxWav2Vec2PreTrainedModel"),hk.forEach(t),r2=i(Di," forward method, overrides the "),pc=s(Di,"CODE",{});var fk=n(pc);i2=i(fk,"__call__"),fk.forEach(t),l2=i(Di," special method."),Di.forEach(t),c2=p(Na),y(wa.$$.fragment,Na),d2=p(Na),y(ya.$$.fragment,Na),Na.forEach(t),Oe.forEach(t),Cd=p(o),uo=s(o,"H2",{class:!0});var Bp=n(uo);ka=s(Bp,"A",{id:!0,class:!0,href:!0});var uk=n(ka);mc=s(uk,"SPAN",{});var gk=n(mc);y(rr.$$.fragment,gk),gk.forEach(t),uk.forEach(t),p2=p(Bp),hc=s(Bp,"SPAN",{});var _k=n(hc);m2=i(_k,"FlaxWav2Vec2ForCTC"),_k.forEach(t),Bp.forEach(t),Ed=p(o),K=s(o,"DIV",{class:!0});var Le=n(K);y(ir.$$.fragment,Le),h2=p(Le),go=s(Le,"P",{});var Si=n(go);f2=i(Si,"Wav2Vec2 Model with a "),fc=s(Si,"CODE",{});var vk=n(fc);u2=i(vk,"language modeling"),vk.forEach(t),g2=i(Si,` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),lr=s(Si,"A",{href:!0,rel:!0});var bk=n(lr);_2=i(bk,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),bk.forEach(t),v2=i(Si,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Si.forEach(t),b2=p(Le),cr=s(Le,"P",{});var Up=n(cr);w2=i(Up,"This model inherits from "),wi=s(Up,"A",{href:!0});var wk=n(wi);y2=i(wk,"FlaxPreTrainedModel"),wk.forEach(t),k2=i(Up,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Up.forEach(t),T2=p(Le),dr=s(Le,"P",{});var Hp=n(dr);$2=i(Hp,`This model is also a Flax Linen
`),pr=s(Hp,"A",{href:!0,rel:!0});var yk=n(pr);x2=i(yk,"flax.nn.Module"),yk.forEach(t),W2=i(Hp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Hp.forEach(t),V2=p(Le),uc=s(Le,"P",{});var kk=n(uc);j2=i(kk,"Finally, this model supports inherent JAX features such as:"),kk.forEach(t),F2=p(Le),wt=s(Le,"UL",{});var Ia=n(wt);gc=s(Ia,"LI",{});var Tk=n(gc);mr=s(Tk,"A",{href:!0,rel:!0});var $k=n(mr);C2=i($k,"Just-In-Time (JIT) compilation"),$k.forEach(t),Tk.forEach(t),E2=p(Ia),_c=s(Ia,"LI",{});var xk=n(_c);hr=s(xk,"A",{href:!0,rel:!0});var Wk=n(hr);q2=i(Wk,"Automatic Differentiation"),Wk.forEach(t),xk.forEach(t),P2=p(Ia),vc=s(Ia,"LI",{});var Vk=n(vc);fr=s(Vk,"A",{href:!0,rel:!0});var jk=n(fr);z2=i(jk,"Vectorization"),jk.forEach(t),Vk.forEach(t),M2=p(Ia),bc=s(Ia,"LI",{});var Fk=n(bc);ur=s(Fk,"A",{href:!0,rel:!0});var Ck=n(ur);A2=i(Ck,"Parallelization"),Ck.forEach(t),Fk.forEach(t),Ia.forEach(t),O2=p(Le),tt=s(Le,"DIV",{class:!0});var Ba=n(tt);y(gr.$$.fragment,Ba),L2=p(Ba),_o=s(Ba,"P",{});var Ni=n(_o);D2=i(Ni,"The "),wc=s(Ni,"CODE",{});var Ek=n(wc);S2=i(Ek,"FlaxWav2Vec2PreTrainedModel"),Ek.forEach(t),N2=i(Ni," forward method, overrides the "),yc=s(Ni,"CODE",{});var qk=n(yc);I2=i(qk,"__call__"),qk.forEach(t),B2=i(Ni," special method."),Ni.forEach(t),U2=p(Ba),y(Ta.$$.fragment,Ba),H2=p(Ba),y($a.$$.fragment,Ba),Ba.forEach(t),Le.forEach(t),qd=p(o),vo=s(o,"H2",{class:!0});var Rp=n(vo);xa=s(Rp,"A",{id:!0,class:!0,href:!0});var Pk=n(xa);kc=s(Pk,"SPAN",{});var zk=n(kc);y(_r.$$.fragment,zk),zk.forEach(t),Pk.forEach(t),R2=p(Rp),Tc=s(Rp,"SPAN",{});var Mk=n(Tc);X2=i(Mk,"FlaxWav2Vec2ForPreTraining"),Mk.forEach(t),Rp.forEach(t),Pd=p(o),Q=s(o,"DIV",{class:!0});var De=n(Q);y(vr.$$.fragment,De),G2=p(De),bo=s(De,"P",{});var Ii=n(bo);J2=i(Ii,"Wav2Vec2 Model with a quantizer and "),$c=s(Ii,"CODE",{});var Ak=n($c);Z2=i(Ak,"VQ"),Ak.forEach(t),K2=i(Ii,` head on top.
Wav2Vec2 was proposed in `),br=s(Ii,"A",{href:!0,rel:!0});var Ok=n(br);Q2=i(Ok,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Ok.forEach(t),Y2=i(Ii,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Ii.forEach(t),eb=p(De),wr=s(De,"P",{});var Xp=n(wr);tb=i(Xp,"This model inherits from "),yi=s(Xp,"A",{href:!0});var Lk=n(yi);ob=i(Lk,"FlaxPreTrainedModel"),Lk.forEach(t),ab=i(Xp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xp.forEach(t),sb=p(De),yr=s(De,"P",{});var Gp=n(yr);nb=i(Gp,`This model is also a Flax Linen
`),kr=s(Gp,"A",{href:!0,rel:!0});var Dk=n(kr);rb=i(Dk,"flax.nn.Module"),Dk.forEach(t),ib=i(Gp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Gp.forEach(t),lb=p(De),xc=s(De,"P",{});var Sk=n(xc);cb=i(Sk,"Finally, this model supports inherent JAX features such as:"),Sk.forEach(t),db=p(De),yt=s(De,"UL",{});var Ua=n(yt);Wc=s(Ua,"LI",{});var Nk=n(Wc);Tr=s(Nk,"A",{href:!0,rel:!0});var Ik=n(Tr);pb=i(Ik,"Just-In-Time (JIT) compilation"),Ik.forEach(t),Nk.forEach(t),mb=p(Ua),Vc=s(Ua,"LI",{});var Bk=n(Vc);$r=s(Bk,"A",{href:!0,rel:!0});var Uk=n($r);hb=i(Uk,"Automatic Differentiation"),Uk.forEach(t),Bk.forEach(t),fb=p(Ua),jc=s(Ua,"LI",{});var Hk=n(jc);xr=s(Hk,"A",{href:!0,rel:!0});var Rk=n(xr);ub=i(Rk,"Vectorization"),Rk.forEach(t),Hk.forEach(t),gb=p(Ua),Fc=s(Ua,"LI",{});var Xk=n(Fc);Wr=s(Xk,"A",{href:!0,rel:!0});var Gk=n(Wr);_b=i(Gk,"Parallelization"),Gk.forEach(t),Xk.forEach(t),Ua.forEach(t),vb=p(De),ot=s(De,"DIV",{class:!0});var Ha=n(ot);y(Vr.$$.fragment,Ha),bb=p(Ha),wo=s(Ha,"P",{});var Bi=n(wo);wb=i(Bi,"The "),ki=s(Bi,"A",{href:!0});var Jk=n(ki);yb=i(Jk,"FlaxWav2Vec2ForPreTraining"),Jk.forEach(t),kb=i(Bi," forward method, overrides the "),Cc=s(Bi,"CODE",{});var Zk=n(Cc);Tb=i(Zk,"__call__"),Zk.forEach(t),$b=i(Bi," special method."),Bi.forEach(t),xb=p(Ha),y(Wa.$$.fragment,Ha),Wb=p(Ha),y(Va.$$.fragment,Ha),Ha.forEach(t),De.forEach(t),this.h()},h(){m(c,"name","hf:doc:metadata"),m(c,"content",JSON.stringify(MT)),m(h,"id","wav2vec2"),m(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(h,"href","#wav2vec2"),m(f,"class","relative group"),m(M,"id","overview"),m(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(M,"href","#overview"),m(C,"class","relative group"),m(_e,"href","https://arxiv.org/abs/2006.11477"),m(_e,"rel","nofollow"),m(Ee,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),m(Be,"href","https://huggingface.co/patrickvonplaten"),m(Be,"rel","nofollow"),m(qe,"id","transformers.Wav2Vec2Config"),m(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qe,"href","#transformers.Wav2Vec2Config"),m(ke,"class","relative group"),m(Ar,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Model"),m(Ra,"href","https://huggingface.co/facebook/wav2vec2-base-960h"),m(Ra,"rel","nofollow"),m(Or,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Lr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($o,"id","transformers.Wav2Vec2CTCTokenizer"),m($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m($o,"href","#transformers.Wav2Vec2CTCTokenizer"),m(St,"class","relative group"),m(Dr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Sr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(jo,"id","transformers.Wav2Vec2FeatureExtractor"),m(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(jo,"href","#transformers.Wav2Vec2FeatureExtractor"),m(Nt,"class","relative group"),m(Nr,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor"),m(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Co,"id","transformers.Wav2Vec2Processor"),m(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Co,"href","#transformers.Wav2Vec2Processor"),m(It,"class","relative group"),m(Ir,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor"),m(Br,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),m(Ur,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(is,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__"),m(Hr,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.decode"),m(cs,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor.__call__"),m(ds,"href","/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"),m(Eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Rr,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor.pad"),m(Xr,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.pad"),m(qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Gr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Jr,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.from_pretrained"),m(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Zr,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.batch_decode"),m(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Kr,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.decode"),m(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ao,"id","transformers.Wav2Vec2ProcessorWithLM"),m(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ao,"href","#transformers.Wav2Vec2ProcessorWithLM"),m(Bt,"class","relative group"),m(ks,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor.__call__"),m(Ts,"href","/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"),m(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qr,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor.pad"),m(Yr,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.pad"),m(Lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ei,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ProcessorWithLM"),m(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ti,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Io,"id","transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput"),m(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Io,"href","#transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput"),m(Ut,"class","relative group"),m(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(oi,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ForPreTraining"),m(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ho,"id","transformers.Wav2Vec2Model"),m(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ho,"href","#transformers.Wav2Vec2Model"),m(Gt,"class","relative group"),m(Hs,"href","https://arxiv.org/abs/2006.11477"),m(Hs,"rel","nofollow"),m(ai,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Gs,"rel","nofollow"),m(si,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Model"),m(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Go,"id","transformers.Wav2Vec2ForCTC"),m(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Go,"href","#transformers.Wav2Vec2ForCTC"),m(Zt,"class","relative group"),m(Qs,"href","https://arxiv.org/abs/2006.11477"),m(Qs,"rel","nofollow"),m(ni,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(tn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(tn,"rel","nofollow"),m(ri,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC"),m(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qo,"id","transformers.Wav2Vec2ForSequenceClassification"),m(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Qo,"href","#transformers.Wav2Vec2ForSequenceClassification"),m(Yt,"class","relative group"),m(rn,"href","https://arxiv.org/abs/2006.11477"),m(rn,"rel","nofollow"),m(ii,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(dn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(dn,"rel","nofollow"),m(li,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ForSequenceClassification"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(oa,"id","transformers.Wav2Vec2ForAudioFrameClassification"),m(oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(oa,"href","#transformers.Wav2Vec2ForAudioFrameClassification"),m(to,"class","relative group"),m(un,"href","https://arxiv.org/abs/2006.11477"),m(un,"rel","nofollow"),m(ci,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(vn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(vn,"rel","nofollow"),m(di,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ForAudioFrameClassification"),m(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(na,"id","transformers.Wav2Vec2ForXVector"),m(na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(na,"href","#transformers.Wav2Vec2ForXVector"),m(ao,"class","relative group"),m(Tn,"href","https://arxiv.org/abs/2006.11477"),m(Tn,"rel","nofollow"),m(pi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Wn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Wn,"rel","nofollow"),m(mi,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ForXVector"),m(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(la,"id","transformers.Wav2Vec2ForPreTraining"),m(la,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(la,"href","#transformers.Wav2Vec2ForPreTraining"),m(no,"class","relative group"),m(Cn,"href","https://arxiv.org/abs/2006.11477"),m(Cn,"rel","nofollow"),m(hi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Pn,"rel","nofollow"),m(fi,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ForPreTraining"),m(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(pa,"id","transformers.TFWav2Vec2Model"),m(pa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(pa,"href","#transformers.TFWav2Vec2Model"),m(lo,"class","relative group"),m(ui,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(Dn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Dn,"rel","nofollow"),m(gi,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.TFWav2Vec2Model"),m(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ua,"id","transformers.TFWav2Vec2ForCTC"),m(ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ua,"href","#transformers.TFWav2Vec2ForCTC"),m(po,"class","relative group"),m(_i,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(Rn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Rn,"rel","nofollow"),m(vi,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.TFWav2Vec2ForCTC"),m(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ba,"id","transformers.FlaxWav2Vec2Model"),m(ba,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ba,"href","#transformers.FlaxWav2Vec2Model"),m(ho,"class","relative group"),m(Kn,"href","https://arxiv.org/abs/2006.11477"),m(Kn,"rel","nofollow"),m(bi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(er,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),m(er,"rel","nofollow"),m(tr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(tr,"rel","nofollow"),m(or,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(or,"rel","nofollow"),m(ar,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(ar,"rel","nofollow"),m(sr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(sr,"rel","nofollow"),m(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ka,"id","transformers.FlaxWav2Vec2ForCTC"),m(ka,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ka,"href","#transformers.FlaxWav2Vec2ForCTC"),m(uo,"class","relative group"),m(lr,"href","https://arxiv.org/abs/2006.11477"),m(lr,"rel","nofollow"),m(wi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(pr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),m(pr,"rel","nofollow"),m(mr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(mr,"rel","nofollow"),m(hr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(hr,"rel","nofollow"),m(fr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(fr,"rel","nofollow"),m(ur,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(ur,"rel","nofollow"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xa,"id","transformers.FlaxWav2Vec2ForPreTraining"),m(xa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(xa,"href","#transformers.FlaxWav2Vec2ForPreTraining"),m(vo,"class","relative group"),m(br,"href","https://arxiv.org/abs/2006.11477"),m(br,"rel","nofollow"),m(yi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(kr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),m(kr,"rel","nofollow"),m(Tr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(Tr,"rel","nofollow"),m($r,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m($r,"rel","nofollow"),m(xr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(xr,"rel","nofollow"),m(Wr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(Wr,"rel","nofollow"),m(ki,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.FlaxWav2Vec2ForPreTraining"),m(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,c),_(o,b,g),_(o,f,g),e(f,h),e(h,v),k(l,v,null),e(f,u),e(f,j),e(j,L),_(o,P,g),_(o,C,g),e(C,M),e(M,A),k(H,A,null),e(C,D),e(C,q),e(q,je),_(o,ge,g),_(o,I,g),e(I,U),e(I,_e),e(_e,Se),e(I,z),_(o,N,g),_(o,Fe,g),e(Fe,ve),_(o,He,g),_(o,Ce,g),e(Ce,te),e(te,lt),_(o,Re,g),_(o,O,g),e(O,ct),_(o,ce,g),_(o,de,g),e(de,Ne),e(Ne,be),e(de,dt),e(de,we),e(we,oe),e(we,Ee),e(Ee,ye),e(we,pt),_(o,V,g),_(o,E,g),e(E,Ie),e(E,Be),e(Be,Mt),e(E,ae),_(o,$t,g),_(o,ke,g),e(ke,qe),e(qe,R),k(X,R,null),e(ke,At),e(ke,mt),e(mt,Te),_(o,xt,g),_(o,G,g),k($e,G,null),e(G,Ot),e(G,Lt),e(Lt,Jp),e(Lt,Ar),e(Ar,Zp),e(Lt,Kp),e(Lt,Ra),e(Ra,Qp),e(Lt,Yp),e(G,em),e(G,Dt),e(Dt,tm),e(Dt,Or),e(Or,om),e(Dt,am),e(Dt,Lr),e(Lr,sm),e(Dt,nm),e(G,rm),k(To,G,null),_(o,Qc,g),_(o,St,g),e(St,$o),e($o,Ui),k(Xa,Ui,null),e(St,im),e(St,Hi),e(Hi,lm),_(o,Yc,g),_(o,J,g),k(Ga,J,null),e(J,cm),e(J,Ri),e(Ri,dm),e(J,pm),e(J,Ja),e(Ja,mm),e(Ja,Dr),e(Dr,hm),e(Ja,fm),e(J,um),e(J,xo),k(Za,xo,null),e(xo,gm),e(xo,Xi),e(Xi,_m),e(J,vm),e(J,Sr),k(Ka,Sr,null),e(J,bm),e(J,Xe),k(Qa,Xe,null),e(Xe,wm),e(Xe,Gi),e(Gi,ym),e(Xe,km),e(Xe,Ya),e(Ya,Tm),e(Ya,Ji),e(Ji,$m),e(Ya,xm),e(Xe,Wm),k(Wo,Xe,null),e(J,Vm),e(J,Vo),k(es,Vo,null),e(Vo,jm),e(Vo,Zi),e(Zi,Fm),_(o,ed,g),_(o,Nt,g),e(Nt,jo),e(jo,Ki),k(ts,Ki,null),e(Nt,Cm),e(Nt,Qi),e(Qi,Em),_(o,td,g),_(o,Ue,g),k(os,Ue,null),e(Ue,qm),e(Ue,Yi),e(Yi,Pm),e(Ue,zm),e(Ue,as),e(as,Mm),e(as,Nr),e(Nr,Am),e(as,Om),e(Ue,Lm),e(Ue,Fo),k(ss,Fo,null),e(Fo,Dm),e(Fo,el),e(el,Sm),_(o,od,g),_(o,It,g),e(It,Co),e(Co,tl),k(ns,tl,null),e(It,Nm),e(It,ol),e(ol,Im),_(o,ad,g),_(o,S,g),k(rs,S,null),e(S,Bm),e(S,al),e(al,Um),e(S,Hm),e(S,Pe),e(Pe,Ir),e(Ir,Rm),e(Pe,Xm),e(Pe,Br),e(Br,Gm),e(Pe,Jm),e(Pe,Ur),e(Ur,Zm),e(Pe,Km),e(Pe,is),e(is,sl),e(sl,Qm),e(is,Ym),e(Pe,eh),e(Pe,Hr),e(Hr,th),e(Pe,oh),e(S,ah),e(S,Eo),k(ls,Eo,null),e(Eo,sh),e(Eo,ht),e(ht,nh),e(ht,cs),e(cs,nl),e(nl,rh),e(cs,ih),e(ht,lh),e(ht,rl),e(rl,ch),e(ht,dh),e(ht,ds),e(ds,il),e(il,ph),e(ds,mh),e(ht,hh),e(S,fh),e(S,qo),k(ps,qo,null),e(qo,uh),e(qo,ft),e(ft,gh),e(ft,Rr),e(Rr,_h),e(ft,vh),e(ft,ll),e(ll,bh),e(ft,wh),e(ft,Xr),e(Xr,yh),e(ft,kh),e(S,Th),e(S,Gr),k(ms,Gr,null),e(S,$h),e(S,Wt),k(hs,Wt,null),e(Wt,xh),e(Wt,fs),e(fs,Wh),e(fs,Jr),e(Jr,Vh),e(fs,jh),e(Wt,Fh),k(Po,Wt,null),e(S,Ch),e(S,zo),k(us,zo,null),e(zo,Eh),e(zo,gs),e(gs,qh),e(gs,Zr),e(Zr,Ph),e(gs,zh),e(S,Mh),e(S,Mo),k(_s,Mo,null),e(Mo,Ah),e(Mo,vs),e(vs,Oh),e(vs,Kr),e(Kr,Lh),e(vs,Dh),_(o,sd,g),_(o,Bt,g),e(Bt,Ao),e(Ao,cl),k(bs,cl,null),e(Bt,Sh),e(Bt,dl),e(dl,Nh),_(o,nd,g),_(o,B,g),k(ws,B,null),e(B,Ih),e(B,pl),e(pl,Bh),e(B,Uh),e(B,Oo),k(ys,Oo,null),e(Oo,Hh),e(Oo,ut),e(ut,Rh),e(ut,ks),e(ks,ml),e(ml,Xh),e(ks,Gh),e(ut,Jh),e(ut,hl),e(hl,Zh),e(ut,Kh),e(ut,Ts),e(Ts,fl),e(fl,Qh),e(Ts,Yh),e(ut,ef),e(B,tf),e(B,Lo),k($s,Lo,null),e(Lo,of),e(Lo,gt),e(gt,af),e(gt,Qr),e(Qr,sf),e(gt,nf),e(gt,ul),e(ul,rf),e(gt,lf),e(gt,Yr),e(Yr,cf),e(gt,df),e(B,pf),e(B,Vt),k(xs,Vt,null),e(Vt,mf),e(Vt,Ws),e(Ws,hf),e(Ws,ei),e(ei,ff),e(Ws,uf),e(Vt,gf),k(Do,Vt,null),e(B,_f),e(B,ti),k(Vs,ti,null),e(B,vf),e(B,jt),k(js,jt,null),e(jt,bf),e(jt,gl),e(gl,wf),e(jt,yf),k(So,jt,null),e(B,kf),e(B,Ft),k(Fs,Ft,null),e(Ft,Tf),e(Ft,_l),e(_l,$f),e(Ft,xf),k(No,Ft,null),_(o,rd,g),_(o,Ut,g),e(Ut,Io),e(Io,vl),k(Cs,vl,null),e(Ut,Wf),e(Ut,bl),e(bl,Vf),_(o,id,g),_(o,Ht,g),k(Es,Ht,null),e(Ht,jf),e(Ht,qs),e(qs,Ff),e(qs,wl),e(wl,Cf),e(qs,Ef),_(o,ld,g),_(o,Rt,g),k(Ps,Rt,null),e(Rt,qf),e(Rt,yl),e(yl,Pf),_(o,cd,g),_(o,Xt,g),k(zs,Xt,null),e(Xt,zf),e(Xt,Ms),e(Ms,Mf),e(Ms,oi),e(oi,Af),e(Ms,Of),_(o,dd,g),_(o,_t,g),k(As,_t,null),e(_t,Lf),e(_t,Os),e(Os,Df),e(Os,kl),e(kl,Sf),e(Os,Nf),e(_t,If),e(_t,Bo),k(Ls,Bo,null),e(Bo,Bf),e(Bo,Tl),e(Tl,Uf),_(o,pd,g),_(o,vt,g),k(Ds,vt,null),e(vt,Hf),e(vt,Ss),e(Ss,Rf),e(Ss,$l),e($l,Xf),e(Ss,Gf),e(vt,Jf),e(vt,Uo),k(Ns,Uo,null),e(Uo,Zf),e(Uo,xl),e(xl,Kf),_(o,md,g),_(o,Gt,g),e(Gt,Ho),e(Ho,Wl),k(Is,Wl,null),e(Gt,Qf),e(Gt,Vl),e(Vl,Yf),_(o,hd,g),_(o,xe,g),k(Bs,xe,null),e(xe,eu),e(xe,Us),e(Us,tu),e(Us,Hs),e(Hs,ou),e(Us,au),e(xe,su),e(xe,Rs),e(Rs,nu),e(Rs,ai),e(ai,ru),e(Rs,iu),e(xe,lu),e(xe,Xs),e(Xs,cu),e(Xs,Gs),e(Gs,du),e(Xs,pu),e(xe,mu),e(xe,Ge),k(Js,Ge,null),e(Ge,hu),e(Ge,Jt),e(Jt,fu),e(Jt,si),e(si,uu),e(Jt,gu),e(Jt,jl),e(jl,_u),e(Jt,vu),e(Ge,bu),k(Ro,Ge,null),e(Ge,wu),k(Xo,Ge,null),_(o,fd,g),_(o,Zt,g),e(Zt,Go),e(Go,Fl),k(Zs,Fl,null),e(Zt,yu),e(Zt,Cl),e(Cl,ku),_(o,ud,g),_(o,We,g),k(Ks,We,null),e(We,Tu),e(We,Kt),e(Kt,$u),e(Kt,El),e(El,xu),e(Kt,Wu),e(Kt,Qs),e(Qs,Vu),e(Kt,ju),e(We,Fu),e(We,Ys),e(Ys,Cu),e(Ys,ni),e(ni,Eu),e(Ys,qu),e(We,Pu),e(We,en),e(en,zu),e(en,tn),e(tn,Mu),e(en,Au),e(We,Ou),e(We,ze),k(on,ze,null),e(ze,Lu),e(ze,Qt),e(Qt,Du),e(Qt,ri),e(ri,Su),e(Qt,Nu),e(Qt,ql),e(ql,Iu),e(Qt,Bu),e(ze,Uu),k(Jo,ze,null),e(ze,Hu),k(Zo,ze,null),e(ze,Ru),k(Ko,ze,null),_(o,gd,g),_(o,Yt,g),e(Yt,Qo),e(Qo,Pl),k(an,Pl,null),e(Yt,Xu),e(Yt,zl),e(zl,Gu),_(o,_d,g),_(o,se,g),k(sn,se,null),e(se,Ju),e(se,Ml),e(Ml,Zu),e(se,Ku),e(se,nn),e(nn,Qu),e(nn,rn),e(rn,Yu),e(nn,eg),e(se,tg),e(se,ln),e(ln,og),e(ln,ii),e(ii,ag),e(ln,sg),e(se,ng),e(se,cn),e(cn,rg),e(cn,dn),e(dn,ig),e(cn,lg),e(se,cg),e(se,Me),k(pn,Me,null),e(Me,dg),e(Me,eo),e(eo,pg),e(eo,li),e(li,mg),e(eo,hg),e(eo,Al),e(Al,fg),e(eo,ug),e(Me,gg),k(Yo,Me,null),e(Me,_g),k(ea,Me,null),e(Me,vg),k(ta,Me,null),_(o,vd,g),_(o,to,g),e(to,oa),e(oa,Ol),k(mn,Ol,null),e(to,bg),e(to,Ll),e(Ll,wg),_(o,bd,g),_(o,ne,g),k(hn,ne,null),e(ne,yg),e(ne,Dl),e(Dl,kg),e(ne,Tg),e(ne,fn),e(fn,$g),e(fn,un),e(un,xg),e(fn,Wg),e(ne,Vg),e(ne,gn),e(gn,jg),e(gn,ci),e(ci,Fg),e(gn,Cg),e(ne,Eg),e(ne,_n),e(_n,qg),e(_n,vn),e(vn,Pg),e(_n,zg),e(ne,Mg),e(ne,Je),k(bn,Je,null),e(Je,Ag),e(Je,oo),e(oo,Og),e(oo,di),e(di,Lg),e(oo,Dg),e(oo,Sl),e(Sl,Sg),e(oo,Ng),e(Je,Ig),k(aa,Je,null),e(Je,Bg),k(sa,Je,null),_(o,wd,g),_(o,ao,g),e(ao,na),e(na,Nl),k(wn,Nl,null),e(ao,Ug),e(ao,Il),e(Il,Hg),_(o,yd,g),_(o,re,g),k(yn,re,null),e(re,Rg),e(re,Bl),e(Bl,Xg),e(re,Gg),e(re,kn),e(kn,Jg),e(kn,Tn),e(Tn,Zg),e(kn,Kg),e(re,Qg),e(re,$n),e($n,Yg),e($n,pi),e(pi,e_),e($n,t_),e(re,o_),e(re,xn),e(xn,a_),e(xn,Wn),e(Wn,s_),e(xn,n_),e(re,r_),e(re,Ze),k(Vn,Ze,null),e(Ze,i_),e(Ze,so),e(so,l_),e(so,mi),e(mi,c_),e(so,d_),e(so,Ul),e(Ul,p_),e(so,m_),e(Ze,h_),k(ra,Ze,null),e(Ze,f_),k(ia,Ze,null),_(o,kd,g),_(o,no,g),e(no,la),e(la,Hl),k(jn,Hl,null),e(no,u_),e(no,Rl),e(Rl,g_),_(o,Td,g),_(o,Ve,g),k(Fn,Ve,null),e(Ve,__),e(Ve,ro),e(ro,v_),e(ro,Xl),e(Xl,b_),e(ro,w_),e(ro,Cn),e(Cn,y_),e(ro,k_),e(Ve,T_),e(Ve,En),e(En,$_),e(En,hi),e(hi,x_),e(En,W_),e(Ve,V_),e(Ve,qn),e(qn,j_),e(qn,Pn),e(Pn,F_),e(qn,C_),e(Ve,E_),e(Ve,Ke),k(zn,Ke,null),e(Ke,q_),e(Ke,io),e(io,P_),e(io,fi),e(fi,z_),e(io,M_),e(io,Gl),e(Gl,A_),e(io,O_),e(Ke,L_),k(ca,Ke,null),e(Ke,D_),k(da,Ke,null),_(o,$d,g),_(o,lo,g),e(lo,pa),e(pa,Jl),k(Mn,Jl,null),e(lo,S_),e(lo,Zl),e(Zl,N_),_(o,xd,g),_(o,ie,g),k(An,ie,null),e(ie,I_),e(ie,Kl),e(Kl,B_),e(ie,U_),e(ie,On),e(On,H_),e(On,ui),e(ui,R_),e(On,X_),e(ie,G_),e(ie,Ln),e(Ln,J_),e(Ln,Dn),e(Dn,Z_),e(Ln,K_),e(ie,Q_),k(ma,ie,null),e(ie,Y_),e(ie,Qe),k(Sn,Qe,null),e(Qe,ev),e(Qe,co),e(co,tv),e(co,gi),e(gi,ov),e(co,av),e(co,Ql),e(Ql,sv),e(co,nv),e(Qe,rv),k(ha,Qe,null),e(Qe,iv),k(fa,Qe,null),_(o,Wd,g),_(o,po,g),e(po,ua),e(ua,Yl),k(Nn,Yl,null),e(po,lv),e(po,ec),e(ec,cv),_(o,Vd,g),_(o,le,g),k(In,le,null),e(le,dv),e(le,Bn),e(Bn,pv),e(Bn,tc),e(tc,mv),e(Bn,hv),e(le,fv),e(le,Un),e(Un,uv),e(Un,_i),e(_i,gv),e(Un,_v),e(le,vv),e(le,Hn),e(Hn,bv),e(Hn,Rn),e(Rn,wv),e(Hn,yv),e(le,kv),k(ga,le,null),e(le,Tv),e(le,Ye),k(Xn,Ye,null),e(Ye,$v),e(Ye,mo),e(mo,xv),e(mo,vi),e(vi,Wv),e(mo,Vv),e(mo,oc),e(oc,jv),e(mo,Fv),e(Ye,Cv),k(_a,Ye,null),e(Ye,Ev),k(va,Ye,null),_(o,jd,g),_(o,ho,g),e(ho,ba),e(ba,ac),k(Gn,ac,null),e(ho,qv),e(ho,sc),e(sc,Pv),_(o,Fd,g),_(o,Z,g),k(Jn,Z,null),e(Z,zv),e(Z,Zn),e(Zn,Mv),e(Zn,Kn),e(Kn,Av),e(Zn,Ov),e(Z,Lv),e(Z,Qn),e(Qn,Dv),e(Qn,bi),e(bi,Sv),e(Qn,Nv),e(Z,Iv),e(Z,Yn),e(Yn,Bv),e(Yn,er),e(er,Uv),e(Yn,Hv),e(Z,Rv),e(Z,nc),e(nc,Xv),e(Z,Gv),e(Z,bt),e(bt,rc),e(rc,tr),e(tr,Jv),e(bt,Zv),e(bt,ic),e(ic,or),e(or,Kv),e(bt,Qv),e(bt,lc),e(lc,ar),e(ar,Yv),e(bt,e2),e(bt,cc),e(cc,sr),e(sr,t2),e(Z,o2),e(Z,et),k(nr,et,null),e(et,a2),e(et,fo),e(fo,s2),e(fo,dc),e(dc,n2),e(fo,r2),e(fo,pc),e(pc,i2),e(fo,l2),e(et,c2),k(wa,et,null),e(et,d2),k(ya,et,null),_(o,Cd,g),_(o,uo,g),e(uo,ka),e(ka,mc),k(rr,mc,null),e(uo,p2),e(uo,hc),e(hc,m2),_(o,Ed,g),_(o,K,g),k(ir,K,null),e(K,h2),e(K,go),e(go,f2),e(go,fc),e(fc,u2),e(go,g2),e(go,lr),e(lr,_2),e(go,v2),e(K,b2),e(K,cr),e(cr,w2),e(cr,wi),e(wi,y2),e(cr,k2),e(K,T2),e(K,dr),e(dr,$2),e(dr,pr),e(pr,x2),e(dr,W2),e(K,V2),e(K,uc),e(uc,j2),e(K,F2),e(K,wt),e(wt,gc),e(gc,mr),e(mr,C2),e(wt,E2),e(wt,_c),e(_c,hr),e(hr,q2),e(wt,P2),e(wt,vc),e(vc,fr),e(fr,z2),e(wt,M2),e(wt,bc),e(bc,ur),e(ur,A2),e(K,O2),e(K,tt),k(gr,tt,null),e(tt,L2),e(tt,_o),e(_o,D2),e(_o,wc),e(wc,S2),e(_o,N2),e(_o,yc),e(yc,I2),e(_o,B2),e(tt,U2),k(Ta,tt,null),e(tt,H2),k($a,tt,null),_(o,qd,g),_(o,vo,g),e(vo,xa),e(xa,kc),k(_r,kc,null),e(vo,R2),e(vo,Tc),e(Tc,X2),_(o,Pd,g),_(o,Q,g),k(vr,Q,null),e(Q,G2),e(Q,bo),e(bo,J2),e(bo,$c),e($c,Z2),e(bo,K2),e(bo,br),e(br,Q2),e(bo,Y2),e(Q,eb),e(Q,wr),e(wr,tb),e(wr,yi),e(yi,ob),e(wr,ab),e(Q,sb),e(Q,yr),e(yr,nb),e(yr,kr),e(kr,rb),e(yr,ib),e(Q,lb),e(Q,xc),e(xc,cb),e(Q,db),e(Q,yt),e(yt,Wc),e(Wc,Tr),e(Tr,pb),e(yt,mb),e(yt,Vc),e(Vc,$r),e($r,hb),e(yt,fb),e(yt,jc),e(jc,xr),e(xr,ub),e(yt,gb),e(yt,Fc),e(Fc,Wr),e(Wr,_b),e(Q,vb),e(Q,ot),k(Vr,ot,null),e(ot,bb),e(ot,wo),e(wo,wb),e(wo,ki),e(ki,yb),e(wo,kb),e(wo,Cc),e(Cc,Tb),e(wo,$b),e(ot,xb),k(Wa,ot,null),e(ot,Wb),k(Va,ot,null),zd=!0},p(o,[g]){const jr={};g&2&&(jr.$$scope={dirty:g,ctx:o}),To.$set(jr);const Ec={};g&2&&(Ec.$$scope={dirty:g,ctx:o}),Wo.$set(Ec);const qc={};g&2&&(qc.$$scope={dirty:g,ctx:o}),Po.$set(qc);const Pc={};g&2&&(Pc.$$scope={dirty:g,ctx:o}),Do.$set(Pc);const Fr={};g&2&&(Fr.$$scope={dirty:g,ctx:o}),So.$set(Fr);const zc={};g&2&&(zc.$$scope={dirty:g,ctx:o}),No.$set(zc);const Mc={};g&2&&(Mc.$$scope={dirty:g,ctx:o}),Ro.$set(Mc);const Ac={};g&2&&(Ac.$$scope={dirty:g,ctx:o}),Xo.$set(Ac);const Cr={};g&2&&(Cr.$$scope={dirty:g,ctx:o}),Jo.$set(Cr);const Oc={};g&2&&(Oc.$$scope={dirty:g,ctx:o}),Zo.$set(Oc);const Lc={};g&2&&(Lc.$$scope={dirty:g,ctx:o}),Ko.$set(Lc);const Dc={};g&2&&(Dc.$$scope={dirty:g,ctx:o}),Yo.$set(Dc);const Sc={};g&2&&(Sc.$$scope={dirty:g,ctx:o}),ea.$set(Sc);const Nc={};g&2&&(Nc.$$scope={dirty:g,ctx:o}),ta.$set(Nc);const Er={};g&2&&(Er.$$scope={dirty:g,ctx:o}),aa.$set(Er);const Ic={};g&2&&(Ic.$$scope={dirty:g,ctx:o}),sa.$set(Ic);const qr={};g&2&&(qr.$$scope={dirty:g,ctx:o}),ra.$set(qr);const Bc={};g&2&&(Bc.$$scope={dirty:g,ctx:o}),ia.$set(Bc);const Pr={};g&2&&(Pr.$$scope={dirty:g,ctx:o}),ca.$set(Pr);const Uc={};g&2&&(Uc.$$scope={dirty:g,ctx:o}),da.$set(Uc);const zr={};g&2&&(zr.$$scope={dirty:g,ctx:o}),ma.$set(zr);const Hc={};g&2&&(Hc.$$scope={dirty:g,ctx:o}),ha.$set(Hc);const Rc={};g&2&&(Rc.$$scope={dirty:g,ctx:o}),fa.$set(Rc);const Xc={};g&2&&(Xc.$$scope={dirty:g,ctx:o}),ga.$set(Xc);const kt={};g&2&&(kt.$$scope={dirty:g,ctx:o}),_a.$set(kt);const yo={};g&2&&(yo.$$scope={dirty:g,ctx:o}),va.$set(yo);const Gc={};g&2&&(Gc.$$scope={dirty:g,ctx:o}),wa.$set(Gc);const Jc={};g&2&&(Jc.$$scope={dirty:g,ctx:o}),ya.$set(Jc);const ko={};g&2&&(ko.$$scope={dirty:g,ctx:o}),Ta.$set(ko);const Zc={};g&2&&(Zc.$$scope={dirty:g,ctx:o}),$a.$set(Zc);const Kc={};g&2&&(Kc.$$scope={dirty:g,ctx:o}),Wa.$set(Kc);const Mr={};g&2&&(Mr.$$scope={dirty:g,ctx:o}),Va.$set(Mr)},i(o){zd||(T(l.$$.fragment,o),T(H.$$.fragment,o),T(X.$$.fragment,o),T($e.$$.fragment,o),T(To.$$.fragment,o),T(Xa.$$.fragment,o),T(Ga.$$.fragment,o),T(Za.$$.fragment,o),T(Ka.$$.fragment,o),T(Qa.$$.fragment,o),T(Wo.$$.fragment,o),T(es.$$.fragment,o),T(ts.$$.fragment,o),T(os.$$.fragment,o),T(ss.$$.fragment,o),T(ns.$$.fragment,o),T(rs.$$.fragment,o),T(ls.$$.fragment,o),T(ps.$$.fragment,o),T(ms.$$.fragment,o),T(hs.$$.fragment,o),T(Po.$$.fragment,o),T(us.$$.fragment,o),T(_s.$$.fragment,o),T(bs.$$.fragment,o),T(ws.$$.fragment,o),T(ys.$$.fragment,o),T($s.$$.fragment,o),T(xs.$$.fragment,o),T(Do.$$.fragment,o),T(Vs.$$.fragment,o),T(js.$$.fragment,o),T(So.$$.fragment,o),T(Fs.$$.fragment,o),T(No.$$.fragment,o),T(Cs.$$.fragment,o),T(Es.$$.fragment,o),T(Ps.$$.fragment,o),T(zs.$$.fragment,o),T(As.$$.fragment,o),T(Ls.$$.fragment,o),T(Ds.$$.fragment,o),T(Ns.$$.fragment,o),T(Is.$$.fragment,o),T(Bs.$$.fragment,o),T(Js.$$.fragment,o),T(Ro.$$.fragment,o),T(Xo.$$.fragment,o),T(Zs.$$.fragment,o),T(Ks.$$.fragment,o),T(on.$$.fragment,o),T(Jo.$$.fragment,o),T(Zo.$$.fragment,o),T(Ko.$$.fragment,o),T(an.$$.fragment,o),T(sn.$$.fragment,o),T(pn.$$.fragment,o),T(Yo.$$.fragment,o),T(ea.$$.fragment,o),T(ta.$$.fragment,o),T(mn.$$.fragment,o),T(hn.$$.fragment,o),T(bn.$$.fragment,o),T(aa.$$.fragment,o),T(sa.$$.fragment,o),T(wn.$$.fragment,o),T(yn.$$.fragment,o),T(Vn.$$.fragment,o),T(ra.$$.fragment,o),T(ia.$$.fragment,o),T(jn.$$.fragment,o),T(Fn.$$.fragment,o),T(zn.$$.fragment,o),T(ca.$$.fragment,o),T(da.$$.fragment,o),T(Mn.$$.fragment,o),T(An.$$.fragment,o),T(ma.$$.fragment,o),T(Sn.$$.fragment,o),T(ha.$$.fragment,o),T(fa.$$.fragment,o),T(Nn.$$.fragment,o),T(In.$$.fragment,o),T(ga.$$.fragment,o),T(Xn.$$.fragment,o),T(_a.$$.fragment,o),T(va.$$.fragment,o),T(Gn.$$.fragment,o),T(Jn.$$.fragment,o),T(nr.$$.fragment,o),T(wa.$$.fragment,o),T(ya.$$.fragment,o),T(rr.$$.fragment,o),T(ir.$$.fragment,o),T(gr.$$.fragment,o),T(Ta.$$.fragment,o),T($a.$$.fragment,o),T(_r.$$.fragment,o),T(vr.$$.fragment,o),T(Vr.$$.fragment,o),T(Wa.$$.fragment,o),T(Va.$$.fragment,o),zd=!0)},o(o){$(l.$$.fragment,o),$(H.$$.fragment,o),$(X.$$.fragment,o),$($e.$$.fragment,o),$(To.$$.fragment,o),$(Xa.$$.fragment,o),$(Ga.$$.fragment,o),$(Za.$$.fragment,o),$(Ka.$$.fragment,o),$(Qa.$$.fragment,o),$(Wo.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(ss.$$.fragment,o),$(ns.$$.fragment,o),$(rs.$$.fragment,o),$(ls.$$.fragment,o),$(ps.$$.fragment,o),$(ms.$$.fragment,o),$(hs.$$.fragment,o),$(Po.$$.fragment,o),$(us.$$.fragment,o),$(_s.$$.fragment,o),$(bs.$$.fragment,o),$(ws.$$.fragment,o),$(ys.$$.fragment,o),$($s.$$.fragment,o),$(xs.$$.fragment,o),$(Do.$$.fragment,o),$(Vs.$$.fragment,o),$(js.$$.fragment,o),$(So.$$.fragment,o),$(Fs.$$.fragment,o),$(No.$$.fragment,o),$(Cs.$$.fragment,o),$(Es.$$.fragment,o),$(Ps.$$.fragment,o),$(zs.$$.fragment,o),$(As.$$.fragment,o),$(Ls.$$.fragment,o),$(Ds.$$.fragment,o),$(Ns.$$.fragment,o),$(Is.$$.fragment,o),$(Bs.$$.fragment,o),$(Js.$$.fragment,o),$(Ro.$$.fragment,o),$(Xo.$$.fragment,o),$(Zs.$$.fragment,o),$(Ks.$$.fragment,o),$(on.$$.fragment,o),$(Jo.$$.fragment,o),$(Zo.$$.fragment,o),$(Ko.$$.fragment,o),$(an.$$.fragment,o),$(sn.$$.fragment,o),$(pn.$$.fragment,o),$(Yo.$$.fragment,o),$(ea.$$.fragment,o),$(ta.$$.fragment,o),$(mn.$$.fragment,o),$(hn.$$.fragment,o),$(bn.$$.fragment,o),$(aa.$$.fragment,o),$(sa.$$.fragment,o),$(wn.$$.fragment,o),$(yn.$$.fragment,o),$(Vn.$$.fragment,o),$(ra.$$.fragment,o),$(ia.$$.fragment,o),$(jn.$$.fragment,o),$(Fn.$$.fragment,o),$(zn.$$.fragment,o),$(ca.$$.fragment,o),$(da.$$.fragment,o),$(Mn.$$.fragment,o),$(An.$$.fragment,o),$(ma.$$.fragment,o),$(Sn.$$.fragment,o),$(ha.$$.fragment,o),$(fa.$$.fragment,o),$(Nn.$$.fragment,o),$(In.$$.fragment,o),$(ga.$$.fragment,o),$(Xn.$$.fragment,o),$(_a.$$.fragment,o),$(va.$$.fragment,o),$(Gn.$$.fragment,o),$(Jn.$$.fragment,o),$(nr.$$.fragment,o),$(wa.$$.fragment,o),$(ya.$$.fragment,o),$(rr.$$.fragment,o),$(ir.$$.fragment,o),$(gr.$$.fragment,o),$(Ta.$$.fragment,o),$($a.$$.fragment,o),$(_r.$$.fragment,o),$(vr.$$.fragment,o),$(Vr.$$.fragment,o),$(Wa.$$.fragment,o),$(Va.$$.fragment,o),zd=!1},d(o){t(c),o&&t(b),o&&t(f),x(l),o&&t(P),o&&t(C),x(H),o&&t(ge),o&&t(I),o&&t(N),o&&t(Fe),o&&t(He),o&&t(Ce),o&&t(Re),o&&t(O),o&&t(ce),o&&t(de),o&&t(V),o&&t(E),o&&t($t),o&&t(ke),x(X),o&&t(xt),o&&t(G),x($e),x(To),o&&t(Qc),o&&t(St),x(Xa),o&&t(Yc),o&&t(J),x(Ga),x(Za),x(Ka),x(Qa),x(Wo),x(es),o&&t(ed),o&&t(Nt),x(ts),o&&t(td),o&&t(Ue),x(os),x(ss),o&&t(od),o&&t(It),x(ns),o&&t(ad),o&&t(S),x(rs),x(ls),x(ps),x(ms),x(hs),x(Po),x(us),x(_s),o&&t(sd),o&&t(Bt),x(bs),o&&t(nd),o&&t(B),x(ws),x(ys),x($s),x(xs),x(Do),x(Vs),x(js),x(So),x(Fs),x(No),o&&t(rd),o&&t(Ut),x(Cs),o&&t(id),o&&t(Ht),x(Es),o&&t(ld),o&&t(Rt),x(Ps),o&&t(cd),o&&t(Xt),x(zs),o&&t(dd),o&&t(_t),x(As),x(Ls),o&&t(pd),o&&t(vt),x(Ds),x(Ns),o&&t(md),o&&t(Gt),x(Is),o&&t(hd),o&&t(xe),x(Bs),x(Js),x(Ro),x(Xo),o&&t(fd),o&&t(Zt),x(Zs),o&&t(ud),o&&t(We),x(Ks),x(on),x(Jo),x(Zo),x(Ko),o&&t(gd),o&&t(Yt),x(an),o&&t(_d),o&&t(se),x(sn),x(pn),x(Yo),x(ea),x(ta),o&&t(vd),o&&t(to),x(mn),o&&t(bd),o&&t(ne),x(hn),x(bn),x(aa),x(sa),o&&t(wd),o&&t(ao),x(wn),o&&t(yd),o&&t(re),x(yn),x(Vn),x(ra),x(ia),o&&t(kd),o&&t(no),x(jn),o&&t(Td),o&&t(Ve),x(Fn),x(zn),x(ca),x(da),o&&t($d),o&&t(lo),x(Mn),o&&t(xd),o&&t(ie),x(An),x(ma),x(Sn),x(ha),x(fa),o&&t(Wd),o&&t(po),x(Nn),o&&t(Vd),o&&t(le),x(In),x(ga),x(Xn),x(_a),x(va),o&&t(jd),o&&t(ho),x(Gn),o&&t(Fd),o&&t(Z),x(Jn),x(nr),x(wa),x(ya),o&&t(Cd),o&&t(uo),x(rr),o&&t(Ed),o&&t(K),x(ir),x(gr),x(Ta),x($a),o&&t(qd),o&&t(vo),x(_r),o&&t(Pd),o&&t(Q),x(vr),x(Vr),x(Wa),x(Va)}}}const MT={local:"wav2vec2",sections:[{local:"overview",title:"Overview"},{local:"transformers.Wav2Vec2Config",title:"Wav2Vec2Config"},{local:"transformers.Wav2Vec2CTCTokenizer",title:"Wav2Vec2CTCTokenizer"},{local:"transformers.Wav2Vec2FeatureExtractor",title:"Wav2Vec2FeatureExtractor"},{local:"transformers.Wav2Vec2Processor",title:"Wav2Vec2Processor"},{local:"transformers.Wav2Vec2ProcessorWithLM",title:"Wav2Vec2ProcessorWithLM"},{local:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput",title:"Wav2Vec2 specific outputs"},{local:"transformers.Wav2Vec2Model",title:"Wav2Vec2Model"},{local:"transformers.Wav2Vec2ForCTC",title:"Wav2Vec2ForCTC"},{local:"transformers.Wav2Vec2ForSequenceClassification",title:"Wav2Vec2ForSequenceClassification"},{local:"transformers.Wav2Vec2ForAudioFrameClassification",title:"Wav2Vec2ForAudioFrameClassification"},{local:"transformers.Wav2Vec2ForXVector",title:"Wav2Vec2ForXVector"},{local:"transformers.Wav2Vec2ForPreTraining",title:"Wav2Vec2ForPreTraining"},{local:"transformers.TFWav2Vec2Model",title:"TFWav2Vec2Model"},{local:"transformers.TFWav2Vec2ForCTC",title:"TFWav2Vec2ForCTC"},{local:"transformers.FlaxWav2Vec2Model",title:"FlaxWav2Vec2Model"},{local:"transformers.FlaxWav2Vec2ForCTC",title:"FlaxWav2Vec2ForCTC"},{local:"transformers.FlaxWav2Vec2ForPreTraining",title:"FlaxWav2Vec2ForPreTraining"}],title:"Wav2Vec2"};function AT(W){return tT(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class BT extends Kk{constructor(c){super();Qk(this,c,AT,zT,Yk,{})}}export{BT as default,MT as metadata};
