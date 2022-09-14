import{S as Z0,i as Q0,s as Y0,e as a,k as d,w,t as r,M as ek,c as s,d as t,m as p,a as n,x as y,h as i,b as m,G as e,g as _,y as k,q as T,o as $,B as x,v as tk,L as ve}from"../../chunks/vendor-hf-doc-builder.js";import{T as ge}from"../../chunks/Tip-hf-doc-builder.js";import{D as F}from"../../chunks/Docstring-hf-doc-builder.js";import{C as be}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as oe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as _e}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ok(j){let c,b,f,u,v;return u=new be({props:{code:`from transformers import Wav2Vec2Model, Wav2Vec2Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Example:"),h.forEach(t),f=p(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:ve,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(u,l)}}}function ak(j){let c,b,f,u,v;return u=new be({props:{code:`# Let's see how to retrieve time steps for a model
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
[{<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;WHY&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.42</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.54</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;DOES&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.64</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.9</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;MILISANDRA&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">2.26</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">2.9</span>}]`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Example:"),h.forEach(t),f=p(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:ve,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(u,l)}}}function sk(j){let c,b,f,u,v,l,h,V;return{c(){c=a("p"),b=r("This class method is simply calling "),f=a("a"),u=r("save_pretrained()"),v=r(` and
`),l=a("code"),h=r("save_pretrained"),V=r(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(S){c=s(S,"P",{});var A=n(c);b=i(A,"This class method is simply calling "),f=s(A,"A",{href:!0});var z=n(f);u=i(z,"save_pretrained()"),z.forEach(t),v=i(A,` and
`),l=s(A,"CODE",{});var L=n(l);h=i(L,"save_pretrained"),L.forEach(t),V=i(A,`. Please refer to the docstrings of the methods
above for more information.`),A.forEach(t),this.h()},h(){m(f,"href","/docs/transformers/v4.22.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(S,A){_(S,c,A),e(c,b),e(c,f),e(f,u),e(c,v),e(c,l),e(l,h),e(c,V)},d(S){S&&t(c)}}}function nk(j){let c,b,f,u,v,l,h,V,S,A,z,L,H,C;return{c(){c=a("p"),b=r(`This class method is simply calling Wav2Vec2FeatureExtractor\u2019s
`),f=a("a"),u=r("from_pretrained()"),v=r(`, Wav2Vec2CTCTokenizer\u2019s
`),l=a("code"),h=r("from_pretrained"),V=r(`, and
`),S=a("code"),A=r("pyctcdecode.BeamSearchDecoderCTC.load_from_hf_hub"),z=r("."),L=d(),H=a("p"),C=r("Please refer to the docstrings of the methods above for more information."),this.h()},l(N){c=s(N,"P",{});var q=n(c);b=i(q,`This class method is simply calling Wav2Vec2FeatureExtractor\u2019s
`),f=s(q,"A",{href:!0});var ze=n(f);u=i(ze,"from_pretrained()"),ze.forEach(t),v=i(q,`, Wav2Vec2CTCTokenizer\u2019s
`),l=s(q,"CODE",{});var we=n(l);h=i(we,"from_pretrained"),we.forEach(t),V=i(q,`, and
`),S=s(q,"CODE",{});var I=n(S);A=i(I,"pyctcdecode.BeamSearchDecoderCTC.load_from_hf_hub"),I.forEach(t),z=i(q,"."),q.forEach(t),L=p(N),H=s(N,"P",{});var Me=n(H);C=i(Me,"Please refer to the docstrings of the methods above for more information."),Me.forEach(t),this.h()},h(){m(f,"href","/docs/transformers/v4.22.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(N,q){_(N,c,q),e(c,b),e(c,f),e(f,u),e(c,v),e(c,l),e(l,h),e(c,V),e(c,S),e(S,A),e(c,z),_(N,L,q),_(N,H,q),e(H,C)},d(N){N&&t(c),N&&t(L),N&&t(H)}}}function rk(j){let c,b;return{c(){c=a("p"),b=r("This function makes use of Python\u2019s multiprocessing.")},l(f){c=s(f,"P",{});var u=n(c);b=i(u,"This function makes use of Python\u2019s multiprocessing."),u.forEach(t)},m(f,u){_(f,c,u),e(c,b)},d(f){f&&t(c)}}}function ik(j){let c,b,f,u,v;return u=new be({props:{code:`# Let's see how to retrieve time steps for a model
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
[{<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;WHY&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.42</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.54</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;DOES&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.64</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.88</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;A&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">2.12</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">2.14</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;MILE&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">2.26</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">2.46</span>}]`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Example:"),h.forEach(t),f=p(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:ve,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(u,l)}}}function lk(j){let c,b,f,u,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var V=n(f);u=i(V,"Module"),V.forEach(t),v=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function ck(j){let c,b,f,u,v;return u=new be({props:{code:`from transformers import Wav2Vec2Processor, Wav2Vec2Model
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
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">768</span>]`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Example:"),h.forEach(t),f=p(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:ve,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(u,l)}}}function dk(j){let c,b,f,u,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var V=n(f);u=i(V,"Module"),V.forEach(t),v=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function pk(j){let c,b,f,u,v;return u=new be({props:{code:`from transformers import Wav2Vec2Processor, Wav2Vec2ForCTC
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
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Example:"),h.forEach(t),f=p(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:ve,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(u,l)}}}function mk(j){let c,b;return c=new be({props:{code:`inputs["labels"] = processor(text=dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(text=dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">53.48</span>`}}),{c(){w(c.$$.fragment)},l(f){y(c.$$.fragment,f)},m(f,u){k(c,f,u),b=!0},p:ve,i(f){b||(T(c.$$.fragment,f),b=!0)},o(f){$(c.$$.fragment,f),b=!1},d(f){x(c,f)}}}function hk(j){let c,b,f,u,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var V=n(f);u=i(V,"Module"),V.forEach(t),v=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function fk(j){let c,b,f,u,v;return u=new be({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ForSequenceClassification
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
<span class="hljs-string">&#x27;_unknown_&#x27;</span>`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Example:"),h.forEach(t),f=p(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:ve,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(u,l)}}}function uk(j){let c,b;return c=new be({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">6.54</span>`}}),{c(){w(c.$$.fragment)},l(f){y(c.$$.fragment,f)},m(f,u){k(c,f,u),b=!0},p:ve,i(f){b||(T(c.$$.fragment,f),b=!0)},o(f){$(c.$$.fragment,f),b=!1},d(f){x(c,f)}}}function gk(j){let c,b,f,u,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var V=n(f);u=i(V,"Module"),V.forEach(t),v=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function _k(j){let c,b,f,u,v;return u=new be({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ForAudioFrameClassification
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
[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>]`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Example:"),h.forEach(t),f=p(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:ve,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(u,l)}}}function vk(j){let c,b,f,u,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var V=n(f);u=i(V,"Module"),V.forEach(t),v=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function bk(j){let c,b,f,u,v;return u=new be({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ForXVector
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
<span class="hljs-number">0.98</span>`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Example:"),h.forEach(t),f=p(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:ve,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(u,l)}}}function wk(j){let c,b,f,u,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var V=n(f);u=i(V,"Module"),V.forEach(t),v=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function yk(j){let c,b,f,u,v;return u=new be({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, mask_time_indices=mask_time_indices).loss`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Example:"),h.forEach(t),f=p(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:ve,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(u,l)}}}function kk(j){let c,b,f,u,v,l,h,V,S,A,z,L,H,C,N,q,ze,we,I,Me,ye,ke,vt,Ke,ae,bt,Ge,se,Ue,wt,Ae,M,R,Je,J,He,yt,Te,$e,kt,D,Tt,xe,Ze,he,We,je,$t,ie,Qe,X,fe,Ve,O,xt,K,Wt,Ye;return{c(){c=a("p"),b=r("TensorFlow models and layers in "),f=a("code"),u=r("transformers"),v=r(" accept two formats as input:"),l=d(),h=a("ul"),V=a("li"),S=r("having all inputs as keyword arguments (like PyTorch models), or"),A=d(),z=a("li"),L=r("having all inputs as a list, tuple or dict in the first positional argument."),H=d(),C=a("p"),N=r(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),q=a("code"),ze=r("model.fit()"),we=r(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),Me=r("model.fit()"),ye=r(` supports! If, however, you want to use the second
format outside of Keras methods like `),ke=a("code"),vt=r("fit()"),Ke=r(" and "),ae=a("code"),bt=r("predict()"),Ge=r(`, such as when creating your own layers or models with
the Keras `),se=a("code"),Ue=r("Functional"),wt=r(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Ae=d(),M=a("ul"),R=a("li"),Je=r("a single Tensor with "),J=a("code"),He=r("input_values"),yt=r(" only and nothing else: "),Te=a("code"),$e=r("model(input_values)"),kt=d(),D=a("li"),Tt=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),xe=a("code"),Ze=r("model([input_values, attention_mask])"),he=r(" or "),We=a("code"),je=r("model([input_values, attention_mask, token_type_ids])"),$t=d(),ie=a("li"),Qe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),fe=r('model({"input_values": input_values, "token_type_ids": token_type_ids})'),Ve=d(),O=a("p"),xt=r(`Note that when creating models and layers with
`),K=a("a"),Wt=r("subclassing"),Ye=r(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(W){c=s(W,"P",{});var E=n(c);b=i(E,"TensorFlow models and layers in "),f=s(E,"CODE",{});var Gt=n(f);u=i(Gt,"transformers"),Gt.forEach(t),v=i(E," accept two formats as input:"),E.forEach(t),l=p(W),h=s(W,"UL",{});var Z=n(h);V=s(Z,"LI",{});var Jt=n(V);S=i(Jt,"having all inputs as keyword arguments (like PyTorch models), or"),Jt.forEach(t),A=p(Z),z=s(Z,"LI",{});var et=n(z);L=i(et,"having all inputs as a list, tuple or dict in the first positional argument."),et.forEach(t),Z.forEach(t),H=p(W),C=s(W,"P",{});var P=n(C);N=i(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),q=s(P,"CODE",{});var Zt=n(q);ze=i(Zt,"model.fit()"),Zt.forEach(t),we=i(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=s(P,"CODE",{});var Re=n(I);Me=i(Re,"model.fit()"),Re.forEach(t),ye=i(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),ke=s(P,"CODE",{});var Qt=n(ke);vt=i(Qt,"fit()"),Qt.forEach(t),Ke=i(P," and "),ae=s(P,"CODE",{});var Yt=n(ae);bt=i(Yt,"predict()"),Yt.forEach(t),Ge=i(P,`, such as when creating your own layers or models with
the Keras `),se=s(P,"CODE",{});var eo=n(se);Ue=i(eo,"Functional"),eo.forEach(t),wt=i(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),Ae=p(W),M=s(W,"UL",{});var B=n(M);R=s(B,"LI",{});var Fe=n(R);Je=i(Fe,"a single Tensor with "),J=s(Fe,"CODE",{});var tt=n(J);He=i(tt,"input_values"),tt.forEach(t),yt=i(Fe," only and nothing else: "),Te=s(Fe,"CODE",{});var to=n(Te);$e=i(to,"model(input_values)"),to.forEach(t),Fe.forEach(t),kt=p(B),D=s(B,"LI",{});var Ce=n(D);Tt=i(Ce,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),xe=s(Ce,"CODE",{});var ot=n(xe);Ze=i(ot,"model([input_values, attention_mask])"),ot.forEach(t),he=i(Ce," or "),We=s(Ce,"CODE",{});var oo=n(We);je=i(oo,"model([input_values, attention_mask, token_type_ids])"),oo.forEach(t),Ce.forEach(t),$t=p(B),ie=s(B,"LI",{});var jt=n(ie);Qe=i(jt,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=s(jt,"CODE",{});var ao=n(X);fe=i(ao,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),ao.forEach(t),jt.forEach(t),B.forEach(t),Ve=p(W),O=s(W,"P",{});var ne=n(O);xt=i(ne,`Note that when creating models and layers with
`),K=s(ne,"A",{href:!0,rel:!0});var Dt=n(K);Wt=i(Dt,"subclassing"),Dt.forEach(t),Ye=i(ne,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ne.forEach(t),this.h()},h(){m(K,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(K,"rel","nofollow")},m(W,E){_(W,c,E),e(c,b),e(c,f),e(f,u),e(c,v),_(W,l,E),_(W,h,E),e(h,V),e(V,S),e(h,A),e(h,z),e(z,L),_(W,H,E),_(W,C,E),e(C,N),e(C,q),e(q,ze),e(C,we),e(C,I),e(I,Me),e(C,ye),e(C,ke),e(ke,vt),e(C,Ke),e(C,ae),e(ae,bt),e(C,Ge),e(C,se),e(se,Ue),e(C,wt),_(W,Ae,E),_(W,M,E),e(M,R),e(R,Je),e(R,J),e(J,He),e(R,yt),e(R,Te),e(Te,$e),e(M,kt),e(M,D),e(D,Tt),e(D,xe),e(xe,Ze),e(D,he),e(D,We),e(We,je),e(M,$t),e(M,ie),e(ie,Qe),e(ie,X),e(X,fe),_(W,Ve,E),_(W,O,E),e(O,xt),e(O,K),e(K,Wt),e(O,Ye)},d(W){W&&t(c),W&&t(l),W&&t(h),W&&t(H),W&&t(C),W&&t(Ae),W&&t(M),W&&t(Ve),W&&t(O)}}}function Tk(j){let c,b,f,u,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var V=n(f);u=i(V,"Module"),V.forEach(t),v=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function $k(j){let c,b,f,u,v;return u=new be({props:{code:`from transformers import Wav2Vec2Processor, TFWav2Vec2Model
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
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Example:"),h.forEach(t),f=p(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:ve,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(u,l)}}}function xk(j){let c,b,f,u,v,l,h,V,S,A,z,L,H,C,N,q,ze,we,I,Me,ye,ke,vt,Ke,ae,bt,Ge,se,Ue,wt,Ae,M,R,Je,J,He,yt,Te,$e,kt,D,Tt,xe,Ze,he,We,je,$t,ie,Qe,X,fe,Ve,O,xt,K,Wt,Ye;return{c(){c=a("p"),b=r("TensorFlow models and layers in "),f=a("code"),u=r("transformers"),v=r(" accept two formats as input:"),l=d(),h=a("ul"),V=a("li"),S=r("having all inputs as keyword arguments (like PyTorch models), or"),A=d(),z=a("li"),L=r("having all inputs as a list, tuple or dict in the first positional argument."),H=d(),C=a("p"),N=r(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),q=a("code"),ze=r("model.fit()"),we=r(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),Me=r("model.fit()"),ye=r(` supports! If, however, you want to use the second
format outside of Keras methods like `),ke=a("code"),vt=r("fit()"),Ke=r(" and "),ae=a("code"),bt=r("predict()"),Ge=r(`, such as when creating your own layers or models with
the Keras `),se=a("code"),Ue=r("Functional"),wt=r(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Ae=d(),M=a("ul"),R=a("li"),Je=r("a single Tensor with "),J=a("code"),He=r("input_values"),yt=r(" only and nothing else: "),Te=a("code"),$e=r("model(input_values)"),kt=d(),D=a("li"),Tt=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),xe=a("code"),Ze=r("model([input_values, attention_mask])"),he=r(" or "),We=a("code"),je=r("model([input_values, attention_mask, token_type_ids])"),$t=d(),ie=a("li"),Qe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),fe=r('model({"input_values": input_values, "token_type_ids": token_type_ids})'),Ve=d(),O=a("p"),xt=r(`Note that when creating models and layers with
`),K=a("a"),Wt=r("subclassing"),Ye=r(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(W){c=s(W,"P",{});var E=n(c);b=i(E,"TensorFlow models and layers in "),f=s(E,"CODE",{});var Gt=n(f);u=i(Gt,"transformers"),Gt.forEach(t),v=i(E," accept two formats as input:"),E.forEach(t),l=p(W),h=s(W,"UL",{});var Z=n(h);V=s(Z,"LI",{});var Jt=n(V);S=i(Jt,"having all inputs as keyword arguments (like PyTorch models), or"),Jt.forEach(t),A=p(Z),z=s(Z,"LI",{});var et=n(z);L=i(et,"having all inputs as a list, tuple or dict in the first positional argument."),et.forEach(t),Z.forEach(t),H=p(W),C=s(W,"P",{});var P=n(C);N=i(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),q=s(P,"CODE",{});var Zt=n(q);ze=i(Zt,"model.fit()"),Zt.forEach(t),we=i(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=s(P,"CODE",{});var Re=n(I);Me=i(Re,"model.fit()"),Re.forEach(t),ye=i(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),ke=s(P,"CODE",{});var Qt=n(ke);vt=i(Qt,"fit()"),Qt.forEach(t),Ke=i(P," and "),ae=s(P,"CODE",{});var Yt=n(ae);bt=i(Yt,"predict()"),Yt.forEach(t),Ge=i(P,`, such as when creating your own layers or models with
the Keras `),se=s(P,"CODE",{});var eo=n(se);Ue=i(eo,"Functional"),eo.forEach(t),wt=i(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),Ae=p(W),M=s(W,"UL",{});var B=n(M);R=s(B,"LI",{});var Fe=n(R);Je=i(Fe,"a single Tensor with "),J=s(Fe,"CODE",{});var tt=n(J);He=i(tt,"input_values"),tt.forEach(t),yt=i(Fe," only and nothing else: "),Te=s(Fe,"CODE",{});var to=n(Te);$e=i(to,"model(input_values)"),to.forEach(t),Fe.forEach(t),kt=p(B),D=s(B,"LI",{});var Ce=n(D);Tt=i(Ce,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),xe=s(Ce,"CODE",{});var ot=n(xe);Ze=i(ot,"model([input_values, attention_mask])"),ot.forEach(t),he=i(Ce," or "),We=s(Ce,"CODE",{});var oo=n(We);je=i(oo,"model([input_values, attention_mask, token_type_ids])"),oo.forEach(t),Ce.forEach(t),$t=p(B),ie=s(B,"LI",{});var jt=n(ie);Qe=i(jt,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=s(jt,"CODE",{});var ao=n(X);fe=i(ao,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),ao.forEach(t),jt.forEach(t),B.forEach(t),Ve=p(W),O=s(W,"P",{});var ne=n(O);xt=i(ne,`Note that when creating models and layers with
`),K=s(ne,"A",{href:!0,rel:!0});var Dt=n(K);Wt=i(Dt,"subclassing"),Dt.forEach(t),Ye=i(ne,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ne.forEach(t),this.h()},h(){m(K,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(K,"rel","nofollow")},m(W,E){_(W,c,E),e(c,b),e(c,f),e(f,u),e(c,v),_(W,l,E),_(W,h,E),e(h,V),e(V,S),e(h,A),e(h,z),e(z,L),_(W,H,E),_(W,C,E),e(C,N),e(C,q),e(q,ze),e(C,we),e(C,I),e(I,Me),e(C,ye),e(C,ke),e(ke,vt),e(C,Ke),e(C,ae),e(ae,bt),e(C,Ge),e(C,se),e(se,Ue),e(C,wt),_(W,Ae,E),_(W,M,E),e(M,R),e(R,Je),e(R,J),e(J,He),e(R,yt),e(R,Te),e(Te,$e),e(M,kt),e(M,D),e(D,Tt),e(D,xe),e(xe,Ze),e(D,he),e(D,We),e(We,je),e(M,$t),e(M,ie),e(ie,Qe),e(ie,X),e(X,fe),_(W,Ve,E),_(W,O,E),e(O,xt),e(O,K),e(K,Wt),e(O,Ye)},d(W){W&&t(c),W&&t(l),W&&t(h),W&&t(H),W&&t(C),W&&t(Ae),W&&t(M),W&&t(Ve),W&&t(O)}}}function Wk(j){let c,b,f,u,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var V=n(f);u=i(V,"Module"),V.forEach(t),v=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function jk(j){let c,b,f,u,v;return u=new be({props:{code:`import tensorflow as tf
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, labels=labels).loss`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Example:"),h.forEach(t),f=p(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:ve,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(u,l)}}}function Vk(j){let c,b,f,u,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var V=n(f);u=i(V,"Module"),V.forEach(t),v=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function Fk(j){let c,b,f,u,v;return u=new be({props:{code:`from transformers import Wav2Vec2Processor, FlaxWav2Vec2Model
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
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Example:"),h.forEach(t),f=p(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:ve,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(u,l)}}}function Ck(j){let c,b,f,u,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var V=n(f);u=i(V,"Module"),V.forEach(t),v=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function Ek(j){let c,b,f,u,v;return u=new be({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># should give:  &quot;A MAN SAID TO THE UNIVERSE SIR I EXIST&quot;</span>`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Example:"),h.forEach(t),f=p(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:ve,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(u,l)}}}function qk(j){let c,b,f,u,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),u=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var V=n(f);u=i(V,"Module"),V.forEach(t),v=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function Pk(j){let c,b,f,u,v;return u=new be({props:{code:`import optax
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> np.asarray(cosine_sim)[mask_time_indices].mean() &gt; <span class="hljs-number">0.5</span>`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=n(c);b=i(h,"Example:"),h.forEach(t),f=p(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:ve,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(u,l)}}}function zk(j){let c,b,f,u,v,l,h,V,S,A,z,L,H,C,N,q,ze,we,I,Me,ye,ke,vt,Ke,ae,bt,Ge,se,Ue,wt,Ae,M,R,Je,J,He,yt,Te,$e,kt,D,Tt,xe,Ze,he,We,je,$t,ie,Qe,X,fe,Ve,O,xt,K,Wt,Ye,W,E,Gt,Z,Jt,et,P,Zt,Re,Qt,Yt,eo,B,Fe,tt,to,Ce,ot,oo,jt,ao,ne,Dt,so,No,al,cs,im,sl,lm,pd,Q,ds,cm,nl,dm,pm,ps,mm,Qr,hm,fm,um,Io,ms,gm,rl,_m,vm,Yr,hs,bm,at,fs,wm,il,ym,km,us,Tm,ll,$m,xm,Wm,Bo,jm,Uo,gs,Vm,cl,Fm,md,no,Ho,dl,_s,Cm,pl,Em,hd,Xe,vs,qm,ml,Pm,zm,bs,Mm,ei,Am,Om,Lm,Ro,ws,Dm,hl,Sm,fd,ro,Xo,fl,ys,Nm,ul,Im,ud,U,ks,Bm,gl,Um,Hm,Oe,ti,Rm,Xm,oi,Km,Gm,ai,Jm,Zm,Ts,_l,Qm,Ym,eh,si,th,oh,ah,Ko,$s,sh,Vt,nh,xs,vl,rh,ih,lh,bl,ch,dh,Ws,wl,ph,mh,hh,fh,Go,js,uh,Ft,gh,ni,_h,vh,yl,bh,wh,ri,yh,kh,Th,ii,Vs,$h,St,Fs,xh,Cs,Wh,li,jh,Vh,Fh,Jo,Ch,Zo,Es,Eh,qs,qh,ci,Ph,zh,Mh,Qo,Ps,Ah,zs,Oh,di,Lh,Dh,gd,io,Yo,kl,Ms,Sh,Tl,Nh,_d,G,As,Ih,$l,Bh,Uh,ea,Os,Hh,Ct,Rh,Ls,xl,Xh,Kh,Gh,Wl,Jh,Zh,Ds,jl,Qh,Yh,ef,tf,ta,Ss,of,Et,af,pi,sf,nf,Vl,rf,lf,mi,cf,df,pf,Nt,Ns,mf,Is,hf,hi,ff,uf,gf,oa,_f,fi,Bs,vf,It,Us,bf,Fl,wf,yf,aa,kf,Bt,Hs,Tf,Cl,$f,xf,sa,vd,lo,na,El,Rs,Wf,ql,jf,bd,co,Xs,Vf,Ks,Ff,Pl,Cf,Ef,wd,po,Gs,qf,zl,Pf,yd,mo,Js,zf,Zs,Mf,ui,Af,Of,kd,qt,Qs,Lf,Ys,Df,Ml,Sf,Nf,If,ra,en,Bf,Al,Uf,Td,Pt,tn,Hf,on,Rf,Ol,Xf,Kf,Gf,ia,an,Jf,Ll,Zf,$d,ho,la,Dl,sn,Qf,Sl,Yf,xd,Ee,nn,eu,rn,tu,ln,ou,au,su,cn,nu,gi,ru,iu,lu,dn,cu,pn,du,pu,mu,st,mn,hu,fo,fu,_i,uu,gu,Nl,_u,vu,bu,ca,wu,da,Wd,uo,pa,Il,hn,yu,Bl,ku,jd,qe,fn,Tu,go,$u,Ul,xu,Wu,un,ju,Vu,Fu,gn,Cu,vi,Eu,qu,Pu,_n,zu,vn,Mu,Au,Ou,Le,bn,Lu,_o,Du,bi,Su,Nu,Hl,Iu,Bu,Uu,ma,Hu,ha,Ru,fa,Vd,vo,ua,Rl,wn,Xu,Xl,Ku,Fd,le,yn,Gu,Kl,Ju,Zu,kn,Qu,Tn,Yu,eg,tg,$n,og,wi,ag,sg,ng,xn,rg,Wn,ig,lg,cg,De,jn,dg,bo,pg,yi,mg,hg,Gl,fg,ug,gg,ga,_g,_a,vg,va,Cd,wo,ba,Jl,Vn,bg,Zl,wg,Ed,ce,Fn,yg,Ql,kg,Tg,Cn,$g,En,xg,Wg,jg,qn,Vg,ki,Fg,Cg,Eg,Pn,qg,zn,Pg,zg,Mg,nt,Mn,Ag,yo,Og,Ti,Lg,Dg,Yl,Sg,Ng,Ig,wa,Bg,ya,qd,ko,ka,ec,An,Ug,tc,Hg,Pd,de,On,Rg,oc,Xg,Kg,Ln,Gg,Dn,Jg,Zg,Qg,Sn,Yg,$i,e_,t_,o_,Nn,a_,In,s_,n_,r_,rt,Bn,i_,To,l_,xi,c_,d_,ac,p_,m_,h_,Ta,f_,$a,zd,$o,xa,sc,Un,u_,nc,g_,Md,Pe,Hn,__,xo,v_,rc,b_,w_,Rn,y_,k_,T_,Xn,$_,Wi,x_,W_,j_,Kn,V_,Gn,F_,C_,E_,it,Jn,q_,Wo,P_,ji,z_,M_,ic,A_,O_,L_,Wa,D_,ja,Ad,jo,Va,lc,Zn,S_,cc,N_,Od,pe,Qn,I_,dc,B_,U_,Yn,H_,Vi,R_,X_,K_,er,G_,tr,J_,Z_,Q_,Fa,Y_,lt,or,e2,Vo,t2,Fi,o2,a2,pc,s2,n2,r2,Ca,i2,Ea,Ld,Fo,qa,mc,ar,l2,hc,c2,Dd,me,sr,d2,nr,p2,fc,m2,h2,f2,rr,u2,Ci,g2,_2,v2,ir,b2,lr,w2,y2,k2,Pa,T2,ct,cr,$2,Co,x2,Ei,W2,j2,uc,V2,F2,C2,za,E2,Ma,Sd,Eo,Aa,gc,dr,q2,_c,P2,Nd,Y,pr,z2,mr,M2,hr,A2,O2,L2,fr,D2,qi,S2,N2,I2,ur,B2,gr,U2,H2,R2,vc,X2,K2,zt,bc,_r,G2,J2,wc,vr,Z2,Q2,yc,br,Y2,ev,kc,wr,tv,ov,dt,yr,av,qo,sv,Tc,nv,rv,$c,iv,lv,cv,Oa,dv,La,Id,Po,Da,xc,kr,pv,Wc,mv,Bd,ee,Tr,hv,zo,fv,jc,uv,gv,$r,_v,vv,bv,xr,wv,Pi,yv,kv,Tv,Wr,$v,jr,xv,Wv,jv,Vc,Vv,Fv,Mt,Fc,Vr,Cv,Ev,Cc,Fr,qv,Pv,Ec,Cr,zv,Mv,qc,Er,Av,Ov,pt,qr,Lv,Mo,Dv,Pc,Sv,Nv,zc,Iv,Bv,Uv,Sa,Hv,Na,Ud,Ao,Ia,Mc,Pr,Rv,Ac,Xv,Hd,te,zr,Kv,Oo,Gv,Oc,Jv,Zv,Mr,Qv,Yv,eb,Ar,tb,zi,ob,ab,sb,Or,nb,Lr,rb,ib,lb,Lc,cb,db,At,Dc,Dr,pb,mb,Sc,Sr,hb,fb,Nc,Nr,ub,gb,Ic,Ir,_b,vb,mt,Br,bb,Lo,wb,Mi,yb,kb,Bc,Tb,$b,xb,Ba,Wb,Ua,Rd;return l=new oe({}),C=new oe({}),O=new oe({}),E=new F({props:{name:"class transformers.Wav2Vec2Config",anchor:"transformers.Wav2Vec2Config",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"feat_quantizer_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"num_codevectors_per_group",val:" = 320"},{name:"num_codevector_groups",val:" = 2"},{name:"contrastive_logits_temperature",val:" = 0.1"},{name:"num_negatives",val:" = 100"},{name:"codevector_dim",val:" = 256"},{name:"proj_codevector_dim",val:" = 256"},{name:"diversity_loss_weight",val:" = 0.1"},{name:"ctc_loss_reduction",val:" = 'sum'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"tdnn_dim",val:" = (512, 512, 512, 512, 1500)"},{name:"tdnn_kernel",val:" = (5, 3, 3, 1, 1)"},{name:"tdnn_dilation",val:" = (1, 2, 3, 1, 1)"},{name:"xvector_output_dim",val:" = 512"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"add_adapter",val:" = False"},{name:"adapter_kernel_size",val:" = 3"},{name:"adapter_stride",val:" = 2"},{name:"num_adapter_layers",val:" = 3"},{name:"output_hidden_size",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the Wav2Vec2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Model">Wav2Vec2Model</a> or <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.TFWav2Vec2Model">TFWav2Vec2Model</a>. Vocabulary size of the
model. Defines the different tokens that can be represented by the <em>inputs_ids</em> passed to the forward
method of <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Model">Wav2Vec2Model</a>.`,name:"vocab_size"},{anchor:"transformers.Wav2Vec2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.Wav2Vec2Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.Wav2Vec2Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.Wav2Vec2Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.Wav2Vec2Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.Wav2Vec2Config.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.Wav2Vec2Config.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.Wav2Vec2Config.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC">Wav2Vec2ForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.Wav2Vec2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
instance of <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC">Wav2Vec2ForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.Wav2Vec2Config.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC">Wav2Vec2ForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.Wav2Vec2Config.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForSequenceClassification">Wav2Vec2ForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.Wav2Vec2Config.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
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
if <code>add_adapter is True</code>.`,name:"output_hidden_size"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/configuration_wav2vec2.py#L32"}}),ne=new _e({props:{anchor:"transformers.Wav2Vec2Config.example",$$slots:{default:[ok]},$$scope:{ctx:j}}}),cs=new oe({}),ds=new F({props:{name:"class transformers.Wav2Vec2CTCTokenizer",anchor:"transformers.Wav2Vec2CTCTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"word_delimiter_token",val:" = '|'"},{name:"replace_word_delimiter_char",val:" = ' '"},{name:"do_lower_case",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.Wav2Vec2CTCTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.word_delimiter_token",description:`<strong>word_delimiter_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;|&quot;</code>) &#x2014;
The token used for defining the end of a word.`,name:"word_delimiter_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to accept lowercase input and lowercase the output when decoding.</p>
<p>**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"do_lower_case"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L127"}}),ms=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2CTCTokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"text_target",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair_target",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
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
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.22.0/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.22.0/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.22.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
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
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/tokenization_utils_base.py#L2408",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.BatchEncoding"
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
  href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),hs=new F({props:{name:"save_vocabulary",anchor:"transformers.Wav2Vec2CTCTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L597"}}),fs=new F({props:{name:"decode",anchor:"transformers.Wav2Vec2CTCTokenizer.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"output_char_offsets",val:": bool = False"},{name:"output_word_offsets",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
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
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L490",returnDescription:`
<p>The list of decoded
sentences. Will be a <code>Wav2Vec2CTCTokenizerOutput</code> when
<code>output_char_offsets == True</code> or <code>output_word_offsets == True</code>.</p>
`,returnType:`
<p><code>str</code> or <code>Wav2Vec2CTCTokenizerOutput</code></p>
`}}),Bo=new _e({props:{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.example",$$slots:{default:[ak]},$$scope:{ctx:j}}}),gs=new F({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"output_char_offsets",val:": bool = False"},{name:"output_word_offsets",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
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
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L420",returnDescription:`
<p>The list of decoded
sentences. Will be a <code>Wav2Vec2CTCTokenizerOutput</code> when
<code>output_char_offsets == True</code> or <code>output_word_offsets == True</code>.</p>
`,returnType:`
<p><code>List[str]</code> or <code>Wav2Vec2CTCTokenizerOutput</code></p>
`}}),_s=new oe({}),vs=new F({props:{name:"class transformers.Wav2Vec2FeatureExtractor",anchor:"transformers.Wav2Vec2FeatureExtractor",parameters:[{name:"feature_size",val:" = 1"},{name:"sampling_rate",val:" = 16000"},{name:"padding_value",val:" = 0.0"},{name:"return_attention_mask",val:" = False"},{name:"do_normalize",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2FeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 1) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.Wav2Vec2FeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.Wav2Vec2FeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values.`,name:"padding_value"},{anchor:"transformers.Wav2Vec2FeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to zero-mean unit-variance normalize the input. Normalizing can help to significantly
improve the performance for some models, <em>e.g.</em>,
<a href="https://huggingface.co/models?search=lv60" rel="nofollow">wav2vec2-lv60</a>.`,name:"do_normalize"},{anchor:"transformers.Wav2Vec2FeatureExtractor.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor.__call__"><strong>call</strong>()</a> should return <code>attention_mask</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Wav2Vec2 models that have set <code>config.feat_extract_norm == &quot;group&quot;</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, have <strong>not</strong> been trained using
<code>attention_mask</code>. For such models, <code>input_values</code> should simply be padded with 0 and no <code>attention_mask</code>
should be passed.</p>
<p>For Wav2Vec2 models that have set <code>config.feat_extract_norm == &quot;layer&quot;</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-large-960h-lv60-self" rel="nofollow">wav2vec2-lv60</a>, <code>attention_mask</code> should be
passed for batched inference.</p>

					</div>`,name:"return_attention_mask"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/feature_extraction_wav2vec2.py#L31"}}),ws=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2FeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"truncation",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
The sequence or batch of sequences to be padded. Each sequence can be a numpy array, a list of float
values, a list of numpy arrays or a list of list of float values.`,name:"raw_speech"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.22.0/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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

					</div>`,name:"return_attention_mask"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.22.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>raw_speech</code> input was sampled. It is strongly recommended to pass
<code>sampling_rate</code> at the forward call to prevent silent errors.`,name:"sampling_rate"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.padding_value",description:"<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;",name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/feature_extraction_wav2vec2.py#L102"}}),ys=new oe({}),ks=new F({props:{name:"class transformers.Wav2Vec2Processor",anchor:"transformers.Wav2Vec2Processor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>Wav2Vec2FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor">Wav2Vec2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Wav2Vec2Processor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/processing_wav2vec2.py#L26"}}),$s=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2Processor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/processing_wav2vec2.py#L67"}}),js=new F({props:{name:"pad",anchor:"transformers.Wav2Vec2Processor.pad",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/processing_wav2vec2.py#L104"}}),Vs=new F({props:{name:"from_pretrained",anchor:"transformers.Wav2Vec2Processor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/processing_wav2vec2.py#L48"}}),Fs=new F({props:{name:"save_pretrained",anchor:"transformers.Wav2Vec2Processor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2Processor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.Wav2Vec2Processor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it. You can specify the
repository you want to push to with <code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).
kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/processing_utils.py#L94"}}),Jo=new ge({props:{$$slots:{default:[sk]},$$scope:{ctx:j}}}),Es=new F({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2Processor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/processing_wav2vec2.py#L134"}}),Ps=new F({props:{name:"decode",anchor:"transformers.Wav2Vec2Processor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/processing_wav2vec2.py#L141"}}),Ms=new oe({}),As=new F({props:{name:"class transformers.Wav2Vec2ProcessorWithLM",anchor:"transformers.Wav2Vec2ProcessorWithLM",parameters:[{name:"feature_extractor",val:": FeatureExtractionMixin"},{name:"tokenizer",val:": PreTrainedTokenizerBase"},{name:"decoder",val:": BeamSearchDecoderCTC"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor">Wav2Vec2FeatureExtractor</a>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor">Wav2Vec2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer">Wav2Vec2CTCTokenizer</a>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer">Wav2Vec2CTCTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decoder",description:`<strong>decoder</strong> (<code>pyctcdecode.BeamSearchDecoderCTC</code>) &#x2014;
An instance of <code>pyctcdecode.BeamSearchDecoderCTC</code>. The decoder is a required input.`,name:"decoder"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L64"}}),Os=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2ProcessorWithLM.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L211"}}),Ss=new F({props:{name:"pad",anchor:"transformers.Wav2Vec2ProcessorWithLM.pad",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L249"}}),Ns=new F({props:{name:"from_pretrained",anchor:"transformers.Wav2Vec2ProcessorWithLM.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/v4.22.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both <a href="/docs/transformers/v4.22.0/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor">SequenceFeatureExtractor</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a></li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L109"}}),oa=new ge({props:{$$slots:{default:[nk]},$$scope:{ctx:j}}}),Bs=new F({props:{name:"save_pretrained",anchor:"transformers.Wav2Vec2ProcessorWithLM.save_pretrained",parameters:[{name:"save_directory",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L105"}}),Us=new F({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode",parameters:[{name:"logits",val:": ndarray"},{name:"num_processes",val:": typing.Optional[int] = None"},{name:"beam_width",val:": typing.Optional[int] = None"},{name:"beam_prune_logp",val:": typing.Optional[float] = None"},{name:"token_min_logp",val:": typing.Optional[float] = None"},{name:"hotwords",val:": typing.Optional[typing.Iterable[str]] = None"},{name:"hotword_weight",val:": typing.Optional[float] = None"},{name:"alpha",val:": typing.Optional[float] = None"},{name:"beta",val:": typing.Optional[float] = None"},{name:"unk_score_offset",val:": typing.Optional[float] = None"},{name:"lm_score_boundary",val:": typing.Optional[bool] = None"},{name:"output_word_offsets",val:": bool = False"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.logits",description:`<strong>logits</strong> (<code>np.ndarray</code>) &#x2014;
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

					</div>`,name:"output_word_offsets"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L280",returnDescription:`
<p><code>Wav2Vec2DecoderWithLMOutput</code> or <code>tuple</code>.</p>
`}}),aa=new ge({props:{$$slots:{default:[rk]},$$scope:{ctx:j}}}),Hs=new F({props:{name:"decode",anchor:"transformers.Wav2Vec2ProcessorWithLM.decode",parameters:[{name:"logits",val:": ndarray"},{name:"beam_width",val:": typing.Optional[int] = None"},{name:"beam_prune_logp",val:": typing.Optional[float] = None"},{name:"token_min_logp",val:": typing.Optional[float] = None"},{name:"hotwords",val:": typing.Optional[typing.Iterable[str]] = None"},{name:"hotword_weight",val:": typing.Optional[float] = None"},{name:"alpha",val:": typing.Optional[float] = None"},{name:"beta",val:": typing.Optional[float] = None"},{name:"unk_score_offset",val:": typing.Optional[float] = None"},{name:"lm_score_boundary",val:": typing.Optional[bool] = None"},{name:"output_word_offsets",val:": bool = False"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.logits",description:`<strong>logits</strong> (<code>np.ndarray</code>) &#x2014;
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

					</div>`,name:"output_word_offsets"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L397",returnDescription:`
<p><code>Wav2Vec2DecoderWithLMOutput</code> or <code>tuple</code>.</p>
`}}),sa=new _e({props:{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.example",$$slots:{default:[ik]},$$scope:{ctx:j}}}),Rs=new oe({}),Xs=new F({props:{name:"class transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput",anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput",parameters:[{name:"text",val:": typing.Union[typing.List[str], str]"},{name:"logit_score",val:": typing.Union[typing.List[float], float] = None"},{name:"lm_score",val:": typing.Union[typing.List[float], float] = None"},{name:"word_offsets",val:": typing.Union[typing.List[typing.List[typing.Dict[str, typing.Union[int, str]]]], typing.List[typing.Dict[str, typing.Union[int, str]]]] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.text",description:`<strong>text</strong> (list of <code>str</code> or <code>str</code>) &#x2014;
Decoded logits in text from. Usually the speech transcription.`,name:"text"},{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.logit_score",description:`<strong>logit_score</strong> (list of <code>float</code> or <code>float</code>) &#x2014;
Total logit score of the beam associated with produced text.`,name:"logit_score"},{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.lm_score",description:`<strong>lm_score</strong> (list of <code>float</code>) &#x2014;
Fused lm_score of the beam associated with produced text.`,name:"lm_score"},{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.word_offsets",description:`<strong>word_offsets</strong> (list of <code>List[Dict[str, Union[int, str]]]</code> or <code>List[Dict[str, Union[int, str]]]</code>) &#x2014;
Offsets of the decoded words. In combination with sampling rate and model downsampling rate word offsets
can be used to compute time stamps for each word.`,name:"word_offsets"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L42"}}),Gs=new F({props:{name:"class transformers.modeling_outputs.Wav2Vec2BaseModelOutput",anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"extract_features",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput.extract_features",description:`<strong>extract_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, conv_dim[-1])</code>) &#x2014;
Sequence of extracted feature vectors of the last convolutional layer of the model.`,name:"extract_features"},{anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/modeling_outputs.py#L976"}}),Js=new F({props:{name:"class transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput",anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"projected_states",val:": FloatTensor = None"},{name:"projected_quantized_states",val:": FloatTensor = None"},{name:"codevector_perplexity",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"contrastive_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"diversity_loss",val:": typing.Optional[torch.FloatTensor] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
The diversity loss (L_d) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official paper</a> .`,name:"diversity_loss"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L94"}}),Qs=new F({props:{name:"class transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput",parameters:[{name:"last_hidden_state",val:": ndarray = None"},{name:"extract_features",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.extract_features",description:`<strong>extract_features</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, last_conv_dim)</code>) &#x2014;
Sequence of extracted feature vectors of the last convolutional layer of the model with <code>last_conv_dim</code>
being the dimension of the last convolutional layer.`,name:"extract_features"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L46"}}),en=new F({props:{name:"replace",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/flax/struct.py#L108"}}),tn=new F({props:{name:"class transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput",parameters:[{name:"projected_states",val:": ndarray = None"},{name:"projected_quantized_states",val:": ndarray = None"},{name:"codevector_perplexity",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when model is in train mode, <code>jnp.ndarray</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L76"}}),an=new F({props:{name:"replace",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/flax/struct.py#L108"}}),sn=new oe({}),nn=new F({props:{name:"class transformers.Wav2Vec2Model",anchor:"transformers.Wav2Vec2Model",parameters:[{name:"config",val:": Wav2Vec2Config"}],parametersDescription:[{anchor:"transformers.Wav2Vec2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1182"}}),mn=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2Model.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2Model.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1268",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ca=new ge({props:{$$slots:{default:[lk]},$$scope:{ctx:j}}}),da=new _e({props:{anchor:"transformers.Wav2Vec2Model.forward.example",$$slots:{default:[ck]},$$scope:{ctx:j}}}),hn=new oe({}),fn=new F({props:{name:"class transformers.Wav2Vec2ForCTC",anchor:"transformers.Wav2Vec2ForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1591"}}),bn=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForCTC.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1632",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ma=new ge({props:{$$slots:{default:[dk]},$$scope:{ctx:j}}}),ha=new _e({props:{anchor:"transformers.Wav2Vec2ForCTC.forward.example",$$slots:{default:[pk]},$$scope:{ctx:j}}}),fa=new _e({props:{anchor:"transformers.Wav2Vec2ForCTC.forward.example-2",$$slots:{default:[mk]},$$scope:{ctx:j}}}),wn=new oe({}),yn=new F({props:{name:"class transformers.Wav2Vec2ForSequenceClassification",anchor:"transformers.Wav2Vec2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1721"}}),jn=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1766",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ga=new ge({props:{$$slots:{default:[hk]},$$scope:{ctx:j}}}),_a=new _e({props:{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.example",$$slots:{default:[fk]},$$scope:{ctx:j}}}),va=new _e({props:{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.example-2",$$slots:{default:[uk]},$$scope:{ctx:j}}}),Vn=new oe({}),Fn=new F({props:{name:"class transformers.Wav2Vec2ForAudioFrameClassification",anchor:"transformers.Wav2Vec2ForAudioFrameClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1844"}}),Mn=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1888",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wa=new ge({props:{$$slots:{default:[gk]},$$scope:{ctx:j}}}),ya=new _e({props:{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.example",$$slots:{default:[_k]},$$scope:{ctx:j}}}),An=new oe({}),On=new F({props:{name:"class transformers.Wav2Vec2ForXVector",anchor:"transformers.Wav2Vec2ForXVector",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForXVector.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L2006"}}),Bn=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForXVector.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForXVector.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForXVector.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForXVector.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L2068",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.XVectorOutput"
>transformers.modeling_outputs.XVectorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.XVectorOutput"
>transformers.modeling_outputs.XVectorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ta=new ge({props:{$$slots:{default:[vk]},$$scope:{ctx:j}}}),$a=new _e({props:{anchor:"transformers.Wav2Vec2ForXVector.forward.example",$$slots:{default:[bk]},$$scope:{ctx:j}}}),Un=new oe({}),Hn=new F({props:{name:"class transformers.Wav2Vec2ForPreTraining",anchor:"transformers.Wav2Vec2ForPreTraining",parameters:[{name:"config",val:": Wav2Vec2Config"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1331"}}),Jn=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForPreTraining.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.BoolTensor] = None"},{name:"sampled_negative_indices",val:": typing.Optional[torch.BoolTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForPreTraining.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForPreTraining.forward.mask_time_indices",description:`<strong>mask_time_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices to mask extracted features for contrastive loss. When in training mode, model learns to predict
masked extracted features in <em>config.proj_codevector_dim</em> space.`,name:"mask_time_indices"},{anchor:"transformers.Wav2Vec2ForPreTraining.forward.sampled_negative_indices",description:`<strong>sampled_negative_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length, num_negatives)</code>, <em>optional</em>) &#x2014;
Indices indicating which quantized target vectors are used as negative sampled vectors in contrastive loss.
Required input for pre-training.`,name:"sampled_negative_indices"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1392",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput"
>transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput"
>transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wa=new ge({props:{$$slots:{default:[wk]},$$scope:{ctx:j}}}),ja=new _e({props:{anchor:"transformers.Wav2Vec2ForPreTraining.forward.example",$$slots:{default:[yk]},$$scope:{ctx:j}}}),Zn=new oe({}),Qn=new F({props:{name:"class transformers.TFWav2Vec2Model",anchor:"transformers.TFWav2Vec2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWav2Vec2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1473"}}),Fa=new ge({props:{$$slots:{default:[kk]},$$scope:{ctx:j}}}),or=new F({props:{name:"call",anchor:"transformers.TFWav2Vec2Model.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFWav2Vec2Model.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFWav2Vec2Model.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1479",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ca=new ge({props:{$$slots:{default:[Tk]},$$scope:{ctx:j}}}),Ea=new _e({props:{anchor:"transformers.TFWav2Vec2Model.call.example",$$slots:{default:[$k]},$$scope:{ctx:j}}}),ar=new oe({}),sr=new F({props:{name:"class transformers.TFWav2Vec2ForCTC",anchor:"transformers.TFWav2Vec2ForCTC",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWav2Vec2ForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1576"}}),Pa=new ge({props:{$$slots:{default:[xk]},$$scope:{ctx:j}}}),cr=new F({props:{name:"call",anchor:"transformers.TFWav2Vec2ForCTC.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFWav2Vec2ForCTC.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFWav2Vec2ForCTC.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFWav2Vec2ForCTC.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_values</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked),
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1603",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),za=new ge({props:{$$slots:{default:[Wk]},$$scope:{ctx:j}}}),Ma=new _e({props:{anchor:"transformers.TFWav2Vec2ForCTC.call.example",$$slots:{default:[jk]},$$scope:{ctx:j}}}),dr=new oe({}),pr=new F({props:{name:"class transformers.FlaxWav2Vec2Model",anchor:"transformers.FlaxWav2Vec2Model",parameters:[{name:"config",val:": Wav2Vec2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1024)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWav2Vec2Model.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1058"}}),yr=new F({props:{name:"__call__",anchor:"transformers.FlaxWav2Vec2Model.__call__",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2Model.__call__.input_values",description:`<strong>input_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>jnp.ndarray</em>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.FlaxWav2Vec2Model.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L890",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput"
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
  href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput"
>transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oa=new ge({props:{$$slots:{default:[Vk]},$$scope:{ctx:j}}}),La=new _e({props:{anchor:"transformers.FlaxWav2Vec2Model.__call__.example",$$slots:{default:[Fk]},$$scope:{ctx:j}}}),kr=new oe({}),Tr=new F({props:{name:"class transformers.FlaxWav2Vec2ForCTC",anchor:"transformers.FlaxWav2Vec2ForCTC",parameters:[{name:"config",val:": Wav2Vec2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1024)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWav2Vec2ForCTC.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1176"}}),qr=new F({props:{name:"__call__",anchor:"transformers.FlaxWav2Vec2ForCTC.__call__",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.input_values",description:`<strong>input_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>jnp.ndarray</em>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L890",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sa=new ge({props:{$$slots:{default:[Ck]},$$scope:{ctx:j}}}),Na=new _e({props:{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.example",$$slots:{default:[Ek]},$$scope:{ctx:j}}}),Pr=new oe({}),zr=new F({props:{name:"class transformers.FlaxWav2Vec2ForPreTraining",anchor:"transformers.FlaxWav2Vec2ForPreTraining",parameters:[{name:"config",val:": Wav2Vec2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1024)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWav2Vec2ForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1322"}}),Br=new F({props:{name:"__call__",anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"gumbel_temperature",val:": int = 1"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"gumbel_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.input_values",description:`<strong>input_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>jnp.ndarray</em>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1325",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput"
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
  href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput"
>transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ba=new ge({props:{$$slots:{default:[qk]},$$scope:{ctx:j}}}),Ua=new _e({props:{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.example",$$slots:{default:[Pk]},$$scope:{ctx:j}}}),{c(){c=a("meta"),b=d(),f=a("h1"),u=a("a"),v=a("span"),w(l.$$.fragment),h=d(),V=a("span"),S=r("Wav2Vec2"),A=d(),z=a("h2"),L=a("a"),H=a("span"),w(C.$$.fragment),N=d(),q=a("span"),ze=r("Overview"),we=d(),I=a("p"),Me=r("The Wav2Vec2 model was proposed in "),ye=a("a"),ke=r("wav2vec 2.0: A Framework for Self-Supervised Learning of Speech Representations"),vt=r(" by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael Auli."),Ke=d(),ae=a("p"),bt=r("The abstract from the paper is the following:"),Ge=d(),se=a("p"),Ue=a("em"),wt=r(`We show for the first time that learning powerful representations from speech audio alone followed by fine-tuning on
transcribed speech can outperform the best semi-supervised methods while being conceptually simpler. wav2vec 2.0 masks
the speech input in the latent space and solves a contrastive task defined over a quantization of the latent
representations which are jointly learned. Experiments using all labeled data of Librispeech achieve 1.8/3.3 WER on the
clean/other test sets. When lowering the amount of labeled data to one hour, wav2vec 2.0 outperforms the previous state
of the art on the 100 hour subset while using 100 times less labeled data. Using just ten minutes of labeled data and
pre-training on 53k hours of unlabeled data still achieves 4.8/8.2 WER. This demonstrates the feasibility of speech
recognition with limited amounts of labeled data.`),Ae=d(),M=a("p"),R=r("Tips:"),Je=d(),J=a("ul"),He=a("li"),yt=r("Wav2Vec2 is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),Te=d(),$e=a("li"),kt=r(`Wav2Vec2 model was trained using connectionist temporal classification (CTC) so the model output has to be decoded
using `),D=a("a"),Tt=r("Wav2Vec2CTCTokenizer"),xe=r("."),Ze=d(),he=a("p"),We=r("This model was contributed by "),je=a("a"),$t=r("patrickvonplaten"),ie=r("."),Qe=d(),X=a("h2"),fe=a("a"),Ve=a("span"),w(O.$$.fragment),xt=d(),K=a("span"),Wt=r("Wav2Vec2Config"),Ye=d(),W=a("div"),w(E.$$.fragment),Gt=d(),Z=a("p"),Jt=r("This is the configuration class to store the configuration of a "),et=a("a"),P=r("Wav2Vec2Model"),Zt=r(`. It is used to instantiate an
Wav2Vec2 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Wav2Vec2
`),Re=a("a"),Qt=r("facebook/wav2vec2-base-960h"),Yt=r(" architecture."),eo=d(),B=a("p"),Fe=r("Configuration objects inherit from "),tt=a("a"),to=r("PretrainedConfig"),Ce=r(` and can be used to control the model outputs. Read the
documentation from `),ot=a("a"),oo=r("PretrainedConfig"),jt=r(" for more information."),ao=d(),w(ne.$$.fragment),Dt=d(),so=a("h2"),No=a("a"),al=a("span"),w(cs.$$.fragment),im=d(),sl=a("span"),lm=r("Wav2Vec2CTCTokenizer"),pd=d(),Q=a("div"),w(ds.$$.fragment),cm=d(),nl=a("p"),dm=r("Constructs a Wav2Vec2CTC tokenizer."),pm=d(),ps=a("p"),mm=r("This tokenizer inherits from "),Qr=a("a"),hm=r("PreTrainedTokenizer"),fm=r(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),um=d(),Io=a("div"),w(ms.$$.fragment),gm=d(),rl=a("p"),_m=r(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),vm=d(),Yr=a("div"),w(hs.$$.fragment),bm=d(),at=a("div"),w(fs.$$.fragment),wm=d(),il=a("p"),ym=r(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),km=d(),us=a("p"),Tm=r("Similar to doing "),ll=a("code"),$m=r("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),xm=r("."),Wm=d(),w(Bo.$$.fragment),jm=d(),Uo=a("div"),w(gs.$$.fragment),Vm=d(),cl=a("p"),Fm=r("Convert a list of lists of token ids into a list of strings by calling decode."),md=d(),no=a("h2"),Ho=a("a"),dl=a("span"),w(_s.$$.fragment),Cm=d(),pl=a("span"),Em=r("Wav2Vec2FeatureExtractor"),hd=d(),Xe=a("div"),w(vs.$$.fragment),qm=d(),ml=a("p"),Pm=r("Constructs a Wav2Vec2 feature extractor."),zm=d(),bs=a("p"),Mm=r("This feature extractor inherits from "),ei=a("a"),Am=r("SequenceFeatureExtractor"),Om=r(` which contains
most of the main methods. Users should refer to this superclass for more information regarding those methods.`),Lm=d(),Ro=a("div"),w(ws.$$.fragment),Dm=d(),hl=a("p"),Sm=r("Main method to featurize and prepare for the model one or several sequence(s). sequences."),fd=d(),ro=a("h2"),Xo=a("a"),fl=a("span"),w(ys.$$.fragment),Nm=d(),ul=a("span"),Im=r("Wav2Vec2Processor"),ud=d(),U=a("div"),w(ks.$$.fragment),Bm=d(),gl=a("p"),Um=r(`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor and a Wav2Vec2 CTC tokenizer into a single
processor.`),Hm=d(),Oe=a("p"),ti=a("a"),Rm=r("Wav2Vec2Processor"),Xm=r(" offers all the functionalities of "),oi=a("a"),Km=r("Wav2Vec2FeatureExtractor"),Gm=r(" and "),ai=a("a"),Jm=r("PreTrainedTokenizer"),Zm=r(`.
See the docstring of `),Ts=a("a"),_l=a("strong"),Qm=r("call"),Ym=r("()"),eh=r(" and "),si=a("a"),th=r("decode()"),oh=r(" for more information."),ah=d(),Ko=a("div"),w($s.$$.fragment),sh=d(),Vt=a("p"),nh=r(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),xs=a("a"),vl=a("strong"),rh=r("call"),ih=r("()"),lh=r(` and returns its output. If used in the context
`),bl=a("code"),ch=r("as_target_processor()"),dh=r(` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),Ws=a("a"),wl=a("strong"),ph=r("call"),mh=r("()"),hh=r(". Please refer to the docstring of the above two methods for more information."),fh=d(),Go=a("div"),w(js.$$.fragment),uh=d(),Ft=a("p"),gh=r(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),ni=a("a"),_h=r("pad()"),vh=r(` and returns its output. If used in the context
`),yl=a("code"),bh=r("as_target_processor()"),wh=r(` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),ri=a("a"),yh=r("pad()"),kh=r(". Please refer to the docstring of the above two methods for more information."),Th=d(),ii=a("div"),w(Vs.$$.fragment),$h=d(),St=a("div"),w(Fs.$$.fragment),xh=d(),Cs=a("p"),Wh=r(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),li=a("a"),jh=r("from_pretrained()"),Vh=r(" method."),Fh=d(),w(Jo.$$.fragment),Ch=d(),Zo=a("div"),w(Es.$$.fragment),Eh=d(),qs=a("p"),qh=r("This method forwards all its arguments to PreTrainedTokenizer\u2019s "),ci=a("a"),Ph=r("batch_decode()"),zh=r(`. Please
refer to the docstring of this method for more information.`),Mh=d(),Qo=a("div"),w(Ps.$$.fragment),Ah=d(),zs=a("p"),Oh=r("This method forwards all its arguments to PreTrainedTokenizer\u2019s "),di=a("a"),Lh=r("decode()"),Dh=r(`. Please refer
to the docstring of this method for more information.`),gd=d(),io=a("h2"),Yo=a("a"),kl=a("span"),w(Ms.$$.fragment),Sh=d(),Tl=a("span"),Nh=r("Wav2Vec2ProcessorWithLM"),_d=d(),G=a("div"),w(As.$$.fragment),Ih=d(),$l=a("p"),Bh=r(`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor, a Wav2Vec2 CTC tokenizer and a decoder
with language model support into a single processor for language model boosted speech recognition decoding.`),Uh=d(),ea=a("div"),w(Os.$$.fragment),Hh=d(),Ct=a("p"),Rh=r(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),Ls=a("a"),xl=a("strong"),Xh=r("call"),Kh=r("()"),Gh=r(` and returns its output. If used in the context
`),Wl=a("code"),Jh=r("as_target_processor()"),Zh=r(` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),Ds=a("a"),jl=a("strong"),Qh=r("call"),Yh=r("()"),ef=r(`. Please refer to the docstring of the above two
methods for more information.`),tf=d(),ta=a("div"),w(Ss.$$.fragment),of=d(),Et=a("p"),af=r(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),pi=a("a"),sf=r("pad()"),nf=r(` and returns its output. If used in the context
`),Vl=a("code"),rf=r("as_target_processor()"),lf=r(` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),mi=a("a"),cf=r("pad()"),df=r(`. Please refer to the docstring of the above two methods
for more information.`),pf=d(),Nt=a("div"),w(Ns.$$.fragment),mf=d(),Is=a("p"),hf=r("Instantiate a "),hi=a("a"),ff=r("Wav2Vec2ProcessorWithLM"),uf=r(" from a pretrained Wav2Vec2 processor."),gf=d(),w(oa.$$.fragment),_f=d(),fi=a("div"),w(Bs.$$.fragment),vf=d(),It=a("div"),w(Us.$$.fragment),bf=d(),Fl=a("p"),wf=r("Batch decode output logits to audio transcription with language model support."),yf=d(),w(aa.$$.fragment),kf=d(),Bt=a("div"),w(Hs.$$.fragment),Tf=d(),Cl=a("p"),$f=r("Decode output logits to audio transcription with language model support."),xf=d(),w(sa.$$.fragment),vd=d(),lo=a("h2"),na=a("a"),El=a("span"),w(Rs.$$.fragment),Wf=d(),ql=a("span"),jf=r("Wav2Vec2 specific outputs"),bd=d(),co=a("div"),w(Xs.$$.fragment),Vf=d(),Ks=a("p"),Ff=r("Output type of "),Pl=a("code"),Cf=r("Wav2Vec2DecoderWithLM"),Ef=r(", with transcription."),wd=d(),po=a("div"),w(Gs.$$.fragment),qf=d(),zl=a("p"),Pf=r("Base class for models that have been trained with the Wav2Vec2 loss objective."),yd=d(),mo=a("div"),w(Js.$$.fragment),zf=d(),Zs=a("p"),Mf=r("Output type of "),ui=a("a"),Af=r("Wav2Vec2ForPreTraining"),Of=r(", with potential hidden states and attentions."),kd=d(),qt=a("div"),w(Qs.$$.fragment),Lf=d(),Ys=a("p"),Df=r("Output type of "),Ml=a("code"),Sf=r("FlaxWav2Vec2BaseModelOutput"),Nf=r(", with potential hidden states and attentions."),If=d(),ra=a("div"),w(en.$$.fragment),Bf=d(),Al=a("p"),Uf=r("\u201CReturns a new object replacing the specified fields with new values."),Td=d(),Pt=a("div"),w(tn.$$.fragment),Hf=d(),on=a("p"),Rf=r("Output type of "),Ol=a("code"),Xf=r("FlaxWav2Vec2ForPreTrainingOutput"),Kf=r(", with potential hidden states and attentions."),Gf=d(),ia=a("div"),w(an.$$.fragment),Jf=d(),Ll=a("p"),Zf=r("\u201CReturns a new object replacing the specified fields with new values."),$d=d(),ho=a("h2"),la=a("a"),Dl=a("span"),w(sn.$$.fragment),Qf=d(),Sl=a("span"),Yf=r("Wav2Vec2Model"),xd=d(),Ee=a("div"),w(nn.$$.fragment),eu=d(),rn=a("p"),tu=r(`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),ln=a("a"),ou=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),au=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),su=d(),cn=a("p"),nu=r("This model inherits from "),gi=a("a"),ru=r("PreTrainedModel"),iu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),lu=d(),dn=a("p"),cu=r("This model is a PyTorch "),pn=a("a"),du=r("torch.nn.Module"),pu=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mu=d(),st=a("div"),w(mn.$$.fragment),hu=d(),fo=a("p"),fu=r("The "),_i=a("a"),uu=r("Wav2Vec2Model"),gu=r(" forward method, overrides the "),Nl=a("code"),_u=r("__call__"),vu=r(" special method."),bu=d(),w(ca.$$.fragment),wu=d(),w(da.$$.fragment),Wd=d(),uo=a("h2"),pa=a("a"),Il=a("span"),w(hn.$$.fragment),yu=d(),Bl=a("span"),ku=r("Wav2Vec2ForCTC"),jd=d(),qe=a("div"),w(fn.$$.fragment),Tu=d(),go=a("p"),$u=r("Wav2Vec2 Model with a "),Ul=a("code"),xu=r("language modeling"),Wu=r(` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),un=a("a"),ju=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Vu=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Fu=d(),gn=a("p"),Cu=r("This model inherits from "),vi=a("a"),Eu=r("PreTrainedModel"),qu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Pu=d(),_n=a("p"),zu=r("This model is a PyTorch "),vn=a("a"),Mu=r("torch.nn.Module"),Au=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ou=d(),Le=a("div"),w(bn.$$.fragment),Lu=d(),_o=a("p"),Du=r("The "),bi=a("a"),Su=r("Wav2Vec2ForCTC"),Nu=r(" forward method, overrides the "),Hl=a("code"),Iu=r("__call__"),Bu=r(" special method."),Uu=d(),w(ma.$$.fragment),Hu=d(),w(ha.$$.fragment),Ru=d(),w(fa.$$.fragment),Vd=d(),vo=a("h2"),ua=a("a"),Rl=a("span"),w(wn.$$.fragment),Xu=d(),Xl=a("span"),Ku=r("Wav2Vec2ForSequenceClassification"),Fd=d(),le=a("div"),w(yn.$$.fragment),Gu=d(),Kl=a("p"),Ju=r(`Wav2Vec2 Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),Zu=d(),kn=a("p"),Qu=r("Wav2Vec2 was proposed in "),Tn=a("a"),Yu=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),eg=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),tg=d(),$n=a("p"),og=r("This model inherits from "),wi=a("a"),ag=r("PreTrainedModel"),sg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ng=d(),xn=a("p"),rg=r("This model is a PyTorch "),Wn=a("a"),ig=r("torch.nn.Module"),lg=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cg=d(),De=a("div"),w(jn.$$.fragment),dg=d(),bo=a("p"),pg=r("The "),yi=a("a"),mg=r("Wav2Vec2ForSequenceClassification"),hg=r(" forward method, overrides the "),Gl=a("code"),fg=r("__call__"),ug=r(" special method."),gg=d(),w(ga.$$.fragment),_g=d(),w(_a.$$.fragment),vg=d(),w(va.$$.fragment),Cd=d(),wo=a("h2"),ba=a("a"),Jl=a("span"),w(Vn.$$.fragment),bg=d(),Zl=a("span"),wg=r("Wav2Vec2ForAudioFrameClassification"),Ed=d(),ce=a("div"),w(Fn.$$.fragment),yg=d(),Ql=a("p"),kg=r("Wav2Vec2 Model with a frame classification head on top for tasks like Speaker Diarization."),Tg=d(),Cn=a("p"),$g=r("Wav2Vec2 was proposed in "),En=a("a"),xg=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Wg=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),jg=d(),qn=a("p"),Vg=r("This model inherits from "),ki=a("a"),Fg=r("PreTrainedModel"),Cg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Eg=d(),Pn=a("p"),qg=r("This model is a PyTorch "),zn=a("a"),Pg=r("torch.nn.Module"),zg=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Mg=d(),nt=a("div"),w(Mn.$$.fragment),Ag=d(),yo=a("p"),Og=r("The "),Ti=a("a"),Lg=r("Wav2Vec2ForAudioFrameClassification"),Dg=r(" forward method, overrides the "),Yl=a("code"),Sg=r("__call__"),Ng=r(" special method."),Ig=d(),w(wa.$$.fragment),Bg=d(),w(ya.$$.fragment),qd=d(),ko=a("h2"),ka=a("a"),ec=a("span"),w(An.$$.fragment),Ug=d(),tc=a("span"),Hg=r("Wav2Vec2ForXVector"),Pd=d(),de=a("div"),w(On.$$.fragment),Rg=d(),oc=a("p"),Xg=r("Wav2Vec2 Model with an XVector feature extraction head on top for tasks like Speaker Verification."),Kg=d(),Ln=a("p"),Gg=r("Wav2Vec2 was proposed in "),Dn=a("a"),Jg=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Zg=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Qg=d(),Sn=a("p"),Yg=r("This model inherits from "),$i=a("a"),e_=r("PreTrainedModel"),t_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),o_=d(),Nn=a("p"),a_=r("This model is a PyTorch "),In=a("a"),s_=r("torch.nn.Module"),n_=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),r_=d(),rt=a("div"),w(Bn.$$.fragment),i_=d(),To=a("p"),l_=r("The "),xi=a("a"),c_=r("Wav2Vec2ForXVector"),d_=r(" forward method, overrides the "),ac=a("code"),p_=r("__call__"),m_=r(" special method."),h_=d(),w(Ta.$$.fragment),f_=d(),w($a.$$.fragment),zd=d(),$o=a("h2"),xa=a("a"),sc=a("span"),w(Un.$$.fragment),u_=d(),nc=a("span"),g_=r("Wav2Vec2ForPreTraining"),Md=d(),Pe=a("div"),w(Hn.$$.fragment),__=d(),xo=a("p"),v_=r("Wav2Vec2 Model with a quantizer and "),rc=a("code"),b_=r("VQ"),w_=r(` head on top.
Wav2Vec2 was proposed in `),Rn=a("a"),y_=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),k_=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),T_=d(),Xn=a("p"),$_=r("This model inherits from "),Wi=a("a"),x_=r("PreTrainedModel"),W_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),j_=d(),Kn=a("p"),V_=r("This model is a PyTorch "),Gn=a("a"),F_=r("torch.nn.Module"),C_=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),E_=d(),it=a("div"),w(Jn.$$.fragment),q_=d(),Wo=a("p"),P_=r("The "),ji=a("a"),z_=r("Wav2Vec2ForPreTraining"),M_=r(" forward method, overrides the "),ic=a("code"),A_=r("__call__"),O_=r(" special method."),L_=d(),w(Wa.$$.fragment),D_=d(),w(ja.$$.fragment),Ad=d(),jo=a("h2"),Va=a("a"),lc=a("span"),w(Zn.$$.fragment),S_=d(),cc=a("span"),N_=r("TFWav2Vec2Model"),Od=d(),pe=a("div"),w(Qn.$$.fragment),I_=d(),dc=a("p"),B_=r("The bare TFWav2Vec2 Model transformer outputing raw hidden-states without any specific head on top."),U_=d(),Yn=a("p"),H_=r("This model inherits from "),Vi=a("a"),R_=r("TFPreTrainedModel"),X_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),K_=d(),er=a("p"),G_=r("This model is also a "),tr=a("a"),J_=r("tf.keras.Model"),Z_=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Q_=d(),w(Fa.$$.fragment),Y_=d(),lt=a("div"),w(or.$$.fragment),e2=d(),Vo=a("p"),t2=r("The "),Fi=a("a"),o2=r("TFWav2Vec2Model"),a2=r(" forward method, overrides the "),pc=a("code"),s2=r("__call__"),n2=r(" special method."),r2=d(),w(Ca.$$.fragment),i2=d(),w(Ea.$$.fragment),Ld=d(),Fo=a("h2"),qa=a("a"),mc=a("span"),w(ar.$$.fragment),l2=d(),hc=a("span"),c2=r("TFWav2Vec2ForCTC"),Dd=d(),me=a("div"),w(sr.$$.fragment),d2=d(),nr=a("p"),p2=r("TFWav2Vec2 Model with a "),fc=a("code"),m2=r("language modeling"),h2=r(" head on top for Connectionist Temporal Classification (CTC)."),f2=d(),rr=a("p"),u2=r("This model inherits from "),Ci=a("a"),g2=r("TFPreTrainedModel"),_2=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),v2=d(),ir=a("p"),b2=r("This model is also a "),lr=a("a"),w2=r("tf.keras.Model"),y2=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),k2=d(),w(Pa.$$.fragment),T2=d(),ct=a("div"),w(cr.$$.fragment),$2=d(),Co=a("p"),x2=r("The "),Ei=a("a"),W2=r("TFWav2Vec2ForCTC"),j2=r(" forward method, overrides the "),uc=a("code"),V2=r("__call__"),F2=r(" special method."),C2=d(),w(za.$$.fragment),E2=d(),w(Ma.$$.fragment),Sd=d(),Eo=a("h2"),Aa=a("a"),gc=a("span"),w(dr.$$.fragment),q2=d(),_c=a("span"),P2=r("FlaxWav2Vec2Model"),Nd=d(),Y=a("div"),w(pr.$$.fragment),z2=d(),mr=a("p"),M2=r(`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),hr=a("a"),A2=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),O2=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),L2=d(),fr=a("p"),D2=r("This model inherits from "),qi=a("a"),S2=r("FlaxPreTrainedModel"),N2=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),I2=d(),ur=a("p"),B2=r(`This model is also a Flax Linen
`),gr=a("a"),U2=r("flax.nn.Module"),H2=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),R2=d(),vc=a("p"),X2=r("Finally, this model supports inherent JAX features such as:"),K2=d(),zt=a("ul"),bc=a("li"),_r=a("a"),G2=r("Just-In-Time (JIT) compilation"),J2=d(),wc=a("li"),vr=a("a"),Z2=r("Automatic Differentiation"),Q2=d(),yc=a("li"),br=a("a"),Y2=r("Vectorization"),ev=d(),kc=a("li"),wr=a("a"),tv=r("Parallelization"),ov=d(),dt=a("div"),w(yr.$$.fragment),av=d(),qo=a("p"),sv=r("The "),Tc=a("code"),nv=r("FlaxWav2Vec2PreTrainedModel"),rv=r(" forward method, overrides the "),$c=a("code"),iv=r("__call__"),lv=r(" special method."),cv=d(),w(Oa.$$.fragment),dv=d(),w(La.$$.fragment),Id=d(),Po=a("h2"),Da=a("a"),xc=a("span"),w(kr.$$.fragment),pv=d(),Wc=a("span"),mv=r("FlaxWav2Vec2ForCTC"),Bd=d(),ee=a("div"),w(Tr.$$.fragment),hv=d(),zo=a("p"),fv=r("Wav2Vec2 Model with a "),jc=a("code"),uv=r("language modeling"),gv=r(` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),$r=a("a"),_v=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),vv=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),bv=d(),xr=a("p"),wv=r("This model inherits from "),Pi=a("a"),yv=r("FlaxPreTrainedModel"),kv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tv=d(),Wr=a("p"),$v=r(`This model is also a Flax Linen
`),jr=a("a"),xv=r("flax.nn.Module"),Wv=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),jv=d(),Vc=a("p"),Vv=r("Finally, this model supports inherent JAX features such as:"),Fv=d(),Mt=a("ul"),Fc=a("li"),Vr=a("a"),Cv=r("Just-In-Time (JIT) compilation"),Ev=d(),Cc=a("li"),Fr=a("a"),qv=r("Automatic Differentiation"),Pv=d(),Ec=a("li"),Cr=a("a"),zv=r("Vectorization"),Mv=d(),qc=a("li"),Er=a("a"),Av=r("Parallelization"),Ov=d(),pt=a("div"),w(qr.$$.fragment),Lv=d(),Mo=a("p"),Dv=r("The "),Pc=a("code"),Sv=r("FlaxWav2Vec2PreTrainedModel"),Nv=r(" forward method, overrides the "),zc=a("code"),Iv=r("__call__"),Bv=r(" special method."),Uv=d(),w(Sa.$$.fragment),Hv=d(),w(Na.$$.fragment),Ud=d(),Ao=a("h2"),Ia=a("a"),Mc=a("span"),w(Pr.$$.fragment),Rv=d(),Ac=a("span"),Xv=r("FlaxWav2Vec2ForPreTraining"),Hd=d(),te=a("div"),w(zr.$$.fragment),Kv=d(),Oo=a("p"),Gv=r("Wav2Vec2 Model with a quantizer and "),Oc=a("code"),Jv=r("VQ"),Zv=r(` head on top.
Wav2Vec2 was proposed in `),Mr=a("a"),Qv=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Yv=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),eb=d(),Ar=a("p"),tb=r("This model inherits from "),zi=a("a"),ob=r("FlaxPreTrainedModel"),ab=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sb=d(),Or=a("p"),nb=r(`This model is also a Flax Linen
`),Lr=a("a"),rb=r("flax.nn.Module"),ib=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),lb=d(),Lc=a("p"),cb=r("Finally, this model supports inherent JAX features such as:"),db=d(),At=a("ul"),Dc=a("li"),Dr=a("a"),pb=r("Just-In-Time (JIT) compilation"),mb=d(),Sc=a("li"),Sr=a("a"),hb=r("Automatic Differentiation"),fb=d(),Nc=a("li"),Nr=a("a"),ub=r("Vectorization"),gb=d(),Ic=a("li"),Ir=a("a"),_b=r("Parallelization"),vb=d(),mt=a("div"),w(Br.$$.fragment),bb=d(),Lo=a("p"),wb=r("The "),Mi=a("a"),yb=r("FlaxWav2Vec2ForPreTraining"),kb=r(" forward method, overrides the "),Bc=a("code"),Tb=r("__call__"),$b=r(" special method."),xb=d(),w(Ba.$$.fragment),Wb=d(),w(Ua.$$.fragment),this.h()},l(o){const g=ek('[data-svelte="svelte-1phssyn"]',document.head);c=s(g,"META",{name:!0,content:!0}),g.forEach(t),b=p(o),f=s(o,"H1",{class:!0});var Ur=n(f);u=s(Ur,"A",{id:!0,class:!0,href:!0});var Uc=n(u);v=s(Uc,"SPAN",{});var Hc=n(v);y(l.$$.fragment,Hc),Hc.forEach(t),Uc.forEach(t),h=p(Ur),V=s(Ur,"SPAN",{});var Rc=n(V);S=i(Rc,"Wav2Vec2"),Rc.forEach(t),Ur.forEach(t),A=p(o),z=s(o,"H2",{class:!0});var Hr=n(z);L=s(Hr,"A",{id:!0,class:!0,href:!0});var Xc=n(L);H=s(Xc,"SPAN",{});var Kc=n(H);y(C.$$.fragment,Kc),Kc.forEach(t),Xc.forEach(t),N=p(Hr),q=s(Hr,"SPAN",{});var Gc=n(q);ze=i(Gc,"Overview"),Gc.forEach(t),Hr.forEach(t),we=p(o),I=s(o,"P",{});var Rr=n(I);Me=i(Rr,"The Wav2Vec2 model was proposed in "),ye=s(Rr,"A",{href:!0,rel:!0});var Jc=n(ye);ke=i(Jc,"wav2vec 2.0: A Framework for Self-Supervised Learning of Speech Representations"),Jc.forEach(t),vt=i(Rr," by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael Auli."),Rr.forEach(t),Ke=p(o),ae=s(o,"P",{});var Zc=n(ae);bt=i(Zc,"The abstract from the paper is the following:"),Zc.forEach(t),Ge=p(o),se=s(o,"P",{});var Qc=n(se);Ue=s(Qc,"EM",{});var Yc=n(Ue);wt=i(Yc,`We show for the first time that learning powerful representations from speech audio alone followed by fine-tuning on
transcribed speech can outperform the best semi-supervised methods while being conceptually simpler. wav2vec 2.0 masks
the speech input in the latent space and solves a contrastive task defined over a quantization of the latent
representations which are jointly learned. Experiments using all labeled data of Librispeech achieve 1.8/3.3 WER on the
clean/other test sets. When lowering the amount of labeled data to one hour, wav2vec 2.0 outperforms the previous state
of the art on the 100 hour subset while using 100 times less labeled data. Using just ten minutes of labeled data and
pre-training on 53k hours of unlabeled data still achieves 4.8/8.2 WER. This demonstrates the feasibility of speech
recognition with limited amounts of labeled data.`),Yc.forEach(t),Qc.forEach(t),Ae=p(o),M=s(o,"P",{});var ed=n(M);R=i(ed,"Tips:"),ed.forEach(t),Je=p(o),J=s(o,"UL",{});var Xr=n(J);He=s(Xr,"LI",{});var td=n(He);yt=i(td,"Wav2Vec2 is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),td.forEach(t),Te=p(Xr),$e=s(Xr,"LI",{});var Kr=n($e);kt=i(Kr,`Wav2Vec2 model was trained using connectionist temporal classification (CTC) so the model output has to be decoded
using `),D=s(Kr,"A",{href:!0});var od=n(D);Tt=i(od,"Wav2Vec2CTCTokenizer"),od.forEach(t),xe=i(Kr,"."),Kr.forEach(t),Xr.forEach(t),Ze=p(o),he=s(o,"P",{});var Gr=n(he);We=i(Gr,"This model was contributed by "),je=s(Gr,"A",{href:!0,rel:!0});var ad=n(je);$t=i(ad,"patrickvonplaten"),ad.forEach(t),ie=i(Gr,"."),Gr.forEach(t),Qe=p(o),X=s(o,"H2",{class:!0});var Jr=n(X);fe=s(Jr,"A",{id:!0,class:!0,href:!0});var sd=n(fe);Ve=s(sd,"SPAN",{});var nd=n(Ve);y(O.$$.fragment,nd),nd.forEach(t),sd.forEach(t),xt=p(Jr),K=s(Jr,"SPAN",{});var rd=n(K);Wt=i(rd,"Wav2Vec2Config"),rd.forEach(t),Jr.forEach(t),Ye=p(o),W=s(o,"DIV",{class:!0});var Ot=n(W);y(E.$$.fragment,Ot),Gt=p(Ot),Z=s(Ot,"P",{});var Do=n(Z);Jt=i(Do,"This is the configuration class to store the configuration of a "),et=s(Do,"A",{href:!0});var id=n(et);P=i(id,"Wav2Vec2Model"),id.forEach(t),Zt=i(Do,`. It is used to instantiate an
Wav2Vec2 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Wav2Vec2
`),Re=s(Do,"A",{href:!0,rel:!0});var ld=n(Re);Qt=i(ld,"facebook/wav2vec2-base-960h"),ld.forEach(t),Yt=i(Do," architecture."),Do.forEach(t),eo=p(Ot),B=s(Ot,"P",{});var So=n(B);Fe=i(So,"Configuration objects inherit from "),tt=s(So,"A",{href:!0});var cd=n(tt);to=i(cd,"PretrainedConfig"),cd.forEach(t),Ce=i(So,` and can be used to control the model outputs. Read the
documentation from `),ot=s(So,"A",{href:!0});var dd=n(ot);oo=i(dd,"PretrainedConfig"),dd.forEach(t),jt=i(So," for more information."),So.forEach(t),ao=p(Ot),y(ne.$$.fragment,Ot),Ot.forEach(t),Dt=p(o),so=s(o,"H2",{class:!0});var Zr=n(so);No=s(Zr,"A",{id:!0,class:!0,href:!0});var qb=n(No);al=s(qb,"SPAN",{});var Pb=n(al);y(cs.$$.fragment,Pb),Pb.forEach(t),qb.forEach(t),im=p(Zr),sl=s(Zr,"SPAN",{});var zb=n(sl);lm=i(zb,"Wav2Vec2CTCTokenizer"),zb.forEach(t),Zr.forEach(t),pd=p(o),Q=s(o,"DIV",{class:!0});var Se=n(Q);y(ds.$$.fragment,Se),cm=p(Se),nl=s(Se,"P",{});var Mb=n(nl);dm=i(Mb,"Constructs a Wav2Vec2CTC tokenizer."),Mb.forEach(t),pm=p(Se),ps=s(Se,"P",{});var Xd=n(ps);mm=i(Xd,"This tokenizer inherits from "),Qr=s(Xd,"A",{href:!0});var Ab=n(Qr);hm=i(Ab,"PreTrainedTokenizer"),Ab.forEach(t),fm=i(Xd,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),Xd.forEach(t),um=p(Se),Io=s(Se,"DIV",{class:!0});var Kd=n(Io);y(ms.$$.fragment,Kd),gm=p(Kd),rl=s(Kd,"P",{});var Ob=n(rl);_m=i(Ob,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),Ob.forEach(t),Kd.forEach(t),vm=p(Se),Yr=s(Se,"DIV",{class:!0});var Lb=n(Yr);y(hs.$$.fragment,Lb),Lb.forEach(t),bm=p(Se),at=s(Se,"DIV",{class:!0});var Ha=n(at);y(fs.$$.fragment,Ha),wm=p(Ha),il=s(Ha,"P",{});var Db=n(il);ym=i(Db,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),Db.forEach(t),km=p(Ha),us=s(Ha,"P",{});var Gd=n(us);Tm=i(Gd,"Similar to doing "),ll=s(Gd,"CODE",{});var Sb=n(ll);$m=i(Sb,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Sb.forEach(t),xm=i(Gd,"."),Gd.forEach(t),Wm=p(Ha),y(Bo.$$.fragment,Ha),Ha.forEach(t),jm=p(Se),Uo=s(Se,"DIV",{class:!0});var Jd=n(Uo);y(gs.$$.fragment,Jd),Vm=p(Jd),cl=s(Jd,"P",{});var Nb=n(cl);Fm=i(Nb,"Convert a list of lists of token ids into a list of strings by calling decode."),Nb.forEach(t),Jd.forEach(t),Se.forEach(t),md=p(o),no=s(o,"H2",{class:!0});var Zd=n(no);Ho=s(Zd,"A",{id:!0,class:!0,href:!0});var Ib=n(Ho);dl=s(Ib,"SPAN",{});var Bb=n(dl);y(_s.$$.fragment,Bb),Bb.forEach(t),Ib.forEach(t),Cm=p(Zd),pl=s(Zd,"SPAN",{});var Ub=n(pl);Em=i(Ub,"Wav2Vec2FeatureExtractor"),Ub.forEach(t),Zd.forEach(t),hd=p(o),Xe=s(o,"DIV",{class:!0});var Ra=n(Xe);y(vs.$$.fragment,Ra),qm=p(Ra),ml=s(Ra,"P",{});var Hb=n(ml);Pm=i(Hb,"Constructs a Wav2Vec2 feature extractor."),Hb.forEach(t),zm=p(Ra),bs=s(Ra,"P",{});var Qd=n(bs);Mm=i(Qd,"This feature extractor inherits from "),ei=s(Qd,"A",{href:!0});var Rb=n(ei);Am=i(Rb,"SequenceFeatureExtractor"),Rb.forEach(t),Om=i(Qd,` which contains
most of the main methods. Users should refer to this superclass for more information regarding those methods.`),Qd.forEach(t),Lm=p(Ra),Ro=s(Ra,"DIV",{class:!0});var Yd=n(Ro);y(ws.$$.fragment,Yd),Dm=p(Yd),hl=s(Yd,"P",{});var Xb=n(hl);Sm=i(Xb,"Main method to featurize and prepare for the model one or several sequence(s). sequences."),Xb.forEach(t),Yd.forEach(t),Ra.forEach(t),fd=p(o),ro=s(o,"H2",{class:!0});var ep=n(ro);Xo=s(ep,"A",{id:!0,class:!0,href:!0});var Kb=n(Xo);fl=s(Kb,"SPAN",{});var Gb=n(fl);y(ys.$$.fragment,Gb),Gb.forEach(t),Kb.forEach(t),Nm=p(ep),ul=s(ep,"SPAN",{});var Jb=n(ul);Im=i(Jb,"Wav2Vec2Processor"),Jb.forEach(t),ep.forEach(t),ud=p(o),U=s(o,"DIV",{class:!0});var re=n(U);y(ks.$$.fragment,re),Bm=p(re),gl=s(re,"P",{});var Zb=n(gl);Um=i(Zb,`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor and a Wav2Vec2 CTC tokenizer into a single
processor.`),Zb.forEach(t),Hm=p(re),Oe=s(re,"P",{});var Lt=n(Oe);ti=s(Lt,"A",{href:!0});var Qb=n(ti);Rm=i(Qb,"Wav2Vec2Processor"),Qb.forEach(t),Xm=i(Lt," offers all the functionalities of "),oi=s(Lt,"A",{href:!0});var Yb=n(oi);Km=i(Yb,"Wav2Vec2FeatureExtractor"),Yb.forEach(t),Gm=i(Lt," and "),ai=s(Lt,"A",{href:!0});var ew=n(ai);Jm=i(ew,"PreTrainedTokenizer"),ew.forEach(t),Zm=i(Lt,`.
See the docstring of `),Ts=s(Lt,"A",{href:!0});var jb=n(Ts);_l=s(jb,"STRONG",{});var tw=n(_l);Qm=i(tw,"call"),tw.forEach(t),Ym=i(jb,"()"),jb.forEach(t),eh=i(Lt," and "),si=s(Lt,"A",{href:!0});var ow=n(si);th=i(ow,"decode()"),ow.forEach(t),oh=i(Lt," for more information."),Lt.forEach(t),ah=p(re),Ko=s(re,"DIV",{class:!0});var tp=n(Ko);y($s.$$.fragment,tp),sh=p(tp),Vt=s(tp,"P",{});var Xa=n(Vt);nh=i(Xa,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),xs=s(Xa,"A",{href:!0});var Vb=n(xs);vl=s(Vb,"STRONG",{});var aw=n(vl);rh=i(aw,"call"),aw.forEach(t),ih=i(Vb,"()"),Vb.forEach(t),lh=i(Xa,` and returns its output. If used in the context
`),bl=s(Xa,"CODE",{});var sw=n(bl);ch=i(sw,"as_target_processor()"),sw.forEach(t),dh=i(Xa,` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),Ws=s(Xa,"A",{href:!0});var Fb=n(Ws);wl=s(Fb,"STRONG",{});var nw=n(wl);ph=i(nw,"call"),nw.forEach(t),mh=i(Fb,"()"),Fb.forEach(t),hh=i(Xa,". Please refer to the docstring of the above two methods for more information."),Xa.forEach(t),tp.forEach(t),fh=p(re),Go=s(re,"DIV",{class:!0});var op=n(Go);y(js.$$.fragment,op),uh=p(op),Ft=s(op,"P",{});var Ka=n(Ft);gh=i(Ka,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),ni=s(Ka,"A",{href:!0});var rw=n(ni);_h=i(rw,"pad()"),rw.forEach(t),vh=i(Ka,` and returns its output. If used in the context
`),yl=s(Ka,"CODE",{});var iw=n(yl);bh=i(iw,"as_target_processor()"),iw.forEach(t),wh=i(Ka,` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),ri=s(Ka,"A",{href:!0});var lw=n(ri);yh=i(lw,"pad()"),lw.forEach(t),kh=i(Ka,". Please refer to the docstring of the above two methods for more information."),Ka.forEach(t),op.forEach(t),Th=p(re),ii=s(re,"DIV",{class:!0});var cw=n(ii);y(Vs.$$.fragment,cw),cw.forEach(t),$h=p(re),St=s(re,"DIV",{class:!0});var Ai=n(St);y(Fs.$$.fragment,Ai),xh=p(Ai),Cs=s(Ai,"P",{});var ap=n(Cs);Wh=i(ap,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),li=s(ap,"A",{href:!0});var dw=n(li);jh=i(dw,"from_pretrained()"),dw.forEach(t),Vh=i(ap," method."),ap.forEach(t),Fh=p(Ai),y(Jo.$$.fragment,Ai),Ai.forEach(t),Ch=p(re),Zo=s(re,"DIV",{class:!0});var sp=n(Zo);y(Es.$$.fragment,sp),Eh=p(sp),qs=s(sp,"P",{});var np=n(qs);qh=i(np,"This method forwards all its arguments to PreTrainedTokenizer\u2019s "),ci=s(np,"A",{href:!0});var pw=n(ci);Ph=i(pw,"batch_decode()"),pw.forEach(t),zh=i(np,`. Please
refer to the docstring of this method for more information.`),np.forEach(t),sp.forEach(t),Mh=p(re),Qo=s(re,"DIV",{class:!0});var rp=n(Qo);y(Ps.$$.fragment,rp),Ah=p(rp),zs=s(rp,"P",{});var ip=n(zs);Oh=i(ip,"This method forwards all its arguments to PreTrainedTokenizer\u2019s "),di=s(ip,"A",{href:!0});var mw=n(di);Lh=i(mw,"decode()"),mw.forEach(t),Dh=i(ip,`. Please refer
to the docstring of this method for more information.`),ip.forEach(t),rp.forEach(t),re.forEach(t),gd=p(o),io=s(o,"H2",{class:!0});var lp=n(io);Yo=s(lp,"A",{id:!0,class:!0,href:!0});var hw=n(Yo);kl=s(hw,"SPAN",{});var fw=n(kl);y(Ms.$$.fragment,fw),fw.forEach(t),hw.forEach(t),Sh=p(lp),Tl=s(lp,"SPAN",{});var uw=n(Tl);Nh=i(uw,"Wav2Vec2ProcessorWithLM"),uw.forEach(t),lp.forEach(t),_d=p(o),G=s(o,"DIV",{class:!0});var ue=n(G);y(As.$$.fragment,ue),Ih=p(ue),$l=s(ue,"P",{});var gw=n($l);Bh=i(gw,`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor, a Wav2Vec2 CTC tokenizer and a decoder
with language model support into a single processor for language model boosted speech recognition decoding.`),gw.forEach(t),Uh=p(ue),ea=s(ue,"DIV",{class:!0});var cp=n(ea);y(Os.$$.fragment,cp),Hh=p(cp),Ct=s(cp,"P",{});var Ga=n(Ct);Rh=i(Ga,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),Ls=s(Ga,"A",{href:!0});var Cb=n(Ls);xl=s(Cb,"STRONG",{});var _w=n(xl);Xh=i(_w,"call"),_w.forEach(t),Kh=i(Cb,"()"),Cb.forEach(t),Gh=i(Ga,` and returns its output. If used in the context
`),Wl=s(Ga,"CODE",{});var vw=n(Wl);Jh=i(vw,"as_target_processor()"),vw.forEach(t),Zh=i(Ga,` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),Ds=s(Ga,"A",{href:!0});var Eb=n(Ds);jl=s(Eb,"STRONG",{});var bw=n(jl);Qh=i(bw,"call"),bw.forEach(t),Yh=i(Eb,"()"),Eb.forEach(t),ef=i(Ga,`. Please refer to the docstring of the above two
methods for more information.`),Ga.forEach(t),cp.forEach(t),tf=p(ue),ta=s(ue,"DIV",{class:!0});var dp=n(ta);y(Ss.$$.fragment,dp),of=p(dp),Et=s(dp,"P",{});var Ja=n(Et);af=i(Ja,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),pi=s(Ja,"A",{href:!0});var ww=n(pi);sf=i(ww,"pad()"),ww.forEach(t),nf=i(Ja,` and returns its output. If used in the context
`),Vl=s(Ja,"CODE",{});var yw=n(Vl);rf=i(yw,"as_target_processor()"),yw.forEach(t),lf=i(Ja,` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),mi=s(Ja,"A",{href:!0});var kw=n(mi);cf=i(kw,"pad()"),kw.forEach(t),df=i(Ja,`. Please refer to the docstring of the above two methods
for more information.`),Ja.forEach(t),dp.forEach(t),pf=p(ue),Nt=s(ue,"DIV",{class:!0});var Oi=n(Nt);y(Ns.$$.fragment,Oi),mf=p(Oi),Is=s(Oi,"P",{});var pp=n(Is);hf=i(pp,"Instantiate a "),hi=s(pp,"A",{href:!0});var Tw=n(hi);ff=i(Tw,"Wav2Vec2ProcessorWithLM"),Tw.forEach(t),uf=i(pp," from a pretrained Wav2Vec2 processor."),pp.forEach(t),gf=p(Oi),y(oa.$$.fragment,Oi),Oi.forEach(t),_f=p(ue),fi=s(ue,"DIV",{class:!0});var $w=n(fi);y(Bs.$$.fragment,$w),$w.forEach(t),vf=p(ue),It=s(ue,"DIV",{class:!0});var Li=n(It);y(Us.$$.fragment,Li),bf=p(Li),Fl=s(Li,"P",{});var xw=n(Fl);wf=i(xw,"Batch decode output logits to audio transcription with language model support."),xw.forEach(t),yf=p(Li),y(aa.$$.fragment,Li),Li.forEach(t),kf=p(ue),Bt=s(ue,"DIV",{class:!0});var Di=n(Bt);y(Hs.$$.fragment,Di),Tf=p(Di),Cl=s(Di,"P",{});var Ww=n(Cl);$f=i(Ww,"Decode output logits to audio transcription with language model support."),Ww.forEach(t),xf=p(Di),y(sa.$$.fragment,Di),Di.forEach(t),ue.forEach(t),vd=p(o),lo=s(o,"H2",{class:!0});var mp=n(lo);na=s(mp,"A",{id:!0,class:!0,href:!0});var jw=n(na);El=s(jw,"SPAN",{});var Vw=n(El);y(Rs.$$.fragment,Vw),Vw.forEach(t),jw.forEach(t),Wf=p(mp),ql=s(mp,"SPAN",{});var Fw=n(ql);jf=i(Fw,"Wav2Vec2 specific outputs"),Fw.forEach(t),mp.forEach(t),bd=p(o),co=s(o,"DIV",{class:!0});var hp=n(co);y(Xs.$$.fragment,hp),Vf=p(hp),Ks=s(hp,"P",{});var fp=n(Ks);Ff=i(fp,"Output type of "),Pl=s(fp,"CODE",{});var Cw=n(Pl);Cf=i(Cw,"Wav2Vec2DecoderWithLM"),Cw.forEach(t),Ef=i(fp,", with transcription."),fp.forEach(t),hp.forEach(t),wd=p(o),po=s(o,"DIV",{class:!0});var up=n(po);y(Gs.$$.fragment,up),qf=p(up),zl=s(up,"P",{});var Ew=n(zl);Pf=i(Ew,"Base class for models that have been trained with the Wav2Vec2 loss objective."),Ew.forEach(t),up.forEach(t),yd=p(o),mo=s(o,"DIV",{class:!0});var gp=n(mo);y(Js.$$.fragment,gp),zf=p(gp),Zs=s(gp,"P",{});var _p=n(Zs);Mf=i(_p,"Output type of "),ui=s(_p,"A",{href:!0});var qw=n(ui);Af=i(qw,"Wav2Vec2ForPreTraining"),qw.forEach(t),Of=i(_p,", with potential hidden states and attentions."),_p.forEach(t),gp.forEach(t),kd=p(o),qt=s(o,"DIV",{class:!0});var Si=n(qt);y(Qs.$$.fragment,Si),Lf=p(Si),Ys=s(Si,"P",{});var vp=n(Ys);Df=i(vp,"Output type of "),Ml=s(vp,"CODE",{});var Pw=n(Ml);Sf=i(Pw,"FlaxWav2Vec2BaseModelOutput"),Pw.forEach(t),Nf=i(vp,", with potential hidden states and attentions."),vp.forEach(t),If=p(Si),ra=s(Si,"DIV",{class:!0});var bp=n(ra);y(en.$$.fragment,bp),Bf=p(bp),Al=s(bp,"P",{});var zw=n(Al);Uf=i(zw,"\u201CReturns a new object replacing the specified fields with new values."),zw.forEach(t),bp.forEach(t),Si.forEach(t),Td=p(o),Pt=s(o,"DIV",{class:!0});var Ni=n(Pt);y(tn.$$.fragment,Ni),Hf=p(Ni),on=s(Ni,"P",{});var wp=n(on);Rf=i(wp,"Output type of "),Ol=s(wp,"CODE",{});var Mw=n(Ol);Xf=i(Mw,"FlaxWav2Vec2ForPreTrainingOutput"),Mw.forEach(t),Kf=i(wp,", with potential hidden states and attentions."),wp.forEach(t),Gf=p(Ni),ia=s(Ni,"DIV",{class:!0});var yp=n(ia);y(an.$$.fragment,yp),Jf=p(yp),Ll=s(yp,"P",{});var Aw=n(Ll);Zf=i(Aw,"\u201CReturns a new object replacing the specified fields with new values."),Aw.forEach(t),yp.forEach(t),Ni.forEach(t),$d=p(o),ho=s(o,"H2",{class:!0});var kp=n(ho);la=s(kp,"A",{id:!0,class:!0,href:!0});var Ow=n(la);Dl=s(Ow,"SPAN",{});var Lw=n(Dl);y(sn.$$.fragment,Lw),Lw.forEach(t),Ow.forEach(t),Qf=p(kp),Sl=s(kp,"SPAN",{});var Dw=n(Sl);Yf=i(Dw,"Wav2Vec2Model"),Dw.forEach(t),kp.forEach(t),xd=p(o),Ee=s(o,"DIV",{class:!0});var Ut=n(Ee);y(nn.$$.fragment,Ut),eu=p(Ut),rn=s(Ut,"P",{});var Tp=n(rn);tu=i(Tp,`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),ln=s(Tp,"A",{href:!0,rel:!0});var Sw=n(ln);ou=i(Sw,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Sw.forEach(t),au=i(Tp,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Tp.forEach(t),su=p(Ut),cn=s(Ut,"P",{});var $p=n(cn);nu=i($p,"This model inherits from "),gi=s($p,"A",{href:!0});var Nw=n(gi);ru=i(Nw,"PreTrainedModel"),Nw.forEach(t),iu=i($p,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),$p.forEach(t),lu=p(Ut),dn=s(Ut,"P",{});var xp=n(dn);cu=i(xp,"This model is a PyTorch "),pn=s(xp,"A",{href:!0,rel:!0});var Iw=n(pn);du=i(Iw,"torch.nn.Module"),Iw.forEach(t),pu=i(xp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xp.forEach(t),mu=p(Ut),st=s(Ut,"DIV",{class:!0});var Za=n(st);y(mn.$$.fragment,Za),hu=p(Za),fo=s(Za,"P",{});var Ii=n(fo);fu=i(Ii,"The "),_i=s(Ii,"A",{href:!0});var Bw=n(_i);uu=i(Bw,"Wav2Vec2Model"),Bw.forEach(t),gu=i(Ii," forward method, overrides the "),Nl=s(Ii,"CODE",{});var Uw=n(Nl);_u=i(Uw,"__call__"),Uw.forEach(t),vu=i(Ii," special method."),Ii.forEach(t),bu=p(Za),y(ca.$$.fragment,Za),wu=p(Za),y(da.$$.fragment,Za),Za.forEach(t),Ut.forEach(t),Wd=p(o),uo=s(o,"H2",{class:!0});var Wp=n(uo);pa=s(Wp,"A",{id:!0,class:!0,href:!0});var Hw=n(pa);Il=s(Hw,"SPAN",{});var Rw=n(Il);y(hn.$$.fragment,Rw),Rw.forEach(t),Hw.forEach(t),yu=p(Wp),Bl=s(Wp,"SPAN",{});var Xw=n(Bl);ku=i(Xw,"Wav2Vec2ForCTC"),Xw.forEach(t),Wp.forEach(t),jd=p(o),qe=s(o,"DIV",{class:!0});var Ht=n(qe);y(fn.$$.fragment,Ht),Tu=p(Ht),go=s(Ht,"P",{});var Bi=n(go);$u=i(Bi,"Wav2Vec2 Model with a "),Ul=s(Bi,"CODE",{});var Kw=n(Ul);xu=i(Kw,"language modeling"),Kw.forEach(t),Wu=i(Bi,` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),un=s(Bi,"A",{href:!0,rel:!0});var Gw=n(un);ju=i(Gw,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Gw.forEach(t),Vu=i(Bi,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Bi.forEach(t),Fu=p(Ht),gn=s(Ht,"P",{});var jp=n(gn);Cu=i(jp,"This model inherits from "),vi=s(jp,"A",{href:!0});var Jw=n(vi);Eu=i(Jw,"PreTrainedModel"),Jw.forEach(t),qu=i(jp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),jp.forEach(t),Pu=p(Ht),_n=s(Ht,"P",{});var Vp=n(_n);zu=i(Vp,"This model is a PyTorch "),vn=s(Vp,"A",{href:!0,rel:!0});var Zw=n(vn);Mu=i(Zw,"torch.nn.Module"),Zw.forEach(t),Au=i(Vp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vp.forEach(t),Ou=p(Ht),Le=s(Ht,"DIV",{class:!0});var Rt=n(Le);y(bn.$$.fragment,Rt),Lu=p(Rt),_o=s(Rt,"P",{});var Ui=n(_o);Du=i(Ui,"The "),bi=s(Ui,"A",{href:!0});var Qw=n(bi);Su=i(Qw,"Wav2Vec2ForCTC"),Qw.forEach(t),Nu=i(Ui," forward method, overrides the "),Hl=s(Ui,"CODE",{});var Yw=n(Hl);Iu=i(Yw,"__call__"),Yw.forEach(t),Bu=i(Ui," special method."),Ui.forEach(t),Uu=p(Rt),y(ma.$$.fragment,Rt),Hu=p(Rt),y(ha.$$.fragment,Rt),Ru=p(Rt),y(fa.$$.fragment,Rt),Rt.forEach(t),Ht.forEach(t),Vd=p(o),vo=s(o,"H2",{class:!0});var Fp=n(vo);ua=s(Fp,"A",{id:!0,class:!0,href:!0});var ey=n(ua);Rl=s(ey,"SPAN",{});var ty=n(Rl);y(wn.$$.fragment,ty),ty.forEach(t),ey.forEach(t),Xu=p(Fp),Xl=s(Fp,"SPAN",{});var oy=n(Xl);Ku=i(oy,"Wav2Vec2ForSequenceClassification"),oy.forEach(t),Fp.forEach(t),Fd=p(o),le=s(o,"DIV",{class:!0});var ht=n(le);y(yn.$$.fragment,ht),Gu=p(ht),Kl=s(ht,"P",{});var ay=n(Kl);Ju=i(ay,`Wav2Vec2 Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),ay.forEach(t),Zu=p(ht),kn=s(ht,"P",{});var Cp=n(kn);Qu=i(Cp,"Wav2Vec2 was proposed in "),Tn=s(Cp,"A",{href:!0,rel:!0});var sy=n(Tn);Yu=i(sy,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),sy.forEach(t),eg=i(Cp,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Cp.forEach(t),tg=p(ht),$n=s(ht,"P",{});var Ep=n($n);og=i(Ep,"This model inherits from "),wi=s(Ep,"A",{href:!0});var ny=n(wi);ag=i(ny,"PreTrainedModel"),ny.forEach(t),sg=i(Ep,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ep.forEach(t),ng=p(ht),xn=s(ht,"P",{});var qp=n(xn);rg=i(qp,"This model is a PyTorch "),Wn=s(qp,"A",{href:!0,rel:!0});var ry=n(Wn);ig=i(ry,"torch.nn.Module"),ry.forEach(t),lg=i(qp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),qp.forEach(t),cg=p(ht),De=s(ht,"DIV",{class:!0});var Xt=n(De);y(jn.$$.fragment,Xt),dg=p(Xt),bo=s(Xt,"P",{});var Hi=n(bo);pg=i(Hi,"The "),yi=s(Hi,"A",{href:!0});var iy=n(yi);mg=i(iy,"Wav2Vec2ForSequenceClassification"),iy.forEach(t),hg=i(Hi," forward method, overrides the "),Gl=s(Hi,"CODE",{});var ly=n(Gl);fg=i(ly,"__call__"),ly.forEach(t),ug=i(Hi," special method."),Hi.forEach(t),gg=p(Xt),y(ga.$$.fragment,Xt),_g=p(Xt),y(_a.$$.fragment,Xt),vg=p(Xt),y(va.$$.fragment,Xt),Xt.forEach(t),ht.forEach(t),Cd=p(o),wo=s(o,"H2",{class:!0});var Pp=n(wo);ba=s(Pp,"A",{id:!0,class:!0,href:!0});var cy=n(ba);Jl=s(cy,"SPAN",{});var dy=n(Jl);y(Vn.$$.fragment,dy),dy.forEach(t),cy.forEach(t),bg=p(Pp),Zl=s(Pp,"SPAN",{});var py=n(Zl);wg=i(py,"Wav2Vec2ForAudioFrameClassification"),py.forEach(t),Pp.forEach(t),Ed=p(o),ce=s(o,"DIV",{class:!0});var ft=n(ce);y(Fn.$$.fragment,ft),yg=p(ft),Ql=s(ft,"P",{});var my=n(Ql);kg=i(my,"Wav2Vec2 Model with a frame classification head on top for tasks like Speaker Diarization."),my.forEach(t),Tg=p(ft),Cn=s(ft,"P",{});var zp=n(Cn);$g=i(zp,"Wav2Vec2 was proposed in "),En=s(zp,"A",{href:!0,rel:!0});var hy=n(En);xg=i(hy,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),hy.forEach(t),Wg=i(zp,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),zp.forEach(t),jg=p(ft),qn=s(ft,"P",{});var Mp=n(qn);Vg=i(Mp,"This model inherits from "),ki=s(Mp,"A",{href:!0});var fy=n(ki);Fg=i(fy,"PreTrainedModel"),fy.forEach(t),Cg=i(Mp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Mp.forEach(t),Eg=p(ft),Pn=s(ft,"P",{});var Ap=n(Pn);qg=i(Ap,"This model is a PyTorch "),zn=s(Ap,"A",{href:!0,rel:!0});var uy=n(zn);Pg=i(uy,"torch.nn.Module"),uy.forEach(t),zg=i(Ap,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ap.forEach(t),Mg=p(ft),nt=s(ft,"DIV",{class:!0});var Qa=n(nt);y(Mn.$$.fragment,Qa),Ag=p(Qa),yo=s(Qa,"P",{});var Ri=n(yo);Og=i(Ri,"The "),Ti=s(Ri,"A",{href:!0});var gy=n(Ti);Lg=i(gy,"Wav2Vec2ForAudioFrameClassification"),gy.forEach(t),Dg=i(Ri," forward method, overrides the "),Yl=s(Ri,"CODE",{});var _y=n(Yl);Sg=i(_y,"__call__"),_y.forEach(t),Ng=i(Ri," special method."),Ri.forEach(t),Ig=p(Qa),y(wa.$$.fragment,Qa),Bg=p(Qa),y(ya.$$.fragment,Qa),Qa.forEach(t),ft.forEach(t),qd=p(o),ko=s(o,"H2",{class:!0});var Op=n(ko);ka=s(Op,"A",{id:!0,class:!0,href:!0});var vy=n(ka);ec=s(vy,"SPAN",{});var by=n(ec);y(An.$$.fragment,by),by.forEach(t),vy.forEach(t),Ug=p(Op),tc=s(Op,"SPAN",{});var wy=n(tc);Hg=i(wy,"Wav2Vec2ForXVector"),wy.forEach(t),Op.forEach(t),Pd=p(o),de=s(o,"DIV",{class:!0});var ut=n(de);y(On.$$.fragment,ut),Rg=p(ut),oc=s(ut,"P",{});var yy=n(oc);Xg=i(yy,"Wav2Vec2 Model with an XVector feature extraction head on top for tasks like Speaker Verification."),yy.forEach(t),Kg=p(ut),Ln=s(ut,"P",{});var Lp=n(Ln);Gg=i(Lp,"Wav2Vec2 was proposed in "),Dn=s(Lp,"A",{href:!0,rel:!0});var ky=n(Dn);Jg=i(ky,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),ky.forEach(t),Zg=i(Lp,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Lp.forEach(t),Qg=p(ut),Sn=s(ut,"P",{});var Dp=n(Sn);Yg=i(Dp,"This model inherits from "),$i=s(Dp,"A",{href:!0});var Ty=n($i);e_=i(Ty,"PreTrainedModel"),Ty.forEach(t),t_=i(Dp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Dp.forEach(t),o_=p(ut),Nn=s(ut,"P",{});var Sp=n(Nn);a_=i(Sp,"This model is a PyTorch "),In=s(Sp,"A",{href:!0,rel:!0});var $y=n(In);s_=i($y,"torch.nn.Module"),$y.forEach(t),n_=i(Sp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Sp.forEach(t),r_=p(ut),rt=s(ut,"DIV",{class:!0});var Ya=n(rt);y(Bn.$$.fragment,Ya),i_=p(Ya),To=s(Ya,"P",{});var Xi=n(To);l_=i(Xi,"The "),xi=s(Xi,"A",{href:!0});var xy=n(xi);c_=i(xy,"Wav2Vec2ForXVector"),xy.forEach(t),d_=i(Xi," forward method, overrides the "),ac=s(Xi,"CODE",{});var Wy=n(ac);p_=i(Wy,"__call__"),Wy.forEach(t),m_=i(Xi," special method."),Xi.forEach(t),h_=p(Ya),y(Ta.$$.fragment,Ya),f_=p(Ya),y($a.$$.fragment,Ya),Ya.forEach(t),ut.forEach(t),zd=p(o),$o=s(o,"H2",{class:!0});var Np=n($o);xa=s(Np,"A",{id:!0,class:!0,href:!0});var jy=n(xa);sc=s(jy,"SPAN",{});var Vy=n(sc);y(Un.$$.fragment,Vy),Vy.forEach(t),jy.forEach(t),u_=p(Np),nc=s(Np,"SPAN",{});var Fy=n(nc);g_=i(Fy,"Wav2Vec2ForPreTraining"),Fy.forEach(t),Np.forEach(t),Md=p(o),Pe=s(o,"DIV",{class:!0});var Kt=n(Pe);y(Hn.$$.fragment,Kt),__=p(Kt),xo=s(Kt,"P",{});var Ki=n(xo);v_=i(Ki,"Wav2Vec2 Model with a quantizer and "),rc=s(Ki,"CODE",{});var Cy=n(rc);b_=i(Cy,"VQ"),Cy.forEach(t),w_=i(Ki,` head on top.
Wav2Vec2 was proposed in `),Rn=s(Ki,"A",{href:!0,rel:!0});var Ey=n(Rn);y_=i(Ey,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Ey.forEach(t),k_=i(Ki,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Ki.forEach(t),T_=p(Kt),Xn=s(Kt,"P",{});var Ip=n(Xn);$_=i(Ip,"This model inherits from "),Wi=s(Ip,"A",{href:!0});var qy=n(Wi);x_=i(qy,"PreTrainedModel"),qy.forEach(t),W_=i(Ip,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ip.forEach(t),j_=p(Kt),Kn=s(Kt,"P",{});var Bp=n(Kn);V_=i(Bp,"This model is a PyTorch "),Gn=s(Bp,"A",{href:!0,rel:!0});var Py=n(Gn);F_=i(Py,"torch.nn.Module"),Py.forEach(t),C_=i(Bp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Bp.forEach(t),E_=p(Kt),it=s(Kt,"DIV",{class:!0});var es=n(it);y(Jn.$$.fragment,es),q_=p(es),Wo=s(es,"P",{});var Gi=n(Wo);P_=i(Gi,"The "),ji=s(Gi,"A",{href:!0});var zy=n(ji);z_=i(zy,"Wav2Vec2ForPreTraining"),zy.forEach(t),M_=i(Gi," forward method, overrides the "),ic=s(Gi,"CODE",{});var My=n(ic);A_=i(My,"__call__"),My.forEach(t),O_=i(Gi," special method."),Gi.forEach(t),L_=p(es),y(Wa.$$.fragment,es),D_=p(es),y(ja.$$.fragment,es),es.forEach(t),Kt.forEach(t),Ad=p(o),jo=s(o,"H2",{class:!0});var Up=n(jo);Va=s(Up,"A",{id:!0,class:!0,href:!0});var Ay=n(Va);lc=s(Ay,"SPAN",{});var Oy=n(lc);y(Zn.$$.fragment,Oy),Oy.forEach(t),Ay.forEach(t),S_=p(Up),cc=s(Up,"SPAN",{});var Ly=n(cc);N_=i(Ly,"TFWav2Vec2Model"),Ly.forEach(t),Up.forEach(t),Od=p(o),pe=s(o,"DIV",{class:!0});var gt=n(pe);y(Qn.$$.fragment,gt),I_=p(gt),dc=s(gt,"P",{});var Dy=n(dc);B_=i(Dy,"The bare TFWav2Vec2 Model transformer outputing raw hidden-states without any specific head on top."),Dy.forEach(t),U_=p(gt),Yn=s(gt,"P",{});var Hp=n(Yn);H_=i(Hp,"This model inherits from "),Vi=s(Hp,"A",{href:!0});var Sy=n(Vi);R_=i(Sy,"TFPreTrainedModel"),Sy.forEach(t),X_=i(Hp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hp.forEach(t),K_=p(gt),er=s(gt,"P",{});var Rp=n(er);G_=i(Rp,"This model is also a "),tr=s(Rp,"A",{href:!0,rel:!0});var Ny=n(tr);J_=i(Ny,"tf.keras.Model"),Ny.forEach(t),Z_=i(Rp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rp.forEach(t),Q_=p(gt),y(Fa.$$.fragment,gt),Y_=p(gt),lt=s(gt,"DIV",{class:!0});var ts=n(lt);y(or.$$.fragment,ts),e2=p(ts),Vo=s(ts,"P",{});var Ji=n(Vo);t2=i(Ji,"The "),Fi=s(Ji,"A",{href:!0});var Iy=n(Fi);o2=i(Iy,"TFWav2Vec2Model"),Iy.forEach(t),a2=i(Ji," forward method, overrides the "),pc=s(Ji,"CODE",{});var By=n(pc);s2=i(By,"__call__"),By.forEach(t),n2=i(Ji," special method."),Ji.forEach(t),r2=p(ts),y(Ca.$$.fragment,ts),i2=p(ts),y(Ea.$$.fragment,ts),ts.forEach(t),gt.forEach(t),Ld=p(o),Fo=s(o,"H2",{class:!0});var Xp=n(Fo);qa=s(Xp,"A",{id:!0,class:!0,href:!0});var Uy=n(qa);mc=s(Uy,"SPAN",{});var Hy=n(mc);y(ar.$$.fragment,Hy),Hy.forEach(t),Uy.forEach(t),l2=p(Xp),hc=s(Xp,"SPAN",{});var Ry=n(hc);c2=i(Ry,"TFWav2Vec2ForCTC"),Ry.forEach(t),Xp.forEach(t),Dd=p(o),me=s(o,"DIV",{class:!0});var _t=n(me);y(sr.$$.fragment,_t),d2=p(_t),nr=s(_t,"P",{});var Kp=n(nr);p2=i(Kp,"TFWav2Vec2 Model with a "),fc=s(Kp,"CODE",{});var Xy=n(fc);m2=i(Xy,"language modeling"),Xy.forEach(t),h2=i(Kp," head on top for Connectionist Temporal Classification (CTC)."),Kp.forEach(t),f2=p(_t),rr=s(_t,"P",{});var Gp=n(rr);u2=i(Gp,"This model inherits from "),Ci=s(Gp,"A",{href:!0});var Ky=n(Ci);g2=i(Ky,"TFPreTrainedModel"),Ky.forEach(t),_2=i(Gp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gp.forEach(t),v2=p(_t),ir=s(_t,"P",{});var Jp=n(ir);b2=i(Jp,"This model is also a "),lr=s(Jp,"A",{href:!0,rel:!0});var Gy=n(lr);w2=i(Gy,"tf.keras.Model"),Gy.forEach(t),y2=i(Jp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jp.forEach(t),k2=p(_t),y(Pa.$$.fragment,_t),T2=p(_t),ct=s(_t,"DIV",{class:!0});var os=n(ct);y(cr.$$.fragment,os),$2=p(os),Co=s(os,"P",{});var Zi=n(Co);x2=i(Zi,"The "),Ei=s(Zi,"A",{href:!0});var Jy=n(Ei);W2=i(Jy,"TFWav2Vec2ForCTC"),Jy.forEach(t),j2=i(Zi," forward method, overrides the "),uc=s(Zi,"CODE",{});var Zy=n(uc);V2=i(Zy,"__call__"),Zy.forEach(t),F2=i(Zi," special method."),Zi.forEach(t),C2=p(os),y(za.$$.fragment,os),E2=p(os),y(Ma.$$.fragment,os),os.forEach(t),_t.forEach(t),Sd=p(o),Eo=s(o,"H2",{class:!0});var Zp=n(Eo);Aa=s(Zp,"A",{id:!0,class:!0,href:!0});var Qy=n(Aa);gc=s(Qy,"SPAN",{});var Yy=n(gc);y(dr.$$.fragment,Yy),Yy.forEach(t),Qy.forEach(t),q2=p(Zp),_c=s(Zp,"SPAN",{});var e0=n(_c);P2=i(e0,"FlaxWav2Vec2Model"),e0.forEach(t),Zp.forEach(t),Nd=p(o),Y=s(o,"DIV",{class:!0});var Ne=n(Y);y(pr.$$.fragment,Ne),z2=p(Ne),mr=s(Ne,"P",{});var Qp=n(mr);M2=i(Qp,`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),hr=s(Qp,"A",{href:!0,rel:!0});var t0=n(hr);A2=i(t0,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),t0.forEach(t),O2=i(Qp,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Qp.forEach(t),L2=p(Ne),fr=s(Ne,"P",{});var Yp=n(fr);D2=i(Yp,"This model inherits from "),qi=s(Yp,"A",{href:!0});var o0=n(qi);S2=i(o0,"FlaxPreTrainedModel"),o0.forEach(t),N2=i(Yp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yp.forEach(t),I2=p(Ne),ur=s(Ne,"P",{});var em=n(ur);B2=i(em,`This model is also a Flax Linen
`),gr=s(em,"A",{href:!0,rel:!0});var a0=n(gr);U2=i(a0,"flax.nn.Module"),a0.forEach(t),H2=i(em,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),em.forEach(t),R2=p(Ne),vc=s(Ne,"P",{});var s0=n(vc);X2=i(s0,"Finally, this model supports inherent JAX features such as:"),s0.forEach(t),K2=p(Ne),zt=s(Ne,"UL",{});var as=n(zt);bc=s(as,"LI",{});var n0=n(bc);_r=s(n0,"A",{href:!0,rel:!0});var r0=n(_r);G2=i(r0,"Just-In-Time (JIT) compilation"),r0.forEach(t),n0.forEach(t),J2=p(as),wc=s(as,"LI",{});var i0=n(wc);vr=s(i0,"A",{href:!0,rel:!0});var l0=n(vr);Z2=i(l0,"Automatic Differentiation"),l0.forEach(t),i0.forEach(t),Q2=p(as),yc=s(as,"LI",{});var c0=n(yc);br=s(c0,"A",{href:!0,rel:!0});var d0=n(br);Y2=i(d0,"Vectorization"),d0.forEach(t),c0.forEach(t),ev=p(as),kc=s(as,"LI",{});var p0=n(kc);wr=s(p0,"A",{href:!0,rel:!0});var m0=n(wr);tv=i(m0,"Parallelization"),m0.forEach(t),p0.forEach(t),as.forEach(t),ov=p(Ne),dt=s(Ne,"DIV",{class:!0});var ss=n(dt);y(yr.$$.fragment,ss),av=p(ss),qo=s(ss,"P",{});var Qi=n(qo);sv=i(Qi,"The "),Tc=s(Qi,"CODE",{});var h0=n(Tc);nv=i(h0,"FlaxWav2Vec2PreTrainedModel"),h0.forEach(t),rv=i(Qi," forward method, overrides the "),$c=s(Qi,"CODE",{});var f0=n($c);iv=i(f0,"__call__"),f0.forEach(t),lv=i(Qi," special method."),Qi.forEach(t),cv=p(ss),y(Oa.$$.fragment,ss),dv=p(ss),y(La.$$.fragment,ss),ss.forEach(t),Ne.forEach(t),Id=p(o),Po=s(o,"H2",{class:!0});var tm=n(Po);Da=s(tm,"A",{id:!0,class:!0,href:!0});var u0=n(Da);xc=s(u0,"SPAN",{});var g0=n(xc);y(kr.$$.fragment,g0),g0.forEach(t),u0.forEach(t),pv=p(tm),Wc=s(tm,"SPAN",{});var _0=n(Wc);mv=i(_0,"FlaxWav2Vec2ForCTC"),_0.forEach(t),tm.forEach(t),Bd=p(o),ee=s(o,"DIV",{class:!0});var Ie=n(ee);y(Tr.$$.fragment,Ie),hv=p(Ie),zo=s(Ie,"P",{});var Yi=n(zo);fv=i(Yi,"Wav2Vec2 Model with a "),jc=s(Yi,"CODE",{});var v0=n(jc);uv=i(v0,"language modeling"),v0.forEach(t),gv=i(Yi,` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),$r=s(Yi,"A",{href:!0,rel:!0});var b0=n($r);_v=i(b0,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),b0.forEach(t),vv=i(Yi,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Yi.forEach(t),bv=p(Ie),xr=s(Ie,"P",{});var om=n(xr);wv=i(om,"This model inherits from "),Pi=s(om,"A",{href:!0});var w0=n(Pi);yv=i(w0,"FlaxPreTrainedModel"),w0.forEach(t),kv=i(om,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),om.forEach(t),Tv=p(Ie),Wr=s(Ie,"P",{});var am=n(Wr);$v=i(am,`This model is also a Flax Linen
`),jr=s(am,"A",{href:!0,rel:!0});var y0=n(jr);xv=i(y0,"flax.nn.Module"),y0.forEach(t),Wv=i(am,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),am.forEach(t),jv=p(Ie),Vc=s(Ie,"P",{});var k0=n(Vc);Vv=i(k0,"Finally, this model supports inherent JAX features such as:"),k0.forEach(t),Fv=p(Ie),Mt=s(Ie,"UL",{});var ns=n(Mt);Fc=s(ns,"LI",{});var T0=n(Fc);Vr=s(T0,"A",{href:!0,rel:!0});var $0=n(Vr);Cv=i($0,"Just-In-Time (JIT) compilation"),$0.forEach(t),T0.forEach(t),Ev=p(ns),Cc=s(ns,"LI",{});var x0=n(Cc);Fr=s(x0,"A",{href:!0,rel:!0});var W0=n(Fr);qv=i(W0,"Automatic Differentiation"),W0.forEach(t),x0.forEach(t),Pv=p(ns),Ec=s(ns,"LI",{});var j0=n(Ec);Cr=s(j0,"A",{href:!0,rel:!0});var V0=n(Cr);zv=i(V0,"Vectorization"),V0.forEach(t),j0.forEach(t),Mv=p(ns),qc=s(ns,"LI",{});var F0=n(qc);Er=s(F0,"A",{href:!0,rel:!0});var C0=n(Er);Av=i(C0,"Parallelization"),C0.forEach(t),F0.forEach(t),ns.forEach(t),Ov=p(Ie),pt=s(Ie,"DIV",{class:!0});var rs=n(pt);y(qr.$$.fragment,rs),Lv=p(rs),Mo=s(rs,"P",{});var el=n(Mo);Dv=i(el,"The "),Pc=s(el,"CODE",{});var E0=n(Pc);Sv=i(E0,"FlaxWav2Vec2PreTrainedModel"),E0.forEach(t),Nv=i(el," forward method, overrides the "),zc=s(el,"CODE",{});var q0=n(zc);Iv=i(q0,"__call__"),q0.forEach(t),Bv=i(el," special method."),el.forEach(t),Uv=p(rs),y(Sa.$$.fragment,rs),Hv=p(rs),y(Na.$$.fragment,rs),rs.forEach(t),Ie.forEach(t),Ud=p(o),Ao=s(o,"H2",{class:!0});var sm=n(Ao);Ia=s(sm,"A",{id:!0,class:!0,href:!0});var P0=n(Ia);Mc=s(P0,"SPAN",{});var z0=n(Mc);y(Pr.$$.fragment,z0),z0.forEach(t),P0.forEach(t),Rv=p(sm),Ac=s(sm,"SPAN",{});var M0=n(Ac);Xv=i(M0,"FlaxWav2Vec2ForPreTraining"),M0.forEach(t),sm.forEach(t),Hd=p(o),te=s(o,"DIV",{class:!0});var Be=n(te);y(zr.$$.fragment,Be),Kv=p(Be),Oo=s(Be,"P",{});var tl=n(Oo);Gv=i(tl,"Wav2Vec2 Model with a quantizer and "),Oc=s(tl,"CODE",{});var A0=n(Oc);Jv=i(A0,"VQ"),A0.forEach(t),Zv=i(tl,` head on top.
Wav2Vec2 was proposed in `),Mr=s(tl,"A",{href:!0,rel:!0});var O0=n(Mr);Qv=i(O0,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),O0.forEach(t),Yv=i(tl,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),tl.forEach(t),eb=p(Be),Ar=s(Be,"P",{});var nm=n(Ar);tb=i(nm,"This model inherits from "),zi=s(nm,"A",{href:!0});var L0=n(zi);ob=i(L0,"FlaxPreTrainedModel"),L0.forEach(t),ab=i(nm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nm.forEach(t),sb=p(Be),Or=s(Be,"P",{});var rm=n(Or);nb=i(rm,`This model is also a Flax Linen
`),Lr=s(rm,"A",{href:!0,rel:!0});var D0=n(Lr);rb=i(D0,"flax.nn.Module"),D0.forEach(t),ib=i(rm,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),rm.forEach(t),lb=p(Be),Lc=s(Be,"P",{});var S0=n(Lc);cb=i(S0,"Finally, this model supports inherent JAX features such as:"),S0.forEach(t),db=p(Be),At=s(Be,"UL",{});var is=n(At);Dc=s(is,"LI",{});var N0=n(Dc);Dr=s(N0,"A",{href:!0,rel:!0});var I0=n(Dr);pb=i(I0,"Just-In-Time (JIT) compilation"),I0.forEach(t),N0.forEach(t),mb=p(is),Sc=s(is,"LI",{});var B0=n(Sc);Sr=s(B0,"A",{href:!0,rel:!0});var U0=n(Sr);hb=i(U0,"Automatic Differentiation"),U0.forEach(t),B0.forEach(t),fb=p(is),Nc=s(is,"LI",{});var H0=n(Nc);Nr=s(H0,"A",{href:!0,rel:!0});var R0=n(Nr);ub=i(R0,"Vectorization"),R0.forEach(t),H0.forEach(t),gb=p(is),Ic=s(is,"LI",{});var X0=n(Ic);Ir=s(X0,"A",{href:!0,rel:!0});var K0=n(Ir);_b=i(K0,"Parallelization"),K0.forEach(t),X0.forEach(t),is.forEach(t),vb=p(Be),mt=s(Be,"DIV",{class:!0});var ls=n(mt);y(Br.$$.fragment,ls),bb=p(ls),Lo=s(ls,"P",{});var ol=n(Lo);wb=i(ol,"The "),Mi=s(ol,"A",{href:!0});var G0=n(Mi);yb=i(G0,"FlaxWav2Vec2ForPreTraining"),G0.forEach(t),kb=i(ol," forward method, overrides the "),Bc=s(ol,"CODE",{});var J0=n(Bc);Tb=i(J0,"__call__"),J0.forEach(t),$b=i(ol," special method."),ol.forEach(t),xb=p(ls),y(Ba.$$.fragment,ls),Wb=p(ls),y(Ua.$$.fragment,ls),ls.forEach(t),Be.forEach(t),this.h()},h(){m(c,"name","hf:doc:metadata"),m(c,"content",JSON.stringify(Mk)),m(u,"id","wav2vec2"),m(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(u,"href","#wav2vec2"),m(f,"class","relative group"),m(L,"id","overview"),m(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(L,"href","#overview"),m(z,"class","relative group"),m(ye,"href","https://arxiv.org/abs/2006.11477"),m(ye,"rel","nofollow"),m(D,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),m(je,"href","https://huggingface.co/patrickvonplaten"),m(je,"rel","nofollow"),m(fe,"id","transformers.Wav2Vec2Config"),m(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(fe,"href","#transformers.Wav2Vec2Config"),m(X,"class","relative group"),m(et,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Model"),m(Re,"href","https://huggingface.co/facebook/wav2vec2-base-960h"),m(Re,"rel","nofollow"),m(tt,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),m(ot,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),m(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(No,"id","transformers.Wav2Vec2CTCTokenizer"),m(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(No,"href","#transformers.Wav2Vec2CTCTokenizer"),m(so,"class","relative group"),m(Qr,"href","/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(Io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Yr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ho,"id","transformers.Wav2Vec2FeatureExtractor"),m(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ho,"href","#transformers.Wav2Vec2FeatureExtractor"),m(no,"class","relative group"),m(ei,"href","/docs/transformers/v4.22.0/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor"),m(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xo,"id","transformers.Wav2Vec2Processor"),m(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Xo,"href","#transformers.Wav2Vec2Processor"),m(ro,"class","relative group"),m(ti,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor"),m(oi,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),m(ai,"href","/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(Ts,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__"),m(si,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.decode"),m(xs,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor.__call__"),m(Ws,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"),m(Ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ni,"href","/docs/transformers/v4.22.0/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor.pad"),m(ri,"href","/docs/transformers/v4.22.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.pad"),m(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ii,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(li,"href","/docs/transformers/v4.22.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.from_pretrained"),m(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ci,"href","/docs/transformers/v4.22.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.batch_decode"),m(Zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(di,"href","/docs/transformers/v4.22.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.decode"),m(Qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Yo,"id","transformers.Wav2Vec2ProcessorWithLM"),m(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Yo,"href","#transformers.Wav2Vec2ProcessorWithLM"),m(io,"class","relative group"),m(Ls,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor.__call__"),m(Ds,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"),m(ea,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(pi,"href","/docs/transformers/v4.22.0/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor.pad"),m(mi,"href","/docs/transformers/v4.22.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.pad"),m(ta,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(hi,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ProcessorWithLM"),m(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fi,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(na,"id","transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput"),m(na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(na,"href","#transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput"),m(lo,"class","relative group"),m(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ui,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForPreTraining"),m(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ra,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ia,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(la,"id","transformers.Wav2Vec2Model"),m(la,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(la,"href","#transformers.Wav2Vec2Model"),m(ho,"class","relative group"),m(ln,"href","https://arxiv.org/abs/2006.11477"),m(ln,"rel","nofollow"),m(gi,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),m(pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(pn,"rel","nofollow"),m(_i,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Model"),m(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(pa,"id","transformers.Wav2Vec2ForCTC"),m(pa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(pa,"href","#transformers.Wav2Vec2ForCTC"),m(uo,"class","relative group"),m(un,"href","https://arxiv.org/abs/2006.11477"),m(un,"rel","nofollow"),m(vi,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),m(vn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(vn,"rel","nofollow"),m(bi,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC"),m(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ua,"id","transformers.Wav2Vec2ForSequenceClassification"),m(ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ua,"href","#transformers.Wav2Vec2ForSequenceClassification"),m(vo,"class","relative group"),m(Tn,"href","https://arxiv.org/abs/2006.11477"),m(Tn,"rel","nofollow"),m(wi,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),m(Wn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Wn,"rel","nofollow"),m(yi,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForSequenceClassification"),m(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ba,"id","transformers.Wav2Vec2ForAudioFrameClassification"),m(ba,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ba,"href","#transformers.Wav2Vec2ForAudioFrameClassification"),m(wo,"class","relative group"),m(En,"href","https://arxiv.org/abs/2006.11477"),m(En,"rel","nofollow"),m(ki,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),m(zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(zn,"rel","nofollow"),m(Ti,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForAudioFrameClassification"),m(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ka,"id","transformers.Wav2Vec2ForXVector"),m(ka,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ka,"href","#transformers.Wav2Vec2ForXVector"),m(ko,"class","relative group"),m(Dn,"href","https://arxiv.org/abs/2006.11477"),m(Dn,"rel","nofollow"),m($i,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),m(In,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(In,"rel","nofollow"),m(xi,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForXVector"),m(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xa,"id","transformers.Wav2Vec2ForPreTraining"),m(xa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(xa,"href","#transformers.Wav2Vec2ForPreTraining"),m($o,"class","relative group"),m(Rn,"href","https://arxiv.org/abs/2006.11477"),m(Rn,"rel","nofollow"),m(Wi,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),m(Gn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Gn,"rel","nofollow"),m(ji,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForPreTraining"),m(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Va,"id","transformers.TFWav2Vec2Model"),m(Va,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Va,"href","#transformers.TFWav2Vec2Model"),m(jo,"class","relative group"),m(Vi,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),m(tr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(tr,"rel","nofollow"),m(Fi,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.TFWav2Vec2Model"),m(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qa,"id","transformers.TFWav2Vec2ForCTC"),m(qa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qa,"href","#transformers.TFWav2Vec2ForCTC"),m(Fo,"class","relative group"),m(Ci,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),m(lr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(lr,"rel","nofollow"),m(Ei,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.TFWav2Vec2ForCTC"),m(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Aa,"id","transformers.FlaxWav2Vec2Model"),m(Aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Aa,"href","#transformers.FlaxWav2Vec2Model"),m(Eo,"class","relative group"),m(hr,"href","https://arxiv.org/abs/2006.11477"),m(hr,"rel","nofollow"),m(qi,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(gr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),m(gr,"rel","nofollow"),m(_r,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(_r,"rel","nofollow"),m(vr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(vr,"rel","nofollow"),m(br,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(br,"rel","nofollow"),m(wr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(wr,"rel","nofollow"),m(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Da,"id","transformers.FlaxWav2Vec2ForCTC"),m(Da,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Da,"href","#transformers.FlaxWav2Vec2ForCTC"),m(Po,"class","relative group"),m($r,"href","https://arxiv.org/abs/2006.11477"),m($r,"rel","nofollow"),m(Pi,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(jr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),m(jr,"rel","nofollow"),m(Vr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(Vr,"rel","nofollow"),m(Fr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(Fr,"rel","nofollow"),m(Cr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(Cr,"rel","nofollow"),m(Er,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(Er,"rel","nofollow"),m(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ia,"id","transformers.FlaxWav2Vec2ForPreTraining"),m(Ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ia,"href","#transformers.FlaxWav2Vec2ForPreTraining"),m(Ao,"class","relative group"),m(Mr,"href","https://arxiv.org/abs/2006.11477"),m(Mr,"rel","nofollow"),m(zi,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(Lr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),m(Lr,"rel","nofollow"),m(Dr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(Dr,"rel","nofollow"),m(Sr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(Sr,"rel","nofollow"),m(Nr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(Nr,"rel","nofollow"),m(Ir,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(Ir,"rel","nofollow"),m(Mi,"href","/docs/transformers/v4.22.0/en/model_doc/wav2vec2#transformers.FlaxWav2Vec2ForPreTraining"),m(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,c),_(o,b,g),_(o,f,g),e(f,u),e(u,v),k(l,v,null),e(f,h),e(f,V),e(V,S),_(o,A,g),_(o,z,g),e(z,L),e(L,H),k(C,H,null),e(z,N),e(z,q),e(q,ze),_(o,we,g),_(o,I,g),e(I,Me),e(I,ye),e(ye,ke),e(I,vt),_(o,Ke,g),_(o,ae,g),e(ae,bt),_(o,Ge,g),_(o,se,g),e(se,Ue),e(Ue,wt),_(o,Ae,g),_(o,M,g),e(M,R),_(o,Je,g),_(o,J,g),e(J,He),e(He,yt),e(J,Te),e(J,$e),e($e,kt),e($e,D),e(D,Tt),e($e,xe),_(o,Ze,g),_(o,he,g),e(he,We),e(he,je),e(je,$t),e(he,ie),_(o,Qe,g),_(o,X,g),e(X,fe),e(fe,Ve),k(O,Ve,null),e(X,xt),e(X,K),e(K,Wt),_(o,Ye,g),_(o,W,g),k(E,W,null),e(W,Gt),e(W,Z),e(Z,Jt),e(Z,et),e(et,P),e(Z,Zt),e(Z,Re),e(Re,Qt),e(Z,Yt),e(W,eo),e(W,B),e(B,Fe),e(B,tt),e(tt,to),e(B,Ce),e(B,ot),e(ot,oo),e(B,jt),e(W,ao),k(ne,W,null),_(o,Dt,g),_(o,so,g),e(so,No),e(No,al),k(cs,al,null),e(so,im),e(so,sl),e(sl,lm),_(o,pd,g),_(o,Q,g),k(ds,Q,null),e(Q,cm),e(Q,nl),e(nl,dm),e(Q,pm),e(Q,ps),e(ps,mm),e(ps,Qr),e(Qr,hm),e(ps,fm),e(Q,um),e(Q,Io),k(ms,Io,null),e(Io,gm),e(Io,rl),e(rl,_m),e(Q,vm),e(Q,Yr),k(hs,Yr,null),e(Q,bm),e(Q,at),k(fs,at,null),e(at,wm),e(at,il),e(il,ym),e(at,km),e(at,us),e(us,Tm),e(us,ll),e(ll,$m),e(us,xm),e(at,Wm),k(Bo,at,null),e(Q,jm),e(Q,Uo),k(gs,Uo,null),e(Uo,Vm),e(Uo,cl),e(cl,Fm),_(o,md,g),_(o,no,g),e(no,Ho),e(Ho,dl),k(_s,dl,null),e(no,Cm),e(no,pl),e(pl,Em),_(o,hd,g),_(o,Xe,g),k(vs,Xe,null),e(Xe,qm),e(Xe,ml),e(ml,Pm),e(Xe,zm),e(Xe,bs),e(bs,Mm),e(bs,ei),e(ei,Am),e(bs,Om),e(Xe,Lm),e(Xe,Ro),k(ws,Ro,null),e(Ro,Dm),e(Ro,hl),e(hl,Sm),_(o,fd,g),_(o,ro,g),e(ro,Xo),e(Xo,fl),k(ys,fl,null),e(ro,Nm),e(ro,ul),e(ul,Im),_(o,ud,g),_(o,U,g),k(ks,U,null),e(U,Bm),e(U,gl),e(gl,Um),e(U,Hm),e(U,Oe),e(Oe,ti),e(ti,Rm),e(Oe,Xm),e(Oe,oi),e(oi,Km),e(Oe,Gm),e(Oe,ai),e(ai,Jm),e(Oe,Zm),e(Oe,Ts),e(Ts,_l),e(_l,Qm),e(Ts,Ym),e(Oe,eh),e(Oe,si),e(si,th),e(Oe,oh),e(U,ah),e(U,Ko),k($s,Ko,null),e(Ko,sh),e(Ko,Vt),e(Vt,nh),e(Vt,xs),e(xs,vl),e(vl,rh),e(xs,ih),e(Vt,lh),e(Vt,bl),e(bl,ch),e(Vt,dh),e(Vt,Ws),e(Ws,wl),e(wl,ph),e(Ws,mh),e(Vt,hh),e(U,fh),e(U,Go),k(js,Go,null),e(Go,uh),e(Go,Ft),e(Ft,gh),e(Ft,ni),e(ni,_h),e(Ft,vh),e(Ft,yl),e(yl,bh),e(Ft,wh),e(Ft,ri),e(ri,yh),e(Ft,kh),e(U,Th),e(U,ii),k(Vs,ii,null),e(U,$h),e(U,St),k(Fs,St,null),e(St,xh),e(St,Cs),e(Cs,Wh),e(Cs,li),e(li,jh),e(Cs,Vh),e(St,Fh),k(Jo,St,null),e(U,Ch),e(U,Zo),k(Es,Zo,null),e(Zo,Eh),e(Zo,qs),e(qs,qh),e(qs,ci),e(ci,Ph),e(qs,zh),e(U,Mh),e(U,Qo),k(Ps,Qo,null),e(Qo,Ah),e(Qo,zs),e(zs,Oh),e(zs,di),e(di,Lh),e(zs,Dh),_(o,gd,g),_(o,io,g),e(io,Yo),e(Yo,kl),k(Ms,kl,null),e(io,Sh),e(io,Tl),e(Tl,Nh),_(o,_d,g),_(o,G,g),k(As,G,null),e(G,Ih),e(G,$l),e($l,Bh),e(G,Uh),e(G,ea),k(Os,ea,null),e(ea,Hh),e(ea,Ct),e(Ct,Rh),e(Ct,Ls),e(Ls,xl),e(xl,Xh),e(Ls,Kh),e(Ct,Gh),e(Ct,Wl),e(Wl,Jh),e(Ct,Zh),e(Ct,Ds),e(Ds,jl),e(jl,Qh),e(Ds,Yh),e(Ct,ef),e(G,tf),e(G,ta),k(Ss,ta,null),e(ta,of),e(ta,Et),e(Et,af),e(Et,pi),e(pi,sf),e(Et,nf),e(Et,Vl),e(Vl,rf),e(Et,lf),e(Et,mi),e(mi,cf),e(Et,df),e(G,pf),e(G,Nt),k(Ns,Nt,null),e(Nt,mf),e(Nt,Is),e(Is,hf),e(Is,hi),e(hi,ff),e(Is,uf),e(Nt,gf),k(oa,Nt,null),e(G,_f),e(G,fi),k(Bs,fi,null),e(G,vf),e(G,It),k(Us,It,null),e(It,bf),e(It,Fl),e(Fl,wf),e(It,yf),k(aa,It,null),e(G,kf),e(G,Bt),k(Hs,Bt,null),e(Bt,Tf),e(Bt,Cl),e(Cl,$f),e(Bt,xf),k(sa,Bt,null),_(o,vd,g),_(o,lo,g),e(lo,na),e(na,El),k(Rs,El,null),e(lo,Wf),e(lo,ql),e(ql,jf),_(o,bd,g),_(o,co,g),k(Xs,co,null),e(co,Vf),e(co,Ks),e(Ks,Ff),e(Ks,Pl),e(Pl,Cf),e(Ks,Ef),_(o,wd,g),_(o,po,g),k(Gs,po,null),e(po,qf),e(po,zl),e(zl,Pf),_(o,yd,g),_(o,mo,g),k(Js,mo,null),e(mo,zf),e(mo,Zs),e(Zs,Mf),e(Zs,ui),e(ui,Af),e(Zs,Of),_(o,kd,g),_(o,qt,g),k(Qs,qt,null),e(qt,Lf),e(qt,Ys),e(Ys,Df),e(Ys,Ml),e(Ml,Sf),e(Ys,Nf),e(qt,If),e(qt,ra),k(en,ra,null),e(ra,Bf),e(ra,Al),e(Al,Uf),_(o,Td,g),_(o,Pt,g),k(tn,Pt,null),e(Pt,Hf),e(Pt,on),e(on,Rf),e(on,Ol),e(Ol,Xf),e(on,Kf),e(Pt,Gf),e(Pt,ia),k(an,ia,null),e(ia,Jf),e(ia,Ll),e(Ll,Zf),_(o,$d,g),_(o,ho,g),e(ho,la),e(la,Dl),k(sn,Dl,null),e(ho,Qf),e(ho,Sl),e(Sl,Yf),_(o,xd,g),_(o,Ee,g),k(nn,Ee,null),e(Ee,eu),e(Ee,rn),e(rn,tu),e(rn,ln),e(ln,ou),e(rn,au),e(Ee,su),e(Ee,cn),e(cn,nu),e(cn,gi),e(gi,ru),e(cn,iu),e(Ee,lu),e(Ee,dn),e(dn,cu),e(dn,pn),e(pn,du),e(dn,pu),e(Ee,mu),e(Ee,st),k(mn,st,null),e(st,hu),e(st,fo),e(fo,fu),e(fo,_i),e(_i,uu),e(fo,gu),e(fo,Nl),e(Nl,_u),e(fo,vu),e(st,bu),k(ca,st,null),e(st,wu),k(da,st,null),_(o,Wd,g),_(o,uo,g),e(uo,pa),e(pa,Il),k(hn,Il,null),e(uo,yu),e(uo,Bl),e(Bl,ku),_(o,jd,g),_(o,qe,g),k(fn,qe,null),e(qe,Tu),e(qe,go),e(go,$u),e(go,Ul),e(Ul,xu),e(go,Wu),e(go,un),e(un,ju),e(go,Vu),e(qe,Fu),e(qe,gn),e(gn,Cu),e(gn,vi),e(vi,Eu),e(gn,qu),e(qe,Pu),e(qe,_n),e(_n,zu),e(_n,vn),e(vn,Mu),e(_n,Au),e(qe,Ou),e(qe,Le),k(bn,Le,null),e(Le,Lu),e(Le,_o),e(_o,Du),e(_o,bi),e(bi,Su),e(_o,Nu),e(_o,Hl),e(Hl,Iu),e(_o,Bu),e(Le,Uu),k(ma,Le,null),e(Le,Hu),k(ha,Le,null),e(Le,Ru),k(fa,Le,null),_(o,Vd,g),_(o,vo,g),e(vo,ua),e(ua,Rl),k(wn,Rl,null),e(vo,Xu),e(vo,Xl),e(Xl,Ku),_(o,Fd,g),_(o,le,g),k(yn,le,null),e(le,Gu),e(le,Kl),e(Kl,Ju),e(le,Zu),e(le,kn),e(kn,Qu),e(kn,Tn),e(Tn,Yu),e(kn,eg),e(le,tg),e(le,$n),e($n,og),e($n,wi),e(wi,ag),e($n,sg),e(le,ng),e(le,xn),e(xn,rg),e(xn,Wn),e(Wn,ig),e(xn,lg),e(le,cg),e(le,De),k(jn,De,null),e(De,dg),e(De,bo),e(bo,pg),e(bo,yi),e(yi,mg),e(bo,hg),e(bo,Gl),e(Gl,fg),e(bo,ug),e(De,gg),k(ga,De,null),e(De,_g),k(_a,De,null),e(De,vg),k(va,De,null),_(o,Cd,g),_(o,wo,g),e(wo,ba),e(ba,Jl),k(Vn,Jl,null),e(wo,bg),e(wo,Zl),e(Zl,wg),_(o,Ed,g),_(o,ce,g),k(Fn,ce,null),e(ce,yg),e(ce,Ql),e(Ql,kg),e(ce,Tg),e(ce,Cn),e(Cn,$g),e(Cn,En),e(En,xg),e(Cn,Wg),e(ce,jg),e(ce,qn),e(qn,Vg),e(qn,ki),e(ki,Fg),e(qn,Cg),e(ce,Eg),e(ce,Pn),e(Pn,qg),e(Pn,zn),e(zn,Pg),e(Pn,zg),e(ce,Mg),e(ce,nt),k(Mn,nt,null),e(nt,Ag),e(nt,yo),e(yo,Og),e(yo,Ti),e(Ti,Lg),e(yo,Dg),e(yo,Yl),e(Yl,Sg),e(yo,Ng),e(nt,Ig),k(wa,nt,null),e(nt,Bg),k(ya,nt,null),_(o,qd,g),_(o,ko,g),e(ko,ka),e(ka,ec),k(An,ec,null),e(ko,Ug),e(ko,tc),e(tc,Hg),_(o,Pd,g),_(o,de,g),k(On,de,null),e(de,Rg),e(de,oc),e(oc,Xg),e(de,Kg),e(de,Ln),e(Ln,Gg),e(Ln,Dn),e(Dn,Jg),e(Ln,Zg),e(de,Qg),e(de,Sn),e(Sn,Yg),e(Sn,$i),e($i,e_),e(Sn,t_),e(de,o_),e(de,Nn),e(Nn,a_),e(Nn,In),e(In,s_),e(Nn,n_),e(de,r_),e(de,rt),k(Bn,rt,null),e(rt,i_),e(rt,To),e(To,l_),e(To,xi),e(xi,c_),e(To,d_),e(To,ac),e(ac,p_),e(To,m_),e(rt,h_),k(Ta,rt,null),e(rt,f_),k($a,rt,null),_(o,zd,g),_(o,$o,g),e($o,xa),e(xa,sc),k(Un,sc,null),e($o,u_),e($o,nc),e(nc,g_),_(o,Md,g),_(o,Pe,g),k(Hn,Pe,null),e(Pe,__),e(Pe,xo),e(xo,v_),e(xo,rc),e(rc,b_),e(xo,w_),e(xo,Rn),e(Rn,y_),e(xo,k_),e(Pe,T_),e(Pe,Xn),e(Xn,$_),e(Xn,Wi),e(Wi,x_),e(Xn,W_),e(Pe,j_),e(Pe,Kn),e(Kn,V_),e(Kn,Gn),e(Gn,F_),e(Kn,C_),e(Pe,E_),e(Pe,it),k(Jn,it,null),e(it,q_),e(it,Wo),e(Wo,P_),e(Wo,ji),e(ji,z_),e(Wo,M_),e(Wo,ic),e(ic,A_),e(Wo,O_),e(it,L_),k(Wa,it,null),e(it,D_),k(ja,it,null),_(o,Ad,g),_(o,jo,g),e(jo,Va),e(Va,lc),k(Zn,lc,null),e(jo,S_),e(jo,cc),e(cc,N_),_(o,Od,g),_(o,pe,g),k(Qn,pe,null),e(pe,I_),e(pe,dc),e(dc,B_),e(pe,U_),e(pe,Yn),e(Yn,H_),e(Yn,Vi),e(Vi,R_),e(Yn,X_),e(pe,K_),e(pe,er),e(er,G_),e(er,tr),e(tr,J_),e(er,Z_),e(pe,Q_),k(Fa,pe,null),e(pe,Y_),e(pe,lt),k(or,lt,null),e(lt,e2),e(lt,Vo),e(Vo,t2),e(Vo,Fi),e(Fi,o2),e(Vo,a2),e(Vo,pc),e(pc,s2),e(Vo,n2),e(lt,r2),k(Ca,lt,null),e(lt,i2),k(Ea,lt,null),_(o,Ld,g),_(o,Fo,g),e(Fo,qa),e(qa,mc),k(ar,mc,null),e(Fo,l2),e(Fo,hc),e(hc,c2),_(o,Dd,g),_(o,me,g),k(sr,me,null),e(me,d2),e(me,nr),e(nr,p2),e(nr,fc),e(fc,m2),e(nr,h2),e(me,f2),e(me,rr),e(rr,u2),e(rr,Ci),e(Ci,g2),e(rr,_2),e(me,v2),e(me,ir),e(ir,b2),e(ir,lr),e(lr,w2),e(ir,y2),e(me,k2),k(Pa,me,null),e(me,T2),e(me,ct),k(cr,ct,null),e(ct,$2),e(ct,Co),e(Co,x2),e(Co,Ei),e(Ei,W2),e(Co,j2),e(Co,uc),e(uc,V2),e(Co,F2),e(ct,C2),k(za,ct,null),e(ct,E2),k(Ma,ct,null),_(o,Sd,g),_(o,Eo,g),e(Eo,Aa),e(Aa,gc),k(dr,gc,null),e(Eo,q2),e(Eo,_c),e(_c,P2),_(o,Nd,g),_(o,Y,g),k(pr,Y,null),e(Y,z2),e(Y,mr),e(mr,M2),e(mr,hr),e(hr,A2),e(mr,O2),e(Y,L2),e(Y,fr),e(fr,D2),e(fr,qi),e(qi,S2),e(fr,N2),e(Y,I2),e(Y,ur),e(ur,B2),e(ur,gr),e(gr,U2),e(ur,H2),e(Y,R2),e(Y,vc),e(vc,X2),e(Y,K2),e(Y,zt),e(zt,bc),e(bc,_r),e(_r,G2),e(zt,J2),e(zt,wc),e(wc,vr),e(vr,Z2),e(zt,Q2),e(zt,yc),e(yc,br),e(br,Y2),e(zt,ev),e(zt,kc),e(kc,wr),e(wr,tv),e(Y,ov),e(Y,dt),k(yr,dt,null),e(dt,av),e(dt,qo),e(qo,sv),e(qo,Tc),e(Tc,nv),e(qo,rv),e(qo,$c),e($c,iv),e(qo,lv),e(dt,cv),k(Oa,dt,null),e(dt,dv),k(La,dt,null),_(o,Id,g),_(o,Po,g),e(Po,Da),e(Da,xc),k(kr,xc,null),e(Po,pv),e(Po,Wc),e(Wc,mv),_(o,Bd,g),_(o,ee,g),k(Tr,ee,null),e(ee,hv),e(ee,zo),e(zo,fv),e(zo,jc),e(jc,uv),e(zo,gv),e(zo,$r),e($r,_v),e(zo,vv),e(ee,bv),e(ee,xr),e(xr,wv),e(xr,Pi),e(Pi,yv),e(xr,kv),e(ee,Tv),e(ee,Wr),e(Wr,$v),e(Wr,jr),e(jr,xv),e(Wr,Wv),e(ee,jv),e(ee,Vc),e(Vc,Vv),e(ee,Fv),e(ee,Mt),e(Mt,Fc),e(Fc,Vr),e(Vr,Cv),e(Mt,Ev),e(Mt,Cc),e(Cc,Fr),e(Fr,qv),e(Mt,Pv),e(Mt,Ec),e(Ec,Cr),e(Cr,zv),e(Mt,Mv),e(Mt,qc),e(qc,Er),e(Er,Av),e(ee,Ov),e(ee,pt),k(qr,pt,null),e(pt,Lv),e(pt,Mo),e(Mo,Dv),e(Mo,Pc),e(Pc,Sv),e(Mo,Nv),e(Mo,zc),e(zc,Iv),e(Mo,Bv),e(pt,Uv),k(Sa,pt,null),e(pt,Hv),k(Na,pt,null),_(o,Ud,g),_(o,Ao,g),e(Ao,Ia),e(Ia,Mc),k(Pr,Mc,null),e(Ao,Rv),e(Ao,Ac),e(Ac,Xv),_(o,Hd,g),_(o,te,g),k(zr,te,null),e(te,Kv),e(te,Oo),e(Oo,Gv),e(Oo,Oc),e(Oc,Jv),e(Oo,Zv),e(Oo,Mr),e(Mr,Qv),e(Oo,Yv),e(te,eb),e(te,Ar),e(Ar,tb),e(Ar,zi),e(zi,ob),e(Ar,ab),e(te,sb),e(te,Or),e(Or,nb),e(Or,Lr),e(Lr,rb),e(Or,ib),e(te,lb),e(te,Lc),e(Lc,cb),e(te,db),e(te,At),e(At,Dc),e(Dc,Dr),e(Dr,pb),e(At,mb),e(At,Sc),e(Sc,Sr),e(Sr,hb),e(At,fb),e(At,Nc),e(Nc,Nr),e(Nr,ub),e(At,gb),e(At,Ic),e(Ic,Ir),e(Ir,_b),e(te,vb),e(te,mt),k(Br,mt,null),e(mt,bb),e(mt,Lo),e(Lo,wb),e(Lo,Mi),e(Mi,yb),e(Lo,kb),e(Lo,Bc),e(Bc,Tb),e(Lo,$b),e(mt,xb),k(Ba,mt,null),e(mt,Wb),k(Ua,mt,null),Rd=!0},p(o,[g]){const Ur={};g&2&&(Ur.$$scope={dirty:g,ctx:o}),ne.$set(Ur);const Uc={};g&2&&(Uc.$$scope={dirty:g,ctx:o}),Bo.$set(Uc);const Hc={};g&2&&(Hc.$$scope={dirty:g,ctx:o}),Jo.$set(Hc);const Rc={};g&2&&(Rc.$$scope={dirty:g,ctx:o}),oa.$set(Rc);const Hr={};g&2&&(Hr.$$scope={dirty:g,ctx:o}),aa.$set(Hr);const Xc={};g&2&&(Xc.$$scope={dirty:g,ctx:o}),sa.$set(Xc);const Kc={};g&2&&(Kc.$$scope={dirty:g,ctx:o}),ca.$set(Kc);const Gc={};g&2&&(Gc.$$scope={dirty:g,ctx:o}),da.$set(Gc);const Rr={};g&2&&(Rr.$$scope={dirty:g,ctx:o}),ma.$set(Rr);const Jc={};g&2&&(Jc.$$scope={dirty:g,ctx:o}),ha.$set(Jc);const Zc={};g&2&&(Zc.$$scope={dirty:g,ctx:o}),fa.$set(Zc);const Qc={};g&2&&(Qc.$$scope={dirty:g,ctx:o}),ga.$set(Qc);const Yc={};g&2&&(Yc.$$scope={dirty:g,ctx:o}),_a.$set(Yc);const ed={};g&2&&(ed.$$scope={dirty:g,ctx:o}),va.$set(ed);const Xr={};g&2&&(Xr.$$scope={dirty:g,ctx:o}),wa.$set(Xr);const td={};g&2&&(td.$$scope={dirty:g,ctx:o}),ya.$set(td);const Kr={};g&2&&(Kr.$$scope={dirty:g,ctx:o}),Ta.$set(Kr);const od={};g&2&&(od.$$scope={dirty:g,ctx:o}),$a.$set(od);const Gr={};g&2&&(Gr.$$scope={dirty:g,ctx:o}),Wa.$set(Gr);const ad={};g&2&&(ad.$$scope={dirty:g,ctx:o}),ja.$set(ad);const Jr={};g&2&&(Jr.$$scope={dirty:g,ctx:o}),Fa.$set(Jr);const sd={};g&2&&(sd.$$scope={dirty:g,ctx:o}),Ca.$set(sd);const nd={};g&2&&(nd.$$scope={dirty:g,ctx:o}),Ea.$set(nd);const rd={};g&2&&(rd.$$scope={dirty:g,ctx:o}),Pa.$set(rd);const Ot={};g&2&&(Ot.$$scope={dirty:g,ctx:o}),za.$set(Ot);const Do={};g&2&&(Do.$$scope={dirty:g,ctx:o}),Ma.$set(Do);const id={};g&2&&(id.$$scope={dirty:g,ctx:o}),Oa.$set(id);const ld={};g&2&&(ld.$$scope={dirty:g,ctx:o}),La.$set(ld);const So={};g&2&&(So.$$scope={dirty:g,ctx:o}),Sa.$set(So);const cd={};g&2&&(cd.$$scope={dirty:g,ctx:o}),Na.$set(cd);const dd={};g&2&&(dd.$$scope={dirty:g,ctx:o}),Ba.$set(dd);const Zr={};g&2&&(Zr.$$scope={dirty:g,ctx:o}),Ua.$set(Zr)},i(o){Rd||(T(l.$$.fragment,o),T(C.$$.fragment,o),T(O.$$.fragment,o),T(E.$$.fragment,o),T(ne.$$.fragment,o),T(cs.$$.fragment,o),T(ds.$$.fragment,o),T(ms.$$.fragment,o),T(hs.$$.fragment,o),T(fs.$$.fragment,o),T(Bo.$$.fragment,o),T(gs.$$.fragment,o),T(_s.$$.fragment,o),T(vs.$$.fragment,o),T(ws.$$.fragment,o),T(ys.$$.fragment,o),T(ks.$$.fragment,o),T($s.$$.fragment,o),T(js.$$.fragment,o),T(Vs.$$.fragment,o),T(Fs.$$.fragment,o),T(Jo.$$.fragment,o),T(Es.$$.fragment,o),T(Ps.$$.fragment,o),T(Ms.$$.fragment,o),T(As.$$.fragment,o),T(Os.$$.fragment,o),T(Ss.$$.fragment,o),T(Ns.$$.fragment,o),T(oa.$$.fragment,o),T(Bs.$$.fragment,o),T(Us.$$.fragment,o),T(aa.$$.fragment,o),T(Hs.$$.fragment,o),T(sa.$$.fragment,o),T(Rs.$$.fragment,o),T(Xs.$$.fragment,o),T(Gs.$$.fragment,o),T(Js.$$.fragment,o),T(Qs.$$.fragment,o),T(en.$$.fragment,o),T(tn.$$.fragment,o),T(an.$$.fragment,o),T(sn.$$.fragment,o),T(nn.$$.fragment,o),T(mn.$$.fragment,o),T(ca.$$.fragment,o),T(da.$$.fragment,o),T(hn.$$.fragment,o),T(fn.$$.fragment,o),T(bn.$$.fragment,o),T(ma.$$.fragment,o),T(ha.$$.fragment,o),T(fa.$$.fragment,o),T(wn.$$.fragment,o),T(yn.$$.fragment,o),T(jn.$$.fragment,o),T(ga.$$.fragment,o),T(_a.$$.fragment,o),T(va.$$.fragment,o),T(Vn.$$.fragment,o),T(Fn.$$.fragment,o),T(Mn.$$.fragment,o),T(wa.$$.fragment,o),T(ya.$$.fragment,o),T(An.$$.fragment,o),T(On.$$.fragment,o),T(Bn.$$.fragment,o),T(Ta.$$.fragment,o),T($a.$$.fragment,o),T(Un.$$.fragment,o),T(Hn.$$.fragment,o),T(Jn.$$.fragment,o),T(Wa.$$.fragment,o),T(ja.$$.fragment,o),T(Zn.$$.fragment,o),T(Qn.$$.fragment,o),T(Fa.$$.fragment,o),T(or.$$.fragment,o),T(Ca.$$.fragment,o),T(Ea.$$.fragment,o),T(ar.$$.fragment,o),T(sr.$$.fragment,o),T(Pa.$$.fragment,o),T(cr.$$.fragment,o),T(za.$$.fragment,o),T(Ma.$$.fragment,o),T(dr.$$.fragment,o),T(pr.$$.fragment,o),T(yr.$$.fragment,o),T(Oa.$$.fragment,o),T(La.$$.fragment,o),T(kr.$$.fragment,o),T(Tr.$$.fragment,o),T(qr.$$.fragment,o),T(Sa.$$.fragment,o),T(Na.$$.fragment,o),T(Pr.$$.fragment,o),T(zr.$$.fragment,o),T(Br.$$.fragment,o),T(Ba.$$.fragment,o),T(Ua.$$.fragment,o),Rd=!0)},o(o){$(l.$$.fragment,o),$(C.$$.fragment,o),$(O.$$.fragment,o),$(E.$$.fragment,o),$(ne.$$.fragment,o),$(cs.$$.fragment,o),$(ds.$$.fragment,o),$(ms.$$.fragment,o),$(hs.$$.fragment,o),$(fs.$$.fragment,o),$(Bo.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(vs.$$.fragment,o),$(ws.$$.fragment,o),$(ys.$$.fragment,o),$(ks.$$.fragment,o),$($s.$$.fragment,o),$(js.$$.fragment,o),$(Vs.$$.fragment,o),$(Fs.$$.fragment,o),$(Jo.$$.fragment,o),$(Es.$$.fragment,o),$(Ps.$$.fragment,o),$(Ms.$$.fragment,o),$(As.$$.fragment,o),$(Os.$$.fragment,o),$(Ss.$$.fragment,o),$(Ns.$$.fragment,o),$(oa.$$.fragment,o),$(Bs.$$.fragment,o),$(Us.$$.fragment,o),$(aa.$$.fragment,o),$(Hs.$$.fragment,o),$(sa.$$.fragment,o),$(Rs.$$.fragment,o),$(Xs.$$.fragment,o),$(Gs.$$.fragment,o),$(Js.$$.fragment,o),$(Qs.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(an.$$.fragment,o),$(sn.$$.fragment,o),$(nn.$$.fragment,o),$(mn.$$.fragment,o),$(ca.$$.fragment,o),$(da.$$.fragment,o),$(hn.$$.fragment,o),$(fn.$$.fragment,o),$(bn.$$.fragment,o),$(ma.$$.fragment,o),$(ha.$$.fragment,o),$(fa.$$.fragment,o),$(wn.$$.fragment,o),$(yn.$$.fragment,o),$(jn.$$.fragment,o),$(ga.$$.fragment,o),$(_a.$$.fragment,o),$(va.$$.fragment,o),$(Vn.$$.fragment,o),$(Fn.$$.fragment,o),$(Mn.$$.fragment,o),$(wa.$$.fragment,o),$(ya.$$.fragment,o),$(An.$$.fragment,o),$(On.$$.fragment,o),$(Bn.$$.fragment,o),$(Ta.$$.fragment,o),$($a.$$.fragment,o),$(Un.$$.fragment,o),$(Hn.$$.fragment,o),$(Jn.$$.fragment,o),$(Wa.$$.fragment,o),$(ja.$$.fragment,o),$(Zn.$$.fragment,o),$(Qn.$$.fragment,o),$(Fa.$$.fragment,o),$(or.$$.fragment,o),$(Ca.$$.fragment,o),$(Ea.$$.fragment,o),$(ar.$$.fragment,o),$(sr.$$.fragment,o),$(Pa.$$.fragment,o),$(cr.$$.fragment,o),$(za.$$.fragment,o),$(Ma.$$.fragment,o),$(dr.$$.fragment,o),$(pr.$$.fragment,o),$(yr.$$.fragment,o),$(Oa.$$.fragment,o),$(La.$$.fragment,o),$(kr.$$.fragment,o),$(Tr.$$.fragment,o),$(qr.$$.fragment,o),$(Sa.$$.fragment,o),$(Na.$$.fragment,o),$(Pr.$$.fragment,o),$(zr.$$.fragment,o),$(Br.$$.fragment,o),$(Ba.$$.fragment,o),$(Ua.$$.fragment,o),Rd=!1},d(o){t(c),o&&t(b),o&&t(f),x(l),o&&t(A),o&&t(z),x(C),o&&t(we),o&&t(I),o&&t(Ke),o&&t(ae),o&&t(Ge),o&&t(se),o&&t(Ae),o&&t(M),o&&t(Je),o&&t(J),o&&t(Ze),o&&t(he),o&&t(Qe),o&&t(X),x(O),o&&t(Ye),o&&t(W),x(E),x(ne),o&&t(Dt),o&&t(so),x(cs),o&&t(pd),o&&t(Q),x(ds),x(ms),x(hs),x(fs),x(Bo),x(gs),o&&t(md),o&&t(no),x(_s),o&&t(hd),o&&t(Xe),x(vs),x(ws),o&&t(fd),o&&t(ro),x(ys),o&&t(ud),o&&t(U),x(ks),x($s),x(js),x(Vs),x(Fs),x(Jo),x(Es),x(Ps),o&&t(gd),o&&t(io),x(Ms),o&&t(_d),o&&t(G),x(As),x(Os),x(Ss),x(Ns),x(oa),x(Bs),x(Us),x(aa),x(Hs),x(sa),o&&t(vd),o&&t(lo),x(Rs),o&&t(bd),o&&t(co),x(Xs),o&&t(wd),o&&t(po),x(Gs),o&&t(yd),o&&t(mo),x(Js),o&&t(kd),o&&t(qt),x(Qs),x(en),o&&t(Td),o&&t(Pt),x(tn),x(an),o&&t($d),o&&t(ho),x(sn),o&&t(xd),o&&t(Ee),x(nn),x(mn),x(ca),x(da),o&&t(Wd),o&&t(uo),x(hn),o&&t(jd),o&&t(qe),x(fn),x(bn),x(ma),x(ha),x(fa),o&&t(Vd),o&&t(vo),x(wn),o&&t(Fd),o&&t(le),x(yn),x(jn),x(ga),x(_a),x(va),o&&t(Cd),o&&t(wo),x(Vn),o&&t(Ed),o&&t(ce),x(Fn),x(Mn),x(wa),x(ya),o&&t(qd),o&&t(ko),x(An),o&&t(Pd),o&&t(de),x(On),x(Bn),x(Ta),x($a),o&&t(zd),o&&t($o),x(Un),o&&t(Md),o&&t(Pe),x(Hn),x(Jn),x(Wa),x(ja),o&&t(Ad),o&&t(jo),x(Zn),o&&t(Od),o&&t(pe),x(Qn),x(Fa),x(or),x(Ca),x(Ea),o&&t(Ld),o&&t(Fo),x(ar),o&&t(Dd),o&&t(me),x(sr),x(Pa),x(cr),x(za),x(Ma),o&&t(Sd),o&&t(Eo),x(dr),o&&t(Nd),o&&t(Y),x(pr),x(yr),x(Oa),x(La),o&&t(Id),o&&t(Po),x(kr),o&&t(Bd),o&&t(ee),x(Tr),x(qr),x(Sa),x(Na),o&&t(Ud),o&&t(Ao),x(Pr),o&&t(Hd),o&&t(te),x(zr),x(Br),x(Ba),x(Ua)}}}const Mk={local:"wav2vec2",sections:[{local:"overview",title:"Overview"},{local:"transformers.Wav2Vec2Config",title:"Wav2Vec2Config"},{local:"transformers.Wav2Vec2CTCTokenizer",title:"Wav2Vec2CTCTokenizer"},{local:"transformers.Wav2Vec2FeatureExtractor",title:"Wav2Vec2FeatureExtractor"},{local:"transformers.Wav2Vec2Processor",title:"Wav2Vec2Processor"},{local:"transformers.Wav2Vec2ProcessorWithLM",title:"Wav2Vec2ProcessorWithLM"},{local:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput",title:"Wav2Vec2 specific outputs"},{local:"transformers.Wav2Vec2Model",title:"Wav2Vec2Model"},{local:"transformers.Wav2Vec2ForCTC",title:"Wav2Vec2ForCTC"},{local:"transformers.Wav2Vec2ForSequenceClassification",title:"Wav2Vec2ForSequenceClassification"},{local:"transformers.Wav2Vec2ForAudioFrameClassification",title:"Wav2Vec2ForAudioFrameClassification"},{local:"transformers.Wav2Vec2ForXVector",title:"Wav2Vec2ForXVector"},{local:"transformers.Wav2Vec2ForPreTraining",title:"Wav2Vec2ForPreTraining"},{local:"transformers.TFWav2Vec2Model",title:"TFWav2Vec2Model"},{local:"transformers.TFWav2Vec2ForCTC",title:"TFWav2Vec2ForCTC"},{local:"transformers.FlaxWav2Vec2Model",title:"FlaxWav2Vec2Model"},{local:"transformers.FlaxWav2Vec2ForCTC",title:"FlaxWav2Vec2ForCTC"},{local:"transformers.FlaxWav2Vec2ForPreTraining",title:"FlaxWav2Vec2ForPreTraining"}],title:"Wav2Vec2"};function Ak(j){return tk(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Bk extends Z0{constructor(c){super();Q0(this,c,Ak,zk,Y0,{})}}export{Bk as default,Mk as metadata};
