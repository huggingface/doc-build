import{S as oi,i as ni,s as si,e as n,k as u,w as b,t as i,M as ai,c as s,d as t,m as h,a,x as k,h as l,b as p,G as e,g as f,y as w,q as P,o as $,B as O,v as ri,L as vo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Zn}from"../../chunks/Tip-hf-doc-builder.js";import{D as ue}from"../../chunks/Docstring-hf-doc-builder.js";import{C as yo}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as et}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as To}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ii(C){let d,y,_,c,v;return c=new yo({props:{code:`from transformers import OPTModel, OPTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),y=i("Example:"),_=u(),b(c.$$.fragment)},l(r){d=s(r,"P",{});var m=a(d);y=l(m,"Example:"),m.forEach(t),_=h(r),k(c.$$.fragment,r)},m(r,m){f(r,d,m),e(d,y),f(r,_,m),w(c,r,m),v=!0},p:vo,i(r){v||(P(c.$$.fragment,r),v=!0)},o(r){$(c.$$.fragment,r),v=!1},d(r){r&&t(d),r&&t(_),O(c,r)}}}function li(C){let d,y,_,c,v;return{c(){d=n("p"),y=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),c=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var m=a(d);y=l(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(m,"CODE",{});var q=a(_);c=l(q,"Module"),q.forEach(t),v=l(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(r,m){f(r,d,m),e(d,y),e(d,_),e(_,c),e(d,v)},d(r){r&&t(d)}}}function di(C){let d,y,_,c,v;return c=new yo({props:{code:`from transformers import GPT2Tokenizer, OPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),y=i("Example:"),_=u(),b(c.$$.fragment)},l(r){d=s(r,"P",{});var m=a(d);y=l(m,"Example:"),m.forEach(t),_=h(r),k(c.$$.fragment,r)},m(r,m){f(r,d,m),e(d,y),f(r,_,m),w(c,r,m),v=!0},p:vo,i(r){v||(P(c.$$.fragment,r),v=!0)},o(r){$(c.$$.fragment,r),v=!1},d(r){r&&t(d),r&&t(_),O(c,r)}}}function ci(C){let d,y,_,c,v;return c=new yo({props:{code:`from transformers import GPT2Tokenizer, OPTForCausalLM

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
<span class="hljs-string">&quot;Hey, are you consciours? Can you talk to me?\\nI&#x27;m not consciours, but I can talk to you.&quot;</span>`}}),{c(){d=n("p"),y=i("Example:"),_=u(),b(c.$$.fragment)},l(r){d=s(r,"P",{});var m=a(d);y=l(m,"Example:"),m.forEach(t),_=h(r),k(c.$$.fragment,r)},m(r,m){f(r,d,m),e(d,y),f(r,_,m),w(c,r,m),v=!0},p:vo,i(r){v||(P(c.$$.fragment,r),v=!0)},o(r){$(c.$$.fragment,r),v=!1},d(r){r&&t(d),r&&t(_),O(c,r)}}}function pi(C){let d,y,_,c,v,r,m,q,ve,oe,F,V,D,J,ye,S,be,he,A,W,Z,re,z,L,ne,X,fe,se,G,ke,me,j,we,R,K,Y,Q,ie,Pe,H,$e,E,Oe;return{c(){d=n("p"),y=i("TF 2.0 models accepts two formats as inputs:"),_=u(),c=n("ul"),v=n("li"),r=i("having all inputs as keyword arguments (like PyTorch models), or"),m=u(),q=n("li"),ve=i("having all inputs as a list, tuple or dict in the first positional arguments."),oe=u(),F=n("p"),V=i("This second option is useful when using "),D=n("code"),J=i("tf.keras.Model.fit"),ye=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),be=i("model(inputs)"),he=i("."),A=u(),W=n("p"),Z=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),re=u(),z=n("ul"),L=n("li"),ne=i("a single Tensor with "),X=n("code"),fe=i("input_ids"),se=i(" only and nothing else: "),G=n("code"),ke=i("model(input_ids)"),me=u(),j=n("li"),we=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=n("code"),K=i("model([input_ids, attention_mask])"),Y=i(" or "),Q=n("code"),ie=i("model([input_ids, attention_mask, token_type_ids])"),Pe=u(),H=n("li"),$e=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),E=n("code"),Oe=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var M=a(d);y=l(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),_=h(T),c=s(T,"UL",{});var le=a(c);v=s(le,"LI",{});var Fe=a(v);r=l(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),m=h(le),q=s(le,"LI",{});var Le=a(q);ve=l(Le,"having all inputs as a list, tuple or dict in the first positional arguments."),Le.forEach(t),le.forEach(t),oe=h(T),F=s(T,"P",{});var U=a(F);V=l(U,"This second option is useful when using "),D=s(U,"CODE",{});var Me=a(D);J=l(Me,"tf.keras.Model.fit"),Me.forEach(t),ye=l(U,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(U,"CODE",{});var Ne=a(S);be=l(Ne,"model(inputs)"),Ne.forEach(t),he=l(U,"."),U.forEach(t),A=h(T),W=s(T,"P",{});var Ie=a(W);Z=l(Ie,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ie.forEach(t),re=h(T),z=s(T,"UL",{});var N=a(z);L=s(N,"LI",{});var ee=a(L);ne=l(ee,"a single Tensor with "),X=s(ee,"CODE",{});var Ae=a(X);fe=l(Ae,"input_ids"),Ae.forEach(t),se=l(ee," only and nothing else: "),G=s(ee,"CODE",{});var Ee=a(G);ke=l(Ee,"model(input_ids)"),Ee.forEach(t),ee.forEach(t),me=h(N),j=s(N,"LI",{});var x=a(j);we=l(x,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=s(x,"CODE",{});var De=a(R);K=l(De,"model([input_ids, attention_mask])"),De.forEach(t),Y=l(x," or "),Q=s(x,"CODE",{});var de=a(Q);ie=l(de,"model([input_ids, attention_mask, token_type_ids])"),de.forEach(t),x.forEach(t),Pe=h(N),H=s(N,"LI",{});var xe=a(H);$e=l(xe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),E=s(xe,"CODE",{});var Se=a(E);Oe=l(Se,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Se.forEach(t),xe.forEach(t),N.forEach(t)},m(T,M){f(T,d,M),e(d,y),f(T,_,M),f(T,c,M),e(c,v),e(v,r),e(c,m),e(c,q),e(q,ve),f(T,oe,M),f(T,F,M),e(F,V),e(F,D),e(D,J),e(F,ye),e(F,S),e(S,be),e(F,he),f(T,A,M),f(T,W,M),e(W,Z),f(T,re,M),f(T,z,M),e(z,L),e(L,ne),e(L,X),e(X,fe),e(L,se),e(L,G),e(G,ke),e(z,me),e(z,j),e(j,we),e(j,R),e(R,K),e(j,Y),e(j,Q),e(Q,ie),e(z,Pe),e(z,H),e(H,$e),e(H,E),e(E,Oe)},d(T){T&&t(d),T&&t(_),T&&t(c),T&&t(oe),T&&t(F),T&&t(A),T&&t(W),T&&t(re),T&&t(z)}}}function ui(C){let d,y,_,c,v;return{c(){d=n("p"),y=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=n("code"),c=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=s(r,"P",{});var m=a(d);y=l(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s(m,"CODE",{});var q=a(_);c=l(q,"Module"),q.forEach(t),v=l(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(r,m){f(r,d,m),e(d,y),e(d,_),e(_,c),e(d,v)},d(r){r&&t(d)}}}function hi(C){let d,y,_,c,v;return c=new yo({props:{code:`from transformers import GPT2Tokenizer, TFOPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),y=i("Example:"),_=u(),b(c.$$.fragment)},l(r){d=s(r,"P",{});var m=a(d);y=l(m,"Example:"),m.forEach(t),_=h(r),k(c.$$.fragment,r)},m(r,m){f(r,d,m),e(d,y),f(r,_,m),w(c,r,m),v=!0},p:vo,i(r){v||(P(c.$$.fragment,r),v=!0)},o(r){$(c.$$.fragment,r),v=!1},d(r){r&&t(d),r&&t(_),O(c,r)}}}function fi(C){let d,y,_,c,v,r,m,q,ve,oe,F,V,D,J,ye,S,be,he,A,W,Z,re,z,L,ne,X,fe,se,G,ke,me,j,we,R,K,Y,Q,ie,Pe,H,$e,E,Oe;return{c(){d=n("p"),y=i("TF 2.0 models accepts two formats as inputs:"),_=u(),c=n("ul"),v=n("li"),r=i("having all inputs as keyword arguments (like PyTorch models), or"),m=u(),q=n("li"),ve=i("having all inputs as a list, tuple or dict in the first positional arguments."),oe=u(),F=n("p"),V=i("This second option is useful when using "),D=n("code"),J=i("tf.keras.Model.fit"),ye=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),be=i("model(inputs)"),he=i("."),A=u(),W=n("p"),Z=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),re=u(),z=n("ul"),L=n("li"),ne=i("a single Tensor with "),X=n("code"),fe=i("input_ids"),se=i(" only and nothing else: "),G=n("code"),ke=i("model(input_ids)"),me=u(),j=n("li"),we=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=n("code"),K=i("model([input_ids, attention_mask])"),Y=i(" or "),Q=n("code"),ie=i("model([input_ids, attention_mask, token_type_ids])"),Pe=u(),H=n("li"),$e=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),E=n("code"),Oe=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var M=a(d);y=l(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),_=h(T),c=s(T,"UL",{});var le=a(c);v=s(le,"LI",{});var Fe=a(v);r=l(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),m=h(le),q=s(le,"LI",{});var Le=a(q);ve=l(Le,"having all inputs as a list, tuple or dict in the first positional arguments."),Le.forEach(t),le.forEach(t),oe=h(T),F=s(T,"P",{});var U=a(F);V=l(U,"This second option is useful when using "),D=s(U,"CODE",{});var Me=a(D);J=l(Me,"tf.keras.Model.fit"),Me.forEach(t),ye=l(U,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(U,"CODE",{});var Ne=a(S);be=l(Ne,"model(inputs)"),Ne.forEach(t),he=l(U,"."),U.forEach(t),A=h(T),W=s(T,"P",{});var Ie=a(W);Z=l(Ie,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ie.forEach(t),re=h(T),z=s(T,"UL",{});var N=a(z);L=s(N,"LI",{});var ee=a(L);ne=l(ee,"a single Tensor with "),X=s(ee,"CODE",{});var Ae=a(X);fe=l(Ae,"input_ids"),Ae.forEach(t),se=l(ee," only and nothing else: "),G=s(ee,"CODE",{});var Ee=a(G);ke=l(Ee,"model(input_ids)"),Ee.forEach(t),ee.forEach(t),me=h(N),j=s(N,"LI",{});var x=a(j);we=l(x,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=s(x,"CODE",{});var De=a(R);K=l(De,"model([input_ids, attention_mask])"),De.forEach(t),Y=l(x," or "),Q=s(x,"CODE",{});var de=a(Q);ie=l(de,"model([input_ids, attention_mask, token_type_ids])"),de.forEach(t),x.forEach(t),Pe=h(N),H=s(N,"LI",{});var xe=a(H);$e=l(xe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),E=s(xe,"CODE",{});var Se=a(E);Oe=l(Se,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Se.forEach(t),xe.forEach(t),N.forEach(t)},m(T,M){f(T,d,M),e(d,y),f(T,_,M),f(T,c,M),e(c,v),e(v,r),e(c,m),e(c,q),e(q,ve),f(T,oe,M),f(T,F,M),e(F,V),e(F,D),e(D,J),e(F,ye),e(F,S),e(S,be),e(F,he),f(T,A,M),f(T,W,M),e(W,Z),f(T,re,M),f(T,z,M),e(z,L),e(L,ne),e(L,X),e(X,fe),e(L,se),e(L,G),e(G,ke),e(z,me),e(z,j),e(j,we),e(j,R),e(R,K),e(j,Y),e(j,Q),e(Q,ie),e(z,Pe),e(z,H),e(H,$e),e(H,E),e(E,Oe)},d(T){T&&t(d),T&&t(_),T&&t(c),T&&t(oe),T&&t(F),T&&t(A),T&&t(W),T&&t(re),T&&t(z)}}}function mi(C){let d,y,_,c,v;return c=new yo({props:{code:`from transformers import GPT2Tokenizer, TFOPTForCausalLM

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
<span class="hljs-string">&quot;Hey, are you consciours? Can you talk to me?\\nI&#x27;m not consciours, but I can talk to you.&quot;</span>`}}),{c(){d=n("p"),y=i("Example:"),_=u(),b(c.$$.fragment)},l(r){d=s(r,"P",{});var m=a(d);y=l(m,"Example:"),m.forEach(t),_=h(r),k(c.$$.fragment,r)},m(r,m){f(r,d,m),e(d,y),f(r,_,m),w(c,r,m),v=!0},p:vo,i(r){v||(P(c.$$.fragment,r),v=!0)},o(r){$(c.$$.fragment,r),v=!1},d(r){r&&t(d),r&&t(_),O(c,r)}}}function gi(C){let d,y,_,c,v;return c=new yo({props:{code:`from transformers import GPT2Tokenizer, FlaxOPTModel

tokenizer = GPT2Tokenizer.from_pretrained("facebook/opt-350m")
model = FlaxOPTModel.from_pretrained("facebook/opt-350m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxOPTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxOPTModel.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),y=i("Example:"),_=u(),b(c.$$.fragment)},l(r){d=s(r,"P",{});var m=a(d);y=l(m,"Example:"),m.forEach(t),_=h(r),k(c.$$.fragment,r)},m(r,m){f(r,d,m),e(d,y),f(r,_,m),w(c,r,m),v=!0},p:vo,i(r){v||(P(c.$$.fragment,r),v=!0)},o(r){$(c.$$.fragment,r),v=!1},d(r){r&&t(d),r&&t(_),O(c,r)}}}function _i(C){let d,y,_,c,v;return c=new yo({props:{code:`from transformers import GPT2Tokenizer, FlaxOPTForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=n("p"),y=i("Example:"),_=u(),b(c.$$.fragment)},l(r){d=s(r,"P",{});var m=a(d);y=l(m,"Example:"),m.forEach(t),_=h(r),k(c.$$.fragment,r)},m(r,m){f(r,d,m),e(d,y),f(r,_,m),w(c,r,m),v=!0},p:vo,i(r){v||(P(c.$$.fragment,r),v=!0)},o(r){$(c.$$.fragment,r),v=!1},d(r){r&&t(d),r&&t(_),O(c,r)}}}function Ti(C){let d,y,_,c,v,r,m,q,ve,oe,F,V,D,J,ye,S,be,he,A,W,Z,re,z,L,ne,X,fe,se,G,ke,me,j,we,R,K,Y,Q,ie,Pe,H,$e,E,Oe,T,M,le,Fe,Le,U,Me,Ne,Ie,N,ee,Ae,Ee,x,De,de,xe,Se,Mt,Xn,Yn,xt,Qn,es,zt,ts,os,un,We,tt,qo,Et,ns,Lo,ss,hn,ce,Ct,as,Ge,rs,bo,is,ls,jt,ds,cs,ps,He,us,ko,hs,fs,wo,ms,gs,_s,ot,fn,Ue,nt,No,qt,Ts,Io,vs,mn,pe,Lt,ys,Nt,bs,Po,ks,ws,Ps,It,$s,At,Os,Fs,Ms,ge,Dt,xs,Be,zs,$o,Es,Cs,Ao,js,qs,Ls,st,Ns,at,gn,Ve,rt,Do,St,Is,So,As,_n,Re,Wt,Ds,it,Gt,Ss,lt,Tn,Ke,dt,Wo,Ht,Ws,Go,Gs,vn,te,Ut,Hs,Bt,Us,Oo,Bs,Vs,Rs,Vt,Ks,Rt,Js,Zs,Xs,ct,Ys,_e,Kt,Qs,Je,ea,Fo,ta,oa,Ho,na,sa,aa,pt,ra,ut,yn,Ze,ht,Uo,Jt,ia,Bo,la,bn,B,Zt,da,Vo,ca,pa,Xt,ua,Mo,ha,fa,ma,Yt,ga,Qt,_a,Ta,va,ft,ya,mt,eo,ba,gt,kn,Xe,_t,Ro,to,ka,Ko,wa,wn,Ye,oo,Pa,Tt,no,$a,vt,Pn,Qe,yt,Jo,so,Oa,Zo,Fa,$n,I,ao,Ma,Xo,xa,za,ro,Ea,xo,Ca,ja,qa,io,La,lo,Na,Ia,Aa,Yo,Da,Sa,ze,Qo,co,Wa,Ga,en,po,Ha,Ua,tn,uo,Ba,Va,on,ho,Ra,Ka,bt,fo,Ja,kt,On;return r=new et({}),J=new et({}),Et=new et({}),Ct=new ue({props:{name:"class transformers.OPTConfig",anchor:"transformers.OPTConfig",parameters:[{name:"vocab_size",val:" = 50272"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"ffn_dim",val:" = 3072"},{name:"max_position_embeddings",val:" = 2048"},{name:"do_layer_norm_before",val:" = True"},{name:"_remove_final_layer_norm",val:" = False"},{name:"word_embed_proj_dim",val:" = None"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"num_attention_heads",val:" = 12"},{name:"activation_function",val:" = 'relu'"},{name:"layerdrop",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50272) &#x2014;
Vocabulary size of the OPT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.20.1/en/model_doc/opt#transformers.OPTModel">OPTModel</a>`,name:"vocab_size"},{anchor:"transformers.OPTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/opt/configuration_opt.py#L32"}}),ot=new To({props:{anchor:"transformers.OPTConfig.example",$$slots:{default:[ii]},$$scope:{ctx:C}}}),qt=new et({}),Lt=new ue({props:{name:"class transformers.OPTModel",anchor:"transformers.OPTModel",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/opt/modeling_opt.py#L723"}}),Dt=new ue({props:{name:"forward",anchor:"transformers.OPTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/opt/modeling_opt.py#L740",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),st=new Zn({props:{$$slots:{default:[li]},$$scope:{ctx:C}}}),at=new To({props:{anchor:"transformers.OPTModel.forward.example",$$slots:{default:[di]},$$scope:{ctx:C}}}),St=new et({}),Wt=new ue({props:{name:"class transformers.OPTForCausalLM",anchor:"transformers.OPTForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/opt/modeling_opt.py#L792"}}),Gt=new ue({props:{name:"forward",anchor:"transformers.OPTForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/opt/modeling_opt.py#L823",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),lt=new To({props:{anchor:"transformers.OPTForCausalLM.forward.example",$$slots:{default:[ci]},$$scope:{ctx:C}}}),Ht=new et({}),Ut=new ue({props:{name:"class transformers.TFOPTModel",anchor:"transformers.TFOPTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/opt/modeling_tf_opt.py#L779"}}),ct=new Zn({props:{$$slots:{default:[pi]},$$scope:{ctx:C}}}),Kt=new ue({props:{name:"call",anchor:"transformers.TFOPTModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOPTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/opt/modeling_tf_opt.py#L793",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),pt=new Zn({props:{$$slots:{default:[ui]},$$scope:{ctx:C}}}),ut=new To({props:{anchor:"transformers.TFOPTModel.call.example",$$slots:{default:[hi]},$$scope:{ctx:C}}}),Jt=new et({}),Zt=new ue({props:{name:"class transformers.TFOPTForCausalLM",anchor:"transformers.TFOPTForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/opt/modeling_tf_opt.py#L867"}}),ft=new Zn({props:{$$slots:{default:[fi]},$$scope:{ctx:C}}}),eo=new ue({props:{name:"call",anchor:"transformers.TFOPTForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/opt/modeling_tf_opt.py#L892",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gt=new To({props:{anchor:"transformers.TFOPTForCausalLM.call.example",$$slots:{default:[mi]},$$scope:{ctx:C}}}),to=new et({}),oo=new ue({props:{name:"class transformers.FlaxOPTModel",anchor:"transformers.FlaxOPTModel",parameters:[{name:"config",val:": OPTConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/opt/modeling_flax_opt.py#L693"}}),no=new ue({props:{name:"__call__",anchor:"transformers.FlaxOPTModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"deterministic",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/opt/modeling_flax_opt.py#L585",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vt=new To({props:{anchor:"transformers.FlaxOPTModel.__call__.example",$$slots:{default:[gi]},$$scope:{ctx:C}}}),so=new et({}),ao=new ue({props:{name:"class transformers.FlaxOPTForCausalLM",anchor:"transformers.FlaxOPTForCausalLM",parameters:[{name:"config",val:": OPTConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxOPTForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxOPTForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/opt/modeling_flax_opt.py#L769"}}),fo=new ue({props:{name:"__call__",anchor:"transformers.FlaxOPTForCausalLM.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"deterministic",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/opt/modeling_flax_opt.py#L585",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),kt=new To({props:{anchor:"transformers.FlaxOPTForCausalLM.__call__.example",$$slots:{default:[_i]},$$scope:{ctx:C}}}),{c(){d=n("meta"),y=u(),_=n("h1"),c=n("a"),v=n("span"),b(r.$$.fragment),m=u(),q=n("span"),ve=i("OPT"),oe=u(),F=n("h2"),V=n("a"),D=n("span"),b(J.$$.fragment),ye=u(),S=n("span"),be=i("Overview"),he=u(),A=n("p"),W=i("The OPT model was proposed in "),Z=n("a"),re=i("Open Pre-trained Transformer Language Models"),z=i(` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),L=u(),ne=n("p"),X=i("The abstract from the paper is the following:"),fe=u(),se=n("p"),G=n("em"),ke=i("Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),me=u(),j=n("p"),we=i("Tips:"),R=u(),K=n("ul"),Y=n("li"),Q=i("OPT has the same architecture as "),ie=n("code"),Pe=i("BartDecoder"),H=i("."),$e=u(),E=n("li"),Oe=i("Contrary to GPT2, OPT adds the EOS token "),T=n("code"),M=i("</s>"),le=i(" to the beginning of every prompt. "),Fe=n("strong"),Le=i("Note"),U=i(": Make sure to pass "),Me=n("code"),Ne=i("use_fast=False"),Ie=i(" when loading OPT\u2019s tokenizer with "),N=n("a"),ee=i("AutoTokenizer"),Ae=i(" to get the correct tokenizer."),Ee=u(),x=n("p"),De=i("This model was contributed by "),de=n("a"),xe=i("Arthur Zucker"),Se=i(", "),Mt=n("a"),Xn=i("Younes Belkada"),Yn=i(", and "),xt=n("a"),Qn=i("Patrick Von Platen"),es=i(`.
The original code can be found `),zt=n("a"),ts=i("here"),os=i("."),un=u(),We=n("h2"),tt=n("a"),qo=n("span"),b(Et.$$.fragment),ns=u(),Lo=n("span"),ss=i("OPTConfig"),hn=u(),ce=n("div"),b(Ct.$$.fragment),as=u(),Ge=n("p"),rs=i("This is the configuration class to store the configuration of a "),bo=n("a"),is=i("OPTModel"),ls=i(`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),jt=n("a"),ds=i("facebook/opt-350m"),cs=i(" architecture."),ps=u(),He=n("p"),us=i("Configuration objects inherit from "),ko=n("a"),hs=i("PretrainedConfig"),fs=i(` and can be used to control the model outputs. Read the
documentation from `),wo=n("a"),ms=i("PretrainedConfig"),gs=i(" for more information."),_s=u(),b(ot.$$.fragment),fn=u(),Ue=n("h2"),nt=n("a"),No=n("span"),b(qt.$$.fragment),Ts=u(),Io=n("span"),vs=i("OPTModel"),mn=u(),pe=n("div"),b(Lt.$$.fragment),ys=u(),Nt=n("p"),bs=i(`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Po=n("a"),ks=i("PreTrainedModel"),ws=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ps=u(),It=n("p"),$s=i("This model is also a PyTorch "),At=n("a"),Os=i("torch.nn.Module"),Fs=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ms=u(),ge=n("div"),b(Dt.$$.fragment),xs=u(),Be=n("p"),zs=i("The "),$o=n("a"),Es=i("OPTModel"),Cs=i(" forward method, overrides the "),Ao=n("code"),js=i("__call__"),qs=i(" special method."),Ls=u(),b(st.$$.fragment),Ns=u(),b(at.$$.fragment),gn=u(),Ve=n("h2"),rt=n("a"),Do=n("span"),b(St.$$.fragment),Is=u(),So=n("span"),As=i("OPTForCausalLM"),_n=u(),Re=n("div"),b(Wt.$$.fragment),Ds=u(),it=n("div"),b(Gt.$$.fragment),Ss=u(),b(lt.$$.fragment),Tn=u(),Ke=n("h2"),dt=n("a"),Wo=n("span"),b(Ht.$$.fragment),Ws=u(),Go=n("span"),Gs=i("TFOPTModel"),vn=u(),te=n("div"),b(Ut.$$.fragment),Hs=u(),Bt=n("p"),Us=i(`The bare TF OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Oo=n("a"),Bs=i("TFPreTrainedModel"),Vs=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rs=u(),Vt=n("p"),Ks=i("This model is also a "),Rt=n("a"),Js=i("tf.keras.Model"),Zs=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xs=u(),b(ct.$$.fragment),Ys=u(),_e=n("div"),b(Kt.$$.fragment),Qs=u(),Je=n("p"),ea=i("The "),Fo=n("a"),ta=i("TFOPTModel"),oa=i(" forward method, overrides the "),Ho=n("code"),na=i("__call__"),sa=i(" special method."),aa=u(),b(pt.$$.fragment),ra=u(),b(ut.$$.fragment),yn=u(),Ze=n("h2"),ht=n("a"),Uo=n("span"),b(Jt.$$.fragment),ia=u(),Bo=n("span"),la=i("TFOPTForCausalLM"),bn=u(),B=n("div"),b(Zt.$$.fragment),da=u(),Vo=n("p"),ca=i("The OPT Model transformer with a language modeling head on top."),pa=u(),Xt=n("p"),ua=i("This model inherits from "),Mo=n("a"),ha=i("TFPreTrainedModel"),fa=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ma=u(),Yt=n("p"),ga=i("This model is also a "),Qt=n("a"),_a=i("tf.keras.Model"),Ta=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),va=u(),b(ft.$$.fragment),ya=u(),mt=n("div"),b(eo.$$.fragment),ba=u(),b(gt.$$.fragment),kn=u(),Xe=n("h2"),_t=n("a"),Ro=n("span"),b(to.$$.fragment),ka=u(),Ko=n("span"),wa=i("FlaxOPTModel"),wn=u(),Ye=n("div"),b(oo.$$.fragment),Pa=u(),Tt=n("div"),b(no.$$.fragment),$a=u(),b(vt.$$.fragment),Pn=u(),Qe=n("h2"),yt=n("a"),Jo=n("span"),b(so.$$.fragment),Oa=u(),Zo=n("span"),Fa=i("FlaxOPTForCausalLM"),$n=u(),I=n("div"),b(ao.$$.fragment),Ma=u(),Xo=n("p"),xa=i(`OPT Model with a language modeling head on top (linear layer with weights tied to the input embeddings) e.g for
autoregressive tasks.`),za=u(),ro=n("p"),Ea=i("This model inherits from "),xo=n("a"),Ca=i("FlaxPreTrainedModel"),ja=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qa=u(),io=n("p"),La=i(`This model is also a Flax Linen
`),lo=n("a"),Na=i("flax.nn.Module"),Ia=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Aa=u(),Yo=n("p"),Da=i("Finally, this model supports inherent JAX features such as:"),Sa=u(),ze=n("ul"),Qo=n("li"),co=n("a"),Wa=i("Just-In-Time (JIT) compilation"),Ga=u(),en=n("li"),po=n("a"),Ha=i("Automatic Differentiation"),Ua=u(),tn=n("li"),uo=n("a"),Ba=i("Vectorization"),Va=u(),on=n("li"),ho=n("a"),Ra=i("Parallelization"),Ka=u(),bt=n("div"),b(fo.$$.fragment),Ja=u(),b(kt.$$.fragment),this.h()},l(o){const g=ai('[data-svelte="svelte-1phssyn"]',document.head);d=s(g,"META",{name:!0,content:!0}),g.forEach(t),y=h(o),_=s(o,"H1",{class:!0});var mo=a(_);c=s(mo,"A",{id:!0,class:!0,href:!0});var nn=a(c);v=s(nn,"SPAN",{});var sn=a(v);k(r.$$.fragment,sn),sn.forEach(t),nn.forEach(t),m=h(mo),q=s(mo,"SPAN",{});var an=a(q);ve=l(an,"OPT"),an.forEach(t),mo.forEach(t),oe=h(o),F=s(o,"H2",{class:!0});var go=a(F);V=s(go,"A",{id:!0,class:!0,href:!0});var rn=a(V);D=s(rn,"SPAN",{});var ln=a(D);k(J.$$.fragment,ln),ln.forEach(t),rn.forEach(t),ye=h(go),S=s(go,"SPAN",{});var dn=a(S);be=l(dn,"Overview"),dn.forEach(t),go.forEach(t),he=h(o),A=s(o,"P",{});var _o=a(A);W=l(_o,"The OPT model was proposed in "),Z=s(_o,"A",{href:!0,rel:!0});var cn=a(Z);re=l(cn,"Open Pre-trained Transformer Language Models"),cn.forEach(t),z=l(_o,` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),_o.forEach(t),L=h(o),ne=s(o,"P",{});var pn=a(ne);X=l(pn,"The abstract from the paper is the following:"),pn.forEach(t),fe=h(o),se=s(o,"P",{});var Za=a(se);G=s(Za,"EM",{});var Xa=a(G);ke=l(Xa,"Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),Xa.forEach(t),Za.forEach(t),me=h(o),j=s(o,"P",{});var Ya=a(j);we=l(Ya,"Tips:"),Ya.forEach(t),R=h(o),K=s(o,"UL",{});var Fn=a(K);Y=s(Fn,"LI",{});var Mn=a(Y);Q=l(Mn,"OPT has the same architecture as "),ie=s(Mn,"CODE",{});var Qa=a(ie);Pe=l(Qa,"BartDecoder"),Qa.forEach(t),H=l(Mn,"."),Mn.forEach(t),$e=h(Fn),E=s(Fn,"LI",{});var Ce=a(E);Oe=l(Ce,"Contrary to GPT2, OPT adds the EOS token "),T=s(Ce,"CODE",{});var er=a(T);M=l(er,"</s>"),er.forEach(t),le=l(Ce," to the beginning of every prompt. "),Fe=s(Ce,"STRONG",{});var tr=a(Fe);Le=l(tr,"Note"),tr.forEach(t),U=l(Ce,": Make sure to pass "),Me=s(Ce,"CODE",{});var or=a(Me);Ne=l(or,"use_fast=False"),or.forEach(t),Ie=l(Ce," when loading OPT\u2019s tokenizer with "),N=s(Ce,"A",{href:!0});var nr=a(N);ee=l(nr,"AutoTokenizer"),nr.forEach(t),Ae=l(Ce," to get the correct tokenizer."),Ce.forEach(t),Fn.forEach(t),Ee=h(o),x=s(o,"P",{});var je=a(x);De=l(je,"This model was contributed by "),de=s(je,"A",{href:!0,rel:!0});var sr=a(de);xe=l(sr,"Arthur Zucker"),sr.forEach(t),Se=l(je,", "),Mt=s(je,"A",{href:!0,rel:!0});var ar=a(Mt);Xn=l(ar,"Younes Belkada"),ar.forEach(t),Yn=l(je,", and "),xt=s(je,"A",{href:!0,rel:!0});var rr=a(xt);Qn=l(rr,"Patrick Von Platen"),rr.forEach(t),es=l(je,`.
The original code can be found `),zt=s(je,"A",{href:!0,rel:!0});var ir=a(zt);ts=l(ir,"here"),ir.forEach(t),os=l(je,"."),je.forEach(t),un=h(o),We=s(o,"H2",{class:!0});var xn=a(We);tt=s(xn,"A",{id:!0,class:!0,href:!0});var lr=a(tt);qo=s(lr,"SPAN",{});var dr=a(qo);k(Et.$$.fragment,dr),dr.forEach(t),lr.forEach(t),ns=h(xn),Lo=s(xn,"SPAN",{});var cr=a(Lo);ss=l(cr,"OPTConfig"),cr.forEach(t),xn.forEach(t),hn=h(o),ce=s(o,"DIV",{class:!0});var wt=a(ce);k(Ct.$$.fragment,wt),as=h(wt),Ge=s(wt,"P",{});var zo=a(Ge);rs=l(zo,"This is the configuration class to store the configuration of a "),bo=s(zo,"A",{href:!0});var pr=a(bo);is=l(pr,"OPTModel"),pr.forEach(t),ls=l(zo,`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),jt=s(zo,"A",{href:!0,rel:!0});var ur=a(jt);ds=l(ur,"facebook/opt-350m"),ur.forEach(t),cs=l(zo," architecture."),zo.forEach(t),ps=h(wt),He=s(wt,"P",{});var Eo=a(He);us=l(Eo,"Configuration objects inherit from "),ko=s(Eo,"A",{href:!0});var hr=a(ko);hs=l(hr,"PretrainedConfig"),hr.forEach(t),fs=l(Eo,` and can be used to control the model outputs. Read the
documentation from `),wo=s(Eo,"A",{href:!0});var fr=a(wo);ms=l(fr,"PretrainedConfig"),fr.forEach(t),gs=l(Eo," for more information."),Eo.forEach(t),_s=h(wt),k(ot.$$.fragment,wt),wt.forEach(t),fn=h(o),Ue=s(o,"H2",{class:!0});var zn=a(Ue);nt=s(zn,"A",{id:!0,class:!0,href:!0});var mr=a(nt);No=s(mr,"SPAN",{});var gr=a(No);k(qt.$$.fragment,gr),gr.forEach(t),mr.forEach(t),Ts=h(zn),Io=s(zn,"SPAN",{});var _r=a(Io);vs=l(_r,"OPTModel"),_r.forEach(t),zn.forEach(t),mn=h(o),pe=s(o,"DIV",{class:!0});var Pt=a(pe);k(Lt.$$.fragment,Pt),ys=h(Pt),Nt=s(Pt,"P",{});var En=a(Nt);bs=l(En,`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Po=s(En,"A",{href:!0});var Tr=a(Po);ks=l(Tr,"PreTrainedModel"),Tr.forEach(t),ws=l(En,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),En.forEach(t),Ps=h(Pt),It=s(Pt,"P",{});var Cn=a(It);$s=l(Cn,"This model is also a PyTorch "),At=s(Cn,"A",{href:!0,rel:!0});var vr=a(At);Os=l(vr,"torch.nn.Module"),vr.forEach(t),Fs=l(Cn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cn.forEach(t),Ms=h(Pt),ge=s(Pt,"DIV",{class:!0});var $t=a(ge);k(Dt.$$.fragment,$t),xs=h($t),Be=s($t,"P",{});var Co=a(Be);zs=l(Co,"The "),$o=s(Co,"A",{href:!0});var yr=a($o);Es=l(yr,"OPTModel"),yr.forEach(t),Cs=l(Co," forward method, overrides the "),Ao=s(Co,"CODE",{});var br=a(Ao);js=l(br,"__call__"),br.forEach(t),qs=l(Co," special method."),Co.forEach(t),Ls=h($t),k(st.$$.fragment,$t),Ns=h($t),k(at.$$.fragment,$t),$t.forEach(t),Pt.forEach(t),gn=h(o),Ve=s(o,"H2",{class:!0});var jn=a(Ve);rt=s(jn,"A",{id:!0,class:!0,href:!0});var kr=a(rt);Do=s(kr,"SPAN",{});var wr=a(Do);k(St.$$.fragment,wr),wr.forEach(t),kr.forEach(t),Is=h(jn),So=s(jn,"SPAN",{});var Pr=a(So);As=l(Pr,"OPTForCausalLM"),Pr.forEach(t),jn.forEach(t),_n=h(o),Re=s(o,"DIV",{class:!0});var qn=a(Re);k(Wt.$$.fragment,qn),Ds=h(qn),it=s(qn,"DIV",{class:!0});var Ln=a(it);k(Gt.$$.fragment,Ln),Ss=h(Ln),k(lt.$$.fragment,Ln),Ln.forEach(t),qn.forEach(t),Tn=h(o),Ke=s(o,"H2",{class:!0});var Nn=a(Ke);dt=s(Nn,"A",{id:!0,class:!0,href:!0});var $r=a(dt);Wo=s($r,"SPAN",{});var Or=a(Wo);k(Ht.$$.fragment,Or),Or.forEach(t),$r.forEach(t),Ws=h(Nn),Go=s(Nn,"SPAN",{});var Fr=a(Go);Gs=l(Fr,"TFOPTModel"),Fr.forEach(t),Nn.forEach(t),vn=h(o),te=s(o,"DIV",{class:!0});var qe=a(te);k(Ut.$$.fragment,qe),Hs=h(qe),Bt=s(qe,"P",{});var In=a(Bt);Us=l(In,`The bare TF OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Oo=s(In,"A",{href:!0});var Mr=a(Oo);Bs=l(Mr,"TFPreTrainedModel"),Mr.forEach(t),Vs=l(In,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),In.forEach(t),Rs=h(qe),Vt=s(qe,"P",{});var An=a(Vt);Ks=l(An,"This model is also a "),Rt=s(An,"A",{href:!0,rel:!0});var xr=a(Rt);Js=l(xr,"tf.keras.Model"),xr.forEach(t),Zs=l(An,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),An.forEach(t),Xs=h(qe),k(ct.$$.fragment,qe),Ys=h(qe),_e=s(qe,"DIV",{class:!0});var Ot=a(_e);k(Kt.$$.fragment,Ot),Qs=h(Ot),Je=s(Ot,"P",{});var jo=a(Je);ea=l(jo,"The "),Fo=s(jo,"A",{href:!0});var zr=a(Fo);ta=l(zr,"TFOPTModel"),zr.forEach(t),oa=l(jo," forward method, overrides the "),Ho=s(jo,"CODE",{});var Er=a(Ho);na=l(Er,"__call__"),Er.forEach(t),sa=l(jo," special method."),jo.forEach(t),aa=h(Ot),k(pt.$$.fragment,Ot),ra=h(Ot),k(ut.$$.fragment,Ot),Ot.forEach(t),qe.forEach(t),yn=h(o),Ze=s(o,"H2",{class:!0});var Dn=a(Ze);ht=s(Dn,"A",{id:!0,class:!0,href:!0});var Cr=a(ht);Uo=s(Cr,"SPAN",{});var jr=a(Uo);k(Jt.$$.fragment,jr),jr.forEach(t),Cr.forEach(t),ia=h(Dn),Bo=s(Dn,"SPAN",{});var qr=a(Bo);la=l(qr,"TFOPTForCausalLM"),qr.forEach(t),Dn.forEach(t),bn=h(o),B=s(o,"DIV",{class:!0});var Te=a(B);k(Zt.$$.fragment,Te),da=h(Te),Vo=s(Te,"P",{});var Lr=a(Vo);ca=l(Lr,"The OPT Model transformer with a language modeling head on top."),Lr.forEach(t),pa=h(Te),Xt=s(Te,"P",{});var Sn=a(Xt);ua=l(Sn,"This model inherits from "),Mo=s(Sn,"A",{href:!0});var Nr=a(Mo);ha=l(Nr,"TFPreTrainedModel"),Nr.forEach(t),fa=l(Sn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sn.forEach(t),ma=h(Te),Yt=s(Te,"P",{});var Wn=a(Yt);ga=l(Wn,"This model is also a "),Qt=s(Wn,"A",{href:!0,rel:!0});var Ir=a(Qt);_a=l(Ir,"tf.keras.Model"),Ir.forEach(t),Ta=l(Wn,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wn.forEach(t),va=h(Te),k(ft.$$.fragment,Te),ya=h(Te),mt=s(Te,"DIV",{class:!0});var Gn=a(mt);k(eo.$$.fragment,Gn),ba=h(Gn),k(gt.$$.fragment,Gn),Gn.forEach(t),Te.forEach(t),kn=h(o),Xe=s(o,"H2",{class:!0});var Hn=a(Xe);_t=s(Hn,"A",{id:!0,class:!0,href:!0});var Ar=a(_t);Ro=s(Ar,"SPAN",{});var Dr=a(Ro);k(to.$$.fragment,Dr),Dr.forEach(t),Ar.forEach(t),ka=h(Hn),Ko=s(Hn,"SPAN",{});var Sr=a(Ko);wa=l(Sr,"FlaxOPTModel"),Sr.forEach(t),Hn.forEach(t),wn=h(o),Ye=s(o,"DIV",{class:!0});var Un=a(Ye);k(oo.$$.fragment,Un),Pa=h(Un),Tt=s(Un,"DIV",{class:!0});var Bn=a(Tt);k(no.$$.fragment,Bn),$a=h(Bn),k(vt.$$.fragment,Bn),Bn.forEach(t),Un.forEach(t),Pn=h(o),Qe=s(o,"H2",{class:!0});var Vn=a(Qe);yt=s(Vn,"A",{id:!0,class:!0,href:!0});var Wr=a(yt);Jo=s(Wr,"SPAN",{});var Gr=a(Jo);k(so.$$.fragment,Gr),Gr.forEach(t),Wr.forEach(t),Oa=h(Vn),Zo=s(Vn,"SPAN",{});var Hr=a(Zo);Fa=l(Hr,"FlaxOPTForCausalLM"),Hr.forEach(t),Vn.forEach(t),$n=h(o),I=s(o,"DIV",{class:!0});var ae=a(I);k(ao.$$.fragment,ae),Ma=h(ae),Xo=s(ae,"P",{});var Ur=a(Xo);xa=l(Ur,`OPT Model with a language modeling head on top (linear layer with weights tied to the input embeddings) e.g for
autoregressive tasks.`),Ur.forEach(t),za=h(ae),ro=s(ae,"P",{});var Rn=a(ro);Ea=l(Rn,"This model inherits from "),xo=s(Rn,"A",{href:!0});var Br=a(xo);Ca=l(Br,"FlaxPreTrainedModel"),Br.forEach(t),ja=l(Rn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rn.forEach(t),qa=h(ae),io=s(ae,"P",{});var Kn=a(io);La=l(Kn,`This model is also a Flax Linen
`),lo=s(Kn,"A",{href:!0,rel:!0});var Vr=a(lo);Na=l(Vr,"flax.nn.Module"),Vr.forEach(t),Ia=l(Kn,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Kn.forEach(t),Aa=h(ae),Yo=s(ae,"P",{});var Rr=a(Yo);Da=l(Rr,"Finally, this model supports inherent JAX features such as:"),Rr.forEach(t),Sa=h(ae),ze=s(ae,"UL",{});var Ft=a(ze);Qo=s(Ft,"LI",{});var Kr=a(Qo);co=s(Kr,"A",{href:!0,rel:!0});var Jr=a(co);Wa=l(Jr,"Just-In-Time (JIT) compilation"),Jr.forEach(t),Kr.forEach(t),Ga=h(Ft),en=s(Ft,"LI",{});var Zr=a(en);po=s(Zr,"A",{href:!0,rel:!0});var Xr=a(po);Ha=l(Xr,"Automatic Differentiation"),Xr.forEach(t),Zr.forEach(t),Ua=h(Ft),tn=s(Ft,"LI",{});var Yr=a(tn);uo=s(Yr,"A",{href:!0,rel:!0});var Qr=a(uo);Ba=l(Qr,"Vectorization"),Qr.forEach(t),Yr.forEach(t),Va=h(Ft),on=s(Ft,"LI",{});var ei=a(on);ho=s(ei,"A",{href:!0,rel:!0});var ti=a(ho);Ra=l(ti,"Parallelization"),ti.forEach(t),ei.forEach(t),Ft.forEach(t),Ka=h(ae),bt=s(ae,"DIV",{class:!0});var Jn=a(bt);k(fo.$$.fragment,Jn),Ja=h(Jn),k(kt.$$.fragment,Jn),Jn.forEach(t),ae.forEach(t),this.h()},h(){p(d,"name","hf:doc:metadata"),p(d,"content",JSON.stringify(vi)),p(c,"id","opt"),p(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(c,"href","#opt"),p(_,"class","relative group"),p(V,"id","overview"),p(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(V,"href","#overview"),p(F,"class","relative group"),p(Z,"href","https://arxiv.org/pdf/2205.01068"),p(Z,"rel","nofollow"),p(N,"href","/docs/transformers/v4.20.1/en/model_doc/auto#transformers.AutoTokenizer"),p(de,"href","https://huggingface.co/ArthurZ"),p(de,"rel","nofollow"),p(Mt,"href","https://huggingface.co/ybelkada"),p(Mt,"rel","nofollow"),p(xt,"href","https://huggingface.co/patrickvonplaten"),p(xt,"rel","nofollow"),p(zt,"href","https://github.com/facebookresearch/metaseq"),p(zt,"rel","nofollow"),p(tt,"id","transformers.OPTConfig"),p(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(tt,"href","#transformers.OPTConfig"),p(We,"class","relative group"),p(bo,"href","/docs/transformers/v4.20.1/en/model_doc/opt#transformers.OPTModel"),p(jt,"href","https://huggingface.co/facebook/opt-350m"),p(jt,"rel","nofollow"),p(ko,"href","/docs/transformers/v4.20.1/en/main_classes/configuration#transformers.PretrainedConfig"),p(wo,"href","/docs/transformers/v4.20.1/en/main_classes/configuration#transformers.PretrainedConfig"),p(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(nt,"id","transformers.OPTModel"),p(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(nt,"href","#transformers.OPTModel"),p(Ue,"class","relative group"),p(Po,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel"),p(At,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(At,"rel","nofollow"),p($o,"href","/docs/transformers/v4.20.1/en/model_doc/opt#transformers.OPTModel"),p(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(rt,"id","transformers.OPTForCausalLM"),p(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(rt,"href","#transformers.OPTForCausalLM"),p(Ve,"class","relative group"),p(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(dt,"id","transformers.TFOPTModel"),p(dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(dt,"href","#transformers.TFOPTModel"),p(Ke,"class","relative group"),p(Oo,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel"),p(Rt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Rt,"rel","nofollow"),p(Fo,"href","/docs/transformers/v4.20.1/en/model_doc/opt#transformers.TFOPTModel"),p(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ht,"id","transformers.TFOPTForCausalLM"),p(ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ht,"href","#transformers.TFOPTForCausalLM"),p(Ze,"class","relative group"),p(Mo,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel"),p(Qt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Qt,"rel","nofollow"),p(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(_t,"id","transformers.FlaxOPTModel"),p(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(_t,"href","#transformers.FlaxOPTModel"),p(Xe,"class","relative group"),p(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(yt,"id","transformers.FlaxOPTForCausalLM"),p(yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(yt,"href","#transformers.FlaxOPTForCausalLM"),p(Qe,"class","relative group"),p(xo,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),p(lo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),p(lo,"rel","nofollow"),p(co,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(co,"rel","nofollow"),p(po,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(po,"rel","nofollow"),p(uo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(uo,"rel","nofollow"),p(ho,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(ho,"rel","nofollow"),p(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,d),f(o,y,g),f(o,_,g),e(_,c),e(c,v),w(r,v,null),e(_,m),e(_,q),e(q,ve),f(o,oe,g),f(o,F,g),e(F,V),e(V,D),w(J,D,null),e(F,ye),e(F,S),e(S,be),f(o,he,g),f(o,A,g),e(A,W),e(A,Z),e(Z,re),e(A,z),f(o,L,g),f(o,ne,g),e(ne,X),f(o,fe,g),f(o,se,g),e(se,G),e(G,ke),f(o,me,g),f(o,j,g),e(j,we),f(o,R,g),f(o,K,g),e(K,Y),e(Y,Q),e(Y,ie),e(ie,Pe),e(Y,H),e(K,$e),e(K,E),e(E,Oe),e(E,T),e(T,M),e(E,le),e(E,Fe),e(Fe,Le),e(E,U),e(E,Me),e(Me,Ne),e(E,Ie),e(E,N),e(N,ee),e(E,Ae),f(o,Ee,g),f(o,x,g),e(x,De),e(x,de),e(de,xe),e(x,Se),e(x,Mt),e(Mt,Xn),e(x,Yn),e(x,xt),e(xt,Qn),e(x,es),e(x,zt),e(zt,ts),e(x,os),f(o,un,g),f(o,We,g),e(We,tt),e(tt,qo),w(Et,qo,null),e(We,ns),e(We,Lo),e(Lo,ss),f(o,hn,g),f(o,ce,g),w(Ct,ce,null),e(ce,as),e(ce,Ge),e(Ge,rs),e(Ge,bo),e(bo,is),e(Ge,ls),e(Ge,jt),e(jt,ds),e(Ge,cs),e(ce,ps),e(ce,He),e(He,us),e(He,ko),e(ko,hs),e(He,fs),e(He,wo),e(wo,ms),e(He,gs),e(ce,_s),w(ot,ce,null),f(o,fn,g),f(o,Ue,g),e(Ue,nt),e(nt,No),w(qt,No,null),e(Ue,Ts),e(Ue,Io),e(Io,vs),f(o,mn,g),f(o,pe,g),w(Lt,pe,null),e(pe,ys),e(pe,Nt),e(Nt,bs),e(Nt,Po),e(Po,ks),e(Nt,ws),e(pe,Ps),e(pe,It),e(It,$s),e(It,At),e(At,Os),e(It,Fs),e(pe,Ms),e(pe,ge),w(Dt,ge,null),e(ge,xs),e(ge,Be),e(Be,zs),e(Be,$o),e($o,Es),e(Be,Cs),e(Be,Ao),e(Ao,js),e(Be,qs),e(ge,Ls),w(st,ge,null),e(ge,Ns),w(at,ge,null),f(o,gn,g),f(o,Ve,g),e(Ve,rt),e(rt,Do),w(St,Do,null),e(Ve,Is),e(Ve,So),e(So,As),f(o,_n,g),f(o,Re,g),w(Wt,Re,null),e(Re,Ds),e(Re,it),w(Gt,it,null),e(it,Ss),w(lt,it,null),f(o,Tn,g),f(o,Ke,g),e(Ke,dt),e(dt,Wo),w(Ht,Wo,null),e(Ke,Ws),e(Ke,Go),e(Go,Gs),f(o,vn,g),f(o,te,g),w(Ut,te,null),e(te,Hs),e(te,Bt),e(Bt,Us),e(Bt,Oo),e(Oo,Bs),e(Bt,Vs),e(te,Rs),e(te,Vt),e(Vt,Ks),e(Vt,Rt),e(Rt,Js),e(Vt,Zs),e(te,Xs),w(ct,te,null),e(te,Ys),e(te,_e),w(Kt,_e,null),e(_e,Qs),e(_e,Je),e(Je,ea),e(Je,Fo),e(Fo,ta),e(Je,oa),e(Je,Ho),e(Ho,na),e(Je,sa),e(_e,aa),w(pt,_e,null),e(_e,ra),w(ut,_e,null),f(o,yn,g),f(o,Ze,g),e(Ze,ht),e(ht,Uo),w(Jt,Uo,null),e(Ze,ia),e(Ze,Bo),e(Bo,la),f(o,bn,g),f(o,B,g),w(Zt,B,null),e(B,da),e(B,Vo),e(Vo,ca),e(B,pa),e(B,Xt),e(Xt,ua),e(Xt,Mo),e(Mo,ha),e(Xt,fa),e(B,ma),e(B,Yt),e(Yt,ga),e(Yt,Qt),e(Qt,_a),e(Yt,Ta),e(B,va),w(ft,B,null),e(B,ya),e(B,mt),w(eo,mt,null),e(mt,ba),w(gt,mt,null),f(o,kn,g),f(o,Xe,g),e(Xe,_t),e(_t,Ro),w(to,Ro,null),e(Xe,ka),e(Xe,Ko),e(Ko,wa),f(o,wn,g),f(o,Ye,g),w(oo,Ye,null),e(Ye,Pa),e(Ye,Tt),w(no,Tt,null),e(Tt,$a),w(vt,Tt,null),f(o,Pn,g),f(o,Qe,g),e(Qe,yt),e(yt,Jo),w(so,Jo,null),e(Qe,Oa),e(Qe,Zo),e(Zo,Fa),f(o,$n,g),f(o,I,g),w(ao,I,null),e(I,Ma),e(I,Xo),e(Xo,xa),e(I,za),e(I,ro),e(ro,Ea),e(ro,xo),e(xo,Ca),e(ro,ja),e(I,qa),e(I,io),e(io,La),e(io,lo),e(lo,Na),e(io,Ia),e(I,Aa),e(I,Yo),e(Yo,Da),e(I,Sa),e(I,ze),e(ze,Qo),e(Qo,co),e(co,Wa),e(ze,Ga),e(ze,en),e(en,po),e(po,Ha),e(ze,Ua),e(ze,tn),e(tn,uo),e(uo,Ba),e(ze,Va),e(ze,on),e(on,ho),e(ho,Ra),e(I,Ka),e(I,bt),w(fo,bt,null),e(bt,Ja),w(kt,bt,null),On=!0},p(o,[g]){const mo={};g&2&&(mo.$$scope={dirty:g,ctx:o}),ot.$set(mo);const nn={};g&2&&(nn.$$scope={dirty:g,ctx:o}),st.$set(nn);const sn={};g&2&&(sn.$$scope={dirty:g,ctx:o}),at.$set(sn);const an={};g&2&&(an.$$scope={dirty:g,ctx:o}),lt.$set(an);const go={};g&2&&(go.$$scope={dirty:g,ctx:o}),ct.$set(go);const rn={};g&2&&(rn.$$scope={dirty:g,ctx:o}),pt.$set(rn);const ln={};g&2&&(ln.$$scope={dirty:g,ctx:o}),ut.$set(ln);const dn={};g&2&&(dn.$$scope={dirty:g,ctx:o}),ft.$set(dn);const _o={};g&2&&(_o.$$scope={dirty:g,ctx:o}),gt.$set(_o);const cn={};g&2&&(cn.$$scope={dirty:g,ctx:o}),vt.$set(cn);const pn={};g&2&&(pn.$$scope={dirty:g,ctx:o}),kt.$set(pn)},i(o){On||(P(r.$$.fragment,o),P(J.$$.fragment,o),P(Et.$$.fragment,o),P(Ct.$$.fragment,o),P(ot.$$.fragment,o),P(qt.$$.fragment,o),P(Lt.$$.fragment,o),P(Dt.$$.fragment,o),P(st.$$.fragment,o),P(at.$$.fragment,o),P(St.$$.fragment,o),P(Wt.$$.fragment,o),P(Gt.$$.fragment,o),P(lt.$$.fragment,o),P(Ht.$$.fragment,o),P(Ut.$$.fragment,o),P(ct.$$.fragment,o),P(Kt.$$.fragment,o),P(pt.$$.fragment,o),P(ut.$$.fragment,o),P(Jt.$$.fragment,o),P(Zt.$$.fragment,o),P(ft.$$.fragment,o),P(eo.$$.fragment,o),P(gt.$$.fragment,o),P(to.$$.fragment,o),P(oo.$$.fragment,o),P(no.$$.fragment,o),P(vt.$$.fragment,o),P(so.$$.fragment,o),P(ao.$$.fragment,o),P(fo.$$.fragment,o),P(kt.$$.fragment,o),On=!0)},o(o){$(r.$$.fragment,o),$(J.$$.fragment,o),$(Et.$$.fragment,o),$(Ct.$$.fragment,o),$(ot.$$.fragment,o),$(qt.$$.fragment,o),$(Lt.$$.fragment,o),$(Dt.$$.fragment,o),$(st.$$.fragment,o),$(at.$$.fragment,o),$(St.$$.fragment,o),$(Wt.$$.fragment,o),$(Gt.$$.fragment,o),$(lt.$$.fragment,o),$(Ht.$$.fragment,o),$(Ut.$$.fragment,o),$(ct.$$.fragment,o),$(Kt.$$.fragment,o),$(pt.$$.fragment,o),$(ut.$$.fragment,o),$(Jt.$$.fragment,o),$(Zt.$$.fragment,o),$(ft.$$.fragment,o),$(eo.$$.fragment,o),$(gt.$$.fragment,o),$(to.$$.fragment,o),$(oo.$$.fragment,o),$(no.$$.fragment,o),$(vt.$$.fragment,o),$(so.$$.fragment,o),$(ao.$$.fragment,o),$(fo.$$.fragment,o),$(kt.$$.fragment,o),On=!1},d(o){t(d),o&&t(y),o&&t(_),O(r),o&&t(oe),o&&t(F),O(J),o&&t(he),o&&t(A),o&&t(L),o&&t(ne),o&&t(fe),o&&t(se),o&&t(me),o&&t(j),o&&t(R),o&&t(K),o&&t(Ee),o&&t(x),o&&t(un),o&&t(We),O(Et),o&&t(hn),o&&t(ce),O(Ct),O(ot),o&&t(fn),o&&t(Ue),O(qt),o&&t(mn),o&&t(pe),O(Lt),O(Dt),O(st),O(at),o&&t(gn),o&&t(Ve),O(St),o&&t(_n),o&&t(Re),O(Wt),O(Gt),O(lt),o&&t(Tn),o&&t(Ke),O(Ht),o&&t(vn),o&&t(te),O(Ut),O(ct),O(Kt),O(pt),O(ut),o&&t(yn),o&&t(Ze),O(Jt),o&&t(bn),o&&t(B),O(Zt),O(ft),O(eo),O(gt),o&&t(kn),o&&t(Xe),O(to),o&&t(wn),o&&t(Ye),O(oo),O(no),O(vt),o&&t(Pn),o&&t(Qe),O(so),o&&t($n),o&&t(I),O(ao),O(fo),O(kt)}}}const vi={local:"opt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OPTConfig",title:"OPTConfig"},{local:"transformers.OPTModel",title:"OPTModel"},{local:"transformers.OPTForCausalLM",title:"OPTForCausalLM"},{local:"transformers.TFOPTModel",title:"TFOPTModel"},{local:"transformers.TFOPTForCausalLM",title:"TFOPTForCausalLM"},{local:"transformers.FlaxOPTModel",title:"FlaxOPTModel"},{local:"transformers.FlaxOPTForCausalLM",title:"FlaxOPTForCausalLM"}],title:"OPT"};function yi(C){return ri(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Fi extends oi{constructor(d){super();ni(this,d,yi,Ti,si,{})}}export{Fi as default,vi as metadata};
