import{S as yi,i as wi,s as Ti,e as a,k as u,w,t as s,M as ki,c as r,d as t,m as h,a as i,x as T,h as n,b as f,G as e,g,y as k,q as $,o as C,B as H,v as $i,L as Kt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Do}from"../../chunks/Tip-hf-doc-builder.js";import{D as Xe}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Yt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Vt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ut}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ci(F){let d,v,c,m,y;return m=new Yt({props:{code:`from transformers import HubertModel, HubertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),v=s("Example:"),c=u(),w(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);v=n(p,"Example:"),p.forEach(t),c=h(l),T(m.$$.fragment,l)},m(l,p){g(l,d,p),e(d,v),g(l,c,p),k(m,l,p),y=!0},p:Kt,i(l){y||($(m.$$.fragment,l),y=!0)},o(l){C(m.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),H(m,l)}}}function Hi(F){let d,v,c,m,y;return{c(){d=a("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=s("Module"),y=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);v=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var x=i(c);m=n(x,"Module"),x.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){g(l,d,p),e(d,v),e(d,c),e(c,m),e(d,y)},d(l){l&&t(d)}}}function Ei(F){let d,v,c,m,y;return m=new Yt({props:{code:`from transformers import Wav2Vec2Processor, HubertModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),{c(){d=a("p"),v=s("Example:"),c=u(),w(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);v=n(p,"Example:"),p.forEach(t),c=h(l),T(m.$$.fragment,l)},m(l,p){g(l,d,p),e(d,v),g(l,c,p),k(m,l,p),y=!0},p:Kt,i(l){y||($(m.$$.fragment,l),y=!0)},o(l){C(m.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),H(m,l)}}}function ji(F){let d,v,c,m,y;return{c(){d=a("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=s("Module"),y=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);v=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var x=i(c);m=n(x,"Module"),x.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){g(l,d,p),e(d,v),e(d,c),e(c,m),e(d,y)},d(l){l&&t(d)}}}function Fi(F){let d,v,c,m,y;return m=new Yt({props:{code:`from transformers import Wav2Vec2Processor, HubertForCTC
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
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>`}}),{c(){d=a("p"),v=s("Example:"),c=u(),w(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);v=n(p,"Example:"),p.forEach(t),c=h(l),T(m.$$.fragment,l)},m(l,p){g(l,d,p),e(d,v),g(l,c,p),k(m,l,p),y=!0},p:Kt,i(l){y||($(m.$$.fragment,l),y=!0)},o(l){C(m.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),H(m,l)}}}function xi(F){let d,v;return d=new Yt({props:{code:`inputs["labels"] = processor(text=dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(text=dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">22.68</span>`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,m){k(d,c,m),v=!0},p:Kt,i(c){v||($(d.$$.fragment,c),v=!0)},o(c){C(d.$$.fragment,c),v=!1},d(c){H(d,c)}}}function qi(F){let d,v,c,m,y;return{c(){d=a("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=s("Module"),y=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);v=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var x=i(c);m=n(x,"Module"),x.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){g(l,d,p),e(d,v),e(d,c),e(c,m),e(d,y)},d(l){l&&t(d)}}}function Mi(F){let d,v,c,m,y;return m=new Yt({props:{code:`from transformers import Wav2Vec2FeatureExtractor, HubertForSequenceClassification
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
<span class="hljs-string">&#x27;_unknown_&#x27;</span>`}}),{c(){d=a("p"),v=s("Example:"),c=u(),w(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);v=n(p,"Example:"),p.forEach(t),c=h(l),T(m.$$.fragment,l)},m(l,p){g(l,d,p),e(d,v),g(l,c,p),k(m,l,p),y=!0},p:Kt,i(l){y||($(m.$$.fragment,l),y=!0)},o(l){C(m.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),H(m,l)}}}function Pi(F){let d,v;return d=new Yt({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">8.53</span>`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,m){k(d,c,m),v=!0},p:Kt,i(c){v||($(d.$$.fragment,c),v=!0)},o(c){C(d.$$.fragment,c),v=!1},d(c){H(d,c)}}}function Si(F){let d,v,c,m,y,l,p,x,De,ve,D,J,ee,E,ze,U,Ae,ye,L,Ie,te,oe,Le,we,B,We,Te,R,ge,Ne,he,M,z,ke,W,_e,Be,se,ne,Re,S,Ve,ae,$e,Q,re,ie,Ue,K,Ce,A,Z,le,P,Ke,I,Ye,He;return{c(){d=a("p"),v=s("TensorFlow models and layers in "),c=a("code"),m=s("transformers"),y=s(" accept two formats as input:"),l=u(),p=a("ul"),x=a("li"),De=s("having all inputs as keyword arguments (like PyTorch models), or"),ve=u(),D=a("li"),J=s("having all inputs as a list, tuple or dict in the first positional argument."),ee=u(),E=a("p"),ze=s(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Ae=s("model.fit()"),ye=s(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a("code"),Ie=s("model.fit()"),te=s(` supports! If, however, you want to use the second
format outside of Keras methods like `),oe=a("code"),Le=s("fit()"),we=s(" and "),B=a("code"),We=s("predict()"),Te=s(`, such as when creating your own layers or models with
the Keras `),R=a("code"),ge=s("Functional"),Ne=s(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),he=u(),M=a("ul"),z=a("li"),ke=s("a single Tensor with "),W=a("code"),_e=s("input_values"),Be=s(" only and nothing else: "),se=a("code"),ne=s("model(input_values)"),Re=u(),S=a("li"),Ve=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=a("code"),$e=s("model([input_values, attention_mask])"),Q=s(" or "),re=a("code"),ie=s("model([input_values, attention_mask, token_type_ids])"),Ue=u(),K=a("li"),Ce=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=a("code"),Z=s('model({"input_values": input_values, "token_type_ids": token_type_ids})'),le=u(),P=a("p"),Ke=s(`Note that when creating models and layers with
`),I=a("a"),Ye=s("subclassing"),He=s(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var j=i(d);v=n(j,"TensorFlow models and layers in "),c=r(j,"CODE",{});var ot=i(c);m=n(ot,"transformers"),ot.forEach(t),y=n(j," accept two formats as input:"),j.forEach(t),l=h(b),p=r(b,"UL",{});var N=i(p);x=r(N,"LI",{});var st=i(x);De=n(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),ve=h(N),D=r(N,"LI",{});var Ee=i(D);J=n(Ee,"having all inputs as a list, tuple or dict in the first positional argument."),Ee.forEach(t),N.forEach(t),ee=h(b),E=r(b,"P",{});var q=i(E);ze=n(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(q,"CODE",{});var nt=i(U);Ae=n(nt,"model.fit()"),nt.forEach(t),ye=n(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r(q,"CODE",{});var be=i(L);Ie=n(be,"model.fit()"),be.forEach(t),te=n(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),oe=r(q,"CODE",{});var at=i(oe);Le=n(at,"fit()"),at.forEach(t),we=n(q," and "),B=r(q,"CODE",{});var rt=i(B);We=n(rt,"predict()"),rt.forEach(t),Te=n(q,`, such as when creating your own layers or models with
the Keras `),R=r(q,"CODE",{});var it=i(R);ge=n(it,"Functional"),it.forEach(t),Ne=n(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),he=h(b),M=r(b,"UL",{});var O=i(M);z=r(O,"LI",{});var de=i(z);ke=n(de,"a single Tensor with "),W=r(de,"CODE",{});var je=i(W);_e=n(je,"input_values"),je.forEach(t),Be=n(de," only and nothing else: "),se=r(de,"CODE",{});var lt=i(se);ne=n(lt,"model(input_values)"),lt.forEach(t),de.forEach(t),Re=h(O),S=r(O,"LI",{});var ce=i(S);Ve=n(ce,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=r(ce,"CODE",{});var Fe=i(ae);$e=n(Fe,"model([input_values, attention_mask])"),Fe.forEach(t),Q=n(ce," or "),re=r(ce,"CODE",{});var dt=i(re);ie=n(dt,"model([input_values, attention_mask, token_type_ids])"),dt.forEach(t),ce.forEach(t),Ue=h(O),K=r(O,"LI",{});var Ge=i(K);Ce=n(Ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=r(Ge,"CODE",{});var ct=i(A);Z=n(ct,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),ct.forEach(t),Ge.forEach(t),O.forEach(t),le=h(b),P=r(b,"P",{});var V=i(P);Ke=n(V,`Note that when creating models and layers with
`),I=r(V,"A",{href:!0,rel:!0});var Je=i(I);Ye=n(Je,"subclassing"),Je.forEach(t),He=n(V,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),V.forEach(t),this.h()},h(){f(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(I,"rel","nofollow")},m(b,j){g(b,d,j),e(d,v),e(d,c),e(c,m),e(d,y),g(b,l,j),g(b,p,j),e(p,x),e(x,De),e(p,ve),e(p,D),e(D,J),g(b,ee,j),g(b,E,j),e(E,ze),e(E,U),e(U,Ae),e(E,ye),e(E,L),e(L,Ie),e(E,te),e(E,oe),e(oe,Le),e(E,we),e(E,B),e(B,We),e(E,Te),e(E,R),e(R,ge),e(E,Ne),g(b,he,j),g(b,M,j),e(M,z),e(z,ke),e(z,W),e(W,_e),e(z,Be),e(z,se),e(se,ne),e(M,Re),e(M,S),e(S,Ve),e(S,ae),e(ae,$e),e(S,Q),e(S,re),e(re,ie),e(M,Ue),e(M,K),e(K,Ce),e(K,A),e(A,Z),g(b,le,j),g(b,P,j),e(P,Ke),e(P,I),e(I,Ye),e(P,He)},d(b){b&&t(d),b&&t(l),b&&t(p),b&&t(ee),b&&t(E),b&&t(he),b&&t(M),b&&t(le),b&&t(P)}}}function Oi(F){let d,v,c,m,y;return{c(){d=a("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=s("Module"),y=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);v=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var x=i(c);m=n(x,"Module"),x.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){g(l,d,p),e(d,v),e(d,c),e(c,m),e(d,y)},d(l){l&&t(d)}}}function Di(F){let d,v,c,m,y;return m=new Yt({props:{code:`from transformers import Wav2Vec2Processor, TFHubertModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = model(input_values).last_hidden_state`}}),{c(){d=a("p"),v=s("Example:"),c=u(),w(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);v=n(p,"Example:"),p.forEach(t),c=h(l),T(m.$$.fragment,l)},m(l,p){g(l,d,p),e(d,v),g(l,c,p),k(m,l,p),y=!0},p:Kt,i(l){y||($(m.$$.fragment,l),y=!0)},o(l){C(m.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),H(m,l)}}}function zi(F){let d,v,c,m,y,l,p,x,De,ve,D,J,ee,E,ze,U,Ae,ye,L,Ie,te,oe,Le,we,B,We,Te,R,ge,Ne,he,M,z,ke,W,_e,Be,se,ne,Re,S,Ve,ae,$e,Q,re,ie,Ue,K,Ce,A,Z,le,P,Ke,I,Ye,He;return{c(){d=a("p"),v=s("TensorFlow models and layers in "),c=a("code"),m=s("transformers"),y=s(" accept two formats as input:"),l=u(),p=a("ul"),x=a("li"),De=s("having all inputs as keyword arguments (like PyTorch models), or"),ve=u(),D=a("li"),J=s("having all inputs as a list, tuple or dict in the first positional argument."),ee=u(),E=a("p"),ze=s(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Ae=s("model.fit()"),ye=s(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a("code"),Ie=s("model.fit()"),te=s(` supports! If, however, you want to use the second
format outside of Keras methods like `),oe=a("code"),Le=s("fit()"),we=s(" and "),B=a("code"),We=s("predict()"),Te=s(`, such as when creating your own layers or models with
the Keras `),R=a("code"),ge=s("Functional"),Ne=s(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),he=u(),M=a("ul"),z=a("li"),ke=s("a single Tensor with "),W=a("code"),_e=s("input_values"),Be=s(" only and nothing else: "),se=a("code"),ne=s("model(input_values)"),Re=u(),S=a("li"),Ve=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=a("code"),$e=s("model([input_values, attention_mask])"),Q=s(" or "),re=a("code"),ie=s("model([input_values, attention_mask, token_type_ids])"),Ue=u(),K=a("li"),Ce=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=a("code"),Z=s('model({"input_values": input_values, "token_type_ids": token_type_ids})'),le=u(),P=a("p"),Ke=s(`Note that when creating models and layers with
`),I=a("a"),Ye=s("subclassing"),He=s(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var j=i(d);v=n(j,"TensorFlow models and layers in "),c=r(j,"CODE",{});var ot=i(c);m=n(ot,"transformers"),ot.forEach(t),y=n(j," accept two formats as input:"),j.forEach(t),l=h(b),p=r(b,"UL",{});var N=i(p);x=r(N,"LI",{});var st=i(x);De=n(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),ve=h(N),D=r(N,"LI",{});var Ee=i(D);J=n(Ee,"having all inputs as a list, tuple or dict in the first positional argument."),Ee.forEach(t),N.forEach(t),ee=h(b),E=r(b,"P",{});var q=i(E);ze=n(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(q,"CODE",{});var nt=i(U);Ae=n(nt,"model.fit()"),nt.forEach(t),ye=n(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r(q,"CODE",{});var be=i(L);Ie=n(be,"model.fit()"),be.forEach(t),te=n(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),oe=r(q,"CODE",{});var at=i(oe);Le=n(at,"fit()"),at.forEach(t),we=n(q," and "),B=r(q,"CODE",{});var rt=i(B);We=n(rt,"predict()"),rt.forEach(t),Te=n(q,`, such as when creating your own layers or models with
the Keras `),R=r(q,"CODE",{});var it=i(R);ge=n(it,"Functional"),it.forEach(t),Ne=n(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),he=h(b),M=r(b,"UL",{});var O=i(M);z=r(O,"LI",{});var de=i(z);ke=n(de,"a single Tensor with "),W=r(de,"CODE",{});var je=i(W);_e=n(je,"input_values"),je.forEach(t),Be=n(de," only and nothing else: "),se=r(de,"CODE",{});var lt=i(se);ne=n(lt,"model(input_values)"),lt.forEach(t),de.forEach(t),Re=h(O),S=r(O,"LI",{});var ce=i(S);Ve=n(ce,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=r(ce,"CODE",{});var Fe=i(ae);$e=n(Fe,"model([input_values, attention_mask])"),Fe.forEach(t),Q=n(ce," or "),re=r(ce,"CODE",{});var dt=i(re);ie=n(dt,"model([input_values, attention_mask, token_type_ids])"),dt.forEach(t),ce.forEach(t),Ue=h(O),K=r(O,"LI",{});var Ge=i(K);Ce=n(Ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=r(Ge,"CODE",{});var ct=i(A);Z=n(ct,'model({"input_values": input_values, "token_type_ids": token_type_ids})'),ct.forEach(t),Ge.forEach(t),O.forEach(t),le=h(b),P=r(b,"P",{});var V=i(P);Ke=n(V,`Note that when creating models and layers with
`),I=r(V,"A",{href:!0,rel:!0});var Je=i(I);Ye=n(Je,"subclassing"),Je.forEach(t),He=n(V,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),V.forEach(t),this.h()},h(){f(I,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(I,"rel","nofollow")},m(b,j){g(b,d,j),e(d,v),e(d,c),e(c,m),e(d,y),g(b,l,j),g(b,p,j),e(p,x),e(x,De),e(p,ve),e(p,D),e(D,J),g(b,ee,j),g(b,E,j),e(E,ze),e(E,U),e(U,Ae),e(E,ye),e(E,L),e(L,Ie),e(E,te),e(E,oe),e(oe,Le),e(E,we),e(E,B),e(B,We),e(E,Te),e(E,R),e(R,ge),e(E,Ne),g(b,he,j),g(b,M,j),e(M,z),e(z,ke),e(z,W),e(W,_e),e(z,Be),e(z,se),e(se,ne),e(M,Re),e(M,S),e(S,Ve),e(S,ae),e(ae,$e),e(S,Q),e(S,re),e(re,ie),e(M,Ue),e(M,K),e(K,Ce),e(K,A),e(A,Z),g(b,le,j),g(b,P,j),e(P,Ke),e(P,I),e(I,Ye),e(P,He)},d(b){b&&t(d),b&&t(l),b&&t(p),b&&t(ee),b&&t(E),b&&t(he),b&&t(M),b&&t(le),b&&t(P)}}}function Ai(F){let d,v,c,m,y;return{c(){d=a("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=s("Module"),y=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);v=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var x=i(c);m=n(x,"Module"),x.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){g(l,d,p),e(d,v),e(d,c),e(c,m),e(d,y)},d(l){l&&t(d)}}}function Ii(F){let d,v,c,m,y;return m=new Yt({props:{code:`import tensorflow as tf
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, labels=labels).loss`}}),{c(){d=a("p"),v=s("Example:"),c=u(),w(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);v=n(p,"Example:"),p.forEach(t),c=h(l),T(m.$$.fragment,l)},m(l,p){g(l,d,p),e(d,v),g(l,c,p),k(m,l,p),y=!0},p:Kt,i(l){y||($(m.$$.fragment,l),y=!0)},o(l){C(m.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),H(m,l)}}}function Li(F){let d,v,c,m,y,l,p,x,De,ve,D,J,ee,E,ze,U,Ae,ye,L,Ie,te,oe,Le,we,B,We,Te,R,ge,Ne,he,M,z,ke,W,_e,Be,se,ne,Re,S,Ve,ae,$e,Q,re,ie,Ue,K,Ce,A,Z,le,P,Ke,I,Ye,He,b,j,ot,N,st,Ee,q,nt,be,at,rt,it,O,de,je,lt,ce,Fe,dt,Ge,ct,V,Je,pt,Tt,ts,Gt,dn,os,cn,qs,pe,Xt,pn,Jt,un,Qt,hn,mn,fn,Zt,gn,zo,_n,bn,vn,eo,yn,to,wn,Tn,kn,xe,oo,$n,ut,Cn,Ao,Hn,En,ss,jn,Fn,xn,kt,qn,$t,Ms,ht,Ct,ns,so,Mn,as,Pn,Ps,ue,no,Sn,mt,On,rs,Dn,zn,ao,An,In,Ln,ro,Wn,Io,Nn,Bn,Rn,io,Vn,lo,Un,Kn,Yn,me,co,Gn,ft,Xn,Lo,Jn,Qn,is,Zn,ea,ta,Ht,oa,Et,sa,jt,Ss,gt,Ft,ls,po,na,ds,aa,Os,Y,uo,ra,cs,ia,la,ho,da,mo,ca,pa,ua,fo,ha,Wo,ma,fa,ga,go,_a,_o,ba,va,ya,fe,bo,wa,_t,Ta,No,ka,$a,ps,Ca,Ha,Ea,xt,ja,qt,Fa,Mt,Ds,bt,Pt,us,vo,xa,hs,qa,zs,G,yo,Ma,ms,Pa,Sa,wo,Oa,Bo,Da,za,Aa,To,Ia,ko,La,Wa,Na,St,Ba,qe,$o,Ra,vt,Va,Ro,Ua,Ka,fs,Ya,Ga,Xa,Ot,Ja,Dt,As,yt,zt,gs,Co,Qa,_s,Za,Is,X,Ho,er,Eo,tr,bs,or,sr,nr,jo,ar,Vo,rr,ir,lr,Fo,dr,xo,cr,pr,ur,At,hr,Me,qo,mr,wt,fr,Uo,gr,_r,vs,br,vr,yr,It,wr,Lt,Ls;return l=new Vt({}),E=new Vt({}),P=new Vt({}),j=new Xe({props:{name:"class transformers.HubertConfig",anchor:"transformers.HubertConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_layer_norm",val:" = True"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"ctc_loss_reduction",val:" = 'sum'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.HubertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
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
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/hubert/configuration_hubert.py#L32"}}),V=new Ut({props:{anchor:"transformers.HubertConfig.example",$$slots:{default:[Ci]},$$scope:{ctx:F}}}),Gt=new Vt({}),Xt=new Xe({props:{name:"class transformers.HubertModel",anchor:"transformers.HubertModel",parameters:[{name:"config",val:": HubertConfig"}],parametersDescription:[{anchor:"transformers.HubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/hubert/modeling_hubert.py#L949"}}),oo=new Xe({props:{name:"forward",anchor:"transformers.HubertModel.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.HubertModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),kt=new Do({props:{$$slots:{default:[Hi]},$$scope:{ctx:F}}}),$t=new Ut({props:{anchor:"transformers.HubertModel.forward.example",$$slots:{default:[Ei]},$$scope:{ctx:F}}}),so=new Vt({}),no=new Xe({props:{name:"class transformers.HubertForCTC",anchor:"transformers.HubertForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.HubertForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/hubert/modeling_hubert.py#L1093"}}),co=new Xe({props:{name:"forward",anchor:"transformers.HubertForCTC.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.HubertForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ht=new Do({props:{$$slots:{default:[ji]},$$scope:{ctx:F}}}),Et=new Ut({props:{anchor:"transformers.HubertForCTC.forward.example",$$slots:{default:[Fi]},$$scope:{ctx:F}}}),jt=new Ut({props:{anchor:"transformers.HubertForCTC.forward.example-2",$$slots:{default:[xi]},$$scope:{ctx:F}}}),po=new Vt({}),uo=new Xe({props:{name:"class transformers.HubertForSequenceClassification",anchor:"transformers.HubertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.HubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/hubert/modeling_hubert.py#L1224"}}),bo=new Xe({props:{name:"forward",anchor:"transformers.HubertForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.HubertForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),xt=new Do({props:{$$slots:{default:[qi]},$$scope:{ctx:F}}}),qt=new Ut({props:{anchor:"transformers.HubertForSequenceClassification.forward.example",$$slots:{default:[Mi]},$$scope:{ctx:F}}}),Mt=new Ut({props:{anchor:"transformers.HubertForSequenceClassification.forward.example-2",$$slots:{default:[Pi]},$$scope:{ctx:F}}}),vo=new Vt({}),yo=new Xe({props:{name:"class transformers.TFHubertModel",anchor:"transformers.TFHubertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFHubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/hubert/modeling_tf_hubert.py#L1440"}}),St=new Do({props:{$$slots:{default:[Si]},$$scope:{ctx:F}}}),$o=new Xe({props:{name:"call",anchor:"transformers.TFHubertModel.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFHubertModel.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/hubert/modeling_tf_hubert.py#L1446",returnDescription:`
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
`}}),Ot=new Do({props:{$$slots:{default:[Oi]},$$scope:{ctx:F}}}),Dt=new Ut({props:{anchor:"transformers.TFHubertModel.call.example",$$slots:{default:[Di]},$$scope:{ctx:F}}}),Co=new Vt({}),Ho=new Xe({props:{name:"class transformers.TFHubertForCTC",anchor:"transformers.TFHubertForCTC",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFHubertForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/hubert#transformers.HubertConfig">HubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/hubert/modeling_tf_hubert.py#L1539"}}),At=new Do({props:{$$slots:{default:[zi]},$$scope:{ctx:F}}}),qo=new Xe({props:{name:"call",anchor:"transformers.TFHubertForCTC.call",parameters:[{name:"input_values",val:": Tensor"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFHubertForCTC.call.input_values",description:`<strong>input_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>({0})</code>) &#x2014;
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
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/hubert/modeling_tf_hubert.py#L1566",returnDescription:`
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
`}}),It=new Do({props:{$$slots:{default:[Ai]},$$scope:{ctx:F}}}),Lt=new Ut({props:{anchor:"transformers.TFHubertForCTC.call.example",$$slots:{default:[Ii]},$$scope:{ctx:F}}}),{c(){d=a("meta"),v=u(),c=a("h1"),m=a("a"),y=a("span"),w(l.$$.fragment),p=u(),x=a("span"),De=s("Hubert"),ve=u(),D=a("h2"),J=a("a"),ee=a("span"),w(E.$$.fragment),ze=u(),U=a("span"),Ae=s("Overview"),ye=u(),L=a("p"),Ie=s("Hubert was proposed in "),te=a("a"),oe=s("HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),Le=s(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia, Ruslan
Salakhutdinov, Abdelrahman Mohamed.`),we=u(),B=a("p"),We=s("The abstract from the paper is the following:"),Te=u(),R=a("p"),ge=a("em"),Ne=s(`Self-supervised approaches for speech representation learning are challenged by three unique problems: (1) there are
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
reduction on the more challenging dev-other and test-other evaluation subsets.`),he=u(),M=a("p"),z=s("Tips:"),ke=u(),W=a("ul"),_e=a("li"),Be=s("Hubert is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),se=u(),ne=a("li"),Re=s(`Hubert model was fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),S=a("a"),Ve=s("Wav2Vec2CTCTokenizer"),ae=s("."),$e=u(),Q=a("p"),re=s("This model was contributed by "),ie=a("a"),Ue=s("patrickvonplaten"),K=s("."),Ce=u(),A=a("h2"),Z=a("a"),le=a("span"),w(P.$$.fragment),Ke=u(),I=a("span"),Ye=s("HubertConfig"),He=u(),b=a("div"),w(j.$$.fragment),ot=u(),N=a("p"),st=s("This is the configuration class to store the configuration of a "),Ee=a("a"),q=s("HubertModel"),nt=s(`. It is used to instantiate an
Hubert model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Hubert
`),be=a("a"),at=s("facebook/hubert-base-ls960"),rt=s(" architecture."),it=u(),O=a("p"),de=s("Configuration objects inherit from "),je=a("a"),lt=s("PretrainedConfig"),ce=s(` and can be used to control the model outputs. Read the
documentation from `),Fe=a("a"),dt=s("PretrainedConfig"),Ge=s(" for more information."),ct=u(),w(V.$$.fragment),Je=u(),pt=a("h2"),Tt=a("a"),ts=a("span"),w(Gt.$$.fragment),dn=u(),os=a("span"),cn=s("HubertModel"),qs=u(),pe=a("div"),w(Xt.$$.fragment),pn=u(),Jt=a("p"),un=s(`The bare Hubert Model transformer outputting raw hidden-states without any specific head on top.
Hubert was proposed in `),Qt=a("a"),hn=s(`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),mn=s(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),fn=u(),Zt=a("p"),gn=s("This model inherits from "),zo=a("a"),_n=s("PreTrainedModel"),bn=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),vn=u(),eo=a("p"),yn=s("This model is a PyTorch "),to=a("a"),wn=s("torch.nn.Module"),Tn=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kn=u(),xe=a("div"),w(oo.$$.fragment),$n=u(),ut=a("p"),Cn=s("The "),Ao=a("a"),Hn=s("HubertModel"),En=s(" forward method, overrides the "),ss=a("code"),jn=s("__call__"),Fn=s(" special method."),xn=u(),w(kt.$$.fragment),qn=u(),w($t.$$.fragment),Ms=u(),ht=a("h2"),Ct=a("a"),ns=a("span"),w(so.$$.fragment),Mn=u(),as=a("span"),Pn=s("HubertForCTC"),Ps=u(),ue=a("div"),w(no.$$.fragment),Sn=u(),mt=a("p"),On=s("Hubert Model with a "),rs=a("code"),Dn=s("language modeling"),zn=s(` head on top for Connectionist Temporal Classification (CTC).
Hubert was proposed in `),ao=a("a"),An=s(`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),In=s(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),Ln=u(),ro=a("p"),Wn=s("This model inherits from "),Io=a("a"),Nn=s("PreTrainedModel"),Bn=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Rn=u(),io=a("p"),Vn=s("This model is a PyTorch "),lo=a("a"),Un=s("torch.nn.Module"),Kn=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yn=u(),me=a("div"),w(co.$$.fragment),Gn=u(),ft=a("p"),Xn=s("The "),Lo=a("a"),Jn=s("HubertForCTC"),Qn=s(" forward method, overrides the "),is=a("code"),Zn=s("__call__"),ea=s(" special method."),ta=u(),w(Ht.$$.fragment),oa=u(),w(Et.$$.fragment),sa=u(),w(jt.$$.fragment),Ss=u(),gt=a("h2"),Ft=a("a"),ls=a("span"),w(po.$$.fragment),na=u(),ds=a("span"),aa=s("HubertForSequenceClassification"),Os=u(),Y=a("div"),w(uo.$$.fragment),ra=u(),cs=a("p"),ia=s(`Hubert Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),la=u(),ho=a("p"),da=s("Hubert was proposed in "),mo=a("a"),ca=s(`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),pa=s(` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),ua=u(),fo=a("p"),ha=s("This model inherits from "),Wo=a("a"),ma=s("PreTrainedModel"),fa=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ga=u(),go=a("p"),_a=s("This model is a PyTorch "),_o=a("a"),ba=s("torch.nn.Module"),va=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ya=u(),fe=a("div"),w(bo.$$.fragment),wa=u(),_t=a("p"),Ta=s("The "),No=a("a"),ka=s("HubertForSequenceClassification"),$a=s(" forward method, overrides the "),ps=a("code"),Ca=s("__call__"),Ha=s(" special method."),Ea=u(),w(xt.$$.fragment),ja=u(),w(qt.$$.fragment),Fa=u(),w(Mt.$$.fragment),Ds=u(),bt=a("h2"),Pt=a("a"),us=a("span"),w(vo.$$.fragment),xa=u(),hs=a("span"),qa=s("TFHubertModel"),zs=u(),G=a("div"),w(yo.$$.fragment),Ma=u(),ms=a("p"),Pa=s("The bare TFHubert Model transformer outputing raw hidden-states without any specific head on top."),Sa=u(),wo=a("p"),Oa=s("This model inherits from "),Bo=a("a"),Da=s("TFPreTrainedModel"),za=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Aa=u(),To=a("p"),Ia=s("This model is also a "),ko=a("a"),La=s("tf.keras.Model"),Wa=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Na=u(),w(St.$$.fragment),Ba=u(),qe=a("div"),w($o.$$.fragment),Ra=u(),vt=a("p"),Va=s("The "),Ro=a("a"),Ua=s("TFHubertModel"),Ka=s(" forward method, overrides the "),fs=a("code"),Ya=s("__call__"),Ga=s(" special method."),Xa=u(),w(Ot.$$.fragment),Ja=u(),w(Dt.$$.fragment),As=u(),yt=a("h2"),zt=a("a"),gs=a("span"),w(Co.$$.fragment),Qa=u(),_s=a("span"),Za=s("TFHubertForCTC"),Is=u(),X=a("div"),w(Ho.$$.fragment),er=u(),Eo=a("p"),tr=s("TFHubert Model with a "),bs=a("code"),or=s("language modeling"),sr=s(" head on top for Connectionist Temporal Classification (CTC)."),nr=u(),jo=a("p"),ar=s("This model inherits from "),Vo=a("a"),rr=s("TFPreTrainedModel"),ir=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lr=u(),Fo=a("p"),dr=s("This model is also a "),xo=a("a"),cr=s("tf.keras.Model"),pr=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ur=u(),w(At.$$.fragment),hr=u(),Me=a("div"),w(qo.$$.fragment),mr=u(),wt=a("p"),fr=s("The "),Uo=a("a"),gr=s("TFHubertForCTC"),_r=s(" forward method, overrides the "),vs=a("code"),br=s("__call__"),vr=s(" special method."),yr=u(),w(It.$$.fragment),wr=u(),w(Lt.$$.fragment),this.h()},l(o){const _=ki('[data-svelte="svelte-1phssyn"]',document.head);d=r(_,"META",{name:!0,content:!0}),_.forEach(t),v=h(o),c=r(o,"H1",{class:!0});var Mo=i(c);m=r(Mo,"A",{id:!0,class:!0,href:!0});var ys=i(m);y=r(ys,"SPAN",{});var ws=i(y);T(l.$$.fragment,ws),ws.forEach(t),ys.forEach(t),p=h(Mo),x=r(Mo,"SPAN",{});var Ts=i(x);De=n(Ts,"Hubert"),Ts.forEach(t),Mo.forEach(t),ve=h(o),D=r(o,"H2",{class:!0});var Po=i(D);J=r(Po,"A",{id:!0,class:!0,href:!0});var ks=i(J);ee=r(ks,"SPAN",{});var $s=i(ee);T(E.$$.fragment,$s),$s.forEach(t),ks.forEach(t),ze=h(Po),U=r(Po,"SPAN",{});var Cs=i(U);Ae=n(Cs,"Overview"),Cs.forEach(t),Po.forEach(t),ye=h(o),L=r(o,"P",{});var So=i(L);Ie=n(So,"Hubert was proposed in "),te=r(So,"A",{href:!0,rel:!0});var Hs=i(te);oe=n(Hs,"HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"),Hs.forEach(t),Le=n(So,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia, Ruslan
Salakhutdinov, Abdelrahman Mohamed.`),So.forEach(t),we=h(o),B=r(o,"P",{});var Es=i(B);We=n(Es,"The abstract from the paper is the following:"),Es.forEach(t),Te=h(o),R=r(o,"P",{});var js=i(R);ge=r(js,"EM",{});var Fs=i(ge);Ne=n(Fs,`Self-supervised approaches for speech representation learning are challenged by three unique problems: (1) there are
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
reduction on the more challenging dev-other and test-other evaluation subsets.`),Fs.forEach(t),js.forEach(t),he=h(o),M=r(o,"P",{});var xs=i(M);z=n(xs,"Tips:"),xs.forEach(t),ke=h(o),W=r(o,"UL",{});var Oo=i(W);_e=r(Oo,"LI",{});var Tr=i(_e);Be=n(Tr,"Hubert is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),Tr.forEach(t),se=h(Oo),ne=r(Oo,"LI",{});var Ws=i(ne);Re=n(Ws,`Hubert model was fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),S=r(Ws,"A",{href:!0});var kr=i(S);Ve=n(kr,"Wav2Vec2CTCTokenizer"),kr.forEach(t),ae=n(Ws,"."),Ws.forEach(t),Oo.forEach(t),$e=h(o),Q=r(o,"P",{});var Ns=i(Q);re=n(Ns,"This model was contributed by "),ie=r(Ns,"A",{href:!0,rel:!0});var $r=i(ie);Ue=n($r,"patrickvonplaten"),$r.forEach(t),K=n(Ns,"."),Ns.forEach(t),Ce=h(o),A=r(o,"H2",{class:!0});var Bs=i(A);Z=r(Bs,"A",{id:!0,class:!0,href:!0});var Cr=i(Z);le=r(Cr,"SPAN",{});var Hr=i(le);T(P.$$.fragment,Hr),Hr.forEach(t),Cr.forEach(t),Ke=h(Bs),I=r(Bs,"SPAN",{});var Er=i(I);Ye=n(Er,"HubertConfig"),Er.forEach(t),Bs.forEach(t),He=h(o),b=r(o,"DIV",{class:!0});var Wt=i(b);T(j.$$.fragment,Wt),ot=h(Wt),N=r(Wt,"P",{});var Ko=i(N);st=n(Ko,"This is the configuration class to store the configuration of a "),Ee=r(Ko,"A",{href:!0});var jr=i(Ee);q=n(jr,"HubertModel"),jr.forEach(t),nt=n(Ko,`. It is used to instantiate an
Hubert model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Hubert
`),be=r(Ko,"A",{href:!0,rel:!0});var Fr=i(be);at=n(Fr,"facebook/hubert-base-ls960"),Fr.forEach(t),rt=n(Ko," architecture."),Ko.forEach(t),it=h(Wt),O=r(Wt,"P",{});var Yo=i(O);de=n(Yo,"Configuration objects inherit from "),je=r(Yo,"A",{href:!0});var xr=i(je);lt=n(xr,"PretrainedConfig"),xr.forEach(t),ce=n(Yo,` and can be used to control the model outputs. Read the
documentation from `),Fe=r(Yo,"A",{href:!0});var qr=i(Fe);dt=n(qr,"PretrainedConfig"),qr.forEach(t),Ge=n(Yo," for more information."),Yo.forEach(t),ct=h(Wt),T(V.$$.fragment,Wt),Wt.forEach(t),Je=h(o),pt=r(o,"H2",{class:!0});var Rs=i(pt);Tt=r(Rs,"A",{id:!0,class:!0,href:!0});var Mr=i(Tt);ts=r(Mr,"SPAN",{});var Pr=i(ts);T(Gt.$$.fragment,Pr),Pr.forEach(t),Mr.forEach(t),dn=h(Rs),os=r(Rs,"SPAN",{});var Sr=i(os);cn=n(Sr,"HubertModel"),Sr.forEach(t),Rs.forEach(t),qs=h(o),pe=r(o,"DIV",{class:!0});var Qe=i(pe);T(Xt.$$.fragment,Qe),pn=h(Qe),Jt=r(Qe,"P",{});var Vs=i(Jt);un=n(Vs,`The bare Hubert Model transformer outputting raw hidden-states without any specific head on top.
Hubert was proposed in `),Qt=r(Vs,"A",{href:!0,rel:!0});var Or=i(Qt);hn=n(Or,`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),Or.forEach(t),mn=n(Vs,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),Vs.forEach(t),fn=h(Qe),Zt=r(Qe,"P",{});var Us=i(Zt);gn=n(Us,"This model inherits from "),zo=r(Us,"A",{href:!0});var Dr=i(zo);_n=n(Dr,"PreTrainedModel"),Dr.forEach(t),bn=n(Us,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Us.forEach(t),vn=h(Qe),eo=r(Qe,"P",{});var Ks=i(eo);yn=n(Ks,"This model is a PyTorch "),to=r(Ks,"A",{href:!0,rel:!0});var zr=i(to);wn=n(zr,"torch.nn.Module"),zr.forEach(t),Tn=n(Ks,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ks.forEach(t),kn=h(Qe),xe=r(Qe,"DIV",{class:!0});var Nt=i(xe);T(oo.$$.fragment,Nt),$n=h(Nt),ut=r(Nt,"P",{});var Go=i(ut);Cn=n(Go,"The "),Ao=r(Go,"A",{href:!0});var Ar=i(Ao);Hn=n(Ar,"HubertModel"),Ar.forEach(t),En=n(Go," forward method, overrides the "),ss=r(Go,"CODE",{});var Ir=i(ss);jn=n(Ir,"__call__"),Ir.forEach(t),Fn=n(Go," special method."),Go.forEach(t),xn=h(Nt),T(kt.$$.fragment,Nt),qn=h(Nt),T($t.$$.fragment,Nt),Nt.forEach(t),Qe.forEach(t),Ms=h(o),ht=r(o,"H2",{class:!0});var Ys=i(ht);Ct=r(Ys,"A",{id:!0,class:!0,href:!0});var Lr=i(Ct);ns=r(Lr,"SPAN",{});var Wr=i(ns);T(so.$$.fragment,Wr),Wr.forEach(t),Lr.forEach(t),Mn=h(Ys),as=r(Ys,"SPAN",{});var Nr=i(as);Pn=n(Nr,"HubertForCTC"),Nr.forEach(t),Ys.forEach(t),Ps=h(o),ue=r(o,"DIV",{class:!0});var Ze=i(ue);T(no.$$.fragment,Ze),Sn=h(Ze),mt=r(Ze,"P",{});var Xo=i(mt);On=n(Xo,"Hubert Model with a "),rs=r(Xo,"CODE",{});var Br=i(rs);Dn=n(Br,"language modeling"),Br.forEach(t),zn=n(Xo,` head on top for Connectionist Temporal Classification (CTC).
Hubert was proposed in `),ao=r(Xo,"A",{href:!0,rel:!0});var Rr=i(ao);An=n(Rr,`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),Rr.forEach(t),In=n(Xo,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),Xo.forEach(t),Ln=h(Ze),ro=r(Ze,"P",{});var Gs=i(ro);Wn=n(Gs,"This model inherits from "),Io=r(Gs,"A",{href:!0});var Vr=i(Io);Nn=n(Vr,"PreTrainedModel"),Vr.forEach(t),Bn=n(Gs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Gs.forEach(t),Rn=h(Ze),io=r(Ze,"P",{});var Xs=i(io);Vn=n(Xs,"This model is a PyTorch "),lo=r(Xs,"A",{href:!0,rel:!0});var Ur=i(lo);Un=n(Ur,"torch.nn.Module"),Ur.forEach(t),Kn=n(Xs,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xs.forEach(t),Yn=h(Ze),me=r(Ze,"DIV",{class:!0});var et=i(me);T(co.$$.fragment,et),Gn=h(et),ft=r(et,"P",{});var Jo=i(ft);Xn=n(Jo,"The "),Lo=r(Jo,"A",{href:!0});var Kr=i(Lo);Jn=n(Kr,"HubertForCTC"),Kr.forEach(t),Qn=n(Jo," forward method, overrides the "),is=r(Jo,"CODE",{});var Yr=i(is);Zn=n(Yr,"__call__"),Yr.forEach(t),ea=n(Jo," special method."),Jo.forEach(t),ta=h(et),T(Ht.$$.fragment,et),oa=h(et),T(Et.$$.fragment,et),sa=h(et),T(jt.$$.fragment,et),et.forEach(t),Ze.forEach(t),Ss=h(o),gt=r(o,"H2",{class:!0});var Js=i(gt);Ft=r(Js,"A",{id:!0,class:!0,href:!0});var Gr=i(Ft);ls=r(Gr,"SPAN",{});var Xr=i(ls);T(po.$$.fragment,Xr),Xr.forEach(t),Gr.forEach(t),na=h(Js),ds=r(Js,"SPAN",{});var Jr=i(ds);aa=n(Jr,"HubertForSequenceClassification"),Jr.forEach(t),Js.forEach(t),Os=h(o),Y=r(o,"DIV",{class:!0});var Pe=i(Y);T(uo.$$.fragment,Pe),ra=h(Pe),cs=r(Pe,"P",{});var Qr=i(cs);ia=n(Qr,`Hubert Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),Qr.forEach(t),la=h(Pe),ho=r(Pe,"P",{});var Qs=i(ho);da=n(Qs,"Hubert was proposed in "),mo=r(Qs,"A",{href:!0,rel:!0});var Zr=i(mo);ca=n(Zr,`HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden
Units`),Zr.forEach(t),pa=n(Qs,` by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia,
Ruslan Salakhutdinov, Abdelrahman Mohamed.`),Qs.forEach(t),ua=h(Pe),fo=r(Pe,"P",{});var Zs=i(fo);ha=n(Zs,"This model inherits from "),Wo=r(Zs,"A",{href:!0});var ei=i(Wo);ma=n(ei,"PreTrainedModel"),ei.forEach(t),fa=n(Zs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Zs.forEach(t),ga=h(Pe),go=r(Pe,"P",{});var en=i(go);_a=n(en,"This model is a PyTorch "),_o=r(en,"A",{href:!0,rel:!0});var ti=i(_o);ba=n(ti,"torch.nn.Module"),ti.forEach(t),va=n(en,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),en.forEach(t),ya=h(Pe),fe=r(Pe,"DIV",{class:!0});var tt=i(fe);T(bo.$$.fragment,tt),wa=h(tt),_t=r(tt,"P",{});var Qo=i(_t);Ta=n(Qo,"The "),No=r(Qo,"A",{href:!0});var oi=i(No);ka=n(oi,"HubertForSequenceClassification"),oi.forEach(t),$a=n(Qo," forward method, overrides the "),ps=r(Qo,"CODE",{});var si=i(ps);Ca=n(si,"__call__"),si.forEach(t),Ha=n(Qo," special method."),Qo.forEach(t),Ea=h(tt),T(xt.$$.fragment,tt),ja=h(tt),T(qt.$$.fragment,tt),Fa=h(tt),T(Mt.$$.fragment,tt),tt.forEach(t),Pe.forEach(t),Ds=h(o),bt=r(o,"H2",{class:!0});var tn=i(bt);Pt=r(tn,"A",{id:!0,class:!0,href:!0});var ni=i(Pt);us=r(ni,"SPAN",{});var ai=i(us);T(vo.$$.fragment,ai),ai.forEach(t),ni.forEach(t),xa=h(tn),hs=r(tn,"SPAN",{});var ri=i(hs);qa=n(ri,"TFHubertModel"),ri.forEach(t),tn.forEach(t),zs=h(o),G=r(o,"DIV",{class:!0});var Se=i(G);T(yo.$$.fragment,Se),Ma=h(Se),ms=r(Se,"P",{});var ii=i(ms);Pa=n(ii,"The bare TFHubert Model transformer outputing raw hidden-states without any specific head on top."),ii.forEach(t),Sa=h(Se),wo=r(Se,"P",{});var on=i(wo);Oa=n(on,"This model inherits from "),Bo=r(on,"A",{href:!0});var li=i(Bo);Da=n(li,"TFPreTrainedModel"),li.forEach(t),za=n(on,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),on.forEach(t),Aa=h(Se),To=r(Se,"P",{});var sn=i(To);Ia=n(sn,"This model is also a "),ko=r(sn,"A",{href:!0,rel:!0});var di=i(ko);La=n(di,"tf.keras.Model"),di.forEach(t),Wa=n(sn,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sn.forEach(t),Na=h(Se),T(St.$$.fragment,Se),Ba=h(Se),qe=r(Se,"DIV",{class:!0});var Bt=i(qe);T($o.$$.fragment,Bt),Ra=h(Bt),vt=r(Bt,"P",{});var Zo=i(vt);Va=n(Zo,"The "),Ro=r(Zo,"A",{href:!0});var ci=i(Ro);Ua=n(ci,"TFHubertModel"),ci.forEach(t),Ka=n(Zo," forward method, overrides the "),fs=r(Zo,"CODE",{});var pi=i(fs);Ya=n(pi,"__call__"),pi.forEach(t),Ga=n(Zo," special method."),Zo.forEach(t),Xa=h(Bt),T(Ot.$$.fragment,Bt),Ja=h(Bt),T(Dt.$$.fragment,Bt),Bt.forEach(t),Se.forEach(t),As=h(o),yt=r(o,"H2",{class:!0});var nn=i(yt);zt=r(nn,"A",{id:!0,class:!0,href:!0});var ui=i(zt);gs=r(ui,"SPAN",{});var hi=i(gs);T(Co.$$.fragment,hi),hi.forEach(t),ui.forEach(t),Qa=h(nn),_s=r(nn,"SPAN",{});var mi=i(_s);Za=n(mi,"TFHubertForCTC"),mi.forEach(t),nn.forEach(t),Is=h(o),X=r(o,"DIV",{class:!0});var Oe=i(X);T(Ho.$$.fragment,Oe),er=h(Oe),Eo=r(Oe,"P",{});var an=i(Eo);tr=n(an,"TFHubert Model with a "),bs=r(an,"CODE",{});var fi=i(bs);or=n(fi,"language modeling"),fi.forEach(t),sr=n(an," head on top for Connectionist Temporal Classification (CTC)."),an.forEach(t),nr=h(Oe),jo=r(Oe,"P",{});var rn=i(jo);ar=n(rn,"This model inherits from "),Vo=r(rn,"A",{href:!0});var gi=i(Vo);rr=n(gi,"TFPreTrainedModel"),gi.forEach(t),ir=n(rn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rn.forEach(t),lr=h(Oe),Fo=r(Oe,"P",{});var ln=i(Fo);dr=n(ln,"This model is also a "),xo=r(ln,"A",{href:!0,rel:!0});var _i=i(xo);cr=n(_i,"tf.keras.Model"),_i.forEach(t),pr=n(ln,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ln.forEach(t),ur=h(Oe),T(At.$$.fragment,Oe),hr=h(Oe),Me=r(Oe,"DIV",{class:!0});var Rt=i(Me);T(qo.$$.fragment,Rt),mr=h(Rt),wt=r(Rt,"P",{});var es=i(wt);fr=n(es,"The "),Uo=r(es,"A",{href:!0});var bi=i(Uo);gr=n(bi,"TFHubertForCTC"),bi.forEach(t),_r=n(es," forward method, overrides the "),vs=r(es,"CODE",{});var vi=i(vs);br=n(vi,"__call__"),vi.forEach(t),vr=n(es," special method."),es.forEach(t),yr=h(Rt),T(It.$$.fragment,Rt),wr=h(Rt),T(Lt.$$.fragment,Rt),Rt.forEach(t),Oe.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(Wi)),f(m,"id","hubert"),f(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(m,"href","#hubert"),f(c,"class","relative group"),f(J,"id","overview"),f(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(J,"href","#overview"),f(D,"class","relative group"),f(te,"href","https://arxiv.org/abs/2106.07447"),f(te,"rel","nofollow"),f(S,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),f(ie,"href","https://huggingface.co/patrickvonplaten"),f(ie,"rel","nofollow"),f(Z,"id","transformers.HubertConfig"),f(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Z,"href","#transformers.HubertConfig"),f(A,"class","relative group"),f(Ee,"href","/docs/transformers/main/en/model_doc/hubert#transformers.HubertModel"),f(be,"href","https://huggingface.co/facebook/hubert-base-ls960"),f(be,"rel","nofollow"),f(je,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Fe,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(b,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Tt,"id","transformers.HubertModel"),f(Tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Tt,"href","#transformers.HubertModel"),f(pt,"class","relative group"),f(Qt,"href","https://arxiv.org/abs/2106.07447"),f(Qt,"rel","nofollow"),f(zo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(to,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(to,"rel","nofollow"),f(Ao,"href","/docs/transformers/main/en/model_doc/hubert#transformers.HubertModel"),f(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ct,"id","transformers.HubertForCTC"),f(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ct,"href","#transformers.HubertForCTC"),f(ht,"class","relative group"),f(ao,"href","https://arxiv.org/abs/2106.07447"),f(ao,"rel","nofollow"),f(Io,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(lo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(lo,"rel","nofollow"),f(Lo,"href","/docs/transformers/main/en/model_doc/hubert#transformers.HubertForCTC"),f(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ft,"id","transformers.HubertForSequenceClassification"),f(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ft,"href","#transformers.HubertForSequenceClassification"),f(gt,"class","relative group"),f(mo,"href","https://arxiv.org/abs/2106.07447"),f(mo,"rel","nofollow"),f(Wo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(_o,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(_o,"rel","nofollow"),f(No,"href","/docs/transformers/main/en/model_doc/hubert#transformers.HubertForSequenceClassification"),f(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pt,"id","transformers.TFHubertModel"),f(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Pt,"href","#transformers.TFHubertModel"),f(bt,"class","relative group"),f(Bo,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ko,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ko,"rel","nofollow"),f(Ro,"href","/docs/transformers/main/en/model_doc/hubert#transformers.TFHubertModel"),f(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(zt,"id","transformers.TFHubertForCTC"),f(zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(zt,"href","#transformers.TFHubertForCTC"),f(yt,"class","relative group"),f(Vo,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(xo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(xo,"rel","nofollow"),f(Uo,"href","/docs/transformers/main/en/model_doc/hubert#transformers.TFHubertForCTC"),f(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,d),g(o,v,_),g(o,c,_),e(c,m),e(m,y),k(l,y,null),e(c,p),e(c,x),e(x,De),g(o,ve,_),g(o,D,_),e(D,J),e(J,ee),k(E,ee,null),e(D,ze),e(D,U),e(U,Ae),g(o,ye,_),g(o,L,_),e(L,Ie),e(L,te),e(te,oe),e(L,Le),g(o,we,_),g(o,B,_),e(B,We),g(o,Te,_),g(o,R,_),e(R,ge),e(ge,Ne),g(o,he,_),g(o,M,_),e(M,z),g(o,ke,_),g(o,W,_),e(W,_e),e(_e,Be),e(W,se),e(W,ne),e(ne,Re),e(ne,S),e(S,Ve),e(ne,ae),g(o,$e,_),g(o,Q,_),e(Q,re),e(Q,ie),e(ie,Ue),e(Q,K),g(o,Ce,_),g(o,A,_),e(A,Z),e(Z,le),k(P,le,null),e(A,Ke),e(A,I),e(I,Ye),g(o,He,_),g(o,b,_),k(j,b,null),e(b,ot),e(b,N),e(N,st),e(N,Ee),e(Ee,q),e(N,nt),e(N,be),e(be,at),e(N,rt),e(b,it),e(b,O),e(O,de),e(O,je),e(je,lt),e(O,ce),e(O,Fe),e(Fe,dt),e(O,Ge),e(b,ct),k(V,b,null),g(o,Je,_),g(o,pt,_),e(pt,Tt),e(Tt,ts),k(Gt,ts,null),e(pt,dn),e(pt,os),e(os,cn),g(o,qs,_),g(o,pe,_),k(Xt,pe,null),e(pe,pn),e(pe,Jt),e(Jt,un),e(Jt,Qt),e(Qt,hn),e(Jt,mn),e(pe,fn),e(pe,Zt),e(Zt,gn),e(Zt,zo),e(zo,_n),e(Zt,bn),e(pe,vn),e(pe,eo),e(eo,yn),e(eo,to),e(to,wn),e(eo,Tn),e(pe,kn),e(pe,xe),k(oo,xe,null),e(xe,$n),e(xe,ut),e(ut,Cn),e(ut,Ao),e(Ao,Hn),e(ut,En),e(ut,ss),e(ss,jn),e(ut,Fn),e(xe,xn),k(kt,xe,null),e(xe,qn),k($t,xe,null),g(o,Ms,_),g(o,ht,_),e(ht,Ct),e(Ct,ns),k(so,ns,null),e(ht,Mn),e(ht,as),e(as,Pn),g(o,Ps,_),g(o,ue,_),k(no,ue,null),e(ue,Sn),e(ue,mt),e(mt,On),e(mt,rs),e(rs,Dn),e(mt,zn),e(mt,ao),e(ao,An),e(mt,In),e(ue,Ln),e(ue,ro),e(ro,Wn),e(ro,Io),e(Io,Nn),e(ro,Bn),e(ue,Rn),e(ue,io),e(io,Vn),e(io,lo),e(lo,Un),e(io,Kn),e(ue,Yn),e(ue,me),k(co,me,null),e(me,Gn),e(me,ft),e(ft,Xn),e(ft,Lo),e(Lo,Jn),e(ft,Qn),e(ft,is),e(is,Zn),e(ft,ea),e(me,ta),k(Ht,me,null),e(me,oa),k(Et,me,null),e(me,sa),k(jt,me,null),g(o,Ss,_),g(o,gt,_),e(gt,Ft),e(Ft,ls),k(po,ls,null),e(gt,na),e(gt,ds),e(ds,aa),g(o,Os,_),g(o,Y,_),k(uo,Y,null),e(Y,ra),e(Y,cs),e(cs,ia),e(Y,la),e(Y,ho),e(ho,da),e(ho,mo),e(mo,ca),e(ho,pa),e(Y,ua),e(Y,fo),e(fo,ha),e(fo,Wo),e(Wo,ma),e(fo,fa),e(Y,ga),e(Y,go),e(go,_a),e(go,_o),e(_o,ba),e(go,va),e(Y,ya),e(Y,fe),k(bo,fe,null),e(fe,wa),e(fe,_t),e(_t,Ta),e(_t,No),e(No,ka),e(_t,$a),e(_t,ps),e(ps,Ca),e(_t,Ha),e(fe,Ea),k(xt,fe,null),e(fe,ja),k(qt,fe,null),e(fe,Fa),k(Mt,fe,null),g(o,Ds,_),g(o,bt,_),e(bt,Pt),e(Pt,us),k(vo,us,null),e(bt,xa),e(bt,hs),e(hs,qa),g(o,zs,_),g(o,G,_),k(yo,G,null),e(G,Ma),e(G,ms),e(ms,Pa),e(G,Sa),e(G,wo),e(wo,Oa),e(wo,Bo),e(Bo,Da),e(wo,za),e(G,Aa),e(G,To),e(To,Ia),e(To,ko),e(ko,La),e(To,Wa),e(G,Na),k(St,G,null),e(G,Ba),e(G,qe),k($o,qe,null),e(qe,Ra),e(qe,vt),e(vt,Va),e(vt,Ro),e(Ro,Ua),e(vt,Ka),e(vt,fs),e(fs,Ya),e(vt,Ga),e(qe,Xa),k(Ot,qe,null),e(qe,Ja),k(Dt,qe,null),g(o,As,_),g(o,yt,_),e(yt,zt),e(zt,gs),k(Co,gs,null),e(yt,Qa),e(yt,_s),e(_s,Za),g(o,Is,_),g(o,X,_),k(Ho,X,null),e(X,er),e(X,Eo),e(Eo,tr),e(Eo,bs),e(bs,or),e(Eo,sr),e(X,nr),e(X,jo),e(jo,ar),e(jo,Vo),e(Vo,rr),e(jo,ir),e(X,lr),e(X,Fo),e(Fo,dr),e(Fo,xo),e(xo,cr),e(Fo,pr),e(X,ur),k(At,X,null),e(X,hr),e(X,Me),k(qo,Me,null),e(Me,mr),e(Me,wt),e(wt,fr),e(wt,Uo),e(Uo,gr),e(wt,_r),e(wt,vs),e(vs,br),e(wt,vr),e(Me,yr),k(It,Me,null),e(Me,wr),k(Lt,Me,null),Ls=!0},p(o,[_]){const Mo={};_&2&&(Mo.$$scope={dirty:_,ctx:o}),V.$set(Mo);const ys={};_&2&&(ys.$$scope={dirty:_,ctx:o}),kt.$set(ys);const ws={};_&2&&(ws.$$scope={dirty:_,ctx:o}),$t.$set(ws);const Ts={};_&2&&(Ts.$$scope={dirty:_,ctx:o}),Ht.$set(Ts);const Po={};_&2&&(Po.$$scope={dirty:_,ctx:o}),Et.$set(Po);const ks={};_&2&&(ks.$$scope={dirty:_,ctx:o}),jt.$set(ks);const $s={};_&2&&($s.$$scope={dirty:_,ctx:o}),xt.$set($s);const Cs={};_&2&&(Cs.$$scope={dirty:_,ctx:o}),qt.$set(Cs);const So={};_&2&&(So.$$scope={dirty:_,ctx:o}),Mt.$set(So);const Hs={};_&2&&(Hs.$$scope={dirty:_,ctx:o}),St.$set(Hs);const Es={};_&2&&(Es.$$scope={dirty:_,ctx:o}),Ot.$set(Es);const js={};_&2&&(js.$$scope={dirty:_,ctx:o}),Dt.$set(js);const Fs={};_&2&&(Fs.$$scope={dirty:_,ctx:o}),At.$set(Fs);const xs={};_&2&&(xs.$$scope={dirty:_,ctx:o}),It.$set(xs);const Oo={};_&2&&(Oo.$$scope={dirty:_,ctx:o}),Lt.$set(Oo)},i(o){Ls||($(l.$$.fragment,o),$(E.$$.fragment,o),$(P.$$.fragment,o),$(j.$$.fragment,o),$(V.$$.fragment,o),$(Gt.$$.fragment,o),$(Xt.$$.fragment,o),$(oo.$$.fragment,o),$(kt.$$.fragment,o),$($t.$$.fragment,o),$(so.$$.fragment,o),$(no.$$.fragment,o),$(co.$$.fragment,o),$(Ht.$$.fragment,o),$(Et.$$.fragment,o),$(jt.$$.fragment,o),$(po.$$.fragment,o),$(uo.$$.fragment,o),$(bo.$$.fragment,o),$(xt.$$.fragment,o),$(qt.$$.fragment,o),$(Mt.$$.fragment,o),$(vo.$$.fragment,o),$(yo.$$.fragment,o),$(St.$$.fragment,o),$($o.$$.fragment,o),$(Ot.$$.fragment,o),$(Dt.$$.fragment,o),$(Co.$$.fragment,o),$(Ho.$$.fragment,o),$(At.$$.fragment,o),$(qo.$$.fragment,o),$(It.$$.fragment,o),$(Lt.$$.fragment,o),Ls=!0)},o(o){C(l.$$.fragment,o),C(E.$$.fragment,o),C(P.$$.fragment,o),C(j.$$.fragment,o),C(V.$$.fragment,o),C(Gt.$$.fragment,o),C(Xt.$$.fragment,o),C(oo.$$.fragment,o),C(kt.$$.fragment,o),C($t.$$.fragment,o),C(so.$$.fragment,o),C(no.$$.fragment,o),C(co.$$.fragment,o),C(Ht.$$.fragment,o),C(Et.$$.fragment,o),C(jt.$$.fragment,o),C(po.$$.fragment,o),C(uo.$$.fragment,o),C(bo.$$.fragment,o),C(xt.$$.fragment,o),C(qt.$$.fragment,o),C(Mt.$$.fragment,o),C(vo.$$.fragment,o),C(yo.$$.fragment,o),C(St.$$.fragment,o),C($o.$$.fragment,o),C(Ot.$$.fragment,o),C(Dt.$$.fragment,o),C(Co.$$.fragment,o),C(Ho.$$.fragment,o),C(At.$$.fragment,o),C(qo.$$.fragment,o),C(It.$$.fragment,o),C(Lt.$$.fragment,o),Ls=!1},d(o){t(d),o&&t(v),o&&t(c),H(l),o&&t(ve),o&&t(D),H(E),o&&t(ye),o&&t(L),o&&t(we),o&&t(B),o&&t(Te),o&&t(R),o&&t(he),o&&t(M),o&&t(ke),o&&t(W),o&&t($e),o&&t(Q),o&&t(Ce),o&&t(A),H(P),o&&t(He),o&&t(b),H(j),H(V),o&&t(Je),o&&t(pt),H(Gt),o&&t(qs),o&&t(pe),H(Xt),H(oo),H(kt),H($t),o&&t(Ms),o&&t(ht),H(so),o&&t(Ps),o&&t(ue),H(no),H(co),H(Ht),H(Et),H(jt),o&&t(Ss),o&&t(gt),H(po),o&&t(Os),o&&t(Y),H(uo),H(bo),H(xt),H(qt),H(Mt),o&&t(Ds),o&&t(bt),H(vo),o&&t(zs),o&&t(G),H(yo),H(St),H($o),H(Ot),H(Dt),o&&t(As),o&&t(yt),H(Co),o&&t(Is),o&&t(X),H(Ho),H(At),H(qo),H(It),H(Lt)}}}const Wi={local:"hubert",sections:[{local:"overview",title:"Overview"},{local:"transformers.HubertConfig",title:"HubertConfig"},{local:"transformers.HubertModel",title:"HubertModel"},{local:"transformers.HubertForCTC",title:"HubertForCTC"},{local:"transformers.HubertForSequenceClassification",title:"HubertForSequenceClassification"},{local:"transformers.TFHubertModel",title:"TFHubertModel"},{local:"transformers.TFHubertForCTC",title:"TFHubertForCTC"}],title:"Hubert"};function Ni(F){return $i(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gi extends yi{constructor(d){super();wi(this,d,Ni,Li,Ti,{})}}export{Gi as default,Wi as metadata};
