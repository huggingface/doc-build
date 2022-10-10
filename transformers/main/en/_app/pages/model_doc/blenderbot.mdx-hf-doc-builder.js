import{S as Jm,i as Qm,s as Xm,e as n,k as c,w as y,t as a,M as Ym,c as s,d as t,m as p,a as r,x as v,h as d,b as u,G as e,g as _,y as T,q as w,o as $,B as x,v as Zm,L as et}from"../../chunks/vendor-hf-doc-builder.js";import{T as gt}from"../../chunks/Tip-hf-doc-builder.js";import{D as A}from"../../chunks/Docstring-hf-doc-builder.js";import{C as We}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ze}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ze}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ef(z){let l,k,f,m,b;return m=new We({props:{code:`from transformers import BlenderbotModel, BlenderbotConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=n("p"),k=a("Example:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function tf(z){let l,k,f,m,b;return m=new We({props:{code:`from transformers import BlenderbotTokenizer
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-3B")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-3B&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[6950, 1085, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[6950, 1085, 2]`}}),{c(){l=n("p"),k=a("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function of(z){let l,k,f,m,b;return{c(){l=n("p"),k=a("When used with "),f=n("code"),m=a("is_split_into_words=True"),b=a(", this tokenizer will add a space before each word (even the first one).")},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"When used with "),f=s(h,"CODE",{});var F=r(f);m=d(F,"is_split_into_words=True"),F.forEach(t),b=d(h,", this tokenizer will add a space before each word (even the first one)."),h.forEach(t)},m(i,h){_(i,l,h),e(l,k),e(l,f),e(f,m),e(l,b)},d(i){i&&t(l)}}}function nf(z){let l,k,f,m,b;return m=new We({props:{code:`from transformers import BlenderbotTokenizerFast
tokenizer = BlenderbotTokenizerFast.from_pretrained("facebook/blenderbot-3B")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BlenderbotTokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-3B&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[6950, 1085, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[6950, 1085, 2]`}}),{c(){l=n("p"),k=a("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function sf(z){let l,k,f,m,b,i,h,F;return{c(){l=n("p"),k=a("When used with "),f=n("code"),m=a("is_split_into_words=True"),b=a(", this tokenizer needs to be instantiated with "),i=n("code"),h=a("add_prefix_space=True"),F=a(".")},l(Q){l=s(Q,"P",{});var I=r(l);k=d(I,"When used with "),f=s(I,"CODE",{});var j=r(f);m=d(j,"is_split_into_words=True"),j.forEach(t),b=d(I,", this tokenizer needs to be instantiated with "),i=s(I,"CODE",{});var oe=r(i);h=d(oe,"add_prefix_space=True"),oe.forEach(t),F=d(I,"."),I.forEach(t)},m(Q,I){_(Q,l,I),e(l,k),e(l,f),e(f,m),e(l,b),e(l,i),e(i,h),e(l,F)},d(Q){Q&&t(l)}}}function rf(z){let l,k,f,m,b;return{c(){l=n("p"),k=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var F=r(f);m=d(F,"Module"),F.forEach(t),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(i,h){_(i,l,h),e(l,k),e(l,f),e(f,m),e(l,b)},d(i){i&&t(l)}}}function af(z){let l,k,f,m,b;return m=new We({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotModel

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
[<span class="hljs-number">1</span>, <span class="hljs-number">6</span>, <span class="hljs-number">1280</span>]`}}),{c(){l=n("p"),k=a("Example:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function df(z){let l,k,f,m,b;return{c(){l=n("p"),k=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var F=r(f);m=d(F,"Module"),F.forEach(t),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(i,h){_(i,l,h),e(l,k),e(l,f),e(f,m),e(l,b)},d(i){i&&t(l)}}}function lf(z){let l,k,f,m,b;return m=new We({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

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
Bot:   That&#x27;s too bad. Have you tried encouraging them to change their eating habits?</span>`}}),{c(){l=n("p"),k=a("Conversation example:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Conversation example:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function cf(z){let l,k,f,m,b;return m=new We({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){l=n("p"),k=a("Example:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function pf(z){let l,k,f,m,b,i,h,F,Q,I,j,oe,Ee,q,ue,me,tt,Ue,L,ne,Me,K,ot,Ce,fe,He,se,_e,ge,nt,je,C,P,st,re,Fe,Pe,be,Re,V,S,ke,ye,rt,ve,Te,at,Ke,O,ae,X,we,Oe,N,dt,H,J,$e;return{c(){l=n("p"),k=a("TensorFlow models and layers in "),f=n("code"),m=a("transformers"),b=a(" accept two formats as input:"),i=c(),h=n("ul"),F=n("li"),Q=a("having all inputs as keyword arguments (like PyTorch models), or"),I=c(),j=n("li"),oe=a("having all inputs as a list, tuple or dict in the first positional argument."),Ee=c(),q=n("p"),ue=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),me=n("code"),tt=a("model.fit()"),Ue=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=n("code"),ne=a("model.fit()"),Me=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=n("code"),ot=a("fit()"),Ce=a(" and "),fe=n("code"),He=a("predict()"),se=a(`, such as when creating your own layers or models with
the Keras `),_e=n("code"),ge=a("Functional"),nt=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),je=c(),C=n("ul"),P=n("li"),st=a("a single Tensor with "),re=n("code"),Fe=a("input_ids"),Pe=a(" only and nothing else: "),be=n("code"),Re=a("model(input_ids)"),V=c(),S=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ye=n("code"),rt=a("model([input_ids, attention_mask])"),ve=a(" or "),Te=n("code"),at=a("model([input_ids, attention_mask, token_type_ids])"),Ke=c(),O=n("li"),ae=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=n("code"),we=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe=c(),N=n("p"),dt=a(`Note that when creating models and layers with
`),H=n("a"),J=a("subclassing"),$e=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(B){l=s(B,"P",{});var E=r(l);k=d(E,"TensorFlow models and layers in "),f=s(E,"CODE",{});var bt=r(f);m=d(bt,"transformers"),bt.forEach(t),b=d(E," accept two formats as input:"),E.forEach(t),i=p(B),h=s(B,"UL",{});var Ne=r(h);F=s(Ne,"LI",{});var kt=r(F);Q=d(kt,"having all inputs as keyword arguments (like PyTorch models), or"),kt.forEach(t),I=p(Ne),j=s(Ne,"LI",{});var Ae=r(j);oe=d(Ae,"having all inputs as a list, tuple or dict in the first positional argument."),Ae.forEach(t),Ne.forEach(t),Ee=p(B),q=s(B,"P",{});var M=r(q);ue=d(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),me=s(M,"CODE",{});var Ie=r(me);tt=d(Ie,"model.fit()"),Ie.forEach(t),Ue=d(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=s(M,"CODE",{});var yt=r(L);ne=d(yt,"model.fit()"),yt.forEach(t),Me=d(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=s(M,"CODE",{});var vt=r(K);ot=d(vt,"fit()"),vt.forEach(t),Ce=d(M," and "),fe=s(M,"CODE",{});var Tt=r(fe);He=d(Tt,"predict()"),Tt.forEach(t),se=d(M,`, such as when creating your own layers or models with
the Keras `),_e=s(M,"CODE",{});var Y=r(_e);ge=d(Y,"Functional"),Y.forEach(t),nt=d(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),je=p(B),C=s(B,"UL",{});var Z=r(C);P=s(Z,"LI",{});var ee=r(P);st=d(ee,"a single Tensor with "),re=s(ee,"CODE",{});var wt=r(re);Fe=d(wt,"input_ids"),wt.forEach(t),Pe=d(ee," only and nothing else: "),be=s(ee,"CODE",{});var $t=r(be);Re=d($t,"model(input_ids)"),$t.forEach(t),ee.forEach(t),V=p(Z),S=s(Z,"LI",{});var te=r(S);ke=d(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ye=s(te,"CODE",{});var xt=r(ye);rt=d(xt,"model([input_ids, attention_mask])"),xt.forEach(t),ve=d(te," or "),Te=s(te,"CODE",{});var Bt=r(Te);at=d(Bt,"model([input_ids, attention_mask, token_type_ids])"),Bt.forEach(t),te.forEach(t),Ke=p(Z),O=s(Z,"LI",{});var qe=r(O);ae=d(qe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=s(qe,"CODE",{});var zt=r(X);we=d(zt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),zt.forEach(t),qe.forEach(t),Z.forEach(t),Oe=p(B),N=s(B,"P",{});var Le=r(N);dt=d(Le,`Note that when creating models and layers with
`),H=s(Le,"A",{href:!0,rel:!0});var ht=r(H);J=d(ht,"subclassing"),ht.forEach(t),$e=d(Le,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Le.forEach(t),this.h()},h(){u(H,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(H,"rel","nofollow")},m(B,E){_(B,l,E),e(l,k),e(l,f),e(f,m),e(l,b),_(B,i,E),_(B,h,E),e(h,F),e(F,Q),e(h,I),e(h,j),e(j,oe),_(B,Ee,E),_(B,q,E),e(q,ue),e(q,me),e(me,tt),e(q,Ue),e(q,L),e(L,ne),e(q,Me),e(q,K),e(K,ot),e(q,Ce),e(q,fe),e(fe,He),e(q,se),e(q,_e),e(_e,ge),e(q,nt),_(B,je,E),_(B,C,E),e(C,P),e(P,st),e(P,re),e(re,Fe),e(P,Pe),e(P,be),e(be,Re),e(C,V),e(C,S),e(S,ke),e(S,ye),e(ye,rt),e(S,ve),e(S,Te),e(Te,at),e(C,Ke),e(C,O),e(O,ae),e(O,X),e(X,we),_(B,Oe,E),_(B,N,E),e(N,dt),e(N,H),e(H,J),e(N,$e)},d(B){B&&t(l),B&&t(i),B&&t(h),B&&t(Ee),B&&t(q),B&&t(je),B&&t(C),B&&t(Oe),B&&t(N)}}}function hf(z){let l,k,f,m,b;return{c(){l=n("p"),k=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var F=r(f);m=d(F,"Module"),F.forEach(t),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(i,h){_(i,l,h),e(l,k),e(l,f),e(f,m),e(l,b)},d(i){i&&t(l)}}}function uf(z){let l,k,f,m,b;return m=new We({props:{code:`from transformers import BlenderbotTokenizer, TFBlenderbotModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),k=a("Example:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function mf(z){let l,k,f,m,b,i,h,F,Q,I,j,oe,Ee,q,ue,me,tt,Ue,L,ne,Me,K,ot,Ce,fe,He,se,_e,ge,nt,je,C,P,st,re,Fe,Pe,be,Re,V,S,ke,ye,rt,ve,Te,at,Ke,O,ae,X,we,Oe,N,dt,H,J,$e;return{c(){l=n("p"),k=a("TensorFlow models and layers in "),f=n("code"),m=a("transformers"),b=a(" accept two formats as input:"),i=c(),h=n("ul"),F=n("li"),Q=a("having all inputs as keyword arguments (like PyTorch models), or"),I=c(),j=n("li"),oe=a("having all inputs as a list, tuple or dict in the first positional argument."),Ee=c(),q=n("p"),ue=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),me=n("code"),tt=a("model.fit()"),Ue=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=n("code"),ne=a("model.fit()"),Me=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=n("code"),ot=a("fit()"),Ce=a(" and "),fe=n("code"),He=a("predict()"),se=a(`, such as when creating your own layers or models with
the Keras `),_e=n("code"),ge=a("Functional"),nt=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),je=c(),C=n("ul"),P=n("li"),st=a("a single Tensor with "),re=n("code"),Fe=a("input_ids"),Pe=a(" only and nothing else: "),be=n("code"),Re=a("model(input_ids)"),V=c(),S=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ye=n("code"),rt=a("model([input_ids, attention_mask])"),ve=a(" or "),Te=n("code"),at=a("model([input_ids, attention_mask, token_type_ids])"),Ke=c(),O=n("li"),ae=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=n("code"),we=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe=c(),N=n("p"),dt=a(`Note that when creating models and layers with
`),H=n("a"),J=a("subclassing"),$e=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(B){l=s(B,"P",{});var E=r(l);k=d(E,"TensorFlow models and layers in "),f=s(E,"CODE",{});var bt=r(f);m=d(bt,"transformers"),bt.forEach(t),b=d(E," accept two formats as input:"),E.forEach(t),i=p(B),h=s(B,"UL",{});var Ne=r(h);F=s(Ne,"LI",{});var kt=r(F);Q=d(kt,"having all inputs as keyword arguments (like PyTorch models), or"),kt.forEach(t),I=p(Ne),j=s(Ne,"LI",{});var Ae=r(j);oe=d(Ae,"having all inputs as a list, tuple or dict in the first positional argument."),Ae.forEach(t),Ne.forEach(t),Ee=p(B),q=s(B,"P",{});var M=r(q);ue=d(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),me=s(M,"CODE",{});var Ie=r(me);tt=d(Ie,"model.fit()"),Ie.forEach(t),Ue=d(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=s(M,"CODE",{});var yt=r(L);ne=d(yt,"model.fit()"),yt.forEach(t),Me=d(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=s(M,"CODE",{});var vt=r(K);ot=d(vt,"fit()"),vt.forEach(t),Ce=d(M," and "),fe=s(M,"CODE",{});var Tt=r(fe);He=d(Tt,"predict()"),Tt.forEach(t),se=d(M,`, such as when creating your own layers or models with
the Keras `),_e=s(M,"CODE",{});var Y=r(_e);ge=d(Y,"Functional"),Y.forEach(t),nt=d(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),je=p(B),C=s(B,"UL",{});var Z=r(C);P=s(Z,"LI",{});var ee=r(P);st=d(ee,"a single Tensor with "),re=s(ee,"CODE",{});var wt=r(re);Fe=d(wt,"input_ids"),wt.forEach(t),Pe=d(ee," only and nothing else: "),be=s(ee,"CODE",{});var $t=r(be);Re=d($t,"model(input_ids)"),$t.forEach(t),ee.forEach(t),V=p(Z),S=s(Z,"LI",{});var te=r(S);ke=d(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ye=s(te,"CODE",{});var xt=r(ye);rt=d(xt,"model([input_ids, attention_mask])"),xt.forEach(t),ve=d(te," or "),Te=s(te,"CODE",{});var Bt=r(Te);at=d(Bt,"model([input_ids, attention_mask, token_type_ids])"),Bt.forEach(t),te.forEach(t),Ke=p(Z),O=s(Z,"LI",{});var qe=r(O);ae=d(qe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=s(qe,"CODE",{});var zt=r(X);we=d(zt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),zt.forEach(t),qe.forEach(t),Z.forEach(t),Oe=p(B),N=s(B,"P",{});var Le=r(N);dt=d(Le,`Note that when creating models and layers with
`),H=s(Le,"A",{href:!0,rel:!0});var ht=r(H);J=d(ht,"subclassing"),ht.forEach(t),$e=d(Le,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Le.forEach(t),this.h()},h(){u(H,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(H,"rel","nofollow")},m(B,E){_(B,l,E),e(l,k),e(l,f),e(f,m),e(l,b),_(B,i,E),_(B,h,E),e(h,F),e(F,Q),e(h,I),e(h,j),e(j,oe),_(B,Ee,E),_(B,q,E),e(q,ue),e(q,me),e(me,tt),e(q,Ue),e(q,L),e(L,ne),e(q,Me),e(q,K),e(K,ot),e(q,Ce),e(q,fe),e(fe,He),e(q,se),e(q,_e),e(_e,ge),e(q,nt),_(B,je,E),_(B,C,E),e(C,P),e(P,st),e(P,re),e(re,Fe),e(P,Pe),e(P,be),e(be,Re),e(C,V),e(C,S),e(S,ke),e(S,ye),e(ye,rt),e(S,ve),e(S,Te),e(Te,at),e(C,Ke),e(C,O),e(O,ae),e(O,X),e(X,we),_(B,Oe,E),_(B,N,E),e(N,dt),e(N,H),e(H,J),e(N,$e)},d(B){B&&t(l),B&&t(i),B&&t(h),B&&t(Ee),B&&t(q),B&&t(je),B&&t(C),B&&t(Oe),B&&t(N)}}}function ff(z){let l,k,f,m,b;return{c(){l=n("p"),k=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var F=r(f);m=d(F,"Module"),F.forEach(t),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(i,h){_(i,l,h),e(l,k),e(l,f),e(f,m),e(l,b)},d(i){i&&t(l)}}}function _f(z){let l,k,f,m,b;return{c(){l=n("p"),k=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var F=r(f);m=d(F,"Module"),F.forEach(t),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(i,h){_(i,l,h),e(l,k),e(l,f),e(f,m),e(l,b)},d(i){i&&t(l)}}}function gf(z){let l,k,f,m,b;return m=new We({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotModel

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = FlaxBlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),k=a("Example:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function bf(z){let l,k,f,m,b;return m=new We({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=n("p"),k=a("Example:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function kf(z){let l,k,f,m,b;return m=new We({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),k=a("Example:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function yf(z){let l,k,f,m,b;return{c(){l=n("p"),k=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(h,"CODE",{});var F=r(f);m=d(F,"Module"),F.forEach(t),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(i,h){_(i,l,h),e(l,k),e(l,f),e(f,m),e(l,b)},d(i){i&&t(l)}}}function vf(z){let l,k,f,m,b;return m=new We({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=n("p"),k=a("Example:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function Tf(z){let l,k,f,m,b;return m=new We({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=n("p"),k=a("Example:"),f=c(),y(m.$$.fragment)},l(i){l=s(i,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),f=p(i),v(m.$$.fragment,i)},m(i,h){_(i,l,h),e(l,k),_(i,f,h),T(m,i,h),b=!0},p:et,i(i){b||(w(m.$$.fragment,i),b=!0)},o(i){$(m.$$.fragment,i),b=!1},d(i){i&&t(l),i&&t(f),x(m,i)}}}function wf(z){let l,k,f,m,b,i,h,F,Q,I,j,oe,Ee,q,ue,me,tt,Ue,L,ne,Me,K,ot,Ce,fe,He,se,_e,ge,nt,je,C,P,st,re,Fe,Pe,be,Re,V,S,ke,ye,rt,ve,Te,at,Ke,O,ae,X,we,Oe,N,dt,H,J,$e,B,E,bt,Ne,kt,Ae,M,Ie,yt,vt,Tt,Y,Z,ee,wt,$t,te,xt,Bt,qe,zt,Le,ht,Ft,Jt,Rs,Ko,Vd,Ks,Jd,Ia,_s,Qd,La,Vo,Sa,qt,Qt,Vs,Jo,Xd,Js,Yd,Da,Se,Qo,Zd,Et,ei,gs,ti,oi,Xo,ni,si,ri,Mt,ai,bs,di,ii,ks,li,ci,pi,Xt,Ga,Ct,Yt,Qs,Yo,hi,Xs,ui,Wa,D,Zo,mi,Ys,fi,_i,Zs,gi,bi,Zt,ki,en,yi,er,vi,Ti,wi,eo,$i,tn,xi,ys,Bi,zi,Fi,ut,on,qi,tr,Ei,Mi,or,vs,Ci,nr,ji,Ua,jt,to,sr,nn,Pi,rr,Oi,Ha,G,sn,Ni,rn,Ai,ar,Ii,Li,Si,dr,Di,Gi,oo,Wi,an,Ui,ir,Hi,Ri,Ki,no,Vi,dn,Ji,Ts,Qi,Xi,Yi,mt,ln,Zi,lr,el,tl,cr,ws,ol,pr,nl,Ra,Pt,so,hr,cn,sl,ur,rl,Ka,it,al,mr,dl,il,fr,ll,cl,_r,pl,Va,De,pn,hl,hn,ul,$s,ml,fl,_l,un,gl,mn,bl,kl,yl,Ve,fn,vl,Ot,Tl,xs,wl,$l,gr,xl,Bl,zl,ro,Fl,ao,Ja,Nt,io,br,_n,ql,kr,El,Qa,lt,Ml,Bs,Cl,jl,yr,Pl,Ol,vr,Nl,Xa,Ge,gn,Al,bn,Il,zs,Ll,Sl,Dl,kn,Gl,yn,Wl,Ul,Hl,Je,vn,Rl,At,Kl,Fs,Vl,Jl,Tr,Ql,Xl,Yl,lo,Zl,co,Ya,It,po,wr,Tn,ec,$r,tc,Za,Lt,wn,oc,ho,$n,nc,uo,ed,St,mo,xr,xn,sc,Br,rc,td,xe,Bn,ac,zn,dc,qs,ic,lc,cc,Fn,pc,qn,hc,uc,mc,fo,fc,Qe,En,_c,Dt,gc,Es,bc,kc,zr,yc,vc,Tc,_o,wc,go,od,Gt,bo,Fr,Mn,$c,qr,xc,nd,Be,Cn,Bc,jn,zc,Ms,Fc,qc,Ec,Pn,Mc,On,Cc,jc,Pc,ko,Oc,de,Nn,Nc,Wt,Ac,Cs,Ic,Lc,Er,Sc,Dc,Gc,yo,Wc,Mr,Uc,Hc,Cr,jr,Pr,Or,Rc,Kc,Nr,Ar,Ir,An,Vc,Lr,Jc,Qc,sd,Ut,vo,Sr,In,Xc,Dr,Yc,rd,W,Ln,Zc,Sn,ep,js,tp,op,np,Dn,sp,Gn,rp,ap,dp,Gr,ip,lp,ct,Wr,Wn,cp,pp,Ur,Un,hp,up,Hr,Hn,mp,fp,Rr,Rn,_p,gp,Xe,Kn,bp,Ht,kp,Kr,yp,vp,Vr,Tp,wp,$p,To,xp,wo,Bp,$o,Vn,zp,xo,Fp,Bo,Jn,qp,zo,ad,Rt,Fo,Jr,Qn,Ep,Qr,Mp,dd,U,Xn,Cp,Yn,jp,Ps,Pp,Op,Np,Zn,Ap,es,Ip,Lp,Sp,Xr,Dp,Gp,pt,Yr,ts,Wp,Up,Zr,os,Hp,Rp,ea,ns,Kp,Vp,ta,ss,Jp,Qp,R,rs,Xp,Kt,Yp,oa,Zp,eh,na,th,oh,nh,qo,sh,sa,rh,ah,ra,aa,da,ia,dh,ih,la,ca,pa,ha,lh,ch,ua,ma,fa,_a,ph,hh,ga,ba,as,Eo,Mo,ka,ds,uh,ya,mh,fh,va,_h,gh,Co,is,bh,jo,kh,Po,ls,yh,Oo,id;return i=new ze({}),K=new ze({}),we=new ze({}),Ko=new ze({}),Vo=new We({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

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
[<span class="hljs-string">&quot;&lt;s&gt; That&#x27;s unfortunate. Are they trying to lose weight or are they just trying to be healthier?&lt;/s&gt;&quot;</span>]`}}),Jo=new ze({}),Qo=new A({props:{name:"class transformers.BlenderbotConfig",anchor:"transformers.BlenderbotConfig",parameters:[{name:"vocab_size",val:" = 8008"},{name:"max_position_embeddings",val:" = 128"},{name:"encoder_layers",val:" = 2"},{name:"encoder_ffn_dim",val:" = 10240"},{name:"encoder_attention_heads",val:" = 32"},{name:"decoder_layers",val:" = 24"},{name:"decoder_ffn_dim",val:" = 10240"},{name:"decoder_attention_heads",val:" = 32"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 2560"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"encoder_no_repeat_ngram_size",val:" = 3"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/configuration_blenderbot.py#L36"}}),Xt=new Ze({props:{anchor:"transformers.BlenderbotConfig.example",$$slots:{default:[ef]},$$scope:{ctx:z}}}),Yo=new ze({}),Zo=new A({props:{name:"class transformers.BlenderbotTokenizer",anchor:"transformers.BlenderbotTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
other word. (Blenderbot tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot.py#L92"}}),Zt=new Ze({props:{anchor:"transformers.BlenderbotTokenizer.example",$$slots:{default:[tf]},$$scope:{ctx:z}}}),eo=new gt({props:{$$slots:{default:[of]},$$scope:{ctx:z}}}),on=new A({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot.py#L397",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),nn=new ze({}),sn=new A({props:{name:"class transformers.BlenderbotTokenizerFast",anchor:"transformers.BlenderbotTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L50"}}),oo=new Ze({props:{anchor:"transformers.BlenderbotTokenizerFast.example",$$slots:{default:[nf]},$$scope:{ctx:z}}}),no=new gt({props:{$$slots:{default:[sf]},$$scope:{ctx:z}}}),ln=new A({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L282",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),cn=new ze({}),pn=new A({props:{name:"class transformers.BlenderbotModel",anchor:"transformers.BlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1089"}}),fn=new A({props:{name:"forward",anchor:"transformers.BlenderbotModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ro=new gt({props:{$$slots:{default:[rf]},$$scope:{ctx:z}}}),ao=new Ze({props:{anchor:"transformers.BlenderbotModel.forward.example",$$slots:{default:[af]},$$scope:{ctx:z}}}),_n=new ze({}),gn=new A({props:{name:"class transformers.BlenderbotForConditionalGeneration",anchor:"transformers.BlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1227"}}),vn=new A({props:{name:"forward",anchor:"transformers.BlenderbotForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),lo=new gt({props:{$$slots:{default:[df]},$$scope:{ctx:z}}}),co=new Ze({props:{anchor:"transformers.BlenderbotForConditionalGeneration.forward.example",$$slots:{default:[lf]},$$scope:{ctx:z}}}),Tn=new ze({}),wn=new A({props:{name:"class transformers.BlenderbotForCausalLM",anchor:"transformers.BlenderbotForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_blenderbot.py#L1422"}}),$n=new A({props:{name:"forward",anchor:"transformers.BlenderbotForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),uo=new Ze({props:{anchor:"transformers.BlenderbotForCausalLM.forward.example",$$slots:{default:[cf]},$$scope:{ctx:z}}}),xn=new ze({}),Bn=new A({props:{name:"class transformers.TFBlenderbotModel",anchor:"transformers.TFBlenderbotModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1151"}}),fo=new gt({props:{$$slots:{default:[pf]},$$scope:{ctx:z}}}),En=new A({props:{name:"call",anchor:"transformers.TFBlenderbotModel.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),_o=new gt({props:{$$slots:{default:[hf]},$$scope:{ctx:z}}}),go=new Ze({props:{anchor:"transformers.TFBlenderbotModel.call.example",$$slots:{default:[uf]},$$scope:{ctx:z}}}),Mn=new ze({}),Cn=new A({props:{name:"class transformers.TFBlenderbotForConditionalGeneration",anchor:"transformers.TFBlenderbotForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1273"}}),ko=new gt({props:{$$slots:{default:[mf]},$$scope:{ctx:z}}}),Nn=new A({props:{name:"call",anchor:"transformers.TFBlenderbotForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
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
`}}),yo=new gt({props:{$$slots:{default:[ff]},$$scope:{ctx:z}}}),In=new ze({}),Ln=new A({props:{name:"class transformers.FlaxBlenderbotModel",anchor:"transformers.FlaxBlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1218"}}),Kn=new A({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),To=new gt({props:{$$slots:{default:[_f]},$$scope:{ctx:z}}}),wo=new Ze({props:{anchor:"transformers.FlaxBlenderbotModel.__call__.example",$$slots:{default:[gf]},$$scope:{ctx:z}}}),Vn=new A({props:{name:"encode",anchor:"transformers.FlaxBlenderbotModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),xo=new Ze({props:{anchor:"transformers.FlaxBlenderbotModel.encode.example",$$slots:{default:[bf]},$$scope:{ctx:z}}}),Jn=new A({props:{name:"decode",anchor:"transformers.FlaxBlenderbotModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
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
`}}),zo=new Ze({props:{anchor:"transformers.FlaxBlenderbotModel.decode.example",$$slots:{default:[kf]},$$scope:{ctx:z}}}),Qn=new ze({}),Xn=new A({props:{name:"class transformers.FlaxBlenderbotForConditionalGeneration",anchor:"transformers.FlaxBlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1305"}}),rs=new A({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),qo=new gt({props:{$$slots:{default:[yf]},$$scope:{ctx:z}}}),ds=new ze({}),is=new A({props:{name:"encode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),jo=new Ze({props:{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.encode.example",$$slots:{default:[vf]},$$scope:{ctx:z}}}),ls=new A({props:{name:"decode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
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
`}}),Oo=new Ze({props:{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.example",$$slots:{default:[Tf]},$$scope:{ctx:z}}}),{c(){l=n("meta"),k=c(),f=n("h1"),m=n("a"),b=n("span"),y(i.$$.fragment),h=c(),F=n("span"),Q=a("Blenderbot"),I=c(),j=n("p"),oe=n("strong"),Ee=a("DISCLAIMER:"),q=a(" If you see something strange, file a "),ue=n("a"),me=a("Github Issue"),tt=a(" ."),Ue=c(),L=n("h2"),ne=n("a"),Me=n("span"),y(K.$$.fragment),ot=c(),Ce=n("span"),fe=a("Overview"),He=c(),se=n("p"),_e=a("The Blender chatbot model was proposed in "),ge=n("a"),nt=a("Recipes for building an open-domain chatbot"),je=a(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),C=c(),P=n("p"),st=a("The abstract of the paper is the following:"),re=c(),Fe=n("p"),Pe=n("em"),be=a(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Re=c(),V=n("p"),S=a("This model was contributed by "),ke=n("a"),ye=a("sshleifer"),rt=a(". The authors\u2019 code can be found "),ve=n("a"),Te=a("here"),at=a(" ."),Ke=c(),O=n("h2"),ae=n("a"),X=n("span"),y(we.$$.fragment),Oe=c(),N=n("span"),dt=a("Implementation Notes"),H=c(),J=n("ul"),$e=n("li"),B=a("Blenderbot uses a standard "),E=n("a"),bt=a("seq2seq model transformer"),Ne=a(" based architecture."),kt=c(),Ae=n("li"),M=a("Available checkpoints can be found in the "),Ie=n("a"),yt=a("model hub"),vt=a("."),Tt=c(),Y=n("li"),Z=a("This is the "),ee=n("em"),wt=a("default"),$t=a(` Blenderbot model class. However, some smaller checkpoints, such as
`),te=n("code"),xt=a("facebook/blenderbot_small_90M"),Bt=a(`, have a different architecture and consequently should be used with
`),qe=n("a"),zt=a("BlenderbotSmall"),Le=a("."),ht=c(),Ft=n("h2"),Jt=n("a"),Rs=n("span"),y(Ko.$$.fragment),Vd=c(),Ks=n("span"),Jd=a("Usage"),Ia=c(),_s=n("p"),Qd=a("Here is an example of model usage:"),La=c(),y(Vo.$$.fragment),Sa=c(),qt=n("h2"),Qt=n("a"),Vs=n("span"),y(Jo.$$.fragment),Xd=c(),Js=n("span"),Yd=a("BlenderbotConfig"),Da=c(),Se=n("div"),y(Qo.$$.fragment),Zd=c(),Et=n("p"),ei=a("This is the configuration class to store the configuration of a "),gs=n("a"),ti=a("BlenderbotModel"),oi=a(`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),Xo=n("a"),ni=a("facebook/blenderbot-3B"),si=a(" architecture."),ri=c(),Mt=n("p"),ai=a("Configuration objects inherit from "),bs=n("a"),di=a("PretrainedConfig"),ii=a(` and can be used to control the model outputs. Read the
documentation from `),ks=n("a"),li=a("PretrainedConfig"),ci=a(" for more information."),pi=c(),y(Xt.$$.fragment),Ga=c(),Ct=n("h2"),Yt=n("a"),Qs=n("span"),y(Yo.$$.fragment),hi=c(),Xs=n("span"),ui=a("BlenderbotTokenizer"),Wa=c(),D=n("div"),y(Zo.$$.fragment),mi=c(),Ys=n("p"),fi=a("Constructs a Blenderbot tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),_i=c(),Zs=n("p"),gi=a("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),bi=c(),y(Zt.$$.fragment),ki=c(),en=n("p"),yi=a("You can get around that behavior by passing "),er=n("code"),vi=a("add_prefix_space=True"),Ti=a(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),wi=c(),y(eo.$$.fragment),$i=c(),tn=n("p"),xi=a("This tokenizer inherits from "),ys=n("a"),Bi=a("PreTrainedTokenizer"),zi=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Fi=c(),ut=n("div"),y(on.$$.fragment),qi=c(),tr=n("p"),Ei=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Mi=c(),or=n("ul"),vs=n("li"),Ci=a("single sequence: "),nr=n("code"),ji=a("X </s>"),Ua=c(),jt=n("h2"),to=n("a"),sr=n("span"),y(nn.$$.fragment),Pi=c(),rr=n("span"),Oi=a("BlenderbotTokenizerFast"),Ha=c(),G=n("div"),y(sn.$$.fragment),Ni=c(),rn=n("p"),Ai=a("Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),ar=n("em"),Ii=a("tokenizers"),Li=a(` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),Si=c(),dr=n("p"),Di=a("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Gi=c(),y(oo.$$.fragment),Wi=c(),an=n("p"),Ui=a("You can get around that behavior by passing "),ir=n("code"),Hi=a("add_prefix_space=True"),Ri=a(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Ki=c(),y(no.$$.fragment),Vi=c(),dn=n("p"),Ji=a("This tokenizer inherits from "),Ts=n("a"),Qi=a("PreTrainedTokenizerFast"),Xi=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Yi=c(),mt=n("div"),y(ln.$$.fragment),Zi=c(),lr=n("p"),el=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),tl=c(),cr=n("ul"),ws=n("li"),ol=a("single sequence: "),pr=n("code"),nl=a("X </s>"),Ra=c(),Pt=n("h2"),so=n("a"),hr=n("span"),y(cn.$$.fragment),sl=c(),ur=n("span"),rl=a("BlenderbotModel"),Ka=c(),it=n("p"),al=a("See "),mr=n("code"),dl=a("transformers.BartModel"),il=a(" for arguments to "),fr=n("em"),ll=a("forward"),cl=a(" and "),_r=n("em"),pl=a("generate"),Va=c(),De=n("div"),y(pn.$$.fragment),hl=c(),hn=n("p"),ul=a(`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$s=n("a"),ml=a("PreTrainedModel"),fl=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_l=c(),un=n("p"),gl=a("This model is also a PyTorch "),mn=n("a"),bl=a("torch.nn.Module"),kl=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yl=c(),Ve=n("div"),y(fn.$$.fragment),vl=c(),Ot=n("p"),Tl=a("The "),xs=n("a"),wl=a("BlenderbotModel"),$l=a(" forward method, overrides the "),gr=n("code"),xl=a("__call__"),Bl=a(" special method."),zl=c(),y(ro.$$.fragment),Fl=c(),y(ao.$$.fragment),Ja=c(),Nt=n("h2"),io=n("a"),br=n("span"),y(_n.$$.fragment),ql=c(),kr=n("span"),El=a("BlenderbotForConditionalGeneration"),Qa=c(),lt=n("p"),Ml=a("See "),Bs=n("a"),Cl=a("BartForConditionalGeneration"),jl=a(" for arguments to "),yr=n("em"),Pl=a("forward"),Ol=a(" and "),vr=n("em"),Nl=a("generate"),Xa=c(),Ge=n("div"),y(gn.$$.fragment),Al=c(),bn=n("p"),Il=a(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),zs=n("a"),Ll=a("PreTrainedModel"),Sl=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dl=c(),kn=n("p"),Gl=a("This model is also a PyTorch "),yn=n("a"),Wl=a("torch.nn.Module"),Ul=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hl=c(),Je=n("div"),y(vn.$$.fragment),Rl=c(),At=n("p"),Kl=a("The "),Fs=n("a"),Vl=a("BlenderbotForConditionalGeneration"),Jl=a(" forward method, overrides the "),Tr=n("code"),Ql=a("__call__"),Xl=a(" special method."),Yl=c(),y(lo.$$.fragment),Zl=c(),y(co.$$.fragment),Ya=c(),It=n("h2"),po=n("a"),wr=n("span"),y(Tn.$$.fragment),ec=c(),$r=n("span"),tc=a("BlenderbotForCausalLM"),Za=c(),Lt=n("div"),y(wn.$$.fragment),oc=c(),ho=n("div"),y($n.$$.fragment),nc=c(),y(uo.$$.fragment),ed=c(),St=n("h2"),mo=n("a"),xr=n("span"),y(xn.$$.fragment),sc=c(),Br=n("span"),rc=a("TFBlenderbotModel"),td=c(),xe=n("div"),y(Bn.$$.fragment),ac=c(),zn=n("p"),dc=a(`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),qs=n("a"),ic=a("TFPreTrainedModel"),lc=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cc=c(),Fn=n("p"),pc=a("This model is also a "),qn=n("a"),hc=a("tf.keras.Model"),uc=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mc=c(),y(fo.$$.fragment),fc=c(),Qe=n("div"),y(En.$$.fragment),_c=c(),Dt=n("p"),gc=a("The "),Es=n("a"),bc=a("TFBlenderbotModel"),kc=a(" forward method, overrides the "),zr=n("code"),yc=a("__call__"),vc=a(" special method."),Tc=c(),y(_o.$$.fragment),wc=c(),y(go.$$.fragment),od=c(),Gt=n("h2"),bo=n("a"),Fr=n("span"),y(Mn.$$.fragment),$c=c(),qr=n("span"),xc=a("TFBlenderbotForConditionalGeneration"),nd=c(),Be=n("div"),y(Cn.$$.fragment),Bc=c(),jn=n("p"),zc=a(`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ms=n("a"),Fc=a("TFPreTrainedModel"),qc=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ec=c(),Pn=n("p"),Mc=a("This model is also a "),On=n("a"),Cc=a("tf.keras.Model"),jc=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pc=c(),y(ko.$$.fragment),Oc=c(),de=n("div"),y(Nn.$$.fragment),Nc=c(),Wt=n("p"),Ac=a("The "),Cs=n("a"),Ic=a("TFBlenderbotForConditionalGeneration"),Lc=a(" forward method, overrides the "),Er=n("code"),Sc=a("__call__"),Dc=a(" special method."),Gc=c(),y(yo.$$.fragment),Wc=c(),Mr=n("p"),Uc=a("Conversation example::"),Hc=c(),Cr=n("blockquote"),jr=n("blockquote"),Pr=n("blockquote"),Or=n("p"),Rc=a(`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),Kc=c(),Nr=n("blockquote"),Ar=n("blockquote"),Ir=n("blockquote"),An=n("p"),Vc=a(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Lr=n("s"),Jc=a(`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),Qc=a(` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),sd=c(),Ut=n("h2"),vo=n("a"),Sr=n("span"),y(In.$$.fragment),Xc=c(),Dr=n("span"),Yc=a("FlaxBlenderbotModel"),rd=c(),W=n("div"),y(Ln.$$.fragment),Zc=c(),Sn=n("p"),ep=a(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),js=n("a"),tp=a("FlaxPreTrainedModel"),op=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),np=c(),Dn=n("p"),sp=a(`This model is also a Flax Linen
`),Gn=n("a"),rp=a("flax.nn.Module"),ap=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),dp=c(),Gr=n("p"),ip=a("Finally, this model supports inherent JAX features such as:"),lp=c(),ct=n("ul"),Wr=n("li"),Wn=n("a"),cp=a("Just-In-Time (JIT) compilation"),pp=c(),Ur=n("li"),Un=n("a"),hp=a("Automatic Differentiation"),up=c(),Hr=n("li"),Hn=n("a"),mp=a("Vectorization"),fp=c(),Rr=n("li"),Rn=n("a"),_p=a("Parallelization"),gp=c(),Xe=n("div"),y(Kn.$$.fragment),bp=c(),Ht=n("p"),kp=a("The "),Kr=n("code"),yp=a("FlaxBlenderbotPreTrainedModel"),vp=a(" forward method, overrides the "),Vr=n("code"),Tp=a("__call__"),wp=a(" special method."),$p=c(),y(To.$$.fragment),xp=c(),y(wo.$$.fragment),Bp=c(),$o=n("div"),y(Vn.$$.fragment),zp=c(),y(xo.$$.fragment),Fp=c(),Bo=n("div"),y(Jn.$$.fragment),qp=c(),y(zo.$$.fragment),ad=c(),Rt=n("h2"),Fo=n("a"),Jr=n("span"),y(Qn.$$.fragment),Ep=c(),Qr=n("span"),Mp=a("FlaxBlenderbotForConditionalGeneration"),dd=c(),U=n("div"),y(Xn.$$.fragment),Cp=c(),Yn=n("p"),jp=a(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ps=n("a"),Pp=a("FlaxPreTrainedModel"),Op=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Np=c(),Zn=n("p"),Ap=a(`This model is also a Flax Linen
`),es=n("a"),Ip=a("flax.nn.Module"),Lp=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Sp=c(),Xr=n("p"),Dp=a("Finally, this model supports inherent JAX features such as:"),Gp=c(),pt=n("ul"),Yr=n("li"),ts=n("a"),Wp=a("Just-In-Time (JIT) compilation"),Up=c(),Zr=n("li"),os=n("a"),Hp=a("Automatic Differentiation"),Rp=c(),ea=n("li"),ns=n("a"),Kp=a("Vectorization"),Vp=c(),ta=n("li"),ss=n("a"),Jp=a("Parallelization"),Qp=c(),R=n("div"),y(rs.$$.fragment),Xp=c(),Kt=n("p"),Yp=a("The "),oa=n("code"),Zp=a("FlaxBlenderbotPreTrainedModel"),eh=a(" forward method, overrides the "),na=n("code"),th=a("__call__"),oh=a(" special method."),nh=c(),y(qo.$$.fragment),sh=c(),sa=n("p"),rh=a("Conversation example::"),ah=c(),ra=n("blockquote"),aa=n("blockquote"),da=n("blockquote"),ia=n("p"),dh=a("from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),ih=c(),la=n("blockquote"),ca=n("blockquote"),pa=n("blockquote"),ha=n("p"),lh=a(`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),ch=c(),ua=n("blockquote"),ma=n("blockquote"),fa=n("blockquote"),_a=n("p"),ph=a(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),hh=c(),ga=n("blockquote"),ba=n("blockquote"),as=n("blockquote"),Eo=n("h1"),Mo=n("a"),ka=n("span"),y(ds.$$.fragment),uh=c(),ya=n("span"),mh=a("Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),fh=c(),va=n("p"),_h=a(`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),gh=c(),Co=n("div"),y(is.$$.fragment),bh=c(),y(jo.$$.fragment),kh=c(),Po=n("div"),y(ls.$$.fragment),yh=c(),y(Oo.$$.fragment),this.h()},l(o){const g=Ym('[data-svelte="svelte-1phssyn"]',document.head);l=s(g,"META",{name:!0,content:!0}),g.forEach(t),k=p(o),f=s(o,"H1",{class:!0});var cs=r(f);m=s(cs,"A",{id:!0,class:!0,href:!0});var Ta=r(m);b=s(Ta,"SPAN",{});var wa=r(b);v(i.$$.fragment,wa),wa.forEach(t),Ta.forEach(t),h=p(cs),F=s(cs,"SPAN",{});var $a=r(F);Q=d($a,"Blenderbot"),$a.forEach(t),cs.forEach(t),I=p(o),j=s(o,"P",{});var No=r(j);oe=s(No,"STRONG",{});var xa=r(oe);Ee=d(xa,"DISCLAIMER:"),xa.forEach(t),q=d(No," If you see something strange, file a "),ue=s(No,"A",{href:!0,rel:!0});var Ba=r(ue);me=d(Ba,"Github Issue"),Ba.forEach(t),tt=d(No," ."),No.forEach(t),Ue=p(o),L=s(o,"H2",{class:!0});var ps=r(L);ne=s(ps,"A",{id:!0,class:!0,href:!0});var za=r(ne);Me=s(za,"SPAN",{});var Fa=r(Me);v(K.$$.fragment,Fa),Fa.forEach(t),za.forEach(t),ot=p(ps),Ce=s(ps,"SPAN",{});var qa=r(Ce);fe=d(qa,"Overview"),qa.forEach(t),ps.forEach(t),He=p(o),se=s(o,"P",{});var hs=r(se);_e=d(hs,"The Blender chatbot model was proposed in "),ge=s(hs,"A",{href:!0,rel:!0});var Ea=r(ge);nt=d(Ea,"Recipes for building an open-domain chatbot"),Ea.forEach(t),je=d(hs,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),hs.forEach(t),C=p(o),P=s(o,"P",{});var Ma=r(P);st=d(Ma,"The abstract of the paper is the following:"),Ma.forEach(t),re=p(o),Fe=s(o,"P",{});var Ca=r(Fe);Pe=s(Ca,"EM",{});var ja=r(Pe);be=d(ja,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),ja.forEach(t),Ca.forEach(t),Re=p(o),V=s(o,"P",{});var Vt=r(V);S=d(Vt,"This model was contributed by "),ke=s(Vt,"A",{href:!0,rel:!0});var Pa=r(ke);ye=d(Pa,"sshleifer"),Pa.forEach(t),rt=d(Vt,". The authors\u2019 code can be found "),ve=s(Vt,"A",{href:!0,rel:!0});var Oa=r(ve);Te=d(Oa,"here"),Oa.forEach(t),at=d(Vt," ."),Vt.forEach(t),Ke=p(o),O=s(o,"H2",{class:!0});var us=r(O);ae=s(us,"A",{id:!0,class:!0,href:!0});var Na=r(ae);X=s(Na,"SPAN",{});var Aa=r(X);v(we.$$.fragment,Aa),Aa.forEach(t),Na.forEach(t),Oe=p(us),N=s(us,"SPAN",{});var wh=r(N);dt=d(wh,"Implementation Notes"),wh.forEach(t),us.forEach(t),H=p(o),J=s(o,"UL",{});var Os=r(J);$e=s(Os,"LI",{});var ld=r($e);B=d(ld,"Blenderbot uses a standard "),E=s(ld,"A",{href:!0,rel:!0});var $h=r(E);bt=d($h,"seq2seq model transformer"),$h.forEach(t),Ne=d(ld," based architecture."),ld.forEach(t),kt=p(Os),Ae=s(Os,"LI",{});var cd=r(Ae);M=d(cd,"Available checkpoints can be found in the "),Ie=s(cd,"A",{href:!0,rel:!0});var xh=r(Ie);yt=d(xh,"model hub"),xh.forEach(t),vt=d(cd,"."),cd.forEach(t),Tt=p(Os),Y=s(Os,"LI",{});var Ao=r(Y);Z=d(Ao,"This is the "),ee=s(Ao,"EM",{});var Bh=r(ee);wt=d(Bh,"default"),Bh.forEach(t),$t=d(Ao,` Blenderbot model class. However, some smaller checkpoints, such as
`),te=s(Ao,"CODE",{});var zh=r(te);xt=d(zh,"facebook/blenderbot_small_90M"),zh.forEach(t),Bt=d(Ao,`, have a different architecture and consequently should be used with
`),qe=s(Ao,"A",{href:!0});var Fh=r(qe);zt=d(Fh,"BlenderbotSmall"),Fh.forEach(t),Le=d(Ao,"."),Ao.forEach(t),Os.forEach(t),ht=p(o),Ft=s(o,"H2",{class:!0});var pd=r(Ft);Jt=s(pd,"A",{id:!0,class:!0,href:!0});var qh=r(Jt);Rs=s(qh,"SPAN",{});var Eh=r(Rs);v(Ko.$$.fragment,Eh),Eh.forEach(t),qh.forEach(t),Vd=p(pd),Ks=s(pd,"SPAN",{});var Mh=r(Ks);Jd=d(Mh,"Usage"),Mh.forEach(t),pd.forEach(t),Ia=p(o),_s=s(o,"P",{});var Ch=r(_s);Qd=d(Ch,"Here is an example of model usage:"),Ch.forEach(t),La=p(o),v(Vo.$$.fragment,o),Sa=p(o),qt=s(o,"H2",{class:!0});var hd=r(qt);Qt=s(hd,"A",{id:!0,class:!0,href:!0});var jh=r(Qt);Vs=s(jh,"SPAN",{});var Ph=r(Vs);v(Jo.$$.fragment,Ph),Ph.forEach(t),jh.forEach(t),Xd=p(hd),Js=s(hd,"SPAN",{});var Oh=r(Js);Yd=d(Oh,"BlenderbotConfig"),Oh.forEach(t),hd.forEach(t),Da=p(o),Se=s(o,"DIV",{class:!0});var Io=r(Se);v(Qo.$$.fragment,Io),Zd=p(Io),Et=s(Io,"P",{});var Ns=r(Et);ei=d(Ns,"This is the configuration class to store the configuration of a "),gs=s(Ns,"A",{href:!0});var Nh=r(gs);ti=d(Nh,"BlenderbotModel"),Nh.forEach(t),oi=d(Ns,`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),Xo=s(Ns,"A",{href:!0,rel:!0});var Ah=r(Xo);ni=d(Ah,"facebook/blenderbot-3B"),Ah.forEach(t),si=d(Ns," architecture."),Ns.forEach(t),ri=p(Io),Mt=s(Io,"P",{});var As=r(Mt);ai=d(As,"Configuration objects inherit from "),bs=s(As,"A",{href:!0});var Ih=r(bs);di=d(Ih,"PretrainedConfig"),Ih.forEach(t),ii=d(As,` and can be used to control the model outputs. Read the
documentation from `),ks=s(As,"A",{href:!0});var Lh=r(ks);li=d(Lh,"PretrainedConfig"),Lh.forEach(t),ci=d(As," for more information."),As.forEach(t),pi=p(Io),v(Xt.$$.fragment,Io),Io.forEach(t),Ga=p(o),Ct=s(o,"H2",{class:!0});var ud=r(Ct);Yt=s(ud,"A",{id:!0,class:!0,href:!0});var Sh=r(Yt);Qs=s(Sh,"SPAN",{});var Dh=r(Qs);v(Yo.$$.fragment,Dh),Dh.forEach(t),Sh.forEach(t),hi=p(ud),Xs=s(ud,"SPAN",{});var Gh=r(Xs);ui=d(Gh,"BlenderbotTokenizer"),Gh.forEach(t),ud.forEach(t),Wa=p(o),D=s(o,"DIV",{class:!0});var ie=r(D);v(Zo.$$.fragment,ie),mi=p(ie),Ys=s(ie,"P",{});var Wh=r(Ys);fi=d(Wh,"Constructs a Blenderbot tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),Wh.forEach(t),_i=p(ie),Zs=s(ie,"P",{});var Uh=r(Zs);gi=d(Uh,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Uh.forEach(t),bi=p(ie),v(Zt.$$.fragment,ie),ki=p(ie),en=s(ie,"P",{});var md=r(en);yi=d(md,"You can get around that behavior by passing "),er=s(md,"CODE",{});var Hh=r(er);vi=d(Hh,"add_prefix_space=True"),Hh.forEach(t),Ti=d(md,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),md.forEach(t),wi=p(ie),v(eo.$$.fragment,ie),$i=p(ie),tn=s(ie,"P",{});var fd=r(tn);xi=d(fd,"This tokenizer inherits from "),ys=s(fd,"A",{href:!0});var Rh=r(ys);Bi=d(Rh,"PreTrainedTokenizer"),Rh.forEach(t),zi=d(fd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),fd.forEach(t),Fi=p(ie),ut=s(ie,"DIV",{class:!0});var Is=r(ut);v(on.$$.fragment,Is),qi=p(Is),tr=s(Is,"P",{});var Kh=r(tr);Ei=d(Kh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Kh.forEach(t),Mi=p(Is),or=s(Is,"UL",{});var Vh=r(or);vs=s(Vh,"LI",{});var vh=r(vs);Ci=d(vh,"single sequence: "),nr=s(vh,"CODE",{});var Jh=r(nr);ji=d(Jh,"X </s>"),Jh.forEach(t),vh.forEach(t),Vh.forEach(t),Is.forEach(t),ie.forEach(t),Ua=p(o),jt=s(o,"H2",{class:!0});var _d=r(jt);to=s(_d,"A",{id:!0,class:!0,href:!0});var Qh=r(to);sr=s(Qh,"SPAN",{});var Xh=r(sr);v(nn.$$.fragment,Xh),Xh.forEach(t),Qh.forEach(t),Pi=p(_d),rr=s(_d,"SPAN",{});var Yh=r(rr);Oi=d(Yh,"BlenderbotTokenizerFast"),Yh.forEach(t),_d.forEach(t),Ha=p(o),G=s(o,"DIV",{class:!0});var le=r(G);v(sn.$$.fragment,le),Ni=p(le),rn=s(le,"P",{});var gd=r(rn);Ai=d(gd,"Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),ar=s(gd,"EM",{});var Zh=r(ar);Ii=d(Zh,"tokenizers"),Zh.forEach(t),Li=d(gd,` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),gd.forEach(t),Si=p(le),dr=s(le,"P",{});var eu=r(dr);Di=d(eu,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),eu.forEach(t),Gi=p(le),v(oo.$$.fragment,le),Wi=p(le),an=s(le,"P",{});var bd=r(an);Ui=d(bd,"You can get around that behavior by passing "),ir=s(bd,"CODE",{});var tu=r(ir);Hi=d(tu,"add_prefix_space=True"),tu.forEach(t),Ri=d(bd,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),bd.forEach(t),Ki=p(le),v(no.$$.fragment,le),Vi=p(le),dn=s(le,"P",{});var kd=r(dn);Ji=d(kd,"This tokenizer inherits from "),Ts=s(kd,"A",{href:!0});var ou=r(Ts);Qi=d(ou,"PreTrainedTokenizerFast"),ou.forEach(t),Xi=d(kd,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),kd.forEach(t),Yi=p(le),mt=s(le,"DIV",{class:!0});var Ls=r(mt);v(ln.$$.fragment,Ls),Zi=p(Ls),lr=s(Ls,"P",{});var nu=r(lr);el=d(nu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),nu.forEach(t),tl=p(Ls),cr=s(Ls,"UL",{});var su=r(cr);ws=s(su,"LI",{});var Th=r(ws);ol=d(Th,"single sequence: "),pr=s(Th,"CODE",{});var ru=r(pr);nl=d(ru,"X </s>"),ru.forEach(t),Th.forEach(t),su.forEach(t),Ls.forEach(t),le.forEach(t),Ra=p(o),Pt=s(o,"H2",{class:!0});var yd=r(Pt);so=s(yd,"A",{id:!0,class:!0,href:!0});var au=r(so);hr=s(au,"SPAN",{});var du=r(hr);v(cn.$$.fragment,du),du.forEach(t),au.forEach(t),sl=p(yd),ur=s(yd,"SPAN",{});var iu=r(ur);rl=d(iu,"BlenderbotModel"),iu.forEach(t),yd.forEach(t),Ka=p(o),it=s(o,"P",{});var ms=r(it);al=d(ms,"See "),mr=s(ms,"CODE",{});var lu=r(mr);dl=d(lu,"transformers.BartModel"),lu.forEach(t),il=d(ms," for arguments to "),fr=s(ms,"EM",{});var cu=r(fr);ll=d(cu,"forward"),cu.forEach(t),cl=d(ms," and "),_r=s(ms,"EM",{});var pu=r(_r);pl=d(pu,"generate"),pu.forEach(t),ms.forEach(t),Va=p(o),De=s(o,"DIV",{class:!0});var Lo=r(De);v(pn.$$.fragment,Lo),hl=p(Lo),hn=s(Lo,"P",{});var vd=r(hn);ul=d(vd,`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$s=s(vd,"A",{href:!0});var hu=r($s);ml=d(hu,"PreTrainedModel"),hu.forEach(t),fl=d(vd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vd.forEach(t),_l=p(Lo),un=s(Lo,"P",{});var Td=r(un);gl=d(Td,"This model is also a PyTorch "),mn=s(Td,"A",{href:!0,rel:!0});var uu=r(mn);bl=d(uu,"torch.nn.Module"),uu.forEach(t),kl=d(Td,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Td.forEach(t),yl=p(Lo),Ve=s(Lo,"DIV",{class:!0});var So=r(Ve);v(fn.$$.fragment,So),vl=p(So),Ot=s(So,"P",{});var Ss=r(Ot);Tl=d(Ss,"The "),xs=s(Ss,"A",{href:!0});var mu=r(xs);wl=d(mu,"BlenderbotModel"),mu.forEach(t),$l=d(Ss," forward method, overrides the "),gr=s(Ss,"CODE",{});var fu=r(gr);xl=d(fu,"__call__"),fu.forEach(t),Bl=d(Ss," special method."),Ss.forEach(t),zl=p(So),v(ro.$$.fragment,So),Fl=p(So),v(ao.$$.fragment,So),So.forEach(t),Lo.forEach(t),Ja=p(o),Nt=s(o,"H2",{class:!0});var wd=r(Nt);io=s(wd,"A",{id:!0,class:!0,href:!0});var _u=r(io);br=s(_u,"SPAN",{});var gu=r(br);v(_n.$$.fragment,gu),gu.forEach(t),_u.forEach(t),ql=p(wd),kr=s(wd,"SPAN",{});var bu=r(kr);El=d(bu,"BlenderbotForConditionalGeneration"),bu.forEach(t),wd.forEach(t),Qa=p(o),lt=s(o,"P",{});var fs=r(lt);Ml=d(fs,"See "),Bs=s(fs,"A",{href:!0});var ku=r(Bs);Cl=d(ku,"BartForConditionalGeneration"),ku.forEach(t),jl=d(fs," for arguments to "),yr=s(fs,"EM",{});var yu=r(yr);Pl=d(yu,"forward"),yu.forEach(t),Ol=d(fs," and "),vr=s(fs,"EM",{});var vu=r(vr);Nl=d(vu,"generate"),vu.forEach(t),fs.forEach(t),Xa=p(o),Ge=s(o,"DIV",{class:!0});var Do=r(Ge);v(gn.$$.fragment,Do),Al=p(Do),bn=s(Do,"P",{});var $d=r(bn);Il=d($d,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),zs=s($d,"A",{href:!0});var Tu=r(zs);Ll=d(Tu,"PreTrainedModel"),Tu.forEach(t),Sl=d($d,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$d.forEach(t),Dl=p(Do),kn=s(Do,"P",{});var xd=r(kn);Gl=d(xd,"This model is also a PyTorch "),yn=s(xd,"A",{href:!0,rel:!0});var wu=r(yn);Wl=d(wu,"torch.nn.Module"),wu.forEach(t),Ul=d(xd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xd.forEach(t),Hl=p(Do),Je=s(Do,"DIV",{class:!0});var Go=r(Je);v(vn.$$.fragment,Go),Rl=p(Go),At=s(Go,"P",{});var Ds=r(At);Kl=d(Ds,"The "),Fs=s(Ds,"A",{href:!0});var $u=r(Fs);Vl=d($u,"BlenderbotForConditionalGeneration"),$u.forEach(t),Jl=d(Ds," forward method, overrides the "),Tr=s(Ds,"CODE",{});var xu=r(Tr);Ql=d(xu,"__call__"),xu.forEach(t),Xl=d(Ds," special method."),Ds.forEach(t),Yl=p(Go),v(lo.$$.fragment,Go),Zl=p(Go),v(co.$$.fragment,Go),Go.forEach(t),Do.forEach(t),Ya=p(o),It=s(o,"H2",{class:!0});var Bd=r(It);po=s(Bd,"A",{id:!0,class:!0,href:!0});var Bu=r(po);wr=s(Bu,"SPAN",{});var zu=r(wr);v(Tn.$$.fragment,zu),zu.forEach(t),Bu.forEach(t),ec=p(Bd),$r=s(Bd,"SPAN",{});var Fu=r($r);tc=d(Fu,"BlenderbotForCausalLM"),Fu.forEach(t),Bd.forEach(t),Za=p(o),Lt=s(o,"DIV",{class:!0});var zd=r(Lt);v(wn.$$.fragment,zd),oc=p(zd),ho=s(zd,"DIV",{class:!0});var Fd=r(ho);v($n.$$.fragment,Fd),nc=p(Fd),v(uo.$$.fragment,Fd),Fd.forEach(t),zd.forEach(t),ed=p(o),St=s(o,"H2",{class:!0});var qd=r(St);mo=s(qd,"A",{id:!0,class:!0,href:!0});var qu=r(mo);xr=s(qu,"SPAN",{});var Eu=r(xr);v(xn.$$.fragment,Eu),Eu.forEach(t),qu.forEach(t),sc=p(qd),Br=s(qd,"SPAN",{});var Mu=r(Br);rc=d(Mu,"TFBlenderbotModel"),Mu.forEach(t),qd.forEach(t),td=p(o),xe=s(o,"DIV",{class:!0});var ft=r(xe);v(Bn.$$.fragment,ft),ac=p(ft),zn=s(ft,"P",{});var Ed=r(zn);dc=d(Ed,`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),qs=s(Ed,"A",{href:!0});var Cu=r(qs);ic=d(Cu,"TFPreTrainedModel"),Cu.forEach(t),lc=d(Ed,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ed.forEach(t),cc=p(ft),Fn=s(ft,"P",{});var Md=r(Fn);pc=d(Md,"This model is also a "),qn=s(Md,"A",{href:!0,rel:!0});var ju=r(qn);hc=d(ju,"tf.keras.Model"),ju.forEach(t),uc=d(Md,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Md.forEach(t),mc=p(ft),v(fo.$$.fragment,ft),fc=p(ft),Qe=s(ft,"DIV",{class:!0});var Wo=r(Qe);v(En.$$.fragment,Wo),_c=p(Wo),Dt=s(Wo,"P",{});var Gs=r(Dt);gc=d(Gs,"The "),Es=s(Gs,"A",{href:!0});var Pu=r(Es);bc=d(Pu,"TFBlenderbotModel"),Pu.forEach(t),kc=d(Gs," forward method, overrides the "),zr=s(Gs,"CODE",{});var Ou=r(zr);yc=d(Ou,"__call__"),Ou.forEach(t),vc=d(Gs," special method."),Gs.forEach(t),Tc=p(Wo),v(_o.$$.fragment,Wo),wc=p(Wo),v(go.$$.fragment,Wo),Wo.forEach(t),ft.forEach(t),od=p(o),Gt=s(o,"H2",{class:!0});var Cd=r(Gt);bo=s(Cd,"A",{id:!0,class:!0,href:!0});var Nu=r(bo);Fr=s(Nu,"SPAN",{});var Au=r(Fr);v(Mn.$$.fragment,Au),Au.forEach(t),Nu.forEach(t),$c=p(Cd),qr=s(Cd,"SPAN",{});var Iu=r(qr);xc=d(Iu,"TFBlenderbotForConditionalGeneration"),Iu.forEach(t),Cd.forEach(t),nd=p(o),Be=s(o,"DIV",{class:!0});var _t=r(Be);v(Cn.$$.fragment,_t),Bc=p(_t),jn=s(_t,"P",{});var jd=r(jn);zc=d(jd,`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ms=s(jd,"A",{href:!0});var Lu=r(Ms);Fc=d(Lu,"TFPreTrainedModel"),Lu.forEach(t),qc=d(jd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jd.forEach(t),Ec=p(_t),Pn=s(_t,"P",{});var Pd=r(Pn);Mc=d(Pd,"This model is also a "),On=s(Pd,"A",{href:!0,rel:!0});var Su=r(On);Cc=d(Su,"tf.keras.Model"),Su.forEach(t),jc=d(Pd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pd.forEach(t),Pc=p(_t),v(ko.$$.fragment,_t),Oc=p(_t),de=s(_t,"DIV",{class:!0});var Ye=r(de);v(Nn.$$.fragment,Ye),Nc=p(Ye),Wt=s(Ye,"P",{});var Ws=r(Wt);Ac=d(Ws,"The "),Cs=s(Ws,"A",{href:!0});var Du=r(Cs);Ic=d(Du,"TFBlenderbotForConditionalGeneration"),Du.forEach(t),Lc=d(Ws," forward method, overrides the "),Er=s(Ws,"CODE",{});var Gu=r(Er);Sc=d(Gu,"__call__"),Gu.forEach(t),Dc=d(Ws," special method."),Ws.forEach(t),Gc=p(Ye),v(yo.$$.fragment,Ye),Wc=p(Ye),Mr=s(Ye,"P",{});var Wu=r(Mr);Uc=d(Wu,"Conversation example::"),Wu.forEach(t),Hc=p(Ye),Cr=s(Ye,"BLOCKQUOTE",{});var Uu=r(Cr);jr=s(Uu,"BLOCKQUOTE",{});var Hu=r(jr);Pr=s(Hu,"BLOCKQUOTE",{});var Ru=r(Pr);Or=s(Ru,"P",{});var Ku=r(Or);Rc=d(Ku,`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),Ku.forEach(t),Ru.forEach(t),Hu.forEach(t),Uu.forEach(t),Kc=p(Ye),Nr=s(Ye,"BLOCKQUOTE",{});var Vu=r(Nr);Ar=s(Vu,"BLOCKQUOTE",{});var Ju=r(Ar);Ir=s(Ju,"BLOCKQUOTE",{});var Qu=r(Ir);An=s(Qu,"P",{});var Od=r(An);Vc=d(Od,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Lr=s(Od,"S",{});var Xu=r(Lr);Jc=d(Xu,`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),Xu.forEach(t),Qc=d(Od,` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Od.forEach(t),Qu.forEach(t),Ju.forEach(t),Vu.forEach(t),Ye.forEach(t),_t.forEach(t),sd=p(o),Ut=s(o,"H2",{class:!0});var Nd=r(Ut);vo=s(Nd,"A",{id:!0,class:!0,href:!0});var Yu=r(vo);Sr=s(Yu,"SPAN",{});var Zu=r(Sr);v(In.$$.fragment,Zu),Zu.forEach(t),Yu.forEach(t),Xc=p(Nd),Dr=s(Nd,"SPAN",{});var em=r(Dr);Yc=d(em,"FlaxBlenderbotModel"),em.forEach(t),Nd.forEach(t),rd=p(o),W=s(o,"DIV",{class:!0});var ce=r(W);v(Ln.$$.fragment,ce),Zc=p(ce),Sn=s(ce,"P",{});var Ad=r(Sn);ep=d(Ad,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),js=s(Ad,"A",{href:!0});var tm=r(js);tp=d(tm,"FlaxPreTrainedModel"),tm.forEach(t),op=d(Ad,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ad.forEach(t),np=p(ce),Dn=s(ce,"P",{});var Id=r(Dn);sp=d(Id,`This model is also a Flax Linen
`),Gn=s(Id,"A",{href:!0,rel:!0});var om=r(Gn);rp=d(om,"flax.nn.Module"),om.forEach(t),ap=d(Id,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Id.forEach(t),dp=p(ce),Gr=s(ce,"P",{});var nm=r(Gr);ip=d(nm,"Finally, this model supports inherent JAX features such as:"),nm.forEach(t),lp=p(ce),ct=s(ce,"UL",{});var Uo=r(ct);Wr=s(Uo,"LI",{});var sm=r(Wr);Wn=s(sm,"A",{href:!0,rel:!0});var rm=r(Wn);cp=d(rm,"Just-In-Time (JIT) compilation"),rm.forEach(t),sm.forEach(t),pp=p(Uo),Ur=s(Uo,"LI",{});var am=r(Ur);Un=s(am,"A",{href:!0,rel:!0});var dm=r(Un);hp=d(dm,"Automatic Differentiation"),dm.forEach(t),am.forEach(t),up=p(Uo),Hr=s(Uo,"LI",{});var im=r(Hr);Hn=s(im,"A",{href:!0,rel:!0});var lm=r(Hn);mp=d(lm,"Vectorization"),lm.forEach(t),im.forEach(t),fp=p(Uo),Rr=s(Uo,"LI",{});var cm=r(Rr);Rn=s(cm,"A",{href:!0,rel:!0});var pm=r(Rn);_p=d(pm,"Parallelization"),pm.forEach(t),cm.forEach(t),Uo.forEach(t),gp=p(ce),Xe=s(ce,"DIV",{class:!0});var Ho=r(Xe);v(Kn.$$.fragment,Ho),bp=p(Ho),Ht=s(Ho,"P",{});var Us=r(Ht);kp=d(Us,"The "),Kr=s(Us,"CODE",{});var hm=r(Kr);yp=d(hm,"FlaxBlenderbotPreTrainedModel"),hm.forEach(t),vp=d(Us," forward method, overrides the "),Vr=s(Us,"CODE",{});var um=r(Vr);Tp=d(um,"__call__"),um.forEach(t),wp=d(Us," special method."),Us.forEach(t),$p=p(Ho),v(To.$$.fragment,Ho),xp=p(Ho),v(wo.$$.fragment,Ho),Ho.forEach(t),Bp=p(ce),$o=s(ce,"DIV",{class:!0});var Ld=r($o);v(Vn.$$.fragment,Ld),zp=p(Ld),v(xo.$$.fragment,Ld),Ld.forEach(t),Fp=p(ce),Bo=s(ce,"DIV",{class:!0});var Sd=r(Bo);v(Jn.$$.fragment,Sd),qp=p(Sd),v(zo.$$.fragment,Sd),Sd.forEach(t),ce.forEach(t),ad=p(o),Rt=s(o,"H2",{class:!0});var Dd=r(Rt);Fo=s(Dd,"A",{id:!0,class:!0,href:!0});var mm=r(Fo);Jr=s(mm,"SPAN",{});var fm=r(Jr);v(Qn.$$.fragment,fm),fm.forEach(t),mm.forEach(t),Ep=p(Dd),Qr=s(Dd,"SPAN",{});var _m=r(Qr);Mp=d(_m,"FlaxBlenderbotForConditionalGeneration"),_m.forEach(t),Dd.forEach(t),dd=p(o),U=s(o,"DIV",{class:!0});var pe=r(U);v(Xn.$$.fragment,pe),Cp=p(pe),Yn=s(pe,"P",{});var Gd=r(Yn);jp=d(Gd,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ps=s(Gd,"A",{href:!0});var gm=r(Ps);Pp=d(gm,"FlaxPreTrainedModel"),gm.forEach(t),Op=d(Gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gd.forEach(t),Np=p(pe),Zn=s(pe,"P",{});var Wd=r(Zn);Ap=d(Wd,`This model is also a Flax Linen
`),es=s(Wd,"A",{href:!0,rel:!0});var bm=r(es);Ip=d(bm,"flax.nn.Module"),bm.forEach(t),Lp=d(Wd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Wd.forEach(t),Sp=p(pe),Xr=s(pe,"P",{});var km=r(Xr);Dp=d(km,"Finally, this model supports inherent JAX features such as:"),km.forEach(t),Gp=p(pe),pt=s(pe,"UL",{});var Ro=r(pt);Yr=s(Ro,"LI",{});var ym=r(Yr);ts=s(ym,"A",{href:!0,rel:!0});var vm=r(ts);Wp=d(vm,"Just-In-Time (JIT) compilation"),vm.forEach(t),ym.forEach(t),Up=p(Ro),Zr=s(Ro,"LI",{});var Tm=r(Zr);os=s(Tm,"A",{href:!0,rel:!0});var wm=r(os);Hp=d(wm,"Automatic Differentiation"),wm.forEach(t),Tm.forEach(t),Rp=p(Ro),ea=s(Ro,"LI",{});var $m=r(ea);ns=s($m,"A",{href:!0,rel:!0});var xm=r(ns);Kp=d(xm,"Vectorization"),xm.forEach(t),$m.forEach(t),Vp=p(Ro),ta=s(Ro,"LI",{});var Bm=r(ta);ss=s(Bm,"A",{href:!0,rel:!0});var zm=r(ss);Jp=d(zm,"Parallelization"),zm.forEach(t),Bm.forEach(t),Ro.forEach(t),Qp=p(pe),R=s(pe,"DIV",{class:!0});var he=r(R);v(rs.$$.fragment,he),Xp=p(he),Kt=s(he,"P",{});var Hs=r(Kt);Yp=d(Hs,"The "),oa=s(Hs,"CODE",{});var Fm=r(oa);Zp=d(Fm,"FlaxBlenderbotPreTrainedModel"),Fm.forEach(t),eh=d(Hs," forward method, overrides the "),na=s(Hs,"CODE",{});var qm=r(na);th=d(qm,"__call__"),qm.forEach(t),oh=d(Hs," special method."),Hs.forEach(t),nh=p(he),v(qo.$$.fragment,he),sh=p(he),sa=s(he,"P",{});var Em=r(sa);rh=d(Em,"Conversation example::"),Em.forEach(t),ah=p(he),ra=s(he,"BLOCKQUOTE",{});var Mm=r(ra);aa=s(Mm,"BLOCKQUOTE",{});var Cm=r(aa);da=s(Cm,"BLOCKQUOTE",{});var jm=r(da);ia=s(jm,"P",{});var Pm=r(ia);dh=d(Pm,"from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),Pm.forEach(t),jm.forEach(t),Cm.forEach(t),Mm.forEach(t),ih=p(he),la=s(he,"BLOCKQUOTE",{});var Om=r(la);ca=s(Om,"BLOCKQUOTE",{});var Nm=r(ca);pa=s(Nm,"BLOCKQUOTE",{});var Am=r(pa);ha=s(Am,"P",{});var Im=r(ha);lh=d(Im,`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),Im.forEach(t),Am.forEach(t),Nm.forEach(t),Om.forEach(t),ch=p(he),ua=s(he,"BLOCKQUOTE",{});var Lm=r(ua);ma=s(Lm,"BLOCKQUOTE",{});var Sm=r(ma);fa=s(Sm,"BLOCKQUOTE",{});var Dm=r(fa);_a=s(Dm,"P",{});var Gm=r(_a);ph=d(Gm,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),Gm.forEach(t),Dm.forEach(t),Sm.forEach(t),Lm.forEach(t),hh=p(he),ga=s(he,"BLOCKQUOTE",{});var Wm=r(ga);ba=s(Wm,"BLOCKQUOTE",{});var Um=r(ba);as=s(Um,"BLOCKQUOTE",{});var Ud=r(as);Eo=s(Ud,"H1",{class:!0});var Hd=r(Eo);Mo=s(Hd,"A",{id:!0,class:!0,href:!0});var Hm=r(Mo);ka=s(Hm,"SPAN",{});var Rm=r(ka);v(ds.$$.fragment,Rm),Rm.forEach(t),Hm.forEach(t),uh=p(Hd),ya=s(Hd,"SPAN",{});var Km=r(ya);mh=d(Km,"Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),Km.forEach(t),Hd.forEach(t),fh=p(Ud),va=s(Ud,"P",{});var Vm=r(va);_h=d(Vm,`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),Vm.forEach(t),Ud.forEach(t),Um.forEach(t),Wm.forEach(t),he.forEach(t),gh=p(pe),Co=s(pe,"DIV",{class:!0});var Rd=r(Co);v(is.$$.fragment,Rd),bh=p(Rd),v(jo.$$.fragment,Rd),Rd.forEach(t),kh=p(pe),Po=s(pe,"DIV",{class:!0});var Kd=r(Po);v(ls.$$.fragment,Kd),yh=p(Kd),v(Oo.$$.fragment,Kd),Kd.forEach(t),pe.forEach(t),this.h()},h(){u(l,"name","hf:doc:metadata"),u(l,"content",JSON.stringify($f)),u(m,"id","blenderbot"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#blenderbot"),u(f,"class","relative group"),u(ue,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),u(ue,"rel","nofollow"),u(ne,"id","overview"),u(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ne,"href","#overview"),u(L,"class","relative group"),u(ge,"href","https://arxiv.org/pdf/2004.13637.pdf"),u(ge,"rel","nofollow"),u(ke,"href","https://huggingface.co/sshleifer"),u(ke,"rel","nofollow"),u(ve,"href","https://github.com/facebookresearch/ParlAI"),u(ve,"rel","nofollow"),u(ae,"id","implementation-notes"),u(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ae,"href","#implementation-notes"),u(O,"class","relative group"),u(E,"href","https://arxiv.org/pdf/1706.03762.pdf"),u(E,"rel","nofollow"),u(Ie,"href","https://huggingface.co/models?search=blenderbot"),u(Ie,"rel","nofollow"),u(qe,"href","blenderbot-small"),u(Jt,"id","usage"),u(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Jt,"href","#usage"),u(Ft,"class","relative group"),u(Qt,"id","transformers.BlenderbotConfig"),u(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qt,"href","#transformers.BlenderbotConfig"),u(qt,"class","relative group"),u(gs,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotModel"),u(Xo,"href","https://huggingface.co/facebook/blenderbot-3B"),u(Xo,"rel","nofollow"),u(bs,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(ks,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yt,"id","transformers.BlenderbotTokenizer"),u(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Yt,"href","#transformers.BlenderbotTokenizer"),u(Ct,"class","relative group"),u(ys,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(to,"id","transformers.BlenderbotTokenizerFast"),u(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(to,"href","#transformers.BlenderbotTokenizerFast"),u(jt,"class","relative group"),u(Ts,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(so,"id","transformers.BlenderbotModel"),u(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(so,"href","#transformers.BlenderbotModel"),u(Pt,"class","relative group"),u($s,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(mn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(mn,"rel","nofollow"),u(xs,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotModel"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(io,"id","transformers.BlenderbotForConditionalGeneration"),u(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(io,"href","#transformers.BlenderbotForConditionalGeneration"),u(Nt,"class","relative group"),u(Bs,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),u(zs,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(yn,"rel","nofollow"),u(Fs,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(po,"id","transformers.BlenderbotForCausalLM"),u(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(po,"href","#transformers.BlenderbotForCausalLM"),u(It,"class","relative group"),u(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mo,"id","transformers.TFBlenderbotModel"),u(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mo,"href","#transformers.TFBlenderbotModel"),u(St,"class","relative group"),u(qs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(qn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(qn,"rel","nofollow"),u(Es,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.TFBlenderbotModel"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bo,"id","transformers.TFBlenderbotForConditionalGeneration"),u(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bo,"href","#transformers.TFBlenderbotForConditionalGeneration"),u(Gt,"class","relative group"),u(Ms,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(On,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(On,"rel","nofollow"),u(Cs,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.TFBlenderbotForConditionalGeneration"),u(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vo,"id","transformers.FlaxBlenderbotModel"),u(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(vo,"href","#transformers.FlaxBlenderbotModel"),u(Ut,"class","relative group"),u(js,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Gn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Gn,"rel","nofollow"),u(Wn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Wn,"rel","nofollow"),u(Un,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Un,"rel","nofollow"),u(Hn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Hn,"rel","nofollow"),u(Rn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Rn,"rel","nofollow"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fo,"id","transformers.FlaxBlenderbotForConditionalGeneration"),u(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fo,"href","#transformers.FlaxBlenderbotForConditionalGeneration"),u(Rt,"class","relative group"),u(Ps,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(es,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(es,"rel","nofollow"),u(ts,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ts,"rel","nofollow"),u(os,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(os,"rel","nofollow"),u(ns,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ns,"rel","nofollow"),u(ss,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(ss,"rel","nofollow"),u(Mo,"id","generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),u(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Mo,"href","#generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),u(Eo,"class","relative group"),u(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,l),_(o,k,g),_(o,f,g),e(f,m),e(m,b),T(i,b,null),e(f,h),e(f,F),e(F,Q),_(o,I,g),_(o,j,g),e(j,oe),e(oe,Ee),e(j,q),e(j,ue),e(ue,me),e(j,tt),_(o,Ue,g),_(o,L,g),e(L,ne),e(ne,Me),T(K,Me,null),e(L,ot),e(L,Ce),e(Ce,fe),_(o,He,g),_(o,se,g),e(se,_e),e(se,ge),e(ge,nt),e(se,je),_(o,C,g),_(o,P,g),e(P,st),_(o,re,g),_(o,Fe,g),e(Fe,Pe),e(Pe,be),_(o,Re,g),_(o,V,g),e(V,S),e(V,ke),e(ke,ye),e(V,rt),e(V,ve),e(ve,Te),e(V,at),_(o,Ke,g),_(o,O,g),e(O,ae),e(ae,X),T(we,X,null),e(O,Oe),e(O,N),e(N,dt),_(o,H,g),_(o,J,g),e(J,$e),e($e,B),e($e,E),e(E,bt),e($e,Ne),e(J,kt),e(J,Ae),e(Ae,M),e(Ae,Ie),e(Ie,yt),e(Ae,vt),e(J,Tt),e(J,Y),e(Y,Z),e(Y,ee),e(ee,wt),e(Y,$t),e(Y,te),e(te,xt),e(Y,Bt),e(Y,qe),e(qe,zt),e(Y,Le),_(o,ht,g),_(o,Ft,g),e(Ft,Jt),e(Jt,Rs),T(Ko,Rs,null),e(Ft,Vd),e(Ft,Ks),e(Ks,Jd),_(o,Ia,g),_(o,_s,g),e(_s,Qd),_(o,La,g),T(Vo,o,g),_(o,Sa,g),_(o,qt,g),e(qt,Qt),e(Qt,Vs),T(Jo,Vs,null),e(qt,Xd),e(qt,Js),e(Js,Yd),_(o,Da,g),_(o,Se,g),T(Qo,Se,null),e(Se,Zd),e(Se,Et),e(Et,ei),e(Et,gs),e(gs,ti),e(Et,oi),e(Et,Xo),e(Xo,ni),e(Et,si),e(Se,ri),e(Se,Mt),e(Mt,ai),e(Mt,bs),e(bs,di),e(Mt,ii),e(Mt,ks),e(ks,li),e(Mt,ci),e(Se,pi),T(Xt,Se,null),_(o,Ga,g),_(o,Ct,g),e(Ct,Yt),e(Yt,Qs),T(Yo,Qs,null),e(Ct,hi),e(Ct,Xs),e(Xs,ui),_(o,Wa,g),_(o,D,g),T(Zo,D,null),e(D,mi),e(D,Ys),e(Ys,fi),e(D,_i),e(D,Zs),e(Zs,gi),e(D,bi),T(Zt,D,null),e(D,ki),e(D,en),e(en,yi),e(en,er),e(er,vi),e(en,Ti),e(D,wi),T(eo,D,null),e(D,$i),e(D,tn),e(tn,xi),e(tn,ys),e(ys,Bi),e(tn,zi),e(D,Fi),e(D,ut),T(on,ut,null),e(ut,qi),e(ut,tr),e(tr,Ei),e(ut,Mi),e(ut,or),e(or,vs),e(vs,Ci),e(vs,nr),e(nr,ji),_(o,Ua,g),_(o,jt,g),e(jt,to),e(to,sr),T(nn,sr,null),e(jt,Pi),e(jt,rr),e(rr,Oi),_(o,Ha,g),_(o,G,g),T(sn,G,null),e(G,Ni),e(G,rn),e(rn,Ai),e(rn,ar),e(ar,Ii),e(rn,Li),e(G,Si),e(G,dr),e(dr,Di),e(G,Gi),T(oo,G,null),e(G,Wi),e(G,an),e(an,Ui),e(an,ir),e(ir,Hi),e(an,Ri),e(G,Ki),T(no,G,null),e(G,Vi),e(G,dn),e(dn,Ji),e(dn,Ts),e(Ts,Qi),e(dn,Xi),e(G,Yi),e(G,mt),T(ln,mt,null),e(mt,Zi),e(mt,lr),e(lr,el),e(mt,tl),e(mt,cr),e(cr,ws),e(ws,ol),e(ws,pr),e(pr,nl),_(o,Ra,g),_(o,Pt,g),e(Pt,so),e(so,hr),T(cn,hr,null),e(Pt,sl),e(Pt,ur),e(ur,rl),_(o,Ka,g),_(o,it,g),e(it,al),e(it,mr),e(mr,dl),e(it,il),e(it,fr),e(fr,ll),e(it,cl),e(it,_r),e(_r,pl),_(o,Va,g),_(o,De,g),T(pn,De,null),e(De,hl),e(De,hn),e(hn,ul),e(hn,$s),e($s,ml),e(hn,fl),e(De,_l),e(De,un),e(un,gl),e(un,mn),e(mn,bl),e(un,kl),e(De,yl),e(De,Ve),T(fn,Ve,null),e(Ve,vl),e(Ve,Ot),e(Ot,Tl),e(Ot,xs),e(xs,wl),e(Ot,$l),e(Ot,gr),e(gr,xl),e(Ot,Bl),e(Ve,zl),T(ro,Ve,null),e(Ve,Fl),T(ao,Ve,null),_(o,Ja,g),_(o,Nt,g),e(Nt,io),e(io,br),T(_n,br,null),e(Nt,ql),e(Nt,kr),e(kr,El),_(o,Qa,g),_(o,lt,g),e(lt,Ml),e(lt,Bs),e(Bs,Cl),e(lt,jl),e(lt,yr),e(yr,Pl),e(lt,Ol),e(lt,vr),e(vr,Nl),_(o,Xa,g),_(o,Ge,g),T(gn,Ge,null),e(Ge,Al),e(Ge,bn),e(bn,Il),e(bn,zs),e(zs,Ll),e(bn,Sl),e(Ge,Dl),e(Ge,kn),e(kn,Gl),e(kn,yn),e(yn,Wl),e(kn,Ul),e(Ge,Hl),e(Ge,Je),T(vn,Je,null),e(Je,Rl),e(Je,At),e(At,Kl),e(At,Fs),e(Fs,Vl),e(At,Jl),e(At,Tr),e(Tr,Ql),e(At,Xl),e(Je,Yl),T(lo,Je,null),e(Je,Zl),T(co,Je,null),_(o,Ya,g),_(o,It,g),e(It,po),e(po,wr),T(Tn,wr,null),e(It,ec),e(It,$r),e($r,tc),_(o,Za,g),_(o,Lt,g),T(wn,Lt,null),e(Lt,oc),e(Lt,ho),T($n,ho,null),e(ho,nc),T(uo,ho,null),_(o,ed,g),_(o,St,g),e(St,mo),e(mo,xr),T(xn,xr,null),e(St,sc),e(St,Br),e(Br,rc),_(o,td,g),_(o,xe,g),T(Bn,xe,null),e(xe,ac),e(xe,zn),e(zn,dc),e(zn,qs),e(qs,ic),e(zn,lc),e(xe,cc),e(xe,Fn),e(Fn,pc),e(Fn,qn),e(qn,hc),e(Fn,uc),e(xe,mc),T(fo,xe,null),e(xe,fc),e(xe,Qe),T(En,Qe,null),e(Qe,_c),e(Qe,Dt),e(Dt,gc),e(Dt,Es),e(Es,bc),e(Dt,kc),e(Dt,zr),e(zr,yc),e(Dt,vc),e(Qe,Tc),T(_o,Qe,null),e(Qe,wc),T(go,Qe,null),_(o,od,g),_(o,Gt,g),e(Gt,bo),e(bo,Fr),T(Mn,Fr,null),e(Gt,$c),e(Gt,qr),e(qr,xc),_(o,nd,g),_(o,Be,g),T(Cn,Be,null),e(Be,Bc),e(Be,jn),e(jn,zc),e(jn,Ms),e(Ms,Fc),e(jn,qc),e(Be,Ec),e(Be,Pn),e(Pn,Mc),e(Pn,On),e(On,Cc),e(Pn,jc),e(Be,Pc),T(ko,Be,null),e(Be,Oc),e(Be,de),T(Nn,de,null),e(de,Nc),e(de,Wt),e(Wt,Ac),e(Wt,Cs),e(Cs,Ic),e(Wt,Lc),e(Wt,Er),e(Er,Sc),e(Wt,Dc),e(de,Gc),T(yo,de,null),e(de,Wc),e(de,Mr),e(Mr,Uc),e(de,Hc),e(de,Cr),e(Cr,jr),e(jr,Pr),e(Pr,Or),e(Or,Rc),e(de,Kc),e(de,Nr),e(Nr,Ar),e(Ar,Ir),e(Ir,An),e(An,Vc),e(An,Lr),e(Lr,Jc),e(An,Qc),_(o,sd,g),_(o,Ut,g),e(Ut,vo),e(vo,Sr),T(In,Sr,null),e(Ut,Xc),e(Ut,Dr),e(Dr,Yc),_(o,rd,g),_(o,W,g),T(Ln,W,null),e(W,Zc),e(W,Sn),e(Sn,ep),e(Sn,js),e(js,tp),e(Sn,op),e(W,np),e(W,Dn),e(Dn,sp),e(Dn,Gn),e(Gn,rp),e(Dn,ap),e(W,dp),e(W,Gr),e(Gr,ip),e(W,lp),e(W,ct),e(ct,Wr),e(Wr,Wn),e(Wn,cp),e(ct,pp),e(ct,Ur),e(Ur,Un),e(Un,hp),e(ct,up),e(ct,Hr),e(Hr,Hn),e(Hn,mp),e(ct,fp),e(ct,Rr),e(Rr,Rn),e(Rn,_p),e(W,gp),e(W,Xe),T(Kn,Xe,null),e(Xe,bp),e(Xe,Ht),e(Ht,kp),e(Ht,Kr),e(Kr,yp),e(Ht,vp),e(Ht,Vr),e(Vr,Tp),e(Ht,wp),e(Xe,$p),T(To,Xe,null),e(Xe,xp),T(wo,Xe,null),e(W,Bp),e(W,$o),T(Vn,$o,null),e($o,zp),T(xo,$o,null),e(W,Fp),e(W,Bo),T(Jn,Bo,null),e(Bo,qp),T(zo,Bo,null),_(o,ad,g),_(o,Rt,g),e(Rt,Fo),e(Fo,Jr),T(Qn,Jr,null),e(Rt,Ep),e(Rt,Qr),e(Qr,Mp),_(o,dd,g),_(o,U,g),T(Xn,U,null),e(U,Cp),e(U,Yn),e(Yn,jp),e(Yn,Ps),e(Ps,Pp),e(Yn,Op),e(U,Np),e(U,Zn),e(Zn,Ap),e(Zn,es),e(es,Ip),e(Zn,Lp),e(U,Sp),e(U,Xr),e(Xr,Dp),e(U,Gp),e(U,pt),e(pt,Yr),e(Yr,ts),e(ts,Wp),e(pt,Up),e(pt,Zr),e(Zr,os),e(os,Hp),e(pt,Rp),e(pt,ea),e(ea,ns),e(ns,Kp),e(pt,Vp),e(pt,ta),e(ta,ss),e(ss,Jp),e(U,Qp),e(U,R),T(rs,R,null),e(R,Xp),e(R,Kt),e(Kt,Yp),e(Kt,oa),e(oa,Zp),e(Kt,eh),e(Kt,na),e(na,th),e(Kt,oh),e(R,nh),T(qo,R,null),e(R,sh),e(R,sa),e(sa,rh),e(R,ah),e(R,ra),e(ra,aa),e(aa,da),e(da,ia),e(ia,dh),e(R,ih),e(R,la),e(la,ca),e(ca,pa),e(pa,ha),e(ha,lh),e(R,ch),e(R,ua),e(ua,ma),e(ma,fa),e(fa,_a),e(_a,ph),e(R,hh),e(R,ga),e(ga,ba),e(ba,as),e(as,Eo),e(Eo,Mo),e(Mo,ka),T(ds,ka,null),e(Eo,uh),e(Eo,ya),e(ya,mh),e(as,fh),e(as,va),e(va,_h),e(U,gh),e(U,Co),T(is,Co,null),e(Co,bh),T(jo,Co,null),e(U,kh),e(U,Po),T(ls,Po,null),e(Po,yh),T(Oo,Po,null),id=!0},p(o,[g]){const cs={};g&2&&(cs.$$scope={dirty:g,ctx:o}),Xt.$set(cs);const Ta={};g&2&&(Ta.$$scope={dirty:g,ctx:o}),Zt.$set(Ta);const wa={};g&2&&(wa.$$scope={dirty:g,ctx:o}),eo.$set(wa);const $a={};g&2&&($a.$$scope={dirty:g,ctx:o}),oo.$set($a);const No={};g&2&&(No.$$scope={dirty:g,ctx:o}),no.$set(No);const xa={};g&2&&(xa.$$scope={dirty:g,ctx:o}),ro.$set(xa);const Ba={};g&2&&(Ba.$$scope={dirty:g,ctx:o}),ao.$set(Ba);const ps={};g&2&&(ps.$$scope={dirty:g,ctx:o}),lo.$set(ps);const za={};g&2&&(za.$$scope={dirty:g,ctx:o}),co.$set(za);const Fa={};g&2&&(Fa.$$scope={dirty:g,ctx:o}),uo.$set(Fa);const qa={};g&2&&(qa.$$scope={dirty:g,ctx:o}),fo.$set(qa);const hs={};g&2&&(hs.$$scope={dirty:g,ctx:o}),_o.$set(hs);const Ea={};g&2&&(Ea.$$scope={dirty:g,ctx:o}),go.$set(Ea);const Ma={};g&2&&(Ma.$$scope={dirty:g,ctx:o}),ko.$set(Ma);const Ca={};g&2&&(Ca.$$scope={dirty:g,ctx:o}),yo.$set(Ca);const ja={};g&2&&(ja.$$scope={dirty:g,ctx:o}),To.$set(ja);const Vt={};g&2&&(Vt.$$scope={dirty:g,ctx:o}),wo.$set(Vt);const Pa={};g&2&&(Pa.$$scope={dirty:g,ctx:o}),xo.$set(Pa);const Oa={};g&2&&(Oa.$$scope={dirty:g,ctx:o}),zo.$set(Oa);const us={};g&2&&(us.$$scope={dirty:g,ctx:o}),qo.$set(us);const Na={};g&2&&(Na.$$scope={dirty:g,ctx:o}),jo.$set(Na);const Aa={};g&2&&(Aa.$$scope={dirty:g,ctx:o}),Oo.$set(Aa)},i(o){id||(w(i.$$.fragment,o),w(K.$$.fragment,o),w(we.$$.fragment,o),w(Ko.$$.fragment,o),w(Vo.$$.fragment,o),w(Jo.$$.fragment,o),w(Qo.$$.fragment,o),w(Xt.$$.fragment,o),w(Yo.$$.fragment,o),w(Zo.$$.fragment,o),w(Zt.$$.fragment,o),w(eo.$$.fragment,o),w(on.$$.fragment,o),w(nn.$$.fragment,o),w(sn.$$.fragment,o),w(oo.$$.fragment,o),w(no.$$.fragment,o),w(ln.$$.fragment,o),w(cn.$$.fragment,o),w(pn.$$.fragment,o),w(fn.$$.fragment,o),w(ro.$$.fragment,o),w(ao.$$.fragment,o),w(_n.$$.fragment,o),w(gn.$$.fragment,o),w(vn.$$.fragment,o),w(lo.$$.fragment,o),w(co.$$.fragment,o),w(Tn.$$.fragment,o),w(wn.$$.fragment,o),w($n.$$.fragment,o),w(uo.$$.fragment,o),w(xn.$$.fragment,o),w(Bn.$$.fragment,o),w(fo.$$.fragment,o),w(En.$$.fragment,o),w(_o.$$.fragment,o),w(go.$$.fragment,o),w(Mn.$$.fragment,o),w(Cn.$$.fragment,o),w(ko.$$.fragment,o),w(Nn.$$.fragment,o),w(yo.$$.fragment,o),w(In.$$.fragment,o),w(Ln.$$.fragment,o),w(Kn.$$.fragment,o),w(To.$$.fragment,o),w(wo.$$.fragment,o),w(Vn.$$.fragment,o),w(xo.$$.fragment,o),w(Jn.$$.fragment,o),w(zo.$$.fragment,o),w(Qn.$$.fragment,o),w(Xn.$$.fragment,o),w(rs.$$.fragment,o),w(qo.$$.fragment,o),w(ds.$$.fragment,o),w(is.$$.fragment,o),w(jo.$$.fragment,o),w(ls.$$.fragment,o),w(Oo.$$.fragment,o),id=!0)},o(o){$(i.$$.fragment,o),$(K.$$.fragment,o),$(we.$$.fragment,o),$(Ko.$$.fragment,o),$(Vo.$$.fragment,o),$(Jo.$$.fragment,o),$(Qo.$$.fragment,o),$(Xt.$$.fragment,o),$(Yo.$$.fragment,o),$(Zo.$$.fragment,o),$(Zt.$$.fragment,o),$(eo.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(sn.$$.fragment,o),$(oo.$$.fragment,o),$(no.$$.fragment,o),$(ln.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(fn.$$.fragment,o),$(ro.$$.fragment,o),$(ao.$$.fragment,o),$(_n.$$.fragment,o),$(gn.$$.fragment,o),$(vn.$$.fragment,o),$(lo.$$.fragment,o),$(co.$$.fragment,o),$(Tn.$$.fragment,o),$(wn.$$.fragment,o),$($n.$$.fragment,o),$(uo.$$.fragment,o),$(xn.$$.fragment,o),$(Bn.$$.fragment,o),$(fo.$$.fragment,o),$(En.$$.fragment,o),$(_o.$$.fragment,o),$(go.$$.fragment,o),$(Mn.$$.fragment,o),$(Cn.$$.fragment,o),$(ko.$$.fragment,o),$(Nn.$$.fragment,o),$(yo.$$.fragment,o),$(In.$$.fragment,o),$(Ln.$$.fragment,o),$(Kn.$$.fragment,o),$(To.$$.fragment,o),$(wo.$$.fragment,o),$(Vn.$$.fragment,o),$(xo.$$.fragment,o),$(Jn.$$.fragment,o),$(zo.$$.fragment,o),$(Qn.$$.fragment,o),$(Xn.$$.fragment,o),$(rs.$$.fragment,o),$(qo.$$.fragment,o),$(ds.$$.fragment,o),$(is.$$.fragment,o),$(jo.$$.fragment,o),$(ls.$$.fragment,o),$(Oo.$$.fragment,o),id=!1},d(o){t(l),o&&t(k),o&&t(f),x(i),o&&t(I),o&&t(j),o&&t(Ue),o&&t(L),x(K),o&&t(He),o&&t(se),o&&t(C),o&&t(P),o&&t(re),o&&t(Fe),o&&t(Re),o&&t(V),o&&t(Ke),o&&t(O),x(we),o&&t(H),o&&t(J),o&&t(ht),o&&t(Ft),x(Ko),o&&t(Ia),o&&t(_s),o&&t(La),x(Vo,o),o&&t(Sa),o&&t(qt),x(Jo),o&&t(Da),o&&t(Se),x(Qo),x(Xt),o&&t(Ga),o&&t(Ct),x(Yo),o&&t(Wa),o&&t(D),x(Zo),x(Zt),x(eo),x(on),o&&t(Ua),o&&t(jt),x(nn),o&&t(Ha),o&&t(G),x(sn),x(oo),x(no),x(ln),o&&t(Ra),o&&t(Pt),x(cn),o&&t(Ka),o&&t(it),o&&t(Va),o&&t(De),x(pn),x(fn),x(ro),x(ao),o&&t(Ja),o&&t(Nt),x(_n),o&&t(Qa),o&&t(lt),o&&t(Xa),o&&t(Ge),x(gn),x(vn),x(lo),x(co),o&&t(Ya),o&&t(It),x(Tn),o&&t(Za),o&&t(Lt),x(wn),x($n),x(uo),o&&t(ed),o&&t(St),x(xn),o&&t(td),o&&t(xe),x(Bn),x(fo),x(En),x(_o),x(go),o&&t(od),o&&t(Gt),x(Mn),o&&t(nd),o&&t(Be),x(Cn),x(ko),x(Nn),x(yo),o&&t(sd),o&&t(Ut),x(In),o&&t(rd),o&&t(W),x(Ln),x(Kn),x(To),x(wo),x(Vn),x(xo),x(Jn),x(zo),o&&t(ad),o&&t(Rt),x(Qn),o&&t(dd),o&&t(U),x(Xn),x(rs),x(qo),x(ds),x(is),x(jo),x(ls),x(Oo)}}}const $f={local:"blenderbot",sections:[{local:"overview",title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage",title:"Usage"},{local:"transformers.BlenderbotConfig",title:"BlenderbotConfig"},{local:"transformers.BlenderbotTokenizer",title:"BlenderbotTokenizer"},{local:"transformers.BlenderbotTokenizerFast",title:"BlenderbotTokenizerFast"},{local:"transformers.BlenderbotModel",title:"BlenderbotModel"},{local:"transformers.BlenderbotForConditionalGeneration",title:"BlenderbotForConditionalGeneration"},{local:"transformers.BlenderbotForCausalLM",title:"BlenderbotForCausalLM"},{local:"transformers.TFBlenderbotModel",title:"TFBlenderbotModel"},{local:"transformers.TFBlenderbotForConditionalGeneration",title:"TFBlenderbotForConditionalGeneration"},{local:"transformers.FlaxBlenderbotModel",title:"FlaxBlenderbotModel"},{local:"transformers.FlaxBlenderbotForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot"};function xf(z){return Zm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Cf extends Jm{constructor(l){super();Qm(this,l,xf,wf,Xm,{})}}export{Cf as default,$f as metadata};
