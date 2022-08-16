import{S as Fu,i as Cu,s as Pu,e as s,k as c,w as y,t as n,M as Au,c as r,d as o,m,a as i,x as b,h as a,b as l,N as ju,G as e,g,y as L,q as k,o as w,B as x,v as Iu,L as ln}from"../../chunks/vendor-hf-doc-builder.js";import{T as ws}from"../../chunks/Tip-hf-doc-builder.js";import{D as C}from"../../chunks/Docstring-hf-doc-builder.js";import{C as dn}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as oe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as rn}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Nu(q){let u,T,_,f,v;return f=new dn({props:{code:`from transformers import LayoutLMv3Model, LayoutLMv3Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){u=s("p"),T=n("Example:"),_=c(),y(f.$$.fragment)},l(d){u=r(d,"P",{});var h=i(u);T=a(h,"Example:"),h.forEach(o),_=m(d),b(f.$$.fragment,d)},m(d,h){g(d,u,h),e(u,T),g(d,_,h),L(f,d,h),v=!0},p:ln,i(d){v||(k(f.$$.fragment,d),v=!0)},o(d){w(f.$$.fragment,d),v=!1},d(d){d&&o(u),d&&o(_),x(f,d)}}}function Su(q){let u,T,_,f,v;return f=new dn({props:{code:`from transformers import LayoutLMv3FeatureExtractor
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;])</span>`}}),{c(){u=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(d){u=r(d,"P",{});var h=i(u);T=a(h,"Examples:"),h.forEach(o),_=m(d),b(f.$$.fragment,d)},m(d,h){g(d,u,h),e(u,T),g(d,_,h),L(f,d,h),v=!0},p:ln,i(d){v||(k(f.$$.fragment,d),v=!0)},o(d){w(f.$$.fragment,d),v=!1},d(d){d&&o(u),d&&o(_),x(f,d)}}}function Du(q){let u,T,_,f,v;return{c(){u=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=r(d,"P",{});var h=i(u);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var P=i(_);f=a(P,"Module"),P.forEach(o),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(d,h){g(d,u,h),e(u,T),e(u,_),e(_,f),e(u,v)},d(d){d&&o(u)}}}function Ou(q){let u,T,_,f,v;return f=new dn({props:{code:`from transformers import AutoProcessor, AutoModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){u=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(d){u=r(d,"P",{});var h=i(u);T=a(h,"Examples:"),h.forEach(o),_=m(d),b(f.$$.fragment,d)},m(d,h){g(d,u,h),e(u,T),g(d,_,h),L(f,d,h),v=!0},p:ln,i(d){v||(k(f.$$.fragment,d),v=!0)},o(d){w(f.$$.fragment,d),v=!1},d(d){d&&o(u),d&&o(_),x(f,d)}}}function Ru(q){let u,T,_,f,v;return{c(){u=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=r(d,"P",{});var h=i(u);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var P=i(_);f=a(P,"Module"),P.forEach(o),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(d,h){g(d,u,h),e(u,T),e(u,_),e(_,f),e(u,v)},d(d){d&&o(u)}}}function Wu(q){let u,T,_,f,v;return f=new dn({props:{code:`from transformers import AutoProcessor, AutoModelForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(d){u=r(d,"P",{});var h=i(u);T=a(h,"Examples:"),h.forEach(o),_=m(d),b(f.$$.fragment,d)},m(d,h){g(d,u,h),e(u,T),g(d,_,h),L(f,d,h),v=!0},p:ln,i(d){v||(k(f.$$.fragment,d),v=!0)},o(d){w(f.$$.fragment,d),v=!1},d(d){d&&o(u),d&&o(_),x(f,d)}}}function Bu(q){let u,T,_,f,v;return{c(){u=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=r(d,"P",{});var h=i(u);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var P=i(_);f=a(P,"Module"),P.forEach(o),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(d,h){g(d,u,h),e(u,T),e(u,_),e(_,f),e(u,v)},d(d){d&&o(u)}}}function Uu(q){let u,T,_,f,v;return f=new dn({props:{code:`from transformers import AutoProcessor, AutoModelForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(d){u=r(d,"P",{});var h=i(u);T=a(h,"Examples:"),h.forEach(o),_=m(d),b(f.$$.fragment,d)},m(d,h){g(d,u,h),e(u,T),g(d,_,h),L(f,d,h),v=!0},p:ln,i(d){v||(k(f.$$.fragment,d),v=!0)},o(d){w(f.$$.fragment,d),v=!1},d(d){d&&o(u),d&&o(_),x(f,d)}}}function Qu(q){let u,T,_,f,v;return{c(){u=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=r(d,"P",{});var h=i(u);T=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var P=i(_);f=a(P,"Module"),P.forEach(o),v=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(d,h){g(d,u,h),e(u,T),e(u,_),e(_,f),e(u,v)},d(d){d&&o(u)}}}function Vu(q){let u,T,_,f,v;return f=new dn({props:{code:`from transformers import AutoProcessor, AutoModelForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){u=s("p"),T=n("Examples:"),_=c(),y(f.$$.fragment)},l(d){u=r(d,"P",{});var h=i(u);T=a(h,"Examples:"),h.forEach(o),_=m(d),b(f.$$.fragment,d)},m(d,h){g(d,u,h),e(u,T),g(d,_,h),L(f,d,h),v=!0},p:ln,i(d){v||(k(f.$$.fragment,d),v=!0)},o(d){w(f.$$.fragment,d),v=!1},d(d){d&&o(u),d&&o(_),x(f,d)}}}function Hu(q){let u,T,_,f,v,d,h,P,xs,Ta,le,Te,cn,lo,Ts,mn,Ms,Ma,Q,$s,co,zs,qs,gt,Es,Fs,_t,Cs,Ps,$a,vt,As,za,yt,un,js,qa,bt,Is,Ea,V,Me,Ns,Lt,Ss,Ds,mo,pn,Os,Rs,N,Ws,kt,Bs,Us,wt,Qs,Vs,xt,Hs,Gs,Tt,Xs,Ys,Js,de,Ks,Mt,Zs,er,$t,or,tr,nr,uo,ar,po,sr,rr,ir,ho,lr,fo,dr,cr,Fa,$e,xc,Ca,ze,mr,zt,ur,pr,Pa,te,hr,go,fr,gr,_o,_r,vr,Aa,ce,qe,hn,vo,yr,fn,br,ja,S,yo,Lr,me,kr,qt,wr,xr,bo,Tr,Mr,$r,ue,zr,Et,qr,Er,Ft,Fr,Cr,Pr,Ee,Ia,pe,Fe,gn,Lo,Ar,_n,jr,Na,D,ko,Ir,vn,Nr,Sr,wo,Dr,yn,Or,Rr,Wr,ne,xo,Br,bn,Ur,Qr,Ce,Sa,he,Pe,Ln,To,Vr,kn,Hr,Da,A,Mo,Gr,F,Xr,wn,Yr,Jr,Ct,Kr,Zr,xn,ei,oi,Tn,ti,ni,Mn,ai,si,$n,ri,ii,zn,li,di,ci,$o,mi,Pt,ui,pi,hi,At,jt,fi,gi,_i,Ae,zo,vi,qn,yi,bi,It,qo,Oa,fe,je,En,Eo,Li,Fn,ki,Ra,O,Fo,wi,Co,xi,Cn,Ti,Mi,$i,Po,zi,Nt,qi,Ei,Fi,Ie,Ao,Ci,Pn,Pi,Wa,ge,Ne,An,jo,Ai,jn,ji,Ba,I,Io,Ii,In,Ni,Si,St,Dt,Di,Oi,Ri,z,Wi,Ot,Bi,Ui,Rt,Qi,Vi,Wt,Hi,Gi,Nn,Xi,Yi,Sn,Ji,Ki,Dn,Zi,el,On,ol,tl,Rn,nl,al,Wn,sl,rl,il,ae,No,ll,M,dl,Bn,cl,ml,So,Un,ul,pl,hl,Bt,fl,gl,Qn,_l,vl,Vn,yl,bl,Do,Hn,Ll,kl,wl,Gn,xl,Tl,Ut,Ml,$l,Xn,zl,ql,Yn,El,Fl,Jn,Cl,Pl,Kn,Al,jl,Zn,Il,Nl,Oo,ea,Sl,Dl,Ol,oa,Rl,Wl,Bl,ta,Ul,Ua,_e,Se,na,Ro,Ql,aa,Vl,Qa,K,Wo,Hl,Bo,Gl,Uo,Xl,Yl,Jl,H,Qo,Kl,ve,Zl,Qt,ed,od,sa,td,nd,ad,De,sd,Oe,Va,ye,Re,ra,Vo,rd,ia,id,Ha,R,Ho,ld,Go,dd,Xo,cd,md,ud,Yo,pd,Jo,hd,fd,gd,G,Ko,_d,be,vd,Vt,yd,bd,la,Ld,kd,wd,We,xd,Be,Ga,Le,Ue,da,Zo,Td,ca,Md,Xa,W,et,$d,B,zd,ot,qd,Ed,tt,Fd,Cd,nt,Pd,Ad,at,jd,Id,Nd,st,Sd,rt,Dd,Od,Rd,X,it,Wd,ke,Bd,Ht,Ud,Qd,ma,Vd,Hd,Gd,Qe,Xd,Ve,Ya,we,He,ua,lt,Yd,pa,Jd,Ja,U,dt,Kd,Z,Zd,ct,ec,oc,ha,tc,nc,fa,ac,sc,rc,mt,ic,ut,lc,dc,cc,Y,pt,mc,xe,uc,Gt,pc,hc,ga,fc,gc,_c,Ge,vc,Xe,Ka;return d=new oe({}),lo=new oe({}),vo=new oe({}),yo=new C({props:{name:"class transformers.LayoutLMv3Config",anchor:"transformers.LayoutLMv3Config",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"rel_pos_bins",val:" = 32"},{name:"max_rel_pos",val:" = 128"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"max_rel_2d_pos",val:" = 256"},{name:"has_spatial_attention_bias",val:" = True"},{name:"text_embed",val:" = True"},{name:"visual_embed",val:" = True"},{name:"input_size",val:" = 224"},{name:"num_channels",val:" = 3"},{name:"patch_size",val:" = 16"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the LayoutLMv3 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model">LayoutLMv3Model</a>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMv3Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model">LayoutLMv3Model</a>.`,name:"type_vocab_size"},{anchor:"transformers.LayoutLMv3Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/configuration_layoutlmv3.py#L40"}}),Ee=new rn({props:{anchor:"transformers.LayoutLMv3Config.example",$$slots:{default:[Nu]},$$scope:{ctx:q}}}),Lo=new oe({}),ko=new C({props:{name:"class transformers.LayoutLMv3FeatureExtractor",anchor:"transformers.LayoutLMv3FeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"apply_ocr",val:" = True"},{name:"ocr_lang",val:" = None"},{name:"tesseract_config",val:" = ''"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3FeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
Whether to apply the Tesseract OCR engine to get words + normalized bounding boxes.`,name:"apply_ocr"},{anchor:"transformers.LayoutLMv3FeatureExtractor.ocr_lang",description:`<strong>ocr_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The language, specified by its ISO code, to be used by the Tesseract OCR engine. By default, English is
used.`,name:"ocr_lang"},{anchor:"transformers.LayoutLMv3FeatureExtractor.tesseract_config",description:`<strong>tesseract_config</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Any additional custom configuration flags that are forwarded to the <code>config</code> parameter when calling
Tesseract. For example: &#x2018;&#x2014;psm 6&#x2019;.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>LayoutLMv3FeatureExtractor uses Google&#x2019;s Tesseract OCR engine under the hood.</p>

					</div>`,name:"tesseract_config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/feature_extraction_layoutlmv3.py#L81"}}),xo=new C({props:{name:"__call__",anchor:"transformers.LayoutLMv3FeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/feature_extraction_layoutlmv3.py#L147",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>words</strong> \u2014 Optional words as identified by Tesseract OCR (only when <a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"
>LayoutLMv3FeatureExtractor</a> was
initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
<li><strong>boxes</strong> \u2014 Optional bounding boxes as identified by Tesseract OCR, normalized based on the image size
(only when <a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"
>LayoutLMv3FeatureExtractor</a> was initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Ce=new rn({props:{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.example",$$slots:{default:[Su]},$$scope:{ctx:q}}}),To=new oe({}),Mo=new C({props:{name:"class transformers.LayoutLMv3Tokenizer",anchor:"transformers.LayoutLMv3Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L200"}}),zo=new C({props:{name:"__call__",anchor:"transformers.LayoutLMv3Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L547"}}),qo=new C({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv3Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L428"}}),Eo=new oe({}),Fo=new C({props:{name:"class transformers.LayoutLMv3TokenizerFast",anchor:"transformers.LayoutLMv3TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"trim_offsets",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L65"}}),Ao=new C({props:{name:"__call__",anchor:"transformers.LayoutLMv3TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L224"}}),jo=new oe({}),Io=new C({props:{name:"class transformers.LayoutLMv3Processor",anchor:"transformers.LayoutLMv3Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv3FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor">LayoutLMv3FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv3Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv3Tokenizer</code> or <code>LayoutLMv3TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a> or <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast">LayoutLMv3TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L25"}}),No=new C({props:{name:"__call__",anchor:"transformers.LayoutLMv3Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L47"}}),Ro=new oe({}),Wo=new C({props:{name:"class transformers.LayoutLMv3Model",anchor:"transformers.LayoutLMv3Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L753"}}),Qo=new C({props:{name:"forward",anchor:"transformers.LayoutLMv3Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"pixel_values",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, token_sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv3Model.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, token_sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.`,name:"bbox"},{anchor:"transformers.LayoutLMv3Model.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images. Each image is divided into patches of shape <code>(num_channels, config.patch_size, config.patch_size)</code> and the total number of patches (=<code>patch_sequence_length</code>) equals to <code>((height / config.patch_size) * (width / config.patch_size))</code>.`,name:"pixel_values"},{anchor:"transformers.LayoutLMv3Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, token_sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv3Model.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, token_sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv3Model.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, token_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv3Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv3Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, token_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv3Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv3Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv3Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L844",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),De=new ws({props:{$$slots:{default:[Du]},$$scope:{ctx:q}}}),Oe=new rn({props:{anchor:"transformers.LayoutLMv3Model.forward.example",$$slots:{default:[Ou]},$$scope:{ctx:q}}}),Vo=new oe({}),Ho=new C({props:{name:"class transformers.LayoutLMv3ForSequenceClassification",anchor:"transformers.LayoutLMv3ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1289"}}),Ko=new C({props:{name:"forward",anchor:"transformers.LayoutLMv3ForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"bbox",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images. Each image is divided into patches of shape <code>(num_channels, config.patch_size, config.patch_size)</code> and the total number of patches (=<code>patch_sequence_length</code>) equals to <code>((height / config.patch_size) * (width / config.patch_size))</code>.`,name:"pixel_values"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1301",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),We=new ws({props:{$$slots:{default:[Ru]},$$scope:{ctx:q}}}),Be=new rn({props:{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.example",$$slots:{default:[Wu]},$$scope:{ctx:q}}}),Zo=new oe({}),et=new C({props:{name:"class transformers.LayoutLMv3ForTokenClassification",anchor:"transformers.LayoutLMv3ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1041"}}),it=new C({props:{name:"forward",anchor:"transformers.LayoutLMv3ForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images. Each image is divided into patches of shape <code>(num_channels, config.patch_size, config.patch_size)</code> and the total number of patches (=<code>patch_sequence_length</code>) equals to <code>((height / config.patch_size) * (width / config.patch_size))</code>.`,name:"pixel_values"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1058",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qe=new ws({props:{$$slots:{default:[Bu]},$$scope:{ctx:q}}}),Ve=new rn({props:{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.example",$$slots:{default:[Uu]},$$scope:{ctx:q}}}),lt=new oe({}),dt=new C({props:{name:"class transformers.LayoutLMv3ForQuestionAnswering",anchor:"transformers.LayoutLMv3ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1156"}}),pt=new C({props:{name:"forward",anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"bbox",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images. Each image is divided into patches of shape <code>(num_channels, config.patch_size, config.patch_size)</code> and the total number of patches (=<code>patch_sequence_length</code>) equals to <code>((height / config.patch_size) * (width / config.patch_size))</code>.`,name:"pixel_values"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1169",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ge=new ws({props:{$$slots:{default:[Qu]},$$scope:{ctx:q}}}),Xe=new rn({props:{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.example",$$slots:{default:[Vu]},$$scope:{ctx:q}}}),{c(){u=s("meta"),T=c(),_=s("h1"),f=s("a"),v=s("span"),y(d.$$.fragment),h=c(),P=s("span"),xs=n("LayoutLMv3"),Ta=c(),le=s("h2"),Te=s("a"),cn=s("span"),y(lo.$$.fragment),Ts=c(),mn=s("span"),Ms=n("Overview"),Ma=c(),Q=s("p"),$s=n("The LayoutLMv3 model was proposed in "),co=s("a"),zs=n("LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),qs=n(` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies `),gt=s("a"),Es=n("LayoutLMv2"),Fs=n(" by using patch embeddings (as in "),_t=s("a"),Cs=n("ViT"),Ps=n(`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),$a=c(),vt=s("p"),As=n("The abstract from the paper is the following:"),za=c(),yt=s("p"),un=s("em"),js=n("Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),qa=c(),bt=s("p"),Is=n("Tips:"),Ea=c(),V=s("ul"),Me=s("li"),Ns=n("In terms of data processing, LayoutLMv3 is identical to its predecessor "),Lt=s("a"),Ss=n("LayoutLMv2"),Ds=n(", except that:"),mo=s("ul"),pn=s("li"),Os=n("images need to be resized and normalized with channels in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),Rs=c(),N=s("li"),Ws=n(`text is tokenized using byte-pair encoding (BPE), as opposed to WordPiece.
Due to these differences in data preprocessing, one can use `),kt=s("a"),Bs=n("LayoutLMv3Processor"),Us=n(" which internally combines a "),wt=s("a"),Qs=n("LayoutLMv3FeatureExtractor"),Vs=n(" (for the image modality) and a "),xt=s("a"),Hs=n("LayoutLMv3Tokenizer"),Gs=n("/"),Tt=s("a"),Xs=n("LayoutLMv3TokenizerFast"),Ys=n(" (for the text modality) to prepare all data for the model."),Js=c(),de=s("li"),Ks=n("Regarding usage of "),Mt=s("a"),Zs=n("LayoutLMv3Processor"),er=n(", we refer to the "),$t=s("a"),or=n("usage guide"),tr=n(" of its predecessor."),nr=c(),uo=s("li"),ar=n("Demo notebooks for LayoutLMv3 can be found "),po=s("a"),sr=n("here"),rr=n("."),ir=c(),ho=s("li"),lr=n("Demo scripts can be found "),fo=s("a"),dr=n("here"),cr=n("."),Fa=c(),$e=s("img"),Ca=c(),ze=s("small"),mr=n("LayoutLMv3 architecture. Taken from the "),zt=s("a"),ur=n("original paper"),pr=n("."),Pa=c(),te=s("p"),hr=n("This model was contributed by "),go=s("a"),fr=n("nielsr"),gr=n(". The original code can be found "),_o=s("a"),_r=n("here"),vr=n("."),Aa=c(),ce=s("h2"),qe=s("a"),hn=s("span"),y(vo.$$.fragment),yr=c(),fn=s("span"),br=n("LayoutLMv3Config"),ja=c(),S=s("div"),y(yo.$$.fragment),Lr=c(),me=s("p"),kr=n("This is the configuration class to store the configuration of a "),qt=s("a"),wr=n("LayoutLMv3Model"),xr=n(`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),bo=s("a"),Tr=n("microsoft/layoutlmv3-base"),Mr=n(" architecture."),$r=c(),ue=s("p"),zr=n("Configuration objects inherit from "),Et=s("a"),qr=n("PretrainedConfig"),Er=n(` and can be used to control the model outputs. Read the
documentation from `),Ft=s("a"),Fr=n("PretrainedConfig"),Cr=n(" for more information."),Pr=c(),y(Ee.$$.fragment),Ia=c(),pe=s("h2"),Fe=s("a"),gn=s("span"),y(Lo.$$.fragment),Ar=c(),_n=s("span"),jr=n("LayoutLMv3FeatureExtractor"),Na=c(),D=s("div"),y(ko.$$.fragment),Ir=c(),vn=s("p"),Nr=n(`Constructs a LayoutLMv3 feature extractor. This can be used to resize + normalize document images, as well as to
apply OCR on them in order to get a list of words and normalized bounding boxes.`),Sr=c(),wo=s("p"),Dr=n("This feature extractor inherits from "),yn=s("code"),Or=n("PreTrainedFeatureExtractor()"),Rr=n(` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),Wr=c(),ne=s("div"),y(xo.$$.fragment),Br=c(),bn=s("p"),Ur=n("Main method to prepare for the model one or several image(s)."),Qr=c(),y(Ce.$$.fragment),Sa=c(),he=s("h2"),Pe=s("a"),Ln=s("span"),y(To.$$.fragment),Vr=c(),kn=s("span"),Hr=n("LayoutLMv3Tokenizer"),Da=c(),A=s("div"),y(Mo.$$.fragment),Gr=c(),F=s("p"),Xr=n("Construct a LayoutLMv3 tokenizer. Based on "),wn=s("code"),Yr=n("RoBERTatokenizer"),Jr=n(` (Byte Pair Encoding or BPE).
`),Ct=s("a"),Kr=n("LayoutLMv3Tokenizer"),Zr=n(` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),xn=s("code"),ei=n("input_ids"),oi=n(", "),Tn=s("code"),ti=n("attention_mask"),ni=n(", "),Mn=s("code"),ai=n("token_type_ids"),si=n(", "),$n=s("code"),ri=n("bbox"),ii=n(", and optional "),zn=s("code"),li=n("labels"),di=n(` (for token
classification).`),ci=c(),$o=s("p"),mi=n("This tokenizer inherits from "),Pt=s("a"),ui=n("PreTrainedTokenizer"),pi=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),hi=c(),At=s("p"),jt=s("a"),fi=n("LayoutLMv3Tokenizer"),gi=n(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),_i=c(),Ae=s("div"),y(zo.$$.fragment),vi=c(),qn=s("p"),yi=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),bi=c(),It=s("div"),y(qo.$$.fragment),Oa=c(),fe=s("h2"),je=s("a"),En=s("span"),y(Eo.$$.fragment),Li=c(),Fn=s("span"),ki=n("LayoutLMv3TokenizerFast"),Ra=c(),O=s("div"),y(Fo.$$.fragment),wi=c(),Co=s("p"),xi=n("Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),Cn=s("em"),Ti=n("tokenizers"),Mi=n(" library). Based on BPE."),$i=c(),Po=s("p"),zi=n("This tokenizer inherits from "),Nt=s("a"),qi=n("PreTrainedTokenizerFast"),Ei=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Fi=c(),Ie=s("div"),y(Ao.$$.fragment),Ci=c(),Pn=s("p"),Pi=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Wa=c(),ge=s("h2"),Ne=s("a"),An=s("span"),y(jo.$$.fragment),Ai=c(),jn=s("span"),ji=n("LayoutLMv3Processor"),Ba=c(),I=s("div"),y(Io.$$.fragment),Ii=c(),In=s("p"),Ni=n(`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),Si=c(),St=s("p"),Dt=s("a"),Di=n("LayoutLMv3Processor"),Oi=n(" offers all the functionalities you need to prepare data for the model."),Ri=c(),z=s("p"),Wi=n("It first uses "),Ot=s("a"),Bi=n("LayoutLMv3FeatureExtractor"),Ui=n(` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),Rt=s("a"),Qi=n("LayoutLMv3Tokenizer"),Vi=n(` or
`),Wt=s("a"),Hi=n("LayoutLMv3TokenizerFast"),Gi=n(", which turns the words and bounding boxes into token-level "),Nn=s("code"),Xi=n("input_ids"),Yi=n(`,
`),Sn=s("code"),Ji=n("attention_mask"),Ki=n(", "),Dn=s("code"),Zi=n("token_type_ids"),el=n(", "),On=s("code"),ol=n("bbox"),tl=n(". Optionally, one can provide integer "),Rn=s("code"),nl=n("word_labels"),al=n(`, which are turned
into token-level `),Wn=s("code"),sl=n("labels"),rl=n(" for token classification tasks (such as FUNSD, CORD)."),il=c(),ae=s("div"),y(No.$$.fragment),ll=c(),M=s("p"),dl=n("This method first forwards the "),Bn=s("code"),cl=n("images"),ml=n(" argument to "),So=s("a"),Un=s("strong"),ul=n("call"),pl=n("()"),hl=n(`. In case
`),Bt=s("a"),fl=n("LayoutLMv3FeatureExtractor"),gl=n(" was initialized with "),Qn=s("code"),_l=n("apply_ocr"),vl=n(" set to "),Vn=s("code"),yl=n("True"),bl=n(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),Do=s("a"),Hn=s("strong"),Ll=n("call"),kl=n("()"),wl=n(` and returns the output,
together with resized and normalized `),Gn=s("code"),xl=n("pixel_values"),Tl=n(". In case "),Ut=s("a"),Ml=n("LayoutLMv3FeatureExtractor"),$l=n(` was initialized
with `),Xn=s("code"),zl=n("apply_ocr"),ql=n(" set to "),Yn=s("code"),El=n("False"),Fl=n(", it passes the words ("),Jn=s("code"),Cl=n("text"),Pl=n("/`"),Kn=s("code"),Al=n("text_pair"),jl=n(") and "),Zn=s("code"),Il=n("boxes"),Nl=n(` specified by the user
along with the additional arguments to `),Oo=s("a"),ea=s("strong"),Sl=n("call"),Dl=n("()"),Ol=n(` and returns the output, together with
resized and normalized `),oa=s("code"),Rl=n("pixel_values"),Wl=n("."),Bl=c(),ta=s("p"),Ul=n("Please refer to the docstring of the above two methods for more information."),Ua=c(),_e=s("h2"),Se=s("a"),na=s("span"),y(Ro.$$.fragment),Ql=c(),aa=s("span"),Vl=n("LayoutLMv3Model"),Qa=c(),K=s("div"),y(Wo.$$.fragment),Hl=c(),Bo=s("p"),Gl=n(`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Uo=s("a"),Xl=n("torch.nn.Module"),Yl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Jl=c(),H=s("div"),y(Qo.$$.fragment),Kl=c(),ve=s("p"),Zl=n("The "),Qt=s("a"),ed=n("LayoutLMv3Model"),od=n(" forward method, overrides the "),sa=s("code"),td=n("__call__"),nd=n(" special method."),ad=c(),y(De.$$.fragment),sd=c(),y(Oe.$$.fragment),Va=c(),ye=s("h2"),Re=s("a"),ra=s("span"),y(Vo.$$.fragment),rd=c(),ia=s("span"),id=n("LayoutLMv3ForSequenceClassification"),Ha=c(),R=s("div"),y(Ho.$$.fragment),ld=c(),Go=s("p"),dd=n(`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Xo=s("a"),cd=n("RVL-CDIP"),md=n(" dataset."),ud=c(),Yo=s("p"),pd=n("This model is a PyTorch "),Jo=s("a"),hd=n("torch.nn.Module"),fd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),gd=c(),G=s("div"),y(Ko.$$.fragment),_d=c(),be=s("p"),vd=n("The "),Vt=s("a"),yd=n("LayoutLMv3ForSequenceClassification"),bd=n(" forward method, overrides the "),la=s("code"),Ld=n("__call__"),kd=n(" special method."),wd=c(),y(We.$$.fragment),xd=c(),y(Be.$$.fragment),Ga=c(),Le=s("h2"),Ue=s("a"),da=s("span"),y(Zo.$$.fragment),Td=c(),ca=s("span"),Md=n("LayoutLMv3ForTokenClassification"),Xa=c(),W=s("div"),y(et.$$.fragment),$d=c(),B=s("p"),zd=n(`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),ot=s("a"),qd=n("FUNSD"),Ed=n(`,
`),tt=s("a"),Fd=n("SROIE"),Cd=n(", "),nt=s("a"),Pd=n("CORD"),Ad=n(` and
`),at=s("a"),jd=n("Kleister-NDA"),Id=n("."),Nd=c(),st=s("p"),Sd=n("This model is a PyTorch "),rt=s("a"),Dd=n("torch.nn.Module"),Od=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Rd=c(),X=s("div"),y(it.$$.fragment),Wd=c(),ke=s("p"),Bd=n("The "),Ht=s("a"),Ud=n("LayoutLMv3ForTokenClassification"),Qd=n(" forward method, overrides the "),ma=s("code"),Vd=n("__call__"),Hd=n(" special method."),Gd=c(),y(Qe.$$.fragment),Xd=c(),y(Ve.$$.fragment),Ya=c(),we=s("h2"),He=s("a"),ua=s("span"),y(lt.$$.fragment),Yd=c(),pa=s("span"),Jd=n("LayoutLMv3ForQuestionAnswering"),Ja=c(),U=s("div"),y(dt.$$.fragment),Kd=c(),Z=s("p"),Zd=n(`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),ct=s("a"),ec=n("DocVQA"),oc=n(` (a linear layer on top of the text part of the hidden-states output to
compute `),ha=s("code"),tc=n("span start logits"),nc=n(" and "),fa=s("code"),ac=n("span end logits"),sc=n(")."),rc=c(),mt=s("p"),ic=n("This model is a PyTorch "),ut=s("a"),lc=n("torch.nn.Module"),dc=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cc=c(),Y=s("div"),y(pt.$$.fragment),mc=c(),xe=s("p"),uc=n("The "),Gt=s("a"),pc=n("LayoutLMv3ForQuestionAnswering"),hc=n(" forward method, overrides the "),ga=s("code"),fc=n("__call__"),gc=n(" special method."),_c=c(),y(Ge.$$.fragment),vc=c(),y(Xe.$$.fragment),this.h()},l(t){const p=Au('[data-svelte="svelte-1phssyn"]',document.head);u=r(p,"META",{name:!0,content:!0}),p.forEach(o),T=m(t),_=r(t,"H1",{class:!0});var ht=i(_);f=r(ht,"A",{id:!0,class:!0,href:!0});var _a=i(f);v=r(_a,"SPAN",{});var va=i(v);b(d.$$.fragment,va),va.forEach(o),_a.forEach(o),h=m(ht),P=r(ht,"SPAN",{});var ya=i(P);xs=a(ya,"LayoutLMv3"),ya.forEach(o),ht.forEach(o),Ta=m(t),le=r(t,"H2",{class:!0});var ft=i(le);Te=r(ft,"A",{id:!0,class:!0,href:!0});var ba=i(Te);cn=r(ba,"SPAN",{});var La=i(cn);b(lo.$$.fragment,La),La.forEach(o),ba.forEach(o),Ts=m(ft),mn=r(ft,"SPAN",{});var ka=i(mn);Ms=a(ka,"Overview"),ka.forEach(o),ft.forEach(o),Ma=m(t),Q=r(t,"P",{});var ee=i(Q);$s=a(ee,"The LayoutLMv3 model was proposed in "),co=r(ee,"A",{href:!0,rel:!0});var wa=i(co);zs=a(wa,"LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),wa.forEach(o),qs=a(ee,` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies `),gt=r(ee,"A",{href:!0});var Tc=i(gt);Es=a(Tc,"LayoutLMv2"),Tc.forEach(o),Fs=a(ee," by using patch embeddings (as in "),_t=r(ee,"A",{href:!0});var Mc=i(_t);Cs=a(Mc,"ViT"),Mc.forEach(o),Ps=a(ee,`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),ee.forEach(o),$a=m(t),vt=r(t,"P",{});var $c=i(vt);As=a($c,"The abstract from the paper is the following:"),$c.forEach(o),za=m(t),yt=r(t,"P",{});var zc=i(yt);un=r(zc,"EM",{});var qc=i(un);js=a(qc,"Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),qc.forEach(o),zc.forEach(o),qa=m(t),bt=r(t,"P",{});var Ec=i(bt);Is=a(Ec,"Tips:"),Ec.forEach(o),Ea=m(t),V=r(t,"UL",{});var Ye=i(V);Me=r(Ye,"LI",{});var xa=i(Me);Ns=a(xa,"In terms of data processing, LayoutLMv3 is identical to its predecessor "),Lt=r(xa,"A",{href:!0});var Fc=i(Lt);Ss=a(Fc,"LayoutLMv2"),Fc.forEach(o),Ds=a(xa,", except that:"),mo=r(xa,"UL",{});var Za=i(mo);pn=r(Za,"LI",{});var Cc=i(pn);Os=a(Cc,"images need to be resized and normalized with channels in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),Cc.forEach(o),Rs=m(Za),N=r(Za,"LI",{});var se=i(N);Ws=a(se,`text is tokenized using byte-pair encoding (BPE), as opposed to WordPiece.
Due to these differences in data preprocessing, one can use `),kt=r(se,"A",{href:!0});var Pc=i(kt);Bs=a(Pc,"LayoutLMv3Processor"),Pc.forEach(o),Us=a(se," which internally combines a "),wt=r(se,"A",{href:!0});var Ac=i(wt);Qs=a(Ac,"LayoutLMv3FeatureExtractor"),Ac.forEach(o),Vs=a(se," (for the image modality) and a "),xt=r(se,"A",{href:!0});var jc=i(xt);Hs=a(jc,"LayoutLMv3Tokenizer"),jc.forEach(o),Gs=a(se,"/"),Tt=r(se,"A",{href:!0});var Ic=i(Tt);Xs=a(Ic,"LayoutLMv3TokenizerFast"),Ic.forEach(o),Ys=a(se," (for the text modality) to prepare all data for the model."),se.forEach(o),Za.forEach(o),xa.forEach(o),Js=m(Ye),de=r(Ye,"LI",{});var Xt=i(de);Ks=a(Xt,"Regarding usage of "),Mt=r(Xt,"A",{href:!0});var Nc=i(Mt);Zs=a(Nc,"LayoutLMv3Processor"),Nc.forEach(o),er=a(Xt,", we refer to the "),$t=r(Xt,"A",{href:!0});var Sc=i($t);or=a(Sc,"usage guide"),Sc.forEach(o),tr=a(Xt," of its predecessor."),Xt.forEach(o),nr=m(Ye),uo=r(Ye,"LI",{});var es=i(uo);ar=a(es,"Demo notebooks for LayoutLMv3 can be found "),po=r(es,"A",{href:!0,rel:!0});var Dc=i(po);sr=a(Dc,"here"),Dc.forEach(o),rr=a(es,"."),es.forEach(o),ir=m(Ye),ho=r(Ye,"LI",{});var os=i(ho);lr=a(os,"Demo scripts can be found "),fo=r(os,"A",{href:!0,rel:!0});var Oc=i(fo);dr=a(Oc,"here"),Oc.forEach(o),cr=a(os,"."),os.forEach(o),Ye.forEach(o),Fa=m(t),$e=r(t,"IMG",{src:!0,alt:!0,width:!0}),Ca=m(t),ze=r(t,"SMALL",{});var ts=i(ze);mr=a(ts,"LayoutLMv3 architecture. Taken from the "),zt=r(ts,"A",{href:!0});var Rc=i(zt);ur=a(Rc,"original paper"),Rc.forEach(o),pr=a(ts,"."),ts.forEach(o),Pa=m(t),te=r(t,"P",{});var Yt=i(te);hr=a(Yt,"This model was contributed by "),go=r(Yt,"A",{href:!0,rel:!0});var Wc=i(go);fr=a(Wc,"nielsr"),Wc.forEach(o),gr=a(Yt,". The original code can be found "),_o=r(Yt,"A",{href:!0,rel:!0});var Bc=i(_o);_r=a(Bc,"here"),Bc.forEach(o),vr=a(Yt,"."),Yt.forEach(o),Aa=m(t),ce=r(t,"H2",{class:!0});var ns=i(ce);qe=r(ns,"A",{id:!0,class:!0,href:!0});var Uc=i(qe);hn=r(Uc,"SPAN",{});var Qc=i(hn);b(vo.$$.fragment,Qc),Qc.forEach(o),Uc.forEach(o),yr=m(ns),fn=r(ns,"SPAN",{});var Vc=i(fn);br=a(Vc,"LayoutLMv3Config"),Vc.forEach(o),ns.forEach(o),ja=m(t),S=r(t,"DIV",{class:!0});var Je=i(S);b(yo.$$.fragment,Je),Lr=m(Je),me=r(Je,"P",{});var Jt=i(me);kr=a(Jt,"This is the configuration class to store the configuration of a "),qt=r(Jt,"A",{href:!0});var Hc=i(qt);wr=a(Hc,"LayoutLMv3Model"),Hc.forEach(o),xr=a(Jt,`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),bo=r(Jt,"A",{href:!0,rel:!0});var Gc=i(bo);Tr=a(Gc,"microsoft/layoutlmv3-base"),Gc.forEach(o),Mr=a(Jt," architecture."),Jt.forEach(o),$r=m(Je),ue=r(Je,"P",{});var Kt=i(ue);zr=a(Kt,"Configuration objects inherit from "),Et=r(Kt,"A",{href:!0});var Xc=i(Et);qr=a(Xc,"PretrainedConfig"),Xc.forEach(o),Er=a(Kt,` and can be used to control the model outputs. Read the
documentation from `),Ft=r(Kt,"A",{href:!0});var Yc=i(Ft);Fr=a(Yc,"PretrainedConfig"),Yc.forEach(o),Cr=a(Kt," for more information."),Kt.forEach(o),Pr=m(Je),b(Ee.$$.fragment,Je),Je.forEach(o),Ia=m(t),pe=r(t,"H2",{class:!0});var as=i(pe);Fe=r(as,"A",{id:!0,class:!0,href:!0});var Jc=i(Fe);gn=r(Jc,"SPAN",{});var Kc=i(gn);b(Lo.$$.fragment,Kc),Kc.forEach(o),Jc.forEach(o),Ar=m(as),_n=r(as,"SPAN",{});var Zc=i(_n);jr=a(Zc,"LayoutLMv3FeatureExtractor"),Zc.forEach(o),as.forEach(o),Na=m(t),D=r(t,"DIV",{class:!0});var Ke=i(D);b(ko.$$.fragment,Ke),Ir=m(Ke),vn=r(Ke,"P",{});var em=i(vn);Nr=a(em,`Constructs a LayoutLMv3 feature extractor. This can be used to resize + normalize document images, as well as to
apply OCR on them in order to get a list of words and normalized bounding boxes.`),em.forEach(o),Sr=m(Ke),wo=r(Ke,"P",{});var ss=i(wo);Dr=a(ss,"This feature extractor inherits from "),yn=r(ss,"CODE",{});var om=i(yn);Or=a(om,"PreTrainedFeatureExtractor()"),om.forEach(o),Rr=a(ss,` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),ss.forEach(o),Wr=m(Ke),ne=r(Ke,"DIV",{class:!0});var Zt=i(ne);b(xo.$$.fragment,Zt),Br=m(Zt),bn=r(Zt,"P",{});var tm=i(bn);Ur=a(tm,"Main method to prepare for the model one or several image(s)."),tm.forEach(o),Qr=m(Zt),b(Ce.$$.fragment,Zt),Zt.forEach(o),Ke.forEach(o),Sa=m(t),he=r(t,"H2",{class:!0});var rs=i(he);Pe=r(rs,"A",{id:!0,class:!0,href:!0});var nm=i(Pe);Ln=r(nm,"SPAN",{});var am=i(Ln);b(To.$$.fragment,am),am.forEach(o),nm.forEach(o),Vr=m(rs),kn=r(rs,"SPAN",{});var sm=i(kn);Hr=a(sm,"LayoutLMv3Tokenizer"),sm.forEach(o),rs.forEach(o),Da=m(t),A=r(t,"DIV",{class:!0});var J=i(A);b(Mo.$$.fragment,J),Gr=m(J),F=r(J,"P",{});var j=i(F);Xr=a(j,"Construct a LayoutLMv3 tokenizer. Based on "),wn=r(j,"CODE",{});var rm=i(wn);Yr=a(rm,"RoBERTatokenizer"),rm.forEach(o),Jr=a(j,` (Byte Pair Encoding or BPE).
`),Ct=r(j,"A",{href:!0});var im=i(Ct);Kr=a(im,"LayoutLMv3Tokenizer"),im.forEach(o),Zr=a(j,` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),xn=r(j,"CODE",{});var lm=i(xn);ei=a(lm,"input_ids"),lm.forEach(o),oi=a(j,", "),Tn=r(j,"CODE",{});var dm=i(Tn);ti=a(dm,"attention_mask"),dm.forEach(o),ni=a(j,", "),Mn=r(j,"CODE",{});var cm=i(Mn);ai=a(cm,"token_type_ids"),cm.forEach(o),si=a(j,", "),$n=r(j,"CODE",{});var mm=i($n);ri=a(mm,"bbox"),mm.forEach(o),ii=a(j,", and optional "),zn=r(j,"CODE",{});var um=i(zn);li=a(um,"labels"),um.forEach(o),di=a(j,` (for token
classification).`),j.forEach(o),ci=m(J),$o=r(J,"P",{});var is=i($o);mi=a(is,"This tokenizer inherits from "),Pt=r(is,"A",{href:!0});var pm=i(Pt);ui=a(pm,"PreTrainedTokenizer"),pm.forEach(o),pi=a(is,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),is.forEach(o),hi=m(J),At=r(J,"P",{});var yc=i(At);jt=r(yc,"A",{href:!0});var hm=i(jt);fi=a(hm,"LayoutLMv3Tokenizer"),hm.forEach(o),gi=a(yc,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),yc.forEach(o),_i=m(J),Ae=r(J,"DIV",{class:!0});var ls=i(Ae);b(zo.$$.fragment,ls),vi=m(ls),qn=r(ls,"P",{});var fm=i(qn);yi=a(fm,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),fm.forEach(o),ls.forEach(o),bi=m(J),It=r(J,"DIV",{class:!0});var gm=i(It);b(qo.$$.fragment,gm),gm.forEach(o),J.forEach(o),Oa=m(t),fe=r(t,"H2",{class:!0});var ds=i(fe);je=r(ds,"A",{id:!0,class:!0,href:!0});var _m=i(je);En=r(_m,"SPAN",{});var vm=i(En);b(Eo.$$.fragment,vm),vm.forEach(o),_m.forEach(o),Li=m(ds),Fn=r(ds,"SPAN",{});var ym=i(Fn);ki=a(ym,"LayoutLMv3TokenizerFast"),ym.forEach(o),ds.forEach(o),Ra=m(t),O=r(t,"DIV",{class:!0});var Ze=i(O);b(Fo.$$.fragment,Ze),wi=m(Ze),Co=r(Ze,"P",{});var cs=i(Co);xi=a(cs,"Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),Cn=r(cs,"EM",{});var bm=i(Cn);Ti=a(bm,"tokenizers"),bm.forEach(o),Mi=a(cs," library). Based on BPE."),cs.forEach(o),$i=m(Ze),Po=r(Ze,"P",{});var ms=i(Po);zi=a(ms,"This tokenizer inherits from "),Nt=r(ms,"A",{href:!0});var Lm=i(Nt);qi=a(Lm,"PreTrainedTokenizerFast"),Lm.forEach(o),Ei=a(ms,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ms.forEach(o),Fi=m(Ze),Ie=r(Ze,"DIV",{class:!0});var us=i(Ie);b(Ao.$$.fragment,us),Ci=m(us),Pn=r(us,"P",{});var km=i(Pn);Pi=a(km,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),km.forEach(o),us.forEach(o),Ze.forEach(o),Wa=m(t),ge=r(t,"H2",{class:!0});var ps=i(ge);Ne=r(ps,"A",{id:!0,class:!0,href:!0});var wm=i(Ne);An=r(wm,"SPAN",{});var xm=i(An);b(jo.$$.fragment,xm),xm.forEach(o),wm.forEach(o),Ai=m(ps),jn=r(ps,"SPAN",{});var Tm=i(jn);ji=a(Tm,"LayoutLMv3Processor"),Tm.forEach(o),ps.forEach(o),Ba=m(t),I=r(t,"DIV",{class:!0});var re=i(I);b(Io.$$.fragment,re),Ii=m(re),In=r(re,"P",{});var Mm=i(In);Ni=a(Mm,`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),Mm.forEach(o),Si=m(re),St=r(re,"P",{});var bc=i(St);Dt=r(bc,"A",{href:!0});var $m=i(Dt);Di=a($m,"LayoutLMv3Processor"),$m.forEach(o),Oi=a(bc," offers all the functionalities you need to prepare data for the model."),bc.forEach(o),Ri=m(re),z=r(re,"P",{});var E=i(z);Wi=a(E,"It first uses "),Ot=r(E,"A",{href:!0});var zm=i(Ot);Bi=a(zm,"LayoutLMv3FeatureExtractor"),zm.forEach(o),Ui=a(E,` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),Rt=r(E,"A",{href:!0});var qm=i(Rt);Qi=a(qm,"LayoutLMv3Tokenizer"),qm.forEach(o),Vi=a(E,` or
`),Wt=r(E,"A",{href:!0});var Em=i(Wt);Hi=a(Em,"LayoutLMv3TokenizerFast"),Em.forEach(o),Gi=a(E,", which turns the words and bounding boxes into token-level "),Nn=r(E,"CODE",{});var Fm=i(Nn);Xi=a(Fm,"input_ids"),Fm.forEach(o),Yi=a(E,`,
`),Sn=r(E,"CODE",{});var Cm=i(Sn);Ji=a(Cm,"attention_mask"),Cm.forEach(o),Ki=a(E,", "),Dn=r(E,"CODE",{});var Pm=i(Dn);Zi=a(Pm,"token_type_ids"),Pm.forEach(o),el=a(E,", "),On=r(E,"CODE",{});var Am=i(On);ol=a(Am,"bbox"),Am.forEach(o),tl=a(E,". Optionally, one can provide integer "),Rn=r(E,"CODE",{});var jm=i(Rn);nl=a(jm,"word_labels"),jm.forEach(o),al=a(E,`, which are turned
into token-level `),Wn=r(E,"CODE",{});var Im=i(Wn);sl=a(Im,"labels"),Im.forEach(o),rl=a(E," for token classification tasks (such as FUNSD, CORD)."),E.forEach(o),il=m(re),ae=r(re,"DIV",{class:!0});var en=i(ae);b(No.$$.fragment,en),ll=m(en),M=r(en,"P",{});var $=i(M);dl=a($,"This method first forwards the "),Bn=r($,"CODE",{});var Nm=i(Bn);cl=a(Nm,"images"),Nm.forEach(o),ml=a($," argument to "),So=r($,"A",{href:!0});var Lc=i(So);Un=r(Lc,"STRONG",{});var Sm=i(Un);ul=a(Sm,"call"),Sm.forEach(o),pl=a(Lc,"()"),Lc.forEach(o),hl=a($,`. In case
`),Bt=r($,"A",{href:!0});var Dm=i(Bt);fl=a(Dm,"LayoutLMv3FeatureExtractor"),Dm.forEach(o),gl=a($," was initialized with "),Qn=r($,"CODE",{});var Om=i(Qn);_l=a(Om,"apply_ocr"),Om.forEach(o),vl=a($," set to "),Vn=r($,"CODE",{});var Rm=i(Vn);yl=a(Rm,"True"),Rm.forEach(o),bl=a($,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),Do=r($,"A",{href:!0});var kc=i(Do);Hn=r(kc,"STRONG",{});var Wm=i(Hn);Ll=a(Wm,"call"),Wm.forEach(o),kl=a(kc,"()"),kc.forEach(o),wl=a($,` and returns the output,
together with resized and normalized `),Gn=r($,"CODE",{});var Bm=i(Gn);xl=a(Bm,"pixel_values"),Bm.forEach(o),Tl=a($,". In case "),Ut=r($,"A",{href:!0});var Um=i(Ut);Ml=a(Um,"LayoutLMv3FeatureExtractor"),Um.forEach(o),$l=a($,` was initialized
with `),Xn=r($,"CODE",{});var Qm=i(Xn);zl=a(Qm,"apply_ocr"),Qm.forEach(o),ql=a($," set to "),Yn=r($,"CODE",{});var Vm=i(Yn);El=a(Vm,"False"),Vm.forEach(o),Fl=a($,", it passes the words ("),Jn=r($,"CODE",{});var Hm=i(Jn);Cl=a(Hm,"text"),Hm.forEach(o),Pl=a($,"/`"),Kn=r($,"CODE",{});var Gm=i(Kn);Al=a(Gm,"text_pair"),Gm.forEach(o),jl=a($,") and "),Zn=r($,"CODE",{});var Xm=i(Zn);Il=a(Xm,"boxes"),Xm.forEach(o),Nl=a($,` specified by the user
along with the additional arguments to `),Oo=r($,"A",{href:!0});var wc=i(Oo);ea=r(wc,"STRONG",{});var Ym=i(ea);Sl=a(Ym,"call"),Ym.forEach(o),Dl=a(wc,"()"),wc.forEach(o),Ol=a($,` and returns the output, together with
resized and normalized `),oa=r($,"CODE",{});var Jm=i(oa);Rl=a(Jm,"pixel_values"),Jm.forEach(o),Wl=a($,"."),$.forEach(o),Bl=m(en),ta=r(en,"P",{});var Km=i(ta);Ul=a(Km,"Please refer to the docstring of the above two methods for more information."),Km.forEach(o),en.forEach(o),re.forEach(o),Ua=m(t),_e=r(t,"H2",{class:!0});var hs=i(_e);Se=r(hs,"A",{id:!0,class:!0,href:!0});var Zm=i(Se);na=r(Zm,"SPAN",{});var eu=i(na);b(Ro.$$.fragment,eu),eu.forEach(o),Zm.forEach(o),Ql=m(hs),aa=r(hs,"SPAN",{});var ou=i(aa);Vl=a(ou,"LayoutLMv3Model"),ou.forEach(o),hs.forEach(o),Qa=m(t),K=r(t,"DIV",{class:!0});var on=i(K);b(Wo.$$.fragment,on),Hl=m(on),Bo=r(on,"P",{});var fs=i(Bo);Gl=a(fs,`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Uo=r(fs,"A",{href:!0,rel:!0});var tu=i(Uo);Xl=a(tu,"torch.nn.Module"),tu.forEach(o),Yl=a(fs,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fs.forEach(o),Jl=m(on),H=r(on,"DIV",{class:!0});var eo=i(H);b(Qo.$$.fragment,eo),Kl=m(eo),ve=r(eo,"P",{});var tn=i(ve);Zl=a(tn,"The "),Qt=r(tn,"A",{href:!0});var nu=i(Qt);ed=a(nu,"LayoutLMv3Model"),nu.forEach(o),od=a(tn," forward method, overrides the "),sa=r(tn,"CODE",{});var au=i(sa);td=a(au,"__call__"),au.forEach(o),nd=a(tn," special method."),tn.forEach(o),ad=m(eo),b(De.$$.fragment,eo),sd=m(eo),b(Oe.$$.fragment,eo),eo.forEach(o),on.forEach(o),Va=m(t),ye=r(t,"H2",{class:!0});var gs=i(ye);Re=r(gs,"A",{id:!0,class:!0,href:!0});var su=i(Re);ra=r(su,"SPAN",{});var ru=i(ra);b(Vo.$$.fragment,ru),ru.forEach(o),su.forEach(o),rd=m(gs),ia=r(gs,"SPAN",{});var iu=i(ia);id=a(iu,"LayoutLMv3ForSequenceClassification"),iu.forEach(o),gs.forEach(o),Ha=m(t),R=r(t,"DIV",{class:!0});var oo=i(R);b(Ho.$$.fragment,oo),ld=m(oo),Go=r(oo,"P",{});var _s=i(Go);dd=a(_s,`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Xo=r(_s,"A",{href:!0,rel:!0});var lu=i(Xo);cd=a(lu,"RVL-CDIP"),lu.forEach(o),md=a(_s," dataset."),_s.forEach(o),ud=m(oo),Yo=r(oo,"P",{});var vs=i(Yo);pd=a(vs,"This model is a PyTorch "),Jo=r(vs,"A",{href:!0,rel:!0});var du=i(Jo);hd=a(du,"torch.nn.Module"),du.forEach(o),fd=a(vs,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),vs.forEach(o),gd=m(oo),G=r(oo,"DIV",{class:!0});var to=i(G);b(Ko.$$.fragment,to),_d=m(to),be=r(to,"P",{});var nn=i(be);vd=a(nn,"The "),Vt=r(nn,"A",{href:!0});var cu=i(Vt);yd=a(cu,"LayoutLMv3ForSequenceClassification"),cu.forEach(o),bd=a(nn," forward method, overrides the "),la=r(nn,"CODE",{});var mu=i(la);Ld=a(mu,"__call__"),mu.forEach(o),kd=a(nn," special method."),nn.forEach(o),wd=m(to),b(We.$$.fragment,to),xd=m(to),b(Be.$$.fragment,to),to.forEach(o),oo.forEach(o),Ga=m(t),Le=r(t,"H2",{class:!0});var ys=i(Le);Ue=r(ys,"A",{id:!0,class:!0,href:!0});var uu=i(Ue);da=r(uu,"SPAN",{});var pu=i(da);b(Zo.$$.fragment,pu),pu.forEach(o),uu.forEach(o),Td=m(ys),ca=r(ys,"SPAN",{});var hu=i(ca);Md=a(hu,"LayoutLMv3ForTokenClassification"),hu.forEach(o),ys.forEach(o),Xa=m(t),W=r(t,"DIV",{class:!0});var no=i(W);b(et.$$.fragment,no),$d=m(no),B=r(no,"P",{});var ie=i(B);zd=a(ie,`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),ot=r(ie,"A",{href:!0,rel:!0});var fu=i(ot);qd=a(fu,"FUNSD"),fu.forEach(o),Ed=a(ie,`,
`),tt=r(ie,"A",{href:!0,rel:!0});var gu=i(tt);Fd=a(gu,"SROIE"),gu.forEach(o),Cd=a(ie,", "),nt=r(ie,"A",{href:!0,rel:!0});var _u=i(nt);Pd=a(_u,"CORD"),_u.forEach(o),Ad=a(ie,` and
`),at=r(ie,"A",{href:!0,rel:!0});var vu=i(at);jd=a(vu,"Kleister-NDA"),vu.forEach(o),Id=a(ie,"."),ie.forEach(o),Nd=m(no),st=r(no,"P",{});var bs=i(st);Sd=a(bs,"This model is a PyTorch "),rt=r(bs,"A",{href:!0,rel:!0});var yu=i(rt);Dd=a(yu,"torch.nn.Module"),yu.forEach(o),Od=a(bs,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),bs.forEach(o),Rd=m(no),X=r(no,"DIV",{class:!0});var ao=i(X);b(it.$$.fragment,ao),Wd=m(ao),ke=r(ao,"P",{});var an=i(ke);Bd=a(an,"The "),Ht=r(an,"A",{href:!0});var bu=i(Ht);Ud=a(bu,"LayoutLMv3ForTokenClassification"),bu.forEach(o),Qd=a(an," forward method, overrides the "),ma=r(an,"CODE",{});var Lu=i(ma);Vd=a(Lu,"__call__"),Lu.forEach(o),Hd=a(an," special method."),an.forEach(o),Gd=m(ao),b(Qe.$$.fragment,ao),Xd=m(ao),b(Ve.$$.fragment,ao),ao.forEach(o),no.forEach(o),Ya=m(t),we=r(t,"H2",{class:!0});var Ls=i(we);He=r(Ls,"A",{id:!0,class:!0,href:!0});var ku=i(He);ua=r(ku,"SPAN",{});var wu=i(ua);b(lt.$$.fragment,wu),wu.forEach(o),ku.forEach(o),Yd=m(Ls),pa=r(Ls,"SPAN",{});var xu=i(pa);Jd=a(xu,"LayoutLMv3ForQuestionAnswering"),xu.forEach(o),Ls.forEach(o),Ja=m(t),U=r(t,"DIV",{class:!0});var so=i(U);b(dt.$$.fragment,so),Kd=m(so),Z=r(so,"P",{});var ro=i(Z);Zd=a(ro,`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),ct=r(ro,"A",{href:!0,rel:!0});var Tu=i(ct);ec=a(Tu,"DocVQA"),Tu.forEach(o),oc=a(ro,` (a linear layer on top of the text part of the hidden-states output to
compute `),ha=r(ro,"CODE",{});var Mu=i(ha);tc=a(Mu,"span start logits"),Mu.forEach(o),nc=a(ro," and "),fa=r(ro,"CODE",{});var $u=i(fa);ac=a($u,"span end logits"),$u.forEach(o),sc=a(ro,")."),ro.forEach(o),rc=m(so),mt=r(so,"P",{});var ks=i(mt);ic=a(ks,"This model is a PyTorch "),ut=r(ks,"A",{href:!0,rel:!0});var zu=i(ut);lc=a(zu,"torch.nn.Module"),zu.forEach(o),dc=a(ks,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ks.forEach(o),cc=m(so),Y=r(so,"DIV",{class:!0});var io=i(Y);b(pt.$$.fragment,io),mc=m(io),xe=r(io,"P",{});var sn=i(xe);uc=a(sn,"The "),Gt=r(sn,"A",{href:!0});var qu=i(Gt);pc=a(qu,"LayoutLMv3ForQuestionAnswering"),qu.forEach(o),hc=a(sn," forward method, overrides the "),ga=r(sn,"CODE",{});var Eu=i(ga);fc=a(Eu,"__call__"),Eu.forEach(o),gc=a(sn," special method."),sn.forEach(o),_c=m(io),b(Ge.$$.fragment,io),vc=m(io),b(Xe.$$.fragment,io),io.forEach(o),so.forEach(o),this.h()},h(){l(u,"name","hf:doc:metadata"),l(u,"content",JSON.stringify(Gu)),l(f,"id","layoutlmv3"),l(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(f,"href","#layoutlmv3"),l(_,"class","relative group"),l(Te,"id","overview"),l(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Te,"href","#overview"),l(le,"class","relative group"),l(co,"href","https://arxiv.org/abs/2204.08387"),l(co,"rel","nofollow"),l(gt,"href","layoutlmv2"),l(_t,"href","vit"),l(Lt,"href","layoutlmv2"),l(kt,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),l(wt,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),l(xt,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),l(Tt,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast"),l(Mt,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),l($t,"href","layoutlmv2#usage-layoutlmv2processor"),l(po,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/LayoutLMv3"),l(po,"rel","nofollow"),l(fo,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/layoutlmv3"),l(fo,"rel","nofollow"),ju($e.src,xc="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/layoutlmv3_architecture.png")||l($e,"src",xc),l($e,"alt","drawing"),l($e,"width","600"),l(zt,"href","https://arxiv.org/abs/2204.08387"),l(go,"href","https://huggingface.co/nielsr"),l(go,"rel","nofollow"),l(_o,"href","https://github.com/microsoft/unilm/tree/master/layoutlmv3"),l(_o,"rel","nofollow"),l(qe,"id","transformers.LayoutLMv3Config"),l(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(qe,"href","#transformers.LayoutLMv3Config"),l(ce,"class","relative group"),l(qt,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),l(bo,"href","https://huggingface.co/microsoft/layoutlmv3-base"),l(bo,"rel","nofollow"),l(Et,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(Ft,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Fe,"id","transformers.LayoutLMv3FeatureExtractor"),l(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Fe,"href","#transformers.LayoutLMv3FeatureExtractor"),l(pe,"class","relative group"),l(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Pe,"id","transformers.LayoutLMv3Tokenizer"),l(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Pe,"href","#transformers.LayoutLMv3Tokenizer"),l(he,"class","relative group"),l(Ct,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),l(Pt,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(jt,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),l(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(je,"id","transformers.LayoutLMv3TokenizerFast"),l(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(je,"href","#transformers.LayoutLMv3TokenizerFast"),l(fe,"class","relative group"),l(Nt,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),l(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ne,"id","transformers.LayoutLMv3Processor"),l(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ne,"href","#transformers.LayoutLMv3Processor"),l(ge,"class","relative group"),l(Dt,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),l(Ot,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),l(Rt,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),l(Wt,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast"),l(So,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor.__call__"),l(Bt,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),l(Do,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),l(Ut,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),l(Oo,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),l(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Se,"id","transformers.LayoutLMv3Model"),l(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Se,"href","#transformers.LayoutLMv3Model"),l(_e,"class","relative group"),l(Uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Uo,"rel","nofollow"),l(Qt,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),l(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Re,"id","transformers.LayoutLMv3ForSequenceClassification"),l(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Re,"href","#transformers.LayoutLMv3ForSequenceClassification"),l(ye,"class","relative group"),l(Xo,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(Xo,"rel","nofollow"),l(Jo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Jo,"rel","nofollow"),l(Vt,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForSequenceClassification"),l(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ue,"id","transformers.LayoutLMv3ForTokenClassification"),l(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ue,"href","#transformers.LayoutLMv3ForTokenClassification"),l(Le,"class","relative group"),l(ot,"href","https://guillaumejaume.github.io/FUNSD/"),l(ot,"rel","nofollow"),l(tt,"href","https://rrc.cvc.uab.es/?ch=13"),l(tt,"rel","nofollow"),l(nt,"href","https://github.com/clovaai/cord"),l(nt,"rel","nofollow"),l(at,"href","https://github.com/applicaai/kleister-nda"),l(at,"rel","nofollow"),l(rt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(rt,"rel","nofollow"),l(Ht,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForTokenClassification"),l(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(He,"id","transformers.LayoutLMv3ForQuestionAnswering"),l(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(He,"href","#transformers.LayoutLMv3ForQuestionAnswering"),l(we,"class","relative group"),l(ct,"href","https://rrc.cvc.uab.es/?ch=17"),l(ct,"rel","nofollow"),l(ut,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ut,"rel","nofollow"),l(Gt,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForQuestionAnswering"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,p){e(document.head,u),g(t,T,p),g(t,_,p),e(_,f),e(f,v),L(d,v,null),e(_,h),e(_,P),e(P,xs),g(t,Ta,p),g(t,le,p),e(le,Te),e(Te,cn),L(lo,cn,null),e(le,Ts),e(le,mn),e(mn,Ms),g(t,Ma,p),g(t,Q,p),e(Q,$s),e(Q,co),e(co,zs),e(Q,qs),e(Q,gt),e(gt,Es),e(Q,Fs),e(Q,_t),e(_t,Cs),e(Q,Ps),g(t,$a,p),g(t,vt,p),e(vt,As),g(t,za,p),g(t,yt,p),e(yt,un),e(un,js),g(t,qa,p),g(t,bt,p),e(bt,Is),g(t,Ea,p),g(t,V,p),e(V,Me),e(Me,Ns),e(Me,Lt),e(Lt,Ss),e(Me,Ds),e(Me,mo),e(mo,pn),e(pn,Os),e(mo,Rs),e(mo,N),e(N,Ws),e(N,kt),e(kt,Bs),e(N,Us),e(N,wt),e(wt,Qs),e(N,Vs),e(N,xt),e(xt,Hs),e(N,Gs),e(N,Tt),e(Tt,Xs),e(N,Ys),e(V,Js),e(V,de),e(de,Ks),e(de,Mt),e(Mt,Zs),e(de,er),e(de,$t),e($t,or),e(de,tr),e(V,nr),e(V,uo),e(uo,ar),e(uo,po),e(po,sr),e(uo,rr),e(V,ir),e(V,ho),e(ho,lr),e(ho,fo),e(fo,dr),e(ho,cr),g(t,Fa,p),g(t,$e,p),g(t,Ca,p),g(t,ze,p),e(ze,mr),e(ze,zt),e(zt,ur),e(ze,pr),g(t,Pa,p),g(t,te,p),e(te,hr),e(te,go),e(go,fr),e(te,gr),e(te,_o),e(_o,_r),e(te,vr),g(t,Aa,p),g(t,ce,p),e(ce,qe),e(qe,hn),L(vo,hn,null),e(ce,yr),e(ce,fn),e(fn,br),g(t,ja,p),g(t,S,p),L(yo,S,null),e(S,Lr),e(S,me),e(me,kr),e(me,qt),e(qt,wr),e(me,xr),e(me,bo),e(bo,Tr),e(me,Mr),e(S,$r),e(S,ue),e(ue,zr),e(ue,Et),e(Et,qr),e(ue,Er),e(ue,Ft),e(Ft,Fr),e(ue,Cr),e(S,Pr),L(Ee,S,null),g(t,Ia,p),g(t,pe,p),e(pe,Fe),e(Fe,gn),L(Lo,gn,null),e(pe,Ar),e(pe,_n),e(_n,jr),g(t,Na,p),g(t,D,p),L(ko,D,null),e(D,Ir),e(D,vn),e(vn,Nr),e(D,Sr),e(D,wo),e(wo,Dr),e(wo,yn),e(yn,Or),e(wo,Rr),e(D,Wr),e(D,ne),L(xo,ne,null),e(ne,Br),e(ne,bn),e(bn,Ur),e(ne,Qr),L(Ce,ne,null),g(t,Sa,p),g(t,he,p),e(he,Pe),e(Pe,Ln),L(To,Ln,null),e(he,Vr),e(he,kn),e(kn,Hr),g(t,Da,p),g(t,A,p),L(Mo,A,null),e(A,Gr),e(A,F),e(F,Xr),e(F,wn),e(wn,Yr),e(F,Jr),e(F,Ct),e(Ct,Kr),e(F,Zr),e(F,xn),e(xn,ei),e(F,oi),e(F,Tn),e(Tn,ti),e(F,ni),e(F,Mn),e(Mn,ai),e(F,si),e(F,$n),e($n,ri),e(F,ii),e(F,zn),e(zn,li),e(F,di),e(A,ci),e(A,$o),e($o,mi),e($o,Pt),e(Pt,ui),e($o,pi),e(A,hi),e(A,At),e(At,jt),e(jt,fi),e(At,gi),e(A,_i),e(A,Ae),L(zo,Ae,null),e(Ae,vi),e(Ae,qn),e(qn,yi),e(A,bi),e(A,It),L(qo,It,null),g(t,Oa,p),g(t,fe,p),e(fe,je),e(je,En),L(Eo,En,null),e(fe,Li),e(fe,Fn),e(Fn,ki),g(t,Ra,p),g(t,O,p),L(Fo,O,null),e(O,wi),e(O,Co),e(Co,xi),e(Co,Cn),e(Cn,Ti),e(Co,Mi),e(O,$i),e(O,Po),e(Po,zi),e(Po,Nt),e(Nt,qi),e(Po,Ei),e(O,Fi),e(O,Ie),L(Ao,Ie,null),e(Ie,Ci),e(Ie,Pn),e(Pn,Pi),g(t,Wa,p),g(t,ge,p),e(ge,Ne),e(Ne,An),L(jo,An,null),e(ge,Ai),e(ge,jn),e(jn,ji),g(t,Ba,p),g(t,I,p),L(Io,I,null),e(I,Ii),e(I,In),e(In,Ni),e(I,Si),e(I,St),e(St,Dt),e(Dt,Di),e(St,Oi),e(I,Ri),e(I,z),e(z,Wi),e(z,Ot),e(Ot,Bi),e(z,Ui),e(z,Rt),e(Rt,Qi),e(z,Vi),e(z,Wt),e(Wt,Hi),e(z,Gi),e(z,Nn),e(Nn,Xi),e(z,Yi),e(z,Sn),e(Sn,Ji),e(z,Ki),e(z,Dn),e(Dn,Zi),e(z,el),e(z,On),e(On,ol),e(z,tl),e(z,Rn),e(Rn,nl),e(z,al),e(z,Wn),e(Wn,sl),e(z,rl),e(I,il),e(I,ae),L(No,ae,null),e(ae,ll),e(ae,M),e(M,dl),e(M,Bn),e(Bn,cl),e(M,ml),e(M,So),e(So,Un),e(Un,ul),e(So,pl),e(M,hl),e(M,Bt),e(Bt,fl),e(M,gl),e(M,Qn),e(Qn,_l),e(M,vl),e(M,Vn),e(Vn,yl),e(M,bl),e(M,Do),e(Do,Hn),e(Hn,Ll),e(Do,kl),e(M,wl),e(M,Gn),e(Gn,xl),e(M,Tl),e(M,Ut),e(Ut,Ml),e(M,$l),e(M,Xn),e(Xn,zl),e(M,ql),e(M,Yn),e(Yn,El),e(M,Fl),e(M,Jn),e(Jn,Cl),e(M,Pl),e(M,Kn),e(Kn,Al),e(M,jl),e(M,Zn),e(Zn,Il),e(M,Nl),e(M,Oo),e(Oo,ea),e(ea,Sl),e(Oo,Dl),e(M,Ol),e(M,oa),e(oa,Rl),e(M,Wl),e(ae,Bl),e(ae,ta),e(ta,Ul),g(t,Ua,p),g(t,_e,p),e(_e,Se),e(Se,na),L(Ro,na,null),e(_e,Ql),e(_e,aa),e(aa,Vl),g(t,Qa,p),g(t,K,p),L(Wo,K,null),e(K,Hl),e(K,Bo),e(Bo,Gl),e(Bo,Uo),e(Uo,Xl),e(Bo,Yl),e(K,Jl),e(K,H),L(Qo,H,null),e(H,Kl),e(H,ve),e(ve,Zl),e(ve,Qt),e(Qt,ed),e(ve,od),e(ve,sa),e(sa,td),e(ve,nd),e(H,ad),L(De,H,null),e(H,sd),L(Oe,H,null),g(t,Va,p),g(t,ye,p),e(ye,Re),e(Re,ra),L(Vo,ra,null),e(ye,rd),e(ye,ia),e(ia,id),g(t,Ha,p),g(t,R,p),L(Ho,R,null),e(R,ld),e(R,Go),e(Go,dd),e(Go,Xo),e(Xo,cd),e(Go,md),e(R,ud),e(R,Yo),e(Yo,pd),e(Yo,Jo),e(Jo,hd),e(Yo,fd),e(R,gd),e(R,G),L(Ko,G,null),e(G,_d),e(G,be),e(be,vd),e(be,Vt),e(Vt,yd),e(be,bd),e(be,la),e(la,Ld),e(be,kd),e(G,wd),L(We,G,null),e(G,xd),L(Be,G,null),g(t,Ga,p),g(t,Le,p),e(Le,Ue),e(Ue,da),L(Zo,da,null),e(Le,Td),e(Le,ca),e(ca,Md),g(t,Xa,p),g(t,W,p),L(et,W,null),e(W,$d),e(W,B),e(B,zd),e(B,ot),e(ot,qd),e(B,Ed),e(B,tt),e(tt,Fd),e(B,Cd),e(B,nt),e(nt,Pd),e(B,Ad),e(B,at),e(at,jd),e(B,Id),e(W,Nd),e(W,st),e(st,Sd),e(st,rt),e(rt,Dd),e(st,Od),e(W,Rd),e(W,X),L(it,X,null),e(X,Wd),e(X,ke),e(ke,Bd),e(ke,Ht),e(Ht,Ud),e(ke,Qd),e(ke,ma),e(ma,Vd),e(ke,Hd),e(X,Gd),L(Qe,X,null),e(X,Xd),L(Ve,X,null),g(t,Ya,p),g(t,we,p),e(we,He),e(He,ua),L(lt,ua,null),e(we,Yd),e(we,pa),e(pa,Jd),g(t,Ja,p),g(t,U,p),L(dt,U,null),e(U,Kd),e(U,Z),e(Z,Zd),e(Z,ct),e(ct,ec),e(Z,oc),e(Z,ha),e(ha,tc),e(Z,nc),e(Z,fa),e(fa,ac),e(Z,sc),e(U,rc),e(U,mt),e(mt,ic),e(mt,ut),e(ut,lc),e(mt,dc),e(U,cc),e(U,Y),L(pt,Y,null),e(Y,mc),e(Y,xe),e(xe,uc),e(xe,Gt),e(Gt,pc),e(xe,hc),e(xe,ga),e(ga,fc),e(xe,gc),e(Y,_c),L(Ge,Y,null),e(Y,vc),L(Xe,Y,null),Ka=!0},p(t,[p]){const ht={};p&2&&(ht.$$scope={dirty:p,ctx:t}),Ee.$set(ht);const _a={};p&2&&(_a.$$scope={dirty:p,ctx:t}),Ce.$set(_a);const va={};p&2&&(va.$$scope={dirty:p,ctx:t}),De.$set(va);const ya={};p&2&&(ya.$$scope={dirty:p,ctx:t}),Oe.$set(ya);const ft={};p&2&&(ft.$$scope={dirty:p,ctx:t}),We.$set(ft);const ba={};p&2&&(ba.$$scope={dirty:p,ctx:t}),Be.$set(ba);const La={};p&2&&(La.$$scope={dirty:p,ctx:t}),Qe.$set(La);const ka={};p&2&&(ka.$$scope={dirty:p,ctx:t}),Ve.$set(ka);const ee={};p&2&&(ee.$$scope={dirty:p,ctx:t}),Ge.$set(ee);const wa={};p&2&&(wa.$$scope={dirty:p,ctx:t}),Xe.$set(wa)},i(t){Ka||(k(d.$$.fragment,t),k(lo.$$.fragment,t),k(vo.$$.fragment,t),k(yo.$$.fragment,t),k(Ee.$$.fragment,t),k(Lo.$$.fragment,t),k(ko.$$.fragment,t),k(xo.$$.fragment,t),k(Ce.$$.fragment,t),k(To.$$.fragment,t),k(Mo.$$.fragment,t),k(zo.$$.fragment,t),k(qo.$$.fragment,t),k(Eo.$$.fragment,t),k(Fo.$$.fragment,t),k(Ao.$$.fragment,t),k(jo.$$.fragment,t),k(Io.$$.fragment,t),k(No.$$.fragment,t),k(Ro.$$.fragment,t),k(Wo.$$.fragment,t),k(Qo.$$.fragment,t),k(De.$$.fragment,t),k(Oe.$$.fragment,t),k(Vo.$$.fragment,t),k(Ho.$$.fragment,t),k(Ko.$$.fragment,t),k(We.$$.fragment,t),k(Be.$$.fragment,t),k(Zo.$$.fragment,t),k(et.$$.fragment,t),k(it.$$.fragment,t),k(Qe.$$.fragment,t),k(Ve.$$.fragment,t),k(lt.$$.fragment,t),k(dt.$$.fragment,t),k(pt.$$.fragment,t),k(Ge.$$.fragment,t),k(Xe.$$.fragment,t),Ka=!0)},o(t){w(d.$$.fragment,t),w(lo.$$.fragment,t),w(vo.$$.fragment,t),w(yo.$$.fragment,t),w(Ee.$$.fragment,t),w(Lo.$$.fragment,t),w(ko.$$.fragment,t),w(xo.$$.fragment,t),w(Ce.$$.fragment,t),w(To.$$.fragment,t),w(Mo.$$.fragment,t),w(zo.$$.fragment,t),w(qo.$$.fragment,t),w(Eo.$$.fragment,t),w(Fo.$$.fragment,t),w(Ao.$$.fragment,t),w(jo.$$.fragment,t),w(Io.$$.fragment,t),w(No.$$.fragment,t),w(Ro.$$.fragment,t),w(Wo.$$.fragment,t),w(Qo.$$.fragment,t),w(De.$$.fragment,t),w(Oe.$$.fragment,t),w(Vo.$$.fragment,t),w(Ho.$$.fragment,t),w(Ko.$$.fragment,t),w(We.$$.fragment,t),w(Be.$$.fragment,t),w(Zo.$$.fragment,t),w(et.$$.fragment,t),w(it.$$.fragment,t),w(Qe.$$.fragment,t),w(Ve.$$.fragment,t),w(lt.$$.fragment,t),w(dt.$$.fragment,t),w(pt.$$.fragment,t),w(Ge.$$.fragment,t),w(Xe.$$.fragment,t),Ka=!1},d(t){o(u),t&&o(T),t&&o(_),x(d),t&&o(Ta),t&&o(le),x(lo),t&&o(Ma),t&&o(Q),t&&o($a),t&&o(vt),t&&o(za),t&&o(yt),t&&o(qa),t&&o(bt),t&&o(Ea),t&&o(V),t&&o(Fa),t&&o($e),t&&o(Ca),t&&o(ze),t&&o(Pa),t&&o(te),t&&o(Aa),t&&o(ce),x(vo),t&&o(ja),t&&o(S),x(yo),x(Ee),t&&o(Ia),t&&o(pe),x(Lo),t&&o(Na),t&&o(D),x(ko),x(xo),x(Ce),t&&o(Sa),t&&o(he),x(To),t&&o(Da),t&&o(A),x(Mo),x(zo),x(qo),t&&o(Oa),t&&o(fe),x(Eo),t&&o(Ra),t&&o(O),x(Fo),x(Ao),t&&o(Wa),t&&o(ge),x(jo),t&&o(Ba),t&&o(I),x(Io),x(No),t&&o(Ua),t&&o(_e),x(Ro),t&&o(Qa),t&&o(K),x(Wo),x(Qo),x(De),x(Oe),t&&o(Va),t&&o(ye),x(Vo),t&&o(Ha),t&&o(R),x(Ho),x(Ko),x(We),x(Be),t&&o(Ga),t&&o(Le),x(Zo),t&&o(Xa),t&&o(W),x(et),x(it),x(Qe),x(Ve),t&&o(Ya),t&&o(we),x(lt),t&&o(Ja),t&&o(U),x(dt),x(pt),x(Ge),x(Xe)}}}const Gu={local:"layoutlmv3",sections:[{local:"overview",title:"Overview"},{local:"transformers.LayoutLMv3Config",title:"LayoutLMv3Config"},{local:"transformers.LayoutLMv3FeatureExtractor",title:"LayoutLMv3FeatureExtractor"},{local:"transformers.LayoutLMv3Tokenizer",title:"LayoutLMv3Tokenizer"},{local:"transformers.LayoutLMv3TokenizerFast",title:"LayoutLMv3TokenizerFast"},{local:"transformers.LayoutLMv3Processor",title:"LayoutLMv3Processor"},{local:"transformers.LayoutLMv3Model",title:"LayoutLMv3Model"},{local:"transformers.LayoutLMv3ForSequenceClassification",title:"LayoutLMv3ForSequenceClassification"},{local:"transformers.LayoutLMv3ForTokenClassification",title:"LayoutLMv3ForTokenClassification"},{local:"transformers.LayoutLMv3ForQuestionAnswering",title:"LayoutLMv3ForQuestionAnswering"}],title:"LayoutLMv3"};function Xu(q){return Iu(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tp extends Fu{constructor(u){super();Cu(this,u,Xu,Hu,Pu,{})}}export{tp as default,Gu as metadata};
