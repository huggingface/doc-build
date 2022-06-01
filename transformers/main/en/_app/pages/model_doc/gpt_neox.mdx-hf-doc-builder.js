import{S as fs,i as us,s as gs,e as n,k as m,w as v,t as i,M as _s,c as s,d as o,m as f,a,x as k,h as l,b as h,G as t,g,y as w,q as P,o as $,B as y,v as Ts,L as oo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Mn}from"../../chunks/Tip-hf-doc-builder.js";import{D as et}from"../../chunks/Docstring-hf-doc-builder.js";import{C as tt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Le}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as to}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function bs(G){let d,T;return d=new tt({props:{code:`from transformers import GPTNeoXModel, GPTNeoXConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){v(d.$$.fragment)},l(p){k(d.$$.fragment,p)},m(p,u){w(d,p,u),T=!0},p:oo,i(p){T||(P(d.$$.fragment,p),T=!0)},o(p){$(d.$$.fragment,p),T=!1},d(p){y(d,p)}}}function vs(G){let d,T,p,u,b;return u=new tt({props:{code:`from transformers import GPTNeoXTokenizerFast
tokenizer = GPTNeoXTokenizerFast.from_pretrained("gpt2")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = GPTNeoXTokenizerFast.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=n("p"),T=i("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p=m(),v(u.$$.fragment)},l(r){d=s(r,"P",{});var _=a(d);T=l(_,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),_.forEach(o),p=f(r),k(u.$$.fragment,r)},m(r,_){g(r,d,_),t(d,T),g(r,p,_),w(u,r,_),b=!0},p:oo,i(r){b||(P(u.$$.fragment,r),b=!0)},o(r){$(u.$$.fragment,r),b=!1},d(r){r&&o(d),r&&o(p),y(u,r)}}}function ks(G){let d,T,p,u,b,r,_,X;return{c(){d=n("p"),T=i("When used with "),p=n("code"),u=i("is_split_into_words=True"),b=i(", this tokenizer needs to be instantiated with "),r=n("code"),_=i("add_prefix_space=True"),X=i(".")},l(L){d=s(L,"P",{});var z=a(d);T=l(z,"When used with "),p=s(z,"CODE",{});var C=a(p);u=l(C,"is_split_into_words=True"),C.forEach(o),b=l(z,", this tokenizer needs to be instantiated with "),r=s(z,"CODE",{});var q=a(r);_=l(q,"add_prefix_space=True"),q.forEach(o),X=l(z,"."),z.forEach(o)},m(L,z){g(L,d,z),t(d,T),t(d,p),t(p,u),t(d,b),t(d,r),t(r,_),t(d,X)},d(L){L&&o(d)}}}function ws(G){let d,T,p,u,b;return{c(){d=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var _=a(d);T=l(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(_,"CODE",{});var X=a(p);u=l(X,"Module"),X.forEach(o),b=l(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(r,_){g(r,d,_),t(d,T),t(d,p),t(p,u),t(d,b)},d(r){r&&o(d)}}}function Ps(G){let d,T,p,u,b;return u=new tt({props:{code:`from transformers import GPTNeoXTokenizerFast, GPTNeoXModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),T=i("Example:"),p=m(),v(u.$$.fragment)},l(r){d=s(r,"P",{});var _=a(d);T=l(_,"Example:"),_.forEach(o),p=f(r),k(u.$$.fragment,r)},m(r,_){g(r,d,_),t(d,T),g(r,p,_),w(u,r,_),b=!0},p:oo,i(r){b||(P(u.$$.fragment,r),b=!0)},o(r){$(u.$$.fragment,r),b=!1},d(r){r&&o(d),r&&o(p),y(u,r)}}}function $s(G){let d,T,p,u,b;return{c(){d=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var _=a(d);T=l(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(_,"CODE",{});var X=a(p);u=l(X,"Module"),X.forEach(o),b=l(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(r,_){g(r,d,_),t(d,T),t(d,p),t(p,u),t(d,b)},d(r){r&&o(d)}}}function ys(G){let d,T,p,u,b;return u=new tt({props:{code:`from transformers import GPTNeoXTokenizer, GPTNeoXForCausalLM, GPTNeoXConfig
import torch

tokenizer = GPTNeoXTokenizer.from_pretrained("gpt-neox-20b")
config = GPTNeoXConfig.from_pretrained("gpt-neox-20b")
config.is_decoder = True
model = GPTNeoXForCausalLM.from_pretrained("gpt-neox-20b", config=config)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXTokenizer, GPTNeoXForCausalLM, GPTNeoXConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTNeoXTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt-neox-20b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = GPTNeoXConfig.from_pretrained(<span class="hljs-string">&quot;gpt-neox-20b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXForCausalLM.from_pretrained(<span class="hljs-string">&quot;gpt-neox-20b&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),T=i("Example:"),p=m(),v(u.$$.fragment)},l(r){d=s(r,"P",{});var _=a(d);T=l(_,"Example:"),_.forEach(o),p=f(r),k(u.$$.fragment,r)},m(r,_){g(r,d,_),t(d,T),g(r,p,_),w(u,r,_),b=!0},p:oo,i(r){b||(P(u.$$.fragment,r),b=!0)},o(r){$(u.$$.fragment,r),b=!1},d(r){r&&o(d),r&&o(p),y(u,r)}}}function Ns(G){let d,T,p,u,b,r,_,X,L,z,C,q,ot,me,no,nt,so,Nt,R,ao,fe,ro,io,Gt,Y,lo,ue,co,po,Xt,Ie,ho,xt,ge,zt,Se,mo,Mt,I,K,st,_e,fo,at,uo,Ct,Q,go,rt,_o,To,Et,Te,Ft,S,Z,it,be,bo,lt,vo,qt,M,ve,ko,D,wo,De,Po,$o,ke,yo,No,Go,B,Xo,Be,xo,zo,We,Mo,Co,Eo,ee,jt,W,te,dt,we,Fo,ct,qo,At,N,Pe,jo,$e,Ao,pt,Lo,Io,So,ht,Do,Bo,oe,Wo,ye,Oo,mt,Ho,Vo,Uo,ne,Jo,Ne,Ro,Oe,Yo,Ko,Lt,O,se,ft,Ge,Qo,ut,Zo,It,j,Xe,en,xe,tn,ze,on,nn,sn,E,Me,an,H,rn,He,ln,dn,gt,cn,pn,hn,ae,mn,re,St,V,ie,_t,Ce,fn,Tt,un,Dt,A,Ee,gn,U,_n,bt,Tn,bn,Fe,vn,kn,wn,F,qe,Pn,J,$n,Ve,yn,Nn,vt,Gn,Xn,xn,le,zn,de,Bt;return r=new Le({}),me=new Le({}),ge=new tt({props:{code:'model = GPTNeoXForCausalLM.from_pretrained("EleutherAI/gpt-neox-20b").half().cuda()',highlighted:'model = GPTNeoXForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neox-20b&quot;</span>).half().cuda()'}}),_e=new Le({}),Te=new tt({props:{code:`from transformers import GPTNeoXForCausalLM, GPTNeoXTokenizerFast

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
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`}}),be=new Le({}),ve=new et({props:{name:"class transformers.GPTNeoXConfig",anchor:"transformers.GPTNeoXConfig",parameters:[{name:"vocab_size",val:" = 50432"},{name:"hidden_size",val:" = 6144"},{name:"num_hidden_layers",val:" = 44"},{name:"num_attention_heads",val:" = 64"},{name:"intermediate_size",val:" = 24576"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"rotary_pct",val:" = 0.25"},{name:"rotary_emb_base",val:" = 10000"},{name:"max_position_embeddings",val:" = 2048"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"tie_word_embeddings",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the GPTNeoX model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXModel">GPTNeoXModel</a>.`,name:"vocab_size"},{anchor:"transformers.GPTNeoXConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.GPTNeoXConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.GPTNeoXConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.GPTNeoXConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.GPTNeoXConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.GPTNeoXConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.GPTNeoXConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.GPTNeoXConfig.rotary_pct",description:`<strong>rotary_pct</strong> (<code>float</code>, <em>optional</em>, defaults to 0.25) &#x2014;
percentage of hidden dimensions to allocate to rotary embeddings`,name:"rotary_pct"},{anchor:"transformers.GPTNeoXConfig.rotary_emb_base",description:`<strong>rotary_emb_base</strong> (<code>int</code>, <em>optional</em>, defaults to 10000) &#x2014;
base for computing rotary embeddings frequency`,name:"rotary_emb_base"},{anchor:"transformers.GPTNeoXConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.GPTNeoXConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GPTNeoXConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.GPTNeoXConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.
Example &#x2014;`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt_neox/configuration_gpt_neox.py#L29"}}),ee=new to({props:{anchor:"transformers.GPTNeoXConfig.example",$$slots:{default:[bs]},$$scope:{ctx:G}}}),we=new Le({}),Pe=new et({props:{name:"class transformers.GPTNeoXTokenizerFast",anchor:"transformers.GPTNeoXTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt_neox/tokenization_gpt_neox_fast.py#L44"}}),oe=new to({props:{anchor:"transformers.GPTNeoXTokenizerFast.example",$$slots:{default:[vs]},$$scope:{ctx:G}}}),ne=new Mn({props:{$$slots:{default:[ks]},$$scope:{ctx:G}}}),Ge=new Le({}),Xe=new et({props:{name:"class transformers.GPTNeoXModel",anchor:"transformers.GPTNeoXModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXConfig">~GPTNeoXConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L383"}}),Me=new et({props:{name:"forward",anchor:"transformers.GPTNeoXModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPTNeoXModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTNeoXTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L401",returnDescription:`
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
`}}),ae=new Mn({props:{$$slots:{default:[ws]},$$scope:{ctx:G}}}),re=new to({props:{anchor:"transformers.GPTNeoXModel.forward.example",$$slots:{default:[Ps]},$$scope:{ctx:G}}}),Ce=new Le({}),Ee=new et({props:{name:"class transformers.GPTNeoXForCausalLM",anchor:"transformers.GPTNeoXForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXConfig">~GPTNeoXConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L521"}}),qe=new et({props:{name:"forward",anchor:"transformers.GPTNeoXForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPTNeoXForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTNeoXTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L540",returnDescription:`
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
`}}),le=new Mn({props:{$$slots:{default:[$s]},$$scope:{ctx:G}}}),de=new to({props:{anchor:"transformers.GPTNeoXForCausalLM.forward.example",$$slots:{default:[ys]},$$scope:{ctx:G}}}),{c(){d=n("meta"),T=m(),p=n("h1"),u=n("a"),b=n("span"),v(r.$$.fragment),_=m(),X=n("span"),L=i("GPT-NeoX"),z=m(),C=n("h2"),q=n("a"),ot=n("span"),v(me.$$.fragment),no=m(),nt=n("span"),so=i("Overview"),Nt=m(),R=n("p"),ao=i(`We introduce GPT-NeoX-20B, a 20 billion parameter autoregressive language model trained on the Pile, whose weights will
be made freely and openly available to the public through a permissive license. It is, to the best of our knowledge,
the largest dense autoregressive model that has publicly available weights at the time of submission. In this work,
we describe GPT-NeoX-20B\u2019s architecture and training and evaluate its performance on a range of language-understanding,
mathematics, and knowledge-based tasks. We find that GPT-NeoX-20B is a particularly powerful few-shot reasoner and
gains far more in performance when evaluated five-shot than similarly sized GPT-3 and FairSeq models. We open-source
the training and evaluation code, as well as the model weights, at `),fe=n("a"),ro=i("https://github.com/EleutherAI/gpt-neox"),io=i("."),Gt=m(),Y=n("p"),lo=i(`Development of the model was led by Sid Black, Stella Biderman and Eric Hallahan, and the model was trained with
generous the support of `),ue=n("a"),co=i("CoreWeave"),po=i("."),Xt=m(),Ie=n("p"),ho=i("GPT-NeoX-20B was trained with fp16, thus it is recommended to initialize the model as follows:"),xt=m(),v(ge.$$.fragment),zt=m(),Se=n("p"),mo=i(`GPT-NeoX-20B also has a different tokenizer from the one used in GPT-J-6B and GPT-Neo. The new tokenizer allocates
additional tokens to whitespace characters, making the model more suitable for certain tasks like code generation.`),Mt=m(),I=n("h3"),K=n("a"),st=n("span"),v(_e.$$.fragment),fo=m(),at=n("span"),uo=i("Generation"),Ct=m(),Q=n("p"),go=i("The "),rt=n("code"),_o=i("generate()"),To=i(" method can be used to generate text using GPT Neo model."),Et=m(),v(Te.$$.fragment),Ft=m(),S=n("h2"),Z=n("a"),it=n("span"),v(be.$$.fragment),bo=m(),lt=n("span"),vo=i("GPTNeoXConfig"),qt=m(),M=n("div"),v(ve.$$.fragment),ko=m(),D=n("p"),wo=i("This is the configuration class to store the configuration of a "),De=n("a"),Po=i("GPTNeoXModel"),$o=i(`. It is used to instantiate an
GPTNeoX model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GPTNeoX
`),ke=n("a"),yo=i("EleutherAI/gpt-neox-20b"),No=i(" architecture."),Go=m(),B=n("p"),Xo=i("Configuration objects inherit from "),Be=n("a"),xo=i("PretrainedConfig"),zo=i(` and can be used to control the model outputs. Read the
documentation from `),We=n("a"),Mo=i("PretrainedConfig"),Co=i(" for more information."),Eo=m(),v(ee.$$.fragment),jt=m(),W=n("h2"),te=n("a"),dt=n("span"),v(we.$$.fragment),Fo=m(),ct=n("span"),qo=i("GPTNeoXTokenizerFast"),At=m(),N=n("div"),v(Pe.$$.fragment),jo=m(),$e=n("p"),Ao=i("Construct a \u201Cfast\u201D GPT-NeoX-20B tokenizer (backed by HuggingFace\u2019s "),pt=n("em"),Lo=i("tokenizers"),Io=i(` library). Based on byte-level
Byte-Pair-Encoding.`),So=m(),ht=n("p"),Do=i("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Bo=m(),v(oe.$$.fragment),Wo=m(),ye=n("p"),Oo=i("You can get around that behavior by passing "),mt=n("code"),Ho=i("add_prefix_space=True"),Vo=i(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Uo=m(),v(ne.$$.fragment),Jo=m(),Ne=n("p"),Ro=i("This tokenizer inherits from "),Oe=n("a"),Yo=i("PreTrainedTokenizerFast"),Ko=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Lt=m(),O=n("h2"),se=n("a"),ft=n("span"),v(Ge.$$.fragment),Qo=m(),ut=n("span"),Zo=i("GPTNeoXModel"),It=m(),j=n("div"),v(Xe.$$.fragment),en=m(),xe=n("p"),tn=i(`The bare GPTNeoX Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ze=n("a"),on=i("torch.nn.Module"),nn=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),sn=m(),E=n("div"),v(Me.$$.fragment),an=m(),H=n("p"),rn=i("The "),He=n("a"),ln=i("GPTNeoXModel"),dn=i(" forward method, overrides the "),gt=n("code"),cn=i("__call__"),pn=i(" special method."),hn=m(),v(ae.$$.fragment),mn=m(),v(re.$$.fragment),St=m(),V=n("h2"),ie=n("a"),_t=n("span"),v(Ce.$$.fragment),fn=m(),Tt=n("span"),un=i("GPTNeoXForCausalLM"),Dt=m(),A=n("div"),v(Ee.$$.fragment),gn=m(),U=n("p"),_n=i("GPTNeoX Model with a "),bt=n("code"),Tn=i("language modeling"),bn=i(` head on top for CLM fine-tuning.
This model is a PyTorch `),Fe=n("a"),vn=i("torch.nn.Module"),kn=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wn=m(),F=n("div"),v(qe.$$.fragment),Pn=m(),J=n("p"),$n=i("The "),Ve=n("a"),yn=i("GPTNeoXForCausalLM"),Nn=i(" forward method, overrides the "),vt=n("code"),Gn=i("__call__"),Xn=i(" special method."),xn=m(),v(le.$$.fragment),zn=m(),v(de.$$.fragment),this.h()},l(e){const c=_s('[data-svelte="svelte-1phssyn"]',document.head);d=s(c,"META",{name:!0,content:!0}),c.forEach(o),T=f(e),p=s(e,"H1",{class:!0});var je=a(p);u=s(je,"A",{id:!0,class:!0,href:!0});var kt=a(u);b=s(kt,"SPAN",{});var wt=a(b);k(r.$$.fragment,wt),wt.forEach(o),kt.forEach(o),_=f(je),X=s(je,"SPAN",{});var Pt=a(X);L=l(Pt,"GPT-NeoX"),Pt.forEach(o),je.forEach(o),z=f(e),C=s(e,"H2",{class:!0});var Ae=a(C);q=s(Ae,"A",{id:!0,class:!0,href:!0});var $t=a(q);ot=s($t,"SPAN",{});var yt=a(ot);k(me.$$.fragment,yt),yt.forEach(o),$t.forEach(o),no=f(Ae),nt=s(Ae,"SPAN",{});var Cn=a(nt);so=l(Cn,"Overview"),Cn.forEach(o),Ae.forEach(o),Nt=f(e),R=s(e,"P",{});var Wt=a(R);ao=l(Wt,`We introduce GPT-NeoX-20B, a 20 billion parameter autoregressive language model trained on the Pile, whose weights will
be made freely and openly available to the public through a permissive license. It is, to the best of our knowledge,
the largest dense autoregressive model that has publicly available weights at the time of submission. In this work,
we describe GPT-NeoX-20B\u2019s architecture and training and evaluate its performance on a range of language-understanding,
mathematics, and knowledge-based tasks. We find that GPT-NeoX-20B is a particularly powerful few-shot reasoner and
gains far more in performance when evaluated five-shot than similarly sized GPT-3 and FairSeq models. We open-source
the training and evaluation code, as well as the model weights, at `),fe=s(Wt,"A",{href:!0,rel:!0});var En=a(fe);ro=l(En,"https://github.com/EleutherAI/gpt-neox"),En.forEach(o),io=l(Wt,"."),Wt.forEach(o),Gt=f(e),Y=s(e,"P",{});var Ot=a(Y);lo=l(Ot,`Development of the model was led by Sid Black, Stella Biderman and Eric Hallahan, and the model was trained with
generous the support of `),ue=s(Ot,"A",{href:!0,rel:!0});var Fn=a(ue);co=l(Fn,"CoreWeave"),Fn.forEach(o),po=l(Ot,"."),Ot.forEach(o),Xt=f(e),Ie=s(e,"P",{});var qn=a(Ie);ho=l(qn,"GPT-NeoX-20B was trained with fp16, thus it is recommended to initialize the model as follows:"),qn.forEach(o),xt=f(e),k(ge.$$.fragment,e),zt=f(e),Se=s(e,"P",{});var jn=a(Se);mo=l(jn,`GPT-NeoX-20B also has a different tokenizer from the one used in GPT-J-6B and GPT-Neo. The new tokenizer allocates
additional tokens to whitespace characters, making the model more suitable for certain tasks like code generation.`),jn.forEach(o),Mt=f(e),I=s(e,"H3",{class:!0});var Ht=a(I);K=s(Ht,"A",{id:!0,class:!0,href:!0});var An=a(K);st=s(An,"SPAN",{});var Ln=a(st);k(_e.$$.fragment,Ln),Ln.forEach(o),An.forEach(o),fo=f(Ht),at=s(Ht,"SPAN",{});var In=a(at);uo=l(In,"Generation"),In.forEach(o),Ht.forEach(o),Ct=f(e),Q=s(e,"P",{});var Vt=a(Q);go=l(Vt,"The "),rt=s(Vt,"CODE",{});var Sn=a(rt);_o=l(Sn,"generate()"),Sn.forEach(o),To=l(Vt," method can be used to generate text using GPT Neo model."),Vt.forEach(o),Et=f(e),k(Te.$$.fragment,e),Ft=f(e),S=s(e,"H2",{class:!0});var Ut=a(S);Z=s(Ut,"A",{id:!0,class:!0,href:!0});var Dn=a(Z);it=s(Dn,"SPAN",{});var Bn=a(it);k(be.$$.fragment,Bn),Bn.forEach(o),Dn.forEach(o),bo=f(Ut),lt=s(Ut,"SPAN",{});var Wn=a(lt);vo=l(Wn,"GPTNeoXConfig"),Wn.forEach(o),Ut.forEach(o),qt=f(e),M=s(e,"DIV",{class:!0});var ce=a(M);k(ve.$$.fragment,ce),ko=f(ce),D=s(ce,"P",{});var Ue=a(D);wo=l(Ue,"This is the configuration class to store the configuration of a "),De=s(Ue,"A",{href:!0});var On=a(De);Po=l(On,"GPTNeoXModel"),On.forEach(o),$o=l(Ue,`. It is used to instantiate an
GPTNeoX model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GPTNeoX
`),ke=s(Ue,"A",{href:!0,rel:!0});var Hn=a(ke);yo=l(Hn,"EleutherAI/gpt-neox-20b"),Hn.forEach(o),No=l(Ue," architecture."),Ue.forEach(o),Go=f(ce),B=s(ce,"P",{});var Je=a(B);Xo=l(Je,"Configuration objects inherit from "),Be=s(Je,"A",{href:!0});var Vn=a(Be);xo=l(Vn,"PretrainedConfig"),Vn.forEach(o),zo=l(Je,` and can be used to control the model outputs. Read the
documentation from `),We=s(Je,"A",{href:!0});var Un=a(We);Mo=l(Un,"PretrainedConfig"),Un.forEach(o),Co=l(Je," for more information."),Je.forEach(o),Eo=f(ce),k(ee.$$.fragment,ce),ce.forEach(o),jt=f(e),W=s(e,"H2",{class:!0});var Jt=a(W);te=s(Jt,"A",{id:!0,class:!0,href:!0});var Jn=a(te);dt=s(Jn,"SPAN",{});var Rn=a(dt);k(we.$$.fragment,Rn),Rn.forEach(o),Jn.forEach(o),Fo=f(Jt),ct=s(Jt,"SPAN",{});var Yn=a(ct);qo=l(Yn,"GPTNeoXTokenizerFast"),Yn.forEach(o),Jt.forEach(o),At=f(e),N=s(e,"DIV",{class:!0});var x=a(N);k(Pe.$$.fragment,x),jo=f(x),$e=s(x,"P",{});var Rt=a($e);Ao=l(Rt,"Construct a \u201Cfast\u201D GPT-NeoX-20B tokenizer (backed by HuggingFace\u2019s "),pt=s(Rt,"EM",{});var Kn=a(pt);Lo=l(Kn,"tokenizers"),Kn.forEach(o),Io=l(Rt,` library). Based on byte-level
Byte-Pair-Encoding.`),Rt.forEach(o),So=f(x),ht=s(x,"P",{});var Qn=a(ht);Do=l(Qn,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Qn.forEach(o),Bo=f(x),k(oe.$$.fragment,x),Wo=f(x),ye=s(x,"P",{});var Yt=a(ye);Oo=l(Yt,"You can get around that behavior by passing "),mt=s(Yt,"CODE",{});var Zn=a(mt);Ho=l(Zn,"add_prefix_space=True"),Zn.forEach(o),Vo=l(Yt,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Yt.forEach(o),Uo=f(x),k(ne.$$.fragment,x),Jo=f(x),Ne=s(x,"P",{});var Kt=a(Ne);Ro=l(Kt,"This tokenizer inherits from "),Oe=s(Kt,"A",{href:!0});var es=a(Oe);Yo=l(es,"PreTrainedTokenizerFast"),es.forEach(o),Ko=l(Kt,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Kt.forEach(o),x.forEach(o),Lt=f(e),O=s(e,"H2",{class:!0});var Qt=a(O);se=s(Qt,"A",{id:!0,class:!0,href:!0});var ts=a(se);ft=s(ts,"SPAN",{});var os=a(ft);k(Ge.$$.fragment,os),os.forEach(o),ts.forEach(o),Qo=f(Qt),ut=s(Qt,"SPAN",{});var ns=a(ut);Zo=l(ns,"GPTNeoXModel"),ns.forEach(o),Qt.forEach(o),It=f(e),j=s(e,"DIV",{class:!0});var Re=a(j);k(Xe.$$.fragment,Re),en=f(Re),xe=s(Re,"P",{});var Zt=a(xe);tn=l(Zt,`The bare GPTNeoX Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ze=s(Zt,"A",{href:!0,rel:!0});var ss=a(ze);on=l(ss,"torch.nn.Module"),ss.forEach(o),nn=l(Zt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zt.forEach(o),sn=f(Re),E=s(Re,"DIV",{class:!0});var pe=a(E);k(Me.$$.fragment,pe),an=f(pe),H=s(pe,"P",{});var Ye=a(H);rn=l(Ye,"The "),He=s(Ye,"A",{href:!0});var as=a(He);ln=l(as,"GPTNeoXModel"),as.forEach(o),dn=l(Ye," forward method, overrides the "),gt=s(Ye,"CODE",{});var rs=a(gt);cn=l(rs,"__call__"),rs.forEach(o),pn=l(Ye," special method."),Ye.forEach(o),hn=f(pe),k(ae.$$.fragment,pe),mn=f(pe),k(re.$$.fragment,pe),pe.forEach(o),Re.forEach(o),St=f(e),V=s(e,"H2",{class:!0});var eo=a(V);ie=s(eo,"A",{id:!0,class:!0,href:!0});var is=a(ie);_t=s(is,"SPAN",{});var ls=a(_t);k(Ce.$$.fragment,ls),ls.forEach(o),is.forEach(o),fn=f(eo),Tt=s(eo,"SPAN",{});var ds=a(Tt);un=l(ds,"GPTNeoXForCausalLM"),ds.forEach(o),eo.forEach(o),Dt=f(e),A=s(e,"DIV",{class:!0});var Ke=a(A);k(Ee.$$.fragment,Ke),gn=f(Ke),U=s(Ke,"P",{});var Qe=a(U);_n=l(Qe,"GPTNeoX Model with a "),bt=s(Qe,"CODE",{});var cs=a(bt);Tn=l(cs,"language modeling"),cs.forEach(o),bn=l(Qe,` head on top for CLM fine-tuning.
This model is a PyTorch `),Fe=s(Qe,"A",{href:!0,rel:!0});var ps=a(Fe);vn=l(ps,"torch.nn.Module"),ps.forEach(o),kn=l(Qe,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qe.forEach(o),wn=f(Ke),F=s(Ke,"DIV",{class:!0});var he=a(F);k(qe.$$.fragment,he),Pn=f(he),J=s(he,"P",{});var Ze=a(J);$n=l(Ze,"The "),Ve=s(Ze,"A",{href:!0});var hs=a(Ve);yn=l(hs,"GPTNeoXForCausalLM"),hs.forEach(o),Nn=l(Ze," forward method, overrides the "),vt=s(Ze,"CODE",{});var ms=a(vt);Gn=l(ms,"__call__"),ms.forEach(o),Xn=l(Ze," special method."),Ze.forEach(o),xn=f(he),k(le.$$.fragment,he),zn=f(he),k(de.$$.fragment,he),he.forEach(o),Ke.forEach(o),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(Gs)),h(u,"id","gptneox"),h(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(u,"href","#gptneox"),h(p,"class","relative group"),h(q,"id","overview"),h(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(q,"href","#overview"),h(C,"class","relative group"),h(fe,"href","https://github.com/EleutherAI/gpt-neox"),h(fe,"rel","nofollow"),h(ue,"href","https://www.coreweave.com/"),h(ue,"rel","nofollow"),h(K,"id","generation"),h(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(K,"href","#generation"),h(I,"class","relative group"),h(Z,"id","transformers.GPTNeoXConfig"),h(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Z,"href","#transformers.GPTNeoXConfig"),h(S,"class","relative group"),h(De,"href","/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXModel"),h(ke,"href","https://huggingface.co/EleutherAI/gpt-neox-20b"),h(ke,"rel","nofollow"),h(Be,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(We,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(te,"id","transformers.GPTNeoXTokenizerFast"),h(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(te,"href","#transformers.GPTNeoXTokenizerFast"),h(W,"class","relative group"),h(Oe,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(se,"id","transformers.GPTNeoXModel"),h(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(se,"href","#transformers.GPTNeoXModel"),h(O,"class","relative group"),h(ze,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(ze,"rel","nofollow"),h(He,"href","/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXModel"),h(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ie,"id","transformers.GPTNeoXForCausalLM"),h(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ie,"href","#transformers.GPTNeoXForCausalLM"),h(V,"class","relative group"),h(Fe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Fe,"rel","nofollow"),h(Ve,"href","/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXForCausalLM"),h(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,c){t(document.head,d),g(e,T,c),g(e,p,c),t(p,u),t(u,b),w(r,b,null),t(p,_),t(p,X),t(X,L),g(e,z,c),g(e,C,c),t(C,q),t(q,ot),w(me,ot,null),t(C,no),t(C,nt),t(nt,so),g(e,Nt,c),g(e,R,c),t(R,ao),t(R,fe),t(fe,ro),t(R,io),g(e,Gt,c),g(e,Y,c),t(Y,lo),t(Y,ue),t(ue,co),t(Y,po),g(e,Xt,c),g(e,Ie,c),t(Ie,ho),g(e,xt,c),w(ge,e,c),g(e,zt,c),g(e,Se,c),t(Se,mo),g(e,Mt,c),g(e,I,c),t(I,K),t(K,st),w(_e,st,null),t(I,fo),t(I,at),t(at,uo),g(e,Ct,c),g(e,Q,c),t(Q,go),t(Q,rt),t(rt,_o),t(Q,To),g(e,Et,c),w(Te,e,c),g(e,Ft,c),g(e,S,c),t(S,Z),t(Z,it),w(be,it,null),t(S,bo),t(S,lt),t(lt,vo),g(e,qt,c),g(e,M,c),w(ve,M,null),t(M,ko),t(M,D),t(D,wo),t(D,De),t(De,Po),t(D,$o),t(D,ke),t(ke,yo),t(D,No),t(M,Go),t(M,B),t(B,Xo),t(B,Be),t(Be,xo),t(B,zo),t(B,We),t(We,Mo),t(B,Co),t(M,Eo),w(ee,M,null),g(e,jt,c),g(e,W,c),t(W,te),t(te,dt),w(we,dt,null),t(W,Fo),t(W,ct),t(ct,qo),g(e,At,c),g(e,N,c),w(Pe,N,null),t(N,jo),t(N,$e),t($e,Ao),t($e,pt),t(pt,Lo),t($e,Io),t(N,So),t(N,ht),t(ht,Do),t(N,Bo),w(oe,N,null),t(N,Wo),t(N,ye),t(ye,Oo),t(ye,mt),t(mt,Ho),t(ye,Vo),t(N,Uo),w(ne,N,null),t(N,Jo),t(N,Ne),t(Ne,Ro),t(Ne,Oe),t(Oe,Yo),t(Ne,Ko),g(e,Lt,c),g(e,O,c),t(O,se),t(se,ft),w(Ge,ft,null),t(O,Qo),t(O,ut),t(ut,Zo),g(e,It,c),g(e,j,c),w(Xe,j,null),t(j,en),t(j,xe),t(xe,tn),t(xe,ze),t(ze,on),t(xe,nn),t(j,sn),t(j,E),w(Me,E,null),t(E,an),t(E,H),t(H,rn),t(H,He),t(He,ln),t(H,dn),t(H,gt),t(gt,cn),t(H,pn),t(E,hn),w(ae,E,null),t(E,mn),w(re,E,null),g(e,St,c),g(e,V,c),t(V,ie),t(ie,_t),w(Ce,_t,null),t(V,fn),t(V,Tt),t(Tt,un),g(e,Dt,c),g(e,A,c),w(Ee,A,null),t(A,gn),t(A,U),t(U,_n),t(U,bt),t(bt,Tn),t(U,bn),t(U,Fe),t(Fe,vn),t(U,kn),t(A,wn),t(A,F),w(qe,F,null),t(F,Pn),t(F,J),t(J,$n),t(J,Ve),t(Ve,yn),t(J,Nn),t(J,vt),t(vt,Gn),t(J,Xn),t(F,xn),w(le,F,null),t(F,zn),w(de,F,null),Bt=!0},p(e,[c]){const je={};c&2&&(je.$$scope={dirty:c,ctx:e}),ee.$set(je);const kt={};c&2&&(kt.$$scope={dirty:c,ctx:e}),oe.$set(kt);const wt={};c&2&&(wt.$$scope={dirty:c,ctx:e}),ne.$set(wt);const Pt={};c&2&&(Pt.$$scope={dirty:c,ctx:e}),ae.$set(Pt);const Ae={};c&2&&(Ae.$$scope={dirty:c,ctx:e}),re.$set(Ae);const $t={};c&2&&($t.$$scope={dirty:c,ctx:e}),le.$set($t);const yt={};c&2&&(yt.$$scope={dirty:c,ctx:e}),de.$set(yt)},i(e){Bt||(P(r.$$.fragment,e),P(me.$$.fragment,e),P(ge.$$.fragment,e),P(_e.$$.fragment,e),P(Te.$$.fragment,e),P(be.$$.fragment,e),P(ve.$$.fragment,e),P(ee.$$.fragment,e),P(we.$$.fragment,e),P(Pe.$$.fragment,e),P(oe.$$.fragment,e),P(ne.$$.fragment,e),P(Ge.$$.fragment,e),P(Xe.$$.fragment,e),P(Me.$$.fragment,e),P(ae.$$.fragment,e),P(re.$$.fragment,e),P(Ce.$$.fragment,e),P(Ee.$$.fragment,e),P(qe.$$.fragment,e),P(le.$$.fragment,e),P(de.$$.fragment,e),Bt=!0)},o(e){$(r.$$.fragment,e),$(me.$$.fragment,e),$(ge.$$.fragment,e),$(_e.$$.fragment,e),$(Te.$$.fragment,e),$(be.$$.fragment,e),$(ve.$$.fragment,e),$(ee.$$.fragment,e),$(we.$$.fragment,e),$(Pe.$$.fragment,e),$(oe.$$.fragment,e),$(ne.$$.fragment,e),$(Ge.$$.fragment,e),$(Xe.$$.fragment,e),$(Me.$$.fragment,e),$(ae.$$.fragment,e),$(re.$$.fragment,e),$(Ce.$$.fragment,e),$(Ee.$$.fragment,e),$(qe.$$.fragment,e),$(le.$$.fragment,e),$(de.$$.fragment,e),Bt=!1},d(e){o(d),e&&o(T),e&&o(p),y(r),e&&o(z),e&&o(C),y(me),e&&o(Nt),e&&o(R),e&&o(Gt),e&&o(Y),e&&o(Xt),e&&o(Ie),e&&o(xt),y(ge,e),e&&o(zt),e&&o(Se),e&&o(Mt),e&&o(I),y(_e),e&&o(Ct),e&&o(Q),e&&o(Et),y(Te,e),e&&o(Ft),e&&o(S),y(be),e&&o(qt),e&&o(M),y(ve),y(ee),e&&o(jt),e&&o(W),y(we),e&&o(At),e&&o(N),y(Pe),y(oe),y(ne),e&&o(Lt),e&&o(O),y(Ge),e&&o(It),e&&o(j),y(Xe),y(Me),y(ae),y(re),e&&o(St),e&&o(V),y(Ce),e&&o(Dt),e&&o(A),y(Ee),y(qe),y(le),y(de)}}}const Gs={local:"gptneox",sections:[{local:"overview",sections:[{local:"generation",title:"Generation"}],title:"Overview"},{local:"transformers.GPTNeoXConfig",title:"GPTNeoXConfig"},{local:"transformers.GPTNeoXTokenizerFast",title:"GPTNeoXTokenizerFast"},{local:"transformers.GPTNeoXModel",title:"GPTNeoXModel"},{local:"transformers.GPTNeoXForCausalLM",title:"GPTNeoXForCausalLM"}],title:"GPT-NeoX"};function Xs(G){return Ts(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qs extends fs{constructor(d){super();us(this,d,Xs,Ns,gs,{})}}export{qs as default,Gs as metadata};
