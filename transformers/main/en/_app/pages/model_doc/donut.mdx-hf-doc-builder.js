import{S as Fi,i as Ai,s as Ii,e as o,k as d,w as v,t as n,M as Li,c as a,d as s,m as p,a as i,x as b,h as r,b as l,N as Ri,G as e,g as u,y as w,q as k,o as x,B as $,v as Oi,L as Mi}from"../../chunks/vendor-hf-doc-builder.js";import{T as qo}from"../../chunks/Tip-hf-doc-builder.js";import{D as U}from"../../chunks/Docstring-hf-doc-builder.js";import{C as zs}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as qe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ci}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ni(F){let m,j,f,g,D;return g=new zs({props:{code:`from transformers import DonutSwinConfig, DonutSwinModel

# Initializing a Donut naver-clova-ix/donut-base style configuration
configuration = DonutSwinConfig()

# Randomly initializing a model from the naver-clova-ix/donut-base style configuration
model = DonutSwinModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DonutSwinConfig, DonutSwinModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Donut naver-clova-ix/donut-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DonutSwinConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Randomly initializing a model from the naver-clova-ix/donut-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DonutSwinModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){m=o("p"),j=n("Example:"),f=d(),v(g.$$.fragment)},l(h){m=a(h,"P",{});var _=i(m);j=r(_,"Example:"),_.forEach(s),f=p(h),b(g.$$.fragment,h)},m(h,_){u(h,m,_),e(m,j),u(h,f,_),w(g,h,_),D=!0},p:Mi,i(h){D||(k(g.$$.fragment,h),D=!0)},o(h){x(g.$$.fragment,h),D=!1},d(h){h&&s(m),h&&s(f),$(g,h)}}}function Vi(F){let m,j;return{c(){m=o("p"),j=n(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(f){m=a(f,"P",{});var g=i(m);j=r(g,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),g.forEach(s)},m(f,g){u(f,m,g),e(m,j)},d(f){f&&s(m)}}}function Ui(F){let m,j,f,g,D,h,_,q;return{c(){m=o("p"),j=n(`This class method is simply calling the feature extractor
`),f=o("a"),g=n("from_pretrained()"),D=n(` and the tokenizer
`),h=o("code"),_=n("~tokenization_utils_base.PreTrainedTokenizer.from_pretrained"),q=n(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(C){m=a(C,"P",{});var y=i(m);j=r(y,`This class method is simply calling the feature extractor
`),f=a(y,"A",{href:!0});var M=i(f);g=r(M,"from_pretrained()"),M.forEach(s),D=r(y,` and the tokenizer
`),h=a(y,"CODE",{});var A=i(h);_=r(A,"~tokenization_utils_base.PreTrainedTokenizer.from_pretrained"),A.forEach(s),q=r(y,` methods. Please refer to the docstrings of the
methods above for more information.`),y.forEach(s),this.h()},h(){l(f,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(C,y){u(C,m,y),e(m,j),e(m,f),e(f,g),e(m,D),e(m,h),e(h,_),e(m,q)},d(C){C&&s(m)}}}function Wi(F){let m,j,f,g,D,h,_,q;return{c(){m=o("p"),j=n("This class method is simply calling "),f=o("a"),g=n("save_pretrained()"),D=n(` and
`),h=o("code"),_=n("~tokenization_utils_base.PreTrainedTokenizer.save_pretrained"),q=n(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(C){m=a(C,"P",{});var y=i(m);j=r(y,"This class method is simply calling "),f=a(y,"A",{href:!0});var M=i(f);g=r(M,"save_pretrained()"),M.forEach(s),D=r(y,` and
`),h=a(y,"CODE",{});var A=i(h);_=r(A,"~tokenization_utils_base.PreTrainedTokenizer.save_pretrained"),A.forEach(s),q=r(y,`. Please refer to the docstrings of the methods
above for more information.`),y.forEach(s),this.h()},h(){l(f,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(C,y){u(C,m,y),e(m,j),e(m,f),e(f,g),e(m,D),e(m,h),e(h,_),e(m,q)},d(C){C&&s(m)}}}function Hi(F){let m,j,f,g,D;return{c(){m=o("p"),j=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=n("Module"),D=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(h){m=a(h,"P",{});var _=i(m);j=r(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(_,"CODE",{});var q=i(f);g=r(q,"Module"),q.forEach(s),D=r(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(h,_){u(h,m,_),e(m,j),e(m,f),e(f,g),e(m,D)},d(h){h&&s(m)}}}function Xi(F){let m,j,f,g,D;return g=new zs({props:{code:`from transformers import AutoFeatureExtractor, DonutSwinModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("https://huggingface.co/naver-clova-ix/donut-base")
model = DonutSwinModel.from_pretrained("https://huggingface.co/naver-clova-ix/donut-base")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, DonutSwinModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;https://huggingface.co/naver-clova-ix/donut-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DonutSwinModel.from_pretrained(<span class="hljs-string">&quot;https://huggingface.co/naver-clova-ix/donut-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">49</span>, <span class="hljs-number">768</span>]`}}),{c(){m=o("p"),j=n("Example:"),f=d(),v(g.$$.fragment)},l(h){m=a(h,"P",{});var _=i(m);j=r(_,"Example:"),_.forEach(s),f=p(h),b(g.$$.fragment,h)},m(h,_){u(h,m,_),e(m,j),u(h,f,_),w(g,h,_),D=!0},p:Mi,i(h){D||(k(g.$$.fragment,h),D=!0)},o(h){x(g.$$.fragment,h),D=!1},d(h){h&&s(m),h&&s(f),$(g,h)}}}function Bi(F){let m,j,f,g,D,h,_,q,C,y,M,A,Bt,Pe,Po,Jt,zo,Ss,ae,So,ze,Co,Mo,Cs,ft,Fo,Ms,gt,Gt,Ao,Fs,ne,fr,As,re,Io,_t,Lo,Ro,Is,W,Oo,Se,No,Vo,Ce,Uo,Wo,Ls,vt,Ho,Rs,ie,Me,Xo,Fe,Bo,Jo,Go,Ae,Yo,bt,Qo,Ko,Os,G,le,Yt,Ie,Zo,Qt,ea,Ns,H,ta,Kt,sa,oa,wt,aa,na,Vs,T,ra,kt,ia,la,Zt,ca,da,es,pa,ua,xt,ma,ha,$t,fa,ga,ts,_a,va,ss,ba,wa,Us,jt,os,ka,Ws,Le,Hs,Dt,as,xa,Xs,Re,Bs,yt,ns,$a,Js,Oe,Gs,ce,ja,Ne,Da,ya,Ys,Y,de,rs,Ve,Ea,is,Ta,Qs,pe,qa,Ue,Pa,za,Ks,Q,ue,ls,We,Sa,cs,Ca,Zs,I,He,Ma,K,Fa,Et,Aa,Ia,Xe,La,Ra,Oa,Z,Na,Tt,Va,Ua,qt,Wa,Ha,Xa,me,eo,ee,he,ds,Be,Ba,ps,Ja,to,L,Je,Ga,us,Ya,Qa,Ge,Ka,Pt,Za,en,tn,X,Ye,sn,ms,on,an,fe,so,te,ge,hs,Qe,nn,fs,rn,oo,E,Ke,ln,gs,cn,dn,P,zt,pn,un,St,mn,hn,_s,fn,gn,vs,_n,vn,Ze,bs,bn,wn,kn,Ct,xn,$n,jn,_e,et,Dn,N,yn,ws,En,Tn,ks,qn,Pn,xs,zn,Sn,Cn,B,tt,Mn,$s,Fn,An,ve,In,J,st,Ln,ot,Rn,Mt,On,Nn,Vn,be,Un,we,at,Wn,nt,Hn,Ft,Xn,Bn,Jn,ke,rt,Gn,it,Yn,At,Qn,Kn,ao,se,xe,js,lt,Zn,Ds,er,no,V,ct,tr,dt,sr,pt,or,ar,nr,O,ut,rr,oe,ir,It,lr,cr,ys,dr,pr,ur,$e,mr,je,ro;return h=new qe({}),Pe=new qe({}),Ie=new qe({}),Le=new zs({props:{code:`import re

from transformers import DonutProcessor, VisionEncoderDecoderModel
from datasets import load_dataset
import torch

processor = DonutProcessor.from_pretrained("naver-clova-ix/donut-base-finetuned-rvlcdip")
model = VisionEncoderDecoderModel.from_pretrained("naver-clova-ix/donut-base-finetuned-rvlcdip")

device = "cuda" if torch.cuda.is_available() else "cpu"
model.to(device)
# load document image
dataset = load_dataset("hf-internal-testing/example-documents", split="test")
image = dataset[1]["image"]

# prepare decoder inputs
task_prompt = "<s_rvlcdip>"
decoder_input_ids = processor.tokenizer(task_prompt, add_special_tokens=False, return_tensors="pt").input_ids

pixel_values = processor(image, return_tensors="pt").pixel_values

outputs = model.generate(
    pixel_values.to(device),
    decoder_input_ids=decoder_input_ids.to(device),
    max_length=model.decoder.config.max_position_embeddings,
    early_stopping=True,
    pad_token_id=processor.tokenizer.pad_token_id,
    eos_token_id=processor.tokenizer.eos_token_id,
    use_cache=True,
    num_beams=1,
    bad_words_ids=[[processor.tokenizer.unk_token_id]],
    return_dict_in_generate=True,
)

sequence = processor.batch_decode(outputs.sequences)[0]
sequence = sequence.replace(processor.tokenizer.eos_token, "").replace(processor.tokenizer.pad_token, "")
sequence = re.sub(r"<.*?>", "", sequence, count=1).strip()  # remove first task start token
print(processor.token2json(sequence))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> re

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DonutProcessor, VisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = DonutProcessor.from_pretrained(<span class="hljs-string">&quot;naver-clova-ix/donut-base-finetuned-rvlcdip&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;naver-clova-ix/donut-base-finetuned-rvlcdip&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>device = <span class="hljs-string">&quot;cuda&quot;</span> <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> <span class="hljs-string">&quot;cpu&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.to(device)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load document image</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/example-documents&quot;</span>, split=<span class="hljs-string">&quot;test&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-number">1</span>][<span class="hljs-string">&quot;image&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare decoder inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>task_prompt = <span class="hljs-string">&quot;&lt;s_rvlcdip&gt;&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = processor.tokenizer(task_prompt, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(
<span class="hljs-meta">... </span>    pixel_values.to(device),
<span class="hljs-meta">... </span>    decoder_input_ids=decoder_input_ids.to(device),
<span class="hljs-meta">... </span>    max_length=model.decoder.config.max_position_embeddings,
<span class="hljs-meta">... </span>    early_stopping=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    pad_token_id=processor.tokenizer.pad_token_id,
<span class="hljs-meta">... </span>    eos_token_id=processor.tokenizer.eos_token_id,
<span class="hljs-meta">... </span>    use_cache=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    num_beams=<span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>    bad_words_ids=[[processor.tokenizer.unk_token_id]],
<span class="hljs-meta">... </span>    return_dict_in_generate=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = processor.batch_decode(outputs.sequences)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = sequence.replace(processor.tokenizer.eos_token, <span class="hljs-string">&quot;&quot;</span>).replace(processor.tokenizer.pad_token, <span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = re.sub(<span class="hljs-string">r&quot;&lt;.*?&gt;&quot;</span>, <span class="hljs-string">&quot;&quot;</span>, sequence, count=<span class="hljs-number">1</span>).strip()  <span class="hljs-comment"># remove first task start token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(processor.token2json(sequence))
{<span class="hljs-string">&#x27;class&#x27;</span>: <span class="hljs-string">&#x27;advertisement&#x27;</span>}`}}),Re=new zs({props:{code:`import re

from transformers import DonutProcessor, VisionEncoderDecoderModel
from datasets import load_dataset
import torch

processor = DonutProcessor.from_pretrained("naver-clova-ix/donut-base-finetuned-cord-v2")
model = VisionEncoderDecoderModel.from_pretrained("naver-clova-ix/donut-base-finetuned-cord-v2")

device = "cuda" if torch.cuda.is_available() else "cpu"
model.to(device)
# load document image
dataset = load_dataset("hf-internal-testing/example-documents", split="test")
image = dataset[2]["image"]

# prepare decoder inputs
task_prompt = "<s_cord-v2>"
decoder_input_ids = processor.tokenizer(task_prompt, add_special_tokens=False, return_tensors="pt").input_ids

pixel_values = processor(image, return_tensors="pt").pixel_values

outputs = model.generate(
    pixel_values.to(device),
    decoder_input_ids=decoder_input_ids.to(device),
    max_length=model.decoder.config.max_position_embeddings,
    early_stopping=True,
    pad_token_id=processor.tokenizer.pad_token_id,
    eos_token_id=processor.tokenizer.eos_token_id,
    use_cache=True,
    num_beams=1,
    bad_words_ids=[[processor.tokenizer.unk_token_id]],
    return_dict_in_generate=True,
)

sequence = processor.batch_decode(outputs.sequences)[0]
sequence = sequence.replace(processor.tokenizer.eos_token, "").replace(processor.tokenizer.pad_token, "")
sequence = re.sub(r"<.*?>", "", sequence, count=1).strip()  # remove first task start token
print(processor.token2json(sequence))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> re

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DonutProcessor, VisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = DonutProcessor.from_pretrained(<span class="hljs-string">&quot;naver-clova-ix/donut-base-finetuned-cord-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;naver-clova-ix/donut-base-finetuned-cord-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>device = <span class="hljs-string">&quot;cuda&quot;</span> <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> <span class="hljs-string">&quot;cpu&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.to(device)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load document image</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/example-documents&quot;</span>, split=<span class="hljs-string">&quot;test&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-number">2</span>][<span class="hljs-string">&quot;image&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare decoder inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>task_prompt = <span class="hljs-string">&quot;&lt;s_cord-v2&gt;&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = processor.tokenizer(task_prompt, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(
<span class="hljs-meta">... </span>    pixel_values.to(device),
<span class="hljs-meta">... </span>    decoder_input_ids=decoder_input_ids.to(device),
<span class="hljs-meta">... </span>    max_length=model.decoder.config.max_position_embeddings,
<span class="hljs-meta">... </span>    early_stopping=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    pad_token_id=processor.tokenizer.pad_token_id,
<span class="hljs-meta">... </span>    eos_token_id=processor.tokenizer.eos_token_id,
<span class="hljs-meta">... </span>    use_cache=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    num_beams=<span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>    bad_words_ids=[[processor.tokenizer.unk_token_id]],
<span class="hljs-meta">... </span>    return_dict_in_generate=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = processor.batch_decode(outputs.sequences)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = sequence.replace(processor.tokenizer.eos_token, <span class="hljs-string">&quot;&quot;</span>).replace(processor.tokenizer.pad_token, <span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = re.sub(<span class="hljs-string">r&quot;&lt;.*?&gt;&quot;</span>, <span class="hljs-string">&quot;&quot;</span>, sequence, count=<span class="hljs-number">1</span>).strip()  <span class="hljs-comment"># remove first task start token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(processor.token2json(sequence))
{<span class="hljs-string">&#x27;menu&#x27;</span>: {<span class="hljs-string">&#x27;nm&#x27;</span>: <span class="hljs-string">&#x27;CINNAMON SUGAR&#x27;</span>, <span class="hljs-string">&#x27;unitprice&#x27;</span>: <span class="hljs-string">&#x27;17,000&#x27;</span>, <span class="hljs-string">&#x27;cnt&#x27;</span>: <span class="hljs-string">&#x27;1 x&#x27;</span>, <span class="hljs-string">&#x27;price&#x27;</span>: <span class="hljs-string">&#x27;17,000&#x27;</span>}, <span class="hljs-string">&#x27;sub_total&#x27;</span>: {<span class="hljs-string">&#x27;subtotal_price&#x27;</span>: <span class="hljs-string">&#x27;17,000&#x27;</span>}, <span class="hljs-string">&#x27;total&#x27;</span>: {<span class="hljs-string">&#x27;total_price&#x27;</span>: <span class="hljs-string">&#x27;17,000&#x27;</span>, <span class="hljs-string">&#x27;cashprice&#x27;</span>: <span class="hljs-string">&#x27;20,000&#x27;</span>, <span class="hljs-string">&#x27;changeprice&#x27;</span>: <span class="hljs-string">&#x27;3,000&#x27;</span>}}`}}),Oe=new zs({props:{code:`import re

from transformers import DonutProcessor, VisionEncoderDecoderModel
from datasets import load_dataset
import torch

processor = DonutProcessor.from_pretrained("naver-clova-ix/donut-base-finetuned-docvqa")
model = VisionEncoderDecoderModel.from_pretrained("naver-clova-ix/donut-base-finetuned-docvqa")

device = "cuda" if torch.cuda.is_available() else "cpu"
model.to(device)
# load document image from the DocVQA dataset
dataset = load_dataset("hf-internal-testing/example-documents", split="test")
image = dataset[0]["image"]

# prepare decoder inputs
task_prompt = "<s_docvqa><s_question>{user_input}</s_question><s_answer>"
question = "When is the coffee break?"
prompt = task_prompt.replace("{user_input}", question)
decoder_input_ids = processor.tokenizer(prompt, add_special_tokens=False, return_tensors="pt").input_ids

pixel_values = processor(image, return_tensors="pt").pixel_values

outputs = model.generate(
    pixel_values.to(device),
    decoder_input_ids=decoder_input_ids.to(device),
    max_length=model.decoder.config.max_position_embeddings,
    early_stopping=True,
    pad_token_id=processor.tokenizer.pad_token_id,
    eos_token_id=processor.tokenizer.eos_token_id,
    use_cache=True,
    num_beams=1,
    bad_words_ids=[[processor.tokenizer.unk_token_id]],
    return_dict_in_generate=True,
)

sequence = processor.batch_decode(outputs.sequences)[0]
sequence = sequence.replace(processor.tokenizer.eos_token, "").replace(processor.tokenizer.pad_token, "")
sequence = re.sub(r"<.*?>", "", sequence, count=1).strip()  # remove first task start token
print(processor.token2json(sequence))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> re

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DonutProcessor, VisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = DonutProcessor.from_pretrained(<span class="hljs-string">&quot;naver-clova-ix/donut-base-finetuned-docvqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;naver-clova-ix/donut-base-finetuned-docvqa&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>device = <span class="hljs-string">&quot;cuda&quot;</span> <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> <span class="hljs-string">&quot;cpu&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.to(device)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load document image from the DocVQA dataset</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/example-documents&quot;</span>, split=<span class="hljs-string">&quot;test&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;image&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare decoder inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>task_prompt = <span class="hljs-string">&quot;&lt;s_docvqa&gt;&lt;s_question&gt;{user_input}&lt;/s_question&gt;&lt;s_answer&gt;&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;When is the coffee break?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = task_prompt.replace(<span class="hljs-string">&quot;{user_input}&quot;</span>, question)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = processor.tokenizer(prompt, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(
<span class="hljs-meta">... </span>    pixel_values.to(device),
<span class="hljs-meta">... </span>    decoder_input_ids=decoder_input_ids.to(device),
<span class="hljs-meta">... </span>    max_length=model.decoder.config.max_position_embeddings,
<span class="hljs-meta">... </span>    early_stopping=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    pad_token_id=processor.tokenizer.pad_token_id,
<span class="hljs-meta">... </span>    eos_token_id=processor.tokenizer.eos_token_id,
<span class="hljs-meta">... </span>    use_cache=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    num_beams=<span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>    bad_words_ids=[[processor.tokenizer.unk_token_id]],
<span class="hljs-meta">... </span>    return_dict_in_generate=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = processor.batch_decode(outputs.sequences)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = sequence.replace(processor.tokenizer.eos_token, <span class="hljs-string">&quot;&quot;</span>).replace(processor.tokenizer.pad_token, <span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = re.sub(<span class="hljs-string">r&quot;&lt;.*?&gt;&quot;</span>, <span class="hljs-string">&quot;&quot;</span>, sequence, count=<span class="hljs-number">1</span>).strip()  <span class="hljs-comment"># remove first task start token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(processor.token2json(sequence))
{<span class="hljs-string">&#x27;question&#x27;</span>: <span class="hljs-string">&#x27;When is the coffee break?&#x27;</span>, <span class="hljs-string">&#x27;answer&#x27;</span>: <span class="hljs-string">&#x27;11-14 to 11:39 a.m.&#x27;</span>}`}}),Ve=new qe({}),We=new qe({}),He=new U({props:{name:"class transformers.DonutSwinConfig",anchor:"transformers.DonutSwinConfig",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 4"},{name:"num_channels",val:" = 3"},{name:"embed_dim",val:" = 96"},{name:"depths",val:" = [2, 2, 6, 2]"},{name:"num_heads",val:" = [3, 6, 12, 24]"},{name:"window_size",val:" = 7"},{name:"mlp_ratio",val:" = 4.0"},{name:"qkv_bias",val:" = True"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"drop_path_rate",val:" = 0.1"},{name:"hidden_act",val:" = 'gelu'"},{name:"use_absolute_embeddings",val:" = False"},{name:"patch_norm",val:" = True"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DonutSwinConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.DonutSwinConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.DonutSwinConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.DonutSwinConfig.embed_dim",description:`<strong>embed_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 96) &#x2014;
Dimensionality of patch embedding.`,name:"embed_dim"},{anchor:"transformers.DonutSwinConfig.depths",description:`<strong>depths</strong> (<code>list(int)</code>, <em>optional</em>, defaults to [2, 2, 6, 2]) &#x2014;
Depth of each layer in the Transformer encoder.`,name:"depths"},{anchor:"transformers.DonutSwinConfig.num_heads",description:`<strong>num_heads</strong> (<code>list(int)</code>, <em>optional</em>, defaults to [3, 6, 12, 24]) &#x2014;
Number of attention heads in each layer of the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.DonutSwinConfig.window_size",description:`<strong>window_size</strong> (<code>int</code>, <em>optional</em>, defaults to 7) &#x2014;
Size of windows.`,name:"window_size"},{anchor:"transformers.DonutSwinConfig.mlp_ratio",description:`<strong>mlp_ratio</strong> (<code>float</code>, <em>optional</em>, defaults to 4.0) &#x2014;
Ratio of MLP hidden dimensionality to embedding dimensionality.`,name:"mlp_ratio"},{anchor:"transformers.DonutSwinConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to True) &#x2014;
Whether or not a learnable bias should be added to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.DonutSwinConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for all fully connected layers in the embeddings and encoder.`,name:"hidden_dropout_prob"},{anchor:"transformers.DonutSwinConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DonutSwinConfig.drop_path_rate",description:`<strong>drop_path_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Stochastic depth rate.`,name:"drop_path_rate"},{anchor:"transformers.DonutSwinConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder. If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>,
<code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.DonutSwinConfig.use_absolute_embeddings",description:`<strong>use_absolute_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to False) &#x2014;
Whether or not to add absolute position embeddings to the patch embeddings.`,name:"use_absolute_embeddings"},{anchor:"transformers.DonutSwinConfig.patch_norm",description:`<strong>patch_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to True) &#x2014;
Whether or not to add layer normalization after patch embedding.`,name:"patch_norm"},{anchor:"transformers.DonutSwinConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DonutSwinConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/donut/configuration_donut_swin.py#L29"}}),me=new Ci({props:{anchor:"transformers.DonutSwinConfig.example",$$slots:{default:[Ni]},$$scope:{ctx:F}}}),Be=new qe({}),Je=new U({props:{name:"class transformers.DonutFeatureExtractor",anchor:"transformers.DonutFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = [1920, 2560]"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_thumbnail",val:" = True"},{name:"do_align_long_axis",val:" = False"},{name:"do_pad",val:" = True"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DonutFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the shorter edge of the input to the minimum value of a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.DonutFeatureExtractor.size",description:`<strong>size</strong> (<code>Tuple(int)</code>, <em>optional</em>, defaults to [1920, 2560]) &#x2014;
Resize the shorter edge of the input to the minimum value of the given size. Should be a tuple of (width,
height). Only has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"size"},{anchor:"transformers.DonutFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.DonutFeatureExtractor.do_thumbnail",description:`<strong>do_thumbnail</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to thumbnail the input to the given <code>size</code>.`,name:"do_thumbnail"},{anchor:"transformers.DonutFeatureExtractor.do_align_long_axis",description:`<strong>do_align_long_axis</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to rotate the input if the height is greater than width.`,name:"do_align_long_axis"},{anchor:"transformers.DonutFeatureExtractor.do_pad",description:`<strong>do_pad</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to pad the input to <code>size</code>.`,name:"do_pad"},{anchor:"transformers.DonutFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.DonutFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.DonutFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/donut/feature_extraction_donut.py#L36"}}),Ye=new U({props:{name:"__call__",anchor:"transformers.DonutFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"random_padding",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DonutFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.DonutFeatureExtractor.__call__.random_padding",description:`<strong>random_padding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to randomly pad the input to <code>size</code>.`,name:"random_padding"},{anchor:"transformers.DonutFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/donut/feature_extraction_donut.py#L125",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),fe=new qo({props:{warning:!0,$$slots:{default:[Vi]},$$scope:{ctx:F}}}),Qe=new qe({}),Ke=new U({props:{name:"class transformers.DonutProcessor",anchor:"transformers.DonutProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.DonutProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/main/en/model_doc/donut#transformers.DonutFeatureExtractor">DonutFeatureExtractor</a>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/donut#transformers.DonutFeatureExtractor">DonutFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.DonutProcessor.tokenizer",description:`<strong>tokenizer</strong> ([<code>XLMRobertaTokenizer</code>/<code>XLMRobertaTokenizerFast</code>]) &#x2014;
An instance of [<code>XLMRobertaTokenizer</code>/<code>XLMRobertaTokenizerFast</code>]. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/donut/processing_donut.py#L25"}}),et=new U({props:{name:"__call__",anchor:"transformers.DonutProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/donut/processing_donut.py#L48"}}),tt=new U({props:{name:"from_pretrained",anchor:"transformers.DonutProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DonutProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
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
Additional keyword arguments passed along to both
<a href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>~tokenization_utils_base.PreTrainedTokenizer.from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L152"}}),ve=new qo({props:{$$slots:{default:[Ui]},$$scope:{ctx:F}}}),st=new U({props:{name:"save_pretrained",anchor:"transformers.DonutProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DonutProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.DonutProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it. You can specify the
repository you want to push to with <code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).
kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L94"}}),be=new qo({props:{$$slots:{default:[Wi]},$$scope:{ctx:F}}}),at=new U({props:{name:"batch_decode",anchor:"transformers.DonutProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/donut/processing_donut.py#L81"}}),rt=new U({props:{name:"decode",anchor:"transformers.DonutProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/donut/processing_donut.py#L88"}}),lt=new qe({}),ct=new U({props:{name:"class transformers.DonutSwinModel",anchor:"transformers.DonutSwinModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"},{name:"use_mask_token",val:" = False"}],parametersDescription:[{anchor:"transformers.DonutSwinModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/donut#transformers.DonutSwinConfig">DonutSwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/donut/modeling_donut_swin.py#L852"}}),ut=new U({props:{name:"forward",anchor:"transformers.DonutSwinModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DonutSwinModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.DonutSwinModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DonutSwinModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DonutSwinModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DonutSwinModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/donut/modeling_donut_swin.py#L878",returnDescription:`
<p>A <code>transformers.models.donut.modeling_donut_swin.DonutSwinModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/donut#transformers.DonutSwinConfig"
>DonutSwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>, <em>optional</em>, returned when <code>add_pooling_layer=True</code> is passed) \u2014 Average pooling of the last layer hidden-state.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.donut.modeling_donut_swin.DonutSwinModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$e=new qo({props:{$$slots:{default:[Hi]},$$scope:{ctx:F}}}),je=new Ci({props:{anchor:"transformers.DonutSwinModel.forward.example",$$slots:{default:[Xi]},$$scope:{ctx:F}}}),{c(){m=o("meta"),j=d(),f=o("h1"),g=o("a"),D=o("span"),v(h.$$.fragment),_=d(),q=o("span"),C=n("Donut"),y=d(),M=o("h2"),A=o("a"),Bt=o("span"),v(Pe.$$.fragment),Po=d(),Jt=o("span"),zo=n("Overview"),Ss=d(),ae=o("p"),So=n("The Donut model was proposed in "),ze=o("a"),Co=n("OCR-free Document Understanding Transformer"),Mo=n(` by
Geewook Kim, Teakgyu Hong, Moonbin Yim, Jeongyeon Nam, Jinyoung Park, Jinyeong Yim, Wonseok Hwang, Sangdoo Yun, Dongyoon Han, Seunghyun Park.
Donut consists of an image Transformer encoder and an autoregressive text Transformer decoder to perform document understanding
tasks such as document image classification, form understanding and visual question answering.`),Cs=d(),ft=o("p"),Fo=n("The abstract from the paper is the following:"),Ms=d(),gt=o("p"),Gt=o("em"),Ao=n("Understanding document images (e.g., invoices) is a core but challenging task since it requires complex functions such as reading text and a holistic understanding of the document. Current Visual Document Understanding (VDU) methods outsource the task of reading text to off-the-shelf Optical Character Recognition (OCR) engines and focus on the understanding task with the OCR outputs. Although such OCR-based approaches have shown promising performance, they suffer from 1) high computational costs for using OCR; 2) inflexibility of OCR models on languages or types of document; 3) OCR error propagation to the subsequent process. To address these issues, in this paper, we introduce a novel OCR-free VDU model named Donut, which stands for Document understanding transformer. As the first step in OCR-free VDU research, we propose a simple architecture (i.e., Transformer) with a pre-training objective (i.e., cross-entropy loss). Donut is conceptually simple yet effective. Through extensive experiments and analyses, we show a simple OCR-free VDU model, Donut, achieves state-of-the-art performances on various VDU tasks in terms of both speed and accuracy. In addition, we offer a synthetic data generator that helps the model pre-training to be flexible in various languages and domains."),Fs=d(),ne=o("img"),As=d(),re=o("small"),Io=n("Donut high-level overview. Taken from the "),_t=o("a"),Lo=n("original paper"),Ro=n("."),Is=d(),W=o("p"),Oo=n("This model was contributed by "),Se=o("a"),No=n("nielsr"),Vo=n(`. The original code can be found
`),Ce=o("a"),Uo=n("here"),Wo=n("."),Ls=d(),vt=o("p"),Ho=n("Tips:"),Rs=d(),ie=o("ul"),Me=o("li"),Xo=n("The quickest way to get started with Donut is by checking the "),Fe=o("a"),Bo=n(`tutorial
notebooks`),Jo=n(`, which show how to use the model
at inference time as well as fine-tuning on custom data.`),Go=d(),Ae=o("li"),Yo=n("Donut is always used within the "),bt=o("a"),Qo=n("VisionEncoderDecoder"),Ko=n(" framework."),Os=d(),G=o("h2"),le=o("a"),Yt=o("span"),v(Ie.$$.fragment),Zo=d(),Qt=o("span"),ea=n("Inference"),Ns=d(),H=o("p"),ta=n("Donut\u2019s "),Kt=o("code"),sa=n("VisionEncoderDecoder"),oa=n(` model accepts images as input and makes use of
`),wt=o("a"),aa=n("generate()"),na=n(" to autoregressively generate text given the input image."),Vs=d(),T=o("p"),ra=n("The "),kt=o("a"),ia=n("DonutFeatureExtractor"),la=n(` class is responsible for preprocessing the input image and
[`),Zt=o("code"),ca=n("XLMRobertaTokenizer"),da=n("/"),es=o("code"),pa=n("XLMRobertaTokenizerFast"),ua=n(`] decodes the generated target tokens to the target string. The
`),xt=o("a"),ma=n("DonutProcessor"),ha=n(" wraps "),$t=o("a"),fa=n("DonutFeatureExtractor"),ga=n(" and ["),ts=o("code"),_a=n("XLMRobertaTokenizer"),va=n("/"),ss=o("code"),ba=n("XLMRobertaTokenizerFast"),wa=n(`]
into a single instance to both extract the input features and decode the predicted token ids.`),Us=d(),jt=o("ul"),os=o("li"),ka=n("Step-by-step Document Image Classification"),Ws=d(),v(Le.$$.fragment),Hs=d(),Dt=o("ul"),as=o("li"),xa=n("Step-by-step Document Parsing"),Xs=d(),v(Re.$$.fragment),Bs=d(),yt=o("ul"),ns=o("li"),$a=n("Step-by-step Document Visual Question Answering (DocVQA)"),Js=d(),v(Oe.$$.fragment),Gs=d(),ce=o("p"),ja=n("See the "),Ne=o("a"),Da=n("model hub"),ya=n(" to look for Donut checkpoints."),Ys=d(),Y=o("h2"),de=o("a"),rs=o("span"),v(Ve.$$.fragment),Ea=d(),is=o("span"),Ta=n("Training"),Qs=d(),pe=o("p"),qa=n("We refer to the "),Ue=o("a"),Pa=n("tutorial notebooks"),za=n("."),Ks=d(),Q=o("h2"),ue=o("a"),ls=o("span"),v(We.$$.fragment),Sa=d(),cs=o("span"),Ca=n("DonutSwinConfig"),Zs=d(),I=o("div"),v(He.$$.fragment),Ma=d(),K=o("p"),Fa=n("This is the configuration class to store the configuration of a "),Et=o("a"),Aa=n("DonutSwinModel"),Ia=n(`. It is used to instantiate a
Donut model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Donut
`),Xe=o("a"),La=n("naver-clova-ix/donut-base"),Ra=n(" architecture."),Oa=d(),Z=o("p"),Na=n("Configuration objects inherit from "),Tt=o("a"),Va=n("PretrainedConfig"),Ua=n(` and can be used to control the model outputs. Read the
documentation from `),qt=o("a"),Wa=n("PretrainedConfig"),Ha=n(" for more information."),Xa=d(),v(me.$$.fragment),eo=d(),ee=o("h2"),he=o("a"),ds=o("span"),v(Be.$$.fragment),Ba=d(),ps=o("span"),Ja=n("DonutFeatureExtractor"),to=d(),L=o("div"),v(Je.$$.fragment),Ga=d(),us=o("p"),Ya=n("Constructs a Donut feature extractor."),Qa=d(),Ge=o("p"),Ka=n("This feature extractor inherits from "),Pt=o("a"),Za=n("FeatureExtractionMixin"),en=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),tn=d(),X=o("div"),v(Ye.$$.fragment),sn=d(),ms=o("p"),on=n("Main method to prepare for the model one or several image(s)."),an=d(),v(fe.$$.fragment),so=d(),te=o("h2"),ge=o("a"),hs=o("span"),v(Qe.$$.fragment),nn=d(),fs=o("span"),rn=n("DonutProcessor"),oo=d(),E=o("div"),v(Ke.$$.fragment),ln=d(),gs=o("p"),cn=n(`Constructs a Donut processor which wraps a Donut feature extractor and an XLMRoBERTa tokenizer into a single
processor.`),dn=d(),P=o("p"),zt=o("a"),pn=n("DonutProcessor"),un=n(" offers all the functionalities of "),St=o("a"),mn=n("DonutFeatureExtractor"),hn=n(` and
[`),_s=o("code"),fn=n("XLMRobertaTokenizer"),gn=n("/"),vs=o("code"),_n=n("XLMRobertaTokenizerFast"),vn=n("]. See the "),Ze=o("a"),bs=o("strong"),bn=n("call"),wn=n("()"),kn=n(` and
`),Ct=o("a"),xn=n("decode()"),$n=n(" for more information."),jn=d(),_e=o("div"),v(et.$$.fragment),Dn=d(),N=o("p"),yn=n(`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),ws=o("code"),En=n("__call__()"),Tn=n(` and returns its output. If used in the context
`),ks=o("code"),qn=n("as_target_processor()"),Pn=n(` this method forwards all its arguments to DonutTokenizer\u2019s
`),xs=o("code"),zn=n("~DonutTokenizer.__call__"),Sn=n(". Please refer to the doctsring of the above two methods for more information."),Cn=d(),B=o("div"),v(tt.$$.fragment),Mn=d(),$s=o("p"),Fn=n("Instantiate a processor associated with a pretrained model."),An=d(),v(ve.$$.fragment),In=d(),J=o("div"),v(st.$$.fragment),Ln=d(),ot=o("p"),Rn=n(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Mt=o("a"),On=n("from_pretrained()"),Nn=n(" method."),Vn=d(),v(be.$$.fragment),Un=d(),we=o("div"),v(at.$$.fragment),Wn=d(),nt=o("p"),Hn=n("This method forwards all its arguments to DonutTokenizer\u2019s "),Ft=o("a"),Xn=n("batch_decode()"),Bn=n(`. Please refer
to the docstring of this method for more information.`),Jn=d(),ke=o("div"),v(rt.$$.fragment),Gn=d(),it=o("p"),Yn=n("This method forwards all its arguments to DonutTokenizer\u2019s "),At=o("a"),Qn=n("decode()"),Kn=n(`. Please refer to the
docstring of this method for more information.`),ao=d(),se=o("h2"),xe=o("a"),js=o("span"),v(lt.$$.fragment),Zn=d(),Ds=o("span"),er=n("DonutSwinModel"),no=d(),V=o("div"),v(ct.$$.fragment),tr=d(),dt=o("p"),sr=n(`The bare Donut Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),pt=o("a"),or=n("torch.nn.Module"),ar=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),nr=d(),O=o("div"),v(ut.$$.fragment),rr=d(),oe=o("p"),ir=n("The "),It=o("a"),lr=n("DonutSwinModel"),cr=n(" forward method, overrides the "),ys=o("code"),dr=n("__call__"),pr=n(" special method."),ur=d(),v($e.$$.fragment),mr=d(),v(je.$$.fragment),this.h()},l(t){const c=Li('[data-svelte="svelte-1phssyn"]',document.head);m=a(c,"META",{name:!0,content:!0}),c.forEach(s),j=p(t),f=a(t,"H1",{class:!0});var mt=i(f);g=a(mt,"A",{id:!0,class:!0,href:!0});var Es=i(g);D=a(Es,"SPAN",{});var Ts=i(D);b(h.$$.fragment,Ts),Ts.forEach(s),Es.forEach(s),_=p(mt),q=a(mt,"SPAN",{});var qs=i(q);C=r(qs,"Donut"),qs.forEach(s),mt.forEach(s),y=p(t),M=a(t,"H2",{class:!0});var ht=i(M);A=a(ht,"A",{id:!0,class:!0,href:!0});var Ps=i(A);Bt=a(Ps,"SPAN",{});var gr=i(Bt);b(Pe.$$.fragment,gr),gr.forEach(s),Ps.forEach(s),Po=p(ht),Jt=a(ht,"SPAN",{});var _r=i(Jt);zo=r(_r,"Overview"),_r.forEach(s),ht.forEach(s),Ss=p(t),ae=a(t,"P",{});var io=i(ae);So=r(io,"The Donut model was proposed in "),ze=a(io,"A",{href:!0,rel:!0});var vr=i(ze);Co=r(vr,"OCR-free Document Understanding Transformer"),vr.forEach(s),Mo=r(io,` by
Geewook Kim, Teakgyu Hong, Moonbin Yim, Jeongyeon Nam, Jinyoung Park, Jinyeong Yim, Wonseok Hwang, Sangdoo Yun, Dongyoon Han, Seunghyun Park.
Donut consists of an image Transformer encoder and an autoregressive text Transformer decoder to perform document understanding
tasks such as document image classification, form understanding and visual question answering.`),io.forEach(s),Cs=p(t),ft=a(t,"P",{});var br=i(ft);Fo=r(br,"The abstract from the paper is the following:"),br.forEach(s),Ms=p(t),gt=a(t,"P",{});var wr=i(gt);Gt=a(wr,"EM",{});var kr=i(Gt);Ao=r(kr,"Understanding document images (e.g., invoices) is a core but challenging task since it requires complex functions such as reading text and a holistic understanding of the document. Current Visual Document Understanding (VDU) methods outsource the task of reading text to off-the-shelf Optical Character Recognition (OCR) engines and focus on the understanding task with the OCR outputs. Although such OCR-based approaches have shown promising performance, they suffer from 1) high computational costs for using OCR; 2) inflexibility of OCR models on languages or types of document; 3) OCR error propagation to the subsequent process. To address these issues, in this paper, we introduce a novel OCR-free VDU model named Donut, which stands for Document understanding transformer. As the first step in OCR-free VDU research, we propose a simple architecture (i.e., Transformer) with a pre-training objective (i.e., cross-entropy loss). Donut is conceptually simple yet effective. Through extensive experiments and analyses, we show a simple OCR-free VDU model, Donut, achieves state-of-the-art performances on various VDU tasks in terms of both speed and accuracy. In addition, we offer a synthetic data generator that helps the model pre-training to be flexible in various languages and domains."),kr.forEach(s),wr.forEach(s),Fs=p(t),ne=a(t,"IMG",{src:!0,alt:!0,width:!0}),As=p(t),re=a(t,"SMALL",{});var lo=i(re);Io=r(lo,"Donut high-level overview. Taken from the "),_t=a(lo,"A",{href:!0});var xr=i(_t);Lo=r(xr,"original paper"),xr.forEach(s),Ro=r(lo,"."),lo.forEach(s),Is=p(t),W=a(t,"P",{});var Lt=i(W);Oo=r(Lt,"This model was contributed by "),Se=a(Lt,"A",{href:!0,rel:!0});var $r=i(Se);No=r($r,"nielsr"),$r.forEach(s),Vo=r(Lt,`. The original code can be found
`),Ce=a(Lt,"A",{href:!0,rel:!0});var jr=i(Ce);Uo=r(jr,"here"),jr.forEach(s),Wo=r(Lt,"."),Lt.forEach(s),Ls=p(t),vt=a(t,"P",{});var Dr=i(vt);Ho=r(Dr,"Tips:"),Dr.forEach(s),Rs=p(t),ie=a(t,"UL",{});var co=i(ie);Me=a(co,"LI",{});var po=i(Me);Xo=r(po,"The quickest way to get started with Donut is by checking the "),Fe=a(po,"A",{href:!0,rel:!0});var yr=i(Fe);Bo=r(yr,`tutorial
notebooks`),yr.forEach(s),Jo=r(po,`, which show how to use the model
at inference time as well as fine-tuning on custom data.`),po.forEach(s),Go=p(co),Ae=a(co,"LI",{});var uo=i(Ae);Yo=r(uo,"Donut is always used within the "),bt=a(uo,"A",{href:!0});var Er=i(bt);Qo=r(Er,"VisionEncoderDecoder"),Er.forEach(s),Ko=r(uo," framework."),uo.forEach(s),co.forEach(s),Os=p(t),G=a(t,"H2",{class:!0});var mo=i(G);le=a(mo,"A",{id:!0,class:!0,href:!0});var Tr=i(le);Yt=a(Tr,"SPAN",{});var qr=i(Yt);b(Ie.$$.fragment,qr),qr.forEach(s),Tr.forEach(s),Zo=p(mo),Qt=a(mo,"SPAN",{});var Pr=i(Qt);ea=r(Pr,"Inference"),Pr.forEach(s),mo.forEach(s),Ns=p(t),H=a(t,"P",{});var Rt=i(H);ta=r(Rt,"Donut\u2019s "),Kt=a(Rt,"CODE",{});var zr=i(Kt);sa=r(zr,"VisionEncoderDecoder"),zr.forEach(s),oa=r(Rt,` model accepts images as input and makes use of
`),wt=a(Rt,"A",{href:!0});var Sr=i(wt);aa=r(Sr,"generate()"),Sr.forEach(s),na=r(Rt," to autoregressively generate text given the input image."),Rt.forEach(s),Vs=p(t),T=a(t,"P",{});var z=i(T);ra=r(z,"The "),kt=a(z,"A",{href:!0});var Cr=i(kt);ia=r(Cr,"DonutFeatureExtractor"),Cr.forEach(s),la=r(z,` class is responsible for preprocessing the input image and
[`),Zt=a(z,"CODE",{});var Mr=i(Zt);ca=r(Mr,"XLMRobertaTokenizer"),Mr.forEach(s),da=r(z,"/"),es=a(z,"CODE",{});var Fr=i(es);pa=r(Fr,"XLMRobertaTokenizerFast"),Fr.forEach(s),ua=r(z,`] decodes the generated target tokens to the target string. The
`),xt=a(z,"A",{href:!0});var Ar=i(xt);ma=r(Ar,"DonutProcessor"),Ar.forEach(s),ha=r(z," wraps "),$t=a(z,"A",{href:!0});var Ir=i($t);fa=r(Ir,"DonutFeatureExtractor"),Ir.forEach(s),ga=r(z," and ["),ts=a(z,"CODE",{});var Lr=i(ts);_a=r(Lr,"XLMRobertaTokenizer"),Lr.forEach(s),va=r(z,"/"),ss=a(z,"CODE",{});var Rr=i(ss);ba=r(Rr,"XLMRobertaTokenizerFast"),Rr.forEach(s),wa=r(z,`]
into a single instance to both extract the input features and decode the predicted token ids.`),z.forEach(s),Us=p(t),jt=a(t,"UL",{});var Or=i(jt);os=a(Or,"LI",{});var Nr=i(os);ka=r(Nr,"Step-by-step Document Image Classification"),Nr.forEach(s),Or.forEach(s),Ws=p(t),b(Le.$$.fragment,t),Hs=p(t),Dt=a(t,"UL",{});var Vr=i(Dt);as=a(Vr,"LI",{});var Ur=i(as);xa=r(Ur,"Step-by-step Document Parsing"),Ur.forEach(s),Vr.forEach(s),Xs=p(t),b(Re.$$.fragment,t),Bs=p(t),yt=a(t,"UL",{});var Wr=i(yt);ns=a(Wr,"LI",{});var Hr=i(ns);$a=r(Hr,"Step-by-step Document Visual Question Answering (DocVQA)"),Hr.forEach(s),Wr.forEach(s),Js=p(t),b(Oe.$$.fragment,t),Gs=p(t),ce=a(t,"P",{});var ho=i(ce);ja=r(ho,"See the "),Ne=a(ho,"A",{href:!0,rel:!0});var Xr=i(Ne);Da=r(Xr,"model hub"),Xr.forEach(s),ya=r(ho," to look for Donut checkpoints."),ho.forEach(s),Ys=p(t),Y=a(t,"H2",{class:!0});var fo=i(Y);de=a(fo,"A",{id:!0,class:!0,href:!0});var Br=i(de);rs=a(Br,"SPAN",{});var Jr=i(rs);b(Ve.$$.fragment,Jr),Jr.forEach(s),Br.forEach(s),Ea=p(fo),is=a(fo,"SPAN",{});var Gr=i(is);Ta=r(Gr,"Training"),Gr.forEach(s),fo.forEach(s),Qs=p(t),pe=a(t,"P",{});var go=i(pe);qa=r(go,"We refer to the "),Ue=a(go,"A",{href:!0,rel:!0});var Yr=i(Ue);Pa=r(Yr,"tutorial notebooks"),Yr.forEach(s),za=r(go,"."),go.forEach(s),Ks=p(t),Q=a(t,"H2",{class:!0});var _o=i(Q);ue=a(_o,"A",{id:!0,class:!0,href:!0});var Qr=i(ue);ls=a(Qr,"SPAN",{});var Kr=i(ls);b(We.$$.fragment,Kr),Kr.forEach(s),Qr.forEach(s),Sa=p(_o),cs=a(_o,"SPAN",{});var Zr=i(cs);Ca=r(Zr,"DonutSwinConfig"),Zr.forEach(s),_o.forEach(s),Zs=p(t),I=a(t,"DIV",{class:!0});var De=i(I);b(He.$$.fragment,De),Ma=p(De),K=a(De,"P",{});var Ot=i(K);Fa=r(Ot,"This is the configuration class to store the configuration of a "),Et=a(Ot,"A",{href:!0});var ei=i(Et);Aa=r(ei,"DonutSwinModel"),ei.forEach(s),Ia=r(Ot,`. It is used to instantiate a
Donut model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Donut
`),Xe=a(Ot,"A",{href:!0,rel:!0});var ti=i(Xe);La=r(ti,"naver-clova-ix/donut-base"),ti.forEach(s),Ra=r(Ot," architecture."),Ot.forEach(s),Oa=p(De),Z=a(De,"P",{});var Nt=i(Z);Na=r(Nt,"Configuration objects inherit from "),Tt=a(Nt,"A",{href:!0});var si=i(Tt);Va=r(si,"PretrainedConfig"),si.forEach(s),Ua=r(Nt,` and can be used to control the model outputs. Read the
documentation from `),qt=a(Nt,"A",{href:!0});var oi=i(qt);Wa=r(oi,"PretrainedConfig"),oi.forEach(s),Ha=r(Nt," for more information."),Nt.forEach(s),Xa=p(De),b(me.$$.fragment,De),De.forEach(s),eo=p(t),ee=a(t,"H2",{class:!0});var vo=i(ee);he=a(vo,"A",{id:!0,class:!0,href:!0});var ai=i(he);ds=a(ai,"SPAN",{});var ni=i(ds);b(Be.$$.fragment,ni),ni.forEach(s),ai.forEach(s),Ba=p(vo),ps=a(vo,"SPAN",{});var ri=i(ps);Ja=r(ri,"DonutFeatureExtractor"),ri.forEach(s),vo.forEach(s),to=p(t),L=a(t,"DIV",{class:!0});var ye=i(L);b(Je.$$.fragment,ye),Ga=p(ye),us=a(ye,"P",{});var ii=i(us);Ya=r(ii,"Constructs a Donut feature extractor."),ii.forEach(s),Qa=p(ye),Ge=a(ye,"P",{});var bo=i(Ge);Ka=r(bo,"This feature extractor inherits from "),Pt=a(bo,"A",{href:!0});var li=i(Pt);Za=r(li,"FeatureExtractionMixin"),li.forEach(s),en=r(bo,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),bo.forEach(s),tn=p(ye),X=a(ye,"DIV",{class:!0});var Vt=i(X);b(Ye.$$.fragment,Vt),sn=p(Vt),ms=a(Vt,"P",{});var ci=i(ms);on=r(ci,"Main method to prepare for the model one or several image(s)."),ci.forEach(s),an=p(Vt),b(fe.$$.fragment,Vt),Vt.forEach(s),ye.forEach(s),so=p(t),te=a(t,"H2",{class:!0});var wo=i(te);ge=a(wo,"A",{id:!0,class:!0,href:!0});var di=i(ge);hs=a(di,"SPAN",{});var pi=i(hs);b(Qe.$$.fragment,pi),pi.forEach(s),di.forEach(s),nn=p(wo),fs=a(wo,"SPAN",{});var ui=i(fs);rn=r(ui,"DonutProcessor"),ui.forEach(s),wo.forEach(s),oo=p(t),E=a(t,"DIV",{class:!0});var S=i(E);b(Ke.$$.fragment,S),ln=p(S),gs=a(S,"P",{});var mi=i(gs);cn=r(mi,`Constructs a Donut processor which wraps a Donut feature extractor and an XLMRoBERTa tokenizer into a single
processor.`),mi.forEach(s),dn=p(S),P=a(S,"P",{});var R=i(P);zt=a(R,"A",{href:!0});var hi=i(zt);pn=r(hi,"DonutProcessor"),hi.forEach(s),un=r(R," offers all the functionalities of "),St=a(R,"A",{href:!0});var fi=i(St);mn=r(fi,"DonutFeatureExtractor"),fi.forEach(s),hn=r(R,` and
[`),_s=a(R,"CODE",{});var gi=i(_s);fn=r(gi,"XLMRobertaTokenizer"),gi.forEach(s),gn=r(R,"/"),vs=a(R,"CODE",{});var _i=i(vs);_n=r(_i,"XLMRobertaTokenizerFast"),_i.forEach(s),vn=r(R,"]. See the "),Ze=a(R,"A",{href:!0});var hr=i(Ze);bs=a(hr,"STRONG",{});var vi=i(bs);bn=r(vi,"call"),vi.forEach(s),wn=r(hr,"()"),hr.forEach(s),kn=r(R,` and
`),Ct=a(R,"A",{href:!0});var bi=i(Ct);xn=r(bi,"decode()"),bi.forEach(s),$n=r(R," for more information."),R.forEach(s),jn=p(S),_e=a(S,"DIV",{class:!0});var ko=i(_e);b(et.$$.fragment,ko),Dn=p(ko),N=a(ko,"P",{});var Ee=i(N);yn=r(Ee,`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),ws=a(Ee,"CODE",{});var wi=i(ws);En=r(wi,"__call__()"),wi.forEach(s),Tn=r(Ee,` and returns its output. If used in the context
`),ks=a(Ee,"CODE",{});var ki=i(ks);qn=r(ki,"as_target_processor()"),ki.forEach(s),Pn=r(Ee,` this method forwards all its arguments to DonutTokenizer\u2019s
`),xs=a(Ee,"CODE",{});var xi=i(xs);zn=r(xi,"~DonutTokenizer.__call__"),xi.forEach(s),Sn=r(Ee,". Please refer to the doctsring of the above two methods for more information."),Ee.forEach(s),ko.forEach(s),Cn=p(S),B=a(S,"DIV",{class:!0});var Ut=i(B);b(tt.$$.fragment,Ut),Mn=p(Ut),$s=a(Ut,"P",{});var $i=i($s);Fn=r($i,"Instantiate a processor associated with a pretrained model."),$i.forEach(s),An=p(Ut),b(ve.$$.fragment,Ut),Ut.forEach(s),In=p(S),J=a(S,"DIV",{class:!0});var Wt=i(J);b(st.$$.fragment,Wt),Ln=p(Wt),ot=a(Wt,"P",{});var xo=i(ot);Rn=r(xo,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Mt=a(xo,"A",{href:!0});var ji=i(Mt);On=r(ji,"from_pretrained()"),ji.forEach(s),Nn=r(xo," method."),xo.forEach(s),Vn=p(Wt),b(be.$$.fragment,Wt),Wt.forEach(s),Un=p(S),we=a(S,"DIV",{class:!0});var $o=i(we);b(at.$$.fragment,$o),Wn=p($o),nt=a($o,"P",{});var jo=i(nt);Hn=r(jo,"This method forwards all its arguments to DonutTokenizer\u2019s "),Ft=a(jo,"A",{href:!0});var Di=i(Ft);Xn=r(Di,"batch_decode()"),Di.forEach(s),Bn=r(jo,`. Please refer
to the docstring of this method for more information.`),jo.forEach(s),$o.forEach(s),Jn=p(S),ke=a(S,"DIV",{class:!0});var Do=i(ke);b(rt.$$.fragment,Do),Gn=p(Do),it=a(Do,"P",{});var yo=i(it);Yn=r(yo,"This method forwards all its arguments to DonutTokenizer\u2019s "),At=a(yo,"A",{href:!0});var yi=i(At);Qn=r(yi,"decode()"),yi.forEach(s),Kn=r(yo,`. Please refer to the
docstring of this method for more information.`),yo.forEach(s),Do.forEach(s),S.forEach(s),ao=p(t),se=a(t,"H2",{class:!0});var Eo=i(se);xe=a(Eo,"A",{id:!0,class:!0,href:!0});var Ei=i(xe);js=a(Ei,"SPAN",{});var Ti=i(js);b(lt.$$.fragment,Ti),Ti.forEach(s),Ei.forEach(s),Zn=p(Eo),Ds=a(Eo,"SPAN",{});var qi=i(Ds);er=r(qi,"DonutSwinModel"),qi.forEach(s),Eo.forEach(s),no=p(t),V=a(t,"DIV",{class:!0});var Ht=i(V);b(ct.$$.fragment,Ht),tr=p(Ht),dt=a(Ht,"P",{});var To=i(dt);sr=r(To,`The bare Donut Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),pt=a(To,"A",{href:!0,rel:!0});var Pi=i(pt);or=r(Pi,"torch.nn.Module"),Pi.forEach(s),ar=r(To,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),To.forEach(s),nr=p(Ht),O=a(Ht,"DIV",{class:!0});var Te=i(O);b(ut.$$.fragment,Te),rr=p(Te),oe=a(Te,"P",{});var Xt=i(oe);ir=r(Xt,"The "),It=a(Xt,"A",{href:!0});var zi=i(It);lr=r(zi,"DonutSwinModel"),zi.forEach(s),cr=r(Xt," forward method, overrides the "),ys=a(Xt,"CODE",{});var Si=i(ys);dr=r(Si,"__call__"),Si.forEach(s),pr=r(Xt," special method."),Xt.forEach(s),ur=p(Te),b($e.$$.fragment,Te),mr=p(Te),b(je.$$.fragment,Te),Te.forEach(s),Ht.forEach(s),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(Ji)),l(g,"id","donut"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#donut"),l(f,"class","relative group"),l(A,"id","overview"),l(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(A,"href","#overview"),l(M,"class","relative group"),l(ze,"href","https://arxiv.org/abs/2111.15664"),l(ze,"rel","nofollow"),Ri(ne.src,fr="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/model_doc/donut_architecture.jpg")||l(ne,"src",fr),l(ne,"alt","drawing"),l(ne,"width","600"),l(_t,"href","https://arxiv.org/abs/2111.15664"),l(Se,"href","https://huggingface.co/nielsr"),l(Se,"rel","nofollow"),l(Ce,"href","https://github.com/clovaai/donut"),l(Ce,"rel","nofollow"),l(Fe,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/Donut"),l(Fe,"rel","nofollow"),l(bt,"href","vision-encoder-decoder"),l(le,"id","inference"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#inference"),l(G,"class","relative group"),l(wt,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),l(kt,"href","/docs/transformers/main/en/model_doc/donut#transformers.DonutFeatureExtractor"),l(xt,"href","/docs/transformers/main/en/model_doc/donut#transformers.DonutProcessor"),l($t,"href","/docs/transformers/main/en/model_doc/donut#transformers.DonutFeatureExtractor"),l(Ne,"href","https://huggingface.co/models?filter=donut"),l(Ne,"rel","nofollow"),l(de,"id","training"),l(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(de,"href","#training"),l(Y,"class","relative group"),l(Ue,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/Donut"),l(Ue,"rel","nofollow"),l(ue,"id","transformers.DonutSwinConfig"),l(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ue,"href","#transformers.DonutSwinConfig"),l(Q,"class","relative group"),l(Et,"href","/docs/transformers/main/en/model_doc/donut#transformers.DonutSwinModel"),l(Xe,"href","https://huggingface.co/naver-clova-ix/donut-base"),l(Xe,"rel","nofollow"),l(Tt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(qt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(he,"id","transformers.DonutFeatureExtractor"),l(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(he,"href","#transformers.DonutFeatureExtractor"),l(ee,"class","relative group"),l(Pt,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),l(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ge,"id","transformers.DonutProcessor"),l(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ge,"href","#transformers.DonutProcessor"),l(te,"class","relative group"),l(zt,"href","/docs/transformers/main/en/model_doc/donut#transformers.DonutProcessor"),l(St,"href","/docs/transformers/main/en/model_doc/donut#transformers.DonutFeatureExtractor"),l(Ze,"href","/docs/transformers/main/en/model_doc/donut#transformers.DonutProcessor.__call__"),l(Ct,"href","/docs/transformers/main/en/model_doc/donut#transformers.DonutProcessor.decode"),l(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Mt,"href","/docs/transformers/main/en/model_doc/trocr#transformers.TrOCRProcessor.from_pretrained"),l(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ft,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),l(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(At,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),l(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(xe,"id","transformers.DonutSwinModel"),l(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(xe,"href","#transformers.DonutSwinModel"),l(se,"class","relative group"),l(pt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(pt,"rel","nofollow"),l(It,"href","/docs/transformers/main/en/model_doc/donut#transformers.DonutSwinModel"),l(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,c){e(document.head,m),u(t,j,c),u(t,f,c),e(f,g),e(g,D),w(h,D,null),e(f,_),e(f,q),e(q,C),u(t,y,c),u(t,M,c),e(M,A),e(A,Bt),w(Pe,Bt,null),e(M,Po),e(M,Jt),e(Jt,zo),u(t,Ss,c),u(t,ae,c),e(ae,So),e(ae,ze),e(ze,Co),e(ae,Mo),u(t,Cs,c),u(t,ft,c),e(ft,Fo),u(t,Ms,c),u(t,gt,c),e(gt,Gt),e(Gt,Ao),u(t,Fs,c),u(t,ne,c),u(t,As,c),u(t,re,c),e(re,Io),e(re,_t),e(_t,Lo),e(re,Ro),u(t,Is,c),u(t,W,c),e(W,Oo),e(W,Se),e(Se,No),e(W,Vo),e(W,Ce),e(Ce,Uo),e(W,Wo),u(t,Ls,c),u(t,vt,c),e(vt,Ho),u(t,Rs,c),u(t,ie,c),e(ie,Me),e(Me,Xo),e(Me,Fe),e(Fe,Bo),e(Me,Jo),e(ie,Go),e(ie,Ae),e(Ae,Yo),e(Ae,bt),e(bt,Qo),e(Ae,Ko),u(t,Os,c),u(t,G,c),e(G,le),e(le,Yt),w(Ie,Yt,null),e(G,Zo),e(G,Qt),e(Qt,ea),u(t,Ns,c),u(t,H,c),e(H,ta),e(H,Kt),e(Kt,sa),e(H,oa),e(H,wt),e(wt,aa),e(H,na),u(t,Vs,c),u(t,T,c),e(T,ra),e(T,kt),e(kt,ia),e(T,la),e(T,Zt),e(Zt,ca),e(T,da),e(T,es),e(es,pa),e(T,ua),e(T,xt),e(xt,ma),e(T,ha),e(T,$t),e($t,fa),e(T,ga),e(T,ts),e(ts,_a),e(T,va),e(T,ss),e(ss,ba),e(T,wa),u(t,Us,c),u(t,jt,c),e(jt,os),e(os,ka),u(t,Ws,c),w(Le,t,c),u(t,Hs,c),u(t,Dt,c),e(Dt,as),e(as,xa),u(t,Xs,c),w(Re,t,c),u(t,Bs,c),u(t,yt,c),e(yt,ns),e(ns,$a),u(t,Js,c),w(Oe,t,c),u(t,Gs,c),u(t,ce,c),e(ce,ja),e(ce,Ne),e(Ne,Da),e(ce,ya),u(t,Ys,c),u(t,Y,c),e(Y,de),e(de,rs),w(Ve,rs,null),e(Y,Ea),e(Y,is),e(is,Ta),u(t,Qs,c),u(t,pe,c),e(pe,qa),e(pe,Ue),e(Ue,Pa),e(pe,za),u(t,Ks,c),u(t,Q,c),e(Q,ue),e(ue,ls),w(We,ls,null),e(Q,Sa),e(Q,cs),e(cs,Ca),u(t,Zs,c),u(t,I,c),w(He,I,null),e(I,Ma),e(I,K),e(K,Fa),e(K,Et),e(Et,Aa),e(K,Ia),e(K,Xe),e(Xe,La),e(K,Ra),e(I,Oa),e(I,Z),e(Z,Na),e(Z,Tt),e(Tt,Va),e(Z,Ua),e(Z,qt),e(qt,Wa),e(Z,Ha),e(I,Xa),w(me,I,null),u(t,eo,c),u(t,ee,c),e(ee,he),e(he,ds),w(Be,ds,null),e(ee,Ba),e(ee,ps),e(ps,Ja),u(t,to,c),u(t,L,c),w(Je,L,null),e(L,Ga),e(L,us),e(us,Ya),e(L,Qa),e(L,Ge),e(Ge,Ka),e(Ge,Pt),e(Pt,Za),e(Ge,en),e(L,tn),e(L,X),w(Ye,X,null),e(X,sn),e(X,ms),e(ms,on),e(X,an),w(fe,X,null),u(t,so,c),u(t,te,c),e(te,ge),e(ge,hs),w(Qe,hs,null),e(te,nn),e(te,fs),e(fs,rn),u(t,oo,c),u(t,E,c),w(Ke,E,null),e(E,ln),e(E,gs),e(gs,cn),e(E,dn),e(E,P),e(P,zt),e(zt,pn),e(P,un),e(P,St),e(St,mn),e(P,hn),e(P,_s),e(_s,fn),e(P,gn),e(P,vs),e(vs,_n),e(P,vn),e(P,Ze),e(Ze,bs),e(bs,bn),e(Ze,wn),e(P,kn),e(P,Ct),e(Ct,xn),e(P,$n),e(E,jn),e(E,_e),w(et,_e,null),e(_e,Dn),e(_e,N),e(N,yn),e(N,ws),e(ws,En),e(N,Tn),e(N,ks),e(ks,qn),e(N,Pn),e(N,xs),e(xs,zn),e(N,Sn),e(E,Cn),e(E,B),w(tt,B,null),e(B,Mn),e(B,$s),e($s,Fn),e(B,An),w(ve,B,null),e(E,In),e(E,J),w(st,J,null),e(J,Ln),e(J,ot),e(ot,Rn),e(ot,Mt),e(Mt,On),e(ot,Nn),e(J,Vn),w(be,J,null),e(E,Un),e(E,we),w(at,we,null),e(we,Wn),e(we,nt),e(nt,Hn),e(nt,Ft),e(Ft,Xn),e(nt,Bn),e(E,Jn),e(E,ke),w(rt,ke,null),e(ke,Gn),e(ke,it),e(it,Yn),e(it,At),e(At,Qn),e(it,Kn),u(t,ao,c),u(t,se,c),e(se,xe),e(xe,js),w(lt,js,null),e(se,Zn),e(se,Ds),e(Ds,er),u(t,no,c),u(t,V,c),w(ct,V,null),e(V,tr),e(V,dt),e(dt,sr),e(dt,pt),e(pt,or),e(dt,ar),e(V,nr),e(V,O),w(ut,O,null),e(O,rr),e(O,oe),e(oe,ir),e(oe,It),e(It,lr),e(oe,cr),e(oe,ys),e(ys,dr),e(oe,pr),e(O,ur),w($e,O,null),e(O,mr),w(je,O,null),ro=!0},p(t,[c]){const mt={};c&2&&(mt.$$scope={dirty:c,ctx:t}),me.$set(mt);const Es={};c&2&&(Es.$$scope={dirty:c,ctx:t}),fe.$set(Es);const Ts={};c&2&&(Ts.$$scope={dirty:c,ctx:t}),ve.$set(Ts);const qs={};c&2&&(qs.$$scope={dirty:c,ctx:t}),be.$set(qs);const ht={};c&2&&(ht.$$scope={dirty:c,ctx:t}),$e.$set(ht);const Ps={};c&2&&(Ps.$$scope={dirty:c,ctx:t}),je.$set(Ps)},i(t){ro||(k(h.$$.fragment,t),k(Pe.$$.fragment,t),k(Ie.$$.fragment,t),k(Le.$$.fragment,t),k(Re.$$.fragment,t),k(Oe.$$.fragment,t),k(Ve.$$.fragment,t),k(We.$$.fragment,t),k(He.$$.fragment,t),k(me.$$.fragment,t),k(Be.$$.fragment,t),k(Je.$$.fragment,t),k(Ye.$$.fragment,t),k(fe.$$.fragment,t),k(Qe.$$.fragment,t),k(Ke.$$.fragment,t),k(et.$$.fragment,t),k(tt.$$.fragment,t),k(ve.$$.fragment,t),k(st.$$.fragment,t),k(be.$$.fragment,t),k(at.$$.fragment,t),k(rt.$$.fragment,t),k(lt.$$.fragment,t),k(ct.$$.fragment,t),k(ut.$$.fragment,t),k($e.$$.fragment,t),k(je.$$.fragment,t),ro=!0)},o(t){x(h.$$.fragment,t),x(Pe.$$.fragment,t),x(Ie.$$.fragment,t),x(Le.$$.fragment,t),x(Re.$$.fragment,t),x(Oe.$$.fragment,t),x(Ve.$$.fragment,t),x(We.$$.fragment,t),x(He.$$.fragment,t),x(me.$$.fragment,t),x(Be.$$.fragment,t),x(Je.$$.fragment,t),x(Ye.$$.fragment,t),x(fe.$$.fragment,t),x(Qe.$$.fragment,t),x(Ke.$$.fragment,t),x(et.$$.fragment,t),x(tt.$$.fragment,t),x(ve.$$.fragment,t),x(st.$$.fragment,t),x(be.$$.fragment,t),x(at.$$.fragment,t),x(rt.$$.fragment,t),x(lt.$$.fragment,t),x(ct.$$.fragment,t),x(ut.$$.fragment,t),x($e.$$.fragment,t),x(je.$$.fragment,t),ro=!1},d(t){s(m),t&&s(j),t&&s(f),$(h),t&&s(y),t&&s(M),$(Pe),t&&s(Ss),t&&s(ae),t&&s(Cs),t&&s(ft),t&&s(Ms),t&&s(gt),t&&s(Fs),t&&s(ne),t&&s(As),t&&s(re),t&&s(Is),t&&s(W),t&&s(Ls),t&&s(vt),t&&s(Rs),t&&s(ie),t&&s(Os),t&&s(G),$(Ie),t&&s(Ns),t&&s(H),t&&s(Vs),t&&s(T),t&&s(Us),t&&s(jt),t&&s(Ws),$(Le,t),t&&s(Hs),t&&s(Dt),t&&s(Xs),$(Re,t),t&&s(Bs),t&&s(yt),t&&s(Js),$(Oe,t),t&&s(Gs),t&&s(ce),t&&s(Ys),t&&s(Y),$(Ve),t&&s(Qs),t&&s(pe),t&&s(Ks),t&&s(Q),$(We),t&&s(Zs),t&&s(I),$(He),$(me),t&&s(eo),t&&s(ee),$(Be),t&&s(to),t&&s(L),$(Je),$(Ye),$(fe),t&&s(so),t&&s(te),$(Qe),t&&s(oo),t&&s(E),$(Ke),$(et),$(tt),$(ve),$(st),$(be),$(at),$(rt),t&&s(ao),t&&s(se),$(lt),t&&s(no),t&&s(V),$(ct),$(ut),$($e),$(je)}}}const Ji={local:"donut",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"training",title:"Training"},{local:"transformers.DonutSwinConfig",title:"DonutSwinConfig"},{local:"transformers.DonutFeatureExtractor",title:"DonutFeatureExtractor"},{local:"transformers.DonutProcessor",title:"DonutProcessor"},{local:"transformers.DonutSwinModel",title:"DonutSwinModel"}],title:"Donut"};function Gi(F){return Oi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sl extends Fi{constructor(m){super();Ai(this,m,Gi,Bi,Ii,{})}}export{sl as default,Ji as metadata};
