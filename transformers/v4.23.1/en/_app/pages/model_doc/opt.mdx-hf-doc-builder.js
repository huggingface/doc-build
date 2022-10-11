import{S as Zd,i as Rd,s as Jd,e as n,k as h,w as y,t as a,M as Xd,c as s,d as t,m as f,a as i,x as k,h as r,b as m,G as e,g as _,y as w,q as $,o as P,B as O,v as Yd,L as Me}from"../../chunks/vendor-hf-doc-builder.js";import{T as Wn}from"../../chunks/Tip-hf-doc-builder.js";import{D as oe}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ee}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as at}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ze}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ec(x){let d,T,c,u,v;return u=new Ee({props:{code:`from transformers import OPTModel, OPTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),T=a("Example:"),c=h(),y(u.$$.fragment)},l(l){d=s(l,"P",{});var p=i(d);T=r(p,"Example:"),p.forEach(t),c=f(l),k(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,c,p),w(u,l,p),v=!0},p:Me,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){P(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),O(u,l)}}}function tc(x){let d,T,c,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var p=i(d);T=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(p,"CODE",{});var E=i(c);u=r(E,"Module"),E.forEach(t),v=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function oc(x){let d,T,c,u,v;return u=new Ee({props:{code:`from transformers import GPT2Tokenizer, OPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),T=a("Example:"),c=h(),y(u.$$.fragment)},l(l){d=s(l,"P",{});var p=i(d);T=r(p,"Example:"),p.forEach(t),c=f(l),k(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,c,p),w(u,l,p),v=!0},p:Me,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){P(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),O(u,l)}}}function nc(x){let d,T,c,u,v;return u=new Ee({props:{code:`from transformers import GPT2Tokenizer, OPTForCausalLM

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
<span class="hljs-string">&quot;Hey, are you consciours? Can you talk to me?\\nI&#x27;m not consciours, but I can talk to you.&quot;</span>`}}),{c(){d=n("p"),T=a("Example:"),c=h(),y(u.$$.fragment)},l(l){d=s(l,"P",{});var p=i(d);T=r(p,"Example:"),p.forEach(t),c=f(l),k(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,c,p),w(u,l,p),v=!0},p:Me,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){P(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),O(u,l)}}}function sc(x){let d,T,c,u,v,l,p,E,De,Ce,L,ne,ae,F,We,J,Ge,qe,W,Be,re,ie,He,je,K,Ue,Le,V,be,Qe,fe,C,A,Ae,G,le,Ke,X,Ve,Ze,N,I,de,ye,Re,ce,ke,Je,Y,we,pe,Xe,se,S,Ye,B,j,et;return{c(){d=n("p"),T=a("TensorFlow models and layers in "),c=n("code"),u=a("transformers"),v=a(" accept two formats as input:"),l=h(),p=n("ul"),E=n("li"),De=a("having all inputs as keyword arguments (like PyTorch models), or"),Ce=h(),L=n("li"),ne=a("having all inputs as a list, tuple or dict in the first positional argument."),ae=h(),F=n("p"),We=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),J=n("code"),Ge=a("model.fit()"),qe=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=n("code"),Be=a("model.fit()"),re=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=n("code"),He=a("fit()"),je=a(" and "),K=n("code"),Ue=a("predict()"),Le=a(`, such as when creating your own layers or models with
the Keras `),V=n("code"),be=a("Functional"),Qe=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),fe=h(),C=n("ul"),A=n("li"),Ae=a("a single Tensor with "),G=n("code"),le=a("input_ids"),Ke=a(" only and nothing else: "),X=n("code"),Ve=a("model(input_ids)"),Ze=h(),N=n("li"),I=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n("code"),ye=a("model([input_ids, attention_mask])"),Re=a(" or "),ce=n("code"),ke=a("model([input_ids, attention_mask, token_type_ids])"),Je=h(),Y=n("li"),we=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),pe=n("code"),Xe=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=h(),S=n("p"),Ye=a(`Note that when creating models and layers with
`),B=n("a"),j=a("subclassing"),et=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=s(b,"P",{});var z=i(d);T=r(z,"TensorFlow models and layers in "),c=s(z,"CODE",{});var ut=i(c);u=r(ut,"transformers"),ut.forEach(t),v=r(z," accept two formats as input:"),z.forEach(t),l=f(b),p=s(b,"UL",{});var ee=i(p);E=s(ee,"LI",{});var ht=i(E);De=r(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),Ce=f(ee),L=s(ee,"LI",{});var ft=i(L);ne=r(ft,"having all inputs as a list, tuple or dict in the first positional argument."),ft.forEach(t),ee.forEach(t),ae=f(b),F=s(b,"P",{});var M=i(F);We=r(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),J=s(M,"CODE",{});var mt=i(J);Ge=r(mt,"model.fit()"),mt.forEach(t),qe=r(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=s(M,"CODE",{});var gt=i(W);Be=r(gt,"model.fit()"),gt.forEach(t),re=r(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=s(M,"CODE",{});var $e=i(ie);He=r($e,"fit()"),$e.forEach(t),je=r(M," and "),K=s(M,"CODE",{});var _t=i(K);Ue=r(_t,"predict()"),_t.forEach(t),Le=r(M,`, such as when creating your own layers or models with
the Keras `),V=s(M,"CODE",{});var Tt=i(V);be=r(Tt,"Functional"),Tt.forEach(t),Qe=r(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),fe=f(b),C=s(b,"UL",{});var Z=i(C);A=s(Z,"LI",{});var D=i(A);Ae=r(D,"a single Tensor with "),G=s(D,"CODE",{});var me=i(G);le=r(me,"input_ids"),me.forEach(t),Ke=r(D," only and nothing else: "),X=s(D,"CODE",{});var tt=i(X);Ve=r(tt,"model(input_ids)"),tt.forEach(t),D.forEach(t),Ze=f(Z),N=s(Z,"LI",{});var H=i(N);I=r(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=s(H,"CODE",{});var vt=i(de);ye=r(vt,"model([input_ids, attention_mask])"),vt.forEach(t),Re=r(H," or "),ce=s(H,"CODE",{});var ot=i(ce);ke=r(ot,"model([input_ids, attention_mask, token_type_ids])"),ot.forEach(t),H.forEach(t),Je=f(Z),Y=s(Z,"LI",{});var nt=i(Y);we=r(nt,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),pe=s(nt,"CODE",{});var rt=i(pe);Xe=r(rt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),rt.forEach(t),nt.forEach(t),Z.forEach(t),se=f(b),S=s(b,"P",{});var q=i(S);Ye=r(q,`Note that when creating models and layers with
`),B=s(q,"A",{href:!0,rel:!0});var Pe=i(B);j=r(Pe,"subclassing"),Pe.forEach(t),et=r(q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),q.forEach(t),this.h()},h(){m(B,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(B,"rel","nofollow")},m(b,z){_(b,d,z),e(d,T),e(d,c),e(c,u),e(d,v),_(b,l,z),_(b,p,z),e(p,E),e(E,De),e(p,Ce),e(p,L),e(L,ne),_(b,ae,z),_(b,F,z),e(F,We),e(F,J),e(J,Ge),e(F,qe),e(F,W),e(W,Be),e(F,re),e(F,ie),e(ie,He),e(F,je),e(F,K),e(K,Ue),e(F,Le),e(F,V),e(V,be),e(F,Qe),_(b,fe,z),_(b,C,z),e(C,A),e(A,Ae),e(A,G),e(G,le),e(A,Ke),e(A,X),e(X,Ve),e(C,Ze),e(C,N),e(N,I),e(N,de),e(de,ye),e(N,Re),e(N,ce),e(ce,ke),e(C,Je),e(C,Y),e(Y,we),e(Y,pe),e(pe,Xe),_(b,se,z),_(b,S,z),e(S,Ye),e(S,B),e(B,j),e(S,et)},d(b){b&&t(d),b&&t(l),b&&t(p),b&&t(ae),b&&t(F),b&&t(fe),b&&t(C),b&&t(se),b&&t(S)}}}function ac(x){let d,T,c,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var p=i(d);T=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(p,"CODE",{});var E=i(c);u=r(E,"Module"),E.forEach(t),v=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function rc(x){let d,T,c,u,v;return u=new Ee({props:{code:`from transformers import GPT2Tokenizer, TFOPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),T=a("Example:"),c=h(),y(u.$$.fragment)},l(l){d=s(l,"P",{});var p=i(d);T=r(p,"Example:"),p.forEach(t),c=f(l),k(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,c,p),w(u,l,p),v=!0},p:Me,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){P(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),O(u,l)}}}function ic(x){let d,T,c,u,v,l,p,E,De,Ce,L,ne,ae,F,We,J,Ge,qe,W,Be,re,ie,He,je,K,Ue,Le,V,be,Qe,fe,C,A,Ae,G,le,Ke,X,Ve,Ze,N,I,de,ye,Re,ce,ke,Je,Y,we,pe,Xe,se,S,Ye,B,j,et;return{c(){d=n("p"),T=a("TensorFlow models and layers in "),c=n("code"),u=a("transformers"),v=a(" accept two formats as input:"),l=h(),p=n("ul"),E=n("li"),De=a("having all inputs as keyword arguments (like PyTorch models), or"),Ce=h(),L=n("li"),ne=a("having all inputs as a list, tuple or dict in the first positional argument."),ae=h(),F=n("p"),We=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),J=n("code"),Ge=a("model.fit()"),qe=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=n("code"),Be=a("model.fit()"),re=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=n("code"),He=a("fit()"),je=a(" and "),K=n("code"),Ue=a("predict()"),Le=a(`, such as when creating your own layers or models with
the Keras `),V=n("code"),be=a("Functional"),Qe=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),fe=h(),C=n("ul"),A=n("li"),Ae=a("a single Tensor with "),G=n("code"),le=a("input_ids"),Ke=a(" only and nothing else: "),X=n("code"),Ve=a("model(input_ids)"),Ze=h(),N=n("li"),I=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n("code"),ye=a("model([input_ids, attention_mask])"),Re=a(" or "),ce=n("code"),ke=a("model([input_ids, attention_mask, token_type_ids])"),Je=h(),Y=n("li"),we=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),pe=n("code"),Xe=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=h(),S=n("p"),Ye=a(`Note that when creating models and layers with
`),B=n("a"),j=a("subclassing"),et=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=s(b,"P",{});var z=i(d);T=r(z,"TensorFlow models and layers in "),c=s(z,"CODE",{});var ut=i(c);u=r(ut,"transformers"),ut.forEach(t),v=r(z," accept two formats as input:"),z.forEach(t),l=f(b),p=s(b,"UL",{});var ee=i(p);E=s(ee,"LI",{});var ht=i(E);De=r(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),Ce=f(ee),L=s(ee,"LI",{});var ft=i(L);ne=r(ft,"having all inputs as a list, tuple or dict in the first positional argument."),ft.forEach(t),ee.forEach(t),ae=f(b),F=s(b,"P",{});var M=i(F);We=r(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),J=s(M,"CODE",{});var mt=i(J);Ge=r(mt,"model.fit()"),mt.forEach(t),qe=r(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=s(M,"CODE",{});var gt=i(W);Be=r(gt,"model.fit()"),gt.forEach(t),re=r(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=s(M,"CODE",{});var $e=i(ie);He=r($e,"fit()"),$e.forEach(t),je=r(M," and "),K=s(M,"CODE",{});var _t=i(K);Ue=r(_t,"predict()"),_t.forEach(t),Le=r(M,`, such as when creating your own layers or models with
the Keras `),V=s(M,"CODE",{});var Tt=i(V);be=r(Tt,"Functional"),Tt.forEach(t),Qe=r(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),fe=f(b),C=s(b,"UL",{});var Z=i(C);A=s(Z,"LI",{});var D=i(A);Ae=r(D,"a single Tensor with "),G=s(D,"CODE",{});var me=i(G);le=r(me,"input_ids"),me.forEach(t),Ke=r(D," only and nothing else: "),X=s(D,"CODE",{});var tt=i(X);Ve=r(tt,"model(input_ids)"),tt.forEach(t),D.forEach(t),Ze=f(Z),N=s(Z,"LI",{});var H=i(N);I=r(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=s(H,"CODE",{});var vt=i(de);ye=r(vt,"model([input_ids, attention_mask])"),vt.forEach(t),Re=r(H," or "),ce=s(H,"CODE",{});var ot=i(ce);ke=r(ot,"model([input_ids, attention_mask, token_type_ids])"),ot.forEach(t),H.forEach(t),Je=f(Z),Y=s(Z,"LI",{});var nt=i(Y);we=r(nt,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),pe=s(nt,"CODE",{});var rt=i(pe);Xe=r(rt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),rt.forEach(t),nt.forEach(t),Z.forEach(t),se=f(b),S=s(b,"P",{});var q=i(S);Ye=r(q,`Note that when creating models and layers with
`),B=s(q,"A",{href:!0,rel:!0});var Pe=i(B);j=r(Pe,"subclassing"),Pe.forEach(t),et=r(q,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),q.forEach(t),this.h()},h(){m(B,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(B,"rel","nofollow")},m(b,z){_(b,d,z),e(d,T),e(d,c),e(c,u),e(d,v),_(b,l,z),_(b,p,z),e(p,E),e(E,De),e(p,Ce),e(p,L),e(L,ne),_(b,ae,z),_(b,F,z),e(F,We),e(F,J),e(J,Ge),e(F,qe),e(F,W),e(W,Be),e(F,re),e(F,ie),e(ie,He),e(F,je),e(F,K),e(K,Ue),e(F,Le),e(F,V),e(V,be),e(F,Qe),_(b,fe,z),_(b,C,z),e(C,A),e(A,Ae),e(A,G),e(G,le),e(A,Ke),e(A,X),e(X,Ve),e(C,Ze),e(C,N),e(N,I),e(N,de),e(de,ye),e(N,Re),e(N,ce),e(ce,ke),e(C,Je),e(C,Y),e(Y,we),e(Y,pe),e(pe,Xe),_(b,se,z),_(b,S,z),e(S,Ye),e(S,B),e(B,j),e(S,et)},d(b){b&&t(d),b&&t(l),b&&t(p),b&&t(ae),b&&t(F),b&&t(fe),b&&t(C),b&&t(se),b&&t(S)}}}function lc(x){let d,T,c,u,v;return u=new Ee({props:{code:`from transformers import GPT2Tokenizer, TFOPTForCausalLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),T=a("Example:"),c=h(),y(u.$$.fragment)},l(l){d=s(l,"P",{});var p=i(d);T=r(p,"Example:"),p.forEach(t),c=f(l),k(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,c,p),w(u,l,p),v=!0},p:Me,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){P(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),O(u,l)}}}function dc(x){let d,T,c,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var p=i(d);T=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(p,"CODE",{});var E=i(c);u=r(E,"Module"),E.forEach(t),v=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function cc(x){let d,T,c,u,v;return u=new Ee({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=n("p"),T=a("Example of single-label classification:"),c=h(),y(u.$$.fragment)},l(l){d=s(l,"P",{});var p=i(d);T=r(p,"Example of single-label classification:"),p.forEach(t),c=f(l),k(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,c,p),w(u,l,p),v=!0},p:Me,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){P(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),O(u,l)}}}function pc(x){let d,T;return d=new Ee({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = OPTForSequenceClassification.from_pretrained("ArthurZ/opt-350m-dummy-sc", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ArthurZ/opt-350m-dummy-sc&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.71</span>`}}),{c(){y(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,u){w(d,c,u),T=!0},p:Me,i(c){T||($(d.$$.fragment,c),T=!0)},o(c){P(d.$$.fragment,c),T=!1},d(c){O(d,c)}}}function uc(x){let d,T,c,u,v;return u=new Ee({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=n("p"),T=a("Example of multi-label classification:"),c=h(),y(u.$$.fragment)},l(l){d=s(l,"P",{});var p=i(d);T=r(p,"Example of multi-label classification:"),p.forEach(t),c=f(l),k(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,c,p),w(u,l,p),v=!0},p:Me,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){P(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),O(u,l)}}}function hc(x){let d,T;return d=new Ee({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,u){w(d,c,u),T=!0},p:Me,i(c){T||($(d.$$.fragment,c),T=!0)},o(c){P(d.$$.fragment,c),T=!1},d(c){O(d,c)}}}function fc(x){let d,T,c,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var p=i(d);T=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(p,"CODE",{});var E=i(c);u=r(E,"Module"),E.forEach(t),v=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function mc(x){let d,T,c,u,v;return u=new Ee({props:{code:`from transformers import GPT2Tokenizer, OPTForQuestionAnswering
import torch

tokenizer = GPT2Tokenizer.from_pretrained("facebook/opt-350m")
model = OPTForQuestionAnswering.from_pretrained("facebook/opt-350m")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, OPTForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=n("p"),T=a("Example:"),c=h(),y(u.$$.fragment)},l(l){d=s(l,"P",{});var p=i(d);T=r(p,"Example:"),p.forEach(t),c=f(l),k(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,c,p),w(u,l,p),v=!0},p:Me,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){P(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),O(u,l)}}}function gc(x){let d,T;return d=new Ee({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">7.41</span>`}}),{c(){y(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,u){w(d,c,u),T=!0},p:Me,i(c){T||($(d.$$.fragment,c),T=!0)},o(c){P(d.$$.fragment,c),T=!1},d(c){O(d,c)}}}function _c(x){let d,T,c,u,v;return u=new Ee({props:{code:`from transformers import GPT2Tokenizer, FlaxOPTModel

tokenizer = GPT2Tokenizer.from_pretrained("facebook/opt-350m")
model = FlaxOPTModel.from_pretrained("facebook/opt-350m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxOPTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxOPTModel.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),T=a("Example:"),c=h(),y(u.$$.fragment)},l(l){d=s(l,"P",{});var p=i(d);T=r(p,"Example:"),p.forEach(t),c=f(l),k(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,c,p),w(u,l,p),v=!0},p:Me,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){P(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),O(u,l)}}}function Tc(x){let d,T,c,u,v;return u=new Ee({props:{code:`from transformers import GPT2Tokenizer, FlaxOPTForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=n("p"),T=a("Example:"),c=h(),y(u.$$.fragment)},l(l){d=s(l,"P",{});var p=i(d);T=r(p,"Example:"),p.forEach(t),c=f(l),k(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,c,p),w(u,l,p),v=!0},p:Me,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){P(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),O(u,l)}}}function vc(x){let d,T,c,u,v,l,p,E,De,Ce,L,ne,ae,F,We,J,Ge,qe,W,Be,re,ie,He,je,K,Ue,Le,V,be,Qe,fe,C,A,Ae,G,le,Ke,X,Ve,Ze,N,I,de,ye,Re,ce,ke,Je,Y,we,pe,Xe,se,S,Ye,B,j,et,b,z,ut,ee,ht,ft,M,mt,gt,$e,_t,Tt,Z,D,me,tt,H,vt,ot,nt,rt,q,Pe,Pa,bt,Oa,vn,Fa,xa,bo,za,Ma,Ea,yt,Ca,bn,qa,ja,yn,La,Aa,Na,Nt,Ls,kt,It,Gn,yo,Ia,Bn,Sa,As,Oe,ko,Da,wo,Wa,kn,Ga,Ba,Ha,$o,Ua,Po,Qa,Ka,Va,Ne,Oo,Za,wt,Ra,wn,Ja,Xa,Hn,Ya,er,tr,St,or,Dt,Ns,$t,Wt,Un,Fo,nr,Qn,sr,Is,Pt,xo,ar,Gt,zo,rr,Bt,Ss,Ot,Ht,Kn,Mo,ir,Vn,lr,Ds,ue,Eo,dr,Co,cr,$n,pr,ur,hr,qo,fr,jo,mr,gr,_r,Ut,Tr,Ie,Lo,vr,Ft,br,Pn,yr,kr,Zn,wr,$r,Pr,Qt,Or,Kt,Ws,xt,Vt,Rn,Ao,Fr,Jn,xr,Gs,te,No,zr,Xn,Mr,Er,Io,Cr,On,qr,jr,Lr,So,Ar,Do,Nr,Ir,Sr,Zt,Dr,Rt,Wo,Wr,Jt,Bs,zt,Xt,Yn,Go,Gr,es,Br,Hs,U,Bo,Hr,ts,Ur,Qr,Fn,xn,Kr,Vr,Zr,Fe,Rr,os,Jr,Xr,ns,Yr,ei,ss,ti,oi,as,ni,si,ai,Ho,ri,zn,ii,li,di,Uo,ci,Qo,pi,ui,hi,R,Ko,fi,Mt,mi,Mn,gi,_i,rs,Ti,vi,bi,Yt,yi,eo,ki,to,wi,oo,$i,no,Us,Et,so,is,Vo,Pi,ls,Oi,Qs,he,Zo,Fi,Ct,xi,ds,zi,Mi,cs,Ei,Ci,qi,Ro,ji,En,Li,Ai,Ni,Jo,Ii,Xo,Si,Di,Wi,ge,Yo,Gi,qt,Bi,Cn,Hi,Ui,ps,Qi,Ki,Vi,ao,Zi,ro,Ri,io,Ks,jt,lo,us,en,Ji,hs,Xi,Vs,Lt,tn,Yi,co,on,el,po,Zs,At,uo,fs,nn,tl,ms,ol,Rs,Q,sn,nl,gs,sl,al,an,rl,qn,il,ll,dl,rn,cl,ln,pl,ul,hl,_s,fl,ml,st,Ts,dn,gl,_l,vs,cn,Tl,vl,bs,pn,bl,yl,ys,un,kl,wl,ho,hn,$l,fo,Js;return l=new at({}),F=new at({}),H=new at({}),Pe=new oe({props:{name:"class transformers.OPTConfig",anchor:"transformers.OPTConfig",parameters:[{name:"vocab_size",val:" = 50272"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"ffn_dim",val:" = 3072"},{name:"max_position_embeddings",val:" = 2048"},{name:"do_layer_norm_before",val:" = True"},{name:"_remove_final_layer_norm",val:" = False"},{name:"word_embed_proj_dim",val:" = None"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"num_attention_heads",val:" = 12"},{name:"activation_function",val:" = 'relu'"},{name:"layerdrop",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50272) &#x2014;
Vocabulary size of the OPT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.23.1/en/model_doc/opt#transformers.OPTModel">OPTModel</a>`,name:"vocab_size"},{anchor:"transformers.OPTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/opt/configuration_opt.py#L32"}}),Nt=new ze({props:{anchor:"transformers.OPTConfig.example",$$slots:{default:[ec]},$$scope:{ctx:x}}}),yo=new at({}),ko=new oe({props:{name:"class transformers.OPTModel",anchor:"transformers.OPTModel",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.1/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.23.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/opt/modeling_opt.py#L741"}}),Oo=new oe({props:{name:"forward",anchor:"transformers.OPTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.1/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/opt/modeling_opt.py#L757",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.1/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),St=new Wn({props:{$$slots:{default:[tc]},$$scope:{ctx:x}}}),Dt=new ze({props:{anchor:"transformers.OPTModel.forward.example",$$slots:{default:[oc]},$$scope:{ctx:x}}}),Fo=new at({}),xo=new oe({props:{name:"class transformers.OPTForCausalLM",anchor:"transformers.OPTForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/opt/modeling_opt.py#L809"}}),zo=new oe({props:{name:"forward",anchor:"transformers.OPTForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/opt/modeling_opt.py#L840",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.1/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bt=new ze({props:{anchor:"transformers.OPTForCausalLM.forward.example",$$slots:{default:[nc]},$$scope:{ctx:x}}}),Mo=new at({}),Eo=new oe({props:{name:"class transformers.TFOPTModel",anchor:"transformers.TFOPTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.1/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/opt/modeling_tf_opt.py#L785"}}),Ut=new Wn({props:{$$slots:{default:[sc]},$$scope:{ctx:x}}}),Lo=new oe({props:{name:"call",anchor:"transformers.TFOPTModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOPTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/opt/modeling_tf_opt.py#L799",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.1/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qt=new Wn({props:{$$slots:{default:[ac]},$$scope:{ctx:x}}}),Kt=new ze({props:{anchor:"transformers.TFOPTModel.call.example",$$slots:{default:[rc]},$$scope:{ctx:x}}}),Ao=new at({}),No=new oe({props:{name:"class transformers.TFOPTForCausalLM",anchor:"transformers.TFOPTForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.1/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/opt/modeling_tf_opt.py#L873"}}),Zt=new Wn({props:{$$slots:{default:[ic]},$$scope:{ctx:x}}}),Wo=new oe({props:{name:"call",anchor:"transformers.TFOPTForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/opt/modeling_tf_opt.py#L898",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.1/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or <code>tuple(tf.Tensor)</code>: A <a
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.1/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Jt=new ze({props:{anchor:"transformers.TFOPTForCausalLM.call.example",$$slots:{default:[lc]},$$scope:{ctx:x}}}),Go=new at({}),Bo=new oe({props:{name:"class transformers.OPTForSequenceClassification",anchor:"transformers.OPTForSequenceClassification",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.1/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.23.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/opt/modeling_opt.py#L1008"}}),Ko=new oe({props:{name:"forward",anchor:"transformers.OPTForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.1/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OPTForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/opt/modeling_opt.py#L1020",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.1/en/model_doc/opt#transformers.OPTConfig"
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
`}}),Yt=new Wn({props:{$$slots:{default:[dc]},$$scope:{ctx:x}}}),eo=new ze({props:{anchor:"transformers.OPTForSequenceClassification.forward.example",$$slots:{default:[cc]},$$scope:{ctx:x}}}),to=new ze({props:{anchor:"transformers.OPTForSequenceClassification.forward.example-2",$$slots:{default:[pc]},$$scope:{ctx:x}}}),oo=new ze({props:{anchor:"transformers.OPTForSequenceClassification.forward.example-3",$$slots:{default:[uc]},$$scope:{ctx:x}}}),no=new ze({props:{anchor:"transformers.OPTForSequenceClassification.forward.example-4",$$slots:{default:[hc]},$$scope:{ctx:x}}}),Vo=new at({}),Zo=new oe({props:{name:"class transformers.OPTForQuestionAnswering",anchor:"transformers.OPTForQuestionAnswering",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.1/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.23.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/opt/modeling_opt.py#L1131"}}),Yo=new oe({props:{name:"forward",anchor:"transformers.OPTForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OPTForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.1/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<p>Indices can be obtained using <code>OPTTokenizer</code>. See <a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OPTForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.OPTForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/opt/modeling_opt.py#L1142",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.1/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ao=new Wn({props:{$$slots:{default:[fc]},$$scope:{ctx:x}}}),ro=new ze({props:{anchor:"transformers.OPTForQuestionAnswering.forward.example",$$slots:{default:[mc]},$$scope:{ctx:x}}}),io=new ze({props:{anchor:"transformers.OPTForQuestionAnswering.forward.example-2",$$slots:{default:[gc]},$$scope:{ctx:x}}}),en=new at({}),tn=new oe({props:{name:"class transformers.FlaxOPTModel",anchor:"transformers.FlaxOPTModel",parameters:[{name:"config",val:": OPTConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/opt/modeling_flax_opt.py#L691"}}),on=new oe({props:{name:"__call__",anchor:"transformers.FlaxOPTModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"deterministic",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/opt/modeling_flax_opt.py#L583",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.1/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),po=new ze({props:{anchor:"transformers.FlaxOPTModel.__call__.example",$$slots:{default:[_c]},$$scope:{ctx:x}}}),nn=new at({}),sn=new oe({props:{name:"class transformers.FlaxOPTForCausalLM",anchor:"transformers.FlaxOPTForCausalLM",parameters:[{name:"config",val:": OPTConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxOPTForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.1/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxOPTForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.23.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.23.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/opt/modeling_flax_opt.py#L767"}}),hn=new oe({props:{name:"__call__",anchor:"transformers.FlaxOPTForCausalLM.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"deterministic",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/opt/modeling_flax_opt.py#L583",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.1/en/model_doc/opt#transformers.OPTConfig"
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
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new ze({props:{anchor:"transformers.FlaxOPTForCausalLM.__call__.example",$$slots:{default:[Tc]},$$scope:{ctx:x}}}),{c(){d=n("meta"),T=h(),c=n("h1"),u=n("a"),v=n("span"),y(l.$$.fragment),p=h(),E=n("span"),De=a("OPT"),Ce=h(),L=n("h2"),ne=n("a"),ae=n("span"),y(F.$$.fragment),We=h(),J=n("span"),Ge=a("Overview"),qe=h(),W=n("p"),Be=a("The OPT model was proposed in "),re=n("a"),ie=a("Open Pre-trained Transformer Language Models"),He=a(` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),je=h(),K=n("p"),Ue=a("The abstract from the paper is the following:"),Le=h(),V=n("p"),be=n("em"),Qe=a("Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),fe=h(),C=n("p"),A=a("Tips:"),Ae=h(),G=n("ul"),le=n("li"),Ke=a("OPT has the same architecture as "),X=n("code"),Ve=a("BartDecoder"),Ze=a("."),N=h(),I=n("li"),de=a("Contrary to GPT2, OPT adds the EOS token "),ye=n("code"),Re=a("</s>"),ce=a(" to the beginning of every prompt. "),ke=n("strong"),Je=a("Note"),Y=a(": Make sure to pass "),we=n("code"),pe=a("use_fast=False"),Xe=a(" when loading OPT\u2019s tokenizer with "),se=n("a"),S=a("AutoTokenizer"),Ye=a(" to get the correct tokenizer."),B=h(),j=n("p"),et=a("This model was contributed by "),b=n("a"),z=a("Arthur Zucker"),ut=a(", "),ee=n("a"),ht=a("Younes Belkada"),ft=a(", and "),M=n("a"),mt=a("Patrick Von Platen"),gt=a(`.
The original code can be found `),$e=n("a"),_t=a("here"),Tt=a("."),Z=h(),D=n("h2"),me=n("a"),tt=n("span"),y(H.$$.fragment),vt=h(),ot=n("span"),nt=a("OPTConfig"),rt=h(),q=n("div"),y(Pe.$$.fragment),Pa=h(),bt=n("p"),Oa=a("This is the configuration class to store the configuration of a "),vn=n("a"),Fa=a("OPTModel"),xa=a(`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),bo=n("a"),za=a("facebook/opt-350m"),Ma=a(" architecture."),Ea=h(),yt=n("p"),Ca=a("Configuration objects inherit from "),bn=n("a"),qa=a("PretrainedConfig"),ja=a(` and can be used to control the model outputs. Read the
documentation from `),yn=n("a"),La=a("PretrainedConfig"),Aa=a(" for more information."),Na=h(),y(Nt.$$.fragment),Ls=h(),kt=n("h2"),It=n("a"),Gn=n("span"),y(yo.$$.fragment),Ia=h(),Bn=n("span"),Sa=a("OPTModel"),As=h(),Oe=n("div"),y(ko.$$.fragment),Da=h(),wo=n("p"),Wa=a(`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),kn=n("a"),Ga=a("PreTrainedModel"),Ba=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ha=h(),$o=n("p"),Ua=a("This model is also a PyTorch "),Po=n("a"),Qa=a("torch.nn.Module"),Ka=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Va=h(),Ne=n("div"),y(Oo.$$.fragment),Za=h(),wt=n("p"),Ra=a("The "),wn=n("a"),Ja=a("OPTModel"),Xa=a(" forward method, overrides the "),Hn=n("code"),Ya=a("__call__"),er=a(" special method."),tr=h(),y(St.$$.fragment),or=h(),y(Dt.$$.fragment),Ns=h(),$t=n("h2"),Wt=n("a"),Un=n("span"),y(Fo.$$.fragment),nr=h(),Qn=n("span"),sr=a("OPTForCausalLM"),Is=h(),Pt=n("div"),y(xo.$$.fragment),ar=h(),Gt=n("div"),y(zo.$$.fragment),rr=h(),y(Bt.$$.fragment),Ss=h(),Ot=n("h2"),Ht=n("a"),Kn=n("span"),y(Mo.$$.fragment),ir=h(),Vn=n("span"),lr=a("TFOPTModel"),Ds=h(),ue=n("div"),y(Eo.$$.fragment),dr=h(),Co=n("p"),cr=a(`The bare TF OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$n=n("a"),pr=a("TFPreTrainedModel"),ur=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hr=h(),qo=n("p"),fr=a("This model is also a "),jo=n("a"),mr=a("tf.keras.Model"),gr=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_r=h(),y(Ut.$$.fragment),Tr=h(),Ie=n("div"),y(Lo.$$.fragment),vr=h(),Ft=n("p"),br=a("The "),Pn=n("a"),yr=a("TFOPTModel"),kr=a(" forward method, overrides the "),Zn=n("code"),wr=a("__call__"),$r=a(" special method."),Pr=h(),y(Qt.$$.fragment),Or=h(),y(Kt.$$.fragment),Ws=h(),xt=n("h2"),Vt=n("a"),Rn=n("span"),y(Ao.$$.fragment),Fr=h(),Jn=n("span"),xr=a("TFOPTForCausalLM"),Gs=h(),te=n("div"),y(No.$$.fragment),zr=h(),Xn=n("p"),Mr=a("The OPT Model transformer with a language modeling head on top."),Er=h(),Io=n("p"),Cr=a("This model inherits from "),On=n("a"),qr=a("TFPreTrainedModel"),jr=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lr=h(),So=n("p"),Ar=a("This model is also a "),Do=n("a"),Nr=a("tf.keras.Model"),Ir=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sr=h(),y(Zt.$$.fragment),Dr=h(),Rt=n("div"),y(Wo.$$.fragment),Wr=h(),y(Jt.$$.fragment),Bs=h(),zt=n("h2"),Xt=n("a"),Yn=n("span"),y(Go.$$.fragment),Gr=h(),es=n("span"),Br=a("OPTForSequenceClassification"),Hs=h(),U=n("div"),y(Bo.$$.fragment),Hr=h(),ts=n("p"),Ur=a("The OPT Model transformer with a sequence classification head on top (linear layer)."),Qr=h(),Fn=n("p"),xn=n("a"),Kr=a("OPTForSequenceClassification"),Vr=a(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do.`),Zr=h(),Fe=n("p"),Rr=a(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),os=n("code"),Jr=a("pad_token_id"),Xr=a(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),ns=n("code"),Yr=a("pad_token_id"),ei=a(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ss=n("code"),ti=a("inputs_embeds"),oi=a(" are passed instead of "),as=n("code"),ni=a("input_ids"),si=a(`, it does the same (take the last value in
each row of the batch).`),ai=h(),Ho=n("p"),ri=a("This model inherits from "),zn=n("a"),ii=a("PreTrainedModel"),li=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),di=h(),Uo=n("p"),ci=a("This model is also a PyTorch "),Qo=n("a"),pi=a("torch.nn.Module"),ui=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hi=h(),R=n("div"),y(Ko.$$.fragment),fi=h(),Mt=n("p"),mi=a("The "),Mn=n("a"),gi=a("OPTForSequenceClassification"),_i=a(" forward method, overrides the "),rs=n("code"),Ti=a("__call__"),vi=a(" special method."),bi=h(),y(Yt.$$.fragment),yi=h(),y(eo.$$.fragment),ki=h(),y(to.$$.fragment),wi=h(),y(oo.$$.fragment),$i=h(),y(no.$$.fragment),Us=h(),Et=n("h2"),so=n("a"),is=n("span"),y(Vo.$$.fragment),Pi=h(),ls=n("span"),Oi=a("OPTForQuestionAnswering"),Qs=h(),he=n("div"),y(Zo.$$.fragment),Fi=h(),Ct=n("p"),xi=a(`The OPT Model transformer with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layers on top of the hidden-states output to compute `),ds=n("code"),zi=a("span start logits"),Mi=a(" and "),cs=n("code"),Ei=a("span end logits"),Ci=a(")."),qi=h(),Ro=n("p"),ji=a("This model inherits from "),En=n("a"),Li=a("PreTrainedModel"),Ai=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ni=h(),Jo=n("p"),Ii=a("This model is also a PyTorch "),Xo=n("a"),Si=a("torch.nn.Module"),Di=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wi=h(),ge=n("div"),y(Yo.$$.fragment),Gi=h(),qt=n("p"),Bi=a("The "),Cn=n("a"),Hi=a("OPTForQuestionAnswering"),Ui=a(" forward method, overrides the "),ps=n("code"),Qi=a("__call__"),Ki=a(" special method."),Vi=h(),y(ao.$$.fragment),Zi=h(),y(ro.$$.fragment),Ri=h(),y(io.$$.fragment),Ks=h(),jt=n("h2"),lo=n("a"),us=n("span"),y(en.$$.fragment),Ji=h(),hs=n("span"),Xi=a("FlaxOPTModel"),Vs=h(),Lt=n("div"),y(tn.$$.fragment),Yi=h(),co=n("div"),y(on.$$.fragment),el=h(),y(po.$$.fragment),Zs=h(),At=n("h2"),uo=n("a"),fs=n("span"),y(nn.$$.fragment),tl=h(),ms=n("span"),ol=a("FlaxOPTForCausalLM"),Rs=h(),Q=n("div"),y(sn.$$.fragment),nl=h(),gs=n("p"),sl=a(`OPT Model with a language modeling head on top (linear layer with weights tied to the input embeddings) e.g for
autoregressive tasks.`),al=h(),an=n("p"),rl=a("This model inherits from "),qn=n("a"),il=a("FlaxPreTrainedModel"),ll=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dl=h(),rn=n("p"),cl=a(`This model is also a Flax Linen
`),ln=n("a"),pl=a("flax.nn.Module"),ul=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),hl=h(),_s=n("p"),fl=a("Finally, this model supports inherent JAX features such as:"),ml=h(),st=n("ul"),Ts=n("li"),dn=n("a"),gl=a("Just-In-Time (JIT) compilation"),_l=h(),vs=n("li"),cn=n("a"),Tl=a("Automatic Differentiation"),vl=h(),bs=n("li"),pn=n("a"),bl=a("Vectorization"),yl=h(),ys=n("li"),un=n("a"),kl=a("Parallelization"),wl=h(),ho=n("div"),y(hn.$$.fragment),$l=h(),y(fo.$$.fragment),this.h()},l(o){const g=Xd('[data-svelte="svelte-1phssyn"]',document.head);d=s(g,"META",{name:!0,content:!0}),g.forEach(t),T=f(o),c=s(o,"H1",{class:!0});var fn=i(c);u=s(fn,"A",{id:!0,class:!0,href:!0});var ks=i(u);v=s(ks,"SPAN",{});var ws=i(v);k(l.$$.fragment,ws),ws.forEach(t),ks.forEach(t),p=f(fn),E=s(fn,"SPAN",{});var $s=i(E);De=r($s,"OPT"),$s.forEach(t),fn.forEach(t),Ce=f(o),L=s(o,"H2",{class:!0});var mn=i(L);ne=s(mn,"A",{id:!0,class:!0,href:!0});var Ps=i(ne);ae=s(Ps,"SPAN",{});var Os=i(ae);k(F.$$.fragment,Os),Os.forEach(t),Ps.forEach(t),We=f(mn),J=s(mn,"SPAN",{});var Fs=i(J);Ge=r(Fs,"Overview"),Fs.forEach(t),mn.forEach(t),qe=f(o),W=s(o,"P",{});var gn=i(W);Be=r(gn,"The OPT model was proposed in "),re=s(gn,"A",{href:!0,rel:!0});var xs=i(re);ie=r(xs,"Open Pre-trained Transformer Language Models"),xs.forEach(t),He=r(gn,` by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`),gn.forEach(t),je=f(o),K=s(o,"P",{});var zs=i(K);Ue=r(zs,"The abstract from the paper is the following:"),zs.forEach(t),Le=f(o),V=s(o,"P",{});var Ms=i(V);be=s(Ms,"EM",{});var Es=i(be);Qe=r(Es,"Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models."),Es.forEach(t),Ms.forEach(t),fe=f(o),C=s(o,"P",{});var Cs=i(C);A=r(Cs,"Tips:"),Cs.forEach(t),Ae=f(o),G=s(o,"UL",{});var _n=i(G);le=s(_n,"LI",{});var Tn=i(le);Ke=r(Tn,"OPT has the same architecture as "),X=s(Tn,"CODE",{});var qs=i(X);Ve=r(qs,"BartDecoder"),qs.forEach(t),Ze=r(Tn,"."),Tn.forEach(t),N=f(_n),I=s(_n,"LI",{});var xe=i(I);de=r(xe,"Contrary to GPT2, OPT adds the EOS token "),ye=s(xe,"CODE",{});var js=i(ye);Re=r(js,"</s>"),js.forEach(t),ce=r(xe," to the beginning of every prompt. "),ke=s(xe,"STRONG",{});var Ol=i(ke);Je=r(Ol,"Note"),Ol.forEach(t),Y=r(xe,": Make sure to pass "),we=s(xe,"CODE",{});var Fl=i(we);pe=r(Fl,"use_fast=False"),Fl.forEach(t),Xe=r(xe," when loading OPT\u2019s tokenizer with "),se=s(xe,"A",{href:!0});var xl=i(se);S=r(xl,"AutoTokenizer"),xl.forEach(t),Ye=r(xe," to get the correct tokenizer."),xe.forEach(t),_n.forEach(t),B=f(o),j=s(o,"P",{});var it=i(j);et=r(it,"This model was contributed by "),b=s(it,"A",{href:!0,rel:!0});var zl=i(b);z=r(zl,"Arthur Zucker"),zl.forEach(t),ut=r(it,", "),ee=s(it,"A",{href:!0,rel:!0});var Ml=i(ee);ht=r(Ml,"Younes Belkada"),Ml.forEach(t),ft=r(it,", and "),M=s(it,"A",{href:!0,rel:!0});var El=i(M);mt=r(El,"Patrick Von Platen"),El.forEach(t),gt=r(it,`.
The original code can be found `),$e=s(it,"A",{href:!0,rel:!0});var Cl=i($e);_t=r(Cl,"here"),Cl.forEach(t),Tt=r(it,"."),it.forEach(t),Z=f(o),D=s(o,"H2",{class:!0});var Xs=i(D);me=s(Xs,"A",{id:!0,class:!0,href:!0});var ql=i(me);tt=s(ql,"SPAN",{});var jl=i(tt);k(H.$$.fragment,jl),jl.forEach(t),ql.forEach(t),vt=f(Xs),ot=s(Xs,"SPAN",{});var Ll=i(ot);nt=r(Ll,"OPTConfig"),Ll.forEach(t),Xs.forEach(t),rt=f(o),q=s(o,"DIV",{class:!0});var mo=i(q);k(Pe.$$.fragment,mo),Pa=f(mo),bt=s(mo,"P",{});var jn=i(bt);Oa=r(jn,"This is the configuration class to store the configuration of a "),vn=s(jn,"A",{href:!0});var Al=i(vn);Fa=r(Al,"OPTModel"),Al.forEach(t),xa=r(jn,`. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
`),bo=s(jn,"A",{href:!0,rel:!0});var Nl=i(bo);za=r(Nl,"facebook/opt-350m"),Nl.forEach(t),Ma=r(jn," architecture."),jn.forEach(t),Ea=f(mo),yt=s(mo,"P",{});var Ln=i(yt);Ca=r(Ln,"Configuration objects inherit from "),bn=s(Ln,"A",{href:!0});var Il=i(bn);qa=r(Il,"PretrainedConfig"),Il.forEach(t),ja=r(Ln,` and can be used to control the model outputs. Read the
documentation from `),yn=s(Ln,"A",{href:!0});var Sl=i(yn);La=r(Sl,"PretrainedConfig"),Sl.forEach(t),Aa=r(Ln," for more information."),Ln.forEach(t),Na=f(mo),k(Nt.$$.fragment,mo),mo.forEach(t),Ls=f(o),kt=s(o,"H2",{class:!0});var Ys=i(kt);It=s(Ys,"A",{id:!0,class:!0,href:!0});var Dl=i(It);Gn=s(Dl,"SPAN",{});var Wl=i(Gn);k(yo.$$.fragment,Wl),Wl.forEach(t),Dl.forEach(t),Ia=f(Ys),Bn=s(Ys,"SPAN",{});var Gl=i(Bn);Sa=r(Gl,"OPTModel"),Gl.forEach(t),Ys.forEach(t),As=f(o),Oe=s(o,"DIV",{class:!0});var go=i(Oe);k(ko.$$.fragment,go),Da=f(go),wo=s(go,"P",{});var ea=i(wo);Wa=r(ea,`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),kn=s(ea,"A",{href:!0});var Bl=i(kn);Ga=r(Bl,"PreTrainedModel"),Bl.forEach(t),Ba=r(ea,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ea.forEach(t),Ha=f(go),$o=s(go,"P",{});var ta=i($o);Ua=r(ta,"This model is also a PyTorch "),Po=s(ta,"A",{href:!0,rel:!0});var Hl=i(Po);Qa=r(Hl,"torch.nn.Module"),Hl.forEach(t),Ka=r(ta,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ta.forEach(t),Va=f(go),Ne=s(go,"DIV",{class:!0});var _o=i(Ne);k(Oo.$$.fragment,_o),Za=f(_o),wt=s(_o,"P",{});var An=i(wt);Ra=r(An,"The "),wn=s(An,"A",{href:!0});var Ul=i(wn);Ja=r(Ul,"OPTModel"),Ul.forEach(t),Xa=r(An," forward method, overrides the "),Hn=s(An,"CODE",{});var Ql=i(Hn);Ya=r(Ql,"__call__"),Ql.forEach(t),er=r(An," special method."),An.forEach(t),tr=f(_o),k(St.$$.fragment,_o),or=f(_o),k(Dt.$$.fragment,_o),_o.forEach(t),go.forEach(t),Ns=f(o),$t=s(o,"H2",{class:!0});var oa=i($t);Wt=s(oa,"A",{id:!0,class:!0,href:!0});var Kl=i(Wt);Un=s(Kl,"SPAN",{});var Vl=i(Un);k(Fo.$$.fragment,Vl),Vl.forEach(t),Kl.forEach(t),nr=f(oa),Qn=s(oa,"SPAN",{});var Zl=i(Qn);sr=r(Zl,"OPTForCausalLM"),Zl.forEach(t),oa.forEach(t),Is=f(o),Pt=s(o,"DIV",{class:!0});var na=i(Pt);k(xo.$$.fragment,na),ar=f(na),Gt=s(na,"DIV",{class:!0});var sa=i(Gt);k(zo.$$.fragment,sa),rr=f(sa),k(Bt.$$.fragment,sa),sa.forEach(t),na.forEach(t),Ss=f(o),Ot=s(o,"H2",{class:!0});var aa=i(Ot);Ht=s(aa,"A",{id:!0,class:!0,href:!0});var Rl=i(Ht);Kn=s(Rl,"SPAN",{});var Jl=i(Kn);k(Mo.$$.fragment,Jl),Jl.forEach(t),Rl.forEach(t),ir=f(aa),Vn=s(aa,"SPAN",{});var Xl=i(Vn);lr=r(Xl,"TFOPTModel"),Xl.forEach(t),aa.forEach(t),Ds=f(o),ue=s(o,"DIV",{class:!0});var lt=i(ue);k(Eo.$$.fragment,lt),dr=f(lt),Co=s(lt,"P",{});var ra=i(Co);cr=r(ra,`The bare TF OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$n=s(ra,"A",{href:!0});var Yl=i($n);pr=r(Yl,"TFPreTrainedModel"),Yl.forEach(t),ur=r(ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ra.forEach(t),hr=f(lt),qo=s(lt,"P",{});var ia=i(qo);fr=r(ia,"This model is also a "),jo=s(ia,"A",{href:!0,rel:!0});var ed=i(jo);mr=r(ed,"tf.keras.Model"),ed.forEach(t),gr=r(ia,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ia.forEach(t),_r=f(lt),k(Ut.$$.fragment,lt),Tr=f(lt),Ie=s(lt,"DIV",{class:!0});var To=i(Ie);k(Lo.$$.fragment,To),vr=f(To),Ft=s(To,"P",{});var Nn=i(Ft);br=r(Nn,"The "),Pn=s(Nn,"A",{href:!0});var td=i(Pn);yr=r(td,"TFOPTModel"),td.forEach(t),kr=r(Nn," forward method, overrides the "),Zn=s(Nn,"CODE",{});var od=i(Zn);wr=r(od,"__call__"),od.forEach(t),$r=r(Nn," special method."),Nn.forEach(t),Pr=f(To),k(Qt.$$.fragment,To),Or=f(To),k(Kt.$$.fragment,To),To.forEach(t),lt.forEach(t),Ws=f(o),xt=s(o,"H2",{class:!0});var la=i(xt);Vt=s(la,"A",{id:!0,class:!0,href:!0});var nd=i(Vt);Rn=s(nd,"SPAN",{});var sd=i(Rn);k(Ao.$$.fragment,sd),sd.forEach(t),nd.forEach(t),Fr=f(la),Jn=s(la,"SPAN",{});var ad=i(Jn);xr=r(ad,"TFOPTForCausalLM"),ad.forEach(t),la.forEach(t),Gs=f(o),te=s(o,"DIV",{class:!0});var Se=i(te);k(No.$$.fragment,Se),zr=f(Se),Xn=s(Se,"P",{});var rd=i(Xn);Mr=r(rd,"The OPT Model transformer with a language modeling head on top."),rd.forEach(t),Er=f(Se),Io=s(Se,"P",{});var da=i(Io);Cr=r(da,"This model inherits from "),On=s(da,"A",{href:!0});var id=i(On);qr=r(id,"TFPreTrainedModel"),id.forEach(t),jr=r(da,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),da.forEach(t),Lr=f(Se),So=s(Se,"P",{});var ca=i(So);Ar=r(ca,"This model is also a "),Do=s(ca,"A",{href:!0,rel:!0});var ld=i(Do);Nr=r(ld,"tf.keras.Model"),ld.forEach(t),Ir=r(ca,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ca.forEach(t),Sr=f(Se),k(Zt.$$.fragment,Se),Dr=f(Se),Rt=s(Se,"DIV",{class:!0});var pa=i(Rt);k(Wo.$$.fragment,pa),Wr=f(pa),k(Jt.$$.fragment,pa),pa.forEach(t),Se.forEach(t),Bs=f(o),zt=s(o,"H2",{class:!0});var ua=i(zt);Xt=s(ua,"A",{id:!0,class:!0,href:!0});var dd=i(Xt);Yn=s(dd,"SPAN",{});var cd=i(Yn);k(Go.$$.fragment,cd),cd.forEach(t),dd.forEach(t),Gr=f(ua),es=s(ua,"SPAN",{});var pd=i(es);Br=r(pd,"OPTForSequenceClassification"),pd.forEach(t),ua.forEach(t),Hs=f(o),U=s(o,"DIV",{class:!0});var _e=i(U);k(Bo.$$.fragment,_e),Hr=f(_e),ts=s(_e,"P",{});var ud=i(ts);Ur=r(ud,"The OPT Model transformer with a sequence classification head on top (linear layer)."),ud.forEach(t),Qr=f(_e),Fn=s(_e,"P",{});var Pl=i(Fn);xn=s(Pl,"A",{href:!0});var hd=i(xn);Kr=r(hd,"OPTForSequenceClassification"),hd.forEach(t),Vr=r(Pl,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do.`),Pl.forEach(t),Zr=f(_e),Fe=s(_e,"P",{});var dt=i(Fe);Rr=r(dt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),os=s(dt,"CODE",{});var fd=i(os);Jr=r(fd,"pad_token_id"),fd.forEach(t),Xr=r(dt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),ns=s(dt,"CODE",{});var md=i(ns);Yr=r(md,"pad_token_id"),md.forEach(t),ei=r(dt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ss=s(dt,"CODE",{});var gd=i(ss);ti=r(gd,"inputs_embeds"),gd.forEach(t),oi=r(dt," are passed instead of "),as=s(dt,"CODE",{});var _d=i(as);ni=r(_d,"input_ids"),_d.forEach(t),si=r(dt,`, it does the same (take the last value in
each row of the batch).`),dt.forEach(t),ai=f(_e),Ho=s(_e,"P",{});var ha=i(Ho);ri=r(ha,"This model inherits from "),zn=s(ha,"A",{href:!0});var Td=i(zn);ii=r(Td,"PreTrainedModel"),Td.forEach(t),li=r(ha,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ha.forEach(t),di=f(_e),Uo=s(_e,"P",{});var fa=i(Uo);ci=r(fa,"This model is also a PyTorch "),Qo=s(fa,"A",{href:!0,rel:!0});var vd=i(Qo);pi=r(vd,"torch.nn.Module"),vd.forEach(t),ui=r(fa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fa.forEach(t),hi=f(_e),R=s(_e,"DIV",{class:!0});var Te=i(R);k(Ko.$$.fragment,Te),fi=f(Te),Mt=s(Te,"P",{});var In=i(Mt);mi=r(In,"The "),Mn=s(In,"A",{href:!0});var bd=i(Mn);gi=r(bd,"OPTForSequenceClassification"),bd.forEach(t),_i=r(In," forward method, overrides the "),rs=s(In,"CODE",{});var yd=i(rs);Ti=r(yd,"__call__"),yd.forEach(t),vi=r(In," special method."),In.forEach(t),bi=f(Te),k(Yt.$$.fragment,Te),yi=f(Te),k(eo.$$.fragment,Te),ki=f(Te),k(to.$$.fragment,Te),wi=f(Te),k(oo.$$.fragment,Te),$i=f(Te),k(no.$$.fragment,Te),Te.forEach(t),_e.forEach(t),Us=f(o),Et=s(o,"H2",{class:!0});var ma=i(Et);so=s(ma,"A",{id:!0,class:!0,href:!0});var kd=i(so);is=s(kd,"SPAN",{});var wd=i(is);k(Vo.$$.fragment,wd),wd.forEach(t),kd.forEach(t),Pi=f(ma),ls=s(ma,"SPAN",{});var $d=i(ls);Oi=r($d,"OPTForQuestionAnswering"),$d.forEach(t),ma.forEach(t),Qs=f(o),he=s(o,"DIV",{class:!0});var ct=i(he);k(Zo.$$.fragment,ct),Fi=f(ct),Ct=s(ct,"P",{});var Sn=i(Ct);xi=r(Sn,`The OPT Model transformer with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layers on top of the hidden-states output to compute `),ds=s(Sn,"CODE",{});var Pd=i(ds);zi=r(Pd,"span start logits"),Pd.forEach(t),Mi=r(Sn," and "),cs=s(Sn,"CODE",{});var Od=i(cs);Ei=r(Od,"span end logits"),Od.forEach(t),Ci=r(Sn,")."),Sn.forEach(t),qi=f(ct),Ro=s(ct,"P",{});var ga=i(Ro);ji=r(ga,"This model inherits from "),En=s(ga,"A",{href:!0});var Fd=i(En);Li=r(Fd,"PreTrainedModel"),Fd.forEach(t),Ai=r(ga,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ga.forEach(t),Ni=f(ct),Jo=s(ct,"P",{});var _a=i(Jo);Ii=r(_a,"This model is also a PyTorch "),Xo=s(_a,"A",{href:!0,rel:!0});var xd=i(Xo);Si=r(xd,"torch.nn.Module"),xd.forEach(t),Di=r(_a,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_a.forEach(t),Wi=f(ct),ge=s(ct,"DIV",{class:!0});var pt=i(ge);k(Yo.$$.fragment,pt),Gi=f(pt),qt=s(pt,"P",{});var Dn=i(qt);Bi=r(Dn,"The "),Cn=s(Dn,"A",{href:!0});var zd=i(Cn);Hi=r(zd,"OPTForQuestionAnswering"),zd.forEach(t),Ui=r(Dn," forward method, overrides the "),ps=s(Dn,"CODE",{});var Md=i(ps);Qi=r(Md,"__call__"),Md.forEach(t),Ki=r(Dn," special method."),Dn.forEach(t),Vi=f(pt),k(ao.$$.fragment,pt),Zi=f(pt),k(ro.$$.fragment,pt),Ri=f(pt),k(io.$$.fragment,pt),pt.forEach(t),ct.forEach(t),Ks=f(o),jt=s(o,"H2",{class:!0});var Ta=i(jt);lo=s(Ta,"A",{id:!0,class:!0,href:!0});var Ed=i(lo);us=s(Ed,"SPAN",{});var Cd=i(us);k(en.$$.fragment,Cd),Cd.forEach(t),Ed.forEach(t),Ji=f(Ta),hs=s(Ta,"SPAN",{});var qd=i(hs);Xi=r(qd,"FlaxOPTModel"),qd.forEach(t),Ta.forEach(t),Vs=f(o),Lt=s(o,"DIV",{class:!0});var va=i(Lt);k(tn.$$.fragment,va),Yi=f(va),co=s(va,"DIV",{class:!0});var ba=i(co);k(on.$$.fragment,ba),el=f(ba),k(po.$$.fragment,ba),ba.forEach(t),va.forEach(t),Zs=f(o),At=s(o,"H2",{class:!0});var ya=i(At);uo=s(ya,"A",{id:!0,class:!0,href:!0});var jd=i(uo);fs=s(jd,"SPAN",{});var Ld=i(fs);k(nn.$$.fragment,Ld),Ld.forEach(t),jd.forEach(t),tl=f(ya),ms=s(ya,"SPAN",{});var Ad=i(ms);ol=r(Ad,"FlaxOPTForCausalLM"),Ad.forEach(t),ya.forEach(t),Rs=f(o),Q=s(o,"DIV",{class:!0});var ve=i(Q);k(sn.$$.fragment,ve),nl=f(ve),gs=s(ve,"P",{});var Nd=i(gs);sl=r(Nd,`OPT Model with a language modeling head on top (linear layer with weights tied to the input embeddings) e.g for
autoregressive tasks.`),Nd.forEach(t),al=f(ve),an=s(ve,"P",{});var ka=i(an);rl=r(ka,"This model inherits from "),qn=s(ka,"A",{href:!0});var Id=i(qn);il=r(Id,"FlaxPreTrainedModel"),Id.forEach(t),ll=r(ka,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ka.forEach(t),dl=f(ve),rn=s(ve,"P",{});var wa=i(rn);cl=r(wa,`This model is also a Flax Linen
`),ln=s(wa,"A",{href:!0,rel:!0});var Sd=i(ln);pl=r(Sd,"flax.nn.Module"),Sd.forEach(t),ul=r(wa,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),wa.forEach(t),hl=f(ve),_s=s(ve,"P",{});var Dd=i(_s);fl=r(Dd,"Finally, this model supports inherent JAX features such as:"),Dd.forEach(t),ml=f(ve),st=s(ve,"UL",{});var vo=i(st);Ts=s(vo,"LI",{});var Wd=i(Ts);dn=s(Wd,"A",{href:!0,rel:!0});var Gd=i(dn);gl=r(Gd,"Just-In-Time (JIT) compilation"),Gd.forEach(t),Wd.forEach(t),_l=f(vo),vs=s(vo,"LI",{});var Bd=i(vs);cn=s(Bd,"A",{href:!0,rel:!0});var Hd=i(cn);Tl=r(Hd,"Automatic Differentiation"),Hd.forEach(t),Bd.forEach(t),vl=f(vo),bs=s(vo,"LI",{});var Ud=i(bs);pn=s(Ud,"A",{href:!0,rel:!0});var Qd=i(pn);bl=r(Qd,"Vectorization"),Qd.forEach(t),Ud.forEach(t),yl=f(vo),ys=s(vo,"LI",{});var Kd=i(ys);un=s(Kd,"A",{href:!0,rel:!0});var Vd=i(un);kl=r(Vd,"Parallelization"),Vd.forEach(t),Kd.forEach(t),vo.forEach(t),wl=f(ve),ho=s(ve,"DIV",{class:!0});var $a=i(ho);k(hn.$$.fragment,$a),$l=f($a),k(fo.$$.fragment,$a),$a.forEach(t),ve.forEach(t),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(bc)),m(u,"id","opt"),m(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(u,"href","#opt"),m(c,"class","relative group"),m(ne,"id","overview"),m(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ne,"href","#overview"),m(L,"class","relative group"),m(re,"href","https://arxiv.org/pdf/2205.01068"),m(re,"rel","nofollow"),m(se,"href","/docs/transformers/v4.23.1/en/model_doc/auto#transformers.AutoTokenizer"),m(b,"href","https://huggingface.co/ArthurZ"),m(b,"rel","nofollow"),m(ee,"href","https://huggingface.co/ybelkada"),m(ee,"rel","nofollow"),m(M,"href","https://huggingface.co/patrickvonplaten"),m(M,"rel","nofollow"),m($e,"href","https://github.com/facebookresearch/metaseq"),m($e,"rel","nofollow"),m(me,"id","transformers.OPTConfig"),m(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(me,"href","#transformers.OPTConfig"),m(D,"class","relative group"),m(vn,"href","/docs/transformers/v4.23.1/en/model_doc/opt#transformers.OPTModel"),m(bo,"href","https://huggingface.co/facebook/opt-350m"),m(bo,"rel","nofollow"),m(bn,"href","/docs/transformers/v4.23.1/en/main_classes/configuration#transformers.PretrainedConfig"),m(yn,"href","/docs/transformers/v4.23.1/en/main_classes/configuration#transformers.PretrainedConfig"),m(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(It,"id","transformers.OPTModel"),m(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(It,"href","#transformers.OPTModel"),m(kt,"class","relative group"),m(kn,"href","/docs/transformers/v4.23.1/en/main_classes/model#transformers.PreTrainedModel"),m(Po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Po,"rel","nofollow"),m(wn,"href","/docs/transformers/v4.23.1/en/model_doc/opt#transformers.OPTModel"),m(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Wt,"id","transformers.OPTForCausalLM"),m(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Wt,"href","#transformers.OPTForCausalLM"),m($t,"class","relative group"),m(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ht,"id","transformers.TFOPTModel"),m(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ht,"href","#transformers.TFOPTModel"),m(Ot,"class","relative group"),m($n,"href","/docs/transformers/v4.23.1/en/main_classes/model#transformers.TFPreTrainedModel"),m(jo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(jo,"rel","nofollow"),m(Pn,"href","/docs/transformers/v4.23.1/en/model_doc/opt#transformers.TFOPTModel"),m(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Vt,"id","transformers.TFOPTForCausalLM"),m(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Vt,"href","#transformers.TFOPTForCausalLM"),m(xt,"class","relative group"),m(On,"href","/docs/transformers/v4.23.1/en/main_classes/model#transformers.TFPreTrainedModel"),m(Do,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Do,"rel","nofollow"),m(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xt,"id","transformers.OPTForSequenceClassification"),m(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Xt,"href","#transformers.OPTForSequenceClassification"),m(zt,"class","relative group"),m(xn,"href","/docs/transformers/v4.23.1/en/model_doc/opt#transformers.OPTForSequenceClassification"),m(zn,"href","/docs/transformers/v4.23.1/en/main_classes/model#transformers.PreTrainedModel"),m(Qo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Qo,"rel","nofollow"),m(Mn,"href","/docs/transformers/v4.23.1/en/model_doc/opt#transformers.OPTForSequenceClassification"),m(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(so,"id","transformers.OPTForQuestionAnswering"),m(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(so,"href","#transformers.OPTForQuestionAnswering"),m(Et,"class","relative group"),m(En,"href","/docs/transformers/v4.23.1/en/main_classes/model#transformers.PreTrainedModel"),m(Xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Xo,"rel","nofollow"),m(Cn,"href","/docs/transformers/v4.23.1/en/model_doc/opt#transformers.OPTForQuestionAnswering"),m(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(lo,"id","transformers.FlaxOPTModel"),m(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(lo,"href","#transformers.FlaxOPTModel"),m(jt,"class","relative group"),m(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(uo,"id","transformers.FlaxOPTForCausalLM"),m(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(uo,"href","#transformers.FlaxOPTForCausalLM"),m(At,"class","relative group"),m(qn,"href","/docs/transformers/v4.23.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(ln,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),m(ln,"rel","nofollow"),m(dn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(dn,"rel","nofollow"),m(cn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(cn,"rel","nofollow"),m(pn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(pn,"rel","nofollow"),m(un,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(un,"rel","nofollow"),m(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,d),_(o,T,g),_(o,c,g),e(c,u),e(u,v),w(l,v,null),e(c,p),e(c,E),e(E,De),_(o,Ce,g),_(o,L,g),e(L,ne),e(ne,ae),w(F,ae,null),e(L,We),e(L,J),e(J,Ge),_(o,qe,g),_(o,W,g),e(W,Be),e(W,re),e(re,ie),e(W,He),_(o,je,g),_(o,K,g),e(K,Ue),_(o,Le,g),_(o,V,g),e(V,be),e(be,Qe),_(o,fe,g),_(o,C,g),e(C,A),_(o,Ae,g),_(o,G,g),e(G,le),e(le,Ke),e(le,X),e(X,Ve),e(le,Ze),e(G,N),e(G,I),e(I,de),e(I,ye),e(ye,Re),e(I,ce),e(I,ke),e(ke,Je),e(I,Y),e(I,we),e(we,pe),e(I,Xe),e(I,se),e(se,S),e(I,Ye),_(o,B,g),_(o,j,g),e(j,et),e(j,b),e(b,z),e(j,ut),e(j,ee),e(ee,ht),e(j,ft),e(j,M),e(M,mt),e(j,gt),e(j,$e),e($e,_t),e(j,Tt),_(o,Z,g),_(o,D,g),e(D,me),e(me,tt),w(H,tt,null),e(D,vt),e(D,ot),e(ot,nt),_(o,rt,g),_(o,q,g),w(Pe,q,null),e(q,Pa),e(q,bt),e(bt,Oa),e(bt,vn),e(vn,Fa),e(bt,xa),e(bt,bo),e(bo,za),e(bt,Ma),e(q,Ea),e(q,yt),e(yt,Ca),e(yt,bn),e(bn,qa),e(yt,ja),e(yt,yn),e(yn,La),e(yt,Aa),e(q,Na),w(Nt,q,null),_(o,Ls,g),_(o,kt,g),e(kt,It),e(It,Gn),w(yo,Gn,null),e(kt,Ia),e(kt,Bn),e(Bn,Sa),_(o,As,g),_(o,Oe,g),w(ko,Oe,null),e(Oe,Da),e(Oe,wo),e(wo,Wa),e(wo,kn),e(kn,Ga),e(wo,Ba),e(Oe,Ha),e(Oe,$o),e($o,Ua),e($o,Po),e(Po,Qa),e($o,Ka),e(Oe,Va),e(Oe,Ne),w(Oo,Ne,null),e(Ne,Za),e(Ne,wt),e(wt,Ra),e(wt,wn),e(wn,Ja),e(wt,Xa),e(wt,Hn),e(Hn,Ya),e(wt,er),e(Ne,tr),w(St,Ne,null),e(Ne,or),w(Dt,Ne,null),_(o,Ns,g),_(o,$t,g),e($t,Wt),e(Wt,Un),w(Fo,Un,null),e($t,nr),e($t,Qn),e(Qn,sr),_(o,Is,g),_(o,Pt,g),w(xo,Pt,null),e(Pt,ar),e(Pt,Gt),w(zo,Gt,null),e(Gt,rr),w(Bt,Gt,null),_(o,Ss,g),_(o,Ot,g),e(Ot,Ht),e(Ht,Kn),w(Mo,Kn,null),e(Ot,ir),e(Ot,Vn),e(Vn,lr),_(o,Ds,g),_(o,ue,g),w(Eo,ue,null),e(ue,dr),e(ue,Co),e(Co,cr),e(Co,$n),e($n,pr),e(Co,ur),e(ue,hr),e(ue,qo),e(qo,fr),e(qo,jo),e(jo,mr),e(qo,gr),e(ue,_r),w(Ut,ue,null),e(ue,Tr),e(ue,Ie),w(Lo,Ie,null),e(Ie,vr),e(Ie,Ft),e(Ft,br),e(Ft,Pn),e(Pn,yr),e(Ft,kr),e(Ft,Zn),e(Zn,wr),e(Ft,$r),e(Ie,Pr),w(Qt,Ie,null),e(Ie,Or),w(Kt,Ie,null),_(o,Ws,g),_(o,xt,g),e(xt,Vt),e(Vt,Rn),w(Ao,Rn,null),e(xt,Fr),e(xt,Jn),e(Jn,xr),_(o,Gs,g),_(o,te,g),w(No,te,null),e(te,zr),e(te,Xn),e(Xn,Mr),e(te,Er),e(te,Io),e(Io,Cr),e(Io,On),e(On,qr),e(Io,jr),e(te,Lr),e(te,So),e(So,Ar),e(So,Do),e(Do,Nr),e(So,Ir),e(te,Sr),w(Zt,te,null),e(te,Dr),e(te,Rt),w(Wo,Rt,null),e(Rt,Wr),w(Jt,Rt,null),_(o,Bs,g),_(o,zt,g),e(zt,Xt),e(Xt,Yn),w(Go,Yn,null),e(zt,Gr),e(zt,es),e(es,Br),_(o,Hs,g),_(o,U,g),w(Bo,U,null),e(U,Hr),e(U,ts),e(ts,Ur),e(U,Qr),e(U,Fn),e(Fn,xn),e(xn,Kr),e(Fn,Vr),e(U,Zr),e(U,Fe),e(Fe,Rr),e(Fe,os),e(os,Jr),e(Fe,Xr),e(Fe,ns),e(ns,Yr),e(Fe,ei),e(Fe,ss),e(ss,ti),e(Fe,oi),e(Fe,as),e(as,ni),e(Fe,si),e(U,ai),e(U,Ho),e(Ho,ri),e(Ho,zn),e(zn,ii),e(Ho,li),e(U,di),e(U,Uo),e(Uo,ci),e(Uo,Qo),e(Qo,pi),e(Uo,ui),e(U,hi),e(U,R),w(Ko,R,null),e(R,fi),e(R,Mt),e(Mt,mi),e(Mt,Mn),e(Mn,gi),e(Mt,_i),e(Mt,rs),e(rs,Ti),e(Mt,vi),e(R,bi),w(Yt,R,null),e(R,yi),w(eo,R,null),e(R,ki),w(to,R,null),e(R,wi),w(oo,R,null),e(R,$i),w(no,R,null),_(o,Us,g),_(o,Et,g),e(Et,so),e(so,is),w(Vo,is,null),e(Et,Pi),e(Et,ls),e(ls,Oi),_(o,Qs,g),_(o,he,g),w(Zo,he,null),e(he,Fi),e(he,Ct),e(Ct,xi),e(Ct,ds),e(ds,zi),e(Ct,Mi),e(Ct,cs),e(cs,Ei),e(Ct,Ci),e(he,qi),e(he,Ro),e(Ro,ji),e(Ro,En),e(En,Li),e(Ro,Ai),e(he,Ni),e(he,Jo),e(Jo,Ii),e(Jo,Xo),e(Xo,Si),e(Jo,Di),e(he,Wi),e(he,ge),w(Yo,ge,null),e(ge,Gi),e(ge,qt),e(qt,Bi),e(qt,Cn),e(Cn,Hi),e(qt,Ui),e(qt,ps),e(ps,Qi),e(qt,Ki),e(ge,Vi),w(ao,ge,null),e(ge,Zi),w(ro,ge,null),e(ge,Ri),w(io,ge,null),_(o,Ks,g),_(o,jt,g),e(jt,lo),e(lo,us),w(en,us,null),e(jt,Ji),e(jt,hs),e(hs,Xi),_(o,Vs,g),_(o,Lt,g),w(tn,Lt,null),e(Lt,Yi),e(Lt,co),w(on,co,null),e(co,el),w(po,co,null),_(o,Zs,g),_(o,At,g),e(At,uo),e(uo,fs),w(nn,fs,null),e(At,tl),e(At,ms),e(ms,ol),_(o,Rs,g),_(o,Q,g),w(sn,Q,null),e(Q,nl),e(Q,gs),e(gs,sl),e(Q,al),e(Q,an),e(an,rl),e(an,qn),e(qn,il),e(an,ll),e(Q,dl),e(Q,rn),e(rn,cl),e(rn,ln),e(ln,pl),e(rn,ul),e(Q,hl),e(Q,_s),e(_s,fl),e(Q,ml),e(Q,st),e(st,Ts),e(Ts,dn),e(dn,gl),e(st,_l),e(st,vs),e(vs,cn),e(cn,Tl),e(st,vl),e(st,bs),e(bs,pn),e(pn,bl),e(st,yl),e(st,ys),e(ys,un),e(un,kl),e(Q,wl),e(Q,ho),w(hn,ho,null),e(ho,$l),w(fo,ho,null),Js=!0},p(o,[g]){const fn={};g&2&&(fn.$$scope={dirty:g,ctx:o}),Nt.$set(fn);const ks={};g&2&&(ks.$$scope={dirty:g,ctx:o}),St.$set(ks);const ws={};g&2&&(ws.$$scope={dirty:g,ctx:o}),Dt.$set(ws);const $s={};g&2&&($s.$$scope={dirty:g,ctx:o}),Bt.$set($s);const mn={};g&2&&(mn.$$scope={dirty:g,ctx:o}),Ut.$set(mn);const Ps={};g&2&&(Ps.$$scope={dirty:g,ctx:o}),Qt.$set(Ps);const Os={};g&2&&(Os.$$scope={dirty:g,ctx:o}),Kt.$set(Os);const Fs={};g&2&&(Fs.$$scope={dirty:g,ctx:o}),Zt.$set(Fs);const gn={};g&2&&(gn.$$scope={dirty:g,ctx:o}),Jt.$set(gn);const xs={};g&2&&(xs.$$scope={dirty:g,ctx:o}),Yt.$set(xs);const zs={};g&2&&(zs.$$scope={dirty:g,ctx:o}),eo.$set(zs);const Ms={};g&2&&(Ms.$$scope={dirty:g,ctx:o}),to.$set(Ms);const Es={};g&2&&(Es.$$scope={dirty:g,ctx:o}),oo.$set(Es);const Cs={};g&2&&(Cs.$$scope={dirty:g,ctx:o}),no.$set(Cs);const _n={};g&2&&(_n.$$scope={dirty:g,ctx:o}),ao.$set(_n);const Tn={};g&2&&(Tn.$$scope={dirty:g,ctx:o}),ro.$set(Tn);const qs={};g&2&&(qs.$$scope={dirty:g,ctx:o}),io.$set(qs);const xe={};g&2&&(xe.$$scope={dirty:g,ctx:o}),po.$set(xe);const js={};g&2&&(js.$$scope={dirty:g,ctx:o}),fo.$set(js)},i(o){Js||($(l.$$.fragment,o),$(F.$$.fragment,o),$(H.$$.fragment,o),$(Pe.$$.fragment,o),$(Nt.$$.fragment,o),$(yo.$$.fragment,o),$(ko.$$.fragment,o),$(Oo.$$.fragment,o),$(St.$$.fragment,o),$(Dt.$$.fragment,o),$(Fo.$$.fragment,o),$(xo.$$.fragment,o),$(zo.$$.fragment,o),$(Bt.$$.fragment,o),$(Mo.$$.fragment,o),$(Eo.$$.fragment,o),$(Ut.$$.fragment,o),$(Lo.$$.fragment,o),$(Qt.$$.fragment,o),$(Kt.$$.fragment,o),$(Ao.$$.fragment,o),$(No.$$.fragment,o),$(Zt.$$.fragment,o),$(Wo.$$.fragment,o),$(Jt.$$.fragment,o),$(Go.$$.fragment,o),$(Bo.$$.fragment,o),$(Ko.$$.fragment,o),$(Yt.$$.fragment,o),$(eo.$$.fragment,o),$(to.$$.fragment,o),$(oo.$$.fragment,o),$(no.$$.fragment,o),$(Vo.$$.fragment,o),$(Zo.$$.fragment,o),$(Yo.$$.fragment,o),$(ao.$$.fragment,o),$(ro.$$.fragment,o),$(io.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(po.$$.fragment,o),$(nn.$$.fragment,o),$(sn.$$.fragment,o),$(hn.$$.fragment,o),$(fo.$$.fragment,o),Js=!0)},o(o){P(l.$$.fragment,o),P(F.$$.fragment,o),P(H.$$.fragment,o),P(Pe.$$.fragment,o),P(Nt.$$.fragment,o),P(yo.$$.fragment,o),P(ko.$$.fragment,o),P(Oo.$$.fragment,o),P(St.$$.fragment,o),P(Dt.$$.fragment,o),P(Fo.$$.fragment,o),P(xo.$$.fragment,o),P(zo.$$.fragment,o),P(Bt.$$.fragment,o),P(Mo.$$.fragment,o),P(Eo.$$.fragment,o),P(Ut.$$.fragment,o),P(Lo.$$.fragment,o),P(Qt.$$.fragment,o),P(Kt.$$.fragment,o),P(Ao.$$.fragment,o),P(No.$$.fragment,o),P(Zt.$$.fragment,o),P(Wo.$$.fragment,o),P(Jt.$$.fragment,o),P(Go.$$.fragment,o),P(Bo.$$.fragment,o),P(Ko.$$.fragment,o),P(Yt.$$.fragment,o),P(eo.$$.fragment,o),P(to.$$.fragment,o),P(oo.$$.fragment,o),P(no.$$.fragment,o),P(Vo.$$.fragment,o),P(Zo.$$.fragment,o),P(Yo.$$.fragment,o),P(ao.$$.fragment,o),P(ro.$$.fragment,o),P(io.$$.fragment,o),P(en.$$.fragment,o),P(tn.$$.fragment,o),P(on.$$.fragment,o),P(po.$$.fragment,o),P(nn.$$.fragment,o),P(sn.$$.fragment,o),P(hn.$$.fragment,o),P(fo.$$.fragment,o),Js=!1},d(o){t(d),o&&t(T),o&&t(c),O(l),o&&t(Ce),o&&t(L),O(F),o&&t(qe),o&&t(W),o&&t(je),o&&t(K),o&&t(Le),o&&t(V),o&&t(fe),o&&t(C),o&&t(Ae),o&&t(G),o&&t(B),o&&t(j),o&&t(Z),o&&t(D),O(H),o&&t(rt),o&&t(q),O(Pe),O(Nt),o&&t(Ls),o&&t(kt),O(yo),o&&t(As),o&&t(Oe),O(ko),O(Oo),O(St),O(Dt),o&&t(Ns),o&&t($t),O(Fo),o&&t(Is),o&&t(Pt),O(xo),O(zo),O(Bt),o&&t(Ss),o&&t(Ot),O(Mo),o&&t(Ds),o&&t(ue),O(Eo),O(Ut),O(Lo),O(Qt),O(Kt),o&&t(Ws),o&&t(xt),O(Ao),o&&t(Gs),o&&t(te),O(No),O(Zt),O(Wo),O(Jt),o&&t(Bs),o&&t(zt),O(Go),o&&t(Hs),o&&t(U),O(Bo),O(Ko),O(Yt),O(eo),O(to),O(oo),O(no),o&&t(Us),o&&t(Et),O(Vo),o&&t(Qs),o&&t(he),O(Zo),O(Yo),O(ao),O(ro),O(io),o&&t(Ks),o&&t(jt),O(en),o&&t(Vs),o&&t(Lt),O(tn),O(on),O(po),o&&t(Zs),o&&t(At),O(nn),o&&t(Rs),o&&t(Q),O(sn),O(hn),O(fo)}}}const bc={local:"opt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OPTConfig",title:"OPTConfig"},{local:"transformers.OPTModel",title:"OPTModel"},{local:"transformers.OPTForCausalLM",title:"OPTForCausalLM"},{local:"transformers.TFOPTModel",title:"TFOPTModel"},{local:"transformers.TFOPTForCausalLM",title:"TFOPTForCausalLM"},{local:"transformers.OPTForSequenceClassification",title:"OPTForSequenceClassification"},{local:"transformers.OPTForQuestionAnswering",title:"OPTForQuestionAnswering"},{local:"transformers.FlaxOPTModel",title:"FlaxOPTModel"},{local:"transformers.FlaxOPTForCausalLM",title:"FlaxOPTForCausalLM"}],title:"OPT"};function yc(x){return Yd(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xc extends Zd{constructor(d){super();Rd(this,d,yc,vc,Jd,{})}}export{xc as default,bc as metadata};
