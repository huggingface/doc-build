import{S as Lm,i as Sm,s as Dm,e as n,k as l,w as k,t as s,M as Gm,c as a,d as t,m as c,a as r,x as v,h as d,b as h,G as e,g as f,y as T,q as w,o as $,B as x,v as Wm,L as _t}from"../../chunks/vendor-hf-doc-builder.js";import{T as Uo}from"../../chunks/Tip-hf-doc-builder.js";import{D as N}from"../../chunks/Docstring-hf-doc-builder.js";import{C as dt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Te}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ft}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Um(F){let p,y,g,m,b;return m=new dt({props:{code:`from transformers import BlenderbotModel, BlenderbotConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),y=s("Example:"),g=l(),k(m.$$.fragment)},l(i){p=a(i,"P",{});var u=r(p);y=d(u,"Example:"),u.forEach(t),g=c(i),v(m.$$.fragment,i)},m(i,u){f(i,p,u),e(p,y),f(i,g,u),T(m,i,u),b=!0},p:_t,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(m,i)}}}function Rm(F){let p,y,g,m,b;return{c(){p=n("p"),y=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=a(i,"P",{});var u=r(p);y=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(u,"CODE",{});var E=r(g);m=d(E,"Module"),E.forEach(t),b=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(i,u){f(i,p,u),e(p,y),e(p,g),e(g,m),e(p,b)},d(i){i&&t(p)}}}function Hm(F){let p,y,g,m,b;return m=new dt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotModel

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
[<span class="hljs-number">1</span>, <span class="hljs-number">6</span>, <span class="hljs-number">1280</span>]`}}),{c(){p=n("p"),y=s("Example:"),g=l(),k(m.$$.fragment)},l(i){p=a(i,"P",{});var u=r(p);y=d(u,"Example:"),u.forEach(t),g=c(i),v(m.$$.fragment,i)},m(i,u){f(i,p,u),e(p,y),f(i,g,u),T(m,i,u),b=!0},p:_t,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(m,i)}}}function Vm(F){let p,y,g,m,b;return{c(){p=n("p"),y=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=a(i,"P",{});var u=r(p);y=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(u,"CODE",{});var E=r(g);m=d(E,"Module"),E.forEach(t),b=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(i,u){f(i,p,u),e(p,y),e(p,g),e(g,m),e(p,b)},d(i){i&&t(p)}}}function Km(F){let p,y,g,m,b;return m=new dt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

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
Bot:   That&#x27;s too bad. Have you tried encouraging them to change their eating habits?</span>`}}),{c(){p=n("p"),y=s("Conversation example:"),g=l(),k(m.$$.fragment)},l(i){p=a(i,"P",{});var u=r(p);y=d(u,"Conversation example:"),u.forEach(t),g=c(i),v(m.$$.fragment,i)},m(i,u){f(i,p,u),e(p,y),f(i,g,u),T(m,i,u),b=!0},p:_t,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(m,i)}}}function Jm(F){let p,y,g,m,b;return m=new dt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){p=n("p"),y=s("Example:"),g=l(),k(m.$$.fragment)},l(i){p=a(i,"P",{});var u=r(p);y=d(u,"Example:"),u.forEach(t),g=c(i),v(m.$$.fragment,i)},m(i,u){f(i,p,u),e(p,y),f(i,g,u),T(m,i,u),b=!0},p:_t,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(m,i)}}}function Qm(F){let p,y,g,m,b,i,u,E,Je,Le,A,xe,Be,z,se,de,Qe,Se,I,Y,Fe,U,Xe,ze,ie,De,Z,le,ce,Ye,qe,C,j,Ze,ee,we,Ee,pe,Ge,R,L,he,ue,et,me,fe,tt,We,O,te,V,_e,Me,P,ot,G,H,ge;return{c(){p=n("p"),y=s("TensorFlow models and layers in "),g=n("code"),m=s("transformers"),b=s(" accept two formats as input:"),i=l(),u=n("ul"),E=n("li"),Je=s("having all inputs as keyword arguments (like PyTorch models), or"),Le=l(),A=n("li"),xe=s("having all inputs as a list, tuple or dict in the first positional argument."),Be=l(),z=n("p"),se=s(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),de=n("code"),Qe=s("model.fit()"),Se=s(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=n("code"),Y=s("model.fit()"),Fe=s(` supports! If, however, you want to use the second
format outside of Keras methods like `),U=n("code"),Xe=s("fit()"),ze=s(" and "),ie=n("code"),De=s("predict()"),Z=s(`, such as when creating your own layers or models with
the Keras `),le=n("code"),ce=s("Functional"),Ye=s(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),qe=l(),C=n("ul"),j=n("li"),Ze=s("a single Tensor with "),ee=n("code"),we=s("input_ids"),Ee=s(" only and nothing else: "),pe=n("code"),Ge=s("model(input_ids)"),R=l(),L=n("li"),he=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ue=n("code"),et=s("model([input_ids, attention_mask])"),me=s(" or "),fe=n("code"),tt=s("model([input_ids, attention_mask, token_type_ids])"),We=l(),O=n("li"),te=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),_e=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me=l(),P=n("p"),ot=s(`Note that when creating models and layers with
`),G=n("a"),H=s("subclassing"),ge=s(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(B){p=a(B,"P",{});var q=r(p);y=d(q,"TensorFlow models and layers in "),g=a(q,"CODE",{});var gt=r(g);m=d(gt,"transformers"),gt.forEach(t),b=d(q," accept two formats as input:"),q.forEach(t),i=c(B),u=a(B,"UL",{});var Ce=r(u);E=a(Ce,"LI",{});var bt=r(E);Je=d(bt,"having all inputs as keyword arguments (like PyTorch models), or"),bt.forEach(t),Le=c(Ce),A=a(Ce,"LI",{});var je=r(A);xe=d(je,"having all inputs as a list, tuple or dict in the first positional argument."),je.forEach(t),Ce.forEach(t),Be=c(B),z=a(B,"P",{});var M=r(z);se=d(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),de=a(M,"CODE",{});var Oe=r(de);Qe=d(Oe,"model.fit()"),Oe.forEach(t),Se=d(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a(M,"CODE",{});var yt=r(I);Y=d(yt,"model.fit()"),yt.forEach(t),Fe=d(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),U=a(M,"CODE",{});var kt=r(U);Xe=d(kt,"fit()"),kt.forEach(t),ze=d(M," and "),ie=a(M,"CODE",{});var vt=r(ie);De=d(vt,"predict()"),vt.forEach(t),Z=d(M,`, such as when creating your own layers or models with
the Keras `),le=a(M,"CODE",{});var K=r(le);ce=d(K,"Functional"),K.forEach(t),Ye=d(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),qe=c(B),C=a(B,"UL",{});var J=r(C);j=a(J,"LI",{});var Q=r(j);Ze=d(Q,"a single Tensor with "),ee=a(Q,"CODE",{});var Tt=r(ee);we=d(Tt,"input_ids"),Tt.forEach(t),Ee=d(Q," only and nothing else: "),pe=a(Q,"CODE",{});var wt=r(pe);Ge=d(wt,"model(input_ids)"),wt.forEach(t),Q.forEach(t),R=c(J),L=a(J,"LI",{});var X=r(L);he=d(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ue=a(X,"CODE",{});var $t=r(ue);et=d($t,"model([input_ids, attention_mask])"),$t.forEach(t),me=d(X," or "),fe=a(X,"CODE",{});var xt=r(fe);tt=d(xt,"model([input_ids, attention_mask, token_type_ids])"),xt.forEach(t),X.forEach(t),We=c(J),O=a(J,"LI",{});var $e=r(O);te=d($e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a($e,"CODE",{});var Bt=r(V);_e=d(Bt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Bt.forEach(t),$e.forEach(t),J.forEach(t),Me=c(B),P=a(B,"P",{});var Pe=r(P);ot=d(Pe,`Note that when creating models and layers with
`),G=a(Pe,"A",{href:!0,rel:!0});var it=r(G);H=d(it,"subclassing"),it.forEach(t),ge=d(Pe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Pe.forEach(t),this.h()},h(){h(G,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(G,"rel","nofollow")},m(B,q){f(B,p,q),e(p,y),e(p,g),e(g,m),e(p,b),f(B,i,q),f(B,u,q),e(u,E),e(E,Je),e(u,Le),e(u,A),e(A,xe),f(B,Be,q),f(B,z,q),e(z,se),e(z,de),e(de,Qe),e(z,Se),e(z,I),e(I,Y),e(z,Fe),e(z,U),e(U,Xe),e(z,ze),e(z,ie),e(ie,De),e(z,Z),e(z,le),e(le,ce),e(z,Ye),f(B,qe,q),f(B,C,q),e(C,j),e(j,Ze),e(j,ee),e(ee,we),e(j,Ee),e(j,pe),e(pe,Ge),e(C,R),e(C,L),e(L,he),e(L,ue),e(ue,et),e(L,me),e(L,fe),e(fe,tt),e(C,We),e(C,O),e(O,te),e(O,V),e(V,_e),f(B,Me,q),f(B,P,q),e(P,ot),e(P,G),e(G,H),e(P,ge)},d(B){B&&t(p),B&&t(i),B&&t(u),B&&t(Be),B&&t(z),B&&t(qe),B&&t(C),B&&t(Me),B&&t(P)}}}function Xm(F){let p,y,g,m,b;return{c(){p=n("p"),y=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=a(i,"P",{});var u=r(p);y=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(u,"CODE",{});var E=r(g);m=d(E,"Module"),E.forEach(t),b=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(i,u){f(i,p,u),e(p,y),e(p,g),e(g,m),e(p,b)},d(i){i&&t(p)}}}function Ym(F){let p,y,g,m,b;return m=new dt({props:{code:`from transformers import BlenderbotTokenizer, TFBlenderbotModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),y=s("Example:"),g=l(),k(m.$$.fragment)},l(i){p=a(i,"P",{});var u=r(p);y=d(u,"Example:"),u.forEach(t),g=c(i),v(m.$$.fragment,i)},m(i,u){f(i,p,u),e(p,y),f(i,g,u),T(m,i,u),b=!0},p:_t,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(m,i)}}}function Zm(F){let p,y,g,m,b,i,u,E,Je,Le,A,xe,Be,z,se,de,Qe,Se,I,Y,Fe,U,Xe,ze,ie,De,Z,le,ce,Ye,qe,C,j,Ze,ee,we,Ee,pe,Ge,R,L,he,ue,et,me,fe,tt,We,O,te,V,_e,Me,P,ot,G,H,ge;return{c(){p=n("p"),y=s("TensorFlow models and layers in "),g=n("code"),m=s("transformers"),b=s(" accept two formats as input:"),i=l(),u=n("ul"),E=n("li"),Je=s("having all inputs as keyword arguments (like PyTorch models), or"),Le=l(),A=n("li"),xe=s("having all inputs as a list, tuple or dict in the first positional argument."),Be=l(),z=n("p"),se=s(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),de=n("code"),Qe=s("model.fit()"),Se=s(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=n("code"),Y=s("model.fit()"),Fe=s(` supports! If, however, you want to use the second
format outside of Keras methods like `),U=n("code"),Xe=s("fit()"),ze=s(" and "),ie=n("code"),De=s("predict()"),Z=s(`, such as when creating your own layers or models with
the Keras `),le=n("code"),ce=s("Functional"),Ye=s(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),qe=l(),C=n("ul"),j=n("li"),Ze=s("a single Tensor with "),ee=n("code"),we=s("input_ids"),Ee=s(" only and nothing else: "),pe=n("code"),Ge=s("model(input_ids)"),R=l(),L=n("li"),he=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ue=n("code"),et=s("model([input_ids, attention_mask])"),me=s(" or "),fe=n("code"),tt=s("model([input_ids, attention_mask, token_type_ids])"),We=l(),O=n("li"),te=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),_e=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me=l(),P=n("p"),ot=s(`Note that when creating models and layers with
`),G=n("a"),H=s("subclassing"),ge=s(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(B){p=a(B,"P",{});var q=r(p);y=d(q,"TensorFlow models and layers in "),g=a(q,"CODE",{});var gt=r(g);m=d(gt,"transformers"),gt.forEach(t),b=d(q," accept two formats as input:"),q.forEach(t),i=c(B),u=a(B,"UL",{});var Ce=r(u);E=a(Ce,"LI",{});var bt=r(E);Je=d(bt,"having all inputs as keyword arguments (like PyTorch models), or"),bt.forEach(t),Le=c(Ce),A=a(Ce,"LI",{});var je=r(A);xe=d(je,"having all inputs as a list, tuple or dict in the first positional argument."),je.forEach(t),Ce.forEach(t),Be=c(B),z=a(B,"P",{});var M=r(z);se=d(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),de=a(M,"CODE",{});var Oe=r(de);Qe=d(Oe,"model.fit()"),Oe.forEach(t),Se=d(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a(M,"CODE",{});var yt=r(I);Y=d(yt,"model.fit()"),yt.forEach(t),Fe=d(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),U=a(M,"CODE",{});var kt=r(U);Xe=d(kt,"fit()"),kt.forEach(t),ze=d(M," and "),ie=a(M,"CODE",{});var vt=r(ie);De=d(vt,"predict()"),vt.forEach(t),Z=d(M,`, such as when creating your own layers or models with
the Keras `),le=a(M,"CODE",{});var K=r(le);ce=d(K,"Functional"),K.forEach(t),Ye=d(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),qe=c(B),C=a(B,"UL",{});var J=r(C);j=a(J,"LI",{});var Q=r(j);Ze=d(Q,"a single Tensor with "),ee=a(Q,"CODE",{});var Tt=r(ee);we=d(Tt,"input_ids"),Tt.forEach(t),Ee=d(Q," only and nothing else: "),pe=a(Q,"CODE",{});var wt=r(pe);Ge=d(wt,"model(input_ids)"),wt.forEach(t),Q.forEach(t),R=c(J),L=a(J,"LI",{});var X=r(L);he=d(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ue=a(X,"CODE",{});var $t=r(ue);et=d($t,"model([input_ids, attention_mask])"),$t.forEach(t),me=d(X," or "),fe=a(X,"CODE",{});var xt=r(fe);tt=d(xt,"model([input_ids, attention_mask, token_type_ids])"),xt.forEach(t),X.forEach(t),We=c(J),O=a(J,"LI",{});var $e=r(O);te=d($e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a($e,"CODE",{});var Bt=r(V);_e=d(Bt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Bt.forEach(t),$e.forEach(t),J.forEach(t),Me=c(B),P=a(B,"P",{});var Pe=r(P);ot=d(Pe,`Note that when creating models and layers with
`),G=a(Pe,"A",{href:!0,rel:!0});var it=r(G);H=d(it,"subclassing"),it.forEach(t),ge=d(Pe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Pe.forEach(t),this.h()},h(){h(G,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(G,"rel","nofollow")},m(B,q){f(B,p,q),e(p,y),e(p,g),e(g,m),e(p,b),f(B,i,q),f(B,u,q),e(u,E),e(E,Je),e(u,Le),e(u,A),e(A,xe),f(B,Be,q),f(B,z,q),e(z,se),e(z,de),e(de,Qe),e(z,Se),e(z,I),e(I,Y),e(z,Fe),e(z,U),e(U,Xe),e(z,ze),e(z,ie),e(ie,De),e(z,Z),e(z,le),e(le,ce),e(z,Ye),f(B,qe,q),f(B,C,q),e(C,j),e(j,Ze),e(j,ee),e(ee,we),e(j,Ee),e(j,pe),e(pe,Ge),e(C,R),e(C,L),e(L,he),e(L,ue),e(ue,et),e(L,me),e(L,fe),e(fe,tt),e(C,We),e(C,O),e(O,te),e(O,V),e(V,_e),f(B,Me,q),f(B,P,q),e(P,ot),e(P,G),e(G,H),e(P,ge)},d(B){B&&t(p),B&&t(i),B&&t(u),B&&t(Be),B&&t(z),B&&t(qe),B&&t(C),B&&t(Me),B&&t(P)}}}function ef(F){let p,y,g,m,b;return{c(){p=n("p"),y=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=a(i,"P",{});var u=r(p);y=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(u,"CODE",{});var E=r(g);m=d(E,"Module"),E.forEach(t),b=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(i,u){f(i,p,u),e(p,y),e(p,g),e(g,m),e(p,b)},d(i){i&&t(p)}}}function tf(F){let p,y,g,m,b;return{c(){p=n("p"),y=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=a(i,"P",{});var u=r(p);y=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(u,"CODE",{});var E=r(g);m=d(E,"Module"),E.forEach(t),b=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(i,u){f(i,p,u),e(p,y),e(p,g),e(g,m),e(p,b)},d(i){i&&t(p)}}}function of(F){let p,y,g,m,b;return m=new dt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotModel

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = FlaxBlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),y=s("Example:"),g=l(),k(m.$$.fragment)},l(i){p=a(i,"P",{});var u=r(p);y=d(u,"Example:"),u.forEach(t),g=c(i),v(m.$$.fragment,i)},m(i,u){f(i,p,u),e(p,y),f(i,g,u),T(m,i,u),b=!0},p:_t,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(m,i)}}}function nf(F){let p,y,g,m,b;return m=new dt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),y=s("Example:"),g=l(),k(m.$$.fragment)},l(i){p=a(i,"P",{});var u=r(p);y=d(u,"Example:"),u.forEach(t),g=c(i),v(m.$$.fragment,i)},m(i,u){f(i,p,u),e(p,y),f(i,g,u),T(m,i,u),b=!0},p:_t,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(m,i)}}}function af(F){let p,y,g,m,b;return m=new dt({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),y=s("Example:"),g=l(),k(m.$$.fragment)},l(i){p=a(i,"P",{});var u=r(p);y=d(u,"Example:"),u.forEach(t),g=c(i),v(m.$$.fragment,i)},m(i,u){f(i,p,u),e(p,y),f(i,g,u),T(m,i,u),b=!0},p:_t,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(m,i)}}}function rf(F){let p,y,g,m,b;return{c(){p=n("p"),y=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),m=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=a(i,"P",{});var u=r(p);y=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(u,"CODE",{});var E=r(g);m=d(E,"Module"),E.forEach(t),b=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(i,u){f(i,p,u),e(p,y),e(p,g),e(g,m),e(p,b)},d(i){i&&t(p)}}}function sf(F){let p,y,g,m,b;return m=new dt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),y=s("Example:"),g=l(),k(m.$$.fragment)},l(i){p=a(i,"P",{});var u=r(p);y=d(u,"Example:"),u.forEach(t),g=c(i),v(m.$$.fragment,i)},m(i,u){f(i,p,u),e(p,y),f(i,g,u),T(m,i,u),b=!0},p:_t,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(m,i)}}}function df(F){let p,y,g,m,b;return m=new dt({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=n("p"),y=s("Example:"),g=l(),k(m.$$.fragment)},l(i){p=a(i,"P",{});var u=r(p);y=d(u,"Example:"),u.forEach(t),g=c(i),v(m.$$.fragment,i)},m(i,u){f(i,p,u),e(p,y),f(i,g,u),T(m,i,u),b=!0},p:_t,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(m,i)}}}function lf(F){let p,y,g,m,b,i,u,E,Je,Le,A,xe,Be,z,se,de,Qe,Se,I,Y,Fe,U,Xe,ze,ie,De,Z,le,ce,Ye,qe,C,j,Ze,ee,we,Ee,pe,Ge,R,L,he,ue,et,me,fe,tt,We,O,te,V,_e,Me,P,ot,G,H,ge,B,q,gt,Ce,bt,je,M,Oe,yt,kt,vt,K,J,Q,Tt,wt,X,$t,xt,$e,Bt,Pe,it,Ft,Kt,Wa,Ro,Dd,Ua,Gd,Cs,pa,Wd,js,Ho,Os,zt,Jt,Ra,Vo,Ud,Ha,Rd,Ps,Ne,Ko,Hd,qt,Vd,ha,Kd,Jd,Jo,Qd,Xd,Yd,Et,Zd,ua,ei,ti,ma,oi,ni,ai,Qt,Ns,Mt,Xt,Va,Qo,ri,Ka,si,As,be,Xo,di,Ja,ii,li,Yt,Qa,ci,pi,fa,hi,ui,mi,Yo,fi,_a,_i,gi,bi,lt,Zo,yi,Xa,ki,vi,Ya,ga,Ti,Za,wi,Is,Ct,Zt,er,en,$i,tr,xi,Ls,ye,tn,Bi,on,Fi,or,zi,qi,Ei,eo,nr,Mi,Ci,ba,ji,Oi,Pi,nn,Ni,ya,Ai,Ii,Li,ct,an,Si,ar,Di,Gi,rr,ka,Wi,sr,Ui,Ss,jt,to,dr,rn,Ri,ir,Hi,Ds,nt,Vi,lr,Ki,Ji,cr,Qi,Xi,pr,Yi,Gs,Ae,sn,Zi,dn,el,va,tl,ol,nl,ln,al,cn,rl,sl,dl,Ue,pn,il,Ot,ll,Ta,cl,pl,hr,hl,ul,ml,oo,fl,no,Ws,Pt,ao,ur,hn,_l,mr,gl,Us,at,bl,wa,yl,kl,fr,vl,Tl,_r,wl,Rs,Ie,un,$l,mn,xl,$a,Bl,Fl,zl,fn,ql,_n,El,Ml,Cl,Re,gn,jl,Nt,Ol,xa,Pl,Nl,gr,Al,Il,Ll,ro,Sl,so,Hs,At,io,br,bn,Dl,yr,Gl,Vs,It,yn,Wl,lo,kn,Ul,co,Ks,Lt,po,kr,vn,Rl,vr,Hl,Js,ke,Tn,Vl,wn,Kl,Ba,Jl,Ql,Xl,$n,Yl,xn,Zl,ec,tc,ho,oc,He,Bn,nc,St,ac,Fa,rc,sc,Tr,dc,ic,lc,uo,cc,mo,Qs,Dt,fo,wr,Fn,pc,$r,hc,Xs,ve,zn,uc,qn,mc,za,fc,_c,gc,En,bc,Mn,yc,kc,vc,_o,Tc,oe,Cn,wc,Gt,$c,qa,xc,Bc,xr,Fc,zc,qc,go,Ec,Br,Mc,Cc,Fr,zr,qr,Er,jc,Oc,Mr,Cr,jr,jn,Pc,Or,Nc,Ac,Ys,Wt,bo,Pr,On,Ic,Nr,Lc,Zs,S,Pn,Sc,Nn,Dc,Ea,Gc,Wc,Uc,An,Rc,In,Hc,Vc,Kc,Ar,Jc,Qc,rt,Ir,Ln,Xc,Yc,Lr,Sn,Zc,ep,Sr,Dn,tp,op,Dr,Gn,np,ap,Ve,Wn,rp,Ut,sp,Gr,dp,ip,Wr,lp,cp,pp,yo,hp,ko,up,vo,Un,mp,To,fp,wo,Rn,_p,$o,ed,Rt,xo,Ur,Hn,gp,Rr,bp,td,D,Vn,yp,Kn,kp,Ma,vp,Tp,wp,Jn,$p,Qn,xp,Bp,Fp,Hr,zp,qp,st,Vr,Xn,Ep,Mp,Kr,Yn,Cp,jp,Jr,Zn,Op,Pp,Qr,ea,Np,Ap,W,ta,Ip,Ht,Lp,Xr,Sp,Dp,Yr,Gp,Wp,Up,Bo,Rp,Zr,Hp,Vp,es,ts,os,ns,Kp,Jp,as,rs,ss,ds,Qp,Xp,is,ls,cs,ps,Yp,Zp,hs,us,oa,Fo,zo,ms,na,eh,fs,th,oh,_s,nh,ah,qo,aa,rh,Eo,sh,Mo,ra,dh,Co,od;return i=new Te({}),U=new Te({}),_e=new Te({}),Ro=new Te({}),Ho=new dt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

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
[<span class="hljs-string">&quot;&lt;s&gt; That&#x27;s unfortunate. Are they trying to lose weight or are they just trying to be healthier?&lt;/s&gt;&quot;</span>]`}}),Vo=new Te({}),Ko=new N({props:{name:"class transformers.BlenderbotConfig",anchor:"transformers.BlenderbotConfig",parameters:[{name:"vocab_size",val:" = 8008"},{name:"max_position_embeddings",val:" = 128"},{name:"encoder_layers",val:" = 2"},{name:"encoder_ffn_dim",val:" = 10240"},{name:"encoder_attention_heads",val:" = 32"},{name:"decoder_layers",val:" = 24"},{name:"decoder_ffn_dim",val:" = 10240"},{name:"decoder_attention_heads",val:" = 32"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 2560"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"encoder_no_repeat_ngram_size",val:" = 3"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Blenderbot model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotModel">BlenderbotModel</a> or <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.TFBlenderbotModel">TFBlenderbotModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/configuration_blenderbot.py#L36"}}),Qt=new ft({props:{anchor:"transformers.BlenderbotConfig.example",$$slots:{default:[Um]},$$scope:{ctx:F}}}),Qo=new Te({}),Xo=new N({props:{name:"class transformers.BlenderbotTokenizer",anchor:"transformers.BlenderbotTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot.py#L46"}}),Zo=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot.py#L59",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),en=new Te({}),tn=new N({props:{name:"class transformers.BlenderbotTokenizerFast",anchor:"transformers.BlenderbotTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L47"}}),an=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L61",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),rn=new Te({}),sn=new N({props:{name:"class transformers.BlenderbotModel",anchor:"transformers.BlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1089"}}),pn=new N({props:{name:"forward",anchor:"transformers.BlenderbotModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1129",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oo=new Uo({props:{$$slots:{default:[Rm]},$$scope:{ctx:F}}}),no=new ft({props:{anchor:"transformers.BlenderbotModel.forward.example",$$slots:{default:[Hm]},$$scope:{ctx:F}}}),hn=new Te({}),un=new N({props:{name:"class transformers.BlenderbotForConditionalGeneration",anchor:"transformers.BlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1227"}}),gn=new N({props:{name:"forward",anchor:"transformers.BlenderbotForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1286",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new Uo({props:{$$slots:{default:[Vm]},$$scope:{ctx:F}}}),so=new ft({props:{anchor:"transformers.BlenderbotForConditionalGeneration.forward.example",$$slots:{default:[Km]},$$scope:{ctx:F}}}),bn=new Te({}),yn=new N({props:{name:"class transformers.BlenderbotForCausalLM",anchor:"transformers.BlenderbotForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1422"}}),kn=new N({props:{name:"forward",anchor:"transformers.BlenderbotForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1453",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new ft({props:{anchor:"transformers.BlenderbotForCausalLM.forward.example",$$slots:{default:[Jm]},$$scope:{ctx:F}}}),vn=new Te({}),Tn=new N({props:{name:"class transformers.TFBlenderbotModel",anchor:"transformers.TFBlenderbotModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1151"}}),ho=new Uo({props:{$$slots:{default:[Qm]},$$scope:{ctx:F}}}),Bn=new N({props:{name:"call",anchor:"transformers.TFBlenderbotModel.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1179",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),uo=new Uo({props:{$$slots:{default:[Xm]},$$scope:{ctx:F}}}),mo=new ft({props:{anchor:"transformers.TFBlenderbotModel.call.example",$$slots:{default:[Ym]},$$scope:{ctx:F}}}),Fn=new Te({}),zn=new N({props:{name:"class transformers.TFBlenderbotForConditionalGeneration",anchor:"transformers.TFBlenderbotForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1273"}}),_o=new Uo({props:{$$slots:{default:[Zm]},$$scope:{ctx:F}}}),Cn=new N({props:{name:"call",anchor:"transformers.TFBlenderbotForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1323",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),go=new Uo({props:{$$slots:{default:[ef]},$$scope:{ctx:F}}}),On=new Te({}),Pn=new N({props:{name:"class transformers.FlaxBlenderbotModel",anchor:"transformers.FlaxBlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1218"}}),Wn=new N({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1153",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yo=new Uo({props:{$$slots:{default:[tf]},$$scope:{ctx:F}}}),ko=new ft({props:{anchor:"transformers.FlaxBlenderbotModel.__call__.example",$$slots:{default:[of]},$$scope:{ctx:F}}}),Un=new N({props:{name:"encode",anchor:"transformers.FlaxBlenderbotModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L974",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),To=new ft({props:{anchor:"transformers.FlaxBlenderbotModel.encode.example",$$slots:{default:[nf]},$$scope:{ctx:F}}}),Rn=new N({props:{name:"decode",anchor:"transformers.FlaxBlenderbotModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1037",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$o=new ft({props:{anchor:"transformers.FlaxBlenderbotModel.decode.example",$$slots:{default:[af]},$$scope:{ctx:F}}}),Hn=new Te({}),Vn=new N({props:{name:"class transformers.FlaxBlenderbotForConditionalGeneration",anchor:"transformers.FlaxBlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1305"}}),ta=new N({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1153",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bo=new Uo({props:{$$slots:{default:[rf]},$$scope:{ctx:F}}}),na=new Te({}),aa=new N({props:{name:"encode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L974",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Eo=new ft({props:{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.example",$$slots:{default:[sf]},$$scope:{ctx:F}}}),ra=new N({props:{name:"decode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1309",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Co=new ft({props:{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.example",$$slots:{default:[df]},$$scope:{ctx:F}}}),{c(){p=n("meta"),y=l(),g=n("h1"),m=n("a"),b=n("span"),k(i.$$.fragment),u=l(),E=n("span"),Je=s("Blenderbot"),Le=l(),A=n("p"),xe=n("strong"),Be=s("DISCLAIMER:"),z=s(" If you see something strange, file a "),se=n("a"),de=s("Github Issue"),Qe=s(" ."),Se=l(),I=n("h2"),Y=n("a"),Fe=n("span"),k(U.$$.fragment),Xe=l(),ze=n("span"),ie=s("Overview"),De=l(),Z=n("p"),le=s("The Blender chatbot model was proposed in "),ce=n("a"),Ye=s("Recipes for building an open-domain chatbot"),qe=s(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),C=l(),j=n("p"),Ze=s("The abstract of the paper is the following:"),ee=l(),we=n("p"),Ee=n("em"),pe=s(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Ge=l(),R=n("p"),L=s("This model was contributed by "),he=n("a"),ue=s("sshleifer"),et=s(". The authors\u2019 code can be found "),me=n("a"),fe=s("here"),tt=s(" ."),We=l(),O=n("h2"),te=n("a"),V=n("span"),k(_e.$$.fragment),Me=l(),P=n("span"),ot=s("Implementation Notes"),G=l(),H=n("ul"),ge=n("li"),B=s("Blenderbot uses a standard "),q=n("a"),gt=s("seq2seq model transformer"),Ce=s(" based architecture."),bt=l(),je=n("li"),M=s("Available checkpoints can be found in the "),Oe=n("a"),yt=s("model hub"),kt=s("."),vt=l(),K=n("li"),J=s("This is the "),Q=n("em"),Tt=s("default"),wt=s(` Blenderbot model class. However, some smaller checkpoints, such as
`),X=n("code"),$t=s("facebook/blenderbot_small_90M"),xt=s(`, have a different architecture and consequently should be used with
`),$e=n("a"),Bt=s("BlenderbotSmall"),Pe=s("."),it=l(),Ft=n("h2"),Kt=n("a"),Wa=n("span"),k(Ro.$$.fragment),Dd=l(),Ua=n("span"),Gd=s("Usage"),Cs=l(),pa=n("p"),Wd=s("Here is an example of model usage:"),js=l(),k(Ho.$$.fragment),Os=l(),zt=n("h2"),Jt=n("a"),Ra=n("span"),k(Vo.$$.fragment),Ud=l(),Ha=n("span"),Rd=s("BlenderbotConfig"),Ps=l(),Ne=n("div"),k(Ko.$$.fragment),Hd=l(),qt=n("p"),Vd=s("This is the configuration class to store the configuration of a "),ha=n("a"),Kd=s("BlenderbotModel"),Jd=s(`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),Jo=n("a"),Qd=s("facebook/blenderbot-3B"),Xd=s(" architecture."),Yd=l(),Et=n("p"),Zd=s("Configuration objects inherit from "),ua=n("a"),ei=s("PretrainedConfig"),ti=s(` and can be used to control the model outputs. Read the
documentation from `),ma=n("a"),oi=s("PretrainedConfig"),ni=s(" for more information."),ai=l(),k(Qt.$$.fragment),Ns=l(),Mt=n("h2"),Xt=n("a"),Va=n("span"),k(Qo.$$.fragment),ri=l(),Ka=n("span"),si=s("BlenderbotTokenizer"),As=l(),be=n("div"),k(Xo.$$.fragment),di=l(),Ja=n("p"),ii=s("Construct a Blenderbot tokenizer."),li=l(),Yt=n("p"),Qa=n("code"),ci=s("Blenderbot"),pi=s(" is nearly identical to "),fa=n("a"),hi=s("RobertaTokenizer"),ui=s(` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),mi=l(),Yo=n("p"),fi=s("Refer to superclass "),_a=n("a"),_i=s("RobertaTokenizer"),gi=s(" for usage examples and documentation concerning parameters."),bi=l(),lt=n("div"),k(Zo.$$.fragment),yi=l(),Xa=n("p"),ki=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),vi=l(),Ya=n("ul"),ga=n("li"),Ti=s("single sequence: "),Za=n("code"),wi=s("X </s>"),Is=l(),Ct=n("h2"),Zt=n("a"),er=n("span"),k(en.$$.fragment),$i=l(),tr=n("span"),xi=s("BlenderbotTokenizerFast"),Ls=l(),ye=n("div"),k(tn.$$.fragment),Bi=l(),on=n("p"),Fi=s("Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),or=n("em"),zi=s("tokenizers"),qi=s(" library)."),Ei=l(),eo=n("p"),nr=n("code"),Mi=s("BlenderbotFast"),Ci=s(" is nearly identical to "),ba=n("a"),ji=s("RobertaTokenizerFast"),Oi=s(` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),Pi=l(),nn=n("p"),Ni=s("Refer to superclass "),ya=n("a"),Ai=s("RobertaTokenizerFast"),Ii=s(" for usage examples and documentation concerning parameters."),Li=l(),ct=n("div"),k(an.$$.fragment),Si=l(),ar=n("p"),Di=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Gi=l(),rr=n("ul"),ka=n("li"),Wi=s("single sequence: "),sr=n("code"),Ui=s("X </s>"),Ss=l(),jt=n("h2"),to=n("a"),dr=n("span"),k(rn.$$.fragment),Ri=l(),ir=n("span"),Hi=s("BlenderbotModel"),Ds=l(),nt=n("p"),Vi=s("See "),lr=n("code"),Ki=s("transformers.BartModel"),Ji=s(" for arguments to "),cr=n("em"),Qi=s("forward"),Xi=s(" and "),pr=n("em"),Yi=s("generate"),Gs=l(),Ae=n("div"),k(sn.$$.fragment),Zi=l(),dn=n("p"),el=s(`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),va=n("a"),tl=s("PreTrainedModel"),ol=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nl=l(),ln=n("p"),al=s("This model is also a PyTorch "),cn=n("a"),rl=s("torch.nn.Module"),sl=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dl=l(),Ue=n("div"),k(pn.$$.fragment),il=l(),Ot=n("p"),ll=s("The "),Ta=n("a"),cl=s("BlenderbotModel"),pl=s(" forward method, overrides the "),hr=n("code"),hl=s("__call__"),ul=s(" special method."),ml=l(),k(oo.$$.fragment),fl=l(),k(no.$$.fragment),Ws=l(),Pt=n("h2"),ao=n("a"),ur=n("span"),k(hn.$$.fragment),_l=l(),mr=n("span"),gl=s("BlenderbotForConditionalGeneration"),Us=l(),at=n("p"),bl=s("See "),wa=n("a"),yl=s("BartForConditionalGeneration"),kl=s(" for arguments to "),fr=n("em"),vl=s("forward"),Tl=s(" and "),_r=n("em"),wl=s("generate"),Rs=l(),Ie=n("div"),k(un.$$.fragment),$l=l(),mn=n("p"),xl=s(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),$a=n("a"),Bl=s("PreTrainedModel"),Fl=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zl=l(),fn=n("p"),ql=s("This model is also a PyTorch "),_n=n("a"),El=s("torch.nn.Module"),Ml=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cl=l(),Re=n("div"),k(gn.$$.fragment),jl=l(),Nt=n("p"),Ol=s("The "),xa=n("a"),Pl=s("BlenderbotForConditionalGeneration"),Nl=s(" forward method, overrides the "),gr=n("code"),Al=s("__call__"),Il=s(" special method."),Ll=l(),k(ro.$$.fragment),Sl=l(),k(so.$$.fragment),Hs=l(),At=n("h2"),io=n("a"),br=n("span"),k(bn.$$.fragment),Dl=l(),yr=n("span"),Gl=s("BlenderbotForCausalLM"),Vs=l(),It=n("div"),k(yn.$$.fragment),Wl=l(),lo=n("div"),k(kn.$$.fragment),Ul=l(),k(co.$$.fragment),Ks=l(),Lt=n("h2"),po=n("a"),kr=n("span"),k(vn.$$.fragment),Rl=l(),vr=n("span"),Hl=s("TFBlenderbotModel"),Js=l(),ke=n("div"),k(Tn.$$.fragment),Vl=l(),wn=n("p"),Kl=s(`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ba=n("a"),Jl=s("TFPreTrainedModel"),Ql=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xl=l(),$n=n("p"),Yl=s("This model is also a "),xn=n("a"),Zl=s("tf.keras.Model"),ec=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tc=l(),k(ho.$$.fragment),oc=l(),He=n("div"),k(Bn.$$.fragment),nc=l(),St=n("p"),ac=s("The "),Fa=n("a"),rc=s("TFBlenderbotModel"),sc=s(" forward method, overrides the "),Tr=n("code"),dc=s("__call__"),ic=s(" special method."),lc=l(),k(uo.$$.fragment),cc=l(),k(mo.$$.fragment),Qs=l(),Dt=n("h2"),fo=n("a"),wr=n("span"),k(Fn.$$.fragment),pc=l(),$r=n("span"),hc=s("TFBlenderbotForConditionalGeneration"),Xs=l(),ve=n("div"),k(zn.$$.fragment),uc=l(),qn=n("p"),mc=s(`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),za=n("a"),fc=s("TFPreTrainedModel"),_c=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gc=l(),En=n("p"),bc=s("This model is also a "),Mn=n("a"),yc=s("tf.keras.Model"),kc=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vc=l(),k(_o.$$.fragment),Tc=l(),oe=n("div"),k(Cn.$$.fragment),wc=l(),Gt=n("p"),$c=s("The "),qa=n("a"),xc=s("TFBlenderbotForConditionalGeneration"),Bc=s(" forward method, overrides the "),xr=n("code"),Fc=s("__call__"),zc=s(" special method."),qc=l(),k(go.$$.fragment),Ec=l(),Br=n("p"),Mc=s("Conversation example::"),Cc=l(),Fr=n("blockquote"),zr=n("blockquote"),qr=n("blockquote"),Er=n("p"),jc=s(`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),Oc=l(),Mr=n("blockquote"),Cr=n("blockquote"),jr=n("blockquote"),jn=n("p"),Pc=s(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Or=n("s"),Nc=s(`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),Ac=s(` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Ys=l(),Wt=n("h2"),bo=n("a"),Pr=n("span"),k(On.$$.fragment),Ic=l(),Nr=n("span"),Lc=s("FlaxBlenderbotModel"),Zs=l(),S=n("div"),k(Pn.$$.fragment),Sc=l(),Nn=n("p"),Dc=s(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ea=n("a"),Gc=s("FlaxPreTrainedModel"),Wc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uc=l(),An=n("p"),Rc=s(`This model is also a Flax Linen
`),In=n("a"),Hc=s("flax.nn.Module"),Vc=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Kc=l(),Ar=n("p"),Jc=s("Finally, this model supports inherent JAX features such as:"),Qc=l(),rt=n("ul"),Ir=n("li"),Ln=n("a"),Xc=s("Just-In-Time (JIT) compilation"),Yc=l(),Lr=n("li"),Sn=n("a"),Zc=s("Automatic Differentiation"),ep=l(),Sr=n("li"),Dn=n("a"),tp=s("Vectorization"),op=l(),Dr=n("li"),Gn=n("a"),np=s("Parallelization"),ap=l(),Ve=n("div"),k(Wn.$$.fragment),rp=l(),Ut=n("p"),sp=s("The "),Gr=n("code"),dp=s("FlaxBlenderbotPreTrainedModel"),ip=s(" forward method, overrides the "),Wr=n("code"),lp=s("__call__"),cp=s(" special method."),pp=l(),k(yo.$$.fragment),hp=l(),k(ko.$$.fragment),up=l(),vo=n("div"),k(Un.$$.fragment),mp=l(),k(To.$$.fragment),fp=l(),wo=n("div"),k(Rn.$$.fragment),_p=l(),k($o.$$.fragment),ed=l(),Rt=n("h2"),xo=n("a"),Ur=n("span"),k(Hn.$$.fragment),gp=l(),Rr=n("span"),bp=s("FlaxBlenderbotForConditionalGeneration"),td=l(),D=n("div"),k(Vn.$$.fragment),yp=l(),Kn=n("p"),kp=s(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ma=n("a"),vp=s("FlaxPreTrainedModel"),Tp=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wp=l(),Jn=n("p"),$p=s(`This model is also a Flax Linen
`),Qn=n("a"),xp=s("flax.nn.Module"),Bp=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Fp=l(),Hr=n("p"),zp=s("Finally, this model supports inherent JAX features such as:"),qp=l(),st=n("ul"),Vr=n("li"),Xn=n("a"),Ep=s("Just-In-Time (JIT) compilation"),Mp=l(),Kr=n("li"),Yn=n("a"),Cp=s("Automatic Differentiation"),jp=l(),Jr=n("li"),Zn=n("a"),Op=s("Vectorization"),Pp=l(),Qr=n("li"),ea=n("a"),Np=s("Parallelization"),Ap=l(),W=n("div"),k(ta.$$.fragment),Ip=l(),Ht=n("p"),Lp=s("The "),Xr=n("code"),Sp=s("FlaxBlenderbotPreTrainedModel"),Dp=s(" forward method, overrides the "),Yr=n("code"),Gp=s("__call__"),Wp=s(" special method."),Up=l(),k(Bo.$$.fragment),Rp=l(),Zr=n("p"),Hp=s("Conversation example::"),Vp=l(),es=n("blockquote"),ts=n("blockquote"),os=n("blockquote"),ns=n("p"),Kp=s("from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),Jp=l(),as=n("blockquote"),rs=n("blockquote"),ss=n("blockquote"),ds=n("p"),Qp=s(`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),Xp=l(),is=n("blockquote"),ls=n("blockquote"),cs=n("blockquote"),ps=n("p"),Yp=s(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),Zp=l(),hs=n("blockquote"),us=n("blockquote"),oa=n("blockquote"),Fo=n("h1"),zo=n("a"),ms=n("span"),k(na.$$.fragment),eh=l(),fs=n("span"),th=s("Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),oh=l(),_s=n("p"),nh=s(`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),ah=l(),qo=n("div"),k(aa.$$.fragment),rh=l(),k(Eo.$$.fragment),sh=l(),Mo=n("div"),k(ra.$$.fragment),dh=l(),k(Co.$$.fragment),this.h()},l(o){const _=Gm('[data-svelte="svelte-1phssyn"]',document.head);p=a(_,"META",{name:!0,content:!0}),_.forEach(t),y=c(o),g=a(o,"H1",{class:!0});var sa=r(g);m=a(sa,"A",{id:!0,class:!0,href:!0});var gs=r(m);b=a(gs,"SPAN",{});var bs=r(b);v(i.$$.fragment,bs),bs.forEach(t),gs.forEach(t),u=c(sa),E=a(sa,"SPAN",{});var ys=r(E);Je=d(ys,"Blenderbot"),ys.forEach(t),sa.forEach(t),Le=c(o),A=a(o,"P",{});var jo=r(A);xe=a(jo,"STRONG",{});var ks=r(xe);Be=d(ks,"DISCLAIMER:"),ks.forEach(t),z=d(jo," If you see something strange, file a "),se=a(jo,"A",{href:!0,rel:!0});var vs=r(se);de=d(vs,"Github Issue"),vs.forEach(t),Qe=d(jo," ."),jo.forEach(t),Se=c(o),I=a(o,"H2",{class:!0});var da=r(I);Y=a(da,"A",{id:!0,class:!0,href:!0});var Ts=r(Y);Fe=a(Ts,"SPAN",{});var ws=r(Fe);v(U.$$.fragment,ws),ws.forEach(t),Ts.forEach(t),Xe=c(da),ze=a(da,"SPAN",{});var $s=r(ze);ie=d($s,"Overview"),$s.forEach(t),da.forEach(t),De=c(o),Z=a(o,"P",{});var ia=r(Z);le=d(ia,"The Blender chatbot model was proposed in "),ce=a(ia,"A",{href:!0,rel:!0});var xs=r(ce);Ye=d(xs,"Recipes for building an open-domain chatbot"),xs.forEach(t),qe=d(ia,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),ia.forEach(t),C=c(o),j=a(o,"P",{});var Bs=r(j);Ze=d(Bs,"The abstract of the paper is the following:"),Bs.forEach(t),ee=c(o),we=a(o,"P",{});var Fs=r(we);Ee=a(Fs,"EM",{});var zs=r(Ee);pe=d(zs,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),zs.forEach(t),Fs.forEach(t),Ge=c(o),R=a(o,"P",{});var Vt=r(R);L=d(Vt,"This model was contributed by "),he=a(Vt,"A",{href:!0,rel:!0});var qs=r(he);ue=d(qs,"sshleifer"),qs.forEach(t),et=d(Vt,". The authors\u2019 code can be found "),me=a(Vt,"A",{href:!0,rel:!0});var ch=r(me);fe=d(ch,"here"),ch.forEach(t),tt=d(Vt," ."),Vt.forEach(t),We=c(o),O=a(o,"H2",{class:!0});var nd=r(O);te=a(nd,"A",{id:!0,class:!0,href:!0});var ph=r(te);V=a(ph,"SPAN",{});var hh=r(V);v(_e.$$.fragment,hh),hh.forEach(t),ph.forEach(t),Me=c(nd),P=a(nd,"SPAN",{});var uh=r(P);ot=d(uh,"Implementation Notes"),uh.forEach(t),nd.forEach(t),G=c(o),H=a(o,"UL",{});var Ca=r(H);ge=a(Ca,"LI",{});var ad=r(ge);B=d(ad,"Blenderbot uses a standard "),q=a(ad,"A",{href:!0,rel:!0});var mh=r(q);gt=d(mh,"seq2seq model transformer"),mh.forEach(t),Ce=d(ad," based architecture."),ad.forEach(t),bt=c(Ca),je=a(Ca,"LI",{});var rd=r(je);M=d(rd,"Available checkpoints can be found in the "),Oe=a(rd,"A",{href:!0,rel:!0});var fh=r(Oe);yt=d(fh,"model hub"),fh.forEach(t),kt=d(rd,"."),rd.forEach(t),vt=c(Ca),K=a(Ca,"LI",{});var Oo=r(K);J=d(Oo,"This is the "),Q=a(Oo,"EM",{});var _h=r(Q);Tt=d(_h,"default"),_h.forEach(t),wt=d(Oo,` Blenderbot model class. However, some smaller checkpoints, such as
`),X=a(Oo,"CODE",{});var gh=r(X);$t=d(gh,"facebook/blenderbot_small_90M"),gh.forEach(t),xt=d(Oo,`, have a different architecture and consequently should be used with
`),$e=a(Oo,"A",{href:!0});var bh=r($e);Bt=d(bh,"BlenderbotSmall"),bh.forEach(t),Pe=d(Oo,"."),Oo.forEach(t),Ca.forEach(t),it=c(o),Ft=a(o,"H2",{class:!0});var sd=r(Ft);Kt=a(sd,"A",{id:!0,class:!0,href:!0});var yh=r(Kt);Wa=a(yh,"SPAN",{});var kh=r(Wa);v(Ro.$$.fragment,kh),kh.forEach(t),yh.forEach(t),Dd=c(sd),Ua=a(sd,"SPAN",{});var vh=r(Ua);Gd=d(vh,"Usage"),vh.forEach(t),sd.forEach(t),Cs=c(o),pa=a(o,"P",{});var Th=r(pa);Wd=d(Th,"Here is an example of model usage:"),Th.forEach(t),js=c(o),v(Ho.$$.fragment,o),Os=c(o),zt=a(o,"H2",{class:!0});var dd=r(zt);Jt=a(dd,"A",{id:!0,class:!0,href:!0});var wh=r(Jt);Ra=a(wh,"SPAN",{});var $h=r(Ra);v(Vo.$$.fragment,$h),$h.forEach(t),wh.forEach(t),Ud=c(dd),Ha=a(dd,"SPAN",{});var xh=r(Ha);Rd=d(xh,"BlenderbotConfig"),xh.forEach(t),dd.forEach(t),Ps=c(o),Ne=a(o,"DIV",{class:!0});var Po=r(Ne);v(Ko.$$.fragment,Po),Hd=c(Po),qt=a(Po,"P",{});var ja=r(qt);Vd=d(ja,"This is the configuration class to store the configuration of a "),ha=a(ja,"A",{href:!0});var Bh=r(ha);Kd=d(Bh,"BlenderbotModel"),Bh.forEach(t),Jd=d(ja,`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),Jo=a(ja,"A",{href:!0,rel:!0});var Fh=r(Jo);Qd=d(Fh,"facebook/blenderbot-3B"),Fh.forEach(t),Xd=d(ja," architecture."),ja.forEach(t),Yd=c(Po),Et=a(Po,"P",{});var Oa=r(Et);Zd=d(Oa,"Configuration objects inherit from "),ua=a(Oa,"A",{href:!0});var zh=r(ua);ei=d(zh,"PretrainedConfig"),zh.forEach(t),ti=d(Oa,` and can be used to control the model outputs. Read the
documentation from `),ma=a(Oa,"A",{href:!0});var qh=r(ma);oi=d(qh,"PretrainedConfig"),qh.forEach(t),ni=d(Oa," for more information."),Oa.forEach(t),ai=c(Po),v(Qt.$$.fragment,Po),Po.forEach(t),Ns=c(o),Mt=a(o,"H2",{class:!0});var id=r(Mt);Xt=a(id,"A",{id:!0,class:!0,href:!0});var Eh=r(Xt);Va=a(Eh,"SPAN",{});var Mh=r(Va);v(Qo.$$.fragment,Mh),Mh.forEach(t),Eh.forEach(t),ri=c(id),Ka=a(id,"SPAN",{});var Ch=r(Ka);si=d(Ch,"BlenderbotTokenizer"),Ch.forEach(t),id.forEach(t),As=c(o),be=a(o,"DIV",{class:!0});var pt=r(be);v(Xo.$$.fragment,pt),di=c(pt),Ja=a(pt,"P",{});var jh=r(Ja);ii=d(jh,"Construct a Blenderbot tokenizer."),jh.forEach(t),li=c(pt),Yt=a(pt,"P",{});var Es=r(Yt);Qa=a(Es,"CODE",{});var Oh=r(Qa);ci=d(Oh,"Blenderbot"),Oh.forEach(t),pi=d(Es," is nearly identical to "),fa=a(Es,"A",{href:!0});var Ph=r(fa);hi=d(Ph,"RobertaTokenizer"),Ph.forEach(t),ui=d(Es,` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),Es.forEach(t),mi=c(pt),Yo=a(pt,"P",{});var ld=r(Yo);fi=d(ld,"Refer to superclass "),_a=a(ld,"A",{href:!0});var Nh=r(_a);_i=d(Nh,"RobertaTokenizer"),Nh.forEach(t),gi=d(ld," for usage examples and documentation concerning parameters."),ld.forEach(t),bi=c(pt),lt=a(pt,"DIV",{class:!0});var Pa=r(lt);v(Zo.$$.fragment,Pa),yi=c(Pa),Xa=a(Pa,"P",{});var Ah=r(Xa);ki=d(Ah,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Ah.forEach(t),vi=c(Pa),Ya=a(Pa,"UL",{});var Ih=r(Ya);ga=a(Ih,"LI",{});var ih=r(ga);Ti=d(ih,"single sequence: "),Za=a(ih,"CODE",{});var Lh=r(Za);wi=d(Lh,"X </s>"),Lh.forEach(t),ih.forEach(t),Ih.forEach(t),Pa.forEach(t),pt.forEach(t),Is=c(o),Ct=a(o,"H2",{class:!0});var cd=r(Ct);Zt=a(cd,"A",{id:!0,class:!0,href:!0});var Sh=r(Zt);er=a(Sh,"SPAN",{});var Dh=r(er);v(en.$$.fragment,Dh),Dh.forEach(t),Sh.forEach(t),$i=c(cd),tr=a(cd,"SPAN",{});var Gh=r(tr);xi=d(Gh,"BlenderbotTokenizerFast"),Gh.forEach(t),cd.forEach(t),Ls=c(o),ye=a(o,"DIV",{class:!0});var ht=r(ye);v(tn.$$.fragment,ht),Bi=c(ht),on=a(ht,"P",{});var pd=r(on);Fi=d(pd,"Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),or=a(pd,"EM",{});var Wh=r(or);zi=d(Wh,"tokenizers"),Wh.forEach(t),qi=d(pd," library)."),pd.forEach(t),Ei=c(ht),eo=a(ht,"P",{});var Ms=r(eo);nr=a(Ms,"CODE",{});var Uh=r(nr);Mi=d(Uh,"BlenderbotFast"),Uh.forEach(t),Ci=d(Ms," is nearly identical to "),ba=a(Ms,"A",{href:!0});var Rh=r(ba);ji=d(Rh,"RobertaTokenizerFast"),Rh.forEach(t),Oi=d(Ms,` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),Ms.forEach(t),Pi=c(ht),nn=a(ht,"P",{});var hd=r(nn);Ni=d(hd,"Refer to superclass "),ya=a(hd,"A",{href:!0});var Hh=r(ya);Ai=d(Hh,"RobertaTokenizerFast"),Hh.forEach(t),Ii=d(hd," for usage examples and documentation concerning parameters."),hd.forEach(t),Li=c(ht),ct=a(ht,"DIV",{class:!0});var Na=r(ct);v(an.$$.fragment,Na),Si=c(Na),ar=a(Na,"P",{});var Vh=r(ar);Di=d(Vh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Vh.forEach(t),Gi=c(Na),rr=a(Na,"UL",{});var Kh=r(rr);ka=a(Kh,"LI",{});var lh=r(ka);Wi=d(lh,"single sequence: "),sr=a(lh,"CODE",{});var Jh=r(sr);Ui=d(Jh,"X </s>"),Jh.forEach(t),lh.forEach(t),Kh.forEach(t),Na.forEach(t),ht.forEach(t),Ss=c(o),jt=a(o,"H2",{class:!0});var ud=r(jt);to=a(ud,"A",{id:!0,class:!0,href:!0});var Qh=r(to);dr=a(Qh,"SPAN",{});var Xh=r(dr);v(rn.$$.fragment,Xh),Xh.forEach(t),Qh.forEach(t),Ri=c(ud),ir=a(ud,"SPAN",{});var Yh=r(ir);Hi=d(Yh,"BlenderbotModel"),Yh.forEach(t),ud.forEach(t),Ds=c(o),nt=a(o,"P",{});var la=r(nt);Vi=d(la,"See "),lr=a(la,"CODE",{});var Zh=r(lr);Ki=d(Zh,"transformers.BartModel"),Zh.forEach(t),Ji=d(la," for arguments to "),cr=a(la,"EM",{});var eu=r(cr);Qi=d(eu,"forward"),eu.forEach(t),Xi=d(la," and "),pr=a(la,"EM",{});var tu=r(pr);Yi=d(tu,"generate"),tu.forEach(t),la.forEach(t),Gs=c(o),Ae=a(o,"DIV",{class:!0});var No=r(Ae);v(sn.$$.fragment,No),Zi=c(No),dn=a(No,"P",{});var md=r(dn);el=d(md,`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),va=a(md,"A",{href:!0});var ou=r(va);tl=d(ou,"PreTrainedModel"),ou.forEach(t),ol=d(md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md.forEach(t),nl=c(No),ln=a(No,"P",{});var fd=r(ln);al=d(fd,"This model is also a PyTorch "),cn=a(fd,"A",{href:!0,rel:!0});var nu=r(cn);rl=d(nu,"torch.nn.Module"),nu.forEach(t),sl=d(fd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fd.forEach(t),dl=c(No),Ue=a(No,"DIV",{class:!0});var Ao=r(Ue);v(pn.$$.fragment,Ao),il=c(Ao),Ot=a(Ao,"P",{});var Aa=r(Ot);ll=d(Aa,"The "),Ta=a(Aa,"A",{href:!0});var au=r(Ta);cl=d(au,"BlenderbotModel"),au.forEach(t),pl=d(Aa," forward method, overrides the "),hr=a(Aa,"CODE",{});var ru=r(hr);hl=d(ru,"__call__"),ru.forEach(t),ul=d(Aa," special method."),Aa.forEach(t),ml=c(Ao),v(oo.$$.fragment,Ao),fl=c(Ao),v(no.$$.fragment,Ao),Ao.forEach(t),No.forEach(t),Ws=c(o),Pt=a(o,"H2",{class:!0});var _d=r(Pt);ao=a(_d,"A",{id:!0,class:!0,href:!0});var su=r(ao);ur=a(su,"SPAN",{});var du=r(ur);v(hn.$$.fragment,du),du.forEach(t),su.forEach(t),_l=c(_d),mr=a(_d,"SPAN",{});var iu=r(mr);gl=d(iu,"BlenderbotForConditionalGeneration"),iu.forEach(t),_d.forEach(t),Us=c(o),at=a(o,"P",{});var ca=r(at);bl=d(ca,"See "),wa=a(ca,"A",{href:!0});var lu=r(wa);yl=d(lu,"BartForConditionalGeneration"),lu.forEach(t),kl=d(ca," for arguments to "),fr=a(ca,"EM",{});var cu=r(fr);vl=d(cu,"forward"),cu.forEach(t),Tl=d(ca," and "),_r=a(ca,"EM",{});var pu=r(_r);wl=d(pu,"generate"),pu.forEach(t),ca.forEach(t),Rs=c(o),Ie=a(o,"DIV",{class:!0});var Io=r(Ie);v(un.$$.fragment,Io),$l=c(Io),mn=a(Io,"P",{});var gd=r(mn);xl=d(gd,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),$a=a(gd,"A",{href:!0});var hu=r($a);Bl=d(hu,"PreTrainedModel"),hu.forEach(t),Fl=d(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd.forEach(t),zl=c(Io),fn=a(Io,"P",{});var bd=r(fn);ql=d(bd,"This model is also a PyTorch "),_n=a(bd,"A",{href:!0,rel:!0});var uu=r(_n);El=d(uu,"torch.nn.Module"),uu.forEach(t),Ml=d(bd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bd.forEach(t),Cl=c(Io),Re=a(Io,"DIV",{class:!0});var Lo=r(Re);v(gn.$$.fragment,Lo),jl=c(Lo),Nt=a(Lo,"P",{});var Ia=r(Nt);Ol=d(Ia,"The "),xa=a(Ia,"A",{href:!0});var mu=r(xa);Pl=d(mu,"BlenderbotForConditionalGeneration"),mu.forEach(t),Nl=d(Ia," forward method, overrides the "),gr=a(Ia,"CODE",{});var fu=r(gr);Al=d(fu,"__call__"),fu.forEach(t),Il=d(Ia," special method."),Ia.forEach(t),Ll=c(Lo),v(ro.$$.fragment,Lo),Sl=c(Lo),v(so.$$.fragment,Lo),Lo.forEach(t),Io.forEach(t),Hs=c(o),At=a(o,"H2",{class:!0});var yd=r(At);io=a(yd,"A",{id:!0,class:!0,href:!0});var _u=r(io);br=a(_u,"SPAN",{});var gu=r(br);v(bn.$$.fragment,gu),gu.forEach(t),_u.forEach(t),Dl=c(yd),yr=a(yd,"SPAN",{});var bu=r(yr);Gl=d(bu,"BlenderbotForCausalLM"),bu.forEach(t),yd.forEach(t),Vs=c(o),It=a(o,"DIV",{class:!0});var kd=r(It);v(yn.$$.fragment,kd),Wl=c(kd),lo=a(kd,"DIV",{class:!0});var vd=r(lo);v(kn.$$.fragment,vd),Ul=c(vd),v(co.$$.fragment,vd),vd.forEach(t),kd.forEach(t),Ks=c(o),Lt=a(o,"H2",{class:!0});var Td=r(Lt);po=a(Td,"A",{id:!0,class:!0,href:!0});var yu=r(po);kr=a(yu,"SPAN",{});var ku=r(kr);v(vn.$$.fragment,ku),ku.forEach(t),yu.forEach(t),Rl=c(Td),vr=a(Td,"SPAN",{});var vu=r(vr);Hl=d(vu,"TFBlenderbotModel"),vu.forEach(t),Td.forEach(t),Js=c(o),ke=a(o,"DIV",{class:!0});var ut=r(ke);v(Tn.$$.fragment,ut),Vl=c(ut),wn=a(ut,"P",{});var wd=r(wn);Kl=d(wd,`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ba=a(wd,"A",{href:!0});var Tu=r(Ba);Jl=d(Tu,"TFPreTrainedModel"),Tu.forEach(t),Ql=d(wd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wd.forEach(t),Xl=c(ut),$n=a(ut,"P",{});var $d=r($n);Yl=d($d,"This model is also a "),xn=a($d,"A",{href:!0,rel:!0});var wu=r(xn);Zl=d(wu,"tf.keras.Model"),wu.forEach(t),ec=d($d,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$d.forEach(t),tc=c(ut),v(ho.$$.fragment,ut),oc=c(ut),He=a(ut,"DIV",{class:!0});var So=r(He);v(Bn.$$.fragment,So),nc=c(So),St=a(So,"P",{});var La=r(St);ac=d(La,"The "),Fa=a(La,"A",{href:!0});var $u=r(Fa);rc=d($u,"TFBlenderbotModel"),$u.forEach(t),sc=d(La," forward method, overrides the "),Tr=a(La,"CODE",{});var xu=r(Tr);dc=d(xu,"__call__"),xu.forEach(t),ic=d(La," special method."),La.forEach(t),lc=c(So),v(uo.$$.fragment,So),cc=c(So),v(mo.$$.fragment,So),So.forEach(t),ut.forEach(t),Qs=c(o),Dt=a(o,"H2",{class:!0});var xd=r(Dt);fo=a(xd,"A",{id:!0,class:!0,href:!0});var Bu=r(fo);wr=a(Bu,"SPAN",{});var Fu=r(wr);v(Fn.$$.fragment,Fu),Fu.forEach(t),Bu.forEach(t),pc=c(xd),$r=a(xd,"SPAN",{});var zu=r($r);hc=d(zu,"TFBlenderbotForConditionalGeneration"),zu.forEach(t),xd.forEach(t),Xs=c(o),ve=a(o,"DIV",{class:!0});var mt=r(ve);v(zn.$$.fragment,mt),uc=c(mt),qn=a(mt,"P",{});var Bd=r(qn);mc=d(Bd,`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),za=a(Bd,"A",{href:!0});var qu=r(za);fc=d(qu,"TFPreTrainedModel"),qu.forEach(t),_c=d(Bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bd.forEach(t),gc=c(mt),En=a(mt,"P",{});var Fd=r(En);bc=d(Fd,"This model is also a "),Mn=a(Fd,"A",{href:!0,rel:!0});var Eu=r(Mn);yc=d(Eu,"tf.keras.Model"),Eu.forEach(t),kc=d(Fd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fd.forEach(t),vc=c(mt),v(_o.$$.fragment,mt),Tc=c(mt),oe=a(mt,"DIV",{class:!0});var Ke=r(oe);v(Cn.$$.fragment,Ke),wc=c(Ke),Gt=a(Ke,"P",{});var Sa=r(Gt);$c=d(Sa,"The "),qa=a(Sa,"A",{href:!0});var Mu=r(qa);xc=d(Mu,"TFBlenderbotForConditionalGeneration"),Mu.forEach(t),Bc=d(Sa," forward method, overrides the "),xr=a(Sa,"CODE",{});var Cu=r(xr);Fc=d(Cu,"__call__"),Cu.forEach(t),zc=d(Sa," special method."),Sa.forEach(t),qc=c(Ke),v(go.$$.fragment,Ke),Ec=c(Ke),Br=a(Ke,"P",{});var ju=r(Br);Mc=d(ju,"Conversation example::"),ju.forEach(t),Cc=c(Ke),Fr=a(Ke,"BLOCKQUOTE",{});var Ou=r(Fr);zr=a(Ou,"BLOCKQUOTE",{});var Pu=r(zr);qr=a(Pu,"BLOCKQUOTE",{});var Nu=r(qr);Er=a(Nu,"P",{});var Au=r(Er);jc=d(Au,`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),Au.forEach(t),Nu.forEach(t),Pu.forEach(t),Ou.forEach(t),Oc=c(Ke),Mr=a(Ke,"BLOCKQUOTE",{});var Iu=r(Mr);Cr=a(Iu,"BLOCKQUOTE",{});var Lu=r(Cr);jr=a(Lu,"BLOCKQUOTE",{});var Su=r(jr);jn=a(Su,"P",{});var zd=r(jn);Pc=d(zd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Or=a(zd,"S",{});var Du=r(Or);Nc=d(Du,`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),Du.forEach(t),Ac=d(zd,` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),zd.forEach(t),Su.forEach(t),Lu.forEach(t),Iu.forEach(t),Ke.forEach(t),mt.forEach(t),Ys=c(o),Wt=a(o,"H2",{class:!0});var qd=r(Wt);bo=a(qd,"A",{id:!0,class:!0,href:!0});var Gu=r(bo);Pr=a(Gu,"SPAN",{});var Wu=r(Pr);v(On.$$.fragment,Wu),Wu.forEach(t),Gu.forEach(t),Ic=c(qd),Nr=a(qd,"SPAN",{});var Uu=r(Nr);Lc=d(Uu,"FlaxBlenderbotModel"),Uu.forEach(t),qd.forEach(t),Zs=c(o),S=a(o,"DIV",{class:!0});var ne=r(S);v(Pn.$$.fragment,ne),Sc=c(ne),Nn=a(ne,"P",{});var Ed=r(Nn);Dc=d(Ed,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ea=a(Ed,"A",{href:!0});var Ru=r(Ea);Gc=d(Ru,"FlaxPreTrainedModel"),Ru.forEach(t),Wc=d(Ed,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ed.forEach(t),Uc=c(ne),An=a(ne,"P",{});var Md=r(An);Rc=d(Md,`This model is also a Flax Linen
`),In=a(Md,"A",{href:!0,rel:!0});var Hu=r(In);Hc=d(Hu,"flax.nn.Module"),Hu.forEach(t),Vc=d(Md,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Md.forEach(t),Kc=c(ne),Ar=a(ne,"P",{});var Vu=r(Ar);Jc=d(Vu,"Finally, this model supports inherent JAX features such as:"),Vu.forEach(t),Qc=c(ne),rt=a(ne,"UL",{});var Do=r(rt);Ir=a(Do,"LI",{});var Ku=r(Ir);Ln=a(Ku,"A",{href:!0,rel:!0});var Ju=r(Ln);Xc=d(Ju,"Just-In-Time (JIT) compilation"),Ju.forEach(t),Ku.forEach(t),Yc=c(Do),Lr=a(Do,"LI",{});var Qu=r(Lr);Sn=a(Qu,"A",{href:!0,rel:!0});var Xu=r(Sn);Zc=d(Xu,"Automatic Differentiation"),Xu.forEach(t),Qu.forEach(t),ep=c(Do),Sr=a(Do,"LI",{});var Yu=r(Sr);Dn=a(Yu,"A",{href:!0,rel:!0});var Zu=r(Dn);tp=d(Zu,"Vectorization"),Zu.forEach(t),Yu.forEach(t),op=c(Do),Dr=a(Do,"LI",{});var em=r(Dr);Gn=a(em,"A",{href:!0,rel:!0});var tm=r(Gn);np=d(tm,"Parallelization"),tm.forEach(t),em.forEach(t),Do.forEach(t),ap=c(ne),Ve=a(ne,"DIV",{class:!0});var Go=r(Ve);v(Wn.$$.fragment,Go),rp=c(Go),Ut=a(Go,"P",{});var Da=r(Ut);sp=d(Da,"The "),Gr=a(Da,"CODE",{});var om=r(Gr);dp=d(om,"FlaxBlenderbotPreTrainedModel"),om.forEach(t),ip=d(Da," forward method, overrides the "),Wr=a(Da,"CODE",{});var nm=r(Wr);lp=d(nm,"__call__"),nm.forEach(t),cp=d(Da," special method."),Da.forEach(t),pp=c(Go),v(yo.$$.fragment,Go),hp=c(Go),v(ko.$$.fragment,Go),Go.forEach(t),up=c(ne),vo=a(ne,"DIV",{class:!0});var Cd=r(vo);v(Un.$$.fragment,Cd),mp=c(Cd),v(To.$$.fragment,Cd),Cd.forEach(t),fp=c(ne),wo=a(ne,"DIV",{class:!0});var jd=r(wo);v(Rn.$$.fragment,jd),_p=c(jd),v($o.$$.fragment,jd),jd.forEach(t),ne.forEach(t),ed=c(o),Rt=a(o,"H2",{class:!0});var Od=r(Rt);xo=a(Od,"A",{id:!0,class:!0,href:!0});var am=r(xo);Ur=a(am,"SPAN",{});var rm=r(Ur);v(Hn.$$.fragment,rm),rm.forEach(t),am.forEach(t),gp=c(Od),Rr=a(Od,"SPAN",{});var sm=r(Rr);bp=d(sm,"FlaxBlenderbotForConditionalGeneration"),sm.forEach(t),Od.forEach(t),td=c(o),D=a(o,"DIV",{class:!0});var ae=r(D);v(Vn.$$.fragment,ae),yp=c(ae),Kn=a(ae,"P",{});var Pd=r(Kn);kp=d(Pd,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ma=a(Pd,"A",{href:!0});var dm=r(Ma);vp=d(dm,"FlaxPreTrainedModel"),dm.forEach(t),Tp=d(Pd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pd.forEach(t),wp=c(ae),Jn=a(ae,"P",{});var Nd=r(Jn);$p=d(Nd,`This model is also a Flax Linen
`),Qn=a(Nd,"A",{href:!0,rel:!0});var im=r(Qn);xp=d(im,"flax.nn.Module"),im.forEach(t),Bp=d(Nd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Nd.forEach(t),Fp=c(ae),Hr=a(ae,"P",{});var lm=r(Hr);zp=d(lm,"Finally, this model supports inherent JAX features such as:"),lm.forEach(t),qp=c(ae),st=a(ae,"UL",{});var Wo=r(st);Vr=a(Wo,"LI",{});var cm=r(Vr);Xn=a(cm,"A",{href:!0,rel:!0});var pm=r(Xn);Ep=d(pm,"Just-In-Time (JIT) compilation"),pm.forEach(t),cm.forEach(t),Mp=c(Wo),Kr=a(Wo,"LI",{});var hm=r(Kr);Yn=a(hm,"A",{href:!0,rel:!0});var um=r(Yn);Cp=d(um,"Automatic Differentiation"),um.forEach(t),hm.forEach(t),jp=c(Wo),Jr=a(Wo,"LI",{});var mm=r(Jr);Zn=a(mm,"A",{href:!0,rel:!0});var fm=r(Zn);Op=d(fm,"Vectorization"),fm.forEach(t),mm.forEach(t),Pp=c(Wo),Qr=a(Wo,"LI",{});var _m=r(Qr);ea=a(_m,"A",{href:!0,rel:!0});var gm=r(ea);Np=d(gm,"Parallelization"),gm.forEach(t),_m.forEach(t),Wo.forEach(t),Ap=c(ae),W=a(ae,"DIV",{class:!0});var re=r(W);v(ta.$$.fragment,re),Ip=c(re),Ht=a(re,"P",{});var Ga=r(Ht);Lp=d(Ga,"The "),Xr=a(Ga,"CODE",{});var bm=r(Xr);Sp=d(bm,"FlaxBlenderbotPreTrainedModel"),bm.forEach(t),Dp=d(Ga," forward method, overrides the "),Yr=a(Ga,"CODE",{});var ym=r(Yr);Gp=d(ym,"__call__"),ym.forEach(t),Wp=d(Ga," special method."),Ga.forEach(t),Up=c(re),v(Bo.$$.fragment,re),Rp=c(re),Zr=a(re,"P",{});var km=r(Zr);Hp=d(km,"Conversation example::"),km.forEach(t),Vp=c(re),es=a(re,"BLOCKQUOTE",{});var vm=r(es);ts=a(vm,"BLOCKQUOTE",{});var Tm=r(ts);os=a(Tm,"BLOCKQUOTE",{});var wm=r(os);ns=a(wm,"P",{});var $m=r(ns);Kp=d($m,"from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),$m.forEach(t),wm.forEach(t),Tm.forEach(t),vm.forEach(t),Jp=c(re),as=a(re,"BLOCKQUOTE",{});var xm=r(as);rs=a(xm,"BLOCKQUOTE",{});var Bm=r(rs);ss=a(Bm,"BLOCKQUOTE",{});var Fm=r(ss);ds=a(Fm,"P",{});var zm=r(ds);Qp=d(zm,`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),zm.forEach(t),Fm.forEach(t),Bm.forEach(t),xm.forEach(t),Xp=c(re),is=a(re,"BLOCKQUOTE",{});var qm=r(is);ls=a(qm,"BLOCKQUOTE",{});var Em=r(ls);cs=a(Em,"BLOCKQUOTE",{});var Mm=r(cs);ps=a(Mm,"P",{});var Cm=r(ps);Yp=d(Cm,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),Cm.forEach(t),Mm.forEach(t),Em.forEach(t),qm.forEach(t),Zp=c(re),hs=a(re,"BLOCKQUOTE",{});var jm=r(hs);us=a(jm,"BLOCKQUOTE",{});var Om=r(us);oa=a(Om,"BLOCKQUOTE",{});var Ad=r(oa);Fo=a(Ad,"H1",{class:!0});var Id=r(Fo);zo=a(Id,"A",{id:!0,class:!0,href:!0});var Pm=r(zo);ms=a(Pm,"SPAN",{});var Nm=r(ms);v(na.$$.fragment,Nm),Nm.forEach(t),Pm.forEach(t),eh=c(Id),fs=a(Id,"SPAN",{});var Am=r(fs);th=d(Am,"Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),Am.forEach(t),Id.forEach(t),oh=c(Ad),_s=a(Ad,"P",{});var Im=r(_s);nh=d(Im,`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),Im.forEach(t),Ad.forEach(t),Om.forEach(t),jm.forEach(t),re.forEach(t),ah=c(ae),qo=a(ae,"DIV",{class:!0});var Ld=r(qo);v(aa.$$.fragment,Ld),rh=c(Ld),v(Eo.$$.fragment,Ld),Ld.forEach(t),sh=c(ae),Mo=a(ae,"DIV",{class:!0});var Sd=r(Mo);v(ra.$$.fragment,Sd),dh=c(Sd),v(Co.$$.fragment,Sd),Sd.forEach(t),ae.forEach(t),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(cf)),h(m,"id","blenderbot"),h(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(m,"href","#blenderbot"),h(g,"class","relative group"),h(se,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),h(se,"rel","nofollow"),h(Y,"id","overview"),h(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Y,"href","#overview"),h(I,"class","relative group"),h(ce,"href","https://arxiv.org/pdf/2004.13637.pdf"),h(ce,"rel","nofollow"),h(he,"href","https://huggingface.co/sshleifer"),h(he,"rel","nofollow"),h(me,"href","https://github.com/facebookresearch/ParlAI"),h(me,"rel","nofollow"),h(te,"id","implementation-notes"),h(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(te,"href","#implementation-notes"),h(O,"class","relative group"),h(q,"href","https://arxiv.org/pdf/1706.03762.pdf"),h(q,"rel","nofollow"),h(Oe,"href","https://huggingface.co/models?search=blenderbot"),h(Oe,"rel","nofollow"),h($e,"href","blenderbot-small"),h(Kt,"id","usage"),h(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Kt,"href","#usage"),h(Ft,"class","relative group"),h(Jt,"id","transformers.BlenderbotConfig"),h(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Jt,"href","#transformers.BlenderbotConfig"),h(zt,"class","relative group"),h(ha,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotModel"),h(Jo,"href","https://huggingface.co/facebook/blenderbot-3B"),h(Jo,"rel","nofollow"),h(ua,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(ma,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Xt,"id","transformers.BlenderbotTokenizer"),h(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xt,"href","#transformers.BlenderbotTokenizer"),h(Mt,"class","relative group"),h(fa,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),h(_a,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),h(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Zt,"id","transformers.BlenderbotTokenizerFast"),h(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Zt,"href","#transformers.BlenderbotTokenizerFast"),h(Ct,"class","relative group"),h(ba,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizerFast"),h(ya,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizerFast"),h(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(to,"id","transformers.BlenderbotModel"),h(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(to,"href","#transformers.BlenderbotModel"),h(jt,"class","relative group"),h(va,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(cn,"rel","nofollow"),h(Ta,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotModel"),h(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ao,"id","transformers.BlenderbotForConditionalGeneration"),h(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ao,"href","#transformers.BlenderbotForConditionalGeneration"),h(Pt,"class","relative group"),h(wa,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),h($a,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(_n,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(_n,"rel","nofollow"),h(xa,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),h(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(io,"id","transformers.BlenderbotForCausalLM"),h(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(io,"href","#transformers.BlenderbotForCausalLM"),h(At,"class","relative group"),h(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(po,"id","transformers.TFBlenderbotModel"),h(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(po,"href","#transformers.TFBlenderbotModel"),h(Lt,"class","relative group"),h(Ba,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(xn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(xn,"rel","nofollow"),h(Fa,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.TFBlenderbotModel"),h(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(fo,"id","transformers.TFBlenderbotForConditionalGeneration"),h(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(fo,"href","#transformers.TFBlenderbotForConditionalGeneration"),h(Dt,"class","relative group"),h(za,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Mn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Mn,"rel","nofollow"),h(qa,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.TFBlenderbotForConditionalGeneration"),h(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(bo,"id","transformers.FlaxBlenderbotModel"),h(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(bo,"href","#transformers.FlaxBlenderbotModel"),h(Wt,"class","relative group"),h(Ea,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(In,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),h(In,"rel","nofollow"),h(Ln,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(Ln,"rel","nofollow"),h(Sn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(Sn,"rel","nofollow"),h(Dn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(Dn,"rel","nofollow"),h(Gn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(Gn,"rel","nofollow"),h(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(xo,"id","transformers.FlaxBlenderbotForConditionalGeneration"),h(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(xo,"href","#transformers.FlaxBlenderbotForConditionalGeneration"),h(Rt,"class","relative group"),h(Ma,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(Qn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),h(Qn,"rel","nofollow"),h(Xn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(Xn,"rel","nofollow"),h(Yn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(Yn,"rel","nofollow"),h(Zn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(Zn,"rel","nofollow"),h(ea,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(ea,"rel","nofollow"),h(zo,"id","generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),h(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(zo,"href","#generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),h(Fo,"class","relative group"),h(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,p),f(o,y,_),f(o,g,_),e(g,m),e(m,b),T(i,b,null),e(g,u),e(g,E),e(E,Je),f(o,Le,_),f(o,A,_),e(A,xe),e(xe,Be),e(A,z),e(A,se),e(se,de),e(A,Qe),f(o,Se,_),f(o,I,_),e(I,Y),e(Y,Fe),T(U,Fe,null),e(I,Xe),e(I,ze),e(ze,ie),f(o,De,_),f(o,Z,_),e(Z,le),e(Z,ce),e(ce,Ye),e(Z,qe),f(o,C,_),f(o,j,_),e(j,Ze),f(o,ee,_),f(o,we,_),e(we,Ee),e(Ee,pe),f(o,Ge,_),f(o,R,_),e(R,L),e(R,he),e(he,ue),e(R,et),e(R,me),e(me,fe),e(R,tt),f(o,We,_),f(o,O,_),e(O,te),e(te,V),T(_e,V,null),e(O,Me),e(O,P),e(P,ot),f(o,G,_),f(o,H,_),e(H,ge),e(ge,B),e(ge,q),e(q,gt),e(ge,Ce),e(H,bt),e(H,je),e(je,M),e(je,Oe),e(Oe,yt),e(je,kt),e(H,vt),e(H,K),e(K,J),e(K,Q),e(Q,Tt),e(K,wt),e(K,X),e(X,$t),e(K,xt),e(K,$e),e($e,Bt),e(K,Pe),f(o,it,_),f(o,Ft,_),e(Ft,Kt),e(Kt,Wa),T(Ro,Wa,null),e(Ft,Dd),e(Ft,Ua),e(Ua,Gd),f(o,Cs,_),f(o,pa,_),e(pa,Wd),f(o,js,_),T(Ho,o,_),f(o,Os,_),f(o,zt,_),e(zt,Jt),e(Jt,Ra),T(Vo,Ra,null),e(zt,Ud),e(zt,Ha),e(Ha,Rd),f(o,Ps,_),f(o,Ne,_),T(Ko,Ne,null),e(Ne,Hd),e(Ne,qt),e(qt,Vd),e(qt,ha),e(ha,Kd),e(qt,Jd),e(qt,Jo),e(Jo,Qd),e(qt,Xd),e(Ne,Yd),e(Ne,Et),e(Et,Zd),e(Et,ua),e(ua,ei),e(Et,ti),e(Et,ma),e(ma,oi),e(Et,ni),e(Ne,ai),T(Qt,Ne,null),f(o,Ns,_),f(o,Mt,_),e(Mt,Xt),e(Xt,Va),T(Qo,Va,null),e(Mt,ri),e(Mt,Ka),e(Ka,si),f(o,As,_),f(o,be,_),T(Xo,be,null),e(be,di),e(be,Ja),e(Ja,ii),e(be,li),e(be,Yt),e(Yt,Qa),e(Qa,ci),e(Yt,pi),e(Yt,fa),e(fa,hi),e(Yt,ui),e(be,mi),e(be,Yo),e(Yo,fi),e(Yo,_a),e(_a,_i),e(Yo,gi),e(be,bi),e(be,lt),T(Zo,lt,null),e(lt,yi),e(lt,Xa),e(Xa,ki),e(lt,vi),e(lt,Ya),e(Ya,ga),e(ga,Ti),e(ga,Za),e(Za,wi),f(o,Is,_),f(o,Ct,_),e(Ct,Zt),e(Zt,er),T(en,er,null),e(Ct,$i),e(Ct,tr),e(tr,xi),f(o,Ls,_),f(o,ye,_),T(tn,ye,null),e(ye,Bi),e(ye,on),e(on,Fi),e(on,or),e(or,zi),e(on,qi),e(ye,Ei),e(ye,eo),e(eo,nr),e(nr,Mi),e(eo,Ci),e(eo,ba),e(ba,ji),e(eo,Oi),e(ye,Pi),e(ye,nn),e(nn,Ni),e(nn,ya),e(ya,Ai),e(nn,Ii),e(ye,Li),e(ye,ct),T(an,ct,null),e(ct,Si),e(ct,ar),e(ar,Di),e(ct,Gi),e(ct,rr),e(rr,ka),e(ka,Wi),e(ka,sr),e(sr,Ui),f(o,Ss,_),f(o,jt,_),e(jt,to),e(to,dr),T(rn,dr,null),e(jt,Ri),e(jt,ir),e(ir,Hi),f(o,Ds,_),f(o,nt,_),e(nt,Vi),e(nt,lr),e(lr,Ki),e(nt,Ji),e(nt,cr),e(cr,Qi),e(nt,Xi),e(nt,pr),e(pr,Yi),f(o,Gs,_),f(o,Ae,_),T(sn,Ae,null),e(Ae,Zi),e(Ae,dn),e(dn,el),e(dn,va),e(va,tl),e(dn,ol),e(Ae,nl),e(Ae,ln),e(ln,al),e(ln,cn),e(cn,rl),e(ln,sl),e(Ae,dl),e(Ae,Ue),T(pn,Ue,null),e(Ue,il),e(Ue,Ot),e(Ot,ll),e(Ot,Ta),e(Ta,cl),e(Ot,pl),e(Ot,hr),e(hr,hl),e(Ot,ul),e(Ue,ml),T(oo,Ue,null),e(Ue,fl),T(no,Ue,null),f(o,Ws,_),f(o,Pt,_),e(Pt,ao),e(ao,ur),T(hn,ur,null),e(Pt,_l),e(Pt,mr),e(mr,gl),f(o,Us,_),f(o,at,_),e(at,bl),e(at,wa),e(wa,yl),e(at,kl),e(at,fr),e(fr,vl),e(at,Tl),e(at,_r),e(_r,wl),f(o,Rs,_),f(o,Ie,_),T(un,Ie,null),e(Ie,$l),e(Ie,mn),e(mn,xl),e(mn,$a),e($a,Bl),e(mn,Fl),e(Ie,zl),e(Ie,fn),e(fn,ql),e(fn,_n),e(_n,El),e(fn,Ml),e(Ie,Cl),e(Ie,Re),T(gn,Re,null),e(Re,jl),e(Re,Nt),e(Nt,Ol),e(Nt,xa),e(xa,Pl),e(Nt,Nl),e(Nt,gr),e(gr,Al),e(Nt,Il),e(Re,Ll),T(ro,Re,null),e(Re,Sl),T(so,Re,null),f(o,Hs,_),f(o,At,_),e(At,io),e(io,br),T(bn,br,null),e(At,Dl),e(At,yr),e(yr,Gl),f(o,Vs,_),f(o,It,_),T(yn,It,null),e(It,Wl),e(It,lo),T(kn,lo,null),e(lo,Ul),T(co,lo,null),f(o,Ks,_),f(o,Lt,_),e(Lt,po),e(po,kr),T(vn,kr,null),e(Lt,Rl),e(Lt,vr),e(vr,Hl),f(o,Js,_),f(o,ke,_),T(Tn,ke,null),e(ke,Vl),e(ke,wn),e(wn,Kl),e(wn,Ba),e(Ba,Jl),e(wn,Ql),e(ke,Xl),e(ke,$n),e($n,Yl),e($n,xn),e(xn,Zl),e($n,ec),e(ke,tc),T(ho,ke,null),e(ke,oc),e(ke,He),T(Bn,He,null),e(He,nc),e(He,St),e(St,ac),e(St,Fa),e(Fa,rc),e(St,sc),e(St,Tr),e(Tr,dc),e(St,ic),e(He,lc),T(uo,He,null),e(He,cc),T(mo,He,null),f(o,Qs,_),f(o,Dt,_),e(Dt,fo),e(fo,wr),T(Fn,wr,null),e(Dt,pc),e(Dt,$r),e($r,hc),f(o,Xs,_),f(o,ve,_),T(zn,ve,null),e(ve,uc),e(ve,qn),e(qn,mc),e(qn,za),e(za,fc),e(qn,_c),e(ve,gc),e(ve,En),e(En,bc),e(En,Mn),e(Mn,yc),e(En,kc),e(ve,vc),T(_o,ve,null),e(ve,Tc),e(ve,oe),T(Cn,oe,null),e(oe,wc),e(oe,Gt),e(Gt,$c),e(Gt,qa),e(qa,xc),e(Gt,Bc),e(Gt,xr),e(xr,Fc),e(Gt,zc),e(oe,qc),T(go,oe,null),e(oe,Ec),e(oe,Br),e(Br,Mc),e(oe,Cc),e(oe,Fr),e(Fr,zr),e(zr,qr),e(qr,Er),e(Er,jc),e(oe,Oc),e(oe,Mr),e(Mr,Cr),e(Cr,jr),e(jr,jn),e(jn,Pc),e(jn,Or),e(Or,Nc),e(jn,Ac),f(o,Ys,_),f(o,Wt,_),e(Wt,bo),e(bo,Pr),T(On,Pr,null),e(Wt,Ic),e(Wt,Nr),e(Nr,Lc),f(o,Zs,_),f(o,S,_),T(Pn,S,null),e(S,Sc),e(S,Nn),e(Nn,Dc),e(Nn,Ea),e(Ea,Gc),e(Nn,Wc),e(S,Uc),e(S,An),e(An,Rc),e(An,In),e(In,Hc),e(An,Vc),e(S,Kc),e(S,Ar),e(Ar,Jc),e(S,Qc),e(S,rt),e(rt,Ir),e(Ir,Ln),e(Ln,Xc),e(rt,Yc),e(rt,Lr),e(Lr,Sn),e(Sn,Zc),e(rt,ep),e(rt,Sr),e(Sr,Dn),e(Dn,tp),e(rt,op),e(rt,Dr),e(Dr,Gn),e(Gn,np),e(S,ap),e(S,Ve),T(Wn,Ve,null),e(Ve,rp),e(Ve,Ut),e(Ut,sp),e(Ut,Gr),e(Gr,dp),e(Ut,ip),e(Ut,Wr),e(Wr,lp),e(Ut,cp),e(Ve,pp),T(yo,Ve,null),e(Ve,hp),T(ko,Ve,null),e(S,up),e(S,vo),T(Un,vo,null),e(vo,mp),T(To,vo,null),e(S,fp),e(S,wo),T(Rn,wo,null),e(wo,_p),T($o,wo,null),f(o,ed,_),f(o,Rt,_),e(Rt,xo),e(xo,Ur),T(Hn,Ur,null),e(Rt,gp),e(Rt,Rr),e(Rr,bp),f(o,td,_),f(o,D,_),T(Vn,D,null),e(D,yp),e(D,Kn),e(Kn,kp),e(Kn,Ma),e(Ma,vp),e(Kn,Tp),e(D,wp),e(D,Jn),e(Jn,$p),e(Jn,Qn),e(Qn,xp),e(Jn,Bp),e(D,Fp),e(D,Hr),e(Hr,zp),e(D,qp),e(D,st),e(st,Vr),e(Vr,Xn),e(Xn,Ep),e(st,Mp),e(st,Kr),e(Kr,Yn),e(Yn,Cp),e(st,jp),e(st,Jr),e(Jr,Zn),e(Zn,Op),e(st,Pp),e(st,Qr),e(Qr,ea),e(ea,Np),e(D,Ap),e(D,W),T(ta,W,null),e(W,Ip),e(W,Ht),e(Ht,Lp),e(Ht,Xr),e(Xr,Sp),e(Ht,Dp),e(Ht,Yr),e(Yr,Gp),e(Ht,Wp),e(W,Up),T(Bo,W,null),e(W,Rp),e(W,Zr),e(Zr,Hp),e(W,Vp),e(W,es),e(es,ts),e(ts,os),e(os,ns),e(ns,Kp),e(W,Jp),e(W,as),e(as,rs),e(rs,ss),e(ss,ds),e(ds,Qp),e(W,Xp),e(W,is),e(is,ls),e(ls,cs),e(cs,ps),e(ps,Yp),e(W,Zp),e(W,hs),e(hs,us),e(us,oa),e(oa,Fo),e(Fo,zo),e(zo,ms),T(na,ms,null),e(Fo,eh),e(Fo,fs),e(fs,th),e(oa,oh),e(oa,_s),e(_s,nh),e(D,ah),e(D,qo),T(aa,qo,null),e(qo,rh),T(Eo,qo,null),e(D,sh),e(D,Mo),T(ra,Mo,null),e(Mo,dh),T(Co,Mo,null),od=!0},p(o,[_]){const sa={};_&2&&(sa.$$scope={dirty:_,ctx:o}),Qt.$set(sa);const gs={};_&2&&(gs.$$scope={dirty:_,ctx:o}),oo.$set(gs);const bs={};_&2&&(bs.$$scope={dirty:_,ctx:o}),no.$set(bs);const ys={};_&2&&(ys.$$scope={dirty:_,ctx:o}),ro.$set(ys);const jo={};_&2&&(jo.$$scope={dirty:_,ctx:o}),so.$set(jo);const ks={};_&2&&(ks.$$scope={dirty:_,ctx:o}),co.$set(ks);const vs={};_&2&&(vs.$$scope={dirty:_,ctx:o}),ho.$set(vs);const da={};_&2&&(da.$$scope={dirty:_,ctx:o}),uo.$set(da);const Ts={};_&2&&(Ts.$$scope={dirty:_,ctx:o}),mo.$set(Ts);const ws={};_&2&&(ws.$$scope={dirty:_,ctx:o}),_o.$set(ws);const $s={};_&2&&($s.$$scope={dirty:_,ctx:o}),go.$set($s);const ia={};_&2&&(ia.$$scope={dirty:_,ctx:o}),yo.$set(ia);const xs={};_&2&&(xs.$$scope={dirty:_,ctx:o}),ko.$set(xs);const Bs={};_&2&&(Bs.$$scope={dirty:_,ctx:o}),To.$set(Bs);const Fs={};_&2&&(Fs.$$scope={dirty:_,ctx:o}),$o.$set(Fs);const zs={};_&2&&(zs.$$scope={dirty:_,ctx:o}),Bo.$set(zs);const Vt={};_&2&&(Vt.$$scope={dirty:_,ctx:o}),Eo.$set(Vt);const qs={};_&2&&(qs.$$scope={dirty:_,ctx:o}),Co.$set(qs)},i(o){od||(w(i.$$.fragment,o),w(U.$$.fragment,o),w(_e.$$.fragment,o),w(Ro.$$.fragment,o),w(Ho.$$.fragment,o),w(Vo.$$.fragment,o),w(Ko.$$.fragment,o),w(Qt.$$.fragment,o),w(Qo.$$.fragment,o),w(Xo.$$.fragment,o),w(Zo.$$.fragment,o),w(en.$$.fragment,o),w(tn.$$.fragment,o),w(an.$$.fragment,o),w(rn.$$.fragment,o),w(sn.$$.fragment,o),w(pn.$$.fragment,o),w(oo.$$.fragment,o),w(no.$$.fragment,o),w(hn.$$.fragment,o),w(un.$$.fragment,o),w(gn.$$.fragment,o),w(ro.$$.fragment,o),w(so.$$.fragment,o),w(bn.$$.fragment,o),w(yn.$$.fragment,o),w(kn.$$.fragment,o),w(co.$$.fragment,o),w(vn.$$.fragment,o),w(Tn.$$.fragment,o),w(ho.$$.fragment,o),w(Bn.$$.fragment,o),w(uo.$$.fragment,o),w(mo.$$.fragment,o),w(Fn.$$.fragment,o),w(zn.$$.fragment,o),w(_o.$$.fragment,o),w(Cn.$$.fragment,o),w(go.$$.fragment,o),w(On.$$.fragment,o),w(Pn.$$.fragment,o),w(Wn.$$.fragment,o),w(yo.$$.fragment,o),w(ko.$$.fragment,o),w(Un.$$.fragment,o),w(To.$$.fragment,o),w(Rn.$$.fragment,o),w($o.$$.fragment,o),w(Hn.$$.fragment,o),w(Vn.$$.fragment,o),w(ta.$$.fragment,o),w(Bo.$$.fragment,o),w(na.$$.fragment,o),w(aa.$$.fragment,o),w(Eo.$$.fragment,o),w(ra.$$.fragment,o),w(Co.$$.fragment,o),od=!0)},o(o){$(i.$$.fragment,o),$(U.$$.fragment,o),$(_e.$$.fragment,o),$(Ro.$$.fragment,o),$(Ho.$$.fragment,o),$(Vo.$$.fragment,o),$(Ko.$$.fragment,o),$(Qt.$$.fragment,o),$(Qo.$$.fragment,o),$(Xo.$$.fragment,o),$(Zo.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(an.$$.fragment,o),$(rn.$$.fragment,o),$(sn.$$.fragment,o),$(pn.$$.fragment,o),$(oo.$$.fragment,o),$(no.$$.fragment,o),$(hn.$$.fragment,o),$(un.$$.fragment,o),$(gn.$$.fragment,o),$(ro.$$.fragment,o),$(so.$$.fragment,o),$(bn.$$.fragment,o),$(yn.$$.fragment,o),$(kn.$$.fragment,o),$(co.$$.fragment,o),$(vn.$$.fragment,o),$(Tn.$$.fragment,o),$(ho.$$.fragment,o),$(Bn.$$.fragment,o),$(uo.$$.fragment,o),$(mo.$$.fragment,o),$(Fn.$$.fragment,o),$(zn.$$.fragment,o),$(_o.$$.fragment,o),$(Cn.$$.fragment,o),$(go.$$.fragment,o),$(On.$$.fragment,o),$(Pn.$$.fragment,o),$(Wn.$$.fragment,o),$(yo.$$.fragment,o),$(ko.$$.fragment,o),$(Un.$$.fragment,o),$(To.$$.fragment,o),$(Rn.$$.fragment,o),$($o.$$.fragment,o),$(Hn.$$.fragment,o),$(Vn.$$.fragment,o),$(ta.$$.fragment,o),$(Bo.$$.fragment,o),$(na.$$.fragment,o),$(aa.$$.fragment,o),$(Eo.$$.fragment,o),$(ra.$$.fragment,o),$(Co.$$.fragment,o),od=!1},d(o){t(p),o&&t(y),o&&t(g),x(i),o&&t(Le),o&&t(A),o&&t(Se),o&&t(I),x(U),o&&t(De),o&&t(Z),o&&t(C),o&&t(j),o&&t(ee),o&&t(we),o&&t(Ge),o&&t(R),o&&t(We),o&&t(O),x(_e),o&&t(G),o&&t(H),o&&t(it),o&&t(Ft),x(Ro),o&&t(Cs),o&&t(pa),o&&t(js),x(Ho,o),o&&t(Os),o&&t(zt),x(Vo),o&&t(Ps),o&&t(Ne),x(Ko),x(Qt),o&&t(Ns),o&&t(Mt),x(Qo),o&&t(As),o&&t(be),x(Xo),x(Zo),o&&t(Is),o&&t(Ct),x(en),o&&t(Ls),o&&t(ye),x(tn),x(an),o&&t(Ss),o&&t(jt),x(rn),o&&t(Ds),o&&t(nt),o&&t(Gs),o&&t(Ae),x(sn),x(pn),x(oo),x(no),o&&t(Ws),o&&t(Pt),x(hn),o&&t(Us),o&&t(at),o&&t(Rs),o&&t(Ie),x(un),x(gn),x(ro),x(so),o&&t(Hs),o&&t(At),x(bn),o&&t(Vs),o&&t(It),x(yn),x(kn),x(co),o&&t(Ks),o&&t(Lt),x(vn),o&&t(Js),o&&t(ke),x(Tn),x(ho),x(Bn),x(uo),x(mo),o&&t(Qs),o&&t(Dt),x(Fn),o&&t(Xs),o&&t(ve),x(zn),x(_o),x(Cn),x(go),o&&t(Ys),o&&t(Wt),x(On),o&&t(Zs),o&&t(S),x(Pn),x(Wn),x(yo),x(ko),x(Un),x(To),x(Rn),x($o),o&&t(ed),o&&t(Rt),x(Hn),o&&t(td),o&&t(D),x(Vn),x(ta),x(Bo),x(na),x(aa),x(Eo),x(ra),x(Co)}}}const cf={local:"blenderbot",sections:[{local:"overview",title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage",title:"Usage"},{local:"transformers.BlenderbotConfig",title:"BlenderbotConfig"},{local:"transformers.BlenderbotTokenizer",title:"BlenderbotTokenizer"},{local:"transformers.BlenderbotTokenizerFast",title:"BlenderbotTokenizerFast"},{local:"transformers.BlenderbotModel",title:"BlenderbotModel"},{local:"transformers.BlenderbotForConditionalGeneration",title:"BlenderbotForConditionalGeneration"},{local:"transformers.BlenderbotForCausalLM",title:"BlenderbotForCausalLM"},{local:"transformers.TFBlenderbotModel",title:"TFBlenderbotModel"},{local:"transformers.TFBlenderbotForConditionalGeneration",title:"TFBlenderbotForConditionalGeneration"},{local:"transformers.FlaxBlenderbotModel",title:"FlaxBlenderbotModel"},{local:"transformers.FlaxBlenderbotForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot"};function pf(F){return Wm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class bf extends Lm{constructor(p){super();Sm(this,p,pf,lf,Dm,{})}}export{bf as default,cf as metadata};
