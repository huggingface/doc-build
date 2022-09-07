import{S as Lm,i as Sm,s as Dm,e as n,k as l,w as y,t as s,M as Gm,c as a,d as t,m as c,a as r,x as v,h as d,b as h,G as e,g as f,y as T,q as w,o as $,B as x,v as Wm,L as nt}from"../../chunks/vendor-hf-doc-builder.js";import{T as xo}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ve}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ce}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ot}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Um(F){let p,k,g,u,b;return u=new Ve({props:{code:`from transformers import BlenderbotModel, BlenderbotConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),k=s("Example:"),g=l(),y(u.$$.fragment)},l(i){p=a(i,"P",{});var m=r(p);k=d(m,"Example:"),m.forEach(t),g=c(i),v(u.$$.fragment,i)},m(i,m){f(i,p,m),e(p,k),f(i,g,m),T(u,i,m),b=!0},p:nt,i(i){b||(w(u.$$.fragment,i),b=!0)},o(i){$(u.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(u,i)}}}function Rm(F){let p,k,g,u,b;return{c(){p=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=a(i,"P",{});var m=r(p);k=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(m,"CODE",{});var z=r(g);u=d(z,"Module"),z.forEach(t),b=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){f(i,p,m),e(p,k),e(p,g),e(g,u),e(p,b)},d(i){i&&t(p)}}}function Hm(F){let p,k,g,u,b;return u=new Ve({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotModel

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
[<span class="hljs-number">1</span>, <span class="hljs-number">6</span>, <span class="hljs-number">1280</span>]`}}),{c(){p=n("p"),k=s("Example:"),g=l(),y(u.$$.fragment)},l(i){p=a(i,"P",{});var m=r(p);k=d(m,"Example:"),m.forEach(t),g=c(i),v(u.$$.fragment,i)},m(i,m){f(i,p,m),e(p,k),f(i,g,m),T(u,i,m),b=!0},p:nt,i(i){b||(w(u.$$.fragment,i),b=!0)},o(i){$(u.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(u,i)}}}function Vm(F){let p,k,g,u,b;return{c(){p=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=a(i,"P",{});var m=r(p);k=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(m,"CODE",{});var z=r(g);u=d(z,"Module"),z.forEach(t),b=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){f(i,p,m),e(p,k),e(p,g),e(g,u),e(p,b)},d(i){i&&t(p)}}}function Km(F){let p,k,g,u,b;return u=new Ve({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

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
Bot:   That&#x27;s too bad. Have you tried encouraging them to change their eating habits?</span>`}}),{c(){p=n("p"),k=s("Conversation example:"),g=l(),y(u.$$.fragment)},l(i){p=a(i,"P",{});var m=r(p);k=d(m,"Conversation example:"),m.forEach(t),g=c(i),v(u.$$.fragment,i)},m(i,m){f(i,p,m),e(p,k),f(i,g,m),T(u,i,m),b=!0},p:nt,i(i){b||(w(u.$$.fragment,i),b=!0)},o(i){$(u.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(u,i)}}}function Jm(F){let p,k,g,u,b;return u=new Ve({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){p=n("p"),k=s("Example:"),g=l(),y(u.$$.fragment)},l(i){p=a(i,"P",{});var m=r(p);k=d(m,"Example:"),m.forEach(t),g=c(i),v(u.$$.fragment,i)},m(i,m){f(i,p,m),e(p,k),f(i,g,m),T(u,i,m),b=!0},p:nt,i(i){b||(w(u.$$.fragment,i),b=!0)},o(i){$(u.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(u,i)}}}function Qm(F){let p,k,g,u,b,i,m,z,Me,pe,E,fe,te,Ce,oe,ne,je,we,G,N,_e,R,M,j,Oe,J,Q,Pe,W,Ne,Ae,A,he,ae,$e,ue,H,Ie,xe,C,Le,U,Se;return{c(){p=n("p"),k=s("TF 2.0 models accepts two formats as inputs:"),g=l(),u=n("ul"),b=n("li"),i=s("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),z=n("li"),Me=s("having all inputs as a list, tuple or dict in the first positional arguments."),pe=l(),E=n("p"),fe=s("This second option is useful when using "),te=n("code"),Ce=s("tf.keras.Model.fit"),oe=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=n("code"),je=s("model(inputs)"),we=s("."),G=l(),N=n("p"),_e=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=l(),M=n("ul"),j=n("li"),Oe=s("a single Tensor with "),J=n("code"),Q=s("input_ids"),Pe=s(" only and nothing else: "),W=n("code"),Ne=s("model(input_ids)"),Ae=l(),A=n("li"),he=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=n("code"),$e=s("model([input_ids, attention_mask])"),ue=s(" or "),H=n("code"),Ie=s("model([input_ids, attention_mask, token_type_ids])"),xe=l(),C=n("li"),Le=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),Se=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(B){p=a(B,"P",{});var q=r(p);k=d(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),g=c(B),u=a(B,"UL",{});var ge=r(u);b=a(ge,"LI",{});var at=r(b);i=d(at,"having all inputs as keyword arguments (like PyTorch models), or"),at.forEach(t),m=c(ge),z=a(ge,"LI",{});var Ke=r(z);Me=d(Ke,"having all inputs as a list, tuple or dict in the first positional arguments."),Ke.forEach(t),ge.forEach(t),pe=c(B),E=a(B,"P",{});var O=r(E);fe=d(O,"This second option is useful when using "),te=a(O,"CODE",{});var me=r(te);Ce=d(me,"tf.keras.Model.fit"),me.forEach(t),oe=d(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=a(O,"CODE",{});var De=r(ne);je=d(De,"model(inputs)"),De.forEach(t),we=d(O,"."),O.forEach(t),G=c(B),N=a(B,"P",{});var be=r(N);_e=d(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),R=c(B),M=a(B,"UL",{});var V=r(M);j=a(V,"LI",{});var K=r(j);Oe=d(K,"a single Tensor with "),J=a(K,"CODE",{});var rt=r(J);Q=d(rt,"input_ids"),rt.forEach(t),Pe=d(K," only and nothing else: "),W=a(K,"CODE",{});var Je=r(W);Ne=d(Je,"model(input_ids)"),Je.forEach(t),K.forEach(t),Ae=c(V),A=a(V,"LI",{});var I=r(A);he=d(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=a(I,"CODE",{});var ke=r(ae);$e=d(ke,"model([input_ids, attention_mask])"),ke.forEach(t),ue=d(I," or "),H=a(I,"CODE",{});var st=r(H);Ie=d(st,"model([input_ids, attention_mask, token_type_ids])"),st.forEach(t),I.forEach(t),xe=c(V),C=a(V,"LI",{});var re=r(C);Le=d(re,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(re,"CODE",{});var dt=r(U);Se=d(dt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),dt.forEach(t),re.forEach(t),V.forEach(t)},m(B,q){f(B,p,q),e(p,k),f(B,g,q),f(B,u,q),e(u,b),e(b,i),e(u,m),e(u,z),e(z,Me),f(B,pe,q),f(B,E,q),e(E,fe),e(E,te),e(te,Ce),e(E,oe),e(E,ne),e(ne,je),e(E,we),f(B,G,q),f(B,N,q),e(N,_e),f(B,R,q),f(B,M,q),e(M,j),e(j,Oe),e(j,J),e(J,Q),e(j,Pe),e(j,W),e(W,Ne),e(M,Ae),e(M,A),e(A,he),e(A,ae),e(ae,$e),e(A,ue),e(A,H),e(H,Ie),e(M,xe),e(M,C),e(C,Le),e(C,U),e(U,Se)},d(B){B&&t(p),B&&t(g),B&&t(u),B&&t(pe),B&&t(E),B&&t(G),B&&t(N),B&&t(R),B&&t(M)}}}function Xm(F){let p,k,g,u,b;return{c(){p=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=a(i,"P",{});var m=r(p);k=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(m,"CODE",{});var z=r(g);u=d(z,"Module"),z.forEach(t),b=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){f(i,p,m),e(p,k),e(p,g),e(g,u),e(p,b)},d(i){i&&t(p)}}}function Ym(F){let p,k,g,u,b;return u=new Ve({props:{code:`from transformers import BlenderbotTokenizer, TFBlenderbotModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=s("Example:"),g=l(),y(u.$$.fragment)},l(i){p=a(i,"P",{});var m=r(p);k=d(m,"Example:"),m.forEach(t),g=c(i),v(u.$$.fragment,i)},m(i,m){f(i,p,m),e(p,k),f(i,g,m),T(u,i,m),b=!0},p:nt,i(i){b||(w(u.$$.fragment,i),b=!0)},o(i){$(u.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(u,i)}}}function Zm(F){let p,k,g,u,b,i,m,z,Me,pe,E,fe,te,Ce,oe,ne,je,we,G,N,_e,R,M,j,Oe,J,Q,Pe,W,Ne,Ae,A,he,ae,$e,ue,H,Ie,xe,C,Le,U,Se;return{c(){p=n("p"),k=s("TF 2.0 models accepts two formats as inputs:"),g=l(),u=n("ul"),b=n("li"),i=s("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),z=n("li"),Me=s("having all inputs as a list, tuple or dict in the first positional arguments."),pe=l(),E=n("p"),fe=s("This second option is useful when using "),te=n("code"),Ce=s("tf.keras.Model.fit"),oe=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=n("code"),je=s("model(inputs)"),we=s("."),G=l(),N=n("p"),_e=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=l(),M=n("ul"),j=n("li"),Oe=s("a single Tensor with "),J=n("code"),Q=s("input_ids"),Pe=s(" only and nothing else: "),W=n("code"),Ne=s("model(input_ids)"),Ae=l(),A=n("li"),he=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=n("code"),$e=s("model([input_ids, attention_mask])"),ue=s(" or "),H=n("code"),Ie=s("model([input_ids, attention_mask, token_type_ids])"),xe=l(),C=n("li"),Le=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),Se=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(B){p=a(B,"P",{});var q=r(p);k=d(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),g=c(B),u=a(B,"UL",{});var ge=r(u);b=a(ge,"LI",{});var at=r(b);i=d(at,"having all inputs as keyword arguments (like PyTorch models), or"),at.forEach(t),m=c(ge),z=a(ge,"LI",{});var Ke=r(z);Me=d(Ke,"having all inputs as a list, tuple or dict in the first positional arguments."),Ke.forEach(t),ge.forEach(t),pe=c(B),E=a(B,"P",{});var O=r(E);fe=d(O,"This second option is useful when using "),te=a(O,"CODE",{});var me=r(te);Ce=d(me,"tf.keras.Model.fit"),me.forEach(t),oe=d(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),ne=a(O,"CODE",{});var De=r(ne);je=d(De,"model(inputs)"),De.forEach(t),we=d(O,"."),O.forEach(t),G=c(B),N=a(B,"P",{});var be=r(N);_e=d(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),R=c(B),M=a(B,"UL",{});var V=r(M);j=a(V,"LI",{});var K=r(j);Oe=d(K,"a single Tensor with "),J=a(K,"CODE",{});var rt=r(J);Q=d(rt,"input_ids"),rt.forEach(t),Pe=d(K," only and nothing else: "),W=a(K,"CODE",{});var Je=r(W);Ne=d(Je,"model(input_ids)"),Je.forEach(t),K.forEach(t),Ae=c(V),A=a(V,"LI",{});var I=r(A);he=d(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=a(I,"CODE",{});var ke=r(ae);$e=d(ke,"model([input_ids, attention_mask])"),ke.forEach(t),ue=d(I," or "),H=a(I,"CODE",{});var st=r(H);Ie=d(st,"model([input_ids, attention_mask, token_type_ids])"),st.forEach(t),I.forEach(t),xe=c(V),C=a(V,"LI",{});var re=r(C);Le=d(re,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(re,"CODE",{});var dt=r(U);Se=d(dt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),dt.forEach(t),re.forEach(t),V.forEach(t)},m(B,q){f(B,p,q),e(p,k),f(B,g,q),f(B,u,q),e(u,b),e(b,i),e(u,m),e(u,z),e(z,Me),f(B,pe,q),f(B,E,q),e(E,fe),e(E,te),e(te,Ce),e(E,oe),e(E,ne),e(ne,je),e(E,we),f(B,G,q),f(B,N,q),e(N,_e),f(B,R,q),f(B,M,q),e(M,j),e(j,Oe),e(j,J),e(J,Q),e(j,Pe),e(j,W),e(W,Ne),e(M,Ae),e(M,A),e(A,he),e(A,ae),e(ae,$e),e(A,ue),e(A,H),e(H,Ie),e(M,xe),e(M,C),e(C,Le),e(C,U),e(U,Se)},d(B){B&&t(p),B&&t(g),B&&t(u),B&&t(pe),B&&t(E),B&&t(G),B&&t(N),B&&t(R),B&&t(M)}}}function ef(F){let p,k,g,u,b;return{c(){p=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=a(i,"P",{});var m=r(p);k=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(m,"CODE",{});var z=r(g);u=d(z,"Module"),z.forEach(t),b=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){f(i,p,m),e(p,k),e(p,g),e(g,u),e(p,b)},d(i){i&&t(p)}}}function tf(F){let p,k,g,u,b;return{c(){p=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=a(i,"P",{});var m=r(p);k=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(m,"CODE",{});var z=r(g);u=d(z,"Module"),z.forEach(t),b=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){f(i,p,m),e(p,k),e(p,g),e(g,u),e(p,b)},d(i){i&&t(p)}}}function of(F){let p,k,g,u,b;return u=new Ve({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotModel

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = FlaxBlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=s("Example:"),g=l(),y(u.$$.fragment)},l(i){p=a(i,"P",{});var m=r(p);k=d(m,"Example:"),m.forEach(t),g=c(i),v(u.$$.fragment,i)},m(i,m){f(i,p,m),e(p,k),f(i,g,m),T(u,i,m),b=!0},p:nt,i(i){b||(w(u.$$.fragment,i),b=!0)},o(i){$(u.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(u,i)}}}function nf(F){let p,k,g,u,b;return u=new Ve({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),k=s("Example:"),g=l(),y(u.$$.fragment)},l(i){p=a(i,"P",{});var m=r(p);k=d(m,"Example:"),m.forEach(t),g=c(i),v(u.$$.fragment,i)},m(i,m){f(i,p,m),e(p,k),f(i,g,m),T(u,i,m),b=!0},p:nt,i(i){b||(w(u.$$.fragment,i),b=!0)},o(i){$(u.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(u,i)}}}function af(F){let p,k,g,u,b;return u=new Ve({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=s("Example:"),g=l(),y(u.$$.fragment)},l(i){p=a(i,"P",{});var m=r(p);k=d(m,"Example:"),m.forEach(t),g=c(i),v(u.$$.fragment,i)},m(i,m){f(i,p,m),e(p,k),f(i,g,m),T(u,i,m),b=!0},p:nt,i(i){b||(w(u.$$.fragment,i),b=!0)},o(i){$(u.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(u,i)}}}function rf(F){let p,k,g,u,b;return{c(){p=n("p"),k=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){p=a(i,"P",{});var m=r(p);k=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(m,"CODE",{});var z=r(g);u=d(z,"Module"),z.forEach(t),b=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(i,m){f(i,p,m),e(p,k),e(p,g),e(g,u),e(p,b)},d(i){i&&t(p)}}}function sf(F){let p,k,g,u,b;return u=new Ve({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),k=s("Example:"),g=l(),y(u.$$.fragment)},l(i){p=a(i,"P",{});var m=r(p);k=d(m,"Example:"),m.forEach(t),g=c(i),v(u.$$.fragment,i)},m(i,m){f(i,p,m),e(p,k),f(i,g,m),T(u,i,m),b=!0},p:nt,i(i){b||(w(u.$$.fragment,i),b=!0)},o(i){$(u.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(u,i)}}}function df(F){let p,k,g,u,b;return u=new Ve({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=n("p"),k=s("Example:"),g=l(),y(u.$$.fragment)},l(i){p=a(i,"P",{});var m=r(p);k=d(m,"Example:"),m.forEach(t),g=c(i),v(u.$$.fragment,i)},m(i,m){f(i,p,m),e(p,k),f(i,g,m),T(u,i,m),b=!0},p:nt,i(i){b||(w(u.$$.fragment,i),b=!0)},o(i){$(u.$$.fragment,i),b=!1},d(i){i&&t(p),i&&t(g),x(u,i)}}}function lf(F){let p,k,g,u,b,i,m,z,Me,pe,E,fe,te,Ce,oe,ne,je,we,G,N,_e,R,M,j,Oe,J,Q,Pe,W,Ne,Ae,A,he,ae,$e,ue,H,Ie,xe,C,Le,U,Se,B,q,ge,at,Ke,O,me,De,be,V,K,rt,Je,I,ke,st,re,dt,zd,qd,Bo,Ed,Fo,Md,Cd,jd,Ge,Od,Fa,Pd,Nd,za,Ad,Id,Kn,Ld,Sd,bs,it,qt,qa,zo,Dd,Ea,Gd,ks,Jn,Wd,ys,qo,vs,lt,Et,Ma,Eo,Ud,Ca,Rd,Ts,ye,Mo,Hd,ct,Vd,Qn,Kd,Jd,Co,Qd,Xd,Yd,pt,Zd,Xn,ei,ti,Yn,oi,ni,ai,Mt,ws,ht,Ct,ja,jo,ri,Oa,si,$s,se,Oo,di,Pa,ii,li,jt,Na,ci,pi,Zn,hi,ui,mi,Po,fi,ea,_i,gi,bi,Qe,No,ki,Aa,yi,vi,Ia,ta,Ti,La,wi,xs,ut,Ot,Sa,Ao,$i,Da,xi,Bs,de,Io,Bi,Lo,Fi,Ga,zi,qi,Ei,Pt,Wa,Mi,Ci,oa,ji,Oi,Pi,So,Ni,na,Ai,Ii,Li,Xe,Do,Si,Ua,Di,Gi,Ra,aa,Wi,Ha,Ui,Fs,mt,Nt,Va,Go,Ri,Ka,Hi,zs,We,Vi,Ja,Ki,Ji,Qa,Qi,Xi,Xa,Yi,qs,ve,Wo,Zi,Uo,el,ra,tl,ol,nl,Ro,al,Ho,rl,sl,dl,Be,Vo,il,ft,ll,sa,cl,pl,Ya,hl,ul,ml,At,fl,It,Es,_t,Lt,Za,Ko,_l,er,gl,Ms,Ue,bl,da,kl,yl,tr,vl,Tl,or,wl,Cs,Te,Jo,$l,Qo,xl,ia,Bl,Fl,zl,Xo,ql,Yo,El,Ml,Cl,Fe,Zo,jl,gt,Ol,la,Pl,Nl,nr,Al,Il,Ll,St,Sl,Dt,js,bt,Gt,ar,en,Dl,rr,Gl,Os,kt,tn,Wl,Wt,on,Ul,Ut,Ps,yt,Rt,sr,nn,Rl,dr,Hl,Ns,ie,an,Vl,rn,Kl,ca,Jl,Ql,Xl,sn,Yl,dn,Zl,ec,tc,Ht,oc,ze,ln,nc,vt,ac,pa,rc,sc,ir,dc,ic,lc,Vt,cc,Kt,As,Tt,Jt,lr,cn,pc,cr,hc,Is,le,pn,uc,hn,mc,ha,fc,_c,gc,un,bc,mn,kc,yc,vc,Qt,Tc,X,fn,wc,wt,$c,ua,xc,Bc,pr,Fc,zc,qc,Xt,Ec,hr,Mc,Cc,ur,mr,fr,_r,jc,Oc,gr,br,kr,_n,Pc,yr,Nc,Ac,Ls,$t,Yt,vr,gn,Ic,Tr,Lc,Ss,L,bn,Sc,kn,Dc,ma,Gc,Wc,Uc,yn,Rc,vn,Hc,Vc,Kc,wr,Jc,Qc,Re,$r,Tn,Xc,Yc,xr,wn,Zc,ep,Br,$n,tp,op,Fr,xn,np,ap,qe,Bn,rp,xt,sp,zr,dp,ip,qr,lp,cp,pp,Zt,hp,eo,up,to,Fn,mp,oo,fp,no,zn,_p,ao,Ds,Bt,ro,Er,qn,gp,Mr,bp,Gs,S,En,kp,Mn,yp,fa,vp,Tp,wp,Cn,$p,jn,xp,Bp,Fp,Cr,zp,qp,He,jr,On,Ep,Mp,Or,Pn,Cp,jp,Pr,Nn,Op,Pp,Nr,An,Np,Ap,D,In,Ip,Ft,Lp,Ar,Sp,Dp,Ir,Gp,Wp,Up,so,Rp,Lr,Hp,Vp,Sr,Dr,Gr,Wr,Kp,Jp,Ur,Rr,Hr,Vr,Qp,Xp,Kr,Jr,Qr,Xr,Yp,Zp,Yr,Zr,Ln,io,lo,es,Sn,eh,ts,th,oh,os,nh,ah,co,Dn,rh,po,sh,ho,Gn,dh,uo,Ws;return i=new ce({}),R=new ce({}),be=new ce({}),zo=new ce({}),qo=new Ve({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/configuration_blenderbot.py#L36"}}),Mt=new ot({props:{anchor:"transformers.BlenderbotConfig.example",$$slots:{default:[Um]},$$scope:{ctx:F}}}),jo=new ce({}),Oo=new P({props:{name:"class transformers.BlenderbotTokenizer",anchor:"transformers.BlenderbotTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot.py#L46"}}),No=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot.py#L59",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ao=new ce({}),Io=new P({props:{name:"class transformers.BlenderbotTokenizerFast",anchor:"transformers.BlenderbotTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L47"}}),Do=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L61",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Go=new ce({}),Wo=new P({props:{name:"class transformers.BlenderbotModel",anchor:"transformers.BlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1089"}}),Vo=new P({props:{name:"forward",anchor:"transformers.BlenderbotModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),At=new xo({props:{$$slots:{default:[Rm]},$$scope:{ctx:F}}}),It=new ot({props:{anchor:"transformers.BlenderbotModel.forward.example",$$slots:{default:[Hm]},$$scope:{ctx:F}}}),Ko=new ce({}),Jo=new P({props:{name:"class transformers.BlenderbotForConditionalGeneration",anchor:"transformers.BlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1227"}}),Zo=new P({props:{name:"forward",anchor:"transformers.BlenderbotForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),St=new xo({props:{$$slots:{default:[Vm]},$$scope:{ctx:F}}}),Dt=new ot({props:{anchor:"transformers.BlenderbotForConditionalGeneration.forward.example",$$slots:{default:[Km]},$$scope:{ctx:F}}}),en=new ce({}),tn=new P({props:{name:"class transformers.BlenderbotForCausalLM",anchor:"transformers.BlenderbotForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1422"}}),on=new P({props:{name:"forward",anchor:"transformers.BlenderbotForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ut=new ot({props:{anchor:"transformers.BlenderbotForCausalLM.forward.example",$$slots:{default:[Jm]},$$scope:{ctx:F}}}),nn=new ce({}),an=new P({props:{name:"class transformers.TFBlenderbotModel",anchor:"transformers.TFBlenderbotModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1142"}}),Ht=new xo({props:{$$slots:{default:[Qm]},$$scope:{ctx:F}}}),ln=new P({props:{name:"call",anchor:"transformers.TFBlenderbotModel.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1170",returnDescription:`
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
`}}),Vt=new xo({props:{$$slots:{default:[Xm]},$$scope:{ctx:F}}}),Kt=new ot({props:{anchor:"transformers.TFBlenderbotModel.call.example",$$slots:{default:[Ym]},$$scope:{ctx:F}}}),cn=new ce({}),pn=new P({props:{name:"class transformers.TFBlenderbotForConditionalGeneration",anchor:"transformers.TFBlenderbotForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1264"}}),Qt=new xo({props:{$$slots:{default:[Zm]},$$scope:{ctx:F}}}),fn=new P({props:{name:"call",anchor:"transformers.TFBlenderbotForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
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
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1314",returnDescription:`
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
`}}),Xt=new xo({props:{$$slots:{default:[ef]},$$scope:{ctx:F}}}),gn=new ce({}),bn=new P({props:{name:"class transformers.FlaxBlenderbotModel",anchor:"transformers.FlaxBlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1218"}}),Bn=new P({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Zt=new xo({props:{$$slots:{default:[tf]},$$scope:{ctx:F}}}),eo=new ot({props:{anchor:"transformers.FlaxBlenderbotModel.__call__.example",$$slots:{default:[of]},$$scope:{ctx:F}}}),Fn=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),oo=new ot({props:{anchor:"transformers.FlaxBlenderbotModel.encode.example",$$slots:{default:[nf]},$$scope:{ctx:F}}}),zn=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
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
`}}),ao=new ot({props:{anchor:"transformers.FlaxBlenderbotModel.decode.example",$$slots:{default:[af]},$$scope:{ctx:F}}}),qn=new ce({}),En=new P({props:{name:"class transformers.FlaxBlenderbotForConditionalGeneration",anchor:"transformers.FlaxBlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1305"}}),In=new P({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),so=new xo({props:{$$slots:{default:[rf]},$$scope:{ctx:F}}}),Sn=new ce({}),Dn=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),po=new ot({props:{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.example",$$slots:{default:[sf]},$$scope:{ctx:F}}}),Gn=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
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
`}}),uo=new ot({props:{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.example",$$slots:{default:[df]},$$scope:{ctx:F}}}),{c(){p=n("meta"),k=l(),g=n("h1"),u=n("a"),b=n("span"),y(i.$$.fragment),m=l(),z=n("span"),Me=s("Blenderbot"),pe=l(),E=n("p"),fe=n("strong"),te=s("DISCLAIMER:"),Ce=s(" If you see something strange, file a "),oe=n("a"),ne=s("Github Issue"),je=s(" ."),we=l(),G=n("h2"),N=n("a"),_e=n("span"),y(R.$$.fragment),M=l(),j=n("span"),Oe=s("Overview"),J=l(),Q=n("p"),Pe=s("The Blender chatbot model was proposed in "),W=n("a"),Ne=s("Recipes for building an open-domain chatbot"),Ae=s(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),A=l(),he=n("p"),ae=s("The abstract of the paper is the following:"),$e=l(),ue=n("p"),H=n("em"),Ie=s(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),xe=l(),C=n("p"),Le=s("This model was contributed by "),U=n("a"),Se=s("sshleifer"),B=s(". The authors\u2019 code can be found "),q=n("a"),ge=s("here"),at=s(" ."),Ke=l(),O=n("h2"),me=n("a"),De=n("span"),y(be.$$.fragment),V=l(),K=n("span"),rt=s("Implementation Notes"),Je=l(),I=n("ul"),ke=n("li"),st=s("Blenderbot uses a standard "),re=n("a"),dt=s("seq2seq model transformer"),zd=s(" based architecture."),qd=l(),Bo=n("li"),Ed=s("Available checkpoints can be found in the "),Fo=n("a"),Md=s("model hub"),Cd=s("."),jd=l(),Ge=n("li"),Od=s("This is the "),Fa=n("em"),Pd=s("default"),Nd=s(` Blenderbot model class. However, some smaller checkpoints, such as
`),za=n("code"),Ad=s("facebook/blenderbot_small_90M"),Id=s(`, have a different architecture and consequently should be used with
`),Kn=n("a"),Ld=s("BlenderbotSmall"),Sd=s("."),bs=l(),it=n("h2"),qt=n("a"),qa=n("span"),y(zo.$$.fragment),Dd=l(),Ea=n("span"),Gd=s("Usage"),ks=l(),Jn=n("p"),Wd=s("Here is an example of model usage:"),ys=l(),y(qo.$$.fragment),vs=l(),lt=n("h2"),Et=n("a"),Ma=n("span"),y(Eo.$$.fragment),Ud=l(),Ca=n("span"),Rd=s("BlenderbotConfig"),Ts=l(),ye=n("div"),y(Mo.$$.fragment),Hd=l(),ct=n("p"),Vd=s("This is the configuration class to store the configuration of a "),Qn=n("a"),Kd=s("BlenderbotModel"),Jd=s(`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),Co=n("a"),Qd=s("facebook/blenderbot-3B"),Xd=s(" architecture."),Yd=l(),pt=n("p"),Zd=s("Configuration objects inherit from "),Xn=n("a"),ei=s("PretrainedConfig"),ti=s(` and can be used to control the model outputs. Read the
documentation from `),Yn=n("a"),oi=s("PretrainedConfig"),ni=s(" for more information."),ai=l(),y(Mt.$$.fragment),ws=l(),ht=n("h2"),Ct=n("a"),ja=n("span"),y(jo.$$.fragment),ri=l(),Oa=n("span"),si=s("BlenderbotTokenizer"),$s=l(),se=n("div"),y(Oo.$$.fragment),di=l(),Pa=n("p"),ii=s("Construct a Blenderbot tokenizer."),li=l(),jt=n("p"),Na=n("code"),ci=s("Blenderbot"),pi=s(" is nearly identical to "),Zn=n("a"),hi=s("RobertaTokenizer"),ui=s(` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),mi=l(),Po=n("p"),fi=s("Refer to superclass "),ea=n("a"),_i=s("RobertaTokenizer"),gi=s(" for usage examples and documentation concerning parameters."),bi=l(),Qe=n("div"),y(No.$$.fragment),ki=l(),Aa=n("p"),yi=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),vi=l(),Ia=n("ul"),ta=n("li"),Ti=s("single sequence: "),La=n("code"),wi=s("X </s>"),xs=l(),ut=n("h2"),Ot=n("a"),Sa=n("span"),y(Ao.$$.fragment),$i=l(),Da=n("span"),xi=s("BlenderbotTokenizerFast"),Bs=l(),de=n("div"),y(Io.$$.fragment),Bi=l(),Lo=n("p"),Fi=s("Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Ga=n("em"),zi=s("tokenizers"),qi=s(" library)."),Ei=l(),Pt=n("p"),Wa=n("code"),Mi=s("BlenderbotFast"),Ci=s(" is nearly identical to "),oa=n("a"),ji=s("RobertaTokenizerFast"),Oi=s(` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),Pi=l(),So=n("p"),Ni=s("Refer to superclass "),na=n("a"),Ai=s("RobertaTokenizerFast"),Ii=s(" for usage examples and documentation concerning parameters."),Li=l(),Xe=n("div"),y(Do.$$.fragment),Si=l(),Ua=n("p"),Di=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Gi=l(),Ra=n("ul"),aa=n("li"),Wi=s("single sequence: "),Ha=n("code"),Ui=s("X </s>"),Fs=l(),mt=n("h2"),Nt=n("a"),Va=n("span"),y(Go.$$.fragment),Ri=l(),Ka=n("span"),Hi=s("BlenderbotModel"),zs=l(),We=n("p"),Vi=s("See "),Ja=n("code"),Ki=s("transformers.BartModel"),Ji=s(" for arguments to "),Qa=n("em"),Qi=s("forward"),Xi=s(" and "),Xa=n("em"),Yi=s("generate"),qs=l(),ve=n("div"),y(Wo.$$.fragment),Zi=l(),Uo=n("p"),el=s(`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ra=n("a"),tl=s("PreTrainedModel"),ol=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nl=l(),Ro=n("p"),al=s("This model is also a PyTorch "),Ho=n("a"),rl=s("torch.nn.Module"),sl=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dl=l(),Be=n("div"),y(Vo.$$.fragment),il=l(),ft=n("p"),ll=s("The "),sa=n("a"),cl=s("BlenderbotModel"),pl=s(" forward method, overrides the "),Ya=n("code"),hl=s("__call__"),ul=s(" special method."),ml=l(),y(At.$$.fragment),fl=l(),y(It.$$.fragment),Es=l(),_t=n("h2"),Lt=n("a"),Za=n("span"),y(Ko.$$.fragment),_l=l(),er=n("span"),gl=s("BlenderbotForConditionalGeneration"),Ms=l(),Ue=n("p"),bl=s("See "),da=n("a"),kl=s("BartForConditionalGeneration"),yl=s(" for arguments to "),tr=n("em"),vl=s("forward"),Tl=s(" and "),or=n("em"),wl=s("generate"),Cs=l(),Te=n("div"),y(Jo.$$.fragment),$l=l(),Qo=n("p"),xl=s(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),ia=n("a"),Bl=s("PreTrainedModel"),Fl=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zl=l(),Xo=n("p"),ql=s("This model is also a PyTorch "),Yo=n("a"),El=s("torch.nn.Module"),Ml=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cl=l(),Fe=n("div"),y(Zo.$$.fragment),jl=l(),gt=n("p"),Ol=s("The "),la=n("a"),Pl=s("BlenderbotForConditionalGeneration"),Nl=s(" forward method, overrides the "),nr=n("code"),Al=s("__call__"),Il=s(" special method."),Ll=l(),y(St.$$.fragment),Sl=l(),y(Dt.$$.fragment),js=l(),bt=n("h2"),Gt=n("a"),ar=n("span"),y(en.$$.fragment),Dl=l(),rr=n("span"),Gl=s("BlenderbotForCausalLM"),Os=l(),kt=n("div"),y(tn.$$.fragment),Wl=l(),Wt=n("div"),y(on.$$.fragment),Ul=l(),y(Ut.$$.fragment),Ps=l(),yt=n("h2"),Rt=n("a"),sr=n("span"),y(nn.$$.fragment),Rl=l(),dr=n("span"),Hl=s("TFBlenderbotModel"),Ns=l(),ie=n("div"),y(an.$$.fragment),Vl=l(),rn=n("p"),Kl=s(`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ca=n("a"),Jl=s("TFPreTrainedModel"),Ql=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xl=l(),sn=n("p"),Yl=s("This model is also a "),dn=n("a"),Zl=s("tf.keras.Model"),ec=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tc=l(),y(Ht.$$.fragment),oc=l(),ze=n("div"),y(ln.$$.fragment),nc=l(),vt=n("p"),ac=s("The "),pa=n("a"),rc=s("TFBlenderbotModel"),sc=s(" forward method, overrides the "),ir=n("code"),dc=s("__call__"),ic=s(" special method."),lc=l(),y(Vt.$$.fragment),cc=l(),y(Kt.$$.fragment),As=l(),Tt=n("h2"),Jt=n("a"),lr=n("span"),y(cn.$$.fragment),pc=l(),cr=n("span"),hc=s("TFBlenderbotForConditionalGeneration"),Is=l(),le=n("div"),y(pn.$$.fragment),uc=l(),hn=n("p"),mc=s(`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),ha=n("a"),fc=s("TFPreTrainedModel"),_c=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gc=l(),un=n("p"),bc=s("This model is also a "),mn=n("a"),kc=s("tf.keras.Model"),yc=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vc=l(),y(Qt.$$.fragment),Tc=l(),X=n("div"),y(fn.$$.fragment),wc=l(),wt=n("p"),$c=s("The "),ua=n("a"),xc=s("TFBlenderbotForConditionalGeneration"),Bc=s(" forward method, overrides the "),pr=n("code"),Fc=s("__call__"),zc=s(" special method."),qc=l(),y(Xt.$$.fragment),Ec=l(),hr=n("p"),Mc=s("Conversation example::"),Cc=l(),ur=n("blockquote"),mr=n("blockquote"),fr=n("blockquote"),_r=n("p"),jc=s(`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),Oc=l(),gr=n("blockquote"),br=n("blockquote"),kr=n("blockquote"),_n=n("p"),Pc=s(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),yr=n("s"),Nc=s(`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),Ac=s(` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Ls=l(),$t=n("h2"),Yt=n("a"),vr=n("span"),y(gn.$$.fragment),Ic=l(),Tr=n("span"),Lc=s("FlaxBlenderbotModel"),Ss=l(),L=n("div"),y(bn.$$.fragment),Sc=l(),kn=n("p"),Dc=s(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ma=n("a"),Gc=s("FlaxPreTrainedModel"),Wc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uc=l(),yn=n("p"),Rc=s(`This model is also a Flax Linen
`),vn=n("a"),Hc=s("flax.nn.Module"),Vc=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Kc=l(),wr=n("p"),Jc=s("Finally, this model supports inherent JAX features such as:"),Qc=l(),Re=n("ul"),$r=n("li"),Tn=n("a"),Xc=s("Just-In-Time (JIT) compilation"),Yc=l(),xr=n("li"),wn=n("a"),Zc=s("Automatic Differentiation"),ep=l(),Br=n("li"),$n=n("a"),tp=s("Vectorization"),op=l(),Fr=n("li"),xn=n("a"),np=s("Parallelization"),ap=l(),qe=n("div"),y(Bn.$$.fragment),rp=l(),xt=n("p"),sp=s("The "),zr=n("code"),dp=s("FlaxBlenderbotPreTrainedModel"),ip=s(" forward method, overrides the "),qr=n("code"),lp=s("__call__"),cp=s(" special method."),pp=l(),y(Zt.$$.fragment),hp=l(),y(eo.$$.fragment),up=l(),to=n("div"),y(Fn.$$.fragment),mp=l(),y(oo.$$.fragment),fp=l(),no=n("div"),y(zn.$$.fragment),_p=l(),y(ao.$$.fragment),Ds=l(),Bt=n("h2"),ro=n("a"),Er=n("span"),y(qn.$$.fragment),gp=l(),Mr=n("span"),bp=s("FlaxBlenderbotForConditionalGeneration"),Gs=l(),S=n("div"),y(En.$$.fragment),kp=l(),Mn=n("p"),yp=s(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),fa=n("a"),vp=s("FlaxPreTrainedModel"),Tp=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wp=l(),Cn=n("p"),$p=s(`This model is also a Flax Linen
`),jn=n("a"),xp=s("flax.nn.Module"),Bp=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Fp=l(),Cr=n("p"),zp=s("Finally, this model supports inherent JAX features such as:"),qp=l(),He=n("ul"),jr=n("li"),On=n("a"),Ep=s("Just-In-Time (JIT) compilation"),Mp=l(),Or=n("li"),Pn=n("a"),Cp=s("Automatic Differentiation"),jp=l(),Pr=n("li"),Nn=n("a"),Op=s("Vectorization"),Pp=l(),Nr=n("li"),An=n("a"),Np=s("Parallelization"),Ap=l(),D=n("div"),y(In.$$.fragment),Ip=l(),Ft=n("p"),Lp=s("The "),Ar=n("code"),Sp=s("FlaxBlenderbotPreTrainedModel"),Dp=s(" forward method, overrides the "),Ir=n("code"),Gp=s("__call__"),Wp=s(" special method."),Up=l(),y(so.$$.fragment),Rp=l(),Lr=n("p"),Hp=s("Conversation example::"),Vp=l(),Sr=n("blockquote"),Dr=n("blockquote"),Gr=n("blockquote"),Wr=n("p"),Kp=s("from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),Jp=l(),Ur=n("blockquote"),Rr=n("blockquote"),Hr=n("blockquote"),Vr=n("p"),Qp=s(`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),Xp=l(),Kr=n("blockquote"),Jr=n("blockquote"),Qr=n("blockquote"),Xr=n("p"),Yp=s(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),Zp=l(),Yr=n("blockquote"),Zr=n("blockquote"),Ln=n("blockquote"),io=n("h1"),lo=n("a"),es=n("span"),y(Sn.$$.fragment),eh=l(),ts=n("span"),th=s("Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),oh=l(),os=n("p"),nh=s(`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),ah=l(),co=n("div"),y(Dn.$$.fragment),rh=l(),y(po.$$.fragment),sh=l(),ho=n("div"),y(Gn.$$.fragment),dh=l(),y(uo.$$.fragment),this.h()},l(o){const _=Gm('[data-svelte="svelte-1phssyn"]',document.head);p=a(_,"META",{name:!0,content:!0}),_.forEach(t),k=c(o),g=a(o,"H1",{class:!0});var Wn=r(g);u=a(Wn,"A",{id:!0,class:!0,href:!0});var ns=r(u);b=a(ns,"SPAN",{});var as=r(b);v(i.$$.fragment,as),as.forEach(t),ns.forEach(t),m=c(Wn),z=a(Wn,"SPAN",{});var rs=r(z);Me=d(rs,"Blenderbot"),rs.forEach(t),Wn.forEach(t),pe=c(o),E=a(o,"P",{});var mo=r(E);fe=a(mo,"STRONG",{});var ss=r(fe);te=d(ss,"DISCLAIMER:"),ss.forEach(t),Ce=d(mo," If you see something strange, file a "),oe=a(mo,"A",{href:!0,rel:!0});var ds=r(oe);ne=d(ds,"Github Issue"),ds.forEach(t),je=d(mo," ."),mo.forEach(t),we=c(o),G=a(o,"H2",{class:!0});var Un=r(G);N=a(Un,"A",{id:!0,class:!0,href:!0});var is=r(N);_e=a(is,"SPAN",{});var ls=r(_e);v(R.$$.fragment,ls),ls.forEach(t),is.forEach(t),M=c(Un),j=a(Un,"SPAN",{});var cs=r(j);Oe=d(cs,"Overview"),cs.forEach(t),Un.forEach(t),J=c(o),Q=a(o,"P",{});var Rn=r(Q);Pe=d(Rn,"The Blender chatbot model was proposed in "),W=a(Rn,"A",{href:!0,rel:!0});var ps=r(W);Ne=d(ps,"Recipes for building an open-domain chatbot"),ps.forEach(t),Ae=d(Rn,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Rn.forEach(t),A=c(o),he=a(o,"P",{});var hs=r(he);ae=d(hs,"The abstract of the paper is the following:"),hs.forEach(t),$e=c(o),ue=a(o,"P",{});var us=r(ue);H=a(us,"EM",{});var ms=r(H);Ie=d(ms,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),ms.forEach(t),us.forEach(t),xe=c(o),C=a(o,"P",{});var zt=r(C);Le=d(zt,"This model was contributed by "),U=a(zt,"A",{href:!0,rel:!0});var fs=r(U);Se=d(fs,"sshleifer"),fs.forEach(t),B=d(zt,". The authors\u2019 code can be found "),q=a(zt,"A",{href:!0,rel:!0});var ch=r(q);ge=d(ch,"here"),ch.forEach(t),at=d(zt," ."),zt.forEach(t),Ke=c(o),O=a(o,"H2",{class:!0});var Us=r(O);me=a(Us,"A",{id:!0,class:!0,href:!0});var ph=r(me);De=a(ph,"SPAN",{});var hh=r(De);v(be.$$.fragment,hh),hh.forEach(t),ph.forEach(t),V=c(Us),K=a(Us,"SPAN",{});var uh=r(K);rt=d(uh,"Implementation Notes"),uh.forEach(t),Us.forEach(t),Je=c(o),I=a(o,"UL",{});var _a=r(I);ke=a(_a,"LI",{});var Rs=r(ke);st=d(Rs,"Blenderbot uses a standard "),re=a(Rs,"A",{href:!0,rel:!0});var mh=r(re);dt=d(mh,"seq2seq model transformer"),mh.forEach(t),zd=d(Rs," based architecture."),Rs.forEach(t),qd=c(_a),Bo=a(_a,"LI",{});var Hs=r(Bo);Ed=d(Hs,"Available checkpoints can be found in the "),Fo=a(Hs,"A",{href:!0,rel:!0});var fh=r(Fo);Md=d(fh,"model hub"),fh.forEach(t),Cd=d(Hs,"."),Hs.forEach(t),jd=c(_a),Ge=a(_a,"LI",{});var fo=r(Ge);Od=d(fo,"This is the "),Fa=a(fo,"EM",{});var _h=r(Fa);Pd=d(_h,"default"),_h.forEach(t),Nd=d(fo,` Blenderbot model class. However, some smaller checkpoints, such as
`),za=a(fo,"CODE",{});var gh=r(za);Ad=d(gh,"facebook/blenderbot_small_90M"),gh.forEach(t),Id=d(fo,`, have a different architecture and consequently should be used with
`),Kn=a(fo,"A",{href:!0});var bh=r(Kn);Ld=d(bh,"BlenderbotSmall"),bh.forEach(t),Sd=d(fo,"."),fo.forEach(t),_a.forEach(t),bs=c(o),it=a(o,"H2",{class:!0});var Vs=r(it);qt=a(Vs,"A",{id:!0,class:!0,href:!0});var kh=r(qt);qa=a(kh,"SPAN",{});var yh=r(qa);v(zo.$$.fragment,yh),yh.forEach(t),kh.forEach(t),Dd=c(Vs),Ea=a(Vs,"SPAN",{});var vh=r(Ea);Gd=d(vh,"Usage"),vh.forEach(t),Vs.forEach(t),ks=c(o),Jn=a(o,"P",{});var Th=r(Jn);Wd=d(Th,"Here is an example of model usage:"),Th.forEach(t),ys=c(o),v(qo.$$.fragment,o),vs=c(o),lt=a(o,"H2",{class:!0});var Ks=r(lt);Et=a(Ks,"A",{id:!0,class:!0,href:!0});var wh=r(Et);Ma=a(wh,"SPAN",{});var $h=r(Ma);v(Eo.$$.fragment,$h),$h.forEach(t),wh.forEach(t),Ud=c(Ks),Ca=a(Ks,"SPAN",{});var xh=r(Ca);Rd=d(xh,"BlenderbotConfig"),xh.forEach(t),Ks.forEach(t),Ts=c(o),ye=a(o,"DIV",{class:!0});var _o=r(ye);v(Mo.$$.fragment,_o),Hd=c(_o),ct=a(_o,"P",{});var ga=r(ct);Vd=d(ga,"This is the configuration class to store the configuration of a "),Qn=a(ga,"A",{href:!0});var Bh=r(Qn);Kd=d(Bh,"BlenderbotModel"),Bh.forEach(t),Jd=d(ga,`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),Co=a(ga,"A",{href:!0,rel:!0});var Fh=r(Co);Qd=d(Fh,"facebook/blenderbot-3B"),Fh.forEach(t),Xd=d(ga," architecture."),ga.forEach(t),Yd=c(_o),pt=a(_o,"P",{});var ba=r(pt);Zd=d(ba,"Configuration objects inherit from "),Xn=a(ba,"A",{href:!0});var zh=r(Xn);ei=d(zh,"PretrainedConfig"),zh.forEach(t),ti=d(ba,` and can be used to control the model outputs. Read the
documentation from `),Yn=a(ba,"A",{href:!0});var qh=r(Yn);oi=d(qh,"PretrainedConfig"),qh.forEach(t),ni=d(ba," for more information."),ba.forEach(t),ai=c(_o),v(Mt.$$.fragment,_o),_o.forEach(t),ws=c(o),ht=a(o,"H2",{class:!0});var Js=r(ht);Ct=a(Js,"A",{id:!0,class:!0,href:!0});var Eh=r(Ct);ja=a(Eh,"SPAN",{});var Mh=r(ja);v(jo.$$.fragment,Mh),Mh.forEach(t),Eh.forEach(t),ri=c(Js),Oa=a(Js,"SPAN",{});var Ch=r(Oa);si=d(Ch,"BlenderbotTokenizer"),Ch.forEach(t),Js.forEach(t),$s=c(o),se=a(o,"DIV",{class:!0});var Ye=r(se);v(Oo.$$.fragment,Ye),di=c(Ye),Pa=a(Ye,"P",{});var jh=r(Pa);ii=d(jh,"Construct a Blenderbot tokenizer."),jh.forEach(t),li=c(Ye),jt=a(Ye,"P",{});var _s=r(jt);Na=a(_s,"CODE",{});var Oh=r(Na);ci=d(Oh,"Blenderbot"),Oh.forEach(t),pi=d(_s," is nearly identical to "),Zn=a(_s,"A",{href:!0});var Ph=r(Zn);hi=d(Ph,"RobertaTokenizer"),Ph.forEach(t),ui=d(_s,` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),_s.forEach(t),mi=c(Ye),Po=a(Ye,"P",{});var Qs=r(Po);fi=d(Qs,"Refer to superclass "),ea=a(Qs,"A",{href:!0});var Nh=r(ea);_i=d(Nh,"RobertaTokenizer"),Nh.forEach(t),gi=d(Qs," for usage examples and documentation concerning parameters."),Qs.forEach(t),bi=c(Ye),Qe=a(Ye,"DIV",{class:!0});var ka=r(Qe);v(No.$$.fragment,ka),ki=c(ka),Aa=a(ka,"P",{});var Ah=r(Aa);yi=d(Ah,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Ah.forEach(t),vi=c(ka),Ia=a(ka,"UL",{});var Ih=r(Ia);ta=a(Ih,"LI",{});var ih=r(ta);Ti=d(ih,"single sequence: "),La=a(ih,"CODE",{});var Lh=r(La);wi=d(Lh,"X </s>"),Lh.forEach(t),ih.forEach(t),Ih.forEach(t),ka.forEach(t),Ye.forEach(t),xs=c(o),ut=a(o,"H2",{class:!0});var Xs=r(ut);Ot=a(Xs,"A",{id:!0,class:!0,href:!0});var Sh=r(Ot);Sa=a(Sh,"SPAN",{});var Dh=r(Sa);v(Ao.$$.fragment,Dh),Dh.forEach(t),Sh.forEach(t),$i=c(Xs),Da=a(Xs,"SPAN",{});var Gh=r(Da);xi=d(Gh,"BlenderbotTokenizerFast"),Gh.forEach(t),Xs.forEach(t),Bs=c(o),de=a(o,"DIV",{class:!0});var Ze=r(de);v(Io.$$.fragment,Ze),Bi=c(Ze),Lo=a(Ze,"P",{});var Ys=r(Lo);Fi=d(Ys,"Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Ga=a(Ys,"EM",{});var Wh=r(Ga);zi=d(Wh,"tokenizers"),Wh.forEach(t),qi=d(Ys," library)."),Ys.forEach(t),Ei=c(Ze),Pt=a(Ze,"P",{});var gs=r(Pt);Wa=a(gs,"CODE",{});var Uh=r(Wa);Mi=d(Uh,"BlenderbotFast"),Uh.forEach(t),Ci=d(gs," is nearly identical to "),oa=a(gs,"A",{href:!0});var Rh=r(oa);ji=d(Rh,"RobertaTokenizerFast"),Rh.forEach(t),Oi=d(gs,` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),gs.forEach(t),Pi=c(Ze),So=a(Ze,"P",{});var Zs=r(So);Ni=d(Zs,"Refer to superclass "),na=a(Zs,"A",{href:!0});var Hh=r(na);Ai=d(Hh,"RobertaTokenizerFast"),Hh.forEach(t),Ii=d(Zs," for usage examples and documentation concerning parameters."),Zs.forEach(t),Li=c(Ze),Xe=a(Ze,"DIV",{class:!0});var ya=r(Xe);v(Do.$$.fragment,ya),Si=c(ya),Ua=a(ya,"P",{});var Vh=r(Ua);Di=d(Vh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Vh.forEach(t),Gi=c(ya),Ra=a(ya,"UL",{});var Kh=r(Ra);aa=a(Kh,"LI",{});var lh=r(aa);Wi=d(lh,"single sequence: "),Ha=a(lh,"CODE",{});var Jh=r(Ha);Ui=d(Jh,"X </s>"),Jh.forEach(t),lh.forEach(t),Kh.forEach(t),ya.forEach(t),Ze.forEach(t),Fs=c(o),mt=a(o,"H2",{class:!0});var ed=r(mt);Nt=a(ed,"A",{id:!0,class:!0,href:!0});var Qh=r(Nt);Va=a(Qh,"SPAN",{});var Xh=r(Va);v(Go.$$.fragment,Xh),Xh.forEach(t),Qh.forEach(t),Ri=c(ed),Ka=a(ed,"SPAN",{});var Yh=r(Ka);Hi=d(Yh,"BlenderbotModel"),Yh.forEach(t),ed.forEach(t),zs=c(o),We=a(o,"P",{});var Hn=r(We);Vi=d(Hn,"See "),Ja=a(Hn,"CODE",{});var Zh=r(Ja);Ki=d(Zh,"transformers.BartModel"),Zh.forEach(t),Ji=d(Hn," for arguments to "),Qa=a(Hn,"EM",{});var eu=r(Qa);Qi=d(eu,"forward"),eu.forEach(t),Xi=d(Hn," and "),Xa=a(Hn,"EM",{});var tu=r(Xa);Yi=d(tu,"generate"),tu.forEach(t),Hn.forEach(t),qs=c(o),ve=a(o,"DIV",{class:!0});var go=r(ve);v(Wo.$$.fragment,go),Zi=c(go),Uo=a(go,"P",{});var td=r(Uo);el=d(td,`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ra=a(td,"A",{href:!0});var ou=r(ra);tl=d(ou,"PreTrainedModel"),ou.forEach(t),ol=d(td,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),td.forEach(t),nl=c(go),Ro=a(go,"P",{});var od=r(Ro);al=d(od,"This model is also a PyTorch "),Ho=a(od,"A",{href:!0,rel:!0});var nu=r(Ho);rl=d(nu,"torch.nn.Module"),nu.forEach(t),sl=d(od,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),od.forEach(t),dl=c(go),Be=a(go,"DIV",{class:!0});var bo=r(Be);v(Vo.$$.fragment,bo),il=c(bo),ft=a(bo,"P",{});var va=r(ft);ll=d(va,"The "),sa=a(va,"A",{href:!0});var au=r(sa);cl=d(au,"BlenderbotModel"),au.forEach(t),pl=d(va," forward method, overrides the "),Ya=a(va,"CODE",{});var ru=r(Ya);hl=d(ru,"__call__"),ru.forEach(t),ul=d(va," special method."),va.forEach(t),ml=c(bo),v(At.$$.fragment,bo),fl=c(bo),v(It.$$.fragment,bo),bo.forEach(t),go.forEach(t),Es=c(o),_t=a(o,"H2",{class:!0});var nd=r(_t);Lt=a(nd,"A",{id:!0,class:!0,href:!0});var su=r(Lt);Za=a(su,"SPAN",{});var du=r(Za);v(Ko.$$.fragment,du),du.forEach(t),su.forEach(t),_l=c(nd),er=a(nd,"SPAN",{});var iu=r(er);gl=d(iu,"BlenderbotForConditionalGeneration"),iu.forEach(t),nd.forEach(t),Ms=c(o),Ue=a(o,"P",{});var Vn=r(Ue);bl=d(Vn,"See "),da=a(Vn,"A",{href:!0});var lu=r(da);kl=d(lu,"BartForConditionalGeneration"),lu.forEach(t),yl=d(Vn," for arguments to "),tr=a(Vn,"EM",{});var cu=r(tr);vl=d(cu,"forward"),cu.forEach(t),Tl=d(Vn," and "),or=a(Vn,"EM",{});var pu=r(or);wl=d(pu,"generate"),pu.forEach(t),Vn.forEach(t),Cs=c(o),Te=a(o,"DIV",{class:!0});var ko=r(Te);v(Jo.$$.fragment,ko),$l=c(ko),Qo=a(ko,"P",{});var ad=r(Qo);xl=d(ad,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),ia=a(ad,"A",{href:!0});var hu=r(ia);Bl=d(hu,"PreTrainedModel"),hu.forEach(t),Fl=d(ad,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ad.forEach(t),zl=c(ko),Xo=a(ko,"P",{});var rd=r(Xo);ql=d(rd,"This model is also a PyTorch "),Yo=a(rd,"A",{href:!0,rel:!0});var uu=r(Yo);El=d(uu,"torch.nn.Module"),uu.forEach(t),Ml=d(rd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rd.forEach(t),Cl=c(ko),Fe=a(ko,"DIV",{class:!0});var yo=r(Fe);v(Zo.$$.fragment,yo),jl=c(yo),gt=a(yo,"P",{});var Ta=r(gt);Ol=d(Ta,"The "),la=a(Ta,"A",{href:!0});var mu=r(la);Pl=d(mu,"BlenderbotForConditionalGeneration"),mu.forEach(t),Nl=d(Ta," forward method, overrides the "),nr=a(Ta,"CODE",{});var fu=r(nr);Al=d(fu,"__call__"),fu.forEach(t),Il=d(Ta," special method."),Ta.forEach(t),Ll=c(yo),v(St.$$.fragment,yo),Sl=c(yo),v(Dt.$$.fragment,yo),yo.forEach(t),ko.forEach(t),js=c(o),bt=a(o,"H2",{class:!0});var sd=r(bt);Gt=a(sd,"A",{id:!0,class:!0,href:!0});var _u=r(Gt);ar=a(_u,"SPAN",{});var gu=r(ar);v(en.$$.fragment,gu),gu.forEach(t),_u.forEach(t),Dl=c(sd),rr=a(sd,"SPAN",{});var bu=r(rr);Gl=d(bu,"BlenderbotForCausalLM"),bu.forEach(t),sd.forEach(t),Os=c(o),kt=a(o,"DIV",{class:!0});var dd=r(kt);v(tn.$$.fragment,dd),Wl=c(dd),Wt=a(dd,"DIV",{class:!0});var id=r(Wt);v(on.$$.fragment,id),Ul=c(id),v(Ut.$$.fragment,id),id.forEach(t),dd.forEach(t),Ps=c(o),yt=a(o,"H2",{class:!0});var ld=r(yt);Rt=a(ld,"A",{id:!0,class:!0,href:!0});var ku=r(Rt);sr=a(ku,"SPAN",{});var yu=r(sr);v(nn.$$.fragment,yu),yu.forEach(t),ku.forEach(t),Rl=c(ld),dr=a(ld,"SPAN",{});var vu=r(dr);Hl=d(vu,"TFBlenderbotModel"),vu.forEach(t),ld.forEach(t),Ns=c(o),ie=a(o,"DIV",{class:!0});var et=r(ie);v(an.$$.fragment,et),Vl=c(et),rn=a(et,"P",{});var cd=r(rn);Kl=d(cd,`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ca=a(cd,"A",{href:!0});var Tu=r(ca);Jl=d(Tu,"TFPreTrainedModel"),Tu.forEach(t),Ql=d(cd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cd.forEach(t),Xl=c(et),sn=a(et,"P",{});var pd=r(sn);Yl=d(pd,"This model is also a "),dn=a(pd,"A",{href:!0,rel:!0});var wu=r(dn);Zl=d(wu,"tf.keras.Model"),wu.forEach(t),ec=d(pd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pd.forEach(t),tc=c(et),v(Ht.$$.fragment,et),oc=c(et),ze=a(et,"DIV",{class:!0});var vo=r(ze);v(ln.$$.fragment,vo),nc=c(vo),vt=a(vo,"P",{});var wa=r(vt);ac=d(wa,"The "),pa=a(wa,"A",{href:!0});var $u=r(pa);rc=d($u,"TFBlenderbotModel"),$u.forEach(t),sc=d(wa," forward method, overrides the "),ir=a(wa,"CODE",{});var xu=r(ir);dc=d(xu,"__call__"),xu.forEach(t),ic=d(wa," special method."),wa.forEach(t),lc=c(vo),v(Vt.$$.fragment,vo),cc=c(vo),v(Kt.$$.fragment,vo),vo.forEach(t),et.forEach(t),As=c(o),Tt=a(o,"H2",{class:!0});var hd=r(Tt);Jt=a(hd,"A",{id:!0,class:!0,href:!0});var Bu=r(Jt);lr=a(Bu,"SPAN",{});var Fu=r(lr);v(cn.$$.fragment,Fu),Fu.forEach(t),Bu.forEach(t),pc=c(hd),cr=a(hd,"SPAN",{});var zu=r(cr);hc=d(zu,"TFBlenderbotForConditionalGeneration"),zu.forEach(t),hd.forEach(t),Is=c(o),le=a(o,"DIV",{class:!0});var tt=r(le);v(pn.$$.fragment,tt),uc=c(tt),hn=a(tt,"P",{});var ud=r(hn);mc=d(ud,`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),ha=a(ud,"A",{href:!0});var qu=r(ha);fc=d(qu,"TFPreTrainedModel"),qu.forEach(t),_c=d(ud,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ud.forEach(t),gc=c(tt),un=a(tt,"P",{});var md=r(un);bc=d(md,"This model is also a "),mn=a(md,"A",{href:!0,rel:!0});var Eu=r(mn);kc=d(Eu,"tf.keras.Model"),Eu.forEach(t),yc=d(md,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),md.forEach(t),vc=c(tt),v(Qt.$$.fragment,tt),Tc=c(tt),X=a(tt,"DIV",{class:!0});var Ee=r(X);v(fn.$$.fragment,Ee),wc=c(Ee),wt=a(Ee,"P",{});var $a=r(wt);$c=d($a,"The "),ua=a($a,"A",{href:!0});var Mu=r(ua);xc=d(Mu,"TFBlenderbotForConditionalGeneration"),Mu.forEach(t),Bc=d($a," forward method, overrides the "),pr=a($a,"CODE",{});var Cu=r(pr);Fc=d(Cu,"__call__"),Cu.forEach(t),zc=d($a," special method."),$a.forEach(t),qc=c(Ee),v(Xt.$$.fragment,Ee),Ec=c(Ee),hr=a(Ee,"P",{});var ju=r(hr);Mc=d(ju,"Conversation example::"),ju.forEach(t),Cc=c(Ee),ur=a(Ee,"BLOCKQUOTE",{});var Ou=r(ur);mr=a(Ou,"BLOCKQUOTE",{});var Pu=r(mr);fr=a(Pu,"BLOCKQUOTE",{});var Nu=r(fr);_r=a(Nu,"P",{});var Au=r(_r);jc=d(Au,`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),Au.forEach(t),Nu.forEach(t),Pu.forEach(t),Ou.forEach(t),Oc=c(Ee),gr=a(Ee,"BLOCKQUOTE",{});var Iu=r(gr);br=a(Iu,"BLOCKQUOTE",{});var Lu=r(br);kr=a(Lu,"BLOCKQUOTE",{});var Su=r(kr);_n=a(Su,"P",{});var fd=r(_n);Pc=d(fd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),yr=a(fd,"S",{});var Du=r(yr);Nc=d(Du,`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),Du.forEach(t),Ac=d(fd,` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),fd.forEach(t),Su.forEach(t),Lu.forEach(t),Iu.forEach(t),Ee.forEach(t),tt.forEach(t),Ls=c(o),$t=a(o,"H2",{class:!0});var _d=r($t);Yt=a(_d,"A",{id:!0,class:!0,href:!0});var Gu=r(Yt);vr=a(Gu,"SPAN",{});var Wu=r(vr);v(gn.$$.fragment,Wu),Wu.forEach(t),Gu.forEach(t),Ic=c(_d),Tr=a(_d,"SPAN",{});var Uu=r(Tr);Lc=d(Uu,"FlaxBlenderbotModel"),Uu.forEach(t),_d.forEach(t),Ss=c(o),L=a(o,"DIV",{class:!0});var Y=r(L);v(bn.$$.fragment,Y),Sc=c(Y),kn=a(Y,"P",{});var gd=r(kn);Dc=d(gd,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ma=a(gd,"A",{href:!0});var Ru=r(ma);Gc=d(Ru,"FlaxPreTrainedModel"),Ru.forEach(t),Wc=d(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd.forEach(t),Uc=c(Y),yn=a(Y,"P",{});var bd=r(yn);Rc=d(bd,`This model is also a Flax Linen
`),vn=a(bd,"A",{href:!0,rel:!0});var Hu=r(vn);Hc=d(Hu,"flax.nn.Module"),Hu.forEach(t),Vc=d(bd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),bd.forEach(t),Kc=c(Y),wr=a(Y,"P",{});var Vu=r(wr);Jc=d(Vu,"Finally, this model supports inherent JAX features such as:"),Vu.forEach(t),Qc=c(Y),Re=a(Y,"UL",{});var To=r(Re);$r=a(To,"LI",{});var Ku=r($r);Tn=a(Ku,"A",{href:!0,rel:!0});var Ju=r(Tn);Xc=d(Ju,"Just-In-Time (JIT) compilation"),Ju.forEach(t),Ku.forEach(t),Yc=c(To),xr=a(To,"LI",{});var Qu=r(xr);wn=a(Qu,"A",{href:!0,rel:!0});var Xu=r(wn);Zc=d(Xu,"Automatic Differentiation"),Xu.forEach(t),Qu.forEach(t),ep=c(To),Br=a(To,"LI",{});var Yu=r(Br);$n=a(Yu,"A",{href:!0,rel:!0});var Zu=r($n);tp=d(Zu,"Vectorization"),Zu.forEach(t),Yu.forEach(t),op=c(To),Fr=a(To,"LI",{});var em=r(Fr);xn=a(em,"A",{href:!0,rel:!0});var tm=r(xn);np=d(tm,"Parallelization"),tm.forEach(t),em.forEach(t),To.forEach(t),ap=c(Y),qe=a(Y,"DIV",{class:!0});var wo=r(qe);v(Bn.$$.fragment,wo),rp=c(wo),xt=a(wo,"P",{});var xa=r(xt);sp=d(xa,"The "),zr=a(xa,"CODE",{});var om=r(zr);dp=d(om,"FlaxBlenderbotPreTrainedModel"),om.forEach(t),ip=d(xa," forward method, overrides the "),qr=a(xa,"CODE",{});var nm=r(qr);lp=d(nm,"__call__"),nm.forEach(t),cp=d(xa," special method."),xa.forEach(t),pp=c(wo),v(Zt.$$.fragment,wo),hp=c(wo),v(eo.$$.fragment,wo),wo.forEach(t),up=c(Y),to=a(Y,"DIV",{class:!0});var kd=r(to);v(Fn.$$.fragment,kd),mp=c(kd),v(oo.$$.fragment,kd),kd.forEach(t),fp=c(Y),no=a(Y,"DIV",{class:!0});var yd=r(no);v(zn.$$.fragment,yd),_p=c(yd),v(ao.$$.fragment,yd),yd.forEach(t),Y.forEach(t),Ds=c(o),Bt=a(o,"H2",{class:!0});var vd=r(Bt);ro=a(vd,"A",{id:!0,class:!0,href:!0});var am=r(ro);Er=a(am,"SPAN",{});var rm=r(Er);v(qn.$$.fragment,rm),rm.forEach(t),am.forEach(t),gp=c(vd),Mr=a(vd,"SPAN",{});var sm=r(Mr);bp=d(sm,"FlaxBlenderbotForConditionalGeneration"),sm.forEach(t),vd.forEach(t),Gs=c(o),S=a(o,"DIV",{class:!0});var Z=r(S);v(En.$$.fragment,Z),kp=c(Z),Mn=a(Z,"P",{});var Td=r(Mn);yp=d(Td,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),fa=a(Td,"A",{href:!0});var dm=r(fa);vp=d(dm,"FlaxPreTrainedModel"),dm.forEach(t),Tp=d(Td,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Td.forEach(t),wp=c(Z),Cn=a(Z,"P",{});var wd=r(Cn);$p=d(wd,`This model is also a Flax Linen
`),jn=a(wd,"A",{href:!0,rel:!0});var im=r(jn);xp=d(im,"flax.nn.Module"),im.forEach(t),Bp=d(wd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),wd.forEach(t),Fp=c(Z),Cr=a(Z,"P",{});var lm=r(Cr);zp=d(lm,"Finally, this model supports inherent JAX features such as:"),lm.forEach(t),qp=c(Z),He=a(Z,"UL",{});var $o=r(He);jr=a($o,"LI",{});var cm=r(jr);On=a(cm,"A",{href:!0,rel:!0});var pm=r(On);Ep=d(pm,"Just-In-Time (JIT) compilation"),pm.forEach(t),cm.forEach(t),Mp=c($o),Or=a($o,"LI",{});var hm=r(Or);Pn=a(hm,"A",{href:!0,rel:!0});var um=r(Pn);Cp=d(um,"Automatic Differentiation"),um.forEach(t),hm.forEach(t),jp=c($o),Pr=a($o,"LI",{});var mm=r(Pr);Nn=a(mm,"A",{href:!0,rel:!0});var fm=r(Nn);Op=d(fm,"Vectorization"),fm.forEach(t),mm.forEach(t),Pp=c($o),Nr=a($o,"LI",{});var _m=r(Nr);An=a(_m,"A",{href:!0,rel:!0});var gm=r(An);Np=d(gm,"Parallelization"),gm.forEach(t),_m.forEach(t),$o.forEach(t),Ap=c(Z),D=a(Z,"DIV",{class:!0});var ee=r(D);v(In.$$.fragment,ee),Ip=c(ee),Ft=a(ee,"P",{});var Ba=r(Ft);Lp=d(Ba,"The "),Ar=a(Ba,"CODE",{});var bm=r(Ar);Sp=d(bm,"FlaxBlenderbotPreTrainedModel"),bm.forEach(t),Dp=d(Ba," forward method, overrides the "),Ir=a(Ba,"CODE",{});var km=r(Ir);Gp=d(km,"__call__"),km.forEach(t),Wp=d(Ba," special method."),Ba.forEach(t),Up=c(ee),v(so.$$.fragment,ee),Rp=c(ee),Lr=a(ee,"P",{});var ym=r(Lr);Hp=d(ym,"Conversation example::"),ym.forEach(t),Vp=c(ee),Sr=a(ee,"BLOCKQUOTE",{});var vm=r(Sr);Dr=a(vm,"BLOCKQUOTE",{});var Tm=r(Dr);Gr=a(Tm,"BLOCKQUOTE",{});var wm=r(Gr);Wr=a(wm,"P",{});var $m=r(Wr);Kp=d($m,"from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),$m.forEach(t),wm.forEach(t),Tm.forEach(t),vm.forEach(t),Jp=c(ee),Ur=a(ee,"BLOCKQUOTE",{});var xm=r(Ur);Rr=a(xm,"BLOCKQUOTE",{});var Bm=r(Rr);Hr=a(Bm,"BLOCKQUOTE",{});var Fm=r(Hr);Vr=a(Fm,"P",{});var zm=r(Vr);Qp=d(zm,`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),zm.forEach(t),Fm.forEach(t),Bm.forEach(t),xm.forEach(t),Xp=c(ee),Kr=a(ee,"BLOCKQUOTE",{});var qm=r(Kr);Jr=a(qm,"BLOCKQUOTE",{});var Em=r(Jr);Qr=a(Em,"BLOCKQUOTE",{});var Mm=r(Qr);Xr=a(Mm,"P",{});var Cm=r(Xr);Yp=d(Cm,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),Cm.forEach(t),Mm.forEach(t),Em.forEach(t),qm.forEach(t),Zp=c(ee),Yr=a(ee,"BLOCKQUOTE",{});var jm=r(Yr);Zr=a(jm,"BLOCKQUOTE",{});var Om=r(Zr);Ln=a(Om,"BLOCKQUOTE",{});var $d=r(Ln);io=a($d,"H1",{class:!0});var xd=r(io);lo=a(xd,"A",{id:!0,class:!0,href:!0});var Pm=r(lo);es=a(Pm,"SPAN",{});var Nm=r(es);v(Sn.$$.fragment,Nm),Nm.forEach(t),Pm.forEach(t),eh=c(xd),ts=a(xd,"SPAN",{});var Am=r(ts);th=d(Am,"Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),Am.forEach(t),xd.forEach(t),oh=c($d),os=a($d,"P",{});var Im=r(os);nh=d(Im,`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),Im.forEach(t),$d.forEach(t),Om.forEach(t),jm.forEach(t),ee.forEach(t),ah=c(Z),co=a(Z,"DIV",{class:!0});var Bd=r(co);v(Dn.$$.fragment,Bd),rh=c(Bd),v(po.$$.fragment,Bd),Bd.forEach(t),sh=c(Z),ho=a(Z,"DIV",{class:!0});var Fd=r(ho);v(Gn.$$.fragment,Fd),dh=c(Fd),v(uo.$$.fragment,Fd),Fd.forEach(t),Z.forEach(t),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(cf)),h(u,"id","blenderbot"),h(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(u,"href","#blenderbot"),h(g,"class","relative group"),h(oe,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),h(oe,"rel","nofollow"),h(N,"id","overview"),h(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(N,"href","#overview"),h(G,"class","relative group"),h(W,"href","https://arxiv.org/pdf/2004.13637.pdf"),h(W,"rel","nofollow"),h(U,"href","https://huggingface.co/sshleifer"),h(U,"rel","nofollow"),h(q,"href","https://github.com/facebookresearch/ParlAI"),h(q,"rel","nofollow"),h(me,"id","implementation-notes"),h(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(me,"href","#implementation-notes"),h(O,"class","relative group"),h(re,"href","https://arxiv.org/pdf/1706.03762.pdf"),h(re,"rel","nofollow"),h(Fo,"href","https://huggingface.co/models?search=blenderbot"),h(Fo,"rel","nofollow"),h(Kn,"href","blenderbot-small"),h(qt,"id","usage"),h(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qt,"href","#usage"),h(it,"class","relative group"),h(Et,"id","transformers.BlenderbotConfig"),h(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Et,"href","#transformers.BlenderbotConfig"),h(lt,"class","relative group"),h(Qn,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotModel"),h(Co,"href","https://huggingface.co/facebook/blenderbot-3B"),h(Co,"rel","nofollow"),h(Xn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Yn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ct,"id","transformers.BlenderbotTokenizer"),h(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ct,"href","#transformers.BlenderbotTokenizer"),h(ht,"class","relative group"),h(Zn,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),h(ea,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),h(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ot,"id","transformers.BlenderbotTokenizerFast"),h(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ot,"href","#transformers.BlenderbotTokenizerFast"),h(ut,"class","relative group"),h(oa,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizerFast"),h(na,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizerFast"),h(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Nt,"id","transformers.BlenderbotModel"),h(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Nt,"href","#transformers.BlenderbotModel"),h(mt,"class","relative group"),h(ra,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Ho,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ho,"rel","nofollow"),h(sa,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotModel"),h(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Lt,"id","transformers.BlenderbotForConditionalGeneration"),h(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Lt,"href","#transformers.BlenderbotForConditionalGeneration"),h(_t,"class","relative group"),h(da,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),h(ia,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Yo,"rel","nofollow"),h(la,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),h(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Gt,"id","transformers.BlenderbotForCausalLM"),h(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Gt,"href","#transformers.BlenderbotForCausalLM"),h(bt,"class","relative group"),h(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Rt,"id","transformers.TFBlenderbotModel"),h(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Rt,"href","#transformers.TFBlenderbotModel"),h(yt,"class","relative group"),h(ca,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(dn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(dn,"rel","nofollow"),h(pa,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.TFBlenderbotModel"),h(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Jt,"id","transformers.TFBlenderbotForConditionalGeneration"),h(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Jt,"href","#transformers.TFBlenderbotForConditionalGeneration"),h(Tt,"class","relative group"),h(ha,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(mn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(mn,"rel","nofollow"),h(ua,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.TFBlenderbotForConditionalGeneration"),h(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Yt,"id","transformers.FlaxBlenderbotModel"),h(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yt,"href","#transformers.FlaxBlenderbotModel"),h($t,"class","relative group"),h(ma,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(vn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),h(vn,"rel","nofollow"),h(Tn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(Tn,"rel","nofollow"),h(wn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(wn,"rel","nofollow"),h($n,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h($n,"rel","nofollow"),h(xn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(xn,"rel","nofollow"),h(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ro,"id","transformers.FlaxBlenderbotForConditionalGeneration"),h(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ro,"href","#transformers.FlaxBlenderbotForConditionalGeneration"),h(Bt,"class","relative group"),h(fa,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(jn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),h(jn,"rel","nofollow"),h(On,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(On,"rel","nofollow"),h(Pn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(Pn,"rel","nofollow"),h(Nn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(Nn,"rel","nofollow"),h(An,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(An,"rel","nofollow"),h(lo,"id","generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),h(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(lo,"href","#generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),h(io,"class","relative group"),h(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,p),f(o,k,_),f(o,g,_),e(g,u),e(u,b),T(i,b,null),e(g,m),e(g,z),e(z,Me),f(o,pe,_),f(o,E,_),e(E,fe),e(fe,te),e(E,Ce),e(E,oe),e(oe,ne),e(E,je),f(o,we,_),f(o,G,_),e(G,N),e(N,_e),T(R,_e,null),e(G,M),e(G,j),e(j,Oe),f(o,J,_),f(o,Q,_),e(Q,Pe),e(Q,W),e(W,Ne),e(Q,Ae),f(o,A,_),f(o,he,_),e(he,ae),f(o,$e,_),f(o,ue,_),e(ue,H),e(H,Ie),f(o,xe,_),f(o,C,_),e(C,Le),e(C,U),e(U,Se),e(C,B),e(C,q),e(q,ge),e(C,at),f(o,Ke,_),f(o,O,_),e(O,me),e(me,De),T(be,De,null),e(O,V),e(O,K),e(K,rt),f(o,Je,_),f(o,I,_),e(I,ke),e(ke,st),e(ke,re),e(re,dt),e(ke,zd),e(I,qd),e(I,Bo),e(Bo,Ed),e(Bo,Fo),e(Fo,Md),e(Bo,Cd),e(I,jd),e(I,Ge),e(Ge,Od),e(Ge,Fa),e(Fa,Pd),e(Ge,Nd),e(Ge,za),e(za,Ad),e(Ge,Id),e(Ge,Kn),e(Kn,Ld),e(Ge,Sd),f(o,bs,_),f(o,it,_),e(it,qt),e(qt,qa),T(zo,qa,null),e(it,Dd),e(it,Ea),e(Ea,Gd),f(o,ks,_),f(o,Jn,_),e(Jn,Wd),f(o,ys,_),T(qo,o,_),f(o,vs,_),f(o,lt,_),e(lt,Et),e(Et,Ma),T(Eo,Ma,null),e(lt,Ud),e(lt,Ca),e(Ca,Rd),f(o,Ts,_),f(o,ye,_),T(Mo,ye,null),e(ye,Hd),e(ye,ct),e(ct,Vd),e(ct,Qn),e(Qn,Kd),e(ct,Jd),e(ct,Co),e(Co,Qd),e(ct,Xd),e(ye,Yd),e(ye,pt),e(pt,Zd),e(pt,Xn),e(Xn,ei),e(pt,ti),e(pt,Yn),e(Yn,oi),e(pt,ni),e(ye,ai),T(Mt,ye,null),f(o,ws,_),f(o,ht,_),e(ht,Ct),e(Ct,ja),T(jo,ja,null),e(ht,ri),e(ht,Oa),e(Oa,si),f(o,$s,_),f(o,se,_),T(Oo,se,null),e(se,di),e(se,Pa),e(Pa,ii),e(se,li),e(se,jt),e(jt,Na),e(Na,ci),e(jt,pi),e(jt,Zn),e(Zn,hi),e(jt,ui),e(se,mi),e(se,Po),e(Po,fi),e(Po,ea),e(ea,_i),e(Po,gi),e(se,bi),e(se,Qe),T(No,Qe,null),e(Qe,ki),e(Qe,Aa),e(Aa,yi),e(Qe,vi),e(Qe,Ia),e(Ia,ta),e(ta,Ti),e(ta,La),e(La,wi),f(o,xs,_),f(o,ut,_),e(ut,Ot),e(Ot,Sa),T(Ao,Sa,null),e(ut,$i),e(ut,Da),e(Da,xi),f(o,Bs,_),f(o,de,_),T(Io,de,null),e(de,Bi),e(de,Lo),e(Lo,Fi),e(Lo,Ga),e(Ga,zi),e(Lo,qi),e(de,Ei),e(de,Pt),e(Pt,Wa),e(Wa,Mi),e(Pt,Ci),e(Pt,oa),e(oa,ji),e(Pt,Oi),e(de,Pi),e(de,So),e(So,Ni),e(So,na),e(na,Ai),e(So,Ii),e(de,Li),e(de,Xe),T(Do,Xe,null),e(Xe,Si),e(Xe,Ua),e(Ua,Di),e(Xe,Gi),e(Xe,Ra),e(Ra,aa),e(aa,Wi),e(aa,Ha),e(Ha,Ui),f(o,Fs,_),f(o,mt,_),e(mt,Nt),e(Nt,Va),T(Go,Va,null),e(mt,Ri),e(mt,Ka),e(Ka,Hi),f(o,zs,_),f(o,We,_),e(We,Vi),e(We,Ja),e(Ja,Ki),e(We,Ji),e(We,Qa),e(Qa,Qi),e(We,Xi),e(We,Xa),e(Xa,Yi),f(o,qs,_),f(o,ve,_),T(Wo,ve,null),e(ve,Zi),e(ve,Uo),e(Uo,el),e(Uo,ra),e(ra,tl),e(Uo,ol),e(ve,nl),e(ve,Ro),e(Ro,al),e(Ro,Ho),e(Ho,rl),e(Ro,sl),e(ve,dl),e(ve,Be),T(Vo,Be,null),e(Be,il),e(Be,ft),e(ft,ll),e(ft,sa),e(sa,cl),e(ft,pl),e(ft,Ya),e(Ya,hl),e(ft,ul),e(Be,ml),T(At,Be,null),e(Be,fl),T(It,Be,null),f(o,Es,_),f(o,_t,_),e(_t,Lt),e(Lt,Za),T(Ko,Za,null),e(_t,_l),e(_t,er),e(er,gl),f(o,Ms,_),f(o,Ue,_),e(Ue,bl),e(Ue,da),e(da,kl),e(Ue,yl),e(Ue,tr),e(tr,vl),e(Ue,Tl),e(Ue,or),e(or,wl),f(o,Cs,_),f(o,Te,_),T(Jo,Te,null),e(Te,$l),e(Te,Qo),e(Qo,xl),e(Qo,ia),e(ia,Bl),e(Qo,Fl),e(Te,zl),e(Te,Xo),e(Xo,ql),e(Xo,Yo),e(Yo,El),e(Xo,Ml),e(Te,Cl),e(Te,Fe),T(Zo,Fe,null),e(Fe,jl),e(Fe,gt),e(gt,Ol),e(gt,la),e(la,Pl),e(gt,Nl),e(gt,nr),e(nr,Al),e(gt,Il),e(Fe,Ll),T(St,Fe,null),e(Fe,Sl),T(Dt,Fe,null),f(o,js,_),f(o,bt,_),e(bt,Gt),e(Gt,ar),T(en,ar,null),e(bt,Dl),e(bt,rr),e(rr,Gl),f(o,Os,_),f(o,kt,_),T(tn,kt,null),e(kt,Wl),e(kt,Wt),T(on,Wt,null),e(Wt,Ul),T(Ut,Wt,null),f(o,Ps,_),f(o,yt,_),e(yt,Rt),e(Rt,sr),T(nn,sr,null),e(yt,Rl),e(yt,dr),e(dr,Hl),f(o,Ns,_),f(o,ie,_),T(an,ie,null),e(ie,Vl),e(ie,rn),e(rn,Kl),e(rn,ca),e(ca,Jl),e(rn,Ql),e(ie,Xl),e(ie,sn),e(sn,Yl),e(sn,dn),e(dn,Zl),e(sn,ec),e(ie,tc),T(Ht,ie,null),e(ie,oc),e(ie,ze),T(ln,ze,null),e(ze,nc),e(ze,vt),e(vt,ac),e(vt,pa),e(pa,rc),e(vt,sc),e(vt,ir),e(ir,dc),e(vt,ic),e(ze,lc),T(Vt,ze,null),e(ze,cc),T(Kt,ze,null),f(o,As,_),f(o,Tt,_),e(Tt,Jt),e(Jt,lr),T(cn,lr,null),e(Tt,pc),e(Tt,cr),e(cr,hc),f(o,Is,_),f(o,le,_),T(pn,le,null),e(le,uc),e(le,hn),e(hn,mc),e(hn,ha),e(ha,fc),e(hn,_c),e(le,gc),e(le,un),e(un,bc),e(un,mn),e(mn,kc),e(un,yc),e(le,vc),T(Qt,le,null),e(le,Tc),e(le,X),T(fn,X,null),e(X,wc),e(X,wt),e(wt,$c),e(wt,ua),e(ua,xc),e(wt,Bc),e(wt,pr),e(pr,Fc),e(wt,zc),e(X,qc),T(Xt,X,null),e(X,Ec),e(X,hr),e(hr,Mc),e(X,Cc),e(X,ur),e(ur,mr),e(mr,fr),e(fr,_r),e(_r,jc),e(X,Oc),e(X,gr),e(gr,br),e(br,kr),e(kr,_n),e(_n,Pc),e(_n,yr),e(yr,Nc),e(_n,Ac),f(o,Ls,_),f(o,$t,_),e($t,Yt),e(Yt,vr),T(gn,vr,null),e($t,Ic),e($t,Tr),e(Tr,Lc),f(o,Ss,_),f(o,L,_),T(bn,L,null),e(L,Sc),e(L,kn),e(kn,Dc),e(kn,ma),e(ma,Gc),e(kn,Wc),e(L,Uc),e(L,yn),e(yn,Rc),e(yn,vn),e(vn,Hc),e(yn,Vc),e(L,Kc),e(L,wr),e(wr,Jc),e(L,Qc),e(L,Re),e(Re,$r),e($r,Tn),e(Tn,Xc),e(Re,Yc),e(Re,xr),e(xr,wn),e(wn,Zc),e(Re,ep),e(Re,Br),e(Br,$n),e($n,tp),e(Re,op),e(Re,Fr),e(Fr,xn),e(xn,np),e(L,ap),e(L,qe),T(Bn,qe,null),e(qe,rp),e(qe,xt),e(xt,sp),e(xt,zr),e(zr,dp),e(xt,ip),e(xt,qr),e(qr,lp),e(xt,cp),e(qe,pp),T(Zt,qe,null),e(qe,hp),T(eo,qe,null),e(L,up),e(L,to),T(Fn,to,null),e(to,mp),T(oo,to,null),e(L,fp),e(L,no),T(zn,no,null),e(no,_p),T(ao,no,null),f(o,Ds,_),f(o,Bt,_),e(Bt,ro),e(ro,Er),T(qn,Er,null),e(Bt,gp),e(Bt,Mr),e(Mr,bp),f(o,Gs,_),f(o,S,_),T(En,S,null),e(S,kp),e(S,Mn),e(Mn,yp),e(Mn,fa),e(fa,vp),e(Mn,Tp),e(S,wp),e(S,Cn),e(Cn,$p),e(Cn,jn),e(jn,xp),e(Cn,Bp),e(S,Fp),e(S,Cr),e(Cr,zp),e(S,qp),e(S,He),e(He,jr),e(jr,On),e(On,Ep),e(He,Mp),e(He,Or),e(Or,Pn),e(Pn,Cp),e(He,jp),e(He,Pr),e(Pr,Nn),e(Nn,Op),e(He,Pp),e(He,Nr),e(Nr,An),e(An,Np),e(S,Ap),e(S,D),T(In,D,null),e(D,Ip),e(D,Ft),e(Ft,Lp),e(Ft,Ar),e(Ar,Sp),e(Ft,Dp),e(Ft,Ir),e(Ir,Gp),e(Ft,Wp),e(D,Up),T(so,D,null),e(D,Rp),e(D,Lr),e(Lr,Hp),e(D,Vp),e(D,Sr),e(Sr,Dr),e(Dr,Gr),e(Gr,Wr),e(Wr,Kp),e(D,Jp),e(D,Ur),e(Ur,Rr),e(Rr,Hr),e(Hr,Vr),e(Vr,Qp),e(D,Xp),e(D,Kr),e(Kr,Jr),e(Jr,Qr),e(Qr,Xr),e(Xr,Yp),e(D,Zp),e(D,Yr),e(Yr,Zr),e(Zr,Ln),e(Ln,io),e(io,lo),e(lo,es),T(Sn,es,null),e(io,eh),e(io,ts),e(ts,th),e(Ln,oh),e(Ln,os),e(os,nh),e(S,ah),e(S,co),T(Dn,co,null),e(co,rh),T(po,co,null),e(S,sh),e(S,ho),T(Gn,ho,null),e(ho,dh),T(uo,ho,null),Ws=!0},p(o,[_]){const Wn={};_&2&&(Wn.$$scope={dirty:_,ctx:o}),Mt.$set(Wn);const ns={};_&2&&(ns.$$scope={dirty:_,ctx:o}),At.$set(ns);const as={};_&2&&(as.$$scope={dirty:_,ctx:o}),It.$set(as);const rs={};_&2&&(rs.$$scope={dirty:_,ctx:o}),St.$set(rs);const mo={};_&2&&(mo.$$scope={dirty:_,ctx:o}),Dt.$set(mo);const ss={};_&2&&(ss.$$scope={dirty:_,ctx:o}),Ut.$set(ss);const ds={};_&2&&(ds.$$scope={dirty:_,ctx:o}),Ht.$set(ds);const Un={};_&2&&(Un.$$scope={dirty:_,ctx:o}),Vt.$set(Un);const is={};_&2&&(is.$$scope={dirty:_,ctx:o}),Kt.$set(is);const ls={};_&2&&(ls.$$scope={dirty:_,ctx:o}),Qt.$set(ls);const cs={};_&2&&(cs.$$scope={dirty:_,ctx:o}),Xt.$set(cs);const Rn={};_&2&&(Rn.$$scope={dirty:_,ctx:o}),Zt.$set(Rn);const ps={};_&2&&(ps.$$scope={dirty:_,ctx:o}),eo.$set(ps);const hs={};_&2&&(hs.$$scope={dirty:_,ctx:o}),oo.$set(hs);const us={};_&2&&(us.$$scope={dirty:_,ctx:o}),ao.$set(us);const ms={};_&2&&(ms.$$scope={dirty:_,ctx:o}),so.$set(ms);const zt={};_&2&&(zt.$$scope={dirty:_,ctx:o}),po.$set(zt);const fs={};_&2&&(fs.$$scope={dirty:_,ctx:o}),uo.$set(fs)},i(o){Ws||(w(i.$$.fragment,o),w(R.$$.fragment,o),w(be.$$.fragment,o),w(zo.$$.fragment,o),w(qo.$$.fragment,o),w(Eo.$$.fragment,o),w(Mo.$$.fragment,o),w(Mt.$$.fragment,o),w(jo.$$.fragment,o),w(Oo.$$.fragment,o),w(No.$$.fragment,o),w(Ao.$$.fragment,o),w(Io.$$.fragment,o),w(Do.$$.fragment,o),w(Go.$$.fragment,o),w(Wo.$$.fragment,o),w(Vo.$$.fragment,o),w(At.$$.fragment,o),w(It.$$.fragment,o),w(Ko.$$.fragment,o),w(Jo.$$.fragment,o),w(Zo.$$.fragment,o),w(St.$$.fragment,o),w(Dt.$$.fragment,o),w(en.$$.fragment,o),w(tn.$$.fragment,o),w(on.$$.fragment,o),w(Ut.$$.fragment,o),w(nn.$$.fragment,o),w(an.$$.fragment,o),w(Ht.$$.fragment,o),w(ln.$$.fragment,o),w(Vt.$$.fragment,o),w(Kt.$$.fragment,o),w(cn.$$.fragment,o),w(pn.$$.fragment,o),w(Qt.$$.fragment,o),w(fn.$$.fragment,o),w(Xt.$$.fragment,o),w(gn.$$.fragment,o),w(bn.$$.fragment,o),w(Bn.$$.fragment,o),w(Zt.$$.fragment,o),w(eo.$$.fragment,o),w(Fn.$$.fragment,o),w(oo.$$.fragment,o),w(zn.$$.fragment,o),w(ao.$$.fragment,o),w(qn.$$.fragment,o),w(En.$$.fragment,o),w(In.$$.fragment,o),w(so.$$.fragment,o),w(Sn.$$.fragment,o),w(Dn.$$.fragment,o),w(po.$$.fragment,o),w(Gn.$$.fragment,o),w(uo.$$.fragment,o),Ws=!0)},o(o){$(i.$$.fragment,o),$(R.$$.fragment,o),$(be.$$.fragment,o),$(zo.$$.fragment,o),$(qo.$$.fragment,o),$(Eo.$$.fragment,o),$(Mo.$$.fragment,o),$(Mt.$$.fragment,o),$(jo.$$.fragment,o),$(Oo.$$.fragment,o),$(No.$$.fragment,o),$(Ao.$$.fragment,o),$(Io.$$.fragment,o),$(Do.$$.fragment,o),$(Go.$$.fragment,o),$(Wo.$$.fragment,o),$(Vo.$$.fragment,o),$(At.$$.fragment,o),$(It.$$.fragment,o),$(Ko.$$.fragment,o),$(Jo.$$.fragment,o),$(Zo.$$.fragment,o),$(St.$$.fragment,o),$(Dt.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(Ut.$$.fragment,o),$(nn.$$.fragment,o),$(an.$$.fragment,o),$(Ht.$$.fragment,o),$(ln.$$.fragment,o),$(Vt.$$.fragment,o),$(Kt.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(Qt.$$.fragment,o),$(fn.$$.fragment,o),$(Xt.$$.fragment,o),$(gn.$$.fragment,o),$(bn.$$.fragment,o),$(Bn.$$.fragment,o),$(Zt.$$.fragment,o),$(eo.$$.fragment,o),$(Fn.$$.fragment,o),$(oo.$$.fragment,o),$(zn.$$.fragment,o),$(ao.$$.fragment,o),$(qn.$$.fragment,o),$(En.$$.fragment,o),$(In.$$.fragment,o),$(so.$$.fragment,o),$(Sn.$$.fragment,o),$(Dn.$$.fragment,o),$(po.$$.fragment,o),$(Gn.$$.fragment,o),$(uo.$$.fragment,o),Ws=!1},d(o){t(p),o&&t(k),o&&t(g),x(i),o&&t(pe),o&&t(E),o&&t(we),o&&t(G),x(R),o&&t(J),o&&t(Q),o&&t(A),o&&t(he),o&&t($e),o&&t(ue),o&&t(xe),o&&t(C),o&&t(Ke),o&&t(O),x(be),o&&t(Je),o&&t(I),o&&t(bs),o&&t(it),x(zo),o&&t(ks),o&&t(Jn),o&&t(ys),x(qo,o),o&&t(vs),o&&t(lt),x(Eo),o&&t(Ts),o&&t(ye),x(Mo),x(Mt),o&&t(ws),o&&t(ht),x(jo),o&&t($s),o&&t(se),x(Oo),x(No),o&&t(xs),o&&t(ut),x(Ao),o&&t(Bs),o&&t(de),x(Io),x(Do),o&&t(Fs),o&&t(mt),x(Go),o&&t(zs),o&&t(We),o&&t(qs),o&&t(ve),x(Wo),x(Vo),x(At),x(It),o&&t(Es),o&&t(_t),x(Ko),o&&t(Ms),o&&t(Ue),o&&t(Cs),o&&t(Te),x(Jo),x(Zo),x(St),x(Dt),o&&t(js),o&&t(bt),x(en),o&&t(Os),o&&t(kt),x(tn),x(on),x(Ut),o&&t(Ps),o&&t(yt),x(nn),o&&t(Ns),o&&t(ie),x(an),x(Ht),x(ln),x(Vt),x(Kt),o&&t(As),o&&t(Tt),x(cn),o&&t(Is),o&&t(le),x(pn),x(Qt),x(fn),x(Xt),o&&t(Ls),o&&t($t),x(gn),o&&t(Ss),o&&t(L),x(bn),x(Bn),x(Zt),x(eo),x(Fn),x(oo),x(zn),x(ao),o&&t(Ds),o&&t(Bt),x(qn),o&&t(Gs),o&&t(S),x(En),x(In),x(so),x(Sn),x(Dn),x(po),x(Gn),x(uo)}}}const cf={local:"blenderbot",sections:[{local:"overview",title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage",title:"Usage"},{local:"transformers.BlenderbotConfig",title:"BlenderbotConfig"},{local:"transformers.BlenderbotTokenizer",title:"BlenderbotTokenizer"},{local:"transformers.BlenderbotTokenizerFast",title:"BlenderbotTokenizerFast"},{local:"transformers.BlenderbotModel",title:"BlenderbotModel"},{local:"transformers.BlenderbotForConditionalGeneration",title:"BlenderbotForConditionalGeneration"},{local:"transformers.BlenderbotForCausalLM",title:"BlenderbotForCausalLM"},{local:"transformers.TFBlenderbotModel",title:"TFBlenderbotModel"},{local:"transformers.TFBlenderbotForConditionalGeneration",title:"TFBlenderbotForConditionalGeneration"},{local:"transformers.FlaxBlenderbotModel",title:"FlaxBlenderbotModel"},{local:"transformers.FlaxBlenderbotForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot"};function pf(F){return Wm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class bf extends Lm{constructor(p){super();Sm(this,p,pf,lf,Dm,{})}}export{bf as default,cf as metadata};
