import{S as Qp,i as Yp,s as eh,e as n,k as d,w as b,t as r,M as th,c as s,d as t,m as c,a,x as T,h as i,b as h,G as e,g,y as M,q as w,o as L,B as $,v as oh,L as Gn}from"../../chunks/vendor-hf-doc-builder.js";import{T as yo}from"../../chunks/Tip-hf-doc-builder.js";import{D as N}from"../../chunks/Docstring-hf-doc-builder.js";import{C as En}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ct}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Fn}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function nh(F){let p,k,f,m,v;return m=new En({props:{code:`from transformers import XGLMModel, XGLMConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),k=r("Example:"),f=d(),b(m.$$.fragment)},l(l){p=s(l,"P",{});var u=a(p);k=i(u,"Example:"),u.forEach(t),f=c(l),T(m.$$.fragment,l)},m(l,u){g(l,p,u),e(p,k),g(l,f,u),M(m,l,u),v=!0},p:Gn,i(l){v||(w(m.$$.fragment,l),v=!0)},o(l){L(m.$$.fragment,l),v=!1},d(l){l&&t(p),l&&t(f),$(m,l)}}}function sh(F){let p,k,f,m,v;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=s(l,"P",{});var u=a(p);k=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var X=a(f);m=i(X,"Module"),X.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,p,u),e(p,k),e(p,f),e(f,m),e(p,v)},d(l){l&&t(p)}}}function ah(F){let p,k,f,m,v;return m=new En({props:{code:`from transformers import XGLMTokenizer, XGLMModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=r("Example:"),f=d(),b(m.$$.fragment)},l(l){p=s(l,"P",{});var u=a(p);k=i(u,"Example:"),u.forEach(t),f=c(l),T(m.$$.fragment,l)},m(l,u){g(l,p,u),e(p,k),g(l,f,u),M(m,l,u),v=!0},p:Gn,i(l){v||(w(m.$$.fragment,l),v=!0)},o(l){L(m.$$.fragment,l),v=!1},d(l){l&&t(p),l&&t(f),$(m,l)}}}function rh(F){let p,k,f,m,v;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=s(l,"P",{});var u=a(p);k=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var X=a(f);m=i(X,"Module"),X.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,p,u),e(p,k),e(p,f),e(f,m),e(p,v)},d(l){l&&t(p)}}}function ih(F){let p,k,f,m,v;return m=new En({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=n("p"),k=r("Example:"),f=d(),b(m.$$.fragment)},l(l){p=s(l,"P",{});var u=a(p);k=i(u,"Example:"),u.forEach(t),f=c(l),T(m.$$.fragment,l)},m(l,u){g(l,p,u),e(p,k),g(l,f,u),M(m,l,u),v=!0},p:Gn,i(l){v||(w(m.$$.fragment,l),v=!0)},o(l){L(m.$$.fragment,l),v=!1},d(l){l&&t(p),l&&t(f),$(m,l)}}}function lh(F){let p,k,f,m,v,l,u,X,Be,Xe,j,te,ne,x,Re,H,Ve,ze,I,He,se,ae,Ke,Fe,B,Je,Ge,R,Me,Ze,ve,G,O,re,ie,Qe,le,de,Ye,Ee,q,oe,K,ce,et,J,tt,Ce,P,pe,he,Z,we,A,ot,S,ue,nt;return{c(){p=n("p"),k=r("TensorFlow models and layers in "),f=n("code"),m=r("transformers"),v=r(" accept two formats as input:"),l=d(),u=n("ul"),X=n("li"),Be=r("having all inputs as keyword arguments (like PyTorch models), or"),Xe=d(),j=n("li"),te=r("having all inputs as a list, tuple or dict in the first positional argument."),ne=d(),x=n("p"),Re=r(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=n("code"),Ve=r("model.fit()"),ze=r(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=n("code"),He=r("model.fit()"),se=r(` supports! If, however, you want to use the second
format outside of Keras methods like `),ae=n("code"),Ke=r("fit()"),Fe=r(" and "),B=n("code"),Je=r("predict()"),Ge=r(`, such as when creating your own layers or models with
the Keras `),R=n("code"),Me=r("Functional"),Ze=r(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ve=d(),G=n("ul"),O=n("li"),re=r("a single Tensor with "),ie=n("code"),Qe=r("input_ids"),le=r(" only and nothing else: "),de=n("code"),Ye=r("model(input_ids)"),Ee=d(),q=n("li"),oe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=n("code"),ce=r("model([input_ids, attention_mask])"),et=r(" or "),J=n("code"),tt=r("model([input_ids, attention_mask, token_type_ids])"),Ce=d(),P=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),he=n("code"),Z=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),we=d(),A=n("p"),ot=r(`Note that when creating models and layers with
`),S=n("a"),ue=r("subclassing"),nt=r(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){p=s(y,"P",{});var z=a(p);k=i(z,"TensorFlow models and layers in "),f=s(z,"CODE",{});var me=a(f);m=i(me,"transformers"),me.forEach(t),v=i(z," accept two formats as input:"),z.forEach(t),l=c(y),u=s(y,"UL",{});var Le=a(u);X=s(Le,"LI",{});var qe=a(X);Be=i(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(t),Xe=c(Le),j=s(Le,"LI",{});var vt=a(j);te=i(vt,"having all inputs as a list, tuple or dict in the first positional argument."),vt.forEach(t),Le.forEach(t),ne=c(y),x=s(y,"P",{});var E=a(x);Re=i(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=s(E,"CODE",{});var Pe=a(H);Ve=i(Pe,"model.fit()"),Pe.forEach(t),ze=i(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=s(E,"CODE",{});var kt=a(I);He=i(kt,"model.fit()"),kt.forEach(t),se=i(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),ae=s(E,"CODE",{});var yt=a(ae);Ke=i(yt,"fit()"),yt.forEach(t),Fe=i(E," and "),B=s(E,"CODE",{});var bt=a(B);Je=i(bt,"predict()"),bt.forEach(t),Ge=i(E,`, such as when creating your own layers or models with
the Keras `),R=s(E,"CODE",{});var ke=a(R);Me=i(ke,"Functional"),ke.forEach(t),Ze=i(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ve=c(y),G=s(y,"UL",{});var V=a(G);O=s(V,"LI",{});var D=a(O);re=i(D,"a single Tensor with "),ie=s(D,"CODE",{});var ye=a(ie);Qe=i(ye,"input_ids"),ye.forEach(t),le=i(D," only and nothing else: "),de=s(D,"CODE",{});var st=a(de);Ye=i(st,"model(input_ids)"),st.forEach(t),D.forEach(t),Ee=c(V),q=s(V,"LI",{});var W=a(q);oe=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s(W,"CODE",{});var Tt=a(K);ce=i(Tt,"model([input_ids, attention_mask])"),Tt.forEach(t),et=i(W," or "),J=s(W,"CODE",{});var at=a(J);tt=i(at,"model([input_ids, attention_mask, token_type_ids])"),at.forEach(t),W.forEach(t),Ce=c(V),P=s(V,"LI",{});var rt=a(P);pe=i(rt,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),he=s(rt,"CODE",{});var pt=a(he);Z=i(pt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),pt.forEach(t),rt.forEach(t),V.forEach(t),we=c(y),A=s(y,"P",{});var C=a(A);ot=i(C,`Note that when creating models and layers with
`),S=s(C,"A",{href:!0,rel:!0});var $e=a(S);ue=i($e,"subclassing"),$e.forEach(t),nt=i(C,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),C.forEach(t),this.h()},h(){h(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(S,"rel","nofollow")},m(y,z){g(y,p,z),e(p,k),e(p,f),e(f,m),e(p,v),g(y,l,z),g(y,u,z),e(u,X),e(X,Be),e(u,Xe),e(u,j),e(j,te),g(y,ne,z),g(y,x,z),e(x,Re),e(x,H),e(H,Ve),e(x,ze),e(x,I),e(I,He),e(x,se),e(x,ae),e(ae,Ke),e(x,Fe),e(x,B),e(B,Je),e(x,Ge),e(x,R),e(R,Me),e(x,Ze),g(y,ve,z),g(y,G,z),e(G,O),e(O,re),e(O,ie),e(ie,Qe),e(O,le),e(O,de),e(de,Ye),e(G,Ee),e(G,q),e(q,oe),e(q,K),e(K,ce),e(q,et),e(q,J),e(J,tt),e(G,Ce),e(G,P),e(P,pe),e(P,he),e(he,Z),g(y,we,z),g(y,A,z),e(A,ot),e(A,S),e(S,ue),e(A,nt)},d(y){y&&t(p),y&&t(l),y&&t(u),y&&t(ne),y&&t(x),y&&t(ve),y&&t(G),y&&t(we),y&&t(A)}}}function dh(F){let p,k,f,m,v;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=s(l,"P",{});var u=a(p);k=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var X=a(f);m=i(X,"Module"),X.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,p,u),e(p,k),e(p,f),e(f,m),e(p,v)},d(l){l&&t(p)}}}function ch(F){let p,k,f,m,v;return m=new En({props:{code:`from transformers import XGLMTokenizer, TFXGLMModel
import tensorflow as tf

tokenizer = XGLMTokenizer.from_pretrained("facebook/xglm-564M")
model = TFXGLMModel.from_pretrained("facebook/xglm-564M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XGLMTokenizer, TFXGLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XGLMTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXGLMModel.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=r("Example:"),f=d(),b(m.$$.fragment)},l(l){p=s(l,"P",{});var u=a(p);k=i(u,"Example:"),u.forEach(t),f=c(l),T(m.$$.fragment,l)},m(l,u){g(l,p,u),e(p,k),g(l,f,u),M(m,l,u),v=!0},p:Gn,i(l){v||(w(m.$$.fragment,l),v=!0)},o(l){L(m.$$.fragment,l),v=!1},d(l){l&&t(p),l&&t(f),$(m,l)}}}function ph(F){let p,k,f,m,v,l,u,X,Be,Xe,j,te,ne,x,Re,H,Ve,ze,I,He,se,ae,Ke,Fe,B,Je,Ge,R,Me,Ze,ve,G,O,re,ie,Qe,le,de,Ye,Ee,q,oe,K,ce,et,J,tt,Ce,P,pe,he,Z,we,A,ot,S,ue,nt;return{c(){p=n("p"),k=r("TensorFlow models and layers in "),f=n("code"),m=r("transformers"),v=r(" accept two formats as input:"),l=d(),u=n("ul"),X=n("li"),Be=r("having all inputs as keyword arguments (like PyTorch models), or"),Xe=d(),j=n("li"),te=r("having all inputs as a list, tuple or dict in the first positional argument."),ne=d(),x=n("p"),Re=r(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=n("code"),Ve=r("model.fit()"),ze=r(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=n("code"),He=r("model.fit()"),se=r(` supports! If, however, you want to use the second
format outside of Keras methods like `),ae=n("code"),Ke=r("fit()"),Fe=r(" and "),B=n("code"),Je=r("predict()"),Ge=r(`, such as when creating your own layers or models with
the Keras `),R=n("code"),Me=r("Functional"),Ze=r(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ve=d(),G=n("ul"),O=n("li"),re=r("a single Tensor with "),ie=n("code"),Qe=r("input_ids"),le=r(" only and nothing else: "),de=n("code"),Ye=r("model(input_ids)"),Ee=d(),q=n("li"),oe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=n("code"),ce=r("model([input_ids, attention_mask])"),et=r(" or "),J=n("code"),tt=r("model([input_ids, attention_mask, token_type_ids])"),Ce=d(),P=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),he=n("code"),Z=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),we=d(),A=n("p"),ot=r(`Note that when creating models and layers with
`),S=n("a"),ue=r("subclassing"),nt=r(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){p=s(y,"P",{});var z=a(p);k=i(z,"TensorFlow models and layers in "),f=s(z,"CODE",{});var me=a(f);m=i(me,"transformers"),me.forEach(t),v=i(z," accept two formats as input:"),z.forEach(t),l=c(y),u=s(y,"UL",{});var Le=a(u);X=s(Le,"LI",{});var qe=a(X);Be=i(qe,"having all inputs as keyword arguments (like PyTorch models), or"),qe.forEach(t),Xe=c(Le),j=s(Le,"LI",{});var vt=a(j);te=i(vt,"having all inputs as a list, tuple or dict in the first positional argument."),vt.forEach(t),Le.forEach(t),ne=c(y),x=s(y,"P",{});var E=a(x);Re=i(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=s(E,"CODE",{});var Pe=a(H);Ve=i(Pe,"model.fit()"),Pe.forEach(t),ze=i(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=s(E,"CODE",{});var kt=a(I);He=i(kt,"model.fit()"),kt.forEach(t),se=i(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),ae=s(E,"CODE",{});var yt=a(ae);Ke=i(yt,"fit()"),yt.forEach(t),Fe=i(E," and "),B=s(E,"CODE",{});var bt=a(B);Je=i(bt,"predict()"),bt.forEach(t),Ge=i(E,`, such as when creating your own layers or models with
the Keras `),R=s(E,"CODE",{});var ke=a(R);Me=i(ke,"Functional"),ke.forEach(t),Ze=i(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ve=c(y),G=s(y,"UL",{});var V=a(G);O=s(V,"LI",{});var D=a(O);re=i(D,"a single Tensor with "),ie=s(D,"CODE",{});var ye=a(ie);Qe=i(ye,"input_ids"),ye.forEach(t),le=i(D," only and nothing else: "),de=s(D,"CODE",{});var st=a(de);Ye=i(st,"model(input_ids)"),st.forEach(t),D.forEach(t),Ee=c(V),q=s(V,"LI",{});var W=a(q);oe=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s(W,"CODE",{});var Tt=a(K);ce=i(Tt,"model([input_ids, attention_mask])"),Tt.forEach(t),et=i(W," or "),J=s(W,"CODE",{});var at=a(J);tt=i(at,"model([input_ids, attention_mask, token_type_ids])"),at.forEach(t),W.forEach(t),Ce=c(V),P=s(V,"LI",{});var rt=a(P);pe=i(rt,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),he=s(rt,"CODE",{});var pt=a(he);Z=i(pt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),pt.forEach(t),rt.forEach(t),V.forEach(t),we=c(y),A=s(y,"P",{});var C=a(A);ot=i(C,`Note that when creating models and layers with
`),S=s(C,"A",{href:!0,rel:!0});var $e=a(S);ue=i($e,"subclassing"),$e.forEach(t),nt=i(C,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),C.forEach(t),this.h()},h(){h(S,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(S,"rel","nofollow")},m(y,z){g(y,p,z),e(p,k),e(p,f),e(f,m),e(p,v),g(y,l,z),g(y,u,z),e(u,X),e(X,Be),e(u,Xe),e(u,j),e(j,te),g(y,ne,z),g(y,x,z),e(x,Re),e(x,H),e(H,Ve),e(x,ze),e(x,I),e(I,He),e(x,se),e(x,ae),e(ae,Ke),e(x,Fe),e(x,B),e(B,Je),e(x,Ge),e(x,R),e(R,Me),e(x,Ze),g(y,ve,z),g(y,G,z),e(G,O),e(O,re),e(O,ie),e(ie,Qe),e(O,le),e(O,de),e(de,Ye),e(G,Ee),e(G,q),e(q,oe),e(q,K),e(K,ce),e(q,et),e(q,J),e(J,tt),e(G,Ce),e(G,P),e(P,pe),e(P,he),e(he,Z),g(y,we,z),g(y,A,z),e(A,ot),e(A,S),e(S,ue),e(A,nt)},d(y){y&&t(p),y&&t(l),y&&t(u),y&&t(ne),y&&t(x),y&&t(ve),y&&t(G),y&&t(we),y&&t(A)}}}function hh(F){let p,k,f,m,v;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=s(l,"P",{});var u=a(p);k=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var X=a(f);m=i(X,"Module"),X.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,p,u),e(p,k),e(p,f),e(f,m),e(p,v)},d(l){l&&t(p)}}}function uh(F){let p,k,f,m,v;return m=new En({props:{code:`from transformers import XGLMTokenizer, TFXGLMForCausalLM
import tensorflow as tf

tokenizer = XGLMTokenizer.from_pretrained("facebook/xglm-564M")
model = TFXGLMForCausalLM.from_pretrained("facebook/xglm-564M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XGLMTokenizer, TFXGLMForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XGLMTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXGLMForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=n("p"),k=r("Example:"),f=d(),b(m.$$.fragment)},l(l){p=s(l,"P",{});var u=a(p);k=i(u,"Example:"),u.forEach(t),f=c(l),T(m.$$.fragment,l)},m(l,u){g(l,p,u),e(p,k),g(l,f,u),M(m,l,u),v=!0},p:Gn,i(l){v||(w(m.$$.fragment,l),v=!0)},o(l){L(m.$$.fragment,l),v=!1},d(l){l&&t(p),l&&t(f),$(m,l)}}}function mh(F){let p,k,f,m,v;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=s(l,"P",{});var u=a(p);k=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var X=a(f);m=i(X,"Module"),X.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,p,u),e(p,k),e(p,f),e(f,m),e(p,v)},d(l){l&&t(p)}}}function fh(F){let p,k,f,m,v;return m=new En({props:{code:`from transformers import XGLMTokenizer, FlaxXGLMModel

tokenizer = XGLMTokenizer.from_pretrained("facebook/xglm-564M")
model = FlaxXGLMModel.from_pretrained("facebook/xglm-564M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XGLMTokenizer, FlaxXGLMModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XGLMTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxXGLMModel.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=r("Example:"),f=d(),b(m.$$.fragment)},l(l){p=s(l,"P",{});var u=a(p);k=i(u,"Example:"),u.forEach(t),f=c(l),T(m.$$.fragment,l)},m(l,u){g(l,p,u),e(p,k),g(l,f,u),M(m,l,u),v=!0},p:Gn,i(l){v||(w(m.$$.fragment,l),v=!0)},o(l){L(m.$$.fragment,l),v=!1},d(l){l&&t(p),l&&t(f),$(m,l)}}}function gh(F){let p,k,f,m,v;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=s(l,"P",{});var u=a(p);k=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var X=a(f);m=i(X,"Module"),X.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,p,u),e(p,k),e(p,f),e(f,m),e(p,v)},d(l){l&&t(p)}}}function _h(F){let p,k,f,m,v;return m=new En({props:{code:`from transformers import XGLMTokenizer, FlaxXGLMForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){p=n("p"),k=r("Example:"),f=d(),b(m.$$.fragment)},l(l){p=s(l,"P",{});var u=a(p);k=i(u,"Example:"),u.forEach(t),f=c(l),T(m.$$.fragment,l)},m(l,u){g(l,p,u),e(p,k),g(l,f,u),M(m,l,u),v=!0},p:Gn,i(l){v||(w(m.$$.fragment,l),v=!0)},o(l){L(m.$$.fragment,l),v=!1},d(l){l&&t(p),l&&t(f),$(m,l)}}}function vh(F){let p,k,f,m,v,l,u,X,Be,Xe,j,te,ne,x,Re,H,Ve,ze,I,He,se,ae,Ke,Fe,B,Je,Ge,R,Me,Ze,ve,G,O,re,ie,Qe,le,de,Ye,Ee,q,oe,K,ce,et,J,tt,Ce,P,pe,he,Z,we,A,ot,S,ue,nt,y,z,me,Le,qe,vt,E,Pe,kt,yt,bt,ke,V,D,ye,st,W,Tt,at,rt,pt,C,$e,lr,it,dr,Cn,cr,pr,qn,hr,ur,bo,mr,fr,gr,To,_r,Pn,vr,kr,yr,ht,Mo,br,cs,Tr,Mr,wo,An,wr,ps,Lr,$r,jn,xr,hs,Xr,zr,jt,Lo,Fr,$o,Gr,us,Er,Cr,qr,Ot,xo,Pr,ms,Ar,jr,On,Xo,va,Mt,Dt,fs,zo,Or,gs,Dr,ka,fe,Fo,Nr,xe,Ir,_s,Sr,Wr,Dn,Ur,Br,Nn,Rr,Vr,Go,Hr,Kr,Jr,Eo,Zr,In,Qr,Yr,ei,ut,Co,ti,vs,oi,ni,qo,Sn,si,ks,ai,ri,Wn,ii,ys,li,di,Nt,Po,ci,bs,pi,ya,wt,It,Ts,Ao,hi,Ms,ui,ba,ge,jo,mi,Oo,fi,Un,gi,_i,vi,Do,ki,No,yi,bi,Ti,St,Mi,ws,wi,Li,Ls,$i,xi,Ae,Io,Xi,Lt,zi,Bn,Fi,Gi,$s,Ei,Ci,qi,Wt,Pi,Ut,Ta,$t,Bt,xs,So,Ai,Xs,ji,Ma,_e,Wo,Oi,zs,Di,Ni,Uo,Ii,Rn,Si,Wi,Ui,Bo,Bi,Ro,Ri,Vi,Hi,je,Vo,Ki,xt,Ji,Vn,Zi,Qi,Fs,Yi,el,tl,Rt,ol,Vt,wa,Xt,Ht,Gs,Ho,nl,Es,sl,La,Q,Ko,al,Jo,rl,Hn,il,ll,dl,Zo,cl,Qo,pl,hl,ul,Kt,ml,Jt,fl,Cs,gl,_l,qs,vl,kl,Oe,Yo,yl,zt,bl,Kn,Tl,Ml,Ps,wl,Ll,$l,Zt,xl,Qt,$a,Ft,Yt,As,en,Xl,js,zl,xa,Y,tn,Fl,Os,Gl,El,on,Cl,Jn,ql,Pl,Al,nn,jl,sn,Ol,Dl,Nl,eo,Il,De,an,Sl,Gt,Wl,Zn,Ul,Bl,Ds,Rl,Vl,Hl,to,Kl,oo,Xa,Et,no,Ns,rn,Jl,Is,Zl,za,ee,ln,Ql,dn,Yl,Qn,ed,td,od,cn,nd,pn,sd,ad,rd,Ss,id,ld,lt,Ws,hn,dd,cd,Us,un,pd,hd,Bs,mn,ud,md,Rs,fn,fd,gd,Ne,gn,_d,Ct,vd,Vs,kd,yd,Hs,bd,Td,Md,so,wd,ao,Fa,qt,ro,Ks,_n,Ld,Js,$d,Ga,U,vn,xd,Zs,Xd,zd,kn,Fd,Yn,Gd,Ed,Cd,yn,qd,bn,Pd,Ad,jd,Qs,Od,Dd,dt,Ys,Tn,Nd,Id,ea,Mn,Sd,Wd,ta,wn,Ud,Bd,oa,Ln,Rd,Vd,Ie,$n,Hd,Pt,Kd,na,Jd,Zd,sa,Qd,Yd,ec,io,tc,lo,Ea;return l=new ct({}),x=new ct({}),ce=new ct({}),pe=new N({props:{name:"class transformers.XGLMConfig",anchor:"transformers.XGLMConfig",parameters:[{name:"vocab_size",val:" = 256008"},{name:"max_position_embeddings",val:" = 2048"},{name:"d_model",val:" = 1024"},{name:"ffn_dim",val:" = 4096"},{name:"num_layers",val:" = 24"},{name:"attention_heads",val:" = 16"},{name:"activation_function",val:" = 'gelu'"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"layerdrop",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"scale_embedding",val:" = True"},{name:"use_cache",val:" = True"},{name:"decoder_start_token_id",val:" = 2"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XGLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256008) &#x2014;
Vocabulary size of the XGLM model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMModel">XGLMModel</a> or <a href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.FlaxXGLMModel">FlaxXGLMModel</a>.`,name:"vocab_size"},{anchor:"transformers.XGLMConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
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
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.XGLMConfig.layerdrop",description:`<strong>layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"layerdrop"},{anchor:"transformers.XGLMConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.XGLMConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.XGLMConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/xglm/configuration_xglm.py#L29"}}),ke=new Fn({props:{anchor:"transformers.XGLMConfig.example",$$slots:{default:[nh]},$$scope:{ctx:F}}}),W=new ct({}),$e=new N({props:{name:"class transformers.XGLMTokenizer",anchor:"transformers.XGLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XGLMTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/xglm/tokenization_xglm.py#L43"}}),Mo=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XGLMTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XGLMTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/xglm/tokenization_xglm.py#L189",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Lo=new N({props:{name:"get_special_tokens_mask",anchor:"transformers.XGLMTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.XGLMTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XGLMTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/xglm/tokenization_xglm.py#L214",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xo=new N({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XGLMTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XGLMTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/xglm/tokenization_xglm.py#L242",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xo=new N({props:{name:"save_vocabulary",anchor:"transformers.XGLMTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/xglm/tokenization_xglm.py#L298"}}),zo=new ct({}),Fo=new N({props:{name:"class transformers.XGLMTokenizerFast",anchor:"transformers.XGLMTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XGLMTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/xglm/tokenization_xglm_fast.py#L49"}}),Co=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XGLMTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XGLMTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/xglm/tokenization_xglm_fast.py#L139",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Po=new N({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XGLMTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XGLMTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/xglm/tokenization_xglm_fast.py#L164",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ao=new ct({}),jo=new N({props:{name:"class transformers.XGLMModel",anchor:"transformers.XGLMModel",parameters:[{name:"config",val:": XGLMConfig"},{name:"embed_tokens",val:": typing.Optional[torch.nn.modules.sparse.Embedding] = None"}],parametersDescription:[{anchor:"transformers.XGLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.
config &#x2014; XGLMConfig`,name:"config"},{anchor:"transformers.XGLMModel.embed_tokens",description:"<strong>embed_tokens</strong> (nn.Embedding) &#x2014; output embedding",name:"embed_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/xglm/modeling_xglm.py#L531"}}),Io=new N({props:{name:"forward",anchor:"transformers.XGLMModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XGLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMTokenizer">XGLMTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
<p>Args &#x2014;
input_ids (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>):
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMTokenizer">~XGLMTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/xglm/modeling_xglm.py#L589",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wt=new yo({props:{$$slots:{default:[sh]},$$scope:{ctx:F}}}),Ut=new Fn({props:{anchor:"transformers.XGLMModel.forward.example",$$slots:{default:[ah]},$$scope:{ctx:F}}}),So=new ct({}),Wo=new N({props:{name:"class transformers.XGLMForCausalLM",anchor:"transformers.XGLMForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XGLMForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/xglm/modeling_xglm.py#L820"}}),Vo=new N({props:{name:"forward",anchor:"transformers.XGLMForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XGLMForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMTokenizer">XGLMTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XGLMForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/xglm/modeling_xglm.py#L850",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rt=new yo({props:{$$slots:{default:[rh]},$$scope:{ctx:F}}}),Vt=new Fn({props:{anchor:"transformers.XGLMForCausalLM.forward.example",$$slots:{default:[ih]},$$scope:{ctx:F}}}),Ho=new ct({}),Ko=new N({props:{name:"class transformers.TFXGLMModel",anchor:"transformers.TFXGLMModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXGLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.
config &#x2014; XGLMConfig
embed_tokens &#x2014; [TFSharedEmbeddings]: output embedding`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/xglm/modeling_tf_xglm.py#L777"}}),Kt=new yo({props:{$$slots:{default:[lh]},$$scope:{ctx:F}}}),Yo=new N({props:{name:"call",anchor:"transformers.TFXGLMModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:": typing.Any"}],parametersDescription:[{anchor:"transformers.TFXGLMModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMTokenizer">XGLMTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXGLMModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXGLMModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of
the decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFXGLMModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, encoder_sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing cross-attention on padding tokens indices of encoder input_ids. Mask values
selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.TFXGLMModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_layers, attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXGLMModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_layers, attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFXGLMModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.num_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFXGLMModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXGLMModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFXGLMModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXGLMModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXGLMModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXGLMModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/xglm/modeling_tf_xglm.py#L793",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMConfig"
>XGLMConfig</a>) and inputs.</p>
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
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zt=new yo({props:{$$slots:{default:[dh]},$$scope:{ctx:F}}}),Qt=new Fn({props:{anchor:"transformers.TFXGLMModel.call.example",$$slots:{default:[ch]},$$scope:{ctx:F}}}),en=new ct({}),tn=new N({props:{name:"class transformers.TFXGLMForCausalLM",anchor:"transformers.TFXGLMForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXGLMForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/xglm/modeling_tf_xglm.py#L863"}}),eo=new yo({props:{$$slots:{default:[ph]},$$scope:{ctx:F}}}),an=new N({props:{name:"call",anchor:"transformers.TFXGLMForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:": typing.Any"}],parametersDescription:[{anchor:"transformers.TFXGLMForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMTokenizer">XGLMTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXGLMForCausalLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXGLMForCausalLM.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of
the decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFXGLMForCausalLM.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, encoder_sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing cross-attention on padding tokens indices of encoder input_ids. Mask values
selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.TFXGLMForCausalLM.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_layers, attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXGLMForCausalLM.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_layers, attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFXGLMForCausalLM.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.num_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFXGLMForCausalLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXGLMForCausalLM.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFXGLMForCausalLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXGLMForCausalLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXGLMForCausalLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXGLMForCausalLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXGLMForCausalLM.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/xglm/modeling_tf_xglm.py#L909",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMConfig"
>XGLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
<p><a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code>: A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMConfig"
>XGLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),to=new yo({props:{$$slots:{default:[hh]},$$scope:{ctx:F}}}),oo=new Fn({props:{anchor:"transformers.TFXGLMForCausalLM.call.example",$$slots:{default:[uh]},$$scope:{ctx:F}}}),rn=new ct({}),ln=new N({props:{name:"class transformers.FlaxXGLMModel",anchor:"transformers.FlaxXGLMModel",parameters:[{name:"config",val:": XGLMConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXGLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxXGLMModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/xglm/modeling_flax_xglm.py#L703"}}),gn=new N({props:{name:"__call__",anchor:"transformers.FlaxXGLMModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxXGLMModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMTokenizer">~XGLMTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/xglm/modeling_flax_xglm.py#L625",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new yo({props:{$$slots:{default:[mh]},$$scope:{ctx:F}}}),ao=new Fn({props:{anchor:"transformers.FlaxXGLMModel.__call__.example",$$slots:{default:[fh]},$$scope:{ctx:F}}}),_n=new ct({}),vn=new N({props:{name:"class transformers.FlaxXGLMForCausalLM",anchor:"transformers.FlaxXGLMForCausalLM",parameters:[{name:"config",val:": XGLMConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXGLMForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxXGLMForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/xglm/modeling_flax_xglm.py#L782"}}),$n=new N({props:{name:"__call__",anchor:"transformers.FlaxXGLMForCausalLM.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxXGLMForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMTokenizer">~XGLMTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/xglm/modeling_flax_xglm.py#L625",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),io=new yo({props:{$$slots:{default:[gh]},$$scope:{ctx:F}}}),lo=new Fn({props:{anchor:"transformers.FlaxXGLMForCausalLM.__call__.example",$$slots:{default:[_h]},$$scope:{ctx:F}}}),{c(){p=n("meta"),k=d(),f=n("h1"),m=n("a"),v=n("span"),b(l.$$.fragment),u=d(),X=n("span"),Be=r("XGLM"),Xe=d(),j=n("h2"),te=n("a"),ne=n("span"),b(x.$$.fragment),Re=d(),H=n("span"),Ve=r("Overview"),ze=d(),I=n("p"),He=r("The XGLM model was proposed in "),se=n("a"),ae=r("Few-shot Learning with Multilingual Language Models"),Ke=r(`
by Xi Victoria Lin, Todor Mihaylov, Mikel Artetxe, Tianlu Wang, Shuohui Chen, Daniel Simig, Myle Ott, Naman Goyal,
Shruti Bhosale, Jingfei Du, Ramakanth Pasunuru, Sam Shleifer, Punit Singh Koura, Vishrav Chaudhary, Brian O\u2019Horo,
Jeff Wang, Luke Zettlemoyer, Zornitsa Kozareva, Mona Diab, Veselin Stoyanov, Xian Li.`),Fe=d(),B=n("p"),Je=r("The abstract from the paper is the following:"),Ge=d(),R=n("p"),Me=n("em"),Ze=r(`Large-scale autoregressive language models such as GPT-3 are few-shot learners that can perform a wide range of language
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
in social value tasks such as hate speech detection in five languages and find it has limitations similar to comparable sized GPT-3 models.`),ve=d(),G=n("p"),O=r("This model was contributed by "),re=n("a"),ie=r("Suraj"),Qe=r(". The original code can be found "),le=n("a"),de=r("here"),Ye=r("."),Ee=d(),q=n("h2"),oe=n("a"),K=n("span"),b(ce.$$.fragment),et=d(),J=n("span"),tt=r("XGLMConfig"),Ce=d(),P=n("div"),b(pe.$$.fragment),he=d(),Z=n("p"),we=r("This is the configuration class to store the configuration of a "),A=n("a"),ot=r("XGLMModel"),S=r(`. It is used to instantiate an XGLM
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the XGLM
`),ue=n("a"),nt=r("facebook/xglm-564M"),y=r(" architecture."),z=d(),me=n("p"),Le=r("Configuration objects inherit from "),qe=n("a"),vt=r("PretrainedConfig"),E=r(` and can be used to control the model outputs. Read the
documentation from `),Pe=n("a"),kt=r("PretrainedConfig"),yt=r(" for more information."),bt=d(),b(ke.$$.fragment),V=d(),D=n("h2"),ye=n("a"),st=n("span"),b(W.$$.fragment),Tt=d(),at=n("span"),rt=r("XGLMTokenizer"),pt=d(),C=n("div"),b($e.$$.fragment),lr=d(),it=n("p"),dr=r("Adapted from "),Cn=n("a"),cr=r("RobertaTokenizer"),pr=r(" and "),qn=n("a"),hr=r("XLNetTokenizer"),ur=r(`. Based on
`),bo=n("a"),mr=r("SentencePiece"),fr=r("."),gr=d(),To=n("p"),_r=r("This tokenizer inherits from "),Pn=n("a"),vr=r("PreTrainedTokenizer"),kr=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),yr=d(),ht=n("div"),b(Mo.$$.fragment),br=d(),cs=n("p"),Tr=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),Mr=d(),wo=n("ul"),An=n("li"),wr=r("single sequence: "),ps=n("code"),Lr=r("<s> X </s>"),$r=d(),jn=n("li"),xr=r("pair of sequences: "),hs=n("code"),Xr=r("<s> A </s></s> B </s>"),zr=d(),jt=n("div"),b(Lo.$$.fragment),Fr=d(),$o=n("p"),Gr=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),us=n("code"),Er=r("prepare_for_model"),Cr=r(" method."),qr=d(),Ot=n("div"),b(xo.$$.fragment),Pr=d(),ms=n("p"),Ar=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),jr=d(),On=n("div"),b(Xo.$$.fragment),va=d(),Mt=n("h2"),Dt=n("a"),fs=n("span"),b(zo.$$.fragment),Or=d(),gs=n("span"),Dr=r("XGLMTokenizerFast"),ka=d(),fe=n("div"),b(Fo.$$.fragment),Nr=d(),xe=n("p"),Ir=r("Construct a \u201Cfast\u201D XGLM tokenizer (backed by HuggingFace\u2019s "),_s=n("em"),Sr=r("tokenizers"),Wr=r(" library). Adapted from "),Dn=n("a"),Ur=r("RobertaTokenizer"),Br=r(`
and `),Nn=n("a"),Rr=r("XLNetTokenizer"),Vr=r(`. Based on
`),Go=n("a"),Hr=r("BPE"),Kr=r("."),Jr=d(),Eo=n("p"),Zr=r("This tokenizer inherits from "),In=n("a"),Qr=r("PreTrainedTokenizerFast"),Yr=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ei=d(),ut=n("div"),b(Co.$$.fragment),ti=d(),vs=n("p"),oi=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),ni=d(),qo=n("ul"),Sn=n("li"),si=r("single sequence: "),ks=n("code"),ai=r("<s> X </s>"),ri=d(),Wn=n("li"),ii=r("pair of sequences: "),ys=n("code"),li=r("<s> A </s></s> B </s>"),di=d(),Nt=n("div"),b(Po.$$.fragment),ci=d(),bs=n("p"),pi=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),ya=d(),wt=n("h2"),It=n("a"),Ts=n("span"),b(Ao.$$.fragment),hi=d(),Ms=n("span"),ui=r("XGLMModel"),ba=d(),ge=n("div"),b(jo.$$.fragment),mi=d(),Oo=n("p"),fi=r(`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Un=n("a"),gi=r("PreTrainedModel"),_i=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vi=d(),Do=n("p"),ki=r("This model is also a PyTorch "),No=n("a"),yi=r("torch.nn.Module"),bi=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ti=d(),St=n("p"),Mi=r("Transformer decoder consisting of "),ws=n("em"),wi=r("config.num_layers"),Li=r(" layers. Each layer is a "),Ls=n("code"),$i=r("XGLMDecoderLayer"),xi=d(),Ae=n("div"),b(Io.$$.fragment),Xi=d(),Lt=n("p"),zi=r("The "),Bn=n("a"),Fi=r("XGLMModel"),Gi=r(" forward method, overrides the "),$s=n("code"),Ei=r("__call__"),Ci=r(" special method."),qi=d(),b(Wt.$$.fragment),Pi=d(),b(Ut.$$.fragment),Ta=d(),$t=n("h2"),Bt=n("a"),xs=n("span"),b(So.$$.fragment),Ai=d(),Xs=n("span"),ji=r("XGLMForCausalLM"),Ma=d(),_e=n("div"),b(Wo.$$.fragment),Oi=d(),zs=n("p"),Di=r(`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Ni=d(),Uo=n("p"),Ii=r("This model inherits from "),Rn=n("a"),Si=r("PreTrainedModel"),Wi=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ui=d(),Bo=n("p"),Bi=r("This model is also a PyTorch "),Ro=n("a"),Ri=r("torch.nn.Module"),Vi=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hi=d(),je=n("div"),b(Vo.$$.fragment),Ki=d(),xt=n("p"),Ji=r("The "),Vn=n("a"),Zi=r("XGLMForCausalLM"),Qi=r(" forward method, overrides the "),Fs=n("code"),Yi=r("__call__"),el=r(" special method."),tl=d(),b(Rt.$$.fragment),ol=d(),b(Vt.$$.fragment),wa=d(),Xt=n("h2"),Ht=n("a"),Gs=n("span"),b(Ho.$$.fragment),nl=d(),Es=n("span"),sl=r("TFXGLMModel"),La=d(),Q=n("div"),b(Ko.$$.fragment),al=d(),Jo=n("p"),rl=r(`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Hn=n("a"),il=r("TFPreTrainedModel"),ll=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dl=d(),Zo=n("p"),cl=r("This model is also a "),Qo=n("a"),pl=r("tf.keras.Model"),hl=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ul=d(),b(Kt.$$.fragment),ml=d(),Jt=n("p"),fl=r("Transformer decoder consisting of "),Cs=n("em"),gl=r("config.num_layers"),_l=r(" layers. Each layer is a "),qs=n("code"),vl=r("TFXGLMDecoderLayer"),kl=d(),Oe=n("div"),b(Yo.$$.fragment),yl=d(),zt=n("p"),bl=r("The "),Kn=n("a"),Tl=r("TFXGLMModel"),Ml=r(" forward method, overrides the "),Ps=n("code"),wl=r("__call__"),Ll=r(" special method."),$l=d(),b(Zt.$$.fragment),xl=d(),b(Qt.$$.fragment),$a=d(),Ft=n("h2"),Yt=n("a"),As=n("span"),b(en.$$.fragment),Xl=d(),js=n("span"),zl=r("TFXGLMForCausalLM"),xa=d(),Y=n("div"),b(tn.$$.fragment),Fl=d(),Os=n("p"),Gl=r(`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),El=d(),on=n("p"),Cl=r("This model inherits from "),Jn=n("a"),ql=r("TFPreTrainedModel"),Pl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Al=d(),nn=n("p"),jl=r("This model is also a "),sn=n("a"),Ol=r("tf.keras.Model"),Dl=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nl=d(),b(eo.$$.fragment),Il=d(),De=n("div"),b(an.$$.fragment),Sl=d(),Gt=n("p"),Wl=r("The "),Zn=n("a"),Ul=r("TFXGLMForCausalLM"),Bl=r(" forward method, overrides the "),Ds=n("code"),Rl=r("__call__"),Vl=r(" special method."),Hl=d(),b(to.$$.fragment),Kl=d(),b(oo.$$.fragment),Xa=d(),Et=n("h2"),no=n("a"),Ns=n("span"),b(rn.$$.fragment),Jl=d(),Is=n("span"),Zl=r("FlaxXGLMModel"),za=d(),ee=n("div"),b(ln.$$.fragment),Ql=d(),dn=n("p"),Yl=r(`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Qn=n("a"),ed=r("FlaxPreTrainedModel"),td=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),od=d(),cn=n("p"),nd=r(`This model is also a Flax Linen
`),pn=n("a"),sd=r("flax.nn.Module"),ad=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),rd=d(),Ss=n("p"),id=r("Finally, this model supports inherent JAX features such as:"),ld=d(),lt=n("ul"),Ws=n("li"),hn=n("a"),dd=r("Just-In-Time (JIT) compilation"),cd=d(),Us=n("li"),un=n("a"),pd=r("Automatic Differentiation"),hd=d(),Bs=n("li"),mn=n("a"),ud=r("Vectorization"),md=d(),Rs=n("li"),fn=n("a"),fd=r("Parallelization"),gd=d(),Ne=n("div"),b(gn.$$.fragment),_d=d(),Ct=n("p"),vd=r("The "),Vs=n("code"),kd=r("FlaxXGLMPreTrainedModel"),yd=r(" forward method, overrides the "),Hs=n("code"),bd=r("__call__"),Td=r(" special method."),Md=d(),b(so.$$.fragment),wd=d(),b(ao.$$.fragment),Fa=d(),qt=n("h2"),ro=n("a"),Ks=n("span"),b(_n.$$.fragment),Ld=d(),Js=n("span"),$d=r("FlaxXGLMForCausalLM"),Ga=d(),U=n("div"),b(vn.$$.fragment),xd=d(),Zs=n("p"),Xd=r(`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),zd=d(),kn=n("p"),Fd=r("This model inherits from "),Yn=n("a"),Gd=r("FlaxPreTrainedModel"),Ed=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cd=d(),yn=n("p"),qd=r(`This model is also a Flax Linen
`),bn=n("a"),Pd=r("flax.nn.Module"),Ad=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),jd=d(),Qs=n("p"),Od=r("Finally, this model supports inherent JAX features such as:"),Dd=d(),dt=n("ul"),Ys=n("li"),Tn=n("a"),Nd=r("Just-In-Time (JIT) compilation"),Id=d(),ea=n("li"),Mn=n("a"),Sd=r("Automatic Differentiation"),Wd=d(),ta=n("li"),wn=n("a"),Ud=r("Vectorization"),Bd=d(),oa=n("li"),Ln=n("a"),Rd=r("Parallelization"),Vd=d(),Ie=n("div"),b($n.$$.fragment),Hd=d(),Pt=n("p"),Kd=r("The "),na=n("code"),Jd=r("FlaxXGLMPreTrainedModel"),Zd=r(" forward method, overrides the "),sa=n("code"),Qd=r("__call__"),Yd=r(" special method."),ec=d(),b(io.$$.fragment),tc=d(),b(lo.$$.fragment),this.h()},l(o){const _=th('[data-svelte="svelte-1phssyn"]',document.head);p=s(_,"META",{name:!0,content:!0}),_.forEach(t),k=c(o),f=s(o,"H1",{class:!0});var xn=a(f);m=s(xn,"A",{id:!0,class:!0,href:!0});var aa=a(m);v=s(aa,"SPAN",{});var ra=a(v);T(l.$$.fragment,ra),ra.forEach(t),aa.forEach(t),u=c(xn),X=s(xn,"SPAN",{});var ia=a(X);Be=i(ia,"XGLM"),ia.forEach(t),xn.forEach(t),Xe=c(o),j=s(o,"H2",{class:!0});var Xn=a(j);te=s(Xn,"A",{id:!0,class:!0,href:!0});var la=a(te);ne=s(la,"SPAN",{});var da=a(ne);T(x.$$.fragment,da),da.forEach(t),la.forEach(t),Re=c(Xn),H=s(Xn,"SPAN",{});var ca=a(H);Ve=i(ca,"Overview"),ca.forEach(t),Xn.forEach(t),ze=c(o),I=s(o,"P",{});var zn=a(I);He=i(zn,"The XGLM model was proposed in "),se=s(zn,"A",{href:!0,rel:!0});var pa=a(se);ae=i(pa,"Few-shot Learning with Multilingual Language Models"),pa.forEach(t),Ke=i(zn,`
by Xi Victoria Lin, Todor Mihaylov, Mikel Artetxe, Tianlu Wang, Shuohui Chen, Daniel Simig, Myle Ott, Naman Goyal,
Shruti Bhosale, Jingfei Du, Ramakanth Pasunuru, Sam Shleifer, Punit Singh Koura, Vishrav Chaudhary, Brian O\u2019Horo,
Jeff Wang, Luke Zettlemoyer, Zornitsa Kozareva, Mona Diab, Veselin Stoyanov, Xian Li.`),zn.forEach(t),Fe=c(o),B=s(o,"P",{});var ha=a(B);Je=i(ha,"The abstract from the paper is the following:"),ha.forEach(t),Ge=c(o),R=s(o,"P",{});var ua=a(R);Me=s(ua,"EM",{});var ma=a(Me);Ze=i(ma,`Large-scale autoregressive language models such as GPT-3 are few-shot learners that can perform a wide range of language
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
in social value tasks such as hate speech detection in five languages and find it has limitations similar to comparable sized GPT-3 models.`),ma.forEach(t),ua.forEach(t),ve=c(o),G=s(o,"P",{});var At=a(G);O=i(At,"This model was contributed by "),re=s(At,"A",{href:!0,rel:!0});var fa=a(re);ie=i(fa,"Suraj"),fa.forEach(t),Qe=i(At,". The original code can be found "),le=s(At,"A",{href:!0,rel:!0});var rc=a(le);de=i(rc,"here"),rc.forEach(t),Ye=i(At,"."),At.forEach(t),Ee=c(o),q=s(o,"H2",{class:!0});var Ca=a(q);oe=s(Ca,"A",{id:!0,class:!0,href:!0});var ic=a(oe);K=s(ic,"SPAN",{});var lc=a(K);T(ce.$$.fragment,lc),lc.forEach(t),ic.forEach(t),et=c(Ca),J=s(Ca,"SPAN",{});var dc=a(J);tt=i(dc,"XGLMConfig"),dc.forEach(t),Ca.forEach(t),Ce=c(o),P=s(o,"DIV",{class:!0});var co=a(P);T(pe.$$.fragment,co),he=c(co),Z=s(co,"P",{});var es=a(Z);we=i(es,"This is the configuration class to store the configuration of a "),A=s(es,"A",{href:!0});var cc=a(A);ot=i(cc,"XGLMModel"),cc.forEach(t),S=i(es,`. It is used to instantiate an XGLM
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the XGLM
`),ue=s(es,"A",{href:!0,rel:!0});var pc=a(ue);nt=i(pc,"facebook/xglm-564M"),pc.forEach(t),y=i(es," architecture."),es.forEach(t),z=c(co),me=s(co,"P",{});var ts=a(me);Le=i(ts,"Configuration objects inherit from "),qe=s(ts,"A",{href:!0});var hc=a(qe);vt=i(hc,"PretrainedConfig"),hc.forEach(t),E=i(ts,` and can be used to control the model outputs. Read the
documentation from `),Pe=s(ts,"A",{href:!0});var uc=a(Pe);kt=i(uc,"PretrainedConfig"),uc.forEach(t),yt=i(ts," for more information."),ts.forEach(t),bt=c(co),T(ke.$$.fragment,co),co.forEach(t),V=c(o),D=s(o,"H2",{class:!0});var qa=a(D);ye=s(qa,"A",{id:!0,class:!0,href:!0});var mc=a(ye);st=s(mc,"SPAN",{});var fc=a(st);T(W.$$.fragment,fc),fc.forEach(t),mc.forEach(t),Tt=c(qa),at=s(qa,"SPAN",{});var gc=a(at);rt=i(gc,"XGLMTokenizer"),gc.forEach(t),qa.forEach(t),pt=c(o),C=s(o,"DIV",{class:!0});var be=a(C);T($e.$$.fragment,be),lr=c(be),it=s(be,"P",{});var po=a(it);dr=i(po,"Adapted from "),Cn=s(po,"A",{href:!0});var _c=a(Cn);cr=i(_c,"RobertaTokenizer"),_c.forEach(t),pr=i(po," and "),qn=s(po,"A",{href:!0});var vc=a(qn);hr=i(vc,"XLNetTokenizer"),vc.forEach(t),ur=i(po,`. Based on
`),bo=s(po,"A",{href:!0,rel:!0});var kc=a(bo);mr=i(kc,"SentencePiece"),kc.forEach(t),fr=i(po,"."),po.forEach(t),gr=c(be),To=s(be,"P",{});var Pa=a(To);_r=i(Pa,"This tokenizer inherits from "),Pn=s(Pa,"A",{href:!0});var yc=a(Pn);vr=i(yc,"PreTrainedTokenizer"),yc.forEach(t),kr=i(Pa,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Pa.forEach(t),yr=c(be),ht=s(be,"DIV",{class:!0});var os=a(ht);T(Mo.$$.fragment,os),br=c(os),cs=s(os,"P",{});var bc=a(cs);Tr=i(bc,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),bc.forEach(t),Mr=c(os),wo=s(os,"UL",{});var Aa=a(wo);An=s(Aa,"LI",{});var oc=a(An);wr=i(oc,"single sequence: "),ps=s(oc,"CODE",{});var Tc=a(ps);Lr=i(Tc,"<s> X </s>"),Tc.forEach(t),oc.forEach(t),$r=c(Aa),jn=s(Aa,"LI",{});var nc=a(jn);xr=i(nc,"pair of sequences: "),hs=s(nc,"CODE",{});var Mc=a(hs);Xr=i(Mc,"<s> A </s></s> B </s>"),Mc.forEach(t),nc.forEach(t),Aa.forEach(t),os.forEach(t),zr=c(be),jt=s(be,"DIV",{class:!0});var ja=a(jt);T(Lo.$$.fragment,ja),Fr=c(ja),$o=s(ja,"P",{});var Oa=a($o);Gr=i(Oa,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),us=s(Oa,"CODE",{});var wc=a(us);Er=i(wc,"prepare_for_model"),wc.forEach(t),Cr=i(Oa," method."),Oa.forEach(t),ja.forEach(t),qr=c(be),Ot=s(be,"DIV",{class:!0});var Da=a(Ot);T(xo.$$.fragment,Da),Pr=c(Da),ms=s(Da,"P",{});var Lc=a(ms);Ar=i(Lc,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),Lc.forEach(t),Da.forEach(t),jr=c(be),On=s(be,"DIV",{class:!0});var $c=a(On);T(Xo.$$.fragment,$c),$c.forEach(t),be.forEach(t),va=c(o),Mt=s(o,"H2",{class:!0});var Na=a(Mt);Dt=s(Na,"A",{id:!0,class:!0,href:!0});var xc=a(Dt);fs=s(xc,"SPAN",{});var Xc=a(fs);T(zo.$$.fragment,Xc),Xc.forEach(t),xc.forEach(t),Or=c(Na),gs=s(Na,"SPAN",{});var zc=a(gs);Dr=i(zc,"XGLMTokenizerFast"),zc.forEach(t),Na.forEach(t),ka=c(o),fe=s(o,"DIV",{class:!0});var mt=a(fe);T(Fo.$$.fragment,mt),Nr=c(mt),xe=s(mt,"P",{});var ft=a(xe);Ir=i(ft,"Construct a \u201Cfast\u201D XGLM tokenizer (backed by HuggingFace\u2019s "),_s=s(ft,"EM",{});var Fc=a(_s);Sr=i(Fc,"tokenizers"),Fc.forEach(t),Wr=i(ft," library). Adapted from "),Dn=s(ft,"A",{href:!0});var Gc=a(Dn);Ur=i(Gc,"RobertaTokenizer"),Gc.forEach(t),Br=i(ft,`
and `),Nn=s(ft,"A",{href:!0});var Ec=a(Nn);Rr=i(Ec,"XLNetTokenizer"),Ec.forEach(t),Vr=i(ft,`. Based on
`),Go=s(ft,"A",{href:!0,rel:!0});var Cc=a(Go);Hr=i(Cc,"BPE"),Cc.forEach(t),Kr=i(ft,"."),ft.forEach(t),Jr=c(mt),Eo=s(mt,"P",{});var Ia=a(Eo);Zr=i(Ia,"This tokenizer inherits from "),In=s(Ia,"A",{href:!0});var qc=a(In);Qr=i(qc,"PreTrainedTokenizerFast"),qc.forEach(t),Yr=i(Ia,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ia.forEach(t),ei=c(mt),ut=s(mt,"DIV",{class:!0});var ns=a(ut);T(Co.$$.fragment,ns),ti=c(ns),vs=s(ns,"P",{});var Pc=a(vs);oi=i(Pc,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),Pc.forEach(t),ni=c(ns),qo=s(ns,"UL",{});var Sa=a(qo);Sn=s(Sa,"LI",{});var sc=a(Sn);si=i(sc,"single sequence: "),ks=s(sc,"CODE",{});var Ac=a(ks);ai=i(Ac,"<s> X </s>"),Ac.forEach(t),sc.forEach(t),ri=c(Sa),Wn=s(Sa,"LI",{});var ac=a(Wn);ii=i(ac,"pair of sequences: "),ys=s(ac,"CODE",{});var jc=a(ys);li=i(jc,"<s> A </s></s> B </s>"),jc.forEach(t),ac.forEach(t),Sa.forEach(t),ns.forEach(t),di=c(mt),Nt=s(mt,"DIV",{class:!0});var Wa=a(Nt);T(Po.$$.fragment,Wa),ci=c(Wa),bs=s(Wa,"P",{});var Oc=a(bs);pi=i(Oc,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),Oc.forEach(t),Wa.forEach(t),mt.forEach(t),ya=c(o),wt=s(o,"H2",{class:!0});var Ua=a(wt);It=s(Ua,"A",{id:!0,class:!0,href:!0});var Dc=a(It);Ts=s(Dc,"SPAN",{});var Nc=a(Ts);T(Ao.$$.fragment,Nc),Nc.forEach(t),Dc.forEach(t),hi=c(Ua),Ms=s(Ua,"SPAN",{});var Ic=a(Ms);ui=i(Ic,"XGLMModel"),Ic.forEach(t),Ua.forEach(t),ba=c(o),ge=s(o,"DIV",{class:!0});var gt=a(ge);T(jo.$$.fragment,gt),mi=c(gt),Oo=s(gt,"P",{});var Ba=a(Oo);fi=i(Ba,`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Un=s(Ba,"A",{href:!0});var Sc=a(Un);gi=i(Sc,"PreTrainedModel"),Sc.forEach(t),_i=i(Ba,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ba.forEach(t),vi=c(gt),Do=s(gt,"P",{});var Ra=a(Do);ki=i(Ra,"This model is also a PyTorch "),No=s(Ra,"A",{href:!0,rel:!0});var Wc=a(No);yi=i(Wc,"torch.nn.Module"),Wc.forEach(t),bi=i(Ra,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ra.forEach(t),Ti=c(gt),St=s(gt,"P",{});var ga=a(St);Mi=i(ga,"Transformer decoder consisting of "),ws=s(ga,"EM",{});var Uc=a(ws);wi=i(Uc,"config.num_layers"),Uc.forEach(t),Li=i(ga," layers. Each layer is a "),Ls=s(ga,"CODE",{});var Bc=a(Ls);$i=i(Bc,"XGLMDecoderLayer"),Bc.forEach(t),ga.forEach(t),xi=c(gt),Ae=s(gt,"DIV",{class:!0});var ho=a(Ae);T(Io.$$.fragment,ho),Xi=c(ho),Lt=s(ho,"P",{});var ss=a(Lt);zi=i(ss,"The "),Bn=s(ss,"A",{href:!0});var Rc=a(Bn);Fi=i(Rc,"XGLMModel"),Rc.forEach(t),Gi=i(ss," forward method, overrides the "),$s=s(ss,"CODE",{});var Vc=a($s);Ei=i(Vc,"__call__"),Vc.forEach(t),Ci=i(ss," special method."),ss.forEach(t),qi=c(ho),T(Wt.$$.fragment,ho),Pi=c(ho),T(Ut.$$.fragment,ho),ho.forEach(t),gt.forEach(t),Ta=c(o),$t=s(o,"H2",{class:!0});var Va=a($t);Bt=s(Va,"A",{id:!0,class:!0,href:!0});var Hc=a(Bt);xs=s(Hc,"SPAN",{});var Kc=a(xs);T(So.$$.fragment,Kc),Kc.forEach(t),Hc.forEach(t),Ai=c(Va),Xs=s(Va,"SPAN",{});var Jc=a(Xs);ji=i(Jc,"XGLMForCausalLM"),Jc.forEach(t),Va.forEach(t),Ma=c(o),_e=s(o,"DIV",{class:!0});var _t=a(_e);T(Wo.$$.fragment,_t),Oi=c(_t),zs=s(_t,"P",{});var Zc=a(zs);Di=i(Zc,`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Zc.forEach(t),Ni=c(_t),Uo=s(_t,"P",{});var Ha=a(Uo);Ii=i(Ha,"This model inherits from "),Rn=s(Ha,"A",{href:!0});var Qc=a(Rn);Si=i(Qc,"PreTrainedModel"),Qc.forEach(t),Wi=i(Ha,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ha.forEach(t),Ui=c(_t),Bo=s(_t,"P",{});var Ka=a(Bo);Bi=i(Ka,"This model is also a PyTorch "),Ro=s(Ka,"A",{href:!0,rel:!0});var Yc=a(Ro);Ri=i(Yc,"torch.nn.Module"),Yc.forEach(t),Vi=i(Ka,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ka.forEach(t),Hi=c(_t),je=s(_t,"DIV",{class:!0});var uo=a(je);T(Vo.$$.fragment,uo),Ki=c(uo),xt=s(uo,"P",{});var as=a(xt);Ji=i(as,"The "),Vn=s(as,"A",{href:!0});var ep=a(Vn);Zi=i(ep,"XGLMForCausalLM"),ep.forEach(t),Qi=i(as," forward method, overrides the "),Fs=s(as,"CODE",{});var tp=a(Fs);Yi=i(tp,"__call__"),tp.forEach(t),el=i(as," special method."),as.forEach(t),tl=c(uo),T(Rt.$$.fragment,uo),ol=c(uo),T(Vt.$$.fragment,uo),uo.forEach(t),_t.forEach(t),wa=c(o),Xt=s(o,"H2",{class:!0});var Ja=a(Xt);Ht=s(Ja,"A",{id:!0,class:!0,href:!0});var op=a(Ht);Gs=s(op,"SPAN",{});var np=a(Gs);T(Ho.$$.fragment,np),np.forEach(t),op.forEach(t),nl=c(Ja),Es=s(Ja,"SPAN",{});var sp=a(Es);sl=i(sp,"TFXGLMModel"),sp.forEach(t),Ja.forEach(t),La=c(o),Q=s(o,"DIV",{class:!0});var Se=a(Q);T(Ko.$$.fragment,Se),al=c(Se),Jo=s(Se,"P",{});var Za=a(Jo);rl=i(Za,`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Hn=s(Za,"A",{href:!0});var ap=a(Hn);il=i(ap,"TFPreTrainedModel"),ap.forEach(t),ll=i(Za,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Za.forEach(t),dl=c(Se),Zo=s(Se,"P",{});var Qa=a(Zo);cl=i(Qa,"This model is also a "),Qo=s(Qa,"A",{href:!0,rel:!0});var rp=a(Qo);pl=i(rp,"tf.keras.Model"),rp.forEach(t),hl=i(Qa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qa.forEach(t),ul=c(Se),T(Kt.$$.fragment,Se),ml=c(Se),Jt=s(Se,"P",{});var _a=a(Jt);fl=i(_a,"Transformer decoder consisting of "),Cs=s(_a,"EM",{});var ip=a(Cs);gl=i(ip,"config.num_layers"),ip.forEach(t),_l=i(_a," layers. Each layer is a "),qs=s(_a,"CODE",{});var lp=a(qs);vl=i(lp,"TFXGLMDecoderLayer"),lp.forEach(t),_a.forEach(t),kl=c(Se),Oe=s(Se,"DIV",{class:!0});var mo=a(Oe);T(Yo.$$.fragment,mo),yl=c(mo),zt=s(mo,"P",{});var rs=a(zt);bl=i(rs,"The "),Kn=s(rs,"A",{href:!0});var dp=a(Kn);Tl=i(dp,"TFXGLMModel"),dp.forEach(t),Ml=i(rs," forward method, overrides the "),Ps=s(rs,"CODE",{});var cp=a(Ps);wl=i(cp,"__call__"),cp.forEach(t),Ll=i(rs," special method."),rs.forEach(t),$l=c(mo),T(Zt.$$.fragment,mo),xl=c(mo),T(Qt.$$.fragment,mo),mo.forEach(t),Se.forEach(t),$a=c(o),Ft=s(o,"H2",{class:!0});var Ya=a(Ft);Yt=s(Ya,"A",{id:!0,class:!0,href:!0});var pp=a(Yt);As=s(pp,"SPAN",{});var hp=a(As);T(en.$$.fragment,hp),hp.forEach(t),pp.forEach(t),Xl=c(Ya),js=s(Ya,"SPAN",{});var up=a(js);zl=i(up,"TFXGLMForCausalLM"),up.forEach(t),Ya.forEach(t),xa=c(o),Y=s(o,"DIV",{class:!0});var We=a(Y);T(tn.$$.fragment,We),Fl=c(We),Os=s(We,"P",{});var mp=a(Os);Gl=i(mp,`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),mp.forEach(t),El=c(We),on=s(We,"P",{});var er=a(on);Cl=i(er,"This model inherits from "),Jn=s(er,"A",{href:!0});var fp=a(Jn);ql=i(fp,"TFPreTrainedModel"),fp.forEach(t),Pl=i(er,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),er.forEach(t),Al=c(We),nn=s(We,"P",{});var tr=a(nn);jl=i(tr,"This model is also a "),sn=s(tr,"A",{href:!0,rel:!0});var gp=a(sn);Ol=i(gp,"tf.keras.Model"),gp.forEach(t),Dl=i(tr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tr.forEach(t),Nl=c(We),T(eo.$$.fragment,We),Il=c(We),De=s(We,"DIV",{class:!0});var fo=a(De);T(an.$$.fragment,fo),Sl=c(fo),Gt=s(fo,"P",{});var is=a(Gt);Wl=i(is,"The "),Zn=s(is,"A",{href:!0});var _p=a(Zn);Ul=i(_p,"TFXGLMForCausalLM"),_p.forEach(t),Bl=i(is," forward method, overrides the "),Ds=s(is,"CODE",{});var vp=a(Ds);Rl=i(vp,"__call__"),vp.forEach(t),Vl=i(is," special method."),is.forEach(t),Hl=c(fo),T(to.$$.fragment,fo),Kl=c(fo),T(oo.$$.fragment,fo),fo.forEach(t),We.forEach(t),Xa=c(o),Et=s(o,"H2",{class:!0});var or=a(Et);no=s(or,"A",{id:!0,class:!0,href:!0});var kp=a(no);Ns=s(kp,"SPAN",{});var yp=a(Ns);T(rn.$$.fragment,yp),yp.forEach(t),kp.forEach(t),Jl=c(or),Is=s(or,"SPAN",{});var bp=a(Is);Zl=i(bp,"FlaxXGLMModel"),bp.forEach(t),or.forEach(t),za=c(o),ee=s(o,"DIV",{class:!0});var Ue=a(ee);T(ln.$$.fragment,Ue),Ql=c(Ue),dn=s(Ue,"P",{});var nr=a(dn);Yl=i(nr,`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Qn=s(nr,"A",{href:!0});var Tp=a(Qn);ed=i(Tp,"FlaxPreTrainedModel"),Tp.forEach(t),td=i(nr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nr.forEach(t),od=c(Ue),cn=s(Ue,"P",{});var sr=a(cn);nd=i(sr,`This model is also a Flax Linen
`),pn=s(sr,"A",{href:!0,rel:!0});var Mp=a(pn);sd=i(Mp,"flax.nn.Module"),Mp.forEach(t),ad=i(sr,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),sr.forEach(t),rd=c(Ue),Ss=s(Ue,"P",{});var wp=a(Ss);id=i(wp,"Finally, this model supports inherent JAX features such as:"),wp.forEach(t),ld=c(Ue),lt=s(Ue,"UL",{});var go=a(lt);Ws=s(go,"LI",{});var Lp=a(Ws);hn=s(Lp,"A",{href:!0,rel:!0});var $p=a(hn);dd=i($p,"Just-In-Time (JIT) compilation"),$p.forEach(t),Lp.forEach(t),cd=c(go),Us=s(go,"LI",{});var xp=a(Us);un=s(xp,"A",{href:!0,rel:!0});var Xp=a(un);pd=i(Xp,"Automatic Differentiation"),Xp.forEach(t),xp.forEach(t),hd=c(go),Bs=s(go,"LI",{});var zp=a(Bs);mn=s(zp,"A",{href:!0,rel:!0});var Fp=a(mn);ud=i(Fp,"Vectorization"),Fp.forEach(t),zp.forEach(t),md=c(go),Rs=s(go,"LI",{});var Gp=a(Rs);fn=s(Gp,"A",{href:!0,rel:!0});var Ep=a(fn);fd=i(Ep,"Parallelization"),Ep.forEach(t),Gp.forEach(t),go.forEach(t),gd=c(Ue),Ne=s(Ue,"DIV",{class:!0});var _o=a(Ne);T(gn.$$.fragment,_o),_d=c(_o),Ct=s(_o,"P",{});var ls=a(Ct);vd=i(ls,"The "),Vs=s(ls,"CODE",{});var Cp=a(Vs);kd=i(Cp,"FlaxXGLMPreTrainedModel"),Cp.forEach(t),yd=i(ls," forward method, overrides the "),Hs=s(ls,"CODE",{});var qp=a(Hs);bd=i(qp,"__call__"),qp.forEach(t),Td=i(ls," special method."),ls.forEach(t),Md=c(_o),T(so.$$.fragment,_o),wd=c(_o),T(ao.$$.fragment,_o),_o.forEach(t),Ue.forEach(t),Fa=c(o),qt=s(o,"H2",{class:!0});var ar=a(qt);ro=s(ar,"A",{id:!0,class:!0,href:!0});var Pp=a(ro);Ks=s(Pp,"SPAN",{});var Ap=a(Ks);T(_n.$$.fragment,Ap),Ap.forEach(t),Pp.forEach(t),Ld=c(ar),Js=s(ar,"SPAN",{});var jp=a(Js);$d=i(jp,"FlaxXGLMForCausalLM"),jp.forEach(t),ar.forEach(t),Ga=c(o),U=s(o,"DIV",{class:!0});var Te=a(U);T(vn.$$.fragment,Te),xd=c(Te),Zs=s(Te,"P",{});var Op=a(Zs);Xd=i(Op,`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Op.forEach(t),zd=c(Te),kn=s(Te,"P",{});var rr=a(kn);Fd=i(rr,"This model inherits from "),Yn=s(rr,"A",{href:!0});var Dp=a(Yn);Gd=i(Dp,"FlaxPreTrainedModel"),Dp.forEach(t),Ed=i(rr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rr.forEach(t),Cd=c(Te),yn=s(Te,"P",{});var ir=a(yn);qd=i(ir,`This model is also a Flax Linen
`),bn=s(ir,"A",{href:!0,rel:!0});var Np=a(bn);Pd=i(Np,"flax.nn.Module"),Np.forEach(t),Ad=i(ir,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ir.forEach(t),jd=c(Te),Qs=s(Te,"P",{});var Ip=a(Qs);Od=i(Ip,"Finally, this model supports inherent JAX features such as:"),Ip.forEach(t),Dd=c(Te),dt=s(Te,"UL",{});var vo=a(dt);Ys=s(vo,"LI",{});var Sp=a(Ys);Tn=s(Sp,"A",{href:!0,rel:!0});var Wp=a(Tn);Nd=i(Wp,"Just-In-Time (JIT) compilation"),Wp.forEach(t),Sp.forEach(t),Id=c(vo),ea=s(vo,"LI",{});var Up=a(ea);Mn=s(Up,"A",{href:!0,rel:!0});var Bp=a(Mn);Sd=i(Bp,"Automatic Differentiation"),Bp.forEach(t),Up.forEach(t),Wd=c(vo),ta=s(vo,"LI",{});var Rp=a(ta);wn=s(Rp,"A",{href:!0,rel:!0});var Vp=a(wn);Ud=i(Vp,"Vectorization"),Vp.forEach(t),Rp.forEach(t),Bd=c(vo),oa=s(vo,"LI",{});var Hp=a(oa);Ln=s(Hp,"A",{href:!0,rel:!0});var Kp=a(Ln);Rd=i(Kp,"Parallelization"),Kp.forEach(t),Hp.forEach(t),vo.forEach(t),Vd=c(Te),Ie=s(Te,"DIV",{class:!0});var ko=a(Ie);T($n.$$.fragment,ko),Hd=c(ko),Pt=s(ko,"P",{});var ds=a(Pt);Kd=i(ds,"The "),na=s(ds,"CODE",{});var Jp=a(na);Jd=i(Jp,"FlaxXGLMPreTrainedModel"),Jp.forEach(t),Zd=i(ds," forward method, overrides the "),sa=s(ds,"CODE",{});var Zp=a(sa);Qd=i(Zp,"__call__"),Zp.forEach(t),Yd=i(ds," special method."),ds.forEach(t),ec=c(ko),T(io.$$.fragment,ko),tc=c(ko),T(lo.$$.fragment,ko),ko.forEach(t),Te.forEach(t),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(kh)),h(m,"id","xglm"),h(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(m,"href","#xglm"),h(f,"class","relative group"),h(te,"id","overview"),h(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(te,"href","#overview"),h(j,"class","relative group"),h(se,"href","https://arxiv.org/abs/2112.10668"),h(se,"rel","nofollow"),h(re,"href","https://huggingface.co/valhalla"),h(re,"rel","nofollow"),h(le,"href","https://github.com/pytorch/fairseq/tree/main/examples/xglm"),h(le,"rel","nofollow"),h(oe,"id","transformers.XGLMConfig"),h(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oe,"href","#transformers.XGLMConfig"),h(q,"class","relative group"),h(A,"href","/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMModel"),h(ue,"href","https://huggingface.co/facebook/xglm-564M"),h(ue,"rel","nofollow"),h(qe,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),h(Pe,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),h(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ye,"id","transformers.XGLMTokenizer"),h(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ye,"href","#transformers.XGLMTokenizer"),h(D,"class","relative group"),h(Cn,"href","/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaTokenizer"),h(qn,"href","/docs/transformers/v4.22.0/en/model_doc/xlnet#transformers.XLNetTokenizer"),h(bo,"href","https://github.com/google/sentencepiece"),h(bo,"rel","nofollow"),h(Pn,"href","/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(On,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Dt,"id","transformers.XGLMTokenizerFast"),h(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Dt,"href","#transformers.XGLMTokenizerFast"),h(Mt,"class","relative group"),h(Dn,"href","/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaTokenizer"),h(Nn,"href","/docs/transformers/v4.22.0/en/model_doc/xlnet#transformers.XLNetTokenizer"),h(Go,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),h(Go,"rel","nofollow"),h(In,"href","/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(It,"id","transformers.XGLMModel"),h(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(It,"href","#transformers.XGLMModel"),h(wt,"class","relative group"),h(Un,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),h(No,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(No,"rel","nofollow"),h(Bn,"href","/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMModel"),h(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Bt,"id","transformers.XGLMForCausalLM"),h(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Bt,"href","#transformers.XGLMForCausalLM"),h($t,"class","relative group"),h(Rn,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),h(Ro,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ro,"rel","nofollow"),h(Vn,"href","/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.XGLMForCausalLM"),h(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ht,"id","transformers.TFXGLMModel"),h(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ht,"href","#transformers.TFXGLMModel"),h(Xt,"class","relative group"),h(Hn,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(Qo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Qo,"rel","nofollow"),h(Kn,"href","/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.TFXGLMModel"),h(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Yt,"id","transformers.TFXGLMForCausalLM"),h(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yt,"href","#transformers.TFXGLMForCausalLM"),h(Ft,"class","relative group"),h(Jn,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(sn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(sn,"rel","nofollow"),h(Zn,"href","/docs/transformers/v4.22.0/en/model_doc/xglm#transformers.TFXGLMForCausalLM"),h(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(no,"id","transformers.FlaxXGLMModel"),h(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(no,"href","#transformers.FlaxXGLMModel"),h(Et,"class","relative group"),h(Qn,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(pn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),h(pn,"rel","nofollow"),h(hn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(hn,"rel","nofollow"),h(un,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(un,"rel","nofollow"),h(mn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(mn,"rel","nofollow"),h(fn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(fn,"rel","nofollow"),h(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ro,"id","transformers.FlaxXGLMForCausalLM"),h(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ro,"href","#transformers.FlaxXGLMForCausalLM"),h(qt,"class","relative group"),h(Yn,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(bn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),h(bn,"rel","nofollow"),h(Tn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(Tn,"rel","nofollow"),h(Mn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(Mn,"rel","nofollow"),h(wn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(wn,"rel","nofollow"),h(Ln,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(Ln,"rel","nofollow"),h(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,p),g(o,k,_),g(o,f,_),e(f,m),e(m,v),M(l,v,null),e(f,u),e(f,X),e(X,Be),g(o,Xe,_),g(o,j,_),e(j,te),e(te,ne),M(x,ne,null),e(j,Re),e(j,H),e(H,Ve),g(o,ze,_),g(o,I,_),e(I,He),e(I,se),e(se,ae),e(I,Ke),g(o,Fe,_),g(o,B,_),e(B,Je),g(o,Ge,_),g(o,R,_),e(R,Me),e(Me,Ze),g(o,ve,_),g(o,G,_),e(G,O),e(G,re),e(re,ie),e(G,Qe),e(G,le),e(le,de),e(G,Ye),g(o,Ee,_),g(o,q,_),e(q,oe),e(oe,K),M(ce,K,null),e(q,et),e(q,J),e(J,tt),g(o,Ce,_),g(o,P,_),M(pe,P,null),e(P,he),e(P,Z),e(Z,we),e(Z,A),e(A,ot),e(Z,S),e(Z,ue),e(ue,nt),e(Z,y),e(P,z),e(P,me),e(me,Le),e(me,qe),e(qe,vt),e(me,E),e(me,Pe),e(Pe,kt),e(me,yt),e(P,bt),M(ke,P,null),g(o,V,_),g(o,D,_),e(D,ye),e(ye,st),M(W,st,null),e(D,Tt),e(D,at),e(at,rt),g(o,pt,_),g(o,C,_),M($e,C,null),e(C,lr),e(C,it),e(it,dr),e(it,Cn),e(Cn,cr),e(it,pr),e(it,qn),e(qn,hr),e(it,ur),e(it,bo),e(bo,mr),e(it,fr),e(C,gr),e(C,To),e(To,_r),e(To,Pn),e(Pn,vr),e(To,kr),e(C,yr),e(C,ht),M(Mo,ht,null),e(ht,br),e(ht,cs),e(cs,Tr),e(ht,Mr),e(ht,wo),e(wo,An),e(An,wr),e(An,ps),e(ps,Lr),e(wo,$r),e(wo,jn),e(jn,xr),e(jn,hs),e(hs,Xr),e(C,zr),e(C,jt),M(Lo,jt,null),e(jt,Fr),e(jt,$o),e($o,Gr),e($o,us),e(us,Er),e($o,Cr),e(C,qr),e(C,Ot),M(xo,Ot,null),e(Ot,Pr),e(Ot,ms),e(ms,Ar),e(C,jr),e(C,On),M(Xo,On,null),g(o,va,_),g(o,Mt,_),e(Mt,Dt),e(Dt,fs),M(zo,fs,null),e(Mt,Or),e(Mt,gs),e(gs,Dr),g(o,ka,_),g(o,fe,_),M(Fo,fe,null),e(fe,Nr),e(fe,xe),e(xe,Ir),e(xe,_s),e(_s,Sr),e(xe,Wr),e(xe,Dn),e(Dn,Ur),e(xe,Br),e(xe,Nn),e(Nn,Rr),e(xe,Vr),e(xe,Go),e(Go,Hr),e(xe,Kr),e(fe,Jr),e(fe,Eo),e(Eo,Zr),e(Eo,In),e(In,Qr),e(Eo,Yr),e(fe,ei),e(fe,ut),M(Co,ut,null),e(ut,ti),e(ut,vs),e(vs,oi),e(ut,ni),e(ut,qo),e(qo,Sn),e(Sn,si),e(Sn,ks),e(ks,ai),e(qo,ri),e(qo,Wn),e(Wn,ii),e(Wn,ys),e(ys,li),e(fe,di),e(fe,Nt),M(Po,Nt,null),e(Nt,ci),e(Nt,bs),e(bs,pi),g(o,ya,_),g(o,wt,_),e(wt,It),e(It,Ts),M(Ao,Ts,null),e(wt,hi),e(wt,Ms),e(Ms,ui),g(o,ba,_),g(o,ge,_),M(jo,ge,null),e(ge,mi),e(ge,Oo),e(Oo,fi),e(Oo,Un),e(Un,gi),e(Oo,_i),e(ge,vi),e(ge,Do),e(Do,ki),e(Do,No),e(No,yi),e(Do,bi),e(ge,Ti),e(ge,St),e(St,Mi),e(St,ws),e(ws,wi),e(St,Li),e(St,Ls),e(Ls,$i),e(ge,xi),e(ge,Ae),M(Io,Ae,null),e(Ae,Xi),e(Ae,Lt),e(Lt,zi),e(Lt,Bn),e(Bn,Fi),e(Lt,Gi),e(Lt,$s),e($s,Ei),e(Lt,Ci),e(Ae,qi),M(Wt,Ae,null),e(Ae,Pi),M(Ut,Ae,null),g(o,Ta,_),g(o,$t,_),e($t,Bt),e(Bt,xs),M(So,xs,null),e($t,Ai),e($t,Xs),e(Xs,ji),g(o,Ma,_),g(o,_e,_),M(Wo,_e,null),e(_e,Oi),e(_e,zs),e(zs,Di),e(_e,Ni),e(_e,Uo),e(Uo,Ii),e(Uo,Rn),e(Rn,Si),e(Uo,Wi),e(_e,Ui),e(_e,Bo),e(Bo,Bi),e(Bo,Ro),e(Ro,Ri),e(Bo,Vi),e(_e,Hi),e(_e,je),M(Vo,je,null),e(je,Ki),e(je,xt),e(xt,Ji),e(xt,Vn),e(Vn,Zi),e(xt,Qi),e(xt,Fs),e(Fs,Yi),e(xt,el),e(je,tl),M(Rt,je,null),e(je,ol),M(Vt,je,null),g(o,wa,_),g(o,Xt,_),e(Xt,Ht),e(Ht,Gs),M(Ho,Gs,null),e(Xt,nl),e(Xt,Es),e(Es,sl),g(o,La,_),g(o,Q,_),M(Ko,Q,null),e(Q,al),e(Q,Jo),e(Jo,rl),e(Jo,Hn),e(Hn,il),e(Jo,ll),e(Q,dl),e(Q,Zo),e(Zo,cl),e(Zo,Qo),e(Qo,pl),e(Zo,hl),e(Q,ul),M(Kt,Q,null),e(Q,ml),e(Q,Jt),e(Jt,fl),e(Jt,Cs),e(Cs,gl),e(Jt,_l),e(Jt,qs),e(qs,vl),e(Q,kl),e(Q,Oe),M(Yo,Oe,null),e(Oe,yl),e(Oe,zt),e(zt,bl),e(zt,Kn),e(Kn,Tl),e(zt,Ml),e(zt,Ps),e(Ps,wl),e(zt,Ll),e(Oe,$l),M(Zt,Oe,null),e(Oe,xl),M(Qt,Oe,null),g(o,$a,_),g(o,Ft,_),e(Ft,Yt),e(Yt,As),M(en,As,null),e(Ft,Xl),e(Ft,js),e(js,zl),g(o,xa,_),g(o,Y,_),M(tn,Y,null),e(Y,Fl),e(Y,Os),e(Os,Gl),e(Y,El),e(Y,on),e(on,Cl),e(on,Jn),e(Jn,ql),e(on,Pl),e(Y,Al),e(Y,nn),e(nn,jl),e(nn,sn),e(sn,Ol),e(nn,Dl),e(Y,Nl),M(eo,Y,null),e(Y,Il),e(Y,De),M(an,De,null),e(De,Sl),e(De,Gt),e(Gt,Wl),e(Gt,Zn),e(Zn,Ul),e(Gt,Bl),e(Gt,Ds),e(Ds,Rl),e(Gt,Vl),e(De,Hl),M(to,De,null),e(De,Kl),M(oo,De,null),g(o,Xa,_),g(o,Et,_),e(Et,no),e(no,Ns),M(rn,Ns,null),e(Et,Jl),e(Et,Is),e(Is,Zl),g(o,za,_),g(o,ee,_),M(ln,ee,null),e(ee,Ql),e(ee,dn),e(dn,Yl),e(dn,Qn),e(Qn,ed),e(dn,td),e(ee,od),e(ee,cn),e(cn,nd),e(cn,pn),e(pn,sd),e(cn,ad),e(ee,rd),e(ee,Ss),e(Ss,id),e(ee,ld),e(ee,lt),e(lt,Ws),e(Ws,hn),e(hn,dd),e(lt,cd),e(lt,Us),e(Us,un),e(un,pd),e(lt,hd),e(lt,Bs),e(Bs,mn),e(mn,ud),e(lt,md),e(lt,Rs),e(Rs,fn),e(fn,fd),e(ee,gd),e(ee,Ne),M(gn,Ne,null),e(Ne,_d),e(Ne,Ct),e(Ct,vd),e(Ct,Vs),e(Vs,kd),e(Ct,yd),e(Ct,Hs),e(Hs,bd),e(Ct,Td),e(Ne,Md),M(so,Ne,null),e(Ne,wd),M(ao,Ne,null),g(o,Fa,_),g(o,qt,_),e(qt,ro),e(ro,Ks),M(_n,Ks,null),e(qt,Ld),e(qt,Js),e(Js,$d),g(o,Ga,_),g(o,U,_),M(vn,U,null),e(U,xd),e(U,Zs),e(Zs,Xd),e(U,zd),e(U,kn),e(kn,Fd),e(kn,Yn),e(Yn,Gd),e(kn,Ed),e(U,Cd),e(U,yn),e(yn,qd),e(yn,bn),e(bn,Pd),e(yn,Ad),e(U,jd),e(U,Qs),e(Qs,Od),e(U,Dd),e(U,dt),e(dt,Ys),e(Ys,Tn),e(Tn,Nd),e(dt,Id),e(dt,ea),e(ea,Mn),e(Mn,Sd),e(dt,Wd),e(dt,ta),e(ta,wn),e(wn,Ud),e(dt,Bd),e(dt,oa),e(oa,Ln),e(Ln,Rd),e(U,Vd),e(U,Ie),M($n,Ie,null),e(Ie,Hd),e(Ie,Pt),e(Pt,Kd),e(Pt,na),e(na,Jd),e(Pt,Zd),e(Pt,sa),e(sa,Qd),e(Pt,Yd),e(Ie,ec),M(io,Ie,null),e(Ie,tc),M(lo,Ie,null),Ea=!0},p(o,[_]){const xn={};_&2&&(xn.$$scope={dirty:_,ctx:o}),ke.$set(xn);const aa={};_&2&&(aa.$$scope={dirty:_,ctx:o}),Wt.$set(aa);const ra={};_&2&&(ra.$$scope={dirty:_,ctx:o}),Ut.$set(ra);const ia={};_&2&&(ia.$$scope={dirty:_,ctx:o}),Rt.$set(ia);const Xn={};_&2&&(Xn.$$scope={dirty:_,ctx:o}),Vt.$set(Xn);const la={};_&2&&(la.$$scope={dirty:_,ctx:o}),Kt.$set(la);const da={};_&2&&(da.$$scope={dirty:_,ctx:o}),Zt.$set(da);const ca={};_&2&&(ca.$$scope={dirty:_,ctx:o}),Qt.$set(ca);const zn={};_&2&&(zn.$$scope={dirty:_,ctx:o}),eo.$set(zn);const pa={};_&2&&(pa.$$scope={dirty:_,ctx:o}),to.$set(pa);const ha={};_&2&&(ha.$$scope={dirty:_,ctx:o}),oo.$set(ha);const ua={};_&2&&(ua.$$scope={dirty:_,ctx:o}),so.$set(ua);const ma={};_&2&&(ma.$$scope={dirty:_,ctx:o}),ao.$set(ma);const At={};_&2&&(At.$$scope={dirty:_,ctx:o}),io.$set(At);const fa={};_&2&&(fa.$$scope={dirty:_,ctx:o}),lo.$set(fa)},i(o){Ea||(w(l.$$.fragment,o),w(x.$$.fragment,o),w(ce.$$.fragment,o),w(pe.$$.fragment,o),w(ke.$$.fragment,o),w(W.$$.fragment,o),w($e.$$.fragment,o),w(Mo.$$.fragment,o),w(Lo.$$.fragment,o),w(xo.$$.fragment,o),w(Xo.$$.fragment,o),w(zo.$$.fragment,o),w(Fo.$$.fragment,o),w(Co.$$.fragment,o),w(Po.$$.fragment,o),w(Ao.$$.fragment,o),w(jo.$$.fragment,o),w(Io.$$.fragment,o),w(Wt.$$.fragment,o),w(Ut.$$.fragment,o),w(So.$$.fragment,o),w(Wo.$$.fragment,o),w(Vo.$$.fragment,o),w(Rt.$$.fragment,o),w(Vt.$$.fragment,o),w(Ho.$$.fragment,o),w(Ko.$$.fragment,o),w(Kt.$$.fragment,o),w(Yo.$$.fragment,o),w(Zt.$$.fragment,o),w(Qt.$$.fragment,o),w(en.$$.fragment,o),w(tn.$$.fragment,o),w(eo.$$.fragment,o),w(an.$$.fragment,o),w(to.$$.fragment,o),w(oo.$$.fragment,o),w(rn.$$.fragment,o),w(ln.$$.fragment,o),w(gn.$$.fragment,o),w(so.$$.fragment,o),w(ao.$$.fragment,o),w(_n.$$.fragment,o),w(vn.$$.fragment,o),w($n.$$.fragment,o),w(io.$$.fragment,o),w(lo.$$.fragment,o),Ea=!0)},o(o){L(l.$$.fragment,o),L(x.$$.fragment,o),L(ce.$$.fragment,o),L(pe.$$.fragment,o),L(ke.$$.fragment,o),L(W.$$.fragment,o),L($e.$$.fragment,o),L(Mo.$$.fragment,o),L(Lo.$$.fragment,o),L(xo.$$.fragment,o),L(Xo.$$.fragment,o),L(zo.$$.fragment,o),L(Fo.$$.fragment,o),L(Co.$$.fragment,o),L(Po.$$.fragment,o),L(Ao.$$.fragment,o),L(jo.$$.fragment,o),L(Io.$$.fragment,o),L(Wt.$$.fragment,o),L(Ut.$$.fragment,o),L(So.$$.fragment,o),L(Wo.$$.fragment,o),L(Vo.$$.fragment,o),L(Rt.$$.fragment,o),L(Vt.$$.fragment,o),L(Ho.$$.fragment,o),L(Ko.$$.fragment,o),L(Kt.$$.fragment,o),L(Yo.$$.fragment,o),L(Zt.$$.fragment,o),L(Qt.$$.fragment,o),L(en.$$.fragment,o),L(tn.$$.fragment,o),L(eo.$$.fragment,o),L(an.$$.fragment,o),L(to.$$.fragment,o),L(oo.$$.fragment,o),L(rn.$$.fragment,o),L(ln.$$.fragment,o),L(gn.$$.fragment,o),L(so.$$.fragment,o),L(ao.$$.fragment,o),L(_n.$$.fragment,o),L(vn.$$.fragment,o),L($n.$$.fragment,o),L(io.$$.fragment,o),L(lo.$$.fragment,o),Ea=!1},d(o){t(p),o&&t(k),o&&t(f),$(l),o&&t(Xe),o&&t(j),$(x),o&&t(ze),o&&t(I),o&&t(Fe),o&&t(B),o&&t(Ge),o&&t(R),o&&t(ve),o&&t(G),o&&t(Ee),o&&t(q),$(ce),o&&t(Ce),o&&t(P),$(pe),$(ke),o&&t(V),o&&t(D),$(W),o&&t(pt),o&&t(C),$($e),$(Mo),$(Lo),$(xo),$(Xo),o&&t(va),o&&t(Mt),$(zo),o&&t(ka),o&&t(fe),$(Fo),$(Co),$(Po),o&&t(ya),o&&t(wt),$(Ao),o&&t(ba),o&&t(ge),$(jo),$(Io),$(Wt),$(Ut),o&&t(Ta),o&&t($t),$(So),o&&t(Ma),o&&t(_e),$(Wo),$(Vo),$(Rt),$(Vt),o&&t(wa),o&&t(Xt),$(Ho),o&&t(La),o&&t(Q),$(Ko),$(Kt),$(Yo),$(Zt),$(Qt),o&&t($a),o&&t(Ft),$(en),o&&t(xa),o&&t(Y),$(tn),$(eo),$(an),$(to),$(oo),o&&t(Xa),o&&t(Et),$(rn),o&&t(za),o&&t(ee),$(ln),$(gn),$(so),$(ao),o&&t(Fa),o&&t(qt),$(_n),o&&t(Ga),o&&t(U),$(vn),$($n),$(io),$(lo)}}}const kh={local:"xglm",sections:[{local:"overview",title:"Overview"},{local:"transformers.XGLMConfig",title:"XGLMConfig"},{local:"transformers.XGLMTokenizer",title:"XGLMTokenizer"},{local:"transformers.XGLMTokenizerFast",title:"XGLMTokenizerFast"},{local:"transformers.XGLMModel",title:"XGLMModel"},{local:"transformers.XGLMForCausalLM",title:"XGLMForCausalLM"},{local:"transformers.TFXGLMModel",title:"TFXGLMModel"},{local:"transformers.TFXGLMForCausalLM",title:"TFXGLMForCausalLM"},{local:"transformers.FlaxXGLMModel",title:"FlaxXGLMModel"},{local:"transformers.FlaxXGLMForCausalLM",title:"FlaxXGLMForCausalLM"}],title:"XGLM"};function yh(F){return oh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xh extends Qp{constructor(p){super();Yp(this,p,yh,vh,eh,{})}}export{xh as default,kh as metadata};
