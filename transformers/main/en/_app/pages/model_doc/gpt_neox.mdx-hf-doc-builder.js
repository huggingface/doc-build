import{S as us,i as fs,s as gs,e as n,k as m,w as v,t as i,M as _s,c as s,d as o,m as u,a,x as k,h as l,b as h,G as t,g,y as w,q as P,o as y,B as $,v as Ts,L as oo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Fn}from"../../chunks/Tip-hf-doc-builder.js";import{D as et}from"../../chunks/Docstring-hf-doc-builder.js";import{C as tt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ie}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as to}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function bs(G){let d,T;return d=new tt({props:{code:`from transformers import GPTNeoXModel, GPTNeoXConfig

# Initializing a GPTNeoX gpt-neox-20b style configuration
configuration = GPTNeoXConfig()

# Initializing a model from the gpt-neox-20b style configuration
model = GPTNeoXModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXModel, GPTNeoXConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPTNeoX gpt-neox-20b style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GPTNeoXConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the gpt-neox-20b style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){v(d.$$.fragment)},l(p){k(d.$$.fragment,p)},m(p,f){w(d,p,f),T=!0},p:oo,i(p){T||(P(d.$$.fragment,p),T=!0)},o(p){y(d.$$.fragment,p),T=!1},d(p){$(d,p)}}}function vs(G){let d,T,p,f,b;return f=new tt({props:{code:`from transformers import GPTNeoXTokenizerFast
tokenizer = GPTNeoXTokenizerFast.from_pretrained("gpt2")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = GPTNeoXTokenizerFast.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=n("p"),T=i("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p=m(),v(f.$$.fragment)},l(r){d=s(r,"P",{});var _=a(d);T=l(_,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),_.forEach(o),p=u(r),k(f.$$.fragment,r)},m(r,_){g(r,d,_),t(d,T),g(r,p,_),w(f,r,_),b=!0},p:oo,i(r){b||(P(f.$$.fragment,r),b=!0)},o(r){y(f.$$.fragment,r),b=!1},d(r){r&&o(d),r&&o(p),$(f,r)}}}function ks(G){let d,T,p,f,b,r,_,X;return{c(){d=n("p"),T=i("When used with "),p=n("code"),f=i("is_split_into_words=True"),b=i(", this tokenizer needs to be instantiated with "),r=n("code"),_=i("add_prefix_space=True"),X=i(".")},l(I){d=s(I,"P",{});var z=a(d);T=l(z,"When used with "),p=s(z,"CODE",{});var M=a(p);f=l(M,"is_split_into_words=True"),M.forEach(o),b=l(z,", this tokenizer needs to be instantiated with "),r=s(z,"CODE",{});var q=a(r);_=l(q,"add_prefix_space=True"),q.forEach(o),X=l(z,"."),z.forEach(o)},m(I,z){g(I,d,z),t(d,T),t(d,p),t(p,f),t(d,b),t(d,r),t(r,_),t(d,X)},d(I){I&&o(d)}}}function ws(G){let d,T,p,f,b;return{c(){d=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),f=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var _=a(d);T=l(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(_,"CODE",{});var X=a(p);f=l(X,"Module"),X.forEach(o),b=l(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(r,_){g(r,d,_),t(d,T),t(d,p),t(p,f),t(d,b)},d(r){r&&o(d)}}}function Ps(G){let d,T,p,f,b;return f=new tt({props:{code:`from transformers import GPTNeoXTokenizerFast, GPTNeoXModel
import torch

tokenizer = GPTNeoXTokenizerFast.from_pretrained("gpt-neox-20b")
model = GPTNeoXModel.from_pretrained("gpt-neox-20b")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXTokenizerFast, GPTNeoXModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTNeoXTokenizerFast.from_pretrained(<span class="hljs-string">&quot;gpt-neox-20b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXModel.from_pretrained(<span class="hljs-string">&quot;gpt-neox-20b&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),T=i("Example:"),p=m(),v(f.$$.fragment)},l(r){d=s(r,"P",{});var _=a(d);T=l(_,"Example:"),_.forEach(o),p=u(r),k(f.$$.fragment,r)},m(r,_){g(r,d,_),t(d,T),g(r,p,_),w(f,r,_),b=!0},p:oo,i(r){b||(P(f.$$.fragment,r),b=!0)},o(r){y(f.$$.fragment,r),b=!1},d(r){r&&o(d),r&&o(p),$(f,r)}}}function ys(G){let d,T,p,f,b;return{c(){d=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),f=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var _=a(d);T=l(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(_,"CODE",{});var X=a(p);f=l(X,"Module"),X.forEach(o),b=l(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(r,_){g(r,d,_),t(d,T),t(d,p),t(p,f),t(d,b)},d(r){r&&o(d)}}}function $s(G){let d,T,p,f,b;return f=new tt({props:{code:`from transformers import GPTNeoXTokenizerFast, GPTNeoXForCausalLM, GPTNeoXConfig
import torch

tokenizer = GPTNeoXTokenizerFast.from_pretrained("EleutherAI/gpt-neox-20b")
config = GPTNeoXConfig.from_pretrained("EleutherAI/gpt-neox-20b")
config.is_decoder = True
model = GPTNeoXForCausalLM.from_pretrained("EleutherAI/gpt-neox-20b", config=config)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXTokenizerFast, GPTNeoXForCausalLM, GPTNeoXConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTNeoXTokenizerFast.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neox-20b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = GPTNeoXConfig.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neox-20b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neox-20b&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),T=i("Example:"),p=m(),v(f.$$.fragment)},l(r){d=s(r,"P",{});var _=a(d);T=l(_,"Example:"),_.forEach(o),p=u(r),k(f.$$.fragment,r)},m(r,_){g(r,d,_),t(d,T),g(r,p,_),w(f,r,_),b=!0},p:oo,i(r){b||(P(f.$$.fragment,r),b=!0)},o(r){y(f.$$.fragment,r),b=!1},d(r){r&&o(d),r&&o(p),$(f,r)}}}function Ns(G){let d,T,p,f,b,r,_,X,I,z,M,q,ot,me,no,nt,so,Nt,R,ao,ue,ro,io,Gt,Y,lo,fe,co,po,Xt,Le,ho,xt,ge,zt,Oe,mo,Ft,L,K,st,_e,uo,at,fo,Mt,Q,go,rt,_o,To,Et,Te,Ct,O,Z,it,be,bo,lt,vo,qt,F,ve,ko,B,wo,Be,Po,yo,ke,$o,No,Go,S,Xo,Se,xo,zo,De,Fo,Mo,Eo,ee,jt,D,te,dt,we,Co,ct,qo,At,N,Pe,jo,ye,Ao,pt,Io,Lo,Oo,ht,Bo,So,oe,Do,$e,Wo,mt,Ho,Uo,Vo,ne,Jo,Ne,Ro,We,Yo,Ko,It,W,se,ut,Ge,Qo,ft,Zo,Lt,j,Xe,en,xe,tn,ze,on,nn,sn,E,Fe,an,H,rn,He,ln,dn,gt,cn,pn,hn,ae,mn,re,Ot,U,ie,_t,Me,un,Tt,fn,Bt,A,Ee,gn,V,_n,bt,Tn,bn,Ce,vn,kn,wn,C,qe,Pn,J,yn,Ue,$n,Nn,vt,Gn,Xn,xn,le,zn,de,St;return r=new Ie({}),me=new Ie({}),ge=new tt({props:{code:'model = GPTNeoXForCausalLM.from_pretrained("EleutherAI/gpt-neox-20b").half().cuda()',highlighted:'model = GPTNeoXForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neox-20b&quot;</span>).half().cuda()'}}),_e=new Ie({}),Te=new tt({props:{code:`from transformers import GPTNeoXForCausalLM, GPTNeoXTokenizerFast

model = GPTNeoXForCausalLM.from_pretrained("EleutherAI/gpt-neox-20b")
tokenizer = GPTNeoXTokenizerFast.from_pretrained("EleutherAI/gpt-neox-20b")

prompt = "GPTNeoX20B is a 20B-parameter autoregressive Transformer model developed by EleutherAI."

input_ids = tokenizer(prompt, return_tensors="pt").input_ids

gen_tokens = model.generate(
    input_ids,
    do_sample=True,
    temperature=0.9,
    max_length=100,
)
gen_text = tokenizer.batch_decode(gen_tokens)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXForCausalLM, GPTNeoXTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neox-20b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTNeoXTokenizerFast.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neox-20b&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;GPTNeoX20B is a 20B-parameter autoregressive Transformer model developed by EleutherAI.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(
<span class="hljs-meta">... </span>    input_ids,
<span class="hljs-meta">... </span>    do_sample=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.9</span>,
<span class="hljs-meta">... </span>    max_length=<span class="hljs-number">100</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`}}),be=new Ie({}),ve=new et({props:{name:"class transformers.GPTNeoXConfig",anchor:"transformers.GPTNeoXConfig",parameters:[{name:"vocab_size",val:" = 50432"},{name:"hidden_size",val:" = 6144"},{name:"num_hidden_layers",val:" = 44"},{name:"num_attention_heads",val:" = 64"},{name:"intermediate_size",val:" = 24576"},{name:"hidden_act",val:" = 'gelu'"},{name:"rotary_pct",val:" = 0.25"},{name:"rotary_emb_base",val:" = 10000"},{name:"max_position_embeddings",val:" = 2048"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"tie_word_embeddings",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50432) &#x2014;
Vocabulary size of the GPTNeoX model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXModel">GPTNeoXModel</a>.`,name:"vocab_size"},{anchor:"transformers.GPTNeoXConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 6144) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.GPTNeoXConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 44) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.GPTNeoXConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.GPTNeoXConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 24576) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.GPTNeoXConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.GPTNeoXConfig.rotary_pct",description:`<strong>rotary_pct</strong> (<code>float</code>, <em>optional</em>, defaults to 0.25) &#x2014;
percentage of hidden dimensions to allocate to rotary embeddings`,name:"rotary_pct"},{anchor:"transformers.GPTNeoXConfig.rotary_emb_base",description:`<strong>rotary_emb_base</strong> (<code>int</code>, <em>optional</em>, defaults to 10000) &#x2014;
base for computing rotary embeddings frequency`,name:"rotary_emb_base"},{anchor:"transformers.GPTNeoXConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.GPTNeoXConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GPTNeoXConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.GPTNeoXConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.
Example &#x2014;`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt_neox/configuration_gpt_neox.py#L29"}}),ee=new to({props:{anchor:"transformers.GPTNeoXConfig.example",$$slots:{default:[bs]},$$scope:{ctx:G}}}),we=new Ie({}),Pe=new et({props:{name:"class transformers.GPTNeoXTokenizerFast",anchor:"transformers.GPTNeoXTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.GPTNeoXTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.GPTNeoXTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.GPTNeoXTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.GPTNeoXTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.GPTNeoXTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.GPTNeoXTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (GPTNeoX tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.GPTNeoXTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt_neox/tokenization_gpt_neox_fast.py#L44"}}),oe=new to({props:{anchor:"transformers.GPTNeoXTokenizerFast.example",$$slots:{default:[vs]},$$scope:{ctx:G}}}),ne=new Fn({props:{$$slots:{default:[ks]},$$scope:{ctx:G}}}),Ge=new Ie({}),Xe=new et({props:{name:"class transformers.GPTNeoXModel",anchor:"transformers.GPTNeoXModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXConfig">~GPTNeoXConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L406"}}),Fe=new et({props:{name:"forward",anchor:"transformers.GPTNeoXModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPTNeoXModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXTokenizerFast">GPTNeoXTokenizerFast</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTNeoXModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTNeoXModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTNeoXModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTNeoXModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTNeoXModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTNeoXModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTNeoXModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTNeoXModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTNeoXModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.GPTNeoXModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L424",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXConfig"
>GPTNeoXConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ae=new Fn({props:{$$slots:{default:[ws]},$$scope:{ctx:G}}}),re=new to({props:{anchor:"transformers.GPTNeoXModel.forward.example",$$slots:{default:[Ps]},$$scope:{ctx:G}}}),Me=new Ie({}),Ee=new et({props:{name:"class transformers.GPTNeoXForCausalLM",anchor:"transformers.GPTNeoXForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXConfig">~GPTNeoXConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L544"}}),qe=new et({props:{name:"forward",anchor:"transformers.GPTNeoXForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPTNeoXForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXTokenizerFast">GPTNeoXTokenizerFast</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTNeoXForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTNeoXForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTNeoXForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTNeoXForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTNeoXForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTNeoXForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTNeoXForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTNeoXForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTNeoXForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional tensors are
only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.GPTNeoXForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.GPTNeoXForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L563",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXConfig"
>GPTNeoXConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>)</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),le=new Fn({props:{$$slots:{default:[ys]},$$scope:{ctx:G}}}),de=new to({props:{anchor:"transformers.GPTNeoXForCausalLM.forward.example",$$slots:{default:[$s]},$$scope:{ctx:G}}}),{c(){d=n("meta"),T=m(),p=n("h1"),f=n("a"),b=n("span"),v(r.$$.fragment),_=m(),X=n("span"),I=i("GPT-NeoX"),z=m(),M=n("h2"),q=n("a"),ot=n("span"),v(me.$$.fragment),no=m(),nt=n("span"),so=i("Overview"),Nt=m(),R=n("p"),ao=i(`We introduce GPT-NeoX-20B, a 20 billion parameter autoregressive language model trained on the Pile, whose weights will
be made freely and openly available to the public through a permissive license. It is, to the best of our knowledge,
the largest dense autoregressive model that has publicly available weights at the time of submission. In this work,
we describe GPT-NeoX-20B\u2019s architecture and training and evaluate its performance on a range of language-understanding,
mathematics, and knowledge-based tasks. We find that GPT-NeoX-20B is a particularly powerful few-shot reasoner and
gains far more in performance when evaluated five-shot than similarly sized GPT-3 and FairSeq models. We open-source
the training and evaluation code, as well as the model weights, at `),ue=n("a"),ro=i("https://github.com/EleutherAI/gpt-neox"),io=i("."),Gt=m(),Y=n("p"),lo=i(`Development of the model was led by Sid Black, Stella Biderman and Eric Hallahan, and the model was trained with
generous the support of `),fe=n("a"),co=i("CoreWeave"),po=i("."),Xt=m(),Le=n("p"),ho=i("GPT-NeoX-20B was trained with fp16, thus it is recommended to initialize the model as follows:"),xt=m(),v(ge.$$.fragment),zt=m(),Oe=n("p"),mo=i(`GPT-NeoX-20B also has a different tokenizer from the one used in GPT-J-6B and GPT-Neo. The new tokenizer allocates
additional tokens to whitespace characters, making the model more suitable for certain tasks like code generation.`),Ft=m(),L=n("h3"),K=n("a"),st=n("span"),v(_e.$$.fragment),uo=m(),at=n("span"),fo=i("Generation"),Mt=m(),Q=n("p"),go=i("The "),rt=n("code"),_o=i("generate()"),To=i(" method can be used to generate text using GPT Neo model."),Et=m(),v(Te.$$.fragment),Ct=m(),O=n("h2"),Z=n("a"),it=n("span"),v(be.$$.fragment),bo=m(),lt=n("span"),vo=i("GPTNeoXConfig"),qt=m(),F=n("div"),v(ve.$$.fragment),ko=m(),B=n("p"),wo=i("This is the configuration class to store the configuration of a "),Be=n("a"),Po=i("GPTNeoXModel"),yo=i(`. It is used to instantiate an
GPTNeoX model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GPTNeoX
`),ke=n("a"),$o=i("EleutherAI/gpt-neox-20b"),No=i(" architecture."),Go=m(),S=n("p"),Xo=i("Configuration objects inherit from "),Se=n("a"),xo=i("PretrainedConfig"),zo=i(` and can be used to control the model outputs. Read the
documentation from `),De=n("a"),Fo=i("PretrainedConfig"),Mo=i(" for more information."),Eo=m(),v(ee.$$.fragment),jt=m(),D=n("h2"),te=n("a"),dt=n("span"),v(we.$$.fragment),Co=m(),ct=n("span"),qo=i("GPTNeoXTokenizerFast"),At=m(),N=n("div"),v(Pe.$$.fragment),jo=m(),ye=n("p"),Ao=i("Construct a \u201Cfast\u201D GPT-NeoX-20B tokenizer (backed by HuggingFace\u2019s "),pt=n("em"),Io=i("tokenizers"),Lo=i(` library). Based on byte-level
Byte-Pair-Encoding.`),Oo=m(),ht=n("p"),Bo=i("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),So=m(),v(oe.$$.fragment),Do=m(),$e=n("p"),Wo=i("You can get around that behavior by passing "),mt=n("code"),Ho=i("add_prefix_space=True"),Uo=i(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Vo=m(),v(ne.$$.fragment),Jo=m(),Ne=n("p"),Ro=i("This tokenizer inherits from "),We=n("a"),Yo=i("PreTrainedTokenizerFast"),Ko=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),It=m(),W=n("h2"),se=n("a"),ut=n("span"),v(Ge.$$.fragment),Qo=m(),ft=n("span"),Zo=i("GPTNeoXModel"),Lt=m(),j=n("div"),v(Xe.$$.fragment),en=m(),xe=n("p"),tn=i(`The bare GPTNeoX Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ze=n("a"),on=i("torch.nn.Module"),nn=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),sn=m(),E=n("div"),v(Fe.$$.fragment),an=m(),H=n("p"),rn=i("The "),He=n("a"),ln=i("GPTNeoXModel"),dn=i(" forward method, overrides the "),gt=n("code"),cn=i("__call__"),pn=i(" special method."),hn=m(),v(ae.$$.fragment),mn=m(),v(re.$$.fragment),Ot=m(),U=n("h2"),ie=n("a"),_t=n("span"),v(Me.$$.fragment),un=m(),Tt=n("span"),fn=i("GPTNeoXForCausalLM"),Bt=m(),A=n("div"),v(Ee.$$.fragment),gn=m(),V=n("p"),_n=i("GPTNeoX Model with a "),bt=n("code"),Tn=i("language modeling"),bn=i(` head on top for CLM fine-tuning.
This model is a PyTorch `),Ce=n("a"),vn=i("torch.nn.Module"),kn=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wn=m(),C=n("div"),v(qe.$$.fragment),Pn=m(),J=n("p"),yn=i("The "),Ue=n("a"),$n=i("GPTNeoXForCausalLM"),Nn=i(" forward method, overrides the "),vt=n("code"),Gn=i("__call__"),Xn=i(" special method."),xn=m(),v(le.$$.fragment),zn=m(),v(de.$$.fragment),this.h()},l(e){const c=_s('[data-svelte="svelte-1phssyn"]',document.head);d=s(c,"META",{name:!0,content:!0}),c.forEach(o),T=u(e),p=s(e,"H1",{class:!0});var je=a(p);f=s(je,"A",{id:!0,class:!0,href:!0});var kt=a(f);b=s(kt,"SPAN",{});var wt=a(b);k(r.$$.fragment,wt),wt.forEach(o),kt.forEach(o),_=u(je),X=s(je,"SPAN",{});var Pt=a(X);I=l(Pt,"GPT-NeoX"),Pt.forEach(o),je.forEach(o),z=u(e),M=s(e,"H2",{class:!0});var Ae=a(M);q=s(Ae,"A",{id:!0,class:!0,href:!0});var yt=a(q);ot=s(yt,"SPAN",{});var $t=a(ot);k(me.$$.fragment,$t),$t.forEach(o),yt.forEach(o),no=u(Ae),nt=s(Ae,"SPAN",{});var Mn=a(nt);so=l(Mn,"Overview"),Mn.forEach(o),Ae.forEach(o),Nt=u(e),R=s(e,"P",{});var Dt=a(R);ao=l(Dt,`We introduce GPT-NeoX-20B, a 20 billion parameter autoregressive language model trained on the Pile, whose weights will
be made freely and openly available to the public through a permissive license. It is, to the best of our knowledge,
the largest dense autoregressive model that has publicly available weights at the time of submission. In this work,
we describe GPT-NeoX-20B\u2019s architecture and training and evaluate its performance on a range of language-understanding,
mathematics, and knowledge-based tasks. We find that GPT-NeoX-20B is a particularly powerful few-shot reasoner and
gains far more in performance when evaluated five-shot than similarly sized GPT-3 and FairSeq models. We open-source
the training and evaluation code, as well as the model weights, at `),ue=s(Dt,"A",{href:!0,rel:!0});var En=a(ue);ro=l(En,"https://github.com/EleutherAI/gpt-neox"),En.forEach(o),io=l(Dt,"."),Dt.forEach(o),Gt=u(e),Y=s(e,"P",{});var Wt=a(Y);lo=l(Wt,`Development of the model was led by Sid Black, Stella Biderman and Eric Hallahan, and the model was trained with
generous the support of `),fe=s(Wt,"A",{href:!0,rel:!0});var Cn=a(fe);co=l(Cn,"CoreWeave"),Cn.forEach(o),po=l(Wt,"."),Wt.forEach(o),Xt=u(e),Le=s(e,"P",{});var qn=a(Le);ho=l(qn,"GPT-NeoX-20B was trained with fp16, thus it is recommended to initialize the model as follows:"),qn.forEach(o),xt=u(e),k(ge.$$.fragment,e),zt=u(e),Oe=s(e,"P",{});var jn=a(Oe);mo=l(jn,`GPT-NeoX-20B also has a different tokenizer from the one used in GPT-J-6B and GPT-Neo. The new tokenizer allocates
additional tokens to whitespace characters, making the model more suitable for certain tasks like code generation.`),jn.forEach(o),Ft=u(e),L=s(e,"H3",{class:!0});var Ht=a(L);K=s(Ht,"A",{id:!0,class:!0,href:!0});var An=a(K);st=s(An,"SPAN",{});var In=a(st);k(_e.$$.fragment,In),In.forEach(o),An.forEach(o),uo=u(Ht),at=s(Ht,"SPAN",{});var Ln=a(at);fo=l(Ln,"Generation"),Ln.forEach(o),Ht.forEach(o),Mt=u(e),Q=s(e,"P",{});var Ut=a(Q);go=l(Ut,"The "),rt=s(Ut,"CODE",{});var On=a(rt);_o=l(On,"generate()"),On.forEach(o),To=l(Ut," method can be used to generate text using GPT Neo model."),Ut.forEach(o),Et=u(e),k(Te.$$.fragment,e),Ct=u(e),O=s(e,"H2",{class:!0});var Vt=a(O);Z=s(Vt,"A",{id:!0,class:!0,href:!0});var Bn=a(Z);it=s(Bn,"SPAN",{});var Sn=a(it);k(be.$$.fragment,Sn),Sn.forEach(o),Bn.forEach(o),bo=u(Vt),lt=s(Vt,"SPAN",{});var Dn=a(lt);vo=l(Dn,"GPTNeoXConfig"),Dn.forEach(o),Vt.forEach(o),qt=u(e),F=s(e,"DIV",{class:!0});var ce=a(F);k(ve.$$.fragment,ce),ko=u(ce),B=s(ce,"P",{});var Ve=a(B);wo=l(Ve,"This is the configuration class to store the configuration of a "),Be=s(Ve,"A",{href:!0});var Wn=a(Be);Po=l(Wn,"GPTNeoXModel"),Wn.forEach(o),yo=l(Ve,`. It is used to instantiate an
GPTNeoX model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GPTNeoX
`),ke=s(Ve,"A",{href:!0,rel:!0});var Hn=a(ke);$o=l(Hn,"EleutherAI/gpt-neox-20b"),Hn.forEach(o),No=l(Ve," architecture."),Ve.forEach(o),Go=u(ce),S=s(ce,"P",{});var Je=a(S);Xo=l(Je,"Configuration objects inherit from "),Se=s(Je,"A",{href:!0});var Un=a(Se);xo=l(Un,"PretrainedConfig"),Un.forEach(o),zo=l(Je,` and can be used to control the model outputs. Read the
documentation from `),De=s(Je,"A",{href:!0});var Vn=a(De);Fo=l(Vn,"PretrainedConfig"),Vn.forEach(o),Mo=l(Je," for more information."),Je.forEach(o),Eo=u(ce),k(ee.$$.fragment,ce),ce.forEach(o),jt=u(e),D=s(e,"H2",{class:!0});var Jt=a(D);te=s(Jt,"A",{id:!0,class:!0,href:!0});var Jn=a(te);dt=s(Jn,"SPAN",{});var Rn=a(dt);k(we.$$.fragment,Rn),Rn.forEach(o),Jn.forEach(o),Co=u(Jt),ct=s(Jt,"SPAN",{});var Yn=a(ct);qo=l(Yn,"GPTNeoXTokenizerFast"),Yn.forEach(o),Jt.forEach(o),At=u(e),N=s(e,"DIV",{class:!0});var x=a(N);k(Pe.$$.fragment,x),jo=u(x),ye=s(x,"P",{});var Rt=a(ye);Ao=l(Rt,"Construct a \u201Cfast\u201D GPT-NeoX-20B tokenizer (backed by HuggingFace\u2019s "),pt=s(Rt,"EM",{});var Kn=a(pt);Io=l(Kn,"tokenizers"),Kn.forEach(o),Lo=l(Rt,` library). Based on byte-level
Byte-Pair-Encoding.`),Rt.forEach(o),Oo=u(x),ht=s(x,"P",{});var Qn=a(ht);Bo=l(Qn,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Qn.forEach(o),So=u(x),k(oe.$$.fragment,x),Do=u(x),$e=s(x,"P",{});var Yt=a($e);Wo=l(Yt,"You can get around that behavior by passing "),mt=s(Yt,"CODE",{});var Zn=a(mt);Ho=l(Zn,"add_prefix_space=True"),Zn.forEach(o),Uo=l(Yt,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Yt.forEach(o),Vo=u(x),k(ne.$$.fragment,x),Jo=u(x),Ne=s(x,"P",{});var Kt=a(Ne);Ro=l(Kt,"This tokenizer inherits from "),We=s(Kt,"A",{href:!0});var es=a(We);Yo=l(es,"PreTrainedTokenizerFast"),es.forEach(o),Ko=l(Kt,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Kt.forEach(o),x.forEach(o),It=u(e),W=s(e,"H2",{class:!0});var Qt=a(W);se=s(Qt,"A",{id:!0,class:!0,href:!0});var ts=a(se);ut=s(ts,"SPAN",{});var os=a(ut);k(Ge.$$.fragment,os),os.forEach(o),ts.forEach(o),Qo=u(Qt),ft=s(Qt,"SPAN",{});var ns=a(ft);Zo=l(ns,"GPTNeoXModel"),ns.forEach(o),Qt.forEach(o),Lt=u(e),j=s(e,"DIV",{class:!0});var Re=a(j);k(Xe.$$.fragment,Re),en=u(Re),xe=s(Re,"P",{});var Zt=a(xe);tn=l(Zt,`The bare GPTNeoX Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ze=s(Zt,"A",{href:!0,rel:!0});var ss=a(ze);on=l(ss,"torch.nn.Module"),ss.forEach(o),nn=l(Zt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zt.forEach(o),sn=u(Re),E=s(Re,"DIV",{class:!0});var pe=a(E);k(Fe.$$.fragment,pe),an=u(pe),H=s(pe,"P",{});var Ye=a(H);rn=l(Ye,"The "),He=s(Ye,"A",{href:!0});var as=a(He);ln=l(as,"GPTNeoXModel"),as.forEach(o),dn=l(Ye," forward method, overrides the "),gt=s(Ye,"CODE",{});var rs=a(gt);cn=l(rs,"__call__"),rs.forEach(o),pn=l(Ye," special method."),Ye.forEach(o),hn=u(pe),k(ae.$$.fragment,pe),mn=u(pe),k(re.$$.fragment,pe),pe.forEach(o),Re.forEach(o),Ot=u(e),U=s(e,"H2",{class:!0});var eo=a(U);ie=s(eo,"A",{id:!0,class:!0,href:!0});var is=a(ie);_t=s(is,"SPAN",{});var ls=a(_t);k(Me.$$.fragment,ls),ls.forEach(o),is.forEach(o),un=u(eo),Tt=s(eo,"SPAN",{});var ds=a(Tt);fn=l(ds,"GPTNeoXForCausalLM"),ds.forEach(o),eo.forEach(o),Bt=u(e),A=s(e,"DIV",{class:!0});var Ke=a(A);k(Ee.$$.fragment,Ke),gn=u(Ke),V=s(Ke,"P",{});var Qe=a(V);_n=l(Qe,"GPTNeoX Model with a "),bt=s(Qe,"CODE",{});var cs=a(bt);Tn=l(cs,"language modeling"),cs.forEach(o),bn=l(Qe,` head on top for CLM fine-tuning.
This model is a PyTorch `),Ce=s(Qe,"A",{href:!0,rel:!0});var ps=a(Ce);vn=l(ps,"torch.nn.Module"),ps.forEach(o),kn=l(Qe,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qe.forEach(o),wn=u(Ke),C=s(Ke,"DIV",{class:!0});var he=a(C);k(qe.$$.fragment,he),Pn=u(he),J=s(he,"P",{});var Ze=a(J);yn=l(Ze,"The "),Ue=s(Ze,"A",{href:!0});var hs=a(Ue);$n=l(hs,"GPTNeoXForCausalLM"),hs.forEach(o),Nn=l(Ze," forward method, overrides the "),vt=s(Ze,"CODE",{});var ms=a(vt);Gn=l(ms,"__call__"),ms.forEach(o),Xn=l(Ze," special method."),Ze.forEach(o),xn=u(he),k(le.$$.fragment,he),zn=u(he),k(de.$$.fragment,he),he.forEach(o),Ke.forEach(o),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(Gs)),h(f,"id","gptneox"),h(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(f,"href","#gptneox"),h(p,"class","relative group"),h(q,"id","overview"),h(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(q,"href","#overview"),h(M,"class","relative group"),h(ue,"href","https://github.com/EleutherAI/gpt-neox"),h(ue,"rel","nofollow"),h(fe,"href","https://www.coreweave.com/"),h(fe,"rel","nofollow"),h(K,"id","generation"),h(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(K,"href","#generation"),h(L,"class","relative group"),h(Z,"id","transformers.GPTNeoXConfig"),h(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Z,"href","#transformers.GPTNeoXConfig"),h(O,"class","relative group"),h(Be,"href","/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXModel"),h(ke,"href","https://huggingface.co/EleutherAI/gpt-neox-20b"),h(ke,"rel","nofollow"),h(Se,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(De,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(te,"id","transformers.GPTNeoXTokenizerFast"),h(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(te,"href","#transformers.GPTNeoXTokenizerFast"),h(D,"class","relative group"),h(We,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(se,"id","transformers.GPTNeoXModel"),h(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(se,"href","#transformers.GPTNeoXModel"),h(W,"class","relative group"),h(ze,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(ze,"rel","nofollow"),h(He,"href","/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXModel"),h(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ie,"id","transformers.GPTNeoXForCausalLM"),h(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ie,"href","#transformers.GPTNeoXForCausalLM"),h(U,"class","relative group"),h(Ce,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ce,"rel","nofollow"),h(Ue,"href","/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXForCausalLM"),h(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,c){t(document.head,d),g(e,T,c),g(e,p,c),t(p,f),t(f,b),w(r,b,null),t(p,_),t(p,X),t(X,I),g(e,z,c),g(e,M,c),t(M,q),t(q,ot),w(me,ot,null),t(M,no),t(M,nt),t(nt,so),g(e,Nt,c),g(e,R,c),t(R,ao),t(R,ue),t(ue,ro),t(R,io),g(e,Gt,c),g(e,Y,c),t(Y,lo),t(Y,fe),t(fe,co),t(Y,po),g(e,Xt,c),g(e,Le,c),t(Le,ho),g(e,xt,c),w(ge,e,c),g(e,zt,c),g(e,Oe,c),t(Oe,mo),g(e,Ft,c),g(e,L,c),t(L,K),t(K,st),w(_e,st,null),t(L,uo),t(L,at),t(at,fo),g(e,Mt,c),g(e,Q,c),t(Q,go),t(Q,rt),t(rt,_o),t(Q,To),g(e,Et,c),w(Te,e,c),g(e,Ct,c),g(e,O,c),t(O,Z),t(Z,it),w(be,it,null),t(O,bo),t(O,lt),t(lt,vo),g(e,qt,c),g(e,F,c),w(ve,F,null),t(F,ko),t(F,B),t(B,wo),t(B,Be),t(Be,Po),t(B,yo),t(B,ke),t(ke,$o),t(B,No),t(F,Go),t(F,S),t(S,Xo),t(S,Se),t(Se,xo),t(S,zo),t(S,De),t(De,Fo),t(S,Mo),t(F,Eo),w(ee,F,null),g(e,jt,c),g(e,D,c),t(D,te),t(te,dt),w(we,dt,null),t(D,Co),t(D,ct),t(ct,qo),g(e,At,c),g(e,N,c),w(Pe,N,null),t(N,jo),t(N,ye),t(ye,Ao),t(ye,pt),t(pt,Io),t(ye,Lo),t(N,Oo),t(N,ht),t(ht,Bo),t(N,So),w(oe,N,null),t(N,Do),t(N,$e),t($e,Wo),t($e,mt),t(mt,Ho),t($e,Uo),t(N,Vo),w(ne,N,null),t(N,Jo),t(N,Ne),t(Ne,Ro),t(Ne,We),t(We,Yo),t(Ne,Ko),g(e,It,c),g(e,W,c),t(W,se),t(se,ut),w(Ge,ut,null),t(W,Qo),t(W,ft),t(ft,Zo),g(e,Lt,c),g(e,j,c),w(Xe,j,null),t(j,en),t(j,xe),t(xe,tn),t(xe,ze),t(ze,on),t(xe,nn),t(j,sn),t(j,E),w(Fe,E,null),t(E,an),t(E,H),t(H,rn),t(H,He),t(He,ln),t(H,dn),t(H,gt),t(gt,cn),t(H,pn),t(E,hn),w(ae,E,null),t(E,mn),w(re,E,null),g(e,Ot,c),g(e,U,c),t(U,ie),t(ie,_t),w(Me,_t,null),t(U,un),t(U,Tt),t(Tt,fn),g(e,Bt,c),g(e,A,c),w(Ee,A,null),t(A,gn),t(A,V),t(V,_n),t(V,bt),t(bt,Tn),t(V,bn),t(V,Ce),t(Ce,vn),t(V,kn),t(A,wn),t(A,C),w(qe,C,null),t(C,Pn),t(C,J),t(J,yn),t(J,Ue),t(Ue,$n),t(J,Nn),t(J,vt),t(vt,Gn),t(J,Xn),t(C,xn),w(le,C,null),t(C,zn),w(de,C,null),St=!0},p(e,[c]){const je={};c&2&&(je.$$scope={dirty:c,ctx:e}),ee.$set(je);const kt={};c&2&&(kt.$$scope={dirty:c,ctx:e}),oe.$set(kt);const wt={};c&2&&(wt.$$scope={dirty:c,ctx:e}),ne.$set(wt);const Pt={};c&2&&(Pt.$$scope={dirty:c,ctx:e}),ae.$set(Pt);const Ae={};c&2&&(Ae.$$scope={dirty:c,ctx:e}),re.$set(Ae);const yt={};c&2&&(yt.$$scope={dirty:c,ctx:e}),le.$set(yt);const $t={};c&2&&($t.$$scope={dirty:c,ctx:e}),de.$set($t)},i(e){St||(P(r.$$.fragment,e),P(me.$$.fragment,e),P(ge.$$.fragment,e),P(_e.$$.fragment,e),P(Te.$$.fragment,e),P(be.$$.fragment,e),P(ve.$$.fragment,e),P(ee.$$.fragment,e),P(we.$$.fragment,e),P(Pe.$$.fragment,e),P(oe.$$.fragment,e),P(ne.$$.fragment,e),P(Ge.$$.fragment,e),P(Xe.$$.fragment,e),P(Fe.$$.fragment,e),P(ae.$$.fragment,e),P(re.$$.fragment,e),P(Me.$$.fragment,e),P(Ee.$$.fragment,e),P(qe.$$.fragment,e),P(le.$$.fragment,e),P(de.$$.fragment,e),St=!0)},o(e){y(r.$$.fragment,e),y(me.$$.fragment,e),y(ge.$$.fragment,e),y(_e.$$.fragment,e),y(Te.$$.fragment,e),y(be.$$.fragment,e),y(ve.$$.fragment,e),y(ee.$$.fragment,e),y(we.$$.fragment,e),y(Pe.$$.fragment,e),y(oe.$$.fragment,e),y(ne.$$.fragment,e),y(Ge.$$.fragment,e),y(Xe.$$.fragment,e),y(Fe.$$.fragment,e),y(ae.$$.fragment,e),y(re.$$.fragment,e),y(Me.$$.fragment,e),y(Ee.$$.fragment,e),y(qe.$$.fragment,e),y(le.$$.fragment,e),y(de.$$.fragment,e),St=!1},d(e){o(d),e&&o(T),e&&o(p),$(r),e&&o(z),e&&o(M),$(me),e&&o(Nt),e&&o(R),e&&o(Gt),e&&o(Y),e&&o(Xt),e&&o(Le),e&&o(xt),$(ge,e),e&&o(zt),e&&o(Oe),e&&o(Ft),e&&o(L),$(_e),e&&o(Mt),e&&o(Q),e&&o(Et),$(Te,e),e&&o(Ct),e&&o(O),$(be),e&&o(qt),e&&o(F),$(ve),$(ee),e&&o(jt),e&&o(D),$(we),e&&o(At),e&&o(N),$(Pe),$(oe),$(ne),e&&o(It),e&&o(W),$(Ge),e&&o(Lt),e&&o(j),$(Xe),$(Fe),$(ae),$(re),e&&o(Ot),e&&o(U),$(Me),e&&o(Bt),e&&o(A),$(Ee),$(qe),$(le),$(de)}}}const Gs={local:"gptneox",sections:[{local:"overview",sections:[{local:"generation",title:"Generation"}],title:"Overview"},{local:"transformers.GPTNeoXConfig",title:"GPTNeoXConfig"},{local:"transformers.GPTNeoXTokenizerFast",title:"GPTNeoXTokenizerFast"},{local:"transformers.GPTNeoXModel",title:"GPTNeoXModel"},{local:"transformers.GPTNeoXForCausalLM",title:"GPTNeoXForCausalLM"}],title:"GPT-NeoX"};function Xs(G){return Ts(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qs extends us{constructor(d){super();fs(this,d,Xs,Ns,gs,{})}}export{qs as default,Gs as metadata};
