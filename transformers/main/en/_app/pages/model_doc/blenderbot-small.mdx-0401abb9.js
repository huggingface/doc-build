import{S as du,i as iu,s as cu,e as n,k as i,w as v,t as r,M as pu,c as a,d as o,m as c,a as s,x as y,h as l,b as m,F as e,g as _,y as T,q as w,o as $,B as S,v as mu,L as Xe}from"../../chunks/vendor-6b77c823.js";import{T as qn}from"../../chunks/Tip-39098574.js";import{D as C}from"../../chunks/Docstring-1088f2fb.js";import{C as Ye}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as xe}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Je}from"../../chunks/ExampleCodeBlock-5212b321.js";function hu(z){let p,k,f,h,b;return h=new Ye({props:{code:`from transformers import BlenderbotSmallModel, BlenderbotSmallConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=n("p"),k=r("Example:"),f=i(),v(h.$$.fragment)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Example:"),u.forEach(o),f=c(d),y(h.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(h,d,u),b=!0},p:Xe,i(d){b||(w(h.$$.fragment,d),b=!0)},o(d){$(h.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),S(h,d)}}}function uu(z){let p,k,f,h,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),h=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(u,"CODE",{});var F=s(f);h=l(F,"Module"),F.forEach(o),b=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){_(d,p,u),e(p,k),e(p,f),e(f,h),e(p,b)},d(d){d&&o(p)}}}function fu(z){let p,k,f,h,b;return h=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallModel

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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">512</span>]`}}),{c(){p=n("p"),k=r("Example:"),f=i(),v(h.$$.fragment)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Example:"),u.forEach(o),f=c(d),y(h.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(h,d,u),b=!0},p:Xe,i(d){b||(w(h.$$.fragment,d),b=!0)},o(d){$(h.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),S(h,d)}}}function _u(z){let p,k,f,h,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),h=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(u,"CODE",{});var F=s(f);h=l(F,"Module"),F.forEach(o),b=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){_(d,p,u),e(p,k),e(p,f),e(f,h),e(p,b)},d(d){d&&o(p)}}}function gu(z){let p,k,f,h,b;return h=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForConditionalGeneration

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
Bot:  they eat a lot of carbs. carbs are high in fat, protein, and carbohydrates.</span>`}}),{c(){p=n("p"),k=r("Conversation example:"),f=i(),v(h.$$.fragment)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Conversation example:"),u.forEach(o),f=c(d),y(h.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(h,d,u),b=!0},p:Xe,i(d){b||(w(h.$$.fragment,d),b=!0)},o(d){$(h.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),S(h,d)}}}function bu(z){let p,k,f,h,b;return h=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, BlenderbotSmallForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){p=n("p"),k=r("Example:"),f=i(),v(h.$$.fragment)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Example:"),u.forEach(o),f=c(d),y(h.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(h,d,u),b=!0},p:Xe,i(d){b||(w(h.$$.fragment,d),b=!0)},o(d){$(h.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),S(h,d)}}}function ku(z){let p,k,f,h,b,d,u,F,Ce,he,B,je,W,Oe,Pe,R,Le,Ne,V,Q,Ie,Z,j,L,ue,ae,Be,J,D,be,se,N,ke,re,ze,ee,le,de,Ae,X,Fe,H,De;return{c(){p=n("p"),k=r("TF 2.0 models accepts two formats as inputs:"),f=i(),h=n("ul"),b=n("li"),d=r("having all inputs as keyword arguments (like PyTorch models), or"),u=i(),F=n("li"),Ce=r("having all inputs as a list, tuple or dict in the first positional arguments."),he=i(),B=n("p"),je=r("This second option is useful when using "),W=n("code"),Oe=r("tf.keras.Model.fit"),Pe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),Le=r("model(inputs)"),Ne=r("."),V=i(),Q=n("p"),Ie=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=i(),j=n("ul"),L=n("li"),ue=r("a single Tensor with "),ae=n("code"),Be=r("input_ids"),J=r(" only and nothing else: "),D=n("code"),be=r("model(input_ids)"),se=i(),N=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=n("code"),ze=r("model([input_ids, attention_mask])"),ee=r(" or "),le=n("code"),de=r("model([input_ids, attention_mask, token_type_ids])"),Ae=i(),X=n("li"),Fe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(x){p=a(x,"P",{});var q=s(p);k=l(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(o),f=c(x),h=a(x,"UL",{});var ie=s(h);b=a(ie,"LI",{});var Ze=s(b);d=l(Ze,"having all inputs as keyword arguments (like PyTorch models), or"),Ze.forEach(o),u=c(ie),F=a(ie,"LI",{});var Re=s(F);Ce=l(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(o),ie.forEach(o),he=c(x),B=a(x,"P",{});var O=s(B);je=l(O,"This second option is useful when using "),W=a(O,"CODE",{});var eo=s(W);Oe=l(eo,"tf.keras.Model.fit"),eo.forEach(o),Pe=l(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=a(O,"CODE",{});var ve=s(R);Le=l(ve,"model(inputs)"),ve.forEach(o),Ne=l(O,"."),O.forEach(o),V=c(x),Q=a(x,"P",{});var oo=s(Q);Ie=l(oo,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oo.forEach(o),Z=c(x),j=a(x,"UL",{});var Y=s(j);L=a(Y,"LI",{});var G=s(L);ue=l(G,"a single Tensor with "),ae=a(G,"CODE",{});var to=s(ae);Be=l(to,"input_ids"),to.forEach(o),J=l(G," only and nothing else: "),D=a(G,"CODE",{});var no=s(D);be=l(no,"model(input_ids)"),no.forEach(o),G.forEach(o),se=c(Y),N=a(Y,"LI",{});var oe=s(N);ke=l(oe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=a(oe,"CODE",{});var ce=s(re);ze=l(ce,"model([input_ids, attention_mask])"),ce.forEach(o),ee=l(oe," or "),le=a(oe,"CODE",{});var fe=s(le);de=l(fe,"model([input_ids, attention_mask, token_type_ids])"),fe.forEach(o),oe.forEach(o),Ae=c(Y),X=a(Y,"LI",{});var ye=s(X);Fe=l(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=a(ye,"CODE",{});var Te=s(H);De=l(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(o),ye.forEach(o),Y.forEach(o)},m(x,q){_(x,p,q),e(p,k),_(x,f,q),_(x,h,q),e(h,b),e(b,d),e(h,u),e(h,F),e(F,Ce),_(x,he,q),_(x,B,q),e(B,je),e(B,W),e(W,Oe),e(B,Pe),e(B,R),e(R,Le),e(B,Ne),_(x,V,q),_(x,Q,q),e(Q,Ie),_(x,Z,q),_(x,j,q),e(j,L),e(L,ue),e(L,ae),e(ae,Be),e(L,J),e(L,D),e(D,be),e(j,se),e(j,N),e(N,ke),e(N,re),e(re,ze),e(N,ee),e(N,le),e(le,de),e(j,Ae),e(j,X),e(X,Fe),e(X,H),e(H,De)},d(x){x&&o(p),x&&o(f),x&&o(h),x&&o(he),x&&o(B),x&&o(V),x&&o(Q),x&&o(Z),x&&o(j)}}}function vu(z){let p,k,f,h,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),h=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(u,"CODE",{});var F=s(f);h=l(F,"Module"),F.forEach(o),b=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){_(d,p,u),e(p,k),e(p,f),e(f,h),e(p,b)},d(d){d&&o(p)}}}function yu(z){let p,k,f,h,b;return h=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=r("Example:"),f=i(),v(h.$$.fragment)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Example:"),u.forEach(o),f=c(d),y(h.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(h,d,u),b=!0},p:Xe,i(d){b||(w(h.$$.fragment,d),b=!0)},o(d){$(h.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),S(h,d)}}}function Tu(z){let p,k,f,h,b,d,u,F,Ce,he,B,je,W,Oe,Pe,R,Le,Ne,V,Q,Ie,Z,j,L,ue,ae,Be,J,D,be,se,N,ke,re,ze,ee,le,de,Ae,X,Fe,H,De;return{c(){p=n("p"),k=r("TF 2.0 models accepts two formats as inputs:"),f=i(),h=n("ul"),b=n("li"),d=r("having all inputs as keyword arguments (like PyTorch models), or"),u=i(),F=n("li"),Ce=r("having all inputs as a list, tuple or dict in the first positional arguments."),he=i(),B=n("p"),je=r("This second option is useful when using "),W=n("code"),Oe=r("tf.keras.Model.fit"),Pe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),Le=r("model(inputs)"),Ne=r("."),V=i(),Q=n("p"),Ie=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=i(),j=n("ul"),L=n("li"),ue=r("a single Tensor with "),ae=n("code"),Be=r("input_ids"),J=r(" only and nothing else: "),D=n("code"),be=r("model(input_ids)"),se=i(),N=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=n("code"),ze=r("model([input_ids, attention_mask])"),ee=r(" or "),le=n("code"),de=r("model([input_ids, attention_mask, token_type_ids])"),Ae=i(),X=n("li"),Fe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(x){p=a(x,"P",{});var q=s(p);k=l(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(o),f=c(x),h=a(x,"UL",{});var ie=s(h);b=a(ie,"LI",{});var Ze=s(b);d=l(Ze,"having all inputs as keyword arguments (like PyTorch models), or"),Ze.forEach(o),u=c(ie),F=a(ie,"LI",{});var Re=s(F);Ce=l(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(o),ie.forEach(o),he=c(x),B=a(x,"P",{});var O=s(B);je=l(O,"This second option is useful when using "),W=a(O,"CODE",{});var eo=s(W);Oe=l(eo,"tf.keras.Model.fit"),eo.forEach(o),Pe=l(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=a(O,"CODE",{});var ve=s(R);Le=l(ve,"model(inputs)"),ve.forEach(o),Ne=l(O,"."),O.forEach(o),V=c(x),Q=a(x,"P",{});var oo=s(Q);Ie=l(oo,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oo.forEach(o),Z=c(x),j=a(x,"UL",{});var Y=s(j);L=a(Y,"LI",{});var G=s(L);ue=l(G,"a single Tensor with "),ae=a(G,"CODE",{});var to=s(ae);Be=l(to,"input_ids"),to.forEach(o),J=l(G," only and nothing else: "),D=a(G,"CODE",{});var no=s(D);be=l(no,"model(input_ids)"),no.forEach(o),G.forEach(o),se=c(Y),N=a(Y,"LI",{});var oe=s(N);ke=l(oe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=a(oe,"CODE",{});var ce=s(re);ze=l(ce,"model([input_ids, attention_mask])"),ce.forEach(o),ee=l(oe," or "),le=a(oe,"CODE",{});var fe=s(le);de=l(fe,"model([input_ids, attention_mask, token_type_ids])"),fe.forEach(o),oe.forEach(o),Ae=c(Y),X=a(Y,"LI",{});var ye=s(X);Fe=l(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=a(ye,"CODE",{});var Te=s(H);De=l(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(o),ye.forEach(o),Y.forEach(o)},m(x,q){_(x,p,q),e(p,k),_(x,f,q),_(x,h,q),e(h,b),e(b,d),e(h,u),e(h,F),e(F,Ce),_(x,he,q),_(x,B,q),e(B,je),e(B,W),e(W,Oe),e(B,Pe),e(B,R),e(R,Le),e(B,Ne),_(x,V,q),_(x,Q,q),e(Q,Ie),_(x,Z,q),_(x,j,q),e(j,L),e(L,ue),e(L,ae),e(ae,Be),e(L,J),e(L,D),e(D,be),e(j,se),e(j,N),e(N,ke),e(N,re),e(re,ze),e(N,ee),e(N,le),e(le,de),e(j,Ae),e(j,X),e(X,Fe),e(X,H),e(H,De)},d(x){x&&o(p),x&&o(f),x&&o(h),x&&o(he),x&&o(B),x&&o(V),x&&o(Q),x&&o(Z),x&&o(j)}}}function wu(z){let p,k,f,h,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),h=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(u,"CODE",{});var F=s(f);h=l(F,"Module"),F.forEach(o),b=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){_(d,p,u),e(p,k),e(p,f),e(f,h),e(p,b)},d(d){d&&o(p)}}}function $u(z){let p,k,f,h,b;return h=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")
model = FlaxBlenderbotSmallModel.from_pretrained("facebook/blenderbot_small-90M")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=r("Example:"),f=i(),v(h.$$.fragment)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Example:"),u.forEach(o),f=c(d),y(h.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(h,d,u),b=!0},p:Xe,i(d){b||(w(h.$$.fragment,d),b=!0)},o(d){$(h.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),S(h,d)}}}function Su(z){let p,k,f,h,b;return h=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),k=r("Example:"),f=i(),v(h.$$.fragment)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Example:"),u.forEach(o),f=c(d),y(h.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(h,d,u),b=!0},p:Xe,i(d){b||(w(h.$$.fragment,d),b=!0)},o(d){$(h.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),S(h,d)}}}function xu(z){let p,k,f,h,b;return h=new Ye({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("p"),k=r("Example:"),f=i(),v(h.$$.fragment)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Example:"),u.forEach(o),f=c(d),y(h.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(h,d,u),b=!0},p:Xe,i(d){b||(w(h.$$.fragment,d),b=!0)},o(d){$(h.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),S(h,d)}}}function Bu(z){let p,k,f,h,b;return{c(){p=n("p"),k=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),h=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(u,"CODE",{});var F=s(f);h=l(F,"Module"),F.forEach(o),b=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){_(d,p,u),e(p,k),e(p,f),e(f,h),e(p,b)},d(d){d&&o(p)}}}function zu(z){let p,k,f,h,b;return h=new Ye({props:{code:`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained("facebook/blenderbot_small-90M")
tokenizer = BlenderbotSmallTokenizer.from_pretrained("facebook/blenderbot_small-90M")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotSmallTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=n("p"),k=r("Example:"),f=i(),v(h.$$.fragment)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Example:"),u.forEach(o),f=c(d),y(h.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(h,d,u),b=!0},p:Xe,i(d){b||(w(h.$$.fragment,d),b=!0)},o(d){$(h.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),S(h,d)}}}function Fu(z){let p,k,f,h,b;return h=new Ye({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=n("p"),k=r("Example:"),f=i(),v(h.$$.fragment)},l(d){p=a(d,"P",{});var u=s(p);k=l(u,"Example:"),u.forEach(o),f=c(d),y(h.$$.fragment,d)},m(d,u){_(d,p,u),e(p,k),_(d,f,u),T(h,d,u),b=!0},p:Xe,i(d){b||(w(h.$$.fragment,d),b=!0)},o(d){$(h.$$.fragment,d),b=!1},d(d){d&&o(p),d&&o(f),S(h,d)}}}function qu(z){let p,k,f,h,b,d,u,F,Ce,he,B,je,W,Oe,Pe,R,Le,Ne,V,Q,Ie,Z,j,L,ue,ae,Be,J,D,be,se,N,ke,re,ze,ee,le,de,Ae,X,Fe,H,De,x,q,ie,Ze,Re,O,eo,ve,oo,Y,G,to,no,oe,ce,fe,ye,Te,ml,ra,hl,cr,we,ht,ul,ao,fl,En,_l,gl,ut,bl,kl,vl,so,yl,Mn,Tl,wl,Cn,$l,Sl,xl,wo,pr,ro,$o,la,ft,Bl,da,zl,mr,U,_t,Fl,ia,ql,El,gt,Ml,jn,Cl,jl,Ol,He,bt,Pl,ca,Ll,Nl,pa,Il,Al,So,kt,Dl,lo,Gl,ma,Ul,Wl,ha,Rl,Hl,Kl,Ke,vt,Vl,On,Ql,Pn,Jl,Xl,ua,Yl,Zl,Ln,yt,hr,io,xo,fa,Tt,ed,_a,od,ur,Ge,wt,td,$t,nd,ga,ad,sd,rd,Bo,St,ld,ba,dd,fr,co,zo,ka,xt,id,va,cd,_r,$e,Bt,pd,zt,md,Nn,hd,ud,fd,Ft,_d,qt,gd,bd,kd,qe,Et,vd,po,yd,In,Td,wd,ya,$d,Sd,xd,Fo,Bd,qo,gr,mo,Eo,Ta,Mt,zd,wa,Fd,br,Se,Ct,qd,jt,Ed,An,Md,Cd,jd,Ot,Od,Pt,Pd,Ld,Nd,Ee,Lt,Id,ho,Ad,Dn,Dd,Gd,$a,Ud,Wd,Rd,Mo,Hd,Co,kr,uo,jo,Sa,Nt,Kd,xa,Vd,vr,fo,It,Qd,Oo,At,Jd,Po,yr,_o,Lo,Ba,Dt,Xd,za,Yd,Tr,pe,Gt,Zd,Ut,ei,Gn,oi,ti,ni,Wt,ai,Rt,si,ri,li,No,di,Me,Ht,ii,go,ci,Un,pi,mi,Fa,hi,ui,fi,Io,_i,Ao,wr,bo,Do,qa,Kt,gi,Ea,bi,$r,me,Vt,ki,Qt,vi,Wn,yi,Ti,wi,Jt,$i,Xt,Si,xi,Bi,Go,zi,P,Yt,Fi,ko,qi,Rn,Ei,Mi,Ma,Ci,ji,Oi,Uo,Pi,Ca,Li,Ni,ja,Oa,Pa,La,Ii,Ai,Na,Ia,Aa,Da,Di,Gi,Ga,Ua,Wa,Ra,Ui,Wi,Ha,Ka,Va,Zt,Ri,Qa,Hi,Ki,Vi,Ja,Xa,Ya,Za,Qi,Sr,vo,Wo,es,en,Ji,os,Xi,xr,I,on,Yi,tn,Zi,Hn,ec,oc,tc,nn,nc,an,ac,sc,rc,ts,lc,dc,Ue,ns,sn,ic,cc,as,rn,pc,mc,ss,ln,hc,uc,rs,dn,fc,_c,Ro,cn,gc,Ho,bc,Ko,pn,kc,Vo,vc,Qo,mn,yc,Jo,Br,yo,Xo,ls,hn,Tc,ds,wc,zr,A,un,$c,fn,Sc,Kn,xc,Bc,zc,_n,Fc,gn,qc,Ec,Mc,is,Cc,jc,We,cs,bn,Oc,Pc,ps,kn,Lc,Nc,ms,vn,Ic,Ac,hs,yn,Dc,Gc,E,Tn,Uc,To,Wc,us,Rc,Hc,fs,Kc,Vc,Qc,Yo,Jc,_s,Xc,Yc,gs,bs,ks,vs,Zc,ep,ys,Ts,ws,$s,op,tp,Ss,xs,Bs,zs,np,ap,Fs,qs,wn,Zo,et,Es,$n,sp,Ms,rp,lp,Cs,dp,ip,js,cp,pp,Os,Ps,Ls,Ns,mp,hp,Is,As,Ds,Gs,up,fp,Us,Ws,Rs,Hs,_p,gp,Ks,Vs,Qs,Js,bp,kp,ot,Sn,vp,tt,yp,nt,xn,Tp,at,Fr;return d=new xe({}),se=new xe({}),Te=new xe({}),ht=new C({props:{name:"class transformers.BlenderbotSmallConfig",anchor:"transformers.BlenderbotSmallConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 512"},{name:"encoder_layers",val:" = 8"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 8"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/configuration_blenderbot_small.py#L36"}}),wo=new Je({props:{anchor:"transformers.BlenderbotSmallConfig.example",$$slots:{default:[hu]},$$scope:{ctx:z}}}),ft=new xe({}),_t=new C({props:{name:"class transformers.BlenderbotSmallTokenizer",anchor:"transformers.BlenderbotSmallTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"bos_token",val:" = '__start__'"},{name:"eos_token",val:" = '__end__'"},{name:"unk_token",val:" = '__unk__'"},{name:"pad_token",val:" = '__null__'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BlenderbotSmallTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BlenderbotSmallTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__start__&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__end__&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__unk__&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BlenderbotSmallTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__pad__&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.
**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L67"}}),bt=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/tokenization_utils_base.py#L2879",returnDescription:`
<p>The model input with special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),kt=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List"},{name:"token_ids_1",val:": typing.Optional[typing.List] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/tokenization_utils.py#L842",returnDescription:`
<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p>A list of integers in the range [0, 1]</p>
`}}),vt=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/tokenization_utils_base.py#L2859",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),yt=new C({props:{name:"save_vocabulary",anchor:"transformers.BlenderbotSmallTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L209"}}),Tt=new xe({}),wt=new C({props:{name:"class transformers.BlenderbotSmallTokenizerFast",anchor:"transformers.BlenderbotSmallTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L50"}}),St=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L96",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xt=new xe({}),Bt=new C({props:{name:"class transformers.BlenderbotSmallModel",anchor:"transformers.BlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1076"}}),Et=new C({props:{name:"forward",anchor:"transformers.BlenderbotSmallModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1103",returnDescription:`
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
`}}),Fo=new qn({props:{$$slots:{default:[uu]},$$scope:{ctx:z}}}),qo=new Je({props:{anchor:"transformers.BlenderbotSmallModel.forward.example",$$slots:{default:[fu]},$$scope:{ctx:z}}}),Mt=new xe({}),Ct=new C({props:{name:"class transformers.BlenderbotSmallForConditionalGeneration",anchor:"transformers.BlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1202"}}),Lt=new C({props:{name:"forward",anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_outputs.BaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1246",returnDescription:`
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
`}}),Mo=new qn({props:{$$slots:{default:[_u]},$$scope:{ctx:z}}}),Co=new Je({props:{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.example",$$slots:{default:[gu]},$$scope:{ctx:z}}}),Nt=new xe({}),It=new C({props:{name:"class transformers.BlenderbotSmallForCausalLM",anchor:"transformers.BlenderbotSmallForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1382"}}),At=new C({props:{name:"forward",anchor:"transformers.BlenderbotSmallForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1413",returnDescription:`
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
`}}),Po=new Je({props:{anchor:"transformers.BlenderbotSmallForCausalLM.forward.example",$$slots:{default:[bu]},$$scope:{ctx:z}}}),Dt=new xe({}),Gt=new C({props:{name:"class transformers.TFBlenderbotSmallModel",anchor:"transformers.TFBlenderbotSmallModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1111"}}),No=new qn({props:{$$slots:{default:[ku]},$$scope:{ctx:z}}}),Ht=new C({props:{name:"call",anchor:"transformers.TFBlenderbotSmallModel.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1123",returnDescription:`
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
`}}),Io=new qn({props:{$$slots:{default:[vu]},$$scope:{ctx:z}}}),Ao=new Je({props:{anchor:"transformers.TFBlenderbotSmallModel.call.example",$$slots:{default:[yu]},$$scope:{ctx:z}}}),Kt=new xe({}),Vt=new C({props:{name:"class transformers.TFBlenderbotSmallForConditionalGeneration",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1198"}}),Go=new qn({props:{$$slots:{default:[Tu]},$$scope:{ctx:z}}}),Yt=new C({props:{name:"call",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1231",returnDescription:`
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
`}}),Uo=new qn({props:{$$slots:{default:[wu]},$$scope:{ctx:z}}}),en=new xe({}),on=new C({props:{name:"class transformers.FlaxBlenderbotSmallModel",anchor:"transformers.FlaxBlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1215"}}),cn=new C({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1151",returnDescription:`
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
`}}),Ho=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallModel.__call__.example",$$slots:{default:[$u]},$$scope:{ctx:z}}}),pn=new C({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L972",returnDescription:`
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
`}}),Vo=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallModel.encode.example",$$slots:{default:[Su]},$$scope:{ctx:z}}}),mn=new C({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1035",returnDescription:`
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
`}}),Jo=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallModel.decode.example",$$slots:{default:[xu]},$$scope:{ctx:z}}}),hn=new xe({}),un=new C({props:{name:"class transformers.FlaxBlenderbotSmallForConditionalGeneration",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1303"}}),Tn=new C({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1151",returnDescription:`
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
`}}),Yo=new qn({props:{$$slots:{default:[Bu]},$$scope:{ctx:z}}}),$n=new xe({}),Sn=new C({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L972",returnDescription:`
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
`}}),tt=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.example",$$slots:{default:[zu]},$$scope:{ctx:z}}}),xn=new C({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallTokenizer">BlenderbotSmallTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1307",returnDescription:`
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
`}}),at=new Je({props:{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.example",$$slots:{default:[Fu]},$$scope:{ctx:z}}}),{c(){p=n("meta"),k=i(),f=n("h1"),h=n("a"),b=n("span"),v(d.$$.fragment),u=i(),F=n("span"),Ce=r("Blenderbot Small"),he=i(),B=n("p"),je=r("Note that "),W=n("a"),Oe=r("BlenderbotSmallModel"),Pe=r(` and
`),R=n("a"),Le=r("BlenderbotSmallForConditionalGeneration"),Ne=r(` are only used in combination with the checkpoint
`),V=n("a"),Q=r("facebook/blenderbot-90M"),Ie=r(`. Larger Blenderbot checkpoints should
instead be used with `),Z=n("a"),j=r("BlenderbotModel"),L=r(` and
`),ue=n("a"),ae=r("BlenderbotForConditionalGeneration"),Be=i(),J=n("h2"),D=n("a"),be=n("span"),v(se.$$.fragment),N=i(),ke=n("span"),re=r("Overview"),ze=i(),ee=n("p"),le=r("The Blender chatbot model was proposed in "),de=n("a"),Ae=r("Recipes for building an open-domain chatbot"),X=r(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Fe=i(),H=n("p"),De=r("The abstract of the paper is the following:"),x=i(),q=n("p"),ie=n("em"),Ze=r(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Re=i(),O=n("p"),eo=r("This model was contributed by "),ve=n("a"),oo=r("patrickvonplaten"),Y=r(`. The authors\u2019 code can be
found `),G=n("a"),to=r("here"),no=r(" ."),oe=i(),ce=n("h2"),fe=n("a"),ye=n("span"),v(Te.$$.fragment),ml=i(),ra=n("span"),hl=r("BlenderbotSmallConfig"),cr=i(),we=n("div"),v(ht.$$.fragment),ul=i(),ao=n("p"),fl=r("This is the configuration class to store the configuration of a "),En=n("a"),_l=r("BlenderbotSmallModel"),gl=r(`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),ut=n("a"),bl=r("facebook/blenderbot_small-90M"),kl=r(" architecture."),vl=i(),so=n("p"),yl=r("Configuration objects inherit from "),Mn=n("a"),Tl=r("PretrainedConfig"),wl=r(` and can be used to control the model outputs. Read the
documentation from `),Cn=n("a"),$l=r("PretrainedConfig"),Sl=r(" for more information."),xl=i(),v(wo.$$.fragment),pr=i(),ro=n("h2"),$o=n("a"),la=n("span"),v(ft.$$.fragment),Bl=i(),da=n("span"),zl=r("BlenderbotSmallTokenizer"),mr=i(),U=n("div"),v(_t.$$.fragment),Fl=i(),ia=n("p"),ql=r("Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),El=i(),gt=n("p"),Ml=r("This tokenizer inherits from "),jn=n("a"),Cl=r("PreTrainedTokenizer"),jl=r(` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Ol=i(),He=n("div"),v(bt.$$.fragment),Pl=i(),ca=n("p"),Ll=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Nl=i(),pa=n("p"),Il=r("This implementation does not add special tokens and this method should be overridden in a subclass."),Al=i(),So=n("div"),v(kt.$$.fragment),Dl=i(),lo=n("p"),Gl=r(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ma=n("code"),Ul=r("prepare_for_model"),Wl=r(" or "),ha=n("code"),Rl=r("encode_plus"),Hl=r(" methods."),Kl=i(),Ke=n("div"),v(vt.$$.fragment),Vl=i(),On=n("p"),Ql=r("Create the token type IDs corresponding to the sequences passed. "),Pn=n("a"),Jl=r(`What are token type
IDs?`),Xl=i(),ua=n("p"),Yl=r("Should be overridden in a subclass if the model has a special way of building those."),Zl=i(),Ln=n("div"),v(yt.$$.fragment),hr=i(),io=n("h2"),xo=n("a"),fa=n("span"),v(Tt.$$.fragment),ed=i(),_a=n("span"),od=r("BlenderbotSmallTokenizerFast"),ur=i(),Ge=n("div"),v(wt.$$.fragment),td=i(),$t=n("p"),nd=r("Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),ga=n("em"),ad=r("tokenizers"),sd=r(" library)."),rd=i(),Bo=n("div"),v(St.$$.fragment),ld=i(),ba=n("p"),dd=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),fr=i(),co=n("h2"),zo=n("a"),ka=n("span"),v(xt.$$.fragment),id=i(),va=n("span"),cd=r("BlenderbotSmallModel"),_r=i(),$e=n("div"),v(Bt.$$.fragment),pd=i(),zt=n("p"),md=r(`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=n("a"),hd=r("PreTrainedModel"),ud=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fd=i(),Ft=n("p"),_d=r("This model is also a PyTorch "),qt=n("a"),gd=r("torch.nn.Module"),bd=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kd=i(),qe=n("div"),v(Et.$$.fragment),vd=i(),po=n("p"),yd=r("The "),In=n("a"),Td=r("BlenderbotSmallModel"),wd=r(" forward method, overrides the "),ya=n("code"),$d=r("__call__"),Sd=r(" special method."),xd=i(),v(Fo.$$.fragment),Bd=i(),v(qo.$$.fragment),gr=i(),mo=n("h2"),Eo=n("a"),Ta=n("span"),v(Mt.$$.fragment),zd=i(),wa=n("span"),Fd=r("BlenderbotSmallForConditionalGeneration"),br=i(),Se=n("div"),v(Ct.$$.fragment),qd=i(),jt=n("p"),Ed=r(`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=n("a"),Md=r("PreTrainedModel"),Cd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jd=i(),Ot=n("p"),Od=r("This model is also a PyTorch "),Pt=n("a"),Pd=r("torch.nn.Module"),Ld=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nd=i(),Ee=n("div"),v(Lt.$$.fragment),Id=i(),ho=n("p"),Ad=r("The "),Dn=n("a"),Dd=r("BlenderbotSmallForConditionalGeneration"),Gd=r(" forward method, overrides the "),$a=n("code"),Ud=r("__call__"),Wd=r(" special method."),Rd=i(),v(Mo.$$.fragment),Hd=i(),v(Co.$$.fragment),kr=i(),uo=n("h2"),jo=n("a"),Sa=n("span"),v(Nt.$$.fragment),Kd=i(),xa=n("span"),Vd=r("BlenderbotSmallForCausalLM"),vr=i(),fo=n("div"),v(It.$$.fragment),Qd=i(),Oo=n("div"),v(At.$$.fragment),Jd=i(),v(Po.$$.fragment),yr=i(),_o=n("h2"),Lo=n("a"),Ba=n("span"),v(Dt.$$.fragment),Xd=i(),za=n("span"),Yd=r("TFBlenderbotSmallModel"),Tr=i(),pe=n("div"),v(Gt.$$.fragment),Zd=i(),Ut=n("p"),ei=r(`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=n("a"),oi=r("TFPreTrainedModel"),ti=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ni=i(),Wt=n("p"),ai=r("This model is also a "),Rt=n("a"),si=r("tf.keras.Model"),ri=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),li=i(),v(No.$$.fragment),di=i(),Me=n("div"),v(Ht.$$.fragment),ii=i(),go=n("p"),ci=r("The "),Un=n("a"),pi=r("TFBlenderbotSmallModel"),mi=r(" forward method, overrides the "),Fa=n("code"),hi=r("__call__"),ui=r(" special method."),fi=i(),v(Io.$$.fragment),_i=i(),v(Ao.$$.fragment),wr=i(),bo=n("h2"),Do=n("a"),qa=n("span"),v(Kt.$$.fragment),gi=i(),Ea=n("span"),bi=r("TFBlenderbotSmallForConditionalGeneration"),$r=i(),me=n("div"),v(Vt.$$.fragment),ki=i(),Qt=n("p"),vi=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Wn=n("a"),yi=r("TFPreTrainedModel"),Ti=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wi=i(),Jt=n("p"),$i=r("This model is also a "),Xt=n("a"),Si=r("tf.keras.Model"),xi=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bi=i(),v(Go.$$.fragment),zi=i(),P=n("div"),v(Yt.$$.fragment),Fi=i(),ko=n("p"),qi=r("The "),Rn=n("a"),Ei=r("TFBlenderbotSmallForConditionalGeneration"),Mi=r(" forward method, overrides the "),Ma=n("code"),Ci=r("__call__"),ji=r(" special method."),Oi=i(),v(Uo.$$.fragment),Pi=i(),Ca=n("p"),Li=r("Conversation example::"),Ni=i(),ja=n("blockquote"),Oa=n("blockquote"),Pa=n("blockquote"),La=n("p"),Ii=r(`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Ai=i(),Na=n("blockquote"),Ia=n("blockquote"),Aa=n("blockquote"),Da=n("p"),Di=r(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Gi=i(),Ga=n("blockquote"),Ua=n("blockquote"),Wa=n("blockquote"),Ra=n("p"),Ui=r(`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),Wi=i(),Ha=n("blockquote"),Ka=n("blockquote"),Va=n("blockquote"),Zt=n("p"),Ri=r(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),Qa=n("s"),Hi=r("what kind of carbs do they eat? i don\u2019t know much about carbs."),Ki=r(` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),Vi=i(),Ja=n("blockquote"),Xa=n("blockquote"),Ya=n("blockquote"),Za=n("p"),Qi=r(`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Sr=i(),vo=n("h2"),Wo=n("a"),es=n("span"),v(en.$$.fragment),Ji=i(),os=n("span"),Xi=r("FlaxBlenderbotSmallModel"),xr=i(),I=n("div"),v(on.$$.fragment),Yi=i(),tn=n("p"),Zi=r(`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Hn=n("a"),ec=r("FlaxPreTrainedModel"),oc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tc=i(),nn=n("p"),nc=r(`This model is also a Flax Linen
`),an=n("a"),ac=r("flax.nn.Module"),sc=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),rc=i(),ts=n("p"),lc=r("Finally, this model supports inherent JAX features such as:"),dc=i(),Ue=n("ul"),ns=n("li"),sn=n("a"),ic=r("Just-In-Time (JIT) compilation"),cc=i(),as=n("li"),rn=n("a"),pc=r("Automatic Differentiation"),mc=i(),ss=n("li"),ln=n("a"),hc=r("Vectorization"),uc=i(),rs=n("li"),dn=n("a"),fc=r("Parallelization"),_c=i(),Ro=n("div"),v(cn.$$.fragment),gc=i(),v(Ho.$$.fragment),bc=i(),Ko=n("div"),v(pn.$$.fragment),kc=i(),v(Vo.$$.fragment),vc=i(),Qo=n("div"),v(mn.$$.fragment),yc=i(),v(Jo.$$.fragment),Br=i(),yo=n("h2"),Xo=n("a"),ls=n("span"),v(hn.$$.fragment),Tc=i(),ds=n("span"),wc=r("FlaxBlenderbotForConditionalGeneration"),zr=i(),A=n("div"),v(un.$$.fragment),$c=i(),fn=n("p"),Sc=r(`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Kn=n("a"),xc=r("FlaxPreTrainedModel"),Bc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zc=i(),_n=n("p"),Fc=r(`This model is also a Flax Linen
`),gn=n("a"),qc=r("flax.nn.Module"),Ec=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mc=i(),is=n("p"),Cc=r("Finally, this model supports inherent JAX features such as:"),jc=i(),We=n("ul"),cs=n("li"),bn=n("a"),Oc=r("Just-In-Time (JIT) compilation"),Pc=i(),ps=n("li"),kn=n("a"),Lc=r("Automatic Differentiation"),Nc=i(),ms=n("li"),vn=n("a"),Ic=r("Vectorization"),Ac=i(),hs=n("li"),yn=n("a"),Dc=r("Parallelization"),Gc=i(),E=n("div"),v(Tn.$$.fragment),Uc=i(),To=n("p"),Wc=r("The "),us=n("code"),Rc=r("FlaxBlenderbotSmallPreTrainedModel"),Hc=r(" forward method, overrides the "),fs=n("code"),Kc=r("__call__"),Vc=r(" special method."),Qc=i(),v(Yo.$$.fragment),Jc=i(),_s=n("p"),Xc=r("Summarization example:"),Yc=i(),gs=n("blockquote"),bs=n("blockquote"),ks=n("blockquote"),vs=n("p"),Zc=r("from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),ep=i(),ys=n("blockquote"),Ts=n("blockquote"),ws=n("blockquote"),$s=n("p"),op=r(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),tp=i(),Ss=n("blockquote"),xs=n("blockquote"),Bs=n("blockquote"),zs=n("p"),np=r(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),ap=i(),Fs=n("blockquote"),qs=n("blockquote"),wn=n("blockquote"),Zo=n("h1"),et=n("a"),Es=n("span"),v($n.$$.fragment),sp=i(),Ms=n("span"),rp=r("Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),lp=i(),Cs=n("p"),dp=r("print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),ip=i(),js=n("p"),cp=r("Mask filling example:"),pp=i(),Os=n("blockquote"),Ps=n("blockquote"),Ls=n("blockquote"),Ns=n("p"),mp=r(`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),hp=i(),Is=n("blockquote"),As=n("blockquote"),Ds=n("blockquote"),Gs=n("p"),up=r(`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),fp=i(),Us=n("blockquote"),Ws=n("blockquote"),Rs=n("blockquote"),Hs=n("p"),_p=r(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),gp=i(),Ks=n("blockquote"),Vs=n("blockquote"),Qs=n("blockquote"),Js=n("p"),bp=r("tokenizer.decode(predictions).split()"),kp=i(),ot=n("div"),v(Sn.$$.fragment),vp=i(),v(tt.$$.fragment),yp=i(),nt=n("div"),v(xn.$$.fragment),Tp=i(),v(at.$$.fragment),this.h()},l(t){const g=pu('[data-svelte="svelte-1phssyn"]',document.head);p=a(g,"META",{name:!0,content:!0}),g.forEach(o),k=c(t),f=a(t,"H1",{class:!0});var Bn=s(f);h=a(Bn,"A",{id:!0,class:!0,href:!0});var Xs=s(h);b=a(Xs,"SPAN",{});var Ys=s(b);y(d.$$.fragment,Ys),Ys.forEach(o),Xs.forEach(o),u=c(Bn),F=a(Bn,"SPAN",{});var Zs=s(F);Ce=l(Zs,"Blenderbot Small"),Zs.forEach(o),Bn.forEach(o),he=c(t),B=a(t,"P",{});var _e=s(B);je=l(_e,"Note that "),W=a(_e,"A",{href:!0});var er=s(W);Oe=l(er,"BlenderbotSmallModel"),er.forEach(o),Pe=l(_e,` and
`),R=a(_e,"A",{href:!0});var or=s(R);Le=l(or,"BlenderbotSmallForConditionalGeneration"),or.forEach(o),Ne=l(_e,` are only used in combination with the checkpoint
`),V=a(_e,"A",{href:!0,rel:!0});var tr=s(V);Q=l(tr,"facebook/blenderbot-90M"),tr.forEach(o),Ie=l(_e,`. Larger Blenderbot checkpoints should
instead be used with `),Z=a(_e,"A",{href:!0});var nr=s(Z);j=l(nr,"BlenderbotModel"),nr.forEach(o),L=l(_e,` and
`),ue=a(_e,"A",{href:!0});var ar=s(ue);ae=l(ar,"BlenderbotForConditionalGeneration"),ar.forEach(o),_e.forEach(o),Be=c(t),J=a(t,"H2",{class:!0});var zn=s(J);D=a(zn,"A",{id:!0,class:!0,href:!0});var sr=s(D);be=a(sr,"SPAN",{});var rr=s(be);y(se.$$.fragment,rr),rr.forEach(o),sr.forEach(o),N=c(zn),ke=a(zn,"SPAN",{});var lr=s(ke);re=l(lr,"Overview"),lr.forEach(o),zn.forEach(o),ze=c(t),ee=a(t,"P",{});var Fn=s(ee);le=l(Fn,"The Blender chatbot model was proposed in "),de=a(Fn,"A",{href:!0,rel:!0});var dr=s(de);Ae=l(dr,"Recipes for building an open-domain chatbot"),dr.forEach(o),X=l(Fn,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),Fn.forEach(o),Fe=c(t),H=a(t,"P",{});var ir=s(H);De=l(ir,"The abstract of the paper is the following:"),ir.forEach(o),x=c(t),q=a(t,"P",{});var $p=s(q);ie=a($p,"EM",{});var Sp=s(ie);Ze=l(Sp,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Sp.forEach(o),$p.forEach(o),Re=c(t),O=a(t,"P",{});var Vn=s(O);eo=l(Vn,"This model was contributed by "),ve=a(Vn,"A",{href:!0,rel:!0});var xp=s(ve);oo=l(xp,"patrickvonplaten"),xp.forEach(o),Y=l(Vn,`. The authors\u2019 code can be
found `),G=a(Vn,"A",{href:!0,rel:!0});var Bp=s(G);to=l(Bp,"here"),Bp.forEach(o),no=l(Vn," ."),Vn.forEach(o),oe=c(t),ce=a(t,"H2",{class:!0});var qr=s(ce);fe=a(qr,"A",{id:!0,class:!0,href:!0});var zp=s(fe);ye=a(zp,"SPAN",{});var Fp=s(ye);y(Te.$$.fragment,Fp),Fp.forEach(o),zp.forEach(o),ml=c(qr),ra=a(qr,"SPAN",{});var qp=s(ra);hl=l(qp,"BlenderbotSmallConfig"),qp.forEach(o),qr.forEach(o),cr=c(t),we=a(t,"DIV",{class:!0});var st=s(we);y(ht.$$.fragment,st),ul=c(st),ao=a(st,"P",{});var Qn=s(ao);fl=l(Qn,"This is the configuration class to store the configuration of a "),En=a(Qn,"A",{href:!0});var Ep=s(En);_l=l(Ep,"BlenderbotSmallModel"),Ep.forEach(o),gl=l(Qn,`. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
`),ut=a(Qn,"A",{href:!0,rel:!0});var Mp=s(ut);bl=l(Mp,"facebook/blenderbot_small-90M"),Mp.forEach(o),kl=l(Qn," architecture."),Qn.forEach(o),vl=c(st),so=a(st,"P",{});var Jn=s(so);yl=l(Jn,"Configuration objects inherit from "),Mn=a(Jn,"A",{href:!0});var Cp=s(Mn);Tl=l(Cp,"PretrainedConfig"),Cp.forEach(o),wl=l(Jn,` and can be used to control the model outputs. Read the
documentation from `),Cn=a(Jn,"A",{href:!0});var jp=s(Cn);$l=l(jp,"PretrainedConfig"),jp.forEach(o),Sl=l(Jn," for more information."),Jn.forEach(o),xl=c(st),y(wo.$$.fragment,st),st.forEach(o),pr=c(t),ro=a(t,"H2",{class:!0});var Er=s(ro);$o=a(Er,"A",{id:!0,class:!0,href:!0});var Op=s($o);la=a(Op,"SPAN",{});var Pp=s(la);y(ft.$$.fragment,Pp),Pp.forEach(o),Op.forEach(o),Bl=c(Er),da=a(Er,"SPAN",{});var Lp=s(da);zl=l(Lp,"BlenderbotSmallTokenizer"),Lp.forEach(o),Er.forEach(o),mr=c(t),U=a(t,"DIV",{class:!0});var ge=s(U);y(_t.$$.fragment,ge),Fl=c(ge),ia=a(ge,"P",{});var Np=s(ia);ql=l(Np,"Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)"),Np.forEach(o),El=c(ge),gt=a(ge,"P",{});var Mr=s(gt);Ml=l(Mr,"This tokenizer inherits from "),jn=a(Mr,"A",{href:!0});var Ip=s(jn);Cl=l(Ip,"PreTrainedTokenizer"),Ip.forEach(o),jl=l(Mr,` which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`),Mr.forEach(o),Ol=c(ge),He=a(ge,"DIV",{class:!0});var Xn=s(He);y(bt.$$.fragment,Xn),Pl=c(Xn),ca=a(Xn,"P",{});var Ap=s(ca);Ll=l(Ap,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`),Ap.forEach(o),Nl=c(Xn),pa=a(Xn,"P",{});var Dp=s(pa);Il=l(Dp,"This implementation does not add special tokens and this method should be overridden in a subclass."),Dp.forEach(o),Xn.forEach(o),Al=c(ge),So=a(ge,"DIV",{class:!0});var Cr=s(So);y(kt.$$.fragment,Cr),Dl=c(Cr),lo=a(Cr,"P",{});var Yn=s(lo);Gl=l(Yn,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ma=a(Yn,"CODE",{});var Gp=s(ma);Ul=l(Gp,"prepare_for_model"),Gp.forEach(o),Wl=l(Yn," or "),ha=a(Yn,"CODE",{});var Up=s(ha);Rl=l(Up,"encode_plus"),Up.forEach(o),Hl=l(Yn," methods."),Yn.forEach(o),Cr.forEach(o),Kl=c(ge),Ke=a(ge,"DIV",{class:!0});var Zn=s(Ke);y(vt.$$.fragment,Zn),Vl=c(Zn),On=a(Zn,"P",{});var wp=s(On);Ql=l(wp,"Create the token type IDs corresponding to the sequences passed. "),Pn=a(wp,"A",{href:!0});var Wp=s(Pn);Jl=l(Wp,`What are token type
IDs?`),Wp.forEach(o),wp.forEach(o),Xl=c(Zn),ua=a(Zn,"P",{});var Rp=s(ua);Yl=l(Rp,"Should be overridden in a subclass if the model has a special way of building those."),Rp.forEach(o),Zn.forEach(o),Zl=c(ge),Ln=a(ge,"DIV",{class:!0});var Hp=s(Ln);y(yt.$$.fragment,Hp),Hp.forEach(o),ge.forEach(o),hr=c(t),io=a(t,"H2",{class:!0});var jr=s(io);xo=a(jr,"A",{id:!0,class:!0,href:!0});var Kp=s(xo);fa=a(Kp,"SPAN",{});var Vp=s(fa);y(Tt.$$.fragment,Vp),Vp.forEach(o),Kp.forEach(o),ed=c(jr),_a=a(jr,"SPAN",{});var Qp=s(_a);od=l(Qp,"BlenderbotSmallTokenizerFast"),Qp.forEach(o),jr.forEach(o),ur=c(t),Ge=a(t,"DIV",{class:!0});var ea=s(Ge);y(wt.$$.fragment,ea),td=c(ea),$t=a(ea,"P",{});var Or=s($t);nd=l(Or,"Construct a \u201Cfast\u201D BlenderbotSmall tokenizer (backed by HuggingFace\u2019s "),ga=a(Or,"EM",{});var Jp=s(ga);ad=l(Jp,"tokenizers"),Jp.forEach(o),sd=l(Or," library)."),Or.forEach(o),rd=c(ea),Bo=a(ea,"DIV",{class:!0});var Pr=s(Bo);y(St.$$.fragment,Pr),ld=c(Pr),ba=a(Pr,"P",{});var Xp=s(ba);dd=l(Xp,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`),Xp.forEach(o),Pr.forEach(o),ea.forEach(o),fr=c(t),co=a(t,"H2",{class:!0});var Lr=s(co);zo=a(Lr,"A",{id:!0,class:!0,href:!0});var Yp=s(zo);ka=a(Yp,"SPAN",{});var Zp=s(ka);y(xt.$$.fragment,Zp),Zp.forEach(o),Yp.forEach(o),id=c(Lr),va=a(Lr,"SPAN",{});var em=s(va);cd=l(em,"BlenderbotSmallModel"),em.forEach(o),Lr.forEach(o),_r=c(t),$e=a(t,"DIV",{class:!0});var rt=s($e);y(Bt.$$.fragment,rt),pd=c(rt),zt=a(rt,"P",{});var Nr=s(zt);md=l(Nr,`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Nn=a(Nr,"A",{href:!0});var om=s(Nn);hd=l(om,"PreTrainedModel"),om.forEach(o),ud=l(Nr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nr.forEach(o),fd=c(rt),Ft=a(rt,"P",{});var Ir=s(Ft);_d=l(Ir,"This model is also a PyTorch "),qt=a(Ir,"A",{href:!0,rel:!0});var tm=s(qt);gd=l(tm,"torch.nn.Module"),tm.forEach(o),bd=l(Ir,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ir.forEach(o),kd=c(rt),qe=a(rt,"DIV",{class:!0});var lt=s(qe);y(Et.$$.fragment,lt),vd=c(lt),po=a(lt,"P",{});var oa=s(po);yd=l(oa,"The "),In=a(oa,"A",{href:!0});var nm=s(In);Td=l(nm,"BlenderbotSmallModel"),nm.forEach(o),wd=l(oa," forward method, overrides the "),ya=a(oa,"CODE",{});var am=s(ya);$d=l(am,"__call__"),am.forEach(o),Sd=l(oa," special method."),oa.forEach(o),xd=c(lt),y(Fo.$$.fragment,lt),Bd=c(lt),y(qo.$$.fragment,lt),lt.forEach(o),rt.forEach(o),gr=c(t),mo=a(t,"H2",{class:!0});var Ar=s(mo);Eo=a(Ar,"A",{id:!0,class:!0,href:!0});var sm=s(Eo);Ta=a(sm,"SPAN",{});var rm=s(Ta);y(Mt.$$.fragment,rm),rm.forEach(o),sm.forEach(o),zd=c(Ar),wa=a(Ar,"SPAN",{});var lm=s(wa);Fd=l(lm,"BlenderbotSmallForConditionalGeneration"),lm.forEach(o),Ar.forEach(o),br=c(t),Se=a(t,"DIV",{class:!0});var dt=s(Se);y(Ct.$$.fragment,dt),qd=c(dt),jt=a(dt,"P",{});var Dr=s(jt);Ed=l(Dr,`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from `),An=a(Dr,"A",{href:!0});var dm=s(An);Md=l(dm,"PreTrainedModel"),dm.forEach(o),Cd=l(Dr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dr.forEach(o),jd=c(dt),Ot=a(dt,"P",{});var Gr=s(Ot);Od=l(Gr,"This model is also a PyTorch "),Pt=a(Gr,"A",{href:!0,rel:!0});var im=s(Pt);Pd=l(im,"torch.nn.Module"),im.forEach(o),Ld=l(Gr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gr.forEach(o),Nd=c(dt),Ee=a(dt,"DIV",{class:!0});var it=s(Ee);y(Lt.$$.fragment,it),Id=c(it),ho=a(it,"P",{});var ta=s(ho);Ad=l(ta,"The "),Dn=a(ta,"A",{href:!0});var cm=s(Dn);Dd=l(cm,"BlenderbotSmallForConditionalGeneration"),cm.forEach(o),Gd=l(ta," forward method, overrides the "),$a=a(ta,"CODE",{});var pm=s($a);Ud=l(pm,"__call__"),pm.forEach(o),Wd=l(ta," special method."),ta.forEach(o),Rd=c(it),y(Mo.$$.fragment,it),Hd=c(it),y(Co.$$.fragment,it),it.forEach(o),dt.forEach(o),kr=c(t),uo=a(t,"H2",{class:!0});var Ur=s(uo);jo=a(Ur,"A",{id:!0,class:!0,href:!0});var mm=s(jo);Sa=a(mm,"SPAN",{});var hm=s(Sa);y(Nt.$$.fragment,hm),hm.forEach(o),mm.forEach(o),Kd=c(Ur),xa=a(Ur,"SPAN",{});var um=s(xa);Vd=l(um,"BlenderbotSmallForCausalLM"),um.forEach(o),Ur.forEach(o),vr=c(t),fo=a(t,"DIV",{class:!0});var Wr=s(fo);y(It.$$.fragment,Wr),Qd=c(Wr),Oo=a(Wr,"DIV",{class:!0});var Rr=s(Oo);y(At.$$.fragment,Rr),Jd=c(Rr),y(Po.$$.fragment,Rr),Rr.forEach(o),Wr.forEach(o),yr=c(t),_o=a(t,"H2",{class:!0});var Hr=s(_o);Lo=a(Hr,"A",{id:!0,class:!0,href:!0});var fm=s(Lo);Ba=a(fm,"SPAN",{});var _m=s(Ba);y(Dt.$$.fragment,_m),_m.forEach(o),fm.forEach(o),Xd=c(Hr),za=a(Hr,"SPAN",{});var gm=s(za);Yd=l(gm,"TFBlenderbotSmallModel"),gm.forEach(o),Hr.forEach(o),Tr=c(t),pe=a(t,"DIV",{class:!0});var Ve=s(pe);y(Gt.$$.fragment,Ve),Zd=c(Ve),Ut=a(Ve,"P",{});var Kr=s(Ut);ei=l(Kr,`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Gn=a(Kr,"A",{href:!0});var bm=s(Gn);oi=l(bm,"TFPreTrainedModel"),bm.forEach(o),ti=l(Kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kr.forEach(o),ni=c(Ve),Wt=a(Ve,"P",{});var Vr=s(Wt);ai=l(Vr,"This model is also a "),Rt=a(Vr,"A",{href:!0,rel:!0});var km=s(Rt);si=l(km,"tf.keras.Model"),km.forEach(o),ri=l(Vr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vr.forEach(o),li=c(Ve),y(No.$$.fragment,Ve),di=c(Ve),Me=a(Ve,"DIV",{class:!0});var ct=s(Me);y(Ht.$$.fragment,ct),ii=c(ct),go=a(ct,"P",{});var na=s(go);ci=l(na,"The "),Un=a(na,"A",{href:!0});var vm=s(Un);pi=l(vm,"TFBlenderbotSmallModel"),vm.forEach(o),mi=l(na," forward method, overrides the "),Fa=a(na,"CODE",{});var ym=s(Fa);hi=l(ym,"__call__"),ym.forEach(o),ui=l(na," special method."),na.forEach(o),fi=c(ct),y(Io.$$.fragment,ct),_i=c(ct),y(Ao.$$.fragment,ct),ct.forEach(o),Ve.forEach(o),wr=c(t),bo=a(t,"H2",{class:!0});var Qr=s(bo);Do=a(Qr,"A",{id:!0,class:!0,href:!0});var Tm=s(Do);qa=a(Tm,"SPAN",{});var wm=s(qa);y(Kt.$$.fragment,wm),wm.forEach(o),Tm.forEach(o),gi=c(Qr),Ea=a(Qr,"SPAN",{});var $m=s(Ea);bi=l($m,"TFBlenderbotSmallForConditionalGeneration"),$m.forEach(o),Qr.forEach(o),$r=c(t),me=a(t,"DIV",{class:!0});var Qe=s(me);y(Vt.$$.fragment,Qe),ki=c(Qe),Qt=a(Qe,"P",{});var Jr=s(Qt);vi=l(Jr,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Wn=a(Jr,"A",{href:!0});var Sm=s(Wn);yi=l(Sm,"TFPreTrainedModel"),Sm.forEach(o),Ti=l(Jr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jr.forEach(o),wi=c(Qe),Jt=a(Qe,"P",{});var Xr=s(Jt);$i=l(Xr,"This model is also a "),Xt=a(Xr,"A",{href:!0,rel:!0});var xm=s(Xt);Si=l(xm,"tf.keras.Model"),xm.forEach(o),xi=l(Xr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xr.forEach(o),Bi=c(Qe),y(Go.$$.fragment,Qe),zi=c(Qe),P=a(Qe,"DIV",{class:!0});var K=s(P);y(Yt.$$.fragment,K),Fi=c(K),ko=a(K,"P",{});var aa=s(ko);qi=l(aa,"The "),Rn=a(aa,"A",{href:!0});var Bm=s(Rn);Ei=l(Bm,"TFBlenderbotSmallForConditionalGeneration"),Bm.forEach(o),Mi=l(aa," forward method, overrides the "),Ma=a(aa,"CODE",{});var zm=s(Ma);Ci=l(zm,"__call__"),zm.forEach(o),ji=l(aa," special method."),aa.forEach(o),Oi=c(K),y(Uo.$$.fragment,K),Pi=c(K),Ca=a(K,"P",{});var Fm=s(Ca);Li=l(Fm,"Conversation example::"),Fm.forEach(o),Ni=c(K),ja=a(K,"BLOCKQUOTE",{});var qm=s(ja);Oa=a(qm,"BLOCKQUOTE",{});var Em=s(Oa);Pa=a(Em,"BLOCKQUOTE",{});var Mm=s(Pa);La=a(Mm,"P",{});var Cm=s(La);Ii=l(Cm,`from transformers import BlenderbotSmallTokenizer, TFBlenderbotSmallForConditionalGeneration >>> mname =
\u2018facebook/blenderbot_small-90M\u2019 >>> model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(mname)`),Cm.forEach(o),Mm.forEach(o),Em.forEach(o),qm.forEach(o),Ai=c(K),Na=a(K,"BLOCKQUOTE",{});var jm=s(Na);Ia=a(jm,"BLOCKQUOTE",{});var Om=s(Ia);Aa=a(Om,"BLOCKQUOTE",{});var Pm=s(Aa);Da=a(Pm,"P",{});var Lm=s(Da);Di=l(Lm,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs =
tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)`),Lm.forEach(o),Pm.forEach(o),Om.forEach(o),jm.forEach(o),Gi=c(K),Ga=a(K,"BLOCKQUOTE",{});var Nm=s(Ga);Ua=a(Nm,"BLOCKQUOTE",{});var Im=s(Ua);Wa=a(Im,"BLOCKQUOTE",{});var Am=s(Wa);Ra=a(Am,"P",{});var Dm=s(Ra);Ui=l(Dm,`reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0]) what kind of carbs do they eat? i don\u2019t know much about carbs.`),Dm.forEach(o),Am.forEach(o),Im.forEach(o),Nm.forEach(o),Wi=c(K),Ha=a(K,"BLOCKQUOTE",{});var Gm=s(Ha);Ka=a(Gm,"BLOCKQUOTE",{});var Um=s(Ka);Va=a(Um,"BLOCKQUOTE",{});var Wm=s(Va);Zt=a(Wm,"P",{});var Yr=s(Zt);Ri=l(Yr,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> \u201D \u2026 \u201D`),Qa=a(Yr,"S",{});var Rm=s(Qa);Hi=l(Rm,"what kind of carbs do they eat? i don\u2019t know much about carbs."),Rm.forEach(o),Ki=l(Yr,` \u201D \u2026
\u201D<s>I\u2019m not sure.\u201D \u2026 )`),Yr.forEach(o),Wm.forEach(o),Um.forEach(o),Gm.forEach(o),Vi=c(K),Ja=a(K,"BLOCKQUOTE",{});var Hm=s(Ja);Xa=a(Hm,"BLOCKQUOTE",{});var Km=s(Xa);Ya=a(Km,"BLOCKQUOTE",{});var Vm=s(Ya);Za=a(Vm,"P",{});var Qm=s(Za);Qi=l(Qm,`inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019) >>> inputs.pop(\u201Ctoken_type_ids\u201D) >>>
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Qm.forEach(o),Vm.forEach(o),Km.forEach(o),Hm.forEach(o),K.forEach(o),Qe.forEach(o),Sr=c(t),vo=a(t,"H2",{class:!0});var Zr=s(vo);Wo=a(Zr,"A",{id:!0,class:!0,href:!0});var Jm=s(Wo);es=a(Jm,"SPAN",{});var Xm=s(es);y(en.$$.fragment,Xm),Xm.forEach(o),Jm.forEach(o),Ji=c(Zr),os=a(Zr,"SPAN",{});var Ym=s(os);Xi=l(Ym,"FlaxBlenderbotSmallModel"),Ym.forEach(o),Zr.forEach(o),xr=c(t),I=a(t,"DIV",{class:!0});var te=s(I);y(on.$$.fragment,te),Yi=c(te),tn=a(te,"P",{});var el=s(tn);Zi=l(el,`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Hn=a(el,"A",{href:!0});var Zm=s(Hn);ec=l(Zm,"FlaxPreTrainedModel"),Zm.forEach(o),oc=l(el,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),el.forEach(o),tc=c(te),nn=a(te,"P",{});var ol=s(nn);nc=l(ol,`This model is also a Flax Linen
`),an=a(ol,"A",{href:!0,rel:!0});var eh=s(an);ac=l(eh,"flax.nn.Module"),eh.forEach(o),sc=l(ol,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ol.forEach(o),rc=c(te),ts=a(te,"P",{});var oh=s(ts);lc=l(oh,"Finally, this model supports inherent JAX features such as:"),oh.forEach(o),dc=c(te),Ue=a(te,"UL",{});var pt=s(Ue);ns=a(pt,"LI",{});var th=s(ns);sn=a(th,"A",{href:!0,rel:!0});var nh=s(sn);ic=l(nh,"Just-In-Time (JIT) compilation"),nh.forEach(o),th.forEach(o),cc=c(pt),as=a(pt,"LI",{});var ah=s(as);rn=a(ah,"A",{href:!0,rel:!0});var sh=s(rn);pc=l(sh,"Automatic Differentiation"),sh.forEach(o),ah.forEach(o),mc=c(pt),ss=a(pt,"LI",{});var rh=s(ss);ln=a(rh,"A",{href:!0,rel:!0});var lh=s(ln);hc=l(lh,"Vectorization"),lh.forEach(o),rh.forEach(o),uc=c(pt),rs=a(pt,"LI",{});var dh=s(rs);dn=a(dh,"A",{href:!0,rel:!0});var ih=s(dn);fc=l(ih,"Parallelization"),ih.forEach(o),dh.forEach(o),pt.forEach(o),_c=c(te),Ro=a(te,"DIV",{class:!0});var tl=s(Ro);y(cn.$$.fragment,tl),gc=c(tl),y(Ho.$$.fragment,tl),tl.forEach(o),bc=c(te),Ko=a(te,"DIV",{class:!0});var nl=s(Ko);y(pn.$$.fragment,nl),kc=c(nl),y(Vo.$$.fragment,nl),nl.forEach(o),vc=c(te),Qo=a(te,"DIV",{class:!0});var al=s(Qo);y(mn.$$.fragment,al),yc=c(al),y(Jo.$$.fragment,al),al.forEach(o),te.forEach(o),Br=c(t),yo=a(t,"H2",{class:!0});var sl=s(yo);Xo=a(sl,"A",{id:!0,class:!0,href:!0});var ch=s(Xo);ls=a(ch,"SPAN",{});var ph=s(ls);y(hn.$$.fragment,ph),ph.forEach(o),ch.forEach(o),Tc=c(sl),ds=a(sl,"SPAN",{});var mh=s(ds);wc=l(mh,"FlaxBlenderbotForConditionalGeneration"),mh.forEach(o),sl.forEach(o),zr=c(t),A=a(t,"DIV",{class:!0});var ne=s(A);y(un.$$.fragment,ne),$c=c(ne),fn=a(ne,"P",{});var rl=s(fn);Sc=l(rl,`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from `),Kn=a(rl,"A",{href:!0});var hh=s(Kn);xc=l(hh,"FlaxPreTrainedModel"),hh.forEach(o),Bc=l(rl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rl.forEach(o),zc=c(ne),_n=a(ne,"P",{});var ll=s(_n);Fc=l(ll,`This model is also a Flax Linen
`),gn=a(ll,"A",{href:!0,rel:!0});var uh=s(gn);qc=l(uh,"flax.nn.Module"),uh.forEach(o),Ec=l(ll,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ll.forEach(o),Mc=c(ne),is=a(ne,"P",{});var fh=s(is);Cc=l(fh,"Finally, this model supports inherent JAX features such as:"),fh.forEach(o),jc=c(ne),We=a(ne,"UL",{});var mt=s(We);cs=a(mt,"LI",{});var _h=s(cs);bn=a(_h,"A",{href:!0,rel:!0});var gh=s(bn);Oc=l(gh,"Just-In-Time (JIT) compilation"),gh.forEach(o),_h.forEach(o),Pc=c(mt),ps=a(mt,"LI",{});var bh=s(ps);kn=a(bh,"A",{href:!0,rel:!0});var kh=s(kn);Lc=l(kh,"Automatic Differentiation"),kh.forEach(o),bh.forEach(o),Nc=c(mt),ms=a(mt,"LI",{});var vh=s(ms);vn=a(vh,"A",{href:!0,rel:!0});var yh=s(vn);Ic=l(yh,"Vectorization"),yh.forEach(o),vh.forEach(o),Ac=c(mt),hs=a(mt,"LI",{});var Th=s(hs);yn=a(Th,"A",{href:!0,rel:!0});var wh=s(yn);Dc=l(wh,"Parallelization"),wh.forEach(o),Th.forEach(o),mt.forEach(o),Gc=c(ne),E=a(ne,"DIV",{class:!0});var M=s(E);y(Tn.$$.fragment,M),Uc=c(M),To=a(M,"P",{});var sa=s(To);Wc=l(sa,"The "),us=a(sa,"CODE",{});var $h=s(us);Rc=l($h,"FlaxBlenderbotSmallPreTrainedModel"),$h.forEach(o),Hc=l(sa," forward method, overrides the "),fs=a(sa,"CODE",{});var Sh=s(fs);Kc=l(Sh,"__call__"),Sh.forEach(o),Vc=l(sa," special method."),sa.forEach(o),Qc=c(M),y(Yo.$$.fragment,M),Jc=c(M),_s=a(M,"P",{});var xh=s(_s);Xc=l(xh,"Summarization example:"),xh.forEach(o),Yc=c(M),gs=a(M,"BLOCKQUOTE",{});var Bh=s(gs);bs=a(Bh,"BLOCKQUOTE",{});var zh=s(bs);ks=a(zh,"BLOCKQUOTE",{});var Fh=s(ks);vs=a(Fh,"P",{});var qh=s(vs);Zc=l(qh,"from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration"),qh.forEach(o),Fh.forEach(o),zh.forEach(o),Bh.forEach(o),ep=c(M),ys=a(M,"BLOCKQUOTE",{});var Eh=s(ys);Ts=a(Eh,"BLOCKQUOTE",{});var Mh=s(Ts);ws=a(Mh,"BLOCKQUOTE",{});var Ch=s(ws);$s=a(Ch,"P",{});var jh=s($s);op=l(jh,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019)`),jh.forEach(o),Ch.forEach(o),Mh.forEach(o),Eh.forEach(o),tp=c(M),Ss=a(M,"BLOCKQUOTE",{});var Oh=s(Ss);xs=a(Oh,"BLOCKQUOTE",{});var Ph=s(xs);Bs=a(Ph,"BLOCKQUOTE",{});var Lh=s(Bs);zs=a(Lh,"P",{});var Nh=s(zs);np=l(Nh,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs =
tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Nh.forEach(o),Lh.forEach(o),Ph.forEach(o),Oh.forEach(o),ap=c(M),Fs=a(M,"BLOCKQUOTE",{});var Ih=s(Fs);qs=a(Ih,"BLOCKQUOTE",{});var Ah=s(qs);wn=a(Ah,"BLOCKQUOTE",{});var dl=s(wn);Zo=a(dl,"H1",{class:!0});var il=s(Zo);et=a(il,"A",{id:!0,class:!0,href:!0});var Dh=s(et);Es=a(Dh,"SPAN",{});var Gh=s(Es);y($n.$$.fragment,Gh),Gh.forEach(o),Dh.forEach(o),sp=c(il),Ms=a(il,"SPAN",{});var Uh=s(Ms);rp=l(Uh,"Generate Summary >>> summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences >>>"),Uh.forEach(o),il.forEach(o),lp=c(dl),Cs=a(dl,"P",{});var Wh=s(Cs);dp=l(Wh,"print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))"),Wh.forEach(o),dl.forEach(o),Ah.forEach(o),Ih.forEach(o),ip=c(M),js=a(M,"P",{});var Rh=s(js);cp=l(Rh,"Mask filling example:"),Rh.forEach(o),pp=c(M),Os=a(M,"BLOCKQUOTE",{});var Hh=s(Os);Ps=a(Hh,"BLOCKQUOTE",{});var Kh=s(Ps);Ls=a(Kh,"BLOCKQUOTE",{});var Vh=s(Ls);Ns=a(Vh,"P",{});var Qh=s(Ns);mp=l(Qh,`from transformers import BlenderbotSmallTokenizer, FlaxBlenderbotSmallForConditionalGeneration >>>
tokenizer = BlenderbotSmallTokenizer.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>> TXT = \u201CMy friends are
<mask> but they eat too many carbs.\u201D`),Qh.forEach(o),Vh.forEach(o),Kh.forEach(o),Hh.forEach(o),hp=c(M),Is=a(M,"BLOCKQUOTE",{});var Jh=s(Is);As=a(Jh,"BLOCKQUOTE",{});var Xh=s(As);Ds=a(Xh,"BLOCKQUOTE",{});var Yh=s(Ds);Gs=a(Yh,"P",{});var Zh=s(Gs);up=l(Zh,`model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot_small-90M\u2019) >>>
input_ids = tokenizer([TXT], return_tensors=\u2018np\u2019)[\u2018input_ids\u2019] >>> logits = model(input_ids).logits`),Zh.forEach(o),Yh.forEach(o),Xh.forEach(o),Jh.forEach(o),fp=c(M),Us=a(M,"BLOCKQUOTE",{});var eu=s(Us);Ws=a(eu,"BLOCKQUOTE",{});var ou=s(Ws);Rs=a(ou,"BLOCKQUOTE",{});var tu=s(Rs);Hs=a(tu,"P",{});var nu=s(Hs);_p=l(nu,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item() >>> probs =
jax.nn.softmax(logits[0, masked_index], axis=0) >>> values, predictions = jax.lax.top_k(probs)`),nu.forEach(o),tu.forEach(o),ou.forEach(o),eu.forEach(o),gp=c(M),Ks=a(M,"BLOCKQUOTE",{});var au=s(Ks);Vs=a(au,"BLOCKQUOTE",{});var su=s(Vs);Qs=a(su,"BLOCKQUOTE",{});var ru=s(Qs);Js=a(ru,"P",{});var lu=s(Js);bp=l(lu,"tokenizer.decode(predictions).split()"),lu.forEach(o),ru.forEach(o),su.forEach(o),au.forEach(o),M.forEach(o),kp=c(ne),ot=a(ne,"DIV",{class:!0});var cl=s(ot);y(Sn.$$.fragment,cl),vp=c(cl),y(tt.$$.fragment,cl),cl.forEach(o),yp=c(ne),nt=a(ne,"DIV",{class:!0});var pl=s(nt);y(xn.$$.fragment,pl),Tp=c(pl),y(at.$$.fragment,pl),pl.forEach(o),ne.forEach(o),this.h()},h(){m(p,"name","hf:doc:metadata"),m(p,"content",JSON.stringify(Eu)),m(h,"id","blenderbot-small"),m(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(h,"href","#blenderbot-small"),m(f,"class","relative group"),m(W,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),m(R,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),m(V,"href","https://huggingface.co/facebook/blenderbot-90M"),m(V,"rel","nofollow"),m(Z,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotModel"),m(ue,"href","/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),m(D,"id","overview"),m(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(D,"href","#overview"),m(J,"class","relative group"),m(de,"href","https://arxiv.org/pdf/2004.13637.pdf"),m(de,"rel","nofollow"),m(ve,"href","https://huggingface.co/patrickvonplaten"),m(ve,"rel","nofollow"),m(G,"href","https://github.com/facebookresearch/ParlAI"),m(G,"rel","nofollow"),m(fe,"id","transformers.BlenderbotSmallConfig"),m(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(fe,"href","#transformers.BlenderbotSmallConfig"),m(ce,"class","relative group"),m(En,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),m(ut,"href","https://huggingface.co/facebook/blenderbot_small-90M"),m(ut,"rel","nofollow"),m(Mn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Cn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($o,"id","transformers.BlenderbotSmallTokenizer"),m($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m($o,"href","#transformers.BlenderbotSmallTokenizer"),m(ro,"class","relative group"),m(jn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Pn,"href","../glossary#token-type-ids"),m(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xo,"id","transformers.BlenderbotSmallTokenizerFast"),m(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(xo,"href","#transformers.BlenderbotSmallTokenizerFast"),m(io,"class","relative group"),m(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(zo,"id","transformers.BlenderbotSmallModel"),m(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(zo,"href","#transformers.BlenderbotSmallModel"),m(co,"class","relative group"),m(Nn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(qt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(qt,"rel","nofollow"),m(In,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel"),m(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Eo,"id","transformers.BlenderbotSmallForConditionalGeneration"),m(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Eo,"href","#transformers.BlenderbotSmallForConditionalGeneration"),m(mo,"class","relative group"),m(An,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Pt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Pt,"rel","nofollow"),m(Dn,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration"),m(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(jo,"id","transformers.BlenderbotSmallForCausalLM"),m(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(jo,"href","#transformers.BlenderbotSmallForCausalLM"),m(uo,"class","relative group"),m(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Lo,"id","transformers.TFBlenderbotSmallModel"),m(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Lo,"href","#transformers.TFBlenderbotSmallModel"),m(_o,"class","relative group"),m(Gn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(Rt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Rt,"rel","nofollow"),m(Un,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Do,"id","transformers.TFBlenderbotSmallForConditionalGeneration"),m(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Do,"href","#transformers.TFBlenderbotSmallForConditionalGeneration"),m(bo,"class","relative group"),m(Wn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(Xt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Xt,"rel","nofollow"),m(Rn,"href","/docs/transformers/main/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallForConditionalGeneration"),m(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Wo,"id","transformers.FlaxBlenderbotSmallModel"),m(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Wo,"href","#transformers.FlaxBlenderbotSmallModel"),m(vo,"class","relative group"),m(Hn,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(an,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),m(an,"rel","nofollow"),m(sn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(sn,"rel","nofollow"),m(rn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(rn,"rel","nofollow"),m(ln,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(ln,"rel","nofollow"),m(dn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(dn,"rel","nofollow"),m(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xo,"id","transformers.FlaxBlenderbotSmallForConditionalGeneration"),m(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Xo,"href","#transformers.FlaxBlenderbotSmallForConditionalGeneration"),m(yo,"class","relative group"),m(Kn,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(gn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),m(gn,"rel","nofollow"),m(bn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(bn,"rel","nofollow"),m(kn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(kn,"rel","nofollow"),m(vn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(vn,"rel","nofollow"),m(yn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(yn,"rel","nofollow"),m(et,"id","generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),m(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(et,"href","#generate-summary->>>-summary_ids-=-model.generate(inputs[\u2018input_ids\u2019]).sequences->>>"),m(Zo,"class","relative group"),m(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,p),_(t,k,g),_(t,f,g),e(f,h),e(h,b),T(d,b,null),e(f,u),e(f,F),e(F,Ce),_(t,he,g),_(t,B,g),e(B,je),e(B,W),e(W,Oe),e(B,Pe),e(B,R),e(R,Le),e(B,Ne),e(B,V),e(V,Q),e(B,Ie),e(B,Z),e(Z,j),e(B,L),e(B,ue),e(ue,ae),_(t,Be,g),_(t,J,g),e(J,D),e(D,be),T(se,be,null),e(J,N),e(J,ke),e(ke,re),_(t,ze,g),_(t,ee,g),e(ee,le),e(ee,de),e(de,Ae),e(ee,X),_(t,Fe,g),_(t,H,g),e(H,De),_(t,x,g),_(t,q,g),e(q,ie),e(ie,Ze),_(t,Re,g),_(t,O,g),e(O,eo),e(O,ve),e(ve,oo),e(O,Y),e(O,G),e(G,to),e(O,no),_(t,oe,g),_(t,ce,g),e(ce,fe),e(fe,ye),T(Te,ye,null),e(ce,ml),e(ce,ra),e(ra,hl),_(t,cr,g),_(t,we,g),T(ht,we,null),e(we,ul),e(we,ao),e(ao,fl),e(ao,En),e(En,_l),e(ao,gl),e(ao,ut),e(ut,bl),e(ao,kl),e(we,vl),e(we,so),e(so,yl),e(so,Mn),e(Mn,Tl),e(so,wl),e(so,Cn),e(Cn,$l),e(so,Sl),e(we,xl),T(wo,we,null),_(t,pr,g),_(t,ro,g),e(ro,$o),e($o,la),T(ft,la,null),e(ro,Bl),e(ro,da),e(da,zl),_(t,mr,g),_(t,U,g),T(_t,U,null),e(U,Fl),e(U,ia),e(ia,ql),e(U,El),e(U,gt),e(gt,Ml),e(gt,jn),e(jn,Cl),e(gt,jl),e(U,Ol),e(U,He),T(bt,He,null),e(He,Pl),e(He,ca),e(ca,Ll),e(He,Nl),e(He,pa),e(pa,Il),e(U,Al),e(U,So),T(kt,So,null),e(So,Dl),e(So,lo),e(lo,Gl),e(lo,ma),e(ma,Ul),e(lo,Wl),e(lo,ha),e(ha,Rl),e(lo,Hl),e(U,Kl),e(U,Ke),T(vt,Ke,null),e(Ke,Vl),e(Ke,On),e(On,Ql),e(On,Pn),e(Pn,Jl),e(Ke,Xl),e(Ke,ua),e(ua,Yl),e(U,Zl),e(U,Ln),T(yt,Ln,null),_(t,hr,g),_(t,io,g),e(io,xo),e(xo,fa),T(Tt,fa,null),e(io,ed),e(io,_a),e(_a,od),_(t,ur,g),_(t,Ge,g),T(wt,Ge,null),e(Ge,td),e(Ge,$t),e($t,nd),e($t,ga),e(ga,ad),e($t,sd),e(Ge,rd),e(Ge,Bo),T(St,Bo,null),e(Bo,ld),e(Bo,ba),e(ba,dd),_(t,fr,g),_(t,co,g),e(co,zo),e(zo,ka),T(xt,ka,null),e(co,id),e(co,va),e(va,cd),_(t,_r,g),_(t,$e,g),T(Bt,$e,null),e($e,pd),e($e,zt),e(zt,md),e(zt,Nn),e(Nn,hd),e(zt,ud),e($e,fd),e($e,Ft),e(Ft,_d),e(Ft,qt),e(qt,gd),e(Ft,bd),e($e,kd),e($e,qe),T(Et,qe,null),e(qe,vd),e(qe,po),e(po,yd),e(po,In),e(In,Td),e(po,wd),e(po,ya),e(ya,$d),e(po,Sd),e(qe,xd),T(Fo,qe,null),e(qe,Bd),T(qo,qe,null),_(t,gr,g),_(t,mo,g),e(mo,Eo),e(Eo,Ta),T(Mt,Ta,null),e(mo,zd),e(mo,wa),e(wa,Fd),_(t,br,g),_(t,Se,g),T(Ct,Se,null),e(Se,qd),e(Se,jt),e(jt,Ed),e(jt,An),e(An,Md),e(jt,Cd),e(Se,jd),e(Se,Ot),e(Ot,Od),e(Ot,Pt),e(Pt,Pd),e(Ot,Ld),e(Se,Nd),e(Se,Ee),T(Lt,Ee,null),e(Ee,Id),e(Ee,ho),e(ho,Ad),e(ho,Dn),e(Dn,Dd),e(ho,Gd),e(ho,$a),e($a,Ud),e(ho,Wd),e(Ee,Rd),T(Mo,Ee,null),e(Ee,Hd),T(Co,Ee,null),_(t,kr,g),_(t,uo,g),e(uo,jo),e(jo,Sa),T(Nt,Sa,null),e(uo,Kd),e(uo,xa),e(xa,Vd),_(t,vr,g),_(t,fo,g),T(It,fo,null),e(fo,Qd),e(fo,Oo),T(At,Oo,null),e(Oo,Jd),T(Po,Oo,null),_(t,yr,g),_(t,_o,g),e(_o,Lo),e(Lo,Ba),T(Dt,Ba,null),e(_o,Xd),e(_o,za),e(za,Yd),_(t,Tr,g),_(t,pe,g),T(Gt,pe,null),e(pe,Zd),e(pe,Ut),e(Ut,ei),e(Ut,Gn),e(Gn,oi),e(Ut,ti),e(pe,ni),e(pe,Wt),e(Wt,ai),e(Wt,Rt),e(Rt,si),e(Wt,ri),e(pe,li),T(No,pe,null),e(pe,di),e(pe,Me),T(Ht,Me,null),e(Me,ii),e(Me,go),e(go,ci),e(go,Un),e(Un,pi),e(go,mi),e(go,Fa),e(Fa,hi),e(go,ui),e(Me,fi),T(Io,Me,null),e(Me,_i),T(Ao,Me,null),_(t,wr,g),_(t,bo,g),e(bo,Do),e(Do,qa),T(Kt,qa,null),e(bo,gi),e(bo,Ea),e(Ea,bi),_(t,$r,g),_(t,me,g),T(Vt,me,null),e(me,ki),e(me,Qt),e(Qt,vi),e(Qt,Wn),e(Wn,yi),e(Qt,Ti),e(me,wi),e(me,Jt),e(Jt,$i),e(Jt,Xt),e(Xt,Si),e(Jt,xi),e(me,Bi),T(Go,me,null),e(me,zi),e(me,P),T(Yt,P,null),e(P,Fi),e(P,ko),e(ko,qi),e(ko,Rn),e(Rn,Ei),e(ko,Mi),e(ko,Ma),e(Ma,Ci),e(ko,ji),e(P,Oi),T(Uo,P,null),e(P,Pi),e(P,Ca),e(Ca,Li),e(P,Ni),e(P,ja),e(ja,Oa),e(Oa,Pa),e(Pa,La),e(La,Ii),e(P,Ai),e(P,Na),e(Na,Ia),e(Ia,Aa),e(Aa,Da),e(Da,Di),e(P,Gi),e(P,Ga),e(Ga,Ua),e(Ua,Wa),e(Wa,Ra),e(Ra,Ui),e(P,Wi),e(P,Ha),e(Ha,Ka),e(Ka,Va),e(Va,Zt),e(Zt,Ri),e(Zt,Qa),e(Qa,Hi),e(Zt,Ki),e(P,Vi),e(P,Ja),e(Ja,Xa),e(Xa,Ya),e(Ya,Za),e(Za,Qi),_(t,Sr,g),_(t,vo,g),e(vo,Wo),e(Wo,es),T(en,es,null),e(vo,Ji),e(vo,os),e(os,Xi),_(t,xr,g),_(t,I,g),T(on,I,null),e(I,Yi),e(I,tn),e(tn,Zi),e(tn,Hn),e(Hn,ec),e(tn,oc),e(I,tc),e(I,nn),e(nn,nc),e(nn,an),e(an,ac),e(nn,sc),e(I,rc),e(I,ts),e(ts,lc),e(I,dc),e(I,Ue),e(Ue,ns),e(ns,sn),e(sn,ic),e(Ue,cc),e(Ue,as),e(as,rn),e(rn,pc),e(Ue,mc),e(Ue,ss),e(ss,ln),e(ln,hc),e(Ue,uc),e(Ue,rs),e(rs,dn),e(dn,fc),e(I,_c),e(I,Ro),T(cn,Ro,null),e(Ro,gc),T(Ho,Ro,null),e(I,bc),e(I,Ko),T(pn,Ko,null),e(Ko,kc),T(Vo,Ko,null),e(I,vc),e(I,Qo),T(mn,Qo,null),e(Qo,yc),T(Jo,Qo,null),_(t,Br,g),_(t,yo,g),e(yo,Xo),e(Xo,ls),T(hn,ls,null),e(yo,Tc),e(yo,ds),e(ds,wc),_(t,zr,g),_(t,A,g),T(un,A,null),e(A,$c),e(A,fn),e(fn,Sc),e(fn,Kn),e(Kn,xc),e(fn,Bc),e(A,zc),e(A,_n),e(_n,Fc),e(_n,gn),e(gn,qc),e(_n,Ec),e(A,Mc),e(A,is),e(is,Cc),e(A,jc),e(A,We),e(We,cs),e(cs,bn),e(bn,Oc),e(We,Pc),e(We,ps),e(ps,kn),e(kn,Lc),e(We,Nc),e(We,ms),e(ms,vn),e(vn,Ic),e(We,Ac),e(We,hs),e(hs,yn),e(yn,Dc),e(A,Gc),e(A,E),T(Tn,E,null),e(E,Uc),e(E,To),e(To,Wc),e(To,us),e(us,Rc),e(To,Hc),e(To,fs),e(fs,Kc),e(To,Vc),e(E,Qc),T(Yo,E,null),e(E,Jc),e(E,_s),e(_s,Xc),e(E,Yc),e(E,gs),e(gs,bs),e(bs,ks),e(ks,vs),e(vs,Zc),e(E,ep),e(E,ys),e(ys,Ts),e(Ts,ws),e(ws,$s),e($s,op),e(E,tp),e(E,Ss),e(Ss,xs),e(xs,Bs),e(Bs,zs),e(zs,np),e(E,ap),e(E,Fs),e(Fs,qs),e(qs,wn),e(wn,Zo),e(Zo,et),e(et,Es),T($n,Es,null),e(Zo,sp),e(Zo,Ms),e(Ms,rp),e(wn,lp),e(wn,Cs),e(Cs,dp),e(E,ip),e(E,js),e(js,cp),e(E,pp),e(E,Os),e(Os,Ps),e(Ps,Ls),e(Ls,Ns),e(Ns,mp),e(E,hp),e(E,Is),e(Is,As),e(As,Ds),e(Ds,Gs),e(Gs,up),e(E,fp),e(E,Us),e(Us,Ws),e(Ws,Rs),e(Rs,Hs),e(Hs,_p),e(E,gp),e(E,Ks),e(Ks,Vs),e(Vs,Qs),e(Qs,Js),e(Js,bp),e(A,kp),e(A,ot),T(Sn,ot,null),e(ot,vp),T(tt,ot,null),e(A,yp),e(A,nt),T(xn,nt,null),e(nt,Tp),T(at,nt,null),Fr=!0},p(t,[g]){const Bn={};g&2&&(Bn.$$scope={dirty:g,ctx:t}),wo.$set(Bn);const Xs={};g&2&&(Xs.$$scope={dirty:g,ctx:t}),Fo.$set(Xs);const Ys={};g&2&&(Ys.$$scope={dirty:g,ctx:t}),qo.$set(Ys);const Zs={};g&2&&(Zs.$$scope={dirty:g,ctx:t}),Mo.$set(Zs);const _e={};g&2&&(_e.$$scope={dirty:g,ctx:t}),Co.$set(_e);const er={};g&2&&(er.$$scope={dirty:g,ctx:t}),Po.$set(er);const or={};g&2&&(or.$$scope={dirty:g,ctx:t}),No.$set(or);const tr={};g&2&&(tr.$$scope={dirty:g,ctx:t}),Io.$set(tr);const nr={};g&2&&(nr.$$scope={dirty:g,ctx:t}),Ao.$set(nr);const ar={};g&2&&(ar.$$scope={dirty:g,ctx:t}),Go.$set(ar);const zn={};g&2&&(zn.$$scope={dirty:g,ctx:t}),Uo.$set(zn);const sr={};g&2&&(sr.$$scope={dirty:g,ctx:t}),Ho.$set(sr);const rr={};g&2&&(rr.$$scope={dirty:g,ctx:t}),Vo.$set(rr);const lr={};g&2&&(lr.$$scope={dirty:g,ctx:t}),Jo.$set(lr);const Fn={};g&2&&(Fn.$$scope={dirty:g,ctx:t}),Yo.$set(Fn);const dr={};g&2&&(dr.$$scope={dirty:g,ctx:t}),tt.$set(dr);const ir={};g&2&&(ir.$$scope={dirty:g,ctx:t}),at.$set(ir)},i(t){Fr||(w(d.$$.fragment,t),w(se.$$.fragment,t),w(Te.$$.fragment,t),w(ht.$$.fragment,t),w(wo.$$.fragment,t),w(ft.$$.fragment,t),w(_t.$$.fragment,t),w(bt.$$.fragment,t),w(kt.$$.fragment,t),w(vt.$$.fragment,t),w(yt.$$.fragment,t),w(Tt.$$.fragment,t),w(wt.$$.fragment,t),w(St.$$.fragment,t),w(xt.$$.fragment,t),w(Bt.$$.fragment,t),w(Et.$$.fragment,t),w(Fo.$$.fragment,t),w(qo.$$.fragment,t),w(Mt.$$.fragment,t),w(Ct.$$.fragment,t),w(Lt.$$.fragment,t),w(Mo.$$.fragment,t),w(Co.$$.fragment,t),w(Nt.$$.fragment,t),w(It.$$.fragment,t),w(At.$$.fragment,t),w(Po.$$.fragment,t),w(Dt.$$.fragment,t),w(Gt.$$.fragment,t),w(No.$$.fragment,t),w(Ht.$$.fragment,t),w(Io.$$.fragment,t),w(Ao.$$.fragment,t),w(Kt.$$.fragment,t),w(Vt.$$.fragment,t),w(Go.$$.fragment,t),w(Yt.$$.fragment,t),w(Uo.$$.fragment,t),w(en.$$.fragment,t),w(on.$$.fragment,t),w(cn.$$.fragment,t),w(Ho.$$.fragment,t),w(pn.$$.fragment,t),w(Vo.$$.fragment,t),w(mn.$$.fragment,t),w(Jo.$$.fragment,t),w(hn.$$.fragment,t),w(un.$$.fragment,t),w(Tn.$$.fragment,t),w(Yo.$$.fragment,t),w($n.$$.fragment,t),w(Sn.$$.fragment,t),w(tt.$$.fragment,t),w(xn.$$.fragment,t),w(at.$$.fragment,t),Fr=!0)},o(t){$(d.$$.fragment,t),$(se.$$.fragment,t),$(Te.$$.fragment,t),$(ht.$$.fragment,t),$(wo.$$.fragment,t),$(ft.$$.fragment,t),$(_t.$$.fragment,t),$(bt.$$.fragment,t),$(kt.$$.fragment,t),$(vt.$$.fragment,t),$(yt.$$.fragment,t),$(Tt.$$.fragment,t),$(wt.$$.fragment,t),$(St.$$.fragment,t),$(xt.$$.fragment,t),$(Bt.$$.fragment,t),$(Et.$$.fragment,t),$(Fo.$$.fragment,t),$(qo.$$.fragment,t),$(Mt.$$.fragment,t),$(Ct.$$.fragment,t),$(Lt.$$.fragment,t),$(Mo.$$.fragment,t),$(Co.$$.fragment,t),$(Nt.$$.fragment,t),$(It.$$.fragment,t),$(At.$$.fragment,t),$(Po.$$.fragment,t),$(Dt.$$.fragment,t),$(Gt.$$.fragment,t),$(No.$$.fragment,t),$(Ht.$$.fragment,t),$(Io.$$.fragment,t),$(Ao.$$.fragment,t),$(Kt.$$.fragment,t),$(Vt.$$.fragment,t),$(Go.$$.fragment,t),$(Yt.$$.fragment,t),$(Uo.$$.fragment,t),$(en.$$.fragment,t),$(on.$$.fragment,t),$(cn.$$.fragment,t),$(Ho.$$.fragment,t),$(pn.$$.fragment,t),$(Vo.$$.fragment,t),$(mn.$$.fragment,t),$(Jo.$$.fragment,t),$(hn.$$.fragment,t),$(un.$$.fragment,t),$(Tn.$$.fragment,t),$(Yo.$$.fragment,t),$($n.$$.fragment,t),$(Sn.$$.fragment,t),$(tt.$$.fragment,t),$(xn.$$.fragment,t),$(at.$$.fragment,t),Fr=!1},d(t){o(p),t&&o(k),t&&o(f),S(d),t&&o(he),t&&o(B),t&&o(Be),t&&o(J),S(se),t&&o(ze),t&&o(ee),t&&o(Fe),t&&o(H),t&&o(x),t&&o(q),t&&o(Re),t&&o(O),t&&o(oe),t&&o(ce),S(Te),t&&o(cr),t&&o(we),S(ht),S(wo),t&&o(pr),t&&o(ro),S(ft),t&&o(mr),t&&o(U),S(_t),S(bt),S(kt),S(vt),S(yt),t&&o(hr),t&&o(io),S(Tt),t&&o(ur),t&&o(Ge),S(wt),S(St),t&&o(fr),t&&o(co),S(xt),t&&o(_r),t&&o($e),S(Bt),S(Et),S(Fo),S(qo),t&&o(gr),t&&o(mo),S(Mt),t&&o(br),t&&o(Se),S(Ct),S(Lt),S(Mo),S(Co),t&&o(kr),t&&o(uo),S(Nt),t&&o(vr),t&&o(fo),S(It),S(At),S(Po),t&&o(yr),t&&o(_o),S(Dt),t&&o(Tr),t&&o(pe),S(Gt),S(No),S(Ht),S(Io),S(Ao),t&&o(wr),t&&o(bo),S(Kt),t&&o($r),t&&o(me),S(Vt),S(Go),S(Yt),S(Uo),t&&o(Sr),t&&o(vo),S(en),t&&o(xr),t&&o(I),S(on),S(cn),S(Ho),S(pn),S(Vo),S(mn),S(Jo),t&&o(Br),t&&o(yo),S(hn),t&&o(zr),t&&o(A),S(un),S(Tn),S(Yo),S($n),S(Sn),S(tt),S(xn),S(at)}}}const Eu={local:"blenderbot-small",sections:[{local:"overview",title:"Overview"},{local:"transformers.BlenderbotSmallConfig",title:"BlenderbotSmallConfig"},{local:"transformers.BlenderbotSmallTokenizer",title:"BlenderbotSmallTokenizer"},{local:"transformers.BlenderbotSmallTokenizerFast",title:"BlenderbotSmallTokenizerFast"},{local:"transformers.BlenderbotSmallModel",title:"BlenderbotSmallModel"},{local:"transformers.BlenderbotSmallForConditionalGeneration",title:"BlenderbotSmallForConditionalGeneration"},{local:"transformers.BlenderbotSmallForCausalLM",title:"BlenderbotSmallForCausalLM"},{local:"transformers.TFBlenderbotSmallModel",title:"TFBlenderbotSmallModel"},{local:"transformers.TFBlenderbotSmallForConditionalGeneration",title:"TFBlenderbotSmallForConditionalGeneration"},{local:"transformers.FlaxBlenderbotSmallModel",title:"FlaxBlenderbotSmallModel"},{local:"transformers.FlaxBlenderbotSmallForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot Small"};function Mu(z){return mu(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Iu extends du{constructor(p){super();iu(this,p,Mu,qu,cu,{})}}export{Iu as default,Eu as metadata};
