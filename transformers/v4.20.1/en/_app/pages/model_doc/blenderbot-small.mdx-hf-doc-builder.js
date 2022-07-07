import{S as dh,i as ih,s as ch,e as n,k as i,w as v,t as r,M as ph,c as a,d as t,m as c,a as s,x as y,h as l,b as u,G as e,g as _,y as T,q as w,o as $,B as S,v as uh,L as Xe}from"../../chunks/vendor-hf-doc-builder.js";import{T as qn}from"../../chunks/Tip-hf-doc-builder.js";import{D as C}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ye}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as xe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Je}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function mh(z){let p,k,f,m,b;return m=new Ye({props:{code:`from transformers import BlenderbotSmallModel, BlenderbotSmallConfig

# Initializing a BlenderbotSmall facebook/blenderbot_small-90M style configuration
configuration = BlenderbotSmallConfig()

# Initializing a model from the facebook/blenderbot_small-90M style configuration
model = BlenderbotSmallModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallModel, BlenderbotSmallConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BlenderbotSmall facebook/blenderbot_small-90M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BlenderbotSmallConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/blenderbot_small-90M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),k=r("Example:"),f=i(),v(m.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(t),f=c(d),y(m.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(m,d,h),b=!0},p:Xe,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&t(p),d&&t(f),S(m,d)}}}function hh(z){let p,k,f,m,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var F=s(f);m=l(F,"Module"),F.forEach(t),b=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){_(d,p,h),e(p,k),e(p,f),e(f,m),e(p,b)},d(d){d&&t(p)}}}function fh(z){let p,k,f,m,b;return m=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallModel

model = BlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt")
decoder_inputs = tokenizer("Studies show that", return_tensors="pt")  # Batch size 1
outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_inputs = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">512</span>]`}}),{c(){p=n("p"),k=r("Example:"),f=i(),v(m.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(t),f=c(d),y(m.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(m,d,h),b=!0},p:Xe,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&t(p),d&&t(f),S(m,d)}}}function _h(z){let p,k,f,m,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var F=s(f);m=l(F,"Module"),F.forEach(t),b=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){_(d,p,h),e(p,k),e(p,f),e(f,m),e(p,b)},d(d){d&&t(p)}}}function gh(z){let p,k,f,m,b;return m=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration

mname = "facebook/blenderbot_small-90M"
model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)
UTTERANCE = "My friends are cool but they eat too many carbs."
print("Human: ", UTTERANCE)

inputs = tokenizer([UTTERANCE], return_tensors="pt")
reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(reply_ids, skip_special_tokens=True)[0])

REPLY = "I'm not sure"
print("Human: ", REPLY)

NEXT_UTTERANCE = (
    "My friends are cool but they eat too many carbs.</s> <s>what kind of carbs do they eat? "
    "i don't know much about carbs</s> "
    "<s> I'm not sure."
)
inputs = tokenizer([NEXT_UTTERANCE], return_tensors="pt")
next_reply_ids = model.generate(**inputs)
print("Bot: ", tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Human: &quot;</span>, UTTERANCE)
Human:  My friends are cool but they eat too many carbs.

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([UTTERANCE], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Bot: &quot;</span>, tokenizer.batch_decode(reply_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>])
Bot:  what kind of carbs do they eat? i don<span class="hljs-string">&#x27;t know much about carbs.

&gt;&gt;&gt; REPLY = &quot;I&#x27;</span>m <span class="hljs-keyword">not</span> sure<span class="hljs-string">&quot;
&gt;&gt;&gt; print(&quot;</span>Human: <span class="hljs-string">&quot;, REPLY)
Human: I&#x27;m not sure

