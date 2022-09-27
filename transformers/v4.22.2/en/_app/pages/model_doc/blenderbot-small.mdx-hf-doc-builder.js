import{S as dm,i as im,s as cm,e as n,k as i,w as y,t as r,M as pm,c as a,d as o,m as c,a as s,x as T,h as l,b as u,G as e,g as _,y as w,q as S,o as $,B as x,v as um,L as mo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Rn}from"../../chunks/Tip-hf-doc-builder.js";import{D as O}from"../../chunks/Docstring-hf-doc-builder.js";import{C as fo}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ee}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ho}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function hm(z){let p,k,f,m,b;return m=new fo({props:{code:`from transformers import BlenderbotSmallModel, BlenderbotSmallConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(m.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(o),f=c(d),T(m.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),w(m,d,h),b=!0},p:mo,i(d){b||(S(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),x(m,d)}}}function mm(z){let p,k,f,m,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var q=s(f);m=l(q,"Module"),q.forEach(o),b=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(d,h){_(d,p,h),e(p,k),e(p,f),e(f,m),e(p,b)},d(d){d&&o(p)}}}function fm(z){let p,k,f,m,b;return m=new fo({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallModel

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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">512</span>]`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(m.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(o),f=c(d),T(m.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),w(m,d,h),b=!0},p:mo,i(d){b||(S(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),x(m,d)}}}function _m(z){let p,k,f,m,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var q=s(f);m=l(q,"Module"),q.forEach(o),b=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(d,h){_(d,p,h),e(p,k),e(p,f),e(f,m),e(p,b)},d(d){d&&o(p)}}}function gm(z){let p,k,f,m,b;return m=new fo({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration

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
Bot:  they eat a lot of carbs. carbs are high in fat, protein, and carbohydrates.</span>`}}),{c(){p=n("p"),k=r("Conversation example:"),f=i(),y(m.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Conversation example:"),h.forEach(o),f=c(d),T(m.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),w(m,d,h),b=!0},p:mo,i(d){b||(S(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),x(m,d)}}}function bm(z){let p,k,f,m,b;return m=new fo({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(m.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(o),f=c(d),T(m.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),w(m,d,h),b=!0},p:mo,i(d){b||(S(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),x(m,d)}}}function km(z){let p,k,f,m,b,d,h,q,Ae,Me,C,De,re,B,Ge,Y,Ue,We,K,Re,Ke,Z,He,Qe,ee,Ve,Ce,G,le,we,te,P,I,Je,de,ie,Xe,H,Ye,Ze,A,ke,he,je,ve,ne,eo,Oe,N,oo,Q,to,Se,L,no,V,Pe,ae;return{c(){p=n("p"),k=r("TensorFlow models and layers in "),f=n("code"),m=r("transformers"),b=r(" accept two formats as input:"),d=i(),h=n("ul"),q=n("li"),Ae=r("having all inputs as keyword arguments (like PyTorch models), or"),Me=i(),C=n("li"),De=r("having all inputs as a list, tuple or dict in the first positional argument."),re=i(),B=n("p"),Ge=r(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Y=n("code"),Ue=r("model.fit()"),We=r(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),K=n("code"),Re=r("model.fit()"),Ke=r(` supports! If, however, you want to use the second
format outside of Keras methods like `),Z=n("code"),He=r("fit()"),Qe=r(" and "),ee=n("code"),Ve=r("predict()"),Ce=r(`, such as when creating your own layers or models with
the Keras `),G=n("code"),le=r("Functional"),we=r(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=i(),P=n("ul"),I=n("li"),Je=r("a single Tensor with "),de=n("code"),ie=r("input_ids"),Xe=r(" only and nothing else: "),H=n("code"),Ye=r("model(input_ids)"),Ze=i(),A=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),he=n("code"),je=r("model([input_ids, attention_mask])"),ve=r(" or "),ne=n("code"),eo=r("model([input_ids, attention_mask, token_type_ids])"),Oe=i(),N=n("li"),oo=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),to=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Se=i(),L=n("p"),no=r(`Note that when creating models and layers with
`),V=n("a"),Pe=r("subclassing"),ae=r(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){p=a(v,"P",{});var F=s(p);k=l(F,"TensorFlow models and layers in "),f=a(F,"CODE",{});var $e=s(f);m=l($e,"transformers"),$e.forEach(o),b=l(F," accept two formats as input:"),F.forEach(o),d=c(v),h=a(v,"UL",{});var xe=s(h);q=a(xe,"LI",{});var ao=s(q);Ae=l(ao,"having all inputs as keyword arguments (like PyTorch models), or"),ao.forEach(o),Me=c(xe),C=a(xe,"LI",{});var _o=s(C);De=l(_o,"having all inputs as a list, tuple or dict in the first positional argument."),_o.forEach(o),xe.forEach(o),re=c(v),B=a(v,"P",{});var E=s(B);Ge=l(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Y=a(E,"CODE",{});var J=s(Y);Ue=l(J,"model.fit()"),J.forEach(o),We=l(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),K=a(E,"CODE",{});var Be=s(K);Re=l(Be,"model.fit()"),Be.forEach(o),Ke=l(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),Z=a(E,"CODE",{});var go=s(Z);He=l(go,"fit()"),go.forEach(o),Qe=l(E," and "),ee=a(E,"CODE",{});var me=s(ee);Ve=l(me,"predict()"),me.forEach(o),Ce=l(E,`, such as when creating your own layers or models with
the Keras `),G=a(E,"CODE",{});var bo=s(G);le=l(bo,"Functional"),bo.forEach(o),we=l(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(o),te=c(v),P=a(v,"UL",{});var R=s(P);I=a(R,"LI",{});var fe=s(I);Je=l(fe,"a single Tensor with "),de=a(fe,"CODE",{});var ko=s(de);ie=l(ko,"input_ids"),ko.forEach(o),Xe=l(fe," only and nothing else: "),H=a(fe,"CODE",{});var ze=s(H);Ye=l(ze,"model(input_ids)"),ze.forEach(o),fe.forEach(o),Ze=c(R),A=a(R,"LI",{});var _e=s(A);ke=l(_e,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),he=a(_e,"CODE",{});var vo=s(he);je=l(vo,"model([input_ids, attention_mask])"),vo.forEach(o),ve=l(_e," or "),ne=a(_e,"CODE",{});var yo=s(ne);eo=l(yo,"model([input_ids, attention_mask, token_type_ids])"),yo.forEach(o),_e.forEach(o),Oe=c(R),N=a(R,"LI",{});var se=s(N);oo=l(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(se,"CODE",{});var To=s(Q);to=l(To,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),To.forEach(o),se.forEach(o),R.forEach(o),Se=c(v),L=a(v,"P",{});var ce=s(L);no=l(ce,`Note that when creating models and layers with
`),V=a(ce,"A",{href:!0,rel:!0});var wo=s(V);Pe=l(wo,"subclassing"),wo.forEach(o),ae=l(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(o),this.h()},h(){u(V,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(V,"rel","nofollow")},m(v,F){_(v,p,F),e(p,k),e(p,f),e(f,m),e(p,b),_(v,d,F),_(v,h,F),e(h,q),e(q,Ae),e(h,Me),e(h,C),e(C,De),_(v,re,F),_(v,B,F),e(B,Ge),e(B,Y),e(Y,Ue),e(B,We),e(B,K),e(K,Re),e(B,Ke),e(B,Z),e(Z,He),e(B,Qe),e(B,ee),e(ee,Ve),e(B,Ce),e(B,G),e(G,le),e(B,we),_(v,te,F),_(v,P,F),e(P,I),e(I,Je),e(I,de),e(de,ie),e(I,Xe),e(I,H),e(H,Ye),e(P,Ze),e(P,A),e(A,ke),e(A,he),e(he,je),e(A,ve),e(A,ne),e(ne,eo),e(P,Oe),e(P,N),e(N,oo),e(N,Q),e(Q,to),_(v,Se,F),_(v,L,F),e(L,no),e(L,V),e(V,Pe),e(L,ae)},d(v){v&&o(p),v&&o(d),v&&o(h),v&&o(re),v&&o(B),v&&o(te),v&&o(P),v&&o(Se),v&&o(L)}}}function vm(z){let p,k,f,m,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var q=s(f);m=l(q,"Module"),q.forEach(o),b=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(d,h){_(d,p,h),e(p,k),e(p,f),e(f,m),e(p,b)},d(d){d&&o(p)}}}function ym(z){let p,k,f,m,b;return m=new fo({props:{code:`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(m.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(o),f=c(d),T(m.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),w(m,d,h),b=!0},p:mo,i(d){b||(S(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),x(m,d)}}}function Tm(z){let p,k,f,m,b,d,h,q,Ae,Me,C,De,re,B,Ge,Y,Ue,We,K,Re,Ke,Z,He,Qe,ee,Ve,Ce,G,le,we,te,P,I,Je,de,ie,Xe,H,Ye,Ze,A,ke,he,je,ve,ne,eo,Oe,N,oo,Q,to,Se,L,no,V,Pe,ae;return{c(){p=n("p"),k=r("TensorFlow models and layers in "),f=n("code"),m=r("transformers"),b=r(" accept two formats as input:"),d=i(),h=n("ul"),q=n("li"),Ae=r("having all inputs as keyword arguments (like PyTorch models), or"),Me=i(),C=n("li"),De=r("having all inputs as a list, tuple or dict in the first positional argument."),re=i(),B=n("p"),Ge=r(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Y=n("code"),Ue=r("model.fit()"),We=r(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),K=n("code"),Re=r("model.fit()"),Ke=r(` supports! If, however, you want to use the second
format outside of Keras methods like `),Z=n("code"),He=r("fit()"),Qe=r(" and "),ee=n("code"),Ve=r("predict()"),Ce=r(`, such as when creating your own layers or models with
the Keras `),G=n("code"),le=r("Functional"),we=r(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=i(),P=n("ul"),I=n("li"),Je=r("a single Tensor with "),de=n("code"),ie=r("input_ids"),Xe=r(" only and nothing else: "),H=n("code"),Ye=r("model(input_ids)"),Ze=i(),A=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),he=n("code"),je=r("model([input_ids, attention_mask])"),ve=r(" or "),ne=n("code"),eo=r("model([input_ids, attention_mask, token_type_ids])"),Oe=i(),N=n("li"),oo=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),to=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Se=i(),L=n("p"),no=r(`Note that when creating models and layers with
`),V=n("a"),Pe=r("subclassing"),ae=r(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){p=a(v,"P",{});var F=s(p);k=l(F,"TensorFlow models and layers in "),f=a(F,"CODE",{});var $e=s(f);m=l($e,"transformers"),$e.forEach(o),b=l(F," accept two formats as input:"),F.forEach(o),d=c(v),h=a(v,"UL",{});var xe=s(h);q=a(xe,"LI",{});var ao=s(q);Ae=l(ao,"having all inputs as keyword arguments (like PyTorch models), or"),ao.forEach(o),Me=c(xe),C=a(xe,"LI",{});var _o=s(C);De=l(_o,"having all inputs as a list, tuple or dict in the first positional argument."),_o.forEach(o),xe.forEach(o),re=c(v),B=a(v,"P",{});var E=s(B);Ge=l(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Y=a(E,"CODE",{});var J=s(Y);Ue=l(J,"model.fit()"),J.forEach(o),We=l(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),K=a(E,"CODE",{});var Be=s(K);Re=l(Be,"model.fit()"),Be.forEach(o),Ke=l(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),Z=a(E,"CODE",{});var go=s(Z);He=l(go,"fit()"),go.forEach(o),Qe=l(E," and "),ee=a(E,"CODE",{});var me=s(ee);Ve=l(me,"predict()"),me.forEach(o),Ce=l(E,`, such as when creating your own layers or models with
the Keras `),G=a(E,"CODE",{});var bo=s(G);le=l(bo,"Functional"),bo.forEach(o),we=l(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(o),te=c(v),P=a(v,"UL",{});var R=s(P);I=a(R,"LI",{});var fe=s(I);Je=l(fe,"a single Tensor with "),de=a(fe,"CODE",{});var ko=s(de);ie=l(ko,"input_ids"),ko.forEach(o),Xe=l(fe," only and nothing else: "),H=a(fe,"CODE",{});var ze=s(H);Ye=l(ze,"model(input_ids)"),ze.forEach(o),fe.forEach(o),Ze=c(R),A=a(R,"LI",{});var _e=s(A);ke=l(_e,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),he=a(_e,"CODE",{});var vo=s(he);je=l(vo,"model([input_ids, attention_mask])"),vo.forEach(o),ve=l(_e," or "),ne=a(_e,"CODE",{});var yo=s(ne);eo=l(yo,"model([input_ids, attention_mask, token_type_ids])"),yo.forEach(o),_e.forEach(o),Oe=c(R),N=a(R,"LI",{});var se=s(N);oo=l(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(se,"CODE",{});var To=s(Q);to=l(To,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),To.forEach(o),se.forEach(o),R.forEach(o),Se=c(v),L=a(v,"P",{});var ce=s(L);no=l(ce,`Note that when creating models and layers with
`),V=a(ce,"A",{href:!0,rel:!0});var wo=s(V);Pe=l(wo,"subclassing"),wo.forEach(o),ae=l(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(o),this.h()},h(){u(V,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(V,"rel","nofollow")},m(v,F){_(v,p,F),e(p,k),e(p,f),e(f,m),e(p,b),_(v,d,F),_(v,h,F),e(h,q),e(q,Ae),e(h,Me),e(h,C),e(C,De),_(v,re,F),_(v,B,F),e(B,Ge),e(B,Y),e(Y,Ue),e(B,We),e(B,K),e(K,Re),e(B,Ke),e(B,Z),e(Z,He),e(B,Qe),e(B,ee),e(ee,Ve),e(B,Ce),e(B,G),e(G,le),e(B,we),_(v,te,F),_(v,P,F),e(P,I),e(I,Je),e(I,de),e(de,ie),e(I,Xe),e(I,H),e(H,Ye),e(P,Ze),e(P,A),e(A,ke),e(A,he),e(he,je),e(A,ve),e(A,ne),e(ne,eo),e(P,Oe),e(P,N),e(N,oo),e(N,Q),e(Q,to),_(v,Se,F),_(v,L,F),e(L,no),e(L,V),e(V,Pe),e(L,ae)},d(v){v&&o(p),v&&o(d),v&&o(h),v&&o(re),v&&o(B),v&&o(te),v&&o(P),v&&o(Se),v&&o(L)}}}function wm(z){let p,k,f,m,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var q=s(f);m=l(q,"Module"),q.forEach(o),b=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(d,h){_(d,p,h),e(p,k),e(p,f),e(f,m),e(p,b)},d(d){d&&o(p)}}}function Sm(z){let p,k,f,m,b;return m=new fo({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = FlaxBlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(m.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(o),f=c(d),T(m.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),w(m,d,h),b=!0},p:mo,i(d){b||(S(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),x(m,d)}}}function $m(z){let p,k,f,m,b;return m=new fo({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(m.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(o),f=c(d),T(m.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),w(m,d,h),b=!0},p:mo,i(d){b||(S(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),x(m,d)}}}function xm(z){let p,k,f,m,b;return m=new fo({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(m.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(o),f=c(d),T(m.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),w(m,d,h),b=!0},p:mo,i(d){b||(S(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),x(m,d)}}}function Bm(z){let p,k,f,m,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),m=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var q=s(f);m=l(q,"Module"),q.forEach(o),b=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(d,h){_(d,p,h),e(p,k),e(p,f),e(f,m),e(p,b)},d(d){d&&o(p)}}}function zm(z){let p,k,f,m,b;return m=new fo({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(m.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(o),f=c(d),T(m.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),w(m,d,h),b=!0},p:mo,i(d){b||(S(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),x(m,d)}}}function Fm(z){let p,k,f,m,b;return m=new fo({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(m.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(o),f=c(d),T(m.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),w(m,d,h),b=!0},p:mo,i(d){b||(S(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),x(m,d)}}}function qm(z){let p,k,f,m,b,d,h,q,Ae,Me,C,De,re,B,Ge,Y,Ue,We,K,Re,Ke,Z,He,Qe,ee,Ve,Ce,G,le,we,te,P,I,Je,de,ie,Xe,H,Ye,Ze,A,ke,he,je,ve,ne,eo,Oe,N,oo,Q,to,Se,L,no,V,Pe,ae,v,F,$e,xe,ao,_o,E,J,Be,go,me,bo,R,fe,ko,ze,_e,vo,yo,se,To,ce,wo,wl,Kn,Sl,$l,xl,Ao,Tr,So,Do,ka,qt,Bl,va,zl,wr,X,Et,Fl,ya,ql,El,Mt,Ml,Hn,Cl,jl,Ol,io,Ct,Pl,Ta,Ll,Nl,wa,Il,Al,Go,jt,Dl,$o,Gl,Sa,Ul,Wl,$a,Rl,Kl,Hl,co,Ot,Ql,Qn,Vl,Vn,Jl,Xl,xa,Yl,Zl,Jn,Pt,Sr,xo,Uo,Ba,Lt,ed,za,od,$r,so,Nt,td,It,nd,Fa,ad,sd,rd,Wo,At,ld,qa,dd,xr,Bo,Ro,Ea,Dt,id,Ma,cd,Br,Fe,Gt,pd,Ut,ud,Xn,hd,md,fd,Wt,_d,Rt,gd,bd,kd,Le,Kt,vd,zo,yd,Yn,Td,wd,Ca,Sd,$d,xd,Ko,Bd,Ho,zr,Fo,Qo,ja,Ht,zd,Oa,Fd,Fr,qe,Qt,qd,Vt,Ed,Zn,Md,Cd,jd,Jt,Od,Xt,Pd,Ld,Nd,Ne,Yt,Id,qo,Ad,ea,Dd,Gd,Pa,Ud,Wd,Rd,Vo,Kd,Jo,qr,Eo,Xo,La,Zt,Hd,Na,Qd,Er,Mo,en,Vd,Yo,on,Jd,Zo,Mr,Co,et,Ia,tn,Xd,Aa,Yd,Cr,ge,nn,Zd,an,ei,oa,oi,ti,ni,sn,ai,rn,si,ri,li,ot,di,Ie,ln,ii,jo,ci,ta,pi,ui,Da,hi,mi,fi,tt,_i,nt,jr,Oo,at,Ga,dn,gi,Ua,bi,Or,be,cn,ki,pn,vi,na,yi,Ti,wi,un,Si,hn,$i,xi,Bi,st,zi,D,mn,Fi,Po,qi,aa,Ei,Mi,Wa,Ci,ji,Oi,rt,Pi,Ra,Li,Ni,Ka,Ha,Qa,Va,Ii,Ai,Ja,Xa,Ya,Za,Di,Gi,es,os,ts,ns,Ui,Wi,as,ss,rs,fn,Ri,ls,Ki,Hi,Qi,ds,is,cs,ps,Vi,Pr,Lo,lt,us,_n,Ji,hs,Xi,Lr,U,gn,Yi,bn,Zi,sa,ec,oc,tc,kn,nc,vn,ac,sc,rc,ms,lc,dc,ro,fs,yn,ic,cc,_s,Tn,pc,uc,gs,wn,hc,mc,bs,Sn,fc,_c,dt,$n,gc,it,bc,ct,xn,kc,pt,vc,ut,Bn,yc,ht,Nr,No,mt,ks,zn,Tc,vs,wc,Ir,W,Fn,Sc,qn,$c,ra,xc,Bc,zc,En,Fc,Mn,qc,Ec,Mc,ys,Cc,jc,lo,Ts,Cn,Oc,Pc,ws,jn,Lc,Nc,Ss,On,Ic,Ac,$s,Pn,Dc,Gc,M,Ln,Uc,Io,Wc,xs,Rc,Kc,Bs,Hc,Qc,Vc,ft,Jc,zs,Xc,Yc,Fs,qs,Es,Ms,Zc,ep,Cs,js,Os,Ps,op,tp,Ls,Ns,Is,As,np,ap,Ds,Gs,Nn,_t,gt,Us,In,sp,Ws,rp,lp,Rs,dp,ip,Ks,cp,pp,Hs,Qs,Vs,Js,up,hp,Xs,Ys,Zs,er,mp,fp,or,tr,nr,ar,_p,gp,sr,rr,lr,dr,bp,kp,bt,An,vp,kt,yp,vt,Dn,Tp,yt,Ar;return d=new Ee({}),te=new Ee({}),$e=new Ee({}),Be=new O({props:{name:"class transformers.BlenderbotSmallConfig",anchor:"transformers.BlenderbotSmallConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 512"},{name:"encoder_layers",val:" = 8"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 8"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BlenderbotSmall model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel">BlenderbotSmallModel</a> or <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel">TFBlenderbotSmallModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotSmallConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.BlenderbotSmallConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"encoder_layerdrop"},{anchor:"transformers.BlenderbotSmallConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.BlenderbotSmallConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BlenderbotSmallConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/configuration_blenderbot_small.py#L36"}}),Ao=new ho({props:{anchor:"transformers.BlenderbotSmallConfig.example",$$slots:{default:[hm]},$$scope:{ctx:z}}}),qt=new Ee({}),Et=new O({props:{name:"class transformers.BlenderbotSmallTokenizer",anchor:"transformers.BlenderbotSmallTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"bos_token",val:" = '__start__'"},{name:"eos_token",val:" = '__end__'"},{name:"unk_token",val:" = '__unk__'"},{name:"pad_token",val:" = '__null__'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BlenderbotSmallTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BlenderbotSmallTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__start__&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__end__&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__unk__&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BlenderbotSmallTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__pad__&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.
**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/v4.22.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L69"}}),Ct=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/tokenization_utils_base.py#L3003",returnDescription:`
<p>The model input with special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),jt=new O({props:{name:"get_special_tokens_mask",anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/tokenization_utils.py#L845",returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),Ot=new O({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/tokenization_utils_base.py#L2983",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Pt=new O({props:{name:"save_vocabulary",anchor:"transformers.BlenderbotSmallTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L211"}}),Lt=new Ee({}),Nt=new O({props:{name:"class transformers.BlenderbotSmallTokenizerFast",anchor:"transformers.BlenderbotSmallTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L52"}}),At=new O({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L98",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Dt=new Ee({}),Gt=new O({props:{name:"class transformers.BlenderbotSmallModel",anchor:"transformers.BlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1083"}}),Kt=new O({props:{name:"forward",anchor:"transformers.BlenderbotSmallModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1110",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ko=new Rn({props:{$$slots:{default:[mm]},$$scope:{ctx:z}}}),Ho=new ho({props:{anchor:"transformers.BlenderbotSmallModel.forward.example",$$slots:{default:[fm]},$$scope:{ctx:z}}}),Ht=new Ee({}),Qt=new O({props:{name:"class transformers.BlenderbotSmallForConditionalGeneration",anchor:"transformers.BlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1209"}}),Yt=new O({props:{name:"forward",anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1253",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vo=new Rn({props:{$$slots:{default:[_m]},$$scope:{ctx:z}}}),Jo=new ho({props:{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.example",$$slots:{default:[gm]},$$scope:{ctx:z}}}),Zt=new Ee({}),en=new O({props:{name:"class transformers.BlenderbotSmallForCausalLM",anchor:"transformers.BlenderbotSmallForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1389"}}),on=new O({props:{name:"forward",anchor:"transformers.BlenderbotSmallForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1420",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zo=new ho({props:{anchor:"transformers.BlenderbotSmallForCausalLM.forward.example",$$slots:{default:[bm]},$$scope:{ctx:z}}}),tn=new Ee({}),nn=new O({props:{name:"class transformers.TFBlenderbotSmallModel",anchor:"transformers.TFBlenderbotSmallModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1149"}}),ot=new Rn({props:{$$slots:{default:[km]},$$scope:{ctx:z}}}),ln=new O({props:{name:"call",anchor:"transformers.TFBlenderbotSmallModel.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1161",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),tt=new Rn({props:{$$slots:{default:[vm]},$$scope:{ctx:z}}}),nt=new ho({props:{anchor:"transformers.TFBlenderbotSmallModel.call.example",$$slots:{default:[ym]},$$scope:{ctx:z}}}),dn=new Ee({}),cn=new O({props:{name:"class transformers.TFBlenderbotSmallForConditionalGeneration",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1256"}}),st=new Rn({props:{$$slots:{default:[Tm]},$$scope:{ctx:z}}}),mn=new O({props:{name:"call",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1290",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),rt=new Rn({props:{$$slots:{default:[wm]},$$scope:{ctx:z}}}),_n=new Ee({}),gn=new O({props:{name:"class transformers.FlaxBlenderbotSmallModel",anchor:"transformers.FlaxBlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1215"}}),$n=new O({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1151",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),it=new ho({props:{anchor:"transformers.FlaxBlenderbotSmallModel.__call__.example",$$slots:{default:[Sm]},$$scope:{ctx:z}}}),xn=new O({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L972",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pt=new ho({props:{anchor:"transformers.FlaxBlenderbotSmallModel.encode.example",$$slots:{default:[$m]},$$scope:{ctx:z}}}),Bn=new O({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1035",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ht=new ho({props:{anchor:"transformers.FlaxBlenderbotSmallModel.decode.example",$$slots:{default:[xm]},$$scope:{ctx:z}}}),zn=new Ee({}),Fn=new O({props:{name:"class transformers.FlaxBlenderbotSmallForConditionalGeneration",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1303"}}),Ln=new O({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1151",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ft=new Rn({props:{$$slots:{default:[Bm]},$$scope:{ctx:z}}}),In=new Ee({}),An=new O({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L972",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),kt=new ho({props:{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.example",$$slots:{default:[zm]},$$scope:{ctx:z}}}),Dn=new O({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1307",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yt=new ho({props:{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.example",$$slots:{default:[Fm]},$$scope:{ctx:z}}}),{c(){p=n("meta"),k=i(),f=n("h1"),m=n("a"),b=n("span"),y(d.$$.fragment),h=i(),q=n("span"),Ae=r("Blenderbot Small"),Me=i(),C=n("p"),De=r("Note that "),re=n("a"),B=r("BlenderbotSmallModel"),Ge=r(` and
`),Y=n("a"),Ue=r("BlenderbotSmallForConditionalGeneration"),We=r(` are only used in combination with the checkpoint
`),K=n("a"),Re=r("facebook/blenderbot-90M"),Ke=r(`. Larger Blenderbot checkpoints should
instead be used with `),Z=n("a"),He=r("BlenderbotModel"),Qe=r(` and
`),ee=n("a"),Ve=r("BlenderbotForConditionalGeneration"),Ce=i(),G=n("h2"),le=n("a"),we=n("span"),y(te.$$.fragment),P=i(),I=n("span"),Je=r("Overview"),de=i(),ie=n("p"),Xe=r("The Blender chatbot model was proposed in "),H=n("a"),Ye=r("Recipes for building an open-domain chatbot"),Ze=r(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),A=i(),ke=n("p"),he=r("The abstract of the paper is the following:"),je=i(),ve=n("p"),ne=n("em"),eo=r(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Oe=i(),N=n("p"),oo=r("This model was contributed by "),Q=n("a"),to=r("patrickvonplaten"),Se=r(`. The authors\u2019 code can be
found `),L=n("a"),no=r("here"),V=r(" ."),Pe=i(),ae=n("h2"),v=n("a"),F=n("span"),y($e.$$.fragment),xe=i(),ao=n("span"),_o=r("BlenderbotSmallConfig"),E=i(),J=n("div"),y(Be.$$.fragment),go=i(),me=n("p"),bo=r("This is the configuration class to store the configuration of a "),R=n("a"),fe=r("BlenderbotSmallModel"),ko=r(`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),ze=n("a"),_e=r("facebook/blenderbot_small-90M"),vo=r(" architecture."),yo=i(),se=n("p"),To=r("Configuration objects inherit from "),ce=n("a"),wo=r("PretrainedConfig"),wl=r(` and can be used to control the model outputs. Read the
documentation from `),Kn=n("a"),Sl=r("PretrainedConfig"),$l=r(" for more information."),xl=i(),y(Ao.$$.fragment),Tr=i(),So=n("h2"),Do=n("a"),ka=n("span"),y(qt.$$.fragment),Bl=i(),va=n("span"),zl=r("BlenderbotSmallTokenizer"),wr=i(),X=n("div"),y(Et.$$.fragment),Fl=i(),ya=n("p"),ql=r("Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),El=i(),Mt=n("p"),Ml=r("This tokenizer inherits from "),Hn=n("a"),Cl=r("PreTrainedTokenizer"),jl=r(` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Ol=i(),io=n("div"),y(Ct.$$.fragment),Pl=i(),Ta=n("p"),Ll=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Nl=i(),wa=n("p"),Il=r("This implementation does not add special tokens and this method should be overridden in a subclass."),Al=i(),Go=n("div"),y(jt.$$.fragment),Dl=i(),$o=n("p"),Gl=r(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Sa=n("code"),Ul=r("prepare_for_model"),Wl=r(" or "),$a=n("code"),Rl=r("encode_plus"),Kl=r(" methods."),Hl=i(),co=n("div"),y(Ot.$$.fragment),Ql=i(),Qn=n("p"),Vl=r("Create the token type IDs corresponding to the sequences passed. "),Vn=n("a"),Jl=r(`What are token type
IDs?`),Xl=i(),xa=n("p"),Yl=r("Should be overridden in a subclass if the model has a special way of building those."),Zl=i(),Jn=n("div"),y(Pt.$$.fragment),Sr=i(),xo=n("h2"),Uo=n("a"),Ba=n("span"),y(Lt.$$.fragment),ed=i(),za=n("span"),od=r("BlenderbotSmallTokenizerFast"),$r=i(),so=n("div"),y(Nt.$$.fragment),td=i(),It=n("p"),nd=r("Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),Fa=n("em"),ad=r("tokenizers"),sd=r(" library)."),rd=i(),Wo=n("div"),y(At.$$.fragment),ld=i(),qa=n("p"),dd=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),xr=i(),Bo=n("h2"),Ro=n("a"),Ea=n("span"),y(Dt.$$.fragment),id=i(),Ma=n("span"),cd=r("BlenderbotSmallModel"),Br=i(),Fe=n("div"),y(Gt.$$.fragment),pd=i(),Ut=n("p"),ud=r(`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Xn=n("a"),hd=r("PreTrainedModel"),md=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fd=i(),Wt=n("p"),_d=r("This model is also a PyTorch "),Rt=n("a"),gd=r("torch.nn.Module"),bd=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kd=i(),Le=n("div"),y(Kt.$$.fragment),vd=i(),zo=n("p"),yd=r("The "),Yn=n("a"),Td=r("BlenderbotSmallModel"),wd=r(" forward method, overrides the "),Ca=n("code"),Sd=r("__call__"),$d=r(" special method."),xd=i(),y(Ko.$$.fragment),Bd=i(),y(Ho.$$.fragment),zr=i(),Fo=n("h2"),Qo=n("a"),ja=n("span"),y(Ht.$$.fragment),zd=i(),Oa=n("span"),Fd=r("BlenderbotSmallForConditionalGeneration"),Fr=i(),qe=n("div"),y(Qt.$$.fragment),qd=i(),Vt=n("p"),Ed=r(`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),Zn=n("a"),Md=r("PreTrainedModel"),Cd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jd=i(),Jt=n("p"),Od=r("This model is also a PyTorch "),Xt=n("a"),Pd=r("torch.nn.Module"),Ld=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nd=i(),Ne=n("div"),y(Yt.$$.fragment),Id=i(),qo=n("p"),Ad=r("The "),ea=n("a"),Dd=r("BlenderbotSmallForConditionalGeneration"),Gd=r(" forward method, overrides the "),Pa=n("code"),Ud=r("__call__"),Wd=r(" special method."),Rd=i(),y(Vo.$$.fragment),Kd=i(),y(Jo.$$.fragment),qr=i(),Eo=n("h2"),Xo=n("a"),La=n("span"),y(Zt.$$.fragment),Hd=i(),Na=n("span"),Qd=r("BlenderbotSmallForCausalLM"),Er=i(),Mo=n("div"),y(en.$$.fragment),Vd=i(),Yo=n("div"),y(on.$$.fragment),Jd=i(),y(Zo.$$.fragment),Mr=i(),Co=n("h2"),et=n("a"),Ia=n("span"),y(tn.$$.fragment),Xd=i(),Aa=n("span"),Yd=r("TFBlenderbotSmallModel"),Cr=i(),ge=n("div"),y(nn.$$.fragment),Zd=i(),an=n("p"),ei=r(`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),oa=n("a"),oi=r("TFPreTrainedModel"),ti=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ni=i(),sn=n("p"),ai=r("This model is also a "),rn=n("a"),si=r("tf.keras.Model"),ri=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),li=i(),y(ot.$$.fragment),di=i(),Ie=n("div"),y(ln.$$.fragment),ii=i(),jo=n("p"),ci=r("The "),ta=n("a"),pi=r("TFBlenderbotSmallModel"),ui=r(" forward method, overrides the "),Da=n("code"),hi=r("__call__"),mi=r(" special method."),fi=i(),y(tt.$$.fragment),_i=i(),y(nt.$$.fragment),jr=i(),Oo=n("h2"),at=n("a"),Ga=n("span"),y(dn.$$.fragment),gi=i(),Ua=n("span"),bi=r("TFBlenderbotSmallForConditionalGeneration"),Or=i(),be=n("div"),y(cn.$$.fragment),ki=i(),pn=n("p"),vi=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),na=n("a"),yi=r("TFPreTrainedModel"),Ti=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wi=i(),un=n("p"),Si=r("This model is also a "),hn=n("a"),$i=r("tf.keras.Model"),xi=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bi=i(),y(st.$$.fragment),zi=i(),D=n("div"),y(mn.$$.fragment),Fi=i(),Po=n("p"),qi=r("The "),aa=n("a"),Ei=r("TFBlenderbotSmallForConditionalGeneration"),Mi=r(" forward method, overrides the "),Wa=n("code"),Ci=r("__call__"),ji=r(" special method."),Oi=i(),y(rt.$$.fragment),Pi=i(),Ra=n("p"),Li=r("Conversation example::"),Ni=i(),Ka=n("blockquote"),Ha=n("blockquote"),Qa=n("blockquote"),Va=n("p"),Ii=r(`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Ai=i(),Ja=n("blockquote"),Xa=n("blockquote"),Ya=n("blockquote"),Za=n("p"),Di=r(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Gi=i(),es=n("blockquote"),os=n("blockquote"),ts=n("blockquote"),ns=n("p"),Ui=r(`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),Wi=i(),as=n("blockquote"),ss=n("blockquote"),rs=n("blockquote"),fn=n("p"),Ri=r(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),ls=n("s"),Ki=r("what kind of carbs do they eat? i don\u2019t know much about carbs."),Hi=r(` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),Qi=i(),ds=n("blockquote"),is=n("blockquote"),cs=n("blockquote"),ps=n("p"),Vi=r(`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Pr=i(),Lo=n("h2"),lt=n("a"),us=n("span"),y(_n.$$.fragment),Ji=i(),hs=n("span"),Xi=r("FlaxBlenderbotSmallModel"),Lr=i(),U=n("div"),y(gn.$$.fragment),Yi=i(),bn=n("p"),Zi=r(`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),sa=n("a"),ec=r("FlaxPreTrainedModel"),oc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tc=i(),kn=n("p"),nc=r(`This model is also a Flax Linen
`),vn=n("a"),ac=r("flax.nn.Module"),sc=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),rc=i(),ms=n("p"),lc=r("Finally, this model supports inherent JAX features such as:"),dc=i(),ro=n("ul"),fs=n("li"),yn=n("a"),ic=r("Just-In-Time (JIT) compilation"),cc=i(),_s=n("li"),Tn=n("a"),pc=r("Automatic Differentiation"),uc=i(),gs=n("li"),wn=n("a"),hc=r("Vectorization"),mc=i(),bs=n("li"),Sn=n("a"),fc=r("Parallelization"),_c=i(),dt=n("div"),y($n.$$.fragment),gc=i(),y(it.$$.fragment),bc=i(),ct=n("div"),y(xn.$$.fragment),kc=i(),y(pt.$$.fragment),vc=i(),ut=n("div"),y(Bn.$$.fragment),yc=i(),y(ht.$$.fragment),Nr=i(),No=n("h2"),mt=n("a"),ks=n("span"),y(zn.$$.fragment),Tc=i(),vs=n("span"),wc=r("FlaxBlenderbotForConditionalGeneration"),Ir=i(),W=n("div"),y(Fn.$$.fragment),Sc=i(),qn=n("p"),$c=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),ra=n("a"),xc=r("FlaxPreTrainedModel"),Bc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zc=i(),En=n("p"),Fc=r(`This model is also a Flax Linen
`),Mn=n("a"),qc=r("flax.nn.Module"),Ec=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mc=i(),ys=n("p"),Cc=r("Finally, this model supports inherent JAX features such as:"),jc=i(),lo=n("ul"),Ts=n("li"),Cn=n("a"),Oc=r("Just-In-Time (JIT) compilation"),Pc=i(),ws=n("li"),jn=n("a"),Lc=r("Automatic Differentiation"),Nc=i(),Ss=n("li"),On=n("a"),Ic=r("Vectorization"),Ac=i(),$s=n("li"),Pn=n("a"),Dc=r("Parallelization"),Gc=i(),M=n("div"),y(Ln.$$.fragment),Uc=i(),Io=n("p"),Wc=r("The "),xs=n("code"),Rc=r("FlaxBlenderbotSmallPreTrainedModel"),Kc=r(" forward method, overrides the "),Bs=n("code"),Hc=r("__call__"),Qc=r(" special method."),Vc=i(),y(ft.$$.fragment),Jc=i(),zs=n("p"),Xc=r("Summarization example:"),Yc=i(),Fs=n("blockquote"),qs=n("blockquote"),Es=n("blockquote"),Ms=n("p"),Zc=r("from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),ep=i(),Cs=n("blockquote"),js=n("blockquote"),Os=n("blockquote"),Ps=n("p"),op=r(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),tp=i(),Ls=n("blockquote"),Ns=n("blockquote"),Is=n("blockquote"),As=n("p"),np=r(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),ap=i(),Ds=n("blockquote"),Gs=n("blockquote"),Nn=n("blockquote"),_t=n("h1"),gt=n("a"),Us=n("span"),y(In.$$.fragment),sp=i(),Ws=n("span"),rp=r("Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),lp=i(),Rs=n("p"),dp=r("print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),ip=i(),Ks=n("p"),cp=r("Mask filling example:"),pp=i(),Hs=n("blockquote"),Qs=n("blockquote"),Vs=n("blockquote"),Js=n("p"),up=r(`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),hp=i(),Xs=n("blockquote"),Ys=n("blockquote"),Zs=n("blockquote"),er=n("p"),mp=r(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),fp=i(),or=n("blockquote"),tr=n("blockquote"),nr=n("blockquote"),ar=n("p"),_p=r(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),gp=i(),sr=n("blockquote"),rr=n("blockquote"),lr=n("blockquote"),dr=n("p"),bp=r("tokenizer.decode(predictions).split()"),kp=i(),bt=n("div"),y(An.$$.fragment),vp=i(),y(kt.$$.fragment),yp=i(),vt=n("div"),y(Dn.$$.fragment),Tp=i(),y(yt.$$.fragment),this.h()},l(t){const g=pm('[data-svelte="svelte-1phssyn"]',document.head);p=a(g,"META",{name:!0,content:!0}),g.forEach(o),k=c(t),f=a(t,"H1",{class:!0});var Gn=s(f);m=a(Gn,"A",{id:!0,class:!0,href:!0});var ir=s(m);b=a(ir,"SPAN",{});var cr=s(b);T(d.$$.fragment,cr),cr.forEach(o),ir.forEach(o),h=c(Gn),q=a(Gn,"SPAN",{});var pr=s(q);Ae=l(pr,"Blenderbot Small"),pr.forEach(o),Gn.forEach(o),Me=c(t),C=a(t,"P",{});var ye=s(C);De=l(ye,"Note that "),re=a(ye,"A",{href:!0});var ur=s(re);B=l(ur,"BlenderbotSmallModel"),ur.forEach(o),Ge=l(ye,` and
`),Y=a(ye,"A",{href:!0});var hr=s(Y);Ue=l(hr,"BlenderbotSmallForConditionalGeneration"),hr.forEach(o),We=l(ye,` are only used in combination with the checkpoint
`),K=a(ye,"A",{href:!0,rel:!0});var mr=s(K);Re=l(mr,"facebook/blenderbot-90M"),mr.forEach(o),Ke=l(ye,`. Larger Blenderbot checkpoints should
instead be used with `),Z=a(ye,"A",{href:!0});var fr=s(Z);He=l(fr,"BlenderbotModel"),fr.forEach(o),Qe=l(ye,` and
`),ee=a(ye,"A",{href:!0});var _r=s(ee);Ve=l(_r,"BlenderbotForConditionalGeneration"),_r.forEach(o),ye.forEach(o),Ce=c(t),G=a(t,"H2",{class:!0});var Un=s(G);le=a(Un,"A",{id:!0,class:!0,href:!0});var gr=s(le);we=a(gr,"SPAN",{});var br=s(we);T(te.$$.fragment,br),br.forEach(o),gr.forEach(o),P=c(Un),I=a(Un,"SPAN",{});var kr=s(I);Je=l(kr,"Overview"),kr.forEach(o),Un.forEach(o),de=c(t),ie=a(t,"P",{});var Wn=s(ie);Xe=l(Wn,"The Blender chatbot model was proposed in "),H=a(Wn,"A",{href:!0,rel:!0});var vr=s(H);Ye=l(vr,"Recipes for building an open-domain chatbot"),vr.forEach(o),Ze=l(Wn,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Wn.forEach(o),A=c(t),ke=a(t,"P",{});var yr=s(ke);he=l(yr,"The abstract of the paper is the following:"),yr.forEach(o),je=c(t),ve=a(t,"P",{});var Sp=s(ve);ne=a(Sp,"EM",{});var $p=s(ne);eo=l($p,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),$p.forEach(o),Sp.forEach(o),Oe=c(t),N=a(t,"P",{});var la=s(N);oo=l(la,"This model was contributed by "),Q=a(la,"A",{href:!0,rel:!0});var xp=s(Q);to=l(xp,"patrickvonplaten"),xp.forEach(o),Se=l(la,`. The authors\u2019 code can be
found `),L=a(la,"A",{href:!0,rel:!0});var Bp=s(L);no=l(Bp,"here"),Bp.forEach(o),V=l(la," ."),la.forEach(o),Pe=c(t),ae=a(t,"H2",{class:!0});var Dr=s(ae);v=a(Dr,"A",{id:!0,class:!0,href:!0});var zp=s(v);F=a(zp,"SPAN",{});var Fp=s(F);T($e.$$.fragment,Fp),Fp.forEach(o),zp.forEach(o),xe=c(Dr),ao=a(Dr,"SPAN",{});var qp=s(ao);_o=l(qp,"BlenderbotSmallConfig"),qp.forEach(o),Dr.forEach(o),E=c(t),J=a(t,"DIV",{class:!0});var Tt=s(J);T(Be.$$.fragment,Tt),go=c(Tt),me=a(Tt,"P",{});var da=s(me);bo=l(da,"This is the configuration class to store the configuration of a "),R=a(da,"A",{href:!0});var Ep=s(R);fe=l(Ep,"BlenderbotSmallModel"),Ep.forEach(o),ko=l(da,`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),ze=a(da,"A",{href:!0,rel:!0});var Mp=s(ze);_e=l(Mp,"facebook/blenderbot_small-90M"),Mp.forEach(o),vo=l(da," architecture."),da.forEach(o),yo=c(Tt),se=a(Tt,"P",{});var ia=s(se);To=l(ia,"Configuration objects inherit from "),ce=a(ia,"A",{href:!0});var Cp=s(ce);wo=l(Cp,"PretrainedConfig"),Cp.forEach(o),wl=l(ia,` and can be used to control the model outputs. Read the
documentation from `),Kn=a(ia,"A",{href:!0});var jp=s(Kn);Sl=l(jp,"PretrainedConfig"),jp.forEach(o),$l=l(ia," for more information."),ia.forEach(o),xl=c(Tt),T(Ao.$$.fragment,Tt),Tt.forEach(o),Tr=c(t),So=a(t,"H2",{class:!0});var Gr=s(So);Do=a(Gr,"A",{id:!0,class:!0,href:!0});var Op=s(Do);ka=a(Op,"SPAN",{});var Pp=s(ka);T(qt.$$.fragment,Pp),Pp.forEach(o),Op.forEach(o),Bl=c(Gr),va=a(Gr,"SPAN",{});var Lp=s(va);zl=l(Lp,"BlenderbotSmallTokenizer"),Lp.forEach(o),Gr.forEach(o),wr=c(t),X=a(t,"DIV",{class:!0});var Te=s(X);T(Et.$$.fragment,Te),Fl=c(Te),ya=a(Te,"P",{});var Np=s(ya);ql=l(Np,"Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),Np.forEach(o),El=c(Te),Mt=a(Te,"P",{});var Ur=s(Mt);Ml=l(Ur,"This tokenizer inherits from "),Hn=a(Ur,"A",{href:!0});var Ip=s(Hn);Cl=l(Ip,"PreTrainedTokenizer"),Ip.forEach(o),jl=l(Ur,` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Ur.forEach(o),Ol=c(Te),io=a(Te,"DIV",{class:!0});var ca=s(io);T(Ct.$$.fragment,ca),Pl=c(ca),Ta=a(ca,"P",{});var Ap=s(Ta);Ll=l(Ap,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Ap.forEach(o),Nl=c(ca),wa=a(ca,"P",{});var Dp=s(wa);Il=l(Dp,"This implementation does not add special tokens and this method should be overridden in a subclass."),Dp.forEach(o),ca.forEach(o),Al=c(Te),Go=a(Te,"DIV",{class:!0});var Wr=s(Go);T(jt.$$.fragment,Wr),Dl=c(Wr),$o=a(Wr,"P",{});var pa=s($o);Gl=l(pa,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Sa=a(pa,"CODE",{});var Gp=s(Sa);Ul=l(Gp,"prepare_for_model"),Gp.forEach(o),Wl=l(pa," or "),$a=a(pa,"CODE",{});var Up=s($a);Rl=l(Up,"encode_plus"),Up.forEach(o),Kl=l(pa," methods."),pa.forEach(o),Wr.forEach(o),Hl=c(Te),co=a(Te,"DIV",{class:!0});var ua=s(co);T(Ot.$$.fragment,ua),Ql=c(ua),Qn=a(ua,"P",{});var wp=s(Qn);Vl=l(wp,"Create the token type IDs corresponding to the sequences passed. "),Vn=a(wp,"A",{href:!0});var Wp=s(Vn);Jl=l(Wp,`What are token type
IDs?`),Wp.forEach(o),wp.forEach(o),Xl=c(ua),xa=a(ua,"P",{});var Rp=s(xa);Yl=l(Rp,"Should be overridden in a subclass if the model has a special way of building those."),Rp.forEach(o),ua.forEach(o),Zl=c(Te),Jn=a(Te,"DIV",{class:!0});var Kp=s(Jn);T(Pt.$$.fragment,Kp),Kp.forEach(o),Te.forEach(o),Sr=c(t),xo=a(t,"H2",{class:!0});var Rr=s(xo);Uo=a(Rr,"A",{id:!0,class:!0,href:!0});var Hp=s(Uo);Ba=a(Hp,"SPAN",{});var Qp=s(Ba);T(Lt.$$.fragment,Qp),Qp.forEach(o),Hp.forEach(o),ed=c(Rr),za=a(Rr,"SPAN",{});var Vp=s(za);od=l(Vp,"BlenderbotSmallTokenizerFast"),Vp.forEach(o),Rr.forEach(o),$r=c(t),so=a(t,"DIV",{class:!0});var ha=s(so);T(Nt.$$.fragment,ha),td=c(ha),It=a(ha,"P",{});var Kr=s(It);nd=l(Kr,"Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),Fa=a(Kr,"EM",{});var Jp=s(Fa);ad=l(Jp,"tokenizers"),Jp.forEach(o),sd=l(Kr," library)."),Kr.forEach(o),rd=c(ha),Wo=a(ha,"DIV",{class:!0});var Hr=s(Wo);T(At.$$.fragment,Hr),ld=c(Hr),qa=a(Hr,"P",{});var Xp=s(qa);dd=l(Xp,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),Xp.forEach(o),Hr.forEach(o),ha.forEach(o),xr=c(t),Bo=a(t,"H2",{class:!0});var Qr=s(Bo);Ro=a(Qr,"A",{id:!0,class:!0,href:!0});var Yp=s(Ro);Ea=a(Yp,"SPAN",{});var Zp=s(Ea);T(Dt.$$.fragment,Zp),Zp.forEach(o),Yp.forEach(o),id=c(Qr),Ma=a(Qr,"SPAN",{});var eu=s(Ma);cd=l(eu,"BlenderbotSmallModel"),eu.forEach(o),Qr.forEach(o),Br=c(t),Fe=a(t,"DIV",{class:!0});var wt=s(Fe);T(Gt.$$.fragment,wt),pd=c(wt),Ut=a(wt,"P",{});var Vr=s(Ut);ud=l(Vr,`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Xn=a(Vr,"A",{href:!0});var ou=s(Xn);hd=l(ou,"PreTrainedModel"),ou.forEach(o),md=l(Vr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vr.forEach(o),fd=c(wt),Wt=a(wt,"P",{});var Jr=s(Wt);_d=l(Jr,"This model is also a PyTorch "),Rt=a(Jr,"A",{href:!0,rel:!0});var tu=s(Rt);gd=l(tu,"torch.nn.Module"),tu.forEach(o),bd=l(Jr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jr.forEach(o),kd=c(wt),Le=a(wt,"DIV",{class:!0});var St=s(Le);T(Kt.$$.fragment,St),vd=c(St),zo=a(St,"P",{});var ma=s(zo);yd=l(ma,"The "),Yn=a(ma,"A",{href:!0});var nu=s(Yn);Td=l(nu,"BlenderbotSmallModel"),nu.forEach(o),wd=l(ma," forward method, overrides the "),Ca=a(ma,"CODE",{});var au=s(Ca);Sd=l(au,"__call__"),au.forEach(o),$d=l(ma," special method."),ma.forEach(o),xd=c(St),T(Ko.$$.fragment,St),Bd=c(St),T(Ho.$$.fragment,St),St.forEach(o),wt.forEach(o),zr=c(t),Fo=a(t,"H2",{class:!0});var Xr=s(Fo);Qo=a(Xr,"A",{id:!0,class:!0,href:!0});var su=s(Qo);ja=a(su,"SPAN",{});var ru=s(ja);T(Ht.$$.fragment,ru),ru.forEach(o),su.forEach(o),zd=c(Xr),Oa=a(Xr,"SPAN",{});var lu=s(Oa);Fd=l(lu,"BlenderbotSmallForConditionalGeneration"),lu.forEach(o),Xr.forEach(o),Fr=c(t),qe=a(t,"DIV",{class:!0});var $t=s(qe);T(Qt.$$.fragment,$t),qd=c($t),Vt=a($t,"P",{});var Yr=s(Vt);Ed=l(Yr,`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),Zn=a(Yr,"A",{href:!0});var du=s(Zn);Md=l(du,"PreTrainedModel"),du.forEach(o),Cd=l(Yr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yr.forEach(o),jd=c($t),Jt=a($t,"P",{});var Zr=s(Jt);Od=l(Zr,"This model is also a PyTorch "),Xt=a(Zr,"A",{href:!0,rel:!0});var iu=s(Xt);Pd=l(iu,"torch.nn.Module"),iu.forEach(o),Ld=l(Zr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zr.forEach(o),Nd=c($t),Ne=a($t,"DIV",{class:!0});var xt=s(Ne);T(Yt.$$.fragment,xt),Id=c(xt),qo=a(xt,"P",{});var fa=s(qo);Ad=l(fa,"The "),ea=a(fa,"A",{href:!0});var cu=s(ea);Dd=l(cu,"BlenderbotSmallForConditionalGeneration"),cu.forEach(o),Gd=l(fa," forward method, overrides the "),Pa=a(fa,"CODE",{});var pu=s(Pa);Ud=l(pu,"__call__"),pu.forEach(o),Wd=l(fa," special method."),fa.forEach(o),Rd=c(xt),T(Vo.$$.fragment,xt),Kd=c(xt),T(Jo.$$.fragment,xt),xt.forEach(o),$t.forEach(o),qr=c(t),Eo=a(t,"H2",{class:!0});var el=s(Eo);Xo=a(el,"A",{id:!0,class:!0,href:!0});var uu=s(Xo);La=a(uu,"SPAN",{});var hu=s(La);T(Zt.$$.fragment,hu),hu.forEach(o),uu.forEach(o),Hd=c(el),Na=a(el,"SPAN",{});var mu=s(Na);Qd=l(mu,"BlenderbotSmallForCausalLM"),mu.forEach(o),el.forEach(o),Er=c(t),Mo=a(t,"DIV",{class:!0});var ol=s(Mo);T(en.$$.fragment,ol),Vd=c(ol),Yo=a(ol,"DIV",{class:!0});var tl=s(Yo);T(on.$$.fragment,tl),Jd=c(tl),T(Zo.$$.fragment,tl),tl.forEach(o),ol.forEach(o),Mr=c(t),Co=a(t,"H2",{class:!0});var nl=s(Co);et=a(nl,"A",{id:!0,class:!0,href:!0});var fu=s(et);Ia=a(fu,"SPAN",{});var _u=s(Ia);T(tn.$$.fragment,_u),_u.forEach(o),fu.forEach(o),Xd=c(nl),Aa=a(nl,"SPAN",{});var gu=s(Aa);Yd=l(gu,"TFBlenderbotSmallModel"),gu.forEach(o),nl.forEach(o),Cr=c(t),ge=a(t,"DIV",{class:!0});var po=s(ge);T(nn.$$.fragment,po),Zd=c(po),an=a(po,"P",{});var al=s(an);ei=l(al,`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),oa=a(al,"A",{href:!0});var bu=s(oa);oi=l(bu,"TFPreTrainedModel"),bu.forEach(o),ti=l(al,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),al.forEach(o),ni=c(po),sn=a(po,"P",{});var sl=s(sn);ai=l(sl,"This model is also a "),rn=a(sl,"A",{href:!0,rel:!0});var ku=s(rn);si=l(ku,"tf.keras.Model"),ku.forEach(o),ri=l(sl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sl.forEach(o),li=c(po),T(ot.$$.fragment,po),di=c(po),Ie=a(po,"DIV",{class:!0});var Bt=s(Ie);T(ln.$$.fragment,Bt),ii=c(Bt),jo=a(Bt,"P",{});var _a=s(jo);ci=l(_a,"The "),ta=a(_a,"A",{href:!0});var vu=s(ta);pi=l(vu,"TFBlenderbotSmallModel"),vu.forEach(o),ui=l(_a," forward method, overrides the "),Da=a(_a,"CODE",{});var yu=s(Da);hi=l(yu,"__call__"),yu.forEach(o),mi=l(_a," special method."),_a.forEach(o),fi=c(Bt),T(tt.$$.fragment,Bt),_i=c(Bt),T(nt.$$.fragment,Bt),Bt.forEach(o),po.forEach(o),jr=c(t),Oo=a(t,"H2",{class:!0});var rl=s(Oo);at=a(rl,"A",{id:!0,class:!0,href:!0});var Tu=s(at);Ga=a(Tu,"SPAN",{});var wu=s(Ga);T(dn.$$.fragment,wu),wu.forEach(o),Tu.forEach(o),gi=c(rl),Ua=a(rl,"SPAN",{});var Su=s(Ua);bi=l(Su,"TFBlenderbotSmallForConditionalGeneration"),Su.forEach(o),rl.forEach(o),Or=c(t),be=a(t,"DIV",{class:!0});var uo=s(be);T(cn.$$.fragment,uo),ki=c(uo),pn=a(uo,"P",{});var ll=s(pn);vi=l(ll,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),na=a(ll,"A",{href:!0});var $u=s(na);yi=l($u,"TFPreTrainedModel"),$u.forEach(o),Ti=l(ll,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ll.forEach(o),wi=c(uo),un=a(uo,"P",{});var dl=s(un);Si=l(dl,"This model is also a "),hn=a(dl,"A",{href:!0,rel:!0});var xu=s(hn);$i=l(xu,"tf.keras.Model"),xu.forEach(o),xi=l(dl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dl.forEach(o),Bi=c(uo),T(st.$$.fragment,uo),zi=c(uo),D=a(uo,"DIV",{class:!0});var oe=s(D);T(mn.$$.fragment,oe),Fi=c(oe),Po=a(oe,"P",{});var ga=s(Po);qi=l(ga,"The "),aa=a(ga,"A",{href:!0});var Bu=s(aa);Ei=l(Bu,"TFBlenderbotSmallForConditionalGeneration"),Bu.forEach(o),Mi=l(ga," forward method, overrides the "),Wa=a(ga,"CODE",{});var zu=s(Wa);Ci=l(zu,"__call__"),zu.forEach(o),ji=l(ga," special method."),ga.forEach(o),Oi=c(oe),T(rt.$$.fragment,oe),Pi=c(oe),Ra=a(oe,"P",{});var Fu=s(Ra);Li=l(Fu,"Conversation example::"),Fu.forEach(o),Ni=c(oe),Ka=a(oe,"BLOCKQUOTE",{});var qu=s(Ka);Ha=a(qu,"BLOCKQUOTE",{});var Eu=s(Ha);Qa=a(Eu,"BLOCKQUOTE",{});var Mu=s(Qa);Va=a(Mu,"P",{});var Cu=s(Va);Ii=l(Cu,`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Cu.forEach(o),Mu.forEach(o),Eu.forEach(o),qu.forEach(o),Ai=c(oe),Ja=a(oe,"BLOCKQUOTE",{});var ju=s(Ja);Xa=a(ju,"BLOCKQUOTE",{});var Ou=s(Xa);Ya=a(Ou,"BLOCKQUOTE",{});var Pu=s(Ya);Za=a(Pu,"P",{});var Lu=s(Za);Di=l(Lu,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Lu.forEach(o),Pu.forEach(o),Ou.forEach(o),ju.forEach(o),Gi=c(oe),es=a(oe,"BLOCKQUOTE",{});var Nu=s(es);os=a(Nu,"BLOCKQUOTE",{});var Iu=s(os);ts=a(Iu,"BLOCKQUOTE",{});var Au=s(ts);ns=a(Au,"P",{});var Du=s(ns);Ui=l(Du,`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),Du.forEach(o),Au.forEach(o),Iu.forEach(o),Nu.forEach(o),Wi=c(oe),as=a(oe,"BLOCKQUOTE",{});var Gu=s(as);ss=a(Gu,"BLOCKQUOTE",{});var Uu=s(ss);rs=a(Uu,"BLOCKQUOTE",{});var Wu=s(rs);fn=a(Wu,"P",{});var il=s(fn);Ri=l(il,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),ls=a(il,"S",{});var Ru=s(ls);Ki=l(Ru,"what kind of carbs do they eat? i don\u2019t know much about carbs."),Ru.forEach(o),Hi=l(il,` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),il.forEach(o),Wu.forEach(o),Uu.forEach(o),Gu.forEach(o),Qi=c(oe),ds=a(oe,"BLOCKQUOTE",{});var Ku=s(ds);is=a(Ku,"BLOCKQUOTE",{});var Hu=s(is);cs=a(Hu,"BLOCKQUOTE",{});var Qu=s(cs);ps=a(Qu,"P",{});var Vu=s(ps);Vi=l(Vu,`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Vu.forEach(o),Qu.forEach(o),Hu.forEach(o),Ku.forEach(o),oe.forEach(o),uo.forEach(o),Pr=c(t),Lo=a(t,"H2",{class:!0});var cl=s(Lo);lt=a(cl,"A",{id:!0,class:!0,href:!0});var Ju=s(lt);us=a(Ju,"SPAN",{});var Xu=s(us);T(_n.$$.fragment,Xu),Xu.forEach(o),Ju.forEach(o),Ji=c(cl),hs=a(cl,"SPAN",{});var Yu=s(hs);Xi=l(Yu,"FlaxBlenderbotSmallModel"),Yu.forEach(o),cl.forEach(o),Lr=c(t),U=a(t,"DIV",{class:!0});var pe=s(U);T(gn.$$.fragment,pe),Yi=c(pe),bn=a(pe,"P",{});var pl=s(bn);Zi=l(pl,`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),sa=a(pl,"A",{href:!0});var Zu=s(sa);ec=l(Zu,"FlaxPreTrainedModel"),Zu.forEach(o),oc=l(pl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pl.forEach(o),tc=c(pe),kn=a(pe,"P",{});var ul=s(kn);nc=l(ul,`This model is also a Flax Linen
`),vn=a(ul,"A",{href:!0,rel:!0});var eh=s(vn);ac=l(eh,"flax.nn.Module"),eh.forEach(o),sc=l(ul,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ul.forEach(o),rc=c(pe),ms=a(pe,"P",{});var oh=s(ms);lc=l(oh,"Finally, this model supports inherent JAX features such as:"),oh.forEach(o),dc=c(pe),ro=a(pe,"UL",{});var zt=s(ro);fs=a(zt,"LI",{});var th=s(fs);yn=a(th,"A",{href:!0,rel:!0});var nh=s(yn);ic=l(nh,"Just-In-Time (JIT) compilation"),nh.forEach(o),th.forEach(o),cc=c(zt),_s=a(zt,"LI",{});var ah=s(_s);Tn=a(ah,"A",{href:!0,rel:!0});var sh=s(Tn);pc=l(sh,"Automatic Differentiation"),sh.forEach(o),ah.forEach(o),uc=c(zt),gs=a(zt,"LI",{});var rh=s(gs);wn=a(rh,"A",{href:!0,rel:!0});var lh=s(wn);hc=l(lh,"Vectorization"),lh.forEach(o),rh.forEach(o),mc=c(zt),bs=a(zt,"LI",{});var dh=s(bs);Sn=a(dh,"A",{href:!0,rel:!0});var ih=s(Sn);fc=l(ih,"Parallelization"),ih.forEach(o),dh.forEach(o),zt.forEach(o),_c=c(pe),dt=a(pe,"DIV",{class:!0});var hl=s(dt);T($n.$$.fragment,hl),gc=c(hl),T(it.$$.fragment,hl),hl.forEach(o),bc=c(pe),ct=a(pe,"DIV",{class:!0});var ml=s(ct);T(xn.$$.fragment,ml),kc=c(ml),T(pt.$$.fragment,ml),ml.forEach(o),vc=c(pe),ut=a(pe,"DIV",{class:!0});var fl=s(ut);T(Bn.$$.fragment,fl),yc=c(fl),T(ht.$$.fragment,fl),fl.forEach(o),pe.forEach(o),Nr=c(t),No=a(t,"H2",{class:!0});var _l=s(No);mt=a(_l,"A",{id:!0,class:!0,href:!0});var ch=s(mt);ks=a(ch,"SPAN",{});var ph=s(ks);T(zn.$$.fragment,ph),ph.forEach(o),ch.forEach(o),Tc=c(_l),vs=a(_l,"SPAN",{});var uh=s(vs);wc=l(uh,"FlaxBlenderbotForConditionalGeneration"),uh.forEach(o),_l.forEach(o),Ir=c(t),W=a(t,"DIV",{class:!0});var ue=s(W);T(Fn.$$.fragment,ue),Sc=c(ue),qn=a(ue,"P",{});var gl=s(qn);$c=l(gl,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),ra=a(gl,"A",{href:!0});var hh=s(ra);xc=l(hh,"FlaxPreTrainedModel"),hh.forEach(o),Bc=l(gl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gl.forEach(o),zc=c(ue),En=a(ue,"P",{});var bl=s(En);Fc=l(bl,`This model is also a Flax Linen
`),Mn=a(bl,"A",{href:!0,rel:!0});var mh=s(Mn);qc=l(mh,"flax.nn.Module"),mh.forEach(o),Ec=l(bl,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),bl.forEach(o),Mc=c(ue),ys=a(ue,"P",{});var fh=s(ys);Cc=l(fh,"Finally, this model supports inherent JAX features such as:"),fh.forEach(o),jc=c(ue),lo=a(ue,"UL",{});var Ft=s(lo);Ts=a(Ft,"LI",{});var _h=s(Ts);Cn=a(_h,"A",{href:!0,rel:!0});var gh=s(Cn);Oc=l(gh,"Just-In-Time (JIT) compilation"),gh.forEach(o),_h.forEach(o),Pc=c(Ft),ws=a(Ft,"LI",{});var bh=s(ws);jn=a(bh,"A",{href:!0,rel:!0});var kh=s(jn);Lc=l(kh,"Automatic Differentiation"),kh.forEach(o),bh.forEach(o),Nc=c(Ft),Ss=a(Ft,"LI",{});var vh=s(Ss);On=a(vh,"A",{href:!0,rel:!0});var yh=s(On);Ic=l(yh,"Vectorization"),yh.forEach(o),vh.forEach(o),Ac=c(Ft),$s=a(Ft,"LI",{});var Th=s($s);Pn=a(Th,"A",{href:!0,rel:!0});var wh=s(Pn);Dc=l(wh,"Parallelization"),wh.forEach(o),Th.forEach(o),Ft.forEach(o),Gc=c(ue),M=a(ue,"DIV",{class:!0});var j=s(M);T(Ln.$$.fragment,j),Uc=c(j),Io=a(j,"P",{});var ba=s(Io);Wc=l(ba,"The "),xs=a(ba,"CODE",{});var Sh=s(xs);Rc=l(Sh,"FlaxBlenderbotSmallPreTrainedModel"),Sh.forEach(o),Kc=l(ba," forward method, overrides the "),Bs=a(ba,"CODE",{});var $h=s(Bs);Hc=l($h,"__call__"),$h.forEach(o),Qc=l(ba," special method."),ba.forEach(o),Vc=c(j),T(ft.$$.fragment,j),Jc=c(j),zs=a(j,"P",{});var xh=s(zs);Xc=l(xh,"Summarization example:"),xh.forEach(o),Yc=c(j),Fs=a(j,"BLOCKQUOTE",{});var Bh=s(Fs);qs=a(Bh,"BLOCKQUOTE",{});var zh=s(qs);Es=a(zh,"BLOCKQUOTE",{});var Fh=s(Es);Ms=a(Fh,"P",{});var qh=s(Ms);Zc=l(qh,"from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),qh.forEach(o),Fh.forEach(o),zh.forEach(o),Bh.forEach(o),ep=c(j),Cs=a(j,"BLOCKQUOTE",{});var Eh=s(Cs);js=a(Eh,"BLOCKQUOTE",{});var Mh=s(js);Os=a(Mh,"BLOCKQUOTE",{});var Ch=s(Os);Ps=a(Ch,"P",{});var jh=s(Ps);op=l(jh,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),jh.forEach(o),Ch.forEach(o),Mh.forEach(o),Eh.forEach(o),tp=c(j),Ls=a(j,"BLOCKQUOTE",{});var Oh=s(Ls);Ns=a(Oh,"BLOCKQUOTE",{});var Ph=s(Ns);Is=a(Ph,"BLOCKQUOTE",{});var Lh=s(Is);As=a(Lh,"P",{});var Nh=s(As);np=l(Nh,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Nh.forEach(o),Lh.forEach(o),Ph.forEach(o),Oh.forEach(o),ap=c(j),Ds=a(j,"BLOCKQUOTE",{});var Ih=s(Ds);Gs=a(Ih,"BLOCKQUOTE",{});var Ah=s(Gs);Nn=a(Ah,"BLOCKQUOTE",{});var kl=s(Nn);_t=a(kl,"H1",{class:!0});var vl=s(_t);gt=a(vl,"A",{id:!0,class:!0,href:!0});var Dh=s(gt);Us=a(Dh,"SPAN",{});var Gh=s(Us);T(In.$$.fragment,Gh),Gh.forEach(o),Dh.forEach(o),sp=c(vl),Ws=a(vl,"SPAN",{});var Uh=s(Ws);rp=l(Uh,"Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),Uh.forEach(o),vl.forEach(o),lp=c(kl),Rs=a(kl,"P",{});var Wh=s(Rs);dp=l(Wh,"print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),Wh.forEach(o),kl.forEach(o),Ah.forEach(o),Ih.forEach(o),ip=c(j),Ks=a(j,"P",{});var Rh=s(Ks);cp=l(Rh,"Mask filling example:"),Rh.forEach(o),pp=c(j),Hs=a(j,"BLOCKQUOTE",{});var Kh=s(Hs);Qs=a(Kh,"BLOCKQUOTE",{});var Hh=s(Qs);Vs=a(Hh,"BLOCKQUOTE",{});var Qh=s(Vs);Js=a(Qh,"P",{});var Vh=s(Js);up=l(Vh,`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),Vh.forEach(o),Qh.forEach(o),Hh.forEach(o),Kh.forEach(o),hp=c(j),Xs=a(j,"BLOCKQUOTE",{});var Jh=s(Xs);Ys=a(Jh,"BLOCKQUOTE",{});var Xh=s(Ys);Zs=a(Xh,"BLOCKQUOTE",{});var Yh=s(Zs);er=a(Yh,"P",{});var Zh=s(er);mp=l(Zh,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Zh.forEach(o),Yh.forEach(o),Xh.forEach(o),Jh.forEach(o),fp=c(j),or=a(j,"BLOCKQUOTE",{});var em=s(or);tr=a(em,"BLOCKQUOTE",{});var om=s(tr);nr=a(om,"BLOCKQUOTE",{});var tm=s(nr);ar=a(tm,"P",{});var nm=s(ar);_p=l(nm,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),nm.forEach(o),tm.forEach(o),om.forEach(o),em.forEach(o),gp=c(j),sr=a(j,"BLOCKQUOTE",{});var am=s(sr);rr=a(am,"BLOCKQUOTE",{});var sm=s(rr);lr=a(sm,"BLOCKQUOTE",{});var rm=s(lr);dr=a(rm,"P",{});var lm=s(dr);bp=l(lm,"tokenizer.decode(predictions).split()"),lm.forEach(o),rm.forEach(o),sm.forEach(o),am.forEach(o),j.forEach(o),kp=c(ue),bt=a(ue,"DIV",{class:!0});var yl=s(bt);T(An.$$.fragment,yl),vp=c(yl),T(kt.$$.fragment,yl),yl.forEach(o),yp=c(ue),vt=a(ue,"DIV",{class:!0});var Tl=s(vt);T(Dn.$$.fragment,Tl),Tp=c(Tl),T(yt.$$.fragment,Tl),Tl.forEach(o),ue.forEach(o),this.h()},h(){u(p,"name","hf:doc:metadata"),u(p,"content",JSON.stringify(Em)),u(m,"id","blenderbot-small"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#blenderbot-small"),u(f,"class","relative group"),u(re,"href","/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),u(Y,"href","/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),u(K,"href","https://huggingface.co/facebook/blenderbot-90M"),u(K,"rel","nofollow"),u(Z,"href","/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotModel"),u(ee,"href","/docs/transformers/v4.22.2/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),u(le,"id","overview"),u(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(le,"href","#overview"),u(G,"class","relative group"),u(H,"href","https://arxiv.org/pdf/2004.13637.pdf"),u(H,"rel","nofollow"),u(Q,"href","https://huggingface.co/patrickvonplaten"),u(Q,"rel","nofollow"),u(L,"href","https://github.com/facebookresearch/ParlAI"),u(L,"rel","nofollow"),u(v,"id","transformers.BlenderbotSmallConfig"),u(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(v,"href","#transformers.BlenderbotSmallConfig"),u(ae,"class","relative group"),u(R,"href","/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),u(ze,"href","https://huggingface.co/facebook/blenderbot_small-90M"),u(ze,"rel","nofollow"),u(ce,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),u(Kn,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),u(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Do,"id","transformers.BlenderbotSmallTokenizer"),u(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Do,"href","#transformers.BlenderbotSmallTokenizer"),u(So,"class","relative group"),u(Hn,"href","/docs/transformers/v4.22.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vn,"href","../glossary#token-type-ids"),u(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Uo,"id","transformers.BlenderbotSmallTokenizerFast"),u(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Uo,"href","#transformers.BlenderbotSmallTokenizerFast"),u(xo,"class","relative group"),u(Wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ro,"id","transformers.BlenderbotSmallModel"),u(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ro,"href","#transformers.BlenderbotSmallModel"),u(Bo,"class","relative group"),u(Xn,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),u(Rt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Rt,"rel","nofollow"),u(Yn,"href","/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qo,"id","transformers.BlenderbotSmallForConditionalGeneration"),u(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qo,"href","#transformers.BlenderbotSmallForConditionalGeneration"),u(Fo,"class","relative group"),u(Zn,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),u(Xt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Xt,"rel","nofollow"),u(ea,"href","/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xo,"id","transformers.BlenderbotSmallForCausalLM"),u(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xo,"href","#transformers.BlenderbotSmallForCausalLM"),u(Eo,"class","relative group"),u(Yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"id","transformers.TFBlenderbotSmallModel"),u(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(et,"href","#transformers.TFBlenderbotSmallModel"),u(Co,"class","relative group"),u(oa,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(rn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(rn,"rel","nofollow"),u(ta,"href","/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"id","transformers.TFBlenderbotSmallForConditionalGeneration"),u(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(at,"href","#transformers.TFBlenderbotSmallForConditionalGeneration"),u(Oo,"class","relative group"),u(na,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(hn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(hn,"rel","nofollow"),u(aa,"href","/docs/transformers/v4.22.2/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallForConditionalGeneration"),u(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"id","transformers.FlaxBlenderbotSmallModel"),u(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(lt,"href","#transformers.FlaxBlenderbotSmallModel"),u(Lo,"class","relative group"),u(sa,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(vn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(vn,"rel","nofollow"),u(yn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(yn,"rel","nofollow"),u(Tn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Tn,"rel","nofollow"),u(wn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(wn,"rel","nofollow"),u(Sn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Sn,"rel","nofollow"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mt,"id","transformers.FlaxBlenderbotSmallForConditionalGeneration"),u(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mt,"href","#transformers.FlaxBlenderbotSmallForConditionalGeneration"),u(No,"class","relative group"),u(ra,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Mn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Mn,"rel","nofollow"),u(Cn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Cn,"rel","nofollow"),u(jn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(jn,"rel","nofollow"),u(On,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(On,"rel","nofollow"),u(Pn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Pn,"rel","nofollow"),u(gt,"id","generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),u(gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(gt,"href","#generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),u(_t,"class","relative group"),u(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,p),_(t,k,g),_(t,f,g),e(f,m),e(m,b),w(d,b,null),e(f,h),e(f,q),e(q,Ae),_(t,Me,g),_(t,C,g),e(C,De),e(C,re),e(re,B),e(C,Ge),e(C,Y),e(Y,Ue),e(C,We),e(C,K),e(K,Re),e(C,Ke),e(C,Z),e(Z,He),e(C,Qe),e(C,ee),e(ee,Ve),_(t,Ce,g),_(t,G,g),e(G,le),e(le,we),w(te,we,null),e(G,P),e(G,I),e(I,Je),_(t,de,g),_(t,ie,g),e(ie,Xe),e(ie,H),e(H,Ye),e(ie,Ze),_(t,A,g),_(t,ke,g),e(ke,he),_(t,je,g),_(t,ve,g),e(ve,ne),e(ne,eo),_(t,Oe,g),_(t,N,g),e(N,oo),e(N,Q),e(Q,to),e(N,Se),e(N,L),e(L,no),e(N,V),_(t,Pe,g),_(t,ae,g),e(ae,v),e(v,F),w($e,F,null),e(ae,xe),e(ae,ao),e(ao,_o),_(t,E,g),_(t,J,g),w(Be,J,null),e(J,go),e(J,me),e(me,bo),e(me,R),e(R,fe),e(me,ko),e(me,ze),e(ze,_e),e(me,vo),e(J,yo),e(J,se),e(se,To),e(se,ce),e(ce,wo),e(se,wl),e(se,Kn),e(Kn,Sl),e(se,$l),e(J,xl),w(Ao,J,null),_(t,Tr,g),_(t,So,g),e(So,Do),e(Do,ka),w(qt,ka,null),e(So,Bl),e(So,va),e(va,zl),_(t,wr,g),_(t,X,g),w(Et,X,null),e(X,Fl),e(X,ya),e(ya,ql),e(X,El),e(X,Mt),e(Mt,Ml),e(Mt,Hn),e(Hn,Cl),e(Mt,jl),e(X,Ol),e(X,io),w(Ct,io,null),e(io,Pl),e(io,Ta),e(Ta,Ll),e(io,Nl),e(io,wa),e(wa,Il),e(X,Al),e(X,Go),w(jt,Go,null),e(Go,Dl),e(Go,$o),e($o,Gl),e($o,Sa),e(Sa,Ul),e($o,Wl),e($o,$a),e($a,Rl),e($o,Kl),e(X,Hl),e(X,co),w(Ot,co,null),e(co,Ql),e(co,Qn),e(Qn,Vl),e(Qn,Vn),e(Vn,Jl),e(co,Xl),e(co,xa),e(xa,Yl),e(X,Zl),e(X,Jn),w(Pt,Jn,null),_(t,Sr,g),_(t,xo,g),e(xo,Uo),e(Uo,Ba),w(Lt,Ba,null),e(xo,ed),e(xo,za),e(za,od),_(t,$r,g),_(t,so,g),w(Nt,so,null),e(so,td),e(so,It),e(It,nd),e(It,Fa),e(Fa,ad),e(It,sd),e(so,rd),e(so,Wo),w(At,Wo,null),e(Wo,ld),e(Wo,qa),e(qa,dd),_(t,xr,g),_(t,Bo,g),e(Bo,Ro),e(Ro,Ea),w(Dt,Ea,null),e(Bo,id),e(Bo,Ma),e(Ma,cd),_(t,Br,g),_(t,Fe,g),w(Gt,Fe,null),e(Fe,pd),e(Fe,Ut),e(Ut,ud),e(Ut,Xn),e(Xn,hd),e(Ut,md),e(Fe,fd),e(Fe,Wt),e(Wt,_d),e(Wt,Rt),e(Rt,gd),e(Wt,bd),e(Fe,kd),e(Fe,Le),w(Kt,Le,null),e(Le,vd),e(Le,zo),e(zo,yd),e(zo,Yn),e(Yn,Td),e(zo,wd),e(zo,Ca),e(Ca,Sd),e(zo,$d),e(Le,xd),w(Ko,Le,null),e(Le,Bd),w(Ho,Le,null),_(t,zr,g),_(t,Fo,g),e(Fo,Qo),e(Qo,ja),w(Ht,ja,null),e(Fo,zd),e(Fo,Oa),e(Oa,Fd),_(t,Fr,g),_(t,qe,g),w(Qt,qe,null),e(qe,qd),e(qe,Vt),e(Vt,Ed),e(Vt,Zn),e(Zn,Md),e(Vt,Cd),e(qe,jd),e(qe,Jt),e(Jt,Od),e(Jt,Xt),e(Xt,Pd),e(Jt,Ld),e(qe,Nd),e(qe,Ne),w(Yt,Ne,null),e(Ne,Id),e(Ne,qo),e(qo,Ad),e(qo,ea),e(ea,Dd),e(qo,Gd),e(qo,Pa),e(Pa,Ud),e(qo,Wd),e(Ne,Rd),w(Vo,Ne,null),e(Ne,Kd),w(Jo,Ne,null),_(t,qr,g),_(t,Eo,g),e(Eo,Xo),e(Xo,La),w(Zt,La,null),e(Eo,Hd),e(Eo,Na),e(Na,Qd),_(t,Er,g),_(t,Mo,g),w(en,Mo,null),e(Mo,Vd),e(Mo,Yo),w(on,Yo,null),e(Yo,Jd),w(Zo,Yo,null),_(t,Mr,g),_(t,Co,g),e(Co,et),e(et,Ia),w(tn,Ia,null),e(Co,Xd),e(Co,Aa),e(Aa,Yd),_(t,Cr,g),_(t,ge,g),w(nn,ge,null),e(ge,Zd),e(ge,an),e(an,ei),e(an,oa),e(oa,oi),e(an,ti),e(ge,ni),e(ge,sn),e(sn,ai),e(sn,rn),e(rn,si),e(sn,ri),e(ge,li),w(ot,ge,null),e(ge,di),e(ge,Ie),w(ln,Ie,null),e(Ie,ii),e(Ie,jo),e(jo,ci),e(jo,ta),e(ta,pi),e(jo,ui),e(jo,Da),e(Da,hi),e(jo,mi),e(Ie,fi),w(tt,Ie,null),e(Ie,_i),w(nt,Ie,null),_(t,jr,g),_(t,Oo,g),e(Oo,at),e(at,Ga),w(dn,Ga,null),e(Oo,gi),e(Oo,Ua),e(Ua,bi),_(t,Or,g),_(t,be,g),w(cn,be,null),e(be,ki),e(be,pn),e(pn,vi),e(pn,na),e(na,yi),e(pn,Ti),e(be,wi),e(be,un),e(un,Si),e(un,hn),e(hn,$i),e(un,xi),e(be,Bi),w(st,be,null),e(be,zi),e(be,D),w(mn,D,null),e(D,Fi),e(D,Po),e(Po,qi),e(Po,aa),e(aa,Ei),e(Po,Mi),e(Po,Wa),e(Wa,Ci),e(Po,ji),e(D,Oi),w(rt,D,null),e(D,Pi),e(D,Ra),e(Ra,Li),e(D,Ni),e(D,Ka),e(Ka,Ha),e(Ha,Qa),e(Qa,Va),e(Va,Ii),e(D,Ai),e(D,Ja),e(Ja,Xa),e(Xa,Ya),e(Ya,Za),e(Za,Di),e(D,Gi),e(D,es),e(es,os),e(os,ts),e(ts,ns),e(ns,Ui),e(D,Wi),e(D,as),e(as,ss),e(ss,rs),e(rs,fn),e(fn,Ri),e(fn,ls),e(ls,Ki),e(fn,Hi),e(D,Qi),e(D,ds),e(ds,is),e(is,cs),e(cs,ps),e(ps,Vi),_(t,Pr,g),_(t,Lo,g),e(Lo,lt),e(lt,us),w(_n,us,null),e(Lo,Ji),e(Lo,hs),e(hs,Xi),_(t,Lr,g),_(t,U,g),w(gn,U,null),e(U,Yi),e(U,bn),e(bn,Zi),e(bn,sa),e(sa,ec),e(bn,oc),e(U,tc),e(U,kn),e(kn,nc),e(kn,vn),e(vn,ac),e(kn,sc),e(U,rc),e(U,ms),e(ms,lc),e(U,dc),e(U,ro),e(ro,fs),e(fs,yn),e(yn,ic),e(ro,cc),e(ro,_s),e(_s,Tn),e(Tn,pc),e(ro,uc),e(ro,gs),e(gs,wn),e(wn,hc),e(ro,mc),e(ro,bs),e(bs,Sn),e(Sn,fc),e(U,_c),e(U,dt),w($n,dt,null),e(dt,gc),w(it,dt,null),e(U,bc),e(U,ct),w(xn,ct,null),e(ct,kc),w(pt,ct,null),e(U,vc),e(U,ut),w(Bn,ut,null),e(ut,yc),w(ht,ut,null),_(t,Nr,g),_(t,No,g),e(No,mt),e(mt,ks),w(zn,ks,null),e(No,Tc),e(No,vs),e(vs,wc),_(t,Ir,g),_(t,W,g),w(Fn,W,null),e(W,Sc),e(W,qn),e(qn,$c),e(qn,ra),e(ra,xc),e(qn,Bc),e(W,zc),e(W,En),e(En,Fc),e(En,Mn),e(Mn,qc),e(En,Ec),e(W,Mc),e(W,ys),e(ys,Cc),e(W,jc),e(W,lo),e(lo,Ts),e(Ts,Cn),e(Cn,Oc),e(lo,Pc),e(lo,ws),e(ws,jn),e(jn,Lc),e(lo,Nc),e(lo,Ss),e(Ss,On),e(On,Ic),e(lo,Ac),e(lo,$s),e($s,Pn),e(Pn,Dc),e(W,Gc),e(W,M),w(Ln,M,null),e(M,Uc),e(M,Io),e(Io,Wc),e(Io,xs),e(xs,Rc),e(Io,Kc),e(Io,Bs),e(Bs,Hc),e(Io,Qc),e(M,Vc),w(ft,M,null),e(M,Jc),e(M,zs),e(zs,Xc),e(M,Yc),e(M,Fs),e(Fs,qs),e(qs,Es),e(Es,Ms),e(Ms,Zc),e(M,ep),e(M,Cs),e(Cs,js),e(js,Os),e(Os,Ps),e(Ps,op),e(M,tp),e(M,Ls),e(Ls,Ns),e(Ns,Is),e(Is,As),e(As,np),e(M,ap),e(M,Ds),e(Ds,Gs),e(Gs,Nn),e(Nn,_t),e(_t,gt),e(gt,Us),w(In,Us,null),e(_t,sp),e(_t,Ws),e(Ws,rp),e(Nn,lp),e(Nn,Rs),e(Rs,dp),e(M,ip),e(M,Ks),e(Ks,cp),e(M,pp),e(M,Hs),e(Hs,Qs),e(Qs,Vs),e(Vs,Js),e(Js,up),e(M,hp),e(M,Xs),e(Xs,Ys),e(Ys,Zs),e(Zs,er),e(er,mp),e(M,fp),e(M,or),e(or,tr),e(tr,nr),e(nr,ar),e(ar,_p),e(M,gp),e(M,sr),e(sr,rr),e(rr,lr),e(lr,dr),e(dr,bp),e(W,kp),e(W,bt),w(An,bt,null),e(bt,vp),w(kt,bt,null),e(W,yp),e(W,vt),w(Dn,vt,null),e(vt,Tp),w(yt,vt,null),Ar=!0},p(t,[g]){const Gn={};g&2&&(Gn.$$scope={dirty:g,ctx:t}),Ao.$set(Gn);const ir={};g&2&&(ir.$$scope={dirty:g,ctx:t}),Ko.$set(ir);const cr={};g&2&&(cr.$$scope={dirty:g,ctx:t}),Ho.$set(cr);const pr={};g&2&&(pr.$$scope={dirty:g,ctx:t}),Vo.$set(pr);const ye={};g&2&&(ye.$$scope={dirty:g,ctx:t}),Jo.$set(ye);const ur={};g&2&&(ur.$$scope={dirty:g,ctx:t}),Zo.$set(ur);const hr={};g&2&&(hr.$$scope={dirty:g,ctx:t}),ot.$set(hr);const mr={};g&2&&(mr.$$scope={dirty:g,ctx:t}),tt.$set(mr);const fr={};g&2&&(fr.$$scope={dirty:g,ctx:t}),nt.$set(fr);const _r={};g&2&&(_r.$$scope={dirty:g,ctx:t}),st.$set(_r);const Un={};g&2&&(Un.$$scope={dirty:g,ctx:t}),rt.$set(Un);const gr={};g&2&&(gr.$$scope={dirty:g,ctx:t}),it.$set(gr);const br={};g&2&&(br.$$scope={dirty:g,ctx:t}),pt.$set(br);const kr={};g&2&&(kr.$$scope={dirty:g,ctx:t}),ht.$set(kr);const Wn={};g&2&&(Wn.$$scope={dirty:g,ctx:t}),ft.$set(Wn);const vr={};g&2&&(vr.$$scope={dirty:g,ctx:t}),kt.$set(vr);const yr={};g&2&&(yr.$$scope={dirty:g,ctx:t}),yt.$set(yr)},i(t){Ar||(S(d.$$.fragment,t),S(te.$$.fragment,t),S($e.$$.fragment,t),S(Be.$$.fragment,t),S(Ao.$$.fragment,t),S(qt.$$.fragment,t),S(Et.$$.fragment,t),S(Ct.$$.fragment,t),S(jt.$$.fragment,t),S(Ot.$$.fragment,t),S(Pt.$$.fragment,t),S(Lt.$$.fragment,t),S(Nt.$$.fragment,t),S(At.$$.fragment,t),S(Dt.$$.fragment,t),S(Gt.$$.fragment,t),S(Kt.$$.fragment,t),S(Ko.$$.fragment,t),S(Ho.$$.fragment,t),S(Ht.$$.fragment,t),S(Qt.$$.fragment,t),S(Yt.$$.fragment,t),S(Vo.$$.fragment,t),S(Jo.$$.fragment,t),S(Zt.$$.fragment,t),S(en.$$.fragment,t),S(on.$$.fragment,t),S(Zo.$$.fragment,t),S(tn.$$.fragment,t),S(nn.$$.fragment,t),S(ot.$$.fragment,t),S(ln.$$.fragment,t),S(tt.$$.fragment,t),S(nt.$$.fragment,t),S(dn.$$.fragment,t),S(cn.$$.fragment,t),S(st.$$.fragment,t),S(mn.$$.fragment,t),S(rt.$$.fragment,t),S(_n.$$.fragment,t),S(gn.$$.fragment,t),S($n.$$.fragment,t),S(it.$$.fragment,t),S(xn.$$.fragment,t),S(pt.$$.fragment,t),S(Bn.$$.fragment,t),S(ht.$$.fragment,t),S(zn.$$.fragment,t),S(Fn.$$.fragment,t),S(Ln.$$.fragment,t),S(ft.$$.fragment,t),S(In.$$.fragment,t),S(An.$$.fragment,t),S(kt.$$.fragment,t),S(Dn.$$.fragment,t),S(yt.$$.fragment,t),Ar=!0)},o(t){$(d.$$.fragment,t),$(te.$$.fragment,t),$($e.$$.fragment,t),$(Be.$$.fragment,t),$(Ao.$$.fragment,t),$(qt.$$.fragment,t),$(Et.$$.fragment,t),$(Ct.$$.fragment,t),$(jt.$$.fragment,t),$(Ot.$$.fragment,t),$(Pt.$$.fragment,t),$(Lt.$$.fragment,t),$(Nt.$$.fragment,t),$(At.$$.fragment,t),$(Dt.$$.fragment,t),$(Gt.$$.fragment,t),$(Kt.$$.fragment,t),$(Ko.$$.fragment,t),$(Ho.$$.fragment,t),$(Ht.$$.fragment,t),$(Qt.$$.fragment,t),$(Yt.$$.fragment,t),$(Vo.$$.fragment,t),$(Jo.$$.fragment,t),$(Zt.$$.fragment,t),$(en.$$.fragment,t),$(on.$$.fragment,t),$(Zo.$$.fragment,t),$(tn.$$.fragment,t),$(nn.$$.fragment,t),$(ot.$$.fragment,t),$(ln.$$.fragment,t),$(tt.$$.fragment,t),$(nt.$$.fragment,t),$(dn.$$.fragment,t),$(cn.$$.fragment,t),$(st.$$.fragment,t),$(mn.$$.fragment,t),$(rt.$$.fragment,t),$(_n.$$.fragment,t),$(gn.$$.fragment,t),$($n.$$.fragment,t),$(it.$$.fragment,t),$(xn.$$.fragment,t),$(pt.$$.fragment,t),$(Bn.$$.fragment,t),$(ht.$$.fragment,t),$(zn.$$.fragment,t),$(Fn.$$.fragment,t),$(Ln.$$.fragment,t),$(ft.$$.fragment,t),$(In.$$.fragment,t),$(An.$$.fragment,t),$(kt.$$.fragment,t),$(Dn.$$.fragment,t),$(yt.$$.fragment,t),Ar=!1},d(t){o(p),t&&o(k),t&&o(f),x(d),t&&o(Me),t&&o(C),t&&o(Ce),t&&o(G),x(te),t&&o(de),t&&o(ie),t&&o(A),t&&o(ke),t&&o(je),t&&o(ve),t&&o(Oe),t&&o(N),t&&o(Pe),t&&o(ae),x($e),t&&o(E),t&&o(J),x(Be),x(Ao),t&&o(Tr),t&&o(So),x(qt),t&&o(wr),t&&o(X),x(Et),x(Ct),x(jt),x(Ot),x(Pt),t&&o(Sr),t&&o(xo),x(Lt),t&&o($r),t&&o(so),x(Nt),x(At),t&&o(xr),t&&o(Bo),x(Dt),t&&o(Br),t&&o(Fe),x(Gt),x(Kt),x(Ko),x(Ho),t&&o(zr),t&&o(Fo),x(Ht),t&&o(Fr),t&&o(qe),x(Qt),x(Yt),x(Vo),x(Jo),t&&o(qr),t&&o(Eo),x(Zt),t&&o(Er),t&&o(Mo),x(en),x(on),x(Zo),t&&o(Mr),t&&o(Co),x(tn),t&&o(Cr),t&&o(ge),x(nn),x(ot),x(ln),x(tt),x(nt),t&&o(jr),t&&o(Oo),x(dn),t&&o(Or),t&&o(be),x(cn),x(st),x(mn),x(rt),t&&o(Pr),t&&o(Lo),x(_n),t&&o(Lr),t&&o(U),x(gn),x($n),x(it),x(xn),x(pt),x(Bn),x(ht),t&&o(Nr),t&&o(No),x(zn),t&&o(Ir),t&&o(W),x(Fn),x(Ln),x(ft),x(In),x(An),x(kt),x(Dn),x(yt)}}}const Em={local:"blenderbot-small",sections:[{local:"overview",title:"Overview"},{local:"transformers.BlenderbotSmallConfig",title:"BlenderbotSmallConfig"},{local:"transformers.BlenderbotSmallTokenizer",title:"BlenderbotSmallTokenizer"},{local:"transformers.BlenderbotSmallTokenizerFast",title:"BlenderbotSmallTokenizerFast"},{local:"transformers.BlenderbotSmallModel",title:"BlenderbotSmallModel"},{local:"transformers.BlenderbotSmallForConditionalGeneration",title:"BlenderbotSmallForConditionalGeneration"},{local:"transformers.BlenderbotSmallForCausalLM",title:"BlenderbotSmallForCausalLM"},{local:"transformers.TFBlenderbotSmallModel",title:"TFBlenderbotSmallModel"},{local:"transformers.TFBlenderbotSmallForConditionalGeneration",title:"TFBlenderbotSmallForConditionalGeneration"},{local:"transformers.FlaxBlenderbotSmallModel",title:"FlaxBlenderbotSmallModel"},{local:"transformers.FlaxBlenderbotSmallForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot Small"};function Mm(z){return um(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Im extends dm{constructor(p){super();im(this,p,Mm,qm,cm,{})}}export{Im as default,Em as metadata};
