import{S as fs,i as us,s as gs,e as n,k as m,w as b,t as i,M as _s,c as s,d as o,m as f,a,x as k,h as l,b as h,G as t,g,y as w,q as P,o as y,B as $,v as Ts,L as oo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Mn}from"../../chunks/Tip-hf-doc-builder.js";import{D as et}from"../../chunks/Docstring-hf-doc-builder.js";import{C as tt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ae}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as to}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function vs(G){let d,T;return d=new tt({props:{code:`from transformers import GPTNeoXModel, GPTNeoXConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){b(d.$$.fragment)},l(p){k(d.$$.fragment,p)},m(p,u){w(d,p,u),T=!0},p:oo,i(p){T||(P(d.$$.fragment,p),T=!0)},o(p){y(d.$$.fragment,p),T=!1},d(p){$(d,p)}}}function bs(G){let d,T,p,u,v;return u=new tt({props:{code:`from transformers import GPTNeoXTokenizerFast
tokenizer = GPTNeoXTokenizerFast.from_pretrained("gpt2")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = GPTNeoXTokenizerFast.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=n("p"),T=i("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p=m(),b(u.$$.fragment)},l(r){d=s(r,"P",{});var _=a(d);T=l(_,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),_.forEach(o),p=f(r),k(u.$$.fragment,r)},m(r,_){g(r,d,_),t(d,T),g(r,p,_),w(u,r,_),v=!0},p:oo,i(r){v||(P(u.$$.fragment,r),v=!0)},o(r){y(u.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(p),$(u,r)}}}function ks(G){let d,T,p,u,v,r,_,X;return{c(){d=n("p"),T=i("When used with "),p=n("code"),u=i("is_split_into_words=True"),v=i(", this tokenizer needs to be instantiated with "),r=n("code"),_=i("add_prefix_space=True"),X=i(".")},l(A){d=s(A,"P",{});var z=a(d);T=l(z,"When used with "),p=s(z,"CODE",{});var F=a(p);u=l(F,"is_split_into_words=True"),F.forEach(o),v=l(z,", this tokenizer needs to be instantiated with "),r=s(z,"CODE",{});var q=a(r);_=l(q,"add_prefix_space=True"),q.forEach(o),X=l(z,"."),z.forEach(o)},m(A,z){g(A,d,z),t(d,T),t(d,p),t(p,u),t(d,v),t(d,r),t(r,_),t(d,X)},d(A){A&&o(d)}}}function ws(G){let d,T,p,u,v;return{c(){d=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var _=a(d);T=l(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(_,"CODE",{});var X=a(p);u=l(X,"Module"),X.forEach(o),v=l(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(r,_){g(r,d,_),t(d,T),t(d,p),t(p,u),t(d,v)},d(r){r&&o(d)}}}function Ps(G){let d,T,p,u,v;return u=new tt({props:{code:`from transformers import GPTNeoXTokenizerFast, GPTNeoXModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),T=i("Example:"),p=m(),b(u.$$.fragment)},l(r){d=s(r,"P",{});var _=a(d);T=l(_,"Example:"),_.forEach(o),p=f(r),k(u.$$.fragment,r)},m(r,_){g(r,d,_),t(d,T),g(r,p,_),w(u,r,_),v=!0},p:oo,i(r){v||(P(u.$$.fragment,r),v=!0)},o(r){y(u.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(p),$(u,r)}}}function ys(G){let d,T,p,u,v;return{c(){d=n("p"),T=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var _=a(d);T=l(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(_,"CODE",{});var X=a(p);u=l(X,"Module"),X.forEach(o),v=l(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(r,_){g(r,d,_),t(d,T),t(d,p),t(p,u),t(d,v)},d(r){r&&o(d)}}}function $s(G){let d,T,p,u,v;return u=new tt({props:{code:`from transformers import GPTNeoXTokenizer, GPTNeoXForCausalLM, GPTNeoXConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),T=i("Example:"),p=m(),b(u.$$.fragment)},l(r){d=s(r,"P",{});var _=a(d);T=l(_,"Example:"),_.forEach(o),p=f(r),k(u.$$.fragment,r)},m(r,_){g(r,d,_),t(d,T),g(r,p,_),w(u,r,_),v=!0},p:oo,i(r){v||(P(u.$$.fragment,r),v=!0)},o(r){y(u.$$.fragment,r),v=!1},d(r){r&&o(d),r&&o(p),$(u,r)}}}function Ns(G){let d,T,p,u,v,r,_,X,A,z,F,q,ot,me,no,nt,so,Nt,R,ao,fe,ro,io,Gt,Y,lo,ue,co,po,Xt,Ie,ho,xt,ge,zt,Oe,mo,Mt,I,K,st,_e,fo,at,uo,Ft,Q,go,rt,_o,To,Ct,Te,Et,O,Z,it,ve,vo,lt,bo,qt,M,be,ko,S,wo,Se,Po,yo,ke,$o,No,Go,D,Xo,De,xo,zo,We,Mo,Fo,Co,ee,jt,W,te,dt,we,Eo,ct,qo,Lt,N,Pe,jo,ye,Lo,pt,Ao,Io,Oo,ht,So,Do,oe,Wo,$e,Bo,mt,Ho,Vo,Uo,ne,Jo,Ne,Ro,Be,Yo,Ko,At,B,se,ft,Ge,Qo,ut,Zo,It,j,Xe,en,xe,tn,ze,on,nn,sn,C,Me,an,H,rn,He,ln,dn,gt,cn,pn,hn,ae,mn,re,Ot,V,ie,_t,Fe,fn,Tt,un,St,L,Ce,gn,U,_n,vt,Tn,vn,Ee,bn,kn,wn,E,qe,Pn,J,yn,Ve,$n,Nn,bt,Gn,Xn,xn,le,zn,de,Dt;return r=new Ae({}),me=new Ae({}),ge=new tt({props:{code:'model = GPTNeoXForCausalLM.from_pretrained("EleutherAI/gpt-neox-20b").half().cuda()',highlighted:'model = GPTNeoXForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neox-20b&quot;</span>).half().cuda()'}}),_e=new Ae({}),Te=new tt({props:{code:`from transformers import GPTNeoXForCausalLM, GPTNeoXTokenizerFast

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
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`}}),ve=new Ae({}),be=new et({props:{name:"class transformers.GPTNeoXConfig",anchor:"transformers.GPTNeoXConfig",parameters:[{name:"vocab_size",val:" = 50432"},{name:"hidden_size",val:" = 6144"},{name:"num_hidden_layers",val:" = 44"},{name:"num_attention_heads",val:" = 64"},{name:"intermediate_size",val:" = 24576"},{name:"hidden_act",val:" = 'gelu'"},{name:"rotary_pct",val:" = 0.25"},{name:"rotary_emb_base",val:" = 10000"},{name:"max_position_embeddings",val:" = 2048"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"tie_word_embeddings",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50432) &#x2014;
Vocabulary size of the GPTNeoX model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.2/en/model_doc/gpt_neox#transformers.GPTNeoXModel">GPTNeoXModel</a>.`,name:"vocab_size"},{anchor:"transformers.GPTNeoXConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 6144) &#x2014;
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
Example &#x2014;`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/gpt_neox/configuration_gpt_neox.py#L29"}}),ee=new to({props:{anchor:"transformers.GPTNeoXConfig.example",$$slots:{default:[vs]},$$scope:{ctx:G}}}),we=new Ae({}),Pe=new et({props:{name:"class transformers.GPTNeoXTokenizerFast",anchor:"transformers.GPTNeoXTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/gpt_neox/tokenization_gpt_neox_fast.py#L44"}}),oe=new to({props:{anchor:"transformers.GPTNeoXTokenizerFast.example",$$slots:{default:[bs]},$$scope:{ctx:G}}}),ne=new Mn({props:{$$slots:{default:[ks]},$$scope:{ctx:G}}}),Ge=new Ae({}),Xe=new et({props:{name:"class transformers.GPTNeoXModel",anchor:"transformers.GPTNeoXModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/gpt_neox#transformers.GPTNeoXConfig">~GPTNeoXConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L406"}}),Me=new et({props:{name:"forward",anchor:"transformers.GPTNeoXModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPTNeoXModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTNeoXTokenizer</code>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTNeoXModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.GPTNeoXModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L424",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/gpt_neox#transformers.GPTNeoXConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ae=new Mn({props:{$$slots:{default:[ws]},$$scope:{ctx:G}}}),re=new to({props:{anchor:"transformers.GPTNeoXModel.forward.example",$$slots:{default:[Ps]},$$scope:{ctx:G}}}),Fe=new Ae({}),Ce=new et({props:{name:"class transformers.GPTNeoXForCausalLM",anchor:"transformers.GPTNeoXForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/gpt_neox#transformers.GPTNeoXConfig">~GPTNeoXConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L544"}}),qe=new et({props:{name:"forward",anchor:"transformers.GPTNeoXForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPTNeoXForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTNeoXTokenizer</code>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTNeoXForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L563",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/gpt_neox#transformers.GPTNeoXConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),le=new Mn({props:{$$slots:{default:[ys]},$$scope:{ctx:G}}}),de=new to({props:{anchor:"transformers.GPTNeoXForCausalLM.forward.example",$$slots:{default:[$s]},$$scope:{ctx:G}}}),{c(){d=n("meta"),T=m(),p=n("h1"),u=n("a"),v=n("span"),b(r.$$.fragment),_=m(),X=n("span"),A=i("GPT-NeoX"),z=m(),F=n("h2"),q=n("a"),ot=n("span"),b(me.$$.fragment),no=m(),nt=n("span"),so=i("Overview"),Nt=m(),R=n("p"),ao=i(`We introduce GPT-NeoX-20B, a 20 billion parameter autoregressive language model trained on the Pile, whose weights will
be made freely and openly available to the public through a permissive license. It is, to the best of our knowledge,
the largest dense autoregressive model that has publicly available weights at the time of submission. In this work,
we describe GPT-NeoX-20B\u2019s architecture and training and evaluate its performance on a range of language-understanding,
mathematics, and knowledge-based tasks. We find that GPT-NeoX-20B is a particularly powerful few-shot reasoner and
gains far more in performance when evaluated five-shot than similarly sized GPT-3 and FairSeq models. We open-source
the training and evaluation code, as well as the model weights, at `),fe=n("a"),ro=i("https://github.com/EleutherAI/gpt-neox"),io=i("."),Gt=m(),Y=n("p"),lo=i(`Development of the model was led by Sid Black, Stella Biderman and Eric Hallahan, and the model was trained with
generous the support of `),ue=n("a"),co=i("CoreWeave"),po=i("."),Xt=m(),Ie=n("p"),ho=i("GPT-NeoX-20B was trained with fp16, thus it is recommended to initialize the model as follows:"),xt=m(),b(ge.$$.fragment),zt=m(),Oe=n("p"),mo=i(`GPT-NeoX-20B also has a different tokenizer from the one used in GPT-J-6B and GPT-Neo. The new tokenizer allocates
additional tokens to whitespace characters, making the model more suitable for certain tasks like code generation.`),Mt=m(),I=n("h3"),K=n("a"),st=n("span"),b(_e.$$.fragment),fo=m(),at=n("span"),uo=i("Generation"),Ft=m(),Q=n("p"),go=i("The "),rt=n("code"),_o=i("generate()"),To=i(" method can be used to generate text using GPT Neo model."),Ct=m(),b(Te.$$.fragment),Et=m(),O=n("h2"),Z=n("a"),it=n("span"),b(ve.$$.fragment),vo=m(),lt=n("span"),bo=i("GPTNeoXConfig"),qt=m(),M=n("div"),b(be.$$.fragment),ko=m(),S=n("p"),wo=i("This is the configuration class to store the configuration of a "),Se=n("a"),Po=i("GPTNeoXModel"),yo=i(`. It is used to instantiate an
GPTNeoX model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GPTNeoX
`),ke=n("a"),$o=i("EleutherAI/gpt-neox-20b"),No=i(" architecture."),Go=m(),D=n("p"),Xo=i("Configuration objects inherit from "),De=n("a"),xo=i("PretrainedConfig"),zo=i(` and can be used to control the model outputs. Read the
documentation from `),We=n("a"),Mo=i("PretrainedConfig"),Fo=i(" for more information."),Co=m(),b(ee.$$.fragment),jt=m(),W=n("h2"),te=n("a"),dt=n("span"),b(we.$$.fragment),Eo=m(),ct=n("span"),qo=i("GPTNeoXTokenizerFast"),Lt=m(),N=n("div"),b(Pe.$$.fragment),jo=m(),ye=n("p"),Lo=i("Construct a \u201Cfast\u201D GPT-NeoX-20B tokenizer (backed by HuggingFace\u2019s "),pt=n("em"),Ao=i("tokenizers"),Io=i(` library). Based on byte-level
Byte-Pair-Encoding.`),Oo=m(),ht=n("p"),So=i("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Do=m(),b(oe.$$.fragment),Wo=m(),$e=n("p"),Bo=i("You can get around that behavior by passing "),mt=n("code"),Ho=i("add_prefix_space=True"),Vo=i(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Uo=m(),b(ne.$$.fragment),Jo=m(),Ne=n("p"),Ro=i("This tokenizer inherits from "),Be=n("a"),Yo=i("PreTrainedTokenizerFast"),Ko=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),At=m(),B=n("h2"),se=n("a"),ft=n("span"),b(Ge.$$.fragment),Qo=m(),ut=n("span"),Zo=i("GPTNeoXModel"),It=m(),j=n("div"),b(Xe.$$.fragment),en=m(),xe=n("p"),tn=i(`The bare GPTNeoX Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ze=n("a"),on=i("torch.nn.Module"),nn=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),sn=m(),C=n("div"),b(Me.$$.fragment),an=m(),H=n("p"),rn=i("The "),He=n("a"),ln=i("GPTNeoXModel"),dn=i(" forward method, overrides the "),gt=n("code"),cn=i("__call__"),pn=i(" special method."),hn=m(),b(ae.$$.fragment),mn=m(),b(re.$$.fragment),Ot=m(),V=n("h2"),ie=n("a"),_t=n("span"),b(Fe.$$.fragment),fn=m(),Tt=n("span"),un=i("GPTNeoXForCausalLM"),St=m(),L=n("div"),b(Ce.$$.fragment),gn=m(),U=n("p"),_n=i("GPTNeoX Model with a "),vt=n("code"),Tn=i("language modeling"),vn=i(` head on top for CLM fine-tuning.
This model is a PyTorch `),Ee=n("a"),bn=i("torch.nn.Module"),kn=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wn=m(),E=n("div"),b(qe.$$.fragment),Pn=m(),J=n("p"),yn=i("The "),Ve=n("a"),$n=i("GPTNeoXForCausalLM"),Nn=i(" forward method, overrides the "),bt=n("code"),Gn=i("__call__"),Xn=i(" special method."),xn=m(),b(le.$$.fragment),zn=m(),b(de.$$.fragment),this.h()},l(e){const c=_s('[data-svelte="svelte-1phssyn"]',document.head);d=s(c,"META",{name:!0,content:!0}),c.forEach(o),T=f(e),p=s(e,"H1",{class:!0});var je=a(p);u=s(je,"A",{id:!0,class:!0,href:!0});var kt=a(u);v=s(kt,"SPAN",{});var wt=a(v);k(r.$$.fragment,wt),wt.forEach(o),kt.forEach(o),_=f(je),X=s(je,"SPAN",{});var Pt=a(X);A=l(Pt,"GPT-NeoX"),Pt.forEach(o),je.forEach(o),z=f(e),F=s(e,"H2",{class:!0});var Le=a(F);q=s(Le,"A",{id:!0,class:!0,href:!0});var yt=a(q);ot=s(yt,"SPAN",{});var $t=a(ot);k(me.$$.fragment,$t),$t.forEach(o),yt.forEach(o),no=f(Le),nt=s(Le,"SPAN",{});var Fn=a(nt);so=l(Fn,"Overview"),Fn.forEach(o),Le.forEach(o),Nt=f(e),R=s(e,"P",{});var Wt=a(R);ao=l(Wt,`We introduce GPT-NeoX-20B, a 20 billion parameter autoregressive language model trained on the Pile, whose weights will
be made freely and openly available to the public through a permissive license. It is, to the best of our knowledge,
the largest dense autoregressive model that has publicly available weights at the time of submission. In this work,
we describe GPT-NeoX-20B\u2019s architecture and training and evaluate its performance on a range of language-understanding,
mathematics, and knowledge-based tasks. We find that GPT-NeoX-20B is a particularly powerful few-shot reasoner and
gains far more in performance when evaluated five-shot than similarly sized GPT-3 and FairSeq models. We open-source
the training and evaluation code, as well as the model weights, at `),fe=s(Wt,"A",{href:!0,rel:!0});var Cn=a(fe);ro=l(Cn,"https://github.com/EleutherAI/gpt-neox"),Cn.forEach(o),io=l(Wt,"."),Wt.forEach(o),Gt=f(e),Y=s(e,"P",{});var Bt=a(Y);lo=l(Bt,`Development of the model was led by Sid Black, Stella Biderman and Eric Hallahan, and the model was trained with
generous the support of `),ue=s(Bt,"A",{href:!0,rel:!0});var En=a(ue);co=l(En,"CoreWeave"),En.forEach(o),po=l(Bt,"."),Bt.forEach(o),Xt=f(e),Ie=s(e,"P",{});var qn=a(Ie);ho=l(qn,"GPT-NeoX-20B was trained with fp16, thus it is recommended to initialize the model as follows:"),qn.forEach(o),xt=f(e),k(ge.$$.fragment,e),zt=f(e),Oe=s(e,"P",{});var jn=a(Oe);mo=l(jn,`GPT-NeoX-20B also has a different tokenizer from the one used in GPT-J-6B and GPT-Neo. The new tokenizer allocates
additional tokens to whitespace characters, making the model more suitable for certain tasks like code generation.`),jn.forEach(o),Mt=f(e),I=s(e,"H3",{class:!0});var Ht=a(I);K=s(Ht,"A",{id:!0,class:!0,href:!0});var Ln=a(K);st=s(Ln,"SPAN",{});var An=a(st);k(_e.$$.fragment,An),An.forEach(o),Ln.forEach(o),fo=f(Ht),at=s(Ht,"SPAN",{});var In=a(at);uo=l(In,"Generation"),In.forEach(o),Ht.forEach(o),Ft=f(e),Q=s(e,"P",{});var Vt=a(Q);go=l(Vt,"The "),rt=s(Vt,"CODE",{});var On=a(rt);_o=l(On,"generate()"),On.forEach(o),To=l(Vt," method can be used to generate text using GPT Neo model."),Vt.forEach(o),Ct=f(e),k(Te.$$.fragment,e),Et=f(e),O=s(e,"H2",{class:!0});var Ut=a(O);Z=s(Ut,"A",{id:!0,class:!0,href:!0});var Sn=a(Z);it=s(Sn,"SPAN",{});var Dn=a(it);k(ve.$$.fragment,Dn),Dn.forEach(o),Sn.forEach(o),vo=f(Ut),lt=s(Ut,"SPAN",{});var Wn=a(lt);bo=l(Wn,"GPTNeoXConfig"),Wn.forEach(o),Ut.forEach(o),qt=f(e),M=s(e,"DIV",{class:!0});var ce=a(M);k(be.$$.fragment,ce),ko=f(ce),S=s(ce,"P",{});var Ue=a(S);wo=l(Ue,"This is the configuration class to store the configuration of a "),Se=s(Ue,"A",{href:!0});var Bn=a(Se);Po=l(Bn,"GPTNeoXModel"),Bn.forEach(o),yo=l(Ue,`. It is used to instantiate an
GPTNeoX model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GPTNeoX
`),ke=s(Ue,"A",{href:!0,rel:!0});var Hn=a(ke);$o=l(Hn,"EleutherAI/gpt-neox-20b"),Hn.forEach(o),No=l(Ue," architecture."),Ue.forEach(o),Go=f(ce),D=s(ce,"P",{});var Je=a(D);Xo=l(Je,"Configuration objects inherit from "),De=s(Je,"A",{href:!0});var Vn=a(De);xo=l(Vn,"PretrainedConfig"),Vn.forEach(o),zo=l(Je,` and can be used to control the model outputs. Read the
documentation from `),We=s(Je,"A",{href:!0});var Un=a(We);Mo=l(Un,"PretrainedConfig"),Un.forEach(o),Fo=l(Je," for more information."),Je.forEach(o),Co=f(ce),k(ee.$$.fragment,ce),ce.forEach(o),jt=f(e),W=s(e,"H2",{class:!0});var Jt=a(W);te=s(Jt,"A",{id:!0,class:!0,href:!0});var Jn=a(te);dt=s(Jn,"SPAN",{});var Rn=a(dt);k(we.$$.fragment,Rn),Rn.forEach(o),Jn.forEach(o),Eo=f(Jt),ct=s(Jt,"SPAN",{});var Yn=a(ct);qo=l(Yn,"GPTNeoXTokenizerFast"),Yn.forEach(o),Jt.forEach(o),Lt=f(e),N=s(e,"DIV",{class:!0});var x=a(N);k(Pe.$$.fragment,x),jo=f(x),ye=s(x,"P",{});var Rt=a(ye);Lo=l(Rt,"Construct a \u201Cfast\u201D GPT-NeoX-20B tokenizer (backed by HuggingFace\u2019s "),pt=s(Rt,"EM",{});var Kn=a(pt);Ao=l(Kn,"tokenizers"),Kn.forEach(o),Io=l(Rt,` library). Based on byte-level
Byte-Pair-Encoding.`),Rt.forEach(o),Oo=f(x),ht=s(x,"P",{});var Qn=a(ht);So=l(Qn,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Qn.forEach(o),Do=f(x),k(oe.$$.fragment,x),Wo=f(x),$e=s(x,"P",{});var Yt=a($e);Bo=l(Yt,"You can get around that behavior by passing "),mt=s(Yt,"CODE",{});var Zn=a(mt);Ho=l(Zn,"add_prefix_space=True"),Zn.forEach(o),Vo=l(Yt,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Yt.forEach(o),Uo=f(x),k(ne.$$.fragment,x),Jo=f(x),Ne=s(x,"P",{});var Kt=a(Ne);Ro=l(Kt,"This tokenizer inherits from "),Be=s(Kt,"A",{href:!0});var es=a(Be);Yo=l(es,"PreTrainedTokenizerFast"),es.forEach(o),Ko=l(Kt,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Kt.forEach(o),x.forEach(o),At=f(e),B=s(e,"H2",{class:!0});var Qt=a(B);se=s(Qt,"A",{id:!0,class:!0,href:!0});var ts=a(se);ft=s(ts,"SPAN",{});var os=a(ft);k(Ge.$$.fragment,os),os.forEach(o),ts.forEach(o),Qo=f(Qt),ut=s(Qt,"SPAN",{});var ns=a(ut);Zo=l(ns,"GPTNeoXModel"),ns.forEach(o),Qt.forEach(o),It=f(e),j=s(e,"DIV",{class:!0});var Re=a(j);k(Xe.$$.fragment,Re),en=f(Re),xe=s(Re,"P",{});var Zt=a(xe);tn=l(Zt,`The bare GPTNeoX Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ze=s(Zt,"A",{href:!0,rel:!0});var ss=a(ze);on=l(ss,"torch.nn.Module"),ss.forEach(o),nn=l(Zt,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zt.forEach(o),sn=f(Re),C=s(Re,"DIV",{class:!0});var pe=a(C);k(Me.$$.fragment,pe),an=f(pe),H=s(pe,"P",{});var Ye=a(H);rn=l(Ye,"The "),He=s(Ye,"A",{href:!0});var as=a(He);ln=l(as,"GPTNeoXModel"),as.forEach(o),dn=l(Ye," forward method, overrides the "),gt=s(Ye,"CODE",{});var rs=a(gt);cn=l(rs,"__call__"),rs.forEach(o),pn=l(Ye," special method."),Ye.forEach(o),hn=f(pe),k(ae.$$.fragment,pe),mn=f(pe),k(re.$$.fragment,pe),pe.forEach(o),Re.forEach(o),Ot=f(e),V=s(e,"H2",{class:!0});var eo=a(V);ie=s(eo,"A",{id:!0,class:!0,href:!0});var is=a(ie);_t=s(is,"SPAN",{});var ls=a(_t);k(Fe.$$.fragment,ls),ls.forEach(o),is.forEach(o),fn=f(eo),Tt=s(eo,"SPAN",{});var ds=a(Tt);un=l(ds,"GPTNeoXForCausalLM"),ds.forEach(o),eo.forEach(o),St=f(e),L=s(e,"DIV",{class:!0});var Ke=a(L);k(Ce.$$.fragment,Ke),gn=f(Ke),U=s(Ke,"P",{});var Qe=a(U);_n=l(Qe,"GPTNeoX Model with a "),vt=s(Qe,"CODE",{});var cs=a(vt);Tn=l(cs,"language modeling"),cs.forEach(o),vn=l(Qe,` head on top for CLM fine-tuning.
This model is a PyTorch `),Ee=s(Qe,"A",{href:!0,rel:!0});var ps=a(Ee);bn=l(ps,"torch.nn.Module"),ps.forEach(o),kn=l(Qe,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qe.forEach(o),wn=f(Ke),E=s(Ke,"DIV",{class:!0});var he=a(E);k(qe.$$.fragment,he),Pn=f(he),J=s(he,"P",{});var Ze=a(J);yn=l(Ze,"The "),Ve=s(Ze,"A",{href:!0});var hs=a(Ve);$n=l(hs,"GPTNeoXForCausalLM"),hs.forEach(o),Nn=l(Ze," forward method, overrides the "),bt=s(Ze,"CODE",{});var ms=a(bt);Gn=l(ms,"__call__"),ms.forEach(o),Xn=l(Ze," special method."),Ze.forEach(o),xn=f(he),k(le.$$.fragment,he),zn=f(he),k(de.$$.fragment,he),he.forEach(o),Ke.forEach(o),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(Gs)),h(u,"id","gptneox"),h(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(u,"href","#gptneox"),h(p,"class","relative group"),h(q,"id","overview"),h(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(q,"href","#overview"),h(F,"class","relative group"),h(fe,"href","https://github.com/EleutherAI/gpt-neox"),h(fe,"rel","nofollow"),h(ue,"href","https://www.coreweave.com/"),h(ue,"rel","nofollow"),h(K,"id","generation"),h(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(K,"href","#generation"),h(I,"class","relative group"),h(Z,"id","transformers.GPTNeoXConfig"),h(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Z,"href","#transformers.GPTNeoXConfig"),h(O,"class","relative group"),h(Se,"href","/docs/transformers/v4.21.2/en/model_doc/gpt_neox#transformers.GPTNeoXModel"),h(ke,"href","https://huggingface.co/EleutherAI/gpt-neox-20b"),h(ke,"rel","nofollow"),h(De,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),h(We,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),h(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(te,"id","transformers.GPTNeoXTokenizerFast"),h(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(te,"href","#transformers.GPTNeoXTokenizerFast"),h(W,"class","relative group"),h(Be,"href","/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(se,"id","transformers.GPTNeoXModel"),h(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(se,"href","#transformers.GPTNeoXModel"),h(B,"class","relative group"),h(ze,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(ze,"rel","nofollow"),h(He,"href","/docs/transformers/v4.21.2/en/model_doc/gpt_neox#transformers.GPTNeoXModel"),h(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ie,"id","transformers.GPTNeoXForCausalLM"),h(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ie,"href","#transformers.GPTNeoXForCausalLM"),h(V,"class","relative group"),h(Ee,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ee,"rel","nofollow"),h(Ve,"href","/docs/transformers/v4.21.2/en/model_doc/gpt_neox#transformers.GPTNeoXForCausalLM"),h(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,c){t(document.head,d),g(e,T,c),g(e,p,c),t(p,u),t(u,v),w(r,v,null),t(p,_),t(p,X),t(X,A),g(e,z,c),g(e,F,c),t(F,q),t(q,ot),w(me,ot,null),t(F,no),t(F,nt),t(nt,so),g(e,Nt,c),g(e,R,c),t(R,ao),t(R,fe),t(fe,ro),t(R,io),g(e,Gt,c),g(e,Y,c),t(Y,lo),t(Y,ue),t(ue,co),t(Y,po),g(e,Xt,c),g(e,Ie,c),t(Ie,ho),g(e,xt,c),w(ge,e,c),g(e,zt,c),g(e,Oe,c),t(Oe,mo),g(e,Mt,c),g(e,I,c),t(I,K),t(K,st),w(_e,st,null),t(I,fo),t(I,at),t(at,uo),g(e,Ft,c),g(e,Q,c),t(Q,go),t(Q,rt),t(rt,_o),t(Q,To),g(e,Ct,c),w(Te,e,c),g(e,Et,c),g(e,O,c),t(O,Z),t(Z,it),w(ve,it,null),t(O,vo),t(O,lt),t(lt,bo),g(e,qt,c),g(e,M,c),w(be,M,null),t(M,ko),t(M,S),t(S,wo),t(S,Se),t(Se,Po),t(S,yo),t(S,ke),t(ke,$o),t(S,No),t(M,Go),t(M,D),t(D,Xo),t(D,De),t(De,xo),t(D,zo),t(D,We),t(We,Mo),t(D,Fo),t(M,Co),w(ee,M,null),g(e,jt,c),g(e,W,c),t(W,te),t(te,dt),w(we,dt,null),t(W,Eo),t(W,ct),t(ct,qo),g(e,Lt,c),g(e,N,c),w(Pe,N,null),t(N,jo),t(N,ye),t(ye,Lo),t(ye,pt),t(pt,Ao),t(ye,Io),t(N,Oo),t(N,ht),t(ht,So),t(N,Do),w(oe,N,null),t(N,Wo),t(N,$e),t($e,Bo),t($e,mt),t(mt,Ho),t($e,Vo),t(N,Uo),w(ne,N,null),t(N,Jo),t(N,Ne),t(Ne,Ro),t(Ne,Be),t(Be,Yo),t(Ne,Ko),g(e,At,c),g(e,B,c),t(B,se),t(se,ft),w(Ge,ft,null),t(B,Qo),t(B,ut),t(ut,Zo),g(e,It,c),g(e,j,c),w(Xe,j,null),t(j,en),t(j,xe),t(xe,tn),t(xe,ze),t(ze,on),t(xe,nn),t(j,sn),t(j,C),w(Me,C,null),t(C,an),t(C,H),t(H,rn),t(H,He),t(He,ln),t(H,dn),t(H,gt),t(gt,cn),t(H,pn),t(C,hn),w(ae,C,null),t(C,mn),w(re,C,null),g(e,Ot,c),g(e,V,c),t(V,ie),t(ie,_t),w(Fe,_t,null),t(V,fn),t(V,Tt),t(Tt,un),g(e,St,c),g(e,L,c),w(Ce,L,null),t(L,gn),t(L,U),t(U,_n),t(U,vt),t(vt,Tn),t(U,vn),t(U,Ee),t(Ee,bn),t(U,kn),t(L,wn),t(L,E),w(qe,E,null),t(E,Pn),t(E,J),t(J,yn),t(J,Ve),t(Ve,$n),t(J,Nn),t(J,bt),t(bt,Gn),t(J,Xn),t(E,xn),w(le,E,null),t(E,zn),w(de,E,null),Dt=!0},p(e,[c]){const je={};c&2&&(je.$$scope={dirty:c,ctx:e}),ee.$set(je);const kt={};c&2&&(kt.$$scope={dirty:c,ctx:e}),oe.$set(kt);const wt={};c&2&&(wt.$$scope={dirty:c,ctx:e}),ne.$set(wt);const Pt={};c&2&&(Pt.$$scope={dirty:c,ctx:e}),ae.$set(Pt);const Le={};c&2&&(Le.$$scope={dirty:c,ctx:e}),re.$set(Le);const yt={};c&2&&(yt.$$scope={dirty:c,ctx:e}),le.$set(yt);const $t={};c&2&&($t.$$scope={dirty:c,ctx:e}),de.$set($t)},i(e){Dt||(P(r.$$.fragment,e),P(me.$$.fragment,e),P(ge.$$.fragment,e),P(_e.$$.fragment,e),P(Te.$$.fragment,e),P(ve.$$.fragment,e),P(be.$$.fragment,e),P(ee.$$.fragment,e),P(we.$$.fragment,e),P(Pe.$$.fragment,e),P(oe.$$.fragment,e),P(ne.$$.fragment,e),P(Ge.$$.fragment,e),P(Xe.$$.fragment,e),P(Me.$$.fragment,e),P(ae.$$.fragment,e),P(re.$$.fragment,e),P(Fe.$$.fragment,e),P(Ce.$$.fragment,e),P(qe.$$.fragment,e),P(le.$$.fragment,e),P(de.$$.fragment,e),Dt=!0)},o(e){y(r.$$.fragment,e),y(me.$$.fragment,e),y(ge.$$.fragment,e),y(_e.$$.fragment,e),y(Te.$$.fragment,e),y(ve.$$.fragment,e),y(be.$$.fragment,e),y(ee.$$.fragment,e),y(we.$$.fragment,e),y(Pe.$$.fragment,e),y(oe.$$.fragment,e),y(ne.$$.fragment,e),y(Ge.$$.fragment,e),y(Xe.$$.fragment,e),y(Me.$$.fragment,e),y(ae.$$.fragment,e),y(re.$$.fragment,e),y(Fe.$$.fragment,e),y(Ce.$$.fragment,e),y(qe.$$.fragment,e),y(le.$$.fragment,e),y(de.$$.fragment,e),Dt=!1},d(e){o(d),e&&o(T),e&&o(p),$(r),e&&o(z),e&&o(F),$(me),e&&o(Nt),e&&o(R),e&&o(Gt),e&&o(Y),e&&o(Xt),e&&o(Ie),e&&o(xt),$(ge,e),e&&o(zt),e&&o(Oe),e&&o(Mt),e&&o(I),$(_e),e&&o(Ft),e&&o(Q),e&&o(Ct),$(Te,e),e&&o(Et),e&&o(O),$(ve),e&&o(qt),e&&o(M),$(be),$(ee),e&&o(jt),e&&o(W),$(we),e&&o(Lt),e&&o(N),$(Pe),$(oe),$(ne),e&&o(At),e&&o(B),$(Ge),e&&o(It),e&&o(j),$(Xe),$(Me),$(ae),$(re),e&&o(Ot),e&&o(V),$(Fe),e&&o(St),e&&o(L),$(Ce),$(qe),$(le),$(de)}}}const Gs={local:"gptneox",sections:[{local:"overview",sections:[{local:"generation",title:"Generation"}],title:"Overview"},{local:"transformers.GPTNeoXConfig",title:"GPTNeoXConfig"},{local:"transformers.GPTNeoXTokenizerFast",title:"GPTNeoXTokenizerFast"},{local:"transformers.GPTNeoXModel",title:"GPTNeoXModel"},{local:"transformers.GPTNeoXForCausalLM",title:"GPTNeoXForCausalLM"}],title:"GPT-NeoX"};function Xs(G){return Ts(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qs extends fs{constructor(d){super();us(this,d,Xs,Ns,gs,{})}}export{qs as default,Gs as metadata};
