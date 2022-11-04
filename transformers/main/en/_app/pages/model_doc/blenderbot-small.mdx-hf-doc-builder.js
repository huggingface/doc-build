import{S as bh,i as kh,s as yh,e as n,k as i,w as y,t as r,M as vh,c as a,d as o,m as c,a as s,x as v,h as l,b as m,G as e,g as _,y as T,q as w,o as S,B as $,v as Th,L as bo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Kn}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ko}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as je}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as go}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function wh(z){let p,k,f,h,b;return h=new ko({props:{code:`from transformers import BlenderbotSmallConfig, BlenderbotSmallModel

# Initializing a BlenderbotSmall facebook/blenderbot_small-90M style configuration
configuration = BlenderbotSmallConfig()

# Initializing a model (with random weights) from the facebook/blenderbot_small-90M style configuration
model = BlenderbotSmallModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallConfig, BlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BlenderbotSmall facebook/blenderbot_small-90M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BlenderbotSmallConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the facebook/blenderbot_small-90M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(h.$$.fragment)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Example:"),u.forEach(o),f=c(d),v(h.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(h,d,u),b=!0},p:bo,i(d){b||(w(h.$$.fragment,d),b=!0)},o(d){S(h.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(h,d)}}}function Sh(z){let p,k,f,h,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),h=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(u,"CODE",{});var E=s(f);h=l(E,"Module"),E.forEach(o),b=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){_(d,p,u),e(p,k),e(p,f),e(f,h),e(p,b)},d(d){d&&o(p)}}}function $h(z){let p,k,f,h,b;return h=new ko({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallModel

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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">512</span>]`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(h.$$.fragment)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Example:"),u.forEach(o),f=c(d),v(h.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(h,d,u),b=!0},p:bo,i(d){b||(w(h.$$.fragment,d),b=!0)},o(d){S(h.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(h,d)}}}function xh(z){let p,k,f,h,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),h=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(u,"CODE",{});var E=s(f);h=l(E,"Module"),E.forEach(o),b=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){_(d,p,u),e(p,k),e(p,f),e(f,h),e(p,b)},d(d){d&&o(p)}}}function Bh(z){let p,k,f,h,b;return h=new ko({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration

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
Bot:  they eat a lot of carbs. carbs are high in fat, protein, and carbohydrates.</span>`}}),{c(){p=n("p"),k=r("Conversation example:"),f=i(),y(h.$$.fragment)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Conversation example:"),u.forEach(o),f=c(d),v(h.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(h,d,u),b=!0},p:bo,i(d){b||(w(h.$$.fragment,d),b=!0)},o(d){S(h.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(h,d)}}}function zh(z){let p,k,f,h,b;return h=new ko({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(h.$$.fragment)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Example:"),u.forEach(o),f=c(d),v(h.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(h,d,u),b=!0},p:bo,i(d){b||(w(h.$$.fragment,d),b=!0)},o(d){S(h.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(h,d)}}}function Fh(z){let p,k,f,h,b,d,u,E,Ue,Oe,C,We,ne,B,Re,J,Ke,He,K,Qe,Ve,X,Je,Xe,Y,Ye,Pe,D,ae,$e,ee,L,N,Ze,se,re,eo,H,oo,to,I,be,pe,Le,ke,oe,no,Ne,R,ao,le,ye,me,G,Ie,j,so,ue;return{c(){p=n("p"),k=r("TensorFlow models and layers in "),f=n("code"),h=r("transformers"),b=r(" accept two formats as input:"),d=i(),u=n("ul"),E=n("li"),Ue=r("having all inputs as keyword arguments (like PyTorch models), or"),Oe=i(),C=n("li"),We=r("having all inputs as a list, tuple or dict in the first positional argument."),ne=i(),B=n("p"),Re=r(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),J=n("code"),Ke=r("model.fit()"),He=r(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),K=n("code"),Qe=r("model.fit()"),Ve=r(` supports! If, however, you want to use the second
format outside of Keras methods like `),X=n("code"),Je=r("fit()"),Xe=r(" and "),Y=n("code"),Ye=r("predict()"),Pe=r(`, such as when creating your own layers or models with
the Keras `),D=n("code"),ae=r("Functional"),$e=r(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=i(),L=n("ul"),N=n("li"),Ze=r("a single Tensor with "),se=n("code"),re=r("input_ids"),eo=r(" only and nothing else: "),H=n("code"),oo=r("model(input_ids)"),to=i(),I=n("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),pe=n("code"),Le=r("model([input_ids, attention_mask])"),ke=r(" or "),oe=n("code"),no=r("model([input_ids, attention_mask, token_type_ids])"),Ne=i(),R=n("li"),ao=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),le=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),me=i(),G=n("p"),Ie=r(`Note that when creating models and layers with
`),j=n("a"),so=r("subclassing"),ue=r(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(x){p=a(x,"P",{});var q=s(p);k=l(q,"TensorFlow models and layers in "),f=a(q,"CODE",{});var xe=s(f);h=l(xe,"transformers"),xe.forEach(o),b=l(q," accept two formats as input:"),q.forEach(o),d=c(x),u=a(x,"UL",{});var Be=s(u);E=a(Be,"LI",{});var yo=s(E);Ue=l(yo,"having all inputs as keyword arguments (like PyTorch models), or"),yo.forEach(o),Oe=c(Be),C=a(Be,"LI",{});var mo=s(C);We=l(mo,"having all inputs as a list, tuple or dict in the first positional argument."),mo.forEach(o),Be.forEach(o),ne=c(x),B=a(x,"P",{});var F=s(B);Re=l(F,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),J=a(F,"CODE",{});var ve=s(J);Ke=l(ve,"model.fit()"),ve.forEach(o),He=l(F,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),K=a(F,"CODE",{});var ro=s(K);Qe=l(ro,"model.fit()"),ro.forEach(o),Ve=l(F,` supports! If, however, you want to use the second
format outside of Keras methods like `),X=a(F,"CODE",{});var ze=s(X);Je=l(ze,"fit()"),ze.forEach(o),Xe=l(F," and "),Y=a(F,"CODE",{});var vo=s(Y);Ye=l(vo,"predict()"),vo.forEach(o),Pe=l(F,`, such as when creating your own layers or models with
the Keras `),D=a(F,"CODE",{});var lo=s(D);ae=l(lo,"Functional"),lo.forEach(o),$e=l(F,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),F.forEach(o),ee=c(x),L=a(x,"UL",{});var te=s(L);N=a(te,"LI",{});var de=s(N);Ze=l(de,"a single Tensor with "),se=a(de,"CODE",{});var Q=s(se);re=l(Q,"input_ids"),Q.forEach(o),eo=l(de," only and nothing else: "),H=a(de,"CODE",{});var Fe=s(H);oo=l(Fe,"model(input_ids)"),Fe.forEach(o),de.forEach(o),to=c(te),I=a(te,"LI",{});var he=s(I);be=l(he,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),pe=a(he,"CODE",{});var fe=s(pe);Le=l(fe,"model([input_ids, attention_mask])"),fe.forEach(o),ke=l(he," or "),oe=a(he,"CODE",{});var To=s(oe);no=l(To,"model([input_ids, attention_mask, token_type_ids])"),To.forEach(o),he.forEach(o),Ne=c(te),R=a(te,"LI",{});var Te=s(R);ao=l(Te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),le=a(Te,"CODE",{});var wo=s(le);ye=l(wo,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),wo.forEach(o),Te.forEach(o),te.forEach(o),me=c(x),G=a(x,"P",{});var qe=s(G);Ie=l(qe,`Note that when creating models and layers with
`),j=a(qe,"A",{href:!0,rel:!0});var Ee=s(j);so=l(Ee,"subclassing"),Ee.forEach(o),ue=l(qe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),qe.forEach(o),this.h()},h(){m(j,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(j,"rel","nofollow")},m(x,q){_(x,p,q),e(p,k),e(p,f),e(f,h),e(p,b),_(x,d,q),_(x,u,q),e(u,E),e(E,Ue),e(u,Oe),e(u,C),e(C,We),_(x,ne,q),_(x,B,q),e(B,Re),e(B,J),e(J,Ke),e(B,He),e(B,K),e(K,Qe),e(B,Ve),e(B,X),e(X,Je),e(B,Xe),e(B,Y),e(Y,Ye),e(B,Pe),e(B,D),e(D,ae),e(B,$e),_(x,ee,q),_(x,L,q),e(L,N),e(N,Ze),e(N,se),e(se,re),e(N,eo),e(N,H),e(H,oo),e(L,to),e(L,I),e(I,be),e(I,pe),e(pe,Le),e(I,ke),e(I,oe),e(oe,no),e(L,Ne),e(L,R),e(R,ao),e(R,le),e(le,ye),_(x,me,q),_(x,G,q),e(G,Ie),e(G,j),e(j,so),e(G,ue)},d(x){x&&o(p),x&&o(d),x&&o(u),x&&o(ne),x&&o(B),x&&o(ee),x&&o(L),x&&o(me),x&&o(G)}}}function qh(z){let p,k,f,h,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),h=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(u,"CODE",{});var E=s(f);h=l(E,"Module"),E.forEach(o),b=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){_(d,p,u),e(p,k),e(p,f),e(f,h),e(p,b)},d(d){d&&o(p)}}}function Eh(z){let p,k,f,h,b;return h=new ko({props:{code:`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(h.$$.fragment)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Example:"),u.forEach(o),f=c(d),v(h.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(h,d,u),b=!0},p:bo,i(d){b||(w(h.$$.fragment,d),b=!0)},o(d){S(h.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(h,d)}}}function Mh(z){let p,k,f,h,b,d,u,E,Ue,Oe,C,We,ne,B,Re,J,Ke,He,K,Qe,Ve,X,Je,Xe,Y,Ye,Pe,D,ae,$e,ee,L,N,Ze,se,re,eo,H,oo,to,I,be,pe,Le,ke,oe,no,Ne,R,ao,le,ye,me,G,Ie,j,so,ue;return{c(){p=n("p"),k=r("TensorFlow models and layers in "),f=n("code"),h=r("transformers"),b=r(" accept two formats as input:"),d=i(),u=n("ul"),E=n("li"),Ue=r("having all inputs as keyword arguments (like PyTorch models), or"),Oe=i(),C=n("li"),We=r("having all inputs as a list, tuple or dict in the first positional argument."),ne=i(),B=n("p"),Re=r(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),J=n("code"),Ke=r("model.fit()"),He=r(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),K=n("code"),Qe=r("model.fit()"),Ve=r(` supports! If, however, you want to use the second
format outside of Keras methods like `),X=n("code"),Je=r("fit()"),Xe=r(" and "),Y=n("code"),Ye=r("predict()"),Pe=r(`, such as when creating your own layers or models with
the Keras `),D=n("code"),ae=r("Functional"),$e=r(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=i(),L=n("ul"),N=n("li"),Ze=r("a single Tensor with "),se=n("code"),re=r("input_ids"),eo=r(" only and nothing else: "),H=n("code"),oo=r("model(input_ids)"),to=i(),I=n("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),pe=n("code"),Le=r("model([input_ids, attention_mask])"),ke=r(" or "),oe=n("code"),no=r("model([input_ids, attention_mask, token_type_ids])"),Ne=i(),R=n("li"),ao=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),le=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),me=i(),G=n("p"),Ie=r(`Note that when creating models and layers with
`),j=n("a"),so=r("subclassing"),ue=r(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(x){p=a(x,"P",{});var q=s(p);k=l(q,"TensorFlow models and layers in "),f=a(q,"CODE",{});var xe=s(f);h=l(xe,"transformers"),xe.forEach(o),b=l(q," accept two formats as input:"),q.forEach(o),d=c(x),u=a(x,"UL",{});var Be=s(u);E=a(Be,"LI",{});var yo=s(E);Ue=l(yo,"having all inputs as keyword arguments (like PyTorch models), or"),yo.forEach(o),Oe=c(Be),C=a(Be,"LI",{});var mo=s(C);We=l(mo,"having all inputs as a list, tuple or dict in the first positional argument."),mo.forEach(o),Be.forEach(o),ne=c(x),B=a(x,"P",{});var F=s(B);Re=l(F,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),J=a(F,"CODE",{});var ve=s(J);Ke=l(ve,"model.fit()"),ve.forEach(o),He=l(F,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),K=a(F,"CODE",{});var ro=s(K);Qe=l(ro,"model.fit()"),ro.forEach(o),Ve=l(F,` supports! If, however, you want to use the second
format outside of Keras methods like `),X=a(F,"CODE",{});var ze=s(X);Je=l(ze,"fit()"),ze.forEach(o),Xe=l(F," and "),Y=a(F,"CODE",{});var vo=s(Y);Ye=l(vo,"predict()"),vo.forEach(o),Pe=l(F,`, such as when creating your own layers or models with
the Keras `),D=a(F,"CODE",{});var lo=s(D);ae=l(lo,"Functional"),lo.forEach(o),$e=l(F,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),F.forEach(o),ee=c(x),L=a(x,"UL",{});var te=s(L);N=a(te,"LI",{});var de=s(N);Ze=l(de,"a single Tensor with "),se=a(de,"CODE",{});var Q=s(se);re=l(Q,"input_ids"),Q.forEach(o),eo=l(de," only and nothing else: "),H=a(de,"CODE",{});var Fe=s(H);oo=l(Fe,"model(input_ids)"),Fe.forEach(o),de.forEach(o),to=c(te),I=a(te,"LI",{});var he=s(I);be=l(he,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),pe=a(he,"CODE",{});var fe=s(pe);Le=l(fe,"model([input_ids, attention_mask])"),fe.forEach(o),ke=l(he," or "),oe=a(he,"CODE",{});var To=s(oe);no=l(To,"model([input_ids, attention_mask, token_type_ids])"),To.forEach(o),he.forEach(o),Ne=c(te),R=a(te,"LI",{});var Te=s(R);ao=l(Te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),le=a(Te,"CODE",{});var wo=s(le);ye=l(wo,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),wo.forEach(o),Te.forEach(o),te.forEach(o),me=c(x),G=a(x,"P",{});var qe=s(G);Ie=l(qe,`Note that when creating models and layers with
`),j=a(qe,"A",{href:!0,rel:!0});var Ee=s(j);so=l(Ee,"subclassing"),Ee.forEach(o),ue=l(qe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),qe.forEach(o),this.h()},h(){m(j,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(j,"rel","nofollow")},m(x,q){_(x,p,q),e(p,k),e(p,f),e(f,h),e(p,b),_(x,d,q),_(x,u,q),e(u,E),e(E,Ue),e(u,Oe),e(u,C),e(C,We),_(x,ne,q),_(x,B,q),e(B,Re),e(B,J),e(J,Ke),e(B,He),e(B,K),e(K,Qe),e(B,Ve),e(B,X),e(X,Je),e(B,Xe),e(B,Y),e(Y,Ye),e(B,Pe),e(B,D),e(D,ae),e(B,$e),_(x,ee,q),_(x,L,q),e(L,N),e(N,Ze),e(N,se),e(se,re),e(N,eo),e(N,H),e(H,oo),e(L,to),e(L,I),e(I,be),e(I,pe),e(pe,Le),e(I,ke),e(I,oe),e(oe,no),e(L,Ne),e(L,R),e(R,ao),e(R,le),e(le,ye),_(x,me,q),_(x,G,q),e(G,Ie),e(G,j),e(j,so),e(G,ue)},d(x){x&&o(p),x&&o(d),x&&o(u),x&&o(ne),x&&o(B),x&&o(ee),x&&o(L),x&&o(me),x&&o(G)}}}function Ch(z){let p,k,f,h,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),h=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(u,"CODE",{});var E=s(f);h=l(E,"Module"),E.forEach(o),b=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){_(d,p,u),e(p,k),e(p,f),e(f,h),e(p,b)},d(d){d&&o(p)}}}function jh(z){let p,k,f,h,b;return h=new ko({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = FlaxBlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(h.$$.fragment)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Example:"),u.forEach(o),f=c(d),v(h.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(h,d,u),b=!0},p:bo,i(d){b||(w(h.$$.fragment,d),b=!0)},o(d){S(h.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(h,d)}}}function Oh(z){let p,k,f,h,b;return h=new ko({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(h.$$.fragment)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Example:"),u.forEach(o),f=c(d),v(h.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(h,d,u),b=!0},p:bo,i(d){b||(w(h.$$.fragment,d),b=!0)},o(d){S(h.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(h,d)}}}function Ph(z){let p,k,f,h,b;return h=new ko({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(h.$$.fragment)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Example:"),u.forEach(o),f=c(d),v(h.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(h,d,u),b=!0},p:bo,i(d){b||(w(h.$$.fragment,d),b=!0)},o(d){S(h.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(h,d)}}}function Lh(z){let p,k,f,h,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),h=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(u,"CODE",{});var E=s(f);h=l(E,"Module"),E.forEach(o),b=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){_(d,p,u),e(p,k),e(p,f),e(f,h),e(p,b)},d(d){d&&o(p)}}}function Nh(z){let p,k,f,h,b;return h=new ko({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(h.$$.fragment)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Example:"),u.forEach(o),f=c(d),v(h.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(h,d,u),b=!0},p:bo,i(d){b||(w(h.$$.fragment,d),b=!0)},o(d){S(h.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(h,d)}}}function Ih(z){let p,k,f,h,b;return h=new ko({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(h.$$.fragment)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Example:"),u.forEach(o),f=c(d),v(h.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(h,d,u),b=!0},p:bo,i(d){b||(w(h.$$.fragment,d),b=!0)},o(d){S(h.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(h,d)}}}function Ah(z){let p,k,f,h,b,d,u,E,Ue,Oe,C,We,ne,B,Re,J,Ke,He,K,Qe,Ve,X,Je,Xe,Y,Ye,Pe,D,ae,$e,ee,L,N,Ze,se,re,eo,H,oo,to,I,be,pe,Le,ke,oe,no,Ne,R,ao,le,ye,me,G,Ie,j,so,ue,x,q,xe,Be,yo,mo,F,ve,ro,ze,vo,lo,te,de,Q,Fe,he,fe,To,Te,wo,qe,Ee,$l,xl,Bl,So,zl,Hn,Fl,ql,Qn,El,Ml,Cl,Do,Sr,$o,Go,va,Et,jl,Ta,Ol,$r,V,Mt,Pl,wa,Ll,Nl,Ct,Il,Vn,Al,Dl,Gl,uo,jt,Ul,Sa,Wl,Rl,$a,Kl,Hl,Uo,Ot,Ql,xo,Vl,xa,Jl,Xl,Ba,Yl,Zl,ed,ho,Pt,od,Jn,td,Xn,nd,ad,za,sd,rd,Yn,Lt,xr,Bo,Wo,Fa,Nt,ld,qa,dd,Br,io,It,id,At,cd,Ea,pd,md,ud,Ro,Dt,hd,Ma,fd,zr,zo,Ko,Ca,Gt,_d,ja,gd,Fr,Me,Ut,bd,Wt,kd,Zn,yd,vd,Td,Rt,wd,Kt,Sd,$d,xd,Ae,Ht,Bd,Fo,zd,ea,Fd,qd,Oa,Ed,Md,Cd,Ho,jd,Qo,qr,qo,Vo,Pa,Qt,Od,La,Pd,Er,Ce,Vt,Ld,Jt,Nd,oa,Id,Ad,Dd,Xt,Gd,Yt,Ud,Wd,Rd,De,Zt,Kd,Eo,Hd,ta,Qd,Vd,Na,Jd,Xd,Yd,Jo,Zd,Xo,Mr,Mo,Yo,Ia,en,ei,Aa,oi,Cr,Co,on,ti,Zo,tn,ni,et,jr,jo,ot,Da,nn,ai,Ga,si,Or,_e,an,ri,sn,li,na,di,ii,ci,rn,pi,ln,mi,ui,hi,tt,fi,Ge,dn,_i,Oo,gi,aa,bi,ki,Ua,yi,vi,Ti,nt,wi,at,Pr,Po,st,Wa,cn,Si,Ra,$i,Lr,ge,pn,xi,mn,Bi,sa,zi,Fi,qi,un,Ei,hn,Mi,Ci,ji,rt,Oi,A,fn,Pi,Lo,Li,ra,Ni,Ii,Ka,Ai,Di,Gi,lt,Ui,Ha,Wi,Ri,Qa,Va,Ja,Xa,Ki,Hi,Ya,Za,es,os,Qi,Vi,ts,ns,as,ss,Ji,Xi,rs,ls,ds,_n,Yi,is,Zi,ec,oc,cs,ps,ms,us,tc,Nr,No,dt,hs,gn,nc,fs,ac,Ir,U,bn,sc,kn,rc,la,lc,dc,ic,yn,cc,vn,pc,mc,uc,_s,hc,fc,co,gs,Tn,_c,gc,bs,wn,bc,kc,ks,Sn,yc,vc,ys,$n,Tc,wc,it,xn,Sc,ct,$c,pt,Bn,xc,mt,Bc,ut,zn,zc,ht,Ar,Io,ft,vs,Fn,Fc,Ts,qc,Dr,W,qn,Ec,En,Mc,da,Cc,jc,Oc,Mn,Pc,Cn,Lc,Nc,Ic,ws,Ac,Dc,po,Ss,jn,Gc,Uc,$s,On,Wc,Rc,xs,Pn,Kc,Hc,Bs,Ln,Qc,Vc,M,Nn,Jc,Ao,Xc,zs,Yc,Zc,Fs,ep,op,tp,_t,np,qs,ap,sp,Es,Ms,Cs,js,rp,lp,Os,Ps,Ls,Ns,dp,ip,Is,As,Ds,Gs,cp,pp,Us,Ws,In,gt,bt,Rs,An,mp,Ks,up,hp,Hs,fp,_p,Qs,gp,bp,Vs,Js,Xs,Ys,kp,yp,Zs,er,or,tr,vp,Tp,nr,ar,sr,rr,wp,Sp,lr,dr,ir,cr,$p,xp,kt,Dn,Bp,yt,zp,vt,Gn,Fp,Tt,Gr;return d=new je({}),ee=new je({}),ze=new je({}),Fe=new P({props:{name:"class transformers.BlenderbotSmallConfig",anchor:"transformers.BlenderbotSmallConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 512"},{name:"encoder_layers",val:" = 8"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 8"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BlenderbotSmall model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel">BlenderbotSmallModel</a> or <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel">TFBlenderbotSmallModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotSmallConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/configuration_blenderbot_small.py#L36"}}),Do=new go({props:{anchor:"transformers.BlenderbotSmallConfig.example",$$slots:{default:[wh]},$$scope:{ctx:z}}}),Et=new je({}),Mt=new P({props:{name:"class transformers.BlenderbotSmallTokenizer",anchor:"transformers.BlenderbotSmallTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"bos_token",val:" = '__start__'"},{name:"eos_token",val:" = '__end__'"},{name:"unk_token",val:" = '__unk__'"},{name:"pad_token",val:" = '__null__'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BlenderbotSmallTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BlenderbotSmallTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__start__&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__end__&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__unk__&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BlenderbotSmallTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__pad__&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.
**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L69"}}),jt=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L3007",returnDescription:`
<p>The model input with special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ot=new P({props:{name:"get_special_tokens_mask",anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils.py#L845",returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),Pt=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2987",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Lt=new P({props:{name:"save_vocabulary",anchor:"transformers.BlenderbotSmallTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L211"}}),Nt=new je({}),It=new P({props:{name:"class transformers.BlenderbotSmallTokenizerFast",anchor:"transformers.BlenderbotSmallTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L52"}}),Dt=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L98",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Gt=new je({}),Ut=new P({props:{name:"class transformers.BlenderbotSmallModel",anchor:"transformers.BlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1083"}}),Ht=new P({props:{name:"forward",anchor:"transformers.BlenderbotSmallModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1110",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ho=new Kn({props:{$$slots:{default:[Sh]},$$scope:{ctx:z}}}),Qo=new go({props:{anchor:"transformers.BlenderbotSmallModel.forward.example",$$slots:{default:[$h]},$$scope:{ctx:z}}}),Qt=new je({}),Vt=new P({props:{name:"class transformers.BlenderbotSmallForConditionalGeneration",anchor:"transformers.BlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1209"}}),Zt=new P({props:{name:"forward",anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1253",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jo=new Kn({props:{$$slots:{default:[xh]},$$scope:{ctx:z}}}),Xo=new go({props:{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.example",$$slots:{default:[Bh]},$$scope:{ctx:z}}}),en=new je({}),on=new P({props:{name:"class transformers.BlenderbotSmallForCausalLM",anchor:"transformers.BlenderbotSmallForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1389"}}),tn=new P({props:{name:"forward",anchor:"transformers.BlenderbotSmallForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1420",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),et=new go({props:{anchor:"transformers.BlenderbotSmallForCausalLM.forward.example",$$slots:{default:[zh]},$$scope:{ctx:z}}}),nn=new je({}),an=new P({props:{name:"class transformers.TFBlenderbotSmallModel",anchor:"transformers.TFBlenderbotSmallModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1167"}}),tt=new Kn({props:{$$slots:{default:[Fh]},$$scope:{ctx:z}}}),dn=new P({props:{name:"call",anchor:"transformers.TFBlenderbotSmallModel.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1179",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),nt=new Kn({props:{$$slots:{default:[qh]},$$scope:{ctx:z}}}),at=new go({props:{anchor:"transformers.TFBlenderbotSmallModel.call.example",$$slots:{default:[Eh]},$$scope:{ctx:z}}}),cn=new je({}),pn=new P({props:{name:"class transformers.TFBlenderbotSmallForConditionalGeneration",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1274"}}),rt=new Kn({props:{$$slots:{default:[Mh]},$$scope:{ctx:z}}}),fn=new P({props:{name:"call",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1312",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),lt=new Kn({props:{$$slots:{default:[Ch]},$$scope:{ctx:z}}}),gn=new je({}),bn=new P({props:{name:"class transformers.FlaxBlenderbotSmallModel",anchor:"transformers.FlaxBlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1215"}}),xn=new P({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1151",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ct=new go({props:{anchor:"transformers.FlaxBlenderbotSmallModel.__call__.example",$$slots:{default:[jh]},$$scope:{ctx:z}}}),Bn=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L972",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mt=new go({props:{anchor:"transformers.FlaxBlenderbotSmallModel.encode.example",$$slots:{default:[Oh]},$$scope:{ctx:z}}}),zn=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1035",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ht=new go({props:{anchor:"transformers.FlaxBlenderbotSmallModel.decode.example",$$slots:{default:[Ph]},$$scope:{ctx:z}}}),Fn=new je({}),qn=new P({props:{name:"class transformers.FlaxBlenderbotSmallForConditionalGeneration",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1303"}}),Nn=new P({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1151",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_t=new Kn({props:{$$slots:{default:[Lh]},$$scope:{ctx:z}}}),An=new je({}),Dn=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L972",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yt=new go({props:{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.example",$$slots:{default:[Nh]},$$scope:{ctx:z}}}),Gn=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1307",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tt=new go({props:{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.example",$$slots:{default:[Ih]},$$scope:{ctx:z}}}),{c(){p=n("meta"),k=i(),f=n("h1"),h=n("a"),b=n("span"),y(d.$$.fragment),u=i(),E=n("span"),Ue=r("Blenderbot Small"),Oe=i(),C=n("p"),We=r("Note that "),ne=n("a"),B=r("BlenderbotSmallModel"),Re=r(` and
`),J=n("a"),Ke=r("BlenderbotSmallForConditionalGeneration"),He=r(` are only used in combination with the checkpoint
`),K=n("a"),Qe=r("facebook/blenderbot-90M"),Ve=r(`. Larger Blenderbot checkpoints should
instead be used with `),X=n("a"),Je=r("BlenderbotModel"),Xe=r(` and
`),Y=n("a"),Ye=r("BlenderbotForConditionalGeneration"),Pe=i(),D=n("h2"),ae=n("a"),$e=n("span"),y(ee.$$.fragment),L=i(),N=n("span"),Ze=r("Overview"),se=i(),re=n("p"),eo=r("The Blender chatbot model was proposed in "),H=n("a"),oo=r("Recipes for building an open-domain chatbot"),to=r(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),I=i(),be=n("p"),pe=r("The abstract of the paper is the following:"),Le=i(),ke=n("p"),oe=n("em"),no=r(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Ne=i(),R=n("p"),ao=r("Tips:"),le=i(),ye=n("ul"),me=n("li"),G=r(`Blenderbot Small is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Ie=i(),j=n("p"),so=r("This model was contributed by "),ue=n("a"),x=r("patrickvonplaten"),q=r(`. The authors\u2019 code can be
found `),xe=n("a"),Be=r("here"),yo=r(" ."),mo=i(),F=n("h2"),ve=n("a"),ro=n("span"),y(ze.$$.fragment),vo=i(),lo=n("span"),te=r("BlenderbotSmallConfig"),de=i(),Q=n("div"),y(Fe.$$.fragment),he=i(),fe=n("p"),To=r("This is the configuration class to store the configuration of a "),Te=n("a"),wo=r("BlenderbotSmallModel"),qe=r(`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),Ee=n("a"),$l=r("facebook/blenderbot_small-90M"),xl=r(" architecture."),Bl=i(),So=n("p"),zl=r("Configuration objects inherit from "),Hn=n("a"),Fl=r("PretrainedConfig"),ql=r(` and can be used to control the model outputs. Read the
documentation from `),Qn=n("a"),El=r("PretrainedConfig"),Ml=r(" for more information."),Cl=i(),y(Do.$$.fragment),Sr=i(),$o=n("h2"),Go=n("a"),va=n("span"),y(Et.$$.fragment),jl=i(),Ta=n("span"),Ol=r("BlenderbotSmallTokenizer"),$r=i(),V=n("div"),y(Mt.$$.fragment),Pl=i(),wa=n("p"),Ll=r("Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),Nl=i(),Ct=n("p"),Il=r("This tokenizer inherits from "),Vn=n("a"),Al=r("PreTrainedTokenizer"),Dl=r(` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Gl=i(),uo=n("div"),y(jt.$$.fragment),Ul=i(),Sa=n("p"),Wl=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Rl=i(),$a=n("p"),Kl=r("This implementation does not add special tokens and this method should be overridden in a subclass."),Hl=i(),Uo=n("div"),y(Ot.$$.fragment),Ql=i(),xo=n("p"),Vl=r(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xa=n("code"),Jl=r("prepare_for_model"),Xl=r(" or "),Ba=n("code"),Yl=r("encode_plus"),Zl=r(" methods."),ed=i(),ho=n("div"),y(Pt.$$.fragment),od=i(),Jn=n("p"),td=r("Create the token type IDs corresponding to the sequences passed. "),Xn=n("a"),nd=r(`What are token type
IDs?`),ad=i(),za=n("p"),sd=r("Should be overridden in a subclass if the model has a special way of building those."),rd=i(),Yn=n("div"),y(Lt.$$.fragment),xr=i(),Bo=n("h2"),Wo=n("a"),Fa=n("span"),y(Nt.$$.fragment),ld=i(),qa=n("span"),dd=r("BlenderbotSmallTokenizerFast"),Br=i(),io=n("div"),y(It.$$.fragment),id=i(),At=n("p"),cd=r("Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),Ea=n("em"),pd=r("tokenizers"),md=r(" library)."),ud=i(),Ro=n("div"),y(Dt.$$.fragment),hd=i(),Ma=n("p"),fd=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),zr=i(),zo=n("h2"),Ko=n("a"),Ca=n("span"),y(Gt.$$.fragment),_d=i(),ja=n("span"),gd=r("BlenderbotSmallModel"),Fr=i(),Me=n("div"),y(Ut.$$.fragment),bd=i(),Wt=n("p"),kd=r(`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Zn=n("a"),yd=r("PreTrainedModel"),vd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Td=i(),Rt=n("p"),wd=r("This model is also a PyTorch "),Kt=n("a"),Sd=r("torch.nn.Module"),$d=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xd=i(),Ae=n("div"),y(Ht.$$.fragment),Bd=i(),Fo=n("p"),zd=r("The "),ea=n("a"),Fd=r("BlenderbotSmallModel"),qd=r(" forward method, overrides the "),Oa=n("code"),Ed=r("__call__"),Md=r(" special method."),Cd=i(),y(Ho.$$.fragment),jd=i(),y(Qo.$$.fragment),qr=i(),qo=n("h2"),Vo=n("a"),Pa=n("span"),y(Qt.$$.fragment),Od=i(),La=n("span"),Pd=r("BlenderbotSmallForConditionalGeneration"),Er=i(),Ce=n("div"),y(Vt.$$.fragment),Ld=i(),Jt=n("p"),Nd=r(`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),oa=n("a"),Id=r("PreTrainedModel"),Ad=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dd=i(),Xt=n("p"),Gd=r("This model is also a PyTorch "),Yt=n("a"),Ud=r("torch.nn.Module"),Wd=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rd=i(),De=n("div"),y(Zt.$$.fragment),Kd=i(),Eo=n("p"),Hd=r("The "),ta=n("a"),Qd=r("BlenderbotSmallForConditionalGeneration"),Vd=r(" forward method, overrides the "),Na=n("code"),Jd=r("__call__"),Xd=r(" special method."),Yd=i(),y(Jo.$$.fragment),Zd=i(),y(Xo.$$.fragment),Mr=i(),Mo=n("h2"),Yo=n("a"),Ia=n("span"),y(en.$$.fragment),ei=i(),Aa=n("span"),oi=r("BlenderbotSmallForCausalLM"),Cr=i(),Co=n("div"),y(on.$$.fragment),ti=i(),Zo=n("div"),y(tn.$$.fragment),ni=i(),y(et.$$.fragment),jr=i(),jo=n("h2"),ot=n("a"),Da=n("span"),y(nn.$$.fragment),ai=i(),Ga=n("span"),si=r("TFBlenderbotSmallModel"),Or=i(),_e=n("div"),y(an.$$.fragment),ri=i(),sn=n("p"),li=r(`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),na=n("a"),di=r("TFPreTrainedModel"),ii=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ci=i(),rn=n("p"),pi=r("This model is also a "),ln=n("a"),mi=r("tf.keras.Model"),ui=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hi=i(),y(tt.$$.fragment),fi=i(),Ge=n("div"),y(dn.$$.fragment),_i=i(),Oo=n("p"),gi=r("The "),aa=n("a"),bi=r("TFBlenderbotSmallModel"),ki=r(" forward method, overrides the "),Ua=n("code"),yi=r("__call__"),vi=r(" special method."),Ti=i(),y(nt.$$.fragment),wi=i(),y(at.$$.fragment),Pr=i(),Po=n("h2"),st=n("a"),Wa=n("span"),y(cn.$$.fragment),Si=i(),Ra=n("span"),$i=r("TFBlenderbotSmallForConditionalGeneration"),Lr=i(),ge=n("div"),y(pn.$$.fragment),xi=i(),mn=n("p"),Bi=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),sa=n("a"),zi=r("TFPreTrainedModel"),Fi=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qi=i(),un=n("p"),Ei=r("This model is also a "),hn=n("a"),Mi=r("tf.keras.Model"),Ci=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ji=i(),y(rt.$$.fragment),Oi=i(),A=n("div"),y(fn.$$.fragment),Pi=i(),Lo=n("p"),Li=r("The "),ra=n("a"),Ni=r("TFBlenderbotSmallForConditionalGeneration"),Ii=r(" forward method, overrides the "),Ka=n("code"),Ai=r("__call__"),Di=r(" special method."),Gi=i(),y(lt.$$.fragment),Ui=i(),Ha=n("p"),Wi=r("Conversation example::"),Ri=i(),Qa=n("blockquote"),Va=n("blockquote"),Ja=n("blockquote"),Xa=n("p"),Ki=r(`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Hi=i(),Ya=n("blockquote"),Za=n("blockquote"),es=n("blockquote"),os=n("p"),Qi=r(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Vi=i(),ts=n("blockquote"),ns=n("blockquote"),as=n("blockquote"),ss=n("p"),Ji=r(`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),Xi=i(),rs=n("blockquote"),ls=n("blockquote"),ds=n("blockquote"),_n=n("p"),Yi=r(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),is=n("s"),Zi=r("what kind of carbs do they eat? i don\u2019t know much about carbs."),ec=r(` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),oc=i(),cs=n("blockquote"),ps=n("blockquote"),ms=n("blockquote"),us=n("p"),tc=r(`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Nr=i(),No=n("h2"),dt=n("a"),hs=n("span"),y(gn.$$.fragment),nc=i(),fs=n("span"),ac=r("FlaxBlenderbotSmallModel"),Ir=i(),U=n("div"),y(bn.$$.fragment),sc=i(),kn=n("p"),rc=r(`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),la=n("a"),lc=r("FlaxPreTrainedModel"),dc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ic=i(),yn=n("p"),cc=r(`This model is also a Flax Linen
`),vn=n("a"),pc=r("flax.nn.Module"),mc=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),uc=i(),_s=n("p"),hc=r("Finally, this model supports inherent JAX features such as:"),fc=i(),co=n("ul"),gs=n("li"),Tn=n("a"),_c=r("Just-In-Time (JIT) compilation"),gc=i(),bs=n("li"),wn=n("a"),bc=r("Automatic Differentiation"),kc=i(),ks=n("li"),Sn=n("a"),yc=r("Vectorization"),vc=i(),ys=n("li"),$n=n("a"),Tc=r("Parallelization"),wc=i(),it=n("div"),y(xn.$$.fragment),Sc=i(),y(ct.$$.fragment),$c=i(),pt=n("div"),y(Bn.$$.fragment),xc=i(),y(mt.$$.fragment),Bc=i(),ut=n("div"),y(zn.$$.fragment),zc=i(),y(ht.$$.fragment),Ar=i(),Io=n("h2"),ft=n("a"),vs=n("span"),y(Fn.$$.fragment),Fc=i(),Ts=n("span"),qc=r("FlaxBlenderbotForConditionalGeneration"),Dr=i(),W=n("div"),y(qn.$$.fragment),Ec=i(),En=n("p"),Mc=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),da=n("a"),Cc=r("FlaxPreTrainedModel"),jc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oc=i(),Mn=n("p"),Pc=r(`This model is also a Flax Linen
`),Cn=n("a"),Lc=r("flax.nn.Module"),Nc=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ic=i(),ws=n("p"),Ac=r("Finally, this model supports inherent JAX features such as:"),Dc=i(),po=n("ul"),Ss=n("li"),jn=n("a"),Gc=r("Just-In-Time (JIT) compilation"),Uc=i(),$s=n("li"),On=n("a"),Wc=r("Automatic Differentiation"),Rc=i(),xs=n("li"),Pn=n("a"),Kc=r("Vectorization"),Hc=i(),Bs=n("li"),Ln=n("a"),Qc=r("Parallelization"),Vc=i(),M=n("div"),y(Nn.$$.fragment),Jc=i(),Ao=n("p"),Xc=r("The "),zs=n("code"),Yc=r("FlaxBlenderbotSmallPreTrainedModel"),Zc=r(" forward method, overrides the "),Fs=n("code"),ep=r("__call__"),op=r(" special method."),tp=i(),y(_t.$$.fragment),np=i(),qs=n("p"),ap=r("Summarization example:"),sp=i(),Es=n("blockquote"),Ms=n("blockquote"),Cs=n("blockquote"),js=n("p"),rp=r("from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),lp=i(),Os=n("blockquote"),Ps=n("blockquote"),Ls=n("blockquote"),Ns=n("p"),dp=r(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),ip=i(),Is=n("blockquote"),As=n("blockquote"),Ds=n("blockquote"),Gs=n("p"),cp=r(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),pp=i(),Us=n("blockquote"),Ws=n("blockquote"),In=n("blockquote"),gt=n("h1"),bt=n("a"),Rs=n("span"),y(An.$$.fragment),mp=i(),Ks=n("span"),up=r("Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),hp=i(),Hs=n("p"),fp=r("print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),_p=i(),Qs=n("p"),gp=r("Mask filling example:"),bp=i(),Vs=n("blockquote"),Js=n("blockquote"),Xs=n("blockquote"),Ys=n("p"),kp=r(`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),yp=i(),Zs=n("blockquote"),er=n("blockquote"),or=n("blockquote"),tr=n("p"),vp=r(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Tp=i(),nr=n("blockquote"),ar=n("blockquote"),sr=n("blockquote"),rr=n("p"),wp=r(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),Sp=i(),lr=n("blockquote"),dr=n("blockquote"),ir=n("blockquote"),cr=n("p"),$p=r("tokenizer.decode(predictions).split()"),xp=i(),kt=n("div"),y(Dn.$$.fragment),Bp=i(),y(yt.$$.fragment),zp=i(),vt=n("div"),y(Gn.$$.fragment),Fp=i(),y(Tt.$$.fragment),this.h()},l(t){const g=vh('[data-svelte="svelte-1phssyn"]',document.head);p=a(g,"META",{name:!0,content:!0}),g.forEach(o),k=c(t),f=a(t,"H1",{class:!0});var Un=s(f);h=a(Un,"A",{id:!0,class:!0,href:!0});var pr=s(h);b=a(pr,"SPAN",{});var mr=s(b);v(d.$$.fragment,mr),mr.forEach(o),pr.forEach(o),u=c(Un),E=a(Un,"SPAN",{});var ur=s(E);Ue=l(ur,"Blenderbot Small"),ur.forEach(o),Un.forEach(o),Oe=c(t),C=a(t,"P",{});var we=s(C);We=l(we,"Note that "),ne=a(we,"A",{href:!0});var hr=s(ne);B=l(hr,"BlenderbotSmallModel"),hr.forEach(o),Re=l(we,` and
`),J=a(we,"A",{href:!0});var fr=s(J);Ke=l(fr,"BlenderbotSmallForConditionalGeneration"),fr.forEach(o),He=l(we,` are only used in combination with the checkpoint
`),K=a(we,"A",{href:!0,rel:!0});var _r=s(K);Qe=l(_r,"facebook/blenderbot-90M"),_r.forEach(o),Ve=l(we,`. Larger Blenderbot checkpoints should
instead be used with `),X=a(we,"A",{href:!0});var gr=s(X);Je=l(gr,"BlenderbotModel"),gr.forEach(o),Xe=l(we,` and
`),Y=a(we,"A",{href:!0});var br=s(Y);Ye=l(br,"BlenderbotForConditionalGeneration"),br.forEach(o),we.forEach(o),Pe=c(t),D=a(t,"H2",{class:!0});var Wn=s(D);ae=a(Wn,"A",{id:!0,class:!0,href:!0});var kr=s(ae);$e=a(kr,"SPAN",{});var yr=s($e);v(ee.$$.fragment,yr),yr.forEach(o),kr.forEach(o),L=c(Wn),N=a(Wn,"SPAN",{});var vr=s(N);Ze=l(vr,"Overview"),vr.forEach(o),Wn.forEach(o),se=c(t),re=a(t,"P",{});var Rn=s(re);eo=l(Rn,"The Blender chatbot model was proposed in "),H=a(Rn,"A",{href:!0,rel:!0});var Tr=s(H);oo=l(Tr,"Recipes for building an open-domain chatbot"),Tr.forEach(o),to=l(Rn,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Rn.forEach(o),I=c(t),be=a(t,"P",{});var wr=s(be);pe=l(wr,"The abstract of the paper is the following:"),wr.forEach(o),Le=c(t),ke=a(t,"P",{});var Ep=s(ke);oe=a(Ep,"EM",{});var Mp=s(oe);no=l(Mp,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Mp.forEach(o),Ep.forEach(o),Ne=c(t),R=a(t,"P",{});var Cp=s(R);ao=l(Cp,"Tips:"),Cp.forEach(o),le=c(t),ye=a(t,"UL",{});var jp=s(ye);me=a(jp,"LI",{});var Op=s(me);G=l(Op,`Blenderbot Small is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Op.forEach(o),jp.forEach(o),Ie=c(t),j=a(t,"P",{});var ia=s(j);so=l(ia,"This model was contributed by "),ue=a(ia,"A",{href:!0,rel:!0});var Pp=s(ue);x=l(Pp,"patrickvonplaten"),Pp.forEach(o),q=l(ia,`. The authors\u2019 code can be
found `),xe=a(ia,"A",{href:!0,rel:!0});var Lp=s(xe);Be=l(Lp,"here"),Lp.forEach(o),yo=l(ia," ."),ia.forEach(o),mo=c(t),F=a(t,"H2",{class:!0});var Ur=s(F);ve=a(Ur,"A",{id:!0,class:!0,href:!0});var Np=s(ve);ro=a(Np,"SPAN",{});var Ip=s(ro);v(ze.$$.fragment,Ip),Ip.forEach(o),Np.forEach(o),vo=c(Ur),lo=a(Ur,"SPAN",{});var Ap=s(lo);te=l(Ap,"BlenderbotSmallConfig"),Ap.forEach(o),Ur.forEach(o),de=c(t),Q=a(t,"DIV",{class:!0});var wt=s(Q);v(Fe.$$.fragment,wt),he=c(wt),fe=a(wt,"P",{});var ca=s(fe);To=l(ca,"This is the configuration class to store the configuration of a "),Te=a(ca,"A",{href:!0});var Dp=s(Te);wo=l(Dp,"BlenderbotSmallModel"),Dp.forEach(o),qe=l(ca,`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),Ee=a(ca,"A",{href:!0,rel:!0});var Gp=s(Ee);$l=l(Gp,"facebook/blenderbot_small-90M"),Gp.forEach(o),xl=l(ca," architecture."),ca.forEach(o),Bl=c(wt),So=a(wt,"P",{});var pa=s(So);zl=l(pa,"Configuration objects inherit from "),Hn=a(pa,"A",{href:!0});var Up=s(Hn);Fl=l(Up,"PretrainedConfig"),Up.forEach(o),ql=l(pa,` and can be used to control the model outputs. Read the
documentation from `),Qn=a(pa,"A",{href:!0});var Wp=s(Qn);El=l(Wp,"PretrainedConfig"),Wp.forEach(o),Ml=l(pa," for more information."),pa.forEach(o),Cl=c(wt),v(Do.$$.fragment,wt),wt.forEach(o),Sr=c(t),$o=a(t,"H2",{class:!0});var Wr=s($o);Go=a(Wr,"A",{id:!0,class:!0,href:!0});var Rp=s(Go);va=a(Rp,"SPAN",{});var Kp=s(va);v(Et.$$.fragment,Kp),Kp.forEach(o),Rp.forEach(o),jl=c(Wr),Ta=a(Wr,"SPAN",{});var Hp=s(Ta);Ol=l(Hp,"BlenderbotSmallTokenizer"),Hp.forEach(o),Wr.forEach(o),$r=c(t),V=a(t,"DIV",{class:!0});var Se=s(V);v(Mt.$$.fragment,Se),Pl=c(Se),wa=a(Se,"P",{});var Qp=s(wa);Ll=l(Qp,"Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),Qp.forEach(o),Nl=c(Se),Ct=a(Se,"P",{});var Rr=s(Ct);Il=l(Rr,"This tokenizer inherits from "),Vn=a(Rr,"A",{href:!0});var Vp=s(Vn);Al=l(Vp,"PreTrainedTokenizer"),Vp.forEach(o),Dl=l(Rr,` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Rr.forEach(o),Gl=c(Se),uo=a(Se,"DIV",{class:!0});var ma=s(uo);v(jt.$$.fragment,ma),Ul=c(ma),Sa=a(ma,"P",{});var Jp=s(Sa);Wl=l(Jp,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Jp.forEach(o),Rl=c(ma),$a=a(ma,"P",{});var Xp=s($a);Kl=l(Xp,"This implementation does not add special tokens and this method should be overridden in a subclass."),Xp.forEach(o),ma.forEach(o),Hl=c(Se),Uo=a(Se,"DIV",{class:!0});var Kr=s(Uo);v(Ot.$$.fragment,Kr),Ql=c(Kr),xo=a(Kr,"P",{});var ua=s(xo);Vl=l(ua,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xa=a(ua,"CODE",{});var Yp=s(xa);Jl=l(Yp,"prepare_for_model"),Yp.forEach(o),Xl=l(ua," or "),Ba=a(ua,"CODE",{});var Zp=s(Ba);Yl=l(Zp,"encode_plus"),Zp.forEach(o),Zl=l(ua," methods."),ua.forEach(o),Kr.forEach(o),ed=c(Se),ho=a(Se,"DIV",{class:!0});var ha=s(ho);v(Pt.$$.fragment,ha),od=c(ha),Jn=a(ha,"P",{});var qp=s(Jn);td=l(qp,"Create the token type IDs corresponding to the sequences passed. "),Xn=a(qp,"A",{href:!0});var em=s(Xn);nd=l(em,`What are token type
IDs?`),em.forEach(o),qp.forEach(o),ad=c(ha),za=a(ha,"P",{});var om=s(za);sd=l(om,"Should be overridden in a subclass if the model has a special way of building those."),om.forEach(o),ha.forEach(o),rd=c(Se),Yn=a(Se,"DIV",{class:!0});var tm=s(Yn);v(Lt.$$.fragment,tm),tm.forEach(o),Se.forEach(o),xr=c(t),Bo=a(t,"H2",{class:!0});var Hr=s(Bo);Wo=a(Hr,"A",{id:!0,class:!0,href:!0});var nm=s(Wo);Fa=a(nm,"SPAN",{});var am=s(Fa);v(Nt.$$.fragment,am),am.forEach(o),nm.forEach(o),ld=c(Hr),qa=a(Hr,"SPAN",{});var sm=s(qa);dd=l(sm,"BlenderbotSmallTokenizerFast"),sm.forEach(o),Hr.forEach(o),Br=c(t),io=a(t,"DIV",{class:!0});var fa=s(io);v(It.$$.fragment,fa),id=c(fa),At=a(fa,"P",{});var Qr=s(At);cd=l(Qr,"Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),Ea=a(Qr,"EM",{});var rm=s(Ea);pd=l(rm,"tokenizers"),rm.forEach(o),md=l(Qr," library)."),Qr.forEach(o),ud=c(fa),Ro=a(fa,"DIV",{class:!0});var Vr=s(Ro);v(Dt.$$.fragment,Vr),hd=c(Vr),Ma=a(Vr,"P",{});var lm=s(Ma);fd=l(lm,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),lm.forEach(o),Vr.forEach(o),fa.forEach(o),zr=c(t),zo=a(t,"H2",{class:!0});var Jr=s(zo);Ko=a(Jr,"A",{id:!0,class:!0,href:!0});var dm=s(Ko);Ca=a(dm,"SPAN",{});var im=s(Ca);v(Gt.$$.fragment,im),im.forEach(o),dm.forEach(o),_d=c(Jr),ja=a(Jr,"SPAN",{});var cm=s(ja);gd=l(cm,"BlenderbotSmallModel"),cm.forEach(o),Jr.forEach(o),Fr=c(t),Me=a(t,"DIV",{class:!0});var St=s(Me);v(Ut.$$.fragment,St),bd=c(St),Wt=a(St,"P",{});var Xr=s(Wt);kd=l(Xr,`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Zn=a(Xr,"A",{href:!0});var pm=s(Zn);yd=l(pm,"PreTrainedModel"),pm.forEach(o),vd=l(Xr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xr.forEach(o),Td=c(St),Rt=a(St,"P",{});var Yr=s(Rt);wd=l(Yr,"This model is also a PyTorch "),Kt=a(Yr,"A",{href:!0,rel:!0});var mm=s(Kt);Sd=l(mm,"torch.nn.Module"),mm.forEach(o),$d=l(Yr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yr.forEach(o),xd=c(St),Ae=a(St,"DIV",{class:!0});var $t=s(Ae);v(Ht.$$.fragment,$t),Bd=c($t),Fo=a($t,"P",{});var _a=s(Fo);zd=l(_a,"The "),ea=a(_a,"A",{href:!0});var um=s(ea);Fd=l(um,"BlenderbotSmallModel"),um.forEach(o),qd=l(_a," forward method, overrides the "),Oa=a(_a,"CODE",{});var hm=s(Oa);Ed=l(hm,"__call__"),hm.forEach(o),Md=l(_a," special method."),_a.forEach(o),Cd=c($t),v(Ho.$$.fragment,$t),jd=c($t),v(Qo.$$.fragment,$t),$t.forEach(o),St.forEach(o),qr=c(t),qo=a(t,"H2",{class:!0});var Zr=s(qo);Vo=a(Zr,"A",{id:!0,class:!0,href:!0});var fm=s(Vo);Pa=a(fm,"SPAN",{});var _m=s(Pa);v(Qt.$$.fragment,_m),_m.forEach(o),fm.forEach(o),Od=c(Zr),La=a(Zr,"SPAN",{});var gm=s(La);Pd=l(gm,"BlenderbotSmallForConditionalGeneration"),gm.forEach(o),Zr.forEach(o),Er=c(t),Ce=a(t,"DIV",{class:!0});var xt=s(Ce);v(Vt.$$.fragment,xt),Ld=c(xt),Jt=a(xt,"P",{});var el=s(Jt);Nd=l(el,`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),oa=a(el,"A",{href:!0});var bm=s(oa);Id=l(bm,"PreTrainedModel"),bm.forEach(o),Ad=l(el,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),el.forEach(o),Dd=c(xt),Xt=a(xt,"P",{});var ol=s(Xt);Gd=l(ol,"This model is also a PyTorch "),Yt=a(ol,"A",{href:!0,rel:!0});var km=s(Yt);Ud=l(km,"torch.nn.Module"),km.forEach(o),Wd=l(ol,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ol.forEach(o),Rd=c(xt),De=a(xt,"DIV",{class:!0});var Bt=s(De);v(Zt.$$.fragment,Bt),Kd=c(Bt),Eo=a(Bt,"P",{});var ga=s(Eo);Hd=l(ga,"The "),ta=a(ga,"A",{href:!0});var ym=s(ta);Qd=l(ym,"BlenderbotSmallForConditionalGeneration"),ym.forEach(o),Vd=l(ga," forward method, overrides the "),Na=a(ga,"CODE",{});var vm=s(Na);Jd=l(vm,"__call__"),vm.forEach(o),Xd=l(ga," special method."),ga.forEach(o),Yd=c(Bt),v(Jo.$$.fragment,Bt),Zd=c(Bt),v(Xo.$$.fragment,Bt),Bt.forEach(o),xt.forEach(o),Mr=c(t),Mo=a(t,"H2",{class:!0});var tl=s(Mo);Yo=a(tl,"A",{id:!0,class:!0,href:!0});var Tm=s(Yo);Ia=a(Tm,"SPAN",{});var wm=s(Ia);v(en.$$.fragment,wm),wm.forEach(o),Tm.forEach(o),ei=c(tl),Aa=a(tl,"SPAN",{});var Sm=s(Aa);oi=l(Sm,"BlenderbotSmallForCausalLM"),Sm.forEach(o),tl.forEach(o),Cr=c(t),Co=a(t,"DIV",{class:!0});var nl=s(Co);v(on.$$.fragment,nl),ti=c(nl),Zo=a(nl,"DIV",{class:!0});var al=s(Zo);v(tn.$$.fragment,al),ni=c(al),v(et.$$.fragment,al),al.forEach(o),nl.forEach(o),jr=c(t),jo=a(t,"H2",{class:!0});var sl=s(jo);ot=a(sl,"A",{id:!0,class:!0,href:!0});var $m=s(ot);Da=a($m,"SPAN",{});var xm=s(Da);v(nn.$$.fragment,xm),xm.forEach(o),$m.forEach(o),ai=c(sl),Ga=a(sl,"SPAN",{});var Bm=s(Ga);si=l(Bm,"TFBlenderbotSmallModel"),Bm.forEach(o),sl.forEach(o),Or=c(t),_e=a(t,"DIV",{class:!0});var fo=s(_e);v(an.$$.fragment,fo),ri=c(fo),sn=a(fo,"P",{});var rl=s(sn);li=l(rl,`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),na=a(rl,"A",{href:!0});var zm=s(na);di=l(zm,"TFPreTrainedModel"),zm.forEach(o),ii=l(rl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rl.forEach(o),ci=c(fo),rn=a(fo,"P",{});var ll=s(rn);pi=l(ll,"This model is also a "),ln=a(ll,"A",{href:!0,rel:!0});var Fm=s(ln);mi=l(Fm,"tf.keras.Model"),Fm.forEach(o),ui=l(ll,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ll.forEach(o),hi=c(fo),v(tt.$$.fragment,fo),fi=c(fo),Ge=a(fo,"DIV",{class:!0});var zt=s(Ge);v(dn.$$.fragment,zt),_i=c(zt),Oo=a(zt,"P",{});var ba=s(Oo);gi=l(ba,"The "),aa=a(ba,"A",{href:!0});var qm=s(aa);bi=l(qm,"TFBlenderbotSmallModel"),qm.forEach(o),ki=l(ba," forward method, overrides the "),Ua=a(ba,"CODE",{});var Em=s(Ua);yi=l(Em,"__call__"),Em.forEach(o),vi=l(ba," special method."),ba.forEach(o),Ti=c(zt),v(nt.$$.fragment,zt),wi=c(zt),v(at.$$.fragment,zt),zt.forEach(o),fo.forEach(o),Pr=c(t),Po=a(t,"H2",{class:!0});var dl=s(Po);st=a(dl,"A",{id:!0,class:!0,href:!0});var Mm=s(st);Wa=a(Mm,"SPAN",{});var Cm=s(Wa);v(cn.$$.fragment,Cm),Cm.forEach(o),Mm.forEach(o),Si=c(dl),Ra=a(dl,"SPAN",{});var jm=s(Ra);$i=l(jm,"TFBlenderbotSmallForConditionalGeneration"),jm.forEach(o),dl.forEach(o),Lr=c(t),ge=a(t,"DIV",{class:!0});var _o=s(ge);v(pn.$$.fragment,_o),xi=c(_o),mn=a(_o,"P",{});var il=s(mn);Bi=l(il,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),sa=a(il,"A",{href:!0});var Om=s(sa);zi=l(Om,"TFPreTrainedModel"),Om.forEach(o),Fi=l(il,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),il.forEach(o),qi=c(_o),un=a(_o,"P",{});var cl=s(un);Ei=l(cl,"This model is also a "),hn=a(cl,"A",{href:!0,rel:!0});var Pm=s(hn);Mi=l(Pm,"tf.keras.Model"),Pm.forEach(o),Ci=l(cl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cl.forEach(o),ji=c(_o),v(rt.$$.fragment,_o),Oi=c(_o),A=a(_o,"DIV",{class:!0});var Z=s(A);v(fn.$$.fragment,Z),Pi=c(Z),Lo=a(Z,"P",{});var ka=s(Lo);Li=l(ka,"The "),ra=a(ka,"A",{href:!0});var Lm=s(ra);Ni=l(Lm,"TFBlenderbotSmallForConditionalGeneration"),Lm.forEach(o),Ii=l(ka," forward method, overrides the "),Ka=a(ka,"CODE",{});var Nm=s(Ka);Ai=l(Nm,"__call__"),Nm.forEach(o),Di=l(ka," special method."),ka.forEach(o),Gi=c(Z),v(lt.$$.fragment,Z),Ui=c(Z),Ha=a(Z,"P",{});var Im=s(Ha);Wi=l(Im,"Conversation example::"),Im.forEach(o),Ri=c(Z),Qa=a(Z,"BLOCKQUOTE",{});var Am=s(Qa);Va=a(Am,"BLOCKQUOTE",{});var Dm=s(Va);Ja=a(Dm,"BLOCKQUOTE",{});var Gm=s(Ja);Xa=a(Gm,"P",{});var Um=s(Xa);Ki=l(Um,`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Um.forEach(o),Gm.forEach(o),Dm.forEach(o),Am.forEach(o),Hi=c(Z),Ya=a(Z,"BLOCKQUOTE",{});var Wm=s(Ya);Za=a(Wm,"BLOCKQUOTE",{});var Rm=s(Za);es=a(Rm,"BLOCKQUOTE",{});var Km=s(es);os=a(Km,"P",{});var Hm=s(os);Qi=l(Hm,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Hm.forEach(o),Km.forEach(o),Rm.forEach(o),Wm.forEach(o),Vi=c(Z),ts=a(Z,"BLOCKQUOTE",{});var Qm=s(ts);ns=a(Qm,"BLOCKQUOTE",{});var Vm=s(ns);as=a(Vm,"BLOCKQUOTE",{});var Jm=s(as);ss=a(Jm,"P",{});var Xm=s(ss);Ji=l(Xm,`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),Xm.forEach(o),Jm.forEach(o),Vm.forEach(o),Qm.forEach(o),Xi=c(Z),rs=a(Z,"BLOCKQUOTE",{});var Ym=s(rs);ls=a(Ym,"BLOCKQUOTE",{});var Zm=s(ls);ds=a(Zm,"BLOCKQUOTE",{});var eu=s(ds);_n=a(eu,"P",{});var pl=s(_n);Yi=l(pl,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),is=a(pl,"S",{});var ou=s(is);Zi=l(ou,"what kind of carbs do they eat? i don\u2019t know much about carbs."),ou.forEach(o),ec=l(pl,` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),pl.forEach(o),eu.forEach(o),Zm.forEach(o),Ym.forEach(o),oc=c(Z),cs=a(Z,"BLOCKQUOTE",{});var tu=s(cs);ps=a(tu,"BLOCKQUOTE",{});var nu=s(ps);ms=a(nu,"BLOCKQUOTE",{});var au=s(ms);us=a(au,"P",{});var su=s(us);tc=l(su,`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),su.forEach(o),au.forEach(o),nu.forEach(o),tu.forEach(o),Z.forEach(o),_o.forEach(o),Nr=c(t),No=a(t,"H2",{class:!0});var ml=s(No);dt=a(ml,"A",{id:!0,class:!0,href:!0});var ru=s(dt);hs=a(ru,"SPAN",{});var lu=s(hs);v(gn.$$.fragment,lu),lu.forEach(o),ru.forEach(o),nc=c(ml),fs=a(ml,"SPAN",{});var du=s(fs);ac=l(du,"FlaxBlenderbotSmallModel"),du.forEach(o),ml.forEach(o),Ir=c(t),U=a(t,"DIV",{class:!0});var ie=s(U);v(bn.$$.fragment,ie),sc=c(ie),kn=a(ie,"P",{});var ul=s(kn);rc=l(ul,`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),la=a(ul,"A",{href:!0});var iu=s(la);lc=l(iu,"FlaxPreTrainedModel"),iu.forEach(o),dc=l(ul,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ul.forEach(o),ic=c(ie),yn=a(ie,"P",{});var hl=s(yn);cc=l(hl,`This model is also a Flax Linen
`),vn=a(hl,"A",{href:!0,rel:!0});var cu=s(vn);pc=l(cu,"flax.nn.Module"),cu.forEach(o),mc=l(hl,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),hl.forEach(o),uc=c(ie),_s=a(ie,"P",{});var pu=s(_s);hc=l(pu,"Finally, this model supports inherent JAX features such as:"),pu.forEach(o),fc=c(ie),co=a(ie,"UL",{});var Ft=s(co);gs=a(Ft,"LI",{});var mu=s(gs);Tn=a(mu,"A",{href:!0,rel:!0});var uu=s(Tn);_c=l(uu,"Just-In-Time (JIT) compilation"),uu.forEach(o),mu.forEach(o),gc=c(Ft),bs=a(Ft,"LI",{});var hu=s(bs);wn=a(hu,"A",{href:!0,rel:!0});var fu=s(wn);bc=l(fu,"Automatic Differentiation"),fu.forEach(o),hu.forEach(o),kc=c(Ft),ks=a(Ft,"LI",{});var _u=s(ks);Sn=a(_u,"A",{href:!0,rel:!0});var gu=s(Sn);yc=l(gu,"Vectorization"),gu.forEach(o),_u.forEach(o),vc=c(Ft),ys=a(Ft,"LI",{});var bu=s(ys);$n=a(bu,"A",{href:!0,rel:!0});var ku=s($n);Tc=l(ku,"Parallelization"),ku.forEach(o),bu.forEach(o),Ft.forEach(o),wc=c(ie),it=a(ie,"DIV",{class:!0});var fl=s(it);v(xn.$$.fragment,fl),Sc=c(fl),v(ct.$$.fragment,fl),fl.forEach(o),$c=c(ie),pt=a(ie,"DIV",{class:!0});var _l=s(pt);v(Bn.$$.fragment,_l),xc=c(_l),v(mt.$$.fragment,_l),_l.forEach(o),Bc=c(ie),ut=a(ie,"DIV",{class:!0});var gl=s(ut);v(zn.$$.fragment,gl),zc=c(gl),v(ht.$$.fragment,gl),gl.forEach(o),ie.forEach(o),Ar=c(t),Io=a(t,"H2",{class:!0});var bl=s(Io);ft=a(bl,"A",{id:!0,class:!0,href:!0});var yu=s(ft);vs=a(yu,"SPAN",{});var vu=s(vs);v(Fn.$$.fragment,vu),vu.forEach(o),yu.forEach(o),Fc=c(bl),Ts=a(bl,"SPAN",{});var Tu=s(Ts);qc=l(Tu,"FlaxBlenderbotForConditionalGeneration"),Tu.forEach(o),bl.forEach(o),Dr=c(t),W=a(t,"DIV",{class:!0});var ce=s(W);v(qn.$$.fragment,ce),Ec=c(ce),En=a(ce,"P",{});var kl=s(En);Mc=l(kl,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),da=a(kl,"A",{href:!0});var wu=s(da);Cc=l(wu,"FlaxPreTrainedModel"),wu.forEach(o),jc=l(kl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kl.forEach(o),Oc=c(ce),Mn=a(ce,"P",{});var yl=s(Mn);Pc=l(yl,`This model is also a Flax Linen
`),Cn=a(yl,"A",{href:!0,rel:!0});var Su=s(Cn);Lc=l(Su,"flax.nn.Module"),Su.forEach(o),Nc=l(yl,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),yl.forEach(o),Ic=c(ce),ws=a(ce,"P",{});var $u=s(ws);Ac=l($u,"Finally, this model supports inherent JAX features such as:"),$u.forEach(o),Dc=c(ce),po=a(ce,"UL",{});var qt=s(po);Ss=a(qt,"LI",{});var xu=s(Ss);jn=a(xu,"A",{href:!0,rel:!0});var Bu=s(jn);Gc=l(Bu,"Just-In-Time (JIT) compilation"),Bu.forEach(o),xu.forEach(o),Uc=c(qt),$s=a(qt,"LI",{});var zu=s($s);On=a(zu,"A",{href:!0,rel:!0});var Fu=s(On);Wc=l(Fu,"Automatic Differentiation"),Fu.forEach(o),zu.forEach(o),Rc=c(qt),xs=a(qt,"LI",{});var qu=s(xs);Pn=a(qu,"A",{href:!0,rel:!0});var Eu=s(Pn);Kc=l(Eu,"Vectorization"),Eu.forEach(o),qu.forEach(o),Hc=c(qt),Bs=a(qt,"LI",{});var Mu=s(Bs);Ln=a(Mu,"A",{href:!0,rel:!0});var Cu=s(Ln);Qc=l(Cu,"Parallelization"),Cu.forEach(o),Mu.forEach(o),qt.forEach(o),Vc=c(ce),M=a(ce,"DIV",{class:!0});var O=s(M);v(Nn.$$.fragment,O),Jc=c(O),Ao=a(O,"P",{});var ya=s(Ao);Xc=l(ya,"The "),zs=a(ya,"CODE",{});var ju=s(zs);Yc=l(ju,"FlaxBlenderbotSmallPreTrainedModel"),ju.forEach(o),Zc=l(ya," forward method, overrides the "),Fs=a(ya,"CODE",{});var Ou=s(Fs);ep=l(Ou,"__call__"),Ou.forEach(o),op=l(ya," special method."),ya.forEach(o),tp=c(O),v(_t.$$.fragment,O),np=c(O),qs=a(O,"P",{});var Pu=s(qs);ap=l(Pu,"Summarization example:"),Pu.forEach(o),sp=c(O),Es=a(O,"BLOCKQUOTE",{});var Lu=s(Es);Ms=a(Lu,"BLOCKQUOTE",{});var Nu=s(Ms);Cs=a(Nu,"BLOCKQUOTE",{});var Iu=s(Cs);js=a(Iu,"P",{});var Au=s(js);rp=l(Au,"from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),Au.forEach(o),Iu.forEach(o),Nu.forEach(o),Lu.forEach(o),lp=c(O),Os=a(O,"BLOCKQUOTE",{});var Du=s(Os);Ps=a(Du,"BLOCKQUOTE",{});var Gu=s(Ps);Ls=a(Gu,"BLOCKQUOTE",{});var Uu=s(Ls);Ns=a(Uu,"P",{});var Wu=s(Ns);dp=l(Wu,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),Wu.forEach(o),Uu.forEach(o),Gu.forEach(o),Du.forEach(o),ip=c(O),Is=a(O,"BLOCKQUOTE",{});var Ru=s(Is);As=a(Ru,"BLOCKQUOTE",{});var Ku=s(As);Ds=a(Ku,"BLOCKQUOTE",{});var Hu=s(Ds);Gs=a(Hu,"P",{});var Qu=s(Gs);cp=l(Qu,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Qu.forEach(o),Hu.forEach(o),Ku.forEach(o),Ru.forEach(o),pp=c(O),Us=a(O,"BLOCKQUOTE",{});var Vu=s(Us);Ws=a(Vu,"BLOCKQUOTE",{});var Ju=s(Ws);In=a(Ju,"BLOCKQUOTE",{});var vl=s(In);gt=a(vl,"H1",{class:!0});var Tl=s(gt);bt=a(Tl,"A",{id:!0,class:!0,href:!0});var Xu=s(bt);Rs=a(Xu,"SPAN",{});var Yu=s(Rs);v(An.$$.fragment,Yu),Yu.forEach(o),Xu.forEach(o),mp=c(Tl),Ks=a(Tl,"SPAN",{});var Zu=s(Ks);up=l(Zu,"Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),Zu.forEach(o),Tl.forEach(o),hp=c(vl),Hs=a(vl,"P",{});var eh=s(Hs);fp=l(eh,"print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),eh.forEach(o),vl.forEach(o),Ju.forEach(o),Vu.forEach(o),_p=c(O),Qs=a(O,"P",{});var oh=s(Qs);gp=l(oh,"Mask filling example:"),oh.forEach(o),bp=c(O),Vs=a(O,"BLOCKQUOTE",{});var th=s(Vs);Js=a(th,"BLOCKQUOTE",{});var nh=s(Js);Xs=a(nh,"BLOCKQUOTE",{});var ah=s(Xs);Ys=a(ah,"P",{});var sh=s(Ys);kp=l(sh,`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),sh.forEach(o),ah.forEach(o),nh.forEach(o),th.forEach(o),yp=c(O),Zs=a(O,"BLOCKQUOTE",{});var rh=s(Zs);er=a(rh,"BLOCKQUOTE",{});var lh=s(er);or=a(lh,"BLOCKQUOTE",{});var dh=s(or);tr=a(dh,"P",{});var ih=s(tr);vp=l(ih,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),ih.forEach(o),dh.forEach(o),lh.forEach(o),rh.forEach(o),Tp=c(O),nr=a(O,"BLOCKQUOTE",{});var ch=s(nr);ar=a(ch,"BLOCKQUOTE",{});var ph=s(ar);sr=a(ph,"BLOCKQUOTE",{});var mh=s(sr);rr=a(mh,"P",{});var uh=s(rr);wp=l(uh,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),uh.forEach(o),mh.forEach(o),ph.forEach(o),ch.forEach(o),Sp=c(O),lr=a(O,"BLOCKQUOTE",{});var hh=s(lr);dr=a(hh,"BLOCKQUOTE",{});var fh=s(dr);ir=a(fh,"BLOCKQUOTE",{});var _h=s(ir);cr=a(_h,"P",{});var gh=s(cr);$p=l(gh,"tokenizer.decode(predictions).split()"),gh.forEach(o),_h.forEach(o),fh.forEach(o),hh.forEach(o),O.forEach(o),xp=c(ce),kt=a(ce,"DIV",{class:!0});var wl=s(kt);v(Dn.$$.fragment,wl),Bp=c(wl),v(yt.$$.fragment,wl),wl.forEach(o),zp=c(ce),vt=a(ce,"DIV",{class:!0});var Sl=s(vt);v(Gn.$$.fragment,Sl),Fp=c(Sl),v(Tt.$$.fragment,Sl),Sl.forEach(o),ce.forEach(o),this.h()},h(){m(p,"name","hf:doc:metadata"),m(p,"content",JSON.stringify(Dh)),m(h,"id","blenderbot-small"),m(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(h,"href","#blenderbot-small"),m(f,"class","relative group"),m(ne,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),m(J,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),m(K,"href","https://huggingface.co/facebook/blenderbot-90M"),m(K,"rel","nofollow"),m(X,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotModel"),m(Y,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),m(ae,"id","overview"),m(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ae,"href","#overview"),m(D,"class","relative group"),m(H,"href","https://arxiv.org/pdf/2004.13637.pdf"),m(H,"rel","nofollow"),m(ue,"href","https://huggingface.co/patrickvonplaten"),m(ue,"rel","nofollow"),m(xe,"href","https://github.com/facebookresearch/ParlAI"),m(xe,"rel","nofollow"),m(ve,"id","transformers.BlenderbotSmallConfig"),m(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ve,"href","#transformers.BlenderbotSmallConfig"),m(F,"class","relative group"),m(Te,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),m(Ee,"href","https://huggingface.co/facebook/blenderbot_small-90M"),m(Ee,"rel","nofollow"),m(Hn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Qn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Go,"id","transformers.BlenderbotSmallTokenizer"),m(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Go,"href","#transformers.BlenderbotSmallTokenizer"),m($o,"class","relative group"),m(Vn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xn,"href","../glossary#token-type-ids"),m(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Wo,"id","transformers.BlenderbotSmallTokenizerFast"),m(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Wo,"href","#transformers.BlenderbotSmallTokenizerFast"),m(Bo,"class","relative group"),m(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ko,"id","transformers.BlenderbotSmallModel"),m(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ko,"href","#transformers.BlenderbotSmallModel"),m(zo,"class","relative group"),m(Zn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Kt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Kt,"rel","nofollow"),m(ea,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),m(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Vo,"id","transformers.BlenderbotSmallForConditionalGeneration"),m(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Vo,"href","#transformers.BlenderbotSmallForConditionalGeneration"),m(qo,"class","relative group"),m(oa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Yt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Yt,"rel","nofollow"),m(ta,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),m(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Yo,"id","transformers.BlenderbotSmallForCausalLM"),m(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Yo,"href","#transformers.BlenderbotSmallForCausalLM"),m(Mo,"class","relative group"),m(Zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ot,"id","transformers.TFBlenderbotSmallModel"),m(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ot,"href","#transformers.TFBlenderbotSmallModel"),m(jo,"class","relative group"),m(na,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(ln,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ln,"rel","nofollow"),m(aa,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel"),m(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(st,"id","transformers.TFBlenderbotSmallForConditionalGeneration"),m(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(st,"href","#transformers.TFBlenderbotSmallForConditionalGeneration"),m(Po,"class","relative group"),m(sa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(hn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(hn,"rel","nofollow"),m(ra,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallForConditionalGeneration"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(dt,"id","transformers.FlaxBlenderbotSmallModel"),m(dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(dt,"href","#transformers.FlaxBlenderbotSmallModel"),m(No,"class","relative group"),m(la,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(vn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),m(vn,"rel","nofollow"),m(Tn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(Tn,"rel","nofollow"),m(wn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(wn,"rel","nofollow"),m(Sn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(Sn,"rel","nofollow"),m($n,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m($n,"rel","nofollow"),m(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ft,"id","transformers.FlaxBlenderbotSmallForConditionalGeneration"),m(ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ft,"href","#transformers.FlaxBlenderbotSmallForConditionalGeneration"),m(Io,"class","relative group"),m(da,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(Cn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),m(Cn,"rel","nofollow"),m(jn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(jn,"rel","nofollow"),m(On,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(On,"rel","nofollow"),m(Pn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(Pn,"rel","nofollow"),m(Ln,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(Ln,"rel","nofollow"),m(bt,"id","generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),m(bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(bt,"href","#generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),m(gt,"class","relative group"),m(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,p),_(t,k,g),_(t,f,g),e(f,h),e(h,b),T(d,b,null),e(f,u),e(f,E),e(E,Ue),_(t,Oe,g),_(t,C,g),e(C,We),e(C,ne),e(ne,B),e(C,Re),e(C,J),e(J,Ke),e(C,He),e(C,K),e(K,Qe),e(C,Ve),e(C,X),e(X,Je),e(C,Xe),e(C,Y),e(Y,Ye),_(t,Pe,g),_(t,D,g),e(D,ae),e(ae,$e),T(ee,$e,null),e(D,L),e(D,N),e(N,Ze),_(t,se,g),_(t,re,g),e(re,eo),e(re,H),e(H,oo),e(re,to),_(t,I,g),_(t,be,g),e(be,pe),_(t,Le,g),_(t,ke,g),e(ke,oe),e(oe,no),_(t,Ne,g),_(t,R,g),e(R,ao),_(t,le,g),_(t,ye,g),e(ye,me),e(me,G),_(t,Ie,g),_(t,j,g),e(j,so),e(j,ue),e(ue,x),e(j,q),e(j,xe),e(xe,Be),e(j,yo),_(t,mo,g),_(t,F,g),e(F,ve),e(ve,ro),T(ze,ro,null),e(F,vo),e(F,lo),e(lo,te),_(t,de,g),_(t,Q,g),T(Fe,Q,null),e(Q,he),e(Q,fe),e(fe,To),e(fe,Te),e(Te,wo),e(fe,qe),e(fe,Ee),e(Ee,$l),e(fe,xl),e(Q,Bl),e(Q,So),e(So,zl),e(So,Hn),e(Hn,Fl),e(So,ql),e(So,Qn),e(Qn,El),e(So,Ml),e(Q,Cl),T(Do,Q,null),_(t,Sr,g),_(t,$o,g),e($o,Go),e(Go,va),T(Et,va,null),e($o,jl),e($o,Ta),e(Ta,Ol),_(t,$r,g),_(t,V,g),T(Mt,V,null),e(V,Pl),e(V,wa),e(wa,Ll),e(V,Nl),e(V,Ct),e(Ct,Il),e(Ct,Vn),e(Vn,Al),e(Ct,Dl),e(V,Gl),e(V,uo),T(jt,uo,null),e(uo,Ul),e(uo,Sa),e(Sa,Wl),e(uo,Rl),e(uo,$a),e($a,Kl),e(V,Hl),e(V,Uo),T(Ot,Uo,null),e(Uo,Ql),e(Uo,xo),e(xo,Vl),e(xo,xa),e(xa,Jl),e(xo,Xl),e(xo,Ba),e(Ba,Yl),e(xo,Zl),e(V,ed),e(V,ho),T(Pt,ho,null),e(ho,od),e(ho,Jn),e(Jn,td),e(Jn,Xn),e(Xn,nd),e(ho,ad),e(ho,za),e(za,sd),e(V,rd),e(V,Yn),T(Lt,Yn,null),_(t,xr,g),_(t,Bo,g),e(Bo,Wo),e(Wo,Fa),T(Nt,Fa,null),e(Bo,ld),e(Bo,qa),e(qa,dd),_(t,Br,g),_(t,io,g),T(It,io,null),e(io,id),e(io,At),e(At,cd),e(At,Ea),e(Ea,pd),e(At,md),e(io,ud),e(io,Ro),T(Dt,Ro,null),e(Ro,hd),e(Ro,Ma),e(Ma,fd),_(t,zr,g),_(t,zo,g),e(zo,Ko),e(Ko,Ca),T(Gt,Ca,null),e(zo,_d),e(zo,ja),e(ja,gd),_(t,Fr,g),_(t,Me,g),T(Ut,Me,null),e(Me,bd),e(Me,Wt),e(Wt,kd),e(Wt,Zn),e(Zn,yd),e(Wt,vd),e(Me,Td),e(Me,Rt),e(Rt,wd),e(Rt,Kt),e(Kt,Sd),e(Rt,$d),e(Me,xd),e(Me,Ae),T(Ht,Ae,null),e(Ae,Bd),e(Ae,Fo),e(Fo,zd),e(Fo,ea),e(ea,Fd),e(Fo,qd),e(Fo,Oa),e(Oa,Ed),e(Fo,Md),e(Ae,Cd),T(Ho,Ae,null),e(Ae,jd),T(Qo,Ae,null),_(t,qr,g),_(t,qo,g),e(qo,Vo),e(Vo,Pa),T(Qt,Pa,null),e(qo,Od),e(qo,La),e(La,Pd),_(t,Er,g),_(t,Ce,g),T(Vt,Ce,null),e(Ce,Ld),e(Ce,Jt),e(Jt,Nd),e(Jt,oa),e(oa,Id),e(Jt,Ad),e(Ce,Dd),e(Ce,Xt),e(Xt,Gd),e(Xt,Yt),e(Yt,Ud),e(Xt,Wd),e(Ce,Rd),e(Ce,De),T(Zt,De,null),e(De,Kd),e(De,Eo),e(Eo,Hd),e(Eo,ta),e(ta,Qd),e(Eo,Vd),e(Eo,Na),e(Na,Jd),e(Eo,Xd),e(De,Yd),T(Jo,De,null),e(De,Zd),T(Xo,De,null),_(t,Mr,g),_(t,Mo,g),e(Mo,Yo),e(Yo,Ia),T(en,Ia,null),e(Mo,ei),e(Mo,Aa),e(Aa,oi),_(t,Cr,g),_(t,Co,g),T(on,Co,null),e(Co,ti),e(Co,Zo),T(tn,Zo,null),e(Zo,ni),T(et,Zo,null),_(t,jr,g),_(t,jo,g),e(jo,ot),e(ot,Da),T(nn,Da,null),e(jo,ai),e(jo,Ga),e(Ga,si),_(t,Or,g),_(t,_e,g),T(an,_e,null),e(_e,ri),e(_e,sn),e(sn,li),e(sn,na),e(na,di),e(sn,ii),e(_e,ci),e(_e,rn),e(rn,pi),e(rn,ln),e(ln,mi),e(rn,ui),e(_e,hi),T(tt,_e,null),e(_e,fi),e(_e,Ge),T(dn,Ge,null),e(Ge,_i),e(Ge,Oo),e(Oo,gi),e(Oo,aa),e(aa,bi),e(Oo,ki),e(Oo,Ua),e(Ua,yi),e(Oo,vi),e(Ge,Ti),T(nt,Ge,null),e(Ge,wi),T(at,Ge,null),_(t,Pr,g),_(t,Po,g),e(Po,st),e(st,Wa),T(cn,Wa,null),e(Po,Si),e(Po,Ra),e(Ra,$i),_(t,Lr,g),_(t,ge,g),T(pn,ge,null),e(ge,xi),e(ge,mn),e(mn,Bi),e(mn,sa),e(sa,zi),e(mn,Fi),e(ge,qi),e(ge,un),e(un,Ei),e(un,hn),e(hn,Mi),e(un,Ci),e(ge,ji),T(rt,ge,null),e(ge,Oi),e(ge,A),T(fn,A,null),e(A,Pi),e(A,Lo),e(Lo,Li),e(Lo,ra),e(ra,Ni),e(Lo,Ii),e(Lo,Ka),e(Ka,Ai),e(Lo,Di),e(A,Gi),T(lt,A,null),e(A,Ui),e(A,Ha),e(Ha,Wi),e(A,Ri),e(A,Qa),e(Qa,Va),e(Va,Ja),e(Ja,Xa),e(Xa,Ki),e(A,Hi),e(A,Ya),e(Ya,Za),e(Za,es),e(es,os),e(os,Qi),e(A,Vi),e(A,ts),e(ts,ns),e(ns,as),e(as,ss),e(ss,Ji),e(A,Xi),e(A,rs),e(rs,ls),e(ls,ds),e(ds,_n),e(_n,Yi),e(_n,is),e(is,Zi),e(_n,ec),e(A,oc),e(A,cs),e(cs,ps),e(ps,ms),e(ms,us),e(us,tc),_(t,Nr,g),_(t,No,g),e(No,dt),e(dt,hs),T(gn,hs,null),e(No,nc),e(No,fs),e(fs,ac),_(t,Ir,g),_(t,U,g),T(bn,U,null),e(U,sc),e(U,kn),e(kn,rc),e(kn,la),e(la,lc),e(kn,dc),e(U,ic),e(U,yn),e(yn,cc),e(yn,vn),e(vn,pc),e(yn,mc),e(U,uc),e(U,_s),e(_s,hc),e(U,fc),e(U,co),e(co,gs),e(gs,Tn),e(Tn,_c),e(co,gc),e(co,bs),e(bs,wn),e(wn,bc),e(co,kc),e(co,ks),e(ks,Sn),e(Sn,yc),e(co,vc),e(co,ys),e(ys,$n),e($n,Tc),e(U,wc),e(U,it),T(xn,it,null),e(it,Sc),T(ct,it,null),e(U,$c),e(U,pt),T(Bn,pt,null),e(pt,xc),T(mt,pt,null),e(U,Bc),e(U,ut),T(zn,ut,null),e(ut,zc),T(ht,ut,null),_(t,Ar,g),_(t,Io,g),e(Io,ft),e(ft,vs),T(Fn,vs,null),e(Io,Fc),e(Io,Ts),e(Ts,qc),_(t,Dr,g),_(t,W,g),T(qn,W,null),e(W,Ec),e(W,En),e(En,Mc),e(En,da),e(da,Cc),e(En,jc),e(W,Oc),e(W,Mn),e(Mn,Pc),e(Mn,Cn),e(Cn,Lc),e(Mn,Nc),e(W,Ic),e(W,ws),e(ws,Ac),e(W,Dc),e(W,po),e(po,Ss),e(Ss,jn),e(jn,Gc),e(po,Uc),e(po,$s),e($s,On),e(On,Wc),e(po,Rc),e(po,xs),e(xs,Pn),e(Pn,Kc),e(po,Hc),e(po,Bs),e(Bs,Ln),e(Ln,Qc),e(W,Vc),e(W,M),T(Nn,M,null),e(M,Jc),e(M,Ao),e(Ao,Xc),e(Ao,zs),e(zs,Yc),e(Ao,Zc),e(Ao,Fs),e(Fs,ep),e(Ao,op),e(M,tp),T(_t,M,null),e(M,np),e(M,qs),e(qs,ap),e(M,sp),e(M,Es),e(Es,Ms),e(Ms,Cs),e(Cs,js),e(js,rp),e(M,lp),e(M,Os),e(Os,Ps),e(Ps,Ls),e(Ls,Ns),e(Ns,dp),e(M,ip),e(M,Is),e(Is,As),e(As,Ds),e(Ds,Gs),e(Gs,cp),e(M,pp),e(M,Us),e(Us,Ws),e(Ws,In),e(In,gt),e(gt,bt),e(bt,Rs),T(An,Rs,null),e(gt,mp),e(gt,Ks),e(Ks,up),e(In,hp),e(In,Hs),e(Hs,fp),e(M,_p),e(M,Qs),e(Qs,gp),e(M,bp),e(M,Vs),e(Vs,Js),e(Js,Xs),e(Xs,Ys),e(Ys,kp),e(M,yp),e(M,Zs),e(Zs,er),e(er,or),e(or,tr),e(tr,vp),e(M,Tp),e(M,nr),e(nr,ar),e(ar,sr),e(sr,rr),e(rr,wp),e(M,Sp),e(M,lr),e(lr,dr),e(dr,ir),e(ir,cr),e(cr,$p),e(W,xp),e(W,kt),T(Dn,kt,null),e(kt,Bp),T(yt,kt,null),e(W,zp),e(W,vt),T(Gn,vt,null),e(vt,Fp),T(Tt,vt,null),Gr=!0},p(t,[g]){const Un={};g&2&&(Un.$$scope={dirty:g,ctx:t}),Do.$set(Un);const pr={};g&2&&(pr.$$scope={dirty:g,ctx:t}),Ho.$set(pr);const mr={};g&2&&(mr.$$scope={dirty:g,ctx:t}),Qo.$set(mr);const ur={};g&2&&(ur.$$scope={dirty:g,ctx:t}),Jo.$set(ur);const we={};g&2&&(we.$$scope={dirty:g,ctx:t}),Xo.$set(we);const hr={};g&2&&(hr.$$scope={dirty:g,ctx:t}),et.$set(hr);const fr={};g&2&&(fr.$$scope={dirty:g,ctx:t}),tt.$set(fr);const _r={};g&2&&(_r.$$scope={dirty:g,ctx:t}),nt.$set(_r);const gr={};g&2&&(gr.$$scope={dirty:g,ctx:t}),at.$set(gr);const br={};g&2&&(br.$$scope={dirty:g,ctx:t}),rt.$set(br);const Wn={};g&2&&(Wn.$$scope={dirty:g,ctx:t}),lt.$set(Wn);const kr={};g&2&&(kr.$$scope={dirty:g,ctx:t}),ct.$set(kr);const yr={};g&2&&(yr.$$scope={dirty:g,ctx:t}),mt.$set(yr);const vr={};g&2&&(vr.$$scope={dirty:g,ctx:t}),ht.$set(vr);const Rn={};g&2&&(Rn.$$scope={dirty:g,ctx:t}),_t.$set(Rn);const Tr={};g&2&&(Tr.$$scope={dirty:g,ctx:t}),yt.$set(Tr);const wr={};g&2&&(wr.$$scope={dirty:g,ctx:t}),Tt.$set(wr)},i(t){Gr||(w(d.$$.fragment,t),w(ee.$$.fragment,t),w(ze.$$.fragment,t),w(Fe.$$.fragment,t),w(Do.$$.fragment,t),w(Et.$$.fragment,t),w(Mt.$$.fragment,t),w(jt.$$.fragment,t),w(Ot.$$.fragment,t),w(Pt.$$.fragment,t),w(Lt.$$.fragment,t),w(Nt.$$.fragment,t),w(It.$$.fragment,t),w(Dt.$$.fragment,t),w(Gt.$$.fragment,t),w(Ut.$$.fragment,t),w(Ht.$$.fragment,t),w(Ho.$$.fragment,t),w(Qo.$$.fragment,t),w(Qt.$$.fragment,t),w(Vt.$$.fragment,t),w(Zt.$$.fragment,t),w(Jo.$$.fragment,t),w(Xo.$$.fragment,t),w(en.$$.fragment,t),w(on.$$.fragment,t),w(tn.$$.fragment,t),w(et.$$.fragment,t),w(nn.$$.fragment,t),w(an.$$.fragment,t),w(tt.$$.fragment,t),w(dn.$$.fragment,t),w(nt.$$.fragment,t),w(at.$$.fragment,t),w(cn.$$.fragment,t),w(pn.$$.fragment,t),w(rt.$$.fragment,t),w(fn.$$.fragment,t),w(lt.$$.fragment,t),w(gn.$$.fragment,t),w(bn.$$.fragment,t),w(xn.$$.fragment,t),w(ct.$$.fragment,t),w(Bn.$$.fragment,t),w(mt.$$.fragment,t),w(zn.$$.fragment,t),w(ht.$$.fragment,t),w(Fn.$$.fragment,t),w(qn.$$.fragment,t),w(Nn.$$.fragment,t),w(_t.$$.fragment,t),w(An.$$.fragment,t),w(Dn.$$.fragment,t),w(yt.$$.fragment,t),w(Gn.$$.fragment,t),w(Tt.$$.fragment,t),Gr=!0)},o(t){S(d.$$.fragment,t),S(ee.$$.fragment,t),S(ze.$$.fragment,t),S(Fe.$$.fragment,t),S(Do.$$.fragment,t),S(Et.$$.fragment,t),S(Mt.$$.fragment,t),S(jt.$$.fragment,t),S(Ot.$$.fragment,t),S(Pt.$$.fragment,t),S(Lt.$$.fragment,t),S(Nt.$$.fragment,t),S(It.$$.fragment,t),S(Dt.$$.fragment,t),S(Gt.$$.fragment,t),S(Ut.$$.fragment,t),S(Ht.$$.fragment,t),S(Ho.$$.fragment,t),S(Qo.$$.fragment,t),S(Qt.$$.fragment,t),S(Vt.$$.fragment,t),S(Zt.$$.fragment,t),S(Jo.$$.fragment,t),S(Xo.$$.fragment,t),S(en.$$.fragment,t),S(on.$$.fragment,t),S(tn.$$.fragment,t),S(et.$$.fragment,t),S(nn.$$.fragment,t),S(an.$$.fragment,t),S(tt.$$.fragment,t),S(dn.$$.fragment,t),S(nt.$$.fragment,t),S(at.$$.fragment,t),S(cn.$$.fragment,t),S(pn.$$.fragment,t),S(rt.$$.fragment,t),S(fn.$$.fragment,t),S(lt.$$.fragment,t),S(gn.$$.fragment,t),S(bn.$$.fragment,t),S(xn.$$.fragment,t),S(ct.$$.fragment,t),S(Bn.$$.fragment,t),S(mt.$$.fragment,t),S(zn.$$.fragment,t),S(ht.$$.fragment,t),S(Fn.$$.fragment,t),S(qn.$$.fragment,t),S(Nn.$$.fragment,t),S(_t.$$.fragment,t),S(An.$$.fragment,t),S(Dn.$$.fragment,t),S(yt.$$.fragment,t),S(Gn.$$.fragment,t),S(Tt.$$.fragment,t),Gr=!1},d(t){o(p),t&&o(k),t&&o(f),$(d),t&&o(Oe),t&&o(C),t&&o(Pe),t&&o(D),$(ee),t&&o(se),t&&o(re),t&&o(I),t&&o(be),t&&o(Le),t&&o(ke),t&&o(Ne),t&&o(R),t&&o(le),t&&o(ye),t&&o(Ie),t&&o(j),t&&o(mo),t&&o(F),$(ze),t&&o(de),t&&o(Q),$(Fe),$(Do),t&&o(Sr),t&&o($o),$(Et),t&&o($r),t&&o(V),$(Mt),$(jt),$(Ot),$(Pt),$(Lt),t&&o(xr),t&&o(Bo),$(Nt),t&&o(Br),t&&o(io),$(It),$(Dt),t&&o(zr),t&&o(zo),$(Gt),t&&o(Fr),t&&o(Me),$(Ut),$(Ht),$(Ho),$(Qo),t&&o(qr),t&&o(qo),$(Qt),t&&o(Er),t&&o(Ce),$(Vt),$(Zt),$(Jo),$(Xo),t&&o(Mr),t&&o(Mo),$(en),t&&o(Cr),t&&o(Co),$(on),$(tn),$(et),t&&o(jr),t&&o(jo),$(nn),t&&o(Or),t&&o(_e),$(an),$(tt),$(dn),$(nt),$(at),t&&o(Pr),t&&o(Po),$(cn),t&&o(Lr),t&&o(ge),$(pn),$(rt),$(fn),$(lt),t&&o(Nr),t&&o(No),$(gn),t&&o(Ir),t&&o(U),$(bn),$(xn),$(ct),$(Bn),$(mt),$(zn),$(ht),t&&o(Ar),t&&o(Io),$(Fn),t&&o(Dr),t&&o(W),$(qn),$(Nn),$(_t),$(An),$(Dn),$(yt),$(Gn),$(Tt)}}}const Dh={local:"blenderbot-small",sections:[{local:"overview",title:"Overview"},{local:"transformers.BlenderbotSmallConfig",title:"BlenderbotSmallConfig"},{local:"transformers.BlenderbotSmallTokenizer",title:"BlenderbotSmallTokenizer"},{local:"transformers.BlenderbotSmallTokenizerFast",title:"BlenderbotSmallTokenizerFast"},{local:"transformers.BlenderbotSmallModel",title:"BlenderbotSmallModel"},{local:"transformers.BlenderbotSmallForConditionalGeneration",title:"BlenderbotSmallForConditionalGeneration"},{local:"transformers.BlenderbotSmallForCausalLM",title:"BlenderbotSmallForCausalLM"},{local:"transformers.TFBlenderbotSmallModel",title:"TFBlenderbotSmallModel"},{local:"transformers.TFBlenderbotSmallForConditionalGeneration",title:"TFBlenderbotSmallForConditionalGeneration"},{local:"transformers.FlaxBlenderbotSmallModel",title:"FlaxBlenderbotSmallModel"},{local:"transformers.FlaxBlenderbotSmallForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot Small"};function Gh(z){return Th(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Vh extends bh{constructor(p){super();kh(this,p,Gh,Ah,yh,{})}}export{Vh as default,Dh as metadata};
