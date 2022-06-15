import{S as oi,i as ni,s as ai,e as n,k as u,w as b,t as i,M as si,c as a,d as t,m as h,a as s,x as k,h as l,b as p,G as e,g as m,y as w,q as P,o as $,B as O,v as ri,L as vo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Zn}from"../../chunks/Tip-hf-doc-builder.js";import{D as ue}from"../../chunks/Docstring-hf-doc-builder.js";import{C as yo}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as et}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as To}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ii(C){let d,y,_,c,v;return c=new yo({props:{code:`from transformers import OPTModel, OPTConfig

# Initializing a OPT facebook/opt-large style configuration
configuration = OPTConfig()

# Initializing a model from the facebook/opt-large style configuration
model = OPTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OPTModel, OPTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a OPT facebook/opt-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = OPTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/opt-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),y=i("Example:"),_=u(),b(c.$$.fragment)},l(r){d=a(r,"P",{});var f=s(d);y=l(f,"Example:"),f.forEach(t),_=h(r),k(c.$$.fragment,r)},m(r,f){m(r,d,f),e(d,y),m(r,_,f),w(c,r,f),v=!0},p:vo,i(r){v||(P(c.$$.fragment,r),v=!0)},o(r){$(c.$$.fragment,r),v=!1},d(r){r&&t(d),r&&t(_),O(c,r)}}}function li(C){let d,y,_,c,v;return{c(){d=n("p"),y=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),c=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=a(r,"P",{});var f=s(d);y=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(f,"CODE",{});var q=s(_);c=l(q,"Module"),q.forEach(t),v=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(r,f){m(r,d,f),e(d,y),e(d,_),e(_,c),e(d,v)},d(r){r&&t(d)}}}function di(C){let d,y,_,c,v;return c=new yo({props:{code:`from transformers import GPT2Tokenizer, OPTModel
import torch

tokenizer = GPT2Tokenizer.from_pretrained("facebook/opt-350m")
model = OPTModel.from_pretrained("facebook/opt-350m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, OPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTModel.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),y=i("Example:"),_=u(),b(c.$$.fragment)},l(r){d=a(r,"P",{});var f=s(d);y=l(f,"Example:"),f.forEach(t),_=h(r),k(c.$$.fragment,r)},m(r,f){m(r,d,f),e(d,y),m(r,_,f),w(c,r,f),v=!0},p:vo,i(r){v||(P(c.$$.fragment,r),v=!0)},o(r){$(c.$$.fragment,r),v=!1},d(r){r&&t(d),r&&t(_),O(c,r)}}}function ci(C){let d,y,_,c,v;return c=new yo({props:{code:`from transformers import GPT2Tokenizer, OPTForCausalLM

model = OPTForCausalLM.from_pretrained("facebook/opt-350m")
tokenizer = GPT2Tokenizer.from_pretrained("facebook/opt-350m")

prompt = "Hey, are you consciours? Can you talk to me?"
inputs = tokenizer(prompt, return_tensors="pt")

# Generate
generate_ids = model.generate(inputs.input_ids, max_length=30)
tokenizer.batch_decode(generate_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, OPTForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;Hey, are you consciours? Can you talk to me?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generate_ids = model.generate(inputs.input_ids, max_length=<span class="hljs-number">30</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generate_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;Hey, are you consciours? Can you talk to me?\\nI&#x27;m not consciours, but I can talk to you.&quot;</span>`}}),{c(){d=n("p"),y=i("Example:"),_=u(),b(c.$$.fragment)},l(r){d=a(r,"P",{});var f=s(d);y=l(f,"Example:"),f.forEach(t),_=h(r),k(c.$$.fragment,r)},m(r,f){m(r,d,f),e(d,y),m(r,_,f),w(c,r,f),v=!0},p:vo,i(r){v||(P(c.$$.fragment,r),v=!0)},o(r){$(c.$$.fragment,r),v=!1},d(r){r&&t(d),r&&t(_),O(c,r)}}}function pi(C){let d,y,_,c,v,r,f,q,ve,oe,F,V,D,J,ye,S,be,he,A,W,Z,re,z,L,ne,X,me,ae,G,ke,fe,j,we,R,K,Y,Q,ie,Pe,H,$e,E,Oe;return{c(){d=n("p"),y=i("TF 2.0 models accepts two formats as inputs:"),_=u(),c=n("ul"),v=n("li"),r=i("having all inputs as keyword arguments (like PyTorch models), or"),f=u(),q=n("li"),ve=i("having all inputs as a list, tuple or dict in the first positional arguments."),oe=u(),F=n("p"),V=i("This second option is useful when using "),D=n("code"),J=i("tf.keras.Model.fit"),ye=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),be=i("model(inputs)"),he=i("."),A=u(),W=n("p"),Z=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),re=u(),z=n("ul"),L=n("li"),ne=i("a single Tensor with "),X=n("code"),me=i("input_ids"),ae=i(" only and nothing else: "),G=n("code"),ke=i("model(input_ids)"),fe=u(),j=n("li"),we=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=n("code"),K=i("model([input_ids, attention_mask])"),Y=i(" or "),Q=n("code"),ie=i("model([input_ids, attention_mask, token_type_ids])"),Pe=u(),H=n("li"),$e=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),E=n("code"),Oe=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var M=s(d);y=l(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),_=h(T),c=a(T,"UL",{});var le=s(c);v=a(le,"LI",{});var Fe=s(v);r=l(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=h(le),q=a(le,"LI",{});var Le=s(q);ve=l(Le,"having all inputs as a list, tuple or dict in the first positional arguments."),Le.forEach(t),le.forEach(t),oe=h(T),F=a(T,"P",{});var U=s(F);V=l(U,"This second option is useful when using "),D=a(U,"CODE",{});var Me=s(D);J=l(Me,"tf.keras.Model.fit"),Me.forEach(t),ye=l(U,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(U,"CODE",{});var Ne=s(S);be=l(Ne,"model(inputs)"),Ne.forEach(t),he=l(U,"."),U.forEach(t),A=h(T),W=a(T,"P",{});var Ie=s(W);Z=l(Ie,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ie.forEach(t),re=h(T),z=a(T,"UL",{});var N=s(z);L=a(N,"LI",{});var ee=s(L);ne=l(ee,"a single Tensor with "),X=a(ee,"CODE",{});var Ae=s(X);me=l(Ae,"input_ids"),Ae.forEach(t),ae=l(ee," only and nothing else: "),G=a(ee,"CODE",{});var Ee=s(G);ke=l(Ee,"model(input_ids)"),Ee.forEach(t),ee.forEach(t),fe=h(N),j=a(N,"LI",{});var x=s(j);we=l(x,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(x,"CODE",{});var De=s(R);K=l(De,"model([input_ids, attention_mask])"),De.forEach(t),Y=l(x," or "),Q=a(x,"CODE",{});var de=s(Q);ie=l(de,"model([input_ids, attention_mask, token_type_ids])"),de.forEach(t),x.forEach(t),Pe=h(N),H=a(N,"LI",{});var xe=s(H);$e=l(xe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),E=a(xe,"CODE",{});var Se=s(E);Oe=l(Se,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Se.forEach(t),xe.forEach(t),N.forEach(t)},m(T,M){m(T,d,M),e(d,y),m(T,_,M),m(T,c,M),e(c,v),e(v,r),e(c,f),e(c,q),e(q,ve),m(T,oe,M),m(T,F,M),e(F,V),e(F,D),e(D,J),e(F,ye),e(F,S),e(S,be),e(F,he),m(T,A,M),m(T,W,M),e(W,Z),m(T,re,M),m(T,z,M),e(z,L),e(L,ne),e(L,X),e(X,me),e(L,ae),e(L,G),e(G,ke),e(z,fe),e(z,j),e(j,we),e(j,R),e(R,K),e(j,Y),e(j,Q),e(Q,ie),e(z,Pe),e(z,H),e(H,$e),e(H,E),e(E,Oe)},d(T){T&&t(d),T&&t(_),T&&t(c),T&&t(oe),T&&t(F),T&&t(A),T&&t(W),T&&t(re),T&&t(z)}}}function ui(C){let d,y,_,c,v;return{c(){d=n("p"),y=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),c=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=a(r,"P",{});var f=s(d);y=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(f,"CODE",{});var q=s(_);c=l(q,"Module"),q.forEach(t),v=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(r,f){m(r,d,f),e(d,y),e(d,_),e(_,c),e(d,v)},d(r){r&&t(d)}}}function hi(C){let d,y,_,c,v;return c=new yo({props:{code:`from transformers import GPT2Tokenizer, TFOPTModel
import tensorflow as tf

tokenizer = GPT2Tokenizer.from_pretrained("facebook/opt-350m")
model = TFOPTModel.from_pretrained("facebook/opt-350m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, TFOPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOPTModel.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),y=i("Example:"),_=u(),b(c.$$.fragment)},l(r){d=a(r,"P",{});var f=s(d);y=l(f,"Example:"),f.forEach(t),_=h(r),k(c.$$.fragment,r)},m(r,f){m(r,d,f),e(d,y),m(r,_,f),w(c,r,f),v=!0},p:vo,i(r){v||(P(c.$$.fragment,r),v=!0)},o(r){$(c.$$.fragment,r),v=!1},d(r){r&&t(d),r&&t(_),O(c,r)}}}function mi(C){let d,y,_,c,v,r,f,q,ve,oe,F,V,D,J,ye,S,be,he,A,W,Z,re,z,L,ne,X,me,ae,G,ke,fe,j,we,R,K,Y,Q,ie,Pe,H,$e,E,Oe;return{c(){d=n("p"),y=i("TF 2.0 models accepts two formats as inputs:"),_=u(),c=n("ul"),v=n("li"),r=i("having all inputs as keyword arguments (like PyTorch models), or"),f=u(),q=n("li"),ve=i("having all inputs as a list, tuple or dict in the first positional arguments."),oe=u(),F=n("p"),V=i("This second option is useful when using "),D=n("code"),J=i("tf.keras.Model.fit"),ye=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),be=i("model(inputs)"),he=i("."),A=u(),W=n("p"),Z=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),re=u(),z=n("ul"),L=n("li"),ne=i("a single Tensor with "),X=n("code"),me=i("input_ids"),ae=i(" only and nothing else: "),G=n("code"),ke=i("model(input_ids)"),fe=u(),j=n("li"),we=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=n("code"),K=i("model([input_ids, attention_mask])"),Y=i(" or "),Q=n("code"),ie=i("model([input_ids, attention_mask, token_type_ids])"),Pe=u(),H=n("li"),$e=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),E=n("code"),Oe=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var M=s(d);y=l(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),_=h(T),c=a(T,"UL",{});var le=s(c);v=a(le,"LI",{});var Fe=s(v);r=l(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=h(le),q=a(le,"LI",{});var Le=s(q);ve=l(Le,"having all inputs as a list, tuple or dict in the first positional arguments."),Le.forEach(t),le.forEach(t),oe=h(T),F=a(T,"P",{});var U=s(F);V=l(U,"This second option is useful when using "),D=a(U,"CODE",{});var Me=s(D);J=l(Me,"tf.keras.Model.fit"),Me.forEach(t),ye=l(U,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(U,"CODE",{});var Ne=s(S);be=l(Ne,"model(inputs)"),Ne.forEach(t),he=l(U,"."),U.forEach(t),A=h(T),W=a(T,"P",{});var Ie=s(W);Z=l(Ie,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ie.forEach(t),re=h(T),z=a(T,"UL",{});var N=s(z);L=a(N,"LI",{});var ee=s(L);ne=l(ee,"a single Tensor with "),X=a(ee,"CODE",{});var Ae=s(X);me=l(Ae,"input_ids"),Ae.forEach(t),ae=l(ee," only and nothing else: "),G=a(ee,"CODE",{});var Ee=s(G);ke=l(Ee,"model(input_ids)"),Ee.forEach(t),ee.forEach(t),fe=h(N),j=a(N,"LI",{});var x=s(j);we=l(x,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(x,"CODE",{});var De=s(R);K=l(De,"model([input_ids, attention_mask])"),De.forEach(t),Y=l(x," or "),Q=a(x,"CODE",{});var de=s(Q);ie=l(de,"model([input_ids, attention_mask, token_type_ids])"),de.forEach(t),x.forEach(t),Pe=h(N),H=a(N,"LI",{});var xe=s(H);$e=l(xe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),E=a(xe,"CODE",{});var Se=s(E);Oe=l(Se,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Se.forEach(t),xe.forEach(t),N.forEach(t)},m(T,M){m(T,d,M),e(d,y),m(T,_,M),m(T,c,M),e(c,v),e(v,r),e(c,f),e(c,q),e(q,ve),m(T,oe,M),m(T,F,M),e(F,V),e(F,D),e(D,J),e(F,ye),e(F,S),e(S,be),e(F,he),m(T,A,M),m(T,W,M),e(W,Z),m(T,re,M),m(T,z,M),e(z,L),e(L,ne),e(L,X),e(X,me),e(L,ae),e(L,G),e(G,ke),e(z,fe),e(z,j),e(j,we),e(j,R),e(R,K),e(j,Y),e(j,Q),e(Q,ie),e(z,Pe),e(z,H),e(H,$e),e(H,E),e(E,Oe)},d(T){T&&t(d),T&&t(_),T&&t(c),T&&t(oe),T&&t(F),T&&t(A),T&&t(W),T&&t(re),T&&t(z)}}}function fi(C){let d,y,_,c,v;return c=new yo({props:{code:`from transformers import GPT2Tokenizer, TFOPTForCausalLM

model = TFOPTForCausalLM.from_pretrained("facebook/opt-350m")
tokenizer = GPT2Tokenizer.from_pretrained("facebook/opt-350m")

prompt = "Hey, are you consciours? Can you talk to me?"
inputs = tokenizer(prompt, return_tensors="tf")

# Generate
generate_ids = model.generate(inputs.input_ids, max_length=30)
tokenizer.batch_decode(generate_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, TFOPTForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOPTForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;Hey, are you consciours? Can you talk to me?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generate_ids = model.generate(inputs.input_ids, max_length=<span class="hljs-number">30</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generate_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;Hey, are you consciours? Can you talk to me?\\nI&#x27;m not consciours, but I can talk to you.&quot;</span>`}}),{c(){d=n("p"),y=i("Example:"),_=u(),b(c.$$.fragment)},l(r){d=a(r,"P",{});var f=s(d);y=l(f,"Example:"),f.forEach(t),_=h(r),k(c.$$.fragment,r)},m(r,f){m(r,d,f),e(d,y),m(r,_,f),w(c,r,f),v=!0},p:vo,i(r){v||(P(c.$$.fragment,r),v=!0)},o(r){$(c.$$.fragment,r),v=!1},d(r){r&&t(d),r&&t(_),O(c,r)}}}function gi(C){let d,y,_,c,v;return c=new yo({props:{code:`from transformers import GPT2Tokenizer, FlaxOPTModel

tokenizer = GPT2Tokenizer.from_pretrained("facebook/opt-350m")
model = FlaxOPTModel.from_pretrained("facebook/opt-350m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxOPTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxOPTModel.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),y=i("Example:"),_=u(),b(c.$$.fragment)},l(r){d=a(r,"P",{});var f=s(d);y=l(f,"Example:"),f.forEach(t),_=h(r),k(c.$$.fragment,r)},m(r,f){m(r,d,f),e(d,y),m(r,_,f),w(c,r,f),v=!0},p:vo,i(r){v||(P(c.$$.fragment,r),v=!0)},o(r){$(c.$$.fragment,r),v=!1},d(r){r&&t(d),r&&t(_),O(c,r)}}}function _i(C){let d,y,_,c,v;return c=new yo({props:{code:`from transformers import GPT2Tokenizer, FlaxOPTForCausalLM

tokenizer = GPT2Tokenizer.from_pretrained("facebook/opt-350m")
model = FlaxOPTForCausalLM.from_pretrained("facebook/opt-350m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxOPTForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxOPTForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=n("p"),y=i("Example:"),_=u(),b(c.$$.fragment)},l(r){d=a(r,"P",{});var f=s(d);y=l(f,"Example:"),f.forEach(t),_=h(r),k(c.$$.fragment,r)},m(r,f){m(r,d,f),e(d,y),m(r,_,f),w(c,r,f),v=!0},p:vo,i(r){v||(P(c.$$.fragment,r),v=!0)},o(r){$(c.$$.fragment,r),v=!1},d(r){r&&t(d),r&&t(_),O(c,r)}}}function Ti(C){let d,y,_,c,v,r,f,q,ve,oe,F,V,D,J,ye,S,be,he,A,W,Z,re,z,L,ne,X,me,ae,G,ke,fe,j,we,R,K,Y,Q,ie,Pe,H,$e,E,Oe,T,M,le,Fe,Le,U,Me,Ne,Ie,N,ee,Ae,Ee,x,De,de,xe,Se,Mt,Xn,Yn,xt,Qn,ea,zt,ta,oa,un,We,tt,qo,Et,na,Lo,aa,hn,ce,Ct,sa,Ge,ra,bo,ia,la,jt,da,ca,pa,He,ua,ko,ha,ma,wo,fa,ga,_a,ot,mn,Ue,nt,No,qt,Ta,Io,va,fn,pe,Lt,ya,Nt,ba,Po,ka,wa,Pa,It,$a,At,Oa,Fa,Ma,ge,Dt,xa,Be,za,$o,Ea,Ca,Ao,ja,qa,La,at,Na,st,gn,Ve,rt,Do,St,Ia,So,Aa,_n,Re,Wt,Da,it,Gt,Sa,lt,Tn,Ke,dt,Wo,Ht,Wa,Go,Ga,vn,te,Ut,Ha,Bt,Ua,Oo,Ba,Va,Ra,Vt,Ka,Rt,Ja,Za,Xa,ct,Ya,_e,Kt,Qa,Je,es,Fo,ts,os,Ho,ns,as,ss,pt,rs,ut,yn,Ze,ht,Uo,Jt,is,Bo,ls,bn,B,Zt,ds,Vo,cs,ps,Xt,us,Mo,hs,ms,fs,Yt,gs,Qt,_s,Ts,vs,mt,ys,ft,eo,bs,gt,kn,Xe,_t,Ro,to,ks,Ko,ws,wn,Ye,oo,Ps,Tt,no,$s,vt,Pn,Qe,yt,Jo,ao,Os,Zo,Fs,$n,I,so,Ms,Xo,xs,zs,ro,Es,xo,Cs,js,qs,io,Ls,lo,Ns,Is,As,Yo,Ds,Ss,ze,Qo,co,Ws,Gs,en,po,Hs,Us,tn,uo,Bs,Vs,on,ho,Rs,Ks,bt,mo,Js,kt,On;return r=new et({}),J=new et({}),Et=new et({}),Ct=new ue({props:{name:"class transformers.OPTConfig",anchor:"transformers.OPTConfig",parameters:[{name:"vocab_size",val:" = 50272"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"ffn_dim",val:" = 3072"},{name:"max_position_embeddings",val:" = 2048"},{name:"do_layer_norm_before",val:" = True"},{name:"word_embed_proj_dim",val:" = None"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"num_attention_heads",val:" = 12"},{name:"activation_function",val:" = 'relu'"},{name:"layerdrop",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50272) &#x2014;
Vocabulary size of the OPT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTModel">OPTModel</a>`,name:"vocab_size"},{anchor:"transformers.OPTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.OPTConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"num_hidden_layers"},{anchor:"transformers.OPTConfig.ffn_dim",description:`<strong>ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"ffn_dim"},{anchor:"transformers.OPTConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"num_attention_heads"},{anchor:"transformers.OPTConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.OPTConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.OPTConfig.do_layer_norm_before",description:`<strong>do_layer_norm_before</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to perform layer normalization before the attention block.`,name:"do_layer_norm_before"},{anchor:"transformers.OPTConfig.word_embed_proj_dim",description:`<strong>word_embed_proj_dim</strong> (<code>int</code>, <em>optional</em>) &#x2014;
<code>word_embed_proj_dim</code> can be set to down-project word embeddings, <em>e.g.</em> <code>opt-350m</code>. Defaults to
<code>hidden_size</code>.`,name:"word_embed_proj_dim"},{anchor:"transformers.OPTConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.OPTConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.OPTConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.
layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more
details.`,name:"activation_dropout"},{anchor:"transformers.OPTConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.OPTConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/configuration_opt.py#L32"}}),ot=new To({props:{anchor:"transformers.OPTConfig.example",$$slots:{default:[ii]},$$scope:{ctx:C}}}),qt=new et({}),Lt=new ue({props:{name:"class transformers.OPTModel",anchor:"transformers.OPTModel",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L713"}}),Dt=new ue({props:{name:"forward",anchor:"transformers.OPTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>If you want to change padding behavior, you should read <code>modeling_opt._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"attention_mask"},{anchor:"transformers.OPTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OPTModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.OPTModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OPTModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.OPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L730",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
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
`}}),at=new Zn({props:{$$slots:{default:[li]},$$scope:{ctx:C}}}),st=new To({props:{anchor:"transformers.OPTModel.forward.example",$$slots:{default:[di]},$$scope:{ctx:C}}}),St=new et({}),Wt=new ue({props:{name:"class transformers.OPTForCausalLM",anchor:"transformers.OPTForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L782"}}),Gt=new ue({props:{name:"forward",anchor:"transformers.OPTForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OPTForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_hidden_layers, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OPTForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.OPTForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OPTForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.OPTForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.OPTForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OPTForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.OPTForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L813",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
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
`}}),lt=new To({props:{anchor:"transformers.OPTForCausalLM.forward.example",$$slots:{default:[ci]},$$scope:{ctx:C}}}),Ht=new et({}),Ut=new ue({props:{name:"class transformers.TFOPTModel",anchor:"transformers.TFOPTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_tf_opt.py#L791"}}),ct=new Zn({props:{$$slots:{default:[pi]},$$scope:{ctx:C}}}),Kt=new ue({props:{name:"call",anchor:"transformers.TFOPTModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOPTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOPTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOPTModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFOPTModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFOPTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOPTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOPTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOPTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_tf_opt.py#L805",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),pt=new Zn({props:{$$slots:{default:[ui]},$$scope:{ctx:C}}}),ut=new To({props:{anchor:"transformers.TFOPTModel.call.example",$$slots:{default:[hi]},$$scope:{ctx:C}}}),Jt=new et({}),Zt=new ue({props:{name:"class transformers.TFOPTForCausalLM",anchor:"transformers.TFOPTForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_tf_opt.py#L879"}}),mt=new Zn({props:{$$slots:{default:[mi]},$$scope:{ctx:C}}}),eo=new ue({props:{name:"call",anchor:"transformers.TFOPTForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOPTForCausalLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOPTForCausalLM.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_hidden_layers, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOPTForCausalLM.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFOPTForCausalLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOPTForCausalLM.call.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.TFOPTForCausalLM.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFOPTForCausalLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFOPTForCausalLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFOPTForCausalLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_tf_opt.py#L904",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gt=new To({props:{anchor:"transformers.TFOPTForCausalLM.call.example",$$slots:{default:[fi]},$$scope:{ctx:C}}}),to=new et({}),oo=new ue({props:{name:"class transformers.FlaxOPTModel",anchor:"transformers.FlaxOPTModel",parameters:[{name:"config",val:": OPTConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_flax_opt.py#L682"}}),no=new ue({props:{name:"__call__",anchor:"transformers.FlaxOPTModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"deterministic",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_flax_opt.py#L574",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vt=new To({props:{anchor:"transformers.FlaxOPTModel.__call__.example",$$slots:{default:[gi]},$$scope:{ctx:C}}}),ao=new et({}),so=new ue({props:{name:"class transformers.FlaxOPTForCausalLM",anchor:"transformers.FlaxOPTForCausalLM",parameters:[{name:"config",val:": OPTConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxOPTForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxOPTForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_flax_opt.py#L758"}}),mo=new ue({props:{name:"__call__",anchor:"transformers.FlaxOPTForCausalLM.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"deterministic",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_flax_opt.py#L574",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),kt=new To({props:{anchor:"transformers.FlaxOPTForCausalLM.__call__.example",$$slots:{default:[_i]},$$scope:{ctx:C}}}),{c(){d=n("meta"),y=u(),_=n("h1"),c=n("a"),v=n("span"),b(r.$$.fragment),f=u(),q=n("span"),ve=i("OPT"),oe=u(),F=n("h2"),V=n("a"),D=n("span"),b(J.$$.fragment),ye=u(),S=n("span"),be=i("Overview"),he=u(),A=n("p"),W=i("The OPT model was proposed in "),Z=n("a"),re=i("Open Pre-trained Transformer Language Models"),z=i(` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),L=u(),ne=n("p"),X=i("The abstract from the paper is the following:"),me=u(),ae=n("p"),G=n("em"),ke=i("Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),fe=u(),j=n("p"),we=i("Tips:"),R=u(),K=n("ul"),Y=n("li"),Q=i("OPT has the same architecture as "),ie=n("code"),Pe=i("BartDecoder"),H=i("."),$e=u(),E=n("li"),Oe=i("Contrary to GPT2, OPT adds the EOS token "),T=n("code"),M=i("</s>"),le=i(" to the beginning of every prompt. "),Fe=n("strong"),Le=i("Note"),U=i(": Make sure to pass "),Me=n("code"),Ne=i("use_fast=False"),Ie=i(" when loading OPT\u2019s tokenizer with "),N=n("a"),ee=i("AutoTokenizer"),Ae=i(" to get the correct tokenizer."),Ee=u(),x=n("p"),De=i("This model was contributed by "),de=n("a"),xe=i("Arthur Zucker"),Se=i(", "),Mt=n("a"),Xn=i("Younes Belkada"),Yn=i(", and "),xt=n("a"),Qn=i("Patrick Von Platen"),ea=i(`.
The original code can be found `),zt=n("a"),ta=i("here"),oa=i("."),un=u(),We=n("h2"),tt=n("a"),qo=n("span"),b(Et.$$.fragment),na=u(),Lo=n("span"),aa=i("OPTConfig"),hn=u(),ce=n("div"),b(Ct.$$.fragment),sa=u(),Ge=n("p"),ra=i("This is the configuration class to store the configuration of a "),bo=n("a"),ia=i("OPTModel"),la=i(`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),jt=n("a"),da=i("facebook/opt-350m"),ca=i(" architecture."),pa=u(),He=n("p"),ua=i("Configuration objects inherit from "),ko=n("a"),ha=i("PretrainedConfig"),ma=i(` and can be used to control the model outputs. Read the
documentation from `),wo=n("a"),fa=i("PretrainedConfig"),ga=i(" for more information."),_a=u(),b(ot.$$.fragment),mn=u(),Ue=n("h2"),nt=n("a"),No=n("span"),b(qt.$$.fragment),Ta=u(),Io=n("span"),va=i("OPTModel"),fn=u(),pe=n("div"),b(Lt.$$.fragment),ya=u(),Nt=n("p"),ba=i(`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Po=n("a"),ka=i("PreTrainedModel"),wa=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pa=u(),It=n("p"),$a=i("This model is also a PyTorch "),At=n("a"),Oa=i("torch.nn.Module"),Fa=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ma=u(),ge=n("div"),b(Dt.$$.fragment),xa=u(),Be=n("p"),za=i("The "),$o=n("a"),Ea=i("OPTModel"),Ca=i(" forward method, overrides the "),Ao=n("code"),ja=i("__call__"),qa=i(" special method."),La=u(),b(at.$$.fragment),Na=u(),b(st.$$.fragment),gn=u(),Ve=n("h2"),rt=n("a"),Do=n("span"),b(St.$$.fragment),Ia=u(),So=n("span"),Aa=i("OPTForCausalLM"),_n=u(),Re=n("div"),b(Wt.$$.fragment),Da=u(),it=n("div"),b(Gt.$$.fragment),Sa=u(),b(lt.$$.fragment),Tn=u(),Ke=n("h2"),dt=n("a"),Wo=n("span"),b(Ht.$$.fragment),Wa=u(),Go=n("span"),Ga=i("TFOPTModel"),vn=u(),te=n("div"),b(Ut.$$.fragment),Ha=u(),Bt=n("p"),Ua=i(`The bare TF OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Oo=n("a"),Ba=i("TFPreTrainedModel"),Va=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ra=u(),Vt=n("p"),Ka=i("This model is also a "),Rt=n("a"),Ja=i("tf.keras.Model"),Za=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xa=u(),b(ct.$$.fragment),Ya=u(),_e=n("div"),b(Kt.$$.fragment),Qa=u(),Je=n("p"),es=i("The "),Fo=n("a"),ts=i("TFOPTModel"),os=i(" forward method, overrides the "),Ho=n("code"),ns=i("__call__"),as=i(" special method."),ss=u(),b(pt.$$.fragment),rs=u(),b(ut.$$.fragment),yn=u(),Ze=n("h2"),ht=n("a"),Uo=n("span"),b(Jt.$$.fragment),is=u(),Bo=n("span"),ls=i("TFOPTForCausalLM"),bn=u(),B=n("div"),b(Zt.$$.fragment),ds=u(),Vo=n("p"),cs=i("The OPT Model transformer with a language modeling head on top."),ps=u(),Xt=n("p"),us=i("This model inherits from "),Mo=n("a"),hs=i("TFPreTrainedModel"),ms=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fs=u(),Yt=n("p"),gs=i("This model is also a "),Qt=n("a"),_s=i("tf.keras.Model"),Ts=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vs=u(),b(mt.$$.fragment),ys=u(),ft=n("div"),b(eo.$$.fragment),bs=u(),b(gt.$$.fragment),kn=u(),Xe=n("h2"),_t=n("a"),Ro=n("span"),b(to.$$.fragment),ks=u(),Ko=n("span"),ws=i("FlaxOPTModel"),wn=u(),Ye=n("div"),b(oo.$$.fragment),Ps=u(),Tt=n("div"),b(no.$$.fragment),$s=u(),b(vt.$$.fragment),Pn=u(),Qe=n("h2"),yt=n("a"),Jo=n("span"),b(ao.$$.fragment),Os=u(),Zo=n("span"),Fs=i("FlaxOPTForCausalLM"),$n=u(),I=n("div"),b(so.$$.fragment),Ms=u(),Xo=n("p"),xs=i(`OPT Model with a language modeling head on top (linear layer with weights tied to the input embeddings) e.g for
autoregressive tasks.`),zs=u(),ro=n("p"),Es=i("This model inherits from "),xo=n("a"),Cs=i("FlaxPreTrainedModel"),js=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qs=u(),io=n("p"),Ls=i(`This model is also a Flax Linen
`),lo=n("a"),Ns=i("flax.nn.Module"),Is=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),As=u(),Yo=n("p"),Ds=i("Finally, this model supports inherent JAX features such as:"),Ss=u(),ze=n("ul"),Qo=n("li"),co=n("a"),Ws=i("Just-In-Time (JIT) compilation"),Gs=u(),en=n("li"),po=n("a"),Hs=i("Automatic Differentiation"),Us=u(),tn=n("li"),uo=n("a"),Bs=i("Vectorization"),Vs=u(),on=n("li"),ho=n("a"),Rs=i("Parallelization"),Ks=u(),bt=n("div"),b(mo.$$.fragment),Js=u(),b(kt.$$.fragment),this.h()},l(o){const g=si('[data-svelte="svelte-1phssyn"]',document.head);d=a(g,"META",{name:!0,content:!0}),g.forEach(t),y=h(o),_=a(o,"H1",{class:!0});var fo=s(_);c=a(fo,"A",{id:!0,class:!0,href:!0});var nn=s(c);v=a(nn,"SPAN",{});var an=s(v);k(r.$$.fragment,an),an.forEach(t),nn.forEach(t),f=h(fo),q=a(fo,"SPAN",{});var sn=s(q);ve=l(sn,"OPT"),sn.forEach(t),fo.forEach(t),oe=h(o),F=a(o,"H2",{class:!0});var go=s(F);V=a(go,"A",{id:!0,class:!0,href:!0});var rn=s(V);D=a(rn,"SPAN",{});var ln=s(D);k(J.$$.fragment,ln),ln.forEach(t),rn.forEach(t),ye=h(go),S=a(go,"SPAN",{});var dn=s(S);be=l(dn,"Overview"),dn.forEach(t),go.forEach(t),he=h(o),A=a(o,"P",{});var _o=s(A);W=l(_o,"The OPT model was proposed in "),Z=a(_o,"A",{href:!0,rel:!0});var cn=s(Z);re=l(cn,"Open Pre-trained Transformer Language Models"),cn.forEach(t),z=l(_o,` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),_o.forEach(t),L=h(o),ne=a(o,"P",{});var pn=s(ne);X=l(pn,"The abstract from the paper is the following:"),pn.forEach(t),me=h(o),ae=a(o,"P",{});var Zs=s(ae);G=a(Zs,"EM",{});var Xs=s(G);ke=l(Xs,"Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),Xs.forEach(t),Zs.forEach(t),fe=h(o),j=a(o,"P",{});var Ys=s(j);we=l(Ys,"Tips:"),Ys.forEach(t),R=h(o),K=a(o,"UL",{});var Fn=s(K);Y=a(Fn,"LI",{});var Mn=s(Y);Q=l(Mn,"OPT has the same architecture as "),ie=a(Mn,"CODE",{});var Qs=s(ie);Pe=l(Qs,"BartDecoder"),Qs.forEach(t),H=l(Mn,"."),Mn.forEach(t),$e=h(Fn),E=a(Fn,"LI",{});var Ce=s(E);Oe=l(Ce,"Contrary to GPT2, OPT adds the EOS token "),T=a(Ce,"CODE",{});var er=s(T);M=l(er,"</s>"),er.forEach(t),le=l(Ce," to the beginning of every prompt. "),Fe=a(Ce,"STRONG",{});var tr=s(Fe);Le=l(tr,"Note"),tr.forEach(t),U=l(Ce,": Make sure to pass "),Me=a(Ce,"CODE",{});var or=s(Me);Ne=l(or,"use_fast=False"),or.forEach(t),Ie=l(Ce," when loading OPT\u2019s tokenizer with "),N=a(Ce,"A",{href:!0});var nr=s(N);ee=l(nr,"AutoTokenizer"),nr.forEach(t),Ae=l(Ce," to get the correct tokenizer."),Ce.forEach(t),Fn.forEach(t),Ee=h(o),x=a(o,"P",{});var je=s(x);De=l(je,"This model was contributed by "),de=a(je,"A",{href:!0,rel:!0});var ar=s(de);xe=l(ar,"Arthur Zucker"),ar.forEach(t),Se=l(je,", "),Mt=a(je,"A",{href:!0,rel:!0});var sr=s(Mt);Xn=l(sr,"Younes Belkada"),sr.forEach(t),Yn=l(je,", and "),xt=a(je,"A",{href:!0,rel:!0});var rr=s(xt);Qn=l(rr,"Patrick Von Platen"),rr.forEach(t),ea=l(je,`.
The original code can be found `),zt=a(je,"A",{href:!0,rel:!0});var ir=s(zt);ta=l(ir,"here"),ir.forEach(t),oa=l(je,"."),je.forEach(t),un=h(o),We=a(o,"H2",{class:!0});var xn=s(We);tt=a(xn,"A",{id:!0,class:!0,href:!0});var lr=s(tt);qo=a(lr,"SPAN",{});var dr=s(qo);k(Et.$$.fragment,dr),dr.forEach(t),lr.forEach(t),na=h(xn),Lo=a(xn,"SPAN",{});var cr=s(Lo);aa=l(cr,"OPTConfig"),cr.forEach(t),xn.forEach(t),hn=h(o),ce=a(o,"DIV",{class:!0});var wt=s(ce);k(Ct.$$.fragment,wt),sa=h(wt),Ge=a(wt,"P",{});var zo=s(Ge);ra=l(zo,"This is the configuration class to store the configuration of a "),bo=a(zo,"A",{href:!0});var pr=s(bo);ia=l(pr,"OPTModel"),pr.forEach(t),la=l(zo,`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),jt=a(zo,"A",{href:!0,rel:!0});var ur=s(jt);da=l(ur,"facebook/opt-350m"),ur.forEach(t),ca=l(zo," architecture."),zo.forEach(t),pa=h(wt),He=a(wt,"P",{});var Eo=s(He);ua=l(Eo,"Configuration objects inherit from "),ko=a(Eo,"A",{href:!0});var hr=s(ko);ha=l(hr,"PretrainedConfig"),hr.forEach(t),ma=l(Eo,` and can be used to control the model outputs. Read the
documentation from `),wo=a(Eo,"A",{href:!0});var mr=s(wo);fa=l(mr,"PretrainedConfig"),mr.forEach(t),ga=l(Eo," for more information."),Eo.forEach(t),_a=h(wt),k(ot.$$.fragment,wt),wt.forEach(t),mn=h(o),Ue=a(o,"H2",{class:!0});var zn=s(Ue);nt=a(zn,"A",{id:!0,class:!0,href:!0});var fr=s(nt);No=a(fr,"SPAN",{});var gr=s(No);k(qt.$$.fragment,gr),gr.forEach(t),fr.forEach(t),Ta=h(zn),Io=a(zn,"SPAN",{});var _r=s(Io);va=l(_r,"OPTModel"),_r.forEach(t),zn.forEach(t),fn=h(o),pe=a(o,"DIV",{class:!0});var Pt=s(pe);k(Lt.$$.fragment,Pt),ya=h(Pt),Nt=a(Pt,"P",{});var En=s(Nt);ba=l(En,`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Po=a(En,"A",{href:!0});var Tr=s(Po);ka=l(Tr,"PreTrainedModel"),Tr.forEach(t),wa=l(En,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),En.forEach(t),Pa=h(Pt),It=a(Pt,"P",{});var Cn=s(It);$a=l(Cn,"This model is also a PyTorch "),At=a(Cn,"A",{href:!0,rel:!0});var vr=s(At);Oa=l(vr,"torch.nn.Module"),vr.forEach(t),Fa=l(Cn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cn.forEach(t),Ma=h(Pt),ge=a(Pt,"DIV",{class:!0});var $t=s(ge);k(Dt.$$.fragment,$t),xa=h($t),Be=a($t,"P",{});var Co=s(Be);za=l(Co,"The "),$o=a(Co,"A",{href:!0});var yr=s($o);Ea=l(yr,"OPTModel"),yr.forEach(t),Ca=l(Co," forward method, overrides the "),Ao=a(Co,"CODE",{});var br=s(Ao);ja=l(br,"__call__"),br.forEach(t),qa=l(Co," special method."),Co.forEach(t),La=h($t),k(at.$$.fragment,$t),Na=h($t),k(st.$$.fragment,$t),$t.forEach(t),Pt.forEach(t),gn=h(o),Ve=a(o,"H2",{class:!0});var jn=s(Ve);rt=a(jn,"A",{id:!0,class:!0,href:!0});var kr=s(rt);Do=a(kr,"SPAN",{});var wr=s(Do);k(St.$$.fragment,wr),wr.forEach(t),kr.forEach(t),Ia=h(jn),So=a(jn,"SPAN",{});var Pr=s(So);Aa=l(Pr,"OPTForCausalLM"),Pr.forEach(t),jn.forEach(t),_n=h(o),Re=a(o,"DIV",{class:!0});var qn=s(Re);k(Wt.$$.fragment,qn),Da=h(qn),it=a(qn,"DIV",{class:!0});var Ln=s(it);k(Gt.$$.fragment,Ln),Sa=h(Ln),k(lt.$$.fragment,Ln),Ln.forEach(t),qn.forEach(t),Tn=h(o),Ke=a(o,"H2",{class:!0});var Nn=s(Ke);dt=a(Nn,"A",{id:!0,class:!0,href:!0});var $r=s(dt);Wo=a($r,"SPAN",{});var Or=s(Wo);k(Ht.$$.fragment,Or),Or.forEach(t),$r.forEach(t),Wa=h(Nn),Go=a(Nn,"SPAN",{});var Fr=s(Go);Ga=l(Fr,"TFOPTModel"),Fr.forEach(t),Nn.forEach(t),vn=h(o),te=a(o,"DIV",{class:!0});var qe=s(te);k(Ut.$$.fragment,qe),Ha=h(qe),Bt=a(qe,"P",{});var In=s(Bt);Ua=l(In,`The bare TF OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Oo=a(In,"A",{href:!0});var Mr=s(Oo);Ba=l(Mr,"TFPreTrainedModel"),Mr.forEach(t),Va=l(In,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),In.forEach(t),Ra=h(qe),Vt=a(qe,"P",{});var An=s(Vt);Ka=l(An,"This model is also a "),Rt=a(An,"A",{href:!0,rel:!0});var xr=s(Rt);Ja=l(xr,"tf.keras.Model"),xr.forEach(t),Za=l(An,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),An.forEach(t),Xa=h(qe),k(ct.$$.fragment,qe),Ya=h(qe),_e=a(qe,"DIV",{class:!0});var Ot=s(_e);k(Kt.$$.fragment,Ot),Qa=h(Ot),Je=a(Ot,"P",{});var jo=s(Je);es=l(jo,"The "),Fo=a(jo,"A",{href:!0});var zr=s(Fo);ts=l(zr,"TFOPTModel"),zr.forEach(t),os=l(jo," forward method, overrides the "),Ho=a(jo,"CODE",{});var Er=s(Ho);ns=l(Er,"__call__"),Er.forEach(t),as=l(jo," special method."),jo.forEach(t),ss=h(Ot),k(pt.$$.fragment,Ot),rs=h(Ot),k(ut.$$.fragment,Ot),Ot.forEach(t),qe.forEach(t),yn=h(o),Ze=a(o,"H2",{class:!0});var Dn=s(Ze);ht=a(Dn,"A",{id:!0,class:!0,href:!0});var Cr=s(ht);Uo=a(Cr,"SPAN",{});var jr=s(Uo);k(Jt.$$.fragment,jr),jr.forEach(t),Cr.forEach(t),is=h(Dn),Bo=a(Dn,"SPAN",{});var qr=s(Bo);ls=l(qr,"TFOPTForCausalLM"),qr.forEach(t),Dn.forEach(t),bn=h(o),B=a(o,"DIV",{class:!0});var Te=s(B);k(Zt.$$.fragment,Te),ds=h(Te),Vo=a(Te,"P",{});var Lr=s(Vo);cs=l(Lr,"The OPT Model transformer with a language modeling head on top."),Lr.forEach(t),ps=h(Te),Xt=a(Te,"P",{});var Sn=s(Xt);us=l(Sn,"This model inherits from "),Mo=a(Sn,"A",{href:!0});var Nr=s(Mo);hs=l(Nr,"TFPreTrainedModel"),Nr.forEach(t),ms=l(Sn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sn.forEach(t),fs=h(Te),Yt=a(Te,"P",{});var Wn=s(Yt);gs=l(Wn,"This model is also a "),Qt=a(Wn,"A",{href:!0,rel:!0});var Ir=s(Qt);_s=l(Ir,"tf.keras.Model"),Ir.forEach(t),Ts=l(Wn,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wn.forEach(t),vs=h(Te),k(mt.$$.fragment,Te),ys=h(Te),ft=a(Te,"DIV",{class:!0});var Gn=s(ft);k(eo.$$.fragment,Gn),bs=h(Gn),k(gt.$$.fragment,Gn),Gn.forEach(t),Te.forEach(t),kn=h(o),Xe=a(o,"H2",{class:!0});var Hn=s(Xe);_t=a(Hn,"A",{id:!0,class:!0,href:!0});var Ar=s(_t);Ro=a(Ar,"SPAN",{});var Dr=s(Ro);k(to.$$.fragment,Dr),Dr.forEach(t),Ar.forEach(t),ks=h(Hn),Ko=a(Hn,"SPAN",{});var Sr=s(Ko);ws=l(Sr,"FlaxOPTModel"),Sr.forEach(t),Hn.forEach(t),wn=h(o),Ye=a(o,"DIV",{class:!0});var Un=s(Ye);k(oo.$$.fragment,Un),Ps=h(Un),Tt=a(Un,"DIV",{class:!0});var Bn=s(Tt);k(no.$$.fragment,Bn),$s=h(Bn),k(vt.$$.fragment,Bn),Bn.forEach(t),Un.forEach(t),Pn=h(o),Qe=a(o,"H2",{class:!0});var Vn=s(Qe);yt=a(Vn,"A",{id:!0,class:!0,href:!0});var Wr=s(yt);Jo=a(Wr,"SPAN",{});var Gr=s(Jo);k(ao.$$.fragment,Gr),Gr.forEach(t),Wr.forEach(t),Os=h(Vn),Zo=a(Vn,"SPAN",{});var Hr=s(Zo);Fs=l(Hr,"FlaxOPTForCausalLM"),Hr.forEach(t),Vn.forEach(t),$n=h(o),I=a(o,"DIV",{class:!0});var se=s(I);k(so.$$.fragment,se),Ms=h(se),Xo=a(se,"P",{});var Ur=s(Xo);xs=l(Ur,`OPT Model with a language modeling head on top (linear layer with weights tied to the input embeddings) e.g for
autoregressive tasks.`),Ur.forEach(t),zs=h(se),ro=a(se,"P",{});var Rn=s(ro);Es=l(Rn,"This model inherits from "),xo=a(Rn,"A",{href:!0});var Br=s(xo);Cs=l(Br,"FlaxPreTrainedModel"),Br.forEach(t),js=l(Rn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rn.forEach(t),qs=h(se),io=a(se,"P",{});var Kn=s(io);Ls=l(Kn,`This model is also a Flax Linen
`),lo=a(Kn,"A",{href:!0,rel:!0});var Vr=s(lo);Ns=l(Vr,"flax.nn.Module"),Vr.forEach(t),Is=l(Kn,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Kn.forEach(t),As=h(se),Yo=a(se,"P",{});var Rr=s(Yo);Ds=l(Rr,"Finally, this model supports inherent JAX features such as:"),Rr.forEach(t),Ss=h(se),ze=a(se,"UL",{});var Ft=s(ze);Qo=a(Ft,"LI",{});var Kr=s(Qo);co=a(Kr,"A",{href:!0,rel:!0});var Jr=s(co);Ws=l(Jr,"Just-In-Time (JIT) compilation"),Jr.forEach(t),Kr.forEach(t),Gs=h(Ft),en=a(Ft,"LI",{});var Zr=s(en);po=a(Zr,"A",{href:!0,rel:!0});var Xr=s(po);Hs=l(Xr,"Automatic Differentiation"),Xr.forEach(t),Zr.forEach(t),Us=h(Ft),tn=a(Ft,"LI",{});var Yr=s(tn);uo=a(Yr,"A",{href:!0,rel:!0});var Qr=s(uo);Bs=l(Qr,"Vectorization"),Qr.forEach(t),Yr.forEach(t),Vs=h(Ft),on=a(Ft,"LI",{});var ei=s(on);ho=a(ei,"A",{href:!0,rel:!0});var ti=s(ho);Rs=l(ti,"Parallelization"),ti.forEach(t),ei.forEach(t),Ft.forEach(t),Ks=h(se),bt=a(se,"DIV",{class:!0});var Jn=s(bt);k(mo.$$.fragment,Jn),Js=h(Jn),k(kt.$$.fragment,Jn),Jn.forEach(t),se.forEach(t),this.h()},h(){p(d,"name","hf:doc:metadata"),p(d,"content",JSON.stringify(vi)),p(c,"id","opt"),p(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(c,"href","#opt"),p(_,"class","relative group"),p(V,"id","overview"),p(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(V,"href","#overview"),p(F,"class","relative group"),p(Z,"href","https://arxiv.org/pdf/2205.01068"),p(Z,"rel","nofollow"),p(N,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer"),p(de,"href","https://huggingface.co/ArthurZ"),p(de,"rel","nofollow"),p(Mt,"href","https://huggingface.co/ybelkada"),p(Mt,"rel","nofollow"),p(xt,"href","https://huggingface.co/patrickvonplaten"),p(xt,"rel","nofollow"),p(zt,"href","https://github.com/facebookresearch/metaseq"),p(zt,"rel","nofollow"),p(tt,"id","transformers.OPTConfig"),p(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(tt,"href","#transformers.OPTConfig"),p(We,"class","relative group"),p(bo,"href","/docs/transformers/main/en/model_doc/opt#transformers.OPTModel"),p(jt,"href","https://huggingface.co/facebook/opt-350m"),p(jt,"rel","nofollow"),p(ko,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(wo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(nt,"id","transformers.OPTModel"),p(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(nt,"href","#transformers.OPTModel"),p(Ue,"class","relative group"),p(Po,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),p(At,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(At,"rel","nofollow"),p($o,"href","/docs/transformers/main/en/model_doc/opt#transformers.OPTModel"),p(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(rt,"id","transformers.OPTForCausalLM"),p(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(rt,"href","#transformers.OPTForCausalLM"),p(Ve,"class","relative group"),p(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(dt,"id","transformers.TFOPTModel"),p(dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(dt,"href","#transformers.TFOPTModel"),p(Ke,"class","relative group"),p(Oo,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),p(Rt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Rt,"rel","nofollow"),p(Fo,"href","/docs/transformers/main/en/model_doc/opt#transformers.TFOPTModel"),p(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ht,"id","transformers.TFOPTForCausalLM"),p(ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ht,"href","#transformers.TFOPTForCausalLM"),p(Ze,"class","relative group"),p(Mo,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),p(Qt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Qt,"rel","nofollow"),p(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(_t,"id","transformers.FlaxOPTModel"),p(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(_t,"href","#transformers.FlaxOPTModel"),p(Xe,"class","relative group"),p(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(yt,"id","transformers.FlaxOPTForCausalLM"),p(yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(yt,"href","#transformers.FlaxOPTForCausalLM"),p(Qe,"class","relative group"),p(xo,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),p(lo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),p(lo,"rel","nofollow"),p(co,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(co,"rel","nofollow"),p(po,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(po,"rel","nofollow"),p(uo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(uo,"rel","nofollow"),p(ho,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(ho,"rel","nofollow"),p(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,d),m(o,y,g),m(o,_,g),e(_,c),e(c,v),w(r,v,null),e(_,f),e(_,q),e(q,ve),m(o,oe,g),m(o,F,g),e(F,V),e(V,D),w(J,D,null),e(F,ye),e(F,S),e(S,be),m(o,he,g),m(o,A,g),e(A,W),e(A,Z),e(Z,re),e(A,z),m(o,L,g),m(o,ne,g),e(ne,X),m(o,me,g),m(o,ae,g),e(ae,G),e(G,ke),m(o,fe,g),m(o,j,g),e(j,we),m(o,R,g),m(o,K,g),e(K,Y),e(Y,Q),e(Y,ie),e(ie,Pe),e(Y,H),e(K,$e),e(K,E),e(E,Oe),e(E,T),e(T,M),e(E,le),e(E,Fe),e(Fe,Le),e(E,U),e(E,Me),e(Me,Ne),e(E,Ie),e(E,N),e(N,ee),e(E,Ae),m(o,Ee,g),m(o,x,g),e(x,De),e(x,de),e(de,xe),e(x,Se),e(x,Mt),e(Mt,Xn),e(x,Yn),e(x,xt),e(xt,Qn),e(x,ea),e(x,zt),e(zt,ta),e(x,oa),m(o,un,g),m(o,We,g),e(We,tt),e(tt,qo),w(Et,qo,null),e(We,na),e(We,Lo),e(Lo,aa),m(o,hn,g),m(o,ce,g),w(Ct,ce,null),e(ce,sa),e(ce,Ge),e(Ge,ra),e(Ge,bo),e(bo,ia),e(Ge,la),e(Ge,jt),e(jt,da),e(Ge,ca),e(ce,pa),e(ce,He),e(He,ua),e(He,ko),e(ko,ha),e(He,ma),e(He,wo),e(wo,fa),e(He,ga),e(ce,_a),w(ot,ce,null),m(o,mn,g),m(o,Ue,g),e(Ue,nt),e(nt,No),w(qt,No,null),e(Ue,Ta),e(Ue,Io),e(Io,va),m(o,fn,g),m(o,pe,g),w(Lt,pe,null),e(pe,ya),e(pe,Nt),e(Nt,ba),e(Nt,Po),e(Po,ka),e(Nt,wa),e(pe,Pa),e(pe,It),e(It,$a),e(It,At),e(At,Oa),e(It,Fa),e(pe,Ma),e(pe,ge),w(Dt,ge,null),e(ge,xa),e(ge,Be),e(Be,za),e(Be,$o),e($o,Ea),e(Be,Ca),e(Be,Ao),e(Ao,ja),e(Be,qa),e(ge,La),w(at,ge,null),e(ge,Na),w(st,ge,null),m(o,gn,g),m(o,Ve,g),e(Ve,rt),e(rt,Do),w(St,Do,null),e(Ve,Ia),e(Ve,So),e(So,Aa),m(o,_n,g),m(o,Re,g),w(Wt,Re,null),e(Re,Da),e(Re,it),w(Gt,it,null),e(it,Sa),w(lt,it,null),m(o,Tn,g),m(o,Ke,g),e(Ke,dt),e(dt,Wo),w(Ht,Wo,null),e(Ke,Wa),e(Ke,Go),e(Go,Ga),m(o,vn,g),m(o,te,g),w(Ut,te,null),e(te,Ha),e(te,Bt),e(Bt,Ua),e(Bt,Oo),e(Oo,Ba),e(Bt,Va),e(te,Ra),e(te,Vt),e(Vt,Ka),e(Vt,Rt),e(Rt,Ja),e(Vt,Za),e(te,Xa),w(ct,te,null),e(te,Ya),e(te,_e),w(Kt,_e,null),e(_e,Qa),e(_e,Je),e(Je,es),e(Je,Fo),e(Fo,ts),e(Je,os),e(Je,Ho),e(Ho,ns),e(Je,as),e(_e,ss),w(pt,_e,null),e(_e,rs),w(ut,_e,null),m(o,yn,g),m(o,Ze,g),e(Ze,ht),e(ht,Uo),w(Jt,Uo,null),e(Ze,is),e(Ze,Bo),e(Bo,ls),m(o,bn,g),m(o,B,g),w(Zt,B,null),e(B,ds),e(B,Vo),e(Vo,cs),e(B,ps),e(B,Xt),e(Xt,us),e(Xt,Mo),e(Mo,hs),e(Xt,ms),e(B,fs),e(B,Yt),e(Yt,gs),e(Yt,Qt),e(Qt,_s),e(Yt,Ts),e(B,vs),w(mt,B,null),e(B,ys),e(B,ft),w(eo,ft,null),e(ft,bs),w(gt,ft,null),m(o,kn,g),m(o,Xe,g),e(Xe,_t),e(_t,Ro),w(to,Ro,null),e(Xe,ks),e(Xe,Ko),e(Ko,ws),m(o,wn,g),m(o,Ye,g),w(oo,Ye,null),e(Ye,Ps),e(Ye,Tt),w(no,Tt,null),e(Tt,$s),w(vt,Tt,null),m(o,Pn,g),m(o,Qe,g),e(Qe,yt),e(yt,Jo),w(ao,Jo,null),e(Qe,Os),e(Qe,Zo),e(Zo,Fs),m(o,$n,g),m(o,I,g),w(so,I,null),e(I,Ms),e(I,Xo),e(Xo,xs),e(I,zs),e(I,ro),e(ro,Es),e(ro,xo),e(xo,Cs),e(ro,js),e(I,qs),e(I,io),e(io,Ls),e(io,lo),e(lo,Ns),e(io,Is),e(I,As),e(I,Yo),e(Yo,Ds),e(I,Ss),e(I,ze),e(ze,Qo),e(Qo,co),e(co,Ws),e(ze,Gs),e(ze,en),e(en,po),e(po,Hs),e(ze,Us),e(ze,tn),e(tn,uo),e(uo,Bs),e(ze,Vs),e(ze,on),e(on,ho),e(ho,Rs),e(I,Ks),e(I,bt),w(mo,bt,null),e(bt,Js),w(kt,bt,null),On=!0},p(o,[g]){const fo={};g&2&&(fo.$$scope={dirty:g,ctx:o}),ot.$set(fo);const nn={};g&2&&(nn.$$scope={dirty:g,ctx:o}),at.$set(nn);const an={};g&2&&(an.$$scope={dirty:g,ctx:o}),st.$set(an);const sn={};g&2&&(sn.$$scope={dirty:g,ctx:o}),lt.$set(sn);const go={};g&2&&(go.$$scope={dirty:g,ctx:o}),ct.$set(go);const rn={};g&2&&(rn.$$scope={dirty:g,ctx:o}),pt.$set(rn);const ln={};g&2&&(ln.$$scope={dirty:g,ctx:o}),ut.$set(ln);const dn={};g&2&&(dn.$$scope={dirty:g,ctx:o}),mt.$set(dn);const _o={};g&2&&(_o.$$scope={dirty:g,ctx:o}),gt.$set(_o);const cn={};g&2&&(cn.$$scope={dirty:g,ctx:o}),vt.$set(cn);const pn={};g&2&&(pn.$$scope={dirty:g,ctx:o}),kt.$set(pn)},i(o){On||(P(r.$$.fragment,o),P(J.$$.fragment,o),P(Et.$$.fragment,o),P(Ct.$$.fragment,o),P(ot.$$.fragment,o),P(qt.$$.fragment,o),P(Lt.$$.fragment,o),P(Dt.$$.fragment,o),P(at.$$.fragment,o),P(st.$$.fragment,o),P(St.$$.fragment,o),P(Wt.$$.fragment,o),P(Gt.$$.fragment,o),P(lt.$$.fragment,o),P(Ht.$$.fragment,o),P(Ut.$$.fragment,o),P(ct.$$.fragment,o),P(Kt.$$.fragment,o),P(pt.$$.fragment,o),P(ut.$$.fragment,o),P(Jt.$$.fragment,o),P(Zt.$$.fragment,o),P(mt.$$.fragment,o),P(eo.$$.fragment,o),P(gt.$$.fragment,o),P(to.$$.fragment,o),P(oo.$$.fragment,o),P(no.$$.fragment,o),P(vt.$$.fragment,o),P(ao.$$.fragment,o),P(so.$$.fragment,o),P(mo.$$.fragment,o),P(kt.$$.fragment,o),On=!0)},o(o){$(r.$$.fragment,o),$(J.$$.fragment,o),$(Et.$$.fragment,o),$(Ct.$$.fragment,o),$(ot.$$.fragment,o),$(qt.$$.fragment,o),$(Lt.$$.fragment,o),$(Dt.$$.fragment,o),$(at.$$.fragment,o),$(st.$$.fragment,o),$(St.$$.fragment,o),$(Wt.$$.fragment,o),$(Gt.$$.fragment,o),$(lt.$$.fragment,o),$(Ht.$$.fragment,o),$(Ut.$$.fragment,o),$(ct.$$.fragment,o),$(Kt.$$.fragment,o),$(pt.$$.fragment,o),$(ut.$$.fragment,o),$(Jt.$$.fragment,o),$(Zt.$$.fragment,o),$(mt.$$.fragment,o),$(eo.$$.fragment,o),$(gt.$$.fragment,o),$(to.$$.fragment,o),$(oo.$$.fragment,o),$(no.$$.fragment,o),$(vt.$$.fragment,o),$(ao.$$.fragment,o),$(so.$$.fragment,o),$(mo.$$.fragment,o),$(kt.$$.fragment,o),On=!1},d(o){t(d),o&&t(y),o&&t(_),O(r),o&&t(oe),o&&t(F),O(J),o&&t(he),o&&t(A),o&&t(L),o&&t(ne),o&&t(me),o&&t(ae),o&&t(fe),o&&t(j),o&&t(R),o&&t(K),o&&t(Ee),o&&t(x),o&&t(un),o&&t(We),O(Et),o&&t(hn),o&&t(ce),O(Ct),O(ot),o&&t(mn),o&&t(Ue),O(qt),o&&t(fn),o&&t(pe),O(Lt),O(Dt),O(at),O(st),o&&t(gn),o&&t(Ve),O(St),o&&t(_n),o&&t(Re),O(Wt),O(Gt),O(lt),o&&t(Tn),o&&t(Ke),O(Ht),o&&t(vn),o&&t(te),O(Ut),O(ct),O(Kt),O(pt),O(ut),o&&t(yn),o&&t(Ze),O(Jt),o&&t(bn),o&&t(B),O(Zt),O(mt),O(eo),O(gt),o&&t(kn),o&&t(Xe),O(to),o&&t(wn),o&&t(Ye),O(oo),O(no),O(vt),o&&t(Pn),o&&t(Qe),O(ao),o&&t($n),o&&t(I),O(so),O(mo),O(kt)}}}const vi={local:"opt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OPTConfig",title:"OPTConfig"},{local:"transformers.OPTModel",title:"OPTModel"},{local:"transformers.OPTForCausalLM",title:"OPTForCausalLM"},{local:"transformers.TFOPTModel",title:"TFOPTModel"},{local:"transformers.TFOPTForCausalLM",title:"TFOPTForCausalLM"},{local:"transformers.FlaxOPTModel",title:"FlaxOPTModel"},{local:"transformers.FlaxOPTForCausalLM",title:"FlaxOPTForCausalLM"}],title:"OPT"};function yi(C){return ri(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Fi extends oi{constructor(d){super();ni(this,d,yi,Ti,ai,{})}}export{Fi as default,vi as metadata};
