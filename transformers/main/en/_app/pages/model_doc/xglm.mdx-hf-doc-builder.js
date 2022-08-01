import{S as Ad,i as Od,s as Id,e as n,k as c,w as v,t as r,M as Dd,c as a,d as t,m as p,a as s,x as y,h as i,b as d,G as e,g as _,y as M,q as w,o as T,B as L,v as Nd,L as Gn}from"../../chunks/vendor-hf-doc-builder.js";import{T as ya}from"../../chunks/Tip-hf-doc-builder.js";import{D as q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as qn}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ue}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Xn}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Sd(x){let h,b,g,u,k;return u=new qn({props:{code:`from transformers import XGLMModel, XGLMConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){h=n("p"),b=r("Example:"),g=c(),v(u.$$.fragment)},l(l){h=a(l,"P",{});var m=s(h);b=i(m,"Example:"),m.forEach(t),g=p(l),y(u.$$.fragment,l)},m(l,m){_(l,h,m),e(h,b),_(l,g,m),M(u,l,m),k=!0},p:Gn,i(l){k||(w(u.$$.fragment,l),k=!0)},o(l){T(u.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),L(u,l)}}}function Wd(x){let h,b,g,u,k;return{c(){h=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=a(l,"P",{});var m=s(h);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(m,"CODE",{});var X=s(g);u=i(X,"Module"),X.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,h,m),e(h,b),e(h,g),e(g,u),e(h,k)},d(l){l&&t(h)}}}function Bd(x){let h,b,g,u,k;return u=new qn({props:{code:`from transformers import XGLMTokenizer, XGLMModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=n("p"),b=r("Example:"),g=c(),v(u.$$.fragment)},l(l){h=a(l,"P",{});var m=s(h);b=i(m,"Example:"),m.forEach(t),g=p(l),y(u.$$.fragment,l)},m(l,m){_(l,h,m),e(h,b),_(l,g,m),M(u,l,m),k=!0},p:Gn,i(l){k||(w(u.$$.fragment,l),k=!0)},o(l){T(u.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),L(u,l)}}}function Rd(x){let h,b,g,u,k;return{c(){h=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=a(l,"P",{});var m=s(h);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(m,"CODE",{});var X=s(g);u=i(X,"Module"),X.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,h,m),e(h,b),e(h,g),e(g,u),e(h,k)},d(l){l&&t(h)}}}function Ud(x){let h,b,g,u,k;return u=new qn({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=n("p"),b=r("Example:"),g=c(),v(u.$$.fragment)},l(l){h=a(l,"P",{});var m=s(h);b=i(m,"Example:"),m.forEach(t),g=p(l),y(u.$$.fragment,l)},m(l,m){_(l,h,m),e(h,b),_(l,g,m),M(u,l,m),k=!0},p:Gn,i(l){k||(w(u.$$.fragment,l),k=!0)},o(l){T(u.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),L(u,l)}}}function Vd(x){let h,b,g,u,k;return{c(){h=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=a(l,"P",{});var m=s(h);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(m,"CODE",{});var X=s(g);u=i(X,"Module"),X.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,h,m),e(h,b),e(h,g),e(g,u),e(h,k)},d(l){l&&t(h)}}}function Hd(x){let h,b,g,u,k;return u=new qn({props:{code:`from transformers import XGLMTokenizer, FlaxXGLMModel

tokenizer = XGLMTokenizer.from_pretrained("facebook/xglm-564M")
model = FlaxXGLMModel.from_pretrained("facebook/xglm-564M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XGLMTokenizer, FlaxXGLMModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XGLMTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxXGLMModel.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=n("p"),b=r("Example:"),g=c(),v(u.$$.fragment)},l(l){h=a(l,"P",{});var m=s(h);b=i(m,"Example:"),m.forEach(t),g=p(l),y(u.$$.fragment,l)},m(l,m){_(l,h,m),e(h,b),_(l,g,m),M(u,l,m),k=!0},p:Gn,i(l){k||(w(u.$$.fragment,l),k=!0)},o(l){T(u.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),L(u,l)}}}function Jd(x){let h,b,g,u,k;return{c(){h=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=a(l,"P",{});var m=s(h);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(m,"CODE",{});var X=s(g);u=i(X,"Module"),X.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,h,m),e(h,b),e(h,g),e(g,u),e(h,k)},d(l){l&&t(h)}}}function Kd(x){let h,b,g,u,k;return u=new qn({props:{code:`from transformers import XGLMTokenizer, FlaxXGLMForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){h=n("p"),b=r("Example:"),g=c(),v(u.$$.fragment)},l(l){h=a(l,"P",{});var m=s(h);b=i(m,"Example:"),m.forEach(t),g=p(l),y(u.$$.fragment,l)},m(l,m){_(l,h,m),e(h,b),_(l,g,m),M(u,l,m),k=!0},p:Gn,i(l){k||(w(u.$$.fragment,l),k=!0)},o(l){T(u.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),L(u,l)}}}function Zd(x){let h,b,g,u,k,l,m,X,Ma,Fn,ee,fe,zo,Re,wa,Xo,Ta,En,ge,La,Ue,xa,$a,Pn,Kt,za,Cn,Zt,Go,Xa,jn,V,Ga,Ve,qa,Fa,He,Ea,Pa,An,te,_e,qo,Je,Ca,Fo,ja,On,A,Ke,Aa,oe,Oa,Qt,Ia,Da,Ze,Na,Sa,Wa,ne,Ba,Yt,Ra,Ua,eo,Va,Ha,Ja,ke,In,ae,be,Eo,Qe,Ka,Po,Za,Dn,$,Ye,Qa,B,Ya,to,es,ts,oo,os,ns,et,as,ss,rs,tt,is,no,ls,ds,cs,H,ot,ps,Co,hs,ms,nt,ao,us,jo,fs,gs,so,_s,Ao,ks,bs,ve,at,vs,st,ys,Oo,Ms,ws,Ts,ye,rt,Ls,Io,xs,$s,ro,it,Nn,se,Me,Do,lt,zs,No,Xs,Sn,F,dt,Gs,O,qs,So,Fs,Es,io,Ps,Cs,lo,js,As,ct,Os,Is,Ds,pt,Ns,co,Ss,Ws,Bs,J,ht,Rs,Wo,Us,Vs,mt,po,Hs,Bo,Js,Ks,ho,Zs,Ro,Qs,Ys,we,ut,er,Uo,tr,Wn,re,Te,Vo,ft,or,Ho,nr,Bn,E,gt,ar,_t,sr,mo,rr,ir,lr,kt,dr,bt,cr,pr,hr,Le,mr,Jo,ur,fr,Ko,gr,_r,I,vt,kr,ie,br,uo,vr,yr,Zo,Mr,wr,Tr,xe,Lr,$e,Rn,le,ze,Qo,yt,xr,Yo,$r,Un,P,Mt,zr,en,Xr,Gr,wt,qr,fo,Fr,Er,Pr,Tt,Cr,Lt,jr,Ar,Or,D,xt,Ir,de,Dr,go,Nr,Sr,tn,Wr,Br,Rr,Xe,Ur,Ge,Vn,ce,qe,on,$t,Vr,nn,Hr,Hn,G,zt,Jr,Xt,Kr,_o,Zr,Qr,Yr,Gt,ei,qt,ti,oi,ni,an,ai,si,R,sn,Ft,ri,ii,rn,Et,li,di,ln,Pt,ci,pi,dn,Ct,hi,mi,N,jt,ui,pe,fi,cn,gi,_i,pn,ki,bi,vi,Fe,yi,Ee,Jn,he,Pe,hn,At,Mi,mn,wi,Kn,z,Ot,Ti,un,Li,xi,It,$i,ko,zi,Xi,Gi,Dt,qi,Nt,Fi,Ei,Pi,fn,Ci,ji,U,gn,St,Ai,Oi,_n,Wt,Ii,Di,kn,Bt,Ni,Si,bn,Rt,Wi,Bi,S,Ut,Ri,me,Ui,vn,Vi,Hi,yn,Ji,Ki,Zi,Ce,Qi,je,Zn;return l=new ue({}),Re=new ue({}),Je=new ue({}),Ke=new q({props:{name:"class transformers.XGLMConfig",anchor:"transformers.XGLMConfig",parameters:[{name:"vocab_size",val:" = 256008"},{name:"max_position_embeddings",val:" = 2048"},{name:"d_model",val:" = 1024"},{name:"ffn_dim",val:" = 4096"},{name:"num_layers",val:" = 24"},{name:"attention_heads",val:" = 16"},{name:"activation_function",val:" = 'gelu'"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"layerdrop",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"scale_embedding",val:" = True"},{name:"use_cache",val:" = True"},{name:"decoder_start_token_id",val:" = 2"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XGLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256008) &#x2014;
Vocabulary size of the XGLM model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMModel">XGLMModel</a> or <a href="/docs/transformers/main/en/model_doc/xglm#transformers.FlaxXGLMModel">FlaxXGLMModel</a>.`,name:"vocab_size"},{anchor:"transformers.XGLMConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/configuration_xglm.py#L29"}}),ke=new Xn({props:{anchor:"transformers.XGLMConfig.example",$$slots:{default:[Sd]},$$scope:{ctx:x}}}),Qe=new ue({}),Ye=new q({props:{name:"class transformers.XGLMTokenizer",anchor:"transformers.XGLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XGLMTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/tokenization_xglm.py#L43"}}),ot=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XGLMTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XGLMTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/tokenization_xglm.py#L189",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),at=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.XGLMTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.XGLMTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XGLMTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/tokenization_xglm.py#L214",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),rt=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XGLMTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XGLMTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/tokenization_xglm.py#L242",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),it=new q({props:{name:"save_vocabulary",anchor:"transformers.XGLMTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/tokenization_xglm.py#L298"}}),lt=new ue({}),dt=new q({props:{name:"class transformers.XGLMTokenizerFast",anchor:"transformers.XGLMTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XGLMTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/tokenization_xglm_fast.py#L49"}}),ht=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XGLMTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XGLMTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/tokenization_xglm_fast.py#L139",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ut=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XGLMTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XGLMTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/tokenization_xglm_fast.py#L164",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ft=new ue({}),gt=new q({props:{name:"class transformers.XGLMModel",anchor:"transformers.XGLMModel",parameters:[{name:"config",val:": XGLMConfig"},{name:"embed_tokens",val:": typing.Optional[torch.nn.modules.sparse.Embedding] = None"}],parametersDescription:[{anchor:"transformers.XGLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.
config &#x2014; XGLMConfig`,name:"config"},{anchor:"transformers.XGLMModel.embed_tokens",description:"<strong>embed_tokens</strong> (nn.Embedding) &#x2014; output embedding",name:"embed_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/modeling_xglm.py#L531"}}),vt=new q({props:{name:"forward",anchor:"transformers.XGLMModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XGLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMTokenizer">XGLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all <code>input_ids</code>
of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you can choose to
directly pass an embedded representation. This is useful if you want more control over how to convert
<code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.XGLMModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
<p>Args &#x2014;
input_ids (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>):
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMTokenizer">~XGLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/modeling_xglm.py#L589",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xe=new ya({props:{$$slots:{default:[Wd]},$$scope:{ctx:x}}}),$e=new Xn({props:{anchor:"transformers.XGLMModel.forward.example",$$slots:{default:[Bd]},$$scope:{ctx:x}}}),yt=new ue({}),Mt=new q({props:{name:"class transformers.XGLMForCausalLM",anchor:"transformers.XGLMForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XGLMForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/modeling_xglm.py#L820"}}),xt=new q({props:{name:"forward",anchor:"transformers.XGLMForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XGLMForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMTokenizer">XGLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all <code>input_ids</code>
of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you can choose to
directly pass an embedded representation. This is useful if you want more control over how to convert
<code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.XGLMForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XGLMForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/modeling_xglm.py#L850",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xe=new ya({props:{$$slots:{default:[Rd]},$$scope:{ctx:x}}}),Ge=new Xn({props:{anchor:"transformers.XGLMForCausalLM.forward.example",$$slots:{default:[Ud]},$$scope:{ctx:x}}}),$t=new ue({}),zt=new q({props:{name:"class transformers.FlaxXGLMModel",anchor:"transformers.FlaxXGLMModel",parameters:[{name:"config",val:": XGLMConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXGLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxXGLMModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/modeling_flax_xglm.py#L703"}}),jt=new q({props:{name:"__call__",anchor:"transformers.FlaxXGLMModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxXGLMModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMTokenizer">~XGLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/modeling_flax_xglm.py#L625",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fe=new ya({props:{$$slots:{default:[Vd]},$$scope:{ctx:x}}}),Ee=new Xn({props:{anchor:"transformers.FlaxXGLMModel.__call__.example",$$slots:{default:[Hd]},$$scope:{ctx:x}}}),At=new ue({}),Ot=new q({props:{name:"class transformers.FlaxXGLMForCausalLM",anchor:"transformers.FlaxXGLMForCausalLM",parameters:[{name:"config",val:": XGLMConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXGLMForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxXGLMForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/modeling_flax_xglm.py#L782"}}),Ut=new q({props:{name:"__call__",anchor:"transformers.FlaxXGLMForCausalLM.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxXGLMForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMTokenizer">~XGLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/modeling_flax_xglm.py#L625",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ce=new ya({props:{$$slots:{default:[Jd]},$$scope:{ctx:x}}}),je=new Xn({props:{anchor:"transformers.FlaxXGLMForCausalLM.__call__.example",$$slots:{default:[Kd]},$$scope:{ctx:x}}}),{c(){h=n("meta"),b=c(),g=n("h1"),u=n("a"),k=n("span"),v(l.$$.fragment),m=c(),X=n("span"),Ma=r("XGLM"),Fn=c(),ee=n("h2"),fe=n("a"),zo=n("span"),v(Re.$$.fragment),wa=c(),Xo=n("span"),Ta=r("Overview"),En=c(),ge=n("p"),La=r("The XGLM model was proposed in "),Ue=n("a"),xa=r("Few-shot Learning with Multilingual Language Models"),$a=r(`
by Xi Victoria Lin, Todor Mihaylov, Mikel Artetxe, Tianlu Wang, Shuohui Chen, Daniel Simig, Myle Ott, Naman Goyal,
Shruti Bhosale, Jingfei Du, Ramakanth Pasunuru, Sam Shleifer, Punit Singh Koura, Vishrav Chaudhary, Brian O\u2019Horo,
Jeff Wang, Luke Zettlemoyer, Zornitsa Kozareva, Mona Diab, Veselin Stoyanov, Xian Li.`),Pn=c(),Kt=n("p"),za=r("The abstract from the paper is the following:"),Cn=c(),Zt=n("p"),Go=n("em"),Xa=r(`Large-scale autoregressive language models such as GPT-3 are few-shot learners that can perform a wide range of language
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
in social value tasks such as hate speech detection in five languages and find it has limitations similar to comparable sized GPT-3 models.`),jn=c(),V=n("p"),Ga=r("This model was contributed by "),Ve=n("a"),qa=r("Suraj"),Fa=r(". The original code can be found "),He=n("a"),Ea=r("here"),Pa=r("."),An=c(),te=n("h2"),_e=n("a"),qo=n("span"),v(Je.$$.fragment),Ca=c(),Fo=n("span"),ja=r("XGLMConfig"),On=c(),A=n("div"),v(Ke.$$.fragment),Aa=c(),oe=n("p"),Oa=r("This is the configuration class to store the configuration of a "),Qt=n("a"),Ia=r("XGLMModel"),Da=r(`. It is used to instantiate an XGLM
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the XGLM
`),Ze=n("a"),Na=r("facebook/xglm-564M"),Sa=r(" architecture."),Wa=c(),ne=n("p"),Ba=r("Configuration objects inherit from "),Yt=n("a"),Ra=r("PretrainedConfig"),Ua=r(` and can be used to control the model outputs. Read the
documentation from `),eo=n("a"),Va=r("PretrainedConfig"),Ha=r(" for more information."),Ja=c(),v(ke.$$.fragment),In=c(),ae=n("h2"),be=n("a"),Eo=n("span"),v(Qe.$$.fragment),Ka=c(),Po=n("span"),Za=r("XGLMTokenizer"),Dn=c(),$=n("div"),v(Ye.$$.fragment),Qa=c(),B=n("p"),Ya=r("Adapted from "),to=n("a"),es=r("RobertaTokenizer"),ts=r(" and "),oo=n("a"),os=r("XLNetTokenizer"),ns=r(`. Based on
`),et=n("a"),as=r("SentencePiece"),ss=r("."),rs=c(),tt=n("p"),is=r("This tokenizer inherits from "),no=n("a"),ls=r("PreTrainedTokenizer"),ds=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),cs=c(),H=n("div"),v(ot.$$.fragment),ps=c(),Co=n("p"),hs=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),ms=c(),nt=n("ul"),ao=n("li"),us=r("single sequence: "),jo=n("code"),fs=r("<s> X </s>"),gs=c(),so=n("li"),_s=r("pair of sequences: "),Ao=n("code"),ks=r("<s> A </s></s> B </s>"),bs=c(),ve=n("div"),v(at.$$.fragment),vs=c(),st=n("p"),ys=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Oo=n("code"),Ms=r("prepare_for_model"),ws=r(" method."),Ts=c(),ye=n("div"),v(rt.$$.fragment),Ls=c(),Io=n("p"),xs=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),$s=c(),ro=n("div"),v(it.$$.fragment),Nn=c(),se=n("h2"),Me=n("a"),Do=n("span"),v(lt.$$.fragment),zs=c(),No=n("span"),Xs=r("XGLMTokenizerFast"),Sn=c(),F=n("div"),v(dt.$$.fragment),Gs=c(),O=n("p"),qs=r("Construct a \u201Cfast\u201D XGLM tokenizer (backed by HuggingFace\u2019s "),So=n("em"),Fs=r("tokenizers"),Es=r(" library). Adapted from "),io=n("a"),Ps=r("RobertaTokenizer"),Cs=r(`
and `),lo=n("a"),js=r("XLNetTokenizer"),As=r(`. Based on
`),ct=n("a"),Os=r("BPE"),Is=r("."),Ds=c(),pt=n("p"),Ns=r("This tokenizer inherits from "),co=n("a"),Ss=r("PreTrainedTokenizerFast"),Ws=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Bs=c(),J=n("div"),v(ht.$$.fragment),Rs=c(),Wo=n("p"),Us=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),Vs=c(),mt=n("ul"),po=n("li"),Hs=r("single sequence: "),Bo=n("code"),Js=r("<s> X </s>"),Ks=c(),ho=n("li"),Zs=r("pair of sequences: "),Ro=n("code"),Qs=r("<s> A </s></s> B </s>"),Ys=c(),we=n("div"),v(ut.$$.fragment),er=c(),Uo=n("p"),tr=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),Wn=c(),re=n("h2"),Te=n("a"),Vo=n("span"),v(ft.$$.fragment),or=c(),Ho=n("span"),nr=r("XGLMModel"),Bn=c(),E=n("div"),v(gt.$$.fragment),ar=c(),_t=n("p"),sr=r(`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),mo=n("a"),rr=r("PreTrainedModel"),ir=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lr=c(),kt=n("p"),dr=r("This model is also a PyTorch "),bt=n("a"),cr=r("torch.nn.Module"),pr=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hr=c(),Le=n("p"),mr=r("Transformer decoder consisting of "),Jo=n("em"),ur=r("config.num_layers"),fr=r(" layers. Each layer is a "),Ko=n("code"),gr=r("XGLMDecoderLayer"),_r=c(),I=n("div"),v(vt.$$.fragment),kr=c(),ie=n("p"),br=r("The "),uo=n("a"),vr=r("XGLMModel"),yr=r(" forward method, overrides the "),Zo=n("code"),Mr=r("__call__"),wr=r(" special method."),Tr=c(),v(xe.$$.fragment),Lr=c(),v($e.$$.fragment),Rn=c(),le=n("h2"),ze=n("a"),Qo=n("span"),v(yt.$$.fragment),xr=c(),Yo=n("span"),$r=r("XGLMForCausalLM"),Un=c(),P=n("div"),v(Mt.$$.fragment),zr=c(),en=n("p"),Xr=r(`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Gr=c(),wt=n("p"),qr=r("This model inherits from "),fo=n("a"),Fr=r("PreTrainedModel"),Er=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pr=c(),Tt=n("p"),Cr=r("This model is also a PyTorch "),Lt=n("a"),jr=r("torch.nn.Module"),Ar=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Or=c(),D=n("div"),v(xt.$$.fragment),Ir=c(),de=n("p"),Dr=r("The "),go=n("a"),Nr=r("XGLMForCausalLM"),Sr=r(" forward method, overrides the "),tn=n("code"),Wr=r("__call__"),Br=r(" special method."),Rr=c(),v(Xe.$$.fragment),Ur=c(),v(Ge.$$.fragment),Vn=c(),ce=n("h2"),qe=n("a"),on=n("span"),v($t.$$.fragment),Vr=c(),nn=n("span"),Hr=r("FlaxXGLMModel"),Hn=c(),G=n("div"),v(zt.$$.fragment),Jr=c(),Xt=n("p"),Kr=r(`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),_o=n("a"),Zr=r("FlaxPreTrainedModel"),Qr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yr=c(),Gt=n("p"),ei=r(`This model is also a Flax Linen
`),qt=n("a"),ti=r("flax.nn.Module"),oi=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ni=c(),an=n("p"),ai=r("Finally, this model supports inherent JAX features such as:"),si=c(),R=n("ul"),sn=n("li"),Ft=n("a"),ri=r("Just-In-Time (JIT) compilation"),ii=c(),rn=n("li"),Et=n("a"),li=r("Automatic Differentiation"),di=c(),ln=n("li"),Pt=n("a"),ci=r("Vectorization"),pi=c(),dn=n("li"),Ct=n("a"),hi=r("Parallelization"),mi=c(),N=n("div"),v(jt.$$.fragment),ui=c(),pe=n("p"),fi=r("The "),cn=n("code"),gi=r("FlaxXGLMPreTrainedModel"),_i=r(" forward method, overrides the "),pn=n("code"),ki=r("__call__"),bi=r(" special method."),vi=c(),v(Fe.$$.fragment),yi=c(),v(Ee.$$.fragment),Jn=c(),he=n("h2"),Pe=n("a"),hn=n("span"),v(At.$$.fragment),Mi=c(),mn=n("span"),wi=r("FlaxXGLMForCausalLM"),Kn=c(),z=n("div"),v(Ot.$$.fragment),Ti=c(),un=n("p"),Li=r(`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),xi=c(),It=n("p"),$i=r("This model inherits from "),ko=n("a"),zi=r("FlaxPreTrainedModel"),Xi=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gi=c(),Dt=n("p"),qi=r(`This model is also a Flax Linen
`),Nt=n("a"),Fi=r("flax.nn.Module"),Ei=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Pi=c(),fn=n("p"),Ci=r("Finally, this model supports inherent JAX features such as:"),ji=c(),U=n("ul"),gn=n("li"),St=n("a"),Ai=r("Just-In-Time (JIT) compilation"),Oi=c(),_n=n("li"),Wt=n("a"),Ii=r("Automatic Differentiation"),Di=c(),kn=n("li"),Bt=n("a"),Ni=r("Vectorization"),Si=c(),bn=n("li"),Rt=n("a"),Wi=r("Parallelization"),Bi=c(),S=n("div"),v(Ut.$$.fragment),Ri=c(),me=n("p"),Ui=r("The "),vn=n("code"),Vi=r("FlaxXGLMPreTrainedModel"),Hi=r(" forward method, overrides the "),yn=n("code"),Ji=r("__call__"),Ki=r(" special method."),Zi=c(),v(Ce.$$.fragment),Qi=c(),v(je.$$.fragment),this.h()},l(o){const f=Dd('[data-svelte="svelte-1phssyn"]',document.head);h=a(f,"META",{name:!0,content:!0}),f.forEach(t),b=p(o),g=a(o,"H1",{class:!0});var Vt=s(g);u=a(Vt,"A",{id:!0,class:!0,href:!0});var Mn=s(u);k=a(Mn,"SPAN",{});var wn=s(k);y(l.$$.fragment,wn),wn.forEach(t),Mn.forEach(t),m=p(Vt),X=a(Vt,"SPAN",{});var Tn=s(X);Ma=i(Tn,"XGLM"),Tn.forEach(t),Vt.forEach(t),Fn=p(o),ee=a(o,"H2",{class:!0});var Ht=s(ee);fe=a(Ht,"A",{id:!0,class:!0,href:!0});var Ln=s(fe);zo=a(Ln,"SPAN",{});var xn=s(zo);y(Re.$$.fragment,xn),xn.forEach(t),Ln.forEach(t),wa=p(Ht),Xo=a(Ht,"SPAN",{});var $n=s(Xo);Ta=i($n,"Overview"),$n.forEach(t),Ht.forEach(t),En=p(o),ge=a(o,"P",{});var Jt=s(ge);La=i(Jt,"The XGLM model was proposed in "),Ue=a(Jt,"A",{href:!0,rel:!0});var nl=s(Ue);xa=i(nl,"Few-shot Learning with Multilingual Language Models"),nl.forEach(t),$a=i(Jt,`
by Xi Victoria Lin, Todor Mihaylov, Mikel Artetxe, Tianlu Wang, Shuohui Chen, Daniel Simig, Myle Ott, Naman Goyal,
Shruti Bhosale, Jingfei Du, Ramakanth Pasunuru, Sam Shleifer, Punit Singh Koura, Vishrav Chaudhary, Brian O\u2019Horo,
Jeff Wang, Luke Zettlemoyer, Zornitsa Kozareva, Mona Diab, Veselin Stoyanov, Xian Li.`),Jt.forEach(t),Pn=p(o),Kt=a(o,"P",{});var al=s(Kt);za=i(al,"The abstract from the paper is the following:"),al.forEach(t),Cn=p(o),Zt=a(o,"P",{});var sl=s(Zt);Go=a(sl,"EM",{});var rl=s(Go);Xa=i(rl,`Large-scale autoregressive language models such as GPT-3 are few-shot learners that can perform a wide range of language
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
in social value tasks such as hate speech detection in five languages and find it has limitations similar to comparable sized GPT-3 models.`),rl.forEach(t),sl.forEach(t),jn=p(o),V=a(o,"P",{});var bo=s(V);Ga=i(bo,"This model was contributed by "),Ve=a(bo,"A",{href:!0,rel:!0});var il=s(Ve);qa=i(il,"Suraj"),il.forEach(t),Fa=i(bo,". The original code can be found "),He=a(bo,"A",{href:!0,rel:!0});var ll=s(He);Ea=i(ll,"here"),ll.forEach(t),Pa=i(bo,"."),bo.forEach(t),An=p(o),te=a(o,"H2",{class:!0});var Qn=s(te);_e=a(Qn,"A",{id:!0,class:!0,href:!0});var dl=s(_e);qo=a(dl,"SPAN",{});var cl=s(qo);y(Je.$$.fragment,cl),cl.forEach(t),dl.forEach(t),Ca=p(Qn),Fo=a(Qn,"SPAN",{});var pl=s(Fo);ja=i(pl,"XGLMConfig"),pl.forEach(t),Qn.forEach(t),On=p(o),A=a(o,"DIV",{class:!0});var Ae=s(A);y(Ke.$$.fragment,Ae),Aa=p(Ae),oe=a(Ae,"P",{});var vo=s(oe);Oa=i(vo,"This is the configuration class to store the configuration of a "),Qt=a(vo,"A",{href:!0});var hl=s(Qt);Ia=i(hl,"XGLMModel"),hl.forEach(t),Da=i(vo,`. It is used to instantiate an XGLM
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the XGLM
`),Ze=a(vo,"A",{href:!0,rel:!0});var ml=s(Ze);Na=i(ml,"facebook/xglm-564M"),ml.forEach(t),Sa=i(vo," architecture."),vo.forEach(t),Wa=p(Ae),ne=a(Ae,"P",{});var yo=s(ne);Ba=i(yo,"Configuration objects inherit from "),Yt=a(yo,"A",{href:!0});var ul=s(Yt);Ra=i(ul,"PretrainedConfig"),ul.forEach(t),Ua=i(yo,` and can be used to control the model outputs. Read the
documentation from `),eo=a(yo,"A",{href:!0});var fl=s(eo);Va=i(fl,"PretrainedConfig"),fl.forEach(t),Ha=i(yo," for more information."),yo.forEach(t),Ja=p(Ae),y(ke.$$.fragment,Ae),Ae.forEach(t),In=p(o),ae=a(o,"H2",{class:!0});var Yn=s(ae);be=a(Yn,"A",{id:!0,class:!0,href:!0});var gl=s(be);Eo=a(gl,"SPAN",{});var _l=s(Eo);y(Qe.$$.fragment,_l),_l.forEach(t),gl.forEach(t),Ka=p(Yn),Po=a(Yn,"SPAN",{});var kl=s(Po);Za=i(kl,"XGLMTokenizer"),kl.forEach(t),Yn.forEach(t),Dn=p(o),$=a(o,"DIV",{class:!0});var C=s($);y(Ye.$$.fragment,C),Qa=p(C),B=a(C,"P",{});var Oe=s(B);Ya=i(Oe,"Adapted from "),to=a(Oe,"A",{href:!0});var bl=s(to);es=i(bl,"RobertaTokenizer"),bl.forEach(t),ts=i(Oe," and "),oo=a(Oe,"A",{href:!0});var vl=s(oo);os=i(vl,"XLNetTokenizer"),vl.forEach(t),ns=i(Oe,`. Based on
`),et=a(Oe,"A",{href:!0,rel:!0});var yl=s(et);as=i(yl,"SentencePiece"),yl.forEach(t),ss=i(Oe,"."),Oe.forEach(t),rs=p(C),tt=a(C,"P",{});var ea=s(tt);is=i(ea,"This tokenizer inherits from "),no=a(ea,"A",{href:!0});var Ml=s(no);ls=i(Ml,"PreTrainedTokenizer"),Ml.forEach(t),ds=i(ea,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ea.forEach(t),cs=p(C),H=a(C,"DIV",{class:!0});var Mo=s(H);y(ot.$$.fragment,Mo),ps=p(Mo),Co=a(Mo,"P",{});var wl=s(Co);hs=i(wl,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),wl.forEach(t),ms=p(Mo),nt=a(Mo,"UL",{});var ta=s(nt);ao=a(ta,"LI",{});var Yi=s(ao);us=i(Yi,"single sequence: "),jo=a(Yi,"CODE",{});var Tl=s(jo);fs=i(Tl,"<s> X </s>"),Tl.forEach(t),Yi.forEach(t),gs=p(ta),so=a(ta,"LI",{});var el=s(so);_s=i(el,"pair of sequences: "),Ao=a(el,"CODE",{});var Ll=s(Ao);ks=i(Ll,"<s> A </s></s> B </s>"),Ll.forEach(t),el.forEach(t),ta.forEach(t),Mo.forEach(t),bs=p(C),ve=a(C,"DIV",{class:!0});var oa=s(ve);y(at.$$.fragment,oa),vs=p(oa),st=a(oa,"P",{});var na=s(st);ys=i(na,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Oo=a(na,"CODE",{});var xl=s(Oo);Ms=i(xl,"prepare_for_model"),xl.forEach(t),ws=i(na," method."),na.forEach(t),oa.forEach(t),Ts=p(C),ye=a(C,"DIV",{class:!0});var aa=s(ye);y(rt.$$.fragment,aa),Ls=p(aa),Io=a(aa,"P",{});var $l=s(Io);xs=i($l,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),$l.forEach(t),aa.forEach(t),$s=p(C),ro=a(C,"DIV",{class:!0});var zl=s(ro);y(it.$$.fragment,zl),zl.forEach(t),C.forEach(t),Nn=p(o),se=a(o,"H2",{class:!0});var sa=s(se);Me=a(sa,"A",{id:!0,class:!0,href:!0});var Xl=s(Me);Do=a(Xl,"SPAN",{});var Gl=s(Do);y(lt.$$.fragment,Gl),Gl.forEach(t),Xl.forEach(t),zs=p(sa),No=a(sa,"SPAN",{});var ql=s(No);Xs=i(ql,"XGLMTokenizerFast"),ql.forEach(t),sa.forEach(t),Sn=p(o),F=a(o,"DIV",{class:!0});var K=s(F);y(dt.$$.fragment,K),Gs=p(K),O=a(K,"P",{});var Z=s(O);qs=i(Z,"Construct a \u201Cfast\u201D XGLM tokenizer (backed by HuggingFace\u2019s "),So=a(Z,"EM",{});var Fl=s(So);Fs=i(Fl,"tokenizers"),Fl.forEach(t),Es=i(Z," library). Adapted from "),io=a(Z,"A",{href:!0});var El=s(io);Ps=i(El,"RobertaTokenizer"),El.forEach(t),Cs=i(Z,`
and `),lo=a(Z,"A",{href:!0});var Pl=s(lo);js=i(Pl,"XLNetTokenizer"),Pl.forEach(t),As=i(Z,`. Based on
`),ct=a(Z,"A",{href:!0,rel:!0});var Cl=s(ct);Os=i(Cl,"BPE"),Cl.forEach(t),Is=i(Z,"."),Z.forEach(t),Ds=p(K),pt=a(K,"P",{});var ra=s(pt);Ns=i(ra,"This tokenizer inherits from "),co=a(ra,"A",{href:!0});var jl=s(co);Ss=i(jl,"PreTrainedTokenizerFast"),jl.forEach(t),Ws=i(ra,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ra.forEach(t),Bs=p(K),J=a(K,"DIV",{class:!0});var wo=s(J);y(ht.$$.fragment,wo),Rs=p(wo),Wo=a(wo,"P",{});var Al=s(Wo);Us=i(Al,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),Al.forEach(t),Vs=p(wo),mt=a(wo,"UL",{});var ia=s(mt);po=a(ia,"LI",{});var tl=s(po);Hs=i(tl,"single sequence: "),Bo=a(tl,"CODE",{});var Ol=s(Bo);Js=i(Ol,"<s> X </s>"),Ol.forEach(t),tl.forEach(t),Ks=p(ia),ho=a(ia,"LI",{});var ol=s(ho);Zs=i(ol,"pair of sequences: "),Ro=a(ol,"CODE",{});var Il=s(Ro);Qs=i(Il,"<s> A </s></s> B </s>"),Il.forEach(t),ol.forEach(t),ia.forEach(t),wo.forEach(t),Ys=p(K),we=a(K,"DIV",{class:!0});var la=s(we);y(ut.$$.fragment,la),er=p(la),Uo=a(la,"P",{});var Dl=s(Uo);tr=i(Dl,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),Dl.forEach(t),la.forEach(t),K.forEach(t),Wn=p(o),re=a(o,"H2",{class:!0});var da=s(re);Te=a(da,"A",{id:!0,class:!0,href:!0});var Nl=s(Te);Vo=a(Nl,"SPAN",{});var Sl=s(Vo);y(ft.$$.fragment,Sl),Sl.forEach(t),Nl.forEach(t),or=p(da),Ho=a(da,"SPAN",{});var Wl=s(Ho);nr=i(Wl,"XGLMModel"),Wl.forEach(t),da.forEach(t),Bn=p(o),E=a(o,"DIV",{class:!0});var Q=s(E);y(gt.$$.fragment,Q),ar=p(Q),_t=a(Q,"P",{});var ca=s(_t);sr=i(ca,`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),mo=a(ca,"A",{href:!0});var Bl=s(mo);rr=i(Bl,"PreTrainedModel"),Bl.forEach(t),ir=i(ca,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ca.forEach(t),lr=p(Q),kt=a(Q,"P",{});var pa=s(kt);dr=i(pa,"This model is also a PyTorch "),bt=a(pa,"A",{href:!0,rel:!0});var Rl=s(bt);cr=i(Rl,"torch.nn.Module"),Rl.forEach(t),pr=i(pa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pa.forEach(t),hr=p(Q),Le=a(Q,"P",{});var zn=s(Le);mr=i(zn,"Transformer decoder consisting of "),Jo=a(zn,"EM",{});var Ul=s(Jo);ur=i(Ul,"config.num_layers"),Ul.forEach(t),fr=i(zn," layers. Each layer is a "),Ko=a(zn,"CODE",{});var Vl=s(Ko);gr=i(Vl,"XGLMDecoderLayer"),Vl.forEach(t),zn.forEach(t),_r=p(Q),I=a(Q,"DIV",{class:!0});var Ie=s(I);y(vt.$$.fragment,Ie),kr=p(Ie),ie=a(Ie,"P",{});var To=s(ie);br=i(To,"The "),uo=a(To,"A",{href:!0});var Hl=s(uo);vr=i(Hl,"XGLMModel"),Hl.forEach(t),yr=i(To," forward method, overrides the "),Zo=a(To,"CODE",{});var Jl=s(Zo);Mr=i(Jl,"__call__"),Jl.forEach(t),wr=i(To," special method."),To.forEach(t),Tr=p(Ie),y(xe.$$.fragment,Ie),Lr=p(Ie),y($e.$$.fragment,Ie),Ie.forEach(t),Q.forEach(t),Rn=p(o),le=a(o,"H2",{class:!0});var ha=s(le);ze=a(ha,"A",{id:!0,class:!0,href:!0});var Kl=s(ze);Qo=a(Kl,"SPAN",{});var Zl=s(Qo);y(yt.$$.fragment,Zl),Zl.forEach(t),Kl.forEach(t),xr=p(ha),Yo=a(ha,"SPAN",{});var Ql=s(Yo);$r=i(Ql,"XGLMForCausalLM"),Ql.forEach(t),ha.forEach(t),Un=p(o),P=a(o,"DIV",{class:!0});var Y=s(P);y(Mt.$$.fragment,Y),zr=p(Y),en=a(Y,"P",{});var Yl=s(en);Xr=i(Yl,`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Yl.forEach(t),Gr=p(Y),wt=a(Y,"P",{});var ma=s(wt);qr=i(ma,"This model inherits from "),fo=a(ma,"A",{href:!0});var ed=s(fo);Fr=i(ed,"PreTrainedModel"),ed.forEach(t),Er=i(ma,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ma.forEach(t),Pr=p(Y),Tt=a(Y,"P",{});var ua=s(Tt);Cr=i(ua,"This model is also a PyTorch "),Lt=a(ua,"A",{href:!0,rel:!0});var td=s(Lt);jr=i(td,"torch.nn.Module"),td.forEach(t),Ar=i(ua,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ua.forEach(t),Or=p(Y),D=a(Y,"DIV",{class:!0});var De=s(D);y(xt.$$.fragment,De),Ir=p(De),de=a(De,"P",{});var Lo=s(de);Dr=i(Lo,"The "),go=a(Lo,"A",{href:!0});var od=s(go);Nr=i(od,"XGLMForCausalLM"),od.forEach(t),Sr=i(Lo," forward method, overrides the "),tn=a(Lo,"CODE",{});var nd=s(tn);Wr=i(nd,"__call__"),nd.forEach(t),Br=i(Lo," special method."),Lo.forEach(t),Rr=p(De),y(Xe.$$.fragment,De),Ur=p(De),y(Ge.$$.fragment,De),De.forEach(t),Y.forEach(t),Vn=p(o),ce=a(o,"H2",{class:!0});var fa=s(ce);qe=a(fa,"A",{id:!0,class:!0,href:!0});var ad=s(qe);on=a(ad,"SPAN",{});var sd=s(on);y($t.$$.fragment,sd),sd.forEach(t),ad.forEach(t),Vr=p(fa),nn=a(fa,"SPAN",{});var rd=s(nn);Hr=i(rd,"FlaxXGLMModel"),rd.forEach(t),fa.forEach(t),Hn=p(o),G=a(o,"DIV",{class:!0});var W=s(G);y(zt.$$.fragment,W),Jr=p(W),Xt=a(W,"P",{});var ga=s(Xt);Kr=i(ga,`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),_o=a(ga,"A",{href:!0});var id=s(_o);Zr=i(id,"FlaxPreTrainedModel"),id.forEach(t),Qr=i(ga,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ga.forEach(t),Yr=p(W),Gt=a(W,"P",{});var _a=s(Gt);ei=i(_a,`This model is also a Flax Linen
`),qt=a(_a,"A",{href:!0,rel:!0});var ld=s(qt);ti=i(ld,"flax.nn.Module"),ld.forEach(t),oi=i(_a,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),_a.forEach(t),ni=p(W),an=a(W,"P",{});var dd=s(an);ai=i(dd,"Finally, this model supports inherent JAX features such as:"),dd.forEach(t),si=p(W),R=a(W,"UL",{});var Ne=s(R);sn=a(Ne,"LI",{});var cd=s(sn);Ft=a(cd,"A",{href:!0,rel:!0});var pd=s(Ft);ri=i(pd,"Just-In-Time (JIT) compilation"),pd.forEach(t),cd.forEach(t),ii=p(Ne),rn=a(Ne,"LI",{});var hd=s(rn);Et=a(hd,"A",{href:!0,rel:!0});var md=s(Et);li=i(md,"Automatic Differentiation"),md.forEach(t),hd.forEach(t),di=p(Ne),ln=a(Ne,"LI",{});var ud=s(ln);Pt=a(ud,"A",{href:!0,rel:!0});var fd=s(Pt);ci=i(fd,"Vectorization"),fd.forEach(t),ud.forEach(t),pi=p(Ne),dn=a(Ne,"LI",{});var gd=s(dn);Ct=a(gd,"A",{href:!0,rel:!0});var _d=s(Ct);hi=i(_d,"Parallelization"),_d.forEach(t),gd.forEach(t),Ne.forEach(t),mi=p(W),N=a(W,"DIV",{class:!0});var Se=s(N);y(jt.$$.fragment,Se),ui=p(Se),pe=a(Se,"P",{});var xo=s(pe);fi=i(xo,"The "),cn=a(xo,"CODE",{});var kd=s(cn);gi=i(kd,"FlaxXGLMPreTrainedModel"),kd.forEach(t),_i=i(xo," forward method, overrides the "),pn=a(xo,"CODE",{});var bd=s(pn);ki=i(bd,"__call__"),bd.forEach(t),bi=i(xo," special method."),xo.forEach(t),vi=p(Se),y(Fe.$$.fragment,Se),yi=p(Se),y(Ee.$$.fragment,Se),Se.forEach(t),W.forEach(t),Jn=p(o),he=a(o,"H2",{class:!0});var ka=s(he);Pe=a(ka,"A",{id:!0,class:!0,href:!0});var vd=s(Pe);hn=a(vd,"SPAN",{});var yd=s(hn);y(At.$$.fragment,yd),yd.forEach(t),vd.forEach(t),Mi=p(ka),mn=a(ka,"SPAN",{});var Md=s(mn);wi=i(Md,"FlaxXGLMForCausalLM"),Md.forEach(t),ka.forEach(t),Kn=p(o),z=a(o,"DIV",{class:!0});var j=s(z);y(Ot.$$.fragment,j),Ti=p(j),un=a(j,"P",{});var wd=s(un);Li=i(wd,`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),wd.forEach(t),xi=p(j),It=a(j,"P",{});var ba=s(It);$i=i(ba,"This model inherits from "),ko=a(ba,"A",{href:!0});var Td=s(ko);zi=i(Td,"FlaxPreTrainedModel"),Td.forEach(t),Xi=i(ba,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ba.forEach(t),Gi=p(j),Dt=a(j,"P",{});var va=s(Dt);qi=i(va,`This model is also a Flax Linen
`),Nt=a(va,"A",{href:!0,rel:!0});var Ld=s(Nt);Fi=i(Ld,"flax.nn.Module"),Ld.forEach(t),Ei=i(va,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),va.forEach(t),Pi=p(j),fn=a(j,"P",{});var xd=s(fn);Ci=i(xd,"Finally, this model supports inherent JAX features such as:"),xd.forEach(t),ji=p(j),U=a(j,"UL",{});var We=s(U);gn=a(We,"LI",{});var $d=s(gn);St=a($d,"A",{href:!0,rel:!0});var zd=s(St);Ai=i(zd,"Just-In-Time (JIT) compilation"),zd.forEach(t),$d.forEach(t),Oi=p(We),_n=a(We,"LI",{});var Xd=s(_n);Wt=a(Xd,"A",{href:!0,rel:!0});var Gd=s(Wt);Ii=i(Gd,"Automatic Differentiation"),Gd.forEach(t),Xd.forEach(t),Di=p(We),kn=a(We,"LI",{});var qd=s(kn);Bt=a(qd,"A",{href:!0,rel:!0});var Fd=s(Bt);Ni=i(Fd,"Vectorization"),Fd.forEach(t),qd.forEach(t),Si=p(We),bn=a(We,"LI",{});var Ed=s(bn);Rt=a(Ed,"A",{href:!0,rel:!0});var Pd=s(Rt);Wi=i(Pd,"Parallelization"),Pd.forEach(t),Ed.forEach(t),We.forEach(t),Bi=p(j),S=a(j,"DIV",{class:!0});var Be=s(S);y(Ut.$$.fragment,Be),Ri=p(Be),me=a(Be,"P",{});var $o=s(me);Ui=i($o,"The "),vn=a($o,"CODE",{});var Cd=s(vn);Vi=i(Cd,"FlaxXGLMPreTrainedModel"),Cd.forEach(t),Hi=i($o," forward method, overrides the "),yn=a($o,"CODE",{});var jd=s(yn);Ji=i(jd,"__call__"),jd.forEach(t),Ki=i($o," special method."),$o.forEach(t),Zi=p(Be),y(Ce.$$.fragment,Be),Qi=p(Be),y(je.$$.fragment,Be),Be.forEach(t),j.forEach(t),this.h()},h(){d(h,"name","hf:doc:metadata"),d(h,"content",JSON.stringify(Qd)),d(u,"id","xglm"),d(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(u,"href","#xglm"),d(g,"class","relative group"),d(fe,"id","overview"),d(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(fe,"href","#overview"),d(ee,"class","relative group"),d(Ue,"href","https://arxiv.org/abs/2112.10668"),d(Ue,"rel","nofollow"),d(Ve,"href","https://huggingface.co/valhalla"),d(Ve,"rel","nofollow"),d(He,"href","https://github.com/pytorch/fairseq/tree/main/examples/xglm"),d(He,"rel","nofollow"),d(_e,"id","transformers.XGLMConfig"),d(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_e,"href","#transformers.XGLMConfig"),d(te,"class","relative group"),d(Qt,"href","/docs/transformers/main/en/model_doc/xglm#transformers.XGLMModel"),d(Ze,"href","https://huggingface.co/facebook/xglm-564M"),d(Ze,"rel","nofollow"),d(Yt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(eo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(be,"id","transformers.XGLMTokenizer"),d(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(be,"href","#transformers.XGLMTokenizer"),d(ae,"class","relative group"),d(to,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),d(oo,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),d(et,"href","https://github.com/google/sentencepiece"),d(et,"rel","nofollow"),d(no,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Me,"id","transformers.XGLMTokenizerFast"),d(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Me,"href","#transformers.XGLMTokenizerFast"),d(se,"class","relative group"),d(io,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),d(lo,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),d(ct,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),d(ct,"rel","nofollow"),d(co,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),d(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Te,"id","transformers.XGLMModel"),d(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Te,"href","#transformers.XGLMModel"),d(re,"class","relative group"),d(mo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(bt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(bt,"rel","nofollow"),d(uo,"href","/docs/transformers/main/en/model_doc/xglm#transformers.XGLMModel"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ze,"id","transformers.XGLMForCausalLM"),d(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ze,"href","#transformers.XGLMForCausalLM"),d(le,"class","relative group"),d(fo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(Lt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Lt,"rel","nofollow"),d(go,"href","/docs/transformers/main/en/model_doc/xglm#transformers.XGLMForCausalLM"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(qe,"id","transformers.FlaxXGLMModel"),d(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(qe,"href","#transformers.FlaxXGLMModel"),d(ce,"class","relative group"),d(_o,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(qt,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),d(qt,"rel","nofollow"),d(Ft,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(Ft,"rel","nofollow"),d(Et,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Et,"rel","nofollow"),d(Pt,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Pt,"rel","nofollow"),d(Ct,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Ct,"rel","nofollow"),d(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Pe,"id","transformers.FlaxXGLMForCausalLM"),d(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Pe,"href","#transformers.FlaxXGLMForCausalLM"),d(he,"class","relative group"),d(ko,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),d(Nt,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),d(Nt,"rel","nofollow"),d(St,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),d(St,"rel","nofollow"),d(Wt,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),d(Wt,"rel","nofollow"),d(Bt,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),d(Bt,"rel","nofollow"),d(Rt,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),d(Rt,"rel","nofollow"),d(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,f){e(document.head,h),_(o,b,f),_(o,g,f),e(g,u),e(u,k),M(l,k,null),e(g,m),e(g,X),e(X,Ma),_(o,Fn,f),_(o,ee,f),e(ee,fe),e(fe,zo),M(Re,zo,null),e(ee,wa),e(ee,Xo),e(Xo,Ta),_(o,En,f),_(o,ge,f),e(ge,La),e(ge,Ue),e(Ue,xa),e(ge,$a),_(o,Pn,f),_(o,Kt,f),e(Kt,za),_(o,Cn,f),_(o,Zt,f),e(Zt,Go),e(Go,Xa),_(o,jn,f),_(o,V,f),e(V,Ga),e(V,Ve),e(Ve,qa),e(V,Fa),e(V,He),e(He,Ea),e(V,Pa),_(o,An,f),_(o,te,f),e(te,_e),e(_e,qo),M(Je,qo,null),e(te,Ca),e(te,Fo),e(Fo,ja),_(o,On,f),_(o,A,f),M(Ke,A,null),e(A,Aa),e(A,oe),e(oe,Oa),e(oe,Qt),e(Qt,Ia),e(oe,Da),e(oe,Ze),e(Ze,Na),e(oe,Sa),e(A,Wa),e(A,ne),e(ne,Ba),e(ne,Yt),e(Yt,Ra),e(ne,Ua),e(ne,eo),e(eo,Va),e(ne,Ha),e(A,Ja),M(ke,A,null),_(o,In,f),_(o,ae,f),e(ae,be),e(be,Eo),M(Qe,Eo,null),e(ae,Ka),e(ae,Po),e(Po,Za),_(o,Dn,f),_(o,$,f),M(Ye,$,null),e($,Qa),e($,B),e(B,Ya),e(B,to),e(to,es),e(B,ts),e(B,oo),e(oo,os),e(B,ns),e(B,et),e(et,as),e(B,ss),e($,rs),e($,tt),e(tt,is),e(tt,no),e(no,ls),e(tt,ds),e($,cs),e($,H),M(ot,H,null),e(H,ps),e(H,Co),e(Co,hs),e(H,ms),e(H,nt),e(nt,ao),e(ao,us),e(ao,jo),e(jo,fs),e(nt,gs),e(nt,so),e(so,_s),e(so,Ao),e(Ao,ks),e($,bs),e($,ve),M(at,ve,null),e(ve,vs),e(ve,st),e(st,ys),e(st,Oo),e(Oo,Ms),e(st,ws),e($,Ts),e($,ye),M(rt,ye,null),e(ye,Ls),e(ye,Io),e(Io,xs),e($,$s),e($,ro),M(it,ro,null),_(o,Nn,f),_(o,se,f),e(se,Me),e(Me,Do),M(lt,Do,null),e(se,zs),e(se,No),e(No,Xs),_(o,Sn,f),_(o,F,f),M(dt,F,null),e(F,Gs),e(F,O),e(O,qs),e(O,So),e(So,Fs),e(O,Es),e(O,io),e(io,Ps),e(O,Cs),e(O,lo),e(lo,js),e(O,As),e(O,ct),e(ct,Os),e(O,Is),e(F,Ds),e(F,pt),e(pt,Ns),e(pt,co),e(co,Ss),e(pt,Ws),e(F,Bs),e(F,J),M(ht,J,null),e(J,Rs),e(J,Wo),e(Wo,Us),e(J,Vs),e(J,mt),e(mt,po),e(po,Hs),e(po,Bo),e(Bo,Js),e(mt,Ks),e(mt,ho),e(ho,Zs),e(ho,Ro),e(Ro,Qs),e(F,Ys),e(F,we),M(ut,we,null),e(we,er),e(we,Uo),e(Uo,tr),_(o,Wn,f),_(o,re,f),e(re,Te),e(Te,Vo),M(ft,Vo,null),e(re,or),e(re,Ho),e(Ho,nr),_(o,Bn,f),_(o,E,f),M(gt,E,null),e(E,ar),e(E,_t),e(_t,sr),e(_t,mo),e(mo,rr),e(_t,ir),e(E,lr),e(E,kt),e(kt,dr),e(kt,bt),e(bt,cr),e(kt,pr),e(E,hr),e(E,Le),e(Le,mr),e(Le,Jo),e(Jo,ur),e(Le,fr),e(Le,Ko),e(Ko,gr),e(E,_r),e(E,I),M(vt,I,null),e(I,kr),e(I,ie),e(ie,br),e(ie,uo),e(uo,vr),e(ie,yr),e(ie,Zo),e(Zo,Mr),e(ie,wr),e(I,Tr),M(xe,I,null),e(I,Lr),M($e,I,null),_(o,Rn,f),_(o,le,f),e(le,ze),e(ze,Qo),M(yt,Qo,null),e(le,xr),e(le,Yo),e(Yo,$r),_(o,Un,f),_(o,P,f),M(Mt,P,null),e(P,zr),e(P,en),e(en,Xr),e(P,Gr),e(P,wt),e(wt,qr),e(wt,fo),e(fo,Fr),e(wt,Er),e(P,Pr),e(P,Tt),e(Tt,Cr),e(Tt,Lt),e(Lt,jr),e(Tt,Ar),e(P,Or),e(P,D),M(xt,D,null),e(D,Ir),e(D,de),e(de,Dr),e(de,go),e(go,Nr),e(de,Sr),e(de,tn),e(tn,Wr),e(de,Br),e(D,Rr),M(Xe,D,null),e(D,Ur),M(Ge,D,null),_(o,Vn,f),_(o,ce,f),e(ce,qe),e(qe,on),M($t,on,null),e(ce,Vr),e(ce,nn),e(nn,Hr),_(o,Hn,f),_(o,G,f),M(zt,G,null),e(G,Jr),e(G,Xt),e(Xt,Kr),e(Xt,_o),e(_o,Zr),e(Xt,Qr),e(G,Yr),e(G,Gt),e(Gt,ei),e(Gt,qt),e(qt,ti),e(Gt,oi),e(G,ni),e(G,an),e(an,ai),e(G,si),e(G,R),e(R,sn),e(sn,Ft),e(Ft,ri),e(R,ii),e(R,rn),e(rn,Et),e(Et,li),e(R,di),e(R,ln),e(ln,Pt),e(Pt,ci),e(R,pi),e(R,dn),e(dn,Ct),e(Ct,hi),e(G,mi),e(G,N),M(jt,N,null),e(N,ui),e(N,pe),e(pe,fi),e(pe,cn),e(cn,gi),e(pe,_i),e(pe,pn),e(pn,ki),e(pe,bi),e(N,vi),M(Fe,N,null),e(N,yi),M(Ee,N,null),_(o,Jn,f),_(o,he,f),e(he,Pe),e(Pe,hn),M(At,hn,null),e(he,Mi),e(he,mn),e(mn,wi),_(o,Kn,f),_(o,z,f),M(Ot,z,null),e(z,Ti),e(z,un),e(un,Li),e(z,xi),e(z,It),e(It,$i),e(It,ko),e(ko,zi),e(It,Xi),e(z,Gi),e(z,Dt),e(Dt,qi),e(Dt,Nt),e(Nt,Fi),e(Dt,Ei),e(z,Pi),e(z,fn),e(fn,Ci),e(z,ji),e(z,U),e(U,gn),e(gn,St),e(St,Ai),e(U,Oi),e(U,_n),e(_n,Wt),e(Wt,Ii),e(U,Di),e(U,kn),e(kn,Bt),e(Bt,Ni),e(U,Si),e(U,bn),e(bn,Rt),e(Rt,Wi),e(z,Bi),e(z,S),M(Ut,S,null),e(S,Ri),e(S,me),e(me,Ui),e(me,vn),e(vn,Vi),e(me,Hi),e(me,yn),e(yn,Ji),e(me,Ki),e(S,Zi),M(Ce,S,null),e(S,Qi),M(je,S,null),Zn=!0},p(o,[f]){const Vt={};f&2&&(Vt.$$scope={dirty:f,ctx:o}),ke.$set(Vt);const Mn={};f&2&&(Mn.$$scope={dirty:f,ctx:o}),xe.$set(Mn);const wn={};f&2&&(wn.$$scope={dirty:f,ctx:o}),$e.$set(wn);const Tn={};f&2&&(Tn.$$scope={dirty:f,ctx:o}),Xe.$set(Tn);const Ht={};f&2&&(Ht.$$scope={dirty:f,ctx:o}),Ge.$set(Ht);const Ln={};f&2&&(Ln.$$scope={dirty:f,ctx:o}),Fe.$set(Ln);const xn={};f&2&&(xn.$$scope={dirty:f,ctx:o}),Ee.$set(xn);const $n={};f&2&&($n.$$scope={dirty:f,ctx:o}),Ce.$set($n);const Jt={};f&2&&(Jt.$$scope={dirty:f,ctx:o}),je.$set(Jt)},i(o){Zn||(w(l.$$.fragment,o),w(Re.$$.fragment,o),w(Je.$$.fragment,o),w(Ke.$$.fragment,o),w(ke.$$.fragment,o),w(Qe.$$.fragment,o),w(Ye.$$.fragment,o),w(ot.$$.fragment,o),w(at.$$.fragment,o),w(rt.$$.fragment,o),w(it.$$.fragment,o),w(lt.$$.fragment,o),w(dt.$$.fragment,o),w(ht.$$.fragment,o),w(ut.$$.fragment,o),w(ft.$$.fragment,o),w(gt.$$.fragment,o),w(vt.$$.fragment,o),w(xe.$$.fragment,o),w($e.$$.fragment,o),w(yt.$$.fragment,o),w(Mt.$$.fragment,o),w(xt.$$.fragment,o),w(Xe.$$.fragment,o),w(Ge.$$.fragment,o),w($t.$$.fragment,o),w(zt.$$.fragment,o),w(jt.$$.fragment,o),w(Fe.$$.fragment,o),w(Ee.$$.fragment,o),w(At.$$.fragment,o),w(Ot.$$.fragment,o),w(Ut.$$.fragment,o),w(Ce.$$.fragment,o),w(je.$$.fragment,o),Zn=!0)},o(o){T(l.$$.fragment,o),T(Re.$$.fragment,o),T(Je.$$.fragment,o),T(Ke.$$.fragment,o),T(ke.$$.fragment,o),T(Qe.$$.fragment,o),T(Ye.$$.fragment,o),T(ot.$$.fragment,o),T(at.$$.fragment,o),T(rt.$$.fragment,o),T(it.$$.fragment,o),T(lt.$$.fragment,o),T(dt.$$.fragment,o),T(ht.$$.fragment,o),T(ut.$$.fragment,o),T(ft.$$.fragment,o),T(gt.$$.fragment,o),T(vt.$$.fragment,o),T(xe.$$.fragment,o),T($e.$$.fragment,o),T(yt.$$.fragment,o),T(Mt.$$.fragment,o),T(xt.$$.fragment,o),T(Xe.$$.fragment,o),T(Ge.$$.fragment,o),T($t.$$.fragment,o),T(zt.$$.fragment,o),T(jt.$$.fragment,o),T(Fe.$$.fragment,o),T(Ee.$$.fragment,o),T(At.$$.fragment,o),T(Ot.$$.fragment,o),T(Ut.$$.fragment,o),T(Ce.$$.fragment,o),T(je.$$.fragment,o),Zn=!1},d(o){t(h),o&&t(b),o&&t(g),L(l),o&&t(Fn),o&&t(ee),L(Re),o&&t(En),o&&t(ge),o&&t(Pn),o&&t(Kt),o&&t(Cn),o&&t(Zt),o&&t(jn),o&&t(V),o&&t(An),o&&t(te),L(Je),o&&t(On),o&&t(A),L(Ke),L(ke),o&&t(In),o&&t(ae),L(Qe),o&&t(Dn),o&&t($),L(Ye),L(ot),L(at),L(rt),L(it),o&&t(Nn),o&&t(se),L(lt),o&&t(Sn),o&&t(F),L(dt),L(ht),L(ut),o&&t(Wn),o&&t(re),L(ft),o&&t(Bn),o&&t(E),L(gt),L(vt),L(xe),L($e),o&&t(Rn),o&&t(le),L(yt),o&&t(Un),o&&t(P),L(Mt),L(xt),L(Xe),L(Ge),o&&t(Vn),o&&t(ce),L($t),o&&t(Hn),o&&t(G),L(zt),L(jt),L(Fe),L(Ee),o&&t(Jn),o&&t(he),L(At),o&&t(Kn),o&&t(z),L(Ot),L(Ut),L(Ce),L(je)}}}const Qd={local:"xglm",sections:[{local:"overview",title:"Overview"},{local:"transformers.XGLMConfig",title:"XGLMConfig"},{local:"transformers.XGLMTokenizer",title:"XGLMTokenizer"},{local:"transformers.XGLMTokenizerFast",title:"XGLMTokenizerFast"},{local:"transformers.XGLMModel",title:"XGLMModel"},{local:"transformers.XGLMForCausalLM",title:"XGLMForCausalLM"},{local:"transformers.FlaxXGLMModel",title:"FlaxXGLMModel"},{local:"transformers.FlaxXGLMForCausalLM",title:"FlaxXGLMForCausalLM"}],title:"XGLM"};function Yd(x){return Nd(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class rc extends Ad{constructor(h){super();Od(this,h,Yd,Zd,Id,{})}}export{rc as default,Qd as metadata};
