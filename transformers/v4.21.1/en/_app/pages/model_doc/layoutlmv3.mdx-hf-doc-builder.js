import{S as xm,i as wm,s as Tm,e as s,k as c,w as y,t as n,M as Mm,c as r,d as t,m as u,a as i,x as b,h as a,b as d,N as $m,G as e,g,y as L,q as k,o as x,B as w,v as zm,L as sn}from"../../chunks/vendor-hf-doc-builder.js";import{T as bs}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as rn}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ee}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as an}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function qm(q){let m,T,_,f,v;return f=new rn({props:{code:`from transformers import LayoutLMv3Model, LayoutLMv3Config

# Initializing a LayoutLMv3 microsoft/layoutlmv3-base style configuration
configuration = LayoutLMv3Config()

# Initializing a model from the microsoft/layoutlmv3-base style configuration
model = LayoutLMv3Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv3Model, LayoutLMv3Config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LayoutLMv3 microsoft/layoutlmv3-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LayoutLMv3Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the microsoft/layoutlmv3-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv3Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){m=s("p"),T=n("Example:"),_=c(),y(f.$$.fragment)},l(l){m=r(l,"P",{});var h=i(m);T=a(h,"Example:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,m,h),e(m,T),g(l,_,h),L(f,l,h),v=!0},p:sn,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){x(f.$$.fragment,l),v=!1},d(l){l&&t(m),l&&t(_),w(f,l)}}}function Em(q){let m,T,_,f,v;return f=new rn({props:{code:`from transformers import LayoutLMv3FeatureExtractor
from PIL import Image

image = Image.open("name_of_your_document - can be a png file, pdf, etc.").convert("RGB")

# option 1: with apply_ocr=True (default)
feature_extractor = LayoutLMv3FeatureExtractor()
encoding = feature_extractor(image, return_tensors="pt")
print(encoding.keys())
# dict_keys(['pixel_values', 'words', 'boxes'])

# option 2: with apply_ocr=False
feature_extractor = LayoutLMv3FeatureExtractor(apply_ocr=False)
encoding = feature_extractor(image, return_tensors="pt")
print(encoding.keys())
# dict_keys(['pixel_values'])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv3FeatureExtractor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># option 1: with apply_ocr=True (default)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = LayoutLMv3FeatureExtractor()
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;, &#x27;words&#x27;, &#x27;boxes&#x27;])</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># option 2: with apply_ocr=False</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = LayoutLMv3FeatureExtractor(apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;])</span>`}}),{c(){m=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){m=r(l,"P",{});var h=i(m);T=a(h,"Examples:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,m,h),e(m,T),g(l,_,h),L(f,l,h),v=!0},p:sn,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){x(f.$$.fragment,l),v=!1},d(l){l&&t(m),l&&t(_),w(f,l)}}}function Fm(q){let m,T,_,f,v;return{c(){m=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){m=r(l,"P",{});var h=i(m);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var C=i(_);f=a(C,"Module"),C.forEach(t),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,m,h),e(m,T),e(m,_),e(_,f),e(m,v)},d(l){l&&t(m)}}}function Pm(q){let m,T,_,f,v;return f=new rn({props:{code:`from transformers import AutoProcessor, AutoModel
from datasets import load_dataset

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv3-base", apply_ocr=False)
model = AutoModel.from_pretrained("microsoft/layoutlmv3-base")

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
example = dataset[0]
image = example["image"]
words = example["tokens"]
boxes = example["bboxes"]

encoding = processor(image, words, boxes=boxes, return_tensors="pt")

outputs = model(**encoding)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModel.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){m=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){m=r(l,"P",{});var h=i(m);T=a(h,"Examples:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,m,h),e(m,T),g(l,_,h),L(f,l,h),v=!0},p:sn,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){x(f.$$.fragment,l),v=!1},d(l){l&&t(m),l&&t(_),w(f,l)}}}function Cm(q){let m,T,_,f,v;return{c(){m=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){m=r(l,"P",{});var h=i(m);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var C=i(_);f=a(C,"Module"),C.forEach(t),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,m,h),e(m,T),e(m,_),e(_,f),e(m,v)},d(l){l&&t(m)}}}function Am(q){let m,T,_,f,v;return f=new rn({props:{code:`from transformers import AutoProcessor, AutoModelForSequenceClassification
from datasets import load_dataset
import torch

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv3-base", apply_ocr=False)
model = AutoModelForSequenceClassification.from_pretrained("microsoft/layoutlmv3-base")

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
example = dataset[0]
image = example["image"]
words = example["tokens"]
boxes = example["bboxes"]

encoding = processor(image, words, boxes=boxes, return_tensors="pt")
sequence_label = torch.tensor([1])

outputs = model(**encoding, labels=sequence_label)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_label = torch.tensor([<span class="hljs-number">1</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=sequence_label)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){m=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){m=r(l,"P",{});var h=i(m);T=a(h,"Examples:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,m,h),e(m,T),g(l,_,h),L(f,l,h),v=!0},p:sn,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){x(f.$$.fragment,l),v=!1},d(l){l&&t(m),l&&t(_),w(f,l)}}}function jm(q){let m,T,_,f,v;return{c(){m=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){m=r(l,"P",{});var h=i(m);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var C=i(_);f=a(C,"Module"),C.forEach(t),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,m,h),e(m,T),e(m,_),e(_,f),e(m,v)},d(l){l&&t(m)}}}function Im(q){let m,T,_,f,v;return f=new rn({props:{code:`from transformers import AutoProcessor, AutoModelForTokenClassification
from datasets import load_dataset

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv3-base", apply_ocr=False)
model = AutoModelForTokenClassification.from_pretrained("microsoft/layoutlmv3-base", num_labels=7)

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
example = dataset[0]
image = example["image"]
words = example["tokens"]
boxes = example["bboxes"]
word_labels = example["ner_tags"]

encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors="pt")

outputs = model(**encoding)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModelForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, num_labels=<span class="hljs-number">7</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>word_labels = example[<span class="hljs-string">&quot;ner_tags&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){m=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){m=r(l,"P",{});var h=i(m);T=a(h,"Examples:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,m,h),e(m,T),g(l,_,h),L(f,l,h),v=!0},p:sn,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){x(f.$$.fragment,l),v=!1},d(l){l&&t(m),l&&t(_),w(f,l)}}}function Nm(q){let m,T,_,f,v;return{c(){m=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){m=r(l,"P",{});var h=i(m);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var C=i(_);f=a(C,"Module"),C.forEach(t),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,m,h),e(m,T),e(m,_),e(_,f),e(m,v)},d(l){l&&t(m)}}}function Sm(q){let m,T,_,f,v;return f=new rn({props:{code:`from transformers import AutoProcessor, AutoModelForQuestionAnswering
from datasets import load_dataset
import torch

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv3-base", apply_ocr=False)
model = AutoModelForQuestionAnswering.from_pretrained("microsoft/layoutlmv3-base")

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
example = dataset[0]
image = example["image"]
question = "what's his name?"
words = example["tokens"]
boxes = example["bboxes"]

encoding = processor(image, question, words, boxes=boxes, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**encoding, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;what&#x27;s his name?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, question, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){m=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(l){m=r(l,"P",{});var h=i(m);T=a(h,"Examples:"),h.forEach(t),_=u(l),b(f.$$.fragment,l)},m(l,h){g(l,m,h),e(m,T),g(l,_,h),L(f,l,h),v=!0},p:sn,i(l){v||(k(f.$$.fragment,l),v=!0)},o(l){x(f.$$.fragment,l),v=!1},d(l){l&&t(m),l&&t(_),w(f,l)}}}function Dm(q){let m,T,_,f,v,l,h,C,Ls,xa,le,Te,ln,it,ks,dn,xs,wa,Q,ws,lt,Ts,Ms,po,$s,zs,ho,qs,Es,Ta,fo,Fs,Ma,go,cn,Ps,$a,_o,Cs,za,te,Me,As,vo,js,Is,dt,un,Ns,Ss,N,Ds,yo,Os,Rs,bo,Ws,Bs,Lo,Us,Qs,ko,Vs,Hs,Gs,de,Xs,xo,Ys,Js,wo,Ks,Zs,er,ct,tr,ut,or,nr,qa,$e,_c,Ea,ze,ar,To,sr,rr,Fa,oe,ir,mt,lr,dr,pt,cr,ur,Pa,ce,qe,mn,ht,mr,pn,pr,Ca,S,ft,hr,ue,fr,Mo,gr,_r,gt,vr,yr,br,me,Lr,$o,kr,xr,zo,wr,Tr,Mr,Ee,Aa,pe,Fe,hn,_t,$r,fn,zr,ja,D,vt,qr,gn,Er,Fr,yt,Pr,_n,Cr,Ar,jr,ne,bt,Ir,vn,Nr,Sr,Pe,Ia,he,Ce,yn,Lt,Dr,bn,Or,Na,A,kt,Rr,F,Wr,Ln,Br,Ur,qo,Qr,Vr,kn,Hr,Gr,xn,Xr,Yr,wn,Jr,Kr,Tn,Zr,ei,Mn,ti,oi,ni,xt,ai,Eo,si,ri,ii,Fo,Po,li,di,ci,Ae,wt,ui,$n,mi,pi,Co,Tt,Sa,fe,je,zn,Mt,hi,qn,fi,Da,O,$t,gi,zt,_i,En,vi,yi,bi,qt,Li,Ao,ki,xi,wi,Ie,Et,Ti,Fn,Mi,Oa,ge,Ne,Pn,Ft,$i,Cn,zi,Ra,I,Pt,qi,An,Ei,Fi,jo,Io,Pi,Ci,Ai,z,ji,No,Ii,Ni,So,Si,Di,Do,Oi,Ri,jn,Wi,Bi,In,Ui,Qi,Nn,Vi,Hi,Sn,Gi,Xi,Dn,Yi,Ji,On,Ki,Zi,el,ae,Ct,tl,M,ol,Rn,nl,al,At,Wn,sl,rl,il,Oo,ll,dl,Bn,cl,ul,Un,ml,pl,jt,Qn,hl,fl,gl,Vn,_l,vl,Ro,yl,bl,Hn,Ll,kl,Gn,xl,wl,Xn,Tl,Ml,Yn,$l,zl,Jn,ql,El,It,Kn,Fl,Pl,Cl,Zn,Al,jl,Il,ea,Nl,Wa,_e,Se,ta,Nt,Sl,oa,Dl,Ba,J,St,Ol,Dt,Rl,Ot,Wl,Bl,Ul,V,Rt,Ql,ve,Vl,Wo,Hl,Gl,na,Xl,Yl,Jl,De,Kl,Oe,Ua,ye,Re,aa,Wt,Zl,sa,ed,Qa,R,Bt,td,Ut,od,Qt,nd,ad,sd,Vt,rd,Ht,id,ld,dd,H,Gt,cd,be,ud,Bo,md,pd,ra,hd,fd,gd,We,_d,Be,Va,Le,Ue,ia,Xt,vd,la,yd,Ha,W,Yt,bd,B,Ld,Jt,kd,xd,Kt,wd,Td,Zt,Md,$d,eo,zd,qd,Ed,to,Fd,oo,Pd,Cd,Ad,G,no,jd,ke,Id,Uo,Nd,Sd,da,Dd,Od,Rd,Qe,Wd,Ve,Ga,xe,He,ca,ao,Bd,ua,Ud,Xa,U,so,Qd,K,Vd,ro,Hd,Gd,ma,Xd,Yd,pa,Jd,Kd,Zd,io,ec,lo,tc,oc,nc,X,co,ac,we,sc,Qo,rc,ic,ha,lc,dc,cc,Ge,uc,Xe,Ya;return l=new ee({}),it=new ee({}),ht=new ee({}),ft=new P({props:{name:"class transformers.LayoutLMv3Config",anchor:"transformers.LayoutLMv3Config",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"rel_pos_bins",val:" = 32"},{name:"max_rel_pos",val:" = 128"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"max_rel_2d_pos",val:" = 256"},{name:"has_spatial_attention_bias",val:" = True"},{name:"text_embed",val:" = True"},{name:"visual_embed",val:" = True"},{name:"input_size",val:" = 224"},{name:"num_channels",val:" = 3"},{name:"patch_size",val:" = 16"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the LayoutLMv3 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model">LayoutLMv3Model</a>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMv3Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.LayoutLMv3Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.LayoutLMv3Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.LayoutLMv3Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.LayoutLMv3Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.LayoutLMv3Config.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.LayoutLMv3Config.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.LayoutLMv3Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.LayoutLMv3Config.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model">LayoutLMv3Model</a>.`,name:"type_vocab_size"},{anchor:"transformers.LayoutLMv3Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LayoutLMv3Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LayoutLMv3Config.max_2d_position_embeddings",description:`<strong>max_2d_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the 2D position embedding might ever be used with. Typically set this to something
large just in case (e.g., 1024).`,name:"max_2d_position_embeddings"},{anchor:"transformers.LayoutLMv3Config.coordinate_size",description:`<strong>coordinate_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>128</code>) &#x2014;
Dimension of the coordinate embeddings.`,name:"coordinate_size"},{anchor:"transformers.LayoutLMv3Config.shape_size",description:`<strong>shape_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>128</code>) &#x2014;
Dimension of the width and height embeddings.`,name:"shape_size"},{anchor:"transformers.LayoutLMv3Config.has_relative_attention_bias",description:`<strong>has_relative_attention_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a relative attention bias in the self-attention mechanism.`,name:"has_relative_attention_bias"},{anchor:"transformers.LayoutLMv3Config.rel_pos_bins",description:`<strong>rel_pos_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of relative position bins to be used in the self-attention mechanism.`,name:"rel_pos_bins"},{anchor:"transformers.LayoutLMv3Config.max_rel_pos",description:`<strong>max_rel_pos</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum number of relative positions to be used in the self-attention mechanism.`,name:"max_rel_pos"},{anchor:"transformers.LayoutLMv3Config.max_rel_2d_pos",description:`<strong>max_rel_2d_pos</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The maximum number of relative 2D positions in the self-attention mechanism.`,name:"max_rel_2d_pos"},{anchor:"transformers.LayoutLMv3Config.rel_2d_pos_bins",description:`<strong>rel_2d_pos_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
The number of 2D relative position bins in the self-attention mechanism.`,name:"rel_2d_pos_bins"},{anchor:"transformers.LayoutLMv3Config.has_spatial_attention_bias",description:`<strong>has_spatial_attention_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a spatial attention bias in the self-attention mechanism.`,name:"has_spatial_attention_bias"},{anchor:"transformers.LayoutLMv3Config.visual_embed",description:`<strong>visual_embed</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to add patch embeddings.`,name:"visual_embed"},{anchor:"transformers.LayoutLMv3Config.input_size",description:`<strong>input_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>224</code>) &#x2014;
The size (resolution) of the images.`,name:"input_size"},{anchor:"transformers.LayoutLMv3Config.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to <code>3</code>) &#x2014;
The number of channels of the images.`,name:"num_channels"},{anchor:"transformers.LayoutLMv3Config.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>16</code>) &#x2014;
The size (resolution) of the patches.`,name:"patch_size"},{anchor:"transformers.LayoutLMv3Config.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/layoutlmv3/configuration_layoutlmv3.py#L40"}}),Ee=new an({props:{anchor:"transformers.LayoutLMv3Config.example",$$slots:{default:[qm]},$$scope:{ctx:q}}}),_t=new ee({}),vt=new P({props:{name:"class transformers.LayoutLMv3FeatureExtractor",anchor:"transformers.LayoutLMv3FeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"apply_ocr",val:" = True"},{name:"ocr_lang",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3FeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.LayoutLMv3FeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.LayoutLMv3FeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.LayoutLMv3FeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.LayoutLMv3FeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.LayoutLMv3FeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"},{anchor:"transformers.LayoutLMv3FeatureExtractor.apply_ocr",description:`<strong>apply_ocr</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply the Tesseract OCR engine to get words + normalized bounding boxes.`,name:"apply_ocr"},{anchor:"transformers.LayoutLMv3FeatureExtractor.ocr_lang",description:`<strong>ocr_lang</strong> (<code>Optional[str]</code>, <em>optional</em>) &#x2014;
The language, specified by its ISO code, to be used by the Tesseract OCR engine. By default, English is
used.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>LayoutLMv3FeatureExtractor uses Google&#x2019;s Tesseract OCR engine under the hood.</p>

					</div>`,name:"ocr_lang"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/layoutlmv3/feature_extraction_layoutlmv3.py#L82"}}),bt=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3FeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/layoutlmv3/feature_extraction_layoutlmv3.py#L143",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>words</strong> \u2014 Optional words as identified by Tesseract OCR (only when <a
  href="/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"
>LayoutLMv3FeatureExtractor</a> was
initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
<li><strong>boxes</strong> \u2014 Optional bounding boxes as identified by Tesseract OCR, normalized based on the image size
(only when <a
  href="/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"
>LayoutLMv3FeatureExtractor</a> was initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.1/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Pe=new an({props:{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.example",$$slots:{default:[Em]},$$scope:{ctx:q}}}),Lt=new ee({}),kt=new P({props:{name:"class transformers.LayoutLMv3Tokenizer",anchor:"transformers.LayoutLMv3Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.LayoutLMv3Tokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.LayoutLMv3Tokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.LayoutLMv3Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.LayoutLMv3Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.LayoutLMv3Tokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LayoutLMv3Tokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LayoutLMv3Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LayoutLMv3Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LayoutLMv3Tokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LayoutLMv3Tokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.LayoutLMv3Tokenizer.cls_token_box",description:`<strong>cls_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [CLS] token.`,name:"cls_token_box"},{anchor:"transformers.LayoutLMv3Tokenizer.sep_token_box",description:`<strong>sep_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [SEP] token.`,name:"sep_token_box"},{anchor:"transformers.LayoutLMv3Tokenizer.pad_token_box",description:`<strong>pad_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [PAD] token.`,name:"pad_token_box"},{anchor:"transformers.LayoutLMv3Tokenizer.pad_token_label",description:`<strong>pad_token_label</strong> (<code>int</code>, <em>optional</em>, defaults to -100) &#x2014;
The label to use for padding tokens. Defaults to -100, which is the <code>ignore_index</code> of PyTorch&#x2019;s
CrossEntropyLoss.`,name:"pad_token_label"},{anchor:"transformers.LayoutLMv3Tokenizer.only_label_first_subword",description:`<strong>only_label_first_subword</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L200"}}),wt=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters. If left unset or set to
<code>None</code>, this will use the predefined model maximum length if a maximum length is required by one of the
truncation/padding parameters. If the model has no specific maximum input length (like XLNet)
truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L547"}}),Tt=new P({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv3Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L428"}}),Mt=new ee({}),$t=new P({props:{name:"class transformers.LayoutLMv3TokenizerFast",anchor:"transformers.LayoutLMv3TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"trim_offsets",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.LayoutLMv3TokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.LayoutLMv3TokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.LayoutLMv3TokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.LayoutLMv3TokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"},{anchor:"transformers.LayoutLMv3TokenizerFast.cls_token_box",description:`<strong>cls_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [CLS] token.`,name:"cls_token_box"},{anchor:"transformers.LayoutLMv3TokenizerFast.sep_token_box",description:`<strong>sep_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [SEP] token.`,name:"sep_token_box"},{anchor:"transformers.LayoutLMv3TokenizerFast.pad_token_box",description:`<strong>pad_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [PAD] token.`,name:"pad_token_box"},{anchor:"transformers.LayoutLMv3TokenizerFast.pad_token_label",description:`<strong>pad_token_label</strong> (<code>int</code>, <em>optional</em>, defaults to -100) &#x2014;
The label to use for padding tokens. Defaults to -100, which is the <code>ignore_index</code> of PyTorch&#x2019;s
CrossEntropyLoss.`,name:"pad_token_label"},{anchor:"transformers.LayoutLMv3TokenizerFast.only_label_first_subword",description:`<strong>only_label_first_subword</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L65"}}),Et=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters. If left unset or set to
<code>None</code>, this will use the predefined model maximum length if a maximum length is required by one of the
truncation/padding parameters. If the model has no specific maximum input length (like XLNet)
truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L224"}}),Ft=new ee({}),Pt=new P({props:{name:"class transformers.LayoutLMv3Processor",anchor:"transformers.LayoutLMv3Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv3FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor">LayoutLMv3FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv3Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv3Tokenizer</code> or <code>LayoutLMv3TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a> or <a href="/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast">LayoutLMv3TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L25"}}),Ct=new P({props:{name:"__call__",anchor:"transformers.LayoutLMv3Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L47"}}),Nt=new ee({}),St=new P({props:{name:"class transformers.LayoutLMv3Model",anchor:"transformers.LayoutLMv3Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L675"}}),Rt=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"pixel_values",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv3Model.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>((batch_size, sequence_length), 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv3Model.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"pixel_values"},{anchor:"transformers.LayoutLMv3Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv3Model.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv3Model.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv3Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv3Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv3Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv3Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv3Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L766",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),De=new bs({props:{$$slots:{default:[Fm]},$$scope:{ctx:q}}}),Oe=new an({props:{anchor:"transformers.LayoutLMv3Model.forward.example",$$slots:{default:[Pm]},$$scope:{ctx:q}}}),Wt=new ee({}),Bt=new P({props:{name:"class transformers.LayoutLMv3ForSequenceClassification",anchor:"transformers.LayoutLMv3ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1205"}}),Gt=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3ForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"bbox",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"pixel_values"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1217",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
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
`}}),We=new bs({props:{$$slots:{default:[Cm]},$$scope:{ctx:q}}}),Be=new an({props:{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.example",$$slots:{default:[Am]},$$scope:{ctx:q}}}),Xt=new ee({}),Yt=new P({props:{name:"class transformers.LayoutLMv3ForTokenClassification",anchor:"transformers.LayoutLMv3ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L961"}}),no=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3ForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"pixel_values"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L978",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
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
`}}),Qe=new bs({props:{$$slots:{default:[jm]},$$scope:{ctx:q}}}),Ve=new an({props:{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.example",$$slots:{default:[Im]},$$scope:{ctx:q}}}),ao=new ee({}),so=new P({props:{name:"class transformers.LayoutLMv3ForQuestionAnswering",anchor:"transformers.LayoutLMv3ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1074"}}),co=new P({props:{name:"forward",anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"bbox",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"pixel_values"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1087",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ge=new bs({props:{$$slots:{default:[Nm]},$$scope:{ctx:q}}}),Xe=new an({props:{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.example",$$slots:{default:[Sm]},$$scope:{ctx:q}}}),{c(){m=s("meta"),T=c(),_=s("h1"),f=s("a"),v=s("span"),y(l.$$.fragment),h=c(),C=s("span"),Ls=n("LayoutLMv3"),xa=c(),le=s("h2"),Te=s("a"),ln=s("span"),y(it.$$.fragment),ks=c(),dn=s("span"),xs=n("Overview"),wa=c(),Q=s("p"),ws=n("The LayoutLMv3 model was proposed in "),lt=s("a"),Ts=n("LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),Ms=n(` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies `),po=s("a"),$s=n("LayoutLMv2"),zs=n(" by using patch embeddings (as in "),ho=s("a"),qs=n("ViT"),Es=n(`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),Ta=c(),fo=s("p"),Fs=n("The abstract from the paper is the following:"),Ma=c(),go=s("p"),cn=s("em"),Ps=n("Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),$a=c(),_o=s("p"),Cs=n("Tips:"),za=c(),te=s("ul"),Me=s("li"),As=n("In terms of data processing, LayoutLMv3 is identical to its predecessor "),vo=s("a"),js=n("LayoutLMv2"),Is=n(", except that:"),dt=s("ul"),un=s("li"),Ns=n("images need to be resized and normalized with channels in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),Ss=c(),N=s("li"),Ds=n(`text is tokenized using byte-pair encoding (BPE), as opposed to WordPiece.
Due to these differences in data preprocessing, one can use `),yo=s("a"),Os=n("LayoutLMv3Processor"),Rs=n(" which internally combines a "),bo=s("a"),Ws=n("LayoutLMv3FeatureExtractor"),Bs=n(" (for the image modality) and a "),Lo=s("a"),Us=n("LayoutLMv3Tokenizer"),Qs=n("/"),ko=s("a"),Vs=n("LayoutLMv3TokenizerFast"),Hs=n(" (for the text modality) to prepare all data for the model."),Gs=c(),de=s("li"),Xs=n("Regarding usage of "),xo=s("a"),Ys=n("LayoutLMv3Processor"),Js=n(", we refer to the "),wo=s("a"),Ks=n("usage guide"),Zs=n(" of its predecessor."),er=c(),ct=s("li"),tr=n("Demo notebooks for LayoutLMv3 can be found "),ut=s("a"),or=n("here"),nr=n("."),qa=c(),$e=s("img"),Ea=c(),ze=s("small"),ar=n("LayoutLMv3 architecture. Taken from the "),To=s("a"),sr=n("original paper"),rr=n("."),Fa=c(),oe=s("p"),ir=n("This model was contributed by "),mt=s("a"),lr=n("nielsr"),dr=n(". The original code can be found "),pt=s("a"),cr=n("here"),ur=n("."),Pa=c(),ce=s("h2"),qe=s("a"),mn=s("span"),y(ht.$$.fragment),mr=c(),pn=s("span"),pr=n("LayoutLMv3Config"),Ca=c(),S=s("div"),y(ft.$$.fragment),hr=c(),ue=s("p"),fr=n("This is the configuration class to store the configuration of a "),Mo=s("a"),gr=n("LayoutLMv3Model"),_r=n(`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),gt=s("a"),vr=n("microsoft/layoutlmv3-base"),yr=n(" architecture."),br=c(),me=s("p"),Lr=n("Configuration objects inherit from "),$o=s("a"),kr=n("PretrainedConfig"),xr=n(` and can be used to control the model outputs. Read the
documentation from `),zo=s("a"),wr=n("PretrainedConfig"),Tr=n(" for more information."),Mr=c(),y(Ee.$$.fragment),Aa=c(),pe=s("h2"),Fe=s("a"),hn=s("span"),y(_t.$$.fragment),$r=c(),fn=s("span"),zr=n("LayoutLMv3FeatureExtractor"),ja=c(),D=s("div"),y(vt.$$.fragment),qr=c(),gn=s("p"),Er=n(`Constructs a LayoutLMv3 feature extractor. This can be used to resize + normalize document images, as well as to
apply OCR on them in order to get a list of words and normalized bounding boxes.`),Fr=c(),yt=s("p"),Pr=n("This feature extractor inherits from "),_n=s("code"),Cr=n("PreTrainedFeatureExtractor()"),Ar=n(` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),jr=c(),ne=s("div"),y(bt.$$.fragment),Ir=c(),vn=s("p"),Nr=n("Main method to prepare for the model one or several image(s)."),Sr=c(),y(Pe.$$.fragment),Ia=c(),he=s("h2"),Ce=s("a"),yn=s("span"),y(Lt.$$.fragment),Dr=c(),bn=s("span"),Or=n("LayoutLMv3Tokenizer"),Na=c(),A=s("div"),y(kt.$$.fragment),Rr=c(),F=s("p"),Wr=n("Construct a LayoutLMv3 tokenizer. Based on "),Ln=s("code"),Br=n("RoBERTatokenizer"),Ur=n(` (Byte Pair Encoding or BPE).
`),qo=s("a"),Qr=n("LayoutLMv3Tokenizer"),Vr=n(` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),kn=s("code"),Hr=n("input_ids"),Gr=n(", "),xn=s("code"),Xr=n("attention_mask"),Yr=n(", "),wn=s("code"),Jr=n("token_type_ids"),Kr=n(", "),Tn=s("code"),Zr=n("bbox"),ei=n(", and optional "),Mn=s("code"),ti=n("labels"),oi=n(` (for token
classification).`),ni=c(),xt=s("p"),ai=n("This tokenizer inherits from "),Eo=s("a"),si=n("PreTrainedTokenizer"),ri=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ii=c(),Fo=s("p"),Po=s("a"),li=n("LayoutLMv3Tokenizer"),di=n(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),ci=c(),Ae=s("div"),y(wt.$$.fragment),ui=c(),$n=s("p"),mi=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),pi=c(),Co=s("div"),y(Tt.$$.fragment),Sa=c(),fe=s("h2"),je=s("a"),zn=s("span"),y(Mt.$$.fragment),hi=c(),qn=s("span"),fi=n("LayoutLMv3TokenizerFast"),Da=c(),O=s("div"),y($t.$$.fragment),gi=c(),zt=s("p"),_i=n("Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),En=s("em"),vi=n("tokenizers"),yi=n(" library). Based on BPE."),bi=c(),qt=s("p"),Li=n("This tokenizer inherits from "),Ao=s("a"),ki=n("PreTrainedTokenizerFast"),xi=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),wi=c(),Ie=s("div"),y(Et.$$.fragment),Ti=c(),Fn=s("p"),Mi=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Oa=c(),ge=s("h2"),Ne=s("a"),Pn=s("span"),y(Ft.$$.fragment),$i=c(),Cn=s("span"),zi=n("LayoutLMv3Processor"),Ra=c(),I=s("div"),y(Pt.$$.fragment),qi=c(),An=s("p"),Ei=n(`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),Fi=c(),jo=s("p"),Io=s("a"),Pi=n("LayoutLMv3Processor"),Ci=n(" offers all the functionalities you need to prepare data for the model."),Ai=c(),z=s("p"),ji=n("It first uses "),No=s("a"),Ii=n("LayoutLMv3FeatureExtractor"),Ni=n(` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),So=s("a"),Si=n("LayoutLMv3Tokenizer"),Di=n(` or
`),Do=s("a"),Oi=n("LayoutLMv3TokenizerFast"),Ri=n(", which turns the words and bounding boxes into token-level "),jn=s("code"),Wi=n("input_ids"),Bi=n(`,
`),In=s("code"),Ui=n("attention_mask"),Qi=n(", "),Nn=s("code"),Vi=n("token_type_ids"),Hi=n(", "),Sn=s("code"),Gi=n("bbox"),Xi=n(". Optionally, one can provide integer "),Dn=s("code"),Yi=n("word_labels"),Ji=n(`, which are turned
into token-level `),On=s("code"),Ki=n("labels"),Zi=n(" for token classification tasks (such as FUNSD, CORD)."),el=c(),ae=s("div"),y(Ct.$$.fragment),tl=c(),M=s("p"),ol=n("This method first forwards the "),Rn=s("code"),nl=n("images"),al=n(" argument to "),At=s("a"),Wn=s("strong"),sl=n("call"),rl=n("()"),il=n(`. In case
`),Oo=s("a"),ll=n("LayoutLMv3FeatureExtractor"),dl=n(" was initialized with "),Bn=s("code"),cl=n("apply_ocr"),ul=n(" set to "),Un=s("code"),ml=n("True"),pl=n(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),jt=s("a"),Qn=s("strong"),hl=n("call"),fl=n("()"),gl=n(` and returns the output,
together with resized and normalized `),Vn=s("code"),_l=n("pixel_values"),vl=n(". In case "),Ro=s("a"),yl=n("LayoutLMv3FeatureExtractor"),bl=n(` was initialized
with `),Hn=s("code"),Ll=n("apply_ocr"),kl=n(" set to "),Gn=s("code"),xl=n("False"),wl=n(", it passes the words ("),Xn=s("code"),Tl=n("text"),Ml=n("/`"),Yn=s("code"),$l=n("text_pair"),zl=n(") and "),Jn=s("code"),ql=n("boxes"),El=n(` specified by the user
along with the additional arguments to `),It=s("a"),Kn=s("strong"),Fl=n("call"),Pl=n("()"),Cl=n(` and returns the output, together with
resized and normalized `),Zn=s("code"),Al=n("pixel_values"),jl=n("."),Il=c(),ea=s("p"),Nl=n("Please refer to the docstring of the above two methods for more information."),Wa=c(),_e=s("h2"),Se=s("a"),ta=s("span"),y(Nt.$$.fragment),Sl=c(),oa=s("span"),Dl=n("LayoutLMv3Model"),Ba=c(),J=s("div"),y(St.$$.fragment),Ol=c(),Dt=s("p"),Rl=n(`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ot=s("a"),Wl=n("torch.nn.Module"),Bl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ul=c(),V=s("div"),y(Rt.$$.fragment),Ql=c(),ve=s("p"),Vl=n("The "),Wo=s("a"),Hl=n("LayoutLMv3Model"),Gl=n(" forward method, overrides the "),na=s("code"),Xl=n("__call__"),Yl=n(" special method."),Jl=c(),y(De.$$.fragment),Kl=c(),y(Oe.$$.fragment),Ua=c(),ye=s("h2"),Re=s("a"),aa=s("span"),y(Wt.$$.fragment),Zl=c(),sa=s("span"),ed=n("LayoutLMv3ForSequenceClassification"),Qa=c(),R=s("div"),y(Bt.$$.fragment),td=c(),Ut=s("p"),od=n(`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Qt=s("a"),nd=n("RVL-CDIP"),ad=n(" dataset."),sd=c(),Vt=s("p"),rd=n("This model is a PyTorch "),Ht=s("a"),id=n("torch.nn.Module"),ld=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dd=c(),H=s("div"),y(Gt.$$.fragment),cd=c(),be=s("p"),ud=n("The "),Bo=s("a"),md=n("LayoutLMv3ForSequenceClassification"),pd=n(" forward method, overrides the "),ra=s("code"),hd=n("__call__"),fd=n(" special method."),gd=c(),y(We.$$.fragment),_d=c(),y(Be.$$.fragment),Va=c(),Le=s("h2"),Ue=s("a"),ia=s("span"),y(Xt.$$.fragment),vd=c(),la=s("span"),yd=n("LayoutLMv3ForTokenClassification"),Ha=c(),W=s("div"),y(Yt.$$.fragment),bd=c(),B=s("p"),Ld=n(`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),Jt=s("a"),kd=n("FUNSD"),xd=n(`,
`),Kt=s("a"),wd=n("SROIE"),Td=n(", "),Zt=s("a"),Md=n("CORD"),$d=n(` and
`),eo=s("a"),zd=n("Kleister-NDA"),qd=n("."),Ed=c(),to=s("p"),Fd=n("This model is a PyTorch "),oo=s("a"),Pd=n("torch.nn.Module"),Cd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ad=c(),G=s("div"),y(no.$$.fragment),jd=c(),ke=s("p"),Id=n("The "),Uo=s("a"),Nd=n("LayoutLMv3ForTokenClassification"),Sd=n(" forward method, overrides the "),da=s("code"),Dd=n("__call__"),Od=n(" special method."),Rd=c(),y(Qe.$$.fragment),Wd=c(),y(Ve.$$.fragment),Ga=c(),xe=s("h2"),He=s("a"),ca=s("span"),y(ao.$$.fragment),Bd=c(),ua=s("span"),Ud=n("LayoutLMv3ForQuestionAnswering"),Xa=c(),U=s("div"),y(so.$$.fragment),Qd=c(),K=s("p"),Vd=n(`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),ro=s("a"),Hd=n("DocVQA"),Gd=n(` (a linear layer on top of the text part of the hidden-states output to
compute `),ma=s("code"),Xd=n("span start logits"),Yd=n(" and "),pa=s("code"),Jd=n("span end logits"),Kd=n(")."),Zd=c(),io=s("p"),ec=n("This model is a PyTorch "),lo=s("a"),tc=n("torch.nn.Module"),oc=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),nc=c(),X=s("div"),y(co.$$.fragment),ac=c(),we=s("p"),sc=n("The "),Qo=s("a"),rc=n("LayoutLMv3ForQuestionAnswering"),ic=n(" forward method, overrides the "),ha=s("code"),lc=n("__call__"),dc=n(" special method."),cc=c(),y(Ge.$$.fragment),uc=c(),y(Xe.$$.fragment),this.h()},l(o){const p=Mm('[data-svelte="svelte-1phssyn"]',document.head);m=r(p,"META",{name:!0,content:!0}),p.forEach(t),T=u(o),_=r(o,"H1",{class:!0});var uo=i(_);f=r(uo,"A",{id:!0,class:!0,href:!0});var fa=i(f);v=r(fa,"SPAN",{});var ga=i(v);b(l.$$.fragment,ga),ga.forEach(t),fa.forEach(t),h=u(uo),C=r(uo,"SPAN",{});var _a=i(C);Ls=a(_a,"LayoutLMv3"),_a.forEach(t),uo.forEach(t),xa=u(o),le=r(o,"H2",{class:!0});var mo=i(le);Te=r(mo,"A",{id:!0,class:!0,href:!0});var va=i(Te);ln=r(va,"SPAN",{});var ya=i(ln);b(it.$$.fragment,ya),ya.forEach(t),va.forEach(t),ks=u(mo),dn=r(mo,"SPAN",{});var ba=i(dn);xs=a(ba,"Overview"),ba.forEach(t),mo.forEach(t),wa=u(o),Q=r(o,"P",{});var Z=i(Q);ws=a(Z,"The LayoutLMv3 model was proposed in "),lt=r(Z,"A",{href:!0,rel:!0});var La=i(lt);Ts=a(La,"LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),La.forEach(t),Ms=a(Z,` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies `),po=r(Z,"A",{href:!0});var vc=i(po);$s=a(vc,"LayoutLMv2"),vc.forEach(t),zs=a(Z," by using patch embeddings (as in "),ho=r(Z,"A",{href:!0});var yc=i(ho);qs=a(yc,"ViT"),yc.forEach(t),Es=a(Z,`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),Z.forEach(t),Ta=u(o),fo=r(o,"P",{});var bc=i(fo);Fs=a(bc,"The abstract from the paper is the following:"),bc.forEach(t),Ma=u(o),go=r(o,"P",{});var Lc=i(go);cn=r(Lc,"EM",{});var kc=i(cn);Ps=a(kc,"Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),kc.forEach(t),Lc.forEach(t),$a=u(o),_o=r(o,"P",{});var xc=i(_o);Cs=a(xc,"Tips:"),xc.forEach(t),za=u(o),te=r(o,"UL",{});var Vo=i(te);Me=r(Vo,"LI",{});var ka=i(Me);As=a(ka,"In terms of data processing, LayoutLMv3 is identical to its predecessor "),vo=r(ka,"A",{href:!0});var wc=i(vo);js=a(wc,"LayoutLMv2"),wc.forEach(t),Is=a(ka,", except that:"),dt=r(ka,"UL",{});var Ja=i(dt);un=r(Ja,"LI",{});var Tc=i(un);Ns=a(Tc,"images need to be resized and normalized with channels in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),Tc.forEach(t),Ss=u(Ja),N=r(Ja,"LI",{});var se=i(N);Ds=a(se,`text is tokenized using byte-pair encoding (BPE), as opposed to WordPiece.
Due to these differences in data preprocessing, one can use `),yo=r(se,"A",{href:!0});var Mc=i(yo);Os=a(Mc,"LayoutLMv3Processor"),Mc.forEach(t),Rs=a(se," which internally combines a "),bo=r(se,"A",{href:!0});var $c=i(bo);Ws=a($c,"LayoutLMv3FeatureExtractor"),$c.forEach(t),Bs=a(se," (for the image modality) and a "),Lo=r(se,"A",{href:!0});var zc=i(Lo);Us=a(zc,"LayoutLMv3Tokenizer"),zc.forEach(t),Qs=a(se,"/"),ko=r(se,"A",{href:!0});var qc=i(ko);Vs=a(qc,"LayoutLMv3TokenizerFast"),qc.forEach(t),Hs=a(se," (for the text modality) to prepare all data for the model."),se.forEach(t),Ja.forEach(t),ka.forEach(t),Gs=u(Vo),de=r(Vo,"LI",{});var Ho=i(de);Xs=a(Ho,"Regarding usage of "),xo=r(Ho,"A",{href:!0});var Ec=i(xo);Ys=a(Ec,"LayoutLMv3Processor"),Ec.forEach(t),Js=a(Ho,", we refer to the "),wo=r(Ho,"A",{href:!0});var Fc=i(wo);Ks=a(Fc,"usage guide"),Fc.forEach(t),Zs=a(Ho," of its predecessor."),Ho.forEach(t),er=u(Vo),ct=r(Vo,"LI",{});var Ka=i(ct);tr=a(Ka,"Demo notebooks for LayoutLMv3 can be found "),ut=r(Ka,"A",{href:!0,rel:!0});var Pc=i(ut);or=a(Pc,"here"),Pc.forEach(t),nr=a(Ka,"."),Ka.forEach(t),Vo.forEach(t),qa=u(o),$e=r(o,"IMG",{src:!0,alt:!0,width:!0}),Ea=u(o),ze=r(o,"SMALL",{});var Za=i(ze);ar=a(Za,"LayoutLMv3 architecture. Taken from the "),To=r(Za,"A",{href:!0});var Cc=i(To);sr=a(Cc,"original paper"),Cc.forEach(t),rr=a(Za,"."),Za.forEach(t),Fa=u(o),oe=r(o,"P",{});var Go=i(oe);ir=a(Go,"This model was contributed by "),mt=r(Go,"A",{href:!0,rel:!0});var Ac=i(mt);lr=a(Ac,"nielsr"),Ac.forEach(t),dr=a(Go,". The original code can be found "),pt=r(Go,"A",{href:!0,rel:!0});var jc=i(pt);cr=a(jc,"here"),jc.forEach(t),ur=a(Go,"."),Go.forEach(t),Pa=u(o),ce=r(o,"H2",{class:!0});var es=i(ce);qe=r(es,"A",{id:!0,class:!0,href:!0});var Ic=i(qe);mn=r(Ic,"SPAN",{});var Nc=i(mn);b(ht.$$.fragment,Nc),Nc.forEach(t),Ic.forEach(t),mr=u(es),pn=r(es,"SPAN",{});var Sc=i(pn);pr=a(Sc,"LayoutLMv3Config"),Sc.forEach(t),es.forEach(t),Ca=u(o),S=r(o,"DIV",{class:!0});var Ye=i(S);b(ft.$$.fragment,Ye),hr=u(Ye),ue=r(Ye,"P",{});var Xo=i(ue);fr=a(Xo,"This is the configuration class to store the configuration of a "),Mo=r(Xo,"A",{href:!0});var Dc=i(Mo);gr=a(Dc,"LayoutLMv3Model"),Dc.forEach(t),_r=a(Xo,`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),gt=r(Xo,"A",{href:!0,rel:!0});var Oc=i(gt);vr=a(Oc,"microsoft/layoutlmv3-base"),Oc.forEach(t),yr=a(Xo," architecture."),Xo.forEach(t),br=u(Ye),me=r(Ye,"P",{});var Yo=i(me);Lr=a(Yo,"Configuration objects inherit from "),$o=r(Yo,"A",{href:!0});var Rc=i($o);kr=a(Rc,"PretrainedConfig"),Rc.forEach(t),xr=a(Yo,` and can be used to control the model outputs. Read the
documentation from `),zo=r(Yo,"A",{href:!0});var Wc=i(zo);wr=a(Wc,"PretrainedConfig"),Wc.forEach(t),Tr=a(Yo," for more information."),Yo.forEach(t),Mr=u(Ye),b(Ee.$$.fragment,Ye),Ye.forEach(t),Aa=u(o),pe=r(o,"H2",{class:!0});var ts=i(pe);Fe=r(ts,"A",{id:!0,class:!0,href:!0});var Bc=i(Fe);hn=r(Bc,"SPAN",{});var Uc=i(hn);b(_t.$$.fragment,Uc),Uc.forEach(t),Bc.forEach(t),$r=u(ts),fn=r(ts,"SPAN",{});var Qc=i(fn);zr=a(Qc,"LayoutLMv3FeatureExtractor"),Qc.forEach(t),ts.forEach(t),ja=u(o),D=r(o,"DIV",{class:!0});var Je=i(D);b(vt.$$.fragment,Je),qr=u(Je),gn=r(Je,"P",{});var Vc=i(gn);Er=a(Vc,`Constructs a LayoutLMv3 feature extractor. This can be used to resize + normalize document images, as well as to
apply OCR on them in order to get a list of words and normalized bounding boxes.`),Vc.forEach(t),Fr=u(Je),yt=r(Je,"P",{});var os=i(yt);Pr=a(os,"This feature extractor inherits from "),_n=r(os,"CODE",{});var Hc=i(_n);Cr=a(Hc,"PreTrainedFeatureExtractor()"),Hc.forEach(t),Ar=a(os,` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),os.forEach(t),jr=u(Je),ne=r(Je,"DIV",{class:!0});var Jo=i(ne);b(bt.$$.fragment,Jo),Ir=u(Jo),vn=r(Jo,"P",{});var Gc=i(vn);Nr=a(Gc,"Main method to prepare for the model one or several image(s)."),Gc.forEach(t),Sr=u(Jo),b(Pe.$$.fragment,Jo),Jo.forEach(t),Je.forEach(t),Ia=u(o),he=r(o,"H2",{class:!0});var ns=i(he);Ce=r(ns,"A",{id:!0,class:!0,href:!0});var Xc=i(Ce);yn=r(Xc,"SPAN",{});var Yc=i(yn);b(Lt.$$.fragment,Yc),Yc.forEach(t),Xc.forEach(t),Dr=u(ns),bn=r(ns,"SPAN",{});var Jc=i(bn);Or=a(Jc,"LayoutLMv3Tokenizer"),Jc.forEach(t),ns.forEach(t),Na=u(o),A=r(o,"DIV",{class:!0});var Y=i(A);b(kt.$$.fragment,Y),Rr=u(Y),F=r(Y,"P",{});var j=i(F);Wr=a(j,"Construct a LayoutLMv3 tokenizer. Based on "),Ln=r(j,"CODE",{});var Kc=i(Ln);Br=a(Kc,"RoBERTatokenizer"),Kc.forEach(t),Ur=a(j,` (Byte Pair Encoding or BPE).
`),qo=r(j,"A",{href:!0});var Zc=i(qo);Qr=a(Zc,"LayoutLMv3Tokenizer"),Zc.forEach(t),Vr=a(j,` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),kn=r(j,"CODE",{});var eu=i(kn);Hr=a(eu,"input_ids"),eu.forEach(t),Gr=a(j,", "),xn=r(j,"CODE",{});var tu=i(xn);Xr=a(tu,"attention_mask"),tu.forEach(t),Yr=a(j,", "),wn=r(j,"CODE",{});var ou=i(wn);Jr=a(ou,"token_type_ids"),ou.forEach(t),Kr=a(j,", "),Tn=r(j,"CODE",{});var nu=i(Tn);Zr=a(nu,"bbox"),nu.forEach(t),ei=a(j,", and optional "),Mn=r(j,"CODE",{});var au=i(Mn);ti=a(au,"labels"),au.forEach(t),oi=a(j,` (for token
classification).`),j.forEach(t),ni=u(Y),xt=r(Y,"P",{});var as=i(xt);ai=a(as,"This tokenizer inherits from "),Eo=r(as,"A",{href:!0});var su=i(Eo);si=a(su,"PreTrainedTokenizer"),su.forEach(t),ri=a(as,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),as.forEach(t),ii=u(Y),Fo=r(Y,"P",{});var mc=i(Fo);Po=r(mc,"A",{href:!0});var ru=i(Po);li=a(ru,"LayoutLMv3Tokenizer"),ru.forEach(t),di=a(mc,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),mc.forEach(t),ci=u(Y),Ae=r(Y,"DIV",{class:!0});var ss=i(Ae);b(wt.$$.fragment,ss),ui=u(ss),$n=r(ss,"P",{});var iu=i($n);mi=a(iu,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),iu.forEach(t),ss.forEach(t),pi=u(Y),Co=r(Y,"DIV",{class:!0});var lu=i(Co);b(Tt.$$.fragment,lu),lu.forEach(t),Y.forEach(t),Sa=u(o),fe=r(o,"H2",{class:!0});var rs=i(fe);je=r(rs,"A",{id:!0,class:!0,href:!0});var du=i(je);zn=r(du,"SPAN",{});var cu=i(zn);b(Mt.$$.fragment,cu),cu.forEach(t),du.forEach(t),hi=u(rs),qn=r(rs,"SPAN",{});var uu=i(qn);fi=a(uu,"LayoutLMv3TokenizerFast"),uu.forEach(t),rs.forEach(t),Da=u(o),O=r(o,"DIV",{class:!0});var Ke=i(O);b($t.$$.fragment,Ke),gi=u(Ke),zt=r(Ke,"P",{});var is=i(zt);_i=a(is,"Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),En=r(is,"EM",{});var mu=i(En);vi=a(mu,"tokenizers"),mu.forEach(t),yi=a(is," library). Based on BPE."),is.forEach(t),bi=u(Ke),qt=r(Ke,"P",{});var ls=i(qt);Li=a(ls,"This tokenizer inherits from "),Ao=r(ls,"A",{href:!0});var pu=i(Ao);ki=a(pu,"PreTrainedTokenizerFast"),pu.forEach(t),xi=a(ls,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ls.forEach(t),wi=u(Ke),Ie=r(Ke,"DIV",{class:!0});var ds=i(Ie);b(Et.$$.fragment,ds),Ti=u(ds),Fn=r(ds,"P",{});var hu=i(Fn);Mi=a(hu,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),hu.forEach(t),ds.forEach(t),Ke.forEach(t),Oa=u(o),ge=r(o,"H2",{class:!0});var cs=i(ge);Ne=r(cs,"A",{id:!0,class:!0,href:!0});var fu=i(Ne);Pn=r(fu,"SPAN",{});var gu=i(Pn);b(Ft.$$.fragment,gu),gu.forEach(t),fu.forEach(t),$i=u(cs),Cn=r(cs,"SPAN",{});var _u=i(Cn);zi=a(_u,"LayoutLMv3Processor"),_u.forEach(t),cs.forEach(t),Ra=u(o),I=r(o,"DIV",{class:!0});var re=i(I);b(Pt.$$.fragment,re),qi=u(re),An=r(re,"P",{});var vu=i(An);Ei=a(vu,`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),vu.forEach(t),Fi=u(re),jo=r(re,"P",{});var pc=i(jo);Io=r(pc,"A",{href:!0});var yu=i(Io);Pi=a(yu,"LayoutLMv3Processor"),yu.forEach(t),Ci=a(pc," offers all the functionalities you need to prepare data for the model."),pc.forEach(t),Ai=u(re),z=r(re,"P",{});var E=i(z);ji=a(E,"It first uses "),No=r(E,"A",{href:!0});var bu=i(No);Ii=a(bu,"LayoutLMv3FeatureExtractor"),bu.forEach(t),Ni=a(E,` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),So=r(E,"A",{href:!0});var Lu=i(So);Si=a(Lu,"LayoutLMv3Tokenizer"),Lu.forEach(t),Di=a(E,` or
`),Do=r(E,"A",{href:!0});var ku=i(Do);Oi=a(ku,"LayoutLMv3TokenizerFast"),ku.forEach(t),Ri=a(E,", which turns the words and bounding boxes into token-level "),jn=r(E,"CODE",{});var xu=i(jn);Wi=a(xu,"input_ids"),xu.forEach(t),Bi=a(E,`,
`),In=r(E,"CODE",{});var wu=i(In);Ui=a(wu,"attention_mask"),wu.forEach(t),Qi=a(E,", "),Nn=r(E,"CODE",{});var Tu=i(Nn);Vi=a(Tu,"token_type_ids"),Tu.forEach(t),Hi=a(E,", "),Sn=r(E,"CODE",{});var Mu=i(Sn);Gi=a(Mu,"bbox"),Mu.forEach(t),Xi=a(E,". Optionally, one can provide integer "),Dn=r(E,"CODE",{});var $u=i(Dn);Yi=a($u,"word_labels"),$u.forEach(t),Ji=a(E,`, which are turned
into token-level `),On=r(E,"CODE",{});var zu=i(On);Ki=a(zu,"labels"),zu.forEach(t),Zi=a(E," for token classification tasks (such as FUNSD, CORD)."),E.forEach(t),el=u(re),ae=r(re,"DIV",{class:!0});var Ko=i(ae);b(Ct.$$.fragment,Ko),tl=u(Ko),M=r(Ko,"P",{});var $=i(M);ol=a($,"This method first forwards the "),Rn=r($,"CODE",{});var qu=i(Rn);nl=a(qu,"images"),qu.forEach(t),al=a($," argument to "),At=r($,"A",{href:!0});var hc=i(At);Wn=r(hc,"STRONG",{});var Eu=i(Wn);sl=a(Eu,"call"),Eu.forEach(t),rl=a(hc,"()"),hc.forEach(t),il=a($,`. In case
`),Oo=r($,"A",{href:!0});var Fu=i(Oo);ll=a(Fu,"LayoutLMv3FeatureExtractor"),Fu.forEach(t),dl=a($," was initialized with "),Bn=r($,"CODE",{});var Pu=i(Bn);cl=a(Pu,"apply_ocr"),Pu.forEach(t),ul=a($," set to "),Un=r($,"CODE",{});var Cu=i(Un);ml=a(Cu,"True"),Cu.forEach(t),pl=a($,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),jt=r($,"A",{href:!0});var fc=i(jt);Qn=r(fc,"STRONG",{});var Au=i(Qn);hl=a(Au,"call"),Au.forEach(t),fl=a(fc,"()"),fc.forEach(t),gl=a($,` and returns the output,
together with resized and normalized `),Vn=r($,"CODE",{});var ju=i(Vn);_l=a(ju,"pixel_values"),ju.forEach(t),vl=a($,". In case "),Ro=r($,"A",{href:!0});var Iu=i(Ro);yl=a(Iu,"LayoutLMv3FeatureExtractor"),Iu.forEach(t),bl=a($,` was initialized
with `),Hn=r($,"CODE",{});var Nu=i(Hn);Ll=a(Nu,"apply_ocr"),Nu.forEach(t),kl=a($," set to "),Gn=r($,"CODE",{});var Su=i(Gn);xl=a(Su,"False"),Su.forEach(t),wl=a($,", it passes the words ("),Xn=r($,"CODE",{});var Du=i(Xn);Tl=a(Du,"text"),Du.forEach(t),Ml=a($,"/`"),Yn=r($,"CODE",{});var Ou=i(Yn);$l=a(Ou,"text_pair"),Ou.forEach(t),zl=a($,") and "),Jn=r($,"CODE",{});var Ru=i(Jn);ql=a(Ru,"boxes"),Ru.forEach(t),El=a($,` specified by the user
along with the additional arguments to `),It=r($,"A",{href:!0});var gc=i(It);Kn=r(gc,"STRONG",{});var Wu=i(Kn);Fl=a(Wu,"call"),Wu.forEach(t),Pl=a(gc,"()"),gc.forEach(t),Cl=a($,` and returns the output, together with
resized and normalized `),Zn=r($,"CODE",{});var Bu=i(Zn);Al=a(Bu,"pixel_values"),Bu.forEach(t),jl=a($,"."),$.forEach(t),Il=u(Ko),ea=r(Ko,"P",{});var Uu=i(ea);Nl=a(Uu,"Please refer to the docstring of the above two methods for more information."),Uu.forEach(t),Ko.forEach(t),re.forEach(t),Wa=u(o),_e=r(o,"H2",{class:!0});var us=i(_e);Se=r(us,"A",{id:!0,class:!0,href:!0});var Qu=i(Se);ta=r(Qu,"SPAN",{});var Vu=i(ta);b(Nt.$$.fragment,Vu),Vu.forEach(t),Qu.forEach(t),Sl=u(us),oa=r(us,"SPAN",{});var Hu=i(oa);Dl=a(Hu,"LayoutLMv3Model"),Hu.forEach(t),us.forEach(t),Ba=u(o),J=r(o,"DIV",{class:!0});var Zo=i(J);b(St.$$.fragment,Zo),Ol=u(Zo),Dt=r(Zo,"P",{});var ms=i(Dt);Rl=a(ms,`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ot=r(ms,"A",{href:!0,rel:!0});var Gu=i(Ot);Wl=a(Gu,"torch.nn.Module"),Gu.forEach(t),Bl=a(ms,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ms.forEach(t),Ul=u(Zo),V=r(Zo,"DIV",{class:!0});var Ze=i(V);b(Rt.$$.fragment,Ze),Ql=u(Ze),ve=r(Ze,"P",{});var en=i(ve);Vl=a(en,"The "),Wo=r(en,"A",{href:!0});var Xu=i(Wo);Hl=a(Xu,"LayoutLMv3Model"),Xu.forEach(t),Gl=a(en," forward method, overrides the "),na=r(en,"CODE",{});var Yu=i(na);Xl=a(Yu,"__call__"),Yu.forEach(t),Yl=a(en," special method."),en.forEach(t),Jl=u(Ze),b(De.$$.fragment,Ze),Kl=u(Ze),b(Oe.$$.fragment,Ze),Ze.forEach(t),Zo.forEach(t),Ua=u(o),ye=r(o,"H2",{class:!0});var ps=i(ye);Re=r(ps,"A",{id:!0,class:!0,href:!0});var Ju=i(Re);aa=r(Ju,"SPAN",{});var Ku=i(aa);b(Wt.$$.fragment,Ku),Ku.forEach(t),Ju.forEach(t),Zl=u(ps),sa=r(ps,"SPAN",{});var Zu=i(sa);ed=a(Zu,"LayoutLMv3ForSequenceClassification"),Zu.forEach(t),ps.forEach(t),Qa=u(o),R=r(o,"DIV",{class:!0});var et=i(R);b(Bt.$$.fragment,et),td=u(et),Ut=r(et,"P",{});var hs=i(Ut);od=a(hs,`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Qt=r(hs,"A",{href:!0,rel:!0});var em=i(Qt);nd=a(em,"RVL-CDIP"),em.forEach(t),ad=a(hs," dataset."),hs.forEach(t),sd=u(et),Vt=r(et,"P",{});var fs=i(Vt);rd=a(fs,"This model is a PyTorch "),Ht=r(fs,"A",{href:!0,rel:!0});var tm=i(Ht);id=a(tm,"torch.nn.Module"),tm.forEach(t),ld=a(fs,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fs.forEach(t),dd=u(et),H=r(et,"DIV",{class:!0});var tt=i(H);b(Gt.$$.fragment,tt),cd=u(tt),be=r(tt,"P",{});var tn=i(be);ud=a(tn,"The "),Bo=r(tn,"A",{href:!0});var om=i(Bo);md=a(om,"LayoutLMv3ForSequenceClassification"),om.forEach(t),pd=a(tn," forward method, overrides the "),ra=r(tn,"CODE",{});var nm=i(ra);hd=a(nm,"__call__"),nm.forEach(t),fd=a(tn," special method."),tn.forEach(t),gd=u(tt),b(We.$$.fragment,tt),_d=u(tt),b(Be.$$.fragment,tt),tt.forEach(t),et.forEach(t),Va=u(o),Le=r(o,"H2",{class:!0});var gs=i(Le);Ue=r(gs,"A",{id:!0,class:!0,href:!0});var am=i(Ue);ia=r(am,"SPAN",{});var sm=i(ia);b(Xt.$$.fragment,sm),sm.forEach(t),am.forEach(t),vd=u(gs),la=r(gs,"SPAN",{});var rm=i(la);yd=a(rm,"LayoutLMv3ForTokenClassification"),rm.forEach(t),gs.forEach(t),Ha=u(o),W=r(o,"DIV",{class:!0});var ot=i(W);b(Yt.$$.fragment,ot),bd=u(ot),B=r(ot,"P",{});var ie=i(B);Ld=a(ie,`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),Jt=r(ie,"A",{href:!0,rel:!0});var im=i(Jt);kd=a(im,"FUNSD"),im.forEach(t),xd=a(ie,`,
`),Kt=r(ie,"A",{href:!0,rel:!0});var lm=i(Kt);wd=a(lm,"SROIE"),lm.forEach(t),Td=a(ie,", "),Zt=r(ie,"A",{href:!0,rel:!0});var dm=i(Zt);Md=a(dm,"CORD"),dm.forEach(t),$d=a(ie,` and
`),eo=r(ie,"A",{href:!0,rel:!0});var cm=i(eo);zd=a(cm,"Kleister-NDA"),cm.forEach(t),qd=a(ie,"."),ie.forEach(t),Ed=u(ot),to=r(ot,"P",{});var _s=i(to);Fd=a(_s,"This model is a PyTorch "),oo=r(_s,"A",{href:!0,rel:!0});var um=i(oo);Pd=a(um,"torch.nn.Module"),um.forEach(t),Cd=a(_s,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_s.forEach(t),Ad=u(ot),G=r(ot,"DIV",{class:!0});var nt=i(G);b(no.$$.fragment,nt),jd=u(nt),ke=r(nt,"P",{});var on=i(ke);Id=a(on,"The "),Uo=r(on,"A",{href:!0});var mm=i(Uo);Nd=a(mm,"LayoutLMv3ForTokenClassification"),mm.forEach(t),Sd=a(on," forward method, overrides the "),da=r(on,"CODE",{});var pm=i(da);Dd=a(pm,"__call__"),pm.forEach(t),Od=a(on," special method."),on.forEach(t),Rd=u(nt),b(Qe.$$.fragment,nt),Wd=u(nt),b(Ve.$$.fragment,nt),nt.forEach(t),ot.forEach(t),Ga=u(o),xe=r(o,"H2",{class:!0});var vs=i(xe);He=r(vs,"A",{id:!0,class:!0,href:!0});var hm=i(He);ca=r(hm,"SPAN",{});var fm=i(ca);b(ao.$$.fragment,fm),fm.forEach(t),hm.forEach(t),Bd=u(vs),ua=r(vs,"SPAN",{});var gm=i(ua);Ud=a(gm,"LayoutLMv3ForQuestionAnswering"),gm.forEach(t),vs.forEach(t),Xa=u(o),U=r(o,"DIV",{class:!0});var at=i(U);b(so.$$.fragment,at),Qd=u(at),K=r(at,"P",{});var st=i(K);Vd=a(st,`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),ro=r(st,"A",{href:!0,rel:!0});var _m=i(ro);Hd=a(_m,"DocVQA"),_m.forEach(t),Gd=a(st,` (a linear layer on top of the text part of the hidden-states output to
compute `),ma=r(st,"CODE",{});var vm=i(ma);Xd=a(vm,"span start logits"),vm.forEach(t),Yd=a(st," and "),pa=r(st,"CODE",{});var ym=i(pa);Jd=a(ym,"span end logits"),ym.forEach(t),Kd=a(st,")."),st.forEach(t),Zd=u(at),io=r(at,"P",{});var ys=i(io);ec=a(ys,"This model is a PyTorch "),lo=r(ys,"A",{href:!0,rel:!0});var bm=i(lo);tc=a(bm,"torch.nn.Module"),bm.forEach(t),oc=a(ys,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ys.forEach(t),nc=u(at),X=r(at,"DIV",{class:!0});var rt=i(X);b(co.$$.fragment,rt),ac=u(rt),we=r(rt,"P",{});var nn=i(we);sc=a(nn,"The "),Qo=r(nn,"A",{href:!0});var Lm=i(Qo);rc=a(Lm,"LayoutLMv3ForQuestionAnswering"),Lm.forEach(t),ic=a(nn," forward method, overrides the "),ha=r(nn,"CODE",{});var km=i(ha);lc=a(km,"__call__"),km.forEach(t),dc=a(nn," special method."),nn.forEach(t),cc=u(rt),b(Ge.$$.fragment,rt),uc=u(rt),b(Xe.$$.fragment,rt),rt.forEach(t),at.forEach(t),this.h()},h(){d(m,"name","hf:doc:metadata"),d(m,"content",JSON.stringify(Om)),d(f,"id","layoutlmv3"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#layoutlmv3"),d(_,"class","relative group"),d(Te,"id","overview"),d(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Te,"href","#overview"),d(le,"class","relative group"),d(lt,"href","https://arxiv.org/abs/2204.08387"),d(lt,"rel","nofollow"),d(po,"href","layoutlmv2"),d(ho,"href","vit"),d(vo,"href","layoutlmv2"),d(yo,"href","/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d(bo,"href","/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(Lo,"href","/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(ko,"href","/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast"),d(xo,"href","/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d(wo,"href","layoutlmv2#usage-LayoutLMv2Processor"),d(ut,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/LayoutLMv3"),d(ut,"rel","nofollow"),$m($e.src,_c="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/layoutlmv3_architecture.png")||d($e,"src",_c),d($e,"alt","drawing"),d($e,"width","600"),d(To,"href","https://arxiv.org/abs/2204.08387"),d(mt,"href","https://huggingface.co/nielsr"),d(mt,"rel","nofollow"),d(pt,"href","https://github.com/microsoft/unilm/tree/master/layoutlmv3"),d(pt,"rel","nofollow"),d(qe,"id","transformers.LayoutLMv3Config"),d(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(qe,"href","#transformers.LayoutLMv3Config"),d(ce,"class","relative group"),d(Mo,"href","/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),d(gt,"href","https://huggingface.co/microsoft/layoutlmv3-base"),d(gt,"rel","nofollow"),d($o,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),d(zo,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),d(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Fe,"id","transformers.LayoutLMv3FeatureExtractor"),d(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Fe,"href","#transformers.LayoutLMv3FeatureExtractor"),d(pe,"class","relative group"),d(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ce,"id","transformers.LayoutLMv3Tokenizer"),d(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ce,"href","#transformers.LayoutLMv3Tokenizer"),d(he,"class","relative group"),d(qo,"href","/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(Eo,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(Po,"href","/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(je,"id","transformers.LayoutLMv3TokenizerFast"),d(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(je,"href","#transformers.LayoutLMv3TokenizerFast"),d(fe,"class","relative group"),d(Ao,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),d(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ne,"id","transformers.LayoutLMv3Processor"),d(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ne,"href","#transformers.LayoutLMv3Processor"),d(ge,"class","relative group"),d(Io,"href","/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d(No,"href","/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(So,"href","/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(Do,"href","/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast"),d(At,"href","/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor.__call__"),d(Oo,"href","/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(jt,"href","/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),d(Ro,"href","/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(It,"href","/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),d(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Se,"id","transformers.LayoutLMv3Model"),d(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Se,"href","#transformers.LayoutLMv3Model"),d(_e,"class","relative group"),d(Ot,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ot,"rel","nofollow"),d(Wo,"href","/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),d(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Re,"id","transformers.LayoutLMv3ForSequenceClassification"),d(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Re,"href","#transformers.LayoutLMv3ForSequenceClassification"),d(ye,"class","relative group"),d(Qt,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),d(Qt,"rel","nofollow"),d(Ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ht,"rel","nofollow"),d(Bo,"href","/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForSequenceClassification"),d(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ue,"id","transformers.LayoutLMv3ForTokenClassification"),d(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ue,"href","#transformers.LayoutLMv3ForTokenClassification"),d(Le,"class","relative group"),d(Jt,"href","https://guillaumejaume.github.io/FUNSD/"),d(Jt,"rel","nofollow"),d(Kt,"href","https://rrc.cvc.uab.es/?ch=13"),d(Kt,"rel","nofollow"),d(Zt,"href","https://github.com/clovaai/cord"),d(Zt,"rel","nofollow"),d(eo,"href","https://github.com/applicaai/kleister-nda"),d(eo,"rel","nofollow"),d(oo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(oo,"rel","nofollow"),d(Uo,"href","/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForTokenClassification"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(He,"id","transformers.LayoutLMv3ForQuestionAnswering"),d(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(He,"href","#transformers.LayoutLMv3ForQuestionAnswering"),d(xe,"class","relative group"),d(ro,"href","https://rrc.cvc.uab.es/?ch=17"),d(ro,"rel","nofollow"),d(lo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(lo,"rel","nofollow"),d(Qo,"href","/docs/transformers/v4.21.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForQuestionAnswering"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,p){e(document.head,m),g(o,T,p),g(o,_,p),e(_,f),e(f,v),L(l,v,null),e(_,h),e(_,C),e(C,Ls),g(o,xa,p),g(o,le,p),e(le,Te),e(Te,ln),L(it,ln,null),e(le,ks),e(le,dn),e(dn,xs),g(o,wa,p),g(o,Q,p),e(Q,ws),e(Q,lt),e(lt,Ts),e(Q,Ms),e(Q,po),e(po,$s),e(Q,zs),e(Q,ho),e(ho,qs),e(Q,Es),g(o,Ta,p),g(o,fo,p),e(fo,Fs),g(o,Ma,p),g(o,go,p),e(go,cn),e(cn,Ps),g(o,$a,p),g(o,_o,p),e(_o,Cs),g(o,za,p),g(o,te,p),e(te,Me),e(Me,As),e(Me,vo),e(vo,js),e(Me,Is),e(Me,dt),e(dt,un),e(un,Ns),e(dt,Ss),e(dt,N),e(N,Ds),e(N,yo),e(yo,Os),e(N,Rs),e(N,bo),e(bo,Ws),e(N,Bs),e(N,Lo),e(Lo,Us),e(N,Qs),e(N,ko),e(ko,Vs),e(N,Hs),e(te,Gs),e(te,de),e(de,Xs),e(de,xo),e(xo,Ys),e(de,Js),e(de,wo),e(wo,Ks),e(de,Zs),e(te,er),e(te,ct),e(ct,tr),e(ct,ut),e(ut,or),e(ct,nr),g(o,qa,p),g(o,$e,p),g(o,Ea,p),g(o,ze,p),e(ze,ar),e(ze,To),e(To,sr),e(ze,rr),g(o,Fa,p),g(o,oe,p),e(oe,ir),e(oe,mt),e(mt,lr),e(oe,dr),e(oe,pt),e(pt,cr),e(oe,ur),g(o,Pa,p),g(o,ce,p),e(ce,qe),e(qe,mn),L(ht,mn,null),e(ce,mr),e(ce,pn),e(pn,pr),g(o,Ca,p),g(o,S,p),L(ft,S,null),e(S,hr),e(S,ue),e(ue,fr),e(ue,Mo),e(Mo,gr),e(ue,_r),e(ue,gt),e(gt,vr),e(ue,yr),e(S,br),e(S,me),e(me,Lr),e(me,$o),e($o,kr),e(me,xr),e(me,zo),e(zo,wr),e(me,Tr),e(S,Mr),L(Ee,S,null),g(o,Aa,p),g(o,pe,p),e(pe,Fe),e(Fe,hn),L(_t,hn,null),e(pe,$r),e(pe,fn),e(fn,zr),g(o,ja,p),g(o,D,p),L(vt,D,null),e(D,qr),e(D,gn),e(gn,Er),e(D,Fr),e(D,yt),e(yt,Pr),e(yt,_n),e(_n,Cr),e(yt,Ar),e(D,jr),e(D,ne),L(bt,ne,null),e(ne,Ir),e(ne,vn),e(vn,Nr),e(ne,Sr),L(Pe,ne,null),g(o,Ia,p),g(o,he,p),e(he,Ce),e(Ce,yn),L(Lt,yn,null),e(he,Dr),e(he,bn),e(bn,Or),g(o,Na,p),g(o,A,p),L(kt,A,null),e(A,Rr),e(A,F),e(F,Wr),e(F,Ln),e(Ln,Br),e(F,Ur),e(F,qo),e(qo,Qr),e(F,Vr),e(F,kn),e(kn,Hr),e(F,Gr),e(F,xn),e(xn,Xr),e(F,Yr),e(F,wn),e(wn,Jr),e(F,Kr),e(F,Tn),e(Tn,Zr),e(F,ei),e(F,Mn),e(Mn,ti),e(F,oi),e(A,ni),e(A,xt),e(xt,ai),e(xt,Eo),e(Eo,si),e(xt,ri),e(A,ii),e(A,Fo),e(Fo,Po),e(Po,li),e(Fo,di),e(A,ci),e(A,Ae),L(wt,Ae,null),e(Ae,ui),e(Ae,$n),e($n,mi),e(A,pi),e(A,Co),L(Tt,Co,null),g(o,Sa,p),g(o,fe,p),e(fe,je),e(je,zn),L(Mt,zn,null),e(fe,hi),e(fe,qn),e(qn,fi),g(o,Da,p),g(o,O,p),L($t,O,null),e(O,gi),e(O,zt),e(zt,_i),e(zt,En),e(En,vi),e(zt,yi),e(O,bi),e(O,qt),e(qt,Li),e(qt,Ao),e(Ao,ki),e(qt,xi),e(O,wi),e(O,Ie),L(Et,Ie,null),e(Ie,Ti),e(Ie,Fn),e(Fn,Mi),g(o,Oa,p),g(o,ge,p),e(ge,Ne),e(Ne,Pn),L(Ft,Pn,null),e(ge,$i),e(ge,Cn),e(Cn,zi),g(o,Ra,p),g(o,I,p),L(Pt,I,null),e(I,qi),e(I,An),e(An,Ei),e(I,Fi),e(I,jo),e(jo,Io),e(Io,Pi),e(jo,Ci),e(I,Ai),e(I,z),e(z,ji),e(z,No),e(No,Ii),e(z,Ni),e(z,So),e(So,Si),e(z,Di),e(z,Do),e(Do,Oi),e(z,Ri),e(z,jn),e(jn,Wi),e(z,Bi),e(z,In),e(In,Ui),e(z,Qi),e(z,Nn),e(Nn,Vi),e(z,Hi),e(z,Sn),e(Sn,Gi),e(z,Xi),e(z,Dn),e(Dn,Yi),e(z,Ji),e(z,On),e(On,Ki),e(z,Zi),e(I,el),e(I,ae),L(Ct,ae,null),e(ae,tl),e(ae,M),e(M,ol),e(M,Rn),e(Rn,nl),e(M,al),e(M,At),e(At,Wn),e(Wn,sl),e(At,rl),e(M,il),e(M,Oo),e(Oo,ll),e(M,dl),e(M,Bn),e(Bn,cl),e(M,ul),e(M,Un),e(Un,ml),e(M,pl),e(M,jt),e(jt,Qn),e(Qn,hl),e(jt,fl),e(M,gl),e(M,Vn),e(Vn,_l),e(M,vl),e(M,Ro),e(Ro,yl),e(M,bl),e(M,Hn),e(Hn,Ll),e(M,kl),e(M,Gn),e(Gn,xl),e(M,wl),e(M,Xn),e(Xn,Tl),e(M,Ml),e(M,Yn),e(Yn,$l),e(M,zl),e(M,Jn),e(Jn,ql),e(M,El),e(M,It),e(It,Kn),e(Kn,Fl),e(It,Pl),e(M,Cl),e(M,Zn),e(Zn,Al),e(M,jl),e(ae,Il),e(ae,ea),e(ea,Nl),g(o,Wa,p),g(o,_e,p),e(_e,Se),e(Se,ta),L(Nt,ta,null),e(_e,Sl),e(_e,oa),e(oa,Dl),g(o,Ba,p),g(o,J,p),L(St,J,null),e(J,Ol),e(J,Dt),e(Dt,Rl),e(Dt,Ot),e(Ot,Wl),e(Dt,Bl),e(J,Ul),e(J,V),L(Rt,V,null),e(V,Ql),e(V,ve),e(ve,Vl),e(ve,Wo),e(Wo,Hl),e(ve,Gl),e(ve,na),e(na,Xl),e(ve,Yl),e(V,Jl),L(De,V,null),e(V,Kl),L(Oe,V,null),g(o,Ua,p),g(o,ye,p),e(ye,Re),e(Re,aa),L(Wt,aa,null),e(ye,Zl),e(ye,sa),e(sa,ed),g(o,Qa,p),g(o,R,p),L(Bt,R,null),e(R,td),e(R,Ut),e(Ut,od),e(Ut,Qt),e(Qt,nd),e(Ut,ad),e(R,sd),e(R,Vt),e(Vt,rd),e(Vt,Ht),e(Ht,id),e(Vt,ld),e(R,dd),e(R,H),L(Gt,H,null),e(H,cd),e(H,be),e(be,ud),e(be,Bo),e(Bo,md),e(be,pd),e(be,ra),e(ra,hd),e(be,fd),e(H,gd),L(We,H,null),e(H,_d),L(Be,H,null),g(o,Va,p),g(o,Le,p),e(Le,Ue),e(Ue,ia),L(Xt,ia,null),e(Le,vd),e(Le,la),e(la,yd),g(o,Ha,p),g(o,W,p),L(Yt,W,null),e(W,bd),e(W,B),e(B,Ld),e(B,Jt),e(Jt,kd),e(B,xd),e(B,Kt),e(Kt,wd),e(B,Td),e(B,Zt),e(Zt,Md),e(B,$d),e(B,eo),e(eo,zd),e(B,qd),e(W,Ed),e(W,to),e(to,Fd),e(to,oo),e(oo,Pd),e(to,Cd),e(W,Ad),e(W,G),L(no,G,null),e(G,jd),e(G,ke),e(ke,Id),e(ke,Uo),e(Uo,Nd),e(ke,Sd),e(ke,da),e(da,Dd),e(ke,Od),e(G,Rd),L(Qe,G,null),e(G,Wd),L(Ve,G,null),g(o,Ga,p),g(o,xe,p),e(xe,He),e(He,ca),L(ao,ca,null),e(xe,Bd),e(xe,ua),e(ua,Ud),g(o,Xa,p),g(o,U,p),L(so,U,null),e(U,Qd),e(U,K),e(K,Vd),e(K,ro),e(ro,Hd),e(K,Gd),e(K,ma),e(ma,Xd),e(K,Yd),e(K,pa),e(pa,Jd),e(K,Kd),e(U,Zd),e(U,io),e(io,ec),e(io,lo),e(lo,tc),e(io,oc),e(U,nc),e(U,X),L(co,X,null),e(X,ac),e(X,we),e(we,sc),e(we,Qo),e(Qo,rc),e(we,ic),e(we,ha),e(ha,lc),e(we,dc),e(X,cc),L(Ge,X,null),e(X,uc),L(Xe,X,null),Ya=!0},p(o,[p]){const uo={};p&2&&(uo.$$scope={dirty:p,ctx:o}),Ee.$set(uo);const fa={};p&2&&(fa.$$scope={dirty:p,ctx:o}),Pe.$set(fa);const ga={};p&2&&(ga.$$scope={dirty:p,ctx:o}),De.$set(ga);const _a={};p&2&&(_a.$$scope={dirty:p,ctx:o}),Oe.$set(_a);const mo={};p&2&&(mo.$$scope={dirty:p,ctx:o}),We.$set(mo);const va={};p&2&&(va.$$scope={dirty:p,ctx:o}),Be.$set(va);const ya={};p&2&&(ya.$$scope={dirty:p,ctx:o}),Qe.$set(ya);const ba={};p&2&&(ba.$$scope={dirty:p,ctx:o}),Ve.$set(ba);const Z={};p&2&&(Z.$$scope={dirty:p,ctx:o}),Ge.$set(Z);const La={};p&2&&(La.$$scope={dirty:p,ctx:o}),Xe.$set(La)},i(o){Ya||(k(l.$$.fragment,o),k(it.$$.fragment,o),k(ht.$$.fragment,o),k(ft.$$.fragment,o),k(Ee.$$.fragment,o),k(_t.$$.fragment,o),k(vt.$$.fragment,o),k(bt.$$.fragment,o),k(Pe.$$.fragment,o),k(Lt.$$.fragment,o),k(kt.$$.fragment,o),k(wt.$$.fragment,o),k(Tt.$$.fragment,o),k(Mt.$$.fragment,o),k($t.$$.fragment,o),k(Et.$$.fragment,o),k(Ft.$$.fragment,o),k(Pt.$$.fragment,o),k(Ct.$$.fragment,o),k(Nt.$$.fragment,o),k(St.$$.fragment,o),k(Rt.$$.fragment,o),k(De.$$.fragment,o),k(Oe.$$.fragment,o),k(Wt.$$.fragment,o),k(Bt.$$.fragment,o),k(Gt.$$.fragment,o),k(We.$$.fragment,o),k(Be.$$.fragment,o),k(Xt.$$.fragment,o),k(Yt.$$.fragment,o),k(no.$$.fragment,o),k(Qe.$$.fragment,o),k(Ve.$$.fragment,o),k(ao.$$.fragment,o),k(so.$$.fragment,o),k(co.$$.fragment,o),k(Ge.$$.fragment,o),k(Xe.$$.fragment,o),Ya=!0)},o(o){x(l.$$.fragment,o),x(it.$$.fragment,o),x(ht.$$.fragment,o),x(ft.$$.fragment,o),x(Ee.$$.fragment,o),x(_t.$$.fragment,o),x(vt.$$.fragment,o),x(bt.$$.fragment,o),x(Pe.$$.fragment,o),x(Lt.$$.fragment,o),x(kt.$$.fragment,o),x(wt.$$.fragment,o),x(Tt.$$.fragment,o),x(Mt.$$.fragment,o),x($t.$$.fragment,o),x(Et.$$.fragment,o),x(Ft.$$.fragment,o),x(Pt.$$.fragment,o),x(Ct.$$.fragment,o),x(Nt.$$.fragment,o),x(St.$$.fragment,o),x(Rt.$$.fragment,o),x(De.$$.fragment,o),x(Oe.$$.fragment,o),x(Wt.$$.fragment,o),x(Bt.$$.fragment,o),x(Gt.$$.fragment,o),x(We.$$.fragment,o),x(Be.$$.fragment,o),x(Xt.$$.fragment,o),x(Yt.$$.fragment,o),x(no.$$.fragment,o),x(Qe.$$.fragment,o),x(Ve.$$.fragment,o),x(ao.$$.fragment,o),x(so.$$.fragment,o),x(co.$$.fragment,o),x(Ge.$$.fragment,o),x(Xe.$$.fragment,o),Ya=!1},d(o){t(m),o&&t(T),o&&t(_),w(l),o&&t(xa),o&&t(le),w(it),o&&t(wa),o&&t(Q),o&&t(Ta),o&&t(fo),o&&t(Ma),o&&t(go),o&&t($a),o&&t(_o),o&&t(za),o&&t(te),o&&t(qa),o&&t($e),o&&t(Ea),o&&t(ze),o&&t(Fa),o&&t(oe),o&&t(Pa),o&&t(ce),w(ht),o&&t(Ca),o&&t(S),w(ft),w(Ee),o&&t(Aa),o&&t(pe),w(_t),o&&t(ja),o&&t(D),w(vt),w(bt),w(Pe),o&&t(Ia),o&&t(he),w(Lt),o&&t(Na),o&&t(A),w(kt),w(wt),w(Tt),o&&t(Sa),o&&t(fe),w(Mt),o&&t(Da),o&&t(O),w($t),w(Et),o&&t(Oa),o&&t(ge),w(Ft),o&&t(Ra),o&&t(I),w(Pt),w(Ct),o&&t(Wa),o&&t(_e),w(Nt),o&&t(Ba),o&&t(J),w(St),w(Rt),w(De),w(Oe),o&&t(Ua),o&&t(ye),w(Wt),o&&t(Qa),o&&t(R),w(Bt),w(Gt),w(We),w(Be),o&&t(Va),o&&t(Le),w(Xt),o&&t(Ha),o&&t(W),w(Yt),w(no),w(Qe),w(Ve),o&&t(Ga),o&&t(xe),w(ao),o&&t(Xa),o&&t(U),w(so),w(co),w(Ge),w(Xe)}}}const Om={local:"layoutlmv3",sections:[{local:"overview",title:"Overview"},{local:"transformers.LayoutLMv3Config",title:"LayoutLMv3Config"},{local:"transformers.LayoutLMv3FeatureExtractor",title:"LayoutLMv3FeatureExtractor"},{local:"transformers.LayoutLMv3Tokenizer",title:"LayoutLMv3Tokenizer"},{local:"transformers.LayoutLMv3TokenizerFast",title:"LayoutLMv3TokenizerFast"},{local:"transformers.LayoutLMv3Processor",title:"LayoutLMv3Processor"},{local:"transformers.LayoutLMv3Model",title:"LayoutLMv3Model"},{local:"transformers.LayoutLMv3ForSequenceClassification",title:"LayoutLMv3ForSequenceClassification"},{local:"transformers.LayoutLMv3ForTokenClassification",title:"LayoutLMv3ForTokenClassification"},{local:"transformers.LayoutLMv3ForQuestionAnswering",title:"LayoutLMv3ForQuestionAnswering"}],title:"LayoutLMv3"};function Rm(q){return zm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gm extends xm{constructor(m){super();wm(this,m,Rm,Dm,Tm,{})}}export{Gm as default,Om as metadata};
