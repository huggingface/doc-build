import{S as rf,i as af,s as df,e as n,k as c,w as y,t as a,M as lf,c as s,d as t,m as p,a as r,x as v,h as d,b as u,G as e,g as _,y as T,q as w,o as $,B as x,v as cf,L as et}from"../../chunks/vendor-hf-doc-builder.js";import{T as yt}from"../../chunks/Tip-hf-doc-builder.js";import{D as N}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ge}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as $e}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ze}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function pf(z){let l,k,f,m,b;return m=new Ge({props:{code:`from transformers import BlenderbotConfig, BlenderbotModel

# Initializing a Blenderbot facebook/blenderbot-3B style configuration
configuration = BlenderbotConfig()

# Initializing a model (with random weights) from the facebook/blenderbot-3B style configuration
model = BlenderbotModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotConfig, BlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Blenderbot facebook/blenderbot-3B style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BlenderbotConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the facebook/blenderbot-3B style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=n("p"),k=a("Example:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function hf(z){let l,k,f,m,b;return m=new Ge({props:{code:`from transformers import BlenderbotTokenizer
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-3B")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-3B&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[6950, 1085, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[6950, 1085, 2]`}}),{c(){l=n("p"),k=a("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function uf(z){let l,k,f,m,b;return{c(){l=n("p"),k=a("When used with "),f=n("code"),m=a("is_split_into_words=True"),b=a(", this tokenizer will add a space before each word (even the first one).")},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"When used with "),f=s(h,"CODE",{});var F=r(f);m=d(F,"is_split_into_words=True"),F.forEach(t),b=d(h,", this tokenizer will add a space before each word (even the first one)."),h.forEach(t)},m(i,h){_(i,l,h),e(l,k),e(l,f),e(f,m),e(l,b)},d(i){i&&t(l)}}}function mf(z){let l,k,f,m,b;return m=new Ge({props:{code:`from transformers import BlenderbotTokenizerFast
tokenizer = BlenderbotTokenizerFast.from_pretrained("facebook/blenderbot-3B")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BlenderbotTokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-3B&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[6950, 1085, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[6950, 1085, 2]`}}),{c(){l=n("p"),k=a("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function ff(z){let l,k,f,m,b,i,h,F;return{c(){l=n("p"),k=a("When used with "),f=n("code"),m=a("is_split_into_words=True"),b=a(", this tokenizer needs to be instantiated with "),i=n("code"),h=a("add_prefix_space=True"),F=a(".")},l(X){l=s(X,"P",{});var I=r(l);k=d(I,"When used with "),f=s(I,"CODE",{});var P=r(f);m=d(P,"is_split_into_words=True"),P.forEach(t),b=d(I,", this tokenizer needs to be instantiated with "),i=s(I,"CODE",{});var Z=r(i);h=d(Z,"add_prefix_space=True"),Z.forEach(t),F=d(I,"."),I.forEach(t)},m(X,I){_(X,l,I),e(l,k),e(l,f),e(f,m),e(l,b),e(l,i),e(i,h),e(l,F)},d(X){X&&t(l)}}}function _f(z){let l,k,f,m,b;return{c(){l=n("p"),k=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var F=r(f);m=d(F,"Module"),F.forEach(t),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(i,h){_(i,l,h),e(l,k),e(l,f),e(f,m),e(l,b)},d(i){i&&t(l)}}}function gf(z){let l,k,f,m,b;return m=new Ge({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotModel

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
[<span class="hljs-number">1</span>, <span class="hljs-number">6</span>, <span class="hljs-number">1280</span>]`}}),{c(){l=n("p"),k=a("Example:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function bf(z){let l,k,f,m,b;return{c(){l=n("p"),k=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var F=r(f);m=d(F,"Module"),F.forEach(t),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(i,h){_(i,l,h),e(l,k),e(l,f),e(f,m),e(l,b)},d(i){i&&t(l)}}}function kf(z){let l,k,f,m,b;return m=new Ge({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

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
Bot:   That&#x27;s too bad. Have you tried encouraging them to change their eating habits?</span>`}}),{c(){l=n("p"),k=a("Conversation example:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Conversation example:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function yf(z){let l,k,f,m,b;return m=new Ge({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){l=n("p"),k=a("Example:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function vf(z){let l,k,f,m,b,i,h,F,X,I,P,Z,ze,q,he,ue,tt,We,A,ee,Fe,V,ot,qe,me,Ue,te,fe,_e,nt,Ee,C,O,st,oe,xe,Me,ge,He,Be,L,Re,J,Ce,rt,ne,Q,at,S,dt,be,ke,je,D,Ke,j,se,Pe;return{c(){l=n("p"),k=a("TensorFlow models and layers in "),f=n("code"),m=a("transformers"),b=a(" accept two formats as input:"),i=c(),h=n("ul"),F=n("li"),X=a("having all inputs as keyword arguments (like PyTorch models), or"),I=c(),P=n("li"),Z=a("having all inputs as a list, tuple or dict in the first positional argument."),ze=c(),q=n("p"),he=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ue=n("code"),tt=a("model.fit()"),We=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=n("code"),ee=a("model.fit()"),Fe=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=n("code"),ot=a("fit()"),qe=a(" and "),me=n("code"),Ue=a("predict()"),te=a(`, such as when creating your own layers or models with
the Keras `),fe=n("code"),_e=a("Functional"),nt=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Ee=c(),C=n("ul"),O=n("li"),st=a("a single Tensor with "),oe=n("code"),xe=a("input_ids"),Me=a(" only and nothing else: "),ge=n("code"),He=a("model(input_ids)"),Be=c(),L=n("li"),Re=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=n("code"),Ce=a("model([input_ids, attention_mask])"),rt=a(" or "),ne=n("code"),Q=a("model([input_ids, attention_mask, token_type_ids])"),at=c(),S=n("li"),dt=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),be=n("code"),ke=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),je=c(),D=n("p"),Ke=a(`Note that when creating models and layers with
`),j=n("a"),se=a("subclassing"),Pe=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(B){l=s(B,"P",{});var E=r(l);k=d(E,"TensorFlow models and layers in "),f=s(E,"CODE",{});var it=r(f);m=d(it,"transformers"),it.forEach(t),b=d(E," accept two formats as input:"),E.forEach(t),i=p(B),h=s(B,"UL",{});var Oe=r(h);F=s(Oe,"LI",{});var ft=r(F);X=d(ft,"having all inputs as keyword arguments (like PyTorch models), or"),ft.forEach(t),I=p(Oe),P=s(Oe,"LI",{});var re=r(P);Z=d(re,"having all inputs as a list, tuple or dict in the first positional argument."),re.forEach(t),Oe.forEach(t),ze=p(B),q=s(B,"P",{});var M=r(q);he=d(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ue=s(M,"CODE",{});var vt=r(ue);tt=d(vt,"model.fit()"),vt.forEach(t),We=d(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=s(M,"CODE",{});var Ne=r(A);ee=d(Ne,"model.fit()"),Ne.forEach(t),Fe=d(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=s(M,"CODE",{});var Tt=r(V);ot=d(Tt,"fit()"),Tt.forEach(t),qe=d(M," and "),me=s(M,"CODE",{});var wt=r(me);Ue=d(wt,"predict()"),wt.forEach(t),te=d(M,`, such as when creating your own layers or models with
the Keras `),fe=s(M,"CODE",{});var $t=r(fe);_e=d($t,"Functional"),$t.forEach(t),nt=d(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),Ee=p(B),C=s(B,"UL",{});var G=r(C);O=s(G,"LI",{});var ye=r(O);st=d(ye,"a single Tensor with "),oe=s(ye,"CODE",{});var Ie=r(oe);xe=d(Ie,"input_ids"),Ie.forEach(t),Me=d(ye," only and nothing else: "),ge=s(ye,"CODE",{});var xt=r(ge);He=d(xt,"model(input_ids)"),xt.forEach(t),ye.forEach(t),Be=p(G),L=s(G,"LI",{});var ve=r(L);Re=d(ve,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s(ve,"CODE",{});var Bt=r(J);Ce=d(Bt,"model([input_ids, attention_mask])"),Bt.forEach(t),rt=d(ve," or "),ne=s(ve,"CODE",{});var Y=r(ne);Q=d(Y,"model([input_ids, attention_mask, token_type_ids])"),Y.forEach(t),ve.forEach(t),at=p(G),S=s(G,"LI",{});var lt=r(S);dt=d(lt,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),be=s(lt,"CODE",{});var ct=r(be);ke=d(ct,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ct.forEach(t),lt.forEach(t),G.forEach(t),je=p(B),D=s(B,"P",{});var Ae=r(D);Ke=d(Ae,`Note that when creating models and layers with
`),j=s(Ae,"A",{href:!0,rel:!0});var zt=r(j);se=d(zt,"subclassing"),zt.forEach(t),Pe=d(Ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Ae.forEach(t),this.h()},h(){u(j,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(j,"rel","nofollow")},m(B,E){_(B,l,E),e(l,k),e(l,f),e(f,m),e(l,b),_(B,i,E),_(B,h,E),e(h,F),e(F,X),e(h,I),e(h,P),e(P,Z),_(B,ze,E),_(B,q,E),e(q,he),e(q,ue),e(ue,tt),e(q,We),e(q,A),e(A,ee),e(q,Fe),e(q,V),e(V,ot),e(q,qe),e(q,me),e(me,Ue),e(q,te),e(q,fe),e(fe,_e),e(q,nt),_(B,Ee,E),_(B,C,E),e(C,O),e(O,st),e(O,oe),e(oe,xe),e(O,Me),e(O,ge),e(ge,He),e(C,Be),e(C,L),e(L,Re),e(L,J),e(J,Ce),e(L,rt),e(L,ne),e(ne,Q),e(C,at),e(C,S),e(S,dt),e(S,be),e(be,ke),_(B,je,E),_(B,D,E),e(D,Ke),e(D,j),e(j,se),e(D,Pe)},d(B){B&&t(l),B&&t(i),B&&t(h),B&&t(ze),B&&t(q),B&&t(Ee),B&&t(C),B&&t(je),B&&t(D)}}}function Tf(z){let l,k,f,m,b;return{c(){l=n("p"),k=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var F=r(f);m=d(F,"Module"),F.forEach(t),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(i,h){_(i,l,h),e(l,k),e(l,f),e(f,m),e(l,b)},d(i){i&&t(l)}}}function wf(z){let l,k,f,m,b;return m=new Ge({props:{code:`from transformers import BlenderbotTokenizer, TFBlenderbotModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),k=a("Example:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function $f(z){let l,k,f,m,b,i,h,F,X,I,P,Z,ze,q,he,ue,tt,We,A,ee,Fe,V,ot,qe,me,Ue,te,fe,_e,nt,Ee,C,O,st,oe,xe,Me,ge,He,Be,L,Re,J,Ce,rt,ne,Q,at,S,dt,be,ke,je,D,Ke,j,se,Pe;return{c(){l=n("p"),k=a("TensorFlow models and layers in "),f=n("code"),m=a("transformers"),b=a(" accept two formats as input:"),i=c(),h=n("ul"),F=n("li"),X=a("having all inputs as keyword arguments (like PyTorch models), or"),I=c(),P=n("li"),Z=a("having all inputs as a list, tuple or dict in the first positional argument."),ze=c(),q=n("p"),he=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ue=n("code"),tt=a("model.fit()"),We=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=n("code"),ee=a("model.fit()"),Fe=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=n("code"),ot=a("fit()"),qe=a(" and "),me=n("code"),Ue=a("predict()"),te=a(`, such as when creating your own layers or models with
the Keras `),fe=n("code"),_e=a("Functional"),nt=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Ee=c(),C=n("ul"),O=n("li"),st=a("a single Tensor with "),oe=n("code"),xe=a("input_ids"),Me=a(" only and nothing else: "),ge=n("code"),He=a("model(input_ids)"),Be=c(),L=n("li"),Re=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=n("code"),Ce=a("model([input_ids, attention_mask])"),rt=a(" or "),ne=n("code"),Q=a("model([input_ids, attention_mask, token_type_ids])"),at=c(),S=n("li"),dt=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),be=n("code"),ke=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),je=c(),D=n("p"),Ke=a(`Note that when creating models and layers with
`),j=n("a"),se=a("subclassing"),Pe=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(B){l=s(B,"P",{});var E=r(l);k=d(E,"TensorFlow models and layers in "),f=s(E,"CODE",{});var it=r(f);m=d(it,"transformers"),it.forEach(t),b=d(E," accept two formats as input:"),E.forEach(t),i=p(B),h=s(B,"UL",{});var Oe=r(h);F=s(Oe,"LI",{});var ft=r(F);X=d(ft,"having all inputs as keyword arguments (like PyTorch models), or"),ft.forEach(t),I=p(Oe),P=s(Oe,"LI",{});var re=r(P);Z=d(re,"having all inputs as a list, tuple or dict in the first positional argument."),re.forEach(t),Oe.forEach(t),ze=p(B),q=s(B,"P",{});var M=r(q);he=d(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ue=s(M,"CODE",{});var vt=r(ue);tt=d(vt,"model.fit()"),vt.forEach(t),We=d(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=s(M,"CODE",{});var Ne=r(A);ee=d(Ne,"model.fit()"),Ne.forEach(t),Fe=d(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=s(M,"CODE",{});var Tt=r(V);ot=d(Tt,"fit()"),Tt.forEach(t),qe=d(M," and "),me=s(M,"CODE",{});var wt=r(me);Ue=d(wt,"predict()"),wt.forEach(t),te=d(M,`, such as when creating your own layers or models with
the Keras `),fe=s(M,"CODE",{});var $t=r(fe);_e=d($t,"Functional"),$t.forEach(t),nt=d(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),Ee=p(B),C=s(B,"UL",{});var G=r(C);O=s(G,"LI",{});var ye=r(O);st=d(ye,"a single Tensor with "),oe=s(ye,"CODE",{});var Ie=r(oe);xe=d(Ie,"input_ids"),Ie.forEach(t),Me=d(ye," only and nothing else: "),ge=s(ye,"CODE",{});var xt=r(ge);He=d(xt,"model(input_ids)"),xt.forEach(t),ye.forEach(t),Be=p(G),L=s(G,"LI",{});var ve=r(L);Re=d(ve,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s(ve,"CODE",{});var Bt=r(J);Ce=d(Bt,"model([input_ids, attention_mask])"),Bt.forEach(t),rt=d(ve," or "),ne=s(ve,"CODE",{});var Y=r(ne);Q=d(Y,"model([input_ids, attention_mask, token_type_ids])"),Y.forEach(t),ve.forEach(t),at=p(G),S=s(G,"LI",{});var lt=r(S);dt=d(lt,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),be=s(lt,"CODE",{});var ct=r(be);ke=d(ct,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ct.forEach(t),lt.forEach(t),G.forEach(t),je=p(B),D=s(B,"P",{});var Ae=r(D);Ke=d(Ae,`Note that when creating models and layers with
`),j=s(Ae,"A",{href:!0,rel:!0});var zt=r(j);se=d(zt,"subclassing"),zt.forEach(t),Pe=d(Ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Ae.forEach(t),this.h()},h(){u(j,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(j,"rel","nofollow")},m(B,E){_(B,l,E),e(l,k),e(l,f),e(f,m),e(l,b),_(B,i,E),_(B,h,E),e(h,F),e(F,X),e(h,I),e(h,P),e(P,Z),_(B,ze,E),_(B,q,E),e(q,he),e(q,ue),e(ue,tt),e(q,We),e(q,A),e(A,ee),e(q,Fe),e(q,V),e(V,ot),e(q,qe),e(q,me),e(me,Ue),e(q,te),e(q,fe),e(fe,_e),e(q,nt),_(B,Ee,E),_(B,C,E),e(C,O),e(O,st),e(O,oe),e(oe,xe),e(O,Me),e(O,ge),e(ge,He),e(C,Be),e(C,L),e(L,Re),e(L,J),e(J,Ce),e(L,rt),e(L,ne),e(ne,Q),e(C,at),e(C,S),e(S,dt),e(S,be),e(be,ke),_(B,je,E),_(B,D,E),e(D,Ke),e(D,j),e(j,se),e(D,Pe)},d(B){B&&t(l),B&&t(i),B&&t(h),B&&t(ze),B&&t(q),B&&t(Ee),B&&t(C),B&&t(je),B&&t(D)}}}function xf(z){let l,k,f,m,b;return{c(){l=n("p"),k=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var F=r(f);m=d(F,"Module"),F.forEach(t),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(i,h){_(i,l,h),e(l,k),e(l,f),e(f,m),e(l,b)},d(i){i&&t(l)}}}function Bf(z){let l,k,f,m,b;return{c(){l=n("p"),k=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var F=r(f);m=d(F,"Module"),F.forEach(t),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(i,h){_(i,l,h),e(l,k),e(l,f),e(f,m),e(l,b)},d(i){i&&t(l)}}}function zf(z){let l,k,f,m,b;return m=new Ge({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotModel

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = FlaxBlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),k=a("Example:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function Ff(z){let l,k,f,m,b;return m=new Ge({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=n("p"),k=a("Example:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function qf(z){let l,k,f,m,b;return m=new Ge({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),k=a("Example:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function Ef(z){let l,k,f,m,b;return{c(){l=n("p"),k=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var F=r(f);m=d(F,"Module"),F.forEach(t),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(i,h){_(i,l,h),e(l,k),e(l,f),e(f,m),e(l,b)},d(i){i&&t(l)}}}function Mf(z){let l,k,f,m,b;return m=new Ge({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=n("p"),k=a("Example:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function Cf(z){let l,k,f,m,b;return m=new Ge({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=n("p"),k=a("Example:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function jf(z){let l,k,f,m,b,i,h,F,X,I,P,Z,ze,q,he,ue,tt,We,A,ee,Fe,V,ot,qe,me,Ue,te,fe,_e,nt,Ee,C,O,st,oe,xe,Me,ge,He,Be,L,Re,J,Ce,rt,ne,Q,at,S,dt,be,ke,je,D,Ke,j,se,Pe,B,E,it,Oe,ft,re,M,vt,Ne,Tt,wt,$t,G,ye,Ie,xt,ve,Bt,Y,lt,ct,Ae,zt,Rs,Yd,Zd,fs,ei,ti,Sa,Ft,Jt,Ks,Ko,oi,Vs,ni,Da,_s,si,Ga,Vo,Wa,qt,Qt,Js,Jo,ri,Qs,ai,Ua,Le,Qo,di,Et,ii,gs,li,ci,Xo,pi,hi,ui,Mt,mi,bs,fi,_i,ks,gi,bi,ki,Xt,Ha,Ct,Yt,Xs,Yo,yi,Ys,vi,Ra,W,Zo,Ti,Zs,wi,$i,er,xi,Bi,Zt,zi,en,Fi,tr,qi,Ei,Mi,eo,Ci,tn,ji,ys,Pi,Oi,Ni,_t,on,Ii,or,Ai,Li,nr,vs,Si,sr,Di,Ka,jt,to,rr,nn,Gi,ar,Wi,Va,U,sn,Ui,rn,Hi,dr,Ri,Ki,Vi,ir,Ji,Qi,oo,Xi,an,Yi,lr,Zi,el,tl,no,ol,dn,nl,Ts,sl,rl,al,gt,ln,dl,cr,il,ll,pr,ws,cl,hr,pl,Ja,Pt,so,ur,cn,hl,mr,ul,Qa,pt,ml,fr,fl,_l,_r,gl,bl,gr,kl,Xa,Se,pn,yl,hn,vl,$s,Tl,wl,$l,un,xl,mn,Bl,zl,Fl,Ve,fn,ql,Ot,El,xs,Ml,Cl,br,jl,Pl,Ol,ro,Nl,ao,Ya,Nt,io,kr,_n,Il,yr,Al,Za,ht,Ll,Bs,Sl,Dl,vr,Gl,Wl,Tr,Ul,ed,De,gn,Hl,bn,Rl,zs,Kl,Vl,Jl,kn,Ql,yn,Xl,Yl,Zl,Je,vn,ec,It,tc,Fs,oc,nc,wr,sc,rc,ac,lo,dc,co,td,At,po,$r,Tn,ic,xr,lc,od,Lt,wn,cc,ho,$n,pc,uo,nd,St,mo,Br,xn,hc,zr,uc,sd,Te,Bn,mc,zn,fc,qs,_c,gc,bc,Fn,kc,qn,yc,vc,Tc,fo,wc,Qe,En,$c,Dt,xc,Es,Bc,zc,Fr,Fc,qc,Ec,_o,Mc,go,rd,Gt,bo,qr,Mn,Cc,Er,jc,ad,we,Cn,Pc,jn,Oc,Ms,Nc,Ic,Ac,Pn,Lc,On,Sc,Dc,Gc,ko,Wc,ae,Nn,Uc,Wt,Hc,Cs,Rc,Kc,Mr,Vc,Jc,Qc,yo,Xc,Cr,Yc,Zc,jr,Pr,Or,Nr,ep,tp,Ir,Ar,Lr,In,op,Sr,np,sp,dd,Ut,vo,Dr,An,rp,Gr,ap,id,H,Ln,dp,Sn,ip,js,lp,cp,pp,Dn,hp,Gn,up,mp,fp,Wr,_p,gp,ut,Ur,Wn,bp,kp,Hr,Un,yp,vp,Rr,Hn,Tp,wp,Kr,Rn,$p,xp,Xe,Kn,Bp,Ht,zp,Vr,Fp,qp,Jr,Ep,Mp,Cp,To,jp,wo,Pp,$o,Vn,Op,xo,Np,Bo,Jn,Ip,zo,ld,Rt,Fo,Qr,Qn,Ap,Xr,Lp,cd,R,Xn,Sp,Yn,Dp,Ps,Gp,Wp,Up,Zn,Hp,es,Rp,Kp,Vp,Yr,Jp,Qp,mt,Zr,ts,Xp,Yp,ea,os,Zp,eh,ta,ns,th,oh,oa,ss,nh,sh,K,rs,rh,Kt,ah,na,dh,ih,sa,lh,ch,ph,qo,hh,ra,uh,mh,aa,da,ia,la,fh,_h,ca,pa,ha,ua,gh,bh,ma,fa,_a,ga,kh,yh,ba,ka,as,Eo,Mo,ya,ds,vh,va,Th,wh,Ta,$h,xh,Co,is,Bh,jo,zh,Po,ls,Fh,Oo,pd;return i=new $e({}),V=new $e({}),B=new $e({}),Ko=new $e({}),Vo=new Ge({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

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
[<span class="hljs-string">&quot;&lt;s&gt; That&#x27;s unfortunate. Are they trying to lose weight or are they just trying to be healthier?&lt;/s&gt;&quot;</span>]`}}),Jo=new $e({}),Qo=new N({props:{name:"class transformers.BlenderbotConfig",anchor:"transformers.BlenderbotConfig",parameters:[{name:"vocab_size",val:" = 8008"},{name:"max_position_embeddings",val:" = 128"},{name:"encoder_layers",val:" = 2"},{name:"encoder_ffn_dim",val:" = 10240"},{name:"encoder_attention_heads",val:" = 32"},{name:"decoder_layers",val:" = 24"},{name:"decoder_ffn_dim",val:" = 10240"},{name:"decoder_attention_heads",val:" = 32"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 2560"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"encoder_no_repeat_ngram_size",val:" = 3"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/configuration_blenderbot.py#L36"}}),Xt=new Ze({props:{anchor:"transformers.BlenderbotConfig.example",$$slots:{default:[pf]},$$scope:{ctx:z}}}),Yo=new $e({}),Zo=new N({props:{name:"class transformers.BlenderbotTokenizer",anchor:"transformers.BlenderbotTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BlenderbotTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BlenderbotTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.BlenderbotTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BlenderbotTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BlenderbotTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BlenderbotTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BlenderbotTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BlenderbotTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BlenderbotTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BlenderbotTokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (Blenderbot tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot.py#L92"}}),Zt=new Ze({props:{anchor:"transformers.BlenderbotTokenizer.example",$$slots:{default:[hf]},$$scope:{ctx:z}}}),eo=new yt({props:{$$slots:{default:[uf]},$$scope:{ctx:z}}}),on=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot.py#L397",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),nn=new $e({}),sn=new N({props:{name:"class transformers.BlenderbotTokenizerFast",anchor:"transformers.BlenderbotTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BlenderbotTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BlenderbotTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.BlenderbotTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BlenderbotTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BlenderbotTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BlenderbotTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BlenderbotTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BlenderbotTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BlenderbotTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BlenderbotTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (Blenderbot tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.BlenderbotTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L50"}}),oo=new Ze({props:{anchor:"transformers.BlenderbotTokenizerFast.example",$$slots:{default:[mf]},$$scope:{ctx:z}}}),no=new yt({props:{$$slots:{default:[ff]},$$scope:{ctx:z}}}),ln=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L282",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),cn=new $e({}),pn=new N({props:{name:"class transformers.BlenderbotModel",anchor:"transformers.BlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1089"}}),fn=new N({props:{name:"forward",anchor:"transformers.BlenderbotModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1131",returnDescription:`
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
`}}),ro=new yt({props:{$$slots:{default:[_f]},$$scope:{ctx:z}}}),ao=new Ze({props:{anchor:"transformers.BlenderbotModel.forward.example",$$slots:{default:[gf]},$$scope:{ctx:z}}}),_n=new $e({}),gn=new N({props:{name:"class transformers.BlenderbotForConditionalGeneration",anchor:"transformers.BlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1229"}}),vn=new N({props:{name:"forward",anchor:"transformers.BlenderbotForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1290",returnDescription:`
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
`}}),lo=new yt({props:{$$slots:{default:[bf]},$$scope:{ctx:z}}}),co=new Ze({props:{anchor:"transformers.BlenderbotForConditionalGeneration.forward.example",$$slots:{default:[kf]},$$scope:{ctx:z}}}),Tn=new $e({}),wn=new N({props:{name:"class transformers.BlenderbotForCausalLM",anchor:"transformers.BlenderbotForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1426"}}),$n=new N({props:{name:"forward",anchor:"transformers.BlenderbotForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1459",returnDescription:`
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
`}}),uo=new Ze({props:{anchor:"transformers.BlenderbotForCausalLM.forward.example",$$slots:{default:[yf]},$$scope:{ctx:z}}}),xn=new $e({}),Bn=new N({props:{name:"class transformers.TFBlenderbotModel",anchor:"transformers.TFBlenderbotModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1157"}}),fo=new yt({props:{$$slots:{default:[vf]},$$scope:{ctx:z}}}),En=new N({props:{name:"call",anchor:"transformers.TFBlenderbotModel.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1185",returnDescription:`
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
`}}),_o=new yt({props:{$$slots:{default:[Tf]},$$scope:{ctx:z}}}),go=new Ze({props:{anchor:"transformers.TFBlenderbotModel.call.example",$$slots:{default:[wf]},$$scope:{ctx:z}}}),Mn=new $e({}),Cn=new N({props:{name:"class transformers.TFBlenderbotForConditionalGeneration",anchor:"transformers.TFBlenderbotForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1279"}}),ko=new yt({props:{$$slots:{default:[$f]},$$scope:{ctx:z}}}),Nn=new N({props:{name:"call",anchor:"transformers.TFBlenderbotForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1333",returnDescription:`
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
`}}),yo=new yt({props:{$$slots:{default:[xf]},$$scope:{ctx:z}}}),An=new $e({}),Ln=new N({props:{name:"class transformers.FlaxBlenderbotModel",anchor:"transformers.FlaxBlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1218"}}),Kn=new N({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),To=new yt({props:{$$slots:{default:[Bf]},$$scope:{ctx:z}}}),wo=new Ze({props:{anchor:"transformers.FlaxBlenderbotModel.__call__.example",$$slots:{default:[zf]},$$scope:{ctx:z}}}),Vn=new N({props:{name:"encode",anchor:"transformers.FlaxBlenderbotModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),xo=new Ze({props:{anchor:"transformers.FlaxBlenderbotModel.encode.example",$$slots:{default:[Ff]},$$scope:{ctx:z}}}),Jn=new N({props:{name:"decode",anchor:"transformers.FlaxBlenderbotModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),zo=new Ze({props:{anchor:"transformers.FlaxBlenderbotModel.decode.example",$$slots:{default:[qf]},$$scope:{ctx:z}}}),Qn=new $e({}),Xn=new N({props:{name:"class transformers.FlaxBlenderbotForConditionalGeneration",anchor:"transformers.FlaxBlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1305"}}),rs=new N({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),qo=new yt({props:{$$slots:{default:[Ef]},$$scope:{ctx:z}}}),ds=new $e({}),is=new N({props:{name:"encode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),jo=new Ze({props:{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.example",$$slots:{default:[Mf]},$$scope:{ctx:z}}}),ls=new N({props:{name:"decode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Oo=new Ze({props:{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.example",$$slots:{default:[Cf]},$$scope:{ctx:z}}}),{c(){l=n("meta"),k=c(),f=n("h1"),m=n("a"),b=n("span"),y(i.$$.fragment),h=c(),F=n("span"),X=a("Blenderbot"),I=c(),P=n("p"),Z=n("strong"),ze=a("DISCLAIMER:"),q=a(" If you see something strange, file a "),he=n("a"),ue=a("Github Issue"),tt=a(" ."),We=c(),A=n("h2"),ee=n("a"),Fe=n("span"),y(V.$$.fragment),ot=c(),qe=n("span"),me=a("Overview"),Ue=c(),te=n("p"),fe=a("The Blender chatbot model was proposed in "),_e=n("a"),nt=a("Recipes for building an open-domain chatbot"),Ee=a(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),C=c(),O=n("p"),st=a("The abstract of the paper is the following:"),oe=c(),xe=n("p"),Me=n("em"),ge=a(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),He=c(),Be=n("p"),L=a("Tips:"),Re=c(),J=n("ul"),Ce=n("li"),rt=a(`Blenderbot is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),ne=c(),Q=n("p"),at=a("This model was contributed by "),S=n("a"),dt=a("sshleifer"),be=a(". The authors\u2019 code can be found "),ke=n("a"),je=a("here"),D=a(" ."),Ke=c(),j=n("h2"),se=n("a"),Pe=n("span"),y(B.$$.fragment),E=c(),it=n("span"),Oe=a("Implementation Notes"),ft=c(),re=n("ul"),M=n("li"),vt=a("Blenderbot uses a standard "),Ne=n("a"),Tt=a("seq2seq model transformer"),wt=a(" based architecture."),$t=c(),G=n("li"),ye=a("Available checkpoints can be found in the "),Ie=n("a"),xt=a("model hub"),ve=a("."),Bt=c(),Y=n("li"),lt=a("This is the "),ct=n("em"),Ae=a("default"),zt=a(` Blenderbot model class. However, some smaller checkpoints, such as
`),Rs=n("code"),Yd=a("facebook/blenderbot_small_90M"),Zd=a(`, have a different architecture and consequently should be used with
`),fs=n("a"),ei=a("BlenderbotSmall"),ti=a("."),Sa=c(),Ft=n("h2"),Jt=n("a"),Ks=n("span"),y(Ko.$$.fragment),oi=c(),Vs=n("span"),ni=a("Usage"),Da=c(),_s=n("p"),si=a("Here is an example of model usage:"),Ga=c(),y(Vo.$$.fragment),Wa=c(),qt=n("h2"),Qt=n("a"),Js=n("span"),y(Jo.$$.fragment),ri=c(),Qs=n("span"),ai=a("BlenderbotConfig"),Ua=c(),Le=n("div"),y(Qo.$$.fragment),di=c(),Et=n("p"),ii=a("This is the configuration class to store the configuration of a "),gs=n("a"),li=a("BlenderbotModel"),ci=a(`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),Xo=n("a"),pi=a("facebook/blenderbot-3B"),hi=a(" architecture."),ui=c(),Mt=n("p"),mi=a("Configuration objects inherit from "),bs=n("a"),fi=a("PretrainedConfig"),_i=a(` and can be used to control the model outputs. Read the
documentation from `),ks=n("a"),gi=a("PretrainedConfig"),bi=a(" for more information."),ki=c(),y(Xt.$$.fragment),Ha=c(),Ct=n("h2"),Yt=n("a"),Xs=n("span"),y(Yo.$$.fragment),yi=c(),Ys=n("span"),vi=a("BlenderbotTokenizer"),Ra=c(),W=n("div"),y(Zo.$$.fragment),Ti=c(),Zs=n("p"),wi=a("Constructs a Blenderbot tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),$i=c(),er=n("p"),xi=a("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Bi=c(),y(Zt.$$.fragment),zi=c(),en=n("p"),Fi=a("You can get around that behavior by passing "),tr=n("code"),qi=a("add_prefix_space=True"),Ei=a(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Mi=c(),y(eo.$$.fragment),Ci=c(),tn=n("p"),ji=a("This tokenizer inherits from "),ys=n("a"),Pi=a("PreTrainedTokenizer"),Oi=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ni=c(),_t=n("div"),y(on.$$.fragment),Ii=c(),or=n("p"),Ai=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Li=c(),nr=n("ul"),vs=n("li"),Si=a("single sequence: "),sr=n("code"),Di=a("X </s>"),Ka=c(),jt=n("h2"),to=n("a"),rr=n("span"),y(nn.$$.fragment),Gi=c(),ar=n("span"),Wi=a("BlenderbotTokenizerFast"),Va=c(),U=n("div"),y(sn.$$.fragment),Ui=c(),rn=n("p"),Hi=a("Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),dr=n("em"),Ri=a("tokenizers"),Ki=a(` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),Vi=c(),ir=n("p"),Ji=a("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Qi=c(),y(oo.$$.fragment),Xi=c(),an=n("p"),Yi=a("You can get around that behavior by passing "),lr=n("code"),Zi=a("add_prefix_space=True"),el=a(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),tl=c(),y(no.$$.fragment),ol=c(),dn=n("p"),nl=a("This tokenizer inherits from "),Ts=n("a"),sl=a("PreTrainedTokenizerFast"),rl=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),al=c(),gt=n("div"),y(ln.$$.fragment),dl=c(),cr=n("p"),il=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),ll=c(),pr=n("ul"),ws=n("li"),cl=a("single sequence: "),hr=n("code"),pl=a("X </s>"),Ja=c(),Pt=n("h2"),so=n("a"),ur=n("span"),y(cn.$$.fragment),hl=c(),mr=n("span"),ul=a("BlenderbotModel"),Qa=c(),pt=n("p"),ml=a("See "),fr=n("code"),fl=a("transformers.BartModel"),_l=a(" for arguments to "),_r=n("em"),gl=a("forward"),bl=a(" and "),gr=n("em"),kl=a("generate"),Xa=c(),Se=n("div"),y(pn.$$.fragment),yl=c(),hn=n("p"),vl=a(`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$s=n("a"),Tl=a("PreTrainedModel"),wl=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$l=c(),un=n("p"),xl=a("This model is also a PyTorch "),mn=n("a"),Bl=a("torch.nn.Module"),zl=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fl=c(),Ve=n("div"),y(fn.$$.fragment),ql=c(),Ot=n("p"),El=a("The "),xs=n("a"),Ml=a("BlenderbotModel"),Cl=a(" forward method, overrides the "),br=n("code"),jl=a("__call__"),Pl=a(" special method."),Ol=c(),y(ro.$$.fragment),Nl=c(),y(ao.$$.fragment),Ya=c(),Nt=n("h2"),io=n("a"),kr=n("span"),y(_n.$$.fragment),Il=c(),yr=n("span"),Al=a("BlenderbotForConditionalGeneration"),Za=c(),ht=n("p"),Ll=a("See "),Bs=n("a"),Sl=a("BartForConditionalGeneration"),Dl=a(" for arguments to "),vr=n("em"),Gl=a("forward"),Wl=a(" and "),Tr=n("em"),Ul=a("generate"),ed=c(),De=n("div"),y(gn.$$.fragment),Hl=c(),bn=n("p"),Rl=a(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),zs=n("a"),Kl=a("PreTrainedModel"),Vl=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jl=c(),kn=n("p"),Ql=a("This model is also a PyTorch "),yn=n("a"),Xl=a("torch.nn.Module"),Yl=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zl=c(),Je=n("div"),y(vn.$$.fragment),ec=c(),It=n("p"),tc=a("The "),Fs=n("a"),oc=a("BlenderbotForConditionalGeneration"),nc=a(" forward method, overrides the "),wr=n("code"),sc=a("__call__"),rc=a(" special method."),ac=c(),y(lo.$$.fragment),dc=c(),y(co.$$.fragment),td=c(),At=n("h2"),po=n("a"),$r=n("span"),y(Tn.$$.fragment),ic=c(),xr=n("span"),lc=a("BlenderbotForCausalLM"),od=c(),Lt=n("div"),y(wn.$$.fragment),cc=c(),ho=n("div"),y($n.$$.fragment),pc=c(),y(uo.$$.fragment),nd=c(),St=n("h2"),mo=n("a"),Br=n("span"),y(xn.$$.fragment),hc=c(),zr=n("span"),uc=a("TFBlenderbotModel"),sd=c(),Te=n("div"),y(Bn.$$.fragment),mc=c(),zn=n("p"),fc=a(`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),qs=n("a"),_c=a("TFPreTrainedModel"),gc=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bc=c(),Fn=n("p"),kc=a("This model is also a "),qn=n("a"),yc=a("tf.keras.Model"),vc=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tc=c(),y(fo.$$.fragment),wc=c(),Qe=n("div"),y(En.$$.fragment),$c=c(),Dt=n("p"),xc=a("The "),Es=n("a"),Bc=a("TFBlenderbotModel"),zc=a(" forward method, overrides the "),Fr=n("code"),Fc=a("__call__"),qc=a(" special method."),Ec=c(),y(_o.$$.fragment),Mc=c(),y(go.$$.fragment),rd=c(),Gt=n("h2"),bo=n("a"),qr=n("span"),y(Mn.$$.fragment),Cc=c(),Er=n("span"),jc=a("TFBlenderbotForConditionalGeneration"),ad=c(),we=n("div"),y(Cn.$$.fragment),Pc=c(),jn=n("p"),Oc=a(`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ms=n("a"),Nc=a("TFPreTrainedModel"),Ic=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ac=c(),Pn=n("p"),Lc=a("This model is also a "),On=n("a"),Sc=a("tf.keras.Model"),Dc=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gc=c(),y(ko.$$.fragment),Wc=c(),ae=n("div"),y(Nn.$$.fragment),Uc=c(),Wt=n("p"),Hc=a("The "),Cs=n("a"),Rc=a("TFBlenderbotForConditionalGeneration"),Kc=a(" forward method, overrides the "),Mr=n("code"),Vc=a("__call__"),Jc=a(" special method."),Qc=c(),y(yo.$$.fragment),Xc=c(),Cr=n("p"),Yc=a("Conversation example::"),Zc=c(),jr=n("blockquote"),Pr=n("blockquote"),Or=n("blockquote"),Nr=n("p"),ep=a(`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),tp=c(),Ir=n("blockquote"),Ar=n("blockquote"),Lr=n("blockquote"),In=n("p"),op=a(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Sr=n("s"),np=a(`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),sp=a(` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),dd=c(),Ut=n("h2"),vo=n("a"),Dr=n("span"),y(An.$$.fragment),rp=c(),Gr=n("span"),ap=a("FlaxBlenderbotModel"),id=c(),H=n("div"),y(Ln.$$.fragment),dp=c(),Sn=n("p"),ip=a(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),js=n("a"),lp=a("FlaxPreTrainedModel"),cp=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pp=c(),Dn=n("p"),hp=a(`This model is also a Flax Linen
`),Gn=n("a"),up=a("flax.nn.Module"),mp=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),fp=c(),Wr=n("p"),_p=a("Finally, this model supports inherent JAX features such as:"),gp=c(),ut=n("ul"),Ur=n("li"),Wn=n("a"),bp=a("Just-In-Time (JIT) compilation"),kp=c(),Hr=n("li"),Un=n("a"),yp=a("Automatic Differentiation"),vp=c(),Rr=n("li"),Hn=n("a"),Tp=a("Vectorization"),wp=c(),Kr=n("li"),Rn=n("a"),$p=a("Parallelization"),xp=c(),Xe=n("div"),y(Kn.$$.fragment),Bp=c(),Ht=n("p"),zp=a("The "),Vr=n("code"),Fp=a("FlaxBlenderbotPreTrainedModel"),qp=a(" forward method, overrides the "),Jr=n("code"),Ep=a("__call__"),Mp=a(" special method."),Cp=c(),y(To.$$.fragment),jp=c(),y(wo.$$.fragment),Pp=c(),$o=n("div"),y(Vn.$$.fragment),Op=c(),y(xo.$$.fragment),Np=c(),Bo=n("div"),y(Jn.$$.fragment),Ip=c(),y(zo.$$.fragment),ld=c(),Rt=n("h2"),Fo=n("a"),Qr=n("span"),y(Qn.$$.fragment),Ap=c(),Xr=n("span"),Lp=a("FlaxBlenderbotForConditionalGeneration"),cd=c(),R=n("div"),y(Xn.$$.fragment),Sp=c(),Yn=n("p"),Dp=a(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ps=n("a"),Gp=a("FlaxPreTrainedModel"),Wp=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Up=c(),Zn=n("p"),Hp=a(`This model is also a Flax Linen
`),es=n("a"),Rp=a("flax.nn.Module"),Kp=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Vp=c(),Yr=n("p"),Jp=a("Finally, this model supports inherent JAX features such as:"),Qp=c(),mt=n("ul"),Zr=n("li"),ts=n("a"),Xp=a("Just-In-Time (JIT) compilation"),Yp=c(),ea=n("li"),os=n("a"),Zp=a("Automatic Differentiation"),eh=c(),ta=n("li"),ns=n("a"),th=a("Vectorization"),oh=c(),oa=n("li"),ss=n("a"),nh=a("Parallelization"),sh=c(),K=n("div"),y(rs.$$.fragment),rh=c(),Kt=n("p"),ah=a("The "),na=n("code"),dh=a("FlaxBlenderbotPreTrainedModel"),ih=a(" forward method, overrides the "),sa=n("code"),lh=a("__call__"),ch=a(" special method."),ph=c(),y(qo.$$.fragment),hh=c(),ra=n("p"),uh=a("Conversation example::"),mh=c(),aa=n("blockquote"),da=n("blockquote"),ia=n("blockquote"),la=n("p"),fh=a("from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),_h=c(),ca=n("blockquote"),pa=n("blockquote"),ha=n("blockquote"),ua=n("p"),gh=a(`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),bh=c(),ma=n("blockquote"),fa=n("blockquote"),_a=n("blockquote"),ga=n("p"),kh=a(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),yh=c(),ba=n("blockquote"),ka=n("blockquote"),as=n("blockquote"),Eo=n("h1"),Mo=n("a"),ya=n("span"),y(ds.$$.fragment),vh=c(),va=n("span"),Th=a("Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),wh=c(),Ta=n("p"),$h=a(`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),xh=c(),Co=n("div"),y(is.$$.fragment),Bh=c(),y(jo.$$.fragment),zh=c(),Po=n("div"),y(ls.$$.fragment),Fh=c(),y(Oo.$$.fragment),this.h()},l(o){const g=lf('[data-svelte="svelte-1phssyn"]',document.head);l=s(g,"META",{name:!0,content:!0}),g.forEach(t),k=p(o),f=s(o,"H1",{class:!0});var cs=r(f);m=s(cs,"A",{id:!0,class:!0,href:!0});var wa=r(m);b=s(wa,"SPAN",{});var $a=r(b);v(i.$$.fragment,$a),$a.forEach(t),wa.forEach(t),h=p(cs),F=s(cs,"SPAN",{});var xa=r(F);X=d(xa,"Blenderbot"),xa.forEach(t),cs.forEach(t),I=p(o),P=s(o,"P",{});var No=r(P);Z=s(No,"STRONG",{});var Ba=r(Z);ze=d(Ba,"DISCLAIMER:"),Ba.forEach(t),q=d(No," If you see something strange, file a "),he=s(No,"A",{href:!0,rel:!0});var za=r(he);ue=d(za,"Github Issue"),za.forEach(t),tt=d(No," ."),No.forEach(t),We=p(o),A=s(o,"H2",{class:!0});var ps=r(A);ee=s(ps,"A",{id:!0,class:!0,href:!0});var Fa=r(ee);Fe=s(Fa,"SPAN",{});var qa=r(Fe);v(V.$$.fragment,qa),qa.forEach(t),Fa.forEach(t),ot=p(ps),qe=s(ps,"SPAN",{});var Ea=r(qe);me=d(Ea,"Overview"),Ea.forEach(t),ps.forEach(t),Ue=p(o),te=s(o,"P",{});var hs=r(te);fe=d(hs,"The Blender chatbot model was proposed in "),_e=s(hs,"A",{href:!0,rel:!0});var Ma=r(_e);nt=d(Ma,"Recipes for building an open-domain chatbot"),Ma.forEach(t),Ee=d(hs,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),hs.forEach(t),C=p(o),O=s(o,"P",{});var Ca=r(O);st=d(Ca,"The abstract of the paper is the following:"),Ca.forEach(t),oe=p(o),xe=s(o,"P",{});var ja=r(xe);Me=s(ja,"EM",{});var Pa=r(Me);ge=d(Pa,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Pa.forEach(t),ja.forEach(t),He=p(o),Be=s(o,"P",{});var Oa=r(Be);L=d(Oa,"Tips:"),Oa.forEach(t),Re=p(o),J=s(o,"UL",{});var Na=r(J);Ce=s(Na,"LI",{});var Ia=r(Ce);rt=d(Ia,`Blenderbot is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Ia.forEach(t),Na.forEach(t),ne=p(o),Q=s(o,"P",{});var Vt=r(Q);at=d(Vt,"This model was contributed by "),S=s(Vt,"A",{href:!0,rel:!0});var Aa=r(S);dt=d(Aa,"sshleifer"),Aa.forEach(t),be=d(Vt,". The authors\u2019 code can be found "),ke=s(Vt,"A",{href:!0,rel:!0});var La=r(ke);je=d(La,"here"),La.forEach(t),D=d(Vt," ."),Vt.forEach(t),Ke=p(o),j=s(o,"H2",{class:!0});var hd=r(j);se=s(hd,"A",{id:!0,class:!0,href:!0});var Mh=r(se);Pe=s(Mh,"SPAN",{});var Ch=r(Pe);v(B.$$.fragment,Ch),Ch.forEach(t),Mh.forEach(t),E=p(hd),it=s(hd,"SPAN",{});var jh=r(it);Oe=d(jh,"Implementation Notes"),jh.forEach(t),hd.forEach(t),ft=p(o),re=s(o,"UL",{});var Os=r(re);M=s(Os,"LI",{});var ud=r(M);vt=d(ud,"Blenderbot uses a standard "),Ne=s(ud,"A",{href:!0,rel:!0});var Ph=r(Ne);Tt=d(Ph,"seq2seq model transformer"),Ph.forEach(t),wt=d(ud," based architecture."),ud.forEach(t),$t=p(Os),G=s(Os,"LI",{});var md=r(G);ye=d(md,"Available checkpoints can be found in the "),Ie=s(md,"A",{href:!0,rel:!0});var Oh=r(Ie);xt=d(Oh,"model hub"),Oh.forEach(t),ve=d(md,"."),md.forEach(t),Bt=p(Os),Y=s(Os,"LI",{});var Io=r(Y);lt=d(Io,"This is the "),ct=s(Io,"EM",{});var Nh=r(ct);Ae=d(Nh,"default"),Nh.forEach(t),zt=d(Io,` Blenderbot model class. However, some smaller checkpoints, such as
`),Rs=s(Io,"CODE",{});var Ih=r(Rs);Yd=d(Ih,"facebook/blenderbot_small_90M"),Ih.forEach(t),Zd=d(Io,`, have a different architecture and consequently should be used with
`),fs=s(Io,"A",{href:!0});var Ah=r(fs);ei=d(Ah,"BlenderbotSmall"),Ah.forEach(t),ti=d(Io,"."),Io.forEach(t),Os.forEach(t),Sa=p(o),Ft=s(o,"H2",{class:!0});var fd=r(Ft);Jt=s(fd,"A",{id:!0,class:!0,href:!0});var Lh=r(Jt);Ks=s(Lh,"SPAN",{});var Sh=r(Ks);v(Ko.$$.fragment,Sh),Sh.forEach(t),Lh.forEach(t),oi=p(fd),Vs=s(fd,"SPAN",{});var Dh=r(Vs);ni=d(Dh,"Usage"),Dh.forEach(t),fd.forEach(t),Da=p(o),_s=s(o,"P",{});var Gh=r(_s);si=d(Gh,"Here is an example of model usage:"),Gh.forEach(t),Ga=p(o),v(Vo.$$.fragment,o),Wa=p(o),qt=s(o,"H2",{class:!0});var _d=r(qt);Qt=s(_d,"A",{id:!0,class:!0,href:!0});var Wh=r(Qt);Js=s(Wh,"SPAN",{});var Uh=r(Js);v(Jo.$$.fragment,Uh),Uh.forEach(t),Wh.forEach(t),ri=p(_d),Qs=s(_d,"SPAN",{});var Hh=r(Qs);ai=d(Hh,"BlenderbotConfig"),Hh.forEach(t),_d.forEach(t),Ua=p(o),Le=s(o,"DIV",{class:!0});var Ao=r(Le);v(Qo.$$.fragment,Ao),di=p(Ao),Et=s(Ao,"P",{});var Ns=r(Et);ii=d(Ns,"This is the configuration class to store the configuration of a "),gs=s(Ns,"A",{href:!0});var Rh=r(gs);li=d(Rh,"BlenderbotModel"),Rh.forEach(t),ci=d(Ns,`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),Xo=s(Ns,"A",{href:!0,rel:!0});var Kh=r(Xo);pi=d(Kh,"facebook/blenderbot-3B"),Kh.forEach(t),hi=d(Ns," architecture."),Ns.forEach(t),ui=p(Ao),Mt=s(Ao,"P",{});var Is=r(Mt);mi=d(Is,"Configuration objects inherit from "),bs=s(Is,"A",{href:!0});var Vh=r(bs);fi=d(Vh,"PretrainedConfig"),Vh.forEach(t),_i=d(Is,` and can be used to control the model outputs. Read the
documentation from `),ks=s(Is,"A",{href:!0});var Jh=r(ks);gi=d(Jh,"PretrainedConfig"),Jh.forEach(t),bi=d(Is," for more information."),Is.forEach(t),ki=p(Ao),v(Xt.$$.fragment,Ao),Ao.forEach(t),Ha=p(o),Ct=s(o,"H2",{class:!0});var gd=r(Ct);Yt=s(gd,"A",{id:!0,class:!0,href:!0});var Qh=r(Yt);Xs=s(Qh,"SPAN",{});var Xh=r(Xs);v(Yo.$$.fragment,Xh),Xh.forEach(t),Qh.forEach(t),yi=p(gd),Ys=s(gd,"SPAN",{});var Yh=r(Ys);vi=d(Yh,"BlenderbotTokenizer"),Yh.forEach(t),gd.forEach(t),Ra=p(o),W=s(o,"DIV",{class:!0});var de=r(W);v(Zo.$$.fragment,de),Ti=p(de),Zs=s(de,"P",{});var Zh=r(Zs);wi=d(Zh,"Constructs a Blenderbot tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),Zh.forEach(t),$i=p(de),er=s(de,"P",{});var eu=r(er);xi=d(eu,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),eu.forEach(t),Bi=p(de),v(Zt.$$.fragment,de),zi=p(de),en=s(de,"P",{});var bd=r(en);Fi=d(bd,"You can get around that behavior by passing "),tr=s(bd,"CODE",{});var tu=r(tr);qi=d(tu,"add_prefix_space=True"),tu.forEach(t),Ei=d(bd,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),bd.forEach(t),Mi=p(de),v(eo.$$.fragment,de),Ci=p(de),tn=s(de,"P",{});var kd=r(tn);ji=d(kd,"This tokenizer inherits from "),ys=s(kd,"A",{href:!0});var ou=r(ys);Pi=d(ou,"PreTrainedTokenizer"),ou.forEach(t),Oi=d(kd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),kd.forEach(t),Ni=p(de),_t=s(de,"DIV",{class:!0});var As=r(_t);v(on.$$.fragment,As),Ii=p(As),or=s(As,"P",{});var nu=r(or);Ai=d(nu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),nu.forEach(t),Li=p(As),nr=s(As,"UL",{});var su=r(nr);vs=s(su,"LI",{});var qh=r(vs);Si=d(qh,"single sequence: "),sr=s(qh,"CODE",{});var ru=r(sr);Di=d(ru,"X </s>"),ru.forEach(t),qh.forEach(t),su.forEach(t),As.forEach(t),de.forEach(t),Ka=p(o),jt=s(o,"H2",{class:!0});var yd=r(jt);to=s(yd,"A",{id:!0,class:!0,href:!0});var au=r(to);rr=s(au,"SPAN",{});var du=r(rr);v(nn.$$.fragment,du),du.forEach(t),au.forEach(t),Gi=p(yd),ar=s(yd,"SPAN",{});var iu=r(ar);Wi=d(iu,"BlenderbotTokenizerFast"),iu.forEach(t),yd.forEach(t),Va=p(o),U=s(o,"DIV",{class:!0});var ie=r(U);v(sn.$$.fragment,ie),Ui=p(ie),rn=s(ie,"P",{});var vd=r(rn);Hi=d(vd,"Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),dr=s(vd,"EM",{});var lu=r(dr);Ri=d(lu,"tokenizers"),lu.forEach(t),Ki=d(vd,` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),vd.forEach(t),Vi=p(ie),ir=s(ie,"P",{});var cu=r(ir);Ji=d(cu,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),cu.forEach(t),Qi=p(ie),v(oo.$$.fragment,ie),Xi=p(ie),an=s(ie,"P",{});var Td=r(an);Yi=d(Td,"You can get around that behavior by passing "),lr=s(Td,"CODE",{});var pu=r(lr);Zi=d(pu,"add_prefix_space=True"),pu.forEach(t),el=d(Td,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Td.forEach(t),tl=p(ie),v(no.$$.fragment,ie),ol=p(ie),dn=s(ie,"P",{});var wd=r(dn);nl=d(wd,"This tokenizer inherits from "),Ts=s(wd,"A",{href:!0});var hu=r(Ts);sl=d(hu,"PreTrainedTokenizerFast"),hu.forEach(t),rl=d(wd,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),wd.forEach(t),al=p(ie),gt=s(ie,"DIV",{class:!0});var Ls=r(gt);v(ln.$$.fragment,Ls),dl=p(Ls),cr=s(Ls,"P",{});var uu=r(cr);il=d(uu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),uu.forEach(t),ll=p(Ls),pr=s(Ls,"UL",{});var mu=r(pr);ws=s(mu,"LI",{});var Eh=r(ws);cl=d(Eh,"single sequence: "),hr=s(Eh,"CODE",{});var fu=r(hr);pl=d(fu,"X </s>"),fu.forEach(t),Eh.forEach(t),mu.forEach(t),Ls.forEach(t),ie.forEach(t),Ja=p(o),Pt=s(o,"H2",{class:!0});var $d=r(Pt);so=s($d,"A",{id:!0,class:!0,href:!0});var _u=r(so);ur=s(_u,"SPAN",{});var gu=r(ur);v(cn.$$.fragment,gu),gu.forEach(t),_u.forEach(t),hl=p($d),mr=s($d,"SPAN",{});var bu=r(mr);ul=d(bu,"BlenderbotModel"),bu.forEach(t),$d.forEach(t),Qa=p(o),pt=s(o,"P",{});var us=r(pt);ml=d(us,"See "),fr=s(us,"CODE",{});var ku=r(fr);fl=d(ku,"transformers.BartModel"),ku.forEach(t),_l=d(us," for arguments to "),_r=s(us,"EM",{});var yu=r(_r);gl=d(yu,"forward"),yu.forEach(t),bl=d(us," and "),gr=s(us,"EM",{});var vu=r(gr);kl=d(vu,"generate"),vu.forEach(t),us.forEach(t),Xa=p(o),Se=s(o,"DIV",{class:!0});var Lo=r(Se);v(pn.$$.fragment,Lo),yl=p(Lo),hn=s(Lo,"P",{});var xd=r(hn);vl=d(xd,`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$s=s(xd,"A",{href:!0});var Tu=r($s);Tl=d(Tu,"PreTrainedModel"),Tu.forEach(t),wl=d(xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xd.forEach(t),$l=p(Lo),un=s(Lo,"P",{});var Bd=r(un);xl=d(Bd,"This model is also a PyTorch "),mn=s(Bd,"A",{href:!0,rel:!0});var wu=r(mn);Bl=d(wu,"torch.nn.Module"),wu.forEach(t),zl=d(Bd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bd.forEach(t),Fl=p(Lo),Ve=s(Lo,"DIV",{class:!0});var So=r(Ve);v(fn.$$.fragment,So),ql=p(So),Ot=s(So,"P",{});var Ss=r(Ot);El=d(Ss,"The "),xs=s(Ss,"A",{href:!0});var $u=r(xs);Ml=d($u,"BlenderbotModel"),$u.forEach(t),Cl=d(Ss," forward method, overrides the "),br=s(Ss,"CODE",{});var xu=r(br);jl=d(xu,"__call__"),xu.forEach(t),Pl=d(Ss," special method."),Ss.forEach(t),Ol=p(So),v(ro.$$.fragment,So),Nl=p(So),v(ao.$$.fragment,So),So.forEach(t),Lo.forEach(t),Ya=p(o),Nt=s(o,"H2",{class:!0});var zd=r(Nt);io=s(zd,"A",{id:!0,class:!0,href:!0});var Bu=r(io);kr=s(Bu,"SPAN",{});var zu=r(kr);v(_n.$$.fragment,zu),zu.forEach(t),Bu.forEach(t),Il=p(zd),yr=s(zd,"SPAN",{});var Fu=r(yr);Al=d(Fu,"BlenderbotForConditionalGeneration"),Fu.forEach(t),zd.forEach(t),Za=p(o),ht=s(o,"P",{});var ms=r(ht);Ll=d(ms,"See "),Bs=s(ms,"A",{href:!0});var qu=r(Bs);Sl=d(qu,"BartForConditionalGeneration"),qu.forEach(t),Dl=d(ms," for arguments to "),vr=s(ms,"EM",{});var Eu=r(vr);Gl=d(Eu,"forward"),Eu.forEach(t),Wl=d(ms," and "),Tr=s(ms,"EM",{});var Mu=r(Tr);Ul=d(Mu,"generate"),Mu.forEach(t),ms.forEach(t),ed=p(o),De=s(o,"DIV",{class:!0});var Do=r(De);v(gn.$$.fragment,Do),Hl=p(Do),bn=s(Do,"P",{});var Fd=r(bn);Rl=d(Fd,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),zs=s(Fd,"A",{href:!0});var Cu=r(zs);Kl=d(Cu,"PreTrainedModel"),Cu.forEach(t),Vl=d(Fd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fd.forEach(t),Jl=p(Do),kn=s(Do,"P",{});var qd=r(kn);Ql=d(qd,"This model is also a PyTorch "),yn=s(qd,"A",{href:!0,rel:!0});var ju=r(yn);Xl=d(ju,"torch.nn.Module"),ju.forEach(t),Yl=d(qd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qd.forEach(t),Zl=p(Do),Je=s(Do,"DIV",{class:!0});var Go=r(Je);v(vn.$$.fragment,Go),ec=p(Go),It=s(Go,"P",{});var Ds=r(It);tc=d(Ds,"The "),Fs=s(Ds,"A",{href:!0});var Pu=r(Fs);oc=d(Pu,"BlenderbotForConditionalGeneration"),Pu.forEach(t),nc=d(Ds," forward method, overrides the "),wr=s(Ds,"CODE",{});var Ou=r(wr);sc=d(Ou,"__call__"),Ou.forEach(t),rc=d(Ds," special method."),Ds.forEach(t),ac=p(Go),v(lo.$$.fragment,Go),dc=p(Go),v(co.$$.fragment,Go),Go.forEach(t),Do.forEach(t),td=p(o),At=s(o,"H2",{class:!0});var Ed=r(At);po=s(Ed,"A",{id:!0,class:!0,href:!0});var Nu=r(po);$r=s(Nu,"SPAN",{});var Iu=r($r);v(Tn.$$.fragment,Iu),Iu.forEach(t),Nu.forEach(t),ic=p(Ed),xr=s(Ed,"SPAN",{});var Au=r(xr);lc=d(Au,"BlenderbotForCausalLM"),Au.forEach(t),Ed.forEach(t),od=p(o),Lt=s(o,"DIV",{class:!0});var Md=r(Lt);v(wn.$$.fragment,Md),cc=p(Md),ho=s(Md,"DIV",{class:!0});var Cd=r(ho);v($n.$$.fragment,Cd),pc=p(Cd),v(uo.$$.fragment,Cd),Cd.forEach(t),Md.forEach(t),nd=p(o),St=s(o,"H2",{class:!0});var jd=r(St);mo=s(jd,"A",{id:!0,class:!0,href:!0});var Lu=r(mo);Br=s(Lu,"SPAN",{});var Su=r(Br);v(xn.$$.fragment,Su),Su.forEach(t),Lu.forEach(t),hc=p(jd),zr=s(jd,"SPAN",{});var Du=r(zr);uc=d(Du,"TFBlenderbotModel"),Du.forEach(t),jd.forEach(t),sd=p(o),Te=s(o,"DIV",{class:!0});var bt=r(Te);v(Bn.$$.fragment,bt),mc=p(bt),zn=s(bt,"P",{});var Pd=r(zn);fc=d(Pd,`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),qs=s(Pd,"A",{href:!0});var Gu=r(qs);_c=d(Gu,"TFPreTrainedModel"),Gu.forEach(t),gc=d(Pd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pd.forEach(t),bc=p(bt),Fn=s(bt,"P",{});var Od=r(Fn);kc=d(Od,"This model is also a "),qn=s(Od,"A",{href:!0,rel:!0});var Wu=r(qn);yc=d(Wu,"tf.keras.Model"),Wu.forEach(t),vc=d(Od,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Od.forEach(t),Tc=p(bt),v(fo.$$.fragment,bt),wc=p(bt),Qe=s(bt,"DIV",{class:!0});var Wo=r(Qe);v(En.$$.fragment,Wo),$c=p(Wo),Dt=s(Wo,"P",{});var Gs=r(Dt);xc=d(Gs,"The "),Es=s(Gs,"A",{href:!0});var Uu=r(Es);Bc=d(Uu,"TFBlenderbotModel"),Uu.forEach(t),zc=d(Gs," forward method, overrides the "),Fr=s(Gs,"CODE",{});var Hu=r(Fr);Fc=d(Hu,"__call__"),Hu.forEach(t),qc=d(Gs," special method."),Gs.forEach(t),Ec=p(Wo),v(_o.$$.fragment,Wo),Mc=p(Wo),v(go.$$.fragment,Wo),Wo.forEach(t),bt.forEach(t),rd=p(o),Gt=s(o,"H2",{class:!0});var Nd=r(Gt);bo=s(Nd,"A",{id:!0,class:!0,href:!0});var Ru=r(bo);qr=s(Ru,"SPAN",{});var Ku=r(qr);v(Mn.$$.fragment,Ku),Ku.forEach(t),Ru.forEach(t),Cc=p(Nd),Er=s(Nd,"SPAN",{});var Vu=r(Er);jc=d(Vu,"TFBlenderbotForConditionalGeneration"),Vu.forEach(t),Nd.forEach(t),ad=p(o),we=s(o,"DIV",{class:!0});var kt=r(we);v(Cn.$$.fragment,kt),Pc=p(kt),jn=s(kt,"P",{});var Id=r(jn);Oc=d(Id,`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ms=s(Id,"A",{href:!0});var Ju=r(Ms);Nc=d(Ju,"TFPreTrainedModel"),Ju.forEach(t),Ic=d(Id,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Id.forEach(t),Ac=p(kt),Pn=s(kt,"P",{});var Ad=r(Pn);Lc=d(Ad,"This model is also a "),On=s(Ad,"A",{href:!0,rel:!0});var Qu=r(On);Sc=d(Qu,"tf.keras.Model"),Qu.forEach(t),Dc=d(Ad,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ad.forEach(t),Gc=p(kt),v(ko.$$.fragment,kt),Wc=p(kt),ae=s(kt,"DIV",{class:!0});var Ye=r(ae);v(Nn.$$.fragment,Ye),Uc=p(Ye),Wt=s(Ye,"P",{});var Ws=r(Wt);Hc=d(Ws,"The "),Cs=s(Ws,"A",{href:!0});var Xu=r(Cs);Rc=d(Xu,"TFBlenderbotForConditionalGeneration"),Xu.forEach(t),Kc=d(Ws," forward method, overrides the "),Mr=s(Ws,"CODE",{});var Yu=r(Mr);Vc=d(Yu,"__call__"),Yu.forEach(t),Jc=d(Ws," special method."),Ws.forEach(t),Qc=p(Ye),v(yo.$$.fragment,Ye),Xc=p(Ye),Cr=s(Ye,"P",{});var Zu=r(Cr);Yc=d(Zu,"Conversation example::"),Zu.forEach(t),Zc=p(Ye),jr=s(Ye,"BLOCKQUOTE",{});var em=r(jr);Pr=s(em,"BLOCKQUOTE",{});var tm=r(Pr);Or=s(tm,"BLOCKQUOTE",{});var om=r(Or);Nr=s(om,"P",{});var nm=r(Nr);ep=d(nm,`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),nm.forEach(t),om.forEach(t),tm.forEach(t),em.forEach(t),tp=p(Ye),Ir=s(Ye,"BLOCKQUOTE",{});var sm=r(Ir);Ar=s(sm,"BLOCKQUOTE",{});var rm=r(Ar);Lr=s(rm,"BLOCKQUOTE",{});var am=r(Lr);In=s(am,"P",{});var Ld=r(In);op=d(Ld,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Sr=s(Ld,"S",{});var dm=r(Sr);np=d(dm,`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),dm.forEach(t),sp=d(Ld,` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Ld.forEach(t),am.forEach(t),rm.forEach(t),sm.forEach(t),Ye.forEach(t),kt.forEach(t),dd=p(o),Ut=s(o,"H2",{class:!0});var Sd=r(Ut);vo=s(Sd,"A",{id:!0,class:!0,href:!0});var im=r(vo);Dr=s(im,"SPAN",{});var lm=r(Dr);v(An.$$.fragment,lm),lm.forEach(t),im.forEach(t),rp=p(Sd),Gr=s(Sd,"SPAN",{});var cm=r(Gr);ap=d(cm,"FlaxBlenderbotModel"),cm.forEach(t),Sd.forEach(t),id=p(o),H=s(o,"DIV",{class:!0});var le=r(H);v(Ln.$$.fragment,le),dp=p(le),Sn=s(le,"P",{});var Dd=r(Sn);ip=d(Dd,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),js=s(Dd,"A",{href:!0});var pm=r(js);lp=d(pm,"FlaxPreTrainedModel"),pm.forEach(t),cp=d(Dd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dd.forEach(t),pp=p(le),Dn=s(le,"P",{});var Gd=r(Dn);hp=d(Gd,`This model is also a Flax Linen
`),Gn=s(Gd,"A",{href:!0,rel:!0});var hm=r(Gn);up=d(hm,"flax.nn.Module"),hm.forEach(t),mp=d(Gd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Gd.forEach(t),fp=p(le),Wr=s(le,"P",{});var um=r(Wr);_p=d(um,"Finally, this model supports inherent JAX features such as:"),um.forEach(t),gp=p(le),ut=s(le,"UL",{});var Uo=r(ut);Ur=s(Uo,"LI",{});var mm=r(Ur);Wn=s(mm,"A",{href:!0,rel:!0});var fm=r(Wn);bp=d(fm,"Just-In-Time (JIT) compilation"),fm.forEach(t),mm.forEach(t),kp=p(Uo),Hr=s(Uo,"LI",{});var _m=r(Hr);Un=s(_m,"A",{href:!0,rel:!0});var gm=r(Un);yp=d(gm,"Automatic Differentiation"),gm.forEach(t),_m.forEach(t),vp=p(Uo),Rr=s(Uo,"LI",{});var bm=r(Rr);Hn=s(bm,"A",{href:!0,rel:!0});var km=r(Hn);Tp=d(km,"Vectorization"),km.forEach(t),bm.forEach(t),wp=p(Uo),Kr=s(Uo,"LI",{});var ym=r(Kr);Rn=s(ym,"A",{href:!0,rel:!0});var vm=r(Rn);$p=d(vm,"Parallelization"),vm.forEach(t),ym.forEach(t),Uo.forEach(t),xp=p(le),Xe=s(le,"DIV",{class:!0});var Ho=r(Xe);v(Kn.$$.fragment,Ho),Bp=p(Ho),Ht=s(Ho,"P",{});var Us=r(Ht);zp=d(Us,"The "),Vr=s(Us,"CODE",{});var Tm=r(Vr);Fp=d(Tm,"FlaxBlenderbotPreTrainedModel"),Tm.forEach(t),qp=d(Us," forward method, overrides the "),Jr=s(Us,"CODE",{});var wm=r(Jr);Ep=d(wm,"__call__"),wm.forEach(t),Mp=d(Us," special method."),Us.forEach(t),Cp=p(Ho),v(To.$$.fragment,Ho),jp=p(Ho),v(wo.$$.fragment,Ho),Ho.forEach(t),Pp=p(le),$o=s(le,"DIV",{class:!0});var Wd=r($o);v(Vn.$$.fragment,Wd),Op=p(Wd),v(xo.$$.fragment,Wd),Wd.forEach(t),Np=p(le),Bo=s(le,"DIV",{class:!0});var Ud=r(Bo);v(Jn.$$.fragment,Ud),Ip=p(Ud),v(zo.$$.fragment,Ud),Ud.forEach(t),le.forEach(t),ld=p(o),Rt=s(o,"H2",{class:!0});var Hd=r(Rt);Fo=s(Hd,"A",{id:!0,class:!0,href:!0});var $m=r(Fo);Qr=s($m,"SPAN",{});var xm=r(Qr);v(Qn.$$.fragment,xm),xm.forEach(t),$m.forEach(t),Ap=p(Hd),Xr=s(Hd,"SPAN",{});var Bm=r(Xr);Lp=d(Bm,"FlaxBlenderbotForConditionalGeneration"),Bm.forEach(t),Hd.forEach(t),cd=p(o),R=s(o,"DIV",{class:!0});var ce=r(R);v(Xn.$$.fragment,ce),Sp=p(ce),Yn=s(ce,"P",{});var Rd=r(Yn);Dp=d(Rd,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ps=s(Rd,"A",{href:!0});var zm=r(Ps);Gp=d(zm,"FlaxPreTrainedModel"),zm.forEach(t),Wp=d(Rd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rd.forEach(t),Up=p(ce),Zn=s(ce,"P",{});var Kd=r(Zn);Hp=d(Kd,`This model is also a Flax Linen
`),es=s(Kd,"A",{href:!0,rel:!0});var Fm=r(es);Rp=d(Fm,"flax.nn.Module"),Fm.forEach(t),Kp=d(Kd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Kd.forEach(t),Vp=p(ce),Yr=s(ce,"P",{});var qm=r(Yr);Jp=d(qm,"Finally, this model supports inherent JAX features such as:"),qm.forEach(t),Qp=p(ce),mt=s(ce,"UL",{});var Ro=r(mt);Zr=s(Ro,"LI",{});var Em=r(Zr);ts=s(Em,"A",{href:!0,rel:!0});var Mm=r(ts);Xp=d(Mm,"Just-In-Time (JIT) compilation"),Mm.forEach(t),Em.forEach(t),Yp=p(Ro),ea=s(Ro,"LI",{});var Cm=r(ea);os=s(Cm,"A",{href:!0,rel:!0});var jm=r(os);Zp=d(jm,"Automatic Differentiation"),jm.forEach(t),Cm.forEach(t),eh=p(Ro),ta=s(Ro,"LI",{});var Pm=r(ta);ns=s(Pm,"A",{href:!0,rel:!0});var Om=r(ns);th=d(Om,"Vectorization"),Om.forEach(t),Pm.forEach(t),oh=p(Ro),oa=s(Ro,"LI",{});var Nm=r(oa);ss=s(Nm,"A",{href:!0,rel:!0});var Im=r(ss);nh=d(Im,"Parallelization"),Im.forEach(t),Nm.forEach(t),Ro.forEach(t),sh=p(ce),K=s(ce,"DIV",{class:!0});var pe=r(K);v(rs.$$.fragment,pe),rh=p(pe),Kt=s(pe,"P",{});var Hs=r(Kt);ah=d(Hs,"The "),na=s(Hs,"CODE",{});var Am=r(na);dh=d(Am,"FlaxBlenderbotPreTrainedModel"),Am.forEach(t),ih=d(Hs," forward method, overrides the "),sa=s(Hs,"CODE",{});var Lm=r(sa);lh=d(Lm,"__call__"),Lm.forEach(t),ch=d(Hs," special method."),Hs.forEach(t),ph=p(pe),v(qo.$$.fragment,pe),hh=p(pe),ra=s(pe,"P",{});var Sm=r(ra);uh=d(Sm,"Conversation example::"),Sm.forEach(t),mh=p(pe),aa=s(pe,"BLOCKQUOTE",{});var Dm=r(aa);da=s(Dm,"BLOCKQUOTE",{});var Gm=r(da);ia=s(Gm,"BLOCKQUOTE",{});var Wm=r(ia);la=s(Wm,"P",{});var Um=r(la);fh=d(Um,"from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),Um.forEach(t),Wm.forEach(t),Gm.forEach(t),Dm.forEach(t),_h=p(pe),ca=s(pe,"BLOCKQUOTE",{});var Hm=r(ca);pa=s(Hm,"BLOCKQUOTE",{});var Rm=r(pa);ha=s(Rm,"BLOCKQUOTE",{});var Km=r(ha);ua=s(Km,"P",{});var Vm=r(ua);gh=d(Vm,`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),Vm.forEach(t),Km.forEach(t),Rm.forEach(t),Hm.forEach(t),bh=p(pe),ma=s(pe,"BLOCKQUOTE",{});var Jm=r(ma);fa=s(Jm,"BLOCKQUOTE",{});var Qm=r(fa);_a=s(Qm,"BLOCKQUOTE",{});var Xm=r(_a);ga=s(Xm,"P",{});var Ym=r(ga);kh=d(Ym,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),Ym.forEach(t),Xm.forEach(t),Qm.forEach(t),Jm.forEach(t),yh=p(pe),ba=s(pe,"BLOCKQUOTE",{});var Zm=r(ba);ka=s(Zm,"BLOCKQUOTE",{});var ef=r(ka);as=s(ef,"BLOCKQUOTE",{});var Vd=r(as);Eo=s(Vd,"H1",{class:!0});var Jd=r(Eo);Mo=s(Jd,"A",{id:!0,class:!0,href:!0});var tf=r(Mo);ya=s(tf,"SPAN",{});var of=r(ya);v(ds.$$.fragment,of),of.forEach(t),tf.forEach(t),vh=p(Jd),va=s(Jd,"SPAN",{});var nf=r(va);Th=d(nf,"Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),nf.forEach(t),Jd.forEach(t),wh=p(Vd),Ta=s(Vd,"P",{});var sf=r(Ta);$h=d(sf,`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),sf.forEach(t),Vd.forEach(t),ef.forEach(t),Zm.forEach(t),pe.forEach(t),xh=p(ce),Co=s(ce,"DIV",{class:!0});var Qd=r(Co);v(is.$$.fragment,Qd),Bh=p(Qd),v(jo.$$.fragment,Qd),Qd.forEach(t),zh=p(ce),Po=s(ce,"DIV",{class:!0});var Xd=r(Po);v(ls.$$.fragment,Xd),Fh=p(Xd),v(Oo.$$.fragment,Xd),Xd.forEach(t),ce.forEach(t),this.h()},h(){u(l,"name","hf:doc:metadata"),u(l,"content",JSON.stringify(Pf)),u(m,"id","blenderbot"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#blenderbot"),u(f,"class","relative group"),u(he,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),u(he,"rel","nofollow"),u(ee,"id","overview"),u(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ee,"href","#overview"),u(A,"class","relative group"),u(_e,"href","https://arxiv.org/pdf/2004.13637.pdf"),u(_e,"rel","nofollow"),u(S,"href","https://huggingface.co/sshleifer"),u(S,"rel","nofollow"),u(ke,"href","https://github.com/facebookresearch/ParlAI"),u(ke,"rel","nofollow"),u(se,"id","implementation-notes"),u(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(se,"href","#implementation-notes"),u(j,"class","relative group"),u(Ne,"href","https://arxiv.org/pdf/1706.03762.pdf"),u(Ne,"rel","nofollow"),u(Ie,"href","https://huggingface.co/models?search=blenderbot"),u(Ie,"rel","nofollow"),u(fs,"href","blenderbot-small"),u(Jt,"id","usage"),u(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Jt,"href","#usage"),u(Ft,"class","relative group"),u(Qt,"id","transformers.BlenderbotConfig"),u(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qt,"href","#transformers.BlenderbotConfig"),u(qt,"class","relative group"),u(gs,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotModel"),u(Xo,"href","https://huggingface.co/facebook/blenderbot-3B"),u(Xo,"rel","nofollow"),u(bs,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(ks,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yt,"id","transformers.BlenderbotTokenizer"),u(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Yt,"href","#transformers.BlenderbotTokenizer"),u(Ct,"class","relative group"),u(ys,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(to,"id","transformers.BlenderbotTokenizerFast"),u(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(to,"href","#transformers.BlenderbotTokenizerFast"),u(jt,"class","relative group"),u(Ts,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(so,"id","transformers.BlenderbotModel"),u(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(so,"href","#transformers.BlenderbotModel"),u(Pt,"class","relative group"),u($s,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(mn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(mn,"rel","nofollow"),u(xs,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotModel"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(io,"id","transformers.BlenderbotForConditionalGeneration"),u(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(io,"href","#transformers.BlenderbotForConditionalGeneration"),u(Nt,"class","relative group"),u(Bs,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),u(zs,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(yn,"rel","nofollow"),u(Fs,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(po,"id","transformers.BlenderbotForCausalLM"),u(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(po,"href","#transformers.BlenderbotForCausalLM"),u(At,"class","relative group"),u(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mo,"id","transformers.TFBlenderbotModel"),u(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mo,"href","#transformers.TFBlenderbotModel"),u(St,"class","relative group"),u(qs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(qn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(qn,"rel","nofollow"),u(Es,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.TFBlenderbotModel"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bo,"id","transformers.TFBlenderbotForConditionalGeneration"),u(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bo,"href","#transformers.TFBlenderbotForConditionalGeneration"),u(Gt,"class","relative group"),u(Ms,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(On,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(On,"rel","nofollow"),u(Cs,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.TFBlenderbotForConditionalGeneration"),u(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vo,"id","transformers.FlaxBlenderbotModel"),u(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(vo,"href","#transformers.FlaxBlenderbotModel"),u(Ut,"class","relative group"),u(js,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Gn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Gn,"rel","nofollow"),u(Wn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Wn,"rel","nofollow"),u(Un,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Un,"rel","nofollow"),u(Hn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Hn,"rel","nofollow"),u(Rn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Rn,"rel","nofollow"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fo,"id","transformers.FlaxBlenderbotForConditionalGeneration"),u(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fo,"href","#transformers.FlaxBlenderbotForConditionalGeneration"),u(Rt,"class","relative group"),u(Ps,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(es,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(es,"rel","nofollow"),u(ts,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ts,"rel","nofollow"),u(os,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(os,"rel","nofollow"),u(ns,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ns,"rel","nofollow"),u(ss,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(ss,"rel","nofollow"),u(Mo,"id","generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),u(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Mo,"href","#generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),u(Eo,"class","relative group"),u(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,l),_(o,k,g),_(o,f,g),e(f,m),e(m,b),T(i,b,null),e(f,h),e(f,F),e(F,X),_(o,I,g),_(o,P,g),e(P,Z),e(Z,ze),e(P,q),e(P,he),e(he,ue),e(P,tt),_(o,We,g),_(o,A,g),e(A,ee),e(ee,Fe),T(V,Fe,null),e(A,ot),e(A,qe),e(qe,me),_(o,Ue,g),_(o,te,g),e(te,fe),e(te,_e),e(_e,nt),e(te,Ee),_(o,C,g),_(o,O,g),e(O,st),_(o,oe,g),_(o,xe,g),e(xe,Me),e(Me,ge),_(o,He,g),_(o,Be,g),e(Be,L),_(o,Re,g),_(o,J,g),e(J,Ce),e(Ce,rt),_(o,ne,g),_(o,Q,g),e(Q,at),e(Q,S),e(S,dt),e(Q,be),e(Q,ke),e(ke,je),e(Q,D),_(o,Ke,g),_(o,j,g),e(j,se),e(se,Pe),T(B,Pe,null),e(j,E),e(j,it),e(it,Oe),_(o,ft,g),_(o,re,g),e(re,M),e(M,vt),e(M,Ne),e(Ne,Tt),e(M,wt),e(re,$t),e(re,G),e(G,ye),e(G,Ie),e(Ie,xt),e(G,ve),e(re,Bt),e(re,Y),e(Y,lt),e(Y,ct),e(ct,Ae),e(Y,zt),e(Y,Rs),e(Rs,Yd),e(Y,Zd),e(Y,fs),e(fs,ei),e(Y,ti),_(o,Sa,g),_(o,Ft,g),e(Ft,Jt),e(Jt,Ks),T(Ko,Ks,null),e(Ft,oi),e(Ft,Vs),e(Vs,ni),_(o,Da,g),_(o,_s,g),e(_s,si),_(o,Ga,g),T(Vo,o,g),_(o,Wa,g),_(o,qt,g),e(qt,Qt),e(Qt,Js),T(Jo,Js,null),e(qt,ri),e(qt,Qs),e(Qs,ai),_(o,Ua,g),_(o,Le,g),T(Qo,Le,null),e(Le,di),e(Le,Et),e(Et,ii),e(Et,gs),e(gs,li),e(Et,ci),e(Et,Xo),e(Xo,pi),e(Et,hi),e(Le,ui),e(Le,Mt),e(Mt,mi),e(Mt,bs),e(bs,fi),e(Mt,_i),e(Mt,ks),e(ks,gi),e(Mt,bi),e(Le,ki),T(Xt,Le,null),_(o,Ha,g),_(o,Ct,g),e(Ct,Yt),e(Yt,Xs),T(Yo,Xs,null),e(Ct,yi),e(Ct,Ys),e(Ys,vi),_(o,Ra,g),_(o,W,g),T(Zo,W,null),e(W,Ti),e(W,Zs),e(Zs,wi),e(W,$i),e(W,er),e(er,xi),e(W,Bi),T(Zt,W,null),e(W,zi),e(W,en),e(en,Fi),e(en,tr),e(tr,qi),e(en,Ei),e(W,Mi),T(eo,W,null),e(W,Ci),e(W,tn),e(tn,ji),e(tn,ys),e(ys,Pi),e(tn,Oi),e(W,Ni),e(W,_t),T(on,_t,null),e(_t,Ii),e(_t,or),e(or,Ai),e(_t,Li),e(_t,nr),e(nr,vs),e(vs,Si),e(vs,sr),e(sr,Di),_(o,Ka,g),_(o,jt,g),e(jt,to),e(to,rr),T(nn,rr,null),e(jt,Gi),e(jt,ar),e(ar,Wi),_(o,Va,g),_(o,U,g),T(sn,U,null),e(U,Ui),e(U,rn),e(rn,Hi),e(rn,dr),e(dr,Ri),e(rn,Ki),e(U,Vi),e(U,ir),e(ir,Ji),e(U,Qi),T(oo,U,null),e(U,Xi),e(U,an),e(an,Yi),e(an,lr),e(lr,Zi),e(an,el),e(U,tl),T(no,U,null),e(U,ol),e(U,dn),e(dn,nl),e(dn,Ts),e(Ts,sl),e(dn,rl),e(U,al),e(U,gt),T(ln,gt,null),e(gt,dl),e(gt,cr),e(cr,il),e(gt,ll),e(gt,pr),e(pr,ws),e(ws,cl),e(ws,hr),e(hr,pl),_(o,Ja,g),_(o,Pt,g),e(Pt,so),e(so,ur),T(cn,ur,null),e(Pt,hl),e(Pt,mr),e(mr,ul),_(o,Qa,g),_(o,pt,g),e(pt,ml),e(pt,fr),e(fr,fl),e(pt,_l),e(pt,_r),e(_r,gl),e(pt,bl),e(pt,gr),e(gr,kl),_(o,Xa,g),_(o,Se,g),T(pn,Se,null),e(Se,yl),e(Se,hn),e(hn,vl),e(hn,$s),e($s,Tl),e(hn,wl),e(Se,$l),e(Se,un),e(un,xl),e(un,mn),e(mn,Bl),e(un,zl),e(Se,Fl),e(Se,Ve),T(fn,Ve,null),e(Ve,ql),e(Ve,Ot),e(Ot,El),e(Ot,xs),e(xs,Ml),e(Ot,Cl),e(Ot,br),e(br,jl),e(Ot,Pl),e(Ve,Ol),T(ro,Ve,null),e(Ve,Nl),T(ao,Ve,null),_(o,Ya,g),_(o,Nt,g),e(Nt,io),e(io,kr),T(_n,kr,null),e(Nt,Il),e(Nt,yr),e(yr,Al),_(o,Za,g),_(o,ht,g),e(ht,Ll),e(ht,Bs),e(Bs,Sl),e(ht,Dl),e(ht,vr),e(vr,Gl),e(ht,Wl),e(ht,Tr),e(Tr,Ul),_(o,ed,g),_(o,De,g),T(gn,De,null),e(De,Hl),e(De,bn),e(bn,Rl),e(bn,zs),e(zs,Kl),e(bn,Vl),e(De,Jl),e(De,kn),e(kn,Ql),e(kn,yn),e(yn,Xl),e(kn,Yl),e(De,Zl),e(De,Je),T(vn,Je,null),e(Je,ec),e(Je,It),e(It,tc),e(It,Fs),e(Fs,oc),e(It,nc),e(It,wr),e(wr,sc),e(It,rc),e(Je,ac),T(lo,Je,null),e(Je,dc),T(co,Je,null),_(o,td,g),_(o,At,g),e(At,po),e(po,$r),T(Tn,$r,null),e(At,ic),e(At,xr),e(xr,lc),_(o,od,g),_(o,Lt,g),T(wn,Lt,null),e(Lt,cc),e(Lt,ho),T($n,ho,null),e(ho,pc),T(uo,ho,null),_(o,nd,g),_(o,St,g),e(St,mo),e(mo,Br),T(xn,Br,null),e(St,hc),e(St,zr),e(zr,uc),_(o,sd,g),_(o,Te,g),T(Bn,Te,null),e(Te,mc),e(Te,zn),e(zn,fc),e(zn,qs),e(qs,_c),e(zn,gc),e(Te,bc),e(Te,Fn),e(Fn,kc),e(Fn,qn),e(qn,yc),e(Fn,vc),e(Te,Tc),T(fo,Te,null),e(Te,wc),e(Te,Qe),T(En,Qe,null),e(Qe,$c),e(Qe,Dt),e(Dt,xc),e(Dt,Es),e(Es,Bc),e(Dt,zc),e(Dt,Fr),e(Fr,Fc),e(Dt,qc),e(Qe,Ec),T(_o,Qe,null),e(Qe,Mc),T(go,Qe,null),_(o,rd,g),_(o,Gt,g),e(Gt,bo),e(bo,qr),T(Mn,qr,null),e(Gt,Cc),e(Gt,Er),e(Er,jc),_(o,ad,g),_(o,we,g),T(Cn,we,null),e(we,Pc),e(we,jn),e(jn,Oc),e(jn,Ms),e(Ms,Nc),e(jn,Ic),e(we,Ac),e(we,Pn),e(Pn,Lc),e(Pn,On),e(On,Sc),e(Pn,Dc),e(we,Gc),T(ko,we,null),e(we,Wc),e(we,ae),T(Nn,ae,null),e(ae,Uc),e(ae,Wt),e(Wt,Hc),e(Wt,Cs),e(Cs,Rc),e(Wt,Kc),e(Wt,Mr),e(Mr,Vc),e(Wt,Jc),e(ae,Qc),T(yo,ae,null),e(ae,Xc),e(ae,Cr),e(Cr,Yc),e(ae,Zc),e(ae,jr),e(jr,Pr),e(Pr,Or),e(Or,Nr),e(Nr,ep),e(ae,tp),e(ae,Ir),e(Ir,Ar),e(Ar,Lr),e(Lr,In),e(In,op),e(In,Sr),e(Sr,np),e(In,sp),_(o,dd,g),_(o,Ut,g),e(Ut,vo),e(vo,Dr),T(An,Dr,null),e(Ut,rp),e(Ut,Gr),e(Gr,ap),_(o,id,g),_(o,H,g),T(Ln,H,null),e(H,dp),e(H,Sn),e(Sn,ip),e(Sn,js),e(js,lp),e(Sn,cp),e(H,pp),e(H,Dn),e(Dn,hp),e(Dn,Gn),e(Gn,up),e(Dn,mp),e(H,fp),e(H,Wr),e(Wr,_p),e(H,gp),e(H,ut),e(ut,Ur),e(Ur,Wn),e(Wn,bp),e(ut,kp),e(ut,Hr),e(Hr,Un),e(Un,yp),e(ut,vp),e(ut,Rr),e(Rr,Hn),e(Hn,Tp),e(ut,wp),e(ut,Kr),e(Kr,Rn),e(Rn,$p),e(H,xp),e(H,Xe),T(Kn,Xe,null),e(Xe,Bp),e(Xe,Ht),e(Ht,zp),e(Ht,Vr),e(Vr,Fp),e(Ht,qp),e(Ht,Jr),e(Jr,Ep),e(Ht,Mp),e(Xe,Cp),T(To,Xe,null),e(Xe,jp),T(wo,Xe,null),e(H,Pp),e(H,$o),T(Vn,$o,null),e($o,Op),T(xo,$o,null),e(H,Np),e(H,Bo),T(Jn,Bo,null),e(Bo,Ip),T(zo,Bo,null),_(o,ld,g),_(o,Rt,g),e(Rt,Fo),e(Fo,Qr),T(Qn,Qr,null),e(Rt,Ap),e(Rt,Xr),e(Xr,Lp),_(o,cd,g),_(o,R,g),T(Xn,R,null),e(R,Sp),e(R,Yn),e(Yn,Dp),e(Yn,Ps),e(Ps,Gp),e(Yn,Wp),e(R,Up),e(R,Zn),e(Zn,Hp),e(Zn,es),e(es,Rp),e(Zn,Kp),e(R,Vp),e(R,Yr),e(Yr,Jp),e(R,Qp),e(R,mt),e(mt,Zr),e(Zr,ts),e(ts,Xp),e(mt,Yp),e(mt,ea),e(ea,os),e(os,Zp),e(mt,eh),e(mt,ta),e(ta,ns),e(ns,th),e(mt,oh),e(mt,oa),e(oa,ss),e(ss,nh),e(R,sh),e(R,K),T(rs,K,null),e(K,rh),e(K,Kt),e(Kt,ah),e(Kt,na),e(na,dh),e(Kt,ih),e(Kt,sa),e(sa,lh),e(Kt,ch),e(K,ph),T(qo,K,null),e(K,hh),e(K,ra),e(ra,uh),e(K,mh),e(K,aa),e(aa,da),e(da,ia),e(ia,la),e(la,fh),e(K,_h),e(K,ca),e(ca,pa),e(pa,ha),e(ha,ua),e(ua,gh),e(K,bh),e(K,ma),e(ma,fa),e(fa,_a),e(_a,ga),e(ga,kh),e(K,yh),e(K,ba),e(ba,ka),e(ka,as),e(as,Eo),e(Eo,Mo),e(Mo,ya),T(ds,ya,null),e(Eo,vh),e(Eo,va),e(va,Th),e(as,wh),e(as,Ta),e(Ta,$h),e(R,xh),e(R,Co),T(is,Co,null),e(Co,Bh),T(jo,Co,null),e(R,zh),e(R,Po),T(ls,Po,null),e(Po,Fh),T(Oo,Po,null),pd=!0},p(o,[g]){const cs={};g&2&&(cs.$$scope={dirty:g,ctx:o}),Xt.$set(cs);const wa={};g&2&&(wa.$$scope={dirty:g,ctx:o}),Zt.$set(wa);const $a={};g&2&&($a.$$scope={dirty:g,ctx:o}),eo.$set($a);const xa={};g&2&&(xa.$$scope={dirty:g,ctx:o}),oo.$set(xa);const No={};g&2&&(No.$$scope={dirty:g,ctx:o}),no.$set(No);const Ba={};g&2&&(Ba.$$scope={dirty:g,ctx:o}),ro.$set(Ba);const za={};g&2&&(za.$$scope={dirty:g,ctx:o}),ao.$set(za);const ps={};g&2&&(ps.$$scope={dirty:g,ctx:o}),lo.$set(ps);const Fa={};g&2&&(Fa.$$scope={dirty:g,ctx:o}),co.$set(Fa);const qa={};g&2&&(qa.$$scope={dirty:g,ctx:o}),uo.$set(qa);const Ea={};g&2&&(Ea.$$scope={dirty:g,ctx:o}),fo.$set(Ea);const hs={};g&2&&(hs.$$scope={dirty:g,ctx:o}),_o.$set(hs);const Ma={};g&2&&(Ma.$$scope={dirty:g,ctx:o}),go.$set(Ma);const Ca={};g&2&&(Ca.$$scope={dirty:g,ctx:o}),ko.$set(Ca);const ja={};g&2&&(ja.$$scope={dirty:g,ctx:o}),yo.$set(ja);const Pa={};g&2&&(Pa.$$scope={dirty:g,ctx:o}),To.$set(Pa);const Oa={};g&2&&(Oa.$$scope={dirty:g,ctx:o}),wo.$set(Oa);const Na={};g&2&&(Na.$$scope={dirty:g,ctx:o}),xo.$set(Na);const Ia={};g&2&&(Ia.$$scope={dirty:g,ctx:o}),zo.$set(Ia);const Vt={};g&2&&(Vt.$$scope={dirty:g,ctx:o}),qo.$set(Vt);const Aa={};g&2&&(Aa.$$scope={dirty:g,ctx:o}),jo.$set(Aa);const La={};g&2&&(La.$$scope={dirty:g,ctx:o}),Oo.$set(La)},i(o){pd||(w(i.$$.fragment,o),w(V.$$.fragment,o),w(B.$$.fragment,o),w(Ko.$$.fragment,o),w(Vo.$$.fragment,o),w(Jo.$$.fragment,o),w(Qo.$$.fragment,o),w(Xt.$$.fragment,o),w(Yo.$$.fragment,o),w(Zo.$$.fragment,o),w(Zt.$$.fragment,o),w(eo.$$.fragment,o),w(on.$$.fragment,o),w(nn.$$.fragment,o),w(sn.$$.fragment,o),w(oo.$$.fragment,o),w(no.$$.fragment,o),w(ln.$$.fragment,o),w(cn.$$.fragment,o),w(pn.$$.fragment,o),w(fn.$$.fragment,o),w(ro.$$.fragment,o),w(ao.$$.fragment,o),w(_n.$$.fragment,o),w(gn.$$.fragment,o),w(vn.$$.fragment,o),w(lo.$$.fragment,o),w(co.$$.fragment,o),w(Tn.$$.fragment,o),w(wn.$$.fragment,o),w($n.$$.fragment,o),w(uo.$$.fragment,o),w(xn.$$.fragment,o),w(Bn.$$.fragment,o),w(fo.$$.fragment,o),w(En.$$.fragment,o),w(_o.$$.fragment,o),w(go.$$.fragment,o),w(Mn.$$.fragment,o),w(Cn.$$.fragment,o),w(ko.$$.fragment,o),w(Nn.$$.fragment,o),w(yo.$$.fragment,o),w(An.$$.fragment,o),w(Ln.$$.fragment,o),w(Kn.$$.fragment,o),w(To.$$.fragment,o),w(wo.$$.fragment,o),w(Vn.$$.fragment,o),w(xo.$$.fragment,o),w(Jn.$$.fragment,o),w(zo.$$.fragment,o),w(Qn.$$.fragment,o),w(Xn.$$.fragment,o),w(rs.$$.fragment,o),w(qo.$$.fragment,o),w(ds.$$.fragment,o),w(is.$$.fragment,o),w(jo.$$.fragment,o),w(ls.$$.fragment,o),w(Oo.$$.fragment,o),pd=!0)},o(o){$(i.$$.fragment,o),$(V.$$.fragment,o),$(B.$$.fragment,o),$(Ko.$$.fragment,o),$(Vo.$$.fragment,o),$(Jo.$$.fragment,o),$(Qo.$$.fragment,o),$(Xt.$$.fragment,o),$(Yo.$$.fragment,o),$(Zo.$$.fragment,o),$(Zt.$$.fragment,o),$(eo.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(sn.$$.fragment,o),$(oo.$$.fragment,o),$(no.$$.fragment,o),$(ln.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(fn.$$.fragment,o),$(ro.$$.fragment,o),$(ao.$$.fragment,o),$(_n.$$.fragment,o),$(gn.$$.fragment,o),$(vn.$$.fragment,o),$(lo.$$.fragment,o),$(co.$$.fragment,o),$(Tn.$$.fragment,o),$(wn.$$.fragment,o),$($n.$$.fragment,o),$(uo.$$.fragment,o),$(xn.$$.fragment,o),$(Bn.$$.fragment,o),$(fo.$$.fragment,o),$(En.$$.fragment,o),$(_o.$$.fragment,o),$(go.$$.fragment,o),$(Mn.$$.fragment,o),$(Cn.$$.fragment,o),$(ko.$$.fragment,o),$(Nn.$$.fragment,o),$(yo.$$.fragment,o),$(An.$$.fragment,o),$(Ln.$$.fragment,o),$(Kn.$$.fragment,o),$(To.$$.fragment,o),$(wo.$$.fragment,o),$(Vn.$$.fragment,o),$(xo.$$.fragment,o),$(Jn.$$.fragment,o),$(zo.$$.fragment,o),$(Qn.$$.fragment,o),$(Xn.$$.fragment,o),$(rs.$$.fragment,o),$(qo.$$.fragment,o),$(ds.$$.fragment,o),$(is.$$.fragment,o),$(jo.$$.fragment,o),$(ls.$$.fragment,o),$(Oo.$$.fragment,o),pd=!1},d(o){t(l),o&&t(k),o&&t(f),x(i),o&&t(I),o&&t(P),o&&t(We),o&&t(A),x(V),o&&t(Ue),o&&t(te),o&&t(C),o&&t(O),o&&t(oe),o&&t(xe),o&&t(He),o&&t(Be),o&&t(Re),o&&t(J),o&&t(ne),o&&t(Q),o&&t(Ke),o&&t(j),x(B),o&&t(ft),o&&t(re),o&&t(Sa),o&&t(Ft),x(Ko),o&&t(Da),o&&t(_s),o&&t(Ga),x(Vo,o),o&&t(Wa),o&&t(qt),x(Jo),o&&t(Ua),o&&t(Le),x(Qo),x(Xt),o&&t(Ha),o&&t(Ct),x(Yo),o&&t(Ra),o&&t(W),x(Zo),x(Zt),x(eo),x(on),o&&t(Ka),o&&t(jt),x(nn),o&&t(Va),o&&t(U),x(sn),x(oo),x(no),x(ln),o&&t(Ja),o&&t(Pt),x(cn),o&&t(Qa),o&&t(pt),o&&t(Xa),o&&t(Se),x(pn),x(fn),x(ro),x(ao),o&&t(Ya),o&&t(Nt),x(_n),o&&t(Za),o&&t(ht),o&&t(ed),o&&t(De),x(gn),x(vn),x(lo),x(co),o&&t(td),o&&t(At),x(Tn),o&&t(od),o&&t(Lt),x(wn),x($n),x(uo),o&&t(nd),o&&t(St),x(xn),o&&t(sd),o&&t(Te),x(Bn),x(fo),x(En),x(_o),x(go),o&&t(rd),o&&t(Gt),x(Mn),o&&t(ad),o&&t(we),x(Cn),x(ko),x(Nn),x(yo),o&&t(dd),o&&t(Ut),x(An),o&&t(id),o&&t(H),x(Ln),x(Kn),x(To),x(wo),x(Vn),x(xo),x(Jn),x(zo),o&&t(ld),o&&t(Rt),x(Qn),o&&t(cd),o&&t(R),x(Xn),x(rs),x(qo),x(ds),x(is),x(jo),x(ls),x(Oo)}}}const Pf={local:"blenderbot",sections:[{local:"overview",title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage",title:"Usage"},{local:"transformers.BlenderbotConfig",title:"BlenderbotConfig"},{local:"transformers.BlenderbotTokenizer",title:"BlenderbotTokenizer"},{local:"transformers.BlenderbotTokenizerFast",title:"BlenderbotTokenizerFast"},{local:"transformers.BlenderbotModel",title:"BlenderbotModel"},{local:"transformers.BlenderbotForConditionalGeneration",title:"BlenderbotForConditionalGeneration"},{local:"transformers.BlenderbotForCausalLM",title:"BlenderbotForCausalLM"},{local:"transformers.TFBlenderbotModel",title:"TFBlenderbotModel"},{local:"transformers.TFBlenderbotForConditionalGeneration",title:"TFBlenderbotForConditionalGeneration"},{local:"transformers.FlaxBlenderbotModel",title:"FlaxBlenderbotModel"},{local:"transformers.FlaxBlenderbotForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot"};function Of(z){return cf(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gf extends rf{constructor(l){super();af(this,l,Of,jf,df,{})}}export{Gf as default,Pf as metadata};
