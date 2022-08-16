import{S as yi,i as Ti,s as wi,e as a,k as u,w as T,t as n,M as ki,c as r,d as t,m as h,a as i,x as w,h as s,b as f,G as e,g,y as k,q as $,o as C,B as H,v as $i,L as xt}from"../../chunks/vendor-hf-doc-builder.js";import{T as yo}from"../../chunks/Tip-hf-doc-builder.js";import{D as Oe}from"../../chunks/Docstring-hf-doc-builder.js";import{C as qt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as jt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ft}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ci(j){let d,v,c,p,b;return p=new qt({props:{code:`from transformers import HubertModel, HubertConfig

# Initializing a Hubert facebook/hubert-base-ls960 style configuration
configuration = HubertConfig()

# Initializing a model from the facebook/hubert-base-ls960 style configuration
model = HubertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> HubertModel, HubertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Hubert facebook/hubert-base-ls960 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = HubertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/hubert-base-ls960 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = HubertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),v=n("Example:"),c=u(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);v=s(m,"Example:"),m.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,v),g(l,c,m),k(p,l,m),b=!0},p:xt,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){C(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),H(p,l)}}}function Hi(j){let d,v,c,p,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);v=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var F=i(c);p=s(F,"Module"),F.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,d,m),e(d,v),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Ei(j){let d,v,c,p,b;return p=new qt({props:{code:`from transformers import Wav2Vec2Processor, HubertModel
from datasets import load_dataset
import soundfile as sf

processor = Wav2Vec2Processor.from_pretrained("facebook/hubert-large-ls960-ft")
model = HubertModel.from_pretrained("facebook/hubert-large-ls960-ft")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

input_values = processor(ds["speech"][0], return_tensors="pt").input_values  # Batch size 1
hidden_states = model(input_values).last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, HubertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-large-ls960-ft&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = HubertModel.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-large-ls960-ft&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),{c(){d=a("p"),v=n("Example:"),c=u(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);v=s(m,"Example:"),m.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,v),g(l,c,m),k(p,l,m),b=!0},p:xt,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){C(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),H(p,l)}}}function ji(j){let d,v,c,p,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);v=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var F=i(c);p=s(F,"Module"),F.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,d,m),e(d,v),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Fi(j){let d,v,c,p,b;return p=new qt({props:{code:`from transformers import Wav2Vec2Processor, HubertForCTC
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("facebook/hubert-large-ls960-ft")
model = HubertForCTC.from_pretrained("facebook/hubert-large-ls960-ft")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)
transcription[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, HubertForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-large-ls960-ft&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = HubertForCTC.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-large-ls960-ft&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>`}}),{c(){d=a("p"),v=n("Example:"),c=u(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);v=s(m,"Example:"),m.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,v),g(l,c,m),k(p,l,m),b=!0},p:xt,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){C(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),H(p,l)}}}function xi(j){let d,v;return d=new qt({props:{code:`inputs["labels"] = processor(text=dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(text=dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">22.68</span>`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){k(d,c,p),v=!0},p:xt,i(c){v||($(d.$$.fragment,c),v=!0)},o(c){C(d.$$.fragment,c),v=!1},d(c){H(d,c)}}}function qi(j){let d,v,c,p,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);v=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var F=i(c);p=s(F,"Module"),F.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,d,m),e(d,v),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Mi(j){let d,v,c,p,b;return p=new qt({props:{code:`from transformers import Wav2Vec2FeatureExtractor, HubertForSequenceClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("superb/hubert-base-superb-ks")
model = HubertForSequenceClassification.from_pretrained("superb/hubert-base-superb-ks")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_ids = torch.argmax(logits, dim=-1).item()
predicted_label = model.config.id2label[predicted_class_ids]
predicted_label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, HubertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;superb/hubert-base-superb-ks&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = HubertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;superb/hubert-base-superb-ks&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label
<span class="hljs-string">&#x27;_unknown_&#x27;</span>`}}),{c(){d=a("p"),v=n("Example:"),c=u(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);v=s(m,"Example:"),m.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,v),g(l,c,m),k(p,l,m),b=!0},p:xt,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){C(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),H(p,l)}}}function Pi(j){let d,v;return d=new qt({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">8.53</span>`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){k(d,c,p),v=!0},p:xt,i(c){v||($(d.$$.fragment,c),v=!0)},o(c){C(d.$$.fragment,c),v=!1},d(c){H(d,c)}}}function Si(j){let d,v,c,p,b,l,m,F,Ee,ie,x,K,A,X,je,L,Fe,be,D,I,J,me,q,P,le,Q,ve,de,W,xe,ye,M,qe,Y,G,fe,Z,Me,ee,N,ce,te,Pe;return{c(){d=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),c=u(),p=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=u(),F=a("li"),Ee=n("having all inputs as a list, tuple or dict in the first positional arguments."),ie=u(),x=a("p"),K=n("This second option is useful when using "),A=a("code"),X=n("tf.keras.Model.fit"),je=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a("code"),Fe=n("model(inputs)"),be=n("."),D=u(),I=a("p"),J=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),me=u(),q=a("ul"),P=a("li"),le=n("a single Tensor with "),Q=a("code"),ve=n("input_values"),de=n(" only and nothing else: "),W=a("code"),xe=n("model(inputs_ids)"),ye=u(),M=a("li"),qe=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),G=n("model([input_values, attention_mask])"),fe=n(" or "),Z=a("code"),Me=n("model([input_values, attention_mask, token_type_ids])"),ee=u(),N=a("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),te=a("code"),Pe=n('model({"input_values": input_values, "token_type_ids": token_type_ids})')},l(y){d=r(y,"P",{});var E=i(d);v=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(y),p=r(y,"UL",{});var ge=i(p);b=r(ge,"LI",{});var _e=i(b);l=s(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),m=h(ge),F=r(ge,"LI",{});var Ne=i(F);Ee=s(Ne,"having all inputs as a list, tuple or dict in the first positional arguments."),Ne.forEach(t),ge.forEach(t),ie=h(y),x=r(y,"P",{});var B=i(x);K=s(B,"This second option is useful when using "),A=r(B,"CODE",{});var ze=i(A);X=s(ze,"tf.keras.Model.fit"),ze.forEach(t),je=s(B,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r(B,"CODE",{});var oe=i(L);Fe=s(oe,"model(inputs)"),oe.forEach(t),be=s(B,"."),B.forEach(t),D=h(y),I=r(y,"P",{});var pe=i(I);J=s(pe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe.forEach(t),me=h(y),q=r(y,"UL",{});var S=i(q);P=r(S,"LI",{});var O=i(P);le=s(O,"a single Tensor with "),Q=r(O,"CODE",{});var Be=i(Q);ve=s(Be,"input_values"),Be.forEach(t),de=s(O," only and nothing else: "),W=r(O,"CODE",{});var Se=i(W);xe=s(Se,"model(inputs_ids)"),Se.forEach(t),O.forEach(t),ye=h(S),M=r(S,"LI",{});var ne=i(M);qe=s(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(ne,"CODE",{});var De=i(Y);G=s(De,"model([input_values, attention_mask])"),De.forEach(t),fe=s(ne," or "),Z=r(ne,"CODE",{});var z=i(Z);Me=s(z,"model([input_values, attention_mask, token_type_ids])"),z.forEach(t),ne.forEach(t),ee=h(S),N=r(S,"LI",{});var se=i(N);ce=s(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),te=r(se,"CODE",{});var Re=i(te);Pe=s(Re,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),Re.forEach(t),se.forEach(t),S.forEach(t)},m(y,E){g(y,d,E),e(d,v),g(y,c,E),g(y,p,E),e(p,b),e(b,l),e(p,m),e(p,F),e(F,Ee),g(y,ie,E),g(y,x,E),e(x,K),e(x,A),e(A,X),e(x,je),e(x,L),e(L,Fe),e(x,be),g(y,D,E),g(y,I,E),e(I,J),g(y,me,E),g(y,q,E),e(q,P),e(P,le),e(P,Q),e(Q,ve),e(P,de),e(P,W),e(W,xe),e(q,ye),e(q,M),e(M,qe),e(M,Y),e(Y,G),e(M,fe),e(M,Z),e(Z,Me),e(q,ee),e(q,N),e(N,ce),e(N,te),e(te,Pe)},d(y){y&&t(d),y&&t(c),y&&t(p),y&&t(ie),y&&t(x),y&&t(D),y&&t(I),y&&t(me),y&&t(q)}}}function Oi(j){let d,v,c,p,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);v=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var F=i(c);p=s(F,"Module"),F.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,d,m),e(d,v),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function zi(j){let d,v,c,p,b;return p=new qt({props:{code:`from transformers import Wav2Vec2Processor, TFHubertModel
from datasets import load_dataset
import soundfile as sf

processor = Wav2Vec2Processor.from_pretrained("facebook/hubert-base-960h")
model = TFHubertModel.from_pretrained("facebook/hubert-base-960h")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

input_values = processor(ds["speech"][0], return_tensors="tf").input_values  # Batch size 1
hidden_states = model(input_values).last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, TFHubertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFHubertModel.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-base-960h&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),{c(){d=a("p"),v=n("Example:"),c=u(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);v=s(m,"Example:"),m.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,v),g(l,c,m),k(p,l,m),b=!0},p:xt,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){C(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),H(p,l)}}}function Di(j){let d,v,c,p,b,l,m,F,Ee,ie,x,K,A,X,je,L,Fe,be,D,I,J,me,q,P,le,Q,ve,de,W,xe,ye,M,qe,Y,G,fe,Z,Me,ee,N,ce,te,Pe;return{c(){d=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),c=u(),p=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=u(),F=a("li"),Ee=n("having all inputs as a list, tuple or dict in the first positional arguments."),ie=u(),x=a("p"),K=n("This second option is useful when using "),A=a("code"),X=n("tf.keras.Model.fit"),je=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a("code"),Fe=n("model(inputs)"),be=n("."),D=u(),I=a("p"),J=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),me=u(),q=a("ul"),P=a("li"),le=n("a single Tensor with "),Q=a("code"),ve=n("input_values"),de=n(" only and nothing else: "),W=a("code"),xe=n("model(inputs_ids)"),ye=u(),M=a("li"),qe=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),G=n("model([input_values, attention_mask])"),fe=n(" or "),Z=a("code"),Me=n("model([input_values, attention_mask, token_type_ids])"),ee=u(),N=a("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),te=a("code"),Pe=n('model({"input_values": input_values, "token_type_ids": token_type_ids})')},l(y){d=r(y,"P",{});var E=i(d);v=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(y),p=r(y,"UL",{});var ge=i(p);b=r(ge,"LI",{});var _e=i(b);l=s(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),m=h(ge),F=r(ge,"LI",{});var Ne=i(F);Ee=s(Ne,"having all inputs as a list, tuple or dict in the first positional arguments."),Ne.forEach(t),ge.forEach(t),ie=h(y),x=r(y,"P",{});var B=i(x);K=s(B,"This second option is useful when using "),A=r(B,"CODE",{});var ze=i(A);X=s(ze,"tf.keras.Model.fit"),ze.forEach(t),je=s(B,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r(B,"CODE",{});var oe=i(L);Fe=s(oe,"model(inputs)"),oe.forEach(t),be=s(B,"."),B.forEach(t),D=h(y),I=r(y,"P",{});var pe=i(I);J=s(pe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe.forEach(t),me=h(y),q=r(y,"UL",{});var S=i(q);P=r(S,"LI",{});var O=i(P);le=s(O,"a single Tensor with "),Q=r(O,"CODE",{});var Be=i(Q);ve=s(Be,"input_values"),Be.forEach(t),de=s(O," only and nothing else: "),W=r(O,"CODE",{});var Se=i(W);xe=s(Se,"model(inputs_ids)"),Se.forEach(t),O.forEach(t),ye=h(S),M=r(S,"LI",{});var ne=i(M);qe=s(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(ne,"CODE",{});var De=i(Y);G=s(De,"model([input_values, attention_mask])"),De.forEach(t),fe=s(ne," or "),Z=r(ne,"CODE",{});var z=i(Z);Me=s(z,"model([input_values, attention_mask, token_type_ids])"),z.forEach(t),ne.forEach(t),ee=h(S),N=r(S,"LI",{});var se=i(N);ce=s(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),te=r(se,"CODE",{});var Re=i(te);Pe=s(Re,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),Re.forEach(t),se.forEach(t),S.forEach(t)},m(y,E){g(y,d,E),e(d,v),g(y,c,E),g(y,p,E),e(p,b),e(b,l),e(p,m),e(p,F),e(F,Ee),g(y,ie,E),g(y,x,E),e(x,K),e(x,A),e(A,X),e(x,je),e(x,L),e(L,Fe),e(x,be),g(y,D,E),g(y,I,E),e(I,J),g(y,me,E),g(y,q,E),e(q,P),e(P,le),e(P,Q),e(Q,ve),e(P,de),e(P,W),e(W,xe),e(q,ye),e(q,M),e(M,qe),e(M,Y),e(Y,G),e(M,fe),e(M,Z),e(Z,Me),e(q,ee),e(q,N),e(N,ce),e(N,te),e(te,Pe)},d(y){y&&t(d),y&&t(c),y&&t(p),y&&t(ie),y&&t(x),y&&t(D),y&&t(I),y&&t(me),y&&t(q)}}}function Ai(j){let d,v,c,p,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);v=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var F=i(c);p=s(F,"Module"),F.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,d,m),e(d,v),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Li(j){let d,v,c,p,b;return p=new qt({props:{code:`import tensorflow as tf
from transformers import Wav2Vec2Processor, TFHubertForCTC
from datasets import load_dataset
import soundfile as sf

processor = Wav2Vec2Processor.from_pretrained("facebook/hubert-base-960h")
model = TFHubertForCTC.from_pretrained("facebook/hubert-base-960h")


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

# Pass the transcription as text to encode labels
labels = processor(text=transcription, return_tensors="tf").input_values

loss = model(input_values, labels=labels).loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, TFHubertForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFHubertForCTC.from_pretrained(<span class="hljs-string">&quot;facebook/hubert-base-960h&quot;</span>)


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

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Pass the transcription as text to encode labels</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = processor(text=transcription, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_values

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, labels=labels).loss`}}),{c(){d=a("p"),v=n("Example:"),c=u(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);v=s(m,"Example:"),m.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,m){g(l,d,m),e(d,v),g(l,c,m),k(p,l,m),b=!0},p:xt,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){C(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),H(p,l)}}}function Ii(j){let d,v,c,p,b,l,m,F,Ee,ie,x,K,A,X,je,L,Fe,be,D,I,J,me,q,P,le,Q,ve,de,W,xe,ye,M,qe,Y,G,fe,Z,Me,ee,N,ce,te,Pe,y,E,ge,_e,Ne,B,ze,oe,pe,S,O,Be,Se,ne,De,z,se,Re,Ve,Jn,To,Qn,Zn,Mt,es,ts,os,Ue,ns,wo,ss,as,ko,rs,is,ls,st,vn,Ke,at,No,Pt,ds,Bo,cs,yn,ae,St,ps,Ot,us,zt,hs,ms,fs,Dt,gs,$o,_s,bs,vs,At,ys,Lt,Ts,ws,ks,Te,It,$s,Ye,Cs,Co,Hs,Es,Ro,js,Fs,xs,rt,qs,it,Tn,Ge,lt,Vo,Wt,Ms,Uo,Ps,wn,re,Nt,Ss,Xe,Os,Ko,zs,Ds,Bt,As,Ls,Is,Rt,Ws,Ho,Ns,Bs,Rs,Vt,Vs,Ut,Us,Ks,Ys,ue,Kt,Gs,Je,Xs,Eo,Js,Qs,Yo,Zs,ea,ta,dt,oa,ct,na,pt,kn,Qe,ut,Go,Yt,sa,Xo,aa,$n,R,Gt,ra,Jo,ia,la,Xt,da,Jt,ca,pa,ua,Qt,ha,jo,ma,fa,ga,Zt,_a,eo,ba,va,ya,he,to,Ta,Ze,wa,Fo,ka,$a,Qo,Ca,Ha,Ea,ht,ja,mt,Fa,ft,Cn,et,gt,Zo,oo,xa,en,qa,Hn,V,no,Ma,tn,Pa,Sa,so,Oa,xo,za,Da,Aa,ao,La,ro,Ia,Wa,Na,_t,Ba,we,io,Ra,tt,Va,qo,Ua,Ka,on,Ya,Ga,Xa,bt,Ja,vt,En,ot,yt,nn,lo,Qa,sn,Za,jn,U,co,er,po,tr,an,or,nr,sr,uo,ar,Mo,rr,ir,lr,ho,dr,mo,cr,pr,ur,Tt,hr,ke,fo,mr,nt,fr,Po,gr,_r,rn,br,vr,yr,wt,Tr,kt,Fn;return l=new jt({}),X=new jt({}),O=new jt({}),se=new Oe({props:{name:"class transformers.HubertConfig",anchor:"transformers.HubertConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_layer_norm",val:" = True"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"ctc_loss_reduction",val:" = 'sum'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.HubertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the Hubert model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertModel">HubertModel</a>. Vocabulary size of the model. Defines the different
tokens that can be represented by the <em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertModel">HubertModel</a>.`,name:"vocab_size"},{anchor:"transformers.HubertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.HubertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.HubertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.HubertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.HubertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.HubertConfig.hidden_dropout(float,",description:`<strong>hidden_dropout(<code>float</code>,</strong> <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout(float,"},{anchor:"transformers.HubertConfig.attention_dropout(float,",description:`<strong>attention_dropout(<code>float</code>,</strong> <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout(float,"},{anchor:"transformers.HubertConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for the final projection layer of <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2ForCTC">Wav2Vec2ForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.HubertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.HubertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.HubertConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.HubertConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.HubertConfig.feat_proj_layer_norm",description:`<strong>feat_proj_layer_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply LayerNorm to the output of the feature encoder.`,name:"feat_proj_layer_norm"},{anchor:"transformers.HubertConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.HubertConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.HubertConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.HubertConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 3, 3)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.HubertConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.HubertConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.HubertConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.HubertConfig.do_stable_layer_norm",description:`<strong>do_stable_layer_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether do apply <em>stable</em> layer norm architecture of the Transformer encoder. <code>do_stable_layer_norm is True</code> corresponds to applying layer norm before the attention layer, whereas <code>do_stable_layer_norm is False</code> corresponds to applying layer norm after the attention layer.`,name:"do_stable_layer_norm"},{anchor:"transformers.HubertConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature encoder. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech
Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.HubertConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask_time_prob<em>len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, </em>mask_time_prob<em> should be \`prob_vector_start</em>mask_time_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is True\`.`,name:"mask_time_prob"},{anchor:"transformers.HubertConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.HubertConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.HubertConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask_feature_prob<em>len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, </em>mask_feature_prob<em> should be \`prob_vector_start</em>mask_feature_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is
True\`.`,name:"mask_feature_prob"},{anchor:"transformers.HubertConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.HubertConfig.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.HubertConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;sum&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertForCTC">HubertForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.HubertConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertForCTC">HubertForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.HubertConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertForSequenceClassification">HubertForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.HubertConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/hubert/configuration_hubert.py#L32"}}),st=new Ft({props:{anchor:"transformers.HubertConfig.example",$$slots:{default:[Ci]},$$scope:{ctx:j}}}),Pt=new jt({}),St=new Oe({props:{name:"class transformers.HubertModel",anchor:"transformers.HubertModel",parameters:[{name:"config",val:": HubertConfig"}],parametersDescription:[{anchor:"transformers.HubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/hubert/modeling_hubert.py#L949"}}),It=new Oe({props:{name:"forward",anchor:"transformers.HubertModel.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.HubertModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.HubertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/hubert-base-ls960" rel="nofollow">hubert-base</a>, <code>attention_mask</code> should <strong>not</strong> be passed
to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should simply be
padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly different
results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.HubertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.HubertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.HubertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/hubert/modeling_hubert.py#L1014",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rt=new yo({props:{$$slots:{default:[Hi]},$$scope:{ctx:j}}}),it=new Ft({props:{anchor:"transformers.HubertModel.forward.example",$$slots:{default:[Ei]},$$scope:{ctx:j}}}),Wt=new jt({}),Nt=new Oe({props:{name:"class transformers.HubertForCTC",anchor:"transformers.HubertForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.HubertForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/hubert/modeling_hubert.py#L1093"}}),Kt=new Oe({props:{name:"forward",anchor:"transformers.HubertForCTC.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.HubertForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.HubertForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/hubert-base-ls960" rel="nofollow">hubert-base</a>, <code>attention_mask</code> should <strong>not</strong> be passed
to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should simply be
padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly different
results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.HubertForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.HubertForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.HubertForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.HubertForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/hubert/modeling_hubert.py#L1134",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
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
`}}),dt=new yo({props:{$$slots:{default:[ji]},$$scope:{ctx:j}}}),ct=new Ft({props:{anchor:"transformers.HubertForCTC.forward.example",$$slots:{default:[Fi]},$$scope:{ctx:j}}}),pt=new Ft({props:{anchor:"transformers.HubertForCTC.forward.example-2",$$slots:{default:[xi]},$$scope:{ctx:j}}}),Yt=new jt({}),Gt=new Oe({props:{name:"class transformers.HubertForSequenceClassification",anchor:"transformers.HubertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.HubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/hubert/modeling_hubert.py#L1224"}}),to=new Oe({props:{name:"forward",anchor:"transformers.HubertForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.HubertForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.HubertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/hubert-base-ls960" rel="nofollow">hubert-base</a>, <code>attention_mask</code> should <strong>not</strong> be passed
to avoid degraded performance when doing batched inference. For such models <code>input_values</code> should simply be
padded with 0 and passed without <code>attention_mask</code>. Be aware that these models also yield slightly different
results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.HubertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.HubertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.HubertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.HubertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/hubert/modeling_hubert.py#L1269",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
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
`}}),ht=new yo({props:{$$slots:{default:[qi]},$$scope:{ctx:j}}}),mt=new Ft({props:{anchor:"transformers.HubertForSequenceClassification.forward.example",$$slots:{default:[Mi]},$$scope:{ctx:j}}}),ft=new Ft({props:{anchor:"transformers.HubertForSequenceClassification.forward.example-2",$$slots:{default:[Pi]},$$scope:{ctx:j}}}),oo=new jt({}),no=new Oe({props:{name:"class transformers.TFHubertModel",anchor:"transformers.TFHubertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFHubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/hubert/modeling_tf_hubert.py#L1435"}}),_t=new yo({props:{$$slots:{default:[Si]},$$scope:{ctx:j}}}),io=new Oe({props:{name:"call",anchor:"transformers.TFHubertModel.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFHubertModel.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_values"},{anchor:"transformers.TFHubertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFHubertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFHubertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFHubertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFHubertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_values</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_values</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFHubertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFHubertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFHubertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFHubertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/hubert/modeling_tf_hubert.py#L1441",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
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
`}}),bt=new yo({props:{$$slots:{default:[Oi]},$$scope:{ctx:j}}}),vt=new Ft({props:{anchor:"transformers.TFHubertModel.call.example",$$slots:{default:[zi]},$$scope:{ctx:j}}}),lo=new jt({}),co=new Oe({props:{name:"class transformers.TFHubertForCTC",anchor:"transformers.TFHubertForCTC",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFHubertForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/hubert/modeling_tf_hubert.py#L1534"}}),Tt=new yo({props:{$$slots:{default:[Di]},$$scope:{ctx:j}}}),fo=new Oe({props:{name:"call",anchor:"transformers.TFHubertForCTC.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFHubertForCTC.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_values"},{anchor:"transformers.TFHubertForCTC.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFHubertForCTC.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFHubertForCTC.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFHubertForCTC.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFHubertForCTC.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_values</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_values</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFHubertForCTC.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFHubertForCTC.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFHubertForCTC.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFHubertForCTC.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFHubertForCTC.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_values</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked),
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/hubert/modeling_tf_hubert.py#L1561",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig"
>HubertConfig</a>) and inputs.</p>
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
`}}),wt=new yo({props:{$$slots:{default:[Ai]},$$scope:{ctx:j}}}),kt=new Ft({props:{anchor:"transformers.TFHubertForCTC.call.example",$$slots:{default:[Li]},$$scope:{ctx:j}}}),{c(){d=a("meta"),v=u(),c=a("h1"),p=a("a"),b=a("span"),T(l.$$.fragment),m=u(),F=a("span"),Ee=n("Hubert"),ie=u(),x=a("h2"),K=a("a"),A=a("span"),T(X.$$.fragment),je=u(),L=a("span"),Fe=n("Overview"),be=u(),D=a("p"),I=n("Hubert was proposed in "),J=a("a"),me=n("HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),q=n(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia, Ruslan
Salakhutdinov, Abdelrahman Mohamed.`),P=u(),le=a("p"),Q=n("The abstract from the paper is the following:"),ve=u(),de=a("p"),W=a("em"),xe=n(`Self-supervised approaches for speech representation learning are challenged by three unique problems: (1) there are
multiple sound units in each input utterance, (2) there is no lexicon of input sound units during the pre-training
phase, and (3) sound units have variable lengths with no explicit segmentation. To deal with these three problems, we
propose the Hidden-Unit BERT (HuBERT) approach for self-supervised speech representation learning, which utilizes an
offline clustering step to provide aligned target labels for a BERT-like prediction loss. A key ingredient of our
approach is applying the prediction loss over the masked regions only, which forces the model to learn a combined
acoustic and language model over the continuous inputs. HuBERT relies primarily on the consistency of the unsupervised
clustering step rather than the intrinsic quality of the assigned cluster labels. Starting with a simple k-means
teacher of 100 clusters, and using two iterations of clustering, the HuBERT model either matches or improves upon the
state-of-the-art wav2vec 2.0 performance on the Librispeech (960h) and Libri-light (60,000h) benchmarks with 10min, 1h,
10h, 100h, and 960h fine-tuning subsets. Using a 1B parameter model, HuBERT shows up to 19% and 13% relative WER
reduction on the more challenging dev-other and test-other evaluation subsets.`),ye=u(),M=a("p"),qe=n("Tips:"),Y=u(),G=a("ul"),fe=a("li"),Z=n("Hubert is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),Me=u(),ee=a("li"),N=n(`Hubert model was fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),ce=a("a"),te=n("Wav2Vec2CTCTokenizer"),Pe=n("."),y=u(),E=a("p"),ge=n("This model was contributed by "),_e=a("a"),Ne=n("patrickvonplaten"),B=n("."),ze=u(),oe=a("h2"),pe=a("a"),S=a("span"),T(O.$$.fragment),Be=u(),Se=a("span"),ne=n("HubertConfig"),De=u(),z=a("div"),T(se.$$.fragment),Re=u(),Ve=a("p"),Jn=n("This is the configuration class to store the configuration of a "),To=a("a"),Qn=n("HubertModel"),Zn=n(`. It is used to instantiate an
Hubert model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Hubert
`),Mt=a("a"),es=n("facebook/hubert-base-ls960"),ts=n(" architecture."),os=u(),Ue=a("p"),ns=n("Configuration objects inherit from "),wo=a("a"),ss=n("PretrainedConfig"),as=n(` and can be used to control the model outputs. Read the
documentation from `),ko=a("a"),rs=n("PretrainedConfig"),is=n(" for more information."),ls=u(),T(st.$$.fragment),vn=u(),Ke=a("h2"),at=a("a"),No=a("span"),T(Pt.$$.fragment),ds=u(),Bo=a("span"),cs=n("HubertModel"),yn=u(),ae=a("div"),T(St.$$.fragment),ps=u(),Ot=a("p"),us=n(`The bare Hubert Model transformer outputting raw hidden-states without any specific head on top.
Hubert was proposed in `),zt=a("a"),hs=n(`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),ms=n(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),fs=u(),Dt=a("p"),gs=n("This model inherits from "),$o=a("a"),_s=n("PreTrainedModel"),bs=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),vs=u(),At=a("p"),ys=n("This model is a PyTorch "),Lt=a("a"),Ts=n("torch.nn.Module"),ws=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ks=u(),Te=a("div"),T(It.$$.fragment),$s=u(),Ye=a("p"),Cs=n("The "),Co=a("a"),Hs=n("HubertModel"),Es=n(" forward method, overrides the "),Ro=a("code"),js=n("__call__"),Fs=n(" special method."),xs=u(),T(rt.$$.fragment),qs=u(),T(it.$$.fragment),Tn=u(),Ge=a("h2"),lt=a("a"),Vo=a("span"),T(Wt.$$.fragment),Ms=u(),Uo=a("span"),Ps=n("HubertForCTC"),wn=u(),re=a("div"),T(Nt.$$.fragment),Ss=u(),Xe=a("p"),Os=n("Hubert Model with a "),Ko=a("code"),zs=n("language modeling"),Ds=n(` head on top for Connectionist Temporal Classification (CTC).
Hubert was proposed in `),Bt=a("a"),As=n(`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),Ls=n(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),Is=u(),Rt=a("p"),Ws=n("This model inherits from "),Ho=a("a"),Ns=n("PreTrainedModel"),Bs=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Rs=u(),Vt=a("p"),Vs=n("This model is a PyTorch "),Ut=a("a"),Us=n("torch.nn.Module"),Ks=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ys=u(),ue=a("div"),T(Kt.$$.fragment),Gs=u(),Je=a("p"),Xs=n("The "),Eo=a("a"),Js=n("HubertForCTC"),Qs=n(" forward method, overrides the "),Yo=a("code"),Zs=n("__call__"),ea=n(" special method."),ta=u(),T(dt.$$.fragment),oa=u(),T(ct.$$.fragment),na=u(),T(pt.$$.fragment),kn=u(),Qe=a("h2"),ut=a("a"),Go=a("span"),T(Yt.$$.fragment),sa=u(),Xo=a("span"),aa=n("HubertForSequenceClassification"),$n=u(),R=a("div"),T(Gt.$$.fragment),ra=u(),Jo=a("p"),ia=n(`Hubert Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),la=u(),Xt=a("p"),da=n("Hubert was proposed in "),Jt=a("a"),ca=n(`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),pa=n(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),ua=u(),Qt=a("p"),ha=n("This model inherits from "),jo=a("a"),ma=n("PreTrainedModel"),fa=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ga=u(),Zt=a("p"),_a=n("This model is a PyTorch "),eo=a("a"),ba=n("torch.nn.Module"),va=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ya=u(),he=a("div"),T(to.$$.fragment),Ta=u(),Ze=a("p"),wa=n("The "),Fo=a("a"),ka=n("HubertForSequenceClassification"),$a=n(" forward method, overrides the "),Qo=a("code"),Ca=n("__call__"),Ha=n(" special method."),Ea=u(),T(ht.$$.fragment),ja=u(),T(mt.$$.fragment),Fa=u(),T(ft.$$.fragment),Cn=u(),et=a("h2"),gt=a("a"),Zo=a("span"),T(oo.$$.fragment),xa=u(),en=a("span"),qa=n("TFHubertModel"),Hn=u(),V=a("div"),T(no.$$.fragment),Ma=u(),tn=a("p"),Pa=n("The bare TFHubert Model transformer outputing raw hidden-states without any specific head on top."),Sa=u(),so=a("p"),Oa=n("This model inherits from "),xo=a("a"),za=n("TFPreTrainedModel"),Da=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Aa=u(),ao=a("p"),La=n("This model is also a "),ro=a("a"),Ia=n("tf.keras.Model"),Wa=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Na=u(),T(_t.$$.fragment),Ba=u(),we=a("div"),T(io.$$.fragment),Ra=u(),tt=a("p"),Va=n("The "),qo=a("a"),Ua=n("TFHubertModel"),Ka=n(" forward method, overrides the "),on=a("code"),Ya=n("__call__"),Ga=n(" special method."),Xa=u(),T(bt.$$.fragment),Ja=u(),T(vt.$$.fragment),En=u(),ot=a("h2"),yt=a("a"),nn=a("span"),T(lo.$$.fragment),Qa=u(),sn=a("span"),Za=n("TFHubertForCTC"),jn=u(),U=a("div"),T(co.$$.fragment),er=u(),po=a("p"),tr=n("TFHubert Model with a "),an=a("code"),or=n("language modeling"),nr=n(" head on top for Connectionist Temporal Classification (CTC)."),sr=u(),uo=a("p"),ar=n("This model inherits from "),Mo=a("a"),rr=n("TFPreTrainedModel"),ir=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lr=u(),ho=a("p"),dr=n("This model is also a "),mo=a("a"),cr=n("tf.keras.Model"),pr=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ur=u(),T(Tt.$$.fragment),hr=u(),ke=a("div"),T(fo.$$.fragment),mr=u(),nt=a("p"),fr=n("The "),Po=a("a"),gr=n("TFHubertForCTC"),_r=n(" forward method, overrides the "),rn=a("code"),br=n("__call__"),vr=n(" special method."),yr=u(),T(wt.$$.fragment),Tr=u(),T(kt.$$.fragment),this.h()},l(o){const _=ki('[data-svelte="svelte-1phssyn"]',document.head);d=r(_,"META",{name:!0,content:!0}),_.forEach(t),v=h(o),c=r(o,"H1",{class:!0});var go=i(c);p=r(go,"A",{id:!0,class:!0,href:!0});var ln=i(p);b=r(ln,"SPAN",{});var dn=i(b);w(l.$$.fragment,dn),dn.forEach(t),ln.forEach(t),m=h(go),F=r(go,"SPAN",{});var cn=i(F);Ee=s(cn,"Hubert"),cn.forEach(t),go.forEach(t),ie=h(o),x=r(o,"H2",{class:!0});var _o=i(x);K=r(_o,"A",{id:!0,class:!0,href:!0});var pn=i(K);A=r(pn,"SPAN",{});var un=i(A);w(X.$$.fragment,un),un.forEach(t),pn.forEach(t),je=h(_o),L=r(_o,"SPAN",{});var hn=i(L);Fe=s(hn,"Overview"),hn.forEach(t),_o.forEach(t),be=h(o),D=r(o,"P",{});var bo=i(D);I=s(bo,"Hubert was proposed in "),J=r(bo,"A",{href:!0,rel:!0});var mn=i(J);me=s(mn,"HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),mn.forEach(t),q=s(bo,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia, Ruslan
Salakhutdinov, Abdelrahman Mohamed.`),bo.forEach(t),P=h(o),le=r(o,"P",{});var fn=i(le);Q=s(fn,"The abstract from the paper is the following:"),fn.forEach(t),ve=h(o),de=r(o,"P",{});var gn=i(de);W=r(gn,"EM",{});var _n=i(W);xe=s(_n,`Self-supervised approaches for speech representation learning are challenged by three unique problems: (1) there are
multiple sound units in each input utterance, (2) there is no lexicon of input sound units during the pre-training
phase, and (3) sound units have variable lengths with no explicit segmentation. To deal with these three problems, we
propose the Hidden-Unit BERT (HuBERT) approach for self-supervised speech representation learning, which utilizes an
offline clustering step to provide aligned target labels for a BERT-like prediction loss. A key ingredient of our
approach is applying the prediction loss over the masked regions only, which forces the model to learn a combined
acoustic and language model over the continuous inputs. HuBERT relies primarily on the consistency of the unsupervised
clustering step rather than the intrinsic quality of the assigned cluster labels. Starting with a simple k-means
teacher of 100 clusters, and using two iterations of clustering, the HuBERT model either matches or improves upon the
state-of-the-art wav2vec 2.0 performance on the Librispeech (960h) and Libri-light (60,000h) benchmarks with 10min, 1h,
10h, 100h, and 960h fine-tuning subsets. Using a 1B parameter model, HuBERT shows up to 19% and 13% relative WER
reduction on the more challenging dev-other and test-other evaluation subsets.`),_n.forEach(t),gn.forEach(t),ye=h(o),M=r(o,"P",{});var bn=i(M);qe=s(bn,"Tips:"),bn.forEach(t),Y=h(o),G=r(o,"UL",{});var vo=i(G);fe=r(vo,"LI",{});var wr=i(fe);Z=s(wr,"Hubert is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),wr.forEach(t),Me=h(vo),ee=r(vo,"LI",{});var xn=i(ee);N=s(xn,`Hubert model was fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),ce=r(xn,"A",{href:!0});var kr=i(ce);te=s(kr,"Wav2Vec2CTCTokenizer"),kr.forEach(t),Pe=s(xn,"."),xn.forEach(t),vo.forEach(t),y=h(o),E=r(o,"P",{});var qn=i(E);ge=s(qn,"This model was contributed by "),_e=r(qn,"A",{href:!0,rel:!0});var $r=i(_e);Ne=s($r,"patrickvonplaten"),$r.forEach(t),B=s(qn,"."),qn.forEach(t),ze=h(o),oe=r(o,"H2",{class:!0});var Mn=i(oe);pe=r(Mn,"A",{id:!0,class:!0,href:!0});var Cr=i(pe);S=r(Cr,"SPAN",{});var Hr=i(S);w(O.$$.fragment,Hr),Hr.forEach(t),Cr.forEach(t),Be=h(Mn),Se=r(Mn,"SPAN",{});var Er=i(Se);ne=s(Er,"HubertConfig"),Er.forEach(t),Mn.forEach(t),De=h(o),z=r(o,"DIV",{class:!0});var $t=i(z);w(se.$$.fragment,$t),Re=h($t),Ve=r($t,"P",{});var So=i(Ve);Jn=s(So,"This is the configuration class to store the configuration of a "),To=r(So,"A",{href:!0});var jr=i(To);Qn=s(jr,"HubertModel"),jr.forEach(t),Zn=s(So,`. It is used to instantiate an
Hubert model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Hubert
`),Mt=r(So,"A",{href:!0,rel:!0});var Fr=i(Mt);es=s(Fr,"facebook/hubert-base-ls960"),Fr.forEach(t),ts=s(So," architecture."),So.forEach(t),os=h($t),Ue=r($t,"P",{});var Oo=i(Ue);ns=s(Oo,"Configuration objects inherit from "),wo=r(Oo,"A",{href:!0});var xr=i(wo);ss=s(xr,"PretrainedConfig"),xr.forEach(t),as=s(Oo,` and can be used to control the model outputs. Read the
documentation from `),ko=r(Oo,"A",{href:!0});var qr=i(ko);rs=s(qr,"PretrainedConfig"),qr.forEach(t),is=s(Oo," for more information."),Oo.forEach(t),ls=h($t),w(st.$$.fragment,$t),$t.forEach(t),vn=h(o),Ke=r(o,"H2",{class:!0});var Pn=i(Ke);at=r(Pn,"A",{id:!0,class:!0,href:!0});var Mr=i(at);No=r(Mr,"SPAN",{});var Pr=i(No);w(Pt.$$.fragment,Pr),Pr.forEach(t),Mr.forEach(t),ds=h(Pn),Bo=r(Pn,"SPAN",{});var Sr=i(Bo);cs=s(Sr,"HubertModel"),Sr.forEach(t),Pn.forEach(t),yn=h(o),ae=r(o,"DIV",{class:!0});var Ae=i(ae);w(St.$$.fragment,Ae),ps=h(Ae),Ot=r(Ae,"P",{});var Sn=i(Ot);us=s(Sn,`The bare Hubert Model transformer outputting raw hidden-states without any specific head on top.
Hubert was proposed in `),zt=r(Sn,"A",{href:!0,rel:!0});var Or=i(zt);hs=s(Or,`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),Or.forEach(t),ms=s(Sn,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),Sn.forEach(t),fs=h(Ae),Dt=r(Ae,"P",{});var On=i(Dt);gs=s(On,"This model inherits from "),$o=r(On,"A",{href:!0});var zr=i($o);_s=s(zr,"PreTrainedModel"),zr.forEach(t),bs=s(On,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),On.forEach(t),vs=h(Ae),At=r(Ae,"P",{});var zn=i(At);ys=s(zn,"This model is a PyTorch "),Lt=r(zn,"A",{href:!0,rel:!0});var Dr=i(Lt);Ts=s(Dr,"torch.nn.Module"),Dr.forEach(t),ws=s(zn,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zn.forEach(t),ks=h(Ae),Te=r(Ae,"DIV",{class:!0});var Ct=i(Te);w(It.$$.fragment,Ct),$s=h(Ct),Ye=r(Ct,"P",{});var zo=i(Ye);Cs=s(zo,"The "),Co=r(zo,"A",{href:!0});var Ar=i(Co);Hs=s(Ar,"HubertModel"),Ar.forEach(t),Es=s(zo," forward method, overrides the "),Ro=r(zo,"CODE",{});var Lr=i(Ro);js=s(Lr,"__call__"),Lr.forEach(t),Fs=s(zo," special method."),zo.forEach(t),xs=h(Ct),w(rt.$$.fragment,Ct),qs=h(Ct),w(it.$$.fragment,Ct),Ct.forEach(t),Ae.forEach(t),Tn=h(o),Ge=r(o,"H2",{class:!0});var Dn=i(Ge);lt=r(Dn,"A",{id:!0,class:!0,href:!0});var Ir=i(lt);Vo=r(Ir,"SPAN",{});var Wr=i(Vo);w(Wt.$$.fragment,Wr),Wr.forEach(t),Ir.forEach(t),Ms=h(Dn),Uo=r(Dn,"SPAN",{});var Nr=i(Uo);Ps=s(Nr,"HubertForCTC"),Nr.forEach(t),Dn.forEach(t),wn=h(o),re=r(o,"DIV",{class:!0});var Le=i(re);w(Nt.$$.fragment,Le),Ss=h(Le),Xe=r(Le,"P",{});var Do=i(Xe);Os=s(Do,"Hubert Model with a "),Ko=r(Do,"CODE",{});var Br=i(Ko);zs=s(Br,"language modeling"),Br.forEach(t),Ds=s(Do,` head on top for Connectionist Temporal Classification (CTC).
Hubert was proposed in `),Bt=r(Do,"A",{href:!0,rel:!0});var Rr=i(Bt);As=s(Rr,`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),Rr.forEach(t),Ls=s(Do,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),Do.forEach(t),Is=h(Le),Rt=r(Le,"P",{});var An=i(Rt);Ws=s(An,"This model inherits from "),Ho=r(An,"A",{href:!0});var Vr=i(Ho);Ns=s(Vr,"PreTrainedModel"),Vr.forEach(t),Bs=s(An,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),An.forEach(t),Rs=h(Le),Vt=r(Le,"P",{});var Ln=i(Vt);Vs=s(Ln,"This model is a PyTorch "),Ut=r(Ln,"A",{href:!0,rel:!0});var Ur=i(Ut);Us=s(Ur,"torch.nn.Module"),Ur.forEach(t),Ks=s(Ln,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ln.forEach(t),Ys=h(Le),ue=r(Le,"DIV",{class:!0});var Ie=i(ue);w(Kt.$$.fragment,Ie),Gs=h(Ie),Je=r(Ie,"P",{});var Ao=i(Je);Xs=s(Ao,"The "),Eo=r(Ao,"A",{href:!0});var Kr=i(Eo);Js=s(Kr,"HubertForCTC"),Kr.forEach(t),Qs=s(Ao," forward method, overrides the "),Yo=r(Ao,"CODE",{});var Yr=i(Yo);Zs=s(Yr,"__call__"),Yr.forEach(t),ea=s(Ao," special method."),Ao.forEach(t),ta=h(Ie),w(dt.$$.fragment,Ie),oa=h(Ie),w(ct.$$.fragment,Ie),na=h(Ie),w(pt.$$.fragment,Ie),Ie.forEach(t),Le.forEach(t),kn=h(o),Qe=r(o,"H2",{class:!0});var In=i(Qe);ut=r(In,"A",{id:!0,class:!0,href:!0});var Gr=i(ut);Go=r(Gr,"SPAN",{});var Xr=i(Go);w(Yt.$$.fragment,Xr),Xr.forEach(t),Gr.forEach(t),sa=h(In),Xo=r(In,"SPAN",{});var Jr=i(Xo);aa=s(Jr,"HubertForSequenceClassification"),Jr.forEach(t),In.forEach(t),$n=h(o),R=r(o,"DIV",{class:!0});var $e=i(R);w(Gt.$$.fragment,$e),ra=h($e),Jo=r($e,"P",{});var Qr=i(Jo);ia=s(Qr,`Hubert Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),Qr.forEach(t),la=h($e),Xt=r($e,"P",{});var Wn=i(Xt);da=s(Wn,"Hubert was proposed in "),Jt=r(Wn,"A",{href:!0,rel:!0});var Zr=i(Jt);ca=s(Zr,`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),Zr.forEach(t),pa=s(Wn,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),Wn.forEach(t),ua=h($e),Qt=r($e,"P",{});var Nn=i(Qt);ha=s(Nn,"This model inherits from "),jo=r(Nn,"A",{href:!0});var ei=i(jo);ma=s(ei,"PreTrainedModel"),ei.forEach(t),fa=s(Nn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Nn.forEach(t),ga=h($e),Zt=r($e,"P",{});var Bn=i(Zt);_a=s(Bn,"This model is a PyTorch "),eo=r(Bn,"A",{href:!0,rel:!0});var ti=i(eo);ba=s(ti,"torch.nn.Module"),ti.forEach(t),va=s(Bn,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Bn.forEach(t),ya=h($e),he=r($e,"DIV",{class:!0});var We=i(he);w(to.$$.fragment,We),Ta=h(We),Ze=r(We,"P",{});var Lo=i(Ze);wa=s(Lo,"The "),Fo=r(Lo,"A",{href:!0});var oi=i(Fo);ka=s(oi,"HubertForSequenceClassification"),oi.forEach(t),$a=s(Lo," forward method, overrides the "),Qo=r(Lo,"CODE",{});var ni=i(Qo);Ca=s(ni,"__call__"),ni.forEach(t),Ha=s(Lo," special method."),Lo.forEach(t),Ea=h(We),w(ht.$$.fragment,We),ja=h(We),w(mt.$$.fragment,We),Fa=h(We),w(ft.$$.fragment,We),We.forEach(t),$e.forEach(t),Cn=h(o),et=r(o,"H2",{class:!0});var Rn=i(et);gt=r(Rn,"A",{id:!0,class:!0,href:!0});var si=i(gt);Zo=r(si,"SPAN",{});var ai=i(Zo);w(oo.$$.fragment,ai),ai.forEach(t),si.forEach(t),xa=h(Rn),en=r(Rn,"SPAN",{});var ri=i(en);qa=s(ri,"TFHubertModel"),ri.forEach(t),Rn.forEach(t),Hn=h(o),V=r(o,"DIV",{class:!0});var Ce=i(V);w(no.$$.fragment,Ce),Ma=h(Ce),tn=r(Ce,"P",{});var ii=i(tn);Pa=s(ii,"The bare TFHubert Model transformer outputing raw hidden-states without any specific head on top."),ii.forEach(t),Sa=h(Ce),so=r(Ce,"P",{});var Vn=i(so);Oa=s(Vn,"This model inherits from "),xo=r(Vn,"A",{href:!0});var li=i(xo);za=s(li,"TFPreTrainedModel"),li.forEach(t),Da=s(Vn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vn.forEach(t),Aa=h(Ce),ao=r(Ce,"P",{});var Un=i(ao);La=s(Un,"This model is also a "),ro=r(Un,"A",{href:!0,rel:!0});var di=i(ro);Ia=s(di,"tf.keras.Model"),di.forEach(t),Wa=s(Un,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Un.forEach(t),Na=h(Ce),w(_t.$$.fragment,Ce),Ba=h(Ce),we=r(Ce,"DIV",{class:!0});var Ht=i(we);w(io.$$.fragment,Ht),Ra=h(Ht),tt=r(Ht,"P",{});var Io=i(tt);Va=s(Io,"The "),qo=r(Io,"A",{href:!0});var ci=i(qo);Ua=s(ci,"TFHubertModel"),ci.forEach(t),Ka=s(Io," forward method, overrides the "),on=r(Io,"CODE",{});var pi=i(on);Ya=s(pi,"__call__"),pi.forEach(t),Ga=s(Io," special method."),Io.forEach(t),Xa=h(Ht),w(bt.$$.fragment,Ht),Ja=h(Ht),w(vt.$$.fragment,Ht),Ht.forEach(t),Ce.forEach(t),En=h(o),ot=r(o,"H2",{class:!0});var Kn=i(ot);yt=r(Kn,"A",{id:!0,class:!0,href:!0});var ui=i(yt);nn=r(ui,"SPAN",{});var hi=i(nn);w(lo.$$.fragment,hi),hi.forEach(t),ui.forEach(t),Qa=h(Kn),sn=r(Kn,"SPAN",{});var mi=i(sn);Za=s(mi,"TFHubertForCTC"),mi.forEach(t),Kn.forEach(t),jn=h(o),U=r(o,"DIV",{class:!0});var He=i(U);w(co.$$.fragment,He),er=h(He),po=r(He,"P",{});var Yn=i(po);tr=s(Yn,"TFHubert Model with a "),an=r(Yn,"CODE",{});var fi=i(an);or=s(fi,"language modeling"),fi.forEach(t),nr=s(Yn," head on top for Connectionist Temporal Classification (CTC)."),Yn.forEach(t),sr=h(He),uo=r(He,"P",{});var Gn=i(uo);ar=s(Gn,"This model inherits from "),Mo=r(Gn,"A",{href:!0});var gi=i(Mo);rr=s(gi,"TFPreTrainedModel"),gi.forEach(t),ir=s(Gn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gn.forEach(t),lr=h(He),ho=r(He,"P",{});var Xn=i(ho);dr=s(Xn,"This model is also a "),mo=r(Xn,"A",{href:!0,rel:!0});var _i=i(mo);cr=s(_i,"tf.keras.Model"),_i.forEach(t),pr=s(Xn,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xn.forEach(t),ur=h(He),w(Tt.$$.fragment,He),hr=h(He),ke=r(He,"DIV",{class:!0});var Et=i(ke);w(fo.$$.fragment,Et),mr=h(Et),nt=r(Et,"P",{});var Wo=i(nt);fr=s(Wo,"The "),Po=r(Wo,"A",{href:!0});var bi=i(Po);gr=s(bi,"TFHubertForCTC"),bi.forEach(t),_r=s(Wo," forward method, overrides the "),rn=r(Wo,"CODE",{});var vi=i(rn);br=s(vi,"__call__"),vi.forEach(t),vr=s(Wo," special method."),Wo.forEach(t),yr=h(Et),w(wt.$$.fragment,Et),Tr=h(Et),w(kt.$$.fragment,Et),Et.forEach(t),He.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(Wi)),f(p,"id","hubert"),f(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(p,"href","#hubert"),f(c,"class","relative group"),f(K,"id","overview"),f(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(K,"href","#overview"),f(x,"class","relative group"),f(J,"href","https://arxiv.org/abs/2106.07447"),f(J,"rel","nofollow"),f(ce,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),f(_e,"href","https://huggingface.co/patrickvonplaten"),f(_e,"rel","nofollow"),f(pe,"id","transformers.HubertConfig"),f(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pe,"href","#transformers.HubertConfig"),f(oe,"class","relative group"),f(To,"href","/docs/transformers/main/en/model_doc/hubert#transformers.HubertModel"),f(Mt,"href","https://huggingface.co/facebook/hubert-base-ls960"),f(Mt,"rel","nofollow"),f(wo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(ko,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(at,"id","transformers.HubertModel"),f(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(at,"href","#transformers.HubertModel"),f(Ke,"class","relative group"),f(zt,"href","https://arxiv.org/abs/2106.07447"),f(zt,"rel","nofollow"),f($o,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Lt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Lt,"rel","nofollow"),f(Co,"href","/docs/transformers/main/en/model_doc/hubert#transformers.HubertModel"),f(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(lt,"id","transformers.HubertForCTC"),f(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(lt,"href","#transformers.HubertForCTC"),f(Ge,"class","relative group"),f(Bt,"href","https://arxiv.org/abs/2106.07447"),f(Bt,"rel","nofollow"),f(Ho,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ut,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ut,"rel","nofollow"),f(Eo,"href","/docs/transformers/main/en/model_doc/hubert#transformers.HubertForCTC"),f(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ut,"id","transformers.HubertForSequenceClassification"),f(ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ut,"href","#transformers.HubertForSequenceClassification"),f(Qe,"class","relative group"),f(Jt,"href","https://arxiv.org/abs/2106.07447"),f(Jt,"rel","nofollow"),f(jo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(eo,"rel","nofollow"),f(Fo,"href","/docs/transformers/main/en/model_doc/hubert#transformers.HubertForSequenceClassification"),f(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(gt,"id","transformers.TFHubertModel"),f(gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(gt,"href","#transformers.TFHubertModel"),f(et,"class","relative group"),f(xo,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ro,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ro,"rel","nofollow"),f(qo,"href","/docs/transformers/main/en/model_doc/hubert#transformers.TFHubertModel"),f(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(yt,"id","transformers.TFHubertForCTC"),f(yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(yt,"href","#transformers.TFHubertForCTC"),f(ot,"class","relative group"),f(Mo,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(mo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(mo,"rel","nofollow"),f(Po,"href","/docs/transformers/main/en/model_doc/hubert#transformers.TFHubertForCTC"),f(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,d),g(o,v,_),g(o,c,_),e(c,p),e(p,b),k(l,b,null),e(c,m),e(c,F),e(F,Ee),g(o,ie,_),g(o,x,_),e(x,K),e(K,A),k(X,A,null),e(x,je),e(x,L),e(L,Fe),g(o,be,_),g(o,D,_),e(D,I),e(D,J),e(J,me),e(D,q),g(o,P,_),g(o,le,_),e(le,Q),g(o,ve,_),g(o,de,_),e(de,W),e(W,xe),g(o,ye,_),g(o,M,_),e(M,qe),g(o,Y,_),g(o,G,_),e(G,fe),e(fe,Z),e(G,Me),e(G,ee),e(ee,N),e(ee,ce),e(ce,te),e(ee,Pe),g(o,y,_),g(o,E,_),e(E,ge),e(E,_e),e(_e,Ne),e(E,B),g(o,ze,_),g(o,oe,_),e(oe,pe),e(pe,S),k(O,S,null),e(oe,Be),e(oe,Se),e(Se,ne),g(o,De,_),g(o,z,_),k(se,z,null),e(z,Re),e(z,Ve),e(Ve,Jn),e(Ve,To),e(To,Qn),e(Ve,Zn),e(Ve,Mt),e(Mt,es),e(Ve,ts),e(z,os),e(z,Ue),e(Ue,ns),e(Ue,wo),e(wo,ss),e(Ue,as),e(Ue,ko),e(ko,rs),e(Ue,is),e(z,ls),k(st,z,null),g(o,vn,_),g(o,Ke,_),e(Ke,at),e(at,No),k(Pt,No,null),e(Ke,ds),e(Ke,Bo),e(Bo,cs),g(o,yn,_),g(o,ae,_),k(St,ae,null),e(ae,ps),e(ae,Ot),e(Ot,us),e(Ot,zt),e(zt,hs),e(Ot,ms),e(ae,fs),e(ae,Dt),e(Dt,gs),e(Dt,$o),e($o,_s),e(Dt,bs),e(ae,vs),e(ae,At),e(At,ys),e(At,Lt),e(Lt,Ts),e(At,ws),e(ae,ks),e(ae,Te),k(It,Te,null),e(Te,$s),e(Te,Ye),e(Ye,Cs),e(Ye,Co),e(Co,Hs),e(Ye,Es),e(Ye,Ro),e(Ro,js),e(Ye,Fs),e(Te,xs),k(rt,Te,null),e(Te,qs),k(it,Te,null),g(o,Tn,_),g(o,Ge,_),e(Ge,lt),e(lt,Vo),k(Wt,Vo,null),e(Ge,Ms),e(Ge,Uo),e(Uo,Ps),g(o,wn,_),g(o,re,_),k(Nt,re,null),e(re,Ss),e(re,Xe),e(Xe,Os),e(Xe,Ko),e(Ko,zs),e(Xe,Ds),e(Xe,Bt),e(Bt,As),e(Xe,Ls),e(re,Is),e(re,Rt),e(Rt,Ws),e(Rt,Ho),e(Ho,Ns),e(Rt,Bs),e(re,Rs),e(re,Vt),e(Vt,Vs),e(Vt,Ut),e(Ut,Us),e(Vt,Ks),e(re,Ys),e(re,ue),k(Kt,ue,null),e(ue,Gs),e(ue,Je),e(Je,Xs),e(Je,Eo),e(Eo,Js),e(Je,Qs),e(Je,Yo),e(Yo,Zs),e(Je,ea),e(ue,ta),k(dt,ue,null),e(ue,oa),k(ct,ue,null),e(ue,na),k(pt,ue,null),g(o,kn,_),g(o,Qe,_),e(Qe,ut),e(ut,Go),k(Yt,Go,null),e(Qe,sa),e(Qe,Xo),e(Xo,aa),g(o,$n,_),g(o,R,_),k(Gt,R,null),e(R,ra),e(R,Jo),e(Jo,ia),e(R,la),e(R,Xt),e(Xt,da),e(Xt,Jt),e(Jt,ca),e(Xt,pa),e(R,ua),e(R,Qt),e(Qt,ha),e(Qt,jo),e(jo,ma),e(Qt,fa),e(R,ga),e(R,Zt),e(Zt,_a),e(Zt,eo),e(eo,ba),e(Zt,va),e(R,ya),e(R,he),k(to,he,null),e(he,Ta),e(he,Ze),e(Ze,wa),e(Ze,Fo),e(Fo,ka),e(Ze,$a),e(Ze,Qo),e(Qo,Ca),e(Ze,Ha),e(he,Ea),k(ht,he,null),e(he,ja),k(mt,he,null),e(he,Fa),k(ft,he,null),g(o,Cn,_),g(o,et,_),e(et,gt),e(gt,Zo),k(oo,Zo,null),e(et,xa),e(et,en),e(en,qa),g(o,Hn,_),g(o,V,_),k(no,V,null),e(V,Ma),e(V,tn),e(tn,Pa),e(V,Sa),e(V,so),e(so,Oa),e(so,xo),e(xo,za),e(so,Da),e(V,Aa),e(V,ao),e(ao,La),e(ao,ro),e(ro,Ia),e(ao,Wa),e(V,Na),k(_t,V,null),e(V,Ba),e(V,we),k(io,we,null),e(we,Ra),e(we,tt),e(tt,Va),e(tt,qo),e(qo,Ua),e(tt,Ka),e(tt,on),e(on,Ya),e(tt,Ga),e(we,Xa),k(bt,we,null),e(we,Ja),k(vt,we,null),g(o,En,_),g(o,ot,_),e(ot,yt),e(yt,nn),k(lo,nn,null),e(ot,Qa),e(ot,sn),e(sn,Za),g(o,jn,_),g(o,U,_),k(co,U,null),e(U,er),e(U,po),e(po,tr),e(po,an),e(an,or),e(po,nr),e(U,sr),e(U,uo),e(uo,ar),e(uo,Mo),e(Mo,rr),e(uo,ir),e(U,lr),e(U,ho),e(ho,dr),e(ho,mo),e(mo,cr),e(ho,pr),e(U,ur),k(Tt,U,null),e(U,hr),e(U,ke),k(fo,ke,null),e(ke,mr),e(ke,nt),e(nt,fr),e(nt,Po),e(Po,gr),e(nt,_r),e(nt,rn),e(rn,br),e(nt,vr),e(ke,yr),k(wt,ke,null),e(ke,Tr),k(kt,ke,null),Fn=!0},p(o,[_]){const go={};_&2&&(go.$$scope={dirty:_,ctx:o}),st.$set(go);const ln={};_&2&&(ln.$$scope={dirty:_,ctx:o}),rt.$set(ln);const dn={};_&2&&(dn.$$scope={dirty:_,ctx:o}),it.$set(dn);const cn={};_&2&&(cn.$$scope={dirty:_,ctx:o}),dt.$set(cn);const _o={};_&2&&(_o.$$scope={dirty:_,ctx:o}),ct.$set(_o);const pn={};_&2&&(pn.$$scope={dirty:_,ctx:o}),pt.$set(pn);const un={};_&2&&(un.$$scope={dirty:_,ctx:o}),ht.$set(un);const hn={};_&2&&(hn.$$scope={dirty:_,ctx:o}),mt.$set(hn);const bo={};_&2&&(bo.$$scope={dirty:_,ctx:o}),ft.$set(bo);const mn={};_&2&&(mn.$$scope={dirty:_,ctx:o}),_t.$set(mn);const fn={};_&2&&(fn.$$scope={dirty:_,ctx:o}),bt.$set(fn);const gn={};_&2&&(gn.$$scope={dirty:_,ctx:o}),vt.$set(gn);const _n={};_&2&&(_n.$$scope={dirty:_,ctx:o}),Tt.$set(_n);const bn={};_&2&&(bn.$$scope={dirty:_,ctx:o}),wt.$set(bn);const vo={};_&2&&(vo.$$scope={dirty:_,ctx:o}),kt.$set(vo)},i(o){Fn||($(l.$$.fragment,o),$(X.$$.fragment,o),$(O.$$.fragment,o),$(se.$$.fragment,o),$(st.$$.fragment,o),$(Pt.$$.fragment,o),$(St.$$.fragment,o),$(It.$$.fragment,o),$(rt.$$.fragment,o),$(it.$$.fragment,o),$(Wt.$$.fragment,o),$(Nt.$$.fragment,o),$(Kt.$$.fragment,o),$(dt.$$.fragment,o),$(ct.$$.fragment,o),$(pt.$$.fragment,o),$(Yt.$$.fragment,o),$(Gt.$$.fragment,o),$(to.$$.fragment,o),$(ht.$$.fragment,o),$(mt.$$.fragment,o),$(ft.$$.fragment,o),$(oo.$$.fragment,o),$(no.$$.fragment,o),$(_t.$$.fragment,o),$(io.$$.fragment,o),$(bt.$$.fragment,o),$(vt.$$.fragment,o),$(lo.$$.fragment,o),$(co.$$.fragment,o),$(Tt.$$.fragment,o),$(fo.$$.fragment,o),$(wt.$$.fragment,o),$(kt.$$.fragment,o),Fn=!0)},o(o){C(l.$$.fragment,o),C(X.$$.fragment,o),C(O.$$.fragment,o),C(se.$$.fragment,o),C(st.$$.fragment,o),C(Pt.$$.fragment,o),C(St.$$.fragment,o),C(It.$$.fragment,o),C(rt.$$.fragment,o),C(it.$$.fragment,o),C(Wt.$$.fragment,o),C(Nt.$$.fragment,o),C(Kt.$$.fragment,o),C(dt.$$.fragment,o),C(ct.$$.fragment,o),C(pt.$$.fragment,o),C(Yt.$$.fragment,o),C(Gt.$$.fragment,o),C(to.$$.fragment,o),C(ht.$$.fragment,o),C(mt.$$.fragment,o),C(ft.$$.fragment,o),C(oo.$$.fragment,o),C(no.$$.fragment,o),C(_t.$$.fragment,o),C(io.$$.fragment,o),C(bt.$$.fragment,o),C(vt.$$.fragment,o),C(lo.$$.fragment,o),C(co.$$.fragment,o),C(Tt.$$.fragment,o),C(fo.$$.fragment,o),C(wt.$$.fragment,o),C(kt.$$.fragment,o),Fn=!1},d(o){t(d),o&&t(v),o&&t(c),H(l),o&&t(ie),o&&t(x),H(X),o&&t(be),o&&t(D),o&&t(P),o&&t(le),o&&t(ve),o&&t(de),o&&t(ye),o&&t(M),o&&t(Y),o&&t(G),o&&t(y),o&&t(E),o&&t(ze),o&&t(oe),H(O),o&&t(De),o&&t(z),H(se),H(st),o&&t(vn),o&&t(Ke),H(Pt),o&&t(yn),o&&t(ae),H(St),H(It),H(rt),H(it),o&&t(Tn),o&&t(Ge),H(Wt),o&&t(wn),o&&t(re),H(Nt),H(Kt),H(dt),H(ct),H(pt),o&&t(kn),o&&t(Qe),H(Yt),o&&t($n),o&&t(R),H(Gt),H(to),H(ht),H(mt),H(ft),o&&t(Cn),o&&t(et),H(oo),o&&t(Hn),o&&t(V),H(no),H(_t),H(io),H(bt),H(vt),o&&t(En),o&&t(ot),H(lo),o&&t(jn),o&&t(U),H(co),H(Tt),H(fo),H(wt),H(kt)}}}const Wi={local:"hubert",sections:[{local:"overview",title:"Overview"},{local:"transformers.HubertConfig",title:"HubertConfig"},{local:"transformers.HubertModel",title:"HubertModel"},{local:"transformers.HubertForCTC",title:"HubertForCTC"},{local:"transformers.HubertForSequenceClassification",title:"HubertForSequenceClassification"},{local:"transformers.TFHubertModel",title:"TFHubertModel"},{local:"transformers.TFHubertForCTC",title:"TFHubertForCTC"}],title:"Hubert"};function Ni(j){return $i(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gi extends yi{constructor(d){super();Ti(this,d,Ni,Ii,wi,{})}}export{Gi as default,Wi as metadata};
