import{S as Gr,i as Br,s as Wr,e as n,k as c,w as M,t as r,M as Hr,c as s,d as o,m as h,a,x as b,h as i,b as l,G as e,g as u,y as v,q as y,o as T,B as w,v as Ur,L as nn}from"../../chunks/vendor-hf-doc-builder.js";import{T as Nr}from"../../chunks/Tip-hf-doc-builder.js";import{D as B}from"../../chunks/Docstring-hf-doc-builder.js";import{C as qt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as at}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as on}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Vr(E){let m,$,g,f,k;return f=new qt({props:{code:`from transformers import M2M100Model, M2M100Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){m=n("p"),$=r("Example:"),g=c(),M(f.$$.fragment)},l(d){m=s(d,"P",{});var _=a(m);$=i(_,"Example:"),_.forEach(o),g=h(d),b(f.$$.fragment,d)},m(d,_){u(d,m,_),e(m,$),u(d,g,_),v(f,d,_),k=!0},p:nn,i(d){k||(y(f.$$.fragment,d),k=!0)},o(d){T(f.$$.fragment,d),k=!1},d(d){d&&o(m),d&&o(g),w(f,d)}}}function Xr(E){let m,$,g,f,k;return f=new qt({props:{code:`from transformers import M2M100Tokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**model_inputs, labels=labels)  <span class="hljs-comment"># should work</span>`}}),{c(){m=n("p"),$=r("Examples:"),g=c(),M(f.$$.fragment)},l(d){m=s(d,"P",{});var _=a(m);$=i(_,"Examples:"),_.forEach(o),g=h(d),b(f.$$.fragment,d)},m(d,_){u(d,m,_),e(m,$),u(d,g,_),v(f,d,_),k=!0},p:nn,i(d){k||(y(f.$$.fragment,d),k=!0)},o(d){T(f.$$.fragment,d),k=!1},d(d){d&&o(m),d&&o(g),w(f,d)}}}function Rr(E){let m,$,g,f,k;return{c(){m=n("p"),$=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){m=s(d,"P",{});var _=a(m);$=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(_,"CODE",{});var I=a(g);f=i(I,"Module"),I.forEach(o),k=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(d,_){u(d,m,_),e(m,$),e(m,g),e(g,f),e(m,k)},d(d){d&&o(m)}}}function Jr(E){let m,$,g,f,k;return f=new qt({props:{code:`from transformers import M2M100Tokenizer, M2M100Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){m=n("p"),$=r("Example:"),g=c(),M(f.$$.fragment)},l(d){m=s(d,"P",{});var _=a(m);$=i(_,"Example:"),_.forEach(o),g=h(d),b(f.$$.fragment,d)},m(d,_){u(d,m,_),e(m,$),u(d,g,_),v(f,d,_),k=!0},p:nn,i(d){k||(y(f.$$.fragment,d),k=!0)},o(d){T(f.$$.fragment,d),k=!1},d(d){d&&o(m),d&&o(g),w(f,d)}}}function Kr(E){let m,$,g,f,k;return{c(){m=n("p"),$=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){m=s(d,"P",{});var _=a(m);$=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(_,"CODE",{});var I=a(g);f=i(I,"Module"),I.forEach(o),k=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(d,_){u(d,m,_),e(m,$),e(m,g),e(g,f),e(m,k)},d(d){d&&o(m)}}}function Zr(E){let m,$,g,f,k;return f=new qt({props:{code:`from transformers import M2M100Tokenizer, M2M100ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(gen_tokens, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),{c(){m=n("p"),$=r("Translation example:"),g=c(),M(f.$$.fragment)},l(d){m=s(d,"P",{});var _=a(m);$=i(_,"Translation example:"),_.forEach(o),g=h(d),b(f.$$.fragment,d)},m(d,_){u(d,m,_),e(m,$),u(d,g,_),v(f,d,_),k=!0},p:nn,i(d){k||(y(f.$$.fragment,d),k=!0)},o(d){T(f.$$.fragment,d),k=!1},d(d){d&&o(m),d&&o(g),w(f,d)}}}function Qr(E){let m,$,g,f,k,d,_,I,sn,fo,W,Y,xt,ve,an,Et,rn,_o,ee,dn,ye,ln,cn,go,rt,hn,ko,it,Ct,pn,Mo,te,mn,Te,un,fn,bo,H,oe,jt,we,_n,Pt,gn,vo,O,kn,Ft,Mn,bn,Ot,vn,yn,St,Tn,wn,yo,C,$n,dt,zn,qn,At,xn,En,Dt,Cn,jn,Lt,Pn,Fn,To,lt,It,On,wo,$e,$o,ct,ze,Nt,Sn,An,x,Dn,Gt,Ln,In,Bt,Nn,Gn,Wt,Bn,Wn,Ht,Hn,Un,Ut,Vn,Xn,zo,qe,qo,U,ne,Vt,xe,Rn,Xt,Jn,xo,j,Ee,Kn,V,Zn,ht,Qn,Yn,Ce,es,ts,os,X,ns,pt,ss,as,mt,rs,is,ds,se,Eo,R,ae,Rt,je,ls,Jt,cs,Co,z,Pe,hs,Fe,ps,Oe,ms,us,fs,Se,_s,ut,gs,ks,Ms,re,bs,S,Ae,vs,De,ys,Kt,Ts,ws,$s,Le,Ie,Zt,zs,qs,Qt,xs,Es,Ne,Yt,Cs,js,eo,Ps,Fs,to,Os,Ss,ie,Ge,As,Be,Ds,oo,Ls,Is,Ns,N,We,Gs,ft,Bs,_t,Ws,Hs,no,Us,Vs,gt,He,jo,J,de,so,Ue,Xs,ao,Rs,Po,P,Ve,Js,Xe,Ks,kt,Zs,Qs,Ys,Re,ea,Je,ta,oa,na,A,Ke,sa,K,aa,Mt,ra,ia,ro,da,la,ca,le,ha,ce,Fo,Z,he,io,Ze,pa,lo,ma,Oo,F,Qe,ua,Ye,fa,bt,_a,ga,ka,et,Ma,tt,ba,va,ya,D,ot,Ta,Q,wa,vt,$a,za,co,qa,xa,Ea,pe,Ca,me,So;return d=new at({}),ve=new at({}),we=new at({}),$e=new qt({props:{code:`


`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100Config, M2M100ForConditionalGeneration, M2M100Tokenizer

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
<span class="hljs-string">&quot;Life is like a box of chocolate.&quot;</span>`}}),xe=new at({}),Ee=new B({props:{name:"class transformers.M2M100Config",anchor:"transformers.M2M100Config",parameters:[{name:"vocab_size",val:" = 128112"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.05"},{name:"decoder_layerdrop",val:" = 0.05"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.M2M100Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the M2M100 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Model">M2M100Model</a> or`,name:"vocab_size"},{anchor:"transformers.M2M100Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/m2m_100/configuration_m2m_100.py#L34"}}),se=new on({props:{anchor:"transformers.M2M100Config.example",$$slots:{default:[Vr]},$$scope:{ctx:E}}}),je=new at({}),Pe=new B({props:{name:"class transformers.M2M100Tokenizer",anchor:"transformers.M2M100Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"spm_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"unk_token",val:" = '<unk>'"},{name:"language_codes",val:" = 'm2m100'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"num_madeup_words",val:" = 8"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.M2M100Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/m2m_100/tokenization_m2m_100.py#L65"}}),re=new on({props:{anchor:"transformers.M2M100Tokenizer.example",$$slots:{default:[Xr]},$$scope:{ctx:E}}}),Ae=new B({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/m2m_100/tokenization_m2m_100.py#L258",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ge=new B({props:{name:"get_special_tokens_mask",anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.M2M100Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/m2m_100/tokenization_m2m_100.py#L228",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),We=new B({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.M2M100Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.M2M100Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.M2M100Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2908",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),He=new B({props:{name:"save_vocabulary",anchor:"transformers.M2M100Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/m2m_100/tokenization_m2m_100.py#L304"}}),Ue=new at({}),Ve=new B({props:{name:"class transformers.M2M100Model",anchor:"transformers.M2M100Model",parameters:[{name:"config",val:": M2M100Config"}],parametersDescription:[{anchor:"transformers.M2M100Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Config">M2M100Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/m2m_100/modeling_m2m_100.py#L1130"}}),Ke=new B({props:{name:"forward",anchor:"transformers.M2M100Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.M2M100Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.M2M100Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.M2M100Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/m2m_100/modeling_m2m_100.py#L1157",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Config"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),le=new Nr({props:{$$slots:{default:[Rr]},$$scope:{ctx:E}}}),ce=new on({props:{anchor:"transformers.M2M100Model.forward.example",$$slots:{default:[Jr]},$$scope:{ctx:E}}}),Ze=new at({}),Qe=new B({props:{name:"class transformers.M2M100ForConditionalGeneration",anchor:"transformers.M2M100ForConditionalGeneration",parameters:[{name:"config",val:": M2M100Config"}],parametersDescription:[{anchor:"transformers.M2M100ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Config">M2M100Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/m2m_100/modeling_m2m_100.py#L1241"}}),ot=new B({props:{name:"forward",anchor:"transformers.M2M100ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.M2M100ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Tokenizer">M2M100Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.M2M100ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/m2m_100/modeling_m2m_100.py#L1279",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Config"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pe=new Nr({props:{$$slots:{default:[Kr]},$$scope:{ctx:E}}}),me=new on({props:{anchor:"transformers.M2M100ForConditionalGeneration.forward.example",$$slots:{default:[Zr]},$$scope:{ctx:E}}}),{c(){m=n("meta"),$=c(),g=n("h1"),f=n("a"),k=n("span"),M(d.$$.fragment),_=c(),I=n("span"),sn=r("M2M100"),fo=c(),W=n("h2"),Y=n("a"),xt=n("span"),M(ve.$$.fragment),an=c(),Et=n("span"),rn=r("Overview"),_o=c(),ee=n("p"),dn=r("The M2M100 model was proposed in "),ye=n("a"),ln=r("Beyond English-Centric Multilingual Machine Translation"),cn=r(` by Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky,
Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, Naman Goyal, Tom Birch, Vitaliy
Liptchinsky, Sergey Edunov, Edouard Grave, Michael Auli, Armand Joulin.`),go=c(),rt=n("p"),hn=r("The abstract from the paper is the following:"),ko=c(),it=n("p"),Ct=n("em"),pn=r(`Existing work in translation demonstrated the potential of massively multilingual machine translation by training a
single model able to translate between any pair of languages. However, much of this work is English-Centric by training
only on data which was translated from or to English. While this is supported by large sources of training data, it
does not reflect translation needs worldwide. In this work, we create a true Many-to-Many multilingual translation
model that can translate directly between any pair of 100 languages. We build and open source a training dataset that
covers thousands of language directions with supervised data, created through large-scale mining. Then, we explore how
to effectively increase model capacity through a combination of dense scaling and language-specific sparse parameters
to create high quality models. Our focus on non-English-Centric models brings gains of more than 10 BLEU when directly
translating between non-English directions while performing competitively to the best single systems of WMT. We
open-source our scripts so that others may reproduce the data, evaluation, and final M2M-100 model.`),Mo=c(),te=n("p"),mn=r("This model was contributed by "),Te=n("a"),un=r("valhalla"),fn=r("."),bo=c(),H=n("h3"),oe=n("a"),jt=n("span"),M(we.$$.fragment),_n=c(),Pt=n("span"),gn=r("Training and Generation"),vo=c(),O=n("p"),kn=r(`M2M100 is a multilingual encoder-decoder (seq-to-seq) model primarily intended for translation tasks. As the model is
multilingual it expects the sequences in a certain format: A special language id token is used as prefix in both the
source and target text. The source text format is `),Ft=n("code"),Mn=r("[lang_code] X [eos]"),bn=r(", where "),Ot=n("code"),vn=r("lang_code"),yn=r(` is source language
id for source text and target language id for target text, with `),St=n("code"),Tn=r("X"),wn=r(" being the source or target text."),yo=c(),C=n("p"),$n=r("The "),dt=n("a"),zn=r("M2M100Tokenizer"),qn=r(" depends on "),At=n("code"),xn=r("sentencepiece"),En=r(` so be sure to install it before running the
examples. To install `),Dt=n("code"),Cn=r("sentencepiece"),jn=r(" run "),Lt=n("code"),Pn=r("pip install sentencepiece"),Fn=r("."),To=c(),lt=n("ul"),It=n("li"),On=r("Supervised Training"),wo=c(),M($e.$$.fragment),$o=c(),ct=n("ul"),ze=n("li"),Nt=n("p"),Sn=r("Generation"),An=c(),x=n("p"),Dn=r("M2M100 uses the "),Gt=n("code"),Ln=r("eos_token_id"),In=r(" as the "),Bt=n("code"),Nn=r("decoder_start_token_id"),Gn=r(` for generation with the target language id
being forced as the first generated token. To force the target language id as the first generated token, pass the
`),Wt=n("em"),Bn=r("forced_bos_token_id"),Wn=r(" parameter to the "),Ht=n("em"),Hn=r("generate"),Un=r(` method. The following example shows how to translate between
Hindi to French and Chinese to English using the `),Ut=n("em"),Vn=r("facebook/m2m100_418M"),Xn=r(" checkpoint."),zo=c(),M(qe.$$.fragment),qo=c(),U=n("h2"),ne=n("a"),Vt=n("span"),M(xe.$$.fragment),Rn=c(),Xt=n("span"),Jn=r("M2M100Config"),xo=c(),j=n("div"),M(Ee.$$.fragment),Kn=c(),V=n("p"),Zn=r("This is the configuration class to store the configuration of a "),ht=n("a"),Qn=r("M2M100Model"),Yn=r(`. It is used to instantiate an
M2M100 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the M2M100
`),Ce=n("a"),es=r("facebook/m2m100_418M"),ts=r(" architecture."),os=c(),X=n("p"),ns=r("Configuration objects inherit from "),pt=n("a"),ss=r("PretrainedConfig"),as=r(` and can be used to control the model outputs. Read the
documentation from `),mt=n("a"),rs=r("PretrainedConfig"),is=r(" for more information."),ds=c(),M(se.$$.fragment),Eo=c(),R=n("h2"),ae=n("a"),Rt=n("span"),M(je.$$.fragment),ls=c(),Jt=n("span"),cs=r("M2M100Tokenizer"),Co=c(),z=n("div"),M(Pe.$$.fragment),hs=c(),Fe=n("p"),ps=r("Construct an M2M100 tokenizer. Based on "),Oe=n("a"),ms=r("SentencePiece"),us=r("."),fs=c(),Se=n("p"),_s=r("This tokenizer inherits from "),ut=n("a"),gs=r("PreTrainedTokenizer"),ks=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ms=c(),M(re.$$.fragment),bs=c(),S=n("div"),M(Ae.$$.fragment),vs=c(),De=n("p"),ys=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Kt=n("code"),Ts=r("X"),ws=r(" represents the sequence:"),$s=c(),Le=n("ul"),Ie=n("li"),Zt=n("code"),zs=r("input_ids"),qs=r(" (for encoder) "),Qt=n("code"),xs=r("X [eos, src_lang_code]"),Es=c(),Ne=n("li"),Yt=n("code"),Cs=r("decoder_input_ids"),js=r(": (for decoder) "),eo=n("code"),Ps=r("X [eos, tgt_lang_code]"),Fs=c(),to=n("p"),Os=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ss=c(),ie=n("div"),M(Ge.$$.fragment),As=c(),Be=n("p"),Ds=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),oo=n("code"),Ls=r("prepare_for_model"),Is=r(" method."),Ns=c(),N=n("div"),M(We.$$.fragment),Gs=c(),ft=n("p"),Bs=r("Create the token type IDs corresponding to the sequences passed. "),_t=n("a"),Ws=r(`What are token type
IDs?`),Hs=c(),no=n("p"),Us=r("Should be overridden in a subclass if the model has a special way of building those."),Vs=c(),gt=n("div"),M(He.$$.fragment),jo=c(),J=n("h2"),de=n("a"),so=n("span"),M(Ue.$$.fragment),Xs=c(),ao=n("span"),Rs=r("M2M100Model"),Po=c(),P=n("div"),M(Ve.$$.fragment),Js=c(),Xe=n("p"),Ks=r(`The bare M2M100 Model outputting raw hidden-states without any specific head on top.
This model inherits from `),kt=n("a"),Zs=r("PreTrainedModel"),Qs=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ys=c(),Re=n("p"),ea=r("This model is also a PyTorch "),Je=n("a"),ta=r("torch.nn.Module"),oa=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),na=c(),A=n("div"),M(Ke.$$.fragment),sa=c(),K=n("p"),aa=r("The "),Mt=n("a"),ra=r("M2M100Model"),ia=r(" forward method, overrides the "),ro=n("code"),da=r("__call__"),la=r(" special method."),ca=c(),M(le.$$.fragment),ha=c(),M(ce.$$.fragment),Fo=c(),Z=n("h2"),he=n("a"),io=n("span"),M(Ze.$$.fragment),pa=c(),lo=n("span"),ma=r("M2M100ForConditionalGeneration"),Oo=c(),F=n("div"),M(Qe.$$.fragment),ua=c(),Ye=n("p"),fa=r(`The M2M100 Model with a language modeling head. Can be used for summarization.
This model inherits from `),bt=n("a"),_a=r("PreTrainedModel"),ga=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ka=c(),et=n("p"),Ma=r("This model is also a PyTorch "),tt=n("a"),ba=r("torch.nn.Module"),va=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ya=c(),D=n("div"),M(ot.$$.fragment),Ta=c(),Q=n("p"),wa=r("The "),vt=n("a"),$a=r("M2M100ForConditionalGeneration"),za=r(" forward method, overrides the "),co=n("code"),qa=r("__call__"),xa=r(" special method."),Ea=c(),M(pe.$$.fragment),Ca=c(),M(me.$$.fragment),this.h()},l(t){const p=Hr('[data-svelte="svelte-1phssyn"]',document.head);m=s(p,"META",{name:!0,content:!0}),p.forEach(o),$=h(t),g=s(t,"H1",{class:!0});var nt=a(g);f=s(nt,"A",{id:!0,class:!0,href:!0});var ho=a(f);k=s(ho,"SPAN",{});var po=a(k);b(d.$$.fragment,po),po.forEach(o),ho.forEach(o),_=h(nt),I=s(nt,"SPAN",{});var mo=a(I);sn=i(mo,"M2M100"),mo.forEach(o),nt.forEach(o),fo=h(t),W=s(t,"H2",{class:!0});var st=a(W);Y=s(st,"A",{id:!0,class:!0,href:!0});var uo=a(Y);xt=s(uo,"SPAN",{});var Pa=a(xt);b(ve.$$.fragment,Pa),Pa.forEach(o),uo.forEach(o),an=h(st),Et=s(st,"SPAN",{});var Fa=a(Et);rn=i(Fa,"Overview"),Fa.forEach(o),st.forEach(o),_o=h(t),ee=s(t,"P",{});var Ao=a(ee);dn=i(Ao,"The M2M100 model was proposed in "),ye=s(Ao,"A",{href:!0,rel:!0});var Oa=a(ye);ln=i(Oa,"Beyond English-Centric Multilingual Machine Translation"),Oa.forEach(o),cn=i(Ao,` by Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky,
Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, Naman Goyal, Tom Birch, Vitaliy
Liptchinsky, Sergey Edunov, Edouard Grave, Michael Auli, Armand Joulin.`),Ao.forEach(o),go=h(t),rt=s(t,"P",{});var Sa=a(rt);hn=i(Sa,"The abstract from the paper is the following:"),Sa.forEach(o),ko=h(t),it=s(t,"P",{});var Aa=a(it);Ct=s(Aa,"EM",{});var Da=a(Ct);pn=i(Da,`Existing work in translation demonstrated the potential of massively multilingual machine translation by training a
single model able to translate between any pair of languages. However, much of this work is English-Centric by training
only on data which was translated from or to English. While this is supported by large sources of training data, it
does not reflect translation needs worldwide. In this work, we create a true Many-to-Many multilingual translation
model that can translate directly between any pair of 100 languages. We build and open source a training dataset that
covers thousands of language directions with supervised data, created through large-scale mining. Then, we explore how
to effectively increase model capacity through a combination of dense scaling and language-specific sparse parameters
to create high quality models. Our focus on non-English-Centric models brings gains of more than 10 BLEU when directly
translating between non-English directions while performing competitively to the best single systems of WMT. We
open-source our scripts so that others may reproduce the data, evaluation, and final M2M-100 model.`),Da.forEach(o),Aa.forEach(o),Mo=h(t),te=s(t,"P",{});var Do=a(te);mn=i(Do,"This model was contributed by "),Te=s(Do,"A",{href:!0,rel:!0});var La=a(Te);un=i(La,"valhalla"),La.forEach(o),fn=i(Do,"."),Do.forEach(o),bo=h(t),H=s(t,"H3",{class:!0});var Lo=a(H);oe=s(Lo,"A",{id:!0,class:!0,href:!0});var Ia=a(oe);jt=s(Ia,"SPAN",{});var Na=a(jt);b(we.$$.fragment,Na),Na.forEach(o),Ia.forEach(o),_n=h(Lo),Pt=s(Lo,"SPAN",{});var Ga=a(Pt);gn=i(Ga,"Training and Generation"),Ga.forEach(o),Lo.forEach(o),vo=h(t),O=s(t,"P",{});var ue=a(O);kn=i(ue,`M2M100 is a multilingual encoder-decoder (seq-to-seq) model primarily intended for translation tasks. As the model is
multilingual it expects the sequences in a certain format: A special language id token is used as prefix in both the
source and target text. The source text format is `),Ft=s(ue,"CODE",{});var Ba=a(Ft);Mn=i(Ba,"[lang_code] X [eos]"),Ba.forEach(o),bn=i(ue,", where "),Ot=s(ue,"CODE",{});var Wa=a(Ot);vn=i(Wa,"lang_code"),Wa.forEach(o),yn=i(ue,` is source language
id for source text and target language id for target text, with `),St=s(ue,"CODE",{});var Ha=a(St);Tn=i(Ha,"X"),Ha.forEach(o),wn=i(ue," being the source or target text."),ue.forEach(o),yo=h(t),C=s(t,"P",{});var G=a(C);$n=i(G,"The "),dt=s(G,"A",{href:!0});var Ua=a(dt);zn=i(Ua,"M2M100Tokenizer"),Ua.forEach(o),qn=i(G," depends on "),At=s(G,"CODE",{});var Va=a(At);xn=i(Va,"sentencepiece"),Va.forEach(o),En=i(G,` so be sure to install it before running the
examples. To install `),Dt=s(G,"CODE",{});var Xa=a(Dt);Cn=i(Xa,"sentencepiece"),Xa.forEach(o),jn=i(G," run "),Lt=s(G,"CODE",{});var Ra=a(Lt);Pn=i(Ra,"pip install sentencepiece"),Ra.forEach(o),Fn=i(G,"."),G.forEach(o),To=h(t),lt=s(t,"UL",{});var Ja=a(lt);It=s(Ja,"LI",{});var Ka=a(It);On=i(Ka,"Supervised Training"),Ka.forEach(o),Ja.forEach(o),wo=h(t),b($e.$$.fragment,t),$o=h(t),ct=s(t,"UL",{});var Za=a(ct);ze=s(Za,"LI",{});var Io=a(ze);Nt=s(Io,"P",{});var Qa=a(Nt);Sn=i(Qa,"Generation"),Qa.forEach(o),An=h(Io),x=s(Io,"P",{});var L=a(x);Dn=i(L,"M2M100 uses the "),Gt=s(L,"CODE",{});var Ya=a(Gt);Ln=i(Ya,"eos_token_id"),Ya.forEach(o),In=i(L," as the "),Bt=s(L,"CODE",{});var er=a(Bt);Nn=i(er,"decoder_start_token_id"),er.forEach(o),Gn=i(L,` for generation with the target language id
being forced as the first generated token. To force the target language id as the first generated token, pass the
`),Wt=s(L,"EM",{});var tr=a(Wt);Bn=i(tr,"forced_bos_token_id"),tr.forEach(o),Wn=i(L," parameter to the "),Ht=s(L,"EM",{});var or=a(Ht);Hn=i(or,"generate"),or.forEach(o),Un=i(L,` method. The following example shows how to translate between
Hindi to French and Chinese to English using the `),Ut=s(L,"EM",{});var nr=a(Ut);Vn=i(nr,"facebook/m2m100_418M"),nr.forEach(o),Xn=i(L," checkpoint."),L.forEach(o),Io.forEach(o),Za.forEach(o),zo=h(t),b(qe.$$.fragment,t),qo=h(t),U=s(t,"H2",{class:!0});var No=a(U);ne=s(No,"A",{id:!0,class:!0,href:!0});var sr=a(ne);Vt=s(sr,"SPAN",{});var ar=a(Vt);b(xe.$$.fragment,ar),ar.forEach(o),sr.forEach(o),Rn=h(No),Xt=s(No,"SPAN",{});var rr=a(Xt);Jn=i(rr,"M2M100Config"),rr.forEach(o),No.forEach(o),xo=h(t),j=s(t,"DIV",{class:!0});var fe=a(j);b(Ee.$$.fragment,fe),Kn=h(fe),V=s(fe,"P",{});var yt=a(V);Zn=i(yt,"This is the configuration class to store the configuration of a "),ht=s(yt,"A",{href:!0});var ir=a(ht);Qn=i(ir,"M2M100Model"),ir.forEach(o),Yn=i(yt,`. It is used to instantiate an
M2M100 model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the M2M100
`),Ce=s(yt,"A",{href:!0,rel:!0});var dr=a(Ce);es=i(dr,"facebook/m2m100_418M"),dr.forEach(o),ts=i(yt," architecture."),yt.forEach(o),os=h(fe),X=s(fe,"P",{});var Tt=a(X);ns=i(Tt,"Configuration objects inherit from "),pt=s(Tt,"A",{href:!0});var lr=a(pt);ss=i(lr,"PretrainedConfig"),lr.forEach(o),as=i(Tt,` and can be used to control the model outputs. Read the
documentation from `),mt=s(Tt,"A",{href:!0});var cr=a(mt);rs=i(cr,"PretrainedConfig"),cr.forEach(o),is=i(Tt," for more information."),Tt.forEach(o),ds=h(fe),b(se.$$.fragment,fe),fe.forEach(o),Eo=h(t),R=s(t,"H2",{class:!0});var Go=a(R);ae=s(Go,"A",{id:!0,class:!0,href:!0});var hr=a(ae);Rt=s(hr,"SPAN",{});var pr=a(Rt);b(je.$$.fragment,pr),pr.forEach(o),hr.forEach(o),ls=h(Go),Jt=s(Go,"SPAN",{});var mr=a(Jt);cs=i(mr,"M2M100Tokenizer"),mr.forEach(o),Go.forEach(o),Co=h(t),z=s(t,"DIV",{class:!0});var q=a(z);b(Pe.$$.fragment,q),hs=h(q),Fe=s(q,"P",{});var Bo=a(Fe);ps=i(Bo,"Construct an M2M100 tokenizer. Based on "),Oe=s(Bo,"A",{href:!0,rel:!0});var ur=a(Oe);ms=i(ur,"SentencePiece"),ur.forEach(o),us=i(Bo,"."),Bo.forEach(o),fs=h(q),Se=s(q,"P",{});var Wo=a(Se);_s=i(Wo,"This tokenizer inherits from "),ut=s(Wo,"A",{href:!0});var fr=a(ut);gs=i(fr,"PreTrainedTokenizer"),fr.forEach(o),ks=i(Wo,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Wo.forEach(o),Ms=h(q),b(re.$$.fragment,q),bs=h(q),S=s(q,"DIV",{class:!0});var _e=a(S);b(Ae.$$.fragment,_e),vs=h(_e),De=s(_e,"P",{});var Ho=a(De);ys=i(Ho,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Kt=s(Ho,"CODE",{});var _r=a(Kt);Ts=i(_r,"X"),_r.forEach(o),ws=i(Ho," represents the sequence:"),Ho.forEach(o),$s=h(_e),Le=s(_e,"UL",{});var Uo=a(Le);Ie=s(Uo,"LI",{});var Vo=a(Ie);Zt=s(Vo,"CODE",{});var gr=a(Zt);zs=i(gr,"input_ids"),gr.forEach(o),qs=i(Vo," (for encoder) "),Qt=s(Vo,"CODE",{});var kr=a(Qt);xs=i(kr,"X [eos, src_lang_code]"),kr.forEach(o),Vo.forEach(o),Es=h(Uo),Ne=s(Uo,"LI",{});var Xo=a(Ne);Yt=s(Xo,"CODE",{});var Mr=a(Yt);Cs=i(Mr,"decoder_input_ids"),Mr.forEach(o),js=i(Xo,": (for decoder) "),eo=s(Xo,"CODE",{});var br=a(eo);Ps=i(br,"X [eos, tgt_lang_code]"),br.forEach(o),Xo.forEach(o),Uo.forEach(o),Fs=h(_e),to=s(_e,"P",{});var vr=a(to);Os=i(vr,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),vr.forEach(o),_e.forEach(o),Ss=h(q),ie=s(q,"DIV",{class:!0});var Ro=a(ie);b(Ge.$$.fragment,Ro),As=h(Ro),Be=s(Ro,"P",{});var Jo=a(Be);Ds=i(Jo,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),oo=s(Jo,"CODE",{});var yr=a(oo);Ls=i(yr,"prepare_for_model"),yr.forEach(o),Is=i(Jo," method."),Jo.forEach(o),Ro.forEach(o),Ns=h(q),N=s(q,"DIV",{class:!0});var wt=a(N);b(We.$$.fragment,wt),Gs=h(wt),ft=s(wt,"P",{});var ja=a(ft);Bs=i(ja,"Create the token type IDs corresponding to the sequences passed. "),_t=s(ja,"A",{href:!0});var Tr=a(_t);Ws=i(Tr,`What are token type
IDs?`),Tr.forEach(o),ja.forEach(o),Hs=h(wt),no=s(wt,"P",{});var wr=a(no);Us=i(wr,"Should be overridden in a subclass if the model has a special way of building those."),wr.forEach(o),wt.forEach(o),Vs=h(q),gt=s(q,"DIV",{class:!0});var $r=a(gt);b(He.$$.fragment,$r),$r.forEach(o),q.forEach(o),jo=h(t),J=s(t,"H2",{class:!0});var Ko=a(J);de=s(Ko,"A",{id:!0,class:!0,href:!0});var zr=a(de);so=s(zr,"SPAN",{});var qr=a(so);b(Ue.$$.fragment,qr),qr.forEach(o),zr.forEach(o),Xs=h(Ko),ao=s(Ko,"SPAN",{});var xr=a(ao);Rs=i(xr,"M2M100Model"),xr.forEach(o),Ko.forEach(o),Po=h(t),P=s(t,"DIV",{class:!0});var ge=a(P);b(Ve.$$.fragment,ge),Js=h(ge),Xe=s(ge,"P",{});var Zo=a(Xe);Ks=i(Zo,`The bare M2M100 Model outputting raw hidden-states without any specific head on top.
This model inherits from `),kt=s(Zo,"A",{href:!0});var Er=a(kt);Zs=i(Er,"PreTrainedModel"),Er.forEach(o),Qs=i(Zo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zo.forEach(o),Ys=h(ge),Re=s(ge,"P",{});var Qo=a(Re);ea=i(Qo,"This model is also a PyTorch "),Je=s(Qo,"A",{href:!0,rel:!0});var Cr=a(Je);ta=i(Cr,"torch.nn.Module"),Cr.forEach(o),oa=i(Qo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qo.forEach(o),na=h(ge),A=s(ge,"DIV",{class:!0});var ke=a(A);b(Ke.$$.fragment,ke),sa=h(ke),K=s(ke,"P",{});var $t=a(K);aa=i($t,"The "),Mt=s($t,"A",{href:!0});var jr=a(Mt);ra=i(jr,"M2M100Model"),jr.forEach(o),ia=i($t," forward method, overrides the "),ro=s($t,"CODE",{});var Pr=a(ro);da=i(Pr,"__call__"),Pr.forEach(o),la=i($t," special method."),$t.forEach(o),ca=h(ke),b(le.$$.fragment,ke),ha=h(ke),b(ce.$$.fragment,ke),ke.forEach(o),ge.forEach(o),Fo=h(t),Z=s(t,"H2",{class:!0});var Yo=a(Z);he=s(Yo,"A",{id:!0,class:!0,href:!0});var Fr=a(he);io=s(Fr,"SPAN",{});var Or=a(io);b(Ze.$$.fragment,Or),Or.forEach(o),Fr.forEach(o),pa=h(Yo),lo=s(Yo,"SPAN",{});var Sr=a(lo);ma=i(Sr,"M2M100ForConditionalGeneration"),Sr.forEach(o),Yo.forEach(o),Oo=h(t),F=s(t,"DIV",{class:!0});var Me=a(F);b(Qe.$$.fragment,Me),ua=h(Me),Ye=s(Me,"P",{});var en=a(Ye);fa=i(en,`The M2M100 Model with a language modeling head. Can be used for summarization.
This model inherits from `),bt=s(en,"A",{href:!0});var Ar=a(bt);_a=i(Ar,"PreTrainedModel"),Ar.forEach(o),ga=i(en,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),en.forEach(o),ka=h(Me),et=s(Me,"P",{});var tn=a(et);Ma=i(tn,"This model is also a PyTorch "),tt=s(tn,"A",{href:!0,rel:!0});var Dr=a(tt);ba=i(Dr,"torch.nn.Module"),Dr.forEach(o),va=i(tn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tn.forEach(o),ya=h(Me),D=s(Me,"DIV",{class:!0});var be=a(D);b(ot.$$.fragment,be),Ta=h(be),Q=s(be,"P",{});var zt=a(Q);wa=i(zt,"The "),vt=s(zt,"A",{href:!0});var Lr=a(vt);$a=i(Lr,"M2M100ForConditionalGeneration"),Lr.forEach(o),za=i(zt," forward method, overrides the "),co=s(zt,"CODE",{});var Ir=a(co);qa=i(Ir,"__call__"),Ir.forEach(o),xa=i(zt," special method."),zt.forEach(o),Ea=h(be),b(pe.$$.fragment,be),Ca=h(be),b(me.$$.fragment,be),be.forEach(o),Me.forEach(o),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(Yr)),l(f,"id","m2m100"),l(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(f,"href","#m2m100"),l(g,"class","relative group"),l(Y,"id","overview"),l(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Y,"href","#overview"),l(W,"class","relative group"),l(ye,"href","https://arxiv.org/abs/2010.11125"),l(ye,"rel","nofollow"),l(Te,"href","https://huggingface.co/valhalla"),l(Te,"rel","nofollow"),l(oe,"id","training-and-generation"),l(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(oe,"href","#training-and-generation"),l(H,"class","relative group"),l(dt,"href","/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Tokenizer"),l(ne,"id","transformers.M2M100Config"),l(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ne,"href","#transformers.M2M100Config"),l(U,"class","relative group"),l(ht,"href","/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Model"),l(Ce,"href","https://huggingface.co/facebook/m2m100_418M"),l(Ce,"rel","nofollow"),l(pt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(mt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ae,"id","transformers.M2M100Tokenizer"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.M2M100Tokenizer"),l(R,"class","relative group"),l(Oe,"href","https://github.com/google/sentencepiece"),l(Oe,"rel","nofollow"),l(ut,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(_t,"href","../glossary#token-type-ids"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(de,"id","transformers.M2M100Model"),l(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(de,"href","#transformers.M2M100Model"),l(J,"class","relative group"),l(kt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Je,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Je,"rel","nofollow"),l(Mt,"href","/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100Model"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(he,"id","transformers.M2M100ForConditionalGeneration"),l(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(he,"href","#transformers.M2M100ForConditionalGeneration"),l(Z,"class","relative group"),l(bt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(tt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(tt,"rel","nofollow"),l(vt,"href","/docs/transformers/main/en/model_doc/m2m_100#transformers.M2M100ForConditionalGeneration"),l(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,p){e(document.head,m),u(t,$,p),u(t,g,p),e(g,f),e(f,k),v(d,k,null),e(g,_),e(g,I),e(I,sn),u(t,fo,p),u(t,W,p),e(W,Y),e(Y,xt),v(ve,xt,null),e(W,an),e(W,Et),e(Et,rn),u(t,_o,p),u(t,ee,p),e(ee,dn),e(ee,ye),e(ye,ln),e(ee,cn),u(t,go,p),u(t,rt,p),e(rt,hn),u(t,ko,p),u(t,it,p),e(it,Ct),e(Ct,pn),u(t,Mo,p),u(t,te,p),e(te,mn),e(te,Te),e(Te,un),e(te,fn),u(t,bo,p),u(t,H,p),e(H,oe),e(oe,jt),v(we,jt,null),e(H,_n),e(H,Pt),e(Pt,gn),u(t,vo,p),u(t,O,p),e(O,kn),e(O,Ft),e(Ft,Mn),e(O,bn),e(O,Ot),e(Ot,vn),e(O,yn),e(O,St),e(St,Tn),e(O,wn),u(t,yo,p),u(t,C,p),e(C,$n),e(C,dt),e(dt,zn),e(C,qn),e(C,At),e(At,xn),e(C,En),e(C,Dt),e(Dt,Cn),e(C,jn),e(C,Lt),e(Lt,Pn),e(C,Fn),u(t,To,p),u(t,lt,p),e(lt,It),e(It,On),u(t,wo,p),v($e,t,p),u(t,$o,p),u(t,ct,p),e(ct,ze),e(ze,Nt),e(Nt,Sn),e(ze,An),e(ze,x),e(x,Dn),e(x,Gt),e(Gt,Ln),e(x,In),e(x,Bt),e(Bt,Nn),e(x,Gn),e(x,Wt),e(Wt,Bn),e(x,Wn),e(x,Ht),e(Ht,Hn),e(x,Un),e(x,Ut),e(Ut,Vn),e(x,Xn),u(t,zo,p),v(qe,t,p),u(t,qo,p),u(t,U,p),e(U,ne),e(ne,Vt),v(xe,Vt,null),e(U,Rn),e(U,Xt),e(Xt,Jn),u(t,xo,p),u(t,j,p),v(Ee,j,null),e(j,Kn),e(j,V),e(V,Zn),e(V,ht),e(ht,Qn),e(V,Yn),e(V,Ce),e(Ce,es),e(V,ts),e(j,os),e(j,X),e(X,ns),e(X,pt),e(pt,ss),e(X,as),e(X,mt),e(mt,rs),e(X,is),e(j,ds),v(se,j,null),u(t,Eo,p),u(t,R,p),e(R,ae),e(ae,Rt),v(je,Rt,null),e(R,ls),e(R,Jt),e(Jt,cs),u(t,Co,p),u(t,z,p),v(Pe,z,null),e(z,hs),e(z,Fe),e(Fe,ps),e(Fe,Oe),e(Oe,ms),e(Fe,us),e(z,fs),e(z,Se),e(Se,_s),e(Se,ut),e(ut,gs),e(Se,ks),e(z,Ms),v(re,z,null),e(z,bs),e(z,S),v(Ae,S,null),e(S,vs),e(S,De),e(De,ys),e(De,Kt),e(Kt,Ts),e(De,ws),e(S,$s),e(S,Le),e(Le,Ie),e(Ie,Zt),e(Zt,zs),e(Ie,qs),e(Ie,Qt),e(Qt,xs),e(Le,Es),e(Le,Ne),e(Ne,Yt),e(Yt,Cs),e(Ne,js),e(Ne,eo),e(eo,Ps),e(S,Fs),e(S,to),e(to,Os),e(z,Ss),e(z,ie),v(Ge,ie,null),e(ie,As),e(ie,Be),e(Be,Ds),e(Be,oo),e(oo,Ls),e(Be,Is),e(z,Ns),e(z,N),v(We,N,null),e(N,Gs),e(N,ft),e(ft,Bs),e(ft,_t),e(_t,Ws),e(N,Hs),e(N,no),e(no,Us),e(z,Vs),e(z,gt),v(He,gt,null),u(t,jo,p),u(t,J,p),e(J,de),e(de,so),v(Ue,so,null),e(J,Xs),e(J,ao),e(ao,Rs),u(t,Po,p),u(t,P,p),v(Ve,P,null),e(P,Js),e(P,Xe),e(Xe,Ks),e(Xe,kt),e(kt,Zs),e(Xe,Qs),e(P,Ys),e(P,Re),e(Re,ea),e(Re,Je),e(Je,ta),e(Re,oa),e(P,na),e(P,A),v(Ke,A,null),e(A,sa),e(A,K),e(K,aa),e(K,Mt),e(Mt,ra),e(K,ia),e(K,ro),e(ro,da),e(K,la),e(A,ca),v(le,A,null),e(A,ha),v(ce,A,null),u(t,Fo,p),u(t,Z,p),e(Z,he),e(he,io),v(Ze,io,null),e(Z,pa),e(Z,lo),e(lo,ma),u(t,Oo,p),u(t,F,p),v(Qe,F,null),e(F,ua),e(F,Ye),e(Ye,fa),e(Ye,bt),e(bt,_a),e(Ye,ga),e(F,ka),e(F,et),e(et,Ma),e(et,tt),e(tt,ba),e(et,va),e(F,ya),e(F,D),v(ot,D,null),e(D,Ta),e(D,Q),e(Q,wa),e(Q,vt),e(vt,$a),e(Q,za),e(Q,co),e(co,qa),e(Q,xa),e(D,Ea),v(pe,D,null),e(D,Ca),v(me,D,null),So=!0},p(t,[p]){const nt={};p&2&&(nt.$$scope={dirty:p,ctx:t}),se.$set(nt);const ho={};p&2&&(ho.$$scope={dirty:p,ctx:t}),re.$set(ho);const po={};p&2&&(po.$$scope={dirty:p,ctx:t}),le.$set(po);const mo={};p&2&&(mo.$$scope={dirty:p,ctx:t}),ce.$set(mo);const st={};p&2&&(st.$$scope={dirty:p,ctx:t}),pe.$set(st);const uo={};p&2&&(uo.$$scope={dirty:p,ctx:t}),me.$set(uo)},i(t){So||(y(d.$$.fragment,t),y(ve.$$.fragment,t),y(we.$$.fragment,t),y($e.$$.fragment,t),y(qe.$$.fragment,t),y(xe.$$.fragment,t),y(Ee.$$.fragment,t),y(se.$$.fragment,t),y(je.$$.fragment,t),y(Pe.$$.fragment,t),y(re.$$.fragment,t),y(Ae.$$.fragment,t),y(Ge.$$.fragment,t),y(We.$$.fragment,t),y(He.$$.fragment,t),y(Ue.$$.fragment,t),y(Ve.$$.fragment,t),y(Ke.$$.fragment,t),y(le.$$.fragment,t),y(ce.$$.fragment,t),y(Ze.$$.fragment,t),y(Qe.$$.fragment,t),y(ot.$$.fragment,t),y(pe.$$.fragment,t),y(me.$$.fragment,t),So=!0)},o(t){T(d.$$.fragment,t),T(ve.$$.fragment,t),T(we.$$.fragment,t),T($e.$$.fragment,t),T(qe.$$.fragment,t),T(xe.$$.fragment,t),T(Ee.$$.fragment,t),T(se.$$.fragment,t),T(je.$$.fragment,t),T(Pe.$$.fragment,t),T(re.$$.fragment,t),T(Ae.$$.fragment,t),T(Ge.$$.fragment,t),T(We.$$.fragment,t),T(He.$$.fragment,t),T(Ue.$$.fragment,t),T(Ve.$$.fragment,t),T(Ke.$$.fragment,t),T(le.$$.fragment,t),T(ce.$$.fragment,t),T(Ze.$$.fragment,t),T(Qe.$$.fragment,t),T(ot.$$.fragment,t),T(pe.$$.fragment,t),T(me.$$.fragment,t),So=!1},d(t){o(m),t&&o($),t&&o(g),w(d),t&&o(fo),t&&o(W),w(ve),t&&o(_o),t&&o(ee),t&&o(go),t&&o(rt),t&&o(ko),t&&o(it),t&&o(Mo),t&&o(te),t&&o(bo),t&&o(H),w(we),t&&o(vo),t&&o(O),t&&o(yo),t&&o(C),t&&o(To),t&&o(lt),t&&o(wo),w($e,t),t&&o($o),t&&o(ct),t&&o(zo),w(qe,t),t&&o(qo),t&&o(U),w(xe),t&&o(xo),t&&o(j),w(Ee),w(se),t&&o(Eo),t&&o(R),w(je),t&&o(Co),t&&o(z),w(Pe),w(re),w(Ae),w(Ge),w(We),w(He),t&&o(jo),t&&o(J),w(Ue),t&&o(Po),t&&o(P),w(Ve),w(Ke),w(le),w(ce),t&&o(Fo),t&&o(Z),w(Ze),t&&o(Oo),t&&o(F),w(Qe),w(ot),w(pe),w(me)}}}const Yr={local:"m2m100",sections:[{local:"overview",sections:[{local:"training-and-generation",title:"Training and Generation"}],title:"Overview"},{local:"transformers.M2M100Config",title:"M2M100Config"},{local:"transformers.M2M100Tokenizer",title:"M2M100Tokenizer"},{local:"transformers.M2M100Model",title:"M2M100Model"},{local:"transformers.M2M100ForConditionalGeneration",title:"M2M100ForConditionalGeneration"}],title:"M2M100"};function ei(E){return Ur(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ii extends Gr{constructor(m){super();Br(this,m,ei,Qr,Wr,{})}}export{ii as default,Yr as metadata};
