import{S as Sl,i as Dl,s as Ll,e as n,k as l,w as b,t as s,M as jl,c as r,d as o,m as h,a as d,x as T,h as a,b as c,F as e,g as _,y,q as w,o as P,B as N,v as Al,L as Ho}from"../../chunks/vendor-6b77c823.js";import{T as Kn}from"../../chunks/Tip-39098574.js";import{D as z}from"../../chunks/Docstring-1088f2fb.js";import{C as Vo}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Z}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Go}from"../../chunks/ExampleCodeBlock-5212b321.js";function Il($){let p,k,g,f,v;return f=new Vo({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){p=n("p"),k=s("sequence pair mask has the following format:"),g=l(),b(f.$$.fragment)},l(i){p=r(i,"P",{});var u=d(p);k=a(u,"sequence pair mask has the following format:"),u.forEach(o),g=h(i),T(f.$$.fragment,i)},m(i,u){_(i,p,u),e(p,k),_(i,g,u),y(f,i,u),v=!0},p:Ho,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){P(f.$$.fragment,i),v=!1},d(i){i&&o(p),i&&o(g),N(f,i)}}}function Wl($){let p,k,g,f,v;return{c(){p=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=r(i,"P",{});var u=d(p);k=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=d(g);f=a(q,"Module"),q.forEach(o),v=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(i,u){_(i,p,u),e(p,k),e(p,g),e(g,f),e(p,v)},d(i){i&&o(p)}}}function Bl($){let p,k,g,f,v;return f=new Vo({props:{code:`from transformers import ProphetNetTokenizer, ProphetNetModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state  <span class="hljs-comment"># main stream hidden states</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states_ngram = outputs.last_hidden_state_ngram  <span class="hljs-comment"># predict hidden states</span>`}}),{c(){p=n("p"),k=s("Example:"),g=l(),b(f.$$.fragment)},l(i){p=r(i,"P",{});var u=d(p);k=a(u,"Example:"),u.forEach(o),g=h(i),T(f.$$.fragment,i)},m(i,u){_(i,p,u),e(p,k),_(i,g,u),y(f,i,u),v=!0},p:Ho,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){P(f.$$.fragment,i),v=!1},d(i){i&&o(p),i&&o(g),N(f,i)}}}function Gl($){let p,k,g,f,v;return{c(){p=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=r(i,"P",{});var u=d(p);k=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=d(g);f=a(q,"Module"),q.forEach(o),v=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(i,u){_(i,p,u),e(p,k),e(p,g),e(g,f),e(p,v)},d(i){i&&o(p)}}}function Hl($){let p,k,g,f,v;return f=new Vo({props:{code:`from transformers import ProphetNetTokenizer, ProphetNetEncoder
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=s("Example:"),g=l(),b(f.$$.fragment)},l(i){p=r(i,"P",{});var u=d(p);k=a(u,"Example:"),u.forEach(o),g=h(i),T(f.$$.fragment,i)},m(i,u){_(i,p,u),e(p,k),_(i,g,u),y(f,i,u),v=!0},p:Ho,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){P(f.$$.fragment,i),v=!1},d(i){i&&o(p),i&&o(g),N(f,i)}}}function Vl($){let p,k,g,f,v;return{c(){p=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=r(i,"P",{});var u=d(p);k=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=d(g);f=a(q,"Module"),q.forEach(o),v=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(i,u){_(i,p,u),e(p,k),e(p,g),e(g,f),e(p,v)},d(i){i&&o(p)}}}function Ul($){let p,k,g,f,v;return f=new Vo({props:{code:`from transformers import ProphetNetTokenizer, ProphetNetDecoder
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=s("Example:"),g=l(),b(f.$$.fragment)},l(i){p=r(i,"P",{});var u=d(p);k=a(u,"Example:"),u.forEach(o),g=h(i),T(f.$$.fragment,i)},m(i,u){_(i,p,u),e(p,k),_(i,g,u),y(f,i,u),v=!0},p:Ho,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){P(f.$$.fragment,i),v=!1},d(i){i&&o(p),i&&o(g),N(f,i)}}}function Rl($){let p,k,g,f,v;return{c(){p=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=r(i,"P",{});var u=d(p);k=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=d(g);f=a(q,"Module"),q.forEach(o),v=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(i,u){_(i,p,u),e(p,k),e(p,g),e(g,f),e(p,v)},d(i){i&&o(p)}}}function Jl($){let p,k,g,f,v;return f=new Vo({props:{code:`from transformers import ProphetNetTokenizer, ProphetNetForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits_next_token = outputs.logits  <span class="hljs-comment"># logits to predict next token as usual</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_ngram_next_tokens = outputs.logits_ngram  <span class="hljs-comment"># logits to predict 2nd, 3rd, ... next tokens</span>`}}),{c(){p=n("p"),k=s("Example:"),g=l(),b(f.$$.fragment)},l(i){p=r(i,"P",{});var u=d(p);k=a(u,"Example:"),u.forEach(o),g=h(i),T(f.$$.fragment,i)},m(i,u){_(i,p,u),e(p,k),_(i,g,u),y(f,i,u),v=!0},p:Ho,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){P(f.$$.fragment,i),v=!1},d(i){i&&o(p),i&&o(g),N(f,i)}}}function Yl($){let p,k,g,f,v;return{c(){p=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=r(i,"P",{});var u=d(p);k=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=d(g);f=a(q,"Module"),q.forEach(o),v=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(i,u){_(i,p,u),e(p,k),e(p,g),e(g,f),e(p,v)},d(i){i&&o(p)}}}function Kl($){let p,k,g,f,v;return f=new Vo({props:{code:`from transformers import ProphetNetTokenizer, ProphetNetForCausalLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=labels[:, :-<span class="hljs-number">1</span>], labels=labels[:, <span class="hljs-number">1</span>:])

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){p=n("p"),k=s("Example:"),g=l(),b(f.$$.fragment)},l(i){p=r(i,"P",{});var u=d(p);k=a(u,"Example:"),u.forEach(o),g=h(i),T(f.$$.fragment,i)},m(i,u){_(i,p,u),e(p,k),_(i,g,u),y(f,i,u),v=!0},p:Ho,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){P(f.$$.fragment,i),v=!1},d(i){i&&o(p),i&&o(g),N(f,i)}}}function Ql($){let p,k,g,f,v,i,u,q,es,Qn,ee,Uo,ts,os,nt,ns,rs,Xn,te,$e,Ro,rt,ss,Jo,as,Zn,qe,ds,st,is,cs,er,io,ls,tr,co,hs,or,lo,Yo,ps,nr,ze,us,at,ms,fs,rr,oe,Fe,Ko,dt,_s,Qo,gs,sr,U,it,vs,ct,ks,ho,bs,Ts,ys,ne,ws,po,Ps,Ns,uo,$s,qs,ar,re,xe,Xo,lt,zs,Zo,Fs,dr,F,ht,xs,en,Ms,Es,pt,Cs,mo,Os,Ss,Ds,R,ut,Ls,tn,js,As,mt,fo,Is,on,Ws,Bs,_o,Gs,nn,Hs,Vs,Me,ft,Us,rn,Rs,Js,j,_t,Ys,sn,Ks,Qs,Ee,Xs,se,Zs,an,ea,ta,dn,oa,na,ra,Ce,gt,sa,vt,aa,cn,da,ia,ir,ae,Oe,ln,kt,ca,hn,la,cr,de,bt,ha,pn,pa,lr,ie,Tt,ua,un,ma,hr,ce,yt,fa,mn,_a,pr,le,wt,ga,fn,va,ur,he,Se,_n,Pt,ka,gn,ba,mr,E,Nt,Ta,$t,ya,go,wa,Pa,Na,pe,$a,qt,qa,za,vn,Fa,xa,Ma,zt,Ea,Ft,Ca,Oa,Sa,A,xt,Da,ue,La,vo,ja,Aa,kn,Ia,Wa,Ba,De,Ga,Le,fr,me,je,bn,Mt,Ha,Tn,Va,_r,x,Et,Ua,Ct,Ra,ko,Ja,Ya,Ka,fe,Qa,Ot,Xa,Za,yn,ed,td,od,St,nd,Dt,rd,sd,ad,D,dd,wn,id,cd,Pn,ld,hd,Nn,pd,ud,bo,md,fd,_d,I,Lt,gd,_e,vd,To,kd,bd,$n,Td,yd,wd,Ae,Pd,Ie,gr,ge,We,qn,jt,Nd,zn,$d,vr,M,At,qd,It,zd,yo,Fd,xd,Md,ve,Ed,Wt,Cd,Od,Fn,Sd,Dd,Ld,Bt,jd,Gt,Ad,Id,Wd,L,Bd,xn,Gd,Hd,Mn,Vd,Ud,En,Rd,Jd,wo,Yd,Kd,Qd,W,Ht,Xd,ke,Zd,Po,ei,ti,Cn,oi,ni,ri,Be,si,Ge,kr,be,He,On,Vt,ai,Sn,di,br,C,Ut,ii,Rt,ci,No,li,hi,pi,Te,ui,Jt,mi,fi,Dn,_i,gi,vi,Yt,ki,Kt,bi,Ti,yi,B,Qt,wi,ye,Pi,$o,Ni,$i,Ln,qi,zi,Fi,Ve,xi,Ue,Tr,we,Re,jn,Xt,Mi,An,Ei,yr,O,Zt,Ci,eo,Oi,qo,Si,Di,Li,Pe,ji,to,Ai,Ii,In,Wi,Bi,Gi,oo,Hi,no,Vi,Ui,Ri,G,ro,Ji,Ne,Yi,zo,Ki,Qi,Wn,Xi,Zi,ec,Je,tc,Ye,wr;return i=new Z({}),rt=new Z({}),dt=new Z({}),it=new z({props:{name:"class transformers.ProphetNetConfig",anchor:"transformers.ProphetNetConfig",parameters:[{name:"activation_dropout",val:" = 0.1"},{name:"activation_function",val:" = 'gelu'"},{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 1024"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"num_encoder_layers",val:" = 12"},{name:"num_encoder_attention_heads",val:" = 16"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"num_decoder_layers",val:" = 12"},{name:"num_decoder_attention_heads",val:" = 16"},{name:"attention_dropout",val:" = 0.1"},{name:"dropout",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"init_std",val:" = 0.02"},{name:"is_encoder_decoder",val:" = True"},{name:"add_cross_attention",val:" = True"},{name:"decoder_start_token_id",val:" = 0"},{name:"ngram",val:" = 2"},{name:"num_buckets",val:" = 32"},{name:"relative_max_distance",val:" = 128"},{name:"disable_ngram_loss",val:" = False"},{name:"eps",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ProphetNetConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.ProphetNetConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.ProphetNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the ProphetNET model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetModel">ProphetNetModel</a>.`,name:"vocab_size"},{anchor:"transformers.ProphetNetConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/prophetnet/configuration_prophetnet.py#L29"}}),lt=new Z({}),ht=new z({props:{name:"class transformers.ProphetNetTokenizer",anchor:"transformers.ProphetNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"x_sep_token",val:" = '[X_SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ProphetNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Special second separator token, which can be generated by <a href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetForConditionalGeneration">ProphetNetForConditionalGeneration</a>. It is
used to separate bullet-point like sentences in summarization, <em>e.g.</em>.`,name:"x_sep_token"},{anchor:"transformers.ProphetNetTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.ProphetNetTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.ProphetNetTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.ProphetNetTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/prophetnet/tokenization_prophetnet.py#L55"}}),ut=new z({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.ProphetNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ProphetNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.ProphetNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/prophetnet/tokenization_prophetnet.py#L266",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ft=new z({props:{name:"convert_tokens_to_string",anchor:"transformers.ProphetNetTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/prophetnet/tokenization_prophetnet.py#L186"}}),_t=new z({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.ProphetNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ProphetNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ProphetNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/prophetnet/tokenization_prophetnet.py#L218",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ee=new Go({props:{anchor:"transformers.ProphetNetTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Il]},$$scope:{ctx:$}}}),gt=new z({props:{name:"get_special_tokens_mask",anchor:"transformers.ProphetNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ProphetNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ProphetNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.ProphetNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/prophetnet/tokenization_prophetnet.py#L191",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),kt=new Z({}),bt=new z({props:{name:"class transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput",anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"logits_ngram",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_ngram_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_ngram_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
softmax, used to compute the weighted average in the self-attention heads.`,name:"encoder_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/prophetnet/modeling_prophetnet.py#L252"}}),Tt=new z({props:{name:"class transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput",anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"last_hidden_state_ngram",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_ngram_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_ngram_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>) &#x2014;
Sequence of main stream hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.`,name:"last_hidden_state"},{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput.last_hidden_state_ngram",description:`<strong>last_hidden_state_ngram</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,ngram * decoder_sequence_length, config.vocab_size)</code>) &#x2014;
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
self-attention heads.`,name:"encoder_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/prophetnet/modeling_prophetnet.py#L336"}}),yt=new z({props:{name:"class transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderModelOutput",anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"last_hidden_state_ngram",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"hidden_states_ngram",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"ngram_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>) &#x2014;
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
compute the weighted average in the`,name:"cross_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/prophetnet/modeling_prophetnet.py#L421"}}),wt=new z({props:{name:"class transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderLMOutput",anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"logits_ngram",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"hidden_states_ngram",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"ngram_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
compute the weighted average in the`,name:"cross_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/prophetnet/modeling_prophetnet.py#L481"}}),Pt=new Z({}),Nt=new z({props:{name:"class transformers.ProphetNetModel",anchor:"transformers.ProphetNetModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ProphetNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetConfig">ProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/prophetnet/modeling_prophetnet.py#L1751"}}),xt=new z({props:{name:"forward",anchor:"transformers.ProphetNetModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ProphetNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetTokenizer">ProphetNetTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ProphetNetModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ProphetNetModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetTokenizer">ProphetNetTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/prophetnet/modeling_prophetnet.py#L1783",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput"
>transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>ProphenetConfig</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>) \u2014 Sequence of main stream hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>last_hidden_state_ngram</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,ngram * decoder_sequence_length, config.vocab_size)</code>) \u2014 Sequence of predict stream hidden-states at the output of the last layer of the decoder of the model.</p>
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
  href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput"
>transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),De=new Kn({props:{$$slots:{default:[Wl]},$$scope:{ctx:$}}}),Le=new Go({props:{anchor:"transformers.ProphetNetModel.forward.example",$$slots:{default:[Bl]},$$scope:{ctx:$}}}),Mt=new Z({}),Et=new z({props:{name:"class transformers.ProphetNetEncoder",anchor:"transformers.ProphetNetEncoder",parameters:[{name:"config",val:": ProphetNetConfig"},{name:"word_embeddings",val:": Embedding = None"}],parametersDescription:[{anchor:"transformers.ProphetNetEncoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetConfig">ProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/prophetnet/modeling_prophetnet.py#L1244"}}),Lt=new z({props:{name:"forward",anchor:"transformers.ProphetNetEncoder.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ProphetNetEncoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetTokenizer">ProphetNetTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/prophetnet/modeling_prophetnet.py#L1274",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ae=new Kn({props:{$$slots:{default:[Gl]},$$scope:{ctx:$}}}),Ie=new Go({props:{anchor:"transformers.ProphetNetEncoder.forward.example",$$slots:{default:[Hl]},$$scope:{ctx:$}}}),jt=new Z({}),At=new z({props:{name:"class transformers.ProphetNetDecoder",anchor:"transformers.ProphetNetDecoder",parameters:[{name:"config",val:": ProphetNetConfig"},{name:"word_embeddings",val:": Embedding = None"}],parametersDescription:[{anchor:"transformers.ProphetNetDecoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetConfig">ProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/prophetnet/modeling_prophetnet.py#L1384"}}),Ht=new z({props:{name:"forward",anchor:"transformers.ProphetNetDecoder.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ProphetNetDecoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetTokenizer">ProphetNetTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ProphetNetDecoder.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/prophetnet/modeling_prophetnet.py#L1421",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderModelOutput"
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
  href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderModelOutput"
>transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Be=new Kn({props:{$$slots:{default:[Vl]},$$scope:{ctx:$}}}),Ge=new Go({props:{anchor:"transformers.ProphetNetDecoder.forward.example",$$slots:{default:[Ul]},$$scope:{ctx:$}}}),Vt=new Z({}),Ut=new z({props:{name:"class transformers.ProphetNetForConditionalGeneration",anchor:"transformers.ProphetNetForConditionalGeneration",parameters:[{name:"config",val:": ProphetNetConfig"}],parametersDescription:[{anchor:"transformers.ProphetNetForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetConfig">ProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/prophetnet/modeling_prophetnet.py#L1878"}}),Qt=new z({props:{name:"forward",anchor:"transformers.ProphetNetForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ProphetNetForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetTokenizer">ProphetNetTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ProphetNetForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ProphetNetForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetTokenizer">ProphetNetTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ProphetNetForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/prophetnet/modeling_prophetnet.py#L1899",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput"
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
  href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput"
>transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ve=new Kn({props:{$$slots:{default:[Rl]},$$scope:{ctx:$}}}),Ue=new Go({props:{anchor:"transformers.ProphetNetForConditionalGeneration.forward.example",$$slots:{default:[Jl]},$$scope:{ctx:$}}}),Xt=new Z({}),Zt=new z({props:{name:"class transformers.ProphetNetForCausalLM",anchor:"transformers.ProphetNetForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ProphetNetForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetConfig">ProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/prophetnet/modeling_prophetnet.py#L2087"}}),ro=new z({props:{name:"forward",anchor:"transformers.ProphetNetForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ProphetNetForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetTokenizer">ProphetNetTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ProphetNetForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/prophetnet/modeling_prophetnet.py#L2122",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderLMOutput"
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
  href="/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderLMOutput"
>transformers.models.prophetnet.modeling_prophetnet.ProphetNetDecoderLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Je=new Kn({props:{$$slots:{default:[Yl]},$$scope:{ctx:$}}}),Ye=new Go({props:{anchor:"transformers.ProphetNetForCausalLM.forward.example",$$slots:{default:[Kl]},$$scope:{ctx:$}}}),{c(){p=n("meta"),k=l(),g=n("h1"),f=n("a"),v=n("span"),b(i.$$.fragment),u=l(),q=n("span"),es=s("ProphetNet"),Qn=l(),ee=n("p"),Uo=n("strong"),ts=s("DISCLAIMER:"),os=s(" If you see something strange, file a "),nt=n("a"),ns=s("Github Issue"),rs=s(` and assign
@patrickvonplaten`),Xn=l(),te=n("h2"),$e=n("a"),Ro=n("span"),b(rt.$$.fragment),ss=l(),Jo=n("span"),as=s("Overview"),Zn=l(),qe=n("p"),ds=s("The ProphetNet model was proposed in "),st=n("a"),is=s("ProphetNet: Predicting Future N-gram for Sequence-to-Sequence Pre-training,"),cs=s(` by Yu Yan, Weizhen Qi, Yeyun Gong, Dayiheng Liu, Nan Duan, Jiusheng Chen, Ruofei
Zhang, Ming Zhou on 13 Jan, 2020.`),er=l(),io=n("p"),ls=s(`ProphetNet is an encoder-decoder model and can predict n-future tokens for \u201Cngram\u201D language modeling instead of just
the next token.`),tr=l(),co=n("p"),hs=s("The abstract from the paper is the following:"),or=l(),lo=n("p"),Yo=n("em"),ps=s(`In this paper, we present a new sequence-to-sequence pretraining model called ProphetNet, which introduces a novel
self-supervised objective named future n-gram prediction and the proposed n-stream self-attention mechanism. Instead of
the optimization of one-step ahead prediction in traditional sequence-to-sequence model, the ProphetNet is optimized by
n-step ahead prediction which predicts the next n tokens simultaneously based on previous context tokens at each time
step. The future n-gram prediction explicitly encourages the model to plan for the future tokens and prevent
overfitting on strong local correlations. We pre-train ProphetNet using a base scale dataset (16GB) and a large scale
dataset (160GB) respectively. Then we conduct experiments on CNN/DailyMail, Gigaword, and SQuAD 1.1 benchmarks for
abstractive summarization and question generation tasks. Experimental results show that ProphetNet achieves new
state-of-the-art results on all these datasets compared to the models using the same scale pretraining corpus.`),nr=l(),ze=n("p"),us=s("The Authors\u2019 code can be found "),at=n("a"),ms=s("here"),fs=s("."),rr=l(),oe=n("h2"),Fe=n("a"),Ko=n("span"),b(dt.$$.fragment),_s=l(),Qo=n("span"),gs=s("ProphetNetConfig"),sr=l(),U=n("div"),b(it.$$.fragment),vs=l(),ct=n("p"),ks=s("This is the configuration class to store the configuration of a "),ho=n("a"),bs=s("ProphetNetModel"),Ts=s(`. It is used to instantiate a
ProphetNet model according to the specified arguments, defining the model architecture.`),ys=l(),ne=n("p"),ws=s("Configuration objects inherit from "),po=n("a"),Ps=s("PretrainedConfig"),Ns=s(` and can be used to control the model outputs. Read the
documentation from `),uo=n("a"),$s=s("PretrainedConfig"),qs=s(" for more information."),ar=l(),re=n("h2"),xe=n("a"),Xo=n("span"),b(lt.$$.fragment),zs=l(),Zo=n("span"),Fs=s("ProphetNetTokenizer"),dr=l(),F=n("div"),b(ht.$$.fragment),xs=l(),en=n("p"),Ms=s("Construct a ProphetNetTokenizer. Based on WordPiece."),Es=l(),pt=n("p"),Cs=s("This tokenizer inherits from "),mo=n("a"),Os=s("PreTrainedTokenizer"),Ss=s(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ds=l(),R=n("div"),b(ut.$$.fragment),Ls=l(),tn=n("p"),js=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),As=l(),mt=n("ul"),fo=n("li"),Is=s("single sequence: "),on=n("code"),Ws=s("[CLS] X [SEP]"),Bs=l(),_o=n("li"),Gs=s("pair of sequences: "),nn=n("code"),Hs=s("[CLS] A [SEP] B [SEP]"),Vs=l(),Me=n("div"),b(ft.$$.fragment),Us=l(),rn=n("p"),Rs=s("Converts a sequence of tokens (string) in a single string."),Js=l(),j=n("div"),b(_t.$$.fragment),Ys=l(),sn=n("p"),Ks=s("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A ProphetNet"),Qs=l(),b(Ee.$$.fragment),Xs=l(),se=n("p"),Zs=s("If "),an=n("code"),ea=s("token_ids_1"),ta=s(" is "),dn=n("code"),oa=s("None"),na=s(", this method only returns the first portion of the mask (0s)."),ra=l(),Ce=n("div"),b(gt.$$.fragment),sa=l(),vt=n("p"),aa=s(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),cn=n("code"),da=s("prepare_for_model"),ia=s(" method."),ir=l(),ae=n("h2"),Oe=n("a"),ln=n("span"),b(kt.$$.fragment),ca=l(),hn=n("span"),la=s("ProphetNet specific outputs"),cr=l(),de=n("div"),b(bt.$$.fragment),ha=l(),pn=n("p"),pa=s("Base class for sequence-to-sequence language models outputs."),lr=l(),ie=n("div"),b(Tt.$$.fragment),ua=l(),un=n("p"),ma=s(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),hr=l(),ce=n("div"),b(yt.$$.fragment),fa=l(),mn=n("p"),_a=s("Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),pr=l(),le=n("div"),b(wt.$$.fragment),ga=l(),fn=n("p"),va=s("Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),ur=l(),he=n("h2"),Se=n("a"),_n=n("span"),b(Pt.$$.fragment),ka=l(),gn=n("span"),ba=s("ProphetNetModel"),mr=l(),E=n("div"),b(Nt.$$.fragment),Ta=l(),$t=n("p"),ya=s(`The bare ProphetNet Model outputting raw hidden-states without any specific head on top.
This model inherits from `),go=n("a"),wa=s("PreTrainedModel"),Pa=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Na=l(),pe=n("p"),$a=s("Original ProphetNet code can be found "),qt=n("a"),qa=s("here"),za=s(`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),vn=n("code"),Fa=s("convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),xa=s("."),Ma=l(),zt=n("p"),Ea=s("This model is a PyTorch "),Ft=n("a"),Ca=s("torch.nn.Module"),Oa=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Sa=l(),A=n("div"),b(xt.$$.fragment),Da=l(),ue=n("p"),La=s("The "),vo=n("a"),ja=s("ProphetNetModel"),Aa=s(" forward method, overrides the "),kn=n("code"),Ia=s("__call__"),Wa=s(" special method."),Ba=l(),b(De.$$.fragment),Ga=l(),b(Le.$$.fragment),fr=l(),me=n("h2"),je=n("a"),bn=n("span"),b(Mt.$$.fragment),Ha=l(),Tn=n("span"),Va=s("ProphetNetEncoder"),_r=l(),x=n("div"),b(Et.$$.fragment),Ua=l(),Ct=n("p"),Ra=s(`The standalone encoder part of the ProphetNetModel.
This model inherits from `),ko=n("a"),Ja=s("PreTrainedModel"),Ya=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ka=l(),fe=n("p"),Qa=s("Original ProphetNet code can be found "),Ot=n("a"),Xa=s("here"),Za=s(`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),yn=n("code"),ed=s("convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),td=s("."),od=l(),St=n("p"),nd=s("This model is a PyTorch "),Dt=n("a"),rd=s("torch.nn.Module"),sd=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),ad=l(),D=n("p"),dd=s("word_embeddings  ("),wn=n("code"),id=s("torch.nn.Embeddings"),cd=s(" of shape "),Pn=n("code"),ld=s("(config.vocab_size, config.hidden_size)"),hd=s(", "),Nn=n("em"),pd=s("optional"),ud=s(`):
The word embedding parameters. This can be used to initialize `),bo=n("a"),md=s("ProphetNetEncoder"),fd=s(` with pre-defined word
embeddings instead of randomly initialized word embeddings.`),_d=l(),I=n("div"),b(Lt.$$.fragment),gd=l(),_e=n("p"),vd=s("The "),To=n("a"),kd=s("ProphetNetEncoder"),bd=s(" forward method, overrides the "),$n=n("code"),Td=s("__call__"),yd=s(" special method."),wd=l(),b(Ae.$$.fragment),Pd=l(),b(Ie.$$.fragment),gr=l(),ge=n("h2"),We=n("a"),qn=n("span"),b(jt.$$.fragment),Nd=l(),zn=n("span"),$d=s("ProphetNetDecoder"),vr=l(),M=n("div"),b(At.$$.fragment),qd=l(),It=n("p"),zd=s(`The standalone decoder part of the ProphetNetModel.
This model inherits from `),yo=n("a"),Fd=s("PreTrainedModel"),xd=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Md=l(),ve=n("p"),Ed=s("Original ProphetNet code can be found "),Wt=n("a"),Cd=s("here"),Od=s(`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),Fn=n("code"),Sd=s("convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),Dd=s("."),Ld=l(),Bt=n("p"),jd=s("This model is a PyTorch "),Gt=n("a"),Ad=s("torch.nn.Module"),Id=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Wd=l(),L=n("p"),Bd=s("word_embeddings  ("),xn=n("code"),Gd=s("torch.nn.Embeddings"),Hd=s(" of shape "),Mn=n("code"),Vd=s("(config.vocab_size, config.hidden_size)"),Ud=s(", "),En=n("em"),Rd=s("optional"),Jd=s(`):
The word embedding parameters. This can be used to initialize `),wo=n("a"),Yd=s("ProphetNetEncoder"),Kd=s(` with pre-defined word
embeddings instead of randomly initialized word embeddings.`),Qd=l(),W=n("div"),b(Ht.$$.fragment),Xd=l(),ke=n("p"),Zd=s("The "),Po=n("a"),ei=s("ProphetNetDecoder"),ti=s(" forward method, overrides the "),Cn=n("code"),oi=s("__call__"),ni=s(" special method."),ri=l(),b(Be.$$.fragment),si=l(),b(Ge.$$.fragment),kr=l(),be=n("h2"),He=n("a"),On=n("span"),b(Vt.$$.fragment),ai=l(),Sn=n("span"),di=s("ProphetNetForConditionalGeneration"),br=l(),C=n("div"),b(Ut.$$.fragment),ii=l(),Rt=n("p"),ci=s(`The ProphetNet Model with a language modeling head. Can be used for sequence generation tasks.
This model inherits from `),No=n("a"),li=s("PreTrainedModel"),hi=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pi=l(),Te=n("p"),ui=s("Original ProphetNet code can be found "),Jt=n("a"),mi=s("here"),fi=s(`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),Dn=n("code"),_i=s("convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),gi=s("."),vi=l(),Yt=n("p"),ki=s("This model is a PyTorch "),Kt=n("a"),bi=s("torch.nn.Module"),Ti=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),yi=l(),B=n("div"),b(Qt.$$.fragment),wi=l(),ye=n("p"),Pi=s("The "),$o=n("a"),Ni=s("ProphetNetForConditionalGeneration"),$i=s(" forward method, overrides the "),Ln=n("code"),qi=s("__call__"),zi=s(" special method."),Fi=l(),b(Ve.$$.fragment),xi=l(),b(Ue.$$.fragment),Tr=l(),we=n("h2"),Re=n("a"),jn=n("span"),b(Xt.$$.fragment),Mi=l(),An=n("span"),Ei=s("ProphetNetForCausalLM"),yr=l(),O=n("div"),b(Zt.$$.fragment),Ci=l(),eo=n("p"),Oi=s(`The standalone decoder part of the ProphetNetModel with a lm head on top. The model can be used for causal language modeling.
This model inherits from `),qo=n("a"),Si=s("PreTrainedModel"),Di=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Li=l(),Pe=n("p"),ji=s("Original ProphetNet code can be found "),to=n("a"),Ai=s("here"),Ii=s(`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),In=n("code"),Wi=s("convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),Bi=s("."),Gi=l(),oo=n("p"),Hi=s("This model is a PyTorch "),no=n("a"),Vi=s("torch.nn.Module"),Ui=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Ri=l(),G=n("div"),b(ro.$$.fragment),Ji=l(),Ne=n("p"),Yi=s("The "),zo=n("a"),Ki=s("ProphetNetForCausalLM"),Qi=s(" forward method, overrides the "),Wn=n("code"),Xi=s("__call__"),Zi=s(" special method."),ec=l(),b(Je.$$.fragment),tc=l(),b(Ye.$$.fragment),this.h()},l(t){const m=jl('[data-svelte="svelte-1phssyn"]',document.head);p=r(m,"META",{name:!0,content:!0}),m.forEach(o),k=h(t),g=r(t,"H1",{class:!0});var so=d(g);f=r(so,"A",{id:!0,class:!0,href:!0});var Bn=d(f);v=r(Bn,"SPAN",{});var Gn=d(v);T(i.$$.fragment,Gn),Gn.forEach(o),Bn.forEach(o),u=h(so),q=r(so,"SPAN",{});var Hn=d(q);es=a(Hn,"ProphetNet"),Hn.forEach(o),so.forEach(o),Qn=h(t),ee=r(t,"P",{});var Ke=d(ee);Uo=r(Ke,"STRONG",{});var Vn=d(Uo);ts=a(Vn,"DISCLAIMER:"),Vn.forEach(o),os=a(Ke," If you see something strange, file a "),nt=r(Ke,"A",{href:!0,rel:!0});var Un=d(nt);ns=a(Un,"Github Issue"),Un.forEach(o),rs=a(Ke,` and assign
@patrickvonplaten`),Ke.forEach(o),Xn=h(t),te=r(t,"H2",{class:!0});var ao=d(te);$e=r(ao,"A",{id:!0,class:!0,href:!0});var Rn=d($e);Ro=r(Rn,"SPAN",{});var Jn=d(Ro);T(rt.$$.fragment,Jn),Jn.forEach(o),Rn.forEach(o),ss=h(ao),Jo=r(ao,"SPAN",{});var Yn=d(Jo);as=a(Yn,"Overview"),Yn.forEach(o),ao.forEach(o),Zn=h(t),qe=r(t,"P",{});var Pr=d(qe);ds=a(Pr,"The ProphetNet model was proposed in "),st=r(Pr,"A",{href:!0,rel:!0});var rc=d(st);is=a(rc,"ProphetNet: Predicting Future N-gram for Sequence-to-Sequence Pre-training,"),rc.forEach(o),cs=a(Pr,` by Yu Yan, Weizhen Qi, Yeyun Gong, Dayiheng Liu, Nan Duan, Jiusheng Chen, Ruofei
Zhang, Ming Zhou on 13 Jan, 2020.`),Pr.forEach(o),er=h(t),io=r(t,"P",{});var sc=d(io);ls=a(sc,`ProphetNet is an encoder-decoder model and can predict n-future tokens for \u201Cngram\u201D language modeling instead of just
the next token.`),sc.forEach(o),tr=h(t),co=r(t,"P",{});var ac=d(co);hs=a(ac,"The abstract from the paper is the following:"),ac.forEach(o),or=h(t),lo=r(t,"P",{});var dc=d(lo);Yo=r(dc,"EM",{});var ic=d(Yo);ps=a(ic,`In this paper, we present a new sequence-to-sequence pretraining model called ProphetNet, which introduces a novel
self-supervised objective named future n-gram prediction and the proposed n-stream self-attention mechanism. Instead of
the optimization of one-step ahead prediction in traditional sequence-to-sequence model, the ProphetNet is optimized by
n-step ahead prediction which predicts the next n tokens simultaneously based on previous context tokens at each time
step. The future n-gram prediction explicitly encourages the model to plan for the future tokens and prevent
overfitting on strong local correlations. We pre-train ProphetNet using a base scale dataset (16GB) and a large scale
dataset (160GB) respectively. Then we conduct experiments on CNN/DailyMail, Gigaword, and SQuAD 1.1 benchmarks for
abstractive summarization and question generation tasks. Experimental results show that ProphetNet achieves new
state-of-the-art results on all these datasets compared to the models using the same scale pretraining corpus.`),ic.forEach(o),dc.forEach(o),nr=h(t),ze=r(t,"P",{});var Nr=d(ze);us=a(Nr,"The Authors\u2019 code can be found "),at=r(Nr,"A",{href:!0,rel:!0});var cc=d(at);ms=a(cc,"here"),cc.forEach(o),fs=a(Nr,"."),Nr.forEach(o),rr=h(t),oe=r(t,"H2",{class:!0});var $r=d(oe);Fe=r($r,"A",{id:!0,class:!0,href:!0});var lc=d(Fe);Ko=r(lc,"SPAN",{});var hc=d(Ko);T(dt.$$.fragment,hc),hc.forEach(o),lc.forEach(o),_s=h($r),Qo=r($r,"SPAN",{});var pc=d(Qo);gs=a(pc,"ProphetNetConfig"),pc.forEach(o),$r.forEach(o),sr=h(t),U=r(t,"DIV",{class:!0});var Fo=d(U);T(it.$$.fragment,Fo),vs=h(Fo),ct=r(Fo,"P",{});var qr=d(ct);ks=a(qr,"This is the configuration class to store the configuration of a "),ho=r(qr,"A",{href:!0});var uc=d(ho);bs=a(uc,"ProphetNetModel"),uc.forEach(o),Ts=a(qr,`. It is used to instantiate a
ProphetNet model according to the specified arguments, defining the model architecture.`),qr.forEach(o),ys=h(Fo),ne=r(Fo,"P",{});var xo=d(ne);ws=a(xo,"Configuration objects inherit from "),po=r(xo,"A",{href:!0});var mc=d(po);Ps=a(mc,"PretrainedConfig"),mc.forEach(o),Ns=a(xo,` and can be used to control the model outputs. Read the
documentation from `),uo=r(xo,"A",{href:!0});var fc=d(uo);$s=a(fc,"PretrainedConfig"),fc.forEach(o),qs=a(xo," for more information."),xo.forEach(o),Fo.forEach(o),ar=h(t),re=r(t,"H2",{class:!0});var zr=d(re);xe=r(zr,"A",{id:!0,class:!0,href:!0});var _c=d(xe);Xo=r(_c,"SPAN",{});var gc=d(Xo);T(lt.$$.fragment,gc),gc.forEach(o),_c.forEach(o),zs=h(zr),Zo=r(zr,"SPAN",{});var vc=d(Zo);Fs=a(vc,"ProphetNetTokenizer"),vc.forEach(o),zr.forEach(o),dr=h(t),F=r(t,"DIV",{class:!0});var S=d(F);T(ht.$$.fragment,S),xs=h(S),en=r(S,"P",{});var kc=d(en);Ms=a(kc,"Construct a ProphetNetTokenizer. Based on WordPiece."),kc.forEach(o),Es=h(S),pt=r(S,"P",{});var Fr=d(pt);Cs=a(Fr,"This tokenizer inherits from "),mo=r(Fr,"A",{href:!0});var bc=d(mo);Os=a(bc,"PreTrainedTokenizer"),bc.forEach(o),Ss=a(Fr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Fr.forEach(o),Ds=h(S),R=r(S,"DIV",{class:!0});var Mo=d(R);T(ut.$$.fragment,Mo),Ls=h(Mo),tn=r(Mo,"P",{});var Tc=d(tn);js=a(Tc,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Tc.forEach(o),As=h(Mo),mt=r(Mo,"UL",{});var xr=d(mt);fo=r(xr,"LI",{});var oc=d(fo);Is=a(oc,"single sequence: "),on=r(oc,"CODE",{});var yc=d(on);Ws=a(yc,"[CLS] X [SEP]"),yc.forEach(o),oc.forEach(o),Bs=h(xr),_o=r(xr,"LI",{});var nc=d(_o);Gs=a(nc,"pair of sequences: "),nn=r(nc,"CODE",{});var wc=d(nn);Hs=a(wc,"[CLS] A [SEP] B [SEP]"),wc.forEach(o),nc.forEach(o),xr.forEach(o),Mo.forEach(o),Vs=h(S),Me=r(S,"DIV",{class:!0});var Mr=d(Me);T(ft.$$.fragment,Mr),Us=h(Mr),rn=r(Mr,"P",{});var Pc=d(rn);Rs=a(Pc,"Converts a sequence of tokens (string) in a single string."),Pc.forEach(o),Mr.forEach(o),Js=h(S),j=r(S,"DIV",{class:!0});var Qe=d(j);T(_t.$$.fragment,Qe),Ys=h(Qe),sn=r(Qe,"P",{});var Nc=d(sn);Ks=a(Nc,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A ProphetNet"),Nc.forEach(o),Qs=h(Qe),T(Ee.$$.fragment,Qe),Xs=h(Qe),se=r(Qe,"P",{});var Eo=d(se);Zs=a(Eo,"If "),an=r(Eo,"CODE",{});var $c=d(an);ea=a($c,"token_ids_1"),$c.forEach(o),ta=a(Eo," is "),dn=r(Eo,"CODE",{});var qc=d(dn);oa=a(qc,"None"),qc.forEach(o),na=a(Eo,", this method only returns the first portion of the mask (0s)."),Eo.forEach(o),Qe.forEach(o),ra=h(S),Ce=r(S,"DIV",{class:!0});var Er=d(Ce);T(gt.$$.fragment,Er),sa=h(Er),vt=r(Er,"P",{});var Cr=d(vt);aa=a(Cr,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),cn=r(Cr,"CODE",{});var zc=d(cn);da=a(zc,"prepare_for_model"),zc.forEach(o),ia=a(Cr," method."),Cr.forEach(o),Er.forEach(o),S.forEach(o),ir=h(t),ae=r(t,"H2",{class:!0});var Or=d(ae);Oe=r(Or,"A",{id:!0,class:!0,href:!0});var Fc=d(Oe);ln=r(Fc,"SPAN",{});var xc=d(ln);T(kt.$$.fragment,xc),xc.forEach(o),Fc.forEach(o),ca=h(Or),hn=r(Or,"SPAN",{});var Mc=d(hn);la=a(Mc,"ProphetNet specific outputs"),Mc.forEach(o),Or.forEach(o),cr=h(t),de=r(t,"DIV",{class:!0});var Sr=d(de);T(bt.$$.fragment,Sr),ha=h(Sr),pn=r(Sr,"P",{});var Ec=d(pn);pa=a(Ec,"Base class for sequence-to-sequence language models outputs."),Ec.forEach(o),Sr.forEach(o),lr=h(t),ie=r(t,"DIV",{class:!0});var Dr=d(ie);T(Tt.$$.fragment,Dr),ua=h(Dr),un=r(Dr,"P",{});var Cc=d(un);ma=a(Cc,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Cc.forEach(o),Dr.forEach(o),hr=h(t),ce=r(t,"DIV",{class:!0});var Lr=d(ce);T(yt.$$.fragment,Lr),fa=h(Lr),mn=r(Lr,"P",{});var Oc=d(mn);_a=a(Oc,"Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),Oc.forEach(o),Lr.forEach(o),pr=h(t),le=r(t,"DIV",{class:!0});var jr=d(le);T(wt.$$.fragment,jr),ga=h(jr),fn=r(jr,"P",{});var Sc=d(fn);va=a(Sc,"Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),Sc.forEach(o),jr.forEach(o),ur=h(t),he=r(t,"H2",{class:!0});var Ar=d(he);Se=r(Ar,"A",{id:!0,class:!0,href:!0});var Dc=d(Se);_n=r(Dc,"SPAN",{});var Lc=d(_n);T(Pt.$$.fragment,Lc),Lc.forEach(o),Dc.forEach(o),ka=h(Ar),gn=r(Ar,"SPAN",{});var jc=d(gn);ba=a(jc,"ProphetNetModel"),jc.forEach(o),Ar.forEach(o),mr=h(t),E=r(t,"DIV",{class:!0});var J=d(E);T(Nt.$$.fragment,J),Ta=h(J),$t=r(J,"P",{});var Ir=d($t);ya=a(Ir,`The bare ProphetNet Model outputting raw hidden-states without any specific head on top.
This model inherits from `),go=r(Ir,"A",{href:!0});var Ac=d(go);wa=a(Ac,"PreTrainedModel"),Ac.forEach(o),Pa=a(Ir,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ir.forEach(o),Na=h(J),pe=r(J,"P",{});var Co=d(pe);$a=a(Co,"Original ProphetNet code can be found "),qt=r(Co,"A",{href:!0,rel:!0});var Ic=d(qt);qa=a(Ic,"here"),Ic.forEach(o),za=a(Co,`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),vn=r(Co,"CODE",{});var Wc=d(vn);Fa=a(Wc,"convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),Wc.forEach(o),xa=a(Co,"."),Co.forEach(o),Ma=h(J),zt=r(J,"P",{});var Wr=d(zt);Ea=a(Wr,"This model is a PyTorch "),Ft=r(Wr,"A",{href:!0,rel:!0});var Bc=d(Ft);Ca=a(Bc,"torch.nn.Module"),Bc.forEach(o),Oa=a(Wr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Wr.forEach(o),Sa=h(J),A=r(J,"DIV",{class:!0});var Xe=d(A);T(xt.$$.fragment,Xe),Da=h(Xe),ue=r(Xe,"P",{});var Oo=d(ue);La=a(Oo,"The "),vo=r(Oo,"A",{href:!0});var Gc=d(vo);ja=a(Gc,"ProphetNetModel"),Gc.forEach(o),Aa=a(Oo," forward method, overrides the "),kn=r(Oo,"CODE",{});var Hc=d(kn);Ia=a(Hc,"__call__"),Hc.forEach(o),Wa=a(Oo," special method."),Oo.forEach(o),Ba=h(Xe),T(De.$$.fragment,Xe),Ga=h(Xe),T(Le.$$.fragment,Xe),Xe.forEach(o),J.forEach(o),fr=h(t),me=r(t,"H2",{class:!0});var Br=d(me);je=r(Br,"A",{id:!0,class:!0,href:!0});var Vc=d(je);bn=r(Vc,"SPAN",{});var Uc=d(bn);T(Mt.$$.fragment,Uc),Uc.forEach(o),Vc.forEach(o),Ha=h(Br),Tn=r(Br,"SPAN",{});var Rc=d(Tn);Va=a(Rc,"ProphetNetEncoder"),Rc.forEach(o),Br.forEach(o),_r=h(t),x=r(t,"DIV",{class:!0});var H=d(x);T(Et.$$.fragment,H),Ua=h(H),Ct=r(H,"P",{});var Gr=d(Ct);Ra=a(Gr,`The standalone encoder part of the ProphetNetModel.
This model inherits from `),ko=r(Gr,"A",{href:!0});var Jc=d(ko);Ja=a(Jc,"PreTrainedModel"),Jc.forEach(o),Ya=a(Gr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gr.forEach(o),Ka=h(H),fe=r(H,"P",{});var So=d(fe);Qa=a(So,"Original ProphetNet code can be found "),Ot=r(So,"A",{href:!0,rel:!0});var Yc=d(Ot);Xa=a(Yc,"here"),Yc.forEach(o),Za=a(So,`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),yn=r(So,"CODE",{});var Kc=d(yn);ed=a(Kc,"convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),Kc.forEach(o),td=a(So,"."),So.forEach(o),od=h(H),St=r(H,"P",{});var Hr=d(St);nd=a(Hr,"This model is a PyTorch "),Dt=r(Hr,"A",{href:!0,rel:!0});var Qc=d(Dt);rd=a(Qc,"torch.nn.Module"),Qc.forEach(o),sd=a(Hr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Hr.forEach(o),ad=h(H),D=r(H,"P",{});var Y=d(D);dd=a(Y,"word_embeddings  ("),wn=r(Y,"CODE",{});var Xc=d(wn);id=a(Xc,"torch.nn.Embeddings"),Xc.forEach(o),cd=a(Y," of shape "),Pn=r(Y,"CODE",{});var Zc=d(Pn);ld=a(Zc,"(config.vocab_size, config.hidden_size)"),Zc.forEach(o),hd=a(Y,", "),Nn=r(Y,"EM",{});var el=d(Nn);pd=a(el,"optional"),el.forEach(o),ud=a(Y,`):
The word embedding parameters. This can be used to initialize `),bo=r(Y,"A",{href:!0});var tl=d(bo);md=a(tl,"ProphetNetEncoder"),tl.forEach(o),fd=a(Y,` with pre-defined word
embeddings instead of randomly initialized word embeddings.`),Y.forEach(o),_d=h(H),I=r(H,"DIV",{class:!0});var Ze=d(I);T(Lt.$$.fragment,Ze),gd=h(Ze),_e=r(Ze,"P",{});var Do=d(_e);vd=a(Do,"The "),To=r(Do,"A",{href:!0});var ol=d(To);kd=a(ol,"ProphetNetEncoder"),ol.forEach(o),bd=a(Do," forward method, overrides the "),$n=r(Do,"CODE",{});var nl=d($n);Td=a(nl,"__call__"),nl.forEach(o),yd=a(Do," special method."),Do.forEach(o),wd=h(Ze),T(Ae.$$.fragment,Ze),Pd=h(Ze),T(Ie.$$.fragment,Ze),Ze.forEach(o),H.forEach(o),gr=h(t),ge=r(t,"H2",{class:!0});var Vr=d(ge);We=r(Vr,"A",{id:!0,class:!0,href:!0});var rl=d(We);qn=r(rl,"SPAN",{});var sl=d(qn);T(jt.$$.fragment,sl),sl.forEach(o),rl.forEach(o),Nd=h(Vr),zn=r(Vr,"SPAN",{});var al=d(zn);$d=a(al,"ProphetNetDecoder"),al.forEach(o),Vr.forEach(o),vr=h(t),M=r(t,"DIV",{class:!0});var V=d(M);T(At.$$.fragment,V),qd=h(V),It=r(V,"P",{});var Ur=d(It);zd=a(Ur,`The standalone decoder part of the ProphetNetModel.
This model inherits from `),yo=r(Ur,"A",{href:!0});var dl=d(yo);Fd=a(dl,"PreTrainedModel"),dl.forEach(o),xd=a(Ur,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ur.forEach(o),Md=h(V),ve=r(V,"P",{});var Lo=d(ve);Ed=a(Lo,"Original ProphetNet code can be found "),Wt=r(Lo,"A",{href:!0,rel:!0});var il=d(Wt);Cd=a(il,"here"),il.forEach(o),Od=a(Lo,`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),Fn=r(Lo,"CODE",{});var cl=d(Fn);Sd=a(cl,"convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),cl.forEach(o),Dd=a(Lo,"."),Lo.forEach(o),Ld=h(V),Bt=r(V,"P",{});var Rr=d(Bt);jd=a(Rr,"This model is a PyTorch "),Gt=r(Rr,"A",{href:!0,rel:!0});var ll=d(Gt);Ad=a(ll,"torch.nn.Module"),ll.forEach(o),Id=a(Rr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Rr.forEach(o),Wd=h(V),L=r(V,"P",{});var K=d(L);Bd=a(K,"word_embeddings  ("),xn=r(K,"CODE",{});var hl=d(xn);Gd=a(hl,"torch.nn.Embeddings"),hl.forEach(o),Hd=a(K," of shape "),Mn=r(K,"CODE",{});var pl=d(Mn);Vd=a(pl,"(config.vocab_size, config.hidden_size)"),pl.forEach(o),Ud=a(K,", "),En=r(K,"EM",{});var ul=d(En);Rd=a(ul,"optional"),ul.forEach(o),Jd=a(K,`):
The word embedding parameters. This can be used to initialize `),wo=r(K,"A",{href:!0});var ml=d(wo);Yd=a(ml,"ProphetNetEncoder"),ml.forEach(o),Kd=a(K,` with pre-defined word
embeddings instead of randomly initialized word embeddings.`),K.forEach(o),Qd=h(V),W=r(V,"DIV",{class:!0});var et=d(W);T(Ht.$$.fragment,et),Xd=h(et),ke=r(et,"P",{});var jo=d(ke);Zd=a(jo,"The "),Po=r(jo,"A",{href:!0});var fl=d(Po);ei=a(fl,"ProphetNetDecoder"),fl.forEach(o),ti=a(jo," forward method, overrides the "),Cn=r(jo,"CODE",{});var _l=d(Cn);oi=a(_l,"__call__"),_l.forEach(o),ni=a(jo," special method."),jo.forEach(o),ri=h(et),T(Be.$$.fragment,et),si=h(et),T(Ge.$$.fragment,et),et.forEach(o),V.forEach(o),kr=h(t),be=r(t,"H2",{class:!0});var Jr=d(be);He=r(Jr,"A",{id:!0,class:!0,href:!0});var gl=d(He);On=r(gl,"SPAN",{});var vl=d(On);T(Vt.$$.fragment,vl),vl.forEach(o),gl.forEach(o),ai=h(Jr),Sn=r(Jr,"SPAN",{});var kl=d(Sn);di=a(kl,"ProphetNetForConditionalGeneration"),kl.forEach(o),Jr.forEach(o),br=h(t),C=r(t,"DIV",{class:!0});var Q=d(C);T(Ut.$$.fragment,Q),ii=h(Q),Rt=r(Q,"P",{});var Yr=d(Rt);ci=a(Yr,`The ProphetNet Model with a language modeling head. Can be used for sequence generation tasks.
This model inherits from `),No=r(Yr,"A",{href:!0});var bl=d(No);li=a(bl,"PreTrainedModel"),bl.forEach(o),hi=a(Yr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yr.forEach(o),pi=h(Q),Te=r(Q,"P",{});var Ao=d(Te);ui=a(Ao,"Original ProphetNet code can be found "),Jt=r(Ao,"A",{href:!0,rel:!0});var Tl=d(Jt);mi=a(Tl,"here"),Tl.forEach(o),fi=a(Ao,`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),Dn=r(Ao,"CODE",{});var yl=d(Dn);_i=a(yl,"convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),yl.forEach(o),gi=a(Ao,"."),Ao.forEach(o),vi=h(Q),Yt=r(Q,"P",{});var Kr=d(Yt);ki=a(Kr,"This model is a PyTorch "),Kt=r(Kr,"A",{href:!0,rel:!0});var wl=d(Kt);bi=a(wl,"torch.nn.Module"),wl.forEach(o),Ti=a(Kr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Kr.forEach(o),yi=h(Q),B=r(Q,"DIV",{class:!0});var tt=d(B);T(Qt.$$.fragment,tt),wi=h(tt),ye=r(tt,"P",{});var Io=d(ye);Pi=a(Io,"The "),$o=r(Io,"A",{href:!0});var Pl=d($o);Ni=a(Pl,"ProphetNetForConditionalGeneration"),Pl.forEach(o),$i=a(Io," forward method, overrides the "),Ln=r(Io,"CODE",{});var Nl=d(Ln);qi=a(Nl,"__call__"),Nl.forEach(o),zi=a(Io," special method."),Io.forEach(o),Fi=h(tt),T(Ve.$$.fragment,tt),xi=h(tt),T(Ue.$$.fragment,tt),tt.forEach(o),Q.forEach(o),Tr=h(t),we=r(t,"H2",{class:!0});var Qr=d(we);Re=r(Qr,"A",{id:!0,class:!0,href:!0});var $l=d(Re);jn=r($l,"SPAN",{});var ql=d(jn);T(Xt.$$.fragment,ql),ql.forEach(o),$l.forEach(o),Mi=h(Qr),An=r(Qr,"SPAN",{});var zl=d(An);Ei=a(zl,"ProphetNetForCausalLM"),zl.forEach(o),Qr.forEach(o),yr=h(t),O=r(t,"DIV",{class:!0});var X=d(O);T(Zt.$$.fragment,X),Ci=h(X),eo=r(X,"P",{});var Xr=d(eo);Oi=a(Xr,`The standalone decoder part of the ProphetNetModel with a lm head on top. The model can be used for causal language modeling.
This model inherits from `),qo=r(Xr,"A",{href:!0});var Fl=d(qo);Si=a(Fl,"PreTrainedModel"),Fl.forEach(o),Di=a(Xr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xr.forEach(o),Li=h(X),Pe=r(X,"P",{});var Wo=d(Pe);ji=a(Wo,"Original ProphetNet code can be found "),to=r(Wo,"A",{href:!0,rel:!0});var xl=d(to);Ai=a(xl,"here"),xl.forEach(o),Ii=a(Wo,`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),In=r(Wo,"CODE",{});var Ml=d(In);Wi=a(Ml,"convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),Ml.forEach(o),Bi=a(Wo,"."),Wo.forEach(o),Gi=h(X),oo=r(X,"P",{});var Zr=d(oo);Hi=a(Zr,"This model is a PyTorch "),no=r(Zr,"A",{href:!0,rel:!0});var El=d(no);Vi=a(El,"torch.nn.Module"),El.forEach(o),Ui=a(Zr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Zr.forEach(o),Ri=h(X),G=r(X,"DIV",{class:!0});var ot=d(G);T(ro.$$.fragment,ot),Ji=h(ot),Ne=r(ot,"P",{});var Bo=d(Ne);Yi=a(Bo,"The "),zo=r(Bo,"A",{href:!0});var Cl=d(zo);Ki=a(Cl,"ProphetNetForCausalLM"),Cl.forEach(o),Qi=a(Bo," forward method, overrides the "),Wn=r(Bo,"CODE",{});var Ol=d(Wn);Xi=a(Ol,"__call__"),Ol.forEach(o),Zi=a(Bo," special method."),Bo.forEach(o),ec=h(ot),T(Je.$$.fragment,ot),tc=h(ot),T(Ye.$$.fragment,ot),ot.forEach(o),X.forEach(o),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(Xl)),c(f,"id","prophetnet"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#prophetnet"),c(g,"class","relative group"),c(nt,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(nt,"rel","nofollow"),c($e,"id","overview"),c($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($e,"href","#overview"),c(te,"class","relative group"),c(st,"href","https://arxiv.org/abs/2001.04063"),c(st,"rel","nofollow"),c(at,"href","https://github.com/microsoft/ProphetNet"),c(at,"rel","nofollow"),c(Fe,"id","transformers.ProphetNetConfig"),c(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fe,"href","#transformers.ProphetNetConfig"),c(oe,"class","relative group"),c(ho,"href","/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetModel"),c(po,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(uo,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xe,"id","transformers.ProphetNetTokenizer"),c(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xe,"href","#transformers.ProphetNetTokenizer"),c(re,"class","relative group"),c(mo,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Oe,"id","transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput"),c(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oe,"href","#transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput"),c(ae,"class","relative group"),c(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Se,"id","transformers.ProphetNetModel"),c(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Se,"href","#transformers.ProphetNetModel"),c(he,"class","relative group"),c(go,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),c(qt,"href","https://github.com/microsoft/ProphetNet"),c(qt,"rel","nofollow"),c(Ft,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ft,"rel","nofollow"),c(vo,"href","/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetModel"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(je,"id","transformers.ProphetNetEncoder"),c(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(je,"href","#transformers.ProphetNetEncoder"),c(me,"class","relative group"),c(ko,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),c(Ot,"href","https://github.com/microsoft/ProphetNet"),c(Ot,"rel","nofollow"),c(Dt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Dt,"rel","nofollow"),c(bo,"href","/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetEncoder"),c(To,"href","/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetEncoder"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(We,"id","transformers.ProphetNetDecoder"),c(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(We,"href","#transformers.ProphetNetDecoder"),c(ge,"class","relative group"),c(yo,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),c(Wt,"href","https://github.com/microsoft/ProphetNet"),c(Wt,"rel","nofollow"),c(Gt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Gt,"rel","nofollow"),c(wo,"href","/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetEncoder"),c(Po,"href","/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetDecoder"),c(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(He,"id","transformers.ProphetNetForConditionalGeneration"),c(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(He,"href","#transformers.ProphetNetForConditionalGeneration"),c(be,"class","relative group"),c(No,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),c(Jt,"href","https://github.com/microsoft/ProphetNet"),c(Jt,"rel","nofollow"),c(Kt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Kt,"rel","nofollow"),c($o,"href","/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetForConditionalGeneration"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Re,"id","transformers.ProphetNetForCausalLM"),c(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Re,"href","#transformers.ProphetNetForCausalLM"),c(we,"class","relative group"),c(qo,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),c(to,"href","https://github.com/microsoft/ProphetNet"),c(to,"rel","nofollow"),c(no,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(no,"rel","nofollow"),c(zo,"href","/docs/transformers/v4.18.0/en/model_doc/prophetnet#transformers.ProphetNetForCausalLM"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,m){e(document.head,p),_(t,k,m),_(t,g,m),e(g,f),e(f,v),y(i,v,null),e(g,u),e(g,q),e(q,es),_(t,Qn,m),_(t,ee,m),e(ee,Uo),e(Uo,ts),e(ee,os),e(ee,nt),e(nt,ns),e(ee,rs),_(t,Xn,m),_(t,te,m),e(te,$e),e($e,Ro),y(rt,Ro,null),e(te,ss),e(te,Jo),e(Jo,as),_(t,Zn,m),_(t,qe,m),e(qe,ds),e(qe,st),e(st,is),e(qe,cs),_(t,er,m),_(t,io,m),e(io,ls),_(t,tr,m),_(t,co,m),e(co,hs),_(t,or,m),_(t,lo,m),e(lo,Yo),e(Yo,ps),_(t,nr,m),_(t,ze,m),e(ze,us),e(ze,at),e(at,ms),e(ze,fs),_(t,rr,m),_(t,oe,m),e(oe,Fe),e(Fe,Ko),y(dt,Ko,null),e(oe,_s),e(oe,Qo),e(Qo,gs),_(t,sr,m),_(t,U,m),y(it,U,null),e(U,vs),e(U,ct),e(ct,ks),e(ct,ho),e(ho,bs),e(ct,Ts),e(U,ys),e(U,ne),e(ne,ws),e(ne,po),e(po,Ps),e(ne,Ns),e(ne,uo),e(uo,$s),e(ne,qs),_(t,ar,m),_(t,re,m),e(re,xe),e(xe,Xo),y(lt,Xo,null),e(re,zs),e(re,Zo),e(Zo,Fs),_(t,dr,m),_(t,F,m),y(ht,F,null),e(F,xs),e(F,en),e(en,Ms),e(F,Es),e(F,pt),e(pt,Cs),e(pt,mo),e(mo,Os),e(pt,Ss),e(F,Ds),e(F,R),y(ut,R,null),e(R,Ls),e(R,tn),e(tn,js),e(R,As),e(R,mt),e(mt,fo),e(fo,Is),e(fo,on),e(on,Ws),e(mt,Bs),e(mt,_o),e(_o,Gs),e(_o,nn),e(nn,Hs),e(F,Vs),e(F,Me),y(ft,Me,null),e(Me,Us),e(Me,rn),e(rn,Rs),e(F,Js),e(F,j),y(_t,j,null),e(j,Ys),e(j,sn),e(sn,Ks),e(j,Qs),y(Ee,j,null),e(j,Xs),e(j,se),e(se,Zs),e(se,an),e(an,ea),e(se,ta),e(se,dn),e(dn,oa),e(se,na),e(F,ra),e(F,Ce),y(gt,Ce,null),e(Ce,sa),e(Ce,vt),e(vt,aa),e(vt,cn),e(cn,da),e(vt,ia),_(t,ir,m),_(t,ae,m),e(ae,Oe),e(Oe,ln),y(kt,ln,null),e(ae,ca),e(ae,hn),e(hn,la),_(t,cr,m),_(t,de,m),y(bt,de,null),e(de,ha),e(de,pn),e(pn,pa),_(t,lr,m),_(t,ie,m),y(Tt,ie,null),e(ie,ua),e(ie,un),e(un,ma),_(t,hr,m),_(t,ce,m),y(yt,ce,null),e(ce,fa),e(ce,mn),e(mn,_a),_(t,pr,m),_(t,le,m),y(wt,le,null),e(le,ga),e(le,fn),e(fn,va),_(t,ur,m),_(t,he,m),e(he,Se),e(Se,_n),y(Pt,_n,null),e(he,ka),e(he,gn),e(gn,ba),_(t,mr,m),_(t,E,m),y(Nt,E,null),e(E,Ta),e(E,$t),e($t,ya),e($t,go),e(go,wa),e($t,Pa),e(E,Na),e(E,pe),e(pe,$a),e(pe,qt),e(qt,qa),e(pe,za),e(pe,vn),e(vn,Fa),e(pe,xa),e(E,Ma),e(E,zt),e(zt,Ea),e(zt,Ft),e(Ft,Ca),e(zt,Oa),e(E,Sa),e(E,A),y(xt,A,null),e(A,Da),e(A,ue),e(ue,La),e(ue,vo),e(vo,ja),e(ue,Aa),e(ue,kn),e(kn,Ia),e(ue,Wa),e(A,Ba),y(De,A,null),e(A,Ga),y(Le,A,null),_(t,fr,m),_(t,me,m),e(me,je),e(je,bn),y(Mt,bn,null),e(me,Ha),e(me,Tn),e(Tn,Va),_(t,_r,m),_(t,x,m),y(Et,x,null),e(x,Ua),e(x,Ct),e(Ct,Ra),e(Ct,ko),e(ko,Ja),e(Ct,Ya),e(x,Ka),e(x,fe),e(fe,Qa),e(fe,Ot),e(Ot,Xa),e(fe,Za),e(fe,yn),e(yn,ed),e(fe,td),e(x,od),e(x,St),e(St,nd),e(St,Dt),e(Dt,rd),e(St,sd),e(x,ad),e(x,D),e(D,dd),e(D,wn),e(wn,id),e(D,cd),e(D,Pn),e(Pn,ld),e(D,hd),e(D,Nn),e(Nn,pd),e(D,ud),e(D,bo),e(bo,md),e(D,fd),e(x,_d),e(x,I),y(Lt,I,null),e(I,gd),e(I,_e),e(_e,vd),e(_e,To),e(To,kd),e(_e,bd),e(_e,$n),e($n,Td),e(_e,yd),e(I,wd),y(Ae,I,null),e(I,Pd),y(Ie,I,null),_(t,gr,m),_(t,ge,m),e(ge,We),e(We,qn),y(jt,qn,null),e(ge,Nd),e(ge,zn),e(zn,$d),_(t,vr,m),_(t,M,m),y(At,M,null),e(M,qd),e(M,It),e(It,zd),e(It,yo),e(yo,Fd),e(It,xd),e(M,Md),e(M,ve),e(ve,Ed),e(ve,Wt),e(Wt,Cd),e(ve,Od),e(ve,Fn),e(Fn,Sd),e(ve,Dd),e(M,Ld),e(M,Bt),e(Bt,jd),e(Bt,Gt),e(Gt,Ad),e(Bt,Id),e(M,Wd),e(M,L),e(L,Bd),e(L,xn),e(xn,Gd),e(L,Hd),e(L,Mn),e(Mn,Vd),e(L,Ud),e(L,En),e(En,Rd),e(L,Jd),e(L,wo),e(wo,Yd),e(L,Kd),e(M,Qd),e(M,W),y(Ht,W,null),e(W,Xd),e(W,ke),e(ke,Zd),e(ke,Po),e(Po,ei),e(ke,ti),e(ke,Cn),e(Cn,oi),e(ke,ni),e(W,ri),y(Be,W,null),e(W,si),y(Ge,W,null),_(t,kr,m),_(t,be,m),e(be,He),e(He,On),y(Vt,On,null),e(be,ai),e(be,Sn),e(Sn,di),_(t,br,m),_(t,C,m),y(Ut,C,null),e(C,ii),e(C,Rt),e(Rt,ci),e(Rt,No),e(No,li),e(Rt,hi),e(C,pi),e(C,Te),e(Te,ui),e(Te,Jt),e(Jt,mi),e(Te,fi),e(Te,Dn),e(Dn,_i),e(Te,gi),e(C,vi),e(C,Yt),e(Yt,ki),e(Yt,Kt),e(Kt,bi),e(Yt,Ti),e(C,yi),e(C,B),y(Qt,B,null),e(B,wi),e(B,ye),e(ye,Pi),e(ye,$o),e($o,Ni),e(ye,$i),e(ye,Ln),e(Ln,qi),e(ye,zi),e(B,Fi),y(Ve,B,null),e(B,xi),y(Ue,B,null),_(t,Tr,m),_(t,we,m),e(we,Re),e(Re,jn),y(Xt,jn,null),e(we,Mi),e(we,An),e(An,Ei),_(t,yr,m),_(t,O,m),y(Zt,O,null),e(O,Ci),e(O,eo),e(eo,Oi),e(eo,qo),e(qo,Si),e(eo,Di),e(O,Li),e(O,Pe),e(Pe,ji),e(Pe,to),e(to,Ai),e(Pe,Ii),e(Pe,In),e(In,Wi),e(Pe,Bi),e(O,Gi),e(O,oo),e(oo,Hi),e(oo,no),e(no,Vi),e(oo,Ui),e(O,Ri),e(O,G),y(ro,G,null),e(G,Ji),e(G,Ne),e(Ne,Yi),e(Ne,zo),e(zo,Ki),e(Ne,Qi),e(Ne,Wn),e(Wn,Xi),e(Ne,Zi),e(G,ec),y(Je,G,null),e(G,tc),y(Ye,G,null),wr=!0},p(t,[m]){const so={};m&2&&(so.$$scope={dirty:m,ctx:t}),Ee.$set(so);const Bn={};m&2&&(Bn.$$scope={dirty:m,ctx:t}),De.$set(Bn);const Gn={};m&2&&(Gn.$$scope={dirty:m,ctx:t}),Le.$set(Gn);const Hn={};m&2&&(Hn.$$scope={dirty:m,ctx:t}),Ae.$set(Hn);const Ke={};m&2&&(Ke.$$scope={dirty:m,ctx:t}),Ie.$set(Ke);const Vn={};m&2&&(Vn.$$scope={dirty:m,ctx:t}),Be.$set(Vn);const Un={};m&2&&(Un.$$scope={dirty:m,ctx:t}),Ge.$set(Un);const ao={};m&2&&(ao.$$scope={dirty:m,ctx:t}),Ve.$set(ao);const Rn={};m&2&&(Rn.$$scope={dirty:m,ctx:t}),Ue.$set(Rn);const Jn={};m&2&&(Jn.$$scope={dirty:m,ctx:t}),Je.$set(Jn);const Yn={};m&2&&(Yn.$$scope={dirty:m,ctx:t}),Ye.$set(Yn)},i(t){wr||(w(i.$$.fragment,t),w(rt.$$.fragment,t),w(dt.$$.fragment,t),w(it.$$.fragment,t),w(lt.$$.fragment,t),w(ht.$$.fragment,t),w(ut.$$.fragment,t),w(ft.$$.fragment,t),w(_t.$$.fragment,t),w(Ee.$$.fragment,t),w(gt.$$.fragment,t),w(kt.$$.fragment,t),w(bt.$$.fragment,t),w(Tt.$$.fragment,t),w(yt.$$.fragment,t),w(wt.$$.fragment,t),w(Pt.$$.fragment,t),w(Nt.$$.fragment,t),w(xt.$$.fragment,t),w(De.$$.fragment,t),w(Le.$$.fragment,t),w(Mt.$$.fragment,t),w(Et.$$.fragment,t),w(Lt.$$.fragment,t),w(Ae.$$.fragment,t),w(Ie.$$.fragment,t),w(jt.$$.fragment,t),w(At.$$.fragment,t),w(Ht.$$.fragment,t),w(Be.$$.fragment,t),w(Ge.$$.fragment,t),w(Vt.$$.fragment,t),w(Ut.$$.fragment,t),w(Qt.$$.fragment,t),w(Ve.$$.fragment,t),w(Ue.$$.fragment,t),w(Xt.$$.fragment,t),w(Zt.$$.fragment,t),w(ro.$$.fragment,t),w(Je.$$.fragment,t),w(Ye.$$.fragment,t),wr=!0)},o(t){P(i.$$.fragment,t),P(rt.$$.fragment,t),P(dt.$$.fragment,t),P(it.$$.fragment,t),P(lt.$$.fragment,t),P(ht.$$.fragment,t),P(ut.$$.fragment,t),P(ft.$$.fragment,t),P(_t.$$.fragment,t),P(Ee.$$.fragment,t),P(gt.$$.fragment,t),P(kt.$$.fragment,t),P(bt.$$.fragment,t),P(Tt.$$.fragment,t),P(yt.$$.fragment,t),P(wt.$$.fragment,t),P(Pt.$$.fragment,t),P(Nt.$$.fragment,t),P(xt.$$.fragment,t),P(De.$$.fragment,t),P(Le.$$.fragment,t),P(Mt.$$.fragment,t),P(Et.$$.fragment,t),P(Lt.$$.fragment,t),P(Ae.$$.fragment,t),P(Ie.$$.fragment,t),P(jt.$$.fragment,t),P(At.$$.fragment,t),P(Ht.$$.fragment,t),P(Be.$$.fragment,t),P(Ge.$$.fragment,t),P(Vt.$$.fragment,t),P(Ut.$$.fragment,t),P(Qt.$$.fragment,t),P(Ve.$$.fragment,t),P(Ue.$$.fragment,t),P(Xt.$$.fragment,t),P(Zt.$$.fragment,t),P(ro.$$.fragment,t),P(Je.$$.fragment,t),P(Ye.$$.fragment,t),wr=!1},d(t){o(p),t&&o(k),t&&o(g),N(i),t&&o(Qn),t&&o(ee),t&&o(Xn),t&&o(te),N(rt),t&&o(Zn),t&&o(qe),t&&o(er),t&&o(io),t&&o(tr),t&&o(co),t&&o(or),t&&o(lo),t&&o(nr),t&&o(ze),t&&o(rr),t&&o(oe),N(dt),t&&o(sr),t&&o(U),N(it),t&&o(ar),t&&o(re),N(lt),t&&o(dr),t&&o(F),N(ht),N(ut),N(ft),N(_t),N(Ee),N(gt),t&&o(ir),t&&o(ae),N(kt),t&&o(cr),t&&o(de),N(bt),t&&o(lr),t&&o(ie),N(Tt),t&&o(hr),t&&o(ce),N(yt),t&&o(pr),t&&o(le),N(wt),t&&o(ur),t&&o(he),N(Pt),t&&o(mr),t&&o(E),N(Nt),N(xt),N(De),N(Le),t&&o(fr),t&&o(me),N(Mt),t&&o(_r),t&&o(x),N(Et),N(Lt),N(Ae),N(Ie),t&&o(gr),t&&o(ge),N(jt),t&&o(vr),t&&o(M),N(At),N(Ht),N(Be),N(Ge),t&&o(kr),t&&o(be),N(Vt),t&&o(br),t&&o(C),N(Ut),N(Qt),N(Ve),N(Ue),t&&o(Tr),t&&o(we),N(Xt),t&&o(yr),t&&o(O),N(Zt),N(ro),N(Je),N(Ye)}}}const Xl={local:"prophetnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.ProphetNetConfig",title:"ProphetNetConfig"},{local:"transformers.ProphetNetTokenizer",title:"ProphetNetTokenizer"},{local:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput",title:"ProphetNet specific outputs"},{local:"transformers.ProphetNetModel",title:"ProphetNetModel"},{local:"transformers.ProphetNetEncoder",title:"ProphetNetEncoder"},{local:"transformers.ProphetNetDecoder",title:"ProphetNetDecoder"},{local:"transformers.ProphetNetForConditionalGeneration",title:"ProphetNetForConditionalGeneration"},{local:"transformers.ProphetNetForCausalLM",title:"ProphetNetForCausalLM"}],title:"ProphetNet"};function Zl($){return Al(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ah extends Sl{constructor(p){super();Dl(this,p,Zl,Ql,Ll,{})}}export{ah as default,Xl as metadata};
