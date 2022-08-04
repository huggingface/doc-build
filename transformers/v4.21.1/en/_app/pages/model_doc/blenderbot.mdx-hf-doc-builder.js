import{S as Lm,i as Sm,s as Dm,e as n,k as l,w as k,t as a,M as Gm,c as r,d as t,m as c,a as s,x as y,h as d,b as h,G as e,g as f,y as T,q as w,o as $,B as x,v as Wm,L as nt}from"../../chunks/vendor-hf-doc-builder.js";import{T as xo}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ke}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ce}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ot}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Um(z){let p,v,g,u,b;return u=new Ke({props:{code:`from transformers import BlenderbotModel, BlenderbotConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),v=a("Example:"),g=l(),k(u.$$.fragment)},l(i){p=r(i,"P",{});var m=s(p);v=d(m,"Example:"),m.forEach(t),g=c(i),y(u.$$.fragment,i)},m(i,m){f(i,p,m),e(p,v),f(i,g,m),T(u,i,m),b=!0},p:nt,i(i){b||(w(u.$$.fragment,i),b=!0)},o(i){$(u.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(u,i)}}}function Rm(z){let p,v,g,u,b;return{c(){p=n("p"),v=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=r(i,"P",{});var m=s(p);v=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(m,"CODE",{});var B=s(g);u=d(B,"Module"),B.forEach(t),b=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){f(i,p,m),e(p,v),e(p,g),e(g,u),e(p,b)},d(i){i&&t(p)}}}function Hm(z){let p,v,g,u,b;return u=new Ke({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotModel

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
[<span class="hljs-number">1</span>, <span class="hljs-number">6</span>, <span class="hljs-number">1280</span>]`}}),{c(){p=n("p"),v=a("Example:"),g=l(),k(u.$$.fragment)},l(i){p=r(i,"P",{});var m=s(p);v=d(m,"Example:"),m.forEach(t),g=c(i),y(u.$$.fragment,i)},m(i,m){f(i,p,m),e(p,v),f(i,g,m),T(u,i,m),b=!0},p:nt,i(i){b||(w(u.$$.fragment,i),b=!0)},o(i){$(u.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(u,i)}}}function Km(z){let p,v,g,u,b;return{c(){p=n("p"),v=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=r(i,"P",{});var m=s(p);v=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(m,"CODE",{});var B=s(g);u=d(B,"Module"),B.forEach(t),b=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){f(i,p,m),e(p,v),e(p,g),e(g,u),e(p,b)},d(i){i&&t(p)}}}function Vm(z){let p,v,g,u,b;return u=new Ke({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

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
Bot:   That&#x27;s too bad. Have you tried encouraging them to change their eating habits?</span>`}}),{c(){p=n("p"),v=a("Conversation example:"),g=l(),k(u.$$.fragment)},l(i){p=r(i,"P",{});var m=s(p);v=d(m,"Conversation example:"),m.forEach(t),g=c(i),y(u.$$.fragment,i)},m(i,m){f(i,p,m),e(p,v),f(i,g,m),T(u,i,m),b=!0},p:nt,i(i){b||(w(u.$$.fragment,i),b=!0)},o(i){$(u.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(u,i)}}}function Jm(z){let p,v,g,u,b;return u=new Ke({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){p=n("p"),v=a("Example:"),g=l(),k(u.$$.fragment)},l(i){p=r(i,"P",{});var m=s(p);v=d(m,"Example:"),m.forEach(t),g=c(i),y(u.$$.fragment,i)},m(i,m){f(i,p,m),e(p,v),f(i,g,m),T(u,i,m),b=!0},p:nt,i(i){b||(w(u.$$.fragment,i),b=!0)},o(i){$(u.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(u,i)}}}function Qm(z){let p,v,g,u,b,i,m,B,Me,pe,E,fe,te,Ce,oe,ne,je,we,G,N,_e,R,M,j,Oe,J,Q,Pe,W,Ne,Ae,A,he,re,$e,ue,H,Ie,xe,C,Le,U,Se;return{c(){p=n("p"),v=a("TF 2.0 models accepts two formats as inputs:"),g=l(),u=n("ul"),b=n("li"),i=a("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),B=n("li"),Me=a("having all inputs as a list, tuple or dict in the first positional arguments."),pe=l(),E=n("p"),fe=a("This second option is useful when using "),te=n("code"),Ce=a("tf.keras.Model.fit"),oe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=n("code"),je=a("model(inputs)"),we=a("."),G=l(),N=n("p"),_e=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=l(),M=n("ul"),j=n("li"),Oe=a("a single Tensor with "),J=n("code"),Q=a("input_ids"),Pe=a(" only and nothing else: "),W=n("code"),Ne=a("model(input_ids)"),Ae=l(),A=n("li"),he=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=n("code"),$e=a("model([input_ids, attention_mask])"),ue=a(" or "),H=n("code"),Ie=a("model([input_ids, attention_mask, token_type_ids])"),xe=l(),C=n("li"),Le=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),Se=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(F){p=r(F,"P",{});var q=s(p);v=d(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),g=c(F),u=r(F,"UL",{});var ge=s(u);b=r(ge,"LI",{});var rt=s(b);i=d(rt,"having all inputs as keyword arguments (like PyTorch models), or"),rt.forEach(t),m=c(ge),B=r(ge,"LI",{});var Ve=s(B);Me=d(Ve,"having all inputs as a list, tuple or dict in the first positional arguments."),Ve.forEach(t),ge.forEach(t),pe=c(F),E=r(F,"P",{});var O=s(E);fe=d(O,"This second option is useful when using "),te=r(O,"CODE",{});var me=s(te);Ce=d(me,"tf.keras.Model.fit"),me.forEach(t),oe=d(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=r(O,"CODE",{});var De=s(ne);je=d(De,"model(inputs)"),De.forEach(t),we=d(O,"."),O.forEach(t),G=c(F),N=r(F,"P",{});var be=s(N);_e=d(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),R=c(F),M=r(F,"UL",{});var K=s(M);j=r(K,"LI",{});var V=s(j);Oe=d(V,"a single Tensor with "),J=r(V,"CODE",{});var st=s(J);Q=d(st,"input_ids"),st.forEach(t),Pe=d(V," only and nothing else: "),W=r(V,"CODE",{});var Je=s(W);Ne=d(Je,"model(input_ids)"),Je.forEach(t),V.forEach(t),Ae=c(K),A=r(K,"LI",{});var I=s(A);he=d(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=r(I,"CODE",{});var ve=s(re);$e=d(ve,"model([input_ids, attention_mask])"),ve.forEach(t),ue=d(I," or "),H=r(I,"CODE",{});var at=s(H);Ie=d(at,"model([input_ids, attention_mask, token_type_ids])"),at.forEach(t),I.forEach(t),xe=c(K),C=r(K,"LI",{});var se=s(C);Le=d(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(se,"CODE",{});var dt=s(U);Se=d(dt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),dt.forEach(t),se.forEach(t),K.forEach(t)},m(F,q){f(F,p,q),e(p,v),f(F,g,q),f(F,u,q),e(u,b),e(b,i),e(u,m),e(u,B),e(B,Me),f(F,pe,q),f(F,E,q),e(E,fe),e(E,te),e(te,Ce),e(E,oe),e(E,ne),e(ne,je),e(E,we),f(F,G,q),f(F,N,q),e(N,_e),f(F,R,q),f(F,M,q),e(M,j),e(j,Oe),e(j,J),e(J,Q),e(j,Pe),e(j,W),e(W,Ne),e(M,Ae),e(M,A),e(A,he),e(A,re),e(re,$e),e(A,ue),e(A,H),e(H,Ie),e(M,xe),e(M,C),e(C,Le),e(C,U),e(U,Se)},d(F){F&&t(p),F&&t(g),F&&t(u),F&&t(pe),F&&t(E),F&&t(G),F&&t(N),F&&t(R),F&&t(M)}}}function Xm(z){let p,v,g,u,b;return{c(){p=n("p"),v=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=r(i,"P",{});var m=s(p);v=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(m,"CODE",{});var B=s(g);u=d(B,"Module"),B.forEach(t),b=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){f(i,p,m),e(p,v),e(p,g),e(g,u),e(p,b)},d(i){i&&t(p)}}}function Ym(z){let p,v,g,u,b;return u=new Ke({props:{code:`from transformers import BlenderbotTokenizer, TFBlenderbotModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),v=a("Example:"),g=l(),k(u.$$.fragment)},l(i){p=r(i,"P",{});var m=s(p);v=d(m,"Example:"),m.forEach(t),g=c(i),y(u.$$.fragment,i)},m(i,m){f(i,p,m),e(p,v),f(i,g,m),T(u,i,m),b=!0},p:nt,i(i){b||(w(u.$$.fragment,i),b=!0)},o(i){$(u.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(u,i)}}}function Zm(z){let p,v,g,u,b,i,m,B,Me,pe,E,fe,te,Ce,oe,ne,je,we,G,N,_e,R,M,j,Oe,J,Q,Pe,W,Ne,Ae,A,he,re,$e,ue,H,Ie,xe,C,Le,U,Se;return{c(){p=n("p"),v=a("TF 2.0 models accepts two formats as inputs:"),g=l(),u=n("ul"),b=n("li"),i=a("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),B=n("li"),Me=a("having all inputs as a list, tuple or dict in the first positional arguments."),pe=l(),E=n("p"),fe=a("This second option is useful when using "),te=n("code"),Ce=a("tf.keras.Model.fit"),oe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=n("code"),je=a("model(inputs)"),we=a("."),G=l(),N=n("p"),_e=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=l(),M=n("ul"),j=n("li"),Oe=a("a single Tensor with "),J=n("code"),Q=a("input_ids"),Pe=a(" only and nothing else: "),W=n("code"),Ne=a("model(input_ids)"),Ae=l(),A=n("li"),he=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=n("code"),$e=a("model([input_ids, attention_mask])"),ue=a(" or "),H=n("code"),Ie=a("model([input_ids, attention_mask, token_type_ids])"),xe=l(),C=n("li"),Le=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),Se=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(F){p=r(F,"P",{});var q=s(p);v=d(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),g=c(F),u=r(F,"UL",{});var ge=s(u);b=r(ge,"LI",{});var rt=s(b);i=d(rt,"having all inputs as keyword arguments (like PyTorch models), or"),rt.forEach(t),m=c(ge),B=r(ge,"LI",{});var Ve=s(B);Me=d(Ve,"having all inputs as a list, tuple or dict in the first positional arguments."),Ve.forEach(t),ge.forEach(t),pe=c(F),E=r(F,"P",{});var O=s(E);fe=d(O,"This second option is useful when using "),te=r(O,"CODE",{});var me=s(te);Ce=d(me,"tf.keras.Model.fit"),me.forEach(t),oe=d(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=r(O,"CODE",{});var De=s(ne);je=d(De,"model(inputs)"),De.forEach(t),we=d(O,"."),O.forEach(t),G=c(F),N=r(F,"P",{});var be=s(N);_e=d(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),R=c(F),M=r(F,"UL",{});var K=s(M);j=r(K,"LI",{});var V=s(j);Oe=d(V,"a single Tensor with "),J=r(V,"CODE",{});var st=s(J);Q=d(st,"input_ids"),st.forEach(t),Pe=d(V," only and nothing else: "),W=r(V,"CODE",{});var Je=s(W);Ne=d(Je,"model(input_ids)"),Je.forEach(t),V.forEach(t),Ae=c(K),A=r(K,"LI",{});var I=s(A);he=d(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=r(I,"CODE",{});var ve=s(re);$e=d(ve,"model([input_ids, attention_mask])"),ve.forEach(t),ue=d(I," or "),H=r(I,"CODE",{});var at=s(H);Ie=d(at,"model([input_ids, attention_mask, token_type_ids])"),at.forEach(t),I.forEach(t),xe=c(K),C=r(K,"LI",{});var se=s(C);Le=d(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(se,"CODE",{});var dt=s(U);Se=d(dt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),dt.forEach(t),se.forEach(t),K.forEach(t)},m(F,q){f(F,p,q),e(p,v),f(F,g,q),f(F,u,q),e(u,b),e(b,i),e(u,m),e(u,B),e(B,Me),f(F,pe,q),f(F,E,q),e(E,fe),e(E,te),e(te,Ce),e(E,oe),e(E,ne),e(ne,je),e(E,we),f(F,G,q),f(F,N,q),e(N,_e),f(F,R,q),f(F,M,q),e(M,j),e(j,Oe),e(j,J),e(J,Q),e(j,Pe),e(j,W),e(W,Ne),e(M,Ae),e(M,A),e(A,he),e(A,re),e(re,$e),e(A,ue),e(A,H),e(H,Ie),e(M,xe),e(M,C),e(C,Le),e(C,U),e(U,Se)},d(F){F&&t(p),F&&t(g),F&&t(u),F&&t(pe),F&&t(E),F&&t(G),F&&t(N),F&&t(R),F&&t(M)}}}function ef(z){let p,v,g,u,b;return{c(){p=n("p"),v=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=r(i,"P",{});var m=s(p);v=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(m,"CODE",{});var B=s(g);u=d(B,"Module"),B.forEach(t),b=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){f(i,p,m),e(p,v),e(p,g),e(g,u),e(p,b)},d(i){i&&t(p)}}}function tf(z){let p,v,g,u,b;return{c(){p=n("p"),v=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=r(i,"P",{});var m=s(p);v=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(m,"CODE",{});var B=s(g);u=d(B,"Module"),B.forEach(t),b=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){f(i,p,m),e(p,v),e(p,g),e(g,u),e(p,b)},d(i){i&&t(p)}}}function of(z){let p,v,g,u,b;return u=new Ke({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotModel

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = FlaxBlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),v=a("Example:"),g=l(),k(u.$$.fragment)},l(i){p=r(i,"P",{});var m=s(p);v=d(m,"Example:"),m.forEach(t),g=c(i),y(u.$$.fragment,i)},m(i,m){f(i,p,m),e(p,v),f(i,g,m),T(u,i,m),b=!0},p:nt,i(i){b||(w(u.$$.fragment,i),b=!0)},o(i){$(u.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(u,i)}}}function nf(z){let p,v,g,u,b;return u=new Ke({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),v=a("Example:"),g=l(),k(u.$$.fragment)},l(i){p=r(i,"P",{});var m=s(p);v=d(m,"Example:"),m.forEach(t),g=c(i),y(u.$$.fragment,i)},m(i,m){f(i,p,m),e(p,v),f(i,g,m),T(u,i,m),b=!0},p:nt,i(i){b||(w(u.$$.fragment,i),b=!0)},o(i){$(u.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(u,i)}}}function rf(z){let p,v,g,u,b;return u=new Ke({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),v=a("Example:"),g=l(),k(u.$$.fragment)},l(i){p=r(i,"P",{});var m=s(p);v=d(m,"Example:"),m.forEach(t),g=c(i),y(u.$$.fragment,i)},m(i,m){f(i,p,m),e(p,v),f(i,g,m),T(u,i,m),b=!0},p:nt,i(i){b||(w(u.$$.fragment,i),b=!0)},o(i){$(u.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(u,i)}}}function sf(z){let p,v,g,u,b;return{c(){p=n("p"),v=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=r(i,"P",{});var m=s(p);v=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(m,"CODE",{});var B=s(g);u=d(B,"Module"),B.forEach(t),b=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){f(i,p,m),e(p,v),e(p,g),e(g,u),e(p,b)},d(i){i&&t(p)}}}function af(z){let p,v,g,u,b;return u=new Ke({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),v=a("Example:"),g=l(),k(u.$$.fragment)},l(i){p=r(i,"P",{});var m=s(p);v=d(m,"Example:"),m.forEach(t),g=c(i),y(u.$$.fragment,i)},m(i,m){f(i,p,m),e(p,v),f(i,g,m),T(u,i,m),b=!0},p:nt,i(i){b||(w(u.$$.fragment,i),b=!0)},o(i){$(u.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(u,i)}}}function df(z){let p,v,g,u,b;return u=new Ke({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=n("p"),v=a("Example:"),g=l(),k(u.$$.fragment)},l(i){p=r(i,"P",{});var m=s(p);v=d(m,"Example:"),m.forEach(t),g=c(i),y(u.$$.fragment,i)},m(i,m){f(i,p,m),e(p,v),f(i,g,m),T(u,i,m),b=!0},p:nt,i(i){b||(w(u.$$.fragment,i),b=!0)},o(i){$(u.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(u,i)}}}function lf(z){let p,v,g,u,b,i,m,B,Me,pe,E,fe,te,Ce,oe,ne,je,we,G,N,_e,R,M,j,Oe,J,Q,Pe,W,Ne,Ae,A,he,re,$e,ue,H,Ie,xe,C,Le,U,Se,F,q,ge,rt,Ve,O,me,De,be,K,V,st,Je,I,ve,at,se,dt,Bd,qd,Fo,Ed,zo,Md,Cd,jd,Ge,Od,zr,Pd,Nd,Br,Ad,Id,Vn,Ld,Sd,ba,it,qt,qr,Bo,Dd,Er,Gd,va,Jn,Wd,ka,qo,ya,lt,Et,Mr,Eo,Ud,Cr,Rd,Ta,ke,Mo,Hd,ct,Kd,Qn,Vd,Jd,Co,Qd,Xd,Yd,pt,Zd,Xn,ei,ti,Yn,oi,ni,ri,Mt,wa,ht,Ct,jr,jo,si,Or,ai,$a,ae,Oo,di,Pr,ii,li,jt,Nr,ci,pi,Zn,hi,ui,mi,Po,fi,er,_i,gi,bi,Qe,No,vi,Ar,ki,yi,Ir,tr,Ti,Lr,wi,xa,ut,Ot,Sr,Ao,$i,Dr,xi,Fa,de,Io,Fi,Lo,zi,Gr,Bi,qi,Ei,Pt,Wr,Mi,Ci,or,ji,Oi,Pi,So,Ni,nr,Ai,Ii,Li,Xe,Do,Si,Ur,Di,Gi,Rr,rr,Wi,Hr,Ui,za,mt,Nt,Kr,Go,Ri,Vr,Hi,Ba,We,Ki,Jr,Vi,Ji,Qr,Qi,Xi,Xr,Yi,qa,ye,Wo,Zi,Uo,el,sr,tl,ol,nl,Ro,rl,Ho,sl,al,dl,Fe,Ko,il,ft,ll,ar,cl,pl,Yr,hl,ul,ml,At,fl,It,Ea,_t,Lt,Zr,Vo,_l,es,gl,Ma,Ue,bl,dr,vl,kl,ts,yl,Tl,os,wl,Ca,Te,Jo,$l,Qo,xl,ir,Fl,zl,Bl,Xo,ql,Yo,El,Ml,Cl,ze,Zo,jl,gt,Ol,lr,Pl,Nl,ns,Al,Il,Ll,St,Sl,Dt,ja,bt,Gt,rs,en,Dl,ss,Gl,Oa,vt,tn,Wl,Wt,on,Ul,Ut,Pa,kt,Rt,as,nn,Rl,ds,Hl,Na,ie,rn,Kl,sn,Vl,cr,Jl,Ql,Xl,an,Yl,dn,Zl,ec,tc,Ht,oc,Be,ln,nc,yt,rc,pr,sc,ac,is,dc,ic,lc,Kt,cc,Vt,Aa,Tt,Jt,ls,cn,pc,cs,hc,Ia,le,pn,uc,hn,mc,hr,fc,_c,gc,un,bc,mn,vc,kc,yc,Qt,Tc,X,fn,wc,wt,$c,ur,xc,Fc,ps,zc,Bc,qc,Xt,Ec,hs,Mc,Cc,us,ms,fs,_s,jc,Oc,gs,bs,vs,_n,Pc,ks,Nc,Ac,La,$t,Yt,ys,gn,Ic,Ts,Lc,Sa,L,bn,Sc,vn,Dc,mr,Gc,Wc,Uc,kn,Rc,yn,Hc,Kc,Vc,ws,Jc,Qc,Re,$s,Tn,Xc,Yc,xs,wn,Zc,ep,Fs,$n,tp,op,zs,xn,np,rp,qe,Fn,sp,xt,ap,Bs,dp,ip,qs,lp,cp,pp,Zt,hp,eo,up,to,zn,mp,oo,fp,no,Bn,_p,ro,Da,Ft,so,Es,qn,gp,Ms,bp,Ga,S,En,vp,Mn,kp,fr,yp,Tp,wp,Cn,$p,jn,xp,Fp,zp,Cs,Bp,qp,He,js,On,Ep,Mp,Os,Pn,Cp,jp,Ps,Nn,Op,Pp,Ns,An,Np,Ap,D,In,Ip,zt,Lp,As,Sp,Dp,Is,Gp,Wp,Up,ao,Rp,Ls,Hp,Kp,Ss,Ds,Gs,Ws,Vp,Jp,Us,Rs,Hs,Ks,Qp,Xp,Vs,Js,Qs,Xs,Yp,Zp,Ys,Zs,Ln,io,lo,ea,Sn,eh,ta,th,oh,oa,nh,rh,co,Dn,sh,po,ah,ho,Gn,dh,uo,Wa;return i=new ce({}),R=new ce({}),be=new ce({}),Bo=new ce({}),qo=new Ke({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

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
[<span class="hljs-string">&quot;&lt;s&gt; That&#x27;s unfortunate. Are they trying to lose weight or are they just trying to be healthier?&lt;/s&gt;&quot;</span>]`}}),Eo=new ce({}),Mo=new P({props:{name:"class transformers.BlenderbotConfig",anchor:"transformers.BlenderbotConfig",parameters:[{name:"vocab_size",val:" = 8008"},{name:"max_position_embeddings",val:" = 128"},{name:"encoder_layers",val:" = 2"},{name:"encoder_ffn_dim",val:" = 10240"},{name:"encoder_attention_heads",val:" = 32"},{name:"decoder_layers",val:" = 24"},{name:"decoder_ffn_dim",val:" = 10240"},{name:"decoder_attention_heads",val:" = 32"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 2560"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"encoder_no_repeat_ngram_size",val:" = 3"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Blenderbot model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotModel">BlenderbotModel</a> or <a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.TFBlenderbotModel">TFBlenderbotModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.BlenderbotConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BlenderbotConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.BlenderbotConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/configuration_blenderbot.py#L36"}}),Mt=new ot({props:{anchor:"transformers.BlenderbotConfig.example",$$slots:{default:[Um]},$$scope:{ctx:z}}}),jo=new ce({}),Oo=new P({props:{name:"class transformers.BlenderbotTokenizer",anchor:"transformers.BlenderbotTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/tokenization_blenderbot.py#L46"}}),No=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/tokenization_blenderbot.py#L59",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ao=new ce({}),Io=new P({props:{name:"class transformers.BlenderbotTokenizerFast",anchor:"transformers.BlenderbotTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L47"}}),Do=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L61",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Go=new ce({}),Wo=new P({props:{name:"class transformers.BlenderbotModel",anchor:"transformers.BlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/modeling_blenderbot.py#L1087"}}),Ko=new P({props:{name:"forward",anchor:"transformers.BlenderbotModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/modeling_blenderbot.py#L1127",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),At=new xo({props:{$$slots:{default:[Rm]},$$scope:{ctx:z}}}),It=new ot({props:{anchor:"transformers.BlenderbotModel.forward.example",$$slots:{default:[Hm]},$$scope:{ctx:z}}}),Vo=new ce({}),Jo=new P({props:{name:"class transformers.BlenderbotForConditionalGeneration",anchor:"transformers.BlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/modeling_blenderbot.py#L1225"}}),Zo=new P({props:{name:"forward",anchor:"transformers.BlenderbotForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/modeling_blenderbot.py#L1284",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),St=new xo({props:{$$slots:{default:[Km]},$$scope:{ctx:z}}}),Dt=new ot({props:{anchor:"transformers.BlenderbotForConditionalGeneration.forward.example",$$slots:{default:[Vm]},$$scope:{ctx:z}}}),en=new ce({}),tn=new P({props:{name:"class transformers.BlenderbotForCausalLM",anchor:"transformers.BlenderbotForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/modeling_blenderbot.py#L1420"}}),on=new P({props:{name:"forward",anchor:"transformers.BlenderbotForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/modeling_blenderbot.py#L1451",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ut=new ot({props:{anchor:"transformers.BlenderbotForCausalLM.forward.example",$$slots:{default:[Jm]},$$scope:{ctx:z}}}),nn=new ce({}),rn=new P({props:{name:"class transformers.TFBlenderbotModel",anchor:"transformers.TFBlenderbotModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1142"}}),Ht=new xo({props:{$$slots:{default:[Qm]},$$scope:{ctx:z}}}),ln=new P({props:{name:"call",anchor:"transformers.TFBlenderbotModel.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1170",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Kt=new xo({props:{$$slots:{default:[Xm]},$$scope:{ctx:z}}}),Vt=new ot({props:{anchor:"transformers.TFBlenderbotModel.call.example",$$slots:{default:[Ym]},$$scope:{ctx:z}}}),cn=new ce({}),pn=new P({props:{name:"class transformers.TFBlenderbotForConditionalGeneration",anchor:"transformers.TFBlenderbotForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1246"}}),Qt=new xo({props:{$$slots:{default:[Zm]},$$scope:{ctx:z}}}),fn=new P({props:{name:"call",anchor:"transformers.TFBlenderbotForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1295",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Xt=new xo({props:{$$slots:{default:[ef]},$$scope:{ctx:z}}}),gn=new ce({}),bn=new P({props:{name:"class transformers.FlaxBlenderbotModel",anchor:"transformers.FlaxBlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1218"}}),Fn=new P({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1153",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zt=new xo({props:{$$slots:{default:[tf]},$$scope:{ctx:z}}}),eo=new ot({props:{anchor:"transformers.FlaxBlenderbotModel.__call__.example",$$slots:{default:[of]},$$scope:{ctx:z}}}),zn=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L974",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oo=new ot({props:{anchor:"transformers.FlaxBlenderbotModel.encode.example",$$slots:{default:[nf]},$$scope:{ctx:z}}}),Bn=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1037",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new ot({props:{anchor:"transformers.FlaxBlenderbotModel.decode.example",$$slots:{default:[rf]},$$scope:{ctx:z}}}),qn=new ce({}),En=new P({props:{name:"class transformers.FlaxBlenderbotForConditionalGeneration",anchor:"transformers.FlaxBlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1305"}}),In=new P({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1153",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ao=new xo({props:{$$slots:{default:[sf]},$$scope:{ctx:z}}}),Sn=new ce({}),Dn=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L974",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),po=new ot({props:{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.example",$$slots:{default:[af]},$$scope:{ctx:z}}}),Gn=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1309",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),uo=new ot({props:{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.example",$$slots:{default:[df]},$$scope:{ctx:z}}}),{c(){p=n("meta"),v=l(),g=n("h1"),u=n("a"),b=n("span"),k(i.$$.fragment),m=l(),B=n("span"),Me=a("Blenderbot"),pe=l(),E=n("p"),fe=n("strong"),te=a("DISCLAIMER:"),Ce=a(" If you see something strange, file a "),oe=n("a"),ne=a("Github Issue"),je=a(" ."),we=l(),G=n("h2"),N=n("a"),_e=n("span"),k(R.$$.fragment),M=l(),j=n("span"),Oe=a("Overview"),J=l(),Q=n("p"),Pe=a("The Blender chatbot model was proposed in "),W=n("a"),Ne=a("Recipes for building an open-domain chatbot"),Ae=a(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),A=l(),he=n("p"),re=a("The abstract of the paper is the following:"),$e=l(),ue=n("p"),H=n("em"),Ie=a(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),xe=l(),C=n("p"),Le=a("This model was contributed by "),U=n("a"),Se=a("sshleifer"),F=a(". The authors\u2019 code can be found "),q=n("a"),ge=a("here"),rt=a(" ."),Ve=l(),O=n("h2"),me=n("a"),De=n("span"),k(be.$$.fragment),K=l(),V=n("span"),st=a("Implementation Notes"),Je=l(),I=n("ul"),ve=n("li"),at=a("Blenderbot uses a standard "),se=n("a"),dt=a("seq2seq model transformer"),Bd=a(" based architecture."),qd=l(),Fo=n("li"),Ed=a("Available checkpoints can be found in the "),zo=n("a"),Md=a("model hub"),Cd=a("."),jd=l(),Ge=n("li"),Od=a("This is the "),zr=n("em"),Pd=a("default"),Nd=a(` Blenderbot model class. However, some smaller checkpoints, such as
`),Br=n("code"),Ad=a("facebook/blenderbot_small_90M"),Id=a(`, have a different architecture and consequently should be used with
`),Vn=n("a"),Ld=a("BlenderbotSmall"),Sd=a("."),ba=l(),it=n("h2"),qt=n("a"),qr=n("span"),k(Bo.$$.fragment),Dd=l(),Er=n("span"),Gd=a("Usage"),va=l(),Jn=n("p"),Wd=a("Here is an example of model usage:"),ka=l(),k(qo.$$.fragment),ya=l(),lt=n("h2"),Et=n("a"),Mr=n("span"),k(Eo.$$.fragment),Ud=l(),Cr=n("span"),Rd=a("BlenderbotConfig"),Ta=l(),ke=n("div"),k(Mo.$$.fragment),Hd=l(),ct=n("p"),Kd=a("This is the configuration class to store the configuration of a "),Qn=n("a"),Vd=a("BlenderbotModel"),Jd=a(`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),Co=n("a"),Qd=a("facebook/blenderbot-3B"),Xd=a(" architecture."),Yd=l(),pt=n("p"),Zd=a("Configuration objects inherit from "),Xn=n("a"),ei=a("PretrainedConfig"),ti=a(` and can be used to control the model outputs. Read the
documentation from `),Yn=n("a"),oi=a("PretrainedConfig"),ni=a(" for more information."),ri=l(),k(Mt.$$.fragment),wa=l(),ht=n("h2"),Ct=n("a"),jr=n("span"),k(jo.$$.fragment),si=l(),Or=n("span"),ai=a("BlenderbotTokenizer"),$a=l(),ae=n("div"),k(Oo.$$.fragment),di=l(),Pr=n("p"),ii=a("Construct a Blenderbot tokenizer."),li=l(),jt=n("p"),Nr=n("code"),ci=a("Blenderbot"),pi=a(" is nearly identical to "),Zn=n("a"),hi=a("RobertaTokenizer"),ui=a(` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),mi=l(),Po=n("p"),fi=a("Refer to superclass "),er=n("a"),_i=a("RobertaTokenizer"),gi=a(" for usage examples and documentation concerning parameters."),bi=l(),Qe=n("div"),k(No.$$.fragment),vi=l(),Ar=n("p"),ki=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),yi=l(),Ir=n("ul"),tr=n("li"),Ti=a("single sequence: "),Lr=n("code"),wi=a("X </s>"),xa=l(),ut=n("h2"),Ot=n("a"),Sr=n("span"),k(Ao.$$.fragment),$i=l(),Dr=n("span"),xi=a("BlenderbotTokenizerFast"),Fa=l(),de=n("div"),k(Io.$$.fragment),Fi=l(),Lo=n("p"),zi=a("Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Gr=n("em"),Bi=a("tokenizers"),qi=a(" library)."),Ei=l(),Pt=n("p"),Wr=n("code"),Mi=a("BlenderbotFast"),Ci=a(" is nearly identical to "),or=n("a"),ji=a("RobertaTokenizerFast"),Oi=a(` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),Pi=l(),So=n("p"),Ni=a("Refer to superclass "),nr=n("a"),Ai=a("RobertaTokenizerFast"),Ii=a(" for usage examples and documentation concerning parameters."),Li=l(),Xe=n("div"),k(Do.$$.fragment),Si=l(),Ur=n("p"),Di=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Gi=l(),Rr=n("ul"),rr=n("li"),Wi=a("single sequence: "),Hr=n("code"),Ui=a("X </s>"),za=l(),mt=n("h2"),Nt=n("a"),Kr=n("span"),k(Go.$$.fragment),Ri=l(),Vr=n("span"),Hi=a("BlenderbotModel"),Ba=l(),We=n("p"),Ki=a("See "),Jr=n("code"),Vi=a("transformers.BartModel"),Ji=a(" for arguments to "),Qr=n("em"),Qi=a("forward"),Xi=a(" and "),Xr=n("em"),Yi=a("generate"),qa=l(),ye=n("div"),k(Wo.$$.fragment),Zi=l(),Uo=n("p"),el=a(`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),sr=n("a"),tl=a("PreTrainedModel"),ol=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nl=l(),Ro=n("p"),rl=a("This model is also a PyTorch "),Ho=n("a"),sl=a("torch.nn.Module"),al=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dl=l(),Fe=n("div"),k(Ko.$$.fragment),il=l(),ft=n("p"),ll=a("The "),ar=n("a"),cl=a("BlenderbotModel"),pl=a(" forward method, overrides the "),Yr=n("code"),hl=a("__call__"),ul=a(" special method."),ml=l(),k(At.$$.fragment),fl=l(),k(It.$$.fragment),Ea=l(),_t=n("h2"),Lt=n("a"),Zr=n("span"),k(Vo.$$.fragment),_l=l(),es=n("span"),gl=a("BlenderbotForConditionalGeneration"),Ma=l(),Ue=n("p"),bl=a("See "),dr=n("a"),vl=a("BartForConditionalGeneration"),kl=a(" for arguments to "),ts=n("em"),yl=a("forward"),Tl=a(" and "),os=n("em"),wl=a("generate"),Ca=l(),Te=n("div"),k(Jo.$$.fragment),$l=l(),Qo=n("p"),xl=a(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),ir=n("a"),Fl=a("PreTrainedModel"),zl=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bl=l(),Xo=n("p"),ql=a("This model is also a PyTorch "),Yo=n("a"),El=a("torch.nn.Module"),Ml=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cl=l(),ze=n("div"),k(Zo.$$.fragment),jl=l(),gt=n("p"),Ol=a("The "),lr=n("a"),Pl=a("BlenderbotForConditionalGeneration"),Nl=a(" forward method, overrides the "),ns=n("code"),Al=a("__call__"),Il=a(" special method."),Ll=l(),k(St.$$.fragment),Sl=l(),k(Dt.$$.fragment),ja=l(),bt=n("h2"),Gt=n("a"),rs=n("span"),k(en.$$.fragment),Dl=l(),ss=n("span"),Gl=a("BlenderbotForCausalLM"),Oa=l(),vt=n("div"),k(tn.$$.fragment),Wl=l(),Wt=n("div"),k(on.$$.fragment),Ul=l(),k(Ut.$$.fragment),Pa=l(),kt=n("h2"),Rt=n("a"),as=n("span"),k(nn.$$.fragment),Rl=l(),ds=n("span"),Hl=a("TFBlenderbotModel"),Na=l(),ie=n("div"),k(rn.$$.fragment),Kl=l(),sn=n("p"),Vl=a(`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),cr=n("a"),Jl=a("TFPreTrainedModel"),Ql=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xl=l(),an=n("p"),Yl=a("This model is also a "),dn=n("a"),Zl=a("tf.keras.Model"),ec=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tc=l(),k(Ht.$$.fragment),oc=l(),Be=n("div"),k(ln.$$.fragment),nc=l(),yt=n("p"),rc=a("The "),pr=n("a"),sc=a("TFBlenderbotModel"),ac=a(" forward method, overrides the "),is=n("code"),dc=a("__call__"),ic=a(" special method."),lc=l(),k(Kt.$$.fragment),cc=l(),k(Vt.$$.fragment),Aa=l(),Tt=n("h2"),Jt=n("a"),ls=n("span"),k(cn.$$.fragment),pc=l(),cs=n("span"),hc=a("TFBlenderbotForConditionalGeneration"),Ia=l(),le=n("div"),k(pn.$$.fragment),uc=l(),hn=n("p"),mc=a(`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),hr=n("a"),fc=a("TFPreTrainedModel"),_c=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gc=l(),un=n("p"),bc=a("This model is also a "),mn=n("a"),vc=a("tf.keras.Model"),kc=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yc=l(),k(Qt.$$.fragment),Tc=l(),X=n("div"),k(fn.$$.fragment),wc=l(),wt=n("p"),$c=a("The "),ur=n("a"),xc=a("TFBlenderbotForConditionalGeneration"),Fc=a(" forward method, overrides the "),ps=n("code"),zc=a("__call__"),Bc=a(" special method."),qc=l(),k(Xt.$$.fragment),Ec=l(),hs=n("p"),Mc=a("Conversation example::"),Cc=l(),us=n("blockquote"),ms=n("blockquote"),fs=n("blockquote"),_s=n("p"),jc=a(`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),Oc=l(),gs=n("blockquote"),bs=n("blockquote"),vs=n("blockquote"),_n=n("p"),Pc=a(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),ks=n("s"),Nc=a(`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),Ac=a(` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),La=l(),$t=n("h2"),Yt=n("a"),ys=n("span"),k(gn.$$.fragment),Ic=l(),Ts=n("span"),Lc=a("FlaxBlenderbotModel"),Sa=l(),L=n("div"),k(bn.$$.fragment),Sc=l(),vn=n("p"),Dc=a(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),mr=n("a"),Gc=a("FlaxPreTrainedModel"),Wc=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uc=l(),kn=n("p"),Rc=a(`This model is also a Flax Linen
`),yn=n("a"),Hc=a("flax.nn.Module"),Kc=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Vc=l(),ws=n("p"),Jc=a("Finally, this model supports inherent JAX features such as:"),Qc=l(),Re=n("ul"),$s=n("li"),Tn=n("a"),Xc=a("Just-In-Time (JIT) compilation"),Yc=l(),xs=n("li"),wn=n("a"),Zc=a("Automatic Differentiation"),ep=l(),Fs=n("li"),$n=n("a"),tp=a("Vectorization"),op=l(),zs=n("li"),xn=n("a"),np=a("Parallelization"),rp=l(),qe=n("div"),k(Fn.$$.fragment),sp=l(),xt=n("p"),ap=a("The "),Bs=n("code"),dp=a("FlaxBlenderbotPreTrainedModel"),ip=a(" forward method, overrides the "),qs=n("code"),lp=a("__call__"),cp=a(" special method."),pp=l(),k(Zt.$$.fragment),hp=l(),k(eo.$$.fragment),up=l(),to=n("div"),k(zn.$$.fragment),mp=l(),k(oo.$$.fragment),fp=l(),no=n("div"),k(Bn.$$.fragment),_p=l(),k(ro.$$.fragment),Da=l(),Ft=n("h2"),so=n("a"),Es=n("span"),k(qn.$$.fragment),gp=l(),Ms=n("span"),bp=a("FlaxBlenderbotForConditionalGeneration"),Ga=l(),S=n("div"),k(En.$$.fragment),vp=l(),Mn=n("p"),kp=a(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),fr=n("a"),yp=a("FlaxPreTrainedModel"),Tp=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wp=l(),Cn=n("p"),$p=a(`This model is also a Flax Linen
`),jn=n("a"),xp=a("flax.nn.Module"),Fp=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zp=l(),Cs=n("p"),Bp=a("Finally, this model supports inherent JAX features such as:"),qp=l(),He=n("ul"),js=n("li"),On=n("a"),Ep=a("Just-In-Time (JIT) compilation"),Mp=l(),Os=n("li"),Pn=n("a"),Cp=a("Automatic Differentiation"),jp=l(),Ps=n("li"),Nn=n("a"),Op=a("Vectorization"),Pp=l(),Ns=n("li"),An=n("a"),Np=a("Parallelization"),Ap=l(),D=n("div"),k(In.$$.fragment),Ip=l(),zt=n("p"),Lp=a("The "),As=n("code"),Sp=a("FlaxBlenderbotPreTrainedModel"),Dp=a(" forward method, overrides the "),Is=n("code"),Gp=a("__call__"),Wp=a(" special method."),Up=l(),k(ao.$$.fragment),Rp=l(),Ls=n("p"),Hp=a("Conversation example::"),Kp=l(),Ss=n("blockquote"),Ds=n("blockquote"),Gs=n("blockquote"),Ws=n("p"),Vp=a("from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),Jp=l(),Us=n("blockquote"),Rs=n("blockquote"),Hs=n("blockquote"),Ks=n("p"),Qp=a(`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),Xp=l(),Vs=n("blockquote"),Js=n("blockquote"),Qs=n("blockquote"),Xs=n("p"),Yp=a(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),Zp=l(),Ys=n("blockquote"),Zs=n("blockquote"),Ln=n("blockquote"),io=n("h1"),lo=n("a"),ea=n("span"),k(Sn.$$.fragment),eh=l(),ta=n("span"),th=a("Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),oh=l(),oa=n("p"),nh=a(`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),rh=l(),co=n("div"),k(Dn.$$.fragment),sh=l(),k(po.$$.fragment),ah=l(),ho=n("div"),k(Gn.$$.fragment),dh=l(),k(uo.$$.fragment),this.h()},l(o){const _=Gm('[data-svelte="svelte-1phssyn"]',document.head);p=r(_,"META",{name:!0,content:!0}),_.forEach(t),v=c(o),g=r(o,"H1",{class:!0});var Wn=s(g);u=r(Wn,"A",{id:!0,class:!0,href:!0});var na=s(u);b=r(na,"SPAN",{});var ra=s(b);y(i.$$.fragment,ra),ra.forEach(t),na.forEach(t),m=c(Wn),B=r(Wn,"SPAN",{});var sa=s(B);Me=d(sa,"Blenderbot"),sa.forEach(t),Wn.forEach(t),pe=c(o),E=r(o,"P",{});var mo=s(E);fe=r(mo,"STRONG",{});var aa=s(fe);te=d(aa,"DISCLAIMER:"),aa.forEach(t),Ce=d(mo," If you see something strange, file a "),oe=r(mo,"A",{href:!0,rel:!0});var da=s(oe);ne=d(da,"Github Issue"),da.forEach(t),je=d(mo," ."),mo.forEach(t),we=c(o),G=r(o,"H2",{class:!0});var Un=s(G);N=r(Un,"A",{id:!0,class:!0,href:!0});var ia=s(N);_e=r(ia,"SPAN",{});var la=s(_e);y(R.$$.fragment,la),la.forEach(t),ia.forEach(t),M=c(Un),j=r(Un,"SPAN",{});var ca=s(j);Oe=d(ca,"Overview"),ca.forEach(t),Un.forEach(t),J=c(o),Q=r(o,"P",{});var Rn=s(Q);Pe=d(Rn,"The Blender chatbot model was proposed in "),W=r(Rn,"A",{href:!0,rel:!0});var pa=s(W);Ne=d(pa,"Recipes for building an open-domain chatbot"),pa.forEach(t),Ae=d(Rn,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Rn.forEach(t),A=c(o),he=r(o,"P",{});var ha=s(he);re=d(ha,"The abstract of the paper is the following:"),ha.forEach(t),$e=c(o),ue=r(o,"P",{});var ua=s(ue);H=r(ua,"EM",{});var ma=s(H);Ie=d(ma,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),ma.forEach(t),ua.forEach(t),xe=c(o),C=r(o,"P",{});var Bt=s(C);Le=d(Bt,"This model was contributed by "),U=r(Bt,"A",{href:!0,rel:!0});var fa=s(U);Se=d(fa,"sshleifer"),fa.forEach(t),F=d(Bt,". The authors\u2019 code can be found "),q=r(Bt,"A",{href:!0,rel:!0});var ch=s(q);ge=d(ch,"here"),ch.forEach(t),rt=d(Bt," ."),Bt.forEach(t),Ve=c(o),O=r(o,"H2",{class:!0});var Ua=s(O);me=r(Ua,"A",{id:!0,class:!0,href:!0});var ph=s(me);De=r(ph,"SPAN",{});var hh=s(De);y(be.$$.fragment,hh),hh.forEach(t),ph.forEach(t),K=c(Ua),V=r(Ua,"SPAN",{});var uh=s(V);st=d(uh,"Implementation Notes"),uh.forEach(t),Ua.forEach(t),Je=c(o),I=r(o,"UL",{});var _r=s(I);ve=r(_r,"LI",{});var Ra=s(ve);at=d(Ra,"Blenderbot uses a standard "),se=r(Ra,"A",{href:!0,rel:!0});var mh=s(se);dt=d(mh,"seq2seq model transformer"),mh.forEach(t),Bd=d(Ra," based architecture."),Ra.forEach(t),qd=c(_r),Fo=r(_r,"LI",{});var Ha=s(Fo);Ed=d(Ha,"Available checkpoints can be found in the "),zo=r(Ha,"A",{href:!0,rel:!0});var fh=s(zo);Md=d(fh,"model hub"),fh.forEach(t),Cd=d(Ha,"."),Ha.forEach(t),jd=c(_r),Ge=r(_r,"LI",{});var fo=s(Ge);Od=d(fo,"This is the "),zr=r(fo,"EM",{});var _h=s(zr);Pd=d(_h,"default"),_h.forEach(t),Nd=d(fo,` Blenderbot model class. However, some smaller checkpoints, such as
`),Br=r(fo,"CODE",{});var gh=s(Br);Ad=d(gh,"facebook/blenderbot_small_90M"),gh.forEach(t),Id=d(fo,`, have a different architecture and consequently should be used with
`),Vn=r(fo,"A",{href:!0});var bh=s(Vn);Ld=d(bh,"BlenderbotSmall"),bh.forEach(t),Sd=d(fo,"."),fo.forEach(t),_r.forEach(t),ba=c(o),it=r(o,"H2",{class:!0});var Ka=s(it);qt=r(Ka,"A",{id:!0,class:!0,href:!0});var vh=s(qt);qr=r(vh,"SPAN",{});var kh=s(qr);y(Bo.$$.fragment,kh),kh.forEach(t),vh.forEach(t),Dd=c(Ka),Er=r(Ka,"SPAN",{});var yh=s(Er);Gd=d(yh,"Usage"),yh.forEach(t),Ka.forEach(t),va=c(o),Jn=r(o,"P",{});var Th=s(Jn);Wd=d(Th,"Here is an example of model usage:"),Th.forEach(t),ka=c(o),y(qo.$$.fragment,o),ya=c(o),lt=r(o,"H2",{class:!0});var Va=s(lt);Et=r(Va,"A",{id:!0,class:!0,href:!0});var wh=s(Et);Mr=r(wh,"SPAN",{});var $h=s(Mr);y(Eo.$$.fragment,$h),$h.forEach(t),wh.forEach(t),Ud=c(Va),Cr=r(Va,"SPAN",{});var xh=s(Cr);Rd=d(xh,"BlenderbotConfig"),xh.forEach(t),Va.forEach(t),Ta=c(o),ke=r(o,"DIV",{class:!0});var _o=s(ke);y(Mo.$$.fragment,_o),Hd=c(_o),ct=r(_o,"P",{});var gr=s(ct);Kd=d(gr,"This is the configuration class to store the configuration of a "),Qn=r(gr,"A",{href:!0});var Fh=s(Qn);Vd=d(Fh,"BlenderbotModel"),Fh.forEach(t),Jd=d(gr,`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),Co=r(gr,"A",{href:!0,rel:!0});var zh=s(Co);Qd=d(zh,"facebook/blenderbot-3B"),zh.forEach(t),Xd=d(gr," architecture."),gr.forEach(t),Yd=c(_o),pt=r(_o,"P",{});var br=s(pt);Zd=d(br,"Configuration objects inherit from "),Xn=r(br,"A",{href:!0});var Bh=s(Xn);ei=d(Bh,"PretrainedConfig"),Bh.forEach(t),ti=d(br,` and can be used to control the model outputs. Read the
documentation from `),Yn=r(br,"A",{href:!0});var qh=s(Yn);oi=d(qh,"PretrainedConfig"),qh.forEach(t),ni=d(br," for more information."),br.forEach(t),ri=c(_o),y(Mt.$$.fragment,_o),_o.forEach(t),wa=c(o),ht=r(o,"H2",{class:!0});var Ja=s(ht);Ct=r(Ja,"A",{id:!0,class:!0,href:!0});var Eh=s(Ct);jr=r(Eh,"SPAN",{});var Mh=s(jr);y(jo.$$.fragment,Mh),Mh.forEach(t),Eh.forEach(t),si=c(Ja),Or=r(Ja,"SPAN",{});var Ch=s(Or);ai=d(Ch,"BlenderbotTokenizer"),Ch.forEach(t),Ja.forEach(t),$a=c(o),ae=r(o,"DIV",{class:!0});var Ye=s(ae);y(Oo.$$.fragment,Ye),di=c(Ye),Pr=r(Ye,"P",{});var jh=s(Pr);ii=d(jh,"Construct a Blenderbot tokenizer."),jh.forEach(t),li=c(Ye),jt=r(Ye,"P",{});var _a=s(jt);Nr=r(_a,"CODE",{});var Oh=s(Nr);ci=d(Oh,"Blenderbot"),Oh.forEach(t),pi=d(_a," is nearly identical to "),Zn=r(_a,"A",{href:!0});var Ph=s(Zn);hi=d(Ph,"RobertaTokenizer"),Ph.forEach(t),ui=d(_a,` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),_a.forEach(t),mi=c(Ye),Po=r(Ye,"P",{});var Qa=s(Po);fi=d(Qa,"Refer to superclass "),er=r(Qa,"A",{href:!0});var Nh=s(er);_i=d(Nh,"RobertaTokenizer"),Nh.forEach(t),gi=d(Qa," for usage examples and documentation concerning parameters."),Qa.forEach(t),bi=c(Ye),Qe=r(Ye,"DIV",{class:!0});var vr=s(Qe);y(No.$$.fragment,vr),vi=c(vr),Ar=r(vr,"P",{});var Ah=s(Ar);ki=d(Ah,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Ah.forEach(t),yi=c(vr),Ir=r(vr,"UL",{});var Ih=s(Ir);tr=r(Ih,"LI",{});var ih=s(tr);Ti=d(ih,"single sequence: "),Lr=r(ih,"CODE",{});var Lh=s(Lr);wi=d(Lh,"X </s>"),Lh.forEach(t),ih.forEach(t),Ih.forEach(t),vr.forEach(t),Ye.forEach(t),xa=c(o),ut=r(o,"H2",{class:!0});var Xa=s(ut);Ot=r(Xa,"A",{id:!0,class:!0,href:!0});var Sh=s(Ot);Sr=r(Sh,"SPAN",{});var Dh=s(Sr);y(Ao.$$.fragment,Dh),Dh.forEach(t),Sh.forEach(t),$i=c(Xa),Dr=r(Xa,"SPAN",{});var Gh=s(Dr);xi=d(Gh,"BlenderbotTokenizerFast"),Gh.forEach(t),Xa.forEach(t),Fa=c(o),de=r(o,"DIV",{class:!0});var Ze=s(de);y(Io.$$.fragment,Ze),Fi=c(Ze),Lo=r(Ze,"P",{});var Ya=s(Lo);zi=d(Ya,"Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Gr=r(Ya,"EM",{});var Wh=s(Gr);Bi=d(Wh,"tokenizers"),Wh.forEach(t),qi=d(Ya," library)."),Ya.forEach(t),Ei=c(Ze),Pt=r(Ze,"P",{});var ga=s(Pt);Wr=r(ga,"CODE",{});var Uh=s(Wr);Mi=d(Uh,"BlenderbotFast"),Uh.forEach(t),Ci=d(ga," is nearly identical to "),or=r(ga,"A",{href:!0});var Rh=s(or);ji=d(Rh,"RobertaTokenizerFast"),Rh.forEach(t),Oi=d(ga,` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),ga.forEach(t),Pi=c(Ze),So=r(Ze,"P",{});var Za=s(So);Ni=d(Za,"Refer to superclass "),nr=r(Za,"A",{href:!0});var Hh=s(nr);Ai=d(Hh,"RobertaTokenizerFast"),Hh.forEach(t),Ii=d(Za," for usage examples and documentation concerning parameters."),Za.forEach(t),Li=c(Ze),Xe=r(Ze,"DIV",{class:!0});var kr=s(Xe);y(Do.$$.fragment,kr),Si=c(kr),Ur=r(kr,"P",{});var Kh=s(Ur);Di=d(Kh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Kh.forEach(t),Gi=c(kr),Rr=r(kr,"UL",{});var Vh=s(Rr);rr=r(Vh,"LI",{});var lh=s(rr);Wi=d(lh,"single sequence: "),Hr=r(lh,"CODE",{});var Jh=s(Hr);Ui=d(Jh,"X </s>"),Jh.forEach(t),lh.forEach(t),Vh.forEach(t),kr.forEach(t),Ze.forEach(t),za=c(o),mt=r(o,"H2",{class:!0});var ed=s(mt);Nt=r(ed,"A",{id:!0,class:!0,href:!0});var Qh=s(Nt);Kr=r(Qh,"SPAN",{});var Xh=s(Kr);y(Go.$$.fragment,Xh),Xh.forEach(t),Qh.forEach(t),Ri=c(ed),Vr=r(ed,"SPAN",{});var Yh=s(Vr);Hi=d(Yh,"BlenderbotModel"),Yh.forEach(t),ed.forEach(t),Ba=c(o),We=r(o,"P",{});var Hn=s(We);Ki=d(Hn,"See "),Jr=r(Hn,"CODE",{});var Zh=s(Jr);Vi=d(Zh,"transformers.BartModel"),Zh.forEach(t),Ji=d(Hn," for arguments to "),Qr=r(Hn,"EM",{});var eu=s(Qr);Qi=d(eu,"forward"),eu.forEach(t),Xi=d(Hn," and "),Xr=r(Hn,"EM",{});var tu=s(Xr);Yi=d(tu,"generate"),tu.forEach(t),Hn.forEach(t),qa=c(o),ye=r(o,"DIV",{class:!0});var go=s(ye);y(Wo.$$.fragment,go),Zi=c(go),Uo=r(go,"P",{});var td=s(Uo);el=d(td,`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),sr=r(td,"A",{href:!0});var ou=s(sr);tl=d(ou,"PreTrainedModel"),ou.forEach(t),ol=d(td,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),td.forEach(t),nl=c(go),Ro=r(go,"P",{});var od=s(Ro);rl=d(od,"This model is also a PyTorch "),Ho=r(od,"A",{href:!0,rel:!0});var nu=s(Ho);sl=d(nu,"torch.nn.Module"),nu.forEach(t),al=d(od,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),od.forEach(t),dl=c(go),Fe=r(go,"DIV",{class:!0});var bo=s(Fe);y(Ko.$$.fragment,bo),il=c(bo),ft=r(bo,"P",{});var yr=s(ft);ll=d(yr,"The "),ar=r(yr,"A",{href:!0});var ru=s(ar);cl=d(ru,"BlenderbotModel"),ru.forEach(t),pl=d(yr," forward method, overrides the "),Yr=r(yr,"CODE",{});var su=s(Yr);hl=d(su,"__call__"),su.forEach(t),ul=d(yr," special method."),yr.forEach(t),ml=c(bo),y(At.$$.fragment,bo),fl=c(bo),y(It.$$.fragment,bo),bo.forEach(t),go.forEach(t),Ea=c(o),_t=r(o,"H2",{class:!0});var nd=s(_t);Lt=r(nd,"A",{id:!0,class:!0,href:!0});var au=s(Lt);Zr=r(au,"SPAN",{});var du=s(Zr);y(Vo.$$.fragment,du),du.forEach(t),au.forEach(t),_l=c(nd),es=r(nd,"SPAN",{});var iu=s(es);gl=d(iu,"BlenderbotForConditionalGeneration"),iu.forEach(t),nd.forEach(t),Ma=c(o),Ue=r(o,"P",{});var Kn=s(Ue);bl=d(Kn,"See "),dr=r(Kn,"A",{href:!0});var lu=s(dr);vl=d(lu,"BartForConditionalGeneration"),lu.forEach(t),kl=d(Kn," for arguments to "),ts=r(Kn,"EM",{});var cu=s(ts);yl=d(cu,"forward"),cu.forEach(t),Tl=d(Kn," and "),os=r(Kn,"EM",{});var pu=s(os);wl=d(pu,"generate"),pu.forEach(t),Kn.forEach(t),Ca=c(o),Te=r(o,"DIV",{class:!0});var vo=s(Te);y(Jo.$$.fragment,vo),$l=c(vo),Qo=r(vo,"P",{});var rd=s(Qo);xl=d(rd,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),ir=r(rd,"A",{href:!0});var hu=s(ir);Fl=d(hu,"PreTrainedModel"),hu.forEach(t),zl=d(rd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rd.forEach(t),Bl=c(vo),Xo=r(vo,"P",{});var sd=s(Xo);ql=d(sd,"This model is also a PyTorch "),Yo=r(sd,"A",{href:!0,rel:!0});var uu=s(Yo);El=d(uu,"torch.nn.Module"),uu.forEach(t),Ml=d(sd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sd.forEach(t),Cl=c(vo),ze=r(vo,"DIV",{class:!0});var ko=s(ze);y(Zo.$$.fragment,ko),jl=c(ko),gt=r(ko,"P",{});var Tr=s(gt);Ol=d(Tr,"The "),lr=r(Tr,"A",{href:!0});var mu=s(lr);Pl=d(mu,"BlenderbotForConditionalGeneration"),mu.forEach(t),Nl=d(Tr," forward method, overrides the "),ns=r(Tr,"CODE",{});var fu=s(ns);Al=d(fu,"__call__"),fu.forEach(t),Il=d(Tr," special method."),Tr.forEach(t),Ll=c(ko),y(St.$$.fragment,ko),Sl=c(ko),y(Dt.$$.fragment,ko),ko.forEach(t),vo.forEach(t),ja=c(o),bt=r(o,"H2",{class:!0});var ad=s(bt);Gt=r(ad,"A",{id:!0,class:!0,href:!0});var _u=s(Gt);rs=r(_u,"SPAN",{});var gu=s(rs);y(en.$$.fragment,gu),gu.forEach(t),_u.forEach(t),Dl=c(ad),ss=r(ad,"SPAN",{});var bu=s(ss);Gl=d(bu,"BlenderbotForCausalLM"),bu.forEach(t),ad.forEach(t),Oa=c(o),vt=r(o,"DIV",{class:!0});var dd=s(vt);y(tn.$$.fragment,dd),Wl=c(dd),Wt=r(dd,"DIV",{class:!0});var id=s(Wt);y(on.$$.fragment,id),Ul=c(id),y(Ut.$$.fragment,id),id.forEach(t),dd.forEach(t),Pa=c(o),kt=r(o,"H2",{class:!0});var ld=s(kt);Rt=r(ld,"A",{id:!0,class:!0,href:!0});var vu=s(Rt);as=r(vu,"SPAN",{});var ku=s(as);y(nn.$$.fragment,ku),ku.forEach(t),vu.forEach(t),Rl=c(ld),ds=r(ld,"SPAN",{});var yu=s(ds);Hl=d(yu,"TFBlenderbotModel"),yu.forEach(t),ld.forEach(t),Na=c(o),ie=r(o,"DIV",{class:!0});var et=s(ie);y(rn.$$.fragment,et),Kl=c(et),sn=r(et,"P",{});var cd=s(sn);Vl=d(cd,`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),cr=r(cd,"A",{href:!0});var Tu=s(cr);Jl=d(Tu,"TFPreTrainedModel"),Tu.forEach(t),Ql=d(cd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cd.forEach(t),Xl=c(et),an=r(et,"P",{});var pd=s(an);Yl=d(pd,"This model is also a "),dn=r(pd,"A",{href:!0,rel:!0});var wu=s(dn);Zl=d(wu,"tf.keras.Model"),wu.forEach(t),ec=d(pd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pd.forEach(t),tc=c(et),y(Ht.$$.fragment,et),oc=c(et),Be=r(et,"DIV",{class:!0});var yo=s(Be);y(ln.$$.fragment,yo),nc=c(yo),yt=r(yo,"P",{});var wr=s(yt);rc=d(wr,"The "),pr=r(wr,"A",{href:!0});var $u=s(pr);sc=d($u,"TFBlenderbotModel"),$u.forEach(t),ac=d(wr," forward method, overrides the "),is=r(wr,"CODE",{});var xu=s(is);dc=d(xu,"__call__"),xu.forEach(t),ic=d(wr," special method."),wr.forEach(t),lc=c(yo),y(Kt.$$.fragment,yo),cc=c(yo),y(Vt.$$.fragment,yo),yo.forEach(t),et.forEach(t),Aa=c(o),Tt=r(o,"H2",{class:!0});var hd=s(Tt);Jt=r(hd,"A",{id:!0,class:!0,href:!0});var Fu=s(Jt);ls=r(Fu,"SPAN",{});var zu=s(ls);y(cn.$$.fragment,zu),zu.forEach(t),Fu.forEach(t),pc=c(hd),cs=r(hd,"SPAN",{});var Bu=s(cs);hc=d(Bu,"TFBlenderbotForConditionalGeneration"),Bu.forEach(t),hd.forEach(t),Ia=c(o),le=r(o,"DIV",{class:!0});var tt=s(le);y(pn.$$.fragment,tt),uc=c(tt),hn=r(tt,"P",{});var ud=s(hn);mc=d(ud,`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),hr=r(ud,"A",{href:!0});var qu=s(hr);fc=d(qu,"TFPreTrainedModel"),qu.forEach(t),_c=d(ud,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ud.forEach(t),gc=c(tt),un=r(tt,"P",{});var md=s(un);bc=d(md,"This model is also a "),mn=r(md,"A",{href:!0,rel:!0});var Eu=s(mn);vc=d(Eu,"tf.keras.Model"),Eu.forEach(t),kc=d(md,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),md.forEach(t),yc=c(tt),y(Qt.$$.fragment,tt),Tc=c(tt),X=r(tt,"DIV",{class:!0});var Ee=s(X);y(fn.$$.fragment,Ee),wc=c(Ee),wt=r(Ee,"P",{});var $r=s(wt);$c=d($r,"The "),ur=r($r,"A",{href:!0});var Mu=s(ur);xc=d(Mu,"TFBlenderbotForConditionalGeneration"),Mu.forEach(t),Fc=d($r," forward method, overrides the "),ps=r($r,"CODE",{});var Cu=s(ps);zc=d(Cu,"__call__"),Cu.forEach(t),Bc=d($r," special method."),$r.forEach(t),qc=c(Ee),y(Xt.$$.fragment,Ee),Ec=c(Ee),hs=r(Ee,"P",{});var ju=s(hs);Mc=d(ju,"Conversation example::"),ju.forEach(t),Cc=c(Ee),us=r(Ee,"BLOCKQUOTE",{});var Ou=s(us);ms=r(Ou,"BLOCKQUOTE",{});var Pu=s(ms);fs=r(Pu,"BLOCKQUOTE",{});var Nu=s(fs);_s=r(Nu,"P",{});var Au=s(_s);jc=d(Au,`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),Au.forEach(t),Nu.forEach(t),Pu.forEach(t),Ou.forEach(t),Oc=c(Ee),gs=r(Ee,"BLOCKQUOTE",{});var Iu=s(gs);bs=r(Iu,"BLOCKQUOTE",{});var Lu=s(bs);vs=r(Lu,"BLOCKQUOTE",{});var Su=s(vs);_n=r(Su,"P",{});var fd=s(_n);Pc=d(fd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),ks=r(fd,"S",{});var Du=s(ks);Nc=d(Du,`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),Du.forEach(t),Ac=d(fd,` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),fd.forEach(t),Su.forEach(t),Lu.forEach(t),Iu.forEach(t),Ee.forEach(t),tt.forEach(t),La=c(o),$t=r(o,"H2",{class:!0});var _d=s($t);Yt=r(_d,"A",{id:!0,class:!0,href:!0});var Gu=s(Yt);ys=r(Gu,"SPAN",{});var Wu=s(ys);y(gn.$$.fragment,Wu),Wu.forEach(t),Gu.forEach(t),Ic=c(_d),Ts=r(_d,"SPAN",{});var Uu=s(Ts);Lc=d(Uu,"FlaxBlenderbotModel"),Uu.forEach(t),_d.forEach(t),Sa=c(o),L=r(o,"DIV",{class:!0});var Y=s(L);y(bn.$$.fragment,Y),Sc=c(Y),vn=r(Y,"P",{});var gd=s(vn);Dc=d(gd,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),mr=r(gd,"A",{href:!0});var Ru=s(mr);Gc=d(Ru,"FlaxPreTrainedModel"),Ru.forEach(t),Wc=d(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd.forEach(t),Uc=c(Y),kn=r(Y,"P",{});var bd=s(kn);Rc=d(bd,`This model is also a Flax Linen
`),yn=r(bd,"A",{href:!0,rel:!0});var Hu=s(yn);Hc=d(Hu,"flax.nn.Module"),Hu.forEach(t),Kc=d(bd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),bd.forEach(t),Vc=c(Y),ws=r(Y,"P",{});var Ku=s(ws);Jc=d(Ku,"Finally, this model supports inherent JAX features such as:"),Ku.forEach(t),Qc=c(Y),Re=r(Y,"UL",{});var To=s(Re);$s=r(To,"LI",{});var Vu=s($s);Tn=r(Vu,"A",{href:!0,rel:!0});var Ju=s(Tn);Xc=d(Ju,"Just-In-Time (JIT) compilation"),Ju.forEach(t),Vu.forEach(t),Yc=c(To),xs=r(To,"LI",{});var Qu=s(xs);wn=r(Qu,"A",{href:!0,rel:!0});var Xu=s(wn);Zc=d(Xu,"Automatic Differentiation"),Xu.forEach(t),Qu.forEach(t),ep=c(To),Fs=r(To,"LI",{});var Yu=s(Fs);$n=r(Yu,"A",{href:!0,rel:!0});var Zu=s($n);tp=d(Zu,"Vectorization"),Zu.forEach(t),Yu.forEach(t),op=c(To),zs=r(To,"LI",{});var em=s(zs);xn=r(em,"A",{href:!0,rel:!0});var tm=s(xn);np=d(tm,"Parallelization"),tm.forEach(t),em.forEach(t),To.forEach(t),rp=c(Y),qe=r(Y,"DIV",{class:!0});var wo=s(qe);y(Fn.$$.fragment,wo),sp=c(wo),xt=r(wo,"P",{});var xr=s(xt);ap=d(xr,"The "),Bs=r(xr,"CODE",{});var om=s(Bs);dp=d(om,"FlaxBlenderbotPreTrainedModel"),om.forEach(t),ip=d(xr," forward method, overrides the "),qs=r(xr,"CODE",{});var nm=s(qs);lp=d(nm,"__call__"),nm.forEach(t),cp=d(xr," special method."),xr.forEach(t),pp=c(wo),y(Zt.$$.fragment,wo),hp=c(wo),y(eo.$$.fragment,wo),wo.forEach(t),up=c(Y),to=r(Y,"DIV",{class:!0});var vd=s(to);y(zn.$$.fragment,vd),mp=c(vd),y(oo.$$.fragment,vd),vd.forEach(t),fp=c(Y),no=r(Y,"DIV",{class:!0});var kd=s(no);y(Bn.$$.fragment,kd),_p=c(kd),y(ro.$$.fragment,kd),kd.forEach(t),Y.forEach(t),Da=c(o),Ft=r(o,"H2",{class:!0});var yd=s(Ft);so=r(yd,"A",{id:!0,class:!0,href:!0});var rm=s(so);Es=r(rm,"SPAN",{});var sm=s(Es);y(qn.$$.fragment,sm),sm.forEach(t),rm.forEach(t),gp=c(yd),Ms=r(yd,"SPAN",{});var am=s(Ms);bp=d(am,"FlaxBlenderbotForConditionalGeneration"),am.forEach(t),yd.forEach(t),Ga=c(o),S=r(o,"DIV",{class:!0});var Z=s(S);y(En.$$.fragment,Z),vp=c(Z),Mn=r(Z,"P",{});var Td=s(Mn);kp=d(Td,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),fr=r(Td,"A",{href:!0});var dm=s(fr);yp=d(dm,"FlaxPreTrainedModel"),dm.forEach(t),Tp=d(Td,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Td.forEach(t),wp=c(Z),Cn=r(Z,"P",{});var wd=s(Cn);$p=d(wd,`This model is also a Flax Linen
`),jn=r(wd,"A",{href:!0,rel:!0});var im=s(jn);xp=d(im,"flax.nn.Module"),im.forEach(t),Fp=d(wd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),wd.forEach(t),zp=c(Z),Cs=r(Z,"P",{});var lm=s(Cs);Bp=d(lm,"Finally, this model supports inherent JAX features such as:"),lm.forEach(t),qp=c(Z),He=r(Z,"UL",{});var $o=s(He);js=r($o,"LI",{});var cm=s(js);On=r(cm,"A",{href:!0,rel:!0});var pm=s(On);Ep=d(pm,"Just-In-Time (JIT) compilation"),pm.forEach(t),cm.forEach(t),Mp=c($o),Os=r($o,"LI",{});var hm=s(Os);Pn=r(hm,"A",{href:!0,rel:!0});var um=s(Pn);Cp=d(um,"Automatic Differentiation"),um.forEach(t),hm.forEach(t),jp=c($o),Ps=r($o,"LI",{});var mm=s(Ps);Nn=r(mm,"A",{href:!0,rel:!0});var fm=s(Nn);Op=d(fm,"Vectorization"),fm.forEach(t),mm.forEach(t),Pp=c($o),Ns=r($o,"LI",{});var _m=s(Ns);An=r(_m,"A",{href:!0,rel:!0});var gm=s(An);Np=d(gm,"Parallelization"),gm.forEach(t),_m.forEach(t),$o.forEach(t),Ap=c(Z),D=r(Z,"DIV",{class:!0});var ee=s(D);y(In.$$.fragment,ee),Ip=c(ee),zt=r(ee,"P",{});var Fr=s(zt);Lp=d(Fr,"The "),As=r(Fr,"CODE",{});var bm=s(As);Sp=d(bm,"FlaxBlenderbotPreTrainedModel"),bm.forEach(t),Dp=d(Fr," forward method, overrides the "),Is=r(Fr,"CODE",{});var vm=s(Is);Gp=d(vm,"__call__"),vm.forEach(t),Wp=d(Fr," special method."),Fr.forEach(t),Up=c(ee),y(ao.$$.fragment,ee),Rp=c(ee),Ls=r(ee,"P",{});var km=s(Ls);Hp=d(km,"Conversation example::"),km.forEach(t),Kp=c(ee),Ss=r(ee,"BLOCKQUOTE",{});var ym=s(Ss);Ds=r(ym,"BLOCKQUOTE",{});var Tm=s(Ds);Gs=r(Tm,"BLOCKQUOTE",{});var wm=s(Gs);Ws=r(wm,"P",{});var $m=s(Ws);Vp=d($m,"from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),$m.forEach(t),wm.forEach(t),Tm.forEach(t),ym.forEach(t),Jp=c(ee),Us=r(ee,"BLOCKQUOTE",{});var xm=s(Us);Rs=r(xm,"BLOCKQUOTE",{});var Fm=s(Rs);Hs=r(Fm,"BLOCKQUOTE",{});var zm=s(Hs);Ks=r(zm,"P",{});var Bm=s(Ks);Qp=d(Bm,`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),Bm.forEach(t),zm.forEach(t),Fm.forEach(t),xm.forEach(t),Xp=c(ee),Vs=r(ee,"BLOCKQUOTE",{});var qm=s(Vs);Js=r(qm,"BLOCKQUOTE",{});var Em=s(Js);Qs=r(Em,"BLOCKQUOTE",{});var Mm=s(Qs);Xs=r(Mm,"P",{});var Cm=s(Xs);Yp=d(Cm,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),Cm.forEach(t),Mm.forEach(t),Em.forEach(t),qm.forEach(t),Zp=c(ee),Ys=r(ee,"BLOCKQUOTE",{});var jm=s(Ys);Zs=r(jm,"BLOCKQUOTE",{});var Om=s(Zs);Ln=r(Om,"BLOCKQUOTE",{});var $d=s(Ln);io=r($d,"H1",{class:!0});var xd=s(io);lo=r(xd,"A",{id:!0,class:!0,href:!0});var Pm=s(lo);ea=r(Pm,"SPAN",{});var Nm=s(ea);y(Sn.$$.fragment,Nm),Nm.forEach(t),Pm.forEach(t),eh=c(xd),ta=r(xd,"SPAN",{});var Am=s(ta);th=d(Am,"Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),Am.forEach(t),xd.forEach(t),oh=c($d),oa=r($d,"P",{});var Im=s(oa);nh=d(Im,`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),Im.forEach(t),$d.forEach(t),Om.forEach(t),jm.forEach(t),ee.forEach(t),rh=c(Z),co=r(Z,"DIV",{class:!0});var Fd=s(co);y(Dn.$$.fragment,Fd),sh=c(Fd),y(po.$$.fragment,Fd),Fd.forEach(t),ah=c(Z),ho=r(Z,"DIV",{class:!0});var zd=s(ho);y(Gn.$$.fragment,zd),dh=c(zd),y(uo.$$.fragment,zd),zd.forEach(t),Z.forEach(t),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(cf)),h(u,"id","blenderbot"),h(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(u,"href","#blenderbot"),h(g,"class","relative group"),h(oe,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),h(oe,"rel","nofollow"),h(N,"id","overview"),h(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(N,"href","#overview"),h(G,"class","relative group"),h(W,"href","https://arxiv.org/pdf/2004.13637.pdf"),h(W,"rel","nofollow"),h(U,"href","https://huggingface.co/sshleifer"),h(U,"rel","nofollow"),h(q,"href","https://github.com/facebookresearch/ParlAI"),h(q,"rel","nofollow"),h(me,"id","implementation-notes"),h(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(me,"href","#implementation-notes"),h(O,"class","relative group"),h(se,"href","https://arxiv.org/pdf/1706.03762.pdf"),h(se,"rel","nofollow"),h(zo,"href","https://huggingface.co/models?search=blenderbot"),h(zo,"rel","nofollow"),h(Vn,"href","blenderbot-small"),h(qt,"id","usage"),h(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qt,"href","#usage"),h(it,"class","relative group"),h(Et,"id","transformers.BlenderbotConfig"),h(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Et,"href","#transformers.BlenderbotConfig"),h(lt,"class","relative group"),h(Qn,"href","/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotModel"),h(Co,"href","https://huggingface.co/facebook/blenderbot-3B"),h(Co,"rel","nofollow"),h(Xn,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),h(Yn,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),h(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ct,"id","transformers.BlenderbotTokenizer"),h(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ct,"href","#transformers.BlenderbotTokenizer"),h(ht,"class","relative group"),h(Zn,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer"),h(er,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer"),h(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ot,"id","transformers.BlenderbotTokenizerFast"),h(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ot,"href","#transformers.BlenderbotTokenizerFast"),h(ut,"class","relative group"),h(or,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizerFast"),h(nr,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizerFast"),h(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Nt,"id","transformers.BlenderbotModel"),h(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Nt,"href","#transformers.BlenderbotModel"),h(mt,"class","relative group"),h(sr,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),h(Ho,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ho,"rel","nofollow"),h(ar,"href","/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotModel"),h(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Lt,"id","transformers.BlenderbotForConditionalGeneration"),h(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Lt,"href","#transformers.BlenderbotForConditionalGeneration"),h(_t,"class","relative group"),h(dr,"href","/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartForConditionalGeneration"),h(ir,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),h(Yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Yo,"rel","nofollow"),h(lr,"href","/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),h(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Gt,"id","transformers.BlenderbotForCausalLM"),h(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Gt,"href","#transformers.BlenderbotForCausalLM"),h(bt,"class","relative group"),h(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Rt,"id","transformers.TFBlenderbotModel"),h(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Rt,"href","#transformers.TFBlenderbotModel"),h(kt,"class","relative group"),h(cr,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),h(dn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(dn,"rel","nofollow"),h(pr,"href","/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.TFBlenderbotModel"),h(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Jt,"id","transformers.TFBlenderbotForConditionalGeneration"),h(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Jt,"href","#transformers.TFBlenderbotForConditionalGeneration"),h(Tt,"class","relative group"),h(hr,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),h(mn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(mn,"rel","nofollow"),h(ur,"href","/docs/transformers/v4.21.1/en/model_doc/blenderbot#transformers.TFBlenderbotForConditionalGeneration"),h(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Yt,"id","transformers.FlaxBlenderbotModel"),h(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yt,"href","#transformers.FlaxBlenderbotModel"),h($t,"class","relative group"),h(mr,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(yn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),h(yn,"rel","nofollow"),h(Tn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(Tn,"rel","nofollow"),h(wn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(wn,"rel","nofollow"),h($n,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h($n,"rel","nofollow"),h(xn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(xn,"rel","nofollow"),h(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(so,"id","transformers.FlaxBlenderbotForConditionalGeneration"),h(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(so,"href","#transformers.FlaxBlenderbotForConditionalGeneration"),h(Ft,"class","relative group"),h(fr,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(jn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),h(jn,"rel","nofollow"),h(On,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(On,"rel","nofollow"),h(Pn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(Pn,"rel","nofollow"),h(Nn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(Nn,"rel","nofollow"),h(An,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(An,"rel","nofollow"),h(lo,"id","generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),h(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(lo,"href","#generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),h(io,"class","relative group"),h(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,p),f(o,v,_),f(o,g,_),e(g,u),e(u,b),T(i,b,null),e(g,m),e(g,B),e(B,Me),f(o,pe,_),f(o,E,_),e(E,fe),e(fe,te),e(E,Ce),e(E,oe),e(oe,ne),e(E,je),f(o,we,_),f(o,G,_),e(G,N),e(N,_e),T(R,_e,null),e(G,M),e(G,j),e(j,Oe),f(o,J,_),f(o,Q,_),e(Q,Pe),e(Q,W),e(W,Ne),e(Q,Ae),f(o,A,_),f(o,he,_),e(he,re),f(o,$e,_),f(o,ue,_),e(ue,H),e(H,Ie),f(o,xe,_),f(o,C,_),e(C,Le),e(C,U),e(U,Se),e(C,F),e(C,q),e(q,ge),e(C,rt),f(o,Ve,_),f(o,O,_),e(O,me),e(me,De),T(be,De,null),e(O,K),e(O,V),e(V,st),f(o,Je,_),f(o,I,_),e(I,ve),e(ve,at),e(ve,se),e(se,dt),e(ve,Bd),e(I,qd),e(I,Fo),e(Fo,Ed),e(Fo,zo),e(zo,Md),e(Fo,Cd),e(I,jd),e(I,Ge),e(Ge,Od),e(Ge,zr),e(zr,Pd),e(Ge,Nd),e(Ge,Br),e(Br,Ad),e(Ge,Id),e(Ge,Vn),e(Vn,Ld),e(Ge,Sd),f(o,ba,_),f(o,it,_),e(it,qt),e(qt,qr),T(Bo,qr,null),e(it,Dd),e(it,Er),e(Er,Gd),f(o,va,_),f(o,Jn,_),e(Jn,Wd),f(o,ka,_),T(qo,o,_),f(o,ya,_),f(o,lt,_),e(lt,Et),e(Et,Mr),T(Eo,Mr,null),e(lt,Ud),e(lt,Cr),e(Cr,Rd),f(o,Ta,_),f(o,ke,_),T(Mo,ke,null),e(ke,Hd),e(ke,ct),e(ct,Kd),e(ct,Qn),e(Qn,Vd),e(ct,Jd),e(ct,Co),e(Co,Qd),e(ct,Xd),e(ke,Yd),e(ke,pt),e(pt,Zd),e(pt,Xn),e(Xn,ei),e(pt,ti),e(pt,Yn),e(Yn,oi),e(pt,ni),e(ke,ri),T(Mt,ke,null),f(o,wa,_),f(o,ht,_),e(ht,Ct),e(Ct,jr),T(jo,jr,null),e(ht,si),e(ht,Or),e(Or,ai),f(o,$a,_),f(o,ae,_),T(Oo,ae,null),e(ae,di),e(ae,Pr),e(Pr,ii),e(ae,li),e(ae,jt),e(jt,Nr),e(Nr,ci),e(jt,pi),e(jt,Zn),e(Zn,hi),e(jt,ui),e(ae,mi),e(ae,Po),e(Po,fi),e(Po,er),e(er,_i),e(Po,gi),e(ae,bi),e(ae,Qe),T(No,Qe,null),e(Qe,vi),e(Qe,Ar),e(Ar,ki),e(Qe,yi),e(Qe,Ir),e(Ir,tr),e(tr,Ti),e(tr,Lr),e(Lr,wi),f(o,xa,_),f(o,ut,_),e(ut,Ot),e(Ot,Sr),T(Ao,Sr,null),e(ut,$i),e(ut,Dr),e(Dr,xi),f(o,Fa,_),f(o,de,_),T(Io,de,null),e(de,Fi),e(de,Lo),e(Lo,zi),e(Lo,Gr),e(Gr,Bi),e(Lo,qi),e(de,Ei),e(de,Pt),e(Pt,Wr),e(Wr,Mi),e(Pt,Ci),e(Pt,or),e(or,ji),e(Pt,Oi),e(de,Pi),e(de,So),e(So,Ni),e(So,nr),e(nr,Ai),e(So,Ii),e(de,Li),e(de,Xe),T(Do,Xe,null),e(Xe,Si),e(Xe,Ur),e(Ur,Di),e(Xe,Gi),e(Xe,Rr),e(Rr,rr),e(rr,Wi),e(rr,Hr),e(Hr,Ui),f(o,za,_),f(o,mt,_),e(mt,Nt),e(Nt,Kr),T(Go,Kr,null),e(mt,Ri),e(mt,Vr),e(Vr,Hi),f(o,Ba,_),f(o,We,_),e(We,Ki),e(We,Jr),e(Jr,Vi),e(We,Ji),e(We,Qr),e(Qr,Qi),e(We,Xi),e(We,Xr),e(Xr,Yi),f(o,qa,_),f(o,ye,_),T(Wo,ye,null),e(ye,Zi),e(ye,Uo),e(Uo,el),e(Uo,sr),e(sr,tl),e(Uo,ol),e(ye,nl),e(ye,Ro),e(Ro,rl),e(Ro,Ho),e(Ho,sl),e(Ro,al),e(ye,dl),e(ye,Fe),T(Ko,Fe,null),e(Fe,il),e(Fe,ft),e(ft,ll),e(ft,ar),e(ar,cl),e(ft,pl),e(ft,Yr),e(Yr,hl),e(ft,ul),e(Fe,ml),T(At,Fe,null),e(Fe,fl),T(It,Fe,null),f(o,Ea,_),f(o,_t,_),e(_t,Lt),e(Lt,Zr),T(Vo,Zr,null),e(_t,_l),e(_t,es),e(es,gl),f(o,Ma,_),f(o,Ue,_),e(Ue,bl),e(Ue,dr),e(dr,vl),e(Ue,kl),e(Ue,ts),e(ts,yl),e(Ue,Tl),e(Ue,os),e(os,wl),f(o,Ca,_),f(o,Te,_),T(Jo,Te,null),e(Te,$l),e(Te,Qo),e(Qo,xl),e(Qo,ir),e(ir,Fl),e(Qo,zl),e(Te,Bl),e(Te,Xo),e(Xo,ql),e(Xo,Yo),e(Yo,El),e(Xo,Ml),e(Te,Cl),e(Te,ze),T(Zo,ze,null),e(ze,jl),e(ze,gt),e(gt,Ol),e(gt,lr),e(lr,Pl),e(gt,Nl),e(gt,ns),e(ns,Al),e(gt,Il),e(ze,Ll),T(St,ze,null),e(ze,Sl),T(Dt,ze,null),f(o,ja,_),f(o,bt,_),e(bt,Gt),e(Gt,rs),T(en,rs,null),e(bt,Dl),e(bt,ss),e(ss,Gl),f(o,Oa,_),f(o,vt,_),T(tn,vt,null),e(vt,Wl),e(vt,Wt),T(on,Wt,null),e(Wt,Ul),T(Ut,Wt,null),f(o,Pa,_),f(o,kt,_),e(kt,Rt),e(Rt,as),T(nn,as,null),e(kt,Rl),e(kt,ds),e(ds,Hl),f(o,Na,_),f(o,ie,_),T(rn,ie,null),e(ie,Kl),e(ie,sn),e(sn,Vl),e(sn,cr),e(cr,Jl),e(sn,Ql),e(ie,Xl),e(ie,an),e(an,Yl),e(an,dn),e(dn,Zl),e(an,ec),e(ie,tc),T(Ht,ie,null),e(ie,oc),e(ie,Be),T(ln,Be,null),e(Be,nc),e(Be,yt),e(yt,rc),e(yt,pr),e(pr,sc),e(yt,ac),e(yt,is),e(is,dc),e(yt,ic),e(Be,lc),T(Kt,Be,null),e(Be,cc),T(Vt,Be,null),f(o,Aa,_),f(o,Tt,_),e(Tt,Jt),e(Jt,ls),T(cn,ls,null),e(Tt,pc),e(Tt,cs),e(cs,hc),f(o,Ia,_),f(o,le,_),T(pn,le,null),e(le,uc),e(le,hn),e(hn,mc),e(hn,hr),e(hr,fc),e(hn,_c),e(le,gc),e(le,un),e(un,bc),e(un,mn),e(mn,vc),e(un,kc),e(le,yc),T(Qt,le,null),e(le,Tc),e(le,X),T(fn,X,null),e(X,wc),e(X,wt),e(wt,$c),e(wt,ur),e(ur,xc),e(wt,Fc),e(wt,ps),e(ps,zc),e(wt,Bc),e(X,qc),T(Xt,X,null),e(X,Ec),e(X,hs),e(hs,Mc),e(X,Cc),e(X,us),e(us,ms),e(ms,fs),e(fs,_s),e(_s,jc),e(X,Oc),e(X,gs),e(gs,bs),e(bs,vs),e(vs,_n),e(_n,Pc),e(_n,ks),e(ks,Nc),e(_n,Ac),f(o,La,_),f(o,$t,_),e($t,Yt),e(Yt,ys),T(gn,ys,null),e($t,Ic),e($t,Ts),e(Ts,Lc),f(o,Sa,_),f(o,L,_),T(bn,L,null),e(L,Sc),e(L,vn),e(vn,Dc),e(vn,mr),e(mr,Gc),e(vn,Wc),e(L,Uc),e(L,kn),e(kn,Rc),e(kn,yn),e(yn,Hc),e(kn,Kc),e(L,Vc),e(L,ws),e(ws,Jc),e(L,Qc),e(L,Re),e(Re,$s),e($s,Tn),e(Tn,Xc),e(Re,Yc),e(Re,xs),e(xs,wn),e(wn,Zc),e(Re,ep),e(Re,Fs),e(Fs,$n),e($n,tp),e(Re,op),e(Re,zs),e(zs,xn),e(xn,np),e(L,rp),e(L,qe),T(Fn,qe,null),e(qe,sp),e(qe,xt),e(xt,ap),e(xt,Bs),e(Bs,dp),e(xt,ip),e(xt,qs),e(qs,lp),e(xt,cp),e(qe,pp),T(Zt,qe,null),e(qe,hp),T(eo,qe,null),e(L,up),e(L,to),T(zn,to,null),e(to,mp),T(oo,to,null),e(L,fp),e(L,no),T(Bn,no,null),e(no,_p),T(ro,no,null),f(o,Da,_),f(o,Ft,_),e(Ft,so),e(so,Es),T(qn,Es,null),e(Ft,gp),e(Ft,Ms),e(Ms,bp),f(o,Ga,_),f(o,S,_),T(En,S,null),e(S,vp),e(S,Mn),e(Mn,kp),e(Mn,fr),e(fr,yp),e(Mn,Tp),e(S,wp),e(S,Cn),e(Cn,$p),e(Cn,jn),e(jn,xp),e(Cn,Fp),e(S,zp),e(S,Cs),e(Cs,Bp),e(S,qp),e(S,He),e(He,js),e(js,On),e(On,Ep),e(He,Mp),e(He,Os),e(Os,Pn),e(Pn,Cp),e(He,jp),e(He,Ps),e(Ps,Nn),e(Nn,Op),e(He,Pp),e(He,Ns),e(Ns,An),e(An,Np),e(S,Ap),e(S,D),T(In,D,null),e(D,Ip),e(D,zt),e(zt,Lp),e(zt,As),e(As,Sp),e(zt,Dp),e(zt,Is),e(Is,Gp),e(zt,Wp),e(D,Up),T(ao,D,null),e(D,Rp),e(D,Ls),e(Ls,Hp),e(D,Kp),e(D,Ss),e(Ss,Ds),e(Ds,Gs),e(Gs,Ws),e(Ws,Vp),e(D,Jp),e(D,Us),e(Us,Rs),e(Rs,Hs),e(Hs,Ks),e(Ks,Qp),e(D,Xp),e(D,Vs),e(Vs,Js),e(Js,Qs),e(Qs,Xs),e(Xs,Yp),e(D,Zp),e(D,Ys),e(Ys,Zs),e(Zs,Ln),e(Ln,io),e(io,lo),e(lo,ea),T(Sn,ea,null),e(io,eh),e(io,ta),e(ta,th),e(Ln,oh),e(Ln,oa),e(oa,nh),e(S,rh),e(S,co),T(Dn,co,null),e(co,sh),T(po,co,null),e(S,ah),e(S,ho),T(Gn,ho,null),e(ho,dh),T(uo,ho,null),Wa=!0},p(o,[_]){const Wn={};_&2&&(Wn.$$scope={dirty:_,ctx:o}),Mt.$set(Wn);const na={};_&2&&(na.$$scope={dirty:_,ctx:o}),At.$set(na);const ra={};_&2&&(ra.$$scope={dirty:_,ctx:o}),It.$set(ra);const sa={};_&2&&(sa.$$scope={dirty:_,ctx:o}),St.$set(sa);const mo={};_&2&&(mo.$$scope={dirty:_,ctx:o}),Dt.$set(mo);const aa={};_&2&&(aa.$$scope={dirty:_,ctx:o}),Ut.$set(aa);const da={};_&2&&(da.$$scope={dirty:_,ctx:o}),Ht.$set(da);const Un={};_&2&&(Un.$$scope={dirty:_,ctx:o}),Kt.$set(Un);const ia={};_&2&&(ia.$$scope={dirty:_,ctx:o}),Vt.$set(ia);const la={};_&2&&(la.$$scope={dirty:_,ctx:o}),Qt.$set(la);const ca={};_&2&&(ca.$$scope={dirty:_,ctx:o}),Xt.$set(ca);const Rn={};_&2&&(Rn.$$scope={dirty:_,ctx:o}),Zt.$set(Rn);const pa={};_&2&&(pa.$$scope={dirty:_,ctx:o}),eo.$set(pa);const ha={};_&2&&(ha.$$scope={dirty:_,ctx:o}),oo.$set(ha);const ua={};_&2&&(ua.$$scope={dirty:_,ctx:o}),ro.$set(ua);const ma={};_&2&&(ma.$$scope={dirty:_,ctx:o}),ao.$set(ma);const Bt={};_&2&&(Bt.$$scope={dirty:_,ctx:o}),po.$set(Bt);const fa={};_&2&&(fa.$$scope={dirty:_,ctx:o}),uo.$set(fa)},i(o){Wa||(w(i.$$.fragment,o),w(R.$$.fragment,o),w(be.$$.fragment,o),w(Bo.$$.fragment,o),w(qo.$$.fragment,o),w(Eo.$$.fragment,o),w(Mo.$$.fragment,o),w(Mt.$$.fragment,o),w(jo.$$.fragment,o),w(Oo.$$.fragment,o),w(No.$$.fragment,o),w(Ao.$$.fragment,o),w(Io.$$.fragment,o),w(Do.$$.fragment,o),w(Go.$$.fragment,o),w(Wo.$$.fragment,o),w(Ko.$$.fragment,o),w(At.$$.fragment,o),w(It.$$.fragment,o),w(Vo.$$.fragment,o),w(Jo.$$.fragment,o),w(Zo.$$.fragment,o),w(St.$$.fragment,o),w(Dt.$$.fragment,o),w(en.$$.fragment,o),w(tn.$$.fragment,o),w(on.$$.fragment,o),w(Ut.$$.fragment,o),w(nn.$$.fragment,o),w(rn.$$.fragment,o),w(Ht.$$.fragment,o),w(ln.$$.fragment,o),w(Kt.$$.fragment,o),w(Vt.$$.fragment,o),w(cn.$$.fragment,o),w(pn.$$.fragment,o),w(Qt.$$.fragment,o),w(fn.$$.fragment,o),w(Xt.$$.fragment,o),w(gn.$$.fragment,o),w(bn.$$.fragment,o),w(Fn.$$.fragment,o),w(Zt.$$.fragment,o),w(eo.$$.fragment,o),w(zn.$$.fragment,o),w(oo.$$.fragment,o),w(Bn.$$.fragment,o),w(ro.$$.fragment,o),w(qn.$$.fragment,o),w(En.$$.fragment,o),w(In.$$.fragment,o),w(ao.$$.fragment,o),w(Sn.$$.fragment,o),w(Dn.$$.fragment,o),w(po.$$.fragment,o),w(Gn.$$.fragment,o),w(uo.$$.fragment,o),Wa=!0)},o(o){$(i.$$.fragment,o),$(R.$$.fragment,o),$(be.$$.fragment,o),$(Bo.$$.fragment,o),$(qo.$$.fragment,o),$(Eo.$$.fragment,o),$(Mo.$$.fragment,o),$(Mt.$$.fragment,o),$(jo.$$.fragment,o),$(Oo.$$.fragment,o),$(No.$$.fragment,o),$(Ao.$$.fragment,o),$(Io.$$.fragment,o),$(Do.$$.fragment,o),$(Go.$$.fragment,o),$(Wo.$$.fragment,o),$(Ko.$$.fragment,o),$(At.$$.fragment,o),$(It.$$.fragment,o),$(Vo.$$.fragment,o),$(Jo.$$.fragment,o),$(Zo.$$.fragment,o),$(St.$$.fragment,o),$(Dt.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(Ut.$$.fragment,o),$(nn.$$.fragment,o),$(rn.$$.fragment,o),$(Ht.$$.fragment,o),$(ln.$$.fragment,o),$(Kt.$$.fragment,o),$(Vt.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(Qt.$$.fragment,o),$(fn.$$.fragment,o),$(Xt.$$.fragment,o),$(gn.$$.fragment,o),$(bn.$$.fragment,o),$(Fn.$$.fragment,o),$(Zt.$$.fragment,o),$(eo.$$.fragment,o),$(zn.$$.fragment,o),$(oo.$$.fragment,o),$(Bn.$$.fragment,o),$(ro.$$.fragment,o),$(qn.$$.fragment,o),$(En.$$.fragment,o),$(In.$$.fragment,o),$(ao.$$.fragment,o),$(Sn.$$.fragment,o),$(Dn.$$.fragment,o),$(po.$$.fragment,o),$(Gn.$$.fragment,o),$(uo.$$.fragment,o),Wa=!1},d(o){t(p),o&&t(v),o&&t(g),x(i),o&&t(pe),o&&t(E),o&&t(we),o&&t(G),x(R),o&&t(J),o&&t(Q),o&&t(A),o&&t(he),o&&t($e),o&&t(ue),o&&t(xe),o&&t(C),o&&t(Ve),o&&t(O),x(be),o&&t(Je),o&&t(I),o&&t(ba),o&&t(it),x(Bo),o&&t(va),o&&t(Jn),o&&t(ka),x(qo,o),o&&t(ya),o&&t(lt),x(Eo),o&&t(Ta),o&&t(ke),x(Mo),x(Mt),o&&t(wa),o&&t(ht),x(jo),o&&t($a),o&&t(ae),x(Oo),x(No),o&&t(xa),o&&t(ut),x(Ao),o&&t(Fa),o&&t(de),x(Io),x(Do),o&&t(za),o&&t(mt),x(Go),o&&t(Ba),o&&t(We),o&&t(qa),o&&t(ye),x(Wo),x(Ko),x(At),x(It),o&&t(Ea),o&&t(_t),x(Vo),o&&t(Ma),o&&t(Ue),o&&t(Ca),o&&t(Te),x(Jo),x(Zo),x(St),x(Dt),o&&t(ja),o&&t(bt),x(en),o&&t(Oa),o&&t(vt),x(tn),x(on),x(Ut),o&&t(Pa),o&&t(kt),x(nn),o&&t(Na),o&&t(ie),x(rn),x(Ht),x(ln),x(Kt),x(Vt),o&&t(Aa),o&&t(Tt),x(cn),o&&t(Ia),o&&t(le),x(pn),x(Qt),x(fn),x(Xt),o&&t(La),o&&t($t),x(gn),o&&t(Sa),o&&t(L),x(bn),x(Fn),x(Zt),x(eo),x(zn),x(oo),x(Bn),x(ro),o&&t(Da),o&&t(Ft),x(qn),o&&t(Ga),o&&t(S),x(En),x(In),x(ao),x(Sn),x(Dn),x(po),x(Gn),x(uo)}}}const cf={local:"blenderbot",sections:[{local:"overview",title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage",title:"Usage"},{local:"transformers.BlenderbotConfig",title:"BlenderbotConfig"},{local:"transformers.BlenderbotTokenizer",title:"BlenderbotTokenizer"},{local:"transformers.BlenderbotTokenizerFast",title:"BlenderbotTokenizerFast"},{local:"transformers.BlenderbotModel",title:"BlenderbotModel"},{local:"transformers.BlenderbotForConditionalGeneration",title:"BlenderbotForConditionalGeneration"},{local:"transformers.BlenderbotForCausalLM",title:"BlenderbotForCausalLM"},{local:"transformers.TFBlenderbotModel",title:"TFBlenderbotModel"},{local:"transformers.TFBlenderbotForConditionalGeneration",title:"TFBlenderbotForConditionalGeneration"},{local:"transformers.FlaxBlenderbotModel",title:"FlaxBlenderbotModel"},{local:"transformers.FlaxBlenderbotForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot"};function pf(z){return Wm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class bf extends Lm{constructor(p){super();Sm(this,p,pf,lf,Dm,{})}}export{bf as default,cf as metadata};
