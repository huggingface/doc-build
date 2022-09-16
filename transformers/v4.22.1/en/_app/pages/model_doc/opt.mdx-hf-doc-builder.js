import{S as Nl,i as Il,s as Sl,e as n,k as c,w as b,t as r,M as Dl,c as s,d as t,m as p,a,x as k,h as i,b as f,G as e,g,y as w,q as $,o as P,B as O,v as Wl,L as et}from"../../chunks/vendor-hf-doc-builder.js";import{T as rs}from"../../chunks/Tip-hf-doc-builder.js";import{D as ue}from"../../chunks/Docstring-hf-doc-builder.js";import{C as tt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as it}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Qe}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Gl(M){let d,T,h,m,v;return m=new tt({props:{code:`from transformers import OPTModel, OPTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),T=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);T=i(u,"Example:"),u.forEach(t),h=p(l),k(m.$$.fragment,l)},m(l,u){g(l,d,u),e(d,T),g(l,h,u),w(m,l,u),v=!0},p:et,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),O(m,l)}}}function Hl(M){let d,T,h,m,v;return{c(){d=n("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var E=a(h);m=i(E,"Module"),E.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,T),e(d,h),e(h,m),e(d,v)},d(l){l&&t(d)}}}function Bl(M){let d,T,h,m,v;return m=new tt({props:{code:`from transformers import GPT2Tokenizer, OPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),T=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);T=i(u,"Example:"),u.forEach(t),h=p(l),k(m.$$.fragment,l)},m(l,u){g(l,d,u),e(d,T),g(l,h,u),w(m,l,u),v=!0},p:et,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),O(m,l)}}}function Ul(M){let d,T,h,m,v;return m=new tt({props:{code:`from transformers import GPT2Tokenizer, OPTForCausalLM

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
<span class="hljs-string">&quot;Hey, are you consciours? Can you talk to me?\\nI&#x27;m not consciours, but I can talk to you.&quot;</span>`}}),{c(){d=n("p"),T=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);T=i(u,"Example:"),u.forEach(t),h=p(l),k(m.$$.fragment,l)},m(l,u){g(l,d,u),e(d,T),g(l,h,u),w(m,l,u),v=!0},p:et,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),O(m,l)}}}function Vl(M){let d,T,h,m,v,l,u,E,je,Oe,L,oe,se,F,Le,X,Ae,Fe,W,Ne,ae,re,Ie,Me,K,Se,xe,Z,Te,De,he,z,A,Ce,G,ie,We,Y,Ge,He,N,I,le,ve,Be,de,ye,Ue,Q,be,ce,Ve,ne,S,Ke,H,j,Ze;return{c(){d=n("p"),T=r("TensorFlow models and layers in "),h=n("code"),m=r("transformers"),v=r(" accept two formats as input:"),l=c(),u=n("ul"),E=n("li"),je=r("having all inputs as keyword arguments (like PyTorch models), or"),Oe=c(),L=n("li"),oe=r("having all inputs as a list, tuple or dict in the first positional argument."),se=c(),F=n("p"),Le=r(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),X=n("code"),Ae=r("model.fit()"),Fe=r(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=n("code"),Ne=r("model.fit()"),ae=r(` supports! If, however, you want to use the second
format outside of Keras methods like `),re=n("code"),Ie=r("fit()"),Me=r(" and "),K=n("code"),Se=r("predict()"),xe=r(`, such as when creating your own layers or models with
the Keras `),Z=n("code"),Te=r("Functional"),De=r(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),he=c(),z=n("ul"),A=n("li"),Ce=r("a single Tensor with "),G=n("code"),ie=r("input_ids"),We=r(" only and nothing else: "),Y=n("code"),Ge=r("model(input_ids)"),He=c(),N=n("li"),I=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),le=n("code"),ve=r("model([input_ids, attention_mask])"),Be=r(" or "),de=n("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),Ue=c(),Q=n("li"),be=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ce=n("code"),Ve=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=c(),S=n("p"),Ke=r(`Note that when creating models and layers with
`),H=n("a"),j=r("subclassing"),Ze=r(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=s(y,"P",{});var x=a(d);T=i(x,"TensorFlow models and layers in "),h=s(x,"CODE",{});var lt=a(h);m=i(lt,"transformers"),lt.forEach(t),v=i(x," accept two formats as input:"),x.forEach(t),l=p(y),u=s(y,"UL",{});var ee=a(u);E=s(ee,"LI",{});var dt=a(E);je=i(dt,"having all inputs as keyword arguments (like PyTorch models), or"),dt.forEach(t),Oe=p(ee),L=s(ee,"LI",{});var ct=a(L);oe=i(ct,"having all inputs as a list, tuple or dict in the first positional argument."),ct.forEach(t),ee.forEach(t),se=p(y),F=s(y,"P",{});var C=a(F);Le=i(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),X=s(C,"CODE",{});var pt=a(X);Ae=i(pt,"model.fit()"),pt.forEach(t),Fe=i(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=s(C,"CODE",{});var ut=a(W);Ne=i(ut,"model.fit()"),ut.forEach(t),ae=i(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),re=s(C,"CODE",{});var ke=a(re);Ie=i(ke,"fit()"),ke.forEach(t),Me=i(C," and "),K=s(C,"CODE",{});var ht=a(K);Se=i(ht,"predict()"),ht.forEach(t),xe=i(C,`, such as when creating your own layers or models with
the Keras `),Z=s(C,"CODE",{});var mt=a(Z);Te=i(mt,"Functional"),mt.forEach(t),De=i(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),he=p(y),z=s(y,"UL",{});var R=a(z);A=s(R,"LI",{});var D=a(A);Ce=i(D,"a single Tensor with "),G=s(D,"CODE",{});var me=a(G);ie=i(me,"input_ids"),me.forEach(t),We=i(D," only and nothing else: "),Y=s(D,"CODE",{});var Re=a(Y);Ge=i(Re,"model(input_ids)"),Re.forEach(t),D.forEach(t),He=p(R),N=s(R,"LI",{});var B=a(N);I=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),le=s(B,"CODE",{});var ft=a(le);ve=i(ft,"model([input_ids, attention_mask])"),ft.forEach(t),Be=i(B," or "),de=s(B,"CODE",{});var Je=a(de);ye=i(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),B.forEach(t),Ue=p(R),Q=s(R,"LI",{});var Xe=a(Q);be=i(Xe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ce=s(Xe,"CODE",{});var ot=a(ce);Ve=i(ot,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ot.forEach(t),Xe.forEach(t),R.forEach(t),ne=p(y),S=s(y,"P",{});var q=a(S);Ke=i(q,`Note that when creating models and layers with
`),H=s(q,"A",{href:!0,rel:!0});var we=a(H);j=i(we,"subclassing"),we.forEach(t),Ze=i(q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),q.forEach(t),this.h()},h(){f(H,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(H,"rel","nofollow")},m(y,x){g(y,d,x),e(d,T),e(d,h),e(h,m),e(d,v),g(y,l,x),g(y,u,x),e(u,E),e(E,je),e(u,Oe),e(u,L),e(L,oe),g(y,se,x),g(y,F,x),e(F,Le),e(F,X),e(X,Ae),e(F,Fe),e(F,W),e(W,Ne),e(F,ae),e(F,re),e(re,Ie),e(F,Me),e(F,K),e(K,Se),e(F,xe),e(F,Z),e(Z,Te),e(F,De),g(y,he,x),g(y,z,x),e(z,A),e(A,Ce),e(A,G),e(G,ie),e(A,We),e(A,Y),e(Y,Ge),e(z,He),e(z,N),e(N,I),e(N,le),e(le,ve),e(N,Be),e(N,de),e(de,ye),e(z,Ue),e(z,Q),e(Q,be),e(Q,ce),e(ce,Ve),g(y,ne,x),g(y,S,x),e(S,Ke),e(S,H),e(H,j),e(S,Ze)},d(y){y&&t(d),y&&t(l),y&&t(u),y&&t(se),y&&t(F),y&&t(he),y&&t(z),y&&t(ne),y&&t(S)}}}function Kl(M){let d,T,h,m,v;return{c(){d=n("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var E=a(h);m=i(E,"Module"),E.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,T),e(d,h),e(h,m),e(d,v)},d(l){l&&t(d)}}}function Zl(M){let d,T,h,m,v;return m=new tt({props:{code:`from transformers import GPT2Tokenizer, TFOPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),T=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);T=i(u,"Example:"),u.forEach(t),h=p(l),k(m.$$.fragment,l)},m(l,u){g(l,d,u),e(d,T),g(l,h,u),w(m,l,u),v=!0},p:et,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),O(m,l)}}}function Rl(M){let d,T,h,m,v,l,u,E,je,Oe,L,oe,se,F,Le,X,Ae,Fe,W,Ne,ae,re,Ie,Me,K,Se,xe,Z,Te,De,he,z,A,Ce,G,ie,We,Y,Ge,He,N,I,le,ve,Be,de,ye,Ue,Q,be,ce,Ve,ne,S,Ke,H,j,Ze;return{c(){d=n("p"),T=r("TensorFlow models and layers in "),h=n("code"),m=r("transformers"),v=r(" accept two formats as input:"),l=c(),u=n("ul"),E=n("li"),je=r("having all inputs as keyword arguments (like PyTorch models), or"),Oe=c(),L=n("li"),oe=r("having all inputs as a list, tuple or dict in the first positional argument."),se=c(),F=n("p"),Le=r(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),X=n("code"),Ae=r("model.fit()"),Fe=r(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=n("code"),Ne=r("model.fit()"),ae=r(` supports! If, however, you want to use the second
format outside of Keras methods like `),re=n("code"),Ie=r("fit()"),Me=r(" and "),K=n("code"),Se=r("predict()"),xe=r(`, such as when creating your own layers or models with
the Keras `),Z=n("code"),Te=r("Functional"),De=r(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),he=c(),z=n("ul"),A=n("li"),Ce=r("a single Tensor with "),G=n("code"),ie=r("input_ids"),We=r(" only and nothing else: "),Y=n("code"),Ge=r("model(input_ids)"),He=c(),N=n("li"),I=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),le=n("code"),ve=r("model([input_ids, attention_mask])"),Be=r(" or "),de=n("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),Ue=c(),Q=n("li"),be=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ce=n("code"),Ve=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=c(),S=n("p"),Ke=r(`Note that when creating models and layers with
`),H=n("a"),j=r("subclassing"),Ze=r(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=s(y,"P",{});var x=a(d);T=i(x,"TensorFlow models and layers in "),h=s(x,"CODE",{});var lt=a(h);m=i(lt,"transformers"),lt.forEach(t),v=i(x," accept two formats as input:"),x.forEach(t),l=p(y),u=s(y,"UL",{});var ee=a(u);E=s(ee,"LI",{});var dt=a(E);je=i(dt,"having all inputs as keyword arguments (like PyTorch models), or"),dt.forEach(t),Oe=p(ee),L=s(ee,"LI",{});var ct=a(L);oe=i(ct,"having all inputs as a list, tuple or dict in the first positional argument."),ct.forEach(t),ee.forEach(t),se=p(y),F=s(y,"P",{});var C=a(F);Le=i(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),X=s(C,"CODE",{});var pt=a(X);Ae=i(pt,"model.fit()"),pt.forEach(t),Fe=i(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=s(C,"CODE",{});var ut=a(W);Ne=i(ut,"model.fit()"),ut.forEach(t),ae=i(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),re=s(C,"CODE",{});var ke=a(re);Ie=i(ke,"fit()"),ke.forEach(t),Me=i(C," and "),K=s(C,"CODE",{});var ht=a(K);Se=i(ht,"predict()"),ht.forEach(t),xe=i(C,`, such as when creating your own layers or models with
the Keras `),Z=s(C,"CODE",{});var mt=a(Z);Te=i(mt,"Functional"),mt.forEach(t),De=i(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),he=p(y),z=s(y,"UL",{});var R=a(z);A=s(R,"LI",{});var D=a(A);Ce=i(D,"a single Tensor with "),G=s(D,"CODE",{});var me=a(G);ie=i(me,"input_ids"),me.forEach(t),We=i(D," only and nothing else: "),Y=s(D,"CODE",{});var Re=a(Y);Ge=i(Re,"model(input_ids)"),Re.forEach(t),D.forEach(t),He=p(R),N=s(R,"LI",{});var B=a(N);I=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),le=s(B,"CODE",{});var ft=a(le);ve=i(ft,"model([input_ids, attention_mask])"),ft.forEach(t),Be=i(B," or "),de=s(B,"CODE",{});var Je=a(de);ye=i(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),B.forEach(t),Ue=p(R),Q=s(R,"LI",{});var Xe=a(Q);be=i(Xe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ce=s(Xe,"CODE",{});var ot=a(ce);Ve=i(ot,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ot.forEach(t),Xe.forEach(t),R.forEach(t),ne=p(y),S=s(y,"P",{});var q=a(S);Ke=i(q,`Note that when creating models and layers with
`),H=s(q,"A",{href:!0,rel:!0});var we=a(H);j=i(we,"subclassing"),we.forEach(t),Ze=i(q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),q.forEach(t),this.h()},h(){f(H,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(H,"rel","nofollow")},m(y,x){g(y,d,x),e(d,T),e(d,h),e(h,m),e(d,v),g(y,l,x),g(y,u,x),e(u,E),e(E,je),e(u,Oe),e(u,L),e(L,oe),g(y,se,x),g(y,F,x),e(F,Le),e(F,X),e(X,Ae),e(F,Fe),e(F,W),e(W,Ne),e(F,ae),e(F,re),e(re,Ie),e(F,Me),e(F,K),e(K,Se),e(F,xe),e(F,Z),e(Z,Te),e(F,De),g(y,he,x),g(y,z,x),e(z,A),e(A,Ce),e(A,G),e(G,ie),e(A,We),e(A,Y),e(Y,Ge),e(z,He),e(z,N),e(N,I),e(N,le),e(le,ve),e(N,Be),e(N,de),e(de,ye),e(z,Ue),e(z,Q),e(Q,be),e(Q,ce),e(ce,Ve),g(y,ne,x),g(y,S,x),e(S,Ke),e(S,H),e(H,j),e(S,Ze)},d(y){y&&t(d),y&&t(l),y&&t(u),y&&t(se),y&&t(F),y&&t(he),y&&t(z),y&&t(ne),y&&t(S)}}}function Jl(M){let d,T,h,m,v;return m=new tt({props:{code:`from transformers import GPT2Tokenizer, TFOPTForCausalLM
import tensorflow as tf

tokenizer = GPT2Tokenizer.from_pretrained("facebook/opt-350m")
model = TFOPTForCausalLM.from_pretrained("facebook/opt-350m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, TFOPTForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOPTForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),T=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);T=i(u,"Example:"),u.forEach(t),h=p(l),k(m.$$.fragment,l)},m(l,u){g(l,d,u),e(d,T),g(l,h,u),w(m,l,u),v=!0},p:et,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),O(m,l)}}}function Xl(M){let d,T,h,m,v;return{c(){d=n("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var E=a(h);m=i(E,"Module"),E.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,T),e(d,h),e(h,m),e(d,v)},d(l){l&&t(d)}}}function Yl(M){let d,T,h,m,v;return m=new tt({props:{code:`import torch
from transformers import GPT2Tokenizer, OPTForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("ArthurZ/opt-350m-dummy-sc")
model = OPTForSequenceClassification.from_pretrained("ArthurZ/opt-350m-dummy-sc")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, OPTForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;ArthurZ/opt-350m-dummy-sc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ArthurZ/opt-350m-dummy-sc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=n("p"),T=r("Example of single-label classification:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);T=i(u,"Example of single-label classification:"),u.forEach(t),h=p(l),k(m.$$.fragment,l)},m(l,u){g(l,d,u),e(d,T),g(l,h,u),w(m,l,u),v=!0},p:et,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),O(m,l)}}}function Ql(M){let d,T;return d=new tt({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = OPTForSequenceClassification.from_pretrained("ArthurZ/opt-350m-dummy-sc", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ArthurZ/opt-350m-dummy-sc&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.71</span>`}}),{c(){b(d.$$.fragment)},l(h){k(d.$$.fragment,h)},m(h,m){w(d,h,m),T=!0},p:et,i(h){T||($(d.$$.fragment,h),T=!0)},o(h){P(d.$$.fragment,h),T=!1},d(h){O(d,h)}}}function ed(M){let d,T,h,m,v;return m=new tt({props:{code:`import torch
from transformers import GPT2Tokenizer, OPTForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("ArthurZ/opt-350m-dummy-sc")
model = OPTForSequenceClassification.from_pretrained("ArthurZ/opt-350m-dummy-sc", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, OPTForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;ArthurZ/opt-350m-dummy-sc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ArthurZ/opt-350m-dummy-sc&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=n("p"),T=r("Example of multi-label classification:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);T=i(u,"Example of multi-label classification:"),u.forEach(t),h=p(l),k(m.$$.fragment,l)},m(l,u){g(l,d,u),e(d,T),g(l,h,u),w(m,l,u),v=!0},p:et,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),O(m,l)}}}function td(M){let d,T;return d=new tt({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = OPTForSequenceClassification.from_pretrained(
    "ArthurZ/opt-350m-dummy-sc", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;ArthurZ/opt-350m-dummy-sc&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){b(d.$$.fragment)},l(h){k(d.$$.fragment,h)},m(h,m){w(d,h,m),T=!0},p:et,i(h){T||($(d.$$.fragment,h),T=!0)},o(h){P(d.$$.fragment,h),T=!1},d(h){O(d,h)}}}function od(M){let d,T,h,m,v;return m=new tt({props:{code:`from transformers import GPT2Tokenizer, FlaxOPTModel

tokenizer = GPT2Tokenizer.from_pretrained("facebook/opt-350m")
model = FlaxOPTModel.from_pretrained("facebook/opt-350m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxOPTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxOPTModel.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),T=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);T=i(u,"Example:"),u.forEach(t),h=p(l),k(m.$$.fragment,l)},m(l,u){g(l,d,u),e(d,T),g(l,h,u),w(m,l,u),v=!0},p:et,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),O(m,l)}}}function nd(M){let d,T,h,m,v;return m=new tt({props:{code:`from transformers import GPT2Tokenizer, FlaxOPTForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=n("p"),T=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);T=i(u,"Example:"),u.forEach(t),h=p(l),k(m.$$.fragment,l)},m(l,u){g(l,d,u),e(d,T),g(l,h,u),w(m,l,u),v=!0},p:et,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){P(m.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(h),O(m,l)}}}function sd(M){let d,T,h,m,v,l,u,E,je,Oe,L,oe,se,F,Le,X,Ae,Fe,W,Ne,ae,re,Ie,Me,K,Se,xe,Z,Te,De,he,z,A,Ce,G,ie,We,Y,Ge,He,N,I,le,ve,Be,de,ye,Ue,Q,be,ce,Ve,ne,S,Ke,H,j,Ze,y,x,lt,ee,dt,ct,C,pt,ut,ke,ht,mt,R,D,me,Re,B,ft,Je,Xe,ot,q,we,Vs,gt,Ks,tn,Zs,Rs,lo,Js,Xs,Ys,_t,Qs,on,ea,ta,nn,oa,na,sa,Ct,is,Tt,zt,yn,co,aa,bn,ra,ls,$e,po,ia,uo,la,sn,da,ca,pa,ho,ua,mo,ha,ma,fa,ze,fo,ga,vt,_a,an,Ta,va,kn,ya,ba,ka,Et,wa,qt,ds,yt,jt,wn,go,$a,$n,Pa,cs,bt,_o,Oa,Lt,To,Fa,At,ps,kt,Nt,Pn,vo,Ma,On,xa,us,pe,yo,Ca,bo,za,rn,Ea,qa,ja,ko,La,wo,Aa,Na,Ia,It,Sa,Ee,$o,Da,wt,Wa,ln,Ga,Ha,Fn,Ba,Ua,Va,St,Ka,Dt,hs,$t,Wt,Mn,Po,Za,xn,Ra,ms,te,Oo,Ja,Cn,Xa,Ya,Fo,Qa,dn,er,tr,or,Mo,nr,xo,sr,ar,rr,Gt,ir,Ht,Co,lr,Bt,fs,Pt,Ut,zn,zo,dr,En,cr,gs,U,Eo,pr,qn,ur,hr,cn,pn,mr,fr,gr,Pe,_r,jn,Tr,vr,Ln,yr,br,An,kr,wr,Nn,$r,Pr,Or,qo,Fr,un,Mr,xr,Cr,jo,zr,Lo,Er,qr,jr,J,Ao,Lr,Ot,Ar,hn,Nr,Ir,In,Sr,Dr,Wr,Vt,Gr,Kt,Hr,Zt,Br,Rt,Ur,Jt,_s,Ft,Xt,Sn,No,Vr,Dn,Kr,Ts,Mt,Io,Zr,Yt,So,Rr,Qt,vs,xt,eo,Wn,Do,Jr,Gn,Xr,ys,V,Wo,Yr,Hn,Qr,ei,Go,ti,mn,oi,ni,si,Ho,ai,Bo,ri,ii,li,Bn,di,ci,Ye,Un,Uo,pi,ui,Vn,Vo,hi,mi,Kn,Ko,fi,gi,Zn,Zo,_i,Ti,to,Ro,vi,oo,bs;return l=new it({}),F=new it({}),B=new it({}),we=new ue({props:{name:"class transformers.OPTConfig",anchor:"transformers.OPTConfig",parameters:[{name:"vocab_size",val:" = 50272"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"ffn_dim",val:" = 3072"},{name:"max_position_embeddings",val:" = 2048"},{name:"do_layer_norm_before",val:" = True"},{name:"_remove_final_layer_norm",val:" = False"},{name:"word_embed_proj_dim",val:" = None"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"num_attention_heads",val:" = 12"},{name:"activation_function",val:" = 'relu'"},{name:"layerdrop",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50272) &#x2014;
Vocabulary size of the OPT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.1/en/model_doc/opt#transformers.OPTModel">OPTModel</a>`,name:"vocab_size"},{anchor:"transformers.OPTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The dropout ratio for the attention probabilities.
layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more
details.`,name:"attention_dropout"},{anchor:"transformers.OPTConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.OPTConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/opt/configuration_opt.py#L32"}}),Ct=new Qe({props:{anchor:"transformers.OPTConfig.example",$$slots:{default:[Gl]},$$scope:{ctx:M}}}),co=new it({}),po=new ue({props:{name:"class transformers.OPTModel",anchor:"transformers.OPTModel",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/opt/modeling_opt.py#L732"}}),fo=new ue({props:{name:"forward",anchor:"transformers.OPTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/opt/modeling_opt.py#L748",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Et=new rs({props:{$$slots:{default:[Hl]},$$scope:{ctx:M}}}),qt=new Qe({props:{anchor:"transformers.OPTModel.forward.example",$$slots:{default:[Bl]},$$scope:{ctx:M}}}),go=new it({}),_o=new ue({props:{name:"class transformers.OPTForCausalLM",anchor:"transformers.OPTForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/opt/modeling_opt.py#L800"}}),To=new ue({props:{name:"forward",anchor:"transformers.OPTForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/opt/modeling_opt.py#L831",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),At=new Qe({props:{anchor:"transformers.OPTForCausalLM.forward.example",$$slots:{default:[Ul]},$$scope:{ctx:M}}}),vo=new it({}),yo=new ue({props:{name:"class transformers.TFOPTModel",anchor:"transformers.TFOPTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/opt/modeling_tf_opt.py#L789"}}),It=new rs({props:{$$slots:{default:[Vl]},$$scope:{ctx:M}}}),$o=new ue({props:{name:"call",anchor:"transformers.TFOPTModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOPTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/opt/modeling_tf_opt.py#L803",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),St=new rs({props:{$$slots:{default:[Kl]},$$scope:{ctx:M}}}),Dt=new Qe({props:{anchor:"transformers.TFOPTModel.call.example",$$slots:{default:[Zl]},$$scope:{ctx:M}}}),Po=new it({}),Oo=new ue({props:{name:"class transformers.TFOPTForCausalLM",anchor:"transformers.TFOPTForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/opt/modeling_tf_opt.py#L877"}}),Gt=new rs({props:{$$slots:{default:[Rl]},$$scope:{ctx:M}}}),Co=new ue({props:{name:"call",anchor:"transformers.TFOPTForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/opt/modeling_tf_opt.py#L902",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/opt#transformers.OPTConfig"
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
<p><a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or <code>tuple(tf.Tensor)</code>: A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bt=new Qe({props:{anchor:"transformers.TFOPTForCausalLM.call.example",$$slots:{default:[Jl]},$$scope:{ctx:M}}}),zo=new it({}),Eo=new ue({props:{name:"class transformers.OPTForSequenceClassification",anchor:"transformers.OPTForSequenceClassification",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/opt/modeling_opt.py#L999"}}),Ao=new ue({props:{name:"forward",anchor:"transformers.OPTForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>If you want to change padding behavior, you should read <code>modeling_opt._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"attention_mask"},{anchor:"transformers.OPTForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OPTForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.OPTForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OPTForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.OPTForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OPTForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OPTForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OPTForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/opt/modeling_opt.py#L1011",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
<p><code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vt=new rs({props:{$$slots:{default:[Xl]},$$scope:{ctx:M}}}),Kt=new Qe({props:{anchor:"transformers.OPTForSequenceClassification.forward.example",$$slots:{default:[Yl]},$$scope:{ctx:M}}}),Zt=new Qe({props:{anchor:"transformers.OPTForSequenceClassification.forward.example-2",$$slots:{default:[Ql]},$$scope:{ctx:M}}}),Rt=new Qe({props:{anchor:"transformers.OPTForSequenceClassification.forward.example-3",$$slots:{default:[ed]},$$scope:{ctx:M}}}),Jt=new Qe({props:{anchor:"transformers.OPTForSequenceClassification.forward.example-4",$$slots:{default:[td]},$$scope:{ctx:M}}}),No=new it({}),Io=new ue({props:{name:"class transformers.FlaxOPTModel",anchor:"transformers.FlaxOPTModel",parameters:[{name:"config",val:": OPTConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/opt/modeling_flax_opt.py#L691"}}),So=new ue({props:{name:"__call__",anchor:"transformers.FlaxOPTModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"deterministic",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/opt/modeling_flax_opt.py#L583",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qt=new Qe({props:{anchor:"transformers.FlaxOPTModel.__call__.example",$$slots:{default:[od]},$$scope:{ctx:M}}}),Do=new it({}),Wo=new ue({props:{name:"class transformers.FlaxOPTForCausalLM",anchor:"transformers.FlaxOPTForCausalLM",parameters:[{name:"config",val:": OPTConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxOPTForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxOPTForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/opt/modeling_flax_opt.py#L767"}}),Ro=new ue({props:{name:"__call__",anchor:"transformers.FlaxOPTForCausalLM.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"deterministic",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/opt/modeling_flax_opt.py#L583",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oo=new Qe({props:{anchor:"transformers.FlaxOPTForCausalLM.__call__.example",$$slots:{default:[nd]},$$scope:{ctx:M}}}),{c(){d=n("meta"),T=c(),h=n("h1"),m=n("a"),v=n("span"),b(l.$$.fragment),u=c(),E=n("span"),je=r("OPT"),Oe=c(),L=n("h2"),oe=n("a"),se=n("span"),b(F.$$.fragment),Le=c(),X=n("span"),Ae=r("Overview"),Fe=c(),W=n("p"),Ne=r("The OPT model was proposed in "),ae=n("a"),re=r("Open Pre-trained Transformer Language Models"),Ie=r(` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),Me=c(),K=n("p"),Se=r("The abstract from the paper is the following:"),xe=c(),Z=n("p"),Te=n("em"),De=r("Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),he=c(),z=n("p"),A=r("Tips:"),Ce=c(),G=n("ul"),ie=n("li"),We=r("OPT has the same architecture as "),Y=n("code"),Ge=r("BartDecoder"),He=r("."),N=c(),I=n("li"),le=r("Contrary to GPT2, OPT adds the EOS token "),ve=n("code"),Be=r("</s>"),de=r(" to the beginning of every prompt. "),ye=n("strong"),Ue=r("Note"),Q=r(": Make sure to pass "),be=n("code"),ce=r("use_fast=False"),Ve=r(" when loading OPT\u2019s tokenizer with "),ne=n("a"),S=r("AutoTokenizer"),Ke=r(" to get the correct tokenizer."),H=c(),j=n("p"),Ze=r("This model was contributed by "),y=n("a"),x=r("Arthur Zucker"),lt=r(", "),ee=n("a"),dt=r("Younes Belkada"),ct=r(", and "),C=n("a"),pt=r("Patrick Von Platen"),ut=r(`.
The original code can be found `),ke=n("a"),ht=r("here"),mt=r("."),R=c(),D=n("h2"),me=n("a"),Re=n("span"),b(B.$$.fragment),ft=c(),Je=n("span"),Xe=r("OPTConfig"),ot=c(),q=n("div"),b(we.$$.fragment),Vs=c(),gt=n("p"),Ks=r("This is the configuration class to store the configuration of a "),tn=n("a"),Zs=r("OPTModel"),Rs=r(`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),lo=n("a"),Js=r("facebook/opt-350m"),Xs=r(" architecture."),Ys=c(),_t=n("p"),Qs=r("Configuration objects inherit from "),on=n("a"),ea=r("PretrainedConfig"),ta=r(` and can be used to control the model outputs. Read the
documentation from `),nn=n("a"),oa=r("PretrainedConfig"),na=r(" for more information."),sa=c(),b(Ct.$$.fragment),is=c(),Tt=n("h2"),zt=n("a"),yn=n("span"),b(co.$$.fragment),aa=c(),bn=n("span"),ra=r("OPTModel"),ls=c(),$e=n("div"),b(po.$$.fragment),ia=c(),uo=n("p"),la=r(`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),sn=n("a"),da=r("PreTrainedModel"),ca=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pa=c(),ho=n("p"),ua=r("This model is also a PyTorch "),mo=n("a"),ha=r("torch.nn.Module"),ma=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fa=c(),ze=n("div"),b(fo.$$.fragment),ga=c(),vt=n("p"),_a=r("The "),an=n("a"),Ta=r("OPTModel"),va=r(" forward method, overrides the "),kn=n("code"),ya=r("__call__"),ba=r(" special method."),ka=c(),b(Et.$$.fragment),wa=c(),b(qt.$$.fragment),ds=c(),yt=n("h2"),jt=n("a"),wn=n("span"),b(go.$$.fragment),$a=c(),$n=n("span"),Pa=r("OPTForCausalLM"),cs=c(),bt=n("div"),b(_o.$$.fragment),Oa=c(),Lt=n("div"),b(To.$$.fragment),Fa=c(),b(At.$$.fragment),ps=c(),kt=n("h2"),Nt=n("a"),Pn=n("span"),b(vo.$$.fragment),Ma=c(),On=n("span"),xa=r("TFOPTModel"),us=c(),pe=n("div"),b(yo.$$.fragment),Ca=c(),bo=n("p"),za=r(`The bare TF OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),rn=n("a"),Ea=r("TFPreTrainedModel"),qa=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ja=c(),ko=n("p"),La=r("This model is also a "),wo=n("a"),Aa=r("tf.keras.Model"),Na=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ia=c(),b(It.$$.fragment),Sa=c(),Ee=n("div"),b($o.$$.fragment),Da=c(),wt=n("p"),Wa=r("The "),ln=n("a"),Ga=r("TFOPTModel"),Ha=r(" forward method, overrides the "),Fn=n("code"),Ba=r("__call__"),Ua=r(" special method."),Va=c(),b(St.$$.fragment),Ka=c(),b(Dt.$$.fragment),hs=c(),$t=n("h2"),Wt=n("a"),Mn=n("span"),b(Po.$$.fragment),Za=c(),xn=n("span"),Ra=r("TFOPTForCausalLM"),ms=c(),te=n("div"),b(Oo.$$.fragment),Ja=c(),Cn=n("p"),Xa=r("The OPT Model transformer with a language modeling head on top."),Ya=c(),Fo=n("p"),Qa=r("This model inherits from "),dn=n("a"),er=r("TFPreTrainedModel"),tr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),or=c(),Mo=n("p"),nr=r("This model is also a "),xo=n("a"),sr=r("tf.keras.Model"),ar=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rr=c(),b(Gt.$$.fragment),ir=c(),Ht=n("div"),b(Co.$$.fragment),lr=c(),b(Bt.$$.fragment),fs=c(),Pt=n("h2"),Ut=n("a"),zn=n("span"),b(zo.$$.fragment),dr=c(),En=n("span"),cr=r("OPTForSequenceClassification"),gs=c(),U=n("div"),b(Eo.$$.fragment),pr=c(),qn=n("p"),ur=r("The OPT Model transformer with a sequence classification head on top (linear layer)."),hr=c(),cn=n("p"),pn=n("a"),mr=r("OPTForSequenceClassification"),fr=r(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do.`),gr=c(),Pe=n("p"),_r=r(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),jn=n("code"),Tr=r("pad_token_id"),vr=r(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ln=n("code"),yr=r("pad_token_id"),br=r(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),An=n("code"),kr=r("inputs_embeds"),wr=r(" are passed instead of "),Nn=n("code"),$r=r("input_ids"),Pr=r(`, it does the same (take the last value in
each row of the batch).`),Or=c(),qo=n("p"),Fr=r("This model inherits from "),un=n("a"),Mr=r("PreTrainedModel"),xr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cr=c(),jo=n("p"),zr=r("This model is also a PyTorch "),Lo=n("a"),Er=r("torch.nn.Module"),qr=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jr=c(),J=n("div"),b(Ao.$$.fragment),Lr=c(),Ot=n("p"),Ar=r("The "),hn=n("a"),Nr=r("OPTForSequenceClassification"),Ir=r(" forward method, overrides the "),In=n("code"),Sr=r("__call__"),Dr=r(" special method."),Wr=c(),b(Vt.$$.fragment),Gr=c(),b(Kt.$$.fragment),Hr=c(),b(Zt.$$.fragment),Br=c(),b(Rt.$$.fragment),Ur=c(),b(Jt.$$.fragment),_s=c(),Ft=n("h2"),Xt=n("a"),Sn=n("span"),b(No.$$.fragment),Vr=c(),Dn=n("span"),Kr=r("FlaxOPTModel"),Ts=c(),Mt=n("div"),b(Io.$$.fragment),Zr=c(),Yt=n("div"),b(So.$$.fragment),Rr=c(),b(Qt.$$.fragment),vs=c(),xt=n("h2"),eo=n("a"),Wn=n("span"),b(Do.$$.fragment),Jr=c(),Gn=n("span"),Xr=r("FlaxOPTForCausalLM"),ys=c(),V=n("div"),b(Wo.$$.fragment),Yr=c(),Hn=n("p"),Qr=r(`OPT Model with a language modeling head on top (linear layer with weights tied to the input embeddings) e.g for
autoregressive tasks.`),ei=c(),Go=n("p"),ti=r("This model inherits from "),mn=n("a"),oi=r("FlaxPreTrainedModel"),ni=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),si=c(),Ho=n("p"),ai=r(`This model is also a Flax Linen
`),Bo=n("a"),ri=r("flax.nn.Module"),ii=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),li=c(),Bn=n("p"),di=r("Finally, this model supports inherent JAX features such as:"),ci=c(),Ye=n("ul"),Un=n("li"),Uo=n("a"),pi=r("Just-In-Time (JIT) compilation"),ui=c(),Vn=n("li"),Vo=n("a"),hi=r("Automatic Differentiation"),mi=c(),Kn=n("li"),Ko=n("a"),fi=r("Vectorization"),gi=c(),Zn=n("li"),Zo=n("a"),_i=r("Parallelization"),Ti=c(),to=n("div"),b(Ro.$$.fragment),vi=c(),b(oo.$$.fragment),this.h()},l(o){const _=Dl('[data-svelte="svelte-1phssyn"]',document.head);d=s(_,"META",{name:!0,content:!0}),_.forEach(t),T=p(o),h=s(o,"H1",{class:!0});var Jo=a(h);m=s(Jo,"A",{id:!0,class:!0,href:!0});var Rn=a(m);v=s(Rn,"SPAN",{});var Jn=a(v);k(l.$$.fragment,Jn),Jn.forEach(t),Rn.forEach(t),u=p(Jo),E=s(Jo,"SPAN",{});var Xn=a(E);je=i(Xn,"OPT"),Xn.forEach(t),Jo.forEach(t),Oe=p(o),L=s(o,"H2",{class:!0});var Xo=a(L);oe=s(Xo,"A",{id:!0,class:!0,href:!0});var Yn=a(oe);se=s(Yn,"SPAN",{});var Qn=a(se);k(F.$$.fragment,Qn),Qn.forEach(t),Yn.forEach(t),Le=p(Xo),X=s(Xo,"SPAN",{});var es=a(X);Ae=i(es,"Overview"),es.forEach(t),Xo.forEach(t),Fe=p(o),W=s(o,"P",{});var Yo=a(W);Ne=i(Yo,"The OPT model was proposed in "),ae=s(Yo,"A",{href:!0,rel:!0});var ts=a(ae);re=i(ts,"Open Pre-trained Transformer Language Models"),ts.forEach(t),Ie=i(Yo,` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),Yo.forEach(t),Me=p(o),K=s(o,"P",{});var os=a(K);Se=i(os,"The abstract from the paper is the following:"),os.forEach(t),xe=p(o),Z=s(o,"P",{});var ns=a(Z);Te=s(ns,"EM",{});var ss=a(Te);De=i(ss,"Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),ss.forEach(t),ns.forEach(t),he=p(o),z=s(o,"P",{});var as=a(z);A=i(as,"Tips:"),as.forEach(t),Ce=p(o),G=s(o,"UL",{});var Qo=a(G);ie=s(Qo,"LI",{});var en=a(ie);We=i(en,"OPT has the same architecture as "),Y=s(en,"CODE",{});var bi=a(Y);Ge=i(bi,"BartDecoder"),bi.forEach(t),He=i(en,"."),en.forEach(t),N=p(Qo),I=s(Qo,"LI",{});var nt=a(I);le=i(nt,"Contrary to GPT2, OPT adds the EOS token "),ve=s(nt,"CODE",{});var ki=a(ve);Be=i(ki,"</s>"),ki.forEach(t),de=i(nt," to the beginning of every prompt. "),ye=s(nt,"STRONG",{});var wi=a(ye);Ue=i(wi,"Note"),wi.forEach(t),Q=i(nt,": Make sure to pass "),be=s(nt,"CODE",{});var $i=a(be);ce=i($i,"use_fast=False"),$i.forEach(t),Ve=i(nt," when loading OPT\u2019s tokenizer with "),ne=s(nt,"A",{href:!0});var Pi=a(ne);S=i(Pi,"AutoTokenizer"),Pi.forEach(t),Ke=i(nt," to get the correct tokenizer."),nt.forEach(t),Qo.forEach(t),H=p(o),j=s(o,"P",{});var st=a(j);Ze=i(st,"This model was contributed by "),y=s(st,"A",{href:!0,rel:!0});var Oi=a(y);x=i(Oi,"Arthur Zucker"),Oi.forEach(t),lt=i(st,", "),ee=s(st,"A",{href:!0,rel:!0});var Fi=a(ee);dt=i(Fi,"Younes Belkada"),Fi.forEach(t),ct=i(st,", and "),C=s(st,"A",{href:!0,rel:!0});var Mi=a(C);pt=i(Mi,"Patrick Von Platen"),Mi.forEach(t),ut=i(st,`.
The original code can be found `),ke=s(st,"A",{href:!0,rel:!0});var xi=a(ke);ht=i(xi,"here"),xi.forEach(t),mt=i(st,"."),st.forEach(t),R=p(o),D=s(o,"H2",{class:!0});var ks=a(D);me=s(ks,"A",{id:!0,class:!0,href:!0});var Ci=a(me);Re=s(Ci,"SPAN",{});var zi=a(Re);k(B.$$.fragment,zi),zi.forEach(t),Ci.forEach(t),ft=p(ks),Je=s(ks,"SPAN",{});var Ei=a(Je);Xe=i(Ei,"OPTConfig"),Ei.forEach(t),ks.forEach(t),ot=p(o),q=s(o,"DIV",{class:!0});var no=a(q);k(we.$$.fragment,no),Vs=p(no),gt=s(no,"P",{});var fn=a(gt);Ks=i(fn,"This is the configuration class to store the configuration of a "),tn=s(fn,"A",{href:!0});var qi=a(tn);Zs=i(qi,"OPTModel"),qi.forEach(t),Rs=i(fn,`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),lo=s(fn,"A",{href:!0,rel:!0});var ji=a(lo);Js=i(ji,"facebook/opt-350m"),ji.forEach(t),Xs=i(fn," architecture."),fn.forEach(t),Ys=p(no),_t=s(no,"P",{});var gn=a(_t);Qs=i(gn,"Configuration objects inherit from "),on=s(gn,"A",{href:!0});var Li=a(on);ea=i(Li,"PretrainedConfig"),Li.forEach(t),ta=i(gn,` and can be used to control the model outputs. Read the
documentation from `),nn=s(gn,"A",{href:!0});var Ai=a(nn);oa=i(Ai,"PretrainedConfig"),Ai.forEach(t),na=i(gn," for more information."),gn.forEach(t),sa=p(no),k(Ct.$$.fragment,no),no.forEach(t),is=p(o),Tt=s(o,"H2",{class:!0});var ws=a(Tt);zt=s(ws,"A",{id:!0,class:!0,href:!0});var Ni=a(zt);yn=s(Ni,"SPAN",{});var Ii=a(yn);k(co.$$.fragment,Ii),Ii.forEach(t),Ni.forEach(t),aa=p(ws),bn=s(ws,"SPAN",{});var Si=a(bn);ra=i(Si,"OPTModel"),Si.forEach(t),ws.forEach(t),ls=p(o),$e=s(o,"DIV",{class:!0});var so=a($e);k(po.$$.fragment,so),ia=p(so),uo=s(so,"P",{});var $s=a(uo);la=i($s,`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),sn=s($s,"A",{href:!0});var Di=a(sn);da=i(Di,"PreTrainedModel"),Di.forEach(t),ca=i($s,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$s.forEach(t),pa=p(so),ho=s(so,"P",{});var Ps=a(ho);ua=i(Ps,"This model is also a PyTorch "),mo=s(Ps,"A",{href:!0,rel:!0});var Wi=a(mo);ha=i(Wi,"torch.nn.Module"),Wi.forEach(t),ma=i(Ps,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ps.forEach(t),fa=p(so),ze=s(so,"DIV",{class:!0});var ao=a(ze);k(fo.$$.fragment,ao),ga=p(ao),vt=s(ao,"P",{});var _n=a(vt);_a=i(_n,"The "),an=s(_n,"A",{href:!0});var Gi=a(an);Ta=i(Gi,"OPTModel"),Gi.forEach(t),va=i(_n," forward method, overrides the "),kn=s(_n,"CODE",{});var Hi=a(kn);ya=i(Hi,"__call__"),Hi.forEach(t),ba=i(_n," special method."),_n.forEach(t),ka=p(ao),k(Et.$$.fragment,ao),wa=p(ao),k(qt.$$.fragment,ao),ao.forEach(t),so.forEach(t),ds=p(o),yt=s(o,"H2",{class:!0});var Os=a(yt);jt=s(Os,"A",{id:!0,class:!0,href:!0});var Bi=a(jt);wn=s(Bi,"SPAN",{});var Ui=a(wn);k(go.$$.fragment,Ui),Ui.forEach(t),Bi.forEach(t),$a=p(Os),$n=s(Os,"SPAN",{});var Vi=a($n);Pa=i(Vi,"OPTForCausalLM"),Vi.forEach(t),Os.forEach(t),cs=p(o),bt=s(o,"DIV",{class:!0});var Fs=a(bt);k(_o.$$.fragment,Fs),Oa=p(Fs),Lt=s(Fs,"DIV",{class:!0});var Ms=a(Lt);k(To.$$.fragment,Ms),Fa=p(Ms),k(At.$$.fragment,Ms),Ms.forEach(t),Fs.forEach(t),ps=p(o),kt=s(o,"H2",{class:!0});var xs=a(kt);Nt=s(xs,"A",{id:!0,class:!0,href:!0});var Ki=a(Nt);Pn=s(Ki,"SPAN",{});var Zi=a(Pn);k(vo.$$.fragment,Zi),Zi.forEach(t),Ki.forEach(t),Ma=p(xs),On=s(xs,"SPAN",{});var Ri=a(On);xa=i(Ri,"TFOPTModel"),Ri.forEach(t),xs.forEach(t),us=p(o),pe=s(o,"DIV",{class:!0});var at=a(pe);k(yo.$$.fragment,at),Ca=p(at),bo=s(at,"P",{});var Cs=a(bo);za=i(Cs,`The bare TF OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),rn=s(Cs,"A",{href:!0});var Ji=a(rn);Ea=i(Ji,"TFPreTrainedModel"),Ji.forEach(t),qa=i(Cs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cs.forEach(t),ja=p(at),ko=s(at,"P",{});var zs=a(ko);La=i(zs,"This model is also a "),wo=s(zs,"A",{href:!0,rel:!0});var Xi=a(wo);Aa=i(Xi,"tf.keras.Model"),Xi.forEach(t),Na=i(zs,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zs.forEach(t),Ia=p(at),k(It.$$.fragment,at),Sa=p(at),Ee=s(at,"DIV",{class:!0});var ro=a(Ee);k($o.$$.fragment,ro),Da=p(ro),wt=s(ro,"P",{});var Tn=a(wt);Wa=i(Tn,"The "),ln=s(Tn,"A",{href:!0});var Yi=a(ln);Ga=i(Yi,"TFOPTModel"),Yi.forEach(t),Ha=i(Tn," forward method, overrides the "),Fn=s(Tn,"CODE",{});var Qi=a(Fn);Ba=i(Qi,"__call__"),Qi.forEach(t),Ua=i(Tn," special method."),Tn.forEach(t),Va=p(ro),k(St.$$.fragment,ro),Ka=p(ro),k(Dt.$$.fragment,ro),ro.forEach(t),at.forEach(t),hs=p(o),$t=s(o,"H2",{class:!0});var Es=a($t);Wt=s(Es,"A",{id:!0,class:!0,href:!0});var el=a(Wt);Mn=s(el,"SPAN",{});var tl=a(Mn);k(Po.$$.fragment,tl),tl.forEach(t),el.forEach(t),Za=p(Es),xn=s(Es,"SPAN",{});var ol=a(xn);Ra=i(ol,"TFOPTForCausalLM"),ol.forEach(t),Es.forEach(t),ms=p(o),te=s(o,"DIV",{class:!0});var qe=a(te);k(Oo.$$.fragment,qe),Ja=p(qe),Cn=s(qe,"P",{});var nl=a(Cn);Xa=i(nl,"The OPT Model transformer with a language modeling head on top."),nl.forEach(t),Ya=p(qe),Fo=s(qe,"P",{});var qs=a(Fo);Qa=i(qs,"This model inherits from "),dn=s(qs,"A",{href:!0});var sl=a(dn);er=i(sl,"TFPreTrainedModel"),sl.forEach(t),tr=i(qs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qs.forEach(t),or=p(qe),Mo=s(qe,"P",{});var js=a(Mo);nr=i(js,"This model is also a "),xo=s(js,"A",{href:!0,rel:!0});var al=a(xo);sr=i(al,"tf.keras.Model"),al.forEach(t),ar=i(js,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),js.forEach(t),rr=p(qe),k(Gt.$$.fragment,qe),ir=p(qe),Ht=s(qe,"DIV",{class:!0});var Ls=a(Ht);k(Co.$$.fragment,Ls),lr=p(Ls),k(Bt.$$.fragment,Ls),Ls.forEach(t),qe.forEach(t),fs=p(o),Pt=s(o,"H2",{class:!0});var As=a(Pt);Ut=s(As,"A",{id:!0,class:!0,href:!0});var rl=a(Ut);zn=s(rl,"SPAN",{});var il=a(zn);k(zo.$$.fragment,il),il.forEach(t),rl.forEach(t),dr=p(As),En=s(As,"SPAN",{});var ll=a(En);cr=i(ll,"OPTForSequenceClassification"),ll.forEach(t),As.forEach(t),gs=p(o),U=s(o,"DIV",{class:!0});var fe=a(U);k(Eo.$$.fragment,fe),pr=p(fe),qn=s(fe,"P",{});var dl=a(qn);ur=i(dl,"The OPT Model transformer with a sequence classification head on top (linear layer)."),dl.forEach(t),hr=p(fe),cn=s(fe,"P",{});var yi=a(cn);pn=s(yi,"A",{href:!0});var cl=a(pn);mr=i(cl,"OPTForSequenceClassification"),cl.forEach(t),fr=i(yi,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do.`),yi.forEach(t),gr=p(fe),Pe=s(fe,"P",{});var rt=a(Pe);_r=i(rt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),jn=s(rt,"CODE",{});var pl=a(jn);Tr=i(pl,"pad_token_id"),pl.forEach(t),vr=i(rt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ln=s(rt,"CODE",{});var ul=a(Ln);yr=i(ul,"pad_token_id"),ul.forEach(t),br=i(rt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),An=s(rt,"CODE",{});var hl=a(An);kr=i(hl,"inputs_embeds"),hl.forEach(t),wr=i(rt," are passed instead of "),Nn=s(rt,"CODE",{});var ml=a(Nn);$r=i(ml,"input_ids"),ml.forEach(t),Pr=i(rt,`, it does the same (take the last value in
each row of the batch).`),rt.forEach(t),Or=p(fe),qo=s(fe,"P",{});var Ns=a(qo);Fr=i(Ns,"This model inherits from "),un=s(Ns,"A",{href:!0});var fl=a(un);Mr=i(fl,"PreTrainedModel"),fl.forEach(t),xr=i(Ns,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ns.forEach(t),Cr=p(fe),jo=s(fe,"P",{});var Is=a(jo);zr=i(Is,"This model is also a PyTorch "),Lo=s(Is,"A",{href:!0,rel:!0});var gl=a(Lo);Er=i(gl,"torch.nn.Module"),gl.forEach(t),qr=i(Is,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Is.forEach(t),jr=p(fe),J=s(fe,"DIV",{class:!0});var ge=a(J);k(Ao.$$.fragment,ge),Lr=p(ge),Ot=s(ge,"P",{});var vn=a(Ot);Ar=i(vn,"The "),hn=s(vn,"A",{href:!0});var _l=a(hn);Nr=i(_l,"OPTForSequenceClassification"),_l.forEach(t),Ir=i(vn," forward method, overrides the "),In=s(vn,"CODE",{});var Tl=a(In);Sr=i(Tl,"__call__"),Tl.forEach(t),Dr=i(vn," special method."),vn.forEach(t),Wr=p(ge),k(Vt.$$.fragment,ge),Gr=p(ge),k(Kt.$$.fragment,ge),Hr=p(ge),k(Zt.$$.fragment,ge),Br=p(ge),k(Rt.$$.fragment,ge),Ur=p(ge),k(Jt.$$.fragment,ge),ge.forEach(t),fe.forEach(t),_s=p(o),Ft=s(o,"H2",{class:!0});var Ss=a(Ft);Xt=s(Ss,"A",{id:!0,class:!0,href:!0});var vl=a(Xt);Sn=s(vl,"SPAN",{});var yl=a(Sn);k(No.$$.fragment,yl),yl.forEach(t),vl.forEach(t),Vr=p(Ss),Dn=s(Ss,"SPAN",{});var bl=a(Dn);Kr=i(bl,"FlaxOPTModel"),bl.forEach(t),Ss.forEach(t),Ts=p(o),Mt=s(o,"DIV",{class:!0});var Ds=a(Mt);k(Io.$$.fragment,Ds),Zr=p(Ds),Yt=s(Ds,"DIV",{class:!0});var Ws=a(Yt);k(So.$$.fragment,Ws),Rr=p(Ws),k(Qt.$$.fragment,Ws),Ws.forEach(t),Ds.forEach(t),vs=p(o),xt=s(o,"H2",{class:!0});var Gs=a(xt);eo=s(Gs,"A",{id:!0,class:!0,href:!0});var kl=a(eo);Wn=s(kl,"SPAN",{});var wl=a(Wn);k(Do.$$.fragment,wl),wl.forEach(t),kl.forEach(t),Jr=p(Gs),Gn=s(Gs,"SPAN",{});var $l=a(Gn);Xr=i($l,"FlaxOPTForCausalLM"),$l.forEach(t),Gs.forEach(t),ys=p(o),V=s(o,"DIV",{class:!0});var _e=a(V);k(Wo.$$.fragment,_e),Yr=p(_e),Hn=s(_e,"P",{});var Pl=a(Hn);Qr=i(Pl,`OPT Model with a language modeling head on top (linear layer with weights tied to the input embeddings) e.g for
autoregressive tasks.`),Pl.forEach(t),ei=p(_e),Go=s(_e,"P",{});var Hs=a(Go);ti=i(Hs,"This model inherits from "),mn=s(Hs,"A",{href:!0});var Ol=a(mn);oi=i(Ol,"FlaxPreTrainedModel"),Ol.forEach(t),ni=i(Hs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hs.forEach(t),si=p(_e),Ho=s(_e,"P",{});var Bs=a(Ho);ai=i(Bs,`This model is also a Flax Linen
`),Bo=s(Bs,"A",{href:!0,rel:!0});var Fl=a(Bo);ri=i(Fl,"flax.nn.Module"),Fl.forEach(t),ii=i(Bs,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Bs.forEach(t),li=p(_e),Bn=s(_e,"P",{});var Ml=a(Bn);di=i(Ml,"Finally, this model supports inherent JAX features such as:"),Ml.forEach(t),ci=p(_e),Ye=s(_e,"UL",{});var io=a(Ye);Un=s(io,"LI",{});var xl=a(Un);Uo=s(xl,"A",{href:!0,rel:!0});var Cl=a(Uo);pi=i(Cl,"Just-In-Time (JIT) compilation"),Cl.forEach(t),xl.forEach(t),ui=p(io),Vn=s(io,"LI",{});var zl=a(Vn);Vo=s(zl,"A",{href:!0,rel:!0});var El=a(Vo);hi=i(El,"Automatic Differentiation"),El.forEach(t),zl.forEach(t),mi=p(io),Kn=s(io,"LI",{});var ql=a(Kn);Ko=s(ql,"A",{href:!0,rel:!0});var jl=a(Ko);fi=i(jl,"Vectorization"),jl.forEach(t),ql.forEach(t),gi=p(io),Zn=s(io,"LI",{});var Ll=a(Zn);Zo=s(Ll,"A",{href:!0,rel:!0});var Al=a(Zo);_i=i(Al,"Parallelization"),Al.forEach(t),Ll.forEach(t),io.forEach(t),Ti=p(_e),to=s(_e,"DIV",{class:!0});var Us=a(to);k(Ro.$$.fragment,Us),vi=p(Us),k(oo.$$.fragment,Us),Us.forEach(t),_e.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(ad)),f(m,"id","opt"),f(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(m,"href","#opt"),f(h,"class","relative group"),f(oe,"id","overview"),f(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(oe,"href","#overview"),f(L,"class","relative group"),f(ae,"href","https://arxiv.org/pdf/2205.01068"),f(ae,"rel","nofollow"),f(ne,"href","/docs/transformers/v4.22.1/en/model_doc/auto#transformers.AutoTokenizer"),f(y,"href","https://huggingface.co/ArthurZ"),f(y,"rel","nofollow"),f(ee,"href","https://huggingface.co/ybelkada"),f(ee,"rel","nofollow"),f(C,"href","https://huggingface.co/patrickvonplaten"),f(C,"rel","nofollow"),f(ke,"href","https://github.com/facebookresearch/metaseq"),f(ke,"rel","nofollow"),f(me,"id","transformers.OPTConfig"),f(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(me,"href","#transformers.OPTConfig"),f(D,"class","relative group"),f(tn,"href","/docs/transformers/v4.22.1/en/model_doc/opt#transformers.OPTModel"),f(lo,"href","https://huggingface.co/facebook/opt-350m"),f(lo,"rel","nofollow"),f(on,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),f(nn,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),f(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(zt,"id","transformers.OPTModel"),f(zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(zt,"href","#transformers.OPTModel"),f(Tt,"class","relative group"),f(sn,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),f(mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(mo,"rel","nofollow"),f(an,"href","/docs/transformers/v4.22.1/en/model_doc/opt#transformers.OPTModel"),f(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jt,"id","transformers.OPTForCausalLM"),f(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(jt,"href","#transformers.OPTForCausalLM"),f(yt,"class","relative group"),f(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Nt,"id","transformers.TFOPTModel"),f(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Nt,"href","#transformers.TFOPTModel"),f(kt,"class","relative group"),f(rn,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),f(wo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(wo,"rel","nofollow"),f(ln,"href","/docs/transformers/v4.22.1/en/model_doc/opt#transformers.TFOPTModel"),f(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wt,"id","transformers.TFOPTForCausalLM"),f(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Wt,"href","#transformers.TFOPTForCausalLM"),f($t,"class","relative group"),f(dn,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),f(xo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(xo,"rel","nofollow"),f(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ut,"id","transformers.OPTForSequenceClassification"),f(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ut,"href","#transformers.OPTForSequenceClassification"),f(Pt,"class","relative group"),f(pn,"href","/docs/transformers/v4.22.1/en/model_doc/opt#transformers.OPTForSequenceClassification"),f(un,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),f(Lo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Lo,"rel","nofollow"),f(hn,"href","/docs/transformers/v4.22.1/en/model_doc/opt#transformers.OPTForSequenceClassification"),f(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xt,"id","transformers.FlaxOPTModel"),f(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Xt,"href","#transformers.FlaxOPTModel"),f(Ft,"class","relative group"),f(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(eo,"id","transformers.FlaxOPTForCausalLM"),f(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(eo,"href","#transformers.FlaxOPTForCausalLM"),f(xt,"class","relative group"),f(mn,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Bo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Bo,"rel","nofollow"),f(Uo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Uo,"rel","nofollow"),f(Vo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Vo,"rel","nofollow"),f(Ko,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ko,"rel","nofollow"),f(Zo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Zo,"rel","nofollow"),f(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,d),g(o,T,_),g(o,h,_),e(h,m),e(m,v),w(l,v,null),e(h,u),e(h,E),e(E,je),g(o,Oe,_),g(o,L,_),e(L,oe),e(oe,se),w(F,se,null),e(L,Le),e(L,X),e(X,Ae),g(o,Fe,_),g(o,W,_),e(W,Ne),e(W,ae),e(ae,re),e(W,Ie),g(o,Me,_),g(o,K,_),e(K,Se),g(o,xe,_),g(o,Z,_),e(Z,Te),e(Te,De),g(o,he,_),g(o,z,_),e(z,A),g(o,Ce,_),g(o,G,_),e(G,ie),e(ie,We),e(ie,Y),e(Y,Ge),e(ie,He),e(G,N),e(G,I),e(I,le),e(I,ve),e(ve,Be),e(I,de),e(I,ye),e(ye,Ue),e(I,Q),e(I,be),e(be,ce),e(I,Ve),e(I,ne),e(ne,S),e(I,Ke),g(o,H,_),g(o,j,_),e(j,Ze),e(j,y),e(y,x),e(j,lt),e(j,ee),e(ee,dt),e(j,ct),e(j,C),e(C,pt),e(j,ut),e(j,ke),e(ke,ht),e(j,mt),g(o,R,_),g(o,D,_),e(D,me),e(me,Re),w(B,Re,null),e(D,ft),e(D,Je),e(Je,Xe),g(o,ot,_),g(o,q,_),w(we,q,null),e(q,Vs),e(q,gt),e(gt,Ks),e(gt,tn),e(tn,Zs),e(gt,Rs),e(gt,lo),e(lo,Js),e(gt,Xs),e(q,Ys),e(q,_t),e(_t,Qs),e(_t,on),e(on,ea),e(_t,ta),e(_t,nn),e(nn,oa),e(_t,na),e(q,sa),w(Ct,q,null),g(o,is,_),g(o,Tt,_),e(Tt,zt),e(zt,yn),w(co,yn,null),e(Tt,aa),e(Tt,bn),e(bn,ra),g(o,ls,_),g(o,$e,_),w(po,$e,null),e($e,ia),e($e,uo),e(uo,la),e(uo,sn),e(sn,da),e(uo,ca),e($e,pa),e($e,ho),e(ho,ua),e(ho,mo),e(mo,ha),e(ho,ma),e($e,fa),e($e,ze),w(fo,ze,null),e(ze,ga),e(ze,vt),e(vt,_a),e(vt,an),e(an,Ta),e(vt,va),e(vt,kn),e(kn,ya),e(vt,ba),e(ze,ka),w(Et,ze,null),e(ze,wa),w(qt,ze,null),g(o,ds,_),g(o,yt,_),e(yt,jt),e(jt,wn),w(go,wn,null),e(yt,$a),e(yt,$n),e($n,Pa),g(o,cs,_),g(o,bt,_),w(_o,bt,null),e(bt,Oa),e(bt,Lt),w(To,Lt,null),e(Lt,Fa),w(At,Lt,null),g(o,ps,_),g(o,kt,_),e(kt,Nt),e(Nt,Pn),w(vo,Pn,null),e(kt,Ma),e(kt,On),e(On,xa),g(o,us,_),g(o,pe,_),w(yo,pe,null),e(pe,Ca),e(pe,bo),e(bo,za),e(bo,rn),e(rn,Ea),e(bo,qa),e(pe,ja),e(pe,ko),e(ko,La),e(ko,wo),e(wo,Aa),e(ko,Na),e(pe,Ia),w(It,pe,null),e(pe,Sa),e(pe,Ee),w($o,Ee,null),e(Ee,Da),e(Ee,wt),e(wt,Wa),e(wt,ln),e(ln,Ga),e(wt,Ha),e(wt,Fn),e(Fn,Ba),e(wt,Ua),e(Ee,Va),w(St,Ee,null),e(Ee,Ka),w(Dt,Ee,null),g(o,hs,_),g(o,$t,_),e($t,Wt),e(Wt,Mn),w(Po,Mn,null),e($t,Za),e($t,xn),e(xn,Ra),g(o,ms,_),g(o,te,_),w(Oo,te,null),e(te,Ja),e(te,Cn),e(Cn,Xa),e(te,Ya),e(te,Fo),e(Fo,Qa),e(Fo,dn),e(dn,er),e(Fo,tr),e(te,or),e(te,Mo),e(Mo,nr),e(Mo,xo),e(xo,sr),e(Mo,ar),e(te,rr),w(Gt,te,null),e(te,ir),e(te,Ht),w(Co,Ht,null),e(Ht,lr),w(Bt,Ht,null),g(o,fs,_),g(o,Pt,_),e(Pt,Ut),e(Ut,zn),w(zo,zn,null),e(Pt,dr),e(Pt,En),e(En,cr),g(o,gs,_),g(o,U,_),w(Eo,U,null),e(U,pr),e(U,qn),e(qn,ur),e(U,hr),e(U,cn),e(cn,pn),e(pn,mr),e(cn,fr),e(U,gr),e(U,Pe),e(Pe,_r),e(Pe,jn),e(jn,Tr),e(Pe,vr),e(Pe,Ln),e(Ln,yr),e(Pe,br),e(Pe,An),e(An,kr),e(Pe,wr),e(Pe,Nn),e(Nn,$r),e(Pe,Pr),e(U,Or),e(U,qo),e(qo,Fr),e(qo,un),e(un,Mr),e(qo,xr),e(U,Cr),e(U,jo),e(jo,zr),e(jo,Lo),e(Lo,Er),e(jo,qr),e(U,jr),e(U,J),w(Ao,J,null),e(J,Lr),e(J,Ot),e(Ot,Ar),e(Ot,hn),e(hn,Nr),e(Ot,Ir),e(Ot,In),e(In,Sr),e(Ot,Dr),e(J,Wr),w(Vt,J,null),e(J,Gr),w(Kt,J,null),e(J,Hr),w(Zt,J,null),e(J,Br),w(Rt,J,null),e(J,Ur),w(Jt,J,null),g(o,_s,_),g(o,Ft,_),e(Ft,Xt),e(Xt,Sn),w(No,Sn,null),e(Ft,Vr),e(Ft,Dn),e(Dn,Kr),g(o,Ts,_),g(o,Mt,_),w(Io,Mt,null),e(Mt,Zr),e(Mt,Yt),w(So,Yt,null),e(Yt,Rr),w(Qt,Yt,null),g(o,vs,_),g(o,xt,_),e(xt,eo),e(eo,Wn),w(Do,Wn,null),e(xt,Jr),e(xt,Gn),e(Gn,Xr),g(o,ys,_),g(o,V,_),w(Wo,V,null),e(V,Yr),e(V,Hn),e(Hn,Qr),e(V,ei),e(V,Go),e(Go,ti),e(Go,mn),e(mn,oi),e(Go,ni),e(V,si),e(V,Ho),e(Ho,ai),e(Ho,Bo),e(Bo,ri),e(Ho,ii),e(V,li),e(V,Bn),e(Bn,di),e(V,ci),e(V,Ye),e(Ye,Un),e(Un,Uo),e(Uo,pi),e(Ye,ui),e(Ye,Vn),e(Vn,Vo),e(Vo,hi),e(Ye,mi),e(Ye,Kn),e(Kn,Ko),e(Ko,fi),e(Ye,gi),e(Ye,Zn),e(Zn,Zo),e(Zo,_i),e(V,Ti),e(V,to),w(Ro,to,null),e(to,vi),w(oo,to,null),bs=!0},p(o,[_]){const Jo={};_&2&&(Jo.$$scope={dirty:_,ctx:o}),Ct.$set(Jo);const Rn={};_&2&&(Rn.$$scope={dirty:_,ctx:o}),Et.$set(Rn);const Jn={};_&2&&(Jn.$$scope={dirty:_,ctx:o}),qt.$set(Jn);const Xn={};_&2&&(Xn.$$scope={dirty:_,ctx:o}),At.$set(Xn);const Xo={};_&2&&(Xo.$$scope={dirty:_,ctx:o}),It.$set(Xo);const Yn={};_&2&&(Yn.$$scope={dirty:_,ctx:o}),St.$set(Yn);const Qn={};_&2&&(Qn.$$scope={dirty:_,ctx:o}),Dt.$set(Qn);const es={};_&2&&(es.$$scope={dirty:_,ctx:o}),Gt.$set(es);const Yo={};_&2&&(Yo.$$scope={dirty:_,ctx:o}),Bt.$set(Yo);const ts={};_&2&&(ts.$$scope={dirty:_,ctx:o}),Vt.$set(ts);const os={};_&2&&(os.$$scope={dirty:_,ctx:o}),Kt.$set(os);const ns={};_&2&&(ns.$$scope={dirty:_,ctx:o}),Zt.$set(ns);const ss={};_&2&&(ss.$$scope={dirty:_,ctx:o}),Rt.$set(ss);const as={};_&2&&(as.$$scope={dirty:_,ctx:o}),Jt.$set(as);const Qo={};_&2&&(Qo.$$scope={dirty:_,ctx:o}),Qt.$set(Qo);const en={};_&2&&(en.$$scope={dirty:_,ctx:o}),oo.$set(en)},i(o){bs||($(l.$$.fragment,o),$(F.$$.fragment,o),$(B.$$.fragment,o),$(we.$$.fragment,o),$(Ct.$$.fragment,o),$(co.$$.fragment,o),$(po.$$.fragment,o),$(fo.$$.fragment,o),$(Et.$$.fragment,o),$(qt.$$.fragment,o),$(go.$$.fragment,o),$(_o.$$.fragment,o),$(To.$$.fragment,o),$(At.$$.fragment,o),$(vo.$$.fragment,o),$(yo.$$.fragment,o),$(It.$$.fragment,o),$($o.$$.fragment,o),$(St.$$.fragment,o),$(Dt.$$.fragment,o),$(Po.$$.fragment,o),$(Oo.$$.fragment,o),$(Gt.$$.fragment,o),$(Co.$$.fragment,o),$(Bt.$$.fragment,o),$(zo.$$.fragment,o),$(Eo.$$.fragment,o),$(Ao.$$.fragment,o),$(Vt.$$.fragment,o),$(Kt.$$.fragment,o),$(Zt.$$.fragment,o),$(Rt.$$.fragment,o),$(Jt.$$.fragment,o),$(No.$$.fragment,o),$(Io.$$.fragment,o),$(So.$$.fragment,o),$(Qt.$$.fragment,o),$(Do.$$.fragment,o),$(Wo.$$.fragment,o),$(Ro.$$.fragment,o),$(oo.$$.fragment,o),bs=!0)},o(o){P(l.$$.fragment,o),P(F.$$.fragment,o),P(B.$$.fragment,o),P(we.$$.fragment,o),P(Ct.$$.fragment,o),P(co.$$.fragment,o),P(po.$$.fragment,o),P(fo.$$.fragment,o),P(Et.$$.fragment,o),P(qt.$$.fragment,o),P(go.$$.fragment,o),P(_o.$$.fragment,o),P(To.$$.fragment,o),P(At.$$.fragment,o),P(vo.$$.fragment,o),P(yo.$$.fragment,o),P(It.$$.fragment,o),P($o.$$.fragment,o),P(St.$$.fragment,o),P(Dt.$$.fragment,o),P(Po.$$.fragment,o),P(Oo.$$.fragment,o),P(Gt.$$.fragment,o),P(Co.$$.fragment,o),P(Bt.$$.fragment,o),P(zo.$$.fragment,o),P(Eo.$$.fragment,o),P(Ao.$$.fragment,o),P(Vt.$$.fragment,o),P(Kt.$$.fragment,o),P(Zt.$$.fragment,o),P(Rt.$$.fragment,o),P(Jt.$$.fragment,o),P(No.$$.fragment,o),P(Io.$$.fragment,o),P(So.$$.fragment,o),P(Qt.$$.fragment,o),P(Do.$$.fragment,o),P(Wo.$$.fragment,o),P(Ro.$$.fragment,o),P(oo.$$.fragment,o),bs=!1},d(o){t(d),o&&t(T),o&&t(h),O(l),o&&t(Oe),o&&t(L),O(F),o&&t(Fe),o&&t(W),o&&t(Me),o&&t(K),o&&t(xe),o&&t(Z),o&&t(he),o&&t(z),o&&t(Ce),o&&t(G),o&&t(H),o&&t(j),o&&t(R),o&&t(D),O(B),o&&t(ot),o&&t(q),O(we),O(Ct),o&&t(is),o&&t(Tt),O(co),o&&t(ls),o&&t($e),O(po),O(fo),O(Et),O(qt),o&&t(ds),o&&t(yt),O(go),o&&t(cs),o&&t(bt),O(_o),O(To),O(At),o&&t(ps),o&&t(kt),O(vo),o&&t(us),o&&t(pe),O(yo),O(It),O($o),O(St),O(Dt),o&&t(hs),o&&t($t),O(Po),o&&t(ms),o&&t(te),O(Oo),O(Gt),O(Co),O(Bt),o&&t(fs),o&&t(Pt),O(zo),o&&t(gs),o&&t(U),O(Eo),O(Ao),O(Vt),O(Kt),O(Zt),O(Rt),O(Jt),o&&t(_s),o&&t(Ft),O(No),o&&t(Ts),o&&t(Mt),O(Io),O(So),O(Qt),o&&t(vs),o&&t(xt),O(Do),o&&t(ys),o&&t(V),O(Wo),O(Ro),O(oo)}}}const ad={local:"opt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OPTConfig",title:"OPTConfig"},{local:"transformers.OPTModel",title:"OPTModel"},{local:"transformers.OPTForCausalLM",title:"OPTForCausalLM"},{local:"transformers.TFOPTModel",title:"TFOPTModel"},{local:"transformers.TFOPTForCausalLM",title:"TFOPTForCausalLM"},{local:"transformers.OPTForSequenceClassification",title:"OPTForSequenceClassification"},{local:"transformers.FlaxOPTModel",title:"FlaxOPTModel"},{local:"transformers.FlaxOPTForCausalLM",title:"FlaxOPTForCausalLM"}],title:"OPT"};function rd(M){return Wl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hd extends Nl{constructor(d){super();Il(this,d,rd,sd,Sl,{})}}export{hd as default,ad as metadata};
