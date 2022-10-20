import{S as B0,i as U0,s as R0,e as n,k as p,w,t as a,M as H0,c as r,d as t,m,a as i,x as y,h as s,b as d,G as e,g as _,y as k,q as T,o as x,B as $,v as X0,L as je}from"../../chunks/vendor-hf-doc-builder.js";import{T as xe}from"../../chunks/Tip-hf-doc-builder.js";import{D as F}from"../../chunks/Docstring-hf-doc-builder.js";import{C as be}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ae}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as $e}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function G0(W){let c,b,f,u,v;return u=new be({props:{code:`from transformers import Wav2Vec2Config, Wav2Vec2Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){x(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),$(u,l)}}}function K0(W){let c,b,f,u,v;return u=new be({props:{code:`# Let's see how to retrieve time steps for a model
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
[{<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;WHY&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.42</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.54</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;DOES&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.64</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.9</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;MILISANDRA&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">2.26</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">2.9</span>}]`}}),{c(){c=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){x(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),$(u,l)}}}function J0(W){let c,b,f,u,v,l,h,V;return{c(){c=n("p"),b=a("This class method is simply calling "),f=n("a"),u=a("save_pretrained()"),v=a(` and
`),l=n("a"),h=a("save_pretrained()"),V=a(`. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(M){c=r(M,"P",{});var A=i(c);b=s(A,"This class method is simply calling "),f=r(A,"A",{href:!0});var P=i(f);u=s(P,"save_pretrained()"),P.forEach(t),v=s(A,` and
`),l=r(A,"A",{href:!0});var z=i(l);h=s(z,"save_pretrained()"),z.forEach(t),V=s(A,`. Please refer to the docstrings of the
methods above for more information.`),A.forEach(t),this.h()},h(){d(f,"href","/docs/transformers/main/en/internal/image_processing_utils#transformers.FeatureExtractionMixin.save_pretrained"),d(l,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.save_pretrained")},m(M,A){_(M,c,A),e(c,b),e(c,f),e(f,u),e(c,v),e(c,l),e(l,h),e(c,V)},d(M){M&&t(c)}}}function Z0(W){let c,b,f,u,v,l,h,V,M,A,P,z,N,E;return{c(){c=n("p"),b=a(`This class method is simply calling Wav2Vec2FeatureExtractor\u2019s
`),f=n("a"),u=a("from_pretrained()"),v=a(`, Wav2Vec2CTCTokenizer\u2019s
`),l=n("a"),h=a("from_pretrained()"),V=a(`, and
`),M=n("code"),A=a("pyctcdecode.BeamSearchDecoderCTC.load_from_hf_hub"),P=a("."),z=p(),N=n("p"),E=a("Please refer to the docstrings of the methods above for more information."),this.h()},l(O){c=r(O,"P",{});var q=i(c);b=s(q,`This class method is simply calling Wav2Vec2FeatureExtractor\u2019s
`),f=r(q,"A",{href:!0});var ce=i(f);u=s(ce,"from_pretrained()"),ce.forEach(t),v=s(q,`, Wav2Vec2CTCTokenizer\u2019s
`),l=r(q,"A",{href:!0});var K=i(l);h=s(K,"from_pretrained()"),K.forEach(t),V=s(q,`, and
`),M=r(q,"CODE",{});var S=i(M);A=s(S,"pyctcdecode.BeamSearchDecoderCTC.load_from_hf_hub"),S.forEach(t),P=s(q,"."),q.forEach(t),z=m(O),N=r(O,"P",{});var de=i(N);E=s(de,"Please refer to the docstrings of the methods above for more information."),de.forEach(t),this.h()},h(){d(f,"href","/docs/transformers/main/en/internal/image_processing_utils#transformers.FeatureExtractionMixin.from_pretrained"),d(l,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.from_pretrained")},m(O,q){_(O,c,q),e(c,b),e(c,f),e(f,u),e(c,v),e(c,l),e(l,h),e(c,V),e(c,M),e(M,A),e(c,P),_(O,z,q),_(O,N,q),e(N,E)},d(O){O&&t(c),O&&t(z),O&&t(N)}}}function Q0(W){let c,b,f,u,v,l,h,V,M,A,P,z,N,E,O,q,ce,K,S,de;return{c(){c=n("p"),b=a(`This function makes use of Python\u2019s multiprocessing. Currently, multiprocessing is available only on Unix
systems (see this `),f=n("a"),u=a("issue"),v=a(")."),l=p(),h=n("p"),V=a("If you are decoding multiple batches, consider creating a "),M=n("code"),A=a("Pool"),P=a(" and passing it to "),z=n("code"),N=a("batch_decode"),E=a(`. Otherwise,
`),O=n("code"),q=a("batch_decode"),ce=a(" will be very slow since it will create a fresh "),K=n("code"),S=a("Pool"),de=a(" for each call. See usage example below."),this.h()},l(I){c=r(I,"P",{});var U=i(c);b=s(U,`This function makes use of Python\u2019s multiprocessing. Currently, multiprocessing is available only on Unix
systems (see this `),f=r(U,"A",{href:!0,rel:!0});var De=i(f);u=s(De,"issue"),De.forEach(t),v=s(U,")."),U.forEach(t),l=m(I),h=r(I,"P",{});var H=i(h);V=s(H,"If you are decoding multiple batches, consider creating a "),M=r(H,"CODE",{});var J=i(M);A=s(J,"Pool"),J.forEach(t),P=s(H," and passing it to "),z=r(H,"CODE",{});var Se=i(z);N=s(Se,"batch_decode"),Se.forEach(t),E=s(H,`. Otherwise,
`),O=r(H,"CODE",{});var We=i(O);q=s(We,"batch_decode"),We.forEach(t),ce=s(H," will be very slow since it will create a fresh "),K=r(H,"CODE",{});var Z=i(K);S=s(Z,"Pool"),Z.forEach(t),de=s(H," for each call. See usage example below."),H.forEach(t),this.h()},h(){d(f,"href","https://github.com/kensho-technologies/pyctcdecode/issues/65"),d(f,"rel","nofollow")},m(I,U){_(I,c,U),e(c,b),e(c,f),e(f,u),e(c,v),_(I,l,U),_(I,h,U),e(h,V),e(h,M),e(M,A),e(h,P),e(h,z),e(z,N),e(h,E),e(h,O),e(O,q),e(h,ce),e(h,K),e(K,S),e(h,de)},d(I){I&&t(c),I&&t(l),I&&t(h)}}}function Y0(W){let c,b,f,u,v;return u=new be({props:{code:`# Let's see how to retrieve time steps for a model
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
[{<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;WHY&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.42</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.54</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;DOES&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">1.64</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">1.88</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;A&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">2.12</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">2.14</span>}, {<span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;MILE&#x27;</span>, <span class="hljs-string">&#x27;start_time&#x27;</span>: <span class="hljs-number">2.26</span>, <span class="hljs-string">&#x27;end_time&#x27;</span>: <span class="hljs-number">2.46</span>}]`}}),{c(){c=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){x(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),$(u,l)}}}function eT(W){let c,b,f,u,v;return{c(){c=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function tT(W){let c,b,f,u,v;return u=new be({props:{code:`from transformers import Wav2Vec2Processor, Wav2Vec2Model
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
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">768</span>]`}}),{c(){c=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){x(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),$(u,l)}}}function oT(W){let c,b,f,u,v;return{c(){c=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function aT(W){let c,b,f,u,v;return u=new be({props:{code:`from transformers import Wav2Vec2Processor, Wav2Vec2ForCTC
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
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>`}}),{c(){c=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){x(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),$(u,l)}}}function sT(W){let c,b;return c=new be({props:{code:`inputs["labels"] = processor(text=dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(text=dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">53.48</span>`}}),{c(){w(c.$$.fragment)},l(f){y(c.$$.fragment,f)},m(f,u){k(c,f,u),b=!0},p:je,i(f){b||(T(c.$$.fragment,f),b=!0)},o(f){x(c.$$.fragment,f),b=!1},d(f){$(c,f)}}}function nT(W){let c,b,f,u,v;return{c(){c=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function rT(W){let c,b,f,u,v;return u=new be({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ForSequenceClassification
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
<span class="hljs-string">&#x27;_unknown_&#x27;</span>`}}),{c(){c=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){x(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),$(u,l)}}}function iT(W){let c,b;return c=new be({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">6.54</span>`}}),{c(){w(c.$$.fragment)},l(f){y(c.$$.fragment,f)},m(f,u){k(c,f,u),b=!0},p:je,i(f){b||(T(c.$$.fragment,f),b=!0)},o(f){x(c.$$.fragment,f),b=!1},d(f){$(c,f)}}}function lT(W){let c,b,f,u,v;return{c(){c=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function cT(W){let c,b,f,u,v;return u=new be({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ForAudioFrameClassification
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
[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>]`}}),{c(){c=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){x(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),$(u,l)}}}function dT(W){let c,b,f,u,v;return{c(){c=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function pT(W){let c,b,f,u,v;return u=new be({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ForXVector
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
<span class="hljs-number">0.98</span>`}}),{c(){c=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){x(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),$(u,l)}}}function mT(W){let c,b,f,u,v;return{c(){c=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function hT(W){let c,b,f,u,v;return u=new be({props:{code:`import torch
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
<span class="hljs-meta">... </span>).loss`}}),{c(){c=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){x(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),$(u,l)}}}function fT(W){let c,b,f,u,v,l,h,V,M,A,P,z,N,E,O,q,ce,K,S,de,I,U,De,H,J,Se,We,Z,Ke,Tt,Ie,D,Q,Ye,oe,Je,xt,Ve,Fe,$t,R,jt,Ee,et,we,Ce,qe,Wt,he,tt,Y,ye,Pe,B,Vt,ee,Ft,ot;return{c(){c=n("p"),b=a("TensorFlow models and layers in "),f=n("code"),u=a("transformers"),v=a(" accept two formats as input:"),l=p(),h=n("ul"),V=n("li"),M=a("having all inputs as keyword arguments (like PyTorch models), or"),A=p(),P=n("li"),z=a("having all inputs as a list, tuple or dict in the first positional argument."),N=p(),E=n("p"),O=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),q=n("code"),ce=a("model.fit()"),K=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=n("code"),de=a("model.fit()"),I=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),U=n("code"),De=a("fit()"),H=a(" and "),J=n("code"),Se=a("predict()"),We=a(`, such as when creating your own layers or models with
the Keras `),Z=n("code"),Ke=a("Functional"),Tt=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Ie=p(),D=n("ul"),Q=n("li"),Ye=a("a single Tensor with "),oe=n("code"),Je=a("input_values"),xt=a(" only and nothing else: "),Ve=n("code"),Fe=a("model(input_values)"),$t=p(),R=n("li"),jt=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Ee=n("code"),et=a("model([input_values, attention_mask])"),we=a(" or "),Ce=n("code"),qe=a("model([input_values, attention_mask, token_type_ids])"),Wt=p(),he=n("li"),tt=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=n("code"),ye=a('model({"input_values": input_values, "token_type_ids": token_type_ids})'),Pe=p(),B=n("p"),Vt=a(`Note that when creating models and layers with
`),ee=n("a"),Ft=a("subclassing"),ot=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(j){c=r(j,"P",{});var C=i(c);b=s(C,"TensorFlow models and layers in "),f=r(C,"CODE",{});var Zt=i(f);u=s(Zt,"transformers"),Zt.forEach(t),v=s(C," accept two formats as input:"),C.forEach(t),l=m(j),h=r(j,"UL",{});var se=i(h);V=r(se,"LI",{});var Qt=i(V);M=s(Qt,"having all inputs as keyword arguments (like PyTorch models), or"),Qt.forEach(t),A=m(se),P=r(se,"LI",{});var at=i(P);z=s(at,"having all inputs as a list, tuple or dict in the first positional argument."),at.forEach(t),se.forEach(t),N=m(j),E=r(j,"P",{});var L=i(E);O=s(L,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),q=r(L,"CODE",{});var Yt=i(q);ce=s(Yt,"model.fit()"),Yt.forEach(t),K=s(L,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(L,"CODE",{});var Ze=i(S);de=s(Ze,"model.fit()"),Ze.forEach(t),I=s(L,` supports! If, however, you want to use the second
format outside of Keras methods like `),U=r(L,"CODE",{});var eo=i(U);De=s(eo,"fit()"),eo.forEach(t),H=s(L," and "),J=r(L,"CODE",{});var to=i(J);Se=s(to,"predict()"),to.forEach(t),We=s(L,`, such as when creating your own layers or models with
the Keras `),Z=r(L,"CODE",{});var oo=i(Z);Ke=s(oo,"Functional"),oo.forEach(t),Tt=s(L,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),L.forEach(t),Ie=m(j),D=r(j,"UL",{});var X=i(D);Q=r(X,"LI",{});var ze=i(Q);Ye=s(ze,"a single Tensor with "),oe=r(ze,"CODE",{});var st=i(oe);Je=s(st,"input_values"),st.forEach(t),xt=s(ze," only and nothing else: "),Ve=r(ze,"CODE",{});var ao=i(Ve);Fe=s(ao,"model(input_values)"),ao.forEach(t),ze.forEach(t),$t=m(X),R=r(X,"LI",{});var Me=i(R);jt=s(Me,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Ee=r(Me,"CODE",{});var nt=i(Ee);et=s(nt,"model([input_values, attention_mask])"),nt.forEach(t),we=s(Me," or "),Ce=r(Me,"CODE",{});var so=i(Ce);qe=s(so,"model([input_values, attention_mask, token_type_ids])"),so.forEach(t),Me.forEach(t),Wt=m(X),he=r(X,"LI",{});var Et=i(he);tt=s(Et,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r(Et,"CODE",{});var no=i(Y);ye=s(no,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),no.forEach(t),Et.forEach(t),X.forEach(t),Pe=m(j),B=r(j,"P",{});var pe=i(B);Vt=s(pe,`Note that when creating models and layers with
`),ee=r(pe,"A",{href:!0,rel:!0});var Nt=i(ee);Ft=s(Nt,"subclassing"),Nt.forEach(t),ot=s(pe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),pe.forEach(t),this.h()},h(){d(ee,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),d(ee,"rel","nofollow")},m(j,C){_(j,c,C),e(c,b),e(c,f),e(f,u),e(c,v),_(j,l,C),_(j,h,C),e(h,V),e(V,M),e(h,A),e(h,P),e(P,z),_(j,N,C),_(j,E,C),e(E,O),e(E,q),e(q,ce),e(E,K),e(E,S),e(S,de),e(E,I),e(E,U),e(U,De),e(E,H),e(E,J),e(J,Se),e(E,We),e(E,Z),e(Z,Ke),e(E,Tt),_(j,Ie,C),_(j,D,C),e(D,Q),e(Q,Ye),e(Q,oe),e(oe,Je),e(Q,xt),e(Q,Ve),e(Ve,Fe),e(D,$t),e(D,R),e(R,jt),e(R,Ee),e(Ee,et),e(R,we),e(R,Ce),e(Ce,qe),e(D,Wt),e(D,he),e(he,tt),e(he,Y),e(Y,ye),_(j,Pe,C),_(j,B,C),e(B,Vt),e(B,ee),e(ee,Ft),e(B,ot)},d(j){j&&t(c),j&&t(l),j&&t(h),j&&t(N),j&&t(E),j&&t(Ie),j&&t(D),j&&t(Pe),j&&t(B)}}}function uT(W){let c,b,f,u,v;return{c(){c=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function gT(W){let c,b,f,u,v;return u=new be({props:{code:`from transformers import Wav2Vec2Processor, TFWav2Vec2Model
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
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),{c(){c=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){x(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),$(u,l)}}}function _T(W){let c,b,f,u,v,l,h,V,M,A,P,z,N,E,O,q,ce,K,S,de,I,U,De,H,J,Se,We,Z,Ke,Tt,Ie,D,Q,Ye,oe,Je,xt,Ve,Fe,$t,R,jt,Ee,et,we,Ce,qe,Wt,he,tt,Y,ye,Pe,B,Vt,ee,Ft,ot;return{c(){c=n("p"),b=a("TensorFlow models and layers in "),f=n("code"),u=a("transformers"),v=a(" accept two formats as input:"),l=p(),h=n("ul"),V=n("li"),M=a("having all inputs as keyword arguments (like PyTorch models), or"),A=p(),P=n("li"),z=a("having all inputs as a list, tuple or dict in the first positional argument."),N=p(),E=n("p"),O=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),q=n("code"),ce=a("model.fit()"),K=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=n("code"),de=a("model.fit()"),I=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),U=n("code"),De=a("fit()"),H=a(" and "),J=n("code"),Se=a("predict()"),We=a(`, such as when creating your own layers or models with
the Keras `),Z=n("code"),Ke=a("Functional"),Tt=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Ie=p(),D=n("ul"),Q=n("li"),Ye=a("a single Tensor with "),oe=n("code"),Je=a("input_values"),xt=a(" only and nothing else: "),Ve=n("code"),Fe=a("model(input_values)"),$t=p(),R=n("li"),jt=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Ee=n("code"),et=a("model([input_values, attention_mask])"),we=a(" or "),Ce=n("code"),qe=a("model([input_values, attention_mask, token_type_ids])"),Wt=p(),he=n("li"),tt=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=n("code"),ye=a('model({"input_values": input_values, "token_type_ids": token_type_ids})'),Pe=p(),B=n("p"),Vt=a(`Note that when creating models and layers with
`),ee=n("a"),Ft=a("subclassing"),ot=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(j){c=r(j,"P",{});var C=i(c);b=s(C,"TensorFlow models and layers in "),f=r(C,"CODE",{});var Zt=i(f);u=s(Zt,"transformers"),Zt.forEach(t),v=s(C," accept two formats as input:"),C.forEach(t),l=m(j),h=r(j,"UL",{});var se=i(h);V=r(se,"LI",{});var Qt=i(V);M=s(Qt,"having all inputs as keyword arguments (like PyTorch models), or"),Qt.forEach(t),A=m(se),P=r(se,"LI",{});var at=i(P);z=s(at,"having all inputs as a list, tuple or dict in the first positional argument."),at.forEach(t),se.forEach(t),N=m(j),E=r(j,"P",{});var L=i(E);O=s(L,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),q=r(L,"CODE",{});var Yt=i(q);ce=s(Yt,"model.fit()"),Yt.forEach(t),K=s(L,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(L,"CODE",{});var Ze=i(S);de=s(Ze,"model.fit()"),Ze.forEach(t),I=s(L,` supports! If, however, you want to use the second
format outside of Keras methods like `),U=r(L,"CODE",{});var eo=i(U);De=s(eo,"fit()"),eo.forEach(t),H=s(L," and "),J=r(L,"CODE",{});var to=i(J);Se=s(to,"predict()"),to.forEach(t),We=s(L,`, such as when creating your own layers or models with
the Keras `),Z=r(L,"CODE",{});var oo=i(Z);Ke=s(oo,"Functional"),oo.forEach(t),Tt=s(L,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),L.forEach(t),Ie=m(j),D=r(j,"UL",{});var X=i(D);Q=r(X,"LI",{});var ze=i(Q);Ye=s(ze,"a single Tensor with "),oe=r(ze,"CODE",{});var st=i(oe);Je=s(st,"input_values"),st.forEach(t),xt=s(ze," only and nothing else: "),Ve=r(ze,"CODE",{});var ao=i(Ve);Fe=s(ao,"model(input_values)"),ao.forEach(t),ze.forEach(t),$t=m(X),R=r(X,"LI",{});var Me=i(R);jt=s(Me,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Ee=r(Me,"CODE",{});var nt=i(Ee);et=s(nt,"model([input_values, attention_mask])"),nt.forEach(t),we=s(Me," or "),Ce=r(Me,"CODE",{});var so=i(Ce);qe=s(so,"model([input_values, attention_mask, token_type_ids])"),so.forEach(t),Me.forEach(t),Wt=m(X),he=r(X,"LI",{});var Et=i(he);tt=s(Et,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r(Et,"CODE",{});var no=i(Y);ye=s(no,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),no.forEach(t),Et.forEach(t),X.forEach(t),Pe=m(j),B=r(j,"P",{});var pe=i(B);Vt=s(pe,`Note that when creating models and layers with
`),ee=r(pe,"A",{href:!0,rel:!0});var Nt=i(ee);Ft=s(Nt,"subclassing"),Nt.forEach(t),ot=s(pe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),pe.forEach(t),this.h()},h(){d(ee,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),d(ee,"rel","nofollow")},m(j,C){_(j,c,C),e(c,b),e(c,f),e(f,u),e(c,v),_(j,l,C),_(j,h,C),e(h,V),e(V,M),e(h,A),e(h,P),e(P,z),_(j,N,C),_(j,E,C),e(E,O),e(E,q),e(q,ce),e(E,K),e(E,S),e(S,de),e(E,I),e(E,U),e(U,De),e(E,H),e(E,J),e(J,Se),e(E,We),e(E,Z),e(Z,Ke),e(E,Tt),_(j,Ie,C),_(j,D,C),e(D,Q),e(Q,Ye),e(Q,oe),e(oe,Je),e(Q,xt),e(Q,Ve),e(Ve,Fe),e(D,$t),e(D,R),e(R,jt),e(R,Ee),e(Ee,et),e(R,we),e(R,Ce),e(Ce,qe),e(D,Wt),e(D,he),e(he,tt),e(he,Y),e(Y,ye),_(j,Pe,C),_(j,B,C),e(B,Vt),e(B,ee),e(ee,Ft),e(B,ot)},d(j){j&&t(c),j&&t(l),j&&t(h),j&&t(N),j&&t(E),j&&t(Ie),j&&t(D),j&&t(Pe),j&&t(B)}}}function vT(W){let c,b,f,u,v;return{c(){c=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function bT(W){let c,b,f,u,v;return u=new be({props:{code:`import tensorflow as tf
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, labels=labels).loss`}}),{c(){c=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){x(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),$(u,l)}}}function wT(W){let c,b,f,u,v;return{c(){c=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function yT(W){let c,b,f,u,v;return u=new be({props:{code:`from transformers import Wav2Vec2Processor, FlaxWav2Vec2Model
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
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),{c(){c=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){x(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),$(u,l)}}}function kT(W){let c,b,f,u,v;return{c(){c=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function TT(W){let c,b,f,u,v;return u=new be({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># should give:  &quot;A MAN SAID TO THE UNIVERSE SIR I EXIST&quot;</span>`}}),{c(){c=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){x(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),$(u,l)}}}function xT(W){let c,b,f,u,v;return{c(){c=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,b),e(c,f),e(f,u),e(c,v)},d(l){l&&t(c)}}}function $T(W){let c,b,f,u,v;return u=new be({props:{code:`import optax
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> np.asarray(cosine_sim)[mask_time_indices].mean() &gt; <span class="hljs-number">0.5</span>`}}),{c(){c=n("p"),b=a("Example:"),f=p(),w(u.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,b),_(l,f,h),k(u,l,h),v=!0},p:je,i(l){v||(T(u.$$.fragment,l),v=!0)},o(l){x(u.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),$(u,l)}}}function jT(W){let c,b,f,u,v,l,h,V,M,A,P,z,N,E,O,q,ce,K,S,de,I,U,De,H,J,Se,We,Z,Ke,Tt,Ie,D,Q,Ye,oe,Je,xt,Ve,Fe,$t,R,jt,Ee,et,we,Ce,qe,Wt,he,tt,Y,ye,Pe,B,Vt,ee,Ft,ot,j,C,Zt,se,Qt,at,L,Yt,Ze,eo,to,oo,X,ze,st,ao,Me,nt,so,Et,no,pe,Nt,ro,Uo,fl,fs,Wm,ul,Vm,jd,ne,us,Fm,gl,Em,Cm,gs,qm,ri,Pm,zm,Mm,Ro,_s,Am,_l,Om,Lm,ii,vs,Dm,rt,bs,Sm,vl,Im,Nm,ws,Bm,bl,Um,Rm,Hm,Ho,Xm,Xo,ys,Gm,wl,Km,Wd,io,Go,yl,ks,Jm,kl,Zm,Vd,Qe,Ts,Qm,Tl,Ym,eh,xs,th,li,oh,ah,sh,Ko,$s,nh,xl,rh,Fd,lo,Jo,$l,js,ih,jl,lh,Ed,G,Ws,ch,Wl,dh,ph,Ne,ci,mh,hh,di,fh,uh,pi,gh,_h,Vs,Vl,vh,bh,wh,mi,yh,kh,Th,Zo,Fs,xh,Ct,$h,Es,Fl,jh,Wh,Vh,El,Fh,Eh,Cs,Cl,Ch,qh,Ph,zh,Qo,qs,Mh,qt,Ah,hi,Oh,Lh,ql,Dh,Sh,fi,Ih,Nh,Bh,ui,Ps,Uh,Bt,zs,Rh,Ms,Hh,gi,Xh,Gh,Kh,Yo,Jh,ea,As,Zh,Os,Qh,_i,Yh,ef,tf,ta,Ls,of,Ds,af,vi,sf,nf,Cd,co,oa,Pl,Ss,rf,zl,lf,qd,te,Is,cf,Ml,df,pf,aa,Ns,mf,Pt,hf,Bs,Al,ff,uf,gf,Ol,_f,vf,Us,Ll,bf,wf,yf,kf,sa,Rs,Tf,zt,xf,bi,$f,jf,Dl,Wf,Vf,wi,Ff,Ef,Cf,Ut,Hs,qf,Xs,Pf,yi,zf,Mf,Af,na,Of,ki,Gs,Lf,it,Ks,Df,Sl,Sf,If,ra,Nf,Js,Bf,Ti,Uf,Rf,Hf,Rt,Zs,Xf,Il,Gf,Kf,ia,Pd,po,la,Nl,Qs,Jf,Bl,Zf,zd,ke,Qf,xi,Yf,eu,Ul,tu,ou,$i,au,su,ji,nu,ru,Rl,iu,lu,Md,Ys,Ad,mo,ca,Hl,en,cu,Xl,du,Od,ho,tn,pu,on,mu,Gl,hu,fu,Ld,fo,an,uu,Kl,gu,Dd,uo,sn,_u,nn,vu,Wi,bu,wu,Sd,Mt,rn,yu,ln,ku,Jl,Tu,xu,$u,da,cn,ju,Zl,Wu,Id,At,dn,Vu,pn,Fu,Ql,Eu,Cu,qu,pa,mn,Pu,Yl,zu,Nd,go,ma,ec,hn,Mu,tc,Au,Bd,Ae,fn,Ou,un,Lu,gn,Du,Su,Iu,_n,Nu,Vi,Bu,Uu,Ru,vn,Hu,bn,Xu,Gu,Ku,lt,wn,Ju,_o,Zu,Fi,Qu,Yu,oc,eg,tg,og,ha,ag,fa,Ud,vo,ua,ac,yn,sg,sc,ng,Rd,Oe,kn,rg,bo,ig,nc,lg,cg,Tn,dg,pg,mg,xn,hg,Ei,fg,ug,gg,$n,_g,jn,vg,bg,wg,Be,Wn,yg,wo,kg,Ci,Tg,xg,rc,$g,jg,Wg,ga,Vg,_a,Fg,va,Hd,yo,ba,ic,Vn,Eg,lc,Cg,Xd,fe,Fn,qg,cc,Pg,zg,En,Mg,Cn,Ag,Og,Lg,qn,Dg,qi,Sg,Ig,Ng,Pn,Bg,zn,Ug,Rg,Hg,Ue,Mn,Xg,ko,Gg,Pi,Kg,Jg,dc,Zg,Qg,Yg,wa,e_,ya,t_,ka,Gd,To,Ta,pc,An,o_,mc,a_,Kd,ue,On,s_,hc,n_,r_,Ln,i_,Dn,l_,c_,d_,Sn,p_,zi,m_,h_,f_,In,u_,Nn,g_,__,v_,ct,Bn,b_,xo,w_,Mi,y_,k_,fc,T_,x_,$_,xa,j_,$a,Jd,$o,ja,uc,Un,W_,gc,V_,Zd,ge,Rn,F_,_c,E_,C_,Hn,q_,Xn,P_,z_,M_,Gn,A_,Ai,O_,L_,D_,Kn,S_,Jn,I_,N_,B_,dt,Zn,U_,jo,R_,Oi,H_,X_,vc,G_,K_,J_,Wa,Z_,Va,Qd,Wo,Fa,bc,Qn,Q_,wc,Y_,Yd,Le,Yn,ev,Vo,tv,yc,ov,av,er,sv,nv,rv,tr,iv,Li,lv,cv,dv,or,pv,ar,mv,hv,fv,pt,sr,uv,Fo,gv,Di,_v,vv,kc,bv,wv,yv,Ea,kv,Ca,ep,Eo,qa,Tc,nr,Tv,xc,xv,tp,_e,rr,$v,$c,jv,Wv,ir,Vv,Si,Fv,Ev,Cv,lr,qv,cr,Pv,zv,Mv,Pa,Av,mt,dr,Ov,Co,Lv,Ii,Dv,Sv,jc,Iv,Nv,Bv,za,Uv,Ma,op,qo,Aa,Wc,pr,Rv,Vc,Hv,ap,ve,mr,Xv,hr,Gv,Fc,Kv,Jv,Zv,fr,Qv,Ni,Yv,e2,t2,ur,o2,gr,a2,s2,n2,Oa,r2,ht,_r,i2,Po,l2,Bi,c2,d2,Ec,p2,m2,h2,La,f2,Da,sp,zo,Sa,Cc,vr,u2,qc,g2,np,re,br,_2,wr,v2,yr,b2,w2,y2,kr,k2,Ui,T2,x2,$2,Tr,j2,xr,W2,V2,F2,Pc,E2,C2,Ot,zc,$r,q2,P2,Mc,jr,z2,M2,Ac,Wr,A2,O2,Oc,Vr,L2,D2,ft,Fr,S2,Mo,I2,Lc,N2,B2,Dc,U2,R2,H2,Ia,X2,Na,rp,Ao,Ba,Sc,Er,G2,Ic,K2,ip,ie,Cr,J2,Oo,Z2,Nc,Q2,Y2,qr,eb,tb,ob,Pr,ab,Ri,sb,nb,rb,zr,ib,Mr,lb,cb,db,Bc,pb,mb,Lt,Uc,Ar,hb,fb,Rc,Or,ub,gb,Hc,Lr,_b,vb,Xc,Dr,bb,wb,ut,Sr,yb,Lo,kb,Gc,Tb,xb,Kc,$b,jb,Wb,Ua,Vb,Ra,lp,Do,Ha,Jc,Ir,Fb,Zc,Eb,cp,le,Nr,Cb,So,qb,Qc,Pb,zb,Br,Mb,Ab,Ob,Ur,Lb,Hi,Db,Sb,Ib,Rr,Nb,Hr,Bb,Ub,Rb,Yc,Hb,Xb,Dt,ed,Xr,Gb,Kb,td,Gr,Jb,Zb,od,Kr,Qb,Yb,ad,Jr,ew,tw,gt,Zr,ow,Io,aw,Xi,sw,nw,sd,rw,iw,lw,Xa,cw,Ga,dp;return l=new ae({}),E=new ae({}),B=new ae({}),C=new F({props:{name:"class transformers.Wav2Vec2Config",anchor:"transformers.Wav2Vec2Config",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"feat_quantizer_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"num_codevectors_per_group",val:" = 320"},{name:"num_codevector_groups",val:" = 2"},{name:"contrastive_logits_temperature",val:" = 0.1"},{name:"num_negatives",val:" = 100"},{name:"codevector_dim",val:" = 256"},{name:"proj_codevector_dim",val:" = 256"},{name:"diversity_loss_weight",val:" = 0.1"},{name:"ctc_loss_reduction",val:" = 'sum'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"tdnn_dim",val:" = (512, 512, 512, 512, 1500)"},{name:"tdnn_kernel",val:" = (5, 3, 3, 1, 1)"},{name:"tdnn_dilation",val:" = (1, 2, 3, 1, 1)"},{name:"xvector_output_dim",val:" = 512"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"add_adapter",val:" = False"},{name:"adapter_kernel_size",val:" = 3"},{name:"adapter_stride",val:" = 2"},{name:"num_adapter_layers",val:" = 3"},{name:"output_hidden_size",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
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
if <code>add_adapter is True</code>.`,name:"output_hidden_size"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/configuration_wav2vec2.py#L32"}}),pe=new $e({props:{anchor:"transformers.Wav2Vec2Config.example",$$slots:{default:[G0]},$$scope:{ctx:W}}}),fs=new ae({}),us=new F({props:{name:"class transformers.Wav2Vec2CTCTokenizer",anchor:"transformers.Wav2Vec2CTCTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"word_delimiter_token",val:" = '|'"},{name:"replace_word_delimiter_char",val:" = ' '"},{name:"do_lower_case",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.Wav2Vec2CTCTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.word_delimiter_token",description:`<strong>word_delimiter_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;|&quot;</code>) &#x2014;
The token used for defining the end of a word.`,name:"word_delimiter_token"},{anchor:"transformers.Wav2Vec2CTCTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to accept lowercase input and lowercase the output when decoding.</p>
<p>**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"do_lower_case"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L127"}}),_s=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2CTCTokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"text_target",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair_target",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
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
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2413",returnDescription:`
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
`}}),vs=new F({props:{name:"save_vocabulary",anchor:"transformers.Wav2Vec2CTCTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L595"}}),bs=new F({props:{name:"decode",anchor:"transformers.Wav2Vec2CTCTokenizer.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"output_char_offsets",val:": bool = False"},{name:"output_word_offsets",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
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
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L490",returnDescription:`
<p>The list of decoded
sentences. Will be a <code>Wav2Vec2CTCTokenizerOutput</code> when
<code>output_char_offsets == True</code> or <code>output_word_offsets == True</code>.</p>
`,returnType:`
<p><code>str</code> or <code>Wav2Vec2CTCTokenizerOutput</code></p>
`}}),Ho=new $e({props:{anchor:"transformers.Wav2Vec2CTCTokenizer.decode.example",$$slots:{default:[K0]},$$scope:{ctx:W}}}),ys=new F({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"output_char_offsets",val:": bool = False"},{name:"output_word_offsets",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.output_char_offsets",description:`<strong>output_char_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output character offsets. Character offsets can be used in combination with the
sampling rate and model downsampling rate to compute the time-stamps of transcribed characters.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the Example of <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.decode">decode()</a> to better understand how to make
use of <code>output_char_offsets</code>. <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.batch_decode">batch_decode()</a> works the same way with batched
output.</p>

					</div>`,name:"output_char_offsets"},{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.output_word_offsets",description:`<strong>output_word_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output word offsets. Word offsets can be used in combination with the sampling rate
and model downsampling rate to compute the time-stamps of transcribed words.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the Example of <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.decode">decode()</a> to better understand how to make
use of <code>output_word_offsets</code>. <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.batch_decode">batch_decode()</a> works the same way with batched
output.</p>

					</div>`,name:"output_word_offsets"},{anchor:"transformers.Wav2Vec2CTCTokenizer.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/tokenization_wav2vec2.py#L420",returnDescription:`
<p>The list of decoded
sentences. Will be a <code>Wav2Vec2CTCTokenizerOutput</code> when
<code>output_char_offsets == True</code> or <code>output_word_offsets == True</code>.</p>
`,returnType:`
<p><code>List[str]</code> or <code>Wav2Vec2CTCTokenizerOutput</code></p>
`}}),ks=new ae({}),Ts=new F({props:{name:"class transformers.Wav2Vec2FeatureExtractor",anchor:"transformers.Wav2Vec2FeatureExtractor",parameters:[{name:"feature_size",val:" = 1"},{name:"sampling_rate",val:" = 16000"},{name:"padding_value",val:" = 0.0"},{name:"return_attention_mask",val:" = False"},{name:"do_normalize",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2FeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 1) &#x2014;
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

					</div>`,name:"return_attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/feature_extraction_wav2vec2.py#L31"}}),$s=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2FeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"truncation",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
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
<code>sampling_rate</code> at the forward call to prevent silent errors.`,name:"sampling_rate"},{anchor:"transformers.Wav2Vec2FeatureExtractor.__call__.padding_value",description:"<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;",name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/feature_extraction_wav2vec2.py#L102"}}),js=new ae({}),Ws=new F({props:{name:"class transformers.Wav2Vec2Processor",anchor:"transformers.Wav2Vec2Processor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>Wav2Vec2FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor">Wav2Vec2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Wav2Vec2Processor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
An instance of <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/processing_wav2vec2.py#L26"}}),Fs=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2Processor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/processing_wav2vec2.py#L67"}}),qs=new F({props:{name:"pad",anchor:"transformers.Wav2Vec2Processor.pad",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/processing_wav2vec2.py#L104"}}),Ps=new F({props:{name:"from_pretrained",anchor:"transformers.Wav2Vec2Processor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/processing_wav2vec2.py#L48"}}),zs=new F({props:{name:"save_pretrained",anchor:"transformers.Wav2Vec2Processor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2Processor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.Wav2Vec2Processor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it. You can specify the
repository you want to push to with <code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).
kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/main/en/internal/image_processing_utils#transformers.FeatureExtractionMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L94"}}),Yo=new xe({props:{$$slots:{default:[J0]},$$scope:{ctx:W}}}),As=new F({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2Processor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/processing_wav2vec2.py#L134"}}),Ls=new F({props:{name:"decode",anchor:"transformers.Wav2Vec2Processor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/processing_wav2vec2.py#L141"}}),Ss=new ae({}),Is=new F({props:{name:"class transformers.Wav2Vec2ProcessorWithLM",anchor:"transformers.Wav2Vec2ProcessorWithLM",parameters:[{name:"feature_extractor",val:": FeatureExtractionMixin"},{name:"tokenizer",val:": PreTrainedTokenizerBase"},{name:"decoder",val:": BeamSearchDecoderCTC"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor">Wav2Vec2FeatureExtractor</a>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor">Wav2Vec2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer">Wav2Vec2CTCTokenizer</a>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer">Wav2Vec2CTCTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"},{anchor:"transformers.Wav2Vec2ProcessorWithLM.decoder",description:`<strong>decoder</strong> (<code>pyctcdecode.BeamSearchDecoderCTC</code>) &#x2014;
An instance of <code>pyctcdecode.BeamSearchDecoderCTC</code>. The decoder is a required input.`,name:"decoder"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L67"}}),Ns=new F({props:{name:"__call__",anchor:"transformers.Wav2Vec2ProcessorWithLM.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L214"}}),Rs=new F({props:{name:"pad",anchor:"transformers.Wav2Vec2ProcessorWithLM.pad",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L252"}}),Hs=new F({props:{name:"from_pretrained",anchor:"transformers.Wav2Vec2ProcessorWithLM.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/main/en/internal/image_processing_utils#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both <a href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor">SequenceFeatureExtractor</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a></li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L112"}}),na=new xe({props:{$$slots:{default:[Z0]},$$scope:{ctx:W}}}),Gs=new F({props:{name:"save_pretrained",anchor:"transformers.Wav2Vec2ProcessorWithLM.save_pretrained",parameters:[{name:"save_directory",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L108"}}),Ks=new F({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode",parameters:[{name:"logits",val:": ndarray"},{name:"pool",val:": typing.Union[<bound method BaseContext.Pool of <multiprocessing.context.DefaultContext object at 0x7f42b4dbf400>>, NoneType] = None"},{name:"num_processes",val:": typing.Optional[int] = None"},{name:"beam_width",val:": typing.Optional[int] = None"},{name:"beam_prune_logp",val:": typing.Optional[float] = None"},{name:"token_min_logp",val:": typing.Optional[float] = None"},{name:"hotwords",val:": typing.Optional[typing.Iterable[str]] = None"},{name:"hotword_weight",val:": typing.Optional[float] = None"},{name:"alpha",val:": typing.Optional[float] = None"},{name:"beta",val:": typing.Optional[float] = None"},{name:"unk_score_offset",val:": typing.Optional[float] = None"},{name:"lm_score_boundary",val:": typing.Optional[bool] = None"},{name:"output_word_offsets",val:": bool = False"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.batch_decode.logits",description:`<strong>logits</strong> (<code>np.ndarray</code>) &#x2014;
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
						
<p>Please take a look at the Example of <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ProcessorWithLM.decode">decode()</a> to better understand how to
make use of <code>output_word_offsets</code>. <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ProcessorWithLM.batch_decode">batch_decode()</a> works the same way with
batched output.</p>

					</div>`,name:"output_word_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L283",returnDescription:`
<p><code>~models.wav2vec2.Wav2Vec2DecoderWithLMOutput</code>.</p>
`}}),ra=new xe({props:{$$slots:{default:[Q0]},$$scope:{ctx:W}}}),Zs=new F({props:{name:"decode",anchor:"transformers.Wav2Vec2ProcessorWithLM.decode",parameters:[{name:"logits",val:": ndarray"},{name:"beam_width",val:": typing.Optional[int] = None"},{name:"beam_prune_logp",val:": typing.Optional[float] = None"},{name:"token_min_logp",val:": typing.Optional[float] = None"},{name:"hotwords",val:": typing.Optional[typing.Iterable[str]] = None"},{name:"hotword_weight",val:": typing.Optional[float] = None"},{name:"alpha",val:": typing.Optional[float] = None"},{name:"beta",val:": typing.Optional[float] = None"},{name:"unk_score_offset",val:": typing.Optional[float] = None"},{name:"lm_score_boundary",val:": typing.Optional[bool] = None"},{name:"output_word_offsets",val:": bool = False"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.logits",description:`<strong>logits</strong> (<code>np.ndarray</code>) &#x2014;
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

					</div>`,name:"output_word_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L439",returnDescription:`
<p><code>~models.wav2vec2.Wav2Vec2DecoderWithLMOutput</code>.</p>
`}}),ia=new $e({props:{anchor:"transformers.Wav2Vec2ProcessorWithLM.decode.example",$$slots:{default:[Y0]},$$scope:{ctx:W}}}),Qs=new ae({}),Ys=new be({props:{code:`# Let's see how to use a user-managed pool for batch decoding multiple audios
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
[<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>, <span class="hljs-string">&quot;NOR IS MISTER COULTER&#x27;S MANNER LESS INTERESTING THAN HIS MATTER&quot;</span>]`}}),en=new ae({}),tn=new F({props:{name:"class transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput",anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput",parameters:[{name:"text",val:": typing.Union[typing.List[str], str]"},{name:"logit_score",val:": typing.Union[typing.List[float], float] = None"},{name:"lm_score",val:": typing.Union[typing.List[float], float] = None"},{name:"word_offsets",val:": typing.Union[typing.List[typing.List[typing.Dict[str, typing.Union[int, str]]]], typing.List[typing.Dict[str, typing.Union[int, str]]]] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.text",description:`<strong>text</strong> (list of <code>str</code> or <code>str</code>) &#x2014;
Decoded logits in text from. Usually the speech transcription.`,name:"text"},{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.logit_score",description:`<strong>logit_score</strong> (list of <code>float</code> or <code>float</code>) &#x2014;
Total logit score of the beam associated with produced text.`,name:"logit_score"},{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.lm_score",description:`<strong>lm_score</strong> (list of <code>float</code>) &#x2014;
Fused lm_score of the beam associated with produced text.`,name:"lm_score"},{anchor:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput.word_offsets",description:`<strong>word_offsets</strong> (list of <code>List[Dict[str, Union[int, str]]]</code> or <code>List[Dict[str, Union[int, str]]]</code>) &#x2014;
Offsets of the decoded words. In combination with sampling rate and model downsampling rate word offsets
can be used to compute time stamps for each word.`,name:"word_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2_with_lm/processing_wav2vec2_with_lm.py#L45"}}),an=new F({props:{name:"class transformers.modeling_outputs.Wav2Vec2BaseModelOutput",anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"extract_features",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput.extract_features",description:`<strong>extract_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, conv_dim[-1])</code>) &#x2014;
Sequence of extracted feature vectors of the last convolutional layer of the model.`,name:"extract_features"},{anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.modeling_outputs.Wav2Vec2BaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/modeling_outputs.py#L976"}}),sn=new F({props:{name:"class transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput",anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"projected_states",val:": FloatTensor = None"},{name:"projected_quantized_states",val:": FloatTensor = None"},{name:"codevector_perplexity",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"contrastive_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"diversity_loss",val:": typing.Optional[torch.FloatTensor] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2.modeling_wav2vec2.Wav2Vec2ForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
The diversity loss (L_d) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official paper</a> .`,name:"diversity_loss"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L94"}}),rn=new F({props:{name:"class transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput",parameters:[{name:"last_hidden_state",val:": ndarray = None"},{name:"extract_features",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.extract_features",description:`<strong>extract_features</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, last_conv_dim)</code>) &#x2014;
Sequence of extracted feature vectors of the last convolutional layer of the model with <code>last_conv_dim</code>
being the dimension of the last convolutional layer.`,name:"extract_features"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L46"}}),cn=new F({props:{name:"replace",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2BaseModelOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/flax/struct.py#L108"}}),dn=new F({props:{name:"class transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput",parameters:[{name:"projected_states",val:": ndarray = None"},{name:"projected_quantized_states",val:": ndarray = None"},{name:"codevector_perplexity",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when model is in train mode, <code>jnp.ndarray</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L76"}}),mn=new F({props:{name:"replace",anchor:"transformers.models.wav2vec2.modeling_flax_wav2vec2.FlaxWav2Vec2ForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/flax/struct.py#L108"}}),hn=new ae({}),fn=new F({props:{name:"class transformers.Wav2Vec2Model",anchor:"transformers.Wav2Vec2Model",parameters:[{name:"config",val:": Wav2Vec2Config"}],parametersDescription:[{anchor:"transformers.Wav2Vec2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1187"}}),wn=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2Model.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2Model.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1273",returnDescription:`
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
`}}),ha=new xe({props:{$$slots:{default:[eT]},$$scope:{ctx:W}}}),fa=new $e({props:{anchor:"transformers.Wav2Vec2Model.forward.example",$$slots:{default:[tT]},$$scope:{ctx:W}}}),yn=new ae({}),kn=new F({props:{name:"class transformers.Wav2Vec2ForCTC",anchor:"transformers.Wav2Vec2ForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1608"}}),Wn=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForCTC.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1649",returnDescription:`
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
`}}),ga=new xe({props:{$$slots:{default:[oT]},$$scope:{ctx:W}}}),_a=new $e({props:{anchor:"transformers.Wav2Vec2ForCTC.forward.example",$$slots:{default:[aT]},$$scope:{ctx:W}}}),va=new $e({props:{anchor:"transformers.Wav2Vec2ForCTC.forward.example-2",$$slots:{default:[sT]},$$scope:{ctx:W}}}),Vn=new ae({}),Fn=new F({props:{name:"class transformers.Wav2Vec2ForSequenceClassification",anchor:"transformers.Wav2Vec2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1738"}}),Mn=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1783",returnDescription:`
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
`}}),wa=new xe({props:{$$slots:{default:[nT]},$$scope:{ctx:W}}}),ya=new $e({props:{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.example",$$slots:{default:[rT]},$$scope:{ctx:W}}}),ka=new $e({props:{anchor:"transformers.Wav2Vec2ForSequenceClassification.forward.example-2",$$slots:{default:[iT]},$$scope:{ctx:W}}}),An=new ae({}),On=new F({props:{name:"class transformers.Wav2Vec2ForAudioFrameClassification",anchor:"transformers.Wav2Vec2ForAudioFrameClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1861"}}),Bn=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1905",returnDescription:`
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
`}}),xa=new xe({props:{$$slots:{default:[lT]},$$scope:{ctx:W}}}),$a=new $e({props:{anchor:"transformers.Wav2Vec2ForAudioFrameClassification.forward.example",$$slots:{default:[cT]},$$scope:{ctx:W}}}),Un=new ae({}),Rn=new F({props:{name:"class transformers.Wav2Vec2ForXVector",anchor:"transformers.Wav2Vec2ForXVector",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForXVector.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L2023"}}),Zn=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForXVector.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForXVector.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L2085",returnDescription:`
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
`}}),Wa=new xe({props:{$$slots:{default:[dT]},$$scope:{ctx:W}}}),Va=new $e({props:{anchor:"transformers.Wav2Vec2ForXVector.forward.example",$$slots:{default:[pT]},$$scope:{ctx:W}}}),Qn=new ae({}),Yn=new F({props:{name:"class transformers.Wav2Vec2ForPreTraining",anchor:"transformers.Wav2Vec2ForPreTraining",parameters:[{name:"config",val:": Wav2Vec2Config"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1336"}}),sr=new F({props:{name:"forward",anchor:"transformers.Wav2Vec2ForPreTraining.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.BoolTensor] = None"},{name:"sampled_negative_indices",val:": typing.Optional[torch.BoolTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ForPreTraining.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Required input for pre-training.`,name:"sampled_negative_indices"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_wav2vec2.py#L1397",returnDescription:`
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
`}}),Ea=new xe({props:{$$slots:{default:[mT]},$$scope:{ctx:W}}}),Ca=new $e({props:{anchor:"transformers.Wav2Vec2ForPreTraining.forward.example",$$slots:{default:[hT]},$$scope:{ctx:W}}}),nr=new ae({}),rr=new F({props:{name:"class transformers.TFWav2Vec2Model",anchor:"transformers.TFWav2Vec2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWav2Vec2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1461"}}),Pa=new xe({props:{$$slots:{default:[fT]},$$scope:{ctx:W}}}),dr=new F({props:{name:"call",anchor:"transformers.TFWav2Vec2Model.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFWav2Vec2Model.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1467",returnDescription:`
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
`}}),za=new xe({props:{$$slots:{default:[uT]},$$scope:{ctx:W}}}),Ma=new $e({props:{anchor:"transformers.TFWav2Vec2Model.call.example",$$slots:{default:[gT]},$$scope:{ctx:W}}}),pr=new ae({}),mr=new F({props:{name:"class transformers.TFWav2Vec2ForCTC",anchor:"transformers.TFWav2Vec2ForCTC",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWav2Vec2ForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1564"}}),Oa=new xe({props:{$$slots:{default:[_T]},$$scope:{ctx:W}}}),_r=new F({props:{name:"call",anchor:"transformers.TFWav2Vec2ForCTC.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFWav2Vec2ForCTC.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_tf_wav2vec2.py#L1591",returnDescription:`
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
`}}),La=new xe({props:{$$slots:{default:[vT]},$$scope:{ctx:W}}}),Da=new $e({props:{anchor:"transformers.TFWav2Vec2ForCTC.call.example",$$slots:{default:[bT]},$$scope:{ctx:W}}}),vr=new ae({}),br=new F({props:{name:"class transformers.FlaxWav2Vec2Model",anchor:"transformers.FlaxWav2Vec2Model",parameters:[{name:"config",val:": Wav2Vec2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1024)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWav2Vec2Model.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1058"}}),Fr=new F({props:{name:"__call__",anchor:"transformers.FlaxWav2Vec2Model.__call__",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2Model.__call__.input_values",description:`<strong>input_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ia=new xe({props:{$$slots:{default:[wT]},$$scope:{ctx:W}}}),Na=new $e({props:{anchor:"transformers.FlaxWav2Vec2Model.__call__.example",$$slots:{default:[yT]},$$scope:{ctx:W}}}),Er=new ae({}),Cr=new F({props:{name:"class transformers.FlaxWav2Vec2ForCTC",anchor:"transformers.FlaxWav2Vec2ForCTC",parameters:[{name:"config",val:": Wav2Vec2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1024)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWav2Vec2ForCTC.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1176"}}),Sr=new F({props:{name:"__call__",anchor:"transformers.FlaxWav2Vec2ForCTC.__call__",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.input_values",description:`<strong>input_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ua=new xe({props:{$$slots:{default:[kT]},$$scope:{ctx:W}}}),Ra=new $e({props:{anchor:"transformers.FlaxWav2Vec2ForCTC.__call__.example",$$slots:{default:[TT]},$$scope:{ctx:W}}}),Ir=new ae({}),Nr=new F({props:{name:"class transformers.FlaxWav2Vec2ForPreTraining",anchor:"transformers.FlaxWav2Vec2ForPreTraining",parameters:[{name:"config",val:": Wav2Vec2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1024)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Config">Wav2Vec2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxWav2Vec2ForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/wav2vec2/modeling_flax_wav2vec2.py#L1322"}}),Zr=new F({props:{name:"__call__",anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__",parameters:[{name:"input_values",val:""},{name:"attention_mask",val:" = None"},{name:"mask_time_indices",val:" = None"},{name:"gumbel_temperature",val:": int = 1"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"gumbel_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"freeze_feature_encoder",val:": bool = False"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.input_values",description:`<strong>input_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Xa=new xe({props:{$$slots:{default:[xT]},$$scope:{ctx:W}}}),Ga=new $e({props:{anchor:"transformers.FlaxWav2Vec2ForPreTraining.__call__.example",$$slots:{default:[$T]},$$scope:{ctx:W}}}),{c(){c=n("meta"),b=p(),f=n("h1"),u=n("a"),v=n("span"),w(l.$$.fragment),h=p(),V=n("span"),M=a("Wav2Vec2"),A=p(),P=n("h2"),z=n("a"),N=n("span"),w(E.$$.fragment),O=p(),q=n("span"),ce=a("Overview"),K=p(),S=n("p"),de=a("The Wav2Vec2 model was proposed in "),I=n("a"),U=a("wav2vec 2.0: A Framework for Self-Supervised Learning of Speech Representations"),De=a(" by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael Auli."),H=p(),J=n("p"),Se=a("The abstract from the paper is the following:"),We=p(),Z=n("p"),Ke=n("em"),Tt=a(`We show for the first time that learning powerful representations from speech audio alone followed by fine-tuning on
transcribed speech can outperform the best semi-supervised methods while being conceptually simpler. wav2vec 2.0 masks
the speech input in the latent space and solves a contrastive task defined over a quantization of the latent
representations which are jointly learned. Experiments using all labeled data of Librispeech achieve 1.8/3.3 WER on the
clean/other test sets. When lowering the amount of labeled data to one hour, wav2vec 2.0 outperforms the previous state
of the art on the 100 hour subset while using 100 times less labeled data. Using just ten minutes of labeled data and
pre-training on 53k hours of unlabeled data still achieves 4.8/8.2 WER. This demonstrates the feasibility of speech
recognition with limited amounts of labeled data.`),Ie=p(),D=n("p"),Q=a("Tips:"),Ye=p(),oe=n("ul"),Je=n("li"),xt=a("Wav2Vec2 is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),Ve=p(),Fe=n("li"),$t=a(`Wav2Vec2 model was trained using connectionist temporal classification (CTC) so the model output has to be decoded
using `),R=n("a"),jt=a("Wav2Vec2CTCTokenizer"),Ee=a("."),et=p(),we=n("p"),Ce=a("This model was contributed by "),qe=n("a"),Wt=a("patrickvonplaten"),he=a("."),tt=p(),Y=n("h2"),ye=n("a"),Pe=n("span"),w(B.$$.fragment),Vt=p(),ee=n("span"),Ft=a("Wav2Vec2Config"),ot=p(),j=n("div"),w(C.$$.fragment),Zt=p(),se=n("p"),Qt=a("This is the configuration class to store the configuration of a "),at=n("a"),L=a("Wav2Vec2Model"),Yt=a(`. It is used to instantiate an
Wav2Vec2 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Wav2Vec2
`),Ze=n("a"),eo=a("facebook/wav2vec2-base-960h"),to=a(" architecture."),oo=p(),X=n("p"),ze=a("Configuration objects inherit from "),st=n("a"),ao=a("PretrainedConfig"),Me=a(` and can be used to control the model outputs. Read the
documentation from `),nt=n("a"),so=a("PretrainedConfig"),Et=a(" for more information."),no=p(),w(pe.$$.fragment),Nt=p(),ro=n("h2"),Uo=n("a"),fl=n("span"),w(fs.$$.fragment),Wm=p(),ul=n("span"),Vm=a("Wav2Vec2CTCTokenizer"),jd=p(),ne=n("div"),w(us.$$.fragment),Fm=p(),gl=n("p"),Em=a("Constructs a Wav2Vec2CTC tokenizer."),Cm=p(),gs=n("p"),qm=a("This tokenizer inherits from "),ri=n("a"),Pm=a("PreTrainedTokenizer"),zm=a(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),Mm=p(),Ro=n("div"),w(_s.$$.fragment),Am=p(),_l=n("p"),Om=a(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),Lm=p(),ii=n("div"),w(vs.$$.fragment),Dm=p(),rt=n("div"),w(bs.$$.fragment),Sm=p(),vl=n("p"),Im=a(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),Nm=p(),ws=n("p"),Bm=a("Similar to doing "),bl=n("code"),Um=a("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Rm=a("."),Hm=p(),w(Ho.$$.fragment),Xm=p(),Xo=n("div"),w(ys.$$.fragment),Gm=p(),wl=n("p"),Km=a("Convert a list of lists of token ids into a list of strings by calling decode."),Wd=p(),io=n("h2"),Go=n("a"),yl=n("span"),w(ks.$$.fragment),Jm=p(),kl=n("span"),Zm=a("Wav2Vec2FeatureExtractor"),Vd=p(),Qe=n("div"),w(Ts.$$.fragment),Qm=p(),Tl=n("p"),Ym=a("Constructs a Wav2Vec2 feature extractor."),eh=p(),xs=n("p"),th=a("This feature extractor inherits from "),li=n("a"),oh=a("SequenceFeatureExtractor"),ah=a(` which contains
most of the main methods. Users should refer to this superclass for more information regarding those methods.`),sh=p(),Ko=n("div"),w($s.$$.fragment),nh=p(),xl=n("p"),rh=a("Main method to featurize and prepare for the model one or several sequence(s)."),Fd=p(),lo=n("h2"),Jo=n("a"),$l=n("span"),w(js.$$.fragment),ih=p(),jl=n("span"),lh=a("Wav2Vec2Processor"),Ed=p(),G=n("div"),w(Ws.$$.fragment),ch=p(),Wl=n("p"),dh=a(`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor and a Wav2Vec2 CTC tokenizer into a single
processor.`),ph=p(),Ne=n("p"),ci=n("a"),mh=a("Wav2Vec2Processor"),hh=a(" offers all the functionalities of "),di=n("a"),fh=a("Wav2Vec2FeatureExtractor"),uh=a(" and "),pi=n("a"),gh=a("PreTrainedTokenizer"),_h=a(`.
See the docstring of `),Vs=n("a"),Vl=n("strong"),vh=a("call"),bh=a("()"),wh=a(" and "),mi=n("a"),yh=a("decode()"),kh=a(" for more information."),Th=p(),Zo=n("div"),w(Fs.$$.fragment),xh=p(),Ct=n("p"),$h=a(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),Es=n("a"),Fl=n("strong"),jh=a("call"),Wh=a("()"),Vh=a(` and returns its output. If used in the context
`),El=n("code"),Fh=a("as_target_processor()"),Eh=a(` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),Cs=n("a"),Cl=n("strong"),Ch=a("call"),qh=a("()"),Ph=a(". Please refer to the docstring of the above two methods for more information."),zh=p(),Qo=n("div"),w(qs.$$.fragment),Mh=p(),qt=n("p"),Ah=a(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),hi=n("a"),Oh=a("pad()"),Lh=a(` and returns its output. If used in the context
`),ql=n("code"),Dh=a("as_target_processor()"),Sh=a(` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),fi=n("a"),Ih=a("pad()"),Nh=a(". Please refer to the docstring of the above two methods for more information."),Bh=p(),ui=n("div"),w(Ps.$$.fragment),Uh=p(),Bt=n("div"),w(zs.$$.fragment),Rh=p(),Ms=n("p"),Hh=a(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),gi=n("a"),Xh=a("from_pretrained()"),Gh=a(" method."),Kh=p(),w(Yo.$$.fragment),Jh=p(),ea=n("div"),w(As.$$.fragment),Zh=p(),Os=n("p"),Qh=a("This method forwards all its arguments to PreTrainedTokenizer\u2019s "),_i=n("a"),Yh=a("batch_decode()"),ef=a(`. Please
refer to the docstring of this method for more information.`),tf=p(),ta=n("div"),w(Ls.$$.fragment),of=p(),Ds=n("p"),af=a("This method forwards all its arguments to PreTrainedTokenizer\u2019s "),vi=n("a"),sf=a("decode()"),nf=a(`. Please refer
to the docstring of this method for more information.`),Cd=p(),co=n("h2"),oa=n("a"),Pl=n("span"),w(Ss.$$.fragment),rf=p(),zl=n("span"),lf=a("Wav2Vec2ProcessorWithLM"),qd=p(),te=n("div"),w(Is.$$.fragment),cf=p(),Ml=n("p"),df=a(`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor, a Wav2Vec2 CTC tokenizer and a decoder
with language model support into a single processor for language model boosted speech recognition decoding.`),pf=p(),aa=n("div"),w(Ns.$$.fragment),mf=p(),Pt=n("p"),hf=a(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),Bs=n("a"),Al=n("strong"),ff=a("call"),uf=a("()"),gf=a(` and returns its output. If used in the context
`),Ol=n("code"),_f=a("as_target_processor()"),vf=a(` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),Us=n("a"),Ll=n("strong"),bf=a("call"),wf=a("()"),yf=a(`. Please refer to the docstring of the above two
methods for more information.`),kf=p(),sa=n("div"),w(Rs.$$.fragment),Tf=p(),zt=n("p"),xf=a(`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),bi=n("a"),$f=a("pad()"),jf=a(` and returns its output. If used in the context
`),Dl=n("code"),Wf=a("as_target_processor()"),Vf=a(` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),wi=n("a"),Ff=a("pad()"),Ef=a(`. Please refer to the docstring of the above two methods
for more information.`),Cf=p(),Ut=n("div"),w(Hs.$$.fragment),qf=p(),Xs=n("p"),Pf=a("Instantiate a "),yi=n("a"),zf=a("Wav2Vec2ProcessorWithLM"),Mf=a(" from a pretrained Wav2Vec2 processor."),Af=p(),w(na.$$.fragment),Of=p(),ki=n("div"),w(Gs.$$.fragment),Lf=p(),it=n("div"),w(Ks.$$.fragment),Df=p(),Sl=n("p"),Sf=a("Batch decode output logits to audio transcription with language model support."),If=p(),w(ra.$$.fragment),Nf=p(),Js=n("p"),Bf=a(`Example:
See `),Ti=n("a"),Uf=a("Decoding multiple audios"),Rf=a("."),Hf=p(),Rt=n("div"),w(Zs.$$.fragment),Xf=p(),Il=n("p"),Gf=a("Decode output logits to audio transcription with language model support."),Kf=p(),w(ia.$$.fragment),Pd=p(),po=n("h3"),la=n("a"),Nl=n("span"),w(Qs.$$.fragment),Jf=p(),Bl=n("span"),Zf=a("Decoding multiple audios"),zd=p(),ke=n("p"),Qf=a("If you are planning to decode multiple batches of audios, you should consider using "),xi=n("a"),Yf=a("batch_decode()"),eu=a(" and passing an instantiated "),Ul=n("code"),tu=a("multiprocessing.Pool"),ou=a(`.
Otherwise, `),$i=n("a"),au=a("batch_decode()"),su=a(" performance will be slower than calling "),ji=n("a"),nu=a("decode()"),ru=a(" for each audio individually, as it internally instantiates a new "),Rl=n("code"),iu=a("Pool"),lu=a(" for every call. See the example below:"),Md=p(),w(Ys.$$.fragment),Ad=p(),mo=n("h2"),ca=n("a"),Hl=n("span"),w(en.$$.fragment),cu=p(),Xl=n("span"),du=a("Wav2Vec2 specific outputs"),Od=p(),ho=n("div"),w(tn.$$.fragment),pu=p(),on=n("p"),mu=a("Output type of "),Gl=n("code"),hu=a("Wav2Vec2DecoderWithLM"),fu=a(", with transcription."),Ld=p(),fo=n("div"),w(an.$$.fragment),uu=p(),Kl=n("p"),gu=a("Base class for models that have been trained with the Wav2Vec2 loss objective."),Dd=p(),uo=n("div"),w(sn.$$.fragment),_u=p(),nn=n("p"),vu=a("Output type of "),Wi=n("a"),bu=a("Wav2Vec2ForPreTraining"),wu=a(", with potential hidden states and attentions."),Sd=p(),Mt=n("div"),w(rn.$$.fragment),yu=p(),ln=n("p"),ku=a("Output type of "),Jl=n("code"),Tu=a("FlaxWav2Vec2BaseModelOutput"),xu=a(", with potential hidden states and attentions."),$u=p(),da=n("div"),w(cn.$$.fragment),ju=p(),Zl=n("p"),Wu=a("\u201CReturns a new object replacing the specified fields with new values."),Id=p(),At=n("div"),w(dn.$$.fragment),Vu=p(),pn=n("p"),Fu=a("Output type of "),Ql=n("code"),Eu=a("FlaxWav2Vec2ForPreTrainingOutput"),Cu=a(", with potential hidden states and attentions."),qu=p(),pa=n("div"),w(mn.$$.fragment),Pu=p(),Yl=n("p"),zu=a("\u201CReturns a new object replacing the specified fields with new values."),Nd=p(),go=n("h2"),ma=n("a"),ec=n("span"),w(hn.$$.fragment),Mu=p(),tc=n("span"),Au=a("Wav2Vec2Model"),Bd=p(),Ae=n("div"),w(fn.$$.fragment),Ou=p(),un=n("p"),Lu=a(`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),gn=n("a"),Du=a(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Su=a(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Iu=p(),_n=n("p"),Nu=a("This model inherits from "),Vi=n("a"),Bu=a("PreTrainedModel"),Uu=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ru=p(),vn=n("p"),Hu=a("This model is a PyTorch "),bn=n("a"),Xu=a("torch.nn.Module"),Gu=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ku=p(),lt=n("div"),w(wn.$$.fragment),Ju=p(),_o=n("p"),Zu=a("The "),Fi=n("a"),Qu=a("Wav2Vec2Model"),Yu=a(" forward method, overrides the "),oc=n("code"),eg=a("__call__"),tg=a(" special method."),og=p(),w(ha.$$.fragment),ag=p(),w(fa.$$.fragment),Ud=p(),vo=n("h2"),ua=n("a"),ac=n("span"),w(yn.$$.fragment),sg=p(),sc=n("span"),ng=a("Wav2Vec2ForCTC"),Rd=p(),Oe=n("div"),w(kn.$$.fragment),rg=p(),bo=n("p"),ig=a("Wav2Vec2 Model with a "),nc=n("code"),lg=a("language modeling"),cg=a(` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),Tn=n("a"),dg=a(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),pg=a(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),mg=p(),xn=n("p"),hg=a("This model inherits from "),Ei=n("a"),fg=a("PreTrainedModel"),ug=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),gg=p(),$n=n("p"),_g=a("This model is a PyTorch "),jn=n("a"),vg=a("torch.nn.Module"),bg=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wg=p(),Be=n("div"),w(Wn.$$.fragment),yg=p(),wo=n("p"),kg=a("The "),Ci=n("a"),Tg=a("Wav2Vec2ForCTC"),xg=a(" forward method, overrides the "),rc=n("code"),$g=a("__call__"),jg=a(" special method."),Wg=p(),w(ga.$$.fragment),Vg=p(),w(_a.$$.fragment),Fg=p(),w(va.$$.fragment),Hd=p(),yo=n("h2"),ba=n("a"),ic=n("span"),w(Vn.$$.fragment),Eg=p(),lc=n("span"),Cg=a("Wav2Vec2ForSequenceClassification"),Xd=p(),fe=n("div"),w(Fn.$$.fragment),qg=p(),cc=n("p"),Pg=a(`Wav2Vec2 Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),zg=p(),En=n("p"),Mg=a("Wav2Vec2 was proposed in "),Cn=n("a"),Ag=a(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Og=a(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Lg=p(),qn=n("p"),Dg=a("This model inherits from "),qi=n("a"),Sg=a("PreTrainedModel"),Ig=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ng=p(),Pn=n("p"),Bg=a("This model is a PyTorch "),zn=n("a"),Ug=a("torch.nn.Module"),Rg=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hg=p(),Ue=n("div"),w(Mn.$$.fragment),Xg=p(),ko=n("p"),Gg=a("The "),Pi=n("a"),Kg=a("Wav2Vec2ForSequenceClassification"),Jg=a(" forward method, overrides the "),dc=n("code"),Zg=a("__call__"),Qg=a(" special method."),Yg=p(),w(wa.$$.fragment),e_=p(),w(ya.$$.fragment),t_=p(),w(ka.$$.fragment),Gd=p(),To=n("h2"),Ta=n("a"),pc=n("span"),w(An.$$.fragment),o_=p(),mc=n("span"),a_=a("Wav2Vec2ForAudioFrameClassification"),Kd=p(),ue=n("div"),w(On.$$.fragment),s_=p(),hc=n("p"),n_=a("Wav2Vec2 Model with a frame classification head on top for tasks like Speaker Diarization."),r_=p(),Ln=n("p"),i_=a("Wav2Vec2 was proposed in "),Dn=n("a"),l_=a(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),c_=a(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),d_=p(),Sn=n("p"),p_=a("This model inherits from "),zi=n("a"),m_=a("PreTrainedModel"),h_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),f_=p(),In=n("p"),u_=a("This model is a PyTorch "),Nn=n("a"),g_=a("torch.nn.Module"),__=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),v_=p(),ct=n("div"),w(Bn.$$.fragment),b_=p(),xo=n("p"),w_=a("The "),Mi=n("a"),y_=a("Wav2Vec2ForAudioFrameClassification"),k_=a(" forward method, overrides the "),fc=n("code"),T_=a("__call__"),x_=a(" special method."),$_=p(),w(xa.$$.fragment),j_=p(),w($a.$$.fragment),Jd=p(),$o=n("h2"),ja=n("a"),uc=n("span"),w(Un.$$.fragment),W_=p(),gc=n("span"),V_=a("Wav2Vec2ForXVector"),Zd=p(),ge=n("div"),w(Rn.$$.fragment),F_=p(),_c=n("p"),E_=a("Wav2Vec2 Model with an XVector feature extraction head on top for tasks like Speaker Verification."),C_=p(),Hn=n("p"),q_=a("Wav2Vec2 was proposed in "),Xn=n("a"),P_=a(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),z_=a(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),M_=p(),Gn=n("p"),A_=a("This model inherits from "),Ai=n("a"),O_=a("PreTrainedModel"),L_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),D_=p(),Kn=n("p"),S_=a("This model is a PyTorch "),Jn=n("a"),I_=a("torch.nn.Module"),N_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),B_=p(),dt=n("div"),w(Zn.$$.fragment),U_=p(),jo=n("p"),R_=a("The "),Oi=n("a"),H_=a("Wav2Vec2ForXVector"),X_=a(" forward method, overrides the "),vc=n("code"),G_=a("__call__"),K_=a(" special method."),J_=p(),w(Wa.$$.fragment),Z_=p(),w(Va.$$.fragment),Qd=p(),Wo=n("h2"),Fa=n("a"),bc=n("span"),w(Qn.$$.fragment),Q_=p(),wc=n("span"),Y_=a("Wav2Vec2ForPreTraining"),Yd=p(),Le=n("div"),w(Yn.$$.fragment),ev=p(),Vo=n("p"),tv=a("Wav2Vec2 Model with a quantizer and "),yc=n("code"),ov=a("VQ"),av=a(` head on top.
Wav2Vec2 was proposed in `),er=n("a"),sv=a(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),nv=a(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),rv=p(),tr=n("p"),iv=a("This model inherits from "),Li=n("a"),lv=a("PreTrainedModel"),cv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),dv=p(),or=n("p"),pv=a("This model is a PyTorch "),ar=n("a"),mv=a("torch.nn.Module"),hv=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fv=p(),pt=n("div"),w(sr.$$.fragment),uv=p(),Fo=n("p"),gv=a("The "),Di=n("a"),_v=a("Wav2Vec2ForPreTraining"),vv=a(" forward method, overrides the "),kc=n("code"),bv=a("__call__"),wv=a(" special method."),yv=p(),w(Ea.$$.fragment),kv=p(),w(Ca.$$.fragment),ep=p(),Eo=n("h2"),qa=n("a"),Tc=n("span"),w(nr.$$.fragment),Tv=p(),xc=n("span"),xv=a("TFWav2Vec2Model"),tp=p(),_e=n("div"),w(rr.$$.fragment),$v=p(),$c=n("p"),jv=a("The bare TFWav2Vec2 Model transformer outputing raw hidden-states without any specific head on top."),Wv=p(),ir=n("p"),Vv=a("This model inherits from "),Si=n("a"),Fv=a("TFPreTrainedModel"),Ev=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cv=p(),lr=n("p"),qv=a("This model is also a "),cr=n("a"),Pv=a("tf.keras.Model"),zv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mv=p(),w(Pa.$$.fragment),Av=p(),mt=n("div"),w(dr.$$.fragment),Ov=p(),Co=n("p"),Lv=a("The "),Ii=n("a"),Dv=a("TFWav2Vec2Model"),Sv=a(" forward method, overrides the "),jc=n("code"),Iv=a("__call__"),Nv=a(" special method."),Bv=p(),w(za.$$.fragment),Uv=p(),w(Ma.$$.fragment),op=p(),qo=n("h2"),Aa=n("a"),Wc=n("span"),w(pr.$$.fragment),Rv=p(),Vc=n("span"),Hv=a("TFWav2Vec2ForCTC"),ap=p(),ve=n("div"),w(mr.$$.fragment),Xv=p(),hr=n("p"),Gv=a("TFWav2Vec2 Model with a "),Fc=n("code"),Kv=a("language modeling"),Jv=a(" head on top for Connectionist Temporal Classification (CTC)."),Zv=p(),fr=n("p"),Qv=a("This model inherits from "),Ni=n("a"),Yv=a("TFPreTrainedModel"),e2=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),t2=p(),ur=n("p"),o2=a("This model is also a "),gr=n("a"),a2=a("tf.keras.Model"),s2=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),n2=p(),w(Oa.$$.fragment),r2=p(),ht=n("div"),w(_r.$$.fragment),i2=p(),Po=n("p"),l2=a("The "),Bi=n("a"),c2=a("TFWav2Vec2ForCTC"),d2=a(" forward method, overrides the "),Ec=n("code"),p2=a("__call__"),m2=a(" special method."),h2=p(),w(La.$$.fragment),f2=p(),w(Da.$$.fragment),sp=p(),zo=n("h2"),Sa=n("a"),Cc=n("span"),w(vr.$$.fragment),u2=p(),qc=n("span"),g2=a("FlaxWav2Vec2Model"),np=p(),re=n("div"),w(br.$$.fragment),_2=p(),wr=n("p"),v2=a(`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),yr=n("a"),b2=a(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),w2=a(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),y2=p(),kr=n("p"),k2=a("This model inherits from "),Ui=n("a"),T2=a("FlaxPreTrainedModel"),x2=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$2=p(),Tr=n("p"),j2=a(`This model is also a Flax Linen
`),xr=n("a"),W2=a("flax.nn.Module"),V2=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),F2=p(),Pc=n("p"),E2=a("Finally, this model supports inherent JAX features such as:"),C2=p(),Ot=n("ul"),zc=n("li"),$r=n("a"),q2=a("Just-In-Time (JIT) compilation"),P2=p(),Mc=n("li"),jr=n("a"),z2=a("Automatic Differentiation"),M2=p(),Ac=n("li"),Wr=n("a"),A2=a("Vectorization"),O2=p(),Oc=n("li"),Vr=n("a"),L2=a("Parallelization"),D2=p(),ft=n("div"),w(Fr.$$.fragment),S2=p(),Mo=n("p"),I2=a("The "),Lc=n("code"),N2=a("FlaxWav2Vec2PreTrainedModel"),B2=a(" forward method, overrides the "),Dc=n("code"),U2=a("__call__"),R2=a(" special method."),H2=p(),w(Ia.$$.fragment),X2=p(),w(Na.$$.fragment),rp=p(),Ao=n("h2"),Ba=n("a"),Sc=n("span"),w(Er.$$.fragment),G2=p(),Ic=n("span"),K2=a("FlaxWav2Vec2ForCTC"),ip=p(),ie=n("div"),w(Cr.$$.fragment),J2=p(),Oo=n("p"),Z2=a("Wav2Vec2 Model with a "),Nc=n("code"),Q2=a("language modeling"),Y2=a(` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),qr=n("a"),eb=a(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),tb=a(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),ob=p(),Pr=n("p"),ab=a("This model inherits from "),Ri=n("a"),sb=a("FlaxPreTrainedModel"),nb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rb=p(),zr=n("p"),ib=a(`This model is also a Flax Linen
`),Mr=n("a"),lb=a("flax.nn.Module"),cb=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),db=p(),Bc=n("p"),pb=a("Finally, this model supports inherent JAX features such as:"),mb=p(),Lt=n("ul"),Uc=n("li"),Ar=n("a"),hb=a("Just-In-Time (JIT) compilation"),fb=p(),Rc=n("li"),Or=n("a"),ub=a("Automatic Differentiation"),gb=p(),Hc=n("li"),Lr=n("a"),_b=a("Vectorization"),vb=p(),Xc=n("li"),Dr=n("a"),bb=a("Parallelization"),wb=p(),ut=n("div"),w(Sr.$$.fragment),yb=p(),Lo=n("p"),kb=a("The "),Gc=n("code"),Tb=a("FlaxWav2Vec2PreTrainedModel"),xb=a(" forward method, overrides the "),Kc=n("code"),$b=a("__call__"),jb=a(" special method."),Wb=p(),w(Ua.$$.fragment),Vb=p(),w(Ra.$$.fragment),lp=p(),Do=n("h2"),Ha=n("a"),Jc=n("span"),w(Ir.$$.fragment),Fb=p(),Zc=n("span"),Eb=a("FlaxWav2Vec2ForPreTraining"),cp=p(),le=n("div"),w(Nr.$$.fragment),Cb=p(),So=n("p"),qb=a("Wav2Vec2 Model with a quantizer and "),Qc=n("code"),Pb=a("VQ"),zb=a(` head on top.
Wav2Vec2 was proposed in `),Br=n("a"),Mb=a(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Ab=a(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Ob=p(),Ur=n("p"),Lb=a("This model inherits from "),Hi=n("a"),Db=a("FlaxPreTrainedModel"),Sb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ib=p(),Rr=n("p"),Nb=a(`This model is also a Flax Linen
`),Hr=n("a"),Bb=a("flax.nn.Module"),Ub=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Rb=p(),Yc=n("p"),Hb=a("Finally, this model supports inherent JAX features such as:"),Xb=p(),Dt=n("ul"),ed=n("li"),Xr=n("a"),Gb=a("Just-In-Time (JIT) compilation"),Kb=p(),td=n("li"),Gr=n("a"),Jb=a("Automatic Differentiation"),Zb=p(),od=n("li"),Kr=n("a"),Qb=a("Vectorization"),Yb=p(),ad=n("li"),Jr=n("a"),ew=a("Parallelization"),tw=p(),gt=n("div"),w(Zr.$$.fragment),ow=p(),Io=n("p"),aw=a("The "),Xi=n("a"),sw=a("FlaxWav2Vec2ForPreTraining"),nw=a(" forward method, overrides the "),sd=n("code"),rw=a("__call__"),iw=a(" special method."),lw=p(),w(Xa.$$.fragment),cw=p(),w(Ga.$$.fragment),this.h()},l(o){const g=H0('[data-svelte="svelte-1phssyn"]',document.head);c=r(g,"META",{name:!0,content:!0}),g.forEach(t),b=m(o),f=r(o,"H1",{class:!0});var Qr=i(f);u=r(Qr,"A",{id:!0,class:!0,href:!0});var nd=i(u);v=r(nd,"SPAN",{});var rd=i(v);y(l.$$.fragment,rd),rd.forEach(t),nd.forEach(t),h=m(Qr),V=r(Qr,"SPAN",{});var id=i(V);M=s(id,"Wav2Vec2"),id.forEach(t),Qr.forEach(t),A=m(o),P=r(o,"H2",{class:!0});var Yr=i(P);z=r(Yr,"A",{id:!0,class:!0,href:!0});var ld=i(z);N=r(ld,"SPAN",{});var cd=i(N);y(E.$$.fragment,cd),cd.forEach(t),ld.forEach(t),O=m(Yr),q=r(Yr,"SPAN",{});var dd=i(q);ce=s(dd,"Overview"),dd.forEach(t),Yr.forEach(t),K=m(o),S=r(o,"P",{});var ei=i(S);de=s(ei,"The Wav2Vec2 model was proposed in "),I=r(ei,"A",{href:!0,rel:!0});var pd=i(I);U=s(pd,"wav2vec 2.0: A Framework for Self-Supervised Learning of Speech Representations"),pd.forEach(t),De=s(ei," by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael Auli."),ei.forEach(t),H=m(o),J=r(o,"P",{});var md=i(J);Se=s(md,"The abstract from the paper is the following:"),md.forEach(t),We=m(o),Z=r(o,"P",{});var hd=i(Z);Ke=r(hd,"EM",{});var fd=i(Ke);Tt=s(fd,`We show for the first time that learning powerful representations from speech audio alone followed by fine-tuning on
transcribed speech can outperform the best semi-supervised methods while being conceptually simpler. wav2vec 2.0 masks
the speech input in the latent space and solves a contrastive task defined over a quantization of the latent
representations which are jointly learned. Experiments using all labeled data of Librispeech achieve 1.8/3.3 WER on the
clean/other test sets. When lowering the amount of labeled data to one hour, wav2vec 2.0 outperforms the previous state
of the art on the 100 hour subset while using 100 times less labeled data. Using just ten minutes of labeled data and
pre-training on 53k hours of unlabeled data still achieves 4.8/8.2 WER. This demonstrates the feasibility of speech
recognition with limited amounts of labeled data.`),fd.forEach(t),hd.forEach(t),Ie=m(o),D=r(o,"P",{});var ud=i(D);Q=s(ud,"Tips:"),ud.forEach(t),Ye=m(o),oe=r(o,"UL",{});var ti=i(oe);Je=r(ti,"LI",{});var gd=i(Je);xt=s(gd,"Wav2Vec2 is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),gd.forEach(t),Ve=m(ti),Fe=r(ti,"LI",{});var oi=i(Fe);$t=s(oi,`Wav2Vec2 model was trained using connectionist temporal classification (CTC) so the model output has to be decoded
using `),R=r(oi,"A",{href:!0});var _d=i(R);jt=s(_d,"Wav2Vec2CTCTokenizer"),_d.forEach(t),Ee=s(oi,"."),oi.forEach(t),ti.forEach(t),et=m(o),we=r(o,"P",{});var ai=i(we);Ce=s(ai,"This model was contributed by "),qe=r(ai,"A",{href:!0,rel:!0});var vd=i(qe);Wt=s(vd,"patrickvonplaten"),vd.forEach(t),he=s(ai,"."),ai.forEach(t),tt=m(o),Y=r(o,"H2",{class:!0});var si=i(Y);ye=r(si,"A",{id:!0,class:!0,href:!0});var bd=i(ye);Pe=r(bd,"SPAN",{});var wd=i(Pe);y(B.$$.fragment,wd),wd.forEach(t),bd.forEach(t),Vt=m(si),ee=r(si,"SPAN",{});var yd=i(ee);Ft=s(yd,"Wav2Vec2Config"),yd.forEach(t),si.forEach(t),ot=m(o),j=r(o,"DIV",{class:!0});var St=i(j);y(C.$$.fragment,St),Zt=m(St),se=r(St,"P",{});var No=i(se);Qt=s(No,"This is the configuration class to store the configuration of a "),at=r(No,"A",{href:!0});var kd=i(at);L=s(kd,"Wav2Vec2Model"),kd.forEach(t),Yt=s(No,`. It is used to instantiate an
Wav2Vec2 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Wav2Vec2
`),Ze=r(No,"A",{href:!0,rel:!0});var Td=i(Ze);eo=s(Td,"facebook/wav2vec2-base-960h"),Td.forEach(t),to=s(No," architecture."),No.forEach(t),oo=m(St),X=r(St,"P",{});var Bo=i(X);ze=s(Bo,"Configuration objects inherit from "),st=r(Bo,"A",{href:!0});var xd=i(st);ao=s(xd,"PretrainedConfig"),xd.forEach(t),Me=s(Bo,` and can be used to control the model outputs. Read the
documentation from `),nt=r(Bo,"A",{href:!0});var $d=i(nt);so=s($d,"PretrainedConfig"),$d.forEach(t),Et=s(Bo," for more information."),Bo.forEach(t),no=m(St),y(pe.$$.fragment,St),St.forEach(t),Nt=m(o),ro=r(o,"H2",{class:!0});var ni=i(ro);Uo=r(ni,"A",{id:!0,class:!0,href:!0});var uw=i(Uo);fl=r(uw,"SPAN",{});var gw=i(fl);y(fs.$$.fragment,gw),gw.forEach(t),uw.forEach(t),Wm=m(ni),ul=r(ni,"SPAN",{});var _w=i(ul);Vm=s(_w,"Wav2Vec2CTCTokenizer"),_w.forEach(t),ni.forEach(t),jd=m(o),ne=r(o,"DIV",{class:!0});var Re=i(ne);y(us.$$.fragment,Re),Fm=m(Re),gl=r(Re,"P",{});var vw=i(gl);Em=s(vw,"Constructs a Wav2Vec2CTC tokenizer."),vw.forEach(t),Cm=m(Re),gs=r(Re,"P",{});var pp=i(gs);qm=s(pp,"This tokenizer inherits from "),ri=r(pp,"A",{href:!0});var bw=i(ri);Pm=s(bw,"PreTrainedTokenizer"),bw.forEach(t),zm=s(pp,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),pp.forEach(t),Mm=m(Re),Ro=r(Re,"DIV",{class:!0});var mp=i(Ro);y(_s.$$.fragment,mp),Am=m(mp),_l=r(mp,"P",{});var ww=i(_l);Om=s(ww,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`),ww.forEach(t),mp.forEach(t),Lm=m(Re),ii=r(Re,"DIV",{class:!0});var yw=i(ii);y(vs.$$.fragment,yw),yw.forEach(t),Dm=m(Re),rt=r(Re,"DIV",{class:!0});var Ka=i(rt);y(bs.$$.fragment,Ka),Sm=m(Ka),vl=r(Ka,"P",{});var kw=i(vl);Im=s(kw,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),kw.forEach(t),Nm=m(Ka),ws=r(Ka,"P",{});var hp=i(ws);Bm=s(hp,"Similar to doing "),bl=r(hp,"CODE",{});var Tw=i(bl);Um=s(Tw,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),Tw.forEach(t),Rm=s(hp,"."),hp.forEach(t),Hm=m(Ka),y(Ho.$$.fragment,Ka),Ka.forEach(t),Xm=m(Re),Xo=r(Re,"DIV",{class:!0});var fp=i(Xo);y(ys.$$.fragment,fp),Gm=m(fp),wl=r(fp,"P",{});var xw=i(wl);Km=s(xw,"Convert a list of lists of token ids into a list of strings by calling decode."),xw.forEach(t),fp.forEach(t),Re.forEach(t),Wd=m(o),io=r(o,"H2",{class:!0});var up=i(io);Go=r(up,"A",{id:!0,class:!0,href:!0});var $w=i(Go);yl=r($w,"SPAN",{});var jw=i(yl);y(ks.$$.fragment,jw),jw.forEach(t),$w.forEach(t),Jm=m(up),kl=r(up,"SPAN",{});var Ww=i(kl);Zm=s(Ww,"Wav2Vec2FeatureExtractor"),Ww.forEach(t),up.forEach(t),Vd=m(o),Qe=r(o,"DIV",{class:!0});var Ja=i(Qe);y(Ts.$$.fragment,Ja),Qm=m(Ja),Tl=r(Ja,"P",{});var Vw=i(Tl);Ym=s(Vw,"Constructs a Wav2Vec2 feature extractor."),Vw.forEach(t),eh=m(Ja),xs=r(Ja,"P",{});var gp=i(xs);th=s(gp,"This feature extractor inherits from "),li=r(gp,"A",{href:!0});var Fw=i(li);oh=s(Fw,"SequenceFeatureExtractor"),Fw.forEach(t),ah=s(gp,` which contains
most of the main methods. Users should refer to this superclass for more information regarding those methods.`),gp.forEach(t),sh=m(Ja),Ko=r(Ja,"DIV",{class:!0});var _p=i(Ko);y($s.$$.fragment,_p),nh=m(_p),xl=r(_p,"P",{});var Ew=i(xl);rh=s(Ew,"Main method to featurize and prepare for the model one or several sequence(s)."),Ew.forEach(t),_p.forEach(t),Ja.forEach(t),Fd=m(o),lo=r(o,"H2",{class:!0});var vp=i(lo);Jo=r(vp,"A",{id:!0,class:!0,href:!0});var Cw=i(Jo);$l=r(Cw,"SPAN",{});var qw=i($l);y(js.$$.fragment,qw),qw.forEach(t),Cw.forEach(t),ih=m(vp),jl=r(vp,"SPAN",{});var Pw=i(jl);lh=s(Pw,"Wav2Vec2Processor"),Pw.forEach(t),vp.forEach(t),Ed=m(o),G=r(o,"DIV",{class:!0});var me=i(G);y(Ws.$$.fragment,me),ch=m(me),Wl=r(me,"P",{});var zw=i(Wl);dh=s(zw,`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor and a Wav2Vec2 CTC tokenizer into a single
processor.`),zw.forEach(t),ph=m(me),Ne=r(me,"P",{});var It=i(Ne);ci=r(It,"A",{href:!0});var Mw=i(ci);mh=s(Mw,"Wav2Vec2Processor"),Mw.forEach(t),hh=s(It," offers all the functionalities of "),di=r(It,"A",{href:!0});var Aw=i(di);fh=s(Aw,"Wav2Vec2FeatureExtractor"),Aw.forEach(t),uh=s(It," and "),pi=r(It,"A",{href:!0});var Ow=i(pi);gh=s(Ow,"PreTrainedTokenizer"),Ow.forEach(t),_h=s(It,`.
See the docstring of `),Vs=r(It,"A",{href:!0});var dw=i(Vs);Vl=r(dw,"STRONG",{});var Lw=i(Vl);vh=s(Lw,"call"),Lw.forEach(t),bh=s(dw,"()"),dw.forEach(t),wh=s(It," and "),mi=r(It,"A",{href:!0});var Dw=i(mi);yh=s(Dw,"decode()"),Dw.forEach(t),kh=s(It," for more information."),It.forEach(t),Th=m(me),Zo=r(me,"DIV",{class:!0});var bp=i(Zo);y(Fs.$$.fragment,bp),xh=m(bp),Ct=r(bp,"P",{});var Za=i(Ct);$h=s(Za,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),Es=r(Za,"A",{href:!0});var pw=i(Es);Fl=r(pw,"STRONG",{});var Sw=i(Fl);jh=s(Sw,"call"),Sw.forEach(t),Wh=s(pw,"()"),pw.forEach(t),Vh=s(Za,` and returns its output. If used in the context
`),El=r(Za,"CODE",{});var Iw=i(El);Fh=s(Iw,"as_target_processor()"),Iw.forEach(t),Eh=s(Za,` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),Cs=r(Za,"A",{href:!0});var mw=i(Cs);Cl=r(mw,"STRONG",{});var Nw=i(Cl);Ch=s(Nw,"call"),Nw.forEach(t),qh=s(mw,"()"),mw.forEach(t),Ph=s(Za,". Please refer to the docstring of the above two methods for more information."),Za.forEach(t),bp.forEach(t),zh=m(me),Qo=r(me,"DIV",{class:!0});var wp=i(Qo);y(qs.$$.fragment,wp),Mh=m(wp),qt=r(wp,"P",{});var Qa=i(qt);Ah=s(Qa,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),hi=r(Qa,"A",{href:!0});var Bw=i(hi);Oh=s(Bw,"pad()"),Bw.forEach(t),Lh=s(Qa,` and returns its output. If used in the context
`),ql=r(Qa,"CODE",{});var Uw=i(ql);Dh=s(Uw,"as_target_processor()"),Uw.forEach(t),Sh=s(Qa,` this method forwards all its arguments to PreTrainedTokenizer\u2019s
`),fi=r(Qa,"A",{href:!0});var Rw=i(fi);Ih=s(Rw,"pad()"),Rw.forEach(t),Nh=s(Qa,". Please refer to the docstring of the above two methods for more information."),Qa.forEach(t),wp.forEach(t),Bh=m(me),ui=r(me,"DIV",{class:!0});var Hw=i(ui);y(Ps.$$.fragment,Hw),Hw.forEach(t),Uh=m(me),Bt=r(me,"DIV",{class:!0});var Gi=i(Bt);y(zs.$$.fragment,Gi),Rh=m(Gi),Ms=r(Gi,"P",{});var yp=i(Ms);Hh=s(yp,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),gi=r(yp,"A",{href:!0});var Xw=i(gi);Xh=s(Xw,"from_pretrained()"),Xw.forEach(t),Gh=s(yp," method."),yp.forEach(t),Kh=m(Gi),y(Yo.$$.fragment,Gi),Gi.forEach(t),Jh=m(me),ea=r(me,"DIV",{class:!0});var kp=i(ea);y(As.$$.fragment,kp),Zh=m(kp),Os=r(kp,"P",{});var Tp=i(Os);Qh=s(Tp,"This method forwards all its arguments to PreTrainedTokenizer\u2019s "),_i=r(Tp,"A",{href:!0});var Gw=i(_i);Yh=s(Gw,"batch_decode()"),Gw.forEach(t),ef=s(Tp,`. Please
refer to the docstring of this method for more information.`),Tp.forEach(t),kp.forEach(t),tf=m(me),ta=r(me,"DIV",{class:!0});var xp=i(ta);y(Ls.$$.fragment,xp),of=m(xp),Ds=r(xp,"P",{});var $p=i(Ds);af=s($p,"This method forwards all its arguments to PreTrainedTokenizer\u2019s "),vi=r($p,"A",{href:!0});var Kw=i(vi);sf=s(Kw,"decode()"),Kw.forEach(t),nf=s($p,`. Please refer
to the docstring of this method for more information.`),$p.forEach(t),xp.forEach(t),me.forEach(t),Cd=m(o),co=r(o,"H2",{class:!0});var jp=i(co);oa=r(jp,"A",{id:!0,class:!0,href:!0});var Jw=i(oa);Pl=r(Jw,"SPAN",{});var Zw=i(Pl);y(Ss.$$.fragment,Zw),Zw.forEach(t),Jw.forEach(t),rf=m(jp),zl=r(jp,"SPAN",{});var Qw=i(zl);lf=s(Qw,"Wav2Vec2ProcessorWithLM"),Qw.forEach(t),jp.forEach(t),qd=m(o),te=r(o,"DIV",{class:!0});var Te=i(te);y(Is.$$.fragment,Te),cf=m(Te),Ml=r(Te,"P",{});var Yw=i(Ml);df=s(Yw,`Constructs a Wav2Vec2 processor which wraps a Wav2Vec2 feature extractor, a Wav2Vec2 CTC tokenizer and a decoder
with language model support into a single processor for language model boosted speech recognition decoding.`),Yw.forEach(t),pf=m(Te),aa=r(Te,"DIV",{class:!0});var Wp=i(aa);y(Ns.$$.fragment,Wp),mf=m(Wp),Pt=r(Wp,"P",{});var Ya=i(Pt);hf=s(Ya,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),Bs=r(Ya,"A",{href:!0});var hw=i(Bs);Al=r(hw,"STRONG",{});var ey=i(Al);ff=s(ey,"call"),ey.forEach(t),uf=s(hw,"()"),hw.forEach(t),gf=s(Ya,` and returns its output. If used in the context
`),Ol=r(Ya,"CODE",{});var ty=i(Ol);_f=s(ty,"as_target_processor()"),ty.forEach(t),vf=s(Ya,` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),Us=r(Ya,"A",{href:!0});var fw=i(Us);Ll=r(fw,"STRONG",{});var oy=i(Ll);bf=s(oy,"call"),oy.forEach(t),wf=s(fw,"()"),fw.forEach(t),yf=s(Ya,`. Please refer to the docstring of the above two
methods for more information.`),Ya.forEach(t),Wp.forEach(t),kf=m(Te),sa=r(Te,"DIV",{class:!0});var Vp=i(sa);y(Rs.$$.fragment,Vp),Tf=m(Vp),zt=r(Vp,"P",{});var es=i(zt);xf=s(es,`When used in normal mode, this method forwards all its arguments to Wav2Vec2FeatureExtractor\u2019s
`),bi=r(es,"A",{href:!0});var ay=i(bi);$f=s(ay,"pad()"),ay.forEach(t),jf=s(es,` and returns its output. If used in the context
`),Dl=r(es,"CODE",{});var sy=i(Dl);Wf=s(sy,"as_target_processor()"),sy.forEach(t),Vf=s(es,` this method forwards all its arguments to
Wav2Vec2CTCTokenizer\u2019s `),wi=r(es,"A",{href:!0});var ny=i(wi);Ff=s(ny,"pad()"),ny.forEach(t),Ef=s(es,`. Please refer to the docstring of the above two methods
for more information.`),es.forEach(t),Vp.forEach(t),Cf=m(Te),Ut=r(Te,"DIV",{class:!0});var Ki=i(Ut);y(Hs.$$.fragment,Ki),qf=m(Ki),Xs=r(Ki,"P",{});var Fp=i(Xs);Pf=s(Fp,"Instantiate a "),yi=r(Fp,"A",{href:!0});var ry=i(yi);zf=s(ry,"Wav2Vec2ProcessorWithLM"),ry.forEach(t),Mf=s(Fp," from a pretrained Wav2Vec2 processor."),Fp.forEach(t),Af=m(Ki),y(na.$$.fragment,Ki),Ki.forEach(t),Of=m(Te),ki=r(Te,"DIV",{class:!0});var iy=i(ki);y(Gs.$$.fragment,iy),iy.forEach(t),Lf=m(Te),it=r(Te,"DIV",{class:!0});var ts=i(it);y(Ks.$$.fragment,ts),Df=m(ts),Sl=r(ts,"P",{});var ly=i(Sl);Sf=s(ly,"Batch decode output logits to audio transcription with language model support."),ly.forEach(t),If=m(ts),y(ra.$$.fragment,ts),Nf=m(ts),Js=r(ts,"P",{});var Ep=i(Js);Bf=s(Ep,`Example:
See `),Ti=r(Ep,"A",{href:!0});var cy=i(Ti);Uf=s(cy,"Decoding multiple audios"),cy.forEach(t),Rf=s(Ep,"."),Ep.forEach(t),ts.forEach(t),Hf=m(Te),Rt=r(Te,"DIV",{class:!0});var Ji=i(Rt);y(Zs.$$.fragment,Ji),Xf=m(Ji),Il=r(Ji,"P",{});var dy=i(Il);Gf=s(dy,"Decode output logits to audio transcription with language model support."),dy.forEach(t),Kf=m(Ji),y(ia.$$.fragment,Ji),Ji.forEach(t),Te.forEach(t),Pd=m(o),po=r(o,"H3",{class:!0});var Cp=i(po);la=r(Cp,"A",{id:!0,class:!0,href:!0});var py=i(la);Nl=r(py,"SPAN",{});var my=i(Nl);y(Qs.$$.fragment,my),my.forEach(t),py.forEach(t),Jf=m(Cp),Bl=r(Cp,"SPAN",{});var hy=i(Bl);Zf=s(hy,"Decoding multiple audios"),hy.forEach(t),Cp.forEach(t),zd=m(o),ke=r(o,"P",{});var _t=i(ke);Qf=s(_t,"If you are planning to decode multiple batches of audios, you should consider using "),xi=r(_t,"A",{href:!0});var fy=i(xi);Yf=s(fy,"batch_decode()"),fy.forEach(t),eu=s(_t," and passing an instantiated "),Ul=r(_t,"CODE",{});var uy=i(Ul);tu=s(uy,"multiprocessing.Pool"),uy.forEach(t),ou=s(_t,`.
Otherwise, `),$i=r(_t,"A",{href:!0});var gy=i($i);au=s(gy,"batch_decode()"),gy.forEach(t),su=s(_t," performance will be slower than calling "),ji=r(_t,"A",{href:!0});var _y=i(ji);nu=s(_y,"decode()"),_y.forEach(t),ru=s(_t," for each audio individually, as it internally instantiates a new "),Rl=r(_t,"CODE",{});var vy=i(Rl);iu=s(vy,"Pool"),vy.forEach(t),lu=s(_t," for every call. See the example below:"),_t.forEach(t),Md=m(o),y(Ys.$$.fragment,o),Ad=m(o),mo=r(o,"H2",{class:!0});var qp=i(mo);ca=r(qp,"A",{id:!0,class:!0,href:!0});var by=i(ca);Hl=r(by,"SPAN",{});var wy=i(Hl);y(en.$$.fragment,wy),wy.forEach(t),by.forEach(t),cu=m(qp),Xl=r(qp,"SPAN",{});var yy=i(Xl);du=s(yy,"Wav2Vec2 specific outputs"),yy.forEach(t),qp.forEach(t),Od=m(o),ho=r(o,"DIV",{class:!0});var Pp=i(ho);y(tn.$$.fragment,Pp),pu=m(Pp),on=r(Pp,"P",{});var zp=i(on);mu=s(zp,"Output type of "),Gl=r(zp,"CODE",{});var ky=i(Gl);hu=s(ky,"Wav2Vec2DecoderWithLM"),ky.forEach(t),fu=s(zp,", with transcription."),zp.forEach(t),Pp.forEach(t),Ld=m(o),fo=r(o,"DIV",{class:!0});var Mp=i(fo);y(an.$$.fragment,Mp),uu=m(Mp),Kl=r(Mp,"P",{});var Ty=i(Kl);gu=s(Ty,"Base class for models that have been trained with the Wav2Vec2 loss objective."),Ty.forEach(t),Mp.forEach(t),Dd=m(o),uo=r(o,"DIV",{class:!0});var Ap=i(uo);y(sn.$$.fragment,Ap),_u=m(Ap),nn=r(Ap,"P",{});var Op=i(nn);vu=s(Op,"Output type of "),Wi=r(Op,"A",{href:!0});var xy=i(Wi);bu=s(xy,"Wav2Vec2ForPreTraining"),xy.forEach(t),wu=s(Op,", with potential hidden states and attentions."),Op.forEach(t),Ap.forEach(t),Sd=m(o),Mt=r(o,"DIV",{class:!0});var Zi=i(Mt);y(rn.$$.fragment,Zi),yu=m(Zi),ln=r(Zi,"P",{});var Lp=i(ln);ku=s(Lp,"Output type of "),Jl=r(Lp,"CODE",{});var $y=i(Jl);Tu=s($y,"FlaxWav2Vec2BaseModelOutput"),$y.forEach(t),xu=s(Lp,", with potential hidden states and attentions."),Lp.forEach(t),$u=m(Zi),da=r(Zi,"DIV",{class:!0});var Dp=i(da);y(cn.$$.fragment,Dp),ju=m(Dp),Zl=r(Dp,"P",{});var jy=i(Zl);Wu=s(jy,"\u201CReturns a new object replacing the specified fields with new values."),jy.forEach(t),Dp.forEach(t),Zi.forEach(t),Id=m(o),At=r(o,"DIV",{class:!0});var Qi=i(At);y(dn.$$.fragment,Qi),Vu=m(Qi),pn=r(Qi,"P",{});var Sp=i(pn);Fu=s(Sp,"Output type of "),Ql=r(Sp,"CODE",{});var Wy=i(Ql);Eu=s(Wy,"FlaxWav2Vec2ForPreTrainingOutput"),Wy.forEach(t),Cu=s(Sp,", with potential hidden states and attentions."),Sp.forEach(t),qu=m(Qi),pa=r(Qi,"DIV",{class:!0});var Ip=i(pa);y(mn.$$.fragment,Ip),Pu=m(Ip),Yl=r(Ip,"P",{});var Vy=i(Yl);zu=s(Vy,"\u201CReturns a new object replacing the specified fields with new values."),Vy.forEach(t),Ip.forEach(t),Qi.forEach(t),Nd=m(o),go=r(o,"H2",{class:!0});var Np=i(go);ma=r(Np,"A",{id:!0,class:!0,href:!0});var Fy=i(ma);ec=r(Fy,"SPAN",{});var Ey=i(ec);y(hn.$$.fragment,Ey),Ey.forEach(t),Fy.forEach(t),Mu=m(Np),tc=r(Np,"SPAN",{});var Cy=i(tc);Au=s(Cy,"Wav2Vec2Model"),Cy.forEach(t),Np.forEach(t),Bd=m(o),Ae=r(o,"DIV",{class:!0});var Ht=i(Ae);y(fn.$$.fragment,Ht),Ou=m(Ht),un=r(Ht,"P",{});var Bp=i(un);Lu=s(Bp,`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),gn=r(Bp,"A",{href:!0,rel:!0});var qy=i(gn);Du=s(qy,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),qy.forEach(t),Su=s(Bp,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Bp.forEach(t),Iu=m(Ht),_n=r(Ht,"P",{});var Up=i(_n);Nu=s(Up,"This model inherits from "),Vi=r(Up,"A",{href:!0});var Py=i(Vi);Bu=s(Py,"PreTrainedModel"),Py.forEach(t),Uu=s(Up,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Up.forEach(t),Ru=m(Ht),vn=r(Ht,"P",{});var Rp=i(vn);Hu=s(Rp,"This model is a PyTorch "),bn=r(Rp,"A",{href:!0,rel:!0});var zy=i(bn);Xu=s(zy,"torch.nn.Module"),zy.forEach(t),Gu=s(Rp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Rp.forEach(t),Ku=m(Ht),lt=r(Ht,"DIV",{class:!0});var os=i(lt);y(wn.$$.fragment,os),Ju=m(os),_o=r(os,"P",{});var Yi=i(_o);Zu=s(Yi,"The "),Fi=r(Yi,"A",{href:!0});var My=i(Fi);Qu=s(My,"Wav2Vec2Model"),My.forEach(t),Yu=s(Yi," forward method, overrides the "),oc=r(Yi,"CODE",{});var Ay=i(oc);eg=s(Ay,"__call__"),Ay.forEach(t),tg=s(Yi," special method."),Yi.forEach(t),og=m(os),y(ha.$$.fragment,os),ag=m(os),y(fa.$$.fragment,os),os.forEach(t),Ht.forEach(t),Ud=m(o),vo=r(o,"H2",{class:!0});var Hp=i(vo);ua=r(Hp,"A",{id:!0,class:!0,href:!0});var Oy=i(ua);ac=r(Oy,"SPAN",{});var Ly=i(ac);y(yn.$$.fragment,Ly),Ly.forEach(t),Oy.forEach(t),sg=m(Hp),sc=r(Hp,"SPAN",{});var Dy=i(sc);ng=s(Dy,"Wav2Vec2ForCTC"),Dy.forEach(t),Hp.forEach(t),Rd=m(o),Oe=r(o,"DIV",{class:!0});var Xt=i(Oe);y(kn.$$.fragment,Xt),rg=m(Xt),bo=r(Xt,"P",{});var el=i(bo);ig=s(el,"Wav2Vec2 Model with a "),nc=r(el,"CODE",{});var Sy=i(nc);lg=s(Sy,"language modeling"),Sy.forEach(t),cg=s(el,` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),Tn=r(el,"A",{href:!0,rel:!0});var Iy=i(Tn);dg=s(Iy,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Iy.forEach(t),pg=s(el,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),el.forEach(t),mg=m(Xt),xn=r(Xt,"P",{});var Xp=i(xn);hg=s(Xp,"This model inherits from "),Ei=r(Xp,"A",{href:!0});var Ny=i(Ei);fg=s(Ny,"PreTrainedModel"),Ny.forEach(t),ug=s(Xp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Xp.forEach(t),gg=m(Xt),$n=r(Xt,"P",{});var Gp=i($n);_g=s(Gp,"This model is a PyTorch "),jn=r(Gp,"A",{href:!0,rel:!0});var By=i(jn);vg=s(By,"torch.nn.Module"),By.forEach(t),bg=s(Gp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gp.forEach(t),wg=m(Xt),Be=r(Xt,"DIV",{class:!0});var Gt=i(Be);y(Wn.$$.fragment,Gt),yg=m(Gt),wo=r(Gt,"P",{});var tl=i(wo);kg=s(tl,"The "),Ci=r(tl,"A",{href:!0});var Uy=i(Ci);Tg=s(Uy,"Wav2Vec2ForCTC"),Uy.forEach(t),xg=s(tl," forward method, overrides the "),rc=r(tl,"CODE",{});var Ry=i(rc);$g=s(Ry,"__call__"),Ry.forEach(t),jg=s(tl," special method."),tl.forEach(t),Wg=m(Gt),y(ga.$$.fragment,Gt),Vg=m(Gt),y(_a.$$.fragment,Gt),Fg=m(Gt),y(va.$$.fragment,Gt),Gt.forEach(t),Xt.forEach(t),Hd=m(o),yo=r(o,"H2",{class:!0});var Kp=i(yo);ba=r(Kp,"A",{id:!0,class:!0,href:!0});var Hy=i(ba);ic=r(Hy,"SPAN",{});var Xy=i(ic);y(Vn.$$.fragment,Xy),Xy.forEach(t),Hy.forEach(t),Eg=m(Kp),lc=r(Kp,"SPAN",{});var Gy=i(lc);Cg=s(Gy,"Wav2Vec2ForSequenceClassification"),Gy.forEach(t),Kp.forEach(t),Xd=m(o),fe=r(o,"DIV",{class:!0});var vt=i(fe);y(Fn.$$.fragment,vt),qg=m(vt),cc=r(vt,"P",{});var Ky=i(cc);Pg=s(Ky,`Wav2Vec2 Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),Ky.forEach(t),zg=m(vt),En=r(vt,"P",{});var Jp=i(En);Mg=s(Jp,"Wav2Vec2 was proposed in "),Cn=r(Jp,"A",{href:!0,rel:!0});var Jy=i(Cn);Ag=s(Jy,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Jy.forEach(t),Og=s(Jp,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Jp.forEach(t),Lg=m(vt),qn=r(vt,"P",{});var Zp=i(qn);Dg=s(Zp,"This model inherits from "),qi=r(Zp,"A",{href:!0});var Zy=i(qi);Sg=s(Zy,"PreTrainedModel"),Zy.forEach(t),Ig=s(Zp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Zp.forEach(t),Ng=m(vt),Pn=r(vt,"P",{});var Qp=i(Pn);Bg=s(Qp,"This model is a PyTorch "),zn=r(Qp,"A",{href:!0,rel:!0});var Qy=i(zn);Ug=s(Qy,"torch.nn.Module"),Qy.forEach(t),Rg=s(Qp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qp.forEach(t),Hg=m(vt),Ue=r(vt,"DIV",{class:!0});var Kt=i(Ue);y(Mn.$$.fragment,Kt),Xg=m(Kt),ko=r(Kt,"P",{});var ol=i(ko);Gg=s(ol,"The "),Pi=r(ol,"A",{href:!0});var Yy=i(Pi);Kg=s(Yy,"Wav2Vec2ForSequenceClassification"),Yy.forEach(t),Jg=s(ol," forward method, overrides the "),dc=r(ol,"CODE",{});var ek=i(dc);Zg=s(ek,"__call__"),ek.forEach(t),Qg=s(ol," special method."),ol.forEach(t),Yg=m(Kt),y(wa.$$.fragment,Kt),e_=m(Kt),y(ya.$$.fragment,Kt),t_=m(Kt),y(ka.$$.fragment,Kt),Kt.forEach(t),vt.forEach(t),Gd=m(o),To=r(o,"H2",{class:!0});var Yp=i(To);Ta=r(Yp,"A",{id:!0,class:!0,href:!0});var tk=i(Ta);pc=r(tk,"SPAN",{});var ok=i(pc);y(An.$$.fragment,ok),ok.forEach(t),tk.forEach(t),o_=m(Yp),mc=r(Yp,"SPAN",{});var ak=i(mc);a_=s(ak,"Wav2Vec2ForAudioFrameClassification"),ak.forEach(t),Yp.forEach(t),Kd=m(o),ue=r(o,"DIV",{class:!0});var bt=i(ue);y(On.$$.fragment,bt),s_=m(bt),hc=r(bt,"P",{});var sk=i(hc);n_=s(sk,"Wav2Vec2 Model with a frame classification head on top for tasks like Speaker Diarization."),sk.forEach(t),r_=m(bt),Ln=r(bt,"P",{});var em=i(Ln);i_=s(em,"Wav2Vec2 was proposed in "),Dn=r(em,"A",{href:!0,rel:!0});var nk=i(Dn);l_=s(nk,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),nk.forEach(t),c_=s(em,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),em.forEach(t),d_=m(bt),Sn=r(bt,"P",{});var tm=i(Sn);p_=s(tm,"This model inherits from "),zi=r(tm,"A",{href:!0});var rk=i(zi);m_=s(rk,"PreTrainedModel"),rk.forEach(t),h_=s(tm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),tm.forEach(t),f_=m(bt),In=r(bt,"P",{});var om=i(In);u_=s(om,"This model is a PyTorch "),Nn=r(om,"A",{href:!0,rel:!0});var ik=i(Nn);g_=s(ik,"torch.nn.Module"),ik.forEach(t),__=s(om,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),om.forEach(t),v_=m(bt),ct=r(bt,"DIV",{class:!0});var as=i(ct);y(Bn.$$.fragment,as),b_=m(as),xo=r(as,"P",{});var al=i(xo);w_=s(al,"The "),Mi=r(al,"A",{href:!0});var lk=i(Mi);y_=s(lk,"Wav2Vec2ForAudioFrameClassification"),lk.forEach(t),k_=s(al," forward method, overrides the "),fc=r(al,"CODE",{});var ck=i(fc);T_=s(ck,"__call__"),ck.forEach(t),x_=s(al," special method."),al.forEach(t),$_=m(as),y(xa.$$.fragment,as),j_=m(as),y($a.$$.fragment,as),as.forEach(t),bt.forEach(t),Jd=m(o),$o=r(o,"H2",{class:!0});var am=i($o);ja=r(am,"A",{id:!0,class:!0,href:!0});var dk=i(ja);uc=r(dk,"SPAN",{});var pk=i(uc);y(Un.$$.fragment,pk),pk.forEach(t),dk.forEach(t),W_=m(am),gc=r(am,"SPAN",{});var mk=i(gc);V_=s(mk,"Wav2Vec2ForXVector"),mk.forEach(t),am.forEach(t),Zd=m(o),ge=r(o,"DIV",{class:!0});var wt=i(ge);y(Rn.$$.fragment,wt),F_=m(wt),_c=r(wt,"P",{});var hk=i(_c);E_=s(hk,"Wav2Vec2 Model with an XVector feature extraction head on top for tasks like Speaker Verification."),hk.forEach(t),C_=m(wt),Hn=r(wt,"P",{});var sm=i(Hn);q_=s(sm,"Wav2Vec2 was proposed in "),Xn=r(sm,"A",{href:!0,rel:!0});var fk=i(Xn);P_=s(fk,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),fk.forEach(t),z_=s(sm,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),sm.forEach(t),M_=m(wt),Gn=r(wt,"P",{});var nm=i(Gn);A_=s(nm,"This model inherits from "),Ai=r(nm,"A",{href:!0});var uk=i(Ai);O_=s(uk,"PreTrainedModel"),uk.forEach(t),L_=s(nm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),nm.forEach(t),D_=m(wt),Kn=r(wt,"P",{});var rm=i(Kn);S_=s(rm,"This model is a PyTorch "),Jn=r(rm,"A",{href:!0,rel:!0});var gk=i(Jn);I_=s(gk,"torch.nn.Module"),gk.forEach(t),N_=s(rm,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),rm.forEach(t),B_=m(wt),dt=r(wt,"DIV",{class:!0});var ss=i(dt);y(Zn.$$.fragment,ss),U_=m(ss),jo=r(ss,"P",{});var sl=i(jo);R_=s(sl,"The "),Oi=r(sl,"A",{href:!0});var _k=i(Oi);H_=s(_k,"Wav2Vec2ForXVector"),_k.forEach(t),X_=s(sl," forward method, overrides the "),vc=r(sl,"CODE",{});var vk=i(vc);G_=s(vk,"__call__"),vk.forEach(t),K_=s(sl," special method."),sl.forEach(t),J_=m(ss),y(Wa.$$.fragment,ss),Z_=m(ss),y(Va.$$.fragment,ss),ss.forEach(t),wt.forEach(t),Qd=m(o),Wo=r(o,"H2",{class:!0});var im=i(Wo);Fa=r(im,"A",{id:!0,class:!0,href:!0});var bk=i(Fa);bc=r(bk,"SPAN",{});var wk=i(bc);y(Qn.$$.fragment,wk),wk.forEach(t),bk.forEach(t),Q_=m(im),wc=r(im,"SPAN",{});var yk=i(wc);Y_=s(yk,"Wav2Vec2ForPreTraining"),yk.forEach(t),im.forEach(t),Yd=m(o),Le=r(o,"DIV",{class:!0});var Jt=i(Le);y(Yn.$$.fragment,Jt),ev=m(Jt),Vo=r(Jt,"P",{});var nl=i(Vo);tv=s(nl,"Wav2Vec2 Model with a quantizer and "),yc=r(nl,"CODE",{});var kk=i(yc);ov=s(kk,"VQ"),kk.forEach(t),av=s(nl,` head on top.
Wav2Vec2 was proposed in `),er=r(nl,"A",{href:!0,rel:!0});var Tk=i(er);sv=s(Tk,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Tk.forEach(t),nv=s(nl,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),nl.forEach(t),rv=m(Jt),tr=r(Jt,"P",{});var lm=i(tr);iv=s(lm,"This model inherits from "),Li=r(lm,"A",{href:!0});var xk=i(Li);lv=s(xk,"PreTrainedModel"),xk.forEach(t),cv=s(lm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),lm.forEach(t),dv=m(Jt),or=r(Jt,"P",{});var cm=i(or);pv=s(cm,"This model is a PyTorch "),ar=r(cm,"A",{href:!0,rel:!0});var $k=i(ar);mv=s($k,"torch.nn.Module"),$k.forEach(t),hv=s(cm,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cm.forEach(t),fv=m(Jt),pt=r(Jt,"DIV",{class:!0});var ns=i(pt);y(sr.$$.fragment,ns),uv=m(ns),Fo=r(ns,"P",{});var rl=i(Fo);gv=s(rl,"The "),Di=r(rl,"A",{href:!0});var jk=i(Di);_v=s(jk,"Wav2Vec2ForPreTraining"),jk.forEach(t),vv=s(rl," forward method, overrides the "),kc=r(rl,"CODE",{});var Wk=i(kc);bv=s(Wk,"__call__"),Wk.forEach(t),wv=s(rl," special method."),rl.forEach(t),yv=m(ns),y(Ea.$$.fragment,ns),kv=m(ns),y(Ca.$$.fragment,ns),ns.forEach(t),Jt.forEach(t),ep=m(o),Eo=r(o,"H2",{class:!0});var dm=i(Eo);qa=r(dm,"A",{id:!0,class:!0,href:!0});var Vk=i(qa);Tc=r(Vk,"SPAN",{});var Fk=i(Tc);y(nr.$$.fragment,Fk),Fk.forEach(t),Vk.forEach(t),Tv=m(dm),xc=r(dm,"SPAN",{});var Ek=i(xc);xv=s(Ek,"TFWav2Vec2Model"),Ek.forEach(t),dm.forEach(t),tp=m(o),_e=r(o,"DIV",{class:!0});var yt=i(_e);y(rr.$$.fragment,yt),$v=m(yt),$c=r(yt,"P",{});var Ck=i($c);jv=s(Ck,"The bare TFWav2Vec2 Model transformer outputing raw hidden-states without any specific head on top."),Ck.forEach(t),Wv=m(yt),ir=r(yt,"P",{});var pm=i(ir);Vv=s(pm,"This model inherits from "),Si=r(pm,"A",{href:!0});var qk=i(Si);Fv=s(qk,"TFPreTrainedModel"),qk.forEach(t),Ev=s(pm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pm.forEach(t),Cv=m(yt),lr=r(yt,"P",{});var mm=i(lr);qv=s(mm,"This model is also a "),cr=r(mm,"A",{href:!0,rel:!0});var Pk=i(cr);Pv=s(Pk,"tf.keras.Model"),Pk.forEach(t),zv=s(mm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mm.forEach(t),Mv=m(yt),y(Pa.$$.fragment,yt),Av=m(yt),mt=r(yt,"DIV",{class:!0});var rs=i(mt);y(dr.$$.fragment,rs),Ov=m(rs),Co=r(rs,"P",{});var il=i(Co);Lv=s(il,"The "),Ii=r(il,"A",{href:!0});var zk=i(Ii);Dv=s(zk,"TFWav2Vec2Model"),zk.forEach(t),Sv=s(il," forward method, overrides the "),jc=r(il,"CODE",{});var Mk=i(jc);Iv=s(Mk,"__call__"),Mk.forEach(t),Nv=s(il," special method."),il.forEach(t),Bv=m(rs),y(za.$$.fragment,rs),Uv=m(rs),y(Ma.$$.fragment,rs),rs.forEach(t),yt.forEach(t),op=m(o),qo=r(o,"H2",{class:!0});var hm=i(qo);Aa=r(hm,"A",{id:!0,class:!0,href:!0});var Ak=i(Aa);Wc=r(Ak,"SPAN",{});var Ok=i(Wc);y(pr.$$.fragment,Ok),Ok.forEach(t),Ak.forEach(t),Rv=m(hm),Vc=r(hm,"SPAN",{});var Lk=i(Vc);Hv=s(Lk,"TFWav2Vec2ForCTC"),Lk.forEach(t),hm.forEach(t),ap=m(o),ve=r(o,"DIV",{class:!0});var kt=i(ve);y(mr.$$.fragment,kt),Xv=m(kt),hr=r(kt,"P",{});var fm=i(hr);Gv=s(fm,"TFWav2Vec2 Model with a "),Fc=r(fm,"CODE",{});var Dk=i(Fc);Kv=s(Dk,"language modeling"),Dk.forEach(t),Jv=s(fm," head on top for Connectionist Temporal Classification (CTC)."),fm.forEach(t),Zv=m(kt),fr=r(kt,"P",{});var um=i(fr);Qv=s(um,"This model inherits from "),Ni=r(um,"A",{href:!0});var Sk=i(Ni);Yv=s(Sk,"TFPreTrainedModel"),Sk.forEach(t),e2=s(um,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),um.forEach(t),t2=m(kt),ur=r(kt,"P",{});var gm=i(ur);o2=s(gm,"This model is also a "),gr=r(gm,"A",{href:!0,rel:!0});var Ik=i(gr);a2=s(Ik,"tf.keras.Model"),Ik.forEach(t),s2=s(gm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gm.forEach(t),n2=m(kt),y(Oa.$$.fragment,kt),r2=m(kt),ht=r(kt,"DIV",{class:!0});var is=i(ht);y(_r.$$.fragment,is),i2=m(is),Po=r(is,"P",{});var ll=i(Po);l2=s(ll,"The "),Bi=r(ll,"A",{href:!0});var Nk=i(Bi);c2=s(Nk,"TFWav2Vec2ForCTC"),Nk.forEach(t),d2=s(ll," forward method, overrides the "),Ec=r(ll,"CODE",{});var Bk=i(Ec);p2=s(Bk,"__call__"),Bk.forEach(t),m2=s(ll," special method."),ll.forEach(t),h2=m(is),y(La.$$.fragment,is),f2=m(is),y(Da.$$.fragment,is),is.forEach(t),kt.forEach(t),sp=m(o),zo=r(o,"H2",{class:!0});var _m=i(zo);Sa=r(_m,"A",{id:!0,class:!0,href:!0});var Uk=i(Sa);Cc=r(Uk,"SPAN",{});var Rk=i(Cc);y(vr.$$.fragment,Rk),Rk.forEach(t),Uk.forEach(t),u2=m(_m),qc=r(_m,"SPAN",{});var Hk=i(qc);g2=s(Hk,"FlaxWav2Vec2Model"),Hk.forEach(t),_m.forEach(t),np=m(o),re=r(o,"DIV",{class:!0});var He=i(re);y(br.$$.fragment,He),_2=m(He),wr=r(He,"P",{});var vm=i(wr);v2=s(vm,`The bare Wav2Vec2 Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2 was proposed in `),yr=r(vm,"A",{href:!0,rel:!0});var Xk=i(yr);b2=s(Xk,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Xk.forEach(t),w2=s(vm,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),vm.forEach(t),y2=m(He),kr=r(He,"P",{});var bm=i(kr);k2=s(bm,"This model inherits from "),Ui=r(bm,"A",{href:!0});var Gk=i(Ui);T2=s(Gk,"FlaxPreTrainedModel"),Gk.forEach(t),x2=s(bm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bm.forEach(t),$2=m(He),Tr=r(He,"P",{});var wm=i(Tr);j2=s(wm,`This model is also a Flax Linen
`),xr=r(wm,"A",{href:!0,rel:!0});var Kk=i(xr);W2=s(Kk,"flax.nn.Module"),Kk.forEach(t),V2=s(wm,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),wm.forEach(t),F2=m(He),Pc=r(He,"P",{});var Jk=i(Pc);E2=s(Jk,"Finally, this model supports inherent JAX features such as:"),Jk.forEach(t),C2=m(He),Ot=r(He,"UL",{});var ls=i(Ot);zc=r(ls,"LI",{});var Zk=i(zc);$r=r(Zk,"A",{href:!0,rel:!0});var Qk=i($r);q2=s(Qk,"Just-In-Time (JIT) compilation"),Qk.forEach(t),Zk.forEach(t),P2=m(ls),Mc=r(ls,"LI",{});var Yk=i(Mc);jr=r(Yk,"A",{href:!0,rel:!0});var e0=i(jr);z2=s(e0,"Automatic Differentiation"),e0.forEach(t),Yk.forEach(t),M2=m(ls),Ac=r(ls,"LI",{});var t0=i(Ac);Wr=r(t0,"A",{href:!0,rel:!0});var o0=i(Wr);A2=s(o0,"Vectorization"),o0.forEach(t),t0.forEach(t),O2=m(ls),Oc=r(ls,"LI",{});var a0=i(Oc);Vr=r(a0,"A",{href:!0,rel:!0});var s0=i(Vr);L2=s(s0,"Parallelization"),s0.forEach(t),a0.forEach(t),ls.forEach(t),D2=m(He),ft=r(He,"DIV",{class:!0});var cs=i(ft);y(Fr.$$.fragment,cs),S2=m(cs),Mo=r(cs,"P",{});var cl=i(Mo);I2=s(cl,"The "),Lc=r(cl,"CODE",{});var n0=i(Lc);N2=s(n0,"FlaxWav2Vec2PreTrainedModel"),n0.forEach(t),B2=s(cl," forward method, overrides the "),Dc=r(cl,"CODE",{});var r0=i(Dc);U2=s(r0,"__call__"),r0.forEach(t),R2=s(cl," special method."),cl.forEach(t),H2=m(cs),y(Ia.$$.fragment,cs),X2=m(cs),y(Na.$$.fragment,cs),cs.forEach(t),He.forEach(t),rp=m(o),Ao=r(o,"H2",{class:!0});var ym=i(Ao);Ba=r(ym,"A",{id:!0,class:!0,href:!0});var i0=i(Ba);Sc=r(i0,"SPAN",{});var l0=i(Sc);y(Er.$$.fragment,l0),l0.forEach(t),i0.forEach(t),G2=m(ym),Ic=r(ym,"SPAN",{});var c0=i(Ic);K2=s(c0,"FlaxWav2Vec2ForCTC"),c0.forEach(t),ym.forEach(t),ip=m(o),ie=r(o,"DIV",{class:!0});var Xe=i(ie);y(Cr.$$.fragment,Xe),J2=m(Xe),Oo=r(Xe,"P",{});var dl=i(Oo);Z2=s(dl,"Wav2Vec2 Model with a "),Nc=r(dl,"CODE",{});var d0=i(Nc);Q2=s(d0,"language modeling"),d0.forEach(t),Y2=s(dl,` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2 was proposed in `),qr=r(dl,"A",{href:!0,rel:!0});var p0=i(qr);eb=s(p0,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),p0.forEach(t),tb=s(dl,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),dl.forEach(t),ob=m(Xe),Pr=r(Xe,"P",{});var km=i(Pr);ab=s(km,"This model inherits from "),Ri=r(km,"A",{href:!0});var m0=i(Ri);sb=s(m0,"FlaxPreTrainedModel"),m0.forEach(t),nb=s(km,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),km.forEach(t),rb=m(Xe),zr=r(Xe,"P",{});var Tm=i(zr);ib=s(Tm,`This model is also a Flax Linen
`),Mr=r(Tm,"A",{href:!0,rel:!0});var h0=i(Mr);lb=s(h0,"flax.nn.Module"),h0.forEach(t),cb=s(Tm,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Tm.forEach(t),db=m(Xe),Bc=r(Xe,"P",{});var f0=i(Bc);pb=s(f0,"Finally, this model supports inherent JAX features such as:"),f0.forEach(t),mb=m(Xe),Lt=r(Xe,"UL",{});var ds=i(Lt);Uc=r(ds,"LI",{});var u0=i(Uc);Ar=r(u0,"A",{href:!0,rel:!0});var g0=i(Ar);hb=s(g0,"Just-In-Time (JIT) compilation"),g0.forEach(t),u0.forEach(t),fb=m(ds),Rc=r(ds,"LI",{});var _0=i(Rc);Or=r(_0,"A",{href:!0,rel:!0});var v0=i(Or);ub=s(v0,"Automatic Differentiation"),v0.forEach(t),_0.forEach(t),gb=m(ds),Hc=r(ds,"LI",{});var b0=i(Hc);Lr=r(b0,"A",{href:!0,rel:!0});var w0=i(Lr);_b=s(w0,"Vectorization"),w0.forEach(t),b0.forEach(t),vb=m(ds),Xc=r(ds,"LI",{});var y0=i(Xc);Dr=r(y0,"A",{href:!0,rel:!0});var k0=i(Dr);bb=s(k0,"Parallelization"),k0.forEach(t),y0.forEach(t),ds.forEach(t),wb=m(Xe),ut=r(Xe,"DIV",{class:!0});var ps=i(ut);y(Sr.$$.fragment,ps),yb=m(ps),Lo=r(ps,"P",{});var pl=i(Lo);kb=s(pl,"The "),Gc=r(pl,"CODE",{});var T0=i(Gc);Tb=s(T0,"FlaxWav2Vec2PreTrainedModel"),T0.forEach(t),xb=s(pl," forward method, overrides the "),Kc=r(pl,"CODE",{});var x0=i(Kc);$b=s(x0,"__call__"),x0.forEach(t),jb=s(pl," special method."),pl.forEach(t),Wb=m(ps),y(Ua.$$.fragment,ps),Vb=m(ps),y(Ra.$$.fragment,ps),ps.forEach(t),Xe.forEach(t),lp=m(o),Do=r(o,"H2",{class:!0});var xm=i(Do);Ha=r(xm,"A",{id:!0,class:!0,href:!0});var $0=i(Ha);Jc=r($0,"SPAN",{});var j0=i(Jc);y(Ir.$$.fragment,j0),j0.forEach(t),$0.forEach(t),Fb=m(xm),Zc=r(xm,"SPAN",{});var W0=i(Zc);Eb=s(W0,"FlaxWav2Vec2ForPreTraining"),W0.forEach(t),xm.forEach(t),cp=m(o),le=r(o,"DIV",{class:!0});var Ge=i(le);y(Nr.$$.fragment,Ge),Cb=m(Ge),So=r(Ge,"P",{});var ml=i(So);qb=s(ml,"Wav2Vec2 Model with a quantizer and "),Qc=r(ml,"CODE",{});var V0=i(Qc);Pb=s(V0,"VQ"),V0.forEach(t),zb=s(ml,` head on top.
Wav2Vec2 was proposed in `),Br=r(ml,"A",{href:!0,rel:!0});var F0=i(Br);Mb=s(F0,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),F0.forEach(t),Ab=s(ml,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),ml.forEach(t),Ob=m(Ge),Ur=r(Ge,"P",{});var $m=i(Ur);Lb=s($m,"This model inherits from "),Hi=r($m,"A",{href:!0});var E0=i(Hi);Db=s(E0,"FlaxPreTrainedModel"),E0.forEach(t),Sb=s($m,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$m.forEach(t),Ib=m(Ge),Rr=r(Ge,"P",{});var jm=i(Rr);Nb=s(jm,`This model is also a Flax Linen
`),Hr=r(jm,"A",{href:!0,rel:!0});var C0=i(Hr);Bb=s(C0,"flax.nn.Module"),C0.forEach(t),Ub=s(jm,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),jm.forEach(t),Rb=m(Ge),Yc=r(Ge,"P",{});var q0=i(Yc);Hb=s(q0,"Finally, this model supports inherent JAX features such as:"),q0.forEach(t),Xb=m(Ge),Dt=r(Ge,"UL",{});var ms=i(Dt);ed=r(ms,"LI",{});var P0=i(ed);Xr=r(P0,"A",{href:!0,rel:!0});var z0=i(Xr);Gb=s(z0,"Just-In-Time (JIT) compilation"),z0.forEach(t),P0.forEach(t),Kb=m(ms),td=r(ms,"LI",{});var M0=i(td);Gr=r(M0,"A",{href:!0,rel:!0});var A0=i(Gr);Jb=s(A0,"Automatic Differentiation"),A0.forEach(t),M0.forEach(t),Zb=m(ms),od=r(ms,"LI",{});var O0=i(od);Kr=r(O0,"A",{href:!0,rel:!0});var L0=i(Kr);Qb=s(L0,"Vectorization"),L0.forEach(t),O0.forEach(t),Yb=m(ms),ad=r(ms,"LI",{});var D0=i(ad);Jr=r(D0,"A",{href:!0,rel:!0});var S0=i(Jr);ew=s(S0,"Parallelization"),S0.forEach(t),D0.forEach(t),ms.forEach(t),tw=m(Ge),gt=r(Ge,"DIV",{class:!0});var hs=i(gt);y(Zr.$$.fragment,hs),ow=m(hs),Io=r(hs,"P",{});var hl=i(Io);aw=s(hl,"The "),Xi=r(hl,"A",{href:!0});var I0=i(Xi);sw=s(I0,"FlaxWav2Vec2ForPreTraining"),I0.forEach(t),nw=s(hl," forward method, overrides the "),sd=r(hl,"CODE",{});var N0=i(sd);rw=s(N0,"__call__"),N0.forEach(t),iw=s(hl," special method."),hl.forEach(t),lw=m(hs),y(Xa.$$.fragment,hs),cw=m(hs),y(Ga.$$.fragment,hs),hs.forEach(t),Ge.forEach(t),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(WT)),d(u,"id","wav2vec2"),d(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(u,"href","#wav2vec2"),d(f,"class","relative group"),d(z,"id","overview"),d(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(z,"href","#overview"),d(P,"class","relative group"),d(I,"href","https://arxiv.org/abs/2006.11477"),d(I,"rel","nofollow"),d(R,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),d(qe,"href","https://huggingface.co/patrickvonplaten"),d(qe,"rel","nofollow"),d(ye,"id","transformers.Wav2Vec2Config"),d(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ye,"href","#transformers.Wav2Vec2Config"),d(Y,"class","relative group"),d(at,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Model"),d(Ze,"href","https://huggingface.co/facebook/wav2vec2-base-960h"),d(Ze,"rel","nofollow"),d(st,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(nt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Uo,"id","transformers.Wav2Vec2CTCTokenizer"),d(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Uo,"href","#transformers.Wav2Vec2CTCTokenizer"),d(ro,"class","relative group"),d(ri,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ii,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Go,"id","transformers.Wav2Vec2FeatureExtractor"),d(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Go,"href","#transformers.Wav2Vec2FeatureExtractor"),d(io,"class","relative group"),d(li,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor"),d(Ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Jo,"id","transformers.Wav2Vec2Processor"),d(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Jo,"href","#transformers.Wav2Vec2Processor"),d(lo,"class","relative group"),d(ci,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor"),d(di,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),d(pi,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(Vs,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__"),d(mi,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.decode"),d(Es,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor.__call__"),d(Cs,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),d(Zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(hi,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor.pad"),d(fi,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.pad"),d(Qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ui,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(gi,"href","/docs/transformers/main/en/model_doc/trocr#transformers.TrOCRProcessor.from_pretrained"),d(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(_i,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),d(ea,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(vi,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),d(ta,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(oa,"id","transformers.Wav2Vec2ProcessorWithLM"),d(oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(oa,"href","#transformers.Wav2Vec2ProcessorWithLM"),d(co,"class","relative group"),d(Bs,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor.__call__"),d(Us,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),d(aa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(bi,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.SequenceFeatureExtractor.pad"),d(wi,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.pad"),d(sa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(yi,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ProcessorWithLM"),d(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ki,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ti,"href","#decoding-multiple-audios"),d(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(la,"id","decoding-multiple-audios"),d(la,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(la,"href","#decoding-multiple-audios"),d(po,"class","relative group"),d(xi,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ProcessorWithLM.batch_decode"),d($i,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ProcessorWithLM.batch_decode"),d(ji,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ProcessorWithLM.decode"),d(ca,"id","transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput"),d(ca,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ca,"href","#transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput"),d(mo,"class","relative group"),d(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Wi,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ForPreTraining"),d(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(da,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(pa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ma,"id","transformers.Wav2Vec2Model"),d(ma,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ma,"href","#transformers.Wav2Vec2Model"),d(go,"class","relative group"),d(gn,"href","https://arxiv.org/abs/2006.11477"),d(gn,"rel","nofollow"),d(Vi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(bn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(bn,"rel","nofollow"),d(Fi,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Model"),d(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ua,"id","transformers.Wav2Vec2ForCTC"),d(ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ua,"href","#transformers.Wav2Vec2ForCTC"),d(vo,"class","relative group"),d(Tn,"href","https://arxiv.org/abs/2006.11477"),d(Tn,"rel","nofollow"),d(Ei,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(jn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(jn,"rel","nofollow"),d(Ci,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC"),d(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ba,"id","transformers.Wav2Vec2ForSequenceClassification"),d(ba,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ba,"href","#transformers.Wav2Vec2ForSequenceClassification"),d(yo,"class","relative group"),d(Cn,"href","https://arxiv.org/abs/2006.11477"),d(Cn,"rel","nofollow"),d(qi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(zn,"rel","nofollow"),d(Pi,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ForSequenceClassification"),d(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ta,"id","transformers.Wav2Vec2ForAudioFrameClassification"),d(Ta,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ta,"href","#transformers.Wav2Vec2ForAudioFrameClassification"),d(To,"class","relative group"),d(Dn,"href","https://arxiv.org/abs/2006.11477"),d(Dn,"rel","nofollow"),d(zi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(Nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Nn,"rel","nofollow"),d(Mi,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ForAudioFrameClassification"),d(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ja,"id","transformers.Wav2Vec2ForXVector"),d(ja,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ja,"href","#transformers.Wav2Vec2ForXVector"),d($o,"class","relative group"),d(Xn,"href","https://arxiv.org/abs/2006.11477"),d(Xn,"rel","nofollow"),d(Ai,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(Jn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Jn,"rel","nofollow"),d(Oi,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ForXVector"),d(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Fa,"id","transformers.Wav2Vec2ForPreTraining"),d(Fa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Fa,"href","#transformers.Wav2Vec2ForPreTraining"),d(Wo,"class","relative group"),d(er,"href","https://arxiv.org/abs/2006.11477"),d(er,"rel","nofollow"),d(Li,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(ar,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(ar,"rel","nofollow"),d(Di,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ForPreTraining"),d(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(qa,"id","transformers.TFWav2Vec2Model"),d(qa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(qa,"href","#transformers.TFWav2Vec2Model"),d(Eo,"class","relative group"),d(Si,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),d(cr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(cr,"rel","nofollow"),d(Ii,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.TFWav2Vec2Model"),d(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Aa,"id","transformers.TFWav2Vec2ForCTC"),d(Aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Aa,"href","#transformers.TFWav2Vec2ForCTC"),d(qo,"class","relative group"),d(Ni,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),d(gr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(gr,"rel","nofollow"),d(Bi,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.TFWav2Vec2ForCTC"),d(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Sa,"id","transformers.FlaxWav2Vec2Model"),d(Sa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Sa,"href","#transformers.FlaxWav2Vec2Model"),d(zo,"class","relative group"),d(yr,"href","https://arxiv.org/abs/2006.11477"),d(yr,"rel","nofollow"),d(Ui,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(xr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),d(xr,"rel","nofollow"),d($r,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d($r,"rel","nofollow"),d(jr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(jr,"rel","nofollow"),d(Wr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Wr,"rel","nofollow"),d(Vr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Vr,"rel","nofollow"),d(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ba,"id","transformers.FlaxWav2Vec2ForCTC"),d(Ba,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ba,"href","#transformers.FlaxWav2Vec2ForCTC"),d(Ao,"class","relative group"),d(qr,"href","https://arxiv.org/abs/2006.11477"),d(qr,"rel","nofollow"),d(Ri,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(Mr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),d(Mr,"rel","nofollow"),d(Ar,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(Ar,"rel","nofollow"),d(Or,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Or,"rel","nofollow"),d(Lr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Lr,"rel","nofollow"),d(Dr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Dr,"rel","nofollow"),d(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ha,"id","transformers.FlaxWav2Vec2ForPreTraining"),d(Ha,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ha,"href","#transformers.FlaxWav2Vec2ForPreTraining"),d(Do,"class","relative group"),d(Br,"href","https://arxiv.org/abs/2006.11477"),d(Br,"rel","nofollow"),d(Hi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(Hr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),d(Hr,"rel","nofollow"),d(Xr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(Xr,"rel","nofollow"),d(Gr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Gr,"rel","nofollow"),d(Kr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Kr,"rel","nofollow"),d(Jr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Jr,"rel","nofollow"),d(Xi,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.FlaxWav2Vec2ForPreTraining"),d(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,c),_(o,b,g),_(o,f,g),e(f,u),e(u,v),k(l,v,null),e(f,h),e(f,V),e(V,M),_(o,A,g),_(o,P,g),e(P,z),e(z,N),k(E,N,null),e(P,O),e(P,q),e(q,ce),_(o,K,g),_(o,S,g),e(S,de),e(S,I),e(I,U),e(S,De),_(o,H,g),_(o,J,g),e(J,Se),_(o,We,g),_(o,Z,g),e(Z,Ke),e(Ke,Tt),_(o,Ie,g),_(o,D,g),e(D,Q),_(o,Ye,g),_(o,oe,g),e(oe,Je),e(Je,xt),e(oe,Ve),e(oe,Fe),e(Fe,$t),e(Fe,R),e(R,jt),e(Fe,Ee),_(o,et,g),_(o,we,g),e(we,Ce),e(we,qe),e(qe,Wt),e(we,he),_(o,tt,g),_(o,Y,g),e(Y,ye),e(ye,Pe),k(B,Pe,null),e(Y,Vt),e(Y,ee),e(ee,Ft),_(o,ot,g),_(o,j,g),k(C,j,null),e(j,Zt),e(j,se),e(se,Qt),e(se,at),e(at,L),e(se,Yt),e(se,Ze),e(Ze,eo),e(se,to),e(j,oo),e(j,X),e(X,ze),e(X,st),e(st,ao),e(X,Me),e(X,nt),e(nt,so),e(X,Et),e(j,no),k(pe,j,null),_(o,Nt,g),_(o,ro,g),e(ro,Uo),e(Uo,fl),k(fs,fl,null),e(ro,Wm),e(ro,ul),e(ul,Vm),_(o,jd,g),_(o,ne,g),k(us,ne,null),e(ne,Fm),e(ne,gl),e(gl,Em),e(ne,Cm),e(ne,gs),e(gs,qm),e(gs,ri),e(ri,Pm),e(gs,zm),e(ne,Mm),e(ne,Ro),k(_s,Ro,null),e(Ro,Am),e(Ro,_l),e(_l,Om),e(ne,Lm),e(ne,ii),k(vs,ii,null),e(ne,Dm),e(ne,rt),k(bs,rt,null),e(rt,Sm),e(rt,vl),e(vl,Im),e(rt,Nm),e(rt,ws),e(ws,Bm),e(ws,bl),e(bl,Um),e(ws,Rm),e(rt,Hm),k(Ho,rt,null),e(ne,Xm),e(ne,Xo),k(ys,Xo,null),e(Xo,Gm),e(Xo,wl),e(wl,Km),_(o,Wd,g),_(o,io,g),e(io,Go),e(Go,yl),k(ks,yl,null),e(io,Jm),e(io,kl),e(kl,Zm),_(o,Vd,g),_(o,Qe,g),k(Ts,Qe,null),e(Qe,Qm),e(Qe,Tl),e(Tl,Ym),e(Qe,eh),e(Qe,xs),e(xs,th),e(xs,li),e(li,oh),e(xs,ah),e(Qe,sh),e(Qe,Ko),k($s,Ko,null),e(Ko,nh),e(Ko,xl),e(xl,rh),_(o,Fd,g),_(o,lo,g),e(lo,Jo),e(Jo,$l),k(js,$l,null),e(lo,ih),e(lo,jl),e(jl,lh),_(o,Ed,g),_(o,G,g),k(Ws,G,null),e(G,ch),e(G,Wl),e(Wl,dh),e(G,ph),e(G,Ne),e(Ne,ci),e(ci,mh),e(Ne,hh),e(Ne,di),e(di,fh),e(Ne,uh),e(Ne,pi),e(pi,gh),e(Ne,_h),e(Ne,Vs),e(Vs,Vl),e(Vl,vh),e(Vs,bh),e(Ne,wh),e(Ne,mi),e(mi,yh),e(Ne,kh),e(G,Th),e(G,Zo),k(Fs,Zo,null),e(Zo,xh),e(Zo,Ct),e(Ct,$h),e(Ct,Es),e(Es,Fl),e(Fl,jh),e(Es,Wh),e(Ct,Vh),e(Ct,El),e(El,Fh),e(Ct,Eh),e(Ct,Cs),e(Cs,Cl),e(Cl,Ch),e(Cs,qh),e(Ct,Ph),e(G,zh),e(G,Qo),k(qs,Qo,null),e(Qo,Mh),e(Qo,qt),e(qt,Ah),e(qt,hi),e(hi,Oh),e(qt,Lh),e(qt,ql),e(ql,Dh),e(qt,Sh),e(qt,fi),e(fi,Ih),e(qt,Nh),e(G,Bh),e(G,ui),k(Ps,ui,null),e(G,Uh),e(G,Bt),k(zs,Bt,null),e(Bt,Rh),e(Bt,Ms),e(Ms,Hh),e(Ms,gi),e(gi,Xh),e(Ms,Gh),e(Bt,Kh),k(Yo,Bt,null),e(G,Jh),e(G,ea),k(As,ea,null),e(ea,Zh),e(ea,Os),e(Os,Qh),e(Os,_i),e(_i,Yh),e(Os,ef),e(G,tf),e(G,ta),k(Ls,ta,null),e(ta,of),e(ta,Ds),e(Ds,af),e(Ds,vi),e(vi,sf),e(Ds,nf),_(o,Cd,g),_(o,co,g),e(co,oa),e(oa,Pl),k(Ss,Pl,null),e(co,rf),e(co,zl),e(zl,lf),_(o,qd,g),_(o,te,g),k(Is,te,null),e(te,cf),e(te,Ml),e(Ml,df),e(te,pf),e(te,aa),k(Ns,aa,null),e(aa,mf),e(aa,Pt),e(Pt,hf),e(Pt,Bs),e(Bs,Al),e(Al,ff),e(Bs,uf),e(Pt,gf),e(Pt,Ol),e(Ol,_f),e(Pt,vf),e(Pt,Us),e(Us,Ll),e(Ll,bf),e(Us,wf),e(Pt,yf),e(te,kf),e(te,sa),k(Rs,sa,null),e(sa,Tf),e(sa,zt),e(zt,xf),e(zt,bi),e(bi,$f),e(zt,jf),e(zt,Dl),e(Dl,Wf),e(zt,Vf),e(zt,wi),e(wi,Ff),e(zt,Ef),e(te,Cf),e(te,Ut),k(Hs,Ut,null),e(Ut,qf),e(Ut,Xs),e(Xs,Pf),e(Xs,yi),e(yi,zf),e(Xs,Mf),e(Ut,Af),k(na,Ut,null),e(te,Of),e(te,ki),k(Gs,ki,null),e(te,Lf),e(te,it),k(Ks,it,null),e(it,Df),e(it,Sl),e(Sl,Sf),e(it,If),k(ra,it,null),e(it,Nf),e(it,Js),e(Js,Bf),e(Js,Ti),e(Ti,Uf),e(Js,Rf),e(te,Hf),e(te,Rt),k(Zs,Rt,null),e(Rt,Xf),e(Rt,Il),e(Il,Gf),e(Rt,Kf),k(ia,Rt,null),_(o,Pd,g),_(o,po,g),e(po,la),e(la,Nl),k(Qs,Nl,null),e(po,Jf),e(po,Bl),e(Bl,Zf),_(o,zd,g),_(o,ke,g),e(ke,Qf),e(ke,xi),e(xi,Yf),e(ke,eu),e(ke,Ul),e(Ul,tu),e(ke,ou),e(ke,$i),e($i,au),e(ke,su),e(ke,ji),e(ji,nu),e(ke,ru),e(ke,Rl),e(Rl,iu),e(ke,lu),_(o,Md,g),k(Ys,o,g),_(o,Ad,g),_(o,mo,g),e(mo,ca),e(ca,Hl),k(en,Hl,null),e(mo,cu),e(mo,Xl),e(Xl,du),_(o,Od,g),_(o,ho,g),k(tn,ho,null),e(ho,pu),e(ho,on),e(on,mu),e(on,Gl),e(Gl,hu),e(on,fu),_(o,Ld,g),_(o,fo,g),k(an,fo,null),e(fo,uu),e(fo,Kl),e(Kl,gu),_(o,Dd,g),_(o,uo,g),k(sn,uo,null),e(uo,_u),e(uo,nn),e(nn,vu),e(nn,Wi),e(Wi,bu),e(nn,wu),_(o,Sd,g),_(o,Mt,g),k(rn,Mt,null),e(Mt,yu),e(Mt,ln),e(ln,ku),e(ln,Jl),e(Jl,Tu),e(ln,xu),e(Mt,$u),e(Mt,da),k(cn,da,null),e(da,ju),e(da,Zl),e(Zl,Wu),_(o,Id,g),_(o,At,g),k(dn,At,null),e(At,Vu),e(At,pn),e(pn,Fu),e(pn,Ql),e(Ql,Eu),e(pn,Cu),e(At,qu),e(At,pa),k(mn,pa,null),e(pa,Pu),e(pa,Yl),e(Yl,zu),_(o,Nd,g),_(o,go,g),e(go,ma),e(ma,ec),k(hn,ec,null),e(go,Mu),e(go,tc),e(tc,Au),_(o,Bd,g),_(o,Ae,g),k(fn,Ae,null),e(Ae,Ou),e(Ae,un),e(un,Lu),e(un,gn),e(gn,Du),e(un,Su),e(Ae,Iu),e(Ae,_n),e(_n,Nu),e(_n,Vi),e(Vi,Bu),e(_n,Uu),e(Ae,Ru),e(Ae,vn),e(vn,Hu),e(vn,bn),e(bn,Xu),e(vn,Gu),e(Ae,Ku),e(Ae,lt),k(wn,lt,null),e(lt,Ju),e(lt,_o),e(_o,Zu),e(_o,Fi),e(Fi,Qu),e(_o,Yu),e(_o,oc),e(oc,eg),e(_o,tg),e(lt,og),k(ha,lt,null),e(lt,ag),k(fa,lt,null),_(o,Ud,g),_(o,vo,g),e(vo,ua),e(ua,ac),k(yn,ac,null),e(vo,sg),e(vo,sc),e(sc,ng),_(o,Rd,g),_(o,Oe,g),k(kn,Oe,null),e(Oe,rg),e(Oe,bo),e(bo,ig),e(bo,nc),e(nc,lg),e(bo,cg),e(bo,Tn),e(Tn,dg),e(bo,pg),e(Oe,mg),e(Oe,xn),e(xn,hg),e(xn,Ei),e(Ei,fg),e(xn,ug),e(Oe,gg),e(Oe,$n),e($n,_g),e($n,jn),e(jn,vg),e($n,bg),e(Oe,wg),e(Oe,Be),k(Wn,Be,null),e(Be,yg),e(Be,wo),e(wo,kg),e(wo,Ci),e(Ci,Tg),e(wo,xg),e(wo,rc),e(rc,$g),e(wo,jg),e(Be,Wg),k(ga,Be,null),e(Be,Vg),k(_a,Be,null),e(Be,Fg),k(va,Be,null),_(o,Hd,g),_(o,yo,g),e(yo,ba),e(ba,ic),k(Vn,ic,null),e(yo,Eg),e(yo,lc),e(lc,Cg),_(o,Xd,g),_(o,fe,g),k(Fn,fe,null),e(fe,qg),e(fe,cc),e(cc,Pg),e(fe,zg),e(fe,En),e(En,Mg),e(En,Cn),e(Cn,Ag),e(En,Og),e(fe,Lg),e(fe,qn),e(qn,Dg),e(qn,qi),e(qi,Sg),e(qn,Ig),e(fe,Ng),e(fe,Pn),e(Pn,Bg),e(Pn,zn),e(zn,Ug),e(Pn,Rg),e(fe,Hg),e(fe,Ue),k(Mn,Ue,null),e(Ue,Xg),e(Ue,ko),e(ko,Gg),e(ko,Pi),e(Pi,Kg),e(ko,Jg),e(ko,dc),e(dc,Zg),e(ko,Qg),e(Ue,Yg),k(wa,Ue,null),e(Ue,e_),k(ya,Ue,null),e(Ue,t_),k(ka,Ue,null),_(o,Gd,g),_(o,To,g),e(To,Ta),e(Ta,pc),k(An,pc,null),e(To,o_),e(To,mc),e(mc,a_),_(o,Kd,g),_(o,ue,g),k(On,ue,null),e(ue,s_),e(ue,hc),e(hc,n_),e(ue,r_),e(ue,Ln),e(Ln,i_),e(Ln,Dn),e(Dn,l_),e(Ln,c_),e(ue,d_),e(ue,Sn),e(Sn,p_),e(Sn,zi),e(zi,m_),e(Sn,h_),e(ue,f_),e(ue,In),e(In,u_),e(In,Nn),e(Nn,g_),e(In,__),e(ue,v_),e(ue,ct),k(Bn,ct,null),e(ct,b_),e(ct,xo),e(xo,w_),e(xo,Mi),e(Mi,y_),e(xo,k_),e(xo,fc),e(fc,T_),e(xo,x_),e(ct,$_),k(xa,ct,null),e(ct,j_),k($a,ct,null),_(o,Jd,g),_(o,$o,g),e($o,ja),e(ja,uc),k(Un,uc,null),e($o,W_),e($o,gc),e(gc,V_),_(o,Zd,g),_(o,ge,g),k(Rn,ge,null),e(ge,F_),e(ge,_c),e(_c,E_),e(ge,C_),e(ge,Hn),e(Hn,q_),e(Hn,Xn),e(Xn,P_),e(Hn,z_),e(ge,M_),e(ge,Gn),e(Gn,A_),e(Gn,Ai),e(Ai,O_),e(Gn,L_),e(ge,D_),e(ge,Kn),e(Kn,S_),e(Kn,Jn),e(Jn,I_),e(Kn,N_),e(ge,B_),e(ge,dt),k(Zn,dt,null),e(dt,U_),e(dt,jo),e(jo,R_),e(jo,Oi),e(Oi,H_),e(jo,X_),e(jo,vc),e(vc,G_),e(jo,K_),e(dt,J_),k(Wa,dt,null),e(dt,Z_),k(Va,dt,null),_(o,Qd,g),_(o,Wo,g),e(Wo,Fa),e(Fa,bc),k(Qn,bc,null),e(Wo,Q_),e(Wo,wc),e(wc,Y_),_(o,Yd,g),_(o,Le,g),k(Yn,Le,null),e(Le,ev),e(Le,Vo),e(Vo,tv),e(Vo,yc),e(yc,ov),e(Vo,av),e(Vo,er),e(er,sv),e(Vo,nv),e(Le,rv),e(Le,tr),e(tr,iv),e(tr,Li),e(Li,lv),e(tr,cv),e(Le,dv),e(Le,or),e(or,pv),e(or,ar),e(ar,mv),e(or,hv),e(Le,fv),e(Le,pt),k(sr,pt,null),e(pt,uv),e(pt,Fo),e(Fo,gv),e(Fo,Di),e(Di,_v),e(Fo,vv),e(Fo,kc),e(kc,bv),e(Fo,wv),e(pt,yv),k(Ea,pt,null),e(pt,kv),k(Ca,pt,null),_(o,ep,g),_(o,Eo,g),e(Eo,qa),e(qa,Tc),k(nr,Tc,null),e(Eo,Tv),e(Eo,xc),e(xc,xv),_(o,tp,g),_(o,_e,g),k(rr,_e,null),e(_e,$v),e(_e,$c),e($c,jv),e(_e,Wv),e(_e,ir),e(ir,Vv),e(ir,Si),e(Si,Fv),e(ir,Ev),e(_e,Cv),e(_e,lr),e(lr,qv),e(lr,cr),e(cr,Pv),e(lr,zv),e(_e,Mv),k(Pa,_e,null),e(_e,Av),e(_e,mt),k(dr,mt,null),e(mt,Ov),e(mt,Co),e(Co,Lv),e(Co,Ii),e(Ii,Dv),e(Co,Sv),e(Co,jc),e(jc,Iv),e(Co,Nv),e(mt,Bv),k(za,mt,null),e(mt,Uv),k(Ma,mt,null),_(o,op,g),_(o,qo,g),e(qo,Aa),e(Aa,Wc),k(pr,Wc,null),e(qo,Rv),e(qo,Vc),e(Vc,Hv),_(o,ap,g),_(o,ve,g),k(mr,ve,null),e(ve,Xv),e(ve,hr),e(hr,Gv),e(hr,Fc),e(Fc,Kv),e(hr,Jv),e(ve,Zv),e(ve,fr),e(fr,Qv),e(fr,Ni),e(Ni,Yv),e(fr,e2),e(ve,t2),e(ve,ur),e(ur,o2),e(ur,gr),e(gr,a2),e(ur,s2),e(ve,n2),k(Oa,ve,null),e(ve,r2),e(ve,ht),k(_r,ht,null),e(ht,i2),e(ht,Po),e(Po,l2),e(Po,Bi),e(Bi,c2),e(Po,d2),e(Po,Ec),e(Ec,p2),e(Po,m2),e(ht,h2),k(La,ht,null),e(ht,f2),k(Da,ht,null),_(o,sp,g),_(o,zo,g),e(zo,Sa),e(Sa,Cc),k(vr,Cc,null),e(zo,u2),e(zo,qc),e(qc,g2),_(o,np,g),_(o,re,g),k(br,re,null),e(re,_2),e(re,wr),e(wr,v2),e(wr,yr),e(yr,b2),e(wr,w2),e(re,y2),e(re,kr),e(kr,k2),e(kr,Ui),e(Ui,T2),e(kr,x2),e(re,$2),e(re,Tr),e(Tr,j2),e(Tr,xr),e(xr,W2),e(Tr,V2),e(re,F2),e(re,Pc),e(Pc,E2),e(re,C2),e(re,Ot),e(Ot,zc),e(zc,$r),e($r,q2),e(Ot,P2),e(Ot,Mc),e(Mc,jr),e(jr,z2),e(Ot,M2),e(Ot,Ac),e(Ac,Wr),e(Wr,A2),e(Ot,O2),e(Ot,Oc),e(Oc,Vr),e(Vr,L2),e(re,D2),e(re,ft),k(Fr,ft,null),e(ft,S2),e(ft,Mo),e(Mo,I2),e(Mo,Lc),e(Lc,N2),e(Mo,B2),e(Mo,Dc),e(Dc,U2),e(Mo,R2),e(ft,H2),k(Ia,ft,null),e(ft,X2),k(Na,ft,null),_(o,rp,g),_(o,Ao,g),e(Ao,Ba),e(Ba,Sc),k(Er,Sc,null),e(Ao,G2),e(Ao,Ic),e(Ic,K2),_(o,ip,g),_(o,ie,g),k(Cr,ie,null),e(ie,J2),e(ie,Oo),e(Oo,Z2),e(Oo,Nc),e(Nc,Q2),e(Oo,Y2),e(Oo,qr),e(qr,eb),e(Oo,tb),e(ie,ob),e(ie,Pr),e(Pr,ab),e(Pr,Ri),e(Ri,sb),e(Pr,nb),e(ie,rb),e(ie,zr),e(zr,ib),e(zr,Mr),e(Mr,lb),e(zr,cb),e(ie,db),e(ie,Bc),e(Bc,pb),e(ie,mb),e(ie,Lt),e(Lt,Uc),e(Uc,Ar),e(Ar,hb),e(Lt,fb),e(Lt,Rc),e(Rc,Or),e(Or,ub),e(Lt,gb),e(Lt,Hc),e(Hc,Lr),e(Lr,_b),e(Lt,vb),e(Lt,Xc),e(Xc,Dr),e(Dr,bb),e(ie,wb),e(ie,ut),k(Sr,ut,null),e(ut,yb),e(ut,Lo),e(Lo,kb),e(Lo,Gc),e(Gc,Tb),e(Lo,xb),e(Lo,Kc),e(Kc,$b),e(Lo,jb),e(ut,Wb),k(Ua,ut,null),e(ut,Vb),k(Ra,ut,null),_(o,lp,g),_(o,Do,g),e(Do,Ha),e(Ha,Jc),k(Ir,Jc,null),e(Do,Fb),e(Do,Zc),e(Zc,Eb),_(o,cp,g),_(o,le,g),k(Nr,le,null),e(le,Cb),e(le,So),e(So,qb),e(So,Qc),e(Qc,Pb),e(So,zb),e(So,Br),e(Br,Mb),e(So,Ab),e(le,Ob),e(le,Ur),e(Ur,Lb),e(Ur,Hi),e(Hi,Db),e(Ur,Sb),e(le,Ib),e(le,Rr),e(Rr,Nb),e(Rr,Hr),e(Hr,Bb),e(Rr,Ub),e(le,Rb),e(le,Yc),e(Yc,Hb),e(le,Xb),e(le,Dt),e(Dt,ed),e(ed,Xr),e(Xr,Gb),e(Dt,Kb),e(Dt,td),e(td,Gr),e(Gr,Jb),e(Dt,Zb),e(Dt,od),e(od,Kr),e(Kr,Qb),e(Dt,Yb),e(Dt,ad),e(ad,Jr),e(Jr,ew),e(le,tw),e(le,gt),k(Zr,gt,null),e(gt,ow),e(gt,Io),e(Io,aw),e(Io,Xi),e(Xi,sw),e(Io,nw),e(Io,sd),e(sd,rw),e(Io,iw),e(gt,lw),k(Xa,gt,null),e(gt,cw),k(Ga,gt,null),dp=!0},p(o,[g]){const Qr={};g&2&&(Qr.$$scope={dirty:g,ctx:o}),pe.$set(Qr);const nd={};g&2&&(nd.$$scope={dirty:g,ctx:o}),Ho.$set(nd);const rd={};g&2&&(rd.$$scope={dirty:g,ctx:o}),Yo.$set(rd);const id={};g&2&&(id.$$scope={dirty:g,ctx:o}),na.$set(id);const Yr={};g&2&&(Yr.$$scope={dirty:g,ctx:o}),ra.$set(Yr);const ld={};g&2&&(ld.$$scope={dirty:g,ctx:o}),ia.$set(ld);const cd={};g&2&&(cd.$$scope={dirty:g,ctx:o}),ha.$set(cd);const dd={};g&2&&(dd.$$scope={dirty:g,ctx:o}),fa.$set(dd);const ei={};g&2&&(ei.$$scope={dirty:g,ctx:o}),ga.$set(ei);const pd={};g&2&&(pd.$$scope={dirty:g,ctx:o}),_a.$set(pd);const md={};g&2&&(md.$$scope={dirty:g,ctx:o}),va.$set(md);const hd={};g&2&&(hd.$$scope={dirty:g,ctx:o}),wa.$set(hd);const fd={};g&2&&(fd.$$scope={dirty:g,ctx:o}),ya.$set(fd);const ud={};g&2&&(ud.$$scope={dirty:g,ctx:o}),ka.$set(ud);const ti={};g&2&&(ti.$$scope={dirty:g,ctx:o}),xa.$set(ti);const gd={};g&2&&(gd.$$scope={dirty:g,ctx:o}),$a.$set(gd);const oi={};g&2&&(oi.$$scope={dirty:g,ctx:o}),Wa.$set(oi);const _d={};g&2&&(_d.$$scope={dirty:g,ctx:o}),Va.$set(_d);const ai={};g&2&&(ai.$$scope={dirty:g,ctx:o}),Ea.$set(ai);const vd={};g&2&&(vd.$$scope={dirty:g,ctx:o}),Ca.$set(vd);const si={};g&2&&(si.$$scope={dirty:g,ctx:o}),Pa.$set(si);const bd={};g&2&&(bd.$$scope={dirty:g,ctx:o}),za.$set(bd);const wd={};g&2&&(wd.$$scope={dirty:g,ctx:o}),Ma.$set(wd);const yd={};g&2&&(yd.$$scope={dirty:g,ctx:o}),Oa.$set(yd);const St={};g&2&&(St.$$scope={dirty:g,ctx:o}),La.$set(St);const No={};g&2&&(No.$$scope={dirty:g,ctx:o}),Da.$set(No);const kd={};g&2&&(kd.$$scope={dirty:g,ctx:o}),Ia.$set(kd);const Td={};g&2&&(Td.$$scope={dirty:g,ctx:o}),Na.$set(Td);const Bo={};g&2&&(Bo.$$scope={dirty:g,ctx:o}),Ua.$set(Bo);const xd={};g&2&&(xd.$$scope={dirty:g,ctx:o}),Ra.$set(xd);const $d={};g&2&&($d.$$scope={dirty:g,ctx:o}),Xa.$set($d);const ni={};g&2&&(ni.$$scope={dirty:g,ctx:o}),Ga.$set(ni)},i(o){dp||(T(l.$$.fragment,o),T(E.$$.fragment,o),T(B.$$.fragment,o),T(C.$$.fragment,o),T(pe.$$.fragment,o),T(fs.$$.fragment,o),T(us.$$.fragment,o),T(_s.$$.fragment,o),T(vs.$$.fragment,o),T(bs.$$.fragment,o),T(Ho.$$.fragment,o),T(ys.$$.fragment,o),T(ks.$$.fragment,o),T(Ts.$$.fragment,o),T($s.$$.fragment,o),T(js.$$.fragment,o),T(Ws.$$.fragment,o),T(Fs.$$.fragment,o),T(qs.$$.fragment,o),T(Ps.$$.fragment,o),T(zs.$$.fragment,o),T(Yo.$$.fragment,o),T(As.$$.fragment,o),T(Ls.$$.fragment,o),T(Ss.$$.fragment,o),T(Is.$$.fragment,o),T(Ns.$$.fragment,o),T(Rs.$$.fragment,o),T(Hs.$$.fragment,o),T(na.$$.fragment,o),T(Gs.$$.fragment,o),T(Ks.$$.fragment,o),T(ra.$$.fragment,o),T(Zs.$$.fragment,o),T(ia.$$.fragment,o),T(Qs.$$.fragment,o),T(Ys.$$.fragment,o),T(en.$$.fragment,o),T(tn.$$.fragment,o),T(an.$$.fragment,o),T(sn.$$.fragment,o),T(rn.$$.fragment,o),T(cn.$$.fragment,o),T(dn.$$.fragment,o),T(mn.$$.fragment,o),T(hn.$$.fragment,o),T(fn.$$.fragment,o),T(wn.$$.fragment,o),T(ha.$$.fragment,o),T(fa.$$.fragment,o),T(yn.$$.fragment,o),T(kn.$$.fragment,o),T(Wn.$$.fragment,o),T(ga.$$.fragment,o),T(_a.$$.fragment,o),T(va.$$.fragment,o),T(Vn.$$.fragment,o),T(Fn.$$.fragment,o),T(Mn.$$.fragment,o),T(wa.$$.fragment,o),T(ya.$$.fragment,o),T(ka.$$.fragment,o),T(An.$$.fragment,o),T(On.$$.fragment,o),T(Bn.$$.fragment,o),T(xa.$$.fragment,o),T($a.$$.fragment,o),T(Un.$$.fragment,o),T(Rn.$$.fragment,o),T(Zn.$$.fragment,o),T(Wa.$$.fragment,o),T(Va.$$.fragment,o),T(Qn.$$.fragment,o),T(Yn.$$.fragment,o),T(sr.$$.fragment,o),T(Ea.$$.fragment,o),T(Ca.$$.fragment,o),T(nr.$$.fragment,o),T(rr.$$.fragment,o),T(Pa.$$.fragment,o),T(dr.$$.fragment,o),T(za.$$.fragment,o),T(Ma.$$.fragment,o),T(pr.$$.fragment,o),T(mr.$$.fragment,o),T(Oa.$$.fragment,o),T(_r.$$.fragment,o),T(La.$$.fragment,o),T(Da.$$.fragment,o),T(vr.$$.fragment,o),T(br.$$.fragment,o),T(Fr.$$.fragment,o),T(Ia.$$.fragment,o),T(Na.$$.fragment,o),T(Er.$$.fragment,o),T(Cr.$$.fragment,o),T(Sr.$$.fragment,o),T(Ua.$$.fragment,o),T(Ra.$$.fragment,o),T(Ir.$$.fragment,o),T(Nr.$$.fragment,o),T(Zr.$$.fragment,o),T(Xa.$$.fragment,o),T(Ga.$$.fragment,o),dp=!0)},o(o){x(l.$$.fragment,o),x(E.$$.fragment,o),x(B.$$.fragment,o),x(C.$$.fragment,o),x(pe.$$.fragment,o),x(fs.$$.fragment,o),x(us.$$.fragment,o),x(_s.$$.fragment,o),x(vs.$$.fragment,o),x(bs.$$.fragment,o),x(Ho.$$.fragment,o),x(ys.$$.fragment,o),x(ks.$$.fragment,o),x(Ts.$$.fragment,o),x($s.$$.fragment,o),x(js.$$.fragment,o),x(Ws.$$.fragment,o),x(Fs.$$.fragment,o),x(qs.$$.fragment,o),x(Ps.$$.fragment,o),x(zs.$$.fragment,o),x(Yo.$$.fragment,o),x(As.$$.fragment,o),x(Ls.$$.fragment,o),x(Ss.$$.fragment,o),x(Is.$$.fragment,o),x(Ns.$$.fragment,o),x(Rs.$$.fragment,o),x(Hs.$$.fragment,o),x(na.$$.fragment,o),x(Gs.$$.fragment,o),x(Ks.$$.fragment,o),x(ra.$$.fragment,o),x(Zs.$$.fragment,o),x(ia.$$.fragment,o),x(Qs.$$.fragment,o),x(Ys.$$.fragment,o),x(en.$$.fragment,o),x(tn.$$.fragment,o),x(an.$$.fragment,o),x(sn.$$.fragment,o),x(rn.$$.fragment,o),x(cn.$$.fragment,o),x(dn.$$.fragment,o),x(mn.$$.fragment,o),x(hn.$$.fragment,o),x(fn.$$.fragment,o),x(wn.$$.fragment,o),x(ha.$$.fragment,o),x(fa.$$.fragment,o),x(yn.$$.fragment,o),x(kn.$$.fragment,o),x(Wn.$$.fragment,o),x(ga.$$.fragment,o),x(_a.$$.fragment,o),x(va.$$.fragment,o),x(Vn.$$.fragment,o),x(Fn.$$.fragment,o),x(Mn.$$.fragment,o),x(wa.$$.fragment,o),x(ya.$$.fragment,o),x(ka.$$.fragment,o),x(An.$$.fragment,o),x(On.$$.fragment,o),x(Bn.$$.fragment,o),x(xa.$$.fragment,o),x($a.$$.fragment,o),x(Un.$$.fragment,o),x(Rn.$$.fragment,o),x(Zn.$$.fragment,o),x(Wa.$$.fragment,o),x(Va.$$.fragment,o),x(Qn.$$.fragment,o),x(Yn.$$.fragment,o),x(sr.$$.fragment,o),x(Ea.$$.fragment,o),x(Ca.$$.fragment,o),x(nr.$$.fragment,o),x(rr.$$.fragment,o),x(Pa.$$.fragment,o),x(dr.$$.fragment,o),x(za.$$.fragment,o),x(Ma.$$.fragment,o),x(pr.$$.fragment,o),x(mr.$$.fragment,o),x(Oa.$$.fragment,o),x(_r.$$.fragment,o),x(La.$$.fragment,o),x(Da.$$.fragment,o),x(vr.$$.fragment,o),x(br.$$.fragment,o),x(Fr.$$.fragment,o),x(Ia.$$.fragment,o),x(Na.$$.fragment,o),x(Er.$$.fragment,o),x(Cr.$$.fragment,o),x(Sr.$$.fragment,o),x(Ua.$$.fragment,o),x(Ra.$$.fragment,o),x(Ir.$$.fragment,o),x(Nr.$$.fragment,o),x(Zr.$$.fragment,o),x(Xa.$$.fragment,o),x(Ga.$$.fragment,o),dp=!1},d(o){t(c),o&&t(b),o&&t(f),$(l),o&&t(A),o&&t(P),$(E),o&&t(K),o&&t(S),o&&t(H),o&&t(J),o&&t(We),o&&t(Z),o&&t(Ie),o&&t(D),o&&t(Ye),o&&t(oe),o&&t(et),o&&t(we),o&&t(tt),o&&t(Y),$(B),o&&t(ot),o&&t(j),$(C),$(pe),o&&t(Nt),o&&t(ro),$(fs),o&&t(jd),o&&t(ne),$(us),$(_s),$(vs),$(bs),$(Ho),$(ys),o&&t(Wd),o&&t(io),$(ks),o&&t(Vd),o&&t(Qe),$(Ts),$($s),o&&t(Fd),o&&t(lo),$(js),o&&t(Ed),o&&t(G),$(Ws),$(Fs),$(qs),$(Ps),$(zs),$(Yo),$(As),$(Ls),o&&t(Cd),o&&t(co),$(Ss),o&&t(qd),o&&t(te),$(Is),$(Ns),$(Rs),$(Hs),$(na),$(Gs),$(Ks),$(ra),$(Zs),$(ia),o&&t(Pd),o&&t(po),$(Qs),o&&t(zd),o&&t(ke),o&&t(Md),$(Ys,o),o&&t(Ad),o&&t(mo),$(en),o&&t(Od),o&&t(ho),$(tn),o&&t(Ld),o&&t(fo),$(an),o&&t(Dd),o&&t(uo),$(sn),o&&t(Sd),o&&t(Mt),$(rn),$(cn),o&&t(Id),o&&t(At),$(dn),$(mn),o&&t(Nd),o&&t(go),$(hn),o&&t(Bd),o&&t(Ae),$(fn),$(wn),$(ha),$(fa),o&&t(Ud),o&&t(vo),$(yn),o&&t(Rd),o&&t(Oe),$(kn),$(Wn),$(ga),$(_a),$(va),o&&t(Hd),o&&t(yo),$(Vn),o&&t(Xd),o&&t(fe),$(Fn),$(Mn),$(wa),$(ya),$(ka),o&&t(Gd),o&&t(To),$(An),o&&t(Kd),o&&t(ue),$(On),$(Bn),$(xa),$($a),o&&t(Jd),o&&t($o),$(Un),o&&t(Zd),o&&t(ge),$(Rn),$(Zn),$(Wa),$(Va),o&&t(Qd),o&&t(Wo),$(Qn),o&&t(Yd),o&&t(Le),$(Yn),$(sr),$(Ea),$(Ca),o&&t(ep),o&&t(Eo),$(nr),o&&t(tp),o&&t(_e),$(rr),$(Pa),$(dr),$(za),$(Ma),o&&t(op),o&&t(qo),$(pr),o&&t(ap),o&&t(ve),$(mr),$(Oa),$(_r),$(La),$(Da),o&&t(sp),o&&t(zo),$(vr),o&&t(np),o&&t(re),$(br),$(Fr),$(Ia),$(Na),o&&t(rp),o&&t(Ao),$(Er),o&&t(ip),o&&t(ie),$(Cr),$(Sr),$(Ua),$(Ra),o&&t(lp),o&&t(Do),$(Ir),o&&t(cp),o&&t(le),$(Nr),$(Zr),$(Xa),$(Ga)}}}const WT={local:"wav2vec2",sections:[{local:"overview",title:"Overview"},{local:"transformers.Wav2Vec2Config",title:"Wav2Vec2Config"},{local:"transformers.Wav2Vec2CTCTokenizer",title:"Wav2Vec2CTCTokenizer"},{local:"transformers.Wav2Vec2FeatureExtractor",title:"Wav2Vec2FeatureExtractor"},{local:"transformers.Wav2Vec2Processor",title:"Wav2Vec2Processor"},{local:"transformers.Wav2Vec2ProcessorWithLM",sections:[{local:"decoding-multiple-audios",title:"Decoding multiple audios"}],title:"Wav2Vec2ProcessorWithLM"},{local:"transformers.models.wav2vec2_with_lm.processing_wav2vec2_with_lm.Wav2Vec2DecoderWithLMOutput",title:"Wav2Vec2 specific outputs"},{local:"transformers.Wav2Vec2Model",title:"Wav2Vec2Model"},{local:"transformers.Wav2Vec2ForCTC",title:"Wav2Vec2ForCTC"},{local:"transformers.Wav2Vec2ForSequenceClassification",title:"Wav2Vec2ForSequenceClassification"},{local:"transformers.Wav2Vec2ForAudioFrameClassification",title:"Wav2Vec2ForAudioFrameClassification"},{local:"transformers.Wav2Vec2ForXVector",title:"Wav2Vec2ForXVector"},{local:"transformers.Wav2Vec2ForPreTraining",title:"Wav2Vec2ForPreTraining"},{local:"transformers.TFWav2Vec2Model",title:"TFWav2Vec2Model"},{local:"transformers.TFWav2Vec2ForCTC",title:"TFWav2Vec2ForCTC"},{local:"transformers.FlaxWav2Vec2Model",title:"FlaxWav2Vec2Model"},{local:"transformers.FlaxWav2Vec2ForCTC",title:"FlaxWav2Vec2ForCTC"},{local:"transformers.FlaxWav2Vec2ForPreTraining",title:"FlaxWav2Vec2ForPreTraining"}],title:"Wav2Vec2"};function VT(W){return X0(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class MT extends B0{constructor(c){super();U0(this,c,VT,jT,R0,{})}}export{MT as default,WT as metadata};
