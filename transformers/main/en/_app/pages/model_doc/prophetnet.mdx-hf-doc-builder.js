import{S as Yl,i as Kl,s as Ql,e as n,k as l,w as b,t as s,M as Xl,c as r,d as o,m as p,a as d,x as T,h as a,b as c,G as e,g as _,y,q as w,o as P,B as N,v as Zl,L as Jo}from"../../chunks/vendor-hf-doc-builder.js";import{T as tr}from"../../chunks/Tip-hf-doc-builder.js";import{D as z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Yo}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Z}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ro}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ep($){let h,k,g,f,v;return f=new Yo({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){h=n("p"),k=s("sequence pair mask has the following format:"),g=l(),b(f.$$.fragment)},l(i){h=r(i,"P",{});var m=d(h);k=a(m,"sequence pair mask has the following format:"),m.forEach(o),g=p(i),T(f.$$.fragment,i)},m(i,m){_(i,h,m),e(h,k),_(i,g,m),y(f,i,m),v=!0},p:Jo,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){P(f.$$.fragment,i),v=!1},d(i){i&&o(h),i&&o(g),N(f,i)}}}function tp($){let h,k,g,f,v;return{c(){h=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=r(i,"P",{});var m=d(h);k=a(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(m,"CODE",{});var q=d(g);f=a(q,"Module"),q.forEach(o),v=a(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(i,m){_(i,h,m),e(h,k),e(h,g),e(g,f),e(h,v)},d(i){i&&o(h)}}}function op($){let h,k,g,f,v;return f=new Yo({props:{code:`from transformers import ProphetNetTokenizer, ProphetNetModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states_ngram = outputs.last_hidden_state_ngram  <span class="hljs-comment"># predict hidden states</span>`}}),{c(){h=n("p"),k=s("Example:"),g=l(),b(f.$$.fragment)},l(i){h=r(i,"P",{});var m=d(h);k=a(m,"Example:"),m.forEach(o),g=p(i),T(f.$$.fragment,i)},m(i,m){_(i,h,m),e(h,k),_(i,g,m),y(f,i,m),v=!0},p:Jo,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){P(f.$$.fragment,i),v=!1},d(i){i&&o(h),i&&o(g),N(f,i)}}}function np($){let h,k,g,f,v;return{c(){h=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=r(i,"P",{});var m=d(h);k=a(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(m,"CODE",{});var q=d(g);f=a(q,"Module"),q.forEach(o),v=a(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(i,m){_(i,h,m),e(h,k),e(h,g),e(g,f),e(h,v)},d(i){i&&o(h)}}}function rp($){let h,k,g,f,v;return f=new Yo({props:{code:`from transformers import ProphetNetTokenizer, ProphetNetEncoder
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=n("p"),k=s("Example:"),g=l(),b(f.$$.fragment)},l(i){h=r(i,"P",{});var m=d(h);k=a(m,"Example:"),m.forEach(o),g=p(i),T(f.$$.fragment,i)},m(i,m){_(i,h,m),e(h,k),_(i,g,m),y(f,i,m),v=!0},p:Jo,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){P(f.$$.fragment,i),v=!1},d(i){i&&o(h),i&&o(g),N(f,i)}}}function sp($){let h,k,g,f,v;return{c(){h=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=r(i,"P",{});var m=d(h);k=a(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(m,"CODE",{});var q=d(g);f=a(q,"Module"),q.forEach(o),v=a(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(i,m){_(i,h,m),e(h,k),e(h,g),e(g,f),e(h,v)},d(i){i&&o(h)}}}function ap($){let h,k,g,f,v;return f=new Yo({props:{code:`from transformers import ProphetNetTokenizer, ProphetNetDecoder
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=n("p"),k=s("Example:"),g=l(),b(f.$$.fragment)},l(i){h=r(i,"P",{});var m=d(h);k=a(m,"Example:"),m.forEach(o),g=p(i),T(f.$$.fragment,i)},m(i,m){_(i,h,m),e(h,k),_(i,g,m),y(f,i,m),v=!0},p:Jo,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){P(f.$$.fragment,i),v=!1},d(i){i&&o(h),i&&o(g),N(f,i)}}}function dp($){let h,k,g,f,v;return{c(){h=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=r(i,"P",{});var m=d(h);k=a(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(m,"CODE",{});var q=d(g);f=a(q,"Module"),q.forEach(o),v=a(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(i,m){_(i,h,m),e(h,k),e(h,g),e(g,f),e(h,v)},d(i){i&&o(h)}}}function ip($){let h,k,g,f,v;return f=new Yo({props:{code:`from transformers import ProphetNetTokenizer, ProphetNetForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_ngram_next_tokens = outputs.logits_ngram  <span class="hljs-comment"># logits to predict 2nd, 3rd, ... next tokens</span>`}}),{c(){h=n("p"),k=s("Example:"),g=l(),b(f.$$.fragment)},l(i){h=r(i,"P",{});var m=d(h);k=a(m,"Example:"),m.forEach(o),g=p(i),T(f.$$.fragment,i)},m(i,m){_(i,h,m),e(h,k),_(i,g,m),y(f,i,m),v=!0},p:Jo,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){P(f.$$.fragment,i),v=!1},d(i){i&&o(h),i&&o(g),N(f,i)}}}function cp($){let h,k,g,f,v;return{c(){h=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){h=r(i,"P",{});var m=d(h);k=a(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(m,"CODE",{});var q=d(g);f=a(q,"Module"),q.forEach(o),v=a(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(i,m){_(i,h,m),e(h,k),e(h,g),e(g,f),e(h,v)},d(i){i&&o(h)}}}function lp($){let h,k,g,f,v;return f=new Yo({props:{code:`from transformers import ProphetNetTokenizer, ProphetNetForCausalLM
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){h=n("p"),k=s("Example:"),g=l(),b(f.$$.fragment)},l(i){h=r(i,"P",{});var m=d(h);k=a(m,"Example:"),m.forEach(o),g=p(i),T(f.$$.fragment,i)},m(i,m){_(i,h,m),e(h,k),_(i,g,m),y(f,i,m),v=!0},p:Jo,i(i){v||(w(f.$$.fragment,i),v=!0)},o(i){P(f.$$.fragment,i),v=!1},d(i){i&&o(h),i&&o(g),N(f,i)}}}function pp($){let h,k,g,f,v,i,m,q,as,or,ee,Ko,ds,is,rt,cs,ls,nr,te,qe,Qo,st,ps,Xo,hs,rr,ze,us,at,ms,fs,sr,co,_s,ar,lo,gs,dr,po,Zo,vs,ir,ho,ks,cr,uo,en,bs,lr,Fe,Ts,dt,ys,ws,pr,oe,xe,tn,it,Ps,on,Ns,hr,V,ct,$s,ne,qs,mo,zs,Fs,lt,xs,Es,Ms,re,Os,fo,Cs,Ss,_o,Ds,Ls,ur,se,Ee,nn,pt,js,rn,As,mr,F,ht,Is,sn,Bs,Gs,ut,Ws,go,Hs,Us,Vs,R,mt,Rs,an,Js,Ys,ft,vo,Ks,dn,Qs,Xs,ko,Zs,cn,ea,ta,Me,_t,oa,ln,na,ra,j,gt,sa,pn,aa,da,Oe,ia,ae,ca,hn,la,pa,un,ha,ua,ma,Ce,vt,fa,kt,_a,mn,ga,va,fr,de,Se,fn,bt,ka,_n,ba,_r,ie,Tt,Ta,gn,ya,gr,ce,yt,wa,vn,Pa,vr,le,wt,Na,kn,$a,kr,pe,Pt,qa,bn,za,br,he,De,Tn,Nt,Fa,yn,xa,Tr,M,$t,Ea,qt,Ma,bo,Oa,Ca,Sa,ue,Da,zt,La,ja,wn,Aa,Ia,Ba,Ft,Ga,xt,Wa,Ha,Ua,A,Et,Va,me,Ra,To,Ja,Ya,Pn,Ka,Qa,Xa,Le,Za,je,yr,fe,Ae,Nn,Mt,ed,$n,td,wr,x,Ot,od,Ct,nd,yo,rd,sd,ad,_e,dd,St,id,cd,qn,ld,pd,hd,Dt,ud,Lt,md,fd,_d,D,gd,zn,vd,kd,Fn,bd,Td,xn,yd,wd,wo,Pd,Nd,$d,I,jt,qd,ge,zd,Po,Fd,xd,En,Ed,Md,Od,Ie,Cd,Be,Pr,ve,Ge,Mn,At,Sd,On,Dd,Nr,E,It,Ld,Bt,jd,No,Ad,Id,Bd,ke,Gd,Gt,Wd,Hd,Cn,Ud,Vd,Rd,Wt,Jd,Ht,Yd,Kd,Qd,L,Xd,Sn,Zd,ei,Dn,ti,oi,Ln,ni,ri,$o,si,ai,di,B,Ut,ii,be,ci,qo,li,pi,jn,hi,ui,mi,We,fi,He,$r,Te,Ue,An,Vt,_i,In,gi,qr,O,Rt,vi,Jt,ki,zo,bi,Ti,yi,ye,wi,Yt,Pi,Ni,Bn,$i,qi,zi,Kt,Fi,Qt,xi,Ei,Mi,G,Xt,Oi,we,Ci,Fo,Si,Di,Gn,Li,ji,Ai,Ve,Ii,Re,zr,Pe,Je,Wn,Zt,Bi,Hn,Gi,Fr,C,eo,Wi,to,Hi,xo,Ui,Vi,Ri,Ne,Ji,oo,Yi,Ki,Un,Qi,Xi,Zi,no,ec,ro,tc,oc,nc,W,so,rc,$e,sc,Eo,ac,dc,Vn,ic,cc,lc,Ye,pc,Ke,xr;return i=new Z({}),st=new Z({}),it=new Z({}),ct=new z({props:{name:"class transformers.ProphetNetConfig",anchor:"transformers.ProphetNetConfig",parameters:[{name:"activation_dropout",val:": typing.Optional[float] = 0.1"},{name:"activation_function",val:": typing.Union[str, typing.Callable, NoneType] = 'gelu'"},{name:"vocab_size",val:": typing.Optional[int] = 30522"},{name:"hidden_size",val:": typing.Optional[int] = 1024"},{name:"encoder_ffn_dim",val:": typing.Optional[int] = 4096"},{name:"num_encoder_layers",val:": typing.Optional[int] = 12"},{name:"num_encoder_attention_heads",val:": typing.Optional[int] = 16"},{name:"decoder_ffn_dim",val:": typing.Optional[int] = 4096"},{name:"num_decoder_layers",val:": typing.Optional[int] = 12"},{name:"num_decoder_attention_heads",val:": typing.Optional[int] = 16"},{name:"attention_dropout",val:": typing.Optional[float] = 0.1"},{name:"dropout",val:": typing.Optional[float] = 0.1"},{name:"max_position_embeddings",val:": typing.Optional[int] = 512"},{name:"init_std",val:": typing.Optional[float] = 0.02"},{name:"is_encoder_decoder",val:": typing.Optional[bool] = True"},{name:"add_cross_attention",val:": typing.Optional[bool] = True"},{name:"decoder_start_token_id",val:": typing.Optional[int] = 0"},{name:"ngram",val:": typing.Optional[int] = 2"},{name:"num_buckets",val:": typing.Optional[int] = 32"},{name:"relative_max_distance",val:": typing.Optional[int] = 128"},{name:"disable_ngram_loss",val:": typing.Optional[bool] = False"},{name:"eps",val:": typing.Optional[float] = 0.0"},{name:"use_cache",val:": typing.Optional[bool] = True"},{name:"pad_token_id",val:": typing.Optional[int] = 0"},{name:"bos_token_id",val:": typing.Optional[int] = 1"},{name:"eos_token_id",val:": typing.Optional[int] = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ProphetNetConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
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
`}}),Oe=new Ro({props:{anchor:"transformers.ProphetNetTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[ep]},$$scope:{ctx:$}}}),vt=new z({props:{name:"get_special_tokens_mask",anchor:"transformers.ProphetNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.ProphetNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
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
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/prophetnet/modeling_prophetnet.py#L1776"}}),Et=new z({props:{name:"forward",anchor:"transformers.ProphetNetModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ProphetNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Le=new tr({props:{$$slots:{default:[tp]},$$scope:{ctx:$}}}),je=new Ro({props:{anchor:"transformers.ProphetNetModel.forward.example",$$slots:{default:[op]},$$scope:{ctx:$}}}),Mt=new Z({}),Ot=new z({props:{name:"class transformers.ProphetNetEncoder",anchor:"transformers.ProphetNetEncoder",parameters:[{name:"config",val:": ProphetNetConfig"},{name:"word_embeddings",val:": Embedding = None"}],parametersDescription:[{anchor:"transformers.ProphetNetEncoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetConfig">ProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
`}}),Ie=new tr({props:{$$slots:{default:[np]},$$scope:{ctx:$}}}),Be=new Ro({props:{anchor:"transformers.ProphetNetEncoder.forward.example",$$slots:{default:[rp]},$$scope:{ctx:$}}}),At=new Z({}),It=new z({props:{name:"class transformers.ProphetNetDecoder",anchor:"transformers.ProphetNetDecoder",parameters:[{name:"config",val:": ProphetNetConfig"},{name:"word_embeddings",val:": typing.Optional[torch.nn.modules.sparse.Embedding] = None"}],parametersDescription:[{anchor:"transformers.ProphetNetDecoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetConfig">ProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
`}}),We=new tr({props:{$$slots:{default:[sp]},$$scope:{ctx:$}}}),He=new Ro({props:{anchor:"transformers.ProphetNetDecoder.forward.example",$$slots:{default:[ap]},$$scope:{ctx:$}}}),Vt=new Z({}),Rt=new z({props:{name:"class transformers.ProphetNetForConditionalGeneration",anchor:"transformers.ProphetNetForConditionalGeneration",parameters:[{name:"config",val:": ProphetNetConfig"}],parametersDescription:[{anchor:"transformers.ProphetNetForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetConfig">ProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
`}}),Ve=new tr({props:{$$slots:{default:[dp]},$$scope:{ctx:$}}}),Re=new Ro({props:{anchor:"transformers.ProphetNetForConditionalGeneration.forward.example",$$slots:{default:[ip]},$$scope:{ctx:$}}}),Zt=new Z({}),eo=new z({props:{name:"class transformers.ProphetNetForCausalLM",anchor:"transformers.ProphetNetForCausalLM",parameters:[{name:"config",val:": ProphetNetConfig"}],parametersDescription:[{anchor:"transformers.ProphetNetForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetConfig">ProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
`}}),Ye=new tr({props:{$$slots:{default:[cp]},$$scope:{ctx:$}}}),Ke=new Ro({props:{anchor:"transformers.ProphetNetForCausalLM.forward.example",$$slots:{default:[lp]},$$scope:{ctx:$}}}),{c(){h=n("meta"),k=l(),g=n("h1"),f=n("a"),v=n("span"),b(i.$$.fragment),m=l(),q=n("span"),as=s("ProphetNet"),or=l(),ee=n("p"),Ko=n("strong"),ds=s("DISCLAIMER:"),is=s(" If you see something strange, file a "),rt=n("a"),cs=s("Github Issue"),ls=s(` and assign
@patrickvonplaten`),nr=l(),te=n("h2"),qe=n("a"),Qo=n("span"),b(st.$$.fragment),ps=l(),Xo=n("span"),hs=s("Overview"),rr=l(),ze=n("p"),us=s("The ProphetNet model was proposed in "),at=n("a"),ms=s("ProphetNet: Predicting Future N-gram for Sequence-to-Sequence Pre-training,"),fs=s(` by Yu Yan, Weizhen Qi, Yeyun Gong, Dayiheng Liu, Nan Duan, Jiusheng Chen, Ruofei
Zhang, Ming Zhou on 13 Jan, 2020.`),sr=l(),co=n("p"),_s=s(`ProphetNet is an encoder-decoder model and can predict n-future tokens for \u201Cngram\u201D language modeling instead of just
the next token.`),ar=l(),lo=n("p"),gs=s("The abstract from the paper is the following:"),dr=l(),po=n("p"),Zo=n("em"),vs=s(`In this paper, we present a new sequence-to-sequence pretraining model called ProphetNet, which introduces a novel
self-supervised objective named future n-gram prediction and the proposed n-stream self-attention mechanism. Instead of
the optimization of one-step ahead prediction in traditional sequence-to-sequence model, the ProphetNet is optimized by
n-step ahead prediction which predicts the next n tokens simultaneously based on previous context tokens at each time
step. The future n-gram prediction explicitly encourages the model to plan for the future tokens and prevent
overfitting on strong local correlations. We pre-train ProphetNet using a base scale dataset (16GB) and a large scale
dataset (160GB) respectively. Then we conduct experiments on CNN/DailyMail, Gigaword, and SQuAD 1.1 benchmarks for
abstractive summarization and question generation tasks. Experimental results show that ProphetNet achieves new
state-of-the-art results on all these datasets compared to the models using the same scale pretraining corpus.`),ir=l(),ho=n("p"),ks=s("Tips:"),cr=l(),uo=n("ul"),en=n("li"),bs=s(`ProphetNet is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),lr=l(),Fe=n("p"),Ts=s("The Authors\u2019 code can be found "),dt=n("a"),ys=s("here"),ws=s("."),pr=l(),oe=n("h2"),xe=n("a"),tn=n("span"),b(it.$$.fragment),Ps=l(),on=n("span"),Ns=s("ProphetNetConfig"),hr=l(),V=n("div"),b(ct.$$.fragment),$s=l(),ne=n("p"),qs=s("This is the configuration class to store the configuration of a "),mo=n("a"),zs=s("ProphetNetModel"),Fs=s(`. It is used to instantiate a
ProphetNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the ProphetNet
`),lt=n("a"),xs=s("microsoft/prophetnet-large-uncased"),Es=s(" architecture."),Ms=l(),re=n("p"),Os=s("Configuration objects inherit from "),fo=n("a"),Cs=s("PretrainedConfig"),Ss=s(` and can be used to control the model outputs. Read the
documentation from `),_o=n("a"),Ds=s("PretrainedConfig"),Ls=s(" for more information."),ur=l(),se=n("h2"),Ee=n("a"),nn=n("span"),b(pt.$$.fragment),js=l(),rn=n("span"),As=s("ProphetNetTokenizer"),mr=l(),F=n("div"),b(ht.$$.fragment),Is=l(),sn=n("p"),Bs=s("Construct a ProphetNetTokenizer. Based on WordPiece."),Gs=l(),ut=n("p"),Ws=s("This tokenizer inherits from "),go=n("a"),Hs=s("PreTrainedTokenizer"),Us=s(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Vs=l(),R=n("div"),b(mt.$$.fragment),Rs=l(),an=n("p"),Js=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Ys=l(),ft=n("ul"),vo=n("li"),Ks=s("single sequence: "),dn=n("code"),Qs=s("[CLS] X [SEP]"),Xs=l(),ko=n("li"),Zs=s("pair of sequences: "),cn=n("code"),ea=s("[CLS] A [SEP] B [SEP]"),ta=l(),Me=n("div"),b(_t.$$.fragment),oa=l(),ln=n("p"),na=s("Converts a sequence of tokens (string) in a single string."),ra=l(),j=n("div"),b(gt.$$.fragment),sa=l(),pn=n("p"),aa=s("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A ProphetNet"),da=l(),b(Oe.$$.fragment),ia=l(),ae=n("p"),ca=s("If "),hn=n("code"),la=s("token_ids_1"),pa=s(" is "),un=n("code"),ha=s("None"),ua=s(", this method only returns the first portion of the mask (0s)."),ma=l(),Ce=n("div"),b(vt.$$.fragment),fa=l(),kt=n("p"),_a=s(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),mn=n("code"),ga=s("prepare_for_model"),va=s(" method."),fr=l(),de=n("h2"),Se=n("a"),fn=n("span"),b(bt.$$.fragment),ka=l(),_n=n("span"),ba=s("ProphetNet specific outputs"),_r=l(),ie=n("div"),b(Tt.$$.fragment),Ta=l(),gn=n("p"),ya=s("Base class for sequence-to-sequence language models outputs."),gr=l(),ce=n("div"),b(yt.$$.fragment),wa=l(),vn=n("p"),Pa=s(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),vr=l(),le=n("div"),b(wt.$$.fragment),Na=l(),kn=n("p"),$a=s("Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),kr=l(),pe=n("div"),b(Pt.$$.fragment),qa=l(),bn=n("p"),za=s("Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),br=l(),he=n("h2"),De=n("a"),Tn=n("span"),b(Nt.$$.fragment),Fa=l(),yn=n("span"),xa=s("ProphetNetModel"),Tr=l(),M=n("div"),b($t.$$.fragment),Ea=l(),qt=n("p"),Ma=s(`The bare ProphetNet Model outputting raw hidden-states without any specific head on top.
This model inherits from `),bo=n("a"),Oa=s("PreTrainedModel"),Ca=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sa=l(),ue=n("p"),Da=s("Original ProphetNet code can be found "),zt=n("a"),La=s("here"),ja=s(`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),wn=n("code"),Aa=s("convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),Ia=s("."),Ba=l(),Ft=n("p"),Ga=s("This model is a PyTorch "),xt=n("a"),Wa=s("torch.nn.Module"),Ha=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Ua=l(),A=n("div"),b(Et.$$.fragment),Va=l(),me=n("p"),Ra=s("The "),To=n("a"),Ja=s("ProphetNetModel"),Ya=s(" forward method, overrides the "),Pn=n("code"),Ka=s("__call__"),Qa=s(" special method."),Xa=l(),b(Le.$$.fragment),Za=l(),b(je.$$.fragment),yr=l(),fe=n("h2"),Ae=n("a"),Nn=n("span"),b(Mt.$$.fragment),ed=l(),$n=n("span"),td=s("ProphetNetEncoder"),wr=l(),x=n("div"),b(Ot.$$.fragment),od=l(),Ct=n("p"),nd=s(`The standalone encoder part of the ProphetNetModel.
This model inherits from `),yo=n("a"),rd=s("PreTrainedModel"),sd=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ad=l(),_e=n("p"),dd=s("Original ProphetNet code can be found "),St=n("a"),id=s("here"),cd=s(`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),qn=n("code"),ld=s("convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),pd=s("."),hd=l(),Dt=n("p"),ud=s("This model is a PyTorch "),Lt=n("a"),md=s("torch.nn.Module"),fd=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),_d=l(),D=n("p"),gd=s("word_embeddings  ("),zn=n("code"),vd=s("torch.nn.Embeddings"),kd=s(" of shape "),Fn=n("code"),bd=s("(config.vocab_size, config.hidden_size)"),Td=s(", "),xn=n("em"),yd=s("optional"),wd=s(`):
The word embedding parameters. This can be used to initialize `),wo=n("a"),Pd=s("ProphetNetEncoder"),Nd=s(` with pre-defined word
embeddings instead of randomly initialized word embeddings.`),$d=l(),I=n("div"),b(jt.$$.fragment),qd=l(),ge=n("p"),zd=s("The "),Po=n("a"),Fd=s("ProphetNetEncoder"),xd=s(" forward method, overrides the "),En=n("code"),Ed=s("__call__"),Md=s(" special method."),Od=l(),b(Ie.$$.fragment),Cd=l(),b(Be.$$.fragment),Pr=l(),ve=n("h2"),Ge=n("a"),Mn=n("span"),b(At.$$.fragment),Sd=l(),On=n("span"),Dd=s("ProphetNetDecoder"),Nr=l(),E=n("div"),b(It.$$.fragment),Ld=l(),Bt=n("p"),jd=s(`The standalone decoder part of the ProphetNetModel.
This model inherits from `),No=n("a"),Ad=s("PreTrainedModel"),Id=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bd=l(),ke=n("p"),Gd=s("Original ProphetNet code can be found "),Gt=n("a"),Wd=s("here"),Hd=s(`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),Cn=n("code"),Ud=s("convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),Vd=s("."),Rd=l(),Wt=n("p"),Jd=s("This model is a PyTorch "),Ht=n("a"),Yd=s("torch.nn.Module"),Kd=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Qd=l(),L=n("p"),Xd=s("word_embeddings  ("),Sn=n("code"),Zd=s("torch.nn.Embeddings"),ei=s(" of shape "),Dn=n("code"),ti=s("(config.vocab_size, config.hidden_size)"),oi=s(", "),Ln=n("em"),ni=s("optional"),ri=s(`):
The word embedding parameters. This can be used to initialize `),$o=n("a"),si=s("ProphetNetEncoder"),ai=s(` with pre-defined word
embeddings instead of randomly initialized word embeddings.`),di=l(),B=n("div"),b(Ut.$$.fragment),ii=l(),be=n("p"),ci=s("The "),qo=n("a"),li=s("ProphetNetDecoder"),pi=s(" forward method, overrides the "),jn=n("code"),hi=s("__call__"),ui=s(" special method."),mi=l(),b(We.$$.fragment),fi=l(),b(He.$$.fragment),$r=l(),Te=n("h2"),Ue=n("a"),An=n("span"),b(Vt.$$.fragment),_i=l(),In=n("span"),gi=s("ProphetNetForConditionalGeneration"),qr=l(),O=n("div"),b(Rt.$$.fragment),vi=l(),Jt=n("p"),ki=s(`The ProphetNet Model with a language modeling head. Can be used for sequence generation tasks.
This model inherits from `),zo=n("a"),bi=s("PreTrainedModel"),Ti=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yi=l(),ye=n("p"),wi=s("Original ProphetNet code can be found "),Yt=n("a"),Pi=s("here"),Ni=s(`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),Bn=n("code"),$i=s("convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),qi=s("."),zi=l(),Kt=n("p"),Fi=s("This model is a PyTorch "),Qt=n("a"),xi=s("torch.nn.Module"),Ei=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Mi=l(),G=n("div"),b(Xt.$$.fragment),Oi=l(),we=n("p"),Ci=s("The "),Fo=n("a"),Si=s("ProphetNetForConditionalGeneration"),Di=s(" forward method, overrides the "),Gn=n("code"),Li=s("__call__"),ji=s(" special method."),Ai=l(),b(Ve.$$.fragment),Ii=l(),b(Re.$$.fragment),zr=l(),Pe=n("h2"),Je=n("a"),Wn=n("span"),b(Zt.$$.fragment),Bi=l(),Hn=n("span"),Gi=s("ProphetNetForCausalLM"),Fr=l(),C=n("div"),b(eo.$$.fragment),Wi=l(),to=n("p"),Hi=s(`The standalone decoder part of the ProphetNetModel with a lm head on top. The model can be used for causal language modeling.
This model inherits from `),xo=n("a"),Ui=s("PreTrainedModel"),Vi=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ri=l(),Ne=n("p"),Ji=s("Original ProphetNet code can be found "),oo=n("a"),Yi=s("here"),Ki=s(`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),Un=n("code"),Qi=s("convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),Xi=s("."),Zi=l(),no=n("p"),ec=s("This model is a PyTorch "),ro=n("a"),tc=s("torch.nn.Module"),oc=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),nc=l(),W=n("div"),b(so.$$.fragment),rc=l(),$e=n("p"),sc=s("The "),Eo=n("a"),ac=s("ProphetNetForCausalLM"),dc=s(" forward method, overrides the "),Vn=n("code"),ic=s("__call__"),cc=s(" special method."),lc=l(),b(Ye.$$.fragment),pc=l(),b(Ke.$$.fragment),this.h()},l(t){const u=Xl('[data-svelte="svelte-1phssyn"]',document.head);h=r(u,"META",{name:!0,content:!0}),u.forEach(o),k=p(t),g=r(t,"H1",{class:!0});var ao=d(g);f=r(ao,"A",{id:!0,class:!0,href:!0});var Rn=d(f);v=r(Rn,"SPAN",{});var Jn=d(v);T(i.$$.fragment,Jn),Jn.forEach(o),Rn.forEach(o),m=p(ao),q=r(ao,"SPAN",{});var Yn=d(q);as=a(Yn,"ProphetNet"),Yn.forEach(o),ao.forEach(o),or=p(t),ee=r(t,"P",{});var Qe=d(ee);Ko=r(Qe,"STRONG",{});var Kn=d(Ko);ds=a(Kn,"DISCLAIMER:"),Kn.forEach(o),is=a(Qe," If you see something strange, file a "),rt=r(Qe,"A",{href:!0,rel:!0});var Qn=d(rt);cs=a(Qn,"Github Issue"),Qn.forEach(o),ls=a(Qe,` and assign
@patrickvonplaten`),Qe.forEach(o),nr=p(t),te=r(t,"H2",{class:!0});var io=d(te);qe=r(io,"A",{id:!0,class:!0,href:!0});var Xn=d(qe);Qo=r(Xn,"SPAN",{});var Zn=d(Qo);T(st.$$.fragment,Zn),Zn.forEach(o),Xn.forEach(o),ps=p(io),Xo=r(io,"SPAN",{});var er=d(Xo);hs=a(er,"Overview"),er.forEach(o),io.forEach(o),rr=p(t),ze=r(t,"P",{});var Er=d(ze);us=a(Er,"The ProphetNet model was proposed in "),at=r(Er,"A",{href:!0,rel:!0});var mc=d(at);ms=a(mc,"ProphetNet: Predicting Future N-gram for Sequence-to-Sequence Pre-training,"),mc.forEach(o),fs=a(Er,` by Yu Yan, Weizhen Qi, Yeyun Gong, Dayiheng Liu, Nan Duan, Jiusheng Chen, Ruofei
Zhang, Ming Zhou on 13 Jan, 2020.`),Er.forEach(o),sr=p(t),co=r(t,"P",{});var fc=d(co);_s=a(fc,`ProphetNet is an encoder-decoder model and can predict n-future tokens for \u201Cngram\u201D language modeling instead of just
the next token.`),fc.forEach(o),ar=p(t),lo=r(t,"P",{});var _c=d(lo);gs=a(_c,"The abstract from the paper is the following:"),_c.forEach(o),dr=p(t),po=r(t,"P",{});var gc=d(po);Zo=r(gc,"EM",{});var vc=d(Zo);vs=a(vc,`In this paper, we present a new sequence-to-sequence pretraining model called ProphetNet, which introduces a novel
self-supervised objective named future n-gram prediction and the proposed n-stream self-attention mechanism. Instead of
the optimization of one-step ahead prediction in traditional sequence-to-sequence model, the ProphetNet is optimized by
n-step ahead prediction which predicts the next n tokens simultaneously based on previous context tokens at each time
step. The future n-gram prediction explicitly encourages the model to plan for the future tokens and prevent
overfitting on strong local correlations. We pre-train ProphetNet using a base scale dataset (16GB) and a large scale
dataset (160GB) respectively. Then we conduct experiments on CNN/DailyMail, Gigaword, and SQuAD 1.1 benchmarks for
abstractive summarization and question generation tasks. Experimental results show that ProphetNet achieves new
state-of-the-art results on all these datasets compared to the models using the same scale pretraining corpus.`),vc.forEach(o),gc.forEach(o),ir=p(t),ho=r(t,"P",{});var kc=d(ho);ks=a(kc,"Tips:"),kc.forEach(o),cr=p(t),uo=r(t,"UL",{});var bc=d(uo);en=r(bc,"LI",{});var Tc=d(en);bs=a(Tc,`ProphetNet is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Tc.forEach(o),bc.forEach(o),lr=p(t),Fe=r(t,"P",{});var Mr=d(Fe);Ts=a(Mr,"The Authors\u2019 code can be found "),dt=r(Mr,"A",{href:!0,rel:!0});var yc=d(dt);ys=a(yc,"here"),yc.forEach(o),ws=a(Mr,"."),Mr.forEach(o),pr=p(t),oe=r(t,"H2",{class:!0});var Or=d(oe);xe=r(Or,"A",{id:!0,class:!0,href:!0});var wc=d(xe);tn=r(wc,"SPAN",{});var Pc=d(tn);T(it.$$.fragment,Pc),Pc.forEach(o),wc.forEach(o),Ps=p(Or),on=r(Or,"SPAN",{});var Nc=d(on);Ns=a(Nc,"ProphetNetConfig"),Nc.forEach(o),Or.forEach(o),hr=p(t),V=r(t,"DIV",{class:!0});var Mo=d(V);T(ct.$$.fragment,Mo),$s=p(Mo),ne=r(Mo,"P",{});var Oo=d(ne);qs=a(Oo,"This is the configuration class to store the configuration of a "),mo=r(Oo,"A",{href:!0});var $c=d(mo);zs=a($c,"ProphetNetModel"),$c.forEach(o),Fs=a(Oo,`. It is used to instantiate a
ProphetNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the ProphetNet
`),lt=r(Oo,"A",{href:!0,rel:!0});var qc=d(lt);xs=a(qc,"microsoft/prophetnet-large-uncased"),qc.forEach(o),Es=a(Oo," architecture."),Oo.forEach(o),Ms=p(Mo),re=r(Mo,"P",{});var Co=d(re);Os=a(Co,"Configuration objects inherit from "),fo=r(Co,"A",{href:!0});var zc=d(fo);Cs=a(zc,"PretrainedConfig"),zc.forEach(o),Ss=a(Co,` and can be used to control the model outputs. Read the
documentation from `),_o=r(Co,"A",{href:!0});var Fc=d(_o);Ds=a(Fc,"PretrainedConfig"),Fc.forEach(o),Ls=a(Co," for more information."),Co.forEach(o),Mo.forEach(o),ur=p(t),se=r(t,"H2",{class:!0});var Cr=d(se);Ee=r(Cr,"A",{id:!0,class:!0,href:!0});var xc=d(Ee);nn=r(xc,"SPAN",{});var Ec=d(nn);T(pt.$$.fragment,Ec),Ec.forEach(o),xc.forEach(o),js=p(Cr),rn=r(Cr,"SPAN",{});var Mc=d(rn);As=a(Mc,"ProphetNetTokenizer"),Mc.forEach(o),Cr.forEach(o),mr=p(t),F=r(t,"DIV",{class:!0});var S=d(F);T(ht.$$.fragment,S),Is=p(S),sn=r(S,"P",{});var Oc=d(sn);Bs=a(Oc,"Construct a ProphetNetTokenizer. Based on WordPiece."),Oc.forEach(o),Gs=p(S),ut=r(S,"P",{});var Sr=d(ut);Ws=a(Sr,"This tokenizer inherits from "),go=r(Sr,"A",{href:!0});var Cc=d(go);Hs=a(Cc,"PreTrainedTokenizer"),Cc.forEach(o),Us=a(Sr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Sr.forEach(o),Vs=p(S),R=r(S,"DIV",{class:!0});var So=d(R);T(mt.$$.fragment,So),Rs=p(So),an=r(So,"P",{});var Sc=d(an);Js=a(Sc,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Sc.forEach(o),Ys=p(So),ft=r(So,"UL",{});var Dr=d(ft);vo=r(Dr,"LI",{});var hc=d(vo);Ks=a(hc,"single sequence: "),dn=r(hc,"CODE",{});var Dc=d(dn);Qs=a(Dc,"[CLS] X [SEP]"),Dc.forEach(o),hc.forEach(o),Xs=p(Dr),ko=r(Dr,"LI",{});var uc=d(ko);Zs=a(uc,"pair of sequences: "),cn=r(uc,"CODE",{});var Lc=d(cn);ea=a(Lc,"[CLS] A [SEP] B [SEP]"),Lc.forEach(o),uc.forEach(o),Dr.forEach(o),So.forEach(o),ta=p(S),Me=r(S,"DIV",{class:!0});var Lr=d(Me);T(_t.$$.fragment,Lr),oa=p(Lr),ln=r(Lr,"P",{});var jc=d(ln);na=a(jc,"Converts a sequence of tokens (string) in a single string."),jc.forEach(o),Lr.forEach(o),ra=p(S),j=r(S,"DIV",{class:!0});var Xe=d(j);T(gt.$$.fragment,Xe),sa=p(Xe),pn=r(Xe,"P",{});var Ac=d(pn);aa=a(Ac,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A ProphetNet"),Ac.forEach(o),da=p(Xe),T(Oe.$$.fragment,Xe),ia=p(Xe),ae=r(Xe,"P",{});var Do=d(ae);ca=a(Do,"If "),hn=r(Do,"CODE",{});var Ic=d(hn);la=a(Ic,"token_ids_1"),Ic.forEach(o),pa=a(Do," is "),un=r(Do,"CODE",{});var Bc=d(un);ha=a(Bc,"None"),Bc.forEach(o),ua=a(Do,", this method only returns the first portion of the mask (0s)."),Do.forEach(o),Xe.forEach(o),ma=p(S),Ce=r(S,"DIV",{class:!0});var jr=d(Ce);T(vt.$$.fragment,jr),fa=p(jr),kt=r(jr,"P",{});var Ar=d(kt);_a=a(Ar,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),mn=r(Ar,"CODE",{});var Gc=d(mn);ga=a(Gc,"prepare_for_model"),Gc.forEach(o),va=a(Ar," method."),Ar.forEach(o),jr.forEach(o),S.forEach(o),fr=p(t),de=r(t,"H2",{class:!0});var Ir=d(de);Se=r(Ir,"A",{id:!0,class:!0,href:!0});var Wc=d(Se);fn=r(Wc,"SPAN",{});var Hc=d(fn);T(bt.$$.fragment,Hc),Hc.forEach(o),Wc.forEach(o),ka=p(Ir),_n=r(Ir,"SPAN",{});var Uc=d(_n);ba=a(Uc,"ProphetNet specific outputs"),Uc.forEach(o),Ir.forEach(o),_r=p(t),ie=r(t,"DIV",{class:!0});var Br=d(ie);T(Tt.$$.fragment,Br),Ta=p(Br),gn=r(Br,"P",{});var Vc=d(gn);ya=a(Vc,"Base class for sequence-to-sequence language models outputs."),Vc.forEach(o),Br.forEach(o),gr=p(t),ce=r(t,"DIV",{class:!0});var Gr=d(ce);T(yt.$$.fragment,Gr),wa=p(Gr),vn=r(Gr,"P",{});var Rc=d(vn);Pa=a(Rc,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Rc.forEach(o),Gr.forEach(o),vr=p(t),le=r(t,"DIV",{class:!0});var Wr=d(le);T(wt.$$.fragment,Wr),Na=p(Wr),kn=r(Wr,"P",{});var Jc=d(kn);$a=a(Jc,"Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),Jc.forEach(o),Wr.forEach(o),kr=p(t),pe=r(t,"DIV",{class:!0});var Hr=d(pe);T(Pt.$$.fragment,Hr),qa=p(Hr),bn=r(Hr,"P",{});var Yc=d(bn);za=a(Yc,"Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),Yc.forEach(o),Hr.forEach(o),br=p(t),he=r(t,"H2",{class:!0});var Ur=d(he);De=r(Ur,"A",{id:!0,class:!0,href:!0});var Kc=d(De);Tn=r(Kc,"SPAN",{});var Qc=d(Tn);T(Nt.$$.fragment,Qc),Qc.forEach(o),Kc.forEach(o),Fa=p(Ur),yn=r(Ur,"SPAN",{});var Xc=d(yn);xa=a(Xc,"ProphetNetModel"),Xc.forEach(o),Ur.forEach(o),Tr=p(t),M=r(t,"DIV",{class:!0});var J=d(M);T($t.$$.fragment,J),Ea=p(J),qt=r(J,"P",{});var Vr=d(qt);Ma=a(Vr,`The bare ProphetNet Model outputting raw hidden-states without any specific head on top.
This model inherits from `),bo=r(Vr,"A",{href:!0});var Zc=d(bo);Oa=a(Zc,"PreTrainedModel"),Zc.forEach(o),Ca=a(Vr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vr.forEach(o),Sa=p(J),ue=r(J,"P",{});var Lo=d(ue);Da=a(Lo,"Original ProphetNet code can be found "),zt=r(Lo,"A",{href:!0,rel:!0});var el=d(zt);La=a(el,"here"),el.forEach(o),ja=a(Lo,`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),wn=r(Lo,"CODE",{});var tl=d(wn);Aa=a(tl,"convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),tl.forEach(o),Ia=a(Lo,"."),Lo.forEach(o),Ba=p(J),Ft=r(J,"P",{});var Rr=d(Ft);Ga=a(Rr,"This model is a PyTorch "),xt=r(Rr,"A",{href:!0,rel:!0});var ol=d(xt);Wa=a(ol,"torch.nn.Module"),ol.forEach(o),Ha=a(Rr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Rr.forEach(o),Ua=p(J),A=r(J,"DIV",{class:!0});var Ze=d(A);T(Et.$$.fragment,Ze),Va=p(Ze),me=r(Ze,"P",{});var jo=d(me);Ra=a(jo,"The "),To=r(jo,"A",{href:!0});var nl=d(To);Ja=a(nl,"ProphetNetModel"),nl.forEach(o),Ya=a(jo," forward method, overrides the "),Pn=r(jo,"CODE",{});var rl=d(Pn);Ka=a(rl,"__call__"),rl.forEach(o),Qa=a(jo," special method."),jo.forEach(o),Xa=p(Ze),T(Le.$$.fragment,Ze),Za=p(Ze),T(je.$$.fragment,Ze),Ze.forEach(o),J.forEach(o),yr=p(t),fe=r(t,"H2",{class:!0});var Jr=d(fe);Ae=r(Jr,"A",{id:!0,class:!0,href:!0});var sl=d(Ae);Nn=r(sl,"SPAN",{});var al=d(Nn);T(Mt.$$.fragment,al),al.forEach(o),sl.forEach(o),ed=p(Jr),$n=r(Jr,"SPAN",{});var dl=d($n);td=a(dl,"ProphetNetEncoder"),dl.forEach(o),Jr.forEach(o),wr=p(t),x=r(t,"DIV",{class:!0});var H=d(x);T(Ot.$$.fragment,H),od=p(H),Ct=r(H,"P",{});var Yr=d(Ct);nd=a(Yr,`The standalone encoder part of the ProphetNetModel.
This model inherits from `),yo=r(Yr,"A",{href:!0});var il=d(yo);rd=a(il,"PreTrainedModel"),il.forEach(o),sd=a(Yr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yr.forEach(o),ad=p(H),_e=r(H,"P",{});var Ao=d(_e);dd=a(Ao,"Original ProphetNet code can be found "),St=r(Ao,"A",{href:!0,rel:!0});var cl=d(St);id=a(cl,"here"),cl.forEach(o),cd=a(Ao,`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),qn=r(Ao,"CODE",{});var ll=d(qn);ld=a(ll,"convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),ll.forEach(o),pd=a(Ao,"."),Ao.forEach(o),hd=p(H),Dt=r(H,"P",{});var Kr=d(Dt);ud=a(Kr,"This model is a PyTorch "),Lt=r(Kr,"A",{href:!0,rel:!0});var pl=d(Lt);md=a(pl,"torch.nn.Module"),pl.forEach(o),fd=a(Kr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Kr.forEach(o),_d=p(H),D=r(H,"P",{});var Y=d(D);gd=a(Y,"word_embeddings  ("),zn=r(Y,"CODE",{});var hl=d(zn);vd=a(hl,"torch.nn.Embeddings"),hl.forEach(o),kd=a(Y," of shape "),Fn=r(Y,"CODE",{});var ul=d(Fn);bd=a(ul,"(config.vocab_size, config.hidden_size)"),ul.forEach(o),Td=a(Y,", "),xn=r(Y,"EM",{});var ml=d(xn);yd=a(ml,"optional"),ml.forEach(o),wd=a(Y,`):
The word embedding parameters. This can be used to initialize `),wo=r(Y,"A",{href:!0});var fl=d(wo);Pd=a(fl,"ProphetNetEncoder"),fl.forEach(o),Nd=a(Y,` with pre-defined word
embeddings instead of randomly initialized word embeddings.`),Y.forEach(o),$d=p(H),I=r(H,"DIV",{class:!0});var et=d(I);T(jt.$$.fragment,et),qd=p(et),ge=r(et,"P",{});var Io=d(ge);zd=a(Io,"The "),Po=r(Io,"A",{href:!0});var _l=d(Po);Fd=a(_l,"ProphetNetEncoder"),_l.forEach(o),xd=a(Io," forward method, overrides the "),En=r(Io,"CODE",{});var gl=d(En);Ed=a(gl,"__call__"),gl.forEach(o),Md=a(Io," special method."),Io.forEach(o),Od=p(et),T(Ie.$$.fragment,et),Cd=p(et),T(Be.$$.fragment,et),et.forEach(o),H.forEach(o),Pr=p(t),ve=r(t,"H2",{class:!0});var Qr=d(ve);Ge=r(Qr,"A",{id:!0,class:!0,href:!0});var vl=d(Ge);Mn=r(vl,"SPAN",{});var kl=d(Mn);T(At.$$.fragment,kl),kl.forEach(o),vl.forEach(o),Sd=p(Qr),On=r(Qr,"SPAN",{});var bl=d(On);Dd=a(bl,"ProphetNetDecoder"),bl.forEach(o),Qr.forEach(o),Nr=p(t),E=r(t,"DIV",{class:!0});var U=d(E);T(It.$$.fragment,U),Ld=p(U),Bt=r(U,"P",{});var Xr=d(Bt);jd=a(Xr,`The standalone decoder part of the ProphetNetModel.
This model inherits from `),No=r(Xr,"A",{href:!0});var Tl=d(No);Ad=a(Tl,"PreTrainedModel"),Tl.forEach(o),Id=a(Xr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xr.forEach(o),Bd=p(U),ke=r(U,"P",{});var Bo=d(ke);Gd=a(Bo,"Original ProphetNet code can be found "),Gt=r(Bo,"A",{href:!0,rel:!0});var yl=d(Gt);Wd=a(yl,"here"),yl.forEach(o),Hd=a(Bo,`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),Cn=r(Bo,"CODE",{});var wl=d(Cn);Ud=a(wl,"convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),wl.forEach(o),Vd=a(Bo,"."),Bo.forEach(o),Rd=p(U),Wt=r(U,"P",{});var Zr=d(Wt);Jd=a(Zr,"This model is a PyTorch "),Ht=r(Zr,"A",{href:!0,rel:!0});var Pl=d(Ht);Yd=a(Pl,"torch.nn.Module"),Pl.forEach(o),Kd=a(Zr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Zr.forEach(o),Qd=p(U),L=r(U,"P",{});var K=d(L);Xd=a(K,"word_embeddings  ("),Sn=r(K,"CODE",{});var Nl=d(Sn);Zd=a(Nl,"torch.nn.Embeddings"),Nl.forEach(o),ei=a(K," of shape "),Dn=r(K,"CODE",{});var $l=d(Dn);ti=a($l,"(config.vocab_size, config.hidden_size)"),$l.forEach(o),oi=a(K,", "),Ln=r(K,"EM",{});var ql=d(Ln);ni=a(ql,"optional"),ql.forEach(o),ri=a(K,`):
The word embedding parameters. This can be used to initialize `),$o=r(K,"A",{href:!0});var zl=d($o);si=a(zl,"ProphetNetEncoder"),zl.forEach(o),ai=a(K,` with pre-defined word
embeddings instead of randomly initialized word embeddings.`),K.forEach(o),di=p(U),B=r(U,"DIV",{class:!0});var tt=d(B);T(Ut.$$.fragment,tt),ii=p(tt),be=r(tt,"P",{});var Go=d(be);ci=a(Go,"The "),qo=r(Go,"A",{href:!0});var Fl=d(qo);li=a(Fl,"ProphetNetDecoder"),Fl.forEach(o),pi=a(Go," forward method, overrides the "),jn=r(Go,"CODE",{});var xl=d(jn);hi=a(xl,"__call__"),xl.forEach(o),ui=a(Go," special method."),Go.forEach(o),mi=p(tt),T(We.$$.fragment,tt),fi=p(tt),T(He.$$.fragment,tt),tt.forEach(o),U.forEach(o),$r=p(t),Te=r(t,"H2",{class:!0});var es=d(Te);Ue=r(es,"A",{id:!0,class:!0,href:!0});var El=d(Ue);An=r(El,"SPAN",{});var Ml=d(An);T(Vt.$$.fragment,Ml),Ml.forEach(o),El.forEach(o),_i=p(es),In=r(es,"SPAN",{});var Ol=d(In);gi=a(Ol,"ProphetNetForConditionalGeneration"),Ol.forEach(o),es.forEach(o),qr=p(t),O=r(t,"DIV",{class:!0});var Q=d(O);T(Rt.$$.fragment,Q),vi=p(Q),Jt=r(Q,"P",{});var ts=d(Jt);ki=a(ts,`The ProphetNet Model with a language modeling head. Can be used for sequence generation tasks.
This model inherits from `),zo=r(ts,"A",{href:!0});var Cl=d(zo);bi=a(Cl,"PreTrainedModel"),Cl.forEach(o),Ti=a(ts,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ts.forEach(o),yi=p(Q),ye=r(Q,"P",{});var Wo=d(ye);wi=a(Wo,"Original ProphetNet code can be found "),Yt=r(Wo,"A",{href:!0,rel:!0});var Sl=d(Yt);Pi=a(Sl,"here"),Sl.forEach(o),Ni=a(Wo,`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),Bn=r(Wo,"CODE",{});var Dl=d(Bn);$i=a(Dl,"convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),Dl.forEach(o),qi=a(Wo,"."),Wo.forEach(o),zi=p(Q),Kt=r(Q,"P",{});var os=d(Kt);Fi=a(os,"This model is a PyTorch "),Qt=r(os,"A",{href:!0,rel:!0});var Ll=d(Qt);xi=a(Ll,"torch.nn.Module"),Ll.forEach(o),Ei=a(os,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),os.forEach(o),Mi=p(Q),G=r(Q,"DIV",{class:!0});var ot=d(G);T(Xt.$$.fragment,ot),Oi=p(ot),we=r(ot,"P",{});var Ho=d(we);Ci=a(Ho,"The "),Fo=r(Ho,"A",{href:!0});var jl=d(Fo);Si=a(jl,"ProphetNetForConditionalGeneration"),jl.forEach(o),Di=a(Ho," forward method, overrides the "),Gn=r(Ho,"CODE",{});var Al=d(Gn);Li=a(Al,"__call__"),Al.forEach(o),ji=a(Ho," special method."),Ho.forEach(o),Ai=p(ot),T(Ve.$$.fragment,ot),Ii=p(ot),T(Re.$$.fragment,ot),ot.forEach(o),Q.forEach(o),zr=p(t),Pe=r(t,"H2",{class:!0});var ns=d(Pe);Je=r(ns,"A",{id:!0,class:!0,href:!0});var Il=d(Je);Wn=r(Il,"SPAN",{});var Bl=d(Wn);T(Zt.$$.fragment,Bl),Bl.forEach(o),Il.forEach(o),Bi=p(ns),Hn=r(ns,"SPAN",{});var Gl=d(Hn);Gi=a(Gl,"ProphetNetForCausalLM"),Gl.forEach(o),ns.forEach(o),Fr=p(t),C=r(t,"DIV",{class:!0});var X=d(C);T(eo.$$.fragment,X),Wi=p(X),to=r(X,"P",{});var rs=d(to);Hi=a(rs,`The standalone decoder part of the ProphetNetModel with a lm head on top. The model can be used for causal language modeling.
This model inherits from `),xo=r(rs,"A",{href:!0});var Wl=d(xo);Ui=a(Wl,"PreTrainedModel"),Wl.forEach(o),Vi=a(rs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rs.forEach(o),Ri=p(X),Ne=r(X,"P",{});var Uo=d(Ne);Ji=a(Uo,"Original ProphetNet code can be found "),oo=r(Uo,"A",{href:!0,rel:!0});var Hl=d(oo);Yi=a(Hl,"here"),Hl.forEach(o),Ki=a(Uo,`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),Un=r(Uo,"CODE",{});var Ul=d(Un);Qi=a(Ul,"convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),Ul.forEach(o),Xi=a(Uo,"."),Uo.forEach(o),Zi=p(X),no=r(X,"P",{});var ss=d(no);ec=a(ss,"This model is a PyTorch "),ro=r(ss,"A",{href:!0,rel:!0});var Vl=d(ro);tc=a(Vl,"torch.nn.Module"),Vl.forEach(o),oc=a(ss,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),ss.forEach(o),nc=p(X),W=r(X,"DIV",{class:!0});var nt=d(W);T(so.$$.fragment,nt),rc=p(nt),$e=r(nt,"P",{});var Vo=d($e);sc=a(Vo,"The "),Eo=r(Vo,"A",{href:!0});var Rl=d(Eo);ac=a(Rl,"ProphetNetForCausalLM"),Rl.forEach(o),dc=a(Vo," forward method, overrides the "),Vn=r(Vo,"CODE",{});var Jl=d(Vn);ic=a(Jl,"__call__"),Jl.forEach(o),cc=a(Vo," special method."),Vo.forEach(o),lc=p(nt),T(Ye.$$.fragment,nt),pc=p(nt),T(Ke.$$.fragment,nt),nt.forEach(o),X.forEach(o),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(hp)),c(f,"id","prophetnet"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#prophetnet"),c(g,"class","relative group"),c(rt,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(rt,"rel","nofollow"),c(qe,"id","overview"),c(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qe,"href","#overview"),c(te,"class","relative group"),c(at,"href","https://arxiv.org/abs/2001.04063"),c(at,"rel","nofollow"),c(dt,"href","https://github.com/microsoft/ProphetNet"),c(dt,"rel","nofollow"),c(xe,"id","transformers.ProphetNetConfig"),c(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xe,"href","#transformers.ProphetNetConfig"),c(oe,"class","relative group"),c(mo,"href","/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetModel"),c(lt,"href","https://huggingface.co/microsoft/prophetnet-large-uncased"),c(lt,"rel","nofollow"),c(fo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(_o,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ee,"id","transformers.ProphetNetTokenizer"),c(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ee,"href","#transformers.ProphetNetTokenizer"),c(se,"class","relative group"),c(go,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Se,"id","transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput"),c(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Se,"href","#transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput"),c(de,"class","relative group"),c(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(De,"id","transformers.ProphetNetModel"),c(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(De,"href","#transformers.ProphetNetModel"),c(he,"class","relative group"),c(bo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(zt,"href","https://github.com/microsoft/ProphetNet"),c(zt,"rel","nofollow"),c(xt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(xt,"rel","nofollow"),c(To,"href","/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetModel"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ae,"id","transformers.ProphetNetEncoder"),c(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ae,"href","#transformers.ProphetNetEncoder"),c(fe,"class","relative group"),c(yo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(St,"href","https://github.com/microsoft/ProphetNet"),c(St,"rel","nofollow"),c(Lt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Lt,"rel","nofollow"),c(wo,"href","/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetEncoder"),c(Po,"href","/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetEncoder"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ge,"id","transformers.ProphetNetDecoder"),c(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ge,"href","#transformers.ProphetNetDecoder"),c(ve,"class","relative group"),c(No,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Gt,"href","https://github.com/microsoft/ProphetNet"),c(Gt,"rel","nofollow"),c(Ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ht,"rel","nofollow"),c($o,"href","/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetEncoder"),c(qo,"href","/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetDecoder"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ue,"id","transformers.ProphetNetForConditionalGeneration"),c(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ue,"href","#transformers.ProphetNetForConditionalGeneration"),c(Te,"class","relative group"),c(zo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Yt,"href","https://github.com/microsoft/ProphetNet"),c(Yt,"rel","nofollow"),c(Qt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Qt,"rel","nofollow"),c(Fo,"href","/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetForConditionalGeneration"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Je,"id","transformers.ProphetNetForCausalLM"),c(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Je,"href","#transformers.ProphetNetForCausalLM"),c(Pe,"class","relative group"),c(xo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(oo,"href","https://github.com/microsoft/ProphetNet"),c(oo,"rel","nofollow"),c(ro,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ro,"rel","nofollow"),c(Eo,"href","/docs/transformers/main/en/model_doc/prophetnet#transformers.ProphetNetForCausalLM"),c(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,h),_(t,k,u),_(t,g,u),e(g,f),e(f,v),y(i,v,null),e(g,m),e(g,q),e(q,as),_(t,or,u),_(t,ee,u),e(ee,Ko),e(Ko,ds),e(ee,is),e(ee,rt),e(rt,cs),e(ee,ls),_(t,nr,u),_(t,te,u),e(te,qe),e(qe,Qo),y(st,Qo,null),e(te,ps),e(te,Xo),e(Xo,hs),_(t,rr,u),_(t,ze,u),e(ze,us),e(ze,at),e(at,ms),e(ze,fs),_(t,sr,u),_(t,co,u),e(co,_s),_(t,ar,u),_(t,lo,u),e(lo,gs),_(t,dr,u),_(t,po,u),e(po,Zo),e(Zo,vs),_(t,ir,u),_(t,ho,u),e(ho,ks),_(t,cr,u),_(t,uo,u),e(uo,en),e(en,bs),_(t,lr,u),_(t,Fe,u),e(Fe,Ts),e(Fe,dt),e(dt,ys),e(Fe,ws),_(t,pr,u),_(t,oe,u),e(oe,xe),e(xe,tn),y(it,tn,null),e(oe,Ps),e(oe,on),e(on,Ns),_(t,hr,u),_(t,V,u),y(ct,V,null),e(V,$s),e(V,ne),e(ne,qs),e(ne,mo),e(mo,zs),e(ne,Fs),e(ne,lt),e(lt,xs),e(ne,Es),e(V,Ms),e(V,re),e(re,Os),e(re,fo),e(fo,Cs),e(re,Ss),e(re,_o),e(_o,Ds),e(re,Ls),_(t,ur,u),_(t,se,u),e(se,Ee),e(Ee,nn),y(pt,nn,null),e(se,js),e(se,rn),e(rn,As),_(t,mr,u),_(t,F,u),y(ht,F,null),e(F,Is),e(F,sn),e(sn,Bs),e(F,Gs),e(F,ut),e(ut,Ws),e(ut,go),e(go,Hs),e(ut,Us),e(F,Vs),e(F,R),y(mt,R,null),e(R,Rs),e(R,an),e(an,Js),e(R,Ys),e(R,ft),e(ft,vo),e(vo,Ks),e(vo,dn),e(dn,Qs),e(ft,Xs),e(ft,ko),e(ko,Zs),e(ko,cn),e(cn,ea),e(F,ta),e(F,Me),y(_t,Me,null),e(Me,oa),e(Me,ln),e(ln,na),e(F,ra),e(F,j),y(gt,j,null),e(j,sa),e(j,pn),e(pn,aa),e(j,da),y(Oe,j,null),e(j,ia),e(j,ae),e(ae,ca),e(ae,hn),e(hn,la),e(ae,pa),e(ae,un),e(un,ha),e(ae,ua),e(F,ma),e(F,Ce),y(vt,Ce,null),e(Ce,fa),e(Ce,kt),e(kt,_a),e(kt,mn),e(mn,ga),e(kt,va),_(t,fr,u),_(t,de,u),e(de,Se),e(Se,fn),y(bt,fn,null),e(de,ka),e(de,_n),e(_n,ba),_(t,_r,u),_(t,ie,u),y(Tt,ie,null),e(ie,Ta),e(ie,gn),e(gn,ya),_(t,gr,u),_(t,ce,u),y(yt,ce,null),e(ce,wa),e(ce,vn),e(vn,Pa),_(t,vr,u),_(t,le,u),y(wt,le,null),e(le,Na),e(le,kn),e(kn,$a),_(t,kr,u),_(t,pe,u),y(Pt,pe,null),e(pe,qa),e(pe,bn),e(bn,za),_(t,br,u),_(t,he,u),e(he,De),e(De,Tn),y(Nt,Tn,null),e(he,Fa),e(he,yn),e(yn,xa),_(t,Tr,u),_(t,M,u),y($t,M,null),e(M,Ea),e(M,qt),e(qt,Ma),e(qt,bo),e(bo,Oa),e(qt,Ca),e(M,Sa),e(M,ue),e(ue,Da),e(ue,zt),e(zt,La),e(ue,ja),e(ue,wn),e(wn,Aa),e(ue,Ia),e(M,Ba),e(M,Ft),e(Ft,Ga),e(Ft,xt),e(xt,Wa),e(Ft,Ha),e(M,Ua),e(M,A),y(Et,A,null),e(A,Va),e(A,me),e(me,Ra),e(me,To),e(To,Ja),e(me,Ya),e(me,Pn),e(Pn,Ka),e(me,Qa),e(A,Xa),y(Le,A,null),e(A,Za),y(je,A,null),_(t,yr,u),_(t,fe,u),e(fe,Ae),e(Ae,Nn),y(Mt,Nn,null),e(fe,ed),e(fe,$n),e($n,td),_(t,wr,u),_(t,x,u),y(Ot,x,null),e(x,od),e(x,Ct),e(Ct,nd),e(Ct,yo),e(yo,rd),e(Ct,sd),e(x,ad),e(x,_e),e(_e,dd),e(_e,St),e(St,id),e(_e,cd),e(_e,qn),e(qn,ld),e(_e,pd),e(x,hd),e(x,Dt),e(Dt,ud),e(Dt,Lt),e(Lt,md),e(Dt,fd),e(x,_d),e(x,D),e(D,gd),e(D,zn),e(zn,vd),e(D,kd),e(D,Fn),e(Fn,bd),e(D,Td),e(D,xn),e(xn,yd),e(D,wd),e(D,wo),e(wo,Pd),e(D,Nd),e(x,$d),e(x,I),y(jt,I,null),e(I,qd),e(I,ge),e(ge,zd),e(ge,Po),e(Po,Fd),e(ge,xd),e(ge,En),e(En,Ed),e(ge,Md),e(I,Od),y(Ie,I,null),e(I,Cd),y(Be,I,null),_(t,Pr,u),_(t,ve,u),e(ve,Ge),e(Ge,Mn),y(At,Mn,null),e(ve,Sd),e(ve,On),e(On,Dd),_(t,Nr,u),_(t,E,u),y(It,E,null),e(E,Ld),e(E,Bt),e(Bt,jd),e(Bt,No),e(No,Ad),e(Bt,Id),e(E,Bd),e(E,ke),e(ke,Gd),e(ke,Gt),e(Gt,Wd),e(ke,Hd),e(ke,Cn),e(Cn,Ud),e(ke,Vd),e(E,Rd),e(E,Wt),e(Wt,Jd),e(Wt,Ht),e(Ht,Yd),e(Wt,Kd),e(E,Qd),e(E,L),e(L,Xd),e(L,Sn),e(Sn,Zd),e(L,ei),e(L,Dn),e(Dn,ti),e(L,oi),e(L,Ln),e(Ln,ni),e(L,ri),e(L,$o),e($o,si),e(L,ai),e(E,di),e(E,B),y(Ut,B,null),e(B,ii),e(B,be),e(be,ci),e(be,qo),e(qo,li),e(be,pi),e(be,jn),e(jn,hi),e(be,ui),e(B,mi),y(We,B,null),e(B,fi),y(He,B,null),_(t,$r,u),_(t,Te,u),e(Te,Ue),e(Ue,An),y(Vt,An,null),e(Te,_i),e(Te,In),e(In,gi),_(t,qr,u),_(t,O,u),y(Rt,O,null),e(O,vi),e(O,Jt),e(Jt,ki),e(Jt,zo),e(zo,bi),e(Jt,Ti),e(O,yi),e(O,ye),e(ye,wi),e(ye,Yt),e(Yt,Pi),e(ye,Ni),e(ye,Bn),e(Bn,$i),e(ye,qi),e(O,zi),e(O,Kt),e(Kt,Fi),e(Kt,Qt),e(Qt,xi),e(Kt,Ei),e(O,Mi),e(O,G),y(Xt,G,null),e(G,Oi),e(G,we),e(we,Ci),e(we,Fo),e(Fo,Si),e(we,Di),e(we,Gn),e(Gn,Li),e(we,ji),e(G,Ai),y(Ve,G,null),e(G,Ii),y(Re,G,null),_(t,zr,u),_(t,Pe,u),e(Pe,Je),e(Je,Wn),y(Zt,Wn,null),e(Pe,Bi),e(Pe,Hn),e(Hn,Gi),_(t,Fr,u),_(t,C,u),y(eo,C,null),e(C,Wi),e(C,to),e(to,Hi),e(to,xo),e(xo,Ui),e(to,Vi),e(C,Ri),e(C,Ne),e(Ne,Ji),e(Ne,oo),e(oo,Yi),e(Ne,Ki),e(Ne,Un),e(Un,Qi),e(Ne,Xi),e(C,Zi),e(C,no),e(no,ec),e(no,ro),e(ro,tc),e(no,oc),e(C,nc),e(C,W),y(so,W,null),e(W,rc),e(W,$e),e($e,sc),e($e,Eo),e(Eo,ac),e($e,dc),e($e,Vn),e(Vn,ic),e($e,cc),e(W,lc),y(Ye,W,null),e(W,pc),y(Ke,W,null),xr=!0},p(t,[u]){const ao={};u&2&&(ao.$$scope={dirty:u,ctx:t}),Oe.$set(ao);const Rn={};u&2&&(Rn.$$scope={dirty:u,ctx:t}),Le.$set(Rn);const Jn={};u&2&&(Jn.$$scope={dirty:u,ctx:t}),je.$set(Jn);const Yn={};u&2&&(Yn.$$scope={dirty:u,ctx:t}),Ie.$set(Yn);const Qe={};u&2&&(Qe.$$scope={dirty:u,ctx:t}),Be.$set(Qe);const Kn={};u&2&&(Kn.$$scope={dirty:u,ctx:t}),We.$set(Kn);const Qn={};u&2&&(Qn.$$scope={dirty:u,ctx:t}),He.$set(Qn);const io={};u&2&&(io.$$scope={dirty:u,ctx:t}),Ve.$set(io);const Xn={};u&2&&(Xn.$$scope={dirty:u,ctx:t}),Re.$set(Xn);const Zn={};u&2&&(Zn.$$scope={dirty:u,ctx:t}),Ye.$set(Zn);const er={};u&2&&(er.$$scope={dirty:u,ctx:t}),Ke.$set(er)},i(t){xr||(w(i.$$.fragment,t),w(st.$$.fragment,t),w(it.$$.fragment,t),w(ct.$$.fragment,t),w(pt.$$.fragment,t),w(ht.$$.fragment,t),w(mt.$$.fragment,t),w(_t.$$.fragment,t),w(gt.$$.fragment,t),w(Oe.$$.fragment,t),w(vt.$$.fragment,t),w(bt.$$.fragment,t),w(Tt.$$.fragment,t),w(yt.$$.fragment,t),w(wt.$$.fragment,t),w(Pt.$$.fragment,t),w(Nt.$$.fragment,t),w($t.$$.fragment,t),w(Et.$$.fragment,t),w(Le.$$.fragment,t),w(je.$$.fragment,t),w(Mt.$$.fragment,t),w(Ot.$$.fragment,t),w(jt.$$.fragment,t),w(Ie.$$.fragment,t),w(Be.$$.fragment,t),w(At.$$.fragment,t),w(It.$$.fragment,t),w(Ut.$$.fragment,t),w(We.$$.fragment,t),w(He.$$.fragment,t),w(Vt.$$.fragment,t),w(Rt.$$.fragment,t),w(Xt.$$.fragment,t),w(Ve.$$.fragment,t),w(Re.$$.fragment,t),w(Zt.$$.fragment,t),w(eo.$$.fragment,t),w(so.$$.fragment,t),w(Ye.$$.fragment,t),w(Ke.$$.fragment,t),xr=!0)},o(t){P(i.$$.fragment,t),P(st.$$.fragment,t),P(it.$$.fragment,t),P(ct.$$.fragment,t),P(pt.$$.fragment,t),P(ht.$$.fragment,t),P(mt.$$.fragment,t),P(_t.$$.fragment,t),P(gt.$$.fragment,t),P(Oe.$$.fragment,t),P(vt.$$.fragment,t),P(bt.$$.fragment,t),P(Tt.$$.fragment,t),P(yt.$$.fragment,t),P(wt.$$.fragment,t),P(Pt.$$.fragment,t),P(Nt.$$.fragment,t),P($t.$$.fragment,t),P(Et.$$.fragment,t),P(Le.$$.fragment,t),P(je.$$.fragment,t),P(Mt.$$.fragment,t),P(Ot.$$.fragment,t),P(jt.$$.fragment,t),P(Ie.$$.fragment,t),P(Be.$$.fragment,t),P(At.$$.fragment,t),P(It.$$.fragment,t),P(Ut.$$.fragment,t),P(We.$$.fragment,t),P(He.$$.fragment,t),P(Vt.$$.fragment,t),P(Rt.$$.fragment,t),P(Xt.$$.fragment,t),P(Ve.$$.fragment,t),P(Re.$$.fragment,t),P(Zt.$$.fragment,t),P(eo.$$.fragment,t),P(so.$$.fragment,t),P(Ye.$$.fragment,t),P(Ke.$$.fragment,t),xr=!1},d(t){o(h),t&&o(k),t&&o(g),N(i),t&&o(or),t&&o(ee),t&&o(nr),t&&o(te),N(st),t&&o(rr),t&&o(ze),t&&o(sr),t&&o(co),t&&o(ar),t&&o(lo),t&&o(dr),t&&o(po),t&&o(ir),t&&o(ho),t&&o(cr),t&&o(uo),t&&o(lr),t&&o(Fe),t&&o(pr),t&&o(oe),N(it),t&&o(hr),t&&o(V),N(ct),t&&o(ur),t&&o(se),N(pt),t&&o(mr),t&&o(F),N(ht),N(mt),N(_t),N(gt),N(Oe),N(vt),t&&o(fr),t&&o(de),N(bt),t&&o(_r),t&&o(ie),N(Tt),t&&o(gr),t&&o(ce),N(yt),t&&o(vr),t&&o(le),N(wt),t&&o(kr),t&&o(pe),N(Pt),t&&o(br),t&&o(he),N(Nt),t&&o(Tr),t&&o(M),N($t),N(Et),N(Le),N(je),t&&o(yr),t&&o(fe),N(Mt),t&&o(wr),t&&o(x),N(Ot),N(jt),N(Ie),N(Be),t&&o(Pr),t&&o(ve),N(At),t&&o(Nr),t&&o(E),N(It),N(Ut),N(We),N(He),t&&o($r),t&&o(Te),N(Vt),t&&o(qr),t&&o(O),N(Rt),N(Xt),N(Ve),N(Re),t&&o(zr),t&&o(Pe),N(Zt),t&&o(Fr),t&&o(C),N(eo),N(so),N(Ye),N(Ke)}}}const hp={local:"prophetnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.ProphetNetConfig",title:"ProphetNetConfig"},{local:"transformers.ProphetNetTokenizer",title:"ProphetNetTokenizer"},{local:"transformers.models.prophetnet.modeling_prophetnet.ProphetNetSeq2SeqLMOutput",title:"ProphetNet specific outputs"},{local:"transformers.ProphetNetModel",title:"ProphetNetModel"},{local:"transformers.ProphetNetEncoder",title:"ProphetNetEncoder"},{local:"transformers.ProphetNetDecoder",title:"ProphetNetDecoder"},{local:"transformers.ProphetNetForConditionalGeneration",title:"ProphetNetForConditionalGeneration"},{local:"transformers.ProphetNetForCausalLM",title:"ProphetNetForCausalLM"}],title:"ProphetNet"};function up($){return Zl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class bp extends Yl{constructor(h){super();Kl(this,h,up,pp,Ql,{})}}export{bp as default,hp as metadata};
