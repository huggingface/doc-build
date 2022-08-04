import{S as hk,i as fk,s as uk,e as a,k as d,w,t as r,M as gk,c as s,d as t,m as p,a as n,x as y,h as i,b as m,G as e,g as _,y as k,q as T,o as $,B as x,v as _k,L as fe}from"../../chunks/vendor-hf-doc-builder.js";import{T as me}from"../../chunks/Tip-hf-doc-builder.js";import{D as F}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ue}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ee}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as he}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function vk(W){let c,b,f,h,v;return h=new ue({props:{code:`from transformers import Wav2Vec2Model, Wav2Vec2Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function bk(W){let c,b,f,h,v;return h=new ue({props:{code:`# Let's see how to retrieve time steps for a model
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
[{<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;WHY&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.42</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.54</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;DOES&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.64</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.9</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;MILISANDRA&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">2.26</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">2.9</span>}]`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function wk(W){let c,b,f,h,v,l,u,j;return{c(){c=a("p"),b=r("This class method is simply calling "),f=a("a"),h=r("save_pretrained()"),v=r(` and
`),l=a("code"),u=r("save_pretrained"),j=r(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(D){c=s(D,"P",{});var q=n(c);b=i(q,"This class method is simply calling "),f=s(q,"A",{href:!0});var C=n(f);h=i(C,"save_pretrained()"),C.forEach(t),v=i(q,` and
`),l=s(q,"CODE",{});var A=n(l);u=i(A,"save_pretrained"),A.forEach(t),j=i(q,`. Please refer to the docstrings of the methods
above for more information.`),q.forEach(t),this.h()},h(){m(f,"href","/docs/transformers/v4.21.1/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(D,q){_(D,c,q),e(c,b),e(c,f),e(f,h),e(c,v),e(c,l),e(l,u),e(c,j)},d(D){D&&t(c)}}}function yk(W){let c,b,f,h,v,l,u,j,D,q,C,A,O,H;return{c(){c=a("p"),b=r(`This class method is simply calling Wav2Vec2FeatureExtractor\u2019s
`),f=a("a"),h=r("from_pretrained()"),v=r(`, Wav2Vec2CTCTokenizer\u2019s
`),l=a("code"),u=r("from_pretrained"),j=r(`, and
`),D=a("code"),q=r("pyctcdecode.BeamSearchDecoderCTC.load_from_hf_hub"),C=r("."),A=d(),O=a("p"),H=r("Please refer to the docstrings of the methods above for more information."),this.h()},l(S){c=s(S,"P",{});var P=n(c);b=i(P,`This class method is simply calling Wav2Vec2FeatureExtractor\u2019s
`),f=s(P,"A",{href:!0});var je=n(f);h=i(je,"from_pretrained()"),je.forEach(t),v=i(P,`, Wav2Vec2CTCTokenizer\u2019s
`),l=s(P,"CODE",{});var ge=n(l);u=i(ge,"from_pretrained"),ge.forEach(t),j=i(P,`, and
`),D=s(P,"CODE",{});var B=n(D);q=i(B,"pyctcdecode.BeamSearchDecoderCTC.load_from_hf_hub"),B.forEach(t),C=i(P,"."),P.forEach(t),A=p(S),O=s(S,"P",{});var U=n(O);H=i(U,"Please refer to the docstrings of the methods above for more information."),U.forEach(t),this.h()},h(){m(f,"href","/docs/transformers/v4.21.1/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(S,P){_(S,c,P),e(c,b),e(c,f),e(f,h),e(c,v),e(c,l),e(l,u),e(c,j),e(c,D),e(D,q),e(c,C),_(S,A,P),_(S,O,P),e(O,H)},d(S){S&&t(c),S&&t(A),S&&t(O)}}}function kk(W){let c,b;return{c(){c=a("p"),b=r("This function makes use of Python\u2019s multiprocessing.")},l(f){c=s(f,"P",{});var h=n(c);b=i(h,"This function makes use of Python\u2019s multiprocessing."),h.forEach(t)},m(f,h){_(f,c,h),e(c,b)},d(f){f&&t(c)}}}function Tk(W){let c,b,f,h,v;return h=new ue({props:{code:`# Let's see how to retrieve time steps for a model
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
[{<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;WHY&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.42</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.54</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;DOES&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.64</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.88</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;A&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">2.12</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">2.14</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;MILE&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">2.26</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">2.46</span>}]`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function $k(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function xk(W){let c,b,f,h,v;return h=new ue({props:{code:`from transformers import Wav2Vec2Processor, Wav2Vec2Model
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
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">768</span>]`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function Wk(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function Vk(W){let c,b,f,h,v;return h=new ue({props:{code:`from transformers import Wav2Vec2Processor, Wav2Vec2ForCTC
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
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function jk(W){let c,b;return c=new ue({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">53.48</span>`}}),{c(){w(c.$$.fragment)},l(f){y(c.$$.fragment,f)},m(f,h){k(c,f,h),b=!0},p:fe,i(f){b||(T(c.$$.fragment,f),b=!0)},o(f){$(c.$$.fragment,f),b=!1},d(f){x(c,f)}}}function Fk(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function Ck(W){let c,b,f,h,v;return h=new ue({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ForSequenceClassification
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
<span class="hljs-string">&#x27;_unknown_&#x27;</span>`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function Ek(W){let c,b;return c=new ue({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">6.54</span>`}}),{c(){w(c.$$.fragment)},l(f){y(c.$$.fragment,f)},m(f,h){k(c,f,h),b=!0},p:fe,i(f){b||(T(c.$$.fragment,f),b=!0)},o(f){$(c.$$.fragment,f),b=!1},d(f){x(c,f)}}}function Pk(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function qk(W){let c,b,f,h,v;return h=new ue({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ForAudioFrameClassification
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
[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>]`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function zk(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function Mk(W){let c,b,f,h,v;return h=new ue({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ForXVector
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
<span class="hljs-number">0.98</span>`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function Ak(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function Ok(W){let c,b,f,h,v;return h=new ue({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, mask_time_indices=mask_time_indices).loss`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function Lk(W){let c,b,f,h,v,l,u,j,D,q,C,A,O,H,S,P,je,ge,B,U,_e,Se,z,I,Fe,ve,Re,Ce,oe,lt,He,L,ct,de,pe,Ne,be,dt,we,ae,Ee,ye,pt;return{c(){c=a("p"),b=r("TF 2.0 models accepts two formats as inputs:"),f=d(),h=a("ul"),v=a("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=d(),j=a("li"),D=r("having all inputs as a list, tuple or dict in the first positional arguments."),q=d(),C=a("p"),A=r("This second option is useful when using "),O=a("code"),H=r("tf.keras.Model.fit"),S=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),P=a("code"),je=r("model(inputs)"),ge=r("."),B=d(),U=a("p"),_e=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Se=d(),z=a("ul"),I=a("li"),Fe=r("a single Tensor with "),ve=a("code"),Re=r("input_values"),Ce=r(" only and nothing else: "),oe=a("code"),lt=r("model(inputs_ids)"),He=d(),L=a("li"),ct=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=a("code"),pe=r("model([input_values, attention_mask])"),Ne=r(" or "),be=a("code"),dt=r("model([input_values, attention_mask, token_type_ids])"),we=d(),ae=a("li"),Ee=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),pt=r('model({"input_values": input_values, "token_type_ids": token_type_ids})')},l(V){c=s(V,"P",{});var E=n(c);b=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),f=p(V),h=s(V,"UL",{});var Ie=n(h);v=s(Ie,"LI",{});var Be=n(v);l=i(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),u=p(Ie),j=s(Ie,"LI",{});var Mt=n(j);D=i(Mt,"having all inputs as a list, tuple or dict in the first positional arguments."),Mt.forEach(t),Ie.forEach(t),q=p(V),C=s(V,"P",{});var se=n(C);A=i(se,"This second option is useful when using "),O=s(se,"CODE",{});var $t=n(O);H=i($t,"tf.keras.Model.fit"),$t.forEach(t),S=i(se,` method which currently requires having all the
tensors in the first argument of the model call function: `),P=s(se,"CODE",{});var ke=n(P);je=i(ke,"model(inputs)"),ke.forEach(t),ge=i(se,"."),se.forEach(t),B=p(V),U=s(V,"P",{});var Pe=n(U);_e=i(Pe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Pe.forEach(t),Se=p(V),z=s(V,"UL",{});var X=n(z);I=s(X,"LI",{});var G=n(I);Fe=i(G,"a single Tensor with "),ve=s(G,"CODE",{});var At=n(ve);Re=i(At,"input_values"),At.forEach(t),Ce=i(G," only and nothing else: "),oe=s(G,"CODE",{});var mt=n(oe);lt=i(mt,"model(inputs_ids)"),mt.forEach(t),G.forEach(t),He=p(X),L=s(X,"LI",{});var Te=n(L);ct=i(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=s(Te,"CODE",{});var xt=n(de);pe=i(xt,"model([input_values, attention_mask])"),xt.forEach(t),Ne=i(Te," or "),be=s(Te,"CODE",{});var J=n(be);dt=i(J,"model([input_values, attention_mask, token_type_ids])"),J.forEach(t),Te.forEach(t),we=p(X),ae=s(X,"LI",{});var $e=n(ae);Ee=i($e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s($e,"CODE",{});var Ot=n(ye);pt=i(Ot,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),Ot.forEach(t),$e.forEach(t),X.forEach(t)},m(V,E){_(V,c,E),e(c,b),_(V,f,E),_(V,h,E),e(h,v),e(v,l),e(h,u),e(h,j),e(j,D),_(V,q,E),_(V,C,E),e(C,A),e(C,O),e(O,H),e(C,S),e(C,P),e(P,je),e(C,ge),_(V,B,E),_(V,U,E),e(U,_e),_(V,Se,E),_(V,z,E),e(z,I),e(I,Fe),e(I,ve),e(ve,Re),e(I,Ce),e(I,oe),e(oe,lt),e(z,He),e(z,L),e(L,ct),e(L,de),e(de,pe),e(L,Ne),e(L,be),e(be,dt),e(z,we),e(z,ae),e(ae,Ee),e(ae,ye),e(ye,pt)},d(V){V&&t(c),V&&t(f),V&&t(h),V&&t(q),V&&t(C),V&&t(B),V&&t(U),V&&t(Se),V&&t(z)}}}function Dk(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function Sk(W){let c,b,f,h,v;return h=new ue({props:{code:`from transformers import Wav2Vec2Processor, TFWav2Vec2Model
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
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function Nk(W){let c,b,f,h,v,l,u,j,D,q,C,A,O,H,S,P,je,ge,B,U,_e,Se,z,I,Fe,ve,Re,Ce,oe,lt,He,L,ct,de,pe,Ne,be,dt,we,ae,Ee,ye,pt;return{c(){c=a("p"),b=r("TF 2.0 models accepts two formats as inputs:"),f=d(),h=a("ul"),v=a("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=d(),j=a("li"),D=r("having all inputs as a list, tuple or dict in the first positional arguments."),q=d(),C=a("p"),A=r("This second option is useful when using "),O=a("code"),H=r("tf.keras.Model.fit"),S=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),P=a("code"),je=r("model(inputs)"),ge=r("."),B=d(),U=a("p"),_e=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Se=d(),z=a("ul"),I=a("li"),Fe=r("a single Tensor with "),ve=a("code"),Re=r("input_values"),Ce=r(" only and nothing else: "),oe=a("code"),lt=r("model(inputs_ids)"),He=d(),L=a("li"),ct=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=a("code"),pe=r("model([input_values, attention_mask])"),Ne=r(" or "),be=a("code"),dt=r("model([input_values, attention_mask, token_type_ids])"),we=d(),ae=a("li"),Ee=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),pt=r('model({"input_values": input_values, "token_type_ids": token_type_ids})')},l(V){c=s(V,"P",{});var E=n(c);b=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),f=p(V),h=s(V,"UL",{});var Ie=n(h);v=s(Ie,"LI",{});var Be=n(v);l=i(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),u=p(Ie),j=s(Ie,"LI",{});var Mt=n(j);D=i(Mt,"having all inputs as a list, tuple or dict in the first positional arguments."),Mt.forEach(t),Ie.forEach(t),q=p(V),C=s(V,"P",{});var se=n(C);A=i(se,"This second option is useful when using "),O=s(se,"CODE",{});var $t=n(O);H=i($t,"tf.keras.Model.fit"),$t.forEach(t),S=i(se,` method which currently requires having all the
tensors in the first argument of the model call function: `),P=s(se,"CODE",{});var ke=n(P);je=i(ke,"model(inputs)"),ke.forEach(t),ge=i(se,"."),se.forEach(t),B=p(V),U=s(V,"P",{});var Pe=n(U);_e=i(Pe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Pe.forEach(t),Se=p(V),z=s(V,"UL",{});var X=n(z);I=s(X,"LI",{});var G=n(I);Fe=i(G,"a single Tensor with "),ve=s(G,"CODE",{});var At=n(ve);Re=i(At,"input_values"),At.forEach(t),Ce=i(G," only and nothing else: "),oe=s(G,"CODE",{});var mt=n(oe);lt=i(mt,"model(inputs_ids)"),mt.forEach(t),G.forEach(t),He=p(X),L=s(X,"LI",{});var Te=n(L);ct=i(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=s(Te,"CODE",{});var xt=n(de);pe=i(xt,"model([input_values, attention_mask])"),xt.forEach(t),Ne=i(Te," or "),be=s(Te,"CODE",{});var J=n(be);dt=i(J,"model([input_values, attention_mask, token_type_ids])"),J.forEach(t),Te.forEach(t),we=p(X),ae=s(X,"LI",{});var $e=n(ae);Ee=i($e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s($e,"CODE",{});var Ot=n(ye);pt=i(Ot,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),Ot.forEach(t),$e.forEach(t),X.forEach(t)},m(V,E){_(V,c,E),e(c,b),_(V,f,E),_(V,h,E),e(h,v),e(v,l),e(h,u),e(h,j),e(j,D),_(V,q,E),_(V,C,E),e(C,A),e(C,O),e(O,H),e(C,S),e(C,P),e(P,je),e(C,ge),_(V,B,E),_(V,U,E),e(U,_e),_(V,Se,E),_(V,z,E),e(z,I),e(I,Fe),e(I,ve),e(ve,Re),e(I,Ce),e(I,oe),e(oe,lt),e(z,He),e(z,L),e(L,ct),e(L,de),e(de,pe),e(L,Ne),e(L,be),e(be,dt),e(z,we),e(z,ae),e(ae,Ee),e(ae,ye),e(ye,pt)},d(V){V&&t(c),V&&t(f),V&&t(h),V&&t(q),V&&t(C),V&&t(B),V&&t(U),V&&t(Se),V&&t(z)}}}function Ik(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function Bk(W){let c,b,f,h,v;return h=new ue({props:{code:`import tensorflow as tf
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

# wrap processor as target processor to encode labels
with processor.as_target_processor():
    labels = processor(transcription, return_tensors="tf").input_ids

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

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># wrap processor as target processor to encode labels</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    labels = processor(transcription, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, labels=labels).loss`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function Uk(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function Rk(W){let c,b,f,h,v;return h=new ue({props:{code:`from transformers import Wav2Vec2Processor, FlaxWav2Vec2Model
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
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function Hk(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function Xk(W){let c,b,f,h,v;return h=new ue({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># should give:  &quot;A MAN SAID TO THE UNIVERSE SIR I EXIST&quot;</span>`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function Gk(W){let c,b,f,h,v;return{c(){c=a("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),h=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var j=n(f);h=i(j,"Module"),j.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,c,u),e(c,b),e(c,f),e(f,h),e(c,v)},d(l){l&&t(c)}}}function Jk(W){let c,b,f,h,v;return h=new ue({props:{code:`import optax
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> np.asarray(cosine_sim)[mask_time_indices].mean() &gt; <span class="hljs-number">0.5</span>`}}),{c(){c=a("p"),b=r("Example:"),f=d(),w(h.$$.fragment)},l(l){c=s(l,"P",{});var u=n(c);b=i(u,"Example:"),u.forEach(t),f=p(l),y(h.$$.fragment,l)},m(l,u){_(l,c,u),e(c,b),_(l,f,u),k(h,l,u),v=!0},p:fe,i(l){v||(T(h.$$.fragment,l),v=!0)},o(l){$(h.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),x(h,l)}}}function Zk(W){let c,b,f,h,v,l,u,j,D,q,C,A,O,H,S,P,je,ge,B,U,_e,Se,z,I,Fe,ve,Re,Ce,oe,lt,He,L,ct,de,pe,Ne,be,dt,we,ae,Ee,ye,pt,V,E,Ie,Be,Mt,se,$t,ke,Pe,X,G,At,mt,Te,xt,J,$e,Ot,Lt,am,Sr,sm,nm,Ga,rm,im,lm,Dt,cm,Nr,dm,pm,Ir,mm,hm,fm,To,sd,St,$o,Qi,Ja,um,Yi,gm,nd,Z,Za,_m,el,vm,bm,Ka,wm,Br,ym,km,Tm,xo,Qa,$m,tl,xm,Wm,Ur,Ya,Vm,Xe,es,jm,ol,Fm,Cm,ts,Em,al,Pm,qm,zm,Wo,Mm,Vo,os,Am,sl,Om,rd,Nt,jo,nl,as,Lm,rl,Dm,id,Ue,ss,Sm,il,Nm,Im,ns,Bm,Rr,Um,Rm,Hm,Fo,rs,Xm,ll,Gm,ld,It,Co,cl,is,Jm,dl,Zm,cd,M,ls,Km,pl,Qm,Ym,qe,Hr,eh,th,Xr,oh,ah,Gr,sh,nh,cs,ml,rh,ih,lh,Jr,ch,dh,ph,Eo,ds,mh,ht,hh,ps,hl,fh,uh,gh,Zr,_h,vh,ms,fl,bh,wh,yh,kh,Po,hs,Th,ft,$h,Kr,xh,Wh,Qr,Vh,jh,Yr,Fh,Ch,Eh,ei,fs,Ph,Wt,us,qh,gs,zh,ti,Mh,Ah,Oh,qo,Lh,zo,_s,Dh,vs,Sh,oi,Nh,Ih,Bh,Mo,bs,Uh,ws,Rh,ai,Hh,Xh,Gh,Ao,ys,Jh,ul,Zh,dd,Bt,Oo,gl,ks,Kh,_l,Qh,pd,N,Ts,Yh,vl,ef,tf,Lo,$s,of,ut,af,xs,bl,sf,nf,rf,si,lf,cf,Ws,wl,df,pf,mf,hf,Do,Vs,ff,gt,uf,ni,gf,_f,ri,vf,bf,ii,wf,yf,kf,Vt,js,Tf,Fs,$f,li,xf,Wf,Vf,So,jf,ci,Cs,Ff,jt,Es,Cf,yl,Ef,Pf,No,qf,Ft,Ps,zf,kl,Mf,Af,Io,Of,Bo,qs,Lf,Tl,Df,md,Ut,Uo,$l,zs,Sf,xl,Nf,hd,Rt,Ms,If,As,Bf,Wl,Uf,Rf,fd,Ht,Os,Hf,Vl,Xf,ud,Xt,Ls,Gf,Ds,Jf,di,Zf,Kf,gd,_t,Ss,Qf,Ns,Yf,jl,eu,tu,ou,Ro,Is,au,Fl,su,_d,vt,Bs,nu,Us,ru,Cl,iu,lu,cu,Ho,Rs,du,El,pu,vd,Gt,Xo,Pl,Hs,mu,ql,hu,bd,xe,Xs,fu,Gs,uu,Js,gu,_u,vu,Zs,bu,pi,wu,yu,ku,Ks,Tu,Qs,$u,xu,Wu,Ge,Ys,Vu,Jt,ju,mi,Fu,Cu,zl,Eu,Pu,qu,Go,zu,Jo,wd,Zt,Zo,Ml,en,Mu,Al,Au,yd,We,tn,Ou,Kt,Lu,Ol,Du,Su,on,Nu,Iu,Bu,an,Uu,hi,Ru,Hu,Xu,sn,Gu,nn,Ju,Zu,Ku,ze,rn,Qu,Qt,Yu,fi,eg,tg,Ll,og,ag,sg,Ko,ng,Qo,rg,Yo,kd,Yt,ea,Dl,ln,ig,Sl,lg,Td,ne,cn,cg,Nl,dg,pg,dn,mg,pn,hg,fg,ug,mn,gg,ui,_g,vg,bg,hn,wg,fn,yg,kg,Tg,Me,un,$g,eo,xg,gi,Wg,Vg,Il,jg,Fg,Cg,ta,Eg,oa,Pg,aa,$d,to,sa,Bl,gn,qg,Ul,zg,xd,re,_n,Mg,Rl,Ag,Og,vn,Lg,bn,Dg,Sg,Ng,wn,Ig,_i,Bg,Ug,Rg,yn,Hg,kn,Xg,Gg,Jg,Je,Tn,Zg,oo,Kg,vi,Qg,Yg,Hl,e_,t_,o_,na,a_,ra,Wd,ao,ia,Xl,$n,s_,Gl,n_,Vd,ie,xn,r_,Jl,i_,l_,Wn,c_,Vn,d_,p_,m_,jn,h_,bi,f_,u_,g_,Fn,__,Cn,v_,b_,w_,Ze,En,y_,so,k_,wi,T_,$_,Zl,x_,W_,V_,la,j_,ca,jd,no,da,Kl,Pn,F_,Ql,C_,Fd,Ve,qn,E_,ro,P_,Yl,q_,z_,zn,M_,A_,O_,Mn,L_,yi,D_,S_,N_,An,I_,On,B_,U_,R_,Ke,Ln,H_,io,X_,ki,G_,J_,ec,Z_,K_,Q_,pa,Y_,ma,Cd,lo,ha,tc,Dn,ev,oc,tv,Ed,le,Sn,ov,ac,av,sv,Nn,nv,Ti,rv,iv,lv,In,cv,Bn,dv,pv,mv,fa,hv,Qe,Un,fv,co,uv,$i,gv,_v,sc,vv,bv,wv,ua,yv,ga,Pd,po,_a,nc,Rn,kv,rc,Tv,qd,ce,Hn,$v,Xn,xv,ic,Wv,Vv,jv,Gn,Fv,xi,Cv,Ev,Pv,Jn,qv,Zn,zv,Mv,Av,va,Ov,Ye,Kn,Lv,mo,Dv,Wi,Sv,Nv,lc,Iv,Bv,Uv,ba,Rv,wa,zd,ho,ya,cc,Qn,Hv,dc,Xv,Md,K,Yn,Gv,er,Jv,tr,Zv,Kv,Qv,or,Yv,Vi,e2,t2,o2,ar,a2,sr,s2,n2,r2,pc,i2,l2,bt,mc,nr,c2,d2,hc,rr,p2,m2,fc,ir,h2,f2,uc,lr,u2,g2,et,cr,_2,fo,v2,gc,b2,w2,_c,y2,k2,T2,ka,$2,Ta,Ad,uo,$a,vc,dr,x2,bc,W2,Od,Q,pr,V2,go,j2,wc,F2,C2,mr,E2,P2,q2,hr,z2,ji,M2,A2,O2,fr,L2,ur,D2,S2,N2,yc,I2,B2,wt,kc,gr,U2,R2,Tc,_r,H2,X2,$c,vr,G2,J2,xc,br,Z2,K2,tt,wr,Q2,_o,Y2,Wc,eb,tb,Vc,ob,ab,sb,xa,nb,Wa,Ld,vo,Va,jc,yr,rb,Fc,ib,Dd,Y,kr,lb,bo,cb,Cc,db,pb,Tr,mb,hb,fb,$r,ub,Fi,gb,_b,vb,xr,bb,Wr,wb,yb,kb,Ec,Tb,$b,yt,Pc,Vr,xb,Wb,qc,jr,Vb,jb,zc,Fr,Fb,Cb,Mc,Cr,Eb,Pb,ot,Er,qb,wo,zb,Ci,Mb,Ab,Ac,Ob,Lb,Db,ja,Sb,Fa,Sd;return l=new ee({}),H=new ee({}),G=new ee({}),$e=new F({props:{name:"class transformers.Wav2Vec2Config",anchor:"transformers.Wav2Vec2Config",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"feat_quantizer_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"num_codevectors_per_group",val:" = 320"},{name:"num_codevector_groups",val:" = 2"},{name:"contrastive_logits_temperature",val:" = 0.1"},{name:"num_negatives",val:" = 100"},{name:"codevector_dim",val:" = 256"},{name:"proj_codevector_dim",val:" = 256"},{name:"diversity_loss_weight",val:" = 0.1"},{name:"ctc_loss_reduction",val:" = 'sum'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"tdnn_dim",val:" = (512, 512, 512, 512, 1500)"},{name:"tdnn_kernel",val:" = (5, 3, 3, 1, 1)"},{name:"tdnn_dilation",val:" = (1, 2, 3, 1, 1)"},{name:"xvector_output_dim",val:" = 512"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"add_adapter",val:" = False"},{name:"adapter_kernel_size",val:" = 3"},{name:"adapter_stride",val:" = 2"},{name:"num_adapter_layers",val:" = 3"},{name:"output_hidden_size",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the Wav2Vec2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Model">Wav2Vec2Model</a> or <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.TFWav2Vec2Model">TFWav2Vec2Model</a>. Vocabulary size of the
model. Defines the different tokens that can be represented by the <em>inputs_ids</em> passed to the forward
method of <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Model">Wav2Vec2Model</a>.`,name:"vocab_size"},{anchor:"transformers.Wav2Vec2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.Wav2Vec2Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.Wav2Vec2Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.Wav2Vec2Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.Wav2Vec2Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.Wav2Vec2Config.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.Wav2Vec2Config.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.Wav2Vec2Config.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC">Wav2Vec2ForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.Wav2Vec2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
instance of <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC">Wav2Vec2ForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.Wav2Vec2Config.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC">Wav2Vec2ForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.Wav2Vec2Config.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2ForSequenceClassification">Wav2Vec2ForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.Wav2Vec2Config.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
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
if <code>add_adapter is True</code>.`,name:"output_hidden_size"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/configuration_wav2vec2.py#L32"}}),To=new he({props:{anchor:"transformers.Wav2Vec2Config.example",$$slots:{default:[vk]},$$scope:{ctx:W}}}),Ja=new ee({}),Za=new F({props:{name:"class transformers.Wav2Vec2CTCTokenizer",anchor:"transformers.Wav2Vec2CTCTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"word_delimiter_token",val:" = '|'"},{name:"replace_word_delimiter_char",val:" = ' '"},{name:"do_lower_case",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.Wav2Vec2CTCTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.word_delimiter_token",description:`<strong>word_delimiter_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;|&quot;</code>) &#x2014;
The token used for defining the end of a word.`,name:"word_delimiter_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to accept lowercase input and lowercase the output when decoding.</p>
<p>**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"do_lower_case"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L127"}}),Qa=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2CTCTokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_pair"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
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
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/tokenization_utils_base.py#L2431",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.BatchEncoding"
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
  href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),Ya=new F({props:{name:"save_vocabulary",anchor:"transformers.Wav2Vec2CTCTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L597"}}),es=new F({props:{name:"decode",anchor:"transformers.Wav2Vec2CTCTokenizer.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"output_char_offsets",val:": bool = False"},{name:"output_word_offsets",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
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
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L490",returnDescription:`
<p>The list of decoded
sentences. Will be a <code>Wav2Vec2CTCTokenizerOutput</code> when
<code>output_char_offsets == True</code> or <code>output_word_offsets == True</code>.</p>
`,returnType:`
<p><code>str</code> or <code>Wav2Vec2CTCTokenizerOutput</code></p>
`}}),Wo=new he({props:{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.example",$$slots:{default:[bk]},$$scope:{ctx:W}}}),os=new F({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"output_char_offsets",val:": bool = False"},{name:"output_word_offsets",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
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
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L420",returnDescription:`
<p>The list of decoded
sentences. Will be a <code>Wav2Vec2CTCTokenizerOutput</code> when
<code>output_char_offsets == True</code> or <code>output_word_offsets == True</code>.</p>
`,returnType:`
<p><code>List[str]</code> or <code>Wav2Vec2CTCTokenizerOutput</code></p>
`}}),as=new ee({}),ss=new F({props:{name:"class transformers.Wav2Vec2FeatureExtractor",anchor:"transformers.Wav2Vec2FeatureExtractor",parameters:[{name:"feature_size",val:" = 1"},{name:"sampling_rate",val:" = 16000"},{name:"padding_value",val:" = 0.0"},{name:"return_attention_mask",val:" = False"},{name:"do_normalize",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2FeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 1) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.Wav2Vec2FeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.Wav2Vec2FeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values.`,name:"padding_value"},{anchor:"transformers.Wav2Vec2FeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to zero-mean unit-variance normalize the input. Normalizing can help to significantly
improve the performance for some models, <em>e.g.</em>,
<a href="https://huggingface.co/models?search=lv60" rel="nofollow">wav2vec2-lv60</a>.`,name:"do_normalize"},{anchor:"transformers.Wav2Vec2FeatureExtractor.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor.__call__"><strong>call</strong>()</a> should return <code>attention_mask</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Wav2Vec2 models that have set <code>config.feat_extract_norm == &quot;group&quot;</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, have <strong>not</strong> been trained using
<code>attention_mask</code>. For such models, <code>input_values</code> should simply be padded with 0 and no <code>attention_mask</code>
should be passed.</p>
<p>For Wav2Vec2 models that have set <code>config.feat_extract_norm == &quot;layer&quot;</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-large-960h-lv60-self" rel="nofollow">wav2vec2-lv60</a>, <code>attention_mask</code> should be
passed for batched inference.</p>

					</div>`,name:"return_attention_mask"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/feature_extraction_wav2vec2.py#L31"}}),rs=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2FeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"truncation",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
The sequence or batch of sequences to be padded. Each sequence can be a numpy array, a list of float
values, a list of numpy arrays or a list of list of float values.`,name:"raw_speech"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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

					</div>`,name:"return_attention_mask"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>raw_speech</code> input was sampled. It is strongly recommended to pass
<code>sampling_rate</code> at the forward call to prevent silent errors.`,name:"sampling_rate"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.padding_value",description:"<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;",name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/feature_extraction_wav2vec2.py#L102"}}),is=new ee({}),ls=new F({props:{name:"class transformers.Wav2Vec2Processor",anchor:"transformers.Wav2Vec2Processor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>Wav2Vec2FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor">Wav2Vec2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Wav2Vec2Processor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
An instance of <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/processing_wav2vec2.py#L26"}}),ds=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2Processor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/processing_wav2vec2.py#L66"}}),hs=new F({props:{name:"pad",anchor:"transformers.Wav2Vec2Processor.pad",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/processing_wav2vec2.py#L75"}}),fs=new F({props:{name:"from_pretrained",anchor:"transformers.Wav2Vec2Processor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/processing_wav2vec2.py#L47"}}),us=new F({props:{name:"save_pretrained",anchor:"transformers.Wav2Vec2Processor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2Processor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.Wav2Vec2Processor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your processor to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/processing_utils.py#L94"}}),qo=new me({props:{$$slots:{default:[wk]},$$scope:{ctx:W}}}),_s=new F({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2Processor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/processing_wav2vec2.py#L84"}}),bs=new F({props:{name:"decode",anchor:"transformers.Wav2Vec2Processor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/processing_wav2vec2.py#L91"}}),ys=new F({props:{name:"as_target_processor",anchor:"transformers.Wav2Vec2Processor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/processing_wav2vec2.py#L98"}}),ks=new ee({}),Ts=new F({props:{name:"class transformers.Wav2Vec2ProcessorWithLM",anchor:"transformers.Wav2Vec2ProcessorWithLM",parameters:[{name:"feature_extractor",val:": FeatureExtractionMixin"},{name:"tokenizer",val:": PreTrainedTokenizerBase"},{name:"decoder",val:": BeamSearchDecoderCTC"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor">Wav2Vec2FeatureExtractor</a>) &#x2014;
An instance of <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor">Wav2Vec2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer">Wav2Vec2CTCTokenizer</a>) &#x2014;
An instance of <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer">Wav2Vec2CTCTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decoder",description:`<strong>decoder</strong> (<code>pyctcdecode.BeamSearchDecoderCTC</code>) &#x2014;
An instance of <code>pyctcdecode.BeamSearchDecoderCTC</code>. The decoder is a required input.`,name:"decoder"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L63"}}),$s=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2ProcessorWithLM.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L209"}}),Vs=new F({props:{name:"pad",anchor:"transformers.Wav2Vec2ProcessorWithLM.pad",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L219"}}),js=new F({props:{name:"from_pretrained",anchor:"transformers.Wav2Vec2ProcessorWithLM.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/v4.21.1/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both <a href="/docs/transformers/v4.21.1/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor">SequenceFeatureExtractor</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a></li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L107"}}),So=new me({props:{$$slots:{default:[yk]},$$scope:{ctx:W}}}),Cs=new F({props:{name:"save_pretrained",anchor:"transformers.Wav2Vec2ProcessorWithLM.save_pretrained",parameters:[{name:"save_directory",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L103"}}),Es=new F({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode",parameters:[{name:"logits",val:": ndarray"},{name:"num_processes",val:": typing.Optional[int] = None"},{name:"beam_width",val:": typing.Optional[int] = None"},{name:"beam_prune_logp",val:": typing.Optional[float] = None"},{name:"token_min_logp",val:": typing.Optional[float] = None"},{name:"hotwords",val:": typing.Optional[typing.Iterable[str]] = None"},{name:"hotword_weight",val:": typing.Optional[float] = None"},{name:"alpha",val:": typing.Optional[float] = None"},{name:"beta",val:": typing.Optional[float] = None"},{name:"unk_score_offset",val:": typing.Optional[float] = None"},{name:"lm_score_boundary",val:": typing.Optional[bool] = None"},{name:"output_word_offsets",val:": bool = False"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.logits",description:`<strong>logits</strong> (<code>np.ndarray</code>) &#x2014;
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

					</div>`,name:"output_word_offsets"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L229",returnDescription:`
<p><code>Wav2Vec2DecoderWithLMOutput</code> or <code>tuple</code>.</p>
`}}),No=new me({props:{$$slots:{default:[kk]},$$scope:{ctx:W}}}),Ps=new F({props:{name:"decode",anchor:"transformers.Wav2Vec2ProcessorWithLM.decode",parameters:[{name:"logits",val:": ndarray"},{name:"beam_width",val:": typing.Optional[int] = None"},{name:"beam_prune_logp",val:": typing.Optional[float] = None"},{name:"token_min_logp",val:": typing.Optional[float] = None"},{name:"hotwords",val:": typing.Optional[typing.Iterable[str]] = None"},{name:"hotword_weight",val:": typing.Optional[float] = None"},{name:"alpha",val:": typing.Optional[float] = None"},{name:"beta",val:": typing.Optional[float] = None"},{name:"unk_score_offset",val:": typing.Optional[float] = None"},{name:"lm_score_boundary",val:": typing.Optional[bool] = None"},{name:"output_word_offsets",val:": bool = False"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.logits",description:`<strong>logits</strong> (<code>np.ndarray</code>) &#x2014;
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

					</div>`,name:"output_word_offsets"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L346",returnDescription:`
<p><code>Wav2Vec2DecoderWithLMOutput</code> or <code>tuple</code>.</p>
`}}),Io=new he({props:{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.example",$$slots:{default:[Tk]},$$scope:{ctx:W}}}),qs=new F({props:{name:"as_target_processor",anchor:"transformers.Wav2Vec2ProcessorWithLM.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L486"}}),zs=new ee({}),Ms=new F({props:{name:"class transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput",anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput",parameters:[{name:"text",val:": typing.Union[typing.List[str], str]"},{name:"logit_score",val:": typing.Union[typing.List[float], float] = None"},{name:"lm_score",val:": typing.Union[typing.List[float], float] = None"},{name:"word_offsets",val:": typing.Union[typing.List[typing.List[typing.Dict[str, typing.Union[int, str]]]], typing.List[typing.Dict[str, typing.Union[int, str]]]] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.text",description:`<strong>text</strong> (list of <code>str</code> or <code>str</code>) &#x2014;
Decoded logits in text from. Usually the speech transcription.`,name:"text"},{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.logit_score",description:`<strong>logit_score</strong> (list of <code>float</code> or <code>float</code>) &#x2014;
Total logit score of the beam associated with produced text.`,name:"logit_score"},{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.lm_score",description:`<strong>lm_score</strong> (list of <code>float</code>) &#x2014;
Fused lm_score of the beam associated with produced text.`,name:"lm_score"},{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.word_offsets",description:`<strong>word_offsets</strong> (list of <code>List[Dict[str, Union[int, str]]]</code> or <code>List[Dict[str, Union[int, str]]]</code>) &#x2014;
Offsets of the decoded words. In combination with sampling rate and model downsampling rate word offsets
can be used to compute time stamps for each word.`,name:"word_offsets"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L41"}}),Os=new F({props:{name:"class transformers.modeling_outputs.Wav2Vec2BaseModelOutput",anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"extract_features",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput.extract_features",description:`<strong>extract_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, conv_dim[-1])</code>) &#x2014;
Sequence of extracted feature vectors of the last convolutional layer of the model.`,name:"extract_features"},{anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/modeling_outputs.py#L976"}}),Ls=new F({props:{name:"class transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput",anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"projected_states",val:": FloatTensor = None"},{name:"projected_quantized_states",val:": FloatTensor = None"},{name:"codevector_perplexity",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"contrastive_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"diversity_loss",val:": typing.Optional[torch.FloatTensor] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
The diversity loss (L_d) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official paper</a> .`,name:"diversity_loss"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L94"}}),Ss=new F({props:{name:"class transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput",parameters:[{name:"last_hidden_state",val:": ndarray = None"},{name:"extract_features",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.extract_features",description:`<strong>extract_features</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, last_conv_dim)</code>) &#x2014;
Sequence of extracted feature vectors of the last convolutional layer of the model with <code>last_conv_dim</code>
being the dimension of the last convolutional layer.`,name:"extract_features"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L46"}}),Is=new F({props:{name:"replace",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/flax/struct.py#L108"}}),Bs=new F({props:{name:"class transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput",parameters:[{name:"projected_states",val:": ndarray = None"},{name:"projected_quantized_states",val:": ndarray = None"},{name:"codevector_perplexity",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when model is in train mode, <code>jnp.ndarray</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L76"}}),Rs=new F({props:{name:"replace",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/flax/struct.py#L108"}}),Hs=new ee({}),Xs=new F({props:{name:"class transformers.Wav2Vec2Model",anchor:"transformers.Wav2Vec2Model",parameters:[{name:"config",val:": Wav2Vec2Config"}],parametersDescription:[{anchor:"transformers.Wav2Vec2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1182"}}),Ys=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2Model.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2Model.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1268",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Go=new me({props:{$$slots:{default:[$k]},$$scope:{ctx:W}}}),Jo=new he({props:{anchor:"transformers.Wav2Vec2Model.forward.example",$$slots:{default:[xk]},$$scope:{ctx:W}}}),en=new ee({}),tn=new F({props:{name:"class transformers.Wav2Vec2ForCTC",anchor:"transformers.Wav2Vec2ForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1591"}}),rn=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForCTC.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1632",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ko=new me({props:{$$slots:{default:[Wk]},$$scope:{ctx:W}}}),Qo=new he({props:{anchor:"transformers.Wav2Vec2ForCTC.forward.example",$$slots:{default:[Vk]},$$scope:{ctx:W}}}),Yo=new he({props:{anchor:"transformers.Wav2Vec2ForCTC.forward.example-2",$$slots:{default:[jk]},$$scope:{ctx:W}}}),ln=new ee({}),cn=new F({props:{name:"class transformers.Wav2Vec2ForSequenceClassification",anchor:"transformers.Wav2Vec2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1721"}}),un=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1766",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ta=new me({props:{$$slots:{default:[Fk]},$$scope:{ctx:W}}}),oa=new he({props:{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.example",$$slots:{default:[Ck]},$$scope:{ctx:W}}}),aa=new he({props:{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.example-2",$$slots:{default:[Ek]},$$scope:{ctx:W}}}),gn=new ee({}),_n=new F({props:{name:"class transformers.Wav2Vec2ForAudioFrameClassification",anchor:"transformers.Wav2Vec2ForAudioFrameClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1844"}}),Tn=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1888",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),na=new me({props:{$$slots:{default:[Pk]},$$scope:{ctx:W}}}),ra=new he({props:{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.example",$$slots:{default:[qk]},$$scope:{ctx:W}}}),$n=new ee({}),xn=new F({props:{name:"class transformers.Wav2Vec2ForXVector",anchor:"transformers.Wav2Vec2ForXVector",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForXVector.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L2006"}}),En=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForXVector.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForXVector.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForXVector.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForXVector.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L2068",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.XVectorOutput"
>transformers.modeling_outputs.XVectorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.XVectorOutput"
>transformers.modeling_outputs.XVectorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),la=new me({props:{$$slots:{default:[zk]},$$scope:{ctx:W}}}),ca=new he({props:{anchor:"transformers.Wav2Vec2ForXVector.forward.example",$$slots:{default:[Mk]},$$scope:{ctx:W}}}),Pn=new ee({}),qn=new F({props:{name:"class transformers.Wav2Vec2ForPreTraining",anchor:"transformers.Wav2Vec2ForPreTraining",parameters:[{name:"config",val:": Wav2Vec2Config"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1331"}}),Ln=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForPreTraining.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.BoolTensor] = None"},{name:"sampled_negative_indices",val:": typing.Optional[torch.BoolTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForPreTraining.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForPreTraining.forward.mask_time_indices",description:`<strong>mask_time_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices to mask extracted features for contrastive loss. When in training mode, model learns to predict
masked extracted features in <em>config.proj_codevector_dim</em> space.`,name:"mask_time_indices"},{anchor:"transformers.Wav2Vec2ForPreTraining.forward.sampled_negative_indices",description:`<strong>sampled_negative_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length, num_negatives)</code>, <em>optional</em>) &#x2014;
Indices indicating which quantized target vectors are used as negative sampled vectors in contrastive loss.
Required input for pre-training.`,name:"sampled_negative_indices"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1392",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput"
>transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput"
>transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pa=new me({props:{$$slots:{default:[Ak]},$$scope:{ctx:W}}}),ma=new he({props:{anchor:"transformers.Wav2Vec2ForPreTraining.forward.example",$$slots:{default:[Ok]},$$scope:{ctx:W}}}),Dn=new ee({}),Sn=new F({props:{name:"class transformers.TFWav2Vec2Model",anchor:"transformers.TFWav2Vec2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWav2Vec2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1468"}}),fa=new me({props:{$$slots:{default:[Lk]},$$scope:{ctx:W}}}),Un=new F({props:{name:"call",anchor:"transformers.TFWav2Vec2Model.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFWav2Vec2Model.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFWav2Vec2Model.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1474",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ua=new me({props:{$$slots:{default:[Dk]},$$scope:{ctx:W}}}),ga=new he({props:{anchor:"transformers.TFWav2Vec2Model.call.example",$$slots:{default:[Sk]},$$scope:{ctx:W}}}),Rn=new ee({}),Hn=new F({props:{name:"class transformers.TFWav2Vec2ForCTC",anchor:"transformers.TFWav2Vec2ForCTC",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWav2Vec2ForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1571"}}),va=new me({props:{$$slots:{default:[Nk]},$$scope:{ctx:W}}}),Kn=new F({props:{name:"call",anchor:"transformers.TFWav2Vec2ForCTC.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFWav2Vec2ForCTC.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFWav2Vec2ForCTC.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFWav2Vec2ForCTC.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_values</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked),
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1598",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ba=new me({props:{$$slots:{default:[Ik]},$$scope:{ctx:W}}}),wa=new he({props:{anchor:"transformers.TFWav2Vec2ForCTC.call.example",$$slots:{default:[Bk]},$$scope:{ctx:W}}}),Qn=new ee({}),Yn=new F({props:{name:"class transformers.FlaxWav2Vec2Model",anchor:"transformers.FlaxWav2Vec2Model",parameters:[{name:"config",val:": Wav2Vec2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1024)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWav2Vec2Model.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1058"}}),cr=new F({props:{name:"__call__",anchor:"transformers.FlaxWav2Vec2Model.__call__",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2Model.__call__.input_values",description:`<strong>input_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>jnp.ndarray</em>. See <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.FlaxWav2Vec2Model.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L890",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput"
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
  href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput"
>transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ka=new me({props:{$$slots:{default:[Uk]},$$scope:{ctx:W}}}),Ta=new he({props:{anchor:"transformers.FlaxWav2Vec2Model.__call__.example",$$slots:{default:[Rk]},$$scope:{ctx:W}}}),dr=new ee({}),pr=new F({props:{name:"class transformers.FlaxWav2Vec2ForCTC",anchor:"transformers.FlaxWav2Vec2ForCTC",parameters:[{name:"config",val:": Wav2Vec2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1024)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWav2Vec2ForCTC.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1176"}}),wr=new F({props:{name:"__call__",anchor:"transformers.FlaxWav2Vec2ForCTC.__call__",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.input_values",description:`<strong>input_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>jnp.ndarray</em>. See <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L890",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xa=new me({props:{$$slots:{default:[Hk]},$$scope:{ctx:W}}}),Wa=new he({props:{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.example",$$slots:{default:[Xk]},$$scope:{ctx:W}}}),yr=new ee({}),kr=new F({props:{name:"class transformers.FlaxWav2Vec2ForPreTraining",anchor:"transformers.FlaxWav2Vec2ForPreTraining",parameters:[{name:"config",val:": Wav2Vec2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1024)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWav2Vec2ForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1322"}}),Er=new F({props:{name:"__call__",anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"gumbel_temperature",val:": int = 1"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"gumbel_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.input_values",description:`<strong>input_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>jnp.ndarray</em>. See <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1325",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput"
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
  href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput"
>transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ja=new me({props:{$$slots:{default:[Gk]},$$scope:{ctx:W}}}),Fa=new he({props:{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.example",$$slots:{default:[Jk]},$$scope:{ctx:W}}}),{c(){c=a("meta"),b=d(),f=a("h1"),h=a("a"),v=a("span"),w(l.$$.fragment),u=d(),j=a("span"),D=r("Wav2Vec2"),q=d(),C=a("h2"),A=a("a"),O=a("span"),w(H.$$.fragment),S=d(),P=a("span"),je=r("Overview"),ge=d(),B=a("p"),U=r("The Wav2Vec2 model was proposed in "),_e=a("a"),Se=r("wav2vec 2.0: A Framework for Self-Supervised Learning of Speech Representations"),z=r(" by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael Auli."),I=d(),Fe=a("p"),ve=r("The abstract from the paper is the following:"),Re=d(),Ce=a("p"),oe=a("em"),lt=r(`We show for the first time that learning powerful representations from speech audio alone followed by fine-tuning on
transcribed speech can outperform the best semi-supervised methods while being conceptually simpler. wav2vec 2.0 masks
the speech input in the latent space and solves a contrastive task defined over a quantization of the latent
representations which are jointly learned. Experiments using all labeled data of Librispeech achieve 1.8/3.3 WER on the
clean/other test sets. When lowering the amount of labeled data to one hour, wav2vec 2.0 outperforms the previous state
of the art on the 100 hour subset while using 100 times less labeled data. Using just ten minutes of labeled data and
pre-training on 53k hours of unlabeled data still achieves 4.8/8.2 WER. This demonstrates the feasibility of speech
recognition with limited amounts of labeled data.`),He=d(),L=a("p"),ct=r("Tips:"),de=d(),pe=a("ul"),Ne=a("li"),be=r("Wav2Vec2 is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),dt=d(),we=a("li"),ae=r(`Wav2Vec2 model was trained using connectionist temporal classification (CTC) so the model output has to be decoded
using `),Ee=a("a"),ye=r("Wav2Vec2CTCTokenizer"),pt=r("."),V=d(),E=a("p"),Ie=r("This model was contributed by "),Be=a("a"),Mt=r("patrickvonplaten"),se=r("."),$t=d(),ke=a("h2"),Pe=a("a"),X=a("span"),w(G.$$.fragment),At=d(),mt=a("span"),Te=r("Wav2Vec2Config"),xt=d(),J=a("div"),w($e.$$.fragment),Ot=d(),Lt=a("p"),am=r("This is the configuration class to store the configuration of a "),Sr=a("a"),sm=r("Wav2Vec2Model"),nm=r(`. It is used to instantiate an
Wav2Vec2 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Wav2Vec2
`),Ga=a("a"),rm=r("facebook/wav2vec2-base-960h"),im=r(" architecture."),lm=d(),Dt=a("p"),cm=r("Configuration objects inherit from "),Nr=a("a"),dm=r("PretrainedConfig"),pm=r(` and can be used to control the model outputs. Read the
documentation from `),Ir=a("a"),mm=r("PretrainedConfig"),hm=r(" for more information."),fm=d(),w(To.$$.fragment),sd=d(),St=a("h2"),$o=a("a"),Qi=a("span"),w(Ja.$$.fragment),um=d(),Yi=a("span"),gm=r("Wav2Vec2CTCTokenizer"),nd=d(),Z=a("div"),w(Za.$$.fragment),_m=d(),el=a("p"),vm=r("Constructs a Wav2Vec2CTC tokenizer."),bm=d(),Ka=a("p"),wm=r("This tokenizer inherits from "),Br=a("a"),ym=r("PreTrainedTokenizer"),km=r(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),Tm=d(),xo=a("div"),w(Qa.$$.fragment),$m=d(),tl=a("p"),xm=r(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),Wm=d(),Ur=a("div"),w(Ya.$$.fragment),Vm=d(),Xe=a("div"),w(es.$$.fragment),jm=d(),ol=a("p"),Fm=r(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),Cm=d(),ts=a("p"),Em=r("Similar to doing "),al=a("code"),Pm=r("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),qm=r("."),zm=d(),w(Wo.$$.fragment),Mm=d(),Vo=a("div"),w(os.$$.fragment),Am=d(),sl=a("p"),Om=r("Convert a list of lists of token ids into a list of strings by calling decode."),rd=d(),Nt=a("h2"),jo=a("a"),nl=a("span"),w(as.$$.fragment),Lm=d(),rl=a("span"),Dm=r("Wav2Vec2FeatureExtractor"),id=d(),Ue=a("div"),w(ss.$$.fragment),Sm=d(),il=a("p"),Nm=r("Constructs a Wav2Vec2 feature extractor."),Im=d(),ns=a("p"),Bm=r("This feature extractor inherits from "),Rr=a("a"),Um=r("SequenceFeatureExtractor"),Rm=r(` which contains
most of the main methods. Users should refer to this superclass for more information regarding those methods.`),Hm=d(),Fo=a("div"),w(rs.$$.fragment),Xm=d(),ll=a("p"),Gm=r("Main method to featurize and prepare for the model one or several sequence(s). sequences."),ld=d(),It=a("h2"),Co=a("a"),cl=a("span"),w(is.$$.fragment),Jm=d(),dl=a("span"),Zm=r("Wav2Vec2Processor"),cd=d(),M=a("div"),w(ls.$$.fragment),Km=d(),pl=a("p"),Qm=r(`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor and a Wav2Vec2 CTC tokenizer into a single
processor.`),Ym=d(),qe=a("p"),Hr=a("a"),eh=r("Wav2Vec2Processor"),th=r(" offers all the functionalities of "),Xr=a("a"),oh=r("Wav2Vec2FeatureExtractor"),ah=r(" and "),Gr=a("a"),sh=r("PreTrainedTokenizer"),nh=r(`.
See the docstring of `),cs=a("a"),ml=a("strong"),rh=r("call"),ih=r("()"),lh=r(" and "),Jr=a("a"),ch=r("decode()"),dh=r(" for more information."),ph=d(),Eo=a("div"),w(ds.$$.fragment),mh=d(),ht=a("p"),hh=r(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),ps=a("a"),hl=a("strong"),fh=r("call"),uh=r("()"),gh=r(` and returns its output. If used in the context
`),Zr=a("a"),_h=r("as_target_processor()"),vh=r(` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),ms=a("a"),fl=a("strong"),bh=r("call"),wh=r("()"),yh=r(". Please refer to the docstring of the above two methods for more information."),kh=d(),Po=a("div"),w(hs.$$.fragment),Th=d(),ft=a("p"),$h=r(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),Kr=a("a"),xh=r("pad()"),Wh=r(` and returns its output. If used in the context
`),Qr=a("a"),Vh=r("as_target_processor()"),jh=r(` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),Yr=a("a"),Fh=r("pad()"),Ch=r(". Please refer to the docstring of the above two methods for more information."),Eh=d(),ei=a("div"),w(fs.$$.fragment),Ph=d(),Wt=a("div"),w(us.$$.fragment),qh=d(),gs=a("p"),zh=r(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),ti=a("a"),Mh=r("from_pretrained()"),Ah=r(" method."),Oh=d(),w(qo.$$.fragment),Lh=d(),zo=a("div"),w(_s.$$.fragment),Dh=d(),vs=a("p"),Sh=r("This method forwards all its arguments to PreTrainedTokenizer\u2019s "),oi=a("a"),Nh=r("batch_decode()"),Ih=r(`. Please
refer to the docstring of this method for more information.`),Bh=d(),Mo=a("div"),w(bs.$$.fragment),Uh=d(),ws=a("p"),Rh=r("This method forwards all its arguments to PreTrainedTokenizer\u2019s "),ai=a("a"),Hh=r("decode()"),Xh=r(`. Please refer
to the docstring of this method for more information.`),Gh=d(),Ao=a("div"),w(ys.$$.fragment),Jh=d(),ul=a("p"),Zh=r(`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Wav2Vec2.`),dd=d(),Bt=a("h2"),Oo=a("a"),gl=a("span"),w(ks.$$.fragment),Kh=d(),_l=a("span"),Qh=r("Wav2Vec2ProcessorWithLM"),pd=d(),N=a("div"),w(Ts.$$.fragment),Yh=d(),vl=a("p"),ef=r(`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor, a Wav2Vec2 CTC tokenizer and a decoder
with language model support into a single processor for language model boosted speech recognition decoding.`),tf=d(),Lo=a("div"),w($s.$$.fragment),of=d(),ut=a("p"),af=r(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),xs=a("a"),bl=a("strong"),sf=r("call"),nf=r("()"),rf=r(` and returns its output. If used in the context
`),si=a("a"),lf=r("as_target_processor()"),cf=r(` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),Ws=a("a"),wl=a("strong"),df=r("call"),pf=r("()"),mf=r(`. Please refer to the docstring of the above two
methods for more information.`),hf=d(),Do=a("div"),w(Vs.$$.fragment),ff=d(),gt=a("p"),uf=r(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),ni=a("a"),gf=r("pad()"),_f=r(` and returns its output. If used in the context
`),ri=a("a"),vf=r("as_target_processor()"),bf=r(` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),ii=a("a"),wf=r("pad()"),yf=r(`. Please refer to the docstring of the above two methods
for more information.`),kf=d(),Vt=a("div"),w(js.$$.fragment),Tf=d(),Fs=a("p"),$f=r("Instantiate a "),li=a("a"),xf=r("Wav2Vec2ProcessorWithLM"),Wf=r(" from a pretrained Wav2Vec2 processor."),Vf=d(),w(So.$$.fragment),jf=d(),ci=a("div"),w(Cs.$$.fragment),Ff=d(),jt=a("div"),w(Es.$$.fragment),Cf=d(),yl=a("p"),Ef=r("Batch decode output logits to audio transcription with language model support."),Pf=d(),w(No.$$.fragment),qf=d(),Ft=a("div"),w(Ps.$$.fragment),zf=d(),kl=a("p"),Mf=r("Decode output logits to audio transcription with language model support."),Af=d(),w(Io.$$.fragment),Of=d(),Bo=a("div"),w(qs.$$.fragment),Lf=d(),Tl=a("p"),Df=r(`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Wav2Vec2.`),md=d(),Ut=a("h2"),Uo=a("a"),$l=a("span"),w(zs.$$.fragment),Sf=d(),xl=a("span"),Nf=r("Wav2Vec2 specific outputs"),hd=d(),Rt=a("div"),w(Ms.$$.fragment),If=d(),As=a("p"),Bf=r("Output type of "),Wl=a("code"),Uf=r("Wav2Vec2DecoderWithLM"),Rf=r(", with transcription."),fd=d(),Ht=a("div"),w(Os.$$.fragment),Hf=d(),Vl=a("p"),Xf=r("Base class for models that have been trained with the Wav2Vec2 loss objective."),ud=d(),Xt=a("div"),w(Ls.$$.fragment),Gf=d(),Ds=a("p"),Jf=r("Output type of "),di=a("a"),Zf=r("Wav2Vec2ForPreTraining"),Kf=r(", with potential hidden states and attentions."),gd=d(),_t=a("div"),w(Ss.$$.fragment),Qf=d(),Ns=a("p"),Yf=r("Output type of "),jl=a("code"),eu=r("FlaxWav2Vec2BaseModelOutput"),tu=r(", with potential hidden states and attentions."),ou=d(),Ro=a("div"),w(Is.$$.fragment),au=d(),Fl=a("p"),su=r("\u201CReturns a new object replacing the specified fields with new values."),_d=d(),vt=a("div"),w(Bs.$$.fragment),nu=d(),Us=a("p"),ru=r("Output type of "),Cl=a("code"),iu=r("FlaxWav2Vec2ForPreTrainingOutput"),lu=r(", with potential hidden states and attentions."),cu=d(),Ho=a("div"),w(Rs.$$.fragment),du=d(),El=a("p"),pu=r("\u201CReturns a new object replacing the specified fields with new values."),vd=d(),Gt=a("h2"),Xo=a("a"),Pl=a("span"),w(Hs.$$.fragment),mu=d(),ql=a("span"),hu=r("Wav2Vec2Model"),bd=d(),xe=a("div"),w(Xs.$$.fragment),fu=d(),Gs=a("p"),uu=r(`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),Js=a("a"),gu=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),_u=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),vu=d(),Zs=a("p"),bu=r("This model inherits from "),pi=a("a"),wu=r("PreTrainedModel"),yu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ku=d(),Ks=a("p"),Tu=r("This model is a PyTorch "),Qs=a("a"),$u=r("torch.nn.Module"),xu=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wu=d(),Ge=a("div"),w(Ys.$$.fragment),Vu=d(),Jt=a("p"),ju=r("The "),mi=a("a"),Fu=r("Wav2Vec2Model"),Cu=r(" forward method, overrides the "),zl=a("code"),Eu=r("__call__"),Pu=r(" special method."),qu=d(),w(Go.$$.fragment),zu=d(),w(Jo.$$.fragment),wd=d(),Zt=a("h2"),Zo=a("a"),Ml=a("span"),w(en.$$.fragment),Mu=d(),Al=a("span"),Au=r("Wav2Vec2ForCTC"),yd=d(),We=a("div"),w(tn.$$.fragment),Ou=d(),Kt=a("p"),Lu=r("Wav2Vec2 Model with a "),Ol=a("code"),Du=r("language modeling"),Su=r(` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),on=a("a"),Nu=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Iu=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Bu=d(),an=a("p"),Uu=r("This model inherits from "),hi=a("a"),Ru=r("PreTrainedModel"),Hu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Xu=d(),sn=a("p"),Gu=r("This model is a PyTorch "),nn=a("a"),Ju=r("torch.nn.Module"),Zu=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ku=d(),ze=a("div"),w(rn.$$.fragment),Qu=d(),Qt=a("p"),Yu=r("The "),fi=a("a"),eg=r("Wav2Vec2ForCTC"),tg=r(" forward method, overrides the "),Ll=a("code"),og=r("__call__"),ag=r(" special method."),sg=d(),w(Ko.$$.fragment),ng=d(),w(Qo.$$.fragment),rg=d(),w(Yo.$$.fragment),kd=d(),Yt=a("h2"),ea=a("a"),Dl=a("span"),w(ln.$$.fragment),ig=d(),Sl=a("span"),lg=r("Wav2Vec2ForSequenceClassification"),Td=d(),ne=a("div"),w(cn.$$.fragment),cg=d(),Nl=a("p"),dg=r(`Wav2Vec2 Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),pg=d(),dn=a("p"),mg=r("Wav2Vec2 was proposed in "),pn=a("a"),hg=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),fg=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),ug=d(),mn=a("p"),gg=r("This model inherits from "),ui=a("a"),_g=r("PreTrainedModel"),vg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),bg=d(),hn=a("p"),wg=r("This model is a PyTorch "),fn=a("a"),yg=r("torch.nn.Module"),kg=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Tg=d(),Me=a("div"),w(un.$$.fragment),$g=d(),eo=a("p"),xg=r("The "),gi=a("a"),Wg=r("Wav2Vec2ForSequenceClassification"),Vg=r(" forward method, overrides the "),Il=a("code"),jg=r("__call__"),Fg=r(" special method."),Cg=d(),w(ta.$$.fragment),Eg=d(),w(oa.$$.fragment),Pg=d(),w(aa.$$.fragment),$d=d(),to=a("h2"),sa=a("a"),Bl=a("span"),w(gn.$$.fragment),qg=d(),Ul=a("span"),zg=r("Wav2Vec2ForAudioFrameClassification"),xd=d(),re=a("div"),w(_n.$$.fragment),Mg=d(),Rl=a("p"),Ag=r("Wav2Vec2 Model with a frame classification head on top for tasks like Speaker Diarization."),Og=d(),vn=a("p"),Lg=r("Wav2Vec2 was proposed in "),bn=a("a"),Dg=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Sg=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Ng=d(),wn=a("p"),Ig=r("This model inherits from "),_i=a("a"),Bg=r("PreTrainedModel"),Ug=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Rg=d(),yn=a("p"),Hg=r("This model is a PyTorch "),kn=a("a"),Xg=r("torch.nn.Module"),Gg=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Jg=d(),Je=a("div"),w(Tn.$$.fragment),Zg=d(),oo=a("p"),Kg=r("The "),vi=a("a"),Qg=r("Wav2Vec2ForAudioFrameClassification"),Yg=r(" forward method, overrides the "),Hl=a("code"),e_=r("__call__"),t_=r(" special method."),o_=d(),w(na.$$.fragment),a_=d(),w(ra.$$.fragment),Wd=d(),ao=a("h2"),ia=a("a"),Xl=a("span"),w($n.$$.fragment),s_=d(),Gl=a("span"),n_=r("Wav2Vec2ForXVector"),Vd=d(),ie=a("div"),w(xn.$$.fragment),r_=d(),Jl=a("p"),i_=r("Wav2Vec2 Model with an XVector feature extraction head on top for tasks like Speaker Verification."),l_=d(),Wn=a("p"),c_=r("Wav2Vec2 was proposed in "),Vn=a("a"),d_=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),p_=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),m_=d(),jn=a("p"),h_=r("This model inherits from "),bi=a("a"),f_=r("PreTrainedModel"),u_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),g_=d(),Fn=a("p"),__=r("This model is a PyTorch "),Cn=a("a"),v_=r("torch.nn.Module"),b_=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),w_=d(),Ze=a("div"),w(En.$$.fragment),y_=d(),so=a("p"),k_=r("The "),wi=a("a"),T_=r("Wav2Vec2ForXVector"),$_=r(" forward method, overrides the "),Zl=a("code"),x_=r("__call__"),W_=r(" special method."),V_=d(),w(la.$$.fragment),j_=d(),w(ca.$$.fragment),jd=d(),no=a("h2"),da=a("a"),Kl=a("span"),w(Pn.$$.fragment),F_=d(),Ql=a("span"),C_=r("Wav2Vec2ForPreTraining"),Fd=d(),Ve=a("div"),w(qn.$$.fragment),E_=d(),ro=a("p"),P_=r("Wav2Vec2 Model with a quantizer and "),Yl=a("code"),q_=r("VQ"),z_=r(` head on top.
Wav2Vec2 was proposed in `),zn=a("a"),M_=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),A_=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),O_=d(),Mn=a("p"),L_=r("This model inherits from "),yi=a("a"),D_=r("PreTrainedModel"),S_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),N_=d(),An=a("p"),I_=r("This model is a PyTorch "),On=a("a"),B_=r("torch.nn.Module"),U_=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),R_=d(),Ke=a("div"),w(Ln.$$.fragment),H_=d(),io=a("p"),X_=r("The "),ki=a("a"),G_=r("Wav2Vec2ForPreTraining"),J_=r(" forward method, overrides the "),ec=a("code"),Z_=r("__call__"),K_=r(" special method."),Q_=d(),w(pa.$$.fragment),Y_=d(),w(ma.$$.fragment),Cd=d(),lo=a("h2"),ha=a("a"),tc=a("span"),w(Dn.$$.fragment),ev=d(),oc=a("span"),tv=r("TFWav2Vec2Model"),Ed=d(),le=a("div"),w(Sn.$$.fragment),ov=d(),ac=a("p"),av=r("The bare TFWav2Vec2 Model transformer outputing raw hidden-states without any specific head on top."),sv=d(),Nn=a("p"),nv=r("This model inherits from "),Ti=a("a"),rv=r("TFPreTrainedModel"),iv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lv=d(),In=a("p"),cv=r("This model is also a "),Bn=a("a"),dv=r("tf.keras.Model"),pv=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mv=d(),w(fa.$$.fragment),hv=d(),Qe=a("div"),w(Un.$$.fragment),fv=d(),co=a("p"),uv=r("The "),$i=a("a"),gv=r("TFWav2Vec2Model"),_v=r(" forward method, overrides the "),sc=a("code"),vv=r("__call__"),bv=r(" special method."),wv=d(),w(ua.$$.fragment),yv=d(),w(ga.$$.fragment),Pd=d(),po=a("h2"),_a=a("a"),nc=a("span"),w(Rn.$$.fragment),kv=d(),rc=a("span"),Tv=r("TFWav2Vec2ForCTC"),qd=d(),ce=a("div"),w(Hn.$$.fragment),$v=d(),Xn=a("p"),xv=r("TFWav2Vec2 Model with a "),ic=a("code"),Wv=r("language modeling"),Vv=r(" head on top for Connectionist Temporal Classification (CTC)."),jv=d(),Gn=a("p"),Fv=r("This model inherits from "),xi=a("a"),Cv=r("TFPreTrainedModel"),Ev=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pv=d(),Jn=a("p"),qv=r("This model is also a "),Zn=a("a"),zv=r("tf.keras.Model"),Mv=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Av=d(),w(va.$$.fragment),Ov=d(),Ye=a("div"),w(Kn.$$.fragment),Lv=d(),mo=a("p"),Dv=r("The "),Wi=a("a"),Sv=r("TFWav2Vec2ForCTC"),Nv=r(" forward method, overrides the "),lc=a("code"),Iv=r("__call__"),Bv=r(" special method."),Uv=d(),w(ba.$$.fragment),Rv=d(),w(wa.$$.fragment),zd=d(),ho=a("h2"),ya=a("a"),cc=a("span"),w(Qn.$$.fragment),Hv=d(),dc=a("span"),Xv=r("FlaxWav2Vec2Model"),Md=d(),K=a("div"),w(Yn.$$.fragment),Gv=d(),er=a("p"),Jv=r(`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),tr=a("a"),Zv=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Kv=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Qv=d(),or=a("p"),Yv=r("This model inherits from "),Vi=a("a"),e2=r("FlaxPreTrainedModel"),t2=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),o2=d(),ar=a("p"),a2=r(`This model is also a Flax Linen
`),sr=a("a"),s2=r("flax.nn.Module"),n2=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),r2=d(),pc=a("p"),i2=r("Finally, this model supports inherent JAX features such as:"),l2=d(),bt=a("ul"),mc=a("li"),nr=a("a"),c2=r("Just-In-Time (JIT) compilation"),d2=d(),hc=a("li"),rr=a("a"),p2=r("Automatic Differentiation"),m2=d(),fc=a("li"),ir=a("a"),h2=r("Vectorization"),f2=d(),uc=a("li"),lr=a("a"),u2=r("Parallelization"),g2=d(),et=a("div"),w(cr.$$.fragment),_2=d(),fo=a("p"),v2=r("The "),gc=a("code"),b2=r("FlaxWav2Vec2PreTrainedModel"),w2=r(" forward method, overrides the "),_c=a("code"),y2=r("__call__"),k2=r(" special method."),T2=d(),w(ka.$$.fragment),$2=d(),w(Ta.$$.fragment),Ad=d(),uo=a("h2"),$a=a("a"),vc=a("span"),w(dr.$$.fragment),x2=d(),bc=a("span"),W2=r("FlaxWav2Vec2ForCTC"),Od=d(),Q=a("div"),w(pr.$$.fragment),V2=d(),go=a("p"),j2=r("Wav2Vec2 Model with a "),wc=a("code"),F2=r("language modeling"),C2=r(` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),mr=a("a"),E2=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),P2=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),q2=d(),hr=a("p"),z2=r("This model inherits from "),ji=a("a"),M2=r("FlaxPreTrainedModel"),A2=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),O2=d(),fr=a("p"),L2=r(`This model is also a Flax Linen
`),ur=a("a"),D2=r("flax.nn.Module"),S2=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),N2=d(),yc=a("p"),I2=r("Finally, this model supports inherent JAX features such as:"),B2=d(),wt=a("ul"),kc=a("li"),gr=a("a"),U2=r("Just-In-Time (JIT) compilation"),R2=d(),Tc=a("li"),_r=a("a"),H2=r("Automatic Differentiation"),X2=d(),$c=a("li"),vr=a("a"),G2=r("Vectorization"),J2=d(),xc=a("li"),br=a("a"),Z2=r("Parallelization"),K2=d(),tt=a("div"),w(wr.$$.fragment),Q2=d(),_o=a("p"),Y2=r("The "),Wc=a("code"),eb=r("FlaxWav2Vec2PreTrainedModel"),tb=r(" forward method, overrides the "),Vc=a("code"),ob=r("__call__"),ab=r(" special method."),sb=d(),w(xa.$$.fragment),nb=d(),w(Wa.$$.fragment),Ld=d(),vo=a("h2"),Va=a("a"),jc=a("span"),w(yr.$$.fragment),rb=d(),Fc=a("span"),ib=r("FlaxWav2Vec2ForPreTraining"),Dd=d(),Y=a("div"),w(kr.$$.fragment),lb=d(),bo=a("p"),cb=r("Wav2Vec2 Model with a quantizer and "),Cc=a("code"),db=r("VQ"),pb=r(` head on top.
Wav2Vec2 was proposed in `),Tr=a("a"),mb=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),hb=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),fb=d(),$r=a("p"),ub=r("This model inherits from "),Fi=a("a"),gb=r("FlaxPreTrainedModel"),_b=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vb=d(),xr=a("p"),bb=r(`This model is also a Flax Linen
`),Wr=a("a"),wb=r("flax.nn.Module"),yb=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),kb=d(),Ec=a("p"),Tb=r("Finally, this model supports inherent JAX features such as:"),$b=d(),yt=a("ul"),Pc=a("li"),Vr=a("a"),xb=r("Just-In-Time (JIT) compilation"),Wb=d(),qc=a("li"),jr=a("a"),Vb=r("Automatic Differentiation"),jb=d(),zc=a("li"),Fr=a("a"),Fb=r("Vectorization"),Cb=d(),Mc=a("li"),Cr=a("a"),Eb=r("Parallelization"),Pb=d(),ot=a("div"),w(Er.$$.fragment),qb=d(),wo=a("p"),zb=r("The "),Ci=a("a"),Mb=r("FlaxWav2Vec2ForPreTraining"),Ab=r(" forward method, overrides the "),Ac=a("code"),Ob=r("__call__"),Lb=r(" special method."),Db=d(),w(ja.$$.fragment),Sb=d(),w(Fa.$$.fragment),this.h()},l(o){const g=gk('[data-svelte="svelte-1phssyn"]',document.head);c=s(g,"META",{name:!0,content:!0}),g.forEach(t),b=p(o),f=s(o,"H1",{class:!0});var Pr=n(f);h=s(Pr,"A",{id:!0,class:!0,href:!0});var Oc=n(h);v=s(Oc,"SPAN",{});var Lc=n(v);y(l.$$.fragment,Lc),Lc.forEach(t),Oc.forEach(t),u=p(Pr),j=s(Pr,"SPAN",{});var Dc=n(j);D=i(Dc,"Wav2Vec2"),Dc.forEach(t),Pr.forEach(t),q=p(o),C=s(o,"H2",{class:!0});var qr=n(C);A=s(qr,"A",{id:!0,class:!0,href:!0});var Sc=n(A);O=s(Sc,"SPAN",{});var Nc=n(O);y(H.$$.fragment,Nc),Nc.forEach(t),Sc.forEach(t),S=p(qr),P=s(qr,"SPAN",{});var Ic=n(P);je=i(Ic,"Overview"),Ic.forEach(t),qr.forEach(t),ge=p(o),B=s(o,"P",{});var zr=n(B);U=i(zr,"The Wav2Vec2 model was proposed in "),_e=s(zr,"A",{href:!0,rel:!0});var Bc=n(_e);Se=i(Bc,"wav2vec 2.0: A Framework for Self-Supervised Learning of Speech Representations"),Bc.forEach(t),z=i(zr," by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael Auli."),zr.forEach(t),I=p(o),Fe=s(o,"P",{});var Uc=n(Fe);ve=i(Uc,"The abstract from the paper is the following:"),Uc.forEach(t),Re=p(o),Ce=s(o,"P",{});var Rc=n(Ce);oe=s(Rc,"EM",{});var Hc=n(oe);lt=i(Hc,`We show for the first time that learning powerful representations from speech audio alone followed by fine-tuning on
transcribed speech can outperform the best semi-supervised methods while being conceptually simpler. wav2vec 2.0 masks
the speech input in the latent space and solves a contrastive task defined over a quantization of the latent
representations which are jointly learned. Experiments using all labeled data of Librispeech achieve 1.8/3.3 WER on the
clean/other test sets. When lowering the amount of labeled data to one hour, wav2vec 2.0 outperforms the previous state
of the art on the 100 hour subset while using 100 times less labeled data. Using just ten minutes of labeled data and
pre-training on 53k hours of unlabeled data still achieves 4.8/8.2 WER. This demonstrates the feasibility of speech
recognition with limited amounts of labeled data.`),Hc.forEach(t),Rc.forEach(t),He=p(o),L=s(o,"P",{});var Xc=n(L);ct=i(Xc,"Tips:"),Xc.forEach(t),de=p(o),pe=s(o,"UL",{});var Mr=n(pe);Ne=s(Mr,"LI",{});var Gc=n(Ne);be=i(Gc,"Wav2Vec2 is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),Gc.forEach(t),dt=p(Mr),we=s(Mr,"LI",{});var Ar=n(we);ae=i(Ar,`Wav2Vec2 model was trained using connectionist temporal classification (CTC) so the model output has to be decoded
using `),Ee=s(Ar,"A",{href:!0});var Jc=n(Ee);ye=i(Jc,"Wav2Vec2CTCTokenizer"),Jc.forEach(t),pt=i(Ar,"."),Ar.forEach(t),Mr.forEach(t),V=p(o),E=s(o,"P",{});var Or=n(E);Ie=i(Or,"This model was contributed by "),Be=s(Or,"A",{href:!0,rel:!0});var Zc=n(Be);Mt=i(Zc,"patrickvonplaten"),Zc.forEach(t),se=i(Or,"."),Or.forEach(t),$t=p(o),ke=s(o,"H2",{class:!0});var Lr=n(ke);Pe=s(Lr,"A",{id:!0,class:!0,href:!0});var Kc=n(Pe);X=s(Kc,"SPAN",{});var Qc=n(X);y(G.$$.fragment,Qc),Qc.forEach(t),Kc.forEach(t),At=p(Lr),mt=s(Lr,"SPAN",{});var Yc=n(mt);Te=i(Yc,"Wav2Vec2Config"),Yc.forEach(t),Lr.forEach(t),xt=p(o),J=s(o,"DIV",{class:!0});var kt=n(J);y($e.$$.fragment,kt),Ot=p(kt),Lt=s(kt,"P",{});var yo=n(Lt);am=i(yo,"This is the configuration class to store the configuration of a "),Sr=s(yo,"A",{href:!0});var ed=n(Sr);sm=i(ed,"Wav2Vec2Model"),ed.forEach(t),nm=i(yo,`. It is used to instantiate an
Wav2Vec2 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Wav2Vec2
`),Ga=s(yo,"A",{href:!0,rel:!0});var td=n(Ga);rm=i(td,"facebook/wav2vec2-base-960h"),td.forEach(t),im=i(yo," architecture."),yo.forEach(t),lm=p(kt),Dt=s(kt,"P",{});var ko=n(Dt);cm=i(ko,"Configuration objects inherit from "),Nr=s(ko,"A",{href:!0});var od=n(Nr);dm=i(od,"PretrainedConfig"),od.forEach(t),pm=i(ko,` and can be used to control the model outputs. Read the
documentation from `),Ir=s(ko,"A",{href:!0});var ad=n(Ir);mm=i(ad,"PretrainedConfig"),ad.forEach(t),hm=i(ko," for more information."),ko.forEach(t),fm=p(kt),y(To.$$.fragment,kt),kt.forEach(t),sd=p(o),St=s(o,"H2",{class:!0});var Dr=n(St);$o=s(Dr,"A",{id:!0,class:!0,href:!0});var Hb=n($o);Qi=s(Hb,"SPAN",{});var Xb=n(Qi);y(Ja.$$.fragment,Xb),Xb.forEach(t),Hb.forEach(t),um=p(Dr),Yi=s(Dr,"SPAN",{});var Gb=n(Yi);gm=i(Gb,"Wav2Vec2CTCTokenizer"),Gb.forEach(t),Dr.forEach(t),nd=p(o),Z=s(o,"DIV",{class:!0});var Ae=n(Z);y(Za.$$.fragment,Ae),_m=p(Ae),el=s(Ae,"P",{});var Jb=n(el);vm=i(Jb,"Constructs a Wav2Vec2CTC tokenizer."),Jb.forEach(t),bm=p(Ae),Ka=s(Ae,"P",{});var Nd=n(Ka);wm=i(Nd,"This tokenizer inherits from "),Br=s(Nd,"A",{href:!0});var Zb=n(Br);ym=i(Zb,"PreTrainedTokenizer"),Zb.forEach(t),km=i(Nd,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),Nd.forEach(t),Tm=p(Ae),xo=s(Ae,"DIV",{class:!0});var Id=n(xo);y(Qa.$$.fragment,Id),$m=p(Id),tl=s(Id,"P",{});var Kb=n(tl);xm=i(Kb,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),Kb.forEach(t),Id.forEach(t),Wm=p(Ae),Ur=s(Ae,"DIV",{class:!0});var Qb=n(Ur);y(Ya.$$.fragment,Qb),Qb.forEach(t),Vm=p(Ae),Xe=s(Ae,"DIV",{class:!0});var Ca=n(Xe);y(es.$$.fragment,Ca),jm=p(Ca),ol=s(Ca,"P",{});var Yb=n(ol);Fm=i(Yb,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),Yb.forEach(t),Cm=p(Ca),ts=s(Ca,"P",{});var Bd=n(ts);Em=i(Bd,"Similar to doing "),al=s(Bd,"CODE",{});var ew=n(al);Pm=i(ew,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),ew.forEach(t),qm=i(Bd,"."),Bd.forEach(t),zm=p(Ca),y(Wo.$$.fragment,Ca),Ca.forEach(t),Mm=p(Ae),Vo=s(Ae,"DIV",{class:!0});var Ud=n(Vo);y(os.$$.fragment,Ud),Am=p(Ud),sl=s(Ud,"P",{});var tw=n(sl);Om=i(tw,"Convert a list of lists of token ids into a list of strings by calling decode."),tw.forEach(t),Ud.forEach(t),Ae.forEach(t),rd=p(o),Nt=s(o,"H2",{class:!0});var Rd=n(Nt);jo=s(Rd,"A",{id:!0,class:!0,href:!0});var ow=n(jo);nl=s(ow,"SPAN",{});var aw=n(nl);y(as.$$.fragment,aw),aw.forEach(t),ow.forEach(t),Lm=p(Rd),rl=s(Rd,"SPAN",{});var sw=n(rl);Dm=i(sw,"Wav2Vec2FeatureExtractor"),sw.forEach(t),Rd.forEach(t),id=p(o),Ue=s(o,"DIV",{class:!0});var Ea=n(Ue);y(ss.$$.fragment,Ea),Sm=p(Ea),il=s(Ea,"P",{});var nw=n(il);Nm=i(nw,"Constructs a Wav2Vec2 feature extractor."),nw.forEach(t),Im=p(Ea),ns=s(Ea,"P",{});var Hd=n(ns);Bm=i(Hd,"This feature extractor inherits from "),Rr=s(Hd,"A",{href:!0});var rw=n(Rr);Um=i(rw,"SequenceFeatureExtractor"),rw.forEach(t),Rm=i(Hd,` which contains
most of the main methods. Users should refer to this superclass for more information regarding those methods.`),Hd.forEach(t),Hm=p(Ea),Fo=s(Ea,"DIV",{class:!0});var Xd=n(Fo);y(rs.$$.fragment,Xd),Xm=p(Xd),ll=s(Xd,"P",{});var iw=n(ll);Gm=i(iw,"Main method to featurize and prepare for the model one or several sequence(s). sequences."),iw.forEach(t),Xd.forEach(t),Ea.forEach(t),ld=p(o),It=s(o,"H2",{class:!0});var Gd=n(It);Co=s(Gd,"A",{id:!0,class:!0,href:!0});var lw=n(Co);cl=s(lw,"SPAN",{});var cw=n(cl);y(is.$$.fragment,cw),cw.forEach(t),lw.forEach(t),Jm=p(Gd),dl=s(Gd,"SPAN",{});var dw=n(dl);Zm=i(dw,"Wav2Vec2Processor"),dw.forEach(t),Gd.forEach(t),cd=p(o),M=s(o,"DIV",{class:!0});var R=n(M);y(ls.$$.fragment,R),Km=p(R),pl=s(R,"P",{});var pw=n(pl);Qm=i(pw,`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor and a Wav2Vec2 CTC tokenizer into a single
processor.`),pw.forEach(t),Ym=p(R),qe=s(R,"P",{});var Tt=n(qe);Hr=s(Tt,"A",{href:!0});var mw=n(Hr);eh=i(mw,"Wav2Vec2Processor"),mw.forEach(t),th=i(Tt," offers all the functionalities of "),Xr=s(Tt,"A",{href:!0});var hw=n(Xr);oh=i(hw,"Wav2Vec2FeatureExtractor"),hw.forEach(t),ah=i(Tt," and "),Gr=s(Tt,"A",{href:!0});var fw=n(Gr);sh=i(fw,"PreTrainedTokenizer"),fw.forEach(t),nh=i(Tt,`.
See the docstring of `),cs=s(Tt,"A",{href:!0});var Nb=n(cs);ml=s(Nb,"STRONG",{});var uw=n(ml);rh=i(uw,"call"),uw.forEach(t),ih=i(Nb,"()"),Nb.forEach(t),lh=i(Tt," and "),Jr=s(Tt,"A",{href:!0});var gw=n(Jr);ch=i(gw,"decode()"),gw.forEach(t),dh=i(Tt," for more information."),Tt.forEach(t),ph=p(R),Eo=s(R,"DIV",{class:!0});var Jd=n(Eo);y(ds.$$.fragment,Jd),mh=p(Jd),ht=s(Jd,"P",{});var Pa=n(ht);hh=i(Pa,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),ps=s(Pa,"A",{href:!0});var Ib=n(ps);hl=s(Ib,"STRONG",{});var _w=n(hl);fh=i(_w,"call"),_w.forEach(t),uh=i(Ib,"()"),Ib.forEach(t),gh=i(Pa,` and returns its output. If used in the context
`),Zr=s(Pa,"A",{href:!0});var vw=n(Zr);_h=i(vw,"as_target_processor()"),vw.forEach(t),vh=i(Pa,` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),ms=s(Pa,"A",{href:!0});var Bb=n(ms);fl=s(Bb,"STRONG",{});var bw=n(fl);bh=i(bw,"call"),bw.forEach(t),wh=i(Bb,"()"),Bb.forEach(t),yh=i(Pa,". Please refer to the docstring of the above two methods for more information."),Pa.forEach(t),Jd.forEach(t),kh=p(R),Po=s(R,"DIV",{class:!0});var Zd=n(Po);y(hs.$$.fragment,Zd),Th=p(Zd),ft=s(Zd,"P",{});var qa=n(ft);$h=i(qa,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),Kr=s(qa,"A",{href:!0});var ww=n(Kr);xh=i(ww,"pad()"),ww.forEach(t),Wh=i(qa,` and returns its output. If used in the context
`),Qr=s(qa,"A",{href:!0});var yw=n(Qr);Vh=i(yw,"as_target_processor()"),yw.forEach(t),jh=i(qa,` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),Yr=s(qa,"A",{href:!0});var kw=n(Yr);Fh=i(kw,"pad()"),kw.forEach(t),Ch=i(qa,". Please refer to the docstring of the above two methods for more information."),qa.forEach(t),Zd.forEach(t),Eh=p(R),ei=s(R,"DIV",{class:!0});var Tw=n(ei);y(fs.$$.fragment,Tw),Tw.forEach(t),Ph=p(R),Wt=s(R,"DIV",{class:!0});var Ei=n(Wt);y(us.$$.fragment,Ei),qh=p(Ei),gs=s(Ei,"P",{});var Kd=n(gs);zh=i(Kd,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),ti=s(Kd,"A",{href:!0});var $w=n(ti);Mh=i($w,"from_pretrained()"),$w.forEach(t),Ah=i(Kd," method."),Kd.forEach(t),Oh=p(Ei),y(qo.$$.fragment,Ei),Ei.forEach(t),Lh=p(R),zo=s(R,"DIV",{class:!0});var Qd=n(zo);y(_s.$$.fragment,Qd),Dh=p(Qd),vs=s(Qd,"P",{});var Yd=n(vs);Sh=i(Yd,"This method forwards all its arguments to PreTrainedTokenizer\u2019s "),oi=s(Yd,"A",{href:!0});var xw=n(oi);Nh=i(xw,"batch_decode()"),xw.forEach(t),Ih=i(Yd,`. Please
refer to the docstring of this method for more information.`),Yd.forEach(t),Qd.forEach(t),Bh=p(R),Mo=s(R,"DIV",{class:!0});var ep=n(Mo);y(bs.$$.fragment,ep),Uh=p(ep),ws=s(ep,"P",{});var tp=n(ws);Rh=i(tp,"This method forwards all its arguments to PreTrainedTokenizer\u2019s "),ai=s(tp,"A",{href:!0});var Ww=n(ai);Hh=i(Ww,"decode()"),Ww.forEach(t),Xh=i(tp,`. Please refer
to the docstring of this method for more information.`),tp.forEach(t),ep.forEach(t),Gh=p(R),Ao=s(R,"DIV",{class:!0});var op=n(Ao);y(ys.$$.fragment,op),Jh=p(op),ul=s(op,"P",{});var Vw=n(ul);Zh=i(Vw,`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Wav2Vec2.`),Vw.forEach(t),op.forEach(t),R.forEach(t),dd=p(o),Bt=s(o,"H2",{class:!0});var ap=n(Bt);Oo=s(ap,"A",{id:!0,class:!0,href:!0});var jw=n(Oo);gl=s(jw,"SPAN",{});var Fw=n(gl);y(ks.$$.fragment,Fw),Fw.forEach(t),jw.forEach(t),Kh=p(ap),_l=s(ap,"SPAN",{});var Cw=n(_l);Qh=i(Cw,"Wav2Vec2ProcessorWithLM"),Cw.forEach(t),ap.forEach(t),pd=p(o),N=s(o,"DIV",{class:!0});var te=n(N);y(Ts.$$.fragment,te),Yh=p(te),vl=s(te,"P",{});var Ew=n(vl);ef=i(Ew,`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor, a Wav2Vec2 CTC tokenizer and a decoder
with language model support into a single processor for language model boosted speech recognition decoding.`),Ew.forEach(t),tf=p(te),Lo=s(te,"DIV",{class:!0});var sp=n(Lo);y($s.$$.fragment,sp),of=p(sp),ut=s(sp,"P",{});var za=n(ut);af=i(za,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),xs=s(za,"A",{href:!0});var Ub=n(xs);bl=s(Ub,"STRONG",{});var Pw=n(bl);sf=i(Pw,"call"),Pw.forEach(t),nf=i(Ub,"()"),Ub.forEach(t),rf=i(za,` and returns its output. If used in the context
`),si=s(za,"A",{href:!0});var qw=n(si);lf=i(qw,"as_target_processor()"),qw.forEach(t),cf=i(za,` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),Ws=s(za,"A",{href:!0});var Rb=n(Ws);wl=s(Rb,"STRONG",{});var zw=n(wl);df=i(zw,"call"),zw.forEach(t),pf=i(Rb,"()"),Rb.forEach(t),mf=i(za,`. Please refer to the docstring of the above two
methods for more information.`),za.forEach(t),sp.forEach(t),hf=p(te),Do=s(te,"DIV",{class:!0});var np=n(Do);y(Vs.$$.fragment,np),ff=p(np),gt=s(np,"P",{});var Ma=n(gt);uf=i(Ma,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),ni=s(Ma,"A",{href:!0});var Mw=n(ni);gf=i(Mw,"pad()"),Mw.forEach(t),_f=i(Ma,` and returns its output. If used in the context
`),ri=s(Ma,"A",{href:!0});var Aw=n(ri);vf=i(Aw,"as_target_processor()"),Aw.forEach(t),bf=i(Ma,` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),ii=s(Ma,"A",{href:!0});var Ow=n(ii);wf=i(Ow,"pad()"),Ow.forEach(t),yf=i(Ma,`. Please refer to the docstring of the above two methods
for more information.`),Ma.forEach(t),np.forEach(t),kf=p(te),Vt=s(te,"DIV",{class:!0});var Pi=n(Vt);y(js.$$.fragment,Pi),Tf=p(Pi),Fs=s(Pi,"P",{});var rp=n(Fs);$f=i(rp,"Instantiate a "),li=s(rp,"A",{href:!0});var Lw=n(li);xf=i(Lw,"Wav2Vec2ProcessorWithLM"),Lw.forEach(t),Wf=i(rp," from a pretrained Wav2Vec2 processor."),rp.forEach(t),Vf=p(Pi),y(So.$$.fragment,Pi),Pi.forEach(t),jf=p(te),ci=s(te,"DIV",{class:!0});var Dw=n(ci);y(Cs.$$.fragment,Dw),Dw.forEach(t),Ff=p(te),jt=s(te,"DIV",{class:!0});var qi=n(jt);y(Es.$$.fragment,qi),Cf=p(qi),yl=s(qi,"P",{});var Sw=n(yl);Ef=i(Sw,"Batch decode output logits to audio transcription with language model support."),Sw.forEach(t),Pf=p(qi),y(No.$$.fragment,qi),qi.forEach(t),qf=p(te),Ft=s(te,"DIV",{class:!0});var zi=n(Ft);y(Ps.$$.fragment,zi),zf=p(zi),kl=s(zi,"P",{});var Nw=n(kl);Mf=i(Nw,"Decode output logits to audio transcription with language model support."),Nw.forEach(t),Af=p(zi),y(Io.$$.fragment,zi),zi.forEach(t),Of=p(te),Bo=s(te,"DIV",{class:!0});var ip=n(Bo);y(qs.$$.fragment,ip),Lf=p(ip),Tl=s(ip,"P",{});var Iw=n(Tl);Df=i(Iw,`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Wav2Vec2.`),Iw.forEach(t),ip.forEach(t),te.forEach(t),md=p(o),Ut=s(o,"H2",{class:!0});var lp=n(Ut);Uo=s(lp,"A",{id:!0,class:!0,href:!0});var Bw=n(Uo);$l=s(Bw,"SPAN",{});var Uw=n($l);y(zs.$$.fragment,Uw),Uw.forEach(t),Bw.forEach(t),Sf=p(lp),xl=s(lp,"SPAN",{});var Rw=n(xl);Nf=i(Rw,"Wav2Vec2 specific outputs"),Rw.forEach(t),lp.forEach(t),hd=p(o),Rt=s(o,"DIV",{class:!0});var cp=n(Rt);y(Ms.$$.fragment,cp),If=p(cp),As=s(cp,"P",{});var dp=n(As);Bf=i(dp,"Output type of "),Wl=s(dp,"CODE",{});var Hw=n(Wl);Uf=i(Hw,"Wav2Vec2DecoderWithLM"),Hw.forEach(t),Rf=i(dp,", with transcription."),dp.forEach(t),cp.forEach(t),fd=p(o),Ht=s(o,"DIV",{class:!0});var pp=n(Ht);y(Os.$$.fragment,pp),Hf=p(pp),Vl=s(pp,"P",{});var Xw=n(Vl);Xf=i(Xw,"Base class for models that have been trained with the Wav2Vec2 loss objective."),Xw.forEach(t),pp.forEach(t),ud=p(o),Xt=s(o,"DIV",{class:!0});var mp=n(Xt);y(Ls.$$.fragment,mp),Gf=p(mp),Ds=s(mp,"P",{});var hp=n(Ds);Jf=i(hp,"Output type of "),di=s(hp,"A",{href:!0});var Gw=n(di);Zf=i(Gw,"Wav2Vec2ForPreTraining"),Gw.forEach(t),Kf=i(hp,", with potential hidden states and attentions."),hp.forEach(t),mp.forEach(t),gd=p(o),_t=s(o,"DIV",{class:!0});var Mi=n(_t);y(Ss.$$.fragment,Mi),Qf=p(Mi),Ns=s(Mi,"P",{});var fp=n(Ns);Yf=i(fp,"Output type of "),jl=s(fp,"CODE",{});var Jw=n(jl);eu=i(Jw,"FlaxWav2Vec2BaseModelOutput"),Jw.forEach(t),tu=i(fp,", with potential hidden states and attentions."),fp.forEach(t),ou=p(Mi),Ro=s(Mi,"DIV",{class:!0});var up=n(Ro);y(Is.$$.fragment,up),au=p(up),Fl=s(up,"P",{});var Zw=n(Fl);su=i(Zw,"\u201CReturns a new object replacing the specified fields with new values."),Zw.forEach(t),up.forEach(t),Mi.forEach(t),_d=p(o),vt=s(o,"DIV",{class:!0});var Ai=n(vt);y(Bs.$$.fragment,Ai),nu=p(Ai),Us=s(Ai,"P",{});var gp=n(Us);ru=i(gp,"Output type of "),Cl=s(gp,"CODE",{});var Kw=n(Cl);iu=i(Kw,"FlaxWav2Vec2ForPreTrainingOutput"),Kw.forEach(t),lu=i(gp,", with potential hidden states and attentions."),gp.forEach(t),cu=p(Ai),Ho=s(Ai,"DIV",{class:!0});var _p=n(Ho);y(Rs.$$.fragment,_p),du=p(_p),El=s(_p,"P",{});var Qw=n(El);pu=i(Qw,"\u201CReturns a new object replacing the specified fields with new values."),Qw.forEach(t),_p.forEach(t),Ai.forEach(t),vd=p(o),Gt=s(o,"H2",{class:!0});var vp=n(Gt);Xo=s(vp,"A",{id:!0,class:!0,href:!0});var Yw=n(Xo);Pl=s(Yw,"SPAN",{});var e1=n(Pl);y(Hs.$$.fragment,e1),e1.forEach(t),Yw.forEach(t),mu=p(vp),ql=s(vp,"SPAN",{});var t1=n(ql);hu=i(t1,"Wav2Vec2Model"),t1.forEach(t),vp.forEach(t),bd=p(o),xe=s(o,"DIV",{class:!0});var Ct=n(xe);y(Xs.$$.fragment,Ct),fu=p(Ct),Gs=s(Ct,"P",{});var bp=n(Gs);uu=i(bp,`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),Js=s(bp,"A",{href:!0,rel:!0});var o1=n(Js);gu=i(o1,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),o1.forEach(t),_u=i(bp,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),bp.forEach(t),vu=p(Ct),Zs=s(Ct,"P",{});var wp=n(Zs);bu=i(wp,"This model inherits from "),pi=s(wp,"A",{href:!0});var a1=n(pi);wu=i(a1,"PreTrainedModel"),a1.forEach(t),yu=i(wp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),wp.forEach(t),ku=p(Ct),Ks=s(Ct,"P",{});var yp=n(Ks);Tu=i(yp,"This model is a PyTorch "),Qs=s(yp,"A",{href:!0,rel:!0});var s1=n(Qs);$u=i(s1,"torch.nn.Module"),s1.forEach(t),xu=i(yp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),yp.forEach(t),Wu=p(Ct),Ge=s(Ct,"DIV",{class:!0});var Aa=n(Ge);y(Ys.$$.fragment,Aa),Vu=p(Aa),Jt=s(Aa,"P",{});var Oi=n(Jt);ju=i(Oi,"The "),mi=s(Oi,"A",{href:!0});var n1=n(mi);Fu=i(n1,"Wav2Vec2Model"),n1.forEach(t),Cu=i(Oi," forward method, overrides the "),zl=s(Oi,"CODE",{});var r1=n(zl);Eu=i(r1,"__call__"),r1.forEach(t),Pu=i(Oi," special method."),Oi.forEach(t),qu=p(Aa),y(Go.$$.fragment,Aa),zu=p(Aa),y(Jo.$$.fragment,Aa),Aa.forEach(t),Ct.forEach(t),wd=p(o),Zt=s(o,"H2",{class:!0});var kp=n(Zt);Zo=s(kp,"A",{id:!0,class:!0,href:!0});var i1=n(Zo);Ml=s(i1,"SPAN",{});var l1=n(Ml);y(en.$$.fragment,l1),l1.forEach(t),i1.forEach(t),Mu=p(kp),Al=s(kp,"SPAN",{});var c1=n(Al);Au=i(c1,"Wav2Vec2ForCTC"),c1.forEach(t),kp.forEach(t),yd=p(o),We=s(o,"DIV",{class:!0});var Et=n(We);y(tn.$$.fragment,Et),Ou=p(Et),Kt=s(Et,"P",{});var Li=n(Kt);Lu=i(Li,"Wav2Vec2 Model with a "),Ol=s(Li,"CODE",{});var d1=n(Ol);Du=i(d1,"language modeling"),d1.forEach(t),Su=i(Li,` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),on=s(Li,"A",{href:!0,rel:!0});var p1=n(on);Nu=i(p1,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),p1.forEach(t),Iu=i(Li,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Li.forEach(t),Bu=p(Et),an=s(Et,"P",{});var Tp=n(an);Uu=i(Tp,"This model inherits from "),hi=s(Tp,"A",{href:!0});var m1=n(hi);Ru=i(m1,"PreTrainedModel"),m1.forEach(t),Hu=i(Tp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Tp.forEach(t),Xu=p(Et),sn=s(Et,"P",{});var $p=n(sn);Gu=i($p,"This model is a PyTorch "),nn=s($p,"A",{href:!0,rel:!0});var h1=n(nn);Ju=i(h1,"torch.nn.Module"),h1.forEach(t),Zu=i($p,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$p.forEach(t),Ku=p(Et),ze=s(Et,"DIV",{class:!0});var Pt=n(ze);y(rn.$$.fragment,Pt),Qu=p(Pt),Qt=s(Pt,"P",{});var Di=n(Qt);Yu=i(Di,"The "),fi=s(Di,"A",{href:!0});var f1=n(fi);eg=i(f1,"Wav2Vec2ForCTC"),f1.forEach(t),tg=i(Di," forward method, overrides the "),Ll=s(Di,"CODE",{});var u1=n(Ll);og=i(u1,"__call__"),u1.forEach(t),ag=i(Di," special method."),Di.forEach(t),sg=p(Pt),y(Ko.$$.fragment,Pt),ng=p(Pt),y(Qo.$$.fragment,Pt),rg=p(Pt),y(Yo.$$.fragment,Pt),Pt.forEach(t),Et.forEach(t),kd=p(o),Yt=s(o,"H2",{class:!0});var xp=n(Yt);ea=s(xp,"A",{id:!0,class:!0,href:!0});var g1=n(ea);Dl=s(g1,"SPAN",{});var _1=n(Dl);y(ln.$$.fragment,_1),_1.forEach(t),g1.forEach(t),ig=p(xp),Sl=s(xp,"SPAN",{});var v1=n(Sl);lg=i(v1,"Wav2Vec2ForSequenceClassification"),v1.forEach(t),xp.forEach(t),Td=p(o),ne=s(o,"DIV",{class:!0});var at=n(ne);y(cn.$$.fragment,at),cg=p(at),Nl=s(at,"P",{});var b1=n(Nl);dg=i(b1,`Wav2Vec2 Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),b1.forEach(t),pg=p(at),dn=s(at,"P",{});var Wp=n(dn);mg=i(Wp,"Wav2Vec2 was proposed in "),pn=s(Wp,"A",{href:!0,rel:!0});var w1=n(pn);hg=i(w1,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),w1.forEach(t),fg=i(Wp,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Wp.forEach(t),ug=p(at),mn=s(at,"P",{});var Vp=n(mn);gg=i(Vp,"This model inherits from "),ui=s(Vp,"A",{href:!0});var y1=n(ui);_g=i(y1,"PreTrainedModel"),y1.forEach(t),vg=i(Vp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Vp.forEach(t),bg=p(at),hn=s(at,"P",{});var jp=n(hn);wg=i(jp,"This model is a PyTorch "),fn=s(jp,"A",{href:!0,rel:!0});var k1=n(fn);yg=i(k1,"torch.nn.Module"),k1.forEach(t),kg=i(jp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jp.forEach(t),Tg=p(at),Me=s(at,"DIV",{class:!0});var qt=n(Me);y(un.$$.fragment,qt),$g=p(qt),eo=s(qt,"P",{});var Si=n(eo);xg=i(Si,"The "),gi=s(Si,"A",{href:!0});var T1=n(gi);Wg=i(T1,"Wav2Vec2ForSequenceClassification"),T1.forEach(t),Vg=i(Si," forward method, overrides the "),Il=s(Si,"CODE",{});var $1=n(Il);jg=i($1,"__call__"),$1.forEach(t),Fg=i(Si," special method."),Si.forEach(t),Cg=p(qt),y(ta.$$.fragment,qt),Eg=p(qt),y(oa.$$.fragment,qt),Pg=p(qt),y(aa.$$.fragment,qt),qt.forEach(t),at.forEach(t),$d=p(o),to=s(o,"H2",{class:!0});var Fp=n(to);sa=s(Fp,"A",{id:!0,class:!0,href:!0});var x1=n(sa);Bl=s(x1,"SPAN",{});var W1=n(Bl);y(gn.$$.fragment,W1),W1.forEach(t),x1.forEach(t),qg=p(Fp),Ul=s(Fp,"SPAN",{});var V1=n(Ul);zg=i(V1,"Wav2Vec2ForAudioFrameClassification"),V1.forEach(t),Fp.forEach(t),xd=p(o),re=s(o,"DIV",{class:!0});var st=n(re);y(_n.$$.fragment,st),Mg=p(st),Rl=s(st,"P",{});var j1=n(Rl);Ag=i(j1,"Wav2Vec2 Model with a frame classification head on top for tasks like Speaker Diarization."),j1.forEach(t),Og=p(st),vn=s(st,"P",{});var Cp=n(vn);Lg=i(Cp,"Wav2Vec2 was proposed in "),bn=s(Cp,"A",{href:!0,rel:!0});var F1=n(bn);Dg=i(F1,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),F1.forEach(t),Sg=i(Cp,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Cp.forEach(t),Ng=p(st),wn=s(st,"P",{});var Ep=n(wn);Ig=i(Ep,"This model inherits from "),_i=s(Ep,"A",{href:!0});var C1=n(_i);Bg=i(C1,"PreTrainedModel"),C1.forEach(t),Ug=i(Ep,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ep.forEach(t),Rg=p(st),yn=s(st,"P",{});var Pp=n(yn);Hg=i(Pp,"This model is a PyTorch "),kn=s(Pp,"A",{href:!0,rel:!0});var E1=n(kn);Xg=i(E1,"torch.nn.Module"),E1.forEach(t),Gg=i(Pp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pp.forEach(t),Jg=p(st),Je=s(st,"DIV",{class:!0});var Oa=n(Je);y(Tn.$$.fragment,Oa),Zg=p(Oa),oo=s(Oa,"P",{});var Ni=n(oo);Kg=i(Ni,"The "),vi=s(Ni,"A",{href:!0});var P1=n(vi);Qg=i(P1,"Wav2Vec2ForAudioFrameClassification"),P1.forEach(t),Yg=i(Ni," forward method, overrides the "),Hl=s(Ni,"CODE",{});var q1=n(Hl);e_=i(q1,"__call__"),q1.forEach(t),t_=i(Ni," special method."),Ni.forEach(t),o_=p(Oa),y(na.$$.fragment,Oa),a_=p(Oa),y(ra.$$.fragment,Oa),Oa.forEach(t),st.forEach(t),Wd=p(o),ao=s(o,"H2",{class:!0});var qp=n(ao);ia=s(qp,"A",{id:!0,class:!0,href:!0});var z1=n(ia);Xl=s(z1,"SPAN",{});var M1=n(Xl);y($n.$$.fragment,M1),M1.forEach(t),z1.forEach(t),s_=p(qp),Gl=s(qp,"SPAN",{});var A1=n(Gl);n_=i(A1,"Wav2Vec2ForXVector"),A1.forEach(t),qp.forEach(t),Vd=p(o),ie=s(o,"DIV",{class:!0});var nt=n(ie);y(xn.$$.fragment,nt),r_=p(nt),Jl=s(nt,"P",{});var O1=n(Jl);i_=i(O1,"Wav2Vec2 Model with an XVector feature extraction head on top for tasks like Speaker Verification."),O1.forEach(t),l_=p(nt),Wn=s(nt,"P",{});var zp=n(Wn);c_=i(zp,"Wav2Vec2 was proposed in "),Vn=s(zp,"A",{href:!0,rel:!0});var L1=n(Vn);d_=i(L1,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),L1.forEach(t),p_=i(zp,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),zp.forEach(t),m_=p(nt),jn=s(nt,"P",{});var Mp=n(jn);h_=i(Mp,"This model inherits from "),bi=s(Mp,"A",{href:!0});var D1=n(bi);f_=i(D1,"PreTrainedModel"),D1.forEach(t),u_=i(Mp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Mp.forEach(t),g_=p(nt),Fn=s(nt,"P",{});var Ap=n(Fn);__=i(Ap,"This model is a PyTorch "),Cn=s(Ap,"A",{href:!0,rel:!0});var S1=n(Cn);v_=i(S1,"torch.nn.Module"),S1.forEach(t),b_=i(Ap,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ap.forEach(t),w_=p(nt),Ze=s(nt,"DIV",{class:!0});var La=n(Ze);y(En.$$.fragment,La),y_=p(La),so=s(La,"P",{});var Ii=n(so);k_=i(Ii,"The "),wi=s(Ii,"A",{href:!0});var N1=n(wi);T_=i(N1,"Wav2Vec2ForXVector"),N1.forEach(t),$_=i(Ii," forward method, overrides the "),Zl=s(Ii,"CODE",{});var I1=n(Zl);x_=i(I1,"__call__"),I1.forEach(t),W_=i(Ii," special method."),Ii.forEach(t),V_=p(La),y(la.$$.fragment,La),j_=p(La),y(ca.$$.fragment,La),La.forEach(t),nt.forEach(t),jd=p(o),no=s(o,"H2",{class:!0});var Op=n(no);da=s(Op,"A",{id:!0,class:!0,href:!0});var B1=n(da);Kl=s(B1,"SPAN",{});var U1=n(Kl);y(Pn.$$.fragment,U1),U1.forEach(t),B1.forEach(t),F_=p(Op),Ql=s(Op,"SPAN",{});var R1=n(Ql);C_=i(R1,"Wav2Vec2ForPreTraining"),R1.forEach(t),Op.forEach(t),Fd=p(o),Ve=s(o,"DIV",{class:!0});var zt=n(Ve);y(qn.$$.fragment,zt),E_=p(zt),ro=s(zt,"P",{});var Bi=n(ro);P_=i(Bi,"Wav2Vec2 Model with a quantizer and "),Yl=s(Bi,"CODE",{});var H1=n(Yl);q_=i(H1,"VQ"),H1.forEach(t),z_=i(Bi,` head on top.
Wav2Vec2 was proposed in `),zn=s(Bi,"A",{href:!0,rel:!0});var X1=n(zn);M_=i(X1,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),X1.forEach(t),A_=i(Bi,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Bi.forEach(t),O_=p(zt),Mn=s(zt,"P",{});var Lp=n(Mn);L_=i(Lp,"This model inherits from "),yi=s(Lp,"A",{href:!0});var G1=n(yi);D_=i(G1,"PreTrainedModel"),G1.forEach(t),S_=i(Lp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Lp.forEach(t),N_=p(zt),An=s(zt,"P",{});var Dp=n(An);I_=i(Dp,"This model is a PyTorch "),On=s(Dp,"A",{href:!0,rel:!0});var J1=n(On);B_=i(J1,"torch.nn.Module"),J1.forEach(t),U_=i(Dp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dp.forEach(t),R_=p(zt),Ke=s(zt,"DIV",{class:!0});var Da=n(Ke);y(Ln.$$.fragment,Da),H_=p(Da),io=s(Da,"P",{});var Ui=n(io);X_=i(Ui,"The "),ki=s(Ui,"A",{href:!0});var Z1=n(ki);G_=i(Z1,"Wav2Vec2ForPreTraining"),Z1.forEach(t),J_=i(Ui," forward method, overrides the "),ec=s(Ui,"CODE",{});var K1=n(ec);Z_=i(K1,"__call__"),K1.forEach(t),K_=i(Ui," special method."),Ui.forEach(t),Q_=p(Da),y(pa.$$.fragment,Da),Y_=p(Da),y(ma.$$.fragment,Da),Da.forEach(t),zt.forEach(t),Cd=p(o),lo=s(o,"H2",{class:!0});var Sp=n(lo);ha=s(Sp,"A",{id:!0,class:!0,href:!0});var Q1=n(ha);tc=s(Q1,"SPAN",{});var Y1=n(tc);y(Dn.$$.fragment,Y1),Y1.forEach(t),Q1.forEach(t),ev=p(Sp),oc=s(Sp,"SPAN",{});var ey=n(oc);tv=i(ey,"TFWav2Vec2Model"),ey.forEach(t),Sp.forEach(t),Ed=p(o),le=s(o,"DIV",{class:!0});var rt=n(le);y(Sn.$$.fragment,rt),ov=p(rt),ac=s(rt,"P",{});var ty=n(ac);av=i(ty,"The bare TFWav2Vec2 Model transformer outputing raw hidden-states without any specific head on top."),ty.forEach(t),sv=p(rt),Nn=s(rt,"P",{});var Np=n(Nn);nv=i(Np,"This model inherits from "),Ti=s(Np,"A",{href:!0});var oy=n(Ti);rv=i(oy,"TFPreTrainedModel"),oy.forEach(t),iv=i(Np,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Np.forEach(t),lv=p(rt),In=s(rt,"P",{});var Ip=n(In);cv=i(Ip,"This model is also a "),Bn=s(Ip,"A",{href:!0,rel:!0});var ay=n(Bn);dv=i(ay,"tf.keras.Model"),ay.forEach(t),pv=i(Ip,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ip.forEach(t),mv=p(rt),y(fa.$$.fragment,rt),hv=p(rt),Qe=s(rt,"DIV",{class:!0});var Sa=n(Qe);y(Un.$$.fragment,Sa),fv=p(Sa),co=s(Sa,"P",{});var Ri=n(co);uv=i(Ri,"The "),$i=s(Ri,"A",{href:!0});var sy=n($i);gv=i(sy,"TFWav2Vec2Model"),sy.forEach(t),_v=i(Ri," forward method, overrides the "),sc=s(Ri,"CODE",{});var ny=n(sc);vv=i(ny,"__call__"),ny.forEach(t),bv=i(Ri," special method."),Ri.forEach(t),wv=p(Sa),y(ua.$$.fragment,Sa),yv=p(Sa),y(ga.$$.fragment,Sa),Sa.forEach(t),rt.forEach(t),Pd=p(o),po=s(o,"H2",{class:!0});var Bp=n(po);_a=s(Bp,"A",{id:!0,class:!0,href:!0});var ry=n(_a);nc=s(ry,"SPAN",{});var iy=n(nc);y(Rn.$$.fragment,iy),iy.forEach(t),ry.forEach(t),kv=p(Bp),rc=s(Bp,"SPAN",{});var ly=n(rc);Tv=i(ly,"TFWav2Vec2ForCTC"),ly.forEach(t),Bp.forEach(t),qd=p(o),ce=s(o,"DIV",{class:!0});var it=n(ce);y(Hn.$$.fragment,it),$v=p(it),Xn=s(it,"P",{});var Up=n(Xn);xv=i(Up,"TFWav2Vec2 Model with a "),ic=s(Up,"CODE",{});var cy=n(ic);Wv=i(cy,"language modeling"),cy.forEach(t),Vv=i(Up," head on top for Connectionist Temporal Classification (CTC)."),Up.forEach(t),jv=p(it),Gn=s(it,"P",{});var Rp=n(Gn);Fv=i(Rp,"This model inherits from "),xi=s(Rp,"A",{href:!0});var dy=n(xi);Cv=i(dy,"TFPreTrainedModel"),dy.forEach(t),Ev=i(Rp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rp.forEach(t),Pv=p(it),Jn=s(it,"P",{});var Hp=n(Jn);qv=i(Hp,"This model is also a "),Zn=s(Hp,"A",{href:!0,rel:!0});var py=n(Zn);zv=i(py,"tf.keras.Model"),py.forEach(t),Mv=i(Hp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hp.forEach(t),Av=p(it),y(va.$$.fragment,it),Ov=p(it),Ye=s(it,"DIV",{class:!0});var Na=n(Ye);y(Kn.$$.fragment,Na),Lv=p(Na),mo=s(Na,"P",{});var Hi=n(mo);Dv=i(Hi,"The "),Wi=s(Hi,"A",{href:!0});var my=n(Wi);Sv=i(my,"TFWav2Vec2ForCTC"),my.forEach(t),Nv=i(Hi," forward method, overrides the "),lc=s(Hi,"CODE",{});var hy=n(lc);Iv=i(hy,"__call__"),hy.forEach(t),Bv=i(Hi," special method."),Hi.forEach(t),Uv=p(Na),y(ba.$$.fragment,Na),Rv=p(Na),y(wa.$$.fragment,Na),Na.forEach(t),it.forEach(t),zd=p(o),ho=s(o,"H2",{class:!0});var Xp=n(ho);ya=s(Xp,"A",{id:!0,class:!0,href:!0});var fy=n(ya);cc=s(fy,"SPAN",{});var uy=n(cc);y(Qn.$$.fragment,uy),uy.forEach(t),fy.forEach(t),Hv=p(Xp),dc=s(Xp,"SPAN",{});var gy=n(dc);Xv=i(gy,"FlaxWav2Vec2Model"),gy.forEach(t),Xp.forEach(t),Md=p(o),K=s(o,"DIV",{class:!0});var Oe=n(K);y(Yn.$$.fragment,Oe),Gv=p(Oe),er=s(Oe,"P",{});var Gp=n(er);Jv=i(Gp,`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),tr=s(Gp,"A",{href:!0,rel:!0});var _y=n(tr);Zv=i(_y,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),_y.forEach(t),Kv=i(Gp,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Gp.forEach(t),Qv=p(Oe),or=s(Oe,"P",{});var Jp=n(or);Yv=i(Jp,"This model inherits from "),Vi=s(Jp,"A",{href:!0});var vy=n(Vi);e2=i(vy,"FlaxPreTrainedModel"),vy.forEach(t),t2=i(Jp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jp.forEach(t),o2=p(Oe),ar=s(Oe,"P",{});var Zp=n(ar);a2=i(Zp,`This model is also a Flax Linen
`),sr=s(Zp,"A",{href:!0,rel:!0});var by=n(sr);s2=i(by,"flax.nn.Module"),by.forEach(t),n2=i(Zp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Zp.forEach(t),r2=p(Oe),pc=s(Oe,"P",{});var wy=n(pc);i2=i(wy,"Finally, this model supports inherent JAX features such as:"),wy.forEach(t),l2=p(Oe),bt=s(Oe,"UL",{});var Ia=n(bt);mc=s(Ia,"LI",{});var yy=n(mc);nr=s(yy,"A",{href:!0,rel:!0});var ky=n(nr);c2=i(ky,"Just-In-Time (JIT) compilation"),ky.forEach(t),yy.forEach(t),d2=p(Ia),hc=s(Ia,"LI",{});var Ty=n(hc);rr=s(Ty,"A",{href:!0,rel:!0});var $y=n(rr);p2=i($y,"Automatic Differentiation"),$y.forEach(t),Ty.forEach(t),m2=p(Ia),fc=s(Ia,"LI",{});var xy=n(fc);ir=s(xy,"A",{href:!0,rel:!0});var Wy=n(ir);h2=i(Wy,"Vectorization"),Wy.forEach(t),xy.forEach(t),f2=p(Ia),uc=s(Ia,"LI",{});var Vy=n(uc);lr=s(Vy,"A",{href:!0,rel:!0});var jy=n(lr);u2=i(jy,"Parallelization"),jy.forEach(t),Vy.forEach(t),Ia.forEach(t),g2=p(Oe),et=s(Oe,"DIV",{class:!0});var Ba=n(et);y(cr.$$.fragment,Ba),_2=p(Ba),fo=s(Ba,"P",{});var Xi=n(fo);v2=i(Xi,"The "),gc=s(Xi,"CODE",{});var Fy=n(gc);b2=i(Fy,"FlaxWav2Vec2PreTrainedModel"),Fy.forEach(t),w2=i(Xi," forward method, overrides the "),_c=s(Xi,"CODE",{});var Cy=n(_c);y2=i(Cy,"__call__"),Cy.forEach(t),k2=i(Xi," special method."),Xi.forEach(t),T2=p(Ba),y(ka.$$.fragment,Ba),$2=p(Ba),y(Ta.$$.fragment,Ba),Ba.forEach(t),Oe.forEach(t),Ad=p(o),uo=s(o,"H2",{class:!0});var Kp=n(uo);$a=s(Kp,"A",{id:!0,class:!0,href:!0});var Ey=n($a);vc=s(Ey,"SPAN",{});var Py=n(vc);y(dr.$$.fragment,Py),Py.forEach(t),Ey.forEach(t),x2=p(Kp),bc=s(Kp,"SPAN",{});var qy=n(bc);W2=i(qy,"FlaxWav2Vec2ForCTC"),qy.forEach(t),Kp.forEach(t),Od=p(o),Q=s(o,"DIV",{class:!0});var Le=n(Q);y(pr.$$.fragment,Le),V2=p(Le),go=s(Le,"P",{});var Gi=n(go);j2=i(Gi,"Wav2Vec2 Model with a "),wc=s(Gi,"CODE",{});var zy=n(wc);F2=i(zy,"language modeling"),zy.forEach(t),C2=i(Gi,` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),mr=s(Gi,"A",{href:!0,rel:!0});var My=n(mr);E2=i(My,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),My.forEach(t),P2=i(Gi,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Gi.forEach(t),q2=p(Le),hr=s(Le,"P",{});var Qp=n(hr);z2=i(Qp,"This model inherits from "),ji=s(Qp,"A",{href:!0});var Ay=n(ji);M2=i(Ay,"FlaxPreTrainedModel"),Ay.forEach(t),A2=i(Qp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qp.forEach(t),O2=p(Le),fr=s(Le,"P",{});var Yp=n(fr);L2=i(Yp,`This model is also a Flax Linen
`),ur=s(Yp,"A",{href:!0,rel:!0});var Oy=n(ur);D2=i(Oy,"flax.nn.Module"),Oy.forEach(t),S2=i(Yp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Yp.forEach(t),N2=p(Le),yc=s(Le,"P",{});var Ly=n(yc);I2=i(Ly,"Finally, this model supports inherent JAX features such as:"),Ly.forEach(t),B2=p(Le),wt=s(Le,"UL",{});var Ua=n(wt);kc=s(Ua,"LI",{});var Dy=n(kc);gr=s(Dy,"A",{href:!0,rel:!0});var Sy=n(gr);U2=i(Sy,"Just-In-Time (JIT) compilation"),Sy.forEach(t),Dy.forEach(t),R2=p(Ua),Tc=s(Ua,"LI",{});var Ny=n(Tc);_r=s(Ny,"A",{href:!0,rel:!0});var Iy=n(_r);H2=i(Iy,"Automatic Differentiation"),Iy.forEach(t),Ny.forEach(t),X2=p(Ua),$c=s(Ua,"LI",{});var By=n($c);vr=s(By,"A",{href:!0,rel:!0});var Uy=n(vr);G2=i(Uy,"Vectorization"),Uy.forEach(t),By.forEach(t),J2=p(Ua),xc=s(Ua,"LI",{});var Ry=n(xc);br=s(Ry,"A",{href:!0,rel:!0});var Hy=n(br);Z2=i(Hy,"Parallelization"),Hy.forEach(t),Ry.forEach(t),Ua.forEach(t),K2=p(Le),tt=s(Le,"DIV",{class:!0});var Ra=n(tt);y(wr.$$.fragment,Ra),Q2=p(Ra),_o=s(Ra,"P",{});var Ji=n(_o);Y2=i(Ji,"The "),Wc=s(Ji,"CODE",{});var Xy=n(Wc);eb=i(Xy,"FlaxWav2Vec2PreTrainedModel"),Xy.forEach(t),tb=i(Ji," forward method, overrides the "),Vc=s(Ji,"CODE",{});var Gy=n(Vc);ob=i(Gy,"__call__"),Gy.forEach(t),ab=i(Ji," special method."),Ji.forEach(t),sb=p(Ra),y(xa.$$.fragment,Ra),nb=p(Ra),y(Wa.$$.fragment,Ra),Ra.forEach(t),Le.forEach(t),Ld=p(o),vo=s(o,"H2",{class:!0});var em=n(vo);Va=s(em,"A",{id:!0,class:!0,href:!0});var Jy=n(Va);jc=s(Jy,"SPAN",{});var Zy=n(jc);y(yr.$$.fragment,Zy),Zy.forEach(t),Jy.forEach(t),rb=p(em),Fc=s(em,"SPAN",{});var Ky=n(Fc);ib=i(Ky,"FlaxWav2Vec2ForPreTraining"),Ky.forEach(t),em.forEach(t),Dd=p(o),Y=s(o,"DIV",{class:!0});var De=n(Y);y(kr.$$.fragment,De),lb=p(De),bo=s(De,"P",{});var Zi=n(bo);cb=i(Zi,"Wav2Vec2 Model with a quantizer and "),Cc=s(Zi,"CODE",{});var Qy=n(Cc);db=i(Qy,"VQ"),Qy.forEach(t),pb=i(Zi,` head on top.
Wav2Vec2 was proposed in `),Tr=s(Zi,"A",{href:!0,rel:!0});var Yy=n(Tr);mb=i(Yy,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Yy.forEach(t),hb=i(Zi,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Zi.forEach(t),fb=p(De),$r=s(De,"P",{});var tm=n($r);ub=i(tm,"This model inherits from "),Fi=s(tm,"A",{href:!0});var ek=n(Fi);gb=i(ek,"FlaxPreTrainedModel"),ek.forEach(t),_b=i(tm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tm.forEach(t),vb=p(De),xr=s(De,"P",{});var om=n(xr);bb=i(om,`This model is also a Flax Linen
`),Wr=s(om,"A",{href:!0,rel:!0});var tk=n(Wr);wb=i(tk,"flax.nn.Module"),tk.forEach(t),yb=i(om,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),om.forEach(t),kb=p(De),Ec=s(De,"P",{});var ok=n(Ec);Tb=i(ok,"Finally, this model supports inherent JAX features such as:"),ok.forEach(t),$b=p(De),yt=s(De,"UL",{});var Ha=n(yt);Pc=s(Ha,"LI",{});var ak=n(Pc);Vr=s(ak,"A",{href:!0,rel:!0});var sk=n(Vr);xb=i(sk,"Just-In-Time (JIT) compilation"),sk.forEach(t),ak.forEach(t),Wb=p(Ha),qc=s(Ha,"LI",{});var nk=n(qc);jr=s(nk,"A",{href:!0,rel:!0});var rk=n(jr);Vb=i(rk,"Automatic Differentiation"),rk.forEach(t),nk.forEach(t),jb=p(Ha),zc=s(Ha,"LI",{});var ik=n(zc);Fr=s(ik,"A",{href:!0,rel:!0});var lk=n(Fr);Fb=i(lk,"Vectorization"),lk.forEach(t),ik.forEach(t),Cb=p(Ha),Mc=s(Ha,"LI",{});var ck=n(Mc);Cr=s(ck,"A",{href:!0,rel:!0});var dk=n(Cr);Eb=i(dk,"Parallelization"),dk.forEach(t),ck.forEach(t),Ha.forEach(t),Pb=p(De),ot=s(De,"DIV",{class:!0});var Xa=n(ot);y(Er.$$.fragment,Xa),qb=p(Xa),wo=s(Xa,"P",{});var Ki=n(wo);zb=i(Ki,"The "),Ci=s(Ki,"A",{href:!0});var pk=n(Ci);Mb=i(pk,"FlaxWav2Vec2ForPreTraining"),pk.forEach(t),Ab=i(Ki," forward method, overrides the "),Ac=s(Ki,"CODE",{});var mk=n(Ac);Ob=i(mk,"__call__"),mk.forEach(t),Lb=i(Ki," special method."),Ki.forEach(t),Db=p(Xa),y(ja.$$.fragment,Xa),Sb=p(Xa),y(Fa.$$.fragment,Xa),Xa.forEach(t),De.forEach(t),this.h()},h(){m(c,"name","hf:doc:metadata"),m(c,"content",JSON.stringify(Kk)),m(h,"id","wav2vec2"),m(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(h,"href","#wav2vec2"),m(f,"class","relative group"),m(A,"id","overview"),m(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(A,"href","#overview"),m(C,"class","relative group"),m(_e,"href","https://arxiv.org/abs/2006.11477"),m(_e,"rel","nofollow"),m(Ee,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),m(Be,"href","https://huggingface.co/patrickvonplaten"),m(Be,"rel","nofollow"),m(Pe,"id","transformers.Wav2Vec2Config"),m(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Pe,"href","#transformers.Wav2Vec2Config"),m(ke,"class","relative group"),m(Sr,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Model"),m(Ga,"href","https://huggingface.co/facebook/wav2vec2-base-960h"),m(Ga,"rel","nofollow"),m(Nr,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),m(Ir,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),m(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($o,"id","transformers.Wav2Vec2CTCTokenizer"),m($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m($o,"href","#transformers.Wav2Vec2CTCTokenizer"),m(St,"class","relative group"),m(Br,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ur,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(jo,"id","transformers.Wav2Vec2FeatureExtractor"),m(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(jo,"href","#transformers.Wav2Vec2FeatureExtractor"),m(Nt,"class","relative group"),m(Rr,"href","/docs/transformers/v4.21.1/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor"),m(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Co,"id","transformers.Wav2Vec2Processor"),m(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Co,"href","#transformers.Wav2Vec2Processor"),m(It,"class","relative group"),m(Hr,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor"),m(Xr,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),m(Gr,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(cs,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__"),m(Jr,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.decode"),m(ps,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor.__call__"),m(Zr,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.as_target_processor"),m(ms,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),m(Eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Kr,"href","/docs/transformers/v4.21.1/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor.pad"),m(Qr,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.as_target_processor"),m(Yr,"href","/docs/transformers/v4.21.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.pad"),m(Po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ei,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ti,"href","/docs/transformers/v4.21.1/en/main_classes/processors#transformers.ProcessorMixin.from_pretrained"),m(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(oi,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.batch_decode"),m(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ai,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.decode"),m(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Oo,"id","transformers.Wav2Vec2ProcessorWithLM"),m(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Oo,"href","#transformers.Wav2Vec2ProcessorWithLM"),m(Bt,"class","relative group"),m(xs,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor.__call__"),m(si,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2ProcessorWithLM.as_target_processor"),m(Ws,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),m(Lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ni,"href","/docs/transformers/v4.21.1/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor.pad"),m(ri,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2ProcessorWithLM.as_target_processor"),m(ii,"href","/docs/transformers/v4.21.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.pad"),m(Do,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(li,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2ProcessorWithLM"),m(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ci,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Uo,"id","transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput"),m(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Uo,"href","#transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput"),m(Ut,"class","relative group"),m(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(di,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2ForPreTraining"),m(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xo,"id","transformers.Wav2Vec2Model"),m(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Xo,"href","#transformers.Wav2Vec2Model"),m(Gt,"class","relative group"),m(Js,"href","https://arxiv.org/abs/2006.11477"),m(Js,"rel","nofollow"),m(pi,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),m(Qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Qs,"rel","nofollow"),m(mi,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Model"),m(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Zo,"id","transformers.Wav2Vec2ForCTC"),m(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Zo,"href","#transformers.Wav2Vec2ForCTC"),m(Zt,"class","relative group"),m(on,"href","https://arxiv.org/abs/2006.11477"),m(on,"rel","nofollow"),m(hi,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),m(nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(nn,"rel","nofollow"),m(fi,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC"),m(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ea,"id","transformers.Wav2Vec2ForSequenceClassification"),m(ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ea,"href","#transformers.Wav2Vec2ForSequenceClassification"),m(Yt,"class","relative group"),m(pn,"href","https://arxiv.org/abs/2006.11477"),m(pn,"rel","nofollow"),m(ui,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),m(fn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(fn,"rel","nofollow"),m(gi,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2ForSequenceClassification"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(sa,"id","transformers.Wav2Vec2ForAudioFrameClassification"),m(sa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(sa,"href","#transformers.Wav2Vec2ForAudioFrameClassification"),m(to,"class","relative group"),m(bn,"href","https://arxiv.org/abs/2006.11477"),m(bn,"rel","nofollow"),m(_i,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),m(kn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(kn,"rel","nofollow"),m(vi,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2ForAudioFrameClassification"),m(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ia,"id","transformers.Wav2Vec2ForXVector"),m(ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ia,"href","#transformers.Wav2Vec2ForXVector"),m(ao,"class","relative group"),m(Vn,"href","https://arxiv.org/abs/2006.11477"),m(Vn,"rel","nofollow"),m(bi,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),m(Cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Cn,"rel","nofollow"),m(wi,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2ForXVector"),m(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(da,"id","transformers.Wav2Vec2ForPreTraining"),m(da,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(da,"href","#transformers.Wav2Vec2ForPreTraining"),m(no,"class","relative group"),m(zn,"href","https://arxiv.org/abs/2006.11477"),m(zn,"rel","nofollow"),m(yi,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),m(On,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(On,"rel","nofollow"),m(ki,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2ForPreTraining"),m(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ha,"id","transformers.TFWav2Vec2Model"),m(ha,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ha,"href","#transformers.TFWav2Vec2Model"),m(lo,"class","relative group"),m(Ti,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),m(Bn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Bn,"rel","nofollow"),m($i,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.TFWav2Vec2Model"),m(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_a,"id","transformers.TFWav2Vec2ForCTC"),m(_a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(_a,"href","#transformers.TFWav2Vec2ForCTC"),m(po,"class","relative group"),m(xi,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),m(Zn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Zn,"rel","nofollow"),m(Wi,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.TFWav2Vec2ForCTC"),m(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ya,"id","transformers.FlaxWav2Vec2Model"),m(ya,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ya,"href","#transformers.FlaxWav2Vec2Model"),m(ho,"class","relative group"),m(tr,"href","https://arxiv.org/abs/2006.11477"),m(tr,"rel","nofollow"),m(Vi,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(sr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),m(sr,"rel","nofollow"),m(nr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(nr,"rel","nofollow"),m(rr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(rr,"rel","nofollow"),m(ir,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(ir,"rel","nofollow"),m(lr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(lr,"rel","nofollow"),m(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($a,"id","transformers.FlaxWav2Vec2ForCTC"),m($a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m($a,"href","#transformers.FlaxWav2Vec2ForCTC"),m(uo,"class","relative group"),m(mr,"href","https://arxiv.org/abs/2006.11477"),m(mr,"rel","nofollow"),m(ji,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(ur,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),m(ur,"rel","nofollow"),m(gr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(gr,"rel","nofollow"),m(_r,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(_r,"rel","nofollow"),m(vr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(vr,"rel","nofollow"),m(br,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(br,"rel","nofollow"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Va,"id","transformers.FlaxWav2Vec2ForPreTraining"),m(Va,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Va,"href","#transformers.FlaxWav2Vec2ForPreTraining"),m(vo,"class","relative group"),m(Tr,"href","https://arxiv.org/abs/2006.11477"),m(Tr,"rel","nofollow"),m(Fi,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(Wr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),m(Wr,"rel","nofollow"),m(Vr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(Vr,"rel","nofollow"),m(jr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(jr,"rel","nofollow"),m(Fr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(Fr,"rel","nofollow"),m(Cr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(Cr,"rel","nofollow"),m(Ci,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.FlaxWav2Vec2ForPreTraining"),m(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,c),_(o,b,g),_(o,f,g),e(f,h),e(h,v),k(l,v,null),e(f,u),e(f,j),e(j,D),_(o,q,g),_(o,C,g),e(C,A),e(A,O),k(H,O,null),e(C,S),e(C,P),e(P,je),_(o,ge,g),_(o,B,g),e(B,U),e(B,_e),e(_e,Se),e(B,z),_(o,I,g),_(o,Fe,g),e(Fe,ve),_(o,Re,g),_(o,Ce,g),e(Ce,oe),e(oe,lt),_(o,He,g),_(o,L,g),e(L,ct),_(o,de,g),_(o,pe,g),e(pe,Ne),e(Ne,be),e(pe,dt),e(pe,we),e(we,ae),e(we,Ee),e(Ee,ye),e(we,pt),_(o,V,g),_(o,E,g),e(E,Ie),e(E,Be),e(Be,Mt),e(E,se),_(o,$t,g),_(o,ke,g),e(ke,Pe),e(Pe,X),k(G,X,null),e(ke,At),e(ke,mt),e(mt,Te),_(o,xt,g),_(o,J,g),k($e,J,null),e(J,Ot),e(J,Lt),e(Lt,am),e(Lt,Sr),e(Sr,sm),e(Lt,nm),e(Lt,Ga),e(Ga,rm),e(Lt,im),e(J,lm),e(J,Dt),e(Dt,cm),e(Dt,Nr),e(Nr,dm),e(Dt,pm),e(Dt,Ir),e(Ir,mm),e(Dt,hm),e(J,fm),k(To,J,null),_(o,sd,g),_(o,St,g),e(St,$o),e($o,Qi),k(Ja,Qi,null),e(St,um),e(St,Yi),e(Yi,gm),_(o,nd,g),_(o,Z,g),k(Za,Z,null),e(Z,_m),e(Z,el),e(el,vm),e(Z,bm),e(Z,Ka),e(Ka,wm),e(Ka,Br),e(Br,ym),e(Ka,km),e(Z,Tm),e(Z,xo),k(Qa,xo,null),e(xo,$m),e(xo,tl),e(tl,xm),e(Z,Wm),e(Z,Ur),k(Ya,Ur,null),e(Z,Vm),e(Z,Xe),k(es,Xe,null),e(Xe,jm),e(Xe,ol),e(ol,Fm),e(Xe,Cm),e(Xe,ts),e(ts,Em),e(ts,al),e(al,Pm),e(ts,qm),e(Xe,zm),k(Wo,Xe,null),e(Z,Mm),e(Z,Vo),k(os,Vo,null),e(Vo,Am),e(Vo,sl),e(sl,Om),_(o,rd,g),_(o,Nt,g),e(Nt,jo),e(jo,nl),k(as,nl,null),e(Nt,Lm),e(Nt,rl),e(rl,Dm),_(o,id,g),_(o,Ue,g),k(ss,Ue,null),e(Ue,Sm),e(Ue,il),e(il,Nm),e(Ue,Im),e(Ue,ns),e(ns,Bm),e(ns,Rr),e(Rr,Um),e(ns,Rm),e(Ue,Hm),e(Ue,Fo),k(rs,Fo,null),e(Fo,Xm),e(Fo,ll),e(ll,Gm),_(o,ld,g),_(o,It,g),e(It,Co),e(Co,cl),k(is,cl,null),e(It,Jm),e(It,dl),e(dl,Zm),_(o,cd,g),_(o,M,g),k(ls,M,null),e(M,Km),e(M,pl),e(pl,Qm),e(M,Ym),e(M,qe),e(qe,Hr),e(Hr,eh),e(qe,th),e(qe,Xr),e(Xr,oh),e(qe,ah),e(qe,Gr),e(Gr,sh),e(qe,nh),e(qe,cs),e(cs,ml),e(ml,rh),e(cs,ih),e(qe,lh),e(qe,Jr),e(Jr,ch),e(qe,dh),e(M,ph),e(M,Eo),k(ds,Eo,null),e(Eo,mh),e(Eo,ht),e(ht,hh),e(ht,ps),e(ps,hl),e(hl,fh),e(ps,uh),e(ht,gh),e(ht,Zr),e(Zr,_h),e(ht,vh),e(ht,ms),e(ms,fl),e(fl,bh),e(ms,wh),e(ht,yh),e(M,kh),e(M,Po),k(hs,Po,null),e(Po,Th),e(Po,ft),e(ft,$h),e(ft,Kr),e(Kr,xh),e(ft,Wh),e(ft,Qr),e(Qr,Vh),e(ft,jh),e(ft,Yr),e(Yr,Fh),e(ft,Ch),e(M,Eh),e(M,ei),k(fs,ei,null),e(M,Ph),e(M,Wt),k(us,Wt,null),e(Wt,qh),e(Wt,gs),e(gs,zh),e(gs,ti),e(ti,Mh),e(gs,Ah),e(Wt,Oh),k(qo,Wt,null),e(M,Lh),e(M,zo),k(_s,zo,null),e(zo,Dh),e(zo,vs),e(vs,Sh),e(vs,oi),e(oi,Nh),e(vs,Ih),e(M,Bh),e(M,Mo),k(bs,Mo,null),e(Mo,Uh),e(Mo,ws),e(ws,Rh),e(ws,ai),e(ai,Hh),e(ws,Xh),e(M,Gh),e(M,Ao),k(ys,Ao,null),e(Ao,Jh),e(Ao,ul),e(ul,Zh),_(o,dd,g),_(o,Bt,g),e(Bt,Oo),e(Oo,gl),k(ks,gl,null),e(Bt,Kh),e(Bt,_l),e(_l,Qh),_(o,pd,g),_(o,N,g),k(Ts,N,null),e(N,Yh),e(N,vl),e(vl,ef),e(N,tf),e(N,Lo),k($s,Lo,null),e(Lo,of),e(Lo,ut),e(ut,af),e(ut,xs),e(xs,bl),e(bl,sf),e(xs,nf),e(ut,rf),e(ut,si),e(si,lf),e(ut,cf),e(ut,Ws),e(Ws,wl),e(wl,df),e(Ws,pf),e(ut,mf),e(N,hf),e(N,Do),k(Vs,Do,null),e(Do,ff),e(Do,gt),e(gt,uf),e(gt,ni),e(ni,gf),e(gt,_f),e(gt,ri),e(ri,vf),e(gt,bf),e(gt,ii),e(ii,wf),e(gt,yf),e(N,kf),e(N,Vt),k(js,Vt,null),e(Vt,Tf),e(Vt,Fs),e(Fs,$f),e(Fs,li),e(li,xf),e(Fs,Wf),e(Vt,Vf),k(So,Vt,null),e(N,jf),e(N,ci),k(Cs,ci,null),e(N,Ff),e(N,jt),k(Es,jt,null),e(jt,Cf),e(jt,yl),e(yl,Ef),e(jt,Pf),k(No,jt,null),e(N,qf),e(N,Ft),k(Ps,Ft,null),e(Ft,zf),e(Ft,kl),e(kl,Mf),e(Ft,Af),k(Io,Ft,null),e(N,Of),e(N,Bo),k(qs,Bo,null),e(Bo,Lf),e(Bo,Tl),e(Tl,Df),_(o,md,g),_(o,Ut,g),e(Ut,Uo),e(Uo,$l),k(zs,$l,null),e(Ut,Sf),e(Ut,xl),e(xl,Nf),_(o,hd,g),_(o,Rt,g),k(Ms,Rt,null),e(Rt,If),e(Rt,As),e(As,Bf),e(As,Wl),e(Wl,Uf),e(As,Rf),_(o,fd,g),_(o,Ht,g),k(Os,Ht,null),e(Ht,Hf),e(Ht,Vl),e(Vl,Xf),_(o,ud,g),_(o,Xt,g),k(Ls,Xt,null),e(Xt,Gf),e(Xt,Ds),e(Ds,Jf),e(Ds,di),e(di,Zf),e(Ds,Kf),_(o,gd,g),_(o,_t,g),k(Ss,_t,null),e(_t,Qf),e(_t,Ns),e(Ns,Yf),e(Ns,jl),e(jl,eu),e(Ns,tu),e(_t,ou),e(_t,Ro),k(Is,Ro,null),e(Ro,au),e(Ro,Fl),e(Fl,su),_(o,_d,g),_(o,vt,g),k(Bs,vt,null),e(vt,nu),e(vt,Us),e(Us,ru),e(Us,Cl),e(Cl,iu),e(Us,lu),e(vt,cu),e(vt,Ho),k(Rs,Ho,null),e(Ho,du),e(Ho,El),e(El,pu),_(o,vd,g),_(o,Gt,g),e(Gt,Xo),e(Xo,Pl),k(Hs,Pl,null),e(Gt,mu),e(Gt,ql),e(ql,hu),_(o,bd,g),_(o,xe,g),k(Xs,xe,null),e(xe,fu),e(xe,Gs),e(Gs,uu),e(Gs,Js),e(Js,gu),e(Gs,_u),e(xe,vu),e(xe,Zs),e(Zs,bu),e(Zs,pi),e(pi,wu),e(Zs,yu),e(xe,ku),e(xe,Ks),e(Ks,Tu),e(Ks,Qs),e(Qs,$u),e(Ks,xu),e(xe,Wu),e(xe,Ge),k(Ys,Ge,null),e(Ge,Vu),e(Ge,Jt),e(Jt,ju),e(Jt,mi),e(mi,Fu),e(Jt,Cu),e(Jt,zl),e(zl,Eu),e(Jt,Pu),e(Ge,qu),k(Go,Ge,null),e(Ge,zu),k(Jo,Ge,null),_(o,wd,g),_(o,Zt,g),e(Zt,Zo),e(Zo,Ml),k(en,Ml,null),e(Zt,Mu),e(Zt,Al),e(Al,Au),_(o,yd,g),_(o,We,g),k(tn,We,null),e(We,Ou),e(We,Kt),e(Kt,Lu),e(Kt,Ol),e(Ol,Du),e(Kt,Su),e(Kt,on),e(on,Nu),e(Kt,Iu),e(We,Bu),e(We,an),e(an,Uu),e(an,hi),e(hi,Ru),e(an,Hu),e(We,Xu),e(We,sn),e(sn,Gu),e(sn,nn),e(nn,Ju),e(sn,Zu),e(We,Ku),e(We,ze),k(rn,ze,null),e(ze,Qu),e(ze,Qt),e(Qt,Yu),e(Qt,fi),e(fi,eg),e(Qt,tg),e(Qt,Ll),e(Ll,og),e(Qt,ag),e(ze,sg),k(Ko,ze,null),e(ze,ng),k(Qo,ze,null),e(ze,rg),k(Yo,ze,null),_(o,kd,g),_(o,Yt,g),e(Yt,ea),e(ea,Dl),k(ln,Dl,null),e(Yt,ig),e(Yt,Sl),e(Sl,lg),_(o,Td,g),_(o,ne,g),k(cn,ne,null),e(ne,cg),e(ne,Nl),e(Nl,dg),e(ne,pg),e(ne,dn),e(dn,mg),e(dn,pn),e(pn,hg),e(dn,fg),e(ne,ug),e(ne,mn),e(mn,gg),e(mn,ui),e(ui,_g),e(mn,vg),e(ne,bg),e(ne,hn),e(hn,wg),e(hn,fn),e(fn,yg),e(hn,kg),e(ne,Tg),e(ne,Me),k(un,Me,null),e(Me,$g),e(Me,eo),e(eo,xg),e(eo,gi),e(gi,Wg),e(eo,Vg),e(eo,Il),e(Il,jg),e(eo,Fg),e(Me,Cg),k(ta,Me,null),e(Me,Eg),k(oa,Me,null),e(Me,Pg),k(aa,Me,null),_(o,$d,g),_(o,to,g),e(to,sa),e(sa,Bl),k(gn,Bl,null),e(to,qg),e(to,Ul),e(Ul,zg),_(o,xd,g),_(o,re,g),k(_n,re,null),e(re,Mg),e(re,Rl),e(Rl,Ag),e(re,Og),e(re,vn),e(vn,Lg),e(vn,bn),e(bn,Dg),e(vn,Sg),e(re,Ng),e(re,wn),e(wn,Ig),e(wn,_i),e(_i,Bg),e(wn,Ug),e(re,Rg),e(re,yn),e(yn,Hg),e(yn,kn),e(kn,Xg),e(yn,Gg),e(re,Jg),e(re,Je),k(Tn,Je,null),e(Je,Zg),e(Je,oo),e(oo,Kg),e(oo,vi),e(vi,Qg),e(oo,Yg),e(oo,Hl),e(Hl,e_),e(oo,t_),e(Je,o_),k(na,Je,null),e(Je,a_),k(ra,Je,null),_(o,Wd,g),_(o,ao,g),e(ao,ia),e(ia,Xl),k($n,Xl,null),e(ao,s_),e(ao,Gl),e(Gl,n_),_(o,Vd,g),_(o,ie,g),k(xn,ie,null),e(ie,r_),e(ie,Jl),e(Jl,i_),e(ie,l_),e(ie,Wn),e(Wn,c_),e(Wn,Vn),e(Vn,d_),e(Wn,p_),e(ie,m_),e(ie,jn),e(jn,h_),e(jn,bi),e(bi,f_),e(jn,u_),e(ie,g_),e(ie,Fn),e(Fn,__),e(Fn,Cn),e(Cn,v_),e(Fn,b_),e(ie,w_),e(ie,Ze),k(En,Ze,null),e(Ze,y_),e(Ze,so),e(so,k_),e(so,wi),e(wi,T_),e(so,$_),e(so,Zl),e(Zl,x_),e(so,W_),e(Ze,V_),k(la,Ze,null),e(Ze,j_),k(ca,Ze,null),_(o,jd,g),_(o,no,g),e(no,da),e(da,Kl),k(Pn,Kl,null),e(no,F_),e(no,Ql),e(Ql,C_),_(o,Fd,g),_(o,Ve,g),k(qn,Ve,null),e(Ve,E_),e(Ve,ro),e(ro,P_),e(ro,Yl),e(Yl,q_),e(ro,z_),e(ro,zn),e(zn,M_),e(ro,A_),e(Ve,O_),e(Ve,Mn),e(Mn,L_),e(Mn,yi),e(yi,D_),e(Mn,S_),e(Ve,N_),e(Ve,An),e(An,I_),e(An,On),e(On,B_),e(An,U_),e(Ve,R_),e(Ve,Ke),k(Ln,Ke,null),e(Ke,H_),e(Ke,io),e(io,X_),e(io,ki),e(ki,G_),e(io,J_),e(io,ec),e(ec,Z_),e(io,K_),e(Ke,Q_),k(pa,Ke,null),e(Ke,Y_),k(ma,Ke,null),_(o,Cd,g),_(o,lo,g),e(lo,ha),e(ha,tc),k(Dn,tc,null),e(lo,ev),e(lo,oc),e(oc,tv),_(o,Ed,g),_(o,le,g),k(Sn,le,null),e(le,ov),e(le,ac),e(ac,av),e(le,sv),e(le,Nn),e(Nn,nv),e(Nn,Ti),e(Ti,rv),e(Nn,iv),e(le,lv),e(le,In),e(In,cv),e(In,Bn),e(Bn,dv),e(In,pv),e(le,mv),k(fa,le,null),e(le,hv),e(le,Qe),k(Un,Qe,null),e(Qe,fv),e(Qe,co),e(co,uv),e(co,$i),e($i,gv),e(co,_v),e(co,sc),e(sc,vv),e(co,bv),e(Qe,wv),k(ua,Qe,null),e(Qe,yv),k(ga,Qe,null),_(o,Pd,g),_(o,po,g),e(po,_a),e(_a,nc),k(Rn,nc,null),e(po,kv),e(po,rc),e(rc,Tv),_(o,qd,g),_(o,ce,g),k(Hn,ce,null),e(ce,$v),e(ce,Xn),e(Xn,xv),e(Xn,ic),e(ic,Wv),e(Xn,Vv),e(ce,jv),e(ce,Gn),e(Gn,Fv),e(Gn,xi),e(xi,Cv),e(Gn,Ev),e(ce,Pv),e(ce,Jn),e(Jn,qv),e(Jn,Zn),e(Zn,zv),e(Jn,Mv),e(ce,Av),k(va,ce,null),e(ce,Ov),e(ce,Ye),k(Kn,Ye,null),e(Ye,Lv),e(Ye,mo),e(mo,Dv),e(mo,Wi),e(Wi,Sv),e(mo,Nv),e(mo,lc),e(lc,Iv),e(mo,Bv),e(Ye,Uv),k(ba,Ye,null),e(Ye,Rv),k(wa,Ye,null),_(o,zd,g),_(o,ho,g),e(ho,ya),e(ya,cc),k(Qn,cc,null),e(ho,Hv),e(ho,dc),e(dc,Xv),_(o,Md,g),_(o,K,g),k(Yn,K,null),e(K,Gv),e(K,er),e(er,Jv),e(er,tr),e(tr,Zv),e(er,Kv),e(K,Qv),e(K,or),e(or,Yv),e(or,Vi),e(Vi,e2),e(or,t2),e(K,o2),e(K,ar),e(ar,a2),e(ar,sr),e(sr,s2),e(ar,n2),e(K,r2),e(K,pc),e(pc,i2),e(K,l2),e(K,bt),e(bt,mc),e(mc,nr),e(nr,c2),e(bt,d2),e(bt,hc),e(hc,rr),e(rr,p2),e(bt,m2),e(bt,fc),e(fc,ir),e(ir,h2),e(bt,f2),e(bt,uc),e(uc,lr),e(lr,u2),e(K,g2),e(K,et),k(cr,et,null),e(et,_2),e(et,fo),e(fo,v2),e(fo,gc),e(gc,b2),e(fo,w2),e(fo,_c),e(_c,y2),e(fo,k2),e(et,T2),k(ka,et,null),e(et,$2),k(Ta,et,null),_(o,Ad,g),_(o,uo,g),e(uo,$a),e($a,vc),k(dr,vc,null),e(uo,x2),e(uo,bc),e(bc,W2),_(o,Od,g),_(o,Q,g),k(pr,Q,null),e(Q,V2),e(Q,go),e(go,j2),e(go,wc),e(wc,F2),e(go,C2),e(go,mr),e(mr,E2),e(go,P2),e(Q,q2),e(Q,hr),e(hr,z2),e(hr,ji),e(ji,M2),e(hr,A2),e(Q,O2),e(Q,fr),e(fr,L2),e(fr,ur),e(ur,D2),e(fr,S2),e(Q,N2),e(Q,yc),e(yc,I2),e(Q,B2),e(Q,wt),e(wt,kc),e(kc,gr),e(gr,U2),e(wt,R2),e(wt,Tc),e(Tc,_r),e(_r,H2),e(wt,X2),e(wt,$c),e($c,vr),e(vr,G2),e(wt,J2),e(wt,xc),e(xc,br),e(br,Z2),e(Q,K2),e(Q,tt),k(wr,tt,null),e(tt,Q2),e(tt,_o),e(_o,Y2),e(_o,Wc),e(Wc,eb),e(_o,tb),e(_o,Vc),e(Vc,ob),e(_o,ab),e(tt,sb),k(xa,tt,null),e(tt,nb),k(Wa,tt,null),_(o,Ld,g),_(o,vo,g),e(vo,Va),e(Va,jc),k(yr,jc,null),e(vo,rb),e(vo,Fc),e(Fc,ib),_(o,Dd,g),_(o,Y,g),k(kr,Y,null),e(Y,lb),e(Y,bo),e(bo,cb),e(bo,Cc),e(Cc,db),e(bo,pb),e(bo,Tr),e(Tr,mb),e(bo,hb),e(Y,fb),e(Y,$r),e($r,ub),e($r,Fi),e(Fi,gb),e($r,_b),e(Y,vb),e(Y,xr),e(xr,bb),e(xr,Wr),e(Wr,wb),e(xr,yb),e(Y,kb),e(Y,Ec),e(Ec,Tb),e(Y,$b),e(Y,yt),e(yt,Pc),e(Pc,Vr),e(Vr,xb),e(yt,Wb),e(yt,qc),e(qc,jr),e(jr,Vb),e(yt,jb),e(yt,zc),e(zc,Fr),e(Fr,Fb),e(yt,Cb),e(yt,Mc),e(Mc,Cr),e(Cr,Eb),e(Y,Pb),e(Y,ot),k(Er,ot,null),e(ot,qb),e(ot,wo),e(wo,zb),e(wo,Ci),e(Ci,Mb),e(wo,Ab),e(wo,Ac),e(Ac,Ob),e(wo,Lb),e(ot,Db),k(ja,ot,null),e(ot,Sb),k(Fa,ot,null),Sd=!0},p(o,[g]){const Pr={};g&2&&(Pr.$$scope={dirty:g,ctx:o}),To.$set(Pr);const Oc={};g&2&&(Oc.$$scope={dirty:g,ctx:o}),Wo.$set(Oc);const Lc={};g&2&&(Lc.$$scope={dirty:g,ctx:o}),qo.$set(Lc);const Dc={};g&2&&(Dc.$$scope={dirty:g,ctx:o}),So.$set(Dc);const qr={};g&2&&(qr.$$scope={dirty:g,ctx:o}),No.$set(qr);const Sc={};g&2&&(Sc.$$scope={dirty:g,ctx:o}),Io.$set(Sc);const Nc={};g&2&&(Nc.$$scope={dirty:g,ctx:o}),Go.$set(Nc);const Ic={};g&2&&(Ic.$$scope={dirty:g,ctx:o}),Jo.$set(Ic);const zr={};g&2&&(zr.$$scope={dirty:g,ctx:o}),Ko.$set(zr);const Bc={};g&2&&(Bc.$$scope={dirty:g,ctx:o}),Qo.$set(Bc);const Uc={};g&2&&(Uc.$$scope={dirty:g,ctx:o}),Yo.$set(Uc);const Rc={};g&2&&(Rc.$$scope={dirty:g,ctx:o}),ta.$set(Rc);const Hc={};g&2&&(Hc.$$scope={dirty:g,ctx:o}),oa.$set(Hc);const Xc={};g&2&&(Xc.$$scope={dirty:g,ctx:o}),aa.$set(Xc);const Mr={};g&2&&(Mr.$$scope={dirty:g,ctx:o}),na.$set(Mr);const Gc={};g&2&&(Gc.$$scope={dirty:g,ctx:o}),ra.$set(Gc);const Ar={};g&2&&(Ar.$$scope={dirty:g,ctx:o}),la.$set(Ar);const Jc={};g&2&&(Jc.$$scope={dirty:g,ctx:o}),ca.$set(Jc);const Or={};g&2&&(Or.$$scope={dirty:g,ctx:o}),pa.$set(Or);const Zc={};g&2&&(Zc.$$scope={dirty:g,ctx:o}),ma.$set(Zc);const Lr={};g&2&&(Lr.$$scope={dirty:g,ctx:o}),fa.$set(Lr);const Kc={};g&2&&(Kc.$$scope={dirty:g,ctx:o}),ua.$set(Kc);const Qc={};g&2&&(Qc.$$scope={dirty:g,ctx:o}),ga.$set(Qc);const Yc={};g&2&&(Yc.$$scope={dirty:g,ctx:o}),va.$set(Yc);const kt={};g&2&&(kt.$$scope={dirty:g,ctx:o}),ba.$set(kt);const yo={};g&2&&(yo.$$scope={dirty:g,ctx:o}),wa.$set(yo);const ed={};g&2&&(ed.$$scope={dirty:g,ctx:o}),ka.$set(ed);const td={};g&2&&(td.$$scope={dirty:g,ctx:o}),Ta.$set(td);const ko={};g&2&&(ko.$$scope={dirty:g,ctx:o}),xa.$set(ko);const od={};g&2&&(od.$$scope={dirty:g,ctx:o}),Wa.$set(od);const ad={};g&2&&(ad.$$scope={dirty:g,ctx:o}),ja.$set(ad);const Dr={};g&2&&(Dr.$$scope={dirty:g,ctx:o}),Fa.$set(Dr)},i(o){Sd||(T(l.$$.fragment,o),T(H.$$.fragment,o),T(G.$$.fragment,o),T($e.$$.fragment,o),T(To.$$.fragment,o),T(Ja.$$.fragment,o),T(Za.$$.fragment,o),T(Qa.$$.fragment,o),T(Ya.$$.fragment,o),T(es.$$.fragment,o),T(Wo.$$.fragment,o),T(os.$$.fragment,o),T(as.$$.fragment,o),T(ss.$$.fragment,o),T(rs.$$.fragment,o),T(is.$$.fragment,o),T(ls.$$.fragment,o),T(ds.$$.fragment,o),T(hs.$$.fragment,o),T(fs.$$.fragment,o),T(us.$$.fragment,o),T(qo.$$.fragment,o),T(_s.$$.fragment,o),T(bs.$$.fragment,o),T(ys.$$.fragment,o),T(ks.$$.fragment,o),T(Ts.$$.fragment,o),T($s.$$.fragment,o),T(Vs.$$.fragment,o),T(js.$$.fragment,o),T(So.$$.fragment,o),T(Cs.$$.fragment,o),T(Es.$$.fragment,o),T(No.$$.fragment,o),T(Ps.$$.fragment,o),T(Io.$$.fragment,o),T(qs.$$.fragment,o),T(zs.$$.fragment,o),T(Ms.$$.fragment,o),T(Os.$$.fragment,o),T(Ls.$$.fragment,o),T(Ss.$$.fragment,o),T(Is.$$.fragment,o),T(Bs.$$.fragment,o),T(Rs.$$.fragment,o),T(Hs.$$.fragment,o),T(Xs.$$.fragment,o),T(Ys.$$.fragment,o),T(Go.$$.fragment,o),T(Jo.$$.fragment,o),T(en.$$.fragment,o),T(tn.$$.fragment,o),T(rn.$$.fragment,o),T(Ko.$$.fragment,o),T(Qo.$$.fragment,o),T(Yo.$$.fragment,o),T(ln.$$.fragment,o),T(cn.$$.fragment,o),T(un.$$.fragment,o),T(ta.$$.fragment,o),T(oa.$$.fragment,o),T(aa.$$.fragment,o),T(gn.$$.fragment,o),T(_n.$$.fragment,o),T(Tn.$$.fragment,o),T(na.$$.fragment,o),T(ra.$$.fragment,o),T($n.$$.fragment,o),T(xn.$$.fragment,o),T(En.$$.fragment,o),T(la.$$.fragment,o),T(ca.$$.fragment,o),T(Pn.$$.fragment,o),T(qn.$$.fragment,o),T(Ln.$$.fragment,o),T(pa.$$.fragment,o),T(ma.$$.fragment,o),T(Dn.$$.fragment,o),T(Sn.$$.fragment,o),T(fa.$$.fragment,o),T(Un.$$.fragment,o),T(ua.$$.fragment,o),T(ga.$$.fragment,o),T(Rn.$$.fragment,o),T(Hn.$$.fragment,o),T(va.$$.fragment,o),T(Kn.$$.fragment,o),T(ba.$$.fragment,o),T(wa.$$.fragment,o),T(Qn.$$.fragment,o),T(Yn.$$.fragment,o),T(cr.$$.fragment,o),T(ka.$$.fragment,o),T(Ta.$$.fragment,o),T(dr.$$.fragment,o),T(pr.$$.fragment,o),T(wr.$$.fragment,o),T(xa.$$.fragment,o),T(Wa.$$.fragment,o),T(yr.$$.fragment,o),T(kr.$$.fragment,o),T(Er.$$.fragment,o),T(ja.$$.fragment,o),T(Fa.$$.fragment,o),Sd=!0)},o(o){$(l.$$.fragment,o),$(H.$$.fragment,o),$(G.$$.fragment,o),$($e.$$.fragment,o),$(To.$$.fragment,o),$(Ja.$$.fragment,o),$(Za.$$.fragment,o),$(Qa.$$.fragment,o),$(Ya.$$.fragment,o),$(es.$$.fragment,o),$(Wo.$$.fragment,o),$(os.$$.fragment,o),$(as.$$.fragment,o),$(ss.$$.fragment,o),$(rs.$$.fragment,o),$(is.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(hs.$$.fragment,o),$(fs.$$.fragment,o),$(us.$$.fragment,o),$(qo.$$.fragment,o),$(_s.$$.fragment,o),$(bs.$$.fragment,o),$(ys.$$.fragment,o),$(ks.$$.fragment,o),$(Ts.$$.fragment,o),$($s.$$.fragment,o),$(Vs.$$.fragment,o),$(js.$$.fragment,o),$(So.$$.fragment,o),$(Cs.$$.fragment,o),$(Es.$$.fragment,o),$(No.$$.fragment,o),$(Ps.$$.fragment,o),$(Io.$$.fragment,o),$(qs.$$.fragment,o),$(zs.$$.fragment,o),$(Ms.$$.fragment,o),$(Os.$$.fragment,o),$(Ls.$$.fragment,o),$(Ss.$$.fragment,o),$(Is.$$.fragment,o),$(Bs.$$.fragment,o),$(Rs.$$.fragment,o),$(Hs.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),$(Go.$$.fragment,o),$(Jo.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(rn.$$.fragment,o),$(Ko.$$.fragment,o),$(Qo.$$.fragment,o),$(Yo.$$.fragment,o),$(ln.$$.fragment,o),$(cn.$$.fragment,o),$(un.$$.fragment,o),$(ta.$$.fragment,o),$(oa.$$.fragment,o),$(aa.$$.fragment,o),$(gn.$$.fragment,o),$(_n.$$.fragment,o),$(Tn.$$.fragment,o),$(na.$$.fragment,o),$(ra.$$.fragment,o),$($n.$$.fragment,o),$(xn.$$.fragment,o),$(En.$$.fragment,o),$(la.$$.fragment,o),$(ca.$$.fragment,o),$(Pn.$$.fragment,o),$(qn.$$.fragment,o),$(Ln.$$.fragment,o),$(pa.$$.fragment,o),$(ma.$$.fragment,o),$(Dn.$$.fragment,o),$(Sn.$$.fragment,o),$(fa.$$.fragment,o),$(Un.$$.fragment,o),$(ua.$$.fragment,o),$(ga.$$.fragment,o),$(Rn.$$.fragment,o),$(Hn.$$.fragment,o),$(va.$$.fragment,o),$(Kn.$$.fragment,o),$(ba.$$.fragment,o),$(wa.$$.fragment,o),$(Qn.$$.fragment,o),$(Yn.$$.fragment,o),$(cr.$$.fragment,o),$(ka.$$.fragment,o),$(Ta.$$.fragment,o),$(dr.$$.fragment,o),$(pr.$$.fragment,o),$(wr.$$.fragment,o),$(xa.$$.fragment,o),$(Wa.$$.fragment,o),$(yr.$$.fragment,o),$(kr.$$.fragment,o),$(Er.$$.fragment,o),$(ja.$$.fragment,o),$(Fa.$$.fragment,o),Sd=!1},d(o){t(c),o&&t(b),o&&t(f),x(l),o&&t(q),o&&t(C),x(H),o&&t(ge),o&&t(B),o&&t(I),o&&t(Fe),o&&t(Re),o&&t(Ce),o&&t(He),o&&t(L),o&&t(de),o&&t(pe),o&&t(V),o&&t(E),o&&t($t),o&&t(ke),x(G),o&&t(xt),o&&t(J),x($e),x(To),o&&t(sd),o&&t(St),x(Ja),o&&t(nd),o&&t(Z),x(Za),x(Qa),x(Ya),x(es),x(Wo),x(os),o&&t(rd),o&&t(Nt),x(as),o&&t(id),o&&t(Ue),x(ss),x(rs),o&&t(ld),o&&t(It),x(is),o&&t(cd),o&&t(M),x(ls),x(ds),x(hs),x(fs),x(us),x(qo),x(_s),x(bs),x(ys),o&&t(dd),o&&t(Bt),x(ks),o&&t(pd),o&&t(N),x(Ts),x($s),x(Vs),x(js),x(So),x(Cs),x(Es),x(No),x(Ps),x(Io),x(qs),o&&t(md),o&&t(Ut),x(zs),o&&t(hd),o&&t(Rt),x(Ms),o&&t(fd),o&&t(Ht),x(Os),o&&t(ud),o&&t(Xt),x(Ls),o&&t(gd),o&&t(_t),x(Ss),x(Is),o&&t(_d),o&&t(vt),x(Bs),x(Rs),o&&t(vd),o&&t(Gt),x(Hs),o&&t(bd),o&&t(xe),x(Xs),x(Ys),x(Go),x(Jo),o&&t(wd),o&&t(Zt),x(en),o&&t(yd),o&&t(We),x(tn),x(rn),x(Ko),x(Qo),x(Yo),o&&t(kd),o&&t(Yt),x(ln),o&&t(Td),o&&t(ne),x(cn),x(un),x(ta),x(oa),x(aa),o&&t($d),o&&t(to),x(gn),o&&t(xd),o&&t(re),x(_n),x(Tn),x(na),x(ra),o&&t(Wd),o&&t(ao),x($n),o&&t(Vd),o&&t(ie),x(xn),x(En),x(la),x(ca),o&&t(jd),o&&t(no),x(Pn),o&&t(Fd),o&&t(Ve),x(qn),x(Ln),x(pa),x(ma),o&&t(Cd),o&&t(lo),x(Dn),o&&t(Ed),o&&t(le),x(Sn),x(fa),x(Un),x(ua),x(ga),o&&t(Pd),o&&t(po),x(Rn),o&&t(qd),o&&t(ce),x(Hn),x(va),x(Kn),x(ba),x(wa),o&&t(zd),o&&t(ho),x(Qn),o&&t(Md),o&&t(K),x(Yn),x(cr),x(ka),x(Ta),o&&t(Ad),o&&t(uo),x(dr),o&&t(Od),o&&t(Q),x(pr),x(wr),x(xa),x(Wa),o&&t(Ld),o&&t(vo),x(yr),o&&t(Dd),o&&t(Y),x(kr),x(Er),x(ja),x(Fa)}}}const Kk={local:"wav2vec2",sections:[{local:"overview",title:"Overview"},{local:"transformers.Wav2Vec2Config",title:"Wav2Vec2Config"},{local:"transformers.Wav2Vec2CTCTokenizer",title:"Wav2Vec2CTCTokenizer"},{local:"transformers.Wav2Vec2FeatureExtractor",title:"Wav2Vec2FeatureExtractor"},{local:"transformers.Wav2Vec2Processor",title:"Wav2Vec2Processor"},{local:"transformers.Wav2Vec2ProcessorWithLM",title:"Wav2Vec2ProcessorWithLM"},{local:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput",title:"Wav2Vec2 specific outputs"},{local:"transformers.Wav2Vec2Model",title:"Wav2Vec2Model"},{local:"transformers.Wav2Vec2ForCTC",title:"Wav2Vec2ForCTC"},{local:"transformers.Wav2Vec2ForSequenceClassification",title:"Wav2Vec2ForSequenceClassification"},{local:"transformers.Wav2Vec2ForAudioFrameClassification",title:"Wav2Vec2ForAudioFrameClassification"},{local:"transformers.Wav2Vec2ForXVector",title:"Wav2Vec2ForXVector"},{local:"transformers.Wav2Vec2ForPreTraining",title:"Wav2Vec2ForPreTraining"},{local:"transformers.TFWav2Vec2Model",title:"TFWav2Vec2Model"},{local:"transformers.TFWav2Vec2ForCTC",title:"TFWav2Vec2ForCTC"},{local:"transformers.FlaxWav2Vec2Model",title:"FlaxWav2Vec2Model"},{local:"transformers.FlaxWav2Vec2ForCTC",title:"FlaxWav2Vec2ForCTC"},{local:"transformers.FlaxWav2Vec2ForPreTraining",title:"FlaxWav2Vec2ForPreTraining"}],title:"Wav2Vec2"};function Qk(W){return _k(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class n0 extends hk{constructor(c){super();fk(this,c,Qk,Zk,uk,{})}}export{n0 as default,Kk as metadata};
