import{S as Lm,i as Sm,s as Dm,e as n,k as l,w as k,t as a,M as Gm,c as r,d as t,m as c,a as s,x as y,h as d,b as h,G as e,g as f,y as T,q as w,o as $,B,v as Wm,L as _t}from"../../chunks/vendor-hf-doc-builder.js";import{T as Uo}from"../../chunks/Tip-hf-doc-builder.js";import{D as N}from"../../chunks/Docstring-hf-doc-builder.js";import{C as dt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Te}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ft}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Um(z){let p,v,g,m,b;return m=new dt({props:{code:`from transformers import BlenderbotModel, BlenderbotConfig

# Initializing a Blenderbot facebook/blenderbot-3B style configuration
configuration = BlenderbotConfig()

# Initializing a model from the facebook/blenderbot-3B style configuration
model = BlenderbotModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotModel, BlenderbotConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Blenderbot facebook/blenderbot-3B style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BlenderbotConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/blenderbot-3B style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),v=a("Example:"),g=l(),k(m.$$.fragment)},l(i){p=r(i,"P",{});var u=s(p);v=d(u,"Example:"),u.forEach(t),g=c(i),y(m.$$.fragment,i)},m(i,u){f(i,p,u),e(p,v),f(i,g,u),T(m,i,u),b=!0},p:_t,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),B(m,i)}}}function Rm(z){let p,v,g,m,b;return{c(){p=n("p"),v=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=r(i,"P",{});var u=s(p);v=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var E=s(g);m=d(E,"Module"),E.forEach(t),b=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(i,u){f(i,p,u),e(p,v),e(p,g),e(g,m),e(p,b)},d(i){i&&t(p)}}}function Hm(z){let p,v,g,m,b;return m=new dt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotModel

model = BlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt")
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_input_ids)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">6</span>, <span class="hljs-number">1280</span>]`}}),{c(){p=n("p"),v=a("Example:"),g=l(),k(m.$$.fragment)},l(i){p=r(i,"P",{});var u=s(p);v=d(u,"Example:"),u.forEach(t),g=c(i),y(m.$$.fragment,i)},m(i,u){f(i,p,u),e(p,v),f(i,g,u),T(m,i,u),b=!0},p:_t,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),B(m,i)}}}function Km(z){let p,v,g,m,b;return{c(){p=n("p"),v=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=r(i,"P",{});var u=s(p);v=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var E=s(g);m=d(E,"Module"),E.forEach(t),b=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(i,u){f(i,p,u),e(p,v),e(p,g),e(g,m),e(p,b)},d(i){i&&t(p)}}}function Vm(z){let p,v,g,m,b;return m=new dt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

mname = "facebook/blenderbot-400M-distill"
model = BlenderbotForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotTokenizer.from_pretrained(mname)
UTTERANCE = "My friends are cool but they eat too many carbs."
print("Human: ", UTTERANCE)

inputs = tokenizer([UTTERANCE], return_tensors="pt")
reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(reply_ids, skip_special_tokens=True)[0])

REPLY = "I'm not sure"
print("Human: ", REPLY)

NEXT_UTTERANCE = (
    "My friends are cool but they eat too many carbs.</s> <s>That's unfortunate. "
    "Are they trying to lose weight or are they just trying to be healthier?</s> "
    "<s> I'm not sure."
)
inputs = tokenizer([NEXT_UTTERANCE], return_tensors="pt")
next_reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Human: &quot;</span>, UTTERANCE)
Human:  My friends are cool but they eat too many carbs.

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([UTTERANCE], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Bot: &quot;</span>, tokenizer.batch_decode(reply_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>])
Bot: That<span class="hljs-string">&#x27;s unfortunate. Are they trying to lose weight or are they just trying to be healthier?

&gt;&gt;&gt; REPLY = &quot;I&#x27;</span>m <span class="hljs-keyword">not</span> sure<span class="hljs-string">&quot;
&gt;&gt;&gt; print(&quot;</span>Human: <span class="hljs-string">&quot;, REPLY)
Human: I&#x27;m not sure

