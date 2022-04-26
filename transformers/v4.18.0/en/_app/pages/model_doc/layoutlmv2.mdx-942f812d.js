import{S as H_,i as K_,s as X_,e as s,k as u,w as v,t as n,M as Y_,c as r,d as t,m as p,a as i,x as y,h as a,b as l,F as e,g as m,y as b,q as L,o as w,B as k,v as Z_,L as ua}from"../../chunks/vendor-6b77c823.js";import{T as ji}from"../../chunks/Tip-39098574.js";import{D as A}from"../../chunks/Docstring-1088f2fb.js";import{C as G}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ie}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as da}from"../../chunks/ExampleCodeBlock-5212b321.js";function J_(P){let h,T,_,g,x;return g=new G({props:{code:`from transformers import LayoutLMv2Model, LayoutLMv2Config

# Initializing a LayoutLMv2 microsoft/layoutlmv2-base-uncased style configuration
configuration = LayoutLMv2Config()

# Initializing a model from the microsoft/layoutlmv2-base-uncased style configuration
model = LayoutLMv2Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Model, LayoutLMv2Config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LayoutLMv2 microsoft/layoutlmv2-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LayoutLMv2Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the microsoft/layoutlmv2-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){h=s("p"),T=n("Example:"),_=u(),v(g.$$.fragment)},l(d){h=r(d,"P",{});var f=i(h);T=a(f,"Example:"),f.forEach(t),_=p(d),y(g.$$.fragment,d)},m(d,f){m(d,h,f),e(h,T),m(d,_,f),b(g,d,f),x=!0},p:ua,i(d){x||(L(g.$$.fragment,d),x=!0)},o(d){w(g.$$.fragment,d),x=!1},d(d){d&&t(h),d&&t(_),k(g,d)}}}function ev(P){let h,T,_,g,x;return g=new G({props:{code:`from transformers import LayoutLMv2FeatureExtractor
from PIL import Image

image = Image.open("name_of_your_document - can be a png file, pdf, etc.").convert("RGB")

# option 1: with apply_ocr=True (default)
feature_extractor = LayoutLMv2FeatureExtractor()
encoding = feature_extractor(image, return_tensors="pt")
print(encoding.keys())
# dict_keys(['pixel_values', 'words', 'boxes'])

# option 2: with apply_ocr=False
feature_extractor = LayoutLMv2FeatureExtractor(apply_ocr=False)
encoding = feature_extractor(image, return_tensors="pt")
print(encoding.keys())
# dict_keys(['pixel_values'])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2FeatureExtractor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># option 1: with apply_ocr=True (default)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = LayoutLMv2FeatureExtractor()
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;, &#x27;words&#x27;, &#x27;boxes&#x27;])</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># option 2: with apply_ocr=False</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = LayoutLMv2FeatureExtractor(apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;])</span>`}}),{c(){h=s("p"),T=n("Examples:"),_=u(),v(g.$$.fragment)},l(d){h=r(d,"P",{});var f=i(h);T=a(f,"Examples:"),f.forEach(t),_=p(d),y(g.$$.fragment,d)},m(d,f){m(d,h,f),e(h,T),m(d,_,f),b(g,d,f),x=!0},p:ua,i(d){x||(L(g.$$.fragment,d),x=!0)},o(d){w(g.$$.fragment,d),x=!1},d(d){d&&t(h),d&&t(_),k(g,d)}}}function ov(P){let h,T,_,g,x;return{c(){h=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),g=n("Module"),x=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=r(d,"P",{});var f=i(h);T=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(f,"CODE",{});var D=i(_);g=a(D,"Module"),D.forEach(t),x=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){m(d,h,f),e(h,T),e(h,_),e(_,g),e(h,x)},d(d){d&&t(h)}}}function tv(P){let h,T,_,g,x;return g=new G({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2Model
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")
model = LayoutLMv2Model.from_pretrained("microsoft/layoutlmv2-base-uncased")

image = Image.open("name_of_your_document - can be a png file, pdf, etc.").convert("RGB")

encoding = processor(image, return_tensors="pt")

outputs = model(**encoding)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor, LayoutLMv2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2Model.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=s("p"),T=n("Examples:"),_=u(),v(g.$$.fragment)},l(d){h=r(d,"P",{});var f=i(h);T=a(f,"Examples:"),f.forEach(t),_=p(d),y(g.$$.fragment,d)},m(d,f){m(d,h,f),e(h,T),m(d,_,f),b(g,d,f),x=!0},p:ua,i(d){x||(L(g.$$.fragment,d),x=!0)},o(d){w(g.$$.fragment,d),x=!1},d(d){d&&t(h),d&&t(_),k(g,d)}}}function nv(P){let h,T,_,g,x;return{c(){h=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),g=n("Module"),x=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=r(d,"P",{});var f=i(h);T=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(f,"CODE",{});var D=i(_);g=a(D,"Module"),D.forEach(t),x=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){m(d,h,f),e(h,T),e(h,_),e(_,g),e(h,x)},d(d){d&&t(h)}}}function av(P){let h,T,_,g,x;return g=new G({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForSequenceClassification
from PIL import Image
import torch

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")
model = LayoutLMv2ForSequenceClassification.from_pretrained("microsoft/layoutlmv2-base-uncased")

image = Image.open("name_of_your_document - can be a png file, pdf, etc.").convert("RGB")

encoding = processor(image, return_tensors="pt")
sequence_label = torch.tensor([1])

outputs = model(**encoding, labels=sequence_label)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor, LayoutLMv2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_label = torch.tensor([<span class="hljs-number">1</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=sequence_label)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=s("p"),T=n("Examples:"),_=u(),v(g.$$.fragment)},l(d){h=r(d,"P",{});var f=i(h);T=a(f,"Examples:"),f.forEach(t),_=p(d),y(g.$$.fragment,d)},m(d,f){m(d,h,f),e(h,T),m(d,_,f),b(g,d,f),x=!0},p:ua,i(d){x||(L(g.$$.fragment,d),x=!0)},o(d){w(g.$$.fragment,d),x=!1},d(d){d&&t(h),d&&t(_),k(g,d)}}}function sv(P){let h,T,_,g,x;return{c(){h=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),g=n("Module"),x=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=r(d,"P",{});var f=i(h);T=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(f,"CODE",{});var D=i(_);g=a(D,"Module"),D.forEach(t),x=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){m(d,h,f),e(h,T),e(h,_),e(_,g),e(h,x)},d(d){d&&t(h)}}}function rv(P){let h,T,_,g,x;return g=new G({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForTokenClassification
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased", revision="no_ocr")
model = LayoutLMv2ForTokenClassification.from_pretrained("microsoft/layoutlmv2-base-uncased")

image = Image.open("name_of_your_document - can be a png file, pdf, etc.").convert("RGB")
words = ["hello", "world"]
boxes = [[1, 2, 3, 4], [5, 6, 7, 8]]  # make sure to normalize your bounding boxes
word_labels = [0, 1]

encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors="pt")

outputs = model(**encoding)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor, LayoutLMv2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = [[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>word_labels = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=s("p"),T=n("Examples:"),_=u(),v(g.$$.fragment)},l(d){h=r(d,"P",{});var f=i(h);T=a(f,"Examples:"),f.forEach(t),_=p(d),y(g.$$.fragment,d)},m(d,f){m(d,h,f),e(h,T),m(d,_,f),b(g,d,f),x=!0},p:ua,i(d){x||(L(g.$$.fragment,d),x=!0)},o(d){w(g.$$.fragment,d),x=!1},d(d){d&&t(h),d&&t(_),k(g,d)}}}function iv(P){let h,T,_,g,x;return{c(){h=s("p"),T=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),g=n("Module"),x=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=r(d,"P",{});var f=i(h);T=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(f,"CODE",{});var D=i(_);g=a(D,"Module"),D.forEach(t),x=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){m(d,h,f),e(h,T),e(h,_),e(_,g),e(h,x)},d(d){d&&t(h)}}}function lv(P){let h,T,_,g,x;return g=new G({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForQuestionAnswering
from PIL import Image
import torch

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")
model = LayoutLMv2ForQuestionAnswering.from_pretrained("microsoft/layoutlmv2-base-uncased")

image = Image.open("name_of_your_document - can be a png file, pdf, etc.").convert("RGB")
question = "what's his name?"

encoding = processor(image, question, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**encoding, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor, LayoutLMv2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;what&#x27;s his name?&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, question, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){h=s("p"),T=n("Examples:"),_=u(),v(g.$$.fragment)},l(d){h=r(d,"P",{});var f=i(h);T=a(f,"Examples:"),f.forEach(t),_=p(d),y(g.$$.fragment,d)},m(d,f){m(d,h,f),e(h,T),m(d,_,f),b(g,d,f),x=!0},p:ua,i(d){x||(L(g.$$.fragment,d),x=!0)},o(d){w(g.$$.fragment,d),x=!1},d(d){d&&t(h),d&&t(_),k(g,d)}}}function cv(P){let h,T,_,g,x,d,f,D,Ci,sr,xe,We,pa,Mo,Ii,ma,Ai,rr,ue,Di,$o,Oi,Ni,Jt,Si,Ri,ir,pe,H,Ui,Eo,Wi,Bi,zo,Vi,Qi,Fo,Gi,Hi,qo,Ki,Xi,Yi,Po,Zi,jo,Ji,el,ol,Co,tl,Io,nl,al,lr,en,sl,cr,on,ha,rl,dr,tn,il,ur,W,fa,ll,cl,Ao,dl,Do,ul,pl,ml,Oo,hl,No,fl,gl,_l,Te,vl,So,yl,bl,Ro,Ll,wl,kl,M,xl,ga,Tl,Ml,nn,$l,El,_a,zl,Fl,va,ql,Pl,ya,jl,Cl,ba,Il,Al,La,Dl,Ol,wa,Nl,Sl,ka,Rl,Ul,an,Wl,Bl,Uo,Vl,Ql,Wo,Gl,Hl,pr,Bo,mr,me,Kl,xa,Xl,Yl,Ta,Zl,Jl,hr,Vo,fr,Be,ec,sn,oc,tc,gr,he,I,nc,rn,ac,sc,Ma,rc,ic,$a,lc,cc,ln,dc,uc,Ea,pc,mc,za,hc,fc,Fa,gc,_c,vc,Qo,yc,cn,bc,Lc,wc,Go,kc,qa,xc,Tc,_r,Ve,Mc,dn,$c,Ec,vr,Me,Qe,Pa,Ho,zc,ja,Fc,yr,B,qc,un,Pc,jc,pn,Cc,Ic,mn,Ac,Dc,hn,Oc,Nc,br,Ko,Lr,E,Sc,fn,Rc,Uc,gn,Wc,Bc,Ca,Vc,Qc,_n,Gc,Hc,vn,Kc,Xc,Ia,Yc,Zc,Aa,Jc,ed,Da,od,td,Oa,nd,ad,Na,sd,rd,wr,R,yn,id,ld,Xo,cd,dd,bn,ud,pd,Sa,md,hd,Ra,fd,gd,kr,Ln,_d,xr,wn,Ua,vd,Tr,kn,yd,Mr,Yo,$r,xn,Wa,bd,Er,fe,Ld,Ba,wd,kd,Va,xd,Td,zr,Zo,Fr,Tn,Qa,Md,qr,V,$d,Ga,Ed,zd,Ha,Fd,qd,Ka,Pd,jd,Xa,Cd,Id,Pr,Jo,jr,Mn,Ya,Ad,Cr,$n,Dd,Ir,et,Ar,En,Za,Od,Dr,zn,Nd,Or,ot,Nr,$e,Ge,Ja,tt,Sd,es,Rd,Sr,K,nt,Ud,Ee,Wd,Fn,Bd,Vd,at,Qd,Gd,Hd,ze,Kd,qn,Xd,Yd,Pn,Zd,Jd,eu,He,Rr,Fe,Ke,os,st,ou,ts,tu,Ur,X,rt,nu,ns,au,su,it,ru,as,iu,lu,cu,ge,lt,du,ss,uu,pu,Xe,Wr,qe,Ye,rs,ct,mu,is,hu,Br,O,dt,fu,N,gu,jn,_u,vu,ls,yu,bu,cs,Lu,wu,ds,ku,xu,us,Tu,Mu,ps,$u,Eu,zu,ut,Fu,Cn,qu,Pu,ju,In,An,Cu,Iu,Au,Ze,pt,Du,ms,Ou,Nu,Dn,mt,Vr,Pe,Je,hs,ht,Su,fs,Ru,Qr,Y,ft,Uu,gt,Wu,gs,Bu,Vu,Qu,_t,Gu,On,Hu,Ku,Xu,eo,vt,Yu,_s,Zu,Gr,je,oo,vs,yt,Ju,ys,ep,Hr,U,bt,op,bs,tp,np,Nn,Sn,ap,sp,rp,q,ip,Rn,lp,cp,Un,dp,up,Wn,pp,mp,Ls,hp,fp,ws,gp,_p,ks,vp,yp,xs,bp,Lp,Ts,wp,kp,Ms,xp,Tp,Mp,_e,Lt,$p,$,Ep,$s,zp,Fp,wt,Es,qp,Pp,jp,Bn,Cp,Ip,zs,Ap,Dp,Fs,Op,Np,kt,qs,Sp,Rp,Up,Ps,Wp,Bp,Vn,Vp,Qp,js,Gp,Hp,Cs,Kp,Xp,Is,Yp,Zp,As,Jp,em,om,Ds,tm,Kr,Ce,to,Os,xt,nm,Ns,am,Xr,le,Tt,sm,Mt,rm,$t,im,lm,cm,te,Et,dm,Ie,um,Qn,pm,mm,Ss,hm,fm,gm,no,_m,ao,Yr,Ae,so,Rs,zt,vm,Us,ym,Zr,Z,Ft,bm,qt,Lm,Pt,wm,km,xm,jt,Tm,Ct,Mm,$m,Em,ne,It,zm,De,Fm,Gn,qm,Pm,Ws,jm,Cm,Im,ro,Am,io,Jr,Oe,lo,Bs,At,Dm,Vs,Om,ei,J,Dt,Nm,ee,Sm,Ot,Rm,Um,Nt,Wm,Bm,St,Vm,Qm,Rt,Gm,Hm,Km,Ut,Xm,Wt,Ym,Zm,Jm,ae,Bt,eh,Ne,oh,Hn,th,nh,Qs,ah,sh,rh,co,ih,uo,oi,Se,po,Gs,Vt,lh,Hs,ch,ti,oe,Qt,dh,ce,uh,Gt,ph,mh,Ks,hh,fh,Xs,gh,_h,vh,Ht,yh,Kt,bh,Lh,wh,se,Xt,kh,Re,xh,Kn,Th,Mh,Ys,$h,Eh,zh,mo,Fh,ho,ni;return d=new ie({}),Mo=new ie({}),Bo=new G({props:{code:`def normalize_bbox(bbox, width, height):
    return [
        int(1000 * (bbox[0] / width)),
        int(1000 * (bbox[1] / height)),
        int(1000 * (bbox[2] / width)),
        int(1000 * (bbox[3] / height)),
    ]`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">normalize_bbox</span>(<span class="hljs-params">bbox, width, height</span>):
    <span class="hljs-keyword">return</span> [
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">0</span>] / width)),
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">1</span>] / height)),
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">2</span>] / width)),
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">3</span>] / height)),
    ]`}}),Vo=new G({props:{code:`from PIL import Image

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
)

width, height = image.size`,highlighted:`<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
)

width, height = image.size`}}),Ho=new ie({}),Ko=new G({props:{code:`from transformers import LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  # apply_ocr is set to True by default
tokenizer = LayoutLMv2TokenizerFast.from_pretrained("microsoft/layoutlmv2-base-uncased")
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  <span class="hljs-comment"># apply_ocr is set to True by default</span>
tokenizer = LayoutLMv2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`}}),Yo=new G({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
).convert("RGB")
encoding = processor(
    image, return_tensors="pt"
)  # you can also add all tokenizer parameters here such as padding, truncation
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
encoding = processor(
    image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
)  <span class="hljs-comment"># you can also add all tokenizer parameters here such as padding, truncation</span>
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),Zo=new G({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased", revision="no_ocr")

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
).convert("RGB")
words = ["hello", "world"]
boxes = [[1, 2, 3, 4], [5, 6, 7, 8]]  # make sure to normalize your bounding boxes
encoding = processor(image, words, boxes=boxes, return_tensors="pt")
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
boxes = [[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
encoding = processor(image, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),Jo=new G({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased", revision="no_ocr")

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
).convert("RGB")
words = ["hello", "world"]
boxes = [[1, 2, 3, 4], [5, 6, 7, 8]]  # make sure to normalize your bounding boxes
word_labels = [1, 2]
encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors="pt")
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'labels', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
boxes = [[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
word_labels = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]
encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;labels&#x27;, &#x27;image&#x27;])</span>`}}),et=new G({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
).convert("RGB")
question = "What's his name?"
encoding = processor(image, question, return_tensors="pt")
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
question = <span class="hljs-string">&quot;What&#x27;s his name?&quot;</span>
encoding = processor(image, question, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),ot=new G({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased", revision="no_ocr")

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
).convert("RGB")
question = "What's his name?"
words = ["hello", "world"]
boxes = [[1, 2, 3, 4], [5, 6, 7, 8]]  # make sure to normalize your bounding boxes
encoding = processor(image, question, words, boxes=boxes, return_tensors="pt")
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
question = <span class="hljs-string">&quot;What&#x27;s his name?&quot;</span>
words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
boxes = [[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
encoding = processor(image, question, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),tt=new ie({}),nt=new A({props:{name:"class transformers.LayoutLMv2Config",anchor:"transformers.LayoutLMv2Config",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"max_rel_pos",val:" = 128"},{name:"rel_pos_bins",val:" = 32"},{name:"fast_qkv",val:" = True"},{name:"max_rel_2d_pos",val:" = 256"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"convert_sync_batchnorm",val:" = True"},{name:"image_feature_pool_shape",val:" = [7, 7, 256]"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"has_spatial_attention_bias",val:" = True"},{name:"has_visual_segment_embedding",val:" = False"},{name:"detectron2_config_args",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LayoutLMv2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model">LayoutLMv2Model</a> or <code>TFLayoutLMv2Model</code>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMv2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.LayoutLMv2Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.LayoutLMv2Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.LayoutLMv2Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.LayoutLMv2Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.LayoutLMv2Config.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.LayoutLMv2Config.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.LayoutLMv2Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.LayoutLMv2Config.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model">LayoutLMv2Model</a> or
<code>TFLayoutLMv2Model</code>.`,name:"type_vocab_size"},{anchor:"transformers.LayoutLMv2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LayoutLMv2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LayoutLMv2Config.max_2d_position_embeddings",description:`<strong>max_2d_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the 2D position embedding might ever be used with. Typically set this to something
large just in case (e.g., 1024).`,name:"max_2d_position_embeddings"},{anchor:"transformers.LayoutLMv2Config.max_rel_pos",description:`<strong>max_rel_pos</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum number of relative positions to be used in the self-attention mechanism.`,name:"max_rel_pos"},{anchor:"transformers.LayoutLMv2Config.rel_pos_bins",description:`<strong>rel_pos_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of relative position bins to be used in the self-attention mechanism.`,name:"rel_pos_bins"},{anchor:"transformers.LayoutLMv2Config.fast_qkv",description:`<strong>fast_qkv</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a single matrix for the queries, keys, values in the self-attention layers.`,name:"fast_qkv"},{anchor:"transformers.LayoutLMv2Config.max_rel_2d_pos",description:`<strong>max_rel_2d_pos</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The maximum number of relative 2D positions in the self-attention mechanism.`,name:"max_rel_2d_pos"},{anchor:"transformers.LayoutLMv2Config.rel_2d_pos_bins",description:`<strong>rel_2d_pos_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
The number of 2D relative position bins in the self-attention mechanism.`,name:"rel_2d_pos_bins"},{anchor:"transformers.LayoutLMv2Config.image_feature_pool_shape",description:`<strong>image_feature_pool_shape</strong> (<code>List[int]</code>, <em>optional</em>, defaults to [7, 7, 256]) &#x2014;
The shape of the average-pooled feature map.`,name:"image_feature_pool_shape"},{anchor:"transformers.LayoutLMv2Config.coordinate_size",description:`<strong>coordinate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Dimension of the coordinate embeddings.`,name:"coordinate_size"},{anchor:"transformers.LayoutLMv2Config.shape_size",description:`<strong>shape_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Dimension of the width and height embeddings.`,name:"shape_size"},{anchor:"transformers.LayoutLMv2Config.has_relative_attention_bias",description:`<strong>has_relative_attention_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a relative attention bias in the self-attention mechanism.`,name:"has_relative_attention_bias"},{anchor:"transformers.LayoutLMv2Config.has_spatial_attention_bias",description:`<strong>has_spatial_attention_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a spatial attention bias in the self-attention mechanism.`,name:"has_spatial_attention_bias"},{anchor:"transformers.LayoutLMv2Config.has_visual_segment_embedding",description:`<strong>has_visual_segment_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add visual segment embeddings.`,name:"has_visual_segment_embedding"},{anchor:"transformers.LayoutLMv2Config.detectron2_config_args",description:`<strong>detectron2_config_args</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary containing the configuration arguments of the Detectron2 visual backbone. Refer to <a href="https://github.com/microsoft/unilm/blob/master/layoutlmft/layoutlmft/models/layoutlmv2/detectron2_config.py" rel="nofollow">this
file</a>
for details regarding default values.`,name:"detectron2_config_args"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/layoutlmv2/configuration_layoutlmv2.py#L34"}}),He=new da({props:{anchor:"transformers.LayoutLMv2Config.example",$$slots:{default:[J_]},$$scope:{ctx:P}}}),st=new ie({}),rt=new A({props:{name:"class transformers.LayoutLMv2FeatureExtractor",anchor:"transformers.LayoutLMv2FeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"apply_ocr",val:" = True"},{name:"ocr_lang",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2FeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.LayoutLMv2FeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.LayoutLMv2FeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.LayoutLMv2FeatureExtractor.apply_ocr",description:`<strong>apply_ocr</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply the Tesseract OCR engine to get words + normalized bounding boxes.`,name:"apply_ocr"},{anchor:"transformers.LayoutLMv2FeatureExtractor.ocr_lang",description:`<strong>ocr_lang</strong> (<code>Optional[str]</code>, <em>optional</em>) &#x2014;
The language, specified by its ISO code, to be used by the Tesseract OCR engine. By default, English is
used.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>LayoutLMv2FeatureExtractor uses Google&#x2019;s Tesseract OCR engine under the hood.</p>

					</div>`,name:"ocr_lang"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/layoutlmv2/feature_extraction_layoutlmv2.py#L82"}}),lt=new A({props:{name:"__call__",anchor:"transformers.LayoutLMv2FeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.18.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/layoutlmv2/feature_extraction_layoutlmv2.py#L123",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>words</strong> \u2014 Optional words as identified by Tesseract OCR (only when <a
  href="/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"
>LayoutLMv2FeatureExtractor</a> was
initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
<li><strong>boxes</strong> \u2014 Optional bounding boxes as identified by Tesseract OCR, normalized based on the image size
(only when <a
  href="/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"
>LayoutLMv2FeatureExtractor</a> was initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Xe=new da({props:{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.example",$$slots:{default:[ev]},$$scope:{ctx:P}}}),ct=new ie({}),dt=new A({props:{name:"class transformers.LayoutLMv2Tokenizer",anchor:"transformers.LayoutLMv2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L145"}}),pt=new A({props:{name:"__call__",anchor:"transformers.LayoutLMv2Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.18.0/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.18.0/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.18.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.18.0/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.18.0/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters. If left unset or set to
<code>None</code>, this will use the predefined model maximum length if a maximum length is required by one of the
truncation/padding parameters. If the model has no specific maximum input length (like XLNet)
truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.18.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L365"}}),mt=new A({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L345"}}),ht=new ie({}),ft=new A({props:{name:"class transformers.LayoutLMv2TokenizerFast",anchor:"transformers.LayoutLMv2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.LayoutLMv2TokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.LayoutLMv2TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.cls_token_box",description:`<strong>cls_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [CLS] token.`,name:"cls_token_box"},{anchor:"transformers.LayoutLMv2TokenizerFast.sep_token_box",description:`<strong>sep_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[1000, 1000, 1000, 1000]</code>) &#x2014;
The bounding box to use for the special [SEP] token.`,name:"sep_token_box"},{anchor:"transformers.LayoutLMv2TokenizerFast.pad_token_box",description:`<strong>pad_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [PAD] token.`,name:"pad_token_box"},{anchor:"transformers.LayoutLMv2TokenizerFast.pad_token_label",description:`<strong>pad_token_label</strong> (<code>int</code>, <em>optional</em>, defaults to -100) &#x2014;
The label to use for padding tokens. Defaults to -100, which is the <code>ignore_index</code> of PyTorch&#x2019;s
CrossEntropyLoss.`,name:"pad_token_label"},{anchor:"transformers.LayoutLMv2TokenizerFast.only_label_first_subword",description:`<strong>only_label_first_subword</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"},{anchor:"transformers.LayoutLMv2TokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original LayoutLMv2).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L61"}}),vt=new A({props:{name:"__call__",anchor:"transformers.LayoutLMv2TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.18.0/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.18.0/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.18.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.18.0/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.18.0/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters. If left unset or set to
<code>None</code>, this will use the predefined model maximum length if a maximum length is required by one of the
truncation/padding parameters. If the model has no specific maximum input length (like XLNet)
truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.18.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L170"}}),yt=new ie({}),bt=new A({props:{name:"class transformers.LayoutLMv2Processor",anchor:"transformers.LayoutLMv2Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv2FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor">LayoutLMv2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv2Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv2Tokenizer</code> or <code>LayoutLMv2TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a> or <a href="/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast">LayoutLMv2TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L25"}}),Lt=new A({props:{name:"__call__",anchor:"transformers.LayoutLMv2Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L47"}}),xt=new ie({}),Tt=new A({props:{name:"class transformers.LayoutLMv2Model",anchor:"transformers.LayoutLMv2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L708"}}),Et=new A({props:{name:"forward",anchor:"transformers.LayoutLMv2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv2Model.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>((batch_size, sequence_length), 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv2Model.forward.image",description:`<strong>image</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code> or <code>detectron.structures.ImageList</code> whose <code>tensors</code> is of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"image"},{anchor:"transformers.LayoutLMv2Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv2Model.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv2Model.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv2Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv2Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv2Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv2Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv2Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L806",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),no=new ji({props:{$$slots:{default:[ov]},$$scope:{ctx:P}}}),ao=new da({props:{anchor:"transformers.LayoutLMv2Model.forward.example",$$slots:{default:[tv]},$$scope:{ctx:P}}}),zt=new ie({}),Ft=new A({props:{name:"class transformers.LayoutLMv2ForSequenceClassification",anchor:"transformers.LayoutLMv2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L953"}}),It=new A({props:{name:"forward",anchor:"transformers.LayoutLMv2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.image",description:`<strong>image</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code> or <code>detectron.structures.ImageList</code> whose <code>tensors</code> is of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"image"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L967",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new ji({props:{$$slots:{default:[nv]},$$scope:{ctx:P}}}),io=new da({props:{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.example",$$slots:{default:[av]},$$scope:{ctx:P}}}),At=new ie({}),Dt=new A({props:{name:"class transformers.LayoutLMv2ForTokenClassification",anchor:"transformers.LayoutLMv2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1122"}}),Bt=new A({props:{name:"forward",anchor:"transformers.LayoutLMv2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.image",description:`<strong>image</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code> or <code>detectron.structures.ImageList</code> whose <code>tensors</code> is of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"image"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1136",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new ji({props:{$$slots:{default:[sv]},$$scope:{ctx:P}}}),uo=new da({props:{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.example",$$slots:{default:[rv]},$$scope:{ctx:P}}}),Vt=new ie({}),Qt=new A({props:{name:"class transformers.LayoutLMv2ForQuestionAnswering",anchor:"transformers.LayoutLMv2ForQuestionAnswering",parameters:[{name:"config",val:""},{name:"has_visual_segment_embedding",val:" = True"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1231"}}),Xt=new A({props:{name:"forward",anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.image",description:`<strong>image</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code> or <code>detectron.structures.ImageList</code> whose <code>tensors</code> is of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"image"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1245",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mo=new ji({props:{$$slots:{default:[iv]},$$scope:{ctx:P}}}),ho=new da({props:{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.example",$$slots:{default:[lv]},$$scope:{ctx:P}}}),{c(){h=s("meta"),T=u(),_=s("h1"),g=s("a"),x=s("span"),v(d.$$.fragment),f=u(),D=s("span"),Ci=n("LayoutLMV2"),sr=u(),xe=s("h2"),We=s("a"),pa=s("span"),v(Mo.$$.fragment),Ii=u(),ma=s("span"),Ai=n("Overview"),rr=u(),ue=s("p"),Di=n("The LayoutLMV2 model was proposed in "),$o=s("a"),Oi=n("LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),Ni=n(` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),Jt=s("a"),Si=n("LayoutLM"),Ri=n(` to obtain
state-of-the-art results across several document image understanding benchmarks:`),ir=u(),pe=s("ul"),H=s("li"),Ui=n("information extraction from scanned documents: the "),Eo=s("a"),Wi=n("FUNSD"),Bi=n(` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),zo=s("a"),Vi=n("CORD"),Qi=n(`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),Fo=s("a"),Gi=n("SROIE"),Hi=n(` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),qo=s("a"),Ki=n("Kleister-NDA"),Xi=n(` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),Yi=u(),Po=s("li"),Zi=n("document image classification: the "),jo=s("a"),Ji=n("RVL-CDIP"),el=n(` dataset (a collection of
400,000 images belonging to one of 16 classes).`),ol=u(),Co=s("li"),tl=n("document visual question answering: the "),Io=s("a"),nl=n("DocVQA"),al=n(` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),lr=u(),en=s("p"),sl=n("The abstract from the paper is the following:"),cr=u(),on=s("p"),ha=s("em"),rl=n(`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
its effective model architecture and the advantage of large-scale unlabeled scanned/digital-born documents. In this
paper, we present LayoutLMv2 by pre-training text, layout and image in a multi-modal framework, where new model
architectures and pre-training tasks are leveraged. Specifically, LayoutLMv2 not only uses the existing masked
visual-language modeling task but also the new text-image alignment and text-image matching tasks in the pre-training
stage, where cross-modality interaction is better learned. Meanwhile, it also integrates a spatial-aware self-attention
mechanism into the Transformer architecture, so that the model can fully understand the relative positional
relationship among different text blocks. Experiment results show that LayoutLMv2 outperforms strong baselines and
achieves new state-of-the-art results on a wide variety of downstream visually-rich document understanding tasks,
including FUNSD (0.7895 -> 0.8420), CORD (0.9493 -> 0.9601), SROIE (0.9524 -> 0.9781), Kleister-NDA (0.834 -> 0.852),
RVL-CDIP (0.9443 -> 0.9564), and DocVQA (0.7295 -> 0.8672). The pre-trained LayoutLMv2 model is publicly available at
this https URL.`),dr=u(),tn=s("p"),il=n("Tips:"),ur=u(),W=s("ul"),fa=s("li"),ll=n(`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),cl=u(),Ao=s("li"),dl=n(`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),Do=s("a"),ul=n("paper"),pl=n("."),ml=u(),Oo=s("li"),hl=n("Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),No=s("a"),fl=n("here"),gl=n("."),_l=u(),Te=s("li"),vl=n("LayoutLMv2 uses Facebook AI\u2019s "),So=s("a"),yl=n("Detectron2"),bl=n(` package for its visual
backbone. See `),Ro=s("a"),Ll=n("this link"),wl=n(` for installation
instructions.`),kl=u(),M=s("li"),xl=n("In addition to "),ga=s("code"),Tl=n("input_ids"),Ml=n(", "),nn=s("a"),$l=n("forward()"),El=n(` expects 2 additional inputs, namely
`),_a=s("code"),zl=n("image"),Fl=n(" and "),va=s("code"),ql=n("bbox"),Pl=n(". The "),ya=s("code"),jl=n("image"),Cl=n(` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),ba=s("code"),Il=n("image"),Al=n(` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),La=s("code"),Dl=n("torch.Tensor"),Ol=n(" or a "),wa=s("code"),Nl=n("Detectron2.structures.ImageList"),Sl=n(`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),ka=s("code"),Rl=n("bbox"),Ul=n(` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),an=s("a"),Wl=n("LayoutLMModel"),Bl=n(`. These can be obtained using an
external OCR engine such as Google\u2019s `),Uo=s("a"),Vl=n("Tesseract"),Ql=n(" (there\u2019s a "),Wo=s("a"),Gl=n(`Python
wrapper`),Hl=n(` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),pr=u(),v(Bo.$$.fragment),mr=u(),me=s("p"),Kl=n("Here, "),xa=s("code"),Xl=n("width"),Yl=n(" and "),Ta=s("code"),Zl=n("height"),Jl=n(` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),hr=u(),v(Vo.$$.fragment),fr=u(),Be=s("p"),ec=n("However, this model includes a brand new "),sn=s("a"),oc=n("LayoutLMv2Processor"),tc=n(` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),gr=u(),he=s("ul"),I=s("li"),nc=n("Internally, "),rn=s("a"),ac=n("LayoutLMv2Model"),sc=n(" will send the "),Ma=s("code"),rc=n("image"),ic=n(` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),$a=s("code"),lc=n("image_feature_pool_shape"),cc=n(` attribute of
`),ln=s("a"),dc=n("LayoutLMv2Config"),uc=n(`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),Ea=s("code"),pc=n("seq_length"),mc=n(" + "),za=s("code"),hc=n("image_feature_pool_shape[0]"),fc=n(` *
`),Fa=s("code"),gc=n("config.image_feature_pool_shape[1]"),_c=n("."),vc=u(),Qo=s("li"),yc=n("When calling "),cn=s("a"),bc=n("from_pretrained()"),Lc=n(`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),wc=u(),Go=s("li"),kc=n("If you want to train the model in a distributed environment, make sure to call "),qa=s("code"),xc=n("synchronize_batch_norm"),Tc=n(` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),_r=u(),Ve=s("p"),Mc=n(`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),dn=s("a"),$c=n("LayoutXLM\u2019s documentation page"),Ec=n("."),vr=u(),Me=s("h2"),Qe=s("a"),Pa=s("span"),v(Ho.$$.fragment),zc=u(),ja=s("span"),Fc=n("Usage: LayoutLMv2Processor"),yr=u(),B=s("p"),qc=n("The easiest way to prepare data for the model is to use "),un=s("a"),Pc=n("LayoutLMv2Processor"),jc=n(`, which internally
combines a feature extractor (`),pn=s("a"),Cc=n("LayoutLMv2FeatureExtractor"),Ic=n(`) and a tokenizer
(`),mn=s("a"),Ac=n("LayoutLMv2Tokenizer"),Dc=n(" or "),hn=s("a"),Oc=n("LayoutLMv2TokenizerFast"),Nc=n(`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),br=u(),v(Ko.$$.fragment),Lr=u(),E=s("p"),Sc=n("In short, one can provide a document image (and possibly additional data) to "),fn=s("a"),Rc=n("LayoutLMv2Processor"),Uc=n(`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),gn=s("a"),Wc=n("LayoutLMv2FeatureExtractor"),Bc=n(` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),Ca=s("code"),Vc=n("image"),Qc=n(` input. The words and
normalized bounding boxes are then provided to `),_n=s("a"),Gc=n("LayoutLMv2Tokenizer"),Hc=n(` or
`),vn=s("a"),Kc=n("LayoutLMv2TokenizerFast"),Xc=n(", which converts them to token-level "),Ia=s("code"),Yc=n("input_ids"),Zc=n(`,
`),Aa=s("code"),Jc=n("attention_mask"),ed=n(", "),Da=s("code"),od=n("token_type_ids"),td=n(", "),Oa=s("code"),nd=n("bbox"),ad=n(`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Na=s("code"),sd=n("labels"),rd=n("."),wr=u(),R=s("p"),yn=s("a"),id=n("LayoutLMv2Processor"),ld=n(" uses "),Xo=s("a"),cd=n("PyTesseract"),dd=n(`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),bn=s("a"),ud=n("LayoutLMv2FeatureExtractor"),pd=n(" with "),Sa=s("code"),md=n("apply_ocr"),hd=n(" set to "),Ra=s("code"),fd=n("False"),gd=n("."),kr=u(),Ln=s("p"),_d=n(`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),xr=u(),wn=s("p"),Ua=s("strong"),vd=n(`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),Tr=u(),kn=s("p"),yd=n(`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),Mr=u(),v(Yo.$$.fragment),$r=u(),xn=s("p"),Wa=s("strong"),bd=n("Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),Er=u(),fe=s("p"),Ld=n("In case one wants to do OCR themselves, one can initialize the feature extractor with "),Ba=s("code"),wd=n("apply_ocr"),kd=n(` set to
`),Va=s("code"),xd=n("False"),Td=n(`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),zr=u(),v(Zo.$$.fragment),Fr=u(),Tn=s("p"),Qa=s("strong"),Md=n("Use case 3: token classification (training), apply_ocr=False"),qr=u(),V=s("p"),$d=n(`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),Ga=s("code"),Ed=n("labels"),zd=n(`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),Ha=s("code"),Fd=n("ignore_index"),qd=n(` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),Ka=s("code"),Pd=n("only_label_first_subword"),jd=n(" set to "),Xa=s("code"),Cd=n("False"),Id=n("."),Pr=u(),v(Jo.$$.fragment),jr=u(),Mn=s("p"),Ya=s("strong"),Ad=n("Use case 4: visual question answering (inference), apply_ocr=True"),Cr=u(),$n=s("p"),Dd=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),Ir=u(),v(et.$$.fragment),Ar=u(),En=s("p"),Za=s("strong"),Od=n("Use case 5: visual question answering (inference), apply_ocr=False"),Dr=u(),zn=s("p"),Nd=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),Or=u(),v(ot.$$.fragment),Nr=u(),$e=s("h2"),Ge=s("a"),Ja=s("span"),v(tt.$$.fragment),Sd=u(),es=s("span"),Rd=n("LayoutLMv2Config"),Sr=u(),K=s("div"),v(nt.$$.fragment),Ud=u(),Ee=s("p"),Wd=n("This is the configuration class to store the configuration of a "),Fn=s("a"),Bd=n("LayoutLMv2Model"),Vd=n(`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),at=s("a"),Qd=n("microsoft/layoutlmv2-base-uncased"),Gd=n(" architecture."),Hd=u(),ze=s("p"),Kd=n("Configuration objects inherit from "),qn=s("a"),Xd=n("PretrainedConfig"),Yd=n(` and can be used to control the model outputs. Read the
documentation from `),Pn=s("a"),Zd=n("PretrainedConfig"),Jd=n(" for more information."),eu=u(),v(He.$$.fragment),Rr=u(),Fe=s("h2"),Ke=s("a"),os=s("span"),v(st.$$.fragment),ou=u(),ts=s("span"),tu=n("LayoutLMv2FeatureExtractor"),Ur=u(),X=s("div"),v(rt.$$.fragment),nu=u(),ns=s("p"),au=n(`Constructs a LayoutLMv2 feature extractor. This can be used to resize document images to the same size, as well as
to apply OCR on them in order to get a list of words and normalized bounding boxes.`),su=u(),it=s("p"),ru=n("This feature extractor inherits from "),as=s("code"),iu=n("PreTrainedFeatureExtractor()"),lu=n(` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),cu=u(),ge=s("div"),v(lt.$$.fragment),du=u(),ss=s("p"),uu=n("Main method to prepare for the model one or several image(s)."),pu=u(),v(Xe.$$.fragment),Wr=u(),qe=s("h2"),Ye=s("a"),rs=s("span"),v(ct.$$.fragment),mu=u(),is=s("span"),hu=n("LayoutLMv2Tokenizer"),Br=u(),O=s("div"),v(dt.$$.fragment),fu=u(),N=s("p"),gu=n("Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),jn=s("a"),_u=n("LayoutLMv2Tokenizer"),vu=n(` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),ls=s("code"),yu=n("input_ids"),bu=n(", "),cs=s("code"),Lu=n("attention_mask"),wu=n(", "),ds=s("code"),ku=n("token_type_ids"),xu=n(", "),us=s("code"),Tu=n("bbox"),Mu=n(`, and
optional `),ps=s("code"),$u=n("labels"),Eu=n(" (for token classification)."),zu=u(),ut=s("p"),Fu=n("This tokenizer inherits from "),Cn=s("a"),qu=n("PreTrainedTokenizer"),Pu=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ju=u(),In=s("p"),An=s("a"),Cu=n("LayoutLMv2Tokenizer"),Iu=n(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),Au=u(),Ze=s("div"),v(pt.$$.fragment),Du=u(),ms=s("p"),Ou=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Nu=u(),Dn=s("div"),v(mt.$$.fragment),Vr=u(),Pe=s("h2"),Je=s("a"),hs=s("span"),v(ht.$$.fragment),Su=u(),fs=s("span"),Ru=n("LayoutLMv2TokenizerFast"),Qr=u(),Y=s("div"),v(ft.$$.fragment),Uu=u(),gt=s("p"),Wu=n("Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),gs=s("em"),Bu=n("tokenizers"),Vu=n(" library). Based on WordPiece."),Qu=u(),_t=s("p"),Gu=n("This tokenizer inherits from "),On=s("a"),Hu=n("PreTrainedTokenizerFast"),Ku=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Xu=u(),eo=s("div"),v(vt.$$.fragment),Yu=u(),_s=s("p"),Zu=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Gr=u(),je=s("h2"),oo=s("a"),vs=s("span"),v(yt.$$.fragment),Ju=u(),ys=s("span"),ep=n("LayoutLMv2Processor"),Hr=u(),U=s("div"),v(bt.$$.fragment),op=u(),bs=s("p"),tp=n(`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),np=u(),Nn=s("p"),Sn=s("a"),ap=n("LayoutLMv2Processor"),sp=n(" offers all the functionalities you need to prepare data for the model."),rp=u(),q=s("p"),ip=n("It first uses "),Rn=s("a"),lp=n("LayoutLMv2FeatureExtractor"),cp=n(` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Un=s("a"),dp=n("LayoutLMv2Tokenizer"),up=n(` or
`),Wn=s("a"),pp=n("LayoutLMv2TokenizerFast"),mp=n(", which turns the words and bounding boxes into token-level "),Ls=s("code"),hp=n("input_ids"),fp=n(`,
`),ws=s("code"),gp=n("attention_mask"),_p=n(", "),ks=s("code"),vp=n("token_type_ids"),yp=n(", "),xs=s("code"),bp=n("bbox"),Lp=n(". Optionally, one can provide integer "),Ts=s("code"),wp=n("word_labels"),kp=n(`, which are turned
into token-level `),Ms=s("code"),xp=n("labels"),Tp=n(" for token classification tasks (such as FUNSD, CORD)."),Mp=u(),_e=s("div"),v(Lt.$$.fragment),$p=u(),$=s("p"),Ep=n("This method first forwards the "),$s=s("code"),zp=n("images"),Fp=n(" argument to "),wt=s("a"),Es=s("strong"),qp=n("call"),Pp=n("()"),jp=n(`. In case
`),Bn=s("a"),Cp=n("LayoutLMv2FeatureExtractor"),Ip=n(" was initialized with "),zs=s("code"),Ap=n("apply_ocr"),Dp=n(" set to "),Fs=s("code"),Op=n("True"),Np=n(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),kt=s("a"),qs=s("strong"),Sp=n("call"),Rp=n("()"),Up=n(` and returns the output,
together with resized `),Ps=s("code"),Wp=n("images"),Bp=n(". In case "),Vn=s("a"),Vp=n("LayoutLMv2FeatureExtractor"),Qp=n(" was initialized with "),js=s("code"),Gp=n("apply_ocr"),Hp=n(` set to
`),Cs=s("code"),Kp=n("False"),Xp=n(", it passes the words ("),Is=s("code"),Yp=n("text"),Zp=n("/"),As=s("code"),Jp=n("text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),em=n("."),om=u(),Ds=s("p"),tm=n("Please refer to the docstring of the above two methods for more information."),Kr=u(),Ce=s("h2"),to=s("a"),Os=s("span"),v(xt.$$.fragment),nm=u(),Ns=s("span"),am=n("LayoutLMv2Model"),Xr=u(),le=s("div"),v(Tt.$$.fragment),sm=u(),Mt=s("p"),rm=n(`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),$t=s("a"),im=n("torch.nn.Module"),lm=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cm=u(),te=s("div"),v(Et.$$.fragment),dm=u(),Ie=s("p"),um=n("The "),Qn=s("a"),pm=n("LayoutLMv2Model"),mm=n(" forward method, overrides the "),Ss=s("code"),hm=n("__call__"),fm=n(" special method."),gm=u(),v(no.$$.fragment),_m=u(),v(ao.$$.fragment),Yr=u(),Ae=s("h2"),so=s("a"),Rs=s("span"),v(zt.$$.fragment),vm=u(),Us=s("span"),ym=n("LayoutLMv2ForSequenceClassification"),Zr=u(),Z=s("div"),v(Ft.$$.fragment),bm=u(),qt=s("p"),Lm=n(`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),Pt=s("a"),wm=n("RVL-CDIP"),km=n(" dataset."),xm=u(),jt=s("p"),Tm=n("This model is a PyTorch "),Ct=s("a"),Mm=n("torch.nn.Module"),$m=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Em=u(),ne=s("div"),v(It.$$.fragment),zm=u(),De=s("p"),Fm=n("The "),Gn=s("a"),qm=n("LayoutLMv2ForSequenceClassification"),Pm=n(" forward method, overrides the "),Ws=s("code"),jm=n("__call__"),Cm=n(" special method."),Im=u(),v(ro.$$.fragment),Am=u(),v(io.$$.fragment),Jr=u(),Oe=s("h2"),lo=s("a"),Bs=s("span"),v(At.$$.fragment),Dm=u(),Vs=s("span"),Om=n("LayoutLMv2ForTokenClassification"),ei=u(),J=s("div"),v(Dt.$$.fragment),Nm=u(),ee=s("p"),Sm=n(`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),Ot=s("a"),Rm=n("FUNSD"),Um=n(", "),Nt=s("a"),Wm=n("SROIE"),Bm=n(`,
`),St=s("a"),Vm=n("CORD"),Qm=n(" and "),Rt=s("a"),Gm=n("Kleister-NDA"),Hm=n("."),Km=u(),Ut=s("p"),Xm=n("This model is a PyTorch "),Wt=s("a"),Ym=n("torch.nn.Module"),Zm=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Jm=u(),ae=s("div"),v(Bt.$$.fragment),eh=u(),Ne=s("p"),oh=n("The "),Hn=s("a"),th=n("LayoutLMv2ForTokenClassification"),nh=n(" forward method, overrides the "),Qs=s("code"),ah=n("__call__"),sh=n(" special method."),rh=u(),v(co.$$.fragment),ih=u(),v(uo.$$.fragment),oi=u(),Se=s("h2"),po=s("a"),Gs=s("span"),v(Vt.$$.fragment),lh=u(),Hs=s("span"),ch=n("LayoutLMv2ForQuestionAnswering"),ti=u(),oe=s("div"),v(Qt.$$.fragment),dh=u(),ce=s("p"),uh=n(`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),Gt=s("a"),ph=n("DocVQA"),mh=n(` (a linear layer on top of the text part of the hidden-states output to
compute `),Ks=s("code"),hh=n("span start logits"),fh=n(" and "),Xs=s("code"),gh=n("span end logits"),_h=n(")."),vh=u(),Ht=s("p"),yh=n("This model is a PyTorch "),Kt=s("a"),bh=n("torch.nn.Module"),Lh=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wh=u(),se=s("div"),v(Xt.$$.fragment),kh=u(),Re=s("p"),xh=n("The "),Kn=s("a"),Th=n("LayoutLMv2ForQuestionAnswering"),Mh=n(" forward method, overrides the "),Ys=s("code"),$h=n("__call__"),Eh=n(" special method."),zh=u(),v(mo.$$.fragment),Fh=u(),v(ho.$$.fragment),this.h()},l(o){const c=Y_('[data-svelte="svelte-1phssyn"]',document.head);h=r(c,"META",{name:!0,content:!0}),c.forEach(t),T=p(o),_=r(o,"H1",{class:!0});var Yt=i(_);g=r(Yt,"A",{id:!0,class:!0,href:!0});var Zs=i(g);x=r(Zs,"SPAN",{});var Js=i(x);y(d.$$.fragment,Js),Js.forEach(t),Zs.forEach(t),f=p(Yt),D=r(Yt,"SPAN",{});var er=i(D);Ci=a(er,"LayoutLMV2"),er.forEach(t),Yt.forEach(t),sr=p(o),xe=r(o,"H2",{class:!0});var Zt=i(xe);We=r(Zt,"A",{id:!0,class:!0,href:!0});var or=i(We);pa=r(or,"SPAN",{});var tr=i(pa);y(Mo.$$.fragment,tr),tr.forEach(t),or.forEach(t),Ii=p(Zt),ma=r(Zt,"SPAN",{});var nr=i(ma);Ai=a(nr,"Overview"),nr.forEach(t),Zt.forEach(t),rr=p(o),ue=r(o,"P",{});var Ue=i(ue);Di=a(Ue,"The LayoutLMV2 model was proposed in "),$o=r(Ue,"A",{href:!0,rel:!0});var ar=i($o);Oi=a(ar,"LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),ar.forEach(t),Ni=a(Ue,` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),Jt=r(Ue,"A",{href:!0});var Ih=i(Jt);Si=a(Ih,"LayoutLM"),Ih.forEach(t),Ri=a(Ue,` to obtain
state-of-the-art results across several document image understanding benchmarks:`),Ue.forEach(t),ir=p(o),pe=r(o,"UL",{});var Xn=i(pe);H=r(Xn,"LI",{});var ve=i(H);Ui=a(ve,"information extraction from scanned documents: the "),Eo=r(ve,"A",{href:!0,rel:!0});var Ah=i(Eo);Wi=a(Ah,"FUNSD"),Ah.forEach(t),Bi=a(ve,` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),zo=r(ve,"A",{href:!0,rel:!0});var Dh=i(zo);Vi=a(Dh,"CORD"),Dh.forEach(t),Qi=a(ve,`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),Fo=r(ve,"A",{href:!0,rel:!0});var Oh=i(Fo);Gi=a(Oh,"SROIE"),Oh.forEach(t),Hi=a(ve,` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),qo=r(ve,"A",{href:!0,rel:!0});var Nh=i(qo);Ki=a(Nh,"Kleister-NDA"),Nh.forEach(t),Xi=a(ve,` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),ve.forEach(t),Yi=p(Xn),Po=r(Xn,"LI",{});var ai=i(Po);Zi=a(ai,"document image classification: the "),jo=r(ai,"A",{href:!0,rel:!0});var Sh=i(jo);Ji=a(Sh,"RVL-CDIP"),Sh.forEach(t),el=a(ai,` dataset (a collection of
400,000 images belonging to one of 16 classes).`),ai.forEach(t),ol=p(Xn),Co=r(Xn,"LI",{});var si=i(Co);tl=a(si,"document visual question answering: the "),Io=r(si,"A",{href:!0,rel:!0});var Rh=i(Io);nl=a(Rh,"DocVQA"),Rh.forEach(t),al=a(si,` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),si.forEach(t),Xn.forEach(t),lr=p(o),en=r(o,"P",{});var Uh=i(en);sl=a(Uh,"The abstract from the paper is the following:"),Uh.forEach(t),cr=p(o),on=r(o,"P",{});var Wh=i(on);ha=r(Wh,"EM",{});var Bh=i(ha);rl=a(Bh,`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
its effective model architecture and the advantage of large-scale unlabeled scanned/digital-born documents. In this
paper, we present LayoutLMv2 by pre-training text, layout and image in a multi-modal framework, where new model
architectures and pre-training tasks are leveraged. Specifically, LayoutLMv2 not only uses the existing masked
visual-language modeling task but also the new text-image alignment and text-image matching tasks in the pre-training
stage, where cross-modality interaction is better learned. Meanwhile, it also integrates a spatial-aware self-attention
mechanism into the Transformer architecture, so that the model can fully understand the relative positional
relationship among different text blocks. Experiment results show that LayoutLMv2 outperforms strong baselines and
achieves new state-of-the-art results on a wide variety of downstream visually-rich document understanding tasks,
including FUNSD (0.7895 -> 0.8420), CORD (0.9493 -> 0.9601), SROIE (0.9524 -> 0.9781), Kleister-NDA (0.834 -> 0.852),
RVL-CDIP (0.9443 -> 0.9564), and DocVQA (0.7295 -> 0.8672). The pre-trained LayoutLMv2 model is publicly available at
this https URL.`),Bh.forEach(t),Wh.forEach(t),dr=p(o),tn=r(o,"P",{});var Vh=i(tn);il=a(Vh,"Tips:"),Vh.forEach(t),ur=p(o),W=r(o,"UL",{});var ye=i(W);fa=r(ye,"LI",{});var Qh=i(fa);ll=a(Qh,`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),Qh.forEach(t),cl=p(ye),Ao=r(ye,"LI",{});var ri=i(Ao);dl=a(ri,`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),Do=r(ri,"A",{href:!0,rel:!0});var Gh=i(Do);ul=a(Gh,"paper"),Gh.forEach(t),pl=a(ri,"."),ri.forEach(t),ml=p(ye),Oo=r(ye,"LI",{});var ii=i(Oo);hl=a(ii,"Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),No=r(ii,"A",{href:!0,rel:!0});var Hh=i(No);fl=a(Hh,"here"),Hh.forEach(t),gl=a(ii,"."),ii.forEach(t),_l=p(ye),Te=r(ye,"LI",{});var Yn=i(Te);vl=a(Yn,"LayoutLMv2 uses Facebook AI\u2019s "),So=r(Yn,"A",{href:!0,rel:!0});var Kh=i(So);yl=a(Kh,"Detectron2"),Kh.forEach(t),bl=a(Yn,` package for its visual
backbone. See `),Ro=r(Yn,"A",{href:!0,rel:!0});var Xh=i(Ro);Ll=a(Xh,"this link"),Xh.forEach(t),wl=a(Yn,` for installation
instructions.`),Yn.forEach(t),kl=p(ye),M=r(ye,"LI",{});var z=i(M);xl=a(z,"In addition to "),ga=r(z,"CODE",{});var Yh=i(ga);Tl=a(Yh,"input_ids"),Yh.forEach(t),Ml=a(z,", "),nn=r(z,"A",{href:!0});var Zh=i(nn);$l=a(Zh,"forward()"),Zh.forEach(t),El=a(z,` expects 2 additional inputs, namely
`),_a=r(z,"CODE",{});var Jh=i(_a);zl=a(Jh,"image"),Jh.forEach(t),Fl=a(z," and "),va=r(z,"CODE",{});var ef=i(va);ql=a(ef,"bbox"),ef.forEach(t),Pl=a(z,". The "),ya=r(z,"CODE",{});var of=i(ya);jl=a(of,"image"),of.forEach(t),Cl=a(z,` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),ba=r(z,"CODE",{});var tf=i(ba);Il=a(tf,"image"),tf.forEach(t),Al=a(z,` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),La=r(z,"CODE",{});var nf=i(La);Dl=a(nf,"torch.Tensor"),nf.forEach(t),Ol=a(z," or a "),wa=r(z,"CODE",{});var af=i(wa);Nl=a(af,"Detectron2.structures.ImageList"),af.forEach(t),Sl=a(z,`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),ka=r(z,"CODE",{});var sf=i(ka);Rl=a(sf,"bbox"),sf.forEach(t),Ul=a(z,` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),an=r(z,"A",{href:!0});var rf=i(an);Wl=a(rf,"LayoutLMModel"),rf.forEach(t),Bl=a(z,`. These can be obtained using an
external OCR engine such as Google\u2019s `),Uo=r(z,"A",{href:!0,rel:!0});var lf=i(Uo);Vl=a(lf,"Tesseract"),lf.forEach(t),Ql=a(z," (there\u2019s a "),Wo=r(z,"A",{href:!0,rel:!0});var cf=i(Wo);Gl=a(cf,`Python
wrapper`),cf.forEach(t),Hl=a(z,` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),z.forEach(t),ye.forEach(t),pr=p(o),y(Bo.$$.fragment,o),mr=p(o),me=r(o,"P",{});var Zn=i(me);Kl=a(Zn,"Here, "),xa=r(Zn,"CODE",{});var df=i(xa);Xl=a(df,"width"),df.forEach(t),Yl=a(Zn," and "),Ta=r(Zn,"CODE",{});var uf=i(Ta);Zl=a(uf,"height"),uf.forEach(t),Jl=a(Zn,` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),Zn.forEach(t),hr=p(o),y(Vo.$$.fragment,o),fr=p(o),Be=r(o,"P",{});var li=i(Be);ec=a(li,"However, this model includes a brand new "),sn=r(li,"A",{href:!0});var pf=i(sn);oc=a(pf,"LayoutLMv2Processor"),pf.forEach(t),tc=a(li,` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),li.forEach(t),gr=p(o),he=r(o,"UL",{});var Jn=i(he);I=r(Jn,"LI",{});var S=i(I);nc=a(S,"Internally, "),rn=r(S,"A",{href:!0});var mf=i(rn);ac=a(mf,"LayoutLMv2Model"),mf.forEach(t),sc=a(S," will send the "),Ma=r(S,"CODE",{});var hf=i(Ma);rc=a(hf,"image"),hf.forEach(t),ic=a(S,` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),$a=r(S,"CODE",{});var ff=i($a);lc=a(ff,"image_feature_pool_shape"),ff.forEach(t),cc=a(S,` attribute of
`),ln=r(S,"A",{href:!0});var gf=i(ln);dc=a(gf,"LayoutLMv2Config"),gf.forEach(t),uc=a(S,`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),Ea=r(S,"CODE",{});var _f=i(Ea);pc=a(_f,"seq_length"),_f.forEach(t),mc=a(S," + "),za=r(S,"CODE",{});var vf=i(za);hc=a(vf,"image_feature_pool_shape[0]"),vf.forEach(t),fc=a(S,` *
`),Fa=r(S,"CODE",{});var yf=i(Fa);gc=a(yf,"config.image_feature_pool_shape[1]"),yf.forEach(t),_c=a(S,"."),S.forEach(t),vc=p(Jn),Qo=r(Jn,"LI",{});var ci=i(Qo);yc=a(ci,"When calling "),cn=r(ci,"A",{href:!0});var bf=i(cn);bc=a(bf,"from_pretrained()"),bf.forEach(t),Lc=a(ci,`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),ci.forEach(t),wc=p(Jn),Go=r(Jn,"LI",{});var di=i(Go);kc=a(di,"If you want to train the model in a distributed environment, make sure to call "),qa=r(di,"CODE",{});var Lf=i(qa);xc=a(Lf,"synchronize_batch_norm"),Lf.forEach(t),Tc=a(di,` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),di.forEach(t),Jn.forEach(t),_r=p(o),Ve=r(o,"P",{});var ui=i(Ve);Mc=a(ui,`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),dn=r(ui,"A",{href:!0});var wf=i(dn);$c=a(wf,"LayoutXLM\u2019s documentation page"),wf.forEach(t),Ec=a(ui,"."),ui.forEach(t),vr=p(o),Me=r(o,"H2",{class:!0});var pi=i(Me);Qe=r(pi,"A",{id:!0,class:!0,href:!0});var kf=i(Qe);Pa=r(kf,"SPAN",{});var xf=i(Pa);y(Ho.$$.fragment,xf),xf.forEach(t),kf.forEach(t),zc=p(pi),ja=r(pi,"SPAN",{});var Tf=i(ja);Fc=a(Tf,"Usage: LayoutLMv2Processor"),Tf.forEach(t),pi.forEach(t),yr=p(o),B=r(o,"P",{});var be=i(B);qc=a(be,"The easiest way to prepare data for the model is to use "),un=r(be,"A",{href:!0});var Mf=i(un);Pc=a(Mf,"LayoutLMv2Processor"),Mf.forEach(t),jc=a(be,`, which internally
combines a feature extractor (`),pn=r(be,"A",{href:!0});var $f=i(pn);Cc=a($f,"LayoutLMv2FeatureExtractor"),$f.forEach(t),Ic=a(be,`) and a tokenizer
(`),mn=r(be,"A",{href:!0});var Ef=i(mn);Ac=a(Ef,"LayoutLMv2Tokenizer"),Ef.forEach(t),Dc=a(be," or "),hn=r(be,"A",{href:!0});var zf=i(hn);Oc=a(zf,"LayoutLMv2TokenizerFast"),zf.forEach(t),Nc=a(be,`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),be.forEach(t),br=p(o),y(Ko.$$.fragment,o),Lr=p(o),E=r(o,"P",{});var j=i(E);Sc=a(j,"In short, one can provide a document image (and possibly additional data) to "),fn=r(j,"A",{href:!0});var Ff=i(fn);Rc=a(Ff,"LayoutLMv2Processor"),Ff.forEach(t),Uc=a(j,`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),gn=r(j,"A",{href:!0});var qf=i(gn);Wc=a(qf,"LayoutLMv2FeatureExtractor"),qf.forEach(t),Bc=a(j,` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),Ca=r(j,"CODE",{});var Pf=i(Ca);Vc=a(Pf,"image"),Pf.forEach(t),Qc=a(j,` input. The words and
normalized bounding boxes are then provided to `),_n=r(j,"A",{href:!0});var jf=i(_n);Gc=a(jf,"LayoutLMv2Tokenizer"),jf.forEach(t),Hc=a(j,` or
`),vn=r(j,"A",{href:!0});var Cf=i(vn);Kc=a(Cf,"LayoutLMv2TokenizerFast"),Cf.forEach(t),Xc=a(j,", which converts them to token-level "),Ia=r(j,"CODE",{});var If=i(Ia);Yc=a(If,"input_ids"),If.forEach(t),Zc=a(j,`,
`),Aa=r(j,"CODE",{});var Af=i(Aa);Jc=a(Af,"attention_mask"),Af.forEach(t),ed=a(j,", "),Da=r(j,"CODE",{});var Df=i(Da);od=a(Df,"token_type_ids"),Df.forEach(t),td=a(j,", "),Oa=r(j,"CODE",{});var Of=i(Oa);nd=a(Of,"bbox"),Of.forEach(t),ad=a(j,`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Na=r(j,"CODE",{});var Nf=i(Na);sd=a(Nf,"labels"),Nf.forEach(t),rd=a(j,"."),j.forEach(t),wr=p(o),R=r(o,"P",{});var de=i(R);yn=r(de,"A",{href:!0});var Sf=i(yn);id=a(Sf,"LayoutLMv2Processor"),Sf.forEach(t),ld=a(de," uses "),Xo=r(de,"A",{href:!0,rel:!0});var Rf=i(Xo);cd=a(Rf,"PyTesseract"),Rf.forEach(t),dd=a(de,`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),bn=r(de,"A",{href:!0});var Uf=i(bn);ud=a(Uf,"LayoutLMv2FeatureExtractor"),Uf.forEach(t),pd=a(de," with "),Sa=r(de,"CODE",{});var Wf=i(Sa);md=a(Wf,"apply_ocr"),Wf.forEach(t),hd=a(de," set to "),Ra=r(de,"CODE",{});var Bf=i(Ra);fd=a(Bf,"False"),Bf.forEach(t),gd=a(de,"."),de.forEach(t),kr=p(o),Ln=r(o,"P",{});var Vf=i(Ln);_d=a(Vf,`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),Vf.forEach(t),xr=p(o),wn=r(o,"P",{});var Qf=i(wn);Ua=r(Qf,"STRONG",{});var Gf=i(Ua);vd=a(Gf,`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),Gf.forEach(t),Qf.forEach(t),Tr=p(o),kn=r(o,"P",{});var Hf=i(kn);yd=a(Hf,`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),Hf.forEach(t),Mr=p(o),y(Yo.$$.fragment,o),$r=p(o),xn=r(o,"P",{});var Kf=i(xn);Wa=r(Kf,"STRONG",{});var Xf=i(Wa);bd=a(Xf,"Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),Xf.forEach(t),Kf.forEach(t),Er=p(o),fe=r(o,"P",{});var ea=i(fe);Ld=a(ea,"In case one wants to do OCR themselves, one can initialize the feature extractor with "),Ba=r(ea,"CODE",{});var Yf=i(Ba);wd=a(Yf,"apply_ocr"),Yf.forEach(t),kd=a(ea,` set to
`),Va=r(ea,"CODE",{});var Zf=i(Va);xd=a(Zf,"False"),Zf.forEach(t),Td=a(ea,`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),ea.forEach(t),zr=p(o),y(Zo.$$.fragment,o),Fr=p(o),Tn=r(o,"P",{});var Jf=i(Tn);Qa=r(Jf,"STRONG",{});var eg=i(Qa);Md=a(eg,"Use case 3: token classification (training), apply_ocr=False"),eg.forEach(t),Jf.forEach(t),qr=p(o),V=r(o,"P",{});var Le=i(V);$d=a(Le,`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),Ga=r(Le,"CODE",{});var og=i(Ga);Ed=a(og,"labels"),og.forEach(t),zd=a(Le,`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),Ha=r(Le,"CODE",{});var tg=i(Ha);Fd=a(tg,"ignore_index"),tg.forEach(t),qd=a(Le,` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),Ka=r(Le,"CODE",{});var ng=i(Ka);Pd=a(ng,"only_label_first_subword"),ng.forEach(t),jd=a(Le," set to "),Xa=r(Le,"CODE",{});var ag=i(Xa);Cd=a(ag,"False"),ag.forEach(t),Id=a(Le,"."),Le.forEach(t),Pr=p(o),y(Jo.$$.fragment,o),jr=p(o),Mn=r(o,"P",{});var sg=i(Mn);Ya=r(sg,"STRONG",{});var rg=i(Ya);Ad=a(rg,"Use case 4: visual question answering (inference), apply_ocr=True"),rg.forEach(t),sg.forEach(t),Cr=p(o),$n=r(o,"P",{});var ig=i($n);Dd=a(ig,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),ig.forEach(t),Ir=p(o),y(et.$$.fragment,o),Ar=p(o),En=r(o,"P",{});var lg=i(En);Za=r(lg,"STRONG",{});var cg=i(Za);Od=a(cg,"Use case 5: visual question answering (inference), apply_ocr=False"),cg.forEach(t),lg.forEach(t),Dr=p(o),zn=r(o,"P",{});var dg=i(zn);Nd=a(dg,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),dg.forEach(t),Or=p(o),y(ot.$$.fragment,o),Nr=p(o),$e=r(o,"H2",{class:!0});var mi=i($e);Ge=r(mi,"A",{id:!0,class:!0,href:!0});var ug=i(Ge);Ja=r(ug,"SPAN",{});var pg=i(Ja);y(tt.$$.fragment,pg),pg.forEach(t),ug.forEach(t),Sd=p(mi),es=r(mi,"SPAN",{});var mg=i(es);Rd=a(mg,"LayoutLMv2Config"),mg.forEach(t),mi.forEach(t),Sr=p(o),K=r(o,"DIV",{class:!0});var fo=i(K);y(nt.$$.fragment,fo),Ud=p(fo),Ee=r(fo,"P",{});var oa=i(Ee);Wd=a(oa,"This is the configuration class to store the configuration of a "),Fn=r(oa,"A",{href:!0});var hg=i(Fn);Bd=a(hg,"LayoutLMv2Model"),hg.forEach(t),Vd=a(oa,`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),at=r(oa,"A",{href:!0,rel:!0});var fg=i(at);Qd=a(fg,"microsoft/layoutlmv2-base-uncased"),fg.forEach(t),Gd=a(oa," architecture."),oa.forEach(t),Hd=p(fo),ze=r(fo,"P",{});var ta=i(ze);Kd=a(ta,"Configuration objects inherit from "),qn=r(ta,"A",{href:!0});var gg=i(qn);Xd=a(gg,"PretrainedConfig"),gg.forEach(t),Yd=a(ta,` and can be used to control the model outputs. Read the
documentation from `),Pn=r(ta,"A",{href:!0});var _g=i(Pn);Zd=a(_g,"PretrainedConfig"),_g.forEach(t),Jd=a(ta," for more information."),ta.forEach(t),eu=p(fo),y(He.$$.fragment,fo),fo.forEach(t),Rr=p(o),Fe=r(o,"H2",{class:!0});var hi=i(Fe);Ke=r(hi,"A",{id:!0,class:!0,href:!0});var vg=i(Ke);os=r(vg,"SPAN",{});var yg=i(os);y(st.$$.fragment,yg),yg.forEach(t),vg.forEach(t),ou=p(hi),ts=r(hi,"SPAN",{});var bg=i(ts);tu=a(bg,"LayoutLMv2FeatureExtractor"),bg.forEach(t),hi.forEach(t),Ur=p(o),X=r(o,"DIV",{class:!0});var go=i(X);y(rt.$$.fragment,go),nu=p(go),ns=r(go,"P",{});var Lg=i(ns);au=a(Lg,`Constructs a LayoutLMv2 feature extractor. This can be used to resize document images to the same size, as well as
to apply OCR on them in order to get a list of words and normalized bounding boxes.`),Lg.forEach(t),su=p(go),it=r(go,"P",{});var fi=i(it);ru=a(fi,"This feature extractor inherits from "),as=r(fi,"CODE",{});var wg=i(as);iu=a(wg,"PreTrainedFeatureExtractor()"),wg.forEach(t),lu=a(fi,` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),fi.forEach(t),cu=p(go),ge=r(go,"DIV",{class:!0});var na=i(ge);y(lt.$$.fragment,na),du=p(na),ss=r(na,"P",{});var kg=i(ss);uu=a(kg,"Main method to prepare for the model one or several image(s)."),kg.forEach(t),pu=p(na),y(Xe.$$.fragment,na),na.forEach(t),go.forEach(t),Wr=p(o),qe=r(o,"H2",{class:!0});var gi=i(qe);Ye=r(gi,"A",{id:!0,class:!0,href:!0});var xg=i(Ye);rs=r(xg,"SPAN",{});var Tg=i(rs);y(ct.$$.fragment,Tg),Tg.forEach(t),xg.forEach(t),mu=p(gi),is=r(gi,"SPAN",{});var Mg=i(is);hu=a(Mg,"LayoutLMv2Tokenizer"),Mg.forEach(t),gi.forEach(t),Br=p(o),O=r(o,"DIV",{class:!0});var re=i(O);y(dt.$$.fragment,re),fu=p(re),N=r(re,"P",{});var Q=i(N);gu=a(Q,"Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),jn=r(Q,"A",{href:!0});var $g=i(jn);_u=a($g,"LayoutLMv2Tokenizer"),$g.forEach(t),vu=a(Q,` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),ls=r(Q,"CODE",{});var Eg=i(ls);yu=a(Eg,"input_ids"),Eg.forEach(t),bu=a(Q,", "),cs=r(Q,"CODE",{});var zg=i(cs);Lu=a(zg,"attention_mask"),zg.forEach(t),wu=a(Q,", "),ds=r(Q,"CODE",{});var Fg=i(ds);ku=a(Fg,"token_type_ids"),Fg.forEach(t),xu=a(Q,", "),us=r(Q,"CODE",{});var qg=i(us);Tu=a(qg,"bbox"),qg.forEach(t),Mu=a(Q,`, and
optional `),ps=r(Q,"CODE",{});var Pg=i(ps);$u=a(Pg,"labels"),Pg.forEach(t),Eu=a(Q," (for token classification)."),Q.forEach(t),zu=p(re),ut=r(re,"P",{});var _i=i(ut);Fu=a(_i,"This tokenizer inherits from "),Cn=r(_i,"A",{href:!0});var jg=i(Cn);qu=a(jg,"PreTrainedTokenizer"),jg.forEach(t),Pu=a(_i,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),_i.forEach(t),ju=p(re),In=r(re,"P",{});var qh=i(In);An=r(qh,"A",{href:!0});var Cg=i(An);Cu=a(Cg,"LayoutLMv2Tokenizer"),Cg.forEach(t),Iu=a(qh,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),qh.forEach(t),Au=p(re),Ze=r(re,"DIV",{class:!0});var vi=i(Ze);y(pt.$$.fragment,vi),Du=p(vi),ms=r(vi,"P",{});var Ig=i(ms);Ou=a(Ig,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Ig.forEach(t),vi.forEach(t),Nu=p(re),Dn=r(re,"DIV",{class:!0});var Ag=i(Dn);y(mt.$$.fragment,Ag),Ag.forEach(t),re.forEach(t),Vr=p(o),Pe=r(o,"H2",{class:!0});var yi=i(Pe);Je=r(yi,"A",{id:!0,class:!0,href:!0});var Dg=i(Je);hs=r(Dg,"SPAN",{});var Og=i(hs);y(ht.$$.fragment,Og),Og.forEach(t),Dg.forEach(t),Su=p(yi),fs=r(yi,"SPAN",{});var Ng=i(fs);Ru=a(Ng,"LayoutLMv2TokenizerFast"),Ng.forEach(t),yi.forEach(t),Qr=p(o),Y=r(o,"DIV",{class:!0});var _o=i(Y);y(ft.$$.fragment,_o),Uu=p(_o),gt=r(_o,"P",{});var bi=i(gt);Wu=a(bi,"Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),gs=r(bi,"EM",{});var Sg=i(gs);Bu=a(Sg,"tokenizers"),Sg.forEach(t),Vu=a(bi," library). Based on WordPiece."),bi.forEach(t),Qu=p(_o),_t=r(_o,"P",{});var Li=i(_t);Gu=a(Li,"This tokenizer inherits from "),On=r(Li,"A",{href:!0});var Rg=i(On);Hu=a(Rg,"PreTrainedTokenizerFast"),Rg.forEach(t),Ku=a(Li,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Li.forEach(t),Xu=p(_o),eo=r(_o,"DIV",{class:!0});var wi=i(eo);y(vt.$$.fragment,wi),Yu=p(wi),_s=r(wi,"P",{});var Ug=i(_s);Zu=a(Ug,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Ug.forEach(t),wi.forEach(t),_o.forEach(t),Gr=p(o),je=r(o,"H2",{class:!0});var ki=i(je);oo=r(ki,"A",{id:!0,class:!0,href:!0});var Wg=i(oo);vs=r(Wg,"SPAN",{});var Bg=i(vs);y(yt.$$.fragment,Bg),Bg.forEach(t),Wg.forEach(t),Ju=p(ki),ys=r(ki,"SPAN",{});var Vg=i(ys);ep=a(Vg,"LayoutLMv2Processor"),Vg.forEach(t),ki.forEach(t),Hr=p(o),U=r(o,"DIV",{class:!0});var we=i(U);y(bt.$$.fragment,we),op=p(we),bs=r(we,"P",{});var Qg=i(bs);tp=a(Qg,`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),Qg.forEach(t),np=p(we),Nn=r(we,"P",{});var Ph=i(Nn);Sn=r(Ph,"A",{href:!0});var Gg=i(Sn);ap=a(Gg,"LayoutLMv2Processor"),Gg.forEach(t),sp=a(Ph," offers all the functionalities you need to prepare data for the model."),Ph.forEach(t),rp=p(we),q=r(we,"P",{});var C=i(q);ip=a(C,"It first uses "),Rn=r(C,"A",{href:!0});var Hg=i(Rn);lp=a(Hg,"LayoutLMv2FeatureExtractor"),Hg.forEach(t),cp=a(C,` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Un=r(C,"A",{href:!0});var Kg=i(Un);dp=a(Kg,"LayoutLMv2Tokenizer"),Kg.forEach(t),up=a(C,` or
`),Wn=r(C,"A",{href:!0});var Xg=i(Wn);pp=a(Xg,"LayoutLMv2TokenizerFast"),Xg.forEach(t),mp=a(C,", which turns the words and bounding boxes into token-level "),Ls=r(C,"CODE",{});var Yg=i(Ls);hp=a(Yg,"input_ids"),Yg.forEach(t),fp=a(C,`,
`),ws=r(C,"CODE",{});var Zg=i(ws);gp=a(Zg,"attention_mask"),Zg.forEach(t),_p=a(C,", "),ks=r(C,"CODE",{});var Jg=i(ks);vp=a(Jg,"token_type_ids"),Jg.forEach(t),yp=a(C,", "),xs=r(C,"CODE",{});var e_=i(xs);bp=a(e_,"bbox"),e_.forEach(t),Lp=a(C,". Optionally, one can provide integer "),Ts=r(C,"CODE",{});var o_=i(Ts);wp=a(o_,"word_labels"),o_.forEach(t),kp=a(C,`, which are turned
into token-level `),Ms=r(C,"CODE",{});var t_=i(Ms);xp=a(t_,"labels"),t_.forEach(t),Tp=a(C," for token classification tasks (such as FUNSD, CORD)."),C.forEach(t),Mp=p(we),_e=r(we,"DIV",{class:!0});var aa=i(_e);y(Lt.$$.fragment,aa),$p=p(aa),$=r(aa,"P",{});var F=i($);Ep=a(F,"This method first forwards the "),$s=r(F,"CODE",{});var n_=i($s);zp=a(n_,"images"),n_.forEach(t),Fp=a(F," argument to "),wt=r(F,"A",{href:!0});var jh=i(wt);Es=r(jh,"STRONG",{});var a_=i(Es);qp=a(a_,"call"),a_.forEach(t),Pp=a(jh,"()"),jh.forEach(t),jp=a(F,`. In case
`),Bn=r(F,"A",{href:!0});var s_=i(Bn);Cp=a(s_,"LayoutLMv2FeatureExtractor"),s_.forEach(t),Ip=a(F," was initialized with "),zs=r(F,"CODE",{});var r_=i(zs);Ap=a(r_,"apply_ocr"),r_.forEach(t),Dp=a(F," set to "),Fs=r(F,"CODE",{});var i_=i(Fs);Op=a(i_,"True"),i_.forEach(t),Np=a(F,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),kt=r(F,"A",{href:!0});var Ch=i(kt);qs=r(Ch,"STRONG",{});var l_=i(qs);Sp=a(l_,"call"),l_.forEach(t),Rp=a(Ch,"()"),Ch.forEach(t),Up=a(F,` and returns the output,
together with resized `),Ps=r(F,"CODE",{});var c_=i(Ps);Wp=a(c_,"images"),c_.forEach(t),Bp=a(F,". In case "),Vn=r(F,"A",{href:!0});var d_=i(Vn);Vp=a(d_,"LayoutLMv2FeatureExtractor"),d_.forEach(t),Qp=a(F," was initialized with "),js=r(F,"CODE",{});var u_=i(js);Gp=a(u_,"apply_ocr"),u_.forEach(t),Hp=a(F,` set to
`),Cs=r(F,"CODE",{});var p_=i(Cs);Kp=a(p_,"False"),p_.forEach(t),Xp=a(F,", it passes the words ("),Is=r(F,"CODE",{});var m_=i(Is);Yp=a(m_,"text"),m_.forEach(t),Zp=a(F,"/"),As=r(F,"CODE",{});var h_=i(As);Jp=a(h_,"text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),h_.forEach(t),em=a(F,"."),F.forEach(t),om=p(aa),Ds=r(aa,"P",{});var f_=i(Ds);tm=a(f_,"Please refer to the docstring of the above two methods for more information."),f_.forEach(t),aa.forEach(t),we.forEach(t),Kr=p(o),Ce=r(o,"H2",{class:!0});var xi=i(Ce);to=r(xi,"A",{id:!0,class:!0,href:!0});var g_=i(to);Os=r(g_,"SPAN",{});var __=i(Os);y(xt.$$.fragment,__),__.forEach(t),g_.forEach(t),nm=p(xi),Ns=r(xi,"SPAN",{});var v_=i(Ns);am=a(v_,"LayoutLMv2Model"),v_.forEach(t),xi.forEach(t),Xr=p(o),le=r(o,"DIV",{class:!0});var sa=i(le);y(Tt.$$.fragment,sa),sm=p(sa),Mt=r(sa,"P",{});var Ti=i(Mt);rm=a(Ti,`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),$t=r(Ti,"A",{href:!0,rel:!0});var y_=i($t);im=a(y_,"torch.nn.Module"),y_.forEach(t),lm=a(Ti,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ti.forEach(t),cm=p(sa),te=r(sa,"DIV",{class:!0});var vo=i(te);y(Et.$$.fragment,vo),dm=p(vo),Ie=r(vo,"P",{});var ra=i(Ie);um=a(ra,"The "),Qn=r(ra,"A",{href:!0});var b_=i(Qn);pm=a(b_,"LayoutLMv2Model"),b_.forEach(t),mm=a(ra," forward method, overrides the "),Ss=r(ra,"CODE",{});var L_=i(Ss);hm=a(L_,"__call__"),L_.forEach(t),fm=a(ra," special method."),ra.forEach(t),gm=p(vo),y(no.$$.fragment,vo),_m=p(vo),y(ao.$$.fragment,vo),vo.forEach(t),sa.forEach(t),Yr=p(o),Ae=r(o,"H2",{class:!0});var Mi=i(Ae);so=r(Mi,"A",{id:!0,class:!0,href:!0});var w_=i(so);Rs=r(w_,"SPAN",{});var k_=i(Rs);y(zt.$$.fragment,k_),k_.forEach(t),w_.forEach(t),vm=p(Mi),Us=r(Mi,"SPAN",{});var x_=i(Us);ym=a(x_,"LayoutLMv2ForSequenceClassification"),x_.forEach(t),Mi.forEach(t),Zr=p(o),Z=r(o,"DIV",{class:!0});var yo=i(Z);y(Ft.$$.fragment,yo),bm=p(yo),qt=r(yo,"P",{});var $i=i(qt);Lm=a($i,`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),Pt=r($i,"A",{href:!0,rel:!0});var T_=i(Pt);wm=a(T_,"RVL-CDIP"),T_.forEach(t),km=a($i," dataset."),$i.forEach(t),xm=p(yo),jt=r(yo,"P",{});var Ei=i(jt);Tm=a(Ei,"This model is a PyTorch "),Ct=r(Ei,"A",{href:!0,rel:!0});var M_=i(Ct);Mm=a(M_,"torch.nn.Module"),M_.forEach(t),$m=a(Ei,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ei.forEach(t),Em=p(yo),ne=r(yo,"DIV",{class:!0});var bo=i(ne);y(It.$$.fragment,bo),zm=p(bo),De=r(bo,"P",{});var ia=i(De);Fm=a(ia,"The "),Gn=r(ia,"A",{href:!0});var $_=i(Gn);qm=a($_,"LayoutLMv2ForSequenceClassification"),$_.forEach(t),Pm=a(ia," forward method, overrides the "),Ws=r(ia,"CODE",{});var E_=i(Ws);jm=a(E_,"__call__"),E_.forEach(t),Cm=a(ia," special method."),ia.forEach(t),Im=p(bo),y(ro.$$.fragment,bo),Am=p(bo),y(io.$$.fragment,bo),bo.forEach(t),yo.forEach(t),Jr=p(o),Oe=r(o,"H2",{class:!0});var zi=i(Oe);lo=r(zi,"A",{id:!0,class:!0,href:!0});var z_=i(lo);Bs=r(z_,"SPAN",{});var F_=i(Bs);y(At.$$.fragment,F_),F_.forEach(t),z_.forEach(t),Dm=p(zi),Vs=r(zi,"SPAN",{});var q_=i(Vs);Om=a(q_,"LayoutLMv2ForTokenClassification"),q_.forEach(t),zi.forEach(t),ei=p(o),J=r(o,"DIV",{class:!0});var Lo=i(J);y(Dt.$$.fragment,Lo),Nm=p(Lo),ee=r(Lo,"P",{});var ke=i(ee);Sm=a(ke,`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),Ot=r(ke,"A",{href:!0,rel:!0});var P_=i(Ot);Rm=a(P_,"FUNSD"),P_.forEach(t),Um=a(ke,", "),Nt=r(ke,"A",{href:!0,rel:!0});var j_=i(Nt);Wm=a(j_,"SROIE"),j_.forEach(t),Bm=a(ke,`,
`),St=r(ke,"A",{href:!0,rel:!0});var C_=i(St);Vm=a(C_,"CORD"),C_.forEach(t),Qm=a(ke," and "),Rt=r(ke,"A",{href:!0,rel:!0});var I_=i(Rt);Gm=a(I_,"Kleister-NDA"),I_.forEach(t),Hm=a(ke,"."),ke.forEach(t),Km=p(Lo),Ut=r(Lo,"P",{});var Fi=i(Ut);Xm=a(Fi,"This model is a PyTorch "),Wt=r(Fi,"A",{href:!0,rel:!0});var A_=i(Wt);Ym=a(A_,"torch.nn.Module"),A_.forEach(t),Zm=a(Fi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fi.forEach(t),Jm=p(Lo),ae=r(Lo,"DIV",{class:!0});var wo=i(ae);y(Bt.$$.fragment,wo),eh=p(wo),Ne=r(wo,"P",{});var la=i(Ne);oh=a(la,"The "),Hn=r(la,"A",{href:!0});var D_=i(Hn);th=a(D_,"LayoutLMv2ForTokenClassification"),D_.forEach(t),nh=a(la," forward method, overrides the "),Qs=r(la,"CODE",{});var O_=i(Qs);ah=a(O_,"__call__"),O_.forEach(t),sh=a(la," special method."),la.forEach(t),rh=p(wo),y(co.$$.fragment,wo),ih=p(wo),y(uo.$$.fragment,wo),wo.forEach(t),Lo.forEach(t),oi=p(o),Se=r(o,"H2",{class:!0});var qi=i(Se);po=r(qi,"A",{id:!0,class:!0,href:!0});var N_=i(po);Gs=r(N_,"SPAN",{});var S_=i(Gs);y(Vt.$$.fragment,S_),S_.forEach(t),N_.forEach(t),lh=p(qi),Hs=r(qi,"SPAN",{});var R_=i(Hs);ch=a(R_,"LayoutLMv2ForQuestionAnswering"),R_.forEach(t),qi.forEach(t),ti=p(o),oe=r(o,"DIV",{class:!0});var ko=i(oe);y(Qt.$$.fragment,ko),dh=p(ko),ce=r(ko,"P",{});var xo=i(ce);uh=a(xo,`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),Gt=r(xo,"A",{href:!0,rel:!0});var U_=i(Gt);ph=a(U_,"DocVQA"),U_.forEach(t),mh=a(xo,` (a linear layer on top of the text part of the hidden-states output to
compute `),Ks=r(xo,"CODE",{});var W_=i(Ks);hh=a(W_,"span start logits"),W_.forEach(t),fh=a(xo," and "),Xs=r(xo,"CODE",{});var B_=i(Xs);gh=a(B_,"span end logits"),B_.forEach(t),_h=a(xo,")."),xo.forEach(t),vh=p(ko),Ht=r(ko,"P",{});var Pi=i(Ht);yh=a(Pi,"This model is a PyTorch "),Kt=r(Pi,"A",{href:!0,rel:!0});var V_=i(Kt);bh=a(V_,"torch.nn.Module"),V_.forEach(t),Lh=a(Pi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pi.forEach(t),wh=p(ko),se=r(ko,"DIV",{class:!0});var To=i(se);y(Xt.$$.fragment,To),kh=p(To),Re=r(To,"P",{});var ca=i(Re);xh=a(ca,"The "),Kn=r(ca,"A",{href:!0});var Q_=i(Kn);Th=a(Q_,"LayoutLMv2ForQuestionAnswering"),Q_.forEach(t),Mh=a(ca," forward method, overrides the "),Ys=r(ca,"CODE",{});var G_=i(Ys);$h=a(G_,"__call__"),G_.forEach(t),Eh=a(ca," special method."),ca.forEach(t),zh=p(To),y(mo.$$.fragment,To),Fh=p(To),y(ho.$$.fragment,To),To.forEach(t),ko.forEach(t),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(dv)),l(g,"id","layoutlmv2"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#layoutlmv2"),l(_,"class","relative group"),l(We,"id","overview"),l(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(We,"href","#overview"),l(xe,"class","relative group"),l($o,"href","https://arxiv.org/abs/2012.14740"),l($o,"rel","nofollow"),l(Jt,"href","layoutlm"),l(Eo,"href","https://guillaumejaume.github.io/FUNSD/"),l(Eo,"rel","nofollow"),l(zo,"href","https://github.com/clovaai/cord"),l(zo,"rel","nofollow"),l(Fo,"href","https://rrc.cvc.uab.es/?ch=13"),l(Fo,"rel","nofollow"),l(qo,"href","https://github.com/applicaai/kleister-nda"),l(qo,"rel","nofollow"),l(jo,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(jo,"rel","nofollow"),l(Io,"href","https://arxiv.org/abs/2007.00398"),l(Io,"rel","nofollow"),l(Do,"href","https://arxiv.org/abs/2012.14740"),l(Do,"rel","nofollow"),l(No,"href","https://github.com/NielsRogge/Transformers-Tutorials"),l(No,"rel","nofollow"),l(So,"href","https://github.com/facebookresearch/detectron2/"),l(So,"rel","nofollow"),l(Ro,"href","https://detectron2.readthedocs.io/en/latest/tutorials/install.html"),l(Ro,"rel","nofollow"),l(nn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model.forward"),l(an,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlm#transformers.LayoutLMModel"),l(Uo,"href","https://github.com/tesseract-ocr/tesseract"),l(Uo,"rel","nofollow"),l(Wo,"href","https://pypi.org/project/pytesseract/"),l(Wo,"rel","nofollow"),l(sn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(rn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(ln,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"),l(cn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained"),l(dn,"href","layoutxlm"),l(Qe,"id","usage-layoutlmv2processor"),l(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Qe,"href","#usage-layoutlmv2processor"),l(Me,"class","relative group"),l(un,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(pn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(mn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(hn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(fn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(gn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(_n,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(vn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(yn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Xo,"href","https://pypi.org/project/pytesseract/"),l(Xo,"rel","nofollow"),l(bn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Ge,"id","transformers.LayoutLMv2Config"),l(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ge,"href","#transformers.LayoutLMv2Config"),l($e,"class","relative group"),l(Fn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(at,"href","https://huggingface.co/microsoft/layoutlmv2-base-uncased"),l(at,"rel","nofollow"),l(qn,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),l(Pn,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),l(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ke,"id","transformers.LayoutLMv2FeatureExtractor"),l(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ke,"href","#transformers.LayoutLMv2FeatureExtractor"),l(Fe,"class","relative group"),l(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ye,"id","transformers.LayoutLMv2Tokenizer"),l(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ye,"href","#transformers.LayoutLMv2Tokenizer"),l(qe,"class","relative group"),l(jn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Cn,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(An,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Je,"id","transformers.LayoutLMv2TokenizerFast"),l(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Je,"href","#transformers.LayoutLMv2TokenizerFast"),l(Pe,"class","relative group"),l(On,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),l(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(oo,"id","transformers.LayoutLMv2Processor"),l(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(oo,"href","#transformers.LayoutLMv2Processor"),l(je,"class","relative group"),l(Sn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Rn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Un,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Wn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(wt,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__"),l(Bn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(kt,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__"),l(Vn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(to,"id","transformers.LayoutLMv2Model"),l(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(to,"href","#transformers.LayoutLMv2Model"),l(Ce,"class","relative group"),l($t,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l($t,"rel","nofollow"),l(Qn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(so,"id","transformers.LayoutLMv2ForSequenceClassification"),l(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(so,"href","#transformers.LayoutLMv2ForSequenceClassification"),l(Ae,"class","relative group"),l(Pt,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(Pt,"rel","nofollow"),l(Ct,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ct,"rel","nofollow"),l(Gn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForSequenceClassification"),l(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(lo,"id","transformers.LayoutLMv2ForTokenClassification"),l(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(lo,"href","#transformers.LayoutLMv2ForTokenClassification"),l(Oe,"class","relative group"),l(Ot,"href","https://guillaumejaume.github.io/FUNSD/"),l(Ot,"rel","nofollow"),l(Nt,"href","https://rrc.cvc.uab.es/?ch=13"),l(Nt,"rel","nofollow"),l(St,"href","https://github.com/clovaai/cord"),l(St,"rel","nofollow"),l(Rt,"href","https://github.com/applicaai/kleister-nda"),l(Rt,"rel","nofollow"),l(Wt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Wt,"rel","nofollow"),l(Hn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForTokenClassification"),l(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(po,"id","transformers.LayoutLMv2ForQuestionAnswering"),l(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(po,"href","#transformers.LayoutLMv2ForQuestionAnswering"),l(Se,"class","relative group"),l(Gt,"href","https://rrc.cvc.uab.es/?ch=17"),l(Gt,"rel","nofollow"),l(Kt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Kt,"rel","nofollow"),l(Kn,"href","/docs/transformers/v4.18.0/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForQuestionAnswering"),l(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,c){e(document.head,h),m(o,T,c),m(o,_,c),e(_,g),e(g,x),b(d,x,null),e(_,f),e(_,D),e(D,Ci),m(o,sr,c),m(o,xe,c),e(xe,We),e(We,pa),b(Mo,pa,null),e(xe,Ii),e(xe,ma),e(ma,Ai),m(o,rr,c),m(o,ue,c),e(ue,Di),e(ue,$o),e($o,Oi),e(ue,Ni),e(ue,Jt),e(Jt,Si),e(ue,Ri),m(o,ir,c),m(o,pe,c),e(pe,H),e(H,Ui),e(H,Eo),e(Eo,Wi),e(H,Bi),e(H,zo),e(zo,Vi),e(H,Qi),e(H,Fo),e(Fo,Gi),e(H,Hi),e(H,qo),e(qo,Ki),e(H,Xi),e(pe,Yi),e(pe,Po),e(Po,Zi),e(Po,jo),e(jo,Ji),e(Po,el),e(pe,ol),e(pe,Co),e(Co,tl),e(Co,Io),e(Io,nl),e(Co,al),m(o,lr,c),m(o,en,c),e(en,sl),m(o,cr,c),m(o,on,c),e(on,ha),e(ha,rl),m(o,dr,c),m(o,tn,c),e(tn,il),m(o,ur,c),m(o,W,c),e(W,fa),e(fa,ll),e(W,cl),e(W,Ao),e(Ao,dl),e(Ao,Do),e(Do,ul),e(Ao,pl),e(W,ml),e(W,Oo),e(Oo,hl),e(Oo,No),e(No,fl),e(Oo,gl),e(W,_l),e(W,Te),e(Te,vl),e(Te,So),e(So,yl),e(Te,bl),e(Te,Ro),e(Ro,Ll),e(Te,wl),e(W,kl),e(W,M),e(M,xl),e(M,ga),e(ga,Tl),e(M,Ml),e(M,nn),e(nn,$l),e(M,El),e(M,_a),e(_a,zl),e(M,Fl),e(M,va),e(va,ql),e(M,Pl),e(M,ya),e(ya,jl),e(M,Cl),e(M,ba),e(ba,Il),e(M,Al),e(M,La),e(La,Dl),e(M,Ol),e(M,wa),e(wa,Nl),e(M,Sl),e(M,ka),e(ka,Rl),e(M,Ul),e(M,an),e(an,Wl),e(M,Bl),e(M,Uo),e(Uo,Vl),e(M,Ql),e(M,Wo),e(Wo,Gl),e(M,Hl),m(o,pr,c),b(Bo,o,c),m(o,mr,c),m(o,me,c),e(me,Kl),e(me,xa),e(xa,Xl),e(me,Yl),e(me,Ta),e(Ta,Zl),e(me,Jl),m(o,hr,c),b(Vo,o,c),m(o,fr,c),m(o,Be,c),e(Be,ec),e(Be,sn),e(sn,oc),e(Be,tc),m(o,gr,c),m(o,he,c),e(he,I),e(I,nc),e(I,rn),e(rn,ac),e(I,sc),e(I,Ma),e(Ma,rc),e(I,ic),e(I,$a),e($a,lc),e(I,cc),e(I,ln),e(ln,dc),e(I,uc),e(I,Ea),e(Ea,pc),e(I,mc),e(I,za),e(za,hc),e(I,fc),e(I,Fa),e(Fa,gc),e(I,_c),e(he,vc),e(he,Qo),e(Qo,yc),e(Qo,cn),e(cn,bc),e(Qo,Lc),e(he,wc),e(he,Go),e(Go,kc),e(Go,qa),e(qa,xc),e(Go,Tc),m(o,_r,c),m(o,Ve,c),e(Ve,Mc),e(Ve,dn),e(dn,$c),e(Ve,Ec),m(o,vr,c),m(o,Me,c),e(Me,Qe),e(Qe,Pa),b(Ho,Pa,null),e(Me,zc),e(Me,ja),e(ja,Fc),m(o,yr,c),m(o,B,c),e(B,qc),e(B,un),e(un,Pc),e(B,jc),e(B,pn),e(pn,Cc),e(B,Ic),e(B,mn),e(mn,Ac),e(B,Dc),e(B,hn),e(hn,Oc),e(B,Nc),m(o,br,c),b(Ko,o,c),m(o,Lr,c),m(o,E,c),e(E,Sc),e(E,fn),e(fn,Rc),e(E,Uc),e(E,gn),e(gn,Wc),e(E,Bc),e(E,Ca),e(Ca,Vc),e(E,Qc),e(E,_n),e(_n,Gc),e(E,Hc),e(E,vn),e(vn,Kc),e(E,Xc),e(E,Ia),e(Ia,Yc),e(E,Zc),e(E,Aa),e(Aa,Jc),e(E,ed),e(E,Da),e(Da,od),e(E,td),e(E,Oa),e(Oa,nd),e(E,ad),e(E,Na),e(Na,sd),e(E,rd),m(o,wr,c),m(o,R,c),e(R,yn),e(yn,id),e(R,ld),e(R,Xo),e(Xo,cd),e(R,dd),e(R,bn),e(bn,ud),e(R,pd),e(R,Sa),e(Sa,md),e(R,hd),e(R,Ra),e(Ra,fd),e(R,gd),m(o,kr,c),m(o,Ln,c),e(Ln,_d),m(o,xr,c),m(o,wn,c),e(wn,Ua),e(Ua,vd),m(o,Tr,c),m(o,kn,c),e(kn,yd),m(o,Mr,c),b(Yo,o,c),m(o,$r,c),m(o,xn,c),e(xn,Wa),e(Wa,bd),m(o,Er,c),m(o,fe,c),e(fe,Ld),e(fe,Ba),e(Ba,wd),e(fe,kd),e(fe,Va),e(Va,xd),e(fe,Td),m(o,zr,c),b(Zo,o,c),m(o,Fr,c),m(o,Tn,c),e(Tn,Qa),e(Qa,Md),m(o,qr,c),m(o,V,c),e(V,$d),e(V,Ga),e(Ga,Ed),e(V,zd),e(V,Ha),e(Ha,Fd),e(V,qd),e(V,Ka),e(Ka,Pd),e(V,jd),e(V,Xa),e(Xa,Cd),e(V,Id),m(o,Pr,c),b(Jo,o,c),m(o,jr,c),m(o,Mn,c),e(Mn,Ya),e(Ya,Ad),m(o,Cr,c),m(o,$n,c),e($n,Dd),m(o,Ir,c),b(et,o,c),m(o,Ar,c),m(o,En,c),e(En,Za),e(Za,Od),m(o,Dr,c),m(o,zn,c),e(zn,Nd),m(o,Or,c),b(ot,o,c),m(o,Nr,c),m(o,$e,c),e($e,Ge),e(Ge,Ja),b(tt,Ja,null),e($e,Sd),e($e,es),e(es,Rd),m(o,Sr,c),m(o,K,c),b(nt,K,null),e(K,Ud),e(K,Ee),e(Ee,Wd),e(Ee,Fn),e(Fn,Bd),e(Ee,Vd),e(Ee,at),e(at,Qd),e(Ee,Gd),e(K,Hd),e(K,ze),e(ze,Kd),e(ze,qn),e(qn,Xd),e(ze,Yd),e(ze,Pn),e(Pn,Zd),e(ze,Jd),e(K,eu),b(He,K,null),m(o,Rr,c),m(o,Fe,c),e(Fe,Ke),e(Ke,os),b(st,os,null),e(Fe,ou),e(Fe,ts),e(ts,tu),m(o,Ur,c),m(o,X,c),b(rt,X,null),e(X,nu),e(X,ns),e(ns,au),e(X,su),e(X,it),e(it,ru),e(it,as),e(as,iu),e(it,lu),e(X,cu),e(X,ge),b(lt,ge,null),e(ge,du),e(ge,ss),e(ss,uu),e(ge,pu),b(Xe,ge,null),m(o,Wr,c),m(o,qe,c),e(qe,Ye),e(Ye,rs),b(ct,rs,null),e(qe,mu),e(qe,is),e(is,hu),m(o,Br,c),m(o,O,c),b(dt,O,null),e(O,fu),e(O,N),e(N,gu),e(N,jn),e(jn,_u),e(N,vu),e(N,ls),e(ls,yu),e(N,bu),e(N,cs),e(cs,Lu),e(N,wu),e(N,ds),e(ds,ku),e(N,xu),e(N,us),e(us,Tu),e(N,Mu),e(N,ps),e(ps,$u),e(N,Eu),e(O,zu),e(O,ut),e(ut,Fu),e(ut,Cn),e(Cn,qu),e(ut,Pu),e(O,ju),e(O,In),e(In,An),e(An,Cu),e(In,Iu),e(O,Au),e(O,Ze),b(pt,Ze,null),e(Ze,Du),e(Ze,ms),e(ms,Ou),e(O,Nu),e(O,Dn),b(mt,Dn,null),m(o,Vr,c),m(o,Pe,c),e(Pe,Je),e(Je,hs),b(ht,hs,null),e(Pe,Su),e(Pe,fs),e(fs,Ru),m(o,Qr,c),m(o,Y,c),b(ft,Y,null),e(Y,Uu),e(Y,gt),e(gt,Wu),e(gt,gs),e(gs,Bu),e(gt,Vu),e(Y,Qu),e(Y,_t),e(_t,Gu),e(_t,On),e(On,Hu),e(_t,Ku),e(Y,Xu),e(Y,eo),b(vt,eo,null),e(eo,Yu),e(eo,_s),e(_s,Zu),m(o,Gr,c),m(o,je,c),e(je,oo),e(oo,vs),b(yt,vs,null),e(je,Ju),e(je,ys),e(ys,ep),m(o,Hr,c),m(o,U,c),b(bt,U,null),e(U,op),e(U,bs),e(bs,tp),e(U,np),e(U,Nn),e(Nn,Sn),e(Sn,ap),e(Nn,sp),e(U,rp),e(U,q),e(q,ip),e(q,Rn),e(Rn,lp),e(q,cp),e(q,Un),e(Un,dp),e(q,up),e(q,Wn),e(Wn,pp),e(q,mp),e(q,Ls),e(Ls,hp),e(q,fp),e(q,ws),e(ws,gp),e(q,_p),e(q,ks),e(ks,vp),e(q,yp),e(q,xs),e(xs,bp),e(q,Lp),e(q,Ts),e(Ts,wp),e(q,kp),e(q,Ms),e(Ms,xp),e(q,Tp),e(U,Mp),e(U,_e),b(Lt,_e,null),e(_e,$p),e(_e,$),e($,Ep),e($,$s),e($s,zp),e($,Fp),e($,wt),e(wt,Es),e(Es,qp),e(wt,Pp),e($,jp),e($,Bn),e(Bn,Cp),e($,Ip),e($,zs),e(zs,Ap),e($,Dp),e($,Fs),e(Fs,Op),e($,Np),e($,kt),e(kt,qs),e(qs,Sp),e(kt,Rp),e($,Up),e($,Ps),e(Ps,Wp),e($,Bp),e($,Vn),e(Vn,Vp),e($,Qp),e($,js),e(js,Gp),e($,Hp),e($,Cs),e(Cs,Kp),e($,Xp),e($,Is),e(Is,Yp),e($,Zp),e($,As),e(As,Jp),e($,em),e(_e,om),e(_e,Ds),e(Ds,tm),m(o,Kr,c),m(o,Ce,c),e(Ce,to),e(to,Os),b(xt,Os,null),e(Ce,nm),e(Ce,Ns),e(Ns,am),m(o,Xr,c),m(o,le,c),b(Tt,le,null),e(le,sm),e(le,Mt),e(Mt,rm),e(Mt,$t),e($t,im),e(Mt,lm),e(le,cm),e(le,te),b(Et,te,null),e(te,dm),e(te,Ie),e(Ie,um),e(Ie,Qn),e(Qn,pm),e(Ie,mm),e(Ie,Ss),e(Ss,hm),e(Ie,fm),e(te,gm),b(no,te,null),e(te,_m),b(ao,te,null),m(o,Yr,c),m(o,Ae,c),e(Ae,so),e(so,Rs),b(zt,Rs,null),e(Ae,vm),e(Ae,Us),e(Us,ym),m(o,Zr,c),m(o,Z,c),b(Ft,Z,null),e(Z,bm),e(Z,qt),e(qt,Lm),e(qt,Pt),e(Pt,wm),e(qt,km),e(Z,xm),e(Z,jt),e(jt,Tm),e(jt,Ct),e(Ct,Mm),e(jt,$m),e(Z,Em),e(Z,ne),b(It,ne,null),e(ne,zm),e(ne,De),e(De,Fm),e(De,Gn),e(Gn,qm),e(De,Pm),e(De,Ws),e(Ws,jm),e(De,Cm),e(ne,Im),b(ro,ne,null),e(ne,Am),b(io,ne,null),m(o,Jr,c),m(o,Oe,c),e(Oe,lo),e(lo,Bs),b(At,Bs,null),e(Oe,Dm),e(Oe,Vs),e(Vs,Om),m(o,ei,c),m(o,J,c),b(Dt,J,null),e(J,Nm),e(J,ee),e(ee,Sm),e(ee,Ot),e(Ot,Rm),e(ee,Um),e(ee,Nt),e(Nt,Wm),e(ee,Bm),e(ee,St),e(St,Vm),e(ee,Qm),e(ee,Rt),e(Rt,Gm),e(ee,Hm),e(J,Km),e(J,Ut),e(Ut,Xm),e(Ut,Wt),e(Wt,Ym),e(Ut,Zm),e(J,Jm),e(J,ae),b(Bt,ae,null),e(ae,eh),e(ae,Ne),e(Ne,oh),e(Ne,Hn),e(Hn,th),e(Ne,nh),e(Ne,Qs),e(Qs,ah),e(Ne,sh),e(ae,rh),b(co,ae,null),e(ae,ih),b(uo,ae,null),m(o,oi,c),m(o,Se,c),e(Se,po),e(po,Gs),b(Vt,Gs,null),e(Se,lh),e(Se,Hs),e(Hs,ch),m(o,ti,c),m(o,oe,c),b(Qt,oe,null),e(oe,dh),e(oe,ce),e(ce,uh),e(ce,Gt),e(Gt,ph),e(ce,mh),e(ce,Ks),e(Ks,hh),e(ce,fh),e(ce,Xs),e(Xs,gh),e(ce,_h),e(oe,vh),e(oe,Ht),e(Ht,yh),e(Ht,Kt),e(Kt,bh),e(Ht,Lh),e(oe,wh),e(oe,se),b(Xt,se,null),e(se,kh),e(se,Re),e(Re,xh),e(Re,Kn),e(Kn,Th),e(Re,Mh),e(Re,Ys),e(Ys,$h),e(Re,Eh),e(se,zh),b(mo,se,null),e(se,Fh),b(ho,se,null),ni=!0},p(o,[c]){const Yt={};c&2&&(Yt.$$scope={dirty:c,ctx:o}),He.$set(Yt);const Zs={};c&2&&(Zs.$$scope={dirty:c,ctx:o}),Xe.$set(Zs);const Js={};c&2&&(Js.$$scope={dirty:c,ctx:o}),no.$set(Js);const er={};c&2&&(er.$$scope={dirty:c,ctx:o}),ao.$set(er);const Zt={};c&2&&(Zt.$$scope={dirty:c,ctx:o}),ro.$set(Zt);const or={};c&2&&(or.$$scope={dirty:c,ctx:o}),io.$set(or);const tr={};c&2&&(tr.$$scope={dirty:c,ctx:o}),co.$set(tr);const nr={};c&2&&(nr.$$scope={dirty:c,ctx:o}),uo.$set(nr);const Ue={};c&2&&(Ue.$$scope={dirty:c,ctx:o}),mo.$set(Ue);const ar={};c&2&&(ar.$$scope={dirty:c,ctx:o}),ho.$set(ar)},i(o){ni||(L(d.$$.fragment,o),L(Mo.$$.fragment,o),L(Bo.$$.fragment,o),L(Vo.$$.fragment,o),L(Ho.$$.fragment,o),L(Ko.$$.fragment,o),L(Yo.$$.fragment,o),L(Zo.$$.fragment,o),L(Jo.$$.fragment,o),L(et.$$.fragment,o),L(ot.$$.fragment,o),L(tt.$$.fragment,o),L(nt.$$.fragment,o),L(He.$$.fragment,o),L(st.$$.fragment,o),L(rt.$$.fragment,o),L(lt.$$.fragment,o),L(Xe.$$.fragment,o),L(ct.$$.fragment,o),L(dt.$$.fragment,o),L(pt.$$.fragment,o),L(mt.$$.fragment,o),L(ht.$$.fragment,o),L(ft.$$.fragment,o),L(vt.$$.fragment,o),L(yt.$$.fragment,o),L(bt.$$.fragment,o),L(Lt.$$.fragment,o),L(xt.$$.fragment,o),L(Tt.$$.fragment,o),L(Et.$$.fragment,o),L(no.$$.fragment,o),L(ao.$$.fragment,o),L(zt.$$.fragment,o),L(Ft.$$.fragment,o),L(It.$$.fragment,o),L(ro.$$.fragment,o),L(io.$$.fragment,o),L(At.$$.fragment,o),L(Dt.$$.fragment,o),L(Bt.$$.fragment,o),L(co.$$.fragment,o),L(uo.$$.fragment,o),L(Vt.$$.fragment,o),L(Qt.$$.fragment,o),L(Xt.$$.fragment,o),L(mo.$$.fragment,o),L(ho.$$.fragment,o),ni=!0)},o(o){w(d.$$.fragment,o),w(Mo.$$.fragment,o),w(Bo.$$.fragment,o),w(Vo.$$.fragment,o),w(Ho.$$.fragment,o),w(Ko.$$.fragment,o),w(Yo.$$.fragment,o),w(Zo.$$.fragment,o),w(Jo.$$.fragment,o),w(et.$$.fragment,o),w(ot.$$.fragment,o),w(tt.$$.fragment,o),w(nt.$$.fragment,o),w(He.$$.fragment,o),w(st.$$.fragment,o),w(rt.$$.fragment,o),w(lt.$$.fragment,o),w(Xe.$$.fragment,o),w(ct.$$.fragment,o),w(dt.$$.fragment,o),w(pt.$$.fragment,o),w(mt.$$.fragment,o),w(ht.$$.fragment,o),w(ft.$$.fragment,o),w(vt.$$.fragment,o),w(yt.$$.fragment,o),w(bt.$$.fragment,o),w(Lt.$$.fragment,o),w(xt.$$.fragment,o),w(Tt.$$.fragment,o),w(Et.$$.fragment,o),w(no.$$.fragment,o),w(ao.$$.fragment,o),w(zt.$$.fragment,o),w(Ft.$$.fragment,o),w(It.$$.fragment,o),w(ro.$$.fragment,o),w(io.$$.fragment,o),w(At.$$.fragment,o),w(Dt.$$.fragment,o),w(Bt.$$.fragment,o),w(co.$$.fragment,o),w(uo.$$.fragment,o),w(Vt.$$.fragment,o),w(Qt.$$.fragment,o),w(Xt.$$.fragment,o),w(mo.$$.fragment,o),w(ho.$$.fragment,o),ni=!1},d(o){t(h),o&&t(T),o&&t(_),k(d),o&&t(sr),o&&t(xe),k(Mo),o&&t(rr),o&&t(ue),o&&t(ir),o&&t(pe),o&&t(lr),o&&t(en),o&&t(cr),o&&t(on),o&&t(dr),o&&t(tn),o&&t(ur),o&&t(W),o&&t(pr),k(Bo,o),o&&t(mr),o&&t(me),o&&t(hr),k(Vo,o),o&&t(fr),o&&t(Be),o&&t(gr),o&&t(he),o&&t(_r),o&&t(Ve),o&&t(vr),o&&t(Me),k(Ho),o&&t(yr),o&&t(B),o&&t(br),k(Ko,o),o&&t(Lr),o&&t(E),o&&t(wr),o&&t(R),o&&t(kr),o&&t(Ln),o&&t(xr),o&&t(wn),o&&t(Tr),o&&t(kn),o&&t(Mr),k(Yo,o),o&&t($r),o&&t(xn),o&&t(Er),o&&t(fe),o&&t(zr),k(Zo,o),o&&t(Fr),o&&t(Tn),o&&t(qr),o&&t(V),o&&t(Pr),k(Jo,o),o&&t(jr),o&&t(Mn),o&&t(Cr),o&&t($n),o&&t(Ir),k(et,o),o&&t(Ar),o&&t(En),o&&t(Dr),o&&t(zn),o&&t(Or),k(ot,o),o&&t(Nr),o&&t($e),k(tt),o&&t(Sr),o&&t(K),k(nt),k(He),o&&t(Rr),o&&t(Fe),k(st),o&&t(Ur),o&&t(X),k(rt),k(lt),k(Xe),o&&t(Wr),o&&t(qe),k(ct),o&&t(Br),o&&t(O),k(dt),k(pt),k(mt),o&&t(Vr),o&&t(Pe),k(ht),o&&t(Qr),o&&t(Y),k(ft),k(vt),o&&t(Gr),o&&t(je),k(yt),o&&t(Hr),o&&t(U),k(bt),k(Lt),o&&t(Kr),o&&t(Ce),k(xt),o&&t(Xr),o&&t(le),k(Tt),k(Et),k(no),k(ao),o&&t(Yr),o&&t(Ae),k(zt),o&&t(Zr),o&&t(Z),k(Ft),k(It),k(ro),k(io),o&&t(Jr),o&&t(Oe),k(At),o&&t(ei),o&&t(J),k(Dt),k(Bt),k(co),k(uo),o&&t(oi),o&&t(Se),k(Vt),o&&t(ti),o&&t(oe),k(Qt),k(Xt),k(mo),k(ho)}}}const dv={local:"layoutlmv2",sections:[{local:"overview",title:"Overview"},{local:"usage-layoutlmv2processor",title:"Usage: LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Config",title:"LayoutLMv2Config"},{local:"transformers.LayoutLMv2FeatureExtractor",title:"LayoutLMv2FeatureExtractor"},{local:"transformers.LayoutLMv2Tokenizer",title:"LayoutLMv2Tokenizer"},{local:"transformers.LayoutLMv2TokenizerFast",title:"LayoutLMv2TokenizerFast"},{local:"transformers.LayoutLMv2Processor",title:"LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Model",title:"LayoutLMv2Model"},{local:"transformers.LayoutLMv2ForSequenceClassification",title:"LayoutLMv2ForSequenceClassification"},{local:"transformers.LayoutLMv2ForTokenClassification",title:"LayoutLMv2ForTokenClassification"},{local:"transformers.LayoutLMv2ForQuestionAnswering",title:"LayoutLMv2ForQuestionAnswering"}],title:"LayoutLMV2"};function uv(P){return Z_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vv extends H_{constructor(h){super();K_(this,h,uv,cv,X_,{})}}export{vv as default,dv as metadata};
