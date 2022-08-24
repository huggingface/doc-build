import{S as Gr,i as Wr,s as Br,e as n,k as c,w as k,t as r,M as Hr,c as s,d as o,m as h,a,x as v,h as i,b as l,G as e,g as u,y as b,q as y,o as w,B as T,v as Ur,L as nn}from"../../chunks/vendor-hf-doc-builder.js";import{T as Nr}from"../../chunks/Tip-hf-doc-builder.js";import{D as W}from"../../chunks/Docstring-hf-doc-builder.js";import{C as qt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as at}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as on}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Vr(E){let m,$,g,f,M;return f=new qt({props:{code:`from transformers import M2M100Model, M2M100Config

# Initializing a M2M100 facebook/m2m100_418M style configuration
configuration = M2M100Config()

# Initializing a model from the facebook/m2m100_418M style configuration
model = M2M100Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Model, M2M100Config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a M2M100 facebook/m2m100_418M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = M2M100Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/m2m100_418M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){m=n("p"),$=r("Example:"),g=c(),k(f.$$.fragment)},l(d){m=s(d,"P",{});var _=a(m);$=i(_,"Example:"),_.forEach(o),g=h(d),v(f.$$.fragment,d)},m(d,_){u(d,m,_),e(m,$),u(d,g,_),b(f,d,_),M=!0},p:nn,i(d){M||(y(f.$$.fragment,d),M=!0)},o(d){w(f.$$.fragment,d),M=!1},d(d){d&&o(m),d&&o(g),T(f,d)}}}function Xr(E){let m,$,g,f,M;return f=new qt({props:{code:`from transformers import M2M100Tokenizer

tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M", src_lang="en", tgt_lang="ro")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids
model(**model_inputs, labels=labels)  # should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>, src_lang=<span class="hljs-string">&quot;en&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**model_inputs, labels=labels)  <span class="hljs-comment"># should work</span>`}}),{c(){m=n("p"),$=r("Examples:"),g=c(),k(f.$$.fragment)},l(d){m=s(d,"P",{});var _=a(m);$=i(_,"Examples:"),_.forEach(o),g=h(d),v(f.$$.fragment,d)},m(d,_){u(d,m,_),e(m,$),u(d,g,_),b(f,d,_),M=!0},p:nn,i(d){M||(y(f.$$.fragment,d),M=!0)},o(d){w(f.$$.fragment,d),M=!1},d(d){d&&o(m),d&&o(g),T(f,d)}}}function Rr(E){let m,$,g,f,M;return{c(){m=n("p"),$=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=r("Module"),M=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){m=s(d,"P",{});var _=a(m);$=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(_,"CODE",{});var I=a(g);f=i(I,"Module"),I.forEach(o),M=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(d,_){u(d,m,_),e(m,$),e(m,g),e(g,f),e(m,M)},d(d){d&&o(m)}}}function Jr(E){let m,$,g,f,M;return f=new qt({props:{code:`from transformers import M2M100Tokenizer, M2M100Model
import torch

tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M")
model = M2M100Model.from_pretrained("facebook/m2m100_418M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Tokenizer, M2M100Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100Model.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){m=n("p"),$=r("Example:"),g=c(),k(f.$$.fragment)},l(d){m=s(d,"P",{});var _=a(m);$=i(_,"Example:"),_.forEach(o),g=h(d),v(f.$$.fragment,d)},m(d,_){u(d,m,_),e(m,$),u(d,g,_),b(f,d,_),M=!0},p:nn,i(d){M||(y(f.$$.fragment,d),M=!0)},o(d){w(f.$$.fragment,d),M=!1},d(d){d&&o(m),d&&o(g),T(f,d)}}}function Kr(E){let m,$,g,f,M;return{c(){m=n("p"),$=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=r("Module"),M=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){m=s(d,"P",{});var _=a(m);$=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(_,"CODE",{});var I=a(g);f=i(I,"Module"),I.forEach(o),M=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(d,_){u(d,m,_),e(m,$),e(m,g),e(g,f),e(m,M)},d(d){d&&o(m)}}}function Zr(E){let m,$,g,f,M;return f=new qt({props:{code:`from transformers import M2M100Tokenizer, M2M100ForConditionalGeneration

model = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_418M")
tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M")

text_to_translate = "Life is like a box of chocolates"
model_inputs = tokenizer(text_to_translate, return_tensors="pt")

# translate to French
gen_tokens = model.generate(**model_inputs, forced_bos_token_id=tokenizer.get_lang_id("fr"))
print(tokenizer.batch_decode(gen_tokens, skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Tokenizer, M2M100ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text_to_translate = <span class="hljs-string">&quot;Life is like a box of chocolates&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(text_to_translate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># translate to French</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(**model_inputs, forced_bos_token_id=tokenizer.get_lang_id(<span class="hljs-string">&quot;fr&quot;</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(gen_tokens, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),{c(){m=n("p"),$=r("Translation example:"),g=c(),k(f.$$.fragment)},l(d){m=s(d,"P",{});var _=a(m);$=i(_,"Translation example:"),_.forEach(o),g=h(d),v(f.$$.fragment,d)},m(d,_){u(d,m,_),e(m,$),u(d,g,_),b(f,d,_),M=!0},p:nn,i(d){M||(y(f.$$.fragment,d),M=!0)},o(d){w(f.$$.fragment,d),M=!1},d(d){d&&o(m),d&&o(g),T(f,d)}}}function Qr(E){let m,$,g,f,M,d,_,I,sn,fo,B,Y,xt,be,an,Et,rn,_o,ee,dn,ye,ln,cn,go,rt,hn,Mo,it,Ct,pn,ko,te,mn,we,un,fn,vo,H,oe,jt,Te,_n,Ft,gn,bo,O,Mn,Pt,kn,vn,Ot,bn,yn,St,wn,Tn,yo,C,$n,dt,zn,qn,Lt,xn,En,At,Cn,jn,Dt,Fn,Pn,wo,lt,It,On,To,$e,$o,ct,ze,Nt,Sn,Ln,x,An,Gt,Dn,In,Wt,Nn,Gn,Bt,Wn,Bn,Ht,Hn,Un,Ut,Vn,Xn,zo,qe,qo,U,ne,Vt,xe,Rn,Xt,Jn,xo,j,Ee,Kn,V,Zn,ht,Qn,Yn,Ce,es,ts,os,X,ns,pt,ss,as,mt,rs,is,ds,se,Eo,R,ae,Rt,je,ls,Jt,cs,Co,z,Fe,hs,Pe,ps,Oe,ms,us,fs,Se,_s,ut,gs,Ms,ks,re,vs,S,Le,bs,Ae,ys,Kt,ws,Ts,$s,De,Ie,Zt,zs,qs,Qt,xs,Es,Ne,Yt,Cs,js,eo,Fs,Ps,to,Os,Ss,ie,Ge,Ls,We,As,oo,Ds,Is,Ns,N,Be,Gs,ft,Ws,_t,Bs,Hs,no,Us,Vs,gt,He,jo,J,de,so,Ue,Xs,ao,Rs,Fo,F,Ve,Js,Xe,Ks,Mt,Zs,Qs,Ys,Re,ea,Je,ta,oa,na,L,Ke,sa,K,aa,kt,ra,ia,ro,da,la,ca,le,ha,ce,Po,Z,he,io,Ze,pa,lo,ma,Oo,P,Qe,ua,Ye,fa,vt,_a,ga,Ma,et,ka,tt,va,ba,ya,A,ot,wa,Q,Ta,bt,$a,za,co,qa,xa,Ea,pe,Ca,me,So;return d=new at({}),be=new at({}),Te=new at({}),$e=new qt({props:{code:`from transformers import M2M100Config, M2M100ForConditionalGeneration, M2M100Tokenizer

model = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_418M")
tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M", src_lang="en", tgt_lang="fr")

src_text = "Life is like a box of chocolates."
tgt_text = "La vie est comme une bo\xEEte de chocolat."

model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids

loss = model(**model_inputs, labels=labels)  # forward pass`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Config, M2M100ForConditionalGeneration, M2M100Tokenizer

model = M2M100ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>, src_lang=<span class="hljs-string">&quot;en&quot;</span>, tgt_lang=<span class="hljs-string">&quot;fr&quot;</span>)

src_text = <span class="hljs-string">&quot;Life is like a box of chocolates.&quot;</span>
tgt_text = <span class="hljs-string">&quot;La vie est comme une bo\xEEte de chocolat.&quot;</span>

model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

loss = model(**model_inputs, labels=labels)  <span class="hljs-comment"># forward pass</span>`}}),qe=new qt({props:{code:`from transformers import M2M100ForConditionalGeneration, M2M100Tokenizer

hi_text = "\u091C\u0940\u0935\u0928 \u090F\u0915 \u091A\u0949\u0915\u0932\u0947\u091F \u092C\u0949\u0915\u094D\u0938 \u0915\u0940 \u0924\u0930\u0939 \u0939\u0948\u0964"
chinese_text = "\u751F\u6D3B\u5C31\u50CF\u4E00\u76D2\u5DE7\u514B\u529B\u3002"

model = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_418M")
tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M")

# translate Hindi to French
tokenizer.src_lang = "hi"
encoded_hi = tokenizer(hi_text, return_tensors="pt")
generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.get_lang_id("fr"))
tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)

# translate Chinese to English
tokenizer.src_lang = "zh"
encoded_zh = tokenizer(chinese_text, return_tensors="pt")
generated_tokens = model.generate(**encoded_zh, forced_bos_token_id=tokenizer.get_lang_id("en"))
tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100ForConditionalGeneration, M2M100Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>hi_text = <span class="hljs-string">&quot;\u091C\u0940\u0935\u0928 \u090F\u0915 \u091A\u0949\u0915\u0932\u0947\u091F \u092C\u0949\u0915\u094D\u0938 \u0915\u0940 \u0924\u0930\u0939 \u0939\u0948\u0964&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>chinese_text = <span class="hljs-string">&quot;\u751F\u6D3B\u5C31\u50CF\u4E00\u76D2\u5DE7\u514B\u529B\u3002&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># translate Hindi to French</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.src_lang = <span class="hljs-string">&quot;hi&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_hi = tokenizer(hi_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.get_lang_id(<span class="hljs-string">&quot;fr&quot;</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&quot;La vie est comme une bo\xEEte de chocolat.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># translate Chinese to English</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.src_lang = <span class="hljs-string">&quot;zh&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_zh = tokenizer(chinese_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_tokens = model.generate(**encoded_zh, forced_bos_token_id=tokenizer.get_lang_id(<span class="hljs-string">&quot;en&quot;</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&quot;Life is like a box of chocolate.&quot;</span>`}}),xe=new at({}),Ee=new W({props:{name:"class transformers.M2M100Config",anchor:"transformers.M2M100Config",parameters:[{name:"vocab_size",val:" = 128112"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.05"},{name:"decoder_layerdrop",val:" = 0.05"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.M2M100Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the M2M100 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.2/en/model_doc/m2m_100#transformers.M2M100Model">M2M100Model</a> or`,name:"vocab_size"},{anchor:"transformers.M2M100Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.M2M100Config.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.M2M100Config.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.M2M100Config.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.M2M100Config.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.M2M100Config.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.M2M100Config.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.M2M100Config.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.M2M100Config.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.M2M100Config.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.M2M100Config.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.M2M100Config.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.M2M100Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.M2M100Config.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.M2M100Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/m2m_100/configuration_m2m_100.py#L34"}}),se=new on({props:{anchor:"transformers.M2M100Config.example",$$slots:{default:[Vr]},$$scope:{ctx:E}}}),je=new at({}),Fe=new W({props:{name:"class transformers.M2M100Tokenizer",anchor:"transformers.M2M100Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"spm_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"unk_token",val:" = '<unk>'"},{name:"language_codes",val:" = 'm2m100'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"num_madeup_words",val:" = 8"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.M2M100Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.M2M100Tokenizer.spm_file",description:`<strong>spm_file</strong> (<code>str</code>) &#x2014;
Path to <a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a .spm extension) that
contains the vocabulary.`,name:"spm_file"},{anchor:"transformers.M2M100Tokenizer.src_lang",description:`<strong>src_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"src_lang"},{anchor:"transformers.M2M100Tokenizer.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.M2M100Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.M2M100Tokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.M2M100Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.M2M100Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.M2M100Tokenizer.language_codes",description:`<strong>language_codes</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;m2m100&quot;</code>) &#x2014;
What language codes to use. Should be one of <code>&quot;m2m100&quot;</code> or <code>&quot;wmt21&quot;</code>.`,name:"language_codes"},{anchor:"transformers.M2M100Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/m2m_100/tokenization_m2m_100.py#L65"}}),re=new on({props:{anchor:"transformers.M2M100Tokenizer.example",$$slots:{default:[Xr]},$$scope:{ctx:E}}}),Le=new W({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/m2m_100/tokenization_m2m_100.py#L258",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ge=new W({props:{name:"get_special_tokens_mask",anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/m2m_100/tokenization_m2m_100.py#L228",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Be=new W({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.M2M100Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.M2M100Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/tokenization_utils_base.py#L2918",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),He=new W({props:{name:"save_vocabulary",anchor:"transformers.M2M100Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/m2m_100/tokenization_m2m_100.py#L304"}}),Ue=new at({}),Ve=new W({props:{name:"class transformers.M2M100Model",anchor:"transformers.M2M100Model",parameters:[{name:"config",val:": M2M100Config"}],parametersDescription:[{anchor:"transformers.M2M100Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/m2m_100#transformers.M2M100Config">M2M100Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/m2m_100/modeling_m2m_100.py#L1128"}}),Ke=new W({props:{name:"forward",anchor:"transformers.M2M100Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.M2M100Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.M2M100Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.M2M100Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>M2M100 uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.M2M100Model.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.M2M100Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.M2M100Model.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.M2M100Model.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.M2M100Model.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.M2M100Model.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.M2M100Model.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.M2M100Model.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.M2M100Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.M2M100Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.M2M100Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/m2m_100/modeling_m2m_100.py#L1155",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/m2m_100#transformers.M2M100Config"
>M2M100Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),le=new Nr({props:{$$slots:{default:[Rr]},$$scope:{ctx:E}}}),ce=new on({props:{anchor:"transformers.M2M100Model.forward.example",$$slots:{default:[Jr]},$$scope:{ctx:E}}}),Ze=new at({}),Qe=new W({props:{name:"class transformers.M2M100ForConditionalGeneration",anchor:"transformers.M2M100ForConditionalGeneration",parameters:[{name:"config",val:": M2M100Config"}],parametersDescription:[{anchor:"transformers.M2M100ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/m2m_100#transformers.M2M100Config">M2M100Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/m2m_100/modeling_m2m_100.py#L1239"}}),ot=new W({props:{name:"forward",anchor:"transformers.M2M100ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.M2M100ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>M2M100 uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/m2m_100/modeling_m2m_100.py#L1277",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/m2m_100#transformers.M2M100Config"
>M2M100Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pe=new Nr({props:{$$slots:{default:[Kr]},$$scope:{ctx:E}}}),me=new on({props:{anchor:"transformers.M2M100ForConditionalGeneration.forward.example",$$slots:{default:[Zr]},$$scope:{ctx:E}}}),{c(){m=n("meta"),$=c(),g=n("h1"),f=n("a"),M=n("span"),k(d.$$.fragment),_=c(),I=n("span"),sn=r("M2M100"),fo=c(),B=n("h2"),Y=n("a"),xt=n("span"),k(be.$$.fragment),an=c(),Et=n("span"),rn=r("Overview"),_o=c(),ee=n("p"),dn=r("The M2M100 model was proposed in "),ye=n("a"),ln=r("Beyond English-Centric Multilingual Machine Translation"),cn=r(` by Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky,
Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, Naman Goyal, Tom Birch, Vitaliy
Liptchinsky, Sergey Edunov, Edouard Grave, Michael Auli, Armand Joulin.`),go=c(),rt=n("p"),hn=r("The abstract from the paper is the following:"),Mo=c(),it=n("p"),Ct=n("em"),pn=r(`Existing work in translation demonstrated the potential of massively multilingual machine translation by training a
single model able to translate between any pair of languages. However, much of this work is English-Centric by training
only on data which was translated from or to English. While this is supported by large sources of training data, it
does not reflect translation needs worldwide. In this work, we create a true Many-to-Many multilingual translation
model that can translate directly between any pair of 100 languages. We build and open source a training dataset that
covers thousands of language directions with supervised data, created through large-scale mining. Then, we explore how
to effectively increase model capacity through a combination of dense scaling and language-specific sparse parameters
to create high quality models. Our focus on non-English-Centric models brings gains of more than 10 BLEU when directly
translating between non-English directions while performing competitively to the best single systems of WMT. We
open-source our scripts so that others may reproduce the data, evaluation, and final M2M-100 model.`),ko=c(),te=n("p"),mn=r("This model was contributed by "),we=n("a"),un=r("valhalla"),fn=r("."),vo=c(),H=n("h3"),oe=n("a"),jt=n("span"),k(Te.$$.fragment),_n=c(),Ft=n("span"),gn=r("Training and Generation"),bo=c(),O=n("p"),Mn=r(`M2M100 is a multilingual encoder-decoder (seq-to-seq) model primarily intended for translation tasks. As the model is
multilingual it expects the sequences in a certain format: A special language id token is used as prefix in both the
source and target text. The source text format is `),Pt=n("code"),kn=r("[lang_code] X [eos]"),vn=r(", where "),Ot=n("code"),bn=r("lang_code"),yn=r(` is source language
id for source text and target language id for target text, with `),St=n("code"),wn=r("X"),Tn=r(" being the source or target text."),yo=c(),C=n("p"),$n=r("The "),dt=n("a"),zn=r("M2M100Tokenizer"),qn=r(" depends on "),Lt=n("code"),xn=r("sentencepiece"),En=r(` so be sure to install it before running the
examples. To install `),At=n("code"),Cn=r("sentencepiece"),jn=r(" run "),Dt=n("code"),Fn=r("pip install sentencepiece"),Pn=r("."),wo=c(),lt=n("ul"),It=n("li"),On=r("Supervised Training"),To=c(),k($e.$$.fragment),$o=c(),ct=n("ul"),ze=n("li"),Nt=n("p"),Sn=r("Generation"),Ln=c(),x=n("p"),An=r("M2M100 uses the "),Gt=n("code"),Dn=r("eos_token_id"),In=r(" as the "),Wt=n("code"),Nn=r("decoder_start_token_id"),Gn=r(` for generation with the target language id
being forced as the first generated token. To force the target language id as the first generated token, pass the
`),Bt=n("em"),Wn=r("forced_bos_token_id"),Bn=r(" parameter to the "),Ht=n("em"),Hn=r("generate"),Un=r(` method. The following example shows how to translate between
Hindi to French and Chinese to English using the `),Ut=n("em"),Vn=r("facebook/m2m100_418M"),Xn=r(" checkpoint."),zo=c(),k(qe.$$.fragment),qo=c(),U=n("h2"),ne=n("a"),Vt=n("span"),k(xe.$$.fragment),Rn=c(),Xt=n("span"),Jn=r("M2M100Config"),xo=c(),j=n("div"),k(Ee.$$.fragment),Kn=c(),V=n("p"),Zn=r("This is the configuration class to store the configuration of a "),ht=n("a"),Qn=r("M2M100Model"),Yn=r(`. It is used to instantiate an
M2M100 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the M2M100
`),Ce=n("a"),es=r("facebook/m2m100_418M"),ts=r(" architecture."),os=c(),X=n("p"),ns=r("Configuration objects inherit from "),pt=n("a"),ss=r("PretrainedConfig"),as=r(` and can be used to control the model outputs. Read the
documentation from `),mt=n("a"),rs=r("PretrainedConfig"),is=r(" for more information."),ds=c(),k(se.$$.fragment),Eo=c(),R=n("h2"),ae=n("a"),Rt=n("span"),k(je.$$.fragment),ls=c(),Jt=n("span"),cs=r("M2M100Tokenizer"),Co=c(),z=n("div"),k(Fe.$$.fragment),hs=c(),Pe=n("p"),ps=r("Construct an M2M100 tokenizer. Based on "),Oe=n("a"),ms=r("SentencePiece"),us=r("."),fs=c(),Se=n("p"),_s=r("This tokenizer inherits from "),ut=n("a"),gs=r("PreTrainedTokenizer"),Ms=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ks=c(),k(re.$$.fragment),vs=c(),S=n("div"),k(Le.$$.fragment),bs=c(),Ae=n("p"),ys=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Kt=n("code"),ws=r("X"),Ts=r(" represents the sequence:"),$s=c(),De=n("ul"),Ie=n("li"),Zt=n("code"),zs=r("input_ids"),qs=r(" (for encoder) "),Qt=n("code"),xs=r("X [eos, src_lang_code]"),Es=c(),Ne=n("li"),Yt=n("code"),Cs=r("decoder_input_ids"),js=r(": (for decoder) "),eo=n("code"),Fs=r("X [eos, tgt_lang_code]"),Ps=c(),to=n("p"),Os=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ss=c(),ie=n("div"),k(Ge.$$.fragment),Ls=c(),We=n("p"),As=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),oo=n("code"),Ds=r("prepare_for_model"),Is=r(" method."),Ns=c(),N=n("div"),k(Be.$$.fragment),Gs=c(),ft=n("p"),Ws=r("Create the token type IDs corresponding to the sequences passed. "),_t=n("a"),Bs=r(`What are token type
IDs?`),Hs=c(),no=n("p"),Us=r("Should be overridden in a subclass if the model has a special way of building those."),Vs=c(),gt=n("div"),k(He.$$.fragment),jo=c(),J=n("h2"),de=n("a"),so=n("span"),k(Ue.$$.fragment),Xs=c(),ao=n("span"),Rs=r("M2M100Model"),Fo=c(),F=n("div"),k(Ve.$$.fragment),Js=c(),Xe=n("p"),Ks=r(`The bare M2M100 Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mt=n("a"),Zs=r("PreTrainedModel"),Qs=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ys=c(),Re=n("p"),ea=r("This model is also a PyTorch "),Je=n("a"),ta=r("torch.nn.Module"),oa=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),na=c(),L=n("div"),k(Ke.$$.fragment),sa=c(),K=n("p"),aa=r("The "),kt=n("a"),ra=r("M2M100Model"),ia=r(" forward method, overrides the "),ro=n("code"),da=r("__call__"),la=r(" special method."),ca=c(),k(le.$$.fragment),ha=c(),k(ce.$$.fragment),Po=c(),Z=n("h2"),he=n("a"),io=n("span"),k(Ze.$$.fragment),pa=c(),lo=n("span"),ma=r("M2M100ForConditionalGeneration"),Oo=c(),P=n("div"),k(Qe.$$.fragment),ua=c(),Ye=n("p"),fa=r(`The M2M100 Model with a language modeling head. Can be used for summarization.
This model inherits from `),vt=n("a"),_a=r("PreTrainedModel"),ga=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ma=c(),et=n("p"),ka=r("This model is also a PyTorch "),tt=n("a"),va=r("torch.nn.Module"),ba=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ya=c(),A=n("div"),k(ot.$$.fragment),wa=c(),Q=n("p"),Ta=r("The "),bt=n("a"),$a=r("M2M100ForConditionalGeneration"),za=r(" forward method, overrides the "),co=n("code"),qa=r("__call__"),xa=r(" special method."),Ea=c(),k(pe.$$.fragment),Ca=c(),k(me.$$.fragment),this.h()},l(t){const p=Hr('[data-svelte="svelte-1phssyn"]',document.head);m=s(p,"META",{name:!0,content:!0}),p.forEach(o),$=h(t),g=s(t,"H1",{class:!0});var nt=a(g);f=s(nt,"A",{id:!0,class:!0,href:!0});var ho=a(f);M=s(ho,"SPAN",{});var po=a(M);v(d.$$.fragment,po),po.forEach(o),ho.forEach(o),_=h(nt),I=s(nt,"SPAN",{});var mo=a(I);sn=i(mo,"M2M100"),mo.forEach(o),nt.forEach(o),fo=h(t),B=s(t,"H2",{class:!0});var st=a(B);Y=s(st,"A",{id:!0,class:!0,href:!0});var uo=a(Y);xt=s(uo,"SPAN",{});var Fa=a(xt);v(be.$$.fragment,Fa),Fa.forEach(o),uo.forEach(o),an=h(st),Et=s(st,"SPAN",{});var Pa=a(Et);rn=i(Pa,"Overview"),Pa.forEach(o),st.forEach(o),_o=h(t),ee=s(t,"P",{});var Lo=a(ee);dn=i(Lo,"The M2M100 model was proposed in "),ye=s(Lo,"A",{href:!0,rel:!0});var Oa=a(ye);ln=i(Oa,"Beyond English-Centric Multilingual Machine Translation"),Oa.forEach(o),cn=i(Lo,` by Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky,
Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, Naman Goyal, Tom Birch, Vitaliy
Liptchinsky, Sergey Edunov, Edouard Grave, Michael Auli, Armand Joulin.`),Lo.forEach(o),go=h(t),rt=s(t,"P",{});var Sa=a(rt);hn=i(Sa,"The abstract from the paper is the following:"),Sa.forEach(o),Mo=h(t),it=s(t,"P",{});var La=a(it);Ct=s(La,"EM",{});var Aa=a(Ct);pn=i(Aa,`Existing work in translation demonstrated the potential of massively multilingual machine translation by training a
single model able to translate between any pair of languages. However, much of this work is English-Centric by training
only on data which was translated from or to English. While this is supported by large sources of training data, it
does not reflect translation needs worldwide. In this work, we create a true Many-to-Many multilingual translation
model that can translate directly between any pair of 100 languages. We build and open source a training dataset that
covers thousands of language directions with supervised data, created through large-scale mining. Then, we explore how
to effectively increase model capacity through a combination of dense scaling and language-specific sparse parameters
to create high quality models. Our focus on non-English-Centric models brings gains of more than 10 BLEU when directly
translating between non-English directions while performing competitively to the best single systems of WMT. We
open-source our scripts so that others may reproduce the data, evaluation, and final M2M-100 model.`),Aa.forEach(o),La.forEach(o),ko=h(t),te=s(t,"P",{});var Ao=a(te);mn=i(Ao,"This model was contributed by "),we=s(Ao,"A",{href:!0,rel:!0});var Da=a(we);un=i(Da,"valhalla"),Da.forEach(o),fn=i(Ao,"."),Ao.forEach(o),vo=h(t),H=s(t,"H3",{class:!0});var Do=a(H);oe=s(Do,"A",{id:!0,class:!0,href:!0});var Ia=a(oe);jt=s(Ia,"SPAN",{});var Na=a(jt);v(Te.$$.fragment,Na),Na.forEach(o),Ia.forEach(o),_n=h(Do),Ft=s(Do,"SPAN",{});var Ga=a(Ft);gn=i(Ga,"Training and Generation"),Ga.forEach(o),Do.forEach(o),bo=h(t),O=s(t,"P",{});var ue=a(O);Mn=i(ue,`M2M100 is a multilingual encoder-decoder (seq-to-seq) model primarily intended for translation tasks. As the model is
multilingual it expects the sequences in a certain format: A special language id token is used as prefix in both the
source and target text. The source text format is `),Pt=s(ue,"CODE",{});var Wa=a(Pt);kn=i(Wa,"[lang_code] X [eos]"),Wa.forEach(o),vn=i(ue,", where "),Ot=s(ue,"CODE",{});var Ba=a(Ot);bn=i(Ba,"lang_code"),Ba.forEach(o),yn=i(ue,` is source language
id for source text and target language id for target text, with `),St=s(ue,"CODE",{});var Ha=a(St);wn=i(Ha,"X"),Ha.forEach(o),Tn=i(ue," being the source or target text."),ue.forEach(o),yo=h(t),C=s(t,"P",{});var G=a(C);$n=i(G,"The "),dt=s(G,"A",{href:!0});var Ua=a(dt);zn=i(Ua,"M2M100Tokenizer"),Ua.forEach(o),qn=i(G," depends on "),Lt=s(G,"CODE",{});var Va=a(Lt);xn=i(Va,"sentencepiece"),Va.forEach(o),En=i(G,` so be sure to install it before running the
examples. To install `),At=s(G,"CODE",{});var Xa=a(At);Cn=i(Xa,"sentencepiece"),Xa.forEach(o),jn=i(G," run "),Dt=s(G,"CODE",{});var Ra=a(Dt);Fn=i(Ra,"pip install sentencepiece"),Ra.forEach(o),Pn=i(G,"."),G.forEach(o),wo=h(t),lt=s(t,"UL",{});var Ja=a(lt);It=s(Ja,"LI",{});var Ka=a(It);On=i(Ka,"Supervised Training"),Ka.forEach(o),Ja.forEach(o),To=h(t),v($e.$$.fragment,t),$o=h(t),ct=s(t,"UL",{});var Za=a(ct);ze=s(Za,"LI",{});var Io=a(ze);Nt=s(Io,"P",{});var Qa=a(Nt);Sn=i(Qa,"Generation"),Qa.forEach(o),Ln=h(Io),x=s(Io,"P",{});var D=a(x);An=i(D,"M2M100 uses the "),Gt=s(D,"CODE",{});var Ya=a(Gt);Dn=i(Ya,"eos_token_id"),Ya.forEach(o),In=i(D," as the "),Wt=s(D,"CODE",{});var er=a(Wt);Nn=i(er,"decoder_start_token_id"),er.forEach(o),Gn=i(D,` for generation with the target language id
being forced as the first generated token. To force the target language id as the first generated token, pass the
`),Bt=s(D,"EM",{});var tr=a(Bt);Wn=i(tr,"forced_bos_token_id"),tr.forEach(o),Bn=i(D," parameter to the "),Ht=s(D,"EM",{});var or=a(Ht);Hn=i(or,"generate"),or.forEach(o),Un=i(D,` method. The following example shows how to translate between
Hindi to French and Chinese to English using the `),Ut=s(D,"EM",{});var nr=a(Ut);Vn=i(nr,"facebook/m2m100_418M"),nr.forEach(o),Xn=i(D," checkpoint."),D.forEach(o),Io.forEach(o),Za.forEach(o),zo=h(t),v(qe.$$.fragment,t),qo=h(t),U=s(t,"H2",{class:!0});var No=a(U);ne=s(No,"A",{id:!0,class:!0,href:!0});var sr=a(ne);Vt=s(sr,"SPAN",{});var ar=a(Vt);v(xe.$$.fragment,ar),ar.forEach(o),sr.forEach(o),Rn=h(No),Xt=s(No,"SPAN",{});var rr=a(Xt);Jn=i(rr,"M2M100Config"),rr.forEach(o),No.forEach(o),xo=h(t),j=s(t,"DIV",{class:!0});var fe=a(j);v(Ee.$$.fragment,fe),Kn=h(fe),V=s(fe,"P",{});var yt=a(V);Zn=i(yt,"This is the configuration class to store the configuration of a "),ht=s(yt,"A",{href:!0});var ir=a(ht);Qn=i(ir,"M2M100Model"),ir.forEach(o),Yn=i(yt,`. It is used to instantiate an
M2M100 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the M2M100
`),Ce=s(yt,"A",{href:!0,rel:!0});var dr=a(Ce);es=i(dr,"facebook/m2m100_418M"),dr.forEach(o),ts=i(yt," architecture."),yt.forEach(o),os=h(fe),X=s(fe,"P",{});var wt=a(X);ns=i(wt,"Configuration objects inherit from "),pt=s(wt,"A",{href:!0});var lr=a(pt);ss=i(lr,"PretrainedConfig"),lr.forEach(o),as=i(wt,` and can be used to control the model outputs. Read the
documentation from `),mt=s(wt,"A",{href:!0});var cr=a(mt);rs=i(cr,"PretrainedConfig"),cr.forEach(o),is=i(wt," for more information."),wt.forEach(o),ds=h(fe),v(se.$$.fragment,fe),fe.forEach(o),Eo=h(t),R=s(t,"H2",{class:!0});var Go=a(R);ae=s(Go,"A",{id:!0,class:!0,href:!0});var hr=a(ae);Rt=s(hr,"SPAN",{});var pr=a(Rt);v(je.$$.fragment,pr),pr.forEach(o),hr.forEach(o),ls=h(Go),Jt=s(Go,"SPAN",{});var mr=a(Jt);cs=i(mr,"M2M100Tokenizer"),mr.forEach(o),Go.forEach(o),Co=h(t),z=s(t,"DIV",{class:!0});var q=a(z);v(Fe.$$.fragment,q),hs=h(q),Pe=s(q,"P",{});var Wo=a(Pe);ps=i(Wo,"Construct an M2M100 tokenizer. Based on "),Oe=s(Wo,"A",{href:!0,rel:!0});var ur=a(Oe);ms=i(ur,"SentencePiece"),ur.forEach(o),us=i(Wo,"."),Wo.forEach(o),fs=h(q),Se=s(q,"P",{});var Bo=a(Se);_s=i(Bo,"This tokenizer inherits from "),ut=s(Bo,"A",{href:!0});var fr=a(ut);gs=i(fr,"PreTrainedTokenizer"),fr.forEach(o),Ms=i(Bo,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Bo.forEach(o),ks=h(q),v(re.$$.fragment,q),vs=h(q),S=s(q,"DIV",{class:!0});var _e=a(S);v(Le.$$.fragment,_e),bs=h(_e),Ae=s(_e,"P",{});var Ho=a(Ae);ys=i(Ho,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Kt=s(Ho,"CODE",{});var _r=a(Kt);ws=i(_r,"X"),_r.forEach(o),Ts=i(Ho," represents the sequence:"),Ho.forEach(o),$s=h(_e),De=s(_e,"UL",{});var Uo=a(De);Ie=s(Uo,"LI",{});var Vo=a(Ie);Zt=s(Vo,"CODE",{});var gr=a(Zt);zs=i(gr,"input_ids"),gr.forEach(o),qs=i(Vo," (for encoder) "),Qt=s(Vo,"CODE",{});var Mr=a(Qt);xs=i(Mr,"X [eos, src_lang_code]"),Mr.forEach(o),Vo.forEach(o),Es=h(Uo),Ne=s(Uo,"LI",{});var Xo=a(Ne);Yt=s(Xo,"CODE",{});var kr=a(Yt);Cs=i(kr,"decoder_input_ids"),kr.forEach(o),js=i(Xo,": (for decoder) "),eo=s(Xo,"CODE",{});var vr=a(eo);Fs=i(vr,"X [eos, tgt_lang_code]"),vr.forEach(o),Xo.forEach(o),Uo.forEach(o),Ps=h(_e),to=s(_e,"P",{});var br=a(to);Os=i(br,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),br.forEach(o),_e.forEach(o),Ss=h(q),ie=s(q,"DIV",{class:!0});var Ro=a(ie);v(Ge.$$.fragment,Ro),Ls=h(Ro),We=s(Ro,"P",{});var Jo=a(We);As=i(Jo,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),oo=s(Jo,"CODE",{});var yr=a(oo);Ds=i(yr,"prepare_for_model"),yr.forEach(o),Is=i(Jo," method."),Jo.forEach(o),Ro.forEach(o),Ns=h(q),N=s(q,"DIV",{class:!0});var Tt=a(N);v(Be.$$.fragment,Tt),Gs=h(Tt),ft=s(Tt,"P",{});var ja=a(ft);Ws=i(ja,"Create the token type IDs corresponding to the sequences passed. "),_t=s(ja,"A",{href:!0});var wr=a(_t);Bs=i(wr,`What are token type
IDs?`),wr.forEach(o),ja.forEach(o),Hs=h(Tt),no=s(Tt,"P",{});var Tr=a(no);Us=i(Tr,"Should be overridden in a subclass if the model has a special way of building those."),Tr.forEach(o),Tt.forEach(o),Vs=h(q),gt=s(q,"DIV",{class:!0});var $r=a(gt);v(He.$$.fragment,$r),$r.forEach(o),q.forEach(o),jo=h(t),J=s(t,"H2",{class:!0});var Ko=a(J);de=s(Ko,"A",{id:!0,class:!0,href:!0});var zr=a(de);so=s(zr,"SPAN",{});var qr=a(so);v(Ue.$$.fragment,qr),qr.forEach(o),zr.forEach(o),Xs=h(Ko),ao=s(Ko,"SPAN",{});var xr=a(ao);Rs=i(xr,"M2M100Model"),xr.forEach(o),Ko.forEach(o),Fo=h(t),F=s(t,"DIV",{class:!0});var ge=a(F);v(Ve.$$.fragment,ge),Js=h(ge),Xe=s(ge,"P",{});var Zo=a(Xe);Ks=i(Zo,`The bare M2M100 Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mt=s(Zo,"A",{href:!0});var Er=a(Mt);Zs=i(Er,"PreTrainedModel"),Er.forEach(o),Qs=i(Zo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zo.forEach(o),Ys=h(ge),Re=s(ge,"P",{});var Qo=a(Re);ea=i(Qo,"This model is also a PyTorch "),Je=s(Qo,"A",{href:!0,rel:!0});var Cr=a(Je);ta=i(Cr,"torch.nn.Module"),Cr.forEach(o),oa=i(Qo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qo.forEach(o),na=h(ge),L=s(ge,"DIV",{class:!0});var Me=a(L);v(Ke.$$.fragment,Me),sa=h(Me),K=s(Me,"P",{});var $t=a(K);aa=i($t,"The "),kt=s($t,"A",{href:!0});var jr=a(kt);ra=i(jr,"M2M100Model"),jr.forEach(o),ia=i($t," forward method, overrides the "),ro=s($t,"CODE",{});var Fr=a(ro);da=i(Fr,"__call__"),Fr.forEach(o),la=i($t," special method."),$t.forEach(o),ca=h(Me),v(le.$$.fragment,Me),ha=h(Me),v(ce.$$.fragment,Me),Me.forEach(o),ge.forEach(o),Po=h(t),Z=s(t,"H2",{class:!0});var Yo=a(Z);he=s(Yo,"A",{id:!0,class:!0,href:!0});var Pr=a(he);io=s(Pr,"SPAN",{});var Or=a(io);v(Ze.$$.fragment,Or),Or.forEach(o),Pr.forEach(o),pa=h(Yo),lo=s(Yo,"SPAN",{});var Sr=a(lo);ma=i(Sr,"M2M100ForConditionalGeneration"),Sr.forEach(o),Yo.forEach(o),Oo=h(t),P=s(t,"DIV",{class:!0});var ke=a(P);v(Qe.$$.fragment,ke),ua=h(ke),Ye=s(ke,"P",{});var en=a(Ye);fa=i(en,`The M2M100 Model with a language modeling head. Can be used for summarization.
This model inherits from `),vt=s(en,"A",{href:!0});var Lr=a(vt);_a=i(Lr,"PreTrainedModel"),Lr.forEach(o),ga=i(en,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),en.forEach(o),Ma=h(ke),et=s(ke,"P",{});var tn=a(et);ka=i(tn,"This model is also a PyTorch "),tt=s(tn,"A",{href:!0,rel:!0});var Ar=a(tt);va=i(Ar,"torch.nn.Module"),Ar.forEach(o),ba=i(tn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tn.forEach(o),ya=h(ke),A=s(ke,"DIV",{class:!0});var ve=a(A);v(ot.$$.fragment,ve),wa=h(ve),Q=s(ve,"P",{});var zt=a(Q);Ta=i(zt,"The "),bt=s(zt,"A",{href:!0});var Dr=a(bt);$a=i(Dr,"M2M100ForConditionalGeneration"),Dr.forEach(o),za=i(zt," forward method, overrides the "),co=s(zt,"CODE",{});var Ir=a(co);qa=i(Ir,"__call__"),Ir.forEach(o),xa=i(zt," special method."),zt.forEach(o),Ea=h(ve),v(pe.$$.fragment,ve),Ca=h(ve),v(me.$$.fragment,ve),ve.forEach(o),ke.forEach(o),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(Yr)),l(f,"id","m2m100"),l(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(f,"href","#m2m100"),l(g,"class","relative group"),l(Y,"id","overview"),l(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Y,"href","#overview"),l(B,"class","relative group"),l(ye,"href","https://arxiv.org/abs/2010.11125"),l(ye,"rel","nofollow"),l(we,"href","https://huggingface.co/valhalla"),l(we,"rel","nofollow"),l(oe,"id","training-and-generation"),l(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(oe,"href","#training-and-generation"),l(H,"class","relative group"),l(dt,"href","/docs/transformers/v4.21.2/en/model_doc/m2m_100#transformers.M2M100Tokenizer"),l(ne,"id","transformers.M2M100Config"),l(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ne,"href","#transformers.M2M100Config"),l(U,"class","relative group"),l(ht,"href","/docs/transformers/v4.21.2/en/model_doc/m2m_100#transformers.M2M100Model"),l(Ce,"href","https://huggingface.co/facebook/m2m100_418M"),l(Ce,"rel","nofollow"),l(pt,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),l(mt,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),l(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ae,"id","transformers.M2M100Tokenizer"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.M2M100Tokenizer"),l(R,"class","relative group"),l(Oe,"href","https://github.com/google/sentencepiece"),l(Oe,"rel","nofollow"),l(ut,"href","/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(_t,"href","../glossary#token-type-ids"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(de,"id","transformers.M2M100Model"),l(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(de,"href","#transformers.M2M100Model"),l(J,"class","relative group"),l(Mt,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),l(Je,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Je,"rel","nofollow"),l(kt,"href","/docs/transformers/v4.21.2/en/model_doc/m2m_100#transformers.M2M100Model"),l(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(he,"id","transformers.M2M100ForConditionalGeneration"),l(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(he,"href","#transformers.M2M100ForConditionalGeneration"),l(Z,"class","relative group"),l(vt,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),l(tt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(tt,"rel","nofollow"),l(bt,"href","/docs/transformers/v4.21.2/en/model_doc/m2m_100#transformers.M2M100ForConditionalGeneration"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,p){e(document.head,m),u(t,$,p),u(t,g,p),e(g,f),e(f,M),b(d,M,null),e(g,_),e(g,I),e(I,sn),u(t,fo,p),u(t,B,p),e(B,Y),e(Y,xt),b(be,xt,null),e(B,an),e(B,Et),e(Et,rn),u(t,_o,p),u(t,ee,p),e(ee,dn),e(ee,ye),e(ye,ln),e(ee,cn),u(t,go,p),u(t,rt,p),e(rt,hn),u(t,Mo,p),u(t,it,p),e(it,Ct),e(Ct,pn),u(t,ko,p),u(t,te,p),e(te,mn),e(te,we),e(we,un),e(te,fn),u(t,vo,p),u(t,H,p),e(H,oe),e(oe,jt),b(Te,jt,null),e(H,_n),e(H,Ft),e(Ft,gn),u(t,bo,p),u(t,O,p),e(O,Mn),e(O,Pt),e(Pt,kn),e(O,vn),e(O,Ot),e(Ot,bn),e(O,yn),e(O,St),e(St,wn),e(O,Tn),u(t,yo,p),u(t,C,p),e(C,$n),e(C,dt),e(dt,zn),e(C,qn),e(C,Lt),e(Lt,xn),e(C,En),e(C,At),e(At,Cn),e(C,jn),e(C,Dt),e(Dt,Fn),e(C,Pn),u(t,wo,p),u(t,lt,p),e(lt,It),e(It,On),u(t,To,p),b($e,t,p),u(t,$o,p),u(t,ct,p),e(ct,ze),e(ze,Nt),e(Nt,Sn),e(ze,Ln),e(ze,x),e(x,An),e(x,Gt),e(Gt,Dn),e(x,In),e(x,Wt),e(Wt,Nn),e(x,Gn),e(x,Bt),e(Bt,Wn),e(x,Bn),e(x,Ht),e(Ht,Hn),e(x,Un),e(x,Ut),e(Ut,Vn),e(x,Xn),u(t,zo,p),b(qe,t,p),u(t,qo,p),u(t,U,p),e(U,ne),e(ne,Vt),b(xe,Vt,null),e(U,Rn),e(U,Xt),e(Xt,Jn),u(t,xo,p),u(t,j,p),b(Ee,j,null),e(j,Kn),e(j,V),e(V,Zn),e(V,ht),e(ht,Qn),e(V,Yn),e(V,Ce),e(Ce,es),e(V,ts),e(j,os),e(j,X),e(X,ns),e(X,pt),e(pt,ss),e(X,as),e(X,mt),e(mt,rs),e(X,is),e(j,ds),b(se,j,null),u(t,Eo,p),u(t,R,p),e(R,ae),e(ae,Rt),b(je,Rt,null),e(R,ls),e(R,Jt),e(Jt,cs),u(t,Co,p),u(t,z,p),b(Fe,z,null),e(z,hs),e(z,Pe),e(Pe,ps),e(Pe,Oe),e(Oe,ms),e(Pe,us),e(z,fs),e(z,Se),e(Se,_s),e(Se,ut),e(ut,gs),e(Se,Ms),e(z,ks),b(re,z,null),e(z,vs),e(z,S),b(Le,S,null),e(S,bs),e(S,Ae),e(Ae,ys),e(Ae,Kt),e(Kt,ws),e(Ae,Ts),e(S,$s),e(S,De),e(De,Ie),e(Ie,Zt),e(Zt,zs),e(Ie,qs),e(Ie,Qt),e(Qt,xs),e(De,Es),e(De,Ne),e(Ne,Yt),e(Yt,Cs),e(Ne,js),e(Ne,eo),e(eo,Fs),e(S,Ps),e(S,to),e(to,Os),e(z,Ss),e(z,ie),b(Ge,ie,null),e(ie,Ls),e(ie,We),e(We,As),e(We,oo),e(oo,Ds),e(We,Is),e(z,Ns),e(z,N),b(Be,N,null),e(N,Gs),e(N,ft),e(ft,Ws),e(ft,_t),e(_t,Bs),e(N,Hs),e(N,no),e(no,Us),e(z,Vs),e(z,gt),b(He,gt,null),u(t,jo,p),u(t,J,p),e(J,de),e(de,so),b(Ue,so,null),e(J,Xs),e(J,ao),e(ao,Rs),u(t,Fo,p),u(t,F,p),b(Ve,F,null),e(F,Js),e(F,Xe),e(Xe,Ks),e(Xe,Mt),e(Mt,Zs),e(Xe,Qs),e(F,Ys),e(F,Re),e(Re,ea),e(Re,Je),e(Je,ta),e(Re,oa),e(F,na),e(F,L),b(Ke,L,null),e(L,sa),e(L,K),e(K,aa),e(K,kt),e(kt,ra),e(K,ia),e(K,ro),e(ro,da),e(K,la),e(L,ca),b(le,L,null),e(L,ha),b(ce,L,null),u(t,Po,p),u(t,Z,p),e(Z,he),e(he,io),b(Ze,io,null),e(Z,pa),e(Z,lo),e(lo,ma),u(t,Oo,p),u(t,P,p),b(Qe,P,null),e(P,ua),e(P,Ye),e(Ye,fa),e(Ye,vt),e(vt,_a),e(Ye,ga),e(P,Ma),e(P,et),e(et,ka),e(et,tt),e(tt,va),e(et,ba),e(P,ya),e(P,A),b(ot,A,null),e(A,wa),e(A,Q),e(Q,Ta),e(Q,bt),e(bt,$a),e(Q,za),e(Q,co),e(co,qa),e(Q,xa),e(A,Ea),b(pe,A,null),e(A,Ca),b(me,A,null),So=!0},p(t,[p]){const nt={};p&2&&(nt.$$scope={dirty:p,ctx:t}),se.$set(nt);const ho={};p&2&&(ho.$$scope={dirty:p,ctx:t}),re.$set(ho);const po={};p&2&&(po.$$scope={dirty:p,ctx:t}),le.$set(po);const mo={};p&2&&(mo.$$scope={dirty:p,ctx:t}),ce.$set(mo);const st={};p&2&&(st.$$scope={dirty:p,ctx:t}),pe.$set(st);const uo={};p&2&&(uo.$$scope={dirty:p,ctx:t}),me.$set(uo)},i(t){So||(y(d.$$.fragment,t),y(be.$$.fragment,t),y(Te.$$.fragment,t),y($e.$$.fragment,t),y(qe.$$.fragment,t),y(xe.$$.fragment,t),y(Ee.$$.fragment,t),y(se.$$.fragment,t),y(je.$$.fragment,t),y(Fe.$$.fragment,t),y(re.$$.fragment,t),y(Le.$$.fragment,t),y(Ge.$$.fragment,t),y(Be.$$.fragment,t),y(He.$$.fragment,t),y(Ue.$$.fragment,t),y(Ve.$$.fragment,t),y(Ke.$$.fragment,t),y(le.$$.fragment,t),y(ce.$$.fragment,t),y(Ze.$$.fragment,t),y(Qe.$$.fragment,t),y(ot.$$.fragment,t),y(pe.$$.fragment,t),y(me.$$.fragment,t),So=!0)},o(t){w(d.$$.fragment,t),w(be.$$.fragment,t),w(Te.$$.fragment,t),w($e.$$.fragment,t),w(qe.$$.fragment,t),w(xe.$$.fragment,t),w(Ee.$$.fragment,t),w(se.$$.fragment,t),w(je.$$.fragment,t),w(Fe.$$.fragment,t),w(re.$$.fragment,t),w(Le.$$.fragment,t),w(Ge.$$.fragment,t),w(Be.$$.fragment,t),w(He.$$.fragment,t),w(Ue.$$.fragment,t),w(Ve.$$.fragment,t),w(Ke.$$.fragment,t),w(le.$$.fragment,t),w(ce.$$.fragment,t),w(Ze.$$.fragment,t),w(Qe.$$.fragment,t),w(ot.$$.fragment,t),w(pe.$$.fragment,t),w(me.$$.fragment,t),So=!1},d(t){o(m),t&&o($),t&&o(g),T(d),t&&o(fo),t&&o(B),T(be),t&&o(_o),t&&o(ee),t&&o(go),t&&o(rt),t&&o(Mo),t&&o(it),t&&o(ko),t&&o(te),t&&o(vo),t&&o(H),T(Te),t&&o(bo),t&&o(O),t&&o(yo),t&&o(C),t&&o(wo),t&&o(lt),t&&o(To),T($e,t),t&&o($o),t&&o(ct),t&&o(zo),T(qe,t),t&&o(qo),t&&o(U),T(xe),t&&o(xo),t&&o(j),T(Ee),T(se),t&&o(Eo),t&&o(R),T(je),t&&o(Co),t&&o(z),T(Fe),T(re),T(Le),T(Ge),T(Be),T(He),t&&o(jo),t&&o(J),T(Ue),t&&o(Fo),t&&o(F),T(Ve),T(Ke),T(le),T(ce),t&&o(Po),t&&o(Z),T(Ze),t&&o(Oo),t&&o(P),T(Qe),T(ot),T(pe),T(me)}}}const Yr={local:"m2m100",sections:[{local:"overview",sections:[{local:"training-and-generation",title:"Training and Generation"}],title:"Overview"},{local:"transformers.M2M100Config",title:"M2M100Config"},{local:"transformers.M2M100Tokenizer",title:"M2M100Tokenizer"},{local:"transformers.M2M100Model",title:"M2M100Model"},{local:"transformers.M2M100ForConditionalGeneration",title:"M2M100ForConditionalGeneration"}],title:"M2M100"};function ei(E){return Ur(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ii extends Gr{constructor(m){super();Wr(this,m,ei,Qr,Br,{})}}export{ii as default,Yr as metadata};
