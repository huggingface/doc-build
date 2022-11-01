import{S as RT,i as UT,s as HT,e as n,k as p,w,t as a,M as XT,c as r,d as t,m,a as i,x as y,h as s,b as c,G as e,g as _,y as k,q as T,o as $,B as x,v as GT,L as je}from"../../chunks/vendor-hf-doc-builder.js";import{T as xe}from"../../chunks/Tip-hf-doc-builder.js";import{D as F}from"../../chunks/Docstring-hf-doc-builder.js";import{C as we}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as oe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as We}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";import{P as BT}from"../../chunks/PipelineTag-hf-doc-builder.js";function KT(W){let d,b,f,u,v;return u=new we({props:{code:`from transformers import Wav2Vec2Config, Wav2Vec2Model

# Initializing a Wav2Vec2 facebook/wav2vec2-base-960h style configuration
configuration = Wav2Vec2Config()

# Initializing a model (with random weights) from the facebook/wav2vec2-base-960h style configuration
model = Wav2Vec2Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Config, Wav2Vec2Model

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Wav2Vec2 facebook/wav2vec2-base-960h style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Wav2Vec2Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the facebook/wav2vec2-base-960h style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),x(u,l)}}}function JT(W){let d,b,f,u,v;return u=new we({props:{code:`# Let's see how to retrieve time steps for a model
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
[{<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;WHY&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.42</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.54</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;DOES&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.64</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.9</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;MILISANDRA&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">2.26</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">2.9</span>}]`}}),{c(){d=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),x(u,l)}}}function ZT(W){let d,b,f,u,v,l,h,V;return{c(){d=n("p"),b=a("This class method is simply calling "),f=n("a"),u=a("save_pretrained()"),v=a(` and
`),l=n("a"),h=a("save_pretrained()"),V=a(`. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(A){d=r(A,"P",{});var L=i(d);b=s(L,"This class method is simply calling "),f=r(L,"A",{href:!0});var z=i(f);u=s(z,"save_pretrained()"),z.forEach(t),v=s(L,` and
`),l=r(L,"A",{href:!0});var M=i(l);h=s(M,"save_pretrained()"),M.forEach(t),V=s(L,`. Please refer to the docstrings of the
methods above for more information.`),L.forEach(t),this.h()},h(){c(f,"href","/docs/transformers/v4.24.0/en/internal/image_processing_utils#transformers.FeatureExtractionMixin.save_pretrained"),c(l,"href","/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.save_pretrained")},m(A,L){_(A,d,L),e(d,b),e(d,f),e(f,u),e(d,v),e(d,l),e(l,h),e(d,V)},d(A){A&&t(d)}}}function QT(W){let d,b,f,u,v,l,h,V,A,L,z,M,N,E;return{c(){d=n("p"),b=a(`This class method is simply calling Wav2Vec2FeatureExtractor\u2019s
`),f=n("a"),u=a("from_pretrained()"),v=a(`, Wav2Vec2CTCTokenizer\u2019s
`),l=n("a"),h=a("from_pretrained()"),V=a(`, and
`),A=n("code"),L=a("pyctcdecode.BeamSearchDecoderCTC.load_from_hf_hub"),z=a("."),M=p(),N=n("p"),E=a("Please refer to the docstrings of the methods above for more information."),this.h()},l(O){d=r(O,"P",{});var C=i(d);b=s(C,`This class method is simply calling Wav2Vec2FeatureExtractor\u2019s
`),f=r(C,"A",{href:!0});var ce=i(f);u=s(ce,"from_pretrained()"),ce.forEach(t),v=s(C,`, Wav2Vec2CTCTokenizer\u2019s
`),l=r(C,"A",{href:!0});var K=i(l);h=s(K,"from_pretrained()"),K.forEach(t),V=s(C,`, and
`),A=r(C,"CODE",{});var S=i(A);L=s(S,"pyctcdecode.BeamSearchDecoderCTC.load_from_hf_hub"),S.forEach(t),z=s(C,"."),C.forEach(t),M=m(O),N=r(O,"P",{});var de=i(N);E=s(de,"Please refer to the docstrings of the methods above for more information."),de.forEach(t),this.h()},h(){c(f,"href","/docs/transformers/v4.24.0/en/internal/image_processing_utils#transformers.FeatureExtractionMixin.from_pretrained"),c(l,"href","/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.from_pretrained")},m(O,C){_(O,d,C),e(d,b),e(d,f),e(f,u),e(d,v),e(d,l),e(l,h),e(d,V),e(d,A),e(A,L),e(d,z),_(O,M,C),_(O,N,C),e(N,E)},d(O){O&&t(d),O&&t(M),O&&t(N)}}}function YT(W){let d,b,f,u,v,l,h,V,A,L,z,M,N,E,O,C,ce,K,S,de;return{c(){d=n("p"),b=a(`This function makes use of Python\u2019s multiprocessing. Currently, multiprocessing is available only on Unix
systems (see this `),f=n("a"),u=a("issue"),v=a(")."),l=p(),h=n("p"),V=a("If you are decoding multiple batches, consider creating a "),A=n("code"),L=a("Pool"),z=a(" and passing it to "),M=n("code"),N=a("batch_decode"),E=a(`. Otherwise,
`),O=n("code"),C=a("batch_decode"),ce=a(" will be very slow since it will create a fresh "),K=n("code"),S=a("Pool"),de=a(" for each call. See usage example below."),this.h()},l(I){d=r(I,"P",{});var R=i(d);b=s(R,`This function makes use of Python\u2019s multiprocessing. Currently, multiprocessing is available only on Unix
systems (see this `),f=r(R,"A",{href:!0,rel:!0});var De=i(f);u=s(De,"issue"),De.forEach(t),v=s(R,")."),R.forEach(t),l=m(I),h=r(I,"P",{});var X=i(h);V=s(X,"If you are decoding multiple batches, consider creating a "),A=r(X,"CODE",{});var J=i(A);L=s(J,"Pool"),J.forEach(t),z=s(X," and passing it to "),M=r(X,"CODE",{});var Se=i(M);N=s(Se,"batch_decode"),Se.forEach(t),E=s(X,`. Otherwise,
`),O=r(X,"CODE",{});var Ve=i(O);C=s(Ve,"batch_decode"),Ve.forEach(t),ce=s(X," will be very slow since it will create a fresh "),K=r(X,"CODE",{});var Z=i(K);S=s(Z,"Pool"),Z.forEach(t),de=s(X," for each call. See usage example below."),X.forEach(t),this.h()},h(){c(f,"href","https://github.com/kensho-technologies/pyctcdecode/issues/65"),c(f,"rel","nofollow")},m(I,R){_(I,d,R),e(d,b),e(d,f),e(f,u),e(d,v),_(I,l,R),_(I,h,R),e(h,V),e(h,A),e(A,L),e(h,z),e(h,M),e(M,N),e(h,E),e(h,O),e(O,C),e(h,ce),e(h,K),e(K,S),e(h,de)},d(I){I&&t(d),I&&t(l),I&&t(h)}}}function e4(W){let d,b,f,u,v;return u=new we({props:{code:`# Let's see how to retrieve time steps for a model
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
[{<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;WHY&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.42</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.54</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;DOES&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.64</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.88</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;A&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">2.12</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">2.14</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;MILE&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">2.26</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">2.46</span>}]`}}),{c(){d=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),x(u,l)}}}function t4(W){let d,b,f,u,v;return{c(){d=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,b),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function o4(W){let d,b,f,u,v;return u=new we({props:{code:`from transformers import Wav2Vec2Processor, Wav2Vec2Model
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
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">768</span>]`}}),{c(){d=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),x(u,l)}}}function a4(W){let d,b,f,u,v;return{c(){d=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,b),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function s4(W){let d,b,f,u,v;return u=new we({props:{code:`from transformers import Wav2Vec2Processor, Wav2Vec2ForCTC
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
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>`}}),{c(){d=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),x(u,l)}}}function n4(W){let d,b;return d=new we({props:{code:`inputs["labels"] = processor(text=dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(text=dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">53.48</span>`}}),{c(){w(d.$$.fragment)},l(f){y(d.$$.fragment,f)},m(f,u){k(d,f,u),b=!0},p:je,i(f){b||(T(d.$$.fragment,f),b=!0)},o(f){$(d.$$.fragment,f),b=!1},d(f){x(d,f)}}}function r4(W){let d,b,f,u,v;return{c(){d=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,b),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function i4(W){let d,b,f,u,v;return u=new we({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ForSequenceClassification
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
<span class="hljs-string">&#x27;_unknown_&#x27;</span>`}}),{c(){d=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),x(u,l)}}}function l4(W){let d,b;return d=new we({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">6.54</span>`}}),{c(){w(d.$$.fragment)},l(f){y(d.$$.fragment,f)},m(f,u){k(d,f,u),b=!0},p:je,i(f){b||(T(d.$$.fragment,f),b=!0)},o(f){$(d.$$.fragment,f),b=!1},d(f){x(d,f)}}}function c4(W){let d,b,f,u,v;return{c(){d=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,b),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function d4(W){let d,b,f,u,v;return u=new we({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ForAudioFrameClassification
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
[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>]`}}),{c(){d=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),x(u,l)}}}function p4(W){let d,b,f,u,v;return{c(){d=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,b),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function m4(W){let d,b,f,u,v;return u=new we({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ForXVector
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
<span class="hljs-number">0.98</span>`}}),{c(){d=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),x(u,l)}}}function h4(W){let d,b,f,u,v;return{c(){d=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,b),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function f4(W){let d,b,f,u,v;return u=new we({props:{code:`import torch
from transformers import AutoFeatureExtractor, Wav2Vec2ForPreTraining
from transformers.models.wav2vec2.modeling_wav2vec2 import _compute_mask_indices, _sample_negative_indices
from datasets import load_dataset

feature_extractor = AutoFeatureExtractor.from_pretrained("facebook/wav2vec2-base")
model = Wav2Vec2ForPreTraining.from_pretrained("facebook/wav2vec2-base")

ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
input_values = feature_extractor(ds[0]["audio"]["array"], return_tensors="pt").input_values  # Batch size 1

# compute masked indices
batch_size, raw_sequence_length = input_values.shape
sequence_length = model._get_feat_extract_output_lengths(raw_sequence_length).item()
mask_time_indices = _compute_mask_indices(
    shape=(batch_size, sequence_length), mask_prob=0.2, mask_length=2
)
sampled_negative_indices = _sample_negative_indices(
    features_shape=(batch_size, sequence_length),
    num_negatives=model.config.num_negatives,
    mask_time_indices=mask_time_indices,
)
mask_time_indices = torch.tensor(data=mask_time_indices, device=input_values.device, dtype=torch.long)
sampled_negative_indices = torch.tensor(
    data=sampled_negative_indices, device=input_values.device, dtype=torch.long
)

with torch.no_grad():
    outputs = model(input_values, mask_time_indices=mask_time_indices)

# compute cosine similarity between predicted (=projected_states) and target (=projected_quantized_states)
cosine_sim = torch.cosine_similarity(outputs.projected_states, outputs.projected_quantized_states, dim=-1)

# show that cosine similarity is much higher than random
cosine_sim[mask_time_indices.to(torch.bool)].mean() > 0.5

# for contrastive loss training model should be put into train mode
model = model.train()
loss = model(
    input_values, mask_time_indices=mask_time_indices, sampled_negative_indices=sampled_negative_indices
).loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, Wav2Vec2ForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.models.wav2vec2.modeling_wav2vec2 <span class="hljs-keyword">import</span> _compute_mask_indices, _sample_negative_indices
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ForPreTraining.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = feature_extractor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute masked indices</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>batch_size, raw_sequence_length = input_values.shape
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_length = model._get_feat_extract_output_lengths(raw_sequence_length).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_time_indices = _compute_mask_indices(
<span class="hljs-meta">... </span>    shape=(batch_size, sequence_length), mask_prob=<span class="hljs-number">0.2</span>, mask_length=<span class="hljs-number">2</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampled_negative_indices = _sample_negative_indices(
<span class="hljs-meta">... </span>    features_shape=(batch_size, sequence_length),
<span class="hljs-meta">... </span>    num_negatives=model.config.num_negatives,
<span class="hljs-meta">... </span>    mask_time_indices=mask_time_indices,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_time_indices = torch.tensor(data=mask_time_indices, device=input_values.device, dtype=torch.long)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampled_negative_indices = torch.tensor(
<span class="hljs-meta">... </span>    data=sampled_negative_indices, device=input_values.device, dtype=torch.long
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(input_values, mask_time_indices=mask_time_indices)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute cosine similarity between predicted (=projected_states) and target (=projected_quantized_states)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>cosine_sim = torch.cosine_similarity(outputs.projected_states, outputs.projected_quantized_states, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># show that cosine similarity is much higher than random</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>cosine_sim[mask_time_indices.to(torch.<span class="hljs-built_in">bool</span>)].mean() &gt; <span class="hljs-number">0.5</span>
tensor(<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># for contrastive loss training model should be put into train mode</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = model.train()
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(
<span class="hljs-meta">... </span>    input_values, mask_time_indices=mask_time_indices, sampled_negative_indices=sampled_negative_indices
<span class="hljs-meta">... </span>).loss`}}),{c(){d=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),x(u,l)}}}function u4(W){let d,b,f,u,v,l,h,V,A,L,z,M,N,E,O,C,ce,K,S,de,I,R,De,X,J,Se,Ve,Z,Ze,$t,Ie,D,Q,at,ae,Qe,xt,Fe,Ee,Wt,U,jt,Ce,st,ye,qe,Pe,Vt,he,nt,Y,ke,ze,B,Ft,ee,Et,rt;return{c(){d=n("p"),b=a("TensorFlow models and layers in "),f=n("code"),u=a("transformers"),v=a(" accept two formats as input:"),l=p(),h=n("ul"),V=n("li"),A=a("having all inputs as keyword arguments (like PyTorch models), or"),L=p(),z=n("li"),M=a("having all inputs as a list, tuple or dict in the first positional argument."),N=p(),E=n("p"),O=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),C=n("code"),ce=a("model.fit()"),K=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=n("code"),de=a("model.fit()"),I=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),R=n("code"),De=a("fit()"),X=a(" and "),J=n("code"),Se=a("predict()"),Ve=a(`, such as when creating your own layers or models with
the Keras `),Z=n("code"),Ze=a("Functional"),$t=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Ie=p(),D=n("ul"),Q=n("li"),at=a("a single Tensor with "),ae=n("code"),Qe=a("input_values"),xt=a(" only and nothing else: "),Fe=n("code"),Ee=a("model(input_values)"),Wt=p(),U=n("li"),jt=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Ce=n("code"),st=a("model([input_values, attention_mask])"),ye=a(" or "),qe=n("code"),Pe=a("model([input_values, attention_mask, token_type_ids])"),Vt=p(),he=n("li"),nt=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=n("code"),ke=a('model({"input_values": input_values, "token_type_ids": token_type_ids})'),ze=p(),B=n("p"),Ft=a(`Note that when creating models and layers with
`),ee=n("a"),Et=a("subclassing"),rt=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(j){d=r(j,"P",{});var q=i(d);b=s(q,"TensorFlow models and layers in "),f=r(q,"CODE",{});var It=i(f);u=s(It,"transformers"),It.forEach(t),v=s(q," accept two formats as input:"),q.forEach(t),l=m(j),h=r(j,"UL",{});var fe=i(h);V=r(fe,"LI",{});var Nt=i(V);A=s(Nt,"having all inputs as keyword arguments (like PyTorch models), or"),Nt.forEach(t),L=m(fe),z=r(fe,"LI",{});var Ne=i(z);M=s(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),fe.forEach(t),N=m(j),E=r(j,"P",{});var P=i(E);O=s(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),C=r(P,"CODE",{});var to=i(C);ce=s(to,"model.fit()"),to.forEach(t),K=s(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(P,"CODE",{});var Ye=i(S);de=s(Ye,"model.fit()"),Ye.forEach(t),I=s(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),R=r(P,"CODE",{});var oo=i(R);De=s(oo,"fit()"),oo.forEach(t),X=s(P," and "),J=r(P,"CODE",{});var ao=i(J);Se=s(ao,"predict()"),ao.forEach(t),Ve=s(P,`, such as when creating your own layers or models with
the Keras `),Z=r(P,"CODE",{});var so=i(Z);Ze=s(so,"Functional"),so.forEach(t),$t=s(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),Ie=m(j),D=r(j,"UL",{});var H=i(D);Q=r(H,"LI",{});var pe=i(Q);at=s(pe,"a single Tensor with "),ae=r(pe,"CODE",{});var no=i(ae);Qe=s(no,"input_values"),no.forEach(t),xt=s(pe," only and nothing else: "),Fe=r(pe,"CODE",{});var ro=i(Fe);Ee=s(ro,"model(input_values)"),ro.forEach(t),pe.forEach(t),Wt=m(H),U=r(H,"LI",{});var se=i(U);jt=s(se,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Ce=r(se,"CODE",{});var io=i(Ce);st=s(io,"model([input_values, attention_mask])"),io.forEach(t),ye=s(se," or "),qe=r(se,"CODE",{});var lo=i(qe);Pe=s(lo,"model([input_values, attention_mask, token_type_ids])"),lo.forEach(t),se.forEach(t),Vt=m(H),he=r(H,"LI",{});var Me=i(he);nt=s(Me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r(Me,"CODE",{});var co=i(Y);ke=s(co,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),co.forEach(t),Me.forEach(t),H.forEach(t),ze=m(j),B=r(j,"P",{});var et=i(B);Ft=s(et,`Note that when creating models and layers with
`),ee=r(et,"A",{href:!0,rel:!0});var Bt=i(ee);Et=s(Bt,"subclassing"),Bt.forEach(t),rt=s(et,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),et.forEach(t),this.h()},h(){c(ee,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),c(ee,"rel","nofollow")},m(j,q){_(j,d,q),e(d,b),e(d,f),e(f,u),e(d,v),_(j,l,q),_(j,h,q),e(h,V),e(V,A),e(h,L),e(h,z),e(z,M),_(j,N,q),_(j,E,q),e(E,O),e(E,C),e(C,ce),e(E,K),e(E,S),e(S,de),e(E,I),e(E,R),e(R,De),e(E,X),e(E,J),e(J,Se),e(E,Ve),e(E,Z),e(Z,Ze),e(E,$t),_(j,Ie,q),_(j,D,q),e(D,Q),e(Q,at),e(Q,ae),e(ae,Qe),e(Q,xt),e(Q,Fe),e(Fe,Ee),e(D,Wt),e(D,U),e(U,jt),e(U,Ce),e(Ce,st),e(U,ye),e(U,qe),e(qe,Pe),e(D,Vt),e(D,he),e(he,nt),e(he,Y),e(Y,ke),_(j,ze,q),_(j,B,q),e(B,Ft),e(B,ee),e(ee,Et),e(B,rt)},d(j){j&&t(d),j&&t(l),j&&t(h),j&&t(N),j&&t(E),j&&t(Ie),j&&t(D),j&&t(ze),j&&t(B)}}}function g4(W){let d,b,f,u,v;return{c(){d=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,b),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function _4(W){let d,b,f,u,v;return u=new we({props:{code:`from transformers import Wav2Vec2Processor, TFWav2Vec2Model
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
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),{c(){d=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),x(u,l)}}}function v4(W){let d,b,f,u,v,l,h,V,A,L,z,M,N,E,O,C,ce,K,S,de,I,R,De,X,J,Se,Ve,Z,Ze,$t,Ie,D,Q,at,ae,Qe,xt,Fe,Ee,Wt,U,jt,Ce,st,ye,qe,Pe,Vt,he,nt,Y,ke,ze,B,Ft,ee,Et,rt;return{c(){d=n("p"),b=a("TensorFlow models and layers in "),f=n("code"),u=a("transformers"),v=a(" accept two formats as input:"),l=p(),h=n("ul"),V=n("li"),A=a("having all inputs as keyword arguments (like PyTorch models), or"),L=p(),z=n("li"),M=a("having all inputs as a list, tuple or dict in the first positional argument."),N=p(),E=n("p"),O=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),C=n("code"),ce=a("model.fit()"),K=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=n("code"),de=a("model.fit()"),I=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),R=n("code"),De=a("fit()"),X=a(" and "),J=n("code"),Se=a("predict()"),Ve=a(`, such as when creating your own layers or models with
the Keras `),Z=n("code"),Ze=a("Functional"),$t=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Ie=p(),D=n("ul"),Q=n("li"),at=a("a single Tensor with "),ae=n("code"),Qe=a("input_values"),xt=a(" only and nothing else: "),Fe=n("code"),Ee=a("model(input_values)"),Wt=p(),U=n("li"),jt=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Ce=n("code"),st=a("model([input_values, attention_mask])"),ye=a(" or "),qe=n("code"),Pe=a("model([input_values, attention_mask, token_type_ids])"),Vt=p(),he=n("li"),nt=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=n("code"),ke=a('model({"input_values": input_values, "token_type_ids": token_type_ids})'),ze=p(),B=n("p"),Ft=a(`Note that when creating models and layers with
`),ee=n("a"),Et=a("subclassing"),rt=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(j){d=r(j,"P",{});var q=i(d);b=s(q,"TensorFlow models and layers in "),f=r(q,"CODE",{});var It=i(f);u=s(It,"transformers"),It.forEach(t),v=s(q," accept two formats as input:"),q.forEach(t),l=m(j),h=r(j,"UL",{});var fe=i(h);V=r(fe,"LI",{});var Nt=i(V);A=s(Nt,"having all inputs as keyword arguments (like PyTorch models), or"),Nt.forEach(t),L=m(fe),z=r(fe,"LI",{});var Ne=i(z);M=s(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),fe.forEach(t),N=m(j),E=r(j,"P",{});var P=i(E);O=s(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),C=r(P,"CODE",{});var to=i(C);ce=s(to,"model.fit()"),to.forEach(t),K=s(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(P,"CODE",{});var Ye=i(S);de=s(Ye,"model.fit()"),Ye.forEach(t),I=s(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),R=r(P,"CODE",{});var oo=i(R);De=s(oo,"fit()"),oo.forEach(t),X=s(P," and "),J=r(P,"CODE",{});var ao=i(J);Se=s(ao,"predict()"),ao.forEach(t),Ve=s(P,`, such as when creating your own layers or models with
the Keras `),Z=r(P,"CODE",{});var so=i(Z);Ze=s(so,"Functional"),so.forEach(t),$t=s(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),Ie=m(j),D=r(j,"UL",{});var H=i(D);Q=r(H,"LI",{});var pe=i(Q);at=s(pe,"a single Tensor with "),ae=r(pe,"CODE",{});var no=i(ae);Qe=s(no,"input_values"),no.forEach(t),xt=s(pe," only and nothing else: "),Fe=r(pe,"CODE",{});var ro=i(Fe);Ee=s(ro,"model(input_values)"),ro.forEach(t),pe.forEach(t),Wt=m(H),U=r(H,"LI",{});var se=i(U);jt=s(se,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Ce=r(se,"CODE",{});var io=i(Ce);st=s(io,"model([input_values, attention_mask])"),io.forEach(t),ye=s(se," or "),qe=r(se,"CODE",{});var lo=i(qe);Pe=s(lo,"model([input_values, attention_mask, token_type_ids])"),lo.forEach(t),se.forEach(t),Vt=m(H),he=r(H,"LI",{});var Me=i(he);nt=s(Me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r(Me,"CODE",{});var co=i(Y);ke=s(co,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),co.forEach(t),Me.forEach(t),H.forEach(t),ze=m(j),B=r(j,"P",{});var et=i(B);Ft=s(et,`Note that when creating models and layers with
`),ee=r(et,"A",{href:!0,rel:!0});var Bt=i(ee);Et=s(Bt,"subclassing"),Bt.forEach(t),rt=s(et,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),et.forEach(t),this.h()},h(){c(ee,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),c(ee,"rel","nofollow")},m(j,q){_(j,d,q),e(d,b),e(d,f),e(f,u),e(d,v),_(j,l,q),_(j,h,q),e(h,V),e(V,A),e(h,L),e(h,z),e(z,M),_(j,N,q),_(j,E,q),e(E,O),e(E,C),e(C,ce),e(E,K),e(E,S),e(S,de),e(E,I),e(E,R),e(R,De),e(E,X),e(E,J),e(J,Se),e(E,Ve),e(E,Z),e(Z,Ze),e(E,$t),_(j,Ie,q),_(j,D,q),e(D,Q),e(Q,at),e(Q,ae),e(ae,Qe),e(Q,xt),e(Q,Fe),e(Fe,Ee),e(D,Wt),e(D,U),e(U,jt),e(U,Ce),e(Ce,st),e(U,ye),e(U,qe),e(qe,Pe),e(D,Vt),e(D,he),e(he,nt),e(he,Y),e(Y,ke),_(j,ze,q),_(j,B,q),e(B,Ft),e(B,ee),e(ee,Et),e(B,rt)},d(j){j&&t(d),j&&t(l),j&&t(h),j&&t(N),j&&t(E),j&&t(Ie),j&&t(D),j&&t(ze),j&&t(B)}}}function b4(W){let d,b,f,u,v;return{c(){d=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,b),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function w4(W){let d,b,f,u,v;return u=new we({props:{code:`import tensorflow as tf
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, labels=labels).loss`}}),{c(){d=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),x(u,l)}}}function y4(W){let d,b,f,u,v;return{c(){d=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,b),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function k4(W){let d,b,f,u,v;return u=new we({props:{code:`from transformers import Wav2Vec2Processor, FlaxWav2Vec2Model
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
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),{c(){d=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),x(u,l)}}}function T4(W){let d,b,f,u,v;return{c(){d=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,b),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function $4(W){let d,b,f,u,v;return u=new we({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># should give:  &quot;A MAN SAID TO THE UNIVERSE SIR I EXIST&quot;</span>`}}),{c(){d=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),x(u,l)}}}function x4(W){let d,b,f,u,v;return{c(){d=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,b),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function W4(W){let d,b,f,u,v;return u=new we({props:{code:`import optax
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> np.asarray(cosine_sim)[mask_time_indices].mean() &gt; <span class="hljs-number">0.5</span>`}}),{c(){d=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){$(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),x(u,l)}}}function j4(W){let d,b,f,u,v,l,h,V,A,L,z,M,N,E,O,C,ce,K,S,de,I,R,De,X,J,Se,Ve,Z,Ze,$t,Ie,D,Q,at,ae,Qe,xt,Fe,Ee,Wt,U,jt,Ce,st,ye,qe,Pe,Vt,he,nt,Y,ke,ze,B,Ft,ee,Et,rt,j,q,It,fe,Nt,Ne,P,to,Ye,oo,ao,so,H,pe,no,ro,se,io,lo,Me,co,et,Bt,ks,cp,Be,Ts,Th,$s,$h,xh,Wh,xs,jh,Ws,Vh,Fh,Eh,js,Ch,Vs,qh,Ph,zh,Fs,Mh,Es,Ah,Lh,Oh,Rt,qi,Dh,Sh,Cs,Ih,Nh,qs,Bh,Rh,dp,Pi,Uh,pp,zi,Ps,Hh,zs,Xh,Gh,mp,po,Ko,Gl,Ms,Kh,Kl,Jh,hp,tt,As,Zh,mo,Qh,Mi,Yh,ef,Ls,tf,of,af,ho,sf,Ai,nf,rf,Li,lf,cf,df,Jo,fp,fo,Zo,Jl,Os,pf,Zl,mf,up,ne,Ds,hf,Ql,ff,uf,Ss,gf,Oi,_f,vf,bf,Qo,Is,wf,Yl,yf,kf,Di,Ns,Tf,it,Bs,$f,ec,xf,Wf,Rs,jf,tc,Vf,Ff,Ef,Yo,Cf,ea,Us,qf,oc,Pf,gp,uo,ta,ac,Hs,zf,sc,Mf,_p,ot,Xs,Af,nc,Lf,Of,Gs,Df,Si,Sf,If,Nf,oa,Ks,Bf,rc,Rf,vp,go,aa,ic,Js,Uf,lc,Hf,bp,G,Zs,Xf,cc,Gf,Kf,Re,Ii,Jf,Zf,Ni,Qf,Yf,Bi,eu,tu,Qs,dc,ou,au,su,Ri,nu,ru,iu,sa,Ys,lu,Ct,cu,en,pc,du,pu,mu,mc,hu,fu,tn,hc,uu,gu,_u,vu,na,on,bu,qt,wu,Ui,yu,ku,fc,Tu,$u,Hi,xu,Wu,ju,Xi,an,Vu,Ut,sn,Fu,nn,Eu,Gi,Cu,qu,Pu,ra,zu,ia,rn,Mu,ln,Au,Ki,Lu,Ou,Du,la,cn,Su,dn,Iu,Ji,Nu,Bu,wp,_o,ca,uc,pn,Ru,gc,Uu,yp,te,mn,Hu,_c,Xu,Gu,da,hn,Ku,Pt,Ju,fn,vc,Zu,Qu,Yu,bc,eg,tg,un,wc,og,ag,sg,ng,pa,gn,rg,zt,ig,Zi,lg,cg,yc,dg,pg,Qi,mg,hg,fg,Ht,_n,ug,vn,gg,Yi,_g,vg,bg,ma,wg,el,bn,yg,lt,wn,kg,kc,Tg,$g,ha,xg,yn,Wg,tl,jg,Vg,Fg,Xt,kn,Eg,Tc,Cg,qg,fa,kp,vo,ua,$c,Tn,Pg,xc,zg,Tp,Te,Mg,ol,Ag,Lg,Wc,Og,Dg,al,Sg,Ig,sl,Ng,Bg,jc,Rg,Ug,$p,$n,xp,bo,ga,Vc,xn,Hg,Fc,Xg,Wp,wo,Wn,Gg,jn,Kg,Ec,Jg,Zg,jp,yo,Vn,Qg,Cc,Yg,Vp,ko,Fn,e_,En,t_,nl,o_,a_,Fp,Mt,Cn,s_,qn,n_,qc,r_,i_,l_,_a,Pn,c_,Pc,d_,Ep,At,zn,p_,Mn,m_,zc,h_,f_,u_,va,An,g_,Mc,__,Cp,To,ba,Ac,Ln,v_,Lc,b_,qp,Ae,On,w_,Dn,y_,Sn,k_,T_,$_,In,x_,rl,W_,j_,V_,Nn,F_,Bn,E_,C_,q_,ct,Rn,P_,$o,z_,il,M_,A_,Oc,L_,O_,D_,wa,S_,ya,Pp,xo,ka,Dc,Un,I_,Sc,N_,zp,Le,Hn,B_,Wo,R_,Ic,U_,H_,Xn,X_,G_,K_,Gn,J_,ll,Z_,Q_,Y_,Kn,ev,Jn,tv,ov,av,Ue,Zn,sv,jo,nv,cl,rv,iv,Nc,lv,cv,dv,Ta,pv,$a,mv,xa,Mp,Vo,Wa,Bc,Qn,hv,Rc,fv,Ap,ue,Yn,uv,Uc,gv,_v,er,vv,tr,bv,wv,yv,or,kv,dl,Tv,$v,xv,ar,Wv,sr,jv,Vv,Fv,He,nr,Ev,Fo,Cv,pl,qv,Pv,Hc,zv,Mv,Av,ja,Lv,Va,Ov,Fa,Lp,Eo,Ea,Xc,rr,Dv,Gc,Sv,Op,ge,ir,Iv,Kc,Nv,Bv,lr,Rv,cr,Uv,Hv,Xv,dr,Gv,ml,Kv,Jv,Zv,pr,Qv,mr,Yv,e2,t2,dt,hr,o2,Co,a2,hl,s2,n2,Jc,r2,i2,l2,Ca,c2,qa,Dp,qo,Pa,Zc,fr,d2,Qc,p2,Sp,_e,ur,m2,Yc,h2,f2,gr,u2,_r,g2,_2,v2,vr,b2,fl,w2,y2,k2,br,T2,wr,$2,x2,W2,pt,yr,j2,Po,V2,ul,F2,E2,ed,C2,q2,P2,za,z2,Ma,Ip,zo,Aa,td,kr,M2,od,A2,Np,Oe,Tr,L2,Mo,O2,ad,D2,S2,$r,I2,N2,B2,xr,R2,gl,U2,H2,X2,Wr,G2,jr,K2,J2,Z2,mt,Vr,Q2,Ao,Y2,_l,eb,tb,sd,ob,ab,sb,La,nb,Oa,Bp,Lo,Da,nd,Fr,rb,rd,ib,Rp,ve,Er,lb,id,cb,db,Cr,pb,vl,mb,hb,fb,qr,ub,Pr,gb,_b,vb,Sa,bb,ht,zr,wb,Oo,yb,bl,kb,Tb,ld,$b,xb,Wb,Ia,jb,Na,Up,Do,Ba,cd,Mr,Vb,dd,Fb,Hp,be,Ar,Eb,Lr,Cb,pd,qb,Pb,zb,Or,Mb,wl,Ab,Lb,Ob,Dr,Db,Sr,Sb,Ib,Nb,Ra,Bb,ft,Ir,Rb,So,Ub,yl,Hb,Xb,md,Gb,Kb,Jb,Ua,Zb,Ha,Xp,Io,Xa,hd,Nr,Qb,fd,Yb,Gp,re,Br,ew,Rr,tw,Ur,ow,aw,sw,Hr,nw,kl,rw,iw,lw,Xr,cw,Gr,dw,pw,mw,ud,hw,fw,Lt,gd,Kr,uw,gw,_d,Jr,_w,vw,vd,Zr,bw,ww,bd,Qr,yw,kw,ut,Yr,Tw,No,$w,wd,xw,Ww,yd,jw,Vw,Fw,Ga,Ew,Ka,Kp,Bo,Ja,kd,ei,Cw,Td,qw,Jp,ie,ti,Pw,Ro,zw,$d,Mw,Aw,oi,Lw,Ow,Dw,ai,Sw,Tl,Iw,Nw,Bw,si,Rw,ni,Uw,Hw,Xw,xd,Gw,Kw,Ot,Wd,ri,Jw,Zw,jd,ii,Qw,Yw,Vd,li,e0,t0,Fd,ci,o0,a0,gt,di,s0,Uo,n0,Ed,r0,i0,Cd,l0,c0,d0,Za,p0,Qa,Zp,Ho,Ya,qd,pi,m0,Pd,h0,Qp,le,mi,f0,Xo,u0,zd,g0,_0,hi,v0,b0,w0,fi,y0,$l,k0,T0,$0,ui,x0,gi,W0,j0,V0,Md,F0,E0,Dt,Ad,_i,C0,q0,Ld,vi,P0,z0,Od,bi,M0,A0,Dd,wi,L0,O0,_t,yi,D0,Go,S0,xl,I0,N0,Sd,B0,R0,U0,es,H0,ts,Yp;return l=new oe({}),E=new oe({}),B=new oe({}),fe=new BT({props:{pipeline:"audio-classification"}}),ks=new BT({props:{pipeline:"automatic-speech-recognition"}}),Ms=new oe({}),As=new F({props:{name:"class transformers.Wav2Vec2Config",anchor:"transformers.Wav2Vec2Config",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"feat_quantizer_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"num_codevectors_per_group",val:" = 320"},{name:"num_codevector_groups",val:" = 2"},{name:"contrastive_logits_temperature",val:" = 0.1"},{name:"num_negatives",val:" = 100"},{name:"codevector_dim",val:" = 256"},{name:"proj_codevector_dim",val:" = 256"},{name:"diversity_loss_weight",val:" = 0.1"},{name:"ctc_loss_reduction",val:" = 'sum'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"tdnn_dim",val:" = (512, 512, 512, 512, 1500)"},{name:"tdnn_kernel",val:" = (5, 3, 3, 1, 1)"},{name:"tdnn_dilation",val:" = (1, 2, 3, 1, 1)"},{name:"xvector_output_dim",val:" = 512"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"add_adapter",val:" = False"},{name:"adapter_kernel_size",val:" = 3"},{name:"adapter_stride",val:" = 2"},{name:"num_adapter_layers",val:" = 3"},{name:"output_hidden_size",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the Wav2Vec2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Model">Wav2Vec2Model</a> or <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.TFWav2Vec2Model">TFWav2Vec2Model</a>. Vocabulary size of the
model. Defines the different tokens that can be represented by the <em>inputs_ids</em> passed to the forward
method of <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Model">Wav2Vec2Model</a>.`,name:"vocab_size"},{anchor:"transformers.Wav2Vec2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.Wav2Vec2Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.Wav2Vec2Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.Wav2Vec2Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.Wav2Vec2Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.Wav2Vec2Config.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.Wav2Vec2Config.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.Wav2Vec2Config.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC">Wav2Vec2ForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.Wav2Vec2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
instance of <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC">Wav2Vec2ForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.Wav2Vec2Config.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC">Wav2Vec2ForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.Wav2Vec2Config.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForSequenceClassification">Wav2Vec2ForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.Wav2Vec2Config.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
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
if <code>add_adapter is True</code>.`,name:"output_hidden_size"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/configuration_wav2vec2.py#L32"}}),Jo=new We({props:{anchor:"transformers.Wav2Vec2Config.example",$$slots:{default:[KT]},$$scope:{ctx:W}}}),Os=new oe({}),Ds=new F({props:{name:"class transformers.Wav2Vec2CTCTokenizer",anchor:"transformers.Wav2Vec2CTCTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"word_delimiter_token",val:" = '|'"},{name:"replace_word_delimiter_char",val:" = ' '"},{name:"do_lower_case",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.Wav2Vec2CTCTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.word_delimiter_token",description:`<strong>word_delimiter_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;|&quot;</code>) &#x2014;
The token used for defining the end of a word.`,name:"word_delimiter_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to accept lowercase input and lowercase the output when decoding.</p>
<p>**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"do_lower_case"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L127"}}),Is=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2CTCTokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"text_target",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair_target",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
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
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.24.0/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.24.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
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
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/tokenization_utils_base.py#L2414",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.BatchEncoding"
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
  href="/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),Ns=new F({props:{name:"save_vocabulary",anchor:"transformers.Wav2Vec2CTCTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L595"}}),Bs=new F({props:{name:"decode",anchor:"transformers.Wav2Vec2CTCTokenizer.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"output_char_offsets",val:": bool = False"},{name:"output_word_offsets",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.output_char_offsets",description:`<strong>output_char_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output character offsets. Character offsets can be used in combination with the
sampling rate and model downsampling rate to compute the time-stamps of transcribed characters.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the example below to better understand how to make use of <code>output_char_offsets</code>.</p>

					</div>`,name:"output_char_offsets"},{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.output_word_offsets",description:`<strong>output_word_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output word offsets. Word offsets can be used in combination with the sampling rate
and model downsampling rate to compute the time-stamps of transcribed words.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the example below to better understand how to make use of <code>output_word_offsets</code>.</p>

					</div>`,name:"output_word_offsets"},{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L490",returnDescription:`
<p>The list of decoded
sentences. Will be a <code>Wav2Vec2CTCTokenizerOutput</code> when
<code>output_char_offsets == True</code> or <code>output_word_offsets == True</code>.</p>
`,returnType:`
<p><code>str</code> or <code>Wav2Vec2CTCTokenizerOutput</code></p>
`}}),Yo=new We({props:{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.example",$$slots:{default:[JT]},$$scope:{ctx:W}}}),Us=new F({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"output_char_offsets",val:": bool = False"},{name:"output_word_offsets",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.output_char_offsets",description:`<strong>output_char_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output character offsets. Character offsets can be used in combination with the
sampling rate and model downsampling rate to compute the time-stamps of transcribed characters.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the Example of <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.decode">decode()</a> to better understand how to make
use of <code>output_char_offsets</code>. <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.batch_decode">batch_decode()</a> works the same way with batched
output.</p>

					</div>`,name:"output_char_offsets"},{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.output_word_offsets",description:`<strong>output_word_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output word offsets. Word offsets can be used in combination with the sampling rate
and model downsampling rate to compute the time-stamps of transcribed words.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the Example of <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.decode">decode()</a> to better understand how to make
use of <code>output_word_offsets</code>. <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.batch_decode">batch_decode()</a> works the same way with batched
output.</p>

					</div>`,name:"output_word_offsets"},{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L420",returnDescription:`
<p>The list of decoded
sentences. Will be a <code>Wav2Vec2CTCTokenizerOutput</code> when
<code>output_char_offsets == True</code> or <code>output_word_offsets == True</code>.</p>
`,returnType:`
<p><code>List[str]</code> or <code>Wav2Vec2CTCTokenizerOutput</code></p>
`}}),Hs=new oe({}),Xs=new F({props:{name:"class transformers.Wav2Vec2FeatureExtractor",anchor:"transformers.Wav2Vec2FeatureExtractor",parameters:[{name:"feature_size",val:" = 1"},{name:"sampling_rate",val:" = 16000"},{name:"padding_value",val:" = 0.0"},{name:"return_attention_mask",val:" = False"},{name:"do_normalize",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2FeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 1) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.Wav2Vec2FeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.Wav2Vec2FeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values.`,name:"padding_value"},{anchor:"transformers.Wav2Vec2FeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to zero-mean unit-variance normalize the input. Normalizing can help to significantly
improve the performance for some models, <em>e.g.</em>,
<a href="https://huggingface.co/models?search=lv60" rel="nofollow">wav2vec2-lv60</a>.`,name:"do_normalize"},{anchor:"transformers.Wav2Vec2FeatureExtractor.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor.__call__"><strong>call</strong>()</a> should return <code>attention_mask</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Wav2Vec2 models that have set <code>config.feat_extract_norm == &quot;group&quot;</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-base-960h" rel="nofollow">wav2vec2-base</a>, have <strong>not</strong> been trained using
<code>attention_mask</code>. For such models, <code>input_values</code> should simply be padded with 0 and no <code>attention_mask</code>
should be passed.</p>
<p>For Wav2Vec2 models that have set <code>config.feat_extract_norm == &quot;layer&quot;</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-large-960h-lv60-self" rel="nofollow">wav2vec2-lv60</a>, <code>attention_mask</code> should be
passed for batched inference.</p>

					</div>`,name:"return_attention_mask"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/feature_extraction_wav2vec2.py#L31"}}),Ks=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2FeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"truncation",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
The sequence or batch of sequences to be padded. Each sequence can be a numpy array, a list of float
values, a list of numpy arrays or a list of list of float values.`,name:"raw_speech"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.24.0/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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

					</div>`,name:"return_attention_mask"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.24.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>raw_speech</code> input was sampled. It is strongly recommended to pass
<code>sampling_rate</code> at the forward call to prevent silent errors.`,name:"sampling_rate"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.padding_value",description:"<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;",name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/feature_extraction_wav2vec2.py#L102"}}),Js=new oe({}),Zs=new F({props:{name:"class transformers.Wav2Vec2Processor",anchor:"transformers.Wav2Vec2Processor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>Wav2Vec2FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor">Wav2Vec2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Wav2Vec2Processor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
An instance of <a href="/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/processing_wav2vec2.py#L26"}}),Ys=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2Processor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/processing_wav2vec2.py#L67"}}),on=new F({props:{name:"pad",anchor:"transformers.Wav2Vec2Processor.pad",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/processing_wav2vec2.py#L104"}}),an=new F({props:{name:"from_pretrained",anchor:"transformers.Wav2Vec2Processor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/processing_wav2vec2.py#L48"}}),sn=new F({props:{name:"save_pretrained",anchor:"transformers.Wav2Vec2Processor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2Processor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.Wav2Vec2Processor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it. You can specify the
repository you want to push to with <code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).
kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/v4.24.0/en/internal/image_processing_utils#transformers.FeatureExtractionMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/processing_utils.py#L94"}}),ra=new xe({props:{$$slots:{default:[ZT]},$$scope:{ctx:W}}}),rn=new F({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2Processor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/processing_wav2vec2.py#L134"}}),cn=new F({props:{name:"decode",anchor:"transformers.Wav2Vec2Processor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/processing_wav2vec2.py#L141"}}),pn=new oe({}),mn=new F({props:{name:"class transformers.Wav2Vec2ProcessorWithLM",anchor:"transformers.Wav2Vec2ProcessorWithLM",parameters:[{name:"feature_extractor",val:": FeatureExtractionMixin"},{name:"tokenizer",val:": PreTrainedTokenizerBase"},{name:"decoder",val:": BeamSearchDecoderCTC"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor">Wav2Vec2FeatureExtractor</a>) &#x2014;
An instance of <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor">Wav2Vec2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer">Wav2Vec2CTCTokenizer</a>) &#x2014;
An instance of <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer">Wav2Vec2CTCTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decoder",description:`<strong>decoder</strong> (<code>pyctcdecode.BeamSearchDecoderCTC</code>) &#x2014;
An instance of <code>pyctcdecode.BeamSearchDecoderCTC</code>. The decoder is a required input.`,name:"decoder"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L67"}}),hn=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2ProcessorWithLM.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L214"}}),gn=new F({props:{name:"pad",anchor:"transformers.Wav2Vec2ProcessorWithLM.pad",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L252"}}),_n=new F({props:{name:"from_pretrained",anchor:"transformers.Wav2Vec2ProcessorWithLM.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/v4.24.0/en/internal/image_processing_utils#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both <a href="/docs/transformers/v4.24.0/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor">SequenceFeatureExtractor</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a></li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L112"}}),ma=new xe({props:{$$slots:{default:[QT]},$$scope:{ctx:W}}}),bn=new F({props:{name:"save_pretrained",anchor:"transformers.Wav2Vec2ProcessorWithLM.save_pretrained",parameters:[{name:"save_directory",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L108"}}),wn=new F({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode",parameters:[{name:"logits",val:": ndarray"},{name:"pool",val:": typing.Union[<bound method BaseContext.Pool of <multiprocessing.context.DefaultContext object at 0x7f4ece033910>>, NoneType] = None"},{name:"num_processes",val:": typing.Optional[int] = None"},{name:"beam_width",val:": typing.Optional[int] = None"},{name:"beam_prune_logp",val:": typing.Optional[float] = None"},{name:"token_min_logp",val:": typing.Optional[float] = None"},{name:"hotwords",val:": typing.Optional[typing.Iterable[str]] = None"},{name:"hotword_weight",val:": typing.Optional[float] = None"},{name:"alpha",val:": typing.Optional[float] = None"},{name:"beta",val:": typing.Optional[float] = None"},{name:"unk_score_offset",val:": typing.Optional[float] = None"},{name:"lm_score_boundary",val:": typing.Optional[bool] = None"},{name:"output_word_offsets",val:": bool = False"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.logits",description:`<strong>logits</strong> (<code>np.ndarray</code>) &#x2014;
The logits output vector of the model representing the log probabilities for each token.`,name:"logits"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.pool",description:`<strong>pool</strong> (<code>multiprocessing.Pool</code>, <em>optional</em>) &#x2014;
An optional user-managed pool. If not set, one will be automatically created and closed. The pool
should be instantiated <em>after</em> <code>Wav2Vec2ProcessorWithLM</code>. Otherwise, the LM won&#x2019;t be available to the
pool&#x2019;s sub-processes.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Currently, only pools created with a &#x2018;fork&#x2019; context can be used. If a &#x2018;spawn&#x2019; pool is passed, it will
be ignored and sequential decoding will be used instead.</p>

					</div>`,name:"pool"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.num_processes",description:`<strong>num_processes</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If <code>pool</code> is not set, number of processes on which the function should be parallelized over. Defaults
to the number of available CPUs.`,name:"num_processes"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.beam_width",description:`<strong>beam_width</strong> (<code>int</code>, <em>optional</em>) &#x2014;
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
						
<p>Please take a look at the Example of <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ProcessorWithLM.decode">decode()</a> to better understand how to
make use of <code>output_word_offsets</code>. <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ProcessorWithLM.batch_decode">batch_decode()</a> works the same way with
batched output.</p>

					</div>`,name:"output_word_offsets"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L283",returnDescription:`
<p><code>~models.wav2vec2.Wav2Vec2DecoderWithLMOutput</code>.</p>
`}}),ha=new xe({props:{$$slots:{default:[YT]},$$scope:{ctx:W}}}),kn=new F({props:{name:"decode",anchor:"transformers.Wav2Vec2ProcessorWithLM.decode",parameters:[{name:"logits",val:": ndarray"},{name:"beam_width",val:": typing.Optional[int] = None"},{name:"beam_prune_logp",val:": typing.Optional[float] = None"},{name:"token_min_logp",val:": typing.Optional[float] = None"},{name:"hotwords",val:": typing.Optional[typing.Iterable[str]] = None"},{name:"hotword_weight",val:": typing.Optional[float] = None"},{name:"alpha",val:": typing.Optional[float] = None"},{name:"beta",val:": typing.Optional[float] = None"},{name:"unk_score_offset",val:": typing.Optional[float] = None"},{name:"lm_score_boundary",val:": typing.Optional[bool] = None"},{name:"output_word_offsets",val:": bool = False"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.logits",description:`<strong>logits</strong> (<code>np.ndarray</code>) &#x2014;
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
						
<p>Please take a look at the example below to better understand how to make use of <code>output_word_offsets</code>.</p>

					</div>`,name:"output_word_offsets"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L439",returnDescription:`
<p><code>~models.wav2vec2.Wav2Vec2DecoderWithLMOutput</code>.</p>
`}}),fa=new We({props:{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.example",$$slots:{default:[e4]},$$scope:{ctx:W}}}),Tn=new oe({}),$n=new we({props:{code:`# Let's see how to use a user-managed pool for batch decoding multiple audios
from multiprocessing import get_context
from transformers import AutoTokenizer, AutoProcessor, AutoModelForCTC
from datasets import load_dataset
import datasets
import torch

# import model, feature extractor, tokenizer
model = AutoModelForCTC.from_pretrained("patrickvonplaten/wav2vec2-base-100h-with-lm").to("cuda")
processor = AutoProcessor.from_pretrained("patrickvonplaten/wav2vec2-base-100h-with-lm")

# load example dataset
dataset = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
dataset = dataset.cast_column("audio", datasets.Audio(sampling_rate=16_000))


def map_to_array(batch):
    batch["speech"] = batch["audio"]["array"]
    return batch


# prepare speech data for batch inference
dataset = dataset.map(map_to_array, remove_columns=["audio"])


def map_to_pred(batch, pool):
    inputs = processor(batch["speech"], sampling_rate=16_000, padding=True, return_tensors="pt")
    inputs = {k: v.to("cuda") for k, v in inputs.items()}

    with torch.no_grad():
        logits = model(**inputs).logits

    transcription = processor.batch_decode(logits.cpu().numpy(), pool).text
    batch["transcription"] = transcription
    return batch


# note: pool should be instantiated *after* \`Wav2Vec2ProcessorWithLM\`.
#       otherwise, the LM won't be available to the pool's sub-processes
# select number of processes and batch_size based on number of CPU cores available and on dataset size
with get_context("fork").Pool(processes=2) as pool:
    result = dataset.map(
        map_to_pred, batched=True, batch_size=2, fn_kwargs={"pool": pool}, remove_columns=["speech"]
    )

result["transcription"][:2]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Let&#x27;s see how to use a user-managed pool for batch decoding multiple audios</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> multiprocessing <span class="hljs-keyword">import</span> get_context
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoProcessor, AutoModelForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> datasets
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># import model, feature extractor, tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCTC.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/wav2vec2-base-100h-with-lm&quot;</span>).to(<span class="hljs-string">&quot;cuda&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/wav2vec2-base-100h-with-lm&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load example dataset</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.cast_column(<span class="hljs-string">&quot;audio&quot;</span>, datasets.Audio(sampling_rate=<span class="hljs-number">16_000</span>))


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = batch[<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare speech data for batch inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.<span class="hljs-built_in">map</span>(map_to_array, remove_columns=[<span class="hljs-string">&quot;audio&quot;</span>])


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_pred</span>(<span class="hljs-params">batch, pool</span>):
<span class="hljs-meta">... </span>    inputs = processor(batch[<span class="hljs-string">&quot;speech&quot;</span>], sampling_rate=<span class="hljs-number">16_000</span>, padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">... </span>    inputs = {k: v.to(<span class="hljs-string">&quot;cuda&quot;</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> inputs.items()}

<span class="hljs-meta">... </span>    <span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>        logits = model(**inputs).logits

<span class="hljs-meta">... </span>    transcription = processor.batch_decode(logits.cpu().numpy(), pool).text
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;transcription&quot;</span>] = transcription
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># note: pool should be instantiated *after* \`Wav2Vec2ProcessorWithLM\`.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment">#       otherwise, the LM won&#x27;t be available to the pool&#x27;s sub-processes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># select number of processes and batch_size based on number of CPU cores available and on dataset size</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> get_context(<span class="hljs-string">&quot;fork&quot;</span>).Pool(processes=<span class="hljs-number">2</span>) <span class="hljs-keyword">as</span> pool:
<span class="hljs-meta">... </span>    result = dataset.<span class="hljs-built_in">map</span>(
<span class="hljs-meta">... </span>        map_to_pred, batched=<span class="hljs-literal">True</span>, batch_size=<span class="hljs-number">2</span>, fn_kwargs={<span class="hljs-string">&quot;pool&quot;</span>: pool}, remove_columns=[<span class="hljs-string">&quot;speech&quot;</span>]
<span class="hljs-meta">... </span>    )

<span class="hljs-meta">&gt;&gt;&gt; </span>result[<span class="hljs-string">&quot;transcription&quot;</span>][:<span class="hljs-number">2</span>]
[<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>, <span class="hljs-string">&quot;NOR IS MISTER COULTER&#x27;S MANNER LESS INTERESTING THAN HIS MATTER&quot;</span>]`}}),xn=new oe({}),Wn=new F({props:{name:"class transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput",anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput",parameters:[{name:"text",val:": typing.Union[typing.List[str], str]"},{name:"logit_score",val:": typing.Union[typing.List[float], float] = None"},{name:"lm_score",val:": typing.Union[typing.List[float], float] = None"},{name:"word_offsets",val:": typing.Union[typing.List[typing.List[typing.Dict[str, typing.Union[int, str]]]], typing.List[typing.Dict[str, typing.Union[int, str]]]] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.text",description:`<strong>text</strong> (list of <code>str</code> or <code>str</code>) &#x2014;
Decoded logits in text from. Usually the speech transcription.`,name:"text"},{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.logit_score",description:`<strong>logit_score</strong> (list of <code>float</code> or <code>float</code>) &#x2014;
Total logit score of the beam associated with produced text.`,name:"logit_score"},{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.lm_score",description:`<strong>lm_score</strong> (list of <code>float</code>) &#x2014;
Fused lm_score of the beam associated with produced text.`,name:"lm_score"},{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.word_offsets",description:`<strong>word_offsets</strong> (list of <code>List[Dict[str, Union[int, str]]]</code> or <code>List[Dict[str, Union[int, str]]]</code>) &#x2014;
Offsets of the decoded words. In combination with sampling rate and model downsampling rate word offsets
can be used to compute time stamps for each word.`,name:"word_offsets"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L45"}}),Vn=new F({props:{name:"class transformers.modeling_outputs.Wav2Vec2BaseModelOutput",anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"extract_features",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput.extract_features",description:`<strong>extract_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, conv_dim[-1])</code>) &#x2014;
Sequence of extracted feature vectors of the last convolutional layer of the model.`,name:"extract_features"},{anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/modeling_outputs.py#L976"}}),Fn=new F({props:{name:"class transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput",anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"projected_states",val:": FloatTensor = None"},{name:"projected_quantized_states",val:": FloatTensor = None"},{name:"codevector_perplexity",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"contrastive_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"diversity_loss",val:": typing.Optional[torch.FloatTensor] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
The diversity loss (L_d) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official paper</a> .`,name:"diversity_loss"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L94"}}),Cn=new F({props:{name:"class transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput",parameters:[{name:"last_hidden_state",val:": ndarray = None"},{name:"extract_features",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.extract_features",description:`<strong>extract_features</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, last_conv_dim)</code>) &#x2014;
Sequence of extracted feature vectors of the last convolutional layer of the model with <code>last_conv_dim</code>
being the dimension of the last convolutional layer.`,name:"extract_features"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L46"}}),Pn=new F({props:{name:"replace",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/flax/struct.py#L108"}}),zn=new F({props:{name:"class transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput",parameters:[{name:"projected_states",val:": ndarray = None"},{name:"projected_quantized_states",val:": ndarray = None"},{name:"codevector_perplexity",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when model is in train mode, <code>jnp.ndarray</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L76"}}),An=new F({props:{name:"replace",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/flax/struct.py#L108"}}),Ln=new oe({}),On=new F({props:{name:"class transformers.Wav2Vec2Model",anchor:"transformers.Wav2Vec2Model",parameters:[{name:"config",val:": Wav2Vec2Config"}],parametersDescription:[{anchor:"transformers.Wav2Vec2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1187"}}),Rn=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2Model.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2Model.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1273",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wa=new xe({props:{$$slots:{default:[t4]},$$scope:{ctx:W}}}),ya=new We({props:{anchor:"transformers.Wav2Vec2Model.forward.example",$$slots:{default:[o4]},$$scope:{ctx:W}}}),Un=new oe({}),Hn=new F({props:{name:"class transformers.Wav2Vec2ForCTC",anchor:"transformers.Wav2Vec2ForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1608"}}),Zn=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForCTC.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1649",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ta=new xe({props:{$$slots:{default:[a4]},$$scope:{ctx:W}}}),$a=new We({props:{anchor:"transformers.Wav2Vec2ForCTC.forward.example",$$slots:{default:[s4]},$$scope:{ctx:W}}}),xa=new We({props:{anchor:"transformers.Wav2Vec2ForCTC.forward.example-2",$$slots:{default:[n4]},$$scope:{ctx:W}}}),Qn=new oe({}),Yn=new F({props:{name:"class transformers.Wav2Vec2ForSequenceClassification",anchor:"transformers.Wav2Vec2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1738"}}),nr=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1783",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ja=new xe({props:{$$slots:{default:[r4]},$$scope:{ctx:W}}}),Va=new We({props:{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.example",$$slots:{default:[i4]},$$scope:{ctx:W}}}),Fa=new We({props:{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.example-2",$$slots:{default:[l4]},$$scope:{ctx:W}}}),rr=new oe({}),ir=new F({props:{name:"class transformers.Wav2Vec2ForAudioFrameClassification",anchor:"transformers.Wav2Vec2ForAudioFrameClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1861"}}),hr=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1905",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ca=new xe({props:{$$slots:{default:[c4]},$$scope:{ctx:W}}}),qa=new We({props:{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.example",$$slots:{default:[d4]},$$scope:{ctx:W}}}),fr=new oe({}),ur=new F({props:{name:"class transformers.Wav2Vec2ForXVector",anchor:"transformers.Wav2Vec2ForXVector",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForXVector.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L2023"}}),yr=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForXVector.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForXVector.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForXVector.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForXVector.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L2085",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.XVectorOutput"
>transformers.modeling_outputs.XVectorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.XVectorOutput"
>transformers.modeling_outputs.XVectorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),za=new xe({props:{$$slots:{default:[p4]},$$scope:{ctx:W}}}),Ma=new We({props:{anchor:"transformers.Wav2Vec2ForXVector.forward.example",$$slots:{default:[m4]},$$scope:{ctx:W}}}),kr=new oe({}),Tr=new F({props:{name:"class transformers.Wav2Vec2ForPreTraining",anchor:"transformers.Wav2Vec2ForPreTraining",parameters:[{name:"config",val:": Wav2Vec2Config"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1336"}}),Vr=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForPreTraining.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.BoolTensor] = None"},{name:"sampled_negative_indices",val:": typing.Optional[torch.BoolTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForPreTraining.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ForPreTraining.forward.mask_time_indices",description:`<strong>mask_time_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices to mask extracted features for contrastive loss. When in training mode, model learns to predict
masked extracted features in <em>config.proj_codevector_dim</em> space.`,name:"mask_time_indices"},{anchor:"transformers.Wav2Vec2ForPreTraining.forward.sampled_negative_indices",description:`<strong>sampled_negative_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length, num_negatives)</code>, <em>optional</em>) &#x2014;
Indices indicating which quantized target vectors are used as negative sampled vectors in contrastive loss.
Required input for pre-training.`,name:"sampled_negative_indices"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1397",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput"
>transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput"
>transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),La=new xe({props:{$$slots:{default:[h4]},$$scope:{ctx:W}}}),Oa=new We({props:{anchor:"transformers.Wav2Vec2ForPreTraining.forward.example",$$slots:{default:[f4]},$$scope:{ctx:W}}}),Fr=new oe({}),Er=new F({props:{name:"class transformers.TFWav2Vec2Model",anchor:"transformers.TFWav2Vec2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWav2Vec2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1461"}}),Sa=new xe({props:{$$slots:{default:[u4]},$$scope:{ctx:W}}}),zr=new F({props:{name:"call",anchor:"transformers.TFWav2Vec2Model.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFWav2Vec2Model.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFWav2Vec2Model.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1467",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ia=new xe({props:{$$slots:{default:[g4]},$$scope:{ctx:W}}}),Na=new We({props:{anchor:"transformers.TFWav2Vec2Model.call.example",$$slots:{default:[_4]},$$scope:{ctx:W}}}),Mr=new oe({}),Ar=new F({props:{name:"class transformers.TFWav2Vec2ForCTC",anchor:"transformers.TFWav2Vec2ForCTC",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWav2Vec2ForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1564"}}),Ra=new xe({props:{$$slots:{default:[v4]},$$scope:{ctx:W}}}),Ir=new F({props:{name:"call",anchor:"transformers.TFWav2Vec2ForCTC.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFWav2Vec2ForCTC.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFWav2Vec2ForCTC.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFWav2Vec2ForCTC.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_values</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked),
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1591",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ua=new xe({props:{$$slots:{default:[b4]},$$scope:{ctx:W}}}),Ha=new We({props:{anchor:"transformers.TFWav2Vec2ForCTC.call.example",$$slots:{default:[w4]},$$scope:{ctx:W}}}),Nr=new oe({}),Br=new F({props:{name:"class transformers.FlaxWav2Vec2Model",anchor:"transformers.FlaxWav2Vec2Model",parameters:[{name:"config",val:": Wav2Vec2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1024)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWav2Vec2Model.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1058"}}),Yr=new F({props:{name:"__call__",anchor:"transformers.FlaxWav2Vec2Model.__call__",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2Model.__call__.input_values",description:`<strong>input_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>jnp.ndarray</em>. See <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.FlaxWav2Vec2Model.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L890",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput"
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
  href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput"
>transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ga=new xe({props:{$$slots:{default:[y4]},$$scope:{ctx:W}}}),Ka=new We({props:{anchor:"transformers.FlaxWav2Vec2Model.__call__.example",$$slots:{default:[k4]},$$scope:{ctx:W}}}),ei=new oe({}),ti=new F({props:{name:"class transformers.FlaxWav2Vec2ForCTC",anchor:"transformers.FlaxWav2Vec2ForCTC",parameters:[{name:"config",val:": Wav2Vec2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1024)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWav2Vec2ForCTC.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1176"}}),di=new F({props:{name:"__call__",anchor:"transformers.FlaxWav2Vec2ForCTC.__call__",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.input_values",description:`<strong>input_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>jnp.ndarray</em>. See <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L890",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Za=new xe({props:{$$slots:{default:[T4]},$$scope:{ctx:W}}}),Qa=new We({props:{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.example",$$slots:{default:[$4]},$$scope:{ctx:W}}}),pi=new oe({}),mi=new F({props:{name:"class transformers.FlaxWav2Vec2ForPreTraining",anchor:"transformers.FlaxWav2Vec2ForPreTraining",parameters:[{name:"config",val:": Wav2Vec2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1024)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWav2Vec2ForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1322"}}),yi=new F({props:{name:"__call__",anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"gumbel_temperature",val:": int = 1"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"gumbel_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.input_values",description:`<strong>input_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>jnp.ndarray</em>. See <a href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1325",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput"
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
  href="/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput"
>transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),es=new xe({props:{$$slots:{default:[x4]},$$scope:{ctx:W}}}),ts=new We({props:{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.example",$$slots:{default:[W4]},$$scope:{ctx:W}}}),{c(){d=n("meta"),b=p(),f=n("h1"),u=n("a"),v=n("span"),w(l.$$.fragment),h=p(),V=n("span"),A=a("Wav2Vec2"),L=p(),z=n("h2"),M=n("a"),N=n("span"),w(E.$$.fragment),O=p(),C=n("span"),ce=a("Overview"),K=p(),S=n("p"),de=a("The Wav2Vec2 model was proposed in "),I=n("a"),R=a("wav2vec 2.0: A Framework for Self-Supervised Learning of Speech Representations"),De=a(" by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael Auli."),X=p(),J=n("p"),Se=a("The abstract from the paper is the following:"),Ve=p(),Z=n("p"),Ze=n("em"),$t=a(`We show for the first time that learning powerful representations from speech audio alone followed by fine-tuning on
transcribed speech can outperform the best semi-supervised methods while being conceptually simpler. wav2vec 2.0 masks
the speech input in the latent space and solves a contrastive task defined over a quantization of the latent
representations which are jointly learned. Experiments using all labeled data of Librispeech achieve 1.8/3.3 WER on the
clean/other test sets. When lowering the amount of labeled data to one hour, wav2vec 2.0 outperforms the previous state
of the art on the 100 hour subset while using 100 times less labeled data. Using just ten minutes of labeled data and
pre-training on 53k hours of unlabeled data still achieves 4.8/8.2 WER. This demonstrates the feasibility of speech
recognition with limited amounts of labeled data.`),Ie=p(),D=n("p"),Q=a("Tips:"),at=p(),ae=n("ul"),Qe=n("li"),xt=a("Wav2Vec2 is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),Fe=p(),Ee=n("li"),Wt=a(`Wav2Vec2 model was trained using connectionist temporal classification (CTC) so the model output has to be decoded
using `),U=n("a"),jt=a("Wav2Vec2CTCTokenizer"),Ce=a("."),st=p(),ye=n("p"),qe=a("This model was contributed by "),Pe=n("a"),Vt=a("patrickvonplaten"),he=a("."),nt=p(),Y=n("h2"),ke=n("a"),ze=n("span"),w(B.$$.fragment),Ft=p(),ee=n("span"),Et=a("Resources"),rt=p(),j=n("p"),q=a("A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with Wav2Vec2. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),It=p(),w(fe.$$.fragment),Nt=p(),Ne=n("ul"),P=n("li"),to=a("A notebook on how to "),Ye=n("a"),oo=a("leverage a pretrained Wav2Vec2 model for emotion classification"),ao=a(". \u{1F30E}"),so=p(),H=n("li"),pe=n("a"),no=a("Wav2Vec2ForCTC"),ro=a(" is supported by this "),se=n("a"),io=a("example script"),lo=a(" and "),Me=n("a"),co=a("notebook"),et=a("."),Bt=p(),w(ks.$$.fragment),cp=p(),Be=n("ul"),Ts=n("li"),Th=a("A blog post on "),$s=n("a"),$h=a("boosting Wav2Vec2 with n-grams in \u{1F917} Transformers"),xh=a("."),Wh=p(),xs=n("li"),jh=a("A blog post on how to "),Ws=n("a"),Vh=a("finetune Wav2Vec2 for English ASR with \u{1F917} Transformers"),Fh=a("."),Eh=p(),js=n("li"),Ch=a("A blog post on "),Vs=n("a"),qh=a("finetuning XLS-R for Multi-Lingual ASR with \u{1F917} Transformers"),Ph=a("."),zh=p(),Fs=n("li"),Mh=a("A notebook on how to "),Es=n("a"),Ah=a("create YouTube captions from any video by transcribing audio with Wav2Vec2"),Lh=a(". \u{1F30E}"),Oh=p(),Rt=n("li"),qi=n("a"),Dh=a("Wav2Vec2ForCTC"),Sh=a(" is supported by a notebook on "),Cs=n("a"),Ih=a("how to finetune a speech recognition model in English"),Nh=a(", and "),qs=n("a"),Bh=a("how to finetune a speech recognition model in any language"),Rh=a("."),dp=p(),Pi=n("p"),Uh=a("\u{1F680} Deploy"),pp=p(),zi=n("ul"),Ps=n("li"),Hh=a("A blog post on how to deploy Wav2Vec2 for "),zs=n("a"),Xh=a("Automatic Speech Recogntion with Hugging Face\u2019s Transformers & Amazon SageMaker"),Gh=a("."),mp=p(),po=n("h2"),Ko=n("a"),Gl=n("span"),w(Ms.$$.fragment),Kh=p(),Kl=n("span"),Jh=a("Wav2Vec2Config"),hp=p(),tt=n("div"),w(As.$$.fragment),Zh=p(),mo=n("p"),Qh=a("This is the configuration class to store the configuration of a "),Mi=n("a"),Yh=a("Wav2Vec2Model"),ef=a(`. It is used to instantiate an
Wav2Vec2 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Wav2Vec2
`),Ls=n("a"),tf=a("facebook/wav2vec2-base-960h"),of=a(" architecture."),af=p(),ho=n("p"),sf=a("Configuration objects inherit from "),Ai=n("a"),nf=a("PretrainedConfig"),rf=a(` and can be used to control the model outputs. Read the
documentation from `),Li=n("a"),lf=a("PretrainedConfig"),cf=a(" for more information."),df=p(),w(Jo.$$.fragment),fp=p(),fo=n("h2"),Zo=n("a"),Jl=n("span"),w(Os.$$.fragment),pf=p(),Zl=n("span"),mf=a("Wav2Vec2CTCTokenizer"),up=p(),ne=n("div"),w(Ds.$$.fragment),hf=p(),Ql=n("p"),ff=a("Constructs a Wav2Vec2CTC tokenizer."),uf=p(),Ss=n("p"),gf=a("This tokenizer inherits from "),Oi=n("a"),_f=a("PreTrainedTokenizer"),vf=a(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),bf=p(),Qo=n("div"),w(Is.$$.fragment),wf=p(),Yl=n("p"),yf=a(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),kf=p(),Di=n("div"),w(Ns.$$.fragment),Tf=p(),it=n("div"),w(Bs.$$.fragment),$f=p(),ec=n("p"),xf=a(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),Wf=p(),Rs=n("p"),jf=a("Similar to doing "),tc=n("code"),Vf=a("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Ff=a("."),Ef=p(),w(Yo.$$.fragment),Cf=p(),ea=n("div"),w(Us.$$.fragment),qf=p(),oc=n("p"),Pf=a("Convert a list of lists of token ids into a list of strings by calling decode."),gp=p(),uo=n("h2"),ta=n("a"),ac=n("span"),w(Hs.$$.fragment),zf=p(),sc=n("span"),Mf=a("Wav2Vec2FeatureExtractor"),_p=p(),ot=n("div"),w(Xs.$$.fragment),Af=p(),nc=n("p"),Lf=a("Constructs a Wav2Vec2 feature extractor."),Of=p(),Gs=n("p"),Df=a("This feature extractor inherits from "),Si=n("a"),Sf=a("SequenceFeatureExtractor"),If=a(` which contains
most of the main methods. Users should refer to this superclass for more information regarding those methods.`),Nf=p(),oa=n("div"),w(Ks.$$.fragment),Bf=p(),rc=n("p"),Rf=a("Main method to featurize and prepare for the model one or several sequence(s)."),vp=p(),go=n("h2"),aa=n("a"),ic=n("span"),w(Js.$$.fragment),Uf=p(),lc=n("span"),Hf=a("Wav2Vec2Processor"),bp=p(),G=n("div"),w(Zs.$$.fragment),Xf=p(),cc=n("p"),Gf=a(`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor and a Wav2Vec2 CTC tokenizer into a single
processor.`),Kf=p(),Re=n("p"),Ii=n("a"),Jf=a("Wav2Vec2Processor"),Zf=a(" offers all the functionalities of "),Ni=n("a"),Qf=a("Wav2Vec2FeatureExtractor"),Yf=a(" and "),Bi=n("a"),eu=a("PreTrainedTokenizer"),tu=a(`.
See the docstring of `),Qs=n("a"),dc=n("strong"),ou=a("call"),au=a("()"),su=a(" and "),Ri=n("a"),nu=a("decode()"),ru=a(" for more information."),iu=p(),sa=n("div"),w(Ys.$$.fragment),lu=p(),Ct=n("p"),cu=a(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),en=n("a"),pc=n("strong"),du=a("call"),pu=a("()"),mu=a(` and returns its output. If used in the context
`),mc=n("code"),hu=a("as_target_processor()"),fu=a(` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),tn=n("a"),hc=n("strong"),uu=a("call"),gu=a("()"),_u=a(". Please refer to the docstring of the above two methods for more information."),vu=p(),na=n("div"),w(on.$$.fragment),bu=p(),qt=n("p"),wu=a(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),Ui=n("a"),yu=a("pad()"),ku=a(` and returns its output. If used in the context
`),fc=n("code"),Tu=a("as_target_processor()"),$u=a(` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),Hi=n("a"),xu=a("pad()"),Wu=a(". Please refer to the docstring of the above two methods for more information."),ju=p(),Xi=n("div"),w(an.$$.fragment),Vu=p(),Ut=n("div"),w(sn.$$.fragment),Fu=p(),nn=n("p"),Eu=a(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Gi=n("a"),Cu=a("from_pretrained()"),qu=a(" method."),Pu=p(),w(ra.$$.fragment),zu=p(),ia=n("div"),w(rn.$$.fragment),Mu=p(),ln=n("p"),Au=a("This method forwards all its arguments to PreTrainedTokenizer\u2019s "),Ki=n("a"),Lu=a("batch_decode()"),Ou=a(`. Please
refer to the docstring of this method for more information.`),Du=p(),la=n("div"),w(cn.$$.fragment),Su=p(),dn=n("p"),Iu=a("This method forwards all its arguments to PreTrainedTokenizer\u2019s "),Ji=n("a"),Nu=a("decode()"),Bu=a(`. Please refer
to the docstring of this method for more information.`),wp=p(),_o=n("h2"),ca=n("a"),uc=n("span"),w(pn.$$.fragment),Ru=p(),gc=n("span"),Uu=a("Wav2Vec2ProcessorWithLM"),yp=p(),te=n("div"),w(mn.$$.fragment),Hu=p(),_c=n("p"),Xu=a(`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor, a Wav2Vec2 CTC tokenizer and a decoder
with language model support into a single processor for language model boosted speech recognition decoding.`),Gu=p(),da=n("div"),w(hn.$$.fragment),Ku=p(),Pt=n("p"),Ju=a(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),fn=n("a"),vc=n("strong"),Zu=a("call"),Qu=a("()"),Yu=a(` and returns its output. If used in the context
`),bc=n("code"),eg=a("as_target_processor()"),tg=a(` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),un=n("a"),wc=n("strong"),og=a("call"),ag=a("()"),sg=a(`. Please refer to the docstring of the above two
methods for more information.`),ng=p(),pa=n("div"),w(gn.$$.fragment),rg=p(),zt=n("p"),ig=a(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),Zi=n("a"),lg=a("pad()"),cg=a(` and returns its output. If used in the context
`),yc=n("code"),dg=a("as_target_processor()"),pg=a(` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),Qi=n("a"),mg=a("pad()"),hg=a(`. Please refer to the docstring of the above two methods
for more information.`),fg=p(),Ht=n("div"),w(_n.$$.fragment),ug=p(),vn=n("p"),gg=a("Instantiate a "),Yi=n("a"),_g=a("Wav2Vec2ProcessorWithLM"),vg=a(" from a pretrained Wav2Vec2 processor."),bg=p(),w(ma.$$.fragment),wg=p(),el=n("div"),w(bn.$$.fragment),yg=p(),lt=n("div"),w(wn.$$.fragment),kg=p(),kc=n("p"),Tg=a("Batch decode output logits to audio transcription with language model support."),$g=p(),w(ha.$$.fragment),xg=p(),yn=n("p"),Wg=a(`Example:
See `),tl=n("a"),jg=a("Decoding multiple audios"),Vg=a("."),Fg=p(),Xt=n("div"),w(kn.$$.fragment),Eg=p(),Tc=n("p"),Cg=a("Decode output logits to audio transcription with language model support."),qg=p(),w(fa.$$.fragment),kp=p(),vo=n("h3"),ua=n("a"),$c=n("span"),w(Tn.$$.fragment),Pg=p(),xc=n("span"),zg=a("Decoding multiple audios"),Tp=p(),Te=n("p"),Mg=a("If you are planning to decode multiple batches of audios, you should consider using "),ol=n("a"),Ag=a("batch_decode()"),Lg=a(" and passing an instantiated "),Wc=n("code"),Og=a("multiprocessing.Pool"),Dg=a(`.
Otherwise, `),al=n("a"),Sg=a("batch_decode()"),Ig=a(" performance will be slower than calling "),sl=n("a"),Ng=a("decode()"),Bg=a(" for each audio individually, as it internally instantiates a new "),jc=n("code"),Rg=a("Pool"),Ug=a(" for every call. See the example below:"),$p=p(),w($n.$$.fragment),xp=p(),bo=n("h2"),ga=n("a"),Vc=n("span"),w(xn.$$.fragment),Hg=p(),Fc=n("span"),Xg=a("Wav2Vec2 specific outputs"),Wp=p(),wo=n("div"),w(Wn.$$.fragment),Gg=p(),jn=n("p"),Kg=a("Output type of "),Ec=n("code"),Jg=a("Wav2Vec2DecoderWithLM"),Zg=a(", with transcription."),jp=p(),yo=n("div"),w(Vn.$$.fragment),Qg=p(),Cc=n("p"),Yg=a("Base class for models that have been trained with the Wav2Vec2 loss objective."),Vp=p(),ko=n("div"),w(Fn.$$.fragment),e_=p(),En=n("p"),t_=a("Output type of "),nl=n("a"),o_=a("Wav2Vec2ForPreTraining"),a_=a(", with potential hidden states and attentions."),Fp=p(),Mt=n("div"),w(Cn.$$.fragment),s_=p(),qn=n("p"),n_=a("Output type of "),qc=n("code"),r_=a("FlaxWav2Vec2BaseModelOutput"),i_=a(", with potential hidden states and attentions."),l_=p(),_a=n("div"),w(Pn.$$.fragment),c_=p(),Pc=n("p"),d_=a("\u201CReturns a new object replacing the specified fields with new values."),Ep=p(),At=n("div"),w(zn.$$.fragment),p_=p(),Mn=n("p"),m_=a("Output type of "),zc=n("code"),h_=a("FlaxWav2Vec2ForPreTrainingOutput"),f_=a(", with potential hidden states and attentions."),u_=p(),va=n("div"),w(An.$$.fragment),g_=p(),Mc=n("p"),__=a("\u201CReturns a new object replacing the specified fields with new values."),Cp=p(),To=n("h2"),ba=n("a"),Ac=n("span"),w(Ln.$$.fragment),v_=p(),Lc=n("span"),b_=a("Wav2Vec2Model"),qp=p(),Ae=n("div"),w(On.$$.fragment),w_=p(),Dn=n("p"),y_=a(`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),Sn=n("a"),k_=a(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),T_=a(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),$_=p(),In=n("p"),x_=a("This model inherits from "),rl=n("a"),W_=a("PreTrainedModel"),j_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),V_=p(),Nn=n("p"),F_=a("This model is a PyTorch "),Bn=n("a"),E_=a("torch.nn.Module"),C_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),q_=p(),ct=n("div"),w(Rn.$$.fragment),P_=p(),$o=n("p"),z_=a("The "),il=n("a"),M_=a("Wav2Vec2Model"),A_=a(" forward method, overrides the "),Oc=n("code"),L_=a("__call__"),O_=a(" special method."),D_=p(),w(wa.$$.fragment),S_=p(),w(ya.$$.fragment),Pp=p(),xo=n("h2"),ka=n("a"),Dc=n("span"),w(Un.$$.fragment),I_=p(),Sc=n("span"),N_=a("Wav2Vec2ForCTC"),zp=p(),Le=n("div"),w(Hn.$$.fragment),B_=p(),Wo=n("p"),R_=a("Wav2Vec2 Model with a "),Ic=n("code"),U_=a("language modeling"),H_=a(` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),Xn=n("a"),X_=a(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),G_=a(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),K_=p(),Gn=n("p"),J_=a("This model inherits from "),ll=n("a"),Z_=a("PreTrainedModel"),Q_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Y_=p(),Kn=n("p"),ev=a("This model is a PyTorch "),Jn=n("a"),tv=a("torch.nn.Module"),ov=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),av=p(),Ue=n("div"),w(Zn.$$.fragment),sv=p(),jo=n("p"),nv=a("The "),cl=n("a"),rv=a("Wav2Vec2ForCTC"),iv=a(" forward method, overrides the "),Nc=n("code"),lv=a("__call__"),cv=a(" special method."),dv=p(),w(Ta.$$.fragment),pv=p(),w($a.$$.fragment),mv=p(),w(xa.$$.fragment),Mp=p(),Vo=n("h2"),Wa=n("a"),Bc=n("span"),w(Qn.$$.fragment),hv=p(),Rc=n("span"),fv=a("Wav2Vec2ForSequenceClassification"),Ap=p(),ue=n("div"),w(Yn.$$.fragment),uv=p(),Uc=n("p"),gv=a(`Wav2Vec2 Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),_v=p(),er=n("p"),vv=a("Wav2Vec2 was proposed in "),tr=n("a"),bv=a(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),wv=a(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),yv=p(),or=n("p"),kv=a("This model inherits from "),dl=n("a"),Tv=a("PreTrainedModel"),$v=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),xv=p(),ar=n("p"),Wv=a("This model is a PyTorch "),sr=n("a"),jv=a("torch.nn.Module"),Vv=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fv=p(),He=n("div"),w(nr.$$.fragment),Ev=p(),Fo=n("p"),Cv=a("The "),pl=n("a"),qv=a("Wav2Vec2ForSequenceClassification"),Pv=a(" forward method, overrides the "),Hc=n("code"),zv=a("__call__"),Mv=a(" special method."),Av=p(),w(ja.$$.fragment),Lv=p(),w(Va.$$.fragment),Ov=p(),w(Fa.$$.fragment),Lp=p(),Eo=n("h2"),Ea=n("a"),Xc=n("span"),w(rr.$$.fragment),Dv=p(),Gc=n("span"),Sv=a("Wav2Vec2ForAudioFrameClassification"),Op=p(),ge=n("div"),w(ir.$$.fragment),Iv=p(),Kc=n("p"),Nv=a("Wav2Vec2 Model with a frame classification head on top for tasks like Speaker Diarization."),Bv=p(),lr=n("p"),Rv=a("Wav2Vec2 was proposed in "),cr=n("a"),Uv=a(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Hv=a(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Xv=p(),dr=n("p"),Gv=a("This model inherits from "),ml=n("a"),Kv=a("PreTrainedModel"),Jv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Zv=p(),pr=n("p"),Qv=a("This model is a PyTorch "),mr=n("a"),Yv=a("torch.nn.Module"),e2=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),t2=p(),dt=n("div"),w(hr.$$.fragment),o2=p(),Co=n("p"),a2=a("The "),hl=n("a"),s2=a("Wav2Vec2ForAudioFrameClassification"),n2=a(" forward method, overrides the "),Jc=n("code"),r2=a("__call__"),i2=a(" special method."),l2=p(),w(Ca.$$.fragment),c2=p(),w(qa.$$.fragment),Dp=p(),qo=n("h2"),Pa=n("a"),Zc=n("span"),w(fr.$$.fragment),d2=p(),Qc=n("span"),p2=a("Wav2Vec2ForXVector"),Sp=p(),_e=n("div"),w(ur.$$.fragment),m2=p(),Yc=n("p"),h2=a("Wav2Vec2 Model with an XVector feature extraction head on top for tasks like Speaker Verification."),f2=p(),gr=n("p"),u2=a("Wav2Vec2 was proposed in "),_r=n("a"),g2=a(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),_2=a(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),v2=p(),vr=n("p"),b2=a("This model inherits from "),fl=n("a"),w2=a("PreTrainedModel"),y2=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),k2=p(),br=n("p"),T2=a("This model is a PyTorch "),wr=n("a"),$2=a("torch.nn.Module"),x2=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),W2=p(),pt=n("div"),w(yr.$$.fragment),j2=p(),Po=n("p"),V2=a("The "),ul=n("a"),F2=a("Wav2Vec2ForXVector"),E2=a(" forward method, overrides the "),ed=n("code"),C2=a("__call__"),q2=a(" special method."),P2=p(),w(za.$$.fragment),z2=p(),w(Ma.$$.fragment),Ip=p(),zo=n("h2"),Aa=n("a"),td=n("span"),w(kr.$$.fragment),M2=p(),od=n("span"),A2=a("Wav2Vec2ForPreTraining"),Np=p(),Oe=n("div"),w(Tr.$$.fragment),L2=p(),Mo=n("p"),O2=a("Wav2Vec2 Model with a quantizer and "),ad=n("code"),D2=a("VQ"),S2=a(` head on top.
Wav2Vec2 was proposed in `),$r=n("a"),I2=a(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),N2=a(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),B2=p(),xr=n("p"),R2=a("This model inherits from "),gl=n("a"),U2=a("PreTrainedModel"),H2=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),X2=p(),Wr=n("p"),G2=a("This model is a PyTorch "),jr=n("a"),K2=a("torch.nn.Module"),J2=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Z2=p(),mt=n("div"),w(Vr.$$.fragment),Q2=p(),Ao=n("p"),Y2=a("The "),_l=n("a"),eb=a("Wav2Vec2ForPreTraining"),tb=a(" forward method, overrides the "),sd=n("code"),ob=a("__call__"),ab=a(" special method."),sb=p(),w(La.$$.fragment),nb=p(),w(Oa.$$.fragment),Bp=p(),Lo=n("h2"),Da=n("a"),nd=n("span"),w(Fr.$$.fragment),rb=p(),rd=n("span"),ib=a("TFWav2Vec2Model"),Rp=p(),ve=n("div"),w(Er.$$.fragment),lb=p(),id=n("p"),cb=a("The bare TFWav2Vec2 Model transformer outputing raw hidden-states without any specific head on top."),db=p(),Cr=n("p"),pb=a("This model inherits from "),vl=n("a"),mb=a("TFPreTrainedModel"),hb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fb=p(),qr=n("p"),ub=a("This model is also a "),Pr=n("a"),gb=a("tf.keras.Model"),_b=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vb=p(),w(Sa.$$.fragment),bb=p(),ht=n("div"),w(zr.$$.fragment),wb=p(),Oo=n("p"),yb=a("The "),bl=n("a"),kb=a("TFWav2Vec2Model"),Tb=a(" forward method, overrides the "),ld=n("code"),$b=a("__call__"),xb=a(" special method."),Wb=p(),w(Ia.$$.fragment),jb=p(),w(Na.$$.fragment),Up=p(),Do=n("h2"),Ba=n("a"),cd=n("span"),w(Mr.$$.fragment),Vb=p(),dd=n("span"),Fb=a("TFWav2Vec2ForCTC"),Hp=p(),be=n("div"),w(Ar.$$.fragment),Eb=p(),Lr=n("p"),Cb=a("TFWav2Vec2 Model with a "),pd=n("code"),qb=a("language modeling"),Pb=a(" head on top for Connectionist Temporal Classification (CTC)."),zb=p(),Or=n("p"),Mb=a("This model inherits from "),wl=n("a"),Ab=a("TFPreTrainedModel"),Lb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ob=p(),Dr=n("p"),Db=a("This model is also a "),Sr=n("a"),Sb=a("tf.keras.Model"),Ib=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nb=p(),w(Ra.$$.fragment),Bb=p(),ft=n("div"),w(Ir.$$.fragment),Rb=p(),So=n("p"),Ub=a("The "),yl=n("a"),Hb=a("TFWav2Vec2ForCTC"),Xb=a(" forward method, overrides the "),md=n("code"),Gb=a("__call__"),Kb=a(" special method."),Jb=p(),w(Ua.$$.fragment),Zb=p(),w(Ha.$$.fragment),Xp=p(),Io=n("h2"),Xa=n("a"),hd=n("span"),w(Nr.$$.fragment),Qb=p(),fd=n("span"),Yb=a("FlaxWav2Vec2Model"),Gp=p(),re=n("div"),w(Br.$$.fragment),ew=p(),Rr=n("p"),tw=a(`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),Ur=n("a"),ow=a(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),aw=a(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),sw=p(),Hr=n("p"),nw=a("This model inherits from "),kl=n("a"),rw=a("FlaxPreTrainedModel"),iw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lw=p(),Xr=n("p"),cw=a(`This model is also a Flax Linen
`),Gr=n("a"),dw=a("flax.nn.Module"),pw=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),mw=p(),ud=n("p"),hw=a("Finally, this model supports inherent JAX features such as:"),fw=p(),Lt=n("ul"),gd=n("li"),Kr=n("a"),uw=a("Just-In-Time (JIT) compilation"),gw=p(),_d=n("li"),Jr=n("a"),_w=a("Automatic Differentiation"),vw=p(),vd=n("li"),Zr=n("a"),bw=a("Vectorization"),ww=p(),bd=n("li"),Qr=n("a"),yw=a("Parallelization"),kw=p(),ut=n("div"),w(Yr.$$.fragment),Tw=p(),No=n("p"),$w=a("The "),wd=n("code"),xw=a("FlaxWav2Vec2PreTrainedModel"),Ww=a(" forward method, overrides the "),yd=n("code"),jw=a("__call__"),Vw=a(" special method."),Fw=p(),w(Ga.$$.fragment),Ew=p(),w(Ka.$$.fragment),Kp=p(),Bo=n("h2"),Ja=n("a"),kd=n("span"),w(ei.$$.fragment),Cw=p(),Td=n("span"),qw=a("FlaxWav2Vec2ForCTC"),Jp=p(),ie=n("div"),w(ti.$$.fragment),Pw=p(),Ro=n("p"),zw=a("Wav2Vec2 Model with a "),$d=n("code"),Mw=a("language modeling"),Aw=a(` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),oi=n("a"),Lw=a(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Ow=a(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Dw=p(),ai=n("p"),Sw=a("This model inherits from "),Tl=n("a"),Iw=a("FlaxPreTrainedModel"),Nw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bw=p(),si=n("p"),Rw=a(`This model is also a Flax Linen
`),ni=n("a"),Uw=a("flax.nn.Module"),Hw=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Xw=p(),xd=n("p"),Gw=a("Finally, this model supports inherent JAX features such as:"),Kw=p(),Ot=n("ul"),Wd=n("li"),ri=n("a"),Jw=a("Just-In-Time (JIT) compilation"),Zw=p(),jd=n("li"),ii=n("a"),Qw=a("Automatic Differentiation"),Yw=p(),Vd=n("li"),li=n("a"),e0=a("Vectorization"),t0=p(),Fd=n("li"),ci=n("a"),o0=a("Parallelization"),a0=p(),gt=n("div"),w(di.$$.fragment),s0=p(),Uo=n("p"),n0=a("The "),Ed=n("code"),r0=a("FlaxWav2Vec2PreTrainedModel"),i0=a(" forward method, overrides the "),Cd=n("code"),l0=a("__call__"),c0=a(" special method."),d0=p(),w(Za.$$.fragment),p0=p(),w(Qa.$$.fragment),Zp=p(),Ho=n("h2"),Ya=n("a"),qd=n("span"),w(pi.$$.fragment),m0=p(),Pd=n("span"),h0=a("FlaxWav2Vec2ForPreTraining"),Qp=p(),le=n("div"),w(mi.$$.fragment),f0=p(),Xo=n("p"),u0=a("Wav2Vec2 Model with a quantizer and "),zd=n("code"),g0=a("VQ"),_0=a(` head on top.
Wav2Vec2 was proposed in `),hi=n("a"),v0=a(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),b0=a(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),w0=p(),fi=n("p"),y0=a("This model inherits from "),$l=n("a"),k0=a("FlaxPreTrainedModel"),T0=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$0=p(),ui=n("p"),x0=a(`This model is also a Flax Linen
`),gi=n("a"),W0=a("flax.nn.Module"),j0=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),V0=p(),Md=n("p"),F0=a("Finally, this model supports inherent JAX features such as:"),E0=p(),Dt=n("ul"),Ad=n("li"),_i=n("a"),C0=a("Just-In-Time (JIT) compilation"),q0=p(),Ld=n("li"),vi=n("a"),P0=a("Automatic Differentiation"),z0=p(),Od=n("li"),bi=n("a"),M0=a("Vectorization"),A0=p(),Dd=n("li"),wi=n("a"),L0=a("Parallelization"),O0=p(),_t=n("div"),w(yi.$$.fragment),D0=p(),Go=n("p"),S0=a("The "),xl=n("a"),I0=a("FlaxWav2Vec2ForPreTraining"),N0=a(" forward method, overrides the "),Sd=n("code"),B0=a("__call__"),R0=a(" special method."),U0=p(),w(es.$$.fragment),H0=p(),w(ts.$$.fragment),this.h()},l(o){const g=XT('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(t),b=m(o),f=r(o,"H1",{class:!0});var ki=i(f);u=r(ki,"A",{id:!0,class:!0,href:!0});var Id=i(u);v=r(Id,"SPAN",{});var Nd=i(v);y(l.$$.fragment,Nd),Nd.forEach(t),Id.forEach(t),h=m(ki),V=r(ki,"SPAN",{});var Bd=i(V);A=s(Bd,"Wav2Vec2"),Bd.forEach(t),ki.forEach(t),L=m(o),z=r(o,"H2",{class:!0});var Ti=i(z);M=r(Ti,"A",{id:!0,class:!0,href:!0});var Rd=i(M);N=r(Rd,"SPAN",{});var Ud=i(N);y(E.$$.fragment,Ud),Ud.forEach(t),Rd.forEach(t),O=m(Ti),C=r(Ti,"SPAN",{});var Hd=i(C);ce=s(Hd,"Overview"),Hd.forEach(t),Ti.forEach(t),K=m(o),S=r(o,"P",{});var $i=i(S);de=s($i,"The Wav2Vec2 model was proposed in "),I=r($i,"A",{href:!0,rel:!0});var Xd=i(I);R=s(Xd,"wav2vec 2.0: A Framework for Self-Supervised Learning of Speech Representations"),Xd.forEach(t),De=s($i," by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael Auli."),$i.forEach(t),X=m(o),J=r(o,"P",{});var Gd=i(J);Se=s(Gd,"The abstract from the paper is the following:"),Gd.forEach(t),Ve=m(o),Z=r(o,"P",{});var Kd=i(Z);Ze=r(Kd,"EM",{});var Jd=i(Ze);$t=s(Jd,`We show for the first time that learning powerful representations from speech audio alone followed by fine-tuning on
transcribed speech can outperform the best semi-supervised methods while being conceptually simpler. wav2vec 2.0 masks
the speech input in the latent space and solves a contrastive task defined over a quantization of the latent
representations which are jointly learned. Experiments using all labeled data of Librispeech achieve 1.8/3.3 WER on the
clean/other test sets. When lowering the amount of labeled data to one hour, wav2vec 2.0 outperforms the previous state
of the art on the 100 hour subset while using 100 times less labeled data. Using just ten minutes of labeled data and
pre-training on 53k hours of unlabeled data still achieves 4.8/8.2 WER. This demonstrates the feasibility of speech
recognition with limited amounts of labeled data.`),Jd.forEach(t),Kd.forEach(t),Ie=m(o),D=r(o,"P",{});var Zd=i(D);Q=s(Zd,"Tips:"),Zd.forEach(t),at=m(o),ae=r(o,"UL",{});var xi=i(ae);Qe=r(xi,"LI",{});var Qd=i(Qe);xt=s(Qd,"Wav2Vec2 is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),Qd.forEach(t),Fe=m(xi),Ee=r(xi,"LI",{});var Wi=i(Ee);Wt=s(Wi,`Wav2Vec2 model was trained using connectionist temporal classification (CTC) so the model output has to be decoded
using `),U=r(Wi,"A",{href:!0});var Yd=i(U);jt=s(Yd,"Wav2Vec2CTCTokenizer"),Yd.forEach(t),Ce=s(Wi,"."),Wi.forEach(t),xi.forEach(t),st=m(o),ye=r(o,"P",{});var ji=i(ye);qe=s(ji,"This model was contributed by "),Pe=r(ji,"A",{href:!0,rel:!0});var ep=i(Pe);Vt=s(ep,"patrickvonplaten"),ep.forEach(t),he=s(ji,"."),ji.forEach(t),nt=m(o),Y=r(o,"H2",{class:!0});var Vi=i(Y);ke=r(Vi,"A",{id:!0,class:!0,href:!0});var tp=i(ke);ze=r(tp,"SPAN",{});var op=i(ze);y(B.$$.fragment,op),op.forEach(t),tp.forEach(t),Ft=m(Vi),ee=r(Vi,"SPAN",{});var ap=i(ee);Et=s(ap,"Resources"),ap.forEach(t),Vi.forEach(t),rt=m(o),j=r(o,"P",{});var sp=i(j);q=s(sp,"A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with Wav2Vec2. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),sp.forEach(t),It=m(o),y(fe.$$.fragment,o),Nt=m(o),Ne=r(o,"UL",{});var Fi=i(Ne);P=r(Fi,"LI",{});var Ei=i(P);to=s(Ei,"A notebook on how to "),Ye=r(Ei,"A",{href:!0,rel:!0});var np=i(Ye);oo=s(np,"leverage a pretrained Wav2Vec2 model for emotion classification"),np.forEach(t),ao=s(Ei,". \u{1F30E}"),Ei.forEach(t),so=m(Fi),H=r(Fi,"LI",{});var Gt=i(H);pe=r(Gt,"A",{href:!0});var rp=i(pe);no=s(rp,"Wav2Vec2ForCTC"),rp.forEach(t),ro=s(Gt," is supported by this "),se=r(Gt,"A",{href:!0,rel:!0});var ip=i(se);io=s(ip,"example script"),ip.forEach(t),lo=s(Gt," and "),Me=r(Gt,"A",{href:!0,rel:!0});var lp=i(Me);co=s(lp,"notebook"),lp.forEach(t),et=s(Gt,"."),Gt.forEach(t),Fi.forEach(t),Bt=m(o),y(ks.$$.fragment,o),cp=m(o),Be=r(o,"UL",{});var Kt=i(Be);Ts=r(Kt,"LI",{});var em=i(Ts);Th=s(em,"A blog post on "),$s=r(em,"A",{href:!0,rel:!0});var Q0=i($s);$h=s(Q0,"boosting Wav2Vec2 with n-grams in \u{1F917} Transformers"),Q0.forEach(t),xh=s(em,"."),em.forEach(t),Wh=m(Kt),xs=r(Kt,"LI",{});var tm=i(xs);jh=s(tm,"A blog post on how to "),Ws=r(tm,"A",{href:!0,rel:!0});var Y0=i(Ws);Vh=s(Y0,"finetune Wav2Vec2 for English ASR with \u{1F917} Transformers"),Y0.forEach(t),Fh=s(tm,"."),tm.forEach(t),Eh=m(Kt),js=r(Kt,"LI",{});var om=i(js);Ch=s(om,"A blog post on "),Vs=r(om,"A",{href:!0,rel:!0});var ey=i(Vs);qh=s(ey,"finetuning XLS-R for Multi-Lingual ASR with \u{1F917} Transformers"),ey.forEach(t),Ph=s(om,"."),om.forEach(t),zh=m(Kt),Fs=r(Kt,"LI",{});var am=i(Fs);Mh=s(am,"A notebook on how to "),Es=r(am,"A",{href:!0,rel:!0});var ty=i(Es);Ah=s(ty,"create YouTube captions from any video by transcribing audio with Wav2Vec2"),ty.forEach(t),Lh=s(am,". \u{1F30E}"),am.forEach(t),Oh=m(Kt),Rt=r(Kt,"LI",{});var Ci=i(Rt);qi=r(Ci,"A",{href:!0});var oy=i(qi);Dh=s(oy,"Wav2Vec2ForCTC"),oy.forEach(t),Sh=s(Ci," is supported by a notebook on "),Cs=r(Ci,"A",{href:!0,rel:!0});var ay=i(Cs);Ih=s(ay,"how to finetune a speech recognition model in English"),ay.forEach(t),Nh=s(Ci,", and "),qs=r(Ci,"A",{href:!0,rel:!0});var sy=i(qs);Bh=s(sy,"how to finetune a speech recognition model in any language"),sy.forEach(t),Rh=s(Ci,"."),Ci.forEach(t),Kt.forEach(t),dp=m(o),Pi=r(o,"P",{});var ny=i(Pi);Uh=s(ny,"\u{1F680} Deploy"),ny.forEach(t),pp=m(o),zi=r(o,"UL",{});var ry=i(zi);Ps=r(ry,"LI",{});var sm=i(Ps);Hh=s(sm,"A blog post on how to deploy Wav2Vec2 for "),zs=r(sm,"A",{href:!0,rel:!0});var iy=i(zs);Xh=s(iy,"Automatic Speech Recogntion with Hugging Face\u2019s Transformers & Amazon SageMaker"),iy.forEach(t),Gh=s(sm,"."),sm.forEach(t),ry.forEach(t),mp=m(o),po=r(o,"H2",{class:!0});var nm=i(po);Ko=r(nm,"A",{id:!0,class:!0,href:!0});var ly=i(Ko);Gl=r(ly,"SPAN",{});var cy=i(Gl);y(Ms.$$.fragment,cy),cy.forEach(t),ly.forEach(t),Kh=m(nm),Kl=r(nm,"SPAN",{});var dy=i(Kl);Jh=s(dy,"Wav2Vec2Config"),dy.forEach(t),nm.forEach(t),hp=m(o),tt=r(o,"DIV",{class:!0});var os=i(tt);y(As.$$.fragment,os),Zh=m(os),mo=r(os,"P",{});var Wl=i(mo);Qh=s(Wl,"This is the configuration class to store the configuration of a "),Mi=r(Wl,"A",{href:!0});var py=i(Mi);Yh=s(py,"Wav2Vec2Model"),py.forEach(t),ef=s(Wl,`. It is used to instantiate an
Wav2Vec2 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Wav2Vec2
`),Ls=r(Wl,"A",{href:!0,rel:!0});var my=i(Ls);tf=s(my,"facebook/wav2vec2-base-960h"),my.forEach(t),of=s(Wl," architecture."),Wl.forEach(t),af=m(os),ho=r(os,"P",{});var jl=i(ho);sf=s(jl,"Configuration objects inherit from "),Ai=r(jl,"A",{href:!0});var hy=i(Ai);nf=s(hy,"PretrainedConfig"),hy.forEach(t),rf=s(jl,` and can be used to control the model outputs. Read the
documentation from `),Li=r(jl,"A",{href:!0});var fy=i(Li);lf=s(fy,"PretrainedConfig"),fy.forEach(t),cf=s(jl," for more information."),jl.forEach(t),df=m(os),y(Jo.$$.fragment,os),os.forEach(t),fp=m(o),fo=r(o,"H2",{class:!0});var rm=i(fo);Zo=r(rm,"A",{id:!0,class:!0,href:!0});var uy=i(Zo);Jl=r(uy,"SPAN",{});var gy=i(Jl);y(Os.$$.fragment,gy),gy.forEach(t),uy.forEach(t),pf=m(rm),Zl=r(rm,"SPAN",{});var _y=i(Zl);mf=s(_y,"Wav2Vec2CTCTokenizer"),_y.forEach(t),rm.forEach(t),up=m(o),ne=r(o,"DIV",{class:!0});var Xe=i(ne);y(Ds.$$.fragment,Xe),hf=m(Xe),Ql=r(Xe,"P",{});var vy=i(Ql);ff=s(vy,"Constructs a Wav2Vec2CTC tokenizer."),vy.forEach(t),uf=m(Xe),Ss=r(Xe,"P",{});var im=i(Ss);gf=s(im,"This tokenizer inherits from "),Oi=r(im,"A",{href:!0});var by=i(Oi);_f=s(by,"PreTrainedTokenizer"),by.forEach(t),vf=s(im,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),im.forEach(t),bf=m(Xe),Qo=r(Xe,"DIV",{class:!0});var lm=i(Qo);y(Is.$$.fragment,lm),wf=m(lm),Yl=r(lm,"P",{});var wy=i(Yl);yf=s(wy,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),wy.forEach(t),lm.forEach(t),kf=m(Xe),Di=r(Xe,"DIV",{class:!0});var yy=i(Di);y(Ns.$$.fragment,yy),yy.forEach(t),Tf=m(Xe),it=r(Xe,"DIV",{class:!0});var as=i(it);y(Bs.$$.fragment,as),$f=m(as),ec=r(as,"P",{});var ky=i(ec);xf=s(ky,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),ky.forEach(t),Wf=m(as),Rs=r(as,"P",{});var cm=i(Rs);jf=s(cm,"Similar to doing "),tc=r(cm,"CODE",{});var Ty=i(tc);Vf=s(Ty,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Ty.forEach(t),Ff=s(cm,"."),cm.forEach(t),Ef=m(as),y(Yo.$$.fragment,as),as.forEach(t),Cf=m(Xe),ea=r(Xe,"DIV",{class:!0});var dm=i(ea);y(Us.$$.fragment,dm),qf=m(dm),oc=r(dm,"P",{});var $y=i(oc);Pf=s($y,"Convert a list of lists of token ids into a list of strings by calling decode."),$y.forEach(t),dm.forEach(t),Xe.forEach(t),gp=m(o),uo=r(o,"H2",{class:!0});var pm=i(uo);ta=r(pm,"A",{id:!0,class:!0,href:!0});var xy=i(ta);ac=r(xy,"SPAN",{});var Wy=i(ac);y(Hs.$$.fragment,Wy),Wy.forEach(t),xy.forEach(t),zf=m(pm),sc=r(pm,"SPAN",{});var jy=i(sc);Mf=s(jy,"Wav2Vec2FeatureExtractor"),jy.forEach(t),pm.forEach(t),_p=m(o),ot=r(o,"DIV",{class:!0});var ss=i(ot);y(Xs.$$.fragment,ss),Af=m(ss),nc=r(ss,"P",{});var Vy=i(nc);Lf=s(Vy,"Constructs a Wav2Vec2 feature extractor."),Vy.forEach(t),Of=m(ss),Gs=r(ss,"P",{});var mm=i(Gs);Df=s(mm,"This feature extractor inherits from "),Si=r(mm,"A",{href:!0});var Fy=i(Si);Sf=s(Fy,"SequenceFeatureExtractor"),Fy.forEach(t),If=s(mm,` which contains
most of the main methods. Users should refer to this superclass for more information regarding those methods.`),mm.forEach(t),Nf=m(ss),oa=r(ss,"DIV",{class:!0});var hm=i(oa);y(Ks.$$.fragment,hm),Bf=m(hm),rc=r(hm,"P",{});var Ey=i(rc);Rf=s(Ey,"Main method to featurize and prepare for the model one or several sequence(s)."),Ey.forEach(t),hm.forEach(t),ss.forEach(t),vp=m(o),go=r(o,"H2",{class:!0});var fm=i(go);aa=r(fm,"A",{id:!0,class:!0,href:!0});var Cy=i(aa);ic=r(Cy,"SPAN",{});var qy=i(ic);y(Js.$$.fragment,qy),qy.forEach(t),Cy.forEach(t),Uf=m(fm),lc=r(fm,"SPAN",{});var Py=i(lc);Hf=s(Py,"Wav2Vec2Processor"),Py.forEach(t),fm.forEach(t),bp=m(o),G=r(o,"DIV",{class:!0});var me=i(G);y(Zs.$$.fragment,me),Xf=m(me),cc=r(me,"P",{});var zy=i(cc);Gf=s(zy,`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor and a Wav2Vec2 CTC tokenizer into a single
processor.`),zy.forEach(t),Kf=m(me),Re=r(me,"P",{});var St=i(Re);Ii=r(St,"A",{href:!0});var My=i(Ii);Jf=s(My,"Wav2Vec2Processor"),My.forEach(t),Zf=s(St," offers all the functionalities of "),Ni=r(St,"A",{href:!0});var Ay=i(Ni);Qf=s(Ay,"Wav2Vec2FeatureExtractor"),Ay.forEach(t),Yf=s(St," and "),Bi=r(St,"A",{href:!0});var Ly=i(Bi);eu=s(Ly,"PreTrainedTokenizer"),Ly.forEach(t),tu=s(St,`.
See the docstring of `),Qs=r(St,"A",{href:!0});var X0=i(Qs);dc=r(X0,"STRONG",{});var Oy=i(dc);ou=s(Oy,"call"),Oy.forEach(t),au=s(X0,"()"),X0.forEach(t),su=s(St," and "),Ri=r(St,"A",{href:!0});var Dy=i(Ri);nu=s(Dy,"decode()"),Dy.forEach(t),ru=s(St," for more information."),St.forEach(t),iu=m(me),sa=r(me,"DIV",{class:!0});var um=i(sa);y(Ys.$$.fragment,um),lu=m(um),Ct=r(um,"P",{});var ns=i(Ct);cu=s(ns,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),en=r(ns,"A",{href:!0});var G0=i(en);pc=r(G0,"STRONG",{});var Sy=i(pc);du=s(Sy,"call"),Sy.forEach(t),pu=s(G0,"()"),G0.forEach(t),mu=s(ns,` and returns its output. If used in the context
`),mc=r(ns,"CODE",{});var Iy=i(mc);hu=s(Iy,"as_target_processor()"),Iy.forEach(t),fu=s(ns,` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),tn=r(ns,"A",{href:!0});var K0=i(tn);hc=r(K0,"STRONG",{});var Ny=i(hc);uu=s(Ny,"call"),Ny.forEach(t),gu=s(K0,"()"),K0.forEach(t),_u=s(ns,". Please refer to the docstring of the above two methods for more information."),ns.forEach(t),um.forEach(t),vu=m(me),na=r(me,"DIV",{class:!0});var gm=i(na);y(on.$$.fragment,gm),bu=m(gm),qt=r(gm,"P",{});var rs=i(qt);wu=s(rs,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),Ui=r(rs,"A",{href:!0});var By=i(Ui);yu=s(By,"pad()"),By.forEach(t),ku=s(rs,` and returns its output. If used in the context
`),fc=r(rs,"CODE",{});var Ry=i(fc);Tu=s(Ry,"as_target_processor()"),Ry.forEach(t),$u=s(rs,` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),Hi=r(rs,"A",{href:!0});var Uy=i(Hi);xu=s(Uy,"pad()"),Uy.forEach(t),Wu=s(rs,". Please refer to the docstring of the above two methods for more information."),rs.forEach(t),gm.forEach(t),ju=m(me),Xi=r(me,"DIV",{class:!0});var Hy=i(Xi);y(an.$$.fragment,Hy),Hy.forEach(t),Vu=m(me),Ut=r(me,"DIV",{class:!0});var Vl=i(Ut);y(sn.$$.fragment,Vl),Fu=m(Vl),nn=r(Vl,"P",{});var _m=i(nn);Eu=s(_m,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Gi=r(_m,"A",{href:!0});var Xy=i(Gi);Cu=s(Xy,"from_pretrained()"),Xy.forEach(t),qu=s(_m," method."),_m.forEach(t),Pu=m(Vl),y(ra.$$.fragment,Vl),Vl.forEach(t),zu=m(me),ia=r(me,"DIV",{class:!0});var vm=i(ia);y(rn.$$.fragment,vm),Mu=m(vm),ln=r(vm,"P",{});var bm=i(ln);Au=s(bm,"This method forwards all its arguments to PreTrainedTokenizer\u2019s "),Ki=r(bm,"A",{href:!0});var Gy=i(Ki);Lu=s(Gy,"batch_decode()"),Gy.forEach(t),Ou=s(bm,`. Please
refer to the docstring of this method for more information.`),bm.forEach(t),vm.forEach(t),Du=m(me),la=r(me,"DIV",{class:!0});var wm=i(la);y(cn.$$.fragment,wm),Su=m(wm),dn=r(wm,"P",{});var ym=i(dn);Iu=s(ym,"This method forwards all its arguments to PreTrainedTokenizer\u2019s "),Ji=r(ym,"A",{href:!0});var Ky=i(Ji);Nu=s(Ky,"decode()"),Ky.forEach(t),Bu=s(ym,`. Please refer
to the docstring of this method for more information.`),ym.forEach(t),wm.forEach(t),me.forEach(t),wp=m(o),_o=r(o,"H2",{class:!0});var km=i(_o);ca=r(km,"A",{id:!0,class:!0,href:!0});var Jy=i(ca);uc=r(Jy,"SPAN",{});var Zy=i(uc);y(pn.$$.fragment,Zy),Zy.forEach(t),Jy.forEach(t),Ru=m(km),gc=r(km,"SPAN",{});var Qy=i(gc);Uu=s(Qy,"Wav2Vec2ProcessorWithLM"),Qy.forEach(t),km.forEach(t),yp=m(o),te=r(o,"DIV",{class:!0});var $e=i(te);y(mn.$$.fragment,$e),Hu=m($e),_c=r($e,"P",{});var Yy=i(_c);Xu=s(Yy,`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor, a Wav2Vec2 CTC tokenizer and a decoder
with language model support into a single processor for language model boosted speech recognition decoding.`),Yy.forEach(t),Gu=m($e),da=r($e,"DIV",{class:!0});var Tm=i(da);y(hn.$$.fragment,Tm),Ku=m(Tm),Pt=r(Tm,"P",{});var is=i(Pt);Ju=s(is,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),fn=r(is,"A",{href:!0});var J0=i(fn);vc=r(J0,"STRONG",{});var ek=i(vc);Zu=s(ek,"call"),ek.forEach(t),Qu=s(J0,"()"),J0.forEach(t),Yu=s(is,` and returns its output. If used in the context
`),bc=r(is,"CODE",{});var tk=i(bc);eg=s(tk,"as_target_processor()"),tk.forEach(t),tg=s(is,` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),un=r(is,"A",{href:!0});var Z0=i(un);wc=r(Z0,"STRONG",{});var ok=i(wc);og=s(ok,"call"),ok.forEach(t),ag=s(Z0,"()"),Z0.forEach(t),sg=s(is,`. Please refer to the docstring of the above two
methods for more information.`),is.forEach(t),Tm.forEach(t),ng=m($e),pa=r($e,"DIV",{class:!0});var $m=i(pa);y(gn.$$.fragment,$m),rg=m($m),zt=r($m,"P",{});var ls=i(zt);ig=s(ls,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),Zi=r(ls,"A",{href:!0});var ak=i(Zi);lg=s(ak,"pad()"),ak.forEach(t),cg=s(ls,` and returns its output. If used in the context
`),yc=r(ls,"CODE",{});var sk=i(yc);dg=s(sk,"as_target_processor()"),sk.forEach(t),pg=s(ls,` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),Qi=r(ls,"A",{href:!0});var nk=i(Qi);mg=s(nk,"pad()"),nk.forEach(t),hg=s(ls,`. Please refer to the docstring of the above two methods
for more information.`),ls.forEach(t),$m.forEach(t),fg=m($e),Ht=r($e,"DIV",{class:!0});var Fl=i(Ht);y(_n.$$.fragment,Fl),ug=m(Fl),vn=r(Fl,"P",{});var xm=i(vn);gg=s(xm,"Instantiate a "),Yi=r(xm,"A",{href:!0});var rk=i(Yi);_g=s(rk,"Wav2Vec2ProcessorWithLM"),rk.forEach(t),vg=s(xm," from a pretrained Wav2Vec2 processor."),xm.forEach(t),bg=m(Fl),y(ma.$$.fragment,Fl),Fl.forEach(t),wg=m($e),el=r($e,"DIV",{class:!0});var ik=i(el);y(bn.$$.fragment,ik),ik.forEach(t),yg=m($e),lt=r($e,"DIV",{class:!0});var cs=i(lt);y(wn.$$.fragment,cs),kg=m(cs),kc=r(cs,"P",{});var lk=i(kc);Tg=s(lk,"Batch decode output logits to audio transcription with language model support."),lk.forEach(t),$g=m(cs),y(ha.$$.fragment,cs),xg=m(cs),yn=r(cs,"P",{});var Wm=i(yn);Wg=s(Wm,`Example:
See `),tl=r(Wm,"A",{href:!0});var ck=i(tl);jg=s(ck,"Decoding multiple audios"),ck.forEach(t),Vg=s(Wm,"."),Wm.forEach(t),cs.forEach(t),Fg=m($e),Xt=r($e,"DIV",{class:!0});var El=i(Xt);y(kn.$$.fragment,El),Eg=m(El),Tc=r(El,"P",{});var dk=i(Tc);Cg=s(dk,"Decode output logits to audio transcription with language model support."),dk.forEach(t),qg=m(El),y(fa.$$.fragment,El),El.forEach(t),$e.forEach(t),kp=m(o),vo=r(o,"H3",{class:!0});var jm=i(vo);ua=r(jm,"A",{id:!0,class:!0,href:!0});var pk=i(ua);$c=r(pk,"SPAN",{});var mk=i($c);y(Tn.$$.fragment,mk),mk.forEach(t),pk.forEach(t),Pg=m(jm),xc=r(jm,"SPAN",{});var hk=i(xc);zg=s(hk,"Decoding multiple audios"),hk.forEach(t),jm.forEach(t),Tp=m(o),Te=r(o,"P",{});var vt=i(Te);Mg=s(vt,"If you are planning to decode multiple batches of audios, you should consider using "),ol=r(vt,"A",{href:!0});var fk=i(ol);Ag=s(fk,"batch_decode()"),fk.forEach(t),Lg=s(vt," and passing an instantiated "),Wc=r(vt,"CODE",{});var uk=i(Wc);Og=s(uk,"multiprocessing.Pool"),uk.forEach(t),Dg=s(vt,`.
Otherwise, `),al=r(vt,"A",{href:!0});var gk=i(al);Sg=s(gk,"batch_decode()"),gk.forEach(t),Ig=s(vt," performance will be slower than calling "),sl=r(vt,"A",{href:!0});var _k=i(sl);Ng=s(_k,"decode()"),_k.forEach(t),Bg=s(vt," for each audio individually, as it internally instantiates a new "),jc=r(vt,"CODE",{});var vk=i(jc);Rg=s(vk,"Pool"),vk.forEach(t),Ug=s(vt," for every call. See the example below:"),vt.forEach(t),$p=m(o),y($n.$$.fragment,o),xp=m(o),bo=r(o,"H2",{class:!0});var Vm=i(bo);ga=r(Vm,"A",{id:!0,class:!0,href:!0});var bk=i(ga);Vc=r(bk,"SPAN",{});var wk=i(Vc);y(xn.$$.fragment,wk),wk.forEach(t),bk.forEach(t),Hg=m(Vm),Fc=r(Vm,"SPAN",{});var yk=i(Fc);Xg=s(yk,"Wav2Vec2 specific outputs"),yk.forEach(t),Vm.forEach(t),Wp=m(o),wo=r(o,"DIV",{class:!0});var Fm=i(wo);y(Wn.$$.fragment,Fm),Gg=m(Fm),jn=r(Fm,"P",{});var Em=i(jn);Kg=s(Em,"Output type of "),Ec=r(Em,"CODE",{});var kk=i(Ec);Jg=s(kk,"Wav2Vec2DecoderWithLM"),kk.forEach(t),Zg=s(Em,", with transcription."),Em.forEach(t),Fm.forEach(t),jp=m(o),yo=r(o,"DIV",{class:!0});var Cm=i(yo);y(Vn.$$.fragment,Cm),Qg=m(Cm),Cc=r(Cm,"P",{});var Tk=i(Cc);Yg=s(Tk,"Base class for models that have been trained with the Wav2Vec2 loss objective."),Tk.forEach(t),Cm.forEach(t),Vp=m(o),ko=r(o,"DIV",{class:!0});var qm=i(ko);y(Fn.$$.fragment,qm),e_=m(qm),En=r(qm,"P",{});var Pm=i(En);t_=s(Pm,"Output type of "),nl=r(Pm,"A",{href:!0});var $k=i(nl);o_=s($k,"Wav2Vec2ForPreTraining"),$k.forEach(t),a_=s(Pm,", with potential hidden states and attentions."),Pm.forEach(t),qm.forEach(t),Fp=m(o),Mt=r(o,"DIV",{class:!0});var Cl=i(Mt);y(Cn.$$.fragment,Cl),s_=m(Cl),qn=r(Cl,"P",{});var zm=i(qn);n_=s(zm,"Output type of "),qc=r(zm,"CODE",{});var xk=i(qc);r_=s(xk,"FlaxWav2Vec2BaseModelOutput"),xk.forEach(t),i_=s(zm,", with potential hidden states and attentions."),zm.forEach(t),l_=m(Cl),_a=r(Cl,"DIV",{class:!0});var Mm=i(_a);y(Pn.$$.fragment,Mm),c_=m(Mm),Pc=r(Mm,"P",{});var Wk=i(Pc);d_=s(Wk,"\u201CReturns a new object replacing the specified fields with new values."),Wk.forEach(t),Mm.forEach(t),Cl.forEach(t),Ep=m(o),At=r(o,"DIV",{class:!0});var ql=i(At);y(zn.$$.fragment,ql),p_=m(ql),Mn=r(ql,"P",{});var Am=i(Mn);m_=s(Am,"Output type of "),zc=r(Am,"CODE",{});var jk=i(zc);h_=s(jk,"FlaxWav2Vec2ForPreTrainingOutput"),jk.forEach(t),f_=s(Am,", with potential hidden states and attentions."),Am.forEach(t),u_=m(ql),va=r(ql,"DIV",{class:!0});var Lm=i(va);y(An.$$.fragment,Lm),g_=m(Lm),Mc=r(Lm,"P",{});var Vk=i(Mc);__=s(Vk,"\u201CReturns a new object replacing the specified fields with new values."),Vk.forEach(t),Lm.forEach(t),ql.forEach(t),Cp=m(o),To=r(o,"H2",{class:!0});var Om=i(To);ba=r(Om,"A",{id:!0,class:!0,href:!0});var Fk=i(ba);Ac=r(Fk,"SPAN",{});var Ek=i(Ac);y(Ln.$$.fragment,Ek),Ek.forEach(t),Fk.forEach(t),v_=m(Om),Lc=r(Om,"SPAN",{});var Ck=i(Lc);b_=s(Ck,"Wav2Vec2Model"),Ck.forEach(t),Om.forEach(t),qp=m(o),Ae=r(o,"DIV",{class:!0});var Jt=i(Ae);y(On.$$.fragment,Jt),w_=m(Jt),Dn=r(Jt,"P",{});var Dm=i(Dn);y_=s(Dm,`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),Sn=r(Dm,"A",{href:!0,rel:!0});var qk=i(Sn);k_=s(qk,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),qk.forEach(t),T_=s(Dm,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Dm.forEach(t),$_=m(Jt),In=r(Jt,"P",{});var Sm=i(In);x_=s(Sm,"This model inherits from "),rl=r(Sm,"A",{href:!0});var Pk=i(rl);W_=s(Pk,"PreTrainedModel"),Pk.forEach(t),j_=s(Sm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Sm.forEach(t),V_=m(Jt),Nn=r(Jt,"P",{});var Im=i(Nn);F_=s(Im,"This model is a PyTorch "),Bn=r(Im,"A",{href:!0,rel:!0});var zk=i(Bn);E_=s(zk,"torch.nn.Module"),zk.forEach(t),C_=s(Im,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Im.forEach(t),q_=m(Jt),ct=r(Jt,"DIV",{class:!0});var ds=i(ct);y(Rn.$$.fragment,ds),P_=m(ds),$o=r(ds,"P",{});var Pl=i($o);z_=s(Pl,"The "),il=r(Pl,"A",{href:!0});var Mk=i(il);M_=s(Mk,"Wav2Vec2Model"),Mk.forEach(t),A_=s(Pl," forward method, overrides the "),Oc=r(Pl,"CODE",{});var Ak=i(Oc);L_=s(Ak,"__call__"),Ak.forEach(t),O_=s(Pl," special method."),Pl.forEach(t),D_=m(ds),y(wa.$$.fragment,ds),S_=m(ds),y(ya.$$.fragment,ds),ds.forEach(t),Jt.forEach(t),Pp=m(o),xo=r(o,"H2",{class:!0});var Nm=i(xo);ka=r(Nm,"A",{id:!0,class:!0,href:!0});var Lk=i(ka);Dc=r(Lk,"SPAN",{});var Ok=i(Dc);y(Un.$$.fragment,Ok),Ok.forEach(t),Lk.forEach(t),I_=m(Nm),Sc=r(Nm,"SPAN",{});var Dk=i(Sc);N_=s(Dk,"Wav2Vec2ForCTC"),Dk.forEach(t),Nm.forEach(t),zp=m(o),Le=r(o,"DIV",{class:!0});var Zt=i(Le);y(Hn.$$.fragment,Zt),B_=m(Zt),Wo=r(Zt,"P",{});var zl=i(Wo);R_=s(zl,"Wav2Vec2 Model with a "),Ic=r(zl,"CODE",{});var Sk=i(Ic);U_=s(Sk,"language modeling"),Sk.forEach(t),H_=s(zl,` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),Xn=r(zl,"A",{href:!0,rel:!0});var Ik=i(Xn);X_=s(Ik,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Ik.forEach(t),G_=s(zl,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),zl.forEach(t),K_=m(Zt),Gn=r(Zt,"P",{});var Bm=i(Gn);J_=s(Bm,"This model inherits from "),ll=r(Bm,"A",{href:!0});var Nk=i(ll);Z_=s(Nk,"PreTrainedModel"),Nk.forEach(t),Q_=s(Bm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Bm.forEach(t),Y_=m(Zt),Kn=r(Zt,"P",{});var Rm=i(Kn);ev=s(Rm,"This model is a PyTorch "),Jn=r(Rm,"A",{href:!0,rel:!0});var Bk=i(Jn);tv=s(Bk,"torch.nn.Module"),Bk.forEach(t),ov=s(Rm,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Rm.forEach(t),av=m(Zt),Ue=r(Zt,"DIV",{class:!0});var Qt=i(Ue);y(Zn.$$.fragment,Qt),sv=m(Qt),jo=r(Qt,"P",{});var Ml=i(jo);nv=s(Ml,"The "),cl=r(Ml,"A",{href:!0});var Rk=i(cl);rv=s(Rk,"Wav2Vec2ForCTC"),Rk.forEach(t),iv=s(Ml," forward method, overrides the "),Nc=r(Ml,"CODE",{});var Uk=i(Nc);lv=s(Uk,"__call__"),Uk.forEach(t),cv=s(Ml," special method."),Ml.forEach(t),dv=m(Qt),y(Ta.$$.fragment,Qt),pv=m(Qt),y($a.$$.fragment,Qt),mv=m(Qt),y(xa.$$.fragment,Qt),Qt.forEach(t),Zt.forEach(t),Mp=m(o),Vo=r(o,"H2",{class:!0});var Um=i(Vo);Wa=r(Um,"A",{id:!0,class:!0,href:!0});var Hk=i(Wa);Bc=r(Hk,"SPAN",{});var Xk=i(Bc);y(Qn.$$.fragment,Xk),Xk.forEach(t),Hk.forEach(t),hv=m(Um),Rc=r(Um,"SPAN",{});var Gk=i(Rc);fv=s(Gk,"Wav2Vec2ForSequenceClassification"),Gk.forEach(t),Um.forEach(t),Ap=m(o),ue=r(o,"DIV",{class:!0});var bt=i(ue);y(Yn.$$.fragment,bt),uv=m(bt),Uc=r(bt,"P",{});var Kk=i(Uc);gv=s(Kk,`Wav2Vec2 Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),Kk.forEach(t),_v=m(bt),er=r(bt,"P",{});var Hm=i(er);vv=s(Hm,"Wav2Vec2 was proposed in "),tr=r(Hm,"A",{href:!0,rel:!0});var Jk=i(tr);bv=s(Jk,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Jk.forEach(t),wv=s(Hm,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Hm.forEach(t),yv=m(bt),or=r(bt,"P",{});var Xm=i(or);kv=s(Xm,"This model inherits from "),dl=r(Xm,"A",{href:!0});var Zk=i(dl);Tv=s(Zk,"PreTrainedModel"),Zk.forEach(t),$v=s(Xm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Xm.forEach(t),xv=m(bt),ar=r(bt,"P",{});var Gm=i(ar);Wv=s(Gm,"This model is a PyTorch "),sr=r(Gm,"A",{href:!0,rel:!0});var Qk=i(sr);jv=s(Qk,"torch.nn.Module"),Qk.forEach(t),Vv=s(Gm,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gm.forEach(t),Fv=m(bt),He=r(bt,"DIV",{class:!0});var Yt=i(He);y(nr.$$.fragment,Yt),Ev=m(Yt),Fo=r(Yt,"P",{});var Al=i(Fo);Cv=s(Al,"The "),pl=r(Al,"A",{href:!0});var Yk=i(pl);qv=s(Yk,"Wav2Vec2ForSequenceClassification"),Yk.forEach(t),Pv=s(Al," forward method, overrides the "),Hc=r(Al,"CODE",{});var e1=i(Hc);zv=s(e1,"__call__"),e1.forEach(t),Mv=s(Al," special method."),Al.forEach(t),Av=m(Yt),y(ja.$$.fragment,Yt),Lv=m(Yt),y(Va.$$.fragment,Yt),Ov=m(Yt),y(Fa.$$.fragment,Yt),Yt.forEach(t),bt.forEach(t),Lp=m(o),Eo=r(o,"H2",{class:!0});var Km=i(Eo);Ea=r(Km,"A",{id:!0,class:!0,href:!0});var t1=i(Ea);Xc=r(t1,"SPAN",{});var o1=i(Xc);y(rr.$$.fragment,o1),o1.forEach(t),t1.forEach(t),Dv=m(Km),Gc=r(Km,"SPAN",{});var a1=i(Gc);Sv=s(a1,"Wav2Vec2ForAudioFrameClassification"),a1.forEach(t),Km.forEach(t),Op=m(o),ge=r(o,"DIV",{class:!0});var wt=i(ge);y(ir.$$.fragment,wt),Iv=m(wt),Kc=r(wt,"P",{});var s1=i(Kc);Nv=s(s1,"Wav2Vec2 Model with a frame classification head on top for tasks like Speaker Diarization."),s1.forEach(t),Bv=m(wt),lr=r(wt,"P",{});var Jm=i(lr);Rv=s(Jm,"Wav2Vec2 was proposed in "),cr=r(Jm,"A",{href:!0,rel:!0});var n1=i(cr);Uv=s(n1,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),n1.forEach(t),Hv=s(Jm,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Jm.forEach(t),Xv=m(wt),dr=r(wt,"P",{});var Zm=i(dr);Gv=s(Zm,"This model inherits from "),ml=r(Zm,"A",{href:!0});var r1=i(ml);Kv=s(r1,"PreTrainedModel"),r1.forEach(t),Jv=s(Zm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Zm.forEach(t),Zv=m(wt),pr=r(wt,"P",{});var Qm=i(pr);Qv=s(Qm,"This model is a PyTorch "),mr=r(Qm,"A",{href:!0,rel:!0});var i1=i(mr);Yv=s(i1,"torch.nn.Module"),i1.forEach(t),e2=s(Qm,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qm.forEach(t),t2=m(wt),dt=r(wt,"DIV",{class:!0});var ps=i(dt);y(hr.$$.fragment,ps),o2=m(ps),Co=r(ps,"P",{});var Ll=i(Co);a2=s(Ll,"The "),hl=r(Ll,"A",{href:!0});var l1=i(hl);s2=s(l1,"Wav2Vec2ForAudioFrameClassification"),l1.forEach(t),n2=s(Ll," forward method, overrides the "),Jc=r(Ll,"CODE",{});var c1=i(Jc);r2=s(c1,"__call__"),c1.forEach(t),i2=s(Ll," special method."),Ll.forEach(t),l2=m(ps),y(Ca.$$.fragment,ps),c2=m(ps),y(qa.$$.fragment,ps),ps.forEach(t),wt.forEach(t),Dp=m(o),qo=r(o,"H2",{class:!0});var Ym=i(qo);Pa=r(Ym,"A",{id:!0,class:!0,href:!0});var d1=i(Pa);Zc=r(d1,"SPAN",{});var p1=i(Zc);y(fr.$$.fragment,p1),p1.forEach(t),d1.forEach(t),d2=m(Ym),Qc=r(Ym,"SPAN",{});var m1=i(Qc);p2=s(m1,"Wav2Vec2ForXVector"),m1.forEach(t),Ym.forEach(t),Sp=m(o),_e=r(o,"DIV",{class:!0});var yt=i(_e);y(ur.$$.fragment,yt),m2=m(yt),Yc=r(yt,"P",{});var h1=i(Yc);h2=s(h1,"Wav2Vec2 Model with an XVector feature extraction head on top for tasks like Speaker Verification."),h1.forEach(t),f2=m(yt),gr=r(yt,"P",{});var eh=i(gr);u2=s(eh,"Wav2Vec2 was proposed in "),_r=r(eh,"A",{href:!0,rel:!0});var f1=i(_r);g2=s(f1,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),f1.forEach(t),_2=s(eh,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),eh.forEach(t),v2=m(yt),vr=r(yt,"P",{});var th=i(vr);b2=s(th,"This model inherits from "),fl=r(th,"A",{href:!0});var u1=i(fl);w2=s(u1,"PreTrainedModel"),u1.forEach(t),y2=s(th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),th.forEach(t),k2=m(yt),br=r(yt,"P",{});var oh=i(br);T2=s(oh,"This model is a PyTorch "),wr=r(oh,"A",{href:!0,rel:!0});var g1=i(wr);$2=s(g1,"torch.nn.Module"),g1.forEach(t),x2=s(oh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),oh.forEach(t),W2=m(yt),pt=r(yt,"DIV",{class:!0});var ms=i(pt);y(yr.$$.fragment,ms),j2=m(ms),Po=r(ms,"P",{});var Ol=i(Po);V2=s(Ol,"The "),ul=r(Ol,"A",{href:!0});var _1=i(ul);F2=s(_1,"Wav2Vec2ForXVector"),_1.forEach(t),E2=s(Ol," forward method, overrides the "),ed=r(Ol,"CODE",{});var v1=i(ed);C2=s(v1,"__call__"),v1.forEach(t),q2=s(Ol," special method."),Ol.forEach(t),P2=m(ms),y(za.$$.fragment,ms),z2=m(ms),y(Ma.$$.fragment,ms),ms.forEach(t),yt.forEach(t),Ip=m(o),zo=r(o,"H2",{class:!0});var ah=i(zo);Aa=r(ah,"A",{id:!0,class:!0,href:!0});var b1=i(Aa);td=r(b1,"SPAN",{});var w1=i(td);y(kr.$$.fragment,w1),w1.forEach(t),b1.forEach(t),M2=m(ah),od=r(ah,"SPAN",{});var y1=i(od);A2=s(y1,"Wav2Vec2ForPreTraining"),y1.forEach(t),ah.forEach(t),Np=m(o),Oe=r(o,"DIV",{class:!0});var eo=i(Oe);y(Tr.$$.fragment,eo),L2=m(eo),Mo=r(eo,"P",{});var Dl=i(Mo);O2=s(Dl,"Wav2Vec2 Model with a quantizer and "),ad=r(Dl,"CODE",{});var k1=i(ad);D2=s(k1,"VQ"),k1.forEach(t),S2=s(Dl,` head on top.
Wav2Vec2 was proposed in `),$r=r(Dl,"A",{href:!0,rel:!0});var T1=i($r);I2=s(T1,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),T1.forEach(t),N2=s(Dl,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Dl.forEach(t),B2=m(eo),xr=r(eo,"P",{});var sh=i(xr);R2=s(sh,"This model inherits from "),gl=r(sh,"A",{href:!0});var $1=i(gl);U2=s($1,"PreTrainedModel"),$1.forEach(t),H2=s(sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),sh.forEach(t),X2=m(eo),Wr=r(eo,"P",{});var nh=i(Wr);G2=s(nh,"This model is a PyTorch "),jr=r(nh,"A",{href:!0,rel:!0});var x1=i(jr);K2=s(x1,"torch.nn.Module"),x1.forEach(t),J2=s(nh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),nh.forEach(t),Z2=m(eo),mt=r(eo,"DIV",{class:!0});var hs=i(mt);y(Vr.$$.fragment,hs),Q2=m(hs),Ao=r(hs,"P",{});var Sl=i(Ao);Y2=s(Sl,"The "),_l=r(Sl,"A",{href:!0});var W1=i(_l);eb=s(W1,"Wav2Vec2ForPreTraining"),W1.forEach(t),tb=s(Sl," forward method, overrides the "),sd=r(Sl,"CODE",{});var j1=i(sd);ob=s(j1,"__call__"),j1.forEach(t),ab=s(Sl," special method."),Sl.forEach(t),sb=m(hs),y(La.$$.fragment,hs),nb=m(hs),y(Oa.$$.fragment,hs),hs.forEach(t),eo.forEach(t),Bp=m(o),Lo=r(o,"H2",{class:!0});var rh=i(Lo);Da=r(rh,"A",{id:!0,class:!0,href:!0});var V1=i(Da);nd=r(V1,"SPAN",{});var F1=i(nd);y(Fr.$$.fragment,F1),F1.forEach(t),V1.forEach(t),rb=m(rh),rd=r(rh,"SPAN",{});var E1=i(rd);ib=s(E1,"TFWav2Vec2Model"),E1.forEach(t),rh.forEach(t),Rp=m(o),ve=r(o,"DIV",{class:!0});var kt=i(ve);y(Er.$$.fragment,kt),lb=m(kt),id=r(kt,"P",{});var C1=i(id);cb=s(C1,"The bare TFWav2Vec2 Model transformer outputing raw hidden-states without any specific head on top."),C1.forEach(t),db=m(kt),Cr=r(kt,"P",{});var ih=i(Cr);pb=s(ih,"This model inherits from "),vl=r(ih,"A",{href:!0});var q1=i(vl);mb=s(q1,"TFPreTrainedModel"),q1.forEach(t),hb=s(ih,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ih.forEach(t),fb=m(kt),qr=r(kt,"P",{});var lh=i(qr);ub=s(lh,"This model is also a "),Pr=r(lh,"A",{href:!0,rel:!0});var P1=i(Pr);gb=s(P1,"tf.keras.Model"),P1.forEach(t),_b=s(lh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lh.forEach(t),vb=m(kt),y(Sa.$$.fragment,kt),bb=m(kt),ht=r(kt,"DIV",{class:!0});var fs=i(ht);y(zr.$$.fragment,fs),wb=m(fs),Oo=r(fs,"P",{});var Il=i(Oo);yb=s(Il,"The "),bl=r(Il,"A",{href:!0});var z1=i(bl);kb=s(z1,"TFWav2Vec2Model"),z1.forEach(t),Tb=s(Il," forward method, overrides the "),ld=r(Il,"CODE",{});var M1=i(ld);$b=s(M1,"__call__"),M1.forEach(t),xb=s(Il," special method."),Il.forEach(t),Wb=m(fs),y(Ia.$$.fragment,fs),jb=m(fs),y(Na.$$.fragment,fs),fs.forEach(t),kt.forEach(t),Up=m(o),Do=r(o,"H2",{class:!0});var ch=i(Do);Ba=r(ch,"A",{id:!0,class:!0,href:!0});var A1=i(Ba);cd=r(A1,"SPAN",{});var L1=i(cd);y(Mr.$$.fragment,L1),L1.forEach(t),A1.forEach(t),Vb=m(ch),dd=r(ch,"SPAN",{});var O1=i(dd);Fb=s(O1,"TFWav2Vec2ForCTC"),O1.forEach(t),ch.forEach(t),Hp=m(o),be=r(o,"DIV",{class:!0});var Tt=i(be);y(Ar.$$.fragment,Tt),Eb=m(Tt),Lr=r(Tt,"P",{});var dh=i(Lr);Cb=s(dh,"TFWav2Vec2 Model with a "),pd=r(dh,"CODE",{});var D1=i(pd);qb=s(D1,"language modeling"),D1.forEach(t),Pb=s(dh," head on top for Connectionist Temporal Classification (CTC)."),dh.forEach(t),zb=m(Tt),Or=r(Tt,"P",{});var ph=i(Or);Mb=s(ph,"This model inherits from "),wl=r(ph,"A",{href:!0});var S1=i(wl);Ab=s(S1,"TFPreTrainedModel"),S1.forEach(t),Lb=s(ph,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ph.forEach(t),Ob=m(Tt),Dr=r(Tt,"P",{});var mh=i(Dr);Db=s(mh,"This model is also a "),Sr=r(mh,"A",{href:!0,rel:!0});var I1=i(Sr);Sb=s(I1,"tf.keras.Model"),I1.forEach(t),Ib=s(mh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mh.forEach(t),Nb=m(Tt),y(Ra.$$.fragment,Tt),Bb=m(Tt),ft=r(Tt,"DIV",{class:!0});var us=i(ft);y(Ir.$$.fragment,us),Rb=m(us),So=r(us,"P",{});var Nl=i(So);Ub=s(Nl,"The "),yl=r(Nl,"A",{href:!0});var N1=i(yl);Hb=s(N1,"TFWav2Vec2ForCTC"),N1.forEach(t),Xb=s(Nl," forward method, overrides the "),md=r(Nl,"CODE",{});var B1=i(md);Gb=s(B1,"__call__"),B1.forEach(t),Kb=s(Nl," special method."),Nl.forEach(t),Jb=m(us),y(Ua.$$.fragment,us),Zb=m(us),y(Ha.$$.fragment,us),us.forEach(t),Tt.forEach(t),Xp=m(o),Io=r(o,"H2",{class:!0});var hh=i(Io);Xa=r(hh,"A",{id:!0,class:!0,href:!0});var R1=i(Xa);hd=r(R1,"SPAN",{});var U1=i(hd);y(Nr.$$.fragment,U1),U1.forEach(t),R1.forEach(t),Qb=m(hh),fd=r(hh,"SPAN",{});var H1=i(fd);Yb=s(H1,"FlaxWav2Vec2Model"),H1.forEach(t),hh.forEach(t),Gp=m(o),re=r(o,"DIV",{class:!0});var Ge=i(re);y(Br.$$.fragment,Ge),ew=m(Ge),Rr=r(Ge,"P",{});var fh=i(Rr);tw=s(fh,`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),Ur=r(fh,"A",{href:!0,rel:!0});var X1=i(Ur);ow=s(X1,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),X1.forEach(t),aw=s(fh,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),fh.forEach(t),sw=m(Ge),Hr=r(Ge,"P",{});var uh=i(Hr);nw=s(uh,"This model inherits from "),kl=r(uh,"A",{href:!0});var G1=i(kl);rw=s(G1,"FlaxPreTrainedModel"),G1.forEach(t),iw=s(uh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uh.forEach(t),lw=m(Ge),Xr=r(Ge,"P",{});var gh=i(Xr);cw=s(gh,`This model is also a Flax Linen
`),Gr=r(gh,"A",{href:!0,rel:!0});var K1=i(Gr);dw=s(K1,"flax.nn.Module"),K1.forEach(t),pw=s(gh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),gh.forEach(t),mw=m(Ge),ud=r(Ge,"P",{});var J1=i(ud);hw=s(J1,"Finally, this model supports inherent JAX features such as:"),J1.forEach(t),fw=m(Ge),Lt=r(Ge,"UL",{});var gs=i(Lt);gd=r(gs,"LI",{});var Z1=i(gd);Kr=r(Z1,"A",{href:!0,rel:!0});var Q1=i(Kr);uw=s(Q1,"Just-In-Time (JIT) compilation"),Q1.forEach(t),Z1.forEach(t),gw=m(gs),_d=r(gs,"LI",{});var Y1=i(_d);Jr=r(Y1,"A",{href:!0,rel:!0});var eT=i(Jr);_w=s(eT,"Automatic Differentiation"),eT.forEach(t),Y1.forEach(t),vw=m(gs),vd=r(gs,"LI",{});var tT=i(vd);Zr=r(tT,"A",{href:!0,rel:!0});var oT=i(Zr);bw=s(oT,"Vectorization"),oT.forEach(t),tT.forEach(t),ww=m(gs),bd=r(gs,"LI",{});var aT=i(bd);Qr=r(aT,"A",{href:!0,rel:!0});var sT=i(Qr);yw=s(sT,"Parallelization"),sT.forEach(t),aT.forEach(t),gs.forEach(t),kw=m(Ge),ut=r(Ge,"DIV",{class:!0});var _s=i(ut);y(Yr.$$.fragment,_s),Tw=m(_s),No=r(_s,"P",{});var Bl=i(No);$w=s(Bl,"The "),wd=r(Bl,"CODE",{});var nT=i(wd);xw=s(nT,"FlaxWav2Vec2PreTrainedModel"),nT.forEach(t),Ww=s(Bl," forward method, overrides the "),yd=r(Bl,"CODE",{});var rT=i(yd);jw=s(rT,"__call__"),rT.forEach(t),Vw=s(Bl," special method."),Bl.forEach(t),Fw=m(_s),y(Ga.$$.fragment,_s),Ew=m(_s),y(Ka.$$.fragment,_s),_s.forEach(t),Ge.forEach(t),Kp=m(o),Bo=r(o,"H2",{class:!0});var _h=i(Bo);Ja=r(_h,"A",{id:!0,class:!0,href:!0});var iT=i(Ja);kd=r(iT,"SPAN",{});var lT=i(kd);y(ei.$$.fragment,lT),lT.forEach(t),iT.forEach(t),Cw=m(_h),Td=r(_h,"SPAN",{});var cT=i(Td);qw=s(cT,"FlaxWav2Vec2ForCTC"),cT.forEach(t),_h.forEach(t),Jp=m(o),ie=r(o,"DIV",{class:!0});var Ke=i(ie);y(ti.$$.fragment,Ke),Pw=m(Ke),Ro=r(Ke,"P",{});var Rl=i(Ro);zw=s(Rl,"Wav2Vec2 Model with a "),$d=r(Rl,"CODE",{});var dT=i($d);Mw=s(dT,"language modeling"),dT.forEach(t),Aw=s(Rl,` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),oi=r(Rl,"A",{href:!0,rel:!0});var pT=i(oi);Lw=s(pT,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),pT.forEach(t),Ow=s(Rl,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Rl.forEach(t),Dw=m(Ke),ai=r(Ke,"P",{});var vh=i(ai);Sw=s(vh,"This model inherits from "),Tl=r(vh,"A",{href:!0});var mT=i(Tl);Iw=s(mT,"FlaxPreTrainedModel"),mT.forEach(t),Nw=s(vh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vh.forEach(t),Bw=m(Ke),si=r(Ke,"P",{});var bh=i(si);Rw=s(bh,`This model is also a Flax Linen
`),ni=r(bh,"A",{href:!0,rel:!0});var hT=i(ni);Uw=s(hT,"flax.nn.Module"),hT.forEach(t),Hw=s(bh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),bh.forEach(t),Xw=m(Ke),xd=r(Ke,"P",{});var fT=i(xd);Gw=s(fT,"Finally, this model supports inherent JAX features such as:"),fT.forEach(t),Kw=m(Ke),Ot=r(Ke,"UL",{});var vs=i(Ot);Wd=r(vs,"LI",{});var uT=i(Wd);ri=r(uT,"A",{href:!0,rel:!0});var gT=i(ri);Jw=s(gT,"Just-In-Time (JIT) compilation"),gT.forEach(t),uT.forEach(t),Zw=m(vs),jd=r(vs,"LI",{});var _T=i(jd);ii=r(_T,"A",{href:!0,rel:!0});var vT=i(ii);Qw=s(vT,"Automatic Differentiation"),vT.forEach(t),_T.forEach(t),Yw=m(vs),Vd=r(vs,"LI",{});var bT=i(Vd);li=r(bT,"A",{href:!0,rel:!0});var wT=i(li);e0=s(wT,"Vectorization"),wT.forEach(t),bT.forEach(t),t0=m(vs),Fd=r(vs,"LI",{});var yT=i(Fd);ci=r(yT,"A",{href:!0,rel:!0});var kT=i(ci);o0=s(kT,"Parallelization"),kT.forEach(t),yT.forEach(t),vs.forEach(t),a0=m(Ke),gt=r(Ke,"DIV",{class:!0});var bs=i(gt);y(di.$$.fragment,bs),s0=m(bs),Uo=r(bs,"P",{});var Ul=i(Uo);n0=s(Ul,"The "),Ed=r(Ul,"CODE",{});var TT=i(Ed);r0=s(TT,"FlaxWav2Vec2PreTrainedModel"),TT.forEach(t),i0=s(Ul," forward method, overrides the "),Cd=r(Ul,"CODE",{});var $T=i(Cd);l0=s($T,"__call__"),$T.forEach(t),c0=s(Ul," special method."),Ul.forEach(t),d0=m(bs),y(Za.$$.fragment,bs),p0=m(bs),y(Qa.$$.fragment,bs),bs.forEach(t),Ke.forEach(t),Zp=m(o),Ho=r(o,"H2",{class:!0});var wh=i(Ho);Ya=r(wh,"A",{id:!0,class:!0,href:!0});var xT=i(Ya);qd=r(xT,"SPAN",{});var WT=i(qd);y(pi.$$.fragment,WT),WT.forEach(t),xT.forEach(t),m0=m(wh),Pd=r(wh,"SPAN",{});var jT=i(Pd);h0=s(jT,"FlaxWav2Vec2ForPreTraining"),jT.forEach(t),wh.forEach(t),Qp=m(o),le=r(o,"DIV",{class:!0});var Je=i(le);y(mi.$$.fragment,Je),f0=m(Je),Xo=r(Je,"P",{});var Hl=i(Xo);u0=s(Hl,"Wav2Vec2 Model with a quantizer and "),zd=r(Hl,"CODE",{});var VT=i(zd);g0=s(VT,"VQ"),VT.forEach(t),_0=s(Hl,` head on top.
Wav2Vec2 was proposed in `),hi=r(Hl,"A",{href:!0,rel:!0});var FT=i(hi);v0=s(FT,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),FT.forEach(t),b0=s(Hl,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Hl.forEach(t),w0=m(Je),fi=r(Je,"P",{});var yh=i(fi);y0=s(yh,"This model inherits from "),$l=r(yh,"A",{href:!0});var ET=i($l);k0=s(ET,"FlaxPreTrainedModel"),ET.forEach(t),T0=s(yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yh.forEach(t),$0=m(Je),ui=r(Je,"P",{});var kh=i(ui);x0=s(kh,`This model is also a Flax Linen
`),gi=r(kh,"A",{href:!0,rel:!0});var CT=i(gi);W0=s(CT,"flax.nn.Module"),CT.forEach(t),j0=s(kh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),kh.forEach(t),V0=m(Je),Md=r(Je,"P",{});var qT=i(Md);F0=s(qT,"Finally, this model supports inherent JAX features such as:"),qT.forEach(t),E0=m(Je),Dt=r(Je,"UL",{});var ws=i(Dt);Ad=r(ws,"LI",{});var PT=i(Ad);_i=r(PT,"A",{href:!0,rel:!0});var zT=i(_i);C0=s(zT,"Just-In-Time (JIT) compilation"),zT.forEach(t),PT.forEach(t),q0=m(ws),Ld=r(ws,"LI",{});var MT=i(Ld);vi=r(MT,"A",{href:!0,rel:!0});var AT=i(vi);P0=s(AT,"Automatic Differentiation"),AT.forEach(t),MT.forEach(t),z0=m(ws),Od=r(ws,"LI",{});var LT=i(Od);bi=r(LT,"A",{href:!0,rel:!0});var OT=i(bi);M0=s(OT,"Vectorization"),OT.forEach(t),LT.forEach(t),A0=m(ws),Dd=r(ws,"LI",{});var DT=i(Dd);wi=r(DT,"A",{href:!0,rel:!0});var ST=i(wi);L0=s(ST,"Parallelization"),ST.forEach(t),DT.forEach(t),ws.forEach(t),O0=m(Je),_t=r(Je,"DIV",{class:!0});var ys=i(_t);y(yi.$$.fragment,ys),D0=m(ys),Go=r(ys,"P",{});var Xl=i(Go);S0=s(Xl,"The "),xl=r(Xl,"A",{href:!0});var IT=i(xl);I0=s(IT,"FlaxWav2Vec2ForPreTraining"),IT.forEach(t),N0=s(Xl," forward method, overrides the "),Sd=r(Xl,"CODE",{});var NT=i(Sd);B0=s(NT,"__call__"),NT.forEach(t),R0=s(Xl," special method."),Xl.forEach(t),U0=m(ys),y(es.$$.fragment,ys),H0=m(ys),y(ts.$$.fragment,ys),ys.forEach(t),Je.forEach(t),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(V4)),c(u,"id","wav2vec2"),c(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(u,"href","#wav2vec2"),c(f,"class","relative group"),c(M,"id","overview"),c(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(M,"href","#overview"),c(z,"class","relative group"),c(I,"href","https://arxiv.org/abs/2006.11477"),c(I,"rel","nofollow"),c(U,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),c(Pe,"href","https://huggingface.co/patrickvonplaten"),c(Pe,"rel","nofollow"),c(ke,"id","resources"),c(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ke,"href","#resources"),c(Y,"class","relative group"),c(Ye,"href","https://colab.research.google.com/github/m3hrdadfi/soxan/blob/main/notebooks/Emotion_recognition_in_Greek_speech_using_Wav2Vec2.ipynb"),c(Ye,"rel","nofollow"),c(pe,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC"),c(se,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/audio-classification"),c(se,"rel","nofollow"),c(Me,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/audio_classification.ipynb"),c(Me,"rel","nofollow"),c($s,"href","https://huggingface.co/blog/wav2vec2-with-ngram"),c($s,"rel","nofollow"),c(Ws,"href","https://huggingface.co/blog/fine-tune-wav2vec2-english"),c(Ws,"rel","nofollow"),c(Vs,"href","https://huggingface.co/blog/fine-tune-xlsr-wav2vec2"),c(Vs,"rel","nofollow"),c(Es,"href","https://colab.research.google.com/github/Muennighoff/ytclipcc/blob/main/wav2vec_youtube_captions.ipynb"),c(Es,"rel","nofollow"),c(qi,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC"),c(Cs,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/speech_recognition.ipynb"),c(Cs,"rel","nofollow"),c(qs,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/multi_lingual_speech_recognition.ipynb"),c(qs,"rel","nofollow"),c(zs,"href","https://www.philschmid.de/automatic-speech-recognition-sagemaker"),c(zs,"rel","nofollow"),c(Ko,"id","transformers.Wav2Vec2Config"),c(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ko,"href","#transformers.Wav2Vec2Config"),c(po,"class","relative group"),c(Mi,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Model"),c(Ls,"href","https://huggingface.co/facebook/wav2vec2-base-960h"),c(Ls,"rel","nofollow"),c(Ai,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Li,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Zo,"id","transformers.Wav2Vec2CTCTokenizer"),c(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zo,"href","#transformers.Wav2Vec2CTCTokenizer"),c(fo,"class","relative group"),c(Oi,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Di,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ea,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ta,"id","transformers.Wav2Vec2FeatureExtractor"),c(ta,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ta,"href","#transformers.Wav2Vec2FeatureExtractor"),c(uo,"class","relative group"),c(Si,"href","/docs/transformers/v4.24.0/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor"),c(oa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(aa,"id","transformers.Wav2Vec2Processor"),c(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(aa,"href","#transformers.Wav2Vec2Processor"),c(go,"class","relative group"),c(Ii,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor"),c(Ni,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),c(Bi,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Qs,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__"),c(Ri,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.decode"),c(en,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor.__call__"),c(tn,"href","/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),c(sa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ui,"href","/docs/transformers/v4.24.0/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor.pad"),c(Hi,"href","/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.pad"),c(na,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xi,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Gi,"href","/docs/transformers/v4.24.0/en/main_classes/processors#transformers.ProcessorMixin.from_pretrained"),c(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ki,"href","/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),c(ia,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ji,"href","/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),c(la,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ca,"id","transformers.Wav2Vec2ProcessorWithLM"),c(ca,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ca,"href","#transformers.Wav2Vec2ProcessorWithLM"),c(_o,"class","relative group"),c(fn,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor.__call__"),c(un,"href","/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),c(da,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Zi,"href","/docs/transformers/v4.24.0/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor.pad"),c(Qi,"href","/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.pad"),c(pa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Yi,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ProcessorWithLM"),c(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(el,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(tl,"href","#decoding-multiple-audios"),c(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ua,"id","decoding-multiple-audios"),c(ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ua,"href","#decoding-multiple-audios"),c(vo,"class","relative group"),c(ol,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ProcessorWithLM.batch_decode"),c(al,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ProcessorWithLM.batch_decode"),c(sl,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ProcessorWithLM.decode"),c(ga,"id","transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput"),c(ga,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ga,"href","#transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput"),c(bo,"class","relative group"),c(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(nl,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForPreTraining"),c(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(_a,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(va,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ba,"id","transformers.Wav2Vec2Model"),c(ba,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ba,"href","#transformers.Wav2Vec2Model"),c(To,"class","relative group"),c(Sn,"href","https://arxiv.org/abs/2006.11477"),c(Sn,"rel","nofollow"),c(rl,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),c(Bn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Bn,"rel","nofollow"),c(il,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2Model"),c(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ka,"id","transformers.Wav2Vec2ForCTC"),c(ka,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ka,"href","#transformers.Wav2Vec2ForCTC"),c(xo,"class","relative group"),c(Xn,"href","https://arxiv.org/abs/2006.11477"),c(Xn,"rel","nofollow"),c(ll,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),c(Jn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Jn,"rel","nofollow"),c(cl,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC"),c(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Wa,"id","transformers.Wav2Vec2ForSequenceClassification"),c(Wa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wa,"href","#transformers.Wav2Vec2ForSequenceClassification"),c(Vo,"class","relative group"),c(tr,"href","https://arxiv.org/abs/2006.11477"),c(tr,"rel","nofollow"),c(dl,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),c(sr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(sr,"rel","nofollow"),c(pl,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForSequenceClassification"),c(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ea,"id","transformers.Wav2Vec2ForAudioFrameClassification"),c(Ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ea,"href","#transformers.Wav2Vec2ForAudioFrameClassification"),c(Eo,"class","relative group"),c(cr,"href","https://arxiv.org/abs/2006.11477"),c(cr,"rel","nofollow"),c(ml,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),c(mr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(mr,"rel","nofollow"),c(hl,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForAudioFrameClassification"),c(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Pa,"id","transformers.Wav2Vec2ForXVector"),c(Pa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pa,"href","#transformers.Wav2Vec2ForXVector"),c(qo,"class","relative group"),c(_r,"href","https://arxiv.org/abs/2006.11477"),c(_r,"rel","nofollow"),c(fl,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),c(wr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(wr,"rel","nofollow"),c(ul,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForXVector"),c(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Aa,"id","transformers.Wav2Vec2ForPreTraining"),c(Aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Aa,"href","#transformers.Wav2Vec2ForPreTraining"),c(zo,"class","relative group"),c($r,"href","https://arxiv.org/abs/2006.11477"),c($r,"rel","nofollow"),c(gl,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),c(jr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(jr,"rel","nofollow"),c(_l,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.Wav2Vec2ForPreTraining"),c(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Da,"id","transformers.TFWav2Vec2Model"),c(Da,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Da,"href","#transformers.TFWav2Vec2Model"),c(Lo,"class","relative group"),c(vl,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Pr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Pr,"rel","nofollow"),c(bl,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.TFWav2Vec2Model"),c(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ba,"id","transformers.TFWav2Vec2ForCTC"),c(Ba,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ba,"href","#transformers.TFWav2Vec2ForCTC"),c(Do,"class","relative group"),c(wl,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Sr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Sr,"rel","nofollow"),c(yl,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.TFWav2Vec2ForCTC"),c(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xa,"id","transformers.FlaxWav2Vec2Model"),c(Xa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xa,"href","#transformers.FlaxWav2Vec2Model"),c(Io,"class","relative group"),c(Ur,"href","https://arxiv.org/abs/2006.11477"),c(Ur,"rel","nofollow"),c(kl,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Gr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Gr,"rel","nofollow"),c(Kr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Kr,"rel","nofollow"),c(Jr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Jr,"rel","nofollow"),c(Zr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Zr,"rel","nofollow"),c(Qr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Qr,"rel","nofollow"),c(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ja,"id","transformers.FlaxWav2Vec2ForCTC"),c(Ja,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ja,"href","#transformers.FlaxWav2Vec2ForCTC"),c(Bo,"class","relative group"),c(oi,"href","https://arxiv.org/abs/2006.11477"),c(oi,"rel","nofollow"),c(Tl,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ni,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(ni,"rel","nofollow"),c(ri,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ri,"rel","nofollow"),c(ii,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ii,"rel","nofollow"),c(li,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(li,"rel","nofollow"),c(ci,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ci,"rel","nofollow"),c(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ya,"id","transformers.FlaxWav2Vec2ForPreTraining"),c(Ya,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ya,"href","#transformers.FlaxWav2Vec2ForPreTraining"),c(Ho,"class","relative group"),c(hi,"href","https://arxiv.org/abs/2006.11477"),c(hi,"rel","nofollow"),c($l,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(gi,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(gi,"rel","nofollow"),c(_i,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(_i,"rel","nofollow"),c(vi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(vi,"rel","nofollow"),c(bi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(bi,"rel","nofollow"),c(wi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(wi,"rel","nofollow"),c(xl,"href","/docs/transformers/v4.24.0/en/model_doc/wav2vec2#transformers.FlaxWav2Vec2ForPreTraining"),c(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,d),_(o,b,g),_(o,f,g),e(f,u),e(u,v),k(l,v,null),e(f,h),e(f,V),e(V,A),_(o,L,g),_(o,z,g),e(z,M),e(M,N),k(E,N,null),e(z,O),e(z,C),e(C,ce),_(o,K,g),_(o,S,g),e(S,de),e(S,I),e(I,R),e(S,De),_(o,X,g),_(o,J,g),e(J,Se),_(o,Ve,g),_(o,Z,g),e(Z,Ze),e(Ze,$t),_(o,Ie,g),_(o,D,g),e(D,Q),_(o,at,g),_(o,ae,g),e(ae,Qe),e(Qe,xt),e(ae,Fe),e(ae,Ee),e(Ee,Wt),e(Ee,U),e(U,jt),e(Ee,Ce),_(o,st,g),_(o,ye,g),e(ye,qe),e(ye,Pe),e(Pe,Vt),e(ye,he),_(o,nt,g),_(o,Y,g),e(Y,ke),e(ke,ze),k(B,ze,null),e(Y,Ft),e(Y,ee),e(ee,Et),_(o,rt,g),_(o,j,g),e(j,q),_(o,It,g),k(fe,o,g),_(o,Nt,g),_(o,Ne,g),e(Ne,P),e(P,to),e(P,Ye),e(Ye,oo),e(P,ao),e(Ne,so),e(Ne,H),e(H,pe),e(pe,no),e(H,ro),e(H,se),e(se,io),e(H,lo),e(H,Me),e(Me,co),e(H,et),_(o,Bt,g),k(ks,o,g),_(o,cp,g),_(o,Be,g),e(Be,Ts),e(Ts,Th),e(Ts,$s),e($s,$h),e(Ts,xh),e(Be,Wh),e(Be,xs),e(xs,jh),e(xs,Ws),e(Ws,Vh),e(xs,Fh),e(Be,Eh),e(Be,js),e(js,Ch),e(js,Vs),e(Vs,qh),e(js,Ph),e(Be,zh),e(Be,Fs),e(Fs,Mh),e(Fs,Es),e(Es,Ah),e(Fs,Lh),e(Be,Oh),e(Be,Rt),e(Rt,qi),e(qi,Dh),e(Rt,Sh),e(Rt,Cs),e(Cs,Ih),e(Rt,Nh),e(Rt,qs),e(qs,Bh),e(Rt,Rh),_(o,dp,g),_(o,Pi,g),e(Pi,Uh),_(o,pp,g),_(o,zi,g),e(zi,Ps),e(Ps,Hh),e(Ps,zs),e(zs,Xh),e(Ps,Gh),_(o,mp,g),_(o,po,g),e(po,Ko),e(Ko,Gl),k(Ms,Gl,null),e(po,Kh),e(po,Kl),e(Kl,Jh),_(o,hp,g),_(o,tt,g),k(As,tt,null),e(tt,Zh),e(tt,mo),e(mo,Qh),e(mo,Mi),e(Mi,Yh),e(mo,ef),e(mo,Ls),e(Ls,tf),e(mo,of),e(tt,af),e(tt,ho),e(ho,sf),e(ho,Ai),e(Ai,nf),e(ho,rf),e(ho,Li),e(Li,lf),e(ho,cf),e(tt,df),k(Jo,tt,null),_(o,fp,g),_(o,fo,g),e(fo,Zo),e(Zo,Jl),k(Os,Jl,null),e(fo,pf),e(fo,Zl),e(Zl,mf),_(o,up,g),_(o,ne,g),k(Ds,ne,null),e(ne,hf),e(ne,Ql),e(Ql,ff),e(ne,uf),e(ne,Ss),e(Ss,gf),e(Ss,Oi),e(Oi,_f),e(Ss,vf),e(ne,bf),e(ne,Qo),k(Is,Qo,null),e(Qo,wf),e(Qo,Yl),e(Yl,yf),e(ne,kf),e(ne,Di),k(Ns,Di,null),e(ne,Tf),e(ne,it),k(Bs,it,null),e(it,$f),e(it,ec),e(ec,xf),e(it,Wf),e(it,Rs),e(Rs,jf),e(Rs,tc),e(tc,Vf),e(Rs,Ff),e(it,Ef),k(Yo,it,null),e(ne,Cf),e(ne,ea),k(Us,ea,null),e(ea,qf),e(ea,oc),e(oc,Pf),_(o,gp,g),_(o,uo,g),e(uo,ta),e(ta,ac),k(Hs,ac,null),e(uo,zf),e(uo,sc),e(sc,Mf),_(o,_p,g),_(o,ot,g),k(Xs,ot,null),e(ot,Af),e(ot,nc),e(nc,Lf),e(ot,Of),e(ot,Gs),e(Gs,Df),e(Gs,Si),e(Si,Sf),e(Gs,If),e(ot,Nf),e(ot,oa),k(Ks,oa,null),e(oa,Bf),e(oa,rc),e(rc,Rf),_(o,vp,g),_(o,go,g),e(go,aa),e(aa,ic),k(Js,ic,null),e(go,Uf),e(go,lc),e(lc,Hf),_(o,bp,g),_(o,G,g),k(Zs,G,null),e(G,Xf),e(G,cc),e(cc,Gf),e(G,Kf),e(G,Re),e(Re,Ii),e(Ii,Jf),e(Re,Zf),e(Re,Ni),e(Ni,Qf),e(Re,Yf),e(Re,Bi),e(Bi,eu),e(Re,tu),e(Re,Qs),e(Qs,dc),e(dc,ou),e(Qs,au),e(Re,su),e(Re,Ri),e(Ri,nu),e(Re,ru),e(G,iu),e(G,sa),k(Ys,sa,null),e(sa,lu),e(sa,Ct),e(Ct,cu),e(Ct,en),e(en,pc),e(pc,du),e(en,pu),e(Ct,mu),e(Ct,mc),e(mc,hu),e(Ct,fu),e(Ct,tn),e(tn,hc),e(hc,uu),e(tn,gu),e(Ct,_u),e(G,vu),e(G,na),k(on,na,null),e(na,bu),e(na,qt),e(qt,wu),e(qt,Ui),e(Ui,yu),e(qt,ku),e(qt,fc),e(fc,Tu),e(qt,$u),e(qt,Hi),e(Hi,xu),e(qt,Wu),e(G,ju),e(G,Xi),k(an,Xi,null),e(G,Vu),e(G,Ut),k(sn,Ut,null),e(Ut,Fu),e(Ut,nn),e(nn,Eu),e(nn,Gi),e(Gi,Cu),e(nn,qu),e(Ut,Pu),k(ra,Ut,null),e(G,zu),e(G,ia),k(rn,ia,null),e(ia,Mu),e(ia,ln),e(ln,Au),e(ln,Ki),e(Ki,Lu),e(ln,Ou),e(G,Du),e(G,la),k(cn,la,null),e(la,Su),e(la,dn),e(dn,Iu),e(dn,Ji),e(Ji,Nu),e(dn,Bu),_(o,wp,g),_(o,_o,g),e(_o,ca),e(ca,uc),k(pn,uc,null),e(_o,Ru),e(_o,gc),e(gc,Uu),_(o,yp,g),_(o,te,g),k(mn,te,null),e(te,Hu),e(te,_c),e(_c,Xu),e(te,Gu),e(te,da),k(hn,da,null),e(da,Ku),e(da,Pt),e(Pt,Ju),e(Pt,fn),e(fn,vc),e(vc,Zu),e(fn,Qu),e(Pt,Yu),e(Pt,bc),e(bc,eg),e(Pt,tg),e(Pt,un),e(un,wc),e(wc,og),e(un,ag),e(Pt,sg),e(te,ng),e(te,pa),k(gn,pa,null),e(pa,rg),e(pa,zt),e(zt,ig),e(zt,Zi),e(Zi,lg),e(zt,cg),e(zt,yc),e(yc,dg),e(zt,pg),e(zt,Qi),e(Qi,mg),e(zt,hg),e(te,fg),e(te,Ht),k(_n,Ht,null),e(Ht,ug),e(Ht,vn),e(vn,gg),e(vn,Yi),e(Yi,_g),e(vn,vg),e(Ht,bg),k(ma,Ht,null),e(te,wg),e(te,el),k(bn,el,null),e(te,yg),e(te,lt),k(wn,lt,null),e(lt,kg),e(lt,kc),e(kc,Tg),e(lt,$g),k(ha,lt,null),e(lt,xg),e(lt,yn),e(yn,Wg),e(yn,tl),e(tl,jg),e(yn,Vg),e(te,Fg),e(te,Xt),k(kn,Xt,null),e(Xt,Eg),e(Xt,Tc),e(Tc,Cg),e(Xt,qg),k(fa,Xt,null),_(o,kp,g),_(o,vo,g),e(vo,ua),e(ua,$c),k(Tn,$c,null),e(vo,Pg),e(vo,xc),e(xc,zg),_(o,Tp,g),_(o,Te,g),e(Te,Mg),e(Te,ol),e(ol,Ag),e(Te,Lg),e(Te,Wc),e(Wc,Og),e(Te,Dg),e(Te,al),e(al,Sg),e(Te,Ig),e(Te,sl),e(sl,Ng),e(Te,Bg),e(Te,jc),e(jc,Rg),e(Te,Ug),_(o,$p,g),k($n,o,g),_(o,xp,g),_(o,bo,g),e(bo,ga),e(ga,Vc),k(xn,Vc,null),e(bo,Hg),e(bo,Fc),e(Fc,Xg),_(o,Wp,g),_(o,wo,g),k(Wn,wo,null),e(wo,Gg),e(wo,jn),e(jn,Kg),e(jn,Ec),e(Ec,Jg),e(jn,Zg),_(o,jp,g),_(o,yo,g),k(Vn,yo,null),e(yo,Qg),e(yo,Cc),e(Cc,Yg),_(o,Vp,g),_(o,ko,g),k(Fn,ko,null),e(ko,e_),e(ko,En),e(En,t_),e(En,nl),e(nl,o_),e(En,a_),_(o,Fp,g),_(o,Mt,g),k(Cn,Mt,null),e(Mt,s_),e(Mt,qn),e(qn,n_),e(qn,qc),e(qc,r_),e(qn,i_),e(Mt,l_),e(Mt,_a),k(Pn,_a,null),e(_a,c_),e(_a,Pc),e(Pc,d_),_(o,Ep,g),_(o,At,g),k(zn,At,null),e(At,p_),e(At,Mn),e(Mn,m_),e(Mn,zc),e(zc,h_),e(Mn,f_),e(At,u_),e(At,va),k(An,va,null),e(va,g_),e(va,Mc),e(Mc,__),_(o,Cp,g),_(o,To,g),e(To,ba),e(ba,Ac),k(Ln,Ac,null),e(To,v_),e(To,Lc),e(Lc,b_),_(o,qp,g),_(o,Ae,g),k(On,Ae,null),e(Ae,w_),e(Ae,Dn),e(Dn,y_),e(Dn,Sn),e(Sn,k_),e(Dn,T_),e(Ae,$_),e(Ae,In),e(In,x_),e(In,rl),e(rl,W_),e(In,j_),e(Ae,V_),e(Ae,Nn),e(Nn,F_),e(Nn,Bn),e(Bn,E_),e(Nn,C_),e(Ae,q_),e(Ae,ct),k(Rn,ct,null),e(ct,P_),e(ct,$o),e($o,z_),e($o,il),e(il,M_),e($o,A_),e($o,Oc),e(Oc,L_),e($o,O_),e(ct,D_),k(wa,ct,null),e(ct,S_),k(ya,ct,null),_(o,Pp,g),_(o,xo,g),e(xo,ka),e(ka,Dc),k(Un,Dc,null),e(xo,I_),e(xo,Sc),e(Sc,N_),_(o,zp,g),_(o,Le,g),k(Hn,Le,null),e(Le,B_),e(Le,Wo),e(Wo,R_),e(Wo,Ic),e(Ic,U_),e(Wo,H_),e(Wo,Xn),e(Xn,X_),e(Wo,G_),e(Le,K_),e(Le,Gn),e(Gn,J_),e(Gn,ll),e(ll,Z_),e(Gn,Q_),e(Le,Y_),e(Le,Kn),e(Kn,ev),e(Kn,Jn),e(Jn,tv),e(Kn,ov),e(Le,av),e(Le,Ue),k(Zn,Ue,null),e(Ue,sv),e(Ue,jo),e(jo,nv),e(jo,cl),e(cl,rv),e(jo,iv),e(jo,Nc),e(Nc,lv),e(jo,cv),e(Ue,dv),k(Ta,Ue,null),e(Ue,pv),k($a,Ue,null),e(Ue,mv),k(xa,Ue,null),_(o,Mp,g),_(o,Vo,g),e(Vo,Wa),e(Wa,Bc),k(Qn,Bc,null),e(Vo,hv),e(Vo,Rc),e(Rc,fv),_(o,Ap,g),_(o,ue,g),k(Yn,ue,null),e(ue,uv),e(ue,Uc),e(Uc,gv),e(ue,_v),e(ue,er),e(er,vv),e(er,tr),e(tr,bv),e(er,wv),e(ue,yv),e(ue,or),e(or,kv),e(or,dl),e(dl,Tv),e(or,$v),e(ue,xv),e(ue,ar),e(ar,Wv),e(ar,sr),e(sr,jv),e(ar,Vv),e(ue,Fv),e(ue,He),k(nr,He,null),e(He,Ev),e(He,Fo),e(Fo,Cv),e(Fo,pl),e(pl,qv),e(Fo,Pv),e(Fo,Hc),e(Hc,zv),e(Fo,Mv),e(He,Av),k(ja,He,null),e(He,Lv),k(Va,He,null),e(He,Ov),k(Fa,He,null),_(o,Lp,g),_(o,Eo,g),e(Eo,Ea),e(Ea,Xc),k(rr,Xc,null),e(Eo,Dv),e(Eo,Gc),e(Gc,Sv),_(o,Op,g),_(o,ge,g),k(ir,ge,null),e(ge,Iv),e(ge,Kc),e(Kc,Nv),e(ge,Bv),e(ge,lr),e(lr,Rv),e(lr,cr),e(cr,Uv),e(lr,Hv),e(ge,Xv),e(ge,dr),e(dr,Gv),e(dr,ml),e(ml,Kv),e(dr,Jv),e(ge,Zv),e(ge,pr),e(pr,Qv),e(pr,mr),e(mr,Yv),e(pr,e2),e(ge,t2),e(ge,dt),k(hr,dt,null),e(dt,o2),e(dt,Co),e(Co,a2),e(Co,hl),e(hl,s2),e(Co,n2),e(Co,Jc),e(Jc,r2),e(Co,i2),e(dt,l2),k(Ca,dt,null),e(dt,c2),k(qa,dt,null),_(o,Dp,g),_(o,qo,g),e(qo,Pa),e(Pa,Zc),k(fr,Zc,null),e(qo,d2),e(qo,Qc),e(Qc,p2),_(o,Sp,g),_(o,_e,g),k(ur,_e,null),e(_e,m2),e(_e,Yc),e(Yc,h2),e(_e,f2),e(_e,gr),e(gr,u2),e(gr,_r),e(_r,g2),e(gr,_2),e(_e,v2),e(_e,vr),e(vr,b2),e(vr,fl),e(fl,w2),e(vr,y2),e(_e,k2),e(_e,br),e(br,T2),e(br,wr),e(wr,$2),e(br,x2),e(_e,W2),e(_e,pt),k(yr,pt,null),e(pt,j2),e(pt,Po),e(Po,V2),e(Po,ul),e(ul,F2),e(Po,E2),e(Po,ed),e(ed,C2),e(Po,q2),e(pt,P2),k(za,pt,null),e(pt,z2),k(Ma,pt,null),_(o,Ip,g),_(o,zo,g),e(zo,Aa),e(Aa,td),k(kr,td,null),e(zo,M2),e(zo,od),e(od,A2),_(o,Np,g),_(o,Oe,g),k(Tr,Oe,null),e(Oe,L2),e(Oe,Mo),e(Mo,O2),e(Mo,ad),e(ad,D2),e(Mo,S2),e(Mo,$r),e($r,I2),e(Mo,N2),e(Oe,B2),e(Oe,xr),e(xr,R2),e(xr,gl),e(gl,U2),e(xr,H2),e(Oe,X2),e(Oe,Wr),e(Wr,G2),e(Wr,jr),e(jr,K2),e(Wr,J2),e(Oe,Z2),e(Oe,mt),k(Vr,mt,null),e(mt,Q2),e(mt,Ao),e(Ao,Y2),e(Ao,_l),e(_l,eb),e(Ao,tb),e(Ao,sd),e(sd,ob),e(Ao,ab),e(mt,sb),k(La,mt,null),e(mt,nb),k(Oa,mt,null),_(o,Bp,g),_(o,Lo,g),e(Lo,Da),e(Da,nd),k(Fr,nd,null),e(Lo,rb),e(Lo,rd),e(rd,ib),_(o,Rp,g),_(o,ve,g),k(Er,ve,null),e(ve,lb),e(ve,id),e(id,cb),e(ve,db),e(ve,Cr),e(Cr,pb),e(Cr,vl),e(vl,mb),e(Cr,hb),e(ve,fb),e(ve,qr),e(qr,ub),e(qr,Pr),e(Pr,gb),e(qr,_b),e(ve,vb),k(Sa,ve,null),e(ve,bb),e(ve,ht),k(zr,ht,null),e(ht,wb),e(ht,Oo),e(Oo,yb),e(Oo,bl),e(bl,kb),e(Oo,Tb),e(Oo,ld),e(ld,$b),e(Oo,xb),e(ht,Wb),k(Ia,ht,null),e(ht,jb),k(Na,ht,null),_(o,Up,g),_(o,Do,g),e(Do,Ba),e(Ba,cd),k(Mr,cd,null),e(Do,Vb),e(Do,dd),e(dd,Fb),_(o,Hp,g),_(o,be,g),k(Ar,be,null),e(be,Eb),e(be,Lr),e(Lr,Cb),e(Lr,pd),e(pd,qb),e(Lr,Pb),e(be,zb),e(be,Or),e(Or,Mb),e(Or,wl),e(wl,Ab),e(Or,Lb),e(be,Ob),e(be,Dr),e(Dr,Db),e(Dr,Sr),e(Sr,Sb),e(Dr,Ib),e(be,Nb),k(Ra,be,null),e(be,Bb),e(be,ft),k(Ir,ft,null),e(ft,Rb),e(ft,So),e(So,Ub),e(So,yl),e(yl,Hb),e(So,Xb),e(So,md),e(md,Gb),e(So,Kb),e(ft,Jb),k(Ua,ft,null),e(ft,Zb),k(Ha,ft,null),_(o,Xp,g),_(o,Io,g),e(Io,Xa),e(Xa,hd),k(Nr,hd,null),e(Io,Qb),e(Io,fd),e(fd,Yb),_(o,Gp,g),_(o,re,g),k(Br,re,null),e(re,ew),e(re,Rr),e(Rr,tw),e(Rr,Ur),e(Ur,ow),e(Rr,aw),e(re,sw),e(re,Hr),e(Hr,nw),e(Hr,kl),e(kl,rw),e(Hr,iw),e(re,lw),e(re,Xr),e(Xr,cw),e(Xr,Gr),e(Gr,dw),e(Xr,pw),e(re,mw),e(re,ud),e(ud,hw),e(re,fw),e(re,Lt),e(Lt,gd),e(gd,Kr),e(Kr,uw),e(Lt,gw),e(Lt,_d),e(_d,Jr),e(Jr,_w),e(Lt,vw),e(Lt,vd),e(vd,Zr),e(Zr,bw),e(Lt,ww),e(Lt,bd),e(bd,Qr),e(Qr,yw),e(re,kw),e(re,ut),k(Yr,ut,null),e(ut,Tw),e(ut,No),e(No,$w),e(No,wd),e(wd,xw),e(No,Ww),e(No,yd),e(yd,jw),e(No,Vw),e(ut,Fw),k(Ga,ut,null),e(ut,Ew),k(Ka,ut,null),_(o,Kp,g),_(o,Bo,g),e(Bo,Ja),e(Ja,kd),k(ei,kd,null),e(Bo,Cw),e(Bo,Td),e(Td,qw),_(o,Jp,g),_(o,ie,g),k(ti,ie,null),e(ie,Pw),e(ie,Ro),e(Ro,zw),e(Ro,$d),e($d,Mw),e(Ro,Aw),e(Ro,oi),e(oi,Lw),e(Ro,Ow),e(ie,Dw),e(ie,ai),e(ai,Sw),e(ai,Tl),e(Tl,Iw),e(ai,Nw),e(ie,Bw),e(ie,si),e(si,Rw),e(si,ni),e(ni,Uw),e(si,Hw),e(ie,Xw),e(ie,xd),e(xd,Gw),e(ie,Kw),e(ie,Ot),e(Ot,Wd),e(Wd,ri),e(ri,Jw),e(Ot,Zw),e(Ot,jd),e(jd,ii),e(ii,Qw),e(Ot,Yw),e(Ot,Vd),e(Vd,li),e(li,e0),e(Ot,t0),e(Ot,Fd),e(Fd,ci),e(ci,o0),e(ie,a0),e(ie,gt),k(di,gt,null),e(gt,s0),e(gt,Uo),e(Uo,n0),e(Uo,Ed),e(Ed,r0),e(Uo,i0),e(Uo,Cd),e(Cd,l0),e(Uo,c0),e(gt,d0),k(Za,gt,null),e(gt,p0),k(Qa,gt,null),_(o,Zp,g),_(o,Ho,g),e(Ho,Ya),e(Ya,qd),k(pi,qd,null),e(Ho,m0),e(Ho,Pd),e(Pd,h0),_(o,Qp,g),_(o,le,g),k(mi,le,null),e(le,f0),e(le,Xo),e(Xo,u0),e(Xo,zd),e(zd,g0),e(Xo,_0),e(Xo,hi),e(hi,v0),e(Xo,b0),e(le,w0),e(le,fi),e(fi,y0),e(fi,$l),e($l,k0),e(fi,T0),e(le,$0),e(le,ui),e(ui,x0),e(ui,gi),e(gi,W0),e(ui,j0),e(le,V0),e(le,Md),e(Md,F0),e(le,E0),e(le,Dt),e(Dt,Ad),e(Ad,_i),e(_i,C0),e(Dt,q0),e(Dt,Ld),e(Ld,vi),e(vi,P0),e(Dt,z0),e(Dt,Od),e(Od,bi),e(bi,M0),e(Dt,A0),e(Dt,Dd),e(Dd,wi),e(wi,L0),e(le,O0),e(le,_t),k(yi,_t,null),e(_t,D0),e(_t,Go),e(Go,S0),e(Go,xl),e(xl,I0),e(Go,N0),e(Go,Sd),e(Sd,B0),e(Go,R0),e(_t,U0),k(es,_t,null),e(_t,H0),k(ts,_t,null),Yp=!0},p(o,[g]){const ki={};g&2&&(ki.$$scope={dirty:g,ctx:o}),Jo.$set(ki);const Id={};g&2&&(Id.$$scope={dirty:g,ctx:o}),Yo.$set(Id);const Nd={};g&2&&(Nd.$$scope={dirty:g,ctx:o}),ra.$set(Nd);const Bd={};g&2&&(Bd.$$scope={dirty:g,ctx:o}),ma.$set(Bd);const Ti={};g&2&&(Ti.$$scope={dirty:g,ctx:o}),ha.$set(Ti);const Rd={};g&2&&(Rd.$$scope={dirty:g,ctx:o}),fa.$set(Rd);const Ud={};g&2&&(Ud.$$scope={dirty:g,ctx:o}),wa.$set(Ud);const Hd={};g&2&&(Hd.$$scope={dirty:g,ctx:o}),ya.$set(Hd);const $i={};g&2&&($i.$$scope={dirty:g,ctx:o}),Ta.$set($i);const Xd={};g&2&&(Xd.$$scope={dirty:g,ctx:o}),$a.$set(Xd);const Gd={};g&2&&(Gd.$$scope={dirty:g,ctx:o}),xa.$set(Gd);const Kd={};g&2&&(Kd.$$scope={dirty:g,ctx:o}),ja.$set(Kd);const Jd={};g&2&&(Jd.$$scope={dirty:g,ctx:o}),Va.$set(Jd);const Zd={};g&2&&(Zd.$$scope={dirty:g,ctx:o}),Fa.$set(Zd);const xi={};g&2&&(xi.$$scope={dirty:g,ctx:o}),Ca.$set(xi);const Qd={};g&2&&(Qd.$$scope={dirty:g,ctx:o}),qa.$set(Qd);const Wi={};g&2&&(Wi.$$scope={dirty:g,ctx:o}),za.$set(Wi);const Yd={};g&2&&(Yd.$$scope={dirty:g,ctx:o}),Ma.$set(Yd);const ji={};g&2&&(ji.$$scope={dirty:g,ctx:o}),La.$set(ji);const ep={};g&2&&(ep.$$scope={dirty:g,ctx:o}),Oa.$set(ep);const Vi={};g&2&&(Vi.$$scope={dirty:g,ctx:o}),Sa.$set(Vi);const tp={};g&2&&(tp.$$scope={dirty:g,ctx:o}),Ia.$set(tp);const op={};g&2&&(op.$$scope={dirty:g,ctx:o}),Na.$set(op);const ap={};g&2&&(ap.$$scope={dirty:g,ctx:o}),Ra.$set(ap);const sp={};g&2&&(sp.$$scope={dirty:g,ctx:o}),Ua.$set(sp);const Fi={};g&2&&(Fi.$$scope={dirty:g,ctx:o}),Ha.$set(Fi);const Ei={};g&2&&(Ei.$$scope={dirty:g,ctx:o}),Ga.$set(Ei);const np={};g&2&&(np.$$scope={dirty:g,ctx:o}),Ka.$set(np);const Gt={};g&2&&(Gt.$$scope={dirty:g,ctx:o}),Za.$set(Gt);const rp={};g&2&&(rp.$$scope={dirty:g,ctx:o}),Qa.$set(rp);const ip={};g&2&&(ip.$$scope={dirty:g,ctx:o}),es.$set(ip);const lp={};g&2&&(lp.$$scope={dirty:g,ctx:o}),ts.$set(lp)},i(o){Yp||(T(l.$$.fragment,o),T(E.$$.fragment,o),T(B.$$.fragment,o),T(fe.$$.fragment,o),T(ks.$$.fragment,o),T(Ms.$$.fragment,o),T(As.$$.fragment,o),T(Jo.$$.fragment,o),T(Os.$$.fragment,o),T(Ds.$$.fragment,o),T(Is.$$.fragment,o),T(Ns.$$.fragment,o),T(Bs.$$.fragment,o),T(Yo.$$.fragment,o),T(Us.$$.fragment,o),T(Hs.$$.fragment,o),T(Xs.$$.fragment,o),T(Ks.$$.fragment,o),T(Js.$$.fragment,o),T(Zs.$$.fragment,o),T(Ys.$$.fragment,o),T(on.$$.fragment,o),T(an.$$.fragment,o),T(sn.$$.fragment,o),T(ra.$$.fragment,o),T(rn.$$.fragment,o),T(cn.$$.fragment,o),T(pn.$$.fragment,o),T(mn.$$.fragment,o),T(hn.$$.fragment,o),T(gn.$$.fragment,o),T(_n.$$.fragment,o),T(ma.$$.fragment,o),T(bn.$$.fragment,o),T(wn.$$.fragment,o),T(ha.$$.fragment,o),T(kn.$$.fragment,o),T(fa.$$.fragment,o),T(Tn.$$.fragment,o),T($n.$$.fragment,o),T(xn.$$.fragment,o),T(Wn.$$.fragment,o),T(Vn.$$.fragment,o),T(Fn.$$.fragment,o),T(Cn.$$.fragment,o),T(Pn.$$.fragment,o),T(zn.$$.fragment,o),T(An.$$.fragment,o),T(Ln.$$.fragment,o),T(On.$$.fragment,o),T(Rn.$$.fragment,o),T(wa.$$.fragment,o),T(ya.$$.fragment,o),T(Un.$$.fragment,o),T(Hn.$$.fragment,o),T(Zn.$$.fragment,o),T(Ta.$$.fragment,o),T($a.$$.fragment,o),T(xa.$$.fragment,o),T(Qn.$$.fragment,o),T(Yn.$$.fragment,o),T(nr.$$.fragment,o),T(ja.$$.fragment,o),T(Va.$$.fragment,o),T(Fa.$$.fragment,o),T(rr.$$.fragment,o),T(ir.$$.fragment,o),T(hr.$$.fragment,o),T(Ca.$$.fragment,o),T(qa.$$.fragment,o),T(fr.$$.fragment,o),T(ur.$$.fragment,o),T(yr.$$.fragment,o),T(za.$$.fragment,o),T(Ma.$$.fragment,o),T(kr.$$.fragment,o),T(Tr.$$.fragment,o),T(Vr.$$.fragment,o),T(La.$$.fragment,o),T(Oa.$$.fragment,o),T(Fr.$$.fragment,o),T(Er.$$.fragment,o),T(Sa.$$.fragment,o),T(zr.$$.fragment,o),T(Ia.$$.fragment,o),T(Na.$$.fragment,o),T(Mr.$$.fragment,o),T(Ar.$$.fragment,o),T(Ra.$$.fragment,o),T(Ir.$$.fragment,o),T(Ua.$$.fragment,o),T(Ha.$$.fragment,o),T(Nr.$$.fragment,o),T(Br.$$.fragment,o),T(Yr.$$.fragment,o),T(Ga.$$.fragment,o),T(Ka.$$.fragment,o),T(ei.$$.fragment,o),T(ti.$$.fragment,o),T(di.$$.fragment,o),T(Za.$$.fragment,o),T(Qa.$$.fragment,o),T(pi.$$.fragment,o),T(mi.$$.fragment,o),T(yi.$$.fragment,o),T(es.$$.fragment,o),T(ts.$$.fragment,o),Yp=!0)},o(o){$(l.$$.fragment,o),$(E.$$.fragment,o),$(B.$$.fragment,o),$(fe.$$.fragment,o),$(ks.$$.fragment,o),$(Ms.$$.fragment,o),$(As.$$.fragment,o),$(Jo.$$.fragment,o),$(Os.$$.fragment,o),$(Ds.$$.fragment,o),$(Is.$$.fragment,o),$(Ns.$$.fragment,o),$(Bs.$$.fragment,o),$(Yo.$$.fragment,o),$(Us.$$.fragment,o),$(Hs.$$.fragment,o),$(Xs.$$.fragment,o),$(Ks.$$.fragment,o),$(Js.$$.fragment,o),$(Zs.$$.fragment,o),$(Ys.$$.fragment,o),$(on.$$.fragment,o),$(an.$$.fragment,o),$(sn.$$.fragment,o),$(ra.$$.fragment,o),$(rn.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(mn.$$.fragment,o),$(hn.$$.fragment,o),$(gn.$$.fragment,o),$(_n.$$.fragment,o),$(ma.$$.fragment,o),$(bn.$$.fragment,o),$(wn.$$.fragment,o),$(ha.$$.fragment,o),$(kn.$$.fragment,o),$(fa.$$.fragment,o),$(Tn.$$.fragment,o),$($n.$$.fragment,o),$(xn.$$.fragment,o),$(Wn.$$.fragment,o),$(Vn.$$.fragment,o),$(Fn.$$.fragment,o),$(Cn.$$.fragment,o),$(Pn.$$.fragment,o),$(zn.$$.fragment,o),$(An.$$.fragment,o),$(Ln.$$.fragment,o),$(On.$$.fragment,o),$(Rn.$$.fragment,o),$(wa.$$.fragment,o),$(ya.$$.fragment,o),$(Un.$$.fragment,o),$(Hn.$$.fragment,o),$(Zn.$$.fragment,o),$(Ta.$$.fragment,o),$($a.$$.fragment,o),$(xa.$$.fragment,o),$(Qn.$$.fragment,o),$(Yn.$$.fragment,o),$(nr.$$.fragment,o),$(ja.$$.fragment,o),$(Va.$$.fragment,o),$(Fa.$$.fragment,o),$(rr.$$.fragment,o),$(ir.$$.fragment,o),$(hr.$$.fragment,o),$(Ca.$$.fragment,o),$(qa.$$.fragment,o),$(fr.$$.fragment,o),$(ur.$$.fragment,o),$(yr.$$.fragment,o),$(za.$$.fragment,o),$(Ma.$$.fragment,o),$(kr.$$.fragment,o),$(Tr.$$.fragment,o),$(Vr.$$.fragment,o),$(La.$$.fragment,o),$(Oa.$$.fragment,o),$(Fr.$$.fragment,o),$(Er.$$.fragment,o),$(Sa.$$.fragment,o),$(zr.$$.fragment,o),$(Ia.$$.fragment,o),$(Na.$$.fragment,o),$(Mr.$$.fragment,o),$(Ar.$$.fragment,o),$(Ra.$$.fragment,o),$(Ir.$$.fragment,o),$(Ua.$$.fragment,o),$(Ha.$$.fragment,o),$(Nr.$$.fragment,o),$(Br.$$.fragment,o),$(Yr.$$.fragment,o),$(Ga.$$.fragment,o),$(Ka.$$.fragment,o),$(ei.$$.fragment,o),$(ti.$$.fragment,o),$(di.$$.fragment,o),$(Za.$$.fragment,o),$(Qa.$$.fragment,o),$(pi.$$.fragment,o),$(mi.$$.fragment,o),$(yi.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),Yp=!1},d(o){t(d),o&&t(b),o&&t(f),x(l),o&&t(L),o&&t(z),x(E),o&&t(K),o&&t(S),o&&t(X),o&&t(J),o&&t(Ve),o&&t(Z),o&&t(Ie),o&&t(D),o&&t(at),o&&t(ae),o&&t(st),o&&t(ye),o&&t(nt),o&&t(Y),x(B),o&&t(rt),o&&t(j),o&&t(It),x(fe,o),o&&t(Nt),o&&t(Ne),o&&t(Bt),x(ks,o),o&&t(cp),o&&t(Be),o&&t(dp),o&&t(Pi),o&&t(pp),o&&t(zi),o&&t(mp),o&&t(po),x(Ms),o&&t(hp),o&&t(tt),x(As),x(Jo),o&&t(fp),o&&t(fo),x(Os),o&&t(up),o&&t(ne),x(Ds),x(Is),x(Ns),x(Bs),x(Yo),x(Us),o&&t(gp),o&&t(uo),x(Hs),o&&t(_p),o&&t(ot),x(Xs),x(Ks),o&&t(vp),o&&t(go),x(Js),o&&t(bp),o&&t(G),x(Zs),x(Ys),x(on),x(an),x(sn),x(ra),x(rn),x(cn),o&&t(wp),o&&t(_o),x(pn),o&&t(yp),o&&t(te),x(mn),x(hn),x(gn),x(_n),x(ma),x(bn),x(wn),x(ha),x(kn),x(fa),o&&t(kp),o&&t(vo),x(Tn),o&&t(Tp),o&&t(Te),o&&t($p),x($n,o),o&&t(xp),o&&t(bo),x(xn),o&&t(Wp),o&&t(wo),x(Wn),o&&t(jp),o&&t(yo),x(Vn),o&&t(Vp),o&&t(ko),x(Fn),o&&t(Fp),o&&t(Mt),x(Cn),x(Pn),o&&t(Ep),o&&t(At),x(zn),x(An),o&&t(Cp),o&&t(To),x(Ln),o&&t(qp),o&&t(Ae),x(On),x(Rn),x(wa),x(ya),o&&t(Pp),o&&t(xo),x(Un),o&&t(zp),o&&t(Le),x(Hn),x(Zn),x(Ta),x($a),x(xa),o&&t(Mp),o&&t(Vo),x(Qn),o&&t(Ap),o&&t(ue),x(Yn),x(nr),x(ja),x(Va),x(Fa),o&&t(Lp),o&&t(Eo),x(rr),o&&t(Op),o&&t(ge),x(ir),x(hr),x(Ca),x(qa),o&&t(Dp),o&&t(qo),x(fr),o&&t(Sp),o&&t(_e),x(ur),x(yr),x(za),x(Ma),o&&t(Ip),o&&t(zo),x(kr),o&&t(Np),o&&t(Oe),x(Tr),x(Vr),x(La),x(Oa),o&&t(Bp),o&&t(Lo),x(Fr),o&&t(Rp),o&&t(ve),x(Er),x(Sa),x(zr),x(Ia),x(Na),o&&t(Up),o&&t(Do),x(Mr),o&&t(Hp),o&&t(be),x(Ar),x(Ra),x(Ir),x(Ua),x(Ha),o&&t(Xp),o&&t(Io),x(Nr),o&&t(Gp),o&&t(re),x(Br),x(Yr),x(Ga),x(Ka),o&&t(Kp),o&&t(Bo),x(ei),o&&t(Jp),o&&t(ie),x(ti),x(di),x(Za),x(Qa),o&&t(Zp),o&&t(Ho),x(pi),o&&t(Qp),o&&t(le),x(mi),x(yi),x(es),x(ts)}}}const V4={local:"wav2vec2",sections:[{local:"overview",title:"Overview"},{local:"resources",title:"Resources"},{local:"transformers.Wav2Vec2Config",title:"Wav2Vec2Config"},{local:"transformers.Wav2Vec2CTCTokenizer",title:"Wav2Vec2CTCTokenizer"},{local:"transformers.Wav2Vec2FeatureExtractor",title:"Wav2Vec2FeatureExtractor"},{local:"transformers.Wav2Vec2Processor",title:"Wav2Vec2Processor"},{local:"transformers.Wav2Vec2ProcessorWithLM",sections:[{local:"decoding-multiple-audios",title:"Decoding multiple audios"}],title:"Wav2Vec2ProcessorWithLM"},{local:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput",title:"Wav2Vec2 specific outputs"},{local:"transformers.Wav2Vec2Model",title:"Wav2Vec2Model"},{local:"transformers.Wav2Vec2ForCTC",title:"Wav2Vec2ForCTC"},{local:"transformers.Wav2Vec2ForSequenceClassification",title:"Wav2Vec2ForSequenceClassification"},{local:"transformers.Wav2Vec2ForAudioFrameClassification",title:"Wav2Vec2ForAudioFrameClassification"},{local:"transformers.Wav2Vec2ForXVector",title:"Wav2Vec2ForXVector"},{local:"transformers.Wav2Vec2ForPreTraining",title:"Wav2Vec2ForPreTraining"},{local:"transformers.TFWav2Vec2Model",title:"TFWav2Vec2Model"},{local:"transformers.TFWav2Vec2ForCTC",title:"TFWav2Vec2ForCTC"},{local:"transformers.FlaxWav2Vec2Model",title:"FlaxWav2Vec2Model"},{local:"transformers.FlaxWav2Vec2ForCTC",title:"FlaxWav2Vec2ForCTC"},{local:"transformers.FlaxWav2Vec2ForPreTraining",title:"FlaxWav2Vec2ForPreTraining"}],title:"Wav2Vec2"};function F4(W){return GT(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class L4 extends RT{constructor(d){super();UT(this,d,F4,j4,HT,{})}}export{L4 as default,V4 as metadata};
