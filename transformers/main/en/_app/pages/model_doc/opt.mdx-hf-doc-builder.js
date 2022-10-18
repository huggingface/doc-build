import{S as Kd,i as Vd,s as Zd,e as n,k as p,w as v,t as a,M as Rd,c as s,d as t,m as u,a as i,x as k,h as r,b as f,G as e,g,y as w,q as P,o as $,B as O,v as Jd,L as Ie}from"../../chunks/vendor-hf-doc-builder.js";import{T as Dn}from"../../chunks/Tip-hf-doc-builder.js";import{D as oe}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Se}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as at}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ne}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Xd(x){let d,y,m,h,T;return h=new Se({props:{code:`from transformers import OPTModel, OPTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),y=a("Example:"),m=p(),v(h.$$.fragment)},l(l){d=s(l,"P",{});var c=i(d);y=r(c,"Example:"),c.forEach(t),m=u(l),k(h.$$.fragment,l)},m(l,c){g(l,d,c),e(d,y),g(l,m,c),w(h,l,c),T=!0},p:Ie,i(l){T||(P(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),O(h,l)}}}function Yd(x){let d,y,m,h,T;return{c(){d=n("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),h=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var c=i(d);y=r(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(c,"CODE",{});var E=i(m);h=r(E,"Module"),E.forEach(t),T=r(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,y),e(d,m),e(m,h),e(d,T)},d(l){l&&t(d)}}}function ec(x){let d,y,m,h,T;return h=new Se({props:{code:`from transformers import GPT2Tokenizer, OPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),y=a("Example:"),m=p(),v(h.$$.fragment)},l(l){d=s(l,"P",{});var c=i(d);y=r(c,"Example:"),c.forEach(t),m=u(l),k(h.$$.fragment,l)},m(l,c){g(l,d,c),e(d,y),g(l,m,c),w(h,l,c),T=!0},p:Ie,i(l){T||(P(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),O(h,l)}}}function tc(x){let d,y,m,h,T;return h=new Se({props:{code:`from transformers import GPT2Tokenizer, OPTForCausalLM

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
<span class="hljs-string">&quot;Hey, are you consciours? Can you talk to me?\\nI&#x27;m not consciours, but I can talk to you.&quot;</span>`}}),{c(){d=n("p"),y=a("Example:"),m=p(),v(h.$$.fragment)},l(l){d=s(l,"P",{});var c=i(d);y=r(c,"Example:"),c.forEach(t),m=u(l),k(h.$$.fragment,l)},m(l,c){g(l,d,c),e(d,y),g(l,m,c),w(h,l,c),T=!0},p:Ie,i(l){T||(P(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),O(h,l)}}}function oc(x){let d,y,m,h,T,l,c,E,De,xe,L,ne,ae,F,We,J,Ge,ze,W,He,re,ie,Qe,Me,K,Ue,Ee,V,ye,Be,me,C,A,Ce,G,le,Ke,X,Ve,Ze,N,I,de,be,Re,ce,ve,Je,Y,ke,pe,Xe,se,S,Ye,H,j,et;return{c(){d=n("p"),y=a("TensorFlow models and layers in "),m=n("code"),h=a("transformers"),T=a(" accept two formats as input:"),l=p(),c=n("ul"),E=n("li"),De=a("having all inputs as keyword arguments (like PyTorch models), or"),xe=p(),L=n("li"),ne=a("having all inputs as a list, tuple or dict in the first positional argument."),ae=p(),F=n("p"),We=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),J=n("code"),Ge=a("model.fit()"),ze=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=n("code"),He=a("model.fit()"),re=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=n("code"),Qe=a("fit()"),Me=a(" and "),K=n("code"),Ue=a("predict()"),Ee=a(`, such as when creating your own layers or models with
the Keras `),V=n("code"),ye=a("Functional"),Be=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),me=p(),C=n("ul"),A=n("li"),Ce=a("a single Tensor with "),G=n("code"),le=a("input_ids"),Ke=a(" only and nothing else: "),X=n("code"),Ve=a("model(input_ids)"),Ze=p(),N=n("li"),I=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n("code"),be=a("model([input_ids, attention_mask])"),Re=a(" or "),ce=n("code"),ve=a("model([input_ids, attention_mask, token_type_ids])"),Je=p(),Y=n("li"),ke=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),pe=n("code"),Xe=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=p(),S=n("p"),Ye=a(`Note that when creating models and layers with
`),H=n("a"),j=a("subclassing"),et=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=s(b,"P",{});var z=i(d);y=r(z,"TensorFlow models and layers in "),m=s(z,"CODE",{});var pt=i(m);h=r(pt,"transformers"),pt.forEach(t),T=r(z," accept two formats as input:"),z.forEach(t),l=u(b),c=s(b,"UL",{});var ee=i(c);E=s(ee,"LI",{});var ut=i(E);De=r(ut,"having all inputs as keyword arguments (like PyTorch models), or"),ut.forEach(t),xe=u(ee),L=s(ee,"LI",{});var ht=i(L);ne=r(ht,"having all inputs as a list, tuple or dict in the first positional argument."),ht.forEach(t),ee.forEach(t),ae=u(b),F=s(b,"P",{});var M=i(F);We=r(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),J=s(M,"CODE",{});var mt=i(J);Ge=r(mt,"model.fit()"),mt.forEach(t),ze=r(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=s(M,"CODE",{});var ft=i(W);He=r(ft,"model.fit()"),ft.forEach(t),re=r(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=s(M,"CODE",{});var we=i(ie);Qe=r(we,"fit()"),we.forEach(t),Me=r(M," and "),K=s(M,"CODE",{});var gt=i(K);Ue=r(gt,"predict()"),gt.forEach(t),Ee=r(M,`, such as when creating your own layers or models with
the Keras `),V=s(M,"CODE",{});var _t=i(V);ye=r(_t,"Functional"),_t.forEach(t),Be=r(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),me=u(b),C=s(b,"UL",{});var Z=i(C);A=s(Z,"LI",{});var D=i(A);Ce=r(D,"a single Tensor with "),G=s(D,"CODE",{});var fe=i(G);le=r(fe,"input_ids"),fe.forEach(t),Ke=r(D," only and nothing else: "),X=s(D,"CODE",{});var tt=i(X);Ve=r(tt,"model(input_ids)"),tt.forEach(t),D.forEach(t),Ze=u(Z),N=s(Z,"LI",{});var Q=i(N);I=r(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=s(Q,"CODE",{});var Tt=i(de);be=r(Tt,"model([input_ids, attention_mask])"),Tt.forEach(t),Re=r(Q," or "),ce=s(Q,"CODE",{});var ot=i(ce);ve=r(ot,"model([input_ids, attention_mask, token_type_ids])"),ot.forEach(t),Q.forEach(t),Je=u(Z),Y=s(Z,"LI",{});var nt=i(Y);ke=r(nt,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),pe=s(nt,"CODE",{});var rt=i(pe);Xe=r(rt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),rt.forEach(t),nt.forEach(t),Z.forEach(t),se=u(b),S=s(b,"P",{});var q=i(S);Ye=r(q,`Note that when creating models and layers with
`),H=s(q,"A",{href:!0,rel:!0});var Pe=i(H);j=r(Pe,"subclassing"),Pe.forEach(t),et=r(q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),q.forEach(t),this.h()},h(){f(H,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(H,"rel","nofollow")},m(b,z){g(b,d,z),e(d,y),e(d,m),e(m,h),e(d,T),g(b,l,z),g(b,c,z),e(c,E),e(E,De),e(c,xe),e(c,L),e(L,ne),g(b,ae,z),g(b,F,z),e(F,We),e(F,J),e(J,Ge),e(F,ze),e(F,W),e(W,He),e(F,re),e(F,ie),e(ie,Qe),e(F,Me),e(F,K),e(K,Ue),e(F,Ee),e(F,V),e(V,ye),e(F,Be),g(b,me,z),g(b,C,z),e(C,A),e(A,Ce),e(A,G),e(G,le),e(A,Ke),e(A,X),e(X,Ve),e(C,Ze),e(C,N),e(N,I),e(N,de),e(de,be),e(N,Re),e(N,ce),e(ce,ve),e(C,Je),e(C,Y),e(Y,ke),e(Y,pe),e(pe,Xe),g(b,se,z),g(b,S,z),e(S,Ye),e(S,H),e(H,j),e(S,et)},d(b){b&&t(d),b&&t(l),b&&t(c),b&&t(ae),b&&t(F),b&&t(me),b&&t(C),b&&t(se),b&&t(S)}}}function nc(x){let d,y,m,h,T;return{c(){d=n("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),h=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var c=i(d);y=r(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(c,"CODE",{});var E=i(m);h=r(E,"Module"),E.forEach(t),T=r(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,y),e(d,m),e(m,h),e(d,T)},d(l){l&&t(d)}}}function sc(x){let d,y,m,h,T;return h=new Se({props:{code:`from transformers import GPT2Tokenizer, TFOPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),y=a("Example:"),m=p(),v(h.$$.fragment)},l(l){d=s(l,"P",{});var c=i(d);y=r(c,"Example:"),c.forEach(t),m=u(l),k(h.$$.fragment,l)},m(l,c){g(l,d,c),e(d,y),g(l,m,c),w(h,l,c),T=!0},p:Ie,i(l){T||(P(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),O(h,l)}}}function ac(x){let d,y,m,h,T,l,c,E,De,xe,L,ne,ae,F,We,J,Ge,ze,W,He,re,ie,Qe,Me,K,Ue,Ee,V,ye,Be,me,C,A,Ce,G,le,Ke,X,Ve,Ze,N,I,de,be,Re,ce,ve,Je,Y,ke,pe,Xe,se,S,Ye,H,j,et;return{c(){d=n("p"),y=a("TensorFlow models and layers in "),m=n("code"),h=a("transformers"),T=a(" accept two formats as input:"),l=p(),c=n("ul"),E=n("li"),De=a("having all inputs as keyword arguments (like PyTorch models), or"),xe=p(),L=n("li"),ne=a("having all inputs as a list, tuple or dict in the first positional argument."),ae=p(),F=n("p"),We=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),J=n("code"),Ge=a("model.fit()"),ze=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=n("code"),He=a("model.fit()"),re=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=n("code"),Qe=a("fit()"),Me=a(" and "),K=n("code"),Ue=a("predict()"),Ee=a(`, such as when creating your own layers or models with
the Keras `),V=n("code"),ye=a("Functional"),Be=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),me=p(),C=n("ul"),A=n("li"),Ce=a("a single Tensor with "),G=n("code"),le=a("input_ids"),Ke=a(" only and nothing else: "),X=n("code"),Ve=a("model(input_ids)"),Ze=p(),N=n("li"),I=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n("code"),be=a("model([input_ids, attention_mask])"),Re=a(" or "),ce=n("code"),ve=a("model([input_ids, attention_mask, token_type_ids])"),Je=p(),Y=n("li"),ke=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),pe=n("code"),Xe=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=p(),S=n("p"),Ye=a(`Note that when creating models and layers with
`),H=n("a"),j=a("subclassing"),et=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=s(b,"P",{});var z=i(d);y=r(z,"TensorFlow models and layers in "),m=s(z,"CODE",{});var pt=i(m);h=r(pt,"transformers"),pt.forEach(t),T=r(z," accept two formats as input:"),z.forEach(t),l=u(b),c=s(b,"UL",{});var ee=i(c);E=s(ee,"LI",{});var ut=i(E);De=r(ut,"having all inputs as keyword arguments (like PyTorch models), or"),ut.forEach(t),xe=u(ee),L=s(ee,"LI",{});var ht=i(L);ne=r(ht,"having all inputs as a list, tuple or dict in the first positional argument."),ht.forEach(t),ee.forEach(t),ae=u(b),F=s(b,"P",{});var M=i(F);We=r(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),J=s(M,"CODE",{});var mt=i(J);Ge=r(mt,"model.fit()"),mt.forEach(t),ze=r(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=s(M,"CODE",{});var ft=i(W);He=r(ft,"model.fit()"),ft.forEach(t),re=r(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=s(M,"CODE",{});var we=i(ie);Qe=r(we,"fit()"),we.forEach(t),Me=r(M," and "),K=s(M,"CODE",{});var gt=i(K);Ue=r(gt,"predict()"),gt.forEach(t),Ee=r(M,`, such as when creating your own layers or models with
the Keras `),V=s(M,"CODE",{});var _t=i(V);ye=r(_t,"Functional"),_t.forEach(t),Be=r(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),me=u(b),C=s(b,"UL",{});var Z=i(C);A=s(Z,"LI",{});var D=i(A);Ce=r(D,"a single Tensor with "),G=s(D,"CODE",{});var fe=i(G);le=r(fe,"input_ids"),fe.forEach(t),Ke=r(D," only and nothing else: "),X=s(D,"CODE",{});var tt=i(X);Ve=r(tt,"model(input_ids)"),tt.forEach(t),D.forEach(t),Ze=u(Z),N=s(Z,"LI",{});var Q=i(N);I=r(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=s(Q,"CODE",{});var Tt=i(de);be=r(Tt,"model([input_ids, attention_mask])"),Tt.forEach(t),Re=r(Q," or "),ce=s(Q,"CODE",{});var ot=i(ce);ve=r(ot,"model([input_ids, attention_mask, token_type_ids])"),ot.forEach(t),Q.forEach(t),Je=u(Z),Y=s(Z,"LI",{});var nt=i(Y);ke=r(nt,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),pe=s(nt,"CODE",{});var rt=i(pe);Xe=r(rt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),rt.forEach(t),nt.forEach(t),Z.forEach(t),se=u(b),S=s(b,"P",{});var q=i(S);Ye=r(q,`Note that when creating models and layers with
`),H=s(q,"A",{href:!0,rel:!0});var Pe=i(H);j=r(Pe,"subclassing"),Pe.forEach(t),et=r(q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),q.forEach(t),this.h()},h(){f(H,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(H,"rel","nofollow")},m(b,z){g(b,d,z),e(d,y),e(d,m),e(m,h),e(d,T),g(b,l,z),g(b,c,z),e(c,E),e(E,De),e(c,xe),e(c,L),e(L,ne),g(b,ae,z),g(b,F,z),e(F,We),e(F,J),e(J,Ge),e(F,ze),e(F,W),e(W,He),e(F,re),e(F,ie),e(ie,Qe),e(F,Me),e(F,K),e(K,Ue),e(F,Ee),e(F,V),e(V,ye),e(F,Be),g(b,me,z),g(b,C,z),e(C,A),e(A,Ce),e(A,G),e(G,le),e(A,Ke),e(A,X),e(X,Ve),e(C,Ze),e(C,N),e(N,I),e(N,de),e(de,be),e(N,Re),e(N,ce),e(ce,ve),e(C,Je),e(C,Y),e(Y,ke),e(Y,pe),e(pe,Xe),g(b,se,z),g(b,S,z),e(S,Ye),e(S,H),e(H,j),e(S,et)},d(b){b&&t(d),b&&t(l),b&&t(c),b&&t(ae),b&&t(F),b&&t(me),b&&t(C),b&&t(se),b&&t(S)}}}function rc(x){let d,y,m,h,T;return h=new Se({props:{code:`from transformers import GPT2Tokenizer, TFOPTForCausalLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),y=a("Example:"),m=p(),v(h.$$.fragment)},l(l){d=s(l,"P",{});var c=i(d);y=r(c,"Example:"),c.forEach(t),m=u(l),k(h.$$.fragment,l)},m(l,c){g(l,d,c),e(d,y),g(l,m,c),w(h,l,c),T=!0},p:Ie,i(l){T||(P(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),O(h,l)}}}function ic(x){let d,y,m,h,T;return{c(){d=n("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),h=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var c=i(d);y=r(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(c,"CODE",{});var E=i(m);h=r(E,"Module"),E.forEach(t),T=r(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,y),e(d,m),e(m,h),e(d,T)},d(l){l&&t(d)}}}function lc(x){let d,y,m,h,T;return h=new Se({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=n("p"),y=a("Example of single-label classification:"),m=p(),v(h.$$.fragment)},l(l){d=s(l,"P",{});var c=i(d);y=r(c,"Example of single-label classification:"),c.forEach(t),m=u(l),k(h.$$.fragment,l)},m(l,c){g(l,d,c),e(d,y),g(l,m,c),w(h,l,c),T=!0},p:Ie,i(l){T||(P(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),O(h,l)}}}function dc(x){let d,y;return d=new Se({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = OPTForSequenceClassification.from_pretrained("ArthurZ/opt-350m-dummy-sc", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ArthurZ/opt-350m-dummy-sc&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.71</span>`}}),{c(){v(d.$$.fragment)},l(m){k(d.$$.fragment,m)},m(m,h){w(d,m,h),y=!0},p:Ie,i(m){y||(P(d.$$.fragment,m),y=!0)},o(m){$(d.$$.fragment,m),y=!1},d(m){O(d,m)}}}function cc(x){let d,y,m,h,T;return h=new Se({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=n("p"),y=a("Example of multi-label classification:"),m=p(),v(h.$$.fragment)},l(l){d=s(l,"P",{});var c=i(d);y=r(c,"Example of multi-label classification:"),c.forEach(t),m=u(l),k(h.$$.fragment,l)},m(l,c){g(l,d,c),e(d,y),g(l,m,c),w(h,l,c),T=!0},p:Ie,i(l){T||(P(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),O(h,l)}}}function pc(x){let d,y;return d=new Se({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(m){k(d.$$.fragment,m)},m(m,h){w(d,m,h),y=!0},p:Ie,i(m){y||(P(d.$$.fragment,m),y=!0)},o(m){$(d.$$.fragment,m),y=!1},d(m){O(d,m)}}}function uc(x){let d,y,m,h,T;return{c(){d=n("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),h=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var c=i(d);y=r(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(c,"CODE",{});var E=i(m);h=r(E,"Module"),E.forEach(t),T=r(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(l,c){g(l,d,c),e(d,y),e(d,m),e(m,h),e(d,T)},d(l){l&&t(d)}}}function hc(x){let d,y,m,h,T;return h=new Se({props:{code:`from transformers import GPT2Tokenizer, OPTForQuestionAnswering
import torch

torch.manual_seed(4)
tokenizer = GPT2Tokenizer.from_pretrained("facebook/opt-350m")

# note: we are loading a OPTForQuestionAnswering from the hub here,
# so the head will be randomly initialized, hence the predictions will be random
model = OPTForQuestionAnswering.from_pretrained("facebook/opt-350m")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
predicted = tokenizer.decode(predict_answer_tokens)
predicted`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, OPTForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">4</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># note: we are loading a OPTForQuestionAnswering from the hub here,</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># so the head will be randomly initialized, hence the predictions will be random</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted = tokenizer.decode(predict_answer_tokens)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted
<span class="hljs-string">&#x27; Henson?&#x27;</span>`}}),{c(){d=n("p"),y=a("Example:"),m=p(),v(h.$$.fragment)},l(l){d=s(l,"P",{});var c=i(d);y=r(c,"Example:"),c.forEach(t),m=u(l),k(h.$$.fragment,l)},m(l,c){g(l,d,c),e(d,y),g(l,m,c),w(h,l,c),T=!0},p:Ie,i(l){T||(P(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),O(h,l)}}}function mc(x){let d,y,m,h,T;return h=new Se({props:{code:`from transformers import GPT2Tokenizer, FlaxOPTModel

tokenizer = GPT2Tokenizer.from_pretrained("facebook/opt-350m")
model = FlaxOPTModel.from_pretrained("facebook/opt-350m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxOPTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxOPTModel.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),y=a("Example:"),m=p(),v(h.$$.fragment)},l(l){d=s(l,"P",{});var c=i(d);y=r(c,"Example:"),c.forEach(t),m=u(l),k(h.$$.fragment,l)},m(l,c){g(l,d,c),e(d,y),g(l,m,c),w(h,l,c),T=!0},p:Ie,i(l){T||(P(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),O(h,l)}}}function fc(x){let d,y,m,h,T;return h=new Se({props:{code:`from transformers import GPT2Tokenizer, FlaxOPTForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=n("p"),y=a("Example:"),m=p(),v(h.$$.fragment)},l(l){d=s(l,"P",{});var c=i(d);y=r(c,"Example:"),c.forEach(t),m=u(l),k(h.$$.fragment,l)},m(l,c){g(l,d,c),e(d,y),g(l,m,c),w(h,l,c),T=!0},p:Ie,i(l){T||(P(h.$$.fragment,l),T=!0)},o(l){$(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),O(h,l)}}}function gc(x){let d,y,m,h,T,l,c,E,De,xe,L,ne,ae,F,We,J,Ge,ze,W,He,re,ie,Qe,Me,K,Ue,Ee,V,ye,Be,me,C,A,Ce,G,le,Ke,X,Ve,Ze,N,I,de,be,Re,ce,ve,Je,Y,ke,pe,Xe,se,S,Ye,H,j,et,b,z,pt,ee,ut,ht,M,mt,ft,we,gt,_t,Z,D,fe,tt,Q,Tt,ot,nt,rt,q,Pe,wa,yt,Pa,Tn,$a,Oa,yo,Fa,xa,za,bt,Ma,yn,Ea,Ca,bn,qa,ja,La,At,qs,vt,Nt,Wn,bo,Aa,Gn,Na,js,$e,vo,Ia,ko,Sa,vn,Da,Wa,Ga,wo,Ha,Po,Qa,Ua,Ba,qe,$o,Ka,kt,Va,kn,Za,Ra,Hn,Ja,Xa,Ya,It,er,St,Ls,wt,Dt,Qn,Oo,tr,Un,or,As,Pt,Fo,nr,Wt,xo,sr,Gt,Ns,$t,Ht,Bn,zo,ar,Kn,rr,Is,ue,Mo,ir,Eo,lr,wn,dr,cr,pr,Co,ur,qo,hr,mr,fr,Qt,gr,je,jo,_r,Ot,Tr,Pn,yr,br,Vn,vr,kr,wr,Ut,Pr,Bt,Ss,Ft,Kt,Zn,Lo,$r,Rn,Or,Ds,te,Ao,Fr,Jn,xr,zr,No,Mr,$n,Er,Cr,qr,Io,jr,So,Lr,Ar,Nr,Vt,Ir,Zt,Do,Sr,Rt,Ws,xt,Jt,Xn,Wo,Dr,Yn,Wr,Gs,U,Go,Gr,es,Hr,Qr,On,Fn,Ur,Br,Kr,Oe,Vr,ts,Zr,Rr,os,Jr,Xr,ns,Yr,ei,ss,ti,oi,ni,Ho,si,xn,ai,ri,ii,Qo,li,Uo,di,ci,pi,R,Bo,ui,zt,hi,zn,mi,fi,as,gi,_i,Ti,Xt,yi,Yt,bi,eo,vi,to,ki,oo,Hs,Mt,no,rs,Ko,wi,is,Pi,Qs,he,Vo,$i,Et,Oi,ls,Fi,xi,ds,zi,Mi,Ei,Zo,Ci,Mn,qi,ji,Li,Ro,Ai,Jo,Ni,Ii,Si,Le,Xo,Di,Ct,Wi,En,Gi,Hi,cs,Qi,Ui,Bi,so,Ki,ao,Us,qt,ro,ps,Yo,Vi,us,Zi,Bs,jt,en,Ri,io,tn,Ji,lo,Ks,Lt,co,hs,on,Xi,ms,Yi,Vs,B,nn,el,fs,tl,ol,sn,nl,Cn,sl,al,rl,an,il,rn,ll,dl,cl,gs,pl,ul,st,_s,ln,hl,ml,Ts,dn,fl,gl,ys,cn,_l,Tl,bs,pn,yl,bl,po,un,vl,uo,Zs;return l=new at({}),F=new at({}),Q=new at({}),Pe=new oe({props:{name:"class transformers.OPTConfig",anchor:"transformers.OPTConfig",parameters:[{name:"vocab_size",val:" = 50272"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"ffn_dim",val:" = 3072"},{name:"max_position_embeddings",val:" = 2048"},{name:"do_layer_norm_before",val:" = True"},{name:"_remove_final_layer_norm",val:" = False"},{name:"word_embed_proj_dim",val:" = None"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"num_attention_heads",val:" = 12"},{name:"activation_function",val:" = 'relu'"},{name:"layerdrop",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50272) &#x2014;
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
The dropout ratio for the attention probabilities.
layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more
details.`,name:"attention_dropout"},{anchor:"transformers.OPTConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.OPTConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/configuration_opt.py#L32"}}),At=new Ne({props:{anchor:"transformers.OPTConfig.example",$$slots:{default:[Xd]},$$scope:{ctx:x}}}),bo=new at({}),vo=new oe({props:{name:"class transformers.OPTModel",anchor:"transformers.OPTModel",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L735"}}),$o=new oe({props:{name:"forward",anchor:"transformers.OPTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L751",returnDescription:`
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
`}}),It=new Dn({props:{$$slots:{default:[Yd]},$$scope:{ctx:x}}}),St=new Ne({props:{anchor:"transformers.OPTModel.forward.example",$$slots:{default:[ec]},$$scope:{ctx:x}}}),Oo=new at({}),Fo=new oe({props:{name:"class transformers.OPTForCausalLM",anchor:"transformers.OPTForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L803"}}),xo=new oe({props:{name:"forward",anchor:"transformers.OPTForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L834",returnDescription:`
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
`}}),Gt=new Ne({props:{anchor:"transformers.OPTForCausalLM.forward.example",$$slots:{default:[tc]},$$scope:{ctx:x}}}),zo=new at({}),Mo=new oe({props:{name:"class transformers.TFOPTModel",anchor:"transformers.TFOPTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_tf_opt.py#L785"}}),Qt=new Dn({props:{$$slots:{default:[oc]},$$scope:{ctx:x}}}),jo=new oe({props:{name:"call",anchor:"transformers.TFOPTModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_tf_opt.py#L799",returnDescription:`
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
`}}),Ut=new Dn({props:{$$slots:{default:[nc]},$$scope:{ctx:x}}}),Bt=new Ne({props:{anchor:"transformers.TFOPTModel.call.example",$$slots:{default:[sc]},$$scope:{ctx:x}}}),Lo=new at({}),Ao=new oe({props:{name:"class transformers.TFOPTForCausalLM",anchor:"transformers.TFOPTForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_tf_opt.py#L873"}}),Vt=new Dn({props:{$$slots:{default:[ac]},$$scope:{ctx:x}}}),Do=new oe({props:{name:"call",anchor:"transformers.TFOPTForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_tf_opt.py#L898",returnDescription:`
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
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or <code>tuple(tf.Tensor)</code>: A <a
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
`}}),Rt=new Ne({props:{anchor:"transformers.TFOPTForCausalLM.call.example",$$slots:{default:[rc]},$$scope:{ctx:x}}}),Wo=new at({}),Go=new oe({props:{name:"class transformers.OPTForSequenceClassification",anchor:"transformers.OPTForSequenceClassification",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L1002"}}),Bo=new oe({props:{name:"forward",anchor:"transformers.OPTForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OPTForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L1014",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig"
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
`}}),Xt=new Dn({props:{$$slots:{default:[ic]},$$scope:{ctx:x}}}),Yt=new Ne({props:{anchor:"transformers.OPTForSequenceClassification.forward.example",$$slots:{default:[lc]},$$scope:{ctx:x}}}),eo=new Ne({props:{anchor:"transformers.OPTForSequenceClassification.forward.example-2",$$slots:{default:[dc]},$$scope:{ctx:x}}}),to=new Ne({props:{anchor:"transformers.OPTForSequenceClassification.forward.example-3",$$slots:{default:[cc]},$$scope:{ctx:x}}}),oo=new Ne({props:{anchor:"transformers.OPTForSequenceClassification.forward.example-4",$$slots:{default:[pc]},$$scope:{ctx:x}}}),Ko=new at({}),Vo=new oe({props:{name:"class transformers.OPTForQuestionAnswering",anchor:"transformers.OPTForQuestionAnswering",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L1125"}}),Xo=new oe({props:{name:"forward",anchor:"transformers.OPTForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
information on the default strategy.`,name:"attention_mask"},{anchor:"transformers.OPTForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OPTForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.OPTForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OPTForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.OPTForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OPTForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OPTForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OPTForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.OPTForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L1136",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new Dn({props:{$$slots:{default:[uc]},$$scope:{ctx:x}}}),ao=new Ne({props:{anchor:"transformers.OPTForQuestionAnswering.forward.example",$$slots:{default:[hc]},$$scope:{ctx:x}}}),Yo=new at({}),en=new oe({props:{name:"class transformers.FlaxOPTModel",anchor:"transformers.FlaxOPTModel",parameters:[{name:"config",val:": OPTConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_flax_opt.py#L691"}}),tn=new oe({props:{name:"__call__",anchor:"transformers.FlaxOPTModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"deterministic",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_flax_opt.py#L583",returnDescription:`
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
`}}),lo=new Ne({props:{anchor:"transformers.FlaxOPTModel.__call__.example",$$slots:{default:[mc]},$$scope:{ctx:x}}}),on=new at({}),nn=new oe({props:{name:"class transformers.FlaxOPTForCausalLM",anchor:"transformers.FlaxOPTForCausalLM",parameters:[{name:"config",val:": OPTConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxOPTForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxOPTForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_flax_opt.py#L767"}}),un=new oe({props:{name:"__call__",anchor:"transformers.FlaxOPTForCausalLM.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"deterministic",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/opt/modeling_flax_opt.py#L583",returnDescription:`
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
`}}),uo=new Ne({props:{anchor:"transformers.FlaxOPTForCausalLM.__call__.example",$$slots:{default:[fc]},$$scope:{ctx:x}}}),{c(){d=n("meta"),y=p(),m=n("h1"),h=n("a"),T=n("span"),v(l.$$.fragment),c=p(),E=n("span"),De=a("OPT"),xe=p(),L=n("h2"),ne=n("a"),ae=n("span"),v(F.$$.fragment),We=p(),J=n("span"),Ge=a("Overview"),ze=p(),W=n("p"),He=a("The OPT model was proposed in "),re=n("a"),ie=a("Open Pre-trained Transformer Language Models"),Qe=a(` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),Me=p(),K=n("p"),Ue=a("The abstract from the paper is the following:"),Ee=p(),V=n("p"),ye=n("em"),Be=a("Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),me=p(),C=n("p"),A=a("Tips:"),Ce=p(),G=n("ul"),le=n("li"),Ke=a("OPT has the same architecture as "),X=n("code"),Ve=a("BartDecoder"),Ze=a("."),N=p(),I=n("li"),de=a("Contrary to GPT2, OPT adds the EOS token "),be=n("code"),Re=a("</s>"),ce=a(" to the beginning of every prompt. "),ve=n("strong"),Je=a("Note"),Y=a(": Make sure to pass "),ke=n("code"),pe=a("use_fast=False"),Xe=a(" when loading OPT\u2019s tokenizer with "),se=n("a"),S=a("AutoTokenizer"),Ye=a(" to get the correct tokenizer."),H=p(),j=n("p"),et=a("This model was contributed by "),b=n("a"),z=a("Arthur Zucker"),pt=a(", "),ee=n("a"),ut=a("Younes Belkada"),ht=a(", and "),M=n("a"),mt=a("Patrick Von Platen"),ft=a(`.
The original code can be found `),we=n("a"),gt=a("here"),_t=a("."),Z=p(),D=n("h2"),fe=n("a"),tt=n("span"),v(Q.$$.fragment),Tt=p(),ot=n("span"),nt=a("OPTConfig"),rt=p(),q=n("div"),v(Pe.$$.fragment),wa=p(),yt=n("p"),Pa=a("This is the configuration class to store the configuration of a "),Tn=n("a"),$a=a("OPTModel"),Oa=a(`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),yo=n("a"),Fa=a("facebook/opt-350m"),xa=a(" architecture."),za=p(),bt=n("p"),Ma=a("Configuration objects inherit from "),yn=n("a"),Ea=a("PretrainedConfig"),Ca=a(` and can be used to control the model outputs. Read the
documentation from `),bn=n("a"),qa=a("PretrainedConfig"),ja=a(" for more information."),La=p(),v(At.$$.fragment),qs=p(),vt=n("h2"),Nt=n("a"),Wn=n("span"),v(bo.$$.fragment),Aa=p(),Gn=n("span"),Na=a("OPTModel"),js=p(),$e=n("div"),v(vo.$$.fragment),Ia=p(),ko=n("p"),Sa=a(`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),vn=n("a"),Da=a("PreTrainedModel"),Wa=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ga=p(),wo=n("p"),Ha=a("This model is also a PyTorch "),Po=n("a"),Qa=a("torch.nn.Module"),Ua=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ba=p(),qe=n("div"),v($o.$$.fragment),Ka=p(),kt=n("p"),Va=a("The "),kn=n("a"),Za=a("OPTModel"),Ra=a(" forward method, overrides the "),Hn=n("code"),Ja=a("__call__"),Xa=a(" special method."),Ya=p(),v(It.$$.fragment),er=p(),v(St.$$.fragment),Ls=p(),wt=n("h2"),Dt=n("a"),Qn=n("span"),v(Oo.$$.fragment),tr=p(),Un=n("span"),or=a("OPTForCausalLM"),As=p(),Pt=n("div"),v(Fo.$$.fragment),nr=p(),Wt=n("div"),v(xo.$$.fragment),sr=p(),v(Gt.$$.fragment),Ns=p(),$t=n("h2"),Ht=n("a"),Bn=n("span"),v(zo.$$.fragment),ar=p(),Kn=n("span"),rr=a("TFOPTModel"),Is=p(),ue=n("div"),v(Mo.$$.fragment),ir=p(),Eo=n("p"),lr=a(`The bare TF OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),wn=n("a"),dr=a("TFPreTrainedModel"),cr=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pr=p(),Co=n("p"),ur=a("This model is also a "),qo=n("a"),hr=a("tf.keras.Model"),mr=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fr=p(),v(Qt.$$.fragment),gr=p(),je=n("div"),v(jo.$$.fragment),_r=p(),Ot=n("p"),Tr=a("The "),Pn=n("a"),yr=a("TFOPTModel"),br=a(" forward method, overrides the "),Vn=n("code"),vr=a("__call__"),kr=a(" special method."),wr=p(),v(Ut.$$.fragment),Pr=p(),v(Bt.$$.fragment),Ss=p(),Ft=n("h2"),Kt=n("a"),Zn=n("span"),v(Lo.$$.fragment),$r=p(),Rn=n("span"),Or=a("TFOPTForCausalLM"),Ds=p(),te=n("div"),v(Ao.$$.fragment),Fr=p(),Jn=n("p"),xr=a("The OPT Model transformer with a language modeling head on top."),zr=p(),No=n("p"),Mr=a("This model inherits from "),$n=n("a"),Er=a("TFPreTrainedModel"),Cr=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qr=p(),Io=n("p"),jr=a("This model is also a "),So=n("a"),Lr=a("tf.keras.Model"),Ar=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nr=p(),v(Vt.$$.fragment),Ir=p(),Zt=n("div"),v(Do.$$.fragment),Sr=p(),v(Rt.$$.fragment),Ws=p(),xt=n("h2"),Jt=n("a"),Xn=n("span"),v(Wo.$$.fragment),Dr=p(),Yn=n("span"),Wr=a("OPTForSequenceClassification"),Gs=p(),U=n("div"),v(Go.$$.fragment),Gr=p(),es=n("p"),Hr=a("The OPT Model transformer with a sequence classification head on top (linear layer)."),Qr=p(),On=n("p"),Fn=n("a"),Ur=a("OPTForSequenceClassification"),Br=a(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do.`),Kr=p(),Oe=n("p"),Vr=a(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ts=n("code"),Zr=a("pad_token_id"),Rr=a(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),os=n("code"),Jr=a("pad_token_id"),Xr=a(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ns=n("code"),Yr=a("inputs_embeds"),ei=a(" are passed instead of "),ss=n("code"),ti=a("input_ids"),oi=a(`, it does the same (take the last value in
each row of the batch).`),ni=p(),Ho=n("p"),si=a("This model inherits from "),xn=n("a"),ai=a("PreTrainedModel"),ri=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ii=p(),Qo=n("p"),li=a("This model is also a PyTorch "),Uo=n("a"),di=a("torch.nn.Module"),ci=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pi=p(),R=n("div"),v(Bo.$$.fragment),ui=p(),zt=n("p"),hi=a("The "),zn=n("a"),mi=a("OPTForSequenceClassification"),fi=a(" forward method, overrides the "),as=n("code"),gi=a("__call__"),_i=a(" special method."),Ti=p(),v(Xt.$$.fragment),yi=p(),v(Yt.$$.fragment),bi=p(),v(eo.$$.fragment),vi=p(),v(to.$$.fragment),ki=p(),v(oo.$$.fragment),Hs=p(),Mt=n("h2"),no=n("a"),rs=n("span"),v(Ko.$$.fragment),wi=p(),is=n("span"),Pi=a("OPTForQuestionAnswering"),Qs=p(),he=n("div"),v(Vo.$$.fragment),$i=p(),Et=n("p"),Oi=a(`The OPT Model transformer with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layers on top of the hidden-states output to compute `),ls=n("code"),Fi=a("span start logits"),xi=a(" and "),ds=n("code"),zi=a("span end logits"),Mi=a(")."),Ei=p(),Zo=n("p"),Ci=a("This model inherits from "),Mn=n("a"),qi=a("PreTrainedModel"),ji=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Li=p(),Ro=n("p"),Ai=a("This model is also a PyTorch "),Jo=n("a"),Ni=a("torch.nn.Module"),Ii=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Si=p(),Le=n("div"),v(Xo.$$.fragment),Di=p(),Ct=n("p"),Wi=a("The "),En=n("a"),Gi=a("OPTForQuestionAnswering"),Hi=a(" forward method, overrides the "),cs=n("code"),Qi=a("__call__"),Ui=a(" special method."),Bi=p(),v(so.$$.fragment),Ki=p(),v(ao.$$.fragment),Us=p(),qt=n("h2"),ro=n("a"),ps=n("span"),v(Yo.$$.fragment),Vi=p(),us=n("span"),Zi=a("FlaxOPTModel"),Bs=p(),jt=n("div"),v(en.$$.fragment),Ri=p(),io=n("div"),v(tn.$$.fragment),Ji=p(),v(lo.$$.fragment),Ks=p(),Lt=n("h2"),co=n("a"),hs=n("span"),v(on.$$.fragment),Xi=p(),ms=n("span"),Yi=a("FlaxOPTForCausalLM"),Vs=p(),B=n("div"),v(nn.$$.fragment),el=p(),fs=n("p"),tl=a(`OPT Model with a language modeling head on top (linear layer with weights tied to the input embeddings) e.g for
autoregressive tasks.`),ol=p(),sn=n("p"),nl=a("This model inherits from "),Cn=n("a"),sl=a("FlaxPreTrainedModel"),al=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rl=p(),an=n("p"),il=a(`This model is also a Flax Linen
`),rn=n("a"),ll=a("flax.nn.Module"),dl=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),cl=p(),gs=n("p"),pl=a("Finally, this model supports inherent JAX features such as:"),ul=p(),st=n("ul"),_s=n("li"),ln=n("a"),hl=a("Just-In-Time (JIT) compilation"),ml=p(),Ts=n("li"),dn=n("a"),fl=a("Automatic Differentiation"),gl=p(),ys=n("li"),cn=n("a"),_l=a("Vectorization"),Tl=p(),bs=n("li"),pn=n("a"),yl=a("Parallelization"),bl=p(),po=n("div"),v(un.$$.fragment),vl=p(),v(uo.$$.fragment),this.h()},l(o){const _=Rd('[data-svelte="svelte-1phssyn"]',document.head);d=s(_,"META",{name:!0,content:!0}),_.forEach(t),y=u(o),m=s(o,"H1",{class:!0});var hn=i(m);h=s(hn,"A",{id:!0,class:!0,href:!0});var vs=i(h);T=s(vs,"SPAN",{});var ks=i(T);k(l.$$.fragment,ks),ks.forEach(t),vs.forEach(t),c=u(hn),E=s(hn,"SPAN",{});var ws=i(E);De=r(ws,"OPT"),ws.forEach(t),hn.forEach(t),xe=u(o),L=s(o,"H2",{class:!0});var mn=i(L);ne=s(mn,"A",{id:!0,class:!0,href:!0});var Ps=i(ne);ae=s(Ps,"SPAN",{});var $s=i(ae);k(F.$$.fragment,$s),$s.forEach(t),Ps.forEach(t),We=u(mn),J=s(mn,"SPAN",{});var Os=i(J);Ge=r(Os,"Overview"),Os.forEach(t),mn.forEach(t),ze=u(o),W=s(o,"P",{});var fn=i(W);He=r(fn,"The OPT model was proposed in "),re=s(fn,"A",{href:!0,rel:!0});var Fs=i(re);ie=r(Fs,"Open Pre-trained Transformer Language Models"),Fs.forEach(t),Qe=r(fn,` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),fn.forEach(t),Me=u(o),K=s(o,"P",{});var xs=i(K);Ue=r(xs,"The abstract from the paper is the following:"),xs.forEach(t),Ee=u(o),V=s(o,"P",{});var zs=i(V);ye=s(zs,"EM",{});var Ms=i(ye);Be=r(Ms,"Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),Ms.forEach(t),zs.forEach(t),me=u(o),C=s(o,"P",{});var Es=i(C);A=r(Es,"Tips:"),Es.forEach(t),Ce=u(o),G=s(o,"UL",{});var gn=i(G);le=s(gn,"LI",{});var _n=i(le);Ke=r(_n,"OPT has the same architecture as "),X=s(_n,"CODE",{});var Cs=i(X);Ve=r(Cs,"BartDecoder"),Cs.forEach(t),Ze=r(_n,"."),_n.forEach(t),N=u(gn),I=s(gn,"LI",{});var Fe=i(I);de=r(Fe,"Contrary to GPT2, OPT adds the EOS token "),be=s(Fe,"CODE",{});var wl=i(be);Re=r(wl,"</s>"),wl.forEach(t),ce=r(Fe," to the beginning of every prompt. "),ve=s(Fe,"STRONG",{});var Pl=i(ve);Je=r(Pl,"Note"),Pl.forEach(t),Y=r(Fe,": Make sure to pass "),ke=s(Fe,"CODE",{});var $l=i(ke);pe=r($l,"use_fast=False"),$l.forEach(t),Xe=r(Fe," when loading OPT\u2019s tokenizer with "),se=s(Fe,"A",{href:!0});var Ol=i(se);S=r(Ol,"AutoTokenizer"),Ol.forEach(t),Ye=r(Fe," to get the correct tokenizer."),Fe.forEach(t),gn.forEach(t),H=u(o),j=s(o,"P",{});var it=i(j);et=r(it,"This model was contributed by "),b=s(it,"A",{href:!0,rel:!0});var Fl=i(b);z=r(Fl,"Arthur Zucker"),Fl.forEach(t),pt=r(it,", "),ee=s(it,"A",{href:!0,rel:!0});var xl=i(ee);ut=r(xl,"Younes Belkada"),xl.forEach(t),ht=r(it,", and "),M=s(it,"A",{href:!0,rel:!0});var zl=i(M);mt=r(zl,"Patrick Von Platen"),zl.forEach(t),ft=r(it,`.
The original code can be found `),we=s(it,"A",{href:!0,rel:!0});var Ml=i(we);gt=r(Ml,"here"),Ml.forEach(t),_t=r(it,"."),it.forEach(t),Z=u(o),D=s(o,"H2",{class:!0});var Rs=i(D);fe=s(Rs,"A",{id:!0,class:!0,href:!0});var El=i(fe);tt=s(El,"SPAN",{});var Cl=i(tt);k(Q.$$.fragment,Cl),Cl.forEach(t),El.forEach(t),Tt=u(Rs),ot=s(Rs,"SPAN",{});var ql=i(ot);nt=r(ql,"OPTConfig"),ql.forEach(t),Rs.forEach(t),rt=u(o),q=s(o,"DIV",{class:!0});var ho=i(q);k(Pe.$$.fragment,ho),wa=u(ho),yt=s(ho,"P",{});var qn=i(yt);Pa=r(qn,"This is the configuration class to store the configuration of a "),Tn=s(qn,"A",{href:!0});var jl=i(Tn);$a=r(jl,"OPTModel"),jl.forEach(t),Oa=r(qn,`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),yo=s(qn,"A",{href:!0,rel:!0});var Ll=i(yo);Fa=r(Ll,"facebook/opt-350m"),Ll.forEach(t),xa=r(qn," architecture."),qn.forEach(t),za=u(ho),bt=s(ho,"P",{});var jn=i(bt);Ma=r(jn,"Configuration objects inherit from "),yn=s(jn,"A",{href:!0});var Al=i(yn);Ea=r(Al,"PretrainedConfig"),Al.forEach(t),Ca=r(jn,` and can be used to control the model outputs. Read the
documentation from `),bn=s(jn,"A",{href:!0});var Nl=i(bn);qa=r(Nl,"PretrainedConfig"),Nl.forEach(t),ja=r(jn," for more information."),jn.forEach(t),La=u(ho),k(At.$$.fragment,ho),ho.forEach(t),qs=u(o),vt=s(o,"H2",{class:!0});var Js=i(vt);Nt=s(Js,"A",{id:!0,class:!0,href:!0});var Il=i(Nt);Wn=s(Il,"SPAN",{});var Sl=i(Wn);k(bo.$$.fragment,Sl),Sl.forEach(t),Il.forEach(t),Aa=u(Js),Gn=s(Js,"SPAN",{});var Dl=i(Gn);Na=r(Dl,"OPTModel"),Dl.forEach(t),Js.forEach(t),js=u(o),$e=s(o,"DIV",{class:!0});var mo=i($e);k(vo.$$.fragment,mo),Ia=u(mo),ko=s(mo,"P",{});var Xs=i(ko);Sa=r(Xs,`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),vn=s(Xs,"A",{href:!0});var Wl=i(vn);Da=r(Wl,"PreTrainedModel"),Wl.forEach(t),Wa=r(Xs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xs.forEach(t),Ga=u(mo),wo=s(mo,"P",{});var Ys=i(wo);Ha=r(Ys,"This model is also a PyTorch "),Po=s(Ys,"A",{href:!0,rel:!0});var Gl=i(Po);Qa=r(Gl,"torch.nn.Module"),Gl.forEach(t),Ua=r(Ys,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ys.forEach(t),Ba=u(mo),qe=s(mo,"DIV",{class:!0});var fo=i(qe);k($o.$$.fragment,fo),Ka=u(fo),kt=s(fo,"P",{});var Ln=i(kt);Va=r(Ln,"The "),kn=s(Ln,"A",{href:!0});var Hl=i(kn);Za=r(Hl,"OPTModel"),Hl.forEach(t),Ra=r(Ln," forward method, overrides the "),Hn=s(Ln,"CODE",{});var Ql=i(Hn);Ja=r(Ql,"__call__"),Ql.forEach(t),Xa=r(Ln," special method."),Ln.forEach(t),Ya=u(fo),k(It.$$.fragment,fo),er=u(fo),k(St.$$.fragment,fo),fo.forEach(t),mo.forEach(t),Ls=u(o),wt=s(o,"H2",{class:!0});var ea=i(wt);Dt=s(ea,"A",{id:!0,class:!0,href:!0});var Ul=i(Dt);Qn=s(Ul,"SPAN",{});var Bl=i(Qn);k(Oo.$$.fragment,Bl),Bl.forEach(t),Ul.forEach(t),tr=u(ea),Un=s(ea,"SPAN",{});var Kl=i(Un);or=r(Kl,"OPTForCausalLM"),Kl.forEach(t),ea.forEach(t),As=u(o),Pt=s(o,"DIV",{class:!0});var ta=i(Pt);k(Fo.$$.fragment,ta),nr=u(ta),Wt=s(ta,"DIV",{class:!0});var oa=i(Wt);k(xo.$$.fragment,oa),sr=u(oa),k(Gt.$$.fragment,oa),oa.forEach(t),ta.forEach(t),Ns=u(o),$t=s(o,"H2",{class:!0});var na=i($t);Ht=s(na,"A",{id:!0,class:!0,href:!0});var Vl=i(Ht);Bn=s(Vl,"SPAN",{});var Zl=i(Bn);k(zo.$$.fragment,Zl),Zl.forEach(t),Vl.forEach(t),ar=u(na),Kn=s(na,"SPAN",{});var Rl=i(Kn);rr=r(Rl,"TFOPTModel"),Rl.forEach(t),na.forEach(t),Is=u(o),ue=s(o,"DIV",{class:!0});var lt=i(ue);k(Mo.$$.fragment,lt),ir=u(lt),Eo=s(lt,"P",{});var sa=i(Eo);lr=r(sa,`The bare TF OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),wn=s(sa,"A",{href:!0});var Jl=i(wn);dr=r(Jl,"TFPreTrainedModel"),Jl.forEach(t),cr=r(sa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sa.forEach(t),pr=u(lt),Co=s(lt,"P",{});var aa=i(Co);ur=r(aa,"This model is also a "),qo=s(aa,"A",{href:!0,rel:!0});var Xl=i(qo);hr=r(Xl,"tf.keras.Model"),Xl.forEach(t),mr=r(aa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),aa.forEach(t),fr=u(lt),k(Qt.$$.fragment,lt),gr=u(lt),je=s(lt,"DIV",{class:!0});var go=i(je);k(jo.$$.fragment,go),_r=u(go),Ot=s(go,"P",{});var An=i(Ot);Tr=r(An,"The "),Pn=s(An,"A",{href:!0});var Yl=i(Pn);yr=r(Yl,"TFOPTModel"),Yl.forEach(t),br=r(An," forward method, overrides the "),Vn=s(An,"CODE",{});var ed=i(Vn);vr=r(ed,"__call__"),ed.forEach(t),kr=r(An," special method."),An.forEach(t),wr=u(go),k(Ut.$$.fragment,go),Pr=u(go),k(Bt.$$.fragment,go),go.forEach(t),lt.forEach(t),Ss=u(o),Ft=s(o,"H2",{class:!0});var ra=i(Ft);Kt=s(ra,"A",{id:!0,class:!0,href:!0});var td=i(Kt);Zn=s(td,"SPAN",{});var od=i(Zn);k(Lo.$$.fragment,od),od.forEach(t),td.forEach(t),$r=u(ra),Rn=s(ra,"SPAN",{});var nd=i(Rn);Or=r(nd,"TFOPTForCausalLM"),nd.forEach(t),ra.forEach(t),Ds=u(o),te=s(o,"DIV",{class:!0});var Ae=i(te);k(Ao.$$.fragment,Ae),Fr=u(Ae),Jn=s(Ae,"P",{});var sd=i(Jn);xr=r(sd,"The OPT Model transformer with a language modeling head on top."),sd.forEach(t),zr=u(Ae),No=s(Ae,"P",{});var ia=i(No);Mr=r(ia,"This model inherits from "),$n=s(ia,"A",{href:!0});var ad=i($n);Er=r(ad,"TFPreTrainedModel"),ad.forEach(t),Cr=r(ia,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ia.forEach(t),qr=u(Ae),Io=s(Ae,"P",{});var la=i(Io);jr=r(la,"This model is also a "),So=s(la,"A",{href:!0,rel:!0});var rd=i(So);Lr=r(rd,"tf.keras.Model"),rd.forEach(t),Ar=r(la,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),la.forEach(t),Nr=u(Ae),k(Vt.$$.fragment,Ae),Ir=u(Ae),Zt=s(Ae,"DIV",{class:!0});var da=i(Zt);k(Do.$$.fragment,da),Sr=u(da),k(Rt.$$.fragment,da),da.forEach(t),Ae.forEach(t),Ws=u(o),xt=s(o,"H2",{class:!0});var ca=i(xt);Jt=s(ca,"A",{id:!0,class:!0,href:!0});var id=i(Jt);Xn=s(id,"SPAN",{});var ld=i(Xn);k(Wo.$$.fragment,ld),ld.forEach(t),id.forEach(t),Dr=u(ca),Yn=s(ca,"SPAN",{});var dd=i(Yn);Wr=r(dd,"OPTForSequenceClassification"),dd.forEach(t),ca.forEach(t),Gs=u(o),U=s(o,"DIV",{class:!0});var ge=i(U);k(Go.$$.fragment,ge),Gr=u(ge),es=s(ge,"P",{});var cd=i(es);Hr=r(cd,"The OPT Model transformer with a sequence classification head on top (linear layer)."),cd.forEach(t),Qr=u(ge),On=s(ge,"P",{});var kl=i(On);Fn=s(kl,"A",{href:!0});var pd=i(Fn);Ur=r(pd,"OPTForSequenceClassification"),pd.forEach(t),Br=r(kl,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do.`),kl.forEach(t),Kr=u(ge),Oe=s(ge,"P",{});var dt=i(Oe);Vr=r(dt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ts=s(dt,"CODE",{});var ud=i(ts);Zr=r(ud,"pad_token_id"),ud.forEach(t),Rr=r(dt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),os=s(dt,"CODE",{});var hd=i(os);Jr=r(hd,"pad_token_id"),hd.forEach(t),Xr=r(dt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ns=s(dt,"CODE",{});var md=i(ns);Yr=r(md,"inputs_embeds"),md.forEach(t),ei=r(dt," are passed instead of "),ss=s(dt,"CODE",{});var fd=i(ss);ti=r(fd,"input_ids"),fd.forEach(t),oi=r(dt,`, it does the same (take the last value in
each row of the batch).`),dt.forEach(t),ni=u(ge),Ho=s(ge,"P",{});var pa=i(Ho);si=r(pa,"This model inherits from "),xn=s(pa,"A",{href:!0});var gd=i(xn);ai=r(gd,"PreTrainedModel"),gd.forEach(t),ri=r(pa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pa.forEach(t),ii=u(ge),Qo=s(ge,"P",{});var ua=i(Qo);li=r(ua,"This model is also a PyTorch "),Uo=s(ua,"A",{href:!0,rel:!0});var _d=i(Uo);di=r(_d,"torch.nn.Module"),_d.forEach(t),ci=r(ua,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ua.forEach(t),pi=u(ge),R=s(ge,"DIV",{class:!0});var _e=i(R);k(Bo.$$.fragment,_e),ui=u(_e),zt=s(_e,"P",{});var Nn=i(zt);hi=r(Nn,"The "),zn=s(Nn,"A",{href:!0});var Td=i(zn);mi=r(Td,"OPTForSequenceClassification"),Td.forEach(t),fi=r(Nn," forward method, overrides the "),as=s(Nn,"CODE",{});var yd=i(as);gi=r(yd,"__call__"),yd.forEach(t),_i=r(Nn," special method."),Nn.forEach(t),Ti=u(_e),k(Xt.$$.fragment,_e),yi=u(_e),k(Yt.$$.fragment,_e),bi=u(_e),k(eo.$$.fragment,_e),vi=u(_e),k(to.$$.fragment,_e),ki=u(_e),k(oo.$$.fragment,_e),_e.forEach(t),ge.forEach(t),Hs=u(o),Mt=s(o,"H2",{class:!0});var ha=i(Mt);no=s(ha,"A",{id:!0,class:!0,href:!0});var bd=i(no);rs=s(bd,"SPAN",{});var vd=i(rs);k(Ko.$$.fragment,vd),vd.forEach(t),bd.forEach(t),wi=u(ha),is=s(ha,"SPAN",{});var kd=i(is);Pi=r(kd,"OPTForQuestionAnswering"),kd.forEach(t),ha.forEach(t),Qs=u(o),he=s(o,"DIV",{class:!0});var ct=i(he);k(Vo.$$.fragment,ct),$i=u(ct),Et=s(ct,"P",{});var In=i(Et);Oi=r(In,`The OPT Model transformer with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layers on top of the hidden-states output to compute `),ls=s(In,"CODE",{});var wd=i(ls);Fi=r(wd,"span start logits"),wd.forEach(t),xi=r(In," and "),ds=s(In,"CODE",{});var Pd=i(ds);zi=r(Pd,"span end logits"),Pd.forEach(t),Mi=r(In,")."),In.forEach(t),Ei=u(ct),Zo=s(ct,"P",{});var ma=i(Zo);Ci=r(ma,"This model inherits from "),Mn=s(ma,"A",{href:!0});var $d=i(Mn);qi=r($d,"PreTrainedModel"),$d.forEach(t),ji=r(ma,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ma.forEach(t),Li=u(ct),Ro=s(ct,"P",{});var fa=i(Ro);Ai=r(fa,"This model is also a PyTorch "),Jo=s(fa,"A",{href:!0,rel:!0});var Od=i(Jo);Ni=r(Od,"torch.nn.Module"),Od.forEach(t),Ii=r(fa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fa.forEach(t),Si=u(ct),Le=s(ct,"DIV",{class:!0});var _o=i(Le);k(Xo.$$.fragment,_o),Di=u(_o),Ct=s(_o,"P",{});var Sn=i(Ct);Wi=r(Sn,"The "),En=s(Sn,"A",{href:!0});var Fd=i(En);Gi=r(Fd,"OPTForQuestionAnswering"),Fd.forEach(t),Hi=r(Sn," forward method, overrides the "),cs=s(Sn,"CODE",{});var xd=i(cs);Qi=r(xd,"__call__"),xd.forEach(t),Ui=r(Sn," special method."),Sn.forEach(t),Bi=u(_o),k(so.$$.fragment,_o),Ki=u(_o),k(ao.$$.fragment,_o),_o.forEach(t),ct.forEach(t),Us=u(o),qt=s(o,"H2",{class:!0});var ga=i(qt);ro=s(ga,"A",{id:!0,class:!0,href:!0});var zd=i(ro);ps=s(zd,"SPAN",{});var Md=i(ps);k(Yo.$$.fragment,Md),Md.forEach(t),zd.forEach(t),Vi=u(ga),us=s(ga,"SPAN",{});var Ed=i(us);Zi=r(Ed,"FlaxOPTModel"),Ed.forEach(t),ga.forEach(t),Bs=u(o),jt=s(o,"DIV",{class:!0});var _a=i(jt);k(en.$$.fragment,_a),Ri=u(_a),io=s(_a,"DIV",{class:!0});var Ta=i(io);k(tn.$$.fragment,Ta),Ji=u(Ta),k(lo.$$.fragment,Ta),Ta.forEach(t),_a.forEach(t),Ks=u(o),Lt=s(o,"H2",{class:!0});var ya=i(Lt);co=s(ya,"A",{id:!0,class:!0,href:!0});var Cd=i(co);hs=s(Cd,"SPAN",{});var qd=i(hs);k(on.$$.fragment,qd),qd.forEach(t),Cd.forEach(t),Xi=u(ya),ms=s(ya,"SPAN",{});var jd=i(ms);Yi=r(jd,"FlaxOPTForCausalLM"),jd.forEach(t),ya.forEach(t),Vs=u(o),B=s(o,"DIV",{class:!0});var Te=i(B);k(nn.$$.fragment,Te),el=u(Te),fs=s(Te,"P",{});var Ld=i(fs);tl=r(Ld,`OPT Model with a language modeling head on top (linear layer with weights tied to the input embeddings) e.g for
autoregressive tasks.`),Ld.forEach(t),ol=u(Te),sn=s(Te,"P",{});var ba=i(sn);nl=r(ba,"This model inherits from "),Cn=s(ba,"A",{href:!0});var Ad=i(Cn);sl=r(Ad,"FlaxPreTrainedModel"),Ad.forEach(t),al=r(ba,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ba.forEach(t),rl=u(Te),an=s(Te,"P",{});var va=i(an);il=r(va,`This model is also a Flax Linen
`),rn=s(va,"A",{href:!0,rel:!0});var Nd=i(rn);ll=r(Nd,"flax.nn.Module"),Nd.forEach(t),dl=r(va,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),va.forEach(t),cl=u(Te),gs=s(Te,"P",{});var Id=i(gs);pl=r(Id,"Finally, this model supports inherent JAX features such as:"),Id.forEach(t),ul=u(Te),st=s(Te,"UL",{});var To=i(st);_s=s(To,"LI",{});var Sd=i(_s);ln=s(Sd,"A",{href:!0,rel:!0});var Dd=i(ln);hl=r(Dd,"Just-In-Time (JIT) compilation"),Dd.forEach(t),Sd.forEach(t),ml=u(To),Ts=s(To,"LI",{});var Wd=i(Ts);dn=s(Wd,"A",{href:!0,rel:!0});var Gd=i(dn);fl=r(Gd,"Automatic Differentiation"),Gd.forEach(t),Wd.forEach(t),gl=u(To),ys=s(To,"LI",{});var Hd=i(ys);cn=s(Hd,"A",{href:!0,rel:!0});var Qd=i(cn);_l=r(Qd,"Vectorization"),Qd.forEach(t),Hd.forEach(t),Tl=u(To),bs=s(To,"LI",{});var Ud=i(bs);pn=s(Ud,"A",{href:!0,rel:!0});var Bd=i(pn);yl=r(Bd,"Parallelization"),Bd.forEach(t),Ud.forEach(t),To.forEach(t),bl=u(Te),po=s(Te,"DIV",{class:!0});var ka=i(po);k(un.$$.fragment,ka),vl=u(ka),k(uo.$$.fragment,ka),ka.forEach(t),Te.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(_c)),f(h,"id","opt"),f(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(h,"href","#opt"),f(m,"class","relative group"),f(ne,"id","overview"),f(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ne,"href","#overview"),f(L,"class","relative group"),f(re,"href","https://arxiv.org/pdf/2205.01068"),f(re,"rel","nofollow"),f(se,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer"),f(b,"href","https://huggingface.co/ArthurZ"),f(b,"rel","nofollow"),f(ee,"href","https://huggingface.co/ybelkada"),f(ee,"rel","nofollow"),f(M,"href","https://huggingface.co/patrickvonplaten"),f(M,"rel","nofollow"),f(we,"href","https://github.com/facebookresearch/metaseq"),f(we,"rel","nofollow"),f(fe,"id","transformers.OPTConfig"),f(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fe,"href","#transformers.OPTConfig"),f(D,"class","relative group"),f(Tn,"href","/docs/transformers/main/en/model_doc/opt#transformers.OPTModel"),f(yo,"href","https://huggingface.co/facebook/opt-350m"),f(yo,"rel","nofollow"),f(yn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(bn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Nt,"id","transformers.OPTModel"),f(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Nt,"href","#transformers.OPTModel"),f(vt,"class","relative group"),f(vn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Po,"rel","nofollow"),f(kn,"href","/docs/transformers/main/en/model_doc/opt#transformers.OPTModel"),f(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Dt,"id","transformers.OPTForCausalLM"),f(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Dt,"href","#transformers.OPTForCausalLM"),f(wt,"class","relative group"),f(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ht,"id","transformers.TFOPTModel"),f(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ht,"href","#transformers.TFOPTModel"),f($t,"class","relative group"),f(wn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(qo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(qo,"rel","nofollow"),f(Pn,"href","/docs/transformers/main/en/model_doc/opt#transformers.TFOPTModel"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Kt,"id","transformers.TFOPTForCausalLM"),f(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Kt,"href","#transformers.TFOPTForCausalLM"),f(Ft,"class","relative group"),f($n,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(So,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(So,"rel","nofollow"),f(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jt,"id","transformers.OPTForSequenceClassification"),f(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Jt,"href","#transformers.OPTForSequenceClassification"),f(xt,"class","relative group"),f(Fn,"href","/docs/transformers/main/en/model_doc/opt#transformers.OPTForSequenceClassification"),f(xn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Uo,"rel","nofollow"),f(zn,"href","/docs/transformers/main/en/model_doc/opt#transformers.OPTForSequenceClassification"),f(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(no,"id","transformers.OPTForQuestionAnswering"),f(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(no,"href","#transformers.OPTForQuestionAnswering"),f(Mt,"class","relative group"),f(Mn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Jo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Jo,"rel","nofollow"),f(En,"href","/docs/transformers/main/en/model_doc/opt#transformers.OPTForQuestionAnswering"),f(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ro,"id","transformers.FlaxOPTModel"),f(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ro,"href","#transformers.FlaxOPTModel"),f(qt,"class","relative group"),f(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(co,"id","transformers.FlaxOPTForCausalLM"),f(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(co,"href","#transformers.FlaxOPTForCausalLM"),f(Lt,"class","relative group"),f(Cn,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(rn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(rn,"rel","nofollow"),f(ln,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ln,"rel","nofollow"),f(dn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(dn,"rel","nofollow"),f(cn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(cn,"rel","nofollow"),f(pn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(pn,"rel","nofollow"),f(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,d),g(o,y,_),g(o,m,_),e(m,h),e(h,T),w(l,T,null),e(m,c),e(m,E),e(E,De),g(o,xe,_),g(o,L,_),e(L,ne),e(ne,ae),w(F,ae,null),e(L,We),e(L,J),e(J,Ge),g(o,ze,_),g(o,W,_),e(W,He),e(W,re),e(re,ie),e(W,Qe),g(o,Me,_),g(o,K,_),e(K,Ue),g(o,Ee,_),g(o,V,_),e(V,ye),e(ye,Be),g(o,me,_),g(o,C,_),e(C,A),g(o,Ce,_),g(o,G,_),e(G,le),e(le,Ke),e(le,X),e(X,Ve),e(le,Ze),e(G,N),e(G,I),e(I,de),e(I,be),e(be,Re),e(I,ce),e(I,ve),e(ve,Je),e(I,Y),e(I,ke),e(ke,pe),e(I,Xe),e(I,se),e(se,S),e(I,Ye),g(o,H,_),g(o,j,_),e(j,et),e(j,b),e(b,z),e(j,pt),e(j,ee),e(ee,ut),e(j,ht),e(j,M),e(M,mt),e(j,ft),e(j,we),e(we,gt),e(j,_t),g(o,Z,_),g(o,D,_),e(D,fe),e(fe,tt),w(Q,tt,null),e(D,Tt),e(D,ot),e(ot,nt),g(o,rt,_),g(o,q,_),w(Pe,q,null),e(q,wa),e(q,yt),e(yt,Pa),e(yt,Tn),e(Tn,$a),e(yt,Oa),e(yt,yo),e(yo,Fa),e(yt,xa),e(q,za),e(q,bt),e(bt,Ma),e(bt,yn),e(yn,Ea),e(bt,Ca),e(bt,bn),e(bn,qa),e(bt,ja),e(q,La),w(At,q,null),g(o,qs,_),g(o,vt,_),e(vt,Nt),e(Nt,Wn),w(bo,Wn,null),e(vt,Aa),e(vt,Gn),e(Gn,Na),g(o,js,_),g(o,$e,_),w(vo,$e,null),e($e,Ia),e($e,ko),e(ko,Sa),e(ko,vn),e(vn,Da),e(ko,Wa),e($e,Ga),e($e,wo),e(wo,Ha),e(wo,Po),e(Po,Qa),e(wo,Ua),e($e,Ba),e($e,qe),w($o,qe,null),e(qe,Ka),e(qe,kt),e(kt,Va),e(kt,kn),e(kn,Za),e(kt,Ra),e(kt,Hn),e(Hn,Ja),e(kt,Xa),e(qe,Ya),w(It,qe,null),e(qe,er),w(St,qe,null),g(o,Ls,_),g(o,wt,_),e(wt,Dt),e(Dt,Qn),w(Oo,Qn,null),e(wt,tr),e(wt,Un),e(Un,or),g(o,As,_),g(o,Pt,_),w(Fo,Pt,null),e(Pt,nr),e(Pt,Wt),w(xo,Wt,null),e(Wt,sr),w(Gt,Wt,null),g(o,Ns,_),g(o,$t,_),e($t,Ht),e(Ht,Bn),w(zo,Bn,null),e($t,ar),e($t,Kn),e(Kn,rr),g(o,Is,_),g(o,ue,_),w(Mo,ue,null),e(ue,ir),e(ue,Eo),e(Eo,lr),e(Eo,wn),e(wn,dr),e(Eo,cr),e(ue,pr),e(ue,Co),e(Co,ur),e(Co,qo),e(qo,hr),e(Co,mr),e(ue,fr),w(Qt,ue,null),e(ue,gr),e(ue,je),w(jo,je,null),e(je,_r),e(je,Ot),e(Ot,Tr),e(Ot,Pn),e(Pn,yr),e(Ot,br),e(Ot,Vn),e(Vn,vr),e(Ot,kr),e(je,wr),w(Ut,je,null),e(je,Pr),w(Bt,je,null),g(o,Ss,_),g(o,Ft,_),e(Ft,Kt),e(Kt,Zn),w(Lo,Zn,null),e(Ft,$r),e(Ft,Rn),e(Rn,Or),g(o,Ds,_),g(o,te,_),w(Ao,te,null),e(te,Fr),e(te,Jn),e(Jn,xr),e(te,zr),e(te,No),e(No,Mr),e(No,$n),e($n,Er),e(No,Cr),e(te,qr),e(te,Io),e(Io,jr),e(Io,So),e(So,Lr),e(Io,Ar),e(te,Nr),w(Vt,te,null),e(te,Ir),e(te,Zt),w(Do,Zt,null),e(Zt,Sr),w(Rt,Zt,null),g(o,Ws,_),g(o,xt,_),e(xt,Jt),e(Jt,Xn),w(Wo,Xn,null),e(xt,Dr),e(xt,Yn),e(Yn,Wr),g(o,Gs,_),g(o,U,_),w(Go,U,null),e(U,Gr),e(U,es),e(es,Hr),e(U,Qr),e(U,On),e(On,Fn),e(Fn,Ur),e(On,Br),e(U,Kr),e(U,Oe),e(Oe,Vr),e(Oe,ts),e(ts,Zr),e(Oe,Rr),e(Oe,os),e(os,Jr),e(Oe,Xr),e(Oe,ns),e(ns,Yr),e(Oe,ei),e(Oe,ss),e(ss,ti),e(Oe,oi),e(U,ni),e(U,Ho),e(Ho,si),e(Ho,xn),e(xn,ai),e(Ho,ri),e(U,ii),e(U,Qo),e(Qo,li),e(Qo,Uo),e(Uo,di),e(Qo,ci),e(U,pi),e(U,R),w(Bo,R,null),e(R,ui),e(R,zt),e(zt,hi),e(zt,zn),e(zn,mi),e(zt,fi),e(zt,as),e(as,gi),e(zt,_i),e(R,Ti),w(Xt,R,null),e(R,yi),w(Yt,R,null),e(R,bi),w(eo,R,null),e(R,vi),w(to,R,null),e(R,ki),w(oo,R,null),g(o,Hs,_),g(o,Mt,_),e(Mt,no),e(no,rs),w(Ko,rs,null),e(Mt,wi),e(Mt,is),e(is,Pi),g(o,Qs,_),g(o,he,_),w(Vo,he,null),e(he,$i),e(he,Et),e(Et,Oi),e(Et,ls),e(ls,Fi),e(Et,xi),e(Et,ds),e(ds,zi),e(Et,Mi),e(he,Ei),e(he,Zo),e(Zo,Ci),e(Zo,Mn),e(Mn,qi),e(Zo,ji),e(he,Li),e(he,Ro),e(Ro,Ai),e(Ro,Jo),e(Jo,Ni),e(Ro,Ii),e(he,Si),e(he,Le),w(Xo,Le,null),e(Le,Di),e(Le,Ct),e(Ct,Wi),e(Ct,En),e(En,Gi),e(Ct,Hi),e(Ct,cs),e(cs,Qi),e(Ct,Ui),e(Le,Bi),w(so,Le,null),e(Le,Ki),w(ao,Le,null),g(o,Us,_),g(o,qt,_),e(qt,ro),e(ro,ps),w(Yo,ps,null),e(qt,Vi),e(qt,us),e(us,Zi),g(o,Bs,_),g(o,jt,_),w(en,jt,null),e(jt,Ri),e(jt,io),w(tn,io,null),e(io,Ji),w(lo,io,null),g(o,Ks,_),g(o,Lt,_),e(Lt,co),e(co,hs),w(on,hs,null),e(Lt,Xi),e(Lt,ms),e(ms,Yi),g(o,Vs,_),g(o,B,_),w(nn,B,null),e(B,el),e(B,fs),e(fs,tl),e(B,ol),e(B,sn),e(sn,nl),e(sn,Cn),e(Cn,sl),e(sn,al),e(B,rl),e(B,an),e(an,il),e(an,rn),e(rn,ll),e(an,dl),e(B,cl),e(B,gs),e(gs,pl),e(B,ul),e(B,st),e(st,_s),e(_s,ln),e(ln,hl),e(st,ml),e(st,Ts),e(Ts,dn),e(dn,fl),e(st,gl),e(st,ys),e(ys,cn),e(cn,_l),e(st,Tl),e(st,bs),e(bs,pn),e(pn,yl),e(B,bl),e(B,po),w(un,po,null),e(po,vl),w(uo,po,null),Zs=!0},p(o,[_]){const hn={};_&2&&(hn.$$scope={dirty:_,ctx:o}),At.$set(hn);const vs={};_&2&&(vs.$$scope={dirty:_,ctx:o}),It.$set(vs);const ks={};_&2&&(ks.$$scope={dirty:_,ctx:o}),St.$set(ks);const ws={};_&2&&(ws.$$scope={dirty:_,ctx:o}),Gt.$set(ws);const mn={};_&2&&(mn.$$scope={dirty:_,ctx:o}),Qt.$set(mn);const Ps={};_&2&&(Ps.$$scope={dirty:_,ctx:o}),Ut.$set(Ps);const $s={};_&2&&($s.$$scope={dirty:_,ctx:o}),Bt.$set($s);const Os={};_&2&&(Os.$$scope={dirty:_,ctx:o}),Vt.$set(Os);const fn={};_&2&&(fn.$$scope={dirty:_,ctx:o}),Rt.$set(fn);const Fs={};_&2&&(Fs.$$scope={dirty:_,ctx:o}),Xt.$set(Fs);const xs={};_&2&&(xs.$$scope={dirty:_,ctx:o}),Yt.$set(xs);const zs={};_&2&&(zs.$$scope={dirty:_,ctx:o}),eo.$set(zs);const Ms={};_&2&&(Ms.$$scope={dirty:_,ctx:o}),to.$set(Ms);const Es={};_&2&&(Es.$$scope={dirty:_,ctx:o}),oo.$set(Es);const gn={};_&2&&(gn.$$scope={dirty:_,ctx:o}),so.$set(gn);const _n={};_&2&&(_n.$$scope={dirty:_,ctx:o}),ao.$set(_n);const Cs={};_&2&&(Cs.$$scope={dirty:_,ctx:o}),lo.$set(Cs);const Fe={};_&2&&(Fe.$$scope={dirty:_,ctx:o}),uo.$set(Fe)},i(o){Zs||(P(l.$$.fragment,o),P(F.$$.fragment,o),P(Q.$$.fragment,o),P(Pe.$$.fragment,o),P(At.$$.fragment,o),P(bo.$$.fragment,o),P(vo.$$.fragment,o),P($o.$$.fragment,o),P(It.$$.fragment,o),P(St.$$.fragment,o),P(Oo.$$.fragment,o),P(Fo.$$.fragment,o),P(xo.$$.fragment,o),P(Gt.$$.fragment,o),P(zo.$$.fragment,o),P(Mo.$$.fragment,o),P(Qt.$$.fragment,o),P(jo.$$.fragment,o),P(Ut.$$.fragment,o),P(Bt.$$.fragment,o),P(Lo.$$.fragment,o),P(Ao.$$.fragment,o),P(Vt.$$.fragment,o),P(Do.$$.fragment,o),P(Rt.$$.fragment,o),P(Wo.$$.fragment,o),P(Go.$$.fragment,o),P(Bo.$$.fragment,o),P(Xt.$$.fragment,o),P(Yt.$$.fragment,o),P(eo.$$.fragment,o),P(to.$$.fragment,o),P(oo.$$.fragment,o),P(Ko.$$.fragment,o),P(Vo.$$.fragment,o),P(Xo.$$.fragment,o),P(so.$$.fragment,o),P(ao.$$.fragment,o),P(Yo.$$.fragment,o),P(en.$$.fragment,o),P(tn.$$.fragment,o),P(lo.$$.fragment,o),P(on.$$.fragment,o),P(nn.$$.fragment,o),P(un.$$.fragment,o),P(uo.$$.fragment,o),Zs=!0)},o(o){$(l.$$.fragment,o),$(F.$$.fragment,o),$(Q.$$.fragment,o),$(Pe.$$.fragment,o),$(At.$$.fragment,o),$(bo.$$.fragment,o),$(vo.$$.fragment,o),$($o.$$.fragment,o),$(It.$$.fragment,o),$(St.$$.fragment,o),$(Oo.$$.fragment,o),$(Fo.$$.fragment,o),$(xo.$$.fragment,o),$(Gt.$$.fragment,o),$(zo.$$.fragment,o),$(Mo.$$.fragment,o),$(Qt.$$.fragment,o),$(jo.$$.fragment,o),$(Ut.$$.fragment,o),$(Bt.$$.fragment,o),$(Lo.$$.fragment,o),$(Ao.$$.fragment,o),$(Vt.$$.fragment,o),$(Do.$$.fragment,o),$(Rt.$$.fragment,o),$(Wo.$$.fragment,o),$(Go.$$.fragment,o),$(Bo.$$.fragment,o),$(Xt.$$.fragment,o),$(Yt.$$.fragment,o),$(eo.$$.fragment,o),$(to.$$.fragment,o),$(oo.$$.fragment,o),$(Ko.$$.fragment,o),$(Vo.$$.fragment,o),$(Xo.$$.fragment,o),$(so.$$.fragment,o),$(ao.$$.fragment,o),$(Yo.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(lo.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(un.$$.fragment,o),$(uo.$$.fragment,o),Zs=!1},d(o){t(d),o&&t(y),o&&t(m),O(l),o&&t(xe),o&&t(L),O(F),o&&t(ze),o&&t(W),o&&t(Me),o&&t(K),o&&t(Ee),o&&t(V),o&&t(me),o&&t(C),o&&t(Ce),o&&t(G),o&&t(H),o&&t(j),o&&t(Z),o&&t(D),O(Q),o&&t(rt),o&&t(q),O(Pe),O(At),o&&t(qs),o&&t(vt),O(bo),o&&t(js),o&&t($e),O(vo),O($o),O(It),O(St),o&&t(Ls),o&&t(wt),O(Oo),o&&t(As),o&&t(Pt),O(Fo),O(xo),O(Gt),o&&t(Ns),o&&t($t),O(zo),o&&t(Is),o&&t(ue),O(Mo),O(Qt),O(jo),O(Ut),O(Bt),o&&t(Ss),o&&t(Ft),O(Lo),o&&t(Ds),o&&t(te),O(Ao),O(Vt),O(Do),O(Rt),o&&t(Ws),o&&t(xt),O(Wo),o&&t(Gs),o&&t(U),O(Go),O(Bo),O(Xt),O(Yt),O(eo),O(to),O(oo),o&&t(Hs),o&&t(Mt),O(Ko),o&&t(Qs),o&&t(he),O(Vo),O(Xo),O(so),O(ao),o&&t(Us),o&&t(qt),O(Yo),o&&t(Bs),o&&t(jt),O(en),O(tn),O(lo),o&&t(Ks),o&&t(Lt),O(on),o&&t(Vs),o&&t(B),O(nn),O(un),O(uo)}}}const _c={local:"opt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OPTConfig",title:"OPTConfig"},{local:"transformers.OPTModel",title:"OPTModel"},{local:"transformers.OPTForCausalLM",title:"OPTForCausalLM"},{local:"transformers.TFOPTModel",title:"TFOPTModel"},{local:"transformers.TFOPTForCausalLM",title:"TFOPTForCausalLM"},{local:"transformers.OPTForSequenceClassification",title:"OPTForSequenceClassification"},{local:"transformers.OPTForQuestionAnswering",title:"OPTForQuestionAnswering"},{local:"transformers.FlaxOPTModel",title:"FlaxOPTModel"},{local:"transformers.FlaxOPTForCausalLM",title:"FlaxOPTForCausalLM"}],title:"OPT"};function Tc(x){return Jd(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class $c extends Kd{constructor(d){super();Vd(this,d,Tc,gc,Zd,{})}}export{$c as default,_c as metadata};