&gt;&gt;&gt; NEXT_UTTERANCE = (
...     &quot;</span>My friends are cool but they eat too many carbs.&lt;/s&gt; &lt;s&gt;what kind of carbs do they eat? <span class="hljs-string">&quot;
...     &quot;</span>i don<span class="hljs-string">&#x27;t know much about carbs&lt;/s&gt; &quot;
...     &quot;&lt;s&gt; I&#x27;</span>m <span class="hljs-keyword">not</span> sure.<span class="hljs-string">&quot;
... )
&gt;&gt;&gt; inputs = tokenizer([NEXT_UTTERANCE], return_tensors=&quot;</span>pt<span class="hljs-string">&quot;)
&gt;&gt;&gt; next_reply_ids = model.generate(**inputs)
&gt;&gt;&gt; print(&quot;</span>Bot: <span class="hljs-string">&quot;, tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])
Bot:  they eat a lot of carbs. carbs are high in fat, protein, and carbohydrates.</span>`}}),{c(){p=n("p"),k=r("Conversation example:"),f=i(),v(m.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Conversation example:"),h.forEach(t),f=c(d),y(m.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(m,d,h),b=!0},p:Xe,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&t(p),d&&t(f),S(m,d)}}}function bh(z){let p,k,f,m,b;return m=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = BlenderbotSmallForCausalLM.from_pretrained(
    "facebook/blenderbot_small-90M", add_cross_attention=False
)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),{c(){p=n("p"),k=r("Example:"),f=i(),v(m.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(t),f=c(d),y(m.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(m,d,h),b=!0},p:Xe,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&t(p),d&&t(f),S(m,d)}}}function kh(z){let p,k,f,m,b,d,h,F,Ce,me,B,je,W,Oe,Pe,R,Le,Ne,Q,V,Ie,Z,j,L,he,ae,Be,J,D,be,se,N,ke,re,ze,ee,le,de,Ae,X,Fe,H,De;return{c(){p=n("p"),k=r("TF 2.0 models accepts two formats as inputs:"),f=i(),m=n("ul"),b=n("li"),d=r("having all inputs as keyword arguments (like PyTorch models), or"),h=i(),F=n("li"),Ce=r("having all inputs as a list, tuple or dict in the first positional arguments."),me=i(),B=n("p"),je=r("This second option is useful when using "),W=n("code"),Oe=r("tf.keras.Model.fit"),Pe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),Le=r("model(inputs)"),Ne=r("."),Q=i(),V=n("p"),Ie=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=i(),j=n("ul"),L=n("li"),he=r("a single Tensor with "),ae=n("code"),Be=r("input_ids"),J=r(" only and nothing else: "),D=n("code"),be=r("model(input_ids)"),se=i(),N=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=n("code"),ze=r("model([input_ids, attention_mask])"),ee=r(" or "),le=n("code"),de=r("model([input_ids, attention_mask, token_type_ids])"),Ae=i(),X=n("li"),Fe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(x){p=a(x,"P",{});var q=s(p);k=l(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),f=c(x),m=a(x,"UL",{});var ie=s(m);b=a(ie,"LI",{});var Ze=s(b);d=l(Ze,"having all inputs as keyword arguments (like PyTorch models), or"),Ze.forEach(t),h=c(ie),F=a(ie,"LI",{});var Re=s(F);Ce=l(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),ie.forEach(t),me=c(x),B=a(x,"P",{});var O=s(B);je=l(O,"This second option is useful when using "),W=a(O,"CODE",{});var et=s(W);Oe=l(et,"tf.keras.Model.fit"),et.forEach(t),Pe=l(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=a(O,"CODE",{});var ve=s(R);Le=l(ve,"model(inputs)"),ve.forEach(t),Ne=l(O,"."),O.forEach(t),Q=c(x),V=a(x,"P",{});var tt=s(V);Ie=l(tt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),tt.forEach(t),Z=c(x),j=a(x,"UL",{});var Y=s(j);L=a(Y,"LI",{});var G=s(L);he=l(G,"a single Tensor with "),ae=a(G,"CODE",{});var ot=s(ae);Be=l(ot,"input_ids"),ot.forEach(t),J=l(G," only and nothing else: "),D=a(G,"CODE",{});var nt=s(D);be=l(nt,"model(input_ids)"),nt.forEach(t),G.forEach(t),se=c(Y),N=a(Y,"LI",{});var te=s(N);ke=l(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=a(te,"CODE",{});var ce=s(re);ze=l(ce,"model([input_ids, attention_mask])"),ce.forEach(t),ee=l(te," or "),le=a(te,"CODE",{});var fe=s(le);de=l(fe,"model([input_ids, attention_mask, token_type_ids])"),fe.forEach(t),te.forEach(t),Ae=c(Y),X=a(Y,"LI",{});var ye=s(X);Fe=l(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=a(ye,"CODE",{});var Te=s(H);De=l(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),ye.forEach(t),Y.forEach(t)},m(x,q){_(x,p,q),e(p,k),_(x,f,q),_(x,m,q),e(m,b),e(b,d),e(m,h),e(m,F),e(F,Ce),_(x,me,q),_(x,B,q),e(B,je),e(B,W),e(W,Oe),e(B,Pe),e(B,R),e(R,Le),e(B,Ne),_(x,Q,q),_(x,V,q),e(V,Ie),_(x,Z,q),_(x,j,q),e(j,L),e(L,he),e(L,ae),e(ae,Be),e(L,J),e(L,D),e(D,be),e(j,se),e(j,N),e(N,ke),e(N,re),e(re,ze),e(N,ee),e(N,le),e(le,de),e(j,Ae),e(j,X),e(X,Fe),e(X,H),e(H,De)},d(x){x&&t(p),x&&t(f),x&&t(m),x&&t(me),x&&t(B),x&&t(Q),x&&t(V),x&&t(Z),x&&t(j)}}}function vh(z){let p,k,f,m,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var F=s(f);m=l(F,"Module"),F.forEach(t),b=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){_(d,p,h),e(p,k),e(p,f),e(f,m),e(p,b)},d(d){d&&t(p)}}}function yh(z){let p,k,f,m,b;return m=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallModel
import tensorflow as tf

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = TFBlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, TFBlenderbotSmallModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=r("Example:"),f=i(),v(m.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(t),f=c(d),y(m.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(m,d,h),b=!0},p:Xe,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&t(p),d&&t(f),S(m,d)}}}function Th(z){let p,k,f,m,b,d,h,F,Ce,me,B,je,W,Oe,Pe,R,Le,Ne,Q,V,Ie,Z,j,L,he,ae,Be,J,D,be,se,N,ke,re,ze,ee,le,de,Ae,X,Fe,H,De;return{c(){p=n("p"),k=r("TF 2.0 models accepts two formats as inputs:"),f=i(),m=n("ul"),b=n("li"),d=r("having all inputs as keyword arguments (like PyTorch models), or"),h=i(),F=n("li"),Ce=r("having all inputs as a list, tuple or dict in the first positional arguments."),me=i(),B=n("p"),je=r("This second option is useful when using "),W=n("code"),Oe=r("tf.keras.Model.fit"),Pe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),Le=r("model(inputs)"),Ne=r("."),Q=i(),V=n("p"),Ie=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=i(),j=n("ul"),L=n("li"),he=r("a single Tensor with "),ae=n("code"),Be=r("input_ids"),J=r(" only and nothing else: "),D=n("code"),be=r("model(input_ids)"),se=i(),N=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=n("code"),ze=r("model([input_ids, attention_mask])"),ee=r(" or "),le=n("code"),de=r("model([input_ids, attention_mask, token_type_ids])"),Ae=i(),X=n("li"),Fe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(x){p=a(x,"P",{});var q=s(p);k=l(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(t),f=c(x),m=a(x,"UL",{});var ie=s(m);b=a(ie,"LI",{});var Ze=s(b);d=l(Ze,"having all inputs as keyword arguments (like PyTorch models), or"),Ze.forEach(t),h=c(ie),F=a(ie,"LI",{});var Re=s(F);Ce=l(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),ie.forEach(t),me=c(x),B=a(x,"P",{});var O=s(B);je=l(O,"This second option is useful when using "),W=a(O,"CODE",{});var et=s(W);Oe=l(et,"tf.keras.Model.fit"),et.forEach(t),Pe=l(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=a(O,"CODE",{});var ve=s(R);Le=l(ve,"model(inputs)"),ve.forEach(t),Ne=l(O,"."),O.forEach(t),Q=c(x),V=a(x,"P",{});var tt=s(V);Ie=l(tt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),tt.forEach(t),Z=c(x),j=a(x,"UL",{});var Y=s(j);L=a(Y,"LI",{});var G=s(L);he=l(G,"a single Tensor with "),ae=a(G,"CODE",{});var ot=s(ae);Be=l(ot,"input_ids"),ot.forEach(t),J=l(G," only and nothing else: "),D=a(G,"CODE",{});var nt=s(D);be=l(nt,"model(input_ids)"),nt.forEach(t),G.forEach(t),se=c(Y),N=a(Y,"LI",{});var te=s(N);ke=l(te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=a(te,"CODE",{});var ce=s(re);ze=l(ce,"model([input_ids, attention_mask])"),ce.forEach(t),ee=l(te," or "),le=a(te,"CODE",{});var fe=s(le);de=l(fe,"model([input_ids, attention_mask, token_type_ids])"),fe.forEach(t),te.forEach(t),Ae=c(Y),X=a(Y,"LI",{});var ye=s(X);Fe=l(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=a(ye,"CODE",{});var Te=s(H);De=l(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),ye.forEach(t),Y.forEach(t)},m(x,q){_(x,p,q),e(p,k),_(x,f,q),_(x,m,q),e(m,b),e(b,d),e(m,h),e(m,F),e(F,Ce),_(x,me,q),_(x,B,q),e(B,je),e(B,W),e(W,Oe),e(B,Pe),e(B,R),e(R,Le),e(B,Ne),_(x,Q,q),_(x,V,q),e(V,Ie),_(x,Z,q),_(x,j,q),e(j,L),e(L,he),e(L,ae),e(ae,Be),e(L,J),e(L,D),e(D,be),e(j,se),e(j,N),e(N,ke),e(N,re),e(re,ze),e(N,ee),e(N,le),e(le,de),e(j,Ae),e(j,X),e(X,Fe),e(X,H),e(H,De)},d(x){x&&t(p),x&&t(f),x&&t(m),x&&t(me),x&&t(B),x&&t(Q),x&&t(V),x&&t(Z),x&&t(j)}}}function wh(z){let p,k,f,m,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var F=s(f);m=l(F,"Module"),F.forEach(t),b=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){_(d,p,h),e(p,k),e(p,f),e(f,m),e(p,b)},d(d){d&&t(p)}}}function $h(z){let p,k,f,m,b;return m=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = FlaxBlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=r("Example:"),f=i(),v(m.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(t),f=c(d),y(m.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(m,d,h),b=!0},p:Xe,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&t(p),d&&t(f),S(m,d)}}}function Sh(z){let p,k,f,m,b;return m=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),k=r("Example:"),f=i(),v(m.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(t),f=c(d),y(m.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(m,d,h),b=!0},p:Xe,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&t(p),d&&t(f),S(m,d)}}}function xh(z){let p,k,f,m,b;return m=new Ye({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=r("Example:"),f=i(),v(m.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(t),f=c(d),y(m.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(m,d,h),b=!0},p:Xe,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&t(p),d&&t(f),S(m,d)}}}function Bh(z){let p,k,f,m,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var F=s(f);m=l(F,"Module"),F.forEach(t),b=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(d,h){_(d,p,h),e(p,k),e(p,f),e(f,m),e(p,b)},d(d){d&&t(p)}}}function zh(z){let p,k,f,m,b;return m=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),k=r("Example:"),f=i(),v(m.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(t),f=c(d),y(m.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(m,d,h),b=!0},p:Xe,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&t(p),d&&t(f),S(m,d)}}}function Fh(z){let p,k,f,m,b;return m=new Ye({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=n("p"),k=r("Example:"),f=i(),v(m.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(t),f=c(d),y(m.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(m,d,h),b=!0},p:Xe,i(d){b||(w(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&t(p),d&&t(f),S(m,d)}}}function qh(z){let p,k,f,m,b,d,h,F,Ce,me,B,je,W,Oe,Pe,R,Le,Ne,Q,V,Ie,Z,j,L,he,ae,Be,J,D,be,se,N,ke,re,ze,ee,le,de,Ae,X,Fe,H,De,x,q,ie,Ze,Re,O,et,ve,tt,Y,G,ot,nt,te,ce,fe,ye,Te,ul,ra,ml,cr,we,mo,hl,at,fl,En,_l,gl,ho,bl,kl,vl,st,yl,Mn,Tl,wl,Cn,$l,Sl,xl,Tt,pr,rt,wt,la,fo,Bl,da,zl,ur,U,_o,Fl,ia,ql,El,go,Ml,jn,Cl,jl,Ol,He,bo,Pl,ca,Ll,Nl,pa,Il,Al,$t,ko,Dl,lt,Gl,ua,Ul,Wl,ma,Rl,Hl,Kl,Ke,vo,Ql,On,Vl,Pn,Jl,Xl,ha,Yl,Zl,Ln,yo,mr,dt,St,fa,To,ed,_a,td,hr,Ge,wo,od,$o,nd,ga,ad,sd,rd,xt,So,ld,ba,dd,fr,it,Bt,ka,xo,id,va,cd,_r,$e,Bo,pd,zo,ud,Nn,md,hd,fd,Fo,_d,qo,gd,bd,kd,qe,Eo,vd,ct,yd,In,Td,wd,ya,$d,Sd,xd,zt,Bd,Ft,gr,pt,qt,Ta,Mo,zd,wa,Fd,br,Se,Co,qd,jo,Ed,An,Md,Cd,jd,Oo,Od,Po,Pd,Ld,Nd,Ee,Lo,Id,ut,Ad,Dn,Dd,Gd,$a,Ud,Wd,Rd,Et,Hd,Mt,kr,mt,Ct,Sa,No,Kd,xa,Qd,vr,ht,Io,Vd,jt,Ao,Jd,Ot,yr,ft,Pt,Ba,Do,Xd,za,Yd,Tr,pe,Go,Zd,Uo,ei,Gn,ti,oi,ni,Wo,ai,Ro,si,ri,li,Lt,di,Me,Ho,ii,_t,ci,Un,pi,ui,Fa,mi,hi,fi,Nt,_i,It,wr,gt,At,qa,Ko,gi,Ea,bi,$r,ue,Qo,ki,Vo,vi,Wn,yi,Ti,wi,Jo,$i,Xo,Si,xi,Bi,Dt,zi,P,Yo,Fi,bt,qi,Rn,Ei,Mi,Ma,Ci,ji,Oi,Gt,Pi,Ca,Li,Ni,ja,Oa,Pa,La,Ii,Ai,Na,Ia,Aa,Da,Di,Gi,Ga,Ua,Wa,Ra,Ui,Wi,Ha,Ka,Qa,Zo,Ri,Va,Hi,Ki,Qi,Ja,Xa,Ya,Za,Vi,Sr,kt,Ut,es,en,Ji,ts,Xi,xr,I,tn,Yi,on,Zi,Hn,ec,tc,oc,nn,nc,an,ac,sc,rc,os,lc,dc,Ue,ns,sn,ic,cc,as,rn,pc,uc,ss,ln,mc,hc,rs,dn,fc,_c,Wt,cn,gc,Rt,bc,Ht,pn,kc,Kt,vc,Qt,un,yc,Vt,Br,vt,Jt,ls,mn,Tc,ds,wc,zr,A,hn,$c,fn,Sc,Kn,xc,Bc,zc,_n,Fc,gn,qc,Ec,Mc,is,Cc,jc,We,cs,bn,Oc,Pc,ps,kn,Lc,Nc,us,vn,Ic,Ac,ms,yn,Dc,Gc,E,Tn,Uc,yt,Wc,hs,Rc,Hc,fs,Kc,Qc,Vc,Xt,Jc,_s,Xc,Yc,gs,bs,ks,vs,Zc,ep,ys,Ts,ws,$s,tp,op,Ss,xs,Bs,zs,np,ap,Fs,qs,wn,Yt,Zt,Es,$n,sp,Ms,rp,lp,Cs,dp,ip,js,cp,pp,Os,Ps,Ls,Ns,up,mp,Is,As,Ds,Gs,hp,fp,Us,Ws,Rs,Hs,_p,gp,Ks,Qs,Vs,Js,bp,kp,eo,Sn,vp,to,yp,oo,xn,Tp,no,Fr;return d=new xe({}),se=new xe({}),Te=new xe({}),mo=new C({props:{name:"class transformers.BlenderbotSmallConfig",anchor:"transformers.BlenderbotSmallConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 512"},{name:"encoder_layers",val:" = 8"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 8"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BlenderbotSmall model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel">BlenderbotSmallModel</a> or <a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel">TFBlenderbotSmallModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotSmallConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.BlenderbotSmallConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.BlenderbotSmallConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.BlenderbotSmallConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.BlenderbotSmallConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.BlenderbotSmallConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.BlenderbotSmallConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.BlenderbotSmallConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.BlenderbotSmallConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.BlenderbotSmallConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.BlenderbotSmallConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.BlenderbotSmallConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.BlenderbotSmallConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BlenderbotSmallConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.BlenderbotSmallConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BlenderbotSmallConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/configuration_blenderbot_small.py#L36"}}),Tt=new Je({props:{anchor:"transformers.BlenderbotSmallConfig.example",$$slots:{default:[mh]},$$scope:{ctx:z}}}),fo=new xe({}),_o=new C({props:{name:"class transformers.BlenderbotSmallTokenizer",anchor:"transformers.BlenderbotSmallTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"bos_token",val:" = '__start__'"},{name:"eos_token",val:" = '__end__'"},{name:"unk_token",val:" = '__unk__'"},{name:"pad_token",val:" = '__null__'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BlenderbotSmallTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BlenderbotSmallTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__start__&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__end__&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__unk__&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BlenderbotSmallTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__pad__&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.
**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L69"}}),bo=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/tokenization_utils_base.py#L2916",returnDescription:`
<p>The model input with special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ko=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/tokenization_utils.py#L845",returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),vo=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/tokenization_utils_base.py#L2896",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),yo=new C({props:{name:"save_vocabulary",anchor:"transformers.BlenderbotSmallTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L211"}}),To=new xe({}),wo=new C({props:{name:"class transformers.BlenderbotSmallTokenizerFast",anchor:"transformers.BlenderbotSmallTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L52"}}),So=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L98",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xo=new xe({}),Bo=new C({props:{name:"class transformers.BlenderbotSmallModel",anchor:"transformers.BlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1081"}}),Eo=new C({props:{name:"forward",anchor:"transformers.BlenderbotSmallModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotSmallModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotSmallModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotSmallModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotSmallModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1108",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zt=new qn({props:{$$slots:{default:[hh]},$$scope:{ctx:z}}}),Ft=new Je({props:{anchor:"transformers.BlenderbotSmallModel.forward.example",$$slots:{default:[fh]},$$scope:{ctx:z}}}),Mo=new xe({}),Co=new C({props:{name:"class transformers.BlenderbotSmallForConditionalGeneration",anchor:"transformers.BlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1207"}}),Lo=new C({props:{name:"forward",anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1251",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Et=new qn({props:{$$slots:{default:[_h]},$$scope:{ctx:z}}}),Mt=new Je({props:{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.example",$$slots:{default:[gh]},$$scope:{ctx:z}}}),No=new xe({}),Io=new C({props:{name:"class transformers.BlenderbotSmallForCausalLM",anchor:"transformers.BlenderbotSmallForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1387"}}),Ao=new C({props:{name:"forward",anchor:"transformers.BlenderbotSmallForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1418",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ot=new Je({props:{anchor:"transformers.BlenderbotSmallForCausalLM.forward.example",$$slots:{default:[bh]},$$scope:{ctx:z}}}),Do=new xe({}),Go=new C({props:{name:"class transformers.TFBlenderbotSmallModel",anchor:"transformers.TFBlenderbotSmallModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1129"}}),Lt=new qn({props:{$$slots:{default:[kh]},$$scope:{ctx:z}}}),Ho=new C({props:{name:"call",anchor:"transformers.TFBlenderbotSmallModel.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBlenderbotSmallModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotSmallModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotSmallModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotSmallModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotSmallModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1141",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Nt=new qn({props:{$$slots:{default:[vh]},$$scope:{ctx:z}}}),It=new Je({props:{anchor:"transformers.TFBlenderbotSmallModel.call.example",$$slots:{default:[yh]},$$scope:{ctx:z}}}),Ko=new xe({}),Qo=new C({props:{name:"class transformers.TFBlenderbotSmallForConditionalGeneration",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1216"}}),Dt=new qn({props:{$$slots:{default:[Th]},$$scope:{ctx:z}}}),Yo=new C({props:{name:"call",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1249",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Gt=new qn({props:{$$slots:{default:[wh]},$$scope:{ctx:z}}}),en=new xe({}),tn=new C({props:{name:"class transformers.FlaxBlenderbotSmallModel",anchor:"transformers.FlaxBlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1215"}}),cn=new C({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1151",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rt=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallModel.__call__.example",$$slots:{default:[$h]},$$scope:{ctx:z}}}),pn=new C({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L972",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kt=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallModel.encode.example",$$slots:{default:[Sh]},$$scope:{ctx:z}}}),un=new C({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1035",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vt=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallModel.decode.example",$$slots:{default:[xh]},$$scope:{ctx:z}}}),mn=new xe({}),hn=new C({props:{name:"class transformers.FlaxBlenderbotSmallForConditionalGeneration",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1303"}}),Tn=new C({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1151",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xt=new qn({props:{$$slots:{default:[Bh]},$$scope:{ctx:z}}}),$n=new xe({}),Sn=new C({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L972",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.example",$$slots:{default:[zh]},$$scope:{ctx:z}}}),xn=new C({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1307",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),no=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.example",$$slots:{default:[Fh]},$$scope:{ctx:z}}}),{c(){p=n("meta"),k=i(),f=n("h1"),m=n("a"),b=n("span"),v(d.$$.fragment),h=i(),F=n("span"),Ce=r("Blenderbot Small"),me=i(),B=n("p"),je=r("Note that "),W=n("a"),Oe=r("BlenderbotSmallModel"),Pe=r(` and
`),R=n("a"),Le=r("BlenderbotSmallForConditionalGeneration"),Ne=r(` are only used in combination with the checkpoint
`),Q=n("a"),V=r("facebook/blenderbot-90M"),Ie=r(`. Larger Blenderbot checkpoints should
instead be used with `),Z=n("a"),j=r("BlenderbotModel"),L=r(` and
`),he=n("a"),ae=r("BlenderbotForConditionalGeneration"),Be=i(),J=n("h2"),D=n("a"),be=n("span"),v(se.$$.fragment),N=i(),ke=n("span"),re=r("Overview"),ze=i(),ee=n("p"),le=r("The Blender chatbot model was proposed in "),de=n("a"),Ae=r("Recipes for building an open-domain chatbot"),X=r(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Fe=i(),H=n("p"),De=r("The abstract of the paper is the following:"),x=i(),q=n("p"),ie=n("em"),Ze=r(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Re=i(),O=n("p"),et=r("This model was contributed by "),ve=n("a"),tt=r("patrickvonplaten"),Y=r(`. The authors\u2019 code can be
found `),G=n("a"),ot=r("here"),nt=r(" ."),te=i(),ce=n("h2"),fe=n("a"),ye=n("span"),v(Te.$$.fragment),ul=i(),ra=n("span"),ml=r("BlenderbotSmallConfig"),cr=i(),we=n("div"),v(mo.$$.fragment),hl=i(),at=n("p"),fl=r("This is the configuration class to store the configuration of a "),En=n("a"),_l=r("BlenderbotSmallModel"),gl=r(`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),ho=n("a"),bl=r("facebook/blenderbot_small-90M"),kl=r(" architecture."),vl=i(),st=n("p"),yl=r("Configuration objects inherit from "),Mn=n("a"),Tl=r("PretrainedConfig"),wl=r(` and can be used to control the model outputs. Read the
documentation from `),Cn=n("a"),$l=r("PretrainedConfig"),Sl=r(" for more information."),xl=i(),v(Tt.$$.fragment),pr=i(),rt=n("h2"),wt=n("a"),la=n("span"),v(fo.$$.fragment),Bl=i(),da=n("span"),zl=r("BlenderbotSmallTokenizer"),ur=i(),U=n("div"),v(_o.$$.fragment),Fl=i(),ia=n("p"),ql=r("Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),El=i(),go=n("p"),Ml=r("This tokenizer inherits from "),jn=n("a"),Cl=r("PreTrainedTokenizer"),jl=r(` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Ol=i(),He=n("div"),v(bo.$$.fragment),Pl=i(),ca=n("p"),Ll=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Nl=i(),pa=n("p"),Il=r("This implementation does not add special tokens and this method should be overridden in a subclass."),Al=i(),$t=n("div"),v(ko.$$.fragment),Dl=i(),lt=n("p"),Gl=r(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ua=n("code"),Ul=r("prepare_for_model"),Wl=r(" or "),ma=n("code"),Rl=r("encode_plus"),Hl=r(" methods."),Kl=i(),Ke=n("div"),v(vo.$$.fragment),Ql=i(),On=n("p"),Vl=r("Create the token type IDs corresponding to the sequences passed. "),Pn=n("a"),Jl=r(`What are token type
IDs?`),Xl=i(),ha=n("p"),Yl=r("Should be overridden in a subclass if the model has a special way of building those."),Zl=i(),Ln=n("div"),v(yo.$$.fragment),mr=i(),dt=n("h2"),St=n("a"),fa=n("span"),v(To.$$.fragment),ed=i(),_a=n("span"),td=r("BlenderbotSmallTokenizerFast"),hr=i(),Ge=n("div"),v(wo.$$.fragment),od=i(),$o=n("p"),nd=r("Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),ga=n("em"),ad=r("tokenizers"),sd=r(" library)."),rd=i(),xt=n("div"),v(So.$$.fragment),ld=i(),ba=n("p"),dd=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),fr=i(),it=n("h2"),Bt=n("a"),ka=n("span"),v(xo.$$.fragment),id=i(),va=n("span"),cd=r("BlenderbotSmallModel"),_r=i(),$e=n("div"),v(Bo.$$.fragment),pd=i(),zo=n("p"),ud=r(`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=n("a"),md=r("PreTrainedModel"),hd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fd=i(),Fo=n("p"),_d=r("This model is also a PyTorch "),qo=n("a"),gd=r("torch.nn.Module"),bd=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kd=i(),qe=n("div"),v(Eo.$$.fragment),vd=i(),ct=n("p"),yd=r("The "),In=n("a"),Td=r("BlenderbotSmallModel"),wd=r(" forward method, overrides the "),ya=n("code"),$d=r("__call__"),Sd=r(" special method."),xd=i(),v(zt.$$.fragment),Bd=i(),v(Ft.$$.fragment),gr=i(),pt=n("h2"),qt=n("a"),Ta=n("span"),v(Mo.$$.fragment),zd=i(),wa=n("span"),Fd=r("BlenderbotSmallForConditionalGeneration"),br=i(),Se=n("div"),v(Co.$$.fragment),qd=i(),jo=n("p"),Ed=r(`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=n("a"),Md=r("PreTrainedModel"),Cd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jd=i(),Oo=n("p"),Od=r("This model is also a PyTorch "),Po=n("a"),Pd=r("torch.nn.Module"),Ld=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nd=i(),Ee=n("div"),v(Lo.$$.fragment),Id=i(),ut=n("p"),Ad=r("The "),Dn=n("a"),Dd=r("BlenderbotSmallForConditionalGeneration"),Gd=r(" forward method, overrides the "),$a=n("code"),Ud=r("__call__"),Wd=r(" special method."),Rd=i(),v(Et.$$.fragment),Hd=i(),v(Mt.$$.fragment),kr=i(),mt=n("h2"),Ct=n("a"),Sa=n("span"),v(No.$$.fragment),Kd=i(),xa=n("span"),Qd=r("BlenderbotSmallForCausalLM"),vr=i(),ht=n("div"),v(Io.$$.fragment),Vd=i(),jt=n("div"),v(Ao.$$.fragment),Jd=i(),v(Ot.$$.fragment),yr=i(),ft=n("h2"),Pt=n("a"),Ba=n("span"),v(Do.$$.fragment),Xd=i(),za=n("span"),Yd=r("TFBlenderbotSmallModel"),Tr=i(),pe=n("div"),v(Go.$$.fragment),Zd=i(),Uo=n("p"),ei=r(`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=n("a"),ti=r("TFPreTrainedModel"),oi=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ni=i(),Wo=n("p"),ai=r("This model is also a "),Ro=n("a"),si=r("tf.keras.Model"),ri=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),li=i(),v(Lt.$$.fragment),di=i(),Me=n("div"),v(Ho.$$.fragment),ii=i(),_t=n("p"),ci=r("The "),Un=n("a"),pi=r("TFBlenderbotSmallModel"),ui=r(" forward method, overrides the "),Fa=n("code"),mi=r("__call__"),hi=r(" special method."),fi=i(),v(Nt.$$.fragment),_i=i(),v(It.$$.fragment),wr=i(),gt=n("h2"),At=n("a"),qa=n("span"),v(Ko.$$.fragment),gi=i(),Ea=n("span"),bi=r("TFBlenderbotSmallForConditionalGeneration"),$r=i(),ue=n("div"),v(Qo.$$.fragment),ki=i(),Vo=n("p"),vi=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Wn=n("a"),yi=r("TFPreTrainedModel"),Ti=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wi=i(),Jo=n("p"),$i=r("This model is also a "),Xo=n("a"),Si=r("tf.keras.Model"),xi=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bi=i(),v(Dt.$$.fragment),zi=i(),P=n("div"),v(Yo.$$.fragment),Fi=i(),bt=n("p"),qi=r("The "),Rn=n("a"),Ei=r("TFBlenderbotSmallForConditionalGeneration"),Mi=r(" forward method, overrides the "),Ma=n("code"),Ci=r("__call__"),ji=r(" special method."),Oi=i(),v(Gt.$$.fragment),Pi=i(),Ca=n("p"),Li=r("Conversation example::"),Ni=i(),ja=n("blockquote"),Oa=n("blockquote"),Pa=n("blockquote"),La=n("p"),Ii=r(`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Ai=i(),Na=n("blockquote"),Ia=n("blockquote"),Aa=n("blockquote"),Da=n("p"),Di=r(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Gi=i(),Ga=n("blockquote"),Ua=n("blockquote"),Wa=n("blockquote"),Ra=n("p"),Ui=r(`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),Wi=i(),Ha=n("blockquote"),Ka=n("blockquote"),Qa=n("blockquote"),Zo=n("p"),Ri=r(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),Va=n("s"),Hi=r("what kind of carbs do they eat? i don\u2019t know much about carbs."),Ki=r(` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),Qi=i(),Ja=n("blockquote"),Xa=n("blockquote"),Ya=n("blockquote"),Za=n("p"),Vi=r(`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Sr=i(),kt=n("h2"),Ut=n("a"),es=n("span"),v(en.$$.fragment),Ji=i(),ts=n("span"),Xi=r("FlaxBlenderbotSmallModel"),xr=i(),I=n("div"),v(tn.$$.fragment),Yi=i(),on=n("p"),Zi=r(`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Hn=n("a"),ec=r("FlaxPreTrainedModel"),tc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oc=i(),nn=n("p"),nc=r(`This model is also a Flax Linen
`),an=n("a"),ac=r("flax.nn.Module"),sc=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),rc=i(),os=n("p"),lc=r("Finally, this model supports inherent JAX features such as:"),dc=i(),Ue=n("ul"),ns=n("li"),sn=n("a"),ic=r("Just-In-Time (JIT) compilation"),cc=i(),as=n("li"),rn=n("a"),pc=r("Automatic Differentiation"),uc=i(),ss=n("li"),ln=n("a"),mc=r("Vectorization"),hc=i(),rs=n("li"),dn=n("a"),fc=r("Parallelization"),_c=i(),Wt=n("div"),v(cn.$$.fragment),gc=i(),v(Rt.$$.fragment),bc=i(),Ht=n("div"),v(pn.$$.fragment),kc=i(),v(Kt.$$.fragment),vc=i(),Qt=n("div"),v(un.$$.fragment),yc=i(),v(Vt.$$.fragment),Br=i(),vt=n("h2"),Jt=n("a"),ls=n("span"),v(mn.$$.fragment),Tc=i(),ds=n("span"),wc=r("FlaxBlenderbotForConditionalGeneration"),zr=i(),A=n("div"),v(hn.$$.fragment),$c=i(),fn=n("p"),Sc=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Kn=n("a"),xc=r("FlaxPreTrainedModel"),Bc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zc=i(),_n=n("p"),Fc=r(`This model is also a Flax Linen
`),gn=n("a"),qc=r("flax.nn.Module"),Ec=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mc=i(),is=n("p"),Cc=r("Finally, this model supports inherent JAX features such as:"),jc=i(),We=n("ul"),cs=n("li"),bn=n("a"),Oc=r("Just-In-Time (JIT) compilation"),Pc=i(),ps=n("li"),kn=n("a"),Lc=r("Automatic Differentiation"),Nc=i(),us=n("li"),vn=n("a"),Ic=r("Vectorization"),Ac=i(),ms=n("li"),yn=n("a"),Dc=r("Parallelization"),Gc=i(),E=n("div"),v(Tn.$$.fragment),Uc=i(),yt=n("p"),Wc=r("The "),hs=n("code"),Rc=r("FlaxBlenderbotSmallPreTrainedModel"),Hc=r(" forward method, overrides the "),fs=n("code"),Kc=r("__call__"),Qc=r(" special method."),Vc=i(),v(Xt.$$.fragment),Jc=i(),_s=n("p"),Xc=r("Summarization example:"),Yc=i(),gs=n("blockquote"),bs=n("blockquote"),ks=n("blockquote"),vs=n("p"),Zc=r("from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),ep=i(),ys=n("blockquote"),Ts=n("blockquote"),ws=n("blockquote"),$s=n("p"),tp=r(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),op=i(),Ss=n("blockquote"),xs=n("blockquote"),Bs=n("blockquote"),zs=n("p"),np=r(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),ap=i(),Fs=n("blockquote"),qs=n("blockquote"),wn=n("blockquote"),Yt=n("h1"),Zt=n("a"),Es=n("span"),v($n.$$.fragment),sp=i(),Ms=n("span"),rp=r("Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),lp=i(),Cs=n("p"),dp=r("print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),ip=i(),js=n("p"),cp=r("Mask filling example:"),pp=i(),Os=n("blockquote"),Ps=n("blockquote"),Ls=n("blockquote"),Ns=n("p"),up=r(`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),mp=i(),Is=n("blockquote"),As=n("blockquote"),Ds=n("blockquote"),Gs=n("p"),hp=r(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),fp=i(),Us=n("blockquote"),Ws=n("blockquote"),Rs=n("blockquote"),Hs=n("p"),_p=r(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),gp=i(),Ks=n("blockquote"),Qs=n("blockquote"),Vs=n("blockquote"),Js=n("p"),bp=r("tokenizer.decode(predictions).split()"),kp=i(),eo=n("div"),v(Sn.$$.fragment),vp=i(),v(to.$$.fragment),yp=i(),oo=n("div"),v(xn.$$.fragment),Tp=i(),v(no.$$.fragment),this.h()},l(o){const g=ph('[data-svelte="svelte-1phssyn"]',document.head);p=a(g,"META",{name:!0,content:!0}),g.forEach(t),k=c(o),f=a(o,"H1",{class:!0});var Bn=s(f);m=a(Bn,"A",{id:!0,class:!0,href:!0});var Xs=s(m);b=a(Xs,"SPAN",{});var Ys=s(b);y(d.$$.fragment,Ys),Ys.forEach(t),Xs.forEach(t),h=c(Bn),F=a(Bn,"SPAN",{});var Zs=s(F);Ce=l(Zs,"Blenderbot Small"),Zs.forEach(t),Bn.forEach(t),me=c(o),B=a(o,"P",{});var _e=s(B);je=l(_e,"Note that "),W=a(_e,"A",{href:!0});var er=s(W);Oe=l(er,"BlenderbotSmallModel"),er.forEach(t),Pe=l(_e,` and
`),R=a(_e,"A",{href:!0});var tr=s(R);Le=l(tr,"BlenderbotSmallForConditionalGeneration"),tr.forEach(t),Ne=l(_e,` are only used in combination with the checkpoint
`),Q=a(_e,"A",{href:!0,rel:!0});var or=s(Q);V=l(or,"facebook/blenderbot-90M"),or.forEach(t),Ie=l(_e,`. Larger Blenderbot checkpoints should
instead be used with `),Z=a(_e,"A",{href:!0});var nr=s(Z);j=l(nr,"BlenderbotModel"),nr.forEach(t),L=l(_e,` and
`),he=a(_e,"A",{href:!0});var ar=s(he);ae=l(ar,"BlenderbotForConditionalGeneration"),ar.forEach(t),_e.forEach(t),Be=c(o),J=a(o,"H2",{class:!0});var zn=s(J);D=a(zn,"A",{id:!0,class:!0,href:!0});var sr=s(D);be=a(sr,"SPAN",{});var rr=s(be);y(se.$$.fragment,rr),rr.forEach(t),sr.forEach(t),N=c(zn),ke=a(zn,"SPAN",{});var lr=s(ke);re=l(lr,"Overview"),lr.forEach(t),zn.forEach(t),ze=c(o),ee=a(o,"P",{});var Fn=s(ee);le=l(Fn,"The Blender chatbot model was proposed in "),de=a(Fn,"A",{href:!0,rel:!0});var dr=s(de);Ae=l(dr,"Recipes for building an open-domain chatbot"),dr.forEach(t),X=l(Fn,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Fn.forEach(t),Fe=c(o),H=a(o,"P",{});var ir=s(H);De=l(ir,"The abstract of the paper is the following:"),ir.forEach(t),x=c(o),q=a(o,"P",{});var $p=s(q);ie=a($p,"EM",{});var Sp=s(ie);Ze=l(Sp,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Sp.forEach(t),$p.forEach(t),Re=c(o),O=a(o,"P",{});var Qn=s(O);et=l(Qn,"This model was contributed by "),ve=a(Qn,"A",{href:!0,rel:!0});var xp=s(ve);tt=l(xp,"patrickvonplaten"),xp.forEach(t),Y=l(Qn,`. The authors\u2019 code can be
found `),G=a(Qn,"A",{href:!0,rel:!0});var Bp=s(G);ot=l(Bp,"here"),Bp.forEach(t),nt=l(Qn," ."),Qn.forEach(t),te=c(o),ce=a(o,"H2",{class:!0});var qr=s(ce);fe=a(qr,"A",{id:!0,class:!0,href:!0});var zp=s(fe);ye=a(zp,"SPAN",{});var Fp=s(ye);y(Te.$$.fragment,Fp),Fp.forEach(t),zp.forEach(t),ul=c(qr),ra=a(qr,"SPAN",{});var qp=s(ra);ml=l(qp,"BlenderbotSmallConfig"),qp.forEach(t),qr.forEach(t),cr=c(o),we=a(o,"DIV",{class:!0});var ao=s(we);y(mo.$$.fragment,ao),hl=c(ao),at=a(ao,"P",{});var Vn=s(at);fl=l(Vn,"This is the configuration class to store the configuration of a "),En=a(Vn,"A",{href:!0});var Ep=s(En);_l=l(Ep,"BlenderbotSmallModel"),Ep.forEach(t),gl=l(Vn,`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),ho=a(Vn,"A",{href:!0,rel:!0});var Mp=s(ho);bl=l(Mp,"facebook/blenderbot_small-90M"),Mp.forEach(t),kl=l(Vn," architecture."),Vn.forEach(t),vl=c(ao),st=a(ao,"P",{});var Jn=s(st);yl=l(Jn,"Configuration objects inherit from "),Mn=a(Jn,"A",{href:!0});var Cp=s(Mn);Tl=l(Cp,"PretrainedConfig"),Cp.forEach(t),wl=l(Jn,` and can be used to control the model outputs. Read the
documentation from `),Cn=a(Jn,"A",{href:!0});var jp=s(Cn);$l=l(jp,"PretrainedConfig"),jp.forEach(t),Sl=l(Jn," for more information."),Jn.forEach(t),xl=c(ao),y(Tt.$$.fragment,ao),ao.forEach(t),pr=c(o),rt=a(o,"H2",{class:!0});var Er=s(rt);wt=a(Er,"A",{id:!0,class:!0,href:!0});var Op=s(wt);la=a(Op,"SPAN",{});var Pp=s(la);y(fo.$$.fragment,Pp),Pp.forEach(t),Op.forEach(t),Bl=c(Er),da=a(Er,"SPAN",{});var Lp=s(da);zl=l(Lp,"BlenderbotSmallTokenizer"),Lp.forEach(t),Er.forEach(t),ur=c(o),U=a(o,"DIV",{class:!0});var ge=s(U);y(_o.$$.fragment,ge),Fl=c(ge),ia=a(ge,"P",{});var Np=s(ia);ql=l(Np,"Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),Np.forEach(t),El=c(ge),go=a(ge,"P",{});var Mr=s(go);Ml=l(Mr,"This tokenizer inherits from "),jn=a(Mr,"A",{href:!0});var Ip=s(jn);Cl=l(Ip,"PreTrainedTokenizer"),Ip.forEach(t),jl=l(Mr,` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Mr.forEach(t),Ol=c(ge),He=a(ge,"DIV",{class:!0});var Xn=s(He);y(bo.$$.fragment,Xn),Pl=c(Xn),ca=a(Xn,"P",{});var Ap=s(ca);Ll=l(Ap,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Ap.forEach(t),Nl=c(Xn),pa=a(Xn,"P",{});var Dp=s(pa);Il=l(Dp,"This implementation does not add special tokens and this method should be overridden in a subclass."),Dp.forEach(t),Xn.forEach(t),Al=c(ge),$t=a(ge,"DIV",{class:!0});var Cr=s($t);y(ko.$$.fragment,Cr),Dl=c(Cr),lt=a(Cr,"P",{});var Yn=s(lt);Gl=l(Yn,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ua=a(Yn,"CODE",{});var Gp=s(ua);Ul=l(Gp,"prepare_for_model"),Gp.forEach(t),Wl=l(Yn," or "),ma=a(Yn,"CODE",{});var Up=s(ma);Rl=l(Up,"encode_plus"),Up.forEach(t),Hl=l(Yn," methods."),Yn.forEach(t),Cr.forEach(t),Kl=c(ge),Ke=a(ge,"DIV",{class:!0});var Zn=s(Ke);y(vo.$$.fragment,Zn),Ql=c(Zn),On=a(Zn,"P",{});var wp=s(On);Vl=l(wp,"Create the token type IDs corresponding to the sequences passed. "),Pn=a(wp,"A",{href:!0});var Wp=s(Pn);Jl=l(Wp,`What are token type
IDs?`),Wp.forEach(t),wp.forEach(t),Xl=c(Zn),ha=a(Zn,"P",{});var Rp=s(ha);Yl=l(Rp,"Should be overridden in a subclass if the model has a special way of building those."),Rp.forEach(t),Zn.forEach(t),Zl=c(ge),Ln=a(ge,"DIV",{class:!0});var Hp=s(Ln);y(yo.$$.fragment,Hp),Hp.forEach(t),ge.forEach(t),mr=c(o),dt=a(o,"H2",{class:!0});var jr=s(dt);St=a(jr,"A",{id:!0,class:!0,href:!0});var Kp=s(St);fa=a(Kp,"SPAN",{});var Qp=s(fa);y(To.$$.fragment,Qp),Qp.forEach(t),Kp.forEach(t),ed=c(jr),_a=a(jr,"SPAN",{});var Vp=s(_a);td=l(Vp,"BlenderbotSmallTokenizerFast"),Vp.forEach(t),jr.forEach(t),hr=c(o),Ge=a(o,"DIV",{class:!0});var ea=s(Ge);y(wo.$$.fragment,ea),od=c(ea),$o=a(ea,"P",{});var Or=s($o);nd=l(Or,"Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),ga=a(Or,"EM",{});var Jp=s(ga);ad=l(Jp,"tokenizers"),Jp.forEach(t),sd=l(Or," library)."),Or.forEach(t),rd=c(ea),xt=a(ea,"DIV",{class:!0});var Pr=s(xt);y(So.$$.fragment,Pr),ld=c(Pr),ba=a(Pr,"P",{});var Xp=s(ba);dd=l(Xp,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),Xp.forEach(t),Pr.forEach(t),ea.forEach(t),fr=c(o),it=a(o,"H2",{class:!0});var Lr=s(it);Bt=a(Lr,"A",{id:!0,class:!0,href:!0});var Yp=s(Bt);ka=a(Yp,"SPAN",{});var Zp=s(ka);y(xo.$$.fragment,Zp),Zp.forEach(t),Yp.forEach(t),id=c(Lr),va=a(Lr,"SPAN",{});var eu=s(va);cd=l(eu,"BlenderbotSmallModel"),eu.forEach(t),Lr.forEach(t),_r=c(o),$e=a(o,"DIV",{class:!0});var so=s($e);y(Bo.$$.fragment,so),pd=c(so),zo=a(so,"P",{});var Nr=s(zo);ud=l(Nr,`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=a(Nr,"A",{href:!0});var tu=s(Nn);md=l(tu,"PreTrainedModel"),tu.forEach(t),hd=l(Nr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nr.forEach(t),fd=c(so),Fo=a(so,"P",{});var Ir=s(Fo);_d=l(Ir,"This model is also a PyTorch "),qo=a(Ir,"A",{href:!0,rel:!0});var ou=s(qo);gd=l(ou,"torch.nn.Module"),ou.forEach(t),bd=l(Ir,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ir.forEach(t),kd=c(so),qe=a(so,"DIV",{class:!0});var ro=s(qe);y(Eo.$$.fragment,ro),vd=c(ro),ct=a(ro,"P",{});var ta=s(ct);yd=l(ta,"The "),In=a(ta,"A",{href:!0});var nu=s(In);Td=l(nu,"BlenderbotSmallModel"),nu.forEach(t),wd=l(ta," forward method, overrides the "),ya=a(ta,"CODE",{});var au=s(ya);$d=l(au,"__call__"),au.forEach(t),Sd=l(ta," special method."),ta.forEach(t),xd=c(ro),y(zt.$$.fragment,ro),Bd=c(ro),y(Ft.$$.fragment,ro),ro.forEach(t),so.forEach(t),gr=c(o),pt=a(o,"H2",{class:!0});var Ar=s(pt);qt=a(Ar,"A",{id:!0,class:!0,href:!0});var su=s(qt);Ta=a(su,"SPAN",{});var ru=s(Ta);y(Mo.$$.fragment,ru),ru.forEach(t),su.forEach(t),zd=c(Ar),wa=a(Ar,"SPAN",{});var lu=s(wa);Fd=l(lu,"BlenderbotSmallForConditionalGeneration"),lu.forEach(t),Ar.forEach(t),br=c(o),Se=a(o,"DIV",{class:!0});var lo=s(Se);y(Co.$$.fragment,lo),qd=c(lo),jo=a(lo,"P",{});var Dr=s(jo);Ed=l(Dr,`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=a(Dr,"A",{href:!0});var du=s(An);Md=l(du,"PreTrainedModel"),du.forEach(t),Cd=l(Dr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dr.forEach(t),jd=c(lo),Oo=a(lo,"P",{});var Gr=s(Oo);Od=l(Gr,"This model is also a PyTorch "),Po=a(Gr,"A",{href:!0,rel:!0});var iu=s(Po);Pd=l(iu,"torch.nn.Module"),iu.forEach(t),Ld=l(Gr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gr.forEach(t),Nd=c(lo),Ee=a(lo,"DIV",{class:!0});var io=s(Ee);y(Lo.$$.fragment,io),Id=c(io),ut=a(io,"P",{});var oa=s(ut);Ad=l(oa,"The "),Dn=a(oa,"A",{href:!0});var cu=s(Dn);Dd=l(cu,"BlenderbotSmallForConditionalGeneration"),cu.forEach(t),Gd=l(oa," forward method, overrides the "),$a=a(oa,"CODE",{});var pu=s($a);Ud=l(pu,"__call__"),pu.forEach(t),Wd=l(oa," special method."),oa.forEach(t),Rd=c(io),y(Et.$$.fragment,io),Hd=c(io),y(Mt.$$.fragment,io),io.forEach(t),lo.forEach(t),kr=c(o),mt=a(o,"H2",{class:!0});var Ur=s(mt);Ct=a(Ur,"A",{id:!0,class:!0,href:!0});var uu=s(Ct);Sa=a(uu,"SPAN",{});var mu=s(Sa);y(No.$$.fragment,mu),mu.forEach(t),uu.forEach(t),Kd=c(Ur),xa=a(Ur,"SPAN",{});var hu=s(xa);Qd=l(hu,"BlenderbotSmallForCausalLM"),hu.forEach(t),Ur.forEach(t),vr=c(o),ht=a(o,"DIV",{class:!0});var Wr=s(ht);y(Io.$$.fragment,Wr),Vd=c(Wr),jt=a(Wr,"DIV",{class:!0});var Rr=s(jt);y(Ao.$$.fragment,Rr),Jd=c(Rr),y(Ot.$$.fragment,Rr),Rr.forEach(t),Wr.forEach(t),yr=c(o),ft=a(o,"H2",{class:!0});var Hr=s(ft);Pt=a(Hr,"A",{id:!0,class:!0,href:!0});var fu=s(Pt);Ba=a(fu,"SPAN",{});var _u=s(Ba);y(Do.$$.fragment,_u),_u.forEach(t),fu.forEach(t),Xd=c(Hr),za=a(Hr,"SPAN",{});var gu=s(za);Yd=l(gu,"TFBlenderbotSmallModel"),gu.forEach(t),Hr.forEach(t),Tr=c(o),pe=a(o,"DIV",{class:!0});var Qe=s(pe);y(Go.$$.fragment,Qe),Zd=c(Qe),Uo=a(Qe,"P",{});var Kr=s(Uo);ei=l(Kr,`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=a(Kr,"A",{href:!0});var bu=s(Gn);ti=l(bu,"TFPreTrainedModel"),bu.forEach(t),oi=l(Kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kr.forEach(t),ni=c(Qe),Wo=a(Qe,"P",{});var Qr=s(Wo);ai=l(Qr,"This model is also a "),Ro=a(Qr,"A",{href:!0,rel:!0});var ku=s(Ro);si=l(ku,"tf.keras.Model"),ku.forEach(t),ri=l(Qr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qr.forEach(t),li=c(Qe),y(Lt.$$.fragment,Qe),di=c(Qe),Me=a(Qe,"DIV",{class:!0});var co=s(Me);y(Ho.$$.fragment,co),ii=c(co),_t=a(co,"P",{});var na=s(_t);ci=l(na,"The "),Un=a(na,"A",{href:!0});var vu=s(Un);pi=l(vu,"TFBlenderbotSmallModel"),vu.forEach(t),ui=l(na," forward method, overrides the "),Fa=a(na,"CODE",{});var yu=s(Fa);mi=l(yu,"__call__"),yu.forEach(t),hi=l(na," special method."),na.forEach(t),fi=c(co),y(Nt.$$.fragment,co),_i=c(co),y(It.$$.fragment,co),co.forEach(t),Qe.forEach(t),wr=c(o),gt=a(o,"H2",{class:!0});var Vr=s(gt);At=a(Vr,"A",{id:!0,class:!0,href:!0});var Tu=s(At);qa=a(Tu,"SPAN",{});var wu=s(qa);y(Ko.$$.fragment,wu),wu.forEach(t),Tu.forEach(t),gi=c(Vr),Ea=a(Vr,"SPAN",{});var $u=s(Ea);bi=l($u,"TFBlenderbotSmallForConditionalGeneration"),$u.forEach(t),Vr.forEach(t),$r=c(o),ue=a(o,"DIV",{class:!0});var Ve=s(ue);y(Qo.$$.fragment,Ve),ki=c(Ve),Vo=a(Ve,"P",{});var Jr=s(Vo);vi=l(Jr,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Wn=a(Jr,"A",{href:!0});var Su=s(Wn);yi=l(Su,"TFPreTrainedModel"),Su.forEach(t),Ti=l(Jr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jr.forEach(t),wi=c(Ve),Jo=a(Ve,"P",{});var Xr=s(Jo);$i=l(Xr,"This model is also a "),Xo=a(Xr,"A",{href:!0,rel:!0});var xu=s(Xo);Si=l(xu,"tf.keras.Model"),xu.forEach(t),xi=l(Xr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xr.forEach(t),Bi=c(Ve),y(Dt.$$.fragment,Ve),zi=c(Ve),P=a(Ve,"DIV",{class:!0});var K=s(P);y(Yo.$$.fragment,K),Fi=c(K),bt=a(K,"P",{});var aa=s(bt);qi=l(aa,"The "),Rn=a(aa,"A",{href:!0});var Bu=s(Rn);Ei=l(Bu,"TFBlenderbotSmallForConditionalGeneration"),Bu.forEach(t),Mi=l(aa," forward method, overrides the "),Ma=a(aa,"CODE",{});var zu=s(Ma);Ci=l(zu,"__call__"),zu.forEach(t),ji=l(aa," special method."),aa.forEach(t),Oi=c(K),y(Gt.$$.fragment,K),Pi=c(K),Ca=a(K,"P",{});var Fu=s(Ca);Li=l(Fu,"Conversation example::"),Fu.forEach(t),Ni=c(K),ja=a(K,"BLOCKQUOTE",{});var qu=s(ja);Oa=a(qu,"BLOCKQUOTE",{});var Eu=s(Oa);Pa=a(Eu,"BLOCKQUOTE",{});var Mu=s(Pa);La=a(Mu,"P",{});var Cu=s(La);Ii=l(Cu,`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Cu.forEach(t),Mu.forEach(t),Eu.forEach(t),qu.forEach(t),Ai=c(K),Na=a(K,"BLOCKQUOTE",{});var ju=s(Na);Ia=a(ju,"BLOCKQUOTE",{});var Ou=s(Ia);Aa=a(Ou,"BLOCKQUOTE",{});var Pu=s(Aa);Da=a(Pu,"P",{});var Lu=s(Da);Di=l(Lu,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Lu.forEach(t),Pu.forEach(t),Ou.forEach(t),ju.forEach(t),Gi=c(K),Ga=a(K,"BLOCKQUOTE",{});var Nu=s(Ga);Ua=a(Nu,"BLOCKQUOTE",{});var Iu=s(Ua);Wa=a(Iu,"BLOCKQUOTE",{});var Au=s(Wa);Ra=a(Au,"P",{});var Du=s(Ra);Ui=l(Du,`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),Du.forEach(t),Au.forEach(t),Iu.forEach(t),Nu.forEach(t),Wi=c(K),Ha=a(K,"BLOCKQUOTE",{});var Gu=s(Ha);Ka=a(Gu,"BLOCKQUOTE",{});var Uu=s(Ka);Qa=a(Uu,"BLOCKQUOTE",{});var Wu=s(Qa);Zo=a(Wu,"P",{});var Yr=s(Zo);Ri=l(Yr,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),Va=a(Yr,"S",{});var Ru=s(Va);Hi=l(Ru,"what kind of carbs do they eat? i don\u2019t know much about carbs."),Ru.forEach(t),Ki=l(Yr,` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),Yr.forEach(t),Wu.forEach(t),Uu.forEach(t),Gu.forEach(t),Qi=c(K),Ja=a(K,"BLOCKQUOTE",{});var Hu=s(Ja);Xa=a(Hu,"BLOCKQUOTE",{});var Ku=s(Xa);Ya=a(Ku,"BLOCKQUOTE",{});var Qu=s(Ya);Za=a(Qu,"P",{});var Vu=s(Za);Vi=l(Vu,`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Vu.forEach(t),Qu.forEach(t),Ku.forEach(t),Hu.forEach(t),K.forEach(t),Ve.forEach(t),Sr=c(o),kt=a(o,"H2",{class:!0});var Zr=s(kt);Ut=a(Zr,"A",{id:!0,class:!0,href:!0});var Ju=s(Ut);es=a(Ju,"SPAN",{});var Xu=s(es);y(en.$$.fragment,Xu),Xu.forEach(t),Ju.forEach(t),Ji=c(Zr),ts=a(Zr,"SPAN",{});var Yu=s(ts);Xi=l(Yu,"FlaxBlenderbotSmallModel"),Yu.forEach(t),Zr.forEach(t),xr=c(o),I=a(o,"DIV",{class:!0});var oe=s(I);y(tn.$$.fragment,oe),Yi=c(oe),on=a(oe,"P",{});var el=s(on);Zi=l(el,`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Hn=a(el,"A",{href:!0});var Zu=s(Hn);ec=l(Zu,"FlaxPreTrainedModel"),Zu.forEach(t),tc=l(el,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),el.forEach(t),oc=c(oe),nn=a(oe,"P",{});var tl=s(nn);nc=l(tl,`This model is also a Flax Linen
`),an=a(tl,"A",{href:!0,rel:!0});var em=s(an);ac=l(em,"flax.nn.Module"),em.forEach(t),sc=l(tl,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),tl.forEach(t),rc=c(oe),os=a(oe,"P",{});var tm=s(os);lc=l(tm,"Finally, this model supports inherent JAX features such as:"),tm.forEach(t),dc=c(oe),Ue=a(oe,"UL",{});var po=s(Ue);ns=a(po,"LI",{});var om=s(ns);sn=a(om,"A",{href:!0,rel:!0});var nm=s(sn);ic=l(nm,"Just-In-Time (JIT) compilation"),nm.forEach(t),om.forEach(t),cc=c(po),as=a(po,"LI",{});var am=s(as);rn=a(am,"A",{href:!0,rel:!0});var sm=s(rn);pc=l(sm,"Automatic Differentiation"),sm.forEach(t),am.forEach(t),uc=c(po),ss=a(po,"LI",{});var rm=s(ss);ln=a(rm,"A",{href:!0,rel:!0});var lm=s(ln);mc=l(lm,"Vectorization"),lm.forEach(t),rm.forEach(t),hc=c(po),rs=a(po,"LI",{});var dm=s(rs);dn=a(dm,"A",{href:!0,rel:!0});var im=s(dn);fc=l(im,"Parallelization"),im.forEach(t),dm.forEach(t),po.forEach(t),_c=c(oe),Wt=a(oe,"DIV",{class:!0});var ol=s(Wt);y(cn.$$.fragment,ol),gc=c(ol),y(Rt.$$.fragment,ol),ol.forEach(t),bc=c(oe),Ht=a(oe,"DIV",{class:!0});var nl=s(Ht);y(pn.$$.fragment,nl),kc=c(nl),y(Kt.$$.fragment,nl),nl.forEach(t),vc=c(oe),Qt=a(oe,"DIV",{class:!0});var al=s(Qt);y(un.$$.fragment,al),yc=c(al),y(Vt.$$.fragment,al),al.forEach(t),oe.forEach(t),Br=c(o),vt=a(o,"H2",{class:!0});var sl=s(vt);Jt=a(sl,"A",{id:!0,class:!0,href:!0});var cm=s(Jt);ls=a(cm,"SPAN",{});var pm=s(ls);y(mn.$$.fragment,pm),pm.forEach(t),cm.forEach(t),Tc=c(sl),ds=a(sl,"SPAN",{});var um=s(ds);wc=l(um,"FlaxBlenderbotForConditionalGeneration"),um.forEach(t),sl.forEach(t),zr=c(o),A=a(o,"DIV",{class:!0});var ne=s(A);y(hn.$$.fragment,ne),$c=c(ne),fn=a(ne,"P",{});var rl=s(fn);Sc=l(rl,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Kn=a(rl,"A",{href:!0});var mm=s(Kn);xc=l(mm,"FlaxPreTrainedModel"),mm.forEach(t),Bc=l(rl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rl.forEach(t),zc=c(ne),_n=a(ne,"P",{});var ll=s(_n);Fc=l(ll,`This model is also a Flax Linen
`),gn=a(ll,"A",{href:!0,rel:!0});var hm=s(gn);qc=l(hm,"flax.nn.Module"),hm.forEach(t),Ec=l(ll,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ll.forEach(t),Mc=c(ne),is=a(ne,"P",{});var fm=s(is);Cc=l(fm,"Finally, this model supports inherent JAX features such as:"),fm.forEach(t),jc=c(ne),We=a(ne,"UL",{});var uo=s(We);cs=a(uo,"LI",{});var _m=s(cs);bn=a(_m,"A",{href:!0,rel:!0});var gm=s(bn);Oc=l(gm,"Just-In-Time (JIT) compilation"),gm.forEach(t),_m.forEach(t),Pc=c(uo),ps=a(uo,"LI",{});var bm=s(ps);kn=a(bm,"A",{href:!0,rel:!0});var km=s(kn);Lc=l(km,"Automatic Differentiation"),km.forEach(t),bm.forEach(t),Nc=c(uo),us=a(uo,"LI",{});var vm=s(us);vn=a(vm,"A",{href:!0,rel:!0});var ym=s(vn);Ic=l(ym,"Vectorization"),ym.forEach(t),vm.forEach(t),Ac=c(uo),ms=a(uo,"LI",{});var Tm=s(ms);yn=a(Tm,"A",{href:!0,rel:!0});var wm=s(yn);Dc=l(wm,"Parallelization"),wm.forEach(t),Tm.forEach(t),uo.forEach(t),Gc=c(ne),E=a(ne,"DIV",{class:!0});var M=s(E);y(Tn.$$.fragment,M),Uc=c(M),yt=a(M,"P",{});var sa=s(yt);Wc=l(sa,"The "),hs=a(sa,"CODE",{});var $m=s(hs);Rc=l($m,"FlaxBlenderbotSmallPreTrainedModel"),$m.forEach(t),Hc=l(sa," forward method, overrides the "),fs=a(sa,"CODE",{});var Sm=s(fs);Kc=l(Sm,"__call__"),Sm.forEach(t),Qc=l(sa," special method."),sa.forEach(t),Vc=c(M),y(Xt.$$.fragment,M),Jc=c(M),_s=a(M,"P",{});var xm=s(_s);Xc=l(xm,"Summarization example:"),xm.forEach(t),Yc=c(M),gs=a(M,"BLOCKQUOTE",{});var Bm=s(gs);bs=a(Bm,"BLOCKQUOTE",{});var zm=s(bs);ks=a(zm,"BLOCKQUOTE",{});var Fm=s(ks);vs=a(Fm,"P",{});var qm=s(vs);Zc=l(qm,"from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),qm.forEach(t),Fm.forEach(t),zm.forEach(t),Bm.forEach(t),ep=c(M),ys=a(M,"BLOCKQUOTE",{});var Em=s(ys);Ts=a(Em,"BLOCKQUOTE",{});var Mm=s(Ts);ws=a(Mm,"BLOCKQUOTE",{});var Cm=s(ws);$s=a(Cm,"P",{});var jm=s($s);tp=l(jm,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),jm.forEach(t),Cm.forEach(t),Mm.forEach(t),Em.forEach(t),op=c(M),Ss=a(M,"BLOCKQUOTE",{});var Om=s(Ss);xs=a(Om,"BLOCKQUOTE",{});var Pm=s(xs);Bs=a(Pm,"BLOCKQUOTE",{});var Lm=s(Bs);zs=a(Lm,"P",{});var Nm=s(zs);np=l(Nm,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Nm.forEach(t),Lm.forEach(t),Pm.forEach(t),Om.forEach(t),ap=c(M),Fs=a(M,"BLOCKQUOTE",{});var Im=s(Fs);qs=a(Im,"BLOCKQUOTE",{});var Am=s(qs);wn=a(Am,"BLOCKQUOTE",{});var dl=s(wn);Yt=a(dl,"H1",{class:!0});var il=s(Yt);Zt=a(il,"A",{id:!0,class:!0,href:!0});var Dm=s(Zt);Es=a(Dm,"SPAN",{});var Gm=s(Es);y($n.$$.fragment,Gm),Gm.forEach(t),Dm.forEach(t),sp=c(il),Ms=a(il,"SPAN",{});var Um=s(Ms);rp=l(Um,"Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),Um.forEach(t),il.forEach(t),lp=c(dl),Cs=a(dl,"P",{});var Wm=s(Cs);dp=l(Wm,"print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),Wm.forEach(t),dl.forEach(t),Am.forEach(t),Im.forEach(t),ip=c(M),js=a(M,"P",{});var Rm=s(js);cp=l(Rm,"Mask filling example:"),Rm.forEach(t),pp=c(M),Os=a(M,"BLOCKQUOTE",{});var Hm=s(Os);Ps=a(Hm,"BLOCKQUOTE",{});var Km=s(Ps);Ls=a(Km,"BLOCKQUOTE",{});var Qm=s(Ls);Ns=a(Qm,"P",{});var Vm=s(Ns);up=l(Vm,`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),Vm.forEach(t),Qm.forEach(t),Km.forEach(t),Hm.forEach(t),mp=c(M),Is=a(M,"BLOCKQUOTE",{});var Jm=s(Is);As=a(Jm,"BLOCKQUOTE",{});var Xm=s(As);Ds=a(Xm,"BLOCKQUOTE",{});var Ym=s(Ds);Gs=a(Ym,"P",{});var Zm=s(Gs);hp=l(Zm,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Zm.forEach(t),Ym.forEach(t),Xm.forEach(t),Jm.forEach(t),fp=c(M),Us=a(M,"BLOCKQUOTE",{});var eh=s(Us);Ws=a(eh,"BLOCKQUOTE",{});var th=s(Ws);Rs=a(th,"BLOCKQUOTE",{});var oh=s(Rs);Hs=a(oh,"P",{});var nh=s(Hs);_p=l(nh,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),nh.forEach(t),oh.forEach(t),th.forEach(t),eh.forEach(t),gp=c(M),Ks=a(M,"BLOCKQUOTE",{});var ah=s(Ks);Qs=a(ah,"BLOCKQUOTE",{});var sh=s(Qs);Vs=a(sh,"BLOCKQUOTE",{});var rh=s(Vs);Js=a(rh,"P",{});var lh=s(Js);bp=l(lh,"tokenizer.decode(predictions).split()"),lh.forEach(t),rh.forEach(t),sh.forEach(t),ah.forEach(t),M.forEach(t),kp=c(ne),eo=a(ne,"DIV",{class:!0});var cl=s(eo);y(Sn.$$.fragment,cl),vp=c(cl),y(to.$$.fragment,cl),cl.forEach(t),yp=c(ne),oo=a(ne,"DIV",{class:!0});var pl=s(oo);y(xn.$$.fragment,pl),Tp=c(pl),y(no.$$.fragment,pl),pl.forEach(t),ne.forEach(t),this.h()},h(){u(p,"name","hf:doc:metadata"),u(p,"content",JSON.stringify(Eh)),u(m,"id","blenderbot-small"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#blenderbot-small"),u(f,"class","relative group"),u(W,"href","/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),u(R,"href","/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),u(Q,"href","https://huggingface.co/facebook/blenderbot-90M"),u(Q,"rel","nofollow"),u(Z,"href","/docs/transformers/v4.20.1/en/model_doc/blenderbot#transformers.BlenderbotModel"),u(he,"href","/docs/transformers/v4.20.1/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),u(D,"id","overview"),u(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(D,"href","#overview"),u(J,"class","relative group"),u(de,"href","https://arxiv.org/pdf/2004.13637.pdf"),u(de,"rel","nofollow"),u(ve,"href","https://huggingface.co/patrickvonplaten"),u(ve,"rel","nofollow"),u(G,"href","https://github.com/facebookresearch/ParlAI"),u(G,"rel","nofollow"),u(fe,"id","transformers.BlenderbotSmallConfig"),u(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fe,"href","#transformers.BlenderbotSmallConfig"),u(ce,"class","relative group"),u(En,"href","/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),u(ho,"href","https://huggingface.co/facebook/blenderbot_small-90M"),u(ho,"rel","nofollow"),u(Mn,"href","/docs/transformers/v4.20.1/en/main_classes/configuration#transformers.PretrainedConfig"),u(Cn,"href","/docs/transformers/v4.20.1/en/main_classes/configuration#transformers.PretrainedConfig"),u(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wt,"id","transformers.BlenderbotSmallTokenizer"),u(wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wt,"href","#transformers.BlenderbotSmallTokenizer"),u(rt,"class","relative group"),u(jn,"href","/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pn,"href","../glossary#token-type-ids"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(St,"id","transformers.BlenderbotSmallTokenizerFast"),u(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(St,"href","#transformers.BlenderbotSmallTokenizerFast"),u(dt,"class","relative group"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bt,"id","transformers.BlenderbotSmallModel"),u(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bt,"href","#transformers.BlenderbotSmallModel"),u(it,"class","relative group"),u(Nn,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel"),u(qo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(qo,"rel","nofollow"),u(In,"href","/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),u(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qt,"id","transformers.BlenderbotSmallForConditionalGeneration"),u(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(qt,"href","#transformers.BlenderbotSmallForConditionalGeneration"),u(pt,"class","relative group"),u(An,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel"),u(Po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Po,"rel","nofollow"),u(Dn,"href","/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),u(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ct,"id","transformers.BlenderbotSmallForCausalLM"),u(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ct,"href","#transformers.BlenderbotSmallForCausalLM"),u(mt,"class","relative group"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pt,"id","transformers.TFBlenderbotSmallModel"),u(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pt,"href","#transformers.TFBlenderbotSmallModel"),u(ft,"class","relative group"),u(Gn,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ro,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ro,"rel","nofollow"),u(Un,"href","/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel"),u(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(At,"id","transformers.TFBlenderbotSmallForConditionalGeneration"),u(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(At,"href","#transformers.TFBlenderbotSmallForConditionalGeneration"),u(gt,"class","relative group"),u(Wn,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(Xo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Xo,"rel","nofollow"),u(Rn,"href","/docs/transformers/v4.20.1/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallForConditionalGeneration"),u(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ut,"id","transformers.FlaxBlenderbotSmallModel"),u(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ut,"href","#transformers.FlaxBlenderbotSmallModel"),u(kt,"class","relative group"),u(Hn,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(an,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(an,"rel","nofollow"),u(sn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(sn,"rel","nofollow"),u(rn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(rn,"rel","nofollow"),u(ln,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ln,"rel","nofollow"),u(dn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(dn,"rel","nofollow"),u(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Jt,"id","transformers.FlaxBlenderbotSmallForConditionalGeneration"),u(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Jt,"href","#transformers.FlaxBlenderbotSmallForConditionalGeneration"),u(vt,"class","relative group"),u(Kn,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(gn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(gn,"rel","nofollow"),u(bn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(bn,"rel","nofollow"),u(kn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(kn,"rel","nofollow"),u(vn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(vn,"rel","nofollow"),u(yn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(yn,"rel","nofollow"),u(Zt,"id","generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),u(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Zt,"href","#generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),u(Yt,"class","relative group"),u(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,p),_(o,k,g),_(o,f,g),e(f,m),e(m,b),T(d,b,null),e(f,h),e(f,F),e(F,Ce),_(o,me,g),_(o,B,g),e(B,je),e(B,W),e(W,Oe),e(B,Pe),e(B,R),e(R,Le),e(B,Ne),e(B,Q),e(Q,V),e(B,Ie),e(B,Z),e(Z,j),e(B,L),e(B,he),e(he,ae),_(o,Be,g),_(o,J,g),e(J,D),e(D,be),T(se,be,null),e(J,N),e(J,ke),e(ke,re),_(o,ze,g),_(o,ee,g),e(ee,le),e(ee,de),e(de,Ae),e(ee,X),_(o,Fe,g),_(o,H,g),e(H,De),_(o,x,g),_(o,q,g),e(q,ie),e(ie,Ze),_(o,Re,g),_(o,O,g),e(O,et),e(O,ve),e(ve,tt),e(O,Y),e(O,G),e(G,ot),e(O,nt),_(o,te,g),_(o,ce,g),e(ce,fe),e(fe,ye),T(Te,ye,null),e(ce,ul),e(ce,ra),e(ra,ml),_(o,cr,g),_(o,we,g),T(mo,we,null),e(we,hl),e(we,at),e(at,fl),e(at,En),e(En,_l),e(at,gl),e(at,ho),e(ho,bl),e(at,kl),e(we,vl),e(we,st),e(st,yl),e(st,Mn),e(Mn,Tl),e(st,wl),e(st,Cn),e(Cn,$l),e(st,Sl),e(we,xl),T(Tt,we,null),_(o,pr,g),_(o,rt,g),e(rt,wt),e(wt,la),T(fo,la,null),e(rt,Bl),e(rt,da),e(da,zl),_(o,ur,g),_(o,U,g),T(_o,U,null),e(U,Fl),e(U,ia),e(ia,ql),e(U,El),e(U,go),e(go,Ml),e(go,jn),e(jn,Cl),e(go,jl),e(U,Ol),e(U,He),T(bo,He,null),e(He,Pl),e(He,ca),e(ca,Ll),e(He,Nl),e(He,pa),e(pa,Il),e(U,Al),e(U,$t),T(ko,$t,null),e($t,Dl),e($t,lt),e(lt,Gl),e(lt,ua),e(ua,Ul),e(lt,Wl),e(lt,ma),e(ma,Rl),e(lt,Hl),e(U,Kl),e(U,Ke),T(vo,Ke,null),e(Ke,Ql),e(Ke,On),e(On,Vl),e(On,Pn),e(Pn,Jl),e(Ke,Xl),e(Ke,ha),e(ha,Yl),e(U,Zl),e(U,Ln),T(yo,Ln,null),_(o,mr,g),_(o,dt,g),e(dt,St),e(St,fa),T(To,fa,null),e(dt,ed),e(dt,_a),e(_a,td),_(o,hr,g),_(o,Ge,g),T(wo,Ge,null),e(Ge,od),e(Ge,$o),e($o,nd),e($o,ga),e(ga,ad),e($o,sd),e(Ge,rd),e(Ge,xt),T(So,xt,null),e(xt,ld),e(xt,ba),e(ba,dd),_(o,fr,g),_(o,it,g),e(it,Bt),e(Bt,ka),T(xo,ka,null),e(it,id),e(it,va),e(va,cd),_(o,_r,g),_(o,$e,g),T(Bo,$e,null),e($e,pd),e($e,zo),e(zo,ud),e(zo,Nn),e(Nn,md),e(zo,hd),e($e,fd),e($e,Fo),e(Fo,_d),e(Fo,qo),e(qo,gd),e(Fo,bd),e($e,kd),e($e,qe),T(Eo,qe,null),e(qe,vd),e(qe,ct),e(ct,yd),e(ct,In),e(In,Td),e(ct,wd),e(ct,ya),e(ya,$d),e(ct,Sd),e(qe,xd),T(zt,qe,null),e(qe,Bd),T(Ft,qe,null),_(o,gr,g),_(o,pt,g),e(pt,qt),e(qt,Ta),T(Mo,Ta,null),e(pt,zd),e(pt,wa),e(wa,Fd),_(o,br,g),_(o,Se,g),T(Co,Se,null),e(Se,qd),e(Se,jo),e(jo,Ed),e(jo,An),e(An,Md),e(jo,Cd),e(Se,jd),e(Se,Oo),e(Oo,Od),e(Oo,Po),e(Po,Pd),e(Oo,Ld),e(Se,Nd),e(Se,Ee),T(Lo,Ee,null),e(Ee,Id),e(Ee,ut),e(ut,Ad),e(ut,Dn),e(Dn,Dd),e(ut,Gd),e(ut,$a),e($a,Ud),e(ut,Wd),e(Ee,Rd),T(Et,Ee,null),e(Ee,Hd),T(Mt,Ee,null),_(o,kr,g),_(o,mt,g),e(mt,Ct),e(Ct,Sa),T(No,Sa,null),e(mt,Kd),e(mt,xa),e(xa,Qd),_(o,vr,g),_(o,ht,g),T(Io,ht,null),e(ht,Vd),e(ht,jt),T(Ao,jt,null),e(jt,Jd),T(Ot,jt,null),_(o,yr,g),_(o,ft,g),e(ft,Pt),e(Pt,Ba),T(Do,Ba,null),e(ft,Xd),e(ft,za),e(za,Yd),_(o,Tr,g),_(o,pe,g),T(Go,pe,null),e(pe,Zd),e(pe,Uo),e(Uo,ei),e(Uo,Gn),e(Gn,ti),e(Uo,oi),e(pe,ni),e(pe,Wo),e(Wo,ai),e(Wo,Ro),e(Ro,si),e(Wo,ri),e(pe,li),T(Lt,pe,null),e(pe,di),e(pe,Me),T(Ho,Me,null),e(Me,ii),e(Me,_t),e(_t,ci),e(_t,Un),e(Un,pi),e(_t,ui),e(_t,Fa),e(Fa,mi),e(_t,hi),e(Me,fi),T(Nt,Me,null),e(Me,_i),T(It,Me,null),_(o,wr,g),_(o,gt,g),e(gt,At),e(At,qa),T(Ko,qa,null),e(gt,gi),e(gt,Ea),e(Ea,bi),_(o,$r,g),_(o,ue,g),T(Qo,ue,null),e(ue,ki),e(ue,Vo),e(Vo,vi),e(Vo,Wn),e(Wn,yi),e(Vo,Ti),e(ue,wi),e(ue,Jo),e(Jo,$i),e(Jo,Xo),e(Xo,Si),e(Jo,xi),e(ue,Bi),T(Dt,ue,null),e(ue,zi),e(ue,P),T(Yo,P,null),e(P,Fi),e(P,bt),e(bt,qi),e(bt,Rn),e(Rn,Ei),e(bt,Mi),e(bt,Ma),e(Ma,Ci),e(bt,ji),e(P,Oi),T(Gt,P,null),e(P,Pi),e(P,Ca),e(Ca,Li),e(P,Ni),e(P,ja),e(ja,Oa),e(Oa,Pa),e(Pa,La),e(La,Ii),e(P,Ai),e(P,Na),e(Na,Ia),e(Ia,Aa),e(Aa,Da),e(Da,Di),e(P,Gi),e(P,Ga),e(Ga,Ua),e(Ua,Wa),e(Wa,Ra),e(Ra,Ui),e(P,Wi),e(P,Ha),e(Ha,Ka),e(Ka,Qa),e(Qa,Zo),e(Zo,Ri),e(Zo,Va),e(Va,Hi),e(Zo,Ki),e(P,Qi),e(P,Ja),e(Ja,Xa),e(Xa,Ya),e(Ya,Za),e(Za,Vi),_(o,Sr,g),_(o,kt,g),e(kt,Ut),e(Ut,es),T(en,es,null),e(kt,Ji),e(kt,ts),e(ts,Xi),_(o,xr,g),_(o,I,g),T(tn,I,null),e(I,Yi),e(I,on),e(on,Zi),e(on,Hn),e(Hn,ec),e(on,tc),e(I,oc),e(I,nn),e(nn,nc),e(nn,an),e(an,ac),e(nn,sc),e(I,rc),e(I,os),e(os,lc),e(I,dc),e(I,Ue),e(Ue,ns),e(ns,sn),e(sn,ic),e(Ue,cc),e(Ue,as),e(as,rn),e(rn,pc),e(Ue,uc),e(Ue,ss),e(ss,ln),e(ln,mc),e(Ue,hc),e(Ue,rs),e(rs,dn),e(dn,fc),e(I,_c),e(I,Wt),T(cn,Wt,null),e(Wt,gc),T(Rt,Wt,null),e(I,bc),e(I,Ht),T(pn,Ht,null),e(Ht,kc),T(Kt,Ht,null),e(I,vc),e(I,Qt),T(un,Qt,null),e(Qt,yc),T(Vt,Qt,null),_(o,Br,g),_(o,vt,g),e(vt,Jt),e(Jt,ls),T(mn,ls,null),e(vt,Tc),e(vt,ds),e(ds,wc),_(o,zr,g),_(o,A,g),T(hn,A,null),e(A,$c),e(A,fn),e(fn,Sc),e(fn,Kn),e(Kn,xc),e(fn,Bc),e(A,zc),e(A,_n),e(_n,Fc),e(_n,gn),e(gn,qc),e(_n,Ec),e(A,Mc),e(A,is),e(is,Cc),e(A,jc),e(A,We),e(We,cs),e(cs,bn),e(bn,Oc),e(We,Pc),e(We,ps),e(ps,kn),e(kn,Lc),e(We,Nc),e(We,us),e(us,vn),e(vn,Ic),e(We,Ac),e(We,ms),e(ms,yn),e(yn,Dc),e(A,Gc),e(A,E),T(Tn,E,null),e(E,Uc),e(E,yt),e(yt,Wc),e(yt,hs),e(hs,Rc),e(yt,Hc),e(yt,fs),e(fs,Kc),e(yt,Qc),e(E,Vc),T(Xt,E,null),e(E,Jc),e(E,_s),e(_s,Xc),e(E,Yc),e(E,gs),e(gs,bs),e(bs,ks),e(ks,vs),e(vs,Zc),e(E,ep),e(E,ys),e(ys,Ts),e(Ts,ws),e(ws,$s),e($s,tp),e(E,op),e(E,Ss),e(Ss,xs),e(xs,Bs),e(Bs,zs),e(zs,np),e(E,ap),e(E,Fs),e(Fs,qs),e(qs,wn),e(wn,Yt),e(Yt,Zt),e(Zt,Es),T($n,Es,null),e(Yt,sp),e(Yt,Ms),e(Ms,rp),e(wn,lp),e(wn,Cs),e(Cs,dp),e(E,ip),e(E,js),e(js,cp),e(E,pp),e(E,Os),e(Os,Ps),e(Ps,Ls),e(Ls,Ns),e(Ns,up),e(E,mp),e(E,Is),e(Is,As),e(As,Ds),e(Ds,Gs),e(Gs,hp),e(E,fp),e(E,Us),e(Us,Ws),e(Ws,Rs),e(Rs,Hs),e(Hs,_p),e(E,gp),e(E,Ks),e(Ks,Qs),e(Qs,Vs),e(Vs,Js),e(Js,bp),e(A,kp),e(A,eo),T(Sn,eo,null),e(eo,vp),T(to,eo,null),e(A,yp),e(A,oo),T(xn,oo,null),e(oo,Tp),T(no,oo,null),Fr=!0},p(o,[g]){const Bn={};g&2&&(Bn.$$scope={dirty:g,ctx:o}),Tt.$set(Bn);const Xs={};g&2&&(Xs.$$scope={dirty:g,ctx:o}),zt.$set(Xs);const Ys={};g&2&&(Ys.$$scope={dirty:g,ctx:o}),Ft.$set(Ys);const Zs={};g&2&&(Zs.$$scope={dirty:g,ctx:o}),Et.$set(Zs);const _e={};g&2&&(_e.$$scope={dirty:g,ctx:o}),Mt.$set(_e);const er={};g&2&&(er.$$scope={dirty:g,ctx:o}),Ot.$set(er);const tr={};g&2&&(tr.$$scope={dirty:g,ctx:o}),Lt.$set(tr);const or={};g&2&&(or.$$scope={dirty:g,ctx:o}),Nt.$set(or);const nr={};g&2&&(nr.$$scope={dirty:g,ctx:o}),It.$set(nr);const ar={};g&2&&(ar.$$scope={dirty:g,ctx:o}),Dt.$set(ar);const zn={};g&2&&(zn.$$scope={dirty:g,ctx:o}),Gt.$set(zn);const sr={};g&2&&(sr.$$scope={dirty:g,ctx:o}),Rt.$set(sr);const rr={};g&2&&(rr.$$scope={dirty:g,ctx:o}),Kt.$set(rr);const lr={};g&2&&(lr.$$scope={dirty:g,ctx:o}),Vt.$set(lr);const Fn={};g&2&&(Fn.$$scope={dirty:g,ctx:o}),Xt.$set(Fn);const dr={};g&2&&(dr.$$scope={dirty:g,ctx:o}),to.$set(dr);const ir={};g&2&&(ir.$$scope={dirty:g,ctx:o}),no.$set(ir)},i(o){Fr||(w(d.$$.fragment,o),w(se.$$.fragment,o),w(Te.$$.fragment,o),w(mo.$$.fragment,o),w(Tt.$$.fragment,o),w(fo.$$.fragment,o),w(_o.$$.fragment,o),w(bo.$$.fragment,o),w(ko.$$.fragment,o),w(vo.$$.fragment,o),w(yo.$$.fragment,o),w(To.$$.fragment,o),w(wo.$$.fragment,o),w(So.$$.fragment,o),w(xo.$$.fragment,o),w(Bo.$$.fragment,o),w(Eo.$$.fragment,o),w(zt.$$.fragment,o),w(Ft.$$.fragment,o),w(Mo.$$.fragment,o),w(Co.$$.fragment,o),w(Lo.$$.fragment,o),w(Et.$$.fragment,o),w(Mt.$$.fragment,o),w(No.$$.fragment,o),w(Io.$$.fragment,o),w(Ao.$$.fragment,o),w(Ot.$$.fragment,o),w(Do.$$.fragment,o),w(Go.$$.fragment,o),w(Lt.$$.fragment,o),w(Ho.$$.fragment,o),w(Nt.$$.fragment,o),w(It.$$.fragment,o),w(Ko.$$.fragment,o),w(Qo.$$.fragment,o),w(Dt.$$.fragment,o),w(Yo.$$.fragment,o),w(Gt.$$.fragment,o),w(en.$$.fragment,o),w(tn.$$.fragment,o),w(cn.$$.fragment,o),w(Rt.$$.fragment,o),w(pn.$$.fragment,o),w(Kt.$$.fragment,o),w(un.$$.fragment,o),w(Vt.$$.fragment,o),w(mn.$$.fragment,o),w(hn.$$.fragment,o),w(Tn.$$.fragment,o),w(Xt.$$.fragment,o),w($n.$$.fragment,o),w(Sn.$$.fragment,o),w(to.$$.fragment,o),w(xn.$$.fragment,o),w(no.$$.fragment,o),Fr=!0)},o(o){$(d.$$.fragment,o),$(se.$$.fragment,o),$(Te.$$.fragment,o),$(mo.$$.fragment,o),$(Tt.$$.fragment,o),$(fo.$$.fragment,o),$(_o.$$.fragment,o),$(bo.$$.fragment,o),$(ko.$$.fragment,o),$(vo.$$.fragment,o),$(yo.$$.fragment,o),$(To.$$.fragment,o),$(wo.$$.fragment,o),$(So.$$.fragment,o),$(xo.$$.fragment,o),$(Bo.$$.fragment,o),$(Eo.$$.fragment,o),$(zt.$$.fragment,o),$(Ft.$$.fragment,o),$(Mo.$$.fragment,o),$(Co.$$.fragment,o),$(Lo.$$.fragment,o),$(Et.$$.fragment,o),$(Mt.$$.fragment,o),$(No.$$.fragment,o),$(Io.$$.fragment,o),$(Ao.$$.fragment,o),$(Ot.$$.fragment,o),$(Do.$$.fragment,o),$(Go.$$.fragment,o),$(Lt.$$.fragment,o),$(Ho.$$.fragment,o),$(Nt.$$.fragment,o),$(It.$$.fragment,o),$(Ko.$$.fragment,o),$(Qo.$$.fragment,o),$(Dt.$$.fragment,o),$(Yo.$$.fragment,o),$(Gt.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(cn.$$.fragment,o),$(Rt.$$.fragment,o),$(pn.$$.fragment,o),$(Kt.$$.fragment,o),$(un.$$.fragment,o),$(Vt.$$.fragment,o),$(mn.$$.fragment,o),$(hn.$$.fragment,o),$(Tn.$$.fragment,o),$(Xt.$$.fragment,o),$($n.$$.fragment,o),$(Sn.$$.fragment,o),$(to.$$.fragment,o),$(xn.$$.fragment,o),$(no.$$.fragment,o),Fr=!1},d(o){t(p),o&&t(k),o&&t(f),S(d),o&&t(me),o&&t(B),o&&t(Be),o&&t(J),S(se),o&&t(ze),o&&t(ee),o&&t(Fe),o&&t(H),o&&t(x),o&&t(q),o&&t(Re),o&&t(O),o&&t(te),o&&t(ce),S(Te),o&&t(cr),o&&t(we),S(mo),S(Tt),o&&t(pr),o&&t(rt),S(fo),o&&t(ur),o&&t(U),S(_o),S(bo),S(ko),S(vo),S(yo),o&&t(mr),o&&t(dt),S(To),o&&t(hr),o&&t(Ge),S(wo),S(So),o&&t(fr),o&&t(it),S(xo),o&&t(_r),o&&t($e),S(Bo),S(Eo),S(zt),S(Ft),o&&t(gr),o&&t(pt),S(Mo),o&&t(br),o&&t(Se),S(Co),S(Lo),S(Et),S(Mt),o&&t(kr),o&&t(mt),S(No),o&&t(vr),o&&t(ht),S(Io),S(Ao),S(Ot),o&&t(yr),o&&t(ft),S(Do),o&&t(Tr),o&&t(pe),S(Go),S(Lt),S(Ho),S(Nt),S(It),o&&t(wr),o&&t(gt),S(Ko),o&&t($r),o&&t(ue),S(Qo),S(Dt),S(Yo),S(Gt),o&&t(Sr),o&&t(kt),S(en),o&&t(xr),o&&t(I),S(tn),S(cn),S(Rt),S(pn),S(Kt),S(un),S(Vt),o&&t(Br),o&&t(vt),S(mn),o&&t(zr),o&&t(A),S(hn),S(Tn),S(Xt),S($n),S(Sn),S(to),S(xn),S(no)}}}const Eh={local:"blenderbot-small",sections:[{local:"overview",title:"Overview"},{local:"transformers.BlenderbotSmallConfig",title:"BlenderbotSmallConfig"},{local:"transformers.BlenderbotSmallTokenizer",title:"BlenderbotSmallTokenizer"},{local:"transformers.BlenderbotSmallTokenizerFast",title:"BlenderbotSmallTokenizerFast"},{local:"transformers.BlenderbotSmallModel",title:"BlenderbotSmallModel"},{local:"transformers.BlenderbotSmallForConditionalGeneration",title:"BlenderbotSmallForConditionalGeneration"},{local:"transformers.BlenderbotSmallForCausalLM",title:"BlenderbotSmallForCausalLM"},{local:"transformers.TFBlenderbotSmallModel",title:"TFBlenderbotSmallModel"},{local:"transformers.TFBlenderbotSmallForConditionalGeneration",title:"TFBlenderbotSmallForConditionalGeneration"},{local:"transformers.FlaxBlenderbotSmallModel",title:"FlaxBlenderbotSmallModel"},{local:"transformers.FlaxBlenderbotSmallForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot Small"};function Mh(z){return uh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ih extends dh{constructor(p){super();ih(this,p,Mh,qh,ch,{})}}export{Ih as default,Eh as metadata};
