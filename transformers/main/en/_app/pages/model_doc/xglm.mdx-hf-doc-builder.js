import{S as Qp,i as Yp,s as eh,e as n,k as d,w as b,t as r,M as th,c as s,d as t,m as c,a,x as T,h as i,b as h,G as e,g,y as M,q as w,o as L,B as $,v as oh,L as _n}from"../../chunks/vendor-hf-doc-builder.js";import{T as no}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as kn}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ue}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as gn}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function nh(z){let p,y,f,u,k;return u=new kn({props:{code:`from transformers import XGLMModel, XGLMConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),y=r("Example:"),f=d(),b(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);y=i(m,"Example:"),m.forEach(t),f=c(l),T(u.$$.fragment,l)},m(l,m){g(l,p,m),e(p,y),g(l,f,m),M(u,l,m),k=!0},p:_n,i(l){k||(w(u.$$.fragment,l),k=!0)},o(l){L(u.$$.fragment,l),k=!1},d(l){l&&t(p),l&&t(f),$(u,l)}}}function sh(z){let p,y,f,u,k;return{c(){p=n("p"),y=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=s(l,"P",{});var m=a(p);y=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(m,"CODE",{});var x=a(f);u=i(x,"Module"),x.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,p,m),e(p,y),e(p,f),e(f,u),e(p,k)},d(l){l&&t(p)}}}function ah(z){let p,y,f,u,k;return u=new kn({props:{code:`from transformers import XGLMTokenizer, XGLMModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),y=r("Example:"),f=d(),b(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);y=i(m,"Example:"),m.forEach(t),f=c(l),T(u.$$.fragment,l)},m(l,m){g(l,p,m),e(p,y),g(l,f,m),M(u,l,m),k=!0},p:_n,i(l){k||(w(u.$$.fragment,l),k=!0)},o(l){L(u.$$.fragment,l),k=!1},d(l){l&&t(p),l&&t(f),$(u,l)}}}function rh(z){let p,y,f,u,k;return{c(){p=n("p"),y=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=s(l,"P",{});var m=a(p);y=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(m,"CODE",{});var x=a(f);u=i(x,"Module"),x.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,p,m),e(p,y),e(p,f),e(f,u),e(p,k)},d(l){l&&t(p)}}}function ih(z){let p,y,f,u,k;return u=new kn({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=n("p"),y=r("Example:"),f=d(),b(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);y=i(m,"Example:"),m.forEach(t),f=c(l),T(u.$$.fragment,l)},m(l,m){g(l,p,m),e(p,y),g(l,f,m),M(u,l,m),k=!0},p:_n,i(l){k||(w(u.$$.fragment,l),k=!0)},o(l){L(u.$$.fragment,l),k=!1},d(l){l&&t(p),l&&t(f),$(u,l)}}}function lh(z){let p,y,f,u,k,l,m,x,Ge,ce,X,ee,B,te,Ee,R,qe,ve,S,V,oe,fe,q,C,pe,ne,ye,he,H,Ce,be,G,Pe,j,Ae,je,O,Oe,De,W,J,A,ge;return{c(){p=n("p"),y=r("TF 2.0 models accepts two formats as inputs:"),f=d(),u=n("ul"),k=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),m=d(),x=n("li"),Ge=r("having all inputs as a list, tuple or dict in the first positional arguments."),ce=d(),X=n("p"),ee=r("This second option is useful when using "),B=n("code"),te=r("tf.keras.Model.fit"),Ee=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),qe=r("model(inputs)"),ve=r("."),S=d(),V=n("p"),oe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),fe=d(),q=n("ul"),C=n("li"),pe=r("a single Tensor with "),ne=n("code"),ye=r("input_ids"),he=r(" only and nothing else: "),H=n("code"),Ce=r("model(input_ids)"),be=d(),G=n("li"),Pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=n("code"),Ae=r("model([input_ids, attention_mask])"),je=r(" or "),O=n("code"),Oe=r("model([input_ids, attention_mask, token_type_ids])"),De=d(),W=n("li"),J=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=n("code"),ge=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){p=s(v,"P",{});var F=a(p);y=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),f=c(v),u=s(v,"UL",{});var se=a(u);k=s(se,"LI",{});var Qe=a(k);l=i(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),m=c(se),x=s(se,"LI",{});var Be=a(x);Ge=i(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),se.forEach(t),ce=c(v),X=s(v,"P",{});var E=a(X);ee=i(E,"This second option is useful when using "),B=s(E,"CODE",{});var _e=a(B);te=i(_e,"tf.keras.Model.fit"),_e.forEach(t),Ee=i(E,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=s(E,"CODE",{});var Ye=a(R);qe=i(Ye,"model(inputs)"),Ye.forEach(t),ve=i(E,"."),E.forEach(t),S=c(v),V=s(v,"P",{});var ae=a(V);oe=i(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),fe=c(v),q=s(v,"UL",{});var K=a(q);C=s(K,"LI",{});var U=a(C);pe=i(U,"a single Tensor with "),ne=s(U,"CODE",{});var et=a(ne);ye=i(et,"input_ids"),et.forEach(t),he=i(U," only and nothing else: "),H=s(U,"CODE",{});var tt=a(H);Ce=i(tt,"model(input_ids)"),tt.forEach(t),U.forEach(t),be=c(K),G=s(K,"LI",{});var D=a(G);Pe=i(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=s(D,"CODE",{});var ot=a(j);Ae=i(ot,"model([input_ids, attention_mask])"),ot.forEach(t),je=i(D," or "),O=s(D,"CODE",{});var nt=a(O);Oe=i(nt,"model([input_ids, attention_mask, token_type_ids])"),nt.forEach(t),D.forEach(t),De=c(K),W=s(K,"LI",{});var Ne=a(W);J=i(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=s(Ne,"CODE",{});var re=a(A);ge=i(re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),re.forEach(t),Ne.forEach(t),K.forEach(t)},m(v,F){g(v,p,F),e(p,y),g(v,f,F),g(v,u,F),e(u,k),e(k,l),e(u,m),e(u,x),e(x,Ge),g(v,ce,F),g(v,X,F),e(X,ee),e(X,B),e(B,te),e(X,Ee),e(X,R),e(R,qe),e(X,ve),g(v,S,F),g(v,V,F),e(V,oe),g(v,fe,F),g(v,q,F),e(q,C),e(C,pe),e(C,ne),e(ne,ye),e(C,he),e(C,H),e(H,Ce),e(q,be),e(q,G),e(G,Pe),e(G,j),e(j,Ae),e(G,je),e(G,O),e(O,Oe),e(q,De),e(q,W),e(W,J),e(W,A),e(A,ge)},d(v){v&&t(p),v&&t(f),v&&t(u),v&&t(ce),v&&t(X),v&&t(S),v&&t(V),v&&t(fe),v&&t(q)}}}function dh(z){let p,y,f,u,k;return{c(){p=n("p"),y=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=s(l,"P",{});var m=a(p);y=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(m,"CODE",{});var x=a(f);u=i(x,"Module"),x.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,p,m),e(p,y),e(p,f),e(f,u),e(p,k)},d(l){l&&t(p)}}}function ch(z){let p,y,f,u,k;return u=new kn({props:{code:`from transformers import XGLMTokenizer, TFXGLMModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),y=r("Example:"),f=d(),b(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);y=i(m,"Example:"),m.forEach(t),f=c(l),T(u.$$.fragment,l)},m(l,m){g(l,p,m),e(p,y),g(l,f,m),M(u,l,m),k=!0},p:_n,i(l){k||(w(u.$$.fragment,l),k=!0)},o(l){L(u.$$.fragment,l),k=!1},d(l){l&&t(p),l&&t(f),$(u,l)}}}function ph(z){let p,y,f,u,k,l,m,x,Ge,ce,X,ee,B,te,Ee,R,qe,ve,S,V,oe,fe,q,C,pe,ne,ye,he,H,Ce,be,G,Pe,j,Ae,je,O,Oe,De,W,J,A,ge;return{c(){p=n("p"),y=r("TF 2.0 models accepts two formats as inputs:"),f=d(),u=n("ul"),k=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),m=d(),x=n("li"),Ge=r("having all inputs as a list, tuple or dict in the first positional arguments."),ce=d(),X=n("p"),ee=r("This second option is useful when using "),B=n("code"),te=r("tf.keras.Model.fit"),Ee=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),qe=r("model(inputs)"),ve=r("."),S=d(),V=n("p"),oe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),fe=d(),q=n("ul"),C=n("li"),pe=r("a single Tensor with "),ne=n("code"),ye=r("input_ids"),he=r(" only and nothing else: "),H=n("code"),Ce=r("model(input_ids)"),be=d(),G=n("li"),Pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=n("code"),Ae=r("model([input_ids, attention_mask])"),je=r(" or "),O=n("code"),Oe=r("model([input_ids, attention_mask, token_type_ids])"),De=d(),W=n("li"),J=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=n("code"),ge=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){p=s(v,"P",{});var F=a(p);y=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),f=c(v),u=s(v,"UL",{});var se=a(u);k=s(se,"LI",{});var Qe=a(k);l=i(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),m=c(se),x=s(se,"LI",{});var Be=a(x);Ge=i(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),se.forEach(t),ce=c(v),X=s(v,"P",{});var E=a(X);ee=i(E,"This second option is useful when using "),B=s(E,"CODE",{});var _e=a(B);te=i(_e,"tf.keras.Model.fit"),_e.forEach(t),Ee=i(E,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=s(E,"CODE",{});var Ye=a(R);qe=i(Ye,"model(inputs)"),Ye.forEach(t),ve=i(E,"."),E.forEach(t),S=c(v),V=s(v,"P",{});var ae=a(V);oe=i(ae,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae.forEach(t),fe=c(v),q=s(v,"UL",{});var K=a(q);C=s(K,"LI",{});var U=a(C);pe=i(U,"a single Tensor with "),ne=s(U,"CODE",{});var et=a(ne);ye=i(et,"input_ids"),et.forEach(t),he=i(U," only and nothing else: "),H=s(U,"CODE",{});var tt=a(H);Ce=i(tt,"model(input_ids)"),tt.forEach(t),U.forEach(t),be=c(K),G=s(K,"LI",{});var D=a(G);Pe=i(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=s(D,"CODE",{});var ot=a(j);Ae=i(ot,"model([input_ids, attention_mask])"),ot.forEach(t),je=i(D," or "),O=s(D,"CODE",{});var nt=a(O);Oe=i(nt,"model([input_ids, attention_mask, token_type_ids])"),nt.forEach(t),D.forEach(t),De=c(K),W=s(K,"LI",{});var Ne=a(W);J=i(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=s(Ne,"CODE",{});var re=a(A);ge=i(re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),re.forEach(t),Ne.forEach(t),K.forEach(t)},m(v,F){g(v,p,F),e(p,y),g(v,f,F),g(v,u,F),e(u,k),e(k,l),e(u,m),e(u,x),e(x,Ge),g(v,ce,F),g(v,X,F),e(X,ee),e(X,B),e(B,te),e(X,Ee),e(X,R),e(R,qe),e(X,ve),g(v,S,F),g(v,V,F),e(V,oe),g(v,fe,F),g(v,q,F),e(q,C),e(C,pe),e(C,ne),e(ne,ye),e(C,he),e(C,H),e(H,Ce),e(q,be),e(q,G),e(G,Pe),e(G,j),e(j,Ae),e(G,je),e(G,O),e(O,Oe),e(q,De),e(q,W),e(W,J),e(W,A),e(A,ge)},d(v){v&&t(p),v&&t(f),v&&t(u),v&&t(ce),v&&t(X),v&&t(S),v&&t(V),v&&t(fe),v&&t(q)}}}function hh(z){let p,y,f,u,k;return{c(){p=n("p"),y=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=s(l,"P",{});var m=a(p);y=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(m,"CODE",{});var x=a(f);u=i(x,"Module"),x.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,p,m),e(p,y),e(p,f),e(f,u),e(p,k)},d(l){l&&t(p)}}}function uh(z){let p,y,f,u,k;return u=new kn({props:{code:`from transformers import XGLMTokenizer, TFXGLMForCausalLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=n("p"),y=r("Example:"),f=d(),b(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);y=i(m,"Example:"),m.forEach(t),f=c(l),T(u.$$.fragment,l)},m(l,m){g(l,p,m),e(p,y),g(l,f,m),M(u,l,m),k=!0},p:_n,i(l){k||(w(u.$$.fragment,l),k=!0)},o(l){L(u.$$.fragment,l),k=!1},d(l){l&&t(p),l&&t(f),$(u,l)}}}function mh(z){let p,y,f,u,k;return{c(){p=n("p"),y=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=s(l,"P",{});var m=a(p);y=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(m,"CODE",{});var x=a(f);u=i(x,"Module"),x.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,p,m),e(p,y),e(p,f),e(f,u),e(p,k)},d(l){l&&t(p)}}}function fh(z){let p,y,f,u,k;return u=new kn({props:{code:`from transformers import XGLMTokenizer, FlaxXGLMModel

tokenizer = XGLMTokenizer.from_pretrained("facebook/xglm-564M")
model = FlaxXGLMModel.from_pretrained("facebook/xglm-564M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XGLMTokenizer, FlaxXGLMModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XGLMTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxXGLMModel.from_pretrained(<span class="hljs-string">&quot;facebook/xglm-564M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),y=r("Example:"),f=d(),b(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);y=i(m,"Example:"),m.forEach(t),f=c(l),T(u.$$.fragment,l)},m(l,m){g(l,p,m),e(p,y),g(l,f,m),M(u,l,m),k=!0},p:_n,i(l){k||(w(u.$$.fragment,l),k=!0)},o(l){L(u.$$.fragment,l),k=!1},d(l){l&&t(p),l&&t(f),$(u,l)}}}function gh(z){let p,y,f,u,k;return{c(){p=n("p"),y=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=s(l,"P",{});var m=a(p);y=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(m,"CODE",{});var x=a(f);u=i(x,"Module"),x.forEach(t),k=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){g(l,p,m),e(p,y),e(p,f),e(f,u),e(p,k)},d(l){l&&t(p)}}}function _h(z){let p,y,f,u,k;return u=new kn({props:{code:`from transformers import XGLMTokenizer, FlaxXGLMForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){p=n("p"),y=r("Example:"),f=d(),b(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);y=i(m,"Example:"),m.forEach(t),f=c(l),T(u.$$.fragment,l)},m(l,m){g(l,p,m),e(p,y),g(l,f,m),M(u,l,m),k=!0},p:_n,i(l){k||(w(u.$$.fragment,l),k=!0)},o(l){L(u.$$.fragment,l),k=!1},d(l){l&&t(p),l&&t(f),$(u,l)}}}function kh(z){let p,y,f,u,k,l,m,x,Ge,ce,X,ee,B,te,Ee,R,qe,ve,S,V,oe,fe,q,C,pe,ne,ye,he,H,Ce,be,G,Pe,j,Ae,je,O,Oe,De,W,J,A,ge,v,F,se,Qe,Be,E,_e,Ye,ae,K,U,et,tt,D,ot,nt,Ne,re,er,vn,tr,or,yn,nr,sr,ar,vt,la,st,yt,Qn,so,rr,Yn,ir,da,N,ao,lr,Ie,dr,bn,cr,pr,Tn,hr,ur,ro,mr,fr,gr,io,_r,Mn,kr,vr,yr,Re,lo,br,es,Tr,Mr,co,wn,wr,ts,Lr,$r,Ln,xr,os,zr,Xr,bt,po,Fr,ho,Gr,ns,Er,qr,Cr,Tt,uo,Pr,ss,Ar,jr,$n,mo,ca,at,Mt,as,fo,Or,rs,Dr,pa,ie,go,Nr,ke,Ir,is,Sr,Wr,xn,Ur,Br,zn,Rr,Vr,_o,Hr,Jr,Kr,ko,Zr,Xn,Qr,Yr,ei,Ve,vo,ti,ls,oi,ni,yo,Fn,si,ds,ai,ri,Gn,ii,cs,li,di,wt,bo,ci,ps,pi,ha,rt,Lt,hs,To,hi,us,ui,ua,le,Mo,mi,wo,fi,En,gi,_i,ki,Lo,vi,$o,yi,bi,Ti,$t,Mi,ms,wi,Li,fs,$i,xi,Te,xo,zi,it,Xi,qn,Fi,Gi,gs,Ei,qi,Ci,xt,Pi,zt,ma,lt,Xt,_s,zo,Ai,ks,ji,fa,de,Xo,Oi,vs,Di,Ni,Fo,Ii,Cn,Si,Wi,Ui,Go,Bi,Eo,Ri,Vi,Hi,Me,qo,Ji,dt,Ki,Pn,Zi,Qi,ys,Yi,el,tl,Ft,ol,Gt,ga,ct,Et,bs,Co,nl,Ts,sl,_a,Z,Po,al,Ao,rl,An,il,ll,dl,jo,cl,Oo,pl,hl,ul,qt,ml,Ct,fl,Ms,gl,_l,ws,kl,vl,we,Do,yl,pt,bl,jn,Tl,Ml,Ls,wl,Ll,$l,Pt,xl,At,ka,ht,jt,$s,No,zl,xs,Xl,va,Q,Io,Fl,zs,Gl,El,So,ql,On,Cl,Pl,Al,Wo,jl,Uo,Ol,Dl,Nl,Ot,Il,Le,Bo,Sl,ut,Wl,Dn,Ul,Bl,Xs,Rl,Vl,Hl,Dt,Jl,Nt,ya,mt,It,Fs,Ro,Kl,Gs,Zl,ba,Y,Vo,Ql,Ho,Yl,Nn,ed,td,od,Jo,nd,Ko,sd,ad,rd,Es,id,ld,Se,qs,Zo,dd,cd,Cs,Qo,pd,hd,Ps,Yo,ud,md,As,en,fd,gd,$e,tn,_d,ft,kd,js,vd,yd,Os,bd,Td,Md,St,wd,Wt,Ta,gt,Ut,Ds,on,Ld,Ns,$d,Ma,I,nn,xd,Is,zd,Xd,sn,Fd,In,Gd,Ed,qd,an,Cd,rn,Pd,Ad,jd,Ss,Od,Dd,We,Ws,ln,Nd,Id,Us,dn,Sd,Wd,Bs,cn,Ud,Bd,Rs,pn,Rd,Vd,xe,hn,Hd,_t,Jd,Vs,Kd,Zd,Hs,Qd,Yd,ec,Bt,tc,Rt,wa;return l=new Ue({}),te=new Ue({}),v=new Ue({}),_e=new P({props:{name:"class transformers.XGLMConfig",anchor:"transformers.XGLMConfig",parameters:[{name:"vocab_size",val:" = 256008"},{name:"max_position_embeddings",val:" = 2048"},{name:"d_model",val:" = 1024"},{name:"ffn_dim",val:" = 4096"},{name:"num_layers",val:" = 24"},{name:"attention_heads",val:" = 16"},{name:"activation_function",val:" = 'gelu'"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"layerdrop",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"scale_embedding",val:" = True"},{name:"use_cache",val:" = True"},{name:"decoder_start_token_id",val:" = 2"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XGLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256008) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/configuration_xglm.py#L29"}}),vt=new gn({props:{anchor:"transformers.XGLMConfig.example",$$slots:{default:[nh]},$$scope:{ctx:z}}}),so=new Ue({}),ao=new P({props:{name:"class transformers.XGLMTokenizer",anchor:"transformers.XGLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XGLMTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/tokenization_xglm.py#L43"}}),lo=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XGLMTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XGLMTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/tokenization_xglm.py#L189",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),po=new P({props:{name:"get_special_tokens_mask",anchor:"transformers.XGLMTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.XGLMTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XGLMTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/tokenization_xglm.py#L214",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),uo=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XGLMTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XGLMTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/tokenization_xglm.py#L242",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),mo=new P({props:{name:"save_vocabulary",anchor:"transformers.XGLMTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/tokenization_xglm.py#L298"}}),fo=new Ue({}),go=new P({props:{name:"class transformers.XGLMTokenizerFast",anchor:"transformers.XGLMTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XGLMTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/tokenization_xglm_fast.py#L49"}}),vo=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XGLMTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XGLMTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/tokenization_xglm_fast.py#L139",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),bo=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XGLMTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XGLMTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XGLMTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/tokenization_xglm_fast.py#L164",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),To=new Ue({}),Mo=new P({props:{name:"class transformers.XGLMModel",anchor:"transformers.XGLMModel",parameters:[{name:"config",val:": XGLMConfig"},{name:"embed_tokens",val:": typing.Optional[torch.nn.modules.sparse.Embedding] = None"}],parametersDescription:[{anchor:"transformers.XGLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.
config &#x2014; XGLMConfig`,name:"config"},{anchor:"transformers.XGLMModel.embed_tokens",description:"<strong>embed_tokens</strong> (nn.Embedding) &#x2014; output embedding",name:"embed_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/modeling_xglm.py#L531"}}),xo=new P({props:{name:"forward",anchor:"transformers.XGLMModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XGLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMTokenizer">XGLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),xt=new no({props:{$$slots:{default:[sh]},$$scope:{ctx:z}}}),zt=new gn({props:{anchor:"transformers.XGLMModel.forward.example",$$slots:{default:[ah]},$$scope:{ctx:z}}}),zo=new Ue({}),Xo=new P({props:{name:"class transformers.XGLMForCausalLM",anchor:"transformers.XGLMForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XGLMForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/modeling_xglm.py#L820"}}),qo=new P({props:{name:"forward",anchor:"transformers.XGLMForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XGLMForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMTokenizer">XGLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Ft=new no({props:{$$slots:{default:[rh]},$$scope:{ctx:z}}}),Gt=new gn({props:{anchor:"transformers.XGLMForCausalLM.forward.example",$$slots:{default:[ih]},$$scope:{ctx:z}}}),Co=new Ue({}),Po=new P({props:{name:"class transformers.TFXGLMModel",anchor:"transformers.TFXGLMModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXGLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.
config &#x2014; XGLMConfig
embed_tokens &#x2014; [TFSharedEmbeddings]: output embedding`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/modeling_tf_xglm.py#L772"}}),qt=new no({props:{$$slots:{default:[lh]},$$scope:{ctx:z}}}),Do=new P({props:{name:"call",anchor:"transformers.TFXGLMModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:": typing.Any"}],parametersDescription:[{anchor:"transformers.TFXGLMModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMTokenizer">XGLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXGLMModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/modeling_tf_xglm.py#L788",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Pt=new no({props:{$$slots:{default:[dh]},$$scope:{ctx:z}}}),At=new gn({props:{anchor:"transformers.TFXGLMModel.call.example",$$slots:{default:[ch]},$$scope:{ctx:z}}}),No=new Ue({}),Io=new P({props:{name:"class transformers.TFXGLMForCausalLM",anchor:"transformers.TFXGLMForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXGLMForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/modeling_tf_xglm.py#L858"}}),Ot=new no({props:{$$slots:{default:[ph]},$$scope:{ctx:z}}}),Bo=new P({props:{name:"call",anchor:"transformers.TFXGLMForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:": typing.Any"}],parametersDescription:[{anchor:"transformers.TFXGLMForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMTokenizer">XGLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXGLMForCausalLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXGLMForCausalLM.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/modeling_tf_xglm.py#L904",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code>: A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Dt=new no({props:{$$slots:{default:[hh]},$$scope:{ctx:z}}}),Nt=new gn({props:{anchor:"transformers.TFXGLMForCausalLM.call.example",$$slots:{default:[uh]},$$scope:{ctx:z}}}),Ro=new Ue({}),Vo=new P({props:{name:"class transformers.FlaxXGLMModel",anchor:"transformers.FlaxXGLMModel",parameters:[{name:"config",val:": XGLMConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXGLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxXGLMModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/modeling_flax_xglm.py#L703"}}),tn=new P({props:{name:"__call__",anchor:"transformers.FlaxXGLMModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxXGLMModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMTokenizer">~XGLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),St=new no({props:{$$slots:{default:[mh]},$$scope:{ctx:z}}}),Wt=new gn({props:{anchor:"transformers.FlaxXGLMModel.__call__.example",$$slots:{default:[fh]},$$scope:{ctx:z}}}),on=new Ue({}),nn=new P({props:{name:"class transformers.FlaxXGLMForCausalLM",anchor:"transformers.FlaxXGLMForCausalLM",parameters:[{name:"config",val:": XGLMConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXGLMForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMConfig">XGLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxXGLMForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xglm/modeling_flax_xglm.py#L782"}}),hn=new P({props:{name:"__call__",anchor:"transformers.FlaxXGLMForCausalLM.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxXGLMForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xglm#transformers.XGLMTokenizer">~XGLMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Bt=new no({props:{$$slots:{default:[gh]},$$scope:{ctx:z}}}),Rt=new gn({props:{anchor:"transformers.FlaxXGLMForCausalLM.__call__.example",$$slots:{default:[_h]},$$scope:{ctx:z}}}),{c(){p=n("meta"),y=d(),f=n("h1"),u=n("a"),k=n("span"),b(l.$$.fragment),m=d(),x=n("span"),Ge=r("XGLM"),ce=d(),X=n("h2"),ee=n("a"),B=n("span"),b(te.$$.fragment),Ee=d(),R=n("span"),qe=r("Overview"),ve=d(),S=n("p"),V=r("The XGLM model was proposed in "),oe=n("a"),fe=r("Few-shot Learning with Multilingual Language Models"),q=r(`
by Xi Victoria Lin, Todor Mihaylov, Mikel Artetxe, Tianlu Wang, Shuohui Chen, Daniel Simig, Myle Ott, Naman Goyal,
Shruti Bhosale, Jingfei Du, Ramakanth Pasunuru, Sam Shleifer, Punit Singh Koura, Vishrav Chaudhary, Brian O\u2019Horo,
Jeff Wang, Luke Zettlemoyer, Zornitsa Kozareva, Mona Diab, Veselin Stoyanov, Xian Li.`),C=d(),pe=n("p"),ne=r("The abstract from the paper is the following:"),ye=d(),he=n("p"),H=n("em"),Ce=r(`Large-scale autoregressive language models such as GPT-3 are few-shot learners that can perform a wide range of language
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
in social value tasks such as hate speech detection in five languages and find it has limitations similar to comparable sized GPT-3 models.`),be=d(),G=n("p"),Pe=r("This model was contributed by "),j=n("a"),Ae=r("Suraj"),je=r(". The original code can be found "),O=n("a"),Oe=r("here"),De=r("."),W=d(),J=n("h2"),A=n("a"),ge=n("span"),b(v.$$.fragment),F=d(),se=n("span"),Qe=r("XGLMConfig"),Be=d(),E=n("div"),b(_e.$$.fragment),Ye=d(),ae=n("p"),K=r("This is the configuration class to store the configuration of a "),U=n("a"),et=r("XGLMModel"),tt=r(`. It is used to instantiate an XGLM
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the XGLM
`),D=n("a"),ot=r("facebook/xglm-564M"),nt=r(" architecture."),Ne=d(),re=n("p"),er=r("Configuration objects inherit from "),vn=n("a"),tr=r("PretrainedConfig"),or=r(` and can be used to control the model outputs. Read the
documentation from `),yn=n("a"),nr=r("PretrainedConfig"),sr=r(" for more information."),ar=d(),b(vt.$$.fragment),la=d(),st=n("h2"),yt=n("a"),Qn=n("span"),b(so.$$.fragment),rr=d(),Yn=n("span"),ir=r("XGLMTokenizer"),da=d(),N=n("div"),b(ao.$$.fragment),lr=d(),Ie=n("p"),dr=r("Adapted from "),bn=n("a"),cr=r("RobertaTokenizer"),pr=r(" and "),Tn=n("a"),hr=r("XLNetTokenizer"),ur=r(`. Based on
`),ro=n("a"),mr=r("SentencePiece"),fr=r("."),gr=d(),io=n("p"),_r=r("This tokenizer inherits from "),Mn=n("a"),kr=r("PreTrainedTokenizer"),vr=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),yr=d(),Re=n("div"),b(lo.$$.fragment),br=d(),es=n("p"),Tr=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),Mr=d(),co=n("ul"),wn=n("li"),wr=r("single sequence: "),ts=n("code"),Lr=r("<s> X </s>"),$r=d(),Ln=n("li"),xr=r("pair of sequences: "),os=n("code"),zr=r("<s> A </s></s> B </s>"),Xr=d(),bt=n("div"),b(po.$$.fragment),Fr=d(),ho=n("p"),Gr=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ns=n("code"),Er=r("prepare_for_model"),qr=r(" method."),Cr=d(),Tt=n("div"),b(uo.$$.fragment),Pr=d(),ss=n("p"),Ar=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),jr=d(),$n=n("div"),b(mo.$$.fragment),ca=d(),at=n("h2"),Mt=n("a"),as=n("span"),b(fo.$$.fragment),Or=d(),rs=n("span"),Dr=r("XGLMTokenizerFast"),pa=d(),ie=n("div"),b(go.$$.fragment),Nr=d(),ke=n("p"),Ir=r("Construct a \u201Cfast\u201D XGLM tokenizer (backed by HuggingFace\u2019s "),is=n("em"),Sr=r("tokenizers"),Wr=r(" library). Adapted from "),xn=n("a"),Ur=r("RobertaTokenizer"),Br=r(`
and `),zn=n("a"),Rr=r("XLNetTokenizer"),Vr=r(`. Based on
`),_o=n("a"),Hr=r("BPE"),Jr=r("."),Kr=d(),ko=n("p"),Zr=r("This tokenizer inherits from "),Xn=n("a"),Qr=r("PreTrainedTokenizerFast"),Yr=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ei=d(),Ve=n("div"),b(vo.$$.fragment),ti=d(),ls=n("p"),oi=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),ni=d(),yo=n("ul"),Fn=n("li"),si=r("single sequence: "),ds=n("code"),ai=r("<s> X </s>"),ri=d(),Gn=n("li"),ii=r("pair of sequences: "),cs=n("code"),li=r("<s> A </s></s> B </s>"),di=d(),wt=n("div"),b(bo.$$.fragment),ci=d(),ps=n("p"),pi=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),ha=d(),rt=n("h2"),Lt=n("a"),hs=n("span"),b(To.$$.fragment),hi=d(),us=n("span"),ui=r("XGLMModel"),ua=d(),le=n("div"),b(Mo.$$.fragment),mi=d(),wo=n("p"),fi=r(`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),En=n("a"),gi=r("PreTrainedModel"),_i=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ki=d(),Lo=n("p"),vi=r("This model is also a PyTorch "),$o=n("a"),yi=r("torch.nn.Module"),bi=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ti=d(),$t=n("p"),Mi=r("Transformer decoder consisting of "),ms=n("em"),wi=r("config.num_layers"),Li=r(" layers. Each layer is a "),fs=n("code"),$i=r("XGLMDecoderLayer"),xi=d(),Te=n("div"),b(xo.$$.fragment),zi=d(),it=n("p"),Xi=r("The "),qn=n("a"),Fi=r("XGLMModel"),Gi=r(" forward method, overrides the "),gs=n("code"),Ei=r("__call__"),qi=r(" special method."),Ci=d(),b(xt.$$.fragment),Pi=d(),b(zt.$$.fragment),ma=d(),lt=n("h2"),Xt=n("a"),_s=n("span"),b(zo.$$.fragment),Ai=d(),ks=n("span"),ji=r("XGLMForCausalLM"),fa=d(),de=n("div"),b(Xo.$$.fragment),Oi=d(),vs=n("p"),Di=r(`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Ni=d(),Fo=n("p"),Ii=r("This model inherits from "),Cn=n("a"),Si=r("PreTrainedModel"),Wi=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ui=d(),Go=n("p"),Bi=r("This model is also a PyTorch "),Eo=n("a"),Ri=r("torch.nn.Module"),Vi=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hi=d(),Me=n("div"),b(qo.$$.fragment),Ji=d(),dt=n("p"),Ki=r("The "),Pn=n("a"),Zi=r("XGLMForCausalLM"),Qi=r(" forward method, overrides the "),ys=n("code"),Yi=r("__call__"),el=r(" special method."),tl=d(),b(Ft.$$.fragment),ol=d(),b(Gt.$$.fragment),ga=d(),ct=n("h2"),Et=n("a"),bs=n("span"),b(Co.$$.fragment),nl=d(),Ts=n("span"),sl=r("TFXGLMModel"),_a=d(),Z=n("div"),b(Po.$$.fragment),al=d(),Ao=n("p"),rl=r(`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),An=n("a"),il=r("TFPreTrainedModel"),ll=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dl=d(),jo=n("p"),cl=r("This model is also a "),Oo=n("a"),pl=r("tf.keras.Model"),hl=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ul=d(),b(qt.$$.fragment),ml=d(),Ct=n("p"),fl=r("Transformer decoder consisting of "),Ms=n("em"),gl=r("config.num_layers"),_l=r(" layers. Each layer is a "),ws=n("code"),kl=r("TFXGLMDecoderLayer"),vl=d(),we=n("div"),b(Do.$$.fragment),yl=d(),pt=n("p"),bl=r("The "),jn=n("a"),Tl=r("TFXGLMModel"),Ml=r(" forward method, overrides the "),Ls=n("code"),wl=r("__call__"),Ll=r(" special method."),$l=d(),b(Pt.$$.fragment),xl=d(),b(At.$$.fragment),ka=d(),ht=n("h2"),jt=n("a"),$s=n("span"),b(No.$$.fragment),zl=d(),xs=n("span"),Xl=r("TFXGLMForCausalLM"),va=d(),Q=n("div"),b(Io.$$.fragment),Fl=d(),zs=n("p"),Gl=r(`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),El=d(),So=n("p"),ql=r("This model inherits from "),On=n("a"),Cl=r("TFPreTrainedModel"),Pl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Al=d(),Wo=n("p"),jl=r("This model is also a "),Uo=n("a"),Ol=r("tf.keras.Model"),Dl=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nl=d(),b(Ot.$$.fragment),Il=d(),Le=n("div"),b(Bo.$$.fragment),Sl=d(),ut=n("p"),Wl=r("The "),Dn=n("a"),Ul=r("TFXGLMForCausalLM"),Bl=r(" forward method, overrides the "),Xs=n("code"),Rl=r("__call__"),Vl=r(" special method."),Hl=d(),b(Dt.$$.fragment),Jl=d(),b(Nt.$$.fragment),ya=d(),mt=n("h2"),It=n("a"),Fs=n("span"),b(Ro.$$.fragment),Kl=d(),Gs=n("span"),Zl=r("FlaxXGLMModel"),ba=d(),Y=n("div"),b(Vo.$$.fragment),Ql=d(),Ho=n("p"),Yl=r(`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=n("a"),ed=r("FlaxPreTrainedModel"),td=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),od=d(),Jo=n("p"),nd=r(`This model is also a Flax Linen
`),Ko=n("a"),sd=r("flax.nn.Module"),ad=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),rd=d(),Es=n("p"),id=r("Finally, this model supports inherent JAX features such as:"),ld=d(),Se=n("ul"),qs=n("li"),Zo=n("a"),dd=r("Just-In-Time (JIT) compilation"),cd=d(),Cs=n("li"),Qo=n("a"),pd=r("Automatic Differentiation"),hd=d(),Ps=n("li"),Yo=n("a"),ud=r("Vectorization"),md=d(),As=n("li"),en=n("a"),fd=r("Parallelization"),gd=d(),$e=n("div"),b(tn.$$.fragment),_d=d(),ft=n("p"),kd=r("The "),js=n("code"),vd=r("FlaxXGLMPreTrainedModel"),yd=r(" forward method, overrides the "),Os=n("code"),bd=r("__call__"),Td=r(" special method."),Md=d(),b(St.$$.fragment),wd=d(),b(Wt.$$.fragment),Ta=d(),gt=n("h2"),Ut=n("a"),Ds=n("span"),b(on.$$.fragment),Ld=d(),Ns=n("span"),$d=r("FlaxXGLMForCausalLM"),Ma=d(),I=n("div"),b(nn.$$.fragment),xd=d(),Is=n("p"),zd=r(`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Xd=d(),sn=n("p"),Fd=r("This model inherits from "),In=n("a"),Gd=r("FlaxPreTrainedModel"),Ed=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qd=d(),an=n("p"),Cd=r(`This model is also a Flax Linen
`),rn=n("a"),Pd=r("flax.nn.Module"),Ad=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),jd=d(),Ss=n("p"),Od=r("Finally, this model supports inherent JAX features such as:"),Dd=d(),We=n("ul"),Ws=n("li"),ln=n("a"),Nd=r("Just-In-Time (JIT) compilation"),Id=d(),Us=n("li"),dn=n("a"),Sd=r("Automatic Differentiation"),Wd=d(),Bs=n("li"),cn=n("a"),Ud=r("Vectorization"),Bd=d(),Rs=n("li"),pn=n("a"),Rd=r("Parallelization"),Vd=d(),xe=n("div"),b(hn.$$.fragment),Hd=d(),_t=n("p"),Jd=r("The "),Vs=n("code"),Kd=r("FlaxXGLMPreTrainedModel"),Zd=r(" forward method, overrides the "),Hs=n("code"),Qd=r("__call__"),Yd=r(" special method."),ec=d(),b(Bt.$$.fragment),tc=d(),b(Rt.$$.fragment),this.h()},l(o){const _=th('[data-svelte="svelte-1phssyn"]',document.head);p=s(_,"META",{name:!0,content:!0}),_.forEach(t),y=c(o),f=s(o,"H1",{class:!0});var un=a(f);u=s(un,"A",{id:!0,class:!0,href:!0});var Js=a(u);k=s(Js,"SPAN",{});var Ks=a(k);T(l.$$.fragment,Ks),Ks.forEach(t),Js.forEach(t),m=c(un),x=s(un,"SPAN",{});var Zs=a(x);Ge=i(Zs,"XGLM"),Zs.forEach(t),un.forEach(t),ce=c(o),X=s(o,"H2",{class:!0});var mn=a(X);ee=s(mn,"A",{id:!0,class:!0,href:!0});var Qs=a(ee);B=s(Qs,"SPAN",{});var Ys=a(B);T(te.$$.fragment,Ys),Ys.forEach(t),Qs.forEach(t),Ee=c(mn),R=s(mn,"SPAN",{});var ea=a(R);qe=i(ea,"Overview"),ea.forEach(t),mn.forEach(t),ve=c(o),S=s(o,"P",{});var fn=a(S);V=i(fn,"The XGLM model was proposed in "),oe=s(fn,"A",{href:!0,rel:!0});var ta=a(oe);fe=i(ta,"Few-shot Learning with Multilingual Language Models"),ta.forEach(t),q=i(fn,`
by Xi Victoria Lin, Todor Mihaylov, Mikel Artetxe, Tianlu Wang, Shuohui Chen, Daniel Simig, Myle Ott, Naman Goyal,
Shruti Bhosale, Jingfei Du, Ramakanth Pasunuru, Sam Shleifer, Punit Singh Koura, Vishrav Chaudhary, Brian O\u2019Horo,
Jeff Wang, Luke Zettlemoyer, Zornitsa Kozareva, Mona Diab, Veselin Stoyanov, Xian Li.`),fn.forEach(t),C=c(o),pe=s(o,"P",{});var oa=a(pe);ne=i(oa,"The abstract from the paper is the following:"),oa.forEach(t),ye=c(o),he=s(o,"P",{});var na=a(he);H=s(na,"EM",{});var sa=a(H);Ce=i(sa,`Large-scale autoregressive language models such as GPT-3 are few-shot learners that can perform a wide range of language
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
in social value tasks such as hate speech detection in five languages and find it has limitations similar to comparable sized GPT-3 models.`),sa.forEach(t),na.forEach(t),be=c(o),G=s(o,"P",{});var kt=a(G);Pe=i(kt,"This model was contributed by "),j=s(kt,"A",{href:!0,rel:!0});var aa=a(j);Ae=i(aa,"Suraj"),aa.forEach(t),je=i(kt,". The original code can be found "),O=s(kt,"A",{href:!0,rel:!0});var rc=a(O);Oe=i(rc,"here"),rc.forEach(t),De=i(kt,"."),kt.forEach(t),W=c(o),J=s(o,"H2",{class:!0});var La=a(J);A=s(La,"A",{id:!0,class:!0,href:!0});var ic=a(A);ge=s(ic,"SPAN",{});var lc=a(ge);T(v.$$.fragment,lc),lc.forEach(t),ic.forEach(t),F=c(La),se=s(La,"SPAN",{});var dc=a(se);Qe=i(dc,"XGLMConfig"),dc.forEach(t),La.forEach(t),Be=c(o),E=s(o,"DIV",{class:!0});var Vt=a(E);T(_e.$$.fragment,Vt),Ye=c(Vt),ae=s(Vt,"P",{});var Sn=a(ae);K=i(Sn,"This is the configuration class to store the configuration of a "),U=s(Sn,"A",{href:!0});var cc=a(U);et=i(cc,"XGLMModel"),cc.forEach(t),tt=i(Sn,`. It is used to instantiate an XGLM
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the XGLM
`),D=s(Sn,"A",{href:!0,rel:!0});var pc=a(D);ot=i(pc,"facebook/xglm-564M"),pc.forEach(t),nt=i(Sn," architecture."),Sn.forEach(t),Ne=c(Vt),re=s(Vt,"P",{});var Wn=a(re);er=i(Wn,"Configuration objects inherit from "),vn=s(Wn,"A",{href:!0});var hc=a(vn);tr=i(hc,"PretrainedConfig"),hc.forEach(t),or=i(Wn,` and can be used to control the model outputs. Read the
documentation from `),yn=s(Wn,"A",{href:!0});var uc=a(yn);nr=i(uc,"PretrainedConfig"),uc.forEach(t),sr=i(Wn," for more information."),Wn.forEach(t),ar=c(Vt),T(vt.$$.fragment,Vt),Vt.forEach(t),la=c(o),st=s(o,"H2",{class:!0});var $a=a(st);yt=s($a,"A",{id:!0,class:!0,href:!0});var mc=a(yt);Qn=s(mc,"SPAN",{});var fc=a(Qn);T(so.$$.fragment,fc),fc.forEach(t),mc.forEach(t),rr=c($a),Yn=s($a,"SPAN",{});var gc=a(Yn);ir=i(gc,"XGLMTokenizer"),gc.forEach(t),$a.forEach(t),da=c(o),N=s(o,"DIV",{class:!0});var ue=a(N);T(ao.$$.fragment,ue),lr=c(ue),Ie=s(ue,"P",{});var Ht=a(Ie);dr=i(Ht,"Adapted from "),bn=s(Ht,"A",{href:!0});var _c=a(bn);cr=i(_c,"RobertaTokenizer"),_c.forEach(t),pr=i(Ht," and "),Tn=s(Ht,"A",{href:!0});var kc=a(Tn);hr=i(kc,"XLNetTokenizer"),kc.forEach(t),ur=i(Ht,`. Based on
`),ro=s(Ht,"A",{href:!0,rel:!0});var vc=a(ro);mr=i(vc,"SentencePiece"),vc.forEach(t),fr=i(Ht,"."),Ht.forEach(t),gr=c(ue),io=s(ue,"P",{});var xa=a(io);_r=i(xa,"This tokenizer inherits from "),Mn=s(xa,"A",{href:!0});var yc=a(Mn);kr=i(yc,"PreTrainedTokenizer"),yc.forEach(t),vr=i(xa,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),xa.forEach(t),yr=c(ue),Re=s(ue,"DIV",{class:!0});var Un=a(Re);T(lo.$$.fragment,Un),br=c(Un),es=s(Un,"P",{});var bc=a(es);Tr=i(bc,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),bc.forEach(t),Mr=c(Un),co=s(Un,"UL",{});var za=a(co);wn=s(za,"LI",{});var oc=a(wn);wr=i(oc,"single sequence: "),ts=s(oc,"CODE",{});var Tc=a(ts);Lr=i(Tc,"<s> X </s>"),Tc.forEach(t),oc.forEach(t),$r=c(za),Ln=s(za,"LI",{});var nc=a(Ln);xr=i(nc,"pair of sequences: "),os=s(nc,"CODE",{});var Mc=a(os);zr=i(Mc,"<s> A </s></s> B </s>"),Mc.forEach(t),nc.forEach(t),za.forEach(t),Un.forEach(t),Xr=c(ue),bt=s(ue,"DIV",{class:!0});var Xa=a(bt);T(po.$$.fragment,Xa),Fr=c(Xa),ho=s(Xa,"P",{});var Fa=a(ho);Gr=i(Fa,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ns=s(Fa,"CODE",{});var wc=a(ns);Er=i(wc,"prepare_for_model"),wc.forEach(t),qr=i(Fa," method."),Fa.forEach(t),Xa.forEach(t),Cr=c(ue),Tt=s(ue,"DIV",{class:!0});var Ga=a(Tt);T(uo.$$.fragment,Ga),Pr=c(Ga),ss=s(Ga,"P",{});var Lc=a(ss);Ar=i(Lc,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),Lc.forEach(t),Ga.forEach(t),jr=c(ue),$n=s(ue,"DIV",{class:!0});var $c=a($n);T(mo.$$.fragment,$c),$c.forEach(t),ue.forEach(t),ca=c(o),at=s(o,"H2",{class:!0});var Ea=a(at);Mt=s(Ea,"A",{id:!0,class:!0,href:!0});var xc=a(Mt);as=s(xc,"SPAN",{});var zc=a(as);T(fo.$$.fragment,zc),zc.forEach(t),xc.forEach(t),Or=c(Ea),rs=s(Ea,"SPAN",{});var Xc=a(rs);Dr=i(Xc,"XGLMTokenizerFast"),Xc.forEach(t),Ea.forEach(t),pa=c(o),ie=s(o,"DIV",{class:!0});var He=a(ie);T(go.$$.fragment,He),Nr=c(He),ke=s(He,"P",{});var Je=a(ke);Ir=i(Je,"Construct a \u201Cfast\u201D XGLM tokenizer (backed by HuggingFace\u2019s "),is=s(Je,"EM",{});var Fc=a(is);Sr=i(Fc,"tokenizers"),Fc.forEach(t),Wr=i(Je," library). Adapted from "),xn=s(Je,"A",{href:!0});var Gc=a(xn);Ur=i(Gc,"RobertaTokenizer"),Gc.forEach(t),Br=i(Je,`
and `),zn=s(Je,"A",{href:!0});var Ec=a(zn);Rr=i(Ec,"XLNetTokenizer"),Ec.forEach(t),Vr=i(Je,`. Based on
`),_o=s(Je,"A",{href:!0,rel:!0});var qc=a(_o);Hr=i(qc,"BPE"),qc.forEach(t),Jr=i(Je,"."),Je.forEach(t),Kr=c(He),ko=s(He,"P",{});var qa=a(ko);Zr=i(qa,"This tokenizer inherits from "),Xn=s(qa,"A",{href:!0});var Cc=a(Xn);Qr=i(Cc,"PreTrainedTokenizerFast"),Cc.forEach(t),Yr=i(qa,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),qa.forEach(t),ei=c(He),Ve=s(He,"DIV",{class:!0});var Bn=a(Ve);T(vo.$$.fragment,Bn),ti=c(Bn),ls=s(Bn,"P",{});var Pc=a(ls);oi=i(Pc,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),Pc.forEach(t),ni=c(Bn),yo=s(Bn,"UL",{});var Ca=a(yo);Fn=s(Ca,"LI",{});var sc=a(Fn);si=i(sc,"single sequence: "),ds=s(sc,"CODE",{});var Ac=a(ds);ai=i(Ac,"<s> X </s>"),Ac.forEach(t),sc.forEach(t),ri=c(Ca),Gn=s(Ca,"LI",{});var ac=a(Gn);ii=i(ac,"pair of sequences: "),cs=s(ac,"CODE",{});var jc=a(cs);li=i(jc,"<s> A </s></s> B </s>"),jc.forEach(t),ac.forEach(t),Ca.forEach(t),Bn.forEach(t),di=c(He),wt=s(He,"DIV",{class:!0});var Pa=a(wt);T(bo.$$.fragment,Pa),ci=c(Pa),ps=s(Pa,"P",{});var Oc=a(ps);pi=i(Oc,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),Oc.forEach(t),Pa.forEach(t),He.forEach(t),ha=c(o),rt=s(o,"H2",{class:!0});var Aa=a(rt);Lt=s(Aa,"A",{id:!0,class:!0,href:!0});var Dc=a(Lt);hs=s(Dc,"SPAN",{});var Nc=a(hs);T(To.$$.fragment,Nc),Nc.forEach(t),Dc.forEach(t),hi=c(Aa),us=s(Aa,"SPAN",{});var Ic=a(us);ui=i(Ic,"XGLMModel"),Ic.forEach(t),Aa.forEach(t),ua=c(o),le=s(o,"DIV",{class:!0});var Ke=a(le);T(Mo.$$.fragment,Ke),mi=c(Ke),wo=s(Ke,"P",{});var ja=a(wo);fi=i(ja,`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),En=s(ja,"A",{href:!0});var Sc=a(En);gi=i(Sc,"PreTrainedModel"),Sc.forEach(t),_i=i(ja,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ja.forEach(t),ki=c(Ke),Lo=s(Ke,"P",{});var Oa=a(Lo);vi=i(Oa,"This model is also a PyTorch "),$o=s(Oa,"A",{href:!0,rel:!0});var Wc=a($o);yi=i(Wc,"torch.nn.Module"),Wc.forEach(t),bi=i(Oa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Oa.forEach(t),Ti=c(Ke),$t=s(Ke,"P",{});var ra=a($t);Mi=i(ra,"Transformer decoder consisting of "),ms=s(ra,"EM",{});var Uc=a(ms);wi=i(Uc,"config.num_layers"),Uc.forEach(t),Li=i(ra," layers. Each layer is a "),fs=s(ra,"CODE",{});var Bc=a(fs);$i=i(Bc,"XGLMDecoderLayer"),Bc.forEach(t),ra.forEach(t),xi=c(Ke),Te=s(Ke,"DIV",{class:!0});var Jt=a(Te);T(xo.$$.fragment,Jt),zi=c(Jt),it=s(Jt,"P",{});var Rn=a(it);Xi=i(Rn,"The "),qn=s(Rn,"A",{href:!0});var Rc=a(qn);Fi=i(Rc,"XGLMModel"),Rc.forEach(t),Gi=i(Rn," forward method, overrides the "),gs=s(Rn,"CODE",{});var Vc=a(gs);Ei=i(Vc,"__call__"),Vc.forEach(t),qi=i(Rn," special method."),Rn.forEach(t),Ci=c(Jt),T(xt.$$.fragment,Jt),Pi=c(Jt),T(zt.$$.fragment,Jt),Jt.forEach(t),Ke.forEach(t),ma=c(o),lt=s(o,"H2",{class:!0});var Da=a(lt);Xt=s(Da,"A",{id:!0,class:!0,href:!0});var Hc=a(Xt);_s=s(Hc,"SPAN",{});var Jc=a(_s);T(zo.$$.fragment,Jc),Jc.forEach(t),Hc.forEach(t),Ai=c(Da),ks=s(Da,"SPAN",{});var Kc=a(ks);ji=i(Kc,"XGLMForCausalLM"),Kc.forEach(t),Da.forEach(t),fa=c(o),de=s(o,"DIV",{class:!0});var Ze=a(de);T(Xo.$$.fragment,Ze),Oi=c(Ze),vs=s(Ze,"P",{});var Zc=a(vs);Di=i(Zc,`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Zc.forEach(t),Ni=c(Ze),Fo=s(Ze,"P",{});var Na=a(Fo);Ii=i(Na,"This model inherits from "),Cn=s(Na,"A",{href:!0});var Qc=a(Cn);Si=i(Qc,"PreTrainedModel"),Qc.forEach(t),Wi=i(Na,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Na.forEach(t),Ui=c(Ze),Go=s(Ze,"P",{});var Ia=a(Go);Bi=i(Ia,"This model is also a PyTorch "),Eo=s(Ia,"A",{href:!0,rel:!0});var Yc=a(Eo);Ri=i(Yc,"torch.nn.Module"),Yc.forEach(t),Vi=i(Ia,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ia.forEach(t),Hi=c(Ze),Me=s(Ze,"DIV",{class:!0});var Kt=a(Me);T(qo.$$.fragment,Kt),Ji=c(Kt),dt=s(Kt,"P",{});var Vn=a(dt);Ki=i(Vn,"The "),Pn=s(Vn,"A",{href:!0});var ep=a(Pn);Zi=i(ep,"XGLMForCausalLM"),ep.forEach(t),Qi=i(Vn," forward method, overrides the "),ys=s(Vn,"CODE",{});var tp=a(ys);Yi=i(tp,"__call__"),tp.forEach(t),el=i(Vn," special method."),Vn.forEach(t),tl=c(Kt),T(Ft.$$.fragment,Kt),ol=c(Kt),T(Gt.$$.fragment,Kt),Kt.forEach(t),Ze.forEach(t),ga=c(o),ct=s(o,"H2",{class:!0});var Sa=a(ct);Et=s(Sa,"A",{id:!0,class:!0,href:!0});var op=a(Et);bs=s(op,"SPAN",{});var np=a(bs);T(Co.$$.fragment,np),np.forEach(t),op.forEach(t),nl=c(Sa),Ts=s(Sa,"SPAN",{});var sp=a(Ts);sl=i(sp,"TFXGLMModel"),sp.forEach(t),Sa.forEach(t),_a=c(o),Z=s(o,"DIV",{class:!0});var ze=a(Z);T(Po.$$.fragment,ze),al=c(ze),Ao=s(ze,"P",{});var Wa=a(Ao);rl=i(Wa,`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),An=s(Wa,"A",{href:!0});var ap=a(An);il=i(ap,"TFPreTrainedModel"),ap.forEach(t),ll=i(Wa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wa.forEach(t),dl=c(ze),jo=s(ze,"P",{});var Ua=a(jo);cl=i(Ua,"This model is also a "),Oo=s(Ua,"A",{href:!0,rel:!0});var rp=a(Oo);pl=i(rp,"tf.keras.Model"),rp.forEach(t),hl=i(Ua,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ua.forEach(t),ul=c(ze),T(qt.$$.fragment,ze),ml=c(ze),Ct=s(ze,"P",{});var ia=a(Ct);fl=i(ia,"Transformer decoder consisting of "),Ms=s(ia,"EM",{});var ip=a(Ms);gl=i(ip,"config.num_layers"),ip.forEach(t),_l=i(ia," layers. Each layer is a "),ws=s(ia,"CODE",{});var lp=a(ws);kl=i(lp,"TFXGLMDecoderLayer"),lp.forEach(t),ia.forEach(t),vl=c(ze),we=s(ze,"DIV",{class:!0});var Zt=a(we);T(Do.$$.fragment,Zt),yl=c(Zt),pt=s(Zt,"P",{});var Hn=a(pt);bl=i(Hn,"The "),jn=s(Hn,"A",{href:!0});var dp=a(jn);Tl=i(dp,"TFXGLMModel"),dp.forEach(t),Ml=i(Hn," forward method, overrides the "),Ls=s(Hn,"CODE",{});var cp=a(Ls);wl=i(cp,"__call__"),cp.forEach(t),Ll=i(Hn," special method."),Hn.forEach(t),$l=c(Zt),T(Pt.$$.fragment,Zt),xl=c(Zt),T(At.$$.fragment,Zt),Zt.forEach(t),ze.forEach(t),ka=c(o),ht=s(o,"H2",{class:!0});var Ba=a(ht);jt=s(Ba,"A",{id:!0,class:!0,href:!0});var pp=a(jt);$s=s(pp,"SPAN",{});var hp=a($s);T(No.$$.fragment,hp),hp.forEach(t),pp.forEach(t),zl=c(Ba),xs=s(Ba,"SPAN",{});var up=a(xs);Xl=i(up,"TFXGLMForCausalLM"),up.forEach(t),Ba.forEach(t),va=c(o),Q=s(o,"DIV",{class:!0});var Xe=a(Q);T(Io.$$.fragment,Xe),Fl=c(Xe),zs=s(Xe,"P",{});var mp=a(zs);Gl=i(mp,`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),mp.forEach(t),El=c(Xe),So=s(Xe,"P",{});var Ra=a(So);ql=i(Ra,"This model inherits from "),On=s(Ra,"A",{href:!0});var fp=a(On);Cl=i(fp,"TFPreTrainedModel"),fp.forEach(t),Pl=i(Ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ra.forEach(t),Al=c(Xe),Wo=s(Xe,"P",{});var Va=a(Wo);jl=i(Va,"This model is also a "),Uo=s(Va,"A",{href:!0,rel:!0});var gp=a(Uo);Ol=i(gp,"tf.keras.Model"),gp.forEach(t),Dl=i(Va,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Va.forEach(t),Nl=c(Xe),T(Ot.$$.fragment,Xe),Il=c(Xe),Le=s(Xe,"DIV",{class:!0});var Qt=a(Le);T(Bo.$$.fragment,Qt),Sl=c(Qt),ut=s(Qt,"P",{});var Jn=a(ut);Wl=i(Jn,"The "),Dn=s(Jn,"A",{href:!0});var _p=a(Dn);Ul=i(_p,"TFXGLMForCausalLM"),_p.forEach(t),Bl=i(Jn," forward method, overrides the "),Xs=s(Jn,"CODE",{});var kp=a(Xs);Rl=i(kp,"__call__"),kp.forEach(t),Vl=i(Jn," special method."),Jn.forEach(t),Hl=c(Qt),T(Dt.$$.fragment,Qt),Jl=c(Qt),T(Nt.$$.fragment,Qt),Qt.forEach(t),Xe.forEach(t),ya=c(o),mt=s(o,"H2",{class:!0});var Ha=a(mt);It=s(Ha,"A",{id:!0,class:!0,href:!0});var vp=a(It);Fs=s(vp,"SPAN",{});var yp=a(Fs);T(Ro.$$.fragment,yp),yp.forEach(t),vp.forEach(t),Kl=c(Ha),Gs=s(Ha,"SPAN",{});var bp=a(Gs);Zl=i(bp,"FlaxXGLMModel"),bp.forEach(t),Ha.forEach(t),ba=c(o),Y=s(o,"DIV",{class:!0});var Fe=a(Y);T(Vo.$$.fragment,Fe),Ql=c(Fe),Ho=s(Fe,"P",{});var Ja=a(Ho);Yl=i(Ja,`The bare XGLM Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=s(Ja,"A",{href:!0});var Tp=a(Nn);ed=i(Tp,"FlaxPreTrainedModel"),Tp.forEach(t),td=i(Ja,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ja.forEach(t),od=c(Fe),Jo=s(Fe,"P",{});var Ka=a(Jo);nd=i(Ka,`This model is also a Flax Linen
`),Ko=s(Ka,"A",{href:!0,rel:!0});var Mp=a(Ko);sd=i(Mp,"flax.nn.Module"),Mp.forEach(t),ad=i(Ka,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ka.forEach(t),rd=c(Fe),Es=s(Fe,"P",{});var wp=a(Es);id=i(wp,"Finally, this model supports inherent JAX features such as:"),wp.forEach(t),ld=c(Fe),Se=s(Fe,"UL",{});var Yt=a(Se);qs=s(Yt,"LI",{});var Lp=a(qs);Zo=s(Lp,"A",{href:!0,rel:!0});var $p=a(Zo);dd=i($p,"Just-In-Time (JIT) compilation"),$p.forEach(t),Lp.forEach(t),cd=c(Yt),Cs=s(Yt,"LI",{});var xp=a(Cs);Qo=s(xp,"A",{href:!0,rel:!0});var zp=a(Qo);pd=i(zp,"Automatic Differentiation"),zp.forEach(t),xp.forEach(t),hd=c(Yt),Ps=s(Yt,"LI",{});var Xp=a(Ps);Yo=s(Xp,"A",{href:!0,rel:!0});var Fp=a(Yo);ud=i(Fp,"Vectorization"),Fp.forEach(t),Xp.forEach(t),md=c(Yt),As=s(Yt,"LI",{});var Gp=a(As);en=s(Gp,"A",{href:!0,rel:!0});var Ep=a(en);fd=i(Ep,"Parallelization"),Ep.forEach(t),Gp.forEach(t),Yt.forEach(t),gd=c(Fe),$e=s(Fe,"DIV",{class:!0});var eo=a($e);T(tn.$$.fragment,eo),_d=c(eo),ft=s(eo,"P",{});var Kn=a(ft);kd=i(Kn,"The "),js=s(Kn,"CODE",{});var qp=a(js);vd=i(qp,"FlaxXGLMPreTrainedModel"),qp.forEach(t),yd=i(Kn," forward method, overrides the "),Os=s(Kn,"CODE",{});var Cp=a(Os);bd=i(Cp,"__call__"),Cp.forEach(t),Td=i(Kn," special method."),Kn.forEach(t),Md=c(eo),T(St.$$.fragment,eo),wd=c(eo),T(Wt.$$.fragment,eo),eo.forEach(t),Fe.forEach(t),Ta=c(o),gt=s(o,"H2",{class:!0});var Za=a(gt);Ut=s(Za,"A",{id:!0,class:!0,href:!0});var Pp=a(Ut);Ds=s(Pp,"SPAN",{});var Ap=a(Ds);T(on.$$.fragment,Ap),Ap.forEach(t),Pp.forEach(t),Ld=c(Za),Ns=s(Za,"SPAN",{});var jp=a(Ns);$d=i(jp,"FlaxXGLMForCausalLM"),jp.forEach(t),Za.forEach(t),Ma=c(o),I=s(o,"DIV",{class:!0});var me=a(I);T(nn.$$.fragment,me),xd=c(me),Is=s(me,"P",{});var Op=a(Is);zd=i(Op,`The XGLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Op.forEach(t),Xd=c(me),sn=s(me,"P",{});var Qa=a(sn);Fd=i(Qa,"This model inherits from "),In=s(Qa,"A",{href:!0});var Dp=a(In);Gd=i(Dp,"FlaxPreTrainedModel"),Dp.forEach(t),Ed=i(Qa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qa.forEach(t),qd=c(me),an=s(me,"P",{});var Ya=a(an);Cd=i(Ya,`This model is also a Flax Linen
`),rn=s(Ya,"A",{href:!0,rel:!0});var Np=a(rn);Pd=i(Np,"flax.nn.Module"),Np.forEach(t),Ad=i(Ya,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ya.forEach(t),jd=c(me),Ss=s(me,"P",{});var Ip=a(Ss);Od=i(Ip,"Finally, this model supports inherent JAX features such as:"),Ip.forEach(t),Dd=c(me),We=s(me,"UL",{});var to=a(We);Ws=s(to,"LI",{});var Sp=a(Ws);ln=s(Sp,"A",{href:!0,rel:!0});var Wp=a(ln);Nd=i(Wp,"Just-In-Time (JIT) compilation"),Wp.forEach(t),Sp.forEach(t),Id=c(to),Us=s(to,"LI",{});var Up=a(Us);dn=s(Up,"A",{href:!0,rel:!0});var Bp=a(dn);Sd=i(Bp,"Automatic Differentiation"),Bp.forEach(t),Up.forEach(t),Wd=c(to),Bs=s(to,"LI",{});var Rp=a(Bs);cn=s(Rp,"A",{href:!0,rel:!0});var Vp=a(cn);Ud=i(Vp,"Vectorization"),Vp.forEach(t),Rp.forEach(t),Bd=c(to),Rs=s(to,"LI",{});var Hp=a(Rs);pn=s(Hp,"A",{href:!0,rel:!0});var Jp=a(pn);Rd=i(Jp,"Parallelization"),Jp.forEach(t),Hp.forEach(t),to.forEach(t),Vd=c(me),xe=s(me,"DIV",{class:!0});var oo=a(xe);T(hn.$$.fragment,oo),Hd=c(oo),_t=s(oo,"P",{});var Zn=a(_t);Jd=i(Zn,"The "),Vs=s(Zn,"CODE",{});var Kp=a(Vs);Kd=i(Kp,"FlaxXGLMPreTrainedModel"),Kp.forEach(t),Zd=i(Zn," forward method, overrides the "),Hs=s(Zn,"CODE",{});var Zp=a(Hs);Qd=i(Zp,"__call__"),Zp.forEach(t),Yd=i(Zn," special method."),Zn.forEach(t),ec=c(oo),T(Bt.$$.fragment,oo),tc=c(oo),T(Rt.$$.fragment,oo),oo.forEach(t),me.forEach(t),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(vh)),h(u,"id","xglm"),h(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(u,"href","#xglm"),h(f,"class","relative group"),h(ee,"id","overview"),h(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ee,"href","#overview"),h(X,"class","relative group"),h(oe,"href","https://arxiv.org/abs/2112.10668"),h(oe,"rel","nofollow"),h(j,"href","https://huggingface.co/valhalla"),h(j,"rel","nofollow"),h(O,"href","https://github.com/pytorch/fairseq/tree/main/examples/xglm"),h(O,"rel","nofollow"),h(A,"id","transformers.XGLMConfig"),h(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(A,"href","#transformers.XGLMConfig"),h(J,"class","relative group"),h(U,"href","/docs/transformers/main/en/model_doc/xglm#transformers.XGLMModel"),h(D,"href","https://huggingface.co/facebook/xglm-564M"),h(D,"rel","nofollow"),h(vn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(yn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(yt,"id","transformers.XGLMTokenizer"),h(yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(yt,"href","#transformers.XGLMTokenizer"),h(st,"class","relative group"),h(bn,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),h(Tn,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),h(ro,"href","https://github.com/google/sentencepiece"),h(ro,"rel","nofollow"),h(Mn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mt,"id","transformers.XGLMTokenizerFast"),h(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Mt,"href","#transformers.XGLMTokenizerFast"),h(at,"class","relative group"),h(xn,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),h(zn,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),h(_o,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),h(_o,"rel","nofollow"),h(Xn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Lt,"id","transformers.XGLMModel"),h(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Lt,"href","#transformers.XGLMModel"),h(rt,"class","relative group"),h(En,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h($o,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h($o,"rel","nofollow"),h(qn,"href","/docs/transformers/main/en/model_doc/xglm#transformers.XGLMModel"),h(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Xt,"id","transformers.XGLMForCausalLM"),h(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xt,"href","#transformers.XGLMForCausalLM"),h(lt,"class","relative group"),h(Cn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Eo,"rel","nofollow"),h(Pn,"href","/docs/transformers/main/en/model_doc/xglm#transformers.XGLMForCausalLM"),h(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Et,"id","transformers.TFXGLMModel"),h(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Et,"href","#transformers.TFXGLMModel"),h(ct,"class","relative group"),h(An,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Oo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Oo,"rel","nofollow"),h(jn,"href","/docs/transformers/main/en/model_doc/xglm#transformers.TFXGLMModel"),h(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(jt,"id","transformers.TFXGLMForCausalLM"),h(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(jt,"href","#transformers.TFXGLMForCausalLM"),h(ht,"class","relative group"),h(On,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Uo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Uo,"rel","nofollow"),h(Dn,"href","/docs/transformers/main/en/model_doc/xglm#transformers.TFXGLMForCausalLM"),h(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(It,"id","transformers.FlaxXGLMModel"),h(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(It,"href","#transformers.FlaxXGLMModel"),h(mt,"class","relative group"),h(Nn,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(Ko,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),h(Ko,"rel","nofollow"),h(Zo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(Zo,"rel","nofollow"),h(Qo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(Qo,"rel","nofollow"),h(Yo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(Yo,"rel","nofollow"),h(en,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(en,"rel","nofollow"),h($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ut,"id","transformers.FlaxXGLMForCausalLM"),h(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ut,"href","#transformers.FlaxXGLMForCausalLM"),h(gt,"class","relative group"),h(In,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(rn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),h(rn,"rel","nofollow"),h(ln,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(ln,"rel","nofollow"),h(dn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(dn,"rel","nofollow"),h(cn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(cn,"rel","nofollow"),h(pn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(pn,"rel","nofollow"),h(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,p),g(o,y,_),g(o,f,_),e(f,u),e(u,k),M(l,k,null),e(f,m),e(f,x),e(x,Ge),g(o,ce,_),g(o,X,_),e(X,ee),e(ee,B),M(te,B,null),e(X,Ee),e(X,R),e(R,qe),g(o,ve,_),g(o,S,_),e(S,V),e(S,oe),e(oe,fe),e(S,q),g(o,C,_),g(o,pe,_),e(pe,ne),g(o,ye,_),g(o,he,_),e(he,H),e(H,Ce),g(o,be,_),g(o,G,_),e(G,Pe),e(G,j),e(j,Ae),e(G,je),e(G,O),e(O,Oe),e(G,De),g(o,W,_),g(o,J,_),e(J,A),e(A,ge),M(v,ge,null),e(J,F),e(J,se),e(se,Qe),g(o,Be,_),g(o,E,_),M(_e,E,null),e(E,Ye),e(E,ae),e(ae,K),e(ae,U),e(U,et),e(ae,tt),e(ae,D),e(D,ot),e(ae,nt),e(E,Ne),e(E,re),e(re,er),e(re,vn),e(vn,tr),e(re,or),e(re,yn),e(yn,nr),e(re,sr),e(E,ar),M(vt,E,null),g(o,la,_),g(o,st,_),e(st,yt),e(yt,Qn),M(so,Qn,null),e(st,rr),e(st,Yn),e(Yn,ir),g(o,da,_),g(o,N,_),M(ao,N,null),e(N,lr),e(N,Ie),e(Ie,dr),e(Ie,bn),e(bn,cr),e(Ie,pr),e(Ie,Tn),e(Tn,hr),e(Ie,ur),e(Ie,ro),e(ro,mr),e(Ie,fr),e(N,gr),e(N,io),e(io,_r),e(io,Mn),e(Mn,kr),e(io,vr),e(N,yr),e(N,Re),M(lo,Re,null),e(Re,br),e(Re,es),e(es,Tr),e(Re,Mr),e(Re,co),e(co,wn),e(wn,wr),e(wn,ts),e(ts,Lr),e(co,$r),e(co,Ln),e(Ln,xr),e(Ln,os),e(os,zr),e(N,Xr),e(N,bt),M(po,bt,null),e(bt,Fr),e(bt,ho),e(ho,Gr),e(ho,ns),e(ns,Er),e(ho,qr),e(N,Cr),e(N,Tt),M(uo,Tt,null),e(Tt,Pr),e(Tt,ss),e(ss,Ar),e(N,jr),e(N,$n),M(mo,$n,null),g(o,ca,_),g(o,at,_),e(at,Mt),e(Mt,as),M(fo,as,null),e(at,Or),e(at,rs),e(rs,Dr),g(o,pa,_),g(o,ie,_),M(go,ie,null),e(ie,Nr),e(ie,ke),e(ke,Ir),e(ke,is),e(is,Sr),e(ke,Wr),e(ke,xn),e(xn,Ur),e(ke,Br),e(ke,zn),e(zn,Rr),e(ke,Vr),e(ke,_o),e(_o,Hr),e(ke,Jr),e(ie,Kr),e(ie,ko),e(ko,Zr),e(ko,Xn),e(Xn,Qr),e(ko,Yr),e(ie,ei),e(ie,Ve),M(vo,Ve,null),e(Ve,ti),e(Ve,ls),e(ls,oi),e(Ve,ni),e(Ve,yo),e(yo,Fn),e(Fn,si),e(Fn,ds),e(ds,ai),e(yo,ri),e(yo,Gn),e(Gn,ii),e(Gn,cs),e(cs,li),e(ie,di),e(ie,wt),M(bo,wt,null),e(wt,ci),e(wt,ps),e(ps,pi),g(o,ha,_),g(o,rt,_),e(rt,Lt),e(Lt,hs),M(To,hs,null),e(rt,hi),e(rt,us),e(us,ui),g(o,ua,_),g(o,le,_),M(Mo,le,null),e(le,mi),e(le,wo),e(wo,fi),e(wo,En),e(En,gi),e(wo,_i),e(le,ki),e(le,Lo),e(Lo,vi),e(Lo,$o),e($o,yi),e(Lo,bi),e(le,Ti),e(le,$t),e($t,Mi),e($t,ms),e(ms,wi),e($t,Li),e($t,fs),e(fs,$i),e(le,xi),e(le,Te),M(xo,Te,null),e(Te,zi),e(Te,it),e(it,Xi),e(it,qn),e(qn,Fi),e(it,Gi),e(it,gs),e(gs,Ei),e(it,qi),e(Te,Ci),M(xt,Te,null),e(Te,Pi),M(zt,Te,null),g(o,ma,_),g(o,lt,_),e(lt,Xt),e(Xt,_s),M(zo,_s,null),e(lt,Ai),e(lt,ks),e(ks,ji),g(o,fa,_),g(o,de,_),M(Xo,de,null),e(de,Oi),e(de,vs),e(vs,Di),e(de,Ni),e(de,Fo),e(Fo,Ii),e(Fo,Cn),e(Cn,Si),e(Fo,Wi),e(de,Ui),e(de,Go),e(Go,Bi),e(Go,Eo),e(Eo,Ri),e(Go,Vi),e(de,Hi),e(de,Me),M(qo,Me,null),e(Me,Ji),e(Me,dt),e(dt,Ki),e(dt,Pn),e(Pn,Zi),e(dt,Qi),e(dt,ys),e(ys,Yi),e(dt,el),e(Me,tl),M(Ft,Me,null),e(Me,ol),M(Gt,Me,null),g(o,ga,_),g(o,ct,_),e(ct,Et),e(Et,bs),M(Co,bs,null),e(ct,nl),e(ct,Ts),e(Ts,sl),g(o,_a,_),g(o,Z,_),M(Po,Z,null),e(Z,al),e(Z,Ao),e(Ao,rl),e(Ao,An),e(An,il),e(Ao,ll),e(Z,dl),e(Z,jo),e(jo,cl),e(jo,Oo),e(Oo,pl),e(jo,hl),e(Z,ul),M(qt,Z,null),e(Z,ml),e(Z,Ct),e(Ct,fl),e(Ct,Ms),e(Ms,gl),e(Ct,_l),e(Ct,ws),e(ws,kl),e(Z,vl),e(Z,we),M(Do,we,null),e(we,yl),e(we,pt),e(pt,bl),e(pt,jn),e(jn,Tl),e(pt,Ml),e(pt,Ls),e(Ls,wl),e(pt,Ll),e(we,$l),M(Pt,we,null),e(we,xl),M(At,we,null),g(o,ka,_),g(o,ht,_),e(ht,jt),e(jt,$s),M(No,$s,null),e(ht,zl),e(ht,xs),e(xs,Xl),g(o,va,_),g(o,Q,_),M(Io,Q,null),e(Q,Fl),e(Q,zs),e(zs,Gl),e(Q,El),e(Q,So),e(So,ql),e(So,On),e(On,Cl),e(So,Pl),e(Q,Al),e(Q,Wo),e(Wo,jl),e(Wo,Uo),e(Uo,Ol),e(Wo,Dl),e(Q,Nl),M(Ot,Q,null),e(Q,Il),e(Q,Le),M(Bo,Le,null),e(Le,Sl),e(Le,ut),e(ut,Wl),e(ut,Dn),e(Dn,Ul),e(ut,Bl),e(ut,Xs),e(Xs,Rl),e(ut,Vl),e(Le,Hl),M(Dt,Le,null),e(Le,Jl),M(Nt,Le,null),g(o,ya,_),g(o,mt,_),e(mt,It),e(It,Fs),M(Ro,Fs,null),e(mt,Kl),e(mt,Gs),e(Gs,Zl),g(o,ba,_),g(o,Y,_),M(Vo,Y,null),e(Y,Ql),e(Y,Ho),e(Ho,Yl),e(Ho,Nn),e(Nn,ed),e(Ho,td),e(Y,od),e(Y,Jo),e(Jo,nd),e(Jo,Ko),e(Ko,sd),e(Jo,ad),e(Y,rd),e(Y,Es),e(Es,id),e(Y,ld),e(Y,Se),e(Se,qs),e(qs,Zo),e(Zo,dd),e(Se,cd),e(Se,Cs),e(Cs,Qo),e(Qo,pd),e(Se,hd),e(Se,Ps),e(Ps,Yo),e(Yo,ud),e(Se,md),e(Se,As),e(As,en),e(en,fd),e(Y,gd),e(Y,$e),M(tn,$e,null),e($e,_d),e($e,ft),e(ft,kd),e(ft,js),e(js,vd),e(ft,yd),e(ft,Os),e(Os,bd),e(ft,Td),e($e,Md),M(St,$e,null),e($e,wd),M(Wt,$e,null),g(o,Ta,_),g(o,gt,_),e(gt,Ut),e(Ut,Ds),M(on,Ds,null),e(gt,Ld),e(gt,Ns),e(Ns,$d),g(o,Ma,_),g(o,I,_),M(nn,I,null),e(I,xd),e(I,Is),e(Is,zd),e(I,Xd),e(I,sn),e(sn,Fd),e(sn,In),e(In,Gd),e(sn,Ed),e(I,qd),e(I,an),e(an,Cd),e(an,rn),e(rn,Pd),e(an,Ad),e(I,jd),e(I,Ss),e(Ss,Od),e(I,Dd),e(I,We),e(We,Ws),e(Ws,ln),e(ln,Nd),e(We,Id),e(We,Us),e(Us,dn),e(dn,Sd),e(We,Wd),e(We,Bs),e(Bs,cn),e(cn,Ud),e(We,Bd),e(We,Rs),e(Rs,pn),e(pn,Rd),e(I,Vd),e(I,xe),M(hn,xe,null),e(xe,Hd),e(xe,_t),e(_t,Jd),e(_t,Vs),e(Vs,Kd),e(_t,Zd),e(_t,Hs),e(Hs,Qd),e(_t,Yd),e(xe,ec),M(Bt,xe,null),e(xe,tc),M(Rt,xe,null),wa=!0},p(o,[_]){const un={};_&2&&(un.$$scope={dirty:_,ctx:o}),vt.$set(un);const Js={};_&2&&(Js.$$scope={dirty:_,ctx:o}),xt.$set(Js);const Ks={};_&2&&(Ks.$$scope={dirty:_,ctx:o}),zt.$set(Ks);const Zs={};_&2&&(Zs.$$scope={dirty:_,ctx:o}),Ft.$set(Zs);const mn={};_&2&&(mn.$$scope={dirty:_,ctx:o}),Gt.$set(mn);const Qs={};_&2&&(Qs.$$scope={dirty:_,ctx:o}),qt.$set(Qs);const Ys={};_&2&&(Ys.$$scope={dirty:_,ctx:o}),Pt.$set(Ys);const ea={};_&2&&(ea.$$scope={dirty:_,ctx:o}),At.$set(ea);const fn={};_&2&&(fn.$$scope={dirty:_,ctx:o}),Ot.$set(fn);const ta={};_&2&&(ta.$$scope={dirty:_,ctx:o}),Dt.$set(ta);const oa={};_&2&&(oa.$$scope={dirty:_,ctx:o}),Nt.$set(oa);const na={};_&2&&(na.$$scope={dirty:_,ctx:o}),St.$set(na);const sa={};_&2&&(sa.$$scope={dirty:_,ctx:o}),Wt.$set(sa);const kt={};_&2&&(kt.$$scope={dirty:_,ctx:o}),Bt.$set(kt);const aa={};_&2&&(aa.$$scope={dirty:_,ctx:o}),Rt.$set(aa)},i(o){wa||(w(l.$$.fragment,o),w(te.$$.fragment,o),w(v.$$.fragment,o),w(_e.$$.fragment,o),w(vt.$$.fragment,o),w(so.$$.fragment,o),w(ao.$$.fragment,o),w(lo.$$.fragment,o),w(po.$$.fragment,o),w(uo.$$.fragment,o),w(mo.$$.fragment,o),w(fo.$$.fragment,o),w(go.$$.fragment,o),w(vo.$$.fragment,o),w(bo.$$.fragment,o),w(To.$$.fragment,o),w(Mo.$$.fragment,o),w(xo.$$.fragment,o),w(xt.$$.fragment,o),w(zt.$$.fragment,o),w(zo.$$.fragment,o),w(Xo.$$.fragment,o),w(qo.$$.fragment,o),w(Ft.$$.fragment,o),w(Gt.$$.fragment,o),w(Co.$$.fragment,o),w(Po.$$.fragment,o),w(qt.$$.fragment,o),w(Do.$$.fragment,o),w(Pt.$$.fragment,o),w(At.$$.fragment,o),w(No.$$.fragment,o),w(Io.$$.fragment,o),w(Ot.$$.fragment,o),w(Bo.$$.fragment,o),w(Dt.$$.fragment,o),w(Nt.$$.fragment,o),w(Ro.$$.fragment,o),w(Vo.$$.fragment,o),w(tn.$$.fragment,o),w(St.$$.fragment,o),w(Wt.$$.fragment,o),w(on.$$.fragment,o),w(nn.$$.fragment,o),w(hn.$$.fragment,o),w(Bt.$$.fragment,o),w(Rt.$$.fragment,o),wa=!0)},o(o){L(l.$$.fragment,o),L(te.$$.fragment,o),L(v.$$.fragment,o),L(_e.$$.fragment,o),L(vt.$$.fragment,o),L(so.$$.fragment,o),L(ao.$$.fragment,o),L(lo.$$.fragment,o),L(po.$$.fragment,o),L(uo.$$.fragment,o),L(mo.$$.fragment,o),L(fo.$$.fragment,o),L(go.$$.fragment,o),L(vo.$$.fragment,o),L(bo.$$.fragment,o),L(To.$$.fragment,o),L(Mo.$$.fragment,o),L(xo.$$.fragment,o),L(xt.$$.fragment,o),L(zt.$$.fragment,o),L(zo.$$.fragment,o),L(Xo.$$.fragment,o),L(qo.$$.fragment,o),L(Ft.$$.fragment,o),L(Gt.$$.fragment,o),L(Co.$$.fragment,o),L(Po.$$.fragment,o),L(qt.$$.fragment,o),L(Do.$$.fragment,o),L(Pt.$$.fragment,o),L(At.$$.fragment,o),L(No.$$.fragment,o),L(Io.$$.fragment,o),L(Ot.$$.fragment,o),L(Bo.$$.fragment,o),L(Dt.$$.fragment,o),L(Nt.$$.fragment,o),L(Ro.$$.fragment,o),L(Vo.$$.fragment,o),L(tn.$$.fragment,o),L(St.$$.fragment,o),L(Wt.$$.fragment,o),L(on.$$.fragment,o),L(nn.$$.fragment,o),L(hn.$$.fragment,o),L(Bt.$$.fragment,o),L(Rt.$$.fragment,o),wa=!1},d(o){t(p),o&&t(y),o&&t(f),$(l),o&&t(ce),o&&t(X),$(te),o&&t(ve),o&&t(S),o&&t(C),o&&t(pe),o&&t(ye),o&&t(he),o&&t(be),o&&t(G),o&&t(W),o&&t(J),$(v),o&&t(Be),o&&t(E),$(_e),$(vt),o&&t(la),o&&t(st),$(so),o&&t(da),o&&t(N),$(ao),$(lo),$(po),$(uo),$(mo),o&&t(ca),o&&t(at),$(fo),o&&t(pa),o&&t(ie),$(go),$(vo),$(bo),o&&t(ha),o&&t(rt),$(To),o&&t(ua),o&&t(le),$(Mo),$(xo),$(xt),$(zt),o&&t(ma),o&&t(lt),$(zo),o&&t(fa),o&&t(de),$(Xo),$(qo),$(Ft),$(Gt),o&&t(ga),o&&t(ct),$(Co),o&&t(_a),o&&t(Z),$(Po),$(qt),$(Do),$(Pt),$(At),o&&t(ka),o&&t(ht),$(No),o&&t(va),o&&t(Q),$(Io),$(Ot),$(Bo),$(Dt),$(Nt),o&&t(ya),o&&t(mt),$(Ro),o&&t(ba),o&&t(Y),$(Vo),$(tn),$(St),$(Wt),o&&t(Ta),o&&t(gt),$(on),o&&t(Ma),o&&t(I),$(nn),$(hn),$(Bt),$(Rt)}}}const vh={local:"xglm",sections:[{local:"overview",title:"Overview"},{local:"transformers.XGLMConfig",title:"XGLMConfig"},{local:"transformers.XGLMTokenizer",title:"XGLMTokenizer"},{local:"transformers.XGLMTokenizerFast",title:"XGLMTokenizerFast"},{local:"transformers.XGLMModel",title:"XGLMModel"},{local:"transformers.XGLMForCausalLM",title:"XGLMForCausalLM"},{local:"transformers.TFXGLMModel",title:"TFXGLMModel"},{local:"transformers.TFXGLMForCausalLM",title:"TFXGLMForCausalLM"},{local:"transformers.FlaxXGLMModel",title:"FlaxXGLMModel"},{local:"transformers.FlaxXGLMForCausalLM",title:"FlaxXGLMForCausalLM"}],title:"XGLM"};function yh(z){return oh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xh extends Qp{constructor(p){super();Yp(this,p,yh,kh,eh,{})}}export{xh as default,vh as metadata};
