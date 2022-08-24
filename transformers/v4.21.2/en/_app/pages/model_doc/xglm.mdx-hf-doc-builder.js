import{S as Ad,i as Od,s as Id,e as n,k as c,w as b,t as r,M as Dd,c as s,d as t,m as p,a,x as y,h as i,b as d,G as e,g as _,y as M,q as w,o as T,B as L,v as Nd,L as Gn}from"../../chunks/vendor-hf-doc-builder.js";import{T as ys}from"../../chunks/Tip-hf-doc-builder.js";import{D as q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as qn}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as me}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Xn}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Sd(x){let h,k,g,m,v;return m=new qn({props:{code:`from transformers import XGLMModel, XGLMConfig

# Initializing a XGLM facebook/xglm-564M style configuration
configuration = XGLMConfig()

# Initializing a model from the facebook/xglm-564M style configuration
model = XGLMModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XGLMModel, XGLMConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a XGLM facebook/xglm-564M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = XGLMConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/xglm-564M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XGLMModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){h=n("p"),k=r("Example:"),g=c(),b(m.$$.fragment)},l(l){h=s(l,"P",{});var u=a(h);k=i(u,"Example:"),u.forEach(t),g=p(l),y(m.$$.fragment,l)},m(l,u){_(l,h,u),e(h,k),_(l,g,u),M(m,l,u),v=!0},p:Gn,i(l){v||(w(m.$$.fragment,l),v=!0)},o(l){T(m.$$.fragment,l),v=!1},d(l){l&&t(h),l&&t(g),L(m,l)}}}function Wd(x){let h,k,g,m,v;return{c(){h=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=s(l,"P",{});var u=a(h);k=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(u,"CODE",{});var X=a(g);m=i(X,"Module"),X.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,h,u),e(h,k),e(h,g),e(g,m),e(h,v)},d(l){l&&t(h)}}}function Bd(x){let h,k,g,m,v;return m=new qn({props:{code:`from transformers import XGLMTokenizer, XGLMModel
import torch

tokenizer = XGLMTokenizer.from_pretrained("facebook/xglm-564M")
model = XGLMModel.from_pretrained("facebook/xglm-564M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XGLMTokenizer, XGLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XGLMTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XGLMModel.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=n("p"),k=r("Example:"),g=c(),b(m.$$.fragment)},l(l){h=s(l,"P",{});var u=a(h);k=i(u,"Example:"),u.forEach(t),g=p(l),y(m.$$.fragment,l)},m(l,u){_(l,h,u),e(h,k),_(l,g,u),M(m,l,u),v=!0},p:Gn,i(l){v||(w(m.$$.fragment,l),v=!0)},o(l){T(m.$$.fragment,l),v=!1},d(l){l&&t(h),l&&t(g),L(m,l)}}}function Rd(x){let h,k,g,m,v;return{c(){h=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=s(l,"P",{});var u=a(h);k=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(u,"CODE",{});var X=a(g);m=i(X,"Module"),X.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,h,u),e(h,k),e(h,g),e(g,m),e(h,v)},d(l){l&&t(h)}}}function Vd(x){let h,k,g,m,v;return m=new qn({props:{code:`import torch
from transformers import XGLMTokenizer, XGLMForCausalLM

tokenizer = XGLMTokenizer.from_pretrained("facebook/xglm-564M")
model = XGLMForCausalLM.from_pretrained("facebook/xglm-564M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XGLMTokenizer, XGLMForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XGLMTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XGLMForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=n("p"),k=r("Example:"),g=c(),b(m.$$.fragment)},l(l){h=s(l,"P",{});var u=a(h);k=i(u,"Example:"),u.forEach(t),g=p(l),y(m.$$.fragment,l)},m(l,u){_(l,h,u),e(h,k),_(l,g,u),M(m,l,u),v=!0},p:Gn,i(l){v||(w(m.$$.fragment,l),v=!0)},o(l){T(m.$$.fragment,l),v=!1},d(l){l&&t(h),l&&t(g),L(m,l)}}}function Ud(x){let h,k,g,m,v;return{c(){h=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=s(l,"P",{});var u=a(h);k=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(u,"CODE",{});var X=a(g);m=i(X,"Module"),X.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,h,u),e(h,k),e(h,g),e(g,m),e(h,v)},d(l){l&&t(h)}}}function Hd(x){let h,k,g,m,v;return m=new qn({props:{code:`from transformers import XGLMTokenizer, FlaxXGLMModel

tokenizer = XGLMTokenizer.from_pretrained("facebook/xglm-564M")
model = FlaxXGLMModel.from_pretrained("facebook/xglm-564M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XGLMTokenizer, FlaxXGLMModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XGLMTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxXGLMModel.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=n("p"),k=r("Example:"),g=c(),b(m.$$.fragment)},l(l){h=s(l,"P",{});var u=a(h);k=i(u,"Example:"),u.forEach(t),g=p(l),y(m.$$.fragment,l)},m(l,u){_(l,h,u),e(h,k),_(l,g,u),M(m,l,u),v=!0},p:Gn,i(l){v||(w(m.$$.fragment,l),v=!0)},o(l){T(m.$$.fragment,l),v=!1},d(l){l&&t(h),l&&t(g),L(m,l)}}}function Jd(x){let h,k,g,m,v;return{c(){h=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=s(l,"P",{});var u=a(h);k=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(u,"CODE",{});var X=a(g);m=i(X,"Module"),X.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,h,u),e(h,k),e(h,g),e(g,m),e(h,v)},d(l){l&&t(h)}}}function Kd(x){let h,k,g,m,v;return m=new qn({props:{code:`from transformers import XGLMTokenizer, FlaxXGLMForCausalLM

tokenizer = XGLMTokenizer.from_pretrained("facebook/xglm-564M")
model = FlaxXGLMForCausalLM.from_pretrained("facebook/xglm-564M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XGLMTokenizer, FlaxXGLMForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XGLMTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxXGLMForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){h=n("p"),k=r("Example:"),g=c(),b(m.$$.fragment)},l(l){h=s(l,"P",{});var u=a(h);k=i(u,"Example:"),u.forEach(t),g=p(l),y(m.$$.fragment,l)},m(l,u){_(l,h,u),e(h,k),_(l,g,u),M(m,l,u),v=!0},p:Gn,i(l){v||(w(m.$$.fragment,l),v=!0)},o(l){T(m.$$.fragment,l),v=!1},d(l){l&&t(h),l&&t(g),L(m,l)}}}function Zd(x){let h,k,g,m,v,l,u,X,Ms,Fn,ee,fe,zo,Re,ws,Xo,Ts,En,ge,Ls,Ve,xs,$s,Cn,Kt,zs,Pn,Zt,Go,Xs,jn,U,Gs,Ue,qs,Fs,He,Es,Cs,An,te,_e,qo,Je,Ps,Fo,js,On,A,Ke,As,oe,Os,Qt,Is,Ds,Ze,Ns,Ss,Ws,ne,Bs,Yt,Rs,Vs,eo,Us,Hs,Js,ve,In,se,ke,Eo,Qe,Ks,Co,Zs,Dn,$,Ye,Qs,B,Ys,to,ea,ta,oo,oa,na,et,sa,aa,ra,tt,ia,no,la,da,ca,H,ot,pa,Po,ha,ua,nt,so,ma,jo,fa,ga,ao,_a,Ao,va,ka,be,st,ba,at,ya,Oo,Ma,wa,Ta,ye,rt,La,Io,xa,$a,ro,it,Nn,ae,Me,Do,lt,za,No,Xa,Sn,F,dt,Ga,O,qa,So,Fa,Ea,io,Ca,Pa,lo,ja,Aa,ct,Oa,Ia,Da,pt,Na,co,Sa,Wa,Ba,J,ht,Ra,Wo,Va,Ua,ut,po,Ha,Bo,Ja,Ka,ho,Za,Ro,Qa,Ya,we,mt,er,Vo,tr,Wn,re,Te,Uo,ft,or,Ho,nr,Bn,E,gt,sr,_t,ar,uo,rr,ir,lr,vt,dr,kt,cr,pr,hr,Le,ur,Jo,mr,fr,Ko,gr,_r,I,bt,vr,ie,kr,mo,br,yr,Zo,Mr,wr,Tr,xe,Lr,$e,Rn,le,ze,Qo,yt,xr,Yo,$r,Vn,C,Mt,zr,en,Xr,Gr,wt,qr,fo,Fr,Er,Cr,Tt,Pr,Lt,jr,Ar,Or,D,xt,Ir,de,Dr,go,Nr,Sr,tn,Wr,Br,Rr,Xe,Vr,Ge,Un,ce,qe,on,$t,Ur,nn,Hr,Hn,G,zt,Jr,Xt,Kr,_o,Zr,Qr,Yr,Gt,ei,qt,ti,oi,ni,sn,si,ai,R,an,Ft,ri,ii,rn,Et,li,di,ln,Ct,ci,pi,dn,Pt,hi,ui,N,jt,mi,pe,fi,cn,gi,_i,pn,vi,ki,bi,Fe,yi,Ee,Jn,he,Ce,hn,At,Mi,un,wi,Kn,z,Ot,Ti,mn,Li,xi,It,$i,vo,zi,Xi,Gi,Dt,qi,Nt,Fi,Ei,Ci,fn,Pi,ji,V,gn,St,Ai,Oi,_n,Wt,Ii,Di,vn,Bt,Ni,Si,kn,Rt,Wi,Bi,S,Vt,Ri,ue,Vi,bn,Ui,Hi,yn,Ji,Ki,Zi,Pe,Qi,je,Zn;return l=new me({}),Re=new me({}),Je=new me({}),Ke=new q({props:{name:"class transformers.XGLMConfig",anchor:"transformers.XGLMConfig",parameters:[{name:"vocab_size",val:" = 256008"},{name:"max_position_embeddings",val:" = 2048"},{name:"d_model",val:" = 1024"},{name:"ffn_dim",val:" = 4096"},{name:"num_layers",val:" = 24"},{name:"attention_heads",val:" = 16"},{name:"activation_function",val:" = 'gelu'"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"layerdrop",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"scale_embedding",val:" = True"},{name:"use_cache",val:" = True"},{name:"decoder_start_token_id",val:" = 2"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XGLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256008) &#x2014;
Vocabulary size of the XGLM model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.2/en/model_doc/xglm#transformers.XGLMModel">XGLMModel</a> or <a href="/docs/transformers/v4.21.2/en/model_doc/xglm#transformers.FlaxXGLMModel">FlaxXGLMModel</a>.`,name:"vocab_size"},{anchor:"transformers.XGLMConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.XGLMConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimension of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.XGLMConfig.ffn_dim",description:`<strong>ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"ffn_dim"},{anchor:"transformers.XGLMConfig.num_layers",description:`<strong>num_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers Transformer decoder.`,name:"num_layers"},{anchor:"transformers.XGLMConfig.attention_heads",description:`<strong>attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"attention_heads"},{anchor:"transformers.XGLMConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.XGLMConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, dencoder, and pooler.`,name:"dropout"},{anchor:"transformers.XGLMConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.XGLMConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.
layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"activation_dropout"},{anchor:"transformers.XGLMConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.XGLMConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.XGLMConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/xglm/configuration_xglm.py#L29"}}),ve=new Xn({props:{anchor:"transformers.XGLMConfig.example",$$slots:{default:[Sd]},$$scope:{ctx:x}}}),Qe=new me({}),Ye=new q({props:{name:"class transformers.XGLMTokenizer",anchor:"transformers.XGLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XGLMTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.XGLMTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XGLMTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XGLMTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XGLMTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XGLMTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XGLMTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XGLMTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XGLMTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.XGLMTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.XGLMTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/xglm/tokenization_xglm.py#L43"}}),ot=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XGLMTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XGLMTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/xglm/tokenization_xglm.py#L189",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),st=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.XGLMTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.XGLMTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XGLMTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/xglm/tokenization_xglm.py#L214",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),rt=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XGLMTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XGLMTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/xglm/tokenization_xglm.py#L242",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),it=new q({props:{name:"save_vocabulary",anchor:"transformers.XGLMTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/xglm/tokenization_xglm.py#L298"}}),lt=new me({}),dt=new q({props:{name:"class transformers.XGLMTokenizerFast",anchor:"transformers.XGLMTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XGLMTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.XGLMTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XGLMTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XGLMTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XGLMTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XGLMTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XGLMTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XGLMTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/xglm/tokenization_xglm_fast.py#L49"}}),ht=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XGLMTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XGLMTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/xglm/tokenization_xglm_fast.py#L139",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),mt=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XGLMTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XGLMTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/xglm/tokenization_xglm_fast.py#L164",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ft=new me({}),gt=new q({props:{name:"class transformers.XGLMModel",anchor:"transformers.XGLMModel",parameters:[{name:"config",val:": XGLMConfig"},{name:"embed_tokens",val:": typing.Optional[torch.nn.modules.sparse.Embedding] = None"}],parametersDescription:[{anchor:"transformers.XGLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.
config &#x2014; XGLMConfig`,name:"config"},{anchor:"transformers.XGLMModel.embed_tokens",description:"<strong>embed_tokens</strong> (nn.Embedding) &#x2014; output embedding",name:"embed_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/xglm/modeling_xglm.py#L531"}}),bt=new q({props:{name:"forward",anchor:"transformers.XGLMModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XGLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/xglm#transformers.XGLMTokenizer">XGLMTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XGLMModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XGLMModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XGLMModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>input_ids</code> (those that don&#x2019;t
have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.XGLMModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. If
<code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>). This is useful if you want more control over how to convert <code>input_ids</code> indices into
associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XGLMModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.XGLMModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XGLMModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XGLMModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
<p>Args &#x2014;
input_ids (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>):
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/xglm#transformers.XGLMTokenizer">~XGLMTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>
attention_mask (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>
encoder_hidden_states (<code>torch.FloatTensor</code> of shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>, <em>optional</em>):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
of the decoder.
encoder_attention_mask (<code>torch.LongTensor</code> of shape <code>(batch_size, encoder_sequence_length)</code>, <em>optional</em>):
Mask to avoid performing cross-attention on padding tokens indices of encoder input_ids. Mask values
selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>
head_mask (<code>torch.Tensor</code> of shape <code>(num_layers, attention_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>
<p>cross_attn_head_mask (<code>torch.Tensor</code> of shape <code>(num_layers, attention_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>
<p>past_key_values (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>):
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of
shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing
<code>input_ids</code> you can choose to directly pass an embedded representation. This is useful if you want more
control over how to convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal
embedding lookup matrix.
output_attentions (<code>bool</code>, <em>optional</em>):
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.
output_hidden_states (<code>bool</code>, <em>optional</em>):
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.
return_dict (<code>bool</code>, <em>optional</em>):
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/xglm/modeling_xglm.py#L589",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/xglm#transformers.XGLMConfig"
>XGLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xe=new ys({props:{$$slots:{default:[Wd]},$$scope:{ctx:x}}}),$e=new Xn({props:{anchor:"transformers.XGLMModel.forward.example",$$slots:{default:[Bd]},$$scope:{ctx:x}}}),yt=new me({}),Mt=new q({props:{name:"class transformers.XGLMForCausalLM",anchor:"transformers.XGLMForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XGLMForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/xglm/modeling_xglm.py#L820"}}),xt=new q({props:{name:"forward",anchor:"transformers.XGLMForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XGLMForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/xglm#transformers.XGLMTokenizer">XGLMTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XGLMForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XGLMForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XGLMForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>input_ids</code> (those that don&#x2019;t
have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.XGLMForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. If
<code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>). This is useful if you want more control over how to convert <code>input_ids</code> indices into
associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XGLMForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.XGLMForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XGLMForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XGLMForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XGLMForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/xglm/modeling_xglm.py#L850",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/xglm#transformers.XGLMConfig"
>XGLMConfig</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xe=new ys({props:{$$slots:{default:[Rd]},$$scope:{ctx:x}}}),Ge=new Xn({props:{anchor:"transformers.XGLMForCausalLM.forward.example",$$slots:{default:[Vd]},$$scope:{ctx:x}}}),$t=new me({}),zt=new q({props:{name:"class transformers.FlaxXGLMModel",anchor:"transformers.FlaxXGLMModel",parameters:[{name:"config",val:": XGLMConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXGLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxXGLMModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/xglm/modeling_flax_xglm.py#L703"}}),jt=new q({props:{name:"__call__",anchor:"transformers.FlaxXGLMModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxXGLMModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/xglm#transformers.XGLMTokenizer">~XGLMTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXGLMModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXGLMModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXGLMModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxXGLMModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxXGLMModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/xglm/modeling_flax_xglm.py#L625",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/xglm#transformers.XGLMConfig"
>XGLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fe=new ys({props:{$$slots:{default:[Ud]},$$scope:{ctx:x}}}),Ee=new Xn({props:{anchor:"transformers.FlaxXGLMModel.__call__.example",$$slots:{default:[Hd]},$$scope:{ctx:x}}}),At=new me({}),Ot=new q({props:{name:"class transformers.FlaxXGLMForCausalLM",anchor:"transformers.FlaxXGLMForCausalLM",parameters:[{name:"config",val:": XGLMConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXGLMForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxXGLMForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/xglm/modeling_flax_xglm.py#L782"}}),Vt=new q({props:{name:"__call__",anchor:"transformers.FlaxXGLMForCausalLM.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxXGLMForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/xglm#transformers.XGLMTokenizer">~XGLMTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXGLMForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXGLMForCausalLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXGLMForCausalLM.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxXGLMForCausalLM.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxXGLMForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/xglm/modeling_flax_xglm.py#L625",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/xglm#transformers.XGLMConfig"
>XGLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pe=new ys({props:{$$slots:{default:[Jd]},$$scope:{ctx:x}}}),je=new Xn({props:{anchor:"transformers.FlaxXGLMForCausalLM.__call__.example",$$slots:{default:[Kd]},$$scope:{ctx:x}}}),{c(){h=n("meta"),k=c(),g=n("h1"),m=n("a"),v=n("span"),b(l.$$.fragment),u=c(),X=n("span"),Ms=r("XGLM"),Fn=c(),ee=n("h2"),fe=n("a"),zo=n("span"),b(Re.$$.fragment),ws=c(),Xo=n("span"),Ts=r("Overview"),En=c(),ge=n("p"),Ls=r("The XGLM model was proposed in "),Ve=n("a"),xs=r("Few-shot Learning with Multilingual Language Models"),$s=r(`
by Xi Victoria Lin, Todor Mihaylov, Mikel Artetxe, Tianlu Wang, Shuohui Chen, Daniel Simig, Myle Ott, Naman Goyal,
Shruti Bhosale, Jingfei Du, Ramakanth Pasunuru, Sam Shleifer, Punit Singh Koura, Vishrav Chaudhary, Brian O\u2019Horo,
Jeff Wang, Luke Zettlemoyer, Zornitsa Kozareva, Mona Diab, Veselin Stoyanov, Xian Li.`),Cn=c(),Kt=n("p"),zs=r("The abstract from the paper is the following:"),Pn=c(),Zt=n("p"),Go=n("em"),Xs=r(`Large-scale autoregressive language models such as GPT-3 are few-shot learners that can perform a wide range of language
tasks without fine-tuning. While these models are known to be able to jointly represent many different languages,
their training data is dominated by English, potentially limiting their cross-lingual generalization.
In this work, we train multilingual autoregressive language models on a balanced corpus covering a diverse set of languages,
and study their few- and zero-shot learning capabilities in a wide range of tasks. Our largest model with 7.5 billion parameters
sets new state of the art in few-shot learning in more than 20 representative languages, outperforming GPT-3 of comparable size
in multilingual commonsense reasoning (with +7.4% absolute accuracy improvement in 0-shot settings and +9.4% in 4-shot settings)
and natural language inference (+5.4% in each of 0-shot and 4-shot settings). On the FLORES-101 machine translation benchmark,
our model outperforms GPT-3 on 171 out of 182 translation directions with 32 training examples, while surpassing the
official supervised baseline in 45 directions. We present a detailed analysis of where the model succeeds and fails,
showing in particular that it enables cross-lingual in-context learning on some tasks, while there is still room for improvement
on surface form robustness and adaptation to tasks that do not have a natural cloze form. Finally, we evaluate our models
in social value tasks such as hate speech detection in five languages and find it has limitations similar to comparable sized GPT-3 models.`),jn=c(),U=n("p"),Gs=r("This model was contributed by "),Ue=n("a"),qs=r("Suraj"),Fs=r(". The original code can be found "),He=n("a"),Es=r("here"),Cs=r("."),An=c(),te=n("h2"),_e=n("a"),qo=n("span"),b(Je.$$.fragment),Ps=c(),Fo=n("span"),js=r("XGLMConfig"),On=c(),A=n("div"),b(Ke.$$.fragment),As=c(),oe=n("p"),Os=r("This is the configuration class to store the configuration of a "),Qt=n("a"),Is=r("XGLMModel"),Ds=r(`. It is used to instantiate an XGLM
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the XGLM
`),Ze=n("a"),Ns=r("facebook/xglm-564M"),Ss=r(" architecture."),Ws=c(),ne=n("p"),Bs=r("Configuration objects inherit from "),Yt=n("a"),Rs=r("PretrainedConfig"),Vs=r(` and can be used to control the model outputs. Read the
documentation from `),eo=n("a"),Us=r("PretrainedConfig"),Hs=r(" for more information."),Js=c(),b(ve.$$.fragment),In=c(),se=n("h2"),ke=n("a"),Eo=n("span"),b(Qe.$$.fragment),Ks=c(),Co=n("span"),Zs=r("XGLMTokenizer"),Dn=c(),$=n("div"),b(Ye.$$.fragment),Qs=c(),B=n("p"),Ys=r("Adapted from "),to=n("a"),ea=r("RobertaTokenizer"),ta=r(" and "),oo=n("a"),oa=r("XLNetTokenizer"),na=r(`. Based on
`),et=n("a"),sa=r("SentencePiece"),aa=r("."),ra=c(),tt=n("p"),ia=r("This tokenizer inherits from "),no=n("a"),la=r("PreTrainedTokenizer"),da=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ca=c(),H=n("div"),b(ot.$$.fragment),pa=c(),Po=n("p"),ha=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),ua=c(),nt=n("ul"),so=n("li"),ma=r("single sequence: "),jo=n("code"),fa=r("<s> X </s>"),ga=c(),ao=n("li"),_a=r("pair of sequences: "),Ao=n("code"),va=r("<s> A </s></s> B </s>"),ka=c(),be=n("div"),b(st.$$.fragment),ba=c(),at=n("p"),ya=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Oo=n("code"),Ma=r("prepare_for_model"),wa=r(" method."),Ta=c(),ye=n("div"),b(rt.$$.fragment),La=c(),Io=n("p"),xa=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),$a=c(),ro=n("div"),b(it.$$.fragment),Nn=c(),ae=n("h2"),Me=n("a"),Do=n("span"),b(lt.$$.fragment),za=c(),No=n("span"),Xa=r("XGLMTokenizerFast"),Sn=c(),F=n("div"),b(dt.$$.fragment),Ga=c(),O=n("p"),qa=r("Construct a \u201Cfast\u201D XGLM tokenizer (backed by HuggingFace\u2019s "),So=n("em"),Fa=r("tokenizers"),Ea=r(" library). Adapted from "),io=n("a"),Ca=r("RobertaTokenizer"),Pa=r(`
and `),lo=n("a"),ja=r("XLNetTokenizer"),Aa=r(`. Based on
`),ct=n("a"),Oa=r("BPE"),Ia=r("."),Da=c(),pt=n("p"),Na=r("This tokenizer inherits from "),co=n("a"),Sa=r("PreTrainedTokenizerFast"),Wa=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ba=c(),J=n("div"),b(ht.$$.fragment),Ra=c(),Wo=n("p"),Va=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),Ua=c(),ut=n("ul"),po=n("li"),Ha=r("single sequence: "),Bo=n("code"),Ja=r("<s> X </s>"),Ka=c(),ho=n("li"),Za=r("pair of sequences: "),Ro=n("code"),Qa=r("<s> A </s></s> B </s>"),Ya=c(),we=n("div"),b(mt.$$.fragment),er=c(),Vo=n("p"),tr=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),Wn=c(),re=n("h2"),Te=n("a"),Uo=n("span"),b(ft.$$.fragment),or=c(),Ho=n("span"),nr=r("XGLMModel"),Bn=c(),E=n("div"),b(gt.$$.fragment),sr=c(),_t=n("p"),ar=r(`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),uo=n("a"),rr=r("PreTrainedModel"),ir=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lr=c(),vt=n("p"),dr=r("This model is also a PyTorch "),kt=n("a"),cr=r("torch.nn.Module"),pr=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hr=c(),Le=n("p"),ur=r("Transformer decoder consisting of "),Jo=n("em"),mr=r("config.num_layers"),fr=r(" layers. Each layer is a "),Ko=n("code"),gr=r("XGLMDecoderLayer"),_r=c(),I=n("div"),b(bt.$$.fragment),vr=c(),ie=n("p"),kr=r("The "),mo=n("a"),br=r("XGLMModel"),yr=r(" forward method, overrides the "),Zo=n("code"),Mr=r("__call__"),wr=r(" special method."),Tr=c(),b(xe.$$.fragment),Lr=c(),b($e.$$.fragment),Rn=c(),le=n("h2"),ze=n("a"),Qo=n("span"),b(yt.$$.fragment),xr=c(),Yo=n("span"),$r=r("XGLMForCausalLM"),Vn=c(),C=n("div"),b(Mt.$$.fragment),zr=c(),en=n("p"),Xr=r(`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Gr=c(),wt=n("p"),qr=r("This model inherits from "),fo=n("a"),Fr=r("PreTrainedModel"),Er=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cr=c(),Tt=n("p"),Pr=r("This model is also a PyTorch "),Lt=n("a"),jr=r("torch.nn.Module"),Ar=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Or=c(),D=n("div"),b(xt.$$.fragment),Ir=c(),de=n("p"),Dr=r("The "),go=n("a"),Nr=r("XGLMForCausalLM"),Sr=r(" forward method, overrides the "),tn=n("code"),Wr=r("__call__"),Br=r(" special method."),Rr=c(),b(Xe.$$.fragment),Vr=c(),b(Ge.$$.fragment),Un=c(),ce=n("h2"),qe=n("a"),on=n("span"),b($t.$$.fragment),Ur=c(),nn=n("span"),Hr=r("FlaxXGLMModel"),Hn=c(),G=n("div"),b(zt.$$.fragment),Jr=c(),Xt=n("p"),Kr=r(`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),_o=n("a"),Zr=r("FlaxPreTrainedModel"),Qr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yr=c(),Gt=n("p"),ei=r(`This model is also a Flax Linen
`),qt=n("a"),ti=r("flax.nn.Module"),oi=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ni=c(),sn=n("p"),si=r("Finally, this model supports inherent JAX features such as:"),ai=c(),R=n("ul"),an=n("li"),Ft=n("a"),ri=r("Just-In-Time (JIT) compilation"),ii=c(),rn=n("li"),Et=n("a"),li=r("Automatic Differentiation"),di=c(),ln=n("li"),Ct=n("a"),ci=r("Vectorization"),pi=c(),dn=n("li"),Pt=n("a"),hi=r("Parallelization"),ui=c(),N=n("div"),b(jt.$$.fragment),mi=c(),pe=n("p"),fi=r("The "),cn=n("code"),gi=r("FlaxXGLMPreTrainedModel"),_i=r(" forward method, overrides the "),pn=n("code"),vi=r("__call__"),ki=r(" special method."),bi=c(),b(Fe.$$.fragment),yi=c(),b(Ee.$$.fragment),Jn=c(),he=n("h2"),Ce=n("a"),hn=n("span"),b(At.$$.fragment),Mi=c(),un=n("span"),wi=r("FlaxXGLMForCausalLM"),Kn=c(),z=n("div"),b(Ot.$$.fragment),Ti=c(),mn=n("p"),Li=r(`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),xi=c(),It=n("p"),$i=r("This model inherits from "),vo=n("a"),zi=r("FlaxPreTrainedModel"),Xi=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gi=c(),Dt=n("p"),qi=r(`This model is also a Flax Linen
`),Nt=n("a"),Fi=r("flax.nn.Module"),Ei=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ci=c(),fn=n("p"),Pi=r("Finally, this model supports inherent JAX features such as:"),ji=c(),V=n("ul"),gn=n("li"),St=n("a"),Ai=r("Just-In-Time (JIT) compilation"),Oi=c(),_n=n("li"),Wt=n("a"),Ii=r("Automatic Differentiation"),Di=c(),vn=n("li"),Bt=n("a"),Ni=r("Vectorization"),Si=c(),kn=n("li"),Rt=n("a"),Wi=r("Parallelization"),Bi=c(),S=n("div"),b(Vt.$$.fragment),Ri=c(),ue=n("p"),Vi=r("The "),bn=n("code"),Ui=r("FlaxXGLMPreTrainedModel"),Hi=r(" forward method, overrides the "),yn=n("code"),Ji=r("__call__"),Ki=r(" special method."),Zi=c(),b(Pe.$$.fragment),Qi=c(),b(je.$$.fragment),this.h()},l(o){const f=Dd('[data-svelte="svelte-1phssyn"]',document.head);h=s(f,"META",{name:!0,content:!0}),f.forEach(t),k=p(o),g=s(o,"H1",{class:!0});var Ut=a(g);m=s(Ut,"A",{id:!0,class:!0,href:!0});var Mn=a(m);v=s(Mn,"SPAN",{});var wn=a(v);y(l.$$.fragment,wn),wn.forEach(t),Mn.forEach(t),u=p(Ut),X=s(Ut,"SPAN",{});var Tn=a(X);Ms=i(Tn,"XGLM"),Tn.forEach(t),Ut.forEach(t),Fn=p(o),ee=s(o,"H2",{class:!0});var Ht=a(ee);fe=s(Ht,"A",{id:!0,class:!0,href:!0});var Ln=a(fe);zo=s(Ln,"SPAN",{});var xn=a(zo);y(Re.$$.fragment,xn),xn.forEach(t),Ln.forEach(t),ws=p(Ht),Xo=s(Ht,"SPAN",{});var $n=a(Xo);Ts=i($n,"Overview"),$n.forEach(t),Ht.forEach(t),En=p(o),ge=s(o,"P",{});var Jt=a(ge);Ls=i(Jt,"The XGLM model was proposed in "),Ve=s(Jt,"A",{href:!0,rel:!0});var nl=a(Ve);xs=i(nl,"Few-shot Learning with Multilingual Language Models"),nl.forEach(t),$s=i(Jt,`
by Xi Victoria Lin, Todor Mihaylov, Mikel Artetxe, Tianlu Wang, Shuohui Chen, Daniel Simig, Myle Ott, Naman Goyal,
Shruti Bhosale, Jingfei Du, Ramakanth Pasunuru, Sam Shleifer, Punit Singh Koura, Vishrav Chaudhary, Brian O\u2019Horo,
Jeff Wang, Luke Zettlemoyer, Zornitsa Kozareva, Mona Diab, Veselin Stoyanov, Xian Li.`),Jt.forEach(t),Cn=p(o),Kt=s(o,"P",{});var sl=a(Kt);zs=i(sl,"The abstract from the paper is the following:"),sl.forEach(t),Pn=p(o),Zt=s(o,"P",{});var al=a(Zt);Go=s(al,"EM",{});var rl=a(Go);Xs=i(rl,`Large-scale autoregressive language models such as GPT-3 are few-shot learners that can perform a wide range of language
tasks without fine-tuning. While these models are known to be able to jointly represent many different languages,
their training data is dominated by English, potentially limiting their cross-lingual generalization.
In this work, we train multilingual autoregressive language models on a balanced corpus covering a diverse set of languages,
and study their few- and zero-shot learning capabilities in a wide range of tasks. Our largest model with 7.5 billion parameters
sets new state of the art in few-shot learning in more than 20 representative languages, outperforming GPT-3 of comparable size
in multilingual commonsense reasoning (with +7.4% absolute accuracy improvement in 0-shot settings and +9.4% in 4-shot settings)
and natural language inference (+5.4% in each of 0-shot and 4-shot settings). On the FLORES-101 machine translation benchmark,
our model outperforms GPT-3 on 171 out of 182 translation directions with 32 training examples, while surpassing the
official supervised baseline in 45 directions. We present a detailed analysis of where the model succeeds and fails,
showing in particular that it enables cross-lingual in-context learning on some tasks, while there is still room for improvement
on surface form robustness and adaptation to tasks that do not have a natural cloze form. Finally, we evaluate our models
in social value tasks such as hate speech detection in five languages and find it has limitations similar to comparable sized GPT-3 models.`),rl.forEach(t),al.forEach(t),jn=p(o),U=s(o,"P",{});var ko=a(U);Gs=i(ko,"This model was contributed by "),Ue=s(ko,"A",{href:!0,rel:!0});var il=a(Ue);qs=i(il,"Suraj"),il.forEach(t),Fs=i(ko,". The original code can be found "),He=s(ko,"A",{href:!0,rel:!0});var ll=a(He);Es=i(ll,"here"),ll.forEach(t),Cs=i(ko,"."),ko.forEach(t),An=p(o),te=s(o,"H2",{class:!0});var Qn=a(te);_e=s(Qn,"A",{id:!0,class:!0,href:!0});var dl=a(_e);qo=s(dl,"SPAN",{});var cl=a(qo);y(Je.$$.fragment,cl),cl.forEach(t),dl.forEach(t),Ps=p(Qn),Fo=s(Qn,"SPAN",{});var pl=a(Fo);js=i(pl,"XGLMConfig"),pl.forEach(t),Qn.forEach(t),On=p(o),A=s(o,"DIV",{class:!0});var Ae=a(A);y(Ke.$$.fragment,Ae),As=p(Ae),oe=s(Ae,"P",{});var bo=a(oe);Os=i(bo,"This is the configuration class to store the configuration of a "),Qt=s(bo,"A",{href:!0});var hl=a(Qt);Is=i(hl,"XGLMModel"),hl.forEach(t),Ds=i(bo,`. It is used to instantiate an XGLM
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the XGLM
`),Ze=s(bo,"A",{href:!0,rel:!0});var ul=a(Ze);Ns=i(ul,"facebook/xglm-564M"),ul.forEach(t),Ss=i(bo," architecture."),bo.forEach(t),Ws=p(Ae),ne=s(Ae,"P",{});var yo=a(ne);Bs=i(yo,"Configuration objects inherit from "),Yt=s(yo,"A",{href:!0});var ml=a(Yt);Rs=i(ml,"PretrainedConfig"),ml.forEach(t),Vs=i(yo,` and can be used to control the model outputs. Read the
documentation from `),eo=s(yo,"A",{href:!0});var fl=a(eo);Us=i(fl,"PretrainedConfig"),fl.forEach(t),Hs=i(yo," for more information."),yo.forEach(t),Js=p(Ae),y(ve.$$.fragment,Ae),Ae.forEach(t),In=p(o),se=s(o,"H2",{class:!0});var Yn=a(se);ke=s(Yn,"A",{id:!0,class:!0,href:!0});var gl=a(ke);Eo=s(gl,"SPAN",{});var _l=a(Eo);y(Qe.$$.fragment,_l),_l.forEach(t),gl.forEach(t),Ks=p(Yn),Co=s(Yn,"SPAN",{});var vl=a(Co);Zs=i(vl,"XGLMTokenizer"),vl.forEach(t),Yn.forEach(t),Dn=p(o),$=s(o,"DIV",{class:!0});var P=a($);y(Ye.$$.fragment,P),Qs=p(P),B=s(P,"P",{});var Oe=a(B);Ys=i(Oe,"Adapted from "),to=s(Oe,"A",{href:!0});var kl=a(to);ea=i(kl,"RobertaTokenizer"),kl.forEach(t),ta=i(Oe," and "),oo=s(Oe,"A",{href:!0});var bl=a(oo);oa=i(bl,"XLNetTokenizer"),bl.forEach(t),na=i(Oe,`. Based on
`),et=s(Oe,"A",{href:!0,rel:!0});var yl=a(et);sa=i(yl,"SentencePiece"),yl.forEach(t),aa=i(Oe,"."),Oe.forEach(t),ra=p(P),tt=s(P,"P",{});var es=a(tt);ia=i(es,"This tokenizer inherits from "),no=s(es,"A",{href:!0});var Ml=a(no);la=i(Ml,"PreTrainedTokenizer"),Ml.forEach(t),da=i(es,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),es.forEach(t),ca=p(P),H=s(P,"DIV",{class:!0});var Mo=a(H);y(ot.$$.fragment,Mo),pa=p(Mo),Po=s(Mo,"P",{});var wl=a(Po);ha=i(wl,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),wl.forEach(t),ua=p(Mo),nt=s(Mo,"UL",{});var ts=a(nt);so=s(ts,"LI",{});var Yi=a(so);ma=i(Yi,"single sequence: "),jo=s(Yi,"CODE",{});var Tl=a(jo);fa=i(Tl,"<s> X </s>"),Tl.forEach(t),Yi.forEach(t),ga=p(ts),ao=s(ts,"LI",{});var el=a(ao);_a=i(el,"pair of sequences: "),Ao=s(el,"CODE",{});var Ll=a(Ao);va=i(Ll,"<s> A </s></s> B </s>"),Ll.forEach(t),el.forEach(t),ts.forEach(t),Mo.forEach(t),ka=p(P),be=s(P,"DIV",{class:!0});var os=a(be);y(st.$$.fragment,os),ba=p(os),at=s(os,"P",{});var ns=a(at);ya=i(ns,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Oo=s(ns,"CODE",{});var xl=a(Oo);Ma=i(xl,"prepare_for_model"),xl.forEach(t),wa=i(ns," method."),ns.forEach(t),os.forEach(t),Ta=p(P),ye=s(P,"DIV",{class:!0});var ss=a(ye);y(rt.$$.fragment,ss),La=p(ss),Io=s(ss,"P",{});var $l=a(Io);xa=i($l,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),$l.forEach(t),ss.forEach(t),$a=p(P),ro=s(P,"DIV",{class:!0});var zl=a(ro);y(it.$$.fragment,zl),zl.forEach(t),P.forEach(t),Nn=p(o),ae=s(o,"H2",{class:!0});var as=a(ae);Me=s(as,"A",{id:!0,class:!0,href:!0});var Xl=a(Me);Do=s(Xl,"SPAN",{});var Gl=a(Do);y(lt.$$.fragment,Gl),Gl.forEach(t),Xl.forEach(t),za=p(as),No=s(as,"SPAN",{});var ql=a(No);Xa=i(ql,"XGLMTokenizerFast"),ql.forEach(t),as.forEach(t),Sn=p(o),F=s(o,"DIV",{class:!0});var K=a(F);y(dt.$$.fragment,K),Ga=p(K),O=s(K,"P",{});var Z=a(O);qa=i(Z,"Construct a \u201Cfast\u201D XGLM tokenizer (backed by HuggingFace\u2019s "),So=s(Z,"EM",{});var Fl=a(So);Fa=i(Fl,"tokenizers"),Fl.forEach(t),Ea=i(Z," library). Adapted from "),io=s(Z,"A",{href:!0});var El=a(io);Ca=i(El,"RobertaTokenizer"),El.forEach(t),Pa=i(Z,`
and `),lo=s(Z,"A",{href:!0});var Cl=a(lo);ja=i(Cl,"XLNetTokenizer"),Cl.forEach(t),Aa=i(Z,`. Based on
`),ct=s(Z,"A",{href:!0,rel:!0});var Pl=a(ct);Oa=i(Pl,"BPE"),Pl.forEach(t),Ia=i(Z,"."),Z.forEach(t),Da=p(K),pt=s(K,"P",{});var rs=a(pt);Na=i(rs,"This tokenizer inherits from "),co=s(rs,"A",{href:!0});var jl=a(co);Sa=i(jl,"PreTrainedTokenizerFast"),jl.forEach(t),Wa=i(rs,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),rs.forEach(t),Ba=p(K),J=s(K,"DIV",{class:!0});var wo=a(J);y(ht.$$.fragment,wo),Ra=p(wo),Wo=s(wo,"P",{});var Al=a(Wo);Va=i(Al,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),Al.forEach(t),Ua=p(wo),ut=s(wo,"UL",{});var is=a(ut);po=s(is,"LI",{});var tl=a(po);Ha=i(tl,"single sequence: "),Bo=s(tl,"CODE",{});var Ol=a(Bo);Ja=i(Ol,"<s> X </s>"),Ol.forEach(t),tl.forEach(t),Ka=p(is),ho=s(is,"LI",{});var ol=a(ho);Za=i(ol,"pair of sequences: "),Ro=s(ol,"CODE",{});var Il=a(Ro);Qa=i(Il,"<s> A </s></s> B </s>"),Il.forEach(t),ol.forEach(t),is.forEach(t),wo.forEach(t),Ya=p(K),we=s(K,"DIV",{class:!0});var ls=a(we);y(mt.$$.fragment,ls),er=p(ls),Vo=s(ls,"P",{});var Dl=a(Vo);tr=i(Dl,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),Dl.forEach(t),ls.forEach(t),K.forEach(t),Wn=p(o),re=s(o,"H2",{class:!0});var ds=a(re);Te=s(ds,"A",{id:!0,class:!0,href:!0});var Nl=a(Te);Uo=s(Nl,"SPAN",{});var Sl=a(Uo);y(ft.$$.fragment,Sl),Sl.forEach(t),Nl.forEach(t),or=p(ds),Ho=s(ds,"SPAN",{});var Wl=a(Ho);nr=i(Wl,"XGLMModel"),Wl.forEach(t),ds.forEach(t),Bn=p(o),E=s(o,"DIV",{class:!0});var Q=a(E);y(gt.$$.fragment,Q),sr=p(Q),_t=s(Q,"P",{});var cs=a(_t);ar=i(cs,`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),uo=s(cs,"A",{href:!0});var Bl=a(uo);rr=i(Bl,"PreTrainedModel"),Bl.forEach(t),ir=i(cs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cs.forEach(t),lr=p(Q),vt=s(Q,"P",{});var ps=a(vt);dr=i(ps,"This model is also a PyTorch "),kt=s(ps,"A",{href:!0,rel:!0});var Rl=a(kt);cr=i(Rl,"torch.nn.Module"),Rl.forEach(t),pr=i(ps,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ps.forEach(t),hr=p(Q),Le=s(Q,"P",{});var zn=a(Le);ur=i(zn,"Transformer decoder consisting of "),Jo=s(zn,"EM",{});var Vl=a(Jo);mr=i(Vl,"config.num_layers"),Vl.forEach(t),fr=i(zn," layers. Each layer is a "),Ko=s(zn,"CODE",{});var Ul=a(Ko);gr=i(Ul,"XGLMDecoderLayer"),Ul.forEach(t),zn.forEach(t),_r=p(Q),I=s(Q,"DIV",{class:!0});var Ie=a(I);y(bt.$$.fragment,Ie),vr=p(Ie),ie=s(Ie,"P",{});var To=a(ie);kr=i(To,"The "),mo=s(To,"A",{href:!0});var Hl=a(mo);br=i(Hl,"XGLMModel"),Hl.forEach(t),yr=i(To," forward method, overrides the "),Zo=s(To,"CODE",{});var Jl=a(Zo);Mr=i(Jl,"__call__"),Jl.forEach(t),wr=i(To," special method."),To.forEach(t),Tr=p(Ie),y(xe.$$.fragment,Ie),Lr=p(Ie),y($e.$$.fragment,Ie),Ie.forEach(t),Q.forEach(t),Rn=p(o),le=s(o,"H2",{class:!0});var hs=a(le);ze=s(hs,"A",{id:!0,class:!0,href:!0});var Kl=a(ze);Qo=s(Kl,"SPAN",{});var Zl=a(Qo);y(yt.$$.fragment,Zl),Zl.forEach(t),Kl.forEach(t),xr=p(hs),Yo=s(hs,"SPAN",{});var Ql=a(Yo);$r=i(Ql,"XGLMForCausalLM"),Ql.forEach(t),hs.forEach(t),Vn=p(o),C=s(o,"DIV",{class:!0});var Y=a(C);y(Mt.$$.fragment,Y),zr=p(Y),en=s(Y,"P",{});var Yl=a(en);Xr=i(Yl,`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Yl.forEach(t),Gr=p(Y),wt=s(Y,"P",{});var us=a(wt);qr=i(us,"This model inherits from "),fo=s(us,"A",{href:!0});var ed=a(fo);Fr=i(ed,"PreTrainedModel"),ed.forEach(t),Er=i(us,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),us.forEach(t),Cr=p(Y),Tt=s(Y,"P",{});var ms=a(Tt);Pr=i(ms,"This model is also a PyTorch "),Lt=s(ms,"A",{href:!0,rel:!0});var td=a(Lt);jr=i(td,"torch.nn.Module"),td.forEach(t),Ar=i(ms,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ms.forEach(t),Or=p(Y),D=s(Y,"DIV",{class:!0});var De=a(D);y(xt.$$.fragment,De),Ir=p(De),de=s(De,"P",{});var Lo=a(de);Dr=i(Lo,"The "),go=s(Lo,"A",{href:!0});var od=a(go);Nr=i(od,"XGLMForCausalLM"),od.forEach(t),Sr=i(Lo," forward method, overrides the "),tn=s(Lo,"CODE",{});var nd=a(tn);Wr=i(nd,"__call__"),nd.forEach(t),Br=i(Lo," special method."),Lo.forEach(t),Rr=p(De),y(Xe.$$.fragment,De),Vr=p(De),y(Ge.$$.fragment,De),De.forEach(t),Y.forEach(t),Un=p(o),ce=s(o,"H2",{class:!0});var fs=a(ce);qe=s(fs,"A",{id:!0,class:!0,href:!0});var sd=a(qe);on=s(sd,"SPAN",{});var ad=a(on);y($t.$$.fragment,ad),ad.forEach(t),sd.forEach(t),Ur=p(fs),nn=s(fs,"SPAN",{});var rd=a(nn);Hr=i(rd,"FlaxXGLMModel"),rd.forEach(t),fs.forEach(t),Hn=p(o),G=s(o,"DIV",{class:!0});var W=a(G);y(zt.$$.fragment,W),Jr=p(W),Xt=s(W,"P",{});var gs=a(Xt);Kr=i(gs,`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),_o=s(gs,"A",{href:!0});var id=a(_o);Zr=i(id,"FlaxPreTrainedModel"),id.forEach(t),Qr=i(gs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gs.forEach(t),Yr=p(W),Gt=s(W,"P",{});var _s=a(Gt);ei=i(_s,`This model is also a Flax Linen
`),qt=s(_s,"A",{href:!0,rel:!0});var ld=a(qt);ti=i(ld,"flax.nn.Module"),ld.forEach(t),oi=i(_s,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),_s.forEach(t),ni=p(W),sn=s(W,"P",{});var dd=a(sn);si=i(dd,"Finally, this model supports inherent JAX features such as:"),dd.forEach(t),ai=p(W),R=s(W,"UL",{});var Ne=a(R);an=s(Ne,"LI",{});var cd=a(an);Ft=s(cd,"A",{href:!0,rel:!0});var pd=a(Ft);ri=i(pd,"Just-In-Time (JIT) compilation"),pd.forEach(t),cd.forEach(t),ii=p(Ne),rn=s(Ne,"LI",{});var hd=a(rn);Et=s(hd,"A",{href:!0,rel:!0});var ud=a(Et);li=i(ud,"Automatic Differentiation"),ud.forEach(t),hd.forEach(t),di=p(Ne),ln=s(Ne,"LI",{});var md=a(ln);Ct=s(md,"A",{href:!0,rel:!0});var fd=a(Ct);ci=i(fd,"Vectorization"),fd.forEach(t),md.forEach(t),pi=p(Ne),dn=s(Ne,"LI",{});var gd=a(dn);Pt=s(gd,"A",{href:!0,rel:!0});var _d=a(Pt);hi=i(_d,"Parallelization"),_d.forEach(t),gd.forEach(t),Ne.forEach(t),ui=p(W),N=s(W,"DIV",{class:!0});var Se=a(N);y(jt.$$.fragment,Se),mi=p(Se),pe=s(Se,"P",{});var xo=a(pe);fi=i(xo,"The "),cn=s(xo,"CODE",{});var vd=a(cn);gi=i(vd,"FlaxXGLMPreTrainedModel"),vd.forEach(t),_i=i(xo," forward method, overrides the "),pn=s(xo,"CODE",{});var kd=a(pn);vi=i(kd,"__call__"),kd.forEach(t),ki=i(xo," special method."),xo.forEach(t),bi=p(Se),y(Fe.$$.fragment,Se),yi=p(Se),y(Ee.$$.fragment,Se),Se.forEach(t),W.forEach(t),Jn=p(o),he=s(o,"H2",{class:!0});var vs=a(he);Ce=s(vs,"A",{id:!0,class:!0,href:!0});var bd=a(Ce);hn=s(bd,"SPAN",{});var yd=a(hn);y(At.$$.fragment,yd),yd.forEach(t),bd.forEach(t),Mi=p(vs),un=s(vs,"SPAN",{});var Md=a(un);wi=i(Md,"FlaxXGLMForCausalLM"),Md.forEach(t),vs.forEach(t),Kn=p(o),z=s(o,"DIV",{class:!0});var j=a(z);y(Ot.$$.fragment,j),Ti=p(j),mn=s(j,"P",{});var wd=a(mn);Li=i(wd,`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),wd.forEach(t),xi=p(j),It=s(j,"P",{});var ks=a(It);$i=i(ks,"This model inherits from "),vo=s(ks,"A",{href:!0});var Td=a(vo);zi=i(Td,"FlaxPreTrainedModel"),Td.forEach(t),Xi=i(ks,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ks.forEach(t),Gi=p(j),Dt=s(j,"P",{});var bs=a(Dt);qi=i(bs,`This model is also a Flax Linen
`),Nt=s(bs,"A",{href:!0,rel:!0});var Ld=a(Nt);Fi=i(Ld,"flax.nn.Module"),Ld.forEach(t),Ei=i(bs,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),bs.forEach(t),Ci=p(j),fn=s(j,"P",{});var xd=a(fn);Pi=i(xd,"Finally, this model supports inherent JAX features such as:"),xd.forEach(t),ji=p(j),V=s(j,"UL",{});var We=a(V);gn=s(We,"LI",{});var $d=a(gn);St=s($d,"A",{href:!0,rel:!0});var zd=a(St);Ai=i(zd,"Just-In-Time (JIT) compilation"),zd.forEach(t),$d.forEach(t),Oi=p(We),_n=s(We,"LI",{});var Xd=a(_n);Wt=s(Xd,"A",{href:!0,rel:!0});var Gd=a(Wt);Ii=i(Gd,"Automatic Differentiation"),Gd.forEach(t),Xd.forEach(t),Di=p(We),vn=s(We,"LI",{});var qd=a(vn);Bt=s(qd,"A",{href:!0,rel:!0});var Fd=a(Bt);Ni=i(Fd,"Vectorization"),Fd.forEach(t),qd.forEach(t),Si=p(We),kn=s(We,"LI",{});var Ed=a(kn);Rt=s(Ed,"A",{href:!0,rel:!0});var Cd=a(Rt);Wi=i(Cd,"Parallelization"),Cd.forEach(t),Ed.forEach(t),We.forEach(t),Bi=p(j),S=s(j,"DIV",{class:!0});var Be=a(S);y(Vt.$$.fragment,Be),Ri=p(Be),ue=s(Be,"P",{});var $o=a(ue);Vi=i($o,"The "),bn=s($o,"CODE",{});var Pd=a(bn);Ui=i(Pd,"FlaxXGLMPreTrainedModel"),Pd.forEach(t),Hi=i($o," forward method, overrides the "),yn=s($o,"CODE",{});var jd=a(yn);Ji=i(jd,"__call__"),jd.forEach(t),Ki=i($o," special method."),$o.forEach(t),Zi=p(Be),y(Pe.$$.fragment,Be),Qi=p(Be),y(je.$$.fragment,Be),Be.forEach(t),j.forEach(t),this.h()},h(){d(h,"name","hf:doc:metadata"),d(h,"content",JSON.stringify(Qd)),d(m,"id","xglm"),d(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(m,"href","#xglm"),d(g,"class","relative group"),d(fe,"id","overview"),d(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(fe,"href","#overview"),d(ee,"class","relative group"),d(Ve,"href","https://arxiv.org/abs/2112.10668"),d(Ve,"rel","nofollow"),d(Ue,"href","https://huggingface.co/valhalla"),d(Ue,"rel","nofollow"),d(He,"href","https://github.com/pytorch/fairseq/tree/main/examples/xglm"),d(He,"rel","nofollow"),d(_e,"id","transformers.XGLMConfig"),d(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_e,"href","#transformers.XGLMConfig"),d(te,"class","relative group"),d(Qt,"href","/docs/transformers/v4.21.2/en/model_doc/xglm#transformers.XGLMModel"),d(Ze,"href","https://huggingface.co/facebook/xglm-564M"),d(Ze,"rel","nofollow"),d(Yt,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),d(eo,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ke,"id","transformers.XGLMTokenizer"),d(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ke,"href","#transformers.XGLMTokenizer"),d(se,"class","relative group"),d(to,"href","/docs/transformers/v4.21.2/en/model_doc/roberta#transformers.RobertaTokenizer"),d(oo,"href","/docs/transformers/v4.21.2/en/model_doc/xlnet#transformers.XLNetTokenizer"),d(et,"href","https://github.com/google/sentencepiece"),d(et,"rel","nofollow"),d(no,"href","/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Me,"id","transformers.XGLMTokenizerFast"),d(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Me,"href","#transformers.XGLMTokenizerFast"),d(ae,"class","relative group"),d(io,"href","/docs/transformers/v4.21.2/en/model_doc/roberta#transformers.RobertaTokenizer"),d(lo,"href","/docs/transformers/v4.21.2/en/model_doc/xlnet#transformers.XLNetTokenizer"),d(ct,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),d(ct,"rel","nofollow"),d(co,"href","/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),d(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Te,"id","transformers.XGLMModel"),d(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Te,"href","#transformers.XGLMModel"),d(re,"class","relative group"),d(uo,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),d(kt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(kt,"rel","nofollow"),d(mo,"href","/docs/transformers/v4.21.2/en/model_doc/xglm#transformers.XGLMModel"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ze,"id","transformers.XGLMForCausalLM"),d(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ze,"href","#transformers.XGLMForCausalLM"),d(le,"class","relative group"),d(fo,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),d(Lt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Lt,"rel","nofollow"),d(go,"href","/docs/transformers/v4.21.2/en/model_doc/xglm#transformers.XGLMForCausalLM"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(qe,"id","transformers.FlaxXGLMModel"),d(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(qe,"href","#transformers.FlaxXGLMModel"),d(ce,"class","relative group"),d(_o,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(qt,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),d(qt,"rel","nofollow"),d(Ft,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(Ft,"rel","nofollow"),d(Et,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Et,"rel","nofollow"),d(Ct,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Ct,"rel","nofollow"),d(Pt,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Pt,"rel","nofollow"),d(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ce,"id","transformers.FlaxXGLMForCausalLM"),d(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ce,"href","#transformers.FlaxXGLMForCausalLM"),d(he,"class","relative group"),d(vo,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(Nt,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),d(Nt,"rel","nofollow"),d(St,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(St,"rel","nofollow"),d(Wt,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Wt,"rel","nofollow"),d(Bt,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Bt,"rel","nofollow"),d(Rt,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Rt,"rel","nofollow"),d(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,f){e(document.head,h),_(o,k,f),_(o,g,f),e(g,m),e(m,v),M(l,v,null),e(g,u),e(g,X),e(X,Ms),_(o,Fn,f),_(o,ee,f),e(ee,fe),e(fe,zo),M(Re,zo,null),e(ee,ws),e(ee,Xo),e(Xo,Ts),_(o,En,f),_(o,ge,f),e(ge,Ls),e(ge,Ve),e(Ve,xs),e(ge,$s),_(o,Cn,f),_(o,Kt,f),e(Kt,zs),_(o,Pn,f),_(o,Zt,f),e(Zt,Go),e(Go,Xs),_(o,jn,f),_(o,U,f),e(U,Gs),e(U,Ue),e(Ue,qs),e(U,Fs),e(U,He),e(He,Es),e(U,Cs),_(o,An,f),_(o,te,f),e(te,_e),e(_e,qo),M(Je,qo,null),e(te,Ps),e(te,Fo),e(Fo,js),_(o,On,f),_(o,A,f),M(Ke,A,null),e(A,As),e(A,oe),e(oe,Os),e(oe,Qt),e(Qt,Is),e(oe,Ds),e(oe,Ze),e(Ze,Ns),e(oe,Ss),e(A,Ws),e(A,ne),e(ne,Bs),e(ne,Yt),e(Yt,Rs),e(ne,Vs),e(ne,eo),e(eo,Us),e(ne,Hs),e(A,Js),M(ve,A,null),_(o,In,f),_(o,se,f),e(se,ke),e(ke,Eo),M(Qe,Eo,null),e(se,Ks),e(se,Co),e(Co,Zs),_(o,Dn,f),_(o,$,f),M(Ye,$,null),e($,Qs),e($,B),e(B,Ys),e(B,to),e(to,ea),e(B,ta),e(B,oo),e(oo,oa),e(B,na),e(B,et),e(et,sa),e(B,aa),e($,ra),e($,tt),e(tt,ia),e(tt,no),e(no,la),e(tt,da),e($,ca),e($,H),M(ot,H,null),e(H,pa),e(H,Po),e(Po,ha),e(H,ua),e(H,nt),e(nt,so),e(so,ma),e(so,jo),e(jo,fa),e(nt,ga),e(nt,ao),e(ao,_a),e(ao,Ao),e(Ao,va),e($,ka),e($,be),M(st,be,null),e(be,ba),e(be,at),e(at,ya),e(at,Oo),e(Oo,Ma),e(at,wa),e($,Ta),e($,ye),M(rt,ye,null),e(ye,La),e(ye,Io),e(Io,xa),e($,$a),e($,ro),M(it,ro,null),_(o,Nn,f),_(o,ae,f),e(ae,Me),e(Me,Do),M(lt,Do,null),e(ae,za),e(ae,No),e(No,Xa),_(o,Sn,f),_(o,F,f),M(dt,F,null),e(F,Ga),e(F,O),e(O,qa),e(O,So),e(So,Fa),e(O,Ea),e(O,io),e(io,Ca),e(O,Pa),e(O,lo),e(lo,ja),e(O,Aa),e(O,ct),e(ct,Oa),e(O,Ia),e(F,Da),e(F,pt),e(pt,Na),e(pt,co),e(co,Sa),e(pt,Wa),e(F,Ba),e(F,J),M(ht,J,null),e(J,Ra),e(J,Wo),e(Wo,Va),e(J,Ua),e(J,ut),e(ut,po),e(po,Ha),e(po,Bo),e(Bo,Ja),e(ut,Ka),e(ut,ho),e(ho,Za),e(ho,Ro),e(Ro,Qa),e(F,Ya),e(F,we),M(mt,we,null),e(we,er),e(we,Vo),e(Vo,tr),_(o,Wn,f),_(o,re,f),e(re,Te),e(Te,Uo),M(ft,Uo,null),e(re,or),e(re,Ho),e(Ho,nr),_(o,Bn,f),_(o,E,f),M(gt,E,null),e(E,sr),e(E,_t),e(_t,ar),e(_t,uo),e(uo,rr),e(_t,ir),e(E,lr),e(E,vt),e(vt,dr),e(vt,kt),e(kt,cr),e(vt,pr),e(E,hr),e(E,Le),e(Le,ur),e(Le,Jo),e(Jo,mr),e(Le,fr),e(Le,Ko),e(Ko,gr),e(E,_r),e(E,I),M(bt,I,null),e(I,vr),e(I,ie),e(ie,kr),e(ie,mo),e(mo,br),e(ie,yr),e(ie,Zo),e(Zo,Mr),e(ie,wr),e(I,Tr),M(xe,I,null),e(I,Lr),M($e,I,null),_(o,Rn,f),_(o,le,f),e(le,ze),e(ze,Qo),M(yt,Qo,null),e(le,xr),e(le,Yo),e(Yo,$r),_(o,Vn,f),_(o,C,f),M(Mt,C,null),e(C,zr),e(C,en),e(en,Xr),e(C,Gr),e(C,wt),e(wt,qr),e(wt,fo),e(fo,Fr),e(wt,Er),e(C,Cr),e(C,Tt),e(Tt,Pr),e(Tt,Lt),e(Lt,jr),e(Tt,Ar),e(C,Or),e(C,D),M(xt,D,null),e(D,Ir),e(D,de),e(de,Dr),e(de,go),e(go,Nr),e(de,Sr),e(de,tn),e(tn,Wr),e(de,Br),e(D,Rr),M(Xe,D,null),e(D,Vr),M(Ge,D,null),_(o,Un,f),_(o,ce,f),e(ce,qe),e(qe,on),M($t,on,null),e(ce,Ur),e(ce,nn),e(nn,Hr),_(o,Hn,f),_(o,G,f),M(zt,G,null),e(G,Jr),e(G,Xt),e(Xt,Kr),e(Xt,_o),e(_o,Zr),e(Xt,Qr),e(G,Yr),e(G,Gt),e(Gt,ei),e(Gt,qt),e(qt,ti),e(Gt,oi),e(G,ni),e(G,sn),e(sn,si),e(G,ai),e(G,R),e(R,an),e(an,Ft),e(Ft,ri),e(R,ii),e(R,rn),e(rn,Et),e(Et,li),e(R,di),e(R,ln),e(ln,Ct),e(Ct,ci),e(R,pi),e(R,dn),e(dn,Pt),e(Pt,hi),e(G,ui),e(G,N),M(jt,N,null),e(N,mi),e(N,pe),e(pe,fi),e(pe,cn),e(cn,gi),e(pe,_i),e(pe,pn),e(pn,vi),e(pe,ki),e(N,bi),M(Fe,N,null),e(N,yi),M(Ee,N,null),_(o,Jn,f),_(o,he,f),e(he,Ce),e(Ce,hn),M(At,hn,null),e(he,Mi),e(he,un),e(un,wi),_(o,Kn,f),_(o,z,f),M(Ot,z,null),e(z,Ti),e(z,mn),e(mn,Li),e(z,xi),e(z,It),e(It,$i),e(It,vo),e(vo,zi),e(It,Xi),e(z,Gi),e(z,Dt),e(Dt,qi),e(Dt,Nt),e(Nt,Fi),e(Dt,Ei),e(z,Ci),e(z,fn),e(fn,Pi),e(z,ji),e(z,V),e(V,gn),e(gn,St),e(St,Ai),e(V,Oi),e(V,_n),e(_n,Wt),e(Wt,Ii),e(V,Di),e(V,vn),e(vn,Bt),e(Bt,Ni),e(V,Si),e(V,kn),e(kn,Rt),e(Rt,Wi),e(z,Bi),e(z,S),M(Vt,S,null),e(S,Ri),e(S,ue),e(ue,Vi),e(ue,bn),e(bn,Ui),e(ue,Hi),e(ue,yn),e(yn,Ji),e(ue,Ki),e(S,Zi),M(Pe,S,null),e(S,Qi),M(je,S,null),Zn=!0},p(o,[f]){const Ut={};f&2&&(Ut.$$scope={dirty:f,ctx:o}),ve.$set(Ut);const Mn={};f&2&&(Mn.$$scope={dirty:f,ctx:o}),xe.$set(Mn);const wn={};f&2&&(wn.$$scope={dirty:f,ctx:o}),$e.$set(wn);const Tn={};f&2&&(Tn.$$scope={dirty:f,ctx:o}),Xe.$set(Tn);const Ht={};f&2&&(Ht.$$scope={dirty:f,ctx:o}),Ge.$set(Ht);const Ln={};f&2&&(Ln.$$scope={dirty:f,ctx:o}),Fe.$set(Ln);const xn={};f&2&&(xn.$$scope={dirty:f,ctx:o}),Ee.$set(xn);const $n={};f&2&&($n.$$scope={dirty:f,ctx:o}),Pe.$set($n);const Jt={};f&2&&(Jt.$$scope={dirty:f,ctx:o}),je.$set(Jt)},i(o){Zn||(w(l.$$.fragment,o),w(Re.$$.fragment,o),w(Je.$$.fragment,o),w(Ke.$$.fragment,o),w(ve.$$.fragment,o),w(Qe.$$.fragment,o),w(Ye.$$.fragment,o),w(ot.$$.fragment,o),w(st.$$.fragment,o),w(rt.$$.fragment,o),w(it.$$.fragment,o),w(lt.$$.fragment,o),w(dt.$$.fragment,o),w(ht.$$.fragment,o),w(mt.$$.fragment,o),w(ft.$$.fragment,o),w(gt.$$.fragment,o),w(bt.$$.fragment,o),w(xe.$$.fragment,o),w($e.$$.fragment,o),w(yt.$$.fragment,o),w(Mt.$$.fragment,o),w(xt.$$.fragment,o),w(Xe.$$.fragment,o),w(Ge.$$.fragment,o),w($t.$$.fragment,o),w(zt.$$.fragment,o),w(jt.$$.fragment,o),w(Fe.$$.fragment,o),w(Ee.$$.fragment,o),w(At.$$.fragment,o),w(Ot.$$.fragment,o),w(Vt.$$.fragment,o),w(Pe.$$.fragment,o),w(je.$$.fragment,o),Zn=!0)},o(o){T(l.$$.fragment,o),T(Re.$$.fragment,o),T(Je.$$.fragment,o),T(Ke.$$.fragment,o),T(ve.$$.fragment,o),T(Qe.$$.fragment,o),T(Ye.$$.fragment,o),T(ot.$$.fragment,o),T(st.$$.fragment,o),T(rt.$$.fragment,o),T(it.$$.fragment,o),T(lt.$$.fragment,o),T(dt.$$.fragment,o),T(ht.$$.fragment,o),T(mt.$$.fragment,o),T(ft.$$.fragment,o),T(gt.$$.fragment,o),T(bt.$$.fragment,o),T(xe.$$.fragment,o),T($e.$$.fragment,o),T(yt.$$.fragment,o),T(Mt.$$.fragment,o),T(xt.$$.fragment,o),T(Xe.$$.fragment,o),T(Ge.$$.fragment,o),T($t.$$.fragment,o),T(zt.$$.fragment,o),T(jt.$$.fragment,o),T(Fe.$$.fragment,o),T(Ee.$$.fragment,o),T(At.$$.fragment,o),T(Ot.$$.fragment,o),T(Vt.$$.fragment,o),T(Pe.$$.fragment,o),T(je.$$.fragment,o),Zn=!1},d(o){t(h),o&&t(k),o&&t(g),L(l),o&&t(Fn),o&&t(ee),L(Re),o&&t(En),o&&t(ge),o&&t(Cn),o&&t(Kt),o&&t(Pn),o&&t(Zt),o&&t(jn),o&&t(U),o&&t(An),o&&t(te),L(Je),o&&t(On),o&&t(A),L(Ke),L(ve),o&&t(In),o&&t(se),L(Qe),o&&t(Dn),o&&t($),L(Ye),L(ot),L(st),L(rt),L(it),o&&t(Nn),o&&t(ae),L(lt),o&&t(Sn),o&&t(F),L(dt),L(ht),L(mt),o&&t(Wn),o&&t(re),L(ft),o&&t(Bn),o&&t(E),L(gt),L(bt),L(xe),L($e),o&&t(Rn),o&&t(le),L(yt),o&&t(Vn),o&&t(C),L(Mt),L(xt),L(Xe),L(Ge),o&&t(Un),o&&t(ce),L($t),o&&t(Hn),o&&t(G),L(zt),L(jt),L(Fe),L(Ee),o&&t(Jn),o&&t(he),L(At),o&&t(Kn),o&&t(z),L(Ot),L(Vt),L(Pe),L(je)}}}const Qd={local:"xglm",sections:[{local:"overview",title:"Overview"},{local:"transformers.XGLMConfig",title:"XGLMConfig"},{local:"transformers.XGLMTokenizer",title:"XGLMTokenizer"},{local:"transformers.XGLMTokenizerFast",title:"XGLMTokenizerFast"},{local:"transformers.XGLMModel",title:"XGLMModel"},{local:"transformers.XGLMForCausalLM",title:"XGLMForCausalLM"},{local:"transformers.FlaxXGLMModel",title:"FlaxXGLMModel"},{local:"transformers.FlaxXGLMForCausalLM",title:"FlaxXGLMForCausalLM"}],title:"XGLM"};function Yd(x){return Nd(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class rc extends Ad{constructor(h){super();Od(this,h,Yd,Zd,Id,{})}}export{rc as default,Qd as metadata};
