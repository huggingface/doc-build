import{S as Al,i as Il,s as Bl,e as s,k as l,w as b,t as n,M as Gl,c as a,d as o,m as p,a as d,x as T,h as r,b as c,G as e,g as _,y,q as w,o as P,B as N,v as Wl,L as Vo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Xn}from"../../chunks/Tip-hf-doc-builder.js";import{D as z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ro}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Z}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Uo}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Hl($){let h,k,g,f,v;return f=new Ro({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){h=s("p"),k=n("sequence pair mask has the following format:"),g=l(),b(f.$$.fragment)},l(i){h=a(i,"P",{});var u=d(h);k=r(u,"sequence pair mask has the following format:"),u.forEach(o),g=p(i),T(f.$$.fragment,i)},m(i,u){_(i,h,u),e(h,k),_(i,g,u),y(f,i,u),v=!0},p:Vo,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){P(f.$$.fragment,i),v=!1},d(i){i&&o(h),i&&o(g),N(f,i)}}}function Ul($){let h,k,g,f,v;return{c(){h=s("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=a(i,"P",{});var u=d(h);k=r(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(u,"CODE",{});var q=d(g);f=r(q,"Module"),q.forEach(o),v=r(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(i,u){_(i,h,u),e(h,k),e(h,g),e(g,f),e(h,v)},d(i){i&&o(h)}}}function Vl($){let h,k,g,f,v;return f=new Ro({props:{code:`from transformers import ProphetNetTokenizer, ProphetNetModel

tokenizer = ProphetNetTokenizer.from_pretrained("microsoft/prophetnet-large-uncased")
model = ProphetNetModel.from_pretrained("microsoft/prophetnet-large-uncased")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

last_hidden_states = outputs.last_hidden_state  # main stream hidden states
last_hidden_states_ngram = outputs.last_hidden_state_ngram  # predict hidden states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ProphetNetTokenizer, ProphetNetModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/prophetnet-large-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ProphetNetModel.from_pretrained(<span class="hljs-string">&quot;microsoft/prophetnet-large-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state  <span class="hljs-comment"># main stream hidden states</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states_ngram = outputs.last_hidden_state_ngram  <span class="hljs-comment"># predict hidden states</span>`}}),{c(){h=s("p"),k=n("Example:"),g=l(),b(f.$$.fragment)},l(i){h=a(i,"P",{});var u=d(h);k=r(u,"Example:"),u.forEach(o),g=p(i),T(f.$$.fragment,i)},m(i,u){_(i,h,u),e(h,k),_(i,g,u),y(f,i,u),v=!0},p:Vo,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){P(f.$$.fragment,i),v=!1},d(i){i&&o(h),i&&o(g),N(f,i)}}}function Rl($){let h,k,g,f,v;return{c(){h=s("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=a(i,"P",{});var u=d(h);k=r(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(u,"CODE",{});var q=d(g);f=r(q,"Module"),q.forEach(o),v=r(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(i,u){_(i,h,u),e(h,k),e(h,g),e(g,f),e(h,v)},d(i){i&&o(h)}}}function Jl($){let h,k,g,f,v;return f=new Ro({props:{code:`from transformers import ProphetNetTokenizer, ProphetNetEncoder
import torch

tokenizer = ProphetNetTokenizer.from_pretrained("microsoft/prophetnet-large-uncased")
model = ProphetNetEncoder.from_pretrained("patrickvonplaten/prophetnet-large-uncased-standalone")
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ProphetNetTokenizer, ProphetNetEncoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/prophetnet-large-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ProphetNetEncoder.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/prophetnet-large-uncased-standalone&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=s("p"),k=n("Example:"),g=l(),b(f.$$.fragment)},l(i){h=a(i,"P",{});var u=d(h);k=r(u,"Example:"),u.forEach(o),g=p(i),T(f.$$.fragment,i)},m(i,u){_(i,h,u),e(h,k),_(i,g,u),y(f,i,u),v=!0},p:Vo,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){P(f.$$.fragment,i),v=!1},d(i){i&&o(h),i&&o(g),N(f,i)}}}function Yl($){let h,k,g,f,v;return{c(){h=s("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=a(i,"P",{});var u=d(h);k=r(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(u,"CODE",{});var q=d(g);f=r(q,"Module"),q.forEach(o),v=r(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(i,u){_(i,h,u),e(h,k),e(h,g),e(g,f),e(h,v)},d(i){i&&o(h)}}}function Kl($){let h,k,g,f,v;return f=new Ro({props:{code:`from transformers import ProphetNetTokenizer, ProphetNetDecoder
import torch

tokenizer = ProphetNetTokenizer.from_pretrained("microsoft/prophetnet-large-uncased")
model = ProphetNetDecoder.from_pretrained("microsoft/prophetnet-large-uncased", add_cross_attention=False)
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ProphetNetTokenizer, ProphetNetDecoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/prophetnet-large-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ProphetNetDecoder.from_pretrained(<span class="hljs-string">&quot;microsoft/prophetnet-large-uncased&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=s("p"),k=n("Example:"),g=l(),b(f.$$.fragment)},l(i){h=a(i,"P",{});var u=d(h);k=r(u,"Example:"),u.forEach(o),g=p(i),T(f.$$.fragment,i)},m(i,u){_(i,h,u),e(h,k),_(i,g,u),y(f,i,u),v=!0},p:Vo,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){P(f.$$.fragment,i),v=!1},d(i){i&&o(h),i&&o(g),N(f,i)}}}function Ql($){let h,k,g,f,v;return{c(){h=s("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=a(i,"P",{});var u=d(h);k=r(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(u,"CODE",{});var q=d(g);f=r(q,"Module"),q.forEach(o),v=r(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(i,u){_(i,h,u),e(h,k),e(h,g),e(g,f),e(h,v)},d(i){i&&o(h)}}}function Xl($){let h,k,g,f,v;return f=new Ro({props:{code:`from transformers import ProphetNetTokenizer, ProphetNetForConditionalGeneration

tokenizer = ProphetNetTokenizer.from_pretrained("microsoft/prophetnet-large-uncased")
model = ProphetNetForConditionalGeneration.from_pretrained("microsoft/prophetnet-large-uncased")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

logits_next_token = outputs.logits  # logits to predict next token as usual
logits_ngram_next_tokens = outputs.logits_ngram  # logits to predict 2nd, 3rd, ... next tokens`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ProphetNetTokenizer, ProphetNetForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/prophetnet-large-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ProphetNetForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;microsoft/prophetnet-large-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits_next_token = outputs.logits  <span class="hljs-comment"># logits to predict next token as usual</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_ngram_next_tokens = outputs.logits_ngram  <span class="hljs-comment"># logits to predict 2nd, 3rd, ... next tokens</span>`}}),{c(){h=s("p"),k=n("Example:"),g=l(),b(f.$$.fragment)},l(i){h=a(i,"P",{});var u=d(h);k=r(u,"Example:"),u.forEach(o),g=p(i),T(f.$$.fragment,i)},m(i,u){_(i,h,u),e(h,k),_(i,g,u),y(f,i,u),v=!0},p:Vo,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){P(f.$$.fragment,i),v=!1},d(i){i&&o(h),i&&o(g),N(f,i)}}}function Zl($){let h,k,g,f,v;return{c(){h=s("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=a(i,"P",{});var u=d(h);k=r(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(u,"CODE",{});var q=d(g);f=r(q,"Module"),q.forEach(o),v=r(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(i,u){_(i,h,u),e(h,k),e(h,g),e(g,f),e(h,v)},d(i){i&&o(h)}}}function ep($){let h,k,g,f,v;return f=new Ro({props:{code:`from transformers import ProphetNetTokenizer, ProphetNetForCausalLM
import torch

tokenizer = ProphetNetTokenizer.from_pretrained("microsoft/prophetnet-large-uncased")
model = ProphetNetForCausalLM.from_pretrained("microsoft/prophetnet-large-uncased")
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits

# Model can also be used with EncoderDecoder framework
from transformers import BertTokenizer, EncoderDecoderModel, ProphetNetTokenizer
import torch

tokenizer_enc = BertTokenizer.from_pretrained("bert-large-uncased")
tokenizer_dec = ProphetNetTokenizer.from_pretrained("microsoft/prophetnet-large-uncased")
model = EncoderDecoderModel.from_encoder_decoder_pretrained(
    "bert-large-uncased", "microsoft/prophetnet-large-uncased"
)

ARTICLE = (
    "the us state department said wednesday it had received no "
    "formal word from bolivia that it was expelling the us ambassador there "
    "but said the charges made against him are \`\` baseless ."
)
input_ids = tokenizer_enc(ARTICLE, return_tensors="pt").input_ids
labels = tokenizer_dec(
    "us rejects charges against its ambassador in bolivia", return_tensors="pt"
).input_ids
outputs = model(input_ids=input_ids, decoder_input_ids=labels[:, :-1], labels=labels[:, 1:])

loss = outputs.loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ProphetNetTokenizer, ProphetNetForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/prophetnet-large-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ProphetNetForCausalLM.from_pretrained(<span class="hljs-string">&quot;microsoft/prophetnet-large-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Model can also be used with EncoderDecoder framework</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, EncoderDecoderModel, ProphetNetTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_enc = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-large-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_dec = ProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/prophetnet-large-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;bert-large-uncased&quot;</span>, <span class="hljs-string">&quot;microsoft/prophetnet-large-uncased&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;the us state department said wednesday it had received no &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;formal word from bolivia that it was expelling the us ambassador there &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;but said the charges made against him are \`\` baseless .&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer_enc(ARTICLE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer_dec(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;us rejects charges against its ambassador in bolivia&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=labels[:, :-<span class="hljs-number">1</span>], labels=labels[:, <span class="hljs-number">1</span>:])

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){h=s("p"),k=n("Example:"),g=l(),b(f.$$.fragment)},l(i){h=a(i,"P",{});var u=d(h);k=r(u,"Example:"),u.forEach(o),g=p(i),T(f.$$.fragment,i)},m(i,u){_(i,h,u),e(h,k),_(i,g,u),y(f,i,u),v=!0},p:Vo,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){P(f.$$.fragment,i),v=!1},d(i){i&&o(h),i&&o(g),N(f,i)}}}function tp($){let h,k,g,f,v,i,u,q,ts,Zn,ee,Jo,os,ns,rt,rs,ss,er,te,qe,Yo,st,as,Ko,ds,tr,ze,is,at,cs,ls,or,co,ps,nr,lo,hs,rr,po,Qo,us,sr,Fe,ms,dt,fs,_s,ar,oe,xe,Xo,it,gs,Zo,vs,dr,V,ct,ks,ne,bs,ho,Ts,ys,lt,ws,Ps,Ns,re,$s,uo,qs,zs,mo,Fs,xs,ir,se,Me,en,pt,Ms,tn,Es,cr,F,ht,Os,on,Cs,Ss,ut,Ds,fo,Ls,js,As,R,mt,Is,nn,Bs,Gs,ft,_o,Ws,rn,Hs,Us,go,Vs,sn,Rs,Js,Ee,_t,Ys,an,Ks,Qs,j,gt,Xs,dn,Zs,ea,Oe,ta,ae,oa,cn,na,ra,ln,sa,aa,da,Ce,vt,ia,kt,ca,pn,la,pa,lr,de,Se,hn,bt,ha,un,ua,pr,ie,Tt,ma,mn,fa,hr,ce,yt,_a,fn,ga,ur,le,wt,va,_n,ka,mr,pe,Pt,ba,gn,Ta,fr,he,De,vn,Nt,ya,kn,wa,_r,E,$t,Pa,qt,Na,vo,$a,qa,za,ue,Fa,zt,xa,Ma,bn,Ea,Oa,Ca,Ft,Sa,xt,Da,La,ja,A,Mt,Aa,me,Ia,ko,Ba,Ga,Tn,Wa,Ha,Ua,Le,Va,je,gr,fe,Ae,yn,Et,Ra,wn,Ja,vr,x,Ot,Ya,Ct,Ka,bo,Qa,Xa,Za,_e,ed,St,td,od,Pn,nd,rd,sd,Dt,ad,Lt,dd,id,cd,D,ld,Nn,pd,hd,$n,ud,md,qn,fd,_d,To,gd,vd,kd,I,jt,bd,ge,Td,yo,yd,wd,zn,Pd,Nd,$d,Ie,qd,Be,kr,ve,Ge,Fn,At,zd,xn,Fd,br,M,It,xd,Bt,Md,wo,Ed,Od,Cd,ke,Sd,Gt,Dd,Ld,Mn,jd,Ad,Id,Wt,Bd,Ht,Gd,Wd,Hd,L,Ud,En,Vd,Rd,On,Jd,Yd,Cn,Kd,Qd,Po,Xd,Zd,ei,B,Ut,ti,be,oi,No,ni,ri,Sn,si,ai,di,We,ii,He,Tr,Te,Ue,Dn,Vt,ci,Ln,li,yr,O,Rt,pi,Jt,hi,$o,ui,mi,fi,ye,_i,Yt,gi,vi,jn,ki,bi,Ti,Kt,yi,Qt,wi,Pi,Ni,G,Xt,$i,we,qi,qo,zi,Fi,An,xi,Mi,Ei,Ve,Oi,Re,wr,Pe,Je,In,Zt,Ci,Bn,Si,Pr,C,eo,Di,to,Li,zo,ji,Ai,Ii,Ne,Bi,oo,Gi,Wi,Gn,Hi,Ui,Vi,no,Ri,ro,Ji,Yi,Ki,W,so,Qi,$e,Xi,Fo,Zi,ec,Wn,tc,oc,nc,Ye,rc,Ke,Nr;return i=new Z({}),st=new Z({}),it=new Z({}),ct=new z({props:{name:"class transformers.ProphetNetConfig",anchor:"transformers.ProphetNetConfig",parameters:[{name:"activation_dropout",val:": typing.Optional[float] = 0.1"},{name:"activation_function",val:": typing.Union[str, typing.Callable, NoneType] = 'gelu'"},{name:"vocab_size",val:": typing.Optional[int] = 30522"},{name:"hidden_size",val:": typing.Optional[int] = 1024"},{name:"encoder_ffn_dim",val:": typing.Optional[int] = 4096"},{name:"num_encoder_layers",val:": typing.Optional[int] = 12"},{name:"num_encoder_attention_heads",val:": typing.Optional[int] = 16"},{name:"decoder_ffn_dim",val:": typing.Optional[int] = 4096"},{name:"num_decoder_layers",val:": typing.Optional[int] = 12"},{name:"num_decoder_attention_heads",val:": typing.Optional[int] = 16"},{name:"attention_dropout",val:": typing.Optional[float] = 0.1"},{name:"dropout",val:": typing.Optional[float] = 0.1"},{name:"max_position_embeddings",val:": typing.Optional[int] = 512"},{name:"init_std",val:": typing.Optional[float] = 0.02"},{name:"is_encoder_decoder",val:": typing.Optional[bool] = True"},{name:"add_cross_attention",val:": typing.Optional[bool] = True"},{name:"decoder_start_token_id",val:": typing.Optional[int] = 0"},{name:"ngram",val:": typing.Optional[int] = 2"},{name:"num_buckets",val:": typing.Optional[int] = 32"},{name:"relative_max_distance",val:": typing.Optional[int] = 128"},{name:"disable_ngram_loss",val:": typing.Optional[bool] = False"},{name:"eps",val:": typing.Optional[float] = 0.0"},{name:"use_cache",val:": typing.Optional[bool] = True"},{name:"pad_token_id",val:": typing.Optional[int] = 0"},{name:"bos_token_id",val:": typing.Optional[int] = 1"},{name:"eos_token_id",val:": typing.Optional[int] = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ProphetNetConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.ProphetNetConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.ProphetNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the ProphetNET model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetModel">ProphetNetModel</a>.`,name:"vocab_size"},{anchor:"transformers.ProphetNetConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.ProphetNetConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.ProphetNetConfig.num_encoder_layers",description:`<strong>num_encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"num_encoder_layers"},{anchor:"transformers.ProphetNetConfig.num_encoder_attention_heads",description:`<strong>num_encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_encoder_attention_heads"},{anchor:"transformers.ProphetNetConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the <code>intermediate</code> (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.ProphetNetConfig.num_decoder_layers",description:`<strong>num_decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"num_decoder_layers"},{anchor:"transformers.ProphetNetConfig.num_decoder_attention_heads",description:`<strong>num_decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"num_decoder_attention_heads"},{anchor:"transformers.ProphetNetConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.ProphetNetConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.ProphetNetConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.ProphetNetConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.ProphetNetConfig.add_cross_attention",description:`<strong>add_cross_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether cross-attention layers should be added to the model.`,name:"add_cross_attention"},{anchor:"transformers.ProphetNetConfig.is_encoder_decoder",description:`<strong>is_encoder_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether this is an encoder/decoder model.`,name:"is_encoder_decoder"},{anchor:"transformers.ProphetNetConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Padding token id.`,name:"pad_token_id"},{anchor:"transformers.ProphetNetConfig.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
Beginning of stream token id.`,name:"bos_token_id"},{anchor:"transformers.ProphetNetConfig.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
End of stream token id.`,name:"eos_token_id"},{anchor:"transformers.ProphetNetConfig.ngram",description:`<strong>ngram</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of future tokens to predict. Set to 1 to be same as traditional Language model to predict next first
token.`,name:"ngram"},{anchor:"transformers.ProphetNetConfig.num_buckets",description:`<strong>num_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of buckets to use for each attention layer. This is for relative position calculation. See the
[T5 paper](see <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">https://arxiv.org/abs/1910.10683</a>) for more details.`,name:"num_buckets"},{anchor:"transformers.ProphetNetConfig.relative_max_distance",description:`<strong>relative_max_distance</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Relative distances greater than this number will be put into the last same bucket. This is for relative
position calculation. See the [T5 paper](see <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">https://arxiv.org/abs/1910.10683</a>) for more details.`,name:"relative_max_distance"},{anchor:"transformers.ProphetNetConfig.disable_ngram_loss",description:`<strong>disable_ngram_loss</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether be trained predicting only the next first token.`,name:"disable_ngram_loss"},{anchor:"transformers.ProphetNetConfig.eps",description:`<strong>eps</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Controls the <code>epsilon</code> parameter value for label smoothing in the loss calculation. If set to 0, no label
smoothing is performed.`,name:"eps"},{anchor:"transformers.ProphetNetConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/prophetnet/configuration_prophetnet.py#L32"}}),pt=new Z({}),ht=new z({props:{name:"class transformers.ProphetNetTokenizer",anchor:"transformers.ProphetNetTokenizer",parameters:[{name:"vocab_file",val:": str"},{name:"do_lower_case",val:": typing.Optional[bool] = True"},{name:"do_basic_tokenize",val:": typing.Optional[bool] = True"},{name:"never_split",val:": typing.Optional[typing.Iterable] = None"},{name:"unk_token",val:": typing.Optional[str] = '[UNK]'"},{name:"sep_token",val:": typing.Optional[str] = '[SEP]'"},{name:"x_sep_token",val:": typing.Optional[str] = '[X_SEP]'"},{name:"pad_token",val:": typing.Optional[str] = '[PAD]'"},{name:"mask_token",val:": typing.Optional[str] = '[MASK]'"},{name:"tokenize_chinese_chars",val:": typing.Optional[bool] = True"},{name:"strip_accents",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ProphetNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.ProphetNetTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.ProphetNetTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.ProphetNetTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.ProphetNetTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.ProphetNetTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.ProphetNetTokenizer.x_sep_token",description:`<strong>x_sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[X_SEP]&quot;</code>) &#x2014;
Special second separator token, which can be generated by <a href="/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetForConditionalGeneration">ProphetNetForConditionalGeneration</a>. It is
used to separate bullet-point like sentences in summarization, <em>e.g.</em>.`,name:"x_sep_token"},{anchor:"transformers.ProphetNetTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.ProphetNetTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.ProphetNetTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.ProphetNetTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.ProphetNetTokenizer.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/prophetnet/tokenization_prophetnet.py#L275"}}),mt=new z({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.ProphetNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ProphetNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.ProphetNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/prophetnet/tokenization_prophetnet.py#L489",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),_t=new z({props:{name:"convert_tokens_to_string",anchor:"transformers.ProphetNetTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/prophetnet/tokenization_prophetnet.py#L406"}}),gt=new z({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.ProphetNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ProphetNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ProphetNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/prophetnet/tokenization_prophetnet.py#L441",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Oe=new Uo({props:{anchor:"transformers.ProphetNetTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Hl]},$$scope:{ctx:$}}}),vt=new z({props:{name:"get_special_tokens_mask",anchor:"transformers.ProphetNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.ProphetNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ProphetNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.ProphetNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/prophetnet/tokenization_prophetnet.py#L411",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),bt=new Z({}),Tt=new z({props:{name:"class transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput",anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"logits_ngram",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_ngram_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_ngram_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, decoder_sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the main stream language modeling head (scores for each vocabulary token before
SoftMax).`,name:"logits"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput.logits_ngram",description:`<strong>logits_ngram</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, ngram * decoder_sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the predict stream language modeling head (scores for each vocabulary token before
SoftMax).`,name:"logits_ngram"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_attn_heads, decoder_sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of main stream of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput.decoder_ngram_hidden_states",description:`<strong>decoder_ngram_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, ngram * decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the predict stream of the decoder at the output of each layer plus the initial embedding
outputs.`,name:"decoder_ngram_hidden_states"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput.decoder_ngram_attentions",description:`<strong>decoder_ngram_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the predict stream of the decoder, after the attention softmax, used to compute the
weighted average in the self-attention heads.`,name:"decoder_ngram_attentions"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the cross-attention layer of the decoder, after the attention softmax, used to
compute the weighted average in the`,name:"cross_attentions"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, encoder_sequence_length)</code>. Attentions weights of the encoder, after the attention
softmax, used to compute the weighted average in the self-attention heads.`,name:"encoder_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/prophetnet/modeling_prophetnet.py#L254"}}),yt=new z({props:{name:"class transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput",anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"last_hidden_state_ngram",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_ngram_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_ngram_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>) &#x2014;
Sequence of main stream hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.`,name:"last_hidden_state"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput.last_hidden_state_ngram",description:`<strong>last_hidden_state_ngram</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,ngram * decoder_sequence_length, config.vocab_size)</code>, <em>optional</em>) &#x2014;
Sequence of predict stream hidden-states at the output of the last layer of the decoder of the model.`,name:"last_hidden_state_ngram"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_attn_heads, decoder_sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of main stream of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput.decoder_ngram_hidden_states",description:`<strong>decoder_ngram_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, ngram * decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the predict stream of the decoder at the output of each layer plus the initial embedding
outputs.`,name:"decoder_ngram_hidden_states"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput.decoder_ngram_attentions",description:`<strong>decoder_ngram_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the predict stream of the decoder, after the attention softmax, used to compute the
weighted average in the`,name:"decoder_ngram_attentions"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the cross-attention layer of the decoder, after the attention softmax, used to
compute the weighted average in the`,name:"cross_attentions"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, encoder_sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/prophetnet/modeling_prophetnet.py#L339"}}),wt=new z({props:{name:"class transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderModelOutput",anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"last_hidden_state_ngram",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"hidden_states_ngram",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"ngram_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>) &#x2014;
Sequence of main stream hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.`,name:"last_hidden_state"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderModelOutput.last_hidden_state_ngram",description:`<strong>last_hidden_state_ngram</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, ngram * decoder_sequence_length, config.vocab_size)</code>) &#x2014;
Sequence of predict stream hidden-states at the output of the last layer of the decoder of the model.`,name:"last_hidden_state_ngram"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_attn_heads, decoder_sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of main stream of the decoder at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderModelOutput.ngram_hidden_states",description:`<strong>ngram_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, ngram * decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the predict stream of the decoder at the output of each layer plus the initial embedding
outputs.`,name:"ngram_hidden_states"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"attentions"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderModelOutput.ngram_attentions",description:`<strong>ngram_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the predict stream of the decoder, after the attention softmax, used to compute the
weighted average in the`,name:"ngram_attentions"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the cross-attention layer of the decoder, after the attention softmax, used to
compute the weighted average in the`,name:"cross_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/prophetnet/modeling_prophetnet.py#L425"}}),Pt=new z({props:{name:"class transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderLMOutput",anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"logits_ngram",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"hidden_states_ngram",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"ngram_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderLMOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, decoder_sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the main stream language modeling head (scores for each vocabulary token before
SoftMax).`,name:"logits"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderLMOutput.logits_ngram",description:`<strong>logits_ngram</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, ngram * decoder_sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the predict stream language modeling head (scores for each vocabulary token before
SoftMax).`,name:"logits_ngram"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderLMOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_attn_heads, decoder_sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderLMOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of main stream of the decoder at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderLMOutput.ngram_hidden_states",description:`<strong>ngram_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, ngram * decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the predict stream of the decoder at the output of each layer plus the initial embedding
outputs.`,name:"ngram_hidden_states"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderLMOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"attentions"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderLMOutput.ngram_attentions",description:`<strong>ngram_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the predict stream of the decoder, after the attention softmax, used to compute the
weighted average in the`,name:"ngram_attentions"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderLMOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the cross-attention layer of the decoder, after the attention softmax, used to
compute the weighted average in the`,name:"cross_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/prophetnet/modeling_prophetnet.py#L485"}}),Nt=new Z({}),$t=new z({props:{name:"class transformers.ProphetNetModel",anchor:"transformers.ProphetNetModel",parameters:[{name:"config",val:": ProphetNetConfig"}],parametersDescription:[{anchor:"transformers.ProphetNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetConfig">ProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/prophetnet/modeling_prophetnet.py#L1776"}}),Mt=new z({props:{name:"forward",anchor:"transformers.ProphetNetModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ProphetNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetTokenizer">ProphetNetTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ProphetNetModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ProphetNetModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetTokenizer">ProphetNetTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>ProphetNet uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.ProphetNetModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.ProphetNetModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ProphetNetModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.ProphetNetModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.ProphetNetModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.ProphetNetModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden-states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.ProphetNetModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.ProphetNetModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ProphetNetModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ProphetNetModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/prophetnet/modeling_prophetnet.py#L1808",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/prophetnet#transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput"
>transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>ProphenetConfig</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>) \u2014 Sequence of main stream hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>last_hidden_state_ngram</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,ngram * decoder_sequence_length, config.vocab_size)</code>, <em>optional</em>) \u2014 Sequence of predict stream hidden-states at the output of the last layer of the decoder of the model.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_attn_heads, decoder_sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of main stream of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_ngram_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, ngram * decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the predict stream of the decoder at the output of each layer plus the initial embedding
outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>decoder_ngram_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the predict stream of the decoder, after the attention softmax, used to compute the
weighted average in the</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the cross-attention layer of the decoder, after the attention softmax, used to
compute the weighted average in the</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, encoder_sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/prophetnet#transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput"
>transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Le=new Xn({props:{$$slots:{default:[Ul]},$$scope:{ctx:$}}}),je=new Uo({props:{anchor:"transformers.ProphetNetModel.forward.example",$$slots:{default:[Vl]},$$scope:{ctx:$}}}),Et=new Z({}),Ot=new z({props:{name:"class transformers.ProphetNetEncoder",anchor:"transformers.ProphetNetEncoder",parameters:[{name:"config",val:": ProphetNetConfig"},{name:"word_embeddings",val:": Embedding = None"}],parametersDescription:[{anchor:"transformers.ProphetNetEncoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetConfig">ProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/prophetnet/modeling_prophetnet.py#L1265"}}),jt=new z({props:{name:"forward",anchor:"transformers.ProphetNetEncoder.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ProphetNetEncoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetTokenizer">ProphetNetTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ProphetNetEncoder.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ProphetNetEncoder.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ProphetNetEncoder.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ProphetNetEncoder.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ProphetNetEncoder.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/prophetnet/modeling_prophetnet.py#L1295",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>ProphenetConfig</code>) and inputs.</p>
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
`}}),Ie=new Xn({props:{$$slots:{default:[Rl]},$$scope:{ctx:$}}}),Be=new Uo({props:{anchor:"transformers.ProphetNetEncoder.forward.example",$$slots:{default:[Jl]},$$scope:{ctx:$}}}),At=new Z({}),It=new z({props:{name:"class transformers.ProphetNetDecoder",anchor:"transformers.ProphetNetDecoder",parameters:[{name:"config",val:": ProphetNetConfig"},{name:"word_embeddings",val:": typing.Optional[torch.nn.modules.sparse.Embedding] = None"}],parametersDescription:[{anchor:"transformers.ProphetNetDecoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetConfig">ProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/prophetnet/modeling_prophetnet.py#L1405"}}),Ut=new z({props:{name:"forward",anchor:"transformers.ProphetNetDecoder.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ProphetNetDecoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetTokenizer">ProphetNetTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ProphetNetDecoder.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ProphetNetDecoder.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ProphetNetDecoder.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ProphetNetDecoder.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ProphetNetDecoder.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ProphetNetDecoder.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ProphetNetDecoder.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.ProphetNetDecoder.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.ProphetNetDecoder.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden-states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.ProphetNetDecoder.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/prophetnet/modeling_prophetnet.py#L1442",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/prophetnet#transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderModelOutput"
>transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>ProphenetConfig</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>) \u2014 Sequence of main stream hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>last_hidden_state_ngram</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, ngram * decoder_sequence_length, config.vocab_size)</code>) \u2014 Sequence of predict stream hidden-states at the output of the last layer of the decoder of the model.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_attn_heads, decoder_sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of main stream of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>ngram_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, ngram * decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the predict stream of the decoder at the output of each layer plus the initial embedding
outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>ngram_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the predict stream of the decoder, after the attention softmax, used to compute the
weighted average in the</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the cross-attention layer of the decoder, after the attention softmax, used to
compute the weighted average in the</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/prophetnet#transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderModelOutput"
>transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),We=new Xn({props:{$$slots:{default:[Yl]},$$scope:{ctx:$}}}),He=new Uo({props:{anchor:"transformers.ProphetNetDecoder.forward.example",$$slots:{default:[Kl]},$$scope:{ctx:$}}}),Vt=new Z({}),Rt=new z({props:{name:"class transformers.ProphetNetForConditionalGeneration",anchor:"transformers.ProphetNetForConditionalGeneration",parameters:[{name:"config",val:": ProphetNetConfig"}],parametersDescription:[{anchor:"transformers.ProphetNetForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetConfig">ProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/prophetnet/modeling_prophetnet.py#L1903"}}),Xt=new z({props:{name:"forward",anchor:"transformers.ProphetNetForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ProphetNetForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetTokenizer">ProphetNetTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ProphetNetForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ProphetNetForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetTokenizer">ProphetNetTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>ProphetNet uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.ProphetNetForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.ProphetNetForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ProphetNetForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.ProphetNetForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.ProphetNetForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.ProphetNetForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden-states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.ProphetNetForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.ProphetNetForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ProphetNetForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ProphetNetForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ProphetNetForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/prophetnet/modeling_prophetnet.py#L1924",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/prophetnet#transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput"
>transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>ProphenetConfig</code>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, decoder_sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the main stream language modeling head (scores for each vocabulary token before
SoftMax).</p>
</li>
<li>
<p><strong>logits_ngram</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, ngram * decoder_sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the predict stream language modeling head (scores for each vocabulary token before
SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_attn_heads, decoder_sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of main stream of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_ngram_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, ngram * decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the predict stream of the decoder at the output of each layer plus the initial embedding
outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>decoder_ngram_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the predict stream of the decoder, after the attention softmax, used to compute the
weighted average in the self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the cross-attention layer of the decoder, after the attention softmax, used to
compute the weighted average in the</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, encoder_sequence_length)</code>. Attentions weights of the encoder, after the attention
softmax, used to compute the weighted average in the self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/prophetnet#transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput"
>transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ve=new Xn({props:{$$slots:{default:[Ql]},$$scope:{ctx:$}}}),Re=new Uo({props:{anchor:"transformers.ProphetNetForConditionalGeneration.forward.example",$$slots:{default:[Xl]},$$scope:{ctx:$}}}),Zt=new Z({}),eo=new z({props:{name:"class transformers.ProphetNetForCausalLM",anchor:"transformers.ProphetNetForCausalLM",parameters:[{name:"config",val:": ProphetNetConfig"}],parametersDescription:[{anchor:"transformers.ProphetNetForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetConfig">ProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/prophetnet/modeling_prophetnet.py#L2113"}}),so=new z({props:{name:"forward",anchor:"transformers.ProphetNetForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ProphetNetForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetTokenizer">ProphetNetTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ProphetNetForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ProphetNetForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ProphetNetForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ProphetNetForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ProphetNetForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ProphetNetForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ProphetNetForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.ProphetNetForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.ProphetNetForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden-states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.ProphetNetForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.ProphetNetForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/prophetnet/modeling_prophetnet.py#L2148",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/prophetnet#transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderLMOutput"
>transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>ProphenetConfig</code>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, decoder_sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the main stream language modeling head (scores for each vocabulary token before
SoftMax).</p>
</li>
<li>
<p><strong>logits_ngram</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, ngram * decoder_sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the predict stream language modeling head (scores for each vocabulary token before
SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_attn_heads, decoder_sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of main stream of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>ngram_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, ngram * decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the predict stream of the decoder at the output of each layer plus the initial embedding
outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>ngram_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the predict stream of the decoder, after the attention softmax, used to compute the
weighted average in the</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the cross-attention layer of the decoder, after the attention softmax, used to
compute the weighted average in the</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/prophetnet#transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderLMOutput"
>transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ye=new Xn({props:{$$slots:{default:[Zl]},$$scope:{ctx:$}}}),Ke=new Uo({props:{anchor:"transformers.ProphetNetForCausalLM.forward.example",$$slots:{default:[ep]},$$scope:{ctx:$}}}),{c(){h=s("meta"),k=l(),g=s("h1"),f=s("a"),v=s("span"),b(i.$$.fragment),u=l(),q=s("span"),ts=n("ProphetNet"),Zn=l(),ee=s("p"),Jo=s("strong"),os=n("DISCLAIMER:"),ns=n(" If you see something strange, file a "),rt=s("a"),rs=n("Github Issue"),ss=n(` and assign
@patrickvonplaten`),er=l(),te=s("h2"),qe=s("a"),Yo=s("span"),b(st.$$.fragment),as=l(),Ko=s("span"),ds=n("Overview"),tr=l(),ze=s("p"),is=n("The ProphetNet model was proposed in "),at=s("a"),cs=n("ProphetNet: Predicting Future N-gram for Sequence-to-Sequence Pre-training,"),ls=n(` by Yu Yan, Weizhen Qi, Yeyun Gong, Dayiheng Liu, Nan Duan, Jiusheng Chen, Ruofei
Zhang, Ming Zhou on 13 Jan, 2020.`),or=l(),co=s("p"),ps=n(`ProphetNet is an encoder-decoder model and can predict n-future tokens for \u201Cngram\u201D language modeling instead of just
the next token.`),nr=l(),lo=s("p"),hs=n("The abstract from the paper is the following:"),rr=l(),po=s("p"),Qo=s("em"),us=n(`In this paper, we present a new sequence-to-sequence pretraining model called ProphetNet, which introduces a novel
self-supervised objective named future n-gram prediction and the proposed n-stream self-attention mechanism. Instead of
the optimization of one-step ahead prediction in traditional sequence-to-sequence model, the ProphetNet is optimized by
n-step ahead prediction which predicts the next n tokens simultaneously based on previous context tokens at each time
step. The future n-gram prediction explicitly encourages the model to plan for the future tokens and prevent
overfitting on strong local correlations. We pre-train ProphetNet using a base scale dataset (16GB) and a large scale
dataset (160GB) respectively. Then we conduct experiments on CNN/DailyMail, Gigaword, and SQuAD 1.1 benchmarks for
abstractive summarization and question generation tasks. Experimental results show that ProphetNet achieves new
state-of-the-art results on all these datasets compared to the models using the same scale pretraining corpus.`),sr=l(),Fe=s("p"),ms=n("The Authors\u2019 code can be found "),dt=s("a"),fs=n("here"),_s=n("."),ar=l(),oe=s("h2"),xe=s("a"),Xo=s("span"),b(it.$$.fragment),gs=l(),Zo=s("span"),vs=n("ProphetNetConfig"),dr=l(),V=s("div"),b(ct.$$.fragment),ks=l(),ne=s("p"),bs=n("This is the configuration class to store the configuration of a "),ho=s("a"),Ts=n("ProphetNetModel"),ys=n(`. It is used to instantiate a
ProphetNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the ProphetNet
`),lt=s("a"),ws=n("microsoft/prophetnet-large-uncased"),Ps=n(" architecture."),Ns=l(),re=s("p"),$s=n("Configuration objects inherit from "),uo=s("a"),qs=n("PretrainedConfig"),zs=n(` and can be used to control the model outputs. Read the
documentation from `),mo=s("a"),Fs=n("PretrainedConfig"),xs=n(" for more information."),ir=l(),se=s("h2"),Me=s("a"),en=s("span"),b(pt.$$.fragment),Ms=l(),tn=s("span"),Es=n("ProphetNetTokenizer"),cr=l(),F=s("div"),b(ht.$$.fragment),Os=l(),on=s("p"),Cs=n("Construct a ProphetNetTokenizer. Based on WordPiece."),Ss=l(),ut=s("p"),Ds=n("This tokenizer inherits from "),fo=s("a"),Ls=n("PreTrainedTokenizer"),js=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),As=l(),R=s("div"),b(mt.$$.fragment),Is=l(),nn=s("p"),Bs=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Gs=l(),ft=s("ul"),_o=s("li"),Ws=n("single sequence: "),rn=s("code"),Hs=n("[CLS] X [SEP]"),Us=l(),go=s("li"),Vs=n("pair of sequences: "),sn=s("code"),Rs=n("[CLS] A [SEP] B [SEP]"),Js=l(),Ee=s("div"),b(_t.$$.fragment),Ys=l(),an=s("p"),Ks=n("Converts a sequence of tokens (string) in a single string."),Qs=l(),j=s("div"),b(gt.$$.fragment),Xs=l(),dn=s("p"),Zs=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A ProphetNet"),ea=l(),b(Oe.$$.fragment),ta=l(),ae=s("p"),oa=n("If "),cn=s("code"),na=n("token_ids_1"),ra=n(" is "),ln=s("code"),sa=n("None"),aa=n(", this method only returns the first portion of the mask (0s)."),da=l(),Ce=s("div"),b(vt.$$.fragment),ia=l(),kt=s("p"),ca=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),pn=s("code"),la=n("prepare_for_model"),pa=n(" method."),lr=l(),de=s("h2"),Se=s("a"),hn=s("span"),b(bt.$$.fragment),ha=l(),un=s("span"),ua=n("ProphetNet specific outputs"),pr=l(),ie=s("div"),b(Tt.$$.fragment),ma=l(),mn=s("p"),fa=n("Base class for sequence-to-sequence language models outputs."),hr=l(),ce=s("div"),b(yt.$$.fragment),_a=l(),fn=s("p"),ga=n(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),ur=l(),le=s("div"),b(wt.$$.fragment),va=l(),_n=s("p"),ka=n("Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),mr=l(),pe=s("div"),b(Pt.$$.fragment),ba=l(),gn=s("p"),Ta=n("Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),fr=l(),he=s("h2"),De=s("a"),vn=s("span"),b(Nt.$$.fragment),ya=l(),kn=s("span"),wa=n("ProphetNetModel"),_r=l(),E=s("div"),b($t.$$.fragment),Pa=l(),qt=s("p"),Na=n(`The bare ProphetNet Model outputting raw hidden-states without any specific head on top.
This model inherits from `),vo=s("a"),$a=n("PreTrainedModel"),qa=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),za=l(),ue=s("p"),Fa=n("Original ProphetNet code can be found "),zt=s("a"),xa=n("here"),Ma=n(`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),bn=s("code"),Ea=n("convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),Oa=n("."),Ca=l(),Ft=s("p"),Sa=n("This model is a PyTorch "),xt=s("a"),Da=n("torch.nn.Module"),La=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),ja=l(),A=s("div"),b(Mt.$$.fragment),Aa=l(),me=s("p"),Ia=n("The "),ko=s("a"),Ba=n("ProphetNetModel"),Ga=n(" forward method, overrides the "),Tn=s("code"),Wa=n("__call__"),Ha=n(" special method."),Ua=l(),b(Le.$$.fragment),Va=l(),b(je.$$.fragment),gr=l(),fe=s("h2"),Ae=s("a"),yn=s("span"),b(Et.$$.fragment),Ra=l(),wn=s("span"),Ja=n("ProphetNetEncoder"),vr=l(),x=s("div"),b(Ot.$$.fragment),Ya=l(),Ct=s("p"),Ka=n(`The standalone encoder part of the ProphetNetModel.
This model inherits from `),bo=s("a"),Qa=n("PreTrainedModel"),Xa=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Za=l(),_e=s("p"),ed=n("Original ProphetNet code can be found "),St=s("a"),td=n("here"),od=n(`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),Pn=s("code"),nd=n("convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),rd=n("."),sd=l(),Dt=s("p"),ad=n("This model is a PyTorch "),Lt=s("a"),dd=n("torch.nn.Module"),id=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),cd=l(),D=s("p"),ld=n("word_embeddings  ("),Nn=s("code"),pd=n("torch.nn.Embeddings"),hd=n(" of shape "),$n=s("code"),ud=n("(config.vocab_size, config.hidden_size)"),md=n(", "),qn=s("em"),fd=n("optional"),_d=n(`):
The word embedding parameters. This can be used to initialize `),To=s("a"),gd=n("ProphetNetEncoder"),vd=n(` with pre-defined word
embeddings instead of randomly initialized word embeddings.`),kd=l(),I=s("div"),b(jt.$$.fragment),bd=l(),ge=s("p"),Td=n("The "),yo=s("a"),yd=n("ProphetNetEncoder"),wd=n(" forward method, overrides the "),zn=s("code"),Pd=n("__call__"),Nd=n(" special method."),$d=l(),b(Ie.$$.fragment),qd=l(),b(Be.$$.fragment),kr=l(),ve=s("h2"),Ge=s("a"),Fn=s("span"),b(At.$$.fragment),zd=l(),xn=s("span"),Fd=n("ProphetNetDecoder"),br=l(),M=s("div"),b(It.$$.fragment),xd=l(),Bt=s("p"),Md=n(`The standalone decoder part of the ProphetNetModel.
This model inherits from `),wo=s("a"),Ed=n("PreTrainedModel"),Od=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cd=l(),ke=s("p"),Sd=n("Original ProphetNet code can be found "),Gt=s("a"),Dd=n("here"),Ld=n(`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),Mn=s("code"),jd=n("convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),Ad=n("."),Id=l(),Wt=s("p"),Bd=n("This model is a PyTorch "),Ht=s("a"),Gd=n("torch.nn.Module"),Wd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Hd=l(),L=s("p"),Ud=n("word_embeddings  ("),En=s("code"),Vd=n("torch.nn.Embeddings"),Rd=n(" of shape "),On=s("code"),Jd=n("(config.vocab_size, config.hidden_size)"),Yd=n(", "),Cn=s("em"),Kd=n("optional"),Qd=n(`):
The word embedding parameters. This can be used to initialize `),Po=s("a"),Xd=n("ProphetNetEncoder"),Zd=n(` with pre-defined word
embeddings instead of randomly initialized word embeddings.`),ei=l(),B=s("div"),b(Ut.$$.fragment),ti=l(),be=s("p"),oi=n("The "),No=s("a"),ni=n("ProphetNetDecoder"),ri=n(" forward method, overrides the "),Sn=s("code"),si=n("__call__"),ai=n(" special method."),di=l(),b(We.$$.fragment),ii=l(),b(He.$$.fragment),Tr=l(),Te=s("h2"),Ue=s("a"),Dn=s("span"),b(Vt.$$.fragment),ci=l(),Ln=s("span"),li=n("ProphetNetForConditionalGeneration"),yr=l(),O=s("div"),b(Rt.$$.fragment),pi=l(),Jt=s("p"),hi=n(`The ProphetNet Model with a language modeling head. Can be used for sequence generation tasks.
This model inherits from `),$o=s("a"),ui=n("PreTrainedModel"),mi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fi=l(),ye=s("p"),_i=n("Original ProphetNet code can be found "),Yt=s("a"),gi=n("here"),vi=n(`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),jn=s("code"),ki=n("convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),bi=n("."),Ti=l(),Kt=s("p"),yi=n("This model is a PyTorch "),Qt=s("a"),wi=n("torch.nn.Module"),Pi=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Ni=l(),G=s("div"),b(Xt.$$.fragment),$i=l(),we=s("p"),qi=n("The "),qo=s("a"),zi=n("ProphetNetForConditionalGeneration"),Fi=n(" forward method, overrides the "),An=s("code"),xi=n("__call__"),Mi=n(" special method."),Ei=l(),b(Ve.$$.fragment),Oi=l(),b(Re.$$.fragment),wr=l(),Pe=s("h2"),Je=s("a"),In=s("span"),b(Zt.$$.fragment),Ci=l(),Bn=s("span"),Si=n("ProphetNetForCausalLM"),Pr=l(),C=s("div"),b(eo.$$.fragment),Di=l(),to=s("p"),Li=n(`The standalone decoder part of the ProphetNetModel with a lm head on top. The model can be used for causal language modeling.
This model inherits from `),zo=s("a"),ji=n("PreTrainedModel"),Ai=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ii=l(),Ne=s("p"),Bi=n("Original ProphetNet code can be found "),oo=s("a"),Gi=n("here"),Wi=n(`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),Gn=s("code"),Hi=n("convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),Ui=n("."),Vi=l(),no=s("p"),Ri=n("This model is a PyTorch "),ro=s("a"),Ji=n("torch.nn.Module"),Yi=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Ki=l(),W=s("div"),b(so.$$.fragment),Qi=l(),$e=s("p"),Xi=n("The "),Fo=s("a"),Zi=n("ProphetNetForCausalLM"),ec=n(" forward method, overrides the "),Wn=s("code"),tc=n("__call__"),oc=n(" special method."),nc=l(),b(Ye.$$.fragment),rc=l(),b(Ke.$$.fragment),this.h()},l(t){const m=Gl('[data-svelte="svelte-1phssyn"]',document.head);h=a(m,"META",{name:!0,content:!0}),m.forEach(o),k=p(t),g=a(t,"H1",{class:!0});var ao=d(g);f=a(ao,"A",{id:!0,class:!0,href:!0});var Hn=d(f);v=a(Hn,"SPAN",{});var Un=d(v);T(i.$$.fragment,Un),Un.forEach(o),Hn.forEach(o),u=p(ao),q=a(ao,"SPAN",{});var Vn=d(q);ts=r(Vn,"ProphetNet"),Vn.forEach(o),ao.forEach(o),Zn=p(t),ee=a(t,"P",{});var Qe=d(ee);Jo=a(Qe,"STRONG",{});var Rn=d(Jo);os=r(Rn,"DISCLAIMER:"),Rn.forEach(o),ns=r(Qe," If you see something strange, file a "),rt=a(Qe,"A",{href:!0,rel:!0});var Jn=d(rt);rs=r(Jn,"Github Issue"),Jn.forEach(o),ss=r(Qe,` and assign
@patrickvonplaten`),Qe.forEach(o),er=p(t),te=a(t,"H2",{class:!0});var io=d(te);qe=a(io,"A",{id:!0,class:!0,href:!0});var Yn=d(qe);Yo=a(Yn,"SPAN",{});var Kn=d(Yo);T(st.$$.fragment,Kn),Kn.forEach(o),Yn.forEach(o),as=p(io),Ko=a(io,"SPAN",{});var Qn=d(Ko);ds=r(Qn,"Overview"),Qn.forEach(o),io.forEach(o),tr=p(t),ze=a(t,"P",{});var $r=d(ze);is=r($r,"The ProphetNet model was proposed in "),at=a($r,"A",{href:!0,rel:!0});var dc=d(at);cs=r(dc,"ProphetNet: Predicting Future N-gram for Sequence-to-Sequence Pre-training,"),dc.forEach(o),ls=r($r,` by Yu Yan, Weizhen Qi, Yeyun Gong, Dayiheng Liu, Nan Duan, Jiusheng Chen, Ruofei
Zhang, Ming Zhou on 13 Jan, 2020.`),$r.forEach(o),or=p(t),co=a(t,"P",{});var ic=d(co);ps=r(ic,`ProphetNet is an encoder-decoder model and can predict n-future tokens for \u201Cngram\u201D language modeling instead of just
the next token.`),ic.forEach(o),nr=p(t),lo=a(t,"P",{});var cc=d(lo);hs=r(cc,"The abstract from the paper is the following:"),cc.forEach(o),rr=p(t),po=a(t,"P",{});var lc=d(po);Qo=a(lc,"EM",{});var pc=d(Qo);us=r(pc,`In this paper, we present a new sequence-to-sequence pretraining model called ProphetNet, which introduces a novel
self-supervised objective named future n-gram prediction and the proposed n-stream self-attention mechanism. Instead of
the optimization of one-step ahead prediction in traditional sequence-to-sequence model, the ProphetNet is optimized by
n-step ahead prediction which predicts the next n tokens simultaneously based on previous context tokens at each time
step. The future n-gram prediction explicitly encourages the model to plan for the future tokens and prevent
overfitting on strong local correlations. We pre-train ProphetNet using a base scale dataset (16GB) and a large scale
dataset (160GB) respectively. Then we conduct experiments on CNN/DailyMail, Gigaword, and SQuAD 1.1 benchmarks for
abstractive summarization and question generation tasks. Experimental results show that ProphetNet achieves new
state-of-the-art results on all these datasets compared to the models using the same scale pretraining corpus.`),pc.forEach(o),lc.forEach(o),sr=p(t),Fe=a(t,"P",{});var qr=d(Fe);ms=r(qr,"The Authors\u2019 code can be found "),dt=a(qr,"A",{href:!0,rel:!0});var hc=d(dt);fs=r(hc,"here"),hc.forEach(o),_s=r(qr,"."),qr.forEach(o),ar=p(t),oe=a(t,"H2",{class:!0});var zr=d(oe);xe=a(zr,"A",{id:!0,class:!0,href:!0});var uc=d(xe);Xo=a(uc,"SPAN",{});var mc=d(Xo);T(it.$$.fragment,mc),mc.forEach(o),uc.forEach(o),gs=p(zr),Zo=a(zr,"SPAN",{});var fc=d(Zo);vs=r(fc,"ProphetNetConfig"),fc.forEach(o),zr.forEach(o),dr=p(t),V=a(t,"DIV",{class:!0});var xo=d(V);T(ct.$$.fragment,xo),ks=p(xo),ne=a(xo,"P",{});var Mo=d(ne);bs=r(Mo,"This is the configuration class to store the configuration of a "),ho=a(Mo,"A",{href:!0});var _c=d(ho);Ts=r(_c,"ProphetNetModel"),_c.forEach(o),ys=r(Mo,`. It is used to instantiate a
ProphetNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the ProphetNet
`),lt=a(Mo,"A",{href:!0,rel:!0});var gc=d(lt);ws=r(gc,"microsoft/prophetnet-large-uncased"),gc.forEach(o),Ps=r(Mo," architecture."),Mo.forEach(o),Ns=p(xo),re=a(xo,"P",{});var Eo=d(re);$s=r(Eo,"Configuration objects inherit from "),uo=a(Eo,"A",{href:!0});var vc=d(uo);qs=r(vc,"PretrainedConfig"),vc.forEach(o),zs=r(Eo,` and can be used to control the model outputs. Read the
documentation from `),mo=a(Eo,"A",{href:!0});var kc=d(mo);Fs=r(kc,"PretrainedConfig"),kc.forEach(o),xs=r(Eo," for more information."),Eo.forEach(o),xo.forEach(o),ir=p(t),se=a(t,"H2",{class:!0});var Fr=d(se);Me=a(Fr,"A",{id:!0,class:!0,href:!0});var bc=d(Me);en=a(bc,"SPAN",{});var Tc=d(en);T(pt.$$.fragment,Tc),Tc.forEach(o),bc.forEach(o),Ms=p(Fr),tn=a(Fr,"SPAN",{});var yc=d(tn);Es=r(yc,"ProphetNetTokenizer"),yc.forEach(o),Fr.forEach(o),cr=p(t),F=a(t,"DIV",{class:!0});var S=d(F);T(ht.$$.fragment,S),Os=p(S),on=a(S,"P",{});var wc=d(on);Cs=r(wc,"Construct a ProphetNetTokenizer. Based on WordPiece."),wc.forEach(o),Ss=p(S),ut=a(S,"P",{});var xr=d(ut);Ds=r(xr,"This tokenizer inherits from "),fo=a(xr,"A",{href:!0});var Pc=d(fo);Ls=r(Pc,"PreTrainedTokenizer"),Pc.forEach(o),js=r(xr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),xr.forEach(o),As=p(S),R=a(S,"DIV",{class:!0});var Oo=d(R);T(mt.$$.fragment,Oo),Is=p(Oo),nn=a(Oo,"P",{});var Nc=d(nn);Bs=r(Nc,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Nc.forEach(o),Gs=p(Oo),ft=a(Oo,"UL",{});var Mr=d(ft);_o=a(Mr,"LI",{});var sc=d(_o);Ws=r(sc,"single sequence: "),rn=a(sc,"CODE",{});var $c=d(rn);Hs=r($c,"[CLS] X [SEP]"),$c.forEach(o),sc.forEach(o),Us=p(Mr),go=a(Mr,"LI",{});var ac=d(go);Vs=r(ac,"pair of sequences: "),sn=a(ac,"CODE",{});var qc=d(sn);Rs=r(qc,"[CLS] A [SEP] B [SEP]"),qc.forEach(o),ac.forEach(o),Mr.forEach(o),Oo.forEach(o),Js=p(S),Ee=a(S,"DIV",{class:!0});var Er=d(Ee);T(_t.$$.fragment,Er),Ys=p(Er),an=a(Er,"P",{});var zc=d(an);Ks=r(zc,"Converts a sequence of tokens (string) in a single string."),zc.forEach(o),Er.forEach(o),Qs=p(S),j=a(S,"DIV",{class:!0});var Xe=d(j);T(gt.$$.fragment,Xe),Xs=p(Xe),dn=a(Xe,"P",{});var Fc=d(dn);Zs=r(Fc,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A ProphetNet"),Fc.forEach(o),ea=p(Xe),T(Oe.$$.fragment,Xe),ta=p(Xe),ae=a(Xe,"P",{});var Co=d(ae);oa=r(Co,"If "),cn=a(Co,"CODE",{});var xc=d(cn);na=r(xc,"token_ids_1"),xc.forEach(o),ra=r(Co," is "),ln=a(Co,"CODE",{});var Mc=d(ln);sa=r(Mc,"None"),Mc.forEach(o),aa=r(Co,", this method only returns the first portion of the mask (0s)."),Co.forEach(o),Xe.forEach(o),da=p(S),Ce=a(S,"DIV",{class:!0});var Or=d(Ce);T(vt.$$.fragment,Or),ia=p(Or),kt=a(Or,"P",{});var Cr=d(kt);ca=r(Cr,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),pn=a(Cr,"CODE",{});var Ec=d(pn);la=r(Ec,"prepare_for_model"),Ec.forEach(o),pa=r(Cr," method."),Cr.forEach(o),Or.forEach(o),S.forEach(o),lr=p(t),de=a(t,"H2",{class:!0});var Sr=d(de);Se=a(Sr,"A",{id:!0,class:!0,href:!0});var Oc=d(Se);hn=a(Oc,"SPAN",{});var Cc=d(hn);T(bt.$$.fragment,Cc),Cc.forEach(o),Oc.forEach(o),ha=p(Sr),un=a(Sr,"SPAN",{});var Sc=d(un);ua=r(Sc,"ProphetNet specific outputs"),Sc.forEach(o),Sr.forEach(o),pr=p(t),ie=a(t,"DIV",{class:!0});var Dr=d(ie);T(Tt.$$.fragment,Dr),ma=p(Dr),mn=a(Dr,"P",{});var Dc=d(mn);fa=r(Dc,"Base class for sequence-to-sequence language models outputs."),Dc.forEach(o),Dr.forEach(o),hr=p(t),ce=a(t,"DIV",{class:!0});var Lr=d(ce);T(yt.$$.fragment,Lr),_a=p(Lr),fn=a(Lr,"P",{});var Lc=d(fn);ga=r(Lc,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Lc.forEach(o),Lr.forEach(o),ur=p(t),le=a(t,"DIV",{class:!0});var jr=d(le);T(wt.$$.fragment,jr),va=p(jr),_n=a(jr,"P",{});var jc=d(_n);ka=r(jc,"Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),jc.forEach(o),jr.forEach(o),mr=p(t),pe=a(t,"DIV",{class:!0});var Ar=d(pe);T(Pt.$$.fragment,Ar),ba=p(Ar),gn=a(Ar,"P",{});var Ac=d(gn);Ta=r(Ac,"Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),Ac.forEach(o),Ar.forEach(o),fr=p(t),he=a(t,"H2",{class:!0});var Ir=d(he);De=a(Ir,"A",{id:!0,class:!0,href:!0});var Ic=d(De);vn=a(Ic,"SPAN",{});var Bc=d(vn);T(Nt.$$.fragment,Bc),Bc.forEach(o),Ic.forEach(o),ya=p(Ir),kn=a(Ir,"SPAN",{});var Gc=d(kn);wa=r(Gc,"ProphetNetModel"),Gc.forEach(o),Ir.forEach(o),_r=p(t),E=a(t,"DIV",{class:!0});var J=d(E);T($t.$$.fragment,J),Pa=p(J),qt=a(J,"P",{});var Br=d(qt);Na=r(Br,`The bare ProphetNet Model outputting raw hidden-states without any specific head on top.
This model inherits from `),vo=a(Br,"A",{href:!0});var Wc=d(vo);$a=r(Wc,"PreTrainedModel"),Wc.forEach(o),qa=r(Br,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Br.forEach(o),za=p(J),ue=a(J,"P",{});var So=d(ue);Fa=r(So,"Original ProphetNet code can be found "),zt=a(So,"A",{href:!0,rel:!0});var Hc=d(zt);xa=r(Hc,"here"),Hc.forEach(o),Ma=r(So,`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),bn=a(So,"CODE",{});var Uc=d(bn);Ea=r(Uc,"convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),Uc.forEach(o),Oa=r(So,"."),So.forEach(o),Ca=p(J),Ft=a(J,"P",{});var Gr=d(Ft);Sa=r(Gr,"This model is a PyTorch "),xt=a(Gr,"A",{href:!0,rel:!0});var Vc=d(xt);Da=r(Vc,"torch.nn.Module"),Vc.forEach(o),La=r(Gr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Gr.forEach(o),ja=p(J),A=a(J,"DIV",{class:!0});var Ze=d(A);T(Mt.$$.fragment,Ze),Aa=p(Ze),me=a(Ze,"P",{});var Do=d(me);Ia=r(Do,"The "),ko=a(Do,"A",{href:!0});var Rc=d(ko);Ba=r(Rc,"ProphetNetModel"),Rc.forEach(o),Ga=r(Do," forward method, overrides the "),Tn=a(Do,"CODE",{});var Jc=d(Tn);Wa=r(Jc,"__call__"),Jc.forEach(o),Ha=r(Do," special method."),Do.forEach(o),Ua=p(Ze),T(Le.$$.fragment,Ze),Va=p(Ze),T(je.$$.fragment,Ze),Ze.forEach(o),J.forEach(o),gr=p(t),fe=a(t,"H2",{class:!0});var Wr=d(fe);Ae=a(Wr,"A",{id:!0,class:!0,href:!0});var Yc=d(Ae);yn=a(Yc,"SPAN",{});var Kc=d(yn);T(Et.$$.fragment,Kc),Kc.forEach(o),Yc.forEach(o),Ra=p(Wr),wn=a(Wr,"SPAN",{});var Qc=d(wn);Ja=r(Qc,"ProphetNetEncoder"),Qc.forEach(o),Wr.forEach(o),vr=p(t),x=a(t,"DIV",{class:!0});var H=d(x);T(Ot.$$.fragment,H),Ya=p(H),Ct=a(H,"P",{});var Hr=d(Ct);Ka=r(Hr,`The standalone encoder part of the ProphetNetModel.
This model inherits from `),bo=a(Hr,"A",{href:!0});var Xc=d(bo);Qa=r(Xc,"PreTrainedModel"),Xc.forEach(o),Xa=r(Hr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hr.forEach(o),Za=p(H),_e=a(H,"P",{});var Lo=d(_e);ed=r(Lo,"Original ProphetNet code can be found "),St=a(Lo,"A",{href:!0,rel:!0});var Zc=d(St);td=r(Zc,"here"),Zc.forEach(o),od=r(Lo,`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),Pn=a(Lo,"CODE",{});var el=d(Pn);nd=r(el,"convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),el.forEach(o),rd=r(Lo,"."),Lo.forEach(o),sd=p(H),Dt=a(H,"P",{});var Ur=d(Dt);ad=r(Ur,"This model is a PyTorch "),Lt=a(Ur,"A",{href:!0,rel:!0});var tl=d(Lt);dd=r(tl,"torch.nn.Module"),tl.forEach(o),id=r(Ur,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Ur.forEach(o),cd=p(H),D=a(H,"P",{});var Y=d(D);ld=r(Y,"word_embeddings  ("),Nn=a(Y,"CODE",{});var ol=d(Nn);pd=r(ol,"torch.nn.Embeddings"),ol.forEach(o),hd=r(Y," of shape "),$n=a(Y,"CODE",{});var nl=d($n);ud=r(nl,"(config.vocab_size, config.hidden_size)"),nl.forEach(o),md=r(Y,", "),qn=a(Y,"EM",{});var rl=d(qn);fd=r(rl,"optional"),rl.forEach(o),_d=r(Y,`):
The word embedding parameters. This can be used to initialize `),To=a(Y,"A",{href:!0});var sl=d(To);gd=r(sl,"ProphetNetEncoder"),sl.forEach(o),vd=r(Y,` with pre-defined word
embeddings instead of randomly initialized word embeddings.`),Y.forEach(o),kd=p(H),I=a(H,"DIV",{class:!0});var et=d(I);T(jt.$$.fragment,et),bd=p(et),ge=a(et,"P",{});var jo=d(ge);Td=r(jo,"The "),yo=a(jo,"A",{href:!0});var al=d(yo);yd=r(al,"ProphetNetEncoder"),al.forEach(o),wd=r(jo," forward method, overrides the "),zn=a(jo,"CODE",{});var dl=d(zn);Pd=r(dl,"__call__"),dl.forEach(o),Nd=r(jo," special method."),jo.forEach(o),$d=p(et),T(Ie.$$.fragment,et),qd=p(et),T(Be.$$.fragment,et),et.forEach(o),H.forEach(o),kr=p(t),ve=a(t,"H2",{class:!0});var Vr=d(ve);Ge=a(Vr,"A",{id:!0,class:!0,href:!0});var il=d(Ge);Fn=a(il,"SPAN",{});var cl=d(Fn);T(At.$$.fragment,cl),cl.forEach(o),il.forEach(o),zd=p(Vr),xn=a(Vr,"SPAN",{});var ll=d(xn);Fd=r(ll,"ProphetNetDecoder"),ll.forEach(o),Vr.forEach(o),br=p(t),M=a(t,"DIV",{class:!0});var U=d(M);T(It.$$.fragment,U),xd=p(U),Bt=a(U,"P",{});var Rr=d(Bt);Md=r(Rr,`The standalone decoder part of the ProphetNetModel.
This model inherits from `),wo=a(Rr,"A",{href:!0});var pl=d(wo);Ed=r(pl,"PreTrainedModel"),pl.forEach(o),Od=r(Rr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rr.forEach(o),Cd=p(U),ke=a(U,"P",{});var Ao=d(ke);Sd=r(Ao,"Original ProphetNet code can be found "),Gt=a(Ao,"A",{href:!0,rel:!0});var hl=d(Gt);Dd=r(hl,"here"),hl.forEach(o),Ld=r(Ao,`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),Mn=a(Ao,"CODE",{});var ul=d(Mn);jd=r(ul,"convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),ul.forEach(o),Ad=r(Ao,"."),Ao.forEach(o),Id=p(U),Wt=a(U,"P",{});var Jr=d(Wt);Bd=r(Jr,"This model is a PyTorch "),Ht=a(Jr,"A",{href:!0,rel:!0});var ml=d(Ht);Gd=r(ml,"torch.nn.Module"),ml.forEach(o),Wd=r(Jr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Jr.forEach(o),Hd=p(U),L=a(U,"P",{});var K=d(L);Ud=r(K,"word_embeddings  ("),En=a(K,"CODE",{});var fl=d(En);Vd=r(fl,"torch.nn.Embeddings"),fl.forEach(o),Rd=r(K," of shape "),On=a(K,"CODE",{});var _l=d(On);Jd=r(_l,"(config.vocab_size, config.hidden_size)"),_l.forEach(o),Yd=r(K,", "),Cn=a(K,"EM",{});var gl=d(Cn);Kd=r(gl,"optional"),gl.forEach(o),Qd=r(K,`):
The word embedding parameters. This can be used to initialize `),Po=a(K,"A",{href:!0});var vl=d(Po);Xd=r(vl,"ProphetNetEncoder"),vl.forEach(o),Zd=r(K,` with pre-defined word
embeddings instead of randomly initialized word embeddings.`),K.forEach(o),ei=p(U),B=a(U,"DIV",{class:!0});var tt=d(B);T(Ut.$$.fragment,tt),ti=p(tt),be=a(tt,"P",{});var Io=d(be);oi=r(Io,"The "),No=a(Io,"A",{href:!0});var kl=d(No);ni=r(kl,"ProphetNetDecoder"),kl.forEach(o),ri=r(Io," forward method, overrides the "),Sn=a(Io,"CODE",{});var bl=d(Sn);si=r(bl,"__call__"),bl.forEach(o),ai=r(Io," special method."),Io.forEach(o),di=p(tt),T(We.$$.fragment,tt),ii=p(tt),T(He.$$.fragment,tt),tt.forEach(o),U.forEach(o),Tr=p(t),Te=a(t,"H2",{class:!0});var Yr=d(Te);Ue=a(Yr,"A",{id:!0,class:!0,href:!0});var Tl=d(Ue);Dn=a(Tl,"SPAN",{});var yl=d(Dn);T(Vt.$$.fragment,yl),yl.forEach(o),Tl.forEach(o),ci=p(Yr),Ln=a(Yr,"SPAN",{});var wl=d(Ln);li=r(wl,"ProphetNetForConditionalGeneration"),wl.forEach(o),Yr.forEach(o),yr=p(t),O=a(t,"DIV",{class:!0});var Q=d(O);T(Rt.$$.fragment,Q),pi=p(Q),Jt=a(Q,"P",{});var Kr=d(Jt);hi=r(Kr,`The ProphetNet Model with a language modeling head. Can be used for sequence generation tasks.
This model inherits from `),$o=a(Kr,"A",{href:!0});var Pl=d($o);ui=r(Pl,"PreTrainedModel"),Pl.forEach(o),mi=r(Kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kr.forEach(o),fi=p(Q),ye=a(Q,"P",{});var Bo=d(ye);_i=r(Bo,"Original ProphetNet code can be found "),Yt=a(Bo,"A",{href:!0,rel:!0});var Nl=d(Yt);gi=r(Nl,"here"),Nl.forEach(o),vi=r(Bo,`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),jn=a(Bo,"CODE",{});var $l=d(jn);ki=r($l,"convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),$l.forEach(o),bi=r(Bo,"."),Bo.forEach(o),Ti=p(Q),Kt=a(Q,"P",{});var Qr=d(Kt);yi=r(Qr,"This model is a PyTorch "),Qt=a(Qr,"A",{href:!0,rel:!0});var ql=d(Qt);wi=r(ql,"torch.nn.Module"),ql.forEach(o),Pi=r(Qr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Qr.forEach(o),Ni=p(Q),G=a(Q,"DIV",{class:!0});var ot=d(G);T(Xt.$$.fragment,ot),$i=p(ot),we=a(ot,"P",{});var Go=d(we);qi=r(Go,"The "),qo=a(Go,"A",{href:!0});var zl=d(qo);zi=r(zl,"ProphetNetForConditionalGeneration"),zl.forEach(o),Fi=r(Go," forward method, overrides the "),An=a(Go,"CODE",{});var Fl=d(An);xi=r(Fl,"__call__"),Fl.forEach(o),Mi=r(Go," special method."),Go.forEach(o),Ei=p(ot),T(Ve.$$.fragment,ot),Oi=p(ot),T(Re.$$.fragment,ot),ot.forEach(o),Q.forEach(o),wr=p(t),Pe=a(t,"H2",{class:!0});var Xr=d(Pe);Je=a(Xr,"A",{id:!0,class:!0,href:!0});var xl=d(Je);In=a(xl,"SPAN",{});var Ml=d(In);T(Zt.$$.fragment,Ml),Ml.forEach(o),xl.forEach(o),Ci=p(Xr),Bn=a(Xr,"SPAN",{});var El=d(Bn);Si=r(El,"ProphetNetForCausalLM"),El.forEach(o),Xr.forEach(o),Pr=p(t),C=a(t,"DIV",{class:!0});var X=d(C);T(eo.$$.fragment,X),Di=p(X),to=a(X,"P",{});var Zr=d(to);Li=r(Zr,`The standalone decoder part of the ProphetNetModel with a lm head on top. The model can be used for causal language modeling.
This model inherits from `),zo=a(Zr,"A",{href:!0});var Ol=d(zo);ji=r(Ol,"PreTrainedModel"),Ol.forEach(o),Ai=r(Zr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zr.forEach(o),Ii=p(X),Ne=a(X,"P",{});var Wo=d(Ne);Bi=r(Wo,"Original ProphetNet code can be found "),oo=a(Wo,"A",{href:!0,rel:!0});var Cl=d(oo);Gi=r(Cl,"here"),Cl.forEach(o),Wi=r(Wo,`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),Gn=a(Wo,"CODE",{});var Sl=d(Gn);Hi=r(Sl,"convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),Sl.forEach(o),Ui=r(Wo,"."),Wo.forEach(o),Vi=p(X),no=a(X,"P",{});var es=d(no);Ri=r(es,"This model is a PyTorch "),ro=a(es,"A",{href:!0,rel:!0});var Dl=d(ro);Ji=r(Dl,"torch.nn.Module"),Dl.forEach(o),Yi=r(es,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),es.forEach(o),Ki=p(X),W=a(X,"DIV",{class:!0});var nt=d(W);T(so.$$.fragment,nt),Qi=p(nt),$e=a(nt,"P",{});var Ho=d($e);Xi=r(Ho,"The "),Fo=a(Ho,"A",{href:!0});var Ll=d(Fo);Zi=r(Ll,"ProphetNetForCausalLM"),Ll.forEach(o),ec=r(Ho," forward method, overrides the "),Wn=a(Ho,"CODE",{});var jl=d(Wn);tc=r(jl,"__call__"),jl.forEach(o),oc=r(Ho," special method."),Ho.forEach(o),nc=p(nt),T(Ye.$$.fragment,nt),rc=p(nt),T(Ke.$$.fragment,nt),nt.forEach(o),X.forEach(o),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(op)),c(f,"id","prophetnet"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#prophetnet"),c(g,"class","relative group"),c(rt,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(rt,"rel","nofollow"),c(qe,"id","overview"),c(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qe,"href","#overview"),c(te,"class","relative group"),c(at,"href","https://arxiv.org/abs/2001.04063"),c(at,"rel","nofollow"),c(dt,"href","https://github.com/microsoft/ProphetNet"),c(dt,"rel","nofollow"),c(xe,"id","transformers.ProphetNetConfig"),c(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xe,"href","#transformers.ProphetNetConfig"),c(oe,"class","relative group"),c(ho,"href","/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetModel"),c(lt,"href","https://huggingface.co/microsoft/prophetnet-large-uncased"),c(lt,"rel","nofollow"),c(uo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(mo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Me,"id","transformers.ProphetNetTokenizer"),c(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Me,"href","#transformers.ProphetNetTokenizer"),c(se,"class","relative group"),c(fo,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Se,"id","transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput"),c(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Se,"href","#transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput"),c(de,"class","relative group"),c(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(De,"id","transformers.ProphetNetModel"),c(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(De,"href","#transformers.ProphetNetModel"),c(he,"class","relative group"),c(vo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(zt,"href","https://github.com/microsoft/ProphetNet"),c(zt,"rel","nofollow"),c(xt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(xt,"rel","nofollow"),c(ko,"href","/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetModel"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ae,"id","transformers.ProphetNetEncoder"),c(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ae,"href","#transformers.ProphetNetEncoder"),c(fe,"class","relative group"),c(bo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(St,"href","https://github.com/microsoft/ProphetNet"),c(St,"rel","nofollow"),c(Lt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Lt,"rel","nofollow"),c(To,"href","/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetEncoder"),c(yo,"href","/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetEncoder"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ge,"id","transformers.ProphetNetDecoder"),c(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ge,"href","#transformers.ProphetNetDecoder"),c(ve,"class","relative group"),c(wo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Gt,"href","https://github.com/microsoft/ProphetNet"),c(Gt,"rel","nofollow"),c(Ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ht,"rel","nofollow"),c(Po,"href","/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetEncoder"),c(No,"href","/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetDecoder"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ue,"id","transformers.ProphetNetForConditionalGeneration"),c(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ue,"href","#transformers.ProphetNetForConditionalGeneration"),c(Te,"class","relative group"),c($o,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Yt,"href","https://github.com/microsoft/ProphetNet"),c(Yt,"rel","nofollow"),c(Qt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Qt,"rel","nofollow"),c(qo,"href","/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetForConditionalGeneration"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Je,"id","transformers.ProphetNetForCausalLM"),c(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Je,"href","#transformers.ProphetNetForCausalLM"),c(Pe,"class","relative group"),c(zo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(oo,"href","https://github.com/microsoft/ProphetNet"),c(oo,"rel","nofollow"),c(ro,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ro,"rel","nofollow"),c(Fo,"href","/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetForCausalLM"),c(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,m){e(document.head,h),_(t,k,m),_(t,g,m),e(g,f),e(f,v),y(i,v,null),e(g,u),e(g,q),e(q,ts),_(t,Zn,m),_(t,ee,m),e(ee,Jo),e(Jo,os),e(ee,ns),e(ee,rt),e(rt,rs),e(ee,ss),_(t,er,m),_(t,te,m),e(te,qe),e(qe,Yo),y(st,Yo,null),e(te,as),e(te,Ko),e(Ko,ds),_(t,tr,m),_(t,ze,m),e(ze,is),e(ze,at),e(at,cs),e(ze,ls),_(t,or,m),_(t,co,m),e(co,ps),_(t,nr,m),_(t,lo,m),e(lo,hs),_(t,rr,m),_(t,po,m),e(po,Qo),e(Qo,us),_(t,sr,m),_(t,Fe,m),e(Fe,ms),e(Fe,dt),e(dt,fs),e(Fe,_s),_(t,ar,m),_(t,oe,m),e(oe,xe),e(xe,Xo),y(it,Xo,null),e(oe,gs),e(oe,Zo),e(Zo,vs),_(t,dr,m),_(t,V,m),y(ct,V,null),e(V,ks),e(V,ne),e(ne,bs),e(ne,ho),e(ho,Ts),e(ne,ys),e(ne,lt),e(lt,ws),e(ne,Ps),e(V,Ns),e(V,re),e(re,$s),e(re,uo),e(uo,qs),e(re,zs),e(re,mo),e(mo,Fs),e(re,xs),_(t,ir,m),_(t,se,m),e(se,Me),e(Me,en),y(pt,en,null),e(se,Ms),e(se,tn),e(tn,Es),_(t,cr,m),_(t,F,m),y(ht,F,null),e(F,Os),e(F,on),e(on,Cs),e(F,Ss),e(F,ut),e(ut,Ds),e(ut,fo),e(fo,Ls),e(ut,js),e(F,As),e(F,R),y(mt,R,null),e(R,Is),e(R,nn),e(nn,Bs),e(R,Gs),e(R,ft),e(ft,_o),e(_o,Ws),e(_o,rn),e(rn,Hs),e(ft,Us),e(ft,go),e(go,Vs),e(go,sn),e(sn,Rs),e(F,Js),e(F,Ee),y(_t,Ee,null),e(Ee,Ys),e(Ee,an),e(an,Ks),e(F,Qs),e(F,j),y(gt,j,null),e(j,Xs),e(j,dn),e(dn,Zs),e(j,ea),y(Oe,j,null),e(j,ta),e(j,ae),e(ae,oa),e(ae,cn),e(cn,na),e(ae,ra),e(ae,ln),e(ln,sa),e(ae,aa),e(F,da),e(F,Ce),y(vt,Ce,null),e(Ce,ia),e(Ce,kt),e(kt,ca),e(kt,pn),e(pn,la),e(kt,pa),_(t,lr,m),_(t,de,m),e(de,Se),e(Se,hn),y(bt,hn,null),e(de,ha),e(de,un),e(un,ua),_(t,pr,m),_(t,ie,m),y(Tt,ie,null),e(ie,ma),e(ie,mn),e(mn,fa),_(t,hr,m),_(t,ce,m),y(yt,ce,null),e(ce,_a),e(ce,fn),e(fn,ga),_(t,ur,m),_(t,le,m),y(wt,le,null),e(le,va),e(le,_n),e(_n,ka),_(t,mr,m),_(t,pe,m),y(Pt,pe,null),e(pe,ba),e(pe,gn),e(gn,Ta),_(t,fr,m),_(t,he,m),e(he,De),e(De,vn),y(Nt,vn,null),e(he,ya),e(he,kn),e(kn,wa),_(t,_r,m),_(t,E,m),y($t,E,null),e(E,Pa),e(E,qt),e(qt,Na),e(qt,vo),e(vo,$a),e(qt,qa),e(E,za),e(E,ue),e(ue,Fa),e(ue,zt),e(zt,xa),e(ue,Ma),e(ue,bn),e(bn,Ea),e(ue,Oa),e(E,Ca),e(E,Ft),e(Ft,Sa),e(Ft,xt),e(xt,Da),e(Ft,La),e(E,ja),e(E,A),y(Mt,A,null),e(A,Aa),e(A,me),e(me,Ia),e(me,ko),e(ko,Ba),e(me,Ga),e(me,Tn),e(Tn,Wa),e(me,Ha),e(A,Ua),y(Le,A,null),e(A,Va),y(je,A,null),_(t,gr,m),_(t,fe,m),e(fe,Ae),e(Ae,yn),y(Et,yn,null),e(fe,Ra),e(fe,wn),e(wn,Ja),_(t,vr,m),_(t,x,m),y(Ot,x,null),e(x,Ya),e(x,Ct),e(Ct,Ka),e(Ct,bo),e(bo,Qa),e(Ct,Xa),e(x,Za),e(x,_e),e(_e,ed),e(_e,St),e(St,td),e(_e,od),e(_e,Pn),e(Pn,nd),e(_e,rd),e(x,sd),e(x,Dt),e(Dt,ad),e(Dt,Lt),e(Lt,dd),e(Dt,id),e(x,cd),e(x,D),e(D,ld),e(D,Nn),e(Nn,pd),e(D,hd),e(D,$n),e($n,ud),e(D,md),e(D,qn),e(qn,fd),e(D,_d),e(D,To),e(To,gd),e(D,vd),e(x,kd),e(x,I),y(jt,I,null),e(I,bd),e(I,ge),e(ge,Td),e(ge,yo),e(yo,yd),e(ge,wd),e(ge,zn),e(zn,Pd),e(ge,Nd),e(I,$d),y(Ie,I,null),e(I,qd),y(Be,I,null),_(t,kr,m),_(t,ve,m),e(ve,Ge),e(Ge,Fn),y(At,Fn,null),e(ve,zd),e(ve,xn),e(xn,Fd),_(t,br,m),_(t,M,m),y(It,M,null),e(M,xd),e(M,Bt),e(Bt,Md),e(Bt,wo),e(wo,Ed),e(Bt,Od),e(M,Cd),e(M,ke),e(ke,Sd),e(ke,Gt),e(Gt,Dd),e(ke,Ld),e(ke,Mn),e(Mn,jd),e(ke,Ad),e(M,Id),e(M,Wt),e(Wt,Bd),e(Wt,Ht),e(Ht,Gd),e(Wt,Wd),e(M,Hd),e(M,L),e(L,Ud),e(L,En),e(En,Vd),e(L,Rd),e(L,On),e(On,Jd),e(L,Yd),e(L,Cn),e(Cn,Kd),e(L,Qd),e(L,Po),e(Po,Xd),e(L,Zd),e(M,ei),e(M,B),y(Ut,B,null),e(B,ti),e(B,be),e(be,oi),e(be,No),e(No,ni),e(be,ri),e(be,Sn),e(Sn,si),e(be,ai),e(B,di),y(We,B,null),e(B,ii),y(He,B,null),_(t,Tr,m),_(t,Te,m),e(Te,Ue),e(Ue,Dn),y(Vt,Dn,null),e(Te,ci),e(Te,Ln),e(Ln,li),_(t,yr,m),_(t,O,m),y(Rt,O,null),e(O,pi),e(O,Jt),e(Jt,hi),e(Jt,$o),e($o,ui),e(Jt,mi),e(O,fi),e(O,ye),e(ye,_i),e(ye,Yt),e(Yt,gi),e(ye,vi),e(ye,jn),e(jn,ki),e(ye,bi),e(O,Ti),e(O,Kt),e(Kt,yi),e(Kt,Qt),e(Qt,wi),e(Kt,Pi),e(O,Ni),e(O,G),y(Xt,G,null),e(G,$i),e(G,we),e(we,qi),e(we,qo),e(qo,zi),e(we,Fi),e(we,An),e(An,xi),e(we,Mi),e(G,Ei),y(Ve,G,null),e(G,Oi),y(Re,G,null),_(t,wr,m),_(t,Pe,m),e(Pe,Je),e(Je,In),y(Zt,In,null),e(Pe,Ci),e(Pe,Bn),e(Bn,Si),_(t,Pr,m),_(t,C,m),y(eo,C,null),e(C,Di),e(C,to),e(to,Li),e(to,zo),e(zo,ji),e(to,Ai),e(C,Ii),e(C,Ne),e(Ne,Bi),e(Ne,oo),e(oo,Gi),e(Ne,Wi),e(Ne,Gn),e(Gn,Hi),e(Ne,Ui),e(C,Vi),e(C,no),e(no,Ri),e(no,ro),e(ro,Ji),e(no,Yi),e(C,Ki),e(C,W),y(so,W,null),e(W,Qi),e(W,$e),e($e,Xi),e($e,Fo),e(Fo,Zi),e($e,ec),e($e,Wn),e(Wn,tc),e($e,oc),e(W,nc),y(Ye,W,null),e(W,rc),y(Ke,W,null),Nr=!0},p(t,[m]){const ao={};m&2&&(ao.$$scope={dirty:m,ctx:t}),Oe.$set(ao);const Hn={};m&2&&(Hn.$$scope={dirty:m,ctx:t}),Le.$set(Hn);const Un={};m&2&&(Un.$$scope={dirty:m,ctx:t}),je.$set(Un);const Vn={};m&2&&(Vn.$$scope={dirty:m,ctx:t}),Ie.$set(Vn);const Qe={};m&2&&(Qe.$$scope={dirty:m,ctx:t}),Be.$set(Qe);const Rn={};m&2&&(Rn.$$scope={dirty:m,ctx:t}),We.$set(Rn);const Jn={};m&2&&(Jn.$$scope={dirty:m,ctx:t}),He.$set(Jn);const io={};m&2&&(io.$$scope={dirty:m,ctx:t}),Ve.$set(io);const Yn={};m&2&&(Yn.$$scope={dirty:m,ctx:t}),Re.$set(Yn);const Kn={};m&2&&(Kn.$$scope={dirty:m,ctx:t}),Ye.$set(Kn);const Qn={};m&2&&(Qn.$$scope={dirty:m,ctx:t}),Ke.$set(Qn)},i(t){Nr||(w(i.$$.fragment,t),w(st.$$.fragment,t),w(it.$$.fragment,t),w(ct.$$.fragment,t),w(pt.$$.fragment,t),w(ht.$$.fragment,t),w(mt.$$.fragment,t),w(_t.$$.fragment,t),w(gt.$$.fragment,t),w(Oe.$$.fragment,t),w(vt.$$.fragment,t),w(bt.$$.fragment,t),w(Tt.$$.fragment,t),w(yt.$$.fragment,t),w(wt.$$.fragment,t),w(Pt.$$.fragment,t),w(Nt.$$.fragment,t),w($t.$$.fragment,t),w(Mt.$$.fragment,t),w(Le.$$.fragment,t),w(je.$$.fragment,t),w(Et.$$.fragment,t),w(Ot.$$.fragment,t),w(jt.$$.fragment,t),w(Ie.$$.fragment,t),w(Be.$$.fragment,t),w(At.$$.fragment,t),w(It.$$.fragment,t),w(Ut.$$.fragment,t),w(We.$$.fragment,t),w(He.$$.fragment,t),w(Vt.$$.fragment,t),w(Rt.$$.fragment,t),w(Xt.$$.fragment,t),w(Ve.$$.fragment,t),w(Re.$$.fragment,t),w(Zt.$$.fragment,t),w(eo.$$.fragment,t),w(so.$$.fragment,t),w(Ye.$$.fragment,t),w(Ke.$$.fragment,t),Nr=!0)},o(t){P(i.$$.fragment,t),P(st.$$.fragment,t),P(it.$$.fragment,t),P(ct.$$.fragment,t),P(pt.$$.fragment,t),P(ht.$$.fragment,t),P(mt.$$.fragment,t),P(_t.$$.fragment,t),P(gt.$$.fragment,t),P(Oe.$$.fragment,t),P(vt.$$.fragment,t),P(bt.$$.fragment,t),P(Tt.$$.fragment,t),P(yt.$$.fragment,t),P(wt.$$.fragment,t),P(Pt.$$.fragment,t),P(Nt.$$.fragment,t),P($t.$$.fragment,t),P(Mt.$$.fragment,t),P(Le.$$.fragment,t),P(je.$$.fragment,t),P(Et.$$.fragment,t),P(Ot.$$.fragment,t),P(jt.$$.fragment,t),P(Ie.$$.fragment,t),P(Be.$$.fragment,t),P(At.$$.fragment,t),P(It.$$.fragment,t),P(Ut.$$.fragment,t),P(We.$$.fragment,t),P(He.$$.fragment,t),P(Vt.$$.fragment,t),P(Rt.$$.fragment,t),P(Xt.$$.fragment,t),P(Ve.$$.fragment,t),P(Re.$$.fragment,t),P(Zt.$$.fragment,t),P(eo.$$.fragment,t),P(so.$$.fragment,t),P(Ye.$$.fragment,t),P(Ke.$$.fragment,t),Nr=!1},d(t){o(h),t&&o(k),t&&o(g),N(i),t&&o(Zn),t&&o(ee),t&&o(er),t&&o(te),N(st),t&&o(tr),t&&o(ze),t&&o(or),t&&o(co),t&&o(nr),t&&o(lo),t&&o(rr),t&&o(po),t&&o(sr),t&&o(Fe),t&&o(ar),t&&o(oe),N(it),t&&o(dr),t&&o(V),N(ct),t&&o(ir),t&&o(se),N(pt),t&&o(cr),t&&o(F),N(ht),N(mt),N(_t),N(gt),N(Oe),N(vt),t&&o(lr),t&&o(de),N(bt),t&&o(pr),t&&o(ie),N(Tt),t&&o(hr),t&&o(ce),N(yt),t&&o(ur),t&&o(le),N(wt),t&&o(mr),t&&o(pe),N(Pt),t&&o(fr),t&&o(he),N(Nt),t&&o(_r),t&&o(E),N($t),N(Mt),N(Le),N(je),t&&o(gr),t&&o(fe),N(Et),t&&o(vr),t&&o(x),N(Ot),N(jt),N(Ie),N(Be),t&&o(kr),t&&o(ve),N(At),t&&o(br),t&&o(M),N(It),N(Ut),N(We),N(He),t&&o(Tr),t&&o(Te),N(Vt),t&&o(yr),t&&o(O),N(Rt),N(Xt),N(Ve),N(Re),t&&o(wr),t&&o(Pe),N(Zt),t&&o(Pr),t&&o(C),N(eo),N(so),N(Ye),N(Ke)}}}const op={local:"prophetnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.ProphetNetConfig",title:"ProphetNetConfig"},{local:"transformers.ProphetNetTokenizer",title:"ProphetNetTokenizer"},{local:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput",title:"ProphetNet specific outputs"},{local:"transformers.ProphetNetModel",title:"ProphetNetModel"},{local:"transformers.ProphetNetEncoder",title:"ProphetNetEncoder"},{local:"transformers.ProphetNetDecoder",title:"ProphetNetDecoder"},{local:"transformers.ProphetNetForConditionalGeneration",title:"ProphetNetForConditionalGeneration"},{local:"transformers.ProphetNetForCausalLM",title:"ProphetNetForCausalLM"}],title:"ProphetNet"};function np($){return Wl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class lp extends Al{constructor(h){super();Il(this,h,np,tp,Bl,{})}}export{lp as default,op as metadata};
