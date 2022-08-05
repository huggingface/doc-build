import{S as dh,i as ih,s as ch,e as n,k as i,w as y,t as r,M as ph,c as a,d as o,m as c,a as s,x as v,h as l,b as m,G as e,g as _,y as T,q as w,o as S,B as $,v as mh,L as Xe}from"../../chunks/vendor-hf-doc-builder.js";import{T as qn}from"../../chunks/Tip-hf-doc-builder.js";import{D as C}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ye}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as xe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Je}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function uh(B){let p,k,f,u,b;return u=new Ye({props:{code:`from transformers import BlenderbotSmallModel, BlenderbotSmallConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(u.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(o),f=c(d),v(u.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(u,d,h),b=!0},p:Xe,i(d){b||(w(u.$$.fragment,d),b=!0)},o(d){S(u.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(u,d)}}}function hh(B){let p,k,f,u,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var F=s(f);u=l(F,"Module"),F.forEach(o),b=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(d,h){_(d,p,h),e(p,k),e(p,f),e(f,u),e(p,b)},d(d){d&&o(p)}}}function fh(B){let p,k,f,u,b;return u=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallModel

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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">512</span>]`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(u.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(o),f=c(d),v(u.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(u,d,h),b=!0},p:Xe,i(d){b||(w(u.$$.fragment,d),b=!0)},o(d){S(u.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(u,d)}}}function _h(B){let p,k,f,u,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var F=s(f);u=l(F,"Module"),F.forEach(o),b=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(d,h){_(d,p,h),e(p,k),e(p,f),e(f,u),e(p,b)},d(d){d&&o(p)}}}function gh(B){let p,k,f,u,b;return u=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration

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
Bot:  they eat a lot of carbs. carbs are high in fat, protein, and carbohydrates.</span>`}}),{c(){p=n("p"),k=r("Conversation example:"),f=i(),y(u.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Conversation example:"),h.forEach(o),f=c(d),v(u.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(u,d,h),b=!0},p:Xe,i(d){b||(w(u.$$.fragment,d),b=!0)},o(d){S(u.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(u,d)}}}function bh(B){let p,k,f,u,b;return u=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(u.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(o),f=c(d),v(u.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(u,d,h),b=!0},p:Xe,i(d){b||(w(u.$$.fragment,d),b=!0)},o(d){S(u.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(u,d)}}}function kh(B){let p,k,f,u,b,d,h,F,Ce,ue,z,je,W,Oe,Pe,R,Le,Ne,Q,V,Ie,Z,j,L,he,ae,ze,J,D,be,se,N,ke,re,Be,ee,le,de,Ae,X,Fe,H,De;return{c(){p=n("p"),k=r("TF 2.0 models accepts two formats as inputs:"),f=i(),u=n("ul"),b=n("li"),d=r("having all inputs as keyword arguments (like PyTorch models), or"),h=i(),F=n("li"),Ce=r("having all inputs as a list, tuple or dict in the first positional arguments."),ue=i(),z=n("p"),je=r("This second option is useful when using "),W=n("code"),Oe=r("tf.keras.Model.fit"),Pe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),Le=r("model(inputs)"),Ne=r("."),Q=i(),V=n("p"),Ie=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=i(),j=n("ul"),L=n("li"),he=r("a single Tensor with "),ae=n("code"),ze=r("input_ids"),J=r(" only and nothing else: "),D=n("code"),be=r("model(input_ids)"),se=i(),N=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=n("code"),Be=r("model([input_ids, attention_mask])"),ee=r(" or "),le=n("code"),de=r("model([input_ids, attention_mask, token_type_ids])"),Ae=i(),X=n("li"),Fe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(x){p=a(x,"P",{});var q=s(p);k=l(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(o),f=c(x),u=a(x,"UL",{});var ie=s(u);b=a(ie,"LI",{});var Ze=s(b);d=l(Ze,"having all inputs as keyword arguments (like PyTorch models), or"),Ze.forEach(o),h=c(ie),F=a(ie,"LI",{});var Re=s(F);Ce=l(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(o),ie.forEach(o),ue=c(x),z=a(x,"P",{});var O=s(z);je=l(O,"This second option is useful when using "),W=a(O,"CODE",{});var eo=s(W);Oe=l(eo,"tf.keras.Model.fit"),eo.forEach(o),Pe=l(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=a(O,"CODE",{});var ye=s(R);Le=l(ye,"model(inputs)"),ye.forEach(o),Ne=l(O,"."),O.forEach(o),Q=c(x),V=a(x,"P",{});var oo=s(V);Ie=l(oo,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oo.forEach(o),Z=c(x),j=a(x,"UL",{});var Y=s(j);L=a(Y,"LI",{});var G=s(L);he=l(G,"a single Tensor with "),ae=a(G,"CODE",{});var to=s(ae);ze=l(to,"input_ids"),to.forEach(o),J=l(G," only and nothing else: "),D=a(G,"CODE",{});var no=s(D);be=l(no,"model(input_ids)"),no.forEach(o),G.forEach(o),se=c(Y),N=a(Y,"LI",{});var oe=s(N);ke=l(oe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=a(oe,"CODE",{});var ce=s(re);Be=l(ce,"model([input_ids, attention_mask])"),ce.forEach(o),ee=l(oe," or "),le=a(oe,"CODE",{});var fe=s(le);de=l(fe,"model([input_ids, attention_mask, token_type_ids])"),fe.forEach(o),oe.forEach(o),Ae=c(Y),X=a(Y,"LI",{});var ve=s(X);Fe=l(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=a(ve,"CODE",{});var Te=s(H);De=l(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(o),ve.forEach(o),Y.forEach(o)},m(x,q){_(x,p,q),e(p,k),_(x,f,q),_(x,u,q),e(u,b),e(b,d),e(u,h),e(u,F),e(F,Ce),_(x,ue,q),_(x,z,q),e(z,je),e(z,W),e(W,Oe),e(z,Pe),e(z,R),e(R,Le),e(z,Ne),_(x,Q,q),_(x,V,q),e(V,Ie),_(x,Z,q),_(x,j,q),e(j,L),e(L,he),e(L,ae),e(ae,ze),e(L,J),e(L,D),e(D,be),e(j,se),e(j,N),e(N,ke),e(N,re),e(re,Be),e(N,ee),e(N,le),e(le,de),e(j,Ae),e(j,X),e(X,Fe),e(X,H),e(H,De)},d(x){x&&o(p),x&&o(f),x&&o(u),x&&o(ue),x&&o(z),x&&o(Q),x&&o(V),x&&o(Z),x&&o(j)}}}function yh(B){let p,k,f,u,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var F=s(f);u=l(F,"Module"),F.forEach(o),b=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(d,h){_(d,p,h),e(p,k),e(p,f),e(f,u),e(p,b)},d(d){d&&o(p)}}}function vh(B){let p,k,f,u,b;return u=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(u.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(o),f=c(d),v(u.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(u,d,h),b=!0},p:Xe,i(d){b||(w(u.$$.fragment,d),b=!0)},o(d){S(u.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(u,d)}}}function Th(B){let p,k,f,u,b,d,h,F,Ce,ue,z,je,W,Oe,Pe,R,Le,Ne,Q,V,Ie,Z,j,L,he,ae,ze,J,D,be,se,N,ke,re,Be,ee,le,de,Ae,X,Fe,H,De;return{c(){p=n("p"),k=r("TF 2.0 models accepts two formats as inputs:"),f=i(),u=n("ul"),b=n("li"),d=r("having all inputs as keyword arguments (like PyTorch models), or"),h=i(),F=n("li"),Ce=r("having all inputs as a list, tuple or dict in the first positional arguments."),ue=i(),z=n("p"),je=r("This second option is useful when using "),W=n("code"),Oe=r("tf.keras.Model.fit"),Pe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),Le=r("model(inputs)"),Ne=r("."),Q=i(),V=n("p"),Ie=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=i(),j=n("ul"),L=n("li"),he=r("a single Tensor with "),ae=n("code"),ze=r("input_ids"),J=r(" only and nothing else: "),D=n("code"),be=r("model(input_ids)"),se=i(),N=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=n("code"),Be=r("model([input_ids, attention_mask])"),ee=r(" or "),le=n("code"),de=r("model([input_ids, attention_mask, token_type_ids])"),Ae=i(),X=n("li"),Fe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(x){p=a(x,"P",{});var q=s(p);k=l(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(o),f=c(x),u=a(x,"UL",{});var ie=s(u);b=a(ie,"LI",{});var Ze=s(b);d=l(Ze,"having all inputs as keyword arguments (like PyTorch models), or"),Ze.forEach(o),h=c(ie),F=a(ie,"LI",{});var Re=s(F);Ce=l(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(o),ie.forEach(o),ue=c(x),z=a(x,"P",{});var O=s(z);je=l(O,"This second option is useful when using "),W=a(O,"CODE",{});var eo=s(W);Oe=l(eo,"tf.keras.Model.fit"),eo.forEach(o),Pe=l(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=a(O,"CODE",{});var ye=s(R);Le=l(ye,"model(inputs)"),ye.forEach(o),Ne=l(O,"."),O.forEach(o),Q=c(x),V=a(x,"P",{});var oo=s(V);Ie=l(oo,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oo.forEach(o),Z=c(x),j=a(x,"UL",{});var Y=s(j);L=a(Y,"LI",{});var G=s(L);he=l(G,"a single Tensor with "),ae=a(G,"CODE",{});var to=s(ae);ze=l(to,"input_ids"),to.forEach(o),J=l(G," only and nothing else: "),D=a(G,"CODE",{});var no=s(D);be=l(no,"model(input_ids)"),no.forEach(o),G.forEach(o),se=c(Y),N=a(Y,"LI",{});var oe=s(N);ke=l(oe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=a(oe,"CODE",{});var ce=s(re);Be=l(ce,"model([input_ids, attention_mask])"),ce.forEach(o),ee=l(oe," or "),le=a(oe,"CODE",{});var fe=s(le);de=l(fe,"model([input_ids, attention_mask, token_type_ids])"),fe.forEach(o),oe.forEach(o),Ae=c(Y),X=a(Y,"LI",{});var ve=s(X);Fe=l(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=a(ve,"CODE",{});var Te=s(H);De=l(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(o),ve.forEach(o),Y.forEach(o)},m(x,q){_(x,p,q),e(p,k),_(x,f,q),_(x,u,q),e(u,b),e(b,d),e(u,h),e(u,F),e(F,Ce),_(x,ue,q),_(x,z,q),e(z,je),e(z,W),e(W,Oe),e(z,Pe),e(z,R),e(R,Le),e(z,Ne),_(x,Q,q),_(x,V,q),e(V,Ie),_(x,Z,q),_(x,j,q),e(j,L),e(L,he),e(L,ae),e(ae,ze),e(L,J),e(L,D),e(D,be),e(j,se),e(j,N),e(N,ke),e(N,re),e(re,Be),e(N,ee),e(N,le),e(le,de),e(j,Ae),e(j,X),e(X,Fe),e(X,H),e(H,De)},d(x){x&&o(p),x&&o(f),x&&o(u),x&&o(ue),x&&o(z),x&&o(Q),x&&o(V),x&&o(Z),x&&o(j)}}}function wh(B){let p,k,f,u,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var F=s(f);u=l(F,"Module"),F.forEach(o),b=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(d,h){_(d,p,h),e(p,k),e(p,f),e(f,u),e(p,b)},d(d){d&&o(p)}}}function Sh(B){let p,k,f,u,b;return u=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = FlaxBlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(u.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(o),f=c(d),v(u.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(u,d,h),b=!0},p:Xe,i(d){b||(w(u.$$.fragment,d),b=!0)},o(d){S(u.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(u,d)}}}function $h(B){let p,k,f,u,b;return u=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(u.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(o),f=c(d),v(u.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(u,d,h),b=!0},p:Xe,i(d){b||(w(u.$$.fragment,d),b=!0)},o(d){S(u.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(u,d)}}}function xh(B){let p,k,f,u,b;return u=new Ye({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(u.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(o),f=c(d),v(u.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(u,d,h),b=!0},p:Xe,i(d){b||(w(u.$$.fragment,d),b=!0)},o(d){S(u.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(u,d)}}}function zh(B){let p,k,f,u,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(h,"CODE",{});var F=s(f);u=l(F,"Module"),F.forEach(o),b=l(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(d,h){_(d,p,h),e(p,k),e(p,f),e(f,u),e(p,b)},d(d){d&&o(p)}}}function Bh(B){let p,k,f,u,b;return u=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(u.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(o),f=c(d),v(u.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(u,d,h),b=!0},p:Xe,i(d){b||(w(u.$$.fragment,d),b=!0)},o(d){S(u.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(u,d)}}}function Fh(B){let p,k,f,u,b;return u=new Ye({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=n("p"),k=r("Example:"),f=i(),y(u.$$.fragment)},l(d){p=a(d,"P",{});var h=s(p);k=l(h,"Example:"),h.forEach(o),f=c(d),v(u.$$.fragment,d)},m(d,h){_(d,p,h),e(p,k),_(d,f,h),T(u,d,h),b=!0},p:Xe,i(d){b||(w(u.$$.fragment,d),b=!0)},o(d){S(u.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),$(u,d)}}}function qh(B){let p,k,f,u,b,d,h,F,Ce,ue,z,je,W,Oe,Pe,R,Le,Ne,Q,V,Ie,Z,j,L,he,ae,ze,J,D,be,se,N,ke,re,Be,ee,le,de,Ae,X,Fe,H,De,x,q,ie,Ze,Re,O,eo,ye,oo,Y,G,to,no,oe,ce,fe,ve,Te,ml,ra,ul,cr,we,ut,hl,ao,fl,En,_l,gl,ht,bl,kl,yl,so,vl,Mn,Tl,wl,Cn,Sl,$l,xl,wo,pr,ro,So,la,ft,zl,da,Bl,mr,U,_t,Fl,ia,ql,El,gt,Ml,jn,Cl,jl,Ol,He,bt,Pl,ca,Ll,Nl,pa,Il,Al,$o,kt,Dl,lo,Gl,ma,Ul,Wl,ua,Rl,Hl,Kl,Ke,yt,Ql,On,Vl,Pn,Jl,Xl,ha,Yl,Zl,Ln,vt,ur,io,xo,fa,Tt,ed,_a,od,hr,Ge,wt,td,St,nd,ga,ad,sd,rd,zo,$t,ld,ba,dd,fr,co,Bo,ka,xt,id,ya,cd,_r,Se,zt,pd,Bt,md,Nn,ud,hd,fd,Ft,_d,qt,gd,bd,kd,qe,Et,yd,po,vd,In,Td,wd,va,Sd,$d,xd,Fo,zd,qo,gr,mo,Eo,Ta,Mt,Bd,wa,Fd,br,$e,Ct,qd,jt,Ed,An,Md,Cd,jd,Ot,Od,Pt,Pd,Ld,Nd,Ee,Lt,Id,uo,Ad,Dn,Dd,Gd,Sa,Ud,Wd,Rd,Mo,Hd,Co,kr,ho,jo,$a,Nt,Kd,xa,Qd,yr,fo,It,Vd,Oo,At,Jd,Po,vr,_o,Lo,za,Dt,Xd,Ba,Yd,Tr,pe,Gt,Zd,Ut,ei,Gn,oi,ti,ni,Wt,ai,Rt,si,ri,li,No,di,Me,Ht,ii,go,ci,Un,pi,mi,Fa,ui,hi,fi,Io,_i,Ao,wr,bo,Do,qa,Kt,gi,Ea,bi,Sr,me,Qt,ki,Vt,yi,Wn,vi,Ti,wi,Jt,Si,Xt,$i,xi,zi,Go,Bi,P,Yt,Fi,ko,qi,Rn,Ei,Mi,Ma,Ci,ji,Oi,Uo,Pi,Ca,Li,Ni,ja,Oa,Pa,La,Ii,Ai,Na,Ia,Aa,Da,Di,Gi,Ga,Ua,Wa,Ra,Ui,Wi,Ha,Ka,Qa,Zt,Ri,Va,Hi,Ki,Qi,Ja,Xa,Ya,Za,Vi,$r,yo,Wo,es,en,Ji,os,Xi,xr,I,on,Yi,tn,Zi,Hn,ec,oc,tc,nn,nc,an,ac,sc,rc,ts,lc,dc,Ue,ns,sn,ic,cc,as,rn,pc,mc,ss,ln,uc,hc,rs,dn,fc,_c,Ro,cn,gc,Ho,bc,Ko,pn,kc,Qo,yc,Vo,mn,vc,Jo,zr,vo,Xo,ls,un,Tc,ds,wc,Br,A,hn,Sc,fn,$c,Kn,xc,zc,Bc,_n,Fc,gn,qc,Ec,Mc,is,Cc,jc,We,cs,bn,Oc,Pc,ps,kn,Lc,Nc,ms,yn,Ic,Ac,us,vn,Dc,Gc,E,Tn,Uc,To,Wc,hs,Rc,Hc,fs,Kc,Qc,Vc,Yo,Jc,_s,Xc,Yc,gs,bs,ks,ys,Zc,ep,vs,Ts,ws,Ss,op,tp,$s,xs,zs,Bs,np,ap,Fs,qs,wn,Zo,et,Es,Sn,sp,Ms,rp,lp,Cs,dp,ip,js,cp,pp,Os,Ps,Ls,Ns,mp,up,Is,As,Ds,Gs,hp,fp,Us,Ws,Rs,Hs,_p,gp,Ks,Qs,Vs,Js,bp,kp,ot,$n,yp,tt,vp,nt,xn,Tp,at,Fr;return d=new xe({}),se=new xe({}),Te=new xe({}),ut=new C({props:{name:"class transformers.BlenderbotSmallConfig",anchor:"transformers.BlenderbotSmallConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 512"},{name:"encoder_layers",val:" = 8"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 8"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/configuration_blenderbot_small.py#L36"}}),wo=new Je({props:{anchor:"transformers.BlenderbotSmallConfig.example",$$slots:{default:[uh]},$$scope:{ctx:B}}}),ft=new xe({}),_t=new C({props:{name:"class transformers.BlenderbotSmallTokenizer",anchor:"transformers.BlenderbotSmallTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"bos_token",val:" = '__start__'"},{name:"eos_token",val:" = '__end__'"},{name:"unk_token",val:" = '__unk__'"},{name:"pad_token",val:" = '__null__'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BlenderbotSmallTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BlenderbotSmallTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__start__&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__end__&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__unk__&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BlenderbotSmallTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__pad__&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.
**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L69"}}),bt=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2971",returnDescription:`
<p>The model input with special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),kt=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils.py#L845",returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),yt=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2951",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),vt=new C({props:{name:"save_vocabulary",anchor:"transformers.BlenderbotSmallTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L211"}}),Tt=new xe({}),wt=new C({props:{name:"class transformers.BlenderbotSmallTokenizerFast",anchor:"transformers.BlenderbotSmallTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L52"}}),$t=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L98",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xt=new xe({}),zt=new C({props:{name:"class transformers.BlenderbotSmallModel",anchor:"transformers.BlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1081"}}),Et=new C({props:{name:"forward",anchor:"transformers.BlenderbotSmallModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1108",returnDescription:`
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
`}}),Fo=new qn({props:{$$slots:{default:[hh]},$$scope:{ctx:B}}}),qo=new Je({props:{anchor:"transformers.BlenderbotSmallModel.forward.example",$$slots:{default:[fh]},$$scope:{ctx:B}}}),Mt=new xe({}),Ct=new C({props:{name:"class transformers.BlenderbotSmallForConditionalGeneration",anchor:"transformers.BlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1207"}}),Lt=new C({props:{name:"forward",anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1251",returnDescription:`
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
`}}),Mo=new qn({props:{$$slots:{default:[_h]},$$scope:{ctx:B}}}),Co=new Je({props:{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.example",$$slots:{default:[gh]},$$scope:{ctx:B}}}),Nt=new xe({}),It=new C({props:{name:"class transformers.BlenderbotSmallForCausalLM",anchor:"transformers.BlenderbotSmallForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1387"}}),At=new C({props:{name:"forward",anchor:"transformers.BlenderbotSmallForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1418",returnDescription:`
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
`}}),Po=new Je({props:{anchor:"transformers.BlenderbotSmallForCausalLM.forward.example",$$slots:{default:[bh]},$$scope:{ctx:B}}}),Dt=new xe({}),Gt=new C({props:{name:"class transformers.TFBlenderbotSmallModel",anchor:"transformers.TFBlenderbotSmallModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1144"}}),No=new qn({props:{$$slots:{default:[kh]},$$scope:{ctx:B}}}),Ht=new C({props:{name:"call",anchor:"transformers.TFBlenderbotSmallModel.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1156",returnDescription:`
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
`}}),Io=new qn({props:{$$slots:{default:[yh]},$$scope:{ctx:B}}}),Ao=new Je({props:{anchor:"transformers.TFBlenderbotSmallModel.call.example",$$slots:{default:[vh]},$$scope:{ctx:B}}}),Kt=new xe({}),Qt=new C({props:{name:"class transformers.TFBlenderbotSmallForConditionalGeneration",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1233"}}),Go=new qn({props:{$$slots:{default:[Th]},$$scope:{ctx:B}}}),Yt=new C({props:{name:"call",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1266",returnDescription:`
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
`}}),Uo=new qn({props:{$$slots:{default:[wh]},$$scope:{ctx:B}}}),en=new xe({}),on=new C({props:{name:"class transformers.FlaxBlenderbotSmallModel",anchor:"transformers.FlaxBlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1215"}}),cn=new C({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1151",returnDescription:`
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
`}}),Ho=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallModel.__call__.example",$$slots:{default:[Sh]},$$scope:{ctx:B}}}),pn=new C({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Qo=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallModel.encode.example",$$slots:{default:[$h]},$$scope:{ctx:B}}}),mn=new C({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Jo=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallModel.decode.example",$$slots:{default:[xh]},$$scope:{ctx:B}}}),un=new xe({}),hn=new C({props:{name:"class transformers.FlaxBlenderbotSmallForConditionalGeneration",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1303"}}),Tn=new C({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Yo=new qn({props:{$$slots:{default:[zh]},$$scope:{ctx:B}}}),Sn=new xe({}),$n=new C({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),tt=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.example",$$slots:{default:[Bh]},$$scope:{ctx:B}}}),xn=new C({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),at=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.example",$$slots:{default:[Fh]},$$scope:{ctx:B}}}),{c(){p=n("meta"),k=i(),f=n("h1"),u=n("a"),b=n("span"),y(d.$$.fragment),h=i(),F=n("span"),Ce=r("Blenderbot Small"),ue=i(),z=n("p"),je=r("Note that "),W=n("a"),Oe=r("BlenderbotSmallModel"),Pe=r(` and
`),R=n("a"),Le=r("BlenderbotSmallForConditionalGeneration"),Ne=r(` are only used in combination with the checkpoint
`),Q=n("a"),V=r("facebook/blenderbot-90M"),Ie=r(`. Larger Blenderbot checkpoints should
instead be used with `),Z=n("a"),j=r("BlenderbotModel"),L=r(` and
`),he=n("a"),ae=r("BlenderbotForConditionalGeneration"),ze=i(),J=n("h2"),D=n("a"),be=n("span"),y(se.$$.fragment),N=i(),ke=n("span"),re=r("Overview"),Be=i(),ee=n("p"),le=r("The Blender chatbot model was proposed in "),de=n("a"),Ae=r("Recipes for building an open-domain chatbot"),X=r(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Fe=i(),H=n("p"),De=r("The abstract of the paper is the following:"),x=i(),q=n("p"),ie=n("em"),Ze=r(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Re=i(),O=n("p"),eo=r("This model was contributed by "),ye=n("a"),oo=r("patrickvonplaten"),Y=r(`. The authors\u2019 code can be
found `),G=n("a"),to=r("here"),no=r(" ."),oe=i(),ce=n("h2"),fe=n("a"),ve=n("span"),y(Te.$$.fragment),ml=i(),ra=n("span"),ul=r("BlenderbotSmallConfig"),cr=i(),we=n("div"),y(ut.$$.fragment),hl=i(),ao=n("p"),fl=r("This is the configuration class to store the configuration of a "),En=n("a"),_l=r("BlenderbotSmallModel"),gl=r(`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),ht=n("a"),bl=r("facebook/blenderbot_small-90M"),kl=r(" architecture."),yl=i(),so=n("p"),vl=r("Configuration objects inherit from "),Mn=n("a"),Tl=r("PretrainedConfig"),wl=r(` and can be used to control the model outputs. Read the
documentation from `),Cn=n("a"),Sl=r("PretrainedConfig"),$l=r(" for more information."),xl=i(),y(wo.$$.fragment),pr=i(),ro=n("h2"),So=n("a"),la=n("span"),y(ft.$$.fragment),zl=i(),da=n("span"),Bl=r("BlenderbotSmallTokenizer"),mr=i(),U=n("div"),y(_t.$$.fragment),Fl=i(),ia=n("p"),ql=r("Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),El=i(),gt=n("p"),Ml=r("This tokenizer inherits from "),jn=n("a"),Cl=r("PreTrainedTokenizer"),jl=r(` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Ol=i(),He=n("div"),y(bt.$$.fragment),Pl=i(),ca=n("p"),Ll=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Nl=i(),pa=n("p"),Il=r("This implementation does not add special tokens and this method should be overridden in a subclass."),Al=i(),$o=n("div"),y(kt.$$.fragment),Dl=i(),lo=n("p"),Gl=r(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ma=n("code"),Ul=r("prepare_for_model"),Wl=r(" or "),ua=n("code"),Rl=r("encode_plus"),Hl=r(" methods."),Kl=i(),Ke=n("div"),y(yt.$$.fragment),Ql=i(),On=n("p"),Vl=r("Create the token type IDs corresponding to the sequences passed. "),Pn=n("a"),Jl=r(`What are token type
IDs?`),Xl=i(),ha=n("p"),Yl=r("Should be overridden in a subclass if the model has a special way of building those."),Zl=i(),Ln=n("div"),y(vt.$$.fragment),ur=i(),io=n("h2"),xo=n("a"),fa=n("span"),y(Tt.$$.fragment),ed=i(),_a=n("span"),od=r("BlenderbotSmallTokenizerFast"),hr=i(),Ge=n("div"),y(wt.$$.fragment),td=i(),St=n("p"),nd=r("Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),ga=n("em"),ad=r("tokenizers"),sd=r(" library)."),rd=i(),zo=n("div"),y($t.$$.fragment),ld=i(),ba=n("p"),dd=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),fr=i(),co=n("h2"),Bo=n("a"),ka=n("span"),y(xt.$$.fragment),id=i(),ya=n("span"),cd=r("BlenderbotSmallModel"),_r=i(),Se=n("div"),y(zt.$$.fragment),pd=i(),Bt=n("p"),md=r(`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=n("a"),ud=r("PreTrainedModel"),hd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fd=i(),Ft=n("p"),_d=r("This model is also a PyTorch "),qt=n("a"),gd=r("torch.nn.Module"),bd=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kd=i(),qe=n("div"),y(Et.$$.fragment),yd=i(),po=n("p"),vd=r("The "),In=n("a"),Td=r("BlenderbotSmallModel"),wd=r(" forward method, overrides the "),va=n("code"),Sd=r("__call__"),$d=r(" special method."),xd=i(),y(Fo.$$.fragment),zd=i(),y(qo.$$.fragment),gr=i(),mo=n("h2"),Eo=n("a"),Ta=n("span"),y(Mt.$$.fragment),Bd=i(),wa=n("span"),Fd=r("BlenderbotSmallForConditionalGeneration"),br=i(),$e=n("div"),y(Ct.$$.fragment),qd=i(),jt=n("p"),Ed=r(`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=n("a"),Md=r("PreTrainedModel"),Cd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jd=i(),Ot=n("p"),Od=r("This model is also a PyTorch "),Pt=n("a"),Pd=r("torch.nn.Module"),Ld=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nd=i(),Ee=n("div"),y(Lt.$$.fragment),Id=i(),uo=n("p"),Ad=r("The "),Dn=n("a"),Dd=r("BlenderbotSmallForConditionalGeneration"),Gd=r(" forward method, overrides the "),Sa=n("code"),Ud=r("__call__"),Wd=r(" special method."),Rd=i(),y(Mo.$$.fragment),Hd=i(),y(Co.$$.fragment),kr=i(),ho=n("h2"),jo=n("a"),$a=n("span"),y(Nt.$$.fragment),Kd=i(),xa=n("span"),Qd=r("BlenderbotSmallForCausalLM"),yr=i(),fo=n("div"),y(It.$$.fragment),Vd=i(),Oo=n("div"),y(At.$$.fragment),Jd=i(),y(Po.$$.fragment),vr=i(),_o=n("h2"),Lo=n("a"),za=n("span"),y(Dt.$$.fragment),Xd=i(),Ba=n("span"),Yd=r("TFBlenderbotSmallModel"),Tr=i(),pe=n("div"),y(Gt.$$.fragment),Zd=i(),Ut=n("p"),ei=r(`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=n("a"),oi=r("TFPreTrainedModel"),ti=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ni=i(),Wt=n("p"),ai=r("This model is also a "),Rt=n("a"),si=r("tf.keras.Model"),ri=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),li=i(),y(No.$$.fragment),di=i(),Me=n("div"),y(Ht.$$.fragment),ii=i(),go=n("p"),ci=r("The "),Un=n("a"),pi=r("TFBlenderbotSmallModel"),mi=r(" forward method, overrides the "),Fa=n("code"),ui=r("__call__"),hi=r(" special method."),fi=i(),y(Io.$$.fragment),_i=i(),y(Ao.$$.fragment),wr=i(),bo=n("h2"),Do=n("a"),qa=n("span"),y(Kt.$$.fragment),gi=i(),Ea=n("span"),bi=r("TFBlenderbotSmallForConditionalGeneration"),Sr=i(),me=n("div"),y(Qt.$$.fragment),ki=i(),Vt=n("p"),yi=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Wn=n("a"),vi=r("TFPreTrainedModel"),Ti=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wi=i(),Jt=n("p"),Si=r("This model is also a "),Xt=n("a"),$i=r("tf.keras.Model"),xi=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zi=i(),y(Go.$$.fragment),Bi=i(),P=n("div"),y(Yt.$$.fragment),Fi=i(),ko=n("p"),qi=r("The "),Rn=n("a"),Ei=r("TFBlenderbotSmallForConditionalGeneration"),Mi=r(" forward method, overrides the "),Ma=n("code"),Ci=r("__call__"),ji=r(" special method."),Oi=i(),y(Uo.$$.fragment),Pi=i(),Ca=n("p"),Li=r("Conversation example::"),Ni=i(),ja=n("blockquote"),Oa=n("blockquote"),Pa=n("blockquote"),La=n("p"),Ii=r(`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Ai=i(),Na=n("blockquote"),Ia=n("blockquote"),Aa=n("blockquote"),Da=n("p"),Di=r(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Gi=i(),Ga=n("blockquote"),Ua=n("blockquote"),Wa=n("blockquote"),Ra=n("p"),Ui=r(`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),Wi=i(),Ha=n("blockquote"),Ka=n("blockquote"),Qa=n("blockquote"),Zt=n("p"),Ri=r(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),Va=n("s"),Hi=r("what kind of carbs do they eat? i don\u2019t know much about carbs."),Ki=r(` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),Qi=i(),Ja=n("blockquote"),Xa=n("blockquote"),Ya=n("blockquote"),Za=n("p"),Vi=r(`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),$r=i(),yo=n("h2"),Wo=n("a"),es=n("span"),y(en.$$.fragment),Ji=i(),os=n("span"),Xi=r("FlaxBlenderbotSmallModel"),xr=i(),I=n("div"),y(on.$$.fragment),Yi=i(),tn=n("p"),Zi=r(`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Hn=n("a"),ec=r("FlaxPreTrainedModel"),oc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tc=i(),nn=n("p"),nc=r(`This model is also a Flax Linen
`),an=n("a"),ac=r("flax.nn.Module"),sc=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),rc=i(),ts=n("p"),lc=r("Finally, this model supports inherent JAX features such as:"),dc=i(),Ue=n("ul"),ns=n("li"),sn=n("a"),ic=r("Just-In-Time (JIT) compilation"),cc=i(),as=n("li"),rn=n("a"),pc=r("Automatic Differentiation"),mc=i(),ss=n("li"),ln=n("a"),uc=r("Vectorization"),hc=i(),rs=n("li"),dn=n("a"),fc=r("Parallelization"),_c=i(),Ro=n("div"),y(cn.$$.fragment),gc=i(),y(Ho.$$.fragment),bc=i(),Ko=n("div"),y(pn.$$.fragment),kc=i(),y(Qo.$$.fragment),yc=i(),Vo=n("div"),y(mn.$$.fragment),vc=i(),y(Jo.$$.fragment),zr=i(),vo=n("h2"),Xo=n("a"),ls=n("span"),y(un.$$.fragment),Tc=i(),ds=n("span"),wc=r("FlaxBlenderbotForConditionalGeneration"),Br=i(),A=n("div"),y(hn.$$.fragment),Sc=i(),fn=n("p"),$c=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Kn=n("a"),xc=r("FlaxPreTrainedModel"),zc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bc=i(),_n=n("p"),Fc=r(`This model is also a Flax Linen
`),gn=n("a"),qc=r("flax.nn.Module"),Ec=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mc=i(),is=n("p"),Cc=r("Finally, this model supports inherent JAX features such as:"),jc=i(),We=n("ul"),cs=n("li"),bn=n("a"),Oc=r("Just-In-Time (JIT) compilation"),Pc=i(),ps=n("li"),kn=n("a"),Lc=r("Automatic Differentiation"),Nc=i(),ms=n("li"),yn=n("a"),Ic=r("Vectorization"),Ac=i(),us=n("li"),vn=n("a"),Dc=r("Parallelization"),Gc=i(),E=n("div"),y(Tn.$$.fragment),Uc=i(),To=n("p"),Wc=r("The "),hs=n("code"),Rc=r("FlaxBlenderbotSmallPreTrainedModel"),Hc=r(" forward method, overrides the "),fs=n("code"),Kc=r("__call__"),Qc=r(" special method."),Vc=i(),y(Yo.$$.fragment),Jc=i(),_s=n("p"),Xc=r("Summarization example:"),Yc=i(),gs=n("blockquote"),bs=n("blockquote"),ks=n("blockquote"),ys=n("p"),Zc=r("from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),ep=i(),vs=n("blockquote"),Ts=n("blockquote"),ws=n("blockquote"),Ss=n("p"),op=r(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),tp=i(),$s=n("blockquote"),xs=n("blockquote"),zs=n("blockquote"),Bs=n("p"),np=r(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),ap=i(),Fs=n("blockquote"),qs=n("blockquote"),wn=n("blockquote"),Zo=n("h1"),et=n("a"),Es=n("span"),y(Sn.$$.fragment),sp=i(),Ms=n("span"),rp=r("Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),lp=i(),Cs=n("p"),dp=r("print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),ip=i(),js=n("p"),cp=r("Mask filling example:"),pp=i(),Os=n("blockquote"),Ps=n("blockquote"),Ls=n("blockquote"),Ns=n("p"),mp=r(`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),up=i(),Is=n("blockquote"),As=n("blockquote"),Ds=n("blockquote"),Gs=n("p"),hp=r(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),fp=i(),Us=n("blockquote"),Ws=n("blockquote"),Rs=n("blockquote"),Hs=n("p"),_p=r(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),gp=i(),Ks=n("blockquote"),Qs=n("blockquote"),Vs=n("blockquote"),Js=n("p"),bp=r("tokenizer.decode(predictions).split()"),kp=i(),ot=n("div"),y($n.$$.fragment),yp=i(),y(tt.$$.fragment),vp=i(),nt=n("div"),y(xn.$$.fragment),Tp=i(),y(at.$$.fragment),this.h()},l(t){const g=ph('[data-svelte="svelte-1phssyn"]',document.head);p=a(g,"META",{name:!0,content:!0}),g.forEach(o),k=c(t),f=a(t,"H1",{class:!0});var zn=s(f);u=a(zn,"A",{id:!0,class:!0,href:!0});var Xs=s(u);b=a(Xs,"SPAN",{});var Ys=s(b);v(d.$$.fragment,Ys),Ys.forEach(o),Xs.forEach(o),h=c(zn),F=a(zn,"SPAN",{});var Zs=s(F);Ce=l(Zs,"Blenderbot Small"),Zs.forEach(o),zn.forEach(o),ue=c(t),z=a(t,"P",{});var _e=s(z);je=l(_e,"Note that "),W=a(_e,"A",{href:!0});var er=s(W);Oe=l(er,"BlenderbotSmallModel"),er.forEach(o),Pe=l(_e,` and
`),R=a(_e,"A",{href:!0});var or=s(R);Le=l(or,"BlenderbotSmallForConditionalGeneration"),or.forEach(o),Ne=l(_e,` are only used in combination with the checkpoint
`),Q=a(_e,"A",{href:!0,rel:!0});var tr=s(Q);V=l(tr,"facebook/blenderbot-90M"),tr.forEach(o),Ie=l(_e,`. Larger Blenderbot checkpoints should
instead be used with `),Z=a(_e,"A",{href:!0});var nr=s(Z);j=l(nr,"BlenderbotModel"),nr.forEach(o),L=l(_e,` and
`),he=a(_e,"A",{href:!0});var ar=s(he);ae=l(ar,"BlenderbotForConditionalGeneration"),ar.forEach(o),_e.forEach(o),ze=c(t),J=a(t,"H2",{class:!0});var Bn=s(J);D=a(Bn,"A",{id:!0,class:!0,href:!0});var sr=s(D);be=a(sr,"SPAN",{});var rr=s(be);v(se.$$.fragment,rr),rr.forEach(o),sr.forEach(o),N=c(Bn),ke=a(Bn,"SPAN",{});var lr=s(ke);re=l(lr,"Overview"),lr.forEach(o),Bn.forEach(o),Be=c(t),ee=a(t,"P",{});var Fn=s(ee);le=l(Fn,"The Blender chatbot model was proposed in "),de=a(Fn,"A",{href:!0,rel:!0});var dr=s(de);Ae=l(dr,"Recipes for building an open-domain chatbot"),dr.forEach(o),X=l(Fn,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Fn.forEach(o),Fe=c(t),H=a(t,"P",{});var ir=s(H);De=l(ir,"The abstract of the paper is the following:"),ir.forEach(o),x=c(t),q=a(t,"P",{});var Sp=s(q);ie=a(Sp,"EM",{});var $p=s(ie);Ze=l($p,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),$p.forEach(o),Sp.forEach(o),Re=c(t),O=a(t,"P",{});var Qn=s(O);eo=l(Qn,"This model was contributed by "),ye=a(Qn,"A",{href:!0,rel:!0});var xp=s(ye);oo=l(xp,"patrickvonplaten"),xp.forEach(o),Y=l(Qn,`. The authors\u2019 code can be
found `),G=a(Qn,"A",{href:!0,rel:!0});var zp=s(G);to=l(zp,"here"),zp.forEach(o),no=l(Qn," ."),Qn.forEach(o),oe=c(t),ce=a(t,"H2",{class:!0});var qr=s(ce);fe=a(qr,"A",{id:!0,class:!0,href:!0});var Bp=s(fe);ve=a(Bp,"SPAN",{});var Fp=s(ve);v(Te.$$.fragment,Fp),Fp.forEach(o),Bp.forEach(o),ml=c(qr),ra=a(qr,"SPAN",{});var qp=s(ra);ul=l(qp,"BlenderbotSmallConfig"),qp.forEach(o),qr.forEach(o),cr=c(t),we=a(t,"DIV",{class:!0});var st=s(we);v(ut.$$.fragment,st),hl=c(st),ao=a(st,"P",{});var Vn=s(ao);fl=l(Vn,"This is the configuration class to store the configuration of a "),En=a(Vn,"A",{href:!0});var Ep=s(En);_l=l(Ep,"BlenderbotSmallModel"),Ep.forEach(o),gl=l(Vn,`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),ht=a(Vn,"A",{href:!0,rel:!0});var Mp=s(ht);bl=l(Mp,"facebook/blenderbot_small-90M"),Mp.forEach(o),kl=l(Vn," architecture."),Vn.forEach(o),yl=c(st),so=a(st,"P",{});var Jn=s(so);vl=l(Jn,"Configuration objects inherit from "),Mn=a(Jn,"A",{href:!0});var Cp=s(Mn);Tl=l(Cp,"PretrainedConfig"),Cp.forEach(o),wl=l(Jn,` and can be used to control the model outputs. Read the
documentation from `),Cn=a(Jn,"A",{href:!0});var jp=s(Cn);Sl=l(jp,"PretrainedConfig"),jp.forEach(o),$l=l(Jn," for more information."),Jn.forEach(o),xl=c(st),v(wo.$$.fragment,st),st.forEach(o),pr=c(t),ro=a(t,"H2",{class:!0});var Er=s(ro);So=a(Er,"A",{id:!0,class:!0,href:!0});var Op=s(So);la=a(Op,"SPAN",{});var Pp=s(la);v(ft.$$.fragment,Pp),Pp.forEach(o),Op.forEach(o),zl=c(Er),da=a(Er,"SPAN",{});var Lp=s(da);Bl=l(Lp,"BlenderbotSmallTokenizer"),Lp.forEach(o),Er.forEach(o),mr=c(t),U=a(t,"DIV",{class:!0});var ge=s(U);v(_t.$$.fragment,ge),Fl=c(ge),ia=a(ge,"P",{});var Np=s(ia);ql=l(Np,"Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),Np.forEach(o),El=c(ge),gt=a(ge,"P",{});var Mr=s(gt);Ml=l(Mr,"This tokenizer inherits from "),jn=a(Mr,"A",{href:!0});var Ip=s(jn);Cl=l(Ip,"PreTrainedTokenizer"),Ip.forEach(o),jl=l(Mr,` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Mr.forEach(o),Ol=c(ge),He=a(ge,"DIV",{class:!0});var Xn=s(He);v(bt.$$.fragment,Xn),Pl=c(Xn),ca=a(Xn,"P",{});var Ap=s(ca);Ll=l(Ap,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Ap.forEach(o),Nl=c(Xn),pa=a(Xn,"P",{});var Dp=s(pa);Il=l(Dp,"This implementation does not add special tokens and this method should be overridden in a subclass."),Dp.forEach(o),Xn.forEach(o),Al=c(ge),$o=a(ge,"DIV",{class:!0});var Cr=s($o);v(kt.$$.fragment,Cr),Dl=c(Cr),lo=a(Cr,"P",{});var Yn=s(lo);Gl=l(Yn,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ma=a(Yn,"CODE",{});var Gp=s(ma);Ul=l(Gp,"prepare_for_model"),Gp.forEach(o),Wl=l(Yn," or "),ua=a(Yn,"CODE",{});var Up=s(ua);Rl=l(Up,"encode_plus"),Up.forEach(o),Hl=l(Yn," methods."),Yn.forEach(o),Cr.forEach(o),Kl=c(ge),Ke=a(ge,"DIV",{class:!0});var Zn=s(Ke);v(yt.$$.fragment,Zn),Ql=c(Zn),On=a(Zn,"P",{});var wp=s(On);Vl=l(wp,"Create the token type IDs corresponding to the sequences passed. "),Pn=a(wp,"A",{href:!0});var Wp=s(Pn);Jl=l(Wp,`What are token type
IDs?`),Wp.forEach(o),wp.forEach(o),Xl=c(Zn),ha=a(Zn,"P",{});var Rp=s(ha);Yl=l(Rp,"Should be overridden in a subclass if the model has a special way of building those."),Rp.forEach(o),Zn.forEach(o),Zl=c(ge),Ln=a(ge,"DIV",{class:!0});var Hp=s(Ln);v(vt.$$.fragment,Hp),Hp.forEach(o),ge.forEach(o),ur=c(t),io=a(t,"H2",{class:!0});var jr=s(io);xo=a(jr,"A",{id:!0,class:!0,href:!0});var Kp=s(xo);fa=a(Kp,"SPAN",{});var Qp=s(fa);v(Tt.$$.fragment,Qp),Qp.forEach(o),Kp.forEach(o),ed=c(jr),_a=a(jr,"SPAN",{});var Vp=s(_a);od=l(Vp,"BlenderbotSmallTokenizerFast"),Vp.forEach(o),jr.forEach(o),hr=c(t),Ge=a(t,"DIV",{class:!0});var ea=s(Ge);v(wt.$$.fragment,ea),td=c(ea),St=a(ea,"P",{});var Or=s(St);nd=l(Or,"Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),ga=a(Or,"EM",{});var Jp=s(ga);ad=l(Jp,"tokenizers"),Jp.forEach(o),sd=l(Or," library)."),Or.forEach(o),rd=c(ea),zo=a(ea,"DIV",{class:!0});var Pr=s(zo);v($t.$$.fragment,Pr),ld=c(Pr),ba=a(Pr,"P",{});var Xp=s(ba);dd=l(Xp,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),Xp.forEach(o),Pr.forEach(o),ea.forEach(o),fr=c(t),co=a(t,"H2",{class:!0});var Lr=s(co);Bo=a(Lr,"A",{id:!0,class:!0,href:!0});var Yp=s(Bo);ka=a(Yp,"SPAN",{});var Zp=s(ka);v(xt.$$.fragment,Zp),Zp.forEach(o),Yp.forEach(o),id=c(Lr),ya=a(Lr,"SPAN",{});var em=s(ya);cd=l(em,"BlenderbotSmallModel"),em.forEach(o),Lr.forEach(o),_r=c(t),Se=a(t,"DIV",{class:!0});var rt=s(Se);v(zt.$$.fragment,rt),pd=c(rt),Bt=a(rt,"P",{});var Nr=s(Bt);md=l(Nr,`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=a(Nr,"A",{href:!0});var om=s(Nn);ud=l(om,"PreTrainedModel"),om.forEach(o),hd=l(Nr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nr.forEach(o),fd=c(rt),Ft=a(rt,"P",{});var Ir=s(Ft);_d=l(Ir,"This model is also a PyTorch "),qt=a(Ir,"A",{href:!0,rel:!0});var tm=s(qt);gd=l(tm,"torch.nn.Module"),tm.forEach(o),bd=l(Ir,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ir.forEach(o),kd=c(rt),qe=a(rt,"DIV",{class:!0});var lt=s(qe);v(Et.$$.fragment,lt),yd=c(lt),po=a(lt,"P",{});var oa=s(po);vd=l(oa,"The "),In=a(oa,"A",{href:!0});var nm=s(In);Td=l(nm,"BlenderbotSmallModel"),nm.forEach(o),wd=l(oa," forward method, overrides the "),va=a(oa,"CODE",{});var am=s(va);Sd=l(am,"__call__"),am.forEach(o),$d=l(oa," special method."),oa.forEach(o),xd=c(lt),v(Fo.$$.fragment,lt),zd=c(lt),v(qo.$$.fragment,lt),lt.forEach(o),rt.forEach(o),gr=c(t),mo=a(t,"H2",{class:!0});var Ar=s(mo);Eo=a(Ar,"A",{id:!0,class:!0,href:!0});var sm=s(Eo);Ta=a(sm,"SPAN",{});var rm=s(Ta);v(Mt.$$.fragment,rm),rm.forEach(o),sm.forEach(o),Bd=c(Ar),wa=a(Ar,"SPAN",{});var lm=s(wa);Fd=l(lm,"BlenderbotSmallForConditionalGeneration"),lm.forEach(o),Ar.forEach(o),br=c(t),$e=a(t,"DIV",{class:!0});var dt=s($e);v(Ct.$$.fragment,dt),qd=c(dt),jt=a(dt,"P",{});var Dr=s(jt);Ed=l(Dr,`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=a(Dr,"A",{href:!0});var dm=s(An);Md=l(dm,"PreTrainedModel"),dm.forEach(o),Cd=l(Dr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dr.forEach(o),jd=c(dt),Ot=a(dt,"P",{});var Gr=s(Ot);Od=l(Gr,"This model is also a PyTorch "),Pt=a(Gr,"A",{href:!0,rel:!0});var im=s(Pt);Pd=l(im,"torch.nn.Module"),im.forEach(o),Ld=l(Gr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gr.forEach(o),Nd=c(dt),Ee=a(dt,"DIV",{class:!0});var it=s(Ee);v(Lt.$$.fragment,it),Id=c(it),uo=a(it,"P",{});var ta=s(uo);Ad=l(ta,"The "),Dn=a(ta,"A",{href:!0});var cm=s(Dn);Dd=l(cm,"BlenderbotSmallForConditionalGeneration"),cm.forEach(o),Gd=l(ta," forward method, overrides the "),Sa=a(ta,"CODE",{});var pm=s(Sa);Ud=l(pm,"__call__"),pm.forEach(o),Wd=l(ta," special method."),ta.forEach(o),Rd=c(it),v(Mo.$$.fragment,it),Hd=c(it),v(Co.$$.fragment,it),it.forEach(o),dt.forEach(o),kr=c(t),ho=a(t,"H2",{class:!0});var Ur=s(ho);jo=a(Ur,"A",{id:!0,class:!0,href:!0});var mm=s(jo);$a=a(mm,"SPAN",{});var um=s($a);v(Nt.$$.fragment,um),um.forEach(o),mm.forEach(o),Kd=c(Ur),xa=a(Ur,"SPAN",{});var hm=s(xa);Qd=l(hm,"BlenderbotSmallForCausalLM"),hm.forEach(o),Ur.forEach(o),yr=c(t),fo=a(t,"DIV",{class:!0});var Wr=s(fo);v(It.$$.fragment,Wr),Vd=c(Wr),Oo=a(Wr,"DIV",{class:!0});var Rr=s(Oo);v(At.$$.fragment,Rr),Jd=c(Rr),v(Po.$$.fragment,Rr),Rr.forEach(o),Wr.forEach(o),vr=c(t),_o=a(t,"H2",{class:!0});var Hr=s(_o);Lo=a(Hr,"A",{id:!0,class:!0,href:!0});var fm=s(Lo);za=a(fm,"SPAN",{});var _m=s(za);v(Dt.$$.fragment,_m),_m.forEach(o),fm.forEach(o),Xd=c(Hr),Ba=a(Hr,"SPAN",{});var gm=s(Ba);Yd=l(gm,"TFBlenderbotSmallModel"),gm.forEach(o),Hr.forEach(o),Tr=c(t),pe=a(t,"DIV",{class:!0});var Qe=s(pe);v(Gt.$$.fragment,Qe),Zd=c(Qe),Ut=a(Qe,"P",{});var Kr=s(Ut);ei=l(Kr,`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=a(Kr,"A",{href:!0});var bm=s(Gn);oi=l(bm,"TFPreTrainedModel"),bm.forEach(o),ti=l(Kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kr.forEach(o),ni=c(Qe),Wt=a(Qe,"P",{});var Qr=s(Wt);ai=l(Qr,"This model is also a "),Rt=a(Qr,"A",{href:!0,rel:!0});var km=s(Rt);si=l(km,"tf.keras.Model"),km.forEach(o),ri=l(Qr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qr.forEach(o),li=c(Qe),v(No.$$.fragment,Qe),di=c(Qe),Me=a(Qe,"DIV",{class:!0});var ct=s(Me);v(Ht.$$.fragment,ct),ii=c(ct),go=a(ct,"P",{});var na=s(go);ci=l(na,"The "),Un=a(na,"A",{href:!0});var ym=s(Un);pi=l(ym,"TFBlenderbotSmallModel"),ym.forEach(o),mi=l(na," forward method, overrides the "),Fa=a(na,"CODE",{});var vm=s(Fa);ui=l(vm,"__call__"),vm.forEach(o),hi=l(na," special method."),na.forEach(o),fi=c(ct),v(Io.$$.fragment,ct),_i=c(ct),v(Ao.$$.fragment,ct),ct.forEach(o),Qe.forEach(o),wr=c(t),bo=a(t,"H2",{class:!0});var Vr=s(bo);Do=a(Vr,"A",{id:!0,class:!0,href:!0});var Tm=s(Do);qa=a(Tm,"SPAN",{});var wm=s(qa);v(Kt.$$.fragment,wm),wm.forEach(o),Tm.forEach(o),gi=c(Vr),Ea=a(Vr,"SPAN",{});var Sm=s(Ea);bi=l(Sm,"TFBlenderbotSmallForConditionalGeneration"),Sm.forEach(o),Vr.forEach(o),Sr=c(t),me=a(t,"DIV",{class:!0});var Ve=s(me);v(Qt.$$.fragment,Ve),ki=c(Ve),Vt=a(Ve,"P",{});var Jr=s(Vt);yi=l(Jr,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Wn=a(Jr,"A",{href:!0});var $m=s(Wn);vi=l($m,"TFPreTrainedModel"),$m.forEach(o),Ti=l(Jr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jr.forEach(o),wi=c(Ve),Jt=a(Ve,"P",{});var Xr=s(Jt);Si=l(Xr,"This model is also a "),Xt=a(Xr,"A",{href:!0,rel:!0});var xm=s(Xt);$i=l(xm,"tf.keras.Model"),xm.forEach(o),xi=l(Xr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xr.forEach(o),zi=c(Ve),v(Go.$$.fragment,Ve),Bi=c(Ve),P=a(Ve,"DIV",{class:!0});var K=s(P);v(Yt.$$.fragment,K),Fi=c(K),ko=a(K,"P",{});var aa=s(ko);qi=l(aa,"The "),Rn=a(aa,"A",{href:!0});var zm=s(Rn);Ei=l(zm,"TFBlenderbotSmallForConditionalGeneration"),zm.forEach(o),Mi=l(aa," forward method, overrides the "),Ma=a(aa,"CODE",{});var Bm=s(Ma);Ci=l(Bm,"__call__"),Bm.forEach(o),ji=l(aa," special method."),aa.forEach(o),Oi=c(K),v(Uo.$$.fragment,K),Pi=c(K),Ca=a(K,"P",{});var Fm=s(Ca);Li=l(Fm,"Conversation example::"),Fm.forEach(o),Ni=c(K),ja=a(K,"BLOCKQUOTE",{});var qm=s(ja);Oa=a(qm,"BLOCKQUOTE",{});var Em=s(Oa);Pa=a(Em,"BLOCKQUOTE",{});var Mm=s(Pa);La=a(Mm,"P",{});var Cm=s(La);Ii=l(Cm,`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Cm.forEach(o),Mm.forEach(o),Em.forEach(o),qm.forEach(o),Ai=c(K),Na=a(K,"BLOCKQUOTE",{});var jm=s(Na);Ia=a(jm,"BLOCKQUOTE",{});var Om=s(Ia);Aa=a(Om,"BLOCKQUOTE",{});var Pm=s(Aa);Da=a(Pm,"P",{});var Lm=s(Da);Di=l(Lm,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Lm.forEach(o),Pm.forEach(o),Om.forEach(o),jm.forEach(o),Gi=c(K),Ga=a(K,"BLOCKQUOTE",{});var Nm=s(Ga);Ua=a(Nm,"BLOCKQUOTE",{});var Im=s(Ua);Wa=a(Im,"BLOCKQUOTE",{});var Am=s(Wa);Ra=a(Am,"P",{});var Dm=s(Ra);Ui=l(Dm,`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),Dm.forEach(o),Am.forEach(o),Im.forEach(o),Nm.forEach(o),Wi=c(K),Ha=a(K,"BLOCKQUOTE",{});var Gm=s(Ha);Ka=a(Gm,"BLOCKQUOTE",{});var Um=s(Ka);Qa=a(Um,"BLOCKQUOTE",{});var Wm=s(Qa);Zt=a(Wm,"P",{});var Yr=s(Zt);Ri=l(Yr,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),Va=a(Yr,"S",{});var Rm=s(Va);Hi=l(Rm,"what kind of carbs do they eat? i don\u2019t know much about carbs."),Rm.forEach(o),Ki=l(Yr,` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),Yr.forEach(o),Wm.forEach(o),Um.forEach(o),Gm.forEach(o),Qi=c(K),Ja=a(K,"BLOCKQUOTE",{});var Hm=s(Ja);Xa=a(Hm,"BLOCKQUOTE",{});var Km=s(Xa);Ya=a(Km,"BLOCKQUOTE",{});var Qm=s(Ya);Za=a(Qm,"P",{});var Vm=s(Za);Vi=l(Vm,`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Vm.forEach(o),Qm.forEach(o),Km.forEach(o),Hm.forEach(o),K.forEach(o),Ve.forEach(o),$r=c(t),yo=a(t,"H2",{class:!0});var Zr=s(yo);Wo=a(Zr,"A",{id:!0,class:!0,href:!0});var Jm=s(Wo);es=a(Jm,"SPAN",{});var Xm=s(es);v(en.$$.fragment,Xm),Xm.forEach(o),Jm.forEach(o),Ji=c(Zr),os=a(Zr,"SPAN",{});var Ym=s(os);Xi=l(Ym,"FlaxBlenderbotSmallModel"),Ym.forEach(o),Zr.forEach(o),xr=c(t),I=a(t,"DIV",{class:!0});var te=s(I);v(on.$$.fragment,te),Yi=c(te),tn=a(te,"P",{});var el=s(tn);Zi=l(el,`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Hn=a(el,"A",{href:!0});var Zm=s(Hn);ec=l(Zm,"FlaxPreTrainedModel"),Zm.forEach(o),oc=l(el,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),el.forEach(o),tc=c(te),nn=a(te,"P",{});var ol=s(nn);nc=l(ol,`This model is also a Flax Linen
`),an=a(ol,"A",{href:!0,rel:!0});var eu=s(an);ac=l(eu,"flax.nn.Module"),eu.forEach(o),sc=l(ol,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ol.forEach(o),rc=c(te),ts=a(te,"P",{});var ou=s(ts);lc=l(ou,"Finally, this model supports inherent JAX features such as:"),ou.forEach(o),dc=c(te),Ue=a(te,"UL",{});var pt=s(Ue);ns=a(pt,"LI",{});var tu=s(ns);sn=a(tu,"A",{href:!0,rel:!0});var nu=s(sn);ic=l(nu,"Just-In-Time (JIT) compilation"),nu.forEach(o),tu.forEach(o),cc=c(pt),as=a(pt,"LI",{});var au=s(as);rn=a(au,"A",{href:!0,rel:!0});var su=s(rn);pc=l(su,"Automatic Differentiation"),su.forEach(o),au.forEach(o),mc=c(pt),ss=a(pt,"LI",{});var ru=s(ss);ln=a(ru,"A",{href:!0,rel:!0});var lu=s(ln);uc=l(lu,"Vectorization"),lu.forEach(o),ru.forEach(o),hc=c(pt),rs=a(pt,"LI",{});var du=s(rs);dn=a(du,"A",{href:!0,rel:!0});var iu=s(dn);fc=l(iu,"Parallelization"),iu.forEach(o),du.forEach(o),pt.forEach(o),_c=c(te),Ro=a(te,"DIV",{class:!0});var tl=s(Ro);v(cn.$$.fragment,tl),gc=c(tl),v(Ho.$$.fragment,tl),tl.forEach(o),bc=c(te),Ko=a(te,"DIV",{class:!0});var nl=s(Ko);v(pn.$$.fragment,nl),kc=c(nl),v(Qo.$$.fragment,nl),nl.forEach(o),yc=c(te),Vo=a(te,"DIV",{class:!0});var al=s(Vo);v(mn.$$.fragment,al),vc=c(al),v(Jo.$$.fragment,al),al.forEach(o),te.forEach(o),zr=c(t),vo=a(t,"H2",{class:!0});var sl=s(vo);Xo=a(sl,"A",{id:!0,class:!0,href:!0});var cu=s(Xo);ls=a(cu,"SPAN",{});var pu=s(ls);v(un.$$.fragment,pu),pu.forEach(o),cu.forEach(o),Tc=c(sl),ds=a(sl,"SPAN",{});var mu=s(ds);wc=l(mu,"FlaxBlenderbotForConditionalGeneration"),mu.forEach(o),sl.forEach(o),Br=c(t),A=a(t,"DIV",{class:!0});var ne=s(A);v(hn.$$.fragment,ne),Sc=c(ne),fn=a(ne,"P",{});var rl=s(fn);$c=l(rl,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Kn=a(rl,"A",{href:!0});var uu=s(Kn);xc=l(uu,"FlaxPreTrainedModel"),uu.forEach(o),zc=l(rl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rl.forEach(o),Bc=c(ne),_n=a(ne,"P",{});var ll=s(_n);Fc=l(ll,`This model is also a Flax Linen
`),gn=a(ll,"A",{href:!0,rel:!0});var hu=s(gn);qc=l(hu,"flax.nn.Module"),hu.forEach(o),Ec=l(ll,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ll.forEach(o),Mc=c(ne),is=a(ne,"P",{});var fu=s(is);Cc=l(fu,"Finally, this model supports inherent JAX features such as:"),fu.forEach(o),jc=c(ne),We=a(ne,"UL",{});var mt=s(We);cs=a(mt,"LI",{});var _u=s(cs);bn=a(_u,"A",{href:!0,rel:!0});var gu=s(bn);Oc=l(gu,"Just-In-Time (JIT) compilation"),gu.forEach(o),_u.forEach(o),Pc=c(mt),ps=a(mt,"LI",{});var bu=s(ps);kn=a(bu,"A",{href:!0,rel:!0});var ku=s(kn);Lc=l(ku,"Automatic Differentiation"),ku.forEach(o),bu.forEach(o),Nc=c(mt),ms=a(mt,"LI",{});var yu=s(ms);yn=a(yu,"A",{href:!0,rel:!0});var vu=s(yn);Ic=l(vu,"Vectorization"),vu.forEach(o),yu.forEach(o),Ac=c(mt),us=a(mt,"LI",{});var Tu=s(us);vn=a(Tu,"A",{href:!0,rel:!0});var wu=s(vn);Dc=l(wu,"Parallelization"),wu.forEach(o),Tu.forEach(o),mt.forEach(o),Gc=c(ne),E=a(ne,"DIV",{class:!0});var M=s(E);v(Tn.$$.fragment,M),Uc=c(M),To=a(M,"P",{});var sa=s(To);Wc=l(sa,"The "),hs=a(sa,"CODE",{});var Su=s(hs);Rc=l(Su,"FlaxBlenderbotSmallPreTrainedModel"),Su.forEach(o),Hc=l(sa," forward method, overrides the "),fs=a(sa,"CODE",{});var $u=s(fs);Kc=l($u,"__call__"),$u.forEach(o),Qc=l(sa," special method."),sa.forEach(o),Vc=c(M),v(Yo.$$.fragment,M),Jc=c(M),_s=a(M,"P",{});var xu=s(_s);Xc=l(xu,"Summarization example:"),xu.forEach(o),Yc=c(M),gs=a(M,"BLOCKQUOTE",{});var zu=s(gs);bs=a(zu,"BLOCKQUOTE",{});var Bu=s(bs);ks=a(Bu,"BLOCKQUOTE",{});var Fu=s(ks);ys=a(Fu,"P",{});var qu=s(ys);Zc=l(qu,"from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),qu.forEach(o),Fu.forEach(o),Bu.forEach(o),zu.forEach(o),ep=c(M),vs=a(M,"BLOCKQUOTE",{});var Eu=s(vs);Ts=a(Eu,"BLOCKQUOTE",{});var Mu=s(Ts);ws=a(Mu,"BLOCKQUOTE",{});var Cu=s(ws);Ss=a(Cu,"P",{});var ju=s(Ss);op=l(ju,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),ju.forEach(o),Cu.forEach(o),Mu.forEach(o),Eu.forEach(o),tp=c(M),$s=a(M,"BLOCKQUOTE",{});var Ou=s($s);xs=a(Ou,"BLOCKQUOTE",{});var Pu=s(xs);zs=a(Pu,"BLOCKQUOTE",{});var Lu=s(zs);Bs=a(Lu,"P",{});var Nu=s(Bs);np=l(Nu,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Nu.forEach(o),Lu.forEach(o),Pu.forEach(o),Ou.forEach(o),ap=c(M),Fs=a(M,"BLOCKQUOTE",{});var Iu=s(Fs);qs=a(Iu,"BLOCKQUOTE",{});var Au=s(qs);wn=a(Au,"BLOCKQUOTE",{});var dl=s(wn);Zo=a(dl,"H1",{class:!0});var il=s(Zo);et=a(il,"A",{id:!0,class:!0,href:!0});var Du=s(et);Es=a(Du,"SPAN",{});var Gu=s(Es);v(Sn.$$.fragment,Gu),Gu.forEach(o),Du.forEach(o),sp=c(il),Ms=a(il,"SPAN",{});var Uu=s(Ms);rp=l(Uu,"Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),Uu.forEach(o),il.forEach(o),lp=c(dl),Cs=a(dl,"P",{});var Wu=s(Cs);dp=l(Wu,"print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),Wu.forEach(o),dl.forEach(o),Au.forEach(o),Iu.forEach(o),ip=c(M),js=a(M,"P",{});var Ru=s(js);cp=l(Ru,"Mask filling example:"),Ru.forEach(o),pp=c(M),Os=a(M,"BLOCKQUOTE",{});var Hu=s(Os);Ps=a(Hu,"BLOCKQUOTE",{});var Ku=s(Ps);Ls=a(Ku,"BLOCKQUOTE",{});var Qu=s(Ls);Ns=a(Qu,"P",{});var Vu=s(Ns);mp=l(Vu,`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),Vu.forEach(o),Qu.forEach(o),Ku.forEach(o),Hu.forEach(o),up=c(M),Is=a(M,"BLOCKQUOTE",{});var Ju=s(Is);As=a(Ju,"BLOCKQUOTE",{});var Xu=s(As);Ds=a(Xu,"BLOCKQUOTE",{});var Yu=s(Ds);Gs=a(Yu,"P",{});var Zu=s(Gs);hp=l(Zu,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Zu.forEach(o),Yu.forEach(o),Xu.forEach(o),Ju.forEach(o),fp=c(M),Us=a(M,"BLOCKQUOTE",{});var eh=s(Us);Ws=a(eh,"BLOCKQUOTE",{});var oh=s(Ws);Rs=a(oh,"BLOCKQUOTE",{});var th=s(Rs);Hs=a(th,"P",{});var nh=s(Hs);_p=l(nh,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),nh.forEach(o),th.forEach(o),oh.forEach(o),eh.forEach(o),gp=c(M),Ks=a(M,"BLOCKQUOTE",{});var ah=s(Ks);Qs=a(ah,"BLOCKQUOTE",{});var sh=s(Qs);Vs=a(sh,"BLOCKQUOTE",{});var rh=s(Vs);Js=a(rh,"P",{});var lh=s(Js);bp=l(lh,"tokenizer.decode(predictions).split()"),lh.forEach(o),rh.forEach(o),sh.forEach(o),ah.forEach(o),M.forEach(o),kp=c(ne),ot=a(ne,"DIV",{class:!0});var cl=s(ot);v($n.$$.fragment,cl),yp=c(cl),v(tt.$$.fragment,cl),cl.forEach(o),vp=c(ne),nt=a(ne,"DIV",{class:!0});var pl=s(nt);v(xn.$$.fragment,pl),Tp=c(pl),v(at.$$.fragment,pl),pl.forEach(o),ne.forEach(o),this.h()},h(){m(p,"name","hf:doc:metadata"),m(p,"content",JSON.stringify(Eh)),m(u,"id","blenderbot-small"),m(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(u,"href","#blenderbot-small"),m(f,"class","relative group"),m(W,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),m(R,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),m(Q,"href","https://huggingface.co/facebook/blenderbot-90M"),m(Q,"rel","nofollow"),m(Z,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotModel"),m(he,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),m(D,"id","overview"),m(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(D,"href","#overview"),m(J,"class","relative group"),m(de,"href","https://arxiv.org/pdf/2004.13637.pdf"),m(de,"rel","nofollow"),m(ye,"href","https://huggingface.co/patrickvonplaten"),m(ye,"rel","nofollow"),m(G,"href","https://github.com/facebookresearch/ParlAI"),m(G,"rel","nofollow"),m(fe,"id","transformers.BlenderbotSmallConfig"),m(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(fe,"href","#transformers.BlenderbotSmallConfig"),m(ce,"class","relative group"),m(En,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),m(ht,"href","https://huggingface.co/facebook/blenderbot_small-90M"),m(ht,"rel","nofollow"),m(Mn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Cn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(So,"id","transformers.BlenderbotSmallTokenizer"),m(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(So,"href","#transformers.BlenderbotSmallTokenizer"),m(ro,"class","relative group"),m(jn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Pn,"href","../glossary#token-type-ids"),m(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xo,"id","transformers.BlenderbotSmallTokenizerFast"),m(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(xo,"href","#transformers.BlenderbotSmallTokenizerFast"),m(io,"class","relative group"),m(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Bo,"id","transformers.BlenderbotSmallModel"),m(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Bo,"href","#transformers.BlenderbotSmallModel"),m(co,"class","relative group"),m(Nn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(qt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(qt,"rel","nofollow"),m(In,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),m(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Eo,"id","transformers.BlenderbotSmallForConditionalGeneration"),m(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Eo,"href","#transformers.BlenderbotSmallForConditionalGeneration"),m(mo,"class","relative group"),m(An,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Pt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Pt,"rel","nofollow"),m(Dn,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),m(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(jo,"id","transformers.BlenderbotSmallForCausalLM"),m(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(jo,"href","#transformers.BlenderbotSmallForCausalLM"),m(ho,"class","relative group"),m(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Lo,"id","transformers.TFBlenderbotSmallModel"),m(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Lo,"href","#transformers.TFBlenderbotSmallModel"),m(_o,"class","relative group"),m(Gn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(Rt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Rt,"rel","nofollow"),m(Un,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Do,"id","transformers.TFBlenderbotSmallForConditionalGeneration"),m(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Do,"href","#transformers.TFBlenderbotSmallForConditionalGeneration"),m(bo,"class","relative group"),m(Wn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(Xt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Xt,"rel","nofollow"),m(Rn,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallForConditionalGeneration"),m(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Wo,"id","transformers.FlaxBlenderbotSmallModel"),m(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Wo,"href","#transformers.FlaxBlenderbotSmallModel"),m(yo,"class","relative group"),m(Hn,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(an,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),m(an,"rel","nofollow"),m(sn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(sn,"rel","nofollow"),m(rn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(rn,"rel","nofollow"),m(ln,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(ln,"rel","nofollow"),m(dn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(dn,"rel","nofollow"),m(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xo,"id","transformers.FlaxBlenderbotSmallForConditionalGeneration"),m(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Xo,"href","#transformers.FlaxBlenderbotSmallForConditionalGeneration"),m(vo,"class","relative group"),m(Kn,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(gn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),m(gn,"rel","nofollow"),m(bn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(bn,"rel","nofollow"),m(kn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(kn,"rel","nofollow"),m(yn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(yn,"rel","nofollow"),m(vn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(vn,"rel","nofollow"),m(et,"id","generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),m(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(et,"href","#generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),m(Zo,"class","relative group"),m(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,p),_(t,k,g),_(t,f,g),e(f,u),e(u,b),T(d,b,null),e(f,h),e(f,F),e(F,Ce),_(t,ue,g),_(t,z,g),e(z,je),e(z,W),e(W,Oe),e(z,Pe),e(z,R),e(R,Le),e(z,Ne),e(z,Q),e(Q,V),e(z,Ie),e(z,Z),e(Z,j),e(z,L),e(z,he),e(he,ae),_(t,ze,g),_(t,J,g),e(J,D),e(D,be),T(se,be,null),e(J,N),e(J,ke),e(ke,re),_(t,Be,g),_(t,ee,g),e(ee,le),e(ee,de),e(de,Ae),e(ee,X),_(t,Fe,g),_(t,H,g),e(H,De),_(t,x,g),_(t,q,g),e(q,ie),e(ie,Ze),_(t,Re,g),_(t,O,g),e(O,eo),e(O,ye),e(ye,oo),e(O,Y),e(O,G),e(G,to),e(O,no),_(t,oe,g),_(t,ce,g),e(ce,fe),e(fe,ve),T(Te,ve,null),e(ce,ml),e(ce,ra),e(ra,ul),_(t,cr,g),_(t,we,g),T(ut,we,null),e(we,hl),e(we,ao),e(ao,fl),e(ao,En),e(En,_l),e(ao,gl),e(ao,ht),e(ht,bl),e(ao,kl),e(we,yl),e(we,so),e(so,vl),e(so,Mn),e(Mn,Tl),e(so,wl),e(so,Cn),e(Cn,Sl),e(so,$l),e(we,xl),T(wo,we,null),_(t,pr,g),_(t,ro,g),e(ro,So),e(So,la),T(ft,la,null),e(ro,zl),e(ro,da),e(da,Bl),_(t,mr,g),_(t,U,g),T(_t,U,null),e(U,Fl),e(U,ia),e(ia,ql),e(U,El),e(U,gt),e(gt,Ml),e(gt,jn),e(jn,Cl),e(gt,jl),e(U,Ol),e(U,He),T(bt,He,null),e(He,Pl),e(He,ca),e(ca,Ll),e(He,Nl),e(He,pa),e(pa,Il),e(U,Al),e(U,$o),T(kt,$o,null),e($o,Dl),e($o,lo),e(lo,Gl),e(lo,ma),e(ma,Ul),e(lo,Wl),e(lo,ua),e(ua,Rl),e(lo,Hl),e(U,Kl),e(U,Ke),T(yt,Ke,null),e(Ke,Ql),e(Ke,On),e(On,Vl),e(On,Pn),e(Pn,Jl),e(Ke,Xl),e(Ke,ha),e(ha,Yl),e(U,Zl),e(U,Ln),T(vt,Ln,null),_(t,ur,g),_(t,io,g),e(io,xo),e(xo,fa),T(Tt,fa,null),e(io,ed),e(io,_a),e(_a,od),_(t,hr,g),_(t,Ge,g),T(wt,Ge,null),e(Ge,td),e(Ge,St),e(St,nd),e(St,ga),e(ga,ad),e(St,sd),e(Ge,rd),e(Ge,zo),T($t,zo,null),e(zo,ld),e(zo,ba),e(ba,dd),_(t,fr,g),_(t,co,g),e(co,Bo),e(Bo,ka),T(xt,ka,null),e(co,id),e(co,ya),e(ya,cd),_(t,_r,g),_(t,Se,g),T(zt,Se,null),e(Se,pd),e(Se,Bt),e(Bt,md),e(Bt,Nn),e(Nn,ud),e(Bt,hd),e(Se,fd),e(Se,Ft),e(Ft,_d),e(Ft,qt),e(qt,gd),e(Ft,bd),e(Se,kd),e(Se,qe),T(Et,qe,null),e(qe,yd),e(qe,po),e(po,vd),e(po,In),e(In,Td),e(po,wd),e(po,va),e(va,Sd),e(po,$d),e(qe,xd),T(Fo,qe,null),e(qe,zd),T(qo,qe,null),_(t,gr,g),_(t,mo,g),e(mo,Eo),e(Eo,Ta),T(Mt,Ta,null),e(mo,Bd),e(mo,wa),e(wa,Fd),_(t,br,g),_(t,$e,g),T(Ct,$e,null),e($e,qd),e($e,jt),e(jt,Ed),e(jt,An),e(An,Md),e(jt,Cd),e($e,jd),e($e,Ot),e(Ot,Od),e(Ot,Pt),e(Pt,Pd),e(Ot,Ld),e($e,Nd),e($e,Ee),T(Lt,Ee,null),e(Ee,Id),e(Ee,uo),e(uo,Ad),e(uo,Dn),e(Dn,Dd),e(uo,Gd),e(uo,Sa),e(Sa,Ud),e(uo,Wd),e(Ee,Rd),T(Mo,Ee,null),e(Ee,Hd),T(Co,Ee,null),_(t,kr,g),_(t,ho,g),e(ho,jo),e(jo,$a),T(Nt,$a,null),e(ho,Kd),e(ho,xa),e(xa,Qd),_(t,yr,g),_(t,fo,g),T(It,fo,null),e(fo,Vd),e(fo,Oo),T(At,Oo,null),e(Oo,Jd),T(Po,Oo,null),_(t,vr,g),_(t,_o,g),e(_o,Lo),e(Lo,za),T(Dt,za,null),e(_o,Xd),e(_o,Ba),e(Ba,Yd),_(t,Tr,g),_(t,pe,g),T(Gt,pe,null),e(pe,Zd),e(pe,Ut),e(Ut,ei),e(Ut,Gn),e(Gn,oi),e(Ut,ti),e(pe,ni),e(pe,Wt),e(Wt,ai),e(Wt,Rt),e(Rt,si),e(Wt,ri),e(pe,li),T(No,pe,null),e(pe,di),e(pe,Me),T(Ht,Me,null),e(Me,ii),e(Me,go),e(go,ci),e(go,Un),e(Un,pi),e(go,mi),e(go,Fa),e(Fa,ui),e(go,hi),e(Me,fi),T(Io,Me,null),e(Me,_i),T(Ao,Me,null),_(t,wr,g),_(t,bo,g),e(bo,Do),e(Do,qa),T(Kt,qa,null),e(bo,gi),e(bo,Ea),e(Ea,bi),_(t,Sr,g),_(t,me,g),T(Qt,me,null),e(me,ki),e(me,Vt),e(Vt,yi),e(Vt,Wn),e(Wn,vi),e(Vt,Ti),e(me,wi),e(me,Jt),e(Jt,Si),e(Jt,Xt),e(Xt,$i),e(Jt,xi),e(me,zi),T(Go,me,null),e(me,Bi),e(me,P),T(Yt,P,null),e(P,Fi),e(P,ko),e(ko,qi),e(ko,Rn),e(Rn,Ei),e(ko,Mi),e(ko,Ma),e(Ma,Ci),e(ko,ji),e(P,Oi),T(Uo,P,null),e(P,Pi),e(P,Ca),e(Ca,Li),e(P,Ni),e(P,ja),e(ja,Oa),e(Oa,Pa),e(Pa,La),e(La,Ii),e(P,Ai),e(P,Na),e(Na,Ia),e(Ia,Aa),e(Aa,Da),e(Da,Di),e(P,Gi),e(P,Ga),e(Ga,Ua),e(Ua,Wa),e(Wa,Ra),e(Ra,Ui),e(P,Wi),e(P,Ha),e(Ha,Ka),e(Ka,Qa),e(Qa,Zt),e(Zt,Ri),e(Zt,Va),e(Va,Hi),e(Zt,Ki),e(P,Qi),e(P,Ja),e(Ja,Xa),e(Xa,Ya),e(Ya,Za),e(Za,Vi),_(t,$r,g),_(t,yo,g),e(yo,Wo),e(Wo,es),T(en,es,null),e(yo,Ji),e(yo,os),e(os,Xi),_(t,xr,g),_(t,I,g),T(on,I,null),e(I,Yi),e(I,tn),e(tn,Zi),e(tn,Hn),e(Hn,ec),e(tn,oc),e(I,tc),e(I,nn),e(nn,nc),e(nn,an),e(an,ac),e(nn,sc),e(I,rc),e(I,ts),e(ts,lc),e(I,dc),e(I,Ue),e(Ue,ns),e(ns,sn),e(sn,ic),e(Ue,cc),e(Ue,as),e(as,rn),e(rn,pc),e(Ue,mc),e(Ue,ss),e(ss,ln),e(ln,uc),e(Ue,hc),e(Ue,rs),e(rs,dn),e(dn,fc),e(I,_c),e(I,Ro),T(cn,Ro,null),e(Ro,gc),T(Ho,Ro,null),e(I,bc),e(I,Ko),T(pn,Ko,null),e(Ko,kc),T(Qo,Ko,null),e(I,yc),e(I,Vo),T(mn,Vo,null),e(Vo,vc),T(Jo,Vo,null),_(t,zr,g),_(t,vo,g),e(vo,Xo),e(Xo,ls),T(un,ls,null),e(vo,Tc),e(vo,ds),e(ds,wc),_(t,Br,g),_(t,A,g),T(hn,A,null),e(A,Sc),e(A,fn),e(fn,$c),e(fn,Kn),e(Kn,xc),e(fn,zc),e(A,Bc),e(A,_n),e(_n,Fc),e(_n,gn),e(gn,qc),e(_n,Ec),e(A,Mc),e(A,is),e(is,Cc),e(A,jc),e(A,We),e(We,cs),e(cs,bn),e(bn,Oc),e(We,Pc),e(We,ps),e(ps,kn),e(kn,Lc),e(We,Nc),e(We,ms),e(ms,yn),e(yn,Ic),e(We,Ac),e(We,us),e(us,vn),e(vn,Dc),e(A,Gc),e(A,E),T(Tn,E,null),e(E,Uc),e(E,To),e(To,Wc),e(To,hs),e(hs,Rc),e(To,Hc),e(To,fs),e(fs,Kc),e(To,Qc),e(E,Vc),T(Yo,E,null),e(E,Jc),e(E,_s),e(_s,Xc),e(E,Yc),e(E,gs),e(gs,bs),e(bs,ks),e(ks,ys),e(ys,Zc),e(E,ep),e(E,vs),e(vs,Ts),e(Ts,ws),e(ws,Ss),e(Ss,op),e(E,tp),e(E,$s),e($s,xs),e(xs,zs),e(zs,Bs),e(Bs,np),e(E,ap),e(E,Fs),e(Fs,qs),e(qs,wn),e(wn,Zo),e(Zo,et),e(et,Es),T(Sn,Es,null),e(Zo,sp),e(Zo,Ms),e(Ms,rp),e(wn,lp),e(wn,Cs),e(Cs,dp),e(E,ip),e(E,js),e(js,cp),e(E,pp),e(E,Os),e(Os,Ps),e(Ps,Ls),e(Ls,Ns),e(Ns,mp),e(E,up),e(E,Is),e(Is,As),e(As,Ds),e(Ds,Gs),e(Gs,hp),e(E,fp),e(E,Us),e(Us,Ws),e(Ws,Rs),e(Rs,Hs),e(Hs,_p),e(E,gp),e(E,Ks),e(Ks,Qs),e(Qs,Vs),e(Vs,Js),e(Js,bp),e(A,kp),e(A,ot),T($n,ot,null),e(ot,yp),T(tt,ot,null),e(A,vp),e(A,nt),T(xn,nt,null),e(nt,Tp),T(at,nt,null),Fr=!0},p(t,[g]){const zn={};g&2&&(zn.$$scope={dirty:g,ctx:t}),wo.$set(zn);const Xs={};g&2&&(Xs.$$scope={dirty:g,ctx:t}),Fo.$set(Xs);const Ys={};g&2&&(Ys.$$scope={dirty:g,ctx:t}),qo.$set(Ys);const Zs={};g&2&&(Zs.$$scope={dirty:g,ctx:t}),Mo.$set(Zs);const _e={};g&2&&(_e.$$scope={dirty:g,ctx:t}),Co.$set(_e);const er={};g&2&&(er.$$scope={dirty:g,ctx:t}),Po.$set(er);const or={};g&2&&(or.$$scope={dirty:g,ctx:t}),No.$set(or);const tr={};g&2&&(tr.$$scope={dirty:g,ctx:t}),Io.$set(tr);const nr={};g&2&&(nr.$$scope={dirty:g,ctx:t}),Ao.$set(nr);const ar={};g&2&&(ar.$$scope={dirty:g,ctx:t}),Go.$set(ar);const Bn={};g&2&&(Bn.$$scope={dirty:g,ctx:t}),Uo.$set(Bn);const sr={};g&2&&(sr.$$scope={dirty:g,ctx:t}),Ho.$set(sr);const rr={};g&2&&(rr.$$scope={dirty:g,ctx:t}),Qo.$set(rr);const lr={};g&2&&(lr.$$scope={dirty:g,ctx:t}),Jo.$set(lr);const Fn={};g&2&&(Fn.$$scope={dirty:g,ctx:t}),Yo.$set(Fn);const dr={};g&2&&(dr.$$scope={dirty:g,ctx:t}),tt.$set(dr);const ir={};g&2&&(ir.$$scope={dirty:g,ctx:t}),at.$set(ir)},i(t){Fr||(w(d.$$.fragment,t),w(se.$$.fragment,t),w(Te.$$.fragment,t),w(ut.$$.fragment,t),w(wo.$$.fragment,t),w(ft.$$.fragment,t),w(_t.$$.fragment,t),w(bt.$$.fragment,t),w(kt.$$.fragment,t),w(yt.$$.fragment,t),w(vt.$$.fragment,t),w(Tt.$$.fragment,t),w(wt.$$.fragment,t),w($t.$$.fragment,t),w(xt.$$.fragment,t),w(zt.$$.fragment,t),w(Et.$$.fragment,t),w(Fo.$$.fragment,t),w(qo.$$.fragment,t),w(Mt.$$.fragment,t),w(Ct.$$.fragment,t),w(Lt.$$.fragment,t),w(Mo.$$.fragment,t),w(Co.$$.fragment,t),w(Nt.$$.fragment,t),w(It.$$.fragment,t),w(At.$$.fragment,t),w(Po.$$.fragment,t),w(Dt.$$.fragment,t),w(Gt.$$.fragment,t),w(No.$$.fragment,t),w(Ht.$$.fragment,t),w(Io.$$.fragment,t),w(Ao.$$.fragment,t),w(Kt.$$.fragment,t),w(Qt.$$.fragment,t),w(Go.$$.fragment,t),w(Yt.$$.fragment,t),w(Uo.$$.fragment,t),w(en.$$.fragment,t),w(on.$$.fragment,t),w(cn.$$.fragment,t),w(Ho.$$.fragment,t),w(pn.$$.fragment,t),w(Qo.$$.fragment,t),w(mn.$$.fragment,t),w(Jo.$$.fragment,t),w(un.$$.fragment,t),w(hn.$$.fragment,t),w(Tn.$$.fragment,t),w(Yo.$$.fragment,t),w(Sn.$$.fragment,t),w($n.$$.fragment,t),w(tt.$$.fragment,t),w(xn.$$.fragment,t),w(at.$$.fragment,t),Fr=!0)},o(t){S(d.$$.fragment,t),S(se.$$.fragment,t),S(Te.$$.fragment,t),S(ut.$$.fragment,t),S(wo.$$.fragment,t),S(ft.$$.fragment,t),S(_t.$$.fragment,t),S(bt.$$.fragment,t),S(kt.$$.fragment,t),S(yt.$$.fragment,t),S(vt.$$.fragment,t),S(Tt.$$.fragment,t),S(wt.$$.fragment,t),S($t.$$.fragment,t),S(xt.$$.fragment,t),S(zt.$$.fragment,t),S(Et.$$.fragment,t),S(Fo.$$.fragment,t),S(qo.$$.fragment,t),S(Mt.$$.fragment,t),S(Ct.$$.fragment,t),S(Lt.$$.fragment,t),S(Mo.$$.fragment,t),S(Co.$$.fragment,t),S(Nt.$$.fragment,t),S(It.$$.fragment,t),S(At.$$.fragment,t),S(Po.$$.fragment,t),S(Dt.$$.fragment,t),S(Gt.$$.fragment,t),S(No.$$.fragment,t),S(Ht.$$.fragment,t),S(Io.$$.fragment,t),S(Ao.$$.fragment,t),S(Kt.$$.fragment,t),S(Qt.$$.fragment,t),S(Go.$$.fragment,t),S(Yt.$$.fragment,t),S(Uo.$$.fragment,t),S(en.$$.fragment,t),S(on.$$.fragment,t),S(cn.$$.fragment,t),S(Ho.$$.fragment,t),S(pn.$$.fragment,t),S(Qo.$$.fragment,t),S(mn.$$.fragment,t),S(Jo.$$.fragment,t),S(un.$$.fragment,t),S(hn.$$.fragment,t),S(Tn.$$.fragment,t),S(Yo.$$.fragment,t),S(Sn.$$.fragment,t),S($n.$$.fragment,t),S(tt.$$.fragment,t),S(xn.$$.fragment,t),S(at.$$.fragment,t),Fr=!1},d(t){o(p),t&&o(k),t&&o(f),$(d),t&&o(ue),t&&o(z),t&&o(ze),t&&o(J),$(se),t&&o(Be),t&&o(ee),t&&o(Fe),t&&o(H),t&&o(x),t&&o(q),t&&o(Re),t&&o(O),t&&o(oe),t&&o(ce),$(Te),t&&o(cr),t&&o(we),$(ut),$(wo),t&&o(pr),t&&o(ro),$(ft),t&&o(mr),t&&o(U),$(_t),$(bt),$(kt),$(yt),$(vt),t&&o(ur),t&&o(io),$(Tt),t&&o(hr),t&&o(Ge),$(wt),$($t),t&&o(fr),t&&o(co),$(xt),t&&o(_r),t&&o(Se),$(zt),$(Et),$(Fo),$(qo),t&&o(gr),t&&o(mo),$(Mt),t&&o(br),t&&o($e),$(Ct),$(Lt),$(Mo),$(Co),t&&o(kr),t&&o(ho),$(Nt),t&&o(yr),t&&o(fo),$(It),$(At),$(Po),t&&o(vr),t&&o(_o),$(Dt),t&&o(Tr),t&&o(pe),$(Gt),$(No),$(Ht),$(Io),$(Ao),t&&o(wr),t&&o(bo),$(Kt),t&&o(Sr),t&&o(me),$(Qt),$(Go),$(Yt),$(Uo),t&&o($r),t&&o(yo),$(en),t&&o(xr),t&&o(I),$(on),$(cn),$(Ho),$(pn),$(Qo),$(mn),$(Jo),t&&o(zr),t&&o(vo),$(un),t&&o(Br),t&&o(A),$(hn),$(Tn),$(Yo),$(Sn),$($n),$(tt),$(xn),$(at)}}}const Eh={local:"blenderbot-small",sections:[{local:"overview",title:"Overview"},{local:"transformers.BlenderbotSmallConfig",title:"BlenderbotSmallConfig"},{local:"transformers.BlenderbotSmallTokenizer",title:"BlenderbotSmallTokenizer"},{local:"transformers.BlenderbotSmallTokenizerFast",title:"BlenderbotSmallTokenizerFast"},{local:"transformers.BlenderbotSmallModel",title:"BlenderbotSmallModel"},{local:"transformers.BlenderbotSmallForConditionalGeneration",title:"BlenderbotSmallForConditionalGeneration"},{local:"transformers.BlenderbotSmallForCausalLM",title:"BlenderbotSmallForCausalLM"},{local:"transformers.TFBlenderbotSmallModel",title:"TFBlenderbotSmallModel"},{local:"transformers.TFBlenderbotSmallForConditionalGeneration",title:"TFBlenderbotSmallForConditionalGeneration"},{local:"transformers.FlaxBlenderbotSmallModel",title:"FlaxBlenderbotSmallModel"},{local:"transformers.FlaxBlenderbotSmallForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot Small"};function Mh(B){return mh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ih extends dh{constructor(p){super();ih(this,p,Mh,qh,ch,{})}}export{Ih as default,Eh as metadata};