&gt;&gt;&gt; NEXT_UTTERANCE = (
...     &quot;</span>My friends are cool but they eat too many carbs.&lt;/s&gt; &lt;s&gt;That<span class="hljs-string">&#x27;s unfortunate. &quot;
...     &quot;Are they trying to lose weight or are they just trying to be healthier?&lt;/s&gt; &quot;
...     &quot;&lt;s&gt; I&#x27;</span>m <span class="hljs-keyword">not</span> sure.<span class="hljs-string">&quot;
... )
&gt;&gt;&gt; inputs = tokenizer([NEXT_UTTERANCE], return_tensors=&quot;</span>pt<span class="hljs-string">&quot;)
&gt;&gt;&gt; next_reply_ids = model.generate(**inputs)
&gt;&gt;&gt; print(&quot;</span>Bot: <span class="hljs-string">&quot;, tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])
Bot:   That&#x27;s too bad. Have you tried encouraging them to change their eating habits?</span>`}}),{c(){p=n("p"),v=a("Conversation example:"),g=l(),k(m.$$.fragment)},l(i){p=r(i,"P",{});var u=s(p);v=d(u,"Conversation example:"),u.forEach(t),g=c(i),y(m.$$.fragment,i)},m(i,u){f(i,p,u),e(p,v),f(i,g,u),T(m,i,u),b=!0},p:_t,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),B(m,i)}}}function Jm(z){let p,v,g,m,b;return m=new dt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForCausalLM

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = BlenderbotForCausalLM.from_pretrained(
    "facebook/blenderbot-400M-distill", add_cross_attention=False
)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),{c(){p=n("p"),v=a("Example:"),g=l(),k(m.$$.fragment)},l(i){p=r(i,"P",{});var u=s(p);v=d(u,"Example:"),u.forEach(t),g=c(i),y(m.$$.fragment,i)},m(i,u){f(i,p,u),e(p,v),f(i,g,u),T(m,i,u),b=!0},p:_t,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),B(m,i)}}}function Qm(z){let p,v,g,m,b,i,u,E,Je,Le,A,Be,xe,F,ae,de,Qe,Se,I,Y,ze,U,Xe,Fe,ie,De,Z,le,ce,Ye,qe,C,j,Ze,ee,we,Ee,pe,Ge,R,L,he,ue,et,me,fe,tt,We,O,te,K,_e,Me,P,ot,G,H,ge;return{c(){p=n("p"),v=a("TensorFlow models and layers in "),g=n("code"),m=a("transformers"),b=a(" accept two formats as input:"),i=l(),u=n("ul"),E=n("li"),Je=a("having all inputs as keyword arguments (like PyTorch models), or"),Le=l(),A=n("li"),Be=a("having all inputs as a list, tuple or dict in the first positional argument."),xe=l(),F=n("p"),ae=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),de=n("code"),Qe=a("model.fit()"),Se=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=n("code"),Y=a("model.fit()"),ze=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),U=n("code"),Xe=a("fit()"),Fe=a(" and "),ie=n("code"),De=a("predict()"),Z=a(`, such as when creating your own layers or models with
the Keras `),le=n("code"),ce=a("Functional"),Ye=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),qe=l(),C=n("ul"),j=n("li"),Ze=a("a single Tensor with "),ee=n("code"),we=a("input_ids"),Ee=a(" only and nothing else: "),pe=n("code"),Ge=a("model(input_ids)"),R=l(),L=n("li"),he=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ue=n("code"),et=a("model([input_ids, attention_mask])"),me=a(" or "),fe=n("code"),tt=a("model([input_ids, attention_mask, token_type_ids])"),We=l(),O=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=n("code"),_e=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me=l(),P=n("p"),ot=a(`Note that when creating models and layers with
`),G=n("a"),H=a("subclassing"),ge=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(x){p=r(x,"P",{});var q=s(p);v=d(q,"TensorFlow models and layers in "),g=r(q,"CODE",{});var gt=s(g);m=d(gt,"transformers"),gt.forEach(t),b=d(q," accept two formats as input:"),q.forEach(t),i=c(x),u=r(x,"UL",{});var Ce=s(u);E=r(Ce,"LI",{});var bt=s(E);Je=d(bt,"having all inputs as keyword arguments (like PyTorch models), or"),bt.forEach(t),Le=c(Ce),A=r(Ce,"LI",{});var je=s(A);Be=d(je,"having all inputs as a list, tuple or dict in the first positional argument."),je.forEach(t),Ce.forEach(t),xe=c(x),F=r(x,"P",{});var M=s(F);ae=d(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),de=r(M,"CODE",{});var Oe=s(de);Qe=d(Oe,"model.fit()"),Oe.forEach(t),Se=d(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(M,"CODE",{});var vt=s(I);Y=d(vt,"model.fit()"),vt.forEach(t),ze=d(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),U=r(M,"CODE",{});var kt=s(U);Xe=d(kt,"fit()"),kt.forEach(t),Fe=d(M," and "),ie=r(M,"CODE",{});var yt=s(ie);De=d(yt,"predict()"),yt.forEach(t),Z=d(M,`, such as when creating your own layers or models with
the Keras `),le=r(M,"CODE",{});var V=s(le);ce=d(V,"Functional"),V.forEach(t),Ye=d(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),qe=c(x),C=r(x,"UL",{});var J=s(C);j=r(J,"LI",{});var Q=s(j);Ze=d(Q,"a single Tensor with "),ee=r(Q,"CODE",{});var Tt=s(ee);we=d(Tt,"input_ids"),Tt.forEach(t),Ee=d(Q," only and nothing else: "),pe=r(Q,"CODE",{});var wt=s(pe);Ge=d(wt,"model(input_ids)"),wt.forEach(t),Q.forEach(t),R=c(J),L=r(J,"LI",{});var X=s(L);he=d(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ue=r(X,"CODE",{});var $t=s(ue);et=d($t,"model([input_ids, attention_mask])"),$t.forEach(t),me=d(X," or "),fe=r(X,"CODE",{});var Bt=s(fe);tt=d(Bt,"model([input_ids, attention_mask, token_type_ids])"),Bt.forEach(t),X.forEach(t),We=c(J),O=r(J,"LI",{});var $e=s(O);te=d($e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=r($e,"CODE",{});var xt=s(K);_e=d(xt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xt.forEach(t),$e.forEach(t),J.forEach(t),Me=c(x),P=r(x,"P",{});var Pe=s(P);ot=d(Pe,`Note that when creating models and layers with
`),G=r(Pe,"A",{href:!0,rel:!0});var it=s(G);H=d(it,"subclassing"),it.forEach(t),ge=d(Pe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Pe.forEach(t),this.h()},h(){h(G,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(G,"rel","nofollow")},m(x,q){f(x,p,q),e(p,v),e(p,g),e(g,m),e(p,b),f(x,i,q),f(x,u,q),e(u,E),e(E,Je),e(u,Le),e(u,A),e(A,Be),f(x,xe,q),f(x,F,q),e(F,ae),e(F,de),e(de,Qe),e(F,Se),e(F,I),e(I,Y),e(F,ze),e(F,U),e(U,Xe),e(F,Fe),e(F,ie),e(ie,De),e(F,Z),e(F,le),e(le,ce),e(F,Ye),f(x,qe,q),f(x,C,q),e(C,j),e(j,Ze),e(j,ee),e(ee,we),e(j,Ee),e(j,pe),e(pe,Ge),e(C,R),e(C,L),e(L,he),e(L,ue),e(ue,et),e(L,me),e(L,fe),e(fe,tt),e(C,We),e(C,O),e(O,te),e(O,K),e(K,_e),f(x,Me,q),f(x,P,q),e(P,ot),e(P,G),e(G,H),e(P,ge)},d(x){x&&t(p),x&&t(i),x&&t(u),x&&t(xe),x&&t(F),x&&t(qe),x&&t(C),x&&t(Me),x&&t(P)}}}function Xm(z){let p,v,g,m,b;return{c(){p=n("p"),v=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=r(i,"P",{});var u=s(p);v=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var E=s(g);m=d(E,"Module"),E.forEach(t),b=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(i,u){f(i,p,u),e(p,v),e(p,g),e(g,m),e(p,b)},d(i){i&&t(p)}}}function Ym(z){let p,v,g,m,b;return m=new dt({props:{code:`from transformers import BlenderbotTokenizer, TFBlenderbotModel
import tensorflow as tf

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = TFBlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, TFBlenderbotModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),v=a("Example:"),g=l(),k(m.$$.fragment)},l(i){p=r(i,"P",{});var u=s(p);v=d(u,"Example:"),u.forEach(t),g=c(i),y(m.$$.fragment,i)},m(i,u){f(i,p,u),e(p,v),f(i,g,u),T(m,i,u),b=!0},p:_t,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),B(m,i)}}}function Zm(z){let p,v,g,m,b,i,u,E,Je,Le,A,Be,xe,F,ae,de,Qe,Se,I,Y,ze,U,Xe,Fe,ie,De,Z,le,ce,Ye,qe,C,j,Ze,ee,we,Ee,pe,Ge,R,L,he,ue,et,me,fe,tt,We,O,te,K,_e,Me,P,ot,G,H,ge;return{c(){p=n("p"),v=a("TensorFlow models and layers in "),g=n("code"),m=a("transformers"),b=a(" accept two formats as input:"),i=l(),u=n("ul"),E=n("li"),Je=a("having all inputs as keyword arguments (like PyTorch models), or"),Le=l(),A=n("li"),Be=a("having all inputs as a list, tuple or dict in the first positional argument."),xe=l(),F=n("p"),ae=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),de=n("code"),Qe=a("model.fit()"),Se=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=n("code"),Y=a("model.fit()"),ze=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),U=n("code"),Xe=a("fit()"),Fe=a(" and "),ie=n("code"),De=a("predict()"),Z=a(`, such as when creating your own layers or models with
the Keras `),le=n("code"),ce=a("Functional"),Ye=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),qe=l(),C=n("ul"),j=n("li"),Ze=a("a single Tensor with "),ee=n("code"),we=a("input_ids"),Ee=a(" only and nothing else: "),pe=n("code"),Ge=a("model(input_ids)"),R=l(),L=n("li"),he=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ue=n("code"),et=a("model([input_ids, attention_mask])"),me=a(" or "),fe=n("code"),tt=a("model([input_ids, attention_mask, token_type_ids])"),We=l(),O=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=n("code"),_e=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me=l(),P=n("p"),ot=a(`Note that when creating models and layers with
`),G=n("a"),H=a("subclassing"),ge=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(x){p=r(x,"P",{});var q=s(p);v=d(q,"TensorFlow models and layers in "),g=r(q,"CODE",{});var gt=s(g);m=d(gt,"transformers"),gt.forEach(t),b=d(q," accept two formats as input:"),q.forEach(t),i=c(x),u=r(x,"UL",{});var Ce=s(u);E=r(Ce,"LI",{});var bt=s(E);Je=d(bt,"having all inputs as keyword arguments (like PyTorch models), or"),bt.forEach(t),Le=c(Ce),A=r(Ce,"LI",{});var je=s(A);Be=d(je,"having all inputs as a list, tuple or dict in the first positional argument."),je.forEach(t),Ce.forEach(t),xe=c(x),F=r(x,"P",{});var M=s(F);ae=d(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),de=r(M,"CODE",{});var Oe=s(de);Qe=d(Oe,"model.fit()"),Oe.forEach(t),Se=d(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(M,"CODE",{});var vt=s(I);Y=d(vt,"model.fit()"),vt.forEach(t),ze=d(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),U=r(M,"CODE",{});var kt=s(U);Xe=d(kt,"fit()"),kt.forEach(t),Fe=d(M," and "),ie=r(M,"CODE",{});var yt=s(ie);De=d(yt,"predict()"),yt.forEach(t),Z=d(M,`, such as when creating your own layers or models with
the Keras `),le=r(M,"CODE",{});var V=s(le);ce=d(V,"Functional"),V.forEach(t),Ye=d(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),qe=c(x),C=r(x,"UL",{});var J=s(C);j=r(J,"LI",{});var Q=s(j);Ze=d(Q,"a single Tensor with "),ee=r(Q,"CODE",{});var Tt=s(ee);we=d(Tt,"input_ids"),Tt.forEach(t),Ee=d(Q," only and nothing else: "),pe=r(Q,"CODE",{});var wt=s(pe);Ge=d(wt,"model(input_ids)"),wt.forEach(t),Q.forEach(t),R=c(J),L=r(J,"LI",{});var X=s(L);he=d(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ue=r(X,"CODE",{});var $t=s(ue);et=d($t,"model([input_ids, attention_mask])"),$t.forEach(t),me=d(X," or "),fe=r(X,"CODE",{});var Bt=s(fe);tt=d(Bt,"model([input_ids, attention_mask, token_type_ids])"),Bt.forEach(t),X.forEach(t),We=c(J),O=r(J,"LI",{});var $e=s(O);te=d($e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),K=r($e,"CODE",{});var xt=s(K);_e=d(xt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xt.forEach(t),$e.forEach(t),J.forEach(t),Me=c(x),P=r(x,"P",{});var Pe=s(P);ot=d(Pe,`Note that when creating models and layers with
`),G=r(Pe,"A",{href:!0,rel:!0});var it=s(G);H=d(it,"subclassing"),it.forEach(t),ge=d(Pe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Pe.forEach(t),this.h()},h(){h(G,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(G,"rel","nofollow")},m(x,q){f(x,p,q),e(p,v),e(p,g),e(g,m),e(p,b),f(x,i,q),f(x,u,q),e(u,E),e(E,Je),e(u,Le),e(u,A),e(A,Be),f(x,xe,q),f(x,F,q),e(F,ae),e(F,de),e(de,Qe),e(F,Se),e(F,I),e(I,Y),e(F,ze),e(F,U),e(U,Xe),e(F,Fe),e(F,ie),e(ie,De),e(F,Z),e(F,le),e(le,ce),e(F,Ye),f(x,qe,q),f(x,C,q),e(C,j),e(j,Ze),e(j,ee),e(ee,we),e(j,Ee),e(j,pe),e(pe,Ge),e(C,R),e(C,L),e(L,he),e(L,ue),e(ue,et),e(L,me),e(L,fe),e(fe,tt),e(C,We),e(C,O),e(O,te),e(O,K),e(K,_e),f(x,Me,q),f(x,P,q),e(P,ot),e(P,G),e(G,H),e(P,ge)},d(x){x&&t(p),x&&t(i),x&&t(u),x&&t(xe),x&&t(F),x&&t(qe),x&&t(C),x&&t(Me),x&&t(P)}}}function ef(z){let p,v,g,m,b;return{c(){p=n("p"),v=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=r(i,"P",{});var u=s(p);v=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var E=s(g);m=d(E,"Module"),E.forEach(t),b=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(i,u){f(i,p,u),e(p,v),e(p,g),e(g,m),e(p,b)},d(i){i&&t(p)}}}function tf(z){let p,v,g,m,b;return{c(){p=n("p"),v=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=r(i,"P",{});var u=s(p);v=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var E=s(g);m=d(E,"Module"),E.forEach(t),b=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(i,u){f(i,p,u),e(p,v),e(p,g),e(g,m),e(p,b)},d(i){i&&t(p)}}}function of(z){let p,v,g,m,b;return m=new dt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotModel

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = FlaxBlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),v=a("Example:"),g=l(),k(m.$$.fragment)},l(i){p=r(i,"P",{});var u=s(p);v=d(u,"Example:"),u.forEach(t),g=c(i),y(m.$$.fragment,i)},m(i,u){f(i,p,u),e(p,v),f(i,g,u),T(m,i,u),b=!0},p:_t,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),B(m,i)}}}function nf(z){let p,v,g,m,b;return m=new dt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),v=a("Example:"),g=l(),k(m.$$.fragment)},l(i){p=r(i,"P",{});var u=s(p);v=d(u,"Example:"),u.forEach(t),g=c(i),y(m.$$.fragment,i)},m(i,u){f(i,p,u),e(p,v),f(i,g,u),T(m,i,u),b=!0},p:_t,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),B(m,i)}}}function rf(z){let p,v,g,m,b;return m=new dt({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),v=a("Example:"),g=l(),k(m.$$.fragment)},l(i){p=r(i,"P",{});var u=s(p);v=d(u,"Example:"),u.forEach(t),g=c(i),y(m.$$.fragment,i)},m(i,u){f(i,p,u),e(p,v),f(i,g,u),T(m,i,u),b=!0},p:_t,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),B(m,i)}}}function sf(z){let p,v,g,m,b;return{c(){p=n("p"),v=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=r(i,"P",{});var u=s(p);v=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var E=s(g);m=d(E,"Module"),E.forEach(t),b=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(i,u){f(i,p,u),e(p,v),e(p,g),e(g,m),e(p,b)},d(i){i&&t(p)}}}function af(z){let p,v,g,m,b;return m=new dt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),v=a("Example:"),g=l(),k(m.$$.fragment)},l(i){p=r(i,"P",{});var u=s(p);v=d(u,"Example:"),u.forEach(t),g=c(i),y(m.$$.fragment,i)},m(i,u){f(i,p,u),e(p,v),f(i,g,u),T(m,i,u),b=!0},p:_t,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),B(m,i)}}}function df(z){let p,v,g,m,b;return m=new dt({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=n("p"),v=a("Example:"),g=l(),k(m.$$.fragment)},l(i){p=r(i,"P",{});var u=s(p);v=d(u,"Example:"),u.forEach(t),g=c(i),y(m.$$.fragment,i)},m(i,u){f(i,p,u),e(p,v),f(i,g,u),T(m,i,u),b=!0},p:_t,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),B(m,i)}}}function lf(z){let p,v,g,m,b,i,u,E,Je,Le,A,Be,xe,F,ae,de,Qe,Se,I,Y,ze,U,Xe,Fe,ie,De,Z,le,ce,Ye,qe,C,j,Ze,ee,we,Ee,pe,Ge,R,L,he,ue,et,me,fe,tt,We,O,te,K,_e,Me,P,ot,G,H,ge,x,q,gt,Ce,bt,je,M,Oe,vt,kt,yt,V,J,Q,Tt,wt,X,$t,Bt,$e,xt,Pe,it,zt,Vt,Wr,Ro,Dd,Ur,Gd,Ca,pr,Wd,ja,Ho,Oa,Ft,Jt,Rr,Ko,Ud,Hr,Rd,Pa,Ne,Vo,Hd,qt,Kd,hr,Vd,Jd,Jo,Qd,Xd,Yd,Et,Zd,ur,ei,ti,mr,oi,ni,ri,Qt,Na,Mt,Xt,Kr,Qo,si,Vr,ai,Aa,be,Xo,di,Jr,ii,li,Yt,Qr,ci,pi,fr,hi,ui,mi,Yo,fi,_r,_i,gi,bi,lt,Zo,vi,Xr,ki,yi,Yr,gr,Ti,Zr,wi,Ia,Ct,Zt,es,en,$i,ts,Bi,La,ve,tn,xi,on,zi,os,Fi,qi,Ei,eo,ns,Mi,Ci,br,ji,Oi,Pi,nn,Ni,vr,Ai,Ii,Li,ct,rn,Si,rs,Di,Gi,ss,kr,Wi,as,Ui,Sa,jt,to,ds,sn,Ri,is,Hi,Da,nt,Ki,ls,Vi,Ji,cs,Qi,Xi,ps,Yi,Ga,Ae,an,Zi,dn,el,yr,tl,ol,nl,ln,rl,cn,sl,al,dl,Ue,pn,il,Ot,ll,Tr,cl,pl,hs,hl,ul,ml,oo,fl,no,Wa,Pt,ro,us,hn,_l,ms,gl,Ua,rt,bl,wr,vl,kl,fs,yl,Tl,_s,wl,Ra,Ie,un,$l,mn,Bl,$r,xl,zl,Fl,fn,ql,_n,El,Ml,Cl,Re,gn,jl,Nt,Ol,Br,Pl,Nl,gs,Al,Il,Ll,so,Sl,ao,Ha,At,io,bs,bn,Dl,vs,Gl,Ka,It,vn,Wl,lo,kn,Ul,co,Va,Lt,po,ks,yn,Rl,ys,Hl,Ja,ke,Tn,Kl,wn,Vl,xr,Jl,Ql,Xl,$n,Yl,Bn,Zl,ec,tc,ho,oc,He,xn,nc,St,rc,zr,sc,ac,Ts,dc,ic,lc,uo,cc,mo,Qa,Dt,fo,ws,zn,pc,$s,hc,Xa,ye,Fn,uc,qn,mc,Fr,fc,_c,gc,En,bc,Mn,vc,kc,yc,_o,Tc,oe,Cn,wc,Gt,$c,qr,Bc,xc,Bs,zc,Fc,qc,go,Ec,xs,Mc,Cc,zs,Fs,qs,Es,jc,Oc,Ms,Cs,js,jn,Pc,Os,Nc,Ac,Ya,Wt,bo,Ps,On,Ic,Ns,Lc,Za,S,Pn,Sc,Nn,Dc,Er,Gc,Wc,Uc,An,Rc,In,Hc,Kc,Vc,As,Jc,Qc,st,Is,Ln,Xc,Yc,Ls,Sn,Zc,ep,Ss,Dn,tp,op,Ds,Gn,np,rp,Ke,Wn,sp,Ut,ap,Gs,dp,ip,Ws,lp,cp,pp,vo,hp,ko,up,yo,Un,mp,To,fp,wo,Rn,_p,$o,ed,Rt,Bo,Us,Hn,gp,Rs,bp,td,D,Kn,vp,Vn,kp,Mr,yp,Tp,wp,Jn,$p,Qn,Bp,xp,zp,Hs,Fp,qp,at,Ks,Xn,Ep,Mp,Vs,Yn,Cp,jp,Js,Zn,Op,Pp,Qs,er,Np,Ap,W,tr,Ip,Ht,Lp,Xs,Sp,Dp,Ys,Gp,Wp,Up,xo,Rp,Zs,Hp,Kp,ea,ta,oa,na,Vp,Jp,ra,sa,aa,da,Qp,Xp,ia,la,ca,pa,Yp,Zp,ha,ua,or,zo,Fo,ma,nr,eh,fa,th,oh,_a,nh,rh,qo,rr,sh,Eo,ah,Mo,sr,dh,Co,od;return i=new Te({}),U=new Te({}),_e=new Te({}),Ro=new Te({}),Ho=new dt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

mname = "facebook/blenderbot-400M-distill"
model = BlenderbotForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotTokenizer.from_pretrained(mname)
UTTERANCE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([UTTERANCE], return_tensors="pt")
reply_ids = model.generate(**inputs)
print(tokenizer.batch_decode(reply_ids))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([UTTERANCE], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(reply_ids))
[<span class="hljs-string">&quot;&lt;s&gt; That&#x27;s unfortunate. Are they trying to lose weight or are they just trying to be healthier?&lt;/s&gt;&quot;</span>]`}}),Ko=new Te({}),Vo=new N({props:{name:"class transformers.BlenderbotConfig",anchor:"transformers.BlenderbotConfig",parameters:[{name:"vocab_size",val:" = 8008"},{name:"max_position_embeddings",val:" = 128"},{name:"encoder_layers",val:" = 2"},{name:"encoder_ffn_dim",val:" = 10240"},{name:"encoder_attention_heads",val:" = 32"},{name:"decoder_layers",val:" = 24"},{name:"decoder_ffn_dim",val:" = 10240"},{name:"decoder_attention_heads",val:" = 32"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 2560"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"encoder_no_repeat_ngram_size",val:" = 3"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Blenderbot model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotModel">BlenderbotModel</a> or <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.TFBlenderbotModel">TFBlenderbotModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.BlenderbotConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.BlenderbotConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.BlenderbotConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.BlenderbotConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.BlenderbotConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.BlenderbotConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.BlenderbotConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.BlenderbotConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.BlenderbotConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.BlenderbotConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.BlenderbotConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.BlenderbotConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BlenderbotConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.BlenderbotConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"encoder_layerdrop"},{anchor:"transformers.BlenderbotConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.BlenderbotConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BlenderbotConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.BlenderbotConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/configuration_blenderbot.py#L36"}}),Qt=new ft({props:{anchor:"transformers.BlenderbotConfig.example",$$slots:{default:[Um]},$$scope:{ctx:z}}}),Qo=new Te({}),Xo=new N({props:{name:"class transformers.BlenderbotTokenizer",anchor:"transformers.BlenderbotTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/tokenization_blenderbot.py#L46"}}),Zo=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/tokenization_blenderbot.py#L59",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),en=new Te({}),tn=new N({props:{name:"class transformers.BlenderbotTokenizerFast",anchor:"transformers.BlenderbotTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L47"}}),rn=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L61",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sn=new Te({}),an=new N({props:{name:"class transformers.BlenderbotModel",anchor:"transformers.BlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/modeling_blenderbot.py#L1089"}}),pn=new N({props:{name:"forward",anchor:"transformers.BlenderbotModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Blenderbot uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BlenderbotModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/modeling_blenderbot.py#L1129",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oo=new Uo({props:{$$slots:{default:[Rm]},$$scope:{ctx:z}}}),no=new ft({props:{anchor:"transformers.BlenderbotModel.forward.example",$$slots:{default:[Hm]},$$scope:{ctx:z}}}),hn=new Te({}),un=new N({props:{name:"class transformers.BlenderbotForConditionalGeneration",anchor:"transformers.BlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/modeling_blenderbot.py#L1227"}}),gn=new N({props:{name:"forward",anchor:"transformers.BlenderbotForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Blenderbot uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/modeling_blenderbot.py#L1286",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new Uo({props:{$$slots:{default:[Km]},$$scope:{ctx:z}}}),ao=new ft({props:{anchor:"transformers.BlenderbotForConditionalGeneration.forward.example",$$slots:{default:[Vm]},$$scope:{ctx:z}}}),bn=new Te({}),vn=new N({props:{name:"class transformers.BlenderbotForCausalLM",anchor:"transformers.BlenderbotForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/modeling_blenderbot.py#L1422"}}),kn=new N({props:{name:"forward",anchor:"transformers.BlenderbotForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BlenderbotForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.BlenderbotForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BlenderbotForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BlenderbotForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.BlenderbotForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/modeling_blenderbot.py#L1453",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new ft({props:{anchor:"transformers.BlenderbotForCausalLM.forward.example",$$slots:{default:[Jm]},$$scope:{ctx:z}}}),yn=new Te({}),Tn=new N({props:{name:"class transformers.TFBlenderbotModel",anchor:"transformers.TFBlenderbotModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1147"}}),ho=new Uo({props:{$$slots:{default:[Qm]},$$scope:{ctx:z}}}),xn=new N({props:{name:"call",anchor:"transformers.TFBlenderbotModel.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Blenderbot uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotModel.call.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.TFBlenderbotModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBlenderbotModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBlenderbotModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBlenderbotModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBlenderbotModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1175",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),uo=new Uo({props:{$$slots:{default:[Xm]},$$scope:{ctx:z}}}),mo=new ft({props:{anchor:"transformers.TFBlenderbotModel.call.example",$$slots:{default:[Ym]},$$scope:{ctx:z}}}),zn=new Te({}),Fn=new N({props:{name:"class transformers.TFBlenderbotForConditionalGeneration",anchor:"transformers.TFBlenderbotForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1269"}}),_o=new Uo({props:{$$slots:{default:[Zm]},$$scope:{ctx:z}}}),Cn=new N({props:{name:"call",anchor:"transformers.TFBlenderbotForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Blenderbot uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1319",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),go=new Uo({props:{$$slots:{default:[ef]},$$scope:{ctx:z}}}),On=new Te({}),Pn=new N({props:{name:"class transformers.FlaxBlenderbotModel",anchor:"transformers.FlaxBlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1218"}}),Wn=new N({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1153",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vo=new Uo({props:{$$slots:{default:[tf]},$$scope:{ctx:z}}}),ko=new ft({props:{anchor:"transformers.FlaxBlenderbotModel.__call__.example",$$slots:{default:[of]},$$scope:{ctx:z}}}),Un=new N({props:{name:"encode",anchor:"transformers.FlaxBlenderbotModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L974",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot.configuration_blenderbot.BlenderbotConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),To=new ft({props:{anchor:"transformers.FlaxBlenderbotModel.encode.example",$$slots:{default:[nf]},$$scope:{ctx:z}}}),Rn=new N({props:{name:"decode",anchor:"transformers.FlaxBlenderbotModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1037",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot.configuration_blenderbot.BlenderbotConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$o=new ft({props:{anchor:"transformers.FlaxBlenderbotModel.decode.example",$$slots:{default:[rf]},$$scope:{ctx:z}}}),Hn=new Te({}),Kn=new N({props:{name:"class transformers.FlaxBlenderbotForConditionalGeneration",anchor:"transformers.FlaxBlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1305"}}),tr=new N({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1153",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xo=new Uo({props:{$$slots:{default:[sf]},$$scope:{ctx:z}}}),nr=new Te({}),rr=new N({props:{name:"encode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L974",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot.configuration_blenderbot.BlenderbotConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Eo=new ft({props:{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.example",$$slots:{default:[af]},$$scope:{ctx:z}}}),sr=new N({props:{name:"decode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1309",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot.configuration_blenderbot.BlenderbotConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Co=new ft({props:{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.example",$$slots:{default:[df]},$$scope:{ctx:z}}}),{c(){p=n("meta"),v=l(),g=n("h1"),m=n("a"),b=n("span"),k(i.$$.fragment),u=l(),E=n("span"),Je=a("Blenderbot"),Le=l(),A=n("p"),Be=n("strong"),xe=a("DISCLAIMER:"),F=a(" If you see something strange, file a "),ae=n("a"),de=a("Github Issue"),Qe=a(" ."),Se=l(),I=n("h2"),Y=n("a"),ze=n("span"),k(U.$$.fragment),Xe=l(),Fe=n("span"),ie=a("Overview"),De=l(),Z=n("p"),le=a("The Blender chatbot model was proposed in "),ce=n("a"),Ye=a("Recipes for building an open-domain chatbot"),qe=a(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),C=l(),j=n("p"),Ze=a("The abstract of the paper is the following:"),ee=l(),we=n("p"),Ee=n("em"),pe=a(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Ge=l(),R=n("p"),L=a("This model was contributed by "),he=n("a"),ue=a("sshleifer"),et=a(". The authors\u2019 code can be found "),me=n("a"),fe=a("here"),tt=a(" ."),We=l(),O=n("h2"),te=n("a"),K=n("span"),k(_e.$$.fragment),Me=l(),P=n("span"),ot=a("Implementation Notes"),G=l(),H=n("ul"),ge=n("li"),x=a("Blenderbot uses a standard "),q=n("a"),gt=a("seq2seq model transformer"),Ce=a(" based architecture."),bt=l(),je=n("li"),M=a("Available checkpoints can be found in the "),Oe=n("a"),vt=a("model hub"),kt=a("."),yt=l(),V=n("li"),J=a("This is the "),Q=n("em"),Tt=a("default"),wt=a(` Blenderbot model class. However, some smaller checkpoints, such as
`),X=n("code"),$t=a("facebook/blenderbot_small_90M"),Bt=a(`, have a different architecture and consequently should be used with
`),$e=n("a"),xt=a("BlenderbotSmall"),Pe=a("."),it=l(),zt=n("h2"),Vt=n("a"),Wr=n("span"),k(Ro.$$.fragment),Dd=l(),Ur=n("span"),Gd=a("Usage"),Ca=l(),pr=n("p"),Wd=a("Here is an example of model usage:"),ja=l(),k(Ho.$$.fragment),Oa=l(),Ft=n("h2"),Jt=n("a"),Rr=n("span"),k(Ko.$$.fragment),Ud=l(),Hr=n("span"),Rd=a("BlenderbotConfig"),Pa=l(),Ne=n("div"),k(Vo.$$.fragment),Hd=l(),qt=n("p"),Kd=a("This is the configuration class to store the configuration of a "),hr=n("a"),Vd=a("BlenderbotModel"),Jd=a(`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),Jo=n("a"),Qd=a("facebook/blenderbot-3B"),Xd=a(" architecture."),Yd=l(),Et=n("p"),Zd=a("Configuration objects inherit from "),ur=n("a"),ei=a("PretrainedConfig"),ti=a(` and can be used to control the model outputs. Read the
documentation from `),mr=n("a"),oi=a("PretrainedConfig"),ni=a(" for more information."),ri=l(),k(Qt.$$.fragment),Na=l(),Mt=n("h2"),Xt=n("a"),Kr=n("span"),k(Qo.$$.fragment),si=l(),Vr=n("span"),ai=a("BlenderbotTokenizer"),Aa=l(),be=n("div"),k(Xo.$$.fragment),di=l(),Jr=n("p"),ii=a("Construct a Blenderbot tokenizer."),li=l(),Yt=n("p"),Qr=n("code"),ci=a("Blenderbot"),pi=a(" is nearly identical to "),fr=n("a"),hi=a("RobertaTokenizer"),ui=a(` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),mi=l(),Yo=n("p"),fi=a("Refer to superclass "),_r=n("a"),_i=a("RobertaTokenizer"),gi=a(" for usage examples and documentation concerning parameters."),bi=l(),lt=n("div"),k(Zo.$$.fragment),vi=l(),Xr=n("p"),ki=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),yi=l(),Yr=n("ul"),gr=n("li"),Ti=a("single sequence: "),Zr=n("code"),wi=a("X </s>"),Ia=l(),Ct=n("h2"),Zt=n("a"),es=n("span"),k(en.$$.fragment),$i=l(),ts=n("span"),Bi=a("BlenderbotTokenizerFast"),La=l(),ve=n("div"),k(tn.$$.fragment),xi=l(),on=n("p"),zi=a("Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),os=n("em"),Fi=a("tokenizers"),qi=a(" library)."),Ei=l(),eo=n("p"),ns=n("code"),Mi=a("BlenderbotFast"),Ci=a(" is nearly identical to "),br=n("a"),ji=a("RobertaTokenizerFast"),Oi=a(` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),Pi=l(),nn=n("p"),Ni=a("Refer to superclass "),vr=n("a"),Ai=a("RobertaTokenizerFast"),Ii=a(" for usage examples and documentation concerning parameters."),Li=l(),ct=n("div"),k(rn.$$.fragment),Si=l(),rs=n("p"),Di=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Gi=l(),ss=n("ul"),kr=n("li"),Wi=a("single sequence: "),as=n("code"),Ui=a("X </s>"),Sa=l(),jt=n("h2"),to=n("a"),ds=n("span"),k(sn.$$.fragment),Ri=l(),is=n("span"),Hi=a("BlenderbotModel"),Da=l(),nt=n("p"),Ki=a("See "),ls=n("code"),Vi=a("transformers.BartModel"),Ji=a(" for arguments to "),cs=n("em"),Qi=a("forward"),Xi=a(" and "),ps=n("em"),Yi=a("generate"),Ga=l(),Ae=n("div"),k(an.$$.fragment),Zi=l(),dn=n("p"),el=a(`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),yr=n("a"),tl=a("PreTrainedModel"),ol=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nl=l(),ln=n("p"),rl=a("This model is also a PyTorch "),cn=n("a"),sl=a("torch.nn.Module"),al=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dl=l(),Ue=n("div"),k(pn.$$.fragment),il=l(),Ot=n("p"),ll=a("The "),Tr=n("a"),cl=a("BlenderbotModel"),pl=a(" forward method, overrides the "),hs=n("code"),hl=a("__call__"),ul=a(" special method."),ml=l(),k(oo.$$.fragment),fl=l(),k(no.$$.fragment),Wa=l(),Pt=n("h2"),ro=n("a"),us=n("span"),k(hn.$$.fragment),_l=l(),ms=n("span"),gl=a("BlenderbotForConditionalGeneration"),Ua=l(),rt=n("p"),bl=a("See "),wr=n("a"),vl=a("BartForConditionalGeneration"),kl=a(" for arguments to "),fs=n("em"),yl=a("forward"),Tl=a(" and "),_s=n("em"),wl=a("generate"),Ra=l(),Ie=n("div"),k(un.$$.fragment),$l=l(),mn=n("p"),Bl=a(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),$r=n("a"),xl=a("PreTrainedModel"),zl=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fl=l(),fn=n("p"),ql=a("This model is also a PyTorch "),_n=n("a"),El=a("torch.nn.Module"),Ml=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cl=l(),Re=n("div"),k(gn.$$.fragment),jl=l(),Nt=n("p"),Ol=a("The "),Br=n("a"),Pl=a("BlenderbotForConditionalGeneration"),Nl=a(" forward method, overrides the "),gs=n("code"),Al=a("__call__"),Il=a(" special method."),Ll=l(),k(so.$$.fragment),Sl=l(),k(ao.$$.fragment),Ha=l(),At=n("h2"),io=n("a"),bs=n("span"),k(bn.$$.fragment),Dl=l(),vs=n("span"),Gl=a("BlenderbotForCausalLM"),Ka=l(),It=n("div"),k(vn.$$.fragment),Wl=l(),lo=n("div"),k(kn.$$.fragment),Ul=l(),k(co.$$.fragment),Va=l(),Lt=n("h2"),po=n("a"),ks=n("span"),k(yn.$$.fragment),Rl=l(),ys=n("span"),Hl=a("TFBlenderbotModel"),Ja=l(),ke=n("div"),k(Tn.$$.fragment),Kl=l(),wn=n("p"),Vl=a(`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),xr=n("a"),Jl=a("TFPreTrainedModel"),Ql=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xl=l(),$n=n("p"),Yl=a("This model is also a "),Bn=n("a"),Zl=a("tf.keras.Model"),ec=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tc=l(),k(ho.$$.fragment),oc=l(),He=n("div"),k(xn.$$.fragment),nc=l(),St=n("p"),rc=a("The "),zr=n("a"),sc=a("TFBlenderbotModel"),ac=a(" forward method, overrides the "),Ts=n("code"),dc=a("__call__"),ic=a(" special method."),lc=l(),k(uo.$$.fragment),cc=l(),k(mo.$$.fragment),Qa=l(),Dt=n("h2"),fo=n("a"),ws=n("span"),k(zn.$$.fragment),pc=l(),$s=n("span"),hc=a("TFBlenderbotForConditionalGeneration"),Xa=l(),ye=n("div"),k(Fn.$$.fragment),uc=l(),qn=n("p"),mc=a(`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),Fr=n("a"),fc=a("TFPreTrainedModel"),_c=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gc=l(),En=n("p"),bc=a("This model is also a "),Mn=n("a"),vc=a("tf.keras.Model"),kc=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yc=l(),k(_o.$$.fragment),Tc=l(),oe=n("div"),k(Cn.$$.fragment),wc=l(),Gt=n("p"),$c=a("The "),qr=n("a"),Bc=a("TFBlenderbotForConditionalGeneration"),xc=a(" forward method, overrides the "),Bs=n("code"),zc=a("__call__"),Fc=a(" special method."),qc=l(),k(go.$$.fragment),Ec=l(),xs=n("p"),Mc=a("Conversation example::"),Cc=l(),zs=n("blockquote"),Fs=n("blockquote"),qs=n("blockquote"),Es=n("p"),jc=a(`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),Oc=l(),Ms=n("blockquote"),Cs=n("blockquote"),js=n("blockquote"),jn=n("p"),Pc=a(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Os=n("s"),Nc=a(`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),Ac=a(` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Ya=l(),Wt=n("h2"),bo=n("a"),Ps=n("span"),k(On.$$.fragment),Ic=l(),Ns=n("span"),Lc=a("FlaxBlenderbotModel"),Za=l(),S=n("div"),k(Pn.$$.fragment),Sc=l(),Nn=n("p"),Dc=a(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Er=n("a"),Gc=a("FlaxPreTrainedModel"),Wc=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uc=l(),An=n("p"),Rc=a(`This model is also a Flax Linen
`),In=n("a"),Hc=a("flax.nn.Module"),Kc=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Vc=l(),As=n("p"),Jc=a("Finally, this model supports inherent JAX features such as:"),Qc=l(),st=n("ul"),Is=n("li"),Ln=n("a"),Xc=a("Just-In-Time (JIT) compilation"),Yc=l(),Ls=n("li"),Sn=n("a"),Zc=a("Automatic Differentiation"),ep=l(),Ss=n("li"),Dn=n("a"),tp=a("Vectorization"),op=l(),Ds=n("li"),Gn=n("a"),np=a("Parallelization"),rp=l(),Ke=n("div"),k(Wn.$$.fragment),sp=l(),Ut=n("p"),ap=a("The "),Gs=n("code"),dp=a("FlaxBlenderbotPreTrainedModel"),ip=a(" forward method, overrides the "),Ws=n("code"),lp=a("__call__"),cp=a(" special method."),pp=l(),k(vo.$$.fragment),hp=l(),k(ko.$$.fragment),up=l(),yo=n("div"),k(Un.$$.fragment),mp=l(),k(To.$$.fragment),fp=l(),wo=n("div"),k(Rn.$$.fragment),_p=l(),k($o.$$.fragment),ed=l(),Rt=n("h2"),Bo=n("a"),Us=n("span"),k(Hn.$$.fragment),gp=l(),Rs=n("span"),bp=a("FlaxBlenderbotForConditionalGeneration"),td=l(),D=n("div"),k(Kn.$$.fragment),vp=l(),Vn=n("p"),kp=a(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),Mr=n("a"),yp=a("FlaxPreTrainedModel"),Tp=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wp=l(),Jn=n("p"),$p=a(`This model is also a Flax Linen
`),Qn=n("a"),Bp=a("flax.nn.Module"),xp=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zp=l(),Hs=n("p"),Fp=a("Finally, this model supports inherent JAX features such as:"),qp=l(),at=n("ul"),Ks=n("li"),Xn=n("a"),Ep=a("Just-In-Time (JIT) compilation"),Mp=l(),Vs=n("li"),Yn=n("a"),Cp=a("Automatic Differentiation"),jp=l(),Js=n("li"),Zn=n("a"),Op=a("Vectorization"),Pp=l(),Qs=n("li"),er=n("a"),Np=a("Parallelization"),Ap=l(),W=n("div"),k(tr.$$.fragment),Ip=l(),Ht=n("p"),Lp=a("The "),Xs=n("code"),Sp=a("FlaxBlenderbotPreTrainedModel"),Dp=a(" forward method, overrides the "),Ys=n("code"),Gp=a("__call__"),Wp=a(" special method."),Up=l(),k(xo.$$.fragment),Rp=l(),Zs=n("p"),Hp=a("Conversation example::"),Kp=l(),ea=n("blockquote"),ta=n("blockquote"),oa=n("blockquote"),na=n("p"),Vp=a("from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),Jp=l(),ra=n("blockquote"),sa=n("blockquote"),aa=n("blockquote"),da=n("p"),Qp=a(`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),Xp=l(),ia=n("blockquote"),la=n("blockquote"),ca=n("blockquote"),pa=n("p"),Yp=a(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),Zp=l(),ha=n("blockquote"),ua=n("blockquote"),or=n("blockquote"),zo=n("h1"),Fo=n("a"),ma=n("span"),k(nr.$$.fragment),eh=l(),fa=n("span"),th=a("Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),oh=l(),_a=n("p"),nh=a(`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),rh=l(),qo=n("div"),k(rr.$$.fragment),sh=l(),k(Eo.$$.fragment),ah=l(),Mo=n("div"),k(sr.$$.fragment),dh=l(),k(Co.$$.fragment),this.h()},l(o){const _=Gm('[data-svelte="svelte-1phssyn"]',document.head);p=r(_,"META",{name:!0,content:!0}),_.forEach(t),v=c(o),g=r(o,"H1",{class:!0});var ar=s(g);m=r(ar,"A",{id:!0,class:!0,href:!0});var ga=s(m);b=r(ga,"SPAN",{});var ba=s(b);y(i.$$.fragment,ba),ba.forEach(t),ga.forEach(t),u=c(ar),E=r(ar,"SPAN",{});var va=s(E);Je=d(va,"Blenderbot"),va.forEach(t),ar.forEach(t),Le=c(o),A=r(o,"P",{});var jo=s(A);Be=r(jo,"STRONG",{});var ka=s(Be);xe=d(ka,"DISCLAIMER:"),ka.forEach(t),F=d(jo," If you see something strange, file a "),ae=r(jo,"A",{href:!0,rel:!0});var ya=s(ae);de=d(ya,"Github Issue"),ya.forEach(t),Qe=d(jo," ."),jo.forEach(t),Se=c(o),I=r(o,"H2",{class:!0});var dr=s(I);Y=r(dr,"A",{id:!0,class:!0,href:!0});var Ta=s(Y);ze=r(Ta,"SPAN",{});var wa=s(ze);y(U.$$.fragment,wa),wa.forEach(t),Ta.forEach(t),Xe=c(dr),Fe=r(dr,"SPAN",{});var $a=s(Fe);ie=d($a,"Overview"),$a.forEach(t),dr.forEach(t),De=c(o),Z=r(o,"P",{});var ir=s(Z);le=d(ir,"The Blender chatbot model was proposed in "),ce=r(ir,"A",{href:!0,rel:!0});var Ba=s(ce);Ye=d(Ba,"Recipes for building an open-domain chatbot"),Ba.forEach(t),qe=d(ir,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),ir.forEach(t),C=c(o),j=r(o,"P",{});var xa=s(j);Ze=d(xa,"The abstract of the paper is the following:"),xa.forEach(t),ee=c(o),we=r(o,"P",{});var za=s(we);Ee=r(za,"EM",{});var Fa=s(Ee);pe=d(Fa,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Fa.forEach(t),za.forEach(t),Ge=c(o),R=r(o,"P",{});var Kt=s(R);L=d(Kt,"This model was contributed by "),he=r(Kt,"A",{href:!0,rel:!0});var qa=s(he);ue=d(qa,"sshleifer"),qa.forEach(t),et=d(Kt,". The authors\u2019 code can be found "),me=r(Kt,"A",{href:!0,rel:!0});var ch=s(me);fe=d(ch,"here"),ch.forEach(t),tt=d(Kt," ."),Kt.forEach(t),We=c(o),O=r(o,"H2",{class:!0});var nd=s(O);te=r(nd,"A",{id:!0,class:!0,href:!0});var ph=s(te);K=r(ph,"SPAN",{});var hh=s(K);y(_e.$$.fragment,hh),hh.forEach(t),ph.forEach(t),Me=c(nd),P=r(nd,"SPAN",{});var uh=s(P);ot=d(uh,"Implementation Notes"),uh.forEach(t),nd.forEach(t),G=c(o),H=r(o,"UL",{});var Cr=s(H);ge=r(Cr,"LI",{});var rd=s(ge);x=d(rd,"Blenderbot uses a standard "),q=r(rd,"A",{href:!0,rel:!0});var mh=s(q);gt=d(mh,"seq2seq model transformer"),mh.forEach(t),Ce=d(rd," based architecture."),rd.forEach(t),bt=c(Cr),je=r(Cr,"LI",{});var sd=s(je);M=d(sd,"Available checkpoints can be found in the "),Oe=r(sd,"A",{href:!0,rel:!0});var fh=s(Oe);vt=d(fh,"model hub"),fh.forEach(t),kt=d(sd,"."),sd.forEach(t),yt=c(Cr),V=r(Cr,"LI",{});var Oo=s(V);J=d(Oo,"This is the "),Q=r(Oo,"EM",{});var _h=s(Q);Tt=d(_h,"default"),_h.forEach(t),wt=d(Oo,` Blenderbot model class. However, some smaller checkpoints, such as
`),X=r(Oo,"CODE",{});var gh=s(X);$t=d(gh,"facebook/blenderbot_small_90M"),gh.forEach(t),Bt=d(Oo,`, have a different architecture and consequently should be used with
`),$e=r(Oo,"A",{href:!0});var bh=s($e);xt=d(bh,"BlenderbotSmall"),bh.forEach(t),Pe=d(Oo,"."),Oo.forEach(t),Cr.forEach(t),it=c(o),zt=r(o,"H2",{class:!0});var ad=s(zt);Vt=r(ad,"A",{id:!0,class:!0,href:!0});var vh=s(Vt);Wr=r(vh,"SPAN",{});var kh=s(Wr);y(Ro.$$.fragment,kh),kh.forEach(t),vh.forEach(t),Dd=c(ad),Ur=r(ad,"SPAN",{});var yh=s(Ur);Gd=d(yh,"Usage"),yh.forEach(t),ad.forEach(t),Ca=c(o),pr=r(o,"P",{});var Th=s(pr);Wd=d(Th,"Here is an example of model usage:"),Th.forEach(t),ja=c(o),y(Ho.$$.fragment,o),Oa=c(o),Ft=r(o,"H2",{class:!0});var dd=s(Ft);Jt=r(dd,"A",{id:!0,class:!0,href:!0});var wh=s(Jt);Rr=r(wh,"SPAN",{});var $h=s(Rr);y(Ko.$$.fragment,$h),$h.forEach(t),wh.forEach(t),Ud=c(dd),Hr=r(dd,"SPAN",{});var Bh=s(Hr);Rd=d(Bh,"BlenderbotConfig"),Bh.forEach(t),dd.forEach(t),Pa=c(o),Ne=r(o,"DIV",{class:!0});var Po=s(Ne);y(Vo.$$.fragment,Po),Hd=c(Po),qt=r(Po,"P",{});var jr=s(qt);Kd=d(jr,"This is the configuration class to store the configuration of a "),hr=r(jr,"A",{href:!0});var xh=s(hr);Vd=d(xh,"BlenderbotModel"),xh.forEach(t),Jd=d(jr,`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),Jo=r(jr,"A",{href:!0,rel:!0});var zh=s(Jo);Qd=d(zh,"facebook/blenderbot-3B"),zh.forEach(t),Xd=d(jr," architecture."),jr.forEach(t),Yd=c(Po),Et=r(Po,"P",{});var Or=s(Et);Zd=d(Or,"Configuration objects inherit from "),ur=r(Or,"A",{href:!0});var Fh=s(ur);ei=d(Fh,"PretrainedConfig"),Fh.forEach(t),ti=d(Or,` and can be used to control the model outputs. Read the
documentation from `),mr=r(Or,"A",{href:!0});var qh=s(mr);oi=d(qh,"PretrainedConfig"),qh.forEach(t),ni=d(Or," for more information."),Or.forEach(t),ri=c(Po),y(Qt.$$.fragment,Po),Po.forEach(t),Na=c(o),Mt=r(o,"H2",{class:!0});var id=s(Mt);Xt=r(id,"A",{id:!0,class:!0,href:!0});var Eh=s(Xt);Kr=r(Eh,"SPAN",{});var Mh=s(Kr);y(Qo.$$.fragment,Mh),Mh.forEach(t),Eh.forEach(t),si=c(id),Vr=r(id,"SPAN",{});var Ch=s(Vr);ai=d(Ch,"BlenderbotTokenizer"),Ch.forEach(t),id.forEach(t),Aa=c(o),be=r(o,"DIV",{class:!0});var pt=s(be);y(Xo.$$.fragment,pt),di=c(pt),Jr=r(pt,"P",{});var jh=s(Jr);ii=d(jh,"Construct a Blenderbot tokenizer."),jh.forEach(t),li=c(pt),Yt=r(pt,"P",{});var Ea=s(Yt);Qr=r(Ea,"CODE",{});var Oh=s(Qr);ci=d(Oh,"Blenderbot"),Oh.forEach(t),pi=d(Ea," is nearly identical to "),fr=r(Ea,"A",{href:!0});var Ph=s(fr);hi=d(Ph,"RobertaTokenizer"),Ph.forEach(t),ui=d(Ea,` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),Ea.forEach(t),mi=c(pt),Yo=r(pt,"P",{});var ld=s(Yo);fi=d(ld,"Refer to superclass "),_r=r(ld,"A",{href:!0});var Nh=s(_r);_i=d(Nh,"RobertaTokenizer"),Nh.forEach(t),gi=d(ld," for usage examples and documentation concerning parameters."),ld.forEach(t),bi=c(pt),lt=r(pt,"DIV",{class:!0});var Pr=s(lt);y(Zo.$$.fragment,Pr),vi=c(Pr),Xr=r(Pr,"P",{});var Ah=s(Xr);ki=d(Ah,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Ah.forEach(t),yi=c(Pr),Yr=r(Pr,"UL",{});var Ih=s(Yr);gr=r(Ih,"LI",{});var ih=s(gr);Ti=d(ih,"single sequence: "),Zr=r(ih,"CODE",{});var Lh=s(Zr);wi=d(Lh,"X </s>"),Lh.forEach(t),ih.forEach(t),Ih.forEach(t),Pr.forEach(t),pt.forEach(t),Ia=c(o),Ct=r(o,"H2",{class:!0});var cd=s(Ct);Zt=r(cd,"A",{id:!0,class:!0,href:!0});var Sh=s(Zt);es=r(Sh,"SPAN",{});var Dh=s(es);y(en.$$.fragment,Dh),Dh.forEach(t),Sh.forEach(t),$i=c(cd),ts=r(cd,"SPAN",{});var Gh=s(ts);Bi=d(Gh,"BlenderbotTokenizerFast"),Gh.forEach(t),cd.forEach(t),La=c(o),ve=r(o,"DIV",{class:!0});var ht=s(ve);y(tn.$$.fragment,ht),xi=c(ht),on=r(ht,"P",{});var pd=s(on);zi=d(pd,"Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),os=r(pd,"EM",{});var Wh=s(os);Fi=d(Wh,"tokenizers"),Wh.forEach(t),qi=d(pd," library)."),pd.forEach(t),Ei=c(ht),eo=r(ht,"P",{});var Ma=s(eo);ns=r(Ma,"CODE",{});var Uh=s(ns);Mi=d(Uh,"BlenderbotFast"),Uh.forEach(t),Ci=d(Ma," is nearly identical to "),br=r(Ma,"A",{href:!0});var Rh=s(br);ji=d(Rh,"RobertaTokenizerFast"),Rh.forEach(t),Oi=d(Ma,` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),Ma.forEach(t),Pi=c(ht),nn=r(ht,"P",{});var hd=s(nn);Ni=d(hd,"Refer to superclass "),vr=r(hd,"A",{href:!0});var Hh=s(vr);Ai=d(Hh,"RobertaTokenizerFast"),Hh.forEach(t),Ii=d(hd," for usage examples and documentation concerning parameters."),hd.forEach(t),Li=c(ht),ct=r(ht,"DIV",{class:!0});var Nr=s(ct);y(rn.$$.fragment,Nr),Si=c(Nr),rs=r(Nr,"P",{});var Kh=s(rs);Di=d(Kh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Kh.forEach(t),Gi=c(Nr),ss=r(Nr,"UL",{});var Vh=s(ss);kr=r(Vh,"LI",{});var lh=s(kr);Wi=d(lh,"single sequence: "),as=r(lh,"CODE",{});var Jh=s(as);Ui=d(Jh,"X </s>"),Jh.forEach(t),lh.forEach(t),Vh.forEach(t),Nr.forEach(t),ht.forEach(t),Sa=c(o),jt=r(o,"H2",{class:!0});var ud=s(jt);to=r(ud,"A",{id:!0,class:!0,href:!0});var Qh=s(to);ds=r(Qh,"SPAN",{});var Xh=s(ds);y(sn.$$.fragment,Xh),Xh.forEach(t),Qh.forEach(t),Ri=c(ud),is=r(ud,"SPAN",{});var Yh=s(is);Hi=d(Yh,"BlenderbotModel"),Yh.forEach(t),ud.forEach(t),Da=c(o),nt=r(o,"P",{});var lr=s(nt);Ki=d(lr,"See "),ls=r(lr,"CODE",{});var Zh=s(ls);Vi=d(Zh,"transformers.BartModel"),Zh.forEach(t),Ji=d(lr," for arguments to "),cs=r(lr,"EM",{});var eu=s(cs);Qi=d(eu,"forward"),eu.forEach(t),Xi=d(lr," and "),ps=r(lr,"EM",{});var tu=s(ps);Yi=d(tu,"generate"),tu.forEach(t),lr.forEach(t),Ga=c(o),Ae=r(o,"DIV",{class:!0});var No=s(Ae);y(an.$$.fragment,No),Zi=c(No),dn=r(No,"P",{});var md=s(dn);el=d(md,`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),yr=r(md,"A",{href:!0});var ou=s(yr);tl=d(ou,"PreTrainedModel"),ou.forEach(t),ol=d(md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md.forEach(t),nl=c(No),ln=r(No,"P",{});var fd=s(ln);rl=d(fd,"This model is also a PyTorch "),cn=r(fd,"A",{href:!0,rel:!0});var nu=s(cn);sl=d(nu,"torch.nn.Module"),nu.forEach(t),al=d(fd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fd.forEach(t),dl=c(No),Ue=r(No,"DIV",{class:!0});var Ao=s(Ue);y(pn.$$.fragment,Ao),il=c(Ao),Ot=r(Ao,"P",{});var Ar=s(Ot);ll=d(Ar,"The "),Tr=r(Ar,"A",{href:!0});var ru=s(Tr);cl=d(ru,"BlenderbotModel"),ru.forEach(t),pl=d(Ar," forward method, overrides the "),hs=r(Ar,"CODE",{});var su=s(hs);hl=d(su,"__call__"),su.forEach(t),ul=d(Ar," special method."),Ar.forEach(t),ml=c(Ao),y(oo.$$.fragment,Ao),fl=c(Ao),y(no.$$.fragment,Ao),Ao.forEach(t),No.forEach(t),Wa=c(o),Pt=r(o,"H2",{class:!0});var _d=s(Pt);ro=r(_d,"A",{id:!0,class:!0,href:!0});var au=s(ro);us=r(au,"SPAN",{});var du=s(us);y(hn.$$.fragment,du),du.forEach(t),au.forEach(t),_l=c(_d),ms=r(_d,"SPAN",{});var iu=s(ms);gl=d(iu,"BlenderbotForConditionalGeneration"),iu.forEach(t),_d.forEach(t),Ua=c(o),rt=r(o,"P",{});var cr=s(rt);bl=d(cr,"See "),wr=r(cr,"A",{href:!0});var lu=s(wr);vl=d(lu,"BartForConditionalGeneration"),lu.forEach(t),kl=d(cr," for arguments to "),fs=r(cr,"EM",{});var cu=s(fs);yl=d(cu,"forward"),cu.forEach(t),Tl=d(cr," and "),_s=r(cr,"EM",{});var pu=s(_s);wl=d(pu,"generate"),pu.forEach(t),cr.forEach(t),Ra=c(o),Ie=r(o,"DIV",{class:!0});var Io=s(Ie);y(un.$$.fragment,Io),$l=c(Io),mn=r(Io,"P",{});var gd=s(mn);Bl=d(gd,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),$r=r(gd,"A",{href:!0});var hu=s($r);xl=d(hu,"PreTrainedModel"),hu.forEach(t),zl=d(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd.forEach(t),Fl=c(Io),fn=r(Io,"P",{});var bd=s(fn);ql=d(bd,"This model is also a PyTorch "),_n=r(bd,"A",{href:!0,rel:!0});var uu=s(_n);El=d(uu,"torch.nn.Module"),uu.forEach(t),Ml=d(bd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bd.forEach(t),Cl=c(Io),Re=r(Io,"DIV",{class:!0});var Lo=s(Re);y(gn.$$.fragment,Lo),jl=c(Lo),Nt=r(Lo,"P",{});var Ir=s(Nt);Ol=d(Ir,"The "),Br=r(Ir,"A",{href:!0});var mu=s(Br);Pl=d(mu,"BlenderbotForConditionalGeneration"),mu.forEach(t),Nl=d(Ir," forward method, overrides the "),gs=r(Ir,"CODE",{});var fu=s(gs);Al=d(fu,"__call__"),fu.forEach(t),Il=d(Ir," special method."),Ir.forEach(t),Ll=c(Lo),y(so.$$.fragment,Lo),Sl=c(Lo),y(ao.$$.fragment,Lo),Lo.forEach(t),Io.forEach(t),Ha=c(o),At=r(o,"H2",{class:!0});var vd=s(At);io=r(vd,"A",{id:!0,class:!0,href:!0});var _u=s(io);bs=r(_u,"SPAN",{});var gu=s(bs);y(bn.$$.fragment,gu),gu.forEach(t),_u.forEach(t),Dl=c(vd),vs=r(vd,"SPAN",{});var bu=s(vs);Gl=d(bu,"BlenderbotForCausalLM"),bu.forEach(t),vd.forEach(t),Ka=c(o),It=r(o,"DIV",{class:!0});var kd=s(It);y(vn.$$.fragment,kd),Wl=c(kd),lo=r(kd,"DIV",{class:!0});var yd=s(lo);y(kn.$$.fragment,yd),Ul=c(yd),y(co.$$.fragment,yd),yd.forEach(t),kd.forEach(t),Va=c(o),Lt=r(o,"H2",{class:!0});var Td=s(Lt);po=r(Td,"A",{id:!0,class:!0,href:!0});var vu=s(po);ks=r(vu,"SPAN",{});var ku=s(ks);y(yn.$$.fragment,ku),ku.forEach(t),vu.forEach(t),Rl=c(Td),ys=r(Td,"SPAN",{});var yu=s(ys);Hl=d(yu,"TFBlenderbotModel"),yu.forEach(t),Td.forEach(t),Ja=c(o),ke=r(o,"DIV",{class:!0});var ut=s(ke);y(Tn.$$.fragment,ut),Kl=c(ut),wn=r(ut,"P",{});var wd=s(wn);Vl=d(wd,`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),xr=r(wd,"A",{href:!0});var Tu=s(xr);Jl=d(Tu,"TFPreTrainedModel"),Tu.forEach(t),Ql=d(wd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wd.forEach(t),Xl=c(ut),$n=r(ut,"P",{});var $d=s($n);Yl=d($d,"This model is also a "),Bn=r($d,"A",{href:!0,rel:!0});var wu=s(Bn);Zl=d(wu,"tf.keras.Model"),wu.forEach(t),ec=d($d,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$d.forEach(t),tc=c(ut),y(ho.$$.fragment,ut),oc=c(ut),He=r(ut,"DIV",{class:!0});var So=s(He);y(xn.$$.fragment,So),nc=c(So),St=r(So,"P",{});var Lr=s(St);rc=d(Lr,"The "),zr=r(Lr,"A",{href:!0});var $u=s(zr);sc=d($u,"TFBlenderbotModel"),$u.forEach(t),ac=d(Lr," forward method, overrides the "),Ts=r(Lr,"CODE",{});var Bu=s(Ts);dc=d(Bu,"__call__"),Bu.forEach(t),ic=d(Lr," special method."),Lr.forEach(t),lc=c(So),y(uo.$$.fragment,So),cc=c(So),y(mo.$$.fragment,So),So.forEach(t),ut.forEach(t),Qa=c(o),Dt=r(o,"H2",{class:!0});var Bd=s(Dt);fo=r(Bd,"A",{id:!0,class:!0,href:!0});var xu=s(fo);ws=r(xu,"SPAN",{});var zu=s(ws);y(zn.$$.fragment,zu),zu.forEach(t),xu.forEach(t),pc=c(Bd),$s=r(Bd,"SPAN",{});var Fu=s($s);hc=d(Fu,"TFBlenderbotForConditionalGeneration"),Fu.forEach(t),Bd.forEach(t),Xa=c(o),ye=r(o,"DIV",{class:!0});var mt=s(ye);y(Fn.$$.fragment,mt),uc=c(mt),qn=r(mt,"P",{});var xd=s(qn);mc=d(xd,`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),Fr=r(xd,"A",{href:!0});var qu=s(Fr);fc=d(qu,"TFPreTrainedModel"),qu.forEach(t),_c=d(xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xd.forEach(t),gc=c(mt),En=r(mt,"P",{});var zd=s(En);bc=d(zd,"This model is also a "),Mn=r(zd,"A",{href:!0,rel:!0});var Eu=s(Mn);vc=d(Eu,"tf.keras.Model"),Eu.forEach(t),kc=d(zd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zd.forEach(t),yc=c(mt),y(_o.$$.fragment,mt),Tc=c(mt),oe=r(mt,"DIV",{class:!0});var Ve=s(oe);y(Cn.$$.fragment,Ve),wc=c(Ve),Gt=r(Ve,"P",{});var Sr=s(Gt);$c=d(Sr,"The "),qr=r(Sr,"A",{href:!0});var Mu=s(qr);Bc=d(Mu,"TFBlenderbotForConditionalGeneration"),Mu.forEach(t),xc=d(Sr," forward method, overrides the "),Bs=r(Sr,"CODE",{});var Cu=s(Bs);zc=d(Cu,"__call__"),Cu.forEach(t),Fc=d(Sr," special method."),Sr.forEach(t),qc=c(Ve),y(go.$$.fragment,Ve),Ec=c(Ve),xs=r(Ve,"P",{});var ju=s(xs);Mc=d(ju,"Conversation example::"),ju.forEach(t),Cc=c(Ve),zs=r(Ve,"BLOCKQUOTE",{});var Ou=s(zs);Fs=r(Ou,"BLOCKQUOTE",{});var Pu=s(Fs);qs=r(Pu,"BLOCKQUOTE",{});var Nu=s(qs);Es=r(Nu,"P",{});var Au=s(Es);jc=d(Au,`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),Au.forEach(t),Nu.forEach(t),Pu.forEach(t),Ou.forEach(t),Oc=c(Ve),Ms=r(Ve,"BLOCKQUOTE",{});var Iu=s(Ms);Cs=r(Iu,"BLOCKQUOTE",{});var Lu=s(Cs);js=r(Lu,"BLOCKQUOTE",{});var Su=s(js);jn=r(Su,"P",{});var Fd=s(jn);Pc=d(Fd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Os=r(Fd,"S",{});var Du=s(Os);Nc=d(Du,`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),Du.forEach(t),Ac=d(Fd,` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Fd.forEach(t),Su.forEach(t),Lu.forEach(t),Iu.forEach(t),Ve.forEach(t),mt.forEach(t),Ya=c(o),Wt=r(o,"H2",{class:!0});var qd=s(Wt);bo=r(qd,"A",{id:!0,class:!0,href:!0});var Gu=s(bo);Ps=r(Gu,"SPAN",{});var Wu=s(Ps);y(On.$$.fragment,Wu),Wu.forEach(t),Gu.forEach(t),Ic=c(qd),Ns=r(qd,"SPAN",{});var Uu=s(Ns);Lc=d(Uu,"FlaxBlenderbotModel"),Uu.forEach(t),qd.forEach(t),Za=c(o),S=r(o,"DIV",{class:!0});var ne=s(S);y(Pn.$$.fragment,ne),Sc=c(ne),Nn=r(ne,"P",{});var Ed=s(Nn);Dc=d(Ed,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Er=r(Ed,"A",{href:!0});var Ru=s(Er);Gc=d(Ru,"FlaxPreTrainedModel"),Ru.forEach(t),Wc=d(Ed,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ed.forEach(t),Uc=c(ne),An=r(ne,"P",{});var Md=s(An);Rc=d(Md,`This model is also a Flax Linen
`),In=r(Md,"A",{href:!0,rel:!0});var Hu=s(In);Hc=d(Hu,"flax.nn.Module"),Hu.forEach(t),Kc=d(Md,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Md.forEach(t),Vc=c(ne),As=r(ne,"P",{});var Ku=s(As);Jc=d(Ku,"Finally, this model supports inherent JAX features such as:"),Ku.forEach(t),Qc=c(ne),st=r(ne,"UL",{});var Do=s(st);Is=r(Do,"LI",{});var Vu=s(Is);Ln=r(Vu,"A",{href:!0,rel:!0});var Ju=s(Ln);Xc=d(Ju,"Just-In-Time (JIT) compilation"),Ju.forEach(t),Vu.forEach(t),Yc=c(Do),Ls=r(Do,"LI",{});var Qu=s(Ls);Sn=r(Qu,"A",{href:!0,rel:!0});var Xu=s(Sn);Zc=d(Xu,"Automatic Differentiation"),Xu.forEach(t),Qu.forEach(t),ep=c(Do),Ss=r(Do,"LI",{});var Yu=s(Ss);Dn=r(Yu,"A",{href:!0,rel:!0});var Zu=s(Dn);tp=d(Zu,"Vectorization"),Zu.forEach(t),Yu.forEach(t),op=c(Do),Ds=r(Do,"LI",{});var em=s(Ds);Gn=r(em,"A",{href:!0,rel:!0});var tm=s(Gn);np=d(tm,"Parallelization"),tm.forEach(t),em.forEach(t),Do.forEach(t),rp=c(ne),Ke=r(ne,"DIV",{class:!0});var Go=s(Ke);y(Wn.$$.fragment,Go),sp=c(Go),Ut=r(Go,"P",{});var Dr=s(Ut);ap=d(Dr,"The "),Gs=r(Dr,"CODE",{});var om=s(Gs);dp=d(om,"FlaxBlenderbotPreTrainedModel"),om.forEach(t),ip=d(Dr," forward method, overrides the "),Ws=r(Dr,"CODE",{});var nm=s(Ws);lp=d(nm,"__call__"),nm.forEach(t),cp=d(Dr," special method."),Dr.forEach(t),pp=c(Go),y(vo.$$.fragment,Go),hp=c(Go),y(ko.$$.fragment,Go),Go.forEach(t),up=c(ne),yo=r(ne,"DIV",{class:!0});var Cd=s(yo);y(Un.$$.fragment,Cd),mp=c(Cd),y(To.$$.fragment,Cd),Cd.forEach(t),fp=c(ne),wo=r(ne,"DIV",{class:!0});var jd=s(wo);y(Rn.$$.fragment,jd),_p=c(jd),y($o.$$.fragment,jd),jd.forEach(t),ne.forEach(t),ed=c(o),Rt=r(o,"H2",{class:!0});var Od=s(Rt);Bo=r(Od,"A",{id:!0,class:!0,href:!0});var rm=s(Bo);Us=r(rm,"SPAN",{});var sm=s(Us);y(Hn.$$.fragment,sm),sm.forEach(t),rm.forEach(t),gp=c(Od),Rs=r(Od,"SPAN",{});var am=s(Rs);bp=d(am,"FlaxBlenderbotForConditionalGeneration"),am.forEach(t),Od.forEach(t),td=c(o),D=r(o,"DIV",{class:!0});var re=s(D);y(Kn.$$.fragment,re),vp=c(re),Vn=r(re,"P",{});var Pd=s(Vn);kp=d(Pd,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),Mr=r(Pd,"A",{href:!0});var dm=s(Mr);yp=d(dm,"FlaxPreTrainedModel"),dm.forEach(t),Tp=d(Pd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pd.forEach(t),wp=c(re),Jn=r(re,"P",{});var Nd=s(Jn);$p=d(Nd,`This model is also a Flax Linen
`),Qn=r(Nd,"A",{href:!0,rel:!0});var im=s(Qn);Bp=d(im,"flax.nn.Module"),im.forEach(t),xp=d(Nd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Nd.forEach(t),zp=c(re),Hs=r(re,"P",{});var lm=s(Hs);Fp=d(lm,"Finally, this model supports inherent JAX features such as:"),lm.forEach(t),qp=c(re),at=r(re,"UL",{});var Wo=s(at);Ks=r(Wo,"LI",{});var cm=s(Ks);Xn=r(cm,"A",{href:!0,rel:!0});var pm=s(Xn);Ep=d(pm,"Just-In-Time (JIT) compilation"),pm.forEach(t),cm.forEach(t),Mp=c(Wo),Vs=r(Wo,"LI",{});var hm=s(Vs);Yn=r(hm,"A",{href:!0,rel:!0});var um=s(Yn);Cp=d(um,"Automatic Differentiation"),um.forEach(t),hm.forEach(t),jp=c(Wo),Js=r(Wo,"LI",{});var mm=s(Js);Zn=r(mm,"A",{href:!0,rel:!0});var fm=s(Zn);Op=d(fm,"Vectorization"),fm.forEach(t),mm.forEach(t),Pp=c(Wo),Qs=r(Wo,"LI",{});var _m=s(Qs);er=r(_m,"A",{href:!0,rel:!0});var gm=s(er);Np=d(gm,"Parallelization"),gm.forEach(t),_m.forEach(t),Wo.forEach(t),Ap=c(re),W=r(re,"DIV",{class:!0});var se=s(W);y(tr.$$.fragment,se),Ip=c(se),Ht=r(se,"P",{});var Gr=s(Ht);Lp=d(Gr,"The "),Xs=r(Gr,"CODE",{});var bm=s(Xs);Sp=d(bm,"FlaxBlenderbotPreTrainedModel"),bm.forEach(t),Dp=d(Gr," forward method, overrides the "),Ys=r(Gr,"CODE",{});var vm=s(Ys);Gp=d(vm,"__call__"),vm.forEach(t),Wp=d(Gr," special method."),Gr.forEach(t),Up=c(se),y(xo.$$.fragment,se),Rp=c(se),Zs=r(se,"P",{});var km=s(Zs);Hp=d(km,"Conversation example::"),km.forEach(t),Kp=c(se),ea=r(se,"BLOCKQUOTE",{});var ym=s(ea);ta=r(ym,"BLOCKQUOTE",{});var Tm=s(ta);oa=r(Tm,"BLOCKQUOTE",{});var wm=s(oa);na=r(wm,"P",{});var $m=s(na);Vp=d($m,"from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),$m.forEach(t),wm.forEach(t),Tm.forEach(t),ym.forEach(t),Jp=c(se),ra=r(se,"BLOCKQUOTE",{});var Bm=s(ra);sa=r(Bm,"BLOCKQUOTE",{});var xm=s(sa);aa=r(xm,"BLOCKQUOTE",{});var zm=s(aa);da=r(zm,"P",{});var Fm=s(da);Qp=d(Fm,`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),Fm.forEach(t),zm.forEach(t),xm.forEach(t),Bm.forEach(t),Xp=c(se),ia=r(se,"BLOCKQUOTE",{});var qm=s(ia);la=r(qm,"BLOCKQUOTE",{});var Em=s(la);ca=r(Em,"BLOCKQUOTE",{});var Mm=s(ca);pa=r(Mm,"P",{});var Cm=s(pa);Yp=d(Cm,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),Cm.forEach(t),Mm.forEach(t),Em.forEach(t),qm.forEach(t),Zp=c(se),ha=r(se,"BLOCKQUOTE",{});var jm=s(ha);ua=r(jm,"BLOCKQUOTE",{});var Om=s(ua);or=r(Om,"BLOCKQUOTE",{});var Ad=s(or);zo=r(Ad,"H1",{class:!0});var Id=s(zo);Fo=r(Id,"A",{id:!0,class:!0,href:!0});var Pm=s(Fo);ma=r(Pm,"SPAN",{});var Nm=s(ma);y(nr.$$.fragment,Nm),Nm.forEach(t),Pm.forEach(t),eh=c(Id),fa=r(Id,"SPAN",{});var Am=s(fa);th=d(Am,"Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),Am.forEach(t),Id.forEach(t),oh=c(Ad),_a=r(Ad,"P",{});var Im=s(_a);nh=d(Im,`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),Im.forEach(t),Ad.forEach(t),Om.forEach(t),jm.forEach(t),se.forEach(t),rh=c(re),qo=r(re,"DIV",{class:!0});var Ld=s(qo);y(rr.$$.fragment,Ld),sh=c(Ld),y(Eo.$$.fragment,Ld),Ld.forEach(t),ah=c(re),Mo=r(re,"DIV",{class:!0});var Sd=s(Mo);y(sr.$$.fragment,Sd),dh=c(Sd),y(Co.$$.fragment,Sd),Sd.forEach(t),re.forEach(t),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(cf)),h(m,"id","blenderbot"),h(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(m,"href","#blenderbot"),h(g,"class","relative group"),h(ae,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),h(ae,"rel","nofollow"),h(Y,"id","overview"),h(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Y,"href","#overview"),h(I,"class","relative group"),h(ce,"href","https://arxiv.org/pdf/2004.13637.pdf"),h(ce,"rel","nofollow"),h(he,"href","https://huggingface.co/sshleifer"),h(he,"rel","nofollow"),h(me,"href","https://github.com/facebookresearch/ParlAI"),h(me,"rel","nofollow"),h(te,"id","implementation-notes"),h(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(te,"href","#implementation-notes"),h(O,"class","relative group"),h(q,"href","https://arxiv.org/pdf/1706.03762.pdf"),h(q,"rel","nofollow"),h(Oe,"href","https://huggingface.co/models?search=blenderbot"),h(Oe,"rel","nofollow"),h($e,"href","blenderbot-small"),h(Vt,"id","usage"),h(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Vt,"href","#usage"),h(zt,"class","relative group"),h(Jt,"id","transformers.BlenderbotConfig"),h(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Jt,"href","#transformers.BlenderbotConfig"),h(Ft,"class","relative group"),h(hr,"href","/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotModel"),h(Jo,"href","https://huggingface.co/facebook/blenderbot-3B"),h(Jo,"rel","nofollow"),h(ur,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),h(mr,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),h(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Xt,"id","transformers.BlenderbotTokenizer"),h(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xt,"href","#transformers.BlenderbotTokenizer"),h(Mt,"class","relative group"),h(fr,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaTokenizer"),h(_r,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaTokenizer"),h(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Zt,"id","transformers.BlenderbotTokenizerFast"),h(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Zt,"href","#transformers.BlenderbotTokenizerFast"),h(Ct,"class","relative group"),h(br,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaTokenizerFast"),h(vr,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaTokenizerFast"),h(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(to,"id","transformers.BlenderbotModel"),h(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(to,"href","#transformers.BlenderbotModel"),h(jt,"class","relative group"),h(yr,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),h(cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(cn,"rel","nofollow"),h(Tr,"href","/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotModel"),h(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ro,"id","transformers.BlenderbotForConditionalGeneration"),h(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ro,"href","#transformers.BlenderbotForConditionalGeneration"),h(Pt,"class","relative group"),h(wr,"href","/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartForConditionalGeneration"),h($r,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),h(_n,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(_n,"rel","nofollow"),h(Br,"href","/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),h(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(io,"id","transformers.BlenderbotForCausalLM"),h(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(io,"href","#transformers.BlenderbotForCausalLM"),h(At,"class","relative group"),h(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(po,"id","transformers.TFBlenderbotModel"),h(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(po,"href","#transformers.TFBlenderbotModel"),h(Lt,"class","relative group"),h(xr,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),h(Bn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Bn,"rel","nofollow"),h(zr,"href","/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.TFBlenderbotModel"),h(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(fo,"id","transformers.TFBlenderbotForConditionalGeneration"),h(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(fo,"href","#transformers.TFBlenderbotForConditionalGeneration"),h(Dt,"class","relative group"),h(Fr,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),h(Mn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Mn,"rel","nofollow"),h(qr,"href","/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.TFBlenderbotForConditionalGeneration"),h(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(bo,"id","transformers.FlaxBlenderbotModel"),h(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(bo,"href","#transformers.FlaxBlenderbotModel"),h(Wt,"class","relative group"),h(Er,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(In,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),h(In,"rel","nofollow"),h(Ln,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(Ln,"rel","nofollow"),h(Sn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(Sn,"rel","nofollow"),h(Dn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(Dn,"rel","nofollow"),h(Gn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(Gn,"rel","nofollow"),h(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Bo,"id","transformers.FlaxBlenderbotForConditionalGeneration"),h(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Bo,"href","#transformers.FlaxBlenderbotForConditionalGeneration"),h(Rt,"class","relative group"),h(Mr,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(Qn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),h(Qn,"rel","nofollow"),h(Xn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(Xn,"rel","nofollow"),h(Yn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(Yn,"rel","nofollow"),h(Zn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(Zn,"rel","nofollow"),h(er,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(er,"rel","nofollow"),h(Fo,"id","generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),h(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Fo,"href","#generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),h(zo,"class","relative group"),h(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,p),f(o,v,_),f(o,g,_),e(g,m),e(m,b),T(i,b,null),e(g,u),e(g,E),e(E,Je),f(o,Le,_),f(o,A,_),e(A,Be),e(Be,xe),e(A,F),e(A,ae),e(ae,de),e(A,Qe),f(o,Se,_),f(o,I,_),e(I,Y),e(Y,ze),T(U,ze,null),e(I,Xe),e(I,Fe),e(Fe,ie),f(o,De,_),f(o,Z,_),e(Z,le),e(Z,ce),e(ce,Ye),e(Z,qe),f(o,C,_),f(o,j,_),e(j,Ze),f(o,ee,_),f(o,we,_),e(we,Ee),e(Ee,pe),f(o,Ge,_),f(o,R,_),e(R,L),e(R,he),e(he,ue),e(R,et),e(R,me),e(me,fe),e(R,tt),f(o,We,_),f(o,O,_),e(O,te),e(te,K),T(_e,K,null),e(O,Me),e(O,P),e(P,ot),f(o,G,_),f(o,H,_),e(H,ge),e(ge,x),e(ge,q),e(q,gt),e(ge,Ce),e(H,bt),e(H,je),e(je,M),e(je,Oe),e(Oe,vt),e(je,kt),e(H,yt),e(H,V),e(V,J),e(V,Q),e(Q,Tt),e(V,wt),e(V,X),e(X,$t),e(V,Bt),e(V,$e),e($e,xt),e(V,Pe),f(o,it,_),f(o,zt,_),e(zt,Vt),e(Vt,Wr),T(Ro,Wr,null),e(zt,Dd),e(zt,Ur),e(Ur,Gd),f(o,Ca,_),f(o,pr,_),e(pr,Wd),f(o,ja,_),T(Ho,o,_),f(o,Oa,_),f(o,Ft,_),e(Ft,Jt),e(Jt,Rr),T(Ko,Rr,null),e(Ft,Ud),e(Ft,Hr),e(Hr,Rd),f(o,Pa,_),f(o,Ne,_),T(Vo,Ne,null),e(Ne,Hd),e(Ne,qt),e(qt,Kd),e(qt,hr),e(hr,Vd),e(qt,Jd),e(qt,Jo),e(Jo,Qd),e(qt,Xd),e(Ne,Yd),e(Ne,Et),e(Et,Zd),e(Et,ur),e(ur,ei),e(Et,ti),e(Et,mr),e(mr,oi),e(Et,ni),e(Ne,ri),T(Qt,Ne,null),f(o,Na,_),f(o,Mt,_),e(Mt,Xt),e(Xt,Kr),T(Qo,Kr,null),e(Mt,si),e(Mt,Vr),e(Vr,ai),f(o,Aa,_),f(o,be,_),T(Xo,be,null),e(be,di),e(be,Jr),e(Jr,ii),e(be,li),e(be,Yt),e(Yt,Qr),e(Qr,ci),e(Yt,pi),e(Yt,fr),e(fr,hi),e(Yt,ui),e(be,mi),e(be,Yo),e(Yo,fi),e(Yo,_r),e(_r,_i),e(Yo,gi),e(be,bi),e(be,lt),T(Zo,lt,null),e(lt,vi),e(lt,Xr),e(Xr,ki),e(lt,yi),e(lt,Yr),e(Yr,gr),e(gr,Ti),e(gr,Zr),e(Zr,wi),f(o,Ia,_),f(o,Ct,_),e(Ct,Zt),e(Zt,es),T(en,es,null),e(Ct,$i),e(Ct,ts),e(ts,Bi),f(o,La,_),f(o,ve,_),T(tn,ve,null),e(ve,xi),e(ve,on),e(on,zi),e(on,os),e(os,Fi),e(on,qi),e(ve,Ei),e(ve,eo),e(eo,ns),e(ns,Mi),e(eo,Ci),e(eo,br),e(br,ji),e(eo,Oi),e(ve,Pi),e(ve,nn),e(nn,Ni),e(nn,vr),e(vr,Ai),e(nn,Ii),e(ve,Li),e(ve,ct),T(rn,ct,null),e(ct,Si),e(ct,rs),e(rs,Di),e(ct,Gi),e(ct,ss),e(ss,kr),e(kr,Wi),e(kr,as),e(as,Ui),f(o,Sa,_),f(o,jt,_),e(jt,to),e(to,ds),T(sn,ds,null),e(jt,Ri),e(jt,is),e(is,Hi),f(o,Da,_),f(o,nt,_),e(nt,Ki),e(nt,ls),e(ls,Vi),e(nt,Ji),e(nt,cs),e(cs,Qi),e(nt,Xi),e(nt,ps),e(ps,Yi),f(o,Ga,_),f(o,Ae,_),T(an,Ae,null),e(Ae,Zi),e(Ae,dn),e(dn,el),e(dn,yr),e(yr,tl),e(dn,ol),e(Ae,nl),e(Ae,ln),e(ln,rl),e(ln,cn),e(cn,sl),e(ln,al),e(Ae,dl),e(Ae,Ue),T(pn,Ue,null),e(Ue,il),e(Ue,Ot),e(Ot,ll),e(Ot,Tr),e(Tr,cl),e(Ot,pl),e(Ot,hs),e(hs,hl),e(Ot,ul),e(Ue,ml),T(oo,Ue,null),e(Ue,fl),T(no,Ue,null),f(o,Wa,_),f(o,Pt,_),e(Pt,ro),e(ro,us),T(hn,us,null),e(Pt,_l),e(Pt,ms),e(ms,gl),f(o,Ua,_),f(o,rt,_),e(rt,bl),e(rt,wr),e(wr,vl),e(rt,kl),e(rt,fs),e(fs,yl),e(rt,Tl),e(rt,_s),e(_s,wl),f(o,Ra,_),f(o,Ie,_),T(un,Ie,null),e(Ie,$l),e(Ie,mn),e(mn,Bl),e(mn,$r),e($r,xl),e(mn,zl),e(Ie,Fl),e(Ie,fn),e(fn,ql),e(fn,_n),e(_n,El),e(fn,Ml),e(Ie,Cl),e(Ie,Re),T(gn,Re,null),e(Re,jl),e(Re,Nt),e(Nt,Ol),e(Nt,Br),e(Br,Pl),e(Nt,Nl),e(Nt,gs),e(gs,Al),e(Nt,Il),e(Re,Ll),T(so,Re,null),e(Re,Sl),T(ao,Re,null),f(o,Ha,_),f(o,At,_),e(At,io),e(io,bs),T(bn,bs,null),e(At,Dl),e(At,vs),e(vs,Gl),f(o,Ka,_),f(o,It,_),T(vn,It,null),e(It,Wl),e(It,lo),T(kn,lo,null),e(lo,Ul),T(co,lo,null),f(o,Va,_),f(o,Lt,_),e(Lt,po),e(po,ks),T(yn,ks,null),e(Lt,Rl),e(Lt,ys),e(ys,Hl),f(o,Ja,_),f(o,ke,_),T(Tn,ke,null),e(ke,Kl),e(ke,wn),e(wn,Vl),e(wn,xr),e(xr,Jl),e(wn,Ql),e(ke,Xl),e(ke,$n),e($n,Yl),e($n,Bn),e(Bn,Zl),e($n,ec),e(ke,tc),T(ho,ke,null),e(ke,oc),e(ke,He),T(xn,He,null),e(He,nc),e(He,St),e(St,rc),e(St,zr),e(zr,sc),e(St,ac),e(St,Ts),e(Ts,dc),e(St,ic),e(He,lc),T(uo,He,null),e(He,cc),T(mo,He,null),f(o,Qa,_),f(o,Dt,_),e(Dt,fo),e(fo,ws),T(zn,ws,null),e(Dt,pc),e(Dt,$s),e($s,hc),f(o,Xa,_),f(o,ye,_),T(Fn,ye,null),e(ye,uc),e(ye,qn),e(qn,mc),e(qn,Fr),e(Fr,fc),e(qn,_c),e(ye,gc),e(ye,En),e(En,bc),e(En,Mn),e(Mn,vc),e(En,kc),e(ye,yc),T(_o,ye,null),e(ye,Tc),e(ye,oe),T(Cn,oe,null),e(oe,wc),e(oe,Gt),e(Gt,$c),e(Gt,qr),e(qr,Bc),e(Gt,xc),e(Gt,Bs),e(Bs,zc),e(Gt,Fc),e(oe,qc),T(go,oe,null),e(oe,Ec),e(oe,xs),e(xs,Mc),e(oe,Cc),e(oe,zs),e(zs,Fs),e(Fs,qs),e(qs,Es),e(Es,jc),e(oe,Oc),e(oe,Ms),e(Ms,Cs),e(Cs,js),e(js,jn),e(jn,Pc),e(jn,Os),e(Os,Nc),e(jn,Ac),f(o,Ya,_),f(o,Wt,_),e(Wt,bo),e(bo,Ps),T(On,Ps,null),e(Wt,Ic),e(Wt,Ns),e(Ns,Lc),f(o,Za,_),f(o,S,_),T(Pn,S,null),e(S,Sc),e(S,Nn),e(Nn,Dc),e(Nn,Er),e(Er,Gc),e(Nn,Wc),e(S,Uc),e(S,An),e(An,Rc),e(An,In),e(In,Hc),e(An,Kc),e(S,Vc),e(S,As),e(As,Jc),e(S,Qc),e(S,st),e(st,Is),e(Is,Ln),e(Ln,Xc),e(st,Yc),e(st,Ls),e(Ls,Sn),e(Sn,Zc),e(st,ep),e(st,Ss),e(Ss,Dn),e(Dn,tp),e(st,op),e(st,Ds),e(Ds,Gn),e(Gn,np),e(S,rp),e(S,Ke),T(Wn,Ke,null),e(Ke,sp),e(Ke,Ut),e(Ut,ap),e(Ut,Gs),e(Gs,dp),e(Ut,ip),e(Ut,Ws),e(Ws,lp),e(Ut,cp),e(Ke,pp),T(vo,Ke,null),e(Ke,hp),T(ko,Ke,null),e(S,up),e(S,yo),T(Un,yo,null),e(yo,mp),T(To,yo,null),e(S,fp),e(S,wo),T(Rn,wo,null),e(wo,_p),T($o,wo,null),f(o,ed,_),f(o,Rt,_),e(Rt,Bo),e(Bo,Us),T(Hn,Us,null),e(Rt,gp),e(Rt,Rs),e(Rs,bp),f(o,td,_),f(o,D,_),T(Kn,D,null),e(D,vp),e(D,Vn),e(Vn,kp),e(Vn,Mr),e(Mr,yp),e(Vn,Tp),e(D,wp),e(D,Jn),e(Jn,$p),e(Jn,Qn),e(Qn,Bp),e(Jn,xp),e(D,zp),e(D,Hs),e(Hs,Fp),e(D,qp),e(D,at),e(at,Ks),e(Ks,Xn),e(Xn,Ep),e(at,Mp),e(at,Vs),e(Vs,Yn),e(Yn,Cp),e(at,jp),e(at,Js),e(Js,Zn),e(Zn,Op),e(at,Pp),e(at,Qs),e(Qs,er),e(er,Np),e(D,Ap),e(D,W),T(tr,W,null),e(W,Ip),e(W,Ht),e(Ht,Lp),e(Ht,Xs),e(Xs,Sp),e(Ht,Dp),e(Ht,Ys),e(Ys,Gp),e(Ht,Wp),e(W,Up),T(xo,W,null),e(W,Rp),e(W,Zs),e(Zs,Hp),e(W,Kp),e(W,ea),e(ea,ta),e(ta,oa),e(oa,na),e(na,Vp),e(W,Jp),e(W,ra),e(ra,sa),e(sa,aa),e(aa,da),e(da,Qp),e(W,Xp),e(W,ia),e(ia,la),e(la,ca),e(ca,pa),e(pa,Yp),e(W,Zp),e(W,ha),e(ha,ua),e(ua,or),e(or,zo),e(zo,Fo),e(Fo,ma),T(nr,ma,null),e(zo,eh),e(zo,fa),e(fa,th),e(or,oh),e(or,_a),e(_a,nh),e(D,rh),e(D,qo),T(rr,qo,null),e(qo,sh),T(Eo,qo,null),e(D,ah),e(D,Mo),T(sr,Mo,null),e(Mo,dh),T(Co,Mo,null),od=!0},p(o,[_]){const ar={};_&2&&(ar.$$scope={dirty:_,ctx:o}),Qt.$set(ar);const ga={};_&2&&(ga.$$scope={dirty:_,ctx:o}),oo.$set(ga);const ba={};_&2&&(ba.$$scope={dirty:_,ctx:o}),no.$set(ba);const va={};_&2&&(va.$$scope={dirty:_,ctx:o}),so.$set(va);const jo={};_&2&&(jo.$$scope={dirty:_,ctx:o}),ao.$set(jo);const ka={};_&2&&(ka.$$scope={dirty:_,ctx:o}),co.$set(ka);const ya={};_&2&&(ya.$$scope={dirty:_,ctx:o}),ho.$set(ya);const dr={};_&2&&(dr.$$scope={dirty:_,ctx:o}),uo.$set(dr);const Ta={};_&2&&(Ta.$$scope={dirty:_,ctx:o}),mo.$set(Ta);const wa={};_&2&&(wa.$$scope={dirty:_,ctx:o}),_o.$set(wa);const $a={};_&2&&($a.$$scope={dirty:_,ctx:o}),go.$set($a);const ir={};_&2&&(ir.$$scope={dirty:_,ctx:o}),vo.$set(ir);const Ba={};_&2&&(Ba.$$scope={dirty:_,ctx:o}),ko.$set(Ba);const xa={};_&2&&(xa.$$scope={dirty:_,ctx:o}),To.$set(xa);const za={};_&2&&(za.$$scope={dirty:_,ctx:o}),$o.$set(za);const Fa={};_&2&&(Fa.$$scope={dirty:_,ctx:o}),xo.$set(Fa);const Kt={};_&2&&(Kt.$$scope={dirty:_,ctx:o}),Eo.$set(Kt);const qa={};_&2&&(qa.$$scope={dirty:_,ctx:o}),Co.$set(qa)},i(o){od||(w(i.$$.fragment,o),w(U.$$.fragment,o),w(_e.$$.fragment,o),w(Ro.$$.fragment,o),w(Ho.$$.fragment,o),w(Ko.$$.fragment,o),w(Vo.$$.fragment,o),w(Qt.$$.fragment,o),w(Qo.$$.fragment,o),w(Xo.$$.fragment,o),w(Zo.$$.fragment,o),w(en.$$.fragment,o),w(tn.$$.fragment,o),w(rn.$$.fragment,o),w(sn.$$.fragment,o),w(an.$$.fragment,o),w(pn.$$.fragment,o),w(oo.$$.fragment,o),w(no.$$.fragment,o),w(hn.$$.fragment,o),w(un.$$.fragment,o),w(gn.$$.fragment,o),w(so.$$.fragment,o),w(ao.$$.fragment,o),w(bn.$$.fragment,o),w(vn.$$.fragment,o),w(kn.$$.fragment,o),w(co.$$.fragment,o),w(yn.$$.fragment,o),w(Tn.$$.fragment,o),w(ho.$$.fragment,o),w(xn.$$.fragment,o),w(uo.$$.fragment,o),w(mo.$$.fragment,o),w(zn.$$.fragment,o),w(Fn.$$.fragment,o),w(_o.$$.fragment,o),w(Cn.$$.fragment,o),w(go.$$.fragment,o),w(On.$$.fragment,o),w(Pn.$$.fragment,o),w(Wn.$$.fragment,o),w(vo.$$.fragment,o),w(ko.$$.fragment,o),w(Un.$$.fragment,o),w(To.$$.fragment,o),w(Rn.$$.fragment,o),w($o.$$.fragment,o),w(Hn.$$.fragment,o),w(Kn.$$.fragment,o),w(tr.$$.fragment,o),w(xo.$$.fragment,o),w(nr.$$.fragment,o),w(rr.$$.fragment,o),w(Eo.$$.fragment,o),w(sr.$$.fragment,o),w(Co.$$.fragment,o),od=!0)},o(o){$(i.$$.fragment,o),$(U.$$.fragment,o),$(_e.$$.fragment,o),$(Ro.$$.fragment,o),$(Ho.$$.fragment,o),$(Ko.$$.fragment,o),$(Vo.$$.fragment,o),$(Qt.$$.fragment,o),$(Qo.$$.fragment,o),$(Xo.$$.fragment,o),$(Zo.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(rn.$$.fragment,o),$(sn.$$.fragment,o),$(an.$$.fragment,o),$(pn.$$.fragment,o),$(oo.$$.fragment,o),$(no.$$.fragment,o),$(hn.$$.fragment,o),$(un.$$.fragment,o),$(gn.$$.fragment,o),$(so.$$.fragment,o),$(ao.$$.fragment,o),$(bn.$$.fragment,o),$(vn.$$.fragment,o),$(kn.$$.fragment,o),$(co.$$.fragment,o),$(yn.$$.fragment,o),$(Tn.$$.fragment,o),$(ho.$$.fragment,o),$(xn.$$.fragment,o),$(uo.$$.fragment,o),$(mo.$$.fragment,o),$(zn.$$.fragment,o),$(Fn.$$.fragment,o),$(_o.$$.fragment,o),$(Cn.$$.fragment,o),$(go.$$.fragment,o),$(On.$$.fragment,o),$(Pn.$$.fragment,o),$(Wn.$$.fragment,o),$(vo.$$.fragment,o),$(ko.$$.fragment,o),$(Un.$$.fragment,o),$(To.$$.fragment,o),$(Rn.$$.fragment,o),$($o.$$.fragment,o),$(Hn.$$.fragment,o),$(Kn.$$.fragment,o),$(tr.$$.fragment,o),$(xo.$$.fragment,o),$(nr.$$.fragment,o),$(rr.$$.fragment,o),$(Eo.$$.fragment,o),$(sr.$$.fragment,o),$(Co.$$.fragment,o),od=!1},d(o){t(p),o&&t(v),o&&t(g),B(i),o&&t(Le),o&&t(A),o&&t(Se),o&&t(I),B(U),o&&t(De),o&&t(Z),o&&t(C),o&&t(j),o&&t(ee),o&&t(we),o&&t(Ge),o&&t(R),o&&t(We),o&&t(O),B(_e),o&&t(G),o&&t(H),o&&t(it),o&&t(zt),B(Ro),o&&t(Ca),o&&t(pr),o&&t(ja),B(Ho,o),o&&t(Oa),o&&t(Ft),B(Ko),o&&t(Pa),o&&t(Ne),B(Vo),B(Qt),o&&t(Na),o&&t(Mt),B(Qo),o&&t(Aa),o&&t(be),B(Xo),B(Zo),o&&t(Ia),o&&t(Ct),B(en),o&&t(La),o&&t(ve),B(tn),B(rn),o&&t(Sa),o&&t(jt),B(sn),o&&t(Da),o&&t(nt),o&&t(Ga),o&&t(Ae),B(an),B(pn),B(oo),B(no),o&&t(Wa),o&&t(Pt),B(hn),o&&t(Ua),o&&t(rt),o&&t(Ra),o&&t(Ie),B(un),B(gn),B(so),B(ao),o&&t(Ha),o&&t(At),B(bn),o&&t(Ka),o&&t(It),B(vn),B(kn),B(co),o&&t(Va),o&&t(Lt),B(yn),o&&t(Ja),o&&t(ke),B(Tn),B(ho),B(xn),B(uo),B(mo),o&&t(Qa),o&&t(Dt),B(zn),o&&t(Xa),o&&t(ye),B(Fn),B(_o),B(Cn),B(go),o&&t(Ya),o&&t(Wt),B(On),o&&t(Za),o&&t(S),B(Pn),B(Wn),B(vo),B(ko),B(Un),B(To),B(Rn),B($o),o&&t(ed),o&&t(Rt),B(Hn),o&&t(td),o&&t(D),B(Kn),B(tr),B(xo),B(nr),B(rr),B(Eo),B(sr),B(Co)}}}const cf={local:"blenderbot",sections:[{local:"overview",title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage",title:"Usage"},{local:"transformers.BlenderbotConfig",title:"BlenderbotConfig"},{local:"transformers.BlenderbotTokenizer",title:"BlenderbotTokenizer"},{local:"transformers.BlenderbotTokenizerFast",title:"BlenderbotTokenizerFast"},{local:"transformers.BlenderbotModel",title:"BlenderbotModel"},{local:"transformers.BlenderbotForConditionalGeneration",title:"BlenderbotForConditionalGeneration"},{local:"transformers.BlenderbotForCausalLM",title:"BlenderbotForCausalLM"},{local:"transformers.TFBlenderbotModel",title:"TFBlenderbotModel"},{local:"transformers.TFBlenderbotForConditionalGeneration",title:"TFBlenderbotForConditionalGeneration"},{local:"transformers.FlaxBlenderbotModel",title:"FlaxBlenderbotModel"},{local:"transformers.FlaxBlenderbotForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot"};function pf(z){return Wm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class bf extends Lm{constructor(p){super();Sm(this,p,pf,lf,Dm,{})}}export{bf as default,cf as metadata};
